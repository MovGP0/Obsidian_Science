![[daubechies20 wavelet.png|400]]
Constructed similarly to Db4 but with 20 taps (10 vanishing moments). No closed‑form ψ(t); coefficients satisfy:
$$a(Z) = 2^{1 - A}\,(1 + Z)^A\, p(Z)$$

for $A=10$. Here $a(Z) = \sum_n a_n Z^n$ with the normalization $a(1) = \sum_n a_n = 2$, and $p(Z)$ is a polynomial of degree $A-1$ with $p(1) = 1$. Orthogonality constraint:

$$a(Z)a(Z^{-1}) + a(-Z)a(-Z^{-1}) = 4$$

Spectral factorization yields filter taps; ψ from the corresponding high-pass filter via the same refinement relation.

> [!note] Naming convention
> This note names Daubechies wavelets by the number of filter taps: Db20 has 20 taps and $A = 10$ vanishing moments (Daubechies' D20). MATLAB and PyWavelets name wavelets by the number of vanishing moments, so this wavelet is `db10` there, and `db20` has 40 taps. The [[Haar Wavelet (Db1)]] note uses the vanishing-moment convention (Haar = `db1` = D2).

----

Filter coefficients are derived via spectral factorization. With $h_n = a_n/\sqrt2$ (so $\sum_n h_n = \sqrt2$), then

$$\varphi(t) = \sqrt2 \sum_n h_n \varphi(2t - n)$$
$$\psi(t) = \sqrt2 \sum_n g_n \varphi(2t - n)$$
