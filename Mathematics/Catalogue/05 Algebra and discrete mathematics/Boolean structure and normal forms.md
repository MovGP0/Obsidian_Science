---
title: "Boolean structure and normal forms"
catalogue_ids:
  - "5.7"
  - "5.7.1"
  - "5.7.2"
  - "5.7.3"
  - "5.7.4"
  - "5.7.5"
  - "5.7.6"
  - "5.7.7"
---

> [!TLDR]
> Boolean algebra unifies true-or-false expressions, set operations, and ideal switching rules.

## Two values and a general structure

Read [[01.04 Logical statements]] for statements and truth values. In the two-element set $\{0,1\}$, write $a\wedge b$ for AND, $a\vee b$ for OR, and $\neg a$ for NOT. AND is $1$ only if both inputs are $1$; OR is $1$ if at least one input is $1$; NOT swaps $0$ and $1$. OR includes the case where both are true. Exclusive OR is a different operation.

A **Boolean algebra** is a set $B$ with operations $\wedge,\vee,\neg$ and constants $0,1$. The two binary operations are commutative and associative, each distributes over the other, and they satisfy absorption, identity, and complement laws:

$$
a\vee(a\wedge b)=a,\qquad a\wedge(a\vee b)=a,
$$

$$
a\vee0=a,\quad a\wedge1=a,\quad
a\vee\neg a=1,\quad a\wedge\neg a=0.
$$

The two-element truth-value system is the smallest nontrivial example. Another example is the power set $\mathcal P(X)$, the set of all subsets of a fixed set $X$. There, AND is intersection, OR is union, NOT is complement relative to $X$, $0$ is the empty set, and $1$ is $X$ itself. A Boolean element therefore need not be a single bit.

## Order, atoms, and finite Boolean algebras

Define $a\le b$ when $a\wedge b=a$. In a power set this means $a\subseteq b$. The meet $a\wedge b$ is the greatest element below both inputs; the join $a\vee b$ is the least element above both. A greatest lower bound is not necessarily the smaller of the inputs, because the order need not compare every pair.

An **atom** is a nonzero element with nothing strictly between it and $0$. In $\mathcal P(\{p,q,r\})$, the atoms are $\{p\},\{q\},\{r\}$. Every subset is the union of the singleton sets it contains. In any finite Boolean algebra, each element is likewise the join of the atoms below it. Distinct atoms have meet zero. To see why atoms suffice, start below a nonzero element and keep choosing a smaller nonzero element; finiteness makes this stop at an atom. Repeating on the part not yet included exhausts the element.

Consequently, a finite Boolean algebra with $k$ atoms has exactly $2^k$ elements and is isomorphic to the power set of its atoms. In particular, no finite Boolean algebra has exactly six elements. This conclusion uses finiteness; infinite Boolean algebras can have no atoms at all.

## Duality and complement rules

The **duality principle** says that interchanging AND with OR and $0$ with $1$ transforms a valid Boolean identity into another valid identity. For example, the dual of $a\vee0=a$ is $a\wedge1=a$. This works because the axioms themselves occur in dual pairs. It is not a rule that arbitrarily changes the truth values of a single expression.

De Morgan's laws are

$$
\neg(a\wedge b)=\neg a\vee\neg b,\qquad
\neg(a\vee b)=\neg a\wedge\neg b.
$$

For truth values, the first says that “not both” holds exactly when at least one input fails. In the power-set model it is the rule for taking the complement of an intersection. Also, $\neg\neg a=a$. These laws let us move NOT signs inward until they apply only to variables.

## Expressions, functions, and normal forms

A **Boolean expression** is a formula built from variables and Boolean operations. Its **Boolean function** is the output it assigns to each input row. Different expressions can define the same function. For two variables, the four rows $00,01,10,11$ determine the function completely; for $n$ variables there are $2^n$ rows and $2^{2^n}$ possible functions.

A literal is a variable or its complement. A **disjunctive normal form** (DNF) is an OR of AND terms of literals. A **conjunctive normal form** (CNF) is an AND of OR clauses. “Normal” describes the arrangement, not necessarily the shortest expression.

Construct canonical DNF by taking one term for each truth-table row with output $1$. Use $x$ when that row has $x=1$ and $\neg x$ when it has $x=0$. The term is true on exactly that row. OR joins the selected rows. For canonical CNF, take each row with output $0$ and write a clause false exactly on that row: use $x$ for a zero entry and $\neg x$ for a one entry. AND excludes all the zero rows.

## Worked example: exactly one input

Consider the function that is true when exactly one of $x,y$ is true:

| $x$ | $y$ | Output |
| --- | --- | --- |
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

The two true rows give DNF $(\neg x\wedge y)\vee(x\wedge\neg y)$. The two false rows give CNF $(x\vee y)\wedge(\neg x\vee\neg y)$. To check their equality algebraically, distribute the CNF. The terms $x\wedge\neg x$ and $y\wedge\neg y$ vanish, leaving exactly the DNF. Both expressions define exclusive OR.

## Switching algebra

In an ideal switching model, $1$ means a condition is satisfied and $0$ means it is not. Two conditions in series require both, giving AND. Parallel alternatives require at least one, giving OR. An inverted condition gives NOT. Thus replacing a switching expression by an equivalent Boolean expression preserves its ideal truth table.

For example, $F=(x\wedge y)\vee(x\wedge\neg y)$ simplifies by distribution to $x\wedge(y\vee\neg y)=x$. The condition $y$ has no effect. This is a logical simplification; it says nothing about physical implementation delays or other behavior outside the ideal two-value model. A table check or a valid sequence of Boolean identities is needed before removing a condition.

## Practice

1. A function is true on rows $00,01,11$. Find canonical DNF and simplify it.
2. A finite Boolean algebra has four atoms. How many elements does it have, and how many atoms lie below the join of two distinct atoms?

> [!example]- Worked answers
> 1. The DNF is $(\neg x\wedge\neg y)\vee(\neg x\wedge y)\vee(x\wedge y)$. The first two terms combine to $\neg x$. Then $\neg x\vee(x\wedge y)=(\neg x\vee x)\wedge(\neg x\vee y)=\neg x\vee y$.
> 2. Each element is specified by a subset of the four atoms, so there are $2^4=16$ elements. The join of two distinct atoms has exactly those two atoms below it; another atom cannot lie below that join because distributivity would force a nonzero meet with one of them.
