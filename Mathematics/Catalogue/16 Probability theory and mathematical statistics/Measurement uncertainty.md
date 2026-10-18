---
title: "Measurement uncertainty"
catalogue_ids:
  - "16.4"
  - "16.4.1"
  - "16.4.1.1"
  - "16.4.1.2"
  - "16.4.1.3"
  - "16.4.1.4"
  - "16.4.1.5"
  - "16.4.1.6"
---

> [!TLDR]
> Measurement uncertainty describes the spread of values reasonably assigned to a defined result; repeated observations alone do not remove common bias.

## Define the result and separate error from uncertainty

A measurand is the quantity intended to be measured. Define it before selecting a statistical formula: what object, condition, procedure, and averaging rule does the result concern? Here the examples use dimensionless reported values, so no particular physical unit is needed. [[Samples and descriptive statistics]] provides the mean and standard deviation used below.

Measurement error is a measured value minus a reference quantity value. The exact error is often unknown. Measurement uncertainty instead describes the dispersion of values assigned to the measurand on the basis of available information. A standard uncertainty is expressed as a standard deviation. It is nonnegative and is not a signed correction.

Traditional qualitative categories distinguish random variation between repeated observations from systematic effects that shift results in a consistent way under stated conditions. A known offset should be corrected. The correction itself can remain uncertain. A transcription mistake or a broken procedure is a problem to investigate, not automatically an extra random term that can be averaged away.

## Classification by method and by magnitude

Type A and Type B classify how uncertainty components are evaluated. Type A uses statistical analysis of observations. Type B uses other information, such as a calibration statement, resolution, previous data, or a justified probability model. These labels do not mean “random error” and “systematic error.” The same physical effect can be evaluated by either method in different circumstances. [NIST TN 1297](https://www.nist.gov/pml/nist-technical-note-1297) sets out this distinction.

For quantitative reporting, distinguish a signed error $e=x-x_{\mathrm{ref}}$, an absolute error magnitude $|e|$, a relative signed error $e/x_{\mathrm{ref}}$ when the reference is nonzero, and a standard uncertainty $u$. A percent relative error multiplies the relative value by 100. Relative forms become unstable or undefined near a zero reference. A stated maximum error bound, when justified, is not the same object as one standard deviation.

## Probability density of an error model

An additive model is $X=\theta+b+E$, where $\theta$ is the target value, $b$ is a correction-worthy offset, and $E$ is random variation with mean zero under the model. Normal variation is one possibility, not a universal law. If a rounding effect is modelled as uniform on $[-a,a]$, its density is $1/(2a)$ on that interval. Its mean is zero and its variance is

$$
\frac1{2a}\int_{-a}^a e^2\,de=\frac{a^2}{3}.
$$

Hence its standard uncertainty is $a/\sqrt3$. The uniform model is an assumption about available information. A bound alone does not prove a uniform distribution. See [NIST's Type B evaluation](https://www.nist.gov/pml/nist-technical-note-1297/nist-tn-1297-4-type-b-evaluation-standard-uncertainty).

## Direct observations of equal accuracy

Suppose $n$ observations have the same target mean, are independent, and have a common finite variance under stable conditions. Estimate the result by $\bar x$. The Type A standard uncertainty of that mean is

$$
u_A(\bar x)=\frac{s}{\sqrt n},\qquad
s^2=\frac1{n-1}\sum_i(x_i-\bar x)^2.
$$

For $9.8,10.0,10.2$, the mean is ten and the squared-deviation sum is $0.08$. Thus $s^2=0.04$, $s=0.2$, and $u_A=0.2/\sqrt3\approx0.1155$. This uncertainty concerns the average; the observed single-result spread is $0.2$. Correlated observations or drift require a different model. Common calibration uncertainty remains even when $n$ is large. [NIST's Type A guidance](https://www.nist.gov/pml/nist-technical-note-1297/nist-tn-1297-3-type-evaluation-standard-uncertainty) states the independent-repeat calculation.

## Direct observations of unequal accuracy

Suppose independent unbiased estimates $x_i$ concern the same fixed target, and their variances $u_i^2>0$ are known or defensibly assigned. For a weighted estimate $\hat\theta=\sum_iw_ix_i$ with $\sum_iw_i=1$, the variance is $\sum_iw_i^2u_i^2$. Minimizing this expression subject to the weight sum gives inverse-variance weights:

$$
w_i=\frac{u_i^{-2}}{\sum_j u_j^{-2}},\quad
\hat\theta=\frac{\sum_i x_i/u_i^2}{\sum_i1/u_i^2},\quad
u(\hat\theta)=\left(\sum_i1/u_i^2\right)^{-1/2}.
$$

The best-weight claim here means smallest variance among unbiased linear combinations under these assumptions. If the inputs share an offset, their covariance must be included and this formula alone is insufficient.

For estimates $10$ and $12$ with independent standard uncertainties one and two, weights are $0.8$ and $0.2$. The weighted estimate is $10.4$, with uncertainty $\sqrt{0.8^2(1)^2+0.2^2(2)^2}=\sqrt{0.8}\approx0.8944$. An unweighted average is eleven with uncertainty $\sqrt5/2\approx1.118$. Weighting helps only if the uncertainty model and common-target assumption are sound; strong disagreement can indicate an incomplete model.

## Reporting results with limits

Report the estimate, uncertainty type, evaluation method, assumptions, and any coverage statement. For example, “dimensionless estimate $10.40$, combined standard uncertainty $u_c=0.89$” defines the numerical uncertainty. Writing only $10.40\pm0.89$ leaves its meaning unclear.

Expanded uncertainty is $U=ku_c$, where $k$ is the coverage factor. A value $k=2$ gives about 95% coverage only under an adequate approximately normal model with suitable effective degrees of freedom. With limited normal repeat data, a t factor can be appropriate. A hard guarantee needs justified bounds instead. [NIST's expanded uncertainty guidance](https://www.nist.gov/pml/nist-technical-note-1297/nist-tn-1297-6-expanded-uncertainty) explains the distinction. Round the final uncertainty and result consistently, while keeping guard digits during calculations. [[Propagation and uncertainty budgets]] combines multiple components.

## Practice

1. Four independent repeated values have sample standard deviation $0.6$. Find the Type A uncertainty of their mean. Does this include a common uncertain offset?
2. A dimensionless rounding contribution is modelled as uniform on $[-0.3,0.3]$. Find its standard uncertainty.

> [!example]- Worked answers
> 1. The mean uncertainty is $0.6/\sqrt4=0.3$. It does not include an uncertain offset shared by all four values; that needs an additional component and its covariance structure.
> 2. The half-width is $a=0.3$, so $u=0.3/\sqrt3\approx0.1732$. The half-width $0.3$ is a bound in the assumed model, whereas $0.1732$ is a standard deviation.
