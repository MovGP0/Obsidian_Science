---
title: "Note Improvement Tracker – 02 Physics/01 Classical Mechanics/14 Small Oscillations and Normal Modes"
---

> [!TLDR]
> This note tracks the review of the 17 notes in `02 Physics/01 Classical Mechanics/14 Small Oscillations and Normal Modes`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 1 possible errors or notation conflicts. 1 of them are verified (1 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N1049|N1049]] 14.02 Linearization About an Equilibrium: "$M_{kl}=a_{kl}(q_0)$" uses $a_{kl}$ without defining it. State that $\energy{T}=\tfrac12\sum a_{kl}(q)\dot q_k\dot q_l$ and explain that $a_{kl}(q)$ is frozen at $q_0$ because the correction terms are cubic in small quantities. **Fixed:** Added T=½Σ a_kl(q) q̇_k q̇_l (time-independent constraints) and that a_kl is frozen at q0 since corrections are cubic in small quantities

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N1047 | [[14.00 Small Oscillations and Normal Modes\|14.00 Small Oscillations and Normal Modes]] | Analyzed | low | no | no | [[#N1047\|View]] |
| N1048 | [[14.01 Importance of Normal Modes\|14.01 Importance of Normal Modes]] | Analyzed | low | no | yes | [[#N1048\|View]] |
| N1049 | [[14.02 Linearization About an Equilibrium\|14.02 Linearization About an Equilibrium]] | Analyzed | medium | yes | no | [[#N1049\|View]] |
| N1050 | [[14.03 Eigenvalue Problem\|14.03 Eigenvalue Problem]] | Analyzed | medium | no | no | [[#N1050\|View]] |
| N1051 | [[14.04 Normal Modes\|14.04 Normal Modes]] | Analyzed | medium | no | yes | [[#N1051\|View]] |
| N1052 | [[14.05 Example of Two Coupled Masses\|14.05 Example of Two Coupled Masses]] | Analyzed | medium | yes | yes | [[#N1052\|View]] |
| N1053 | [[14.06 Small Oscillations of a Double Pendulum\|14.06 Small Oscillations of a Double Pendulum]] | Analyzed | high | yes | yes | [[#N1053\|View]] |
| N1054 | [[14.07 Overview of Nonlinear Systems and Chaos\|14.07 Overview of Nonlinear Systems and Chaos]] | Analyzed | high | yes | yes | [[#N1054\|View]] |
| N1055 | [[14.08 Worked Examples of Coupled Systems\|14.08 Worked Examples of Coupled Systems]] | Analyzed | medium | yes | yes | [[#N1055\|View]] |
| N1056 | [[14.09 Oscillator Chains and Waves\|14.09 Oscillator Chains and Waves]] | Analyzed | high | yes | yes | [[#N1056\|View]] |
| N1057 | [[14.10 Simultaneous Diagonalization of M and V\|14.10 Simultaneous Diagonalization of M and V]] | Analyzed | medium | no | yes | [[#N1057\|View]] |
| N1058 | [[14.11 Systems with Infinitely Many Degrees of Freedom\|14.11 Systems with Infinitely Many Degrees of Freedom]] | Analyzed | medium | yes | yes | [[#N1058\|View]] |
| N1059 | [[14.12 Normal Modes in Constrained Systems\|14.12 Normal Modes in Constrained Systems]] | Analyzed | low | no | yes | [[#N1059\|View]] |
| N1060 | [[14.13 Acoustic Spectrum of a Vibrating String\|14.13 Acoustic Spectrum of a Vibrating String]] | Analyzed | medium | yes | yes | [[#N1060\|View]] |
| N1061 | [[14.14 Normal Modes of Rigid-Body Systems\|14.14 Normal Modes of Rigid-Body Systems]] | Analyzed | medium | no | yes | [[#N1061\|View]] |
| N1062 | [[14.15 Resonance in Multimode Systems\|14.15 Resonance in Multimode Systems]] | Analyzed | high | yes | no | [[#N1062\|View]] |
| N1063 | [[14.16 Small Oscillations and Normal Modes Exercises\|14.16 Small Oscillations and Normal Modes Exercises]] | Analyzed | low | no | no | [[#N1063\|View]] |

## Suggestions

### N1047

Note: [[14.00 Small Oscillations and Normal Modes|14.00 Small Oscillations and Normal Modes]]  
Priority: low · Graph: no · Manim: no

A clear chapter hub with an accurate summary.

- [Links] Link the summary bullets to sections 14.02–14.06 and to the chain and chaos notes, so the hub works as navigation.

### N1048

Note: [[14.01 Importance of Normal Modes|14.01 Importance of Normal Modes]]  
Priority: low · Graph: no · Manim: yes

A good motivational overview; the final paragraph is dense compared with the rest.

- [Simplify] Rewrite the last paragraph as a two-step promise ("find the patterns that oscillate at a single frequency; every motion is a mix of them") and leave the matrix equation to 14.03.
- [Manim] Animate a short chain of three coupled masses moving in a messy-looking motion, then split it into its three pure normal modes playing side by side and add them back together.

### N1049

Note: [[14.02 Linearization About an Equilibrium|14.02 Linearization About an Equilibrium]]  
Priority: medium · Graph: yes · Manim: no

The procedure is correct, but $a_{kl}$ is undefined and there is no example of a real potential being linearized.

- [Correctness] "$M_{kl}=a_{kl}(q_0)$" uses $a_{kl}$ without defining it. State that $\energy{T}=\tfrac12\sum a_{kl}(q)\dot q_k\dot q_l$ and explain that $a_{kl}(q)$ is frozen at $q_0$ because the correction terms are cubic in small quantities.
- [Example] Linearize the simple pendulum: $\energy{U}=-\mechanical{m}\mechanical{g}\mechanical{\ell}\cos\theta\approx$ const $+\tfrac12\mechanical{m}\mechanical{g}\mechanical{\ell}\theta^2$, with $M=\mechanical{m}\mechanical{\ell}^2$, $V=\mechanical{m}\mechanical{g}\mechanical{\ell}$, giving $\signal{\omega}^2=\mechanical{g}/\mechanical{\ell}$.
- [Graph] Plot $1-\cos\theta$ and its quadratic approximation $\theta^2/2$ on $\theta\in[-\pi,\pi]$, so the range of validity of the linearization is visible.
- [Intuition] Comment on stability: a negative eigenvalue of $V$ means an exponential runaway (an inverted pendulum), so positive-definite $V$ is what makes small oscillations possible.

### N1050

Note: [[14.03 Eigenvalue Problem|14.03 Eigenvalue Problem]]  
Priority: medium · Graph: no · Manim: no

Correct and concise, but the reality and orthogonality claims are not justified, and the complex-exponential ansatz is not explained.

- [Simplify] Explain the ansatz: the equations are real and linear, so the real part of $\vec u e^{-i\signal{\omega}t}$ is a physical solution, and complex notation turns derivatives into multiplication by $-i\signal{\omega}$.
- [Simplify] Add the two-line proof of $M$-orthogonality: subtract $\vec u_\beta^TV\vec u_\alpha=\signal{\omega}_\alpha^2\vec u_\beta^TM\vec u_\alpha$ from its transpose to get $(\signal{\omega}_\alpha^2-\signal{\omega}_\beta^2)\vec u_\beta^TM\vec u_\alpha=0$.
- [Intuition] Explain that $M^{-1/2}VM^{-1/2}$ is an ordinary symmetric matrix, which is why the familiar results (real eigenvalues, orthogonal eigenvectors) carry over.

### N1051

Note: [[14.04 Normal Modes|14.04 Normal Modes]]  
Priority: medium · Graph: no · Manim: yes

Correct, but the normal-coordinate step is a bare "substitution gives", and the display oddly mixes the eigenvalue equation with the Lagrangian.

- [Simplify] Show the substitution: insert $\vec\eta=\sum_\alpha Q_\alpha\vec u_\alpha$, use $\vec u_\alpha^TM\vec u_\beta=\delta_{\alpha\beta}$ and $\vec u_\alpha^TV\vec u_\beta=\signal{\omega}_\alpha^2\delta_{\alpha\beta}$, and both quadratic forms become diagonal. Remove $V\vec u_\alpha=\signal{\omega}_\alpha^2M\vec u_\alpha$ from the display, or label it as the input used.
- [Simplify] Explain how $A_\alpha$ and $B_\alpha$ follow from initial data: $A_\alpha=\vec u_\alpha^TM\vec\eta(0)$ and $B_\alpha=\vec u_\alpha^TM\dot{\vec\eta}(0)/\signal{\omega}_\alpha$.
- [Manim] Two coupled pendulums: show mode 1 alone, mode 2 alone, then their sum starting with one pendulum displaced, producing beats as energy sloshes between the pendulums.

### N1052

Note: [[14.05 Example of Two Coupled Masses|14.05 Example of Two Coupled Masses]]  
Priority: medium · Graph: yes · Manim: yes

A correct and clear standard example, but it stops before showing a physical initial-value solution such as beats.

- [Example] Solve the initial-value problem $\eta_1(0)=a$, $\eta_2(0)=0$, at rest: $\eta_{1,2}=\tfrac a2(\cos\signal{\omega}_1t\pm\cos\signal{\omega}_2t)$. For weak coupling $\mechanical{k}'\ll\mechanical{k}$ this gives beats with period $2\pi/(\signal{\omega}_2-\signal{\omega}_1)$.
- [Intuition] Add the limiting cases: as $\mechanical{k}'\to0$ the two frequencies merge (independent oscillators), and as $\mechanical{k}'\to\infty$ the antisymmetric mode freezes out.
- [Graph] Plot $\eta_1(t)$ and $\eta_2(t)$ for $\mechanical{m}=\mechanical{k}=1$, $\mechanical{k}'=0.1$, $a=1$, $t\in[0,120]$, showing energy transfer and the beat envelope.
- [Manim] Animate two masses between walls connected by springs: first the in-phase mode, then the out-of-phase mode, then the beat motion from displacing one mass, with the spring lengths visibly changing.

### N1053

Note: [[14.06 Small Oscillations of a Double Pendulum|14.06 Small Oscillations of a Double Pendulum]]  
Priority: high · Graph: yes · Manim: yes

Far too thin: it states only the frequency result, with no matrices, mode shapes, or derivation.

- [Example] Show the linearized matrices for equal masses and lengths, $M=\mechanical{m}\mechanical{\ell}^2\begin{pmatrix}2&1\\1&1\end{pmatrix}$ and $V=\mechanical{m}\mechanical{g}\mechanical{\ell}\begin{pmatrix}2&0\\0&1\end{pmatrix}$, the determinant equation, and how $\signal{\omega}_\pm^2=(\mechanical{g}/\mechanical{\ell})(2\pm\sqrt2)$ follows.
- [Intuition] Give the mode shapes: the slow mode $\signal{\omega}_-$ has $\theta_2=\sqrt2\,\theta_1$ (bobs swing in phase), and the fast mode $\signal{\omega}_+$ has $\theta_2=-\sqrt2\,\theta_1$ (opposite phase). Compare with a single pendulum, $\signal{\omega}^2=\mechanical{g}/\mechanical{\ell}$.
- [Graph] Plot $\theta_1(t)$ and $\theta_2(t)$ for release from $\theta_1=0.1$, $\theta_2=0$ (a mix of both modes) over $t\in[0,40]$ with $\mechanical{g}/\mechanical{\ell}=1$.
- [Manim] Animate the double pendulum in the slow mode, then the fast mode, then a mixed initial condition, showing that the linear superposition looks irregular but stays quasi-periodic. Optionally finish with a large-amplitude run that shows the onset of chaos.

### N1054

Note: [[14.07 Overview of Nonlinear Systems and Chaos|14.07 Overview of Nonlinear Systems and Chaos]]  
Priority: high · Graph: yes · Manim: yes

A correct but list-like survey that states results (elliptic period, KAM, Lyapunov growth, Feigenbaum) without derivation, intuition, or any picture.

- [Intuition] Under "Nonlinear pendulum", explain why the period grows with amplitude: $\sin\theta<\theta$ gives a weaker restoring torque than the linear model, so the bob lingers near the turning points; then give $\signal{T}\simeq\signal{T}_0(1+\theta_0^2/16+\dots)$ and the limit $\signal{T}\to\infty$ as $\theta_0\to\pi$.
- [Graph] Plot $\signal{T}(\theta_0)/\signal{T}_0=(2/\pi)K(\sin(\theta_0/2))$ for $\theta_0\in[0,0.95\pi]$ together with the approximation $1+\theta_0^2/16$, so readers see where the small-angle model fails.
- [Graph] Add a 2D phase portrait of $\energy{H}=p_\theta^2/(2\mechanical{m}\mechanical{\ell}^2)-\mechanical{m}\mechanical{g}\mechanical{\ell}\cos\theta$ (level curves for $\theta\in[-2\pi,2\pi]$) with the separatrix $\energy{E}=\mechanical{m}\mechanical{g}\mechanical{\ell}$ highlighted, to make libration versus rotation concrete.
- [Graph] For "Logistic map", add a bifurcation diagram ($r\in[2.8,4]$, $x$ after transients) marking $r_1=3$, $r_2\simeq3.449$, $r_3\simeq3.544$ so the period-doubling cascade and $\delta$ have a visual referent.
- [Manim] Animate two overlaid double pendulums started $10^{-3}\,\mathrm{rad}$ apart, with a live plot of $\ln\lvert\Delta\vec x(t)\rvert$ rising roughly linearly with slope $\lambda$ before saturating.
- [Simplify] The KAM paragraph is too abstract for this level; add one plain sentence on what an invariant torus is (quasi-periodic motion on a doughnut-shaped surface in phase space) and link to exercise 9 in 14.16.

### N1055

Note: [[14.08 Worked Examples of Coupled Systems|14.08 Worked Examples of Coupled Systems]]  
Priority: medium · Graph: yes · Manim: yes

A clear application list, but the "worked examples" give results without worked steps and the coupled-pendulum section lacks the governing formulas.

- [Example] In "Coupled pendulums and beats", work the example: give $\signal{\omega}_+=\sqrt{\mechanical{g}/\mechanical{\ell}}$, $\signal{\omega}_-=\sqrt{\mechanical{g}/\mechanical{\ell}+2\mechanical{k}/\mechanical{m}}$ and $\theta_1(t)=\theta_0\cos\bigl(\tfrac{\signal{\omega}_-+\signal{\omega}_+}{2}t\bigr)\cos\bigl(\tfrac{\signal{\omega}_--\signal{\omega}_+}{2}t\bigr)$, then explain why the energy-exchange rate is $\signal{\omega}_--\signal{\omega}_+$ (energy follows the squared envelope).
- [Structure] The labels are counterintuitive: $\signal{\omega}_+$ is the lower, symmetric frequency and $\signal{\omega}_-$ the higher one; rename to $\signal{\omega}_s,\signal{\omega}_a$ or state the convention explicitly.
- [Graph] Plot $\theta_1(t)$ and $\theta_2(t)$ for weak coupling ($\signal{\omega}_-/\signal{\omega}_+=1.05$, $t$ over two beat periods) to show the beat envelopes in antiphase.
- [Manim] Animate two pendulums joined by a spring: first show the two normal modes side by side, then start with only the left pendulum displaced and show the amplitude migrating to the right pendulum and back.
- [Example] For the building, show the $N=1$ check ($2\sqrt{\mechanical{k}/\mechanical{m}}\sin(\pi/6)=\sqrt{\mechanical{k}/\mechanical{m}}$) and the large-$N$ estimate $\signal{\omega}_1\approx\pi\sqrt{\mechanical{k}/\mechanical{m}}/(2N+1)$ to make "tall buildings have low fundamentals" quantitative.
- [Intuition] For CO2, describe the three motions (or add a small diagram) and why the symmetric stretch is infrared-inactive (no change of dipole moment), since the table gives only names.

### N1056

Note: [[14.09 Oscillator Chains and Waves|14.09 Oscillator Chains and Waves]]  
Priority: high · Graph: yes · Manim: yes

A compact, correct derivation that omits the allowed wavenumbers, gives no picture of the dispersion curve, and asserts the continuum limit without showing it.

- [Structure] With periodic boundary conditions the allowed wavenumbers are $\signal{q}=2\pi j/(N\mechanical{a})$, $j=0,\dots,N-1$ (as 16.12 states); add this so the count of $N$ modes and the link to exercise 2 in 14.16 are explicit.
- [Graph] Plot $\signal{\omega}(\signal{q})/\sqrt{\mechanical{k}/\mechanical{m}}=2\lvert\sin(\signal{q}\mechanical{a}/2)\rvert$ for $\signal{q}\mechanical{a}\in[-\pi,\pi]$ with the dashed tangent $\lvert\signal{q}\rvert\mechanical{a}$ near the origin and the discrete points for $N=8$, marking the zone edges.
- [Intuition] Explain the zone-edge mode physically: at $\signal{q}=\pi/\mechanical{a}$ neighbors move in exact antiphase, every spring is maximally stretched, so the frequency is maximal and the group velocity $d\signal{\omega}/d\signal{q}$ vanishes (a standing wave).
- [Simplify] In "Continuum limit", show the Taylor step $\eta_{n\pm1}\simeq\eta\pm\mechanical{a}\,\partial_x\eta+\tfrac12\mechanical{a}^2\partial_x^2\eta$ so the reader sees where $\mechanical{a}^2\mechanical{k}/\mechanical{m}$ comes from, and note that $\mechanical{k}\mechanical{a}$ and $\mechanical{m}/\mechanical{a}$ (linear density) stay finite.
- [Manim] Animate a chain of about 16 masses carrying a long-wavelength travelling mode, then a mode near $\signal{q}=\pi/\mechanical{a}$, with a phase marker that slows to zero as the pattern becomes a standing antiphase wave.

### N1057

Note: [[14.10 Simultaneous Diagonalization of M and V|14.10 Simultaneous Diagonalization of M and V]]  
Priority: medium · Graph: no · Manim: yes

A correct but terse algorithm with no motivation for the two-step procedure and no worked example.

- [Intuition] Before step 1, explain why one cannot simply diagonalize $V$: an orthogonal rotation does not keep a non-identity $M$ diagonal, so one first rescales coordinates so the kinetic energy is $\tfrac12\lvert\dot{\vec\xi}\rvert^2$, after which any rotation preserves it.
- [Example] Add a 2x2 worked example, e.g. the equal double pendulum from 15.14 ($M=\mechanical{m}\mechanical{\ell}^2\bigl(\begin{smallmatrix}2&1\\1&1\end{smallmatrix}\bigr)$, $V=\mechanical{m}\mechanical{g}\mechanical{\ell}\,\mathrm{diag}(2,1)$), carrying out both steps and recovering $\signal{\omega}_\pm^2=(\mechanical{g}/\mechanical{\ell})(2\pm\sqrt2)$.
- [Simplify] Mention the practical shortcut, solving $\det(V-\signal{\omega}^2M)=0$ directly, and state that the two-step construction is the proof that real nonnegative $\signal{\omega}^2$ and $M$-orthogonal modes exist.
- [Manim] Show the kinetic ellipse $\dot{\vec\eta}^TM\dot{\vec\eta}=1$ and potential ellipse $\vec\eta^TV\vec\eta=1$ in 2D; animate the stretch $B^{1/2}O^T$ turning the first into a circle, then the rotation aligning the second ellipse with the axes.
- [Structure] The table gives $\vec u_\alpha$ as dimensionless while 14.12 gives mass-normalized vectors the unit $\unit{kg^{-1/2}}$; make the two notes consistent.

### N1058

Note: [[14.11 Systems with Infinitely Many Degrees of Freedom|14.11 Systems with Infinitely Many Degrees of Freedom]]  
Priority: medium · Graph: yes · Manim: yes

Correct string and membrane results, but separation of variables is only named and the "operator replaces matrix" idea is not made concrete.

- [Simplify] Make the analogy explicit: $V\vec u=\signal{\omega}^2M\vec u$ becomes $-\mechanical{T}u''(\mechanical{x})=\signal{\omega}^2\mechanical{\lambda}u(\mechanical{x})$ with $u(0)=u(\mechanical{L})=0$, whose eigenvectors are $\sin(n\pi\mechanical{x}/\mechanical{L})$; link back to the continuum limit in 14.09.
- [Example] For a square membrane, give $\signal{\omega}_{nm}/\signal{\omega}_{11}=\sqrt{(n^2+m^2)/2}$, i.e. $1,1.58,2,2.24,\dots$, showing the inharmonic spectrum and the degeneracy $\signal{\omega}_{12}=\signal{\omega}_{21}$.
- [Graph] Add a 3D surface plot of $\eta_{21}(\mechanical{x},\mechanical{y})$ on the unit square (optionally also $\eta_{11}$), with the nodal line at $\mechanical{x}=\mechanical{L}_x/2$ visible.
- [Manim] Animate the $(1,1)$, $(2,1)$, and $(2,2)$ membrane modes oscillating as 3D surfaces, highlighting the stationary nodal lines.
- [Intuition] In "Electromagnetic waves", add why the spectrum is continuous (no boundaries quantize $\signal{\vec k}$) and contrast with a cavity, where the modes become discrete like the membrane.

### N1059

Note: [[14.12 Normal Modes in Constrained Systems|14.12 Normal Modes in Constrained Systems]]  
Priority: low · Graph: no · Manim: yes

A clean, correct worked example that only lacks the eigenvalue step and the general lesson about zero modes.

- [Example] Show the characteristic polynomial $\det(V-\lambda I)=-\lambda(\lambda-\mechanical{k})(\lambda-3\mechanical{k})$ so the eigenvalues are derived rather than listed.
- [Intuition] State the general rule: an unconstrained continuous symmetry (here free translation) produces a $\signal{\omega}=0$ mode, which disappears in the center-of-mass frame; mention the $3N-5$ count for linear molecules as the 3D analogue.
- [Manim] Animate the three masses performing each mode in turn (common translation, outer masses in antiphase with the center fixed, center against the outer pair), with the springs stretching.
- [Structure] The title promises constrained systems but the example has free ends; retitle (e.g. "Zero-Frequency Modes") or add a contrast with the ends fixed to walls, which removes the zero mode.

### N1060

Note: [[14.13 Acoustic Spectrum of a Vibrating String|14.13 Acoustic Spectrum of a Vibrating String]]  
Priority: medium · Graph: yes · Manim: yes

Correct with a good numeric example, but the general solution, the link between plucking point and timbre, and the energy derivation are missing, and an unrelated callout is included.

- [Structure] The "Analytical mechanics" callout about nonlinear dynamics is unrelated to the string spectrum; move it to 14.07 or remove it here.
- [Example] Add the general solution as a sum of modes and a plucked-string case (pluck at $\mechanical{x}_0$) whose amplitudes scale as $\sin(n\pi\mechanical{x}_0/\mechanical{L})/n^2$, showing why plucking position changes timbre (harmonics with a node at $\mechanical{x}_0$ vanish).
- [Simplify] Derive the mode energy in one line from the maximum kinetic energy $\int_0^{\mechanical{L}}\tfrac12\mechanical{\lambda}(\signal{\omega}_n\mechanical{A}_n)^2\sin^2(n\pi\mechanical{x}/\mechanical{L})\,d\mechanical{x}=\tfrac14\mechanical{\lambda}\mechanical{L}\signal{\omega}_n^2\mechanical{A}_n^2$, and note that orthogonality makes the mode energies add.
- [Graph] Plot the first four mode shapes $\sin(n\pi\mechanical{x}/\mechanical{L})$ on $[0,\mechanical{L}]$, plus a stem plot of relative amplitudes for a string plucked at $\mechanical{L}/5$.
- [Manim] Animate a plucked triangular string as the sum of its first ten modes evolving in time, showing the kink splitting into two travelling kinks.

### N1061

Note: [[14.14 Normal Modes of Rigid-Body Systems|14.14 Normal Modes of Rigid-Body Systems]]  
Priority: medium · Graph: no · Manim: yes

The torsion-oscillator and three-pendulum results are correct, but the note mixes a Cavendish digression with an example that is not a rigid-body system, and derivation steps are missing.

- [Structure] The three-pendulum example uses point bobs, not rigid bodies; replace or supplement it with a genuine rigid-body case (e.g. a rod supported by two springs with translation and rocking modes), or retitle the section.
- [Simplify] Show how $V$ follows from $\energy{U}=\sum_i\mechanical{m}\mechanical{g}\mechanical{\ell}(1-\cos\theta_i)+\tfrac12\mechanical{k}\mechanical{\ell}^2[(\theta_1-\theta_2)^2+(\theta_2-\theta_3)^2]$ and note that the spring part is the matrix of 14.12, so the eigenvectors are the same and each $\signal{\omega}^2$ shifts by $\mechanical{g}/\mechanical{\ell}$; link \[\[14.12 Normal Modes in Constrained Systems\]\].
- [Intuition] Tie the Cavendish paragraph to the normal-mode theme: the measured torsion period gives $\mechanical{\kappa}=\mechanical{I}\signal{\omega}^2$, which calibrates the tiny gravitational torque from the deflection angle.
- [Manim] Animate the three coupled pendulums in each mode, then a superposition starting with one displaced pendulum.

### N1062

Note: [[14.15 Resonance in Multimode Systems|14.15 Resonance in Multimode Systems]]  
Priority: high · Graph: yes · Manim: no

Qualitatively correct but formula-free, so modal participation and per-mode resonance width are asserted rather than shown.

- [Simplify] Add the modal equations of the driven, damped system: $\ddot Q_\alpha+2\signal{\gamma}_\alpha\dot Q_\alpha+\signal{\omega}_\alpha^2Q_\alpha=\vec u_\alpha^T\vec F_0\cos(\signal{\Omega}t)$, so each mode responds like one driven oscillator weighted by the overlap $\vec u_\alpha^T\vec F_0$; this turns "mode selection" into a formula.
- [Example] Work the two-mass, three-spring chain: drive mass 1 and both peaks appear; drive both masses equally and the antisymmetric peak disappears because $\vec u_2^T\vec F_0=0$.
- [Graph] Plot $\lvert\eta_1(\signal{\Omega})\rvert$ for that chain over $\signal{\Omega}\in[0,2.5]\sqrt{\mechanical{k}/\mechanical{m}}$ for two damping values, showing peaks at $1$ and $\sqrt3$ with widths of about $2\signal{\gamma}$.
- [Structure] Once formulas are added, extend the physical-quantities table, which lists only $\signal{\omega}_\alpha$, with $\signal{\gamma}_\alpha$, $\signal{\Omega}$, $\vec F_0$, and $Q_\alpha$.

### N1063

Note: [[14.16 Small Oscillations and Normal Modes Exercises|14.16 Small Oscillations and Normal Modes Exercises]]  
Priority: low · Graph: no · Manim: no

A well-graded exercise list with correct short answers; only minor clarifications would help.

- [Structure] The exercise 11 result uses $\sin^2(\signal{q}\mechanical{a})$, which is right because $\mechanical{a}$ is the nearest-neighbor spacing (unit cell $2\mechanical{a}$); state this in the exercise, since many textbooks write $\sin^2(\signal{q}\mechanical{a}/2)$ with $\mechanical{a}$ the cell length.
- [Structure] In exercise 2, the "four natural frequencies" include a degenerate pair ($j=1,3$); say "four mode frequencies, three distinct".
