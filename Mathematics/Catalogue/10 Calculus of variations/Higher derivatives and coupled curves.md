---
title: "Higher derivatives and coupled curves"
catalogue_ids:
  - "10.3.4"
  - "10.3.5"
  - "10.3.6"
---

> [!TLDR]
> Repeated integration by parts handles higher derivatives, componentwise variation handles several unknowns, and a parameter can describe curves that are not graphs.

## When the integrand uses curvature-like information

The method in [[Functionals and stationary curves]] extends beyond a single derivative. Consider

$$
J[y]=\int_a^bF(x,y,y',y'')\,dx.
$$

Here the second derivative $y''$ measures how the slope changes. Use independent slots $z,p,q$ for the value, first derivative, and second derivative. Assume enough smoothness for the displayed derivatives to exist; for the classical example below, $y$ is $C^4$ and the integrand is smooth.

The first variation is $\int(F_z\eta+F_p\eta'+F_q\eta'')dx$. Integrate the last term by parts twice and the middle term once:

$$
\delta J=
\int_a^b\left(F_z-\frac{d}{dx}F_p+\frac{d^2}{dx^2}F_q\right)\eta\,dx
+\left[\left(F_p-\frac{dF_q}{dx}\right)\eta+F_q\eta'\right]_a^b.
$$

Thus the interior equation is $F_z-dF_p/dx+d^2F_q/dx^2=0$. The signs alternate because each integration by parts introduces a minus sign. For dependence through the $r$th derivative, the general interior expression is $\sum_{k=0}^r(-1)^k(d/dx)^kF_{y^{(k)}}=0$.

Boundary conditions require care. If $y$ and $y'$ are prescribed at both ends, then both $\eta$ and $\eta'$ vanish there. If only $y$ is prescribed, $\eta'$ is free and the natural condition is $F_q=0$ at that end. If both are free, the two independent coefficients must vanish. This explains why a fourth-order equation usually needs four independent boundary data rather than two.

## Worked example: the cubic with fixed endpoint slopes

Minimize $J[y]=\int_0^1y''^2dx$ with $y(0)=0$, $y(1)=1$, and $y'(0)=y'(1)=0$. The equation is $2y^{(4)}=0$, so $y=ax^3+bx^2+cx+d$. The conditions give $c=d=0$, $a+b=1$, $3a+2b=0$. Solving yields

$$
y_*(x)=3x^2-2x^3,\qquad J[y_*]=\int_0^1(6-12x)^2dx=12.
$$

For a competitor $y_*+h$, both $h$ and $h'$ vanish at the endpoints. Integrate $\int y_*''h''$ twice: the boundary terms vanish, and the remaining integral contains $y_*^{(4)}=0$. Thus the exact cost difference is $\int_0^1h''^2dx\geq0$. Equality makes $h$ affine; the zero boundary data force $h=0$. The cubic is the unique global minimizer for the stated class.

If endpoint slopes were not fixed, the natural conditions would be $y''(0)=y''(1)=0$, and the line $y=x$ would have cost zero. Reusing the cubic after changing the allowed boundary data would solve the wrong problem.

## Several unknown functions

Let $\mathbf y=(y_1,\ldots,y_m)$ be $m$ unknown functions of one variable. The integrand can couple their values and slopes. Vary each component independently with the others held fixed. Stationarity gives one equation per component:

$$
F_{y_i}-\frac{d}{dx}F_{y_i'}=0,
\qquad i=1,\ldots,m.
$$

The number of unknown functions is different from the number of independent coordinates. Two unknown functions $u(t),v(t)$ still have one independent coordinate $t$. A scalar field $u(x_1,x_2)$ has two independent coordinates and is treated in [[Fields of several variables]].

For a concrete coupled example, minimize

$$
J[u,v]=\int_0^1\left(u'^2+v'^2+(u-v)^2\right)dt
$$

with $u(0)=v(0)=0$, $u(1)=v(1)=1$. Its equations are $u''=u-v$ and $v''=v-u$. Adding gives $(u+v)''=0$, while subtracting gives $(u-v)''=2(u-v)$. The first combination is $u+v=2t$. The second has zero endpoint values. Multiply its equation by $u-v$ and integrate by parts to get $-\int((u-v)')^2=2\int(u-v)^2$, so it must vanish. Thus $u=v=t$. Expansion around this pair leaves a sum of three square integrals, which proves the minimum and uniqueness.

## Parametric form and the choice of parameter

A plane curve need not be the graph of a single-valued $y(x)$. Describe it instead by two functions $\mathbf r(t)=(x(t),y(t))$. Its length is

$$
L[\mathbf r]=\int_\alpha^\beta\sqrt{\dot x^2+\dot y^2}\,dt,
$$

where dots mean derivatives with respect to the mathematical parameter $t$. Here $t$ has no physical meaning. Assume a regular curve: $\sqrt{\dot x^2+\dot y^2}>0$. This excludes a zero denominator in the equations. Componentwise Euler–Lagrange equations give

$$
\frac{d}{dt}\left(\frac{\dot x}{|\dot{\mathbf r}|}\right)=0,
\qquad
\frac{d}{dt}\left(\frac{\dot y}{|\dot{\mathbf r}|}\right)=0.
$$

The unit tangent is constant, so the stationary trace is straight. The speed along it need not be constant. Length is unchanged by a smooth increasing reparametrization that traverses the same curve once. This produces several descriptions of the same geometric path, not several distinct shortest traces. Fixing a constant-speed parameter removes this freedom for a segment. For $(0,0)$ to $(3,4)$, the curve $(3t,4t)$ on $[0,1]$ has length $5$; $(3\phi(t),4\phi(t))$ has the same length if $\phi$ increases from $0$ to $1$ with positive derivative.

## Practice

1. Derive the natural boundary conditions for $\int_0^1y''^2dx$ when the values of $y$ are fixed and both endpoint slopes are free.
2. Evaluate the length of $\mathbf r(t)=(6t,8t)$ on $[0,1]$. What changes for $\mathbf r(t)=(6t^2,8t^2)$?

### Worked answers

1. $F_q=2y''$, so the independent endpoint values of $\eta'$ require $y''(0)=y''(1)=0$. The equation $y^{(4)}=0$ plus those conditions makes the stationary cubic affine. The two prescribed endpoint values then determine its line.
2. The first speed is $\sqrt{36+64}=10$, so the length is $10$. For the second, the speed is $20t$ on $[0,1]$ and the integral is again $10$. The second parametrization stops at $t=0$, so it is not regular at that endpoint; the integral is valid, but the normalized-tangent equation is used only where speed is nonzero.
