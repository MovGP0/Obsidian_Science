![[biorthogonal4.4 wavelet.png|400]]

Defined by two distinct filter banks: one for analysis $(h, g)$, one for reconstruction $\tilde h, \tilde g$.
They satisfy dual moment‑vanishing constraints.

Refinement equations:
$$
\varphi(t) = \sqrt2 \sum_n h_n \,\varphi(2t - n),\quad
\tilde\varphi(t) = \sqrt2 \sum_n \tilde h_n \,\tilde\varphi(2t - n)
$$
and wavelets:
$$
\psi(t) = \sqrt2 \sum_n g_n \,\varphi(2t - n),\quad
\tilde\psi(t) = \sqrt2 \sum_n \tilde g_n \,\tilde\varphi(2t - n)
$$

> [!note]
> - Design ensures symmetry and perfect reconstruction.
> - Primal (h, g) and dual (ĥ, ĝ) filter sets satisfy perfect reconstruction and dual moment constraints.
