---
title: "Ehrenfest’s Theorem"
---

> [!TLDR]
> Ehrenfest’s theorem gives the time derivative of an observable’s expectation. A superposition of two box energy states makes the mean position oscillate at their transition angular frequency.

> [!theorem] Theorem 15.1 | Ehrenfest’s theorem
> For an observable with the required domains and differentiability,
>
> $$
> \frac{d\langle\hat A\rangle}{d\signal{t}}
> =\frac{i}{\mechanical{\hbar}}\langle[\hat H,\hat A]\rangle
> +\left\langle\frac{\partial\hat A}{\partial\signal{t}}\right\rangle.
> $$
>
> The second term vanishes when the observable has no explicit time dependence.

## Proof

Differentiate $\langle\hat A\rangle(\signal{t})=\langle\psi(\signal{t})|\hat A(\signal{t})|\psi(\signal{t})\rangle$:

$$
\frac{d\langle\hat A\rangle}{d\signal{t}}
=\langle\dot\psi|\hat A|\psi\rangle
+\left\langle\psi\left|\frac{\partial\hat A}{\partial\signal{t}}\right|\psi\right\rangle
+\langle\psi|\hat A|\dot\psi\rangle.
$$

The Schrödinger equation and self-adjointness give

$$
|\dot\psi\rangle=-\frac{i}{\mechanical{\hbar}}\hat H|\psi\rangle,
\qquad
\langle\dot\psi|=\frac{i}{\mechanical{\hbar}}\langle\psi|\hat H.
$$

Therefore,

$$
\begin{aligned}
\frac{d\langle\hat A\rangle}{d\signal{t}}
&=\frac{i}{\mechanical{\hbar}}\langle\psi|\hat H\hat A|\psi\rangle
-\frac{i}{\mechanical{\hbar}}\langle\psi|\hat A\hat H|\psi\rangle
+\left\langle\frac{\partial\hat A}{\partial\signal{t}}\right\rangle\\
&=\frac{i}{\mechanical{\hbar}}\langle[\hat H,\hat A]\rangle
+\left\langle\frac{\partial\hat A}{\partial\signal{t}}\right\rangle.
\end{aligned}
$$

The source’s proof displays only the case with no explicit observable time dependence. The derivative term is retained here to prove the full stated theorem. $\square$

## Position and momentum consequences

For $\hat H=\hat p^2/(2\mechanical{m})+\energy{V}(\hat x)$, the commutators from Chapter 10 give

$$
\frac{d\langle\hat x\rangle}{d\signal{t}}
=\frac{i}{\mechanical{\hbar}}\langle[\hat H,\hat x]\rangle
=\frac{\langle\hat p\rangle}{\mechanical{m}}.
\tag{15.1}
$$

$$
\frac{d\langle\hat p\rangle}{d\signal{t}}
=\frac{i}{\mechanical{\hbar}}\langle[\hat H,\hat p]\rangle
=-\langle\energy{V}'(\hat x)\rangle.
\tag{15.2}
$$

These resemble Newton’s equations for the expectation values, with the important qualification

$$
-\langle\energy{V}'(\hat x)\rangle
\ne-\energy{V}'(\langle\hat x\rangle)
\quad\text{in general}.
$$

For potentials of at most quadratic degree, the force is linear and the mean-motion equations close exactly in Newtonian form. More general potentials can admit a localized-packet approximation. Ideal hard walls require separate care with operator domains and boundary forces.

## Example — Oscillating mean position in a box

For the particle in $[0,\mechanical{L}]$,

$$
\energy{E_n}=\frac{n^2\pi^2\mechanical{\hbar}^2}{2\mechanical{m}\mechanical{L}^2}.
$$

Take

$$
|\psi(0)\rangle=\frac1{\sqrt2}(|1\rangle+|2\rangle),
$$

so that

$$
|\psi(\signal{t})\rangle
=\frac1{\sqrt2}\left(e^{-i\energy{E_1}\signal{t}/\mechanical{\hbar}}|1\rangle
+e^{-i\energy{E_2}\signal{t}/\mechanical{\hbar}}|2\rangle\right).
$$

The mean position is

$$
\begin{aligned}
\langle\hat x\rangle(\signal{t})
=&\frac12\langle1|\hat x|1\rangle+\frac12\langle2|\hat x|2\rangle\\
&+\frac12e^{i(\energy{E_1}-\energy{E_2})\signal{t}/\mechanical{\hbar}}
\langle1|\hat x|2\rangle+\text{complex conjugate}.
\end{aligned}
$$

Symmetry gives the diagonal elements $\langle n|\hat x|n\rangle=\mechanical{L}/2$. The off-diagonal element is

$$
\langle1|\hat x|2\rangle
=\frac2{\mechanical{L}}\int_0^{\mechanical{L}}\mechanical{x}
\sin\left(\frac{\pi\mechanical{x}}{\mechanical{L}}\right)
\sin\left(\frac{2\pi\mechanical{x}}{\mechanical{L}}\right)\,d\mechanical{x}.
$$

Use $\sin\alpha\sin\beta=\tfrac12[\cos(\alpha-\beta)-\cos(\alpha+\beta)]$:

$$
\langle1|\hat x|2\rangle
=\frac1{\mechanical{L}}\int_0^{\mechanical{L}}\mechanical{x}
\left[\cos\left(\frac{\pi\mechanical{x}}{\mechanical{L}}\right)
-\cos\left(\frac{3\pi\mechanical{x}}{\mechanical{L}}\right)\right]d\mechanical{x}.
$$

Integration by parts gives

$$
\int_0^{\mechanical{L}}\mechanical{x}
\cos\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)\,d\mechanical{x}
=\frac{\mechanical{L}^2}{n^2\pi^2}[\cos(n\pi)-1]
=\frac{\mechanical{L}^2[(-1)^n-1]}{n^2\pi^2}.
$$

For $n=1$, this is $-2\mechanical{L}^2/\pi^2$; for $n=3$, it is $-2\mechanical{L}^2/(9\pi^2)$. Hence

$$
\begin{aligned}
\langle1|\hat x|2\rangle
&=\frac1{\mechanical{L}}\left(-\frac{2\mechanical{L}^2}{\pi^2}
+\frac{2\mechanical{L}^2}{9\pi^2}\right)\\
&=-\frac{2\mechanical{L}}{\pi^2}\left(1-\frac19\right)
=-\frac{16\mechanical{L}}{9\pi^2}.
\end{aligned}
$$

Therefore,

$$
\boxed{\langle\hat x\rangle(\signal{t})
=\frac{\mechanical{L}}2-\frac{16\mechanical{L}}{9\pi^2}
\cos\left(\frac{(\energy{E_2}-\energy{E_1})\signal{t}}{\mechanical{\hbar}}\right).}
$$

The mean position oscillates with transition angular frequency

$$
\signal{\omega_{12}}
=\frac{\energy{E_2}-\energy{E_1}}{\mechanical{\hbar}}
=\frac{3\pi^2\mechanical{\hbar}}{2\mechanical{m}\mechanical{L}^2}.
$$

```graph
bounds: [-0.85, 0.79, 7.05, 0.18]
height: 390
width: 700
axis: false
drag: false
showNavigation: false
keepAspectRatio: false
elements: [
  {type: line, def: [[0, 0.3], [6.5, 0.3]], att: {straightFirst: false, straightLast: false, lastArrow: true, fixed: true, strokeColor: '#666666', strokeWidth: 1}},
  {type: line, def: [[0, 0.3], [0, 0.73]], att: {straightFirst: false, straightLast: false, lastArrow: true, fixed: true, strokeColor: '#666666', strokeWidth: 1}},
  {type: line, def: [[0, 0.5], [6.2831853072, 0.5]], att: {straightFirst: false, straightLast: false, fixed: true, strokeColor: '#b3bdc4', strokeWidth: 1, dash: 2}},
  {type: functiongraph, def: [f:0.5-(16/(9*PI**2))*cos(3*x), 0, 6.2831853072], att: {fixed: true, strokeColor: '#315aa6', strokeWidth: 2}},
  {type: text, def: [-0.13, 0.3, '0.3'], att: {fixed: true, fontSize: 14, anchorX: 'right', anchorY: 'middle'}},
  {type: text, def: [-0.13, 0.4, '0.4'], att: {fixed: true, fontSize: 14, anchorX: 'right', anchorY: 'middle'}},
  {type: text, def: [-0.13, 0.5, '0.5'], att: {fixed: true, fontSize: 14, anchorX: 'right', anchorY: 'middle'}},
  {type: text, def: [-0.13, 0.6, '0.6'], att: {fixed: true, fontSize: 14, anchorX: 'right', anchorY: 'middle'}},
  {type: text, def: [-0.13, 0.7, '0.7'], att: {fixed: true, fontSize: 14, anchorX: 'right', anchorY: 'middle'}},
  {type: text, def: [-0.10, 0.765, '⟨x⟩/L'], att: {fixed: true, fontSize: 16, anchorX: 'right', anchorY: 'middle'}},
  {type: text, def: [0, 0.275, '0'], att: {fixed: true, fontSize: 15, anchorX: 'middle', anchorY: 'middle'}},
  {type: text, def: [1.5707963268, 0.275, 'π/2'], att: {fixed: true, fontSize: 15, anchorX: 'middle', anchorY: 'middle'}},
  {type: text, def: [3.1415926536, 0.275, 'π'], att: {fixed: true, fontSize: 15, anchorX: 'middle', anchorY: 'middle'}},
  {type: text, def: [4.7123889804, 0.275, '3π/2'], att: {fixed: true, fontSize: 15, anchorX: 'middle', anchorY: 'middle'}},
  {type: text, def: [6.2831853072, 0.275, '2π'], att: {fixed: true, fontSize: 15, anchorX: 'middle', anchorY: 'middle'}},
  {type: text, def: [3.1415926536, 0.215, 't / (ℏ/E₁)'], att: {fixed: true, fontSize: 17, anchorX: 'middle', anchorY: 'middle'}},
  {type: line, def: [[0, 0.715], [2.0943951024, 0.715]], att: {straightFirst: false, straightLast: false, firstArrow: true, lastArrow: true, fixed: true, strokeColor: '#b52d3c', strokeWidth: 1}},
  {type: text, def: [1.0471975512, 0.755, 'T₁₂ = 2π/ω₁₂'], att: {fixed: true, fontSize: 14, anchorX: 'middle', anchorY: 'middle', strokeColor: '#b52d3c'}},
  {type: line, def: [[1.25, 0.3198734513], [1.25, 0.5]], att: {straightFirst: false, straightLast: false, firstArrow: true, lastArrow: true, fixed: true, strokeColor: '#007e9b', strokeWidth: 1}},
  {type: text, def: [1.08, 0.405, '16/(9π²)'], att: {fixed: true, fontSize: 14, anchorX: 'right', anchorY: 'middle', strokeColor: '#007e9b'}}
]
```

**Fig. 15.1** Mean-position oscillation for $(|1\rangle+|2\rangle)/\sqrt2$ in a box of length $\mechanical{L}$. The mean oscillates about $\mechanical{L}/2$ with angular frequency $\signal{\omega_{12}}=(\energy{E_2}-\energy{E_1})/\mechanical{\hbar}$. The horizontal coordinate is $\energy{E_1}\signal{t}/\mechanical{\hbar}$, so the plotted function contains three cycles from $0$ to $2\pi$. The amplitude marker gives the dimensionless ratio $16/(9\pi^2)$; the period label denotes physical time.

For a charged particle in a semiclassical dipole model, this oscillating mean position corresponds to an oscillating electric dipole at the transition frequency.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\langle\hat A\rangle$ | — | Observable mean | The expectation whose time derivative is calculated. |
| $\signal{t}$ | $\unit{s}$ | Time | The time parameter of state evolution. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale in the evolution phases. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The particle mass. |
| $\energy{V}$ | $\unit{J}$ | Potential energy | The position-dependent potential in the mean-motion equations. |
| $-\langle\energy{V}'(\hat x)\rangle$ | $\unit{N}$ | Mean force | The average force in the momentum equation. |
| $\mechanical{x}$, $\langle\hat x\rangle$ | $\unit{m}$ | Position | The particle coordinate and mean position. |
| $\langle\hat p\rangle$ | $\unit{kg\,m\,s^{-1}}$ | Mean momentum | The momentum expectation value. |
| $\mechanical{L}$ | $\unit{m}$ | Box length | The length of the confining interval. |
| $\energy{E_n}$, $\energy{E_1}$, $\energy{E_2}$ | $\unit{J}$ | Energy | The box energy eigenvalues. |
| $\signal{\omega_{12}}$ | $\unit{s^{-1}}$ | Transition angular frequency | The energy gap divided by the reduced Planck constant. |
| $\signal{T_{12}}$ | $\unit{s}$ | Oscillation period | The physical time for one mean-position oscillation. |
