---
title: "Evolution strategies"
catalogue_ids:
  - "18.2.6"
  - "18.2.6.1"
  - "18.2.6.2"
  - "18.2.6.3"
  - "18.2.6.4"
  - "18.2.6.5"
  - "18.2.6.6"
  - "18.2.6.7"
---

> [!TLDR]
> Evolution strategies compare randomly modified candidates and retain selected candidates, with no general finite-run guarantee of a global optimum.

## Evolution principles and applications

An **evolution strategy** is a randomized search over candidate vectors. It creates variations, evaluates their objectives, and selects the candidates that will generate the next variations. The names mutation, selection, and population describe algorithmic operations; they are not assumptions about biology.

Read [[Linear models and graphical solutions]] for objectives and feasibility. No calculus is required for the basic strategy. A candidate $x=(x_1,\ldots,x_n)$ is a list of real choices, and an evaluation returns a score $f(x)$ to minimize. A mutation changes the list. Selection compares scores. Recombination, when used, combines information from multiple parents.

These strategies are useful for objective evaluations that have no available derivative, have many local valleys, or return noisy scores. Examples include tuning the parameters of a mathematical algorithm or fitting a function whose evaluation is available only as a numerical procedure. They can require many evaluations. When an exact convex model is available, its certificates and specialized algorithms are often more informative.

## A basic evolution algorithm

Choose initial candidates, a mutation scale, an evaluation budget, and a constraint-handling rule. For each generation, create candidate variations, evaluate each under the same comparison procedure, select parents for the next generation, and adjust mutation parameters if the chosen strategy permits it. Stop at the budget or a stated progress threshold.

The mutation scale $\sigma>0$ controls the typical displacement. Very small values can make progress slow or trap the search near one valley. Very large values can repeatedly skip promising regions. Coordinate scaling matters: if one variable normally ranges over $[0,1]$ and another over $[0,10000]$, identical numerical mutation scales give very different relative changes.

## The (1 + 1) mutation-selection strategy

Keep one parent $x$. Generate one offspring

$$
x'=x+\sigma z,
$$

where the components of $z$ are independent standard normal samples. For deterministic minimization, accept the offspring if it is feasible and $f(x')\leq f(x)$; otherwise retain the parent. This is an **elitist** strategy: the retained objective never increases. This monotonicity does not prove convergence to the global minimum.

### Worked mutation sequence

Minimize $f(x)=(x-2)^2$ over real $x$, starting at $x=0$ and $\sigma=1$. Suppose the first three sampled changes are $z=1$, $z=-0.5$, and $z=0.8$. The first proposal is $x'=1$, with score one instead of four, so accept it. The second proposal starts from the retained parent $1$, giving $0.5$ and score $2.25$, so reject it. The third proposal is $1.8$, with score $0.04$, so accept it.

The trace is reproducible if the same sample stream is used. It illustrates selection; it does not mean a normal generator will produce those exact decimal samples. A termination report should state the budget and best score, not claim exact optimality from a short trace.

## Generation of random numbers

Software usually produces **pseudorandom** numbers: a deterministic algorithm transforms an internal state into a sequence. A seed initializes that state. Fix a seed for repeatable comparisons, and use several independent seeds to assess typical performance.

Uniform samples on $(0,1)$ can be transformed into standard normal samples by the Box–Muller construction. For independent $U_1,U_2$,

$$
Z_1=\sqrt{-2\ln U_1}\cos(2\pi U_2),\qquad
Z_2=\sqrt{-2\ln U_1}\sin(2\pi U_2).
$$

The joint distribution comes from polar coordinates for the two-dimensional normal density. Exclude $U_1=0$ because its logarithm is undefined. For example, $U_1=e^{-1/2}$ and $U_2=1/4$ give $Z_1=0,Z_2=1$. A production implementation should use a tested random-number library, rather than assume that any short integer recurrence supplies independent high-quality samples. The original construction is [Box and Muller, 1958](https://doi.org/10.1214/aoms/1177706645).

## Classification and population strategies

The notation $(\mu+\lambda)$ means $\mu$ parents generate $\lambda$ offspring, and the next $\mu$ parents are selected from parents **and** offspring. The notation $(\mu,\lambda)$ selects only from the $\lambda$ offspring, so require $\lambda\geq\mu$. A comma strategy can lose the best retained score, but can leave a region more readily. Neither notation specifies the mutation distribution by itself.

For a $(2+3)$ strategy with parental scores $1,4$ and offspring scores $0.5,2,3$, the next scores are $0.5,1$. For $(2,3)$ with the same data, they are $0.5,2$. Population strategies may use recombination and may adapt multiple mutation scales or a covariance matrix. A covariance matrix specifies how coordinate changes vary together. These are distinct design choices, not consequences of the plus or comma symbol alone.

## Constraints and reliable comparisons

For a feasible box $l_i\leq x_i\leq u_i$, one can reject invalid offspring, reflect them, or project them to the box. Each rule changes the proposal distribution and should be stated. In a narrow feasible region, rejection can waste most evaluations. Penalty scores are another option, but then objective quality and constraint error must be reported separately.

With noisy evaluations, a lucky low score can win without representing a better candidate. Re-evaluation, averaging, and a separate validation sample reduce that risk. Independent repeated runs describe variability. They do not replace an analytical global certificate when such a certificate is required.

## Practice

1. A parent at $x=3$ minimizes $(x-1)^2$. With $\sigma=0.5$ and $z=-2$, is the offspring accepted?
2. For parental scores $2,5$ and offspring scores $3,4,6$, compare $(2+3)$ and $(2,3)$ selection.

## Worked answers

1. The offspring is $3+0.5(-2)=2$, with score one instead of four. Accept it under the deterministic elitist rule.
2. Plus selection retains scores $2,3$. Comma selection retains $3,4$, so its best retained score worsens from two to three. It is incorrect to call comma selection elitist in this comparison.
