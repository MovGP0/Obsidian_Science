---
title: "2.1 Torque (τ⃗)"
---

> [!TLDR]
> Torque about an axis is set by the force, its lever arm, and their relative direction.

As mentioned in Chapter 1, we know from linear motion and Newton’s Second Law that to get an object to accelerate (i.e., change its linear velocity), we have to apply a force. Now we seek the equivalent of force in rotational motion. In other words, how can one get an object to change its angular velocity? The answer is that we must apply torque. Just like force was a ubiquitous concept in linear mechanics, torque is ubiquitous in rotational mechanics.

We begin this chapter with a definition and detailed discussion of torque, which we then use to study static equilibrium. In later chapters, we will use the concept of torque to introduce and discuss the dynamics of systems undergoing rotational motion.

## 2.1.1 Mass Attached to Massless, Rigid Rod

We begin with a thought experiment intended to provide some physical intuition about torque. Imagine we have a point mass $\mechanical{m}$ attached to the end of a massless but rigid rod (Figure 2.1). The rod is fixed at one end (i.e., point $O$) in such a way that the mass can only rotate about an axis that is perpendicular to the page and passes through point $O$. Because the rod is rigid, the distance between the mass $\mechanical{m}$ and point $O$ is fixed and cannot change. Now, let’s examine what happens when a force $\mechanical{\vec{F}}$ is applied to the other end of the rod as shown in Figure 2.1.

Intuitively, we know that the resulting motion of the mass will depend on the direction at which $\mechanical{\vec{F}}$ is applied. If the mass is initially at rest and a force is applied parallel to $\mechanical{\vec{r}}$, the vector pointing from the axis of rotation to the point where the force is exerted on the mass, the mass will not accelerate in that direction since the system is fixed at point $O$ (if the rod were not fixed at $O$, then the force $\mechanical{\vec{F}}$ would cause the system to accelerate to the right). Furthermore, this force will not cause a rotation. These outcomes will also be true if $\mechanical{\vec{F}}$ is applied anti-parallel to $\mechanical{\vec{r}}$. However, if the force is applied at any other angle, our intuition tells us that the mass will begin moving (i.e., accelerate), rotating about the fixed point.

```graph
bounds: [-0.46, 0.83, 3.72, -0.85]
width: 415
height: 131
axis: false
drag: false
showNavigation: false
keepAspectRatio: false
elements: [
  {"type":"line","def":[[0,0],[2,0]],"att":{"strokeColor":"#344b61","strokeWidth":4,"dash":0,"lastArrow":false,"fixed":true,"highlight":false,"straightFirst":false,"straightLast":false}},
  {"type":"point","def":[0,0],"att":{"strokeColor":"#344b61","fillColor":"#344b61","withLabel":false,"size":4,"fixed":true,"highlight":false}},
  {"type":"point","def":[2,0],"att":{"strokeColor":"#344b61","fillColor":"#344b61","withLabel":false,"size":6,"fixed":true,"highlight":false}},
  {"type":"text","def":[-0.13,-0.22,"𝑂"],"att":{"strokeColor":"#344b61","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"text","def":[1.96,-0.24,"𝑚"],"att":{"strokeColor":"#344b61","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"line","def":[[0,0.28],[2,0.28]],"att":{"strokeColor":"#186b99","strokeWidth":2.6,"dash":0,"lastArrow":true,"fixed":true,"highlight":false,"straightFirst":false,"straightLast":false}},
  {"type":"text","def":[0.98,0.44,"𝑟"],"att":{"strokeColor":"#186b99","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"line","def":[[2,0],[3.11,0]],"att":{"strokeColor":"#994521","strokeWidth":3.1,"dash":0,"lastArrow":true,"fixed":true,"highlight":false,"straightFirst":false,"straightLast":false}},
  {"type":"text","def":[3.19,0.1,"𝐹"],"att":{"strokeColor":"#994521","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}}
]
```

**Fig. 2.1** A point mass $\mechanical{m}$ is attached to a massless rigid rod pinned at $O$. The position vector $\mechanical{\vec r}$ runs from $O$ to the mass. A force $\mechanical{\vec F}$ parallel or antiparallel to the rod produces zero torque about $O$.

```graph
bounds: [-0.37, 1.13, 3.69, -1.4]
width: 590
height: 310
axis: false
drag: false
showNavigation: false
keepAspectRatio: true
elements: [
  {"type":"line","def":[[0,0],[2,0]],"att":{"strokeColor":"#344b61","strokeWidth":4,"dash":0,"lastArrow":false,"fixed":true,"highlight":false,"straightFirst":false,"straightLast":false}},
  {"type":"point","def":[0,0],"att":{"strokeColor":"#344b61","fillColor":"#344b61","withLabel":false,"size":4,"fixed":true,"highlight":false}},
  {"type":"point","def":[2,0],"att":{"strokeColor":"#344b61","fillColor":"#344b61","withLabel":false,"size":6,"fixed":true,"highlight":false}},
  {"type":"text","def":[-0.13,-0.22,"𝑂"],"att":{"strokeColor":"#344b61","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"text","def":[1.96,-0.24,"𝑚"],"att":{"strokeColor":"#344b61","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"line","def":[[0,0.28],[2,0.28]],"att":{"strokeColor":"#186b99","strokeWidth":2.6,"dash":0,"lastArrow":true,"fixed":true,"highlight":false,"straightFirst":false,"straightLast":false}},
  {"type":"text","def":[0.98,0.44,"𝑟"],"att":{"strokeColor":"#186b99","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"line","def":[[2,0],[2.99,0.67]],"att":{"strokeColor":"#994521","strokeWidth":3.2,"dash":0,"lastArrow":true,"fixed":true,"highlight":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[2,0],[2.99,0]],"att":{"strokeColor":"#2b7354","strokeWidth":2.55,"dash":0,"lastArrow":true,"fixed":true,"highlight":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[2,0],[2,0.67]],"att":{"strokeColor":"#2b7354","strokeWidth":2.55,"dash":0,"lastArrow":true,"fixed":true,"highlight":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[2,0.67],[2.99,0.67]],"att":{"strokeColor":"#637b91","strokeWidth":1.3,"dash":2,"lastArrow":false,"fixed":true,"highlight":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[2.99,0],[2.99,0.67]],"att":{"strokeColor":"#637b91","strokeWidth":1.3,"dash":2,"lastArrow":false,"fixed":true,"highlight":false,"straightFirst":false,"straightLast":false}},
  {"type":"curve","def":[[2.46,2.4598,2.4593,2.4583,2.457,2.4554,2.4534,2.451,2.4482,2.4451,2.4417,2.4378,2.4337,2.4292,2.4243,2.4191,2.4135,2.4077,2.4015,2.3949,2.3881,2.381],[0,0.013,0.0261,0.0391,0.052,0.0649,0.0778,0.0906,0.1034,0.116,0.1286,0.141,0.1534,0.1656,0.1777,0.1897,0.2015,0.2131,0.2245,0.2358,0.2469,0.2578]],"att":{"strokeColor":"#344b61","strokeWidth":1.7,"fixed":true,"highlight":false}},
  {"type":"text","def":[2.49,0.15,"φ"],"att":{"strokeColor":"#344b61","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"text","def":[3.06,0.74,"𝐹"],"att":{"strokeColor":"#994521","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"text","def":[3.09,-0.1,"F ∥"],"att":{"strokeColor":"#2b7354","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"text","def":[1.8,0.78,"F ⟂"],"att":{"strokeColor":"#2b7354","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"line","def":[[0.21,-1.05],[1.62,-1.05]],"att":{"strokeColor":"#186b99","strokeWidth":2,"dash":0,"lastArrow":true,"fixed":true,"highlight":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[0.21,-1.05],[1.07,-0.48]],"att":{"strokeColor":"#994521","strokeWidth":2,"dash":0,"lastArrow":true,"fixed":true,"highlight":false,"straightFirst":false,"straightLast":false}},
  {"type":"curve","def":[[0.64,0.6398,0.6393,0.6385,0.6373,0.6358,0.634,0.6318,0.6293,0.6265,0.6234,0.6199,0.6161,0.612,0.6076,0.6029,0.5978,0.5925,0.5869,0.581,0.5748,0.5683],[-1.05,-1.038,-1.026,-1.014,-1.0021,-0.9902,-0.9783,-0.9665,-0.9548,-0.9431,-0.9316,-0.9201,-0.9087,-0.8974,-0.8863,-0.8752,-0.8643,-0.8536,-0.843,-0.8325,-0.8223,-0.8122]],"att":{"strokeColor":"#344b61","strokeWidth":1.7,"fixed":true,"highlight":false}},
  {"type":"text","def":[1.66,-1.13,"𝑟"],"att":{"strokeColor":"#186b99","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"text","def":[1.08,-0.42,"𝐹"],"att":{"strokeColor":"#994521","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"text","def":[0.68,-0.91,"φ"],"att":{"strokeColor":"#344b61","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}}
]
```

**Fig. 2.2** Resolve the force $\mechanical{\vec F}$ into components parallel and perpendicular to $\mechanical{\vec r}$. The perpendicular component has magnitude $\mechanical{F}_\perp=\mechanical{F}\sin\mechanical{\phi}$ and produces the torque.

To see why, it is necessary to examine the components of the force in relation to $\mechanical{\vec{r}}$. As shown in Figure 2.2, $\mechanical{\vec{F}}$ applied at some angle $\mechanical{\phi}$ with respect to $\mechanical{\vec{r}}$ can be decomposed into parallel ($\mechanical{\vec{F}}_{\parallel}$) and perpendicular ($\mechanical{\vec{F}}_{\perp}$) components. Since $\mechanical{\vec{F}}_{\parallel}$ is parallel to $\mechanical{\vec{r}}$, based on our previous discussion we can already conclude that this component of the force will not cause a rotation. However, since rotation does occur, we must then conclude that the component of $\mechanical{\vec{F}}$ perpendicular to $\mechanical{\vec{r}}$ is responsible for this rotation! Since $\mechanical{F}_{\perp} = \mechanical{F} \sin \mechanical{\phi}$ we now know the magnitude of the component of the force that is responsible for the rotation. Of course, the greater $\mechanical{F} \sin \mechanical{\phi}$ is, the greater the acceleration of the mass (as will be discussed in Chapter 3).

Now let’s think about the vector $\mechanical{\vec{r}}$, the position vector that goes from the axis of rotation to the point where the force is exerted. The question is: Does $|\mechanical{\vec{r}}|$ matter? In other words, even if you have a perpendicular component of the force $\mechanical{\vec{F}}_{\perp}$, will the mass-rod system rotate just as easily regardless of where the force is exerted along the rod?

Where the force is exerted does matter: The further away the same force is exerted from the axis of rotation, the easier it is to rotate the system. To gain some intuition, think about what happens when you try to open a door. If you exert a force at the axis of rotation (where the hinges are) where $|\mechanical{\vec{r}}| = 0$, no matter how hard you push or pull, you will not get the door to open. However, the further away you exert the same force from the axis of rotation (i.e., as $|\mechanical{\vec{r}}|$ increases), the easier it is to get the door to open. This is why the door handle is placed the farthest possible distance from the axis of rotation: The door will rotate more easily for the same amount of force if $|\mechanical{\vec{r}}|$ is large (we will see what “easily” means in Chapter 3).

Therefore, we see that getting something to rotate depends on two things: The distance away from the axis of rotation that the force is exerted, $|\mechanical{\vec{r}}|$, and the magnitude of the perpendicular component of the exerted force, $\mechanical{F} \sin \mechanical{\phi}$. It is important to emphasize that producing a rotation depends on all of these properties together; for example, we can have both nonzero $|\mechanical{\vec{r}}|$ and $|\mechanical{\vec{F}}|$ but still not have rotation if $\mechanical{\phi} = 0$ or $\mechanical{\phi} = \pi$.

## 2.1.2 Definition of Torque

In general, the torque $\mechanical{\vec{\tau}}$ due to a force is the physical quantity that describes the ability a force has to rotate an object. Just like forces cause accelerations, torques cause angular accelerations, as we will see in Chapter 3.

In the previous section, we saw that the torque ($\mechanical{\vec{\tau}}$) is related to the applied force ($\mechanical{\vec{F}}$), the position vector pointing from the axis of rotation to the point of application of this force ($\mechanical{\vec{r}}$), and the sine of the angle between these two vectors. We know that when a physical quantity is the result of two vectors which are related through the sine of the angle between them, the cross product is usually involved. This turns out to be the case here, as well. The torque due to a force is defined as:

$$
\mechanical{\vec{\tau}} = \mechanical{\vec{r}} \times \mechanical{\vec{F}}, \tag{2.1}
$$

and has SI units of ($\unit{N\,m}$). The magnitude is given by

$$
|\mechanical{\vec{\tau}}| = |\mechanical{\vec{r}}| |\mechanical{\vec{F}}| \sin \mechanical{\phi}, \tag{2.2}
$$

which is consistent with what we saw intuitively in our case study.

Because torque is a cross product between the two vectors $\mechanical{\vec{r}}$ and $\mechanical{\vec{F}}$, it is also a vector whose direction is given by the right-hand rule. To find its direction, we use the more general version of the right-hand rule discussed in Chapter 1. Let’s review this rule in the context of torque by looking at Figure 2.3. Imagine that the rectangular slab shown in Figure 2.3a has the ability to rotate about the fixed $z$ axis when a force $\mechanical{\vec{F}}$ is exerted on it as shown. The force is located in the plane of the slab, which is perpendicular to the axis of rotation $z$. To get the direction of torque, we align the four fingers of our right hand with the first vector in the cross product ($\mechanical{\vec{r}}$) (Figure 2.3b) in an orientation so that when we bend our fingers to align them with the second vector in the cross product ($\mechanical{\vec{F}}$) (Figure 2.3c), our extended thumb points in the direction of the torque. In this example, the torque due to $\mechanical{\vec{F}}$ points upward, and by convention is drawn along the axis of rotation (just like angular velocity and angular acceleration). As expected, we also see that $\mechanical{\vec{\tau}}$ is perpendicular to both $\mechanical{\vec{F}}$ and $\mechanical{\vec{r}}$, as well as to the plane formed by $\mechanical{\vec{F}}$ and $\mechanical{\vec{r}}$ (i.e., the plane of the slab in this case). For the case studied in Figure 2.2, $\mechanical{\vec{\tau}}$ will be pointing out of the page, toward the reader.

```graph3d
bounds: [-1.63, 0.9, 1.63, -0.9]
bounds3d: [[-1.7,1.7],[-1.48,1.48],[-1.02,1.67]]
width: 610
height: 300
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
  az: {slider: {start: 3.19, visible: false}, pointer: {enabled: true}}
  el: {slider: {start: 0.72, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"curve3d","def":[[-1.32,1.25,1.25,-1.32,-1.32],[-0.83,-0.83,0.98,0.98,-0.83],[0,0,0,0,0]],"att":{"strokeColor":"#637b91","strokeWidth":1.7,"fixed":true,"highlight":false,"fillColor":"#b8cfdf","fillOpacity":0.38}},
  {"type":"line3d","def":[[0,0,-0.68],[0,0,1.36]],"att":{"strokeColor":"#637b91","strokeWidth":1.35,"dash":2,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[0,0,0.91]],"att":{"strokeColor":"#994521","strokeWidth":3,"dash":0,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"point3d","def":[0,0,0],"att":{"strokeColor":"#344b61","fillColor":"#344b61","withLabel":false,"size":4,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.09,0,-0.12],"𝑂"],"att":{"strokeColor":"#344b61","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"text3d","def":[[0.2,0,0.85],"τ"],"att":{"strokeColor":"#994521","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"text3d","def":[[0.13,0,1.37],"+z"],"att":{"strokeColor":"#344b61","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"line3d","def":[[-1.27,-0.54,0],[0.24,0.97,0]],"att":{"strokeColor":"#637b91","strokeWidth":1.5,"dash":2,"lastArrow":false,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[-0.73,0,0]],"att":{"strokeColor":"#186b99","strokeWidth":2.6,"dash":0,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-0.73,0,0],[-1.2,-0.47,0]],"att":{"strokeColor":"#2b7354","strokeWidth":3,"dash":0,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[-0.365,0.365,0]],"att":{"strokeColor":"#344b61","strokeWidth":1.7,"dash":2,"lastArrow":false,"fixed":true,"highlight":false}},
  {"type":"curve3d","def":[[-0.98,-0.9798,-0.9793,-0.9784,-0.9772,-0.9756,-0.9737,-0.9715,-0.9689,-0.966,-0.9627,-0.9591,-0.9552,-0.951,-0.9465,-0.9417,-0.9366,-0.9311,-0.9255,-0.9195,-0.9133,-0.9068],[0,-0.0093,-0.0187,-0.028,-0.0373,-0.0465,-0.0556,-0.0647,-0.0737,-0.0826,-0.0913,-0.1,-0.1085,-0.1168,-0.125,-0.133,-0.1408,-0.1485,-0.1559,-0.1631,-0.17,-0.1768],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#344b61","strokeWidth":1.7,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.5,-0.05,0.09],"𝑟"],"att":{"strokeColor":"#186b99","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"text3d","def":[[-1.24,-0.48,0.12],"𝐹"],"att":{"strokeColor":"#2b7354","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"text3d","def":[[-0.15,0.24,0.05],"𝑑"],"att":{"strokeColor":"#344b61","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"text3d","def":[[-1.045,-0.24,0.035],"φ"],"att":{"strokeColor":"#344b61","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"point3d","def":[-0.73,0,0],"att":{"strokeColor":"#344b61","fillColor":"#344b61","withLabel":false,"size":4,"fixed":true,"highlight":false}},
  {"type":"curve3d","def":[[-0.57,-0.5702,-0.5706,-0.5714,-0.5724,-0.5738,-0.5755,-0.5774,-0.5796,-0.5822,-0.585,-0.5881,-0.5914,-0.5951,-0.5989,-0.6031,-0.6074,-0.612,-0.6169],[0.0,0.007,0.0139,0.0209,0.0278,0.0346,0.0414,0.0481,0.0547,0.0612,0.0676,0.0739,0.08,0.086,0.0918,0.0974,0.1028,0.1081,0.1131],[0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009]],"att":{"strokeColor":"#344b61","strokeWidth":1.2,"fixed":true,"highlight":false}},
  {"type":"curve3d","def":[[-0.48,-0.4803,-0.4812,-0.4827,-0.4848,-0.4875,-0.4908,-0.4946,-0.499,-0.504,-0.5095,-0.5156,-0.5221,-0.5292,-0.5367,-0.5448,-0.5532,-0.5621,-0.5714,-0.5811,-0.5911,-0.6015,-0.6122,-0.6231,-0.6343,-0.6458,-0.6574,-0.6693,-0.6812,-0.6933,-0.7055,-0.7177,-0.73,-0.7423,-0.7545,-0.7667,-0.7788,-0.7907,-0.8026,-0.8142,-0.8257,-0.8369,-0.8478,-0.8585,-0.8689,-0.8789,-0.8886,-0.8979,-0.9068],[0.0,-0.0123,-0.0245,-0.0367,-0.0488,-0.0607,-0.0726,-0.0842,-0.0957,-0.1069,-0.1178,-0.1285,-0.1389,-0.1489,-0.1586,-0.1679,-0.1768,-0.1852,-0.1933,-0.2008,-0.2079,-0.2144,-0.2205,-0.226,-0.231,-0.2354,-0.2392,-0.2425,-0.2452,-0.2473,-0.2488,-0.2497,-0.25,-0.2497,-0.2488,-0.2473,-0.2452,-0.2425,-0.2392,-0.2354,-0.231,-0.226,-0.2205,-0.2144,-0.2079,-0.2008,-0.1933,-0.1852,-0.1768],[0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009,0.009]],"att":{"strokeColor":"#344b61","strokeWidth":1.2,"fixed":true,"highlight":false}},
  {"type":"curve3d","def":[[-0.405,-0.365,-0.325],[0.325,0.285,0.325],[0.009,0.009,0.009]],"att":{"strokeColor":"#344b61","strokeWidth":1.2,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.83,-0.34,0.025],"φ′"],"att":{"strokeColor":"#344b61","fontSize":15,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"text3d","def":[[-0.5,0.13,0.035],"φ"],"att":{"strokeColor":"#344b61","fontSize":15,"fixed":true,"anchorX":"left","highlight":false}}
]
```

**Fig. 2.3a** A force $\mechanical{\vec F}$ in the plane of the slab produces a torque about the fixed $z$ axis. The moment arm $\mechanical{d}=\mechanical{r}\sin\mechanical{\phi}$ extends from $O$ perpendicular to the line of action of the force. The angle $\mechanical{\phi}'=\pi-\mechanical{\phi}$ gives the same sine. Drag to rotate the plot.

![[rotational-motion-fig-2-3b-fingers-along-r.svg|**Fig. 2.3b** Point the four fingers of your right hand along $\mechanical{\vec r}$, the first vector in the cross product.|275]]

![[rotational-motion-fig-2-3c-hand-torque.svg|**Fig. 2.3c** Bend the fingers toward $\mechanical{\vec F}$. The thumb points in the direction of the torque $\mechanical{\vec\tau}$, along the positive $z$ axis.|275]]

Let’s look at a slightly different aspect of Figure 2.3. We can see from Figure 2.3a that

$$
|\mechanical{\vec{r}}| \sin \mechanical{\phi} = \mechanical{d}. \tag{2.3}
$$

$\mechanical{d}$ corresponds to the perpendicular distance from the line of action of the force (i.e., the line that contains the vector $\mechanical{\vec{F}}$) to the axis of rotation. $\mechanical{d}$ is called the moment arm (or lever arm) and allows us to write the magnitude of the torque (Equation (2.2)) as:

$$
|\mechanical{\vec{\tau}}| = |\mechanical{\vec{r}}||\mechanical{\vec{F}}|\sin\mechanical{\phi} = |\mechanical{\vec{F}}|\mechanical{d}. \tag{2.4}
$$

Also, note that the angles $\mechanical{\phi}$ and $\mechanical{\phi}'$ in Figure 2.3a are supplementary; that is, $\mechanical{\phi}' = \pi - \mechanical{\phi}$, and thus $\sin\mechanical{\phi}' = \sin\mechanical{\phi}$. As a result, one can compute the torque using either the angle between the vectors $\mechanical{\vec{r}}$ and $\mechanical{\vec{F}}$, or its supplementary angle.

From this discussion and the one in the previous section (Section 2.1.1) we can see that $\sin\mechanical{\phi}$, when combined with the applied force $\mechanical{\vec{F}}$, shows the component of the force that causes rotation. However, when combined with the position vector $\mechanical{\vec{r}}$, $\sin\mechanical{\phi}$ shows the moment arm. In other words, $\sin\mechanical{\phi}$ can help us focus our attention either on the applied force or on the position vector, depending on the problem.

At this point you may notice that the SI unit for torque is the same as the SI unit for work, ($\unit{N\,m}$). Recall that work is defined as the integral of the dot product of a force along an infinitesimal displacement:

$$
\energy{W} = \int_{A}^{B} \mechanical{\vec{F}} \cdot d\mechanical{\vec{x}}. \tag{2.5}
$$

Torque, however, is the *cross* product between the position vector and the force, and therefore it represents a different physical quantity. This is why we do not use the unit of the Joule when expressing torque.

As simple as Equations (2.1) and (2.2) look, there are some important observations that need to be made, and this leads us to the next section.

## 2.1.3 Notes on the Definition of Torque

Before we begin our observations, we need to remind ourselves that the focus of this book is on an object’s rotation about a *fixed* axis. This means that the axis of rotation cannot rotate about another axis. Situations where the axis of rotation rotates about a second axis (e.g., a spinning top that rotates about its own axis while this axis rotates about an axis perpendicular to the tabletop) will be briefly discussed in Chapter 8.

(i) Since $\mechanical{\vec{r}}$ is defined as the position vector from an axis to the point where the force is exerted, we always need to specify the axis about which we calculate the torque. For example, we need to say: “The torque of $\mechanical{\vec{F}}_1$ about the axis that goes through the object’s center of mass (CM) and is perpendicular to the plane of the page.”

(ii) In Figure 2.3 we looked at the torque due to a force located in the plane of a rectangular slab. What happens if the force $\mechanical{\vec{F}}$ is not located in this plane, but rather forms an angle $\mechanical{\theta}$ with it, as shown in Figure 2.4? Then the torque about the axis of rotation (the $z$ axis in this case) is given by the torque due to the component of this force which is perpendicular to the $z$ axis, that is, the component of the force that lies in the $xy$ plane of the slab, $\mechanical{\vec{F}}_{xy}$. This makes sense because the component $\mechanical{\vec{F}}_z$ of the force that is parallel to the axis of rotation cannot produce any rotation about this fixed axis. Of course, $\mechanical{\vec{F}}_{xy}$ (with $\mechanical{F}_{xy} = \mechanical{F} \cos \mechanical{\theta}$) can further be split into two components, one parallel and one perpendicular to $\mechanical{\vec{r}}$. The perpendicular component of magnitude $\mechanical{F}_{xy} \sin \mechanical{\phi} = \mechanical{F} \cos \mechanical{\theta} \sin \mechanical{\phi}$, where $\mechanical{\phi}$ is the angle between $\mechanical{\vec{F}}_{xy}$ and $\mechanical{\vec{r}}$, is thus the only component that causes rotation about the fixed $z$ axis. In summary, only the component of the force that is perpendicular to both the axis of rotation and $\mechanical{\vec{r}}$ can produce a torque about that axis.

```graph3d
bounds: [-1.63, 0.9, 1.63, -0.9]
bounds3d: [[-1.7,1.7],[-1.48,1.48],[-1.02,1.67]]
width: 640
height: 320
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
  az: {slider: {start: 2.16, visible: false}, pointer: {enabled: true}}
  el: {slider: {start: 0.68, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"curve3d","def":[[-1.32,1.25,1.25,-1.32,-1.32],[-0.83,-0.83,0.98,0.98,-0.83],[0,0,0,0,0]],"att":{"strokeColor":"#637b91","strokeWidth":1.7,"fixed":true,"highlight":false,"fillColor":"#b8cfdf","fillOpacity":0.38}},
  {"type":"line3d","def":[[0,0,-0.68],[0,0,1.36]],"att":{"strokeColor":"#637b91","strokeWidth":1.35,"dash":2,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[0,0,0.91]],"att":{"strokeColor":"#994521","strokeWidth":3,"dash":0,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"point3d","def":[0,0,0],"att":{"strokeColor":"#344b61","fillColor":"#344b61","withLabel":false,"size":4,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.09,0,-0.12],"𝑂"],"att":{"strokeColor":"#344b61","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"text3d","def":[[0.2,0,0.85],"τ"],"att":{"strokeColor":"#994521","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"text3d","def":[[0.13,0,1.37],"+z"],"att":{"strokeColor":"#344b61","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"line3d","def":[[0,0,0],[0.65,0.31,0]],"att":{"strokeColor":"#186b99","strokeWidth":2.7,"dash":0,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.65,0.31,0],[0.46,0.91,0]],"att":{"strokeColor":"#2b7354","strokeWidth":2.45,"dash":0,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.65,0.31,0],[0.65,0.31,0.93]],"att":{"strokeColor":"#2b7354","strokeWidth":2.45,"dash":0,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.65,0.31,0],[0.46,0.91,0.93]],"att":{"strokeColor":"#344b61","strokeWidth":3.05,"dash":0,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.46,0.91,0],[0.46,0.91,0.93]],"att":{"strokeColor":"#637b91","strokeWidth":1.4,"dash":2,"lastArrow":false,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.65,0.31,0.93],[0.46,0.91,0.93]],"att":{"strokeColor":"#637b91","strokeWidth":1.4,"dash":2,"lastArrow":false,"fixed":true,"highlight":false}},
  {"type":"curve3d","def":[[0.8666,0.8591,0.8506,0.8411,0.8308,0.8196,0.8076,0.7949,0.7815,0.7676,0.753,0.738,0.7226,0.7068,0.6908,0.6746,0.6583,0.6419,0.6256,0.6093,0.5933,0.5775],[0.4133,0.4278,0.4418,0.4552,0.4679,0.4798,0.491,0.5013,0.5107,0.5192,0.5268,0.5333,0.5388,0.5432,0.5465,0.5487,0.5499,0.5499,0.5488,0.5465,0.5432,0.5388],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#186b99","strokeWidth":1.7,"fixed":true,"highlight":false}},
  {"type":"curve3d","def":[[0.56,0.5601,0.5604,0.5609,0.5616,0.5624,0.5635,0.5647,0.5662,0.5678,0.5696,0.5715,0.5737,0.576,0.5784,0.581,0.5838,0.5867,0.5897,0.5929,0.5962,0.5996],[0.6,0.5997,0.5987,0.5972,0.595,0.5922,0.5888,0.5848,0.5802,0.575,0.5692,0.5629,0.556,0.5486,0.5406,0.5322,0.5233,0.514,0.5041,0.4939,0.4833,0.4723],[0,0.0141,0.0281,0.0421,0.0561,0.0698,0.0835,0.0969,0.1102,0.1232,0.1359,0.1484,0.1605,0.1723,0.1837,0.1947,0.2053,0.2154,0.2251,0.2343,0.243,0.2511]],"att":{"strokeColor":"#186b99","strokeWidth":1.7,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.26,0.12,-0.1],"𝑟"],"att":{"strokeColor":"#186b99","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"text3d","def":[[0.48,1.02,0.13],"Fxy"],"att":{"strokeColor":"#2b7354","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"text3d","def":[[0.46,0.24,0.85],"Fz"],"att":{"strokeColor":"#2b7354","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"text3d","def":[[0.43,1.01,1.02],"𝐹"],"att":{"strokeColor":"#344b61","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"text3d","def":[[0.78,0.5,0.17],"φ"],"att":{"strokeColor":"#186b99","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"text3d","def":[[0.57,0.66,0.42],"θ"],"att":{"strokeColor":"#186b99","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}}
]
```

**Fig. 2.4** Decompose $\mechanical{\vec F}$ into the in-plane component $\mechanical{\vec F}_{xy}$ and the axial component $\mechanical{\vec F}_z$. Only the part of $\mechanical{\vec F}_{xy}$ perpendicular to $\mechanical{\vec r}$ contributes to the torque about $z$. Its magnitude is $\mechanical{F}\cos\mechanical{\theta}\sin\mechanical{\phi}$. Drag to rotate the plot.

(iii) If we define the $+z$ axis to be upward along the axis of rotation (as is shown in Figure 2.4), then based on the right-hand rule, any force that tends to rotate the object counterclockwise (as viewed from above) will result in a torque in the $+z$ direction. This results in the convention we will be using in this book: When a rotation is viewed from above the $xy$ plane (i.e., such that $z > 0$), counterclockwise rotation is positive (just like the torque that causes it) while clockwise rotation is negative. For this reason, sometimes instead of showing the $+z$ axis in our figures, we will be showing the equivalent definition: That counterclockwise rotation is positive while clockwise rotation is negative. This convention is consistent with the right-hand rule. Of course, one could define the opposite convention.

(iv) In the same way we defined angular velocity and angular acceleration to point along the axis of rotation in Chapter 1, here by having all the torques be along the axis of rotation we are consistent with the ideas that the rotational motion can be fully described by vectors normal to the plane of rotation and that we are reducing the two-dimensional rotational motion to a one-dimensional problem. If we define the axis of rotation to be the $z$ axis, some torques will be pointing in the $+z$ direction, while others in the $-z$ direction. This means that we can find the net torque in the same way we found the net force along an axis. That is, we consider the torques that point along the $+z$ axis positive (i.e., tending to cause counterclockwise (ccw) rotation) and those that point along the $-z$ axis negative (i.e., tending to cause clockwise (cw) rotation), and we are then able to add them algebraically. For example, for $n$ torques:

$$
\begin{aligned}
\sum_i\mechanical{\vec\tau}_i
&=\mechanical{\vec\tau}_1+\mechanical{\vec\tau}_2+\cdots+\mechanical{\vec\tau}_n,\\
\sum_i\mechanical{\tau}_{i,z}
&=\underbrace{\mechanical{\tau}_1+\mechanical{\tau}_2+\mechanical{\tau}_3+\cdots}_{\text{counterclockwise contributions}}
-\underbrace{\bigl(\mechanical{\tau}_{n-2}+\mechanical{\tau}_{n-1}+\mechanical{\tau}_n\bigr)}_{\text{clockwise contributions}}\\
&=\mechanical{r}_1\mechanical{F}_1\sin\mechanical{\phi}_1
  +\mechanical{r}_2\mechanical{F}_2\sin\mechanical{\phi}_2+\cdots
  -\mechanical{r}_{n-1}\mechanical{F}_{n-1}\sin\mechanical{\phi}_{n-1}
  -\mechanical{r}_n\mechanical{F}_n\sin\mechanical{\phi}_n\\
&=\mechanical{F}_1\mechanical{d}_1+\mechanical{F}_2\mechanical{d}_2+\cdots
  -\mechanical{F}_{n-1}\mechanical{d}_{n-1}-\mechanical{F}_n\mechanical{d}_n.
\end{aligned}
\tag{2.6}
$$

A word of caution about Equation (2.6): If we find the sign of the torques based on the direction of the rotation they would cause (clockwise or counterclockwise), then all the angles $\mechanical{\phi}$ should be between 0 and $\pi$ (so that $\sin \mechanical{\phi} > 0$), since the sign of the torque has already been taken into account.

(v) If the point of application of force $\mechanical{\vec{F}}$ changes location but the direction and line of action of the force are maintained (i.e., the vector remains constant but can be applied anywhere along its line of action), then its torque does not change. This is because the moment arm $\mechanical{d}$ will not change (i.e., $\mechanical{r} \sin \mechanical{\phi}$ will remain the same). As seen in Figure 2.5, $\mechanical{d} = \mechanical{r}_1 \sin \mechanical{\phi}_1 = \mechanical{r}_2 \sin \mechanical{\phi}_2$, and thus the torque is the same.

(vi) The torque of a force $\mechanical{\vec{F}}$ is zero ($\mechanical{\vec{\tau}}_F = 0$) about a particular axis when:

- The line of action of $\mechanical{\vec{F}}$ passes through that axis. This is because the moment arm $\mechanical{d}$ is zero (i.e., either $\mechanical{\phi} = 0$ or $\mechanical{\phi} = \pi$),
- The line of action of $\mechanical{\vec{F}}$ is parallel to that axis. This was explained in note ii.

```graph3d
bounds: [-1.63, 0.9, 1.63, -0.9]
bounds3d: [[-1.7,1.7],[-1.48,1.48],[-1.02,1.67]]
width: 620
height: 310
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
  az: {slider: {start: 2.87, visible: false}, pointer: {enabled: true}}
  el: {slider: {start: 0.58, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"curve3d","def":[[-1.32,1.25,1.25,-1.32,-1.32],[-0.83,-0.83,0.98,0.98,-0.83],[0,0,0,0,0]],"att":{"strokeColor":"#637b91","strokeWidth":1.7,"fixed":true,"highlight":false,"fillColor":"#b8cfdf","fillOpacity":0.38}},
  {"type":"line3d","def":[[0,0,-0.68],[0,0,1.36]],"att":{"strokeColor":"#637b91","strokeWidth":1.35,"dash":2,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[0,0,0.91]],"att":{"strokeColor":"#994521","strokeWidth":3,"dash":0,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"point3d","def":[0,0,0],"att":{"strokeColor":"#344b61","fillColor":"#344b61","withLabel":false,"size":4,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.09,0,-0.12],"𝑂"],"att":{"strokeColor":"#344b61","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"text3d","def":[[0.2,0,0.85],"τ"],"att":{"strokeColor":"#994521","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"text3d","def":[[0.13,0,1.37],"+z"],"att":{"strokeColor":"#344b61","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"line3d","def":[[-1.32,-0.59,0],[0.23,0.96,0]],"att":{"strokeColor":"#637b91","strokeWidth":1.45,"dash":2,"lastArrow":false,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[-0.73,0,0]],"att":{"strokeColor":"#186b99","strokeWidth":2.4,"dash":0,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[0.13,0.86,0]],"att":{"strokeColor":"#186b99","strokeWidth":2.4,"dash":0,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-0.73,0,0],[-1.19,-0.46,0]],"att":{"strokeColor":"#2b7354","strokeWidth":2.8,"dash":0,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.13,0.86,0],[-0.33,0.4,0]],"att":{"strokeColor":"#2b7354","strokeWidth":2.8,"dash":0,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[-0.365,0.365,0]],"att":{"strokeColor":"#344b61","strokeWidth":1.9,"dash":2,"lastArrow":false,"fixed":true,"highlight":false}},
  {"type":"point3d","def":[-0.73,0,0],"att":{"strokeColor":"#344b61","fillColor":"#344b61","withLabel":false,"size":4,"fixed":true,"highlight":false}},
  {"type":"point3d","def":[0.13,0.86,0],"att":{"strokeColor":"#344b61","fillColor":"#344b61","withLabel":false,"size":4,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.58,-0.11,0.08],"r₁"],"att":{"strokeColor":"#186b99","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"text3d","def":[[0.14,0.7,0.05],"r₂"],"att":{"strokeColor":"#186b99","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"text3d","def":[[-0.04,0.31,0.06],"𝑑"],"att":{"strokeColor":"#344b61","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"text3d","def":[[-1.26,-0.5,0.12],"𝐹"],"att":{"strokeColor":"#2b7354","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}},
  {"type":"text3d","def":[[-0.4,0.36,0.19],"𝐹"],"att":{"strokeColor":"#2b7354","fontSize":16,"fixed":true,"anchorX":"left","highlight":false}}
]
```

**Fig. 2.5** The same force acts at two different points on its line of action. The moment arm $\mechanical{d}$ stays constant, and so does the torque about $O$. Drag to rotate the plot.

(vii) When finding the torque of a force about an axis (let’s assume the $z$ axis), we can either work with the force $\mechanical{\vec{F}}$ directly or with the components $\mechanical{\vec{F}}_x$ and $\mechanical{\vec{F}}_y$ of the force – both methods will yield the same result, that is $\mechanical{\vec{\tau}}_F = \mechanical{\vec{\tau}}_{Fx} + \mechanical{\vec{\tau}}_{Fy}$. Let’s see why this is true. Given that $\mechanical{\vec{F}} = \mechanical{\vec{F}}_x + \mechanical{\vec{F}}_y$, we get that:

$$
\mechanical{\vec{\tau}} = \mechanical{\vec{r}} \times \mechanical{\vec{F}} = \mechanical{\vec{r}} \times (\mechanical{\vec{F}}_x + \mechanical{\vec{F}}_y) = \mechanical{\vec{r}} \times \mechanical{\vec{F}}_x + \mechanical{\vec{r}} \times \mechanical{\vec{F}}_y = \mechanical{\vec{\tau}}_{Fx} + \mechanical{\vec{\tau}}_{Fy}. \tag{2.7}
$$

Working with the components of the force is the preferred method in this book. This is because as soon as we decompose the force into components such that one is perpendicular to its respective position vector and the other parallel to it, then the angle $\mechanical{\phi}$ in the definition of the torque $\mechanical{\tau} = \mechanical{r}\mechanical{F} \sin \mechanical{\phi}$ will be $0$, $\frac{\pi}{2}$, or $\pi$, which are easy angles to work with. Decomposing the force might seem like an additional step. However, if we take this additional step, the physics can become clearer, particularly when the parallel and perpendicular directions lie along the axes of our coordinate system since we often look at the motion along each axis separately.

We have gone over a lot of theory. Time for some practice! Based on what we discussed in notes iii and iv, we can work with the torques algebraically when we account for their signs based on the direction of the rotation they tend to cause. As we do for translational motion, it is important to always show the coordinate system, draw the forces, decompose them, and write down the concepts and the equations that describe the concepts in each example.

**Example 1. Net torque on a rod.** Figure 2.6a shows a massless rod $AC$ of length $\mechanical{l}=2.0\,\unit{m}$. It can rotate in a horizontal plane about the $z$ axis, which is perpendicular to the plane and goes through the rod’s midpoint $M$. Two forces act in the horizontal plane. At point $B$, $\mechanical{\vec F}_1$ has a magnitude of $8.0\,\unit{N}$, with $\mechanical{\theta}_1=30^\circ$ and $AB=\mechanical{l}/8$. At point $C$, $\mechanical{\vec F}_2$ has a magnitude of $14\sqrt{2}\,\unit{N}$ with $\mechanical{\theta}_2=45^\circ$. Find the net torque about the $z$ axis.

```graph3d
bounds: [-1.64, 0.91, 1.64, -0.91]
bounds3d: [[-1.55,1.55],[-0.97,1.32],[-0.66,1.23]]
height: 320
width: 660
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
  az: {slider: {start: 2.83, visible: false}, pointer: {enabled: true}}
  el: {slider: {start: 0.78, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"curve3d","def":[[-1.23,1.23,1.23,-1.23,-1.23],[-0.9,-0.9,0.95,0.95,-0.9],[0,0,0,0,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.65,"fillColor":"#b8cfdf","fillOpacity":0.35,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,-0.52],[0,0,1.04]],"att":{"strokeColor":"#6b8296","strokeWidth":1.8,"lastArrow":true,"dash":2,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.38,0,0],[1.38,0,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.8,"lastArrow":true,"dash":2,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[0,1.13,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.8,"lastArrow":true,"dash":2,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1,0,0],[1,0,0]],"att":{"strokeColor":"#213449","strokeWidth":3,"lastArrow":false,"dash":0,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-0.75,0,0],[-0.386,0.21,0]],"att":{"strokeColor":"#186b99","strokeWidth":3.3,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1,0,0],[0.265,0.735,0]],"att":{"strokeColor":"#994521","strokeWidth":3.3,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"point3d","def":[-1,0,0],"att":{"size":3.5,"withLabel":false,"fillColor":"#213449","strokeColor":"#213449","fixed":true,"highlight":false}},
  {"type":"point3d","def":[-0.75,0,0],"att":{"size":3.5,"withLabel":false,"fillColor":"#213449","strokeColor":"#213449","fixed":true,"highlight":false}},
  {"type":"point3d","def":[0,0,0],"att":{"size":3.5,"withLabel":false,"fillColor":"#213449","strokeColor":"#213449","fixed":true,"highlight":false}},
  {"type":"point3d","def":[1,0,0],"att":{"size":3.5,"withLabel":false,"fillColor":"#213449","strokeColor":"#213449","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.17,0,-0.09],"𝐴"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.74,-0.14,-0.15],"𝐵"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0,-0.12,-0.15],"𝑀"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.01,0,-0.15],"𝐶"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.41,0,0],"+x"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0,1.15,0.03],"+y"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.07,0,1.06],"+z"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.36,0.23,0.19],"F₁"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#186b99","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.22,0.84,0.07],"F₂"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#994521","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.4,0.067,-0.01],"30°"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#186b99","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.65,0.2,0.09],"45°"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#994521","fixed":true,"highlight":false}}
]
```

**Fig. 2.6a** The rod rotates in the $xy$ plane about the $z$ axis through its midpoint $M$. The forces $\mechanical{\vec F}_1$ and $\mechanical{\vec F}_2$ act at points $B$ and $C$. Drag to rotate the plot.

```graph3d
bounds: [-1.64, 0.91, 1.64, -0.91]
bounds3d: [[-1.55,1.55],[-0.97,1.32],[-0.66,1.23]]
height: 320
width: 660
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
  az: {slider: {start: 2.83, visible: false}, pointer: {enabled: true}}
  el: {slider: {start: 0.78, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"curve3d","def":[[-1.23,1.23,1.23,-1.23,-1.23],[-0.9,-0.9,0.95,0.95,-0.9],[0,0,0,0,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.65,"fillColor":"#b8cfdf","fillOpacity":0.35,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,-0.52],[0,0,1.04]],"att":{"strokeColor":"#6b8296","strokeWidth":1.8,"lastArrow":true,"dash":2,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.38,0,0],[1.38,0,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.8,"lastArrow":true,"dash":2,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[0,1.13,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.8,"lastArrow":true,"dash":2,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1,0,0],[1,0,0]],"att":{"strokeColor":"#213449","strokeWidth":3,"lastArrow":false,"dash":0,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-0.75,0,0],[-0.386,0.21,0]],"att":{"strokeColor":"#186b99","strokeWidth":3.3,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1,0,0],[0.265,0.735,0]],"att":{"strokeColor":"#994521","strokeWidth":3.3,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"point3d","def":[-1,0,0],"att":{"size":3.5,"withLabel":false,"fillColor":"#213449","strokeColor":"#213449","fixed":true,"highlight":false}},
  {"type":"point3d","def":[-0.75,0,0],"att":{"size":3.5,"withLabel":false,"fillColor":"#213449","strokeColor":"#213449","fixed":true,"highlight":false}},
  {"type":"point3d","def":[0,0,0],"att":{"size":3.5,"withLabel":false,"fillColor":"#213449","strokeColor":"#213449","fixed":true,"highlight":false}},
  {"type":"point3d","def":[1,0,0],"att":{"size":3.5,"withLabel":false,"fillColor":"#213449","strokeColor":"#213449","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.17,0,-0.09],"𝐴"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.74,-0.14,-0.15],"𝐵"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0,-0.12,-0.15],"𝑀"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.01,0,-0.15],"𝐶"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.41,0,0],"+x"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0,1.15,0.03],"+y"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.07,0,1.06],"+z"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-0.75,0,0],[-0.386,0,0]],"att":{"strokeColor":"#186b99","strokeWidth":2,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-0.75,0,0],[-0.75,0.21,0]],"att":{"strokeColor":"#186b99","strokeWidth":2,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1,0,0],[0.265,0,0]],"att":{"strokeColor":"#994521","strokeWidth":2,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1,0,0],[1,0.735,0]],"att":{"strokeColor":"#994521","strokeWidth":2,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-0.386,0,0],[-0.386,0.21,0]],"att":{"strokeColor":"#186b99","strokeWidth":1.8,"lastArrow":false,"dash":2,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.265,0,0],[0.265,0.735,0]],"att":{"strokeColor":"#994521","strokeWidth":1.8,"lastArrow":false,"dash":2,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,-0.58,0],[-0.75,-0.58,0]],"att":{"strokeColor":"#344b61","strokeWidth":1.8,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,-0.7,0],[1,-0.7,0]],"att":{"strokeColor":"#344b61","strokeWidth":1.8,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.61,-0.59,0.1],"r₁"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.68,-0.7,0.1],"r₂"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.44,-0.13,-0.18],"F₁x"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#186b99","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.98,0.22,0.11],"F₁y"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#186b99","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.36,-0.06,0.09],"F₂x"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#994521","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1,0.81,0.07],"F₂y"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#994521","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.37,0.24,0.13],"F₁"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#186b99","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.22,0.83,0.09],"F₂"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#994521","fixed":true,"highlight":false}}
]
```

**Fig. 2.6b** The $x$ components of the forces are along the rod and have zero torque about $z$. The $y$ components produce opposite torques. The two position vectors are offset for clarity. Drag to rotate the plot.

Use the definition of torque in Equation (2.2) and the net torque in Equation (2.6). The angle $\mechanical{\phi}$ in the torque formula is the angle between the position vector $\mechanical{\vec r}$ and the force $\mechanical{\vec F}$. Decompose both forces as shown in Fig. 2.6b. Positive torque produces counterclockwise rotation as viewed from above. Negative torque produces clockwise rotation.

Use a $z$ subscript to identify the axis perpendicular to the $xy$ plane and through $M$. First sum the vector contributions, then take the signed component along $z$.

$$
\begin{aligned}
\sum\mechanical{\vec\tau}_z
&=\mechanical{\vec\tau}_{F_1}+\mechanical{\vec\tau}_{F_2}\\
&=\underbrace{\mechanical{\vec\tau}_{F_{1x}}}_{0\;(\mechanical{\phi}=\pi)}
  +\mechanical{\vec\tau}_{F_{1y}}
  +\underbrace{\mechanical{\vec\tau}_{F_{2x}}}_{0\;(\mechanical{\phi}=\pi)}
  +\mechanical{\vec\tau}_{F_{2y}},\\
\sum\mechanical{\tau}_z
&=-\mechanical{r}_1\mechanical{F}_{1y}\sin(\pi/2)
  +\mechanical{r}_2\mechanical{F}_{2y}\sin(\pi/2)\\
&=-\mechanical{r}_1\mechanical{F}_{1y}+\mechanical{r}_2\mechanical{F}_{2y}.
\end{aligned}
\tag{2.8}
$$

The $x$ components are antiparallel to their respective position vectors, so their torques are zero. The force $\mechanical{\vec F}_{1y}$ tends to rotate the rod clockwise and gives a negative component along $z$. The force $\mechanical{\vec F}_{2y}$ tends to rotate it counterclockwise and gives a positive component along $z$. Use these signs with the magnitudes of the two torques.

$$
\begin{aligned}
\sum\mechanical{\tau}_z
&=-(MB)\mechanical{F}_{1y}+(MC)\mechanical{F}_{2y}\\
&=-\left(\frac{\mechanical{l}}2-\frac{\mechanical{l}}8\right)\mechanical{F}_{1y}
  +\frac{\mechanical l}2\mechanical{F}_{2y}\\
&=-\frac{3\mechanical{l}}8\mechanical{F}_1\sin\mechanical{\theta}_1
  +\frac{\mechanical{l}}2\mechanical{F}_2\sin\mechanical{\theta}_2\\
&=-\frac{3(2.0\,\unit{m})}{8}(8.0\,\unit{N})\sin(\pi/6)
  +\frac{2.0\,\unit{m}}2(14\sqrt{2}\,\unit{N})\sin(\pi/4)\\
&=-3\,\unit{N\,m}+14\,\unit{N\,m}=+11\,\unit{N\,m}.
\end{aligned}
\tag{2.9}
$$

The positive sign means the net torque points along $+z$ and tends to rotate the rod counterclockwise.

**Example 2: Torque on a moving particle.** A particle of mass $\mechanical{m}$ is moving along a trajectory in the $xy$ plane and its coordinates at any time $t$ are given by $(\mechanical{x}, \mechanical{y}) = (\mechanical{x}_0 + \mechanical{A}\cos(\signal{\omega}_1 t), \mechanical{y}_0 + \mechanical{A}\sin(\signal{\omega}_2 t))$, where $\mechanical{x}_0, \mechanical{y}_0, \mechanical{A}, \signal{\omega}_1$, and $\signal{\omega}_2$ are constants. What is the torque on the particle about the origin at time $t = 0$ ?

Based on the $\mechanical{x}$ and $\mechanical{y}$ coordinates, the position $\mechanical{\vec{r}}(t)$, velocity $\mechanical{\vec{v}}(t)$, and acceleration $\mechanical{\vec{a}}(t)$ of the particle are given by

$$
\mechanical{\vec{r}}(t) = (\mechanical{x}_0 + \mechanical{A}\cos(\signal{\omega}_1 t)) \hat{i} + (\mechanical{y}_0 + \mechanical{A}\sin(\signal{\omega}_2 t)) \hat{j}, \tag{2.10}
$$

$$
\mechanical{\vec{v}}(t) = \frac{d\mechanical{\vec{r}}(t)}{dt} = -\mechanical{A}\signal{\omega}_1 \sin(\signal{\omega}_1 t) \hat{i} + \mechanical{A}\signal{\omega}_2 \cos(\signal{\omega}_2 t) \hat{j}, \tag{2.11}
$$

and

$$
\mechanical{\vec{a}}(t) = \frac{d\mechanical{\vec{v}}(t)}{dt} = -\mechanical{A}\signal{\omega}_1^2 \cos(\signal{\omega}_1 t) \hat{i} - \mechanical{A}\signal{\omega}_2^2 \sin(\signal{\omega}_2 t) \hat{j}. \tag{2.12}
$$

At time $t = 0$, the above equations give that

$$
\mechanical{\vec{r}}(0) = (\mechanical{x}_0 + \mechanical{A}) \hat{i} + \mechanical{y}_0 \hat{j}, \tag{2.13}
$$

$$
\mechanical{\vec{v}}(0) = \mechanical{A}\signal{\omega}_2 \hat{j}, \tag{2.14}
$$

$$
\mechanical{\vec{a}}(0) = -\mechanical{A}\signal{\omega}_1^2 \hat{i}. \tag{2.15}
$$

Since by Newton’s Second Law $\Sigma \mechanical{\vec{F}} = \mechanical{m} \mechanical{\vec{a}}$ and by definition $\mechanical{\vec{\tau}} = \mechanical{\vec{r}} \times \mechanical{\vec{F}}$, we have

$$
\begin{aligned}
\mechanical{\vec\tau}(0)
&=\mechanical{\vec r}(0)\times\mechanical{\vec F}(0)\\
&=\mechanical{m}\bigl(\mechanical{\vec r}(0)\times\mechanical{\vec a}(0)\bigr)\\
&=\mechanical{m}\bigl[(\mechanical{x}_0+\mechanical{A})\hat{\mathbf i}+\mechanical{y}_0\hat{\mathbf j}\bigr]
  \times\bigl(-\mechanical{A}\signal{\omega}_1^2\hat{\mathbf i}\bigr)\\
&=\mechanical{m}(\mechanical{x}_0+\mechanical{A})(-\mechanical{A}\signal{\omega}_1^2)
  \underbrace{\hat{\mathbf i}\times\hat{\mathbf i}}_0
 +\mechanical{m}\mechanical{y}_0(-\mechanical{A}\signal{\omega}_1^2)
  \underbrace{\hat{\mathbf j}\times\hat{\mathbf i}}_{-\hat{\mathbf k}}\\
&=\mechanical{m}\mechanical{A}\mechanical{y}_0\signal{\omega}_1^2\hat{\mathbf k}.
\end{aligned}
\tag{2.16}
$$

Our result makes sense. At all times the position vector is in the $xy$ plane. The force vector, as seen from the acceleration, is also in the $xy$ plane. The torque has to be perpendicular to each of these vectors and the plane formed by them. Thus, the torque is along the $z$ axis. Its signed component in Equation (2.16) is positive when $\mechanical{y}_0>0$, negative when $\mechanical{y}_0<0$, and zero when $\mechanical{y}_0=0$.

**Example 3: Torque due to a continuous force.** A horizontal wheel of radius $\mechanical{R} = 1.0\,\unit{m}$ has forces distributed along its whole circumference. The forces are tangent to the circumference and act in the plane of the wheel, but their magnitude per unit rim length varies as a function of the position, as shown in Figure 2.7. Starting from the point where the rim intersects the $+\mechanical{x}$ axis and moving counterclockwise, the force per unit rim length is given as $\mechanical{\lambda}(\mechanical{\theta}) = 2.0 - \sin \mechanical{\theta}$ ($\unit{N/m}$). Of course, $\mechanical{\theta}$ can take values from 0 to $2\pi$. Find the net torque about an axis that goes through the center of the wheel $O$ and is perpendicular to its plane (the $z$ axis).

For this problem, we will be using the concepts of torque and finding the net torque, Equations (2.2) and (2.6), respectively. We notice that for all forces, the magnitude of the position vector $\mechanical{r}$ is equal to the radius $\mechanical{R}$ and the angle between the position vector and the force is always $\mechanical{\phi} = \pi/2$. Furthermore, all forces will produce counterclockwise rotation when viewed from above, so all the torques are positive. As a result, the net torque is given by:

```graph3d
bounds: [-1.62, 0.9, 1.62, -0.9]
bounds3d: [[-1.94,1.94],[-1.94,1.94],[-1.1,1.35]]
height: 320
width: 650
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
  az: {slider: {start: 3.08, visible: false}, pointer: {enabled: true}}
  el: {slider: {start: 0.72, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"curve3d","def":[[1.4,1.39258,1.3704,1.33369,1.28284,1.2184,1.14104,1.05158,0.95098,0.8403,0.72071,0.59348,0.45996,0.32156,0.17976,0.03605,-0.10805,-0.25099,-0.39128,-0.52742,-0.65797,-0.78154,-0.89683,-1.00261,-1.09777,-1.18129,-1.25228,-1.31,-1.35384,-1.38332,-1.39814,-1.39814,-1.38332,-1.35384,-1.31,-1.25228,-1.18129,-1.09777,-1.00261,-0.89683,-0.78154,-0.65797,-0.52742,-0.39128,-0.25099,-0.10805,0.03605,0.17976,0.32156,0.45996,0.59348,0.72071,0.8403,0.95098,1.05158,1.14104,1.2184,1.28284,1.33369,1.3704,1.39258,1.4],[0,0.14395,0.28637,0.42576,0.56064,0.68957,0.81119,0.92421,1.02744,1.11977,1.20024,1.26798,1.32228,1.36257,1.38841,1.39954,1.39582,1.37732,1.34421,1.29685,1.23575,1.16155,1.07503,0.97712,0.86885,0.75137,0.62593,0.49385,0.35654,0.21545,0.07207,-0.07207,-0.21545,-0.35654,-0.49385,-0.62593,-0.75137,-0.86885,-0.97712,-1.07503,-1.16155,-1.23575,-1.29685,-1.34421,-1.37732,-1.39582,-1.39954,-1.38841,-1.36257,-1.32228,-1.26798,-1.20024,-1.11977,-1.02744,-0.92421,-0.81119,-0.68957,-0.56064,-0.42576,-0.28637,-0.14395,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#344b61","strokeWidth":1.65,"fixed":true,"highlight":false,"fillColor":"#bed2e2","fillOpacity":0.37}},
  {"type":"line3d","def":[[0,0,-1.07],[0,0,1.52]],"att":{"strokeColor":"#617488","lastArrow":true,"dash":2,"strokeWidth":2,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[1.67,0,0]],"att":{"strokeColor":"#617488","lastArrow":true,"dash":2,"strokeWidth":2,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[1.07078,0.9019,0]],"att":{"strokeColor":"#344b61","lastArrow":false,"dash":0,"strokeWidth":2,"fixed":true,"highlight":false}},
  {"type":"curve3d","def":[[0.36,0.35969,0.35878,0.35726,0.35513,0.3524,0.34907,0.34515,0.34064,0.33556,0.32991,0.3237,0.31694,0.30964,0.30182,0.29349,0.28466,0.27534],[0,0.01482,0.02961,0.04436,0.05903,0.0736,0.08804,0.10233,0.11646,0.13038,0.14408,0.15754,0.17073,0.18363,0.19622,0.20848,0.22039,0.23192],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#994521","strokeWidth":1.65,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.69,0,0],"+x"],"att":{"fontSize":16,"anchorX":"left","fixed":true,"highlight":false,"strokeColor":"#344b61"}},
  {"type":"text3d","def":[[0.07,0.02,1.54],"+z"],"att":{"fontSize":16,"anchorX":"left","fixed":true,"highlight":false,"strokeColor":"#344b61"}},
  {"type":"text3d","def":[[0.14,0,-0.13],"𝑂"],"att":{"fontSize":16,"anchorX":"left","fixed":true,"highlight":false,"strokeColor":"#344b61"}},
  {"type":"text3d","def":[[0.48,0.22,0.1],"𝑅"],"att":{"fontSize":16,"anchorX":"left","fixed":true,"highlight":false,"strokeColor":"#344b61"}},
  {"type":"text3d","def":[[0.37,0.23,-0.08],"θ"],"att":{"fontSize":16,"anchorX":"left","fixed":true,"highlight":false,"strokeColor":"#994521"}},
  {"type":"line3d","def":[[1.38428,0.20921,0],[1.32206,0.62091,0]],"att":{"strokeColor":"#186b99","lastArrow":true,"dash":0,"strokeWidth":2.6,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.8309,1.12677,0],[0.61447,1.28637,0]],"att":{"strokeColor":"#186b99","lastArrow":true,"dash":0,"strokeWidth":2.6,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-0.20921,1.38428,0],[-0.43418,1.35028,0]],"att":{"strokeColor":"#186b99","lastArrow":true,"dash":0,"strokeWidth":2.6,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.12677,0.8309,0],[-1.31459,0.5762,0]],"att":{"strokeColor":"#186b99","lastArrow":true,"dash":0,"strokeWidth":2.6,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.38428,-0.20921,0],[-1.31201,-0.6874,0]],"att":{"strokeColor":"#186b99","lastArrow":true,"dash":0,"strokeWidth":2.6,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-0.8309,-1.12677,0],[-0.32298,-1.50132,0]],"att":{"strokeColor":"#186b99","lastArrow":true,"dash":0,"strokeWidth":2.6,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.20921,-1.38428,0],[0.87413,-1.28379,0]],"att":{"strokeColor":"#186b99","lastArrow":true,"dash":0,"strokeWidth":2.6,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1.12677,-0.8309,0],[1.4731,-0.36125,0]],"att":{"strokeColor":"#186b99","lastArrow":true,"dash":0,"strokeWidth":2.6,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.5,0.54,0.05],"𝐹(θ₁)"],"att":{"fontSize":15,"anchorX":"left","fixed":true,"highlight":false,"strokeColor":"#186b99"}},
  {"type":"text3d","def":[[0.75,1.51,0.1],"𝐹(θ₂)"],"att":{"fontSize":15,"anchorX":"left","fixed":true,"highlight":false,"strokeColor":"#186b99"}},
  {"type":"text3d","def":[[-0.32,1.56,0.06],"𝐹(θ₃)"],"att":{"fontSize":15,"anchorX":"right","fixed":true,"highlight":false,"strokeColor":"#186b99"}},
  {"type":"text3d","def":[[-1.31,0.93,0.06],"𝐹(θ₄)"],"att":{"fontSize":15,"anchorX":"right","fixed":true,"highlight":false,"strokeColor":"#186b99"}},
  {"type":"text3d","def":[[-1.38,-0.58,0.05],"𝐹(θ₅)"],"att":{"fontSize":15,"anchorX":"right","fixed":true,"highlight":false,"strokeColor":"#186b99"}},
  {"type":"text3d","def":[[-0.67,-1.49,0],"𝐹(θ₆)"],"att":{"fontSize":15,"anchorX":"right","fixed":true,"highlight":false,"strokeColor":"#186b99"}},
  {"type":"text3d","def":[[0.52,-1.55,-0.035],"𝐹(θ₇)"],"att":{"fontSize":15,"anchorX":"left","fixed":true,"highlight":false,"strokeColor":"#186b99"}},
  {"type":"text3d","def":[[1.45,-0.65,-0.02],"𝐹(θ₈)"],"att":{"fontSize":15,"anchorX":"left","fixed":true,"highlight":false,"strokeColor":"#186b99"}}
]
```

**Fig. 2.7** The forces act tangentially at the rim of the wheel. At every point, the force is perpendicular to the position vector. Its magnitude varies with the angular position $\mechanical{\theta}$. Drag to rotate the plot.

$$
\begin{aligned}
\sum_i\mechanical{\vec\tau}_{i,z}
 &=\mechanical{\vec\tau}_1+\mechanical{\vec\tau}_2+\mechanical{\vec\tau}_3+\cdots,\\
\sum_i\mechanical{\tau}_{i,z}
 &=\mechanical{\tau}_1+\mechanical{\tau}_2+\mechanical{\tau}_3+\cdots\\
 &=\mechanical{R}\mechanical{F}_1\sin(\pi/2)+\mechanical{R}\mechanical{F}_2\sin(\pi/2)
   +\mechanical{R}\mechanical{F}_3\sin(\pi/2)+\cdots\\
 &=\mechanical{R}\sum_i\mechanical{F}_i.
\end{aligned}
\tag{2.17}
$$

It is clear at this point that we need to find the sum of all the forces’ magnitudes. However, since the magnitude changes continuously with the position $\mechanical{\theta}$ on the wheel, the sum becomes an integral where $\mechanical{\theta}$ is the variable of integration. A rim element of length $\mechanical{R}\,d\mechanical{\theta}$ carries the force $d\mechanical{F}=\mechanical{\lambda}\mechanical{R}\,d\mechanical{\theta}$. Therefore, the net torque is:

$$
\begin{aligned}
\sum_i\mechanical{\tau}_{i,z}
 &=\mechanical{R}\int_0^{2\pi}\mechanical{\lambda}(\mechanical{\theta})\,\mechanical{R}\,d\mechanical{\theta}=\mechanical{R}^2\int_0^{2\pi}(2-\sin\mechanical{\theta})\,d\mechanical{\theta}\\
 &=\mechanical{R}^2\bigl[2\mechanical{\theta}+\cos\mechanical{\theta}\bigr]_0^{2\pi}\\
 &=(1.0\,\unit{m})^2(4\pi+1-1)\,\unit{N/m}=4\pi\,\unit{N\,m}.
\end{aligned}
\tag{2.18}
$$

The torque points along $+z$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\vec\tau},\mechanical{\tau}_z$ | $\unit{N\,m}$ | Torque | The moment of the force about the specified pivot or its component along the rotation axis. |
| $\mechanical{\vec F},\mechanical{\vec F}_1,\mechanical{\vec F}_2$ | $\unit{N}$ | Force | The applied force or one of the two forces in the rod example. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The mass of the particle. |
| $\mechanical{\vec r}$ | $\unit{m}$ | Position vector | The vector from the pivot or axis to the point where the force acts. |
| $\mechanical{d}$ | $\unit{m}$ | Moment arm | The perpendicular distance from the axis to the force’s line of action. |
| $\mechanical{\phi},\mechanical{\theta}$ | $\unit{rad}$ | Angle | The angle between vectors or the indicated orientation of the force or wheel. |
| $\mechanical{l}$ | $\unit{m}$ | Length | The length of the rod. |
| $\mechanical{R}$ | $\unit{m}$ | Radius | The distance from the center of the wheel to its rim. |
| $\mechanical{\lambda}$ | $\unit{N\,m^{-1}}$ | Force per unit length | The tangential force per unit rim length on the wheel. |
| $\mechanical{A}$ | $\unit{m}$ | Amplitude | The amplitude of the particle’s sinusoidal coordinate functions. |
| $\mechanical{x},\mechanical{y},\mechanical{\vec x}$ | $\unit{m}$ | Position | The particle’s coordinates or the position in the work integral. |
| $\mechanical{\vec v}$ | $\unit{m\,s^{-1}}$ | Velocity | The first time derivative of the particle’s position. |
| $\mechanical{\vec a}$ | $\unit{m\,s^{-2}}$ | Acceleration | The time derivative of the particle’s velocity. |
| $\signal{\omega}_1,\signal{\omega}_2$ | $\unit{rad\,s^{-1}}$ | Angular frequencies | The constants in the particle’s sinusoidal coordinate functions. |
| $t$ | $\unit{s}$ | Time | The independent variable in the moving-particle example. |
| $\energy{W}$ | $\unit{J}$ | Work | The energy transferred by a force over a displacement. |
