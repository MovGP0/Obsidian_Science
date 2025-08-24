![[haar wavelet.png|400]]
Mother wavelet ψ(t):
$$
\psi(t) = 
\begin{cases}
1, & 0 \le t < \tfrac12,\\
-1, & \tfrac12 \le t < 1,\\
0, & \text{otherwise}
\end{cases}
$$

Scaling function φ(t):
$$
\varphi(t) = 
\begin{cases}
1, & 0 \le t < 1,\\
0, & \text{otherwise}
\end{cases}
$$

Wavelet shifts and scales:
$$
\psi_{n,k}(t) = 2^{n/2}\,\psi(2^n t - k)
$$
