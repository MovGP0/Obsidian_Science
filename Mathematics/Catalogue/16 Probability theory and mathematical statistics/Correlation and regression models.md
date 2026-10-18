---
title: "Correlation and regression models"
catalogue_ids:
  - "16.3.4"
  - "16.3.4.1"
  - "16.3.4.2"
  - "16.3.4.3"
---

> [!TLDR]
> Correlation summarizes linear association; regression fits a conditional mean using one or more explanatory variables.

## Two different questions

Pairs $(x_i,y_i)$ can show association. Correlation asks how strongly the two variables vary together in a linear pattern. Regression asks how to describe or predict the mean response $Y$ at specified explanatory values. Neither calculation, by itself, establishes a causal effect. A third variable or selection rule can create an association.

Start with [[Samples and descriptive statistics]]. No matrix algebra is needed for the simple regression example. For several predictors, this lesson first describes a system of ordinary linear equations. A later matrix course provides a shorter notation for the same system.

## Linear correlation

For paired observations define

$$
S_{xx}=\sum_i(x_i-\bar x)^2,\quad
S_{yy}=\sum_i(y_i-\bar y)^2,\quad
S_{xy}=\sum_i(x_i-\bar x)(y_i-\bar y).
$$

When both spreads are positive, the Pearson sample correlation is $r=S_{xy}/\sqrt{S_{xx}S_{yy}}$. Its value lies between minus one and one by the Cauchy–Schwarz inequality. Positive values indicate an upward linear association; negative values indicate a downward one. A value near zero does not exclude a curved relationship. For instance the three pairs $(-1,1),(0,0),(1,1)$ have zero correlation but satisfy $y=x^2$ exactly. If either coordinate is constant, correlation is undefined because its denominator is zero.

The population analogue is $\rho=\operatorname{Cov}(X,Y)/(\sigma_X\sigma_Y)$ when both finite variances are positive. Swapping $X$ and $Y$ does not change correlation. Regression, in contrast, assigns distinct predictor and response roles.

## Fit a line by least squares

The line $\hat y=a+bx$ leaves residuals $e_i=y_i-a-bx_i$. Choose $a,b$ to minimize

$$
Q(a,b)=\sum_i(y_i-a-bx_i)^2.
$$

For any fixed $b$, the best intercept makes the average residual zero, giving $a=\bar y-b\bar x$. Substituting into $Q$ yields

$$
Q(b)=S_{yy}-2bS_{xy}+b^2S_{xx}.
$$

Complete the square. If $S_{xx}>0$, its minimum occurs at $b=S_{xy}/S_{xx}$, and $a=\bar y-b\bar x$. This derivation uses algebra alone. Least squares is a fitting definition; it does not require normally distributed observations just to calculate a line. See [NIST's linear least-squares reference](https://www.itl.nist.gov/div898/handbook/pmd/section1/pmd141.htm).

## Worked example

For pairs $(0,1),(1,2),(2,2)$, the means are $\bar x=1$ and $\bar y=5/3$. Calculate $S_{xx}=2$, $S_{xy}=1$, and $S_{yy}=2/3$. Thus $b=1/2$ and $a=7/6$. The fitted responses are $7/6,5/3,13/6$, so residuals are $-1/6,1/3,-1/6$. Their sum is zero, and their squared sum is $1/6$.

The correlation is $1/\sqrt{2(2/3)}=\sqrt3/2\approx0.8660$. The fitted line passes through $(\bar x,\bar y)$, as its intercept formula requires. The residual sum of squares is smaller than the total centred sum $2/3$. With an intercept, $R^2=1-\sum e_i^2/S_{yy}=3/4=r^2$ in this one-predictor case. This in-sample summary does not guarantee good predictions on new data.

## Statistical assumptions and limits

A usual model is $Y_i=\beta_0+\beta_1x_i+\varepsilon_i$, with fixed predictors, mean-zero independent errors, and common finite variance. These conditions justify standard variance calculations. Exact small-sample t and F inference adds normally distributed errors. The predictors themselves need not be normal. An estimated error variance is $s_e^2=\sum e_i^2/(n-2)$ for $n>2$; two parameters were fitted. Inspect residual patterns for curvature, changing spread, dependence, or influential points.

Predicting far outside the observed predictor range is extrapolation. The line can be a poor approximation there. A common predictor measurement error can also invalidate the usual fixed-predictor model. Always state which direction is being predicted: a line fitted to predict $Y$ from $X$ cannot generally be inverted to obtain the least-squares line for predicting $X$ from $Y$.

## Multidimensional regression

With $p$ predictors, write $\hat y_i=b_0+b_1x_{i1}+\cdots+b_px_{ip}$. Minimize the sum of squared residuals. Setting the residual sum and each predictor-weighted residual sum to zero gives $p+1$ linear equations for the coefficients. A unique solution requires that no model column is an exact linear combination of the others; in particular, the sample must supply enough independent information.

For the four predictor pairs $(0,0),(1,0),(0,1),(1,1)$ and responses $1,3,4,6$, the plane $\hat y=1+2x_1+3x_2$ fits every point. Hold $x_2$ fixed and increasing $x_1$ by one changes the fitted response by two. This is a conditional association, not a causal claim. If a second predictor were always twice the first, their separate coefficients could not be uniquely recovered: many coefficient pairs give the same fitted values. Near dependence can make estimated coefficients unstable even when uniqueness technically holds.

## Practice

1. Fit a line to $(0,2),(1,4),(2,6)$. Find its correlation.
2. In $\hat y=5-2x_1+4x_2$, calculate the prediction at $(3,2)$. Explain what the coefficient of $x_1$ describes.

> [!example]- Worked answers
> 1. The points satisfy $y=2+2x$. Thus $a=2,b=2$, all residuals vanish, and $r=1$ because both variables have positive spread and a perfect upward line.
> 2. The prediction is $5-6+8=7$. Holding $x_2$ fixed, a one-unit increase in $x_1$ changes the fitted response by minus two. This fitted relationship alone gives no causal interpretation.
