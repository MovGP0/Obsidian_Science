![[daubechies20 wavelet.png|400]]
Constructed similarly to Db4 but with 20 taps (10 vanishing moments). No closed‑form ψ(t); coefficients satisfy:
$$a(Z) = 2^{1 - A}\,(1 + Z)^A\, p(Z)$$

for $A=10$, plus orthogonality constraint:

$$a(Z)a(Z^{-1}) + a(-Z)a(-Z^{-1}) = 4$$

Spectral factorization yields filter taps; ψ from the corresponding high-pass filter via the same refinement relation.

----

Filter coefficients are derived via spectral factorization, and then

$$\varphi(t) = \sqrt2 \sum_n h_n \varphi(2t - n)$$
$$\psi(t) = \sqrt2 \sum_n g_n \varphi(2t - n)$$
