---
title: "1.2 Rotational Motion with Constant Speed"
---

> [!TLDR]
> In uniform circular motion, angular velocity is constant and tangential speed increases with distance from the axis.

With these definitions in hand, we can already start studying some physical phenomena. Recall from our course in introductory mechanics, one of the first concepts encountered was kinematics with constant (translational) velocity and constant (translational) acceleration. So, let’s start with the simplest, equivalent phenomena for rotational motion.

First, let’s consider a point mass that moves in a circle and travels equal arc lengths at equal time intervals (i.e., the speed remains constant). In this motion, the linear velocity $\mechanical{\vec v}$ has constant magnitude, but its direction changes.

```graph
bounds: [-2.32, 1.78, 2.32, -1.55]
height: 350
width: 560
axis: false
drag: false
showNavigation: false
keepAspectRatio: true
elements: [
  {"type":"curve","def":[[1.3,1.2905,1.2622,1.2155,1.1511,1.0699,0.9731,0.8621,0.7385,0.6041,0.461,0.3111,0.1567,0,-0.1567,-0.3111,-0.461,-0.6041,-0.7385,-0.8621,-0.9731,-1.0699,-1.1511,-1.2155,-1.2622,-1.2905,-1.3,-1.2905,-1.2622,-1.2155,-1.1511,-1.0699,-0.9731,-0.8621,-0.7385,-0.6041,-0.461,-0.3111,-0.1567,0,0.1567,0.3111,0.461,0.6041,0.7385,0.8621,0.9731,1.0699,1.1511,1.2155,1.2622,1.2905,1.3],[0,0.1567,0.3111,0.461,0.6041,0.7385,0.8621,0.9731,1.0699,1.1511,1.2155,1.2622,1.2905,1.3,1.2905,1.2622,1.2155,1.1511,1.0699,0.9731,0.8621,0.7385,0.6041,0.461,0.3111,0.1567,0,-0.1567,-0.3111,-0.461,-0.6041,-0.7385,-0.8621,-0.9731,-1.0699,-1.1511,-1.2155,-1.2622,-1.2905,-1.3,-1.2905,-1.2622,-1.2155,-1.1511,-1.0699,-0.9731,-0.8621,-0.7385,-0.6041,-0.461,-0.3111,-0.1567,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.6,"fixed":true,"highlight":false,"dash":2}},
  {"type":"line","def":[[0,0],[1.3,0]],"att":{"straightFirst":false,"straightLast":false,"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":1.6}},
  {"type":"line","def":[[0,0],[0.4711,1.2117]],"att":{"straightFirst":false,"straightLast":false,"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":1.6}},
  {"type":"curve","def":[[1.1771,1.1719,1.1642,1.1539,1.141,1.1256,1.1078,1.0875,1.0647,1.0397,1.0124,0.9828,0.951,0.9172,0.8814,0.8436,0.8039,0.7625,0.7193,0.6747,0.6285],[0.0825,0.1377,0.1926,0.247,0.3009,0.3541,0.4065,0.4581,0.5086,0.5581,0.6062,0.6531,0.6985,0.7424,0.7846,0.8251,0.8638,0.9006,0.9354,0.9681,0.9987]],"att":{"strokeColor":"#994521","strokeWidth":2.5,"fixed":true,"highlight":false}},
  {"type":"line","def":[[0.6285,0.9987],[0.482,1.0771]],"att":{"straightFirst":false,"straightLast":false,"fixed":true,"highlight":false,"strokeColor":"#994521","strokeWidth":2.5,"lastArrow":true}},
  {"type":"line","def":[[1.3,0],[1.3,0.83]],"att":{"straightFirst":false,"straightLast":false,"fixed":true,"highlight":false,"strokeColor":"#186b99","strokeWidth":2.4,"lastArrow":true}},
  {"type":"line","def":[[0.4711,1.2117],[-0.3025,1.5125]],"att":{"straightFirst":false,"straightLast":false,"fixed":true,"highlight":false,"strokeColor":"#186b99","strokeWidth":2.4,"lastArrow":true}},
  {"type":"point","def":[0,0],"att":{"size":2,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#344b61","strokeColor":"#344b61"}},
  {"type":"point","def":[1.3,0],"att":{"size":4,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#186b99","strokeColor":"#186b99"}},
  {"type":"point","def":[0.4711,1.2117],"att":{"size":4,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#186b99","strokeColor":"#186b99"}},
  {"type":"text","def":[-0.18,-0.13,"𝑂"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false,"useMathJax":false}},
  {"type":"text","def":[0.7,-0.13,"𝑟"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false,"useMathJax":false}},
  {"type":"text","def":[1.43,-0.03,"t₁"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false,"useMathJax":false}},
  {"type":"text","def":[0.57,1.34,"t₂"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false,"useMathJax":false}},
  {"type":"text","def":[1.41,0.82,"𝑣"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#186b99","fixed":true,"highlight":false,"useMathJax":false}},
  {"type":"text","def":[-0.37,1.62,"𝑣"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#186b99","fixed":true,"highlight":false,"useMathJax":false}},
  {"type":"text","def":[0.82,0.54,"𝑆"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#994521","fixed":true,"highlight":false,"useMathJax":false}}
]
```

**Fig. 1.2** A particle moving at constant speed follows a circular path of radius $\mechanical{r}$. Its velocity $\mechanical{\vec v}$ changes direction as it covers arc length $\mechanical{S}$ during $\Delta t=t_2-t_1$. The rotation axis is perpendicular to the page through O.

The velocity vector is always tangent to the trajectory (in this case the trajectory is the circle), and it points in the direction of motion. Figure 1.2 shows the velocity vector at two different time instants ($t_1$ and $t_2$, with $t_2>t_1$) as the point mass moves around the circle in the counterclockwise direction with constant speed.

Since the particle is moving with constant speed, its average speed is the same as its instantaneous speed. If the particle travels an arc length $\mechanical{S}$ in a time interval $\Delta t$, then the speed (average or instantaneous) will be the arc length divided by the time interval:

$$
\mechanical{v}=\frac{\mechanical{S}}{\Delta t}=\frac{\mechanical{S}}{t_2-t_1}. \tag{1.3}
$$

Let’s explore some additional relations. During one period $\signal{T}$, by definition, the particle will have completed one revolution. Therefore, it will have traveled an arc length equal to the circle’s circumference $2\pi\mechanical{r}$, where $\mechanical{r}$ is the radius of the circle. Thus, we have:

$$
\mechanical{v}=\frac{\mechanical{S}}{\Delta t}=\frac{2\pi\mechanical{r}}{\signal{T}}=2\pi\mechanical{r}\signal{f}, \tag{1.4}
$$

where in the last relation we made use of Equation (1.2).

Let’s look more carefully at the implications of Equation (1.4). It is important to point out that while we have derived this equation in the context of a point mass, it is readily applicable to extended, rigid objects in the case where all points of the rigid body execute circular motion about the axis of rotation. As an example, let’s look again at a disk rotating with constant speed about an axis perpendicular to its plane, going through its center, as shown in a top-down view in Figure 1.3. Since this is a rigid body, all points must rotate with the same frequency; otherwise, the disk would deform. Therefore, Equation (1.4) shows us that the speed $\mechanical{v}$ of a particular point on the disk depends only on the radius $\mechanical{r}$ of the circle it transcribes (i.e., its distance from the axis of rotation).

```graph
bounds: [-2.65, 2.03, 2.65, -1.72]
height: 350
width: 560
axis: false
drag: false
showNavigation: false
keepAspectRatio: true
elements: [
  {"type":"curve","def":[[1.56,1.5486,1.5147,1.4586,1.3813,1.2839,1.1677,1.0345,0.8862,0.725,0.5532,0.3733,0.188,0,-0.188,-0.3733,-0.5532,-0.725,-0.8862,-1.0345,-1.1677,-1.2839,-1.3813,-1.4586,-1.5147,-1.5486,-1.56,-1.5486,-1.5147,-1.4586,-1.3813,-1.2839,-1.1677,-1.0345,-0.8862,-0.725,-0.5532,-0.3733,-0.188,0,0.188,0.3733,0.5532,0.725,0.8862,1.0345,1.1677,1.2839,1.3813,1.4586,1.5147,1.5486,1.56],[0,0.188,0.3733,0.5532,0.725,0.8862,1.0345,1.1677,1.2839,1.3813,1.4586,1.5147,1.5486,1.56,1.5486,1.5147,1.4586,1.3813,1.2839,1.1677,1.0345,0.8862,0.725,0.5532,0.3733,0.188,0,-0.188,-0.3733,-0.5532,-0.725,-0.8862,-1.0345,-1.1677,-1.2839,-1.3813,-1.4586,-1.5147,-1.5486,-1.56,-1.5486,-1.5147,-1.4586,-1.3813,-1.2839,-1.1677,-1.0345,-0.8862,-0.725,-0.5532,-0.3733,-0.188,0]],"att":{"strokeColor":"#344b61","strokeWidth":1.6,"fixed":true,"highlight":false,"fillColor":"#b8cfdf","fillOpacity":0.31}},
  {"type":"curve","def":[[0.99,0.9828,0.9612,0.9257,0.8766,0.8148,0.741,0.6565,0.5624,0.4601,0.3511,0.2369,0.1193,0,-0.1193,-0.2369,-0.3511,-0.4601,-0.5624,-0.6565,-0.741,-0.8148,-0.8766,-0.9257,-0.9612,-0.9828,-0.99,-0.9828,-0.9612,-0.9257,-0.8766,-0.8148,-0.741,-0.6565,-0.5624,-0.4601,-0.3511,-0.2369,-0.1193,0,0.1193,0.2369,0.3511,0.4601,0.5624,0.6565,0.741,0.8148,0.8766,0.9257,0.9612,0.9828,0.99],[0,0.1193,0.2369,0.3511,0.4601,0.5624,0.6565,0.741,0.8148,0.8766,0.9257,0.9612,0.9828,0.99,0.9828,0.9612,0.9257,0.8766,0.8148,0.741,0.6565,0.5624,0.4601,0.3511,0.2369,0.1193,0,-0.1193,-0.2369,-0.3511,-0.4601,-0.5624,-0.6565,-0.741,-0.8148,-0.8766,-0.9257,-0.9612,-0.9828,-0.99,-0.9828,-0.9612,-0.9257,-0.8766,-0.8148,-0.741,-0.6565,-0.5624,-0.4601,-0.3511,-0.2369,-0.1193,0]],"att":{"strokeColor":"#344b61","strokeWidth":1.6,"fixed":true,"highlight":false}},
  {"type":"line","def":[[0,0],[1.56,0]],"att":{"straightFirst":false,"straightLast":false,"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":1.6}},
  {"type":"line","def":[[0,0],[0.5653,1.454]],"att":{"straightFirst":false,"straightLast":false,"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":1.6}},
  {"type":"curve","def":[[0.33,0.3293,0.3271,0.3234,0.3183,0.3118,0.304,0.2947,0.2842,0.2724,0.2593,0.2452,0.2299,0.2136,0.1964,0.1783,0.1594,0.1398,0.1196],[0,0.022,0.0439,0.0656,0.087,0.108,0.1285,0.1485,0.1678,0.1863,0.2041,0.2209,0.2367,0.2515,0.2652,0.2777,0.2889,0.2989,0.3076]],"att":{"strokeColor":"#344b61","strokeWidth":1.6,"fixed":true,"highlight":false}},
  {"type":"curve","def":[[0.9277,0.9236,0.9174,0.9091,0.8988,0.8865,0.8722,0.856,0.8378,0.8177,0.7958,0.7721,0.7467,0.7196,0.6909,0.6606,0.6288,0.5957,0.5612,0.5254,0.4885],[0.065,0.1089,0.1526,0.1958,0.2387,0.281,0.3227,0.3636,0.4038,0.443,0.4813,0.5184,0.5544,0.5892,0.6226,0.6546,0.6852,0.7142,0.7416,0.7674,0.7914]],"att":{"strokeColor":"#994521","strokeWidth":2.5,"fixed":true,"highlight":false}},
  {"type":"line","def":[[0.4885,0.7914],[0.3714,0.8526]],"att":{"straightFirst":false,"straightLast":false,"fixed":true,"highlight":false,"strokeColor":"#994521","strokeWidth":2.5,"lastArrow":true}},
  {"type":"curve","def":[[1.4864,1.4797,1.4698,1.4566,1.4401,1.4204,1.3974,1.3714,1.3422,1.3101,1.275,1.237,1.1963,1.1529,1.1068,1.0583,1.0075,0.9543,0.8991,0.8418,0.7826],[0.1042,0.1745,0.2444,0.3138,0.3824,0.4502,0.517,0.5826,0.6469,0.7098,0.7711,0.8306,0.8883,0.9439,0.9975,1.0488,1.0978,1.1443,1.1882,1.2294,1.2679]],"att":{"strokeColor":"#994521","strokeWidth":2.5,"fixed":true,"highlight":false}},
  {"type":"line","def":[[0.7826,1.2679],[0.595,1.366]],"att":{"straightFirst":false,"straightLast":false,"fixed":true,"highlight":false,"strokeColor":"#994521","strokeWidth":2.5,"lastArrow":true}},
  {"type":"line","def":[[0.99,0],[0.99,0.58]],"att":{"straightFirst":false,"straightLast":false,"fixed":true,"highlight":false,"strokeColor":"#186b99","strokeWidth":2.4,"lastArrow":true}},
  {"type":"line","def":[[0.3587,0.9227],[-0.1819,1.1329]],"att":{"straightFirst":false,"straightLast":false,"fixed":true,"highlight":false,"strokeColor":"#186b99","strokeWidth":2.4,"lastArrow":true}},
  {"type":"line","def":[[1.56,0],[1.56,0.9]],"att":{"straightFirst":false,"straightLast":false,"fixed":true,"highlight":false,"strokeColor":"#186b99","strokeWidth":2.4,"lastArrow":true}},
  {"type":"line","def":[[0.5653,1.454],[-0.2735,1.7801]],"att":{"straightFirst":false,"straightLast":false,"fixed":true,"highlight":false,"strokeColor":"#186b99","strokeWidth":2.4,"lastArrow":true}},
  {"type":"point","def":[0,0],"att":{"size":2,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#344b61","strokeColor":"#344b61"}},
  {"type":"point","def":[0.99,0],"att":{"size":4,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#186b99","strokeColor":"#186b99"}},
  {"type":"point","def":[0.3587,0.9227],"att":{"size":4,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#186b99","strokeColor":"#186b99"}},
  {"type":"point","def":[1.56,0],"att":{"size":4,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#186b99","strokeColor":"#186b99"}},
  {"type":"point","def":[0.5653,1.454],"att":{"size":4,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#186b99","strokeColor":"#186b99"}},
  {"type":"text","def":[-0.19,-0.15,"𝑂"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false,"useMathJax":false}},
  {"type":"text","def":[0.19,0.18,"Δθ"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false,"useMathJax":false}},
  {"type":"text","def":[1.02,-0.15,"Point A"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false,"useMathJax":false}},
  {"type":"text","def":[1.59,-0.15,"Point B"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false,"useMathJax":false}},
  {"type":"text","def":[0.47,0.58,"Sₐ"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#994521","fixed":true,"highlight":false,"useMathJax":false}},
  {"type":"text","def":[1.05,0.96,"Sᵦ"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#994521","fixed":true,"highlight":false,"useMathJax":false}},
  {"type":"text","def":[1.07,0.5,"vₐ"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#186b99","fixed":true,"highlight":false,"useMathJax":false}},
  {"type":"text","def":[1.66,0.84,"vᵦ"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#186b99","fixed":true,"highlight":false,"useMathJax":false}},
  {"type":"text","def":[-0.28,1.18,"vₐ"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#186b99","fixed":true,"highlight":false,"useMathJax":false}},
  {"type":"text","def":[-0.43,1.85,"vᵦ"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#186b99","fixed":true,"highlight":false,"useMathJax":false}}
]
```

**Fig. 1.3** Two points on a disk, $A$ and $B$, rotating about the same axis of rotation perpendicular to the page and through point $O$. The two points are at different distances from the axis of rotation, and each traverses a different arc length, $\mechanical{S}_A$ and $\mechanical{S}_B$, respectively, in the same time interval $\Delta t$. Thus, their respective speeds $\mechanical{v}_A$ and $\mechanical{v}_B$ are different. However, during this time interval they both traverse the same angle $\Delta\mechanical{\theta}$.

With this in mind, now let’s look at three points on the disk, namely points $O$, $A$, and $B$ of Figure 1.3. Since these points are located at different distances from the axis of rotation that goes through the center of the disk, they will not have the same speed $\mechanical{v}$ because the radii of the circles they are transcribing are different. For point $O$, $\mechanical{r} = 0$ and thus $\mechanical{v} = 0$ according to Equation (1.4). The two points $A$ and $B$, located along the same radial line, will traverse different arc lengths during the same time interval as the disk rotates by an angle $\Delta\mechanical{\theta}$. For the two points, respectively, we have that:

$$
\begin{aligned}
\mechanical{v}_A &=\frac{\mechanical{S}_A}{\Delta t},\\
\mechanical{v}_B &=\frac{\mechanical{S}_B}{\Delta t}.
\end{aligned}
\tag{1.5}
$$

However, since $\Delta t$ is the same but $\mechanical{S}_B > \mechanical{S}_A$, it must be that $\mechanical{v}_B > \mechanical{v}_A$. This result was expected from Equation (1.4) since the radius of point $A$’s circle is less than the radius of point $B$’s circle.

We immediately see that we are faced with a problem. How does one describe the speed of the disk? The speed of a point depends on the arc length it traverses, which in turn depends on the distance between the point and the center of the disk. Then which point’s speed shall we pick as being representative of the speed of the disk? Should we pick a point on the rim of the disk? The midpoint of the disk’s radius? Such a choice will imply that there is a point on the disk that is special to us, and we will have to find such a special point for all rotating objects of different shapes!

## 1.2.1 Angular Displacement ($\Delta\mechanical{\theta}$)

To answer these questions, let’s again look at the two points $A$ and $B$ of Figure 1.3. The problem is solved by observing that even though the two points traverse different arc lengths, they both traverse the same angle $\Delta\mechanical{\theta}$. We therefore conclude that this angle represents a better way of describing the disk’s displacement during rotation than does the traversed arc length, which is different for points at different distances from the center.

Now let’s examine Figure 1.4. In the figure, $\mechanical{\theta}$ by itself represents the angular position for the points on the disk, conventionally measured with respect to the $+x$ axis and regarded as positive when the rotation is in the counterclockwise direction. Thus, all points that belong to the same radial line (e.g., OP or OP’) will have the same angular position with respect to the $+x$ axis ($\mechanical{\theta}_1$ or $\mechanical{\theta}_2$, respectively).

In Figure 1.4, if we follow the motion of any point on the disk that is initially along the radius OP, such as point $A$, we see that this point has an angular position $\mechanical{\theta}_1$ at time $t_1$, and an angular position $\mechanical{\theta}_2$ at time $t_2$, when it lies along the radial line OP’. Therefore, its angular displacement within that time interval is defined by:

$$
\Delta\mechanical{\theta} = \mechanical{\theta}_2 - \mechanical{\theta}_1 = \mechanical{\theta}_{\text{final}} - \mechanical{\theta}_{\text{initial}}. \tag{1.6}
$$

If the disk is rigid, then all its points will have the same angular displacement during the same time interval, even though they did not travel equal arc lengths. If they did not have the same angular displacement, then the distances between two such points would change over time and thus the disk would deform. Since the angular displacement is the same for all points on the disk, it is more convenient to use than the arc length when studying the displacement of this rotating object as a whole. In summary, just like the linear displacement $\Delta\mechanical{\vec{x}}$ is defined as the change in the position $\mechanical{\vec{x}}$ of an object, the angular displacement $\Delta\mechanical{\theta}$ is the change in the angular position $\mechanical{\theta}$ of any point of the object and, thus, of the whole object.

```graph
bounds: [-2.6, 1.92, 2.6, -1.8]
height: 350
width: 560
axis: false
drag: false
showNavigation: false
keepAspectRatio: true
elements: [
  {"type":"curve","def":[[1.35,1.3402,1.3108,1.2623,1.1954,1.111,1.0105,0.8952,0.7669,0.6274,0.4787,0.3231,0.1627,0,-0.1627,-0.3231,-0.4787,-0.6274,-0.7669,-0.8952,-1.0105,-1.111,-1.1954,-1.2623,-1.3108,-1.3402,-1.35,-1.3402,-1.3108,-1.2623,-1.1954,-1.111,-1.0105,-0.8952,-0.7669,-0.6274,-0.4787,-0.3231,-0.1627,0,0.1627,0.3231,0.4787,0.6274,0.7669,0.8952,1.0105,1.111,1.1954,1.2623,1.3108,1.3402,1.35],[0,0.1627,0.3231,0.4787,0.6274,0.7669,0.8952,1.0105,1.111,1.1954,1.2623,1.3108,1.3402,1.35,1.3402,1.3108,1.2623,1.1954,1.111,1.0105,0.8952,0.7669,0.6274,0.4787,0.3231,0.1627,0,-0.1627,-0.3231,-0.4787,-0.6274,-0.7669,-0.8952,-1.0105,-1.111,-1.1954,-1.2623,-1.3108,-1.3402,-1.35,-1.3402,-1.3108,-1.2623,-1.1954,-1.111,-1.0105,-0.8952,-0.7669,-0.6274,-0.4787,-0.3231,-0.1627,0]],"att":{"strokeColor":"#344b61","strokeWidth":1.6,"fixed":true,"highlight":false,"fillColor":"#b8cfdf","fillOpacity":0.31}},
  {"type":"line","def":[[-1.8,0],[1.8,0]],"att":{"straightFirst":false,"straightLast":false,"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":1.6,"lastArrow":true}},
  {"type":"line","def":[[0,-1.58],[0,1.73]],"att":{"straightFirst":false,"straightLast":false,"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":1.6,"lastArrow":true}},
  {"type":"line","def":[[0,0],[1.2036,0.6114]],"att":{"straightFirst":false,"straightLast":false,"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":1.6}},
  {"type":"line","def":[[0,0],[0.6003,1.2092]],"att":{"straightFirst":false,"straightLast":false,"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":1.6}},
  {"type":"curve","def":[[0.8877,0.8753,0.8624,0.849,0.8352,0.8208,0.8059,0.7906,0.7748,0.7586,0.7419,0.7248,0.7073,0.6894,0.671,0.6523,0.6332,0.6137,0.5939,0.5737,0.5532],[0.5024,0.5237,0.5446,0.5653,0.5856,0.6056,0.6252,0.6445,0.6634,0.6819,0.7,0.7177,0.7349,0.7518,0.7682,0.7842,0.7997,0.8147,0.8293,0.8434,0.857]],"att":{"strokeColor":"#994521","strokeWidth":2.5,"fixed":true,"highlight":false}},
  {"type":"line","def":[[0.5532,0.857],[0.4897,0.8947]],"att":{"straightFirst":false,"straightLast":false,"fixed":true,"highlight":false,"strokeColor":"#994521","strokeWidth":2.5,"lastArrow":true}},
  {"type":"curve","def":[[1.2881,1.2699,1.251,1.2316,1.2115,1.1909,1.1698,1.1481,1.1258,1.103,1.0797,1.0559,1.0316,1.0068,0.9815,0.9557,0.9295,0.9029,0.8759,0.8484,0.8205],[0.8256,0.8534,0.8808,0.9078,0.9344,0.9605,0.9862,1.0114,1.0361,1.0603,1.084,1.1072,1.1299,1.1521,1.1737,1.1948,1.2153,1.2352,1.2545,1.2732,1.2914]],"att":{"strokeColor":"#994521","strokeWidth":2.5,"fixed":true,"highlight":false}},
  {"type":"line","def":[[0.8205,1.2914],[0.7346,1.3421]],"att":{"straightFirst":false,"straightLast":false,"fixed":true,"highlight":false,"strokeColor":"#994521","strokeWidth":2.5,"lastArrow":true}},
  {"type":"curve","def":[[0.48,0.4799,0.4795,0.4788,0.4779,0.4767,0.4752,0.4735,0.4715,0.4693,0.4668,0.4641,0.461,0.4578,0.4543,0.4505,0.4465,0.4422,0.4377,0.4329,0.428],[0,0.0113,0.0226,0.0338,0.0451,0.0563,0.0675,0.0786,0.0897,0.1008,0.1118,0.1227,0.1336,0.1444,0.1551,0.1657,0.1763,0.1867,0.197,0.2073,0.2174]],"att":{"strokeColor":"#344b61","strokeWidth":1.6,"fixed":true,"highlight":false}},
  {"type":"curve","def":[[0.29,0.2896,0.2882,0.286,0.2829,0.2789,0.2741,0.2684,0.2619,0.2546,0.2465,0.2376,0.228,0.2177,0.2068,0.1952,0.183,0.1702,0.1569,0.1432,0.129],[0,0.0161,0.0321,0.0481,0.0639,0.0794,0.0948,0.1099,0.1246,0.1389,0.1528,0.1663,0.1792,0.1915,0.2033,0.2145,0.225,0.2348,0.2439,0.2522,0.2598]],"att":{"strokeColor":"#344b61","strokeWidth":1.6,"fixed":true,"highlight":false}},
  {"type":"point","def":[0,0],"att":{"size":2,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#344b61","strokeColor":"#344b61"}},
  {"type":"point","def":[1.2036,0.6114],"att":{"size":2,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#344b61","strokeColor":"#344b61"}},
  {"type":"point","def":[0.6003,1.2092],"att":{"size":2,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#344b61","strokeColor":"#344b61"}},
  {"type":"point","def":[0.9094,0.4619],"att":{"size":4,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#186b99","strokeColor":"#186b99"}},
  {"type":"point","def":[0.4536,0.9136],"att":{"size":4,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#186b99","strokeColor":"#186b99"}},
  {"type":"text","def":[1.78,-0.12,"+x"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false,"useMathJax":false}},
  {"type":"text","def":[0.09,1.67,"+y"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false,"useMathJax":false}},
  {"type":"text","def":[-0.2,-0.13,"𝑂"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false,"useMathJax":false}},
  {"type":"text","def":[1.23,0.68,"𝑃"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false,"useMathJax":false}},
  {"type":"text","def":[0.66,1.27,"P′"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false,"useMathJax":false}},
  {"type":"text","def":[0.94,0.38,"A (initial)"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#186b99","fixed":true,"highlight":false,"useMathJax":false}},
  {"type":"text","def":[0.17,0.98,"A (final)"],"att":{"fontSize":16,"anchorX":"right","strokeColor":"#186b99","fixed":true,"highlight":false,"useMathJax":false}},
  {"type":"text","def":[0.62,0.84,"Δθ"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#994521","fixed":true,"highlight":false,"useMathJax":false}},
  {"type":"text","def":[0.5,0.12,"θ₁"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false,"useMathJax":false}},
  {"type":"text","def":[0.22,0.32,"θ₂"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false,"useMathJax":false}}
]
```

**Fig. 1.4** As the disk rotates counterclockwise, point $A$, which was initially on line $OP$ at time $t_1$, moves to line $OP'$ at time $t_2$. Therefore, its angular position changes from $\mechanical{\theta}_1$ at time $t_1$ to $\mechanical{\theta}_2$ at time $t_2$. Its angular displacement $\Delta\mechanical{\theta}$ is given by Equation (1.6). Since the disk is rigid, all its points will have the same angular displacement as point $A$ during the same time interval.

### Units of Angular Displacement

At this point, you may be wondering whether the angular position and displacement are measured in radians, revolutions, or degrees. While, in principle, one could express the angular position or displacement in degrees or revolutions, the radian is the most natural choice. To see why, let’s examine Figure 1.5. An angle of 1 radian ($\unit{rad}$) is defined as the angle $\mechanical{\theta}$ for which the arc length $\mechanical{S}$ subtended by this angle is equal to the radius of the circle $\mechanical{r}$. In general, the angle $\mechanical{\theta}$ (in radians) is given by the ratio:

$$
\mechanical{\theta} = \frac{\mechanical{S}}{\mechanical{r}} \Rightarrow \mechanical{S} = \mechanical{r}\mechanical{\theta}, \tag{1.7}
$$

so that if $\mechanical{S} = \mechanical{r}$, then $\mechanical{\theta} = 1\,\unit{rad}$.

```graph
bounds: [-1.65, 1.55, 1.97, -1.52]
height: 355
width: 560
axis: false
drag: false
showNavigation: false
keepAspectRatio: true
elements: [
  {"type":"curve","def":[[1.3,1.29374,1.27502,1.24402,1.20104,1.1465,1.08091,1.00491,0.91924,0.82471,0.72224,0.61282,0.49749,0.37737,0.25362,0.12742,0,-0.12742,-0.25362,-0.37737,-0.49749,-0.61282,-0.72224,-0.82471,-0.91924,-1.00491,-1.08091,-1.1465,-1.20104,-1.24402,-1.27502,-1.29374,-1.3,-1.29374,-1.27502,-1.24402,-1.20104,-1.1465,-1.08091,-1.00491,-0.91924,-0.82471,-0.72224,-0.61282,-0.49749,-0.37737,-0.25362,-0.12742,0,0.12742,0.25362,0.37737,0.49749,0.61282,0.72224,0.82471,0.91924,1.00491,1.08091,1.1465,1.20104,1.24402,1.27502,1.29374,1.3],[0,0.12742,0.25362,0.37737,0.49749,0.61282,0.72224,0.82471,0.91924,1.00491,1.08091,1.1465,1.20104,1.24402,1.27502,1.29374,1.3,1.29374,1.27502,1.24402,1.20104,1.1465,1.08091,1.00491,0.91924,0.82471,0.72224,0.61282,0.49749,0.37737,0.25362,0.12742,0,-0.12742,-0.25362,-0.37737,-0.49749,-0.61282,-0.72224,-0.82471,-0.91924,-1.00491,-1.08091,-1.1465,-1.20104,-1.24402,-1.27502,-1.29374,-1.3,-1.29374,-1.27502,-1.24402,-1.20104,-1.1465,-1.08091,-1.00491,-0.91924,-0.82471,-0.72224,-0.61282,-0.49749,-0.37737,-0.25362,-0.12742,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.6,"fixed":true,"highlight":false}},
  {"type":"line","def":[[0,0],[1.3,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#186b99","strokeWidth":2,"fixed":true,"highlight":false}},
  {"type":"line","def":[[0,0],[0.70239,1.09391]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#186b99","strokeWidth":2,"fixed":true,"highlight":false}},
  {"type":"curve","def":[[1.3,1.29838,1.29351,1.2854,1.27409,1.25959,1.24194,1.22118,1.19738,1.17058,1.14086,1.10828,1.07294,1.03491,0.99429,0.9512,0.90572,0.85798,0.80809,0.75619,0.70239],[0,0.06497,0.12978,0.19427,0.25827,0.32163,0.38418,0.44577,0.50624,0.56546,0.62325,0.67949,0.73404,0.78674,0.83748,0.88613,0.93256,0.97666,1.01832,1.05744,1.09391]],"att":{"strokeColor":"#994521","strokeWidth":3.5,"fixed":true,"highlight":false}},
  {"type":"curve","def":[[0.42,0.41907,0.41627,0.41163,0.40515,0.39688,0.38685,0.37509,0.36167,0.34664,0.33007,0.31204,0.29262,0.2719,0.24997,0.22693],[0,0.02798,0.05583,0.08344,0.11068,0.13742,0.16356,0.18896,0.21353,0.23715,0.25972,0.28113,0.30129,0.32011,0.33752,0.35342]],"att":{"strokeColor":"#186b99","strokeWidth":2,"fixed":true,"highlight":false}},
  {"type":"point","def":[0,0],"att":{"size":3,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#344b61","strokeColor":"#344b61"}},
  {"type":"point","def":[1.3,0],"att":{"size":3,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#994521","strokeColor":"#994521"}},
  {"type":"point","def":[0.70239,1.09391],"att":{"size":3,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#994521","strokeColor":"#994521"}},
  {"type":"text","def":[-0.18,-0.15,"𝑂"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#344b61"}},
  {"type":"text","def":[0.63,-0.14,"𝑟"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#186b99"}},
  {"type":"text","def":[0.45,0.23,"θ = 1 rad"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#186b99"}},
  {"type":"text","def":[1.23,0.66,"S = r"],"att":{"fixed":true,"highlight":false,"fontSize":16,"useMathJax":false,"strokeColor":"#994521"}}
]
```

**Fig. 1.5** An angle of 1 radian is defined as the angle $\mechanical{\theta}$ for which the arc length $\mechanical{S}$ subtended by this angle is equal to the radius of the circle $\mechanical{r}$.

The reason why the radian is a natural way of measuring angles is because it is, by definition, the ratio of two physical quantities with the same units, in contrast to the degree for which there are (arbitrarily) 360 in a circle. Thus, from Equation (1.7), we see that if we multiply the radius $\mechanical{r}$ by some angle $\mechanical{\theta}$, we obtain the arc length $\mechanical{S}$ subtended by this angle *in the same units as $\mechanical{r}$*, provided that $\mechanical{\theta}$ is in radians. The radian is preferable because of the natural link it provides between angular and linear quantities. If we need to convert between units of measurement, 1 revolution = $2\pi$ rad = $360^\circ$. Looking back at Figure 1.3, we see that in radians, the angular displacement $\Delta\mechanical{\theta}$ of points $A$ and $B$ is given by:

$$
\Delta\mechanical{\theta} = \frac{\mechanical{S}_A}{OA} = \frac{\mechanical{S}_B}{OB}. \tag{1.8}
$$

## 1.2.2 Angular Velocity ($\mechanical{\vec{\omega}}$)

Following our analogy between $\Delta\mechanical{\theta}$ and $\Delta\mechanical{\vec{x}}$ from translational motion, we now define the concept of velocity for rotational motion. The magnitude of the *average angular velocity* $\mechanical{\omega}_{\text{avg}}$ is an object’s angular displacement $\Delta\mechanical{\theta}$ that occurs within a time interval $\Delta t$ divided by this time interval $\Delta t$:

$$
\mechanical{\omega}_{\text{avg}} = \frac{\Delta\mechanical{\theta}}{\Delta t} = \frac{\mechanical{\theta}_{\text{final}} - \mechanical{\theta}_{\text{initial}}}{t_{\text{final}} - t_{\text{initial}}}. \tag{1.9}
$$

Angular velocity is actually a vector quantity (which we will discuss in more detail shortly) with the SI unit of radians per second ($\unit{rad/s}$) and direction pointing along the axis of rotation of the object. For the case of the rotating disk fixed at its center $O$ shown in Figure 1.6, the axis of rotation is perpendicular to the plane of the disk and goes through the center $O$, as defined earlier. $\mechanical{\vec{\omega}}_{\text{avg}}$ would then be along this axis. But how do we get the correct direction (i.e., up or down) along the axis of rotation?

```graph3d
bounds: [-1.52, 0.9, 1.52, -0.9]
bounds3d: [[-1.95, 1.95], [-1.95, 1.95], [-1.68, 1.68]]
height: 300
width: 620
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
  el: {slider: {start: 0.50, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"curve3d","def":[[1.68,1.6629,1.6119,1.5282,1.4133,1.2697,1.1002,0.9083,0.6979,0.4733,0.2391,0,-0.2391,-0.4733,-0.6979,-0.9083,-1.1002,-1.2697,-1.4133,-1.5282,-1.6119,-1.6629,-1.68,-1.6629,-1.6119,-1.5282,-1.4133,-1.2697,-1.1002,-0.9083,-0.6979,-0.4733,-0.2391,0,0.2391,0.4733,0.6979,0.9083,1.1002,1.2697,1.4133,1.5282,1.6119,1.6629,1.68],[0,0.2391,0.4733,0.6979,0.9083,1.1002,1.2697,1.4133,1.5282,1.6119,1.6629,1.68,1.6629,1.6119,1.5282,1.4133,1.2697,1.1002,0.9083,0.6979,0.4733,0.2391,0,-0.2391,-0.4733,-0.6979,-0.9083,-1.1002,-1.2697,-1.4133,-1.5282,-1.6119,-1.6629,-1.68,-1.6629,-1.6119,-1.5282,-1.4133,-1.2697,-1.1002,-0.9083,-0.6979,-0.4733,-0.2391,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#344b61","strokeWidth":1.6,"fixed":true,"highlight":false,"fillColor":"#b8cfdf","fillOpacity":0.38}},
  {"type":"line3d","def":[[0,0,-1.55],[0,0,1.65]],"att":{"fixed":true,"highlight":false,"strokeColor":"#6b8296","strokeWidth":1.8,"dash":2}},
  {"type":"line3d","def":[[0,0,0],[0,0,1.16]],"att":{"fixed":true,"highlight":false,"strokeColor":"#186b99","strokeWidth":3.4,"lastArrow":true}},
  {"type":"curve3d","def":[[1.3721,1.3132,1.2519,1.1883,1.1226,1.0549,0.9853,0.9139,0.8409,0.7663,0.6903,0.6131,0.5348,0.4556,0.3755,0.2947,0.2134,0.1317],[1.3573,1.4144,1.4689,1.5208,1.5699,1.6162,1.6595,1.6999,1.7372,1.7714,1.8023,1.83,1.8544,1.8755,1.8931,1.9074,1.9182,1.9255],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#994521","strokeWidth":2.6,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.1317,1.9255,0],[-0.1142,1.9266,0]],"att":{"fixed":true,"highlight":false,"strokeColor":"#994521","strokeWidth":2.6,"lastArrow":true}},
  {"type":"point3d","def":[0,0,0],"att":{"size":4,"fixed":true,"highlight":false,"withLabel":false,"strokeColor":"#344b61","fillColor":"#344b61"}},
  {"type":"text3d","def":[[0,0.08,1.63],"Axis of rotation"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0,0.12,0.91],"ω"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#186b99","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.15,-0.09,-0.19],"𝑂"],"att":{"fontSize":16,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false}}
]
```

**Fig. 1.6a** Viewed from above, the disk rotates counterclockwise and its angular velocity $\mechanical{\vec{\omega}}$ points up along the axis. If the angular velocity is constant, its instantaneous and average values are equal. Drag to rotate the plot.

![[rotational-motion-fig-1-6b-right-hand-grip.svg|**Fig. 1.6b** Curl the fingers of your right hand in the direction of rotation. Your extended thumb points in the direction of the angular velocity $\mechanical{\vec{\omega}}$.|265]]

The direction at any moment is given by the right-hand rule. The right-hand rule says that if we grasp the axis of rotation with our right hand so that our four fingers curl in the direction of rotation of the object, then our extended thumb points in the direction of the angular velocity vector, as shown in Figure 1.6. This version of the right-hand rule is actually a shortcut; we will learn the more general right-hand rule soon when we talk about the more mathematically rigorous relation between linear velocity and angular velocity.

By definition, we also see that if $\Delta t$ is equal to 1 period (i.e., $\Delta t = \signal{T}$), then $\Delta \mechanical{\theta}$ will be equal to $2\pi$ ($\unit{rad}$). Thus,

$$
\mechanical{\omega}_{\text{avg}} = \frac{\Delta \mechanical{\theta}}{\Delta t} = \frac{2\pi}{\signal{T}} = 2\pi \signal{f}, \tag{1.10}
$$

where the last relation came from the use of Equation (1.2).

### Why Is Angular Velocity a Vector?

Now we have to open a subtle but important parenthesis: Based on the definition of $\mechanical{\omega}_{\text{avg}}$ given in Equation (1.9), since $\Delta t$ is a positive scalar ($t_{\text{final}} > t_{\text{initial}}$), $\Delta \mechanical{\theta}$ has to be a vector for $\mechanical{\omega}_{\text{avg}}$ to be a vector. This implies that $\mechanical{\theta}$ has to be a vector (from Equation (1.6)). Moreover, since $\Delta t$ is a positive scalar, from Equation (1.9) we see that $\mechanical{\vec{\omega}}_{\text{avg}}$ must have the same direction as the vector $\Delta \mechanical{\vec{\theta}}$.

If we define $\mechanical{\vec{\theta}}$ as a vector whose magnitude is the angular position $\mechanical{\theta}$ and whose direction runs parallel to the axis of rotation, with the direction of $\Delta \mechanical{\vec{\theta}}$ also given by the right-hand rule, then this definition certainly resolves the problem with the definition of $\mechanical{\vec{\omega}}_{\text{avg}}$. But is this all we need? Can we define the vector quantity $\mechanical{\vec{\theta}}$ ?

![[rotational-motion-fig-1-7-die-rotation-order.svg|**Fig. 1.7** The same die makes two 90° turns. (a) It turns about the x axis and then about the y axis. (b) It turns about the y axis and then about the x axis. The final orientations differ because the rotations do not commute.|740]]

Just because a quantity has a defined magnitude and direction does not mean it is a vector. Vectors obey the commutative property. That is, for two vectors $\vec a$ and $\vec{b}$:

$$
\vec a + \vec{b} = \vec{b} + \vec a. \tag{1.11}
$$

However, this commutative property does not hold for rotation in general. For example, as shown in Figure 1.7, the same set of rotations of a die about two different axes does not result in the same outcome if the rotations in the set are performed in the reverse order. However, if the rotation angles are small (i.e., infinitesimal), the rotation is almost planar, just like the rotation of the disk about the axis shown in Figure 1.6. As we know, planar displacements commute; for example, there is no difference in a particle’s final location if it moves $2\,\unit{m}$ in the $+y$ direction and then $1\,\unit{m}$ in the $+x$ direction versus if it moves $1\,\unit{m}$ in the $+x$ direction and then $2\,\unit{m}$ in the $+y$ direction. Thus, in this case, the two (infinitesimal) angular displacement vectors will commute with each other and $d\mechanical{\vec{\theta}}_1 + d\mechanical{\vec{\theta}}_2 = d\mechanical{\vec{\theta}}_2 + d\mechanical{\vec{\theta}}_1$. Therefore, though $\mechanical{\theta}$ is not a vector, $d\mechanical{\vec{\theta}}$ is! As a final note, while rotations do not commute in general, two rotations about the same axis of rotation do obey the commutative property because they are planar.

Knowing that $d\mechanical{\vec{\theta}}$ is a vector whose magnitude is the angle of rotation ($d\mechanical{\theta}$) and whose direction is given by the right-hand rule, as described above, is immensely convenient because it allows us to define the concept of the **instantaneous angular velocity** $\mechanical{\vec{\omega}}$ in a way that does justice to what we know about vectors and maintains the analogy with translational motion. If an object rotates by an infinitesimally small angle $d\mechanical{\vec{\theta}}$ during an infinitesimally small time interval $dt$, then

$$
\mechanical{\vec{\omega}} = \frac{d\mechanical{\vec{\theta}}}{dt}. \tag{1.12}
$$

As a result, $\mechanical{\vec{\omega}}$ is always a vector, and it obeys the commutative property. $\mechanical{\vec{\omega}}$ is the instantaneous rate of change of angular position $\mechanical{\theta}$ just like $\mechanical{\vec{v}}$ is the instantaneous rate of change of position $\mechanical{\vec{x}}$ in the case of linear motion. If the points of a rigid object execute circular motion about the axis of rotation, $d\mechanical{\vec{\theta}}$ is the same for all points, and thus so is $\mechanical{\vec{\omega}}$. Unlike the linear velocity of a point on the disk $\mechanical{\vec{v}}$, which depends on $\mechanical{r}$ (based on Equations (1.4) and (1.5)), $\mechanical{\vec{\omega}}$ is the same for all points on the rotating object regardless of $\mechanical{r}$. Therefore, $\mechanical{\vec{\omega}}$ is the representative velocity for the rotating object, just like $\Delta\mechanical{\theta}$ was its representative displacement!

Finally, we understand that if the instantaneous angular velocity $\mechanical{\vec{\omega}}$ is constant, then it will be equal to the average angular velocity $\mechanical{\vec{\omega}}_{\text{avg}}$. In that case (for magnitudes),

$$
\begin{gathered}
\mechanical{\omega}_{\text{avg}} = \mechanical{\omega} \\
\Rightarrow \frac{\Delta\mechanical{\theta}}{\Delta t} = \frac{d\mechanical{\theta}}{dt},
\end{gathered} \tag{1.13}
$$

and Equation (1.10) will apply for the instantaneous angular velocity also. If the instantaneous angular velocity is not constant, then the frequency and the period will not be constant either. In this scenario, Equation (1.10) can also be used under the condition that we use the instantaneous period and frequency of rotation.

One might ask: Why pick the direction of $\mechanical{\vec{\omega}}$ (or $d\mechanical{\vec{\theta}}$) to be along the axis of rotation? This is another subtlety: The simple rotational motion we are studying here is a motion in two dimensions because any rotating point is executing circles and, thus, is moving in a plane. The orientation of a plane of rotation is described by its normal vector. So, when an object is rotating in a plane, we can use a vector normal to the plane to indicate that motion. In addition, we pick that normal vector to be along the axis of rotation, so as to indicate about which axis the angular position changes and in which direction. In other words, having the angular velocity be perpendicular to the plane of motion along the axis of rotation allows us to both describe the orientation of the plane of motion and also to define the axis around which the angle changes.

There is an additional benefit to representing a planar rotation with a vector that is along the axis of rotation: It allows us to reduce this two-dimensional motion, which would be more difficult to study, into a one-dimensional problem, where quantities are defined along the one-dimensional axis of rotation. This reduction from two dimensions to one allows us to employ all the principles we learned when studying one-dimensional translational motion. In other words, as we saw in Figure 1.2, although $\mechanical{\vec{v}}$ is always changing directions in the plane of the object’s rotation, $\mechanical{\vec{\omega}}$ is always along one axis (i.e., the axis of rotation). We will see this throughout our study of rotational motion – the physical quantities we will use to describe rotational motion in this book, if vectors, will have their direction along the axis of rotation.

```graph3d
bounds: [-1.52, 0.9, 1.52, -0.9]
bounds3d: [[-1.77, 1.77], [-1.77, 1.77], [-1.67, 1.67]]
height: 310
width: 600
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
  el: {slider: {start: 0.50, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"curve3d","def":[[1.51,1.5017,1.477,1.4361,1.3795,1.3077,1.2216,1.1221,1.0104,0.8876,0.755,0.6142,0.4666,0.3139,0.1578,0,-0.1578,-0.3139,-0.4666,-0.6142,-0.755,-0.8876,-1.0104,-1.1221,-1.2216,-1.3077,-1.3795,-1.4361,-1.477,-1.5017,-1.51,-1.5017,-1.477,-1.4361,-1.3795,-1.3077,-1.2216,-1.1221,-1.0104,-0.8876,-0.755,-0.6142,-0.4666,-0.3139,-0.1578,0,0.1578,0.3139,0.4666,0.6142,0.755,0.8876,1.0104,1.1221,1.2216,1.3077,1.3795,1.4361,1.477,1.5017,1.51],[0,0.1578,0.3139,0.4666,0.6142,0.755,0.8876,1.0104,1.1221,1.2216,1.3077,1.3795,1.4361,1.477,1.5017,1.51,1.5017,1.477,1.4361,1.3795,1.3077,1.2216,1.1221,1.0104,0.8876,0.755,0.6142,0.4666,0.3139,0.1578,0,-0.1578,-0.3139,-0.4666,-0.6142,-0.755,-0.8876,-1.0104,-1.1221,-1.2216,-1.3077,-1.3795,-1.4361,-1.477,-1.5017,-1.51,-1.5017,-1.477,-1.4361,-1.3795,-1.3077,-1.2216,-1.1221,-1.0104,-0.8876,-0.755,-0.6142,-0.4666,-0.3139,-0.1578,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#344b61","strokeWidth":1.8,"fixed":true,"highlight":false,"dash":0,"fillColor":"#b8cfdf","fillOpacity":0.38}},
  {"type":"line3d","def":[[0,0,-1.6],[0,0,1.6]],"att":{"fixed":true,"highlight":false,"strokeColor":"#6b8296","strokeWidth":1.6,"lastArrow":false,"dash":2}},
  {"type":"line3d","def":[[0,0,0],[0,0,1.3]],"att":{"fixed":true,"highlight":false,"strokeColor":"#186b99","strokeWidth":3.3,"lastArrow":true,"dash":0}},
  {"type":"line3d","def":[[0,0,0],[0.1935,-1.1437,0]],"att":{"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":2.3,"lastArrow":true,"dash":0}},
  {"type":"line3d","def":[[0.1935,-1.1437,0],[1.071,-0.9952,0]],"att":{"fixed":true,"highlight":false,"strokeColor":"#994521","strokeWidth":3,"lastArrow":true,"dash":0}},
  {"type":"point3d","def":[0,0,0],"att":{"size":4,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#344b61","strokeColor":"#344b61"}},
  {"type":"point3d","def":[0.1935,-1.1437,0],"att":{"size":4,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#994521","strokeColor":"#994521"}},
  {"type":"text3d","def":[[0.1,-0.05,-0.1],"𝑂"],"att":{"fontSize":17,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.12,0.17,1.21],"ω"],"att":{"fontSize":17,"anchorX":"left","strokeColor":"#186b99","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.0113,-0.6333,0.14],"𝑟"],"att":{"fontSize":17,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.211,-0.9052,0.1],"𝑣"],"att":{"fontSize":17,"anchorX":"left","strokeColor":"#994521","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.0235,-1.2737,-0.13],"𝑃"],"att":{"fontSize":17,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false}}
]
```

**Fig. 1.8a** At point P, the linear velocity $\mechanical{\vec v}$ is tangent to the disk and equals the cross product $\mechanical{\vec\omega}\times\mechanical{\vec r}$. Drag to rotate the plot.

![[rotational-motion-fig-1-8b-fingers-along-omega.svg|**Fig. 1.8b** Point the four fingers of your right hand along the first vector, $\mechanical{\vec\omega}$.|310]]

![[rotational-motion-fig-1-8c-fingers-bend-toward-r.svg|**Fig. 1.8c** Bend your fingers toward the second vector, $\mechanical{\vec r}$. Your extended thumb points along the cross product, $\mechanical{\vec v}$.|290]]

### Angular Velocity: Cross Products and the Right-Hand Rule

Let’s now be a little more mathematically rigorous. The fact that we have to use the right-hand rule when finding the direction of $\mechanical{\vec{\omega}}$ implies that there is a cross product of two vectors somewhere. Since we can describe the speed of an object undergoing rotational motion using either the angular velocity or *both* the linear velocity and the radius of the circle this object traverses, it is reasonable to assume there is a conversion between the velocities. Let’s examine a point on a rotating disk, such as point $P$ in Figure 1.8a, and define the position vector $\mechanical{\vec{r}}$ to be the vector that goes from the axis of rotation to the point. Then the magnitude of $\mechanical{\vec{r}}$ is the radius of the circle that this point transcribes. The linear velocity of the point is related to the angular velocity by:

$$
\mechanical{\vec{v}} = \mechanical{\vec{\omega}} \times \mechanical{\vec{r}}. \tag{1.14}
$$

Here we have the cross product of the two vectors $\mechanical{\vec{\omega}}$ and $\mechanical{\vec{r}}$. To find the direction of the resulting vector $\mechanical{\vec{v}}$, we use the version of the right-hand rule where we place the four fingers of our right hand in the direction of the first vector in the cross product ($\mechanical{\vec{\omega}}$) (Figure 1.8b) in an orientation so that when we bend our fingers to align them with the second vector in the cross product ($\mechanical{\vec{r}}$), our extended thumb points in the direction of the linear velocity $\mechanical{\vec{v}}$ (Figure 1.8c). Because $\mechanical{\vec{v}}$ is the result of a cross product, $\mechanical{\vec{v}}$ is perpendicular to both $\mechanical{\vec{\omega}}$ and $\mechanical{\vec{r}}$ individually, as well as to the plane formed by $\mechanical{\vec{\omega}}$ and $\mechanical{\vec{r}}$.

In addition, we can see that if we substitute the definitions for $\mechanical{\vec{v}} = \frac{d\mechanical{\vec{S}}}{dt}$ and $\mechanical{\vec{\omega}} = \frac{d\mechanical{\vec{\theta}}}{dt}$ in Equation (1.14) and cancel $dt$ from both sides of the equation, we get:

$$
\begin{gathered}
\mechanical{\vec v}=\mechanical{\vec\omega}\times\mechanical{\vec r},\\
\Rightarrow\quad
\frac{d\mechanical{\vec S}}{dt}
=\frac{d\mechanical{\vec\theta}}{dt}\times\mechanical{\vec r},\\
\Rightarrow\quad
d\mechanical{\vec S}=d\mechanical{\vec\theta}\times\mechanical{\vec r}.
\end{gathered}
\tag{1.15}
$$

Here we obtain a cross product and right-hand rule similar to what we saw in Equation (1.14) since $d\mechanical{\vec{S}}$ has the same direction as $\mechanical{\vec{v}}$ and $d\mechanical{\vec{\theta}}$ has the same direction as $\mechanical{\vec{\omega}}$.

Since we are looking at rotations about fixed axes, $\mechanical{\vec{\omega}}$ is perpendicular to $\mechanical{\vec{r}}$, and we see from Equation (1.14) that for the magnitude $\mechanical{v}$, we get:

$$
\mechanical{v} = \mechanical{\omega} \mechanical{r} \sin \mechanical{\phi} = \mechanical{\omega} \mechanical{r} \sin \left( \frac{\pi}{2} \right) = \mechanical{\omega} \mechanical{r}. \tag{1.16}
$$

In a similar way, $d\mechanical{\vec{\theta}}$ is perpendicular to $\mechanical{\vec{r}}$. Then, starting from Equation (1.15), we get for the magnitude $d\mechanical{S}$:

$$
d\mechanical{S} = \mechanical{r} d\mechanical{\theta} \sin \mechanical{\phi} = \mechanical{r} d\mechanical{\theta} \sin \left( \frac{\pi}{2} \right) = \mechanical{r} d\mechanical{\theta}. \tag{1.17}
$$

Lastly, it is worth noting that Equation (1.16) can also be obtained by combining the relations $\mechanical{v} = \frac{2\pi \mechanical{r}}{\signal{T}}$ and $\mechanical{\omega} = \frac{2\pi}{\signal{T}}$. Now, let’s do an example that will help us clarify some of these definitions.

**Example 1: Orbital rotational motion with constant speed.** A small object is moving clockwise (as seen from above) around a circle of radius $\mechanical{r} = 20\,\unit{m}$ with constant speed. The object has traveled around the circle 100 times within time $\Delta t = 20\,\unit{s}$. Find (a) the frequency and the period of the object’s motion and (b) the angular velocity of the motion. (c) Draw a diagram showing the object’s angular and linear velocities for an arbitrary position of the object along the circle.

```graph3d
bounds: [-1.52, 0.9, 1.52, -0.9]
bounds3d: [[-1.77, 1.77], [-1.77, 1.77], [-1.67, 1.67]]
height: 310
width: 600
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
  el: {slider: {start: 0.50, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"curve3d","def":[[1.51,1.5017,1.477,1.4361,1.3795,1.3077,1.2216,1.1221,1.0104,0.8876,0.755,0.6142,0.4666,0.3139,0.1578,0,-0.1578,-0.3139,-0.4666,-0.6142,-0.755,-0.8876,-1.0104,-1.1221,-1.2216,-1.3077,-1.3795,-1.4361,-1.477,-1.5017,-1.51,-1.5017,-1.477,-1.4361,-1.3795,-1.3077,-1.2216,-1.1221,-1.0104,-0.8876,-0.755,-0.6142,-0.4666,-0.3139,-0.1578,0,0.1578,0.3139,0.4666,0.6142,0.755,0.8876,1.0104,1.1221,1.2216,1.3077,1.3795,1.4361,1.477,1.5017,1.51],[0,0.1578,0.3139,0.4666,0.6142,0.755,0.8876,1.0104,1.1221,1.2216,1.3077,1.3795,1.4361,1.477,1.5017,1.51,1.5017,1.477,1.4361,1.3795,1.3077,1.2216,1.1221,1.0104,0.8876,0.755,0.6142,0.4666,0.3139,0.1578,0,-0.1578,-0.3139,-0.4666,-0.6142,-0.755,-0.8876,-1.0104,-1.1221,-1.2216,-1.3077,-1.3795,-1.4361,-1.477,-1.5017,-1.51,-1.5017,-1.477,-1.4361,-1.3795,-1.3077,-1.2216,-1.1221,-1.0104,-0.8876,-0.755,-0.6142,-0.4666,-0.3139,-0.1578,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.8,"fixed":true,"highlight":false,"dash":2}},
  {"type":"line3d","def":[[0,0,-1.6],[0,0,1.6]],"att":{"fixed":true,"highlight":false,"strokeColor":"#6b8296","strokeWidth":1.6,"lastArrow":false,"dash":2}},
  {"type":"line3d","def":[[0,0,0],[0,0,-1.3]],"att":{"fixed":true,"highlight":false,"strokeColor":"#186b99","strokeWidth":3.3,"lastArrow":true,"dash":0}},
  {"type":"line3d","def":[[0,0,0],[-1.1726,0.9513,0]],"att":{"fixed":true,"highlight":false,"strokeColor":"#344b61","strokeWidth":2.3,"lastArrow":true,"dash":0}},
  {"type":"line3d","def":[[-1.1726,0.9513,0],[-0.6119,1.6424,0]],"att":{"fixed":true,"highlight":false,"strokeColor":"#994521","strokeWidth":3,"lastArrow":true,"dash":0}},
  {"type":"point3d","def":[0,0,0],"att":{"size":4,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#344b61","strokeColor":"#344b61"}},
  {"type":"point3d","def":[-1.1726,0.9513,0],"att":{"size":4,"fixed":true,"highlight":false,"withLabel":false,"fillColor":"#994521","strokeColor":"#994521"}},
  {"type":"text3d","def":[[0.1,-0.05,-0.1],"𝑂"],"att":{"fontSize":17,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.12,0.17,-1.21],"ω"],"att":{"fontSize":17,"anchorX":"left","strokeColor":"#186b99","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.708,0.4352,0.14],"𝑟"],"att":{"fontSize":17,"anchorX":"left","strokeColor":"#344b61","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.4719,1.7324,0.1],"𝑣"],"att":{"fontSize":17,"anchorX":"left","strokeColor":"#994521","fixed":true,"highlight":false}}
]
```

**Fig. 1.9** Viewed from above, the particle moves clockwise. Its angular velocity $\mechanical{\vec\omega}$ points down along the rotation axis. At the particle, the linear velocity $\mechanical{\vec v}=\mechanical{\vec\omega}\times\mechanical{\vec r}$ is tangent to the orbit. Drag to rotate the plot.

(a) Based on the definitions for frequency (Equation (1.1)) and period (Equation (1.2)) we have:

$$
\signal{f} = \frac{N}{\Delta t} = \frac{100 \unit{rev}}{20 \unit{s}} = 5.0 \unit{Hz} \tag{1.18}
$$

and

$$
\signal{T} = \frac{1}{\signal{f}} = \frac{1}{5.0 \unit{s}^{-1}} = 0.2 \unit{s}. \tag{1.19}
$$

(b) Since we know from Equation (1.10) that $\mechanical{\omega} = 2\pi \signal{f}$, then

$$
\mechanical{\omega} = 2\pi \signal{f} = 2\pi \unit{rad} \cdot 5 \unit{s}^{-1} = 10\pi \unit{rad/s}. \tag{1.20}
$$

(c) The diagram is shown in Figure 1.9. The axis of rotation passes through the center of the circle that the object traverses and is perpendicular to the plane of its motion. We must use the right-hand rule to find the direction of $\mechanical{\vec{\omega}}$. First, we grasp the axis of rotation with our right hand. Since the object is moving clockwise around the circle, we curl the four fingers of our right hand clockwise along the trajectory of the object in the plane of the circle. Now, our extended thumb points downward, which therefore indicates that the direction of $\mechanical{\vec{\omega}}$ is downward along the axis of rotation. The direction of $\mechanical{\vec{v}}$ can be found by using the cross product in Equation (1.14) or the fact that the linear velocity vector is tangent to the trajectory of the circular motion of the object pointing in the direction of the motion.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\phi}$ | $\unit{rad}$ | Angle | Angle between the indicated directions. |
| $\mechanical{\theta}$, $d\mechanical{\vec{\theta}}$ | $\unit{rad}$ | Angular position, infinitesimal rotation | Angle measured from the reference direction; only the infinitesimal rotation $d\mechanical{\vec{\theta}}$ is a vector. |
| $\mechanical{\vec{\omega}}$ | $\unit{rad\,s^{-1}}$ | Angular velocity or speed | Rate of rotation about the indicated axis. |
| $\mechanical{S}$, $d\mechanical{\vec{S}}$ | $\unit{m}$ | Arc length | Distance measured along the circular path; $d\mechanical{\vec{S}}$ is the infinitesimal displacement along the path. |
| $\signal{f}$ | $\unit{Hz}$ | Frequency | Number of revolutions per second. |
| $\mechanical{\vec{v}}$ | $\unit{m\,s^{-1}}$ | Linear velocity or speed | Velocity or speed of the indicated point. |
| $\signal{T}$ | $\unit{s}$ | Period | Time for one revolution. |
| $\mechanical{\vec{x}}$ | $\unit{m}$ | Position coordinate | Position along the indicated axis. |
| $\mechanical{\vec{r}}$ | $\unit{m}$ | Radius or position | Distance or position relative to the reference point or axis. |
| $N$ | 1 | Number of revolutions | The count of completed turns. |
| $t,\Delta t$ | $\unit{s}$ | Time and time interval | The instant and duration of the motion. |
