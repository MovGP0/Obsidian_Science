---
title: "Proof by contradiction"
catalogue_ids:
  - "1.1.2.2"
---

> [!TLDR]
> A proof by contradiction assumes that the target statement is false and derives a conflict with a definition, an assumption, or an established fact.

## The indirect route

Sometimes the denial of a claim gives useful information. A **proof by contradiction** uses that information to show that the denial is impossible. It has three main steps: state the target, assume its negation, and derive an explicit contradiction. Then reject the negation and conclude the target statement.

A **negation** reverses the truth of a statement. The negation of “every integer has property $P$” is “at least one integer does not have property $P$.” It is not “every integer fails $P$.” The negation of $x>0$ for a real number is $x\le0$, which includes zero.

A contradiction must be an actual conflict, such as the same integer being both even and odd. A difficult calculation or an unexpected result is not itself a contradiction. The introduction [[Direct and constructive proofs]] explains statements, hypotheses, domains, and counterexamples.

## A preliminary parity fact

An integer is even if it has the form $2k$ and odd if it has the form $2k+1$, with $k\in\mathbb Z$. Dividing an integer by $2$ leaves remainder $0$ or $1$, so every integer is exactly one of these types.

If $n$ is odd, write $n=2k+1$. Then

$$
n^2=(2k+1)^2=4k^2+4k+1=2(2k^2+2k)+1.
$$

Thus an odd integer has an odd square. It follows that if an integer's square is even, the integer must be even: the alternative, an odd integer, would give an odd square. We will use this fact twice in the next proof.

## Worked example: √2 is irrational

The number $\sqrt2$ is the nonnegative real number whose square is $2$. We will prove that it is not a ratio of integers.

1. Suppose instead that $\sqrt2=p/q$, where $p,q$ are integers and $q>0$.
2. Cancel common factors until the fraction is in **lowest terms**. Thus $p$ and $q$ share no positive integer factor greater than $1$.
3. Square the equation and multiply by $q^2$:

$$
p^2=2q^2.
$$

4. This makes $p^2$ even. The preliminary parity fact makes $p$ even. Write $p=2r$ for an integer $r$.
5. Substitute and simplify:

$$
4r^2=2q^2,\qquad q^2=2r^2.
$$

6. Thus $q^2$ is even, so $q$ is even as well.
7. Both $p$ and $q$ are divisible by $2$. This conflicts with their lowest-terms condition.

The assumed rational representation is impossible. Therefore $\sqrt2$ is irrational. Notice where the contradiction occurs: it is the common factor $2$ in a fraction specifically chosen to have no common factor. Without the lowest-terms step, an even numerator and denominator would cause no conflict; $2/4$ is an ordinary valid fraction.

This proof supports the number classification in [[Irrational and transcendental numbers]] and the square-diagonal example in [[Commensurability]]. It proves irrationality, not transcendence. In fact $\sqrt2$ is algebraic because it solves $x^2-2=0$.

## Contradiction and contrapositive

A related method is **proof by contrapositive**. The statements “if $A$, then $B$” and “if not $B$, then not $A$” are equivalent. For example, to prove “if $n^2$ is even, then $n$ is even,” prove instead “if $n$ is odd, then $n^2$ is odd.” The algebra in the preliminary fact is a direct proof of that contrapositive.

In a contradiction proof of “if $A$, then $B$,” keep $A$ and additionally assume not $B$. In a contrapositive proof, start from not $B$ and derive not $A$. Both are indirect methods, but their temporary assumptions and targets are different. Neither method permits reversing an implication without a reason.

## A second example: no least positive rational

Suppose that there is a smallest positive rational number $r$. The number $r/2$ is rational because division by $2$ preserves rationality. Since $r>0$, we have $0<r/2<r$. This is a smaller positive rational, in conflict with the choice of $r$. Therefore no least positive rational exists.

The domain matters. There is a least positive integer, namely $1$, because dividing an integer by $2$ need not give another integer. A successful contradiction must keep the constructed object inside the original domain.

## Practice

1. Use contradiction to prove that there is no largest integer.
2. Prove that if an integer $n$ has odd square, then $n$ is odd. Identify the indirect method used.

> [!example]- Worked answers
> 1. Assume a largest integer $M$ exists. Then $M+1$ is an integer and $M+1>M$. This conflicts with the defining property of $M$. Hence there is no largest integer. The proof uses contradiction; constructing $M+1$ supplies the conflict.
>
> 2. Prove the contrapositive: if $n$ is even, write $n=2k$. Then $n^2=4k^2=2(2k^2)$ is even. Therefore, if $n^2$ is not even, $n$ cannot be even. Each integer is even or odd, so an odd square requires an odd integer. This is proof by contrapositive. It could also be written as a contradiction by assuming an odd square and an even $n$ together.
