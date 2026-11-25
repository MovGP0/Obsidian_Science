---
title: "Note Improvement Tracker – 02 Physics/05 Relativity and Gravitation/02 General Relativity"
---

> [!TLDR]
> This note tracks the review of the 5 notes in `02 Physics/05 Relativity and Gravitation/02 General Relativity`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 9 possible errors or notation conflicts. 9 of them are verified (6 fixed, 3 partly); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N3266|N3266]] Centenary Einstein Equation: "Empty Space: $R_{ik}=0$ … the condition for spacetime to be flat" is wrong. Ricci-flat spacetimes can be strongly curved (the Schwarzschild and Kerr exteriors); flatness requires the full Riemann tensor to vanish. The Weyl tensor carries the vacuum curvature, not only gravitational waves. **Fixed:** Replaced the sentence: Ricci-flat spacetimes can be curved (Schwarzschild, Kerr exteriors), flatness needs the Riemann tensor to vanish, and the Weyl tensor carries vacuum curvature including static fields and waves.
- [[#N3266|N3266]] Centenary Einstein Equation: The "Centenary Einstein Equation" with a separate $T_{ik(U)}$ is not standard GR. Moved to the right-hand side, it is just the EFE with total source $T+T_U$. State its origin and status (author, year), and say that a cosmological constant term is normally written $\Lambda g_{ik}$, not as part of a "universe" stress tensor. **Partly:** Added a note callout that the CEE is not standard GR, equals the EFE with source T+T_U, and that Lambda normally enters as Lambda g_ik; author and year are not in the note and I could not verify them, so they are not added.
- [[#N3266|N3266]] Centenary Einstein Equation: The "Empty space" section sets $T_{ik(U)}=0$, which contradicts the earlier description of $T_{ik(U)}$ as a universal background present everywhere. Clarify when, if ever, it vanishes. **Fixed:** Rewrote the empty-space sentence: only T_ik=0 in vacuum, T_U stays present, and R_ik=0 holds only if the background term is also neglected.
- [[#N3267|N3267]] Christoffel Symbols: Fig. 1.1 is clipped: its bounds are $[-4.5,2.55,4.5,-2.55]$, but the Cartesian grid spans $x\in[-6.4,-1.5]$, the polar circles reach $x\approx6.7$ (outer $e_r$ arrow at $x\approx7.2$), and the titles and bottom captions sit at $y=\pm3.3$ to $3.5$. Large parts of the figure are outside the view. Widen the bounds to about $[-7,3.9,8,-3.7]$ (with matching width and height) and check it in reading mode. **Fixed:** Verified elements span x from -6.4 to 7.6 and y to +-3.47; changed bounds to [-7,3.9,8,-3.7] and height to 355 for the 700 px width (keepAspectRatio true). Not checked in Obsidian reading mode.
- [[#N3268|N3268]] General Relativity (MIT 8.962 self-study): Linearized gravity with dynamic sources (~l.1954): $\Theta=\frac12(H-\nabla^2\lambda)$ should be $\Theta=\frac13(H-\nabla^2\lambda)$ (Flanagan–Hughes); only the 1/3 form gives $G_{tt}=-\nabla^2\Theta$. Line ~1962 writes "$G_{\alpha\beta}=8\pi T_{\alpha\beta}$", dropping the $G$ used in the following equations ($8\pi GT_{\alpha\beta}$). **Fixed:** Changed 1/2 to 1/3 (checked against Newtonian limit: H=-6 phi_N gives Laplacian Theta=-8 pi G rho) and wrote 8 pi G T_alpha beta.
- [[#N3268|N3268]] General Relativity (MIT 8.962 self-study): Field tensor (~l.1876–1887): with $\eta=\mathrm{diag}(-1,1,1,1)$, $A^0=q/r$ and $F^{\mu\nu}=\partial^\mu A^\nu-\partial^\nu A^\mu$, $F^{0i}=+qx^i/r^3$. The printed matrix is $F_{\mu\nu}$, so relabel it or flip the first row and column. Elsewhere: "Principle of equivalence" (~l.788) quotes a test precision of $10^{-13}$, which is outdated (MICROSCOPE 2022: about $10^{-15}$). "Buchdahl's theorem" (~l.3201) gives the neutron-star $T_F\simeq10^{13}$ K, which should be about $10^{11}$–$10^{12}$ K. **Fixed:** Flipped first row and column so F^{0i}=+q x^i/r^3=E^i and updated the remark; added MICROSCOPE 2022 value of about 10^-15; gave T_F about 10^11 to 10^12 K and kept the notes' 10^13 K in parentheses.
- [[#N3268|N3268]] General Relativity (MIT 8.962 self-study): The symbol table and the overloaded symbols need repair. $\Lambda$ is the Lorentz matrix, an EM gauge function, the cosmological constant and the radial metric function $e^{2\Lambda(r)}$. $H$ is the Hubble parameter and the trace of $h_{ij}$. $\rho_0$ is the rest-frame density, the present-day cosmological density and the rest-mass density. $a$ is the four-acceleration, a cube constant, the scale factor and the Kerr spin. $R$ is the Ricci scalar, the scale factor, the Kruskal coordinate and the receiver radius. In the perfect-fluid section, $\rho$ silently switches from the moving-frame value $\gamma^2\rho_0$ to the rest-frame density. Rename the clashes and add the missing core rows ($G$, $R^\alpha{}_{\beta\gamma\delta}$, $T_{\mu\nu}$, $h_{\mu\nu}$, $\bar h_{\mu\nu}$, $I_{ij}$, $V_{\mathrm{eff}}$, $M$, $Q$). **Partly:** Added table rows for G, M, Q, Riemann tensor, Einstein tensor, T_alpha beta, h, h-bar, I_ij, V_eff; perfect-fluid rho is explicitly called the rest-frame density (not silent); renaming Lambda, H, rho_0, a, R across a 3700-line multi-lecture note is a large rewrite and was not done (the table already keeps separate rows for different meanings of a).
- [[#N3270|N3270]] Schwarzschild Metric: The note says "natural units ($c=1$)" but keeps $G$ in $1-2GM/r$, lists $c=299\,792\,458$ m/s, and then gives $r_s=2GM/c^2$; use either $G=c=1$ throughout ($1-2M/r$, $r_s=2M$) or the full SI form $-(1-2GM/(c^2r))\,c^2\mathrm dt^2+\dots$ with $r_s=2GM/c^2$. **Partly:** Units with c=1 and explicit G is a valid convention; reworded to say G stays explicit and gave r_s=2GM/c^2 in SI and r_s=2GM with c=1.
- [[#N3270|N3270]] Schwarzschild Metric: "**r** the radial distance from the object" is wrong: $r$ is the areal (circumferential) radius, defined so the sphere area is $4\pi r^2$; the proper radial distance is $\int\mathrm dr/\sqrt{1-r_s/r}$ and exceeds $\Delta r$. **Fixed:** Described r as the areal radius (sphere area 4 pi r^2) and noted that the proper radial distance is larger.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N3266 | [[Centenary Einstein Equation\|Centenary Einstein Equation]] | Analyzed | high | no | no | [[#N3266\|View]] |
| N3267 | [[Christoffel Symbols\|Christoffel Symbols]] | Analyzed | low | no | yes | [[#N3267\|View]] |
| N3268 | [[General Relativity (MIT 8.962 self-study)\|General Relativity (MIT 8.962 self-study)]] | Analyzed | medium | yes | yes | [[#N3268\|View]] |
| N3269 | [[Killing Vector\|Killing Vector]] | Analyzed | low | no | yes | [[#N3269\|View]] |
| N3270 | [[Schwarzschild Metric\|Schwarzschild Metric]] | Analyzed | high | yes | no | [[#N3270\|View]] |

## Suggestions

### N3266

Note: [[Centenary Einstein Equation|Centenary Einstein Equation]]  
Priority: high · Graph: no · Manim: no

This presents a nonstandard modification of the field equations as if it were mainstream GR, without a source, with one physical error and no vault formatting.

- [Correctness] "Empty Space: $R_{ik}=0$ … the condition for spacetime to be flat" is wrong. Ricci-flat spacetimes can be strongly curved (the Schwarzschild and Kerr exteriors); flatness requires the full Riemann tensor to vanish. The Weyl tensor carries the vacuum curvature, not only gravitational waves.
- [Correctness] The "Centenary Einstein Equation" with a separate $T_{ik(U)}$ is not standard GR. Moved to the right-hand side, it is just the EFE with total source $T+T_U$. State its origin and status (author, year), and say that a cosmological constant term is normally written $\Lambda g_{ik}$, not as part of a "universe" stress tensor.
- [Correctness] The "Empty space" section sets $T_{ik(U)}=0$, which contradicts the earlier description of $T_{ik(U)}$ as a universal background present everywhere. Clarify when, if ever, it vanishes.
- [Structure] Add frontmatter, a TLDR, semantic macros and a physical-quantities table. Link to the standard field equation in [[General Relativity (MIT 8.962 self-study)#The Einstein field equation]] for comparison.

### N3267

Note: [[Christoffel Symbols|Christoffel Symbols]]  
Priority: low · Graph: no · Manim: yes

An excellent, carefully worded explainer; all symbols, Eq. (12)–(18) and the straight-line example re-check correctly and all links resolve. Only Fig. 1.1 is broken.

- [Correctness] Fig. 1.1 is clipped: its bounds are $[-4.5,2.55,4.5,-2.55]$, but the Cartesian grid spans $x\in[-6.4,-1.5]$, the polar circles reach $x\approx6.7$ (outer $e_r$ arrow at $x\approx7.2$), and the titles and bottom captions sit at $y=\pm3.3$ to $3.5$. Large parts of the figure are outside the view. Widen the bounds to about $[-7,3.9,8,-3.7]$ (with matching width and height) and check it in reading mode.
- [Manim] Straight-line example: animate the particle moving along $y=b$ while showing $r(t)$, the rotating $e_r,e_\varphi$ at the particle, and the two terms $\ddot r$ and $r\dot\varphi^2$ as bars that stay equal. This makes the cancellation in Eq. (15) visible over time, not only at $t=0$.

### N3268

Note: [[General Relativity (MIT 8.962 self-study)|General Relativity (MIT 8.962 self-study)]]  
Priority: medium · Graph: yes · Manim: yes

A very long, mostly correct transcription (most derivations re-check), with a few real errors in the linearized-gravity section, a broken PDF link, a heavily overloaded symbol table, and headings that do not match their content.

- [Correctness] Linearized gravity with dynamic sources (~l.1954): $\Theta=\frac12(H-\nabla^2\lambda)$ should be $\Theta=\frac13(H-\nabla^2\lambda)$ (Flanagan–Hughes); only the 1/3 form gives $G_{tt}=-\nabla^2\Theta$. Line ~1962 writes "$G_{\alpha\beta}=8\pi T_{\alpha\beta}$", dropping the $G$ used in the following equations ($8\pi GT_{\alpha\beta}$).
- [Correctness] Field tensor (~l.1876–1887): with $\eta=\mathrm{diag}(-1,1,1,1)$, $A^0=q/r$ and $F^{\mu\nu}=\partial^\mu A^\nu-\partial^\nu A^\mu$, $F^{0i}=+qx^i/r^3$. The printed matrix is $F_{\mu\nu}$, so relabel it or flip the first row and column. Elsewhere: "Principle of equivalence" (~l.788) quotes a test precision of $10^{-13}$, which is outdated (MICROSCOPE 2022: about $10^{-15}$). "Buchdahl's theorem" (~l.3201) gives the neutron-star $T_F\simeq10^{13}$ K, which should be about $10^{11}$–$10^{12}$ K.
- [Links] The header link `[[General Relativity (MIT 8.962 self-study).pdf|Original PDF]]` is broken; no such PDF exists in the vault. The self-links `[[#Black holes]]` and `[[#Black holes II]]` inside those same sections point nowhere useful.
- [Correctness] The symbol table and the overloaded symbols need repair. $\Lambda$ is the Lorentz matrix, an EM gauge function, the cosmological constant and the radial metric function $e^{2\Lambda(r)}$. $H$ is the Hubble parameter and the trace of $h_{ij}$. $\rho_0$ is the rest-frame density, the present-day cosmological density and the rest-mass density. $a$ is the four-acceleration, a cube constant, the scale factor and the Kerr spin. $R$ is the Ricci scalar, the scale factor, the Kruskal coordinate and the receiver radius. In the perfect-fluid section, $\rho$ silently switches from the moving-frame value $\gamma^2\rho_0$ to the rest-frame density. Rename the clashes and add the missing core rows ($G$, $R^\alpha{}_{\beta\gamma\delta}$, $T_{\mu\nu}$, $h_{\mu\nu}$, $\bar h_{\mu\nu}$, $I_{ij}$, $V_{\mathrm{eff}}$, $M$, $Q$).
- [Structure] Rename lecture-title headings by their content: "The stress-energy tensor and the Christoffel symbol" (no Christoffels), "The principle of equivalence" (it holds cylindrical basis vectors and nearly duplicates "Principle of equivalence"), "Geodesics" (tensor densities), and "Spacetime curvature" (conserved momenta). Merge the duplicated parallel-transport text (~l.885–958), and collect the "handwriting shows…" asides into footnotes.
- [Graph] Black holes II: plot $V_{\mathrm{eff}}=(1-2/r)(1+\hat L^2/r^2)$ ($GM=1$, $r\in[2,40]$) for $\hat L=3,\sqrt{12},4,4.5$, showing the extrema merging at the ISCO $r=6$. Add that the ISCO binding energy $1-\sqrt{8/9}\approx5.7\%$ is the accretion efficiency. As a Manim animation, show a ring of test masses deformed by $h_+$ and $h_\times$ ("Gravitational-wave polarizations"), with exaggerated $h=0.3$.

### N3269

Note: [[Killing Vector|Killing Vector]]  
Priority: low · Graph: no · Manim: yes

Clear, well-motivated and mathematically correct note (Killing equation, conserved charges, Killing tensors, Carter constant), with a correct rotation-field figure.

- [Manim] Add a short animation that rotates the unit sphere along $\xi=\partial_\varphi$ while a small geodesic triangle keeps its side lengths, then contrast it with a non-Killing flow (for example $\xi=\sin\theta\,\partial_\theta$) that visibly stretches the triangle; this shows what $\mathcal L_\xi g=0$ means.
- [Example] After Eq. (8), give one concrete conserved quantity: for a Schwarzschild geodesic, $\energy{E}=(1-2M/r)\,\mechanical{p^t}$ and $\mechanical{L_z}=r^2\sin^2\theta\,\mechanical{p^\varphi}$, so the reader sees Eq. (7) produce the familiar formulas.
- [Intuition] In the Carter-constant section, add that the Carter integral reduces to the total angular momentum squared $\mechanical{L}^2$ (minus $\mechanical{L_z}^2$, depending on convention) when $a\to0$; this gives the hidden symmetry an intuitive limit.
- [Links] Link the time-translation row of the symmetry table to [[Schwarzschild Metric]] or [[5.1 Schwarzschild black hole]] so the table connects to a concrete metric.

### N3270

Note: [[Schwarzschild Metric|Schwarzschild Metric]]  
Priority: high · Graph: yes · Manim: no

Very short stub with inconsistent units and a misleading description of $r$; it lacks frontmatter, TLDR, and the vault's physical-quantity table.

- [Correctness] The note says "natural units ($c=1$)" but keeps $G$ in $1-2GM/r$, lists $c=299\,792\,458$ m/s, and then gives $r_s=2GM/c^2$; use either $G=c=1$ throughout ($1-2M/r$, $r_s=2M$) or the full SI form $-(1-2GM/(c^2r))\,c^2\mathrm dt^2+\dots$ with $r_s=2GM/c^2$.
- [Correctness] "**r** the radial distance from the object" is wrong: $r$ is the areal (circumferential) radius, defined so the sphere area is $4\pi r^2$; the proper radial distance is $\int\mathrm dr/\sqrt{1-r_s/r}$ and exceeds $\Delta r$.
- [Structure] Add frontmatter with a quoted title, a TLDR callout, a physical-quantity table with semantic macros, and use $\theta,\phi$ consistently (the text mixes Unicode θ, ϕ with \phi).
- [Graph] Plot $-g_{tt}=1-r_s/r$ and $g_{rr}=(1-r_s/r)^{-1}$ against $r/r_s$ for $r/r_s\in[1.05,6]$, marking $r=r_s$ where $g_{tt}\to0$ and $g_{rr}\to\infty$ (a coordinate, not a curvature, singularity).
- [Example] Add worked numbers: $r_s\approx2.95$ km for the Sun and $8.87$ mm for the Earth, and the clock-rate factor $\sqrt{1-r_s/r}\approx1-7\times10^{-10}$ at the Earth's surface.
- [Links] Link to [[5.1 Schwarzschild black hole]], [[5.1.1 Birkhoff's theorem]], and [[Killing Vector]] (static and spherical symmetries) instead of only a video source.
