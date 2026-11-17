---
title: "8.1 Gyroscopic Precession"
---

> [!TLDR]
> A torque perpendicular to the spin angular momentum changes its direction and can produce precession.

The earlier chapters focused on point masses and rigid bodies rotating about fixed axes. This chapter uses those ideas to introduce gyroscopic precession, angular momentum about a point, and rotation matrices.

## A suspended wheel at rest

A rope hangs from the ceiling and is attached at one end of a wheel’s axle, at $O$. Release the wheel from rest with its axle horizontal along $+y$. The tension has no torque about $O$. Gravity acts at a distance $\mechanical r$ from $O$ and initially produces a torque along $-x$.

```graph3d
bounds: [-1.74, 0.61, 1.74, -0.61]
bounds3d: [[-2.28,2.28],[-1.26,1.26],[-1.62,1.65]]
width: 762
height: 420
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
  az: {slider: {start: 2.860796, visible: false}, pointer: {enabled: true}}
  el: {slider: {start: 0.68, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"line3d","def":[[-1.8,0,0],[-1.8,-0.63,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.45,"dash":2,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.8,-0.725,-0.07],"+x"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.8,0,0],[-0.38,0,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.45,"dash":2,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.33,0,0],"+y"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.8,0,0],[-1.8,0,1.33]],"att":{"strokeColor":"#6b8296","strokeWidth":1.45,"dash":2,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.74,0,1.4],"+z"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.8,0,0],[-1.8,0,1.15]],"att":{"strokeColor":"#344b61","strokeWidth":2.05,"dash":0,"lastArrow":false,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.8,0.22,1.15],[-1.8,-0.22,1.15]],"att":{"strokeColor":"#344b61","strokeWidth":2.05,"dash":0,"lastArrow":false,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.8,0,0],[-1.8,0,0.61]],"att":{"strokeColor":"#2b7354","strokeWidth":2.4,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.92,0,0.58],"Fₜ"],"att":{"strokeColor":"#2b7354","fontSize":15,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"point3d","def":[-1.8,0,0],"att":{"strokeColor":"#344b61","fillColor":"#344b61","size":3.8,"withLabel":false,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.89,0,0.03],"𝑂"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.8,0,0],[-0.56,0,0]],"att":{"strokeColor":"#344b61","strokeWidth":2.05,"dash":0,"lastArrow":false,"fixed":true,"highlight":false}},
  {"type":"curve3d","def":[[-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001],[-0.64,-0.6365,-0.626,-0.6087,-0.5847,-0.5543,-0.5178,-0.4756,-0.4282,-0.3762,-0.32,-0.2603,-0.1978,-0.1331,-0.0669,0,0.0669,0.1331,0.1978,0.2603,0.32,0.3762,0.4282,0.4756,0.5178,0.5543,0.5847,0.6087,0.626,0.6365,0.64,0.6365,0.626,0.6087,0.5847,0.5543,0.5178,0.4756,0.4282,0.3762,0.32,0.2603,0.1978,0.1331,0.0669,0,-0.0669,-0.1331,-0.1978,-0.2603,-0.32,-0.3762,-0.4282,-0.4756,-0.5178,-0.5543,-0.5847,-0.6087,-0.626,-0.6365,-0.64],[0,0.0669,0.1331,0.1978,0.2603,0.32,0.3762,0.4282,0.4756,0.5178,0.5543,0.5847,0.6087,0.626,0.6365,0.64,0.6365,0.626,0.6087,0.5847,0.5543,0.5178,0.4756,0.4282,0.3762,0.32,0.2603,0.1978,0.1331,0.0669,0,-0.0669,-0.1331,-0.1978,-0.2603,-0.32,-0.3762,-0.4282,-0.4756,-0.5178,-0.5543,-0.5847,-0.6087,-0.626,-0.6365,-0.64,-0.6365,-0.626,-0.6087,-0.5847,-0.5543,-0.5178,-0.4756,-0.4282,-0.3762,-0.32,-0.2603,-0.1978,-0.1331,-0.0669,0]],"att":{"strokeColor":"#344b61","strokeWidth":1.7,"dash":0,"fillColor":"#a9c5d4","fillOpacity":0.32,"fixed":true,"highlight":false}},
  {"type":"point3d","def":[-1.16,0,0],"att":{"strokeColor":"#344b61","fillColor":"#344b61","size":3.8,"withLabel":false,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.16,0,0],[-1.16,0,-0.59]],"att":{"strokeColor":"#994521","strokeWidth":2.4,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.08,0,-0.57],"Fɡ"],"att":{"strokeColor":"#994521","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.8,0,0],[-1.8,0.63,0]],"att":{"strokeColor":"#2b7354","strokeWidth":2.4,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.9,0.69,0.09],"τɡ"],"att":{"strokeColor":"#2b7354","fontSize":15,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-2.07,0,1.4],"(a)"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.08,0,0.94],"Initial"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.68,0,0],[0.68,-0.63,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.45,"dash":2,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.68,-0.725,-0.07],"+x"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.68,0,0],[2.1,0,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.45,"dash":2,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[2.15,0,0],"+y"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.68,0,0],[0.68,0,1.33]],"att":{"strokeColor":"#6b8296","strokeWidth":1.45,"dash":2,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.74,0,1.4],"+z"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.68,0,0],[0.68,0,1.15]],"att":{"strokeColor":"#344b61","strokeWidth":2.05,"dash":0,"lastArrow":false,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.68,0.22,1.15],[0.68,-0.22,1.15]],"att":{"strokeColor":"#344b61","strokeWidth":2.05,"dash":0,"lastArrow":false,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.68,0,0],[0.68,0,0.61]],"att":{"strokeColor":"#2b7354","strokeWidth":2.4,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.56,0,0.58],"Fₜ"],"att":{"strokeColor":"#2b7354","fontSize":15,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"point3d","def":[0.68,0,0],"att":{"strokeColor":"#344b61","fillColor":"#344b61","size":3.8,"withLabel":false,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.59,0,0.03],"𝑂"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.68,0,0],[0.68,0,-1.28]],"att":{"strokeColor":"#344b61","strokeWidth":2.05,"dash":0,"lastArrow":false,"fixed":true,"highlight":false}},
  {"type":"curve3d","def":[[0.68,0.7469,0.8131,0.8778,0.9403,1,1.0562,1.1082,1.1556000000000002,1.1978,1.2343000000000002,1.2647,1.2887,1.306,1.3165,1.32,1.3165,1.306,1.2887,1.2647,1.2343000000000002,1.1978,1.1556000000000002,1.1082,1.0562,1,0.9403,0.8778,0.8131,0.7469,0.68,0.6131000000000001,0.5469,0.4822000000000001,0.4197000000000001,0.36000000000000004,0.30380000000000007,0.2518,0.20440000000000003,0.1622,0.12570000000000003,0.09530000000000005,0.07130000000000003,0.05400000000000005,0.043500000000000094,0.040000000000000036,0.043500000000000094,0.05400000000000005,0.07130000000000003,0.09530000000000005,0.12570000000000003,0.1622,0.20440000000000003,0.2518,0.30380000000000007,0.36000000000000004,0.4197000000000001,0.4822000000000001,0.5469,0.6131000000000001,0.68],[-0.64,-0.6365,-0.626,-0.6087,-0.5847,-0.5543,-0.5178,-0.4756,-0.4282,-0.3762,-0.32,-0.2603,-0.1978,-0.1331,-0.0669,0,0.0669,0.1331,0.1978,0.2603,0.32,0.3762,0.4282,0.4756,0.5178,0.5543,0.5847,0.6087,0.626,0.6365,0.64,0.6365,0.626,0.6087,0.5847,0.5543,0.5178,0.4756,0.4282,0.3762,0.32,0.2603,0.1978,0.1331,0.0669,0,-0.0669,-0.1331,-0.1978,-0.2603,-0.32,-0.3762,-0.4282,-0.4756,-0.5178,-0.5543,-0.5847,-0.6087,-0.626,-0.6365,-0.64],[-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74,-0.74]],"att":{"strokeColor":"#344b61","strokeWidth":1.7,"dash":0,"fillColor":"#a9c5d4","fillOpacity":0.32,"fixed":true,"highlight":false}},
  {"type":"point3d","def":[0.68,0,-0.74],"att":{"strokeColor":"#344b61","fillColor":"#344b61","size":3.8,"withLabel":false,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.68,0,-0.74],[0.68,0,-1.4]],"att":{"strokeColor":"#994521","strokeWidth":2.4,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.76,0,-1.35],"Fɡ"],"att":{"strokeColor":"#994521","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.41,0,1.4],"(b)"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.94,0,0.9],"Axle vertical"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}}
]
```

**Fig. 8.1** (a) The axle starts horizontal and the wheel is released from rest. Gravity produces a torque about the horizontal axis through $O$. (b) With the wheel below the pivot and the axle vertical, the line of action of gravity passes through $O$. Drag to rotate the plot.

As the wheel swings down, the angle between the position vector and gravity decreases. With the axle vertical, gravity is parallel to the position vector and its torque vanishes. This is the stable equilibrium position. A wheel released from rest can swing past vertical and oscillate. Damping is needed for it to settle there.

## A suspended spinning wheel

Now spin the same wheel counterclockwise as seen from $+y$ before releasing its horizontal axle. In the nearly horizontal precession shown in Fig. 8.2, the wheel spins quickly about its axle while the axle turns slowly about the vertical $z$ axis. This slow motion is called *gyroscopic precession*.

```graph3d
bounds: [-1.74, 0.61, 1.74, -0.61]
bounds3d: [[-2.3,2.3],[-1.21,1.21],[-1.13,1.62]]
width: 762
height: 400
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
  az: {slider: {start: 2.860796, visible: false}, pointer: {enabled: true}}
  el: {slider: {start: 0.68, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"line3d","def":[[-1.8,0,0],[-1.8,-0.63,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.45,"dash":2,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.8,-0.725,-0.07],"+x"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.8,0,0],[-0.38,0,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.45,"dash":2,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.33,0,0],"+y"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.8,0,0],[-1.8,0,1.33]],"att":{"strokeColor":"#6b8296","strokeWidth":1.45,"dash":2,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.74,0,1.4],"+z"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.8,0,0],[-1.8,0,1.15]],"att":{"strokeColor":"#344b61","strokeWidth":2.05,"dash":0,"lastArrow":false,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.8,0.22,1.15],[-1.8,-0.22,1.15]],"att":{"strokeColor":"#344b61","strokeWidth":2.05,"dash":0,"lastArrow":false,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.8,0,0],[-1.8,0,0.61]],"att":{"strokeColor":"#2b7354","strokeWidth":2.4,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.92,0,0.58],"Fₜ"],"att":{"strokeColor":"#2b7354","fontSize":15,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"point3d","def":[-1.8,0,0],"att":{"strokeColor":"#344b61","fillColor":"#344b61","size":3.8,"withLabel":false,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.89,0,0.03],"𝑂"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.8,0,0],[-0.56,0,0]],"att":{"strokeColor":"#344b61","strokeWidth":2.05,"dash":0,"lastArrow":false,"fixed":true,"highlight":false}},
  {"type":"curve3d","def":[[-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001,-1.1600000000000001],[-0.64,-0.6365,-0.626,-0.6087,-0.5847,-0.5543,-0.5178,-0.4756,-0.4282,-0.3762,-0.32,-0.2603,-0.1978,-0.1331,-0.0669,0,0.0669,0.1331,0.1978,0.2603,0.32,0.3762,0.4282,0.4756,0.5178,0.5543,0.5847,0.6087,0.626,0.6365,0.64,0.6365,0.626,0.6087,0.5847,0.5543,0.5178,0.4756,0.4282,0.3762,0.32,0.2603,0.1978,0.1331,0.0669,0,-0.0669,-0.1331,-0.1978,-0.2603,-0.32,-0.3762,-0.4282,-0.4756,-0.5178,-0.5543,-0.5847,-0.6087,-0.626,-0.6365,-0.64],[0,0.0669,0.1331,0.1978,0.2603,0.32,0.3762,0.4282,0.4756,0.5178,0.5543,0.5847,0.6087,0.626,0.6365,0.64,0.6365,0.626,0.6087,0.5847,0.5543,0.5178,0.4756,0.4282,0.3762,0.32,0.2603,0.1978,0.1331,0.0669,0,-0.0669,-0.1331,-0.1978,-0.2603,-0.32,-0.3762,-0.4282,-0.4756,-0.5178,-0.5543,-0.5847,-0.6087,-0.626,-0.6365,-0.64,-0.6365,-0.626,-0.6087,-0.5847,-0.5543,-0.5178,-0.4756,-0.4282,-0.3762,-0.32,-0.2603,-0.1978,-0.1331,-0.0669,0]],"att":{"strokeColor":"#344b61","strokeWidth":1.7,"dash":0,"fillColor":"#a9c5d4","fillOpacity":0.32,"fixed":true,"highlight":false}},
  {"type":"point3d","def":[-1.16,0,0],"att":{"strokeColor":"#344b61","fillColor":"#344b61","size":3.8,"withLabel":false,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.16,0,0],[-1.16,0,-0.59]],"att":{"strokeColor":"#994521","strokeWidth":2.4,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.08,0,-0.57],"Fɡ"],"att":{"strokeColor":"#994521","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.8,0,0],[-1.8,0.63,0]],"att":{"strokeColor":"#2b7354","strokeWidth":2.4,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.9,0.69,0.09],"τɡ"],"att":{"strokeColor":"#2b7354","fontSize":15,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.8,0,0],[-0.27,0,0]],"att":{"strokeColor":"#186b99","strokeWidth":2.4,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"curve3d","def":[[-1.16,-1.16,-1.16,-1.16,-1.16,-1.16,-1.16,-1.16,-1.16,-1.16,-1.16,-1.16,-1.16,-1.16,-1.16,-1.16,-1.16,-1.16,-1.16,-1.16,-1.16,-1.16,-1.16,-1.16,-1.16,-1.16,-1.16,-1.16],[0.3366,0.2907,0.2434,0.1949,0.1455,0.0954,0.0448,-0.006,-0.0568,-0.1073,-0.1572,-0.2065,-0.2547,-0.3016,-0.3472,-0.391,-0.4329,-0.4728,-0.5103,-0.5454,-0.5779,-0.6075,-0.6342,-0.6578,-0.6782,-0.6954,-0.7091,-0.7195],[0.6478,0.6696,0.6882,0.7035,0.7153,0.7237,0.7286,0.73,0.7278,0.7221,0.7129,0.7002,0.6841,0.6648,0.6422,0.6165,0.5878,0.5562,0.522,0.4852,0.4461,0.4048,0.3615,0.3166,0.27,0.2222,0.1733,0.1235]],"att":{"strokeColor":"#186b99","strokeWidth":2,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.16,-0.7154,0.145],[-1.16,-0.7285,-0.0474]],"att":{"strokeColor":"#186b99","strokeWidth":2,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.03,0.07,0.8],"spin"],"att":{"strokeColor":"#186b99","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.43,0,0.35],"Lᵢ"],"att":{"strokeColor":"#186b99","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-1.16,0,0],[-1.16,0.58,0]],"att":{"strokeColor":"#186b99","strokeWidth":2.4,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.28,0.54,0.19],"v CM"],"att":{"strokeColor":"#186b99","fontSize":15,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-2.07,0,1.4],"(a)"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.68,0,0],[0.68,-0.63,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.45,"dash":2,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.68,-0.725,-0.07],"+x"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.68,0,0],[1.99,0,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.45,"dash":2,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[2.04,0,0],"+y"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.68,0,0],[0.68,0,1.17]],"att":{"strokeColor":"#6b8296","strokeWidth":1.45,"dash":2,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.74,0,1.24],"+z"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.68,0,0],[1.56,0,0]],"att":{"strokeColor":"#186b99","strokeWidth":2.4,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.46,-0.09,-0.14],"Lᵢ"],"att":{"strokeColor":"#186b99","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.68,0,0],[0.68,0.46,0]],"att":{"strokeColor":"#2b7354","strokeWidth":2.4,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.69,0.51,0.13],"ΔL"],"att":{"strokeColor":"#2b7354","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.68,0,0],[1.56,0.46,0]],"att":{"strokeColor":"#994521","strokeWidth":2.4,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.56,0.49,0.14],"L final"],"att":{"strokeColor":"#994521","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[1.56,0,0],[1.56,0.46,0]],"att":{"strokeColor":"#2b7354","strokeWidth":1.4,"dash":2,"lastArrow":false,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.68,0.46,0],[1.56,0.46,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.4,"dash":2,"lastArrow":false,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.41,0,1.4],"(b)"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}}
]
```

**Fig. 8.2** (a) The spin angular momentum $\mechanical{\vec L}_i$ points along the axle. The gravitational torque points along $-x$ at the instant shown, and the wheel precesses counterclockwise as seen from $+z$. (b) Add the small angular impulse $\Delta\mechanical{\vec L}$ to $\mechanical{\vec L}_i$ to obtain $\mechanical{\vec L}_f$. Drag to rotate the plot.

## The linear momentum analogy

Imagine a mass moving along $+y$ with momentum $\mechanical{\vec p}_i$. Apply a force along $-x$ for a short interval $dt$. The external impulse $\mechanical{\vec{\mathcal I}}_{\mathrm{ext}}$ changes the momentum according to the linear impulse–momentum theorem.

$$
\mechanical{\vec p}_i+\mechanical{\vec{\mathcal I}}_{\mathrm{ext}}=\mechanical{\vec p}_f .
\tag{8.1}
$$

The vector sum turns the momentum away from $+y$ and toward $-x$. If a force of constant magnitude keeps turning to stay perpendicular to the velocity in the same plane, it acts as the centripetal force. Its power is zero, so the speed stays constant while the direction changes.

```graph3d
bounds: [-1.74, 0.61, 1.74, -0.61]
bounds3d: [[-1.37,1.64],[-0.75,1.36],[-0.36,1.42]]
width: 550
height: 367
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
  az: {slider: {start: 2.860796, visible: false}, pointer: {enabled: true}}
  el: {slider: {start: 0.81, visible: false}, pointer: {enabled: true}}
elements: [
  {"type":"curve3d","def":[[0.12,0.189,0.2572,0.324,0.3884,0.45,0.5079,0.5616,0.6105,0.654,0.6916,0.7229,0.7477,0.7656,0.7764,0.78,0.7764,0.7656,0.7477,0.7229,0.6916,0.654,0.6105,0.5616,0.5079,0.45,0.3884,0.324,0.2572,0.189,0.12,0.051,-0.0172,-0.084,-0.1484,-0.21,-0.2679,-0.3216,-0.3705,-0.414,-0.4516,-0.4829,-0.5077,-0.5256,-0.5364,-0.54,-0.5364,-0.5256,-0.5077,-0.4829,-0.4516,-0.414,-0.3705,-0.3216,-0.2679,-0.21,-0.1484,-0.084,-0.0172,0.051,0.12],[0,0.0036,0.0144,0.0323,0.0571,0.0884,0.126,0.1695,0.2184,0.2721,0.33,0.3916,0.456,0.5228,0.591,0.66,0.729,0.7972,0.864,0.9284,0.99,1.0479,1.1016,1.1505,1.194,1.2316,1.2629,1.2877,1.3056,1.3164,1.32,1.3164,1.3056,1.2877,1.2629,1.2316,1.194,1.1505,1.1016,1.0479,0.99,0.9284,0.864,0.7972,0.729,0.66,0.591,0.5228,0.456,0.3916,0.33,0.2721,0.2184,0.1695,0.126,0.0884,0.0571,0.0323,0.0144,0.0036,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"att":{"strokeColor":"#344b61","strokeWidth":1.4,"dash":2,"fillColor":"none","fillOpacity":0,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-0.98,0,0],[-0.98,-0.55,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.45,"dash":2,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.98,-0.645,-0.07],"+x"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-0.98,0,0],[1.41,0,0]],"att":{"strokeColor":"#6b8296","strokeWidth":1.45,"dash":2,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[1.46,0,0],"+y"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-0.98,0,0],[-0.98,0,1.1]],"att":{"strokeColor":"#6b8296","strokeWidth":1.45,"dash":2,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.92,0,1.17],"+z"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-1.05,0,-0.11],"𝑂"],"att":{"strokeColor":"#344b61","fontSize":15,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"point3d","def":[0.12,0,0],"att":{"strokeColor":"#344b61","fillColor":"#344b61","size":3.8,"withLabel":false,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.12,0,0],[0.51,0,0]],"att":{"strokeColor":"#186b99","strokeWidth":2.4,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.12,0,0],[0.12,0.31,0]],"att":{"strokeColor":"#994521","strokeWidth":2.4,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.55,-0.02,-0.08],"pᵢ"],"att":{"strokeColor":"#186b99","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.06,0.31,0.1],"𝐹"],"att":{"strokeColor":"#994521","fontSize":15,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"point3d","def":[0.779674,0.639269,0],"att":{"strokeColor":"#344b61","fillColor":"#344b61","size":3.8,"withLabel":false,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.779674,0.639269,0],[0.791925,1.029076,0]],"att":{"strokeColor":"#186b99","strokeWidth":2.4,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.779674,0.639269,0],[0.469827,0.649006,0]],"att":{"strokeColor":"#994521","strokeWidth":2.4,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.831925,1.009076,-0.08],"𝑝"],"att":{"strokeColor":"#186b99","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.49,0.54,0.15],"𝐹"],"att":{"strokeColor":"#994521","fontSize":15,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"point3d","def":[0.12,1.32,0],"att":{"strokeColor":"#344b61","fillColor":"#344b61","size":3.8,"withLabel":false,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.12,1.32,0],[-0.27,1.32,0]],"att":{"strokeColor":"#186b99","strokeWidth":2.4,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[0.12,1.32,0],[0.12,1.01,0]],"att":{"strokeColor":"#994521","strokeWidth":2.4,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.3,1.4,0.13],"𝑝"],"att":{"strokeColor":"#186b99","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[0.0,0.94,-0.15],"𝐹"],"att":{"strokeColor":"#994521","fontSize":15,"anchorX":"right","fixed":true,"highlight":false}},
  {"type":"point3d","def":[-0.54,0.66,0],"att":{"strokeColor":"#344b61","fillColor":"#344b61","size":3.8,"withLabel":false,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-0.54,0.66,0],[-0.54,0.27,0]],"att":{"strokeColor":"#186b99","strokeWidth":2.4,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"line3d","def":[[-0.54,0.66,0],[-0.23,0.66,0]],"att":{"strokeColor":"#994521","strokeWidth":2.4,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.5,0.25,-0.08],"𝑝"],"att":{"strokeColor":"#186b99","fontSize":15,"anchorX":"left","fixed":true,"highlight":false}},
  {"type":"text3d","def":[[-0.35,0.66,0.12],"𝐹"],"att":{"strokeColor":"#994521","fontSize":15,"anchorX":"right","fixed":true,"highlight":false}}
]
```

**Fig. 8.3** The blue momentum vectors are tangent to the circular path. The force vectors point inward and change the direction of the momentum. At the point on the $y$ axis the force points along $-x$. Drag to rotate the plot.

## Angular impulse and precession

For the spinning wheel, $\mechanical{\vec L}_i$ initially points along $+y$. Gravity produces a torque $\mechanical{\vec\tau}_{F_g}=\mechanical{\vec r}\times\mechanical{\vec F}_g$ about $O$. Over a short interval, the angular impulse $\mechanical{\vec{\mathcal I}}_{\mathrm{ext},r}$ lies along the torque. The angular impulse–momentum theorem gives

$$
\mechanical{\vec L}_i+\mechanical{\vec{\mathcal I}}_{\mathrm{ext},r}=\mechanical{\vec L}_f .
\tag{8.2}
$$

The small impulse changes the direction of the spin angular momentum. As the wheel precesses, the torque continues to turn with the axle. In the idealized nearly horizontal motion, the torque stays perpendicular to the spin angular momentum and changes its direction while leaving its magnitude approximately constant. The center of mass also moves around the rope and has orbital angular momentum along $+z$. The spin axis therefore changes orientation even while the precession axis stays fixed.

In the fast-spin regime, the precession speed $\mechanical\omega_P$ is much smaller than the spin speed $\mechanical\omega$. For the same wheel and setup, $\mechanical\omega_P$ is then inversely proportional to $\mechanical\omega$. The axle can also bob as it precesses, especially when spin is slower or the initial conditions differ from steady precession. This wobble is called *nutation*. A spinning top also precesses under the torque of its weight about the support point.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\vec F}_T,\mechanical{\vec F}_g$ | $\unit N$ | Tension and weight | Forces from the rope and gravity. |
| $\mechanical{\vec\tau}_{F_g}$ | $\unit{N\,m}$ | Gravitational torque | Moment of the weight about the suspension point. |
| $\mechanical{\vec r}$ | $\unit m$ | Position relative to the pivot | Displacement from the pivot to the center of mass. |
| $\mechanical{\vec p}$ | $\unit{kg\,m\,s^{-1}}$ | Linear momentum | Mass times velocity. |
| $\mechanical{\vec L}$ | $\unit{kg\,m^2\,s^{-1}}$ | Angular momentum | Spin or orbital angular momentum as indicated. |
| $\mechanical{\vec{\mathcal I}}_{\mathrm{ext}}$ | $\unit{N\,s}$ | Linear impulse | Change in linear momentum over the interval. |
| $\mechanical{\vec{\mathcal I}}_{\mathrm{ext},r}$ | $\unit{N\,m\,s}$ | Angular impulse | Change in angular momentum over the interval. |
| $\mechanical\omega,\mechanical\omega_P$ | $\unit{rad\,s^{-1}}$ | Spin and precession speeds | Rates about the axle and about the vertical axis. |
| $\mechanical{\vec v}_{\mathrm{cm}}$ | $\unit{m\,s^{-1}}$ | Center-of-mass velocity | Velocity along the orbital path. |
| $t$ | $\unit s$ | Time | Time during motion. |
