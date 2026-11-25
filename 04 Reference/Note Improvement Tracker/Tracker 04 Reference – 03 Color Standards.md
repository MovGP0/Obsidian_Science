---
title: "Note Improvement Tracker – 04 Reference/03 Color Standards"
---

> [!TLDR]
> This note tracks the review of the 7 notes in `04 Reference/03 Color Standards`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 1 possible errors or notation conflicts. 1 of them are verified (1 unsure); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N3852|N3852]] RAL Design Colors: `RAL 270 90 05` (Bleached white) and `RAL 280 90 05` (Mauve white) both list `#E0E3E8`; the two hue angles must give different colours (the note's own conversion script gives about `#DEE3EC` and `#E0E2EC`), so one of the two rows is probably a copy error and should be checked against the source. **Unsure:** No conversion script in note; the listed hex values are vendor values that differ from a CIELab conversion for neighbours too (e.g. 290 90 05 listed #DADBE0 vs computed #E2E2EB), so the duplicate may be in the source; needs check against the RAL source

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N3851 | [[RAL Classic Colors\|RAL Classic Colors]] | Analyzed | low | no | no | [[#N3851\|View]] |
| N3852 | [[RAL Design Colors\|RAL Design Colors]] | Analyzed | low | no | no | [[#N3852\|View]] |
| N3853 | [[RAL Design System Plus\|RAL Design System Plus]] | Analyzed | low | yes | no | [[#N3853\|View]] |
| N3854 | [[RAL Effect Colors\|RAL Effect Colors]] | Analyzed | low | no | no | [[#N3854\|View]] |
| N3855 | [[RAL Plastics P1 Colors\|RAL Plastics P1 Colors]] | Analyzed | low | no | no | [[#N3855\|View]] |
| N3856 | [[RAL Plastics P2 Colors\|RAL Plastics P2 Colors]] | Analyzed | low | no | no | [[#N3856\|View]] |
| N3857 | [[_RAL Colors\|_RAL Colors]] | Analyzed | low | no | no | [[#N3857\|View]] |

## Suggestions

### N3851

Note: [[RAL Classic Colors|RAL Classic Colors]]  
Priority: low · Graph: no · Manim: no

Clean reference table (213 codes, hex, RGB and swatch all mutually consistent by script check) but it has no frontmatter title, TLDR, intro, or source.

- [Structure] Add the quoted frontmatter `title: "RAL Classic Colors"` and a TLDR callout saying that RAL Classic is the four-digit standard (first digit = hue group) and that the hex/RGB values are approximate screen previews, not official colour references.
- [Structure] Add a short note that pearl and luminous shades (for example RAL 1026, RAL 1035, RAL 9006) cannot be shown faithfully as flat sRGB swatches, and a "See also" source link like the one in RAL Design Colors.
- [Links] Check the code list against the current RAL Classic list (213 codes here; the current collection is larger, and for example RAL 2017 "RAL orange" appears to be missing).

### N3852

Note: [[RAL Design Colors|RAL Design Colors]]  
Priority: low · Graph: no · Manim: no

Complete lookup table (1825 entries, matching the RAL Design System+ count) with internally consistent hex/RGB/swatch, but no frontmatter, TLDR, or explanation of the code structure.

- [Structure] Add the quoted frontmatter title and a TLDR that explains the `RAL HHH LL CC` code as hue angle, lightness L*, and chroma, and link to [[RAL Design System Plus|RAL Design System+]] for the code explanation and the conversion script.
- [Correctness] `RAL 270 90 05` (Bleached white) and `RAL 280 90 05` (Mauve white) both list `#E0E3E8`; the two hue angles must give different colours (the note's own conversion script gives about `#DEE3EC` and `#E0E2EC`), so one of the two rows is probably a copy error and should be checked against the source.

### N3853

Note: [[RAL Design System Plus|RAL Design System Plus]]  
Priority: low · Graph: yes · Manim: no

Clear and short explanation with a working conversion script (I reproduced the stated example `#C88127` for RAL 070 60 60), but it lacks a TLDR and does not say what happens out of gamut.

- [Structure] Add a TLDR callout after the frontmatter, and quote the title (`title: "RAL Design System+"`) as the skill requires.
- [Intuition] State explicitly that hue and chroma are the polar coordinates of (a*, b*) in CIELAB (a* = C cos h, b* = C sin h, D65 white). Also say that `gamma_encode` silently clips out-of-gamut colours to [0, 1], so high-chroma codes give only an approximate, clipped sRGB.
- [Graph] Optionally add a 2D plot of the a*–b* plane with a few example codes at L* = 60 (points at angle h and radius C) to show how the hue and chroma digits map to colour coordinates.
- [Links] Link to [[RAL Design Colors]] for the full table of named codes, and mention that the regex `spaced_match` branch is never reached because the compact form already matches spaced codes (harmless but dead code).

### N3854

Note: [[RAL Effect Colors|RAL Effect Colors]]  
Priority: low · Graph: no · Manim: no

Consistent table of 490 effect shades (420 solid, 70 metallic) with matching hex/RGB/swatch, but no frontmatter, TLDR, or explanation of the `RAL NNN-k` codes.

- [Structure] Add the quoted frontmatter title and a TLDR explaining that RAL Effect shades are water-based paint colours coded by hue family plus a shade index, and that metallic swatches are only flat approximations; add a source link.

### N3855

Note: [[RAL Plastics P1 Colors|RAL Plastics P1 Colors]]  
Priority: low · Graph: no · Manim: no

Consistent table of the RAL Classic-based plastics shades (`-P` suffix) with matching hex/RGB/swatch, but no frontmatter, TLDR, or context.

- [Structure] Add the quoted frontmatter title and a TLDR saying that P1 contains plastic shades derived from RAL Classic (same codes with `-P`) and that values differ slightly from the paint versions; link to [[RAL Classic Colors]] and add a source.

### N3856

Note: [[RAL Plastics P2 Colors|RAL Plastics P2 Colors]]  
Priority: low · Graph: no · Manim: no

Consistent table of RAL Design-based plastics shades, but the `-P-T` rows are unexplained duplicates and the formatting is inconsistent.

- [Structure] Add the quoted frontmatter title and a TLDR, and explain the `-P-T` suffix: 40 `-P-T` rows repeat the hex of their `-P` row, for example `RAL 000 55 00-P` and `RAL 000 55 00-P-T`.
- [Structure] The file starts with a blank line before the first heading, and only the "300 - 360" table is column-padded; normalize this to the formatter output used in the other tables, and link to [[RAL Design Colors]].

### N3857

Note: [[_RAL Colors|_RAL Colors]]  
Priority: low · Graph: no · Manim: no

Minimal hub with correct links to all six RAL notes.

- [Structure] Quote the title (`title: "RAL Colors"`) and optionally add a one-line description of each collection (Classic: 4-digit, Design: hue/lightness/chroma, Effect, Plastics P1/P2). No other change needed.
