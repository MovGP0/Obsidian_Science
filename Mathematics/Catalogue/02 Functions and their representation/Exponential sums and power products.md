---
title: "Exponential sums and power products"
catalogue_ids:
  - "2.6.4"
  - "2.6.6"
---

> [!TLDR]
> Sums of exponentials combine competing terms, while a power times a decaying exponential can create a single peak.

## Add outputs, not exponents

Consider $f(x)=A e^{bx}+C e^{dx}$ with real constants. Each term is defined for every real input, so their sum is continuous on $\mathbb R$. At zero the output is $A+C$. The two terms may reinforce or cancel. The expression is not generally equal to one exponential: $e^u+e^v\ne e^{u+v}$.

If $b=d$, combine the coefficients to get $(A+C)e^{bx}$. If the rates differ, their relative importance changes with the input. For example, for $f(x)=2e^{3x}+5e^x$,

$$
\frac{f(x)}{2e^{3x}}=1+\frac52e^{-2x}\longrightarrow1
\quad\text{as }x\to+\infty.
$$

Thus the faster-growing term determines the positive-end asymptotic form. At $x\to-\infty$, the slower-decaying term $5e^x$ instead dominates. “Largest exponent wins” needs a stated direction and nonzero coefficient.

## Find zeros by taking a ratio

Assume $A,C\ne0$ and $b\ne d$. A zero satisfies

$$
A e^{bx}=-C e^{dx},\qquad
e^{(b-d)x}=-\frac CA.
$$

The right side must be positive, so the coefficients must have opposite signs. If they do, strict monotonicity of the exponential gives exactly one zero:

$$
x=\frac{\ln(-C/A)}{b-d}.
$$

If the coefficients have the same sign, no zero is possible. With a constant term or more exponentials, this simple formula may no longer apply; substitutions sometimes reduce the equation to polynomial algebra.

The symmetric sum $e^x+e^{-x}$ has a minimum at zero. Let $u=e^x>0$. Then $u+1/u\ge2$, since $(\sqrt u-1/\sqrt u)^2\ge0$. Equality requires $u=1$, so $x=0$. This explains a curved minimum without using derivatives.

## Multiply a power by an exponential

For $g(x)=A x^p e^{cx}$, take $x>0$ unless a particular exponent permits a larger real domain; see [[Radical and real-power graphs]]. The output is positive when $A>0$. Its logarithm is

$$
\ln g(x)=\ln A+p\ln x+cx.
$$

This separates the two sources of variation. If $p>0$ and $c<0$, the function tends to zero both as $x\to0^+$ and as $x\to+\infty$. In the latter limit, exponential decay outweighs any fixed power. The curve must rise and then fall; its unique peak is at $x=-p/c$.

Here is a direct proof that avoids assuming differentiation. Write $c=-k$, $k>0$, and $u=kx/p$. Then

$$
\frac{g(x)}{g(p/k)}=\bigl(u e^{1-u}\bigr)^p\le1.
$$

The inequality follows from $\ln u\le u-1$ for $u>0$, with equality only at one. One elementary proof of that logarithm bound uses the integral definition $\ln u=\int_1^u dt/t$: compare $1/t$ with one separately on $u\ge1$ and $u\le1$. This is a short optional bridge to integration. Alternatively, accept this standard logarithm inequality and verify the resulting maximum by the ratio above.

If both $p,c$ are positive, both factors increase and there is no such peak. If both are negative, both factors decrease for positive inputs. If $p<0<c$, the analogous competition gives a minimum at $-p/c$. These descriptions apply to the positive-input branch and $A>0$; negative $A$ reverses maximum and minimum.

## A substitution for a special exponential sum

If all rates are integer multiples of a common rate, let $u=e^{kx}>0$. For instance, $e^{2x}-5e^x+6=0$ becomes $u^2-5u+6=0$, with roots two and three. Both are positive, so they give $x=\ln2$ and $x=\ln3$. A negative polynomial root would be rejected because no real input makes $e^x$ negative. The substitution introduces a useful algebraic equation but also introduces a range restriction that must accompany its solutions.

## Worked example: cancellation and a peak

First solve $3e^{2x}-12e^x=0$. Factor out the always-positive $3e^x$ to obtain $e^x-4=0$, so $x=\ln4$. The output is negative before this input and positive after it.

Next study $g(x)=x^2e^{-x}$ for $x>0$. The peak location is $x=2$, with value $4e^{-2}$. Set $u=x/2$. Then

$$
\frac{g(x)}{4e^{-2}}=u^2e^{2-2u}
=\bigl(u e^{1-u}\bigr)^2\le1.
$$

The value approaches zero toward both domain ends, and equality in the bound holds only at $u=1$. The factor $x^2$ initially raises the curve, but cannot overcome the eventual exponential decay. The formula also extends to zero with value zero; that extension changes the stated domain.

## Practice

1. Solve $5e^{3x}+2e^x=0$ over the real numbers.
2. Find the maximum of $h(x)=3x e^{-2x}$ on $x>0$ and its limiting values at the two ends.

## Worked answers

1. Both terms are positive for every real input, so their sum cannot vanish. Taking a logarithm of a negative ratio would be invalid in this real problem.
2. Here $p=1$, $k=2$, so the peak is at $x=p/k=1/2$. Substitution gives $3/(2e)$. The limit at zero from the right is zero, and the positive-infinite-end limit is also zero because exponential decay exceeds the linear factor.
