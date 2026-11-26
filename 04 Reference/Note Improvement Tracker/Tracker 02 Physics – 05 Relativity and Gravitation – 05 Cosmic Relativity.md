---
title: "Note Improvement Tracker – 02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity"
---

> [!TLDR]
> This note tracks the review of the 3 notes in `02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 3 possible errors or notation conflicts. 3 of them are verified (3 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N3748|N3748]] Universal Clock of Cosmic Relativity: The main metric prints "$r^2a\theta^2$"; it must be $r^2d\theta^2$. **Fixed:** Changed to r^2 d\theta^2
- [[#N3748|N3748]] Universal Clock of Cosmic Relativity: "$-ds^2$ is the Spacetime Interval" and the unrendered "\((-+++)\)" are wrong or broken: $ds^2$ is the interval, with signature $(-,+,+,+)$ written in math delimiters. **Fixed:** Changed to ds² is the Spacetime Interval and signature to $(-,+,+,+)$
- [[#N3748|N3748]] Universal Clock of Cosmic Relativity: "Static Universe ($a(t)=1$)" is misleading: $a=1$ at one instant is only a normalisation; a static universe needs $\dot a=0$ at all times, which for nonzero matter requires $\Lambda$ (the Einstein static universe) and is not a general special case of FLRW. **Fixed:** Heading now says a(t) = 1 at all times; added that it needs ȧ = 0 always and, with matter, Λ and k > 0 (Einstein static universe), so it is not a general FLRW special case

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N3485 | [[00 Acronyms\|00 Acronyms]] | Analyzed | low | no | no | [[#N3485\|View]] |
| N3486 | [[00 Cosmic Relativity\|00 Cosmic Relativity]] | Analyzed | low | no | no | [[#N3486\|View]] |
| N3748 | [[Universal Clock of Cosmic Relativity\|Universal Clock of Cosmic Relativity]] | Analyzed | high | yes | yes | [[#N3748\|View]] |

## Suggestions

### N3485

Note: [[00 Acronyms|00 Acronyms]]  
Priority: low · Graph: no · Manim: no

A clean acronym list; it is sufficient as a reference.

- [Structure] Add the abbreviations M-M (Michelson–Morley) and CMB, which the chapter-1 notes use, and consider linking CMBR to \[\[08.05 The Cosmic Microwave Background Radiation\]\] inside this collection.

### N3486

Note: [[00 Cosmic Relativity|00 Cosmic Relativity]]  
Priority: low · Graph: no · Manim: no

A useful hub with study routes and a sound reading method.

- [Structure] Remove the closing workflow remark ("Their visual review in Obsidian reading mode remains deferred, as requested"); it is a maintenance note, not reader-facing content.
- [Structure] The Part II block quote repeats the passage already quoted in 01.01; shorten it to one sentence or link to 01.01.

### N3748

Note: [[Universal Clock of Cosmic Relativity|Universal Clock of Cosmic Relativity]]  
Priority: high · Graph: yes · Manim: yes

Loose bullet-list explanation of the FLRW metric that lacks the vault's frontmatter and TLDR conventions, contains a typo in the main formula, and never connects to Cosmic Relativity.

- [Correctness] The main metric prints "$r^2a\theta^2$"; it must be $r^2d\theta^2$.
- [Correctness] "$-ds^2$ is the Spacetime Interval" and the unrendered "\((-+++)\)" are wrong or broken: $ds^2$ is the interval, with signature $(-,+,+,+)$ written in math delimiters.
- [Correctness] "Static Universe ($a(t)=1$)" is misleading: $a=1$ at one instant is only a normalisation; a static universe needs $\dot a=0$ at all times, which for nonzero matter requires $\Lambda$ (the Einstein static universe) and is not a general special case of FLRW.
- [Structure] Add the quoted frontmatter title and a TLDR as the Obsidian skill requires, turn the bullet glossary into prose plus a physical-quantities table, and add a section linking FLRW cosmic time to the Cosmic Relativity claims in \[\[15.00 Relativity and Quantum Entanglement\]\] and \[\[16.03 Physical Absolute Space and Absolute Time\]\].
- [Graph] Plot $a(t)/a_0$ against $t/t_0$ for radiation ($t^{1/2}$), matter ($t^{2/3}$), and de Sitter ($e^{H(t-t_0)}$) expansion, all normalised at $t_0$.
- [Manim] Animate a comoving grid of galaxies whose coordinate labels stay fixed while proper separations grow with $a(t)$, with identical comoving clocks ticking in step to show the meaning of cosmic time.
