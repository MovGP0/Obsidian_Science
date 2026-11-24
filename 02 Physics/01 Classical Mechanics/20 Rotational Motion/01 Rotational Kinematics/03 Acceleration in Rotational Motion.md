---
title: "1.3 Acceleration in Rotational Motion"
---

> [!TLDR]
> Centripetal acceleration changes the direction of velocity, and tangential acceleration changes its magnitude.

## 1.3.1 Centripetal Acceleration ($\mechanical{\vec{a}}_c$)

Imagine that we have a point mass moving around a circle with constant linear speed (i.e., constant angular velocity). The object’s linear velocity is tangent to the circle while its angular velocity is along the axis of rotation in the direction consistent with the right-hand rule. As shown in Figure 1.10a, if the mass is rotating counterclockwise (as viewed from above), then $\mechanical{\vec{\omega}}$ is pointing out of the page.

In uniform circular motion, the speed stays constant and the velocity vector changes direction. Consequently, there is centripetal acceleration even though the tangential acceleration is zero. The instantaneous centripetal acceleration is the limit of the average acceleration as the interval approaches zero. Over a finite time interval, the average acceleration points along the inward radius through the midpoint of the arc.

Average acceleration is defined as

$$
\mechanical{\vec{a}}_{\text{avg}} = \frac{\Delta \mechanical{\vec{v}}}{\Delta t}. \tag{1.21}
$$

Let’s assume that at time $t_i$ the particle is at point $A$ and has velocity $\mechanical{\vec{v}}_{\text{initial}} = \mechanical{\vec{v}}_A$ while at time $t_f$ the particle is at point $B$ and has velocity $\mechanical{\vec{v}}_{\text{final}} = \mechanical{\vec{v}}_B$. Then if we perform the vector subtraction

$$
\Delta \mechanical{\vec{v}} = \mechanical{\vec{v}}_{\text{final}} - \mechanical{\vec{v}}_{\text{initial}} = \mechanical{\vec{v}}_B - \mechanical{\vec{v}}_A, \tag{1.22}
$$

as shown in Figure 1.10b, we will find that the resulting vector $\Delta \mechanical{\vec{v}}$ has a direction that is pointing toward the center of the circle. Since $\Delta t$ is a positive scalar, Equation (1.21) shows that the acceleration will also be pointing towards the center of the circle (Figure 1.10c). For this reason, this acceleration is called **centripetal** (i.e., center seeking) acceleration. If we take the limit as $\Delta t$ goes to zero in Equation (1.21) to obtain the instantaneous acceleration, then points $A$ and $B$ in Figure 1.10a will coincide in the middle of the arc length $\mechanical{S}$. This is why the centripetal acceleration in Figure 1.10c is drawn in the middle of the arc length.

```graph
bounds: [-1.7, 1.53, 1.82, -1.65]
height: 320
width: 560
axis: false
drag: false
showNavigation: false
keepAspectRatio: true
elements: [
  {"type":"curve","def":[[1.16,1.1544,1.1377,1.1101,1.0717,1.023,0.9645,0.8967,0.8202,0.7359,0.6445,0.5468,0.4439,0.3367,0.2263,0.1137,0,-0.1137,-0.2263,-0.3367,-0.4439,-0.5468,-0.6445,-0.7359,-0.8202,-0.8967,-0.9645,-1.023,-1.0717,-1.1101,-1.1377,-1.1544,-1.16,-1.1544,-1.1377,-1.1101,-1.0717,-1.023,-0.9645,-0.8967,-0.8202,-0.7359,-0.6445,-0.5468,-0.4439,-0.3367,-0.2263,-0.1137,0,0.1137,0.2263,0.3367,0.4439,0.5468,0.6445,0.7359,0.8202,0.8967,0.9645,1.023,1.0717,1.1101,1.1377,1.1544,1.16],[0,0.1137,0.2263,0.3367,0.4439,0.5468,0.6445,0.7359,0.8202,0.8967,0.9645,1.023,1.0717,1.1101,1.1377,1.1544,1.16,1.1544,1.1377,1.1101,1.0717,1.023,0.9645,0.8967,0.8202,0.7359,0.6445,0.5468,0.4439,0.3367,0.2263,0.1137,0,-0.1137,-0.2263,-0.3367,-0.4439,-0.5468,-0.6445,-0.7359,-0.8202,-0.8967,-0.9645,-1.023,-1.0717,-1.1101,-1.1377,-1.1544,-1.16,-1.1544,-1.1377,-1.1101,-1.0717,-1.023,-0.9645,-0.8967,-0.8202,-0.7359,-0.6445,-0.5468,-0.4439,-0.3367,-0.2263,-0.1137,0]],"att":{"fixed":true,"highlight":false,"strokeWidth":1.65,"strokeColor":"#6b8296","dash":2}},
  {"type":"line","def":[[0,0],[-0.364,-1.1014]],"att":{"fixed":true,"highlight":false,"strokeWidth":2.4,"strokeColor":"#344b61","straightFirst":false,"straightLast":false,"lastArrow":false}},
  {"type":"line","def":[[0,0],[0.3768,-1.0971]],"att":{"fixed":true,"highlight":false,"strokeWidth":2.4,"strokeColor":"#344b61","straightFirst":false,"straightLast":false,"lastArrow":false}},
  {"type":"curve","def":[[-0.3364,-0.3035,-0.2703,-0.2369,-0.2033,-0.1696,-0.1356,-0.1016,-0.0675,-0.0333,0.0009,0.0351,0.0693,0.1034,0.1375,0.1714,0.2052,0.2387],[-1.1102,-1.1196,-1.1281,-1.1355,-1.142,-1.1475,-1.152,-1.1555,-1.158,-1.1595,-1.16,-1.1595,-1.1579,-1.1554,-1.1518,-1.1473,-1.1417,-1.1352]],"att":{"fixed":true,"highlight":false,"strokeWidth":2.5,"strokeColor":"#9a431f"}},
  {"type":"line","def":[[0.2387,-1.1352],[0.3381,-1.1096]],"att":{"fixed":true,"highlight":false,"strokeWidth":2.4,"strokeColor":"#9a431f","straightFirst":false,"straightLast":false,"lastArrow":true}},
  {"type":"curve","def":[[-0.113,-0.0998,-0.0865,-0.0731,-0.0596,-0.046,-0.0323,-0.0186,-0.0048,0.009,0.0227,0.0364,0.0501,0.0637,0.0772,0.0906,0.1038,0.1169],[-0.3418,-0.3459,-0.3494,-0.3525,-0.355,-0.3571,-0.3585,-0.3595,-0.36,-0.3599,-0.3593,-0.3582,-0.3565,-0.3543,-0.3516,-0.3484,-0.3447,-0.3405]],"att":{"fixed":true,"highlight":false,"strokeWidth":1.65,"strokeColor":"#6b8296"}},
  {"type":"line","def":[[-0.364,-1.1014],[0.2437,-1.3022]],"att":{"fixed":true,"highlight":false,"strokeWidth":2.4,"strokeColor":"#186b99","straightFirst":false,"straightLast":false,"lastArrow":true}},
  {"type":"line","def":[[0.3768,-1.0971],[0.9821,-0.8892]],"att":{"fixed":true,"highlight":false,"strokeWidth":2.4,"strokeColor":"#186b99","straightFirst":false,"straightLast":false,"lastArrow":true}},
  {"type":"point","def":[0,0],"att":{"size":3.5,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#344b61","strokeColor":"#344b61"}},
  {"type":"text","def":[-0.16,0.1,"𝑂"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"text","def":[0.055,0.14,"⊙ ω"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#186b99","anchorX":"left"}},
  {"type":"point","def":[-0.364,-1.1014],"att":{"size":3.5,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#186b99","strokeColor":"#186b99"}},
  {"type":"point","def":[0.3768,-1.0971],"att":{"size":3.5,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#186b99","strokeColor":"#186b99"}},
  {"type":"text","def":[-0.52,-1.07,"Pt A"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"text","def":[0.39,-0.98,"Pt B"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"text","def":[0.04,-1.41,"vₐ"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#186b99","anchorX":"left"}},
  {"type":"text","def":[1.01,-0.81,"vᵦ"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#186b99","anchorX":"left"}},
  {"type":"text","def":[0,-0.54,"Δθ"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#344b61","anchorX":"middle"}},
  {"type":"text","def":[0.024,-1.04,"𝑆"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#9a431f","anchorX":"left"}}
]
```

**Fig. 1.10a** A particle moves counterclockwise at constant speed from A to B. Its velocity is tangent to the circular path at both points.

```graph
bounds: [-1.44, 1.2, 1.27, -1.1]
height: 230
width: 500
axis: false
drag: false
showNavigation: false
keepAspectRatio: true
elements: [
  {"type":"line","def":[[-0.93,-0.6],[0.77,0]],"att":{"fixed":true,"highlight":false,"strokeWidth":2.4,"strokeColor":"#186b99","straightFirst":false,"straightLast":false,"lastArrow":true}},
  {"type":"line","def":[[0.77,0],[-0.93,0.6]],"att":{"fixed":true,"highlight":false,"strokeWidth":2.4,"strokeColor":"#6b8296","straightFirst":false,"straightLast":false,"lastArrow":true}},
  {"type":"line","def":[[-0.93,-0.6],[-0.93,0.6]],"att":{"fixed":true,"highlight":false,"strokeWidth":2.4,"strokeColor":"#9a431f","straightFirst":false,"straightLast":false,"lastArrow":true}},
  {"type":"curve","def":[[0.4023,0.3968,0.3921,0.3881,0.3849,0.3825,0.3809,0.3801,0.3801,0.3809,0.3825,0.3849,0.3881,0.3921,0.3968,0.4023],[0.1301,0.1133,0.0962,0.079,0.0616,0.0441,0.0265,0.0088,-0.0088,-0.0265,-0.0441,-0.0616,-0.079,-0.0962,-0.1133,-0.1301]],"att":{"fixed":true,"highlight":false,"strokeWidth":1.65,"strokeColor":"#344b61"}},
  {"type":"point","def":[-0.93,-0.6],"att":{"size":3.5,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#344b61","strokeColor":"#344b61"}},
  {"type":"point","def":[0.77,0],"att":{"size":3.5,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#344b61","strokeColor":"#344b61"}},
  {"type":"point","def":[-0.93,0.6],"att":{"size":3.5,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#344b61","strokeColor":"#344b61"}},
  {"type":"text","def":[-1.05,0.72,"𝐷"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"text","def":[-1.04,-0.74,"𝐸"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"text","def":[0.87,0,"𝐶"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"text","def":[0.24,0,"Δθ"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"text","def":[-0.79,0.04,"Δv"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#9a431f","anchorX":"left"}},
  {"type":"text","def":[-0.36,-0.45,"vᵦ"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#186b99","anchorX":"left"}},
  {"type":"text","def":[-0.32,0.5,"−vₐ"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#6b8296","anchorX":"left"}}
]
```

**Fig. 1.10b** The difference $\Delta\mechanical{\vec v}=\mechanical{\vec v}_B-\mechanical{\vec v}_A$ points inward, parallel to the radius through the midpoint of the arc.

```graph
bounds: [-1.7, 1.53, 1.82, -1.65]
height: 320
width: 560
axis: false
drag: false
showNavigation: false
keepAspectRatio: true
elements: [
  {"type":"curve","def":[[1.16,1.1544,1.1377,1.1101,1.0717,1.023,0.9645,0.8967,0.8202,0.7359,0.6445,0.5468,0.4439,0.3367,0.2263,0.1137,0,-0.1137,-0.2263,-0.3367,-0.4439,-0.5468,-0.6445,-0.7359,-0.8202,-0.8967,-0.9645,-1.023,-1.0717,-1.1101,-1.1377,-1.1544,-1.16,-1.1544,-1.1377,-1.1101,-1.0717,-1.023,-0.9645,-0.8967,-0.8202,-0.7359,-0.6445,-0.5468,-0.4439,-0.3367,-0.2263,-0.1137,0,0.1137,0.2263,0.3367,0.4439,0.5468,0.6445,0.7359,0.8202,0.8967,0.9645,1.023,1.0717,1.1101,1.1377,1.1544,1.16],[0,0.1137,0.2263,0.3367,0.4439,0.5468,0.6445,0.7359,0.8202,0.8967,0.9645,1.023,1.0717,1.1101,1.1377,1.1544,1.16,1.1544,1.1377,1.1101,1.0717,1.023,0.9645,0.8967,0.8202,0.7359,0.6445,0.5468,0.4439,0.3367,0.2263,0.1137,0,-0.1137,-0.2263,-0.3367,-0.4439,-0.5468,-0.6445,-0.7359,-0.8202,-0.8967,-0.9645,-1.023,-1.0717,-1.1101,-1.1377,-1.1544,-1.16,-1.1544,-1.1377,-1.1101,-1.0717,-1.023,-0.9645,-0.8967,-0.8202,-0.7359,-0.6445,-0.5468,-0.4439,-0.3367,-0.2263,-0.1137,0]],"att":{"fixed":true,"highlight":false,"strokeWidth":1.65,"strokeColor":"#6b8296","dash":2}},
  {"type":"point","def":[0,0],"att":{"size":3.5,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#344b61","strokeColor":"#344b61"}},
  {"type":"text","def":[-0.16,0.1,"𝑂"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"text","def":[0.055,0.14,"⊙ ω"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#186b99","anchorX":"left"}},
  {"type":"point","def":[0,-1.16],"att":{"size":3.5,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#344b61","strokeColor":"#344b61"}},
  {"type":"line","def":[[0,-1.16],[0.81,-1.16]],"att":{"fixed":true,"highlight":false,"strokeWidth":2.4,"strokeColor":"#186b99","straightFirst":false,"straightLast":false,"lastArrow":true}},
  {"type":"line","def":[[0,-1.16],[0,-0.39]],"att":{"fixed":true,"highlight":false,"strokeWidth":2.4,"strokeColor":"#9a431f","straightFirst":false,"straightLast":false,"lastArrow":true}},
  {"type":"text","def":[0.84,-1.24,"𝑣"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#186b99","anchorX":"left"}},
  {"type":"text","def":[0.08,-0.49,"a꜀"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#9a431f","anchorX":"left"}}
]
```

**Fig. 1.10c** In the instantaneous limit, the centripetal acceleration $\mechanical{\vec a}_c$ points toward the center and is perpendicular to the velocity $\mechanical{\vec v}$.

To derive the magnitude of the instantaneous centripetal acceleration, compare the geometry in Fig. 1.10. Isosceles triangle $OAB$ formed by the radii and the chord $AB$ is similar to isosceles triangle $CDE$, which is formed by the velocity vectors at points $A$ ($\mechanical{\vec{v}}_A$) and $B$ ($\mechanical{\vec{v}}_B$) and the vector $\Delta \mechanical{\vec{v}}$. This is because $\mechanical{\vec{v}}_A$ and $\mechanical{\vec{v}}_B$ are perpendicular to $OA$ and $OB$, respectively, since the velocities are tangent to the circle. Using the properties of similar triangles, we now have ($\mechanical{v}_A = \mechanical{v}_B = \mechanical{v}$):

$$
\frac{\Delta \mechanical{v}}{\mechanical{v}} = \frac{AB}{\mechanical{r}}. \tag{1.23}
$$

> [!note]
> The notation $\Delta v$ in Equation (1.23) means the magnitude $\lVert\Delta\mechanical{\vec v}\rVert$ of the change in the velocity vector. The speed itself stays constant.

As $\Delta t$ approaches zero, the chord length $AB$ approaches the arc length $\mechanical{S}$ in relative terms. In this limit, the change in velocity is infinitesimal, and Equation (1.23) becomes:

$$
\frac{\lVert d\mechanical{\vec v}\rVert}{\mechanical{v}}=\frac{d\mechanical{S}}{\mechanical{r}}. \tag{1.24}
$$

Divide by $dt$ and use $\mechanical{v}=d\mechanical{S}/dt$ to obtain the magnitude of the centripetal acceleration.

$$
\begin{gathered}
\frac{\lVert d\mechanical{\vec v}\rVert}{dt\,\mechanical{v}}
=\frac{d\mechanical{S}}{dt\,\mechanical{r}},\\
\frac{\mechanical{a}_c}{\mechanical{v}}=\frac{\mechanical{v}}{\mechanical{r}},\\
\mechanical{a}_c=\frac{\mechanical{v}^2}{\mechanical{r}}.
\end{gathered}
\tag{1.25}
$$

To summarize, the centripetal acceleration vector is always directed radially inward toward the center of the circle and has a magnitude given by Equation (1.25). From this magnitude, we see that its SI unit is ($\unit{m/s^2}$), as expected. If an object is moving in a circular trajectory, the centripetal acceleration is *always* present, even if the mass is moving at constant speed. The centripetal acceleration is due to the change in the *direction* of the linear velocity vector.

### Centripetal Force

But what causes the centripetal acceleration? In other words, what causes the direction of the velocity vector to change? Let’s remind ourselves of Newton’s Second Law as we learned it for translational motion:

$$
\Sigma \mechanical{\vec{F}} = \mechanical{m} \mechanical{\vec{a}} \Rightarrow \mechanical{\vec{a}} = \frac{\Sigma \mechanical{\vec{F}}}{\mechanical{m}}. \tag{1.26}
$$

Equation (1.26) says that a net force $\Sigma \mechanical{\vec{F}}$ causes a mass $\mechanical{m}$ to accelerate with an acceleration of $\mechanical{\vec{a}}$. The only way we can have acceleration is to have a nonzero net force. The mass $\mechanical{m}$ expresses how difficult it is to get an object to accelerate (i.e., change its velocity). Given that $\mechanical{m}$ is a positive scalar quantity, the direction of the acceleration $\mechanical{\vec{a}}$ will be that of the net force $\Sigma \mechanical{\vec{F}}$.

As a result, to have a centripetal acceleration, the net force exerted on the mass must have a component that points toward the center of its circular trajectory. This component is called the centripetal force $\Sigma \mechanical{\vec{F}}_c$ and its magnitude is given by combining Equation (1.26) with the result of Equation (1.25):

$$
\Sigma \mechanical{F}_c = \mechanical{m} \mechanical{a}_c = \mechanical{m} \frac{\mechanical{v}^2}{\mechanical{r}}. \tag{1.27}
$$

The centripetal force is not a different type of force (like the gravitational force or the force of friction, etc.), but rather refers to a direction: the centripetal force is the component of the *net* force that points toward the center of the object’s circular trajectory. We get the centripetal force by adding all the force components that point toward and away from the center of the circle (i.e., are along the radial direction). Instead of calling it “net radial” we just call it “centripetal,” since this adjective also specifies the direction.

If there is also a component of the net force on the object in the direction tangent to the circle, then, based on Newton’s Second Law, this component will provide a tangential acceleration $\mechanical{\vec{a}}_t$. The tangential acceleration would cause the mass to either speed up or slow down. This brings us to the next section.

## 1.3.2 Angular Acceleration ($\mechanical{\vec{\alpha}}$)

Once again, we will follow our analogy from translational motion to define the concept of acceleration for rotational motion.

We define *average angular acceleration* $\mechanical{\vec{\alpha}}_{\text{avg}}$ to be the change in an object’s angular velocity $\Delta \mechanical{\vec{\omega}}$ over a time interval $\Delta t$ divided by the time interval $\Delta t$. If at an initial time $t_{\text{initial}}$ the object’s angular velocity is $\mechanical{\vec{\omega}}_{\text{initial}}$ and at a final time $t_{\text{final}}$ it is $\mechanical{\vec{\omega}}_{\text{final}}$, then

$$
\mechanical{\vec{\alpha}}_{\text{avg}} = \frac{\mechanical{\vec{\omega}}_{\text{final}} - \mechanical{\vec{\omega}}_{\text{initial}}}{t_{\text{final}} - t_{\text{initial}}} = \frac{\Delta \mechanical{\vec{\omega}}}{\Delta t}. \tag{1.28}
$$

```graph3d
bounds: [-1.68, 0.9, 1.68, -0.9]
bounds3d: [[-3.25,3.25],[-1.18,1.18],[-1.64,1.64]]
height: 285
width: 645
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
  az: {slider: {start: 3.14159, visible: false}, pointer: {enabled: true}}
  el: {slider: {start: 0.43, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"curve3d","def":[[-0.35,-0.3555,-0.3721,-0.3995,-0.4375,-0.4858,-0.5438,-0.611,-0.6868,-0.7704,-0.8611,-0.9579,-1.0599,-1.1662,-1.2756,-1.3873,-1.5,-1.6127,-1.7244,-1.8338,-1.9401,-2.0421,-2.1389,-2.2296,-2.3132,-2.389,-2.4562,-2.5142,-2.5625,-2.6005,-2.6279,-2.6445,-2.65,-2.6445,-2.6279,-2.6005,-2.5625,-2.5142,-2.4562,-2.389,-2.3132,-2.2296,-2.1389,-2.0421,-1.9401,-1.8338,-1.7244,-1.6127,-1.5,-1.3873,-1.2756,-1.1662,-1.0599,-0.9579,-0.8611,-0.7704,-0.6868,-0.611,-0.5438,-0.4858,-0.4375,-0.3995,-0.3721,-0.3555,-0.35],[0,0.1127,0.2244,0.3338,0.4401,0.5421,0.6389,0.7296,0.8132,0.889,0.9562,1.0142,1.0625,1.1005,1.1279,1.1445,1.15,1.1445,1.1279,1.1005,1.0625,1.0142,0.9562,0.889,0.8132,0.7296,0.6389,0.5421,0.4401,0.3338,0.2244,0.1127,0,-0.1127,-0.2244,-0.3338,-0.4401,-0.5421,-0.6389,-0.7296,-0.8132,-0.889,-0.9562,-1.0142,-1.0625,-1.1005,-1.1279,-1.1445,-1.15,-1.1445,-1.1279,-1.1005,-1.0625,-1.0142,-0.9562,-0.889,-0.8132,-0.7296,-0.6389,-0.5421,-0.4401,-0.3338,-0.2244,-0.1127,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"fixed":true,"highlight":false,"strokeWidth":1.6,"strokeColor":"#344b61","fillColor":"#b8cfdf","fillOpacity":0.38}},
  {"type":"line3d","def":[[-1.5,0,-1.32],[-1.5,0,1.53]],"att":{"fixed":true,"highlight":false,"strokeWidth":2,"strokeColor":"#6b8296","lastArrow":false,"dash":2}},
  {"type":"line3d","def":[[-1.5,0,0],[-1.5,0,0.8]],"att":{"fixed":true,"highlight":false,"strokeWidth":3.2,"strokeColor":"#186b99","lastArrow":true,"dash":0}},
  {"type":"text3d","def":[[-1.3,0,0.8],"ω initial"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#186b99","anchorX":"left"}},
  {"type":"text3d","def":[[-1.5,0,-1.61],"Initial time"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"middle"}},
  {"type":"curve3d","def":[[2.65,2.6445,2.6279,2.6005,2.5625,2.5142,2.4562,2.389,2.3132,2.2296,2.1389,2.0421,1.9401,1.8338,1.7244,1.6127,1.5,1.3873,1.2756,1.1662,1.0599,0.9579,0.8611,0.7704,0.6868,0.611,0.5438,0.4858,0.4375,0.3995,0.3721,0.3555,0.35,0.3555,0.3721,0.3995,0.4375,0.4858,0.5438,0.611,0.6868,0.7704,0.8611,0.9579,1.0599,1.1662,1.2756,1.3873,1.5,1.6127,1.7244,1.8338,1.9401,2.0421,2.1389,2.2296,2.3132,2.389,2.4562,2.5142,2.5625,2.6005,2.6279,2.6445,2.65],[0,0.1127,0.2244,0.3338,0.4401,0.5421,0.6389,0.7296,0.8132,0.889,0.9562,1.0142,1.0625,1.1005,1.1279,1.1445,1.15,1.1445,1.1279,1.1005,1.0625,1.0142,0.9562,0.889,0.8132,0.7296,0.6389,0.5421,0.4401,0.3338,0.2244,0.1127,0,-0.1127,-0.2244,-0.3338,-0.4401,-0.5421,-0.6389,-0.7296,-0.8132,-0.889,-0.9562,-1.0142,-1.0625,-1.1005,-1.1279,-1.1445,-1.15,-1.1445,-1.1279,-1.1005,-1.0625,-1.0142,-0.9562,-0.889,-0.8132,-0.7296,-0.6389,-0.5421,-0.4401,-0.3338,-0.2244,-0.1127,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"fixed":true,"highlight":false,"strokeWidth":1.6,"strokeColor":"#344b61","fillColor":"#b8cfdf","fillOpacity":0.38}},
  {"type":"line3d","def":[[1.5,0,-1.32],[1.5,0,1.53]],"att":{"fixed":true,"highlight":false,"strokeWidth":2,"strokeColor":"#6b8296","lastArrow":false,"dash":2}},
  {"type":"line3d","def":[[1.5,0,0],[1.5,0,1.27]],"att":{"fixed":true,"highlight":false,"strokeWidth":3.2,"strokeColor":"#186b99","lastArrow":true,"dash":0}},
  {"type":"text3d","def":[[1.7,0,1.27],"ω final"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#186b99","anchorX":"left"}},
  {"type":"line3d","def":[[1.5,0,0],[1.5,0,0.55]],"att":{"fixed":true,"highlight":false,"strokeWidth":2.8,"strokeColor":"#9a431f","lastArrow":true,"dash":0}},
  {"type":"text3d","def":[[1.7,0,0.55],"α"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#9a431f","anchorX":"left"}},
  {"type":"text3d","def":[[1.5,0,-1.61],"Final time"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"middle"}}
]
```

**Fig. 1.11a** The magnitude of the angular velocity increases. The angular acceleration $\mechanical{\vec\alpha}$ and angular velocity $\mechanical{\vec\omega}$ point in the same direction. Drag to rotate the plot.

```graph3d
bounds: [-1.68, 0.9, 1.68, -0.9]
bounds3d: [[-3.25,3.25],[-1.18,1.18],[-1.64,1.64]]
height: 285
width: 645
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
  az: {slider: {start: 3.14159, visible: false}, pointer: {enabled: true}}
  el: {slider: {start: 0.43, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"curve3d","def":[[-0.35,-0.3555,-0.3721,-0.3995,-0.4375,-0.4858,-0.5438,-0.611,-0.6868,-0.7704,-0.8611,-0.9579,-1.0599,-1.1662,-1.2756,-1.3873,-1.5,-1.6127,-1.7244,-1.8338,-1.9401,-2.0421,-2.1389,-2.2296,-2.3132,-2.389,-2.4562,-2.5142,-2.5625,-2.6005,-2.6279,-2.6445,-2.65,-2.6445,-2.6279,-2.6005,-2.5625,-2.5142,-2.4562,-2.389,-2.3132,-2.2296,-2.1389,-2.0421,-1.9401,-1.8338,-1.7244,-1.6127,-1.5,-1.3873,-1.2756,-1.1662,-1.0599,-0.9579,-0.8611,-0.7704,-0.6868,-0.611,-0.5438,-0.4858,-0.4375,-0.3995,-0.3721,-0.3555,-0.35],[0,0.1127,0.2244,0.3338,0.4401,0.5421,0.6389,0.7296,0.8132,0.889,0.9562,1.0142,1.0625,1.1005,1.1279,1.1445,1.15,1.1445,1.1279,1.1005,1.0625,1.0142,0.9562,0.889,0.8132,0.7296,0.6389,0.5421,0.4401,0.3338,0.2244,0.1127,0,-0.1127,-0.2244,-0.3338,-0.4401,-0.5421,-0.6389,-0.7296,-0.8132,-0.889,-0.9562,-1.0142,-1.0625,-1.1005,-1.1279,-1.1445,-1.15,-1.1445,-1.1279,-1.1005,-1.0625,-1.0142,-0.9562,-0.889,-0.8132,-0.7296,-0.6389,-0.5421,-0.4401,-0.3338,-0.2244,-0.1127,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"fixed":true,"highlight":false,"strokeWidth":1.6,"strokeColor":"#344b61","fillColor":"#b8cfdf","fillOpacity":0.38}},
  {"type":"line3d","def":[[-1.5,0,-1.32],[-1.5,0,1.53]],"att":{"fixed":true,"highlight":false,"strokeWidth":2,"strokeColor":"#6b8296","lastArrow":false,"dash":2}},
  {"type":"line3d","def":[[-1.5,0,0],[-1.5,0,1.27]],"att":{"fixed":true,"highlight":false,"strokeWidth":3.2,"strokeColor":"#186b99","lastArrow":true,"dash":0}},
  {"type":"text3d","def":[[-1.3,0,1.27],"ω initial"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#186b99","anchorX":"left"}},
  {"type":"text3d","def":[[-1.5,0,-1.61],"Initial time"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"middle"}},
  {"type":"curve3d","def":[[2.65,2.6445,2.6279,2.6005,2.5625,2.5142,2.4562,2.389,2.3132,2.2296,2.1389,2.0421,1.9401,1.8338,1.7244,1.6127,1.5,1.3873,1.2756,1.1662,1.0599,0.9579,0.8611,0.7704,0.6868,0.611,0.5438,0.4858,0.4375,0.3995,0.3721,0.3555,0.35,0.3555,0.3721,0.3995,0.4375,0.4858,0.5438,0.611,0.6868,0.7704,0.8611,0.9579,1.0599,1.1662,1.2756,1.3873,1.5,1.6127,1.7244,1.8338,1.9401,2.0421,2.1389,2.2296,2.3132,2.389,2.4562,2.5142,2.5625,2.6005,2.6279,2.6445,2.65],[0,0.1127,0.2244,0.3338,0.4401,0.5421,0.6389,0.7296,0.8132,0.889,0.9562,1.0142,1.0625,1.1005,1.1279,1.1445,1.15,1.1445,1.1279,1.1005,1.0625,1.0142,0.9562,0.889,0.8132,0.7296,0.6389,0.5421,0.4401,0.3338,0.2244,0.1127,0,-0.1127,-0.2244,-0.3338,-0.4401,-0.5421,-0.6389,-0.7296,-0.8132,-0.889,-0.9562,-1.0142,-1.0625,-1.1005,-1.1279,-1.1445,-1.15,-1.1445,-1.1279,-1.1005,-1.0625,-1.0142,-0.9562,-0.889,-0.8132,-0.7296,-0.6389,-0.5421,-0.4401,-0.3338,-0.2244,-0.1127,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"fixed":true,"highlight":false,"strokeWidth":1.6,"strokeColor":"#344b61","fillColor":"#b8cfdf","fillOpacity":0.38}},
  {"type":"line3d","def":[[1.5,0,-1.32],[1.5,0,1.53]],"att":{"fixed":true,"highlight":false,"strokeWidth":2,"strokeColor":"#6b8296","lastArrow":false,"dash":2}},
  {"type":"line3d","def":[[1.5,0,0],[1.5,0,0.8]],"att":{"fixed":true,"highlight":false,"strokeWidth":3.2,"strokeColor":"#186b99","lastArrow":true,"dash":0}},
  {"type":"text3d","def":[[1.7,0,0.8],"ω final"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#186b99","anchorX":"left"}},
  {"type":"line3d","def":[[1.5,0,0],[1.5,0,-0.57]],"att":{"fixed":true,"highlight":false,"strokeWidth":2.8,"strokeColor":"#9a431f","lastArrow":true,"dash":0}},
  {"type":"text3d","def":[[1.7,0,-0.57],"α"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#9a431f","anchorX":"left"}},
  {"type":"text3d","def":[[1.5,0,-1.61],"Final time"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"middle"}}
]
```

**Fig. 1.11b** The magnitude of the angular velocity decreases. The angular acceleration $\mechanical{\vec\alpha}$ points opposite the angular velocity $\mechanical{\vec\omega}$. Drag to rotate the plot.

We see from the definition that the SI unit is ($\unit{rad/s^2}$), and also since $\Delta t$ is a positive scalar, the average angular acceleration will have the same direction as $\Delta\mechanical{\vec{\omega}}$. The **instantaneous angular acceleration** can be found by taking the limit as $\Delta t$ goes to 0:

$$
\mechanical{\vec{\alpha}} = \lim_{\Delta t \to 0} \mechanical{\vec{\alpha}}_{\text{avg}} = \lim_{\Delta t \to 0} \frac{\Delta\mechanical{\vec{\omega}}}{\Delta t} = \frac{d\mechanical{\vec{\omega}}}{dt}. \tag{1.29}
$$

Of course, the units are the same as for the average angular acceleration and the direction is that of $d\mechanical{\vec{\omega}}$.

In exactly the same way that the relationship between the directions of the linear velocity and linear acceleration vectors determine if an object speeds up or slows down linearly, if $\mechanical{\vec{\alpha}}$ and $\mechanical{\vec{\omega}}$ have the same direction, then the object is speeding up rotationally, but if they have opposite directions, the object is slowing down rotationally. These cases are shown schematically in Figure 1.11. In addition, just like we had discussed for the angular velocity, if the angular acceleration is constant, then the instantaneous angular acceleration is equal to the average angular acceleration:

$$
\begin{gathered}
\mechanical{\vec{\alpha}}_{\text{avg}} = \mechanical{\vec{\alpha}} \\
\Rightarrow \frac{\Delta\mechanical{\vec{\omega}}}{\Delta t} = \frac{d\mechanical{\vec{\omega}}}{dt}.
\end{gathered} \tag{1.30}
$$

Lastly, we can find the relationship between the magnitude of an object’s angular acceleration $\mechanical{\alpha}$ and the magnitude of its tangential acceleration $\mechanical{a}_t$ based on what we have discussed so far. Since the tangential acceleration is the rate of change of speed, $\mechanical{a}_t = \frac{d\mechanical{v}}{dt}$, from Equation (1.16) ($\mechanical{v} = \mechanical{\omega} \mechanical{r}$) we find:

$$
\mechanical{a}_t = \frac{d\mechanical{v}}{dt} = \frac{d(\mechanical{\omega} \mechanical{r})}{dt} = \frac{d\mechanical{\omega}}{dt} \mechanical{r} + \underbrace{\mechanical{\omega} \frac{d\mechanical{r}}{dt}}_{0} = \mechanical{\alpha} \mechanical{r}. \tag{1.31}
$$

In this derivation, the second term in the sum goes to zero because if the object is rigid and the axis of rotation is fixed, $\mechanical{r}$ does not change, and thus $\frac{d\mechanical{r}}{dt} = 0$. For the first term in the sum, we have used the definition $\frac{d\mechanical{\omega}}{dt} = \mechanical{\alpha}$. Equation (1.31) says that if an object is moving around a circle with a nonzero angular acceleration, then the object is speeding up or slowing down. Therefore, this acceleration can be expressed as either the linear acceleration ($\mechanical{\vec{a}}_t$) tangent to the object’s trajectory or the angular acceleration ($\mechanical{\vec{\alpha}}$). By accounting for one, we have accounted for the other. However, whereas the angular acceleration is the same for all points on a rotating rigid body, the linear acceleration depends on the distance of the point from the axis of rotation. This is in complete analogy to what we learned about angular and tangential velocities.

## 1.3.3 Total Acceleration

If a rotating object speeds up or slows down, it has a tangential acceleration ($\mechanical{\vec{a}}_t$). However, since it is moving in a circle, the object also has centripetal acceleration ($\mechanical{\vec{a}}_c$). Both these accelerations have the same units and they can be added as vectors to obtain the total acceleration of the object, as shown in Figure 1.12.

The centripetal and tangential accelerations are perpendicular to each other, since the tangent at a point on a circle is perpendicular to the radius of the circle at that point. Then, the magnitude will be given by the Pythagorean theorem:

$$
\mechanical{a}_{\text{tot}} = \sqrt{\mechanical{a}_t^2 + \mechanical{a}_c^2}, \tag{1.32}
$$

while the direction can be found via the equation:

$$
\tan \mechanical{\beta} = \frac{\mechanical{a}_t}{\mechanical{a}_c}. \tag{1.33}
$$

Note that to these two accelerations $\mechanical{\vec{a}}_t$ and $\mechanical{\vec{a}}_c$, we cannot also add the angular acceleration $\mechanical{\vec{\alpha}}$, since it has different units! We can only add the linear accelerations together. But more importantly, as we mentioned in Section 1.3.2, you do not need to worry – the tangential acceleration accounts for the angular acceleration. Therefore, we have already accounted for the angular acceleration in the sum of the two linear accelerations.

```graph
bounds: [-1.65, 1.45, 1.74, -1.75]
height: 320
width: 560
axis: false
drag: false
showNavigation: false
keepAspectRatio: true
elements: [
  {"type":"curve","def":[[1.18,1.1743,1.1573,1.1292,1.0902,1.0407,0.9811,0.9122,0.8344,0.7486,0.6556,0.5562,0.4516,0.3425,0.2302,0.1157,0,-0.1157,-0.2302,-0.3425,-0.4516,-0.5562,-0.6556,-0.7486,-0.8344,-0.9122,-0.9811,-1.0407,-1.0902,-1.1292,-1.1573,-1.1743,-1.18,-1.1743,-1.1573,-1.1292,-1.0902,-1.0407,-0.9811,-0.9122,-0.8344,-0.7486,-0.6556,-0.5562,-0.4516,-0.3425,-0.2302,-0.1157,0,0.1157,0.2302,0.3425,0.4516,0.5562,0.6556,0.7486,0.8344,0.9122,0.9811,1.0407,1.0902,1.1292,1.1573,1.1743,1.18],[0,0.1157,0.2302,0.3425,0.4516,0.5562,0.6556,0.7486,0.8344,0.9122,0.9811,1.0407,1.0902,1.1292,1.1573,1.1743,1.18,1.1743,1.1573,1.1292,1.0902,1.0407,0.9811,0.9122,0.8344,0.7486,0.6556,0.5562,0.4516,0.3425,0.2302,0.1157,0,-0.1157,-0.2302,-0.3425,-0.4516,-0.5562,-0.6556,-0.7486,-0.8344,-0.9122,-0.9811,-1.0407,-1.0902,-1.1292,-1.1573,-1.1743,-1.18,-1.1743,-1.1573,-1.1292,-1.0902,-1.0407,-0.9811,-0.9122,-0.8344,-0.7486,-0.6556,-0.5562,-0.4516,-0.3425,-0.2302,-0.1157,0]],"att":{"fixed":true,"highlight":false,"strokeWidth":1.65,"strokeColor":"#6b8296","dash":2}},
  {"type":"point","def":[0,0],"att":{"size":3.5,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#344b61","strokeColor":"#344b61"}},
  {"type":"point","def":[-0.4478,-1.0917],"att":{"size":3.5,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#344b61","strokeColor":"#344b61"}},
  {"type":"text","def":[-0.15,0.14,"𝑂"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"line","def":[[-0.1025,-0.2498],[0.6747,-0.5685]],"att":{"fixed":true,"highlight":false,"strokeWidth":1.2,"strokeColor":"#6b8296","straightFirst":false,"straightLast":false,"lastArrow":false,"dash":2}},
  {"type":"line","def":[[0.3294,-1.4104],[0.6747,-0.5685]],"att":{"fixed":true,"highlight":false,"strokeWidth":1.2,"strokeColor":"#6b8296","straightFirst":false,"straightLast":false,"lastArrow":false,"dash":2}},
  {"type":"line","def":[[-0.4478,-1.0917],[-0.1025,-0.2498]],"att":{"fixed":true,"highlight":false,"strokeWidth":2.4,"strokeColor":"#186b99","straightFirst":false,"straightLast":false,"lastArrow":true}},
  {"type":"line","def":[[-0.4478,-1.0917],[0.3294,-1.4104]],"att":{"fixed":true,"highlight":false,"strokeWidth":2.4,"strokeColor":"#9a431f","straightFirst":false,"straightLast":false,"lastArrow":true}},
  {"type":"line","def":[[-0.4478,-1.0917],[0.6747,-0.5685]],"att":{"fixed":true,"highlight":false,"strokeWidth":2.4,"strokeColor":"#287a55","straightFirst":false,"straightLast":false,"lastArrow":true}},
  {"type":"text","def":[-0.4625,-0.2798,"a꜀"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#186b99","anchorX":"left"}},
  {"type":"text","def":[0.3394,-1.5604,"aₜ"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#9a431f","anchorX":"left"}},
  {"type":"text","def":[0.7447,-0.5685,"aₜₒₜ"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#287a55","anchorX":"left"}},
  {"type":"curve","def":[[-0.1849,-0.1902,-0.1959,-0.2021,-0.2087,-0.2157,-0.2231,-0.2309,-0.239,-0.2476,-0.2564,-0.2656,-0.2751,-0.2849,-0.295,-0.3053,-0.3159,-0.3267,-0.3377],[-0.9692,-0.9585,-0.9479,-0.9376,-0.9276,-0.9178,-0.9084,-0.8992,-0.8904,-0.8819,-0.8738,-0.8661,-0.8587,-0.8518,-0.8453,-0.8391,-0.8335,-0.8282,-0.8234]],"att":{"fixed":true,"highlight":false,"strokeWidth":1.65,"strokeColor":"#344b61"}},
  {"type":"text","def":[-0.1378,-0.8717,"β"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#344b61","anchorX":"left"}}
]
```

**Fig. 1.12** For a particle with changing speed on a circular path, the total acceleration is the vector sum of the inward centripetal acceleration $\mechanical{\vec a}_c$ and the perpendicular tangential acceleration $\mechanical{\vec a}_t$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\vec{\alpha}}$ | $\unit{rad\,s^{-2}}$ | Angular acceleration | Rate of change of angular velocity. |
| $\mechanical{\beta}$ | $\unit{rad}$ | Angle | Angle between the centripetal and total acceleration in Fig. 1.12. |
| $\mechanical{\vec{\omega}}$ | $\unit{rad\,s^{-1}}$ | Angular velocity or speed | Rate of rotation about the indicated axis. |
| $\mechanical{S}$ | $\unit{m}$ | Arc length | Distance measured along the circular path. |
| $\mechanical{\vec{F}}$ | $\unit{N}$ | Force | Force acting on the indicated body. |
| $\mechanical{\vec{a}}$ | $\unit{m\,s^{-2}}$ | Linear acceleration | Rate of change of linear velocity. |
| $\mechanical{\vec{v}}$ | $\unit{m\,s^{-1}}$ | Linear velocity or speed | Velocity or speed of the indicated point. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Mass of the indicated particle or body. |
| $\mechanical{r}$ | $\unit{m}$ | Radius or position | Distance or position relative to the reference point or axis. |
| $t$ | $\unit{s}$ | Time | Time of the motion. |
