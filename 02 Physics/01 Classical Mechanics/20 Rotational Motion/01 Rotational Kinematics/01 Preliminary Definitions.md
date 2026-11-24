---
title: "1.1 Preliminary Definitions"
---

> [!TLDR]
> Period and frequency describe repeating motion, and a fixed axis supplies the reference for spin and orbital motion.

Communication in any language requires the proper use of its vocabulary. Thus, to clearly communicate physical phenomena, we first have to learn our physics vocabulary. Since this is the first chapter, let’s start with some preliminary definitions of physical quantities that will show up throughout our study of rotational motion.

- **Periodic motion.** A motion that repeats itself (in the same way) at equal time intervals. For example, each hand of a clock executes periodic motion.
- **Period ($\signal{T}$).** The time required to complete one repetition of a periodic motion. The SI unit is the second ($\unit{s}$). For example, the period of the hour hand of the clock is $12\,\unit{h}=12\,\unit{h}\cdot 3{,}600\,\unit{s/h}=43{,}200\,\unit{s}$.
- **Frequency ($\signal{f}$).** The fraction given by the number of repetitions $N$ of the periodic motion over a time interval $\Delta t$ (in $\unit{s}$) divided by the time interval $\Delta t$.

  $$
  \signal{f}=\frac{N}{\Delta t}. \tag{1.1}
  $$

  Equivalently, if $\Delta t=1\,\unit{s}$, then frequency is the number of repetitions within $1\,\unit{s}$. The SI unit of frequency is the hertz ($\unit{Hz}$): $1\,\unit{repetition/s}=1\,\unit{Hz}$. For example, the frequency of the hour hand of the clock is $\frac{1}{43{,}200}\,\unit{Hz}$ because it executes one revolution in $43{,}200\,\unit{s}$ ($12\,\unit{h}$).

  From the definition of the period and the frequency, we see that if the time interval $\Delta t$ is equal to the period $\signal{T}$, then the number of repetitions $N$ is equal to 1. Therefore,

  $$
  \signal{f}=\frac{1}{\signal{T}}\Rightarrow\signal{T}=\frac{1}{\signal{f}}. \tag{1.2}
  $$

- **Rigid body.** A solid object in which the intermolecular forces are so strong that when external forces are exerted, the deformation is small enough to be neglected. For a rigid body, therefore, the distance between any two points of the object will not change over time. Our focus in this book will be on the rotational motion of rigid bodies.
- **Rotational motion about a fixed axis of rotation.** This is a type of motion in which an object moves about an axis that does not change its orientation (direction) in space. Even if the axis of rotation moves linearly, it is considered fixed with respect to rotational motion as long as its orientation is not changing. There are two types of rotational motion: (1) orbital rotational motion and (2) spin rotational motion. It is possible for an object to exhibit both orbital and spin rotational motion as is the case of the Earth, for example, which executes orbital motion around the sun while also spinning about its own axis once per sidereal day (about 23 h 56 min). Rotational motion can be periodic but does not have to be. Rotational motion can also be executed by point masses, which we assume have infinitely small dimensions, as well as extended solid bodies whose dimensions cannot be neglected.

As we will see shortly, rotational motion cannot be quantified without specifying a rotation axis – the axis of rotation provides a reference for the physical quantities of rotational motion, both for extended rigid bodies and point masses. Just like in translational motion where one can pick any coordinate system with respect to which the motion can be analyzed, in rotational motion, one can pick any axis of rotation. However, once we choose an axis of rotation, we must stick to that choice for our calculations to be consistent. In this book, when an object is executing spin rotational motion, we will choose for the axis of rotation the straight line through all fixed points of the body around which all other points of the body move in circles (i.e., rotate around). Why? Because this will greatly simplify our calculations. As an example of this choice of axis of rotation, think about a spinning disk that is constrained to rotate about its center as shown in Figure 1.1a (e.g., a vinyl record rotating on a record player). As this disk is spinning, the center of the disk is fixed, while all the other points of the disk move in circles. Thus, the axis of rotation we choose in this case, as shown in Figure 1.1a, will be the line that goes through the center of the disk and is perpendicular to the plane of the disk.

The axis of rotation does not have to go through points that belong to the object, as is often the case in orbital motion. When an object is executing orbital rotational motion, we will choose for the axis of rotation the straight line about which the body moves in circles. For example, as shown in Figure 1.1b, during its orbital motion, a mass can rotate about an axis that is outside of the object. For the small ball shown, the axis of rotation is a rod that connects to the ball via the rope and is in the center of the circle the ball traverses. One can see that if the rotating object is a point mass, then it will behave like the ball of Figure 1.1b.

```graph3d
bounds: [-1.52, 0.9, 1.52, -0.9]
bounds3d: [[-1.95, 1.95], [-1.95, 1.95], [-1.62, 1.62]]
height: 330
width: 680
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
  az: {slider: {start: 2.78, visible: false}, pointer: {enabled: true}}
  el: {slider: {start: 0.53, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"curve3d","def":[[1.8,1.7778,1.7119,1.6038,1.4562,1.2728,1.058,0.8172,0.5562,0.2816,0,-0.2816,-0.5562,-0.8172,-1.058,-1.2728,-1.4562,-1.6038,-1.7119,-1.7778,-1.8,-1.7778,-1.7119,-1.6038,-1.4562,-1.2728,-1.058,-0.8172,-0.5562,-0.2816,0,0.2816,0.5562,0.8172,1.058,1.2728,1.4562,1.6038,1.7119,1.7778,1.8],[0,0.2816,0.5562,0.8172,1.058,1.2728,1.4562,1.6038,1.7119,1.7778,1.8,1.7778,1.7119,1.6038,1.4562,1.2728,1.058,0.8172,0.5562,0.2816,0,-0.2816,-0.5562,-0.8172,-1.058,-1.2728,-1.4562,-1.6038,-1.7119,-1.7778,-1.8,-1.7778,-1.7119,-1.6038,-1.4562,-1.2728,-1.058,-0.8172,-0.5562,-0.2816,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#344b61","strokeWidth":2,"fixed":true,"highlight":false,"fillColor":"#b8cfdf","fillOpacity":0.38}},
  {"type":"curve3d","def":[[0.92,0.9087,0.875,0.8197,0.7443,0.6505,0.5408,0.4177,0.2843,0.1439,0,-0.1439,-0.2843,-0.4177,-0.5408,-0.6505,-0.7443,-0.8197,-0.875,-0.9087,-0.92,-0.9087,-0.875,-0.8197,-0.7443,-0.6505,-0.5408,-0.4177,-0.2843,-0.1439,0,0.1439,0.2843,0.4177,0.5408,0.6505,0.7443,0.8197,0.875,0.9087,0.92],[0,0.1439,0.2843,0.4177,0.5408,0.6505,0.7443,0.8197,0.875,0.9087,0.92,0.9087,0.875,0.8197,0.7443,0.6505,0.5408,0.4177,0.2843,0.1439,0,-0.1439,-0.2843,-0.4177,-0.5408,-0.6505,-0.7443,-0.8197,-0.875,-0.9087,-0.92,-0.9087,-0.875,-0.8197,-0.7443,-0.6505,-0.5408,-0.4177,-0.2843,-0.1439,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.6,"fixed":true,"highlight":false,"dash":2}},
  {"type":"curve3d","def":[[1.45,1.4321,1.379,1.292,1.1731,1.0253,0.8523,0.6583,0.4481,0.2268,0,-0.2268,-0.4481,-0.6583,-0.8523,-1.0253,-1.1731,-1.292,-1.379,-1.4321,-1.45,-1.4321,-1.379,-1.292,-1.1731,-1.0253,-0.8523,-0.6583,-0.4481,-0.2268,0,0.2268,0.4481,0.6583,0.8523,1.0253,1.1731,1.292,1.379,1.4321,1.45],[0,0.2268,0.4481,0.6583,0.8523,1.0253,1.1731,1.292,1.379,1.4321,1.45,1.4321,1.379,1.292,1.1731,1.0253,0.8523,0.6583,0.4481,0.2268,0,-0.2268,-0.4481,-0.6583,-0.8523,-1.0253,-1.1731,-1.292,-1.379,-1.4321,-1.45,-1.4321,-1.379,-1.292,-1.1731,-1.0253,-0.8523,-0.6583,-0.4481,-0.2268,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.6,"fixed":true,"highlight":false,"dash":2}},
  {"type":"line3d","def":[[0,0,-1.55],[0,0,1.48]],"att":{"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":2,"lastArrow":true}},
  {"type":"line3d","def":[[0,0,0],[0.1382,0.9096,0]],"att":{"fixed":true,"highlight":false,"strokeColor":"#186b99","strokeWidth":2}},
  {"type":"line3d","def":[[0,0,0],[-0.8058,1.2055,0]],"att":{"fixed":true,"highlight":false,"strokeColor":"#186b99","strokeWidth":2}},
  {"type":"curve3d","def":[[0.6239,0.5273,0.4295,0.3306,0.231,0.1307,0.0302,-0.0704,-0.1709,-0.2709,-0.3703,-0.4688,-0.5661,-0.6621],[1.9423,1.9707,1.9943,2.013,2.0269,2.0358,2.0398,2.0388,2.0328,2.0219,2.0061,1.9854,1.9599,1.9296],[0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#994521","strokeWidth":2.6,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-0.6621,1.9296,0],[-0.8489,1.855,0]],"att":{"fixed":true,"highlight":false,"strokeColor":"#994521","strokeWidth":2.6,"lastArrow":true}},
  {"type":"point3d","def":[0,0,0],"att":{"size":4,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#344b61","strokeColor":"#344b61"}},
  {"type":"point3d","def":[0.1382,0.9096,0],"att":{"size":4,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#186b99","strokeColor":"#186b99"}},
  {"type":"point3d","def":[-0.8058,1.2055,0],"att":{"size":4,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#186b99","strokeColor":"#186b99"}},
  {"type":"text3d","def":[[0,0.10,1.38],"Axis of rotation"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.15,-0.12,-0.15],"𝑂"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.1782,0.9895999999999999,-0.14],"Point A"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#186b99","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.9258,1.2655,0.11],"Point B"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#186b99","fixed":true,"highlight":false}}
]
```

**Fig. 1.1a** A disk spins about an axis perpendicular to its plane through its fixed center O. Points A and B follow circular paths with radii $\mechanical{r}_A$ and $\mechanical{r}_B$. Drag to rotate the plot.

```graph3d
bounds: [-1.52, 0.9, 1.52, -0.9]
bounds3d: [[-1.62, 1.62], [-1.62, 1.62], [-1.62, 1.62]]
height: 330
width: 680
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
  az: {slider: {start: 2.78, visible: false}, pointer: {enabled: true}}
  el: {slider: {start: 0.53, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"curve3d","def":[[1.2,1.1852,1.1413,1.0692,0.9708,0.8485,0.7053,0.5448,0.3708,0.1877,0,-0.1877,-0.3708,-0.5448,-0.7053,-0.8485,-0.9708,-1.0692,-1.1413,-1.1852,-1.2,-1.1852,-1.1413,-1.0692,-0.9708,-0.8485,-0.7053,-0.5448,-0.3708,-0.1877,0,0.1877,0.3708,0.5448,0.7053,0.8485,0.9708,1.0692,1.1413,1.1852,1.2],[0,0.1877,0.3708,0.5448,0.7053,0.8485,0.9708,1.0692,1.1413,1.1852,1.2,1.1852,1.1413,1.0692,0.9708,0.8485,0.7053,0.5448,0.3708,0.1877,0,-0.1877,-0.3708,-0.5448,-0.7053,-0.8485,-0.9708,-1.0692,-1.1413,-1.1852,-1.2,-1.1852,-1.1413,-1.0692,-0.9708,-0.8485,-0.7053,-0.5448,-0.3708,-0.1877,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.6,"fixed":true,"highlight":false,"dash":2}},
  {"type":"line3d","def":[[0,0,-1.55],[0,0,1.48]],"att":{"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":2,"lastArrow":true}},
  {"type":"line3d","def":[[0,0,0],[0.1446,1.1913,0]],"att":{"fixed":true,"highlight":false,"strokeColor":"#186b99","strokeWidth":2.6}},
  {"type":"curve3d","def":[[0.4648,0.391,0.3161,0.2404,0.164,0.0873,0.0103,-0.0667,-0.1435,-0.2199,-0.2958,-0.371,-0.4451,-0.5182],[1.4472,1.4689,1.4868,1.5009,1.5111,1.5175,1.52,1.5185,1.5132,1.504,1.4909,1.474,1.4534,1.429],[0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#994521","strokeWidth":2.6,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-0.5182,1.429,0],[-0.6601,1.3692,0]],"att":{"fixed":true,"highlight":false,"strokeColor":"#994521","strokeWidth":2.6,"lastArrow":true}},
  {"type":"point3d","def":[0,0,0],"att":{"size":4,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#344b61","strokeColor":"#344b61"}},
  {"type":"point3d","def":[0.1446,1.1913,0],"att":{"size":4,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#186b99","strokeColor":"#186b99"}},
  {"type":"text3d","def":[[0,0.10,1.38],"Axis of rotation"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.15,-0.12,-0.15],"𝑂"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.1446,1.2713,0.13],"Ball"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#186b99","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.2646,0.6313890000000001,-0.18],"Rope"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#186b99","fixed":true,"highlight":false}}
]
```

**Fig. 1.1b** A ball on a rope orbits the axis through the fixed end O. The axis is perpendicular to the plane of the orbit and lies outside the ball. Drag to rotate the plot.

As mentioned in the preface, in this book, we focus on rotation about a *fixed axis* from the viewpoint of an inertial observer, which is the simplest kind of rotational motion. So why are we limiting our study to only the simplest case? This is because all the quantities we study in this book are fundamental to understanding the more general cases and more mathematically abstract formalism you will encounter in upper-level coursework. In Chapter 8, we will briefly study a case where the axis of rotation is not fixed and present some of the mathematical formalism used to describe rotations in upper-level mechanics courses.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{T}$ | $\unit{s}$ | Period | Time for one repetition. |
| $\signal{f}$ | $\unit{Hz}$ | Frequency | Number of repetitions per unit time. |
| $\Delta t$ | $\unit{s}$ | Time interval | Duration over which the repetitions are counted. |
| $N$ | 1 | Number of repetitions | Count of repetitions within the time interval. |
| $\mechanical{r}_A, \mechanical{r}_B$ | $\unit{m}$ | Orbital radii | Distances of points A and B from the axis of rotation in Fig. 1.1. |
