---
title: "Convergence and the Gibbs Phenomenon"
---

> [!TLDR]
> Under Dirichlet conditions, a Fourier series converges to the function at continuity points and to the midpoint of a jump. Near a jump, the Gibbs overshoot persists while its width decreases.

> [!theorem] Theorem 12.1 | Pointwise convergence — Dirichlet, 1829
> If the periodic extension of $f$ is piecewise continuously differentiable on a period, its Fourier series converges:
>
> - To $f(x)$ at continuity points.
> - To $\tfrac12(f(x^-)+f(x^+))$ at jump discontinuities.

At the endpoints of $[-L,L]$, use the one-sided limits of the **periodic extension**. The stated piecewise regularity is a sufficient condition.

## The Gibbs phenomenon

Near a jump, the Fourier partial sums do not converge uniformly to the discontinuous function. A persistent overshoot approaches about **9% of the jump height** as more harmonics are included. This is the **Gibbs phenomenon**, associated with Gibbs in 1899 and observed earlier by Wilbraham in 1848.

```graph
bounds: [-3.85, 1.95, 3.8, -1.8]
height: 410
width: 700
axis: false
drag: false
showNavigation: false
keepAspectRatio: false
elements: [
  {type: line, def: [[-3.4, 0], [3.4, 0]], att: {straightFirst: false, straightLast: false, lastArrow: true, fixed: true, strokeColor: '#666666', strokeWidth: 1}},
  {type: line, def: [[0, -1.36], [0, 1.40]], att: {straightFirst: false, straightLast: false, lastArrow: true, fixed: true, strokeColor: '#777777', strokeWidth: 1}},
  {type: line, def: [[-3.1415926536, -1], [0, -1]], att: {straightFirst: false, straightLast: false, fixed: true, strokeColor: '#888888', strokeWidth: 1.8, dash: 2}},
  {type: line, def: [[0, 1], [3.1415926536, 1]], att: {straightFirst: false, straightLast: false, fixed: true, strokeColor: '#888888', strokeWidth: 1.8, dash: 2}},
  {type: functiongraph, def: [f:(4/PI)*(sin(x)+sin(3*x)/3+sin(5*x)/5), -3.1415926536, 3.1415926536], att: {fixed: true, strokeColor: '#6b86b6', strokeWidth: 1.6}},
  {type: functiongraph, def: [f:(4/PI)*(sin(x)+sin(3*x)/3+sin(5*x)/5+sin(7*x)/7+sin(9*x)/9+sin(11*x)/11+sin(13*x)/13+sin(15*x)/15+sin(17*x)/17+sin(19*x)/19+sin(21*x)/21+sin(23*x)/23+sin(25*x)/25), -3.1415926536, 3.1415926536], att: {fixed: true, strokeColor: '#00788b', strokeWidth: 1.8}},
  {type: text, def: [-3.1415926536, -0.17, '−π'], att: {fixed: true, fontSize: 16, anchorX: 'middle', anchorY: 'middle'}},
  {type: text, def: [3.1415926536, -0.17, 'π'], att: {fixed: true, fontSize: 16, anchorX: 'middle', anchorY: 'middle'}},
  {type: text, def: [-0.10, -0.17, '0'], att: {fixed: true, fontSize: 14, anchorX: 'right', anchorY: 'middle'}},
  {type: text, def: [-0.12, 1, '1'], att: {fixed: true, fontSize: 14, anchorX: 'right', anchorY: 'middle'}},
  {type: text, def: [-0.12, -1, '−1'], att: {fixed: true, fontSize: 14, anchorX: 'right', anchorY: 'middle'}},
  {type: text, def: [3.45, -0.16, 'x'], att: {fixed: true, fontSize: 16, anchorX: 'left', anchorY: 'middle'}},
  {type: line, def: [[-3.25, 1.70], [-2.9, 1.70]], att: {straightFirst: false, straightLast: false, fixed: true, strokeColor: '#888888', strokeWidth: 1.8, dash: 2}},
  {type: text, def: [-2.79, 1.70, 'sgn(x)'], att: {fixed: true, fontSize: 15, anchorX: 'left', anchorY: 'middle'}},
  {type: line, def: [[-1.35, 1.70], [-1, 1.70]], att: {straightFirst: false, straightLast: false, fixed: true, strokeColor: '#6b86b6', strokeWidth: 1.6}},
  {type: text, def: [-0.89, 1.70, 'N = 5'], att: {fixed: true, fontSize: 15, anchorX: 'left', anchorY: 'middle'}},
  {type: line, def: [[0.45, 1.70], [0.8, 1.70]], att: {straightFirst: false, straightLast: false, fixed: true, strokeColor: '#00788b', strokeWidth: 1.8}},
  {type: text, def: [0.91, 1.70, 'N = 25'], att: {fixed: true, fontSize: 15, anchorX: 'left', anchorY: 'middle'}},
  {type: text, def: [1.45, 1.36, 'Overshoot ≈ 9% of jump'], att: {fixed: true, fontSize: 14, anchorX: 'middle', anchorY: 'middle', strokeColor: '#b52d3c'}},
  {type: line, def: [[0.8, 1.31], [0.15, 1.18]], att: {straightFirst: false, straightLast: false, lastArrow: true, fixed: true, strokeColor: '#b52d3c', strokeWidth: 1}},
  {type: text, def: [0, -1.55, 'N = highest harmonic'], att: {fixed: true, fontSize: 14, anchorX: 'middle', anchorY: 'middle'}}
]
```

**Fig. 12.1** Gibbs phenomenon for the Fourier series of the sign function. Partial sums through highest harmonics $N=5$ and $N=25$ show the persistent overshoot near the jump at $x=0$. Increasing the harmonic cutoff moves the peak closer to the jump without removing its limiting amplitude, approximately 9% of the jump height.

> [!note]
> The source legend identifies $N$ as the highest harmonic, while the caption describes “25 terms.” Only odd harmonics are nonzero here, so $N=5$ contains three sine terms and $N=25$ contains thirteen. The figure follows the legend’s harmonic cutoffs. Since the jump height is $2$, the limiting excess above $1$ is approximately $0.18$, not $0.09$.

The Fourier series converges in the $L^2$ norm, but not uniformly on a neighborhood containing a jump. At each fixed continuity point, pointwise convergence still holds. The narrowing overshoot region is consistent with norm convergence.

The source notes that discontinuous quantum wavefunctions would have problematic energy behavior. For the usual Schrödinger kinetic-energy operator, a jump generally prevents a wavefunction from having finite kinetic energy. Square integrability alone does not guarantee finite energy; the energy form and operator domain matter.
