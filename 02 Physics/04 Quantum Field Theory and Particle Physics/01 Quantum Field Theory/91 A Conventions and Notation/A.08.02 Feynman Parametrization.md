---
title: "Feynman Parametrization"
---

> [!TLDR]
> Feynman parameters combine products of propagator denominators into a single denominator raised to a higher power.

Use these formulas to combine propagator denominators:
$$
\frac1{AB}
=\int_0^1 dx\,\frac1{[xA+(1-x)B]^2},
\tag{A.75}
$$
$$
\frac1{A_1A_2A_3}
=2\int_0^1 dx\int_0^x dy\,
\frac1{[yA_1+(x-y)A_2+(1-x)A_3]^3}.
\tag{A.76}
$$

For a product of arbitrary denominator powers,
$$
\begin{aligned}
\frac1{A_1^{n_1}\cdots A_k^{n_k}}
={}&\frac{\Gamma(n_1+\cdots+n_k)}
{\Gamma(n_1)\cdots\Gamma(n_k)}
\int_0^1d\alpha_1\cdots d\alpha_k\,
\delta\!\left(\sum_i\alpha_i-1\right)\\
&\times
\frac{\prod_i\alpha_i^{\,n_i-1}}
{\left[\sum_i\alpha_iA_i\right]^{n_1+\cdots+n_k}}.
\end{aligned}
\tag{A.77}
$$
The two-denominator version is
$$
\frac1{A^mB^n}
=\frac{\Gamma(m+n)}{\Gamma(m)\Gamma(n)}
\int_0^1dx\,
\frac{x^{m-1}(1-x)^{n-1}}
{[xA+(1-x)B]^{m+n}}.
\tag{A.78}
$$

The integral identities hold directly for positive real denominators and positive real parts of the exponents. For propagator denominators, continue from this domain with a common causal prescription and consistent branches; arbitrary real denominators of opposite signs can make the parameter integral singular. See [CERN lecture notes, section 3.1, p. 33](https://cds.cern.ch/record/458488/files/open-2000-292.pdf) for the positive-denominator starting point.

The parameters are nonnegative weights constrained to sum to one. In (A.76), the weights are $y$, $x-y$, and $1-x$; the triangular integration domain ensures all three are nonnegative. If all three denominators are equal, its area is one half, which cancels the prefactor two and recovers their inverse cube. For (A.78), set the two denominators equal: the remaining beta integral cancels the gamma prefactor. In a loop calculation, combining denominators permits completion of the momentum square before using the Gaussian formulas.
