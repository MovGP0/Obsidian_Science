---
title: "Complex arithmetic in Cartesian form"
---

> [!TLDR]
> Use the rules of complex arithmetic to add, multiply, and divide, then collect the real and imaginary parts.

Chapter 1 — Complex Numbers. Exercise 1. **Difficulty: Basic.**

Back to [[01 Complex Numbers/09 Exercises#Exercise 1|the chapter exercise index]].

## Question

Calculate the following expressions. Write each result in the form $a+\mathrm{i}b$.

**(a)**

$$
(4-3\mathrm{i})+(1+7\mathrm{i}).
$$

**(b)**

$$
(2+\mathrm{i})(3-2\mathrm{i}).
$$

**(c)**

$$
\frac{1}{1+\mathrm{i}}.
$$

**(d)**

$$
\left(\frac{1+\mathrm{i}}{1-\mathrm{i}}\right)^2.
$$

## Worked solution

### (a) Add the real and imaginary components

Addition acts on the two components separately:

$$
(4-3\mathrm{i})+(1+7\mathrm{i})
=(4+1)+\mathrm{i}(-3+7)=5+4\mathrm{i}.
$$

### (b) Expand the product

Multiply every term in the first bracket by every term in the second bracket. Then use $\mathrm{i}^2=-1$:

$$
\begin{aligned}
(2+\mathrm{i})(3-2\mathrm{i})
&=6-4\mathrm{i}+3\mathrm{i}-2\mathrm{i}^2\\
&=6-\mathrm{i}+2=8-\mathrm{i}.
\end{aligned}
$$

### (c) Make the denominator real

Multiply the numerator and denominator by the conjugate $1-\mathrm{i}$. This changes the form of the fraction but not its value:

$$
\frac{1}{1+\mathrm{i}}
=\frac{1-\mathrm{i}}{(1+\mathrm{i})(1-\mathrm{i})}
=\frac{1-\mathrm{i}}{1-\mathrm{i}^2}
=\frac12-\frac12\mathrm{i}.
$$

### (d) Simplify the quotient before squaring

The conjugate of $1-\mathrm{i}$ is $1+\mathrm{i}$, so

$$
\frac{1+\mathrm{i}}{1-\mathrm{i}}
=\frac{(1+\mathrm{i})^2}{(1-\mathrm{i})(1+\mathrm{i})}
=\frac{1+2\mathrm{i}+\mathrm{i}^2}{2}
=\mathrm{i}.
$$

Thus the square is $\mathrm{i}^2=-1$.

## Answer

**(a)** $5+4\mathrm{i}$; **(b)** $8-\mathrm{i}$; **(c)** $\frac12-\frac12\mathrm{i}$; **(d)** $-1+0\mathrm{i}$.
