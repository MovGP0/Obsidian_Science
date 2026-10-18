---
title: "Inequalities between means"
catalogue_ids:
  - "1.4.2.3"
  - "1.4.2.4"
  - "1.4.2.5"
---

> [!TLDR]
> For positive numbers, the harmonic, geometric, arithmetic, and quadratic means occur in a fixed order, with equality when the inputs are equal.

## Four means of two positive numbers

A **mean** replaces several inputs with a representative value. Different questions require different means. For $a,b>0$, define

$$
H=\frac{2}{1/a+1/b}=\frac{2ab}{a+b},\qquad
G=\sqrt{ab},\qquad A=\frac{a+b}{2},\qquad
Q=\sqrt{\frac{a^2+b^2}{2}}.
$$

The letters denote the **harmonic**, **geometric**, **arithmetic**, and **quadratic** means. The quadratic mean is also called the root mean square. The positive-domain condition ensures that all four expressions are real and that the harmonic mean has a nonzero denominator. These formulas do not define a complete four-mean chain for arbitrary signed inputs.

The chain is

$$
\min(a,b)\le H\le G\le A\le Q\le\max(a,b).
$$

If $a\ne b$, every comparison in this two-input chain is strict. If $a=b$, all four means equal that common value. For example, if $0<a<b$, then $H>a$ because $2ab>a(a+b)$ is equivalent to $b>a$. Also $Q<b$ because $(a^2+b^2)/2<b^2$. The middle comparisons follow below.

## Arithmetic and geometric means

The square of any real number is nonnegative. In particular,

$$
(\sqrt a-\sqrt b)^2=a+b-2\sqrt{ab}\ge0.
$$

Divide by $2$ to get $G\le A$. Equality requires $\sqrt a=\sqrt b$, so it requires $a=b$. This is the two-term **arithmetic–geometric mean inequality**, or **AM–GM**.

For a positive integer $n$ and nonnegative real inputs $a_1,\ldots,a_n$, the general result is

$$
\sqrt[n]{a_1\cdots a_n}\le\frac{a_1+\cdots+a_n}{n}.
$$

The radical is the nonnegative $n$th root. Equality holds exactly when all inputs agree. One proof first builds the cases $2,4,8,\ldots$ by repeatedly applying the two-term result. To recover $n-1$ inputs from an established $n$-input case, append their arithmetic mean $A$. The $n$-input result gives $(a_1\cdots a_{n-1}A)^{1/n}\le A$. When $A>0$, raise to the power $n$ and divide by $A$; this gives the required $(n-1)$-input inequality. If $A=0$, all inputs are zero and the result is immediate. This downward step supplies every finite $n$ below a power of two.

## Arithmetic and quadratic means

For two real inputs, direct subtraction gives

$$
Q^2-A^2=\frac{(a-b)^2}{4}\ge0.
$$

Since $Q\ge0$, the correct signed-input conclusion is $|A|\le Q$. For positive inputs, this becomes $A\le Q$. Equality in $|A|\le Q$ requires $a=b$. For $n$ real inputs, put $A=(a_1+\cdots+a_n)/n$ and $Q=\sqrt{(a_1^2+\cdots+a_n^2)/n}$. Expand:

$$
\frac1n\sum_{i=1}^n(a_i-A)^2
=\frac1n\sum_{i=1}^n a_i^2-A^2\ge0.
$$

The symbol $\sum$ means to add the indicated terms. Thus the same bound $|A|\le Q$ holds for any finite real list. The difference between their squares measures how much the inputs vary around $A$.

## Harmonic and geometric means

For $a,b>0$, the identity $H=G^2/A$ follows from the definitions. From $G\le A$, division by positive $A$ gives $G/A\le1$. Multiply by $G>0$ to obtain $H\le G$. This completes the four-mean chain. For a longer positive list, apply AM–GM to the reciprocals: their arithmetic mean is at least $1/G$. Taking positive reciprocals gives $H\le G$ again.

## Worked example and a useful bound

Take $a=2$ and $b=8$. Compute each mean:

$$
H=\frac{32}{10}=3.2,\quad G=4,\quad A=5,\quad Q=\sqrt{34}\approx5.831.
$$

Hence $2<3.2<4<5<5.831<8$. To see a use of AM–GM, let positive $x,y$ satisfy $x+y=10$. Then $\sqrt{xy}\le5$, so $xy\le25$. Equality is attained at $x=y=5$. The bound is exact because an allowed pair reaches it.

## Practice

1. Find all four means of $4$ and $9$, and check their order.
2. For real $a=-2,b=-8$, compute $A,Q$. Explain why $G\le A$ is not a valid extension of the positive-input chain.

## Worked answers

1. $H=72/13\approx5.538$, $G=6$, $A=6.5$, and $Q=\sqrt{97/2}\approx6.964$. They satisfy $4<H<G<A<Q<9$.
2. $A=-5$ and $Q=\sqrt{34}$. The valid statement is $|A|=5\le\sqrt{34}$. Although $\sqrt{ab}=4$ is real for this pair, $4\le-5$ is false. A real square root alone does not remove the domain restriction of AM–GM.
