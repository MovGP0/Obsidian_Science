---
title: "Important Transform Pairs"
---

> [!TLDR]
> A Gaussian transforms into a Gaussian with reciprocal amplitude width. A rectangular window transforms into a sinc function; its main-lobe width is different from a statistical standard deviation.

## Example — Fourier transform of a Gaussian

For $f(x)=e^{-ax^2/2}$ with $a>0$,

$$
\hat f(k)=\frac1{\sqrt{2\pi}}\int_{-\infty}^{+\infty}e^{-ax^2/2-ikx}\,dx.
$$

Complete the square:

$$
-\frac a2x^2-ikx=-\frac a2\left(x+\frac{ik}a\right)^2-\frac{k^2}{2a}.
$$

Thus,

$$
\begin{aligned}
\hat f(k)
&=\frac{e^{-k^2/(2a)}}{\sqrt{2\pi}}
\int_{-\infty}^{+\infty}e^{-a(x+ik/a)^2/2}\,dx\\
&=\frac{e^{-k^2/(2a)}}{\sqrt{2\pi}}\sqrt{\frac{2\pi}a}
=\frac1{\sqrt a}e^{-k^2/(2a)}.
\end{aligned}
$$

The complex shift in the Gaussian integral is justified by contour deformation: the integrand is entire and decays on the shifted horizontal contour.

The Gaussian amplitude falls to $e^{-1/2}$ of its peak at the characteristic scale $\mechanical{\sigma_x}=1/\sqrt a$. Its transform has amplitude scale $\signal{\sigma_k}=\sqrt a$. Therefore,

$$
\mechanical{\sigma_x}\signal{\sigma_k}=1.
$$

When $x$ is interpreted as position and $k$ as wavenumber, the standard deviations of the normalized probability densities are

$$
\mechanical{\Delta x}=\frac{\mechanical{\sigma_x}}{\sqrt2},
\qquad\signal{\Delta k}=\frac{\signal{\sigma_k}}{\sqrt2},
\qquad\mechanical{\Delta x}\signal{\Delta k}=\frac12.
$$

With $\mechanical{p}=\mechanical{\hbar}\signal{k}$, this gives

$$
\mechanical{\Delta x}\mechanical{\Delta p}=\frac{\mechanical{\hbar}}2.
$$

A normalized unchirped Gaussian therefore saturates the Heisenberg bound.

```graph
bounds: [-8.2, 1.8, 8.2, -0.85]
height: 390
width: 700
axis: false
drag: false
showNavigation: false
keepAspectRatio: false
elements: [
  {type: line, def: [[-7.8, 0], [-0.5, 0]], att: {straightFirst: false, straightLast: false, lastArrow: true, fixed: true, strokeColor: '#666666', strokeWidth: 1}},
  {type: line, def: [[0.5, 0], [7.8, 0]], att: {straightFirst: false, straightLast: false, lastArrow: true, fixed: true, strokeColor: '#666666', strokeWidth: 1}},
  {type: line, def: [[-4, 0], [-4, 1.18]], att: {straightFirst: false, straightLast: false, lastArrow: true, fixed: true, strokeColor: '#777777', strokeWidth: 1}},
  {type: line, def: [[4, 0], [4, 1.18]], att: {straightFirst: false, straightLast: false, lastArrow: true, fixed: true, strokeColor: '#777777', strokeWidth: 1}},
  {type: functiongraph, def: [f:exp(-((x+4)**2)/(2*0.7**2)), -7.8, -0.2], att: {fixed: true, strokeColor: '#315aa6', strokeWidth: 2}},
  {type: functiongraph, def: [f:0.7*exp(-(0.7**2)*((x-4)**2)/2), 0.2, 7.8], att: {fixed: true, strokeColor: '#007e9b', strokeWidth: 2}},
  {type: text, def: [-4, 1.52, 'Position space'], att: {fixed: true, fontSize: 17, anchorX: 'middle', anchorY: 'middle', strokeColor: '#315aa6'}},
  {type: text, def: [4, 1.52, 'Wavenumber space'], att: {fixed: true, fontSize: 17, anchorX: 'middle', anchorY: 'middle', strokeColor: '#007e9b'}},
  {type: text, def: [-3.45, 1.14, 'f(x)'], att: {fixed: true, fontSize: 16, anchorX: 'left', anchorY: 'middle'}},
  {type: text, def: [4.55, 0.95, 'f̂(k)'], att: {fixed: true, fontSize: 16, anchorX: 'left', anchorY: 'middle'}},
  {type: text, def: [-4.15, 1, '1'], att: {fixed: true, fontSize: 14, anchorX: 'right', anchorY: 'middle'}},
  {type: text, def: [3.85, 0.7, '0.7'], att: {fixed: true, fontSize: 14, anchorX: 'right', anchorY: 'middle'}},
  {type: text, def: [-6, -0.16, '−2'], att: {fixed: true, fontSize: 14, anchorX: 'middle', anchorY: 'middle'}},
  {type: text, def: [-2, -0.16, '2'], att: {fixed: true, fontSize: 14, anchorX: 'middle', anchorY: 'middle'}},
  {type: text, def: [2, -0.16, '−2'], att: {fixed: true, fontSize: 14, anchorX: 'middle', anchorY: 'middle'}},
  {type: text, def: [6, -0.16, '2'], att: {fixed: true, fontSize: 14, anchorX: 'middle', anchorY: 'middle'}},
  {type: text, def: [-0.65, -0.15, 'x'], att: {fixed: true, fontSize: 16, anchorX: 'right', anchorY: 'middle'}},
  {type: text, def: [7.7, -0.15, 'k'], att: {fixed: true, fontSize: 16, anchorX: 'right', anchorY: 'middle'}},
  {type: line, def: [[-4, 0.60653066], [-3.3, 0.60653066]], att: {straightFirst: false, straightLast: false, firstArrow: true, lastArrow: true, fixed: true, strokeColor: '#6b86b6', strokeWidth: 1}},
  {type: text, def: [-3.65, 0.43, 'σₓ'], att: {fixed: true, fontSize: 15, anchorX: 'middle', anchorY: 'middle', strokeColor: '#6b86b6'}},
  {type: line, def: [[4, 0.42457146], [5.42857143, 0.42457146]], att: {straightFirst: false, straightLast: false, firstArrow: true, lastArrow: true, fixed: true, strokeColor: '#4c9ba8', strokeWidth: 1}},
  {type: text, def: [4.7142857, 0.26, 'σₖ'], att: {fixed: true, fontSize: 15, anchorX: 'middle', anchorY: 'middle', strokeColor: '#4c9ba8'}},
  {type: line, def: [[-1, 0.55], [1, 0.55]], att: {straightFirst: false, straightLast: false, lastArrow: true, fixed: true, strokeColor: '#007e9b', strokeWidth: 1.5}},
  {type: text, def: [0, 0.78, 'ℱ'], att: {fixed: true, fontSize: 23, anchorX: 'middle', anchorY: 'middle', strokeColor: '#007e9b'}},
  {type: text, def: [0, 0.28, 'σₖ = 1/σₓ'], att: {fixed: true, fontSize: 13, anchorX: 'middle', anchorY: 'middle', strokeColor: '#007e9b'}},
  {type: text, def: [0, -0.58, 'σₓσₖ = 1  ⇒  ΔxΔp = ℏ/2'], att: {fixed: true, fontSize: 17, anchorX: 'middle', anchorY: 'middle', strokeColor: '#b52d3c'}}
]
```

**Fig. 13.1** Position–frequency duality of the Fourier transform. A narrow Gaussian in position has a broad Gaussian transform in wavenumber, with reciprocal amplitude scales. The illustrated mathematical pair uses $\sigma_x=0.7$, $\sigma_k=1/0.7$ in reciprocal coordinate units and retains the transform’s amplitude prefactor. After state normalization, its probability standard deviations obey $\mechanical{\Delta x}\mechanical{\Delta p}=\mechanical{\hbar}/2$. The right coordinate is wavenumber; momentum follows from $\mechanical{p}=\mechanical{\hbar}\signal{k}$.

## Example — Transform of a rectangular window

For

$$
f(x)=\begin{cases}1,&|x|\le L/2,\\0,&|x|>L/2,\end{cases}
$$

the transform is

$$
\begin{aligned}
\hat f(k)
&=\frac1{\sqrt{2\pi}}\int_{-L/2}^{L/2}e^{-ikx}\,dx\\
&=\frac1{\sqrt{2\pi}}\frac{e^{ikL/2}-e^{-ikL/2}}{ik}
=\sqrt{\frac2\pi}\frac{\sin(kL/2)}k.
\end{aligned}
$$

The value at $k=0$ is the continuous limit, $L/\sqrt{2\pi}$. The transform is a **sinc** profile. The first zeros are at $k=\pm2\pi/L$, so the characteristic main-lobe scale is of order $2\pi/L$. A narrower window gives a broader spectrum.

> [!note]
> The source writes a width estimate $\Delta x\,\Delta k\sim2\pi$. These are heuristic window and first-zero widths, not probability standard deviations. The full zero-to-zero main-lobe width is $4\pi/L$. A normalized sharp rectangular wavefunction has an infinite wavenumber second moment, so its momentum standard deviation is not finite.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\sigma_x}$ | $\unit{m}$ | Gaussian amplitude scale | The position distance where amplitude falls to its peak times exp(−1/2). |
| $\signal{\sigma_k}$ | $\unit{m^{-1}}$ | Spectral amplitude scale | The corresponding wavenumber amplitude width. |
| $\mechanical{\Delta x}$ | $\unit{m}$ | Position uncertainty | The standard deviation of the normalized position density. |
| $\signal{\Delta k}$ | $\unit{m^{-1}}$ | Wavenumber uncertainty | The standard deviation of the normalized Gaussian spectral density. |
| $\mechanical{p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | The momentum associated with a wavenumber. |
| $\signal{k}$ | $\unit{m^{-1}}$ | Wavenumber | The spatial phase frequency in the physical interpretation. |
| $\mechanical{\Delta p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum uncertainty | The Gaussian momentum standard deviation. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The conversion factor between momentum and wavenumber. |
