---
title: "Note Improvement Tracker – 02 Physics/01 Classical Mechanics/04 Oscillations"
---

> [!TLDR]
> This note tracks the review of the 20 notes in `02 Physics/01 Classical Mechanics/04 Oscillations`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 8 possible errors or notation conflicts. 8 of them are verified (7 fixed, 1 partly); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N0882|N0882]] 04.03 Energy Balance of the Simple Oscillator: The phase is written $\signal{\phi}$ here but $\signal{\varphi}$ in 04.02. Use one symbol across the chapter. **Fixed:** Changed all \signal{\phi} to \signal{\varphi} (text, equations, table).
- [[#N0884|N0884]] 04.05 Phase Space of the Harmonic Oscillator: "The area of the ellipse stays constant under Hamiltonian flow" mixes up two facts. Each ellipse is invariant because energy is conserved. Liouville's theorem concerns the area of an arbitrary region of initial conditions. Rephrase, for example as "a patch of initial conditions rotates and keeps its area". **Fixed:** Rewrote it: each ellipse maps onto itself because energy is conserved, and a patch of initial conditions rotates and keeps its area (Liouville).
- [[#N0885|N0885]] 04.06 Damped Oscillator: Fig. 4.1 is misleading. The curves start at different amplitudes (1, 1, 0.55) with different initial slopes, and the "overdamped" curve is a single exponential. Redraw all three with the same $\omega_0$ and the same initial conditions $x(0)=1$, $\dot x(0)=0$. For example, with $\omega_0=1$ use $\gamma=0.2$, $\gamma=1$ ($(1+t)e^{-t}$) and $\gamma=2$ (the full two-exponential solution). **Fixed:** Redrew with omega0 = 1, x(0) = 1, xdot(0) = 0: gamma = 0.2 underdamped, (1+t)e^-t critical, and the full two-exponential gamma = 2 solution (ODE and initial conditions checked numerically). Added the parameters to the caption. Not checked in Obsidian reading mode.
- [[#N0895|N0895]] 04.16 Coupled Oscillators with Multiple Degrees of Freedom: "Three or more coupled oscillators exhibit energy transfer between modes" is wrong for this linear chain. The energy in each normal mode is separately conserved. Energy moves between masses, not between modes. Mode-to-mode transfer needs nonlinearity, as in Fermi–Pasta–Ulam. **Fixed:** Changed it to energy transfer between masses, and added that normal-mode energies are constant in a linear chain and that mode-to-mode transfer needs nonlinear coupling.
- [[#N0897|N0897]] Free, damped, and driven oscillator calculations: The damping rate is defined as $\signal{\gamma}=\mechanical{b}/\mechanical{m}$, while 04.06, 04.07 and 04.11 use $\gamma=b/(2m)$. Every formula ($\omega=\sqrt{\omega_0^2-\gamma^2/4}$, $\omega_m=\sqrt{\omega_0^2-\gamma^2/2}$, $e^{-\gamma t/2}$) differs by that factor. Add a prominent callout, or convert to the chapter convention. **Partly:** The note's formulas are internally correct for gamma = b/m (omega and omega_m rechecked), so this is a convention difference, not an error. Added a sentence at the definition that names the b/(2m) convention of 04.06.
- [[#N0897|N0897]] Free, damped, and driven oscillator calculations: Time is written $\mechanical{t}$ in this note but plain $t$ in every other oscillation note. Wave speed is $\mechanical{c}$ here and $\signal{c}$ in 04.16. Align the macros with the semantic-group convention and keep $t$ uncoloured. **Fixed:** Replaced all \mechanical{t} with plain t (including the table row) and \mechanical{c} with \signal{c} (wave-speed relation and table row).
- [[#N0898|N0898]] Small oscillations and complex amplitudes: Several internal links point to the wrong sections. "Simple harmonic motion" cites \[\[#Stability and the quadratic approximation\]\] for the cube potential; the target should be "Small tilt of the cube". "Complex amplitudes" and "Oscillator representations and energy" cite \[\[#Initial conditions for the oscillator\]\] for the amplitude triangle and for the $B_1,B_2$ definitions; those are in "Amplitude and phase form" and "Simple harmonic motion". **Fixed:** Pointed the links to #Small tilt of the cube, #Amplitude and phase form, and #Simple harmonic motion.
- [[#N0898|N0898]] Small oscillations and complex amplitudes: The amplitude is written $\signal{A}$ here but $\mechanical{A}$ in every chapter note (04.02, 04.03). Choose one semantic group for the amplitude. **Fixed:** Replaced all 17 \signal{A} with \mechanical{A} (body and amplitude table row); the table's generic area row also uses \mechanical{A} but area does not occur in the body.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N0879 | [[04.00 Oscillations\|04.00 Oscillations]] | Analyzed | low | no | no | [[#N0879\|View]] |
| N0880 | [[04.01 Oscillations Across Physical Systems\|04.01 Oscillations Across Physical Systems]] | Analyzed | low | yes | no | [[#N0880\|View]] |
| N0881 | [[04.02 Simple Harmonic Oscillator\|04.02 Simple Harmonic Oscillator]] | Analyzed | medium | yes | yes | [[#N0881\|View]] |
| N0882 | [[04.03 Energy Balance of the Simple Oscillator\|04.03 Energy Balance of the Simple Oscillator]] | Analyzed | medium | yes | no | [[#N0882\|View]] |
| N0883 | [[04.04 Harmonic Approximation for Small Oscillations\|04.04 Harmonic Approximation for Small Oscillations]] | Analyzed | medium | yes | no | [[#N0883\|View]] |
| N0884 | [[04.05 Phase Space of the Harmonic Oscillator\|04.05 Phase Space of the Harmonic Oscillator]] | Analyzed | medium | yes | yes | [[#N0884\|View]] |
| N0885 | [[04.06 Damped Oscillator\|04.06 Damped Oscillator]] | Analyzed | medium | yes | no | [[#N0885\|View]] |
| N0886 | [[04.07 Driven Oscillator and Resonance\|04.07 Driven Oscillator and Resonance]] | Analyzed | medium | yes | yes | [[#N0886\|View]] |
| N0887 | [[04.08 Advanced Examples of Oscillators\|04.08 Advanced Examples of Oscillators]] | Analyzed | medium | yes | no | [[#N0887\|View]] |
| N0888 | [[04.09 Simple and Compound Pendulums\|04.09 Simple and Compound Pendulums]] | Analyzed | medium | yes | no | [[#N0888\|View]] |
| N0889 | [[04.10 Superposition of Oscillations\|04.10 Superposition of Oscillations]] | Analyzed | medium | yes | yes | [[#N0889\|View]] |
| N0890 | [[04.11 Frequency Response and Quality Factor\|04.11 Frequency Response and Quality Factor]] | Analyzed | medium | yes | no | [[#N0890\|View]] |
| N0891 | [[04.12 Energy Balance of the Driven Oscillator\|04.12 Energy Balance of the Driven Oscillator]] | Analyzed | medium | yes | no | [[#N0891\|View]] |
| N0892 | [[04.13 Overview of Nonlinear Oscillators\|04.13 Overview of Nonlinear Oscillators]] | Analyzed | medium | yes | no | [[#N0892\|View]] |
| N0893 | [[04.14 Introduction to Coupled Oscillations\|04.14 Introduction to Coupled Oscillations]] | Analyzed | high | yes | yes | [[#N0893\|View]] |
| N0894 | [[04.15 Oscillators in Multiple Dimensions\|04.15 Oscillators in Multiple Dimensions]] | Analyzed | medium | yes | no | [[#N0894\|View]] |
| N0895 | [[04.16 Coupled Oscillators with Multiple Degrees of Freedom\|04.16 Coupled Oscillators with Multiple Degrees of Freedom]] | Analyzed | medium | yes | yes | [[#N0895\|View]] |
| N0896 | [[04.17 Oscillations Exercises\|04.17 Oscillations Exercises]] | Analyzed | low | no | no | [[#N0896\|View]] |
| N0897 | [[Free, damped, and driven oscillator calculations\|Free, damped, and driven oscillator calculations]] | Analyzed | high | yes | no | [[#N0897\|View]] |
| N0898 | [[Small oscillations and complex amplitudes\|Small oscillations and complex amplitudes]] | Analyzed | high | yes | no | [[#N0898\|View]] |

## Suggestions

### N0879

Note: [[04.00 Oscillations|04.00 Oscillations]]  
Priority: low · Graph: no · Manim: no

A clear chapter hub with accurate summary formulas.

- [Links] Add the missing chapter notes to the summary list (04.03 energy balance, 04.05 phase space, 04.11 Q factor, 04.13 nonlinear, 04.14–04.16 coupled), so every section is reachable from the hub.

### N0880

Note: [[04.01 Oscillations Across Physical Systems|04.01 Oscillations Across Physical Systems]]  
Priority: low · Graph: yes · Manim: no

Correct motivational overview; the Taylor argument is short and lacks a concrete picture.

- [Graph] Plot the pendulum potential $1-\cos q$ and its harmonic approximation $q^2/2$ for $q\in[-\pi,\pi]$, and optionally a Morse potential with its parabola. This shows where the harmonic approximation holds and where it fails.
- [Simplify] Say why the linear term is missing ($\energy{U}'(q_0)=0$ at equilibrium) and that the force $-\energy{U}''(q_0)(q-q_0)$ is therefore Hooke's law with $k_{\mathrm{eff}}=\energy{U}''(q_0)$.
- [Intuition] For the "waves on strings, membranes, fluids" item, say that these reduce to a collection of independent harmonic oscillators (normal modes), not to a single oscillator. Link 04.16.

### N0881

Note: [[04.02 Simple Harmonic Oscillator|04.02 Simple Harmonic Oscillator]]  
Priority: medium · Graph: yes · Manim: yes

Correct and well organized, but the step from the complex roots to the real cosine solution is skipped and there is no numerical example.

- [Simplify] Show the step from $C_1e^{i\omega t}+C_2e^{-i\omega t}$ with $C_2=C_1^*$ to $A\cos(\omega t+\varphi)$, or link \[\[Small oscillations and complex amplitudes#Complex amplitudes\]\]. Also note that the quadrant of $\varphi$ follows from the sign of $x(0)$.
- [Graph] Plot $x(t)=A\cos(\omega t+\varphi)$, $\dot x/\omega$ and $\ddot x/\omega^2$ on shared axes for two periods. This shows the quarter-period phase shifts and that acceleration is opposite to displacement.
- [Manim] Animate a point moving uniformly on a circle of radius $A$ next to a horizontal mass–spring system. The mass position equals the point's horizontal projection, and the trace of $x(t)$ unrolls to the right.
- [Example] Add a numerical case, for example $m=\quantity{0.5}{kg}$, $k=\quantity{200}{N/m}$, $x(0)=\quantity{0.03}{m}$, $\dot x(0)=\quantity{0.8}{m/s}$, and compute $A$, $\varphi$, $T$ and $E$.

### N0882

Note: [[04.03 Energy Balance of the Simple Oscillator|04.03 Energy Balance of the Simple Oscillator]]  
Priority: medium · Graph: yes · Manim: no

Correct; the averages and the classical probability density come without the averaging step or the normalization.

- [Simplify] Show $\langle\sin^2\rangle=\langle\cos^2\rangle=1/2$ (they sum to 1 and are equal by symmetry). Derive $P(x)$ explicitly from $v=\omega\sqrt{A^2-x^2}$ and the normalization over a half-period, $\int_{-A}^{A}dx/(\pi\sqrt{A^2-x^2})=1$.
- [Graph] Panel 1: plot $K(t)/E=\sin^2\omega t$ and $U(t)/E=\cos^2\omega t$ over one period, with a dashed line at $1/2$. Panel 2: plot $P(x)A$ against $x/A\in(-1,1)$ to show the divergence at the turning points.
- [Correctness] The phase is written $\signal{\phi}$ here but $\signal{\varphi}$ in 04.02. Use one symbol across the chapter.
- [Intuition] Add one sentence on why $P(x)$ matters later: it is the classical limit that the quantum ground state does not resemble but highly excited states approach.

### N0883

Note: [[04.04 Harmonic Approximation for Small Oscillations|04.04 Harmonic Approximation for Small Oscillations]]  
Priority: medium · Graph: yes · Manim: no

Accurate and concise; the anharmonic period series appears without explanation and there is no non-pendulum example.

- [Graph] Panel 1: plot $1-\cos\theta$ against $\theta^2/2$ for $\theta\in[-\pi,\pi]$. Panel 2: plot $T(\theta_0)/T_0$ (exact elliptic value against the two-term series) for $\theta_0\in[0,170^\circ]$, so the reader sees how far "small angle" goes. The 10% error is near $\theta_0\approx65^\circ$.
- [Example] Add a non-mechanical-spring example of $\omega=\sqrt{U''(x_0)/m}$, for example the Morse potential ($\omega=\sqrt{2U_0/(ma^2)}$, cross-link 03.14 Exercise 9) or a mass between two stretched strings.
- [Simplify] For the amplitude series, say where it comes from (expand the elliptic-integral period, see 04.13) and give a number: at $\theta_0=30^\circ$ the correction is about $1.7\%$.
- [Intuition] Say what happens when $U''(x_0)=0$ (quartic minimum, period depends on amplitude) and when $U''<0$ (exponential runaway, 04.08 inverted pendulum).

### N0884

Note: [[04.05 Phase Space of the Harmonic Oscillator|04.05 Phase Space of the Harmonic Oscillator]]  
Priority: medium · Graph: yes · Manim: yes

Mathematically sound but jumps quickly to action–angle language; the Liouville remark is imprecise.

- [Correctness] "The area of the ellipse stays constant under Hamiltonian flow" mixes up two facts. Each ellipse is invariant because energy is conserved. Liouville's theorem concerns the area of an arbitrary region of initial conditions. Rephrase, for example as "a patch of initial conditions rotates and keeps its area".
- [Graph] Plot the phase portrait in scaled variables $(x,\,p/(m\omega))$ with three energy levels $E,2E,3E$. Add direction arrows (clockwise) and a marked initial point.
- [Manim] Animate a cloud of about 30 initial points in a small square moving under the flow. In scaled coordinates it rotates rigidly, so its area is visibly preserved. Show one point's projection onto the $x$ axis as the time series $x(t)$.
- [Simplify] Before action–angle variables, add one sentence of motivation: $J$ is the ellipse area divided by $2\pi$, and it is the quantity that stays fixed under slow (adiabatic) parameter changes.

### N0885

Note: [[04.06 Damped Oscillator|04.06 Damped Oscillator]]  
Priority: medium · Graph: yes · Manim: no

The physics is correct and clear, but the existing graph compares curves with different initial conditions, and the regimes lack an intuitive explanation.

- [Correctness] Fig. 4.1 is misleading. The curves start at different amplitudes (1, 1, 0.55) with different initial slopes, and the "overdamped" curve is a single exponential. Redraw all three with the same $\omega_0$ and the same initial conditions $x(0)=1$, $\dot x(0)=0$. For example, with $\omega_0=1$ use $\gamma=0.2$, $\gamma=1$ ($(1+t)e^{-t}$) and $\gamma=2$ (the full two-exponential solution).
- [Graph] Overlay the envelope $\pm e^{-\gamma t}$ on the underdamped curve, and add a second plot of energy $E(t)/E_0$ on a log scale to show the decay rate $2\gamma$.
- [Intuition] Explain the three regimes physically by comparing two timescales, the decay time $1/\gamma$ and the oscillation period $2\pi/\omega_0$. Underdamping means many oscillations fit inside one decay time.
- [Simplify] Give the general critically and overdamped solutions with constants set by $x(0)$ and $\dot x(0)$. Note that this chapter uses $\gamma=b/(2m)$ while \[\[Free, damped, and driven oscillator calculations\]\] uses $\gamma=b/m$, and put a warning callout in both notes.

### N0886

Note: [[04.07 Driven Oscillator and Resonance|04.07 Driven Oscillator and Resonance]]  
Priority: medium · Graph: yes · Manim: yes

Correct and fairly complete, but the steady-state amplitude and phase are stated rather than derived, and resonance has no curve.

- [Simplify] Derive $A(\Omega)$ and $\tan\delta$ in a few lines with the complex trial solution $\tilde x=\tilde A e^{i\Omega t}$, so that $\tilde A=(F_0/m)/(\omega_0^2-\Omega^2+2i\gamma\Omega)$. Modulus and argument give both results at once.
- [Graph] Plot $A(\Omega)k/F_0$ against $\Omega/\omega_0\in[0,2]$ for $Q=1,3,10$, and the phase $\delta(\Omega)$ in a second panel. Mark $\Omega_r$ and the $\pi/2$ crossing at $\omega_0$.
- [Manim] Animate the start-up: plot $x(t)$ (transient plus steady state) for drive at $\Omega=\omega_0$ and at $\Omega=1.3\,\omega_0$. A rotating phasor diagram shows the displacement phasor settling at $\delta=\pi/2$ or near $\pi$ behind the force phasor.
- [Intuition] Explain the three limits: $\Omega\ll\omega_0$ (stiffness-controlled, $A\approx F_0/k$, in phase), $\Omega=\omega_0$ (damping-controlled), and $\Omega\gg\omega_0$ (inertia-controlled, $A\approx F_0/(m\Omega^2)$, antiphase).
- [Structure] The final section repeats material from earlier in the note. Merge it into the transient paragraph, and give the zero-damping resonant solution $x=(F_0t/(2m\omega_0))\sin\omega_0t$ explicitly.

### N0887

Note: [[04.08 Advanced Examples of Oscillators|04.08 Advanced Examples of Oscillators]]  
Priority: medium · Graph: yes · Manim: no

Correct, but the Cavendish section is purely descriptive, without the equation that turns the measurement into $G$.

- [Example] Add the Cavendish relations. The torsion constant is $\kappa=4\pi^2I/T^2$ from the period, and torque balance gives $\kappa\theta=2\,GMm\,(L/2)/r^2$, so $G=2\pi^2 L r^2\theta/(MT^2)$ with $I=2m(L/2)^2$. Include typical numbers to show how small $\theta$ is.
- [Graph] Plot $\theta(t)$ for the inverted pendulum with $\theta(0)=0.01$, $\dot\theta(0)=0$ ($\theta=0.01\cosh(t/\tau)$), next to the stable pendulum $\theta=0.01\cos(t/\tau)$, on $t/\tau\in[0,5]$.
- [Intuition] Explain that $\tau$ for the inverted rod has the same form as the period scale of the hanging rod, with the sign of the restoring torque reversed. Mention the practical consequence (balancing a broom needs reaction time $\lesssim\tau\approx0.3\unit{s}$ for $L=\quantity{1}{m}$).

### N0888

Note: [[04.09 Simple and Compound Pendulums|04.09 Simple and Compound Pendulums]]  
Priority: medium · Graph: yes · Manim: no

Correct but very terse; it lacks a worked compound-pendulum example and the reduced-length idea is not developed.

- [Example] Work the uniform rod pivoted at one end: $I=ML^2/3$, $d=L/2$, $T=2\pi\sqrt{2L/(3g)}$, $\ell_{\mathrm{red}}=2L/3$. Compare it with a simple pendulum of the same length.
- [Graph] Using the parallel-axis theorem $I=I_G+Md^2$, plot $T(d)/(2\pi\sqrt{k_G/g})$ against $d/k_G$ for $d\in(0,4k_G]$. The plot shows the minimum at $d=k_G$ and that two pivot distances give the same period (Kater's reversible pendulum).
- [Simplify] Derive the compound-pendulum equation in one line from $\tau=-Mgd\sin\theta$ about the pivot, and say that the simple pendulum is the special case $I=Md^2$.

### N0889

Note: [[04.10 Superposition of Oscillations|04.10 Superposition of Oscillations]]  
Priority: medium · Graph: yes · Manim: yes

Correct formulas without derivations or pictures; the beat-period statement is hard to follow as written.

- [Simplify] Derive the same-frequency sum with phasors: two vectors of lengths $A_1$ and $A_2$ at angle $\varphi$ add by the law of cosines. This makes both $A$ and $\psi$ obvious.
- [Simplify] Rephrase the beats sentence plainly: the loudness pulses at the beat frequency $f_{\mathrm{beat}}=|f_1-f_2|$. Add an example: $440\unit{Hz}$ and $444\unit{Hz}$ give 4 beats per second.
- [Graph] Plot $\cos(\omega_1t)+\cos(\omega_2t)$ with $\omega_1=10$ and $\omega_2=11$ for $t\in[0,4\pi]$, with the dashed envelope $\pm2|\cos(t/2)|$.
- [Manim] Trace Lissajous figures for $x=\cos t$, $y=\cos(rt+\varphi)$ with $r=1$ (ellipse whose shape changes as $\varphi$ sweeps from 0 to $\pi$), $r=2$ and $r=3/2$. Show the figure closing for rational $r$.

### N0890

Note: [[04.11 Frequency Response and Quality Factor|04.11 Frequency Response and Quality Factor]]  
Priority: medium · Graph: yes · Manim: no

Correct, but the bullet definitions of $Q$ are dense, and the bandwidth result is stated without derivation or a figure.

- [Simplify] Lead with the most intuitive definition, $Q\approx2\pi\times$(stored energy)/(energy lost per cycle), or "the number of oscillations in one amplitude decay time divided by $\pi$". Then give the bandwidth form.
- [Graph] Plot the normalized amplitude $A(\Omega)k/F_0$ against $\Omega/\omega_0\in[0.5,1.5]$ for $Q=5,20,100$, with the half-power level $A_{\max}/\sqrt2$ marked and the bandwidth $\Delta\Omega=\omega_0/Q$ annotated.
- [Example] Add one numerical example: a $440\unit{Hz}$ tuning fork with $Q=10^3$ has a bandwidth of about $0.44\unit{Hz}$ and rings for about $Q/\pi\approx300$ cycles, roughly 0.7 s, before its amplitude falls by $1/e$.
- [Structure] Move the phase paragraph next to the phase panel of the 04.07 graph, or link it there, to avoid repeating that note.

### N0891

Note: [[04.12 Energy Balance of the Driven Oscillator|04.12 Energy Balance of the Driven Oscillator]]  
Priority: medium · Graph: yes · Manim: no

Correct; the power formula and the Lorentzian approximation appear without intermediate steps.

- [Simplify] Show both forms of the power. $\langle F\dot x\rangle=\tfrac12F_0\Omega A\sin\delta$ follows from averaging $\cos\Omega t\sin(\Omega t-\delta)$, and $\langle b\dot x^2\rangle=m\gamma\Omega^2A^2$ comes from damping. Then show that they agree using $\sin\delta=2\gamma\Omega A m/F_0$.
- [Graph] Plot $\langle P\rangle/P_{\max}$ against $\Omega/\omega_0\in[0.8,1.2]$ for $\gamma/\omega_0=0.02$ and $0.05$. Overlay the Lorentzian approximation $\gamma^2/((\Omega-\omega_0)^2+\gamma^2)$ and mark the FWHM of $2\gamma$.
- [Example] Make the building example quantitative: with $Q\approx30$, a ground acceleration amplitude of $0.05g$ at 1 Hz gives a static deflection $a/\omega_0^2\approx\quantity{1.2}{mm}$ and a resonant deflection of about $\quantity{3.7}{cm}$.

### N0892

Note: [[04.13 Overview of Nonlinear Oscillators|04.13 Overview of Nonlinear Oscillators]]  
Priority: medium · Graph: yes · Manim: no

Correct and well chosen, but the claims about the Duffing period are not supported by any picture, and the elliptic-integral result has no motivation.

- [Graph] Panel 1: plot the Duffing potential $\tfrac12x^2+\tfrac14\beta x^4$ for $\beta=-0.5,0,+0.5$ on $x\in[-2,2]$. Panel 2: plot $T(\theta_0)/T_0=2K(\sin(\theta_0/2))/\pi$ for $\theta_0\in[0,175^\circ]$ against the series $1+\theta_0^2/16$, with the 60° example marked at 1.073.
- [Simplify] Show where the elliptic integral comes from: energy conservation gives $T=4\int_0^{\theta_0}d\theta/\dot\theta$, and the substitution $\sin(\theta/2)=k\sin u$ turns it into $K(k)$. Three lines are enough.
- [Intuition] Explain the stiffening and softening result: a stiffer spring at large $x$ produces a larger restoring force, so the mass returns sooner and the period is shorter.
- [Links] Link the Duffing first-order frequency shift $\omega\approx\omega_0+3\beta A^2/(8\omega_0)$, either by adding it here or by linking to perturbation-theory notes if they exist.

### N0893

Note: [[04.14 Introduction to Coupled Oscillations|04.14 Introduction to Coupled Oscillations]]  
Priority: high · Graph: yes · Manim: yes

The normal modes are stated without derivation, and the beat behaviour, the most physical part, is only described in words.

- [Simplify] Derive the modes by adding and subtracting the two equations. This gives $\ddot q_\pm+\omega_\pm^2q_\pm=0$ for $q_\pm=x_1\pm x_2$ directly and shows why the coordinates decouple.
- [Example] Give the explicit solution for $x_1(0)=a$, $x_2(0)=0$, both at rest: $x_1=a\cos(\Delta t)\cos(\bar\omega t)$ and $x_2=a\sin(\Delta t)\sin(\bar\omega t)$, with $\bar\omega=(\omega_++\omega_-)/2$ and $\Delta=(\omega_--\omega_+)/2$. The energy swaps completely after $t=\pi/(2\Delta)$.
- [Graph] Plot $x_1(t)$ and $x_2(t)$ for $k'/k=0.1$ over two full exchange cycles, with their envelopes.
- [Manim] Animate two masses between three springs, the middle spring drawn thinner. Start with only mass 1 displaced, and let the motion pass back and forth while bar meters show $E_1$ and $E_2$.
- [Intuition] Explain why the symmetric mode has frequency $\sqrt{k/m}$ (the middle spring is never stretched) and the antisymmetric mode is stiffer (the middle spring is stretched by twice the displacement on each side).

### N0894

Note: [[04.15 Oscillators in Multiple Dimensions|04.15 Oscillators in Multiple Dimensions]]  
Priority: medium · Graph: yes · Manim: no

Correct; the trajectory classification is stated without showing how the phase difference shapes the ellipse.

- [Graph] Plot the isotropic trajectories with $A_x=1$, $A_y=0.6$ and phase difference $\phi_y-\phi_x=0,\pi/4,\pi/2,3\pi/4$ on one set of axes.
- [Simplify] Name the "further conserved quantities": the Fradkin tensor $A_{ij}=(p_ip_j+m^2\omega^2x_ix_j)/(2m)$, or simply the separate energies $E_x$ and $E_y$. Explain why they fix the ellipse orientation.
- [Intuition] Contrast with Kepler. Both potentials give closed ellipses, but here the force centre is at the ellipse centre rather than at a focus. Link to Bertrand's theorem if a note exists.
- [Links] The anisotropic Lissajous paragraph duplicates 04.10. Link there instead of restating it.

### N0895

Note: [[04.16 Coupled Oscillators with Multiple Degrees of Freedom|04.16 Coupled Oscillators with Multiple Degrees of Freedom]]  
Priority: medium · Graph: yes · Manim: yes

Correct eigenvalues and continuum limit, but the opening claim about energy transfer is wrong and the dispersion relation is missing.

- [Correctness] "Three or more coupled oscillators exhibit energy transfer between modes" is wrong for this linear chain. The energy in each normal mode is separately conserved. Energy moves between masses, not between modes. Mode-to-mode transfer needs nonlinearity, as in Fermi–Pasta–Ulam.
- [Simplify] Derive the chain dispersion relation $\omega(q)=2\sqrt{k/m}\,|\sin(qa/2)|$ from the trial solution $\eta_n\propto\sin(nqa)e^{i\omega t}$. Show that the three-mass eigenvalues are this relation sampled at $qa=j\pi/4$. This justifies the word "dispersion" in the TLDR.
- [Graph] Panel 1: plot $\omega/\sqrt{k/m}$ against $qa\in[0,\pi]$, with the three allowed points of the three-mass chain marked and the linear long-wavelength asymptote $\omega=cq$. Panel 2: plot the mode shapes $\sin(jn\pi/4)$ as stem plots for $j=1,2,3$.
- [Manim] Animate the three normal modes of the three-mass chain side by side, each at its own frequency, and then a general superposition that looks irregular.
- [Simplify] Specify the continuum limit: $N\to\infty$ and $a\to0$ with the length $L=(N+1)a$ fixed and the tension $ka$ and density $m/a$ held finite.

### N0896

Note: [[04.17 Oscillations Exercises|04.17 Oscillations Exercises]]  
Priority: low · Graph: no · Manim: no

A well-graded exercise list; all checked results are correct.

- [Structure] Add short results or hints for Exercises 5, 10 and 15, for example the Mathieu instability condition for Exercise 10, and normal modes at $\sqrt{k/m}$ and $\sqrt{3k/m}$ for Exercise 15.

### N0897

Note: [[Free, damped, and driven oscillator calculations|Free, damped, and driven oscillator calculations]]  
Priority: high · Graph: yes · Manim: no

The algebra is correct, but the notation keeps switching and a damping convention conflicts with the chapter notes, which makes this lecture transcription hard to use.

- [Correctness] The damping rate is defined as $\signal{\gamma}=\mechanical{b}/\mechanical{m}$, while 04.06, 04.07 and 04.11 use $\gamma=b/(2m)$. Every formula ($\omega=\sqrt{\omega_0^2-\gamma^2/4}$, $\omega_m=\sqrt{\omega_0^2-\gamma^2/2}$, $e^{-\gamma t/2}$) differs by that factor. Add a prominent callout, or convert to the chapter convention.
- [Simplify] The complex frequency is first written $\signal{p}=\signal{\delta}+j\signal{\eta}$, renamed to $\signal{s}+j\signal{n}$, and $\signal{\delta}$ later becomes the phase lag. Use a single pair, for example $p=\omega_d+i\gamma/2$, from the start.
- [Correctness] Time is written $\mechanical{t}$ in this note but plain $t$ in every other oscillation note. Wave speed is $\mechanical{c}$ here and $\signal{c}$ in 04.16. Align the macros with the semantic-group convention and keep $t$ uncoloured.
- [Structure] Drop the transcription asides (the date discrepancy, the margin note about $c=\lambda f$ and $4\unit{m/s}$), and remove the self-link in "Response when the force is switched on".
- [Graph] Replace the scanned "Resonant buildup" and "Slow modulation and beats" images with native plots. Plot $x_T=C[\cos\omega t-\cos\omega_0t]$ for $\omega=0.9\omega_0$, and $A\sin(\omega_0t)(1-e^{-\gamma t/2})$ for $\gamma=0.1\omega_0$, each with its envelope.

### N0898

Note: [[Small oscillations and complex amplitudes|Small oscillations and complex amplitudes]]  
Priority: high · Graph: yes · Manim: no

Correct calculations buried among unrelated electromagnetism and coordinate-curl scratch work, with several broken internal links and a stability example that never states its conclusion.

- [Correctness] Several internal links point to the wrong sections. "Simple harmonic motion" cites \[\[#Stability and the quadratic approximation\]\] for the cube potential; the target should be "Small tilt of the cube". "Complex amplitudes" and "Oscillator representations and energy" cite \[\[#Initial conditions for the oscillator\]\] for the amplitude triangle and for the $B_1,B_2$ definitions; those are in "Amplitude and phase form" and "Simple harmonic motion".
- [Correctness] The amplitude is written $\signal{A}$ here but $\mechanical{A}$ in every chapter note (04.02, 04.03). Choose one semantic group for the amplitude.
- [Example] Finish the cube-on-cylinder example. $U''(0)=mg(r-b)$, so the upright cube is stable only if $r>b$, that is, if the cylinder radius exceeds half the cube side. This is the physical result, and the note never says it.
- [Structure] Move "Curl in cylindrical coordinates", "Electric circulation and induced emf", "Circular loop and changing flux", "Expanding the cylindrical basis", "Differentiating a vector field in cylindrical coordinates" and "Virtual work and the shortest path" to electromagnetism, vector-calculus or variational notes. Clean the Physical quantities table, which lists $\mechanical{k}$, $\mechanical{b}$, $\mechanical{R}$ and $T$ several times with different meanings and includes projectile and brachistochrone entries.
- [Graph] Plot $U(\theta)/(mg)=(r+b)\cos\theta+r\theta\sin\theta$ for $\theta\in[-1,1]$, with $b=0.5$ and $r=1$ (minimum) against $r=0.3$ (maximum), to show the stability criterion.
