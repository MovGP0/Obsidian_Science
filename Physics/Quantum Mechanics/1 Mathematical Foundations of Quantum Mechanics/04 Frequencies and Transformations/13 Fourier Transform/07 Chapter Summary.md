---
title: "Chapter Summary"
---

> [!TLDR]
> Fourier transformation preserves the L² norm and exchanges differentiation with multiplication. Gaussian reciprocal widths and generalized position–momentum bases connect this transform with quantum uncertainty.

- **Transform convention:** $\hat f(k)=\tfrac1{\sqrt{2\pi}}\int f(x)e^{-ikx}\,dx$. The inverse uses $e^{+ikx}$ with the same prefactor.
- **Derivatives:** $\mathcal F[f^{(n)}](k)=(ik)^n\hat f(k)$, with the appropriate regularity or distributional interpretation.
- **Products and convolutions:** A product transforms into a convolution, while a convolution transforms into a product, with the normalization factors given in [[02 Basic Properties]].
- **Parseval:** $\int|\hat f|^2\,dk=\int|f|^2\,dx$. The $L^2$ norm is preserved.
- **Gaussian widths:** $\signal{\sigma_k}=1/\mechanical{\sigma_x}$, so $\mechanical{\sigma_x}\signal{\sigma_k}=1$. For the normalized Gaussian probability densities, $\mechanical{\Delta x}\signal{\Delta k}=1/2$.
- **Dirac delta:** $\delta(x)=\tfrac1{2\pi}\int e^{ikx}\,dk$ is a distributional identity. Position eigenstates are generalized states rather than ordinary normalizable vectors.
- **Quantum representations:** $\signal{\psi}(\mechanical{x})$ and $\signal{\widetilde\psi}(\mechanical{p})$ represent the same state. The operator $\hat p=-i\mechanical{\hbar}\partial_{\mechanical{x}}$ becomes multiplication by $\mechanical{p}$ in momentum space.

## Choose the setting before the formula

Use a Fourier series for a periodic interval and a whole-line transform for a continuous spectral coordinate. For the latter, an $L^1$ function gives an ordinary absolutely convergent forward integral, while a general $L^2$ function uses the norm extension. Constants, deltas, and plane waves require distributional formulas. These settings can share notation without sharing all pointwise operations.

As a reconstruction test, explain how a normalized discrete mode weight becomes a continuous probability density. The mode spacing enters the squared amplitude, and replacing wavenumber by momentum introduces a second change of measure. Keeping both steps explicit prevents a missing $2\pi$ or $\mechanical{\hbar}$ factor.

Finally, say which width is being used before applying uncertainty. First-zero widths describe spectral lobes; finite standard deviations describe the uncertainty product. The sharp rectangular profile separates these concepts because it has a finite first-zero scale but an infinite spectral second moment.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\sigma_x}$ | $\unit{m}$ | Position amplitude scale | The Gaussian amplitude width. |
| $\signal{\sigma_k}$ | $\unit{m^{-1}}$ | Wavenumber amplitude scale | The reciprocal Gaussian spectral amplitude width. |
| $\mechanical{\Delta x}$ | $\unit{m}$ | Position uncertainty | The probability standard deviation. |
| $\signal{\Delta k}$ | $\unit{m^{-1}}$ | Wavenumber uncertainty | The spectral probability standard deviation. |
| $\mechanical{x}$ | $\unit{m}$ | Position | The coordinate in the position representation. |
| $\mechanical{p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | The coordinate in the momentum representation. |
| $\signal{\psi}$ | $\unit{m^{-1/2}}$ | Position wavefunction | The position probability amplitude in one dimension. |
| $\signal{\widetilde\psi}$ | $(\unit{kg\,m\,s^{-1}})^{-1/2}$ | Momentum wavefunction | The momentum probability amplitude in one dimension. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale in the momentum operator. |
