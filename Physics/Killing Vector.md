---
title: "Killing vectors and tensors"
---

> [!TLDR]
> A Killing vector describes a continuous symmetry of the metric and gives a conserved quantity along a geodesic. A Killing tensor extends this relation to quantities that depend on higher powers of momentum.

## A symmetry that preserves geometry

Imagine a perfect sphere. Rotate the whole surface about its north–south axis. Distances between corresponding points and angles between corresponding tangent vectors stay the same. This transformation is an **isometry**: it preserves the metric.

A **Killing vector field** assigns a tangent vector to each point. The vector gives the direction and rate of motion of that point under an infinitesimal symmetry transformation. The word *field* matters: this is a vector at every point, not one arrow at one location.

For a rotation through the same small angle, points near the equator move farther than points near a pole. The two poles do not move. Thus, the field can be zero at some points and still describe a nonzero symmetry of the whole surface.

```graph3d
{"bounds":[-3.1,2.65,3.1,-2.65],"bounds3d":[[-1.4,1.4],[-1.4,1.4],[-1.5,1.5]],"height":440,"width":620,"axis":false,"drag":true,"showNavigation":false,"keepAspectRatio":true,"att3d":{"projection":"parallel","axesPosition":"none","xPlaneRear":{"visible":false},"yPlaneRear":{"visible":false},"zPlaneRear":{"visible":false},"az":{"slider":{"start":2.55,"visible":false}},"el":{"slider":{"start":0.38,"visible":false}}},"elements":[{"type":"curve3d","def":[[0.5,0.498459,0.493844,0.486185,0.475528,0.46194,0.445503,0.42632,0.404508,0.380203,0.353553,0.324724,0.293893,0.261249,0.226995,0.191342,0.154508,0.116723,0.078217,0.03923,0.0,-0.03923,-0.078217,-0.116723,-0.154508,-0.191342,-0.226995,-0.261249,-0.293893,-0.324724,-0.353553,-0.380203,-0.404508,-0.42632,-0.445503,-0.46194,-0.475528,-0.486185,-0.493844,-0.498459,-0.5,-0.498459,-0.493844,-0.486185,-0.475528,-0.46194,-0.445503,-0.42632,-0.404508,-0.380203,-0.353553,-0.324724,-0.293893,-0.261249,-0.226995,-0.191342,-0.154508,-0.116723,-0.078217,-0.03923,-0.0,0.03923,0.078217,0.116723,0.154508,0.191342,0.226995,0.261249,0.293893,0.324724,0.353553,0.380203,0.404508,0.42632,0.445503,0.46194,0.475528,0.486185,0.493844,0.498459,0.5],[0.0,0.03923,0.078217,0.116723,0.154508,0.191342,0.226995,0.261249,0.293893,0.324724,0.353553,0.380203,0.404508,0.42632,0.445503,0.46194,0.475528,0.486185,0.493844,0.498459,0.5,0.498459,0.493844,0.486185,0.475528,0.46194,0.445503,0.42632,0.404508,0.380203,0.353553,0.324724,0.293893,0.261249,0.226995,0.191342,0.154508,0.116723,0.078217,0.03923,0.0,-0.03923,-0.078217,-0.116723,-0.154508,-0.191342,-0.226995,-0.261249,-0.293893,-0.324724,-0.353553,-0.380203,-0.404508,-0.42632,-0.445503,-0.46194,-0.475528,-0.486185,-0.493844,-0.498459,-0.5,-0.498459,-0.493844,-0.486185,-0.475528,-0.46194,-0.445503,-0.42632,-0.404508,-0.380203,-0.353553,-0.324724,-0.293893,-0.261249,-0.226995,-0.191342,-0.154508,-0.116723,-0.078217,-0.03923,-0.0],[0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025,0.866025]],"att":{"strokeColor":"#8b9fb7","strokeWidth":2,"fixed":true}},{"type":"line3d","def":[[0.49999999999999994,0.0,0.8660254037844387],[0.49999999999999994,0.17499999999999996,0.8660254037844387]],"att":{"strokeColor":"#007f89","strokeWidth":3,"lastArrow":true,"fixed":true}},{"type":"line3d","def":[[3.0616169978683824e-17,0.49999999999999994,0.8660254037844387],[-0.17499999999999993,0.49999999999999994,0.8660254037844387]],"att":{"strokeColor":"#007f89","strokeWidth":3,"lastArrow":true,"fixed":true}},{"type":"line3d","def":[[-0.49999999999999994,6.123233995736765e-17,0.8660254037844387],[-0.49999999999999994,-0.1749999999999999,0.8660254037844387]],"att":{"strokeColor":"#007f89","strokeWidth":3,"lastArrow":true,"fixed":true}},{"type":"line3d","def":[[-9.184850993605147e-17,-0.49999999999999994,0.8660254037844387],[0.17499999999999988,-0.5,0.8660254037844387]],"att":{"strokeColor":"#007f89","strokeWidth":3,"lastArrow":true,"fixed":true}},{"type":"curve3d","def":[[1.0,0.996917,0.987688,0.97237,0.951057,0.92388,0.891007,0.85264,0.809017,0.760406,0.707107,0.649448,0.587785,0.522499,0.45399,0.382683,0.309017,0.233445,0.156434,0.078459,0.0,-0.078459,-0.156434,-0.233445,-0.309017,-0.382683,-0.45399,-0.522499,-0.587785,-0.649448,-0.707107,-0.760406,-0.809017,-0.85264,-0.891007,-0.92388,-0.951057,-0.97237,-0.987688,-0.996917,-1.0,-0.996917,-0.987688,-0.97237,-0.951057,-0.92388,-0.891007,-0.85264,-0.809017,-0.760406,-0.707107,-0.649448,-0.587785,-0.522499,-0.45399,-0.382683,-0.309017,-0.233445,-0.156434,-0.078459,-0.0,0.078459,0.156434,0.233445,0.309017,0.382683,0.45399,0.522499,0.587785,0.649448,0.707107,0.760406,0.809017,0.85264,0.891007,0.92388,0.951057,0.97237,0.987688,0.996917,1.0],[0.0,0.078459,0.156434,0.233445,0.309017,0.382683,0.45399,0.522499,0.587785,0.649448,0.707107,0.760406,0.809017,0.85264,0.891007,0.92388,0.951057,0.97237,0.987688,0.996917,1.0,0.996917,0.987688,0.97237,0.951057,0.92388,0.891007,0.85264,0.809017,0.760406,0.707107,0.649448,0.587785,0.522499,0.45399,0.382683,0.309017,0.233445,0.156434,0.078459,0.0,-0.078459,-0.156434,-0.233445,-0.309017,-0.382683,-0.45399,-0.522499,-0.587785,-0.649448,-0.707107,-0.760406,-0.809017,-0.85264,-0.891007,-0.92388,-0.951057,-0.97237,-0.987688,-0.996917,-1.0,-0.996917,-0.987688,-0.97237,-0.951057,-0.92388,-0.891007,-0.85264,-0.809017,-0.760406,-0.707107,-0.649448,-0.587785,-0.522499,-0.45399,-0.382683,-0.309017,-0.233445,-0.156434,-0.078459,-0.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0]],"att":{"strokeColor":"#8b9fb7","strokeWidth":2,"fixed":true}},{"type":"line3d","def":[[1.0,0.0,6.123233995736766e-17],[1.0,0.35,6.123233995736766e-17]],"att":{"strokeColor":"#007f89","strokeWidth":3,"lastArrow":true,"fixed":true}},{"type":"line3d","def":[[6.123233995736766e-17,1.0,6.123233995736766e-17],[-0.3499999999999999,1.0,6.123233995736766e-17]],"att":{"strokeColor":"#007f89","strokeWidth":3,"lastArrow":true,"fixed":true}},{"type":"line3d","def":[[-1.0,1.2246467991473532e-16,6.123233995736766e-17],[-1.0,-0.34999999999999987,6.123233995736766e-17]],"att":{"strokeColor":"#007f89","strokeWidth":3,"lastArrow":true,"fixed":true}},{"type":"line3d","def":[[-1.8369701987210297e-16,-1.0,6.123233995736766e-17],[0.3499999999999998,-1.0,6.123233995736766e-17]],"att":{"strokeColor":"#007f89","strokeWidth":3,"lastArrow":true,"fixed":true}},{"type":"curve3d","def":[[0.5,0.498459,0.493844,0.486185,0.475528,0.46194,0.445503,0.42632,0.404508,0.380203,0.353553,0.324724,0.293893,0.261249,0.226995,0.191342,0.154508,0.116723,0.078217,0.03923,0.0,-0.03923,-0.078217,-0.116723,-0.154508,-0.191342,-0.226995,-0.261249,-0.293893,-0.324724,-0.353553,-0.380203,-0.404508,-0.42632,-0.445503,-0.46194,-0.475528,-0.486185,-0.493844,-0.498459,-0.5,-0.498459,-0.493844,-0.486185,-0.475528,-0.46194,-0.445503,-0.42632,-0.404508,-0.380203,-0.353553,-0.324724,-0.293893,-0.261249,-0.226995,-0.191342,-0.154508,-0.116723,-0.078217,-0.03923,-0.0,0.03923,0.078217,0.116723,0.154508,0.191342,0.226995,0.261249,0.293893,0.324724,0.353553,0.380203,0.404508,0.42632,0.445503,0.46194,0.475528,0.486185,0.493844,0.498459,0.5],[0.0,0.03923,0.078217,0.116723,0.154508,0.191342,0.226995,0.261249,0.293893,0.324724,0.353553,0.380203,0.404508,0.42632,0.445503,0.46194,0.475528,0.486185,0.493844,0.498459,0.5,0.498459,0.493844,0.486185,0.475528,0.46194,0.445503,0.42632,0.404508,0.380203,0.353553,0.324724,0.293893,0.261249,0.226995,0.191342,0.154508,0.116723,0.078217,0.03923,0.0,-0.03923,-0.078217,-0.116723,-0.154508,-0.191342,-0.226995,-0.261249,-0.293893,-0.324724,-0.353553,-0.380203,-0.404508,-0.42632,-0.445503,-0.46194,-0.475528,-0.486185,-0.493844,-0.498459,-0.5,-0.498459,-0.493844,-0.486185,-0.475528,-0.46194,-0.445503,-0.42632,-0.404508,-0.380203,-0.353553,-0.324724,-0.293893,-0.261249,-0.226995,-0.191342,-0.154508,-0.116723,-0.078217,-0.03923,-0.0],[-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025,-0.866025]],"att":{"strokeColor":"#8b9fb7","strokeWidth":2,"fixed":true}},{"type":"line3d","def":[[0.49999999999999994,0.0,-0.8660254037844387],[0.49999999999999994,0.17499999999999996,-0.8660254037844387]],"att":{"strokeColor":"#007f89","strokeWidth":3,"lastArrow":true,"fixed":true}},{"type":"line3d","def":[[3.0616169978683824e-17,0.49999999999999994,-0.8660254037844387],[-0.17499999999999993,0.49999999999999994,-0.8660254037844387]],"att":{"strokeColor":"#007f89","strokeWidth":3,"lastArrow":true,"fixed":true}},{"type":"line3d","def":[[-0.49999999999999994,6.123233995736765e-17,-0.8660254037844387],[-0.49999999999999994,-0.1749999999999999,-0.8660254037844387]],"att":{"strokeColor":"#007f89","strokeWidth":3,"lastArrow":true,"fixed":true}},{"type":"line3d","def":[[-9.184850993605147e-17,-0.49999999999999994,-0.8660254037844387],[0.17499999999999988,-0.5,-0.8660254037844387]],"att":{"strokeColor":"#007f89","strokeWidth":3,"lastArrow":true,"fixed":true}},{"type":"curve3d","def":[[1.0,0.996917,0.987688,0.97237,0.951057,0.92388,0.891007,0.85264,0.809017,0.760406,0.707107,0.649448,0.587785,0.522499,0.45399,0.382683,0.309017,0.233445,0.156434,0.078459,0.0,-0.078459,-0.156434,-0.233445,-0.309017,-0.382683,-0.45399,-0.522499,-0.587785,-0.649448,-0.707107,-0.760406,-0.809017,-0.85264,-0.891007,-0.92388,-0.951057,-0.97237,-0.987688,-0.996917,-1.0,-0.996917,-0.987688,-0.97237,-0.951057,-0.92388,-0.891007,-0.85264,-0.809017,-0.760406,-0.707107,-0.649448,-0.587785,-0.522499,-0.45399,-0.382683,-0.309017,-0.233445,-0.156434,-0.078459,-0.0,0.078459,0.156434,0.233445,0.309017,0.382683,0.45399,0.522499,0.587785,0.649448,0.707107,0.760406,0.809017,0.85264,0.891007,0.92388,0.951057,0.97237,0.987688,0.996917,1.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.078459,0.156434,0.233445,0.309017,0.382683,0.45399,0.522499,0.587785,0.649448,0.707107,0.760406,0.809017,0.85264,0.891007,0.92388,0.951057,0.97237,0.987688,0.996917,1.0,0.996917,0.987688,0.97237,0.951057,0.92388,0.891007,0.85264,0.809017,0.760406,0.707107,0.649448,0.587785,0.522499,0.45399,0.382683,0.309017,0.233445,0.156434,0.078459,0.0,-0.078459,-0.156434,-0.233445,-0.309017,-0.382683,-0.45399,-0.522499,-0.587785,-0.649448,-0.707107,-0.760406,-0.809017,-0.85264,-0.891007,-0.92388,-0.951057,-0.97237,-0.987688,-0.996917,-1.0,-0.996917,-0.987688,-0.97237,-0.951057,-0.92388,-0.891007,-0.85264,-0.809017,-0.760406,-0.707107,-0.649448,-0.587785,-0.522499,-0.45399,-0.382683,-0.309017,-0.233445,-0.156434,-0.078459,-0.0]],"att":{"strokeColor":"#c0c9d3","strokeWidth":1,"fixed":true}},{"type":"curve3d","def":[[0.707107,0.704927,0.698401,0.687569,0.672499,0.653281,0.630037,0.602908,0.572061,0.537688,0.5,0.459229,0.415627,0.369462,0.32102,0.270598,0.218508,0.165071,0.110616,0.055479,0.0,-0.055479,-0.110616,-0.165071,-0.218508,-0.270598,-0.32102,-0.369462,-0.415627,-0.459229,-0.5,-0.537688,-0.572061,-0.602908,-0.630037,-0.653281,-0.672499,-0.687569,-0.698401,-0.704927,-0.707107,-0.704927,-0.698401,-0.687569,-0.672499,-0.653281,-0.630037,-0.602908,-0.572061,-0.537688,-0.5,-0.459229,-0.415627,-0.369462,-0.32102,-0.270598,-0.218508,-0.165071,-0.110616,-0.055479,-0.0,0.055479,0.110616,0.165071,0.218508,0.270598,0.32102,0.369462,0.415627,0.459229,0.5,0.537688,0.572061,0.602908,0.630037,0.653281,0.672499,0.687569,0.698401,0.704927,0.707107],[0.707107,0.704927,0.698401,0.687569,0.672499,0.653281,0.630037,0.602908,0.572061,0.537688,0.5,0.459229,0.415627,0.369462,0.32102,0.270598,0.218508,0.165071,0.110616,0.055479,0.0,-0.055479,-0.110616,-0.165071,-0.218508,-0.270598,-0.32102,-0.369462,-0.415627,-0.459229,-0.5,-0.537688,-0.572061,-0.602908,-0.630037,-0.653281,-0.672499,-0.687569,-0.698401,-0.704927,-0.707107,-0.704927,-0.698401,-0.687569,-0.672499,-0.653281,-0.630037,-0.602908,-0.572061,-0.537688,-0.5,-0.459229,-0.415627,-0.369462,-0.32102,-0.270598,-0.218508,-0.165071,-0.110616,-0.055479,-0.0,0.055479,0.110616,0.165071,0.218508,0.270598,0.32102,0.369462,0.415627,0.459229,0.5,0.537688,0.572061,0.602908,0.630037,0.653281,0.672499,0.687569,0.698401,0.704927,0.707107],[0.0,0.078459,0.156434,0.233445,0.309017,0.382683,0.45399,0.522499,0.587785,0.649448,0.707107,0.760406,0.809017,0.85264,0.891007,0.92388,0.951057,0.97237,0.987688,0.996917,1.0,0.996917,0.987688,0.97237,0.951057,0.92388,0.891007,0.85264,0.809017,0.760406,0.707107,0.649448,0.587785,0.522499,0.45399,0.382683,0.309017,0.233445,0.156434,0.078459,0.0,-0.078459,-0.156434,-0.233445,-0.309017,-0.382683,-0.45399,-0.522499,-0.587785,-0.649448,-0.707107,-0.760406,-0.809017,-0.85264,-0.891007,-0.92388,-0.951057,-0.97237,-0.987688,-0.996917,-1.0,-0.996917,-0.987688,-0.97237,-0.951057,-0.92388,-0.891007,-0.85264,-0.809017,-0.760406,-0.707107,-0.649448,-0.587785,-0.522499,-0.45399,-0.382683,-0.309017,-0.233445,-0.156434,-0.078459,-0.0]],"att":{"strokeColor":"#c0c9d3","strokeWidth":1,"fixed":true}},{"type":"curve3d","def":[[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[1.0,0.996917,0.987688,0.97237,0.951057,0.92388,0.891007,0.85264,0.809017,0.760406,0.707107,0.649448,0.587785,0.522499,0.45399,0.382683,0.309017,0.233445,0.156434,0.078459,0.0,-0.078459,-0.156434,-0.233445,-0.309017,-0.382683,-0.45399,-0.522499,-0.587785,-0.649448,-0.707107,-0.760406,-0.809017,-0.85264,-0.891007,-0.92388,-0.951057,-0.97237,-0.987688,-0.996917,-1.0,-0.996917,-0.987688,-0.97237,-0.951057,-0.92388,-0.891007,-0.85264,-0.809017,-0.760406,-0.707107,-0.649448,-0.587785,-0.522499,-0.45399,-0.382683,-0.309017,-0.233445,-0.156434,-0.078459,-0.0,0.078459,0.156434,0.233445,0.309017,0.382683,0.45399,0.522499,0.587785,0.649448,0.707107,0.760406,0.809017,0.85264,0.891007,0.92388,0.951057,0.97237,0.987688,0.996917,1.0],[0.0,0.078459,0.156434,0.233445,0.309017,0.382683,0.45399,0.522499,0.587785,0.649448,0.707107,0.760406,0.809017,0.85264,0.891007,0.92388,0.951057,0.97237,0.987688,0.996917,1.0,0.996917,0.987688,0.97237,0.951057,0.92388,0.891007,0.85264,0.809017,0.760406,0.707107,0.649448,0.587785,0.522499,0.45399,0.382683,0.309017,0.233445,0.156434,0.078459,0.0,-0.078459,-0.156434,-0.233445,-0.309017,-0.382683,-0.45399,-0.522499,-0.587785,-0.649448,-0.707107,-0.760406,-0.809017,-0.85264,-0.891007,-0.92388,-0.951057,-0.97237,-0.987688,-0.996917,-1.0,-0.996917,-0.987688,-0.97237,-0.951057,-0.92388,-0.891007,-0.85264,-0.809017,-0.760406,-0.707107,-0.649448,-0.587785,-0.522499,-0.45399,-0.382683,-0.309017,-0.233445,-0.156434,-0.078459,-0.0]],"att":{"strokeColor":"#c0c9d3","strokeWidth":1,"fixed":true}},{"type":"curve3d","def":[[-0.707107,-0.704927,-0.698401,-0.687569,-0.672499,-0.653281,-0.630037,-0.602908,-0.572061,-0.537688,-0.5,-0.459229,-0.415627,-0.369462,-0.32102,-0.270598,-0.218508,-0.165071,-0.110616,-0.055479,-0.0,0.055479,0.110616,0.165071,0.218508,0.270598,0.32102,0.369462,0.415627,0.459229,0.5,0.537688,0.572061,0.602908,0.630037,0.653281,0.672499,0.687569,0.698401,0.704927,0.707107,0.704927,0.698401,0.687569,0.672499,0.653281,0.630037,0.602908,0.572061,0.537688,0.5,0.459229,0.415627,0.369462,0.32102,0.270598,0.218508,0.165071,0.110616,0.055479,0.0,-0.055479,-0.110616,-0.165071,-0.218508,-0.270598,-0.32102,-0.369462,-0.415627,-0.459229,-0.5,-0.537688,-0.572061,-0.602908,-0.630037,-0.653281,-0.672499,-0.687569,-0.698401,-0.704927,-0.707107],[0.707107,0.704927,0.698401,0.687569,0.672499,0.653281,0.630037,0.602908,0.572061,0.537688,0.5,0.459229,0.415627,0.369462,0.32102,0.270598,0.218508,0.165071,0.110616,0.055479,0.0,-0.055479,-0.110616,-0.165071,-0.218508,-0.270598,-0.32102,-0.369462,-0.415627,-0.459229,-0.5,-0.537688,-0.572061,-0.602908,-0.630037,-0.653281,-0.672499,-0.687569,-0.698401,-0.704927,-0.707107,-0.704927,-0.698401,-0.687569,-0.672499,-0.653281,-0.630037,-0.602908,-0.572061,-0.537688,-0.5,-0.459229,-0.415627,-0.369462,-0.32102,-0.270598,-0.218508,-0.165071,-0.110616,-0.055479,-0.0,0.055479,0.110616,0.165071,0.218508,0.270598,0.32102,0.369462,0.415627,0.459229,0.5,0.537688,0.572061,0.602908,0.630037,0.653281,0.672499,0.687569,0.698401,0.704927,0.707107],[0.0,0.078459,0.156434,0.233445,0.309017,0.382683,0.45399,0.522499,0.587785,0.649448,0.707107,0.760406,0.809017,0.85264,0.891007,0.92388,0.951057,0.97237,0.987688,0.996917,1.0,0.996917,0.987688,0.97237,0.951057,0.92388,0.891007,0.85264,0.809017,0.760406,0.707107,0.649448,0.587785,0.522499,0.45399,0.382683,0.309017,0.233445,0.156434,0.078459,0.0,-0.078459,-0.156434,-0.233445,-0.309017,-0.382683,-0.45399,-0.522499,-0.587785,-0.649448,-0.707107,-0.760406,-0.809017,-0.85264,-0.891007,-0.92388,-0.951057,-0.97237,-0.987688,-0.996917,-1.0,-0.996917,-0.987688,-0.97237,-0.951057,-0.92388,-0.891007,-0.85264,-0.809017,-0.760406,-0.707107,-0.649448,-0.587785,-0.522499,-0.45399,-0.382683,-0.309017,-0.233445,-0.156434,-0.078459,-0.0]],"att":{"strokeColor":"#c0c9d3","strokeWidth":1,"fixed":true}},{"type":"line3d","def":[[0,0,-1.2],[0,0,1.2]],"att":{"strokeColor":"#79828d","strokeWidth":1,"dash":2,"fixed":true}},{"type":"point3d","def":[0,0,1],"att":{"size":3,"withLabel":false,"fillColor":"#374151","strokeColor":"#374151","fixed":true}},{"type":"text3d","def":[[0,0,1.27],"North: ξ = 0"],"att":{"fontSize":16,"anchorX":"middle","fixed":true}},{"type":"point3d","def":[0,0,-1],"att":{"size":3,"withLabel":false,"fillColor":"#374151","strokeColor":"#374151","fixed":true}},{"type":"text3d","def":[[0,0,-1.27],"South: ξ = 0"],"att":{"fontSize":16,"anchorX":"middle","fixed":true}}]}
```

**Fig. 1.1** Rotation field on a unit sphere. The teal arrows are tangent vectors for the same rotation parameter. Their true lengths are greatest at the equator and zero at the poles. The parallel projection can shorten their apparent lengths. Drag the graph to rotate the view; the grey curves show the sphere, not particle paths.

> [!note]
> The flow of a Killing vector moves the geometry as a whole. It does not describe the required path of a free particle. For example, most latitude circles on a sphere are not geodesics.

Killing fields also exist in flat space. Translations and rotations of the Euclidean plane are examples. A general curved space need not have any nonzero Killing field.

## The Killing equation

The metric $g_{\mu\nu}$ determines the interval between nearby points. A Killing field $\xi$ satisfies

$$
\boxed{\mathcal L_\xi g_{\mu\nu}=0.}
\tag{1}
$$

The Lie derivative $\mathcal L_\xi$ measures how the metric changes under the flow of $\xi$. Equation (1) says that this change is zero. With the Levi-Civita connection of the metric, this is equivalent to

$$
\boxed{\nabla_\mu\xi_\nu+\nabla_\nu\xi_\mu=0.}
\tag{2}
$$

Here, $\xi_\mu=g_{\mu\nu}\xi^\nu$ is the same field with its index lowered. The operator $\nabla$ is the covariant derivative. It accounts for the change of the coordinate basis from point to point. Repeated upper and lower indices are summed.

The symmetric part of $\nabla_\mu\xi_\nu$ is zero. Thus, the flow produces no local stretching or shear. This does **not** require $\nabla_\mu\xi_\nu=0$: a rotation field can change direction across the surface.

See [[1.2 Covariant differentiation]], [[1.4 Lie differentiation]], and [[1.5 Killing vectors]] for the underlying definitions. [Tong, Sections 4.3.1–4.3.2](https://davidtong.org/teaching/general-relativity/grhtml/S4#S4.SS3) gives a further treatment of isometries and their constants of motion.

### A useful coordinate test

If all metric components are independent of a coordinate $q$, then its coordinate vector is Killing:

$$
\partial_q g_{\mu\nu}=0
\quad\Longrightarrow\quad
\xi=\partial_q.
\tag{3}
$$

Here, $\partial_q$ means $\partial/\partial q$. This test depends on the coordinate system. A symmetry can exist even when it is difficult to see in the metric components. Near a point where a Killing field is nonzero, adapted coordinates can make the field a coordinate vector.

## Worked example: rotation of a sphere

Let $\mechanical{R}$ be the sphere radius, $\mechanical{\theta}$ the polar angle, and $\mechanical{\varphi}$ the azimuthal angle. Its surface metric is

$$
\mathrm d\mechanical{s}^2
=\mechanical{R}^2\left(\mathrm d\mechanical{\theta}^2
+\sin^2\mechanical{\theta}\,\mathrm d\mechanical{\varphi}^2\right).
\tag{4}
$$

The metric does not depend on $\mechanical{\varphi}$. Therefore, rotation about the polar axis has the Killing field

$$
\xi=\partial_\varphi,
\qquad
\lVert\xi\rVert^2=g_{\varphi\varphi}
=\mechanical{R}^2\sin^2\mechanical{\theta}.
\tag{5}
$$

For a unit change of rotation angle, the field norm is $\mechanical{R}\sin\mechanical{\theta}$. This gives the arrow lengths in Fig. 1.1. At a pole, spherical coordinates are singular, but the geometric rotation field is smooth and zero.

The chosen axis gives one Killing field. A round sphere has three independent rotation fields, one for each spatial rotation axis.

## Why a Killing vector gives a conserved quantity

A freely falling test particle follows a [[1.3 Geodesics|geodesic]]. Assume there is no force other than gravity and neglect the particle's effect on the geometry. Its four-momentum $\mechanical{p^\mu}$ is parallel transported:

$$
\mechanical{p^\nu}\nabla_\nu\mechanical{p^\mu}=0.
\tag{6}
$$

This form uses momentum proportional to an affine geodesic tangent, with a constant proportionality factor. It applies to massive particles and to light. An affine parameter is a curve parameter for which the tangent is parallel transported.

For a Killing field, form the scalar

$$
\boxed{C_\xi=\xi^\mu\mechanical{p_\mu}
=\xi_\mu\mechanical{p^\mu}.}
\tag{7}
$$

Its change along the geodesic is zero:

$$
\begin{aligned}
\mechanical{p^\nu}\nabla_\nu C_\xi
&=\mechanical{p^\nu}\mechanical{p^\mu}\nabla_\nu\xi_\mu
+\xi_\mu\mechanical{p^\nu}\nabla_\nu\mechanical{p^\mu}\\
&=\mechanical{p^\nu}\mechanical{p^\mu}\nabla_{(\nu}\xi_{\mu)}=0.
\end{aligned}
\tag{8}
$$

The second term vanishes by the geodesic equation. In the first term, the symmetric momentum product contracts with an antisymmetric derivative. This contraction is zero. Parentheses around indices mean the average over their permutations.

The conserved value is a scalar, so it does not depend on the coordinate system. Its numerical value can differ between particles and geodesics.

| Metric symmetry | Killing field in adapted coordinates | Conserved quantity |
| --- | --- | --- |
| Time translation | $\partial_t$ | Energy $\energy{E}=-\mechanical{p_t}$ |
| Translation along a Cartesian axis | $\partial_x$ | Linear momentum $\mechanical{p_x}$ |
| Rotation about an axis | $\partial_\varphi$ | Angular momentum about that axis, $\mechanical{L_z}=\mechanical{p_\varphi}$ |

The table assumes metric signature $(-,+,+,+)$, time coordinate $\mechanical{t}$ in seconds, and angular coordinate $\mechanical{\varphi}$ in radians. The field must be a symmetry of the metric under study. A general time coordinate does not imply conserved energy. The energy also depends on the normalization of the time-translation field.

This is the geodesic form of **Noether's theorem**: a continuous symmetry of the particle action gives a conserved quantity. The energy associated with a time-translation field need not equal the energy measured by each local observer.

## Killing tensors: beyond a single symmetry direction

A vector is already a tensor of rank one. The term **Killing tensor** usually refers to a totally symmetric tensor field of rank two or higher.

A rank-two Killing tensor $K_{\mu\nu}=K_{\nu\mu}$ satisfies

$$
\boxed{\nabla_{(\alpha}K_{\mu\nu)}=0.}
\tag{9}
$$

For a symmetric rank-two tensor, this means

$$
\nabla_\alpha K_{\mu\nu}
+\nabla_\mu K_{\nu\alpha}
+\nabla_\nu K_{\alpha\mu}=0.
\tag{10}
$$

It gives a conserved scalar that is **quadratic in momentum**:

$$
\boxed{C_K=K_{\mu\nu}\mechanical{p^\mu}\mechanical{p^\nu}.}
\tag{11}
$$

At each point, the tensor combines two copies of the momentum into a number. As the particle moves, both the tensor components and the momentum components can change. The Killing tensor equation makes their combined value constant.

![[killing-vector-tensor-conservation.svg|**Fig. 1.2** A Killing vector combines with one momentum factor to give a linear constant. A rank-two Killing tensor combines with two momentum factors to give a quadratic constant. Each value stays fixed along a geodesic; it can differ between geodesics.]]

The proof follows the same steps as for a Killing vector:

$$
\mechanical{p^\alpha}\nabla_\alpha C_K
=\mechanical{p^\alpha}\mechanical{p^\mu}\mechanical{p^\nu}
\nabla_{(\alpha}K_{\mu\nu)}=0.
\tag{12}
$$

Terms that differentiate momentum vanish by Eq. (6). The three momentum factors are totally symmetric, so only the totally symmetric part of the tensor derivative contributes.

More generally, a symmetric rank-$r$ tensor obeys

$$
\nabla_{(\alpha}K_{\mu_1\cdots\mu_r)}=0,
\qquad
C_K=K_{\mu_1\cdots\mu_r}
\mechanical{p^{\mu_1}}\cdots\mechanical{p^{\mu_r}}.
\tag{13}
$$

The conserved scalar has degree $r$ in momentum. Unlike a Killing vector, a higher-rank tensor need not generate an isometry of spacetime. Its symmetry can depend on both position and momentum. This is the meaning of a **hidden symmetry** in this context. See [Frolov, Krtouš, and Kubizňák, Section 2.2](https://arxiv.org/html/1705.05482v3#S2.SS2).

### Not every Killing tensor gives a new independent constant

The metric is itself a rank-two Killing tensor, because the Levi-Civita connection satisfies $\nabla_\alpha g_{\mu\nu}=0$. Its constant is the momentum norm:

$$
C_g=g_{\mu\nu}\mechanical{p^\mu}\mechanical{p^\nu}.
\tag{14}
$$

This restates the mass-shell condition. It is zero for light and negative for a massive particle with the stated signature.

Products of known Killing vectors also give Killing tensors. If $\xi$ and $\eta$ are Killing fields, then

$$
K_{\mu\nu}=\xi_{(\mu}\eta_{\nu)}
\quad\Longrightarrow\quad
C_K=(\xi_\mu\mechanical{p^\mu})(\eta_\nu\mechanical{p^\nu}).
\tag{15}
$$

The result is a product of two known constants. A rank-two tensor made from constant linear combinations of the metric and such symmetrized products is called **reducible**. It gives no new independent integral beyond those used to construct it.

## Example: the Carter constant in Kerr spacetime

The [[5.3.1 The Kerr metric|Kerr metric]] describes a rotating black hole. It is stationary and axially symmetric. These two symmetries give conserved energy and angular momentum about the rotation axis.

Kerr spacetime also has a rank-two Killing tensor. It gives an additional independent quadratic integral, associated with the **Carter constant**. This constant constrains motion away from the equatorial plane. It cannot be obtained from only the metric and products of the two Killing vectors.

Together, the momentum norm, energy, axial angular momentum, and Carter integral permit separation of the geodesic equations. They reduce the problem to first-order equations that can be integrated. This does not imply that every orbit is a simple elementary function. [Frolov, Krtouš, and Kubizňák, Sections 3.2 and 3.4](https://arxiv.org/html/1705.05482v3#S3.SS4) develops this example.

> [!note]
> Authors use different definitions of the Carter constant. The direct tensor contraction can differ from the quantity called the Carter constant by combinations of energy and axial angular momentum. The extra independent integral is the same physical result.

## Comparison

| Property | Killing vector | Rank-two Killing tensor |
| --- | --- | --- |
| Object | Vector field $\xi^\mu$ | Symmetric tensor field $K_{\mu\nu}$ |
| Defining equation | $\nabla_{(\mu}\xi_{\nu)}=0$ | $\nabla_{(\alpha}K_{\mu\nu)}=0$ |
| Geometric role | Generates a metric-preserving flow | Encodes a quadratic integral of geodesic motion |
| Conserved scalar | $\xi^\mu\mechanical{p_\mu}$ | $K_{\mu\nu}\mechanical{p^\mu}\mechanical{p^\nu}$ |
| Dependence on momentum | Linear | Quadratic |
| Example | Rotation about an axis | The Kerr tensor associated with the Carter constant |

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $g_{\mu\nu}$ | — | Metric tensor | Component units depend on the coordinates. |
| $\mechanical{s}$ | $\unit{m}$ | Surface distance | The distance measured on the sphere. |
| $\mechanical{R}$ | $\unit{m}$ | Sphere radius | The fixed radius in the sphere example. |
| $\mechanical{\theta},\mechanical{\varphi}$ | $1$ | Angular coordinates | Polar and azimuthal angles, expressed in radians. |
| $\mechanical{t}$ | $\unit{s}$ | Time coordinate | Time in the symmetry table. |
| $\mechanical{p^\mu},\mechanical{p_\mu}$ | — | Four-momentum | Contravariant and covariant components; units depend on the coordinates and index position. |
| $\mechanical{p_x}$ | $\unit{kg\,m\,s^{-1}}$ | Cartesian momentum | Momentum along a Cartesian spatial axis. |
| $\energy{E}=-\mechanical{p_t}$ | $\unit{J}$ | Conserved energy | Energy for a suitably normalized time-translation field. |
| $\mechanical{L_z}=\mechanical{p_\varphi}$ | $\unit{kg\,m^2\,s^{-1}}$ | Axial angular momentum | Momentum associated with the azimuthal coordinate. |
| $C_\xi$ | — | Linear geodesic integral | Units depend on the Killing field and its normalization. |
| $C_K$ | — | Polynomial geodesic integral | Units depend on the Killing tensor and its normalization. |
| $C_g$ | $\unit{kg^2\,m^2\,s^{-2}}$ | Momentum norm | The metric contraction of two four-momenta in SI units. |
