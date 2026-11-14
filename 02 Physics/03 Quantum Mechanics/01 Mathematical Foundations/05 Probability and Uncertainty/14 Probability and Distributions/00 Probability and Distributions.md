---
title: "Probability and Distributions"
---

> [!TLDR]
> Probability distributions describe possible outcomes and their weights. Their means, variances, and standard deviations provide the statistical tools needed for Born’s interpretation of quantum states.

The idea that nature is fundamentally probabilistic can seem counterintuitive. In classical mechanics, probability often expresses incomplete knowledge: exact initial conditions would, in principle, determine the motion.

In quantum mechanics, probability is part of the measurement structure. Even complete knowledge of a state generally gives probabilistic measurement outcomes.

This chapter develops the required tools: random variables, distributions, expectation values, and variances. We study them with Born’s interpretation of $|\signal{\psi}|^2$ in mind.

## Reading route

Start with the distinction between an outcome and its probability. In the discrete section, a sum of probability masses equals one. In the continuous section, an integral of a density equals one; a density value is not a point probability. Use the uniform distribution to check that both descriptions give a mean inside the range of outcomes.

Then compare two types of statements about spread. The normal distribution gives a complete model for the density. Chebyshev’s inequality gives a bound for every distribution with finite variance, even when its shape is unknown. Finally, study conditioning to see how selecting an event changes the normalized weights.

For the quantum application, keep the mathematical rule and the physical postulate separate. Probability theory determines how weights combine. Born’s rule specifies which weights a quantum state assigns to the outcomes of a chosen measurement. A different observable can give a different distribution for the same state.

## Chapter sections

- [[01 Discrete Probability|Discrete probability]]
- [[02 Continuous Probability|Continuous probability]]
- [[03 The Normal Distribution|The normal distribution]]
- [[04 Chebyshev's Inequality|Chebyshev’s inequality]]
- [[05 Conditional Probability|Conditional probability]]
- [[14 Probability and Distributions/06 Common Errors|Common errors and Born’s rule]]
- [[14 Probability and Distributions/07 Chapter Summary|Chapter summary]]
- [[14 Probability and Distributions/08 Exercises|Exercises]]

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\psi}$ | — | Wavefunction | The state amplitude; its unit depends on the representation and spatial dimension. |
