---
title: "Plane curves tangents and curvature"
catalogue_ids:
  - "3.6"
  - "3.6.1"
  - "3.6.1.1"
  - "3.6.1.2"
  - "3.6.1.3"
  - "3.6.1.4"
---

> [!TLDR]
> Derivatives describe a curve near a point: its tangent gives direction, and its curvature measures the change of that direction with distance.

## Prerequisites and curve definitions

Start with [[Plane coordinates and point constructions]], [[07.03 The derivative]], and [[07.05 Elementary derivatives]]. The derivative $f'(a)$ is the limit of the slope between $(a,f(a))$ and a nearby graph point. It measures local change; a second derivative differentiates that slope. For a vector-valued function, differentiate each coordinate separately. No physical interpretation is required.

A parametrized plane curve is $r(t)=(x(t),y(t))$ on an interval. Its **trace** is the set of points it visits. Two parametrizations can have the same trace but different rates or directions of traversal. For example $(\cos t,\sin t)$ and $(\cos2t,\sin2t)$ trace the unit circle with different parameter rates. The curve is **regular** where $r'(t)\ne0$. At such points the derivative determines a tangent direction.

An implicit curve $F(x,y)=0$ is locally regular when $F$ has continuous first derivatives and its gradient $(F_x,F_y)$ is nonzero. A partial derivative differentiates with respect to one input while holding the other fixed; see [[12.02 Partial derivatives]]. The gradient is normal to the level curve because differentiating $F(x(t),y(t))=0$ gives $F_xx'+F_yy'=0$. A vanishing gradient needs separate analysis and does not by itself prove that the geometric set is singular.

## Local elements: tangent, normal, and arc length

At $t=t_0$, the tangent line is $r(t_0)+\lambda r'(t_0)$, and a normal direction is $(-y'(t_0),x'(t_0))$. This avoids division by $x'$, so it includes vertical tangents. Where $x'\ne0$, the graph slope is $dy/dx=y'/x'$. The unit tangent is $T=r'/v$, where $v=\sqrt{x'^2+y'^2}>0$ is the rate of arc-length change.

Arc length between parameter values $a,b$ is

$$
L=\int_a^b\sqrt{x'(t)^2+y'(t)^2}\,dt.
$$

The integral adds the lengths of increasingly small displacements; [[08.01 Definite integrals]] gives the foundation. Locally define accumulated length $s$ so that $ds/dt=v$. Then $d/ds=(1/v)d/dt$. This converts an arbitrary parameter into actual distance along the curve.

## Curvature and the osculating circle

Take the left unit normal $N=(-T_y,T_x)$. The **signed curvature** $\kappa_s$ satisfies $dT/ds=\kappa_sN$. The sign records whether the oriented tangent turns left or right. Differentiating the normalized tangent gives

$$
\kappa_s=\frac{x'y''-y'x''}{(x'^2+y'^2)^{3/2}},
\qquad \kappa=|\kappa_s|.
$$

For a graph $y=f(x)$ traversed toward increasing $x$, it becomes $\kappa_s=f''/(1+f'^2)^{3/2}$. A circle of radius $R$ has $\kappa=1/R$, which motivates the radius of curvature $1/\kappa$ for nonzero curvature. The osculating circle matches position, tangent, and curvature at a point. Its center is $r+N/\kappa_s$. A straight line has zero curvature and no finite curvature center. The signed convention agrees with [Tumarkin's plane-curve notes](https://www.maths.dur.ac.uk/users/pavel.tumarkin/past/fall16/DG/outline_term1_3.pdf).

## Special points and asymptotes

A horizontal tangent to a graph has $f'=0$. A local maximum or minimum requires further sign information: $f''<0$ or $f''>0$ is sufficient at a stationary point, but $f''=0$ is inconclusive. An inflection in the sign-change sense occurs where the curve changes bending direction; $y=x^3$ does this at zero, whereas $y=x^4$ has zero curvature there without changing its sign. Some differential-geometry texts use “inflection” for any zero-curvature point; specify the convention.

A cusp or crossing can defeat a single regular parametrization. For $(x,y)=(t^2,t^3)$ both first derivatives vanish at $t=0$, and the trace has a cusp. The equation $y^2=x^2$ instead describes two crossing lines. A zero derivative can also be a bad parameter choice: $(t^3,0)$ still traces a smooth straight line. Inspect the trace as well as the formula.

An asymptote is a line approached in a limiting sense. For a graph as $x\to\infty$, a nonvertical asymptote $y=mx+b$ satisfies $f(x)-(mx+b)\to0$. When the limits exist, first find $m=\lim f(x)/x$ and then $b=\lim(f(x)-mx)$. For $f=x+1/x$, the asymptote at large $|x|$ is $y=x$, while $x=0$ is a vertical asymptote. An asymptote need not remain disjoint from the curve.

## Worked analysis of a curve

For $y=x^3-3x$, the domain is all real numbers, and the function is odd. Zeros are $0,\pm\sqrt3$. Its derivative is $3x^2-3$, so stationary points occur at $x=\pm1$. The second derivative $6x$ makes $(-1,2)$ a local maximum and $(1,-2)$ a local minimum. At zero, the second derivative changes sign, so the origin is an inflection. The tangent there is $y=-3x$.

At $x=1$, the slope is zero and signed curvature is $6$. Thus the curvature radius is $1/6$ and the curvature center is $(1,-2+1/6)=(1,-11/6)$. The very small circle reflects tight local bending near the minimum. It is not a global approximation to the entire cubic. The polynomial has no straight-line asymptote because its cubic term dominates every linear expression.

## Practice

1. Find tangent and curvature of $r(t)=(2\cos t,2\sin t)$ at $t=0$.
2. For $y=x^4$, decide whether zero is stationary and whether bending changes sign there.

## Worked answers

1. At zero, $r=(2,0)$ and $r'=(0,2)$, so the tangent is $x=2$. The numerator of signed curvature is $4$ and the denominator is $8$, giving $\kappa_s=1/2$ and radius $2$.
2. The derivative $4x^3$ vanishes at zero; it changes from negative to positive, so zero is a minimum. The second derivative $12x^2$ is nonnegative on both sides. Curvature vanishes at zero, but bending does not change sign.
