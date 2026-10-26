---
title: "Shannon Entropy"
source_chapter: "C"
source_section: "C.4.1"
source_page: 486
---

> [!TLDR]
> Shannon entropy measures uncertainty and is largest for equal probabilities over a fixed number of states.

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

Normalization gives $p_i=1/n$. Concavity of the entropy makes this stationary distribution the maximum.
