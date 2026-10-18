---
title: "Algebra and discrete mathematics: learning route"
catalogue_ids:
  - "5"
---

> [!TLDR]
> Logic describes valid arguments, sets describe collections, and algebra studies operations and their rules.

## What this chapter connects

School algebra often starts with a calculation: simplify an expression, solve an equation, or find an unknown number. This chapter asks a second question: which rules make the calculation valid? A statement about every integer needs a proof. A division needs a nonzero divisor and a number system where that divisor has an inverse. A symmetry needs an operation that can be reversed. These questions connect logic, sets, groups, rings, vector spaces, and number theory.

The word **discrete** refers to objects that can be separated into individual cases, such as integers, finite strings, and permutations. It does not mean that all sets in this chapter are finite. Real vector spaces and continuous groups also occur. The common method is to define objects and operations before using their properties.

Only school arithmetic and simple equations are needed at the start. If letters and set notation are unfamiliar, read [[01.01 Numbers and sets]] and [[01.02 Variables and expressions]]. No calculus is needed for the first lessons. The Lie group lesson introduces a derivative as a local rate of change and gives an exact matrix calculation before it uses that idea abstractly.

## A useful reading order

Start with [[Statements quantifiers and proof]]. It explains the difference between an implication and its converse, and how to read “for every” and “there exists”. Next read [[Sets relations and cardinality]]. Sets identify the allowed objects; relations compare them; functions send them to other objects. These two articles are prerequisites for the rest of this chapter.

Then choose either of these routes:

- For structures and symmetry, read [[Operations semigroups and groups]], followed by [[Rings ideals and finite fields]] and [[Vector spaces and bilinear forms]]. After that, [[Group representations and decomposition]] explains how matrices describe group operations. [[Symmetry groups and applications]] and [[Lie groups and infinitesimal transformations]] show how the same rules organize finite and continuous transformations.
- For arithmetic algorithms, read [[Divisibility primes and Fibonacci numbers]], [[Diophantine equations and modular arithmetic]], and [[Number theory theorems and primality tests]]. Then [[Check digits and error-correcting codes]] shows how remainder arithmetic detects and corrects errors.

The later catalogue sections extend this route to cryptology, Boolean algebra, graphs, and other discrete structures. These later branches use the language introduced here. A learner does not need to complete every branch before moving to a different one.

## Worked example: one calculation, three viewpoints

Consider the equation $3x\equiv1\pmod7$. This means that $3x-1$ is divisible by $7$. Try the seven possible remainders $0,1,\ldots,6$. At $x=5$, $3x-1=14$, so $x=5$ is a solution. Adding $7$ to $x$ adds $21$ to $3x$, which preserves its remainder. Thus all integer solutions are $x=5+7k$, where $k$ is any integer.

In number theory, the Euclidean algorithm explains the answer: $7=2\cdot3+1$, so $1=7-2\cdot3$, and $-2$ is the same remainder as $5$. In algebra, the nonzero remainders modulo the prime $7$ form a multiplicative group, so $3$ has an inverse. In logic, uniqueness of the remainder follows from an implication: if $3x\equiv3y$, then $7$ divides $3(x-y)$, and primality forces $7$ to divide $x-y$.

Now replace $7$ by $6$. The equation $3x\equiv1\pmod6$ has no solution: $3x$ has remainder $0$ or $3$, never $1$. The symbol “division by $3$” therefore needs assumptions. Rules familiar from rational numbers cannot be transferred to every number system.

## How to use the worked answers

Write down the allowed set before each calculation. State what an operation does to two inputs. For a theorem, separate its hypotheses from its conclusion. Check a small example, then ask whether it proves the general statement. Usually it does not. A counterexample can disprove a universal statement; a successful example cannot prove it.

Use the practice questions twice: first without the answer, then with the answer to check the reasoning. Do not compare only the final number. For an abstract definition, construct one object that satisfies it and one object that fails exactly one condition. This helps you recognize which condition carries the argument.

## Practice

1. Why does $2x\equiv1\pmod4$ have no integer solution?
2. Does checking $n^2\ge n$ for $n=1,2,3$ prove it for all integers? Give a proof or a counterexample.

### Worked answers

1. The integer $2x$ is even. Subtracting $1$ makes it odd, so $2x-1$ cannot be divisible by $4$. Equivalently, multiplication by $2$ reaches only remainders $0$ and $2$.
2. Three checks are not a proof. However, $n^2-n=n(n-1)$. If $n\ge1$, both factors are nonnegative. If $n\le0$, both are nonpositive, so their product is again nonnegative. These cases cover every integer and prove the claim.

<!-- catalogue-complete-lesson-index:start -->
## Complete lesson index

Read the prerequisite route above before the advanced lessons. The source topic links are in [[Planned Topics#5. Algebra and discrete mathematics|the detailed catalogue]].

- [[Statements quantifiers and proof|Statements, quantifiers, and proof]] — 5.1, 5.1.1, 5.1.2.
- [[Sets relations and cardinality|Sets, relations, and cardinality]] — 5.2, 5.2.1, 5.2.2, 5.2.3, 5.2.4, 5.2.5.
- [[Operations semigroups and groups|Operations, semigroups, and groups]] — 5.3, 5.3.1, 5.3.2, 5.3.3, 5.3.3.1, 5.3.3.2, 5.3.3.3.
- [[Group representations and decomposition|Group representations and decomposition]] — 5.3.4, 5.3.4.1, 5.3.4.2, 5.3.4.3, 5.3.4.4, 5.3.4.5, 5.3.4.6, 5.3.4.7, 5.3.4.8.
- [[Symmetry groups and applications|Symmetry groups and applications]] — 5.3.5, 5.3.5.1, 5.3.5.2, 5.3.5.3, 5.3.5.4, 5.3.5.5, 5.3.5.6.
- [[Lie groups and infinitesimal transformations|Lie groups and infinitesimal transformations]] — 5.3.6, 5.3.6.1, 5.3.6.2, 5.3.6.3, 5.3.6.4, 5.3.6.5.
- [[Rings ideals and finite fields|Rings, ideals, and finite fields]] — 5.3.7, 5.3.7.1, 5.3.7.2, 5.3.7.3, 5.3.7.4.
- [[Vector spaces and bilinear forms|Vector spaces and bilinear forms]] — 5.3.8, 5.3.8.1, 5.3.8.2, 5.3.8.3, 5.3.8.4, 5.3.8.5, 5.3.8.6.
- [[Divisibility primes and Fibonacci numbers|Divisibility, primes, and Fibonacci numbers]] — 5.4, 5.4.1, 5.4.1.1, 5.4.1.2, 5.4.1.3, 5.4.1.4, 5.4.1.5.
- [[Diophantine equations and modular arithmetic|Diophantine equations and modular arithmetic]] — 5.4.2, 5.4.3.
- [[Number theory theorems and primality tests|Number theory theorems and primality tests]] — 5.4.4, 5.4.5.
- [[Check digits and error-correcting codes|Check digits and error-correcting codes]] — 5.4.6, 5.4.6.1, 5.4.6.2.
- [[Classical ciphers and cryptanalysis|Classical ciphers and cryptanalysis]] — 5.5, 5.5.1, 5.5.2, 5.5.3, 5.5.4, 5.5.4.1, 5.5.4.2, 5.5.4.3, 5.5.4.4, 5.5.5, 5.5.5.1, 5.5.5.2.
- [[Perfect secrecy and public-key arithmetic|Perfect secrecy and public-key arithmetic]] — 5.5.6, 5.5.7, 5.5.7.1, 5.5.7.2, 5.5.7.3.
- [[AES and IDEA block ciphers|AES and IDEA block ciphers]] — 5.5.8, 5.5.9.
- [[Algebras and compatible quotients|Algebras and compatible quotients]] — 5.6, 5.6.1, 5.6.2, 5.6.3, 5.6.4.
- [[Identities and free constructions|Identities and free constructions]] — 5.6.5, 5.6.6.
- [[Boolean structure and normal forms|Boolean structure and normal forms]] — 5.7, 5.7.1, 5.7.2, 5.7.3, 5.7.4, 5.7.5, 5.7.6, 5.7.7.
- [[Graph walks and spanning trees|Graph walks and spanning trees]] — 5.8, 5.8.1, 5.8.2, 5.8.2.1, 5.8.2.2, 5.8.2.3, 5.8.3, 5.8.3.1, 5.8.3.2.
- [[Matchings and planar graphs|Matchings and planar graphs]] — 5.8.4, 5.8.5.
- [[Directed paths and network flows|Directed paths and network flows]] — 5.8.6, 5.8.7.
- [[Fuzzy sets and aggregation|Fuzzy sets and aggregation]] — 5.9, 5.9.1, 5.9.1.1, 5.9.1.2, 5.9.1.3, 5.9.2, 5.9.2.1, 5.9.2.2, 5.9.2.3, 5.9.2.4, 5.9.2.5.
- [[Fuzzy relations and inference|Fuzzy relations and inference]] — 5.9.3, 5.9.3.1, 5.9.3.2, 5.9.4, 5.9.5.
- [[Fuzzy systems and interpolation|Fuzzy systems and interpolation]] — 5.9.6, 5.9.6.1, 5.9.6.2, 5.9.6.3, 5.9.6.4.
<!-- catalogue-complete-lesson-index:end -->
