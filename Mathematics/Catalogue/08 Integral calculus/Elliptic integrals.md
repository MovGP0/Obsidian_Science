---
title: "Elliptic integrals"
catalogue_ids:
  - "8.1.4.3"
---

> [!TLDR]
> Elliptic integrals name useful functions beyond elementary antiderivatives, including the function which gives an ellipse's arc length.

## Why introduce a new function

Read [[Radical substitutions and binomial integrals]] and [[08.03 The fundamental theorem]]. Calling an integral “nonelementary” does not mean that it has no value or no antiderivative. It means that a finite expression using the usual elementary functions is insufficient. A definite integral can define a new function as precisely as a power series or an equation can.

An ellipse with semiaxes $a\ge b>0$ has parameterization $x=a\cos t$, $y=b\sin t$. A small change $dt$ gives a small length approximately $\sqrt{(dx/dt)^2+(dy/dt)^2}\,dt$. Thus its perimeter is

$$
L=4\int_0^{\pi/2}\sqrt{a^2\sin^2t+b^2\cos^2t}\,dt.
$$

By replacing $t$ with $\pi/2-t$ and taking out $a$, this becomes $4a\int_0^{\pi/2}\sqrt{1-k^2\sin^2t}\,dt$, with $k=\sqrt{1-b^2/a^2}$. The appearance of an ellipse explains the name. The theory also treats many algebraic integrals unrelated to drawing an ellipse.

## Legendre's three forms

Use a real **modulus** $0\le k<1$ and a real **amplitude** $\phi$. Define

$$
\begin{aligned}
F(\phi,k)&=\int_0^\phi\frac{dt}{\sqrt{1-k^2\sin^2t}},\\
E(\phi,k)&=\int_0^\phi\sqrt{1-k^2\sin^2t}\,dt,\\
\Pi(n;\phi,k)&=\int_0^\phi\frac{dt}{(1-n\sin^2t)\sqrt{1-k^2\sin^2t}}.
\end{aligned}
$$

These are the first, second, and third kinds. For the third kind, $n<1$ is a simple sufficient condition to avoid real poles for every amplitude. Larger $n$ requires interval restrictions or an explicitly different continuation or principal-value convention. This lesson uses ordinary real integrals and the positive square root. These definitions follow [NIST DLMF §19.2](https://dlmf.nist.gov/19.2).

The **complete** forms use $\phi=\pi/2$: $K(k)=F(\pi/2,k)$, $E(k)=E(\pi/2,k)$, and $\Pi(n,k)=\Pi(n;\pi/2,k)$. The repeated letter $E$ is conventional; its argument list distinguishes complete and incomplete forms. Some software uses the parameter $m=k^2$ instead of the modulus $k$. Entering $k$ where $m$ is expected gives a different answer. Always inspect the program's definition.

For $k=0$, the first and second incomplete integrals both equal $\phi$, and their complete values equal $\pi/2$. This checks the circle case: if $a=b$, then $k=0$ and $L=4a(\pi/2)=2\pi a$. As $k\to1^-$, $K(k)$ diverges, whereas $E(k)\to1$. The finite second-kind limit does not permit treating first-kind endpoints as harmless.

## Worked example: an algebraic form

Consider

$$
I(x)=\int_0^x\frac{du}{\sqrt{(1-u^2)(1-u^2/4)}},
\qquad -1<x<1.
$$

Set $u=\sin t$, using $t=\arcsin u\in(-\pi/2,\pi/2)$. Then $du=\cos t\,dt$ and $\sqrt{1-u^2}=\cos t>0$. Cancellation gives

$$
I(x)=F(\arcsin x,1/2).
$$

Differentiate this expression to check it. The derivative of $F$ in its first argument is $1/\sqrt{1-k^2\sin^2\phi}$. Multiply by $(\arcsin x)'=1/\sqrt{1-x^2}$ to recover the original integrand. The lower value is zero because $F(0,k)=0$.

## Approximate an ellipse without a black box

For $a=2,b=\sqrt3$, we have $k=1/2$. Expand $\sqrt{1-z}=1-z/2-z^2/8-\cdots$ with $z=k^2\sin^2t$. Integrating the first terms gives

$$
L=2\pi a\left(1-\frac{k^2}{4}-\frac{3k^4}{64}-\cdots\right).
$$

Using terms through $k^4$ gives $L\approx4\pi(1-1/16-3/1024)\approx11.744$. This is a truncated approximation, not an exact expression or a certified error bound. The omitted corrections are negative here, so this truncation is above the true perimeter. Numerical quadrature gives about $11.7397$. For $k$ close to one, the first few terms give poorer accuracy; use controlled quadrature or a dedicated elliptic-integral method.

## Recognize the form without overclassifying it

The substitution $u=\sin t$ converts the first kind to an integral with the square root of a quartic polynomial in the denominator. More generally, integrals involving square roots of cubic or quartic polynomials lead to elliptic forms when the polynomial has distinct roots. This is a useful recognition guide, not a claim that every expression with such a root is nonelementary. A repeated root can simplify the algebra, and a numerator can make the integrand an exact elementary derivative.

For example, $\int x\,dx/\sqrt{1-x^4}$ is elementary despite the quartic: put $v=x^2$ and obtain $\arcsin(v)/2+C$ on $|x|<1$. The factor $x$ supplies the needed derivative. In contrast, removing that factor produces a standard elliptic pattern. Inspect both the polynomial and the numerator before deciding that a new function is needed. The distinction prevents the name of a special function from replacing actual method selection.

## Practice

1. Express the perimeter of $a=3,b=2$ in terms of a complete elliptic integral.
2. Evaluate $F(\phi,0)$ and $\Pi(0;\phi,k)$. Explain the second result.

## Worked answers

1. Compute $k=\sqrt{1-4/9}=\sqrt5/3$. The perimeter is $12E(\sqrt5/3)$. It lies between $4b=8$ and $2\pi a=6\pi$; these rough bounds are checks, not a formula.
2. At $k=0$, the first-kind integrand is $1$, so $F(\phi,0)=\phi$. At $n=0$, the extra third-kind factor is $1$, so $\Pi(0;\phi,k)=F(\phi,k)$ directly from the definitions.
