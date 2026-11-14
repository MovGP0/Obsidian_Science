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

For (A.63)–(A.64) as spatial transforms, the dot product is Euclidean. The same signs and normalization extend to a spacetime transform when the dot product is the Lorentzian contraction and $d$ counts spacetime dimensions. In (A.65), the momentum is a spacetime four-momentum and its square uses the mostly-minus metric. This is a change of application, not an identification of a spatial momentum square with the Lorentzian square.

Substituting (A.63) into (A.64) gives the delta function in [[A.07.02 Dirac Delta Function]] and returns the original function, for example for a smooth rapidly decreasing function. The propagator is a distributional boundary value: its infinitesimal positive imaginary denominator specifies the time-ordering poles. It is not an ordinary function at a pole. Its mass dimension is minus two, which follows immediately from its denominator.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\tilde{\signal{\Delta}}_F$ | $\unit{GeV^{-2}}$ | Scalar Feynman propagator | The momentum-space propagator of the free scalar field. |
| $\mechanical{k}$ | $\unit{GeV}$ | Four-momentum | The momentum argument of the propagator. |
| $\mechanical{m}$ | $\unit{GeV}$ | Scalar mass | The mass in the propagator denominator. |
