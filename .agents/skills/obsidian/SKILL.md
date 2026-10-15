---
name: obsidian
description: Create, translate, edit, and validate Obsidian Markdown notes in this repository. Use for English prose, frontmatter titles, LaTeX, wiki links, tables, and Graphs plots.
version: 1.5.1
tags:
  - obsidian
  - markdown
  - documentation
---

# Obsidian Notes

## Overview

This skill defines the repository-specific conventions for creating, translating, editing, and validating Obsidian notes.

## When to Use

Use this skill when:

- creating or editing a Markdown note in this repository;
- translating note content into English;
- adding or correcting a frontmatter title;
- adding or correcting a figure caption;
- writing LaTeX equations;
- adding wiki links or editing tables containing wiki links; or
- reproducing a mathematical figure with the installed Graphs plugin.

## Instructions

Apply the following conventions whenever creating or editing a note. Inspect the target and nearby notes first, and preserve any more specific local structure.

### Language

- English is the principal language for notes, titles, captions, labels, and newly added prose.
- Adhere to ASD-STE100 Simplified Technical English https://www.asd-ste100.org/
- Translate supplied non-English material into natural technical English while preserving its meaning and useful tone.
- Keep established technical symbols and internationally recognized abbreviations unchanged.
- Do not rename files, headings, links, or identifiers outside the requested scope merely to make their language consistent.

### Frontmatter title

- Begin each note with YAML frontmatter containing a quoted `title` value:

  ```yaml
  ---
  title: "1.2 Quantum mechanics (QM)"
  ---
  ```

- Treat `title` as the human-readable display title. The installed Front Matter Title plugin uses it in the file explorer.
- Use plain text and Unicode symbols in `title`. Obsidian does not render LaTeX in frontmatter titles. Do not use math delimiters, LaTeX commands, or semantic quantity macros in the title.
- Replace mathematical notation in titles with equivalent Unicode symbols. For example, use `λ/4`, `Ω`, `R₁`, `x²`, and `𝐇`. Preserve the mathematical meaning and use a plain-text expression when Unicode has no suitable symbol. Keep LaTeX in article content where it can render.
- Preserve the note's numeric prefix when the surrounding note family is numbered.
- Use natural English spelling and typography in `title`, even when the filesystem-safe filename is plainer. For example, a filename may use `Schrodinger` while its title uses `Schrödinger`, or a filename may use ` - ` while its title uses an en dash.
- Keep the title in double quotes so punctuation is unambiguous YAML.
- Do not add a duplicate level-one heading when nearby notes rely on the frontmatter title instead.
- Preserve additional existing frontmatter properties and their order unless the task requires changing them.

### TLDR summary

- Add one TLDR callout immediately after the closing frontmatter delimiter in every article that has body content.
- Use this exact structure, with one blank line before and after the callout:

  ```markdown
  ---
  title: "1.2 Quantum mechanics (QM)"
  ---

  > [!TLDR]
  > Quantum mechanics describes matter and energy at atomic and subatomic scales.

  Article content starts here.
  ```

- Keep the summary short and direct. Use one sentence when possible and no more than two short sentences.
- Describe the article's main concept, behavior, or purpose. Do not only repeat the title.
- Use LaTeX only when it is necessary for a precise technical summary.
- Keep the summary in ASD-STE100 Simplified Technical English.
- Do not add a TLDR callout to a frontmatter-only placeholder article.
- Keep exactly one TLDR callout in each content-bearing article. Update an existing TLDR callout instead of adding a duplicate.

### Markdown structure

- Preserve the existing heading hierarchy, paragraph flow, wiki links, embeds, callouts, and code fences.
- Link to other articles with Obsidian wiki links using the article filename: `[[Article filename]]`.
- Do not include the `.md` extension in a wiki link.
- Prefer `[[Filename]]` over relative or explicit-path forms such as `[[./path/to/file/Filename]]` whenever the filename resolves uniquely in the vault.
- When duplicate filenames require disambiguation, use only the shortest vault-relative path needed to identify the intended note.
- Add an alias only when the surrounding sentence needs different display text: `[[Article filename|display text]]`.
- Inside Markdown tables, escape the alias separator in wiki links: `[[Target\|Display text]]`.
- Keep edits narrow. Do not normalize or rewrite unrelated notes or unrelated workspace changes.
- Store Markdown files as UTF-8 with BOM and CRLF line endings.

### Notes and callouts

- Format an explicit note as an Obsidian note callout:

  ```markdown
  > [!note]
  > Although Lenard made an important contribution to quantum mechanics, ...
  ```

- Prefix every line belonging to the callout with `>`, including blank separator lines in a multi-paragraph note.
- Keep the note text in English and preserve any Markdown or LaTeX needed inside the callout.

### Figure captions

- Translate labels such as `Abb. 1.1` to the English form `Fig. 1.1`.
- Place all image assets, including recreated SVG diagrams, in the repository-root `./Attachements/` folder. Preserve this folder's exact spelling.
- Give each asset a unique, descriptive filename and embed it by filename rather than by path.
- When a source contains multiple figure panels, follow the requested asset granularity. If the panels must be separate images, create and caption a separate asset for each panel.
- Format every figure caption as a bold figure number followed by a plain-text description:

  ```markdown
  **Fig. 1.1** Some text that describes the figure
  ```

- For static images, use the installed **Image Captions** plugin and place the complete caption in the image description:

  ```markdown
  ![[image.png|**Fig. 1.1** Some text that describes the figure]]
  ```

  Standard Markdown image syntax is also supported:

  ```markdown
  ![**Fig. 1.1** Some text that describes the figure](image.png)
  ```

- Keep the figure caption in the image description rather than repeating it as a separate paragraph when the plugin can render it.
- A Graphs-plugin code block does not provide an image-description field. Place its caption immediately below the closing fence as a separate paragraph in the required format.
- Keep figure numbering, descriptions, and references in the surrounding prose consistent.

### LaTeX

- Start and end every inline LaTeX expression with a single dollar sign: `$E=hf$`.
- Start and end every display equation with double dollar signs on separate lines:

  ```latex
  $$
  E=\frac{hf}{\exp\left(\frac{hf}{kT}\right)-1}.
  $$
  ```

- Do not use `\(...\)` or `\[...\]` as math delimiters.
- Put units and words inside math expressions in appropriate LaTeX commands such as `\mathrm{K}` and use spacing commands such as `\,` where helpful.
- Number a display equation with `\tag{...}`:

  ```latex
  $$
  E=\frac{hf}{\exp\left(\frac{hf}{kT}\right)-1}. \tag{1.1}
  $$
  ```

- If a source shows a number at the right, such as `(1.1)`, convert it to `\tag{1.1}`. Never emulate right-aligned numbering with `\qquad(1.1)`.

- Render physical units and SI prefixes with brown color; use `\mathrm{}` for units and `\,` for spacing.
- Use color to highlight specific quantity groups and reduce ambiguity

| Group                              | Suggested color | Semantic annotation  | Quantities                                                                            | Important ambiguities resolved                                                                                                 |
| ---------------------------------- | --------------- | -------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Units and SI prefixes**          | Brown           | `\unit{}`            | (\mathrm{V}), (\mathrm{mA}), (\mathrm{k\Omega}), (\mathrm{\mu F})                     | Unit (\mathrm{T}) versus temperature (T) or period (T)                                                                         |
| **Electric quantities**            | Red             | `\electric{}`        | (U,V,\varphi,\mathbf E,\mathbf D,q,Q,\rho_q,I,\mathbf J,\mathbf P,\varepsilon)        | (E): field versus energy; (Q): charge versus reactive power; (P): polarization versus power                                    |
| **Magnetic quantities**            | Blue            | `\magnetic{}`        | (\mathbf B,\mathbf H,\Phi,\mathbf M,\mathbf A,\mu,\chi)                               | (B): flux density versus susceptance or bandwidth; (H): magnetic field versus transfer function                                |
| **Circuit and network parameters** | Green           | `\circuit{}`         | (R,G,C,L,Z,Y,X,B,Z_0,Q_f)                                                             | (B): susceptance versus magnetic flux density; (G): conductance versus transfer function                                       |
| **Energy and power**               | Purple          | `\energy{}`          | (E,W,p,P,Q,S,u,w,\eta,\mathrm{PF})                                                    | (E): energy versus electric field; (P): power versus polarization; (Q): reactive power versus charge                           |
| **Signals, systems and waves**     | Teal            | `\signal{}`          | (x(t),y(t),G(s),H(s),h(t),S_{ij},f,\omega,T,\phi,\lambda,k,\gamma,s)                  | (H): transfer function versus magnetic field; (S): scattering parameter versus apparent power; (T): period versus temperature  |
| **Thermal quantities**             | Orange          | `\thermal{}`         | (T,\vartheta,\Delta T,Q_{\mathrm{th}},\dot Q,R_\vartheta,C_\vartheta,k_{\mathrm{th}}) | (T): temperature versus period; (Q): heat versus charge or reactive power; (R_\vartheta): thermal versus electrical resistance |
| **Mechanical quantities**          | Dark gray       | `\mechanical{}`      | (m,\mathbf x,\mathbf v,\mathbf a,\mathbf F,\mathbf p,\boldsymbol\tau,\mathbf L,J)     | (p): momentum versus instantaneous power; (J): inertia versus current density                                                  |
| **Semiconductor transport**        | Olive           | `\semiconductor{}`   | (n,p,N_D,N_A,\mu_n,\mu_p,D_n,D_p,\tau_n,\tau_p)                                       | (\mu): mobility versus permeability; (D): diffusion coefficient versus electric displacement                                   |

- The semantic quantity macros are defined in the vault-root `preamble.sty` file and loaded by the Extended MathJax plugin:

$$\magnetic{\mathbf B} = \magnetic{\mu}\magnetic{\mathbf H}$$

### Physical quantities table

- Add one `## Physical quantities` section only when the article defines one or more physical quantities.
- When this section is present, make it the absolute final section of the article. Do not add content after the table.
- Use this exact table structure:

  ```markdown
  ## Physical quantities

  | Symbol | Unit | Quantity | Description |
  | --- | --- | --- | --- |
  | $E$ | $\mathrm{J}$ | Energy | The energy of the particle or state. |
  ```

- Add one concise row for each distinct physical quantity used in the article's LaTeX expressions.
- Use LaTeX for each quantity symbol and physical unit. Preserve semantic quantity macros when the expression already uses them.
- Use `1` for a dimensionless quantity.
- Use `—` in the Symbol cell when the article gives a physical value but does not define a symbol.
- Use `—` in the Unit cell only when no single physical unit applies, such as for a wavefunction whose unit depends on its representation or normalization.
- Include named physical constants when the article uses them.
- Combine contextual duplicates in one row. Keep separate rows when the same symbol has different physical meanings.
- Do not list indices, operators, equation labels, numeric constants, crystallographic indices, or mathematical helper symbols that do not represent physical quantities.
- If the article has no qualifying physical quantities, omit the section and table. Do not add an empty table or invent a quantity.
- Keep quantity names and descriptions in ASD-STE100 Simplified Technical English. Make each description short and specific to the article.

### Graphs plugin

The installed **Graphs** plugin renders interactive JSXGraph plots from YAML in a `graph` code fence. Prefer it when a supplied source contains a mathematical graph that can be reproduced accurately.

Use this basic structure:

````markdown
```graph
bounds: [-0.75, 6.2, 5.15, -0.65]
height: 480
width: 700
drag: false
showNavigation: false
keepAspectRatio: false
defaultAxes:
  x:
    withLabel: false
  y:
    withLabel: false
elements: [
  {type: functiongraph, def: [f:686/(x**5*(exp(4.796/x)-1)), 0.25, 5], att: {strokeColor: '#2455e6', strokeWidth: 3}},
  {type: text, def: [2.5, -0.48, 'λ (μm)'], att: {fixed: true, fontSize: 17, anchorX: 'middle', anchorY: 'middle'}}
]
```
````

- `bounds` uses the order `[x_min, y_max, x_max, y_min]`.
- Set `drag: false` and `showNavigation: false` for explanatory figures unless interaction is part of the note.
- Set the graph dimensions explicitly when matching a source figure.
- Common element types include `functiongraph`, `curve`, `polygon`, `point`, and `text`.
- Function definitions use the plugin's JavaScript-like expression syntax: prefix expressions with `f:`, use `x**2` for powers, and use functions or constants such as `exp`, `sin`, and `PI`.
- Graph function expressions are plugin code, not LaTeX, so do not wrap those expressions in `$` delimiters. The LaTeX delimiter rules still apply to mathematical prose and equations outside the graph block.
- Use hexadecimal colors, line widths, dashed-line attributes, translucent polygons, and fixed text annotations to reproduce the source's curves, regions, and labels.
- Automatic axis titles may overlap near the origin. When exact placement matters, disable their labels with `withLabel: false`, leave sufficient graph margin in `bounds`, and add positioned `text` elements for the axis titles.
- Reproduce the graph's mathematical behavior, scale, labels, visible regions, annotations, and overall visual hierarchy rather than tracing screenshot pixels.
- Verify every new or changed graph in Obsidian reading mode. A syntactically plausible code block is not sufficient if labels overlap, curves are clipped, or the plugin reports a rendering error.

## Validation

Before finishing a note edit:

- Read the final Markdown and confirm that all added prose and labels are English.
- Confirm that frontmatter titles use plain text and Unicode symbols, with no LaTeX math delimiters or commands.
- Confirm that every content-bearing article has exactly one `> [!TLDR]` callout immediately after its frontmatter.
- Confirm that the TLDR text is concise, describes the article's main subject, and uses LaTeX only when necessary.
- Check that inline and display math delimiters are balanced.
- Confirm numbered equations use `\tag{...}` and contain no `\qquad(number)` workaround.
- Check that Markdown code fences are balanced.
- Confirm explicit notes use the `> [!note]` callout format.
- Check modified wiki links and escape alias pipes inside tables.
- Confirm every added image exists in `./Attachements/` and is embedded by filename.
- Confirm figure captions use `**Fig. number** Description`, appear in image descriptions where supported, and fall directly below Graphs blocks otherwise.
- Verify Graphs blocks in Obsidian reading mode.
- Confirm that an article which defines physical quantities has exactly one `## Physical quantities` section at its absolute end. Confirm that an article without physical quantities does not have this section.
- Confirm that every physical-quantity table row has exactly four non-empty cells and that its LaTeX delimiters are balanced.
- Confirm that the table covers the article's physical quantities without adding mathematical labels that are not physical quantities.
- Check UTF-8 BOM and CRLF formatting without applying repository-wide normalization.
- Review the focused diff and preserve unrelated staged and unstaged changes.

## Output

- Make the requested note changes in place unless the user asked only for analysis or recommendations.
- Report the modified note or notes and the validation performed.
- Call out any graph-rendering, link-resolution, source-interpretation, or formatting uncertainty that remains.
