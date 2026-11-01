---
title: "Conditional Probability"
---

> [!TLDR]
> Conditional probability updates an event probability when another event is known. Statistical independence is different from quantum compatibility: commuting observables can still be strongly correlated.

> [!definition] Definition 14.5 | Conditional probability
> For events $A$ and $B$ with $P(B)>0$,
>
> $$
> P(A|B)=\frac{P(A\cap B)}{P(B)}.
> $$
>
> This is the probability of $A$ given $B$.

Conditioning restricts attention to $B$ and then divides by $P(B)$ to restore total probability one. For a fair die, let $A$ mean “even” and $B$ mean “greater than 3.” The intersection contains 4 and 6, so $P(A|B)=(2/6)/(3/6)=2/3$, whereas $P(A)=1/2$. Learning $B$ changes the weights without changing the original die model. The formula does not define conditioning on an event of probability zero; continuous-variable conditioning requires a separate density or conditional-measure construction.

Two events are **independent** when

$$
P(A\cap B)=P(A)P(B).
$$

In the finite-dimensional ideal projective-measurement setting, two quantum observables are compatible when $[\hat A,\hat B]=0$. They admit a joint measurement and a common eigenbasis.

For a concrete compatible but dependent case, measure the same projector twice without intervening evolution. Suppose its two outcomes 0 and 1 each have probability $1/2$. The probability that both results are 1 is $1/2$, not $(1/2)(1/2)$. The observables commute because they are identical, but the results are perfectly correlated.

Compatibility does **not** imply statistical independence. Compatible observables can be perfectly correlated. For noncommuting observables, a measurement of $\hat A$ generally changes the state and can change the outcome distribution of $\hat B$.

> [!note]
> Even for compatible observables, selecting a particular outcome can change conditional probabilities because of correlations. This is distinct from changing the unconditional distribution of the other observable through a nonselective measurement. In the unbounded-operator setting, compatibility requires the corresponding spectral projections to commute.
