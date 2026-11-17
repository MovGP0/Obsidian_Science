---
title: "8.2 Angular Momentum Revisited"
---

> [!TLDR]
> The angular momentum vector of a rigid body can depend on the direction as well as the rate of rotation.

For a point mass, $\mechanical{\vec L}=\mechanical{\vec r}\times\mechanical{\vec p}$ gives the angular momentum about the point from which $\mechanical{\vec r}$ is measured. The angular momentum about an axis is the component of that vector along the axis. Consider a mass moving counterclockwise around a circle of radius $\mechanical r$ centered at $O$ in the $xy$ plane. At the instant shown, it lies along $+y$, moves along $-x$, and has angular velocity along $+z$.

```graph3d
bounds: [-2.10, 0.77, 2.10, -0.77]
bounds3d: [[-2.63,2.59],[-1.28,1.28],[-0.45,1.58]]
width: 770
height: 376
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
  az: {slider: {start: 2.820796, visible: false}, pointer: {enabled: true}}
  el: {slider: {start: 0.63, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"line3d","def":[[-1.8,0,0],[-1.8,0,0.4]],"att":{"strokeColor":"#994521","strokeWidth":2,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.89,0,0.43],"ω"],"att":{"strokeColor":"#994521","fontSize":15,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.64,0,0],[0.64,0,0.4]],"att":{"strokeColor":"#994521","strokeWidth":2,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.55,0,0.43],"ω"],"att":{"strokeColor":"#994521","fontSize":15,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"curve3d","def":[[1.33,1.3429,1.3557,1.3685,1.3812,1.3938,1.4062,1.4185,1.4306,1.4424,1.454,1.4653,1.4763,1.4869,1.4972,1.5072],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0.27,0.2697,0.2688,0.2672,0.2651,0.2624,0.259,0.2551,0.2506,0.2455,0.2398,0.2337,0.2269,0.2197,0.212,0.2037]],"att":{"strokeColor":"#6b8296","strokeWidth":1.25,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.48,0,0.41],"φ"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.8,0,0],[-1.8,-0.58,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.45,"dash":2,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.8,-0.675,-0.07],"+x"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.8,0,0],[-0.15,0,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.45,"dash":2,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.1,0,0],"+y"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.8,0,0],[-1.8,0,1.26]],"att":{"strokeColor":"#6b8296","strokeWidth":1.45,"dash":2,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.74,0,1.33],"+z"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"curve3d","def":[[-1.8,-1.7279,-1.6565,-1.5868,-1.5194,-1.455,-1.3944,-1.3383,-1.2872,-1.2418,-1.2024,-1.1697000000000002,-1.1438000000000001,-1.1251,-1.1138,-1.11,-1.1138,-1.1251,-1.1438000000000001,-1.1697000000000002,-1.2024,-1.2418,-1.2872,-1.3383,-1.3944,-1.455,-1.5194,-1.5868,-1.6565,-1.7279,-1.8,-1.8721,-1.9435,-2.0132,-2.0806,-2.145,-2.2056,-2.2617000000000003,-2.3128,-2.3582,-2.3976,-2.4303,-2.4562,-2.4749,-2.4862,-2.49,-2.4862,-2.4749,-2.4562,-2.4303,-2.3976,-2.3582,-2.3128,-2.2617000000000003,-2.2056,-2.145,-2.0806,-2.0132,-1.9435,-1.8721,-1.8],[-0.69,-0.6862,-0.6749,-0.6562,-0.6303,-0.5976,-0.5582,-0.5128,-0.4617,-0.4056,-0.345,-0.2806,-0.2132,-0.1435,-0.0721,0,0.0721,0.1435,0.2132,0.2806,0.345,0.4056,0.4617,0.5128,0.5582,0.5976,0.6303,0.6562,0.6749,0.6862,0.69,0.6862,0.6749,0.6562,0.6303,0.5976,0.5582,0.5128,0.4617,0.4056,0.345,0.2806,0.2132,0.1435,0.0721,0,-0.0721,-0.1435,-0.2132,-0.2806,-0.345,-0.4056,-0.4617,-0.5128,-0.5582,-0.5976,-0.6303,-0.6562,-0.6749,-0.6862,-0.69],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#344b61","strokeWidth":1.4,"dash":2,"fillColor":"none","fillOpacity":0,"fixed":true,"highlight":false}},
  {"type":"point3d","def":[-1.8,0,0],"att":{"strokeColor":"#344b61","fillColor":"#344b61","size":3.8,"withLabel":false,"fixed":true,"highlight":false}},
  {"type":"point3d","def":[-1.11,0,0],"att":{"strokeColor":"#344b61","fillColor":"#344b61","size":3.8,"withLabel":false,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.8,0,0],[-1.11,0,0]],"att":{"strokeColor":"#344b61","strokeWidth":2.4,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.47,0,0.12],"𝑟"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.11,0,0],[-1.11,0.46,0]],"att":{"strokeColor":"#994521","strokeWidth":2.4,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.03,0.46,-0.08],"𝑝"],"att":{"strokeColor":"#994521","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.8,0,0],[-1.8,0,0.76]],"att":{"strokeColor":"#186b99","strokeWidth":2.4,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.69,0,0.81],"L at O = Lz"],"att":{"strokeColor":"#186b99","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.89,0,-0.12],"𝑂"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-2.05,0,1.24],"(a)"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.64,0,0],[0.64,-0.58,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.45,"dash":2,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.64,-0.675,-0.07],"+x"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.64,0,0],[2.29,0,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.45,"dash":2,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[2.34,0,0],"+y"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.64,0,0],[0.64,0,1.26]],"att":{"strokeColor":"#6b8296","strokeWidth":1.45,"dash":2,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.7,0,1.33],"+z"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"curve3d","def":[[0.64,0.7121,0.7835,0.8532,0.9206000000000001,0.985,1.0456,1.1017000000000001,1.1528,1.1982,1.2376,1.2703,1.2962,1.3149000000000002,1.3262,1.33,1.3262,1.3149000000000002,1.2962,1.2703,1.2376,1.1982,1.1528,1.1017000000000001,1.0456,0.985,0.9206000000000001,0.8532,0.7835,0.7121,0.64,0.5679000000000001,0.49650000000000005,0.4268,0.3594,0.29500000000000004,0.2344,0.17830000000000001,0.12719999999999998,0.08179999999999998,0.04239999999999999,0.009700000000000042,-0.016199999999999992,-0.03490000000000004,-0.04620000000000002,-0.04999999999999993,-0.04620000000000002,-0.03490000000000004,-0.016199999999999992,0.009700000000000042,0.04239999999999999,0.08179999999999998,0.12719999999999998,0.17830000000000001,0.2344,0.29500000000000004,0.3594,0.4268,0.49650000000000005,0.5679000000000001,0.64],[-0.69,-0.6862,-0.6749,-0.6562,-0.6303,-0.5976,-0.5582,-0.5128,-0.4617,-0.4056,-0.345,-0.2806,-0.2132,-0.1435,-0.0721,0,0.0721,0.1435,0.2132,0.2806,0.345,0.4056,0.4617,0.5128,0.5582,0.5976,0.6303,0.6562,0.6749,0.6862,0.69,0.6862,0.6749,0.6562,0.6303,0.5976,0.5582,0.5128,0.4617,0.4056,0.345,0.2806,0.2132,0.1435,0.0721,0,-0.0721,-0.1435,-0.2132,-0.2806,-0.345,-0.4056,-0.4617,-0.5128,-0.5582,-0.5976,-0.6303,-0.6562,-0.6749,-0.6862,-0.69],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#344b61","strokeWidth":1.4,"dash":2,"fillColor":"none","fillOpacity":0,"fixed":true,"highlight":false}},
  {"type":"point3d","def":[0.64,0,0],"att":{"strokeColor":"#344b61","fillColor":"#344b61","size":3.8,"withLabel":false,"fixed":true,"highlight":false}},
  {"type":"point3d","def":[1.33,0,0],"att":{"strokeColor":"#344b61","fillColor":"#344b61","size":3.8,"withLabel":false,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.64,0,0],[1.33,0,0]],"att":{"strokeColor":"#344b61","strokeWidth":2.4,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.97,0,0.12],"𝑟"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1.33,0,0],[1.33,0.46,0]],"att":{"strokeColor":"#994521","strokeWidth":2.4,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.41,0.46,-0.08],"𝑝"],"att":{"strokeColor":"#994521","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"point3d","def":[0.64,0,0.6],"att":{"strokeColor":"#344b61","fillColor":"#344b61","size":3.8,"withLabel":false,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.55,0,0.69],"𝐴"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.64,0,0.6],[1.33,0,0]],"att":{"strokeColor":"#344b61","strokeWidth":2.4,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.93,0,0.39],"rₐ"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1.33,0,0],[1.99,0,0.76]],"att":{"strokeColor":"#186b99","strokeWidth":2.4,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[2.03,0,0.79],"Lₐ"],"att":{"strokeColor":"#186b99","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1.33,0,0],[1.33,0,0.76]],"att":{"strokeColor":"#2b7354","strokeWidth":2.4,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.255,0,0.81],"Lₐ,z"],"att":{"strokeColor":"#2b7354","fontSize":15,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1.33,0,0],[1.99,0,0]],"att":{"strokeColor":"#2b7354","strokeWidth":2.4,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.97,0,-0.14],"Lₐ,y"],"att":{"strokeColor":"#2b7354","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1.33,0,0.76],[1.99,0,0.76]],"att":{"strokeColor":"#6b8296","strokeWidth":1.4,"dash":2,"lastArrow":false,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1.99,0,0],[1.99,0,0.76]],"att":{"strokeColor":"#6b8296","strokeWidth":1.4,"dash":2,"lastArrow":false,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.54,0,-0.12],"𝑂"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.39,0,1.24],"(b)"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}}
]
```

**Fig. 8.4** (a) The angular momentum about $O$ points along $+z$. (b) Moving the reference point up the $z$ axis to $A$ adds a component along $+y$ and leaves the $z$ component unchanged. The vectors in panel (b) are drawn at the particle to show their directions and components. Drag to rotate the plot.

The perpendicular displacement from the $z$ axis to the mass is along $+y$. It is perpendicular to the linear momentum, and the right-hand rule gives a positive $z$ component.

$$
\mechanical L_z=\mechanical r\mechanical p\sin(\pi/2)=\mechanical r\mechanical p .
\tag{8.3}
$$

The displacement from $O$ is the same vector in this case, so the angular momentum about $O$ points along $+z$ with magnitude

$$
\mechanical L_O=\mechanical r\mechanical p\sin(\pi/2)=\mechanical r\mechanical p=\mechanical L_z .
\tag{8.4}
$$

Now move the reference point to $A$, at height $\mechanical z_A$ on the $z$ axis. The position vector $\mechanical{\vec r}_A$ from $A$ to the mass stays perpendicular to $\mechanical{\vec p}$. Its cross product with $\mechanical{\vec p}$ gives an angular momentum tilted toward $+y$.

$$
\mechanical L_A=\mechanical r_A\mechanical p\sin(\pi/2)=\mechanical r_A\mechanical p .
\tag{8.5}
$$

Let $\mechanical\phi$ be the angle $\mechanical{\vec L}_A$ makes with $+z$. It is also the angle between $\mechanical{\vec r}_A$ and $+y$. Then

$$
\mechanical L_{A,z}=\mechanical L_A\cos\mechanical\phi
=\mechanical r_A\mechanical p\cos\mechanical\phi .
\tag{8.6}
$$

The right triangle gives $\mechanical r_A\cos\mechanical\phi=\mechanical r$, so

$$
\mechanical L_{A,z}=\mechanical r\mechanical p .
\tag{8.7}
$$

Similarly, $\mechanical r_A\sin\mechanical\phi=\mechanical z_A$, so the $y$ component is

$$
\mechanical L_{A,y}=\mechanical L_A\sin\mechanical\phi
=\mechanical r_A\mechanical p\sin\mechanical\phi=\mechanical z_A\mechanical p .
\tag{8.8}
$$

The $x$ component is zero. These same components follow directly from the cross product with $\mechanical{\vec r}_A=\mechanical r\,\hat{\boldsymbol y}-\mechanical z_A\,\hat{\boldsymbol z}$ and $\mechanical{\vec p}=-\mechanical p\,\hat{\boldsymbol x}$.

$$
\begin{aligned}
\mechanical{\vec L}_A
&=(\mechanical r\,\hat{\boldsymbol y}-\mechanical z_A\,\hat{\boldsymbol z})
\times(-\mechanical p\,\hat{\boldsymbol x})\\
&=\mechanical r\mechanical p\,\hat{\boldsymbol z}+\mechanical z_A\mechanical p\,\hat{\boldsymbol y} .
\end{aligned}\tag{8.9}
$$

Shifting the reference point along the specified axis leaves the angular momentum component along that axis unchanged. Other components can change. For general rigid-body rotation, angular momentum about the chosen point need not be parallel to angular velocity. Along a principal axis, the vector relation $\mechanical{\vec L}=\mechanical I\mechanical{\vec\omega}$ holds with the corresponding principal moment of inertia. The inertia tensor relates the two vectors for arbitrary orientations.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\vec L}_O,\mechanical{\vec L}_A$ | $\unit{kg\,m^2\,s^{-1}}$ | Angular momentum | Angular momentum vectors about $O$ and $A$. |
| $\mechanical L_z$ | $\unit{kg\,m^2\,s^{-1}}$ | Axial angular momentum | Component along the rotation axis. |
| $\mechanical{\vec p}$ | $\unit{kg\,m\,s^{-1}}$ | Linear momentum | Momentum tangent to the circular path. |
| $\mechanical{\vec r},\mechanical{\vec r}_A$ | $\unit m$ | Position vectors | Displacements from $O$ and $A$ to the mass. |
| $\mechanical z_A$ | $\unit m$ | Reference height | Height of $A$ on the $z$ axis. |
| $\mechanical\phi$ | $\unit{rad}$ | Angle | Tilt of $\mechanical{\vec L}_A$ from $+z$. |
| $\mechanical{\vec\omega}$ | $\unit{rad\,s^{-1}}$ | Angular velocity | Rotation rate and axis direction. |
| $\mechanical I$ | $\unit{kg\,m^2}$ | Moment of inertia | Principal moment for rotation about a principal axis. |
