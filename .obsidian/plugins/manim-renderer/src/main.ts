import * as ManimWeb from "manim-web";
import { MarkdownPostProcessorContext, MarkdownRenderChild, Plugin } from "obsidian";

type ManimProgram = (
    scene: ManimWeb.Scene,
    manim: typeof ManimWeb,
    container: HTMLElement
) => Promise<unknown>;

type AsyncFunctionConstructor = new (...parameters: string[]) => ManimProgram;

const AsyncFunction = Object.getPrototypeOf(async function EmptyAsyncFunction()
{
    return undefined;
}).constructor as AsyncFunctionConstructor;

function GetErrorMessage(error: unknown): string
{
    if (error instanceof Error)
    {
        return `${error.name}: ${error.message}`;
    }

    return String(error);
}

class ManimRenderChild extends MarkdownRenderChild
{
    private readonly _source: string;
    private readonly _sourcePath: string;
    private _controlsEl!: HTMLElement;
    private _runButton!: HTMLButtonElement;
    private _scene: ManimWeb.Scene | null = null;
    private _statusEl!: HTMLElement;
    private _viewportEl!: HTMLElement;
    private _isRunning = false;
    private _isUnloaded = false;
    private _runSequence = 0;

    public constructor(containerEl: HTMLElement, source: string, sourcePath: string)
    {
        super(containerEl);
        this._source = source;
        this._sourcePath = sourcePath;
    }

    public onload(): void
    {
        this.containerEl.empty();
        this.containerEl.addClass("manim-web-block");

        this._viewportEl = this.containerEl.createDiv({
            cls: "manim-web-viewport"
        });

        this._controlsEl = this.containerEl.createDiv({
            cls: "manim-web-controls"
        });

        this._statusEl = this._controlsEl.createDiv({
            cls: "manim-web-status",
            attr: {
                "aria-live": "polite"
            }
        });

        this._runButton = this._controlsEl.createEl("button", {
            cls: "manim-web-run-button",
            text: "Run animation",
            attr: {
                type: "button"
            }
        });

        this.registerDomEvent(this._runButton, "click", () =>
        {
            if (this._isRunning)
            {
                this.StopAnimation();
                return;
            }

            void this.RunAnimation();
        });

        this.ShowPlaceholder();
        this.SetStatus("Ready to run");
    }

    public onunload(): void
    {
        this._isUnloaded = true;
        this.DisposeScene();
        this.containerEl.empty();
    }

    private CompileProgram(): ManimProgram
    {
        const sourceUrl = `obsidian-manim/${encodeURI(this._sourcePath)}`;
        const programSource = `"use strict";\n${this._source}\n//# sourceURL=${sourceUrl}`;

        return new AsyncFunction("scene", "manim", "container", programSource);
    }

    private DisposeScene(): void
    {
        this._runSequence++;

        if (this._scene !== null)
        {
            this._scene.dispose();
            this._scene = null;
        }

        this._isRunning = false;
    }

    private async RunAnimation(): Promise<void>
    {
        this.DisposeScene();

        const source = this._source.trim();

        if (source.length === 0)
        {
            this.ShowError("The manim block is empty.");
            return;
        }

        this._viewportEl.empty();
        this._statusEl.removeClass("is-error");
        this.SetStatus("Running");
        this._runButton.setText("Stop");
        this._isRunning = true;

        const runSequence = ++this._runSequence;

        try
        {
            const program = this.CompileProgram();
            const scene = new ManimWeb.Scene(this._viewportEl, {
                autoResize: true
            });

            this._scene = scene;
            await program(scene, ManimWeb, this._viewportEl);

            if (this._isUnloaded || runSequence !== this._runSequence)
            {
                return;
            }

            this._isRunning = false;
            this.SetStatus("Animation complete");
            this._runButton.setText("Replay");
        }
        catch (error)
        {
            if (this._isUnloaded || runSequence !== this._runSequence)
            {
                return;
            }

            this.DisposeScene();
            this.ShowError(GetErrorMessage(error));
        }
    }

    private SetStatus(message: string): void
    {
        this._statusEl.setText(message);
    }

    private ShowError(message: string): void
    {
        this._isRunning = false;
        this._statusEl.addClass("is-error");
        this.SetStatus(message);
        this._runButton.setText("Try again");
    }

    private ShowPlaceholder(): void
    {
        this._viewportEl.empty();
        this._viewportEl.createDiv({
            cls: "manim-web-placeholder",
            text: "Select Run animation to render this manim-web block."
        });
    }

    private StopAnimation(): void
    {
        this.DisposeScene();
        this.ShowPlaceholder();
        this._statusEl.removeClass("is-error");
        this.SetStatus("Stopped");
        this._runButton.setText("Run animation");
    }
}

export default class ManimRendererPlugin extends Plugin
{
    public onload(): void
    {
        this.registerMarkdownCodeBlockProcessor(
            "manim",
            (
                source: string,
                element: HTMLElement,
                context: MarkdownPostProcessorContext
            ) =>
            {
                context.addChild(new ManimRenderChild(element, source, context.sourcePath));
            }
        );
    }
}

