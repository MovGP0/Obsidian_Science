---
title: "Exponential and logarithmic equations"
catalogue_ids:
  - "1.6.4"
  - "1.6.4.1"
  - "1.6.4.2"
  - "1.6.4.3"
---

> [!TLDR]
> Use inverse functions or replace a repeated exponential or logarithm with a new unknown, then retain the original domain when solving back.

## Reduction of transcendental equations

An equation is **transcendental** when it contains functions of the unknown that are not built from a finite number of algebraic operations and roots. Typical examples use an exponential, a logarithm, or a trigonometric function. This does not mean its solution is necessarily a transcendental number. For example, $2^x=4$ has the integer solution $x=2$.

Some transcendental equations become algebraic after a **substitution**. A substitution gives a repeated expression a temporary name. Solve the equation for that new unknown, impose its range restriction, and then solve back for the original unknown. For example, $2^{2x}=(2^x)^2$, so setting $u=2^x$ replaces two exponentials with $u^2$ and $u$. The replacement is useful because $u$ satisfies a polynomial equation.

This method does not work for every transcendental equation. Mixed expressions such as $2^x=x+3$ usually need approximation or more advanced functions. Do not claim a polynomial reduction just because one term has become algebraic.

## Exponentials and their inverses

For a fixed base $a>0$, $a\ne1$, the real exponential $a^x$ is positive. It increases strictly if $a>1$ and decreases strictly if $0<a<1$. Thus each positive output comes from exactly one real input. The exponent laws give

$$
a^{x+y}=a^xa^y,\qquad a^{-x}=1/a^x,\qquad a^{2x}=(a^x)^2.
$$

The **logarithm** $\log_a b$ is the exponent needed to produce $b$: $a^x=b$ means $x=\log_a b$. A real logarithm requires $b>0$. The natural logarithm $\ln b$ uses the standard base $e\approx2.71828$. It satisfies $\ln(e^x)=x$ and $e^{\ln b}=b$ for $b>0$.

For example, $3^{2x-1}=20$ gives $2x-1=\log_3 20$, and hence $x=(1+\log_3 20)/2$. If the equation were $3^{2x-1}=-20$, it would have no real solution because the left side is positive. Negative bases require separate conventions for exponents and are outside the real-exponential method here. [[03.04 Exponential and logarithmic functions]] explains the functions and their laws in more detail.

## Worked example: a quadratic in an exponential

Solve $4^x-5\cdot2^x+4=0$ over the reals.

1. Rewrite $4^x=2^{2x}=(2^x)^2$.
2. Set $u=2^x$. Record $u>0$.
3. Solve $u^2-5u+4=0$. It factors as $(u-1)(u-4)=0$.
4. Both values $u=1$ and $u=4$ meet $u>0$.
5. Solve back: $2^x=1$ gives $x=0$, and $2^x=4$ gives $x=2$.
6. Check: at zero, $1-5+4=0$; at two, $16-20+4=0$.

If the polynomial for $u$ also produced a negative root, it would not correspond to any real $x$. This rejection comes from the range of the substituted expression. It is part of the method, not an optional final check.

## Logarithmic equations and domain restrictions

For positive arguments $u,v$, logarithm rules are

$$
\log_a u+\log_a v=\log_a(uv),\qquad
\log_a u-\log_a v=\log_a(u/v).
$$

To see the product rule, write $u=a^r$ and $v=a^s$. Then $uv=a^{r+s}$, so its logarithm is $r+s$. Likewise $\log_a(u^k)=k\log_a u$ for $u>0$ and real $k$. There is no rule that changes $\log_a(u+v)$ into the sum of two logarithms.

Solve $\log_2 x+\log_2(x-2)=3$. First require $x>0$ and $x-2>0$, hence $x>2$. The product rule gives $\log_2(x(x-2))=3$. Convert to exponential form:

$$
x(x-2)=2^3=8
\iff x^2-2x-8=(x-4)(x+2)=0.
$$

The candidates are $4$ and $-2$. Reject $-2$ because its original logarithms are undefined over the reals. At $4$, the left side is $\log_2 4+\log_2 2=2+1=3$. The solution is $4$. Keeping only the combined-product restriction $x(x-2)>0$ would incorrectly admit negative inputs at the domain stage.

Logarithms can also be the repeated expression. In $(\ln x)^2-3\ln x+2=0$, require $x>0$ and set $u=\ln x$. Then $(u-1)(u-2)=0$, so $x=e$ or $x=e^2$. A logarithm can take every real output, so no extra sign restriction on $u$ is needed.

## Limits and checks

An inverse function removes a function only on its proper domain. Taking logarithms of both sides requires both sides to be positive. Applying a logarithm to a sum does not separately remove exponentials from its terms. If a substitution leaves two unrelated expressions, inspect whether there is an identity that connects them; otherwise the equation has not yet become polynomial.

Distinguish exact values such as $\ln7$ from rounded decimal outputs. Substitute exact expressions where possible, and use decimals only for a stated approximation. [[Equation forms and safe transformations]] explains why the original equation remains the final test.

## Practice

1. Solve $e^{2x}+e^x-6=0$ over the reals.
2. Solve $\ln(x+1)-\ln(x-1)=\ln3$.

## Worked answers

1. Set $u=e^x>0$. Then $u^2+u-6=(u+3)(u-2)=0$. Reject $u=-3$, retain $u=2$, and obtain $x=\ln2$. Check $e^{2\ln2}+e^{\ln2}-6=4+2-6=0$.
2. Require $x>1$. Combine the logarithms to get $\ln((x+1)/(x-1))=\ln3$. Since the logarithm is one-to-one on positive inputs, $(x+1)/(x-1)=3$. Thus $x+1=3x-3$ and $x=2$. It meets the domain and gives $\ln3-\ln1=\ln3$.

## Reference

[OpenStax, Exponential and logarithmic equations](https://openstax.org/books/algebra-and-trigonometry-2e/pages/6-6-exponential-and-logarithmic-equations) provides further practice with inverse functions, quadratic substitutions, and original-domain checks.
