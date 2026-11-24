---
title: "2.2 Static Equilibrium of a Rigid Body"
---

> [!TLDR]
> For a rigid body in static equilibrium, the body is at rest, and the net force and the net torque about any point are zero.

Now that we have defined the concept of torque and we have seen examples of how to calculate it, we will move to study the equilibrium of rigid bodies. As defined in Chapter 1, a rigid body is a solid object in which deformation under the application of a force is zero, or so small it can be neglected. For a rigid body, therefore, the distance between any two points of the object will not change over time.

Since we now have two types of motion to consider, translational and rotational, we have two types of equilibrium. In the case of translational motion, we recall that an object is in translational equilibrium when the net force on that object is equal to zero. We define rotational equilibrium in a similar way, namely, when the net torque on an object is zero. But why is this? In the case of translational motion, when the net force on an object is zero, the linear acceleration of the object is also zero, which means the object is either stationary or moving with constant linear velocity. We have said that torques are the equivalent of forces in the case of rotational motion. Then, when the net torque on an object is zero, the angular acceleration of the object is zero, which means the object is either not rotating or rotating with constant angular velocity (this will become more clear in the next chapter when we discuss Newton’s Second Law for rotational motion). For an object to be in *static equilibrium*, it has to be at rest and in both translational and rotational equilibrium. The following two conditions must therefore be satisfied:

(i) Translational Equilibrium:

$$
\Sigma \mechanical{\vec{F}} = 0 \Rightarrow
\begin{cases}
\Sigma \mechanical{F}_x = 0 \\
\Sigma \mechanical{F}_y = 0 \\
\Sigma \mechanical{F}_z = 0.
\end{cases} \tag{2.19}
$$

(ii) Rotational Equilibrium:

$$
\Sigma \mechanical{\vec{\tau}} = 0. \tag{2.20}
$$

Equations (2.19) and (2.20) will be used every time we study an object in static equilibrium.

There is an important point that needs to be made here. If an object is stationary (or moving with constant angular velocity), its angular acceleration is zero. This means that no matter which axis we pick about which to calculate the torques on the object, the net torque $\Sigma \mechanical{\vec{\tau}} = 0$. If the net torque were not equal to zero about even one axis, then there would be angular acceleration, and the object would not be stationary (or would not be moving with constant angular velocity). In many cases, we can pick an axis that will simplify the calculations, as we will see in our examples. This is why we did not include a subscript in Equation (2.20).

## 2.2.1 Drawing Forces

When drawing forces, it is important to consider the exact location of an object at which each force is exerted. Based on the definition of torque, the point of application of the force will determine the vector $\mechanical{\vec{r}}$ and, therefore, the value of the torque. In this section, we focus on the direction and point of application of the following forces: The gravitational force, the force due to tension, the spring force, the reaction force from a supporting surface, the static friction force, the kinetic friction force, and the reaction force from a junction. We expect you to know the magnitudes of forces such as the gravitational force, the spring force, and the frictional forces.[^drawing-forces]

![[rotational-motion-fig-2-8.svg|**Fig. 2.8** The system consists of two objects, the rod and the sphere, each supported by an inelastic rope. Rope 1 connects the sphere to the rod and rope 2 connects the rod to a wall. The sphere experiences the force due to tension $\mechanical{\vec{F}}_{T1}$ while the rod experiences the forces due to tension of $\mechanical{\vec{F}}'_{T1}$ and $\mechanical{\vec{F}}_{T2}$. Because each rope is massless, the forces at its two ends are equal and opposite: $\mechanical{\vec{F}}_{T1} = -\mechanical{\vec{F}}'_{T1}$ and $\mechanical{\vec{F}}_{T2} = -\mechanical{\vec{F}}'_{T2}$. These pairs act on different bodies through the rope and are not Newton’s third-law pairs.|370]]

- **The gravitational force $\mechanical{\vec{F}}_{g}$**: The gravitational force $\mechanical{\vec{F}}_{g}$ is exerted at the center of gravity of the object. The center of gravity coincides with the CM when the object is inside a uniform gravitational field, which is the case when close to the Earth’s surface. Consequently, if an object is rotating about an axis that goes through its CM, $\mechanical{\vec{r}} = 0$ and there is no torque due to $\mechanical{\vec{F}}_{g}$. In fact, one can find the location of the CM of an extended object by computing the location about which the torque due to the gravitational force is zero. This is the focus of the first two exercises at the end of this chapter.

- **The force due to tension $\mechanical{\vec{F}}_{T}$**: When an object is connected to a rope, then tension in the rope exerts a force $\mechanical{\vec{F}}_{T}$ on the object along the rope. The point of application is where the object is connected to the rope. The magnitude of the force due to tension can vary depending on what other forces are exerted on the object. However, there is a maximum value that this force can take, above which the rope will break. In this book, we ignore the effects of elasticity. Figure 2.8 shows a sphere, a rod, and the two ropes that support them. Rope 1 exerts a tension force $\mechanical{\vec{F}}_{T1}$ on the sphere. Both ropes 1 and 2 are connected to the rod at its end B. Thus, they exert forces $\mechanical{\vec{F}}'_{T1}$ and $\mechanical{\vec{F}}_{T2}$, respectively, on the end B. $\mechanical{\vec{F}}'_{T2}$ is exerted by rope 2 on the wall.

- **The spring force $\mechanical{\vec{F}}_{s}$**: The spring force $\mechanical{\vec{F}}_{s}$ is exerted on the point of the object that is directly in contact with the spring. Recall that the direction of the spring force is such that it always tries to return the spring to its natural length so that the spring is neither stretched nor compressed.

```graph
bounds: [-0.2, 2.35, 8.3, -0.49]
height: 242
width: 725
axis: false
drag: false
showNavigation: false
keepAspectRatio: false
elements: [
  {"type":"curve","def":[[1.98,1.9731,1.9524,1.9182,1.8711,1.8119,1.7415,1.6609,1.5715,1.4747,1.3719,1.2649,1.1553,1.0447,0.9351,0.8281,0.7253,0.6285,0.5391,0.4585,0.3881,0.3289,0.2818,0.2476,0.2269,0.22,0.2269,0.2476,0.2818,0.3289,0.3881,0.4585,0.5391,0.6285,0.7253,0.8281,0.9351,1.0447,1.1553,1.2649,1.3719,1.4747,1.5715,1.6609,1.7415,1.8119,1.8711,1.9182,1.9524,1.9731,1.98],[0.88,0.9903,1.0988,1.2039,1.3039,1.3973,1.4824,1.5581,1.623,1.6762,1.7169,1.7444,1.7583,1.7583,1.7444,1.7169,1.6762,1.623,1.5581,1.4824,1.3973,1.3039,1.2039,1.0988,0.9903,0.88,0.7697,0.6612,0.5561,0.4561,0.3627,0.2776,0.2019,0.137,0.0838,0.0431,0.0156,0.0017,0.0017,0.0156,0.0431,0.0838,0.137,0.2019,0.2776,0.3627,0.4561,0.5561,0.6612,0.7697,0.88]],"att":{"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":1.65,"fillColor":"#c9dfeb","fillOpacity":0.45}},
  {"type":"line","def":[[0.08,0],[2.12,0]],"att":{"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":1.5,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[0.08,0],[0.03,-0.075]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[0.22,0],[0.17,-0.075]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[0.36,0],[0.31,-0.075]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[0.5,0],[0.45,-0.075]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[0.64,0],[0.59,-0.075]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[0.78,0],[0.73,-0.075]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[0.92,0],[0.87,-0.075]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[1.06,0],[1.01,-0.075]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[1.2,0],[1.15,-0.075]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[1.34,0],[1.29,-0.075]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[1.48,0],[1.43,-0.075]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[1.62,0],[1.57,-0.075]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[1.76,0],[1.71,-0.075]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[1.9,0],[1.85,-0.075]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[2.04,0],[1.99,-0.075]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[1.1,0],[1.1,0.68]],"att":{"fixed":true,"highlight":false,"strokeColor":"#186b99","strokeWidth":2.6,"dash":0,"lastArrow":true,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"text","def":[0.9,0.82,"𝑛"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#186b99","anchorX":"left"}},
  {"type":"text","def":[0.06,1.98,"(a)"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"text","def":[1.27,-0.25,"Smooth"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"curve","def":[[3.01,4.65,4.65,3.01,3.01],[0,0,1.66,1.66,0]],"att":{"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":1.65,"fillColor":"#c9dfeb","fillOpacity":0.48}},
  {"type":"line","def":[[2.82,0],[4.82,0]],"att":{"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":1.5,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[2.82,0],[2.77,-0.075]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[2.96,0],[2.91,-0.075]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[3.1,0],[3.05,-0.075]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[3.24,0],[3.19,-0.075]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[3.38,0],[3.33,-0.075]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[3.52,0],[3.47,-0.075]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[3.66,0],[3.61,-0.075]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[3.8,0],[3.75,-0.075]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[3.94,0],[3.89,-0.075]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[4.08,0],[4.03,-0.075]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[4.22,0],[4.17,-0.075]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[4.36,0],[4.31,-0.075]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[4.5,0],[4.45,-0.075]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[4.64,0],[4.59,-0.075]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[4.78,0],[4.73,-0.075]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[3.83,0],[3.83,0.68]],"att":{"fixed":true,"highlight":false,"strokeColor":"#186b99","strokeWidth":2.6,"dash":0,"lastArrow":true,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"point","def":[3.83,0.87],"att":{"fixed":true,"highlight":false,"size":2.8,"withLabel":false,"fillColor":"#344b61","strokeColor":"#344b61"}},
  {"type":"text","def":[3.87,0.94,"CM"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"text","def":[3.6,0.82,"𝑛"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#186b99","anchorX":"left"}},
  {"type":"text","def":[2.79,1.98,"(b)"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"text","def":[3.97,-0.25,"Smooth"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"curve","def":[[6.67,6.98,6.98,6.67,6.67],[0.3,0.3,1.29,1.29,0.3]],"att":{"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":1.65,"fillColor":"#c9dfeb","fillOpacity":0.48}},
  {"type":"line","def":[[6.99,-0.04],[6.99,1.69]],"att":{"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":1.65,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[6.99,0],[7.1,0.05]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[6.99,0.14],[7.1,0.19]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[6.99,0.28],[7.1,0.33]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[6.99,0.42000000000000004],[7.1,0.47000000000000003]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[6.99,0.56],[7.1,0.6100000000000001]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[6.99,0.7000000000000001],[7.1,0.7500000000000001]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[6.99,0.8400000000000001],[7.1,0.8900000000000001]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[6.99,0.9800000000000001],[7.1,1.03]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[6.99,1.12],[7.1,1.1700000000000002]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[6.99,1.2600000000000002],[7.1,1.3100000000000003]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[6.99,1.4000000000000001],[7.1,1.4500000000000002]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[6.99,1.54],[7.1,1.59]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[6.99,1.08],[6.28,1.08]],"att":{"fixed":true,"highlight":false,"strokeColor":"#186b99","strokeWidth":2.6,"dash":0,"lastArrow":true,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[6.67,1.08],[7.67,1.08]],"att":{"fixed":true,"highlight":false,"strokeColor":"#994521","strokeWidth":2.6,"dash":0,"lastArrow":true,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"text","def":[6.23,1.28,"𝑛"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#186b99","anchorX":"left"}},
  {"type":"text","def":[7.46,1.28,"𝐹"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#994521","anchorX":"left"}},
  {"type":"text","def":[6.12,1.98,"(c)"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"text","def":[6.72,-0.25,"Smooth"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"left"}}
]
```

**Fig. 2.9** The normal force acts perpendicular to the surface. (a) A wheel touches the floor at one point. (b) The resultant normal force on the box acts below its center of mass in the case shown. (c) The wall’s normal force acts opposite the applied force at the same height.

- **The reaction force from a supporting surface $\mechanical{\vec{n}}$**: The reaction force $\mechanical{\vec{n}}$ between an object and a surface is exerted on the point of the object that is in direct contact with the surface. For example, the reaction force on a wheel by a horizontal surface (Figure 2.9a) is exerted at the point of the wheel that is in contact with the surface. If there are more points between the two surfaces that are in contact (e.g., a box sliding on a table, as in Figure 2.9b), then the reaction force is exerted at the point of contact that is below the object’s CM. This is because, as we just discussed, the gravitational force of an object acts at its CM. Therefore, if we consider all the mass to be concentrated at that single point, it is as if that point is in contact with the surface. This rule holds only when no other force exerts a torque about that point. If a horizontal force $\mechanical{\vec{F}}$ pushes the box at a height $\mechanical{h}$ above the surface (Figure 2.10a), $\mechanical{\vec{F}}$ and the static friction at the surface form a couple. The effective point of application of $\mechanical{\vec{n}}$ then moves toward the leading edge by $\mechanical{h}\mechanical{F}/\mechanical{n}$, and it reaches that edge at the tipping threshold. Similarly, if we push a book against a wall (Figure 2.9c), the reaction force will be exerted at the point of contact with the wall that is at the same height as the point at which we exert the force. This is also an idealization: the book's weight and the wall's friction force also exert torques, so the effective point of application of the wall's reaction force can shift from this height. In summary, the reaction force “reacts” to oppose the force that wants to push the two surfaces together.

- **The static friction force $\mechanical{\vec{f}}_s$**: In Figure 2.10a, we apply a force $\mechanical{\vec{F}}$ on a box at rest on a rough surface. This external force attempts to move the box to the right. A force of static friction $\mechanical{\vec{f}}_s$ will appear when the box and the rough surface attempt to slide against each other. The direction of this force is parallel to the two surfaces and against the intended direction of motion of each surface. Thus, in Figure 2.10a the static friction on the box will be pointing to the left. We take its point of application to be the same as that of the reaction force $\mechanical{\vec{n}}$. In summary, two forces are exerted on the box at the point of contact between the two surfaces: One is the reaction force $\mechanical{\vec{n}}$ and the other is the static friction $\mechanical{\vec{f}}_s$. The net force exerted by the surface on the box will be the vector sum of these two perpendicular forces.

```graph
bounds: [-0.44, 2.52, 6.72, -0.5]
height: 281
width: 665
axis: false
drag: false
showNavigation: false
keepAspectRatio: false
elements: [
  {"type":"curve","def":[[0.18,1.95,1.95,0.18,0.18],[0,0,1.75,1.75,0]],"att":{"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":1.65,"fillColor":"#c9dfeb","fillOpacity":0.48}},
  {"type":"line","def":[[-0.16,0],[2.23,0]],"att":{"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":1.5,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[-0.16,0],[-0.21,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[-0.02,0],[-0.07,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[0.12,0],[0.07,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[0.26,0],[0.21,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[0.4,0],[0.35,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[0.54,0],[0.49,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[0.68,0],[0.63,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[0.82,0],[0.77,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[0.96,0],[0.91,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[1.1,0],[1.05,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[1.24,0],[1.19,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[1.38,0],[1.33,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[1.52,0],[1.47,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[1.66,0],[1.61,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[1.8,0],[1.75,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[1.94,0],[1.89,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[2.08,0],[2.03,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[2.22,0],[2.17,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[1.05,0],[1.05,0.77]],"att":{"fixed":true,"highlight":false,"strokeColor":"#186b99","strokeWidth":2.6,"dash":0,"lastArrow":true,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[1.95,0.85],[2.63,0.85]],"att":{"fixed":true,"highlight":false,"strokeColor":"#994521","strokeWidth":2.6,"dash":0,"lastArrow":true,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[1.05,0],[0.24,0]],"att":{"fixed":true,"highlight":false,"strokeColor":"#2b7354","strokeWidth":2.6,"dash":0,"lastArrow":true,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"text","def":[1.12,0.79,"𝑛"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#186b99","anchorX":"left"}},
  {"type":"text","def":[2.5,1.02,"𝐹"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#994521","anchorX":"left"}},
  {"type":"text","def":[0.08,0.23,"fₛ"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#2b7354","anchorX":"left"}},
  {"type":"text","def":[1.5,-0.23,"Rough"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"text","def":[-0.18,2.15,"(a)"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"text","def":[1.38,2.07,"v = 0"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#186b99","anchorX":"left"}},
  {"type":"curve","def":[[3.66,5.43,5.43,3.66,3.66],[0,0,1.75,1.75,0]],"att":{"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":1.65,"fillColor":"#c9dfeb","fillOpacity":0.48}},
  {"type":"line","def":[[3.32,0],[5.71,0]],"att":{"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":1.5,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[3.32,0],[3.27,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[3.46,0],[3.41,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[3.6,0],[3.55,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[3.74,0],[3.69,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[3.88,0],[3.83,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[4.02,0],[3.97,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[4.16,0],[4.11,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[4.3,0],[4.25,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[4.44,0],[4.39,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[4.58,0],[4.53,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[4.72,0],[4.67,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[4.86,0],[4.81,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[5,0],[4.95,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[5.14,0],[5.09,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[5.28,0],[5.23,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[5.42,0],[5.37,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[5.56,0],[5.51,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[5.7,0],[5.65,-0.12]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[4.53,0],[4.53,0.77]],"att":{"fixed":true,"highlight":false,"strokeColor":"#186b99","strokeWidth":2.6,"dash":0,"lastArrow":true,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[5.43,0.85],[6.11,0.85]],"att":{"fixed":true,"highlight":false,"strokeColor":"#994521","strokeWidth":2.6,"dash":0,"lastArrow":true,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[4.53,0],[3.72,0]],"att":{"fixed":true,"highlight":false,"strokeColor":"#2b7354","strokeWidth":2.6,"dash":0,"lastArrow":true,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"text","def":[4.6,0.79,"𝑛"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#186b99","anchorX":"left"}},
  {"type":"text","def":[5.98,1.02,"𝐹"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#994521","anchorX":"left"}},
  {"type":"text","def":[3.56,0.23,"fₖ"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#2b7354","anchorX":"left"}},
  {"type":"text","def":[4.98,-0.23,"Rough"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"text","def":[3.3,2.15,"(b)"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"line","def":[[4.72,2.03],[5.52,2.03]],"att":{"fixed":true,"highlight":false,"strokeColor":"#186b99","strokeWidth":2.4,"dash":0,"lastArrow":true,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"text","def":[5.24,2.23,"𝑣"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#186b99","anchorX":"left"}}
]
```

**Fig. 2.10** (a) The box is stationary. Static friction $\mechanical{\vec f}_s$ opposes the motion that the applied force would cause. (b) The box moves to the right. Kinetic friction $\mechanical{\vec f}_k$ acts to the left. The reaction from the surface is the vector sum of its normal force and friction force.

- **The kinetic friction force $\mechanical{\vec{f}}_k$**: We know from translational motion that when an object is moving against a rough surface, there is kinetic friction $\mechanical{\vec{f}}_k$, which opposes the object’s motion. Its point of application is the same as that of the reaction force $\mechanical{\vec{n}}$. $\mechanical{\vec{f}}_k$ is therefore now taking the place of $\mechanical{\vec{f}}_s$ of the previous case, as shown in Figure 2.10b, and the net reaction force will be the vector sum of the reaction force and the kinetic friction force.

- **The reaction force from a junction $\mechanical{\vec{R}}$**: When a junction connects an object to a firm surface, there is a reaction force $\mechanical{\vec{R}}$ that is exerted from the firm surface on the object via the junction. This force has a magnitude and direction that varies, depending on what other forces are exerted on the object. However, the point of application of $\mechanical{\vec{R}}$ on the object is the point of the object that is in contact with the junction. Figure 2.11 shows the forces exerted on a rod that remains horizontal with the help of a junction and a rope.

Now we are ready to do examples that illustrate these concepts. Because we are dealing with objects in equilibrium, the form of Equations (2.19) and (2.20) will require that we break forces into their components. If a force is unknown, then we will assume that all its components are positive (i.e., the components point in the positive direction of their respective axis) and we will draw them this way on our picture. The solution will tell us if one or more of the components point in the negative direction along their axis because our answer will have a negative sign. Furthermore, as mentioned, since we can pick any axis to be our axis of rotation for an object in equilibrium, we will pick our axis of rotation to go through a point at which one or more of the *unknown* forces are exerted. This will minimize the number of unknowns in Equation (2.20), which will simplify the algebra, as we will show in our next example.

![[rotational-motion-fig-2-11.svg|**Fig. 2.11** A rod remains horizontal and in equilibrium by having one end attached to a wall via a junction while the other end is also attached to the wall via a rope. The magnitude and direction of the reaction force $\mechanical{\vec{R}}$ from the junction will depend on the gravitational force $\mechanical{\vec{F}}_g$ and the force of tension $\mechanical{\vec{F}}_T$.|370]]

**Example 4: A system of objects in static equilibrium.** The uniform, thin rod shown in Figure 2.12a has length $\mechanical{L} = 8.0\,\unit{m}$ and mass $\mechanical{M} = 100\,\unit{kg}$. A small ball of $\mechanical{m} = 20\,\unit{kg}$ is placed $\mechanical{L}_1 = 2.0\,\unit{m}$ away from one end. Given that the gravitational acceleration is $\mechanical{g} = 10\,\unit{m/s}^2$, find the reaction forces on the rod at points $A$ and $B$ where the rod is supported.

As always, we first draw all the forces. Because we have two objects of interest, the rod and the ball, we draw all forces on these two objects and break them into their components, if applicable. In this case, as seen in Figure 2.12b, all forces are along the $y$ axis, so we do not need to decompose them. Of course, we also show the coordinate system and the positive and negative directions for rotation, as discussed previously.

The force $\mechanical{\vec{n}}_{rb}$ is the force exerted on the ball by the rod while the force $\mechanical{\vec{n}}_{br}$ is the force exerted on the rod by the ball. These two forces form an action–reaction pair and according to Newton’s Third law $\mechanical{\vec{n}}_{rb} = -\mechanical{\vec{n}}_{br}$.

Since we have two objects, we will have to look at each object separately. For the ball, we can assume that the axis of rotation goes through its center $O$ and is perpendicular to the plane of the page. We have two forces exerted on the ball, both along the $y$ axis. So, our equations for equilibrium (Equations (2.19) and (2.20)) become, respectively:

```graph
bounds: [-0.32, 4.05, 5.7, -1.35]
height: 475
width: 530
axis: false
drag: false
showNavigation: false
keepAspectRatio: false
elements: [
  {"type":"curve","def":[[0.37,3.8,3.8,0.37,0.37],[2.5300000000000002,2.5300000000000002,2.71,2.71,2.5300000000000002]],"att":{"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":1.65,"fillColor":"#c9dfeb","fillOpacity":0.48}},
  {"type":"line","def":[[0.37,2.56],[0.25,2.17]],"att":{"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":1.7,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[0.37,2.56],[0.49,2.17]],"att":{"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":1.7,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[3.8,2.56],[3.6799999999999997,2.17]],"att":{"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":1.7,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[3.8,2.56],[3.92,2.17]],"att":{"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":1.7,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"text","def":[0.16,2.62,"𝐴"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"text","def":[3.88,2.62,"𝐵"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"curve","def":[[1.47,1.468,1.4621,1.4524,1.4391,1.4223,1.4022,1.3794,1.354,1.3264,1.2973,1.2668,1.2357,1.2043,1.1732,1.1427,1.1136,1.086,1.0606,1.0378,1.0177,1.0009,0.9876,0.9779,0.972,0.97,0.972,0.9779,0.9876,1.0009,1.0177,1.0378,1.0606,1.086,1.1136,1.1427,1.1732,1.2043,1.2357,1.2668,1.2973,1.3264,1.354,1.3794,1.4022,1.4223,1.4391,1.4524,1.4621,1.468,1.47],[2.96,2.9913,3.0222,3.052,3.0804,3.1069,3.1311,3.1526,3.1711,3.1862,3.1978,3.2056,3.2095,3.2095,3.2056,3.1978,3.1862,3.1711,3.1526,3.1311,3.1069,3.0804,3.052,3.0222,2.9913,2.96,2.9287,2.8978,2.868,2.8396,2.8131,2.7889,2.7674,2.7489,2.7338,2.7222,2.7144,2.7105,2.7105,2.7144,2.7222,2.7338,2.7489,2.7674,2.7889,2.8131,2.8396,2.868,2.8978,2.9287,2.96]],"att":{"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":1.65,"fillColor":"#c9dfeb","fillOpacity":0.65}},
  {"type":"point","def":[1.22,2.96],"att":{"fixed":true,"highlight":false,"size":2.4,"withLabel":false,"fillColor":"#344b61","strokeColor":"#344b61"}},
  {"type":"curve","def":[[0.37,3.8,3.8,0.37,0.37],[-0.09,-0.09,0.09,0.09,-0.09]],"att":{"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":1.65,"fillColor":"#c9dfeb","fillOpacity":0.48}},
  {"type":"line","def":[[0.37,-0.06],[0.25,-0.45]],"att":{"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":1.7,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[0.37,-0.06],[0.49,-0.45]],"att":{"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":1.7,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[3.8,-0.06],[3.6799999999999997,-0.45]],"att":{"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":1.7,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[3.8,-0.06],[3.92,-0.45]],"att":{"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":1.7,"dash":0,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"text","def":[0.16,0,"𝐴"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"text","def":[3.88,0,"𝐵"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"curve","def":[[1.47,1.468,1.4621,1.4524,1.4391,1.4223,1.4022,1.3794,1.354,1.3264,1.2973,1.2668,1.2357,1.2043,1.1732,1.1427,1.1136,1.086,1.0606,1.0378,1.0177,1.0009,0.9876,0.9779,0.972,0.97,0.972,0.9779,0.9876,1.0009,1.0177,1.0378,1.0606,1.086,1.1136,1.1427,1.1732,1.2043,1.2357,1.2668,1.2973,1.3264,1.354,1.3794,1.4022,1.4223,1.4391,1.4524,1.4621,1.468,1.47],[0.34,0.3713,0.4022,0.432,0.4604,0.4869,0.5111,0.5326,0.5511,0.5662,0.5778,0.5856,0.5895,0.5895,0.5856,0.5778,0.5662,0.5511,0.5326,0.5111,0.4869,0.4604,0.432,0.4022,0.3713,0.34,0.3087,0.2778,0.248,0.2196,0.1931,0.1689,0.1474,0.1289,0.1138,0.1022,0.0944,0.0905,0.0905,0.0944,0.1022,0.1138,0.1289,0.1474,0.1689,0.1931,0.2196,0.248,0.2778,0.3087,0.34]],"att":{"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":1.65,"fillColor":"#c9dfeb","fillOpacity":0.65}},
  {"type":"point","def":[1.22,0.34],"att":{"fixed":true,"highlight":false,"size":2.4,"withLabel":false,"fillColor":"#344b61","strokeColor":"#344b61"}},
  {"type":"text","def":[-0.05,3.57,"(a)"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"text","def":[-0.05,1.01,"(b)"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"line","def":[[0.37,3.23],[3.8,3.23]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1.5,"dash":0,"lastArrow":true,"firstArrow":true,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[0.37,3.52],[1.22,3.52]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1.5,"dash":0,"lastArrow":true,"firstArrow":true,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[0.37,2.72],[0.37,3.54]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1.1,"dash":2,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[3.8,2.72],[3.8,3.28]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1.1,"dash":2,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[1.22,2.89],[1.22,3.52]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1.1,"dash":2,"lastArrow":false,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"text","def":[0.53,3.7,"L₁"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"text","def":[2.2,3.47,"𝐿"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"line","def":[[0.37,0],[0.37,0.84]],"att":{"fixed":true,"highlight":false,"strokeColor":"#186b99","strokeWidth":2.6,"dash":0,"lastArrow":true,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[3.8,0],[3.8,0.7]],"att":{"fixed":true,"highlight":false,"strokeColor":"#186b99","strokeWidth":2.6,"dash":0,"lastArrow":true,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[1.22,0.11],[1.22,1.03]],"att":{"fixed":true,"highlight":false,"strokeColor":"#186b99","strokeWidth":2.6,"dash":0,"lastArrow":true,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[1.22,0.06],[1.22,-0.5]],"att":{"fixed":true,"highlight":false,"strokeColor":"#186b99","strokeWidth":2.6,"dash":0,"lastArrow":true,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[1.22,0.34],[1.22,-0.79]],"att":{"fixed":true,"highlight":false,"strokeColor":"#994521","strokeWidth":2.6,"dash":0,"lastArrow":true,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[2.09,0],[2.09,-0.97]],"att":{"fixed":true,"highlight":false,"strokeColor":"#994521","strokeWidth":2.6,"dash":0,"lastArrow":true,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"text","def":[0.43,0.92,"nA"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#186b99","anchorX":"left"}},
  {"type":"text","def":[3.44,0.77,"nB"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#186b99","anchorX":"left"}},
  {"type":"text","def":[1.29,1.1,"nrb"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#186b99","anchorX":"left"}},
  {"type":"text","def":[1.29,-0.5,"nbr"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#186b99","anchorX":"left"}},
  {"type":"text","def":[0.74,-1.05,"Weight of ball"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#994521","anchorX":"left"}},
  {"type":"text","def":[2.17,-1.07,"Weight of rod"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#994521","anchorX":"left"}},
  {"type":"line","def":[[4.61,0.24],[5.1,0.24]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1.7,"dash":0,"lastArrow":true,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"line","def":[[4.61,0.24],[4.61,0.7]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1.7,"dash":0,"lastArrow":true,"firstArrow":false,"straightFirst":false,"straightLast":false}},
  {"type":"text","def":[5.15,0.2,"+x"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"text","def":[4.71,0.78,"+y"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"left"}}
]
```

**Fig. 2.12** (a) A uniform rod of length $\mechanical L$ rests on supports at A and B. The ball sits a distance $\mechanical L_1$ from A. (b) The weights and the normal forces all act vertically. The contact forces $\mechanical{\vec n}_{rb}$ and $\mechanical{\vec n}_{br}$ act on the ball and rod respectively.

$$
\begin{aligned}
\sum \mechanical{\vec F}_y &= 0 \\
\Rightarrow \mechanical{\vec n}_{rb}+\mechanical{\vec F}_{g,\text{ball}} &= 0 \\
\Rightarrow \mechanical{n}_{rb}-\mechanical{F}_{g,\text{ball}} &= 0 \\
\Rightarrow \mechanical{n}_{rb} &= \mechanical{m}\mechanical{g}
= (20\,\unit{kg})(10\,\unit{m/s}^2)
= 2.0\times10^2\,\unit{N}.
\end{aligned} \tag{2.21}
$$

and

$$
\sum \mechanical{\vec{\tau}}_O = 0 \Rightarrow \mechanical{\vec{\tau}}_{n_{rb}} + \mechanical{\vec{\tau}}_{F_{g,\text{ball}}} = 0. \tag{2.22}
$$

However, each torque individually is equal to zero. The torque due to gravity vanishes because $\mechanical{\vec{F}}_g$ is exerted at the axis of rotation, so its position vector is zero. The normal force $\mechanical{\vec{n}}_{rb}$ also produces zero torque. It is exerted at the point of contact between the ball and the rod and is antiparallel to its downward position vector. Therefore, Equation (2.22) does not give us any useful results.

Based on our result above we see that $\mechanical{\vec{n}}_{rb} = -\mechanical{\vec{F}}_{g,\text{ball}}$ and, from Newton’s Third law, we also know that $\mechanical{\vec{n}}_{rb} = -\mechanical{\vec{n}}_{br}$. Therefore,

$$
\mechanical{\vec{n}}_{br} = \mechanical{\vec{F}}_{g,\text{ball}}. \tag{2.23}
$$

This result, though simple, is very subtle. It is common practice (even in many textbooks) to not write the equilibrium equations for the ball when solving problems like this. Most of the time, the equilibrium equations are only applied to the rod, which requires the assumption that the reaction force exerted by the ball on the rod is simply the gravitational force of the ball pushing down on the rod. This assumption cannot be made without justifying it, as we have done here, because the gravitational force of the ball is exerted on the ball, not on the rod. If one studies the rod, then the forces that need to be included are those on the rod, not on the ball. For equilibrium, this shortcut of assuming that $\mechanical{\vec{F}}_{g,\text{ball}}$ is exerted directly on the rod (and jumping straight to Equation (2.25)) will work and we can take it, though it is not recommended because it cannot be applied to nonequilibrium situations. For this reason, we always look at each object separately when studying a system of objects and apply fundamental equations (like Newton’s Third law in this case) to find out relationships between them.

We are now ready to study the rod. Again we start from the equilibrium Equations (2.19) and (2.20), keeping in mind that there are no force components along the x and z axes.

$$
\Sigma \mechanical{F}_y = 0 \Rightarrow \mechanical{n}_A - \mechanical{n}_{br} - \mechanical{F}_{g,\text{rod}} + \mechanical{n}_B = 0. \tag{2.24}
$$

But, as we have just discussed, $\mechanical{n}_{br} = \mechanical{F}_{g,\text{ball}} = 2.0 \times 10^2\,\unit{N}$. Therefore, the above equation becomes:

$$
\Sigma \mechanical{F}_y = 0 \Rightarrow \mechanical{n}_A - \mechanical{F}_{g,\text{ball}} - \mechanical{F}_{g,\text{rod}} + \mechanical{n}_B = 0. \tag{2.25}
$$

Rearranging and plugging the known values into Equation (2.25) gives:

$$
\begin{aligned}
\mechanical{n}_A+\mechanical{n}_B
&=\mechanical{F}_{g,\text{ball}}+\mechanical{F}_{g,\text{rod}} \\
&=\mechanical{m}\mechanical{g}+\mechanical{M}\mechanical{g} \\
&=(20\,\unit{kg})(10\,\unit{m/s}^2)+(100\,\unit{kg})(10\,\unit{m/s}^2) \\
&=1.2\times10^3\,\unit{N}.
\end{aligned} \tag{2.26}
$$

Now let’s look at the rotational equilibrium for the rod starting from Equation (2.20). Since the rod is stationary, one can apply the condition for rotational equilibrium to any axis. We will pick an axis that goes through point $A$ and is perpendicular to the plane of the page (we will explain why this is a good choice shortly). Given this axis, we have:

$$
\Sigma \mechanical{\vec{\tau}}_A = 0 \Rightarrow \mechanical{\vec{\tau}}_{n_A} + \mechanical{\vec{\tau}}_{n_{br}} + \mechanical{\vec{\tau}}_{F_{g,\text{rod}}} + \mechanical{\vec{\tau}}_{n_B} = 0. \tag{2.27}
$$

Since we picked the axis of rotation to be through point $A$, $\mechanical{\vec{\tau}}_{n_A} = 0$ because $\mechanical{\vec{r}}_{n_A} = 0$ ($\mechanical{\vec{n}}_A$ is exerted at point $A$). Since $\mechanical{\vec{n}}_A$ is one of the unknowns, we would not know the value of $\mechanical{\vec{\tau}}_{n_A}$ if we had not picked the axis of rotation to go through $A$. Therefore, by picking our axis of rotation in this way, we have eliminated one of the unknowns in Equation (2.27). The other unknown is $\mechanical{\vec{\tau}}_{n_B}$, but we can now easily solve for it and, consequently, for $n_B$ since this is the only unknown in our equation. Using our sign convention for the torques, we have:

$$
\begin{aligned}
\sum \mechanical{\tau}_A
&=-\mechanical{\tau}_{n_{br}}-\mechanical{\tau}_{F_{g,\text{rod}}}+\mechanical{\tau}_{n_B}=0 \\
&=-\mechanical{L}_1\mechanical{n}_{br}\sin(\pi/2)
-\frac{\mechanical{L}}{2}\mechanical{F}_{g,\text{rod}}\sin(\pi/2)
+\mechanical{L}\mechanical{n}_B\sin(\pi/2) \\[2pt]
&\Rightarrow \mechanical{L}_1\mechanical{n}_{br}
+\frac{\mechanical{L}}{2}\mechanical{F}_{g,\text{rod}}
=\mechanical{L}\mechanical{n}_B \\
&\Rightarrow (2.0\,\unit{m})(2.0\times10^2\,\unit{N})
+\frac{8.0\,\unit{m}}{2}(1.0\times10^3\,\unit{N})
=(8.0\,\unit{m})\mechanical{n}_B \\
&\Rightarrow \mechanical{n}_B = 5.5\times10^2\,\unit{N}.
\end{aligned} \tag{2.28}
$$

Since we had found that $\mechanical{n}_A + \mechanical{n}_B = 1.2 \times 10^3 \, \unit{N}$, we see that $n_A = 6.5 \times 10^2 \, \unit{N}$.

Because $\mechanical{\vec{n}}_B$ is also unknown, one could have just as cleverly picked the axis of rotation to go through point $B$. In that case, $\mechanical{\vec{\tau}}_{n_B} = 0$ because $\mechanical{\vec{r}}_{n_B} = 0$ and we could solve Equation (2.27) for $n_A$ instead. We should point out that we could also pick an axis of rotation that goes through the rod’s midpoint or any other point. For example, had we picked the midpoint, where $\mechanical{\vec{F}}_{g,\text{rod}}$ is exerted, $\mechanical{\vec{\tau}}_{F_{g,\text{rod}}} = 0$ and there would be two unknowns $\mechanical{\vec{\tau}}_{n_A}$ and $\mechanical{\vec{\tau}}_{n_B}$ in Equation (2.27). We would still be able to solve for $n_A$ and $n_B$ in this case, by combining Equations (2.26) and (2.27), but the algebra would be a little more cumbersome. In many cases, the choice of the axis about which to compute the net torque will not prevent you from finding the solution – it will only help you by simplifying the algebra if you make a “smart” choice by picking the axis to go through a point where one of the unknown forces is exerted.

**Example 5: Hanging by a rope.** The uniform rod shown in Figure 2.13a has mass $\mechanical{M} = 30 \, \unit{kg}$ and is kept horizontal with the help of a massless, inelastic rope and a junction. Given the angles shown in Figure 2.13a and that the gravitational acceleration is $\mechanical{g} = 10 \, \unit{m/s}^2$, find the reaction force from the junction and the force due to tension supplied by the rope.

Here we are interested in studying the rod, so let’s first draw all the forces acting on the rod, as shown in Figure 2.13b. Because the rod is uniform, $\mechanical{\vec{F}}_g$ is exerted at its midpoint. We note that both $\mechanical{\vec{F}}_T$ and $\mechanical{\vec{R}}$ are unknown forces. However, the direction of $\mechanical{\vec{F}}_T$ is known (i.e., along the rope, toward the support point on the wall) while the direction of $\mechanical{\vec{R}}$ is not known. For this reason, we will assume that the $x$ and $y$ components of $\mechanical{\vec{R}}$ are positive and that $\mechanical{\vec{R}}$ forms an angle $\mechanical{\theta}$ with the $+x$ axis. Of course, we also draw our coordinate system.

```graph
bounds: [-0.64, 3.12, 5.9, -2.25]
height: 542
width: 660
axis: false
drag: false
showNavigation: false
keepAspectRatio: false
elements: [
  {"type":"line","def":[[0,-0.24],[0,2.598076]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":2,"strokeColor":"#344b61","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[-0.095,-0.1],[0,-0.16]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[-0.095,0.045],[0,-0.015]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[-0.095,0.19],[0,0.13]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[-0.095,0.335],[0,0.275]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[-0.095,0.48],[0,0.42]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[-0.095,0.625],[0,0.565]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[-0.095,0.77],[0,0.71]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[-0.095,0.915],[0,0.855]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[-0.095,1.06],[0,1.0]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[-0.095,1.205],[0,1.145]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[-0.095,1.35],[0,1.29]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[-0.095,1.495],[0,1.435]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[-0.095,1.64],[0,1.58]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[-0.095,1.785],[0,1.725]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[-0.095,1.93],[0,1.87]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[-0.095,2.075],[0,2.015]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[-0.095,2.22],[0,2.16]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[-0.095,2.365],[0,2.305]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[-0.095,2.51],[0,2.45]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[0,0],[1.5,0]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":3.5,"strokeColor":"#344b61","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[0,2.598076],[1.5,0]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":2,"strokeColor":"#344b61","dash":0,"fixed":true,"highlight":false}},
  {"type":"point","def":[0,0],"att":{"withLabel":false,"size":3.2,"fillColor":"#344b61","strokeColor":"#344b61","fixed":true,"highlight":false}},
  {"type":"text","def":[-0.36,2.7680759999999998,"(a)"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line","def":[[3.45,-0.24],[3.45,2.598076]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":2,"strokeColor":"#344b61","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[3.355,-0.1],[3.45,-0.16]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[3.355,0.045],[3.45,-0.015]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[3.355,0.19],[3.45,0.13]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[3.355,0.335],[3.45,0.275]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[3.355,0.48],[3.45,0.42]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[3.355,0.625],[3.45,0.565]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[3.355,0.77],[3.45,0.71]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[3.355,0.915],[3.45,0.855]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[3.355,1.06],[3.45,1.0]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[3.355,1.205],[3.45,1.145]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[3.355,1.35],[3.45,1.29]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[3.355,1.495],[3.45,1.435]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[3.355,1.64],[3.45,1.58]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[3.355,1.785],[3.45,1.725]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[3.355,1.93],[3.45,1.87]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[3.355,2.075],[3.45,2.015]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[3.355,2.22],[3.45,2.16]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[3.355,2.365],[3.45,2.305]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[3.355,2.51],[3.45,2.45]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#6b8296","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[3.45,0],[4.95,0]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":3.5,"strokeColor":"#344b61","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[3.45,2.598076],[4.95,0]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":2,"strokeColor":"#344b61","dash":0,"fixed":true,"highlight":false}},
  {"type":"point","def":[3.45,0],"att":{"withLabel":false,"size":3.2,"fillColor":"#344b61","strokeColor":"#344b61","fixed":true,"highlight":false}},
  {"type":"text","def":[3.0900000000000003,2.7680759999999998,"(b)"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"curve","def":[[-0.0,0.0118,0.0236,0.0353,0.0471,0.0588,0.0705,0.0821,0.0938,0.1053,0.1169,0.1284,0.1398,0.1511,0.1624,0.1736,0.1847,0.1957,0.2066,0.2175,0.2282,0.2388,0.2493,0.2597,0.27],[2.0581,2.0582,2.0586,2.0592,2.0601,2.0613,2.0627,2.0644,2.0663,2.0685,2.0709,2.0736,2.0765,2.0796,2.0831,2.0867,2.0906,2.0948,2.0992,2.1038,2.1087,2.1138,2.1191,2.1246,2.1304]],"att":{"strokeColor":"#344b61","strokeWidth":1.4,"fixed":true,"highlight":false}},
  {"type":"curve","def":[[1.215,1.1937,1.1731,1.153,1.1336,1.1149,1.0969,1.0798,1.0634,1.0478,1.0331,1.0193,1.0064,0.9944,0.9834,0.9734,0.9644,0.9564,0.9494,0.9435,0.9387,0.9349,0.9322,0.9305,0.93],[0.4936,0.4807,0.4669,0.4522,0.4366,0.4202,0.4031,0.3851,0.3664,0.347,0.3269,0.3063,0.285,0.2632,0.2409,0.2181,0.195,0.1714,0.1475,0.1234,0.099,0.0744,0.0497,0.0249,0.0]],"att":{"strokeColor":"#344b61","strokeWidth":1.4,"fixed":true,"highlight":false}},
  {"type":"text","def":[0.11,2.01,"30°"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text","def":[0.97,0.28,"60°"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text","def":[0.85,1.84,"rope"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text","def":[1.04,-0.22,"rod"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text","def":[-0.42,-0.49,"junction"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line","def":[[-0.04,-0.39],[0,-0.06]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#344b61","dash":2,"fixed":true,"highlight":false}},
  {"type":"line","def":[[3.45,0],[4.0200000000000005,0.987269]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":true,"strokeWidth":3,"strokeColor":"#2b7354","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[3.45,0],[4.0200000000000005,0]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":true,"strokeWidth":2.5,"strokeColor":"#2b7354","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[3.45,0],[3.45,0.987269]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":true,"strokeWidth":2.5,"strokeColor":"#2b7354","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[4.0200000000000005,0],[4.0200000000000005,0.987269]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#2b7354","dash":2,"fixed":true,"highlight":false}},
  {"type":"line","def":[[3.45,0.987269],[4.0200000000000005,0.987269]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#2b7354","dash":2,"fixed":true,"highlight":false}},
  {"type":"line","def":[[4.95,0],[4.38,0.987269]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":true,"strokeWidth":3,"strokeColor":"#186b99","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[4.95,0],[4.38,0]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":true,"strokeWidth":2.5,"strokeColor":"#186b99","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[4.95,0],[4.95,0.987269]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":true,"strokeWidth":2.5,"strokeColor":"#186b99","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[4.38,0],[4.38,0.987269]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#186b99","dash":2,"fixed":true,"highlight":false}},
  {"type":"line","def":[[4.95,0.987269],[4.38,0.987269]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":false,"strokeWidth":1,"strokeColor":"#186b99","dash":2,"fixed":true,"highlight":false}},
  {"type":"line","def":[[4.2,0],[4.2,-1.974538]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":true,"strokeWidth":3,"strokeColor":"#9d4524","dash":0,"fixed":true,"highlight":false}},
  {"type":"curve","def":[[3.76,3.7597,3.7588,3.7573,3.7553,3.7527,3.7494,3.7457,3.7413,3.7364,3.731,3.725,3.7185,3.7115,3.7039,3.6959,3.6875,3.6786,3.6692,3.6594,3.6493,3.6387,3.6278,3.6166,3.605],[0.0,0.0135,0.027,0.0405,0.0538,0.0671,0.0802,0.0932,0.106,0.1186,0.131,0.1431,0.155,0.1666,0.1778,0.1887,0.1993,0.2094,0.2192,0.2286,0.2375,0.2459,0.2539,0.2615,0.2685]],"att":{"strokeColor":"#2b7354","strokeWidth":1.4,"fixed":true,"highlight":false}},
  {"type":"text","def":[3.74,0.19,"θ"],"att":{"strokeColor":"#2b7354","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text","def":[3.39,-0.21,"𝐴"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text","def":[4.97,-0.21,"𝐵"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text","def":[3.79,1.1472689999999999,"𝑅"],"att":{"strokeColor":"#2b7354","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text","def":[3.06,1.052269,"𝑅ᵧ"],"att":{"strokeColor":"#2b7354","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text","def":[3.91,-0.24,"𝑅ₓ"],"att":{"strokeColor":"#2b7354","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text","def":[4.41,1.1572689999999999,"𝐹ₜ"],"att":{"strokeColor":"#186b99","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text","def":[4.34,-0.23,"𝐹ₜₓ"],"att":{"strokeColor":"#186b99","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text","def":[5.0200000000000005,1.007269,"𝐹ₜᵧ"],"att":{"strokeColor":"#186b99","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text","def":[4.28,-1.49,"Weight"],"att":{"strokeColor":"#9d4524","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line","def":[[4.75,1.98],[5.32,1.98]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":true,"strokeWidth":1.4,"strokeColor":"#344b61","dash":0,"fixed":true,"highlight":false}},
  {"type":"line","def":[[4.75,1.98],[4.75,2.49]],"att":{"straightFirst":false,"straightLast":false,"lastArrow":true,"strokeWidth":1.4,"strokeColor":"#344b61","dash":0,"fixed":true,"highlight":false}},
  {"type":"text","def":[5.33,1.97,"+x"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text","def":[4.8,2.47,"+y"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}}
]
```

**Fig. 2.13** (a) A horizontal rod is held at a junction and supported at its far end by a rope. The rope makes an angle of $60^\circ$ with the rod and $30^\circ$ with the wall. (b) The forces on the rod are its weight $\mechanical{\vec F}_g$, the rope tension $\mechanical{\vec F}_T$, and the junction reaction $\mechanical{\vec R}$. The components of $\mechanical{\vec R}$ are initially drawn along the positive axes.

Starting from Equations (2.19) and (2.20), we obtain Equations (2.29), (2.30), and (2.31):

$$
\begin{aligned}
\sum \mechanical F_x &= 0 \\
\Rightarrow \mechanical R_x-\mechanical F_{Tx} &= 0 \\
\Rightarrow \mechanical R_x &= \mechanical F_T\cos(\pi/3)=\frac{\mechanical F_T}{2},
\end{aligned} \tag{2.29}
$$

and

$$
\begin{aligned}
\sum \mechanical F_y &= 0 \\
\Rightarrow \mechanical R_y-\mechanical F_g+\mechanical F_{Ty} &= 0 \\
\Rightarrow \mechanical F_g &= \mechanical R_y+\mechanical F_T\sin(\pi/3)
=\mechanical R_y+\frac{\sqrt{3}}{2}\mechanical F_T.
\end{aligned} \tag{2.30}
$$

There are no force components along the $z$ axis, so $\Sigma \mechanical{F}_z = 0$ is automatically satisfied.

For the rotational equilibrium, we pick our axis of rotation to be perpendicular to the plane of the page and go through point $A$. We pick point $A$ since the unknown force $\mechanical{\vec{R}}$ is exerted at that point. Based on our discussion in Example 4, another convenient choice would be an axis of rotation that goes through point $B$, since the force of tension is also unknown. We assume that $\mechanical{l}$ is the length of the rod, and thus for the net torque about an axis through point $A$ we have:

$$
\begin{aligned}
\sum\mechanical{\vec\tau}_A
&=\underbrace{\mechanical{\vec\tau}_{R_x}}_{0\ (r=0)}
+\underbrace{\mechanical{\vec\tau}_{R_y}}_{0\ (r=0)}
+\mechanical{\vec\tau}_{F_g}
+\underbrace{\mechanical{\vec\tau}_{F_{Tx}}}_{0\ (\phi=\pi)}
+\mechanical{\vec\tau}_{F_{Ty}}=0 \\
\Rightarrow -\mechanical{\tau}_{F_g}+\mechanical{\tau}_{F_{Ty}}&=0 \\
\Rightarrow \frac{\mechanical l}{2}\mechanical F_g\sin(\pi/2)
&=\mechanical l\mechanical F_{Ty}\sin(\pi/2) \\
\Rightarrow \frac{\mechanical F_g}{2}&=\mechanical F_{Ty} \\
\Rightarrow \frac{\mechanical M\mechanical g}{2}
&=\mechanical F_T\sin(\pi/3) \\
\Rightarrow \mechanical F_T
&=\frac{\mechanical M\mechanical g}{2\sin(\pi/3)}
=\frac{(30\,\unit{kg})(10\,\unit{m/s}^2)}{2(\sqrt{3}/2)}
=\sqrt{3}\times10^2\,\unit N.
\end{aligned} \tag{2.31}
$$

Since now we know the magnitude of the force due to tension, we can find the values of $\mechanical{R}_x$ and $\mechanical{R}_y$ from Equations (2.29) and (2.30), respectively:

$$
\mechanical{R}_x = \frac{\mechanical{F}_T}{2} = \frac{\sqrt{3} \times 10^2 \, \unit{N}}{2} = 50 \sqrt{3} \, \unit{N}, \tag{2.32}
$$

$$
\begin{aligned}
\mechanical R_y+\frac{\sqrt 3}{2}\mechanical F_T &=\mechanical M\mechanical g \\
\Rightarrow \mechanical R_y &=\mechanical M\mechanical g-\frac{\sqrt 3}{2}\mechanical F_T \\
&=(30\,\unit{kg})(10\,\unit{m/s}^2)
-\frac{\sqrt3}{2}(\sqrt3\times10^2\,\unit N) \\
&=1.5\times10^2\,\unit N.
\end{aligned} \tag{2.33}
$$

Both components are found to be positive, which means our initial assumption about $\mechanical{\vec{R}}$ having its components point along the positive $x$ and $y$ axes is correct. If one or both of the components were negative, then the negative component(s) would point along the negative direction of that axis.

For the magnitude and direction of $\mechanical{\vec{R}}$, we have:

$$
\mechanical{R} = \sqrt{\mechanical{R}_x^2 + \mechanical{R}_y^2} = \sqrt{(50 \sqrt{3} \, \unit{N})^2 + (1.5 \times 10^2 \, \unit{N})^2} = \sqrt{3} \times 10^2 \, \unit{N}, \tag{2.34}
$$

$$
\tan \mechanical{\theta} = \frac{\mechanical{R}_y}{\mechanical{R}_x} = \frac{1.5 \times 10^2 \, \unit{N}}{50 \sqrt{3} \, \unit{N}} \Rightarrow \mechanical{\theta} = \frac{\pi}{3} \, \unit{rad}. \tag{2.35}
$$

Of course, there is a second solution to Equation (2.35): $\mechanical{\theta} = \frac{4\pi}{3} \, \unit{rad}$. But, since our results show that both $\mechanical{R}_x, \mechanical{R}_y > 0$, the angle $\mechanical{\theta}$ belongs in the first quadrant. So $\mechanical{\theta} = \frac{4\pi}{3} \, \unit{rad}$ is not a physically acceptable solution.

[^drawing-forces]: Wonderful descriptions of many of these forces are included in *A Student’s Guide to Newton’s Laws of Motion* by Sanjoy Mahajan, Cambridge University Press.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\theta}$ | $\unit{rad}$ | Angular position | Angle measured from the reference direction. |
| $\mechanical{\vec{F}}$ | $\unit{N}$ | Force | Force acting on the indicated body. |
| $\mechanical{\vec{f}}$ | $\unit{N}$ | Friction force | Tangential contact force from friction. |
| $\mechanical{g}$ | $\unit{m\,s^{-2}}$ | Gravitational acceleration | Acceleration due to gravity. |
| $\mechanical{h}$ | $\unit{m}$ | Height | Height above the surface at which the applied force acts on the box. |
| $\mechanical{L}$ | $\unit{m}$ | Length | Length of the indicated body or part. |
| $\mechanical{l}$ | $\unit{m}$ | Length | Length of the indicated part or lever arm. |
| $\mechanical{\vec{v}}$ | $\unit{m\,s^{-1}}$ | Linear velocity or speed | Velocity or speed of the indicated point. |
| $\mechanical{M}$ | $\unit{kg}$ | Mass | Mass of the body or system. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Mass of the indicated particle or body. |
| $\mechanical{\vec{n}}$ | $\unit{N}$ | Normal force | Contact force perpendicular to the surface. |
| $\mechanical{y}$ | $\unit{m}$ | Position coordinate | Position along the indicated axis. |
| $\mechanical{x}$ | $\unit{m}$ | Position coordinate | Position along the indicated axis. |
| $\mechanical{\vec{R}}$ | $\unit{N}$ | Junction reaction force | Force exerted on the rod by the junction. |
| $\mechanical{\vec{r}}$ | $\unit{m}$ | Radius or position | Distance or position relative to the reference point or axis. |
| $\mechanical{\vec{\tau}}$ | $\unit{N\,m}$ | Torque | Moment of force about the indicated point or axis. |
