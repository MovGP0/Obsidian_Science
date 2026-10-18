---
title: "Integral applications"
catalogue_ids:
  - "8.2.2"
  - "8.2.2.1"
  - "8.2.2.2"
  - "8.2.2.3"
---

> [!TLDR]
> Build an integral by deriving the contribution of a small piece, then add those pieces over the full domain.

## The small-piece principle

Read [[Definite integrals and accumulation]]. To construct an integral, identify the desired total, choose a variable, derive a small contribution, and find the full range of that variable. The resulting integral is justified when the approximation errors vanish as the pieces become small. A familiar-looking formula without a domain or element is not a complete setup.

For instance, a strip between graphs $y=f(x)$ and $y=g(x)$ has approximate area $|f(x)-g(x)|\Delta x$. Therefore total area is $\int_a^b|f-g|\,dx$. If the graphs cross, split the interval at their intersections and choose the upper function on each piece. An integral of $f-g$ without absolute value instead gives signed area.

## Geometry: area, volume, and arc length

Take $f(x)=x$ and $g(x)=x^2$ from $0$ to $1$. Since $x\ge x^2$ there, the enclosed area is

$$
A=\int_0^1(x-x^2)\,dx=\left[\frac{x^2}{2}-\frac{x^3}{3}\right]_0^1=\frac16.
$$

A slice of a solid at coordinate $x$ with cross-sectional area $B(x)$ has volume approximately $B(x)\Delta x$. Thus its volume is $V=\int_a^b B(x)\,dx$. For a graph $y=f(x)\ge0$ revolved about the $x$ axis, a slice is a disk, so $B(x)=\pi f(x)^2$. If a region between nonnegative graphs revolves, subtract the inner disk: $B=\pi(R^2-r^2)$, not $\pi(R-r)^2$.

Revolve $y=x$ above the $x$ axis over $0\le x\le2$. Then $V=\pi\int_0^2x^2\,dx=8\pi/3$. Alternatively, cylindrical shells have radius $y$, circumference $2\pi y$, and horizontal width $2-y$. They give $V=2\pi\int_0^2 y(2-y)\,dy=8\pi/3$. Two different decompositions agree.

For a differentiable graph $y=f(x)$, a small segment has length approximately $\sqrt{1+f'(x)^2}\Delta x$ by Pythagoras. If $f'$ is continuous, its arc length is

$$
L=\int_a^b\sqrt{1+f'(x)^2}\,dx.
$$

For $y=x^{3/2}$ on $[0,4]$, the integrand is $\sqrt{1+9x/4}$. Substitute $u=1+9x/4$ to get $L=\tfrac8{27}(10\sqrt{10}-1)$. The straight-line endpoint distance is $\sqrt{4^2+8^2}=\sqrt{80}$, which is smaller as required.

The mean coordinate of a uniform flat region under $f\ge0$ is $\overline x=\int_a^b x f(x)\,dx/\int_a^b f(x)\,dx$. The numerator weights each strip's coordinate by its area. For $f(x)=x$ on $[0,1]$, $\overline x=(1/3)/(1/2)=2/3$. It is closer to the wider end of the triangle.

## Mechanics and physics: accumulate a rate

Here the mathematical construction gains units. A one-dimensional position $\mechanical{x}(\mechanical{t})$ with continuous velocity $\mechanical{v}=d\mechanical{x}/d\mechanical{t}$ satisfies

$$
\Delta\mechanical{x}=\int_{\mechanical{t}_0}^{\mechanical{t}_1}\mechanical{v}(\mechanical{t})\,d\mechanical{t}.
$$

This gives signed displacement. Distance traveled is the integral of $|\mechanical{v}|$. For $\mechanical{v}(\mechanical{t})=\mechanical{a}(\mechanical{t}-\mechanical{T})$, with $\mechanical{a}=\quantity{2}{m\,s^{-2}}$ and $\mechanical{T}=\quantity{1}{s}$, over $0\le\mechanical{t}\le2\mechanical{T}$, the negative and positive parts cancel. Displacement is zero; distance is $\mechanical{a}\mechanical{T}^2=\quantity{2}{m}$. The zero at $\mechanical{t}=\mechanical{T}$ marks the reversal.

Likewise a variable force parallel to a displacement gives work $\energy{W}=\int\mechanical{F}(\mechanical{x})\,d\mechanical{x}$. If a linear restoring element requires an applied force $\mechanical{F}=\mechanical{k}\mechanical{x}$ during slow extension from zero to $\mechanical{X}$, then $\energy{W}=\mechanical{k}\mechanical{X}^2/2$. For $\mechanical{k}=\quantity{10}{N\,m^{-1}}$ and $\mechanical{X}=\quantity{0.2}{m}$, work is $\quantity{0.2}{J}$. This example assumes one-dimensional motion and the stated force law; applying it to a varying direction needs a directed line integral. [MIT's calculus text](https://www-math.mit.edu/~djk/18_01/chapter21/section01.html) develops integration as accumulation.

## Errors to avoid

Distinguish a total from an average, a signed total from a nonnegative total, and a cross-sectional area from a radius. Keep units consistent in applications. A variable bound must describe the actual region, not just the interval where a formula is easiest to integrate.

## Practice

1. Find the area between $y=2x$ and $y=x^2$ over their bounded region.
2. Find the volume when $y=\sqrt{x}$ on $[0,4]$ is revolved about the $x$ axis.

## Worked answers

1. Solve $2x=x^2$ to find intersections $0,2$. The line is above the parabola between them. The area is $\int_0^2(2x-x^2)\,dx=4-8/3=4/3$.
2. A disk has radius $\sqrt{x}$ and area $\pi x$. Hence $V=\pi\int_0^4x\,dx=8\pi$. Integrating $\pi\sqrt{x}$ would omit the radius square.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x},\Delta\mechanical{x},\mechanical{X}$ | $\unit{m}$ | Position and displacement | Coordinate, its change, and final extension. |
| $\mechanical{t},\mechanical{t}_0,\mechanical{t}_1,\mechanical{T}$ | $\unit{s}$ | Time | Integration variable, endpoints, and reversal time. |
| $\mechanical{v}$ | $\unit{m\,s^{-1}}$ | Velocity | Signed rate of position change. |
| $\mechanical{a}$ | $\unit{m\,s^{-2}}$ | Acceleration | Constant slope of velocity in the example. |
| $\mechanical{F}$ | $\unit{N}$ | Force | Applied force along the extension. |
| $\mechanical{k}$ | $\unit{N\,m^{-1}}$ | Stiffness | Force per extension in the assumed law. |
| $\energy{W}$ | $\unit{J}$ | Work | Integral of applied force over extension. |
