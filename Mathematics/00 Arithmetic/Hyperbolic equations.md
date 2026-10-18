---
title: "Hyperbolic equations"
catalogue_ids:
  - "1.6.4.5"
---

> [!TLDR]
> Express hyperbolic functions with exponentials, substitute a positive exponential, and solve the resulting algebraic equation.

## Define the functions before solving

The **hyperbolic functions** are combinations of the real exponential, not circular trigonometric functions with a different angle unit. For every real $x$, define

$$
\sinh x=\frac{e^x-e^{-x}}2,\qquad
\cosh x=\frac{e^x+e^{-x}}2,\qquad
\tanh x=\frac{\sinh x}{\cosh x}.
$$

The names are hyperbolic sine, cosine, and tangent. Here $e\approx2.71828$ is the natural exponential base, and $\ln$ is its inverse on positive numbers. Thus $\ln(e^x)=x$. Review [[Exponential and logarithmic equations]] for that inverse and for positive-exponential substitutions.

There is no degree or radian calculator setting for these real inputs. The definitions above specify the values directly. For example, at $x=\ln3$, $e^x=3$ and $e^{-x}=1/3$. Therefore $\sinh(\ln3)=4/3$, $\cosh(\ln3)=5/3$, and $\tanh(\ln3)=4/5$.

## Identities, signs, and ranges

Replacing $x$ by $-x$ shows $\sinh(-x)=-\sinh x$ and $\cosh(-x)=\cosh x$. Thus hyperbolic sine is odd and hyperbolic cosine is even. Expanding their defining squares gives

$$
\cosh^2x-\sinh^2x
=\frac{(e^x+e^{-x})^2-(e^x-e^{-x})^2}{4}=1.
$$

Consequently $(\cosh x,\sinh x)$ lies on the hyperbola $X^2-Y^2=1$, which explains the name. The minus sign differs from the circular identity $\cos^2x+\sin^2x=1$.

Since $e^x>0$, put $u=e^x$. The inequality $(u-1)^2\ge0$ gives $u+1/u\ge2$, so $\cosh x\ge1$, with equality only at $x=0$. Hyperbolic cosine takes every value in $[1,\infty)$. It has two real inverse inputs for each output greater than one, because it is even and increases for $x\ge0$.

Hyperbolic sine takes every real value and increases strictly: when $x$ increases, $e^x$ increases and $-e^{-x}$ increases too. Hyperbolic tangent can be written

$$
\tanh x=\frac{e^{2x}-1}{e^{2x}+1}.
$$

Its values lie strictly between $-1$ and $1$; they never equal either endpoint at a finite real input. These range restrictions decide whether an equation can have a real solution before any lengthy calculation. There is no full-turn periodic family as in circular trigonometry.

## Solve a hyperbolic sine equation

For $\sinh x=a$ with real $a$, set $u=e^x>0$. Since $e^{-x}=1/u$,

$$
\frac{u-1/u}{2}=a
\iff u^2-2au-1=0.
$$

The quadratic formula gives $u=a\pm\sqrt{a^2+1}$. Because $\sqrt{a^2+1}>|a|$, exactly one candidate is positive. Therefore the unique real solution is

$$
x=\ln\left(a+\sqrt{a^2+1}\right).
$$

This expression defines the real inverse hyperbolic sine, often written $\operatorname{arsinh}a$ or $\operatorname{asinh}a$. The notation $\sinh^{-1}a$ can be ambiguous; it means an inverse function in this context, not $1/\sinh a$.

## Worked example: a hyperbolic cosine equation

Solve $\cosh x=5/4$.

1. The target $5/4$ is greater than one, so two real solutions are possible.
2. Set $u=e^x>0$. The equation is $(u+1/u)/2=5/4$.
3. Multiply by $4u$, which is nonzero: $2u^2-5u+2=0$.
4. Factor $(2u-1)(u-2)=0$, giving $u=1/2$ or $u=2$.
5. Both are positive, so $x=\ln(1/2)=-\ln2$ or $x=\ln2$.
6. At either value, $e^x+e^{-x}=2+1/2=5/2$. Dividing by two confirms $5/4$.

More generally, $\cosh x=b$ has no real solution if $b<1$, the sole solution $0$ if $b=1$, and

$$
x=\pm\ln\left(b+\sqrt{b^2-1}\right)
$$

if $b>1$. The two positive exponential roots $b\pm\sqrt{b^2-1}$ multiply to one, so their logarithms are opposites. The function $\operatorname{arcosh}b$ conventionally selects the nonnegative answer; solving the equation still requires both signs when $b>1$.

## Solve a hyperbolic tangent equation

For $\tanh x=c$, first require $-1<c<1$. Put $v=e^{2x}>0$. Then $(v-1)/(v+1)=c$ gives $(1-c)v=1+c$. Hence

$$
x=\frac12\ln\left(\frac{1+c}{1-c}\right).
$$

This is the unique real solution, called $\operatorname{artanh}c$. If $c=1$, the equation would require $v-1=v+1$, which is impossible. An approach towards a limiting value is not an actual finite solution.

## Practice

1. Solve $\sinh x=3/4$ over the reals.
2. Solve $\tanh x=3/5$, and decide whether $\cosh x=-2$ has a real solution.

## Worked answers

1. The positive exponential root is $u=3/4+\sqrt{9/16+1}=3/4+5/4=2$. Thus $x=\ln2$. Check $(2-1/2)/2=3/4$.
2. The tangent formula gives $e^{2x}=(1+3/5)/(1-3/5)=4$. Thus $x=(\ln4)/2=\ln2$. Check $(4-1)/(4+1)=3/5$. The cosine equation has no real solution because every real $\cosh x$ is at least one.

## Reference

[NIST DLMF §4.28](https://dlmf.nist.gov/4.28) defines hyperbolic functions. The substitutions above derive their real inverse formulas directly from quadratic and linear equations.
