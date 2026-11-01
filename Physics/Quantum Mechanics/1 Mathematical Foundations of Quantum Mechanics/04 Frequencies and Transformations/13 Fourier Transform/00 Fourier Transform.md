---
title: "Fourier Transform"
---

> [!TLDR]
> The Fourier transform replaces the discrete modes of a finite-interval Fourier series with a continuous spectrum. In quantum mechanics, it relates position and momentum representations of the same state.

The Fourier series from the previous chapter uses a finite interval $[-L,L]$. To analyze functions defined on the whole real line, such as free-particle wavefunctions, take the limit $L\to\infty$.

The discrete sum over wavenumbers $k_n=n\pi/L$ becomes an integral over $\mathbb R$. This gives the **Fourier transform**.

The whole-line transform is useful when no finite period is part of the model. A localized profile then uses a continuous range of wavenumbers instead of discrete harmonic labels. Taking a large interval is a way to motivate this change; it is not a proof that every Fourier integral converges pointwise.

Read the continuum construction together with its normalization convention. Next use the basic properties to predict a transform before calculating it. The delta article explains why constants and plane waves require distributions. The transform pairs then distinguish amplitude widths from probability widths, and position–momentum duality adds the change of measure from wavenumber to momentum.

As a guiding test, translate a localized packet. Its spectrum gains a phase but has the same magnitude. Multiply it by a plane-wave phase instead, and its spectral magnitude shifts. These operations encode different physical preparations.

## Chapter sections

- [[01 From Discrete to Continuous|From discrete to continuous]]
- [[02 Basic Properties|Basic properties]]
- [[03 The Dirac Delta Distribution|The Dirac delta distribution]]
- [[04 Important Transform Pairs|Important transform pairs]]
- [[05 Position-Momentum Duality|Position–momentum duality]]
- [[13 Fourier Transform/06 Common Errors|Common errors and quantum applications]]
- [[13 Fourier Transform/07 Chapter Summary|Chapter summary]]
- [[13 Fourier Transform/08 Exercises|Exercises]]
