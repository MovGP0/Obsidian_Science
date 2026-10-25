---
title: "The Uncertainty Principle"
---

> [!TLDR]
> The Robertson inequality bounds the product of two observable standard deviations by their commutator expectation. For position and momentum, it gives the state uncertainty bound ℏ/2.

> [!theorem] Theorem 10.3 | Robertson inequality
> For two Hermitian observables in a normalized state,
>
> $$
> \boxed{\Delta A\,\Delta B\ge\frac12\left|\langle[\hat A,\hat B]\rangle\right|,}
> $$
>
> where $\Delta A=\sqrt{\langle\hat A^2\rangle-\langle\hat A\rangle^2}$, and similarly for $\Delta B$.

**Proof.** Define the centered operators

$$
\hat a=\hat A-\langle\hat A\rangle\hat I,
\qquad\hat b=\hat B-\langle\hat B\rangle\hat I.
$$

Their expectations vanish, and $\Delta A=\lVert\hat a|\psi\rangle\rVert$, $\Delta B=\lVert\hat b|\psi\rangle\rVert$. The Cauchy–Schwarz inequality gives

$$
(\Delta A)^2(\Delta B)^2
=\lVert\hat a|\psi\rangle\rVert^2\lVert\hat b|\psi\rangle\rVert^2
\ge|\langle\psi|\hat a\hat b|\psi\rangle|^2.
$$

Write

$$
\hat a\hat b
=\frac12(\hat a\hat b+\hat b\hat a)+\frac12(\hat a\hat b-\hat b\hat a)
=\frac12\{\hat a,\hat b\}+\frac12[\hat a,\hat b].
$$

The anticommutator $\{\hat a,\hat b\}=\hat a\hat b+\hat b\hat a$ is Hermitian, so its expectation is real. The commutator is anti-Hermitian, so its expectation is purely imaginary:

$$
[\hat A,\hat B]^\dagger
=[\hat B^\dagger,\hat A^\dagger]
=[\hat B,\hat A]=-[\hat A,\hat B].
$$

For every complex number, $|z|^2=(\operatorname{Re}z)^2+(\operatorname{Im}z)^2\ge(\operatorname{Im}z)^2$. Therefore,

$$
|\langle\hat a\hat b\rangle|^2
\ge\left|\frac12\langle[\hat a,\hat b]\rangle\right|^2
=\frac14|\langle[\hat A,\hat B]\rangle|^2.
$$

Here $[\hat a,\hat b]=[\hat A,\hat B]$, because scalar multiples of the identity commute with all operators. Taking square roots proves the inequality. $\square$

For unbounded observables, the state must satisfy the domain and finite-moment conditions needed for the displayed expressions.

## Position and momentum

Since $[\hat x,\hat p]=i\mechanical{\hbar}\hat I$,

$$
\boxed{\mechanical{\Delta x}\,\mechanical{\Delta p}\ge\frac{\mechanical{\hbar}}2.}
$$

This is the **Heisenberg uncertainty principle**. It bounds the spread of measurement results in a state. The bound follows from the algebra of the theory, rather than from the accuracy of a particular instrument.

```graph
bounds: [-0.95, 3.95, 4.2, -0.85]
height: 500
width: 700
axis: false
drag: false
showNavigation: false
keepAspectRatio: false
elements: [
  {"type":"curve","def":[[0.0,0.0,0.14705882,0.1710084,0.19495798,0.21890756,0.24285714,0.26680672,0.2907563,0.31470588,0.33865546,0.36260504,0.38655462,0.4105042,0.43445378,0.45840336,0.48235294,0.50630252,0.5302521,0.55420168,0.57815126,0.60210084,0.62605042,0.65,0.67394958,0.69789916,0.72184874,0.74579832,0.7697479,0.79369748,0.81764706,0.84159664,0.86554622,0.8894958,0.91344538,0.93739496,0.96134454,0.98529412,1.0092437,1.03319328,1.05714286,1.08109244,1.10504202,1.1289916,1.15294118,1.17689076,1.20084034,1.22478992,1.2487395,1.27268908,1.29663866,1.32058824,1.34453782,1.36848739,1.39243697,1.41638655,1.44033613,1.46428571,1.48823529,1.51218487,1.53613445,1.56008403,1.58403361,1.60798319,1.63193277,1.65588235,1.67983193,1.70378151,1.72773109,1.75168067,1.77563025,1.79957983,1.82352941,1.84747899,1.87142857,1.89537815,1.91932773,1.94327731,1.96722689,1.99117647,2.01512605,2.03907563,2.06302521,2.08697479,2.11092437,2.13487395,2.15882353,2.18277311,2.20672269,2.23067227,2.25462185,2.27857143,2.30252101,2.32647059,2.35042017,2.37436975,2.39831933,2.42226891,2.44621849,2.47016807,2.49411765,2.51806723,2.54201681,2.56596639,2.58991597,2.61386555,2.63781513,2.66176471,2.68571429,2.70966387,2.73361345,2.75756303,2.78151261,2.80546218,2.82941176,2.85336134,2.87731092,2.9012605,2.92521008,2.94915966,2.97310924,2.99705882,3.0210084,3.04495798,3.06890756,3.09285714,3.11680672,3.1407563,3.16470588,3.18865546,3.21260504,3.23655462,3.2605042,3.28445378,3.30840336,3.33235294,3.35630252,3.3802521,3.40420168,3.42815126,3.45210084,3.47605042,3.5,3.5,0.0],[0.0,3.4,3.4,2.92383292,2.56465517,2.2840691,2.05882353,1.87401575,1.71965318,1.58878505,1.4764268,1.37891078,1.29347826,1.21801433,1.15087041,1.09074244,1.03658537,0.98755187,0.9429477,0.90219864,0.86482558,0.83042568,0.79865772,0.76923077,0.74189526,0.71643588,0.69266589,0.67042254,0.64956332,0.62996294,0.61151079,0.59410884,0.5776699,0.5621162,0.5473781,0.5333931,0.5201049,0.50746269,0.49542048,0.48393656,0.47297297,0.46249514,0.45247148,0.44287309,0.43367347,0.42484827,0.41637509,0.40823328,0.40040377,0.39286893,0.38561244,0.37861915,0.371875,0.3653669,0.35908268,0.35301098,0.34714119,0.34146341,0.33596838,0.3306474,0.32549234,0.32049556,0.31564987,0.31094852,0.30638517,0.30195382,0.29764882,0.29346486,0.28939689,0.28544015,0.28159016,0.27784263,0.27419355,0.27063907,0.26717557,0.2637996,0.26050788,0.2572973,0.25416489,0.25110783,0.24812344,0.24520915,0.24236253,0.23958124,0.23686306,0.23420586,0.23160763,0.22906641,0.22658035,0.22414767,0.22176668,0.21943574,0.21715328,0.21491783,0.21272792,0.2105822,0.20847933,0.20641804,0.20439711,0.20241538,0.2004717,0.19856499,0.19669421,0.19485836,0.19305646,0.19128757,0.18955081,0.1878453,0.18617021,0.18452473,0.18290808,0.18131952,0.17975831,0.17822375,0.17671518,0.17523192,0.17377336,0.17233888,0.17092789,0.16953982,0.16817411,0.16683023,0.16550765,0.16420588,0.16292442,0.16166282,0.1604206,0.15919732,0.15799257,0.1568059,0.15563693,0.15448527,0.15335052,0.15223231,0.1511303,0.15004413,0.14897346,0.14791796,0.14687731,0.14585121,0.14483934,0.14384141,0.14285714,0.0,0.0]],"att":{"fixed":true,"strokeColor":"#b52336","strokeWidth":0,"fillColor":"#b52336","fillOpacity":0.14}},
  {type: line, def: [[0, 0], [3.65, 0]], att: {straightFirst: false, straightLast: false, lastArrow: true, fixed: true, strokeColor: '#555555', strokeWidth: 1.2}},
  {type: line, def: [[0, 0], [0, 3.55]], att: {straightFirst: false, straightLast: false, lastArrow: true, fixed: true, strokeColor: '#555555', strokeWidth: 1.2}},
  {type: functiongraph, def: [f:0.5/x, 0.1470588235, 3.5], att: {strokeColor: '#b52336', strokeWidth: 2, fixed: true}},
  {type: text, def: [-0.08, -0.14, '0'], att: {fixed: true, fontSize: 15, anchorX: 'right', anchorY: 'middle'}},
  {type: text, def: [1, -0.18, '1'], att: {fixed: true, fontSize: 15, anchorX: 'middle', anchorY: 'middle'}},
  {type: text, def: [2, -0.18, '2'], att: {fixed: true, fontSize: 15, anchorX: 'middle', anchorY: 'middle'}},
  {type: text, def: [3, -0.18, '3'], att: {fixed: true, fontSize: 15, anchorX: 'middle', anchorY: 'middle'}},
  {type: text, def: [-0.10, 1, '1'], att: {fixed: true, fontSize: 15, anchorX: 'right', anchorY: 'middle'}},
  {type: text, def: [-0.10, 2, '2'], att: {fixed: true, fontSize: 15, anchorX: 'right', anchorY: 'middle'}},
  {type: text, def: [-0.10, 3, '3'], att: {fixed: true, fontSize: 15, anchorX: 'right', anchorY: 'middle'}},
  {type: text, def: [1.75, -0.57, 'Δx / √(ℏ/(mω))'], att: {fixed: true, fontSize: 17, anchorX: 'middle', anchorY: 'middle'}},
  {type: text, def: [0, 3.78, 'Δp / √(mℏω)'], att: {fixed: true, fontSize: 17, anchorX: 'left', anchorY: 'middle'}},
  {type: line, def: [[1.75, 3.25], [2.05, 3.25]], att: {straightFirst: false, straightLast: false, fixed: true, strokeColor: '#b52336', strokeWidth: 2}},
  {type: text, def: [2.13, 3.25, 'Δx · Δp = ℏ/2'], att: {fixed: true, fontSize: 16, anchorX: 'left', anchorY: 'middle'}},
  {type: text, def: [2.35, 1.9, 'Allowed region'], att: {fixed: true, fontSize: 17, anchorX: 'middle', anchorY: 'middle', strokeColor: '#25834c'}},
  {type: text, def: [2.15, 0.08, 'Forbidden region'], att: {fixed: true, fontSize: 13, anchorX: 'middle', anchorY: 'middle', strokeColor: '#a52a35'}},
  {type: point, def: [0.5, 1.8], att: {fixed: true, withLabel: false, size: 3, fillColor: '#ffffff', strokeColor: '#3892b7', strokeWidth: 1.3}},
  {type: point, def: [0.8, 2.5], att: {fixed: true, withLabel: false, size: 3, fillColor: '#ffffff', strokeColor: '#3892b7', strokeWidth: 1.3}},
  {type: point, def: [1.5, 1.5], att: {fixed: true, withLabel: false, size: 3, fillColor: '#ffffff', strokeColor: '#3892b7', strokeWidth: 1.3}},
  {type: point, def: [2, 0.8], att: {fixed: true, withLabel: false, size: 3, fillColor: '#ffffff', strokeColor: '#3892b7', strokeWidth: 1.3}},
  {type: point, def: [1, 0.5], att: {fixed: true, withLabel: false, size: 4, fillColor: '#234987', strokeColor: '#234987'}},
  {type: text, def: [1.13, 0.58, 'Gaussian state'], att: {fixed: true, fontSize: 16, anchorX: 'left', anchorY: 'middle', strokeColor: '#234987'}}
]
```

**Fig. 10.1** Heisenberg uncertainty principle. The uncertainty pair cannot lie below the hyperbola $\mechanical{\Delta x}\,\mechanical{\Delta p}=\mechanical{\hbar}/2$. The filled point represents a minimum-uncertainty Gaussian state on the boundary. The open circles represent states above it. The shaded region is forbidden for every quantum state, independently of technology.

The axes use oscillator scales $\sqrt{\mechanical{\hbar}/(\mechanical{m}\signal{\omega})}$ for position and $\sqrt{\mechanical{m}\mechanical{\hbar}\signal{\omega}}$ for momentum. In these coordinates, the boundary is $v=1/(2u)$. The illustrated Gaussian has scaled uncertainties $(u,v)=(1,1/2)$; it is not specifically the oscillator ground state, which has $(1/\sqrt2,1/\sqrt2)$.

## Example — Spin uncertainty

Since $[\hat S_x,\hat S_y]=i\mechanical{\hbar}\hat S_z$,

$$
\mechanical{\Delta S_x}\,\mechanical{\Delta S_y}
\ge\frac{\mechanical{\hbar}}2|\langle\hat S_z\rangle|.
$$

For $|\uparrow\rangle$, an eigenstate of $\hat S_z$ with $\langle\hat S_z\rangle=\mechanical{\hbar}/2$,

$$
\mechanical{\Delta S_x}\,\mechanical{\Delta S_y}\ge\frac{\mechanical{\hbar}^2}4.
$$

In fact, $\langle\hat S_x\rangle=\langle\hat S_y\rangle=0$ and $\mechanical{\Delta S_x}=\mechanical{\Delta S_y}=\mechanical{\hbar}/2$. Thus the product equals $\mechanical{\hbar}^2/4$: this pure spin state saturates the inequality.

For $|+x\rangle$, an eigenstate of $\hat S_x$, the expectation $\langle\hat S_z\rangle=0$. The inequality then gives only a zero lower bound. Here $\mechanical{\Delta S_x}=0$, consistently with the state being an eigenstate.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\Delta A$, $\Delta B$ | — | Observable uncertainty | Standard deviations with the units of their respective observables. |
| $\langle\hat A\rangle$, $\langle\hat B\rangle$ | — | Observable mean | The expectation values used to center the operators. |
| $\langle\hat A^2\rangle$ | — | Second observable moment | The squared-observable mean used in the variance. |
| $\mechanical{\Delta x}$ | $\unit{m}$ | Position uncertainty | The standard deviation of position in the state. |
| $\mechanical{\Delta p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum uncertainty | The standard deviation of momentum in the state. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The quantum of action in the uncertainty bounds. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The mass used to set the oscillator scales. |
| $\signal{\omega}$ | $\unit{s^{-1}}$ | Angular frequency | The oscillator frequency used for the axis scales. |
| $\mechanical{\Delta S_x}$, $\mechanical{\Delta S_y}$ | $\unit{J\,s}$ | Spin uncertainty | The standard deviations of the two spin components. |
| $\langle\hat S_x\rangle$, $\langle\hat S_y\rangle$, $\langle\hat S_z\rangle$ | $\unit{J\,s}$ | Mean spin component | The spin expectation values in the specified states. |
