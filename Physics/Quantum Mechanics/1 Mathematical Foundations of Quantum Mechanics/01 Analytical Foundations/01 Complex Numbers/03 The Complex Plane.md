---
title: "The Complex Plane"
---

> [!TLDR]
> A complex number is a point in a plane. Its absolute value is its distance from the origin, and multiplication combines rotation with scaling.

A complex number $z=a+\mathrm{i}b$ corresponds to the point $(a,b)$ in the Cartesian plane (Fig. 1.1). The horizontal axis is the **real axis**. The vertical axis is the **imaginary axis**. This plane is the **complex plane**, also called the Gaussian or Argand–Gauss plane.

As Fig. 1.1 shows, the conjugate $z^*$ is the reflection of $z$ across the real axis. The real part stays the same, and the imaginary part changes sign. This gives a direct geometric view of conjugation.

```graph
bounds: [-0.7, 2.8, 4.2, -2.5]
height: 460
width: 620
axis: false
drag: false
showNavigation: false
keepAspectRatio: true
elements: [
  {type: line, def: [[-0.4, 0], [3.5, 0]], att: {straightFirst: false, straightLast: false, lastArrow: true, strokeColor: '#555555', strokeWidth: 1.3, fixed: true}},
  {type: line, def: [[0, -0.4], [0, 2.55]], att: {straightFirst: false, straightLast: false, lastArrow: true, strokeColor: '#555555', strokeWidth: 1.3, fixed: true}},
  {type: line, def: [[0, 1.7], [2.4, 1.7]], att: {straightFirst: false, straightLast: false, dash: 2, strokeColor: '#bbbbbb', strokeWidth: 1, fixed: true}},
  {type: line, def: [[2.4, 0], [2.4, 1.7]], att: {straightFirst: false, straightLast: false, dash: 2, strokeColor: '#bbbbbb', strokeWidth: 1, fixed: true}},
  {type: line, def: [[0, 0], [2.4, 1.7]], att: {straightFirst: false, straightLast: false, lastArrow: true, strokeColor: '#2455a4', strokeWidth: 2, fixed: true}},
  {type: line, def: [[0, 0], [2.4, -1.7]], att: {straightFirst: false, straightLast: false, dash: 2, strokeColor: '#33865a', strokeWidth: 1.4, fixed: true}},
  {type: point, def: [2.4, 1.7], att: {size: 3, fixed: true, withLabel: false, fillColor: '#2455a4', strokeColor: '#2455a4'}},
  {type: point, def: [2.4, -1.7], att: {size: 3, fixed: true, withLabel: false, fillColor: '#33865a', strokeColor: '#33865a'}},
  {type: curve, def: [[0.6500, 0.6488, 0.6451, 0.6389, 0.6303, 0.6194, 0.6061, 0.5904, 0.5726, 0.5525, 0.5304], [0.0000, 0.0400, 0.0799, 0.1195, 0.1586, 0.1971, 0.2349, 0.2718, 0.3076, 0.3423, 0.3757]], att: {strokeColor: '#238aad', strokeWidth: 1.5, lastArrow: true, fixed: true}},
  {type: text, def: [3.61, 0, 'Re'], att: {fixed: true, fontSize: 17, anchorX: 'left', anchorY: 'middle', useMathJax: false, strokeColor: '#333333'}},
  {type: text, def: [0.16, 2.35, 'Im'], att: {fixed: true, fontSize: 17, anchorX: 'middle', anchorY: 'middle', useMathJax: false, strokeColor: '#333333'}},
  {type: text, def: [2.4, -0.16, 'a'], att: {fixed: true, fontSize: 17, anchorX: 'middle', anchorY: 'top', useMathJax: false, strokeColor: '#888888'}},
  {type: text, def: [-0.12, 1.7, 'b'], att: {fixed: true, fontSize: 17, anchorX: 'right', anchorY: 'middle', useMathJax: false, strokeColor: '#888888'}},
  {type: text, def: [2.53, 1.9, 'z = a + ib'], att: {fixed: true, fontSize: 17, anchorX: 'left', anchorY: 'middle', useMathJax: false, strokeColor: '#2455a4'}},
  {type: text, def: [2.53, -1.91, 'z* = a − ib'], att: {fixed: true, fontSize: 17, anchorX: 'left', anchorY: 'middle', useMathJax: false, strokeColor: '#33865a'}},
  {type: text, def: [1, 1.14, '|z|'], att: {fixed: true, fontSize: 17, anchorX: 'middle', anchorY: 'middle', useMathJax: false, strokeColor: '#333333'}},
  {type: text, def: [0.86, 0.22, 'θ'], att: {fixed: true, fontSize: 17, anchorX: 'middle', anchorY: 'middle', useMathJax: false, strokeColor: '#238aad'}}
]
```

**Fig. 1.1** The complex plane: $z$ and its conjugate $z^*$ are symmetric about the real axis.

The absolute value

$$
|z|=\sqrt{a^2+b^2}
$$

is the distance from the origin. It is the length of the vector from $(0,0)$ to $(a,b)$. It is always a nonnegative real number.

## Multiplication as a geometric transformation

In polar coordinates, let $r=|z|$ and $\theta=\arg(z)$, where $\theta$ is the angle from the real axis. Then

$$
z=r(\cos\theta+\mathrm{i}\sin\theta).
$$

If $z_1=r_1(\cos\theta_1+\mathrm{i}\sin\theta_1)$ and $z_2=r_2(\cos\theta_2+\mathrm{i}\sin\theta_2)$, their product is

$$
z_1z_2=r_1r_2\bigl(\cos(\theta_1+\theta_2)+\mathrm{i}\sin(\theta_1+\theta_2)\bigr).
$$

*To multiply two complex numbers, multiply their absolute values and add their arguments.* Geometrically, this is a rotation combined with scaling.
