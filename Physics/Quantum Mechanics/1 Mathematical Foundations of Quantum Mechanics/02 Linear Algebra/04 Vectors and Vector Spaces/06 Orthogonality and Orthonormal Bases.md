---
title: "Orthogonality and Orthonormal Bases"
---

> [!TLDR]
> An orthonormal basis gives coordinates through inner products and makes the squared norm a sum of squared coordinate magnitudes. Gram–Schmidt constructs such a basis by subtraction of projections and normalization.

> [!definition] Definition 4.7 — Orthogonality
> Vectors $u$ and $v$ are **orthogonal** if $\langle u,v\rangle=0$. A basis $\{e_i\}$ is **orthonormal** if
>
> $$
> \langle e_i,e_j\rangle=\delta_{ij}=
> \begin{cases}
> 1,&i=j,\\
> 0,&i\ne j.
> \end{cases}
> $$

With an orthonormal basis, an inner product gives each coordinate:

$$
c_i=\langle e_i,v\rangle.
$$

The norm has the simple form

$$
\|v\|^2=\sum_i|c_i|^2.
$$

## The Gram–Schmidt procedure

Construct an orthonormal basis $\{e_1,\ldots,e_n\}$ from any basis $\{v_1,\ldots,v_n\}$ as follows (Fig. 4.1).

1. Set $e_1=v_1/\|v_1\|$.
2. Subtract the projection onto $e_1$: $u_2=v_2-\langle e_1,v_2\rangle e_1$. Then set $e_2=u_2/\|u_2\|$.
3. Continue with

   $$
   u_k=v_k-\sum_{j=1}^{k-1}\langle e_j,v_k\rangle e_j,
   \qquad e_k=\frac{u_k}{\|u_k\|}.
   $$

```graph
bounds: [-0.62, 2.15, 3.58, -0.4]
height: 460
width: 760
axis: false
drag: false
showNavigation: false
keepAspectRatio: true
elements: [
  {type: line, def: [[-0.16, 0], [1.65, 0]], att: {straightFirst: false, straightLast: false, lastArrow: true, strokeColor: '#b0b0b0', strokeWidth: 1, fixed: true}},
  {type: line, def: [[0, -0.18], [0, 1.85]], att: {straightFirst: false, straightLast: false, lastArrow: true, strokeColor: '#b0b0b0', strokeWidth: 1, fixed: true}},
  {type: line, def: [[0, 0], [1.44, 0.42]], att: {straightFirst: false, straightLast: false, lastArrow: true, strokeColor: '#aaaaaa', strokeWidth: 1.4, fixed: true}},
  {type: line, def: [[0, 0], [0.5, 1.5]], att: {straightFirst: false, straightLast: false, lastArrow: true, strokeColor: '#aaaaaa', strokeWidth: 1.4, fixed: true}},
  {type: line, def: [[0.5, 1.5], [0.864, 0.252]], att: {straightFirst: false, straightLast: false, dash: 2, strokeColor: '#8bbfd0', strokeWidth: 1.2, fixed: true}},
  {type: line, def: [[0, 0], [0.96, 0.28]], att: {straightFirst: false, straightLast: false, lastArrow: true, strokeColor: '#2455a4', strokeWidth: 2.4, fixed: true}},
  {type: line, def: [[0, 0], [-0.364, 1.248]], att: {straightFirst: false, straightLast: false, lastArrow: true, strokeColor: '#007b9b', strokeWidth: 2.2, fixed: true}},
  {type: line, def: [[0, 0], [-0.28, 0.96]], att: {straightFirst: false, straightLast: false, lastArrow: true, strokeColor: '#33865a', strokeWidth: 2.4, fixed: true}},
  {type: point, def: [0.864, 0.252], att: {size: 3, fixed: true, withLabel: false, fillColor: '#72afc4', strokeColor: '#72afc4'}},
  {type: line, def: [[0.1248, 0.0364], [0.0884, 0.1612]], att: {straightFirst: false, straightLast: false, strokeColor: '#999999', strokeWidth: 1, fixed: true}},
  {type: line, def: [[0.0884, 0.1612], [-0.0364, 0.1248]], att: {straightFirst: false, straightLast: false, strokeColor: '#999999', strokeWidth: 1, fixed: true}},
  {type: text, def: [1.73, -0.01, 'x'], att: {fixed: true, fontSize: 16, anchorX: 'left', anchorY: 'middle', useMathJax: false, strokeColor: '#aaaaaa'}},
  {type: text, def: [0, 1.96, 'y'], att: {fixed: true, fontSize: 16, anchorX: 'middle', anchorY: 'middle', useMathJax: false, strokeColor: '#aaaaaa'}},
  {type: text, def: [1.48, 0.46, 'v₁'], att: {fixed: true, fontSize: 16, anchorX: 'left', anchorY: 'middle', useMathJax: false, strokeColor: '#999999'}},
  {type: text, def: [0.54, 1.57, 'v₂'], att: {fixed: true, fontSize: 16, anchorX: 'left', anchorY: 'middle', useMathJax: false, strokeColor: '#999999'}},
  {type: text, def: [1.01, 0.22, 'e₁'], att: {fixed: true, fontSize: 16, anchorX: 'left', anchorY: 'middle', useMathJax: false, strokeColor: '#2455a4'}},
  {type: text, def: [-0.3, 1.4, 'u₂'], att: {fixed: true, fontSize: 16, anchorX: 'right', anchorY: 'middle', useMathJax: false, strokeColor: '#007b9b'}},
  {type: text, def: [-0.32, 0.93, 'e₂'], att: {fixed: true, fontSize: 16, anchorX: 'right', anchorY: 'middle', useMathJax: false, strokeColor: '#33865a'}},
  {type: text, def: [0.864, 0.15, 'proj'], att: {fixed: true, fontSize: 12, anchorX: 'middle', anchorY: 'middle', useMathJax: false, strokeColor: '#4e9ab3'}},
  {type: line, def: [[1.5, 1.74], [1.66, 1.74]], att: {straightFirst: false, straightLast: false, strokeColor: '#aaaaaa', strokeWidth: 1.4, fixed: true}},
  {type: text, def: [1.73, 1.74, 'original vectors'], att: {fixed: true, fontSize: 13, anchorX: 'left', anchorY: 'middle', useMathJax: false, strokeColor: '#333333'}},
  {type: line, def: [[1.5, 1.57], [1.66, 1.57]], att: {straightFirst: false, straightLast: false, strokeColor: '#2455a4', strokeWidth: 2, fixed: true}},
  {type: text, def: [1.73, 1.57, 'e₁ (first orthonormal vector)'], att: {fixed: true, fontSize: 13, anchorX: 'left', anchorY: 'middle', useMathJax: false, strokeColor: '#333333'}},
  {type: line, def: [[1.5, 1.4], [1.66, 1.4]], att: {straightFirst: false, straightLast: false, strokeColor: '#007b9b', strokeWidth: 2, fixed: true}},
  {type: text, def: [1.73, 1.4, 'u₂ (orthogonal component)'], att: {fixed: true, fontSize: 13, anchorX: 'left', anchorY: 'middle', useMathJax: false, strokeColor: '#333333'}},
  {type: line, def: [[1.5, 1.23], [1.66, 1.23]], att: {straightFirst: false, straightLast: false, strokeColor: '#33865a', strokeWidth: 2, fixed: true}},
  {type: text, def: [1.73, 1.23, 'e₂ (second orthonormal vector)'], att: {fixed: true, fontSize: 13, anchorX: 'left', anchorY: 'middle', useMathJax: false, strokeColor: '#333333'}}
]
```

**Fig. 4.1** The Gram–Schmidt procedure in $\mathbb{R}^2$. Project $v_2$ onto $e_1$ and subtract the projection. The residual $u_2$ is orthogonal to $e_1$. Normalize $u_2$ to obtain $e_2$. The right-angle mark shows $\langle e_1,e_2\rangle=0$.

## Example — Gram–Schmidt in ℝ³

Given $v_1=(1,1,0)^T$, $v_2=(1,0,1)^T$, and $v_3=(0,1,1)^T$.

### Step 1

Since $\|v_1\|=\sqrt2$,

$$
e_1=\frac1{\sqrt2}(1,1,0)^T.
$$

### Step 2

Project $v_2$ onto $e_1$:

$$
\langle e_1,v_2\rangle
=\frac1{\sqrt2}(1\cdot1+1\cdot0+0\cdot1)=\frac1{\sqrt2}.
$$

Subtract the projection:

$$
u_2=v_2-\frac1{\sqrt2}e_1
=\begin{pmatrix}1\\0\\1\end{pmatrix}
-\frac12\begin{pmatrix}1\\1\\0\end{pmatrix}
=\begin{pmatrix}1/2\\-1/2\\1\end{pmatrix}.
$$

The norm is

$$
\|u_2\|=\sqrt{\frac14+\frac14+1}=\sqrt{\frac32}.
$$

Thus,

$$
e_2=\sqrt{\frac23}(1/2,-1/2,1)^T
=\frac1{\sqrt6}(1,-1,2)^T.
$$

### Step 3

Project $v_3=(0,1,1)^T$ onto $e_1$ and $e_2$:

$$
\langle e_1,v_3\rangle=\frac1{\sqrt2}(0+1+0)=\frac1{\sqrt2},
\qquad
\langle e_2,v_3\rangle=\frac1{\sqrt6}(0-1+2)=\frac1{\sqrt6}.
$$

$$
\begin{aligned}
u_3&=v_3-\frac1{\sqrt2}e_1-\frac1{\sqrt6}e_2\\
&=\begin{pmatrix}0\\1\\1\end{pmatrix}
-\begin{pmatrix}1/2\\1/2\\0\end{pmatrix}
-\begin{pmatrix}1/6\\-1/6\\2/6\end{pmatrix}
=\begin{pmatrix}-2/3\\2/3\\2/3\end{pmatrix}.
\end{aligned}
$$

Its squared norm is $\|u_3\|^2=4/9+4/9+4/9=4/3$, so $\|u_3\|=2/\sqrt3$. Therefore,

$$
e_3=\frac{u_3}{\|u_3\|}
=\frac{\sqrt3}{2}\begin{pmatrix}-2/3\\2/3\\2/3\end{pmatrix}
=\frac1{\sqrt3}\begin{pmatrix}-1\\1\\1\end{pmatrix}.
$$

*Verification:*

$$
\langle e_1,e_3\rangle
=\frac1{\sqrt2}\cdot\frac1{\sqrt3}(-1+1+0)=0.\quad\checkmark
$$

Similarly,

$$
\langle e_2,e_3\rangle
=\frac1{\sqrt6}\cdot\frac1{\sqrt3}(-1-1+2)=0.\quad\checkmark
$$

The example shows that Gram–Schmidt needs care, but the procedure is mechanical. The same steps are used each time.
