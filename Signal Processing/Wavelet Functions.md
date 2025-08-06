## Overview of Wavelet Functions

| Wavelet Family           | Alternative Names | Example                               | Type       | Construction method               | Support / Analytic Form                                                      | Orthogonal / Biorthogonal        | Vanishing Moments                           | Typical Use                                   | Closed‑form ψ(t)? |
| ------------------------ | ----------------- | ------------------------------------- | ---------- | --------------------------------- | ---------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------- | --------------------------------------------- | ----------------- |
| Haar                     | Db1               | ![[haar wavelet.png\|400]]            | Discrete   | Step function                     | Square pulse; piecewise +1/–1 rule                                           | Orthogonal                       | 1 (i.e. piecewise constant representation)  | Edge detection, simple compression            | ✅                 |
| Shannon                  | Shan              | ![[shannon wavelet.png\|400]]         | Continuous | sinc-based ideal bandpass         | Sinc-based ideal band‐limited wavelet                                        | Orthogonal (not compact support) | Infinite (ideal bandlimited behavior)       | Frequency‐domain analysis                     |                   |
| Daubechies 4             | Db4               | ![[daubechies4 wavelet.png\|400]]     | Discrete   | 4‑tap filter, refinement eqns     | Finite support (4 taps kernel), filter‐based                                 | Orthogonal                       | 2 (i.e. constant + linear)                  | General-purpose DWT with compact support      | ❌ (filter only)   |
| Daubechies 20            | Db20              | ![[daubechies20 wavelet.png\|400]]    | Discrete   | 20‑tap filter via spectral factor | Larger finite support (20 taps), smoother filters                            | Orthogonal                       | 10 vanishing moments                        | More regular signal representation            | ❌                 |
| Biorthogonal             |                   | ![[biorthogonal4.4 wavelet.png\|400]] | Discrete   | Separate dual filters             | Two filter banks (primal and dual)                                           | Biorthogonal                     | Adjustable (e.g. 3/5, 9/7 designs)          | Perfect reconstruction with symmetry          | ❌                 |
| Coiflet                  | CoifN             | ![[coiflet5 wavelet.png\|400]]        | Discrete   | Dual vanishing moments filters    | Compact support, designed near-symmetric                                     | Orthogonal                       | N/3 for wavelet, (N/3−1) for scaling        | High vanishing moments with symmetry          | ❌                 |
| Gaussian<br>p‑derivative | GausN             | ![[gaussian wavelet.png\|400]]        | Continuous | p‑th derivative of Gaussian       | Derivatives of Gaussian — smooth, infinite support                           | Approximate; non‐orthogonal      | Nth derivative structure (e.g. cgau family) | Feature detection, CWT-based signal analysis  | ✅                 |
| Mexican Hat              | Ricker/Marr       | ![[mexican hat wavelet.png\|400]]     | Continuous | 2nd derivative Gaussian           | Second derivative of Gaussian:$(1 - \frac{t^2}{σ^2})\,e^{-\frac{t^2}{2σ^2}}$ | Real-valued, non‐orthogonal      | 2 (second derivative)                       | Blob/edge detection, seismic, vision analysis | ✅                 |

> [!note] Discrete vs. Continuous
> - Haar, Daubechies, Biorthogonal, Coiflet are **discrete wavelets** typically used in fast wavelet transforms.
> - Mexican Hat, Shannon, Gaussian are used in **continuous wavelet transforms (CWT)**

> [!Note] Vanishing moments
> Vanishing moments are important for polynomial signal approximation.
> Higher Db order (e.g. Db20) or Coiflet means better representation of smooth variations.

> [!note] Support and symmetry
> - Haar is simplest but discontinuous. 
> - Coiflet offers near symmetry and more localization.
> - Shannon is ideal in frequency but infinite in time support.

## Sources

- [YouTube: Wavelets](https://www.youtube.com/watch?v=jnxqHcObNK)
