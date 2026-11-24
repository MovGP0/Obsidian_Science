---
title: "3.1 Newton’s Second Law for Rotational Motion"
---

> [!TLDR]
> For fixed-axis motion with constant moment of inertia, net axial torque equals the moment of inertia times angular acceleration.

In Chapter 1, we studied kinematics in the context of rotational motion and learned that there are many parallels to linear (or translational) kinematics. In this chapter, we will develop techniques to study the dynamics of rotating systems by building upon what we already know about torque from Chapter 2 and forces in translational motion. When studying rotational kinematics in Chapter 1, we were given the angular velocity or the angular acceleration but were not concerned with their physical cause. In this chapter, we will discuss how to produce an angular acceleration and thus change the angular velocity.

Let’s remind ourselves of Newton’s Second Law for translational motion:

$$
\Sigma \mechanical{\vec{F}} = \mechanical{m} \mechanical{\vec{a}} \Rightarrow \mechanical{\vec{a}} = \frac{\Sigma \mechanical{\vec{F}}}{\mechanical{m}}. \tag{3.1}
$$

As mentioned previously in Chapter 2, Equation (3.1) says that a net force $\Sigma \mechanical{\vec{F}}$ causes a mass $\mechanical{m}$ to accelerate with an acceleration of $\mechanical{\vec{a}}$. The mass $\mechanical{m}$ expresses how difficult it is to get an object to change its velocity (i.e., accelerate). Given the same $|\Sigma \mechanical{\vec{F}}|$, a greater value of $\mechanical{m}$ results in a smaller value of $|\mechanical{\vec{a}}|$. Also, given that $\mechanical{m}$ is a positive scalar quantity, the direction of the acceleration $\mechanical{\vec{a}}$ will be that of the net force $\Sigma \mechanical{\vec{F}}$.

We will now study how to apply Newton’s Second Law to objects that execute rotational motion. We start by referring back to the case study at the beginning of Chapter 2: A point mass $\mechanical{m}$ attached to the end of a massless but rigid rod (shown again in Figure 3.1). The rod is fixed at one end (i.e., point $O$) in such a way that the mass can only rotate about point $O$ in the plane of the page, with the axis of rotation perpendicular to the page and passing through $O$. We apply a force $\mechanical{\vec{F}}$ to $\mechanical{m}$ which forms an angle $\mechanical{\phi}$ with the position vector $\mechanical{\vec{r}}$ (the vector pointing from the axis of rotation to the point of application of $\mechanical{\vec{F}}$).

![[rotational-motion-fig-3-1.svg|**Fig. 3.1** System of a mass $\mechanical m$ attached to the end of a massless rod. The rod is fixed at one end (i.e., point O) in such a way that the mass can only rotate about point O in the plane of the page, with the axis of rotation perpendicular to the page and passing through O. If the mass rotates, it will transcribe a circle with its center at O. A force $\mechanical{\vec F}$ is exerted at the other end of the rod with $\mechanical{\vec r}$ being the vector from the axis through point O to the point where the force is exerted.|370]]

As discussed in Chapter 2, the component of $\mechanical{\vec F}$ perpendicular to $\mechanical{\vec r}$ causes the mass $\mechanical m$ to start rotating. Apply Newton’s second law in the tangential direction.

$$
\sum\mechanical{F}_t=\mechanical m\mechanical{a}_t \quad\Rightarrow\quad |\mechanical{\vec F}|\sin\mechanical\phi=\mechanical m|\mechanical{\vec a}_t|. \tag{3.2}
$$

Use $\mechanical{a}_t=\mechanical r\mechanical\alpha$, where $\mechanical\alpha$ is the magnitude of the angular acceleration.

$$
|\mechanical{\vec F}|\sin\mechanical\phi=\mechanical m|\mechanical{\vec a}_t|=\mechanical m|\mechanical{\vec r}|\,|\mechanical{\vec\alpha}|. \tag{3.3}
$$

Multiplying both sides by $|\mechanical{\vec r}|$ gives the magnitude of the torque on the left. The right-hand side is the product of the point mass’s moment of inertia about the axis, $\mechanical I=\mechanical m\mechanical r^2$ in $\unit{kg\,m^2}$, and the magnitude of the angular acceleration.

$$
\begin{aligned}
|\mechanical{\vec F}|\sin\mechanical\phi
&=\mechanical m|\mechanical{\vec r}|\,|\mechanical{\vec\alpha}| \\
\underbrace{|\mechanical{\vec r}|\,|\mechanical{\vec F}|\sin\mechanical\phi}_{|\mechanical{\vec\tau}|}
&=\underbrace{\mechanical m|\mechanical{\vec r}|^2}_{\mechanical I}
  |\mechanical{\vec\alpha}| \\
|\mechanical{\vec\tau}|&=\mechanical I|\mechanical{\vec\alpha}|.
\end{aligned} \tag{3.4}
$$

In the case of multiple forces, there could in principle be multiple torques on the mass about the same axis of rotation. We would then have to add all of the torques together to get the total angular acceleration. Thus, for rotational motion, we have a similar expression to Equation (3.1):

$$
\Sigma \mechanical{\vec {\tau}} = \mechanical{I} \mechanical{\vec {\alpha}} , \tag{3.5}
$$

for a constant $\mechanical I$. This vector form follows here because the point mass moves in a plane perpendicular to the fixed axis, so both $\mechanical{\vec\tau}$ and $\mechanical{\vec\alpha}$ lie along the axis. For a general rigid body about a fixed axis, only the axial component holds, $\Sigma\mechanical{\tau}_z=\mechanical I_z\mechanical{\alpha}_z$, because the bearings can supply torque perpendicular to the axis. Recovering the vector Equation (3.5) from the magnitude Equation (3.4) is straightforward, since in this case the moment of inertia $\mechanical I$ is a positive scalar.[^inertia-tensor] So, just like with Newton’s Second Law for translational motion, the direction of the net torque determines the direction of the angular acceleration. In other words, just as we know that forces cause linear accelerations with the net force and the linear acceleration having the same direction, in rotational motion we see that torques cause angular accelerations with the net torque and angular acceleration having the same direction. This is Newton’s Second Law for rotational motion. A more mathematical way of obtaining Equation (3.5) is left as an exercise at the end of this chapter (a third way will also be given when we study angular momentum).

## 3.1.1 Notes on Newton’s Second Law for Rotational Motion

(i) Though we will spend a whole chapter on the concept of the moment of inertia $\mechanical I$, let's briefly discuss it here. In Equation (3.5), $\mechanical I$ plays the role of $\mechanical m$ in Equation (3.1). Mass is the constant of proportionality between the net force and the acceleration. Given the same net force on two different masses, the smaller mass will have the greater acceleration. Alternatively, for two different masses to obtain the same acceleration, the larger mass will require a larger net force. So, $\mechanical m$ indicates how hard it is to accelerate something. $\mechanical I$ plays the same role for rotation. If we apply the same net torque to two different objects, the one with the smaller moment of inertia will rotate with the greater angular acceleration. Alternatively, if we wish to have the two objects rotate with the same angular acceleration, the object with the larger $\mechanical I$ will require a greater net torque and, thus, will be more difficult to rotate.

(ii) The above derivation found that $\mechanical I=\mechanical m\mechanical r^2$. This formula is true for a point mass only. We see that $\mechanical I$ depends not just on the mass but also on the distance $\mechanical r$ between the mass and the axis of rotation. Objects with greater mass require a greater torque to obtain the same angular acceleration if they have the same $\mechanical r$. Alternatively, objects of the same mass will require different torques to obtain the same angular acceleration if they are located at different distances away from the axis of rotation. The mass with the greater distance from the axis of rotation will require more torque to achieve the same angular acceleration. In the next chapter, we will see that different objects have different moments of inertia. Nevertheless, $\mechanical I$ is positive for the bodies considered here and depends both on the mass of the object and on how this mass is distributed about the axis of rotation.

(iii) Recall that $\sum\mechanical{\vec F}=\mechanical m\mechanical{\vec a}$ was derived from the more general form $\sum\mechanical{\vec F}=d\mechanical{\vec p}/dt$, where $\mechanical{\vec p}$ is the linear momentum. The form $\sum\mechanical{\vec F}=\mechanical m\mechanical{\vec a}$ assumes constant mass. Similarly, $\sum\mechanical{\vec\tau}=\mechanical I\mechanical{\vec\alpha}$ follows from $\sum\mechanical{\vec\tau}=d\mechanical{\vec L}/dt$ for fixed-axis motion with constant $\mechanical I$, where $\mechanical{\vec L}$ is angular momentum. We will see this derivation in Chapter 5.

(iv) Since $\mechanical I>0$ and the axis of rotation is fixed, the axial net torque and the angular acceleration point in the same direction whenever they are nonzero. The analogous statement for translation follows from $\mechanical m>0$.

(v) For a positive constant moment of inertia $\mechanical I$, Equation (3.5) gives the following cases.

(a) If

$$
\Sigma \mechanical{\vec {\tau}} = 0 \Leftrightarrow \mechanical{\vec {\alpha}} = 0 ,
$$

which means that the object is either stationary or moving with constant angular velocity $\mechanical{\vec\omega}$.

(b) If

$$
\Sigma \mechanical{\vec {\tau}} = \text {constant} \neq 0 \Leftrightarrow \mechanical{\vec {\alpha}} = \text {constant} \neq 0 ,
$$

then we have rotational motion with constant $\mechanical{\vec\alpha}$.

(c) If the net torque is not constant but is a function of position then, since $\mechanical I$ is constant, $\mechanical{\vec\alpha}$ is not constant and is also a function of position.

(d) If the net torque is not constant but is a function of time then, since $\mechanical I$ is constant, $\mechanical{\vec\alpha}$ is not constant and is also a function of time.

We looked at case (a) when we studied equilibrium in Chapter 2. Now we will focus on case (b). In cases (a) and (b), Equation (3.5) can thus be combined with the kinematics equations for rotational motion from Chapter 1. The methodology used is the same as when we used Newton’s Second Law (Equation (3.1)) combined with the kinematics equations in translational motion. Cases (c) and (d) can be studied more easily using the Work-Kinetic Energy Theorem and the Momentum-Impulse Theorem as they apply to rotational motion, which we will study in later chapters.

**Example 1. Torque on a horizontal disk.** A homogeneous disk of mass $\mechanical M=2.0\,\unit{kg}$ and radius $\mechanical R=0.5\,\unit m$ is initially at rest on a smooth horizontal surface. It can rotate without friction about a vertical $z$ axis through its center. At $t_0=0$, a tangential force of magnitude $\mechanical F=100\,\unit N$ acts at the rim and causes counterclockwise rotation as viewed from above. Find (a) the angular acceleration $\mechanical{\vec\alpha}$, (b) the centripetal acceleration of a point on the rim at $t_1=2.0\,\unit s$, and (c) the number of complete turns from $t_0$ to $t_1$. The moment of inertia about the $z$ axis is $\mechanical I_z=0.25\,\unit{kg\,m^2}$.

```graph3d
bounds: [-1.72, 1.04, 1.72, -1.04]
bounds3d: [[-1.8,1.8],[-1.7,1.7],[-1.02,1.93]]
height: 365
width: 670
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
  el: {slider: {start: 0.71, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"curve3d","def":[[1.42,1.414596,1.398427,1.371615,1.334364,1.286957,1.229756,1.163196,1.087783,1.004092,0.912758,0.814479,0.71,0.600118,0.485669,0.367523,0.24658,0.123761,0.0,-0.123761,-0.24658,-0.367523,-0.485669,-0.600118,-0.71,-0.814479,-0.912758,-1.004092,-1.087783,-1.163196,-1.229756,-1.286957,-1.334364,-1.371615,-1.398427,-1.414596,-1.42,-1.414596,-1.398427,-1.371615,-1.334364,-1.286957,-1.229756,-1.163196,-1.087783,-1.004092,-0.912758,-0.814479,-0.71,-0.600118,-0.485669,-0.367523,-0.24658,-0.123761,-0.0,0.123761,0.24658,0.367523,0.485669,0.600118,0.71,0.814479,0.912758,1.004092,1.087783,1.163196,1.229756,1.286957,1.334364,1.371615,1.398427,1.414596,1.42],[0.0,0.123761,0.24658,0.367523,0.485669,0.600118,0.71,0.814479,0.912758,1.004092,1.087783,1.163196,1.229756,1.286957,1.334364,1.371615,1.398427,1.414596,1.42,1.414596,1.398427,1.371615,1.334364,1.286957,1.229756,1.163196,1.087783,1.004092,0.912758,0.814479,0.71,0.600118,0.485669,0.367523,0.24658,0.123761,0.0,-0.123761,-0.24658,-0.367523,-0.485669,-0.600118,-0.71,-0.814479,-0.912758,-1.004092,-1.087783,-1.163196,-1.229756,-1.286957,-1.334364,-1.371615,-1.398427,-1.414596,-1.42,-1.414596,-1.398427,-1.371615,-1.334364,-1.286957,-1.229756,-1.163196,-1.087783,-1.004092,-0.912758,-0.814479,-0.71,-0.600118,-0.485669,-0.367523,-0.24658,-0.123761,-0.0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#344b61","strokeWidth":1.7,"fixed":true,"highlight":false,"dash":0,"fillColor":"#b8cfdf","fillOpacity":0.37}},
  {"type":"line3d","def":[[0,0,-0.87],[0,0,1.78]],"att":{"strokeColor":"#6b8296","strokeWidth":1.4,"lastArrow":true,"dash":2,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[0,0,0.45]],"att":{"strokeColor":"#186b99","strokeWidth":2.7,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.11,0,0.4],"𝑛"],"att":{"strokeColor":"#186b99","fontSize":16,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[0,0,-0.53]],"att":{"strokeColor":"#994521","strokeWidth":3.0,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.14,0,-0.45],"Weight"],"att":{"strokeColor":"#994521","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0.48],[0,0,1.02]],"att":{"strokeColor":"#186b99","strokeWidth":2.6,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.16,0,0.94],"α"],"att":{"strokeColor":"#186b99","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,1.01],[0,0,1.53]],"att":{"strokeColor":"#994521","strokeWidth":2.6,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.14,0,1.47],"Στ"],"att":{"strokeColor":"#994521","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.11,0,1.78],"+z"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"point3d","def":[0,0,0],"att":{"fixed":true,"highlight":false,"size":3,"withLabel":false,"fillColor":"#344b61","strokeColor":"#344b61"}},
  {"type":"text3d","def":[[-0.15,0.05,0.025],"𝑂"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.163196,-0.814479,0],[-0.790371,-1.346928,0]],"att":{"strokeColor":"#2b7354","strokeWidth":3.0,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.86,-1.58,-0.03],"𝐹"],"att":{"strokeColor":"#2b7354","fontSize":16,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[-1.163196,-0.814479,0]],"att":{"strokeColor":"#344b61","strokeWidth":1.7,"lastArrow":false,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.684862,-0.493529,0.13],"𝑅"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.081772,-0.757465,0.006],[-1.021546,-0.843476,0.006]],"att":{"strokeColor":"#344b61","strokeWidth":1.3,"lastArrow":false,"dash":0,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.021546,-0.843476,0.006],[-1.10297,-0.90049,0.006]],"att":{"strokeColor":"#344b61","strokeWidth":1.3,"lastArrow":false,"dash":0,"fixed":true,"highlight":false}}
]
```

**Fig. 3.2** A horizontal disk can turn about the vertical axis through its center. Its weight $\mechanical{\vec F}_g$ and the normal force $\mechanical{\vec n}$ act along the axis. The applied force $\mechanical{\vec F}$ acts tangentially at the rim, producing a net torque and angular acceleration along $+z$. Drag to rotate the plot.

(a) We apply Newton’s Second Law for rotational motion on the rotating disk, noting that the subscript $z$ on the net torque $\sum\mechanical{\vec\tau}$ identifies the rotation axis, as explained in Chapter 2. For the three forces shown in Figure 3.2, we get:

$$
\sum\mechanical{\vec\tau}_z
=\underbrace{\mechanical{\vec\tau}_{F_g}}_0
+\underbrace{\mechanical{\vec\tau}_n}_0
+\mechanical{\vec\tau}_F
=\mechanical{I}_z\mechanical{\vec\alpha}.
\tag{3.6}
$$

The gravitational force $\mechanical{\vec F}_g$ and normal force $\mechanical{\vec n}$ act at the axis, so each produces zero torque about $z$. The applied force $\mechanical{\vec F}$ acts tangentially at the rim and produces the net torque. It turns the disk counterclockwise as viewed from above. Both the net torque and angular acceleration point along $+z$.

$$
\begin{aligned}
\mechanical{\tau}_F &= \mechanical I_z\mechanical{\alpha},\\
\mechanical R\mechanical F\sin(\pi/2) &= \mechanical I_z\mechanical{\alpha},\\
\mechanical{\alpha}
&=\frac{\mechanical R\mechanical F}{\mechanical I_z}
=\frac{(0.5\,\unit{m})(100\,\unit{N})}{0.25\,\unit{kg\,m^2}}
=200\,\unit{rad\,s^{-2}}.
\end{aligned}
\tag{3.7}
$$

(b) The magnitude $\mechanical{\tau}_F=\mechanical R\mechanical F\sin\mechanical\phi$ stays constant because the force, radius, and angle are constant. The direction of $\sum\mechanical{\vec\tau}$ also stays constant by the right-hand rule. The angular acceleration $\mechanical{\vec\alpha}$ is therefore constant, so the equations from Chapter 1 apply.

$$
\Delta \mechanical{\theta} = \mechanical{\omega}_{0} \Delta t + \frac {1} {2} \mechanical{\alpha} \Delta t^{2} , \tag{3.8}
$$

and

$$
\mechanical{\omega} = \mechanical{\omega}_{0} + \mechanical{\alpha} \Delta t . \tag{3.9}
$$

Both angular quantities are axial and positive in this problem. The disk starts from rest, so $\mechanical\omega_0=0$. Use Equation (3.9) at $t_1=2.0\,\unit s$.

$$
\mechanical\omega_1=\mechanical\alpha\Delta t=\mechanical\alpha(t_1-t_0)=(200\,\unit{rad\,s^{-2}})(2.0\,\unit s)=400\,\unit{rad\,s^{-1}}. \tag{3.10}
$$

At that moment, therefore, $\mechanical{v}_{1}$ at the rim is

$$
\mechanical v_1=\mechanical\omega_1\mechanical R=(400\,\unit{rad\,s^{-1}})(0.5\,\unit m)=200\,\unit{m\,s^{-1}}. \tag{3.11}
$$

Consequently, we get for the centripetal acceleration

$$
\mechanical a_c=\frac{\mechanical v_1^2}{\mechanical R}=\frac{(200\,\unit{m\,s^{-1}})^2}{0.5\,\unit m}=8\times10^4\,\unit{m\,s^{-2}}. \tag{3.12}
$$

(c) At $t_1=2.0\,\unit s$, Equation (3.8) with $\mechanical\omega_0=0$ gives the angular displacement.

$$
\Delta\mechanical\theta=\tfrac12\mechanical\alpha(\Delta t)^2=\tfrac12(200\,\unit{rad\,s^{-2}})(2.0\,\unit s)^2=400\,\unit{rad}. \tag{3.13}
$$

So, for the number of complete revolutions we have:

$$
N=\frac{\Delta\mechanical\theta}{2\pi\,\unit{rad}}=\frac{400\,\unit{rad}}{2\pi\,\unit{rad}}=\frac{200}{\pi}\approx63.7\text{ revolutions}. \tag{3.14}
$$

This means the disk has completed 63 full revolutions.

**Example 2. Mass on a rotating horizontal disk.** A homogeneous disk of mass $\mechanical M=4.0\,\unit{kg}$ and radius $\mechanical R=2.0\,\unit m$ rests on a smooth horizontal surface. It rotates at an initial angular speed $\mechanical\omega_0=1.0\,\unit{rad\,s^{-1}}$ about the vertical $z$ axis through its center. A point mass $\mechanical m=1.0\,\unit{kg}$ is placed on the disk at a distance $\mechanical r=1.0\,\unit m$ from its center. The coefficient of static friction between the mass and the disk is $\mechanical\mu_s=0.8$.

At $t_0=0$, two equal tangential forces act in opposite directions at diametrically opposite points on the rim. The torque they produce has the same direction as $\mechanical{\vec\omega}_0$. The measured magnitude of the resulting angular acceleration is $\mechanical\alpha=2.0\,\unit{rad\,s^{-2}}$. Find (a) the magnitude of each force and (b) the time $t$ at which the mass is about to slide. Use $\mechanical g=10\,\unit{m\,s^{-2}}$ and $\mechanical I_z=8.0\,\unit{kg\,m^2}$ for the disk.

```graph3d
bounds: [-1.72, 1.04, 1.72, -1.04]
bounds3d: [[-1.8,1.8],[-1.7,1.7],[-1.02,1.93]]
height: 365
width: 670
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
  az: {slider: {start: 2.51, visible: false}, pointer: {enabled: true}}
  el: {slider: {start: 0.71, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"curve3d","def":[[1.42,1.414596,1.398427,1.371615,1.334364,1.286957,1.229756,1.163196,1.087783,1.004092,0.912758,0.814479,0.71,0.600118,0.485669,0.367523,0.24658,0.123761,0.0,-0.123761,-0.24658,-0.367523,-0.485669,-0.600118,-0.71,-0.814479,-0.912758,-1.004092,-1.087783,-1.163196,-1.229756,-1.286957,-1.334364,-1.371615,-1.398427,-1.414596,-1.42,-1.414596,-1.398427,-1.371615,-1.334364,-1.286957,-1.229756,-1.163196,-1.087783,-1.004092,-0.912758,-0.814479,-0.71,-0.600118,-0.485669,-0.367523,-0.24658,-0.123761,-0.0,0.123761,0.24658,0.367523,0.485669,0.600118,0.71,0.814479,0.912758,1.004092,1.087783,1.163196,1.229756,1.286957,1.334364,1.371615,1.398427,1.414596,1.42],[0.0,0.123761,0.24658,0.367523,0.485669,0.600118,0.71,0.814479,0.912758,1.004092,1.087783,1.163196,1.229756,1.286957,1.334364,1.371615,1.398427,1.414596,1.42,1.414596,1.398427,1.371615,1.334364,1.286957,1.229756,1.163196,1.087783,1.004092,0.912758,0.814479,0.71,0.600118,0.485669,0.367523,0.24658,0.123761,0.0,-0.123761,-0.24658,-0.367523,-0.485669,-0.600118,-0.71,-0.814479,-0.912758,-1.004092,-1.087783,-1.163196,-1.229756,-1.286957,-1.334364,-1.371615,-1.398427,-1.414596,-1.42,-1.414596,-1.398427,-1.371615,-1.334364,-1.286957,-1.229756,-1.163196,-1.087783,-1.004092,-0.912758,-0.814479,-0.71,-0.600118,-0.485669,-0.367523,-0.24658,-0.123761,-0.0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#344b61","strokeWidth":1.7,"fixed":true,"highlight":false,"dash":0,"fillColor":"#b8cfdf","fillOpacity":0.37}},
  {"type":"curve3d","def":[[0.71,0.707298,0.699214,0.685807,0.667182,0.643479,0.614878,0.581598,0.543892,0.502046,0.456379,0.407239,0.355,0.300059,0.242834,0.183762,0.12329,0.061881,0.0,-0.061881,-0.12329,-0.183762,-0.242834,-0.300059,-0.355,-0.407239,-0.456379,-0.502046,-0.543892,-0.581598,-0.614878,-0.643479,-0.667182,-0.685807,-0.699214,-0.707298,-0.71,-0.707298,-0.699214,-0.685807,-0.667182,-0.643479,-0.614878,-0.581598,-0.543892,-0.502046,-0.456379,-0.407239,-0.355,-0.300059,-0.242834,-0.183762,-0.12329,-0.061881,-0.0,0.061881,0.12329,0.183762,0.242834,0.300059,0.355,0.407239,0.456379,0.502046,0.543892,0.581598,0.614878,0.643479,0.667182,0.685807,0.699214,0.707298,0.71],[0.0,0.061881,0.12329,0.183762,0.242834,0.300059,0.355,0.407239,0.456379,0.502046,0.543892,0.581598,0.614878,0.643479,0.667182,0.685807,0.699214,0.707298,0.71,0.707298,0.699214,0.685807,0.667182,0.643479,0.614878,0.581598,0.543892,0.502046,0.456379,0.407239,0.355,0.300059,0.242834,0.183762,0.12329,0.061881,0.0,-0.061881,-0.12329,-0.183762,-0.242834,-0.300059,-0.355,-0.407239,-0.456379,-0.502046,-0.543892,-0.581598,-0.614878,-0.643479,-0.667182,-0.685807,-0.699214,-0.707298,-0.71,-0.707298,-0.699214,-0.685807,-0.667182,-0.643479,-0.614878,-0.581598,-0.543892,-0.502046,-0.456379,-0.407239,-0.355,-0.300059,-0.242834,-0.183762,-0.12329,-0.061881,-0.0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.3,"fixed":true,"highlight":false,"dash":2}},
  {"type":"line3d","def":[[0,0,-0.87],[0,0,1.78]],"att":{"strokeColor":"#6b8296","strokeWidth":1.4,"lastArrow":true,"dash":2,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[0,0,0.45]],"att":{"strokeColor":"#186b99","strokeWidth":2.7,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.11,0,0.4],"𝑛"],"att":{"strokeColor":"#186b99","fontSize":16,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[0,0,-0.53]],"att":{"strokeColor":"#994521","strokeWidth":3.0,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.14,0,-0.57],"Disk weight"],"att":{"strokeColor":"#994521","fontSize":16,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0.48],[0,0,1.02]],"att":{"strokeColor":"#186b99","strokeWidth":2.6,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.16,0,0.94],"ω₀"],"att":{"strokeColor":"#186b99","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,1.01],[0,0,1.53]],"att":{"strokeColor":"#994521","strokeWidth":2.6,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.14,0,1.47],"Στ"],"att":{"strokeColor":"#994521","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.11,0,1.78],"+z"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"point3d","def":[0,0,0],"att":{"fixed":true,"highlight":false,"size":3,"withLabel":false,"fillColor":"#344b61","strokeColor":"#344b61"}},
  {"type":"text3d","def":[[-0.15,0.05,0.025],"𝑂"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.163196,-0.814479,0],[-0.790371,-1.346928,0]],"att":{"strokeColor":"#2b7354","strokeWidth":3.0,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.86,-1.58,-0.03],"𝐹"],"att":{"strokeColor":"#2b7354","fontSize":16,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[-1.163196,-0.814479,0]],"att":{"strokeColor":"#344b61","strokeWidth":1.7,"lastArrow":false,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.684862,-0.493529,0.13],"𝑅"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.081772,-0.757465,0.006],[-1.021546,-0.843476,0.006]],"att":{"strokeColor":"#344b61","strokeWidth":1.3,"lastArrow":false,"dash":0,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.021546,-0.843476,0.006],[-1.10297,-0.90049,0.006]],"att":{"strokeColor":"#344b61","strokeWidth":1.3,"lastArrow":false,"dash":0,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1.163196,0.814479,0],[0.790371,1.346928,0]],"att":{"strokeColor":"#2b7354","strokeWidth":3.0,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.870371,1.346928,0.1],"𝐹"],"att":{"strokeColor":"#2b7354","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[0.71,0,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.4,"lastArrow":false,"dash":2,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.27,-0.05,0.11],"𝑟"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"point3d","def":[0.71,0,0],"att":{"fixed":true,"highlight":false,"size":5.2,"withLabel":false,"fillColor":"#344b61","strokeColor":"#344b61"}},
  {"type":"text3d","def":[[0.85,-0.06,0.12],"𝑚"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.71,0,0],[0.71,0,0.46]],"att":{"strokeColor":"#186b99","strokeWidth":2.4,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.60,0,0.49],"nₘ"],"att":{"strokeColor":"#186b99","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.71,0,0],[0.71,0,-0.44]],"att":{"strokeColor":"#994521","strokeWidth":2.4,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.84,-0.05,-0.52],"Mass weight"],"att":{"strokeColor":"#994521","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.71,0,0],[0.31,0,0]],"att":{"strokeColor":"#2b7354","strokeWidth":2.7,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.34,-0.08,0.17],"fₛᵣ"],"att":{"strokeColor":"#2b7354","fontSize":16,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.71,0,0],[0.71,0.5,0]],"att":{"strokeColor":"#2b7354","strokeWidth":2.7,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.79,0.61,0.04],"fₛₜ"],"att":{"strokeColor":"#2b7354","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}}
]
```

**Fig. 3.3** Two tangential forces act on opposite sides of the disk. Static friction on the point mass has a radial component $\mechanical{\vec f}_{sr}$ toward the axis and a tangential component $\mechanical{\vec f}_{st}$ in the direction of angular acceleration. The dashed circle marks the path of the mass while it moves with the disk. Drag to rotate the plot.

(a) Draw the forces on both objects. For the mass $\mechanical m$, these are the gravitational force $\mechanical{\vec F}_{gm}$, the normal force $\mechanical{\vec n}_m$ from the disk, and the static friction $\mechanical{\vec f}_s$. The radial component $\mechanical{\vec f}_{sr}$ supplies the centripetal force, and the tangential component $\mechanical{\vec f}_{st}$ prevents tangential slipping.

For clarity, the figure shows the two applied forces $\mechanical{\vec F}$, gravity $\mechanical{\vec F}_g$, and the normal force $\mechanical{\vec n}$ from the smooth surface on the disk. Newton’s third law determines the forces from the mass on the disk through the action–reaction pairs $\mechanical{\vec n}_m=-\mechanical{\vec n}'_m$, $\mechanical{\vec f}_{sr}=-\mechanical{\vec f}'_{sr}$, and $\mechanical{\vec f}_{st}=-\mechanical{\vec f}'_{st}$.

Until the mass slips, both objects have the same angular acceleration about $z$, so $\mechanical{\vec\alpha}_{\mathrm{disk}}=\mechanical{\vec\alpha}_m=\mechanical{\vec\alpha}$. Apply Newton’s second law for rotational motion to each object separately.

For the mass $\mechanical m$.

$$
\sum\mechanical{\vec\tau}_z=\mechanical{\vec\tau}_{F_{gm}}+\mechanical{\vec\tau}_{n_m}+\mechanical{\vec\tau}_{f_{sr}}+\mechanical{\vec\tau}_{f_{st}}=\mechanical I_m\mechanical{\vec\alpha}. \tag{3.15}
$$

For the disk:

$$
\begin{aligned}
\sum\mechanical{\vec\tau}_z
&=\mechanical{\vec\tau}_{F_g}+\mechanical{\vec\tau}_{n}
+\mechanical{\vec\tau}_{n'_m}+\mechanical{\vec\tau}_{f'_{sr}}
+\mechanical{\vec\tau}_{f'_{st}}+\mechanical{\vec\tau}_F+\mechanical{\vec\tau}_F \\
&=\mechanical I_{\mathrm{disk}}\mechanical{\vec\alpha}.
\end{aligned} \tag{3.16}
$$

Add Equations (3.15) and (3.16). The torques from the action–reaction pairs cancel because the forces act at the same contact point. Thus $\mechanical{\vec\tau}_{n_m}=-\mechanical{\vec\tau}_{n'_m}$, $\mechanical{\vec\tau}_{f_{sr}}=-\mechanical{\vec\tau}_{f'_{sr}}$, and $\mechanical{\vec\tau}_{f_{st}}=-\mechanical{\vec\tau}_{f'_{st}}$.

$$
\sum\mechanical{\vec\tau}_{z,\mathrm{tot}}
=\mechanical{\vec\tau}_{F_{gm}}+\mechanical{\vec\tau}_{F_g}+\mechanical{\vec\tau}_{n}
+\mechanical{\vec\tau}_F+\mechanical{\vec\tau}_F
=(\mechanical I_m+\mechanical I_{\mathrm{disk}})\mechanical{\vec\alpha}. \tag{3.17}
$$

The gravitational forces $\mechanical{\vec F}_{gm}$ and $\mechanical{\vec F}_g$ and the normal force $\mechanical{\vec n}$ are parallel to the $z$ axis, so their axial torque components vanish. Both applied forces produce positive torque about $z$. The point mass has moment of inertia $\mechanical I_m=\mechanical m\mechanical r^2$.

$$
\begin{aligned}
\sum\mechanical\tau_{z,\mathrm{tot}}
&=(\mechanical I_{\mathrm{disk}}+\mechanical m\mechanical r^2)\mechanical\alpha \\
\Rightarrow 2\mechanical R\mechanical F\sin(\pi/2)
&=(\mechanical I_{\mathrm{disk}}+\mechanical m\mechanical r^2)\mechanical\alpha \\
\Rightarrow 2(2.0\,\unit m)\mechanical F
&=[8.0\,\unit{kg\,m^2}+(1.0\,\unit{kg})(1.0\,\unit m)^2](2.0\,\unit{rad\,s^{-2}}) \\
\Rightarrow \mechanical F&=4.5\,\unit N.
\end{aligned} \tag{3.18}
$$

(b) Now our focus is on the mass $\mechanical m$ and the time $t$ at which it starts slipping.

$$
\mechanical{\vec {f}}_{s} = \mechanical{\vec {f}}_{s t} + \mechanical{\vec {f}}_{s r} , \tag{3.19}
$$

The tangential component $\mechanical{\vec f}_{st}$ is perpendicular to the radial component $\mechanical{\vec f}_{sr}$, so

$$
\mechanical{f}_{s} = \sqrt {\mechanical{f}_{s t}^{2} + \mechanical{f}_{s r}^{2}} . \tag{3.20}
$$

Apply Newton’s second law using $\mechanical a_t=\mechanical\alpha\mechanical r$, $\mechanical v=\mechanical\omega\mechanical r$, and $\mechanical a_r=\mechanical v^2/\mechanical r$.

$$
\begin{aligned}
\Sigma \mechanical{\vec {F}}_{t} & = \mechanical{m} \mechanical{\vec {a}}_{t} \\ \Rightarrow \mechanical{f}_{s t} & = \mechanical{m} \mechanical{a}_{t} = \mechanical{m} \mechanical{\alpha} \mechanical{r} ,
\end{aligned} \tag{3.21}
$$

and

$$
\begin{aligned}
\Sigma \mechanical{\vec {F}}_{r} & = \mechanical{m} \mechanical{\vec {a}}_{r} \\ \Rightarrow \mechanical{f}_{s r} & = \frac {\mechanical{m} \mechanical{v}^{2}} {\mechanical{r}} = \mechanical{m} \mechanical{\omega}^{2} \mechanical{r} .
\end{aligned} \tag{3.22}
$$

Thus,

$$
\mechanical{f}_{s} = \sqrt {\mechanical{f}_{s t}^{2} + \mechanical{f}_{s r}^{2}} = \sqrt {( \mechanical{m} \mechanical{\alpha} \mechanical{r} )^{2} + ( \mechanical{m} \mechanical{\omega}^{2} \mechanical{r} )^{2}} . \tag{3.23}
$$

At the instant the mass is about to slide, the static friction reaches $\mechanical f_{s,\max}=\mechanical\mu_s\mechanical n_m=\mechanical\mu_s\mechanical m\mechanical g$. The last step follows from vertical equilibrium of the mass. Combine this with Equation (3.23).

$$
\begin{aligned}
\mechanical\mu_s\mechanical m\mechanical g
&=\sqrt{(\mechanical m\mechanical\alpha\mechanical r)^2+(\mechanical m\mechanical\omega^2\mechanical r)^2} \\
\Rightarrow(\mechanical\mu_s\mechanical g)^2
&=(\mechanical\alpha\mechanical r)^2+\mechanical\omega^4\mechanical r^2 \\
\Rightarrow\mechanical\omega
&=\left[\frac{(\mechanical\mu_s\mechanical g)^2-(\mechanical\alpha\mechanical r)^2}{\mechanical r^2}\right]^{1/4} \\
&=\left[\frac{(0.8\cdot10\,\unit{m\,s^{-2}})^2-(2.0\,\unit{rad\,s^{-2}}\cdot1.0\,\unit m)^2}{(1.0\,\unit m)^2}\right]^{1/4}
\approx2.8\,\unit{rad\,s^{-1}}.
\end{aligned} \tag{3.24}
$$

Use the equations for constant angular acceleration to find the time $t$ when the disk reaches angular speed $\mechanical\omega$.

$$
\Delta \mechanical{\theta} = \mechanical{\omega}_{0} \Delta t + \frac {1} {2} \mechanical{\alpha} \Delta t^{2} , \tag{3.25}
$$

$$
\mechanical{\omega} = \mechanical{\omega}_{0} + \mechanical{\alpha} \Delta t . \tag{3.26}
$$

Again, since all vectors in this problem are positive and along the z axis, we have written these equations in terms of magnitudes only. From Equation (3.26) we have:

$$
2.8\,\unit{rad\,s^{-1}}=1.0\,\unit{rad\,s^{-1}}+(2.0\,\unit{rad\,s^{-2}})(t-0)\quad\Rightarrow\quad t\approx0.9\,\unit s. \tag{3.27}
$$

**Example 3. A swinging rod and mass.** A thin uniform rod $OA$ has mass $\mechanical M=1.0\,\unit{kg}$ and length $\mechanical L=1.0\,\unit m$. A small point mass $\mechanical m=0.1\,\unit{kg}$ is attached at the far end $A$. A hinge connects end $O$ to a vertical wall and allows the rod to rotate without friction about a horizontal axis through $O$, perpendicular to the plane of the diagram. The rod is released from rest from its horizontal position at $t_0=0$.

- (a) Find the magnitude of the angular acceleration as a function of the angle $\mechanical\beta$ between the rod and its initial horizontal position. Sketch it over $0\leq\mechanical\beta\leq\pi/2$.
- (b) Explain why $\mechanical R_x=0$ at release and $\mechanical R_x\ne0$ for $0<\mechanical\beta<\pi/2$.
- (c) Find the tangential acceleration of midpoint $B$ just before the rod reaches the wall in the vertical position.
- (d) Determine whether a box initially placed on midpoint $B$ separates from the rod as it starts to rotate.

Use $\mechanical g=10\,\unit{m\,s^{-2}}$. The moment of inertia of the rod and mass about $O$ is $\mechanical I_{\mathrm{system}}=\tfrac{13}{30}\,\unit{kg\,m^2}$.

![[rotational-motion-fig-3-4.svg|**Fig. 3.4** (a) A thin uniform rod OA has a mass m attached to one end while the other end is attached to the wall via a junction. The rod can rotate about a horizontal axis that goes through point O and is perpendicular to the rod and the plane of this page. At $t_0=0$, the rod is released from its initial horizontal position. (b) All the forces exerted at some arbitrary time t > 0 while the rod and mass are swinging, and the rod forms an angle $\mechanical{\beta}$ with its initial, horizontal position.|595]]

(a) Draw the forces on the rod at time $t>0$ and choose the axes as shown in Fig. 3.4b. The hinge reaction $\mechanical{\vec R}$ has components $\mechanical{\vec R}_x$ and $\mechanical{\vec R}_y$. The gravitational forces are $\mechanical{\vec F}_{g,\mathrm{rod}}$ on the rod and $\mechanical{\vec F}_{g,\mathrm{mass}}$ on the attached mass. Both hinge reaction components act at $O$, so they produce zero torque about the rotation axis.

The rod and the attached mass move together as one body. Apply Newton’s second law for rotational motion.

$$
\begin{aligned}
\sum\mechanical{\vec\tau}_O &=\mechanical I_{\mathrm{system}}\mechanical{\vec\alpha},\\
\underbrace{\mechanical{\tau}_{R_x}}_0+\underbrace{\mechanical{\tau}_{R_y}}_0
-\mechanical{\tau}_{F_{g,\mathrm{rod}}}-\mechanical{\tau}_{F_{g,\mathrm{mass}}}
&=-\mechanical I_{\mathrm{system}}\mechanical\alpha,\\
\mechanical M\mechanical g\frac{\mechanical L}{2}\cos\mechanical\beta
+\mechanical m\mechanical g\mechanical L\cos\mechanical\beta
&=\mechanical I_{\mathrm{system}}\mechanical\alpha,\\
\mechanical\alpha&=
\frac{\mechanical L\mechanical g\cos\mechanical\beta}{\mechanical I_{\mathrm{system}}}
\left(\frac{\mechanical M}{2}+\mechanical m\right)\\
&=\frac{(1.0\,\unit m)(10\,\unit{m\,s^{-2}})\cos\mechanical\beta}
{(13/30)\,\unit{kg\,m^2}}\left(\frac{1.0\,\unit{kg}}{2}+0.1\,\unit{kg}\right)\\
&=13.8\cos\mechanical\beta\,\unit{rad\,s^{-2}}.
\end{aligned}
\tag{3.28}
$$

```graph
bounds: [-0.22, 15.9, 1.99, -3.2]
height: 290
width: 595
axis: false
drag: false
showNavigation: false
keepAspectRatio: false
elements: [
  {"type":"line","def":[[0,0],[1.79,0]],"att":{"fixed":true,"highlight":false,"strokeWidth":2.4,"strokeColor":"#344b61","straightFirst":false,"straightLast":false,"lastArrow":true}},
  {"type":"line","def":[[0,0],[0,15]],"att":{"fixed":true,"highlight":false,"strokeWidth":2.4,"strokeColor":"#344b61","straightFirst":false,"straightLast":false,"lastArrow":true}},
  {"type":"line","def":[[0.7853981633974483,0],[0.7853981633974483,13.8]],"att":{"fixed":true,"highlight":false,"strokeWidth":1,"strokeColor":"#6b8296","straightFirst":false,"straightLast":false,"lastArrow":false,"dash":2}},
  {"type":"line","def":[[1.5707963267948966,0],[1.5707963267948966,13.8]],"att":{"fixed":true,"highlight":false,"strokeWidth":1,"strokeColor":"#6b8296","straightFirst":false,"straightLast":false,"lastArrow":false,"dash":2}},
  {"type":"line","def":[[0,4.6],[1.5707963267948966,4.6]],"att":{"fixed":true,"highlight":false,"strokeWidth":1,"strokeColor":"#6b8296","straightFirst":false,"straightLast":false,"lastArrow":false,"dash":2}},
  {"type":"text","def":[-0.04,4.6,"4.6"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#344b61","anchorX":"right"}},
  {"type":"line","def":[[0,9.2],[1.5707963267948966,9.2]],"att":{"fixed":true,"highlight":false,"strokeWidth":1,"strokeColor":"#6b8296","straightFirst":false,"straightLast":false,"lastArrow":false,"dash":2}},
  {"type":"text","def":[-0.04,9.2,"9.2"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#344b61","anchorX":"right"}},
  {"type":"line","def":[[0,13.8],[1.5707963267948966,13.8]],"att":{"fixed":true,"highlight":false,"strokeWidth":1,"strokeColor":"#6b8296","straightFirst":false,"straightLast":false,"lastArrow":false,"dash":2}},
  {"type":"text","def":[-0.04,13.8,"13.8"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#344b61","anchorX":"right"}},
  {"type":"text","def":[-0.03,-0.83,"0"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#344b61","anchorX":"right"}},
  {"type":"text","def":[0.7853981633974483,-0.91,"π/4"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#344b61","anchorX":"middle"}},
  {"type":"text","def":[1.5707963267948966,-0.91,"π/2"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#344b61","anchorX":"middle"}},
  {"type":"text","def":[0.05,15,"α (rad/s²)"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"text","def":[1.77,-1.67,"β (rad)"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#344b61","anchorX":"middle"}},
  {type: functiongraph, def: [f:13.8*cos(x), 0, 1.5707963268], att: {strokeColor: '#186b99', strokeWidth: 3, fixed: true, highlight: false}}
]
```

**Fig. 3.5** Angular acceleration $\mechanical{\alpha}=13.8\cos\beta\,\unit{rad\,s^{-2}}$ for the swinging rod and mass. The magnitude falls to zero with the rod vertical at $\beta=\pi/2$.

The relation $\mechanical\beta+\mechanical\theta=\pi/2$ in Fig. 3.4b gives $\sin\mechanical\theta=\cos\mechanical\beta$. Figure 3.5 plots the result.

(b) At release, the hinge force component $\mechanical R_x$ is the only horizontal force. The rod is horizontal, so the radial direction is also horizontal. With total mass $\mechanical M+\mechanical m$ and center of mass a distance $\mechanical r_{\mathrm{CM}}$ from $O$, the radial acceleration has magnitude $\mechanical v_{\mathrm{CM}}^2/\mechanical r_{\mathrm{CM}}$. Since the system starts at rest, it follows that

$$
|\mechanical R_x(0)|
=(\mechanical M+\mechanical m)\frac{\mechanical v_{\mathrm{CM}}(0)^2}{\mechanical r_{\mathrm{CM}}}
=0. \tag{3.29}
$$

During the swing, both the centripetal and tangential accelerations contribute to the horizontal acceleration of the center of mass. With $+x$ to the right and $\mechanical\beta$ increasing clockwise,

$$
\mechanical R_x=-(\mechanical M+\mechanical m)\mechanical r_{\mathrm{CM}}
\left(\mechanical\omega^2\cos\mechanical\beta+\mechanical\alpha\sin\mechanical\beta\right).
$$

Both terms in parentheses are positive for $0<\mechanical\beta<\pi/2$, so the hinge exerts a leftward force component before the rod reaches the vertical. Here $\mechanical\omega$ and $\mechanical\alpha$ denote magnitudes.

(c) At the vertical position, $\mechanical\beta=\pi/2$. Use the result from part (a).

$$
\mechanical\alpha=(13.8\,\unit{rad\,s^{-2}})\cos(\pi/2)=0. \tag{3.30}
$$

Using $\mechanical a_t=\mechanical\alpha\mechanical r$ at the rod’s midpoint,

$$
\mechanical{a}_{B} = \mechanical{\alpha} \frac {\mechanical{L}} {2} = 0 . \tag{3.31}
$$

This result makes sense: When the rod-mass system is vertical, the tangential direction is along the x axis and the radial direction is along the y axis. At that instant, there are no forces in the tangential direction. Therefore, the tangential acceleration at any point along the rod, including point B, is zero.

(d) At release, $t_0=0$, the midpoint $B$ of the rod without the box has downward acceleration

$$
\mechanical a_B=\mechanical\alpha\frac{\mechanical L}{2}=(13.8\,\unit{rad\,s^{-2}})\cos 0\,\frac{1.0\,\unit m}{2}=6.9\,\unit{m\,s^{-2}}. \tag{3.32}
$$

Since $\mechanical a_B<\mechanical g$, the box stays in contact with the rod as it starts to rotate. The normal force from the box acts downward on the rod and increases its initial angular acceleration. If the unloaded midpoint accelerated downward faster than $\mechanical g$, the box would fall freely and lose contact.

[^inertia-tensor]: In general, inertia is described by a tensor (see Chapter 8). The moment of inertia about a specified fixed axis is a scalar.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\vec F}$ | $\unit N$ | Force | Applied force or a force acting on the specified object. |
| $\mechanical{\vec p}$ | $\unit{kg\,m\,s^{-1}}$ | Linear momentum | Product of mass and velocity. |
| $\mechanical{\vec L}$ | $\unit{kg\,m^2\,s^{-1}}$ | Angular momentum | Rotational momentum about the reference point. |
| $\mechanical{\vec\tau}$ | $\unit{N\,m}$ | Torque | Moment of a force about the specified axis. |
| $\mechanical I$ | $\unit{kg\,m^2}$ | Moment of inertia | Rotational inertia about the axis. |
| $\mechanical{\vec\alpha}$ | $\unit{rad\,s^{-2}}$ | Angular acceleration | Rate of change of angular velocity. |
| $\mechanical{\vec\omega}$ | $\unit{rad\,s^{-1}}$ | Angular velocity | Angular speed and axial direction. |
| $\Delta\mechanical\theta$ | $\unit{rad}$ | Angular displacement | Angle turned. |
| $\mechanical\beta,\mechanical\theta,\mechanical\phi$ | $\unit{rad}$ | Angles | Rod orientation or angle between the specified directions. |
| $\mechanical a_c,\mechanical a_t,\mechanical a_B$ | $\unit{m\,s^{-2}}$ | Accelerations | Centripetal or tangential acceleration at the indicated point. |
| $\mechanical v$ | $\unit{m\,s^{-1}}$ | Tangential speed | Speed along the circular path. |
| $\mechanical{\vec n}$ | $\unit N$ | Normal force | Contact force perpendicular to a supporting surface. |
| $\mechanical{\vec f}_s$ | $\unit N$ | Static friction force | Contact force preventing sliding. |
| $\mechanical\mu_s$ | $1$ | Coefficient of static friction | Ratio of limiting static friction to the normal force. |
| $\mechanical{\vec R}$ | $\unit N$ | Hinge reaction | Contact force from the hinge on the rod. |
| $\mechanical g$ | $\unit{m\,s^{-2}}$ | Gravitational acceleration | Magnitude of the local acceleration due to gravity. |
| $\mechanical m,\mechanical M$ | $\unit{kg}$ | Mass | Mass of the point mass, disk, or rod. |
| $\mechanical r,\mechanical R$ | $\unit m$ | Radius | Distance from the axis to the indicated point. |
| $\mechanical L$ | $\unit m$ | Rod length | Distance from the hinge to the far end. |
| $t$ | $\unit s$ | Time | Time since the chosen reference instant. |
