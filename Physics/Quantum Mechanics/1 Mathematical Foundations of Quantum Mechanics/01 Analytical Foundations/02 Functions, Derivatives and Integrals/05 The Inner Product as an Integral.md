---
title: "The Inner Product as an Integral"
---

> [!TLDR]
> The position-space inner product integrates the conjugate of the first function times the second function. It defines a norm and lets us test the orthogonality of states.

> [!definition] Definition 2.4 — Inner product in L²(ℝ)
> For $f,g:\mathbb{R}\to\mathbb{C}$, the **inner product** is
>
> $$
> \langle f,g\rangle=\int_{-\infty}^{+\infty}f^*(x)g(x)\,\mathrm{d}x.
> $$
>
> The **norm** of $f$ is
>
> $$
> \|f\|=\sqrt{\langle f,f\rangle}=\sqrt{\int|f|^2\,\mathrm{d}x}.
> $$

The following properties follow directly from the definition:

$$
\langle f,g\rangle=\langle g,f\rangle^*.
\qquad\text{(Hermitian symmetry)} \tag{2.3}
$$

$$
\langle f,\alpha g+\beta h\rangle
=\alpha\langle f,g\rangle+\beta\langle f,h\rangle.
\qquad\text{(Linearity in the second argument)} \tag{2.4}
$$

$$
\langle f,f\rangle\ge0,
\qquad\text{with equality only when }f=0. \tag{2.5}
$$

> [!note]
> Use square-integrable functions, so that this inner product is finite. In $L^2$, functions that agree almost everywhere represent the same element. Thus, “$f=0$” in equation (2.5) means zero almost everywhere.

> [!note]
> Conjugation of the first argument is the physics convention. Many mathematics textbooks use the opposite convention. The difference is not essential, but you must use one convention consistently. This book uses the physics convention.

## Example — Orthogonality of the box functions

For $n\ne m$, the functions

$$
\signal{\phi}_n(\mechanical{x})
=\sqrt{\frac{2}{\mechanical{L}}}
\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)
$$

are orthogonal on $[0,\mechanical{L}]$:

$$
\langle\signal{\phi}_m,\signal{\phi}_n\rangle
=\frac{2}{\mechanical{L}}\int_0^{\mechanical{L}}
\sin\left(\frac{m\pi\mechanical{x}}{\mechanical{L}}\right)
\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)\mathrm{d}\mechanical{x}.
$$

Use $\sin\alpha\sin\beta=\tfrac12[\cos(\alpha-\beta)-\cos(\alpha+\beta)]$:

$$
\langle\signal{\phi}_m,\signal{\phi}_n\rangle
=\frac{1}{\mechanical{L}}\int_0^{\mechanical{L}}
\left[
\cos\left(\frac{(m-n)\pi\mechanical{x}}{\mechanical{L}}\right)
-\cos\left(\frac{(m+n)\pi\mechanical{x}}{\mechanical{L}}\right)
\right]\mathrm{d}\mechanical{x}.
$$

Both integrals have the form

$$
\int_0^{\mechanical{L}}\cos\left(\frac{k\pi\mechanical{x}}{\mechanical{L}}\right)\mathrm{d}\mechanical{x}
=\left.\frac{\mechanical{L}}{k\pi}
\sin\left(\frac{k\pi\mechanical{x}}{\mechanical{L}}\right)\right|_0^{\mechanical{L}}
=0
$$

for a nonzero integer $k$. Here $k$ is an integer index, not a wave number. Since $n\ne m$ implies $m-n\ne0$ and $m+n\ne0$, both terms vanish:

$$
\langle\signal{\phi}_m,\signal{\phi}_n\rangle=0.\quad\checkmark
$$

For $m=n$,

$$
\langle\signal{\phi}_n,\signal{\phi}_n\rangle
=\frac{2}{\mechanical{L}}\int_0^{\mechanical{L}}
\sin^2\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)\mathrm{d}\mechanical{x}
=\frac{2}{\mechanical{L}}\cdot\frac{\mechanical{L}}{2}
=1.\quad\checkmark
$$

> [!note]
> The box-function example assumes $n,m\in\{1,2,3,\ldots\}$ and $\mechanical{L}>0$. These conditions ensure $m+n\ne0$. To use the whole-line definition above, extend the functions by zero outside the box.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\phi}_n,\signal{\phi}_m$ | $\unit{m^{-1/2}}$ | Box wavefunctions | Normalized sine states on a one-dimensional interval. |
| $\mechanical{x}$ | $\unit{m}$ | Position | The position coordinate in the box. |
| $\mechanical{L}$ | $\unit{m}$ | Box length | The positive length of the interval. |
