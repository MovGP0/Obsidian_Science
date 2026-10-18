---
title: "Rings, ideals, and finite fields"
catalogue_ids:
  - "5.3.7"
  - "5.3.7.1"
  - "5.3.7.2"
  - "5.3.7.3"
  - "5.3.7.4"
---

> [!TLDR]
> Rings support addition and multiplication; ideals permit consistent remainders, and fields permit division by every nonzero element.

## Two operations on one set

Start with [[Operations semigroups and groups]]. This article uses **ring** to mean an associative ring with identity. Addition forms an abelian group, multiplication is associative and has an identity $1$, and multiplication distributes over addition on both sides. Multiplication need not commute. A **commutative ring** adds that requirement. The integers form a commutative ring; square matrices form a generally noncommutative ring.

A **field** is a commutative ring with $1\ne0$ in which every nonzero element has a multiplicative inverse. The rational, real, and complex numbers are fields. Integers are not: $2$ has no integer inverse. A ring can be closed under its two operations without containing every root of every polynomial. The phrase **algebraically closed field** has that stronger polynomial meaning. For example, $\mathbb C$ is algebraically closed; $\mathbb R$ is a field but $x^2+1$ has no real root.

## Subrings and ideals

A **subring** is a subset closed under addition, subtraction, and multiplication. We require it to contain the same identity as the parent ring. Some authors do not impose this identity condition; their terminology would count $2\mathbb Z$ as a subring of $\mathbb Z$. Under the convention here it is an ideal, not a subring with the same identity.

An **ideal** $I$ of a commutative ring is an additive subgroup that absorbs multiplication by every ring element: $r i\in I$ for all $r\in R$ and $i\in I$. In noncommutative rings one distinguishes left, right, and two-sided ideals. This article uses two-sided ideals when taking quotients. In $\mathbb Z$, multiples of any fixed integer $m$ form the ideal $m\mathbb Z$.

The absorption property makes remainders compatible with multiplication. If $a'=a+i$ and $b'=b+j$, where $i,j\in I$, then $a'b'-ab=aj+ib+ij\in I$. Thus replacing inputs by equivalent remainders does not change the product class. The quotient ring $R/I$ consists of additive classes $a+I$ with these well-defined operations.

## Homomorphisms and the quotient theorem

A **ring homomorphism** $f:R\to S$ preserves addition, multiplication, and identity. Its kernel $\{r:f(r)=0\}$ is an ideal. Its image is a subring of $S$. A bijective homomorphism is an isomorphism.

The first isomorphism theorem states $R/\ker f\cong\operatorname{im}f$. To see the mechanism, send the class $r+\ker f$ to $f(r)$. Different representatives differ by a kernel element, so they have equal images. Conversely, equal images imply that difference lies in the kernel. Hence the map is well-defined, one-to-one, onto the image, and preserves both operations.

For the remainder map $\mathbb Z\to\mathbb Z/5\mathbb Z$, the kernel is $5\mathbb Z$. The quotient has five classes. Multiplication by $2$ has inverse multiplication by $3$, because $2\cdot3\equiv1\pmod5$. Every nonzero class has an inverse when the modulus is prime. For composite modulus $6$, $2\cdot3\equiv0$ although neither class is zero; this is a zero-divisor obstruction to a field.

## Worked construction: a field with four elements

Start with the two-element field $\mathbb F_2=\{0,1\}$, where $1+1=0$. Introduce a symbol $a$ satisfying $a^2=a+1$. Every polynomial reduces to $u+va$ with $u,v\in\mathbb F_2$. The four elements are $0,1,a,a+1$.

This construction is $\mathbb F_2[x]/(x^2+x+1)$. The polynomial has no root in $\mathbb F_2$: substitution gives $1$ at both $0$ and $1$. A quadratic without a root over a field is irreducible, meaning it has no factorization into lower positive degrees. The quotient by an irreducible polynomial over a field is a field. Here inverses can also be checked directly: $1^{-1}=1$ and $a(a+1)=a^2+a=1$, so $a^{-1}=a+1$.

For example $(a+1)^2=a^2+2a+1=a^2+1=a$. The term $2a$ vanishes because $1+1=0$. This four-element field is different from the ring of remainders modulo $4$, which has characteristic four and contains zero divisors.

Finite fields have $p^k$ elements for a prime $p$ and integer $k\ge1$. There is a field of each such size, unique up to isomorphism. The extension construction uses an irreducible degree-$k$ polynomial over $\mathbb F_p$; an arbitrary polynomial will not suffice. These facts and the computational construction are discussed in [James Aspnes's finite-field notes](https://www.cs.yale.edu/homes/aspnes/pinewiki/FiniteFields.html).

## Finite fields and shift registers

A linear-feedback shift register is a deterministic rule on a finite list of field elements. Consider the binary state $(u,v,w)$ and update

$$
(u,v,w)\longmapsto(v,w,u+v),
$$

where addition is modulo $2$. Starting from $(1,0,0)$ gives

$$
100\to001\to010\to101\to011\to111\to110\to100.
$$

All seven nonzero states occur exactly once; $000$ stays fixed. The recurrence for successive entries is $s_{n+3}=s_n+s_{n+1}$, associated with $x^3+x+1$. This polynomial is primitive over $\mathbb F_2$: multiplication by a root cycles through the seven nonzero field elements. Primitive degree-$k$ polynomials give a maximal nonzero period $2^k-1$ with a nonzero start. Irreducibility alone does not always guarantee that maximal period. Such sequences are useful in coding and reproducible tests, but linear predictability prevents them from being secure secret generators on their own.

## Practice

1. Is $\mathbb Z/8\mathbb Z$ a field? Find an inverse of $3$, if one exists.
2. In the four-element field above, compute $(a+1)+a$ and $(a+1)a$. Then update the register state $011$.

### Worked answers

1. It is not a field: $2\cdot4\equiv0$ with nonzero factors. Some elements still have inverses: $3\cdot3=9\equiv1$, so $3^{-1}=3$.
2. Addition gives $a+1+a=1$. Multiplication gives $a^2+a=(a+1)+a=1$. The update $(0,1,1)\mapsto(1,1,1)$ uses feedback $0+1=1$, so the next register state is $111$.
