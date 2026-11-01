---
title: "Basic Probability Distributions"
source_chapter: "C"
source_section: "C.3"
source_page: 484
---

> [!TLDR]
> Binomial, Poisson, and Gaussian laws describe independent events, rare events, and large-sample fluctuations.

Choose a distribution from the experiment or microscopic model, not from the shape of a convenient curve. First identify the random variable and its allowed values. A discrete probability is assigned to an integer count; a continuous density gives probability only after integration over an interval.

Use the binomial law for a fixed number of independent trials with the same success probability. Use the Poisson law as a rare-event limit with a fixed mean count. Use a Gaussian near the centre of a sum when the conditions of the central limit theorem hold. A Gaussian has support on the whole real line, so it can be inaccurate near a count boundary or in a distant tail.

For example, a cell with a mean count near one has a substantial probability of being empty. A Gaussian density cannot represent that exact discrete event. Increasing the reservoir size while keeping the cell mean near one supports the Poisson limit; it does not remove the discreteness of the cell count.

The principal distributions and their limits are:

- [[C.03.01 Binomial Distribution]]
- [[C.03.02 Poisson Distribution]]
- [[C.03.03 Gaussian Limit and the Central Limit Theorem]]
