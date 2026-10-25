---
title: "Sampling interpolation and the duration–bandwidth relation"
---

> [!TLDR]
> A band-limited square-integrable function can be reconstructed from its Nyquist samples.

Chapter 13 · Exercise 7 · Challenge

Back to [[13 Fourier Transform/08 Exercises|Chapter 13 exercises]].

## Question

A function $f(x)$ is **band-limited** if $\hat f(k)=0$ for $|k|>k_{\max}$.

**(a)** Show that $f$ is determined completely by its values at the sample positions

$$
x_n=\frac{n\pi}{k_{\max}},
$$

the Nyquist spacing. Work with a square-integrable band-limited function.

**(b)** What is the connection with uncertainty? The source describes a signal of finite duration $\signal{T}$ as having a minimum bandwidth of order

$$
\signal{\Delta k}\sim\frac{2\pi}{\signal{T}}.
$$

> [!note]
> In part (b), if $\signal{T}$ is a duration, the conjugate variable is an angular frequency; the source’s label $\Delta k$ then denotes a temporal bandwidth, not a spatial wavenumber. The inverse-width estimate depends on the chosen width convention. A nonzero signal cannot have both strictly finite duration and exact compact Fourier support.

## Worked solution

### (a) Expand the spectrum in an interval Fourier series

Write $b=k_{\max}>0$. Here $x$ and $k$ are mathematical Fourier coordinates until a physical interpretation is selected. Since $\hat f\in L^2[-b,b]$, it also belongs to $L^1[-b,b]$. Thus its inverse transform defines a continuous representative of $f$:

$$
f(x)=\frac1{\sqrt{2\pi}}\int_{-b}^b\hat f(k)e^{ikx}dk.
$$

Use the complete orthonormal basis on the spectral interval

$$
u_n(k)=\frac1{\sqrt{2b}}e^{-in\pi k/b},\qquad n\in\mathbb Z.
$$

The Fourier-series coefficients are samples of the inverse transform:

$$
c_n=\int_{-b}^b u_n(k)^*\hat f(k)dk
=\sqrt{\frac\pi b}\,f(x_n),\qquad x_n=\frac{n\pi}{b}.
$$

Therefore $\hat f=\sum_n c_nu_n$ in $L^2[-b,b]$. Invert each basis element:

$$
\begin{aligned}
\frac1{\sqrt{2\pi}}\int_{-b}^b c_nu_n(k)e^{ikx}dk
&=\frac{f(x_n)}{2b}\int_{-b}^b e^{ik(x-x_n)}dk\\
&=f(x_n)\frac{\sin[b(x-x_n)]}{b(x-x_n)}.
\end{aligned}
$$

This proves the interpolation formula

$$
\boxed{f(x)=\sum_{n\in\mathbb Z}f(x_n)\operatorname{sinc}[b(x-x_n)],
\qquad \operatorname{sinc}u=\frac{\sin u}{u},\quad\operatorname{sinc}0=1.}
$$

Take symmetric partial sums. Their spectral residual tends to zero in $L^2[-b,b]$. The inverse-transform error at any $x$ satisfies

$$
|f(x)-f_N(x)|\leq\sqrt{\frac b\pi}\,\|\hat f-\hat f_N\|_2.
$$

Thus the series converges in $L^2$ and uniformly to the continuous representative. At $x=x_m$, the sinc factor is zero for $n\ne m$ and one for $n=m$. More importantly, if every sample is zero, all Fourier-series coefficients are zero. Completeness then forces $\hat f=0$ and $f=0$. This proves uniqueness, not only consistency at the sample positions.

The spacing is $\pi/b$. With angular-frequency notation the ordinary maximum frequency is $b/(2\pi)$, so the sample density $b/\pi$ is twice that frequency. The $L^2$ assumption excludes nondecaying pure sinusoids at a band edge, which can otherwise cause endpoint qualifications at the critical spacing.

### (b) Separate standard-deviation bounds from support estimates

For a normalized temporal signal with finite second moments, let $\Delta\signal{t}$ and $\Delta\signal{\omega}$ be standard deviations of its squared amplitudes in the two representations. The Fourier uncertainty theorem gives

$$
\Delta\signal{t}\,\Delta\signal{\omega}\geq\frac12.
$$

It follows by applying Cauchy–Schwarz to $(\signal{t}-\langle\signal{t}\rangle)f$ and the centered derivative, whose commutator is one. Parseval identifies the derivative norm with the frequency variance. Thus a smaller duration width requires a larger frequency width, under fixed width definitions.

To understand the source's $2\pi/\signal{T}$ scale, use a rectangular pulse of duration $\signal{T}$ and amplitude $A$. Direct integration gives

$$
\hat f(\signal{\omega})=\frac{A\signal{T}}{\sqrt{2\pi}}
\operatorname{sinc}\left(\frac{\signal{\omega}\signal{T}}2\right).
$$

Its first zeros are at $\signal{\omega}=\pm2\pi/\signal{T}$. The center-to-first-zero bandwidth is $2\pi/\signal{T}$; the full main-lobe width is $4\pi/\signal{T}$. Its frequency variance is infinite, so these zeros do not define a standard deviation. The source's estimate is a characteristic spectral scale, not a universal numerical lower bound for every bandwidth definition.

A signal of compact time support has a Fourier transform that extends to an entire function of complex frequency. If this transform also vanished on an open interval outside a finite band, the identity theorem would force it to vanish everywhere. Thus only the zero signal can have both exact finite duration and exact finite bandwidth. Practical duration and bandwidth limits describe approximate concentration.

## Answer

Nyquist samples at $x_n=n\pi/k_{\max}$ determine the continuous representative uniquely through the sinc series. For time signals, the conjugate variable is angular frequency. The exact standard-deviation relation is $\Delta\signal{t}\,\Delta\signal{\omega}\geq1/2$; the scale $2\pi/\signal{T}$ requires a stated width convention.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{T}$ | $\unit{s}$ | Duration | The rectangular-pulse duration. |
| $\Delta\signal{t}$ | $\unit{s}$ | Time uncertainty | The temporal standard deviation for a normalized signal. |
| $\signal{\omega}$, $\Delta\signal{\omega}$, $\signal{\Delta k}$ | $\unit{s^{-1}}$ | Angular frequency and bandwidth | The temporal Fourier coordinate and spectral width; Δk is the source label. |
