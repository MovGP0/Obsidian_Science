---
title: "Note Improvement Tracker – 02 Physics/01 Classical Mechanics"
---

> [!TLDR]
> This note tracks the review of the 4 notes in `02 Physics/01 Classical Mechanics`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 3 possible errors or notation conflicts. 3 of them are verified (3 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N1182|N1182]] Gravitational potential: "$\Phi = \frac{Gm}{r}$" should be $\Phi=-GM/r$ (potential energy per unit mass, zero at infinity), or the note must say it lists the magnitude $|\Phi|$; the table values are magnitudes. **Fixed:** 
- [[#N1182|N1182]] Gravitational potential: "the potential decreases linearly with the radius $r$" is wrong; $|\Phi|$ falls off as $1/r$, not linearly. **Fixed:** decreases as 1/r"
- [[#N1182|N1182]] Gravitational potential: The integral "$\phi_U = \int_{0}^{c T_U} 4\pi G \rho\, dr$" is missing a factor $r$: from $d\phi=4\pi r^2\,dr\,G\rho/r$ the integrand is $4\pi G\rho\,r\,dr$, which is what yields the stated $2\pi G\rho c^2T_U^2$; also unify $\Phi$/$\phi$ and "g-Potential"/"G-Potential". **Fixed:** and "G-Potential"

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N0829 | [[00.00 Classical Mechanics\|00.00 Classical Mechanics]] | Analyzed | low | no | no | [[#N0829\|View]] |
| N0830 | [[02 Physics/01 Classical Mechanics/00.01 Introduction\|00.01 Introduction]] | Analyzed | low | no | no | [[#N0830\|View]] |
| N1105 | [[18.00 Glossary\|18.00 Glossary]] | Analyzed | low | no | no | [[#N1105\|View]] |
| N1182 | [[Gravitational potential\|Gravitational potential]] | Analyzed | high | yes | no | [[#N1182\|View]] |

## Suggestions

### N0829

Note: [[00.00 Classical Mechanics|00.00 Classical Mechanics]]  
Priority: low · Graph: no · Manim: no

Clean, complete table-of-contents hub; it serves its navigation purpose well.

- [Links] The two transcribed problem notes in Chapter 1 ("Kinematics, projectiles, and circular motion problems", "Vector kinematics and moving polar bases") and the two in Chapter 2 ("Newton’s laws, friction, and drag problems", "Projectile motion with linear and quadratic drag") are not reachable from the hub; add a short "Supplementary worked problems" line under each chapter so they are not orphaned.
- [Structure] Exercise links are labelled inconsistently ("Exercises" in Parts I–V vs "11.15 Exercises", "12.14 Exercises" later); pick one style.

### N0830

Note: [[02 Physics/01 Classical Mechanics/00.01 Introduction|00.01 Introduction]]  
Priority: low · Graph: no · Manim: no

Clear, well-organised preface describing scope, prerequisites, and the seven parts.

- [Intuition] Add one or two sentences on why a single subject has three formulations (vector, Lagrangian, Hamiltonian), e.g. "same physics, different bookkeeping: forces vs energies vs phase-space flow", so a first-year reader understands the book's arc before reading the part list.
- [Links] Link each Part heading to its chapter hub (e.g. Part I to [[01.00 Point Particle Kinematics]]) so the overview doubles as navigation.

### N1105

Note: [[18.00 Glossary|18.00 Glossary]]  
Priority: low · Graph: no · Manim: no

A thorough, correct glossary (virial, Euler, inertia-tensor and Coriolis entries checked) that needs only small structural polish.

- [Links] Turn each term into a wikilink to the chapter note that develops it (e.g. Atwood machine, d'Alembert's principle, Noether's theorem, Phase space), so the glossary also works as a navigation hub.
- [Structure] The Kinetic energy entry's rigid-body clause is hard to parse; rephrase it as "for a rigid body, $\energy{K}=\tfrac12\mechanical{M}\mechanical{V}^2+\tfrac12\mechanical{I}\mechanical{\omega}^2$ when it rotates about a fixed-direction axis through its center of mass".

### N1182

Note: [[Gravitational potential|Gravitational potential]]  
Priority: high · Graph: yes · Manim: no

A short, informal note with a wrong sign convention, a wrong statement of the radial dependence and a missing factor in its integral, and without frontmatter or TLDR.

- [Correctness] "$\Phi = \frac{Gm}{r}$" should be $\Phi=-GM/r$ (potential energy per unit mass, zero at infinity), or the note must say it lists the magnitude $|\Phi|$; the table values are magnitudes.
- [Correctness] "the potential decreases linearly with the radius $r$" is wrong; $|\Phi|$ falls off as $1/r$, not linearly.
- [Correctness] The integral "$\phi_U = \int_{0}^{c T_U} 4\pi G \rho\, dr$" is missing a factor $r$: from $d\phi=4\pi r^2\,dr\,G\rho/r$ the integrand is $4\pi G\rho\,r\,dr$, which is what yields the stated $2\pi G\rho c^2T_U^2$; also unify $\Phi$/$\phi$ and "g-Potential"/"G-Potential".
- [Structure] Add quoted frontmatter title, TLDR, a physical-quantities table, semantic macros and \unit{} units, flag the $\phi_U\approx c^2$ remark as a heuristic order-of-magnitude coincidence (Mach/Sciama-type argument) rather than an established result, and reword the unclear sentence about the Universe being "larger than observed".
- [Graph] Plot $\Phi(r)=-GM_E/r$ for $r$ from $R_E$ to $10R_E$ (x in units of $R_E$, y in $10^7\,\unit{m^2/s^2}$) with a dashed tangent at $R_E$ showing where the linear approximation $\Delta\Phi\approx g\,\Delta h$ holds and where it fails.
- [Example] Add a worked check of the table values, e.g. $GM_E/R_E\approx6.3\times10^7\,\unit{m^2/s^2}$ and $GM_\odot/(1\,\mathrm{AU})\approx8.9\times10^8\,\unit{m^2/s^2}$, and relate $|\Phi|$ to escape speed $v_{\mathrm{esc}}=\sqrt{2|\Phi|}$.
