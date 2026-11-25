---
title: "Note Improvement Tracker – 02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/09 Orbital Angular Momentum"
---

> [!TLDR]
> This note tracks the review of the 11 notes in `02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/09 Orbital Angular Momentum`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 4 possible errors or notation conflicts. 4 of them are verified (4 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N2092|N2092]] Orbital angular momentum, rings, and spheres: The physical-quantities table lists $J_x$ as a probability flux with unit $\unit{s^{-1}}$, but the note uses $\hat J_x$ only as a generalized angular momentum component (section "General angular momentum"); also $R,T$ (reflection/transmission) never appear as symbols, while the mass $m$, $m_\ell$, $\hat J$, and $\Lambda^2$ are missing; rebuild the table from the symbols actually used. **Fixed:** Replaced J_x and R,T rows with rows for the generalized angular momentum J, mass m, radius r, quantum numbers l,m_l and j,m_j; Lambda^2 not listed because it is a dimensionless operator
- [[#N2092|N2092]] Orbital angular momentum, rings, and spheres: In the "Physics 137 — Midterm 2 review" block, "Its inner product is $\int_a^b\lvert f\rvert^2dx<\infty$, $\langle f\mid g\rangle=\ldots$" labels the square-integrability condition as the inner product; separate the two statements. **Fixed:** Split into a square-integrability statement and a separate inner-product equation
- [[#N2093|N2093]] Spatial rotations and the angular momentum generators: In "The three-dimensional rotation group", $O_y(\epsilon)O_x(\epsilon)-O_x(\epsilon)O_y(\epsilon)=\epsilon^2[L_x,L_y]$ with the given passive matrices equals $-i\epsilon^2L_z=\begin{pmatrix}0&\epsilon^2&0\\-\epsilon^2&0&0\\0&0&0\end{pmatrix}=O_z(+\epsilon^2)-I_3$, not the displayed $\begin{pmatrix}0&-\epsilon^2&0\\\epsilon^2&0&0\\0&0&0\end{pmatrix}$ and not $O_z(-\epsilon^2)-I_3$. **Fixed:** Verified numerically that eps^2[L_x,L_y]=-i eps^2 L_z; flipped the displayed matrix signs and changed the text to -i eps^2 L_z=O_z(eps^2)-I_3
- [[#N2093|N2093]] Spatial rotations and the angular momentum generators: The physical-quantities table lists $\mechanical{L}$ both as "Box side length" (m) and as orbital angular momentum, and includes symbols the note never uses ($\mathbf p,\mathbf p'$, $c$, emission coefficients $A,B$); remove them and add the dimensionless generators $L_i,T_a,J_i$, $O$, $D(R)$, $\boldsymbol\omega$, $\ell,m$. **Fixed:** Removed those rows (kept p); added r, generators L_i,T_a,J_i, O and D(R), angles phi and epsilon, omega, l and m

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2083 | [[09.00 Orbital Angular Momentum\|09.00 Orbital Angular Momentum]] | Analyzed | low | no | no | [[#N2083\|View]] |
| N2084 | [[09.01 Definition and Algebra\|09.01 Definition and Algebra]] | Analyzed | low | no | no | [[#N2084\|View]] |
| N2085 | [[09.02 Raising and Lowering Operators\|09.02 Raising and Lowering Operators]] | Analyzed | low | no | no | [[#N2085\|View]] |
| N2086 | [[09.03 Spectrum of L̂² and L̂ (z)\|09.03 Spectrum of L̂² and L̂ (z)]] | Analyzed | low | no | yes | [[#N2086\|View]] |
| N2087 | [[09.04 Spherical Harmonics\|09.04 Spherical Harmonics]] | Analyzed | low | yes | no | [[#N2087\|View]] |
| N2088 | [[09.05 L̂² as the Angular Laplace Operator\|09.05 L̂² as the Angular Laplace Operator]] | Analyzed | low | yes | no | [[#N2088\|View]] |
| N2089 | [[09.06 Particle on a Sphere\|09.06 Particle on a Sphere]] | Analyzed | low | yes | no | [[#N2089\|View]] |
| N2090 | [[09.07 Rotations as Unitary Operators\|09.07 Rotations as Unitary Operators]] | Analyzed | low | no | yes | [[#N2090\|View]] |
| N2091 | [[09.08 Orbital Angular Momentum Exercises\|09.08 Orbital Angular Momentum Exercises]] | Analyzed | low | no | no | [[#N2091\|View]] |
| N2092 | [[Orbital angular momentum, rings, and spheres\|Orbital angular momentum, rings, and spheres]] | Analyzed | high | yes | no | [[#N2092\|View]] |
| N2093 | [[Spatial rotations and the angular momentum generators\|Spatial rotations and the angular momentum generators]] | Analyzed | high | no | yes | [[#N2093\|View]] |

## Suggestions

### N2083

Note: [[09.00 Orbital Angular Momentum|09.00 Orbital Angular Momentum]]  
Priority: low · Graph: no · Manim: no

Clear and correct chapter hub with an accurate summary of the commutators, spectrum, ladder action, parity, and rotation operator.

- [Structure] No change needed; optionally link each summary bullet to its section note (09.01–09.07) so the hub doubles as a table of contents.

### N2084

Note: [[09.01 Definition and Algebra|09.01 Definition and Algebra]]  
Priority: low · Graph: no · Manim: no

Concise and correct definition note, but the commutator result is stated without even a one-line derivation.

- [Example] Under "Commutators", show the single nonzero step $[\hat y\hat p_z,\hat z\hat p_x]+[\hat z\hat p_y,\hat x\hat p_z]=i\hbar(\hat x\hat p_y-\hat y\hat p_x)$ so the reader sees where $[\hat L_x,\hat L_y]=i\hbar\hat L_z$ comes from.
- [Intuition] After "cannot all have sharp values", add one sentence on why $\hat{\mathbf L}^2$ commutes with each component (it is rotation invariant, a scalar), which motivates choosing $\hat{\mathbf L}^2,\hat L_z$ as the commuting pair.
- [Simplify] Justify $x\partial_y-y\partial_x=\partial_\phi$ in one line via the chain rule with $x=\rho\cos\phi$, $y=\rho\sin\phi$.

### N2085

Note: [[09.02 Raising and Lowering Operators|09.02 Raising and Lowering Operators]]  
Priority: low · Graph: no · Manim: no

Correct and compact; the key steps are stated but the identity for $\hat{\mathbf L}^2$ and the commutators are asserted without derivation.

- [Example] Derive $[\hat L_z,\hat L_\pm]=\pm\hbar\hat L_\pm$ in two lines from $[\hat L_z,\hat L_x]=i\hbar\hat L_y$ and $[\hat L_z,\hat L_y]=-i\hbar\hat L_x$, and expand $\hat L_-\hat L_+=\hat L_x^2+\hat L_y^2+i[\hat L_x,\hat L_y]$ to show the $\hat{\mathbf L}^2$ identity.
- [Intuition] Add an analogy to the harmonic oscillator ladder ($[\hat H,\hat a^\dagger]=\hbar\omega\hat a^\dagger$): $\hat L_\pm$ step the eigenvalue of $\hat L_z$ by $\pm\hbar$ in exactly the same way.

### N2086

Note: [[09.03 Spectrum of L̂² and L̂ (z)|09.03 Spectrum of L̂² and L̂ (z)]]  
Priority: low · Graph: no · Manim: yes

Correct proof and an accurate vector-model figure ($\sqrt6$, $\sqrt5$, $65.9^\circ$ check out), though a couple of proof steps are compressed.

- [Simplify] In the proof, say explicitly that $m_{\min}(m_{\min}-1)=m_{\max}(m_{\max}+1)$ has the roots $m_{\min}=-m_{\max}$ and $m_{\min}=m_{\max}+1$, and that the second is excluded because $m_{\min}\le m_{\max}$.
- [Simplify] Derive the normalization in "Explicit ladder action" in one line: $\lVert\hat L_\pm\lvert\ell,m\rangle\rVert^2=\langle\ell,m\rvert\hat L_\mp\hat L_\pm\lvert\ell,m\rangle=\hbar^2[\ell(\ell+1)-m(m\pm1)]$.
- [Manim] Show all five cones for $\ell=2$ stacked at heights $m\hbar=-2\hbar,\ldots,2\hbar$ on a sphere of radius $\sqrt6\hbar$, with $\hat L_+$ animated as the vector jumping from one cone to the next and vanishing above $m=2$.
- [Intuition] Note that the cone angle $\arccos(m/\sqrt{\ell(\ell+1)})$ tends to zero for $m=\ell\to\infty$, recovering the classical limit of a vector aligned with $z$.

### N2087

Note: [[09.04 Spherical Harmonics|09.04 Spherical Harmonics]]  
Priority: low · Graph: yes · Manim: no

Correct formulas (all listed $Y_{\ell m}$, phases and $p_x,p_y$ combinations verified) and an accurate polar-section figure; a 3D view would add the most.

- [Graph] Add a graph3d parametric surface $r(\theta,\phi)=\lvert Y_{\ell m}\rvert^2$ (or $\lvert\mathrm{Re}\,Y\rvert$ for real orbitals) for $p_z$, $p_x$, and $d_{z^2}$ with $\theta\in[0,\pi]$, $\phi\in[0,2\pi)$, so the ring for $m=\pm1$ and the $d_{z^2}$ collar are seen in 3D.
- [Intuition] Explain the node counting: $Y_{\ell m}$ has $\ell-\lvert m\rvert$ nodal cones in $\theta$ and $\lvert m\rvert$ nodal planes for the real combinations, totalling $\ell$ angular nodes; point at the nodal cone of $d_{z^2}$ at $\cos^2\theta=1/3$ ($54.7^\circ$) in Fig. 9.2.
- [Structure] The callout "Orientation in the source" is source commentary; shorten it or move it to a footnote so it does not distract from the physics.
- [Simplify] Replace the Unicode labels "p𝓏" and "d𝓏²" in Fig. 9.2 with plain "p_z" and "d_z²" so the labels render consistently with the text.

### N2088

Note: [[09.05 L̂² as the Angular Laplace Operator|09.05 L̂² as the Angular Laplace Operator]]  
Priority: low · Graph: yes · Manim: no

Correct and brief; the centrifugal term is named but not illustrated.

- [Graph] Plot the effective radial potential $V_{\mathrm{eff}}(r)=-1/r+\ell(\ell+1)/(2r^2)$ in atomic units for $\ell=0,1,2$, $r\in[0.2,15]$, to show the centrifugal barrier that keeps $\ell>0$ states away from the origin.
- [Simplify] Add the substitution $u(r)=rR(r)$ and the resulting 1D equation $-\frac{\hbar^2}{2m}u''+[V+\hbar^2\ell(\ell+1)/(2mr^2)]u=Eu$, which is what the hydrogen chapter actually uses.

### N2089

Note: [[09.06 Particle on a Sphere|09.06 Particle on a Sphere]]  
Priority: low · Graph: yes · Manim: no

Correct rotor spectrum and rotational constant $\tilde B=\hbar/(4\pi cI)$; the spectroscopy example would benefit from a number and a picture.

- [Graph] Draw a level diagram of $E_\ell/E_1=\ell(\ell+1)/2$ for $\ell=0..5$ with degeneracies $2\ell+1$, next to a stick spectrum of absorption lines at $\tilde\nu=2\tilde B(\ell+1)$.
- [Example] Add a worked number: for CO, $\tilde B\approx1.93\,\mathrm{cm^{-1}}$ gives line spacing $\approx3.86\,\mathrm{cm^{-1}}$ and a bond length of about $113\,\mathrm{pm}$ from $I=\mu r^2$.
- [Intuition] Explain why the gap between adjacent levels grows linearly, $E_{\ell+1}-E_\ell=\hbar^2(\ell+1)/I$, so the absorption lines are equally spaced.

### N2090

Note: [[09.07 Rotations as Unitary Operators|09.07 Rotations as Unitary Operators]]  
Priority: low · Graph: no · Manim: yes

Correct and compact; the sign convention $(\hat R f)(\mathbf r)=f(R^{-1}\mathbf r)$ behind $Y_{\ell m}(\theta,\phi-\alpha)$ is implicit.

- [Simplify] State the active convention $(\hat R\psi)(\mathbf r)=\psi(R^{-1}\mathbf r)$ explicitly so the reader sees why the rotated harmonic is $Y_{\ell m}(\theta,\phi-\alpha)$ and not $\phi+\alpha$.
- [Example] Give the smallest nontrivial Wigner matrix, $d^{1}_{mm'}(\beta)$ for a rotation about $y$, or at least $d^1_{00}(\beta)=\cos\beta$, to make $D^\ell$ concrete.
- [Manim] Animate a $p_x$ lobe rotated about $z$ by $\alpha$ and show its components $Y_{1,\pm1}$ picking up phases $e^{\mp i\alpha}$, illustrating that $\hat R_z$ is diagonal in $m$.

### N2091

Note: [[09.08 Orbital Angular Momentum Exercises|09.08 Orbital Angular Momentum Exercises]]  
Priority: low · Graph: no · Manim: no

Well-chosen exercises with correct results (checked 3, 5, 7, 8, 10).

- [Simplify] Exercise 9 ("classical rotating sphere") is vague; rephrase as comparing $\cos\theta_{\min}=\ell/\sqrt{\ell(\ell+1)}$ with 1 as $\ell\to\infty$, or give a macroscopic $L$ to estimate $\ell$.

### N2092

Note: [[Orbital angular momentum, rings, and spheres|Orbital angular momentum, rings, and spheres]]  
Priority: high · Graph: yes · Manim: no

The derivations checked are correct (eigenvectors, $\Lambda^2Y_{21}=-6Y_{21}$, hydrogen superposition with $A=1/\sqrt5$, commutators, $\hat L_\pm$ in spherical coordinates), but the note is a long transcription that starts mid-problem, mixes unrelated topics, and has an inconsistent quantity table.

- [Correctness] The physical-quantities table lists $J_x$ as a probability flux with unit $\unit{s^{-1}}$, but the note uses $\hat J_x$ only as a generalized angular momentum component (section "General angular momentum"); also $R,T$ (reflection/transmission) never appear as symbols, while the mass $m$, $m_\ell$, $\hat J$, and $\Lambda^2$ are missing; rebuild the table from the symbols actually used.
- [Correctness] In the "Physics 137 — Midterm 2 review" block, "Its inner product is $\int_a^b\lvert f\rvert^2dx<\infty$, $\langle f\mid g\rangle=\ldots$" labels the square-integrability condition as the inner product; separate the two statements.
- [Structure] The note opens with "For $\lambda=0$, solve $M\mathbf v=0$" without defining $M$ (the rows imply $M=\begin{pmatrix}2&0&-2\\-2i&i&2i\\1&0&-1\end{pmatrix}$); state the matrix and the problem, or move this fragment to a linear-algebra note.
- [Structure] Split off the off-topic sections (quantum dots, oscillator probability, double delta well, Hilbert-space review, bra-ket review) into the notes they belong to, and keep this note on ring, sphere, and angular momentum algebra.
- [Example] The quantum-dot question ("about 20 eV or more") is left unanswered; add the estimate $\Delta E=3\pi^2\hbar^2/(2m_eL^2)=20\,\mathrm{eV}\Rightarrow L\approx0.24\,\mathrm{nm}$, which shows such a dot would be atom-sized.
- [Graph] Replace the image Fig. 43 with a native polar plot $r(\phi)=1+0.4\cos(m\phi)$ (the real part of $\Phi_m$ on the ring) for $m=1,2,3$, adding $m=1.5$ dashed to show that only integer $m$ closes on itself.

### N2093

Note: [[Spatial rotations and the angular momentum generators|Spatial rotations and the angular momentum generators]]  
Priority: high · Graph: no · Manim: yes

Mostly correct group-theory material (generator matrices, dipole selection-rule factorization, tensor decomposition $9=1+3+5$ verified), but it has a sign error in the key non-commutation example, a wrong quantity table, and unrelated course chatter.

- [Correctness] In "The three-dimensional rotation group", $O_y(\epsilon)O_x(\epsilon)-O_x(\epsilon)O_y(\epsilon)=\epsilon^2[L_x,L_y]$ with the given passive matrices equals $-i\epsilon^2L_z=\begin{pmatrix}0&\epsilon^2&0\\-\epsilon^2&0&0\\0&0&0\end{pmatrix}=O_z(+\epsilon^2)-I_3$, not the displayed $\begin{pmatrix}0&-\epsilon^2&0\\\epsilon^2&0&0\\0&0&0\end{pmatrix}$ and not $O_z(-\epsilon^2)-I_3$.
- [Correctness] The physical-quantities table lists $\mechanical{L}$ both as "Box side length" (m) and as orbital angular momentum, and includes symbols the note never uses ($\mathbf p,\mathbf p'$, $c$, emission coefficients $A,B$); remove them and add the dimensionless generators $L_i,T_a,J_i$, $O$, $D(R)$, $\boldsymbol\omega$, $\ell,m$.
- [Structure] Remove the non-physics remarks ("the following week's discussion is canceled", the 23 versus 27 out of 30 exam-score advice, qualifying exam scope).
- [Simplify] The passive/active switch is confusing; state once at the top which convention each matrix uses, and present the active generators $(J_k)_{ij}=-i\epsilon_{kij}$ with $[J_i,J_j]=i\epsilon_{ijk}J_k$ as the main result.
- [Simplify] The SO(2)–U(1) paragraph uses generator $1$ but writes $e^{i\alpha}$ while the matrix case uses $e^{-i\alpha T}$; use the same sign convention ($e^{-i\alpha}$) for consistency.
- [Manim] Animate a book rotated by $90^\circ$ about $x$ then $y$, and in the opposite order, ending in different orientations; then shrink the angles to show the difference becomes a small rotation about $z$.
