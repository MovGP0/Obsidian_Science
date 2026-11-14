---
title: "Dirac Delta Function"
---

> [!TLDR]
> The Fourier representation of the Dirac delta function fixes the factors of 2π in coordinate and momentum space.

With the stated Fourier convention,
$$
\delta^{(d)}(x)
=\int\frac{d^d k}{(2\pi)^d}e^{-ik\cdot x},
\qquad
\int d^d x\,e^{ik\cdot x}
=(2\pi)^d\delta^{(d)}(k).
\tag{A.66}
$$

These Fourier integrals are distributional identities, not convergent integrals at each point. Their meaning is fixed by integration against a smooth rapidly decreasing test function. The defining check is
$$
\int d^d x\,\delta^{(d)}(x-a)f(x)=f(a).
$$
Substitution of the Fourier representation and then the inverse-transform relation reproduces this value with the displayed normalization.

For a nonzero real scalar $b$, rescaling the argument gives $\delta^{(d)}(b x)=|b|^{-d}\delta^{(d)}(x)$. The absolute value is required even when the coordinate orientation reverses. A delta function therefore carries inverse powers of the units of its argument; it is not a dimensionless spike with a finite height. In momentum conservation, use the momentum-space version of (A.66), including all factors of $2\pi$.
