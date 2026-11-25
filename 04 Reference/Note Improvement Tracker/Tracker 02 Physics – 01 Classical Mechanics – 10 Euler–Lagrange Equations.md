---
title: "Note Improvement Tracker – 02 Physics/01 Classical Mechanics/10 Euler–Lagrange Equations"
---

> [!TLDR]
> This note tracks the review of the 19 notes in `02 Physics/01 Classical Mechanics/10 Euler–Lagrange Equations`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 6 possible errors or notation conflicts. 6 of them are verified (4 fixed, 2 rejected); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N0983|N0983]] 10.03 Derivation of Lagrange's Equations: Notation is inconsistent with 09.06: here d'Alembert's equation uses $\mechanical{\vec F}_i$, while 09.06 uses $\mechanical{\vec F}_i^{\,\mathrm{act}}$. Use the "act" superscript so that $Q_k$ visibly excludes ideal reactions. **Fixed:** Added the act superscript in the equation and the table row, and noted in the table that ideal reactions are excluded.
- [[#N0986|N0986]] 10.06 Worked Examples of Lagrangians: The oscillating-pivot example mixes coordinate names: it says "Take the $z$ axis upward" but writes the vertical bob coordinate as $\mechanical{y}=\mechanical{z}_0-\mechanical{\ell}\cos\mechanical{\theta}$ with pivot height $z_0$. Use one vertical coordinate name. The "Take the $z$ axis upward" sentence also sits in the sphere example after the energies that already use it. **Fixed:** Bob vertical coordinate renamed y->z (both pendulum cases and table), pivot section now states z upward, and the sphere sentence moved before its energies; equations rechecked and correct.
- [[#N0990|N0990]] 10.10 Lagrangian of a Rigid Body: State that $\theta$ is measured from the upward vertical. With $U=+Mgd\cos\theta$, $L=T_{\mathrm{rot}}-Mgd\cos\theta$ is only correct for that convention; elsewhere in the chapter $\theta$ is measured from the downward vertical. **Fixed:** Added that the laboratory z axis is vertically upward so theta is the tilt of the symmetry axis from the upward vertical.
- [[#N0994|N0994]] 10.14 Lagrangian and the Galilean Principle of Relativity: The sentence "the velocity derivative of $L$ is therefore linear in velocity up to a constant" misplaces the argument. Rotational symmetry must be used before the boost step, not after, to reach $L=\tfrac12mv^2$. Restate it in the order above. **Rejected:** ^2/2, so the note's order is valid.
- [[#N0997|N0997]] 10.17 Euler–Lagrange Exercises: Exercise 4 writes the natural frequency as $\mechanical{\omega}$, while Exercise 12 uses $\signal{\omega}$ for the same kind of quantity. Pick one semantic group for oscillator angular frequency across the note (Ex 3 and Ex 10 correctly use $\mechanical{\omega}$ for an imposed rotation rate). **Fixed:** Changed Ex 4 omega to \signal{\omega}; table row for \mechanical{\omega} now describes only the imposed rotation rate.
- [[#N0998|N0998]] Generalized coordinates and the Hamiltonian: Macro usage is inconsistent. The angle $\theta$ and $\dot\theta$ are left uncolored in the elastic pendulum and cylindrical sections, while $\mechanical{\ell}$ and $\mechanical{x}$ are colored. The note also uses $\energy{\mathcal L}$ and $\energy{\mathcal H}$, while chapters 9–11 use $\energy{L}$ and $\energy{H}$. Use $\mechanical{\theta}$ and the chapter's $L/H$ symbols. **Rejected:** Style convention of the Kabasares transcription notes (uncolored angles and \mathcal L/\mathcal H listed in its own table, same as sibling transcriptions); not a physics error, and changing ~70 symbols would be a style rewrite.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N0980 | [[10.00 Euler–Lagrange Equations\|10.00 Euler–Lagrange Equations]] | Analyzed | low | no | no | [[#N0980\|View]] |
| N0981 | [[10.01 History of Analytical Mechanics\|10.01 History of Analytical Mechanics]] | Analyzed | low | no | no | [[#N0981\|View]] |
| N0982 | [[10.02 Kinetic Energy in Generalized Coordinates\|10.02 Kinetic Energy in Generalized Coordinates]] | Analyzed | medium | no | no | [[#N0982\|View]] |
| N0983 | [[10.03 Derivation of Lagrange's Equations\|10.03 Derivation of Lagrange's Equations]] | Analyzed | high | no | no | [[#N0983\|View]] |
| N0984 | [[10.04 Lagrangian\|10.04 Lagrangian]] | Analyzed | medium | no | no | [[#N0984\|View]] |
| N0985 | [[10.05 Representative Examples of Lagrangian Mechanics\|10.05 Representative Examples of Lagrangian Mechanics]] | Analyzed | medium | yes | yes | [[#N0985\|View]] |
| N0986 | [[10.06 Worked Examples of Lagrangians\|10.06 Worked Examples of Lagrangians]] | Analyzed | medium | yes | yes | [[#N0986\|View]] |
| N0987 | [[10.07 Cyclic Coordinates and Conjugate Momenta\|10.07 Cyclic Coordinates and Conjugate Momenta]] | Analyzed | low | yes | no | [[#N0987\|View]] |
| N0988 | [[10.08 Equivalent Lagrangians\|10.08 Equivalent Lagrangians]] | Analyzed | low | no | no | [[#N0988\|View]] |
| N0989 | [[10.09 Advantages of the Lagrangian Formulation\|10.09 Advantages of the Lagrangian Formulation]] | Analyzed | low | no | no | [[#N0989\|View]] |
| N0990 | [[10.10 Lagrangian of a Rigid Body\|10.10 Lagrangian of a Rigid Body]] | Analyzed | medium | no | yes | [[#N0990\|View]] |
| N0991 | [[10.11 Inertial Forces in the Lagrangian Formulation\|10.11 Inertial Forces in the Lagrangian Formulation]] | Analyzed | medium | no | yes | [[#N0991\|View]] |
| N0992 | [[10.12 Dissipative Forces and the Rayleigh Dissipation Function\|10.12 Dissipative Forces and the Rayleigh Dissipation Function]] | Analyzed | low | yes | no | [[#N0992\|View]] |
| N0993 | [[10.13 Lagrangian for Systems of Multiple Particles\|10.13 Lagrangian for Systems of Multiple Particles]] | Analyzed | low | no | yes | [[#N0993\|View]] |
| N0994 | [[10.14 Lagrangian and the Galilean Principle of Relativity\|10.14 Lagrangian and the Galilean Principle of Relativity]] | Analyzed | high | no | no | [[#N0994\|View]] |
| N0995 | [[10.15 Lagrangian and Symmetries\|10.15 Lagrangian and Symmetries]] | Analyzed | low | yes | no | [[#N0995\|View]] |
| N0996 | [[10.16 Advanced Examples of Lagrangians for Constrained Systems\|10.16 Advanced Examples of Lagrangians for Constrained Systems]] | Analyzed | medium | yes | yes | [[#N0996\|View]] |
| N0997 | [[10.17 Euler–Lagrange Exercises\|10.17 Euler–Lagrange Exercises]] | Analyzed | low | no | no | [[#N0997\|View]] |
| N0998 | [[Generalized coordinates and the Hamiltonian\|Generalized coordinates and the Hamiltonian]] | Analyzed | high | yes | yes | [[#N0998\|View]] |

## Suggestions

### N0980

Note: [[10.00 Euler–Lagrange Equations|10.00 Euler–Lagrange Equations]]  
Priority: low · Graph: no · Manim: no

A clear chapter hub with accurate formulas.

- [Links] The summary links only 10.02, 10.04, 10.07 and 10.08. Add one-line bullets for 10.03 (derivation), 10.11 (inertial forces), 10.12 (Rayleigh dissipation) and 10.13–10.16.

### N0981

Note: [[10.01 History of Analytical Mechanics|10.01 History of Analytical Mechanics]]  
Priority: low · Graph: no · Manim: no

A short, accurate historical overview, adequate for its purpose.

- [Links] Link to 11.01 (History of the Principle of Least Action), which covers overlapping material in more detail, and consider merging or cross-referencing to avoid duplication.

### N0982

Note: [[10.02 Kinetic Energy in Generalized Coordinates|10.02 Kinetic Energy in Generalized Coordinates]]  
Priority: medium · Graph: no · Manim: no

The decomposition is correct, but the coefficients $a_{kl}$ and $b_k$ are never given and no example shows the three pieces.

- [Simplify] Give the explicit coefficients: $a_{kl}=\sum_im_i\,\partial_{q_k}\vec r_i\cdot\partial_{q_l}\vec r_i$, $b_k=\sum_im_i\,\partial_{q_k}\vec r_i\cdot\partial_t\vec r_i$, and $T_0=\tfrac12\sum_im_i|\partial_t\vec r_i|^2$.
- [Example] Add a short example showing all three terms, such as a bead on a rod rotating at $\omega$ ($T_2=\tfrac12m\dot r^2$, $T_1=0$, $T_0=\tfrac12m\omega^2r^2$) or a pendulum with a horizontally moving pivot (where $T_1\ne0$).
- [Intuition] Add one sentence on why $a_{kl}$ is a "mass metric": it is positive definite, which guarantees that the Euler–Lagrange equations can be solved for $\ddot q$.

### N0983

Note: [[10.03 Derivation of Lagrange's Equations|10.03 Derivation of Lagrange's Equations]]  
Priority: high · Graph: no · Manim: no

The derivation structure is correct, but the central identity is only asserted ("The proof uses …"), and that identity is the conceptual core of the note.

- [Simplify] Write out the identity proof in 3–4 lines: $m\vec a\cdot\partial_k\vec r=\tfrac{d}{dt}(m\vec v\cdot\partial_k\vec r)-m\vec v\cdot\tfrac{d}{dt}\partial_k\vec r$. Then substitute the two lemmas to obtain $\tfrac{d}{dt}\partial_{\dot q_k}T-\partial_{q_k}T$. The lecture note "Generalized coordinates and the Hamiltonian" already contains this; reuse it.
- [Simplify] Show the one-line proof of each lemma: $\vec v=\sum_j\partial_j\vec r\,\dot q_j+\partial_t\vec r$, so $\partial\vec v/\partial\dot q_k=\partial\vec r/\partial q_k$ ("cancellation of dots").
- [Correctness] Notation is inconsistent with 09.06: here d'Alembert's equation uses $\mechanical{\vec F}_i$, while 09.06 uses $\mechanical{\vec F}_i^{\,\mathrm{act}}$. Use the "act" superscript so that $Q_k$ visibly excludes ideal reactions.
- [Example] End with a one-coordinate check (e.g. the pendulum with $T=\tfrac12m\ell^2\dot\theta^2$ and $Q_\theta=-mg\ell\sin\theta$) to show that the result reproduces the known equation.

### N0984

Note: [[10.04 Lagrangian|10.04 Lagrangian]]  
Priority: medium · Graph: no · Manim: no

Correct and compact, but it lacks the one-line step from $Q_k=-\partial U/\partial q_k$ to $L=T-U$ and any intuition for why $T-U$.

- [Simplify] Show the step: because $U$ does not depend on $\dot q$, $\partial L/\partial\dot q_k=\partial T/\partial\dot q_k$. Substituting $Q_k=-\partial U/\partial q_k$ into 10.03 then gives the theorem.
- [Example] Add the 1D check $L=\tfrac12m\dot x^2-U(x)$, which gives $m\ddot x=-U'(x)$, confirming that the formalism reproduces Newton.
- [Intuition] Note that $L$ is not unique (link 10.08) and is not an energy. The minus sign makes the trade-off between kinetic and potential energy stationary along the true path (link 11.04).
- [Links] Name the velocity-dependent-potential generalization (link 10.11 Lorentz force) as the case not covered by "$U(q,t)$".

### N0985

Note: [[10.05 Representative Examples of Lagrangian Mechanics|10.05 Representative Examples of Lagrangian Mechanics]]  
Priority: medium · Graph: yes · Manim: yes

The examples are correct, but the double pendulum stops before its equations of motion, and the note never shows the chaotic behavior that makes it worth studying.

- [Example] Write out the two double-pendulum Euler–Lagrange equations, or at least their small-angle linearization. Give the normal-mode frequencies for $m_1=m_2$, $\ell_1=\ell_2$: $\omega^2=(2\mp\sqrt2)g/\ell$.
- [Intuition] For central motion, interpret $-mr\dot\phi^2$ on the left as the centrifugal term and point out that the $\phi$ equation is Kepler's second law.
- [Graph] Plot $\theta_2(t)$ for two double-pendulum runs whose initial angles differ by $10^{-3}$ rad ($\theta_1=\theta_2=120^\circ$, $t\in[0,20]$ s). The divergence shows sensitivity to initial conditions.
- [Manim] Animate the double pendulum from a large initial angle, with the lower bob leaving a fading trace. Optionally run a second, slightly perturbed copy in another color to show divergence.

### N0986

Note: [[10.06 Worked Examples of Lagrangians|10.06 Worked Examples of Lagrangians]]  
Priority: medium · Graph: yes · Manim: yes

The pivot and Kapitza results are correct, but the double-Atwood example is only described, and "Particle on a Sphere" duplicates the spherical pendulum in 09.12.

- [Example] Complete the double Atwood machine: write $T(\dot q_1,\dot q_2)$ and $U$ explicitly and give $\ddot q_1,\ddot q_2$. "Gives $\ddot q$ in terms of gravity and the mass ratios" is not a worked example.
- [Correctness] The oscillating-pivot example mixes coordinate names: it says "Take the $z$ axis upward" but writes the vertical bob coordinate as $\mechanical{y}=\mechanical{z}_0-\mechanical{\ell}\cos\mechanical{\theta}$ with pivot height $z_0$. Use one vertical coordinate name. The "Take the $z$ axis upward" sentence also sits in the sphere example after the energies that already use it.
- [Intuition] Explain the effective-gravity reading of $\ell\ddot\theta+(g+\ddot z_0)\sin\theta=0$: an accelerating pivot behaves like modified gravity $g_{\mathrm{eff}}(t)$. Mention the averaged effective potential behind Kapitza's condition $A^2\Omega^2>2g\ell$.
- [Graph] Plot the Kapitza effective potential $U_{\mathrm{eff}}(\theta)=mg\ell\cos\theta+\tfrac{m A^2\Omega^2}{4}\sin^2\theta$ (inverted convention) for $A^2\Omega^2/(g\ell)=1,2,4$. This shows the minimum appearing at $\theta=0$ once the ratio exceeds 2.
- [Manim] Animate an inverted pendulum on a rapidly vibrating pivot next to an identical one with a fixed pivot. The driven one stays upright while the undriven one falls.
- [Structure] Merge "Particle on a Sphere" with the spherical pendulum in 09.12, or cross-link them, to remove the duplication.

### N0987

Note: [[10.07 Cyclic Coordinates and Conjugate Momenta|10.07 Cyclic Coordinates and Conjugate Momenta]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; it would benefit from showing the reduction to an effective 1D problem and from noting that conjugate momentum is not always mechanical momentum.

- [Simplify] Show the one-line proof: the Euler–Lagrange equation with $\partial L/\partial q_k=0$ gives $dp_k/dt=0$.
- [Intuition] Note that $p_k$ need not equal $m\dot q$. It can be an angular momentum, or include $q\vec A$ in a magnetic field (link 10.11). Its units depend on $q_k$.
- [Graph] Plot the central-motion effective potential $U_{\mathrm{eff}}(r)=-k/r+p_\phi^2/(2mr^2)$ with an energy line $E<0$ that marks the turning points. This illustrates "reduces to one-dimensional motion in $r$".

### N0988

Note: [[10.08 Equivalent Lagrangians|10.08 Equivalent Lagrangians]]  
Priority: low · Graph: no · Manim: no

Correct and concise; one concrete example would help.

- [Example] Add a direct check: for $L'=L+\tfrac{d}{dt}f(q,t)$, show $\tfrac{d}{dt}\partial_{\dot q}(\dot f)-\partial_q\dot f=0$. Give a concrete case such as $L'=\tfrac12m\dot x^2+m g\dot x\,t$ compared with $L=\tfrac12m\dot x^2-mgx$ (they differ by $\tfrac{d}{dt}(mgxt)$).
- [Links] Link to 10.14 and 11.09, where Galilean boosts give exactly such a total-derivative change.

### N0989

Note: [[10.09 Advantages of the Lagrangian Formulation|10.09 Advantages of the Lagrangian Formulation]]  
Priority: low · Graph: no · Manim: no

A short, accurate summary list; it works as a reference note.

- [Structure] Remove or reword the redundant "Analytical Mechanics" callout, which repeats the coordinate-change bullet. Consider adding a "Limitations" bullet: nonholonomic constraints need multipliers, and dissipation needs a Rayleigh function (link 10.12).

### N0990

Note: [[10.10 Lagrangian of a Rigid Body|10.10 Lagrangian of a Rigid Body]]  
Priority: medium · Graph: no · Manim: yes

The Euler-angle formulas are correct, but the note stops at "reduce to an equation in θ" without giving the conserved momenta or the effective potential, and it never says which way θ is measured.

- [Correctness] State that $\theta$ is measured from the upward vertical. With $U=+Mgd\cos\theta$, $L=T_{\mathrm{rot}}-Mgd\cos\theta$ is only correct for that convention; elsewhere in the chapter $\theta$ is measured from the downward vertical.
- [Example] Write $p_\psi=I_3(\dot\psi+\dot\phi\cos\theta)$ and $p_\phi=I_1\dot\phi\sin^2\theta+p_\psi\cos\theta$. Then write the effective 1D energy $E'=\tfrac12I_1\dot\theta^2+U_{\mathrm{eff}}(\theta)$, and mention steady precession and nutation.
- [Simplify] Explain the Euler-angle sequence with a labeled 3-step figure or list. The z–x–z convention is hard to visualize from the text alone.
- [Manim] Animate the Euler-angle composition on a 3D body frame: rotate by $\phi$ about $\hat z$, then by $\theta$ about the line of nodes, then by $\psi$ about the body axis. Then show a heavy top precessing and nodding.

### N0991

Note: [[10.11 Inertial Forces in the Lagrangian Formulation|10.11 Inertial Forces in the Lagrangian Formulation]]  
Priority: medium · Graph: no · Manim: yes

The radial equation and its decomposition are correct, but the note omits the angular equation, which carries the transverse Coriolis force, and asserts the Lorentz-force result without derivation.

- [Example] Add the $\phi$ equation: $\tfrac{d}{dt}[m\rho^2(\dot\phi+\Omega)]=0$, i.e. $\rho\ddot\phi=-2\dot\rho(\dot\phi+\Omega)$. Its term $-2\dot\rho\Omega$ is the familiar sideways Coriolis deflection.
- [Simplify] For the electromagnetic Lagrangian, sketch the $x$-component derivation: $p_x=m\dot x+qA_x$. Then $\tfrac{d}{dt}(qA_x)$ produces $\partial_tA_x+(\vec v\cdot\nabla)A_x$, which combines into $(\vec v\times\vec B)_x$. Alternatively, link a note where this is done.
- [Intuition] Emphasize that the particle is free in the lab: the "forces" arise only because the coordinates rotate. Contrast with the lab-frame Lagrangian, where they are absent.
- [Manim] Animate a free particle moving in a straight line in the lab frame next to the same motion seen in a co-rotating frame (curved path). Label the centrifugal and Coriolis arrows in the rotating view.

### N0992

Note: [[10.12 Dissipative Forces and the Rayleigh Dissipation Function|10.12 Dissipative Forces and the Rayleigh Dissipation Function]]  
Priority: low · Graph: yes · Manim: no

Correct and readable; it lacks the physical meaning of $\mathcal R$ (half the dissipated power) and mixes Cartesian and generalized notation.

- [Intuition] State that $2\mathcal R=\sum b\,\dot q^2$ is the rate at which friction dissipates energy, so $dE/dt=-2\mathcal R$ for a quadratic $\mathcal R$. This explains its units (W).
- [Simplify] The sentence "linear friction $\vec F_r=-b\vec v$ in Cartesian coordinates, use $\mathcal R=\tfrac12\sum_ib_i\dot q_i^2$" mixes Cartesian particles and generalized coordinates. Write $\mathcal R=\tfrac12\sum_ib_i|\vec v_i|^2$ first, then express it in $q$.
- [Graph] Plot $x(t)$ for the damped oscillator with $\omega_0=1$ and $\zeta=0.1,1,2$ (under-, critically and overdamped), $t\in[0,20]$, together with the decaying energy $E(t)$ for $\zeta=0.1$.

### N0993

Note: [[10.13 Lagrangian for Systems of Multiple Particles|10.13 Lagrangian for Systems of Multiple Particles]]  
Priority: low · Graph: no · Manim: yes

Correct, but the center-of-mass separation is stated without the substitution step.

- [Simplify] Show $\vec r_1=\vec R+(m_2/M)\vec r$ and $\vec r_2=\vec R-(m_1/M)\vec r$. Substituting these makes the cross terms cancel, giving $\tfrac12M\dot R^2+\tfrac12\mu\dot r^2$.
- [Intuition] Give limiting cases: $m_2\gg m_1$ gives $\mu\to m_1$ (a fixed Sun), and $m_1=m_2$ gives $\mu=m/2$. Note that "constant velocity" of the CM requires no external forces.
- [Manim] Animate two bodies orbiting their common center of mass on ellipses. Then switch to the equivalent single body of mass $\mu$ orbiting a fixed center on the relative-orbit ellipse.

### N0994

Note: [[10.14 Lagrangian and the Galilean Principle of Relativity|10.14 Lagrangian and the Galilean Principle of Relativity]]  
Priority: high · Graph: no · Manim: no

Landau's argument is compressed into a few sentences that skip the key assumptions (homogeneity, isotropy, so that $L=L(v^2)$) and the logical step that forces $\partial L/\partial v^2$ to be constant.

- [Simplify] Restructure in steps. (1) Homogeneity of space and time means $L$ cannot depend on $\vec r$ or $t$. (2) Isotropy then means $L=L(v^2)$. (3) A boost by $\vec V$ gives $\delta L=2(\partial L/\partial v^2)\vec v\cdot\vec V$. (4) This is a total derivative of a function of $(\vec r,t)$ only if $\partial L/\partial v^2$ is constant, so $L=\tfrac12mv^2$.
- [Correctness] The sentence "the velocity derivative of $L$ is therefore linear in velocity up to a constant" misplaces the argument. Rotational symmetry must be used before the boost step, not after, to reach $L=\tfrac12mv^2$. Restate it in the order above.
- [Intuition] Explain "positive for stability" more precisely: $m>0$ is needed for the action to have a minimum (Landau), equivalently for kinetic energy to be bounded below.
- [Example] Close the loop with a check: for $L=\tfrac12mv^2$, the boost gives $\delta L=m\vec v\cdot\vec V+\tfrac12mV^2=\tfrac{d}{dt}(m\vec r\cdot\vec V+\tfrac12mV^2t)$. Link 11.09.

### N0995

Note: [[10.15 Lagrangian and Symmetries|10.15 Lagrangian and Symmetries]]  
Priority: low · Graph: yes · Manim: no

A clear and correct overview; it overlaps with 10.07, 10.10 and 11.08.

- [Structure] Trim the repeated central-motion and symmetric-top paragraphs (already in 10.07, 10.10 and 10.05) to one line each with links. Keep this note as the symmetry-to-conservation overview.
- [Graph] If the central-motion paragraph stays, add the $U_{\mathrm{eff}}(r)=-k/r+L_z^2/(2mr^2)$ plot with bound and unbound energy levels, shared with 10.07.

### N0996

Note: [[10.16 Advanced Examples of Lagrangians for Constrained Systems|10.16 Advanced Examples of Lagrangians for Constrained Systems]]  
Priority: medium · Graph: yes · Manim: yes

All three results are correct, but the interpretation stops at the equation of motion; equilibria and resonance behavior, the physically interesting parts, are missing.

- [Example] For the rotating inclined guide, give the equilibrium $s^*=g\sin\alpha/(\Omega^2\cos^2\alpha)$. State that it is unstable, since the linearized equation has a positive restoring coefficient $+\Omega^2\cos^2\alpha$.
- [Example] For the horizontally driven pendulum, solve the small-angle driven oscillator: $\ddot X=-A\Omega^2\sin\Omega t$ gives steady state $\theta=\frac{A\Omega^2/\ell}{\omega_0^2-\Omega^2}\sin\Omega t$, with resonance at $\Omega=\sqrt{g/\ell}$.
- [Intuition] For the Atwood machine, add limiting checks ($m_2=0$ gives free fall, $m_1=m_2$ gives no acceleration) and note that tension never appears.
- [Graph] Plot the steady-state amplitude $|\theta_{\max}|/(A/\ell)=\Omega^2/|\omega_0^2-\Omega^2|$ against $\Omega/\omega_0\in[0,3]$, with the resonance asymptote dashed.
- [Manim] Animate the pendulum with a horizontally oscillating pivot near resonance, with the amplitude growing. Optionally add a second panel driven far below resonance, where the bob follows the pivot.

### N0997

Note: [[10.17 Euler–Lagrange Exercises|10.17 Euler–Lagrange Exercises]]  
Priority: low · Graph: no · Manim: no

A good exercise set with correct results; a few results are missing, and the oscillator-frequency macros are inconsistent.

- [Structure] Add results for Exercises 2, 8 and 9. For Ex 9 give the Lagrangian $L=\tfrac12I_1(\dot\theta^2+\dot\phi^2\sin^2\theta)+\tfrac12I_3(\dot\psi+\dot\phi\cos\theta)^2-Mgd\cos\theta$, with cyclic $\phi$ and $\psi$. For Ex 5 give the Lagrangian (link 10.05) rather than only "no cyclic coordinates".
- [Correctness] Exercise 4 writes the natural frequency as $\mechanical{\omega}$, while Exercise 12 uses $\signal{\omega}$ for the same kind of quantity. Pick one semantic group for oscillator angular frequency across the note (Ex 3 and Ex 10 correctly use $\mechanical{\omega}$ for an imposed rotation rate).

### N0998

Note: [[Generalized coordinates and the Hamiltonian|Generalized coordinates and the Hamiltonian]]  
Priority: high · Graph: yes · Manim: yes

The mathematics is correct, but the note is a raw lecture transcription: personal margin notes, handwriting commentary, duplicated Hamiltonian derivations, uncolored θ, and $\mathcal L$/$\mathcal H$ notation inconsistent with the rest of the chapter.

- [Structure] Delete transcription artifacts: "A margin reminder says to ask Fana for Friday’s notes", "The margin shows a rotating object with a rate of 22.0 rev/min…", "The handwritten one-dimensional line omits this minus sign…", "The handwriting repeats the $z$ denominator…", and "The notes call the second identity…".
- [Structure] The sections "Hamiltonian and conservation of energy", "Time derivative of the Lagrangian" and "Hamilton’s equations" each re-derive $dH/dt=-\partial L/\partial t$. Merge them into one derivation followed by the canonical equations.
- [Correctness] Macro usage is inconsistent. The angle $\theta$ and $\dot\theta$ are left uncolored in the elastic pendulum and cylindrical sections, while $\mechanical{\ell}$ and $\mechanical{x}$ are colored. The note also uses $\energy{\mathcal L}$ and $\energy{\mathcal H}$, while chapters 9–11 use $\energy{L}$ and $\energy{H}$. Use $\mechanical{\theta}$ and the chapter's $L/H$ symbols.
- [Example] Extend the free-particle Hamiltonian example to the harmonic oscillator, $H=p^2/2m+\tfrac12kx^2$. Show Hamilton's equations reproducing $m\ddot x=-kx$.
- [Graph] Add a phase-space plot of harmonic-oscillator trajectories $H(x,p)=E$ for $E=0.5,1,2$ (ellipses, $m=k=1$) as level curves, with flow arrows from $\dot x=p/m$, $\dot p=-kx$.
- [Manim] Animate the elastic pendulum swinging and stretching, linked to a moving point on its $(x,\theta)$ trajectory. This shows the energy exchange between the radial and angular modes.
