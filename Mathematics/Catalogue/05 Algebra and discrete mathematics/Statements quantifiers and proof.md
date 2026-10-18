---
title: "Statements, quantifiers, and proof"
catalogue_ids:
  - "5.1"
  - "5.1.1"
  - "5.1.2"
---

> [!TLDR]
> Logic makes the conditions and conclusions of an argument explicit; quantifiers state which objects an assertion covers.

## Statements and truth operations

A **proposition** is a statement that is true or false in a fixed context. “$7$ is prime” is a proposition. “Find $x$” is an instruction. “$x>3$” has a free variable, so its truth depends on an assigned value of $x$; it is a predicate rather than a complete numerical claim.

Write $P$ and $Q$ for propositions. The negation $\neg P$ is true exactly when $P$ is false. The conjunction $P\land Q$ requires both statements. The inclusive disjunction $P\lor Q$ requires at least one, and permits both. The implication $P\Rightarrow Q$ is false only when $P$ is true and $Q$ is false. The equivalence $P\Leftrightarrow Q$ says that both implications hold.

| $P$ | $Q$ | $P\land Q$ | $P\lor Q$ | $P\Rightarrow Q$ |
| --- | --- | --- | --- | --- |
| True | True | True | True | True |
| True | False | False | True | False |
| False | True | False | True | True |
| False | False | False | False | True |

An implication does not claim that $P$ actually occurs. For example, “if an integer is divisible by $4$, it is even” remains true when tested at $3$: the hypothesis is not satisfied. This is called **vacuous truth**. It prevents a conditional statement from making unsupported claims outside its hypothesis.

## Converse and contrapositive

The **converse** of $P\Rightarrow Q$ is $Q\Rightarrow P$. It need not follow. Divisibility by $4$ implies evenness, but $6$ is even without being divisible by $4$.

The **contrapositive** is $\neg Q\Rightarrow\neg P$. It is equivalent to the original implication. If a number is not even, it cannot be divisible by $4$. Both statements exclude exactly the case where $P$ is true and $Q$ false. The inverse $\neg P\Rightarrow\neg Q$ is equivalent to the converse, and is not generally valid either.

To disprove $P\Rightarrow Q$, find an example where $P$ holds and $Q$ fails. An example where both fail says nothing against the implication. To prove an equivalence, prove each direction separately; one direction does not supply the other.

## Predicates and quantifiers

A **domain** is the set of permitted values. The universal quantifier $\forall$ means “for every”; the existential quantifier $\exists$ means “there is at least one”. For example,

$$
\forall n\in\mathbb Z\;\exists m\in\mathbb Z:\quad m>n
$$

says that every integer has a larger integer. Choose $m=n+1$. The choice can depend on $n$. Reversing the quantifiers would claim that one integer is larger than every integer. That claim is false: whatever $m$ is chosen, take $n=m$.

The notation $\exists!x$ means that exactly one such $x$ exists. Prove existence by constructing an example, and uniqueness by showing any two examples must agree. Specify the domain: $x^2=2$ has real solutions but no integer solutions.

Negation reverses quantifiers:

$$
\neg(\forall x\;P(x))\Leftrightarrow\exists x\;\neg P(x),
\qquad
\neg(\exists x\;P(x))\Leftrightarrow\forall x\;\neg P(x).
$$

Also, De Morgan's laws say $\neg(P\land Q)\Leftrightarrow\neg P\lor\neg Q$ and $\neg(P\lor Q)\Leftrightarrow\neg P\land\neg Q$. “Not both” permits exactly one; “neither” permits none.

## Worked proof: the parity of a square

Prove that if $n^2$ is even, then the integer $n$ is even. The contrapositive is easier: if $n$ is odd, then $n^2$ is odd. Every odd integer has the form $n=2k+1$, with $k\in\mathbb Z$. Expand:

$$
n^2=(2k+1)^2=4k^2+4k+1=2(2k^2+2k)+1.
$$

The expression in parentheses is an integer, so this is an odd number. That proves the contrapositive and hence the original claim. It also shows why the domain matters: the real number $\sqrt2$ is not an even or odd integer.

This is a proof about all integers, although no list of integers was checked. The letter $k$ represents an arbitrary integer of the required form. Further proof methods, including contradiction and induction, are developed in [[01.08 Proof methods]].

## Practice

1. Negate “every integer has an integer square root” precisely. Is the original statement true?
2. State the converse and contrapositive of “if $x>2$, then $x^2>4$”, for real $x$. Which statements are true?

### Worked answers

1. The claim is $\forall n\in\mathbb Z\;\exists m\in\mathbb Z:m^2=n$. Its negation is $\exists n\in\mathbb Z\;\forall m\in\mathbb Z:m^2\ne n$. Take $n=-1$: every integer square is nonnegative. Thus the original claim is false.
2. The converse is “if $x^2>4$, then $x>2$”; it is false at $x=-3$. The contrapositive is “if $x^2\le4$, then $x\le2$”; it is true and equivalent to the original. Notice that negating $x>2$ gives $x\le2$, including equality.
