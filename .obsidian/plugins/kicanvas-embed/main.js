var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// .obsidian/plugins/kicanvas-embed/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => KiCanvasPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian2 = require("obsidian");

// .obsidian/plugins/kicanvas-embed/settings.ts
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  defaultControls: "basic",
  defaultControlsList: "",
  defaultTheme: "",
  defaultHeight: "70vh"
};
var KiCanvasSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    __publicField(this, "_plugin");
    this._plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "KiCanvas" });
    new import_obsidian.Setting(containerEl).setName("Default controls").setDesc("Controls mode used when a code block does not specify one.").addDropdown((dropdown) => {
      dropdown.addOption("none", "none");
      dropdown.addOption("basic", "basic");
      dropdown.addOption("full", "full");
      dropdown.setValue(this._plugin.settings.defaultControls);
      dropdown.onChange(async (value) => {
        this._plugin.settings.defaultControls = value;
        await this._plugin.saveSettings();
      });
    });
    new import_obsidian.Setting(containerEl).setName("Default controls list").setDesc("Optional controlslist attribute, for example 'nodownload nooverlay'.").addText((text) => {
      text.setPlaceholder("nodownload");
      text.setValue(this._plugin.settings.defaultControlsList);
      text.onChange(async (value) => {
        this._plugin.settings.defaultControlsList = value.trim();
        await this._plugin.saveSettings();
      });
    });
    new import_obsidian.Setting(containerEl).setName("Default theme").setDesc("Optional theme attribute. Current docs mention 'kicad' and 'witchhazel'.").addText((text) => {
      text.setPlaceholder("kicad");
      text.setValue(this._plugin.settings.defaultTheme);
      text.onChange(async (value) => {
        this._plugin.settings.defaultTheme = value.trim();
        await this._plugin.saveSettings();
      });
    });
    new import_obsidian.Setting(containerEl).setName("Default height").setDesc("CSS height applied to embedded viewers when the code block omits 'height'.").addText((text) => {
      text.setPlaceholder("70vh");
      text.setValue(this._plugin.settings.defaultHeight);
      text.onChange(async (value) => {
        this._plugin.settings.defaultHeight = value.trim() || DEFAULT_SETTINGS.defaultHeight;
        await this._plugin.saveSettings();
      });
    });
  }
};

// .obsidian/plugins/kicanvas-embed/main.ts
var KiCanvasPlugin = class extends import_obsidian2.Plugin {
  constructor() {
    super(...arguments);
    __publicField(this, "settings", DEFAULT_SETTINGS);
    __publicField(this, "_bundleLoadPromise", null);
  }
  async onload() {
    await this.loadSettings();
    this.registerMarkdownCodeBlockProcessor(
      "kicanvas",
      async (source, element, context) => {
        try {
          await this.renderKiCanvasBlock(source, element, context);
        } catch (error) {
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
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  async renderKiCanvasBlock(source, element, context) {
    element.empty();
    await this.ensureKiCanvasLoaded();
    const options = this.parseBlockOptions(source);
    const sourcePath = options.src;
    if (!sourcePath) {
      throw new Error("Missing file path. Use a plain path or 'src: path/to/file.kicad_sch'.");
    }
    const resolvedFile = this.resolveVaultFile(sourcePath, context.sourcePath);
    if (!resolvedFile) {
      throw new Error(`File not found in vault: ${sourcePath}`);
    }
    const container = element.createDiv({ cls: "kicanvas-container" });
    const requestedHeight = options.height?.trim() || this.settings.defaultHeight;
    if (requestedHeight) {
      container.style.setProperty("--kicanvas-height", requestedHeight);
    }
    const embedElement = document.createElement("kicanvas-embed");
    embedElement.setAttribute("src", this.app.vault.adapter.getResourcePath(resolvedFile.path));
    const controls = options.controls ?? this.settings.defaultControls;
    const controlsList = options.controlsList ?? this.settings.defaultControlsList;
    const theme = options.theme ?? this.settings.defaultTheme;
    if (controls) {
      embedElement.setAttribute("controls", controls);
    }
    if (controlsList) {
      embedElement.setAttribute("controlslist", controlsList);
    }
    if (options.zoom) {
      embedElement.setAttribute("zoom", options.zoom);
    }
    if (theme) {
      embedElement.setAttribute("theme", theme);
    }
    container.appendChild(embedElement);
  }
  async ensureKiCanvasLoaded() {
    if (customElements.get("kicanvas-embed")) {
      return;
    }
    if (this._bundleLoadPromise) {
      return this._bundleLoadPromise;
    }
    this._bundleLoadPromise = this.loadKiCanvasBundle();
    try {
      await this._bundleLoadPromise;
    } catch (error) {
      this._bundleLoadPromise = null;
      new import_obsidian2.Notice("Failed to load the local KiCanvas bundle. See the console for details.");
      throw error;
    }
  }
  async loadKiCanvasBundle() {
    const bundleVaultPath = (0, import_obsidian2.normalizePath)(
      `${this.app.vault.configDir}/plugins/${this.manifest.id}/kicanvas.js`
    );
    if (!await this.app.vault.adapter.exists(bundleVaultPath)) {
      throw new Error(`Missing KiCanvas bundle at ${bundleVaultPath}.`);
    }
    const existingScript = document.querySelector(
      `script[data-kicanvas-plugin="${this.manifest.id}"]`
    );
    if (existingScript) {
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
    if (!customElements.get("kicanvas-embed")) {
      throw new Error("KiCanvas loaded but did not register the <kicanvas-embed> custom element.");
    }
  }
  async waitForScript(scriptElement) {
    if (customElements.get("kicanvas-embed")) {
      return;
    }
    await new Promise((resolve, reject) => {
      scriptElement.addEventListener("load", () => resolve(), { once: true });
      scriptElement.addEventListener(
        "error",
        () => reject(new Error("Unable to load kicanvas.js.")),
        { once: true }
      );
    });
  }
  parseBlockOptions(source) {
    const trimmedSource = source.trim();
    if (!trimmedSource) {
      return {
        src: null,
        controls: null,
        controlsList: null,
        zoom: null,
        theme: null,
        height: null
      };
    }
    const lines = trimmedSource.split(/\r?\n/).map((line) => line.trim()).filter((line) => line.length > 0);
    const hasKeyValueSyntax = lines.some((line) => /^[a-zA-Z][a-zA-Z0-9_-]*\s*:/.test(line));
    if (!hasKeyValueSyntax) {
      return {
        src: trimmedSource,
        controls: null,
        controlsList: null,
        zoom: null,
        theme: null,
        height: null
      };
    }
    const options = {};
    for (const line of lines) {
      const separatorIndex = line.indexOf(":");
      if (separatorIndex < 0) {
        continue;
      }
      const key = line.slice(0, separatorIndex).trim().toLowerCase();
      const value = line.slice(separatorIndex + 1).trim();
      if (value.length > 0) {
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
  resolveVaultFile(sourcePath, currentNotePath) {
    const normalizedSourcePath = this.normalizeSourcePath(sourcePath);
    const directFile = this.app.vault.getAbstractFileByPath(normalizedSourcePath);
    if (directFile instanceof import_obsidian2.TFile) {
      return directFile;
    }
    const currentDirectory = currentNotePath.includes("/") ? currentNotePath.substring(0, currentNotePath.lastIndexOf("/")) : "";
    const relativePath = currentDirectory.length > 0 ? (0, import_obsidian2.normalizePath)(`${currentDirectory}/${normalizedSourcePath}`) : normalizedSourcePath;
    const relativeFile = this.app.vault.getAbstractFileByPath(relativePath);
    return relativeFile instanceof import_obsidian2.TFile ? relativeFile : null;
  }
  normalizeSourcePath(sourcePath) {
    let normalizedPath = sourcePath.trim();
    if (normalizedPath.startsWith("[[") && normalizedPath.endsWith("]]")) {
      normalizedPath = normalizedPath.slice(2, -2);
      const aliasSeparatorIndex = normalizedPath.indexOf("|");
      if (aliasSeparatorIndex >= 0) {
        normalizedPath = normalizedPath.slice(0, aliasSeparatorIndex);
      }
    }
    return (0, import_obsidian2.normalizePath)(normalizedPath);
  }
};
