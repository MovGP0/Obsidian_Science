---
title: "6.4 Rotational Kinetic Energy of Systems of Discrete Masses and Continuous Rigid Bodies"
---

> [!TLDR]
> Sum or integrate the kinetic energy of the parts to get the rotational kinetic energy of the whole body.

Section 6.3 obtained $\energy{KE}_{\mathrm{rot}}=\tfrac12\mechanical I\mechanical\omega^2$ from the work done by torque. The same expression follows by adding the kinetic energies of the parts of a rigid body.

Divide the irregular body in Fig. 6.2 into $n$ small masses $\mechanical m_1,\ldots,\mechanical m_n$. Use $\mechanical{\vec r}_i$ for the perpendicular displacement from the fixed $z$ axis to each mass. Rigidity gives all mass elements the same angular velocity, $\mechanical{\vec\omega}_1=\cdots=\mechanical{\vec\omega}_n=\mechanical{\vec\omega}$. Their tangential velocities follow from $\mechanical{\vec v}_i=\mechanical{\vec\omega}\times\mechanical{\vec r}_i$, so $\mechanical v_i=\mechanical\omega\mechanical r_i$.

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

**Fig. 6.2** Two elements of a rigid body rotate about the same fixed $z$ axis. They have the same angular velocity and have tangential speeds proportional to their respective distances from the axis. The body’s rotational kinetic energy is $\energy{KE}_{\mathrm{rot}}=\tfrac12\mechanical I\mechanical\omega^2$. Drag to rotate the plot.

Add the individual kinetic energies.

$$
\begin{aligned}
\energy{KE}_{\mathrm{tot}}&=\energy{KE}_1+\energy{KE}_2+\cdots+\energy{KE}_n\\
&=\tfrac12\mechanical m_1\mechanical v_1^2+\tfrac12\mechanical m_2\mechanical v_2^2+\cdots+\tfrac12\mechanical m_n\mechanical v_n^2 .
\end{aligned}\tag{6.18}
$$

Substitute $\mechanical v_i=\mechanical\omega\mechanical r_i$ and factor out the common angular speed.

$$
\begin{aligned}
\energy{KE}_{\mathrm{rot}}
&=\tfrac12\mechanical m_1\mechanical\omega^2\mechanical r_1^2+\cdots+\tfrac12\mechanical m_n\mechanical\omega^2\mechanical r_n^2\\
&=\tfrac12\mechanical\omega^2(\mechanical m_1\mechanical r_1^2+\cdots+\mechanical m_n\mechanical r_n^2)\\
&=\tfrac12\mechanical\omega^2\sum_{i=1}^n\mechanical m_i\mechanical r_i^2.
\end{aligned}\tag{6.19}
$$

The sum is the moment of inertia. For a continuous body, the sum becomes an integral over infinitesimal masses $d\mechanical m$.

$$
\energy{KE}_{\mathrm{rot}}=\tfrac12\mechanical\omega^2\int\mechanical r^2\,d\mechanical m
=\tfrac12\mechanical I\mechanical\omega^2 .
\tag{6.20}
$$

For a point mass at perpendicular distance $\mechanical r$, insert $\mechanical I=\mechanical m\mechanical r^2$ to recover $\tfrac12\mechanical m\mechanical v^2$. The roles of mass and linear speed in translation correspond to those of moment of inertia and angular speed here.

Since $\mechanical p=\mechanical m\mechanical v$, translational kinetic energy can be written $\energy{KE}=\mechanical p^2/(2\mechanical m)$. The rotational counterpart uses the component of angular momentum about the fixed axis, $\mechanical L_z=\mechanical I\mechanical\omega_z$.

$$
\energy{KE}_{\mathrm{rot}}=\tfrac12\mechanical I\mechanical\omega_z^2
=\tfrac12\mechanical I\left(\frac{\mechanical L_z}{\mechanical I}\right)^2
=\frac{\mechanical L_z^2}{2\mechanical I}.
\tag{6.21}
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{KE}$ | $\unit J$ | Kinetic energy | Energy due to motion. |
| $\mechanical m$ | $\unit{kg}$ | Mass | Mass of an element or the whole body. |
| $\mechanical{\vec r}$ | $\unit m$ | Radial displacement | Perpendicular displacement from the rotation axis. |
| $\mechanical{\vec v}$ | $\unit{m\,s^{-1}}$ | Velocity | Tangential velocity of a mass element. |
| $\mechanical{\vec\omega}$ | $\unit{rad\,s^{-1}}$ | Angular velocity | Common rotation rate and direction. |
| $\mechanical I$ | $\unit{kg\,m^2}$ | Moment of inertia | Rotational inertia about the fixed axis. |
| $\mechanical p$ | $\unit{kg\,m\,s^{-1}}$ | Linear momentum magnitude | Mass times speed. |
| $\mechanical L_z$ | $\unit{kg\,m^2\,s^{-1}}$ | Axial angular momentum | Angular momentum component about the rotation axis. |
