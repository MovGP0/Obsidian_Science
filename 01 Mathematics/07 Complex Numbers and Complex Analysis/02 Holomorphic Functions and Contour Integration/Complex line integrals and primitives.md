---
title: "Complex line integrals and primitives"
---

> [!TLDR]
> Parametrize contours, compare paths, bound integrals by length, and use antiderivatives where a single-valued primitive exists.

## Worked lecture material

##### Integration

The goal is to define $\int_C f(z)\,dz$ for a complex-valued function of a complex variable.

![[Kyle Kabasares - Complex Variables - Oriented closed integration contour.png|**Fig. 62** Arrows mark the direction of traversal around a closed contour $C$ in the complex plane.]]

First consider a parametrized curve $w(t)=u(t)+iv(t)$, with real parameter $a\le t\le b$. Integrate the real and imaginary parts separately:

$$
\int_a^b w(t)\,dt
=\int_a^b\bigl(u(t)+iv(t)\bigr)\,dt
=\int_a^b u(t)\,dt+i\int_a^b v(t)\,dt.
$$

**Example**

$$
\begin{aligned}
\int_0^{\pi/4}e^{it}\,dt
&=\int_0^{\pi/4}\cos t\,dt+i\int_0^{\pi/4}\sin t\,dt\\
&=\left[\sin t\right]_0^{\pi/4}
+i\left[-\cos t\right]_0^{\pi/4}\\
&=\frac{1}{\sqrt2}+i\left(1-\frac{1}{\sqrt2}\right).
\end{aligned}
$$

##### Moduli of integrals

When $a\le b$ and the integrals exist,

$$
\left|\int_a^b w(t)\,dt\right|\le\int_a^b|w(t)|\,dt.
$$

##### Proof of the modulus inequality

If $\int_a^b w(t)\,dt=0$, the inequality holds because the right-hand side is nonnegative. Otherwise write

$$
\int_a^b w(t)\,dt=r_0e^{i\theta_0},\qquad r_0>0.
$$

Multiplying by $e^{-i\theta_0}$ gives the real number $r_0$. Move the constant inside the integral and take real parts:

$$
r_0=\operatorname{Re}\left(\int_a^b e^{-i\theta_0}w(t)\,dt\right)
=\int_a^b\operatorname{Re}\bigl(e^{-i\theta_0}w(t)\bigr)\,dt.
$$

Since $|e^{-i\theta_0}|=\sqrt{\cos^2\theta_0+\sin^2\theta_0}=1$,

$$
\operatorname{Re}\bigl(e^{-i\theta_0}w(t)\bigr)
\le\bigl|e^{-i\theta_0}w(t)\bigr|
=|w(t)|.
$$

Integrating gives $\left|\int_a^b w(t)\,dt\right|=r_0\le\int_a^b|w(t)|\,dt$.

##### Contour integrals

For a contour $C$ parametrized by a differentiable $z(t)$ with $a\le t\le b$,

$$
\boxed{\int_C f(z)\,dz=\int_a^b f(z(t))z'(t)\,dt.}
$$

![[Kyle Kabasares - Complex Variables - Parametrized contour and endpoints.png|**Fig. 63** The sketch labels the endpoints of $C$ by their parameter values $a$ and $b$.]]

The next example asks for $\int_C f(z)\,dz$ when $f(z)=\bar z$.

**Example.** Integrate $f(z)=\bar z$ along the contour $z(t)=2e^{it}$ for $-\pi/2\le t\le\pi/2$.

![[Kyle Kabasares - Complex Variables - Counterclockwise right semicircle of radius two.png|**Fig. 64** The right semicircle is traversed from $-2i$ through $2$ to $2i$.]]

If $z(t)=x(t)+iy(t)$ has differentiable components, then $z'(t)=x'(t)+iy'(t)$. Here $z(t)=2(\cos t+i\sin t)$, so $z'(t)=2ie^{it}$ and $\overline{z(t)}=2e^{-it}$. Thus

$$
\begin{aligned}
\int_C\bar z\,dz
&=\int_{-\pi/2}^{\pi/2}\overline{z(t)}z'(t)\,dt\\
&=\int_{-\pi/2}^{\pi/2}(2e^{-it})(2ie^{it})\,dt
=4i\int_{-\pi/2}^{\pi/2}dt
=4\pi i.
\end{aligned}
$$

##### Properties of contour integrals

1. Integration is additive in the integrand, so $\int_C(f(z)+g(z))\,dz=\int_C f(z)\,dz+\int_C g(z)\,dz$.
2. Reversing the direction gives $\int_C f(z)\,dz=-\int_{-C}f(z)\,dz$.

![[Kyle Kabasares - Complex Variables - A contour and its reverse.png|**Fig. 65** The paths $C$ and $-C$ trace the same curve in opposite directions.]]

3. If $C$ is formed by following $C_1$ and then $C_2$, then $\int_C f(z)\,dz=\int_{C_1}f(z)\,dz+\int_{C_2}f(z)\,dz$.

**Example.** Evaluate $\int_C f(z)\,dz$ for

$$
f(x+iy)=
\begin{cases}
1,&y<0,\\
4y,&y\ge0,
\end{cases}
$$

where $C$ is the arc of $y=x^3$ from $-1-i$ to $1+i$.

![[Kyle Kabasares - Complex Variables - Cubic contour through the origin.png|**Fig. 66** The arrows point from $-1-i$ toward $1+i$ through the origin, where the definition of the integrand changes.]]

Take $x(t)=t$ and $y(t)=t^3$ for $-1\le t\le1$. Then $z(t)=t+it^3$ and $z'(t)=1+3it^2$. Split the integral at $t=0$.

$$
\int_C f(z)\,dz
=\int_{-1}^0(1+3it^2)\,dt
+\int_0^1 4t^3(1+3it^2)\,dt.
$$

The first part is $\left[t+it^3\right]_{-1}^0=1+i$. The second is

$$
\int_0^1(4t^3+12it^5)\,dt
=\left[t^4+2it^6\right]_0^1
=1+2i.
$$

Adding the two parts gives $\boxed{2+3i}$.

##### Elementary functions

For $z=x+iy$, $e^z=e^xe^{iy}=e^x(\cos y+i\sin y)$. The final expression on the handwritten opening line drops the factor $e^x$.

- The complex exponential can take negative real values. For instance, $e^{i(2n+1)\pi}=-1$ for $n\in\mathbb Z$.
- It is periodic because $e^{z+2\pi i}=e^ze^{2\pi i}=e^z$.

**Example 1.** Solve $e^z=1+i$. The polar form $1+i=\sqrt2\,e^{i\pi/4}$ gives $x=\ln\sqrt2=\frac12\ln2$ and $y=(2n+\frac14)\pi$. Hence

$$
z=\frac12\ln2+\left(2n+\frac14\right)\pi i,\qquad n\in\mathbb Z.
$$

##### Logarithm

The multivalued logarithm is $\log z=\ln|z|+i\arg z$. The analytic principal branch is $\operatorname{Log}z=\ln r+i\Theta$ for $r>0$ and $-\pi<\Theta<\pi$.

![[Kyle Kabasares - Complex Variables - Approaching the principal branch cut from both sides.png|**Fig. 67** The same point on the dashed cut can be approached from above or below, giving limiting angles $\pi$ and $-\pi$.]]

More generally, selecting $\alpha<\theta<\alpha+2\pi$ with $r>0$ gives a single-valued branch $\ln r+i\theta$.

**Example.** Show that $\operatorname{Log}(i^3)\ne3\operatorname{Log}(i)$. Since $i^3=-i$, the two sides are

$$
\operatorname{Log}(i^3)=\ln1-\frac{\pi i}{2}=-\frac{\pi i}{2},
\qquad
3\operatorname{Log}(i)=3\left(\ln1+\frac{\pi i}{2}\right)=\frac{3\pi i}{2}.
$$

![[Kyle Kabasares - Complex Variables - Arguments at the four unit axis points.png|**Fig. 68** The axis diagram marks the angles $\pi/2$ at $i$ and $-\pi/2$ at $-i$ used in the example.]]

**Contour integrals**

Use $\int_C f(z)\,dz$ for an integral along a specified contour. If the integral is independent of the path, it can be written $\int_{z_1}^{z_2}f(z)\,dz$ using the endpoints alone. For a parametrization $z=z(t)$ on $a\le t\le b$,

$$
\int_C f(z)\,dz=\int_a^b f(z(t))z'(t)\,dt.
$$

**Example.** The contour $C$ is the right semicircle on $|z|=2$. Set $z=2e^{i\theta}$ for $-\pi/2\le\theta\le\pi/2$.

![[Kyle Kabasares - Complex Variables - Right semicircle with labeled endpoints.png|**Fig. 69** The arrows show the right half of the circle traversed from $-2i$ to $2i$.]]

$$
\begin{aligned}
\int_C\bar z\,dz
&=\int_{-\pi/2}^{\pi/2}\overline{2e^{i\theta}}\,(2e^{i\theta})'\,d\theta\\
&=\int_{-\pi/2}^{\pi/2}(2e^{-i\theta})(2ie^{i\theta})\,d\theta
=4i\int_{-\pi/2}^{\pi/2}d\theta
=4\pi i.
\end{aligned}
$$

**Discussion 1(a)**

Since $\sin(3\pi)=0$ and $\cos(3\pi)=-1$,

$$
e^{2\pm3\pi i}=e^2e^{\pm3\pi i}
=e^2\bigl(\cos(3\pi)\pm i\sin(3\pi)\bigr)
=-e^2.
$$

**1(b).**

$$
e^{(2+\pi i)/4}
=e^{1/2}\left(\cos\frac{\pi}{4}+i\sin\frac{\pi}{4}\right)
=e^{1/2}\left(\frac{1}{\sqrt2}+\frac{i}{\sqrt2}\right)
=\sqrt{\frac e2}\,(1+i).
$$

**2(a).** Solve $e^z=-2$. Taking the multivalued logarithm gives $\log(e^z)=\log(-2)$. The modulus of $e^z$ is $e^x$, so $x=\ln 2$. The arguments of $-2$ are the odd multiples of $\pi$. Thus

$$
z=\ln2+i(2n+1)\pi,\qquad n\in\mathbb Z.
$$

The handwriting lists positive integers as examples. The full solution uses all integers.

**2(b).** Solve $e^{2z-1}=1$. The page rewrites the exponential in Cartesian and polar form.

$$
e^{2z-1}=e^{2x-1}e^{2iy}=e^{2x-1}(\cos 2y+i\sin 2y).
$$

Taking logarithms, the real part is $\ln|e^{2x-1}|=2x-1$, and the arguments of $1$ are $2\pi n$ for $n\in\mathbb Z$. Equivalently,

$$
2x-1+2iy=2\pi ni,\qquad
z=\frac12+\pi ni,\quad n\in\mathbb Z.
$$

The handwritten calculation extracts $1/e$ from inside the logarithm and later drops the factor $2$ on $y$. It ends at $2x+iy=1$ after canceling equal integer shifts. Keeping the full argument of $e^{2z-1}$ gives the solution family above.

##### More integrals

1. For a complex-valued function of a real parameter $t$, consider $\int_a^b w(t)\,dt$ with $w(t)=u(t)+iv(t)$, where $u,v$ are real-valued.

**2. Integrating along a contour.** Find a parametrization $z(t)$ of $C$ for $t\in[a,b]$. Then

$$
\int_C f(z)\,dz=\int_a^b f(z(t))z'(t)\,dt.
$$

![[Kyle Kabasares - Complex Variables - General parametrized contour in the complex plane.png|**Fig. 70** Arrows give the direction of traversal along the open contour $C$.]]

**Example.** Let $C$ be the semicircle $z(\theta)=3e^{i\theta}$ for $0\le\theta\le\pi$. Use the square root $f(z)=\sqrt r\,e^{i\theta/2}$ along this path.

![[Kyle Kabasares - Complex Variables - Upper semicircle of radius three.png|**Fig. 71** The upper semicircle runs counterclockwise from $3$ to $-3$.]]

Since $z(\theta)=3\cos\theta+3i\sin\theta$, its derivative is $-3\sin\theta+3i\cos\theta=3ie^{i\theta}$. Thus

$$
\begin{aligned}
\int_C f(z)\,dz
&=\int_0^\pi f(z(\theta))z'(\theta)\,d\theta\\
&=\int_0^\pi \sqrt3\,e^{i\theta/2}(3ie^{i\theta})\,d\theta
=3^{3/2}i\int_0^\pi e^{3i\theta/2}\,d\theta.
\end{aligned}
$$

##### Method 1

Integrate the cosine and sine separately.

$$
\int_0^\pi e^{3i\theta/2}\,d\theta
=\left[\frac23\sin\frac{3\theta}{2}\right]_0^\pi
+i\left[-\frac23\cos\frac{3\theta}{2}\right]_0^\pi.
$$

##### Method 2

Integrate the exponential directly.

$$
\int_0^\pi e^{3i\theta/2}\,d\theta
=\left[\frac{2}{3i}e^{3i\theta/2}\right]_0^\pi
=\frac{2}{3i}\bigl(e^{3i\pi/2}-1\bigr)
=\frac{2}{3i}(-i-1).
$$

The page ends with this expression multiplied by the original prefactor $3^{3/2}i$.

The preceding square-root integral ends with $(3\sqrt3\,i)\frac{2}{3i}(-i-1)$, which simplifies to $-2\sqrt3(1+i)$.

##### Splitting the integrand

For $f=u+iv$, linearity gives

$$
\int_C f(z)\,dz=\int_C u(z)\,dz+i\int_C v(z)\,dz.
$$

The next handwritten line replaces $dz$ by $ds$ and sketches an arc-length sum $\sum_{j=1}^n u(x_j,y_j)\Delta s$. That sum approximates $\int_C u\,ds$. In the contour integral above, $dz=z'(t)\,dt$, while $ds=|z'(t)|\,dt$.

**Example.** Integrate $f(z)=z^2$ along the line segment from $0$ to $2i$.

![[Kyle Kabasares - Complex Variables - Imaginary axis segment from zero to two i.png|**Fig. 72** The arrows point upward along the segment from the origin to $2i$.]]

Set $z(t)=it$ for $0\le t\le2$. Then $z'(t)=i$, so

$$
\int_C f(z)\,dz=\int_0^2 f(it)i\,dt=-i\int_0^2t^2\,dt
=-i\left[\frac{t^3}{3}\right]_0^2=-\frac{8i}{3}.
$$

Under “Pretend,” the page evaluates $[z^3/3]_0^{2i}$ and gets the same result. The integrand on that line is written $z^3$, while the example and the derivative of $z^3/3$ both give $z^2$.

##### Antiderivative

Let $f$ be continuous on a domain $D$. A function $F$ satisfying $F'(z)=f(z)$ for all $z\in D$ is an antiderivative of $f$ on $D$. The domain is open, so $F$ is analytic there. An additive constant may be chosen freely.

**Example.** Integrate $f(z)=(z+2)/z$ along the upper semicircle $z(\theta)=2e^{i\theta}$ for $0\le\theta\le\pi$. Along the path,

$$
f(z(\theta))=\frac{2e^{i\theta}+2}{2e^{i\theta}},
\qquad
z'(\theta)=2ie^{i\theta}.
$$

The common factor $2e^{i\theta}$ cancels, giving

$$
\int_C f(z)\,dz
=i\int_0^\pi(2e^{i\theta}+2)\,d\theta
=2i\left(\int_0^\pi e^{i\theta}\,d\theta+\pi\right).
$$

The sine antiderivative contributes through the imaginary part.

$$
\int_0^\pi e^{i\theta}\,d\theta
=\left[\sin\theta-i\cos\theta\right]_0^\pi
=-i(\cos\pi-\cos0)
=2i.
$$

Therefore $\int_C f(z)\,dz=2i(2i+\pi)=\boxed{-4+2\pi i}$.

##### Fundamental theorem of calculus

Write $w(t)=u(t)+iv(t)$ for a complex-valued function of a real variable. Let $W(t)=U(t)+iV(t)$ satisfy $W'(t)=w(t)$. The real fundamental theorem gives $\int_a^b u(t)\,dt=U(b)-U(a)$. The page begins the componentwise calculation with

$$
\int_a^b w(t)\,dt
=\int_a^b u(t)\,dt+i\int_a^b v(t)\,dt.
$$

The componentwise fundamental theorem gives

$$
\int_a^b w(t)\,dt
=(U(b)-U(a))+i(V(b)-V(a))
=W(b)-W(a).
$$

Let $F$ be an antiderivative of $f$. The chain rule gives

$$
\frac{d}{dt}F(z(t))
=F'(z(t))z'(t)=f(z(t))z'(t).
$$

Applying the fundamental theorem to $F(z(t))$ yields

$$
\int_C f(z)\,dz=\int_a^b f(z(t))z'(t)\,dt=F(z(b))-F(z(a)).
$$

![[Kyle Kabasares - Complex Variables - Contour endpoints for the antiderivative theorem.png|**Fig. 73** The contour starts at $z(a)$ and ends at $z(b)$.]]

##### Path independence

An integral is path independent if its value depends only on the endpoints $z_1$ and $z_2$. When $F'=f$, both $\int_{C_1}f(z)\,dz$ and $\int_{C_2}f(z)\,dz$ equal $F(z_2)-F(z_1)$ for paths with those endpoints.

![[Kyle Kabasares - Complex Variables - Two paths with the same endpoints.png|**Fig. 74** Both $C_1$ and $C_2$ run from the lower-left point to $z_2$.]]

Following $C_1$ and then the reverse of $C_2$ gives the closed path $C=C_1-C_2$. Its integral is $F(z_1)-F(z_1)=0$.

##### Branch and branch cut review

- A branch of a multivalued function $f$ is a single-valued analytic function $F$ on a domain, with $F(z)$ one of the values of $f(z)$ at each point. The principal branch of the logarithm is $\operatorname{Log}z=\ln r+i\Theta$ for $r>0$ and $-\pi<\Theta<\pi$.
- A branch cut is a portion of a line or curve introduced to define a branch $F$. The notes refer to points on the cut as singular points for that branch.

##### Exponential function

For $z=x+iy$ with $x,y\in\mathbb R$, $e^z=e^x(\cos y+i\sin y)$. If $w=s+it$, then

$$
e^{(x+iy)+(s+it)}=e^{z+w}=e^ze^w.
$$

![[Kyle Kabasares - Complex Variables - Cartesian coordinates of a complex input.png|**Fig. 75** A point $z$ in the plane has horizontal coordinate $x$ and vertical coordinate $y$.]]

The exponential has real part $e^x\cos y$ and imaginary part $e^x\sin y$. Consequently $|e^z|=e^x$ and $e^z$ never vanishes. The notes also observe that sine and cosine cannot vanish simultaneously.

![[Kyle Kabasares - Complex Variables - Modulus triangle for the exponential.png|**Fig. 76** The radial segment for $e^z$ has length $e^x$ and makes angle $y$ with the real axis.]]

##### Solve $w=e^z$

For $w\ne0$, write $w=r(\cos\theta+i\sin\theta)$ and compare with $e^x(\cos y+i\sin y)$.

![[Kyle Kabasares - Complex Variables - Polar coordinates of an exponential output.png|**Fig. 77** The sketch decomposes $w$ into components $r\cos\theta$ and $r\sin\theta$.]]

Equating moduli gives $r=e^x$. Equating angles modulo $2\pi$ gives

$$
x=\ln r,\qquad y=\theta+2n\pi,\qquad n\in\mathbb Z.
$$

There are infinitely many solutions for each $w\ne0$.

##### Mapping by $f(z)=e^z$

Consider a horizontal strip of height $2\pi$. For each fixed $y$ in the strip, varying $x$ maps the horizontal line to the ray with angle $y$ modulo $2\pi$, with radius $e^x$.

![[Kyle Kabasares - Complex Variables - Exponential sends horizontal strip lines to rays.png|**Fig. 78** The blue horizontal line in the strip maps to the blue ray. A different height maps to a different angle within the strip.]]

Each horizontal line in the input plane maps under $e^z$ to a ray. Letting the height $y$ vary through one full turn covers all angles. A strip of height $2\pi$ that includes one of its boundary lines maps onto $\mathbb C\setminus\{0\}$, since $e^z$ never vanishes.

![[Kyle Kabasares - Complex Variables - Strip of height two pi mapped to radial directions.png|**Fig. 79** Horizontal lines between the heights $y_0$ and $y_0+2\pi$ map to rays at the corresponding angles.]]

**Logarithm**

A value $w$ of $\log z$ satisfies $e^w=z$. Write

$$
z=|z|\cos\theta+i|z|\sin\theta=|z|(\cos\theta+i\sin\theta).
$$

![[Kyle Kabasares - Complex Variables - Modulus and argument of a logarithm input.png|**Fig. 80** The segment from the origin to $z$ has length $|z|$ and angle $\theta$.]]

For $w=s+it$, the equation $e^w=z$ becomes

$$
e^s(\cos t+i\sin t)=|z|(\cos\theta+i\sin\theta).
$$

Thus $e^s=|z|$ and $t=\theta+2\pi n$, so $w=\ln|z|+i(\theta+2\pi n)$ for $n\in\mathbb Z$. To make the logarithm single-valued, restrict the allowed angle. The notes denote the principal choice by $\operatorname{Log}z$. The sketch labels both endpoints of the angle interval as included. For a unique principal value use $-\pi<\theta\le\pi$, and for the analytic branch off the cut use $-\pi<\theta<\pi$.

![[Kyle Kabasares - Complex Variables - Principal argument of a first quadrant point.png|**Fig. 81** For this first-quadrant point, the principal angle is $\pi/4$. Adding a nonzero integer multiple of $2\pi$ leaves the principal range.]]

**Example.** Find $w=\operatorname{Log}(1+i)$. The modulus of $1+i$ is $\sqrt2$, and its argument in $(-\pi,\pi)$ is $\pi/4$. Thus

$$
w=\ln\sqrt2+\frac{\pi i}{4}.
$$

![[Kyle Kabasares - Complex Variables - Polar triangle for one plus i.png|**Fig. 82** The point $1+i$ has coordinates $(1,1)$ and distance $\sqrt2$ from the origin.]]

##### Continuity of the principal logarithm

Follow the lower half of a circle toward the negative real axis. As the path crosses that axis, the principal angle jumps from near $-\pi$ to near $\pi$. A principal value assigned on the cut therefore cannot be continuous across it.

![[Kyle Kabasares - Complex Variables - Argument jump on crossing the negative real axis.png|**Fig. 83** The lower arc approaches the negative real axis with argument tending to $-\pi$.]]

Remove the negative real axis and the origin from the domain. The principal logarithm is continuous on the resulting slit plane.

![[Kyle Kabasares - Complex Variables - Nonpositive real axis removed for the principal logarithm.png|**Fig. 84** The shaded negative ray and the open circle at $0$ indicate the excluded set.]]

To construct another branch on a slit plane, exclude a different ray and choose an argument interval of length $2\pi$ with endpoints at the direction of that ray modulo $2\pi$.

##### Another cut for the logarithm

Remove the ray at angle $\pi/4$ and select arguments in $(\pi/4,9\pi/4)$. The interval has length $2\pi$.

![[Kyle Kabasares - Complex Variables - Branch cut at angle pi over four.png|**Fig. 85** The shaded ray leaves the origin at angle $\pi/4$.]]

##### Logarithm and complex powers

The opening line writes $w=e^z$ and $z=e^w$ together. The inverse relation used here is $w=\log z$ when $z=e^w$. For a nonzero complex base $a$ and complex exponent $z$, define the values of $a^z$ by $e^{z\log a}$.

![[Kyle Kabasares - Complex Variables - Unit modulus of i.png|**Fig. 86** The point $i$ lies one unit above the origin. Its principal argument is $\pi/2$.]]

Since $|i|=1$ and its arguments are $\pi/2+2\pi n$,

$$
i^i=e^{i\log i}
=e^{i\left(\ln1+i(\pi/2+2\pi n)\right)}
=e^{-\pi(1/2+2n)},\qquad n\in\mathbb Z.
$$

The principal choice $n=0$ gives $e^{-\pi/2}\approx0.2079$, a real number. The page ends the example with “Imaginary to an imaginary = Real?!” and a heart next to “Math.”

##### Defining a branch

Delete a ray from the domain and choose an interval for the argument. For the cut along the positive imaginary axis, either $(\pi/2,5\pi/2)$ or $(-3\pi/2,\pi/2)$ works. Each interval has length $2\pi$ and defines a continuous logarithm on the slit plane.

![[Kyle Kabasares - Complex Variables - Branch cut along the positive imaginary axis.png|**Fig. 87** The thick upward ray is removed. The surrounding hatched region represents the domain of the branch.]]

##### Trigonometric functions

$$
\cos z=\frac{e^{iz}+e^{-iz}}{2},\qquad
\sin z=\frac{e^{iz}-e^{-iz}}{2i}.
$$

The remaining functions are defined wherever their denominators are nonzero.

$$
\tan z=\frac{\sin z}{\cos z},\qquad
\cot z=\frac{\cos z}{\sin z},\qquad
\sec z=\frac{1}{\cos z},\qquad
\csc z=\frac{1}{\sin z}.
$$

Since $e^{2\pi i}=e^{-2\pi i}=1$,

$$
\cos(z+2\pi)
=\frac{e^{iz}e^{2\pi i}+e^{-iz}e^{-2\pi i}}{2}
=\frac{e^{iz}+e^{-iz}}{2}
=\cos z.
$$

Sine and cosine retain the period $2\pi$. Define the hyperbolic functions by

$$
\cosh z=\frac{e^z+e^{-z}}{2},\qquad
\sinh z=\frac{e^z-e^{-z}}{2}.
$$

These give the real and imaginary parts of sine and cosine for $z=x+iy$.

$$
\begin{aligned}
\cos(x+iy)&=\cos x\cosh y-i\sin x\sinh y,\\
\sin(x+iy)&=\sin x\cosh y+i\cos x\sinh y.
\end{aligned}
$$

##### Curves

A parametrized curve $\gamma(t)$ has a real parameter $t\in[a,b]$, a starting point $\gamma(a)$, an endpoint $\gamma(b)$, and a direction given by increasing $t$. The parameter can be thought of as time.

![[Kyle Kabasares - Complex Variables - Curve with initial point A and terminal point B.png|**Fig. 88** The curve starts at $\gamma(a)=A$ and follows the arrows to $\gamma(b)=B$.]]

##### Simple and closed curves

A simple curve has no self-intersections. Distinct parameter values give distinct points, with a coincident initial and terminal point allowed for a simple closed curve.

![[Kyle Kabasares - Complex Variables - Simple curve and self intersection.png|**Fig. 89** The solid curve from $A$ to $B$ has no self-intersection. The small sketch at right marks a repeated point.]]

A closed curve has $\gamma(a)=\gamma(b)$, so its starting point and endpoint coincide.

![[Kyle Kabasares - Complex Variables - Closed curve with coincident endpoints.png|**Fig. 90** The labels $A$ and $B$ mark the same point on the loop.]]

##### Components of a curve

$$
\gamma(t)=x(t)+iy(t),\qquad
\gamma'(t)=x'(t)+iy'(t).
$$

The notes describe a smooth curve as one with continuous derivative. The piecewise smooth example has a cusp and can be split there into two smooth segments.

![[Kyle Kabasares - Complex Variables - Smooth curve from A to B.png|**Fig. 91** A smooth path follows the arrows from $A$ to $B$.]]

![[Kyle Kabasares - Complex Variables - Two smooth segments joined at a cusp.png|**Fig. 92** Segment 1 runs from $A$ to the cusp, and segment 2 runs from the cusp to $B$.]]

##### ML inequality and path independence

If $|f(z)|\le M$ on $C$ and $L$ is the length of $C$, then

$$
\left|\int_C f(z)\,dz\right|\le ML.
$$

The notes identify $M$ as the maximum of $|f|$ along the contour when that maximum exists.

##### Proof of the ML inequality

Parametrize the contour by $z(t)$, $a\le t\le b$.

![[Kyle Kabasares - Complex Variables - Endpoints above the contour integral.png|**Fig. 93** The sketch marks the endpoints $z(a)$ and $z(b)$.]]

The modulus inequality for integrals gives

$$
\begin{aligned}
\left|\int_C f(z)\,dz\right|
&=\left|\int_a^b f(z(t))z'(t)\,dt\right|\\
&\le\int_a^b|f(z(t))z'(t)|\,dt
=\int_a^b|f(z(t))|\,|z'(t)|\,dt.
\end{aligned}
$$

Set $M=\max_{a\le t\le b}|f(z(t))|=\max_{z\in C}|f(z)|$. The last integral is bounded by

$$
M\int_a^b|z'(t)|\,dt=ML,
$$

where $L$ is the contour length.

**Example.** Let $C_R$ be the upper half of $|z|=R$ with $R>2$, traversed counterclockwise. Use $z(t)=Re^{it}$ for $0\le t\le\pi$.

![[Kyle Kabasares - Complex Variables - Upper half circle for the ML estimate.png|**Fig. 94** The circle is drawn in full. The arrows on its upper half show the contour from $R$ to $-R$.]]

Show that

$$
\int_{C_R}\frac{2z^2-1}{z^4+5z^2+4}\,dz\longrightarrow0
\qquad\text{as }R\to\infty.
$$

Use the ML inequality to bound the modulus by a function $g(R)$ that tends to zero. The upper semicircle has length $L=\pi R$. The numerator satisfies $|2z^2-1|\le|2z^2|+|-1|$ on $C_R$.

On $C_R$, the numerator bound becomes $|2z^2|+|-1|=2R^2+1$. For the denominator, factor $z^4+5z^2+4=(z^2+1)(z^2+4)$ and use the reverse triangle inequality $|a+b|\ge\bigl||a|-|b|\bigr|$.

$$
|z^2+1|\ge|R^2-1|=R^2-1,\qquad
|z^2+4|\ge|R^2-4|=R^2-4,
$$

since $R>2$. It follows that

$$
|f(z)|=\left|\frac{2z^2-1}{z^4+5z^2+4}\right|
\le\frac{2R^2+1}{(R^2-1)(R^2-4)}.
$$

With $L=\pi R$, the ML inequality gives

$$
\left|\int_{C_R} f(z)\,dz\right|
\le \frac{(2R^2+1)\pi R}{(R^2-1)(R^2-4)}
\longrightarrow0
\qquad\text{as }R\to\infty.
$$

##### Antiderivative review

Suppose $F'(z)=f(z)$ on a domain containing the contour $C$.

![[Kyle Kabasares - Complex Variables - Open contour for endpoint evaluation.png|**Fig. 95** The curve $C$ joins $z(a)$ to $z(b)$.]]

$$
\int_C f(z)\,dz
=\int_a^b\underbrace{f(z(t))z'(t)}_{\frac{d}{dt}F(z(t))}\,dt
=F(z(b))-F(z(a)).
$$

If $C$ is closed, the endpoints coincide and $\int_C f(z)\,dz=0$.

![[Kyle Kabasares - Complex Variables - Closed contour for zero integral.png|**Fig. 96** The arrows indicate counterclockwise traversal of the closed curve $C$.]]

##### Theorem

Suppose $f$ is continuous on a domain $D$, described here as open and simply connected. The following conditions are equivalent.

1. The function $f$ has an antiderivative $F$ in $D$.
2. All contours lying in $D$ and joining $z_1$ to $z_2$ give the same integral of $f$.
3. The integral of $f$ around every closed contour lying in $D$ is zero.

**Example.** The integral of $f(z)=z^2$ around the circle $|z|=2$ is zero, since $F(z)=z^3/3$ is an antiderivative.

![[Kyle Kabasares - Complex Variables - Circle of radius two with left and right points.png|**Fig. 97** The sketch shows the circle and marks its left and right intersections with the real axis. The arrows show counterclockwise traversal.]]

The direct calculation on the page uses $z(\theta)=2e^{i\theta}$ with $\pi\le\theta\le3\pi/2$, so it covers a quarter of the circle. On that arc,

$$
f(z(\theta))z'(\theta)=(4e^{2i\theta})(2ie^{i\theta})=8ie^{3i\theta}.
$$

The page splits the exponential into cosine and sine and uses their antiderivatives. Keeping the factor $8i$ on both terms gives

$$
8i\int_\pi^{3\pi/2}e^{3i\theta}\,d\theta
=\frac{8i}{3}\left[\sin(3\theta)-i\cos(3\theta)\right]_\pi^{3\pi/2}
=\frac{8i}{3}(1-i)
=\frac{8}{3}(1+i).
$$

The handwritten last line instead gives $i(8\pi/3-1)$. A full turn gives zero because $e^{3i\theta}$ has the same value at its two endpoints.

##### Branches and derivatives

The values of $\log z$ are $\ln|z|+i\arg z$. A branch selects one value at each point so that the resulting function is analytic on its domain.

For $z=re^{i\theta}$ with $r>0$ and $-\pi<\theta<\pi$, the principal branch is

$$
\operatorname{Log}z=\ln|z|+i\operatorname{Arg}z=\ln r+i\theta.
$$

Its components satisfy the polar Cauchy–Riemann equations. The principal branch is differentiable on the plane with $0$ and the negative real axis removed.

![[Kyle Kabasares - Complex Variables - Principal argument limits at the logarithm cut.png|**Fig. 98** The arrows approach the negative real axis from above with angle tending to $\pi$ and from below with angle tending to $-\pi$.]]

A branch on another slit plane uses $\ln r+i\theta$ with $\theta\in(\alpha,\alpha+2\pi)$.

**Homework 5 problem**

Assume $\lim_{z\to0}f(z)=0$ and $|g(z)|\le M$ for $|z|<R$. Show that $\lim_{z\to0}f(z)g(z)=0$.

Given $\epsilon>0$, seek $\delta>0$ such that $0<|z|<\delta$ implies $|f(z)g(z)|<\epsilon$. For any $\epsilon_1>0$, the limit of $f$ gives $\delta_1>0$ such that $0<|z|<\delta_1$ implies $|f(z)|<\epsilon_1$. Let $\delta=\min\{\delta_1,R\}$. Then for $0<|z|<\delta$,

$$
|f(z)g(z)-0|=|f(z)g(z)|\le M|f(z)|.
$$

**Homework 5 problem**

If $M>0$, choose $\epsilon_1=\epsilon/M$. Then for $0<|z|<\delta$,

$$
|f(z)g(z)|\le M|f(z)|<M\epsilon_1=\epsilon.
$$

If $M=0$, the product vanishes wherever the bound holds.

$$
\begin{aligned}
\int_0^{\pi/6}e^{2it}\,dt
&=\int_0^{\pi/6}(\cos 2t+i\sin 2t)\,dt\\
&=\left[\frac{\sin 2t}{2}-i\frac{\cos 2t}{2}\right]_0^{\pi/6}\\
&=\left(\frac{\sqrt3}{4}-\frac{i}{4}\right)-\left(-\frac{i}{2}\right)
=\frac{\sqrt3+i}{4}.
\end{aligned}
$$

**2(a).** The parametrization $z(\theta)=e^{-i\theta}=\cos\theta-i\sin\theta$ starts at $(1,0)$ when $\theta=0$ and reaches $(0,-1)$ when $\theta=\pi/2$.

![[Kyle Kabasares - Complex Variables - Clockwise unit circle parametrization.png|**Fig. 99** The arrows show clockwise traversal as $\theta$ increases.]]

**2(b).** Sketch $z(t)=\sin(2t)+i\cos t$ for $0\le t\le\pi$. The page computes these sample points.

| $t$ | $x(t)=\sin(2t)$ | $y(t)=\cos t$ |
| --- | --- | --- |
| $0$ | $0$ | $1$ |
| $\pi/6$ | $\sqrt3/2$ | $\sqrt3/2$ |
| $\pi/4$ | $1$ | $\sqrt2/2$ |
| $\pi/3$ | $\sqrt3/2$ | $1/2$ |
| $\pi/2$ | $0$ | $0$ |
| $3\pi/4$ | $-1$ | $-\sqrt2/2$ |
| $\pi$ | $0$ | $-1$ |

![[Kyle Kabasares - Complex Variables - Curve with components sine of twice t and cosine of t.png|**Fig. 100** The curve runs from $(0,1)$ through the origin to $(0,-1)$, bending to the right above the real axis and to the left below it.]]

**3.** Evaluate $\int_0^\pi e^{(1+i)x}\,dx$. The page first separates real and imaginary parts.

$$
\int_0^\pi e^{(1+i)x}\,dx
=\int_0^\pi e^x\cos x\,dx+i\int_0^\pi e^x\sin x\,dx.
$$

For the real part, the tabular integration by parts differentiates $e^x$ repeatedly and integrates $\cos x$ to $\sin x$ and then to $-\cos x$. The resulting identity is

$$
\int_0^\pi e^x\cos x\,dx
=\left[e^x(\sin x+\cos x)\right]_0^\pi
-\int_0^\pi e^x\cos x\,dx.
$$

The page also evaluates the original integral directly. Using $e^{i\pi}=-1$ and multiplying by $(1-i)/(1-i)$ gives

$$
\begin{aligned}
\int_0^\pi e^{(1+i)x}\,dx
&=\left[\frac{e^{(1+i)x}}{1+i}\right]_0^\pi
=\frac{-e^\pi-1}{1+i}\\
&=\frac{(-e^\pi-1)(1-i)}{2}
=\frac{-e^\pi-1}{2}+i\frac{e^\pi+1}{2}.
\end{aligned}
$$

**5.** Since $|z|=\sqrt{x^2+y^2}$, we have $|z|^2=x^2+y^2=z\bar z$. The page takes $u(x,y)=\ln(x^2+y^2)$ and $v(x,y)=0$. Thus $v_x=v_y=0$. For $(x,y)\ne(0,0)$,

$$
\begin{aligned}
u_x&=\frac{2x}{x^2+y^2}, & u_y&=\frac{2y}{x^2+y^2},\\
u_{xx}&=\frac{2(x^2+y^2)-4x^2}{(x^2+y^2)^2}
=\frac{-2x^2+2y^2}{(x^2+y^2)^2},\\
u_{yy}&=\frac{2(x^2+y^2)-4y^2}{(x^2+y^2)^2}
=\frac{2x^2-2y^2}{(x^2+y^2)^2}.
\end{aligned}
$$

## Source

Kyle Kabasares, *Complex Variables and Applications (Math 122, UC Merced 2016)*.
