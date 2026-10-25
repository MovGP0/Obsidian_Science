---
title: "Definite Integrals"
---

> [!TLDR]
> A definite integral is a limit of sums. The Gaussian integral and its variants are basic tools for calculations with quantum wave packets.

> [!definition] Definition 2.3 — Riemann integral
> For the continuous, or otherwise integrable, functions used here, the **definite integral** of $f$ over $[a,b]$ is
>
> $$
> \int_a^b f(x)\,\mathrm{d}x
> =\lim_{n\to\infty}\sum_{k=1}^{n}f(x_k)\,\Delta x,
> $$
>
> where $x_k=a+k\Delta x$ and $\Delta x=(b-a)/n$.

The **fundamental theorem of calculus** connects derivatives and integrals. If $F'(x)=f(x)$, then

$$
\int_a^b f(x)\,\mathrm{d}x=F(b)-F(a).
$$

The function $F$ is an **antiderivative** of $f$.

## Integrals over unbounded domains

In quantum mechanics, almost all integrals are over the whole real line:

$$
\int_{-\infty}^{+\infty}f(x)\,\mathrm{d}x
=\lim_{\substack{A\to-\infty\\B\to+\infty}}\int_A^B f(x)\,\mathrm{d}x.
$$

These integrals do not always converge. For example, $\int_{-\infty}^{+\infty}1\,\mathrm{d}x$ diverges. We assume that physical wavefunctions tend to zero sufficiently fast at infinity.

## Example — The basic Gaussian integral

$$
\int_{-\infty}^{+\infty}\mathrm{e}^{-ax^2}\,\mathrm{d}x
=\sqrt{\frac{\pi}{a}},\qquad a>0.
$$

This basic result occurs repeatedly in calculations with Gaussian wave packets.

### Proof — Poisson's trick

Call the integral $I$ and calculate $I^2$:

$$
\begin{aligned}
I^2
&=\left(\int_{-\infty}^{+\infty}\mathrm{e}^{-ax^2}\,\mathrm{d}x\right)
\left(\int_{-\infty}^{+\infty}\mathrm{e}^{-ay^2}\,\mathrm{d}y\right)\\
&=\int_{-\infty}^{+\infty}\int_{-\infty}^{+\infty}
\mathrm{e}^{-a(x^2+y^2)}\,\mathrm{d}x\,\mathrm{d}y.
\end{aligned}
$$

Change to polar coordinates $x=r\cos\varphi$ and $y=r\sin\varphi$, with $\mathrm{d}x\,\mathrm{d}y=r\,\mathrm{d}r\,\mathrm{d}\varphi$:

$$
I^2=\int_0^{2\pi}\mathrm{d}\varphi\int_0^\infty\mathrm{e}^{-ar^2}r\,\mathrm{d}r
=2\pi\int_0^\infty r\mathrm{e}^{-ar^2}\,\mathrm{d}r.
$$

For the radial integral, use $u=ar^2$ and $\mathrm{d}u=2ar\,\mathrm{d}r$:

$$
\int_0^\infty r\mathrm{e}^{-ar^2}\,\mathrm{d}r
=\frac{1}{2a}\int_0^\infty\mathrm{e}^{-u}\,\mathrm{d}u
=\frac{1}{2a}.
$$

Thus, $I^2=2\pi\cdot1/(2a)=\pi/a$. Since $I$ is positive, $I=\sqrt{\pi/a}$. $\square$

## Useful variants

Differentiate with respect to $a$, or complete the square, to obtain

$$
\int_{-\infty}^{+\infty}x^2\mathrm{e}^{-ax^2}\,\mathrm{d}x
=\frac12\sqrt{\frac{\pi}{a^3}}. \tag{2.1}
$$

$$
\int_{-\infty}^{+\infty}\mathrm{e}^{-ax^2+bx}\,\mathrm{d}x
=\sqrt{\frac{\pi}{a}}\,\mathrm{e}^{b^2/(4a)}. \tag{2.2}
$$

Equation (2.1) follows by differentiation of the Gaussian integral with respect to $a$:

$$
\begin{aligned}
\int_{-\infty}^{+\infty}x^2\mathrm{e}^{-ax^2}\,\mathrm{d}x
&=-\frac{\mathrm{d}}{\mathrm{d}a}\int_{-\infty}^{+\infty}\mathrm{e}^{-ax^2}\,\mathrm{d}x\\
&=-\frac{\mathrm{d}}{\mathrm{d}a}\sqrt{\frac{\pi}{a}}
=\frac12\sqrt{\frac{\pi}{a^3}}.
\end{aligned}
$$

> [!note]
> The source omits the integration limits in this differentiation line. They are shown explicitly here because the calculation uses the definite integral over the real line. These formulas use $a>0$; for the real-variable completion of the square, take real $b$.

Equation (2.2) follows by completion of the square:

$$
-ax^2+bx=-a\left(x-\frac{b}{2a}\right)^2+\frac{b^2}{4a}.
$$

Fig. 2.1 shows the Gaussian curve for different values of $a$.

```graph
bounds: [-3.65, 1.38, 4.85, -0.23]
height: 360
width: 740
axis: false
drag: false
showNavigation: false
keepAspectRatio: false
elements: [
  {"type":"polygon","def":[[-3.5,0],[-3.5,4.8E-06],[-3.4125,8.8E-06],[-3.325,1.58E-05],[-3.2375,2.81E-05],[-3.15,4.91E-05],[-3.0625,8.45E-05],[-2.975,0.0001433],[-2.8875,0.0002393],[-2.8,0.0003937],[-2.7125,0.0006377],[-2.625,0.0010173],[-2.5375,0.0015982],[-2.45,0.0024726],[-2.3625,0.0037673],[-2.275,0.0056527],[-2.1875,0.0083528],[-2.1,0.0121552],[-2.0125,0.0174197],[-1.925,0.0245848],[-1.8375,0.03417],[-1.75,0.0467706],[-1.6625,0.063045],[-1.575,0.0836909],[-1.4875,0.1094096],[-1.4,0.1408584],[-1.3125,0.1785911],[-1.225,0.2229907],[-1.1375,0.2741976],[-1.05,0.3320399],[-0.9625,0.3959742],[-0.875,0.4650432],[-0.7875,0.5378604],[-0.7,0.6126264],[-0.6125,0.6871819],[-0.525,0.7590975],[-0.4375,0.825797],[-0.35,0.8847059],[-0.2625,0.9334142],[-0.175,0.9698392],[-0.0875,0.992373],[0.0,1.0],[0.0875,0.992373],[0.175,0.9698392],[0.2625,0.9334142],[0.35,0.8847059],[0.4375,0.825797],[0.525,0.7590975],[0.6125,0.6871819],[0.7,0.6126264],[0.7875,0.5378604],[0.875,0.4650432],[0.9625,0.3959742],[1.05,0.3320399],[1.1375,0.2741976],[1.225,0.2229907],[1.3125,0.1785911],[1.4,0.1408584],[1.4875,0.1094096],[1.575,0.0836909],[1.6625,0.063045],[1.75,0.0467706],[1.8375,0.03417],[1.925,0.0245848],[2.0125,0.0174197],[2.1,0.0121552],[2.1875,0.0083528],[2.275,0.0056527],[2.3625,0.0037673],[2.45,0.0024726],[2.5375,0.0015982],[2.625,0.0010173],[2.7125,0.0006377],[2.8,0.0003937],[2.8875,0.0002393],[2.975,0.0001433],[3.0625,8.45E-05],[3.15,4.91E-05],[3.2375,2.81E-05],[3.325,1.58E-05],[3.4125,8.8E-06],[3.5,4.8E-06],[3.5,0]],"att":{"fillColor":"#6f9e7e","fillOpacity":0.35,"borders":{"visible":false},"vertices":{"fixed":true,"visible":false},"fixed":true,"hasInnerPoints":false}},
  {type: line, def: [[-3.5, 0], [3.5, 0]], att: {straightFirst: false, straightLast: false, lastArrow: true, strokeColor: '#555555', strokeWidth: 1.2, fixed: true}},
  {type: line, def: [[0, 0], [0, 1.22]], att: {straightFirst: false, straightLast: false, lastArrow: true, strokeColor: '#555555', strokeWidth: 1.2, fixed: true}},
  {type: functiongraph, def: [f:exp(-0.5*(x**2)), -3.5, 3.5], att: {strokeColor: '#2455a4', strokeWidth: 2}},
  {type: functiongraph, def: [f:exp(-(x**2)), -3.5, 3.5], att: {strokeColor: '#4b946b', strokeWidth: 2}},
  {type: functiongraph, def: [f:exp(-2*(x**2)), -3.5, 3.5], att: {strokeColor: '#c13c43', strokeWidth: 2}},
  {type: line, def: [[-3, 0], [-3, -0.035]], att: {straightFirst: false, straightLast: false, strokeColor: '#777777', strokeWidth: 1, fixed: true}},
  {type: line, def: [[-2, 0], [-2, -0.035]], att: {straightFirst: false, straightLast: false, strokeColor: '#777777', strokeWidth: 1, fixed: true}},
  {type: line, def: [[-1, 0], [-1, -0.035]], att: {straightFirst: false, straightLast: false, strokeColor: '#777777', strokeWidth: 1, fixed: true}},
  {type: line, def: [[1, 0], [1, -0.035]], att: {straightFirst: false, straightLast: false, strokeColor: '#777777', strokeWidth: 1, fixed: true}},
  {type: line, def: [[2, 0], [2, -0.035]], att: {straightFirst: false, straightLast: false, strokeColor: '#777777', strokeWidth: 1, fixed: true}},
  {type: line, def: [[3, 0], [3, -0.035]], att: {straightFirst: false, straightLast: false, strokeColor: '#777777', strokeWidth: 1, fixed: true}},
  {type: text, def: [-3, -0.085, '−3'], att: {fixed: true, fontSize: 14, anchorX: 'middle', anchorY: 'top', useMathJax: false}},
  {type: text, def: [-2, -0.085, '−2'], att: {fixed: true, fontSize: 14, anchorX: 'middle', anchorY: 'top', useMathJax: false}},
  {type: text, def: [-1, -0.085, '−1'], att: {fixed: true, fontSize: 14, anchorX: 'middle', anchorY: 'top', useMathJax: false}},
  {type: text, def: [1, -0.085, '1'], att: {fixed: true, fontSize: 14, anchorX: 'middle', anchorY: 'top', useMathJax: false}},
  {type: text, def: [2, -0.085, '2'], att: {fixed: true, fontSize: 14, anchorX: 'middle', anchorY: 'top', useMathJax: false}},
  {type: text, def: [3, -0.085, '3'], att: {fixed: true, fontSize: 14, anchorX: 'middle', anchorY: 'top', useMathJax: false}},
  {type: text, def: [3.56, 0.045, 'x'], att: {fixed: true, fontSize: 16, anchorX: 'left', anchorY: 'middle', useMathJax: false}},
  {type: text, def: [-0.18, 1.06, '1'], att: {fixed: true, fontSize: 14, anchorX: 'right', anchorY: 'middle', useMathJax: false}},
  {type: text, def: [0.42, 0.37, '∫ = √π'], att: {fixed: true, fontSize: 18, anchorX: 'middle', anchorY: 'middle', useMathJax: false}},
  {type: line, def: [[1.65, 1.22], [2, 1.22]], att: {straightFirst: false, straightLast: false, strokeColor: '#2455a4', strokeWidth: 2, fixed: true}},
  {type: text, def: [2.1, 1.22, 'e^(−x²/2); area √(2π)'], att: {fixed: true, fontSize: 13, anchorX: 'left', anchorY: 'middle', useMathJax: false, strokeColor: '#333333'}},
  {type: line, def: [[1.65, 1.09], [2, 1.09]], att: {straightFirst: false, straightLast: false, strokeColor: '#4b946b', strokeWidth: 2, fixed: true}},
  {type: text, def: [2.1, 1.09, 'e^(−x²); area √π'], att: {fixed: true, fontSize: 13, anchorX: 'left', anchorY: 'middle', useMathJax: false, strokeColor: '#333333'}},
  {type: line, def: [[1.65, 0.96], [2, 0.96]], att: {straightFirst: false, straightLast: false, strokeColor: '#c13c43', strokeWidth: 2, fixed: true}},
  {type: text, def: [2.1, 0.96, 'e^(−2x²); area √(π/2)'], att: {fixed: true, fontSize: 13, anchorX: 'left', anchorY: 'middle', useMathJax: false, strokeColor: '#333333'}}
]
```

**Fig. 2.1** The Gaussian curve $\mathrm{e}^{-ax^2}$ for $a=0.5,1,2$. The height at the origin is always $1$. Only the width, and thus the total area $\sqrt{\pi/a}$, changes with $a$. The shaded area under $\mathrm{e}^{-x^2}$ is $\sqrt\pi$ over the whole real line.
