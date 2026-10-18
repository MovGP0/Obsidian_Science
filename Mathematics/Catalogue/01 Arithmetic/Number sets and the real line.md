---
title: "Number sets and the real line"
catalogue_ids:
  - "1.1.1"
  - "1.1.1.1"
  - "1.1.1.3"
---

> [!TLDR]
> Natural numbers, integers, and rational numbers form nested sets inside the real numbers, which describe positions on a complete number line.

## What a number set describes

A **set** is a collection of objects. The notation $x\in A$ means that $x$ is an element of the set $A$. A number set tells us which values are available for a calculation. For example, counting objects needs different values from recording a debt or dividing a whole into equal parts. The lesson [[01.01 Numbers and sets]] explains set notation in more detail.

The symbol $A\subseteq B$ means that every element of $A$ belongs to $B$. It does not say that the sets are equal. The symbol $A\subsetneq B$ states that $B$ also contains at least one element outside $A$.

## Natural numbers, integers, and rational numbers

This collection uses the convention

$$
\mathbb N=\{0,1,2,3,\ldots\}.
$$

These are the **natural numbers**. Some books start at $1$. To avoid ambiguity, write $n\ge1$ when zero must be excluded. The dots mean that the list continues without a final member.

The **integers** add the negative whole numbers:

$$
\mathbb Z=\{\ldots,-3,-2,-1,0,1,2,3,\ldots\}.
$$

The **rational numbers** are all ratios of integers:

$$
\mathbb Q=\left\{\frac pq:p,q\in\mathbb Z,\ q\ne0\right\}.
$$

The denominator cannot be zero: there is no number that gives $1$ when multiplied by $0$. Every integer is rational because $n=n/1$. Different fractions can represent the same number. For example, $2/3=4/6$. The word rational refers to a ratio; it does not mean that other numbers are unreasonable.

A terminating decimal is rational. For example, $0.375=375/1000=3/8$. A decimal with an endlessly repeating block is also rational. To find the fraction for $x=0.\overline{27}$, where the bar marks the repeating block, shift the decimal two places and subtract:

$$
100x=27.\overline{27},\qquad 100x-x=27,
\qquad x=\frac{27}{99}=\frac3{11}.
$$

Long division explains the reverse statement. For a positive denominator $q$, each remainder is one of $0,1,\ldots,q-1$. A zero remainder ends the decimal. Otherwise some remainder must repeat, and the subsequent digits repeat. Negative rational numbers have the same property after their minus sign.

## Real numbers

The **real numbers**, written $\mathbb R$, describe all positions on the number line. They include the rational numbers and the **irrational numbers**, which are not ratios of integers. For example, $\sqrt2$ is the nonnegative real number whose square is $2$. It lies between $1.41$ and $1.42$. Its irrationality is proved in [[Proof by contradiction]].

Thus

$$
\mathbb N\subsetneq\mathbb Z\subsetneq\mathbb Q\subsetneq\mathbb R.
$$

![[arithmetic-numbers_proofs-number-sets.svg|**Fig. A.numbers_proofs.1** Each nested region contains all the sets inside it. The irrational numbers occupy the part of ℝ outside ℚ.]]

The examples in Fig. A.numbers_proofs.1 show why each inclusion is strict: $-2$ is not natural, $1/2$ is not an integer, and $\sqrt2$ is not rational. An irrational number is still real. It is not a separate set outside the real numbers.

The real line has no gaps. More precisely, every nonempty set of real numbers that has an upper bound has a **least upper bound**. An upper bound is a number at least as large as every number in the set; the least upper bound is the smallest such bound. For example, the numbers $x\ge0$ with $x^2<2$ have least upper bound $\sqrt2$. The rationals alone cannot supply that bound as a rational number. This property is called **completeness**. A decimal approximation locates a real number more closely but does not replace its exact value.

## Worked example: choose the smallest set

Classify $0$, $-12/3$, $0.\overline{6}$, and $\sqrt{10}$ in the smallest of the four sets above.

1. By our convention, $0\in\mathbb N$.
2. Simplify $-12/3=-4$. It is an integer and is not natural, so choose $\mathbb Z$.
3. Put $x=0.\overline6$. Then $10x-x=6$, so $x=2/3$. It is rational but not an integer, so choose $\mathbb Q$.
4. The number $\sqrt{10}$ is real but irrational. To justify this, a fraction in lowest terms whose square is an integer must have denominator $1$: any prime factor of its denominator would also divide its numerator. The integer $10$ is not an integer square. Thus choose $\mathbb R$.

## Operations and common mistakes

A set is **closed** under an operation when the operation always gives another member of that set. Integers are closed under addition, subtraction, and multiplication, but division can give $1/2$. Rationals are closed under these operations and under division by a nonzero rational. Real numbers have the same closure properties. Taking a square root needs a nonnegative input if the result must remain real.

## Practice

1. Classify $\sqrt{25}$, $-0.75$, and $7/7$ in the smallest available set. Is $-0.75$ irrational because its decimal is negative?
2. Convert $0.\overline{18}$ to a fraction. Then give an example that shows that natural numbers are not closed under subtraction.

> [!example]- Worked answers
> 1. The square-root symbol gives the nonnegative root, so $\sqrt{25}=5\in\mathbb N$. The number $-0.75=-75/100=-3/4$ belongs to $\mathbb Q$ and not $\mathbb Z$. Finally, $7/7=1\in\mathbb N$. A minus sign does not determine rationality.
>
> 2. Set $x=0.\overline{18}$. Then $100x-x=18$, so $x=18/99=2/11$. For the second part, $2,5\in\mathbb N$ but $2-5=-3\notin\mathbb N$.
