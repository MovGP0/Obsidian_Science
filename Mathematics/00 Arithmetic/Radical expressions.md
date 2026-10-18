---
title: "Radical expressions"
catalogue_ids:
  - "1.1.8"
---

> [!TLDR]
> Simplify expressions with roots by extracting perfect powers, combining equal radicals, and keeping all real-domain and sign restrictions.

## Roots and irrational expressions

The **principal square root** $\sqrt{a}$ is the non-negative real number whose square is $a$. It exists as a real number when $a\ge0$. Thus $\sqrt{9}=3$, whereas the equation $x^2=9$ has two solutions, $x=3$ and $x=-3$.

An **irrational number** cannot be written as a quotient of integers with nonzero denominator; $\sqrt{2}$ is an example. An **irrational algebraic expression**, in elementary algebra terminology, contains a variable under a root, such as $\sqrt{x+1}$ or $1/(\sqrt{x}-1)$. Its value need not always be irrational: at $x=3$, $\sqrt{x+1}=2$. This lesson uses real inputs and real roots.

For an even root $\sqrt[n]{a}$, require $a\ge0$ and choose the non-negative result. For an odd root, every real input is permitted and the result has the same sign as the input; for example, $\sqrt[3]{-8}=-2$. A root in a denominator must also be nonzero.

## Product rules and absolute values

For $a,b\ge0$, the square-root product rule is

$$
\sqrt{ab}=\sqrt a\sqrt b.
$$

The right side is non-negative, and its square is $ab$, so it is the principal root. For $a\ge0$ and $b>0$, the quotient rule is $\sqrt{a/b}=\sqrt a/\sqrt b$. Do not extend these real-number rules to negative radicands. For instance, $\sqrt{(-1)(-1)}=1$ is real, but the separate real roots $\sqrt{-1}$ do not exist.

Extract perfect-square factors: $\sqrt{72}=\sqrt{36\cdot2}=6\sqrt2$. With variables, signs matter:

$$
\sqrt{x^2}=|x|,
$$

where $|x|$ means $x$ for $x\ge0$ and $-x$ for $x<0$. The root is non-negative even when $x$ is negative. Thus $\sqrt{12x^2}=2|x|\sqrt3$, not always $2x\sqrt3$. For odd roots, no absolute value is needed: $\sqrt[3]{x^3}=x$ for every real $x$.

## Combine like radicals

After simplification, equal radical parts combine like equal variable powers:

$$
\begin{aligned}
3\sqrt{12}+\sqrt{27}-\sqrt3
&=3(2\sqrt3)+3\sqrt3-\sqrt3\\
&=8\sqrt3.
\end{aligned}
$$

But $\sqrt2+\sqrt3$ has different radical parts and cannot be combined this way. In general, $\sqrt{a+b}\ne\sqrt a+\sqrt b$. Taking $a=b=1$ gives $\sqrt2\ne2$, which shows the error directly.

## Rationalize a denominator

**Rationalizing** removes roots from a denominator by multiplying the fraction by a suitable form of $1$. For $a>0$,

$$
\frac1{\sqrt a}=\frac{\sqrt a}{a}.
$$

For a binomial denominator, use its **conjugate**, which changes the sign between its two terms. For example,

$$
\frac{2}{\sqrt5-1}
=\frac{2(\sqrt5+1)}{(\sqrt5-1)(\sqrt5+1)}
=\frac{\sqrt5+1}{2}.
$$

The difference-of-squares identity from [[Polynomials and identities]] makes the denominator $5-1=4$. The conjugate used here is nonzero. With variable denominators, check that a conjugate is nonzero before multiplying and keep the original exclusions. Rationalization changes the form, not the exact value or the original domain.

## Worked example: simplify and state the domain

Consider

$$
F(x)=\frac{\sqrt{x+1}-2}{x-3}.
$$

The root requires $x\ge-1$, and the denominator excludes $x=3$. The conjugate $\sqrt{x+1}+2$ is at least $2$ on that domain, so it is always nonzero. Multiply numerator and denominator by it:

$$
F(x)=\frac{(x+1)-4}{(x-3)(\sqrt{x+1}+2)}
=\frac1{\sqrt{x+1}+2},\qquad x\ge-1,\ x\ne3.
$$

Cancellation keeps the exclusion $x=3$. At $x=8$, the original value is $(3-2)/5=1/5$, which agrees with the new expression. At $x=3$, only the new formula alone has a value; the original remains undefined.

A root equation needs another check. Squaring both sides can introduce extra candidates because opposite numbers have the same square. For example, $\sqrt{x}=-2$ has no real solution: its left side is non-negative. Squaring gives the candidate $x=4$, but substitution into the original equation gives $2\ne-2$. Always check a candidate in the original root equation after any squaring step.

## Practice

1. Simplify $\sqrt{50y^2}-\sqrt{8y^2}$ for every real $y$.
2. Rationalize $3/(\sqrt7+2)$.
3. Give the real domain of $1/\sqrt{4-x}$ and simplify $\sqrt[3]{-54}$.

> [!example]- Worked answers
> 1. The terms become $5|y|\sqrt2$ and $2|y|\sqrt2$. Their difference is $3|y|\sqrt2$. Omitting the absolute value would fail for $y<0$.
> 2. Multiply by $(\sqrt7-2)/(\sqrt7-2)$. The denominator becomes $7-4=3$, so the result is $\sqrt7-2$.
> 3. The radicand must be strictly positive because the root is also a denominator. Thus $4-x>0$, or $x<4$. For the cube root, $-54=(-27)2$, so $\sqrt[3]{-54}=-3\sqrt[3]2$.
