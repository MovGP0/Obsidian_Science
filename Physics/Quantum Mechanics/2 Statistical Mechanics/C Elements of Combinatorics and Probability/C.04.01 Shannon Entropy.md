---
title: "Shannon Entropy"
source_chapter: "C"
source_section: "C.4.1"
source_page: 486
---

> [!TLDR]
> Shannon entropy measures uncertainty and is largest for equal probabilities over a fixed number of states.

Consider a finite list of possible outcomes and normalized probabilities. Entropy concerns uncertainty in that list, rather than the numerical size of the outcome labels. Relabelling outcomes does not change it. The logarithm is natural here, so the dimensionless information unit is the nat; using logarithms to base two gives bits. [Shannon's original paper, Section 6](https://marco-dalai.unibs.it/teach/IT/shannon_1948.pdf#page=14) discusses this dependence on logarithm base and the equal-probability maximum.

Shannon (1948) defined the information entropy of a discrete probability distribution $\{p_i\}$ as

$$
H[\{p_i\}]=-\sum_i p_i\ln p_i,
\qquad
\sum_i p_i=1,\quad p_i\ge0.
\tag{C.2}
$$

Use the convention $0\ln0=0$. Entropy measures uncertainty, or missing information:

- For equal probabilities, $p_i=1/n$, it is maximal: $H_{\max}=\ln n$.
- For a distribution concentrated on one event, it is zero: $H_{\min}=0$.

**Proposition C.1.** Among all distributions over $n$ states, the uniform distribution $p_i=1/n$ maximizes Shannon entropy.

## Proof

Maximize $H=-\sum_i p_i\ln p_i$ subject to $\sum_i p_i=1$. A Lagrange multiplier gives

$$
-\ln p_i-1=\lambda
\quad\Longrightarrow\quad
p_i=e^{-1-\lambda}=\text{constant}.
$$

The multiplier calculation applies in the interior, where all probabilities are positive. There the second derivative of each term $-p_i\ln p_i$ is $-1/p_i<0$, so the entropy is strictly concave. On a boundary face with only $m<n$ positive probabilities, the same argument gives a maximum $\ln m$, which is smaller than $\ln n$. Continuity with $0\ln0=0$ includes all these boundary faces. For $n=1$ the only allowed distribution has entropy zero.



Normalization gives $p_i=1/n$. Concavity of the entropy makes this stationary distribution the maximum.

For a binary choice, concentrating all weight on one outcome gives no uncertainty; equal weights give $\ln2$. Adding a new outcome with zero weight leaves entropy unchanged. Splitting an outcome into distinct events can change entropy, so the sample-space resolution must be fixed when comparing values. This is why a physical use must first identify the microstates.
