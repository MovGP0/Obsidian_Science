![[daubechies4 wavelet.png|400]]
No closed-form ψ(t); defined via **scaling (low-pass) filter coefficients** _hₙ_, length 4 (with extremal phase):

$$
h_0 = \frac{1 + \sqrt3}{4\sqrt2},\quad
h_1 = \frac{3 + \sqrt3}{4\sqrt2},\quad
h_2 = \frac{3 - \sqrt3}{4\sqrt2},\quad
h_3 = \frac{1 - \sqrt3}{4\sqrt2}
$$

High‑pass (wavelet) filter _gₙ_ is given by
$$
g_k = (-1)^k \, h_{3 - k},\quad k=0,\dots,3
$$

These define φ and ψ via the refinement equations:
$$
\varphi(t) = \sqrt2 \sum_{n=0}^3 h_n \,\varphi(2t - n),\quad
\psi(t) = \sqrt2 \sum_{n=0}^3 g_n \,\varphi(2t - n)
$$
