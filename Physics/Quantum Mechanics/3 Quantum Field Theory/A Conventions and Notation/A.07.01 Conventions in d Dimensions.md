---
title: "Conventions in d Dimensions"
---

> [!TLDR]
> The forward Fourier transform has no normalization factor; the inverse carries a factor of (2π)⁻ᵈ.

For a function $f(x)$ in $d$ spatial dimensions, define
$$
\tilde f(k)=\int d^d x\,e^{+ik\cdot x}f(x).
\tag{A.63}
$$
The inverse transform is
$$
f(x)=\int\frac{d^d k}{(2\pi)^d}
\,e^{-ik\cdot x}\tilde f(k).
\tag{A.64}
$$

In this convention, the momentum-space Feynman propagator of a free scalar with mass $\mechanical{m}$ is
$$
\tilde{\signal{\Delta}}_F(\mechanical{k})
=\frac{i}{\mechanical{k}^2-\mechanical{m}^2+i\varepsilon}.
\tag{A.65}
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\tilde{\signal{\Delta}}_F$ | $\unit{GeV^{-2}}$ | Scalar Feynman propagator | The momentum-space propagator of the free scalar field. |
| $\mechanical{k}$ | $\unit{GeV}$ | Four-momentum | The momentum argument of the propagator. |
| $\mechanical{m}$ | $\unit{GeV}$ | Scalar mass | The mass in the propagator denominator. |
