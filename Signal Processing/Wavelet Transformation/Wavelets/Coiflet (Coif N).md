![[coiflet5 wavelet.png|400]]
Scaling and wavelet filters satisfy vanishing‑moment constraints: wavelet and scaling functions have equal vanishing moments.

The wavelet filter coefficients obey:
$$g_k = (-1)^k\,C_{N - 1 - k}$$
Normalization factor $\frac{1}{\sqrt{2}}$​ applies.

Refinement equations:
$$\varphi(t) = \sqrt2 \sum_k C_k \,\varphi(2t - k)$$
$$\psi(t) = \sqrt2 \sum_k g_k \,\varphi(2t - k)$$

> [!note]
> - Examples of specific $C_k​$ for Coif6, Coif12, etc., are tabulated in the literature.
> - Vanishing moments are matched for scaling and wavelet functions by construction.
