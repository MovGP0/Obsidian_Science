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

Two events are **independent** when

$$
P(A\cap B)=P(A)P(B).
$$

In the finite-dimensional ideal projective-measurement setting, two quantum observables are compatible when $[\hat A,\hat B]=0$. They admit a joint measurement and a common eigenbasis.

Compatibility does **not** imply statistical independence. Compatible observables can be perfectly correlated. For noncommuting observables, a measurement of $\hat A$ generally changes the state and can change the outcome distribution of $\hat B$.

> [!note]
> Even for compatible observables, selecting a particular outcome can change conditional probabilities because of correlations. This is distinct from changing the unconditional distribution of the other observable through a nonselective measurement. In the unbounded-operator setting, compatibility requires the corresponding spectral projections to commute.
