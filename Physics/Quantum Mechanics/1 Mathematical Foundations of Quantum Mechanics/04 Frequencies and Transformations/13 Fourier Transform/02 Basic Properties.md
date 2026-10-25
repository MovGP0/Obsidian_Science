---
title: "Basic Properties"
---

> [!TLDR]
> Fourier transformation turns translations into phases, modulation into spectral shifts, and derivatives into multiplication. Its convolution factors depend on the symmetric normalization used here.

| Property | Formula | Quantum use |
| --- | --- | --- |
| Linearity | $\mathcal F[\alpha f+\beta g]=\alpha\hat f+\beta\hat g$ | Superposition. |
| Translation | $\mathcal F[f(x-a)](k)=e^{-ika}\hat f(k)$ | Shifted wave packets. |
| Modulation | $\mathcal F[e^{ik_0x}f(x)](k)=\hat f(k-k_0)$ | Shifted momentum spectra. |
| Derivative | $\mathcal F[f'](k)=ik\hat f(k)$ | Momentum operator. |
| nth derivative | $\mathcal F[f^{(n)}](k)=(ik)^n\hat f(k)$ | Powers of momentum. |
| Convolution | $\mathcal F[f*g]=\sqrt{2\pi}\,\hat f\hat g$ | Propagators. |
| Parseval | $\int\lvert\hat f(k)\rvert^2\,dk=\int\lvert f(x)\rvert^2\,dx$ | Normalization. |

The convolution convention is $(f*g)(x)=\int_{-\infty}^{+\infty}f(y)g(x-y)\,dy$. The formulas require suitable integrability and regularity conditions; distributional extensions are used where appropriate.

The derivative property turns differential equations into algebraic expressions in the transform variable. For a free particle, it converts the position-space Schrödinger equation into an algebraic energy equation in momentum space.

## Example — Proof of the derivative property

$$
\mathcal F[f'](k)=\frac1{\sqrt{2\pi}}\int_{-\infty}^{+\infty}f'(x)e^{-ikx}\,dx.
$$

Integrate by parts, with $u=e^{-ikx}$ and $dv=f'(x)\,dx$:

$$
\begin{aligned}
\mathcal F[f'](k)
&=\frac1{\sqrt{2\pi}}\left[f(x)e^{-ikx}\right]_{-\infty}^{+\infty}
+\frac{ik}{\sqrt{2\pi}}\int_{-\infty}^{+\infty}f(x)e^{-ikx}\,dx\\
&=ik\hat f(k).
\end{aligned}
$$

The boundary term vanishes for sufficiently regular decaying functions, including Schwartz functions. The source also mentions absolutely continuous functions with an integrable derivative, under the required decay conditions.

> [!note]
> Extending the Fourier transform to $L^2$ does not make differentiation an operator on every $L^2$ function. The identity holds in $L^2$ when the weak derivative is also in $L^2$, with the corresponding condition $k\hat f\in L^2$. More generally, it can be interpreted distributionally. Density alone does not remove this derivative-domain restriction.
