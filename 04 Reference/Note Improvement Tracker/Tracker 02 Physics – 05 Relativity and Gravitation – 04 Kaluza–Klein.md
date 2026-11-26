---
title: "Note Improvement Tracker – 02 Physics/05 Relativity and Gravitation/04 Kaluza–Klein"
---

> [!TLDR]
> This note tracks the review of the 27 notes in `02 Physics/05 Relativity and Gravitation/04 Kaluza–Klein`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 23 possible errors or notation conflicts. 23 of them are verified (17 fixed, 6 partly); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N3459|N3459]] KK 01 Motivation and extra dimensions: Symbol clash: $y$ is the compact coordinate in "$y\sim y+2\pi r$" but an ordinary spatial coordinate in $(t,x,y,z,\theta)$ and $(t,x,y,z)$ in the same note; use $y$ for only one of them (e.g. keep $\theta$ or $y_5$ for the circle). **Fixed:** Wrote the periodicity as theta ~ theta + 2 pi with circumference 2 pi r; y is now only the ordinary coordinate (table row updated)
- [[#N3459|N3459]] KK 01 Motivation and extra dimensions: The physical-quantities table describes symbols and uses not present in the note ("spherical-coordinate inset" for $\theta$, "wave energy, or first-mode rest energy" for $E_{\mathrm{KK}}$, "unnormalized expansion" for $\psi_n$, "embedding" coordinates); trim descriptions to what this note uses. **Fixed:** Trimmed y, r, theta, E_KK and psi rows to this note's uses (psi row now psi_n only)
- [[#N3460|N3460]] KK 02 Study route and source books: The physical-quantities table lists meanings not used in this note: $r$ as "radial coordinate in the explicitly identified spherical inset", $\theta$ "spherical-coordinate inset", $q$ as "Test charge acted on by the Lorentz force", and $g_{ab}$; remove or correct these rows. **Fixed:** Removed spherical-inset text from r and theta rows, deleted unused q row, reduced g_mu nu,g_ab row to g_mu nu as the angular base metric block
- [[#N3461|N3461]] KK 03 From distance to the metric tensor: Symbol clash: $y$ is an ordinary Cartesian coordinate in $\mathrm dx^\mu=(\mathrm dt,\mathrm dx,\mathrm dy,\mathrm dz)$ and the compact length coordinate $y=r\theta$ in "Add a flat circle"; likewise $r,\theta$ are spherical/Schwarzschild coordinates and the circle radius/angle; rename one set (e.g. $\rho_{\mathrm{sph}},\vartheta$ for the spherical inset). **Partly:** theta already had a warning; extended it to r and the Schwarzschild metric and marked y=r theta as the compact coordinate (not the Cartesian y); no renaming, to keep the collection-wide y convention
- [[#N3461|N3461]] KK 03 From distance to the metric tensor: The physical-quantities table lists $g_{\mu\nu}$ twice with conflicting units ($1$ and —) and includes a "Rest mass in the angular Klein–Gordon equation" $m$ that this note never uses; merge and remove. **Fixed:** Merged into g_uv (unit 1) and g_mu nu,g_ab (unit —) rows; removed the unused rest-mass row
- [[#N3462|N3462]] KK 04 Comparing four- and five-dimensional metrics: The physical-quantities table lists $\widetilde g_{AB}$ with unit $1$ and again with unit —, and $g_{\mu\nu}$ twice; merge into one consistent row each. **Fixed:** One g_mu nu row (unit 1) and one g~_AB row (unit —, angular entry has length squared); removed unused g_ab
- [[#N3463|N3463]] KK 05 Cylinder condition and radion assumptions: Symbol clash: $\widetilde g_{AB}(t,x,y,z,\theta)$ uses $y$ as an ordinary spatial coordinate, while Eq. (5.1) $\partial_y\widetilde g_{AB}=0$ uses $y$ as the circular coordinate; rename one of them. **Fixed:** Wrote the argument as g~_AB(x^mu,theta); updated coordinate row and removed now-unused t and z rows
- [[#N3463|N3463]] KK 05 Cylinder condition and radion assumptions: The table lists $\widetilde g_{AB}$ twice with conflicting units ($1$ and —); merge. **Fixed:** Removed the unit-1 row; kept one row with unit — and a precise description (also fixed theta row spherical-inset text)
- [[#N3464|N3464]] KK 06 Algebraic decomposition of the metric: $B_\mu$ is defined as $\widetilde g_{\mu4}/\Phi_{\mathrm{ang}}$ (units GeV, angular convention) in the first half and as $C_\mu/D$ (dimensionless, length convention) in Eq. (6.2); the table lists only the dimensionless one; use different symbols or state the relation $B^{\mathrm{len}}_\mu=-r\,B^{\mathrm{ang}}_\mu$ at fixed radius. **Partly:** The relation B^len=-r B^ang is already stated in the convention paragraph; added a separate table row for the angular B_mu (GeV) and labelled the dimensionless row as Eq. (6.2)
- [[#N3464|N3464]] KK 06 Algebraic decomposition of the metric: Symbol clash: $B_\mu(t,x,y,z)$ uses $y$ as an ordinary coordinate, while Eq. (6.1) uses $y$ for the circle. **Fixed:** Wrote the argument as B_mu(x^0,x^1,x^2,x^3); removed now-unused t and z rows (also fixed theta row spherical-inset text)
- [[#N3469|N3469]] KK 11 Full coordinate transformation calculation: The sentence "Thus the adjusted base metric is unchanged: $g\prime_{\mu …u}=g_{\mu …u}$" contains a literal line break inside `\nu` (the `\n` was turned into a newline), so it renders incorrectly; replace with $g'_{\mu\nu}=g_{\mu\nu}$. **Fixed:** Replaced with $g'_{\mu\nu}=g_{\mu\nu}$ on one line
- [[#N3472|N3472]] KK 14 Reducing the Einstein-Hilbert action: "Worked normalization check": if the coefficient multiplying the squared potential in the metric ($\kappa^2\Phi^2$) is doubled, the Maxwell coefficient doubles, not quadruples; the factor four applies if $\kappa$ itself is doubled; reword accordingly. **Fixed:** Reworded: doubling the coupling kappa multiplies the Maxwell coefficient (proportional to kappa^2) by four
- [[#N3473|N3473]] KK 15 Deriving the curvature split: The text "Ricci curvature is symmetric in this setting…" is placed on the same line as the closing `$$` of the preceding aligned block; move it to its own paragraph so the display math renders. **Fixed:** Moved "Ricci curvature is symmetric..." to its own paragraph after the display
- [[#N3473|N3473]] KK 15 Deriving the curvature split: A stray period ends the $F_{\mu\nu}F^{\mu\nu}=2(|\mathbf B|^2-|\mathbf E|^2)$ display before "in a local inertial frame", splitting one sentence; remove it. **Fixed:** Removed the period
- [[#N3474|N3474]] KK 16 Fourier modes and periodicity: Physical quantities: the $\mechanical{\theta}$ row refers to a "spherical-coordinate inset" that does not exist in this note, and $\signal{k}_5$ is described generically as "Angular frequency and wave vector" although only the compact wave number is used; make the rows describe this note's quantities. **Fixed:** theta row now "period two pi"; k_5 row now "Wave numbers" for the line wave number k and the compact wave number k_5 (k was used but not listed)
- [[#N3475|N3475]] KK 17 Klein-Gordon equation and dispersion: Physical quantities lists $\signal{\psi}$ twice with conflicting units (GeV and —), lists $\signal{\psi}_n$ and an "unnormalized expansion" that this note never uses, and lists both $\mechanical{\mathbf x}$ and $\mechanical{x}$ as coordinates; remove the duplicates. **Partly:** Removed the unused psi,psi_n (—) row and kept one canonical psi row; bold x and x are different quantities, so merged them into one coordinates row instead of deleting one
- [[#N3476|N3476]] KK 18 Deriving the Kaluza-Klein mass tower: Physical quantities: $\signal{\psi}_n$ appears twice with conflicting units (GeV and —), and the $\mechanical{\theta}$ row mentions a nonexistent "spherical-coordinate inset"; clean up the duplicates. **Partly:** The two psi_n rows are different normalizations (angular section unnormalized, length section canonical), so kept both with distinguishing descriptions; fixed theta row
- [[#N3477|N3477]] KK 19 Deriving charge from phase winding: "Each mass eigenmode is also a charge eigenmode" is false: modes $\pm n$ are mass-degenerate, so a combination such as $\cos(n\theta)$ is a mass eigenmode with no definite charge; say instead that each Fourier mode $e^{in\theta}$ is simultaneously a mass and a charge eigenmode. **Fixed:** Now: each Fourier mode e^{in theta} is both a mass and charge eigenmode; a cos(n theta) combination has definite mass but no definite charge
- [[#N3477|N3477]] KK 19 Deriving charge from phase winding: Physical quantities: the $\mechanical{\theta}$ row mentions a nonexistent "spherical-coordinate inset", and $\signal{\psi}_n$ is listed twice with conflicting units. **Partly:** Fixed theta row; the two psi_n rows are different normalizations, so kept both with distinguishing descriptions
- [[#N3478|N3478]] KK 20 General covariance and gauge symmetry: Physical quantities: the $\mechanical{\theta}$ row mentions a "spherical-coordinate inset" that is not in this note. **Fixed:** theta row now "Compact circular angle with period two pi"
- [[#N3479|N3479]] KK 21 Visualizing local phase choices: Symbol clash: $\mechanical{y}$ is an ordinary spatial coordinate in the plane example and in the table, but the note's own length-coordinate paragraph defines $y$ as the compact coordinate; rename one of them in this note. **Partly:** Compact y appears only in words in the convention paragraph; added a sentence there that later sections do not use compact y and the plane-example y is ordinary; no rename
- [[#N3479|N3479]] KK 21 Visualizing local phase choices: Physical quantities: $\mechanical{m}$ is listed although it is never used, and the $\mechanical{r}$ and $\mechanical{\theta}$ rows refer to a nonexistent "spherical inset". **Fixed:** Removed m row; r row now "Physical circle radius"; theta row now "period two pi"
- [[#N3484|N3484]] Kaluza-Klein - Study Guide: "Notation and units" opens with "The collection uses a mostly-plus metric", but the next section and the first section of every chapter from KK 16 to KK 24 use a mostly-minus angular calculation; say the collection uses two signatures, as stated later. **Fixed:** Now says the collection uses two signatures: mostly-plus for length-coordinate derivations, mostly-minus for each chapter's first angular section

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N3458 | [[Electromagnetism as a Fifth Dimension - Kaluza-Klein\|Electromagnetism as a Fifth Dimension - Kaluza-Klein]] | Analyzed | low | yes | yes | [[#N3458\|View]] |
| N3459 | [[KK 01 Motivation and extra dimensions\|KK 01 Motivation and extra dimensions]] | Analyzed | medium | yes | no | [[#N3459\|View]] |
| N3460 | [[KK 02 Study route and source books\|KK 02 Study route and source books]] | Analyzed | low | no | no | [[#N3460\|View]] |
| N3461 | [[KK 03 From distance to the metric tensor\|KK 03 From distance to the metric tensor]] | Analyzed | medium | no | yes | [[#N3461\|View]] |
| N3462 | [[KK 04 Comparing four- and five-dimensional metrics\|KK 04 Comparing four- and five-dimensional metrics]] | Analyzed | low | no | no | [[#N3462\|View]] |
| N3463 | [[KK 05 Cylinder condition and radion assumptions\|KK 05 Cylinder condition and radion assumptions]] | Analyzed | low | yes | no | [[#N3463\|View]] |
| N3464 | [[KK 06 Algebraic decomposition of the metric\|KK 06 Algebraic decomposition of the metric]] | Analyzed | medium | no | no | [[#N3464\|View]] |
| N3465 | [[KK 07 Interpreting and rebuilding the metric\|KK 07 Interpreting and rebuilding the metric]] | Analyzed | low | no | yes | [[#N3465\|View]] |
| N3466 | [[KK 08 Identifying the U(1) gauge potential\|KK 08 Identifying the U(1) gauge potential]] | Analyzed | low | no | no | [[#N3466\|View]] |
| N3467 | [[KK 09 Worked example with oblique coordinates\|KK 09 Worked example with oblique coordinates]] | Analyzed | low | yes | no | [[#N3467\|View]] |
| N3468 | [[KK 10 Gauge freedom on a tube\|KK 10 Gauge freedom on a tube]] | Analyzed | low | yes | yes | [[#N3468\|View]] |
| N3469 | [[KK 11 Full coordinate transformation calculation\|KK 11 Full coordinate transformation calculation]] | Analyzed | medium | no | no | [[#N3469\|View]] |
| N3470 | [[KK 12 What the metric construction proves\|KK 12 What the metric construction proves]] | Analyzed | low | no | no | [[#N3470\|View]] |
| N3471 | [[KK 13 Why an action is needed\|KK 13 Why an action is needed]] | Analyzed | low | no | no | [[#N3471\|View]] |
| N3472 | [[KK 14 Reducing the Einstein-Hilbert action\|KK 14 Reducing the Einstein-Hilbert action]] | Analyzed | medium | no | no | [[#N3472\|View]] |
| N3473 | [[KK 15 Deriving the curvature split\|KK 15 Deriving the curvature split]] | Analyzed | medium | no | no | [[#N3473\|View]] |
| N3474 | [[KK 16 Fourier modes and periodicity\|KK 16 Fourier modes and periodicity]] | Analyzed | medium | yes | no | [[#N3474\|View]] |
| N3475 | [[KK 17 Klein-Gordon equation and dispersion\|KK 17 Klein-Gordon equation and dispersion]] | Analyzed | low | yes | yes | [[#N3475\|View]] |
| N3476 | [[KK 18 Deriving the Kaluza-Klein mass tower\|KK 18 Deriving the Kaluza-Klein mass tower]] | Analyzed | low | yes | yes | [[#N3476\|View]] |
| N3477 | [[KK 19 Deriving charge from phase winding\|KK 19 Deriving charge from phase winding]] | Analyzed | medium | no | yes | [[#N3477\|View]] |
| N3478 | [[KK 20 General covariance and gauge symmetry\|KK 20 General covariance and gauge symmetry]] | Analyzed | low | no | yes | [[#N3478\|View]] |
| N3479 | [[KK 21 Visualizing local phase choices\|KK 21 Visualizing local phase choices]] | Analyzed | medium | yes | yes | [[#N3479\|View]] |
| N3480 | [[KK 22 Limits and missing ingredients\|KK 22 Limits and missing ingredients]] | Analyzed | low | yes | no | [[#N3480\|View]] |
| N3481 | [[KK 23 Radion and the mass-charge problem\|KK 23 Radion and the mass-charge problem]] | Analyzed | low | yes | no | [[#N3481\|View]] |
| N3482 | [[KK 24 Conclusions and cumulative problems\|KK 24 Conclusions and cumulative problems]] | Analyzed | low | no | no | [[#N3482\|View]] |
| N3483 | [[KK 25 Credits and further study\|KK 25 Credits and further study]] | Analyzed | low | no | no | [[#N3483\|View]] |
| N3484 | [[Kaluza-Klein - Study Guide\|Kaluza-Klein - Study Guide]] | Analyzed | low | no | no | [[#N3484\|View]] |

## Suggestions

### N3458

Note: [[Electromagnetism as a Fifth Dimension - Kaluza-Klein|Electromagnetism as a Fifth Dimension - Kaluza-Klein]]  
Priority: low · Graph: yes · Manim: yes

Clear, correct overview (I rechecked the gauge law, the action normalization $\kappa^2=16\pi G_4$, the charge $q_n=n\kappa/r$, and the numbers $r\approx23.4\ell_P\approx3.8\times10^{-34}$ m, $m_1\approx5.2\times10^{17}$ GeV).

- [Structure] The overview uses signature $(-,+,+,+,+)$ and $A'_\mu=A_\mu-\partial_\mu\lambda$, whereas the first half of every KK chapter uses a mostly-minus angular convention with $A'_\mu=A_\mu+\partial_\mu\varepsilon$; add one sentence here naming both conventions and the translation ($y=r\theta$, $g\to-g$, $A\to-A$, $\kappa=r\xi$).
- [Graph] Add a log–log plot of the first KK mass $m_1=\hbar c/r$ (GeV) versus radius $r$ from $10^{-35}$ to $10^{-15}$ m, marking the electron mass, the LHC scale (~10 TeV) and the radius $r\approx3.8\times10^{-34}$ m forced by Eq. (15); this makes the mass–charge problem visible.
- [Manim] Animate a field mode $e^{iny/r}$ on a circle for $n=0,1,2$ and then a local shift $y\to y+\kappa\lambda(x)$ along a tube, showing the phase change $e^{-iq_n\lambda}$ and the zero-angle seam bending while the geometry is unchanged.
- [Intuition] In Section 5 add one sentence on why $m_n^2=m_5^2+n^2/r^2$: the five-dimensional dispersion relation $E^2=\mathbf p^2+p_5^2+m_5^2$ with $p_5=n/r$ looks to a 4D observer like extra rest mass.

### N3459

Note: [[KK 01 Motivation and extra dimensions|KK 01 Motivation and extra dimensions]]  
Priority: medium · Graph: yes · Manim: no

Rich and mostly correct motivation chapter, but it mixes two coordinate conventions, reuses $y$ for two different coordinates, and its quantity table lists items the note never uses.

- [Correctness] Symbol clash: $y$ is the compact coordinate in "$y\sim y+2\pi r$" but an ordinary spatial coordinate in $(t,x,y,z,\theta)$ and $(t,x,y,z)$ in the same note; use $y$ for only one of them (e.g. keep $\theta$ or $y_5$ for the circle).
- [Correctness] The physical-quantities table describes symbols and uses not present in the note ("spherical-coordinate inset" for $\theta$, "wave energy, or first-mode rest energy" for $E_{\mathrm{KK}}$, "unnormalized expansion" for $\psi_n$, "embedding" coordinates); trim descriptions to what this note uses.
- [Structure] The opening gauge law $\theta'=\theta+\xi\varepsilon$, $A'_\mu=A_\mu+\partial_\mu\varepsilon$ is stated without the metric form it relies on; add $-\Phi_{\mathrm{ang}}(\mathrm d\theta-\xi A_\mu\mathrm dx^\mu)^2$ or a pointer to \[\[KK 06 Algebraic decomposition of the metric\]\], and note that the overview uses the opposite sign convention.
- [Graph] Plot $E_{\mathrm{KK}}=\hbar c/r$ (GeV) versus $r$ (m) on log axes for $r\in[10^{-35},10^{-15}]$, with the worked point $r=10^{-18}$ m, $E\approx197$ GeV, marked.
- [Simplify] The Standard Model group discussion (Higgs components, quotients $SU(3)/U(2)$, M-theory) is long for a motivation chapter; move the eleven-dimensional count into a collapsible callout so the main thread (small circle hidden at low energy) stays short.

### N3460

Note: [[KK 02 Study route and source books|KK 02 Study route and source books]]  
Priority: low · Graph: no · Manim: no

Clear roadmap with correct preview formulas (the angular metric, gauge law and $q_n=n\xi$ are mutually consistent), but the table and some headings are boilerplate.

- [Correctness] The physical-quantities table lists meanings not used in this note: $r$ as "radial coordinate in the explicitly identified spherical inset", $\theta$ "spherical-coordinate inset", $q$ as "Test charge acted on by the Lorentz force", and $g_{ab}$; remove or correct these rows.
- [Structure] The heading "Exact angular titles" for the book list is unclear; rename it (e.g. "Optional books"), and align the frontmatter title "Study route and prerequisites" with the file name "Study route and source books".
- [Simplify] The convention paragraph repeated at the top of every chapter mentions the "scalar with subscript ang" and xi before they are defined; replace it with a link to one conventions callout in \[\[Kaluza-Klein - Study Guide\]\].
- [Structure] File starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3461

Note: [[KK 03 From distance to the metric tensor|KK 03 From distance to the metric tensor]]  
Priority: medium · Graph: no · Manim: yes

Correct and patient introduction to the metric, but it switches signature and the meaning of $y$, $r$ and $\theta$ within one note, and its table has duplicate and unused rows.

- [Correctness] Symbol clash: $y$ is an ordinary Cartesian coordinate in $\mathrm dx^\mu=(\mathrm dt,\mathrm dx,\mathrm dy,\mathrm dz)$ and the compact length coordinate $y=r\theta$ in "Add a flat circle"; likewise $r,\theta$ are spherical/Schwarzschild coordinates and the circle radius/angle; rename one set (e.g. $\rho_{\mathrm{sph}},\vartheta$ for the spherical inset).
- [Correctness] The physical-quantities table lists $g_{\mu\nu}$ twice with conflicting units ($1$ and —) and includes a "Rest mass in the angular Klein–Gordon equation" $m$ that this note never uses; merge and remove.
- [Structure] The note uses mostly-minus in the first half and $(-,+,+,+)$ in the second; put the two worked computations under clearly labelled headings or convert one so that a reader does not meet both signatures for the same interval.
- [Manim] Animate unrolling the cylinder of radius $r$ into a flat strip of width $2\pi r$, carrying a drawn right triangle with legs $\Delta h$, $r\Delta\theta$, to show that $\mathrm d\ell^2=\mathrm dh^2+r^2\mathrm d\theta^2$ is flat.
- [Structure] File starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3462

Note: [[KK 04 Comparing four- and five-dimensional metrics|KK 04 Comparing four- and five-dimensional metrics]]  
Priority: low · Graph: no · Manim: no

Clear, correct chapter on component counting and the role of the radius factor.

- [Correctness] The physical-quantities table lists $\widetilde g_{AB}$ with unit $1$ and again with unit —, and $g_{\mu\nu}$ twice; merge into one consistent row each.
- [Intuition] In "Components are not propagating polarizations", add the 4D check $D(D-3)/2=2$ for $D=4$, so the reader sees the formula reproduce the familiar two graviton polarizations before applying it to $D=5$.
- [Structure] File starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3463

Note: [[KK 05 Cylinder condition and radion assumptions|KK 05 Cylinder condition and radion assumptions]]  
Priority: low · Graph: yes · Manim: no

Clear separation of the cylinder condition from radion freezing, with a symbol clash in $y$ and duplicate table rows.

- [Correctness] Symbol clash: $\widetilde g_{AB}(t,x,y,z,\theta)$ uses $y$ as an ordinary spatial coordinate, while Eq. (5.1) $\partial_y\widetilde g_{AB}=0$ uses $y$ as the circular coordinate; rename one of them.
- [Correctness] The table lists $\widetilde g_{AB}$ twice with conflicting units ($1$ and —); merge.
- [Graph] Add a 3D surface plot of a tube with base coordinate $x\in[0,10]$ and circle radius $r\Phi(x)$, $\Phi(x)=1+0.3\sin(x/2)$, to illustrate a radion that satisfies the cylinder condition but violates Eq. (5.2) (the "Worked distinction").
- [Structure] File starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3464

Note: [[KK 06 Algebraic decomposition of the metric|KK 06 Algebraic decomposition of the metric]]  
Priority: medium · Graph: no · Manim: no

Correct square-completion (checked, including the numerical block example), but the same symbol $B_\mu$ carries two different definitions and units in the two halves.

- [Correctness] $B_\mu$ is defined as $\widetilde g_{\mu4}/\Phi_{\mathrm{ang}}$ (units GeV, angular convention) in the first half and as $C_\mu/D$ (dimensionless, length convention) in Eq. (6.2); the table lists only the dimensionless one; use different symbols or state the relation $B^{\mathrm{len}}_\mu=-r\,B^{\mathrm{ang}}_\mu$ at fixed radius.
- [Correctness] Symbol clash: $B_\mu(t,x,y,z)$ uses $y$ as an ordinary coordinate, while Eq. (6.1) uses $y$ for the circle.
- [Simplify] The angular and length-coordinate halves perform the same completion of the square twice with opposite signs; keep one as the main derivation and reduce the other to a short translation box.
- [Structure] File starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3465

Note: [[KK 07 Interpreting and rebuilding the metric|KK 07 Interpreting and rebuilding the metric]]  
Priority: low · Graph: no · Manim: yes

Correct reconstruction, inverse metric and determinant (checked), but the angular half is padded with fourteen component-by-component equations.

- [Simplify] Replace the explicit list of all $\widetilde g_{00},\dots,\widetilde g_{34}$ equations by the block matrix plus one example entry; the index form already states them all.
- [Example] In "Derive and check the inverse", write out the upper-left product explicitly: $(g_{\mu\nu}+\kappa^2\Phi^2A_\mu A_\nu)g^{\nu\rho}+\kappa\Phi^2A_\mu(-\kappa A^\rho)=\delta_\mu^\rho$.
- [Manim] Animate horizontal versus fixed-$y$ displacements on a tube: a base step $\mathrm dx$ with $\mathrm dy=0$ versus the horizontal lift $\mathrm dy=-\kappa A\,\mathrm dx$, showing that only the latter measures $g_{\mu\nu}$ alone.
- [Structure] File starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3466

Note: [[KK 08 Identifying the U(1) gauge potential|KK 08 Identifying the U(1) gauge potential]]  
Priority: low · Graph: no · Manim: no

Clear and correct derivation of the gauge law and field-strength invariance.

- [Structure] The angular half gives $A'_\mu=A_\mu+\partial_\mu\varepsilon$ and the length half $A'_\mu=A_\mu-\partial_\mu\lambda$; add one sentence right after Eq. (8.1) explaining that with $y=r\theta$ the shift parameters coincide ($\lambda=\varepsilon$, $\kappa=r\xi$) and the opposite gradient sign comes only from $A^{\mathrm{len}}_\mu=-A^{\mathrm{ang}}_\mu$, so the two halves do not conflict.
- [Intuition] In "Why the group is U(1)" add a concrete example: a shift by the full circumference $2\pi r$ is the identity, so the shift parameter lives on a circle, $e^{i y/r}\in U(1)$.
- [Structure] File starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3467

Note: [[KK 09 Worked example with oblique coordinates|KK 09 Worked example with oblique coordinates]]  
Priority: low · Graph: yes · Manim: no

Correct and very clear worked example (metric, inverse, determinant and the 60-degree example all check).

- [Simplify] Connect the two halves: the tilted-basis example is the case $a=\sin\gamma$, $b=\cos\gamma$ of Eq. (9.1), giving $g_{ij}$ with $g_{uv}=\sin\gamma$ and $\det g=\cos^2\gamma$.
- [Graph] Add an interactive 2D plot of the oblique grid lines $u=\text{const}$, $v=\text{const}$ for Eq. (9.1) with sliders $a\in[-1,1]$, $b\in[0.2,1.5]$, plus the two coordinate basis vectors $(1,0)$ and $(a,b)$.
- [Structure] File starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3468

Note: [[KK 10 Gauge freedom on a tube|KK 10 Gauge freedom on a tube]]  
Priority: low · Graph: yes · Manim: yes

Correct and intuitive tube example (Eq. (10.1), its determinant and the explicit $\lambda=x^2/2L^2$ case check), ideal for a visual.

- [Graph] Plot the unrolled tube ($x\in[-2L,2L]$, $y\in[0,2\pi r)$) with the new zero-angle curves $y=-\kappa\lambda(x)+2\pi r k$ for $\lambda=x^2/2L^2$ and $\kappa/L=0.5$, wrapped modulo $2\pi r$, next to the straight old seam.
- [Manim] Animate the zero-angle seam on a 3D tube bending from straight to the curve $y'=0$ while the tube itself stays fixed, then display $A'_x=-x/L^2$ and $F=0$.
- [Simplify] State explicitly that the angular half (with $\theta'=\theta+\varepsilon$) and the length half (with $y'=y+\kappa\lambda$) describe the same relabelling ($r\varepsilon=\kappa\lambda$) and that the opposite gradient signs come from $A^{\mathrm{len}}=-A^{\mathrm{ang}}$, so readers can compare $\widetilde g'_{x\theta}=\Phi_{\mathrm{ang}}\partial_x\varepsilon$ with the $-2\kappa\lambda'$ cross term.
- [Structure] File starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3469

Note: [[KK 11 Full coordinate transformation calculation|KK 11 Full coordinate transformation calculation]]  
Priority: medium · Graph: no · Manim: no

Correct full Jacobian calculation in both conventions (checked), but a broken inline formula garbles the main conclusion of the angular half.

- [Correctness] The sentence "Thus the adjusted base metric is unchanged: $g\prime_{\mu …u}=g_{\mu …u}$" contains a literal line break inside `\nu` (the `\n` was turned into a newline), so it renders incorrectly; replace with $g'_{\mu\nu}=g_{\mu\nu}$.
- [Simplify] In the angular half, the case-form Jacobian column $\partial x'^B/\partial x^4$ is shown after it was already used; move it to the "Write all four Jacobian blocks" list.
- [Intuition] Add a one-line matrix picture: $\widetilde g=J^{\mathsf T}\widetilde g'J$ with $J=\begin{pmatrix}\mathbb 1&0\\ \xi\partial\varepsilon&1\end{pmatrix}$ is a shear, which is why $\widetilde g_{44}$ and the Schur complement are unchanged.
- [Structure] File starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3470

Note: [[KK 12 What the metric construction proves|KK 12 What the metric construction proves]]  
Priority: low · Graph: no · Manim: no

Clear summary chapter separating assumptions from results; no errors found.

- [Simplify] In "Why a gauge law does not fix all dynamics", replace "its square is gauge invariant too" by the explicit example $(F_{\mu\nu}F^{\mu\nu})^2$ and mention $F_{\mu\nu}\tilde F^{\mu\nu}$ as a parity-odd invariant, so the statement is concrete.
- [Structure] File starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3471

Note: [[KK 13 Why an action is needed|KK 13 Why an action is needed]]  
Priority: low · Graph: no · Manim: no

Clear argument for why dynamics require an action, with a correct Euler–Lagrange derivation and dimensional check; one sentence refers to a visual that is not in the note.

- [Structure] "Three colored brackets identify the five-dimensional Einstein–Hilbert action…" describes the video slide, not the note; rephrase as "The three integrals are…".
- [Structure] The table omits the four-dimensional $G$ used in the angular action while listing $\widetilde G$; add it (or note $G\equiv G_4$).
- [Intuition] Explain the overall minus sign difference between the angular action $-\frac{1}{16\pi\widetilde G}\int\widetilde R$ and Eq. (13.1) $+\frac{1}{16\pi G_5}\int R_5$: it comes from the signature flip $g\to-g$, under which $R\to-R$.
- [Structure] File starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3472

Note: [[KK 14 Reducing the Einstein-Hilbert action|KK 14 Reducing the Einstein-Hilbert action]]  
Priority: medium · Graph: no · Manim: no

Correct reduction in both conventions (determinant, $G=\widetilde G/2\pi r$, $\xi^2=16\pi G/r^2$, Maxwell and Einstein variations all checked), with one misstated scaling in the worked normalization check.

- [Correctness] "Worked normalization check": if the coefficient multiplying the squared potential in the metric ($\kappa^2\Phi^2$) is doubled, the Maxwell coefficient doubles, not quadruples; the factor four applies if $\kappa$ itself is doubled; reword accordingly.
- [Structure] The angular half calls the reduced action $S$ while the table lists $\widetilde S$, $S_4$, $S_5$, $S_{\mathrm M}$; label it consistently (e.g. $S_4$).
- [Simplify] State once, near Eq. (14.1), that the angular identity $\widetilde R=R+\tfrac14\xi^2\Phi_{\mathrm{ang}}F^2$ and $R_5=R_4-\tfrac14\kappa^2F^2$ are the same equation after $g\to-g$ ($R\to-R$, $F^2$ unchanged) and $\kappa^2=\xi^2\Phi_{\mathrm{ang}}$.
- [Structure] File starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3473

Note: [[KK 15 Deriving the curvature split|KK 15 Deriving the curvature split]]  
Priority: medium · Graph: no · Manim: no

Correct and complete curvature derivation (Cartan connection, Riemann coefficients and the $-3+1$ contraction all check), but a broken display block and long angular preamble obscure it.

- [Correctness] The text "Ricci curvature is symmetric in this setting…" is placed on the same line as the closing `$$` of the preceding aligned block; move it to its own paragraph so the display math renders.
- [Correctness] A stray period ends the $F_{\mu\nu}F^{\mu\nu}=2(|\mathbf B|^2-|\mathbf E|^2)$ display before "in a local inertial frame", splitting one sentence; remove it.
- [Simplify] The angular "derivative-counting" argument and the local-point calculation are superseded by the explicit Cartan derivation below; shorten them to a short motivation and point to the frame calculation.
- [Intuition] Add a sentence linking Eq. (15.5) to the Aharonov–Bohm effect: the circular shift around a loop is the flux of $F$, the geometric version of the gauge phase $\oint A$ (link \[\[3.4 Significance of Potentials in Quantum Theory\]\]).
- [Structure] File starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3474

Note: [[KK 16 Fourier modes and periodicity|KK 16 Fourier modes and periodicity]]  
Priority: medium · Graph: yes · Manim: no

The periodicity argument and normalization are correct and well checked, but generic boilerplate and an undefined self-check term make it denser than needed.

- [Correctness] Physical quantities: the $\mechanical{\theta}$ row refers to a "spherical-coordinate inset" that does not exist in this note, and $\signal{k}_5$ is described generically as "Angular frequency and wave vector" although only the compact wave number is used; make the rows describe this note's quantities.
- [Simplify] The shared "Geometric and field equations" and "Length-coordinate convention" paragraphs introduce the radion, $\xi$, $\varepsilon$, $\kappa$, $\Phi$ and the field strength, none of which appear here; trim them to the angle/length conversion actually used ($y=r\theta$).
- [Structure] Self-check question 1 asks about "the cylinder condition", which is never defined in this note; define it in one sentence or link \[\[KK 05 Cylinder condition and radion assumptions\]\].
- [Example] In "Worked mode example", finish the calculation with equation (16.2): for $\Psi\propto1+2\cos(y/r)$ state $\psi_0$ and $\psi_{\pm1}$ explicitly (equal amplitudes, $p_5=0,\pm1/r$) so the reader sees the normalization prefactor at work.
- [Graph] Plot $\mathrm{Re}\,e^{in\theta}$ for $n=0,1,2$ and the antiperiodic $n=1/2$ over $\theta\in[0,4\pi]$, marking $\theta=2\pi$, to show why only integers return to the start value (self-check 2).
- [Structure] The file starts with a UTF-8 BOM (committed in HEAD); remove it per the vault rule.

### N3475

Note: [[KK 17 Klein-Gordon equation and dispersion|KK 17 Klein-Gordon equation and dispersion]]  
Priority: low · Graph: yes · Manim: yes

Clear and correct in both sign conventions, with a good worked example; the quantity table is the main defect.

- [Correctness] Physical quantities lists $\signal{\psi}$ twice with conflicting units (GeV and —), lists $\signal{\psi}_n$ and an "unnormalized expansion" that this note never uses, and lists both $\mechanical{\mathbf x}$ and $\mechanical{x}$ as coordinates; remove the duplicates.
- [Intuition] The note switches from $(\Box+m^2)\psi=0$ (mostly-minus) to $(\Box-m^2)\psi=0$ (mostly-plus); add a two-row comparison table (signature, $\Box$, KG form, plane-wave check) so the sign change is visibly a convention change.
- [Example] Extend "Worked energy calculation" with the phase velocity $E/|p|=5/4$ and the identity $v_\mathrm g v_\mathrm p=1$, which makes the "phase velocity can exceed one" remark concrete.
- [Graph] Native plot of $v_\mathrm g=p/\sqrt{p^2+m^2}$ and $v_\mathrm p=\sqrt{p^2+m^2}/p$ for $m=1$, $p\in(0,5]$, with the line $v=1$; complements the existing dispersion SVG.
- [Manim] A 1D massive Klein–Gordon wave packet whose phase crests run faster than its envelope, showing $v_\mathrm p>1>v_\mathrm g$.
- [Structure] Remove the committed UTF-8 BOM.

### N3476

Note: [[KK 18 Deriving the Kaluza-Klein mass tower|KK 18 Deriving the Kaluza-Klein mass tower]]  
Priority: low · Graph: yes · Manim: yes

The mass-tower derivation, the numbers in the worked tower, and the limits are correct and well motivated.

- [Correctness] Physical quantities: $\signal{\psi}_n$ appears twice with conflicting units (GeV and —), and the $\mechanical{\theta}$ row mentions a nonexistent "spherical-coordinate inset"; clean up the duplicates.
- [Simplify] In the warm-up, $\mechanical{x}$ is one spatial axis, but in the next section it abbreviates all four base coordinates; use $x^\mu$ or a separate symbol for the four-coordinate argument.
- [Simplify] Rephrase "The cylinder condition extends the mode-label separation to a circle-independent background": say that separation works because the background metric does not depend on $\theta$, so no term couples different $n$.
- [Graph] Plot the worked tower: $m_n=\sqrt{m_5^2+n^2/r^2}$ against $n=0..5$ for $1/r=2$ GeV with $m_5=0$ and $m_5=3$ GeV, showing equal spacing only in the massless case.
- [Manim] Roll a flat plane wave into a tube: phase fronts on a sheet wrap into a cylinder, and only wave numbers $p_y=n/r$ join smoothly at the seam.
- [Structure] Remove the committed UTF-8 BOM.

### N3477

Note: [[KK 19 Deriving charge from phase winding|KK 19 Deriving charge from phase winding]]  
Priority: medium · Graph: no · Manim: yes

The passive-transformation sign, covariant derivative, and inverse-metric reduction are correct, but one eigenmode statement is wrong and the two sign conventions are not compared side by side.

- [Correctness] "Each mass eigenmode is also a charge eigenmode" is false: modes $\pm n$ are mass-degenerate, so a combination such as $\cos(n\theta)$ is a mass eigenmode with no definite charge; say instead that each Fourier mode $e^{in\theta}$ is simultaneously a mass and a charge eigenmode.
- [Correctness] Physical quantities: the $\mechanical{\theta}$ row mentions a nonexistent "spherical-coordinate inset", and $\signal{\psi}_n$ is listed twice with conflicting units.
- [Intuition] Add a small table with both conventions: angular ($A'=A+\partial\varepsilon$, $D=\partial+iqA$) and length ($A'=A-\partial\lambda$, $D=\partial-iqA$), both with matter phase $e^{-iq\cdot}$. The note currently gives only the length-coordinate covariant derivative.
- [Simplify] In "Obtain the charged mode equation", show the intermediate expansion $g^{\mu\nu}\partial_\mu\partial_\nu-2\kappa A^\mu\partial_\mu\partial_5+(1+\kappa^2A^2)\partial_5^2$ acting on $e^{iny/r}$ before compressing it into $D_\mu D^\mu-n^2/r^2$.
- [Manim] A tube whose zero-angle seam is bent by $\varepsilon(x)$ while the winding mode stays fixed, with the read-off phase of $\psi_n$ shifting by $-n\xi\varepsilon(x)$.
- [Structure] Remove the committed UTF-8 BOM.

### N3478

Note: [[KK 20 General covariance and gauge symmetry|KK 20 General covariance and gauge symmetry]]  
Priority: low · Graph: no · Manim: yes

A careful conceptual note that separates passive, active, local, and global aspects correctly; one worked calculation would make it concrete.

- [Correctness] Physical quantities: the $\mechanical{\theta}$ row mentions a "spherical-coordinate inset" that is not in this note.
- [Example] In "Worked coordinate-versus-field distinction", write the flat-tube calculation explicitly: start from $\eta_{\mu\nu}dx^\mu dx^\nu+dy^2$, substitute $y'=y+\kappa\lambda(x)$, read off $A_\mu=-\partial_\mu\lambda$, and show $F_{\mu\nu}=0$.
- [Manim] A coordinate grid on a cylinder sheared by a position-dependent circular shift while marked events stay fixed, illustrating "What the deformed grids show".
- [Structure] Remove the committed UTF-8 BOM.

### N3479

Note: [[KK 21 Visualizing local phase choices|KK 21 Visualizing local phase choices]]  
Priority: medium · Graph: yes · Manim: yes

The gauge-invariant phase comparison is derived correctly, but there is a coordinate-letter clash and the visual discussion depends on figures described only in words.

- [Correctness] Symbol clash: $\mechanical{y}$ is an ordinary spatial coordinate in the plane example and in the table, but the note's own length-coordinate paragraph defines $y$ as the compact coordinate; rename one of them in this note.
- [Correctness] Physical quantities: $\mechanical{m}$ is listed although it is never used, and the $\mechanical{r}$ and $\mechanical{\theta}$ rows refer to a nonexistent "spherical inset".
- [Graph] For $\varepsilon(x)=\sin x$ and a rest-state mode, plot $\chi'(x)=-q\varepsilon(x)$, $\partial_x\chi'$, and $qA'_x=q\varepsilon'(x)$ on one axis, showing $\partial_x\chi'+qA'_x=0$ (the worked cancellation).
- [Manim] The "meditation": the tube seam curves, the colored phase on the base plane shifts, potential arrows appear, and a running readout of $D_\mu\psi$ stays at zero.
- [Structure] Remove the committed UTF-8 BOM.

### N3480

Note: [[KK 22 Limits and missing ingredients|KK 22 Limits and missing ingredients]]  
Priority: low · Graph: yes · Manim: no

An accurate and balanced limitations chapter whose bubble-of-nothing smoothness check is correct; parts of the radion discussion repeat each other.

- [Simplify] The radion point appears three times (list item 2, the paragraph after the list, and "The radius field cannot simply be forgotten"); merge these into one passage that links to KK 23.
- [Graph] For the closing-circle metric, plot $f(\rho)=1-r^2/\rho^2$ and the circle circumference $2\pi r\sqrt{f(\rho)}$ for $\rho/r\in[1,5]$, showing the circle shrinking smoothly to zero at $\rho=r$.
- [Example] In "Why one circle gives an Abelian field", add a contrast: rotations of a 2-sphere have three generators with $[L_i,L_j]=i\epsilon_{ijk}L_k$, which is the minimal non-Abelian case.
- [Structure] Remove the committed UTF-8 BOM.

### N3481

Note: [[KK 23 Radion and the mass-charge problem|KK 23 Radion and the mass-charge problem]]  
Priority: low · Graph: yes · Manim: no

Correct and well verified (the Jordan-frame action, the trace step, $r\approx23\ell_P$, and $m_1\approx5.2\times10^{17}$ GeV all check out), but the same estimate is derived twice with inconsistent notation.

- [Structure] Notation is inconsistent within the note: $\mechanical{G}$ vs $\mechanical{G}_4$, and $\mechanical{\ell}_{\mathrm P}$ vs $\mechanical{\ell}_P$ (the table has a row for each); pick one form.
- [Simplify] The first section and "Derive the charged-mode scale" repeat the same derivation of $r=2\ell_P/\sqrt\alpha$ and $m_1$; keep one full derivation and refer back to it.
- [Example] Show the numbers: $\sqrt{\alpha}\approx0.0854$, $2/\sqrt\alpha\approx23.4$, $23.4\times1.616\times10^{-35}\,\mathrm m\approx3.8\times10^{-34}\,\mathrm m$, and $m_1=(\sqrt\alpha/2)m_\mathrm P\approx0.0427\times1.22\times10^{19}\,\mathrm{GeV}$.
- [Graph] Replace or complement Fig. 23.2 with a native plot of $U(\sigma)=\tfrac12 m_\sigma^2(\sigma-\sigma_0)^2$ and the small-oscillation frequency, labeled as illustrative.
- [Structure] Remove the committed UTF-8 BOM.

### N3482

Note: [[KK 24 Conclusions and cumulative problems|KK 24 Conclusions and cumulative problems]]  
Priority: low · Graph: no · Manim: no

A concise recap with correct cumulative problems and solutions.

- [Example] Problem 3: also give $\sqrt{52}=2\sqrt{13}\approx7.21$ GeV, so the uneven spacing (4, 5, 7.21) is visible at a glance.
- [Links] Problem 4: link where the coefficient $-\kappa^2/(64\pi G_4)$ comes from (\[\[KK 14 Reducing the Einstein-Hilbert action\]\]).
- [Structure] Remove the committed UTF-8 BOM.

### N3483

Note: [[KK 25 Credits and further study|KK 25 Credits and further study]]  
Priority: low · Graph: no · Manim: no

A short study-direction note; no content changes are needed.

- [Structure] The frontmatter title "Further study and final self-check" differs from the file name "Credits and further study", and the file has a committed UTF-8 BOM; align the title and remove the BOM.

### N3484

Note: [[Kaluza-Klein - Study Guide|Kaluza-Klein - Study Guide]]  
Priority: low · Graph: no · Manim: no

A well-organized hub with a correct angular-to-length conversion, but one contradictory statement about the metric convention.

- [Correctness] "Notation and units" opens with "The collection uses a mostly-plus metric", but the next section and the first section of every chapter from KK 16 to KK 24 use a mostly-minus angular calculation; say the collection uses two signatures, as stated later.
