---
title: "The Fourier Transform"
---

> [!TLDR]
> Fourier conventions differ in normalization and in the frequency variable. These choices change factors such as 2π in differentiation formulas.

## Three common conventions

All integrals in the table extend over the complete real axis.

| Convention | Forward transform | Inverse transform |
| --- | --- | --- |
| Symmetric convention used in this book | $\hat f(k)=\frac1{\sqrt{2\pi}}\int f(x)e^{-ikx}\,dx$ | $f(x)=\frac1{\sqrt{2\pi}}\int\hat f(k)e^{ikx}\,dk$ |
| Engineering convention, frequency $\signal{\nu}$ | $\hat f(\signal{\nu})=\int f(\signal{t})e^{-2\pi i\signal{\nu}\signal{t}}\,d\signal{t}$ | $f(\signal{t})=\int\hat f(\signal{\nu})e^{2\pi i\signal{\nu}\signal{t}}\,d\signal{\nu}$ |
| Common pure-mathematics convention | $\hat f(\xi)=\int f(x)e^{-2\pi i\xi x}\,dx$ | $f(x)=\int\hat f(\xi)e^{2\pi i\xi x}\,d\xi$ |

The third row has the same normalization and phase convention as the engineering row. It changes the variable names. Here, $x$, $k$, and $\xi$ are generic mathematical variables; their physical interpretation depends on the application.

To convert a result, change both the transform value and its argument. Write $\hat f_{\mathrm{sym}}$ for the first row and $\hat f_{\mathrm{cyc}}$ for the third row, applied to the same function $f(x)$. Matching the phases gives $k=2\pi\xi$, so

$$
\hat f_{\mathrm{sym}}(k)
=\frac1{\sqrt{2\pi}}\hat f_{\mathrm{cyc}}\left(\frac{k}{2\pi}\right).
$$

In the inverse transform, $dk=2\pi\,d\xi$ supplies the other normalization factor. Thus these are two coordinate descriptions of the same function, rather than different physical predictions.

For a norm check, substitute the conversion into $\int|\hat f_{\mathrm{sym}}(k)|^2\,dk$. The factor $1/(2\pi)$ from the squared amplitude cancels the factor $2\pi$ from the measure. This gives $\int|\hat f_{\mathrm{cyc}}(\xi)|^2\,d\xi$, consistent with Parseval's relation in both conventions. Changing the variable without changing the measure would fail this test.

The table gives ordinary integrals when they exist. Smooth, rapidly decreasing functions are a safe class for all steps here. On $L^2(\mathbb R)$ the transform extends by norm limits; the displayed integral need not exist pointwise. These continuous transforms also differ from a finite discrete Fourier transform, whose sums, sampling interval, and normalization must be specified separately.

## Effect on derivatives

In the symmetric convention,

$$
\mathcal F[f'](k)=ik\hat f(k).
$$

For the engineering time–frequency convention,

$$
\mathcal F[f'](\signal{\nu})
=2\pi i\signal{\nu}\hat f(\signal{\nu}).
$$

These identities require the appropriate differentiability and boundary conditions, or their corresponding distributional interpretation. Always check which convention an author uses before transferring a formula.

For example, integration by parts in the first row gives a boundary term $[f(x)e^{-ikx}]_{-\infty}^{\infty}$ and the remaining term $ik\int f(x)e^{-ikx}\,dx$. When the boundary term vanishes, the derivative rule follows. **Try a phase change:** If the forward transform instead uses $e^{+ikx}$, which multiplier replaces $ik$? Integration by parts gives $-ik$; a normalization check alone would not detect this sign change.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{t}$ | $\unit{s}$ | Time | The independent variable in the engineering convention. |
| $\signal{\nu}$ | $\unit{Hz}$ | Frequency | The number of cycles per second in the engineering convention. |
