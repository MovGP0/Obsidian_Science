---
title: "Counting arrangements and selections"
catalogue_ids:
  - "16.1"
  - "16.1.1"
  - "16.1.2"
  - "16.1.3"
  - "16.1.4"
---

> [!TLDR]
> Count a selection by deciding whether order matters, whether repetition is allowed, and which outcomes are distinct.

## Build a count from choices

Counting, or combinatorics, turns a large list into a short calculation. If a first choice has $a$ options and each such choice has $b$ continuations, the multiplication rule gives $ab$ complete outcomes. A three-letter code with five possible letters in each place has $5^3=125$ outcomes when repetition is allowed. If branches have different numbers of continuations, count the branches separately and add their totals.

The addition rule applies to disjoint alternatives: outcomes in one part must not also belong to another counted part. If sets overlap, subtract the overlap once. For two finite sets,

$$
|A\cup B|=|A|+|B|-|A\cap B|.
$$

The vertical bars here mean number of elements. They do not mean probability. Probability requires an extra model, as explained in [[Events and conditional probability]].

## Permutations

A permutation is an ordering of all the objects in a collection. For $n$ distinct objects there are $n$ choices for the first position, $n-1$ for the second, and so on. Thus the number is

$$
n!=n(n-1)\cdots2\cdot1.
$$

Define $0!=1$: there is one empty ordering. For four different cards, the count is $4!=24$. If some objects are indistinguishable, divide by the orders that make no visible change. The letters in LEVEL contain two Ls, two Es, and one V. Temporarily label the repeated letters. There are $5!$ labelled orders, but each visible order occurs $2!2!$ times. Therefore the visible count is $5!/(2!2!)=30$.

Circular arrangements need an explicit equivalence rule. For $n$ distinct objects on an unmarked circle, rotations are the same and reflections are different, giving $(n-1)!$. Marking one seat removes this rotational equivalence. Do not apply the circular formula to a straight row.

## Ordered selections

Selecting $k$ different objects in order from $n$ distinct objects gives

$$
P(n,k)=n(n-1)\cdots(n-k+1)=\frac{n!}{(n-k)!},\qquad 0\le k\le n.
$$

For example, gold and silver positions among six entrants give $6\cdot5=30$ ordered results. If the same object may be selected again, each position still has $n$ choices, and the result is $n^k$. These formulas describe different experiments. Selecting a card, replacing it, and selecting again permits repeated cards; selecting two cards together does not.

![[catalogue-ch16-counting-tree.svg|**Fig. C.ch16.1** Two positions chosen from A, B, and C give six ordered selections when repetition is forbidden.]]

Each path in Fig. C.ch16.1 is one complete selection. AB and BA have separate paths because the order differs. This makes it possible to see exactly what the multiplication rule counts.

## Combinations

A combination is an unordered selection. Every set of $k$ distinct objects has $k!$ internal orders. Divide the ordered count by that number:

$$
\binom nk=\frac{n!}{k!(n-k)!}.
$$

For a three-person committee from eight people, $\binom83=56$. This assumes that the roles are identical. A chair, secretary, and treasurer are different roles and give $P(8,3)=336$ results instead.

For an unordered selection of $k$ objects from $n$ types with unlimited repetition, the count is $\binom{n+k-1}{k}$ for $n\ge1$. To see why, write $k$ stars for the chosen objects and $n-1$ separators between types. For three types and four objects, **|*|* encodes counts $(2,1,1)$. Choose the four star positions among six positions, giving $\binom64=15$. This is the stars-and-bars argument; finite stock limits require another count.

## Collection of formulas and a worked decision

| Selection rule | Number |
| --- | --- |
| All $n$ distinct objects in order | $n!$ |
| $k$ ordered positions, no repetition | $n!/(n-k)!$ |
| $k$ ordered positions, repetition allowed | $n^k$ |
| $k$ unordered objects, no repetition | $\binom nk$ |
| $k$ unordered objects from $n$ unlimited types | $\binom{n+k-1}{k}$ |

A box has seven distinct cards. Count two-card results. If drawn as an ordered pair without replacement, there are $7\cdot6=42$. If only the final pair matters, each pair has two orders, so there are $42/2=21$. If each card is replaced before the next draw, there are $7^2=49$ ordered results, including seven repeated pairs. Check a formula against this verbal description before using it.

## Practice

1. How many different arrangements does the word BANANA have?
2. Select four items from three unlimited types when order does not matter. Then count four ordered choices from these types.

> [!example]- Worked answers
> 1. There are six letters, with three As and two Ns. The count is $6!/(3!2!)=720/12=60$.
> 2. The unordered count is $\binom{3+4-1}{4}=\binom64=15$. For ordered choices, each of four positions has three options, giving $3^4=81$. The two counts answer different questions.
