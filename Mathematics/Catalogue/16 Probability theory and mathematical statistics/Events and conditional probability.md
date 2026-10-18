---
title: "Events and conditional probability"
catalogue_ids:
  - "16.2"
  - "16.2.1"
  - "16.2.1.1"
  - "16.2.1.2"
  - "16.2.1.3"
---

> [!TLDR]
> An event is a set of possible outcomes; conditioning restricts the calculation to outcomes that satisfy known information.

## Events and probability rules

A sample space $\Omega$ lists the possible outcomes of an experiment. An event $A$ is a subset of that space. For a die, $\Omega=\{1,2,3,4,5,6\}$ and the event “even” is $A=\{2,4,6\}$. The complement $A^c$ contains outcomes outside $A$. The intersection $A\cap B$ means both events occur; the union $A\cup B$ means at least one occurs.

A probability model assigns nonnegative probabilities with total one. For disjoint events, add their probabilities. Therefore

$$
P(A^c)=1-P(A),\qquad
P(A\cup B)=P(A)+P(B)-P(A\cap B).
$$

For a fair die, outcomes are equally likely, so $P(A)=|A|/6=1/2$. This count-over-total rule applies only when the elementary outcomes have equal probability. A die with a deliberately unequal model still uses the event sets, but the probabilities must be added with their given weights.

## Frequencies and probabilities

If $A$ occurs $m$ times in $n$ trials, its absolute frequency is $m$ and its relative frequency is $m/n$. Frequency describes the observed trials. Probability belongs to the mathematical model. In repeated independent trials with a fixed event probability, the relative frequency tends to concentrate near that probability as $n$ grows. [[Large numbers and stochastic processes]] makes this claim precise.

A fair coin can produce four heads in a row. Its next head probability remains $1/2$ under independence. There is no requirement for an immediate run of tails to restore balance. Past frequencies can inform whether the fair-coin model is reasonable, but they do not alter the consequences of that fixed model.

## Conditional probabilities

When $P(B)>0$, define

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
$$

The denominator changes the reference group from all outcomes to the outcomes in $B$. On a fair die, let $A$ be “even” and $B$ be “greater than three.” Among $B=\{4,5,6\}$, two outcomes are even, so $P(A\mid B)=2/3$. It differs from $P(A)=1/2$.

Rearranging the definition gives the multiplication rule $P(A\cap B)=P(B)P(A\mid B)$. Events are independent when $P(A\cap B)=P(A)P(B)$. For positive $P(B)$ this means $P(A\mid B)=P(A)$. Independent events can occur together. Disjoint positive-probability events cannot be independent, because their intersection has probability zero while their probability product is positive.

For three or more events, pairwise independence need not imply independence of the full collection. For two independent fair bits, the first bit, the second bit, and their parity are pairwise independent, yet any two determine the third. A repeated-trial product model requires joint independence.

## Bayes' theorem and total probability

Suppose $B_1,\ldots,B_r$ are disjoint events that cover the sample space. They are a partition. Summing over these alternatives gives

$$
P(A)=\sum_iP(B_i)P(A\mid B_i).
$$

Combining this with the multiplication rule gives Bayes' theorem:

$$
P(B_j\mid A)=\frac{P(B_j)P(A\mid B_j)}{\sum_iP(B_i)P(A\mid B_i)},
$$

provided the denominator is positive. This reverses the direction of conditioning. It does not say that $P(A\mid B)$ and $P(B\mid A)$ are equal.

## Worked example: two boxes

Choose box I with probability $1/3$ and box II with probability $2/3$. Box I contains three blue cards and one red card. Box II contains one blue card and three red cards. Draw one uniformly selected card from the chosen box. Then

$$
P(\text{blue})=\frac13\frac34+\frac23\frac14=\frac5{12}.
$$

The probability of box I and blue is $1/4$. Conditional on blue, the box I probability is $(1/4)/(5/12)=3/5$. This exceeds the prior probability $1/3$, because blue is more likely in box I. The blue observation changes the relative weights of the boxes.

![[catalogue-ch16-bayes-boxes.svg|**Fig. C.ch16.2** A common set of twelve probability units gives three blue units from box I and two from box II; the blue subset has five units.]]

In Fig. C.ch16.2 the boxes occupy unequal shares because the choice probabilities differ. Dividing only the raw card counts would ignore that first stage of the experiment.

## Practice

1. Draw two cards without replacement from three red and two blue cards. Find the probability that both are red. Are the two “red” events independent?
2. Two fair independent coin tosses are known to contain at least one head. Find the probability of two heads.

> [!example]- Worked answers
> 1. Multiply $3/5$ by the conditional probability $2/4$, giving $3/10$. The second-red conditional probability $1/2$ differs from its unconditional probability $3/5$, so the events are dependent.
> 2. The equally likely remaining sequences are HH, HT, and TH. Only HH has two heads, so the conditional probability is $1/3$. The stated observation mechanism matters; learning that a specified toss is heads is a different condition.
