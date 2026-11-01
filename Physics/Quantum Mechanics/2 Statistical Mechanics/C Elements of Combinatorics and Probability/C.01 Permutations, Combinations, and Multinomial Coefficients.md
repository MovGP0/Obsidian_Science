---
title: "Permutations, Combinations, and Multinomial Coefficients"
source_chapter: "C"
source_section: "C.1"
source_page: 481
---

> [!TLDR]
> Permutations, combinations, and multinomial coefficients count ordered arrangements and occupation patterns.

Before choosing a formula, decide whether order matters and whether exchanging two labels gives a new configuration. For three distinct objects, there are six ordered arrangements but only three unordered pairs. If two of the three objects are identical, only three full arrangements remain.

Use permutations for ordered lists of distinct objects. Use combinations to select a subset without replacement. Use a multinomial coefficient when each object belongs to one of several specified groups and only the group populations are fixed. All three results are exact finite counting statements; none assumes that the counted outcomes have equal probability.

In statistical mechanics, this choice defines what is counted as a microstate. In particular, a count of labelled assignments cannot be transferred unchanged to indistinguishable quantum particles. The occupation rules and the available single-particle states must be specified first.

The basic counting results are developed in:

- [[C.01.01 Permutations]]
- [[C.01.02 Combinations]]
- [[C.01.03 Multinomial Coefficients in Statistical Mechanics]]
