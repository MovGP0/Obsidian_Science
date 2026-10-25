---
title: "The four roots of z⁴ = −16"
---

> [!TLDR]
> The four fourth roots have modulus 2 and lie at equal angular intervals on a square.

Chapter 1 — Complex Numbers. Exercise 6. **Difficulty: Intermediate.**

Back to [[01 Complex Numbers/09 Exercises#Exercise 6|the chapter exercise index]].

## Question

Find all solutions of $z^4=-16$. Plot them in the complex plane.

## Worked solution

Write the right side with all equivalent arguments:

$$
-16=16\mathrm{e}^{\mathrm{i}(\pi+2\pi k)},\qquad k\in\mathbb Z.
$$

If $z=r\mathrm{e}^{\mathrm{i}\theta}$, then $z^4=r^4\mathrm{e}^{4\mathrm{i}\theta}$. Equality of the moduli gives $r^4=16$, so $r=2$. Equality of the arguments gives

$$
4\theta=\pi+2\pi k,
\qquad \theta=\frac\pi4+\frac{k\pi}{2}.
$$

Increasing $k$ by four adds $2\pi$ to the angle and repeats the same root. Thus $k=0,1,2,3$ gives all distinct roots:

$$
z_k=2\mathrm{e}^{\mathrm{i}\pi(1+2k)/4}.
$$

Use $z_k=2\cos\theta_k+2\mathrm{i}\sin\theta_k$ to obtain the exact Cartesian coordinates:

| Root | Argument | Cartesian form | Coordinates $(\operatorname{Re}z,\operatorname{Im}z)$ |
| --- | --- | --- | --- |
| $z_0$ | $\pi/4$ | $\sqrt2+\mathrm{i}\sqrt2$ | $(\sqrt2,\sqrt2)$ |
| $z_1$ | $3\pi/4$ | $-\sqrt2+\mathrm{i}\sqrt2$ | $(-\sqrt2,\sqrt2)$ |
| $z_2$ | $5\pi/4$ | $-\sqrt2-\mathrm{i}\sqrt2$ | $(-\sqrt2,-\sqrt2)$ |
| $z_3$ | $7\pi/4$ | $\sqrt2-\mathrm{i}\sqrt2$ | $(\sqrt2,-\sqrt2)$ |

They lie at equal angular intervals of $\pi/2$ on $|z|=2$. Each side of the square has length $2\sqrt2$.

```graph
bounds: [-2.6, 2.6, 2.6, -2.6]
height: 520
width: 520
drag: false
showNavigation: false
keepAspectRatio: true
defaultAxes:
  x:
    withLabel: false
  y:
    withLabel: false
elements: [
  {type: polygon, def: [[1.4142135623730951, 1.4142135623730951], [-1.4142135623730951, 1.4142135623730951], [-1.4142135623730951, -1.4142135623730951], [1.4142135623730951, -1.4142135623730951]], att: {fillColor: '#2455a4', fillOpacity: 0.06, borders: {strokeColor: '#2455a4', strokeWidth: 2}, vertices: {visible: false, fixed: true}, fixed: true}},
  {type: point, def: [1.4142135623730951, 1.4142135623730951], att: {size: 4, fixed: true, withLabel: false, fillColor: '#2455a4', strokeColor: '#2455a4'}},
  {type: point, def: [-1.4142135623730951, 1.4142135623730951], att: {size: 4, fixed: true, withLabel: false, fillColor: '#2455a4', strokeColor: '#2455a4'}},
  {type: point, def: [-1.4142135623730951, -1.4142135623730951], att: {size: 4, fixed: true, withLabel: false, fillColor: '#2455a4', strokeColor: '#2455a4'}},
  {type: point, def: [1.4142135623730951, -1.4142135623730951], att: {size: 4, fixed: true, withLabel: false, fillColor: '#2455a4', strokeColor: '#2455a4'}},
  {type: text, def: [1.55, 1.6, 'z₀'], att: {fixed: true, fontSize: 18, anchorX: 'left', anchorY: 'middle', useMathJax: false}},
  {type: text, def: [-1.55, 1.6, 'z₁'], att: {fixed: true, fontSize: 18, anchorX: 'right', anchorY: 'middle', useMathJax: false}},
  {type: text, def: [-1.55, -1.6, 'z₂'], att: {fixed: true, fontSize: 18, anchorX: 'right', anchorY: 'middle', useMathJax: false}},
  {type: text, def: [1.55, -1.6, 'z₃'], att: {fixed: true, fontSize: 18, anchorX: 'left', anchorY: 'middle', useMathJax: false}},
  {type: text, def: [2.15, -0.25, 'Re z'], att: {fixed: true, fontSize: 16, anchorX: 'middle', anchorY: 'middle', useMathJax: false}},
  {type: text, def: [0.25, 2.28, 'Im z'], att: {fixed: true, fontSize: 16, anchorX: 'left', anchorY: 'middle', useMathJax: false}}
]
```

**Fig. 1.6.1** The four roots of $z^4=-16$ form a square centered at the origin. Each root has modulus 2.

As a direct check, $[\sqrt2(1+\mathrm{i})]^2=4\mathrm{i}$ and $(4\mathrm{i})^2=-16$. The other roots differ by factors of $\mathrm{i}$, whose fourth power is one, so they satisfy the same equation.

## Answer

$$
\boxed{z\in\{\sqrt2(1+\mathrm{i}),\ \sqrt2(-1+\mathrm{i}),
\sqrt2(-1-\mathrm{i}),\ \sqrt2(1-\mathrm{i})\}.}
$$

The exact plot coordinates are $(\pm\sqrt2,\pm\sqrt2)$, with all four sign combinations.
