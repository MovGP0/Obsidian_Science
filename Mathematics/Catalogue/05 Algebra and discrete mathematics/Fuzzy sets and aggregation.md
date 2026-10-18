---
title: "Fuzzy sets and aggregation"
catalogue_ids:
  - "5.9"
  - "5.9.1"
  - "5.9.1.1"
  - "5.9.1.2"
  - "5.9.1.3"
  - "5.9.2"
  - "5.9.2.1"
  - "5.9.2.2"
  - "5.9.2.3"
  - "5.9.2.4"
  - "5.9.2.5"
---

> [!TLDR]
> A fuzzy set assigns each object a degree of membership; aggregation rules combine those degrees under explicitly chosen assumptions.

## Membership is a degree, not a probability

A usual, or **crisp**, subset $A$ of a universe $X$ answers whether an object belongs: yes or no. Its characteristic function takes values $0$ and $1$. A **fuzzy set** instead supplies a membership function

$$
\mu_A:X\to[0,1].
$$

The value measures how well the object fits the chosen concept. For example, define “close to five” on the real numbers by $\mu_A(x)=\max(0,1-|x-5|/5)$. Then $\mu_A(5)=1$, $\mu_A(2)=0.4$, and $\mu_A(10)=0$. The rule is exact even though the concept is gradual. Different purposes can require different membership functions; no unique curve follows from the phrase alone.

The statement $\mu_A(2)=0.4$ does not mean there is a $40\%$ chance that the known number $2$ has some unknown property. It gives a graded classification of that fixed number. Membership values across different objects need not sum to one. A probability model describes uncertainty about an event or outcome and has different axioms. Fuzziness and probability can occur together, but one cannot be substituted for the other without an additional model.

![[catalogue-ch05b-membership.svg|**Fig. C.ch05b.3** A triangular membership function represents “close to five.” Its height at x = 2 is 0.4, while its height at x = 5 is 1.]]

An $\alpha$-cut, for $0<\alpha\le1$, is the crisp set $A_\alpha=\{x:\mu_A(x)\ge\alpha\}$. For the example, $A_{0.6}=[3,7]$: solve $1-|x-5|/5\ge0.6$ to obtain $|x-5|\le2$. Cuts let us inspect a fuzzy set at selected membership thresholds.

## Pointwise operations

To combine fuzzy sets, apply an operation to their membership values at the same object. One common choice is

$$
\mu_{A\cap B}(x)=\min(\mu_A(x),\mu_B(x)),\qquad
\mu_{A\cup B}(x)=\max(\mu_A(x),\mu_B(x)),
$$

$$
\mu_{\neg A}(x)=1-\mu_A(x).
$$

If $\mu_A(x)=0.3$ and $\mu_B(x)=0.8$, the resulting intersection, union, and complement of $A$ are $0.3,0.8,0.7$. These formulas agree with ordinary AND, OR, NOT at inputs $0$ and $1$. But Boolean identities need not all survive at intermediate values. For instance, if $\mu_A(x)=0.3$, then $\min(0.3,0.7)=0.3$, so $A\cap\neg A$ is not everywhere zero. See [[Boolean structure and normal forms]] for the two-valued comparison.

## Choose an aggregation rule deliberately

An **aggregation operator** combines several degrees into one. Typical requirements are monotonicity in each input and boundary values $F(0,\ldots,0)=0$, $F(1,\ldots,1)=1$. These do not determine a unique formula.

A **t-norm** models conjunction. It is associative, commutative, nondecreasing in each input, and has neutral value $1$. Three examples are $\min(a,b)$, $ab$, and $\max(0,a+b-1)$. A **t-conorm** models disjunction, with the same first three properties but neutral value $0$. Examples are $\max(a,b)$, $a+b-ab$, and $\min(1,a+b)$. They can be paired by $S(a,b)=1-T(1-a,1-b)$ using the standard complement.

For $a=0.3,b=0.8$, the three conjunctions give $0.3$, $0.24$, and $0.1$. The three disjunctions give $0.8$, $0.86$, and $1$. The choice changes the mathematics. Product conjunction has the same algebraic formula as multiplication of independent-event probabilities, but that does not make its inputs probabilities or establish independence.

## Compensatory operators and complements

Sometimes a high score on one criterion may compensate for a low score on another. A weighted arithmetic mean $F(a,b)=wa+(1-w)b$, $0\le w\le1$, gives such a trade-off. For equal weights and inputs $0.2,0.8$, the result is $0.5$. It is not a t-norm: $F(a,1)$ is generally not $a$. Do not silently treat a compensatory score as a strict logical AND.

Another explicit compensatory family, for fixed $0<\gamma<1$, is

$$
F_\gamma(a,b)=(ab)^{1-\gamma}(a+b-ab)^\gamma.
$$

At the endpoint parameters define $F_0=ab$ and $F_1=a+b-ab$ separately to avoid expressions such as $0^0$. For $a=b=0.5,\gamma=1/2$, the result is $\sqrt{0.25\times0.75}=\sqrt3/4$. This family moves between product conjunction and its paired disjunction; intermediate members are not assumed associative. With more than two criteria, specify the full aggregation rather than assume grouping is irrelevant.

A general **fuzzy complement** is a nonincreasing function $c:[0,1]\to[0,1]$ with $c(0)=1,c(1)=0$. A strong complement also satisfies $c(c(a))=a$. Standard negation $c(a)=1-a$ is strong. The function $c(a)=1-a^2$ meets the boundary and monotonicity requirements but is not strong: $c(c(0.5))=0.4375\ne0.5$. State which properties a chosen complement has.

## Extension principle: move a fuzzy set through a map

Let a known map $f:X\to Y$ send input objects to outputs. The extension principle gives the output membership

$$
\mu_{f(A)}(y)=\sup_{x:f(x)=y}\mu_A(x),
$$

with value zero when there is no preimage. For finite sets, the supremum is a maximum. Suppose $X=\{-2,-1,1,2\}$ has membership values $0.3,0.8,0.5,0.9$, and $f(x)=x^2$. Output $1$ has preimages $-1,1$, so its membership is $\max(0.8,0.5)=0.8$. Output $4$ has membership $\max(0.3,0.9)=0.9$. We take a maximum, not a sum: this is not a probability pushforward. For a map of two fuzzy inputs, one common extension uses $\sup_{f(x,z)=y}\min(\mu_A(x),\mu_B(z))$; a different conjunction must be named explicitly.

## Practice

1. For the triangular set “close to five,” find the $0.8$-cut and the standard-complement membership at $x=2$.
2. Let $a=0.4,b=0.7$. Calculate minimum AND, product AND, algebraic-sum OR, and the equal-weight mean.

> [!example]- Worked answers
> 1. The inequality $|x-5|\le5(1-0.8)=1$ gives $[4,6]$. At $x=2$, membership is $0.4$, so complement membership is $1-0.4=0.6$.
> 2. The results are $0.4$, $0.28$, $0.4+0.7-0.28=0.82$, and $(0.4+0.7)/2=0.55$. The mean permits compensation and is not interchangeable with either conjunction.

MathWorks' official [foundations of fuzzy logic](https://www.mathworks.com/help/fuzzy/foundations-of-fuzzy-logic.html) gives operation conventions. The extension construction is discussed in Zadeh's original [linguistic-variable paper, Part I](https://doi.org/10.1016/0020-0255(75)90036-5).
