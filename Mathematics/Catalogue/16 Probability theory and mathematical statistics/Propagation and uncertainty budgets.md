---
title: "Propagation and uncertainty budgets"
catalogue_ids:
  - "16.4.2"
  - "16.4.2.1"
  - "16.4.2.2"
---

> [!TLDR]
> An uncertainty budget combines input spreads, sensitivities, and covariances under a stated measurement model.

## A calculated result has uncertain inputs

Suppose a result is calculated as $Y=f(X_1,\ldots,X_m)$. The estimated inputs are $x_i$, their standard uncertainties are $u_i$, and their covariances are $u_{ij}$. The reported central calculation is $y=f(x_1,\ldots,x_m)$. A measurement model should include corrections and all significant influences, not merely the final arithmetic relation.

Read [[Measurement uncertainty]] first. For the propagation formula, a derivative means local sensitivity: how much the output changes for a small change in one input. [[07.08 Linear approximation]] develops this idea. For $f(x,z)=xz$, changing $x$ a little while holding $z$ fixed changes the output by approximately $z$ times that change, so the sensitivity to $x$ is $z$.

## Gaussian law of error propagation

Near the estimated inputs, a first-order approximation is

$$
Y-y\approx\sum_i c_i(X_i-x_i),\qquad
c_i=\left.\frac{\partial f}{\partial X_i}\right|_{X=x}.
$$

Apply the variance rule for a linear combination to obtain

$$
u_c^2(y)\approx\sum_i c_i^2u_i^2+2\sum_{i<j}c_ic_ju_{ij}.
$$

This is often called the Gaussian law of error propagation or the law of propagation of uncertainty. It is exact for a linear function with the specified covariance model. For nonlinear functions, it is a first-order approximation. Despite the historical name, the variance combination itself does not require normally distributed inputs. Normality can matter for a later coverage approximation. [NIST's propagation appendix](https://www.nist.gov/pml/nist-technical-note-1297/nist-tn-1297-appendix-law-propagation-uncertainty) explicitly states its Taylor approximation and covariance terms.

If inputs are independent, their covariance terms vanish. Uncorrelated inputs also have zero covariance, although independence is stronger. If $u_i,u_j>0$, write $u_{ij}=\rho_{ij}u_iu_j$ with correlation coefficient $-1\le\rho_{ij}\le1$. A complete covariance matrix must be mathematically consistent; assigning arbitrary pairwise correlations can produce an impossible model.

## Worked uncertainty budget

Let dimensionless inputs have estimates $x=4,z=3$, independent standard uncertainties $u_x=0.1,u_z=0.2$, and result $y=xz=12$. The sensitivities are $c_x=z=3$ and $c_z=x=4$. The budget is

| Input | Standard uncertainty | Sensitivity | Variance contribution |
| --- | --- | --- | --- |
| $x$ | $0.1$ | $3$ | $3^2(0.1)^2=0.09$ |
| $z$ | $0.2$ | $4$ | $4^2(0.2)^2=0.64$ |

The first-order combined variance is $0.73$, giving $u_c\approx0.8544$. The larger contribution comes from $z$, even though its sensitivity is only slightly larger: both sensitivity and input uncertainty matter. Improving only $x$ has limited effect on the total.

The product supplies a useful exact check. For independent inputs with means $x,z$ and variances $u_x^2,u_z^2$,

$$
\operatorname{Var}(XZ)=z^2u_x^2+x^2u_z^2+u_x^2u_z^2.
$$

This follows by factoring $E[X^2Z^2]$ into $E[X^2]E[Z^2]$ and subtracting $x^2z^2$. Here the exact variance is $0.7304$, so the omitted term is small. This comparison checks the first-order approximation rather than assuming its accuracy.

## Correlation and common effects

For a sum or difference, propagation gives

$$
u^2(X\pm Z)=u_X^2+u_Z^2\pm2\operatorname{Cov}(X,Z).
$$

Suppose $X=A+B$ and $Z=C+B$, with independent contributions $A,C,B$. The shared term $B$ cancels exactly in $X-Z=A-C$. It does not cancel in $X+Z=A+C+2B$. Treating $X$ and $Z$ as independent would miss both effects. Similarly, averaging repeated results with a common calibration offset reduces the independent repeat component but leaves the common component.

Relative propagation for a product or quotient follows by dividing the first-order expression by $y^2$, provided the estimated factors and output are nonzero. For independent $Y=X/Z$,

$$
\left(\frac{u_Y}{|y|}\right)^2\approx
\left(\frac{u_X}{|x|}\right)^2+
\left(\frac{u_Z}{|z|}\right)^2.
$$

The quotient can be unstable when the uncertain denominator approaches zero. A compact relative formula does not repair that instability or guarantee that output moments exist.

## Error analysis and limitations

An analysis should separate mistakes, known corrections, hard bounds, and standard uncertainties. If $|\Delta x_i|\le a_i$ are justified bounds, a local worst-case estimate is $|\Delta y|\lesssim\sum_i|c_i|a_i$. This adds absolute contributions, unlike a root-sum-of-squares standard uncertainty. A rigorous nonlinear bound needs control of the function over the full allowed input region, not just derivatives at its centre.

First-order propagation can fail for large relative uncertainties, strong curvature, truncation, or a zero sensitivity at the expansion point. For example, if $Y=X^2$ and $x=0$, the first derivative is zero, so the first-order variance estimate is zero. Yet a varying $X$ produces a varying square. Higher-order analysis or a justified simulation is needed. [[Monte Carlo simulation]] shows how to propagate complete joint input distributions through a nonlinear model; its sampling noise and model assumptions must also be reported.

Before reporting, check the definition of the measurand, omitted inputs, correlation, scale and rounding, stability of the calculation, and whether the proposed coverage factor is justified. Keep the component table so another reader can reproduce the total.

## Practice

1. Independent dimensionless inputs have uncertainties $0.3$ and $0.4$. Find the standard uncertainty of their sum and compare it with a hard-bound sum using bounds of those same numerical sizes.
2. Two inputs each have standard uncertainty one and correlation $0.8$. Find the standard uncertainty of their difference.

> [!example]- Worked answers
> 1. The standard uncertainty is $\sqrt{0.3^2+0.4^2}=0.5$. If the numbers instead denote hard bounds, the linear sum bound is $0.3+0.4=0.7$. These statements use different meanings for the inputs.
> 2. The covariance is $0.8(1)(1)=0.8$. The difference variance is $1+1-2(0.8)=0.4$, so its standard uncertainty is $\sqrt{0.4}\approx0.6325$. The positive correlation makes common variation cancel in the difference.
