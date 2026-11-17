---
title: "5.7 Conservation of Angular Momentum"
---

> [!TLDR]
> Angular momentum about an axis stays constant when the net external torque about that axis is zero.

The theorem of Conservation of Momentum (COM) was one of the foundational principles that we first derived in our study of linear motion. Just as we used the most general form of Newton's Second Law to derive this theorem, it is reasonable to expect that we could use the most general form of Newton's Second Law for the rotational motion to derive an analogous principle for angular momentum.

## 5.7.1 The Momentum-Impulse Theorem and Conservation of Momentum for Translational Motion

The internal forces in a system cancel in pairs by Newton’s third law, so its total linear momentum $\mechanical{\vec p}_{\mathrm{tot}}$ obeys

$$
\sum\mechanical{\vec F}_{\mathrm{ext}}=\frac{d\mechanical{\vec p}_{\mathrm{tot}}}{dt}. \tag{5.29}
$$

Integrate from the initial time $t_i$ to the final time $t_f$.

$$
\int_{t_i}^{t_f}\sum\mechanical{\vec F}_{\mathrm{ext}}\,dt
=\int_{\mechanical{\vec p}_{\mathrm{tot},i}}^{\mechanical{\vec p}_{\mathrm{tot},f}}d\mechanical{\vec p}_{\mathrm{tot}}. \tag{5.30}
$$

The integral over time defines the net external impulse.

$$
\mechanical{\vec{\mathcal I}}_{\mathrm{ext}}
\coloneqq\int_{t_i}^{t_f}\sum\mechanical{\vec F}_{\mathrm{ext}}\,dt. \tag{5.31}
$$

It points in the direction of the time-averaged net force. Evaluating the momentum integral gives

$$
\mechanical{\vec{\mathcal I}}_{\mathrm{ext}}
=\mechanical{\vec p}_{\mathrm{tot},f}-\mechanical{\vec p}_{\mathrm{tot},i}
=\Delta\mechanical{\vec p}_{\mathrm{tot}}. \tag{5.32}
$$

Equivalently,

$$
\mechanical{\vec p}_{\mathrm{tot},i}+\mechanical{\vec{\mathcal I}}_{\mathrm{ext}}
=\mechanical{\vec p}_{\mathrm{tot},f}. \tag{5.33}
$$

This is the momentum–impulse theorem. It states that the final total momentum is the vector sum of the initial momentum and external impulse. When the impulse is zero or negligible, the total momentum has the same magnitude and direction at the two instants.

$$
\mechanical{\vec p}_{\mathrm{tot},i}=\mechanical{\vec p}_{\mathrm{tot},f}. \tag{5.34}
$$

The theorem applies even if individual objects in the system gain or lose mass, as long as the total momentum includes the transferred material. A description of an open subsystem must account for the momentum carried by that material.

## 5.7.2 The Angular Momentum-Impulse Theorem and Conservation of Angular Momentum

Start with the angular momentum law for a system about a common fixed origin in an inertial frame. With internal torques canceling as in Section 5.4,

$$
\sum\mechanical{\vec\tau}_{\mathrm{ext}}
=\frac{d\mechanical{\vec L}_{\mathrm{tot}}}{dt}. \tag{5.35}
$$

Integrate between the same two times.

$$
\int_{t_i}^{t_f}\sum\mechanical{\vec\tau}_{\mathrm{ext}}\,dt
=\int_{\mechanical{\vec L}_{\mathrm{tot},i}}^{\mechanical{\vec L}_{\mathrm{tot},f}}d\mechanical{\vec L}_{\mathrm{tot}}. \tag{5.36}
$$

The left-hand side defines the net external angular impulse.

$$
\mechanical{\vec{\mathcal I}}_{\mathrm{ext},r}
\coloneqq\int_{t_i}^{t_f}\sum\mechanical{\vec\tau}_{\mathrm{ext}}\,dt. \tag{5.37}
$$

It points in the direction of the time-averaged net torque. Equation (5.36) becomes

$$
\mechanical{\vec{\mathcal I}}_{\mathrm{ext},r}
=\mechanical{\vec L}_{\mathrm{tot},f}-\mechanical{\vec L}_{\mathrm{tot},i}
=\Delta\mechanical{\vec L}_{\mathrm{tot}}. \tag{5.38}
$$

The angular momentum–impulse theorem states

$$
\mechanical{\vec L}_{\mathrm{tot},i}+\mechanical{\vec{\mathcal I}}_{\mathrm{ext},r}
=\mechanical{\vec L}_{\mathrm{tot},f}. \tag{5.39}
$$

When the external angular impulse is zero or negligible, the total angular momentum has the same magnitude and direction at the two instants.

$$
\mechanical{\vec L}_{\mathrm{tot},i}=\mechanical{\vec L}_{\mathrm{tot},f}. \tag{5.40}
$$

These vector relations apply even when the moment of inertia changes. They also apply component by component. The examples below use the component along the rotation axis when only the external torque about that axis is known to vanish.

**Example 3. Spinning ice skater.** Explain why a skater spins faster after pulling their arms in. The same idea applies to a diver pulling into a tuck.

The motion redistributes mass about the rotation axis and changes the moment of inertia. For the skater, assume the external torque about the spin axis is negligible. For a diver in flight, gravity acts through the center of mass in a uniform gravitational field. Apply conservation of angular momentum about the spin axis.

$$
\begin{aligned}
\mechanical L_{z,i}&=\mechanical L_{z,f},\\
\mechanical I_{z,i}\mechanical\omega_i&=\mechanical I_{z,f}\mechanical\omega_f,\\
\mechanical\omega_f&=\frac{\mechanical I_{z,i}}{\mechanical I_{z,f}}\mechanical\omega_i.
\end{aligned} \tag{5.41}
$$

Pulling the arms closer to the axis reduces the moment of inertia, so the skater must spin faster to preserve the axial angular momentum.

**Example 4. A tethered mass.** A mass $\mechanical m$ moves on a smooth horizontal surface in a circle of radius $\mechanical R_1$ with tangent velocity $\mechanical{\vec v}_1$. It is tied to a massless, inelastic string passing through a small hole at the circle’s center $O$. A downward force $\mechanical{\vec F}_1$ pulls at the string’s end $A$. Increasing the force to $\mechanical F_2>\mechanical F_1$ pulls the string downward, and the mass eventually moves in a circle of smaller radius $\mechanical R_2$. Find the new speed $\mechanical v_2$.

```graph3d
bounds: [-1.63, 0.96, 1.63, -0.96]
bounds3d: [[-2.40,2.50],[-1.38,1.38],[-1.38,1.31]]
height: 390
width: 790
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
  az: {slider: {start: 2.80, visible: false}, pointer: {enabled: true}}
  el: {slider: {start: 0.70, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"curve3d","def":[[-0.34,-0.34443,-0.357678,-0.379615,-0.410031,-0.448632,-0.495048,-0.54883,-0.609462,-0.676358,-0.748875,-0.826315,-0.907931,-0.992938,-1.080517,-1.169824,-1.26,-1.350176,-1.439483,-1.527062,-1.612069,-1.693685,-1.771125,-1.843642,-1.910538,-1.97117,-2.024952,-2.071368,-2.109969,-2.140385,-2.162322,-2.17557,-2.18,-2.17557,-2.162322,-2.140385,-2.109969,-2.071368,-2.024952,-1.97117,-1.910538,-1.843642,-1.771125,-1.693685,-1.612069,-1.527062,-1.439483,-1.350176,-1.26,-1.169824,-1.080517,-0.992938,-0.907931,-0.826315,-0.748875,-0.676358,-0.609462,-0.54883,-0.495048,-0.448632,-0.410031,-0.379615,-0.357678,-0.34443,-0.34],[0.0,0.090176,0.179483,0.267062,0.352069,0.433685,0.511125,0.583642,0.650538,0.71117,0.764952,0.811368,0.849969,0.880385,0.902322,0.91557,0.92,0.91557,0.902322,0.880385,0.849969,0.811368,0.764952,0.71117,0.650538,0.583642,0.511125,0.433685,0.352069,0.267062,0.179483,0.090176,0.0,-0.090176,-0.179483,-0.267062,-0.352069,-0.433685,-0.511125,-0.583642,-0.650538,-0.71117,-0.764952,-0.811368,-0.849969,-0.880385,-0.902322,-0.91557,-0.92,-0.91557,-0.902322,-0.880385,-0.849969,-0.811368,-0.764952,-0.71117,-0.650538,-0.583642,-0.511125,-0.433685,-0.352069,-0.267062,-0.179483,-0.090176,-0.0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.45,"dash":0,"fixed":true,"highlight":false,"fillColor":"#b8cfdf","fillOpacity":0.35}},
  {"type":"line3d","def":[[-1.26,0,-1.27],[-1.26,0,1.11]],"att":{"strokeColor":"#6b8296","strokeWidth":1.25,"lastArrow":true,"dash":2,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.19,0,1.12],"+z"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-2.15,0,0.82],"(a)"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"point3d","def":[-1.26,0,0],"att":{"size":2.8,"strokeColor":"#344b61","fillColor":"#344b61","withLabel":false,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.41,-0.06,-0.13],"𝑂"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"curve3d","def":[[-0.69,-0.692745,-0.700952,-0.714544,-0.733389,-0.757305,-0.786062,-0.819384,-0.856949,-0.898396,-0.943325,-0.991304,-1.04187,-1.094538,-1.148799,-1.20413,-1.26,-1.31587,-1.371201,-1.425462,-1.47813,-1.528696,-1.576675,-1.621604,-1.663051,-1.700616,-1.733938,-1.762695,-1.786611,-1.805456,-1.819048,-1.827255,-1.83,-1.827255,-1.819048,-1.805456,-1.786611,-1.762695,-1.733938,-1.700616,-1.663051,-1.621604,-1.576675,-1.528696,-1.47813,-1.425462,-1.371201,-1.31587,-1.26,-1.20413,-1.148799,-1.094538,-1.04187,-0.991304,-0.943325,-0.898396,-0.856949,-0.819384,-0.786062,-0.757305,-0.733389,-0.714544,-0.700952,-0.692745,-0.69],[0.0,0.05587,0.111201,0.165462,0.21813,0.268696,0.316675,0.361604,0.403051,0.440616,0.473938,0.502695,0.526611,0.545456,0.559048,0.567255,0.57,0.567255,0.559048,0.545456,0.526611,0.502695,0.473938,0.440616,0.403051,0.361604,0.316675,0.268696,0.21813,0.165462,0.111201,0.05587,0.0,-0.05587,-0.111201,-0.165462,-0.21813,-0.268696,-0.316675,-0.361604,-0.403051,-0.440616,-0.473938,-0.502695,-0.526611,-0.545456,-0.559048,-0.567255,-0.57,-0.567255,-0.559048,-0.545456,-0.526611,-0.502695,-0.473938,-0.440616,-0.403051,-0.361604,-0.316675,-0.268696,-0.21813,-0.165462,-0.111201,-0.05587,-0.0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.45,"dash":2,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.26,0,0],[-0.6900000000000001,0,0]],"att":{"strokeColor":"#344b61","strokeWidth":1.9,"lastArrow":false,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.9921,0.02,0.105],"R₁"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"point3d","def":[-0.6900000000000001,0,0],"att":{"size":4.7,"strokeColor":"#344b61","fillColor":"#344b61","withLabel":false,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-0.6900000000000001,0,0],[-0.6900000000000001,0.47,0]],"att":{"strokeColor":"#186b99","strokeWidth":2.6,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.5900000000000001,0.53,0.135],"v₁"],"att":{"strokeColor":"#186b99","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-0.6900000000000001,0,0],[-1.03,0,0]],"att":{"strokeColor":"#2b7354","strokeWidth":2.3,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.93,-0.07,-0.12],"Fₜ₁"],"att":{"strokeColor":"#2b7354","fontSize":15,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-0.6900000000000001,0,0],[-0.6900000000000001,0,0.45]],"att":{"strokeColor":"#186b99","strokeWidth":2.2,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.8,-0.16,0.48],"𝑛"],"att":{"strokeColor":"#186b99","fontSize":15,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-0.6900000000000001,0,0],[-0.6900000000000001,0,-0.4]],"att":{"strokeColor":"#994521","strokeWidth":2.2,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.56,0,-0.37],"Weight"],"att":{"strokeColor":"#994521","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.26,0,0],[-1.26,0,0.48]],"att":{"strokeColor":"#186b99","strokeWidth":2.6,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.11,0,0.48],"ω₁"],"att":{"strokeColor":"#186b99","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.26,0,0],[-1.26,0,-0.5]],"att":{"strokeColor":"#344b61","strokeWidth":1.75,"lastArrow":false,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.42,0,-0.5],"𝐴"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.26,0,-0.5],[-1.26,0,-0.81]],"att":{"strokeColor":"#994521","strokeWidth":2.7,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.15,0,-0.79],"F₁"],"att":{"strokeColor":"#994521","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"curve3d","def":[[2.18,2.17557,2.162322,2.140385,2.109969,2.071368,2.024952,1.97117,1.910538,1.843642,1.771125,1.693685,1.612069,1.527062,1.439483,1.350176,1.26,1.169824,1.080517,0.992938,0.907931,0.826315,0.748875,0.676358,0.609462,0.54883,0.495048,0.448632,0.410031,0.379615,0.357678,0.34443,0.34,0.34443,0.357678,0.379615,0.410031,0.448632,0.495048,0.54883,0.609462,0.676358,0.748875,0.826315,0.907931,0.992938,1.080517,1.169824,1.26,1.350176,1.439483,1.527062,1.612069,1.693685,1.771125,1.843642,1.910538,1.97117,2.024952,2.071368,2.109969,2.140385,2.162322,2.17557,2.18],[0.0,0.090176,0.179483,0.267062,0.352069,0.433685,0.511125,0.583642,0.650538,0.71117,0.764952,0.811368,0.849969,0.880385,0.902322,0.91557,0.92,0.91557,0.902322,0.880385,0.849969,0.811368,0.764952,0.71117,0.650538,0.583642,0.511125,0.433685,0.352069,0.267062,0.179483,0.090176,0.0,-0.090176,-0.179483,-0.267062,-0.352069,-0.433685,-0.511125,-0.583642,-0.650538,-0.71117,-0.764952,-0.811368,-0.849969,-0.880385,-0.902322,-0.91557,-0.92,-0.91557,-0.902322,-0.880385,-0.849969,-0.811368,-0.764952,-0.71117,-0.650538,-0.583642,-0.511125,-0.433685,-0.352069,-0.267062,-0.179483,-0.090176,-0.0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.45,"dash":0,"fixed":true,"highlight":false,"fillColor":"#b8cfdf","fillOpacity":0.35}},
  {"type":"line3d","def":[[1.26,0,-1.27],[1.26,0,1.11]],"att":{"strokeColor":"#6b8296","strokeWidth":1.25,"lastArrow":true,"dash":2,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.33,0,1.12],"+z"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.37,0,0.82],"(b)"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"point3d","def":[1.26,0,0],"att":{"size":2.8,"strokeColor":"#344b61","fillColor":"#344b61","withLabel":false,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.11,-0.06,-0.13],"𝑂"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"curve3d","def":[[1.66,1.658074,1.652314,1.642776,1.629552,1.612769,1.592588,1.569204,1.542843,1.513757,1.482228,1.448559,1.413073,1.376114,1.338036,1.299207,1.26,1.220793,1.181964,1.143886,1.106927,1.071441,1.037772,1.006243,0.977157,0.950796,0.927412,0.907231,0.890448,0.877224,0.867686,0.861926,0.86,0.861926,0.867686,0.877224,0.890448,0.907231,0.927412,0.950796,0.977157,1.006243,1.037772,1.071441,1.106927,1.143886,1.181964,1.220793,1.26,1.299207,1.338036,1.376114,1.413073,1.448559,1.482228,1.513757,1.542843,1.569204,1.592588,1.612769,1.629552,1.642776,1.652314,1.658074,1.66],[0.0,0.039207,0.078036,0.116114,0.153073,0.188559,0.222228,0.253757,0.282843,0.309204,0.332588,0.352769,0.369552,0.382776,0.392314,0.398074,0.4,0.398074,0.392314,0.382776,0.369552,0.352769,0.332588,0.309204,0.282843,0.253757,0.222228,0.188559,0.153073,0.116114,0.078036,0.039207,0.0,-0.039207,-0.078036,-0.116114,-0.153073,-0.188559,-0.222228,-0.253757,-0.282843,-0.309204,-0.332588,-0.352769,-0.369552,-0.382776,-0.392314,-0.398074,-0.4,-0.398074,-0.392314,-0.382776,-0.369552,-0.352769,-0.332588,-0.309204,-0.282843,-0.253757,-0.222228,-0.188559,-0.153073,-0.116114,-0.078036,-0.039207,-0.0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.45,"dash":2,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1.26,0,0],[1.6600000000000001,0,0]],"att":{"strokeColor":"#344b61","strokeWidth":1.9,"lastArrow":false,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.448,0.02,0.105],"R₂"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"point3d","def":[1.6600000000000001,0,0],"att":{"size":4.7,"strokeColor":"#344b61","fillColor":"#344b61","withLabel":false,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1.6600000000000001,0,0],[1.6600000000000001,0.67,0]],"att":{"strokeColor":"#186b99","strokeWidth":2.6,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.7600000000000002,0.73,0.135],"v₂"],"att":{"strokeColor":"#186b99","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1.6600000000000001,0,0],[1.32,0,0]],"att":{"strokeColor":"#2b7354","strokeWidth":2.3,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.4200000000000002,-0.07,-0.12],"Fₜ₂"],"att":{"strokeColor":"#2b7354","fontSize":15,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1.6600000000000001,0,0],[1.6600000000000001,0,0.45]],"att":{"strokeColor":"#186b99","strokeWidth":2.2,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.55,-0.16,0.48],"𝑛"],"att":{"strokeColor":"#186b99","fontSize":15,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1.6600000000000001,0,0],[1.6600000000000001,0,-0.4]],"att":{"strokeColor":"#994521","strokeWidth":2.2,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.79,0,-0.37],"Weight"],"att":{"strokeColor":"#994521","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1.26,0,0],[1.26,0,0.97]],"att":{"strokeColor":"#186b99","strokeWidth":2.6,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.41,0,0.97],"ω₂"],"att":{"strokeColor":"#186b99","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1.26,0,0],[1.26,0,-0.82]],"att":{"strokeColor":"#344b61","strokeWidth":1.75,"lastArrow":false,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.1,0,-0.82],"𝐴"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1.26,0,-0.82],[1.26,0,-1.28]],"att":{"strokeColor":"#994521","strokeWidth":2.7,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.37,0,-1.1099999999999999],"F₂"],"att":{"strokeColor":"#994521","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}}
]
```

**Fig. 5.6** (a) With pull $\mechanical F_1$, the mass moves on a circle of radius $\mechanical R_1$. Its weight and the normal force are vertical, while string tension acts toward the hole. (b) The larger pull $\mechanical F_2$ produces a smaller circular radius $\mechanical R_2$. Drag to rotate the plot.

Gravity and the normal force have no torque about $z$ because they act parallel to it. The tension points toward the hole and also has zero torque about $z$, even while the radius changes. The tension equals the applied pull in magnitude for the massless string through a smooth hole. Thus the axial angular momentum of the mass is conserved.

**First method.** In the initial and final circular states, use $\mechanical L_z=\mechanical R\mechanical m\mechanical v$ with the same positive direction for both states.

$$
\begin{aligned}
\mechanical L_{z,1}&=\mechanical L_{z,2},\\
\mechanical R_1\mechanical m\mechanical v_1&=\mechanical R_2\mechanical m\mechanical v_2,\\
\mechanical v_2&=\frac{\mechanical v_1\mechanical R_1}{\mechanical R_2}.
\end{aligned} \tag{5.42}
$$

**Second method.** Use $\mechanical L_z=\mechanical I_z\mechanical\omega$ and $\mechanical I_z=\mechanical m\mechanical R^2$ for the point mass.

$$
\mechanical m\mechanical R_1^2\mechanical\omega_1=\mechanical m\mechanical R_2^2\mechanical\omega_2. \tag{5.43}
$$

Substitution of $\mechanical v=\mechanical\omega\mechanical R$ gives the same result.

$$
\mechanical m\mechanical R_1\mechanical v_1=\mechanical m\mechanical R_2\mechanical v_2
\quad\Rightarrow\quad
\mechanical v_2=\frac{\mechanical v_1\mechanical R_1}{\mechanical R_2}. \tag{5.44}
$$

**Example 5. Rotating disk and bubble gum.** A horizontal disk turns without friction about the vertical axis through its center $O$. Its initial angular velocity is $\mechanical{\vec\omega}_i$ and its moment of inertia about $z$ is $\mechanical I_d$. A small piece of gum of mass $\mechanical m$ drops vertically from rest and sticks to the disk at distance $\mechanical r$ from the axis. Find the new angular velocity.

```graph3d
bounds: [-1.63, 0.96, 1.63, -0.96]
bounds3d: [[-2.40,2.50],[-1.38,1.38],[-1.38,1.31]]
height: 390
width: 790
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
  az: {slider: {start: 2.80, visible: false}, pointer: {enabled: true}}
  el: {slider: {start: 0.70, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"curve3d","def":[[-0.34,-0.34443,-0.357678,-0.379615,-0.410031,-0.448632,-0.495048,-0.54883,-0.609462,-0.676358,-0.748875,-0.826315,-0.907931,-0.992938,-1.080517,-1.169824,-1.26,-1.350176,-1.439483,-1.527062,-1.612069,-1.693685,-1.771125,-1.843642,-1.910538,-1.97117,-2.024952,-2.071368,-2.109969,-2.140385,-2.162322,-2.17557,-2.18,-2.17557,-2.162322,-2.140385,-2.109969,-2.071368,-2.024952,-1.97117,-1.910538,-1.843642,-1.771125,-1.693685,-1.612069,-1.527062,-1.439483,-1.350176,-1.26,-1.169824,-1.080517,-0.992938,-0.907931,-0.826315,-0.748875,-0.676358,-0.609462,-0.54883,-0.495048,-0.448632,-0.410031,-0.379615,-0.357678,-0.34443,-0.34],[0.0,0.090176,0.179483,0.267062,0.352069,0.433685,0.511125,0.583642,0.650538,0.71117,0.764952,0.811368,0.849969,0.880385,0.902322,0.91557,0.92,0.91557,0.902322,0.880385,0.849969,0.811368,0.764952,0.71117,0.650538,0.583642,0.511125,0.433685,0.352069,0.267062,0.179483,0.090176,0.0,-0.090176,-0.179483,-0.267062,-0.352069,-0.433685,-0.511125,-0.583642,-0.650538,-0.71117,-0.764952,-0.811368,-0.849969,-0.880385,-0.902322,-0.91557,-0.92,-0.91557,-0.902322,-0.880385,-0.849969,-0.811368,-0.764952,-0.71117,-0.650538,-0.583642,-0.511125,-0.433685,-0.352069,-0.267062,-0.179483,-0.090176,-0.0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.45,"dash":0,"fixed":true,"highlight":false,"fillColor":"#b8cfdf","fillOpacity":0.35}},
  {"type":"line3d","def":[[-1.26,0,-1.27],[-1.26,0,1.11]],"att":{"strokeColor":"#6b8296","strokeWidth":1.25,"lastArrow":true,"dash":2,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.19,0,1.12],"+z"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-2.15,0,0.82],"(a)"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"point3d","def":[-1.26,0,0],"att":{"size":2.8,"strokeColor":"#344b61","fillColor":"#344b61","withLabel":false,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.41,-0.06,-0.13],"𝑂"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-0.75,0,0.64],[-0.75,0,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.2,"lastArrow":false,"dash":2,"fixed":true,"highlight":false}},
  {"type":"point3d","def":[-0.75,0,0.64],"att":{"size":4.8,"strokeColor":"#994521","fillColor":"#994521","withLabel":false,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.63,0,0.71],"𝑚"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-0.75,0,0.64],[-0.75,0,0.3]],"att":{"strokeColor":"#994521","strokeWidth":2.45,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.61,0,0.32],"Gum weight"],"att":{"strokeColor":"#994521","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.26,0,0],[-1.26,0,-0.5]],"att":{"strokeColor":"#994521","strokeWidth":2.4,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.35,0,-0.51],"Disk weight"],"att":{"strokeColor":"#994521","fontSize":15,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.26,0,0],[-1.26,0,0.4]],"att":{"strokeColor":"#186b99","strokeWidth":2.6,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.36,0,0.42],"Table normal"],"att":{"strokeColor":"#186b99","fontSize":15,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.26,0,0.43],[-1.26,0,0.95]],"att":{"strokeColor":"#186b99","strokeWidth":2.6,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.16,0,0.95],"ω initial"],"att":{"strokeColor":"#186b99","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"curve3d","def":[[2.18,2.17557,2.162322,2.140385,2.109969,2.071368,2.024952,1.97117,1.910538,1.843642,1.771125,1.693685,1.612069,1.527062,1.439483,1.350176,1.26,1.169824,1.080517,0.992938,0.907931,0.826315,0.748875,0.676358,0.609462,0.54883,0.495048,0.448632,0.410031,0.379615,0.357678,0.34443,0.34,0.34443,0.357678,0.379615,0.410031,0.448632,0.495048,0.54883,0.609462,0.676358,0.748875,0.826315,0.907931,0.992938,1.080517,1.169824,1.26,1.350176,1.439483,1.527062,1.612069,1.693685,1.771125,1.843642,1.910538,1.97117,2.024952,2.071368,2.109969,2.140385,2.162322,2.17557,2.18],[0.0,0.090176,0.179483,0.267062,0.352069,0.433685,0.511125,0.583642,0.650538,0.71117,0.764952,0.811368,0.849969,0.880385,0.902322,0.91557,0.92,0.91557,0.902322,0.880385,0.849969,0.811368,0.764952,0.71117,0.650538,0.583642,0.511125,0.433685,0.352069,0.267062,0.179483,0.090176,0.0,-0.090176,-0.179483,-0.267062,-0.352069,-0.433685,-0.511125,-0.583642,-0.650538,-0.71117,-0.764952,-0.811368,-0.849969,-0.880385,-0.902322,-0.91557,-0.92,-0.91557,-0.902322,-0.880385,-0.849969,-0.811368,-0.764952,-0.71117,-0.650538,-0.583642,-0.511125,-0.433685,-0.352069,-0.267062,-0.179483,-0.090176,-0.0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.45,"dash":0,"fixed":true,"highlight":false,"fillColor":"#b8cfdf","fillOpacity":0.35}},
  {"type":"line3d","def":[[1.26,0,-1.27],[1.26,0,1.11]],"att":{"strokeColor":"#6b8296","strokeWidth":1.25,"lastArrow":true,"dash":2,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.33,0,1.12],"+z"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.37,0,0.82],"(b)"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"point3d","def":[1.26,0,0],"att":{"size":2.8,"strokeColor":"#344b61","fillColor":"#344b61","withLabel":false,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.11,-0.06,-0.13],"𝑂"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"curve3d","def":[[1.77,1.767544,1.7602,1.74804,1.731179,1.70978,1.68405,1.654235,1.620624,1.583541,1.543341,1.500412,1.455169,1.408045,1.359496,1.309989,1.26,1.210011,1.160504,1.111955,1.064831,1.019588,0.976659,0.936459,0.899376,0.865765,0.83595,0.81022,0.788821,0.77196,0.7598,0.752456,0.75,0.752456,0.7598,0.77196,0.788821,0.81022,0.83595,0.865765,0.899376,0.936459,0.976659,1.019588,1.064831,1.111955,1.160504,1.210011,1.26,1.309989,1.359496,1.408045,1.455169,1.500412,1.543341,1.583541,1.620624,1.654235,1.68405,1.70978,1.731179,1.74804,1.7602,1.767544,1.77],[0.0,0.049989,0.099496,0.148045,0.195169,0.240412,0.283341,0.323541,0.360624,0.394235,0.42405,0.44978,0.471179,0.48804,0.5002,0.507544,0.51,0.507544,0.5002,0.48804,0.471179,0.44978,0.42405,0.394235,0.360624,0.323541,0.283341,0.240412,0.195169,0.148045,0.099496,0.049989,0.0,-0.049989,-0.099496,-0.148045,-0.195169,-0.240412,-0.283341,-0.323541,-0.360624,-0.394235,-0.42405,-0.44978,-0.471179,-0.48804,-0.5002,-0.507544,-0.51,-0.507544,-0.5002,-0.48804,-0.471179,-0.44978,-0.42405,-0.394235,-0.360624,-0.323541,-0.283341,-0.240412,-0.195169,-0.148045,-0.099496,-0.049989,-0.0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.45,"dash":2,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1.26,0,0],[1.77,0,0]],"att":{"strokeColor":"#344b61","strokeWidth":1.6,"lastArrow":false,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.45,-0.06,0.1],"𝑟"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"point3d","def":[1.77,0,0],"att":{"size":4.8,"strokeColor":"#994521","fillColor":"#994521","withLabel":false,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.8900000000000001,0,0.07],"𝑚"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1.77,0,0],[1.77,0,-0.34]],"att":{"strokeColor":"#994521","strokeWidth":2.45,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.9100000000000001,0,-0.32],"Gum weight"],"att":{"strokeColor":"#994521","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1.26,0,0],[1.26,0,-0.5]],"att":{"strokeColor":"#994521","strokeWidth":2.4,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.17,0,-0.51],"Disk weight"],"att":{"strokeColor":"#994521","fontSize":15,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1.26,0,0],[1.26,0,0.4]],"att":{"strokeColor":"#186b99","strokeWidth":2.6,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.16,0,0.42],"Table normal"],"att":{"strokeColor":"#186b99","fontSize":15,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1.26,0,0.43],[1.26,0,0.7]],"att":{"strokeColor":"#186b99","strokeWidth":2.6,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.36,0,0.7],"ω final"],"att":{"strokeColor":"#186b99","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1.77,0,0],[1.77,0,0.4]],"att":{"strokeColor":"#2b7354","strokeWidth":2.4,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.88,0,0.42],"n on gum"],"att":{"strokeColor":"#2b7354","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1.77,0,0],[1.77,0,-0.22]],"att":{"strokeColor":"#2b7354","strokeWidth":1.4,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.72,-0.16,-0.55],"n on disk"],"att":{"strokeColor":"#2b7354","fontSize":15,"anchorX":"right","fixed":true,"highlight":false}}
]
```

**Fig. 5.7** (a) The gum falls vertically toward the disk. (b) The gum sticks and moves around the rotation axis with the disk. Weight and the normal force from the table contribute no torque about the vertical axis. Drag to rotate the plot.

This collision is perfectly inelastic. Gravity on the disk and gum and the normal force from the table are external. They act parallel to the axis and exert zero torque about $z$. The disk and gum exert contact forces on each other at their common point of contact. These internal torques cancel for the combined system.

$$
\begin{aligned}
\mechanical L_{z,\mathrm{tot},i}&=\mechanical L_{z,\mathrm{tot},f},\\
\mechanical L_{z,d,i}+\underbrace{\mechanical L_{z,m,i}}_0&=\mechanical L_{z,(d+m),f}.
\end{aligned} \tag{5.45}
$$

The gum initially moves parallel to the axis, so its axial angular momentum is zero. The disk initially spins along $+z$, and the final shared rotation has the same sign.

$$
\mechanical I_d\mechanical\omega_i=(\mechanical I_d+\mechanical I_m)\mechanical\omega_f. \tag{5.46}
$$

After sticking, the gum contributes $\mechanical I_m=\mechanical m\mechanical r^2$.

$$
\mechanical\omega_f=\frac{\mechanical I_d\mechanical\omega_i}{\mechanical I_d+\mechanical I_m}
=\frac{\mechanical I_d\mechanical\omega_i}{\mechanical I_d+\mechanical m\mechanical r^2}. \tag{5.47}
$$

The added mass increases the moment of inertia and decreases the angular speed.

### Exercises

(i) For the particle in Example 2, (a) find the angular momentum as a function of time, (b) calculate the net torque at $t=0$, and (c) compare with Example 2 of Chapter 2.

(ii) A uniform pulley of radius $\mechanical R$ and mass $\mechanical M$ turns without friction about a horizontal axle through $O$. A massless, inelastic rope wound around the rim suspends a mass $\mechanical m$. Starting from rest at $t_0=0$, with no slipping, find (a) the acceleration of $\mechanical m$, (b) the rate of change of angular momentum of the pulley–mass system about the axle, (c) its change in angular momentum between $t=t_1$ and $t=2t_1$, and (d) its angular momentum at $t_1$ when the hanging mass has velocity $\mechanical{\vec v}_1$. Use $\mechanical I_O=\tfrac12\mechanical M\mechanical R^2$ and the given gravitational acceleration $\mechanical g$.

![[rotational-motion-fig-5-8.svg|**Fig. 5.8** A mass $\mechanical m$ hangs from a rope wound around the rim of the pulley. The pulley turns about the fixed horizontal axle through $O$.|370]]

(iii) Two disk-shaped bodies $D_1$ and $D_2$, with moments of inertia $\mechanical I_1$ and $\mechanical I_2$, rotate in opposite directions about a shared vertical axis through their centers. Their angular speeds are $\mechanical\omega_1$ and $\mechanical\omega_2$. The disks are slightly separated vertically. Move $D_2$ upward until it touches and sticks to $D_1$. Find the magnitude and direction of the shared angular velocity.

(iv) A carousel of radius $\mechanical R=4.8\,\unit m$ starts at rest and turns without friction about its center. Its moment of inertia is $\mechanical I_{\mathrm{car}}=75\,\unit{kg\,m^2}$. A child of mass $\mechanical m=40\,\unit{kg}$ runs tangentially to the rim at $\mechanical v=5.0\,\unit{m\,s^{-1}}$, jumps onto the rim, and comes to rest relative to the carousel. Find the resulting angular velocity.

(v) A clown of mass $\mechanical m=100\,\unit{kg}$ stands at point $P$ on the rim of a uniform carousel of radius $\mechanical R=20\,\unit m$ and mass $\mechanical M=2000\,\unit{kg}$. The carousel rotates without friction about the perpendicular axis through its center $O$. Both start at rest. The clown runs without slipping around the rim, at tangential speed $\mechanical v=2.0\,\unit{m\,s^{-1}}$ relative to the ground. Find (a) the carousel’s angular momentum, (b) its angular velocity, and (c) the linear velocity of a point on the carousel rim. Use $\mechanical I_{\mathrm{car}}=\tfrac12\mechanical M\mechanical R^2$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\vec p}$ | $\unit{kg\,m\,s^{-1}}$ | Linear momentum | Product of mass and velocity. |
| $\mechanical{\vec L}$ | $\unit{kg\,m^2\,s^{-1}}$ | Angular momentum | Moment of linear momentum about the chosen origin. |
| $\mechanical{\vec{\mathcal I}}_{\mathrm{ext}}$ | $\unit{N\,s}$ | External linear impulse | Integral of net external force over time. |
| $\mechanical{\vec{\mathcal I}}_{\mathrm{ext},r}$ | $\unit{N\,m\,s}$ | External angular impulse | Integral of net external torque over time. |
| $\mechanical{\vec F}$ | $\unit N$ | Force | Force acting on the designated body. |
| $\mechanical{\vec\tau}$ | $\unit{N\,m}$ | Torque | Moment of force about the chosen point or axis. |
| $\mechanical I$ | $\unit{kg\,m^2}$ | Moment of inertia | Rotational inertia about the specified axis. |
| $\mechanical\omega$ | $\unit{rad\,s^{-1}}$ | Angular speed | Magnitude of angular velocity. |
| $\mechanical v$ | $\unit{m\,s^{-1}}$ | Linear speed | Magnitude of velocity. |
| $\mechanical r,\mechanical R$ | $\unit m$ | Radius | Perpendicular distance from the rotation axis. |
| $\mechanical m,\mechanical M$ | $\unit{kg}$ | Mass | Mass of the specified system component. |
| $\mechanical g$ | $\unit{m\,s^{-2}}$ | Gravitational acceleration | Local magnitude of gravity. |
| $t$ | $\unit s$ | Time | Time measured from the chosen reference instant. |
