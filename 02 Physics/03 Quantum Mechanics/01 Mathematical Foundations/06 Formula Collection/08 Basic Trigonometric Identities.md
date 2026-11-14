---
title: "Basic Trigonometric Identities"
---

> [!TLDR]
> These identities convert between trigonometric sums and products. The final integral gives the squared-sine normalization on a finite interval.

The angles are real and measured in radians. Use angle-addition formulas to combine phase shifts, and product-to-sum formulas to integrate products of modes. In quantum mechanics, the latter choice is useful for normalization and overlap integrals in a one-dimensional box.

$$
\sin^2\theta+\cos^2\theta=1.
$$

$$
\sin(\alpha\pm\beta)
=\sin\alpha\cos\beta\pm\cos\alpha\sin\beta.
$$

$$
\cos(\alpha\pm\beta)
=\cos\alpha\cos\beta\mp\sin\alpha\sin\beta.
$$

$$
\sin\alpha\sin\beta
=\frac12[\cos(\alpha-\beta)-\cos(\alpha+\beta)].
$$

$$
\cos\alpha\cos\beta
=\frac12[\cos(\alpha-\beta)+\cos(\alpha+\beta)].
$$

$$
\sin\alpha\cos\beta
=\frac12[\sin(\alpha+\beta)+\sin(\alpha-\beta)].
$$

For a positive interval length $L$,

$$
\int_0^L\sin^2\left(\frac{n\pi x}L\right)\,dx
=\frac L2,
\qquad n\in\mathbb Z\setminus\{0\}.
$$

The angles and interval variables are mathematical quantities here. Assign physical units according to the application.

To recover the normalization integral, set $\alpha=\beta=n\pi x/L$ in the sine-product identity. The constant term integrates to $L/2$ and the cosine term gives a sine evaluated at integer multiples of $2\pi$, so it vanishes. The excluded case $n=0$ is a useful check: the integrand is then zero and the answer is zero, not $L/2$.

For distinct positive integers $m,n$, the same product-to-sum identity gives

$$
\int_0^L\sin\left(\frac{m\pi x}{L}\right)
\sin\left(\frac{n\pi x}{L}\right)\,dx=0.
$$

Both cosine terms now integrate to zero. Hence the functions $\sqrt{2/L}\sin(n\pi x/L)$ for $n=1,2,\ldots$ are orthonormal on this interval and vanish at both ends. Use them when those endpoint conditions describe the state. A periodic interval has different boundary conditions and can require cosine modes or complex exponentials as well.
