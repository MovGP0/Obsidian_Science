---
title: "The Space L²(ℝ)"
---

> [!TLDR]
> The space L²(ℝ) contains square-integrable functions, with functions equal almost everywhere treated as the same element. Normalizable wave packets belong to this space; ideal plane waves do not.

> [!definition] Definition 8.1 | The space L²(ℝ)
> $L^2(\mathbb R)$ consists of complex-valued functions $f:\mathbb R\to\mathbb C$ for which
>
> $$
> \lVert f\rVert^2=\int_{-\infty}^{+\infty}|f(x)|^2\,dx<\infty.
> $$
>
> With pointwise addition, scalar multiplication, and the inner product
>
> $$
> \langle f,g\rangle=\int_{-\infty}^{+\infty}f^*(x)g(x)\,dx,
> $$
>
> it is an inner-product space. The functions are understood as equivalence classes, as explained below.

> [!note]
> More precisely, $L^2(\mathbb R)$ is a space of equivalence classes of measurable functions. Two functions represent the same element if they differ only on a set of Lebesgue measure zero. This detail is necessary for positive definiteness: $\lVert f\rVert=0$ means that $f=0$ **almost everywhere**. It does not require every pointwise value of a representative to be zero.

## Example — Which functions belong to L²(ℝ)?

**(a)** For $f(x)=e^{-|x|}$,

$$
\int_{-\infty}^{+\infty}e^{-2|x|}\,dx
=2\int_0^{\infty}e^{-2x}\,dx=1<\infty.
$$

**Yes.** The function belongs to $L^2(\mathbb R)$.

**(b)** For the constant function $g(x)=1$,

$$
\int_{-\infty}^{+\infty}1\,dx=\infty.
$$

**No.** The function does not belong to $L^2(\mathbb R)$.

**(c)** For the plane wave $h(\mechanical{x})=e^{i\signal{k}\mechanical{x}}$, with real $\signal{k}$,

$$
\int_{-\infty}^{+\infty}|e^{i\signal{k}\mechanical{x}}|^2\,d\mechanical{x}
=\int_{-\infty}^{+\infty}1\,d\mechanical{x}=\infty.
$$

**No.** The plane wave does not belong to $L^2(\mathbb R)$.

**(d)** For the Gaussian wavefunction

$$
\signal{\psi}(\mechanical{x})
=\signal{A}e^{-\mechanical{x}^2/(4\mechanical{\sigma}^2)},
\qquad\mechanical{\sigma}>0,
$$

we obtain

$$
\int_{-\infty}^{+\infty}|\signal{A}|^2e^{-\mechanical{x}^2/(2\mechanical{\sigma}^2)}\,d\mechanical{x}
=|\signal{A}|^2\mechanical{\sigma}\sqrt{2\pi}<\infty.
$$

**Yes**, for finite $\signal{A}$ and positive finite $\mechanical{\sigma}$.

Example (c) is physically significant. A plane wave is not a vector in $L^2(\mathbb R)$ and cannot be a normalizable physical wavefunction on the full real line. Quantum mechanics uses plane waves as idealizations and generalized continuous-basis states. Normalizable physical states are wave packets with

$$
\int_{-\infty}^{+\infty}|\signal{\psi}(\mechanical{x})|^2\,d\mechanical{x}<\infty.
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$ | $\unit{m}$ | Position | The coordinate of the particle. |
| $\signal{k}$ | $\unit{m^{-1}}$ | Wavenumber | The spatial phase rate of the plane wave. |
| $\signal{\psi}$ | $\unit{m^{-1/2}}$ | Wavefunction | The one-dimensional position probability amplitude. |
| $\signal{A}$ | $\unit{m^{-1/2}}$ | Wavefunction amplitude | The constant amplitude of the Gaussian wavefunction. |
| $\mechanical{\sigma}$ | $\unit{m}$ | Gaussian width | The width parameter in the Gaussian wavefunction. |
