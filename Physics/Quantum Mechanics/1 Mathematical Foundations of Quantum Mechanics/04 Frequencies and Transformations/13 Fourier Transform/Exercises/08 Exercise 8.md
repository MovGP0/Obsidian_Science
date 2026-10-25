---
title: "The free-particle propagator and Gaussian evolution"
---

> [!TLDR]
> The free propagator solves the Schrödinger equation, tends to a delta distribution, and reproduces Gaussian spreading.

Chapter 13 · Exercise 8 · Challenge

Back to [[13 Fourier Transform/08 Exercises|Chapter 13 exercises]].

## Question

The propagator

$$
K(\mechanical{x},\signal{t};\mechanical{x}',0)
=\langle\mechanical{x}|e^{-i\hat H\signal{t}/\mechanical{\hbar}}|\mechanical{x}'\rangle
$$

is the propagation amplitude from $\mechanical{x}'$ to $\mechanical{x}$ in time $\signal{t}$. For a free particle,

$$
K(\mechanical{x},\signal{t};\mechanical{x}',0)
=\sqrt{\frac{\mechanical{m}}{2\pi i\mechanical{\hbar}\signal{t}}}
e^{i\mechanical{m}(\mechanical{x}-\mechanical{x}')^2/(2\mechanical{\hbar}\signal{t})}.
$$

Verify

$$
i\mechanical{\hbar}\partial_{\signal{t}}K
=-\frac{\mechanical{\hbar}^2}{2\mechanical{m}}\partial_{\mechanical{x}}^2K,
$$

and the distributional initial condition

$$
K(\mechanical{x},\signal{t};\mechanical{x}',0)
\longrightarrow\delta(\mechanical{x}-\mechanical{x}')
\qquad\text{as }\signal{t}\to0^+.
$$

Then apply $K$ to the Gaussian wave packet from Exercises 5 and 6 and compare the results.

> [!note]
> Use the standard continuous square-root branch for positive time. The delta limit is distributional, not pointwise. The source refers to the Gaussian of the “previous exercise,” although Exercise 7 concerns sampling; Exercises 5 and 6 contain the Gaussian packet.

## Worked solution

Assume $\mechanical{m}>0$ and $\signal{t}>0$. Use the square root $\sqrt{1/i}=e^{-i\pi/4}$ and continue it for positive time. The free Hamiltonian is $\hat H=\hat p^2/(2\mechanical{m})$.

### Verify the differential equation

Set $d=\mechanical{x}-\mechanical{x}'$ as an algebraic coordinate difference. Differentiation of the given kernel gives

$$
\partial_{\signal{t}}K=\left[-\frac1{2\signal{t}}-\frac{i\mechanical{m} d^2}{2\mechanical{\hbar}\signal{t}^2}\right]K,
\qquad
\partial_{\mechanical{x}}K=\frac{i\mechanical{m} d}{\mechanical{\hbar}\signal{t}}K,
$$

$$
\partial_{\mechanical{x}}^2K=\left[\frac{i\mechanical{m}}{\mechanical{\hbar}\signal{t}}-\frac{\mechanical{m}^2d^2}{\mechanical{\hbar}^2\signal{t}^2}\right]K.
$$

Multiplication by the coefficients in the Schrödinger equation gives the same expression on both sides:

$$
i\mechanical{\hbar}\partial_{\signal{t}}K
=\left[-\frac{i\mechanical{\hbar}}{2\signal{t}}+\frac{\mechanical{m} d^2}{2\signal{t}^2}\right]K
=-\frac{\mechanical{\hbar}^2}{2\mechanical{m}}\partial_{\mechanical{x}}^2K.
$$

### Prove the initial condition as a distribution

Insert momentum completeness with $\langle\mechanical{x}|\mechanical{p}\rangle=e^{i\mechanical{p}\mechanical{x}/\mechanical{\hbar}}/\sqrt{2\pi\mechanical{\hbar}}$:

$$
K(\mechanical{x},\signal{t};\mechanical{x}',0)=\frac1{2\pi\mechanical{\hbar}}\int_{\mathbb R}
e^{i\mechanical{p}(\mechanical{x}-\mechanical{x}')/\mechanical{\hbar}-i\mechanical{p}^2\signal{t}/(2\mechanical{m}\mechanical{\hbar})}d\mechanical{p}.
$$

This oscillatory integral is defined by a damping factor $e^{-\varepsilon\mechanical{p}^2}$ followed by $\varepsilon\to0^+$. The complex Gaussian integral then gives the stated prefactor and phase, with the chosen branch.

For a Schwartz test function $\varphi$, define its momentum transform $\widetilde\varphi(\mechanical{p})=(2\pi\mechanical{\hbar})^{-1/2}\int\varphi(\mechanical{x}')e^{-i\mechanical{p}\mechanical{x}'/\mechanical{\hbar}}d\mechanical{x}'$. Then

$$
\int K(\mechanical{x},\signal{t};\mechanical{x}',0)\varphi(\mechanical{x}')d\mechanical{x}'
=\frac1{\sqrt{2\pi\mechanical{\hbar}}}\int e^{i\mechanical{p}\mechanical{x}/\mechanical{\hbar}}
e^{-i\mechanical{p}^2\signal{t}/(2\mechanical{m}\mechanical{\hbar})}\widetilde\varphi(\mechanical{p})d\mechanical{p}.
$$

The time multiplier tends to one and has modulus one. Since $\widetilde\varphi$ is integrable, dominated convergence and Fourier inversion give the limit $\varphi(\mechanical{x})$. Hence $K\to\delta(\mechanical{x}-\mechanical{x}')$ in the distributional sense. There is no pointwise delta limit.

A point-localized ket is a generalized state, not a normalized element of $L^2$. For fixed time, $|K|^2=\mechanical{m}/(2\pi\mechanical{\hbar}\signal{t})$ is constant in position and cannot be integrated to one. The kernel is an operator amplitude, not a position probability density.

### Apply the kernel to the normalized Gaussian

Let $N=(2\pi\mechanical{\sigma}^2)^{-1/4}$ and use the packet from Exercise 5:

$$
\signal{\psi}(\mechanical{x},\signal{t})=N\sqrt{\frac{\mechanical{m}}{2\pi i\mechanical{\hbar}\signal{t}}}
\int_{\mathbb R}\exp\left[\frac{i\mechanical{m}(\mechanical{x}-\mechanical{x}')^2}{2\mechanical{\hbar}\signal{t}}
-\frac{\mechanical{x}'^2}{4\mechanical{\sigma}^2}+\frac{i\mechanical{p}_0\mechanical{x}'}{\mechanical{\hbar}}\right]d\mechanical{x}'.
$$

Collect the terms in the integration coordinate:

$$
A=\frac1{4\mechanical{\sigma}^2}-\frac{i\mechanical{m}}{2\mechanical{\hbar}\signal{t}},\qquad
B=\frac{i\mechanical{p}_0}{\mechanical{\hbar}}-\frac{i\mechanical{m}\mechanical{x}}{\mechanical{\hbar}\signal{t}},\qquad
C=\frac{i\mechanical{m}\mechanical{x}^2}{2\mechanical{\hbar}\signal{t}}.
$$

The exponent is $-A\mechanical{x}'^2+B\mechanical{x}'+C$. Since $\operatorname{Re}A>0$, completion of the square gives

$$
\signal{\psi}=N\sqrt{\frac{\mechanical{m}}{2i\mechanical{\hbar}\signal{t} A}}\exp\left(C+\frac{B^2}{4A}\right).
$$

Put $\tau=\mechanical{\hbar}\signal{t}/(2\mechanical{m}\mechanical{\sigma}^2)$. Direct algebra gives

$$
A=\frac{1+i\tau}{4i\mechanical{\sigma}^2\tau},\qquad
\frac{\mechanical{m}}{2i\mechanical{\hbar}\signal{t} A}=\frac1{1+i\tau},
$$

$$
C+\frac{B^2}{4A}
=-\frac{(\mechanical{x}-\mechanical{p}_0\signal{t}/\mechanical{m})^2}{4\mechanical{\sigma}^2(1+i\tau)}
+\frac{i\mechanical{p}_0\mechanical{x}}{\mechanical{\hbar}}-\frac{i\mechanical{p}_0^2\signal{t}}{2\mechanical{m}\mechanical{\hbar}}.
$$

The square roots combine continuously on the same branch. Therefore

$$
\boxed{\signal{\psi}(\mechanical{x},\signal{t})=\frac{N}{\sqrt{1+i\tau}}
\exp\left[-\frac{(\mechanical{x}-\mechanical{p}_0\signal{t}/\mechanical{m})^2}{4\mechanical{\sigma}^2(1+i\tau)}
+\frac{i\mechanical{p}_0\mechanical{x}}{\mechanical{\hbar}}-\frac{i\mechanical{p}_0^2\signal{t}}{2\mechanical{m}\mechanical{\hbar}}\right].}
$$

Its squared modulus is a normalized Gaussian with mean $\mechanical{p}_0\signal{t}/\mechanical{m}$ and variance $\mechanical{\sigma}^2(1+\tau^2)$. This agrees with the complete momentum-space calculation in Exercise 6, including the phase and normalization, not only the width.

## Answer

The kernel satisfies the free Schrödinger equation and the distributional initial condition. Applied to the Gaussian, it gives $\mechanical{\Delta x}(\signal{t})=\mechanical{\sigma}\sqrt{1+[\mechanical{\hbar}\signal{t}/(2\mechanical{m}\mechanical{\sigma}^2)]^2}$ and the wavefunction above. A delta initial state remains a generalized state; the Gaussian initial state remains normalized.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$ | $\unit{m}$ | Position | The particle position coordinate. |
| $\mechanical{x}'$ | $\unit{m}$ | Initial position | The initial endpoint in the propagator. |
| $\mechanical{p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | The momentum coordinate. |
| $\mechanical{p}_0$ | $\unit{kg\,m\,s^{-1}}$ | Mean momentum | The center of the momentum distribution. |
| $\mechanical{\sigma}$ | $\unit{m}$ | Initial position width | The initial position standard deviation. |
| $\mechanical{\Delta x}$ | $\unit{m}$ | Position uncertainty | The position standard deviation. |
| $\signal{\psi}$ | $\unit{m^{-1/2}}$ | Position wavefunction | The normalized position probability amplitude. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale of the Fourier kernel. |
| $\signal{t}$ | $\unit{s}$ | Time | The elapsed time of free propagation. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The positive particle mass. |
| $K$ | $\unit{m^{-1}}$ | Propagator | The position-space evolution kernel. |
