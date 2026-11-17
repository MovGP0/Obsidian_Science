---
title: "5.6 Notes on Angular Momentum and Newton’s Second Law"
---

> [!TLDR]
> The choice of point and inertial frame matters when applying the relationship between torque and angular momentum.

Before we present some examples, let's open a parenthesis to discuss some subtleties associated with angular momentum and Newton's Second Law for rotational motion.

(i) For any quantity with a constant time derivative, the instantaneous rate of change equals the change over a finite interval divided by its duration. For constant net torque, this gives

$$
\Sigma \mechanical{\vec {\tau}} = \frac {\Delta \mechanical{\vec {L}}} {\Delta t} = \frac {\mechanical{\vec {L}}_{f} - \mechanical{\vec {L}}_{i}} {t_{f} - t_{i}} . \tag{5.20}
$$

(ii) Equation (5.19) uses a fixed axis and constant moment of inertia $\mechanical I=\int\mechanical r^2\,d\mechanical m$. If the distribution of mass about the axis changes, use the angular momentum law, Equation (5.2). For a constant net torque, Equation (5.20) also applies.

```graph3d
bounds: [-1.6, 1.02, 1.6, -1.02]
bounds3d: [[-1.4,1.46],[-1.25,1.32],[-0.55,1.44]]
height: 360
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
  az: {slider: {start: 2.37, visible: false}, pointer: {enabled: true}}
  el: {slider: {start: 0.71, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"curve3d","def":[[-1.21,1.24,1.24,-1.21,-1.21],[-1.13,-1.13,1.13,1.13,-1.13],[0,0,0,0,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.35,"dash":0,"fixed":true,"highlight":false,"fillColor":"#b8cfdf","fillOpacity":0.38}},
  {"type":"line3d","def":[[0,0,-0.45],[0,0,1.28]],"att":{"strokeColor":"#6b8296","strokeWidth":1.55,"lastArrow":true,"dash":2,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.07,0,1.315],"+z"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[0,0,0.92]],"att":{"strokeColor":"#994521","strokeWidth":3,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.16,0.02,0.92],"𝐿"],"att":{"strokeColor":"#994521","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"point3d","def":[0,0,0],"att":{"size":3,"strokeColor":"#344b61","fillColor":"#344b61","withLabel":false,"fixed":true,"highlight":false}},
  {"type":"point3d","def":[0.84,-0.52,0],"att":{"size":4,"strokeColor":"#344b61","fillColor":"#344b61","withLabel":false,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[0.84,-0.52,0]],"att":{"strokeColor":"#186b99","strokeWidth":2.7,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.47,-0.36,0.075],"𝑟"],"att":{"strokeColor":"#186b99","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.84,-0.99,0],[0.84,1.07,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.4,"lastArrow":false,"dash":2,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.84,-0.52,0],[0.84,0.23,0]],"att":{"strokeColor":"#2b7354","strokeWidth":2.7,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.91,0.17,0.1],"𝑣"],"att":{"strokeColor":"#2b7354","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[0.84,0,0]],"att":{"strokeColor":"#186b99","strokeWidth":1.7,"lastArrow":false,"dash":2,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.42,0.07,0.12],"r′"],"att":{"strokeColor":"#186b99","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.84,-0.52,0],[1.2,-0.742857,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.45,"lastArrow":false,"dash":2,"fixed":true,"highlight":false}},
  {"type":"curve3d","def":[[1.069572,1.083349,1.094382,1.102545,1.107747,1.109928,1.109066,1.105168,1.098279,1.088477,1.075872,1.060607,1.042853,1.022811,1.000708,0.976791,0.951332,0.924617,0.896947,0.868635,0.84],[-0.662116,-0.636967,-0.610499,-0.58301,-0.55481,-0.526218,-0.497556,-0.469146,-0.441311,-0.414363,-0.388606,-0.364332,-0.341813,-0.321304,-0.303037,-0.287216,-0.274022,-0.263602,-0.256074,-0.251523,-0.25],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#344b61","strokeWidth":1.35,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.11,-0.33,0.055],"φ"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"curve3d","def":[[0.73,0.73,0.84],[0,0.11,0.11],[0.007,0.007,0.007]],"att":{"strokeColor":"#344b61","strokeWidth":1.3,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.88,-0.59,-0.1],"𝑚"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}}
]
```

**Fig. 5.4** The line of motion is a perpendicular distance $\mechanical r'=\mechanical r\sin\mechanical\phi$ from the $z$ axis, so the angular momentum has magnitude $\mechanical m\mechanical v\mechanical r'$. Drag to rotate the plot.

(iii) In Fig. 5.4, $\mechanical{\vec L}=\mechanical{\vec r}\times\mechanical{\vec p}=\mechanical m\mechanical{\vec r}\times\mechanical{\vec v}$. The magnitude is $\mechanical L=\mechanical m\mechanical r\mechanical v\sin\mechanical\phi$. The perpendicular distance $\mechanical r'=\mechanical r\sin\mechanical\phi$ from the axis to the line of motion gives $\mechanical L=\mechanical m\mechanical v\mechanical r'$. This distance plays the same role as the moment arm in a torque calculation.

**Example 1. Change in angular momentum of a rotating disk.** A uniform horizontal disk rotates about the vertical axis through its center $O$. The disk’s angular speed is $\mechanical\omega_1=10\,\unit{rad\,s^{-1}}$ at time $t_1$, along $+z$. At $t_2$ it rotates the opposite way with angular speed $\mechanical\omega_2=30\,\unit{rad\,s^{-1}}$, as in Fig. 5.5. Its moment of inertia is $\mechanical I_z=0.5\,\unit{kg\,m^2}$. Find (a) the change in angular momentum and (b) the constant net torque that causes the change in $\Delta t=t_2-t_1=5.0\,\unit{s}$.

(a) From Equation (5.14), we know that the angular momentum vector has the same direction as the angular velocity vector, as shown in Figure 5.5. We see that both angular momentum vectors are along the same axis z. With $+z$ upward, the initial axial component $\mechanical L_{z,1}$ is positive and the final axial component $\mechanical L_{z,2}$ is negative.

To find the change in angular momentum $\Delta \mechanical{L}$, since both vectors are along the z axis, we can work algebraically:

```graph3d
bounds: [-1.6, 1.02, 1.6, -1.02]
bounds3d: [[-2.27,2.28],[-1.27,1.27],[-1.88,1.61]]
height: 360
width: 720
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
  az: {slider: {start: 3.13, visible: false}, pointer: {enabled: true}}
  el: {slider: {start: 0.49, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"curve3d","def":[[-0.4,-0.4039,-0.415564,-0.434878,-0.461658,-0.495644,-0.53651,-0.583862,-0.637244,-0.696141,-0.759988,-0.828169,-0.900026,-0.974869,-1.051977,-1.130606,-1.21,-1.289394,-1.368023,-1.445131,-1.519974,-1.591831,-1.660012,-1.723859,-1.782756,-1.836138,-1.88349,-1.924356,-1.958342,-1.985122,-2.004436,-2.0161,-2.02,-2.0161,-2.004436,-1.985122,-1.958342,-1.924356,-1.88349,-1.836138,-1.782756,-1.723859,-1.660012,-1.591831,-1.519974,-1.445131,-1.368023,-1.289394,-1.21,-1.130606,-1.051977,-0.974869,-0.900026,-0.828169,-0.759988,-0.696141,-0.637244,-0.583862,-0.53651,-0.495644,-0.461658,-0.434878,-0.415564,-0.4039,-0.4],[0.0,0.079394,0.158023,0.235131,0.309974,0.381831,0.450012,0.513859,0.572756,0.626138,0.67349,0.714356,0.748342,0.775122,0.794436,0.8061,0.81,0.8061,0.794436,0.775122,0.748342,0.714356,0.67349,0.626138,0.572756,0.513859,0.450012,0.381831,0.309974,0.235131,0.158023,0.079394,0.0,-0.079394,-0.158023,-0.235131,-0.309974,-0.381831,-0.450012,-0.513859,-0.572756,-0.626138,-0.67349,-0.714356,-0.748342,-0.775122,-0.794436,-0.8061,-0.81,-0.8061,-0.794436,-0.775122,-0.748342,-0.714356,-0.67349,-0.626138,-0.572756,-0.513859,-0.450012,-0.381831,-0.309974,-0.235131,-0.158023,-0.079394,-0.0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.5,"dash":0,"fixed":true,"highlight":false,"fillColor":"#b8cfdf","fillOpacity":0.38}},
  {"type":"line3d","def":[[-1.21,0,-1.78],[-1.21,0,1.42]],"att":{"strokeColor":"#6b8296","strokeWidth":1.55,"lastArrow":true,"dash":2,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.14,0,1.455],"+z"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.21,0,0],[-1.21,0,0.58]],"att":{"strokeColor":"#186b99","strokeWidth":2.6,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.21,0,0],[-1.21,0,0.33]],"att":{"strokeColor":"#994521","strokeWidth":3.2,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.04,0,0.58],"ω₁"],"att":{"strokeColor":"#186b99","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.04,0,0.33],"L₁"],"att":{"strokeColor":"#994521","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.98,0.15,1.05],"t₁"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"point3d","def":[-1.21,0,0],"att":{"size":3,"strokeColor":"#344b61","fillColor":"#344b61","withLabel":false,"fixed":true,"highlight":false}},
  {"type":"curve3d","def":[[2.02,2.0161,2.004436,1.985122,1.958342,1.924356,1.88349,1.836138,1.782756,1.723859,1.660012,1.591831,1.519974,1.445131,1.368023,1.289394,1.21,1.130606,1.051977,0.974869,0.900026,0.828169,0.759988,0.696141,0.637244,0.583862,0.53651,0.495644,0.461658,0.434878,0.415564,0.4039,0.4,0.4039,0.415564,0.434878,0.461658,0.495644,0.53651,0.583862,0.637244,0.696141,0.759988,0.828169,0.900026,0.974869,1.051977,1.130606,1.21,1.289394,1.368023,1.445131,1.519974,1.591831,1.660012,1.723859,1.782756,1.836138,1.88349,1.924356,1.958342,1.985122,2.004436,2.0161,2.02],[0.0,0.079394,0.158023,0.235131,0.309974,0.381831,0.450012,0.513859,0.572756,0.626138,0.67349,0.714356,0.748342,0.775122,0.794436,0.8061,0.81,0.8061,0.794436,0.775122,0.748342,0.714356,0.67349,0.626138,0.572756,0.513859,0.450012,0.381831,0.309974,0.235131,0.158023,0.079394,0.0,-0.079394,-0.158023,-0.235131,-0.309974,-0.381831,-0.450012,-0.513859,-0.572756,-0.626138,-0.67349,-0.714356,-0.748342,-0.775122,-0.794436,-0.8061,-0.81,-0.8061,-0.794436,-0.775122,-0.748342,-0.714356,-0.67349,-0.626138,-0.572756,-0.513859,-0.450012,-0.381831,-0.309974,-0.235131,-0.158023,-0.079394,-0.0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.5,"dash":0,"fixed":true,"highlight":false,"fillColor":"#b8cfdf","fillOpacity":0.38}},
  {"type":"line3d","def":[[1.21,0,-1.78],[1.21,0,1.42]],"att":{"strokeColor":"#6b8296","strokeWidth":1.55,"lastArrow":true,"dash":2,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.28,0,1.455],"+z"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1.21,0,0],[1.21,0,-1.74]],"att":{"strokeColor":"#186b99","strokeWidth":2.6,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1.21,0,0],[1.21,0,-0.99]],"att":{"strokeColor":"#994521","strokeWidth":3.2,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.38,0,-1.74],"ω₂"],"att":{"strokeColor":"#186b99","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.38,0,-0.99],"L₂"],"att":{"strokeColor":"#994521","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.43999999999999995,0.15,1.05],"t₂"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"point3d","def":[1.21,0,0],"att":{"size":3,"strokeColor":"#344b61","fillColor":"#344b61","withLabel":false,"fixed":true,"highlight":false}}
]
```

**Fig. 5.5** The disk reverses direction between $t_1$ and $t_2$. Its angular velocity and angular momentum are both positive at $t_1$ and negative at $t_2$ with the sign convention shown. Drag to rotate the plot.

$$
\begin{aligned}
\Delta \mechanical{\vec {L}} & = \mechanical{\vec {L}}_{2} - \mechanical{\vec {L}}_{1} \\ \Rightarrow \Delta \mechanical{L} & = - \mechanical{L}_{2} - ( + \mechanical{L}_{1} ) = - \mechanical{I}_{2} \mechanical{\omega}_{2} - \mechanical{I}_{1} \mechanical{\omega}_{1} .
\end{aligned} \tag{5.21}
$$

The disk has the same moment of inertia $\mechanical I_z$ at both times. Thus

$$
\begin{aligned}
\Delta\mechanical L_z
&=-\mechanical I_z(\mechanical\omega_2+\mechanical\omega_1) \\
&=-(0.5\,\unit{kg\,m^2})(30\,\unit{rad\,s^{-1}}+10\,\unit{rad\,s^{-1}}) \\
&=-20\,\unit{kg\,m^2\,s^{-1}}.
\end{aligned} \tag{5.22}
$$

The negative sign gives the $-z$ direction.

(b) The constant torque points in the direction of $\Delta\mechanical{\vec L}$. Its magnitude is

$$
\left|\sum\mechanical{\vec\tau}\right|=\frac{|\Delta\mechanical L_z|}{\Delta t}=\frac{20\,\unit{kg\,m^2\,s^{-1}}}{5.0\,\unit{s}}=4.0\,\unit{N\,m}. \tag{5.23}
$$

**Example 2. Angular momentum of a moving particle.** A particle of mass $\mechanical m$ moves in the $xy$ plane with coordinates $(\mechanical x,\mechanical y)=(\mechanical x_0+\cos(\signal\omega_1t),\mechanical y_0+\sin(\signal\omega_2t))$, where $\mechanical x_0$, $\mechanical y_0$, $\signal\omega_1$ and $\signal\omega_2$ are constants. Find its angular momentum about the $z$ axis at $t=0$.

Based on the x and y coordinates, the position r(t) and velocity v(t) are given by

$$
\mechanical{\vec {r}} ( t ) = ( \mechanical{x}_{0} + \cos \left ( \signal\omega_1 t \right ) ) \hat {i} + ( \mechanical{y}_{0} + \sin \left ( \signal\omega_2 t \right ) ) \hat {j} , \tag{5.24}
$$

and

$$
\mechanical{\vec {v}} ( t ) = \frac {d \mechanical{\vec {r}} ( t )} {d t} = - \signal\omega_1 \sin \left ( \signal\omega_1 t \right ) \hat {i} + \signal\omega_2 \cos \left ( \signal\omega_2 t \right ) \hat {j} . \tag{5.25}
$$

At time t = 0, the above equations give that

$$
\mechanical{\vec {r}} ( 0 ) = ( \mechanical{x}_{0} + 1 ) \hat {i} + \mechanical{y}_{0} \hat {j} , \tag{5.26}
$$

$$
\mechanical{\vec {v}} ( 0 ) = \signal\omega_2 \hat {j} . \tag{5.27}
$$

By definition, the angular momentum is thus given by

$$
\begin{aligned}
\mechanical{\vec L}(0)
&=\mechanical{\vec r}(0)\times\mechanical{\vec p}(0)
=\mechanical m\big(\mechanical{\vec r}(0)\times\mechanical{\vec v}(0)\big) \\
&=\mechanical m\big[(\mechanical x_0+1)\hat{\imath}+\mechanical y_0\hat{\jmath}\big]
\times(\signal\omega_2\hat{\jmath}) \\
&=\mechanical m(\mechanical x_0+1)\signal\omega_2
\underbrace{(\hat{\imath}\times\hat{\jmath})}_{\hat{k}}
+\mechanical m\mechanical y_0\signal\omega_2
\underbrace{(\hat{\jmath}\times\hat{\jmath})}_0 \\
&=\mechanical m\signal\omega_2(\mechanical x_0+1)\hat{k}.
\end{aligned} \tag{5.28}
$$

The angular momentum is along the $z$ axis because $\mechanical{\vec r}(t)$ and $\mechanical{\vec v}(t)$ are in the $xy$ plane. Its sign at $t=0$ is the sign of $\signal\omega_2(\mechanical x_0+1)$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical m$ | $\unit{kg}$ | Mass | Mass of the body or particle. |
| $\mechanical{\vec v}$ | $\unit{m\,s^{-1}}$ | Velocity | Rate of change of the position vector. |
| $\mechanical{\vec r}$ | $\unit m$ | Position vector | Displacement from the specified reference point. |
| $\mechanical{\vec L}$ | $\unit{kg\,m^2\,s^{-1}}$ | Angular momentum | Rotational momentum about the specified point or axis. |
| $\mechanical{\vec\tau}$ | $\unit{N\,m}$ | Torque | Moment of a force about the chosen point. |
| $\mechanical{\vec\omega}$ | $\unit{rad\,s^{-1}}$ | Angular velocity | Rotation rate and axial direction. |
| $\signal\omega_1,\signal\omega_2$ | $\unit{rad\,s^{-1}}$ | Angular frequencies | Rates of the sinusoidal factors in the trajectory. |
| $\mechanical I$ | $\unit{kg\,m^2}$ | Moment of inertia | Rotational inertia about the chosen axis. |
| $\mechanical\phi$ | $\unit{rad}$ | Angle | Angle between the radial displacement and the velocity or momentum. |
| $t$ | $\unit{s}$ | Time | Time measured from the reference instant. |
