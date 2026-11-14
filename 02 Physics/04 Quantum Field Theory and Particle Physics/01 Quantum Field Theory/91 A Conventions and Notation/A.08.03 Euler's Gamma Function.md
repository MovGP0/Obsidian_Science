---
title: "Euler's Gamma Function"
---

> [!TLDR]
> Euler's gamma function extends the factorial through analytic continuation. Its poles and small-regulator expansions organize dimensional-regularization formulas.

The gamma function is defined by
$$
\Gamma(z)=\int_0^\infty dt\,t^{z-1}e^{-t},
\qquad
\operatorname{Re}(z)>0.
\tag{A.79}
$$
Analytic continuation extends it meromorphically to the complex plane.

## Basic identities

$$
\Gamma(z+1)=z\Gamma(z),
\tag{A.80}
$$
$$
\Gamma(n)=(n-1)!,
\qquad n\in\mathbb Z_{>0},
\tag{A.81}
$$
$$
\Gamma(1/2)=\sqrt\pi,
\tag{A.82}
$$
$$
\Gamma(z)\Gamma(1-z)=\frac{\pi}{\sin(\pi z)}.
\tag{A.83}
$$

## Poles and regulator expansions

At the nonpositive integers,
$$
\Gamma(-n+\varepsilon)
=\frac{(-1)^n}{n!}
\left[
\frac1\varepsilon-\gamma_E+\sum_{k=1}^n\frac1k
+\mathcal O(\varepsilon)
\right],
\qquad n=0,1,2,\ldots.
\tag{A.84}
$$
The Euler–Mascheroni constant is $\gamma_E=0.577\,215\,664\ldots$.
The sum in (A.84) is zero for $n=0$.

Useful cases for dimensional regularization with $d=4-2\varepsilon$ are
$$
\Gamma(\varepsilon)
=\frac1\varepsilon-\gamma_E+\mathcal O(\varepsilon),
\tag{A.85}
$$
$$
\Gamma(1+\varepsilon)
=1-\gamma_E\varepsilon+\mathcal O(\varepsilon^2),
\tag{A.86}
$$
$$
\left.\Gamma(2-d/2)\right|_{d=4-2\varepsilon}
=\Gamma(\varepsilon)
=\frac1\varepsilon-\gamma_E+\mathcal O(\varepsilon).
\tag{A.87}
$$

Integration by parts proves the recurrence in the initial half-plane: the boundary term vanishes because the exponential controls infinity and the positive real part controls the origin. The recurrence then continues the function beyond that half-plane, except at its poles. The reflection identity is read away from its integer poles. The gamma function has no zeros; see [NIST DLMF, section 5.2(i)](https://dlmf.nist.gov/5.2#i).

For a regulator check, the recurrence gives $\Gamma(-1+\varepsilon)=\Gamma(\varepsilon)/(\varepsilon-1)$. Using (A.85) produces $-1/\varepsilon+\gamma_E-1+\mathcal O(\varepsilon)$, in agreement with (A.84) for $n=1$. In loop integrals, a gamma-function pole identifies a singular continuation; it does not by itself distinguish an ultraviolet divergence from an infrared divergence. Inspect the original integral's endpoints before giving the pole a physical interpretation.
