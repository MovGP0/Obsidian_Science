---
title: "5.2 Definition of Angular Momentum (L⃗)"
---

> [!TLDR]
> Angular momentum about a point is the cross product of position relative to that point and linear momentum.

Newton’s second law relates the rate of change of linear momentum to the net force, $\sum\mechanical{\vec F}=d\mechanical{\vec p}/dt$. The rotational analogue relates angular momentum to net torque about the same fixed point in an inertial frame.

$$
\sum\mechanical{\vec\tau}=\frac{d\mechanical{\vec L}}{dt}. \tag{5.2}
$$

Consider a point mass $\mechanical m$ moving in the $xy$ plane, as in Fig. 5.1. Its angular position relative to the $z$ axis can change even if its path is straight. If you watch a car pass on a straight road, you turn your head to keep watching it. The car’s direction from you changes during the pass.

At time $t$, the mass has position $\mechanical{\vec r}$ relative to the origin, velocity $\mechanical{\vec v}$, and momentum $\mechanical{\vec p}$. The position vector in this planar example is perpendicular to the $z$ axis.

```graph3d
bounds: [-1.6, 1.02, 1.6, -1.02]
bounds3d: [[-1.06,1.72],[-0.5,1.76],[-0.44,1.5]]
height: 354
width: 630
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
  az: {slider: {start: 1.68, visible: false}, pointer: {enabled: true}}
  el: {slider: {start: 0.61, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"line3d","def":[[0,0,0],[0,0,1.35]],"att":{"strokeColor":"#6b8296","strokeWidth":1.55,"lastArrow":true,"dash":2,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.07,0,1.385],"+z"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[1.43,0,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.45,"lastArrow":true,"dash":2,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.54,0,0],"+x"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[0,1.57,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.45,"lastArrow":true,"dash":2,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0,1.67,0],"+y"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[0,0,0.92]],"att":{"strokeColor":"#994521","strokeWidth":3,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.16,0.02,0.92],"𝐿"],"att":{"strokeColor":"#994521","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[1.06,0.36,0]],"att":{"strokeColor":"#186b99","strokeWidth":2.9,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.59,0.22,0.11],"𝑟"],"att":{"strokeColor":"#186b99","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1.06,0.36,0],[1.53,0.52,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.4,"lastArrow":false,"dash":2,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1.06,0.36,0],[1.06,1.43,0]],"att":{"strokeColor":"#2b7354","strokeWidth":2.0,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1.06,0.36,0],[1.06,1.03,0]],"att":{"strokeColor":"#186b99","strokeWidth":3.25,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.12,1.36,0.16],"𝑝"],"att":{"strokeColor":"#2b7354","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.05,0.98,0.14],"𝑣"],"att":{"strokeColor":"#186b99","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"curve3d","def":[[1.334596,1.328271,1.32091,1.31254,1.303195,1.292911,1.281726,1.269685,1.256833,1.243221,1.228901,1.213928,1.198361,1.182259,1.165684,1.148701,1.131376,1.113775,1.095966,1.078018,1.06],[0.453259,0.470139,0.486594,0.50256,0.517975,0.532779,0.546916,0.560331,0.572971,0.584789,0.595738,0.605777,0.614865,0.622969,0.630057,0.636102,0.641079,0.644971,0.647761,0.64944,0.65],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#344b61","strokeWidth":1.35,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.25,0.57,0.11],"φ"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"point3d","def":[0,0,0],"att":{"size":3,"strokeColor":"#344b61","fillColor":"#344b61","withLabel":false,"fixed":true,"highlight":false}},
  {"type":"point3d","def":[1.06,0.36,0],"att":{"size":4,"strokeColor":"#344b61","fillColor":"#344b61","withLabel":false,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.12,0.3,-0.14],"𝑚"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}}
]
```

**Fig. 5.1** A mass $\mechanical m$ moves in the $xy$ plane. Its linear momentum $\mechanical{\vec p}$ points along $\mechanical{\vec v}$. In this example the cross product $\mechanical{\vec r}\times\mechanical{\vec p}$ points along $+z$. Drag to rotate the plot.

From Equation (5.1), the net torque about the origin is

$$
\sum\mechanical{\vec\tau}=\mechanical{\vec r}\times\sum\mechanical{\vec F}=\mechanical{\vec r}\times\frac{d\mechanical{\vec p}}{dt}. \tag{5.3}
$$

Since $\mechanical{\vec p}=\mechanical m\mechanical{\vec v}$, momentum and velocity are parallel.

$$
\mechanical{\vec v}\times\mechanical{\vec p}=\frac{d\mechanical{\vec r}}{dt}\times\mechanical{\vec p}=\vec0. \tag{5.4}
$$

Add the zero term from Equation (5.4) and apply the product rule for the cross product.

$$
\begin{aligned}
\sum\mechanical{\vec\tau}
&=\mechanical{\vec r}\times\frac{d\mechanical{\vec p}}{dt}+\frac{d\mechanical{\vec r}}{dt}\times\mechanical{\vec p} \\
&=\frac{d(\mechanical{\vec r}\times\mechanical{\vec p})}{dt}.
\end{aligned} \tag{5.5}
$$

Comparing Equations (5.2) and (5.5) gives the definition of angular momentum about the origin.[^reference-point]

$$
\mechanical{\vec L}=\mechanical{\vec r}\times\mechanical{\vec p}. \tag{5.6}
$$

The SI unit is $\unit{kg\,m^2\,s^{-1}}$. For a point mass and an angle $\mechanical\phi$ between the position and momentum vectors, the magnitude is

$$
|\mechanical{\vec L}|=|\mechanical{\vec r}\times\mechanical{\vec p}|=\mechanical r\mechanical p\sin\mechanical\phi=\mechanical r\mechanical m\mechanical v\sin\mechanical\phi. \tag{5.7}
$$

Parallel or antiparallel vectors give zero angular momentum. For a nonzero cross product, point the fingers of your right hand along $\mechanical{\vec r}$ and curl them toward $\mechanical{\vec p}$. Your thumb points in the direction of $\mechanical{\vec L}$, which is $+z$ in Fig. 5.1.

```graph3d
bounds: [-1.6, 1.02, 1.6, -1.02]
bounds3d: [[-1.48,1.6],[-1.47,1.52],[-0.83,1.59]]
height: 350
width: 570
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
  az: {slider: {start: 2.7, visible: false}, pointer: {enabled: true}}
  el: {slider: {start: 0.6, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"curve3d","def":[[1.13,1.124559,1.108287,1.081343,1.043984,0.996571,0.939561,0.873502,0.799031,0.716864,0.627794,0.532678,0.432432,0.328022,0.220452,0.110759,0.0,-0.110759,-0.220452,-0.328022,-0.432432,-0.532678,-0.627794,-0.716864,-0.799031,-0.873502,-0.939561,-0.996571,-1.043984,-1.081343,-1.108287,-1.124559,-1.13,-1.124559,-1.108287,-1.081343,-1.043984,-0.996571,-0.939561,-0.873502,-0.799031,-0.716864,-0.627794,-0.532678,-0.432432,-0.328022,-0.220452,-0.110759,-0.0,0.110759,0.220452,0.328022,0.432432,0.532678,0.627794,0.716864,0.799031,0.873502,0.939561,0.996571,1.043984,1.081343,1.108287,1.124559,1.13],[0.0,0.110759,0.220452,0.328022,0.432432,0.532678,0.627794,0.716864,0.799031,0.873502,0.939561,0.996571,1.043984,1.081343,1.108287,1.124559,1.13,1.124559,1.108287,1.081343,1.043984,0.996571,0.939561,0.873502,0.799031,0.716864,0.627794,0.532678,0.432432,0.328022,0.220452,0.110759,0.0,-0.110759,-0.220452,-0.328022,-0.432432,-0.532678,-0.627794,-0.716864,-0.799031,-0.873502,-0.939561,-0.996571,-1.043984,-1.081343,-1.108287,-1.124559,-1.13,-1.124559,-1.108287,-1.081343,-1.043984,-0.996571,-0.939561,-0.873502,-0.799031,-0.716864,-0.627794,-0.532678,-0.432432,-0.328022,-0.220452,-0.110759,-0.0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.5,"dash":2,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,-0.68],[0,0,1.41]],"att":{"strokeColor":"#6b8296","strokeWidth":1.55,"lastArrow":true,"dash":2,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.07,0,1.445],"+z"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[0,0,1.07]],"att":{"strokeColor":"#994521","strokeWidth":3,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.16,0.02,1.07],"𝐿"],"att":{"strokeColor":"#994521","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[0.803332,-0.794706,0]],"att":{"strokeColor":"#186b99","strokeWidth":2.7,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.39363,-0.38941,0.18],"𝑟"],"att":{"strokeColor":"#186b99","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.803332,-0.794706,0],[1.232332,-0.361049,0]],"att":{"strokeColor":"#2b7354","strokeWidth":2.8,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.302332,-0.361049,0.08],"𝑣"],"att":{"strokeColor":"#2b7354","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"point3d","def":[0,0,0],"att":{"size":3,"strokeColor":"#344b61","fillColor":"#344b61","withLabel":false,"fixed":true,"highlight":false}},
  {"type":"point3d","def":[0.803332,-0.794706,0],"att":{"size":4,"strokeColor":"#344b61","fillColor":"#344b61","withLabel":false,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.803332,-0.884706,-0.17],"𝑚"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}}
]
```

**Fig. 5.2** For a particle moving on a circle, the velocity $\mechanical{\vec v}$ is perpendicular to the radius $\mechanical{\vec r}$. The counterclockwise motion shown gives angular momentum along $+z$. Drag to rotate the plot.

In circular motion the velocity is perpendicular to the radius, so $\mechanical\phi=\pi/2$ and

$$
|\mechanical{\vec L}|=\mechanical r\mechanical m\mechanical v\sin(\pi/2)=\mechanical r\mechanical m\mechanical v. \tag{5.8}
$$

The right-hand rule gives the $+z$ direction for the motion in Fig. 5.2.

[^reference-point]: A full angular momentum vector is defined about a point. Angular momentum about an axis means its component along that axis. In the planar examples, the motion lies perpendicular to the chosen axis and the angular momentum points along it. Chapter 8 revisits the general case.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical m$ | $\unit{kg}$ | Mass | Mass of the body or particle. |
| $\mechanical{\vec v}$ | $\unit{m\,s^{-1}}$ | Velocity | Rate of change of the position vector. |
| $\mechanical{\vec p}$ | $\unit{kg\,m\,s^{-1}}$ | Linear momentum | Product of mass and velocity. |
| $\mechanical{\vec L}$ | $\unit{kg\,m^2\,s^{-1}}$ | Angular momentum | Rotational momentum about the specified point or axis. |
| $\mechanical{\vec r}$ | $\unit m$ | Position vector | Displacement from the specified reference point. |
| $\mechanical{\vec F}$ | $\unit{N}$ | Force | Force acting on the specified object. |
| $\mechanical{\vec\tau}$ | $\unit{N\,m}$ | Torque | Moment of a force about the chosen point. |
| $\mechanical\phi$ | $\unit{rad}$ | Angle | Angle between the radial displacement and the velocity or momentum. |
| $t$ | $\unit{s}$ | Time | Time measured from the reference instant. |
