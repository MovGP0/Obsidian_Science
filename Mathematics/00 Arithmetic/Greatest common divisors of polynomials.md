---
title: "Greatest common divisors of polynomials"
catalogue_ids:
  - "1.1.6.5"
---

> [!TLDR]
> The polynomial Euclidean algorithm finds common factors by repeated division; the last nonzero remainder gives the greatest common divisor.

## What greatest means here

A nonzero polynomial $D$ **divides** a polynomial $P$ if $P=DS$ for some polynomial $S$. A **common divisor** of $P$ and $Q$ divides both. A greatest common divisor, written $\gcd(P,Q)$, contains all their shared polynomial factors with the greatest powers that divide both. “Greatest” refers to divisibility and degree, not to the numerical value at one input.

This lesson uses rational coefficients. Real coefficients also permit the same division method. Nonzero constant factors can always be divided out in these coefficient sets. Thus both $x-1$ and $5x-5$ describe the same common factor apart from a constant. We choose the **monic** form: the leading coefficient is $1$. This makes the nonzero greatest common divisor unique. If integer coefficients are required with no fractions allowed, common integer factors need separate attention.

Read [[Factoring polynomials]] for factorization and [[Rational expressions and polynomial division]] for the division steps used below.

## First method: compare known factors

Suppose

$$
P=(x-1)^3(x+2),\qquad Q=(x-1)^2(x+3).
$$

The shared factor is $x-1$. Its smaller exponent is $2$, so $\gcd(P,Q)=(x-1)^2$. The factors $x+2$ and $x+3$ are not shared. This method works well when factorizations are already known. The Euclidean algorithm avoids the need to find every factor first.

## Why division preserves the common divisors

Polynomial division gives

$$
P=QS+R,\qquad \deg R<\deg Q
$$

when $R\ne0$ and $Q\ne0$. If $D$ divides both $P$ and $Q$, it divides $P-QS=R$. Conversely, if $D$ divides $Q$ and $R$, it divides $QS+R=P$. Therefore the pairs $(P,Q)$ and $(Q,R)$ have exactly the same common divisors.

Replace the old pair by the divisor and remainder, and divide again. Each nonzero remainder has smaller degree than the previous divisor. Degrees cannot decrease indefinitely through non-negative integers, so the process stops. When a division gives remainder zero, the last nonzero remainder divides the preceding polynomial. Working back through the equations shows that it divides both starting polynomials.

## Worked example: repeated division

Find the greatest common divisor of

$$
P=x^3-3x+2,\qquad Q=x^2-1.
$$

The leading term $x^3$ divided by $x^2$ is $x$. Subtract $xQ=x^3-x$ from $P$:

$$
P=xQ+(-2x+2).
$$

Now divide $Q$ by $R=-2x+2$. The first quotient term is $-x/2$. Subtracting $(-x/2)R=x^2-x$ leaves $x-1$. The next quotient term is $-1/2$, and $(-1/2)R=x-1$, so the remainder becomes zero:

$$
Q=\left(-\frac{x}{2}-\frac12\right)(-2x+2)+0.
$$

The last nonzero remainder is $-2x+2$. Divide it by its leading coefficient $-2$ to make it monic:

$$
\gcd(P,Q)=x-1.
$$

As a direct check, $P=(x-1)^2(x+2)$ and $Q=(x-1)(x+1)$. Exactly one copy of $x-1$ is shared.

## Constants, zero, and a useful consequence

If the last nonzero remainder is a nonzero constant, the monic greatest common divisor is $1$. The two polynomials have no nonconstant common factor and are called **coprime**. A polynomial can share no factors with another polynomial even when both have positive degree.

For $P\ne0$, every divisor of $P$ also divides the zero polynomial because $0=D\cdot0$. Thus $\gcd(P,0)$ is the monic form of $P$. This lesson leaves $\gcd(0,0)$ undefined, since there is no nonzero common divisor of greatest degree. State a different convention explicitly if another source uses one.

The greatest common divisor identifies all factors that can cancel in a rational expression. Cancellation still keeps the original denominator restrictions. A polynomial greatest common divisor concerns exact symbolic divisibility; matching approximate roots from a calculator is not a reliable substitute.

When you write each division line, check it by multiplication: divisor times quotient plus remainder must recover the dividend. This local check is useful because a sign error in an early remainder changes all later divisions. Also check that every nonzero remainder has smaller degree than its divisor. If it does not, that division is not finished yet.

## Practice

1. Find the monic greatest common divisor of $x^2-1$ and $x^2-3x+2$ by factoring.
2. Use division to find $\gcd(x^2+1,x+1)$ over the rational coefficients.

> [!example]- Worked answers
> 1. The factorizations are $(x-1)(x+1)$ and $(x-1)(x-2)$. Their monic greatest common divisor is $x-1$.
> 2. Division gives $x^2+1=(x+1)(x-1)+2$. Next, $x+1=2(x/2+1/2)+0$. The last nonzero remainder is the constant $2$. Its monic form is $1$, so the polynomials are coprime.
