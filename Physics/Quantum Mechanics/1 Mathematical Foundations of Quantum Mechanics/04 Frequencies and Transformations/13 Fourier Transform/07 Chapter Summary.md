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
