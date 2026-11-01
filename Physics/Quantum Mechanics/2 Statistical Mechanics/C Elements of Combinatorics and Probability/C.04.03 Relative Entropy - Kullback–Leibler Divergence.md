---
title: "Relative Entropy: Kullback–Leibler Divergence"
source_chapter: "C"
source_section: "C.4.3"
source_page: 487
---

> [!TLDR]
> Relative entropy measures the difference between distributions and is nonnegative.

Take two normalized distributions on the same finite set of events. The first is the distribution being tested; the second is the reference. Set a term with $p_i=0$ to zero. A positive probability divided by a zero reference probability instead gives infinite divergence, as stated below. Natural logarithms make the divergence dimensionless.

The Kullback–Leibler divergence is important in fluctuation analysis and information theory:

$$
D_{\mathrm{KL}}(p\Vert q)
=\sum_i p_i\ln\frac{p_i}{q_i}\ge0.
$$

It measures how a distribution $p$ differs from a reference distribution $q$. The divergence is zero exactly when $p=q$. If $p_i>0$ where $q_i=0$, the divergence is infinite.

Nonnegativity follows from Jensen's inequality. It has a thermodynamic consequence: for a fixed Hamiltonian and temperature, the free energy of any trial distribution is no lower than the equilibrium free energy. This supports the Gibbs formulation of the second law.

## Proof and a boundary check

For positive reference weight on the support of $p$, use $-\ln u\ge1-u$ with $u=q_i/p_i$. Multiply by $p_i$ and sum over indices where $p_i>0$:

$$
D_{\mathrm{KL}}(p\Vert q)
\ge 1-\sum_{i:p_i>0}q_i\ge0.
$$

Equality in both steps requires equal probabilities on the support of $p$ and no reference weight elsewhere, hence $p=q$. The example $p=(1,0)$ and $q=(1/2,1/2)$ gives $D_{\mathrm{KL}}(p\Vert q)=\ln2$, while the reverse divergence is infinite. Thus the order matters; this quantity is not a symmetric distance.

## Canonical free-energy bound

For a fixed finite energy spectrum at positive temperature, choose the canonical reference $q_i=e^{-\thermal{\beta}\energy{E}_i}/Z$, with $\thermal{\beta}=1/(\thermal{k}_{\mathrm B}\thermal{T})$. Define the trial Helmholtz free-energy functional by

$$
\energy{F}[p]=\sum_i p_i\energy{E}_i
+\thermal{k}_{\mathrm B}\thermal{T}\sum_i p_i\ln p_i.
$$

Insert $\ln q_i=-\thermal{\beta}\energy{E}_i-\ln Z$ into the divergence and use normalization. This gives

$$
\energy{F}[p]-\energy{F}[q]
=\thermal{k}_{\mathrm B}\thermal{T}D_{\mathrm{KL}}(p\Vert q),
\qquad
\energy{F}[q]=-\thermal{k}_{\mathrm B}\thermal{T}\ln Z.
$$

The right-hand side has energy units and is nonnegative. This is a static variational statement. To conclude that free energy decreases during an actual relaxation also requires a physical evolution law and suitable bath conditions; nonnegativity alone does not supply them.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $p_i,\ q_i$ | $1$ | State probabilities | Trial and reference probabilities on the same microstates. |
| $\energy{E}_i$ | $\unit{J}$ | Microstate energy | The fixed energy assigned to state i. |
| $\energy{F}[p],\ \energy{F}[q]$ | $\unit{J}$ | Free energies | The trial functional and its equilibrium minimum. |
| $\thermal{k}_{\mathrm B}$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | The conversion factor between information entropy and physical entropy. |
| $\thermal{T}$ | $\unit{K}$ | Temperature | The positive temperature of the thermal reference. |
| $\thermal{\beta}$ | $\unit{J^{-1}}$ | Inverse thermal energy | One divided by Boltzmann's constant times temperature. |
| $Z$ | $1$ | Partition function | The sum of canonical microstate weights. |
