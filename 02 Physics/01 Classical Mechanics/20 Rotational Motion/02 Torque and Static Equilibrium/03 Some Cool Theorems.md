---
title: "2.3 Some Cool Theorems"
---

> [!TLDR]
> Force couples and the lines of action of forces can simplify calculations of net torque.

There are some interesting theorems that can prove useful when working with problems on rotational equilibrium, but these theorems are not needed to solve problems. We mentioned in the preface to this book that we will not be relying on shortcuts to solve problems, and indeed, we have not used any in the examples we have solved so far – we have always started from fundamental equations. We present these theorems at the end of this chapter for the sake of completeness of this unit on torque and equilibrium, and because it is beneficial to know that they exist in the literature.

```graph3d
bounds: [-1.65, 0.9, 1.65, -0.9]
bounds3d: [[-1.61,1.61],[-1.26,1.26],[-0.74,1.44]]
height: 315
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
  az: {slider: {start: 2.82, visible: false}, pointer: {enabled: true}}
  el: {slider: {start: 0.75, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"curve3d","def":[[-1.18,1.29,1.29,-1.18,-1.18],[-0.96,-0.96,1.01,1.01,-0.96],[0,0,0,0,0]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1.65,"fillColor":"#c9dfeb","fillOpacity":0.42}},
  {"type":"line3d","def":[[0,0,-0.52],[0,0,1.28]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1.4,"dash":2,"lastArrow":true,"firstArrow":false}},
  {"type":"line3d","def":[[0,0,0],[0,0,0.94]],"att":{"fixed":true,"highlight":false,"strokeColor":"#994521","strokeWidth":3.2,"dash":0,"lastArrow":true,"firstArrow":false}},
  {"type":"line3d","def":[[0,0,0],[0.95,-0.66,0]],"att":{"fixed":true,"highlight":false,"strokeColor":"#186b99","strokeWidth":2.3,"dash":0,"lastArrow":true,"firstArrow":false}},
  {"type":"line3d","def":[[0,0,0],[-0.85,0.67,0]],"att":{"fixed":true,"highlight":false,"strokeColor":"#186b99","strokeWidth":2.3,"dash":0,"lastArrow":true,"firstArrow":false}},
  {"type":"line3d","def":[[0.95,-0.66,0],[0.95,0.59,0]],"att":{"fixed":true,"highlight":false,"strokeColor":"#2b7354","strokeWidth":2.9,"dash":0,"lastArrow":true,"firstArrow":false}},
  {"type":"line3d","def":[[-0.85,0.67,0],[-0.85,-0.58,0]],"att":{"fixed":true,"highlight":false,"strokeColor":"#2b7354","strokeWidth":2.9,"dash":0,"lastArrow":true,"firstArrow":false}},
  {"type":"point3d","def":[0,0,0],"att":{"fixed":true,"highlight":false,"size":3.5,"withLabel":false,"fillColor":"#344b61","strokeColor":"#344b61"}},
  {"type":"line3d","def":[[0.95,-0.94,0],[0.95,0.94,0]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1.25,"dash":2,"lastArrow":false,"firstArrow":false}},
  {"type":"line3d","def":[[-0.85,-0.94,0],[-0.85,0.94,0]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1.25,"dash":2,"lastArrow":false,"firstArrow":false}},
  {"type":"line3d","def":[[-0.85,0,0],[0.95,0,0]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1.4,"dash":2,"lastArrow":false,"firstArrow":false}},
  {"type":"line3d","def":[[-0.85,-1.02,0],[0.95,-1.02,0]],"att":{"fixed":true,"highlight":false,"strokeColor":"#687f93","strokeWidth":1.45,"dash":0,"lastArrow":true,"firstArrow":true}},
  {"type":"text3d","def":[[0,-1.18,0],"𝑑"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"text3d","def":[[-0.46,0,0.14],"d₂"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"text3d","def":[[0.42,0,0.14],"d₁"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"text3d","def":[[0.98,0.6,0.08],"F₁"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#2b7354","anchorX":"left"}},
  {"type":"text3d","def":[[-1.05,-0.59,0.15],"F₂"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#2b7354","anchorX":"left"}},
  {"type":"text3d","def":[[0.58,-0.65,0.08],"r₁"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#186b99","anchorX":"left"}},
  {"type":"text3d","def":[[-0.61,0.64,0.2],"r₂"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#186b99","anchorX":"left"}},
  {"type":"text3d","def":[[0.16,0,0.89],"τ"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#994521","anchorX":"left"}},
  {"type":"text3d","def":[[0.13,0,1.32],"+z"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"text3d","def":[[0.14,-0.11,-0.1],"𝑂"],"att":{"fixed":true,"highlight":false,"fontSize":16,"strokeColor":"#344b61","anchorX":"left"}},
  {"type":"curve3d","def":[[0.95,0.93796,0.925947,0.91399,0.902117,0.890355,0.878732,0.867273,0.856007,0.844959,0.834155,0.82362,0.813378,0.803453,0.793868,0.784645,0.775807,0.767372,0.759362,0.751794,0.744686],[-0.41,-0.41029,-0.41116,-0.412607,-0.414628,-0.417219,-0.420374,-0.424084,-0.428342,-0.433138,-0.43846,-0.444296,-0.450634,-0.457456,-0.46475,-0.472496,-0.480677,-0.489275,-0.498269,-0.507638,-0.517361],[0.012,0.012,0.012,0.012,0.012,0.012,0.012,0.012,0.012,0.012,0.012,0.012,0.012,0.012,0.012,0.012,0.012,0.012,0.012,0.012,0.012]],"att":{"strokeColor":"#687f93","strokeWidth":1.3,"fixed":true,"highlight":false}},
  {"type":"curve3d","def":[[-0.653661,-0.660849,-0.668422,-0.676365,-0.684663,-0.693297,-0.702252,-0.711507,-0.721046,-0.730847,-0.740891,-0.751157,-0.761625,-0.772274,-0.783081,-0.794024,-0.805082,-0.816231,-0.827449,-0.838713,-0.85],[0.515239,0.506532,0.498159,0.490136,0.48248,0.475207,0.468331,0.461866,0.455825,0.450222,0.445066,0.44037,0.436141,0.43239,0.429123,0.426347,0.424068,0.422291,0.421019,0.420255,0.42],[0.012,0.012,0.012,0.012,0.012,0.012,0.012,0.012,0.012,0.012,0.012,0.012,0.012,0.012,0.012,0.012,0.012,0.012,0.012,0.012,0.012]],"att":{"strokeColor":"#687f93","strokeWidth":1.3,"fixed":true,"highlight":false}},
  {"type":"curve3d","def":[[-0.85,-0.75,-0.75],[0.1,0.1,0],[0.012,0.012,0.012]],"att":{"strokeColor":"#687f93","strokeWidth":1.3,"fixed":true,"highlight":false}},
  {"type":"curve3d","def":[[0.95,0.85,0.85],[-0.1,-0.1,0],[0.012,0.012,0.012]],"att":{"strokeColor":"#687f93","strokeWidth":1.3,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.75,-0.36,0.025],"φ₁"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.68,0.4,0.025],"φ₂"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}}
]
```

**Fig. 2.14** The forces $\mechanical{\vec F}_1$ and $\mechanical{\vec F}_2$ have equal magnitudes, opposite directions, and distinct lines of action. Both contribute positive torque about $z$. The magnitude of the couple is $\mechanical F_1\mechanical d$, where $\mechanical d=\mechanical d_1+\mechanical d_2$ is the perpendicular distance between the two lines of action. Drag to rotate the plot.

## 2.3.1 Theorem 1: Torque due to a Force Couple

A force couple is defined as a system of two forces that have

(i) Equal magnitudes,

(ii) Opposite directions,

(iii) Lines of action that do not overlap.

In Figure 2.14, $\mechanical{\vec{F}}_1$ and $\mechanical{\vec{F}}_2$ are a force couple. A force couple is not to be confused with an action-reaction pair of forces described by Newton’s Third Law. An action-reaction pair corresponds to the forces that two objects exert on each other: For example, object 1 acts via a force on object 2, and object 2 reacts by exerting a force of equal magnitude and opposite direction on object 1. On the other hand, $\mechanical{\vec{F}}_1$ and $\mechanical{\vec{F}}_2$ in Figure 2.14 are both exerted by an external agent on the object of interest.

Let’s find the net torque due to this force couple about the $z$ axis. Both forces produce positive torques based on the right-hand rule (i.e., each will cause counterclockwise rotation):

$$
\begin{aligned}
\sum \mechanical{\vec\tau}_z &= \mechanical{\vec\tau}_1 + \mechanical{\vec\tau}_2, \\
\sum \mechanical{\tau}_z
&=+\mechanical{r}_1\mechanical{F}_1\sin\mechanical{\phi}_1
+\mechanical{r}_2\mechanical{F}_2\sin\mechanical{\phi}_2 \\
&=\mechanical{F}_1\mechanical{d}_1+\mechanical{F}_1\mechanical{d}_2 \\
&=\mechanical{F}_1(\mechanical{d}_1+\mechanical{d}_2)
=\mechanical{F}_1\mechanical{d}.
\end{aligned} \tag{2.36}
$$

where we have used the facts that $\mechanical{d}_1 = \mechanical{r}_1 \sin \mechanical{\phi}_1$ and $\mechanical{d}_2 = \mechanical{r}_2 \sin \mechanical{\phi}_2$ are the moment arms, with $\mechanical{d} = \mechanical{d}_1 + \mechanical{d}_2$, and that $\mechanical{F}_1 = \mechanical{F}_2$. Of course, had the forces caused clockwise rotation, the net torque would be negative in our coordinate system. Consequently, the net torque due to a force couple has magnitude equal to $\Sigma \mechanical{\tau}_z = \mechanical{F}_1 \mechanical{d} = \mechanical{F}_2 \mechanical{d}$ (since $\mechanical{F}_1 = \mechanical{F}_2$) and direction perpendicular to the plane formed by the force couple and determined by the right-hand rule.

**Note 1**: For the axis shown, $\mechanical{d}_1 + \mechanical{d}_2 = \mechanical{d}$. Shifting to another parallel axis changes the net torque by a term proportional to the net force, which is zero for a couple. The torque is therefore the same about any axis perpendicular to the plane of the couple. Equivalently, the points of application of the forces do not matter, as long as the distance $\mechanical{d}$ between them does not change.

**Note 2**: By the definition of a force couple:

$$
\Sigma \mechanical{\vec{F}} = \mechanical{\vec{F}}_1 + \mechanical{\vec{F}}_2 = 0. \tag{2.37}
$$

Therefore, a force couple only affects the object’s rotational motion and does not affect the object’s translational motion.

---

## 2.3.2 Theorem 2: Forces with Parallel Lines of Action

If an object is in equilibrium with $n$ forces acting on it, and the lines of action of $n-1$ forces are parallel to each other, then the line of action of the $n^{th}$ force is also parallel to the other forces.

To see why this is the case, let’s assume that all the $n-1$ parallel forces are along the $y$ axis. Then the $n^{th}$ force also has to be along the $y$ axis for the object to be in equilibrium. If the $n^{th}$ force is not along the $y$ axis, then there will be a component of that force along a different axis (say the $x$ axis); since there are no other forces along the $x$ axis, then the object will not be in equilibrium along the $x$ axis.

An example of how this theorem is applied is shown in the scenario of Figure 2.15, which is similar to one of the exercises at the end of this chapter. Figure 2.15 shows a rod that is attached to a wall via a junction and remains horizontal with the help of a spring. The forces exerted on the rod are the reaction force $\mechanical{\vec{R}}$ from the junction, the gravitational force $\mechanical{\vec{F}}_g$, and the spring force $\mechanical{\vec{F}}_s$. Both $\mechanical{\vec{F}}_g$ and $\mechanical{\vec{F}}_s$ are along the $y$ axis. Therefore, for the rod to remain in equilibrium, the reaction force from the junction $\mechanical{\vec{R}}$ also has to be along the $y$ axis. Whether it points along the positive or negative $y$ direction is determined by the relative strength of $\mechanical{\vec{F}}_g$ and $\mechanical{\vec{F}}_s$. For example, if $\mechanical{F}_g > \mechanical{F}_s$ then $\mechanical{\vec{R}}$ needs to be pointing upwards so that together with $\mechanical{\vec{F}}_s$ they can cancel out $\mechanical{\vec{F}}_g$.

![[rotational-motion-fig-2-15.svg|**Fig. 2.15** The spring force and the gravitational force on the rod are along the $y$ axis. This means that, for the rod to be in equilibrium, the reaction force $\mechanical{\vec{R}}$ from the junction also has to be along the $y$ axis and it cannot have any $x$ components. If $\mechanical{R}_x \neq 0$, then the rod would not be in equilibrium along the $x$ axis since there are no other forces along this axis to cancel out $\mechanical{\vec{R}}_x$.|370]]

```graph3d
bounds: [-1.57, 0.9, 1.57, -0.9]
bounds3d: [[-1.7,1.7],[-1.36,1.36],[-0.45,0.72]]
height: 315
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
  az: {slider: {start: 2.82, visible: false}, pointer: {enabled: true}}
  el: {slider: {start: 0.78, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"curve3d","def":[[-1.45,1.48,1.48,-1.45,-1.45],[-1.1,-1.1,1.08,1.08,-1.1],[0,0,0,0,0]],"att":{"strokeColor":"#687f93","strokeWidth":1.7,"fixed":true,"highlight":false,"fillColor":"#c9dfeb","fillOpacity":0.42}},
  {"type":"point3d","def":[0,0,0],"att":{"fixed":true,"highlight":false,"size":3.2,"withLabel":false,"fillColor":"#344b61","strokeColor":"#344b61"}},
  {"type":"text3d","def":[[-0.075,0.07,0.13],"𝑃"],"att":{"strokeColor":"#344b61","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[-0.3348,0.2025,0]],"att":{"strokeColor":"#687f93","dash":2,"lastArrow":false,"strokeWidth":1.3,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-0.3348,0.2025,0],[-1.24,0.75,0]],"att":{"strokeColor":"#186b99","dash":0,"lastArrow":true,"strokeWidth":2.7,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.22,0.8,0.06],"F₁"],"att":{"strokeColor":"#186b99","fontSize":16,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[0.0135,-0.2268,0]],"att":{"strokeColor":"#687f93","dash":2,"lastArrow":false,"strokeWidth":1.3,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.0135,-0.2268,0],[0.05,-0.84,0]],"att":{"strokeColor":"#186b99","dash":0,"lastArrow":true,"strokeWidth":2.7,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.12,-0.82,0.06],"F₂"],"att":{"strokeColor":"#186b99","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[0.2538,-0.1215,0]],"att":{"strokeColor":"#687f93","dash":2,"lastArrow":false,"strokeWidth":1.3,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.2538,-0.1215,0],[0.94,-0.45,0]],"att":{"strokeColor":"#186b99","dash":0,"lastArrow":true,"strokeWidth":2.7,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.96,-0.44,0.06],"Fₙ₋₁"],"att":{"strokeColor":"#186b99","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0,0,0],[0.0675,0.1458,0]],"att":{"strokeColor":"#687f93","dash":2,"lastArrow":false,"strokeWidth":1.3,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.0675,0.1458,0],[0.25,0.54,0]],"att":{"strokeColor":"#186b99","dash":0,"lastArrow":true,"strokeWidth":2.7,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.27,0.66,0.06],"Fₙ"],"att":{"strokeColor":"#186b99","fontSize":16,"anchorX":"left","fixed":true,"highlight":false}}
]
```

**Fig. 2.16** The slab is in equilibrium under coplanar forces. The dashed segments extend the lines of action of the forces to their common point $P$. Drag to rotate the plot.

## 2.3.3 Theorem 3: Forces Whose Lines of Action Intersect

If an object is in equilibrium under $n$ coplanar forces, and the lines of action of $n-1$ forces intersect at the same point $P$, then the line of action of the $n^{th}$ force will also intersect the lines of action of the other forces at the same point $P$.

The proof of this theorem goes as follows: Let’s look at the slab shown in Figure 2.16. This slab is in equilibrium under the influence of $n$ forces, all of which lie on the same plane (i.e., the plane of the slab). The lines of action of $\mechanical{\vec{F}}_1, \mechanical{\vec{F}}_2, \ldots \mechanical{\vec{F}}_{n-1}$ all intersect at point $P$.

Since the object is in equilibrium, we can pick any axis of rotation and apply Equation (2.20). For simplicity, let’s pick an axis that is perpendicular to the plane of the forces and goes through point $P$. Since the lines of action of the $n-1$ forces pass through point $P$, each position vector is parallel to its respective force vector, and so the angle between the two is 0. So, we have:

$$
\begin{aligned}
\sum\mechanical{\vec\tau}_P &= 0
\quad\Rightarrow\quad \mechanical{\vec\tau}_1+\mechanical{\vec\tau}_2
+\mechanical{\vec\tau}_3+\cdots+\mechanical{\vec\tau}_{n-1}+\mechanical{\vec\tau}_n=0 \\
&\Rightarrow \mechanical{F}_1\mechanical{r}_1\sin0+
\mechanical{F}_2\mechanical{r}_2\sin0+\cdots+
\mechanical{F}_{n-1}\mechanical{r}_{n-1}\sin0+\mechanical{\tau}_n=0 \\
&\Rightarrow \mechanical{\tau}_n=0 \\
&\Rightarrow \mechanical{F}_n\mechanical{r}_n\sin\mechanical{\phi}=0 \\
&\Rightarrow \sin\mechanical{\phi}=0
\quad (\mechanical{F}_n\mechanical{r}_n\ne0).
\end{aligned} \tag{2.38}
$$

If the last force is nonzero and is applied away from $P$, its zero torque means its line of action passes through $P$. Its line of action also passes through $P$ if it is applied there. Of course the derivation would be similar if some of the position vectors were antiparallel to their respective force vectors.

But, why are these theorems cool? Theorem 1 allows us to quickly find the torque due to a force couple. If an object is in translational equilibrium, then all the forces exerted on it can be grouped into a force couple. Then we can easily calculate the torque about any axis perpendicular to the plane formed by these two forces. Theorems 2 and 3 can help us determine the directions of unknown forces (like the reaction forces from junctions, whose direction can change depending on the problem) when the directions of the other forces are known. Let’s quickly look at one example.

In Figure 2.17 we look at the familiar example of a horizontal rod in equilibrium attached to a wall via a junction and a rope. When we studied this system before (Example 5), we found the magnitude and direction of the reaction force $\mechanical{\vec{R}}$ from the junction using the equations for static equilibrium. However, Theorem 3 can easily show us the direction of the force. Since the tension force and the gravitational force have lines of action that intersect at point $P$, the line of action of $\mechanical{\vec{R}}$ also has to go through point $P$ (but it will be up to us to determine if it is pointing toward or away from $P$).

![[rotational-motion-fig-2-17.svg|**Fig. 2.17** When the rod is in equilibrium, the direction of the reaction force $\mechanical{\vec{R}}$ from the junction can be found by applying Theorem 3: If the force due to tension and gravitational force have lines of action that intersect at point $P$, then the line of action of $\mechanical{\vec{R}}$ must go through point $P$ also.|370]]

Lastly, it is important to remember that Theorems 2 and 3 are applicable only if the object in question is in equilibrium.

### Exercises

(i) The location of the CM of an extended object can be found by computing the location of the axis about which the torque due to the gravitational force is zero. (a) To show this, first consider a one-dimensional rod of length $\mechanical{L}$ and mass $\mechanical{M}$ placed along the $x$ axis on this page. Let’s pick the origin of the coordinate system to be on the left end of the rod and split the rod into infinitesimal masses $d\mechanical{m}$ each with its own position $\mechanical{x}$ with respect to the origin and its own gravitational force $\mechanical{\vec{F}}_g$ along the $y$ axis on this page. Each of these gravitational forces will result in a torque about an axis going through the origin of your coordinate system and perpendicular to the plane of the page. If we were to replace the extended object with a point mass $\mechanical{M}$, where should this mass be located with respect to the origin so that we will get the same torque about the axis through the origin due to the gravitational force on this mass $\mechanical{\vec{F}}_{gM}$ ? This location is defined as the CM. (b) Now that we found the location of the CM with respect to the origin, show that the net torque due to the gravitational forces on the infinitesimal masses $d\mechanical{m}$ about an axis that goes through the center of mass of the rod is zero.

(ii) Imagine we have a horizontal rod supported either directly below or directly above its CM as shown in Figure 2.18a and 2.18b, respectively. Now, let’s tilt the rod slightly and then release it. In the case where the support is below the rod, the rod will continue to tilt and will eventually fall. However, if the rod is supported from directly above its CM, it will always return to its original, horizontal position. Explain why this is true.

![[rotational-motion-fig-2-18.svg|**Fig. 2.18** A rod is supported from directly below or directly above its center of mass (CM). (a) A small tilt will cause the rod to fall. (b) The rod will return to its horizontal position after a tilt.|603]]

(iii) One end of a rod of length $\mechanical{L} = 1.0\,\unit{m}$ is attached to a wall via a junction that is free to rotate. The rod is kept horizontally balanced via a massless spring attached to its other end, as shown in Figure 2.19. You are given that $\mechanical{F}_g = 100\,\unit{N}$ and the CM is $\mechanical{x} = 40\,\unit{cm}$ away from its right end. Find the force exerted by the spring and the reaction force of the junction.

![[rotational-motion-fig-2-19.svg|**Fig. 2.19** A rod is kept horizontal via a junction and a spring. The gravitational force $\mechanical{\vec{F}}_g$ is exerted at a distance $\mechanical{x} = 40\,\unit{cm}$ from the end of the rod where the spring is attached.|370]]

(iv) A rod is attached to a wall via a junction that is free to rotate and is kept balanced by a massless, horizontal rope that is $9.0\,\unit{m}$ long, as shown in Figure 2.20. You are given that $\mechanical{F}_{g1} = 750\,\unit{N}$, $\mechanical{F}_{g2} = 300\,\unit{N}$ (these weights include the weight of the rod), $AB = 6.0\,\unit{m}$, $AC = 12.0\,\unit{m}$ and that the length of the rod is $\mechanical{L} = 15.0\,\unit{m}$. Find the tension in the rope and the magnitude and direction of the reaction force of the junction.

![[rotational-motion-fig-2-20.svg|**Fig. 2.20** A rod is kept balanced via a junction and a massless, horizontal rope. The gravitational force on the rod is given as two separate vectors, $\mechanical{\vec{F}}_{g1}$ and $\mechanical{\vec{F}}_{g2}$.|370]]

(v) A uniform wheel with radius $\mechanical{\alpha}$ is on a horizontal surface in contact with a step of height $\mechanical{h}$ as shown in Figure 2.21. The gravitational force $\mechanical{\vec{F}}_g$ is exerted at the wheel’s center $O$. A force $\mechanical{\vec{F}}$ is exerted at point $Z$, which is at a height $\mechanical{H}$ above the horizontal surface, and causes the wheel to roll up the step. (a) Draw all the forces exerted on the wheel before it rolls up the step. What happens to the ground’s reaction force $\mechanical{\vec{n}}_A$ on the wheel at point $A$ when the wheel starts rolling up the step and loses contact with the ground? (b) Find the minimum magnitude of $\mechanical{\vec{F}}$ needed for the wheel to roll up the step. (c) Find the direction of the step’s reaction force $\mechanical{\vec{R}}$ on the wheel at point $B$ in two different ways: (i) using Newton’s Laws and (ii) using geometry and Theorem 3.

![[rotational-motion-fig-2-21.svg|**Fig. 2.21** We exert a horizontal force $\mechanical{\vec{F}}$ on a uniform wheel of radius $\mechanical{\alpha}$ to roll it up a step of height $\mechanical{h}$.|370]]

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\phi}$ | $\unit{rad}$ | Angle | Angle between the indicated directions. |
| $\mechanical{\alpha}$ | $\unit{m}$ | Wheel radius | Distance from the axle to the rim. |
| $\mechanical{d}$ | $\unit{m}$ | Distance | Separation between the indicated points or axes. |
| $\mechanical{\vec{F}}$ | $\unit{N}$ | Force | Force acting on the indicated body. |
| $\mechanical{H}$ | $\unit{m}$ | Height of applied force | Height of point $Z$ above the floor. |
| $\mechanical{h}$ | $\unit{m}$ | Height | Vertical distance from the reference level. |
| $\mechanical{L}$ | $\unit{m}$ | Length | Length of the indicated body or part. |
| $\mechanical{M}$ | $\unit{kg}$ | Mass | Mass of the body or system. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Mass of the indicated particle or body. |
| $\mechanical{\vec{n}}$ | $\unit{N}$ | Normal force | Contact force perpendicular to the surface. |
| $\mechanical{z}$ | $\unit{m}$ | Position coordinate | Position along the indicated axis. |
| $\mechanical{y}$ | $\unit{m}$ | Position coordinate | Position along the indicated axis. |
| $\mechanical{x}$ | $\unit{m}$ | Position coordinate | Position along the indicated axis. |
| $\mechanical{\vec{R}}$ | $\unit{N}$ | Reaction force | Force exerted by a junction or the step. |
| $\mechanical{r}$ | $\unit{m}$ | Radius or position | Distance or position relative to the reference point or axis. |
| $\mechanical{\vec{\tau}}$ | $\unit{N\,m}$ | Torque | Moment of force about the indicated point or axis. |
