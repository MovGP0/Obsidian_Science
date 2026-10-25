---
title: "Diagonalization Methods"
---

> [!TLDR]
> Find and normalize an eigenbasis, then use its vectors as the columns of a unitary matrix. In this basis, matrix functions act on the eigenvalues separately.

To diagonalize a Hermitian matrix $A$:

1. Calculate the characteristic polynomial $p(\lambda)=\det(A-\lambda I)$.
2. Find its roots $\lambda_1,\ldots,\lambda_n$, which are the eigenvalues.
3. For each eigenvalue $\lambda_k$, solve $(A-\lambda_k I)v=0$ to find its eigenvectors.
4. Use Gram–Schmidt within each degenerate eigenspace. Normalize all eigenvectors.
5. Form $U$ with the orthonormal eigenvectors as columns. Then $A=UDU^\dagger$, where $D$ contains the corresponding eigenvalues on its diagonal.

## Energy-level splitting in a two-level system

```graph
bounds: [-0.3, 2.3, 13, -2]
height: 340
width: 700
axis: false
drag: false
showNavigation: false
keepAspectRatio: false
elements: [
  {type: text, def: [2.6, 2.05, 'Δ = 0'], att: {fixed: true, fontSize: 18, anchorX: 'middle', anchorY: 'middle'}},
  {type: text, def: [9.1, 2.05, 'Δ ≠ 0'], att: {fixed: true, fontSize: 18, anchorX: 'middle', anchorY: 'middle'}},
  {type: line, def: [[1.2, 0.8], [4, 0.8]], att: {straightFirst: false, straightLast: false, fixed: true, strokeColor: '#315aa6', strokeWidth: 2}},
  {type: line, def: [[1.2, -0.8], [4, -0.8]], att: {straightFirst: false, straightLast: false, fixed: true, strokeColor: '#b73544', strokeWidth: 2}},
  {type: text, def: [0.85, 0.8, '|↑⟩'], att: {fixed: true, fontSize: 18, anchorX: 'right', anchorY: 'middle', strokeColor: '#315aa6'}},
  {type: text, def: [0.85, -0.8, '|↓⟩'], att: {fixed: true, fontSize: 18, anchorX: 'right', anchorY: 'middle', strokeColor: '#b73544'}},
  {type: text, def: [4.2, 0.8, 'E₀'], att: {fixed: true, fontSize: 18, anchorX: 'left', anchorY: 'middle', strokeColor: '#315aa6'}},
  {type: text, def: [4.2, -0.8, 'E₀'], att: {fixed: true, fontSize: 18, anchorX: 'left', anchorY: 'middle', strokeColor: '#b73544'}},
  {type: line, def: [[2.6, -0.7], [2.6, 0.7]], att: {straightFirst: false, straightLast: false, fixed: true, firstArrow: true, lastArrow: true, strokeColor: '#aaaaaa', strokeWidth: 1}},
  {type: text, def: [2.85, 0, '0'], att: {fixed: true, fontSize: 15, anchorX: 'left', anchorY: 'middle', strokeColor: '#888888'}},
  {type: text, def: [2.6, -1.5, 'Same energy, different spin'], att: {fixed: true, fontSize: 13, anchorX: 'middle', anchorY: 'middle'}},
  {type: line, def: [[5.2, 0], [6.6, 0]], att: {straightFirst: false, straightLast: false, fixed: true, lastArrow: true, strokeColor: '#007b9b', strokeWidth: 2}},
  {type: text, def: [5.9, 0.35, 'Δ ≠ 0'], att: {fixed: true, fontSize: 17, anchorX: 'middle', anchorY: 'middle', strokeColor: '#007b9b'}},
  {type: line, def: [[7.5, 1.25], [10.7, 1.25]], att: {straightFirst: false, straightLast: false, fixed: true, strokeColor: '#25834c', strokeWidth: 2}},
  {type: line, def: [[7.5, -1.25], [10.7, -1.25]], att: {straightFirst: false, straightLast: false, fixed: true, strokeColor: '#b73544', strokeWidth: 2}},
  {type: line, def: [[7.5, 0], [10.7, 0]], att: {straightFirst: false, straightLast: false, fixed: true, strokeColor: '#b8b8b8', strokeWidth: 1, dash: 2}},
  {type: text, def: [9.1, 1.63, '|+⟩ = (|↑⟩ + |↓⟩)/√2'], att: {fixed: true, fontSize: 14, anchorX: 'middle', anchorY: 'middle', strokeColor: '#25834c'}},
  {type: text, def: [9.1, -1.63, '|−⟩ = (|↑⟩ − |↓⟩)/√2'], att: {fixed: true, fontSize: 14, anchorX: 'middle', anchorY: 'middle', strokeColor: '#b73544'}},
  {type: text, def: [11.1, 1.25, 'E₀ + Δ'], att: {fixed: true, fontSize: 17, anchorX: 'left', anchorY: 'middle', strokeColor: '#25834c'}},
  {type: text, def: [11.1, -1.25, 'E₀ − Δ'], att: {fixed: true, fontSize: 17, anchorX: 'left', anchorY: 'middle', strokeColor: '#b73544'}},
  {type: text, def: [11.1, 0, 'E₀'], att: {fixed: true, fontSize: 15, anchorX: 'left', anchorY: 'middle', strokeColor: '#888888'}},
  {type: line, def: [[9.1, -1.15], [9.1, 1.15]], att: {straightFirst: false, straightLast: false, fixed: true, firstArrow: true, lastArrow: true, strokeColor: '#aaaaaa', strokeWidth: 1}},
  {type: text, def: [9.35, 0.35, '2Δ'], att: {fixed: true, fontSize: 15, anchorX: 'left', anchorY: 'middle', strokeColor: '#888888'}}
]
```

**Fig. 7.1** Energy-level splitting in a two-level system. Without coupling, $\energy{\Delta}=0$, both states have the same energy $\energy{E_0}$. Coupling removes this degeneracy. The eigenstates become symmetric and antisymmetric superpositions, with energies $\energy{E_0}+\energy{\Delta}$ and $\energy{E_0}-\energy{\Delta}$.

> [!note]
> The uncoupled spin states are shown on separate rows to distinguish them, as in the source. Both have energy $\energy{E_0}$; the arrow labelled zero indicates that there is no energy difference. The row spacing on the left does not represent an energy gap. The right-hand ordering assumes $\energy{\Delta}>0$. For any nonzero real coupling, the energy gap is $2|\energy{\Delta}|$; a negative coupling exchanges the level order.

## Example — Diagonalization of σ_x

**Step 1:**

$$
p(\lambda)=\det(\sigma_x-\lambda I)=\lambda^2-1.
$$

**Step 2:** $\lambda_\pm=\pm1$.

**Step 3:** For $\lambda=+1$, the components satisfy $v_2=v_1$. A normalized eigenvector is

$$
|+x\rangle=\frac1{\sqrt2}(1,1)^T.
$$

For $\lambda=-1$, the components satisfy $v_2=-v_1$. A normalized eigenvector is

$$
|-x\rangle=\frac1{\sqrt2}(1,-1)^T.
$$

**Step 4:** The eigenvalues are distinct, so the eigenvectors are already orthogonal:

$$
\langle+x|-x\rangle=\frac12(1-1)=0.
$$

**Step 5:**

$$
U=\frac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}=H,
$$

where $H$ is the Hadamard gate. Thus,

$$
U^\dagger\sigma_xU=\begin{pmatrix}1&0\\0&-1\end{pmatrix}=\sigma_z.
$$

In its eigenbasis, $\sigma_x$ is diagonal and has the same matrix form as $\sigma_z$ in the standard basis.

## Example — Calculate f(A) by diagonalization

Once $A=UDU^\dagger$ is diagonalized, a matrix function can be calculated from

$$
f(A)=Uf(D)U^\dagger,
\qquad
f(D)=\begin{pmatrix}f(\lambda_1)&&0\\&\ddots&\\0&&f(\lambda_n)\end{pmatrix}.
$$

The function must be defined at the eigenvalues. For analytic functions, this formula agrees with the matrix power-series definition.

For $f(x)=e^{i\signal{\theta}x}$ and $A=\sigma_z$, the matrix is already diagonal, with eigenvalues $\pm1$:

$$
e^{i\signal{\theta}\sigma_z}
=\begin{pmatrix}e^{i\signal{\theta}}&0\\0&e^{-i\signal{\theta}}\end{pmatrix}.
$$

For $A=\sigma_x$, use $U=H$:

$$
\begin{aligned}
e^{i\signal{\theta}\sigma_x}
&=H\begin{pmatrix}e^{i\signal{\theta}}&0\\0&e^{-i\signal{\theta}}\end{pmatrix}H^\dagger\\
&=\begin{pmatrix}\cos\signal{\theta}&i\sin\signal{\theta}\\i\sin\signal{\theta}&\cos\signal{\theta}\end{pmatrix}.
\end{aligned}
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{E_0}$ | $\unit{J}$ | Uncoupled energy | The common energy of the two states without coupling. |
| $\energy{\Delta}$ | $\unit{J}$ | Coupling energy | The off-diagonal coupling that splits the energy levels. |
| $\signal{\theta}$ | $1$ | Phase angle | The real angle in the unitary matrix exponential. |
