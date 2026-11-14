---
title: "Cauchy’s theorem and integral formula problems"
---

> [!TLDR]
> Deform contours within analytic regions and use Cauchy’s integral formula to recover values and derivatives.

## Worked lecture material

##### Integration

Lectures 13 and 14 look for ways to evaluate integrals with less work by using analyticity.

##### Integration theorem 1

Suppose $f$ is continuous in a domain $D$, an open connected set. The lecture recalls the equivalent conditions.

1. The function $f$ has an antiderivative $F$ in $D$, with $F'(z)=f(z)$ throughout the domain.
2. Integrals along paths contained in $D$ are path independent. When $F$ is an antiderivative, the common value from $z_1$ to $z_2$ is $\int_{z_1}^{z_2}f(z)\,dz=F(z_2)-F(z_1)$.
3. For each closed contour $C$ in $D$, $\int_C f(z)\,dz=0$.

##### Cauchy–Goursat theorem

If $f$ is analytic on and inside a simple closed contour $C$, then $\int_C f(z)\,dz=0$. The handwritten statement ends at the integral, and the calculation on [[#Goursat's contribution|the section on Goursat's contribution]] gives its value.

##### Green's theorem

Let $D$ be a region in $\mathbb R^2$ bounded by a positively oriented simple closed contour $\Gamma$. Suppose $P$ and $Q$ are defined on a larger open set containing the region and have continuous first partial derivatives there.

![[Kyle Kabasares - Complex Variables - Positive boundary orientation in Green theorem.png|**Fig. 101** The arrows follow $\Gamma$ with $D$ on the left.]]

$$
\int_\Gamma P\,dx+Q\,dy
=\iint_D\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)\,dx\,dy.
$$

**Example.** Use Green's theorem to evaluate $\int_C y^3\,dx-x^3\,dy$, where $C$ is the positively oriented circle of radius $2$. Set $P=y^3$ and $Q=-x^3$. Then $P_y=3y^2$ and $Q_x=-3x^2$, giving

$$
\int_C y^3\,dx-x^3\,dy=-3\iint_D(x^2+y^2)\,dx\,dy.
$$

Use $x=r\cos\theta$, $y=r\sin\theta$, and $dx\,dy=r\,dr\,d\theta$ on the disk $D$.

$$
-3\int_0^{2\pi}\int_0^2 r^3\,dr\,d\theta
=-6\pi\left[\frac{r^4}{4}\right]_0^2
=-24\pi.
$$

##### Relationship to complex integrals

Let $C$ be a simple closed contour parametrized by $z(t)$, $t\in[a,b]$, with $z(a)=z(b)$.

![[Kyle Kabasares - Complex Variables - Simple closed contour with matching parameter endpoints.png|**Fig. 102** The contour is traversed counterclockwise and returns to its starting point.]]

The contour integral and component formulas are

$$
\begin{aligned}
\int_C f(z)\,dz&=\int_a^b f(z(t))z'(t)\,dt,\\
f(z)&=u(x,y)+iv(x,y),\\
z(t)&=x(t)+iy(t),\\
z'(t)&=x'(t)+iy'(t).
\end{aligned}
$$

Multiplying $f(z(t))=u(x(t),y(t))+iv(x(t),y(t))$ by $z'(t)=x'(t)+iy'(t)$ gives

$$
\int_C f(z)\,dz
=\int_a^b(ux'-vy')\,dt+i\int_a^b(vx'+uy')\,dt.
$$

The page recalls the dot product $\langle x_1,x_2\rangle\cdot\langle y_1,y_2\rangle=x_1y_1+x_2y_2$. In terms of the vector fields $\vec F_1(x,y)=\langle u,-v\rangle$ and $\vec F_2(x,y)=\langle v,u\rangle$, the two terms are

$$
\int_C\vec F_1\cdot d\vec r+i\int_C\vec F_2\cdot d\vec r.
$$

Apply Green's theorem to each line integral for the positively oriented contour $C$ and its interior $D$.

$$
\int_C f(z)\,dz
=\iint_D(-v_x-u_y)\,dx\,dy
+i\iint_D(u_x-v_y)\,dx\,dy.
$$

Both integrands vanish by the Cauchy–Riemann equations. This gives $\int_C f(z)\,dz=0$ under the regularity assumptions of Green's theorem, including continuous first partial derivatives of $u$ and $v$.

##### Goursat's contribution

The theorem holds without assuming separately that $f'$ is continuous.

**Example.** For a natural number $n>1$, $f(z)=z^{-n}$ is analytic everywhere in $\mathbb C$ except at $z=0$.

For $f(z)=z^{-n}$ with $n>1$, consider a simple closed contour whose interior excludes the origin. The notes give two ways to obtain a zero integral. The function has the antiderivative $F(z)=z^{-n+1}/(-n+1)$ away from $0$, and the Cauchy–Goursat theorem applies because $f$ is analytic on and inside this contour. Here $f'$ is continuous as well.

![[Kyle Kabasares - Complex Variables - Contour excluding the origin for a negative power.png|**Fig. 103** The loop $C$ lies away from the origin and does not enclose it.]]

##### Deformation of contours

Suppose the points where $f$ fails to be analytic all lie inside the inner contour $C_1$, and $f$ is analytic on the region between $C_1$ and $C_2$, including its boundaries. Split that region into $D_1$ and $D_2$.

![[Kyle Kabasares - Complex Variables - Splitting the region between nested contours.png|**Fig. 104** Two connecting arcs divide the shaded region between the contours into $D_1$ and $D_2$. The crosses mark points inside $C_1$.]]

By Cauchy–Goursat, the integrals around $\partial D_1$ and $\partial D_2$ each vanish. Adding them cancels the shared arcs because each is traversed in opposite directions. With $C_1$ and $C_2$ both taken counterclockwise,

$$
0=\int_{\partial D_1}f(z)\,dz+\int_{\partial D_2}f(z)\,dz
=\int_{C_2}f(z)\,dz-\int_{C_1}f(z)\,dz.
$$

Thus $\int_{C_1}f(z)\,dz=\int_{C_2}f(z)\,dz$.

##### The ML inequality

Let $C$ be a contour of length $L$ and suppose $f$ is piecewise continuous on $C$. If $|f(z)|\le M$ for all $z$ on $C$, then $\left|\int_C f(z)\,dz\right|\le ML$.

**Example 1.** Show without evaluating that for the circle $C$ given by $|z|=4$,

$$
\left|\int_C\frac{e^z}{z+1}\,dz\right|\le \frac{8\pi e^4}{3}.
$$

First find an upper bound $M$ for the modulus of the integrand.

**Example 1, continued.** On $|z|=4$, the reverse triangle inequality gives $|z+1|\ge|z|-1=3$. Also $|e^z|=e^{\operatorname{Re}z}\le e^4$, so

$$
\left|\frac{e^z}{z+1}\right|\le\frac{e^4}{3}.
$$

The circle has length $L=2\pi(4)=8\pi$. By the ML inequality,

$$
\left|\int_C\frac{e^z}{z+1}\,dz\right|\le\frac{8\pi e^4}{3}.
$$

**Cauchy–Goursat theorem**

If $f$ is analytic on and inside a simple closed curve $C$, then $\int_C f(z)\,dz=0$.

**Example 2.** Show that the integral of $\operatorname{sech}z=1/\cosh z$ around $|z|=1$ is zero. The denominator $\cosh z=(e^z+e^{-z})/2$ is entire and vanishes precisely when $e^{2z}=-1$. Write $z=x+iy$ to get

$$
-1=e^{2x}\bigl(\cos(2y)+i\sin(2y)\bigr).
$$

The imaginary part gives $\sin(2y)=0$, hence $2y=k\pi$. The real part gives $e^{2x}(-1)^k=-1$, so $x=0$ and $k$ is odd. The handwriting drops the factor of $2$ in the condition on $y$. The zeros are $z=ik\pi/2$ for odd $k$. Since their moduli are at least $\pi/2>1$, Cauchy–Goursat gives the desired zero integral.

**Discussion problem 1**

Consider $\left|\int_C z/(z-1)\,dz\right|$ for $C$ given by $|z|=3$. The notes begin with the modulus of the integrand, $|z|/|z-1|=3/|z-1|$.

##### Cauchy integral formula

##### Contour deformation

Let $C_1$ be the inner contour and $C_2$ the outer contour, with both oriented counterclockwise. The two connecting segments $L_1$ and $L_2$ divide the region between them into upper and lower pieces.

![[Kyle Kabasares - Complex Variables - Upper and lower boundaries for contour deformation.png|**Fig. 105** The upper and lower pieces each have a closed boundary. Their directions along the shared segments are opposite.]]

The upper boundary uses $L_1$, $-C_{1,\mathrm{upper}}$, $L_2$, and $C_{2,\mathrm{upper}}$. The lower boundary uses $-L_1$, $-C_{1,\mathrm{lower}}$, $-L_2$, and $C_{2,\mathrm{lower}}$. Each boundary integral is zero by Cauchy–Goursat. For example, $\int_{L_1}f(z)\,dz=-\int_{-L_1}f(z)\,dz$. Canceling both pairs of connecting segments gives

$$
0=\int_{-C_1}f(z)\,dz+\int_{C_2}f(z)\,dz
=-\int_{C_1}f(z)\,dz+\int_{C_2}f(z)\,dz.
$$

Thus $\int_{C_2}f(z)\,dz=\int_{C_1}f(z)\,dz$.

##### Several exceptional points

If $f$ is analytic on and inside $C$ apart from $z_1,z_2,z_3$, construct three small contours $C_1,C_2,C_3$ around the respective points. With all contours counterclockwise,

$$
\int_C f(z)\,dz=\int_{C_1}f(z)\,dz+\int_{C_2}f(z)\,dz+\int_{C_3}f(z)\,dz.
$$

![[Kyle Kabasares - Complex Variables - Three inner contours around exceptional points.png|**Fig. 106** The outer contour $C$ encloses three smaller contours, each around one exceptional point.]]

##### Next example

Let $f(z)=1/(z-z_0)$ for a given complex number $z_0$.

Let $C$ be a positively oriented simple closed contour containing $z_0$ in its interior. For $f(z)=1/(z-z_0)$, deform $C$ to a small circle $C_1$ of radius $R$ centered at $z_0$.

![[Kyle Kabasares - Complex Variables - Small circle centered at z0 inside an outer contour.png|**Fig. 107** The inner circle surrounds $z_0$ and lies entirely inside $C$.]]

Write $z_0=x_0+iy_0$ and parametrize the small circle by $z(\theta)=Re^{i\theta}+z_0$, $0\le\theta\le2\pi$. Then $z'(\theta)=iRe^{i\theta}$, so

$$
\int_C\frac{dz}{z-z_0}
=\int_{C_1}\frac{dz}{z-z_0}
=\int_0^{2\pi}\frac{iRe^{i\theta}}{Re^{i\theta}}\,d\theta
=2\pi i.
$$

##### Higher negative powers

For integer $n>1$, the same circle gives

$$
\int_{C_1}\frac{dz}{(z-z_0)^n}
=iR^{1-n}\int_0^{2\pi}e^{i(1-n)\theta}\,d\theta
=iR^{1-n}\left[\frac{e^{i(1-n)\theta}}{i(1-n)}\right]_0^{2\pi}
=0.
$$

The handwriting drops an overall factor $i$ in the intermediate lines. The endpoint exponential is the same at $0$ and $2\pi$, so the integral still vanishes.

**Cauchy integral formula**

Let $f$ be analytic on and inside a positively oriented simple closed contour $C$. If $z_0$ is interior to $C$, then

$$
\int_C\frac{f(z)}{z-z_0}\,dz=2\pi i f(z_0).
$$

##### Start of proof

Choose $\rho>0$ so that $C_\rho$, the circle $|z-z_0|=\rho$, lies entirely inside $C$. The integrand $f(z)/(z-z_0)$ is analytic between and on the two contours, so contour deformation gives

$$
\int_C\frac{f(z)}{z-z_0}\,dz
=\int_{C_\rho}\frac{f(z)}{z-z_0}\,dz.
$$

##### Proof of the Cauchy integral formula

By contour deformation and the integral of $1/(z-z_0)$ around $C_\rho$,

$$
\begin{aligned}
\int_C\frac{f(z)}{z-z_0}\,dz-2\pi i f(z_0)
&=\int_{C_\rho}\frac{f(z)}{z-z_0}\,dz
-f(z_0)\int_{C_\rho}\frac{dz}{z-z_0}\\
&=\int_{C_\rho}\frac{f(z)-f(z_0)}{z-z_0}\,dz.
\end{aligned}
$$

For every $\epsilon>0$, continuity at $z_0$ gives $\delta>0$ such that $|f(z)-f(z_0)|<\epsilon$ when $|z-z_0|<\delta$. Choose $\rho<\delta$ with $C_\rho$ inside $C$.

![[Kyle Kabasares - Complex Variables - Contours for the Cauchy integral formula estimate.png|**Fig. 108** The inner circle $C_\rho$ is centered at $z_0$ and both contours have positive orientation.]]

On $C_\rho$, the modulus of the difference quotient is at most $\epsilon/\rho$. The circle has length $2\pi\rho$. The estimate uses arc length $ds$ for the modulus integral, where the handwriting writes $dz$.

$$
\left|\int_{C_\rho}\frac{f(z)-f(z_0)}{z-z_0}\,dz\right|
\le\int_{C_\rho}\frac{|f(z)-f(z_0)|}{|z-z_0|}\,ds
\le\frac{\epsilon}{\rho}(2\pi\rho)=2\pi\epsilon.
$$

Because $\epsilon$ is arbitrary and the original difference is independent of $\rho$, the difference is zero.

$$
\int_C\frac{f(z)}{z-z_0}\,dz=2\pi i f(z_0).
$$

The topics are the Cauchy integral formula and the fundamental theorem of algebra. The page restates the formula for $f$ analytic on and inside a positively oriented simple closed contour $C$ and $z_0$ in its interior, with a reminder to review the proof.

A simple curve has no self-intersections. For a figure-eight path the notes suggest splitting the curve at its crossing.

![[Kyle Kabasares - Complex Variables - Figure eight split into two loops.png|**Fig. 109** The two lobes of the self-intersecting path are labeled $C_1$ and $C_2$.]]

A contour can consist of piecewise differentiable segments.

![[Kyle Kabasares - Complex Variables - Piecewise differentiable polygon contour.png|**Fig. 110** Four straight segments form a closed contour oriented counterclockwise.]]

**Example.** Let $f(z)=(z+1)^2$ and let $C$ be the counterclockwise circle centered at $1$ with radius $5$. The function $f$ is entire, and the Cauchy integral formula gives

$$
\int_C\frac{f(z)}{z-1}\,dz=2\pi i f(1)
=2\pi i(1+1)^2=\boxed{8\pi i}.
$$

![[Kyle Kabasares - Complex Variables - Circle centered at one with a distant real point.png|**Fig. 111** The sketch marks the center $1$ and the distant real point $1000$ outside the circle.]]

To verify directly, use $z(\theta)=1+5e^{i\theta}$, $0\le\theta\le2\pi$. The page questions its first parametrization calculation, which omitted the denominator. Restoring it gives $z'(\theta)/(z(\theta)-1)=i$, so

$$
\begin{aligned}
\int_C\frac{f(z)}{z-1}\,dz
&=i\int_0^{2\pi}(5e^{i\theta}+2)^2\,d\theta\\
&=i\int_0^{2\pi}(25e^{2i\theta}+20e^{i\theta}+4)\,d\theta
=8\pi i.
\end{aligned}
$$

The two nonconstant exponentials integrate to zero over the full turn.

##### Cauchy integral formula for derivatives

Suppose $f$ is analytic on and inside a positively oriented simple closed contour $C$, and $z_0$ lies inside $C$. Then

$$
\int_C\frac{f(z)}{(z-z_0)^{n+1}}\,dz
=\frac{2\pi i}{n!}f^{(n)}(z_0).
$$

**Next example**

Evaluate $\int_C e^{z^2}/(z-i)^4\,dz$ for the circle centered at $0$ of radius $2$. The numerator $f(z)=e^{z^2}$ is entire, and $i$ is inside $C$.

##### Derivative formula example

With $f(z)=e^{z^2}$ and $(z-i)^4$ in the denominator, the integral is $2\pi i f^{(3)}(i)/3!$. Compute

$$
\begin{aligned}
f'(z)&=2ze^{z^2},\\
f''(z)&=(2+4z^2)e^{z^2},\\
f^{(3)}(z)&=(12z+8z^3)e^{z^2}.
\end{aligned}
$$

Then $f^{(3)}(i)=(12i+8i^3)e^{-1}=4i/e$, so

$$
\int_C\frac{e^{z^2}}{(z-i)^4}\,dz
=\frac{2\pi i(4i)}{6e}
=\boxed{-\frac{4\pi}{3e}}.
$$

##### Lemma

If $f$ is continuous on $C$, then for each positive integer $n$ the function

$$
F_n(z)=\int_C\frac{f(w)}{(w-z)^n}\,dw
$$

is analytic for $z$ off $C$, and $F_n'(z)=nF_{n+1}(z)$. The page points to Lecture 15, page 10, for the $n=1$ case in connection with the Cauchy integral formula for derivatives.

##### How to evaluate contour integrals

1. For an open contour, parametrize $C$ and evaluate directly, or use an antiderivative when one exists on a domain containing the path.
2. For a closed contour, parametrize and evaluate directly, possibly after deforming the contour. For a simple closed contour with $f$ analytic on and inside it, Cauchy–Goursat gives zero. If there is one singular point $z_0$ inside $C$, look for a representation $\int_C g(z)/(z-z_0)^k\,dz$ with $g$ analytic on and inside $C$.

**Cauchy integral formula for derivatives**

The formula gives

$$
\int_C\frac{f(z)}{(z-z_0)^{n+1}}\,dz=\frac{2\pi i}{n!}f^{(n)}(z_0).
$$

The opening line of the page omits $i$ in this coefficient. The estimate below starts from the correct coefficient $n!/(2\pi i)$ when solving for $f^{(n)}(z_0)$. The proof of the formula shows that if $f$ is analytic in a neighborhood of $z_0$, then all derivatives $f^{(n)}(z_0)$ exist.

##### Fundamental theorem of algebra

##### Cauchy's inequality

Suppose $f$ is analytic on and inside the positively oriented circle $C_R$ of radius $R$ centered at $z_0$. Let $M_R$ be the maximum of $|f(z)|$ on $C_R$. Then

$$
|f^{(n)}(z_0)|\le\frac{n!M_R}{R^n},\qquad n=0,1,2,\ldots.
$$

![[Kyle Kabasares - Complex Variables - Circle for the Cauchy derivative estimate.png|**Fig. 112** The radius from $z_0$ to the circle is $R$.]]

Use $z(t)=z_0+Re^{it}$ for one full turn. On $C_R$, the modulus of the integrand is bounded by $M_R/R^{n+1}$, and the circle has length $2\pi R$. Thus the derivative formula and the ML inequality give

$$
|f^{(n)}(z_0)|
=\frac{n!}{2\pi}\left|\int_{C_R}\frac{f(z)}{(z-z_0)^{n+1}}\,dz\right|
\le\frac{n!}{2\pi}\frac{M_R}{R^{n+1}}\,2\pi R
=\frac{n!M_R}{R^n}.
$$

In a simply connected domain, if $f$ is analytic throughout the domain, its integral around a closed contour $C$ in that domain is zero. In the multiply connected case, let $C$ be the outer boundary and $C_j$ the inner boundaries. If $f$ is analytic on the region between them and on its boundary, then

$$
\int_C f(z)\,dz+\sum_{j=1}^n\int_{C_j}f(z)\,dz=0,
$$

where the outer boundary is counterclockwise and the inner boundaries are clockwise.

![[Kyle Kabasares - Complex Variables - Boundary orientation in a region with a hole.png|**Fig. 113** The connecting segments are traversed in both directions. The outer and inner boundaries have opposite orientations.]]

**Cauchy integral formula**

$$
f(z_0)=\frac{1}{2\pi i}\int_C\frac{f(z)}{z-z_0}\,dz,
\qquad
\int_C\frac{f(z)}{z-z_0}\,dz=2\pi i f(z_0).
$$

**Example 1.** Evaluate $\int_C dz/(z^2-z)$. Split the path into loops $C_1$ and $C_2$. The first contains neither pole. The second encloses $0$ and leaves $1$ outside.

![[Kyle Kabasares - Complex Variables - Two loops with only the larger enclosing zero.png|**Fig. 114** The small left loop is $C_1$. The larger loop $C_2$ contains the origin.]]

By Cauchy–Goursat the $C_1$ integral is zero. On $C_2$, use the numerator $f(z)=1/(z-1)$ in the Cauchy integral formula.

$$
\int_{C_2}\frac{dz}{z^2-z}
=\int_{C_2}\frac{1/(z-1)}{z-0}\,dz
=2\pi i f(0)=-2\pi i.
$$

The page also mentions partial fractions as an alternative.

**1(a).** Evaluate $\int_C \cos z/[z(z^2+8)]\,dz$ on the positively oriented square shown.

![[Kyle Kabasares - Complex Variables - Square contour with coordinates plus and minus two.png|**Fig. 115** The square has sides on $x=\pm2$ and $y=\pm2$. It encloses $0$ and leaves $\pm i\sqrt8$ outside.]]

Since $z^2+8=(z+i\sqrt8)(z-i\sqrt8)$, take $f(z)=\cos z/(z^2+8)$. The integral is $2\pi i f(0)=2\pi i/8=\pi i/4$.

**1(b).** For the same square,

$$
\int_C\frac{z}{2z+1}\,dz
=\int_C\frac{z/2}{z-(-1/2)}\,dz
=2\pi i\frac{-1/2}{2}
=-\frac{\pi i}{2}.
$$

**2.** On the positively oriented circle $|z-i|=2$, the pole at $2i$ lies inside and the pole at $-2i$ lies outside. Therefore

$$
\int_C\frac{dz}{z^2+4}
=\int_C\frac{1/(z+2i)}{z-2i}\,dz
=2\pi i\frac{1}{4i}
=\frac{\pi}{2}.
$$

**3(a).** The notes conclude that the contour integral is zero because neither singular point lies inside $C$. The displayed denominator is $z^2+2z+2$, which factors as $(z+1+i)(z+1-i)$ and has roots $-1\pm i$. The handwritten factors are $(z-1+i)(z-1-i)$, which instead correspond to $z^2-2z+2$.

**3(b).** The next exercise sets up $\int_C \sin z/\cos z\,dz$.

The page lists exam 2 for April 20 and a guest speaker for April 8 at 10 a.m.

The lecture recalls the Cauchy integral formula and its derivative version. For $f$ analytic on and inside a positively oriented simple closed contour $C$ and $z_0$ in its interior,

$$
\int_C\frac{f(z)}{z-z_0}\,dz=2\pi i f(z_0),\qquad
\int_C\frac{f(z)}{(z-z_0)^{k+1}}\,dz
=\frac{2\pi i}{k!}f^{(k)}(z_0).
$$

Analyticity in a neighborhood of $z_0$ implies that all derivatives exist there. The notes mark a question about $C^\infty$ for office hours.

For the circle $C_R$ parametrized by $z(\theta)=z_0+Re^{i\theta}$, let $M_R=\max_{z\in C_R}|f(z)|$. The derivative formula gives the bound $|f^{(n)}(z_0)|\le n!M_R/R^n$ for $n=0,1,\ldots$.

![[Kyle Kabasares - Complex Variables - Radius R for the derivative bound.png|**Fig. 116** The circle used in the estimate has center $z_0$ and radius $R$.]]

![[Kyle Kabasares - Complex Variables - Maximum on a closed real interval.png|**Fig. 117** The extreme value theorem is illustrated by a continuous graph with a marked maximum on $[a,b]$.]]

**Example.** Let $f$ be entire with $|f(z)|\le A|z|$ for a fixed positive real $A$. The claimed form is $f(z)=a_1z$, with $a_1\in\mathbb C$ and $|a_1|\le A$.

On $C_R$ the triangle inequality gives

$$
|f(z(\theta))|\le A|z_0+Re^{i\theta}|\le A(|z_0|+R).
$$

Using Cauchy's inequality at the center $z_0$ gives

$$
|f^{(n)}(z_0)|\le\frac{n!M_R}{R^n}
\le\frac{n!A(|z_0|+R)}{R^n}.
$$

Since $R$ can grow arbitrarily large, $f^{(n)}(z_0)=0$ for $n\ge2$.

##### Linear growth example

Since $f''(z_0)=0$ for every $z_0$, $f$ is affine. The bound $|f(z)|\le A|z|$ gives $f(0)=0$, so $f(z)=a_1z$.

##### Gauss's mean value theorem

Suppose $f$ is analytic in a simply connected domain $D$ containing the circle $C_R$ given by $|z-z_0|=R$. Then

$$
f(z_0)=\frac{1}{2\pi}\int_0^{2\pi} f(z_0+Re^{i\theta})\,d\theta.
$$

![[Kyle Kabasares - Complex Variables - Disk within the mean value theorem domain.png|**Fig. 118** The circle of radius $R$ centered at $z_0$ and the disk it encloses lie inside $D$.]]

For the proof, put $z=z_0+Re^{i\theta}$ in Cauchy's formula. The factor $Re^{i\theta}$ cancels and the factor $i$ cancels with the one in the prefactor.

$$
\begin{aligned}
f(z_0)
&=\frac{1}{2\pi i}\int_{C_R}\frac{f(z)}{z-z_0}\,dz\\
&=\frac{1}{2\pi i}\int_0^{2\pi}
\frac{f(z_0+Re^{i\theta})}{Re^{i\theta}}\,iRe^{i\theta}\,d\theta
=\frac{1}{2\pi}\int_0^{2\pi}f(z_0+Re^{i\theta})\,d\theta.
\end{aligned}
$$

**Example.** Find the average of $u(x,y)=x^2-y^2-x$ on the circle centered at $(0,1)$ with radius $2$. The function satisfies $u_{xx}+u_{yy}=0$ and is the real part of $f(z)=z^2-z$, whose imaginary part is $v(x,y)=2xy-y$.

![[Kyle Kabasares - Complex Variables - Mean value example circle centered at i.png|**Fig. 119** The example averages values on the circle of radius $2$ around $i$.]]

Taking real and imaginary parts of the formula separately gives

$$
\begin{aligned}
u(z_0)&=\frac{1}{2\pi}\int_0^{2\pi}u(z_0+Re^{i\theta})\,d\theta,\\
v(z_0)&=\frac{1}{2\pi}\int_0^{2\pi}v(z_0+Re^{i\theta})\,d\theta.
\end{aligned}
$$

The requested average is $u(0,1)=-1$. The handwritten line expanding $f=u+iv$ omits $i$ before the second integral.

##### Liouville's theorem

Every bounded entire function is constant. If $|f(z)|\le M$ everywhere, Cauchy's inequality for $n=1$ gives $|f'(z_0)|\le M_R/R\le M/R$.

**Fundamental theorem of algebra**

The page introduces the problem of proving that a polynomial of positive degree has a root.

## Source

Kyle Kabasares, *Complex Variables and Applications (Math 122, UC Merced 2016)*.
