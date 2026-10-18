---
title: "Sobolev spaces and weak derivatives"
catalogue_ids:
  - "12.3.2.3"
---

> [!TLDR]
> A Sobolev norm measures a function and its weak derivatives, so limits can retain derivative information even when ordinary smoothness is lost.

## Measure both values and slopes

Start with [[Norms Banach spaces and series]]. For calculus, use [[Differential calculus - Overview]] and [[Integral calculus - Overview]]. The concrete examples below need only derivatives of powers and integration by parts. The general definition uses the Lebesgue integral, which extends the ordinary integral to a larger class of functions.

To see the motivation without functions, compare two lists of values on three equally spaced points. The lists $(0,1,0)$ and $(0,-1,0)$ have the same Euclidean size, but their successive differences point in opposite directions. A norm on values alone does not directly record slopes. For functions, a **Sobolev norm** measures both the function and selected derivatives. It is useful when limits must control more than total size.

For a continuously differentiable real function on an interval $I=(a,b)$, consider

$$
\|u\|_{H^1(I)}^2=\int_I|u(x)|^2\,dx+\int_I|u'(x)|^2\,dx.
$$

The first term measures the values and the second measures the slopes. Completing a suitable function class in this norm leads naturally to functions that need not have an ordinary derivative at every point. Weak derivatives give an exact way to describe those limits.

## Equal almost everywhere

A statement holds **almost everywhere** if it can fail on a set of Lebesgue measure zero. A single point and every countable set have measure zero. Changing a function at one point does not change its integral. Therefore an integral norm cannot distinguish all pointwise functions: two functions equal almost everywhere must represent the same element.

For $1\le p<\infty$, $L^p(I)$ consists of these equivalence classes of measurable functions with finite norm $(\int_I|u|^p)^{1/p}$. Here measurable means compatible with the sets on which Lebesgue measure is defined; continuous and piecewise continuous functions are examples. For $p=\infty$, use the **essential supremum**, the smallest bound valid almost everywhere. This differs from an ordinary maximum because exceptional zero-measure sets are ignored.

You can calculate all the examples below using ordinary integrals. The equivalence-class convention remains necessary even in these examples, so that a zero norm means the zero element.

## Weak derivative through integration by parts

A smooth test function $\varphi\in C_c^\infty(I)$ has derivatives of every order and vanishes outside a closed bounded subset strictly inside $I$. Its vanishing near the endpoints removes boundary terms. For smooth $u$, integration by parts gives

$$
\int_I u(x)\varphi'(x)\,dx=-\int_I u'(x)\varphi(x)\,dx.
$$

This identity can make sense even when $u'$ does not exist pointwise everywhere. A locally integrable function $v$ is the **weak derivative** of $u$ when

$$
\int_I u\varphi'=-\int_I v\varphi
\qquad\text{for every }\varphi\in C_c^\infty(I).
$$

Locally integrable means integrable on each compact subinterval. The definition does not permit a different $v$ for each test function. When a weak derivative exists, it is unique up to equality almost everywhere.

## Define Sobolev spaces

For an open interval $I$ and $1\le p\le\infty$, define $W^{1,p}(I)$ as the functions in $L^p(I)$ whose weak first derivative also belongs to $L^p(I)$. For finite $p$, use

$$
\|u\|_{W^{1,p}}=\left(\|u\|_p^p+\|u'\|_p^p\right)^{1/p}.
$$

For $p=\infty$, use $\max(\|u\|_\infty,\|u'\|_\infty)$. These spaces are Banach. The case $p=2$ is written $H^1$ and is Hilbert. Higher $W^{k,p}(\Omega)$ require all weak partial derivatives of total order at most $k$ in $L^p(\Omega)$, with $\Omega$ open in $\mathbb R^n$. These definitions and completeness results are given in [John K. Hunter's PDE notes, Sections 3.1–3.5](https://math.ucdavis.edu/~hunter/pdes/pde_notes.pdf#page=53). Their full measure-theoretic proofs are beyond this introductory lesson.

## Worked example: a corner is permitted

On $I=(-1,1)$, take $u(x)=|x|$. Its ordinary derivative is $-1$ for $x<0$ and $1$ for $x>0$, and is undefined at zero. Split the test integral into the two halves:

$$
\int_{-1}^1|x|\varphi'(x)\,dx
=\int_{-1}^0\varphi(x)\,dx-\int_0^1\varphi(x)\,dx.
$$

Integration by parts gives this result; all endpoint terms vanish, including the term at zero because $|0|=0$. The result is $-\int_{-1}^1v\varphi$ for $v(x)=\operatorname{sgn}(x)$. The value of $v$ at zero is irrelevant. Thus $u\in H^1(-1,1)$ and

$$
\|u\|_{H^1}^2=2\int_0^1x^2\,dx+\int_{-1}^1 1\,dx
=\frac23+2=\frac83.
$$

The corner is allowed because the derivative remains an integrable function. A jump is different. For $u(x)=0$ on $x<0$ and $1$ on $x>0$, the test integral equals $-\varphi(0)$. Its derivative is point evaluation as a distribution, not a locally integrable function. Hence the jump is not in $W^{1,p}(-1,1)$ for $p\ge1$. Removing one point from the formula does not remove the jump's effect on integration by parts.

## Practice

1. Compute the squared $H^1(0,1)$ norm of $u(x)=x^2$.
2. For $u(x)=x^\alpha$ on $(0,1)$ with $\alpha>0$, when is $u\in H^1(0,1)$?

## Worked answers

1. The derivative is $2x$. Thus $\|u\|_{H^1}^2=\int_0^1x^4\,dx+4\int_0^1x^2\,dx=1/5+4/3=23/15$.
2. The function itself is square integrable for every positive $\alpha$. Its derivative is $\alpha x^{\alpha-1}$, whose squared integral is finite exactly when $2\alpha-2>-1$. Thus $\alpha>1/2$ is necessary and sufficient. At $\alpha=1/2$, the derivative's squared integral contains $\int_0^1x^{-1}\,dx$, which diverges.
