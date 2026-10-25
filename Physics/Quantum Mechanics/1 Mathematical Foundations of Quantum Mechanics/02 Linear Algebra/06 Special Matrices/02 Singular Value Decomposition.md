---
title: "Singular Value Decomposition"
---

> [!TLDR]
> Singular value decomposition expresses any matrix through two unitary transformations and a nonnegative diagonal factor. It supports low-rank approximation, pseudoinverses, and the Schmidt decomposition of quantum states.

SVD generalizes diagonalization by using two different orthonormal bases. In general, $U\ne V$. It agrees with the spectral decomposition when the matrix is Hermitian and positive semidefinite.

> [!theorem] Theorem 6.1 — Singular value decomposition
> Every matrix $A\in M_{m\times n}(\mathbb{C})$ can be written as
>
> $$
> A=U\Sigma V^\dagger,
> $$
>
> where $U\in M_m(\mathbb{C})$ and $V\in M_n(\mathbb{C})$ are unitary. The rectangular diagonal matrix $\Sigma\in M_{m\times n}(\mathbb{R})$ has nonnegative entries $\sigma_1\ge\sigma_2\ge\cdots\ge0$, the **singular values** of $A$.

The singular values are the square roots of the eigenvalues of $A^\dagger A$, which is Hermitian and positive semidefinite. The columns of $U$ are the **left singular vectors**; the columns of $V$ are the **right singular vectors** (Fig. 6.1).

These are singular vectors, not eigenvectors of $A$. The source states that eigenvectors exist only for square, diagonalizable matrices.

> [!note]
> A square complex matrix can have eigenvectors without being diagonalizable. Diagonalizability requires a complete eigenbasis. For a rectangular matrix, the usual eigenvalue equation does not act within one vector space. In the rectangular SVD, retain the required singular values and zero entries with the appropriate matrix sizes.

## Why it is useful in physics

- **Entanglement:** Apply SVD to the coefficient matrix of a bipartite state $|\psi\rangle\in\mathcal{H}_A\otimes\mathcal{H}_B$ to obtain the Schmidt decomposition. The number of nonzero singular values characterizes its Schmidt rank.
- **Compression:** Small singular values can be neglected to obtain a low-rank approximation.
- **Pseudoinverse:** For overdetermined or underdetermined systems, SVD provides the least-squares solution.

```graph
bounds: [-1.4, 2.1, 9.6, -3.2382353]
height: 330
width: 680
axis: false
drag: false
showNavigation: false
keepAspectRatio: false
elements: [
  {"type":"curve","def":[[1.1,1.0978294,1.0913262,1.080516,1.0654415,1.0461622,1.0227541,0.9953098,0.9639373,0.9287607,0.8899187,0.8475646,0.8018655,0.7530018,0.7011664,0.6465638,0.5894095,0.529929,0.4683572,0.404937,0.3399187,0.2735589,0.2061194,0.1378666,0.0690696,0.0,-0.0690696,-0.1378666,-0.2061194,-0.2735589,-0.3399187,-0.404937,-0.4683572,-0.529929,-0.5894095,-0.6465638,-0.7011664,-0.7530018,-0.8018655,-0.8475646,-0.8899187,-0.9287607,-0.9639373,-0.9953098,-1.0227541,-1.0461622,-1.0654415,-1.080516,-1.0913262,-1.0978294,-1.1,-1.0978294,-1.0913262,-1.080516,-1.0654415,-1.0461622,-1.0227541,-0.9953098,-0.9639373,-0.9287607,-0.8899187,-0.8475646,-0.8018655,-0.7530018,-0.7011664,-0.6465638,-0.5894095,-0.529929,-0.4683572,-0.404937,-0.3399187,-0.2735589,-0.2061194,-0.1378666,-0.0690696,-0.0,0.0690696,0.1378666,0.2061194,0.2735589,0.3399187,0.404937,0.4683572,0.529929,0.5894095,0.6465638,0.7011664,0.7530018,0.8018655,0.8475646,0.8899187,0.9287607,0.9639373,0.9953098,1.0227541,1.0461622,1.0654415,1.080516,1.0913262,1.0978294,1.1],[0.3,0.3690696,0.4378666,0.5061194,0.5735589,0.6399187,0.704937,0.7683572,0.829929,0.8894095,0.9465638,1.0011664,1.0530018,1.1018655,1.1475646,1.1899187,1.2287607,1.2639373,1.2953098,1.3227541,1.3461622,1.3654415,1.380516,1.3913262,1.3978294,1.4,1.3978294,1.3913262,1.380516,1.3654415,1.3461622,1.3227541,1.2953098,1.2639373,1.2287607,1.1899187,1.1475646,1.1018655,1.0530018,1.0011664,0.9465638,0.8894095,0.829929,0.7683572,0.704937,0.6399187,0.5735589,0.5061194,0.4378666,0.3690696,0.3,0.2309304,0.1621334,0.0938806,0.0264411,-0.0399187,-0.104937,-0.1683572,-0.229929,-0.2894095,-0.3465638,-0.4011664,-0.4530018,-0.5018655,-0.5475646,-0.5899187,-0.6287607,-0.6639373,-0.6953098,-0.7227541,-0.7461622,-0.7654415,-0.780516,-0.7913262,-0.7978294,-0.8,-0.7978294,-0.7913262,-0.780516,-0.7654415,-0.7461622,-0.7227541,-0.6953098,-0.6639373,-0.6287607,-0.5899187,-0.5475646,-0.5018655,-0.4530018,-0.4011664,-0.3465638,-0.2894095,-0.229929,-0.1683572,-0.104937,-0.0399187,0.0264411,0.0938806,0.1621334,0.2309304,0.3]],"att":{"strokeColor":"#777777","strokeWidth":1.4,"fillColor":"#e7f1eb","fillOpacity":0.55,"fixed":true}},
  {"type":"curve","def":[[5.2,5.1978294,5.1913262,5.180516,5.1654415,5.1461622,5.1227541,5.0953098,5.0639373,5.0287607,4.9899187,4.9475646,4.9018655,4.8530018,4.8011664,4.7465638,4.6894095,4.629929,4.5683572,4.504937,4.4399187,4.3735589,4.3061194,4.2378666,4.1690696,4.1,4.0309304,3.9621334,3.8938806,3.8264411,3.7600813,3.695063,3.6316428,3.570071,3.5105905,3.4534362,3.3988336,3.3469982,3.2981345,3.2524354,3.2100813,3.1712393,3.1360627,3.1046902,3.0772459,3.0538378,3.0345585,3.019484,3.0086738,3.0021706,3.0,3.0021706,3.0086738,3.019484,3.0345585,3.0538378,3.0772459,3.1046902,3.1360627,3.1712393,3.2100813,3.2524354,3.2981345,3.3469982,3.3988336,3.4534362,3.5105905,3.570071,3.6316428,3.695063,3.7600813,3.8264411,3.8938806,3.9621334,4.0309304,4.1,4.1690696,4.2378666,4.3061194,4.3735589,4.4399187,4.504937,4.5683572,4.629929,4.6894095,4.7465638,4.8011664,4.8530018,4.9018655,4.9475646,4.9899187,5.0287607,5.0639373,5.0953098,5.1227541,5.1461622,5.1654415,5.180516,5.1913262,5.1978294,5.2],[0.3,0.3690696,0.4378666,0.5061194,0.5735589,0.6399187,0.704937,0.7683572,0.829929,0.8894095,0.9465638,1.0011664,1.0530018,1.1018655,1.1475646,1.1899187,1.2287607,1.2639373,1.2953098,1.3227541,1.3461622,1.3654415,1.380516,1.3913262,1.3978294,1.4,1.3978294,1.3913262,1.380516,1.3654415,1.3461622,1.3227541,1.2953098,1.2639373,1.2287607,1.1899187,1.1475646,1.1018655,1.0530018,1.0011664,0.9465638,0.8894095,0.829929,0.7683572,0.704937,0.6399187,0.5735589,0.5061194,0.4378666,0.3690696,0.3,0.2309304,0.1621334,0.0938806,0.0264411,-0.0399187,-0.104937,-0.1683572,-0.229929,-0.2894095,-0.3465638,-0.4011664,-0.4530018,-0.5018655,-0.5475646,-0.5899187,-0.6287607,-0.6639373,-0.6953098,-0.7227541,-0.7461622,-0.7654415,-0.780516,-0.7913262,-0.7978294,-0.8,-0.7978294,-0.7913262,-0.780516,-0.7654415,-0.7461622,-0.7227541,-0.6953098,-0.6639373,-0.6287607,-0.5899187,-0.5475646,-0.5018655,-0.4530018,-0.4011664,-0.3465638,-0.2894095,-0.229929,-0.1683572,-0.104937,-0.0399187,0.0264411,0.0938806,0.1621334,0.2309304,0.3]],"att":{"strokeColor":"#777777","strokeWidth":1.4,"fillColor":"#e9e6f3","fillOpacity":0.55,"fixed":true}},
  {"type":"curve","def":[[9.3,9.2978294,9.2913262,9.280516,9.2654415,9.2461622,9.2227541,9.1953098,9.1639373,9.1287607,9.0899187,9.0475646,9.0018655,8.9530018,8.9011664,8.8465638,8.7894095,8.729929,8.6683572,8.604937,8.5399187,8.4735589,8.4061194,8.3378666,8.2690696,8.2,8.1309304,8.0621334,7.9938806,7.9264411,7.8600813,7.795063,7.7316428,7.670071,7.6105905,7.5534362,7.4988336,7.4469982,7.3981345,7.3524354,7.3100813,7.2712393,7.2360627,7.2046902,7.1772459,7.1538378,7.1345585,7.119484,7.1086738,7.1021706,7.1,7.1021706,7.1086738,7.119484,7.1345585,7.1538378,7.1772459,7.2046902,7.2360627,7.2712393,7.3100813,7.3524354,7.3981345,7.4469982,7.4988336,7.5534362,7.6105905,7.670071,7.7316428,7.795063,7.8600813,7.9264411,7.9938806,8.0621334,8.1309304,8.2,8.2690696,8.3378666,8.4061194,8.4735589,8.5399187,8.604937,8.6683572,8.729929,8.7894095,8.8465638,8.9011664,8.9530018,9.0018655,9.0475646,9.0899187,9.1287607,9.1639373,9.1953098,9.2227541,9.2461622,9.2654415,9.280516,9.2913262,9.2978294,9.3],[0.3,0.3690696,0.4378666,0.5061194,0.5735589,0.6399187,0.704937,0.7683572,0.829929,0.8894095,0.9465638,1.0011664,1.0530018,1.1018655,1.1475646,1.1899187,1.2287607,1.2639373,1.2953098,1.3227541,1.3461622,1.3654415,1.380516,1.3913262,1.3978294,1.4,1.3978294,1.3913262,1.380516,1.3654415,1.3461622,1.3227541,1.2953098,1.2639373,1.2287607,1.1899187,1.1475646,1.1018655,1.0530018,1.0011664,0.9465638,0.8894095,0.829929,0.7683572,0.704937,0.6399187,0.5735589,0.5061194,0.4378666,0.3690696,0.3,0.2309304,0.1621334,0.0938806,0.0264411,-0.0399187,-0.104937,-0.1683572,-0.229929,-0.2894095,-0.3465638,-0.4011664,-0.4530018,-0.5018655,-0.5475646,-0.5899187,-0.6287607,-0.6639373,-0.6953098,-0.7227541,-0.7461622,-0.7654415,-0.780516,-0.7913262,-0.7978294,-0.8,-0.7978294,-0.7913262,-0.780516,-0.7654415,-0.7461622,-0.7227541,-0.6953098,-0.6639373,-0.6287607,-0.5899187,-0.5475646,-0.5018655,-0.4530018,-0.4011664,-0.3465638,-0.2894095,-0.229929,-0.1683572,-0.104937,-0.0399187,0.0264411,0.0938806,0.1621334,0.2309304,0.3]],"att":{"strokeColor":"#777777","strokeWidth":1.4,"fillColor":"#e7f1eb","fillOpacity":0.55,"fixed":true}},
  {type: line, def: [[1.15, 0.3], [2.95, 0.3]], att: {straightFirst: false, straightLast: false, lastArrow: true, strokeColor: '#33865a', strokeWidth: 2.2, fixed: true}},
  {type: line, def: [[5.25, 0.3], [7.05, 0.3]], att: {straightFirst: false, straightLast: false, lastArrow: true, strokeColor: '#2455a4', strokeWidth: 2.2, fixed: true}},
  {type: text, def: [0, 0.55, 'V†'], att: {fixed: true, fontSize: 28, anchorX: 'middle', anchorY: 'middle', useMathJax: false}},
  {type: text, def: [0, -0.15, 'n-dimensional'], att: {fixed: true, fontSize: 14, anchorX: 'middle', anchorY: 'middle', useMathJax: false}},
  {type: text, def: [4.1, 0.55, 'Σ'], att: {fixed: true, fontSize: 28, anchorX: 'middle', anchorY: 'middle', useMathJax: false}},
  {type: text, def: [4.1, -0.15, 'σᵢ ≥ 0'], att: {fixed: true, fontSize: 18, anchorX: 'middle', anchorY: 'middle', useMathJax: false}},
  {type: text, def: [8.2, 0.55, 'U'], att: {fixed: true, fontSize: 28, anchorX: 'middle', anchorY: 'middle', useMathJax: false}},
  {type: text, def: [8.2, -0.15, 'm-dimensional'], att: {fixed: true, fontSize: 14, anchorX: 'middle', anchorY: 'middle', useMathJax: false}},
  {type: text, def: [2.05, 0.78, 'rotates'], att: {fixed: true, fontSize: 17, anchorX: 'middle', anchorY: 'middle', useMathJax: false, strokeColor: '#33865a'}},
  {type: text, def: [6.15, 0.78, 'stretches'], att: {fixed: true, fontSize: 17, anchorX: 'middle', anchorY: 'middle', useMathJax: false, strokeColor: '#2455a4'}},
  {type: text, def: [4.1, -1.6, 'A = UΣV†'], att: {fixed: true, fontSize: 24, anchorX: 'middle', anchorY: 'middle', useMathJax: false}},
  {type: text, def: [4.1, -2.45, 'matrix = rotation + stretch + rotation'], att: {fixed: true, fontSize: 17, anchorX: 'middle', anchorY: 'middle', useMathJax: false}}
]
```

**Fig. 6.1** Geometric interpretation of SVD: every matrix decomposes into two unitary transformations and a diagonal stretch.

> [!note]
> “Rotation” is geometric shorthand for a unitary isometry here. A rectangular $\Sigma$ can also change the dimension. In an underdetermined system, the pseudoinverse selects the minimum-norm least-squares solution. Schmidt rank detects pure-state entanglement but does not give its full amount at a fixed rank.
