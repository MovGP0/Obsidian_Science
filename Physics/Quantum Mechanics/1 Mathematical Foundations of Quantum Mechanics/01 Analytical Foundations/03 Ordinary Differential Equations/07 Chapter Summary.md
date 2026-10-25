---
title: "Chapter Summary"
---

> [!TLDR]
> Separation of variables, characteristic equations, and matrix exponentials solve the main ODE types in this chapter. Boundary conditions turn quantum wave equations into energy eigenvalue problems.

- For a separable first-order ODE, use $\int\mathrm{d}y/h(y)=\int g(x)\,\mathrm{d}x$. The initial condition fixes the integration constant.
- For a second-order ODE with constant coefficients, solve the characteristic equation $ar^2+br+c=0$. The discriminant $\Delta$ gives three cases.
- A linear system $\dot{\mathbf y}=A\mathbf y$ is solved with $\mathrm{e}^{At}$. Diagonalization gives a direct way to calculate the exponential when the matrix is diagonalizable.
- An eigenvalue problem combines $\hat L\psi=\lambda\psi$ with boundary conditions. Only certain $\lambda$ are allowed in the confined examples: this is quantization.
- For a particle in a box,

  $$
  \energy{E}_n=\frac{n^2\pi^2\energy{\hbar}^2}{2\mechanical{m}\mechanical{L}^2},
  \qquad
  \signal{\psi}_n=\sqrt{\frac2{\mechanical{L}}}
  \sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right).
  $$

- The Schrödinger equation $\hat H\signal{\psi}=\energy{E}\signal{\psi}$ is an eigenvalue problem. Its energy values are the eigenvalues.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{E},\energy{E}_n$ | $\unit{J}$ | Energy eigenvalues | The energies of stationary states, including the box energy levels. |
| $\signal{\psi},\signal{\psi}_n$ | $\unit{m^{-1/2}}$ | Wavefunctions | The stationary wavefunctions in the one-dimensional position representation. |
| $\mechanical{x}$ | $\unit{m}$ | Position | The coordinate inside the box. |
| $\mechanical{L}$ | $\unit{m}$ | Box length | The distance between the box walls. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The confined particle's mass. |
| $\energy{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant in the energy-level formula. |
