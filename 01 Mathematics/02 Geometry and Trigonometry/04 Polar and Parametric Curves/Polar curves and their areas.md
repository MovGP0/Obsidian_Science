---
title: "Polar curves and their areas"
---

> [!TLDR]
> Convert between Cartesian and polar descriptions, locate intersections, and integrate the swept areas.

## Worked lecture material

##### Polar coordinates

The polar pair $(r,\theta)$ and Cartesian pair $(x,y)$ are related by

$$
x=r\cos\theta,\qquad
y=r\sin\theta,\qquad
r^2=x^2+y^2,\qquad
\tan\theta=\frac{y}{x}\quad(x\ne0).
$$

![[Kyle Kabasares - Integral Calculus - Polar to Cartesian geometry.png|**Fig. 26** The right triangle relating polar and Cartesian coordinates in the first quadrant.]]

**Example.** Plot the polar pairs $(1,\pi/2)$, $(-2,\pi/4)$, and $(-1,-\pi/2)$. The first and third represent the same point on the positive $y$-axis. The negative radius in $(-2,\pi/4)$ puts the point two units from the origin on the ray opposite $\theta=\pi/4$.

![[Kyle Kabasares - Integral Calculus - Plotting negative polar radii.png|**Fig. 27** The plotted polar pairs, with the positive-radius point $(2,\pi/4)$ shown for reference.]]

**Example.** Plot $(2\sqrt2,3\pi/4)$ by converting to Cartesian coordinates.

$$
\begin{aligned}
x&=2\sqrt2\cos(3\pi/4)=2\sqrt2\left(-\frac{\sqrt2}{2}\right)=-2,\\
y&=2\sqrt2\sin(3\pi/4)=2\sqrt2\left(\frac{\sqrt2}{2}\right)=2.
\end{aligned}
$$

![[Kyle Kabasares - Integral Calculus - Cartesian point from polar form.png|**Fig. 28** The Cartesian point $(-2,2)$ in the second quadrant.]]

**Example.** Convert the Cartesian point $(-1,-\sqrt3)$ to polar form.

$$
\begin{aligned}
r^2&=x^2+y^2=(-1)^2+(-\sqrt3)^2=1+3=4,\\
\tan\theta&=\frac{y}{x}=\frac{-\sqrt3}{-1}=\sqrt3.
\end{aligned}
$$

The equation $r^2=4$ allows $r=\pm2$. With $r=2$, the point lies in the third quadrant, so use the reference angle $\arctan(\sqrt3)=\pi/3$ and add $\pi$. The resulting polar pair is $\boxed{(2,4\pi/3)}$. The choice $r=-2$ instead gives $(-2,\pi/3)$.

![[Kyle Kabasares - Integral Calculus - Polar angle in the third quadrant.png|**Fig. 29** The point with radius $2$ and angle $4\pi/3$.]]

**Example.** Graph the region $1\le r\le2$. With all angles allowed, the region is the closed annulus between circles of radii $1$ and $2$ centered at the origin.

![[Kyle Kabasares - Integral Calculus - Annulus from polar bounds.png|**Fig. 30** The shaded annulus includes both boundary circles.]]

**Example.** Graph $r=\tan\theta\sec\theta$.

$$
r=\frac{\sin\theta}{\cos\theta}\frac{1}{\cos\theta}
=\frac{\sin\theta}{\cos^2\theta},
\qquad r\cos^2\theta=\sin\theta.
$$

Multiplying by $r$ gives $(r\cos\theta)^2=r\sin\theta$. Using the Cartesian coordinates $x=r\cos\theta$ and $y=r\sin\theta$ gives $\boxed{y=x^2}$.

![[Kyle Kabasares - Integral Calculus - Parabola from polar equation.png|**Fig. 31** The polar equation traces the upward-opening parabola $y=x^2$.]]

**Example.** Graph $r=3\cos(2\theta)$. The first positive zero occurs at $2\theta=\pi/2$, or $\theta=\pi/4$. The other zeros over one revolution occur at $3\pi/4$, $5\pi/4$, and $7\pi/4$.

![[Kyle Kabasares - Integral Calculus - Cosine rose reference plot.png|**Fig. 32** Reference graph of the signed radius $r$ against $\theta$, with values between $-3$ and $3$.]]

![[Kyle Kabasares - Integral Calculus - Four petal cosine rose.png|**Fig. 33** The polar graph has four petals of length $3$ along the coordinate axes.]]

**Example.** Graph $r=7\sin(2\theta)$. The first maximum occurs at $2\theta=\pi/2$, so $\theta=\pi/4$ and $r=7$.

![[Kyle Kabasares - Integral Calculus - Sine rose reference plot.png|**Fig. 34** The reference graph of $r$ against $\theta$ over one revolution, with extrema $7$ and $-7$.]]

![[Kyle Kabasares - Integral Calculus - Four petal sine rose.png|**Fig. 35** Four petals of length $7$ along the rays $\theta=\pi/4$, $3\pi/4$, $5\pi/4$, and $7\pi/4$.]]

**Example.** Graph $r=6+4\sin\theta$. The radius is $6$ at $\theta=0,\pi,2\pi$, reaches $10$ at $\theta=\pi/2$, and reaches its minimum $2$ at $\theta=3\pi/2$.

![[Kyle Kabasares - Integral Calculus - Sine limacon reference plot.png|**Fig. 36** The reference graph marks the radius at the four cardinal angles and at $2\pi$.]]

![[Kyle Kabasares - Integral Calculus - Dimpled sine limacon.png|**Fig. 37** A dimpled limaçon symmetric about the vertical axis, with the dimple at $\theta=3\pi/2$.]]

##### Polar derivatives

For $x=r\cos\theta$ and $y=r\sin\theta$, use $\theta$ as the parameter. When $dx/d\theta\ne0$,

$$
\frac{dy}{dx}=\frac{dy/d\theta}{dx/d\theta}.
$$

**Example.** For $r=2\sin\theta$, find the horizontal and vertical tangents and the tangent line at $\theta=\pi/6$.

$$
\begin{aligned}
x&=2\sin\theta\cos\theta,
&\frac{dx}{d\theta}&=2\cos^2\theta-2\sin^2\theta,\\
y&=2\sin^2\theta,
&\frac{dy}{d\theta}&=4\sin\theta\cos\theta.
\end{aligned}
$$

$$
\frac{dy}{dx}=\frac{4\sin\theta\cos\theta}{2\cos^2\theta-2\sin^2\theta}.
$$

##### Horizontal tangents

The numerator vanishes when $\sin\theta=0$ or $\cos\theta=0$. On $0\le\theta\le2\pi$ this gives $\boxed{\theta=0,\pi,2\pi}$ or $\boxed{\theta=\pi/2,3\pi/2}$. The denominator is nonzero at these values.

##### Vertical tangents

Set $dx/d\theta=0$. Then

$$
2\cos^2\theta=2\sin^2\theta,\qquad
\cos^2\theta=1-\cos^2\theta,\qquad
\cos^2\theta=\frac12.
$$

Thus $\cos\theta=\pm\sqrt2/2$, giving

$$
\boxed{\theta=\frac{\pi}{4},\frac{3\pi}{4},\frac{5\pi}{4},\frac{7\pi}{4}}.
$$

The numerator is nonzero at all four values.

##### Tangent line

For $r=2\sin\theta$ at $\theta=\pi/6$, substitute into the slope from [[#Polar derivatives|the section on Polar derivatives]].

$$
\begin{aligned}
m
&=\frac{4\sin(\pi/6)\cos(\pi/6)}{2\cos^2(\pi/6)-2\sin^2(\pi/6)}\\
&=\frac{4(1/2)(\sqrt3/2)}{2(\sqrt3/2)^2-2(1/2)^2}
=\frac{\sqrt3}{3/2-1/2}
=\sqrt3.
\end{aligned}
$$

At that angle, the point is

$$
\begin{aligned}
x&=2\sin(\pi/6)\cos(\pi/6)=\frac{\sqrt3}{2},\\
y&=2\sin^2(\pi/6)=\frac12.
\end{aligned}
$$

In point-slope form the tangent line is $y-\frac12=\sqrt3(x-\frac{\sqrt3}{2})$. Hence

$$
y=\frac12+\sqrt3\,x-\frac32=\boxed{\sqrt3\,x-1}.
$$

##### Polar areas

A sector of radius $r$ and angle $\theta$ has area

$$
A=\frac{\theta}{2\pi}\cdot\pi r^2=\frac12r^2\theta.
$$

![[Kyle Kabasares - Integral Calculus - Circular sector for polar area.png|**Fig. 38** A sector with radius $r$ and central angle $\theta$.]]

For a region swept out once by $r=r(\theta)$ as $\theta$ runs from $a$ to $b$, the area is

$$
A=\int_a^b\frac12r(\theta)^2\,d\theta.
$$

**Example.** Find the area of one loop of $r=2\cos(2\theta)$. The first positive zero satisfies $2\theta=\pi/2$, so $\theta=\pi/4$. The right-hand petal is traced from $-\pi/4$ to $\pi/4$.

![[Kyle Kabasares - Integral Calculus - Reference plot for rose petal area.png|**Fig. 39** The reference graph of $r=2\cos(2\theta)$, with the zeros of $r$ marked on the horizontal axis.]]

![[Kyle Kabasares - Integral Calculus - Shaded rose petal.png|**Fig. 40** The handwritten sketch shades the right-hand petal. The full rose also has a petal along the positive vertical axis, omitted in this sketch.]]

$$
\begin{aligned}
A
&=\frac12\int_{-\pi/4}^{\pi/4}[2\cos(2\theta)]^2\,d\theta\\
&=2\int_{-\pi/4}^{\pi/4}\cos^2(2\theta)\,d\theta\\
&=2\int_{-\pi/4}^{\pi/4}\frac12(1+\cos4\theta)\,d\theta\\
&=\left[\theta+\frac{\sin4\theta}{4}\right]_{-\pi/4}^{\pi/4}\\
&=\left(\frac{\pi}{4}+\frac{\sin\pi}{4}\right)
-\left(-\frac{\pi}{4}+\frac{\sin(-\pi)}{4}\right)
=\boxed{\frac{\pi}{2}}.
\end{aligned}
$$

**Example.** Find the area of one petal of $r=2\sin(2\theta)$. The first-quadrant petal starts and ends at the pole as $\theta$ runs from $0$ to $\pi/2$. Its maximum radius is $2$, attained at $2\theta=\pi/2$, or $\theta=\pi/4$.

![[Kyle Kabasares - Integral Calculus - Reference plot for sine petal area.png|**Fig. 41** The reference graph marks the zeros and extrema of $r=2\sin(2\theta)$.]]

![[Kyle Kabasares - Integral Calculus - Shaded sine rose petal.png|**Fig. 42** The shaded first-quadrant petal is centered on the ray $\theta=\pi/4$.]]

$$
\begin{aligned}
A
&=\frac12\int_0^{\pi/2}(2\sin2\theta)^2\,d\theta\\
&=2\int_0^{\pi/2}\sin^2(2\theta)\,d\theta\\
&=2\int_0^{\pi/2}\frac12(1-\cos4\theta)\,d\theta\\
&=\int_0^{\pi/2}(1-\cos4\theta)\,d\theta\\
&=\left[\theta-\frac{\sin4\theta}{4}\right]_0^{\pi/2}\\
&=\left(\frac{\pi}{2}-\frac{\sin(2\pi)}{4}\right)
-\left(0-\frac{\sin 0}{4}\right)
=\boxed{\frac{\pi}{2}}.
\end{aligned}
$$

**Example.** Find the area of one loop of $r=2\cos(4\theta)$. The first positive zero satisfies $4\theta=\pi/2$, or $\theta=\pi/8$. For the upward petal, the consecutive zeros of $r$ are at $\theta=3\pi/8$ and $5\pi/8$.

![[Kyle Kabasares - Integral Calculus - Reference plot for eight petal rose.png|**Fig. 43** The reference graph of $r=2\cos(4\theta)$ from $\theta=0$ to $\theta=\pi$.]]

![[Kyle Kabasares - Integral Calculus - Eight petal rose partial sketch.png|**Fig. 44** Part of the polar curve, including the upward petal centered at $\theta=\pi/2$.]]

$$
\begin{aligned}
A
&=\frac12\int_{3\pi/8}^{5\pi/8}[2\cos(4\theta)]^2\,d\theta\\
&=\frac12\int_{3\pi/8}^{5\pi/8}4\cos^2(4\theta)\,d\theta
=2\int_{3\pi/8}^{5\pi/8}\cos^2(4\theta)\,d\theta\\
&=2\int_{3\pi/8}^{5\pi/8}\frac12(1+\cos8\theta)\,d\theta\\
&=\left[\theta+\frac{\sin8\theta}{8}\right]_{3\pi/8}^{5\pi/8}\\
&=\left(\frac{5\pi}{8}+\frac{\sin5\pi}{8}\right)
-\left(\frac{3\pi}{8}+\frac{\sin3\pi}{8}\right)\\
&=\frac{5\pi}{8}-\frac{3\pi}{8}
=\boxed{\frac{\pi}{4}}.
\end{aligned}
$$

**Example.** Find the area common to the polar curves $r=\cos\theta$ and $r=\sin(2\theta)$. The sketch shades the portions of the two right-hand rose petals inside the circle.

![[Kyle Kabasares - Integral Calculus - Reference plot for circle and rose.png|**Fig. 45** Reference graphs of the signed radii $\cos\theta$ and $\sin(2\theta)$.]]

![[Kyle Kabasares - Integral Calculus - Overlap of circle and rose.png|**Fig. 46** The common region is symmetric about the horizontal axis. The upper boundaries meet away from the pole on the ray $\theta=\pi/6$.]]

For the intersection in $0<\theta<\pi/2$,

$$
\sin(2\theta)=\cos\theta
\quad\Longrightarrow\quad
2\sin\theta\cos\theta=\cos\theta
\quad\Longrightarrow\quad
\sin\theta=\frac12
\quad\Longrightarrow\quad
\theta=\frac{\pi}{6}.
$$

In the upper half of the region, the smaller radius is $\sin(2\theta)$ from $0$ to $\pi/6$ and $\cos\theta$ from $\pi/6$ to $\pi/2$. Double the sum of the two sector integrals to include the lower half.

$$
\begin{aligned}
A
&=2\left[\frac12\int_0^{\pi/6}\sin^2(2\theta)\,d\theta
+\frac12\int_{\pi/6}^{\pi/2}\cos^2\theta\,d\theta\right]\\
&=\left[\frac{\theta}{2}-\frac{\sin4\theta}{8}\right]_0^{\pi/6}
+\left[\frac{\theta}{2}+\frac{\sin2\theta}{4}\right]_{\pi/6}^{\pi/2}\\
&=\left(\frac{\pi}{12}-\frac{\sqrt3}{16}\right)
+\left(\frac{\pi}{6}-\frac{\sqrt3}{8}\right)
=\boxed{\frac{\pi}{4}-\frac{3\sqrt3}{16}}.
\end{aligned}
$$

## Source

Kyle Kabasares, *Calculus II - Integral Calculus (Math 22, UC Merced 2013)*.
