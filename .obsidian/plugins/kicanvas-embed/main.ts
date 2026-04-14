import {
  MarkdownPostProcessorContext,
  Notice,
  Plugin,
  TFile,
  normalizePath
} from "obsidian";
import {
  DEFAULT_SETTINGS,
  KiCanvasPluginSettings,
  KiCanvasSettingTab
} from "./settings";

interface KiCanvasBlockOptions
{
  src: string | null;
  controls: string | null;
  controlsList: string | null;
  zoom: string | null;
  theme: string | null;
  height: string | null;
}

export default class KiCanvasPlugin extends Plugin
{
  public settings: KiCanvasPluginSettings = DEFAULT_SETTINGS;

  private _bundleLoadPromise: Promise<void> | null = null;

  public async onload(): Promise<void>
  {
    await this.loadSettings();

    this.registerMarkdownCodeBlockProcessor(
      "kicanvas",
      async (source: string, element: HTMLElement, context: MarkdownPostProcessorContext) =>
      {
        try
        {
          await this.renderKiCanvasBlock(source, element, context);
        }
        catch (error)
        {
          console.error("KiCanvas render error", error);

          element.empty();
          element.createDiv({
            cls: "kicanvas-error",
            text: `KiCanvas render failed: ${error instanceof Error ? error.message : String(error)}`
          });
        }
      }
    );

    this.addSettingTab(new KiCanvasSettingTab(this.app, this));
  }

  public async loadSettings(): Promise<void>
  {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  public async saveSettings(): Promise<void>
  {
    await this.saveData(this.settings);
  }

  private async renderKiCanvasBlock(
    source: string,
    element: HTMLElement,
    context: MarkdownPostProcessorContext
  ): Promise<void>
  {
    element.empty();

    await this.ensureKiCanvasLoaded();

    const options = this.parseBlockOptions(source);
    const sourcePath = options.src;

    if (!sourcePath)
    {
      throw new Error("Missing file path. Use a plain path or 'src: path/to/file.kicad_sch'.");
    }

    const resolvedFile = this.resolveVaultFile(sourcePath, context.sourcePath);

    if (!resolvedFile)
    {
      throw new Error(`File not found in vault: ${sourcePath}`);
    }

    const container = element.createDiv({ cls: "kicanvas-container" });
    const requestedHeight = options.height?.trim() || this.settings.defaultHeight;

    if (requestedHeight)
    {
      container.style.setProperty("--kicanvas-height", requestedHeight);
    }

    const embedElement = document.createElement("kicanvas-embed");
    embedElement.setAttribute("src", this.app.vault.adapter.getResourcePath(resolvedFile.path));

    const controls = options.controls ?? this.settings.defaultControls;
    const controlsList = options.controlsList ?? this.settings.defaultControlsList;
    const theme = options.theme ?? this.settings.defaultTheme;

    if (controls)
    {
      embedElement.setAttribute("controls", controls);
    }

    if (controlsList)
    {
      embedElement.setAttribute("controlslist", controlsList);
    }

    if (options.zoom)
    {
      embedElement.setAttribute("zoom", options.zoom);
    }

    if (theme)
    {
      embedElement.setAttribute("theme", theme);
    }

    container.appendChild(embedElement);
  }

  private async ensureKiCanvasLoaded(): Promise<void>
  {
    if (customElements.get("kicanvas-embed"))
    {
      return;
    }

    if (this._bundleLoadPromise)
    {
      return this._bundleLoadPromise;
    }

    this._bundleLoadPromise = this.loadKiCanvasBundle();

    try
    {
      await this._bundleLoadPromise;
    }
    catch (error)
    {
      this._bundleLoadPromise = null;
      new Notice("Failed to load the local KiCanvas bundle. See the console for details.");
      throw error;
    }
  }

  private async loadKiCanvasBundle(): Promise<void>
  {
    const bundleVaultPath = normalizePath(
      `${this.app.vault.configDir}/plugins/${this.manifest.id}/kicanvas.js`
    );

    if (!(await this.app.vault.adapter.exists(bundleVaultPath)))
    {
      throw new Error(`Missing KiCanvas bundle at ${bundleVaultPath}.`);
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[data-kicanvas-plugin="${this.manifest.id}"]`
    );

    if (existingScript)
    {
      await this.waitForScript(existingScript);
      return;
    }

    const scriptElement = document.createElement("script");
    scriptElement.type = "module";
    scriptElement.src = this.app.vault.adapter.getResourcePath(bundleVaultPath);
    scriptElement.dataset.kicanvasPlugin = this.manifest.id;

    const loadPromise = this.waitForScript(scriptElement);

    document.head.appendChild(scriptElement);

    await loadPromise;

    if (!customElements.get("kicanvas-embed"))
    {
      throw new Error("KiCanvas loaded but did not register the <kicanvas-embed> custom element.");
    }
  }

  private async waitForScript(scriptElement: HTMLScriptElement): Promise<void>
  {
    if (customElements.get("kicanvas-embed"))
    {
      return;
    }

    await new Promise<void>((resolve, reject) =>
    {
      scriptElement.addEventListener("load", () => resolve(), { once: true });
      scriptElement.addEventListener(
        "error",
        () => reject(new Error("Unable to load kicanvas.js.")),
        { once: true }
      );
    });
  }

  private parseBlockOptions(source: string): KiCanvasBlockOptions
  {
    const trimmedSource = source.trim();

    if (!trimmedSource)
    {
      return {
        src: null,
        controls: null,
        controlsList: null,
        zoom: null,
        theme: null,
        height: null
      };
    }

    const lines = trimmedSource
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    const hasKeyValueSyntax = lines.some((line) => /^[a-zA-Z][a-zA-Z0-9_-]*\s*:/.test(line));

    if (!hasKeyValueSyntax)
    {
      return {
        src: trimmedSource,
        controls: null,
        controlsList: null,
        zoom: null,
        theme: null,
        height: null
      };
    }

    const options: Record<string, string> = {};

    for (const line of lines)
    {
      const separatorIndex = line.indexOf(":");

      if (separatorIndex < 0)
      {
        continue;
      }

      const key = line.slice(0, separatorIndex).trim().toLowerCase();
      const value = line.slice(separatorIndex + 1).trim();

      if (value.length > 0)
      {
        options[key] = value;
      }
    }

    return {
      src: options.src ?? options.file ?? options.path ?? null,
      controls: options.controls ?? null,
      controlsList: options.controlslist ?? options["controls-list"] ?? null,
      zoom: options.zoom ?? null,
      theme: options.theme ?? null,
      height: options.height ?? null
    };
  }

  private resolveVaultFile(sourcePath: string, currentNotePath: string): TFile | null
  {
    const normalizedSourcePath = this.normalizeSourcePath(sourcePath);
    const directFile = this.app.vault.getAbstractFileByPath(normalizedSourcePath);

    if (directFile instanceof TFile)
    {
      return directFile;
    }

    const currentDirectory = currentNotePath.includes("/")
      ? currentNotePath.substring(0, currentNotePath.lastIndexOf("/"))
      : "";
    const relativePath = currentDirectory.length > 0
      ? normalizePath(`${currentDirectory}/${normalizedSourcePath}`)
      : normalizedSourcePath;
    const relativeFile = this.app.vault.getAbstractFileByPath(relativePath);

    return relativeFile instanceof TFile ? relativeFile : null;
  }

  private normalizeSourcePath(sourcePath: string): string
  {
    let normalizedPath = sourcePath.trim();

    if (normalizedPath.startsWith("[[") && normalizedPath.endsWith("]]"))
    {
      normalizedPath = normalizedPath.slice(2, -2);

      const aliasSeparatorIndex = normalizedPath.indexOf("|");

      if (aliasSeparatorIndex >= 0)
      {
        normalizedPath = normalizedPath.slice(0, aliasSeparatorIndex);
      }
    }

    return normalizePath(normalizedPath);
  }
}
