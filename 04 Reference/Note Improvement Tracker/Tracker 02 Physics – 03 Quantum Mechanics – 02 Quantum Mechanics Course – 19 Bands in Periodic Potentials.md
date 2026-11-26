---
title: "Note Improvement Tracker – 02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/19 Bands in Periodic Potentials"
---

> [!TLDR]
> This note tracks the review of the 12 notes in `02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/19 Bands in Periodic Potentials`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found no possible errors in this folder.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2191 | [[19.00 Bands in Periodic Potentials\|19.00 Bands in Periodic Potentials]] | Analyzed | low | no | no | [[#N2191\|View]] |
| N2192 | [[19.01 Discrete Translation Symmetry\|19.01 Discrete Translation Symmetry]] | Analyzed | low | no | no | [[#N2192\|View]] |
| N2193 | [[19.02 Bloch Theorem\|19.02 Bloch Theorem]] | Analyzed | low | yes | no | [[#N2193\|View]] |
| N2194 | [[19.03 Brillouin Zones\|19.03 Brillouin Zones]] | Analyzed | medium | yes | yes | [[#N2194\|View]] |
| N2195 | [[19.04 Effective Equation for uₙₖ\|19.04 Effective Equation for uₙₖ]] | Analyzed | low | no | no | [[#N2195\|View]] |
| N2196 | [[19.05 Kronig–Penney Model\|19.05 Kronig–Penney Model]] | Analyzed | low | yes | no | [[#N2196\|View]] |
| N2197 | [[19.06 Bragg Scattering and the Origin of Band Gaps\|19.06 Bragg Scattering and the Origin of Band Gaps]] | Analyzed | low | yes | no | [[#N2197\|View]] |
| N2198 | [[19.07 Effective Mass\|19.07 Effective Mass]] | Analyzed | low | no | yes | [[#N2198\|View]] |
| N2199 | [[19.08 Density of States in One Dimension\|19.08 Density of States in One Dimension]] | Analyzed | low | yes | no | [[#N2199\|View]] |
| N2200 | [[19.09 Wannier Functions\|19.09 Wannier Functions]] | Analyzed | low | yes | no | [[#N2200\|View]] |
| N2201 | [[19.10 Metals, Insulators, and Semiconductors\|19.10 Metals, Insulators, and Semiconductors]] | Analyzed | low | no | no | [[#N2201\|View]] |
| N2202 | [[19.11 Bands in Periodic Potentials Exercises\|19.11 Bands in Periodic Potentials Exercises]] | Analyzed | low | no | no | [[#N2202\|View]] |

## Suggestions

### N2191

Note: [[19.00 Bands in Periodic Potentials|19.00 Bands in Periodic Potentials]]  
Priority: low · Graph: no · Manim: no

Clear, accurate chapter hub.

- [Links] Link each summary bullet to its section note (\[\[19.02 Bloch Theorem\]\], \[\[19.05 Kronig–Penney Model\]\], \[\[19.06 Bragg Scattering and the Origin of Band Gaps\]\], \[\[19.07 Effective Mass\]\], \[\[19.08 Density of States in One Dimension\]\], \[\[19.09 Wannier Functions\]\], \[\[19.10 Metals, Insulators, and Semiconductors\]\]).

### N2192

Note: [[19.01 Discrete Translation Symmetry|19.01 Discrete Translation Symmetry]]  
Priority: low · Graph: no · Manim: no

Correct and concise.

- [Intuition] Explain why the translation eigenvalue is a pure phase: $\hat T_a$ is unitary, and for a ring of $N$ cells $\hat T_a^N=\hat I$ gives $k=2\pi j/(Na)$, which shows how the continuous $k$ of the infinite crystal arises.

### N2193

Note: [[19.02 Bloch Theorem|19.02 Bloch Theorem]]  
Priority: low · Graph: yes · Manim: no

Correct proof and clear interpretation.

- [Graph] Plot $\mathrm{Re}\,\psi_k(x)=\mathrm{Re}[e^{ikx}u(x)]$ for a sample periodic $u(x)=1+0.5\cos(2\pi x/a)$, $ka=\pi/4$, over $0\le x\le8a$, together with $u(x)$, to show the plane-wave envelope times the cell-periodic modulation.

### N2194

Note: [[19.03 Brillouin Zones|19.03 Brillouin Zones]]  
Priority: medium · Graph: yes · Manim: yes

Correct but very terse; the three zone schemes are described only in words.

- [Graph] Plot the free-particle parabola $\energy E=\hbar^2k^2/2m$ in the three schemes side by side ($-3\pi/a\le k\le3\pi/a$ extended; folded into $[-\pi/a,\pi/a)$ reduced; reduced repeated periodically), with small gaps at the zone boundaries to show the band structure.
- [Manim] Animate folding the extended-zone parabola into the first zone by shifting segments by multiples of $2\pi/a$; the motion makes the equivalence $k\sim k+2\pi/a$ concrete.
- [Links] Link back to \[\[19.01 Discrete Translation Symmetry\]\], where the first Brillouin zone is first defined.

### N2195

Note: [[19.04 Effective Equation for uₙₖ|19.04 Effective Equation for uₙₖ]]  
Priority: low · Graph: no · Manim: no

Correct derivation of the $k$-dependent cell equation.

- [Simplify] Show the one-line identity $e^{-ikx}\mechanical{\hat p}\,e^{ikx}=\mechanical{\hat p}+\hbar k$, so that Eq. (19.4) is just $(\mechanical{\hat p}+\hbar k)^2/2\mechanical m+\energy V$; then mention the first-order $k\cdot p$ result $\partial_k\energy E_n=(\hbar/\mechanical m)\langle u_{nk}|\mechanical{\hat p}+\hbar k|u_{nk}\rangle$.

### N2196

Note: [[19.05 Kronig–Penney Model|19.05 Kronig–Penney Model]]  
Priority: low · Graph: yes · Manim: no

Correct dispersion relation and an accurate figure (band edges at $qa\approx1.976,4.349,7.084,10.007$ check numerically).

- [Simplify] Show the derivation of Eq. (19.5) in a few lines (transfer matrix, or the two matching conditions with $\psi(x+a)=e^{ika}\psi(x)$) instead of only stating it.
- [Graph] Add the resulting dispersion $\energy E(k)$ in the reduced zone for $\mechanical m\alpha a/\hbar^2=3$ (from $ka=\arccos f(qa)$), next to the free parabola, so the band gaps appear on the energy axis as well as in $f(qa)$.

### N2197

Note: [[19.06 Bragg Scattering and the Origin of Band Gaps|19.06 Bragg Scattering and the Origin of Band Gaps]]  
Priority: low · Graph: yes · Manim: no

Correct physical picture and gap formula with a clear schematic figure.

- [Simplify] Show the $2\times2$ degenerate-perturbation step at $k=\pi/a$, with matrix entries $\energy E^0$ on the diagonal and $\energy V_G,\energy V_G^*$ off the diagonal and eigenvalues $\energy E^0\pm|\energy V_G|$, so that $\energy\Delta_1=2|\energy V_{2\pi/a}|$ is derived.
- [Graph] Plot the probability densities $\cos^2(\pi x/a)$ and $\sin^2(\pi x/a)$ over the potential $-\energy V_0\cos(2\pi x/a)$ for $0\le x\le3a$, showing which standing wave sits on the ion cores.

### N2198

Note: [[19.07 Effective Mass|19.07 Effective Mass]]  
Priority: low · Graph: no · Manim: yes

Correct definition and example; the figure accurately compares $2(1-\cos ka)$ with $(ka)^2$.

- [Intuition] Add the semiclassical equations $\hbar\dot k=F$ and $v_g=\hbar^{-1}\partial_k\energy E$, from which $\dot v_g=F/\mechanical m^*$ follows; this justifies "responds like a free particle of mass $\mechanical m^*$".
- [Manim] Animate a wave packet under a constant force in a tight-binding band: $k$ moves uniformly through the zone while $v_g\propto\sin(ka)$ oscillates, showing negative effective mass near $k=\pi/a$ and Bloch oscillations.

### N2199

Note: [[19.08 Density of States in One Dimension|19.08 Density of States in One Dimension]]  
Priority: low · Graph: yes · Manim: no

Correct and compact.

- [Graph] Plot $g(\energy E)=1/(\pi a\sqrt{4\energy t^2-(\energy E-\energy E_0)^2})$ for the tight-binding band ($\energy t=1$, $\energy E_0=0$, $-2<\energy E<2$), showing the two van Hove divergences at the band edges.
- [Example] Derive this tight-binding density of states as a worked example of the general formula.

### N2200

Note: [[19.09 Wannier Functions|19.09 Wannier Functions]]  
Priority: low · Graph: yes · Manim: no

Correct definitions and hopping formula (checks for $\energy E_0-2\energy t\cos ka$), but normalization and localization stay abstract.

- [Simplify] State the inverse relation $\psi_{nk}=\sum_R e^{ikR}w_{n,R}$ and the normalization assumed ($\langle\psi_{nk}|\psi_{nk'}\rangle=(2\pi/a)\delta(k-k')$) so the orthonormality claim can be checked.
- [Graph] Plot a Wannier function for a weak cosine potential (or the tight-binding limit), $|w_{0,0}(x)|^2$ over $-3a\le x\le3a$, next to a Bloch state $|\psi_{0k}|^2$, to contrast localized and extended bases.

### N2201

Note: [[19.10 Metals, Insulators, and Semiconductors|19.10 Metals, Insulators, and Semiconductors]]  
Priority: low · Graph: no · Manim: no

Correct in the 1D independent-electron model.

- [Intuition] Add that in two and three dimensions an even $\nu$ need not give an insulator because bands can overlap in energy (divalent metals such as Mg), and give typical gap scales (Si $\approx\quantity{1.1}{eV}$ versus diamond $\approx\quantity{5.5}{eV}$) to make the semiconductor/insulator boundary concrete.

### N2202

Note: [[19.11 Bands in Periodic Potentials Exercises|19.11 Bands in Periodic Potentials Exercises]]  
Priority: low · Graph: no · Manim: no

Well-posed exercises; all results check (zone width $1.571$ Å$^{-1}$, $qa\approx1.5427$ and $\energy E\approx1.19\hbar^2/(ma^2)$, $\energy t=\hbar^4\pi^2/(2m^2a^3\alpha)$, the density of states).

- [Structure] Exercise 6 says "The source gives $qa\approx1.542$"; the root is $1.5427$, which rounds to $1.543$, so remove the source remark.
