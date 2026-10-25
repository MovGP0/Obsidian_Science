---
title: "Density Matrices"
---

> [!TLDR]
> A density matrix describes either a pure state or a statistical mixture. It is Hermitian, positive semidefinite, and has trace one; its purity distinguishes pure from mixed states.

> [!definition] Definition 6.3 — Density matrix
> The **density matrix**, or **density operator**, of a pure state $|\psi\rangle$ is
>
> $$
> \rho=|\psi\rangle\langle\psi|.
> $$
>
> For a mixed state, a statistical mixture of pure states $|\psi_i\rangle$ with probabilities $p_i$,
>
> $$
> \rho=\sum_i p_i|\psi_i\rangle\langle\psi_i|.
> $$

Properties of a density matrix:

1. $\rho^\dagger=\rho$: it is Hermitian.
2. $\operatorname{Tr}(\rho)=1$: it is normalized.
3. $\rho\ge0$: it is positive semidefinite, meaning $\langle\psi|\rho|\psi\rangle\ge0$ for every $|\psi\rangle$.
4. $\operatorname{Tr}(\rho^2)\le1$, with equality exactly when $\rho$ is a pure state.

The expectation value of $\hat A$ is

$$
\langle\hat A\rangle=\operatorname{Tr}(\rho\hat A).
$$

Fig. 6.2 shows the pure and mixed states of a spin-$\tfrac12$ system. Its axes are the Pauli expectation values $\langle\sigma_x\rangle$, $\langle\sigma_y\rangle$, and $\langle\sigma_z\rangle$.

> [!note]
> The state vectors in the definition are normalized. The weights satisfy $p_i\ge0$ and $\sum_i p_i=1$. The scalar $\operatorname{Tr}(\rho^2)$ is called the **purity**.

```graph3d
bounds: [-3.1, 2.8264706, 3.1, -2.8264706]
bounds3d: [[-1.6, 1.6], [-1.6, 1.6], [-1.6, 1.6]]
height: 620
width: 680
axis: false
drag: true
showNavigation: false
keepAspectRatio: false
att3d:
  projection: parallel
  axesPosition: none
  xPlaneRear: {visible: false}
  yPlaneRear: {visible: false}
  zPlaneRear: {visible: false}
  xPlaneFront: {visible: false}
  yPlaneFront: {visible: false}
  zPlaneFront: {visible: false}
  depthOrder: {enabled: true}
  az: {slider: {visible: false, start: 1.0}}
  el: {slider: {visible: false, start: 0.35}}
  bank: {slider: {visible: false, start: 0}}
elements: [
  {type: sphere3d, def: [[0, 0, 0], 1], att: {strokeColor: '#93a9b7', strokeWidth: 1.2, fillColor: '#d7e6ee', fillOpacity: 0.08, highlightFillOpacity: 0.08, center: {visible: false, withLabel: false, fixed: true}}},
  {"type":"line3d","def":[[1.0,0.0,0],[0.9914449,0.1305262,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.9914449,0.1305262,0],[0.9659258,0.258819,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.9659258,0.258819,0],[0.9238795,0.3826834,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.9238795,0.3826834,0],[0.8660254,0.5,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.8660254,0.5,0],[0.7933533,0.6087614,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.7933533,0.6087614,0],[0.7071068,0.7071068,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.7071068,0.7071068,0],[0.6087614,0.7933533,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.6087614,0.7933533,0],[0.5,0.8660254,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.5,0.8660254,0],[0.3826834,0.9238795,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.3826834,0.9238795,0],[0.258819,0.9659258,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.258819,0.9659258,0],[0.1305262,0.9914449,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.1305262,0.9914449,0],[0.0,1.0,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.0,1.0,0],[-0.1305262,0.9914449,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.1305262,0.9914449,0],[-0.258819,0.9659258,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.258819,0.9659258,0],[-0.3826834,0.9238795,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.3826834,0.9238795,0],[-0.5,0.8660254,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.5,0.8660254,0],[-0.6087614,0.7933533,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.6087614,0.7933533,0],[-0.7071068,0.7071068,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.7071068,0.7071068,0],[-0.7933533,0.6087614,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.7933533,0.6087614,0],[-0.8660254,0.5,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.8660254,0.5,0],[-0.9238795,0.3826834,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.9238795,0.3826834,0],[-0.9659258,0.258819,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.9659258,0.258819,0],[-0.9914449,0.1305262,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.9914449,0.1305262,0],[-1.0,0.0,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-1.0,0.0,0],[-0.9914449,-0.1305262,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.9914449,-0.1305262,0],[-0.9659258,-0.258819,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.9659258,-0.258819,0],[-0.9238795,-0.3826834,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.9238795,-0.3826834,0],[-0.8660254,-0.5,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.8660254,-0.5,0],[-0.7933533,-0.6087614,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.7933533,-0.6087614,0],[-0.7071068,-0.7071068,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.7071068,-0.7071068,0],[-0.6087614,-0.7933533,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.6087614,-0.7933533,0],[-0.5,-0.8660254,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.5,-0.8660254,0],[-0.3826834,-0.9238795,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.3826834,-0.9238795,0],[-0.258819,-0.9659258,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.258819,-0.9659258,0],[-0.1305262,-0.9914449,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.1305262,-0.9914449,0],[-0.0,-1.0,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.0,-1.0,0],[0.1305262,-0.9914449,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.1305262,-0.9914449,0],[0.258819,-0.9659258,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.258819,-0.9659258,0],[0.3826834,-0.9238795,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.3826834,-0.9238795,0],[0.5,-0.8660254,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.5,-0.8660254,0],[0.6087614,-0.7933533,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.6087614,-0.7933533,0],[0.7071068,-0.7071068,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.7071068,-0.7071068,0],[0.7933533,-0.6087614,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.7933533,-0.6087614,0],[0.8660254,-0.5,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.8660254,-0.5,0],[0.9238795,-0.3826834,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.9238795,-0.3826834,0],[0.9659258,-0.258819,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.9659258,-0.258819,0],[0.9914449,-0.1305262,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.9914449,-0.1305262,0],[1.0,-0.0,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[1.0,0,0.0],[0.9914449,0,0.1305262]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.9914449,0,0.1305262],[0.9659258,0,0.258819]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.9659258,0,0.258819],[0.9238795,0,0.3826834]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.9238795,0,0.3826834],[0.8660254,0,0.5]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.8660254,0,0.5],[0.7933533,0,0.6087614]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.7933533,0,0.6087614],[0.7071068,0,0.7071068]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.7071068,0,0.7071068],[0.6087614,0,0.7933533]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.6087614,0,0.7933533],[0.5,0,0.8660254]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.5,0,0.8660254],[0.3826834,0,0.9238795]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.3826834,0,0.9238795],[0.258819,0,0.9659258]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.258819,0,0.9659258],[0.1305262,0,0.9914449]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.1305262,0,0.9914449],[0.0,0,1.0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.0,0,1.0],[-0.1305262,0,0.9914449]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.1305262,0,0.9914449],[-0.258819,0,0.9659258]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.258819,0,0.9659258],[-0.3826834,0,0.9238795]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.3826834,0,0.9238795],[-0.5,0,0.8660254]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.5,0,0.8660254],[-0.6087614,0,0.7933533]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.6087614,0,0.7933533],[-0.7071068,0,0.7071068]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.7071068,0,0.7071068],[-0.7933533,0,0.6087614]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.7933533,0,0.6087614],[-0.8660254,0,0.5]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.8660254,0,0.5],[-0.9238795,0,0.3826834]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.9238795,0,0.3826834],[-0.9659258,0,0.258819]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.9659258,0,0.258819],[-0.9914449,0,0.1305262]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.9914449,0,0.1305262],[-1.0,0,0.0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-1.0,0,0.0],[-0.9914449,0,-0.1305262]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.9914449,0,-0.1305262],[-0.9659258,0,-0.258819]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.9659258,0,-0.258819],[-0.9238795,0,-0.3826834]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.9238795,0,-0.3826834],[-0.8660254,0,-0.5]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.8660254,0,-0.5],[-0.7933533,0,-0.6087614]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.7933533,0,-0.6087614],[-0.7071068,0,-0.7071068]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.7071068,0,-0.7071068],[-0.6087614,0,-0.7933533]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.6087614,0,-0.7933533],[-0.5,0,-0.8660254]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.5,0,-0.8660254],[-0.3826834,0,-0.9238795]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.3826834,0,-0.9238795],[-0.258819,0,-0.9659258]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.258819,0,-0.9659258],[-0.1305262,0,-0.9914449]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.1305262,0,-0.9914449],[-0.0,0,-1.0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[-0.0,0,-1.0],[0.1305262,0,-0.9914449]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.1305262,0,-0.9914449],[0.258819,0,-0.9659258]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.258819,0,-0.9659258],[0.3826834,0,-0.9238795]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.3826834,0,-0.9238795],[0.5,0,-0.8660254]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.5,0,-0.8660254],[0.6087614,0,-0.7933533]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.6087614,0,-0.7933533],[0.7071068,0,-0.7071068]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.7071068,0,-0.7071068],[0.7933533,0,-0.6087614]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.7933533,0,-0.6087614],[0.8660254,0,-0.5]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.8660254,0,-0.5],[0.9238795,0,-0.3826834]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.9238795,0,-0.3826834],[0.9659258,0,-0.258819]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.9659258,0,-0.258819],[0.9914449,0,-0.1305262]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0.9914449,0,-0.1305262],[1.0,0,-0.0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,1.0,0.0],[0,0.9914449,0.1305262]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,0.9914449,0.1305262],[0,0.9659258,0.258819]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,0.9659258,0.258819],[0,0.9238795,0.3826834]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,0.9238795,0.3826834],[0,0.8660254,0.5]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,0.8660254,0.5],[0,0.7933533,0.6087614]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,0.7933533,0.6087614],[0,0.7071068,0.7071068]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,0.7071068,0.7071068],[0,0.6087614,0.7933533]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,0.6087614,0.7933533],[0,0.5,0.8660254]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,0.5,0.8660254],[0,0.3826834,0.9238795]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,0.3826834,0.9238795],[0,0.258819,0.9659258]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,0.258819,0.9659258],[0,0.1305262,0.9914449]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,0.1305262,0.9914449],[0,0.0,1.0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,0.0,1.0],[0,-0.1305262,0.9914449]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,-0.1305262,0.9914449],[0,-0.258819,0.9659258]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,-0.258819,0.9659258],[0,-0.3826834,0.9238795]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,-0.3826834,0.9238795],[0,-0.5,0.8660254]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,-0.5,0.8660254],[0,-0.6087614,0.7933533]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,-0.6087614,0.7933533],[0,-0.7071068,0.7071068]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,-0.7071068,0.7071068],[0,-0.7933533,0.6087614]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,-0.7933533,0.6087614],[0,-0.8660254,0.5]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,-0.8660254,0.5],[0,-0.9238795,0.3826834]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,-0.9238795,0.3826834],[0,-0.9659258,0.258819]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,-0.9659258,0.258819],[0,-0.9914449,0.1305262]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,-0.9914449,0.1305262],[0,-1.0,0.0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,-1.0,0.0],[0,-0.9914449,-0.1305262]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,-0.9914449,-0.1305262],[0,-0.9659258,-0.258819]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,-0.9659258,-0.258819],[0,-0.9238795,-0.3826834]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,-0.9238795,-0.3826834],[0,-0.8660254,-0.5]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,-0.8660254,-0.5],[0,-0.7933533,-0.6087614]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,-0.7933533,-0.6087614],[0,-0.7071068,-0.7071068]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,-0.7071068,-0.7071068],[0,-0.6087614,-0.7933533]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,-0.6087614,-0.7933533],[0,-0.5,-0.8660254]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,-0.5,-0.8660254],[0,-0.3826834,-0.9238795]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,-0.3826834,-0.9238795],[0,-0.258819,-0.9659258]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,-0.258819,-0.9659258],[0,-0.1305262,-0.9914449]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,-0.1305262,-0.9914449],[0,-0.0,-1.0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,-0.0,-1.0],[0,0.1305262,-0.9914449]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,0.1305262,-0.9914449],[0,0.258819,-0.9659258]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,0.258819,-0.9659258],[0,0.3826834,-0.9238795]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,0.3826834,-0.9238795],[0,0.5,-0.8660254]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,0.5,-0.8660254],[0,0.6087614,-0.7933533]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,0.6087614,-0.7933533],[0,0.7071068,-0.7071068]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,0.7071068,-0.7071068],[0,0.7933533,-0.6087614]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,0.7933533,-0.6087614],[0,0.8660254,-0.5]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,0.8660254,-0.5],[0,0.9238795,-0.3826834]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,0.9238795,-0.3826834],[0,0.9659258,-0.258819]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,0.9659258,-0.258819],[0,0.9914449,-0.1305262]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {"type":"line3d","def":[[0,0.9914449,-0.1305262],[0,1.0,-0.0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b8c5cc","strokeWidth":0.8,"strokeOpacity":0.65,"fixed":true}},
  {type: line3d, def: [[-1.2, 0, 0], [1.25, 0, 0]], att: {straightFirst: false, straightLast: false, lastArrow: true, strokeColor: '#949ea5', strokeWidth: 1.2, fixed: true}},
  {type: line3d, def: [[0, -1.2, 0], [0, 1.25, 0]], att: {straightFirst: false, straightLast: false, lastArrow: true, strokeColor: '#949ea5', strokeWidth: 1.2, fixed: true}},
  {type: line3d, def: [[0, 0, -1.2], [0, 0, 1.25]], att: {straightFirst: false, straightLast: false, lastArrow: true, strokeColor: '#949ea5', strokeWidth: 1.2, fixed: true}},
  {type: line3d, def: [[0, 0, 0], [0.65, 0.35, 0.6745368782]], att: {straightFirst: false, straightLast: false, lastArrow: true, strokeColor: '#007b9b', strokeWidth: 3, fixed: true}},
  {type: line3d, def: [[0.65, 0.35, 0.6745368782], [0.65, 0.35, 0]], att: {straightFirst: false, straightLast: false, dash: 2, strokeColor: '#76afbf', strokeWidth: 1.2, fixed: true}},
  {type: point3d, def: [0, 0, 1], att: {size: 5, fixed: true, withLabel: false, fillColor: '#23477e', strokeColor: '#23477e'}},
  {type: point3d, def: [0, 0, -1], att: {size: 5, fixed: true, withLabel: false, fillColor: '#23477e', strokeColor: '#23477e'}},
  {type: point3d, def: [1, 0, 0], att: {size: 5, fixed: true, withLabel: false, fillColor: '#33865a', strokeColor: '#33865a'}},
  {type: point3d, def: [-1, 0, 0], att: {size: 5, fixed: true, withLabel: false, fillColor: '#33865a', strokeColor: '#33865a'}},
  {type: point3d, def: [0.65, 0.35, 0.6745368782], att: {size: 6, fixed: true, withLabel: false, fillColor: '#007b9b', strokeColor: '#007b9b'}},
  {type: point3d, def: [0.22, 0.08, 0.12], att: {size: 5, fixed: true, withLabel: false, fillColor: '#b55b64', strokeColor: '#b55b64'}},
  {type: point3d, def: [0, 0, 0], att: {size: 2, fixed: true, withLabel: false, fillColor: '#777777', strokeColor: '#777777'}},
  {type: text3d, def: [[1.43, 0, 0], '⟨σx⟩'], att: {fixed: true, fontSize: 16, anchorX: 'middle', anchorY: 'middle', useMathJax: false, strokeColor: '#777777'}},
  {type: text3d, def: [[0, 1.43, 0], '⟨σy⟩'], att: {fixed: true, fontSize: 16, anchorX: 'middle', anchorY: 'middle', useMathJax: false, strokeColor: '#777777'}},
  {type: text3d, def: [[0, 0, 1.45], '⟨σz⟩'], att: {fixed: true, fontSize: 16, anchorX: 'middle', anchorY: 'middle', useMathJax: false, strokeColor: '#777777'}},
  {type: text3d, def: [[0.08, 0.03, 1.04], '|↑⟩'], att: {fixed: true, fontSize: 17, anchorX: 'left', anchorY: 'middle', useMathJax: false, strokeColor: '#23477e'}},
  {type: text3d, def: [[0.08, 0.03, -1.04], '|↓⟩'], att: {fixed: true, fontSize: 17, anchorX: 'left', anchorY: 'middle', useMathJax: false, strokeColor: '#23477e'}},
  {type: text3d, def: [[1.08, 0, 0.08], '|+x⟩'], att: {fixed: true, fontSize: 17, anchorX: 'left', anchorY: 'middle', useMathJax: false, strokeColor: '#33865a'}},
  {type: text3d, def: [[-1.08, 0, 0.08], '|−x⟩'], att: {fixed: true, fontSize: 17, anchorX: 'right', anchorY: 'middle', useMathJax: false, strokeColor: '#33865a'}},
  {type: text3d, def: [[0.72, 0.39, 0.76], '|ψ⟩'], att: {fixed: true, fontSize: 17, anchorX: 'left', anchorY: 'middle', useMathJax: false, strokeColor: '#007b9b'}},
  {type: text3d, def: [[0.27, 0.1, 0.24], 'mixed state'], att: {fixed: true, fontSize: 16, anchorX: 'left', anchorY: 'middle', useMathJax: false, strokeColor: '#b55b64'}},
  {type: text3d, def: [[-0.08, -0.02, -0.14], 'I/2'], att: {fixed: true, fontSize: 14, anchorX: 'right', anchorY: 'middle', useMathJax: false, strokeColor: '#777777'}},
  {type: text3d, def: [[0.34, 0.16, 0.82], '50'], att: {fixed: true, fontSize: 16, anchorX: 'middle', anchorY: 'middle', useMathJax: false, strokeColor: '#007b9b'}},
  {type: text, def: [0, -2.25, 'Pure states ↔ surface'], att: {fixed: true, fontSize: 17, anchorX: 'middle', anchorY: 'middle', useMathJax: false, strokeColor: '#333333'}},
  {type: text, def: [0, -2.5, 'Mixed states ↔ interior'], att: {fixed: true, fontSize: 17, anchorX: 'middle', anchorY: 'middle', useMathJax: false, strokeColor: '#333333'}}
]
```

**Fig. 6.2** Interactive 3D Bloch sphere for spin one half. Drag inside the plot to rotate it. Pure states lie on the surface, with $\operatorname{Tr}(\rho^2)=1$; mixed states lie inside, with $\operatorname{Tr}(\rho^2)<1$. The maximally mixed state $\rho=I/2$ is at the center.

> [!note]
> The blue state marker has unit distance from the origin in three dimensions. The red mixed-state marker lies strictly inside the sphere. The source contains the blue label “50” without a unit or explanation. It is retained without assigning it an angle or other meaning.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $p_i$ | $1$ | Mixture probabilities | The nonnegative weights of the normalized pure states. |
| $\operatorname{Tr}(\rho^2)$ | $1$ | Purity | The scalar that equals one for a pure state and is smaller for a mixed state. |
| $\langle\hat A\rangle$ | — | Observable expectation value | The mean measurement value. Its unit depends on the observable. |
| $\langle\sigma_x\rangle,\langle\sigma_y\rangle,\langle\sigma_z\rangle$ | $1$ | Pauli expectation values | The dimensionless coordinates of the Bloch representation. |
| — | $1$ | Spin quantum number | The Bloch-sphere example uses spin one half. |
