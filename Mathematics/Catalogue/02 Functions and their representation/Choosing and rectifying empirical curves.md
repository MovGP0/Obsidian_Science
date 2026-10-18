---
title: "Choosing and rectifying empirical curves"
catalogue_ids:
  - "2.16"
  - "2.16.1"
  - "2.16.1.1"
  - "2.16.1.2"
  - "2.16.1.3"
---

> [!TLDR]
> An empirical formula describes observed pairs; a suitable change of coordinates can reveal its parameters and its limits.

## From pairs to a model

A table of pairs $(x_i,y_i)$ gives outputs at selected inputs. An **empirical curve** is a formula selected to describe these pairs. Its constants are **parameters**. In $y=a+bx$, the input $x$ changes within the table; $a$ and $b$ remain fixed for one fitted curve. A fitted formula is a mathematical description, not proof that the same rule applies to every possible input.

You need equation solving, powers, and logarithms. Review [[Linear and quadratic equations]] and [[Logarithms and their bases]] if necessary. No calculus is needed here. The aim is to decide what to fit before using a more advanced numerical method.

## A practical procedure

First check the table. Record the permitted input interval, whether zero or negative outputs occur, and whether entries are exact or rounded. Plot the points on ordinary axes. Next select a simple family consistent with the shape and any stated restrictions. Determine its parameters. Finally compare predictions with all available observations, including points not used to determine parameters.

Distinguish **interpolation**, between observed inputs, from **extrapolation**, outside their range. Both use a formula, but extrapolation adds a stronger assumption about unknown behavior. Two models that agree closely between $1$ and $3$ can differ greatly at $20$.

## Compare shapes before fitting

Equal increases in $y$ at equal steps of $x$ suggest a straight line. Equal ratios of positive $y$ values at equal steps of $x$ suggest an exponential. If doubling positive $x$ multiplies $y$ by the same factor at several starting points, a power law is plausible. A peak can suggest a quadratic locally, but a positive bell over a large interval suggests another family.

These tests suggest candidates; finite data do not identify one unique rule. The points $(1,2),(2,4),(3,8)$ fit an exponential, but a quadratic can also pass through all three. A fourth point is useful evidence. Do not select a high-degree polynomial solely because it passes through every recorded point.

## Rectification means changing coordinates

Here **rectification** means transforming a curved relation into a straight one. It does not mean finding the length of a curve. Suppose $y=ax^b$ with $a>0$, $x>0$. Taking natural logarithms gives

$$
Y=A+bX,\qquad X=\ln x,\quad Y=\ln y,\quad A=\ln a.
$$

Thus the transformed points should lie near a line. Its slope gives $b$, and its intercept gives $A$; recover $a=e^A$. For $y=ae^{bx}$ use $X=x$, $Y=\ln y$ instead. The transformation must match the proposed model. A straight semilog plot and a straight log-log plot imply different formulas.

![[catalogue-ch02c-rectification.svg|**Fig. C.ch02c.1** The pairs for y = 2x² form a straight line after both coordinates are replaced by base-two logarithms.]]

In the right panel the horizontal steps represent multiplication by two in $x$. The vertical steps represent multiplication by two in $y$. The line rises two steps for each horizontal step, so its slope is $2$.

## Determine parameters and check residuals

For two transformed points $(X_1,Y_1),(X_2,Y_2)$ with different $X$ values,

$$
b=\frac{Y_2-Y_1}{X_2-X_1},\qquad A=Y_1-bX_1.
$$

If there are more observations than parameters, they usually do not lie exactly on one curve. Define the **residual** at input $x_i$ by $r_i=y_i-f(x_i)$. Positive residuals mean that the observed output is above the prediction. Look for a pattern, not only a small sum. Residuals that change from positive to negative and back can indicate a missed bend.

Least squares selects parameters that minimize a sum of squared residuals. Fitting $\ln y$ minimizes discrepancies in logarithms, which emphasizes relative error. Fitting $y$ minimizes discrepancies in the original outputs. These are different problems for rounded or noisy data. The [NIST discussion of nonlinear least squares](https://www.itl.nist.gov/div898/handbook/pmd/section1/pmd142.htm) explains why the model and error assumptions matter.

## Worked example

Take $(1,3),(2,12),(4,48)$ and suppose a power law is suitable. From the first two pairs,

$$
b=\frac{\ln(12/3)}{\ln(2/1)}=2,\qquad a=\frac{3}{1^2}=3.
$$

The third prediction is $3(4)^2=48$, so its residual is zero. At $x=3$ the prediction is $27$, an interpolation. At $x=10$ it is $300$, an extrapolation whose validity the three pairs alone cannot establish.

## Practice

1. A line passes through $(2,7)$ and $(5,16)$. Find it and calculate the residual at a recorded pair $(4,14)$.
2. A positive model gives outputs $5,15,45$ at inputs $0,1,2$. Which simple family is suggested? Determine its constants.

## Worked answers

1. The slope is $(16-7)/(5-2)=3$, and the intercept is $7-3(2)=1$. The model is $y=1+3x$. At $x=4$ it predicts $13$, so the residual is $14-13=1$.
2. Consecutive output ratios are $3$. Choose $y=ae^{bx}$. At $x=0$, $a=5$. At $x=1$, $e^b=3$, so $b=\ln3$. Thus $y=5\cdot3^x$. Equal ratios support this candidate but do not prove it beyond the table.
