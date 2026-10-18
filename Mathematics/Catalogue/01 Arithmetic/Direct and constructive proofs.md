---
title: "Direct and constructive proofs"
catalogue_ids:
  - "1.1.2"
  - "1.1.2.1"
  - "1.1.2.4"
---

> [!TLDR]
> A direct proof derives a conclusion from its assumptions; a constructive existence proof supplies an object and checks that it has the required properties.

## What a proof establishes

A mathematical **statement** is an assertion that can be true or false. A **theorem** is a statement proved from definitions and accepted facts. Its **hypotheses** are the assumptions, and its **conclusion** is what follows from them. Always state the **domain**, the set of objects to which the claim applies. A claim about integers can fail for arbitrary real numbers.

For example, “for every integer $n$, if $n$ is odd, then $n^2$ is odd” has the domain $\mathbb Z$, hypothesis “$n$ is odd,” and conclusion “$n^2$ is odd.” A proof must cover every allowed integer, not only the first few examples.

The statement “every prime number is odd” is false. The integer $2$ is prime because its only positive divisors are $1$ and $2$, but it is even. This is a **counterexample**: it meets the hypothesis and fails the conclusion. One such example disproves a universal claim. Many successful examples do not prove one.

For an overview of other methods, see [[01.08 Proof methods]]. More detailed next lessons are [[Proof by contradiction]] and [[Mathematical induction]].

## Direct proof

A **direct proof** starts with the hypotheses and uses valid steps to reach the conclusion. Definitions often supply the first step. An integer is **even** if it equals $2r$ for some integer $r$, and **odd** if it equals $2r+1$ for some integer $r$. An integer $d$ **divides** an integer $n$ if $n=dk$ for some integer $k$.

To prove that the sum of two even integers is even, choose arbitrary even integers $a$ and $b$. By definition, $a=2r$ and $b=2s$ for integers $r,s$. Then

$$
a+b=2r+2s=2(r+s).
$$

Since $r+s$ is an integer, the sum is even. The letters stand for arbitrary allowed values, so one argument proves all cases. We use different letters $r,s$ because the two even integers need not be equal.

## Worked example: the product of two odd integers

Prove that the product of two odd integers is odd.

1. Let $a,b$ be arbitrary odd integers.
2. Use their definition: $a=2r+1$ and $b=2s+1$, where $r,s\in\mathbb Z$.
3. Expand and collect the even part:

$$
\begin{aligned}
ab&=(2r+1)(2s+1)\\
&=4rs+2r+2s+1\\
&=2(2rs+r+s)+1.
\end{aligned}
$$

4. The number $2rs+r+s$ is an integer, because integer addition and multiplication stay inside $\mathbb Z$.
5. Thus $ab$ has the form $2k+1$ for an integer $k$, which proves that it is odd.

Every step has a reason: definition, algebra, or closure of the integers. A numerical check such as $3\cdot5=15$ illustrates the result but cannot replace this proof.

## Constructive proof

A claim of **existence** says that at least one object with specified properties exists. A **constructive proof** gives a method to produce such an object and then verifies its properties. The resulting object is sometimes called a **witness**. There may be many possible witnesses.

For example, prove that between any two distinct rational numbers $a<b$ there is another rational number. Construct their average:

$$
c=\frac{a+b}{2}.
$$

Because rational numbers are closed under addition and division by a nonzero rational, $c$ is rational. Check the strict inequalities by subtraction:

$$
c-a=\frac{b-a}{2}>0,\qquad
b-c=\frac{b-a}{2}>0.
$$

Thus $a<c<b$. This is both direct and constructive: it directly verifies a particular choice. For $a=2/5$ and $b=3/5$, it produces $c=1/2$. It also works for negative endpoints. If $a=b$, there is no number strictly between them, so the condition $a<b$ is essential.

As a second construction, for any integer $n$, choose $m=n+1$. Then $m$ is an integer and $m>n$. This proves that there is no largest integer. The construction changes with the input; a single fixed integer would not exceed every possible $n$.

## Check the logical direction

Do not assume the conclusion while trying to prove it. When a claim has the form “if $A$, then $B$,” start from $A$ or use a justified alternative method. Its **converse**, “if $B$, then $A$,” is a new claim and needs its own proof. For example, “divisible by $4$ implies even” is true, but “even implies divisible by $4$” fails at $6$.

When a calculation divides by an expression, show that it is nonzero. When it squares an equation, check whether a later reverse step could introduce additional solutions. A proof must preserve the stated conditions throughout the calculation.

## Practice

1. Prove directly that the sum of an even integer and an odd integer is odd.
2. Given a positive integer $n$, construct an even integer greater than $n$ and prove both properties. Then construct a rational number strictly between $-3/4$ and $-1/2$.

> [!example]- Worked answers
> 1. Write the integers as $2r$ and $2s+1$. Their sum is $2(r+s)+1$. The number $r+s$ is an integer, so the sum is odd by definition.
>
> 2. Choose $m=2(n+1)$. It is even by its form, and $m-n=n+2>0$ because $n\ge1$. For the rational number, take the average: $c=(-3/4-1/2)/2=-5/8$. In eighths, $-3/4=-6/8<-5/8<-4/8=-1/2$, so both required strict inequalities hold.
