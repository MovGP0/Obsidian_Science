---
title: "Time Evolution"
---

> [!TLDR]
> A time-independent self-adjoint Hamiltonian generates unitary time evolution. Energy eigenstates acquire a global phase, while superpositions can show oscillating measurement probabilities and expectation values.

For a time-independent Hamiltonian, the formal solution of the Schrödinger equation is

$$
\boxed{|\psi(\signal{t})\rangle=\hat U(\signal{t})|\psi(0)\rangle,
\qquad\hat U(\signal{t})=e^{-i\hat H\signal{t}/\mechanical{\hbar}}.}
$$

The **time-evolution operator** is unitary because the Hamiltonian is self-adjoint. It preserves the norm and therefore total probability. The source uses the finite-dimensional term “Hermitian”; for unbounded Hamiltonians, self-adjointness and the operator domain are essential. A time-dependent Hamiltonian generally requires a time-ordered propagator instead of this simple exponential.

## Example — Evolution of an energy eigenstate

If $|\psi(0)\rangle=|n\rangle$ and $\hat H|n\rangle=\energy{E_n}|n\rangle$, then

$$
|\psi(\signal{t})\rangle
=e^{-i\hat H\signal{t}/\mechanical{\hbar}}|n\rangle
=e^{-i\energy{E_n}\signal{t}/\mechanical{\hbar}}|n\rangle.
$$

Only a global phase changes. For example, in the energy eigenbasis,

$$
|c_m(\signal{t})|^2
=|\langle m|\psi(\signal{t})\rangle|^2
=|e^{-i\energy{E_n}\signal{t}/\mechanical{\hbar}}\delta_{mn}|^2
=\delta_{mn}.
$$

All probabilities for a fixed measurement are constant. Energy eigenstates are therefore **stationary states**.

## Example — Rabi oscillations in a two-level system

Consider the effective rotating-frame Hamiltonian

$$
\hat H=\frac{\mechanical{\hbar}\signal{\omega_0}}2\sigma_z
+\frac{\mechanical{\hbar}\signal{\Omega}}2\sigma_x.
$$

It describes a driven two-level atom in the model used by the source. Here $\signal{\omega_0}$ denotes the **detuning** between the laser and transition angular frequencies, while $\signal{\Omega}$ is the coupling parameter.

Diagonalize as in Chapter 7, Exercise 4. The eigenvalues are

$$
\energy{E_\pm}=\pm\frac{\mechanical{\hbar}}2
\sqrt{\signal{\omega_0}^2+\signal{\Omega}^2},
$$

with Hamiltonian eigenstates $|+\rangle$ and $|-\rangle$. Starting from

$$
|\psi(0)\rangle=|\uparrow\rangle=c_+|+\rangle+c_-|-\rangle,
$$

the state evolves as

$$
|\psi(\signal{t})\rangle
=c_+e^{-i\energy{E_+}\signal{t}/\mechanical{\hbar}}|+\rangle
+c_-e^{-i\energy{E_-}\signal{t}/\mechanical{\hbar}}|-\rangle.
$$

The transition probability is

$$
P(\uparrow\to\downarrow,\signal{t})
=\frac{\signal{\Omega}^2}{\signal{\omega_R}^2}
\sin^2\left(\frac{\signal{\omega_R}\signal{t}}2\right),
\qquad
\signal{\omega_R}=\sqrt{\signal{\omega_0}^2+\signal{\Omega}^2}.
$$

The quantity $\signal{\omega_R}$ is the **Rabi angular frequency**. On resonance, $\signal{\omega_0}=0$. For the convention $\signal{\Omega}>0$, $\signal{\omega_R}=\signal{\Omega}$ and

$$
P(\uparrow\to\downarrow,\signal{t})
=\sin^2(\signal{\Omega}\signal{t}/2).
$$

The maximum transition probability is one. These Rabi oscillations are observed in laser spectroscopy.

> [!note]
> The symbols $|+\rangle$ and $|-\rangle$ here label eigenstates of this Hamiltonian. With nonzero detuning, they are not the fixed $\sigma_x$ eigenstates. The rotating-frame Hamiltonian is an effective model of the driven atom; the simple formula assumes its parameters are constant. For negative real coupling, $\signal{\omega_R}=|\signal{\Omega}|$ on resonance.

```graph
bounds: [-0.55, 1.4, 4.45, -0.36]
height: 350
width: 700
axis: false
drag: false
showNavigation: false
keepAspectRatio: false
elements: [
  {type: line, def: [[0, 0], [4.12, 0]], att: {straightFirst: false, straightLast: false, lastArrow: true, fixed: true, strokeColor: '#555555', strokeWidth: 1.2}},
  {type: line, def: [[0, 0], [0, 1.08]], att: {straightFirst: false, straightLast: false, lastArrow: true, fixed: true, strokeColor: '#555555', strokeWidth: 1.2}},
  {type: line, def: [[0, 0.5], [4, 0.5]], att: {straightFirst: false, straightLast: false, fixed: true, strokeColor: '#aaaaaa', strokeWidth: 1, dash: 2}},
  {type: functiongraph, def: [f:cos(PI*x)**2, 0, 4], att: {strokeColor: '#254c97', strokeWidth: 2, fixed: true}},
  {type: functiongraph, def: [f:sin(PI*x)**2, 0, 4], att: {strokeColor: '#bd2c3d', strokeWidth: 2, dash: 2, fixed: true}},
  {type: text, def: [-0.08, 0, '0'], att: {fixed: true, fontSize: 15, anchorX: 'right', anchorY: 'middle'}},
  {type: text, def: [-0.08, 0.5, '0.5'], att: {fixed: true, fontSize: 15, anchorX: 'right', anchorY: 'middle'}},
  {type: text, def: [-0.08, 1, '1'], att: {fixed: true, fontSize: 15, anchorX: 'right', anchorY: 'middle'}},
  {type: text, def: [0, -0.10, '0'], att: {fixed: true, fontSize: 15, anchorX: 'middle', anchorY: 'middle'}},
  {type: text, def: [1, -0.10, '1'], att: {fixed: true, fontSize: 15, anchorX: 'middle', anchorY: 'middle'}},
  {type: text, def: [2, -0.10, '2'], att: {fixed: true, fontSize: 15, anchorX: 'middle', anchorY: 'middle'}},
  {type: text, def: [3, -0.10, '3'], att: {fixed: true, fontSize: 15, anchorX: 'middle', anchorY: 'middle'}},
  {type: text, def: [4, -0.10, '4'], att: {fixed: true, fontSize: 15, anchorX: 'middle', anchorY: 'middle'}},
  {type: text, def: [2, -0.26, 't / (2π/Ω)'], att: {fixed: true, fontSize: 17, anchorX: 'middle', anchorY: 'middle'}},
  {type: text, def: [0, 1.30, 'Probability'], att: {fixed: true, fontSize: 17, anchorX: 'left', anchorY: 'middle'}},
  {type: line, def: [[0.35, 1.14], [0.65, 1.14]], att: {straightFirst: false, straightLast: false, fixed: true, strokeColor: '#254c97', strokeWidth: 2}},
  {type: text, def: [0.73, 1.14, 'P(↑ → ↑)'], att: {fixed: true, fontSize: 16, anchorX: 'left', anchorY: 'middle', strokeColor: '#254c97'}},
  {type: line, def: [[2.35, 1.14], [2.65, 1.14]], att: {straightFirst: false, straightLast: false, fixed: true, strokeColor: '#bd2c3d', strokeWidth: 2, dash: 2}},
  {type: text, def: [2.73, 1.14, 'P(↑ → ↓)'], att: {fixed: true, fontSize: 16, anchorX: 'left', anchorY: 'middle', strokeColor: '#bd2c3d'}}
]
```

**Fig. 11.1** Rabi oscillations on resonance. The survival probability $P(\uparrow\to\uparrow)=\cos^2(\signal{\Omega}\signal{t}/2)$ and transition probability $P(\uparrow\to\downarrow)=\sin^2(\signal{\Omega}\signal{t}/2)$ oscillate in opposite phase and sum to one. The horizontal axis measures time in units of $2\pi/\signal{\Omega}$, so one plotted unit is one probability-oscillation period.

## Example — Evolution of a superposition

Consider two parity eigenstates $|1\rangle$ and $|2\rangle$ of a potential symmetric about the origin, with $\energy{E_2}-\energy{E_1}=\mechanical{\hbar}\signal{\omega}$, such as adjacent harmonic-oscillator levels. Let

$$
|\psi(0)\rangle=\frac1{\sqrt2}(|1\rangle+|2\rangle).
$$

The source chooses the phase convention

$$
|\psi(\signal{t})\rangle
=\frac1{\sqrt2}\left(e^{-i\signal{\omega}\signal{t}}|1\rangle
+e^{-2i\signal{\omega}\signal{t}}|2\rangle\right).
$$

This corresponds to choosing $\energy{E_1}=\mechanical{\hbar}\signal{\omega}$ and $\energy{E_2}=2\mechanical{\hbar}\signal{\omega}$. With only the energy gap specified, the same relative evolution holds up to a common global phase.

The energy probabilities are constant: $P(\energy{E_1})=P(\energy{E_2})=1/2$. The position expectation, however, is

$$
\begin{aligned}
\langle\hat x\rangle(\signal{t})
=\frac12\Big(&\langle1|\hat x|1\rangle
+e^{-i\signal{\omega}\signal{t}}\langle1|\hat x|2\rangle\\
&+e^{i\signal{\omega}\signal{t}}\langle2|\hat x|1\rangle
+\langle2|\hat x|2\rangle\Big).
\end{aligned}
$$

The diagonal terms vanish by parity. When the off-diagonal position matrix element is nonzero, the mean position oscillates with angular frequency $\signal{\omega}$, the transition angular frequency.

> [!note]
> The source connects this oscillating mean position with electromagnetic emission. For a charged particle it gives an oscillating mean electric dipole. A full treatment of radiation, including spontaneous emission, also requires coupling to the electromagnetic field; it does not follow from the isolated two-state evolution alone. A nonzero position matrix element requires the appropriate parity selection rule.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{t}$ | $\unit{s}$ | Time | The elapsed time from preparation. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale in evolution phases. |
| $\energy{E_n}$, $\energy{E_+}$, $\energy{E_-}$, $\energy{E_1}$, $\energy{E_2}$ | $\unit{J}$ | Energy | Eigenvalues in the specified evolution examples. |
| $c_m$, $c_+$, $c_-$ | $1$ | State amplitude | The expansion coefficients in an orthonormal energy basis. |
| $\signal{\omega_0}$ | $\unit{s^{-1}}$ | Detuning | The angular-frequency mismatch in the rotating-frame model. |
| $\signal{\Omega}$ | $\unit{s^{-1}}$ | Rabi coupling | The drive coupling, equal to the resonant Rabi angular frequency for positive coupling. |
| $\signal{\omega_R}$ | $\unit{s^{-1}}$ | Rabi angular frequency | The generalized oscillation angular frequency including detuning. |
| $\signal{\omega}$ | $\unit{s^{-1}}$ | Transition angular frequency | The energy gap divided by the reduced Planck constant. |
| $P(\uparrow\to\downarrow)$, $P(\uparrow\to\uparrow)$ | $1$ | Spin probability | The transition and survival probabilities. |
| $P(\energy{E_1})$, $P(\energy{E_2})$ | $1$ | Energy probability | The constant probabilities of the two energy levels. |
| $\langle\hat x\rangle$, $\langle1\vert\hat x\vert2\rangle$ | $\unit{m}$ | Position mean and matrix element | The position quantities responsible for the oscillating mean. |
