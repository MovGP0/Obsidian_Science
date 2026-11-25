---
title: "Note Improvement Tracker – 02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/02 Postulates of Quantum Mechanics"
---

> [!TLDR]
> This note tracks the review of the 12 notes in `02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/02 Postulates of Quantum Mechanics`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 3 possible errors or notation conflicts. 3 of them are verified (3 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N2015|N2015]] 02.01 The Quantum State: Symbol clash: $\alpha$ is the real global phase in $e^{i\alpha}$ and also a complex superposition coefficient in $\alpha\lvert\psi_1\rangle+\beta\lvert\psi_2\rangle$. Rename the coefficients, for example $c_1,c_2$. **Fixed:** Renamed the superposition coefficients to c_1,c_2
- [[#N2024|N2024]] Quantum measurement and change-of-basis exercises: The Physical quantities table lists reflection and transmission coefficients $R,T$, which never appear. Replace them with the symbols actually used ($L_x,L_y,L_z$ in units of $\hbar$, $\Omega$, $w$, $P_w$). **Fixed:** Replaced the R,T row with rows for L_x,L_y,L_z (units of hbar), the measured eigenvalue w of Omega, and the outcome probability; operators Omega and P_w are not listed as quantities
- [[#N2025|N2025]] Quantum states, eigenfunctions, and time evolution problems: The Physical quantities table lists reflection and transmission coefficients $R,T$, which are unused. $T$ also means kinetic energy ($H=T+V$), the fall time, and the wave period, and $k$ means the box wave number, the spring constant, the delta shift, and the wave number. Rename the clashing symbols and list the ones used. **Fixed:** Removed R,T row; H=K+V=T+V to H=K+V (twice); wave period renamed T_w; spring constant renamed k_s; delta shift k renamed x_0; box and wave k kept (both wave numbers); added rows for m, x, K, L, k, k_s, sigma_x, p(x), tau(t), g, h, T (fall time), v, lambda, T_w, omega

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2014 | [[02.00 Postulates of Quantum Mechanics\|02.00 Postulates of Quantum Mechanics]] | Analyzed | low | no | no | [[#N2014\|View]] |
| N2015 | [[02.01 The Quantum State\|02.01 The Quantum State]] | Analyzed | low | no | yes | [[#N2015\|View]] |
| N2016 | [[02.02 Observables as Hermitian Operators\|02.02 Observables as Hermitian Operators]] | Analyzed | low | no | no | [[#N2016\|View]] |
| N2017 | [[02.03 Measurement Postulate and the Born Rule\|02.03 Measurement Postulate and the Born Rule]] | Analyzed | low | no | no | [[#N2017\|View]] |
| N2018 | [[02.04 Wave Function Collapse\|02.04 Wave Function Collapse]] | Analyzed | low | no | yes | [[#N2018\|View]] |
| N2019 | [[02.05 Time Evolution\|02.05 Time Evolution]] | Analyzed | low | no | no | [[#N2019\|View]] |
| N2020 | [[02.06 Expectation Value and Standard Deviation\|02.06 Expectation Value and Standard Deviation]] | Analyzed | low | yes | no | [[#N2020\|View]] |
| N2021 | [[02.07 Summary of the Postulates\|02.07 Summary of the Postulates]] | Analyzed | low | no | no | [[#N2021\|View]] |
| N2022 | [[02.08 First Complete Example – Spin ½\|02.08 First Complete Example – Spin ½]] | Analyzed | low | yes | yes | [[#N2022\|View]] |
| N2023 | [[02.09 Postulates of Quantum Mechanics Exercises\|02.09 Postulates of Quantum Mechanics Exercises]] | Analyzed | low | no | no | [[#N2023\|View]] |
| N2024 | [[Quantum measurement and change-of-basis exercises\|Quantum measurement and change-of-basis exercises]] | Analyzed | medium | no | no | [[#N2024\|View]] |
| N2025 | [[Quantum states, eigenfunctions, and time evolution problems\|Quantum states, eigenfunctions, and time evolution problems]] | Analyzed | medium | yes | yes | [[#N2025\|View]] |

## Suggestions

### N2014

Note: [[02.00 Postulates of Quantum Mechanics|02.00 Postulates of Quantum Mechanics]]  
Priority: low · Graph: no · Manim: no

Correct and concise chapter overview.

- [Links] Link each summary bullet to its section note (02.01–02.06) for navigation.

### N2015

Note: [[02.01 The Quantum State|02.01 The Quantum State]]  
Priority: low · Graph: no · Manim: yes

Precise statement of the postulate, but abstract, with no concrete relative-phase example.

- [Correctness] Symbol clash: $\alpha$ is the real global phase in $e^{i\alpha}$ and also a complex superposition coefficient in $\alpha\lvert\psi_1\rangle+\beta\lvert\psi_2\rangle$. Rename the coefficients, for example $c_1,c_2$.
- [Example] Make the relative-phase claim concrete: $(\lvert+z\rangle\pm\lvert-z\rangle)/\sqrt2$ give identical $S_z$ statistics but $P(+x)=1$ versus $0$.
- [Manim] Show a Bloch-sphere vector: multiplying by $e^{i\alpha}$ leaves it fixed, while a relative phase $\beta$ rotates it around the $z$ axis, with a readout of $P(+x)=\cos^2(\beta/2)$.

### N2016

Note: [[02.02 Observables as Hermitian Operators|02.02 Observables as Hermitian Operators]]  
Priority: low · Graph: no · Manim: no

Correct and clear; the operator definitions and commutator are right.

- [Intuition] Motivate $\hat p=-i\hbar\partial_x$ by noting that the de Broglie plane wave $e^{ipx/\hbar}$ is its eigenfunction with eigenvalue $p$.
- [Example] Verify Eq. (2.2) in one line on a test function: $[\hat x,\hat p]\psi=-i\hbar x\psi'+i\hbar(x\psi)'=i\hbar\psi$.

### N2017

Note: [[02.03 Measurement Postulate and the Born Rule|02.03 Measurement Postulate and the Born Rule]]  
Priority: low · Graph: no · Manim: no

Correct and well organized for discrete, degenerate, and continuous cases.

- [Example] Add a small numeric example, for example $\lvert\psi\rangle=\tfrac12\lvert a_1\rangle+\tfrac12\lvert a_2\rangle+\tfrac1{\sqrt2}\lvert a_3\rangle$ giving $1/4,1/4,1/2$, and then the degenerate case $a_1=a_2$ giving $1/2$.
- [Intuition] In the continuous case, note that $|\langle x\mid\psi\rangle|^2$ has units of inverse length, so only $p\,da$ is a probability.

### N2018

Note: [[02.04 Wave Function Collapse|02.04 Wave Function Collapse]]  
Priority: low · Graph: no · Manim: yes

Correct, with a good Stern–Gerlach example that stops just before its most instructive step.

- [Example] Extend the example with a third $S_z$ measurement after the $S_x$ filter, which again gives $\pm\hbar/2$ with probability $1/2$ each. This shows that the earlier $z$ information was erased.
- [Manim] Animate the sequential z–x–z Stern–Gerlach chain: a beam splits, one branch is blocked, the next magnet splits it 50/50, and the final z magnet splits again 50/50.

### N2019

Note: [[02.05 Time Evolution|02.05 Time Evolution]]  
Priority: low · Graph: no · Manim: no

Correct and compact statement of unitary evolution.

- [Example] Contrast the stationary state with a two-level superposition $c_1\lvert E_1\rangle+c_2\lvert E_2\rangle$, whose observable probabilities oscillate at $(E_2-E_1)/\hbar$. This shows that only relative phases evolve measurably.

### N2020

Note: [[02.06 Expectation Value and Standard Deviation|02.06 Expectation Value and Standard Deviation]]  
Priority: low · Graph: yes · Manim: no

Correct worked example; the variance formula $(a_u-a_d)^2\sin^2(2\alpha)/4$ checks out.

- [Graph] Plot $\langle A\rangle$ and $\Delta A$ (for $a_u=1$, $a_d=-1$) against $\alpha\in[0,\pi/2]$, showing the mean sliding from $a_u$ to $a_d$ and the spread peaking at $\pi/4$.
- [Example] Replace the "Source wording" callout with an explicit example: $\hat B=\lvert u\rangle\langle d\rvert+\lvert d\rangle\langle u\rvert$ has $\langle\hat B\rangle=\sin(2\alpha)\cos\phi$, so a single observable can detect $\phi$.

### N2021

Note: [[02.07 Summary of the Postulates|02.07 Summary of the Postulates]]  
Priority: low · Graph: no · Manim: no

Accurate summary table.

- [Links] No change needed. Optionally link each table row to its definition note (02.01–02.05).

### N2022

Note: [[02.08 First Complete Example – Spin ½|02.08 First Complete Example – Spin ½]]  
Priority: low · Graph: yes · Manim: yes

Correct worked example; the energies, phases, and Larmor sign convention are consistent.

- [Structure] The closing paragraph says the example uses all five postulates, including the state update, but no post-measurement state is shown. Add one sentence: after outcome $+\hbar/2$ the state becomes $\lvert+z\rangle$ and stops precessing.
- [Manim] Animate the Bloch vector starting on $+x$ and precessing in the $xy$ plane about $\vec B\parallel z$ at $\omega_L=-\gamma B$, with $\langle S_x\rangle$ and $\langle S_y\rangle$ traced alongside.
- [Graph] Plot $\langle S_x(t)\rangle/(\hbar/2)=\cos\omega_Lt$ and $\langle S_y(t)\rangle/(\hbar/2)=\sin\omega_Lt$ over two periods.
- [Intuition] Add the sign case: for the electron $\gamma<0$, so $\omega_L>0$ and the precession is counterclockwise seen from $+z$.

### N2023

Note: [[02.09 Postulates of Quantum Mechanics Exercises|02.09 Postulates of Quantum Mechanics Exercises]]  
Priority: low · Graph: no · Manim: no

All stated results recompute correctly (normalization, $\Delta A=\sqrt{2/3}$, $5/9$, Rabi-type $P_1(t)$).

- [Example] Add result lines for Exercise 4 (minimum $\Delta A=0$ in any eigenstate; the maximum among equal two-state superpositions is $(\lvert1\rangle+\lvert3\rangle)/\sqrt2$ with $\Delta A=1$) and for the limits in Exercise 11.

### N2024

Note: [[Quantum measurement and change-of-basis exercises|Quantum measurement and change-of-basis exercises]]  
Priority: medium · Graph: no · Manim: no

The calculations for Shankar 4.2.1 are correct ($\Delta L_x=1/\sqrt2$, probabilities 1/4, 1/2, 1/4 and 3/4, 1/3, 2/3), but the text is cluttered and has an unrelated quantity table.

- [Correctness] The Physical quantities table lists reflection and transmission coefficients $R,T$, which never appear. Replace them with the symbols actually used ($L_x,L_y,L_z$ in units of $\hbar$, $\Omega$, $w$, $P_w$).
- [Structure] Part (a) is garbled ("consider $L_z\lvert\psi\rangle=w\lvert\psi\rangle$ ... the notes list the +1 and −1 outcomes"). State the question and the answer: an $L_z$ measurement can give $1,0,-1$.
- [Simplify] Part (d) does not need a linear system or Mathematica: $a=\langle x+\mid\psi\rangle$ is the third component of each $L_x$ eigenvector, giving $1/2,-1/\sqrt2,1/2$ directly.
- [Simplify] Unify the notation $\lvert w,1\rangle,\lvert w,2\rangle,\lvert w_3\rangle$. For the general subspace state, allow complex $\alpha,\beta$ with normalization $\sqrt{|\alpha|^2+|\beta|^2}$.

### N2025

Note: [[Quantum states, eigenfunctions, and time evolution problems|Quantum states, eigenfunctions, and time evolution problems]]  
Priority: medium · Graph: yes · Manim: yes

The worked results are correct (commutator, orthogonality proof, delta integrals, falling-rock density), but the note has broken headings, administrative clutter, and a wrong quantity table.

- [Correctness] The Physical quantities table lists reflection and transmission coefficients $R,T$, which are unused. $T$ also means kinetic energy ($H=T+V$), the fall time, and the wave period, and $k$ means the box wave number, the spring constant, the delta shift, and the wave number. Rename the clashing symbols and list the ones used.
- [Structure] Repair the transcription-artifact headings "##### ) — Operators and eigenfunctions", "##### ) — Representations", "##### ) — Orthogonality", "##### ) — Postulate 2", "##### )", and the stray "**)**".
- [Simplify] In the measurement example, write $c_3=(3i/8)^{1/2}$ as $\sqrt{3/8}\,e^{i\pi/4}$ so that $|c_3|^2=3/8$ is obvious.
- [Graph] Plot the falling-rock density $p(x)=1/(2\sqrt{hx})$ for $h=1$ on $(0,1]$, with a note that its integral is 1 despite the divergence at $x=0$.
- [Manim] Animate $\Psi=\psi(x)e^{-iEt/\hbar}$ as a rotating complex amplitude with constant $|\Psi|^2$, then a two-state superposition whose $|\Psi|^2$ sloshes. This contrasts a stationary state with a non-stationary one.
- [Structure] Drop the administrative remarks (videos due December 7, "three fundamental modes of water", homework topics) and keep the physics.
