---
title: "1.4 Rotational versus Linear Motion: Analogies"
---

> [!TLDR]
> The variables and equations for fixed-axis rotation have counterparts in linear motion.

We now complete the analogy between translational and rotational motion, at least as far as the kinematic equations for constant velocity motion and constant acceleration motion are concerned. We see that the angular velocity and acceleration, since they were defined as the rotational counterparts of the linear velocity and acceleration, respectively, allow us to construct Table 1.1. For each of the cases shown in the table, the graphs of the angular physical quantities as functions of time will be the same as those of their translational counterparts. These graphs and the derivations of the equations for motion with constant angular velocity and constant angular acceleration will be the focus of one of the exercises at the end of the chapter.

Analogies like these shown in Table 1.1 are useful for developing an intuition for rotational motion. If at any point you are stuck solving a problem involving rotational quantities, think of the analogous problem involving linear quantities. At this stage you may find it easier to solve the linear motion problem, and you can then apply the same methodology to the rotational motion problem. Remember that for rotation about a fixed axis, all angular vector quantities are along a single axis of rotation, and thus the calculations involve only 1D vector addition, just as is the case in 1D translational motion.

**Table 1.1** Physical quantities for linear motion and their rotational counterparts.

| Linear motion | Rotational motion |
| --- | --- |
| Position $\mechanical{\vec x}$ | Angular position $\mechanical{\theta}$ |
| Displacement $\Delta\mechanical{\vec x}$ | Angular displacement $\Delta\mechanical{\vec\theta}$ |
| Velocity $\mechanical{\vec v}=\frac{d\mechanical{\vec x}}{dt}$ | Angular velocity $\mechanical{\vec\omega}=\frac{d\mechanical{\vec\theta}}{dt}$ |
| Acceleration $\mechanical{\vec a}=\frac{d\mechanical{\vec v}}{dt}$ | Angular acceleration $\mechanical{\vec\alpha}=\frac{d\mechanical{\vec\omega}}{dt}$ |
| Constant velocity. $\Delta\mechanical{\vec x}=\mechanical{\vec v}\Delta t$ | Constant angular velocity. $\Delta\mechanical{\vec\theta}=\mechanical{\vec\omega}\Delta t$ |
| Constant acceleration. $\mechanical{\vec v}=\mechanical{\vec v}_0+\mechanical{\vec a}\Delta t$ | Constant angular acceleration. $\mechanical{\vec\omega}=\mechanical{\vec\omega}_0+\mechanical{\vec\alpha}\Delta t$ |
| $\Delta\mechanical{\vec x}=\mechanical{\vec v}_0\Delta t+\tfrac12\mechanical{\vec a}(\Delta t)^2$ | $\Delta\mechanical{\vec\theta}=\mechanical{\vec\omega}_0\Delta t+\tfrac12\mechanical{\vec\alpha}(\Delta t)^2$ |

Now, let’s do an example that makes use of the analogies in Table 1.1.

**Example 2: Spin rotational motion with constant angular acceleration.** A wheel of radius $\mechanical{r} = 2.0\,\unit{m}$ spins with a constant angular acceleration of $3.5\,\unit{rad/s^2}$ that causes the wheel to speed up. At time $t_0 = 0\,\unit{s}$, the angular velocity is $2.0\,\unit{rad/s}$. (a) Through what angle does the wheel rotate between $t = 0\,\unit{s}$ and $t = 2.0\,\unit{s}$? Give your answer in both radians and revolutions. (b) What is the angular speed of the wheel at $t = 2.0\,\unit{s}$? (c) What is the total acceleration of a point on the rim at time $t = 2.0\,\unit{s}$?

First, let’s imagine the analogous problem in linear motion. It would go like this: “An object moves with constant linear acceleration of $3.5 \unit{m/s}^2$ so that it speeds up. At time $t = 0 \unit{s}$, the velocity is $2.0 \unit{m/s}$. (a) What is the object’s displacement between $t = 0 \unit{s}$ and $t = 2.0\,\unit{s}$? Give your answer in both meters and feet. (b) What is the speed of the object at $t = 2.0\,\unit{s}$?” Part (c) does not have an equivalent in linear motion.

How would you solve this new problem? It is not as difficult to develop a methodical solution in this case because you already have experience with linear motion problems. You can now use the same methodology to solve the equivalent rotational problem! We encourage you to try thinking about the analogous linear motion problems as you work through this book – it will help you build an intuition for rotational motion.

(a) Now, let’s talk about our original spinning wheel and assume that the wheel rotates counterclockwise in the plane of the page, as shown in Figure 1.13. We define the $+z$ axis to be out of the plane of the page and perpendicular to it. Using the right-hand rule, we find that $\mechanical{\vec{\omega}}$ is along the $+z$ direction and so is $\mechanical{\vec{\alpha}}$, since the wheel is speeding up.

Based on the given information, we have rotational motion with constant angular acceleration $\mechanical{\vec{\alpha}}$. The equations that describe this concept are:

$$
\mechanical{\vec{\omega}} = \mechanical{\vec{\omega}}_0 + \mechanical{\vec{\alpha}}\Delta t \tag{1.34}
$$

and

$$
\Delta\mechanical{\vec{\theta}} = \mechanical{\vec{\omega}}_0\Delta t + \frac{1}{2}\mechanical{\vec{\alpha}}\Delta t^2. \tag{1.35}
$$

```graph3d
bounds: [-1.68, 0.9, 1.68, -0.9]
bounds3d: [[-1.78,1.78],[-1.78,1.78],[-1.45,1.7]]
height: 285
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
  az: {slider: {start: 2.94, visible: false}, pointer: {enabled: true}}
  el: {slider: {start: 0.43, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"curve3d","def":[[1.55,1.5425,1.5202,1.4833,1.432,1.367,1.2888,1.1982,1.096,0.9833,0.8611,0.7307,0.5932,0.4499,0.3024,0.1519,0,-0.1519,-0.3024,-0.4499,-0.5932,-0.7307,-0.8611,-0.9833,-1.096,-1.1982,-1.2888,-1.367,-1.432,-1.4833,-1.5202,-1.5425,-1.55,-1.5425,-1.5202,-1.4833,-1.432,-1.367,-1.2888,-1.1982,-1.096,-0.9833,-0.8611,-0.7307,-0.5932,-0.4499,-0.3024,-0.1519,0,0.1519,0.3024,0.4499,0.5932,0.7307,0.8611,0.9833,1.096,1.1982,1.2888,1.367,1.432,1.4833,1.5202,1.5425,1.55],[0,0.1519,0.3024,0.4499,0.5932,0.7307,0.8611,0.9833,1.096,1.1982,1.2888,1.367,1.432,1.4833,1.5202,1.5425,1.55,1.5425,1.5202,1.4833,1.432,1.367,1.2888,1.1982,1.096,0.9833,0.8611,0.7307,0.5932,0.4499,0.3024,0.1519,0,-0.1519,-0.3024,-0.4499,-0.5932,-0.7307,-0.8611,-0.9833,-1.096,-1.1982,-1.2888,-1.367,-1.432,-1.4833,-1.5202,-1.5425,-1.55,-1.5425,-1.5202,-1.4833,-1.432,-1.367,-1.2888,-1.1982,-1.096,-0.9833,-0.8611,-0.7307,-0.5932,-0.4499,-0.3024,-0.1519,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"fixed":true,"highlight":false,"strokeWidth":1.6,"strokeColor":"#344b61","fillColor":"#b8cfdf","fillOpacity":0.38}},
  {"type":"line3d","def":[[0,0,-1.35],[0,0,1.63]],"att":{"fixed":true,"highlight":false,"strokeWidth":2,"strokeColor":"#6b8296","lastArrow":false,"dash":2}},
  {"type":"line3d","def":[[0,0,0],[0,0,1.31]],"att":{"fixed":true,"highlight":false,"strokeWidth":3.2,"strokeColor":"#186b99","lastArrow":true,"dash":0}},
  {"type":"line3d","def":[[0,0,0],[0,0,0.69]],"att":{"fixed":true,"highlight":false,"strokeWidth":3,"strokeColor":"#9a431f","lastArrow":true,"dash":0}},
  {"type":"curve3d","def":[[1.6665,1.6526,1.637,1.6199,1.6012,1.581,1.5593,1.5361,1.5114,1.4853,1.4577,1.4288,1.3984,1.3668,1.3338,1.2996,1.2641,1.2274,1.1895,1.1505,1.1104,1.0692],[0.4255,0.4769,0.5278,0.5782,0.6281,0.6773,0.7259,0.7738,0.821,0.8674,0.9129,0.9576,1.0014,1.0442,1.086,1.1267,1.1664,1.205,1.2424,1.2786,1.3136,1.3473],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"fixed":true,"highlight":false,"strokeWidth":2.35,"strokeColor":"#9a431f"}},
  {"type":"line3d","def":[[1.0692,1.3473,0],[0.8107,1.517,0]],"att":{"fixed":true,"highlight":false,"strokeWidth":2.35,"strokeColor":"#9a431f","lastArrow":true,"dash":0}},
  {"type":"text3d","def":[[0.16,0,1.29],"ω"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#186b99","anchorX":"left"}},
  {"type":"text3d","def":[[0.16,0,0.68],"α"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#9a431f","anchorX":"left"}},
  {"type":"text3d","def":[[0.16,0,1.6],"+z"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"text3d","def":[[-0.28,0,-0.15],"𝑂"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"left"}}
]
```

**Fig. 1.13** The wheel turns counterclockwise as viewed from above and speeds up at a constant angular acceleration. Both $\mechanical{\vec\omega}$ and $\mechanical{\vec\alpha}$ point along the positive rotation axis. Drag to rotate the plot.

We can plug the known parameters into equation (1.35) to get:

$$
\begin{gathered}
\Delta\mechanical{\vec{\theta}} = \mechanical{\vec{\omega}}_0 \Delta t + \frac{1}{2} \mechanical{\vec{\alpha}} \Delta t^2 \\
\Rightarrow \Delta\mechanical{\theta} = 2.0 \, \unit{rad/s} \cdot 2.0 \, \unit{s} + \frac{1}{2} \cdot 3.5 \, \unit{rad/s}^2 \cdot (2.0 \, \unit{s})^2 = 11 \, \unit{rad}.
\end{gathered} \tag{1.36}
$$

Since $2\pi \, \unit{rad} = 1 \, \text{revolution}$, then the number of revolutions $N$ will be

$$
N = \frac{\Delta\mechanical{\theta}}{2\pi} = \frac{11 \, \unit{rad}}{2\pi \, \unit{rad}} = 1.8 \, \text{revolutions}. \tag{1.37}
$$

(b) To solve this part of the problem, we can plug the known values into equation (1.34):

$$
\begin{gathered}
\mechanical{\vec{\omega}} = \mechanical{\vec{\omega}}_0 + \mechanical{\vec{\alpha}} \Delta t \\
\Rightarrow \mechanical{\omega} = 2.0 \, \unit{rad/s} + 3.5 \, \unit{rad/s}^2 \cdot 2.0 \, \unit{s} = 9.0 \, \unit{rad/s}.
\end{gathered} \tag{1.38}
$$

(c) We can now easily find $\mechanical{v}$ at time $t = 2.0 \, \unit{s}$. We have from Equation (1.16):

$$
\mechanical{v} = \mechanical{\omega} \mechanical{r} = 9.0 \, \unit{rad/s} \cdot 2.0 \, \unit{m} = 18 \, \unit{m/s}. \tag{1.39}
$$

Therefore, the centripetal acceleration is (Equation (1.25)):

$$
\mechanical{a}_c = \frac{\mechanical{v}^2}{\mechanical{r}} = \frac{(18 \, \unit{m/s})^2}{2.0 \, \unit{m}} = 162 \, \unit{m/s}^2. \tag{1.40}
$$

The tangential acceleration is (Equation (1.31)):

$$
\mechanical{a}_t = \mechanical{\alpha} \mechanical{r} = 3.5 \, \unit{rad/s}^2 \cdot 2.0 \, \unit{m} = 7.0 \, \unit{m/s}^2. \tag{1.41}
$$

As shown in Figure 1.12, these two are perpendicular to each other, so the magnitude of the total acceleration will be:

$$
\mechanical{a}_{\text{tot}} = \sqrt{\mechanical{a}_t^2 + \mechanical{a}_c^2} = \sqrt{(7.0 \, \unit{m/s}^2)^2 + (162 \, \unit{m/s}^2)^2} = 162.15 \, \unit{m/s}^2, \tag{1.42}
$$

while the direction can be found via the equation:

$$
\tan \mechanical{\theta} = \frac{\mechanical{a}_t}{\mechanical{a}_c} = \frac{7.0 \, \unit{m/s}^2}{162 \, \unit{m/s}^2} = 0.043 \Rightarrow \mechanical{\theta} = 0.04 \, \unit{rad}. \tag{1.43}
$$

## Exercises

1. Derive the rotational kinematic equations in Table 1.1 for constant angular velocity and for constant angular acceleration. Use the corresponding derivations for one-dimensional motion. Plot linear and angular position, velocity, and acceleration against time for all combinations of positive and negative initial velocity and acceleration. Compare the graphs and explain why each pair has the same form.
2. A point moves counterclockwise at constant speed around a circle of radius $\mechanical{r}=1.0\,\unit{m}$. It travels through $120^\circ$ in $\Delta t=10\,\unit{ms}$. Find its angular velocity, linear velocity, and period. Draw the directions of the two velocity vectors at an arbitrary point on the path.
3. A point moves along a circle of radius $0.5\,\unit{m}$ at constant frequency $0.5\,\unit{Hz}$. When it passes $A$, a second point starts from rest at $A$ and moves along diameter $AB$ with constant acceleration. Find the second point’s acceleration if the points meet at $B$ when the first point reaches $B$ for the third time. Find both velocities at the meeting.
4. Two cars start at the same point on a circle of radius $\mechanical{R}=15\,\unit{m}$. Their constant speeds are $\mechanical{v}_1=3.0\,\unit{m\,s^{-1}}$ and $\mechanical{v}_2=2.0\,\unit{m\,s^{-1}}$. Find the first time they meet again when they travel (a) in the same direction and (b) in opposite directions.
5. Equation (1.31) follows by differentiating Equation (1.16). Start with the vector relation in Equation (1.14) instead and differentiate it to obtain the total acceleration.
   - (a) Show that the tangential and centripetal terms are

     $$
     \mechanical{\vec a}_t=\mechanical{\vec\alpha}\times\mechanical{\vec r}
     \tag{1.44}
     $$

     and

     $$
     \mechanical{\vec a}_c
     =\mechanical{\vec\omega}\times
       (\mechanical{\vec\omega}\times\mechanical{\vec r}).
     \tag{1.45}
     $$

   - (b) Compare the magnitude and direction of the centripetal term with Equation (1.25) and the derivation in Section 1.3.1. You can use $\vec A\times(\vec B\times\vec C)=\vec B(\vec A\cdot\vec C)-\vec C(\vec A\cdot\vec B)$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\vec{\alpha}}$ | $\unit{rad\,s^{-2}}$ | Angular acceleration | Rate of change of angular velocity. |
| $\mechanical{\vec{\theta}}$ | $\unit{rad}$ | Angular position | Angle measured from the reference direction. |
| $\mechanical{\vec{\omega}}$ | $\unit{rad\,s^{-1}}$ | Angular velocity or speed | Rate of rotation about the indicated axis. |
| $\mechanical{\vec{a}}$ | $\unit{m\,s^{-2}}$ | Linear acceleration | Rate of change of linear velocity. |
| $\mechanical{\vec{v}}$ | $\unit{m\,s^{-1}}$ | Linear velocity or speed | Velocity or speed of the indicated point. |
| $\mechanical{\vec{x}}$ | $\unit{m}$ | Position coordinate | Position along the indicated axis. |
| $\mechanical{R}$ | $\unit{m}$ | Radius | Radius of the object or path. |
| $\mechanical{\vec{r}}$ | $\unit{m}$ | Radius or position | Distance or position relative to the reference point or axis. |
| $t$ | $\unit{s}$ | Time | Time of the motion. |
