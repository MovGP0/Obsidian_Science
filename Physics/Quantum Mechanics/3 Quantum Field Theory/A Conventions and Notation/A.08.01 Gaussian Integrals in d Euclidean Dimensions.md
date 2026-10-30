---
title: "Gaussian Integrals in d Euclidean Dimensions"
---

> [!TLDR]
> A Euclidean loop integral with a power-law denominator reduces to gamma functions and a power of its positive mass-squared parameter.

The fundamental integral is
$$
\int\frac{d^d\mechanical{k}_E}{(2\pi)^d}
\frac{1}{(\mechanical{k}_E^2+\mechanical{\Delta})^n}
=\frac{1}{(4\pi)^{d/2}}
\frac{\Gamma(n-d/2)}{\Gamma(n)}
\frac{1}{\mechanical{\Delta}^{\,n-d/2}},
\qquad \mechanical{\Delta}>0.
\tag{A.68}
$$
The Euclidean momentum is related to the Minkowski momentum by the Wick rotation
$$
\mechanical{k}^0=i\mechanical{k}_E^0,
\qquad
\mechanical{\mathbf k}=\mechanical{\mathbf k}_E.
$$

> [!note]
> As an ordinary convergent integral, the expression requires $\operatorname{Re}n>d/2$ for positive real $d$. Dimensional regularization uses its analytic continuation beyond the initial convergence region.

## Euclidean numerator integrals

The corresponding integrals with momentum numerators are
$$
\int\frac{d^d\mechanical{k}_E}{(2\pi)^d}
\frac{\mechanical{k}_E^2}{(\mechanical{k}_E^2+\mechanical{\Delta})^n}
=\frac d2\frac{1}{(4\pi)^{d/2}}
\frac{\Gamma(n-1-d/2)}{\Gamma(n)}
\frac{1}{\mechanical{\Delta}^{\,n-1-d/2}},
\tag{A.69}
$$
$$
\int\frac{d^d\mechanical{k}_E}{(2\pi)^d}
\frac{\mechanical{k}_E^\mu\mechanical{k}_E^\nu}{(\mechanical{k}_E^2+\mechanical{\Delta})^n}
=\frac{\delta^{\mu\nu}}2\frac{1}{(4\pi)^{d/2}}
\frac{\Gamma(n-1-d/2)}{\Gamma(n)}
\frac{1}{\mechanical{\Delta}^{\,n-1-d/2}},
\tag{A.70}
$$
$$
\begin{aligned}
&\int\frac{d^d\mechanical{k}_E}{(2\pi)^d}
\frac{\mechanical{k}_E^\mu\mechanical{k}_E^\nu\mechanical{k}_E^\rho\mechanical{k}_E^\sigma}
{(\mechanical{k}_E^2+\mechanical{\Delta})^n}\\
&\qquad=\frac{\delta^{\{\mu\nu\rho\sigma\}}}{4}
\frac{1}{(4\pi)^{d/2}}
\frac{\Gamma(n-2-d/2)}{\Gamma(n)}
\frac{1}{\mechanical{\Delta}^{\,n-2-d/2}},
\end{aligned}
\tag{A.71}
$$
where
$$
\delta^{\{\mu\nu\rho\sigma\}}
=\delta^{\mu\nu}\delta^{\rho\sigma}
+\delta^{\mu\rho}\delta^{\nu\sigma}
+\delta^{\mu\sigma}\delta^{\nu\rho}.
$$

> [!note] Correction to the source
> The source omits the factor $1/4$ in (A.71), while defining the symmetric delta tensor as the unweighted sum shown above. The factor is required by the rotationally invariant fourth moment; contraction of both index pairs gives the scalar numerator integral with its factor $d(d+2)/4$.

## Minkowski integrals

After the inverse Wick rotation, with the Feynman $+i\varepsilon$ prescription,
$$
\int\frac{d^d\mechanical{k}}{(2\pi)^d}
\frac{1}{(\mechanical{k}^2-\mechanical{\Delta}+i\varepsilon)^n}
=\frac{i(-1)^n}{(4\pi)^{d/2}}
\frac{\Gamma(n-d/2)}{\Gamma(n)}
\left(\frac1{\mechanical{\Delta}}\right)^{n-d/2},
\tag{A.72}
$$
$$
\int\frac{d^d\mechanical{k}}{(2\pi)^d}
\frac{\mechanical{k}^2}{(\mechanical{k}^2-\mechanical{\Delta}+i\varepsilon)^n}
=\frac{i(-1)^{n-1}}{(4\pi)^{d/2}}
\frac d2
\frac{\Gamma(n-1-d/2)}{\Gamma(n)}
\left(\frac1{\mechanical{\Delta}}\right)^{n-1-d/2},
\tag{A.73}
$$
$$
\int\frac{d^d\mechanical{k}}{(2\pi)^d}
\frac{\mechanical{k}^\mu\mechanical{k}^\nu}{(\mechanical{k}^2-\mechanical{\Delta}+i\varepsilon)^n}
=\frac{i(-1)^{n-1}}{(4\pi)^{d/2}}
\frac{g^{\mu\nu}}2
\frac{\Gamma(n-1-d/2)}{\Gamma(n)}
\left(\frac1{\mechanical{\Delta}}\right)^{n-1-d/2}.
\tag{A.74}
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{k}_E,\mechanical{k}$ | $\unit{GeV}$ | Euclidean and Minkowski loop momenta | The momenta related by rotation of the time component. |
| $\mechanical{\Delta}$ | $\unit{GeV^2}$ | Positive denominator parameter | The mass-squared parameter in the Euclidean integral. |
