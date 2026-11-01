---
title: "Euler's Beta Function"
---

> [!TLDR]
> Euler's beta function relates a finite-interval parameter integral to a ratio of gamma functions.

Euler's beta function is
$$
B(x,y)=\frac{\Gamma(x)\Gamma(y)}{\Gamma(x+y)}
=\int_0^1dt\,t^{x-1}(1-t)^{y-1}.
\tag{A.91}
$$
The integral representation converges for $\operatorname{Re}x>0$ and $\operatorname{Re}y>0$.

The integral's endpoint conditions have separate roles: the real part of the first argument controls convergence at zero, and the real part of the second controls convergence at one. Outside this region the gamma ratio defines a meromorphic continuation, rather than the value of a convergent real-interval integral. The domain and branch convention are recorded in [NIST DLMF, section 5.12](https://dlmf.nist.gov/5.12).

Changing the integration variable from $t$ to $1-t$ proves symmetry under exchange of the two arguments. As a normalization check, $B(1,1)=1$, while $B(2,1)=1/2$. More generally $B(x,1)=1/x$ in its convergence domain. These checks make [[A.08.02 Feynman Parametrization]] easy to test when its denominators coincide: the beta integral cancels the gamma-function prefactor. This is a mathematical identity used in loop reduction, not a new physical assumption.
