> [!note]
> - The **father wavelet** (scaling function) captures **approximation**.
>   It behaves like a **low-pass filter**: it keeps the slow, smooth, large-scale parts of the signal (approximations, trends).
> - The **mother wavelet** captures **detail**.
>   It acts like a **high-pass filter**: it keeps the sharp changes, edges, or fine details in the signal.

The mother wavelet can be derived from the father wavelet.

----

The **father wavelet** $\varphi(t)$ is given using the **low-pass filter coefficients** $h_k$:
$$\varphi(t) = \sqrt{2} \sum_{k} h_k \, \varphi(2t - k)$$

----

The **mother wavelet** $\psi(t)$ is given using the **high-pass filter coefficients** $g_{k}$:
$$\psi(t) = \sqrt{2} \sum_{k} g_k \, \varphi(2t - k)$$

## Derivation

Given the father wavelet $\varphi(t)$ and the filter coefficients $h_{k}$​, we can construct the mother wavelet $\psi(t)$ with the coefficients $g_k$ using the relation:
$$g_k​=(−1)^k  h_{1−k}$$

> [!caution]
> The father wavelet is **not uniquely** derivable from the mother wavelet.

----
## Low-pass filter coefficients $h_{k}$ ↔ low-pass filter transfer function $H(ω)$

Let the **low-pass filter coefficients** be $h_k$, for $k=0,1,…,N−1$.

### from Time $t$ to Frequency $\omega$ domain

$$H(z) = \sum_{k=0}^{N-1} h_k z^{-k}$$

On the unit circle $z = e^{i\omega}$:

$$H(\omega) = \sum_{k=0}^{N-1} h_k e^{-i\omega k}$$

###  from Frequency $\omega$ to Time $t$ domain

$$h_k = \frac{1}{2\pi} \int_{-\pi}^{\pi} H(\omega) e^{i\omega k} \, d\omega$$

The **low-pass coefficients** $h_k$ are the _time-domain impulse response_ of the low-pass filter transfer function $H(\omega)$.

----

## High-pass filter coefficients $g_{k}$ ↔ low-pass filter transfer function $G(z)$

This uses the **quadrature mirror filter** (QMF) relation, which enforces orthogonality in wavelets.

Transform from low-pass $h_k$ to high-pass $g_k$:
$$g_k = (-1)^k \, h_{N-1-k}$$

> [!example] Example using the [[Haar Wavelet (Db1)]]
> Low-pass: $h = \left[\tfrac{1}{\sqrt{2}}, \tfrac{1}{\sqrt{2}} \right]$
> High-pass: $g = \left[\tfrac{1}{\sqrt{2}}, -\tfrac{1}{\sqrt{2}} \right]$

----

### From low-pass transfer function $H(z)$ to high-pass transfer function $G(z)$

$$G(z) = z^{-(N-1)} H(-z^{-1})$$

On the unit circle:

$$G(\omega) = e^{-i\omega(N-1)} \, H(\omega+\pi)$$

> [!info] Intuitively
>  We shift the low-pass response by $\pi$ (i.e., swap low/high frequency bands), and apply a phase factor.

### From high-pass transfer function $G(z)$ to low-pass transfer function $H(z)$

$$h_k = (-1)^k \, g_{N-1-k}$$
