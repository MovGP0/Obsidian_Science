---
title: "Discrete Probability"
---

> [!TLDR]
> A discrete random variable assigns probabilities to countable outcomes. Its expectation is a weighted mean, and its variance is the second moment minus the squared mean.

The possible values of $X$ need not be the elementary outcomes. For a die roll, the sample space is $\{1,\ldots,6\}$, but the variable “is the result even?” takes only the values zero and one. Its probability at one is the sum of the probabilities of outcomes 2, 4, and 6. Thus a random variable maps outcomes to numbers; its distribution collects outcomes with the same value.

> [!definition] Definition 14.1 | Discrete random variable
> A discrete random variable $X$ takes values $\{x_1,x_2,\ldots\}$ with probabilities $\{P_1,P_2,\ldots\}$, where $P_i\ge0$ and $\sum_iP_i=1$.

> [!definition] Definition 14.2 | Expectation value and moments
> The expectation value is
>
> $$
> \langle X\rangle=\sum_i x_iP_i.
> $$
>
> The $n$th moment is $\langle X^n\rangle=\sum_i x_i^nP_i$.
>
> The variance is
>
> $$
> \operatorname{Var}(X)
> =\langle(X-\langle X\rangle)^2\rangle
> =\langle X^2\rangle-\langle X\rangle^2.
> $$
>
> The standard deviation is $\sigma_X=\sqrt{\operatorname{Var}(X)}\ge0$.

These quantities require the relevant moments to exist; the variance formula assumes a finite second moment.

## Derive the variance formula

The difference-of-moments form is usually easier to calculate than the defining centered moment. Set $\mu=\langle X\rangle$:

$$
\begin{aligned}
\langle(X-\mu)^2\rangle
&=\langle X^2-2\mu X+\mu^2\rangle\\
&=\langle X^2\rangle-2\mu\langle X\rangle+\mu^2\\
&=\langle X^2\rangle-\mu^2.
\end{aligned}
$$

## Example — A fair six-sided die

Each outcome $i=1,\ldots,6$ has probability $P_i=1/6$.

$$
\langle X\rangle=\frac16(1+2+3+4+5+6)
=\frac{21}6=3.5.
$$

$$
\langle X^2\rangle=\frac16(1+4+9+16+25+36)=\frac{91}6.
$$

$$
\begin{aligned}
\sigma_X^2
&=\frac{91}6-(3.5)^2
=\frac{91}6-\frac{49}4\\
&=\frac{182-147}{12}=\frac{35}{12}\approx2.9167.
\end{aligned}
$$

Thus $\sigma_X\approx1.708$.

The die example also shows that an expectation need not be a possible outcome: no roll gives 3.5. It is a weighted center, not a prediction of the next roll. Before calculating a variance for an infinite set of values, check that $\sum_i x_i^2P_i$ is finite; normalization alone does not imply finite moments.
