---
title: "4.2 Some More Cool Theorems"
---

> [!TLDR]
> The parallel-axis and perpendicular-axis theorems relate moments of inertia about different axes.

There are some interesting theorems that can prove useful when finding moments of inertia, but as with the set of theorems we introduced in Chapter 2, these theorems are not needed to solve problems. We present these theorems at the end of this chapter for the sake of completeness of this unit on the moment of inertia, and because it is beneficial to know that they exist in the literature.

## 4.2.1 Theorem 1: Parallel Axis Theorem (Steiner Theorem)

The parallel-axis theorem relates the moment of inertia $\mechanical I_{\mathrm{CM}}$ about an axis $z$ through the center of mass to the moment of inertia about a parallel axis $z'$ a perpendicular distance $\mechanical d$ away.

$$
\mechanical{I}_{z^{\prime}} = \mechanical I_{\mathrm{CM}} + \mechanical{M} \mechanical{d}^{2} , \tag{4.23}
$$

Here $\mechanical M$ is the total mass. The result applies even if the shifted axis lies outside the body. Among axes with this direction, the minimum occurs at the axis through the center of mass.

![[rotational-motion-fig-4-7-parallel-axes.svg|**Fig. 4.7** Two parallel axes are separated by $\mechanical d$. The axis $z$ passes through the center of mass. The marked element is in the transverse plane along the direction between the axes, so its distances in this case satisfy $\mechanical r'=\mechanical r+\mechanical d$.|385]]

**Proof.** Let $\mechanical{\vec r}$ be the perpendicular displacement from the center-of-mass axis $z$ to a mass element $d\mechanical m$, and let $\mechanical{\vec d}$ be the perpendicular displacement from the parallel axis $z'$ to $z$. Then the mass element’s displacement from $z'$ is $\mechanical{\vec r}'=\mechanical{\vec r}+\mechanical{\vec d}$. Figure 4.7 illustrates a collinear case. The vector relation holds for every mass element.

$$
\begin{aligned}
\mechanical I_{z'}
&=\int |\mechanical{\vec r}'|^2\,d\mechanical m
=\int|\mechanical{\vec r}+\mechanical{\vec d}|^2\,d\mechanical m \\
&=\int\left(\mechanical r^2+2\mechanical{\vec d}\cdot\mechanical{\vec r}+\mechanical d^2\right)d\mechanical m.
\end{aligned} \tag{4.24}
$$

Split the integral into three parts.

$$
\mechanical I_{z'}=\int\mechanical r^2\,d\mechanical m
+\int 2\mechanical{\vec d}\cdot\mechanical{\vec r}\,d\mechanical m
+\int\mechanical d^2\,d\mechanical m. \tag{4.25}
$$

The first integral is $\mechanical I_{\mathrm{CM}}$. The displacement between the axes is constant.

$$
\mechanical I_{z'}=\mechanical I_{\mathrm{CM}}+2\mechanical{\vec d}\cdot\int\mechanical{\vec r}\,d\mechanical m
+\mechanical d^2\int d\mechanical m. \tag{4.26}
$$

The mass-weighted transverse position is zero because the axis passes through the center of mass, so $\int\mechanical{\vec r}\,d\mechanical m=\vec 0$. The last integral is the total mass $\mechanical M$. Thus

$$
\mechanical I_{z'}=\mechanical I_{\mathrm{CM}}+\mechanical M\mechanical d^2. \tag{4.27}
$$

In Example 4 where we found the moment of inertia of the uniform rod about two different axes, we could use the result of part (a) and the parallel axis theorem to get the answer to part (b) without having to do any integration. We thought about making this an exercise at the end of the chapter, but it would be too easy!

## 4.2.2 Theorem 2: Perpendicular Axis Theorem

There are two versions of the perpendicular axis theorem. One involves planar objects and is the one most frequently discussed in textbooks. The other version is the generalization to three-dimensional (3D) objects. We will start with the simpler case of planar objects.

### The Perpendicular Axis Theorem for Planar Objects

Let the body lie in the $xy$ plane. The axes $x$, $y$, and $z$ are perpendicular to each other and share an origin, with $z$ normal to the body. The moments of inertia satisfy

$$
\mechanical I_z=\mechanical I_x+\mechanical I_y. \tag{4.28}
$$

```graph3d
bounds: [-1.6, 1.02, 1.6, -1.02]
bounds3d: [[-1.65,1.88],[-1.1,1.57],[-0.58,1.37]]
height: 340
width: 640
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
  az: {slider: {start: 2.31, visible: false}, pointer: {enabled: true}}
  el: {slider: {start: 0.68, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"curve3d","def":[[-1.6,1.57,1.57,-1.6,-1.6],[-0.92,-0.92,1.07,1.07,-0.92],[0,0,0,0,0]],"att":{"strokeColor":"#6b8296","fillColor":"#b8cfdf","fillOpacity":0.36,"strokeWidth":1.4,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[1.65,0,0]],"att":{"strokeColor":"#344b61","strokeWidth":1.65,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.73,0,0],"+x"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[0,1.31,0]],"att":{"strokeColor":"#344b61","strokeWidth":1.65,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0,1.39,0.02],"+y"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[0,0,1.2]],"att":{"strokeColor":"#344b61","strokeWidth":1.65,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.09,0,1.24],"+z"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[1.13,0.63,0]],"att":{"strokeColor":"#186b99","strokeWidth":2.7,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1.13,0,0],[1.13,0.63,0]],"att":{"strokeColor":"#186b99","strokeWidth":1.3,"lastArrow":false,"dash":2,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0.63,0],[1.13,0.63,0]],"att":{"strokeColor":"#186b99","strokeWidth":1.3,"lastArrow":false,"dash":2,"fixed":true,"highlight":false}},
  {"type":"point3d","def":[0,0,0],"att":{"strokeColor":"#344b61","fillColor":"#344b61","size":3,"withLabel":false,"fixed":true,"highlight":false}},
  {"type":"point3d","def":[1.13,0.63,0],"att":{"strokeColor":"#994521","fillColor":"#994521","size":4,"withLabel":false,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.16,0.66,0.11],"dm"],"att":{"strokeColor":"#994521","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.51,0.31,0.11],"𝑟"],"att":{"strokeColor":"#186b99","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.52,0.63,0.18],"𝑥"],"att":{"strokeColor":"#186b99","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.13,0.25,-0.07],"𝑦"],"att":{"strokeColor":"#186b99","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}}
]
```

**Fig. 4.8** The $x$ and $y$ axes lie in the rectangular lamina, and $z$ is perpendicular to it. All three axes intersect at the same point. The mass element $d\mechanical m$ has coordinates $(\mechanical x,\mechanical y)$ and radial distance $\mechanical r$ from the $z$ axis. Drag to rotate the plot.

**Proof.** A mass element $d\mechanical m$ at coordinates $(\mechanical x,\mechanical y)$ is a distance $|\mechanical y|$ from the $x$ axis, $|\mechanical x|$ from the $y$ axis, and $\mechanical r=\sqrt{\mechanical x^2+\mechanical y^2}$ from the $z$ axis. Summing over the whole lamina gives

$$
\begin{aligned}
\mechanical I_z
&=\int\mechanical r^2\,d\mechanical m=\int(\mechanical x^2+\mechanical y^2)\,d\mechanical m \\
&=\underbrace{\int\mechanical x^2\,d\mechanical m}_{\mechanical I_y}
+\underbrace{\int\mechanical y^2\,d\mechanical m}_{\mechanical I_x}
=\mechanical I_x+\mechanical I_y.
\end{aligned} \tag{4.29}
$$

For the uniform disk of Example 3, $\mechanical I_z=\tfrac12\mechanical M\mechanical R^2$ about the central axis normal to the disk. Symmetry gives $\mechanical I_x=\mechanical I_y$ about the diameters in the plane. Therefore $\mechanical I_x=\mechanical I_y=\tfrac14\mechanical M\mechanical R^2$.

```graph3d
bounds: [-1.6, 1.02, 1.6, -1.02]
bounds3d: [[-1.53,1.76],[-1.52,1.7],[-0.9,1.63]]
height: 320
width: 595
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
  az: {slider: {start: 1.98, visible: false}, pointer: {enabled: true}}
  el: {slider: {start: 0.58, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"curve3d","def":[[1.23,1.225319,1.211314,1.188089,1.155822,1.114759,1.065211,1.007557,0.942235,0.869741,0.790629,0.705499,0.615,0.51982,0.420685,0.318347,0.213587,0.107202,0.0,-0.107202,-0.213587,-0.318347,-0.420685,-0.51982,-0.615,-0.705499,-0.790629,-0.869741,-0.942235,-1.007557,-1.065211,-1.114759,-1.155822,-1.188089,-1.211314,-1.225319,-1.23,-1.225319,-1.211314,-1.188089,-1.155822,-1.114759,-1.065211,-1.007557,-0.942235,-0.869741,-0.790629,-0.705499,-0.615,-0.51982,-0.420685,-0.318347,-0.213587,-0.107202,-0.0,0.107202,0.213587,0.318347,0.420685,0.51982,0.615,0.705499,0.790629,0.869741,0.942235,1.007557,1.065211,1.114759,1.155822,1.188089,1.211314,1.225319,1.23],[0.0,0.107202,0.213587,0.318347,0.420685,0.51982,0.615,0.705499,0.790629,0.869741,0.942235,1.007557,1.065211,1.114759,1.155822,1.188089,1.211314,1.225319,1.23,1.225319,1.211314,1.188089,1.155822,1.114759,1.065211,1.007557,0.942235,0.869741,0.790629,0.705499,0.615,0.51982,0.420685,0.318347,0.213587,0.107202,0.0,-0.107202,-0.213587,-0.318347,-0.420685,-0.51982,-0.615,-0.705499,-0.790629,-0.869741,-0.942235,-1.007557,-1.065211,-1.114759,-1.155822,-1.188089,-1.211314,-1.225319,-1.23,-1.225319,-1.211314,-1.188089,-1.155822,-1.114759,-1.065211,-1.007557,-0.942235,-0.869741,-0.790629,-0.705499,-0.615,-0.51982,-0.420685,-0.318347,-0.213587,-0.107202,-0.0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#6b8296","fillColor":"#b8cfdf","fillOpacity":0.36,"strokeWidth":1.4,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[1.55,0,0]],"att":{"strokeColor":"#344b61","strokeWidth":1.65,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.63,0,0],"+x"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[0,1.49,0]],"att":{"strokeColor":"#344b61","strokeWidth":1.65,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0,1.57,0.02],"+y"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,-0.82],[0,0,1.48]],"att":{"strokeColor":"#344b61","strokeWidth":1.65,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.09,0,1.52],"+z"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[-0.98,0.74,0]],"att":{"strokeColor":"#186b99","strokeWidth":1.7,"lastArrow":false,"dash":2,"fixed":true,"highlight":false}},
  {"type":"point3d","def":[0,0,0],"att":{"strokeColor":"#344b61","fillColor":"#344b61","size":3,"withLabel":false,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.64,0.41,0.095],"𝑅"],"att":{"strokeColor":"#186b99","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.36,1.11,0.12],"𝑀"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}}
]
```

**Fig. 4.9** The uniform disk has radius $\mechanical R$ and mass $\mechanical M$. Symmetry gives $\mechanical I_x=\mechanical I_y$, so $\mechanical I_z=2\mechanical I_x=2\mechanical I_y$. Drag to rotate the plot.

### The Perpendicular Axis Theorem for 3D Objects

For three perpendicular axes through the same origin, the sum of the moments of inertia about the axes is

$$
\mechanical I_x+\mechanical I_y+\mechanical I_z=2\int\mechanical s^2\,d\mechanical m, \tag{4.30}
$$

where $\mechanical s=\sqrt{\mechanical x^2+\mechanical y^2+\mechanical z^2}$ is the distance from the origin to the mass element $d\mechanical m$.

```graph3d
bounds: [-1.6, 1.02, 1.6, -1.02]
bounds3d: [[-1.48,1.6],[-1.45,1.59],[-0.81,2.3]]
height: 427
width: 575
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
  az: {slider: {start: 2.02, visible: false}, pointer: {enabled: true}}
  el: {slider: {start: 0.43, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"parametricsurface3d","def":["f(u,v):0.23*sin(u)-0.06+(1.05-0.26*sin(u))*cos(u)*cos(v)*(1+0.09*cos(3*v+u))","f(u,v):0.09*cos(u)*sin(u)+(0.93-0.14*sin(u))*cos(u)*sin(v)*(1+0.07*cos(3*v+u))","f(u,v):0.68+1.38*sin(u)",[-1.5707963,1.5707963],[0,6.2831853]],"att":{"strokeColor":"#8ba4b5","strokeWidth":0.85,"strokeOpacity":0.34,"stepsU":24,"stepsV":25,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[1.37,0,0]],"att":{"strokeColor":"#344b61","strokeWidth":1.65,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.45,0,0],"+x"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[0,1.36,0]],"att":{"strokeColor":"#344b61","strokeWidth":1.65,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0,1.44,0.02],"+y"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[0,0,1.46]],"att":{"strokeColor":"#344b61","strokeWidth":1.65,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.09,0,1.5],"+z"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[0.53,0.43,1.23]],"att":{"strokeColor":"#186b99","strokeWidth":2.7,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"point3d","def":[0,0,0],"att":{"strokeColor":"#344b61","fillColor":"#344b61","size":3,"withLabel":false,"fixed":true,"highlight":false}},
  {"type":"point3d","def":[0.53,0.43,1.23],"att":{"strokeColor":"#994521","fillColor":"#994521","size":4,"withLabel":false,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.53,0,0],[0.53,0.43,0]],"att":{"strokeColor":"#186b99","strokeWidth":1.6,"lastArrow":false,"dash":2,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0.43,0],[0.53,0.43,0]],"att":{"strokeColor":"#186b99","strokeWidth":1.6,"lastArrow":false,"dash":2,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.53,0.43,0],[0.53,0.43,1.23]],"att":{"strokeColor":"#186b99","strokeWidth":1.6,"lastArrow":false,"dash":2,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.07,-0.11,-0.1],"𝑂"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.61,0.43,1.3],"dm"],"att":{"strokeColor":"#994521","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.23,0.16,0.68],"𝑠"],"att":{"strokeColor":"#186b99","fontSize":16,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.28,0.42,-0.04],"𝑥"],"att":{"strokeColor":"#186b99","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.55,0.21,-0.075],"𝑦"],"att":{"strokeColor":"#186b99","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.59,0.43,0.52],"𝑧"],"att":{"strokeColor":"#186b99","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}}
]
```

**Fig. 4.10** A mass element $d\mechanical m$ in a three-dimensional body is a distance $\mechanical s$ from the origin, with $\mechanical s^2=\mechanical x^2+\mechanical y^2+\mechanical z^2$. The dashed lines show its coordinate projections. Drag to rotate the plot.

**Proof.** The squared perpendicular distances to the $x$, $y$, and $z$ axes are $\mechanical y^2+\mechanical z^2$, $\mechanical x^2+\mechanical z^2$, and $\mechanical x^2+\mechanical y^2$, respectively. Substituting each into Equation (4.4) and adding gives

$$
\begin{aligned}
\mechanical I_x+\mechanical I_y+\mechanical I_z
&=\int(\mechanical y^2+\mechanical z^2)\,d\mechanical m
+\int(\mechanical x^2+\mechanical z^2)\,d\mechanical m \\
&\quad+\int(\mechanical x^2+\mechanical y^2)\,d\mechanical m.
\end{aligned} \tag{4.31}
$$

Combining the integrals gives

$$
\mechanical I_x+\mechanical I_y+\mechanical I_z
=2\int\underbrace{(\mechanical x^2+\mechanical y^2+\mechanical z^2)}_{\mechanical s^2}\,d\mechanical m
=2\int\mechanical s^2\,d\mechanical m. \tag{4.32}
$$

For a body lying in the $xy$ plane, $\mechanical z=0$ for every mass element. Equation (4.31) then becomes

$$
\mechanical I_x+\mechanical I_y+\mechanical I_z
=\int\mechanical y^2\,d\mechanical m+\int\mechanical x^2\,d\mechanical m
+\int(\mechanical x^2+\mechanical y^2)\,d\mechanical m. \tag{4.33}
$$

$$
\begin{aligned}
\mechanical I_x+\mechanical I_y+\mechanical I_z
&=2\left(\underbrace{\int\mechanical x^2\,d\mechanical m}_{\mechanical I_y}
+\underbrace{\int\mechanical y^2\,d\mechanical m}_{\mechanical I_x}\right) \\
&=2\mechanical I_x+2\mechanical I_y \\
\Rightarrow\quad\mechanical I_z&=\mechanical I_x+\mechanical I_y.
\end{aligned} \tag{4.34}
$$

For a thin spherical shell of radius $\mechanical R$ and mass $\mechanical M$, symmetry about its center gives $\mechanical I_x=\mechanical I_y=\mechanical I_z$. Equation (4.30) gives

$$
3\mechanical I_x=3\mechanical I_y=3\mechanical I_z=2\int\mechanical s^2\,d\mechanical m. \tag{4.35}
$$

Each mass element is a distance $\mechanical s=\mechanical R$ from the origin, so

$$
\begin{aligned}
3\mechanical I_x=3\mechanical I_y=3\mechanical I_z
&=2\int\mechanical R^2\,d\mechanical m
=2\mechanical R^2\int d\mechanical m=2\mechanical M\mechanical R^2 \\
\Rightarrow\quad\mechanical I_x=\mechanical I_y=\mechanical I_z&=\frac{2}{3}\mechanical M\mechanical R^2.
\end{aligned} \tag{4.36}
$$

The parallel-axis relation and the perpendicular-axis identities are especially convenient when the body has a symmetry that relates the moments about different axes.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{d}$ | $\unit{m}$ | Distance | Separation between the indicated points or axes. |
| $\mechanical{M}$ | $\unit{kg}$ | Mass | Mass of the body or system. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Mass of the indicated particle or body. |
| $\mechanical{I}$ | $\unit{kg\,m^2}$ | Moment of inertia | Rotational inertia about the specified axis. |
| $\mechanical{s}$ | $\unit{m}$ | Distance from the origin | Straight-line distance to the mass element. |
| $\mechanical{x}$ | $\unit{m}$ | Position coordinate | Position along the indicated axis. |
| $\mechanical{y}$ | $\unit{m}$ | Position coordinate | Position along the indicated axis. |
| $\mechanical{z}$ | $\unit{m}$ | Position coordinate | Position along the indicated axis. |
| $\mechanical{R}$ | $\unit{m}$ | Radius | Radius of the object or path. |
| $\mechanical{r}$ | $\unit{m}$ | Radius or position | Distance or position relative to the reference point or axis. |
