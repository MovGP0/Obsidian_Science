![[shannon wavelet.png|400]]
## Father wavelet / Scaling Function $\phi(t)$

Scaling function (father wavelet)

$$\phi(t) = \frac{\sin(\pi t)}{\pi t} = \mathrm{sinc}(t)$$

Its family of dilated and translated versions:

$$\phi^n_k(t) = 2^{n/2}\,\phi(2^n t - k)$$

This forms an ideal low-pass (band-limited) scaling basis

## Mother wavelet $\psi(\omega)$

$$
\psi(\omega)
  = \frac{1}{2\pi} e^{-i\omega}\left[
      \Pi\!\left(\frac{\omega}{\pi} - \tfrac{3}{2}\right)
      + \Pi\!\left(\frac{\omega}{\pi} + \tfrac{3}{2}\right)
    \right]
$$
This time-domain form arises from band-pass filtering the scaling function to keep the frequency support between π and 2π (and symmetrically over negatives)

## Scaled and shifted wavelets

This generates a complete orthonormal wavelet basis for the signal space.

$$\psi_{n,k}(t) = 2^{n/2}\;\psi(2^n t - k)$$

## Fourier-domain formulation

The mother wavelet

$$
\Psi(\omega)
  = \frac{1}{2\pi} e^{-i\omega}\left[
      \Pi\!\left(\frac{\omega}{\pi} - \tfrac{3}{2}\right)
      + \Pi\!\left(\frac{\omega}{\pi} + \tfrac{3}{2}\right)
    \right]
$$

transforms to

$$\psi(t) = 2\;\mathrm{sinc}(2t)\;-\;\mathrm{sinc}(t)$$

where

$$
\Pi(x) =
\begin{cases}
1, & |x| \le \tfrac12,\\
0, & \text{otherwise}
\end{cases}
$$
