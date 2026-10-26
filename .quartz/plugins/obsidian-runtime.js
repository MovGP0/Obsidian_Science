// Runs Obsidian community plugins that render note content (code block processors and
// markdown post processors) on the published Quartz site. The plugins are loaded unmodified
// from `static/obsidian/plugins/<id>/main.js`; `require("obsidian")` resolves to the shim below.
;(() => {
  if (window.__obsidianRuntime) {
    return
  }

  const MATHJAX_URL = "https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-chtml-full.js"
  const YAML_URL = "https://cdn.jsdelivr.net/npm/js-yaml@4.1.0/dist/js-yaml.min.js"

  const loadScript = (src) =>
    new Promise((resolve, reject) => {
      const script = document.createElement("script")
      script.src = src
      script.async = true
      script.onload = resolve
      script.onerror = () => reject(new Error(`Unable to load ${src}`))
      document.head.appendChild(script)
    })

  const rootUrl = () => {
    const slug = document.body.dataset.slug ?? ""
    const depth = slug.split("/").length - 1
    return new URL("../".repeat(depth) || "./", window.location.href)
  }
  const runtimeUrl = (relative) => new URL(`static/obsidian/${relative}`, rootUrl()).href

  // ---------------------------------------------------------------------------------------
  // DOM helpers that Obsidian adds to the global prototypes.
  // ---------------------------------------------------------------------------------------
  const define = (target, name, value) => {
    if (!(name in target)) {
      Object.defineProperty(target, name, { value, writable: true, configurable: true })
    }
  }

  const applyInfo = (el, o) => {
    if (o === undefined || o === null) return
    if (typeof o === "string") {
      el.className = o
      return
    }
    if (o.cls) el.addClass(...(Array.isArray(o.cls) ? o.cls : String(o.cls).split(" ")))
    if (o.text !== undefined) {
      if (o.text instanceof Node) el.appendChild(o.text)
      else el.textContent = String(o.text)
    }
    if (o.title !== undefined) el.title = o.title
    if (o.value !== undefined) el.value = o.value
    if (o.type !== undefined) el.setAttribute("type", o.type)
    if (o.placeholder !== undefined) el.setAttribute("placeholder", o.placeholder)
    if (o.href !== undefined) el.setAttribute("href", o.href)
    if (o.attr) {
      for (const [key, value] of Object.entries(o.attr)) {
        if (value === null || value === false) el.removeAttribute(key)
        else el.setAttribute(key, value === true ? "" : String(value))
      }
    }
    if (o.parent) {
      if (o.prepend) o.parent.prepend(el)
      else o.parent.appendChild(el)
    }
  }

  const createElement = (tag, o, callback, namespace) => {
    const el = namespace ? document.createElementNS(namespace, tag) : document.createElement(tag)
    applyInfo(el, o)
    callback?.(el)
    return el
  }

  // Obsidian's extensions of the built-in types.
  define(String.prototype, "contains", function (target) {
    return this.includes(target)
  })
  define(String.prototype, "format", function (...args) {
    return this.replace(/{(\d+)}/g, (match, i) => (args[i] === undefined ? match : args[i]))
  })
  define(Array.prototype, "contains", function (target) {
    return this.includes(target)
  })
  define(Array.prototype, "first", function () {
    return this[0]
  })
  define(Array.prototype, "last", function () {
    return this[this.length - 1]
  })
  define(Array.prototype, "remove", function (target) {
    const index = this.indexOf(target)
    if (index >= 0) this.splice(index, 1)
  })
  define(Array.prototype, "unique", function () {
    return Array.from(new Set(this))
  })
  define(Array.prototype, "findLastIndex", function (predicate) {
    for (let i = this.length - 1; i >= 0; i--) if (predicate(this[i], i, this)) return i
    return -1
  })
  define(Math, "clamp", (value, min, max) => Math.min(Math.max(value, min), max))
  define(Math, "square", (value) => value * value)
  define(Number, "isNumber", (value) => typeof value === "number" && !Number.isNaN(value))
  define(Object, "isEmpty", (object) => Object.keys(object).length === 0)
  define(Object, "each", (object, callback) => {
    for (const key of Object.keys(object)) if (callback(object[key], key) === false) return false
    return true
  })

  const nodeProto = Node.prototype
  define(nodeProto, "empty", function () {
    while (this.firstChild) this.removeChild(this.firstChild)
  })
  define(nodeProto, "detach", function () {
    this.parentNode?.removeChild(this)
  })
  define(nodeProto, "createEl", function (tag, o, callback) {
    const el = createElement(tag, o, callback)
    if (o?.prepend) this.insertBefore(el, this.firstChild)
    else this.appendChild(el)
    return el
  })
  define(nodeProto, "createDiv", function (o, callback) {
    return this.createEl("div", o, callback)
  })
  define(nodeProto, "createSpan", function (o, callback) {
    return this.createEl("span", o, callback)
  })
  define(nodeProto, "createSvg", function (tag, o, callback) {
    const el = createElement(tag, o, callback, "http://www.w3.org/2000/svg")
    this.appendChild(el)
    return el
  })
  define(nodeProto, "appendText", function (text) {
    this.appendChild(document.createTextNode(text))
  })
  define(nodeProto, "setChildrenInPlace", function (children) {
    this.replaceChildren(...children)
  })
  define(nodeProto, "instanceOf", function (type) {
    return this instanceof type
  })
  define(nodeProto, "indexOf", function (child) {
    return Array.prototype.indexOf.call(this.childNodes, child)
  })
  define(nodeProto, "insertAfter", function (node, child) {
    this.insertBefore(node, child ? child.nextSibling : this.firstChild)
    return node
  })
  define(nodeProto, "doc", document)
  define(nodeProto, "win", window)

  const elementProto = Element.prototype
  define(elementProto, "addClass", function (...classes) {
    this.classList.add(...classes.flatMap((c) => String(c).split(" ")).filter(Boolean))
  })
  define(elementProto, "addClasses", function (classes) {
    this.addClass(...classes)
  })
  define(elementProto, "removeClass", function (...classes) {
    this.classList.remove(...classes)
  })
  define(elementProto, "removeClasses", function (classes) {
    this.removeClass(...classes)
  })
  define(elementProto, "toggleClass", function (classes, value) {
    for (const c of Array.isArray(classes) ? classes : [classes]) this.classList.toggle(c, value)
  })
  define(elementProto, "hasClass", function (c) {
    return this.classList.contains(c)
  })
  define(elementProto, "setText", function (text) {
    this.textContent = text instanceof Node ? "" : String(text)
    if (text instanceof Node) this.appendChild(text)
  })
  define(elementProto, "getText", function () {
    return this.textContent ?? ""
  })
  define(elementProto, "setAttr", function (key, value) {
    if (value === null || value === undefined || value === false) this.removeAttribute(key)
    else this.setAttribute(key, String(value))
  })
  define(elementProto, "setAttrs", function (attrs) {
    for (const [key, value] of Object.entries(attrs)) this.setAttr(key, value)
  })
  define(elementProto, "getAttr", function (key) {
    return this.getAttribute(key)
  })
  define(elementProto, "matchParent", function (selector, lastParent) {
    let el = this.parentElement
    while (el && el !== lastParent) {
      if (el.matches(selector)) return el
      el = el.parentElement
    }
    return null
  })
  define(elementProto, "find", function (selector) {
    return this.querySelector(selector)
  })
  define(elementProto, "findAll", function (selector) {
    return Array.from(this.querySelectorAll(selector))
  })
  define(elementProto, "findAllSelf", function (selector) {
    const found = this.findAll(selector)
    return this.matches(selector) ? [this, ...found] : found
  })
  define(elementProto, "setCssStyles", function (styles) {
    Object.assign(this.style, styles)
  })
  define(elementProto, "setCssProps", function (props) {
    for (const [key, value] of Object.entries(props)) this.style.setProperty(key, value)
  })
  define(elementProto, "show", function () {
    this.style.display = ""
  })
  define(elementProto, "hide", function () {
    this.style.display = "none"
  })
  define(elementProto, "toggle", function (show) {
    this.style.display = show ? "" : "none"
  })
  define(elementProto, "toggleVisibility", function (visible) {
    this.style.visibility = visible ? "" : "hidden"
  })
  define(elementProto, "isShown", function () {
    return this.style.display !== "none"
  })
  define(elementProto, "onClickEvent", function (listener, options) {
    this.addEventListener("click", listener, options)
  })
  define(EventTarget.prototype, "on", function (type, selector, listener, options) {
    this.addEventListener(
      type,
      (event) => {
        const target = event.target?.closest?.(selector)
        if (target) listener.call(this, event, target)
      },
      options,
    )
  })
  define(EventTarget.prototype, "off", function () {})

  define(window, "createEl", (tag, o, callback) => createElement(tag, o, callback))
  define(window, "createDiv", (o, callback) => createElement("div", o, callback))
  define(window, "createSpan", (o, callback) => createElement("span", o, callback))
  define(window, "createSvg", (tag, o, callback) =>
    createElement(tag, o, callback, "http://www.w3.org/2000/svg"),
  )
  define(window, "createFragment", (callback) => {
    const fragment = document.createDocumentFragment()
    callback?.(fragment)
    return fragment
  })
  define(window, "activeDocument", document)
  define(window, "activeWindow", window)
  define(window, "sleep", (ms) => new Promise((resolve) => setTimeout(resolve, ms)))
  define(window, "nextFrame", () => new Promise((resolve) => requestAnimationFrame(resolve)))
  // Editor-only APIs (syntax modes) that some plugins call while loading.
  define(window, "CodeMirror", {
    defineMode() {},
    getMode() {
      return {}
    },
    defineMIME() {},
  })

  // ---------------------------------------------------------------------------------------
  // MathJax (client side, only for plugin output such as graph labels and image captions).
  // ---------------------------------------------------------------------------------------
  let manifest = { plugins: [], files: {}, macros: {} }
  let mathJaxPromise = null
  const loadMathJax = () => {
    if (!mathJaxPromise) {
      mathJaxPromise = new Promise((resolve, reject) => {
        window.MathJax = {
          tex: {
            inlineMath: [
              ["$", "$"],
              ["\\(", "\\)"],
            ],
            processEscapes: true,
            macros: manifest.macros,
          },
          chtml: {},
          options: { enableMenu: false },
          startup: {
            typeset: false,
            ready() {
              window.MathJax.startup.defaultReady()
              window.MathJax.startup.promise.then(resolve, reject)
            },
          },
        }
        loadScript(MATHJAX_URL).catch(reject)
      })
    }
    return mathJaxPromise
  }

  // ---------------------------------------------------------------------------------------
  // Vault model.
  // ---------------------------------------------------------------------------------------
  const normalizePath = (p) =>
    String(p)
      .replace(/\\/g, "/")
      .replace(/\/+/g, "/")
      .replace(/^\/|\/$/g, "")
      .normalize("NFC")

  class TAbstractFile {
    constructor(filePath) {
      this.path = filePath
      this.name = filePath.split("/").pop()
      this.parent = null
      this.vault = vault
    }
  }
  class TFile extends TAbstractFile {
    constructor(filePath) {
      super(filePath)
      const dot = this.name.lastIndexOf(".")
      this.extension = dot > 0 ? this.name.slice(dot + 1) : ""
      this.basename = dot > 0 ? this.name.slice(0, dot) : this.name
      this.stat = { ctime: 0, mtime: 0, size: 0 }
    }
  }
  class TFolder extends TAbstractFile {
    constructor(filePath) {
      super(filePath)
      this.children = []
    }
    isRoot() {
      return this.path === "/"
    }
  }

  const fileUrl = (filePath) => {
    const p = normalizePath(filePath)
    const pluginMatch = /^\.obsidian\/plugins\/([^/]+)\/(.+)$/.exec(p)
    if (pluginMatch) return runtimeUrl(`plugins/${pluginMatch[1]}/${pluginMatch[2]}`)
    const slug = manifest.files[p]
    return slug === undefined ? null : new URL(slug, rootUrl()).href
  }

  const pluginFileExists = (p) => {
    const match = /^\.obsidian\/plugins\/([^/]+)\/(.+)$/.exec(p)
    return !!match && !!manifest.plugins.find((x) => x.id === match[1])?.files.includes(match[2])
  }

  const notSupported = (name) => () =>
    Promise.reject(new Error(`${name} is not available on the published site`))

  const vault = {
    configDir: ".obsidian",
    adapter: {
      exists: async (p) => pluginFileExists(normalizePath(p)) || normalizePath(p) in manifest.files,
      getResourcePath: (p) => fileUrl(p) ?? p,
      read: async (p) => {
        const url = fileUrl(p)
        if (!url) throw new Error(`File not found: ${p}`)
        return (await fetch(url)).text()
      },
      readBinary: async (p) => {
        const url = fileUrl(p)
        if (!url) throw new Error(`File not found: ${p}`)
        return (await fetch(url)).arrayBuffer()
      },
      write: notSupported("adapter.write"),
      writeBinary: notSupported("adapter.writeBinary"),
      list: async () => ({ files: [], folders: [] }),
    },
    getName: () => document.title,
    getAbstractFileByPath(p) {
      const normalized = normalizePath(p)
      return normalized in manifest.files ? new TFile(normalized) : null
    },
    getFileByPath(p) {
      return this.getAbstractFileByPath(p)
    },
    getFolderByPath: () => null,
    getRoot: () => new TFolder("/"),
    getAllLoadedFiles: () => Object.keys(manifest.files).map((p) => new TFile(p)),
    getFiles: () => Object.keys(manifest.files).map((p) => new TFile(p)),
    getMarkdownFiles: () =>
      Object.keys(manifest.files)
        .filter((p) => p.endsWith(".md"))
        .map((p) => new TFile(p)),
    getResourcePath: (file) => fileUrl(file.path) ?? file.path,
    read: (file) => vault.adapter.read(file.path),
    cachedRead: (file) => vault.adapter.read(file.path),
    readBinary: (file) => vault.adapter.readBinary(file.path),
    create: notSupported("vault.create"),
    createBinary: notSupported("vault.createBinary"),
    createFolder: notSupported("vault.createFolder"),
    modify: notSupported("vault.modify"),
    on: () => ({}),
    off() {},
    offref() {},
  }

  const currentNotePath = () => {
    const slug = document.body.dataset.slug ?? ""
    return Object.keys(manifest.files).find((p) => manifest.files[p] === slug) ?? `${slug}.md`
  }

  const resolveLink = (linkpath, sourcePath) => {
    const target = normalizePath(linkpath.split("#")[0].split("|")[0])
    const candidates = Object.keys(manifest.files)
    const directory = sourcePath.includes("/") ? sourcePath.slice(0, sourcePath.lastIndexOf("/")) : ""
    const exact = [target, `${target}.md`, `${directory}/${target}`, `${directory}/${target}.md`]
      .map(normalizePath)
      .find((p) => p in manifest.files)
    if (exact) return new TFile(exact)
    const byName = candidates.find((p) => p === target || p.endsWith(`/${target}`) || p.endsWith(`/${target}.md`))
    return byName ? new TFile(byName) : null
  }

  const workspace = {
    containerEl: document.body,
    layoutReady: true,
    on: () => ({}),
    off() {},
    offref() {},
    trigger() {},
    onLayoutReady: (callback) => callback(),
    getActiveFile: () => new TFile(currentNotePath()),
    getActiveViewOfType: () => null,
    getLeavesOfType: () => [],
    iterateAllLeaves() {},
    getLeaf: () => ({ openFile: async () => {} }),
    openLinkText: async (linktext, sourcePath) => {
      const file = resolveLink(linktext, sourcePath ?? currentNotePath())
      const url = file && fileUrl(file.path)
      if (url) window.location.href = url
    },
  }

  const app = {
    vault,
    workspace,
    metadataCache: {
      on: () => ({}),
      off() {},
      offref() {},
      getFirstLinkpathDest: resolveLink,
      getFileCache: () => null,
      getCache: () => null,
      resolvedLinks: {},
      unresolvedLinks: {},
    },
    fileManager: { processFrontMatter: notSupported("fileManager.processFrontMatter") },
    plugins: { plugins: {}, enabledPlugins: new Set(), getPlugin: (id) => app.plugins.plugins[id] ?? null },
    isMobile: window.matchMedia("(max-width: 800px)").matches,
    loadLocalStorage: (key) => {
      try {
        return JSON.parse(localStorage.getItem(`obsidian-${key}`))
      } catch {
        return null
      }
    },
    saveLocalStorage: (key, value) => {
      try {
        localStorage.setItem(`obsidian-${key}`, JSON.stringify(value))
      } catch {}
    },
  }

  // ---------------------------------------------------------------------------------------
  // Plugin API.
  // ---------------------------------------------------------------------------------------
  const codeBlockProcessors = new Map()
  const postProcessors = []

  class Events {
    on() {
      return {}
    }
    off() {}
    offref() {}
    trigger() {}
  }

  class Component {
    constructor() {
      this._children = []
      this._cleanups = []
      this._loaded = false
    }
    load() {
      if (this._loaded) return
      this._loaded = true
      this.onload?.()
      this._children.forEach((child) => child.load())
    }
    onload() {}
    unload() {
      this._children.forEach((child) => child.unload())
      this._cleanups.splice(0).forEach((cleanup) => cleanup())
      this._loaded = false
      this.onunload?.()
    }
    onunload() {}
    addChild(child) {
      this._children.push(child)
      if (this._loaded) child.load()
      return child
    }
    removeChild(child) {
      this._children = this._children.filter((c) => c !== child)
      child.unload()
      return child
    }
    register(cleanup) {
      this._cleanups.push(cleanup)
    }
    registerEvent() {}
    registerDomEvent(target, type, listener, options) {
      target.addEventListener(type, listener, options)
      this.register(() => target.removeEventListener(type, listener, options))
    }
    registerInterval(id) {
      this.register(() => clearInterval(id))
      return id
    }
  }

  class MarkdownRenderChild extends Component {
    constructor(containerEl) {
      super()
      this.containerEl = containerEl
    }
  }

  class Plugin extends Component {
    constructor(appInstance, pluginManifest) {
      super()
      this.app = appInstance
      this.manifest = pluginManifest
    }
    async loadData() {
      return manifest.plugins.find((p) => p.id === this.manifest.id)?.data ?? null
    }
    async saveData() {}
    addSettingTab() {}
    addCommand(command) {
      return command
    }
    addRibbonIcon() {
      return document.createElement("div")
    }
    addStatusBarItem() {
      return document.createElement("div")
    }
    registerView() {}
    registerExtensions() {}
    registerEditorExtension() {}
    registerEditorSuggest() {}
    registerHoverLinkSource() {}
    registerObsidianProtocolHandler() {}
    registerMarkdownCodeBlockProcessor(language, handler, sortOrder) {
      codeBlockProcessors.set(language, { handler, sortOrder, plugin: this })
    }
    registerMarkdownPostProcessor(handler, sortOrder) {
      postProcessors.push({ handler, sortOrder: sortOrder ?? 0, plugin: this })
      postProcessors.sort((a, b) => a.sortOrder - b.sortOrder)
      return handler
    }
  }

  // Inline Markdown as used in captions and labels: emphasis, code, links and inline math.
  const renderInlineMarkdown = (markdown) => {
    const escape = (text) =>
      // Character references such as `&#91;` are kept, as in Obsidian's Markdown renderer.
      text.replace(/&(?!#?\w+;)|[<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c])
    const stash = []
    const keep = (html) => `\u0000${stash.push(html) - 1}\u0000`
    let text = markdown
      .replace(/`([^`]+)`/g, (_, code) => keep(`<code>${escape(code)}</code>`))
      .replace(/\$\$([^$]+)\$\$|\$([^$\n]+)\$/g, (_, block, inline) =>
        keep(
          `<span class="obsidian-math" data-display="${block ? "true" : "false"}">${escape(block ?? inline)}</span>`,
        ),
      )
    text = escape(text)
      .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2")
      .replace(/\[\[([^\]]+)\]\]/g, "$1")
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
      .replace(/\*\*([^*]+)\*\*|__([^_]+)__/g, (_, a, b) => `<strong>${a ?? b}</strong>`)
      .replace(/\*([^*]+)\*|\b_([^_]+)_\b/g, (_, a, b) => `<em>${a ?? b}</em>`)
      .replace(/==([^=]+)==/g, "<mark>$1</mark>")
    return text.replace(/\u0000(\d+)\u0000/g, (_, i) => stash[Number(i)])
  }

  const renderMarkdown = async (markdown, el) => {
    const paragraph = document.createElement("p")
    paragraph.innerHTML = renderInlineMarkdown(markdown)
    el.appendChild(paragraph)
    const math = paragraph.querySelectorAll(".obsidian-math")
    if (math.length > 0) {
      await loadMathJax()
      for (const span of math) {
        const display = span.dataset.display === "true"
        span.replaceChildren(await window.MathJax.tex2chtmlPromise(span.textContent, { display }))
      }
      // Adds the CHTML stylesheet for the fonts and glyphs used so far.
      window.MathJax.startup.document.clear()
      window.MathJax.startup.document.updateDocument()
    }
  }

  class Chainable {
    constructor(containerEl) {
      // Every unknown method (setName, addText, onChange, ...) is a no-op that returns `this`.
      this.settingEl = this.containerEl = containerEl ?? document.createElement("div")
      const proxy = new Proxy(this, {
        get: (target, prop) =>
          prop in target ? target[prop] : typeof prop === "string" ? () => proxy : undefined,
      })
      return proxy
    }
  }

  const obsidian = {
    Plugin,
    Component,
    Events,
    MarkdownRenderChild,
    MarkdownPreviewRenderer: { registerPostProcessor() {}, unregisterPostProcessor() {} },
    MarkdownRenderer: {
      render: (_app, markdown, el) => renderMarkdown(markdown, el),
      renderMarkdown: (markdown, el) => renderMarkdown(markdown, el),
    },
    MarkdownView: class MarkdownView {},
    ItemView: class ItemView extends Component {},
    FileView: class FileView extends Component {},
    TextFileView: class TextFileView extends Component {},
    WorkspaceLeaf: class WorkspaceLeaf {},
    TAbstractFile,
    TFile,
    TFolder,
    Notice: class Notice {
      constructor(message) {
        console.info(`[Obsidian] ${message instanceof Node ? message.textContent : message}`)
      }
      setMessage() {
        return this
      }
      hide() {}
    },
    Modal: class Modal {
      constructor(appInstance) {
        this.app = appInstance
        this.containerEl = document.createElement("div")
        this.modalEl = this.containerEl.createDiv()
        this.titleEl = this.modalEl.createDiv()
        this.contentEl = this.modalEl.createDiv()
      }
      open() {}
      close() {}
      setTitle() {
        return this
      }
      setContent() {
        return this
      }
    },
    PluginSettingTab: class PluginSettingTab {
      constructor(appInstance, plugin) {
        this.app = appInstance
        this.plugin = plugin
        this.containerEl = document.createElement("div")
      }
      display() {}
      hide() {}
    },
    Setting: class Setting extends Chainable {},
    AbstractInputSuggest: class AbstractInputSuggest {
      constructor(appInstance, inputEl) {
        this.app = appInstance
        this.inputEl = inputEl
      }
      close() {}
      onSelect() {
        return this
      }
    },
    SuggestModal: class SuggestModal {
      open() {}
      close() {}
    },
    FuzzySuggestModal: class FuzzySuggestModal {
      open() {}
      close() {}
    },
    Menu: class Menu extends Chainable {},
    Platform: {
      isDesktop: true,
      isDesktopApp: false,
      isMobile: false,
      isMobileApp: false,
      isMacOS: /Mac/.test(navigator.platform),
      isWin: /Win/.test(navigator.platform),
      isLinux: /Linux/.test(navigator.platform),
    },
    apiVersion: "1.7.7",
    normalizePath,
    setIcon() {},
    addIcon() {},
    getIcon: () => null,
    setTooltip() {},
    debounce: (fn, wait = 0) => {
      let timer
      return Object.assign(
        (...args) => {
          clearTimeout(timer)
          timer = setTimeout(() => fn(...args), wait)
        },
        { cancel: () => clearTimeout(timer) },
      )
    },
    requestUrl: async (request) => {
      const options = typeof request === "string" ? { url: request } : request
      const response = await fetch(options.url, {
        method: options.method,
        headers: options.headers,
        body: options.body,
      })
      const arrayBuffer = await response.arrayBuffer()
      const text = new TextDecoder().decode(arrayBuffer)
      return {
        status: response.status,
        headers: Object.fromEntries(response.headers),
        arrayBuffer,
        text,
        get json() {
          return JSON.parse(text)
        },
      }
    },
    parseYaml: (text) => window.jsyaml.load(text),
    stringifyYaml: (value) => window.jsyaml.dump(value),
    moment: window.moment,
    loadMathJax,
    loadPrism: async () => window.Prism,
    loadMermaid: async () => window.mermaid,
    renderMath: (source, display) => {
      const el = document.createElement(display ? "div" : "span")
      el.textContent = display ? `\\[${source}\\]` : `\\(${source}\\)`
      return el
    },
    finishRenderMath: async () => {
      await loadMathJax()
      await window.MathJax.typesetPromise()
    },
    htmlToMarkdown: (html) => (typeof html === "string" ? html : html.textContent ?? ""),
    sanitizeHTMLToDom: (html) => {
      const template = document.createElement("template")
      template.innerHTML = html
      return template.content
    },
  }

  const obsidianModule = new Proxy(obsidian, {
    get: (target, prop) => {
      if (prop in target) return target[prop]
      if (typeof prop !== "string" || prop === "__esModule" || prop === "default") return undefined
      console.debug(`[Obsidian] API "${prop}" is not available on the published site.`)
      return class Unsupported extends Chainable {}
    },
  })

  // ---------------------------------------------------------------------------------------
  // Loading plugins and rendering the page.
  // ---------------------------------------------------------------------------------------
  const loadPlugin = async (entry) => {
    const source = await (await fetch(runtimeUrl(`plugins/${entry.id}/main.js`))).text()
    const module = { exports: {} }
    const require = (name) => {
      if (name === "obsidian") return obsidianModule
      throw new Error(`Module "${name}" is not available on the published site`)
    }
    new Function("module", "exports", "require", `${source}\n//# sourceURL=obsidian-plugin-${entry.id}.js`)(
      module,
      module.exports,
      require,
    )
    const PluginClass = module.exports.default ?? module.exports
    const plugin = new PluginClass(app, entry.manifest)
    app.plugins.plugins[entry.id] = plugin
    app.plugins.enabledPlugins.add(entry.id)
    plugin._loaded = true
    await plugin.onload()
  }

  const makeContext = (el, sourcePath) => {
    const component = new Component()
    return {
      docId: sourcePath,
      sourcePath,
      frontmatter: {},
      el,
      addChild: (child) => component.addChild(child),
      getSectionInfo: () => null,
    }
  }

  const renderBlock = async (el) => {
    el.dataset.obsidianRendered = "true"
    const language = el.dataset.obsidianLanguage
    const processor = codeBlockProcessors.get(language)
    if (!processor) return
    const sourcePath = el.dataset.obsidianPath || currentNotePath()
    try {
      el.empty()
      await processor.handler(el.dataset.obsidianSource ?? "", el, makeContext(el, sourcePath))
    } catch (error) {
      console.error(`[Obsidian] Failed to render "${language}" block`, error)
    }
  }

  const postProcess = async (container) => {
    container.dataset.obsidianProcessed = "true"
    const sourcePath = currentNotePath()
    for (const { handler } of postProcessors) {
      try {
        await handler(container, makeContext(container, sourcePath))
      } catch (error) {
        console.error("[Obsidian] Post processor failed", error)
      }
    }
  }

  const CONTAINERS = "article, .popover-inner"
  const renderPage = () => {
    document
      .querySelectorAll(".obsidian-plugin-block:not([data-obsidian-rendered])")
      .forEach((el) => renderBlock(el))
    if (postProcessors.length > 0) {
      document
        .querySelectorAll(`:is(${CONTAINERS}):not([data-obsidian-processed])`)
        .forEach((container) => postProcess(container))
    }
  }

  let scheduled = false
  const scheduleRender = () => {
    if (scheduled) return
    scheduled = true
    requestAnimationFrame(() => {
      scheduled = false
      renderPage()
    })
  }

  window.__obsidianRuntime = (async () => {
    const [loadedManifest] = await Promise.all([
      fetch(runtimeUrl("manifest.json")).then((response) => response.json()),
      window.jsyaml ? null : loadScript(YAML_URL),
    ])
    manifest = loadedManifest
    for (const entry of manifest.plugins) {
      try {
        await loadPlugin(entry)
      } catch (error) {
        console.error(`[Obsidian] Failed to load plugin "${entry.id}"`, error)
      }
    }
    renderPage()
    document.addEventListener("nav", scheduleRender)
    new MutationObserver(scheduleRender).observe(document.body, { childList: true, subtree: true })
  })()
})()
