---
title: "Branches of complex elementary functions"
---

> [!TLDR]
> Choose an argument interval to define single-valued logarithms, powers, and inverse functions.

## Worked lecture material

##### Logarithm in polar coordinates

The notes choose $r>0$ and $0\le\theta<2\pi$ for $f(z)=\ln r+i\theta$. With $u=\ln r$ and $v=\theta$,

$$
u_r=\frac{1}{r},\qquad v_\theta=1,\qquad v_r=0,\qquad u_\theta=0.
$$

These derivatives satisfy $ru_r=v_\theta$ and $rv_r=-u_\theta$. The page concludes “analytic everywhere.” For the chosen angle range, this applies off the nonnegative real axis, where the angle varies continuously. The positive real axis is the jump in this angle choice, and $r=0$ is excluded.

##### Harmonic functions

A real-valued function $u(x,y)$ is harmonic when its Laplacian vanishes:

$$
\nabla^2u=u_{xx}+u_{yy}=0.
$$

To relate harmonic functions to complex functions, let $f(z)=u(x,y)+iv(x,y)$ be analytic in a neighborhood of $z_0$. Differentiating $u_x=v_y$ with respect to $x$ and $u_y=-v_x$ with respect to $y$ gives

$$
u_{xx}=v_{yx},\qquad u_{yy}=-v_{xy}.
$$

When the mixed partial derivatives agree, $v_{yx}=v_{xy}$, we get $u_{xx}+u_{yy}=0$. The same argument with $u$ and $v$ interchanged in the differentiated equations gives $v_{xx}+v_{yy}=0$. In the analytic pair $u+iv$, $v$ is a harmonic conjugate of $u$.

**Example.** For $f(z)=z^2$, $u=x^2-y^2$ and $v=2xy$. Both Laplacians vanish:

$$
u_{xx}+u_{yy}=2-2=0,\qquad v_{xx}+v_{yy}=0+0=0.
$$

**Example.** For $z=x+iy$,

$$
f(z)=ie^{iz}
=ie^{ix-y}
=i(\cos x+i\sin x)e^{-y}
=-\sin x\,e^{-y}+i\cos x\,e^{-y}.
$$

Thus $u(x,y)=-\sin x\,e^{-y}$ and $v(x,y)=\cos x\,e^{-y}$. The line labeled $u_{xx}+u_{yy}$ on the page gives only the term $u_{xx}=\sin x\,e^{-y}$. The other term is $u_{yy}=-\sin x\,e^{-y}$, so their sum is zero.

A function is analytic at $z_0\in\mathbb C$ if it is complex differentiable at every point in a neighborhood of $z_0$. A real-valued function $u(x,y)$ is harmonic if $u_{xx}+u_{yy}=0$.

For an analytic function $f=u+iv$, the notes assume all second partial derivatives of $u$ and $v$ exist and are continuous. The Cauchy–Riemann equations are $u_x=v_y$ and $v_x=-u_y$. The minus sign in the second equation is supplied from the preceding derivation. The real and imaginary parts form a harmonic conjugate pair and satisfy

$$
u_{xx}+u_{yy}=0,\qquad v_{xx}+v_{yy}=0.
$$

**Example.** For $u(x,y)=2x(1-y)$,

$$
u_x=2(1-y),\qquad u_y=-2x,\qquad u_{xx}=0,\qquad u_{yy}=0.
$$

Therefore $u$ is harmonic.

##### Finding a harmonic conjugate

For $u(x,y)=2x(1-y)$, the equation $v_y=u_x$ gives

$$
v(x,y)=\int 2(1-y)\,dy=2y-y^2+g(x).
$$

The other Cauchy–Riemann equation gives $v_x=-u_y=2x$, hence $g'(x)=2x$. Choosing the additive constant to be zero gives $g(x)=x^2$ and

$$
v(x,y)=2y-y^2+x^2.
$$

To check that $v$ is harmonic, compute

$$
v_x=2x,\qquad v_y=2-2y,\qquad
v_{xx}=2,\qquad v_{yy}=-2.
$$

Thus $v_{xx}+v_{yy}=2-2=0$. The pair $u$ and $v$ gives an analytic function $f(z)=u(x,y)+iv(x,y)$.

![[Kyle Kabasares - Complex Variables - Domain and range of an analytic map.png|**Fig. 57** The map $f$ takes points in the $(x,y)$ plane to points with coordinates $(u(x,y),v(x,y))$.]]

The notes emphasize that analyticity imposes strong constraints on a complex function.

##### Exponential and logarithmic functions

The lecture introduces branch cuts as a topic. For $z=x+iy$, the complex exponential is

$$
e^z=e^{x+iy}=e^xe^{iy}=e^x(\cos y+i\sin y).
$$

It satisfies the usual exponential identities:

$$
e^{z_1}e^{z_2}=e^{z_1+z_2},\qquad
\frac{e^{z_1}}{e^{z_2}}=e^{z_1-z_2},\qquad
\frac{1}{e^z}=e^{-z}.
$$

To compute its complex derivative, write $u=e^x\cos y$ and $v=e^x\sin y$. Their partial derivatives are

$$
\begin{aligned}
u_x&=e^x\cos y, & v_x&=e^x\sin y,\\
u_y&=-e^x\sin y, & v_y&=e^x\cos y.
\end{aligned}
$$

They are continuous and satisfy the Cauchy–Riemann equations everywhere. Therefore

$$
\frac{d}{dz}e^z=u_x+iv_x=e^x\cos y+ie^x\sin y=e^xe^{iy}=e^z.
$$

For $x=c_1$ the image has constant modulus $e^{c_1}$, and for $y=c_2$ the image has constant angle $c_2$ modulo $2\pi$.

![[Kyle Kabasares - Complex Variables - Exponential maps lines to circles and rays.png|**Fig. 58** The exponential maps a vertical line $x=c_1$ to a circle of radius $e^{c_1}$ and a horizontal line $y=c_2$ to a ray at angle $c_2$ with its endpoint excluded.]]

The page opens with an integral reversal reminder. The handwriting repeats the limits on both integrals. Reversing them gives $\int_a^b f(x)\,dx=-\int_b^a f(x)\,dx$.

##### Other properties of $e^z$

1. The exponential never vanishes. In $e^z=e^x(\cos y+i\sin y)$, its modulus is $e^x>0$.
2. The exponential is periodic. In the notation $f(z+c)=f(z)$, a period is $c=2\pi i$, since $\cos y$ and $\sin y$ have period $2\pi$.
3. The equation $e^z=-1$ has the example $x=0$, $y=\pi$. Periodicity gives $y=\pi+2\pi n$ for $n\in\mathbb Z$.

##### Logarithm

A value $w=\log z$ satisfies $e^w=z$. Write $z=re^{i\theta}$ with $r>0$ and $w=u+iv$. The equation $e^ue^{iv}=re^{i\theta}$ gives

$$
e^u=r,\qquad u=\ln r,\qquad v=\theta+2\pi n,\quad n\in\mathbb Z.
$$

The logarithm is multivalued because each integer $n$ gives a value.

$$
\log z=\ln|z|+i\arg z=\ln|z|+i(\theta+2\pi n).
$$

The principal value uses $\theta=\operatorname{Arg}z$, so $\operatorname{Log}z=\ln r+i\theta$ and the values of $\log z$ are $\operatorname{Log}z+2\pi ni$.

##### Logarithm examples

The first sketch shows $z=-1-i\sqrt3$. Its modulus is $\sqrt{1^2+(\sqrt3)^2}=2$. The acute angle with the negative real axis is $\arctan(\sqrt3/1)=\pi/3$, so the principal argument is $-2\pi/3$. The handwritten result uses $\pi/3$ directly and shows the reciprocal tangent ratio. The quadrant and side lengths in the sketch give

$$
\log z=\ln 2+i(-2\pi/3+2\pi n),\qquad n\in\mathbb Z.
$$

![[Kyle Kabasares - Complex Variables - Argument triangle in the third quadrant.png|**Fig. 59** The horizontal leg has length $1$ and the downward vertical leg has length $\sqrt3$. The angle marked at the origin is measured from the negative real axis.]]

For a negative real input,

$$
\log(-2)=\ln 2+i(\pi+2\pi n),\qquad n\in\mathbb Z.
$$

##### Complex exponents

For $z=re^{i\theta}\ne0$, the values of $z^c$ are given by

$$
z^c=e^{c\log z}=e^{c(\ln r+i(\theta+2\pi n))},\qquad n\in\mathbb Z.
$$

In particular, $i^i=e^{-(\pi/2+2\pi n)}$ is multivalued.

If $f(z)=u(x,y)+iv(x,y)$ and $f'(z_0)$ exists at $z_0=x_0+iy_0$, then $u_x=v_y$, $u_y=-v_x$, and $f'(z_0)=u_x+iv_x$, with the partial derivatives evaluated at $(x_0,y_0)$.

For $f(z)=3z^2-2z+4$, we have $f'(z)=6z-2$, so the Cauchy–Riemann equations must hold. The Cartesian expansion is

$$
\begin{aligned}
f(z)&=3(x^2-y^2+2ixy)-2(x+iy)+4\\
&=\underbrace{(3x^2-3y^2-2x+4)}_{u(x,y)}
+i\underbrace{(6xy-2y)}_{v(x,y)}.
\end{aligned}
$$

##### Sufficient conditions for differentiability

The first partial derivatives of $u$ and $v$ must exist in a neighborhood, be continuous at $(x_0,y_0)$, and satisfy the Cauchy–Riemann equations at $(x_0,y_0)$. Analyticity at $z_0$ requires differentiability throughout a neighborhood of $z_0$. An entire function is differentiable everywhere in $\mathbb C$.

**1(a).** For $f(z)=xy+iy$, the page compares $u_x=y$ with $v_y=1$ and $v_x=0$ with $-u_y=-x$. The equations hold only at $(0,1)$.

**1(b).** For $f(z)=2xy+i(x^2-y^2)$,

$$
u_x=2y,\quad v_y=-2y,\qquad v_x=2x,\quad -u_y=-2x.
$$

Both equations hold only at the origin.

**1(c).** For $f(z)=e^{2y}e^{ix}=e^{2y}\cos x+ie^{2y}\sin x$,

$$
\begin{aligned}
u_x&=-e^{2y}\sin x, & v_y&=2e^{2y}\sin x,\\
-u_y&=-2e^{2y}\cos x, & v_x&=e^{2y}\cos x.
\end{aligned}
$$

The equations would require both $\sin x=0$ and $\cos x=0$, so they hold nowhere.

**2(a).** For $f(z)=(3x+y)+i(3y-x)$, the page obtains $u_x=3=v_y$ and $u_y=1=-v_x$.

**2(b).** For $f(z)=(z^2-2)e^{-z}$, use $z=x+iy$ to write

$$
\begin{aligned}
f(z)&=\bigl((x+iy)^2-2\bigr)e^{-x}e^{-iy}\\
&=e^{-x}(x^2+2ixy-y^2-2)(\cos y-i\sin y).
\end{aligned}
$$

The handwritten expansion drops the constant $-2$ after the first line. It is retained here from the stated function.

**2(b), continued.** The page distributes the factors of $e^{-x}(x^2+2ixy-y^2)(\cos y-i\sin y)$ and starts collecting the terms. Its expansion still omits the $-2$ from the original problem. With that constant restored, the real and imaginary parts are

$$
\begin{aligned}
u(x,y)&=e^{-x}\bigl[(x^2-y^2-2)\cos y+2xy\sin y\bigr],\\
v(x,y)&=e^{-x}\bigl[2xy\cos y-(x^2-y^2-2)\sin y\bigr].
\end{aligned}
$$

**3.** Let $f(r,\theta)=u(r,\theta)+iv(r,\theta)$ be analytic in $D$. The page sets out the polar Laplace equation for $u$ and recalls the polar Cauchy–Riemann equations.

$$
\begin{aligned}
r^2u_{rr}+ru_r+u_{\theta\theta}&=0,\\
ru_r&=v_\theta,\\
rv_r&=-u_\theta.
\end{aligned}
$$

##### Elementary functions

1. The exponential $e^z=e^{x+iy}=e^xe^{iy}=e^x(\cos y+i\sin y)$ is periodic in $y$.
2. A value $w=\log z$ satisfies $e^w=z$. Writing $z=re^{i\theta}$ gives $\log z=\ln|z|+i\arg z$.
3. For real or complex $c$, the complex power is $z^c=e^{c\log z}=e^{c(\ln|z|+i\arg z)}$.

##### Question

Is $z$ the unique value of $\log(e^z)$? The notes answer no and begin the calculation with $\log(e^{x+iy})=\log(e^xe^{iy})=\log\bigl(e^x(\cos y+i\sin y)\bigr)$.

For $z=x+iy$, the values $x+iy$, $x+i(y+2\pi)$, and more generally $x+i(y+2\pi n)$ give the same exponential. In fact,

$$
\log(e^z)=\ln|e^z|+i\arg(e^z)
=x+i(y+2\pi n)=z+2\pi ni,\qquad n\in\mathbb Z,
$$

since $|re^{i\theta}|=r$ and $\arg(e^z)$ consists of $y+2\pi n$.

Does $e^{\log z}$ have the single value $z$? Yes, for $z\ne0$. The identities $\cos(\alpha+2\pi)=\cos\alpha$ and $\sin(\alpha+2\pi)=\sin\alpha$ make the exponential independent of the choice $\arg z=\operatorname{Arg}z+2\pi n$:

$$
e^{\log z}
=e^{\ln|z|}e^{i\arg z}
=|z|e^{i\operatorname{Arg}z}
=z.
$$

##### Branches of multivalued functions

A branch of a multivalued function $f$ is a single-valued analytic function $F$ on a domain, with $F(z)$ equal to one of the values of $f(z)$ at every point in the domain.

##### Branch cuts and branch points

The notes describe a branch cut as a portion of a line or curve introduced to define a branch of $f$. They call a point common to all such cuts a branch point.

For the logarithm, $\log z=\ln|z|+i\arg z$ and $\operatorname{Log}z=\ln|z|+i\operatorname{Arg}z$.

![[Kyle Kabasares - Complex Variables - Principal logarithm branch cut.png|**Fig. 60** The principal logarithm uses a cut along the nonpositive real axis. The limiting arguments above and below the negative real axis are $\pi$ and $-\pi$, respectively.]]

To evaluate $\int_C\log(z)\,dz$, choose a single branch of the logarithm whose cut stays clear of the path $C$.

![[Kyle Kabasares - Complex Variables - Integration path avoiding the logarithm cut.png|**Fig. 61** The contour $C$ joins $A$ and $B$ and crosses the positive real axis. The shaded cut for the principal branch extends left from the origin.]]

##### Complex sine and cosine

$$
\sin z=\frac{e^{iz}-e^{-iz}}{2i},
\qquad
\cos z=\frac{e^{iz}+e^{-iz}}{2}.
$$

**Exercise.** Show that $\sin(-z)=-\sin z$ and $\cos(-z)=\cos z$. Sine is odd and cosine is even.

For real $x$, the complex definition gives the ordinary sine:

$$
\sin(x+i0)
=\frac{e^{ix}-e^{-ix}}{2i}
=\frac{(\cos x+i\sin x)-(\cos x-i\sin x)}{2i}
=\sin x.
$$

For a complex input, use $e^{i\pi/2}=i$ and $e^{-i\pi/2}=-i$. The latter sign follows from $\cos(\pi/2)-i\sin(\pi/2)$ and is the one used in the main calculation.

$$
\begin{aligned}
\sin\left(\frac{\pi}{2}-100i\right)
&=\frac{e^{i(\pi/2-100i)}-e^{-i(\pi/2-100i)}}{2i}\\
&=\frac{e^{i\pi/2}e^{100}-e^{-i\pi/2}e^{-100}}{2i}\\
&=\frac{ie^{100}-(-i)e^{-100}}{2i}
=\frac{e^{100}+e^{-100}}{2}
=\cosh(100).
\end{aligned}
$$

## Source

Kyle Kabasares, *Complex Variables and Applications (Math 122, UC Merced 2016)*.
