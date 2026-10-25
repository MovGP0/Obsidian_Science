---
title: "Eigenvalues of Differential Operators"
---

> [!TLDR]
> A differential eigenvalue problem combines an operator equation with boundary conditions. For a particle in an infinite well, those conditions give discrete energies proportional to n².

> [!definition] Definition 3.2 — Differential eigenvalue problem
> Given a differential operator $\hat L$ on an interval $[a,b]$, with boundary conditions, the **eigenvalue problem** is
>
> $$
> \hat L\psi(x)=\lambda\psi(x),\qquad\psi(a)=\psi(b)=0,
> $$
>
> or another set of boundary conditions. Values of $\lambda$ for which a nontrivial solution $\psi\ne0$ exists are **eigenvalues**. The corresponding solutions are **eigenfunctions**.

The boundary conditions are essential. They permit only certain values of $\lambda$. **Quantization** follows from the boundary conditions, rather than from the differential equation alone.

> [!note]
> This statement describes the discrete spectrum of the confined problems considered here. A general differential operator can also have a continuous spectrum. The operator domain and the spatial domain are part of the spectral problem.

## Example — Particle in an infinite potential well

Consider the interval $[0,\mechanical{L}]$, with Hamiltonian

$$
\hat H=-\frac{\energy{\hbar}^2}{2\mechanical{m}}
\frac{\mathrm{d}^2}{\mathrm{d}\mechanical{x}^2},
\qquad\signal{\psi}(0)=\signal{\psi}(\mechanical{L})=0.
$$

The equation

$$
-\frac{\energy{\hbar}^2}{2\mechanical{m}}\signal{\psi}''=\energy{E}\signal{\psi}
$$

becomes $\signal{\psi}''=-\signal{k}^2\signal{\psi}$, with $\signal{k}=\sqrt{2\mechanical{m}\energy{E}}/\energy{\hbar}$. Its general solution is

$$
\signal{\psi}=A\sin(\signal{k}\mechanical{x})+B\cos(\signal{k}\mechanical{x}).
$$

The left boundary condition gives $\signal{\psi}(0)=B=0$. Thus, $B=0$.

The right boundary condition gives $\signal{\psi}(\mechanical{L})=A\sin(\signal{k}\mechanical{L})=0$. A nontrivial solution needs $A\ne0$, so

$$
\signal{k}\mechanical{L}=n\pi,\qquad n=1,2,3,\ldots.
$$

Therefore,

$$
\signal{k}_n=\frac{n\pi}{\mechanical{L}}
\quad\Longrightarrow\quad
\energy{E}_n=\frac{\energy{\hbar}^2\signal{k}_n^2}{2\mechanical{m}}
=\frac{n^2\pi^2\energy{\hbar}^2}{2\mechanical{m}\mechanical{L}^2}.
$$

The normalized eigenfunctions are

$$
\signal{\psi}_n(\mechanical{x})
=\sqrt{\frac2{\mechanical{L}}}
\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right).
$$

See Fig. 3.1.

### Verification of normalization

$$
\begin{aligned}
\int_0^{\mechanical{L}}|\signal{\psi}_n|^2\,\mathrm{d}\mechanical{x}
&=\frac2{\mechanical{L}}\int_0^{\mechanical{L}}
\sin^2\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)\mathrm{d}\mechanical{x}\\
&=\frac2{\mechanical{L}}\cdot\frac{\mechanical{L}}2=1.
\end{aligned}
$$

Some remarks:

- The value $n=0$ is excluded. It would give $\signal{\psi}=0$, which cannot represent a physical state.
- The energies grow as $n^2$. The fourth level has sixteen times the ground-state energy.
- The positive ground-state energy

  $$
  \energy{E}_1=\frac{\pi^2\energy{\hbar}^2}{2\mechanical{m}\mechanical{L}^2}>0
  $$

  is the **zero-point energy**. The particle cannot be at rest, even at temperature $\thermal{T}=0$. This follows from the uncertainty relation. Confinement to a box of length $\mechanical{L}$ gives $\mechanical{\Delta x}\lesssim\mechanical{L}$, hence $\mechanical{\Delta p}\gtrsim\energy{\hbar}/\mechanical{L}$ and $\energy{E}\gtrsim\energy{\hbar}^2/(2\mechanical{m}\mechanical{L}^2)$.

> [!note]
> The uncertainty argument is an order-of-magnitude estimate, not the exact ground-state calculation. The statement about rest refers to positive kinetic energy; it does not require nonzero mean momentum.

```graph
bounds: [-0.42, 10.65, 1.8, -1.0]
height: 520
width: 540
axis: false
drag: false
showNavigation: false
keepAspectRatio: false
elements: [
  {type: polygon, def: [[-0.12, 0], [0, 0], [0, 10], [-0.12, 10]], att: {fillColor: '#cccccc', fillOpacity: 0.65, borders: {visible: false}, vertices: {visible: false, fixed: true}, fixed: true}},
  {type: polygon, def: [[1, 0], [1.12, 0], [1.12, 10], [1, 10]], att: {fillColor: '#cccccc', fillOpacity: 0.65, borders: {visible: false}, vertices: {visible: false, fixed: true}, fixed: true}},
  {type: line, def: [[0, 0], [0, 10]], att: {straightFirst: false, straightLast: false, strokeColor: '#333333', strokeWidth: 1.5, fixed: true}},
  {type: line, def: [[1, 0], [1, 10]], att: {straightFirst: false, straightLast: false, strokeColor: '#333333', strokeWidth: 1.5, fixed: true}},
  {type: line, def: [[0, 0], [1, 0]], att: {straightFirst: false, straightLast: false, strokeColor: '#333333', strokeWidth: 1.5, fixed: true}},
  {type: line, def: [[0, 1], [1, 1]], att: {straightFirst: false, straightLast: false, dash: 2, strokeColor: '#2455a4', strokeWidth: 1, fixed: true}},
  {type: line, def: [[0, 4], [1, 4]], att: {straightFirst: false, straightLast: false, dash: 2, strokeColor: '#33865a', strokeWidth: 1, fixed: true}},
  {type: line, def: [[0, 9], [1, 9]], att: {straightFirst: false, straightLast: false, dash: 2, strokeColor: '#bd3943', strokeWidth: 1, fixed: true}},
  {type: functiongraph, def: [f:1+0.8*sin(PI*x), 0, 1], att: {strokeColor: '#2455a4', strokeWidth: 2}},
  {type: functiongraph, def: [f:4+0.8*sin(2*PI*x), 0, 1], att: {strokeColor: '#33865a', strokeWidth: 2}},
  {type: functiongraph, def: [f:9+0.8*sin(3*PI*x), 0, 1], att: {strokeColor: '#bd3943', strokeWidth: 2}},
  {type: line, def: [[-0.21, 0], [-0.21, 1]], att: {straightFirst: false, straightLast: false, firstArrow: true, lastArrow: true, strokeColor: '#333333', strokeWidth: 1.2, fixed: true}},
  {type: text, def: [-0.24, 0.5, 'E₁'], att: {fixed: true, fontSize: 15, anchorX: 'right', anchorY: 'middle', useMathJax: false, strokeColor: '#333333'}},
  {type: text, def: [0, -0.42, '0'], att: {fixed: true, fontSize: 16, anchorX: 'middle', anchorY: 'middle', useMathJax: false, strokeColor: '#333333'}},
  {type: text, def: [1, -0.42, 'L'], att: {fixed: true, fontSize: 16, anchorX: 'middle', anchorY: 'middle', useMathJax: false, strokeColor: '#333333'}},
  {type: text, def: [1.2, 1, 'E₁'], att: {fixed: true, fontSize: 17, anchorX: 'left', anchorY: 'middle', useMathJax: false, strokeColor: '#2455a4'}},
  {type: text, def: [1.2, 4, 'E₂ = 4E₁'], att: {fixed: true, fontSize: 17, anchorX: 'left', anchorY: 'middle', useMathJax: false, strokeColor: '#33865a'}},
  {type: text, def: [1.2, 9, 'E₃ = 9E₁'], att: {fixed: true, fontSize: 17, anchorX: 'left', anchorY: 'middle', useMathJax: false, strokeColor: '#bd3943'}}
]
```

**Fig. 3.1** The first three eigenstates of a particle in an infinite potential well on $[0,\mechanical{L}]$. The eigenfunctions $\signal{\psi}_n(\mechanical{x})\propto\sin(n\pi\mechanical{x}/\mechanical{L})$ are drawn with an arbitrary vertical amplitude above their energy levels $\energy{E}_n=n^2\energy{E}_1$. Note the quadratic growth of the energies and the increasing number of nodes with $n$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\psi},\signal{\psi}_n$ | $\unit{m^{-1/2}}$ | Wavefunctions | The stationary states normalized in the one-dimensional well. |
| $\mechanical{x}$ | $\unit{m}$ | Position | The position coordinate inside the well. |
| $\mechanical{L}$ | $\unit{m}$ | Well length | The distance between the two infinite walls. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The confined particle's mass. |
| $\signal{k},\signal{k}_n$ | $\unit{m^{-1}}$ | Wave numbers | The spatial oscillation coefficients allowed by the boundary conditions. |
| $\energy{E},\energy{E}_n,\energy{E}_1$ | $\unit{J}$ | Energies | The trial energy, discrete energy levels, and ground-state energy. |
| $\energy{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant in the Hamiltonian and uncertainty estimate. |
| $\thermal{T}$ | $\unit{K}$ | Temperature | The temperature used in the zero-point-energy statement. |
| $\mechanical{\Delta x}$ | $\unit{m}$ | Position uncertainty | The position spread constrained by the well. |
| $\mechanical{\Delta p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum uncertainty | The momentum spread associated with confinement. |
