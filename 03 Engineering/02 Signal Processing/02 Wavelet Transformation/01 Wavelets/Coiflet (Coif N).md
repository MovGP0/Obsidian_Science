![[coiflet5 wavelet.png|400]]
This note uses the PyWavelets and MATLAB convention: `coifL` has a filter length of $N = 6L$ taps (the figure shows coif5 with 30 taps). Scaling and wavelet filters satisfy vanishing‑moment constraints: $\psi$ has $2L$ vanishing moments, and $\varphi$ has $2L-1$ vanishing moments ($k = 1, \dots, 2L-1$) in addition to $\int \varphi(t)\,dt = 1$.

The wavelet filter coefficients obey:
$$g_k = (-1)^k\,C_{N - 1 - k}$$
Normalization factor $\frac{1}{\sqrt{2}}$ applies.

Refinement equations:
$$\varphi(t) = \sqrt2 \sum_k C_k \,\varphi(2t - k)$$
$$\psi(t) = \sqrt2 \sum_k g_k \,\varphi(2t - k)$$

> [!note]
> - Examples of specific $C_k$ for coif1 (6 taps), coif2 (12 taps), etc., are tabulated in the literature. Some books name these filters by their length (Coif6, Coif12).
> - The vanishing moments of the scaling and wavelet functions are nearly matched by construction ($2L-1$ and $2L$).
