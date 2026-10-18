---
title: "Polynomial roots and higher degrees"
catalogue_ids:
  - "1.6.2.5"
  - "1.6.3"
  - "1.6.3.1"
  - "1.6.3.2"
---

> [!TLDR]
> Factors, multiplicity, and conjugate pairs explain polynomial roots; higher degrees often require special structure or numerical approximation.

## Equations of nth degree

A polynomial equation of degree $n$ has the form $P(x)=a_nx^n+\cdots+a_1x+a_0=0$, with $a_n\ne0$. A **root** $r$ satisfies $P(r)=0$. Polynomial division gives

$$
P(x)=(x-r)Q(x)+P(r).
$$

The remainder is the value at $r$, because setting $x=r$ removes the product. Therefore $r$ is a root exactly when $x-r$ is a factor. This is the **factor theorem**. Each removal of a linear factor lowers the degree by one.

The **fundamental theorem of algebra** states that every nonconstant polynomial with complex coefficients has a complex root. Repeated factorization then gives exactly $n$ roots **counted with multiplicity** over the complex numbers. This is a theorem stated here, not proved by elementary factorization. There can be fewer than $n$ distinct values and fewer real roots. The zero polynomial is excluded. [[06.01 Complex arithmetic]] introduces complex numbers as $a+bi$, with $i^2=-1$.

## Multiplicity and general properties

If $(x-r)^m$ divides $P$ but $(x-r)^{m+1}$ does not, $r$ has **multiplicity** $m$. Close to a real root, write $P(x)=(x-r)^mQ(x)$ with $Q(r)\ne0$. The nonzero factor $Q$ keeps its sign sufficiently near $r$. An odd power of $x-r$ changes sign at $r$; an even power does not. Thus a graph crosses the horizontal axis at an odd-multiplicity root and touches without crossing at an even-multiplicity root.

![[arithmetic-equations-root-multiplicity.svg|**Fig. A.equations.2** The graph of (x + 2)(x − 1)² crosses at the simple root −2 and touches at the double root 1. Three roots counted with multiplicity give two distinct real values.]]

Figure A.equations.2 uses signs rather than slopes to explain this difference. A graph can suggest roots, but it does not prove exact values or distinguish very close roots reliably.

Expanding $a_n(x-r_1)\cdots(x-r_n)$ and comparing coefficients gives useful **Viète relations**:

$$
\sum_{j=1}^n r_j=-\frac{a_{n-1}}{a_n},\qquad
\prod_{j=1}^n r_j=(-1)^n\frac{a_0}{a_n}.
$$

Here $\sum$ means add all listed roots and $\prod$ means multiply them, including repetitions. These relations check a proposed complete root list. They do not by themselves determine each root.

## Equations with real coefficients

The **complex conjugate** of $z=u+vi$ is $\bar z=u-vi$. Conjugation preserves sums and products, and fixes real coefficients. Therefore, when all coefficients of $P$ are real,

$$
P(\bar z)=\overline{P(z)}.
$$

If $P(z)=0$, then $P(\bar z)=0$ too. Nonreal roots occur in conjugate pairs with equal multiplicities. A pair gives a real quadratic factor:

$$
(x-u-vi)(x-u+vi)=(x-u)^2+v^2.
$$

For example, roots $2+i$ and $2-i$ give $x^2-4x+5$. A real odd-degree polynomial has at least one real root, since an odd number of roots cannot consist entirely of nonreal pairs. Even degree does not guarantee real roots: $x^4+1>0$ for every real input. [[06.03 Conjugation and modulus]] explains conjugation in more detail.

## Fifth and higher degree: methods and limits

The quadratic, cubic, and quartic methods use **radicals**, meaning square roots, cube roots, and other integer-order roots, combined with arithmetic. The Abel–Ruffini theorem says that no finite general formula of this type solves every polynomial of degree five or higher. It does not say that each higher-degree equation is impossible to solve. Some factor immediately; others allow a useful substitution. A proof of this limit requires further algebra beyond this lesson. See [Skopenkov’s exposition of the Abel–Ruffini theorem](https://arxiv.org/abs/1508.03317).

For integer coefficients, first remove any factor $x^m$ and record the root zero with its multiplicity. The remaining polynomial has a nonzero constant coefficient. A rational root in lowest terms $u/v$ must then have $u$ dividing its constant coefficient and $v$ dividing its leading coefficient. Substitute $u/v$ and multiply by $v^n$ to see these divisibility conditions. They give a finite candidate list, not a guarantee of a rational root. An irrational or nonreal root will not appear on that list.

When exact factors are unavailable, numerical methods can approximate real roots. **Bisection** starts with two inputs where a polynomial has opposite signs. It evaluates the midpoint and retains a half-interval whose endpoints still have opposite signs. Continuity guarantees at least one root in that interval. Each step halves the interval width. The method can miss even-multiplicity roots because their signs need not change, and one bracket need not contain every root.

For $P(x)=x^5-x-1$, $P(1)=-1$ and $P(2)=29$. At $1.5$, $P=5.09375>0$, so retain $[1,1.5]$. At $1.25$, $P=0.8017578125>0$, so retain $[1,1.25]$. Further steps locate a root near $1.1673$; this decimal is an approximation, not an exact radical expression.

## Worked example: a solvable fifth-degree equation

Solve $x^5-5x^3+4x=0$.

1. Remove the common factor: $x(x^4-5x^2+4)=0$.
2. The factor $x$ gives the root $0$.
3. In the quartic factor set $z=x^2$. Then $z^2-5z+4=(z-1)(z-4)=0$.
4. Recover $x=\pm1,\pm2$. The complete root list is $-2,-1,0,1,2$.
5. Check by factoring $P=x(x-1)(x+1)(x-2)(x+2)$. Five linear factors give all five roots. Their sum is zero and their product is zero, as the coefficients require.

## Practice

1. List the roots and multiplicities of $(x-3)^2(x+1)(x^2+4)=0$. Check their sum.
2. A real monic cubic has roots $-1$ and $2+i$. Find its third root and its polynomial.

## Worked answers

1. The roots are $3$ twice, $-1$, $2i$, and $-2i$. There are five roots with multiplicity. Their sum is $3+3-1+2i-2i=5$. Consequently the coefficient of $x^4$ in the monic polynomial is $-5$.
2. Real coefficients require the root $2-i$. The polynomial is $(x+1)((x-2)^2+1)=(x+1)(x^2-4x+5)=x^3-3x^2+x+5$. It is the unique monic cubic with these three roots.
