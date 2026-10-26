---
title: "Stirling Formula: Forms and Approximations"
source_chapter: "C"
source_section: "C.2"
source_page: 483
---

> [!TLDR]
> Successive Stirling approximations control factorial and binomial estimates used in entropy calculations.

The full Stirling expansion can be written as

$$
n!\sim\sqrt{2\pi n}\left(\frac ne\right)^n
\exp\left(\frac1{12n}-\frac1{360n^3}+\cdots\right).
$$

This is an asymptotic expansion. A saddle-point derivation is given in [[B.03 Application - Stirling Formula]].

## Forms used in statistical mechanics

1. **Basic logarithmic form:**

$$
\ln n!\approx n\ln n-n.
$$

For $n\gg1$, the leading omitted absolute term is $\frac12\ln(2\pi n)$. The relative error in $\ln n!$ is asymptotically $\ln(2\pi n)/(2n\ln n)$.

2. **Extended logarithmic form:**

$$
\ln n!=n\ln n-n+\frac12\ln(2\pi n)+O(1/n).
$$

3. **Exponential form:**

$$
n!\sim\sqrt{2\pi n}\left(\frac ne\right)^n.
$$

4. **Binomial-coefficient approximation:**

$$
\ln\binom nk\approx nH\left(\frac kn\right),
\qquad
H(p)=-p\ln p-(1-p)\ln(1-p).
$$

Here $H(p)$ is the binary Shannon entropy.

## Example C.1: Molecules in two equal compartments

Let $N=10^{23}$ molecules be distributed between equal halves of a container. The number of configurations with equal populations is

$$
\binom N{N/2}
\approx2^N\sqrt{\frac2{\pi N}}.
$$

To leading exponential order this is $2^N$. The corresponding entropy is

$$
\thermal{S}
=\thermal{k}_{\mathrm B}\ln\binom N{N/2}
\approx N\thermal{k}_{\mathrm B}\ln2
\approx9.6\times10^{-1}\,\unit{J\,K^{-1}}.
$$

The probability that every molecule is in one specified half is $2^{-N}$, which is negligible. If either half qualifies, the probability is $2^{1-N}$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\thermal{k}_{\mathrm B}$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | The constant that converts temperature to energy. |
| $\thermal{S}$ | $\unit{J\,K^{-1}}$ | Entropy | The thermodynamic entropy of the system. |
| $N$ | $1$ | Particle count | The number of particles in the system. |
