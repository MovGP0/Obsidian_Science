---
title: "Arc length and parametric curves"
---

> [!TLDR]
> Compute arc length, eliminate parameters when possible, and find slopes and concavity from parametric equations.

## Worked lecture material

##### Arc length

For the graph $y=f(x)$ between $x=a$ and $x=b$, the sketch uses $\Delta y\approx f'(x)\Delta x$.

![[Kyle Kabasares - Integral Calculus - Arc length increments.png|**Fig. 12** Horizontal and vertical increments between two points on the curve.]]

$$
L=\int_a^b\sqrt{1+[f'(x)]^2}\,dx
=\int_a^b\sqrt{1+\left(\frac{dy}{dx}\right)^2}\,dx.
$$

**Example.** Find the length of the arc of $y^2=x^3$ between $(1,1)$ and $(4,8)$. On the branch containing these points, $f(x)=x^{3/2}$ and $f'(x)=\frac32x^{1/2}$.

$$
L=\int_1^4\sqrt{1+\left(\frac32x^{1/2}\right)^2}\,dx
=\int_1^4\sqrt{1+\frac94x}\,dx.
$$

Set $u=1+\frac94x$, so $du=\frac94\,dx$ and $dx=\frac49\,du$. The bounds are $u=1+\frac94=\frac{13}{4}$ at $x=1$ and $u=1+9=10$ at $x=4$.

$$
\begin{aligned}
L
&=\frac49\int_{13/4}^{10}u^{1/2}\,du\\
&=\frac49\left[\frac23u^{3/2}\right]_{13/4}^{10}\\
&=\boxed{\frac8{27}\left[10^{3/2}-\left(\frac{13}{4}\right)^{3/2}\right]}.
\end{aligned}
$$

**Example.** Find the length of the arc of $y=x^2-\frac18\ln x$ from $x=1$ to $x=3$. The endpoints on this curve are $(1,1)$ and $(3,9-\frac18\ln 3)$. The handwritten statement has a plus sign in the second endpoint's ordinate.

With $f(x)=x^2-\frac18\ln x$, we have $f'(x)=2x-\frac{1}{8x}$. Expanding the square in the arc-length integrand gives

$$
\left(2x-\frac{1}{8x}\right)^2
=4x^2-\frac12+\frac{1}{64x^2}.
$$

$$
\begin{aligned}
L&=\int_1^3\sqrt{1+\left(2x-\frac{1}{8x}\right)^2}\,dx\\
&=\int_1^3\sqrt{4x^2+\frac12+\frac{1}{64x^2}}\,dx\\
&=\int_1^3\sqrt{\left(2x+\frac{1}{8x}\right)^2}\,dx\\
&=\int_1^3\left(2x+\frac{1}{8x}\right)\,dx\\
&=\left[x^2\right]_1^3+\frac18\left[\ln|x|\right]_1^3\\
&=(9-1)+\frac18(\ln 3-\ln 1)
=\boxed{8+\frac18\ln 3}.
\end{aligned}
$$

**Example.** Find the arc length of $y=\frac13(x^2+2)^{3/2}$ from $x=0$ to $x=1$. For $f(x)=\frac13(x^2+2)^{3/2}$,

$$
f'(x)=\frac32\cdot\frac13(x^2+2)^{1/2}\cdot2x=x(x^2+2)^{1/2}.
$$

$$
\begin{aligned}
L&=\int_0^1\sqrt{1+[f'(x)]^2}\,dx\\
&=\int_0^1\sqrt{1+x^2(x^2+2)}\,dx
=\int_0^1\sqrt{1+x^4+2x^2}\,dx\\
&=\int_0^1\sqrt{(x^2+1)^2}\,dx
=\int_0^1(x^2+1)\,dx\\
&=\left[\frac{x^3}{3}+x\right]_0^1
=\frac13+1=\boxed{\frac43}.
\end{aligned}
$$

##### Parametric curves

Parametric curves can describe objects moving in two dimensions.

**Example.** Sketch the curve given by

$$
x=1+\sqrt{t},\qquad y=t^2-4t,\qquad 0\le t\le4.
$$

| $t$ | $x$ | $y$ |
| --- | --- | --- |
| $0$ | $1$ | $0$ |
| $1$ | $2$ | $-3$ |
| $4$ | $3$ | $0$ |

![[Kyle Kabasares - Integral Calculus - Parametric curve with square root.png|**Fig. 13** Handwritten sketch marking the initial point at $t=0$ and terminal point at $t=4$.]]

The terminal point has $x=3$ according to the formula and table. The sketch labels its horizontal coordinate $4$. The lowest point occurs at $t=2$, where $y=-4$.

**Example.** Sketch the curve $x=\sqrt t$, $y=1-t$. The square root requires $t\ge0$.

| $t$ | $x$ | $y$ |
| --- | --- | --- |
| $0$ | $0$ | $1$ |
| $1$ | $1$ | $0$ |
| $4$ | $2$ | $-3$ |
| $9$ | $3$ | $-8$ |

![[Kyle Kabasares - Integral Calculus - Parametric curve from square root and line.png|**Fig. 14** Sample points and arrows showing the direction of increasing $t$.]]

##### Eliminating the parameter

For $x=t-1$ and $y=4t+1$, solve $t=x+1$ and substitute.

$$
y=4(x+1)+1=\boxed{4x+5}.
$$

For $x=\sqrt{t+1}$ and $y=3t+2$, use $x^2=t+1$ and $t=x^2-1$. The square root restricts the resulting curve to $x\ge0$.

$$
y=3(x^2-1)+2=3x^2-3+2=\boxed{3x^2-1}.
$$

For $x=4e^{t/4}$ and $y=3e^t$, raise $x/4=e^{t/4}$ to the fourth power.

$$
\left(\frac{x}{4}\right)^4=(e^{t/4})^4=e^t,\qquad
\boxed{y=3\left(\frac{x}{4}\right)^4},\qquad x>0.
$$

**Example.** Given fixed radii $a$ and $b$, find parametric equations for all possible positions of $P$ in the figure, using the angle $\theta$ as the parameter.

![[Kyle Kabasares - Integral Calculus - Concentric circles for ellipse.png|**Fig. 15** A ray from the origin meets the outer circle at $Q$ and the inner circle at $R$. The point $P$ is directly below $Q$ and horizontally aligned with $R$.]]

##### Point $Q$

The right triangle has hypotenuse $a$, so $Q=(a\cos\theta,a\sin\theta)$.

![[Kyle Kabasares - Integral Calculus - Outer circle projection triangle.png|**Fig. 16** Right triangle giving the coordinates of $Q$.]]

##### Point $R$

The right triangle has hypotenuse $b$, so $R=(b\cos\theta,b\sin\theta)$.

![[Kyle Kabasares - Integral Calculus - Inner circle projection triangle.png|**Fig. 17** Right triangle giving the coordinates of $R$.]]

##### Point $P$

Take the $x$-coordinate from $Q$ and the $y$-coordinate from $R$.

![[Kyle Kabasares - Integral Calculus - Ellipse point projection.png|**Fig. 18** Construction of $P$ from the two projections, with $RQ=a-b$.]]

$$
x=a\cos\theta,\qquad y=b\sin\theta.
$$

Then $x/a=\cos\theta$ and $y/b=\sin\theta$. The identity $\sin^2\theta+\cos^2\theta=1$ gives

$$
\left(\frac{y}{b}\right)^2+\left(\frac{x}{a}\right)^2=1,
\qquad
\boxed{\frac{y^2}{b^2}+\frac{x^2}{a^2}=1}.
$$

The locus is an ellipse.

**Example.** The witch of Maria Agnesi consists of all possible positions of $P$ in the figure. Show that its parametric equations are $x=2a\cot\theta$ and $y=2a\sin^2\theta$.

![[Kyle Kabasares - Integral Calculus - Witch of Agnesi construction.png|**Fig. 19** The circle has diameter $OB=2a$. The ray from $O$ meets the circle at $A$ and the tangent $y=2a$ at $C$. The point $P$ shares the height of $A$ and the horizontal coordinate of $C$.]]

##### Point $C$

Its right triangle has height $2a$ and horizontal side $x$. Therefore $\tan\theta=2a/x$ in the illustrated configuration, giving

$$
x\tan\theta=2a,\qquad x=\frac{2a}{\tan\theta}=\boxed{2a\cot\theta}.
$$

![[Kyle Kabasares - Integral Calculus - Witch of Agnesi tangent triangle.png|**Fig. 20** Right triangle from $O$ to $C$, with hypotenuse labeled $h$.]]

##### Points $A$ and $B$

Because $OB$ is a diameter, the angle at $A$ is a right angle. The angle at $B$ in $\triangle OAB$ is $\theta$, so $OA=2a\sin\theta$ and $BA=2a\cos\theta$.

![[Kyle Kabasares - Integral Calculus - Witch of Agnesi inscribed triangle.png|**Fig. 21** The right triangle $OAB$ inscribed in the circle.]]

In the triangle projecting $A$ onto the horizontal axis, the horizontal coordinate of $A$ is $2a\sin\theta\cos\theta$. Its height is $y$, which also gives the height of $P$.

![[Kyle Kabasares - Integral Calculus - Witch of Agnesi height triangle.png|**Fig. 22** The height of $A$ is the side opposite $\theta$ in the projection triangle.]]

$$
\sin\theta=\frac{y}{2a\sin\theta},
\qquad \boxed{y=2a\sin^2\theta}.
$$

##### Derivatives of parametric functions

For $x=f(t)$ and $y=g(t)$, the tangent vector is $\bigl(dx/dt,dy/dt\bigr)$. When $dx/dt\ne0$, its slope is

$$
\frac{dy}{dx}=\frac{dy/dt}{dx/dt}.
$$

**Example.** Find the equation of the tangent line at $t=4$ for $x=3t^2-t$ and $y=\sqrt t$. Use point-slope form $y-y_1=m(x-x_1)$.

$$
x(4)=3(4)^2-4=48-4=44,\qquad y(4)=\sqrt4=2.
$$

$$
\frac{dy}{dx}
=\frac{\frac{d}{dt}(\sqrt t)}{\frac{d}{dt}(3t^2-t)}
=\frac{\frac12t^{-1/2}}{6t-1}.
$$

At $t=4$,

$$
m=\frac{1/(2\sqrt4)}{6(4)-1}
=\frac{1/4}{23}
=\frac14\cdot\frac1{23}
=\frac1{92}.
$$

The tangent line is

$$
\boxed{y-2=\frac1{92}(x-44)}.
$$

##### Second derivatives of parametric equations

Where $dx/dt\ne0$, apply the chain rule to the first derivative.

$$
\frac{d^2y}{dx^2}
=\frac{d}{dx}\left(\frac{dy}{dx}\right)
=\frac{d}{dx}\left(\frac{dy/dt}{dx/dt}\right)
=\frac{\dfrac{d}{dt}\left(\dfrac{dy}{dx}\right)}{dx/dt}.
$$

**Example.** Find $d^2y/dx^2$ for $x=t^3+t$ and $y=t^5+1$.

$$
\frac{dx}{dt}=3t^2+1,\qquad
\frac{dy}{dt}=5t^4,\qquad
\frac{dy}{dx}=\frac{5t^4}{3t^2+1}.
$$

Use the quotient rule to differentiate $dy/dx$ with respect to $t$.

$$
\frac{d}{dt}\left(\frac{5t^4}{3t^2+1}\right)
=\frac{(3t^2+1)(20t^3)-(5t^4)(6t)}{(3t^2+1)^2}.
$$

Divide by $dx/dt=3t^2+1$ to obtain

$$
\frac{d^2y}{dx^2}
=\boxed{\frac{(3t^2+1)(20t^3)-(5t^4)(6t)}{(3t^2+1)^3}}.
$$

##### Calculating areas under parametric curves

For $x=f(t)$ and $y=g(t)$, suppose $x$ increases from $a=f(\alpha)$ to $b=f(\beta)$ as $t$ runs from $\alpha$ to $\beta$. The area under the curve shown is

$$
A=\int_\alpha^\beta g(t)f'(t)\,dt=\int_a^b y\,dx.
$$

![[Kyle Kabasares - Integral Calculus - Area under a parametric curve.png|**Fig. 23** Shaded area under a parametric curve between $t=\alpha$ and $t=\beta$.]]

**Example.** Find the area under one arch of the cycloid

$$
x=r(\theta-\sin\theta),\qquad y=r(1-\cos\theta),\qquad 0\le\theta\le2\pi.
$$

![[Kyle Kabasares - Integral Calculus - Cycloid first arch area.png|**Fig. 24** The shaded cycloid arch extends from $x=0$ to $x=2\pi r$.]]

Since $r$ is constant, $dx/d\theta=r(1-\cos\theta)$. Use $\cos^2\theta=\frac12(1+\cos2\theta)$ to integrate.

$$
\begin{aligned}
A&=\int_0^{2\pi}r(1-\cos\theta)\,r(1-\cos\theta)\,d\theta\\
&=r^2\int_0^{2\pi}(1-\cos\theta)^2\,d\theta\\
&=r^2\int_0^{2\pi}(1-2\cos\theta+\cos^2\theta)\,d\theta\\
&=r^2\int_0^{2\pi}\left(\frac32-2\cos\theta+\frac{\cos2\theta}{2}\right)\,d\theta\\
&=r^2\left[\frac32\theta-2\sin\theta+\frac{\sin2\theta}{4}\right]_0^{2\pi}\\
&=r^2\left(\frac32\cdot 2\pi\right)
=\boxed{3\pi r^2}.
\end{aligned}
$$

**Example.** Find the area under the parametric curve $x=1+e^t$, $y=t-t^2$, and above the $x$-axis.

From $x-1=e^t$, we have $t=\ln(x-1)$ and

$$
y=\ln(x-1)-[\ln(x-1)]^2.
$$

At an $x$-intercept,

$$
0=\ln(x-1)[1-\ln(x-1)].
$$

Thus $\ln(x-1)=0$ or $\ln(x-1)=1$. These equations give $x-1=e^0=1$ or $x-1=e^1=e$, so the intercepts are $x=2$ and $x=e+1$. Their parameter values are $t=\ln(2-1)=0$ and $t=\ln(e+1-1)=1$. The curve is above the axis between them.

$$
\begin{aligned}
A&=\int_2^{e+1}y\,dx
=\int_0^1g(t)f'(t)\,dt\\
&=\int_0^1(t-t^2)e^t\,dt
=\int_0^1te^t\,dt-\int_0^1t^2e^t\,dt.
\end{aligned}
$$

For the first integral, use $u=t$, $du=dt$, $dv=e^t\,dt$, and $v=e^t$.

$$
\int_0^1te^t\,dt
=\left[te^t\right]_0^1-\left[e^t\right]_0^1
=(e-e)-(0-1)=1.
$$

For the second, use $u=t^2$, $du=2t\,dt$, $dv=e^t\,dt$, and $v=e^t$.

$$
\int_0^1t^2e^t\,dt
=\left[t^2e^t\right]_0^1-2\int_0^1te^t\,dt
=e-2.
$$

Therefore $A=1-(e-2)=\boxed{3-e}$.

**Example.** The parametric trajectory $C$ is given by $x=t^2$ and $y=t^3-3t$.

1. Show that $C$ has two tangents at $(3,0)$ and find their equations.
2. Find the points where the tangent is horizontal or vertical.
3. Determine where the curve is concave up or down.
4. Sketch the graph.

##### Tangents at $(3,0)$

The equation $t^2=3$ gives $t=\pm\sqrt3$. The equation $y=t(t^2-3)=0$ gives $t=0$ or $t=\pm\sqrt3$, so both values $t=\pm\sqrt3$ reach $(3,0)$.

$$
\frac{dx}{dt}=2t,\qquad
\frac{dy}{dt}=3t^2-3,\qquad
\frac{dy}{dx}=\frac{3t^2-3}{2t}.
$$

At $t=\sqrt3$, the slope is $(9-3)/(2\sqrt3)=\sqrt3$. At $t=-\sqrt3$, it is $-\sqrt3$. Substituting into the point-slope equation $y-0=m(x-3)$ gives

$$
\boxed{y=\sqrt3(x-3)}
\qquad\text{or}\qquad
\boxed{y=-\sqrt3(x-3)}.
$$

##### Horizontal tangents

Setting $dy/dx=0$ gives $3t^2-3=0$ and $t=\pm1$. In both cases $dx/dt$ is nonzero. At $t=1$, $(x,y)=(1,1-3)=(1,-2)$. At $t=-1$, $(x,y)=(1,-1-3(-1))=(1,2)$.

$$
\boxed{(1,-2)\quad\text{and}\quad(1,2)}.
$$

##### Parametric trajectory

##### Vertical tangent

The derivative $dx/dt=2t$ vanishes at $t=0$, where $dy/dt=-3$. The vertical tangent occurs at $\boxed{(0,0)}$.

##### Concavity

Differentiate the slope from [[#Tangents at $(3,0)$|the section on Tangents at $(3,0)$]] and divide by $dx/dt$.

$$
\begin{aligned}
\frac{d}{dt}\left(\frac{3t^2-3}{2t}\right)
&=\frac{(2t)(6t)-(3t^2-3)(2)}{4t^2}\\
&=\frac{12t^2-6t^2+6}{4t^2}
=\frac{6t^2+6}{4t^2}.
\end{aligned}
$$

$$
\frac{d^2y}{dx^2}
=\frac{\dfrac{d}{dt}\left(\dfrac{dy}{dx}\right)}{dx/dt}
=\frac{6t^2+6}{8t^3},\qquad t\ne0.
$$

The curve is concave up when $t>0$ and concave down when $t<0$. The transcription uses $d^2y/dx^2$ and includes the full factor of $2t$ in the denominator.

**Sketch**

| $t$ | $x$ | $y$ |
| --- | --- | --- |
| $-1$ | $1$ | $2$ |
| $0$ | $0$ | $0$ |
| $1$ | $1$ | $-2$ |
| $2$ | $4$ | $2$ |

![[Kyle Kabasares - Integral Calculus - Parametric curve with crossing and tangents.png|**Fig. 25** The trajectory passes through a vertical tangent at the origin and crosses itself at $(3,0)$.]]

## Source

Kyle Kabasares, *Calculus II - Integral Calculus (Math 22, UC Merced 2013)*.
