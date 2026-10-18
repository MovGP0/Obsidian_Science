---
title: "Probability theory and mathematical statistics"
catalogue_ids:
  - "16"
---

> [!TLDR]
> Probability describes variation under a model; statistics uses observations to examine and estimate that model.

## What this chapter studies

Suppose a box contains numbered cards. Before a draw, a probability model describes which card can occur and how likely each result is. After several draws, statistics describes the observations and asks what they tell us about the box. These directions are different. Probability starts with a model and calculates possible data. Statistical inference starts with data and reaches conclusions that depend on a model and a sampling method.

A probability is a number from zero to one. A probability of $1/4$ means one quarter of the model's total probability belongs to an event. It does not promise that each group of four trials contains exactly one occurrence. A sample mean is a summary of observed numbers. It does not become the population mean just because it is easy to calculate.

The central skill is to state assumptions before calculation. Are outcomes equally likely? Does the experiment replace a card after each draw? Can one draw affect another? Are observations selected at random? The same arithmetic can be correct for one experiment and wrong for another.

## Entry route

Start with [[01.01 Numbers and sets]] for set notation, [[Percentages]] for fractions as proportions, and [[Finite sums and products]] for the summation symbol. Ordinary algebra is enough for counting, finite probability, descriptive statistics, and the first examples of inference. Each lesson defines its new objects before using them.

Use [[Counting arrangements and selections]] to count possible arrangements. Continue with [[Events and conditional probability]] and [[Random variables and joint distributions]]. Then study [[Discrete probability models]] and [[Continuous probability models]]. In the continuous lesson, an integral means area under a density. [[08.01 Definite integrals]] gives a separate introduction if this is new. The formulas can first be used as supplied area rules.

[[Sampling distributions]] explains why estimates vary. [[Large numbers and stochastic processes]] distinguishes a long sequence from a single distribution. [[Samples and descriptive statistics]] starts the data-analysis route. Follow it with [[Confidence intervals and hypothesis tests]], [[Correlation and regression models]], and [[Monte Carlo simulation]]. Finish with [[Measurement uncertainty]] and [[Propagation and uncertainty budgets]]. These last lessons use dimensionless reported values, so the statistical ideas do not depend on a particular instrument or physical unit.

## Worked example: model, sample, conclusion

A mathematical spinner has results $0$ and $1$, each with probability $1/2$. Five independent spins produce $1,0,1,1,0$. The sample mean is

$$
\bar x=\frac{1+0+1+1+0}{5}=\frac35=0.6.
$$

The model mean is $0(1/2)+1(1/2)=0.5$. There is no contradiction: sample results vary. Under the model, the probability of exactly three ones is

$$
\binom53(1/2)^3(1/2)^2=10/32=0.3125.
$$

The coefficient counts ten positions for the three ones. Each complete sequence has probability $1/32$. The calculation does not give the probability that the spinner is fair after these observations. That is a different question and needs additional assumptions about competing models.

## How to read a statistical result

Separate four items: the observed data, the calculation, the assumptions, and the conclusion. For example, a confidence interval is a calculation procedure with a stated repeated-sampling performance. A p-value describes data as extreme as the observation under a specified null model. Neither quantity gives an automatic probability that a scientific claim is true.

An uncertainty statement must say what its interval means. A hard bound, a standard deviation, and a 95% confidence interval serve different purposes. A precise number can still be biased. More observations reduce some random variation, but they do not repair a wrong sampling frame or a common offset in every observation.

## Practice

1. A fair six-sided die is rolled twelve times and shows two sixes. Identify the model probability and the observed relative frequency.
2. A survey takes the first twenty volunteers. Does the sample size alone justify a claim about every member of a population?

> [!example]- Worked answers
> 1. The model probability of a six is $1/6$. The observed frequency is $2/12=1/6$. These happen to agree; a later sample can give a different frequency without changing the model probability.
> 2. No. Volunteers can differ from non-volunteers. Sample size controls only part of the uncertainty. A population claim also needs a defensible selection method and model.

<!-- catalogue-complete-lesson-index:start -->
## Complete lesson index

Read the prerequisite route above before the advanced lessons. The source topic links are in [[Planned Topics#16. Probability theory and mathematical statistics|the detailed catalogue]].

- [[Counting arrangements and selections|Counting arrangements and selections]] — 16.1, 16.1.1, 16.1.2, 16.1.3, 16.1.4.
- [[Events and conditional probability|Events and conditional probability]] — 16.2, 16.2.1, 16.2.1.1, 16.2.1.2, 16.2.1.3.
- [[Random variables and joint distributions|Random variables and joint distributions]] — 16.2.2, 16.2.2.1, 16.2.2.2, 16.2.2.3, 16.2.2.4.
- [[Discrete probability models|Discrete probability models]] — 16.2.3, 16.2.3.1, 16.2.3.2, 16.2.3.3.
- [[Continuous probability models|Continuous probability models]] — 16.2.4, 16.2.4.1, 16.2.4.2, 16.2.4.3, 16.2.4.4, 16.2.4.5.
- [[Sampling distributions|Sampling distributions]] — 16.2.4.6, 16.2.4.7, 16.2.4.8.
- [[Large numbers and stochastic processes|Large numbers and stochastic processes]] — 16.2.5, 16.2.5.1, 16.2.5.2, 16.2.6, 16.2.6.1, 16.2.6.2.
- [[Samples and descriptive statistics|Samples and descriptive statistics]] — 16.3, 16.3.1, 16.3.1.1, 16.3.1.2, 16.3.2, 16.3.2.1, 16.3.2.2.
- [[Confidence intervals and hypothesis tests|Confidence intervals and hypothesis tests]] — 16.3.3, 16.3.3.1, 16.3.3.2, 16.3.3.3, 16.3.3.4, 16.3.3.5.
- [[Correlation and regression models|Correlation and regression models]] — 16.3.4, 16.3.4.1, 16.3.4.2, 16.3.4.3.
- [[Monte Carlo simulation|Monte Carlo simulation]] — 16.3.5, 16.3.5.1, 16.3.5.2, 16.3.5.3, 16.3.5.4, 16.3.5.5.
- [[Measurement uncertainty|Measurement uncertainty]] — 16.4, 16.4.1, 16.4.1.1, 16.4.1.2, 16.4.1.3, 16.4.1.4, 16.4.1.5, 16.4.1.6.
- [[Propagation and uncertainty budgets|Propagation and uncertainty budgets]] — 16.4.2, 16.4.2.1, 16.4.2.2.
<!-- catalogue-complete-lesson-index:end -->
