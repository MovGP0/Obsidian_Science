---
title: "Expansion around d = 4"
---

> [!TLDR]
> Expansion near four dimensions separates the regulator pole from finite logarithms. Modified minimal subtraction groups the pole with fixed gamma-function constants.

Set $d=4-2\varepsilon$, with $\mechanical{\Delta}$ of mass dimension two.
The fundamental integral (A.72) with $n=2$ gives
$$
\energy{\mu}^{2\varepsilon}
\int\frac{d^d\mechanical{k}}{(2\pi)^d}
\frac1{(\mechanical{k}^2-\mechanical{\Delta}+i\varepsilon_F)^2}
=\frac{i}{(4\pi)^2}
\left[
\frac1\varepsilon-\gamma_E+\ln(4\pi)
-\ln\frac{\mechanical{\Delta}}{\energy{\mu}^2}
+\mathcal O(\varepsilon)
\right].
\tag{A.88}
$$
Define the common combination
$$
\frac1{\hat{\varepsilon}}
\equiv\frac1\varepsilon-\gamma_E+\ln(4\pi).
\tag{A.89}
$$
The expression then becomes
$$
\energy{\mu}^{2\varepsilon}
\int\frac{d^d\mechanical{k}}{(2\pi)^d}
\frac1{(\mechanical{k}^2-\mechanical{\Delta}+i\varepsilon_F)^2}
=\frac{i}{(4\pi)^2}
\left[
\frac1{\hat{\varepsilon}}
-\ln\frac{\mechanical{\Delta}}{\energy{\mu}^2}
+\mathcal O(\varepsilon)
\right].
\tag{A.90}
$$

> [!note]
> The source leaves the factor $\energy{\mu}^{2\varepsilon}$ implicit on the integral side. It is shown here so that the dimensions and the logarithm agree. The dimensional regulator $\varepsilon$ is distinct from the infinitesimal Feynman prescription $\varepsilon_F$.
>
> The source labels (A.90) with the modified minimal-subtraction scheme. As displayed, it is still the regulated expression before subtraction: it contains the pole combination $1/\hat{\varepsilon}$. Modified minimal subtraction removes this combination.

## Common loop integrals

**Table A.3** Common loop integrals in $d=4-2\varepsilon$, written with the modified minimal-subtraction pole convention. Define
$$
L\equiv\ln\frac{\mechanical{\Delta}}{\energy{\mu}^2},
\qquad
\int_k\equiv
\energy{\mu}^{2\varepsilon}\int\frac{d^d\mechanical{k}}{(2\pi)^d}.
$$
Each denominator below has the Feynman prescription. The pole and finite terms are shown unless another order is stated.

| Integral | Result |
| --- | --- |
| $\displaystyle\int_k\frac1{(\mechanical{k}^2-\mechanical{\Delta})^2}$ | $\displaystyle\frac{i}{(4\pi)^2}\left(\frac1{\hat{\varepsilon}}-L\right)$ |
| $\displaystyle\int_k\frac1{(\mechanical{k}^2-\mechanical{\Delta})^3}$ | $\displaystyle\frac{-i}{2(4\pi)^2}\frac1{\mechanical{\Delta}}\bigl(1+\mathcal O(\varepsilon)\bigr)$ |
| $\displaystyle\int_k\frac{\mechanical{k}^2}{(\mechanical{k}^2-\mechanical{\Delta})^3}$ | $\displaystyle\frac{i}{(4\pi)^2}\left(\frac1{\hat{\varepsilon}}-L-\frac12\right)$ |
| $\displaystyle\int_k\frac{\mechanical{k}^\mu\mechanical{k}^\nu}{(\mechanical{k}^2-\mechanical{\Delta})^3}$ | $\displaystyle\frac{i\,g^{\mu\nu}}{4(4\pi)^2}\left(\frac1{\hat{\varepsilon}}-L\right)$ |
| $\displaystyle\int_k\frac1{\mechanical{k}^2-\mechanical{\Delta}}$ | $\displaystyle\frac{i\mechanical{\Delta}}{(4\pi)^2}\left(\frac1{\hat{\varepsilon}}-L+1\right)$ |

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{k}$ | $\unit{GeV}$ | Minkowski loop momentum | The integration momentum in the expanded loop integrals. |
| $\mechanical{\Delta}$ | $\unit{GeV^2}$ | Denominator mass-squared parameter | The positive parameter in the propagator denominator and logarithm. |
| $\energy{\mu}$ | $\unit{GeV}$ | Renormalization reference scale | The scale in the regulated measure and dimensionless logarithm. |
