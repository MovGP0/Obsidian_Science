---
title: "4.1 Moment of Inertia of Systems of Discrete Masses and Continuous Rigid Bodies"
---

> [!TLDR]
> Moment of inertia weights each mass by its squared perpendicular distance from the axis.

Chapter 3 introduced the moment of inertia $\mechanical{I}$ with Newton’s second law for rotation, $\sum\mechanical{\vec\tau}=\mechanical{I}\mechanical{\vec\alpha}$. It is the rotational counterpart of mass $\mechanical{m}$ in $\sum\mechanical{\vec F}=\mechanical{m}\mechanical{\vec a}$. For a given net torque, $\mechanical{I}$ determines the angular acceleration. For a given net force, $\mechanical{m}$ determines the linear acceleration. A point mass at distance $\mechanical{r}$ from the axis has $\mechanical{I}=\mechanical{m}\mechanical{r}^2$. For an extended body, the moment of inertia depends on the total mass and its distribution about the axis. We can extend the point-mass definition to calculate the moment of inertia of a rigid body.

Consider the irregular rigid body shown in Fig. 4.1. Imagine that an applied force gives the body an angular acceleration about a fixed axis $z$. First, treat the body as a collection of $n$ small masses $\mechanical{m}_1,\mechanical{m}_2,\ldots,\mechanical{m}_n$ at perpendicular distances $\mechanical{r}_1,\mechanical{r}_2,\ldots,\mechanical{r}_n$ from the axis. The distances between the masses remain constant because the body is rigid. Each mass has a torque about the axis, such as $\mechanical{\vec\tau}_1=\mechanical{I}_1\mechanical{\vec\alpha}_1$. Sum these torques to find the net torque about $z$.

$$
\begin{aligned}
\sum\mechanical{\vec\tau}_z
&=\mechanical{\vec\tau}_1+\mechanical{\vec\tau}_2+\cdots+\mechanical{\vec\tau}_n\\
&=\mechanical{I}_1\mechanical{\vec\alpha}_1+\mechanical{I}_2\mechanical{\vec\alpha}_2+\cdots+\mechanical{I}_n\mechanical{\vec\alpha}_n\\
&=\mechanical{m}_1\mechanical{r}_1^2\mechanical{\vec\alpha}_1
+\mechanical{m}_2\mechanical{r}_2^2\mechanical{\vec\alpha}_2+\cdots
+\mechanical{m}_n\mechanical{r}_n^2\mechanical{\vec\alpha}_n.
\end{aligned}
\tag{4.1}
$$

```graph3d
bounds: [-1.4, 1.55, 1.4, -1.55]
bounds3d: [[-1.35,1.35],[-1.35,1.35],[-1.59,1.83]]
height: 460
width: 455
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
  az: {slider: {start: 3.04, visible: false}, pointer: {enabled: true}}
  el: {slider: {start: 0.39, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"parametricsurface3d","def":["f(u,v):0.23*sin(u)-0.06+(1.05-0.26*sin(u))*cos(u)*cos(v)*(1+0.09*cos(3*v+u))","f(u,v):0.09*cos(u)*sin(u)+(0.93-0.14*sin(u))*cos(u)*sin(v)*(1+0.07*cos(3*v+u))","f(u,v):1.38*sin(u)",[-1.5707963,1.5707963],[0,6.2831853]],"att":{"strokeColor":"#8ba4b5","strokeWidth":0.85,"strokeOpacity":0.4,"stepsU":24,"stepsV":25,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,-1.54],[0,0,1.74]],"att":{"strokeColor":"#344b61","strokeWidth":2.0,"dash":0,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.09,0,1.74],"+z"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"curve3d","def":[[0.43,0.427929,0.421738,0.411484,0.397268,0.379226,0.357532,0.332394,0.304056,0.272789,0.238895,0.202701,0.164554,0.124822,0.083889,0.042147,0.0,-0.042147,-0.083889,-0.124822,-0.164554,-0.202701,-0.238895,-0.272789,-0.304056,-0.332394,-0.357532,-0.379226,-0.397268,-0.411484,-0.421738,-0.427929,-0.43,-0.427929,-0.421738,-0.411484,-0.397268,-0.379226,-0.357532,-0.332394,-0.304056,-0.272789,-0.238895,-0.202701,-0.164554,-0.124822,-0.083889,-0.042147,-0.0,0.042147,0.083889,0.124822,0.164554,0.202701,0.238895,0.272789,0.304056,0.332394,0.357532,0.379226,0.397268,0.411484,0.421738,0.427929,0.43],[0.0,0.042147,0.083889,0.124822,0.164554,0.202701,0.238895,0.272789,0.304056,0.332394,0.357532,0.379226,0.397268,0.411484,0.421738,0.427929,0.43,0.427929,0.421738,0.411484,0.397268,0.379226,0.357532,0.332394,0.304056,0.272789,0.238895,0.202701,0.164554,0.124822,0.083889,0.042147,0.0,-0.042147,-0.083889,-0.124822,-0.164554,-0.202701,-0.238895,-0.272789,-0.304056,-0.332394,-0.357532,-0.379226,-0.397268,-0.411484,-0.421738,-0.427929,-0.43,-0.427929,-0.421738,-0.411484,-0.397268,-0.379226,-0.357532,-0.332394,-0.304056,-0.272789,-0.238895,-0.202701,-0.164554,-0.124822,-0.083889,-0.042147,-0.0],[0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57]],"att":{"strokeColor":"#186b99","strokeWidth":1.7,"dash":2,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0.57],[0.25012,-0.34977,0.57]],"att":{"strokeColor":"#186b99","strokeWidth":2.1,"dash":0,"lastArrow":false,"fixed":true,"highlight":false}},
  {"type":"point3d","def":[0.25012,-0.34977,0.57],"att":{"strokeColor":"#994521","fillColor":"#994521","size":4.6,"withLabel":false,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.32512,-0.34977,0.67],"m₁"],"att":{"strokeColor":"#994521","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.11255,-0.1574,0.43],"r₁"],"att":{"strokeColor":"#186b99","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"curve3d","def":[[0.73,0.726485,0.715973,0.698566,0.674432,0.643803,0.606973,0.564298,0.516188,0.463107,0.405566,0.34412,0.279359,0.211908,0.142416,0.071553,0.0,-0.071553,-0.142416,-0.211908,-0.279359,-0.34412,-0.405566,-0.463107,-0.516188,-0.564298,-0.606973,-0.643803,-0.674432,-0.698566,-0.715973,-0.726485,-0.73,-0.726485,-0.715973,-0.698566,-0.674432,-0.643803,-0.606973,-0.564298,-0.516188,-0.463107,-0.405566,-0.34412,-0.279359,-0.211908,-0.142416,-0.071553,-0.0,0.071553,0.142416,0.211908,0.279359,0.34412,0.405566,0.463107,0.516188,0.564298,0.606973,0.643803,0.674432,0.698566,0.715973,0.726485,0.73],[0.0,0.071553,0.142416,0.211908,0.279359,0.34412,0.405566,0.463107,0.516188,0.564298,0.606973,0.643803,0.674432,0.698566,0.715973,0.726485,0.73,0.726485,0.715973,0.698566,0.674432,0.643803,0.606973,0.564298,0.516188,0.463107,0.405566,0.34412,0.279359,0.211908,0.142416,0.071553,0.0,-0.071553,-0.142416,-0.211908,-0.279359,-0.34412,-0.405566,-0.463107,-0.516188,-0.564298,-0.606973,-0.643803,-0.674432,-0.698566,-0.715973,-0.726485,-0.73,-0.726485,-0.715973,-0.698566,-0.674432,-0.643803,-0.606973,-0.564298,-0.516188,-0.463107,-0.405566,-0.34412,-0.279359,-0.211908,-0.142416,-0.071553,-0.0],[-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64]],"att":{"strokeColor":"#186b99","strokeWidth":1.7,"dash":2,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,-0.64],[0.62234,-0.38156,-0.64]],"att":{"strokeColor":"#186b99","strokeWidth":2.1,"dash":0,"lastArrow":false,"fixed":true,"highlight":false}},
  {"type":"point3d","def":[0.62234,-0.38156,-0.64],"att":{"strokeColor":"#994521","fillColor":"#994521","size":4.6,"withLabel":false,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.69734,-0.38156,-0.54],"m₂"],"att":{"strokeColor":"#994521","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.28005,-0.1717,-0.78],"r₂"],"att":{"strokeColor":"#186b99","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"curve3d","def":[[0.02051,0.04571,0.07057,0.09488,0.11846,0.14114,0.16274,0.18309,0.20204,0.21945,0.23518,0.24911,0.26113,0.27115,0.2791,0.28492,0.28855,0.28998,0.28918,0.28618,0.28098,0.27364,0.2642,0.25274,0.23935],[-0.28927,-0.28637,-0.28128,-0.27404,-0.2647,-0.25334,-0.24003,-0.22489,-0.20803,-0.18958,-0.16968,-0.14848,-0.12614,-0.10284,-0.07875,-0.05406,-0.02895,-0.00362,0.02173,0.04692,0.07175,0.09603,0.11957,0.1422,0.16375],[1.49,1.49,1.49,1.49,1.49,1.49,1.49,1.49,1.49,1.49,1.49,1.49,1.49,1.49,1.49,1.49,1.49,1.49,1.49,1.49,1.49,1.49,1.49,1.49,1.49]],"att":{"strokeColor":"#994521","strokeWidth":1.7,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.2642,0.11957,1.49],[0.23935,0.16375,1.49]],"att":{"strokeColor":"#994521","strokeWidth":1.8,"dash":0,"lastArrow":true,"fixed":true,"highlight":false}}
]
```

**Fig. 4.1** A potato represents an irregular rigid body of mass $\mechanical M$ rotating about a fixed $z$ axis. The shown mass elements $\mechanical m_1$ and $\mechanical m_2$ move at perpendicular distances $\mechanical r_1$ and $\mechanical r_2$ from the axis. Drag to rotate the plot.

All the mass elements in a rigid body have the same angular acceleration about the fixed axis, $\mechanical{\vec\alpha}_1=\mechanical{\vec\alpha}_2=\cdots=\mechanical{\vec\alpha}_n=\mechanical{\vec\alpha}$. Equation (4.1) becomes

$$
\sum\mechanical{\vec\tau}_z=
\left(\mechanical m_1\mechanical r_1^2+\mechanical m_2\mechanical r_2^2+\cdots+\mechanical m_n\mechanical r_n^2\right)\mechanical{\vec\alpha}
=\left(\sum_{i=1}^{n}\mechanical m_i\mechanical r_i^2\right)\mechanical{\vec\alpha}. \tag{4.2}
$$

From this equation, we see that the moment of inertia of this arbitrarily shaped extended rigid body is

$$
\mechanical I=\sum_{i=1}^{n}\mechanical m_i\mechanical r_i^2. \tag{4.3}
$$

A sum gives the moment of inertia for discrete masses. For a continuous body, let the mass elements become infinitesimal so the sum becomes an integral over mass.

$$
\mechanical I=\int \mechanical r^2\,d\mechanical m. \tag{4.4}
$$

As for a point mass with $\mechanical I=\mechanical m\mechanical r^2$, moment of inertia about a specified axis is a scalar with units of $\unit{kg\,m^2}$. Its value depends on the total mass and on the perpendicular distances of the mass elements from the axis. The same object can have different moments of inertia about different axes, so always specify the axis. In Equation (4.4), $\mechanical r$ can vary with $d\mechanical m$. Use the body’s mass density to relate them, as in Example 3.

![[rotational-motion-fig-4-2.svg|**Fig. 4.2** Two point masses $\mechanical m_1$ and $\mechanical m_2$ are joined by a massless rod of length $\mechanical L$. Axis $p$ passes through the midpoint and axis $q$ passes through $\mechanical m_2$.|370]]

In the following examples, we will calculate the value of the moment of inertia for a few different distributions of mass. Of course, there are many other mass distributions for which we don't perform these calculations in this book. Moments of inertia of many common, symmetric mass distributions (e.g., spheres, boxes) about various axes of rotation can be found in tables online and in other textbooks (or you can compute them yourself using the tools we learn here).

**Example 1. Moment of inertia of two point masses.** A rigid, massless rod of length $\mechanical L=0.2\,\unit m$ joins point masses $\mechanical m_1=0.1\,\unit{kg}$ and $\mechanical m_2=0.2\,\unit{kg}$. Find the moment of inertia about the perpendicular axis through (a) the rod’s midpoint, axis $p$, and (b) the end where $\mechanical m_2$ is attached, axis $q$.

(a) Since we have a system of masses, we must account for the moment of inertia of each mass about the specified axis of rotation. As always, we use a subscript to indicate the axis of rotation about which we find I:

$$
\mechanical{I}_{p} = \mechanical{I}_{m_{1}} + \mechanical{I}_{m_{2}} + \mechanical{I}_{\mathrm{rod}} . \tag{4.5}
$$

This equation is an extension of Equation (4.3) to include continuous rigid bodies. However, in this case, $\mechanical I_{\mathrm{rod}}=0$ because the rod is massless. Therefore, we obtain:

$$
\mechanical{I}_{p} = \mechanical{I}_{m_{1}} + \mechanical{I}_{m_{2}} = \mechanical{m}_{1} \mechanical{r}_{1}^{2} + \mechanical{m}_{2} \mechanical{r}_{2}^{2} , \tag{4.6}
$$

Each point mass contributes $\mechanical I_i=\mechanical m_i\mechanical r_i^2$. The distances to axis $p$ are $\mechanical r_1=\mechanical r_2=\mechanical L/2$.

$$
\begin{aligned}
\mechanical I_p
&=\mechanical m_1\left(\frac{\mechanical L}{2}\right)^2+\mechanical m_2\left(\frac{\mechanical L}{2}\right)^2 \\
&=(0.1\,\unit{kg})\left(\frac{0.2\,\unit m}{2}\right)^2+(0.2\,\unit{kg})\left(\frac{0.2\,\unit m}{2}\right)^2 \\
&=3.0\times 10^{-3}\,\unit{kg\,m^2}.
\end{aligned} \tag{4.7}
$$

(b) We will again start with Equation (4.3) using the subscript q to indicate the axis of rotation:

$$
\mechanical{I}_{q} = \mechanical{I}_{m_{1}} + \mechanical{I}_{m_{2}} + \mechanical{I}_{\mathrm{rod}} . \tag{4.8}
$$

Both $\mechanical I_{m_2}$ and $\mechanical I_{\mathrm{rod}}$ vanish. The point mass $\mechanical m_2$ lies on axis $q$, and the rod is massless.

$$
\mechanical{I}_{q} = \mechanical{I}_{m_{1}} = \mechanical{m}_{1} \mechanical{r}_{1}^{2} . \tag{4.9}
$$

The distance from $\mechanical m_1$ to axis $q$ is $\mechanical r_1=\mechanical L$.

$$
\mechanical I_q=\mechanical m_1\mechanical L^2=(0.1\,\unit{kg})(0.2\,\unit m)^2=4.0\times10^{-3}\,\unit{kg\,m^2}. \tag{4.10}
$$

Therefore, it is more difficult to rotate this system about axis q than p. In other words, the same net torque would produce a smaller angular acceleration about axis q.

**Example 2. Moment of inertia of a uniform ring.** Find the moment of inertia of a uniform circular ring of radius $\mechanical R$ and mass $\mechanical M$ about the axis perpendicular to its plane through its center $O$. As shown in Fig. 4.3, divide the ring into infinitesimal mass elements $d\mechanical m$ and apply Equation (4.4).

![[rotational-motion-fig-4-3.svg|**Fig. 4.3** Each mass element $d\mechanical m$ of a thin uniform ring is a distance $\mechanical R$ from the axis through its center $O$.|370]]

Every mass element, such as $d\mechanical m_1$ or $d\mechanical m_2$, is at the same perpendicular distance $\mechanical r=\mechanical R$ from the axis. The radius is constant and can be taken outside the integral.

$$
\mechanical{I}_{O} = \int_{\text {ring}} \mechanical{r}^{2} d \mechanical{m} = \int_{\text {ring}} \mechanical{R}^{2} d \mechanical{m} = \mechanical{R}^{2} \int_{\text {ring}} d \mechanical{m} = \mechanical{M} \mechanical{R}^{2} , \tag{4.11}
$$

The integral of $d\mechanical m$ over the ring is its total mass $\mechanical M$. Next consider a uniform disk of the same radius and mass.

**Example 3. Moment of inertia of a uniform disk.** Find the moment of inertia of a thin, uniform disk of radius $\mechanical R$ and mass $\mechanical M$ about the axis through $O$ normal to the disk.

Divide the disk into thin concentric annuli of radius $\mechanical r$, width $d\mechanical r$, area $d\mechanical A$, and mass $d\mechanical m$. All the mass in one infinitesimally narrow strip is effectively the same distance from the axis. Figure 4.4a shows two strips at different radii.

The radius varies from $0$ to $\mechanical R$. To change the integration variable from mass to radius, use the surface mass density $\mechanical\sigma$.

$$
\mechanical\sigma=\frac{d\mechanical m}{d\mechanical A}=\frac{d\mechanical m}{2\pi\mechanical r\,d\mechanical r}\quad\Rightarrow\quad d\mechanical m=2\pi\mechanical\sigma\mechanical r\,d\mechanical r. \tag{4.12}
$$

To see why $d\mechanical A=2\pi\mechanical r\,d\mechanical r$, cut one strip across its width and unroll it, as in Fig. 4.4b. The result has length $2\pi\mechanical r$ and width $d\mechanical r$.

![[rotational-motion-fig-4-4.svg|**Fig. 4.4** (a) Two annular strips at different radii on a uniform disk. Each has width $d\mechanical r$, area $d\mechanical A$, and mass $d\mechanical m$. (b) One strip of radius $\mechanical r$ unrolls to a rectangle of length $2\pi\mechanical r$ and width $d\mechanical r$ in the infinitesimal limit.|475]]

$$
\mechanical{I}_{O} = \int \mechanical{r}^{2} d \mechanical{m} = \int_{0}^{\mechanical{R}} \mechanical{r}^{2} \mechanical{\sigma} 2 \pi \mechanical{r} d \mechanical{r} = \int_{0}^{\mechanical{R}} \mechanical{r}^{3} \mechanical{\sigma} 2 \pi d \mechanical{r} . \tag{4.13}
$$

The disk is uniform, so $\mechanical\sigma$ is constant and the factor $2\pi\mechanical\sigma$ can come out of the integral.

$$
\mechanical{I}_{O} = 2 \pi \mechanical{\sigma} \int_{0}^{\mechanical{R}} \mechanical{r}^{3} d \mechanical{r} = 2 \pi \mechanical{\sigma} \frac {\mechanical{R}^{4}} {4} . \tag{4.14}
$$

The disk has total area $\mechanical A=\pi\mechanical R^2$, so $\mechanical\sigma=\mechanical M/(\pi\mechanical R^2)$. Substituting this density gives

$$
\mechanical{I}_{O} = 2 \pi \frac {\mechanical{M}} {\pi \mechanical{R}^{2}} \frac {\mechanical{R}^{4}} {4} = \frac {1} {2} \mechanical{M} \mechanical{R}^{2} . \tag{4.15}
$$

The ring and disk have the same mass and radius. The entire ring is a distance $\mechanical R$ from the axis, while the disk distributes mass across radii from $0$ to $\mechanical R$. Its smaller mass-weighted squared distance gives $\mechanical I_{\mathrm{disk}}<\mechanical I_{\mathrm{ring}}$.

**Example 4. Moment of inertia of a rod about two axes.** A uniform, rigid rod has length $\mechanical L$ and mass $\mechanical M$. Find the moment of inertia about a perpendicular axis through (a) the midpoint $O$ and (b) one end $A$, as in Fig. 4.5.

![[rotational-motion-fig-4-5.svg|**Fig. 4.5** A uniform rod rotates about either (a) the perpendicular axis through its midpoint $O$ or (b) the parallel axis through its end $A$.|403]]

Place the rod along the $x$ axis with the origin at the midpoint $O$. The coordinate $\mechanical x$ can have either sign. The perpendicular distance $\mechanical r$ from the axis to a mass element is nonnegative.

![[rotational-motion-fig-4-6.svg|**Fig. 4.6** (a) With the axis through $O$, the perpendicular distance is $\mechanical r=\lvert\mechanical x\rvert$. (b) With the axis through $A$, the distance is $\mechanical r=\mechanical L/2+\mechanical x$. In both panels the coordinate $\mechanical x$ runs from $-\mechanical L/2$ to $\mechanical L/2$.|403]]

(a) The rotation axis is the $y$ axis. For elements $d\mechanical m_1$ and $d\mechanical m_2$ in Fig. 4.6a, the distances are $\mechanical r_1=\mechanical x_1$ and $\mechanical r_2=|\mechanical x_2|$. In general, $\mechanical r=|\mechanical x|$, so the integrand uses $\mechanical r^2=\mechanical x^2$.

The rod spans $-\mechanical L/2\le\mechanical x\le\mechanical L/2$. Relate the mass of a segment of length $d\mechanical x$ to the linear mass density $\mechanical\lambda$.

$$
\mechanical{\lambda} = \frac {d \mechanical{m}} {d \mechanical{x}} \Rightarrow d \mechanical{m} = \mechanical{\lambda} d \mechanical{x} . \tag{4.16}
$$

Since we have effectively expressed dm in terms of x, we can now rewrite the moment of inertia integral in terms of the single variable x:

$$
\mechanical I_O=\int\mechanical r^2\,d\mechanical m=\int_{-\mechanical L/2}^{\mechanical L/2}\mechanical x^2\mechanical\lambda\,d\mechanical x. \tag{4.17}
$$

The rod is uniform, so $\mechanical\lambda$ is constant and can come out of the integral.

$$
\mechanical I_O=\mechanical\lambda\int_{-\mechanical L/2}^{\mechanical L/2}\mechanical x^2\,d\mechanical x=\frac{\mechanical\lambda}{3}\left(\frac{\mechanical L^3}{8}+\frac{\mechanical L^3}{8}\right)=\frac{\mechanical\lambda\mechanical L^3}{12}. \tag{4.18}
$$

Substitute $\mechanical\lambda=\mechanical M/\mechanical L$ into Equation (4.18).

$$
\mechanical I_O=\frac{1}{12}\frac{\mechanical M}{\mechanical L}\mechanical L^3=\frac{1}{12}\mechanical M\mechanical L^2. \tag{4.19}
$$

(b) The rotation axis now passes through $A$, while the origin of the $x$ coordinate remains at the midpoint. One option would be to reset the origin to $A$ and integrate from $0$ to $\mechanical L$. To keep the same coordinate as in Fig. 4.6b, use $\mechanical r=\mechanical L/2+\mechanical x$, with $-\mechanical L/2\le\mechanical x\le\mechanical L/2$. The relation $d\mechanical m=\mechanical\lambda\,d\mechanical x$ still holds.

$$
\mechanical I_A=\int\mechanical r^2\,d\mechanical m=\int_{-\mechanical L/2}^{\mechanical L/2}\left(\frac{\mechanical L}{2}+\mechanical x\right)^2\mechanical\lambda\,d\mechanical x. \tag{4.20}
$$

Take the constant $\mechanical\lambda$ outside the integral and expand the square.

$$
\begin{aligned}
\mechanical I_A
&=\mechanical\lambda\int_{-\mechanical L/2}^{\mechanical L/2}\left(\frac{\mechanical L}{2}+\mechanical x\right)^2\,d\mechanical x \\
&=\mechanical\lambda\int_{-\mechanical L/2}^{\mechanical L/2}\left(\frac{\mechanical L^2}{4}+\mechanical L\mechanical x+\mechanical x^2\right)\,d\mechanical x \\
&=\mechanical\lambda\left[\frac{\mechanical L^2}{4}\mechanical x+\frac{\mechanical L\mechanical x^2}{2}+\frac{\mechanical x^3}{3}\right]_{-\mechanical L/2}^{\mechanical L/2}
=\frac{\mechanical\lambda\mechanical L^3}{3}.
\end{aligned} \tag{4.21}
$$

Substitute $\mechanical\lambda=\mechanical M/\mechanical L$.

$$
\mechanical{I}_{A} = \frac {1} {3} \mechanical{M} \mechanical{L}^{2} . \tag{4.22}
$$

For the midpoint axis, every mass element lies at a distance of at most $\mechanical L/2$. For the end axis, half the rod lies between $\mechanical L/2$ and $\mechanical L$ from the axis. The greater mass-weighted squared distance gives $\mechanical I_A>\mechanical I_O$, so rotation about the end requires a greater net torque for the same angular acceleration.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\vec {\alpha}}$ | $\unit{rad\,s^{-2}}$ | Angular acceleration | Rate of change of angular velocity. |
| $\mechanical{A}$ | $\unit{m^2}$ | Area | Area of the indicated surface or cross-section. |
| $\mechanical{L}$ | $\unit{m}$ | Length | Length of the indicated body or part. |
| $\mechanical{\lambda}$ | $\unit{kg\,m^{-1}}$ | Linear mass density | Mass per unit length. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Mass of the indicated particle or body. |
| $\mechanical{M}$ | $\unit{kg}$ | Mass | Mass of the body or system. |
| $\mechanical{I}$ | $\unit{kg\,m^2}$ | Moment of inertia | Rotational inertia about the specified axis. |
| $\mechanical{x}$ | $\unit{m}$ | Position coordinate | Position along the indicated axis. |
| $\mechanical{R}$ | $\unit{m}$ | Radius | Radius of the object or path. |
| $\mechanical{r}$ | $\unit{m}$ | Radius or position | Distance or position relative to the reference point or axis. |
| $\mechanical{\sigma}$ | $\unit{kg\,m^{-2}}$ | Surface mass density | Mass per unit area. |
| $\mechanical{\vec {\tau}}$ | $\unit{N\,m}$ | Torque | Moment of force about the indicated point or axis. |
