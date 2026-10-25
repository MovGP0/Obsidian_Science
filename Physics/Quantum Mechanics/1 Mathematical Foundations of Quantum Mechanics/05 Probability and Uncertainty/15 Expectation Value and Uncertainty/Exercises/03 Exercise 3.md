---
title: "Momentum uncertainty in a box"
---

> [!TLDR]
> A real box eigenfunction has zero mean momentum and a nonzero momentum spread that satisfies the uncertainty bound.

Chapter 15: [[00 Expectation Value and Uncertainty|Expectation Value, Variance, and Quantum Uncertainty]] · Exercise 3 · **Basic level**

Back to [[15 Expectation Value and Uncertainty/08 Exercises|Chapter 15 exercises]].

## Question

Calculate $\langle\hat p\rangle$ and $\langle\hat p^2\rangle$ for

$$
\signal{\psi_n}(\mechanical{x})
=\sqrt{\frac2{\mechanical{L}}}
\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right).
$$

Use $\langle\hat p\rangle=0$ from symmetry and calculate

$$
\langle\hat p^2\rangle
=-\mechanical{\hbar}^2
\int_0^{\mechanical{L}}
\signal{\psi_n}^{*}
\frac{\partial^2\signal{\psi_n}}{\partial\mechanical{x}^2}
\,d\mechanical{x}.
$$

## Worked solution

Take $n=1,2,\ldots$ and $\mechanical{L}>0$. The sine vanishes at both walls. Its normalization follows from

$$
\int_0^{\mechanical{L}}|\signal{\psi_n}|^2\,d\mechanical{x}
=\frac2{\mechanical{L}}\int_0^{\mechanical{L}}
\frac{1-\cos(2n\pi\mechanical{x}/\mechanical{L})}{2}\,d\mechanical{x}=1.
$$

### Mean momentum

The stationary real wave has equal contributions from the two momentum directions. This symmetry gives a zero mean. Direct integration confirms it and shows the role of the boundary conditions:

$$
\begin{aligned}
\langle\hat p\rangle
&=\int_0^{\mechanical{L}}\signal{\psi_n}^{*}
\left(-i\mechanical{\hbar}\frac{d}{d\mechanical{x}}\right)
\signal{\psi_n}\,d\mechanical{x}\\
&=-i\mechanical{\hbar}\int_0^{\mechanical{L}}\signal{\psi_n}\signal{\psi_n}'\,d\mechanical{x}
=-\frac{i\mechanical{\hbar}}2[\signal{\psi_n}^2]_0^{\mechanical{L}}=0.
\end{aligned}
$$

The middle equality uses the fact that this wavefunction is real.

### Second moment and uncertainty

Differentiation twice gives

$$
\frac{d^2\signal{\psi_n}}{d\mechanical{x}^2}
=-\left(\frac{n\pi}{\mechanical{L}}\right)^2\signal{\psi_n}.
$$

Substitute this into the required integral. The remaining integral is one because the state is normalized:

$$
\begin{aligned}
\langle\hat p^2\rangle
&=-\mechanical{\hbar}^2\int_0^{\mechanical{L}}
\signal{\psi_n}^{*}\frac{d^2\signal{\psi_n}}{d\mechanical{x}^2}\,d\mechanical{x}\\
&=\frac{n^2\pi^2\mechanical{\hbar}^2}{\mechanical{L}^2}
\int_0^{\mechanical{L}}|\signal{\psi_n}|^2\,d\mechanical{x}
=\frac{n^2\pi^2\mechanical{\hbar}^2}{\mechanical{L}^2},\\
\mechanical{\Delta p_n}
&=\sqrt{\langle\hat p^2\rangle-\langle\hat p\rangle^2}
=\frac{n\pi\mechanical{\hbar}}{\mechanical{L}}.
\end{aligned}
$$

### Check against the position uncertainty

The position result from [[15 Expectation Value and Uncertainty/Exercises/02 Exercise 2|Exercise 2]] gives

$$
\mechanical{\Delta x_n}\mechanical{\Delta p_n}
=\mechanical{\hbar}\sqrt{\frac{n^2\pi^2}{12}-\frac12}.
$$

The expression increases with $n$. Its smallest value is $\mechanical{\hbar}\sqrt{\pi^2/12-1/2}\approx0.568\mechanical{\hbar}$ for $n=1$, which exceeds $\mechanical{\hbar}/2$. At large $n$ it grows as $n\pi\mechanical{\hbar}/(2\sqrt3)$.

> [!note]
> In an ideal hard-wall box, the first-derivative momentum operator with zero endpoint values is not self-adjoint on the same domain as the box Hamiltonian. The derivative calculations above give the usual momentum moments, also obtained from the full-line Fourier transform of the wavefunction extended by zero. The positive second-derivative operator gives the kinetic-energy moment. Do not interpret the standing wave as a momentum eigenstate.

## Answer

$$
\boxed{\langle\hat p\rangle=0,\qquad
\langle\hat p^2\rangle=\frac{n^2\pi^2\mechanical{\hbar}^2}{\mechanical{L}^2},\qquad
\mechanical{\Delta p_n}=\frac{n\pi\mechanical{\hbar}}{\mechanical{L}}.}
$$

The position-momentum uncertainty product is $\mechanical{\hbar}\sqrt{n^2\pi^2/12-1/2}\geq0.568\mechanical{\hbar}>\mechanical{\hbar}/2$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$, $\mechanical{L}$, $\mechanical{\Delta x_n}$ | $\unit{m}$ | Position and length | The coordinate, box length, and position spread. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale in momentum moments. |
| $\signal{\psi_n}$ | $\unit{m^{-1/2}}$ | Wavefunction | The normalized position amplitude. |
| $\langle\hat p\rangle$, $\mechanical{\Delta p_n}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | The mean momentum and momentum spread. |
| $\langle\hat p^2\rangle$ | $\unit{kg^2\,m^2\,s^{-2}}$ | Second momentum moment | The expectation of squared momentum. |
| $\mechanical{\Delta x_n}\mechanical{\Delta p_n}$ | $\unit{J\,s}$ | Uncertainty product | The product of position and momentum spreads. |
