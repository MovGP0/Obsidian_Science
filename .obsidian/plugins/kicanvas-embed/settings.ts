import {
  App,
  PluginSettingTab,
  Setting
} from "obsidian";
import type KiCanvasPlugin from "./main";

export interface KiCanvasPluginSettings
{
  defaultControls: string;
  defaultControlsList: string;
  defaultTheme: string;
  defaultHeight: string;
}

export const DEFAULT_SETTINGS: KiCanvasPluginSettings = {
  defaultControls: "basic",
  defaultControlsList: "",
  defaultTheme: "",
  defaultHeight: "70vh"
};

export class KiCanvasSettingTab extends PluginSettingTab
{
  private readonly _plugin: KiCanvasPlugin;

  public constructor(app: App, plugin: KiCanvasPlugin)
  {
    super(app, plugin);
    this._plugin = plugin;
  }

  public display(): void
  {
    const { containerEl } = this;

    containerEl.empty();
    containerEl.createEl("h2", { text: "KiCanvas" });

    new Setting(containerEl)
      .setName("Default controls")
      .setDesc("Controls mode used when a code block does not specify one.")
      .addDropdown((dropdown) =>
      {
        dropdown.addOption("none", "none");
        dropdown.addOption("basic", "basic");
        dropdown.addOption("full", "full");
        dropdown.setValue(this._plugin.settings.defaultControls);
        dropdown.onChange(async (value) =>
        {
          this._plugin.settings.defaultControls = value;
          await this._plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Default controls list")
      .setDesc("Optional controlslist attribute, for example 'nodownload nooverlay'.")
      .addText((text) =>
      {
        text.setPlaceholder("nodownload");
        text.setValue(this._plugin.settings.defaultControlsList);
        text.onChange(async (value) =>
        {
          this._plugin.settings.defaultControlsList = value.trim();
          await this._plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Default theme")
      .setDesc("Optional theme attribute. Current docs mention 'kicad' and 'witchhazel'.")
      .addText((text) =>
      {
        text.setPlaceholder("kicad");
        text.setValue(this._plugin.settings.defaultTheme);
        text.onChange(async (value) =>
        {
          this._plugin.settings.defaultTheme = value.trim();
          await this._plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Default height")
      .setDesc("CSS height applied to embedded viewers when the code block omits 'height'.")
      .addText((text) =>
      {
        text.setPlaceholder("70vh");
        text.setValue(this._plugin.settings.defaultHeight);
        text.onChange(async (value) =>
        {
          this._plugin.settings.defaultHeight = value.trim() || DEFAULT_SETTINGS.defaultHeight;
          await this._plugin.saveSettings();
        });
      });
  }
}
