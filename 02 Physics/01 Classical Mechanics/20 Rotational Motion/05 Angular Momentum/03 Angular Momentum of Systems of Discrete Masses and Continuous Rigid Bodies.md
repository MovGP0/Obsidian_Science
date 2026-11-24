---
title: "5.3 Angular Momentum of Systems of Discrete Masses and Continuous Rigid Bodies"
---

> [!TLDR]
> Sum or integrate the angular momentum of the parts to find the angular momentum of the whole system.

Extend the point-mass definition of angular momentum to systems of discrete masses and rigid bodies. As in Chapter 4, start with the irregular body in Fig. 5.3 and divide it into $n$ small masses $\mechanical m_1,\ldots,\mechanical m_n$. The body rotates about a fixed axis $z$, and every element has the same angular velocity.

```graph3d
bounds: [-1.6, 1.02, 1.6, -1.02]
bounds3d: [[-1.44,1.44],[-1.38,1.37],[-1.67,1.93]]
height: 485
width: 465
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
  az: {slider: {start: 3.02, visible: false}, pointer: {enabled: true}}
  el: {slider: {start: 0.39, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"parametricsurface3d","def":["f(u,v):0.23*sin(u)-0.06+(1.05-0.26*sin(u))*cos(u)*cos(v)*(1+0.09*cos(3*v+u))","f(u,v):0.09*cos(u)*sin(u)+(0.93-0.14*sin(u))*cos(u)*sin(v)*(1+0.07*cos(3*v+u))","f(u,v):1.38*sin(u)",[-1.5707963,1.5707963],[0,6.2831853]],"att":{"strokeColor":"#8ba4b5","strokeWidth":0.85,"strokeOpacity":0.4,"stepsU":24,"stepsV":25,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,-1.5],[0,0,1.76]],"att":{"strokeColor":"#6b8296","strokeWidth":1.55,"lastArrow":true,"dash":2,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.07,0,1.795],"+z"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"curve3d","def":[[0.43,0.427929,0.421738,0.411484,0.397268,0.379226,0.357532,0.332394,0.304056,0.272789,0.238895,0.202701,0.164554,0.124822,0.083889,0.042147,0.0,-0.042147,-0.083889,-0.124822,-0.164554,-0.202701,-0.238895,-0.272789,-0.304056,-0.332394,-0.357532,-0.379226,-0.397268,-0.411484,-0.421738,-0.427929,-0.43,-0.427929,-0.421738,-0.411484,-0.397268,-0.379226,-0.357532,-0.332394,-0.304056,-0.272789,-0.238895,-0.202701,-0.164554,-0.124822,-0.083889,-0.042147,-0.0,0.042147,0.083889,0.124822,0.164554,0.202701,0.238895,0.272789,0.304056,0.332394,0.357532,0.379226,0.397268,0.411484,0.421738,0.427929,0.43],[0.0,0.042147,0.083889,0.124822,0.164554,0.202701,0.238895,0.272789,0.304056,0.332394,0.357532,0.379226,0.397268,0.411484,0.421738,0.427929,0.43,0.427929,0.421738,0.411484,0.397268,0.379226,0.357532,0.332394,0.304056,0.272789,0.238895,0.202701,0.164554,0.124822,0.083889,0.042147,0.0,-0.042147,-0.083889,-0.124822,-0.164554,-0.202701,-0.238895,-0.272789,-0.304056,-0.332394,-0.357532,-0.379226,-0.397268,-0.411484,-0.421738,-0.427929,-0.43,-0.427929,-0.421738,-0.411484,-0.397268,-0.379226,-0.357532,-0.332394,-0.304056,-0.272789,-0.238895,-0.202701,-0.164554,-0.124822,-0.083889,-0.042147,-0.0],[0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57,0.57]],"att":{"strokeColor":"#6b8296","strokeWidth":1.5,"dash":2,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0.57],[-0.238951,0.357495,0.57]],"att":{"strokeColor":"#186b99","strokeWidth":2.1,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-0.238951,0.357495,0.57],[-0.478473,0.197398,0.57]],"att":{"strokeColor":"#2b7354","strokeWidth":2.4,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"point3d","def":[-0.238951,0.357495,0.57],"att":{"size":4.8,"strokeColor":"#994521","fillColor":"#994521","withLabel":false,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0.57],[0,0,0.99]],"att":{"strokeColor":"#994521","strokeWidth":2.5,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.08,0,0.97],"ω₁"],"att":{"strokeColor":"#994521","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.107528,0.110873,0.43],"r₁"],"att":{"strokeColor":"#186b99","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.318951,0.357495,0.71],"m₁"],"att":{"strokeColor":"#994521","fontSize":16,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.548473,0.197398,0.45],"v₁"],"att":{"strokeColor":"#2b7354","fontSize":16,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"curve3d","def":[[0.73,0.726485,0.715973,0.698566,0.674432,0.643803,0.606973,0.564298,0.516188,0.463107,0.405566,0.34412,0.279359,0.211908,0.142416,0.071553,0.0,-0.071553,-0.142416,-0.211908,-0.279359,-0.34412,-0.405566,-0.463107,-0.516188,-0.564298,-0.606973,-0.643803,-0.674432,-0.698566,-0.715973,-0.726485,-0.73,-0.726485,-0.715973,-0.698566,-0.674432,-0.643803,-0.606973,-0.564298,-0.516188,-0.463107,-0.405566,-0.34412,-0.279359,-0.211908,-0.142416,-0.071553,-0.0,0.071553,0.142416,0.211908,0.279359,0.34412,0.405566,0.463107,0.516188,0.564298,0.606973,0.643803,0.674432,0.698566,0.715973,0.726485,0.73],[0.0,0.071553,0.142416,0.211908,0.279359,0.34412,0.405566,0.463107,0.516188,0.564298,0.606973,0.643803,0.674432,0.698566,0.715973,0.726485,0.73,0.726485,0.715973,0.698566,0.674432,0.643803,0.606973,0.564298,0.516188,0.463107,0.405566,0.34412,0.279359,0.211908,0.142416,0.071553,0.0,-0.071553,-0.142416,-0.211908,-0.279359,-0.34412,-0.405566,-0.463107,-0.516188,-0.564298,-0.606973,-0.643803,-0.674432,-0.698566,-0.715973,-0.726485,-0.73,-0.726485,-0.715973,-0.698566,-0.674432,-0.643803,-0.606973,-0.564298,-0.516188,-0.463107,-0.405566,-0.34412,-0.279359,-0.211908,-0.142416,-0.071553,-0.0],[-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64,-0.64]],"att":{"strokeColor":"#6b8296","strokeWidth":1.5,"dash":2,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,-0.64],[0.602495,-0.412189,-0.64]],"att":{"strokeColor":"#186b99","strokeWidth":2.1,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.602495,-0.412189,-0.64],[0.878662,-0.008517,-0.64]],"att":{"strokeColor":"#2b7354","strokeWidth":2.4,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"point3d","def":[0.602495,-0.412189,-0.64],"att":{"size":4.8,"strokeColor":"#994521","fillColor":"#994521","withLabel":false,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,-0.64],[0,0,-0.22000000000000003]],"att":{"strokeColor":"#994521","strokeWidth":2.5,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.08,0,-0.24],"ω₂"],"att":{"strokeColor":"#994521","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.271123,-0.235485,-0.78],"r₂"],"att":{"strokeColor":"#186b99","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.522495,-0.412189,-0.5],"m₂"],"att":{"strokeColor":"#994521","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.808662,-0.008517,-0.76],"v₂"],"att":{"strokeColor":"#2b7354","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}}
]
```

**Fig. 5.3** Two mass elements in an irregular rigid body turn about the same fixed axis with the same angular velocity. Their tangential speeds depend on their perpendicular distances $\mechanical r_1$ and $\mechanical r_2$ from the axis. Drag to rotate the plot.

The vectors $\mechanical{\vec r}_i$ in the figure run from the axis to the mass elements, perpendicular to $z$. A position vector from a common origin on the axis can also have a $z$ component. That component contributes nothing to the *axial* projection of angular momentum. Write $\mechanical{\vec L}_{\parallel}$ for the part of $\mechanical{\vec L}$ parallel to $z$. Then

$$
\begin{aligned}
\mechanical{\vec L}_{\mathrm{tot},\parallel}
&=\mechanical{\vec L}_{1,\parallel}+\mechanical{\vec L}_{2,\parallel}+\cdots+\mechanical{\vec L}_{n,\parallel} \\
&=\mechanical{\vec r}_1\times\mechanical{\vec p}_1
+\mechanical{\vec r}_2\times\mechanical{\vec p}_2+\cdots+
\mechanical{\vec r}_n\times\mechanical{\vec p}_n.
\end{aligned} \tag{5.9}
$$

Use $\mechanical{\vec p}_i=\mechanical m_i\mechanical{\vec v}_i$ and $\mechanical{\vec v}_i=\mechanical{\vec\omega}_i\times\mechanical{\vec r}_i$.

$$
\begin{aligned}
\mechanical{\vec L}_{\mathrm{tot},\parallel}
&=\sum_i\mechanical{\vec r}_i\times(\mechanical m_i\mechanical{\vec v}_i) \\
&=\sum_i\mechanical m_i\mechanical{\vec r}_i\times(\mechanical{\vec\omega}_i\times\mechanical{\vec r}_i).
\end{aligned} \tag{5.10}
$$

Apply the vector triple-product identity $\vec A\times(\vec B\times\vec C)=\vec B(\vec A\cdot\vec C)-\vec C(\vec A\cdot\vec B)$.

$$
\mechanical{\vec r}_i\times(\mechanical{\vec\omega}_i\times\mechanical{\vec r}_i)
=\mechanical{\vec\omega}_i\underbrace{(\mechanical{\vec r}_i\cdot\mechanical{\vec r}_i)}_{\mechanical r_i^2}
-\mechanical{\vec r}_i\underbrace{(\mechanical{\vec r}_i\cdot\mechanical{\vec\omega}_i)}_0
=\mechanical r_i^2\mechanical{\vec\omega}_i. \tag{5.11}
$$

The second dot product is zero because the radial displacement is perpendicular to the rotation axis. The total axial angular momentum is

$$
\mechanical{\vec L}_{\mathrm{tot},\parallel}=\mechanical m_1\mechanical r_1^2\mechanical{\vec\omega}_1+\mechanical m_2\mechanical r_2^2\mechanical{\vec\omega}_2+\cdots+\mechanical m_n\mechanical r_n^2\mechanical{\vec\omega}_n. \tag{5.12}
$$

For a rigid body, $\mechanical{\vec\omega}_i=\mechanical{\vec\omega}$ for every mass element.

$$
\mechanical{\vec L}_{\mathrm{tot},\parallel}=\left(\sum_{i=1}^n\mechanical m_i\mechanical r_i^2\right)\mechanical{\vec\omega}. \tag{5.13}
$$

The sum is the moment of inertia about the axis. For a continuous body, replace the sum by an integral over mass.

$$
\mechanical{\vec L}_{\parallel}=\left(\int\mechanical r^2\,d\mechanical m\right)\mechanical{\vec\omega}=\mechanical I\mechanical{\vec\omega}. \tag{5.14}
$$

For one point mass, this gives $\mechanical{\vec L}_{\parallel}=\mechanical m\mechanical r^2\mechanical{\vec\omega}$. The axial component is in the same direction as $\mechanical{\vec\omega}$. For rotation about a principal axis, the entire angular momentum vector is parallel to this axis. Chapter 8 considers what happens for other axes.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical m$ | $\unit{kg}$ | Mass | Mass of the body or particle. |
| $\mechanical{\vec v}$ | $\unit{m\,s^{-1}}$ | Velocity | Rate of change of the position vector. |
| $\mechanical{\vec p}$ | $\unit{kg\,m\,s^{-1}}$ | Linear momentum | Product of mass and velocity. |
| $\mechanical{\vec r}$ | $\unit m$ | Position vector | Perpendicular displacement from the rotation axis to the mass element. |
| $\mechanical{\vec L}$ | $\unit{kg\,m^2\,s^{-1}}$ | Angular momentum | Rotational momentum about the specified point or axis. |
| $\mechanical{\vec\omega}$ | $\unit{rad\,s^{-1}}$ | Angular velocity | Rotation rate and axial direction. |
| $\mechanical I$ | $\unit{kg\,m^2}$ | Moment of inertia | Rotational inertia about the chosen axis. |
