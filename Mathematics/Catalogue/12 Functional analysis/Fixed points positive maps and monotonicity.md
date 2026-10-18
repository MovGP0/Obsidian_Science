---
title: "Fixed points, positive maps, and monotonicity"
catalogue_ids:
  - "12.8.4"
  - "12.8.5"
  - "12.8.6"
  - "12.8.7"
---

> [!TLDR]
> Compactness, positivity, and monotonicity provide different tools for proving that nonlinear equations have solutions.

## Prerequisite route

Read [[Complete metrics and contraction maps]], [[Compactness weak convergence and Fredholm equations]], [[Extension separation and reflexivity]], and [[Nonlinear derivatives and Newton iteration]]. A **fixed point** satisfies $T(x)=x$. A **convex set** contains the whole segment between each pair of its points. Throughout this lesson the spaces and operators are real. The finite-dimensional examples can be understood with algebra and continuity alone.

## Schauder fixed-point principle

The contraction principle requires $\|Tx-Ty\|\le q\|x-y\|$ for one $q<1$. It proves existence, uniqueness, and convergence of iteration on a complete invariant set. Many useful continuous maps do not satisfy this strict distance reduction.

A standard **Schauder theorem** says: if $C$ is a nonempty closed bounded convex subset of a Banach space, $T:C\to C$ is continuous, and $T(C)$ has compact closure, then $T$ has a fixed point. Another version assumes $C$ itself compact and convex, requiring only continuity. Neither version promises uniqueness or convergence of $x_{n+1}=T(x_n)$. [Taylor, Appendix B](https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2020/08/nlellip.pdf#page=184)

For $T(x)=1-x$ on $[0,1]$, all hypotheses hold. The fixed point is $1/2$. But starting iteration at $0$ gives $0,1,0,1,\ldots$, which does not converge. This is a useful distinction between an existence theorem and a numerical method.

In an infinite-dimensional space, closed and bounded does not imply compact. One must show relative compactness of the image separately. Continuous finite-rank maps often provide simple examples: their bounded images lie in a finite-dimensional subspace.

## Leray–Schauder theory

One continuation form is as follows. Let $H:[0,1]\times X\to X$ be continuous and compact, meaning that images of bounded sets have compact closure. Assume $H(0,x)=x_0$ is independent of $x$. If all solutions of $x=H(t,x)$, for $0\le t\le1$, satisfy a common bound $\|x\|<R$, then $H(1,\cdot)$ has a fixed point. The bound must hold for every intermediate parameter, not only for $t=1$. The theorem allows a simple equation to be deformed into the desired one. [Taylor, Theorem B.5](https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2020/08/nlellip.pdf#page=185)

For a worked scalar example, take $H(t,x)=t\tanh x$. The hyperbolic tangent is $(e^x-e^{-x})/(e^x+e^{-x})$ and satisfies $|\tanh x|<1$. Every solution of $x=H(t,x)$ has $|x|<1$, so $R=2$ gives a common bound. Continuity and compactness hold in the scalar space, and $H(0,x)=0$. The theorem guarantees a fixed point at $t=1$. Directly, $x=0$ is one. The example shows how to check the bound without already finding every solution.

The wider theory uses **Leray–Schauder degree** for $I-T$ when $T$ is compact. Degree is an integer attached to an equation on a bounded open region, provided there are no solutions on its boundary. Nonzero degree implies a solution inside, and degree stays unchanged during suitable deformations with no boundary solutions. It is a topological count, not a count of all roots with multiplicity in the elementary polynomial sense. Constructing it requires further topology. [Teschl, chapter 11 outline](https://www.mat.univie.ac.at/~gerald/ftp/book-nlfa/)

## Positive nonlinear operators

A **cone** $P$ in a real vector space contains sums and nonnegative scalar multiples of its elements and satisfies $P\cap(-P)=\{0\}$. A closed cone defines an order: $u\le v$ when $v-u\in P$. In $C[0,1]$, use the cone of pointwise nonnegative functions.

A nonlinear map is **positive** if it maps $P$ into $P$. It is **order-preserving** if $u\le v$ implies $Tu\le Tv$. Positivity alone does not imply order preservation. On nonnegative scalars $T(x)=1/(1+x)$ is positive but reverses order.

For $u\in C[0,1]$, set $Tu=1+\tfrac12u^2$ pointwise. This map is positive and order-preserving on the cone, since $0\le u\le v$ implies $u^2\le v^2$. But it has no real fixed point at any coordinate: $x=1+x^2/2$ would require $(x-1)^2+1=0$. Thus positivity does not ensure a fixed point. An invariant bounded region or another existence condition is still needed.

## Monotone operators in Banach spaces

A different meaning of monotonicity uses the continuous dual. For $A:X\to X^*$, write $\langle f,x\rangle=f(x)$ for evaluation, not an inner product. The operator is **monotone** if

$$
\langle Au-Av,u-v\rangle\ge0\quad\text{for all }u,v.
$$

It is **strongly monotone** if the left side is at least $c\|u-v\|^2$ with fixed $c>0$. Do not confuse this with order preservation in a cone. The output here is a functional, and the defining comparison uses evaluation.

A useful existence theorem is the **Browder–Minty theorem**. In a real separable reflexive Banach space, an everywhere-defined monotone, hemicontinuous, coercive operator $A:X\to X^*$ is onto. Separable means the space has a countable dense subset. Reflexive means its canonical map into the continuous bidual is onto, as explained in the prerequisite lesson. Hemicontinuity means that $t\mapsto\langle A(u+tv),w\rangle$ is continuous for all fixed $u,v,w$. Coercivity here means $\langle Au,u\rangle/\|u\|\to\infty$ as $\|u\|\to\infty$. Strict monotonicity also gives uniqueness. This is an advanced theorem; the stated hypotheses are part of the result. [Fritz, JKU lecture notes](https://numa.jku.at/media/filer_public/ff/80/ff80a871-94c4-4785-8314-028a46d185ed/lecturenotes.pdf)

For $A(u)=u+u^3$ on $\mathbb R$, direct factorization gives

$$
(A(u)-A(v))(u-v)
=(u-v)^2(1+u^2+uv+v^2)\ge(u-v)^2.
$$

The last inequality uses $u^2+uv+v^2=(u+v/2)^2+3v^2/4\ge0$. The operator is strongly monotone and continuous. Its coercivity quotient is $|u|+|u|^3$, which tends to infinity. Thus every equation $u+u^3=b$ has exactly one solution. For $b=2$ that solution is $u=1$.

Strong monotonicity also gives stability: if $Au=b$ and $Av=d$, then $c\|u-v\|^2\le\|b-d\|\|u-v\|$, so $\|u-v\|\le\|b-d\|/c$. This proves sensitivity control without explicitly solving the nonlinear equation.

## Practice

1. Explain why Schauder applies to $T(x)=x^2$ on $[0,1]$. Does it give uniqueness?
2. Prove that $A(x)=3x+x^3$ is strongly monotone with constant $3$. What solution-difference bound follows for $A(u)=b$ and $A(v)=d$?

> [!example]- Worked answers
> 1. The interval is nonempty, closed, bounded, and convex. The map is continuous and sends the interval into itself, whose closure is compact. It has fixed points $0$ and $1$, so uniqueness fails.
> 2. $(A(u)-A(v))(u-v)=(u-v)^2(3+u^2+uv+v^2)\ge3(u-v)^2$. Hence $3|u-v|^2\le|b-d||u-v|$. Divide when $u\ne v$; the result $|u-v|\le|b-d|/3$ also holds when they are equal.
