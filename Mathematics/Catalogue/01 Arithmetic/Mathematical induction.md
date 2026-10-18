---
title: "Mathematical induction"
catalogue_ids:
  - "1.1.2.3"
---

> [!TLDR]
> Induction proves a first integer case and a rule that carries each valid case to the next, which establishes every case from the starting point onward.

## A chain of statements

Many claims have one case for each natural number. Write $P(n)$ for the statement at the integer $n$. For example, $P(n)$ could mean that the sum of the first $n$ positive odd numbers is $n^2$.

Checking $P(1)$, $P(2)$, and $P(3)$ may suggest a pattern, but infinitely many unchecked cases remain. **Mathematical induction** proves all cases $n\ge n_0$ with two tasks:

1. **Base case:** prove $P(n_0)$.
2. **Induction step:** for an arbitrary integer $k\ge n_0$, assume $P(k)$ and use it to prove $P(k+1)$.

The temporary assumption $P(k)$ is the **induction hypothesis**. We do not assume that every case is true. We prove a conditional rule: any valid case implies the next one. The base case starts the chain, and the rule carries its truth through each later integer.

![[arithmetic-numbers_proofs-induction-chain.svg|**Fig. A.numbers_proofs.2** The base case starts an unbroken chain. Each arrow represents the same proved implication from P(k) to P(k + 1).]]

Fig. A.numbers_proofs.2 also shows why both tasks are essential. A base case alone proves only one case. A step without a base may describe a chain with nothing established at its beginning. An argument that advances by two cases can leave the other parity unproved unless it starts both chains.

## Why the method works

Suppose there were a false case after the starting point, despite a valid base and step. The natural numbers have a **least-element property**: any nonempty collection of natural numbers has a smallest member. Thus there would be a first failed case, say $m$.

It cannot be $n_0$, because we proved the base. Hence $m>n_0$, and $m-1\ge n_0$. The previous case $P(m-1)$ is true because $m$ was the first failure. The induction step then makes $P(m)$ true, a contradiction. So there is no failed case. This explains induction using only integer order, not a physical picture of falling objects.

## Worked example: sum of the first n odd numbers

Prove that for every integer $n\ge1$,

$$
1+3+5+\cdots+(2n-1)=n^2.
$$

The expression $2n-1$ is the $n$th positive odd number. The dots mean that all intermediate positive odd numbers are included.

**Base case.** At $n=1$, the left side is $1$, and the right side is $1^2=1$. Thus $P(1)$ holds.

**Induction hypothesis.** Let $k\ge1$ be arbitrary and suppose

$$
1+3+\cdots+(2k-1)=k^2.
$$

**Induction step.** The next odd number is $2(k+1)-1=2k+1$. Add it to the previous sum:

$$
\begin{aligned}
1+3+\cdots+(2k-1)+(2k+1)
&=k^2+(2k+1)\\
&=(k+1)^2.
\end{aligned}
$$

The first equality uses the induction hypothesis. The second uses expansion of a square. The resulting formula is exactly $P(k+1)$. The base and step establish the identity for every integer $n\ge1$.

## A second example: an inequality

Prove $2^n\ge n+1$ for every integer $n\ge0$. Here the starting point is zero, consistent with the convention in [[Number sets and the real line]].

At $n=0$, $2^0=1=0+1$. For the step, assume $2^k\ge k+1$ with $k\ge0$. Multiplication by positive $2$ preserves the inequality, giving

$$
2^{k+1}=2\cdot2^k\ge2(k+1)=2k+2\ge k+2.
$$

The last inequality holds because $(2k+2)-(k+2)=k\ge0$. Since $k+2=(k+1)+1$, this is the required next case. An inequality proof needs a justification for the comparison as well as for the algebra.

## Avoid common failures

Write the exact formula for $P(k+1)$ before working on it. Replacing $n$ by $k+1$ changes every occurrence of $n$. Keep the induction hypothesis available as a substitution; do not merely repeat the desired answer. State the starting integer, because the step proves nothing about earlier values.

Induction applies to statements indexed by successive integers. It does not establish a claim for all real $x$ from a step $x\mapsto x+1$: values between integer steps would remain uncovered. The overview [[01.08 Proof methods]] compares induction with direct proof and contradiction.

## Practice

1. Prove by induction that $1+2+\cdots+n=n(n+1)/2$ for all integers $n\ge1$.
2. Prove by induction that $3^n-1$ is even for all integers $n\ge0$.

> [!example]- Worked answers
> 1. At $n=1$, both sides equal $1$. Assume the sum through $k$ equals $k(k+1)/2$. Add $k+1$: $k(k+1)/2+(k+1)=(k+1)(k+2)/2$. This is the formula for $k+1$. The base and step prove the identity.
>
> 2. At $n=0$, $3^0-1=0=2\cdot0$ is even. Suppose $3^k-1=2m$ for an integer $m$. Then $3^{k+1}-1=3(3^k-1)+2=6m+2=2(3m+1)$. Because $3m+1$ is an integer, the next case is even. Induction proves every $n\ge0$.
