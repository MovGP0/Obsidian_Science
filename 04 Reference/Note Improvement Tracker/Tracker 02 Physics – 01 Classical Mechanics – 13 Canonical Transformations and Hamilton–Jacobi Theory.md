---
title: "Note Improvement Tracker – 02 Physics/01 Classical Mechanics/13 Canonical Transformations and Hamilton–Jacobi Theory"
---

> [!TLDR]
> This note tracks the review of the 16 notes in `02 Physics/01 Classical Mechanics/13 Canonical Transformations and Hamilton–Jacobi Theory`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 6 possible errors or notation conflicts. 6 of them are verified (5 fixed, 1 rejected); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N1031|N1031]] 13.00 Canonical Transformations and Hamilton–Jacobi Theory: "a classical starting point for canonical quantization" is misleading: canonical quantization starts from Poisson brackets, while the Hamilton–Jacobi equation is the classical limit underlying wave mechanics and WKB (see 13.09 and 13.12). Rephrase it as "the classical limit of the Schrödinger equation and the basis of semiclassical (WKB) quantization". **Fixed:** Replaced with: HJ equation is the classical limit of the Schrödinger equation and the basis of semiclassical (WKB) quantization
- [[#N1033|N1033]] 13.02 Canonical Transformations: The "if and only if" characterization holds for restricted canonical transformations. A scale change such as $Q=\lambda q$, $P=\mu p$ also preserves the form of Hamilton's equations, with $\energy{K}=\lambda\mu\energy{H}$, but gives $\{Q,P\}=\lambda\mu$. Add a sentence that restricts the statement or mentions the scale factor. **Fixed:** Characterization restricted to transformations without a scale factor; added sentence on Q=λq, P=μp with K=λμH and {Q,P}=λμ (verified)
- [[#N1035|N1035]] 13.04 Examples of Useful Canonical Transformations: Notation clash: the Lagrange points "$L_1,L_2,L_3$" and "$L_4,L_5$" appear in the same paragraph as the angular momentum $\mechanical{L}_z$. Typeset the points as $\mathrm{L}_1,\ldots$ or write "Lagrange points L1–L5" in text. **Fixed:** Lagrange points typeset as \mathrm{L}_1 ... \mathrm{L}_5
- [[#N1037|N1037]] 13.06 Separation of Variables: Phase-macro inconsistency: this note uses $\signal{\varphi}$ for the oscillation phase, while 13.07 uses an uncolored $\phi$ with the same role. Unify them. **Rejected:** Different roles: 13.06 φ is the constant phase offset (=ωβ), 13.07 φ is the running integration angle; no error inside 13.06 and 13.07 is outside scope
- [[#N1040|N1040]] 13.09 Application to the Kepler Problem: Notation clash: $\alpha$ is used both as the potential strength ($-\alpha/\mechanical{r}$) and for the separation constants $\alpha_\theta,\alpha_\phi$ (angular momenta). Rename the separation constants, for example to $\mechanical{L}$ and $\mechanical{L}_z$, which is what they are. **Fixed:** Renamed α_θ to \mechanical{L} and α_φ to \mechanical{L}_z in separated equations and table; also colored p_θ, p_φ with \mechanical{} (issue noted in the 12.08 claim)
- [[#N1043|N1043]] 13.12 WKB Approximation: Notation: the text calls the phase $\energy{S}(q)$ and then says "This is Hamilton's characteristic equation for $\energy{W}(q)$". State that the stationary phase is $\energy{W}$ (with $\energy{S}=\energy{W}-\energy{E}t$), or use one symbol. **Fixed:** Sentence now states the stationary phase S(q) is the characteristic function W(q), full phase W−Et

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N1031 | [[13.00 Canonical Transformations and Hamilton–Jacobi Theory\|13.00 Canonical Transformations and Hamilton–Jacobi Theory]] | Analyzed | low | no | no | [[#N1031\|View]] |
| N1032 | [[13.01 Purpose of Canonical Transformations\|13.01 Purpose of Canonical Transformations]] | Analyzed | medium | no | no | [[#N1032\|View]] |
| N1033 | [[13.02 Canonical Transformations\|13.02 Canonical Transformations]] | Analyzed | medium | yes | no | [[#N1033\|View]] |
| N1034 | [[13.03 Generating Functions\|13.03 Generating Functions]] | Analyzed | medium | no | no | [[#N1034\|View]] |
| N1035 | [[13.04 Examples of Useful Canonical Transformations\|13.04 Examples of Useful Canonical Transformations]] | Analyzed | medium | yes | no | [[#N1035\|View]] |
| N1036 | [[13.05 Hamilton–Jacobi Equation\|13.05 Hamilton–Jacobi Equation]] | Analyzed | medium | yes | yes | [[#N1036\|View]] |
| N1037 | [[13.06 Separation of Variables\|13.06 Separation of Variables]] | Analyzed | medium | no | no | [[#N1037\|View]] |
| N1038 | [[13.07 Worked Example of an Oscillator Using Hamilton–Jacobi Theory\|13.07 Worked Example of an Oscillator Using Hamilton–Jacobi Theory]] | Analyzed | low | yes | no | [[#N1038\|View]] |
| N1039 | [[13.08 Action–Angle Variables\|13.08 Action–Angle Variables]] | Analyzed | high | yes | yes | [[#N1039\|View]] |
| N1040 | [[13.09 Application to the Kepler Problem\|13.09 Application to the Kepler Problem]] | Analyzed | medium | yes | no | [[#N1040\|View]] |
| N1041 | [[13.10 Infinitesimal Canonical Transformations\|13.10 Infinitesimal Canonical Transformations]] | Analyzed | medium | no | yes | [[#N1041\|View]] |
| N1042 | [[13.11 Canonical Transformations and Symplectomorphisms\|13.11 Canonical Transformations and Symplectomorphisms]] | Analyzed | medium | yes | no | [[#N1042\|View]] |
| N1043 | [[13.12 WKB Approximation\|13.12 WKB Approximation]] | Analyzed | medium | yes | no | [[#N1043\|View]] |
| N1044 | [[13.13 Action–Angle Variables for Systems with Multiple Degrees of Freedom\|13.13 Action–Angle Variables for Systems with Multiple Degrees of Freedom]] | Analyzed | medium | yes | yes | [[#N1044\|View]] |
| N1045 | [[13.14 Hamilton–Jacobi Theory for Nonseparable Systems\|13.14 Hamilton–Jacobi Theory for Nonseparable Systems]] | Analyzed | medium | yes | no | [[#N1045\|View]] |
| N1046 | [[13.15 Canonical Transformations and Hamilton–Jacobi Exercises\|13.15 Canonical Transformations and Hamilton–Jacobi Exercises]] | Analyzed | low | no | no | [[#N1046\|View]] |

## Suggestions

### N1031

Note: [[13.00 Canonical Transformations and Hamilton–Jacobi Theory|13.00 Canonical Transformations and Hamilton–Jacobi Theory]]  
Priority: low · Graph: no · Manim: no

A clear chapter hub; one phrasing is misleading.

- [Correctness] "a classical starting point for canonical quantization" is misleading: canonical quantization starts from Poisson brackets, while the Hamilton–Jacobi equation is the classical limit underlying wave mechanics and WKB (see 13.09 and 13.12). Rephrase it as "the classical limit of the Schrödinger equation and the basis of semiclassical (WKB) quantization".
- [Links] Link the summary bullets to the section notes 13.02–13.08.

### N1032

Note: [[13.01 Purpose of Canonical Transformations|13.01 Purpose of Canonical Transformations]]  
Priority: medium · Graph: no · Manim: no

The motivation is right but abstract; one concrete "aha" example of a simplifying transformation would make it land.

- [Example] Show the payoff in miniature: for the oscillator, moving to $(Q,P)$ with $\energy{K}=\signal{\omega}P$ makes the equations $\dot P=0$, $\dot Q=\signal{\omega}$ trivial. Link this to [[13.03 Generating Functions]].
- [Intuition] Contrast with Lagrangian point transformations: in Hamiltonian mechanics, $q$ and $p$ can be mixed, as in $(q,p)\to(p,-q)$. This extra freedom is the reason the method is so powerful.
- [Simplify] Define "symplectic structure" in a few words here, or defer it: "preserves the fundamental Poisson brackets (see 13.02)". The term is currently used before it is explained.

### N1033

Note: [[13.02 Canonical Transformations|13.02 Canonical Transformations]]  
Priority: medium · Graph: yes · Manim: no

Correct but definition-only, with no example and no explanation of why bracket preservation is equivalent to canonicity.

- [Example] Check one transformation explicitly, for example the scaling $Q=\lambda q$, $P=p/\lambda$ (canonical) against $Q=\lambda q$, $P=p$ (not canonical, $\{Q,P\}=\lambda$).
- [Correctness] The "if and only if" characterization holds for restricted canonical transformations. A scale change such as $Q=\lambda q$, $P=\mu p$ also preserves the form of Hamilton's equations, with $\energy{K}=\lambda\mu\energy{H}$, but gives $\{Q,P\}=\lambda\mu$. Add a sentence that restricts the statement or mentions the scale factor.
- [Graph] 2D plot of a unit square in the $(q,p)$ plane and its image under a canonical shear $Q=q$, $P=p+q$ and under a noncanonical map $Q=2q$, $P=p$, showing that area is preserved only in the first case.

### N1034

Note: [[13.03 Generating Functions|13.03 Generating Functions]]  
Priority: medium · Graph: no · Manim: no

The four types are stated correctly and the oscillator example is good, but the derivation of type 1 from the differential identity is only described in words.

- [Simplify] Write out the type 1 derivation: expand $dF_1$ in $dq_k$, $dQ_k$, $dt$ and compare coefficients with $\sum p\,dq-\sum P\,dQ+(\energy{K}-\energy{H})dt$. Show the Legendre step $F_2=F_1+\sum Q_kP_k$ explicitly.
- [Example] In the oscillator example, show the substitution step: invert to $q=\sqrt{2P/(\mechanical{m}\signal{\omega})}\sin Q$ and $p=\sqrt{2\mechanical{m}\signal{\omega}P}\cos Q$, then insert into $\energy{H}$ to get $\signal{\omega}P$, so "Substitution gives" is checkable.
- [Structure] Put the four types in a single comparison table (independent variables, relations, sign pattern) with a mnemonic for the signs. This would be easier to scan than four separate displays.

### N1035

Note: [[13.04 Examples of Useful Canonical Transformations|13.04 Examples of Useful Canonical Transformations]]  
Priority: medium · Graph: yes · Manim: no

Good choice of examples and correct formulas, but the three-body part is dense, and the notation $L_1\ldots L_5$ clashes with angular momentum $\mechanical{L}_z$.

- [Correctness] Notation clash: the Lagrange points "$L_1,L_2,L_3$" and "$L_4,L_5$" appear in the same paragraph as the angular momentum $\mechanical{L}_z$. Typeset the points as $\mathrm{L}_1,\ldots$ or write "Lagrange points L1–L5" in text.
- [Simplify] For the complex variables, show that $\dot a=-i\signal{\omega}a$ follows, so the motion is $a(t)=a_0e^{-i\signal{\omega}t}$, a uniform rotation in the complex plane. This is the main payoff and is currently missing.
- [Graph] 2D contour plot of the effective potential in the rotating frame (restricted three-body, mass ratio $\mu=0.1$), $x,y\in[-1.5,1.5]$, marking $\mathrm{L}_1$–$\mathrm{L}_5$.
- [Intuition] Explain in one sentence why maxima at $\mathrm{L}_4$ and $\mathrm{L}_5$ can be stable: the Coriolis force turns outward drift into circulation around the point.

### N1036

Note: [[13.05 Hamilton–Jacobi Equation|13.05 Hamilton–Jacobi Equation]]  
Priority: medium · Graph: yes · Manim: yes

Logically correct but abstract; the reader is not told what $\energy{S}$ means physically or how $q(t)$ is obtained in practice.

- [Intuition] State that, along the true path, $\energy{S}$ is the action as a function of the endpoint ($d\energy{S}/dt=\energy{L}$, $p=\partial\energy{S}/\partial q$), and that trajectories are orthogonal to the surfaces $\energy{S}=$ const, like rays and wavefronts.
- [Example] Include the free particle inline ($\energy{S}=\alpha q-\alpha^2t/(2\mechanical{m})$, $\beta=q-\alpha t/\mechanical{m}$), showing the complete procedure from the PDE to $q(t)$ in four lines before referring to 13.06–13.07.
- [Simplify] Add a short step list: write the HJ equation, find a complete solution, set $\partial\energy{S}/\partial\alpha_k=\beta_k$, and invert for $q(t)$.
- [Graph] 2D plot for the free particle of the level lines $\energy{S}(q,t)=$ const in the $(q,t)$ plane, together with the straight trajectories $q=\alpha t/\mechanical{m}+\beta$.
- [Manim] Animate wavefronts $\energy{S}=$ const advancing in 2D for a particle in a uniform gravitational field, with trajectory rays drawn perpendicular to the fronts.

### N1037

Note: [[13.06 Separation of Variables|13.06 Separation of Variables]]  
Priority: medium · Graph: no · Manim: no

Correct, but the oscillator example overlaps heavily with 13.07, and the explanation of when and why separation works is missing.

- [Structure] Remove the oscillator example here (13.07 does it in full) and replace it with a genuinely separable multi-coordinate example: the 2D central potential in polar coordinates, with $\energy{W}=\energy{W}_r(r)+\alpha_\phi\phi$.
- [Intuition] Explain the separation logic: if a term depends only on $q_1$ and the rest does not, both parts must equal the same constant. Each separation constant is a conserved quantity, so cyclic coordinates separate trivially.
- [Correctness] Phase-macro inconsistency: this note uses $\signal{\varphi}$ for the oscillation phase, while 13.07 uses an uncolored $\phi$ with the same role. Unify them.

### N1038

Note: [[13.07 Worked Example of an Oscillator Using Hamilton–Jacobi Theory|13.07 Worked Example of an Oscillator Using Hamilton–Jacobi Theory]]  
Priority: low · Graph: yes · Manim: no

A clear, complete worked example; I checked the integral and $\beta=\phi/\signal{\omega}-t$ and both are correct.

- [Simplify] Show the substitution step: $\sqrt{2\mechanical{m}\energy{E}-\mechanical{m}^2\signal{\omega}^2q'^2}\,dq'=(2\energy{E}/\signal{\omega})\cos^2\phi\,d\phi$, and note that $\partial\energy{W}/\partial\energy{E}$ is easiest computed by differentiating under the integral sign, giving $(1/\signal{\omega})\arcsin(q/\mechanical{A})$.
- [Graph] Plot $p=d\energy{W}/dq$ (the upper half-ellipse) for $q\in[-\mechanical{A},\mechanical{A}]$ at a few energies, showing that the derivative of $\energy{W}$ traces the phase-space orbit.

### N1039

Note: [[13.08 Action–Angle Variables|13.08 Action–Angle Variables]]  
Priority: high · Graph: yes · Manim: yes

The statements are correct, but the geometric meaning of $J$ (area/$2\pi$) and the oscillator integral are not shown, and the anharmonic case is vague.

- [Intuition] State that $2\pi J$ is the area enclosed by the phase orbit, and that $\theta$ measures the fraction of the cycle completed. Then $\signal{\omega}=d\energy{E}/dJ$ reads as "energy per unit area added".
- [Example] Compute $J$ for the oscillator explicitly: the ellipse with semi-axes $\sqrt{2\energy{E}/(\mechanical{m}\signal{\omega}^2)}$ and $\sqrt{2\mechanical{m}\energy{E}}$ has area $2\pi\energy{E}/\signal{\omega}$.
- [Example] Make the anharmonic case concrete: for the pendulum, $\signal{\omega}(J)$ decreases with $J$. For the quartic oscillator $\energy{U}=\lambda q^4$, $\energy{E}\propto J^{4/3}$, so $\signal{\omega}\propto J^{1/3}$.
- [Graph] Plot $\energy{E}(J)$ for the harmonic oscillator (a straight line) and the pendulum (bending below the line toward the separatrix) on the same axes, with $\mechanical{m}=\mechanical{\ell}=\mechanical{g}=1$.
- [Manim] Shade the area inside a phase-space ellipse as a point goes around it, labelling area $=2\pi J$. Then morph the ellipse into a horizontal line in $(\theta,J)$ coordinates, where the point moves at constant speed.

### N1040

Note: [[13.09 Application to the Kepler Problem|13.09 Application to the Kepler Problem]]  
Priority: medium · Graph: yes · Manim: no

The separation equations and energy formula are correct, but the symbol $\alpha$ is overloaded and the key step from the actions to $\energy{E}$ is skipped.

- [Correctness] Notation clash: $\alpha$ is used both as the potential strength ($-\alpha/\mechanical{r}$) and for the separation constants $\alpha_\theta,\alpha_\phi$ (angular momenta). Rename the separation constants, for example to $\mechanical{L}$ and $\mechanical{L}_z$, which is what they are.
- [Simplify] Identify the constants physically ($\alpha_\phi=\mechanical{L}_z$, $\alpha_\theta=\mechanical{L}$), and show $J_\phi=\lvert\mechanical{L}_z\rvert$ and $J_\theta=\mechanical{L}-\lvert\mechanical{L}_z\rvert$ before summing. State the radial integral result $J_r=-\mechanical{L}+\alpha\sqrt{\mechanical{\mu}/(2\lvert\energy{E}\rvert)}$ explicitly.
- [Structure] Move the WKB info box to [[13.12 WKB Approximation]] or shorten it to a link; it is unrelated to the Kepler content.
- [Graph] Plot several bound Kepler orbits with the same $\energy{E}$ but different $\mechanical{L}$ (equal semi-major axes, so equal periods), showing that the energy depends only on the sum of the actions.

### N1041

Note: [[13.10 Infinitesimal Canonical Transformations|13.10 Infinitesimal Canonical Transformations]]  
Priority: medium · Graph: no · Manim: yes

Correct and well chosen examples, but the link between the generator and $F_2$ is not shown.

- [Simplify] Derive the generator from $F_2=\sum q_kP_k+\varepsilon G(q,P)$: then $Q_k=q_k+\varepsilon\partial G/\partial p_k$ and $P_k=p_k-\varepsilon\partial G/\partial q_k$ to first order. This explains where the formulas come from.
- [Example] Add the rotation of the momentum, $\delta\mechanical{p}_x=-\varepsilon\mechanical{p}_y$ and $\delta\mechanical{p}_y=\varepsilon\mechanical{p}_x$, to show that $\mechanical{L}_z$ rotates positions and momenta together.
- [Manim] Show a 2D particle with its momentum arrow being pushed by repeated small steps $\varepsilon\{f,G\}$ for $G=\mechanical{p}_x$ (translation) and then $G=\mechanical{L}_z$ (rotation), building the finite transformation from infinitesimal ones.

### N1042

Note: [[13.11 Canonical Transformations and Symplectomorphisms|13.11 Canonical Transformations and Symplectomorphisms]]  
Priority: medium · Graph: yes · Manim: no

The statements are correct but very abstract, with no example of checking $M^TJM=J$.

- [Example] For $n=1$, show that $M^TJM=J$ reduces to $\det M=1$, and check it for the shear $Q=q$, $P=p+q$ and the rotation in 13.15 exercise 6.
- [Intuition] Explain that for $n=1$ symplectic means area preserving, while for $n>1$ it is stronger than volume preserving (the projected areas $\sum dq_k\wedge dp_k$ are preserved). Mention Gromov non-squeezing as the striking consequence.
- [Graph] 2D plot of a phase-space disk and its image under a symplectic shear (an ellipse with equal area), with the Jacobian matrix shown beside it.

### N1043

Note: [[13.12 WKB Approximation|13.12 WKB Approximation]]  
Priority: medium · Graph: yes · Manim: no

Correct and reasonably clear, but the order-$\hbar$ amplitude equation is skipped, and $\energy{S}$ and $\energy{W}$ are used interchangeably.

- [Simplify] Show the order-$\hbar$ equation: it gives $(A^2\energy{S}')'=0$, hence $A\propto1/\sqrt{p}$. Interpret this as conservation of probability current (the particle spends more time where it is slow).
- [Correctness] Notation: the text calls the phase $\energy{S}(q)$ and then says "This is Hamilton's characteristic equation for $\energy{W}(q)$". State that the stationary phase is $\energy{W}$ (with $\energy{S}=\energy{W}-\energy{E}t$), or use one symbol.
- [Intuition] State the validity condition: the local de Broglie wavelength $\lambda=2\pi\hbar/p$ must vary slowly ($\lvert d\lambda/dq\rvert\ll1$), which fails at turning points where $p\to0$.
- [Graph] Plot the exact harmonic-oscillator eigenfunction for $n=10$ against the WKB envelope $\propto1/\sqrt{p(q)}$ on $q\in[-6,6]$ (with $\hbar=\mechanical{m}=\signal{\omega}=1$), showing agreement away from the turning points $\pm\sqrt{21}$.

### N1044

Note: [[13.13 Action–Angle Variables for Systems with Multiple Degrees of Freedom|13.13 Action–Angle Variables for Systems with Multiple Degrees of Freedom]]  
Priority: medium · Graph: yes · Manim: yes

Correct and well qualified, but the resonance discussion is abstract and the Lissajous example has no figure.

- [Graph] Plot Lissajous curves $x=\cos(\signal{\omega}_1t)$, $y=\cos(\signal{\omega}_2t+\pi/4)$ for $\signal{\omega}_2/\signal{\omega}_1=1,\,3/2,\,\sqrt2$ with $t\in[0,100]$, so that the closed and dense cases are visible side by side.
- [Manim] Animate the trajectory on the flat torus $[0,2\pi)^2$ (straight lines wrapping around) next to the corresponding Lissajous figure in configuration space. A rational ratio closes, while for an irrational ratio the line gradually fills the square.
- [Simplify] Give a concrete resonance example: $\signal{\omega}_1=2$, $\signal{\omega}_2=3$ means $3\signal{\omega}_1-2\signal{\omega}_2=0$ with $(m_1,m_2)=(3,-2)$, so the trajectory is a closed curve on $\mathbb T^2$.
- [Links] Link to [[12.09 Integrable Systems and the Liouville–Arnold Theorem]] and to the KAM discussion in [[13.14 Hamilton–Jacobi Theory for Nonseparable Systems]].

### N1045

Note: [[13.14 Hamilton–Jacobi Theory for Nonseparable Systems|13.14 Hamilton–Jacobi Theory for Nonseparable Systems]]  
Priority: medium · Graph: yes · Manim: no

Accurate and carefully qualified, but it never shows a small denominator, so the central idea stays abstract.

- [Example] Show where small denominators come from: a perturbation with Fourier terms $\varepsilon h_{\vec m}(J)e^{i\vec m\cdot\vec\theta}$ gives generating-function coefficients proportional to $\varepsilon h_{\vec m}/(\vec m\cdot\vec\omega)$, which blow up when $\vec m\cdot\vec\omega\approx0$.
- [Graph] Plot a Poincaré section (for example the Hénon–Heiles system at $E=1/12$ and $E=1/6$, or the standard map for $K=0.5$ and $K=1.2$), showing surviving KAM curves and chaotic seas side by side.
- [Simplify] Explain the Lyapunov time comparison in plain words: nearby solar-system trajectories separate by a factor $e$ roughly every $\quantity{10^7}{yr}$, so precise orbital prediction over much longer spans is impossible, even though the planets stay bound.

### N1046

Note: [[13.15 Canonical Transformations and Hamilton–Jacobi Exercises|13.15 Canonical Transformations and Hamilton–Jacobi Exercises]]  
Priority: low · Graph: no · Manim: no

A solid exercise set with correct results; I checked exercises 2, 5, 8, 11, 13, and 14.

- [Structure] Reorder by difficulty (exercises 11–13 are Intermediate, after the Challenge exercises 9–10), and remove the stray blank line between items 13 and 14, which can split the ordered list in some renderers.
