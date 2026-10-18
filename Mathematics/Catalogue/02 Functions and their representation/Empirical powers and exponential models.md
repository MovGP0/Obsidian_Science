---
title: "Empirical powers and exponential models"
catalogue_ids:
  - "2.16.2"
  - "2.16.2.1"
  - "2.16.2.2"
  - "2.16.2.6"
---

> [!TLDR]
> Powers, exponentials, and positive bell curves become simpler when logarithms turn products into sums.

## Choose a family with a reason

Begin with [[Choosing and rectifying empirical curves]]. An empirical family is useful when its shape and domain match the data. This lesson develops three families that can be fitted through logarithms. All logarithms below are natural logarithms. For logarithm rules, use [[Logarithms and their bases]].

Taking a logarithm requires a positive argument. A model that allows negative outputs needs a different treatment; do not replace $y$ by $|y|$ without explaining how the sign will be recovered. Likewise, a model for positive inputs is not automatically a formula on the whole real line.

## Power functions

The family $y=ax^b$ has coefficient $a$ and exponent $b$. Use $x>0$ for an arbitrary real exponent, and assume $a>0$ when fitting $\ln y$. It becomes

$$
\ln y=\ln a+b\ln x.
$$

For $b=1$ the output is proportional to the input. For $b=2$ it grows as the square. For $b=-1$ it decreases as the reciprocal. To interpret $b$, compare $x$ and $kx$:

$$
\frac{f(kx)}{f(x)}=k^b.
$$

The ratio depends on the factor $k$, not on the starting input $x$. This explains why ratios at multiplied input steps are a useful diagnostic.

For example, pairs $(2,12)$ and $(6,108)$ give $108/12=9$ when the input ratio is $3$. Hence $3^b=9$, $b=2$, and $a=12/4=3$. The resulting curve $3x^2$ predicts $48$ at $x=4$. A third observation tests that prediction rather than providing another free parameter.

## Exponential functions

Write the family as $y=ae^{bx}$, where $a>0$. It becomes

$$
\ln y=\ln a+bx.
$$

Here equal *additive* steps in $x$ give equal output ratios: $f(x+h)/f(x)=e^{bh}$. For $b>0$ the curve increases; for $b<0$ it decreases toward zero as $x$ increases. It has no nonzero horizontal baseline. If outputs approach a positive constant, a shifted family $c+ae^{bx}$ may be needed; one cannot take $\ln y$ and expect a line.

For pairs $(0,8),(2,2)$, the first gives $a=8$. The second gives $e^{2b}=1/4$, so $b=-\ln2$. Thus $y=8\cdot2^{-x}$. At $x=1$, the output is $4$. Notice that the halfway output is the geometric mean $\sqrt{8\cdot2}$, not the arithmetic mean $5$.

## Generalized Gaussian bell curves

The source catalogue's generalized Gaussian entry uses

$$
y=ae^{bx+cx^2},\qquad a>0.
$$

This is an exponential of a quadratic. Its logarithm $Y=\ln y$ is a quadratic in $x$, so three distinct inputs determine three coefficients in exact data. It is a bell only when $c<0$. Completing the square gives

$$
bx+cx^2=c(x-\mu)^2-\frac{b^2}{4c},\qquad
\mu=-\frac{b}{2c}.
$$

Therefore $y=Ae^{c(x-\mu)^2}$ with $A=ae^{-b^2/(4c)}$. The center is $\mu$, the peak is $A$, and the negative coefficient $c$ controls width. This is not the cumulative Gaussian integral and need not have total area one. The formula convention is checked against [Bronshtein and coauthors, section 2.16.2.6](https://djvu.online/file/GdI2fptBUdLpJ).

## Worked example: fit a symmetric bell

Suppose the outputs at $x=-1,0,1$ are $3/e,3,3/e$. Their logarithms are $\ln3-1,\ln3,\ln3-1$. Put $Y=\alpha+bx+cx^2$. The center point gives $\alpha=\ln3$. Subtract it from the two endpoint equations:

$$
-b+c=-1,\qquad b+c=-1.
$$

Adding gives $c=-1$; subtracting gives $b=0$. Thus $a=e^\alpha=3$ and $y=3e^{-x^2}$. At $x=2$ it predicts $3e^{-4}$, approximately $0.05495$. The fitted peak is at zero, consistent with the symmetric data.

## Limitations and useful checks

Three exact values can determine a bell model even when the next observation contradicts it. Check both tails and the sign of $c$. If $c>0$, the fitted curve rises without bound in both directions instead of forming a bell. When $c=0$, it reduces to an ordinary exponential. Repeated inputs with different outputs cannot lie exactly on any single-valued function; they require an error model.

For all three families, inspect residuals in the original coordinates. Taking logarithms changes how errors are weighted. A small logarithmic residual means a small multiplicative discrepancy, not necessarily a small absolute difference.

A fitted scale also depends on the input convention. Replacing $x$ by $10X$ in $ax^b$ gives $a10^bX^b$, so the exponent stays the same while the coefficient changes. In $ae^{bx}$ the rate changes to $10b$. Record the numerical input convention before comparing parameters from two tables.

## Practice

1. Fit $y=ax^b$ through $(1,5)$ and $(4,20)$ for positive $x$.
2. For $y=2e^{4x-x^2}$, find its center and peak by completing the square.

## Worked answers

1. At $x=1$, $a=5$. Then $20/5=4^b$, so $b=1$. The model is $y=5x$.
2. Since $4x-x^2=4-(x-2)^2$, the curve is $2e^4e^{-(x-2)^2}$. Its center is $2$ and its maximum is $2e^4$. The original coefficient $2$ is its value at zero, not its peak.
