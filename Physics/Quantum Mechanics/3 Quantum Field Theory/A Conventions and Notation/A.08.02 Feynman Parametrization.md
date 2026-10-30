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
