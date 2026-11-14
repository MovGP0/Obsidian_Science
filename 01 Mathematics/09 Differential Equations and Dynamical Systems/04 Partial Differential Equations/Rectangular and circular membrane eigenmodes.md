---
title: "Rectangular and circular membrane eigenmodes"
---

> [!TLDR]
> Product separation gives sine modes on a rectangle and Bessel modes on a disk, with orthogonality setting the initial coefficients.

## Worked lecture material

The notes mark April 20, 2017 as a missed lecture. The upcoming agenda is

| Date | Topic |
| --- | --- |
| April 25 | Vibrating circular membrane and Bessel functions, Section 7.7, and Homework 13 |
| April 27 | Laplace's equation in a cylinder, Section 7.9 |
| May 2 | Green's functions, Section 8.4 |
| May 4 | Review and questions |

##### Higher-dimensional PDEs

##### Gradient and Laplacian

For a scalar function $u\colon\mathbb{R}^3\to\mathbb{R}$, the gradient is

$$
\nabla u=\begin{bmatrix}\partial u/\partial x\\ \partial u/\partial y\\ \partial u/\partial z\end{bmatrix}
=\begin{bmatrix}u_x\\u_y\\u_z\end{bmatrix}.
$$

The divergence of the gradient is the Laplacian.

$$
\begin{aligned}
\nabla\cdot\nabla u
&=\frac{\partial}{\partial x}\left(\frac{\partial u}{\partial x}\right)
+\frac{\partial}{\partial y}\left(\frac{\partial u}{\partial y}\right)
+\frac{\partial}{\partial z}\left(\frac{\partial u}{\partial z}\right),\\
\nabla^2u
&=\frac{\partial^2u}{\partial x^2}+\frac{\partial^2u}{\partial y^2}
+\frac{\partial^2u}{\partial z^2}.
\end{aligned}
$$

##### Heat equation with constant thermal properties

The equation is $\thermal{u}_t=\thermal{k}\nabla^2\thermal{u}$ in each dimension. In Cartesian coordinates this gives

$$
\begin{aligned}
\text{1D:}\qquad \thermal{u}_t&=\thermal{k}\thermal{u}_{xx},\\
\text{2D:}\qquad \thermal{u}_t&=\thermal{k}(\thermal{u}_{xx}+\thermal{u}_{yy}),\\
\text{3D:}\qquad \thermal{u}_t&=\thermal{k}(\thermal{u}_{xx}+\thermal{u}_{yy}+\thermal{u}_{zz}).
\end{aligned}
$$

##### Steady-state heat equation

At steady state $\partial\thermal{u}/\partial t=0$. With constant thermal properties and no source, the three-dimensional heat equation reduces to Laplace's equation.

$$
\nabla^2\thermal{u}
=\thermal{u}_{xx}+\thermal{u}_{yy}+\thermal{u}_{zz}=0.
$$

The notes also give the general Poisson equation in the convention $-\nabla^2u=f(x,y,z)$.

##### Wave equation

The two-dimensional wave equation models the transverse motion of a membrane.

$$
\frac{\partial^2\mechanical{u}}{\partial t^2}
=\mechanical{c}^{\,2}\left(
\frac{\partial^2\mechanical{u}}{\partial x^2}+
\frac{\partial^2\mechanical{u}}{\partial y^2}\right).
$$

##### Vibrating rectangular membrane

The membrane occupies $\Omega=[0,L]\times[0,H]$, and all four edges are fixed.

![[Kyle Kabasares - Partial Differential Equations - Rectangular membrane with fixed edges.png|**Fig. 32** Rectangular membrane with the left, right, bottom, and top edges marked.]]

The PDE and the boundary and initial conditions are

$$
\begin{aligned}
\mechanical{u}_{tt}
&=\mechanical{c}^{\,2}(\mechanical{u}_{xx}+\mechanical{u}_{yy}),&&\text{(1a)}\\
\mechanical{u}(0,y,t)&=\mechanical{u}(L,y,t)=0,&&\text{(1b)}\\
\mechanical{u}(x,0,t)&=\mechanical{u}(x,H,t)=0,&&\text{(1c)}\\
\mechanical{u}(x,y,0)&=\mechanical{\alpha}(x,y),&&\text{(1d)}\\
\mechanical{u}_t(x,y,0)&=\mechanical{\beta}(x,y).&&\text{(1e)}
\end{aligned}
$$

The boundary conditions hold for $t>0$. The initial data are prescribed on the rectangle. To separate variables, start with $\mechanical{u}(x,y,t)=h(t)\phi(x,y)$, labeled Eq. (2), and substitute it into Eq. (1a). The fully separated form is $\mechanical{u}(x,y,t)=f(x)g(y)h(t)$.

Substitute $\mechanical{u}=h(t)\phi(x,y)$ into the membrane equation.

$$
\phi h''=\mechanical{c}^{\,2}(\phi_{xx}+\phi_{yy})h.
\tag{3}
$$

Divide by $\mechanical{c}^{\,2}h\phi$ and set the two sides equal to the separation constant $-\lambda$.

$$
\frac{h''}{\mechanical{c}^{\,2}h}=\frac{\phi_{xx}+\phi_{yy}}{\phi}=-\lambda.
$$

The time equation is $h''=-\mechanical{c}^{\,2}\lambda h$, labeled Eq. (4). For $\lambda>0$ the solution recalled from class is

$$
h(t)=C_1\cos(\mechanical{c}\sqrt{\lambda}\,t)
+C_2\sin(\mechanical{c}\sqrt{\lambda}\,t).
$$

The two-dimensional spatial eigenvalue problem is

$$
\begin{aligned}
\phi_{xx}+\phi_{yy}&=-\lambda\phi,&&\text{(5a)}\\
\phi(0,y)=\phi(L,y)&=0,\qquad 0\le y\le H,&&\text{(5b)}\\
\phi(x,0)=\phi(x,H)&=0,\qquad 0\le x\le L.&&\text{(5c)}
\end{aligned}
$$

Separate the spatial variables by writing $\phi(x,y)=X(x)Y(y)$, labeled Eq. (6). Substitution into Eq. (5a) gives

$$
X''Y+XY''=-\lambda XY.
\tag{7}
$$

Divide by $XY$ to obtain

$$
\frac{X''}{X}+\frac{Y''}{Y}=-\lambda,\qquad
\frac{X''}{X}=-\frac{Y''}{Y}-\lambda=-\mu.
$$

The separated $x$ problem is $X''=-\mu X$ with $X(0)=X(L)=0$, labeled Eq. (8). Its eigenpairs are

$$
\mu_n=\left(\frac{n\pi}{L}\right)^2,\qquad
X_n(x)=\sin\left(\frac{n\pi x}{L}\right),\qquad n=1,2,\ldots.
$$

The separated $y$ problem is $Y''=-(\lambda-\mu)Y$ with $Y(0)=Y(H)=0$, labeled Eq. (9). Thus

$$
\lambda_{nm}-\mu_n=\left(\frac{m\pi}{H}\right)^2,\qquad
\lambda_{nm}=\left(\frac{n\pi}{L}\right)^2+\left(\frac{m\pi}{H}\right)^2,
\qquad n,m=1,2,\ldots.
$$

The corresponding factor is $Y_{nm}(y)=\sin\bigl(\sqrt{\lambda_{nm}-\mu_n}\,y\bigr)=\sin(m\pi y/H)$. The two terms involving $(n\pi/L)^2$ cancel inside the square root.

Superpose the separated solutions $h(t)\phi(x,y)$ to obtain the general solution of Eq. (1).

$$
\begin{aligned}
\mechanical{u}(x,y,t)
&=\sum_{m=1}^{\infty}\sum_{n=1}^{\infty}
\left[A_{mn}\cos\left(\mechanical{c}\sqrt{\lambda_{nm}}\,t\right)
+B_{mn}\sin\left(\mechanical{c}\sqrt{\lambda_{nm}}\,t\right)\right]\\
&\qquad{}\times\sin\left(\frac{n\pi x}{L}\right)\sin\left(\frac{m\pi y}{H}\right).
\end{aligned}
$$

The initial conditions determine $A_{mn}$ and $B_{mn}$.

The notes recall the double sine expansion with time factors $\cos(\mechanical{c}\sqrt{\lambda_{nm}}\,t)$ and $\sin(\mechanical{c}\sqrt{\lambda_{nm}}\,t)$. This page writes the coefficients as $A_{nm}$ and $B_{nm}$, with the $x$ index first. They are the same coefficients written $A_{mn}$ and $B_{mn}$ on [[#Vibrating rectangular membrane|the section on Vibrating rectangular membrane]].

The initial displacement condition, labeled Eq. (2) here, gives

$$
\mechanical{\alpha}(x,y)=\mechanical{u}(x,y,0)
=\sum_{m=1}^{\infty}\sum_{n=1}^{\infty}A_{nm}
\sin\left(\frac{n\pi x}{L}\right)\sin\left(\frac{m\pi y}{H}\right).
$$

For each $m$, let $g_m(x)=\sum_{n=1}^{\infty}A_{nm}\sin(n\pi x/L)$. Then $\mechanical{\alpha}(x,y)=\sum_{m=1}^{\infty}g_m(x)\sin(m\pi y/H)$. Project in $y$ using

$$
\int_0^H\sin\left(\frac{m\pi y}{H}\right)\sin\left(\frac{j\pi y}{H}\right)\,dy
=\begin{cases}H/2,&m=j,\\0,&m\ne j.\end{cases}
$$

It follows that

$$
\sum_{n=1}^{\infty}A_{nm}\sin\left(\frac{n\pi x}{L}\right)
=g_m(x)=\frac{2}{H}\int_0^H\mechanical{\alpha}(x,y)\sin\left(\frac{m\pi y}{H}\right)\,dy.
$$

Now project $g_m(x)$ onto $\sin(n\pi x/L)$ on $[0,L]$ with the normalization $2/L$. This yields

$$
\boxed{A_{nm}=\frac{4}{LH}\int_0^L\int_0^H
\mechanical{\alpha}(x,y)\sin\left(\frac{m\pi y}{H}\right)
\sin\left(\frac{n\pi x}{L}\right)\,dy\,dx.}
$$

##### Coefficients from the initial membrane velocity

Differentiate the double sine series in time. At $t=0$ the terms proportional to $A_{nm}$ vanish and the cosine in each term proportional to $B_{nm}$ is $1$. Thus

$$
\mechanical{\beta}(x,y)=\mechanical{u}_t(x,y,0)
=\sum_{m=1}^{\infty}\sum_{n=1}^{\infty}B_{nm}\mechanical{c}\sqrt{\lambda_{nm}}\,
\sin\left(\frac{n\pi x}{L}\right)\sin\left(\frac{m\pi y}{H}\right).
\tag{4}
$$

Group the terms with a common $y$ mode.

$$
\begin{aligned}
g_m(x)&=\sum_{n=1}^{\infty}B_{nm}\mechanical{c}\sqrt{\lambda_{nm}}\,
\sin\left(\frac{n\pi x}{L}\right),&&\text{(5)}\\
\mechanical{\beta}(x,y)&=\sum_{m=1}^{\infty}g_m(x)\sin\left(\frac{m\pi y}{H}\right),&&\text{(6)}\\
g_m(x)&=\frac{2}{H}\int_0^H\mechanical{\beta}(x,y)\sin\left(\frac{m\pi y}{H}\right)\,dy.&&\text{(7)}
\end{aligned}
$$

Substitute Eq. (7) into Eq. (5), multiply by $\sin(n\pi x/L)$, and integrate over $x$. Orthogonality leaves the $n$th coefficient times $L/2$.

$$
\frac{2}{H}\int_0^L\int_0^H
\mechanical{\beta}(x,y)\sin\left(\frac{m\pi y}{H}\right)\sin\left(\frac{n\pi x}{L}\right)\,dy\,dx
=\frac{L}{2}B_{nm}\mechanical{c}\sqrt{\lambda_{nm}}.
$$

Consequently,

$$
\boxed{B_{nm}=\frac{4}{LH\mechanical{c}\sqrt{\lambda_{nm}}}
\int_0^L\int_0^H\mechanical{\beta}(x,y)
\sin\left(\frac{m\pi y}{H}\right)\sin\left(\frac{n\pi x}{L}\right)\,dy\,dx.}
$$

##### Vibrating circular membrane and Bessel functions

The circular geometry suggests polar coordinates $(r,\theta)$, where $x=r\cos\theta$ and $y=r\sin\theta$.

![[Kyle Kabasares - Partial Differential Equations - Polar radius and its Cartesian components.png|**Fig. 33** The radial segment and its Cartesian components $r\cos\theta$ and $r\sin\theta$.]]

To transform the Cartesian Laplacian $\nabla^2u=u_{xx}+u_{yy}$, apply the chain rule to $u$ as a function of $r$ and $\theta$.

$$
\frac{\partial u}{\partial x}
=\frac{\partial u}{\partial r}\frac{\partial r}{\partial x}
+\frac{\partial u}{\partial\theta}\frac{\partial\theta}{\partial x}.
$$

The notes refer to Section 1.5 and assign the derivation as a homework problem. The polar result for $r>0$ is

$$
\nabla^2u=\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u}{\partial r}\right)
+\frac{1}{r^2}\frac{\partial^2u}{\partial\theta^2}
=\frac{\partial^2u}{\partial r^2}+\frac{1}{r}\frac{\partial u}{\partial r}
+\frac{1}{r^2}\frac{\partial^2u}{\partial\theta^2}.
$$

The circular membrane obeys $\mechanical{u}_{tt}=\mechanical{c}^{\,2}\nabla^2\mechanical{u}$ for $0\le r\le a$ and $-\pi\le\theta\le\pi$.

![[Kyle Kabasares - Partial Differential Equations - Circular membrane and rim radius.png|**Fig. 34** The circular membrane extends from the origin to the fixed rim at $r=a$.]]

The rim is fixed, the solution stays bounded at the origin, and its angular dependence is periodic.

$$
\mechanical{u}(a,\theta,t)=0,\qquad
\lvert\mechanical{u}(0,\theta,t)\rvert<\infty.
$$

The initial displacement and velocity are

$$
\mechanical{u}(r,\theta,0)=\mechanical{\alpha}(r,\theta),\qquad
\mechanical{u}_t(r,\theta,0)=\mechanical{\beta}(r,\theta).
$$

##### Separation of variables for the circular membrane

Set $\mechanical{u}(r,\theta,t)=\phi(r,\theta)T(t)$. Substitution gives

$$
\phi T''=\mechanical{c}^{\,2}T
\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial\phi}{\partial r}\right)
+\frac{1}{r^2}\frac{\partial^2\phi}{\partial\theta^2}\right].
$$

Divide by $\mechanical{c}^{\,2}T\phi$ and set $T''/(\mechanical{c}^{\,2}T)=\nabla^2\phi/\phi=-\lambda$. The time equation and its solution for $\lambda>0$ are

$$
T''=-\lambda\mechanical{c}^{\,2}T,\qquad
T(t)=C_1\cos(\mechanical{c}\sqrt{\lambda}\,t)+C_2\sin(\mechanical{c}\sqrt{\lambda}\,t).
$$

The spatial eigenvalue problem is

$$
\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial\phi}{\partial r}\right)
+\frac{1}{r^2}\frac{\partial^2\phi}{\partial\theta^2}=-\lambda\phi,
\qquad
\phi(a,\theta)=0,
$$

with boundedness at $r=0$ and periodicity in $\theta$ as on [[#Vibrating circular membrane and Bessel functions|the section on Vibrating circular membrane and Bessel functions]]. Set $\phi(r,\theta)=f(r)g(\theta)$. This gives

$$
\frac{g}{r}(rf')'+\frac{f}{r^2}g''=-\lambda fg.
$$

Divide by $fg$ and multiply by $r^2$.

$$
\frac{r}{f}(rf')'+\frac{g''}{g}+\lambda r^2=0,\qquad
\frac{r}{f}(rf')'+\lambda r^2=-\frac{g''}{g}=\mu.
$$

The angular equation is therefore $g''=-\mu g$. The radial derivatives are ordinary derivatives because $f$ depends only on $r$.

##### Angular and radial eigenvalue problems

The angular problem is $g''=-\mu g$, with $g(\pi)=g(-\pi)$ and $g'(\pi)=g'(-\pi)$. The allowed values are $\mu_m=m^2$ for $m=0,1,2,\ldots$, and the angular factors are

$$
g(\theta)=C_3\cos(m\theta)+C_4\sin(m\theta).
$$

For $m=0$ only the constant term remains. The radial problem is

$$
r(rf')'+(\lambda r^2-\mu_m)f=0,\qquad
f(a)=0,\qquad \lvert f(0)\rvert<\infty.
$$

Dividing by $r$ for $0<r\le a$ gives $\mathcal{L}(f)+\lambda r f=0$, with

$$
\mathcal{L}(f)=(rf')'-\frac{m^2}{r}f,\qquad
p(r)=r,\quad q(r)=-\frac{m^2}{r},\quad \sigma(r)=r.
$$

The compact operator equation on the page retains $r^2$ in the eigenvalue term. The coefficient $\sigma=r$ follows from the stated division by $r$.

The endpoint $r=0$ is singular. Boundedness there replaces a regular separated endpoint condition. Both $p$ and $\sigma$ vanish at $0$, and for $m>0$, $q(r)$ is unbounded as $r\to 0^+$. The handwritten limit for $q$ omits the negative sign.

##### Bessel's differential equation

Expand the radial derivative to get

$$
r^2f''+rf'+(\lambda r^2-m^2)f=0.
$$

The next step is the change of variable $z=\sqrt{\lambda}\,r$.

Let $z=\sqrt{\lambda}\,r$ for $\lambda>0$, so $r=z/\sqrt{\lambda}$ and $dz/dr=\sqrt{\lambda}$. Write $F(z)=f(z/\sqrt{\lambda})$ to distinguish the transformed function from the original radial function. The chain rule gives

$$
\frac{dF}{dz}=\frac{df}{dr}\frac{dr}{dz}=\frac{1}{\sqrt{\lambda}}\frac{df}{dr},
\qquad
\frac{d^2F}{dz^2}=\frac{1}{\sqrt{\lambda}}\frac{d}{dr}\left(\frac{df}{dr}\right)
\frac{dr}{dz}=\frac{1}{\lambda}\frac{d^2f}{dr^2}.
$$

After substitution the radial equation becomes

$$
\frac{z^2}{\lambda}\lambda F''+\frac{z}{\sqrt{\lambda}}\sqrt{\lambda}\,F'
+\left(\lambda\frac{z^2}{\lambda}-m^2\right)F=0.
$$

Canceling the factors of $\lambda$ gives Bessel's differential equation.

$$
\boxed{z^2F''+zF'+(z^2-m^2)F=0.}
$$

In the standard form $F''+a(z)F'+b(z)F=0$, an ordinary point is a point where both coefficients are analytic. The notes describe this condition as finiteness of the coefficients and all their derivatives. A point where the coefficients fail to be analytic is singular. For Bessel's equation,

$$
a(z)=\frac{1}{z},\qquad b(z)=1-\frac{m^2}{z^2},
$$

so $z=0$ is singular for every $m$.

##### Bessel functions and their asymptotic properties

The notes repeat the Bessel equation as Eq. (1) and introduce the behavior of its solutions near $z=0$ and as $z\to\infty$.

Bessel's equation has two standard solutions for each nonnegative integer order $m$. The Bessel function of the first kind, $J_m(z)$, is bounded near $z=0$. The Bessel function of the second kind, $Y_m(z)$, is singular there.

![[Kyle Kabasares - Partial Differential Equations - First-kind Bessel functions of orders zero and one.png|**Fig. 35** The sketch compares $J_0(z)$, which starts at one, with $J_1(z)$, which starts at zero.]]

![[Kyle Kabasares - Partial Differential Equations - Second-kind Bessel functions of orders zero and one.png|**Fig. 36** The sketch compares the singular behavior near zero and the oscillations of $Y_0(z)$ and $Y_1(z)$.]]

For small positive $z$, the leading terms shown are

$$
\begin{aligned}
J_0(z)&\sim 1, & Y_0(z)&\sim \frac{2}{\pi}\ln z,\\
J_1(z)&\sim \frac{z}{2}, & Y_1(z)&\sim -\frac{2}{\pi}z^{-1},\\
J_2(z)&\sim \frac{z^2}{8}, & Y_2(z)&\sim -\frac{4}{\pi}z^{-2}.
\end{aligned}
$$

For large positive $z$, the leading oscillatory term of $J_m$ is

$$
J_m(z)=\sqrt{\frac{2}{\pi z}}\cos\left(z-\frac{\pi}{4}-\frac{m\pi}{2}\right)
+O(z^{-3/2}).
$$

The general solution is $F(z)=C_1J_m(z)+C_2Y_m(z)$.

##### Eigenvalue problem involving Bessel functions

Recall $f(a)=0$ and $\lvert f(0)\rvert<\infty$. Returning to $z=\sqrt{\lambda}\,r$ gives

$$
f(r)=C_1J_m(\sqrt{\lambda}\,r)+C_2Y_m(\sqrt{\lambda}\,r).
$$

Boundedness at the origin requires $C_2=0$.

Boundedness at $r=0$ leaves $f(r)=C_1J_m(\sqrt{\lambda}\,r)$. The fixed rim gives

$$
C_1J_m(\sqrt{\lambda}\,a)=0.
$$

The choice $C_1=0$ gives the zero function. A nonzero eigenfunction therefore requires $\sqrt{\lambda}\,a$ to be a positive zero of $J_m$.

Let $z_{mn}$ be the $n$th positive zero of $J_m$. The radial eigenvalues and eigenfunctions are

$$
\boxed{\lambda_{mn}=\left(\frac{z_{mn}}{a}\right)^2,\qquad
f_{mn}(r)=J_m(\sqrt{\lambda_{mn}}\,r)=J_m\left(\frac{z_{mn}r}{a}\right),}
$$

for $m=0,1,2,\ldots$ and $n=1,2,\ldots$. For example, $z_{01}\approx 2.4$, so when $a=1$, $\lambda_{01}\approx (2.4)^2$. The notes refer to the handbook by Abramowitz and Stegun, dated 1974 on the page, for tables of the zeros.

**Vibrating circular membrane and Bessel functions**

The full circular membrane problem is

$$
\begin{aligned}
\mechanical{u}_{tt}&=\mechanical{c}^{\,2}\nabla^2\mechanical{u},&
\mechanical{u}(a,\theta,t)&=0,\\
\mechanical{u}(r,\theta,0)&=\mechanical{\alpha}(r,\theta),&
\mechanical{u}_t(r,\theta,0)&=\mechanical{\beta}(r,\theta).
\end{aligned}
$$

The product $\mechanical{u}=h(t)\phi(r,\theta)$ gives an ODE for $h$ and a PDE for $\phi$. The further product $\phi=f(r)g(\theta)$ gives a radial ODE and an angular ODE. The notes list four families of product solutions. Each uses the radial factor $J_m(\sqrt{\lambda_{mn}}\,r)$ multiplied by one angular factor from $\{\cos(m\theta),\sin(m\theta)\}$ and one time factor from

$$
\left\{\cos(\mechanical{c}\sqrt{\lambda_{mn}}\,t),
\ \sin(\mechanical{c}\sqrt{\lambda_{mn}}\,t)\right\}.
$$

For the full membrane, the angular ODE is $g''=-\mu g$. For $\mu>0$ its general solution is

$$
g(\theta)=C_1\cos(\sqrt{\mu}\,\theta)+C_2\sin(\sqrt{\mu}\,\theta).
$$

The periodic conditions $g(-\pi)=g(\pi)$ and $g'(-\pi)=g'(\pi)$ give $\sqrt{\mu}=m$ for $m=0,1,2,\ldots$. The two angular factors are $\cos(m\theta)$ and $\sin(m\theta)$, with only the constant factor at $m=0$.

##### Quarter membrane

![[Kyle Kabasares - Partial Differential Equations - Quarter membrane with fixed radial edges.png|**Fig. 37** A quarter disk bounded by the rim $r=a$ and radial edges at $\theta=0$ and $\theta=\pi/2$.]]

For fixed radial edges the angular boundary conditions are $g(0)=0$ and $g(\pi/2)=0$.

From $x=r\cos\theta$ and $y=r\sin\theta$ we have $r^2=x^2+y^2$. Differentiate at fixed $y$ and use the chain rule.

$$
\frac{\partial}{\partial x}(r^2)
=\frac{d}{dr}(r^2)\frac{\partial r}{\partial x}
=2r\frac{\partial r}{\partial x}
=2x=2r\cos\theta.
$$

For $r>0$ this gives $\partial r/\partial x=\cos\theta$.

##### Circular membrane review

The previous lecture used Bessel functions to solve the polar wave equation.

$$
\mechanical{u}_{tt}=\mechanical{c}^{\,2}\left[
\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial\mechanical{u}}{\partial r}\right)
+\frac{1}{r^2}\frac{\partial^2\mechanical{u}}{\partial\theta^2}\right],
\qquad 0<r<a,\quad -\pi\le\theta\le\pi,\quad t>0.
$$

The prescribed data are $\mechanical{u}(a,\theta,t)=0$, $\mechanical{u}(r,\theta,0)=\mechanical{\alpha}(r,\theta)$, and $\mechanical{u}_t(r,\theta,0)=\mechanical{\beta}(r,\theta)$. The condition at $r=0$ is imposed in the radial subproblem.

Write $\mechanical{u}(r,\theta,t)=T(t)\phi(r,\theta)=T(t)f(r)g(\theta)$. The first two subproblems are

1. **Time.** $T''=-\lambda\mechanical{c}^{\,2}T$, with solution

   $$
   T(t)=C_1\cos(\mechanical{c}\sqrt{\lambda}\,t)+C_2\sin(\mechanical{c}\sqrt{\lambda}\,t).
   $$

2. **Angle.** $g''=-\mu g$ on $[-\pi,\pi]$, with $g(-\pi)=g(\pi)$ and $g'(-\pi)=g'(\pi)$. The solutions are

   $$
   g(\theta)=C_3\cos(m\theta)+C_4\sin(m\theta),\qquad
   \mu_m=m^2,\quad m=0,1,2,\ldots.
   $$

3. **Radius.** The separated radial problem is

   $$
   r(rf')'+(\lambda r^2-m^2)f=0,\qquad
   f(a)=0,\qquad \lvert f(0)\rvert<\infty.
   $$

   In $f(r)=C_5J_m(\sqrt{\lambda}\,r)+C_6Y_m(\sqrt{\lambda}\,r)$, boundedness at the origin forces $C_6=0$. The rim condition then gives $\lambda_{mn}=(z_{mn}/a)^2$ for $n=1,2,\ldots$.

The separated solutions use the radial factor $J_m(\sqrt{\lambda_{mn}}\,r)$, the angular factors $\cos(m\theta)$ and $\sin(m\theta)$, and the time factors $\cos(\mechanical{c}\sqrt{\lambda_{mn}}\,t)$ and $\sin(\mechanical{c}\sqrt{\lambda_{mn}}\,t)$.

For simplicity set $\mechanical{\beta}(r,\theta)=\mechanical{u}_t(r,\theta,0)=0$. Each time factor then satisfies $T'(0)=0$. In

$$
T(t)=C_1\cos(\mechanical{c}\sqrt{\lambda}\,t)+C_2\sin(\mechanical{c}\sqrt{\lambda}\,t)
$$

the initial derivative is $T'(0)=C_2\mechanical{c}\sqrt{\lambda}$, so $C_2=0$.

Superposition gives the solution for zero initial velocity.

$$
\mechanical{u}(r,\theta,t)=
\sum_{m=0}^{\infty}\sum_{n=1}^{\infty}
\bigl[A_{mn}\cos(m\theta)+B_{mn}\sin(m\theta)\bigr]
\cos(\mechanical{c}\sqrt{\lambda_{mn}}\,t)J_m(\sqrt{\lambda_{mn}}\,r).
$$

For fixed $m$, the radial eigenfunctions are orthogonal with weight $r$.

$$
\int_0^a J_m(\sqrt{\lambda_{mp}}\,r)J_m(\sqrt{\lambda_{mq}}\,r)\,r\,dr=0,\qquad p\ne q.
$$

The radial argument $r$ in each Bessel factor follows from the eigenfunctions defined above. The handwritten integral omits these factors inside the arguments.

The eigenfunctions of $\nabla^2\phi+\lambda\phi=0$ with $\phi(a,\theta)=0$ can be chosen to form a complete orthogonal set on the disk $D$. The notes use $\phi_\lambda$ as shorthand for a basis eigenfunction with eigenvalue $\lambda$. If an eigenvalue has more than one basis function, each is included separately in the sum. For the initial displacement,

$$
\mechanical{\alpha}(r,\theta)=\sum_\lambda A_\lambda\phi_\lambda(r,\theta),
\qquad
A_\lambda=\frac{\displaystyle\iint_D\mechanical{\alpha}(r,\theta)\phi_\lambda(r,\theta)\,dA}
{\displaystyle\iint_D\phi_\lambda^2(r,\theta)\,dA}.
$$

Here $dA=r\,dr\,d\theta$, with $0\le r\le a$ and $-\pi\le\theta\le\pi$. For zero initial velocity the time evolution is

$$
\mechanical{u}(r,\theta,t)
=\sum_\lambda A_\lambda\cos(\mechanical{c}\sqrt{\lambda}\,t)\phi_\lambda(r,\theta).
$$

With the explicit cosine and sine angular basis, the same solution is

$$
\begin{aligned}
\mechanical{u}(r,\theta,t)
&=\sum_{m=0}^{\infty}\sum_{n=1}^{\infty}A_{mn}
J_m(\sqrt{\lambda_{mn}}\,r)\cos(m\theta)\cos(\mechanical{c}\sqrt{\lambda_{mn}}\,t)\\
&\quad+\sum_{m=1}^{\infty}\sum_{n=1}^{\infty}B_{mn}
J_m(\sqrt{\lambda_{mn}}\,r)\sin(m\theta)\cos(\mechanical{c}\sqrt{\lambda_{mn}}\,t).
\end{aligned}
$$

The handwritten sine sum starts at $m=0$, where the sine factor vanishes. At $t=0$, group by angular mode to express the initial displacement as

$$
\mechanical{\alpha}(r,\theta)
=\sum_{m=0}^{\infty}k_m(r)\cos(m\theta)
+\sum_{m=1}^{\infty}h_m(r)\sin(m\theta),
$$

where

$$
k_m(r)=\sum_{n=1}^{\infty}A_{mn}J_m(\sqrt{\lambda_{mn}}\,r),\qquad
h_m(r)=\sum_{n=1}^{\infty}B_{mn}J_m(\sqrt{\lambda_{mn}}\,r).
$$

Multiply the angular expansion of $\mechanical{\alpha}(r,\theta)$ by $\sin(q\theta)$ and integrate over $[-\pi,\pi]$, for an integer $q\ge 1$. All cosine terms vanish by parity, and only the sine term with $m=q$ survives. The squared sine has integral

$$
\int_{-\pi}^{\pi}\sin^2(m\theta)\,d\theta
=\int_0^\pi(1-\cos(2m\theta))\,d\theta
=\left[\theta-\frac{\sin(2m\theta)}{2m}\right]_0^\pi=\pi
$$

for integer $m\ge 1$. Hence

$$
h_m(r)=\frac{1}{\pi}\int_{-\pi}^{\pi}\mechanical{\alpha}(r,\theta)\sin(m\theta)\,d\theta.
$$

Using the radial expansion from [[#Circular membrane review|the section on Circular membrane review]] gives

$$
\sum_{n=1}^{\infty}B_{mn}J_m(\sqrt{\lambda_{mn}}\,r)
=\frac{1}{\pi}\int_{-\pi}^{\pi}\mechanical{\alpha}(r,\theta)\sin(m\theta)\,d\theta.
$$

The last handwritten line shows a single radial term. Angular projection fixes $m$ and leaves the sum over $n$.

##### Final exam study. Vibrating rectangular membrane

![[Kyle Kabasares - Partial Differential Equations - Rectangular membrane in the final exam review.png|**Fig. 38** The review sketch marks $x=0$, $x=L$, $y=0$, and $y=H$ on the membrane boundary.]]

The equation, fixed-edge conditions, and initial conditions are

$$
\begin{aligned}
\mechanical{u}_{tt}&=\mechanical{c}^{\,2}(\mechanical{u}_{xx}+\mechanical{u}_{yy}),\\
\mechanical{u}(0,y,t)&=\mechanical{u}(L,y,t)=0,\qquad
\mechanical{u}(x,0,t)=\mechanical{u}(x,H,t)=0,\\
\mechanical{u}(x,y,0)&=\mechanical{\alpha}(x,y),\qquad
\mechanical{u}_t(x,y,0)=\mechanical{\beta}(x,y).
\end{aligned}
$$

Start with $\mechanical{u}(x,y,t)=h(t)\phi(x,y)$. Substitution into the membrane equation and division by $\mechanical{c}^{\,2}h\phi$ give

$$
\phi h''=h\mechanical{c}^{\,2}(\phi_{xx}+\phi_{yy}),\qquad
\frac{h''}{\mechanical{c}^{\,2}h}
=\frac{\phi_{xx}+\phi_{yy}}{\phi}=-\lambda.
$$

Thus $h''=-\lambda\mechanical{c}^{\,2}h$ and the spatial problem is

$$
\phi_{xx}+\phi_{yy}=-\lambda\phi,\qquad
\phi(0,y)=\phi(L,y)=0,\qquad
\phi(x,0)=\phi(x,H)=0.
$$

Set $\phi(x,y)=f(x)g(y)$, so $\mechanical{u}(x,y,t)=f(x)g(y)h(t)$. The spatial equation becomes $gf''+fg''=-\lambda fg$. Divide by $fg$ to separate the $x$ and $y$ terms.

$$
\frac{f''}{f}+\frac{g''}{g}=-\lambda,\qquad
\frac{f''}{f}=-\lambda-\frac{g''}{g}=-\mu.
$$

The homogeneous boundary conditions determine the allowed separation constants through the two problems

$$
\begin{aligned}
f''&=-\mu f, & f(0)&=f(L)=0,\\
g''&=-(\lambda-\mu)g, & g(0)&=g(H)=0.
\end{aligned}
$$

For the $x$ equation $f''=-\mu f$ with $\mu>0$, the characteristic roots are $\pm i\sqrt{\mu}$. The real solution is

$$
f(x)=C_1\cos(\sqrt{\mu}\,x)+C_2\sin(\sqrt{\mu}\,x).
$$

The condition $f(0)=0$ gives $C_1=0$. For a nonzero mode, $f(L)=0$ requires $\sin(\sqrt{\mu}\,L)=0$. Hence

$$
\sqrt{\mu_n}=\frac{n\pi}{L},\qquad
\mu_n=\left(\frac{n\pi}{L}\right)^2,\qquad
f_n(x)=\sin\left(\frac{n\pi x}{L}\right),\qquad n=1,2,\ldots.
$$

For each $n$, the equation $g''=-(\lambda-\mu_n)g$ with $g(0)=g(H)=0$ is still an eigenvalue problem with infinitely many eigenvalues. Use a second index $m$ for its modes.

$$
\lambda_{nm}-\mu_n=\left(\frac{m\pi}{H}\right)^2,\qquad
g_{nm}(y)=\sin\left(\frac{m\pi y}{H}\right),\qquad m=1,2,\ldots.
$$

The combined eigenvalue and eigenfunction are

$$
\lambda_{nm}=\left(\frac{n\pi}{L}\right)^2+\left(\frac{m\pi}{H}\right)^2,\qquad
\phi_{nm}(x,y)=\sin\left(\frac{n\pi x}{L}\right)\sin\left(\frac{m\pi y}{H}\right).
$$

The review then returns to the time equation $h''=-\lambda\mechanical{c}^{\,2}h$.

The characteristic equation $r^2=-\lambda\mechanical{c}^{\,2}$ gives roots $r=\pm i\mechanical{c}\sqrt{\lambda}$. For mode $(n,m)$ the time factor is

$$
h_{nm}(t)=C_3\cos(\mechanical{c}\sqrt{\lambda_{nm}}\,t)
+C_4\sin(\mechanical{c}\sqrt{\lambda_{nm}}\,t).
$$

The frequency is $\mechanical{c}\sqrt{(n\pi/L)^2+(m\pi/H)^2}$. The handwritten intermediate time formula drops $\mechanical{c}$ and appears to use $L$ in both denominators. The characteristic roots, the spatial eigenvalues, and the superposition below give the factors used here.

$$
\begin{aligned}
\mechanical{u}(x,y,t)
&=\sum_{m=1}^{\infty}\sum_{n=1}^{\infty}
 A_{nm}\sin\left(\frac{n\pi x}{L}\right)\sin\left(\frac{m\pi y}{H}\right)
 \cos(\mechanical{c}\sqrt{\lambda_{nm}}\,t)\\
&\quad+\sum_{m=1}^{\infty}\sum_{n=1}^{\infty}
 B_{nm}\sin\left(\frac{n\pi x}{L}\right)\sin\left(\frac{m\pi y}{H}\right)
 \sin(\mechanical{c}\sqrt{\lambda_{nm}}\,t).
\end{aligned}
$$

The two initial conditions determine $A_{nm}$ and $B_{nm}$. The initial displacement gives

$$
\mechanical{\alpha}(x,y)=\sum_{m=1}^{\infty}g_m(x)\sin\left(\frac{m\pi y}{H}\right),
\qquad
g_m(x)=\sum_{n=1}^{\infty}A_{nm}\sin\left(\frac{n\pi x}{L}\right).
$$

For fixed $x$, the inner sum is the coefficient of the $m$th sine in $y$. Multiply by $\sin(q\pi y/H)$ and integrate from $0$ to $H$. Only $m=q$ remains. Relabeling the surviving mode as $m$ gives

$$
\int_0^H\mechanical{\alpha}(x,y)\sin\left(\frac{m\pi y}{H}\right)\,dy
=\frac{H}{2}g_m(x),
\qquad
\frac{2}{H}\int_0^H\mechanical{\alpha}(x,y)\sin\left(\frac{m\pi y}{H}\right)\,dy
=\sum_{n=1}^{\infty}A_{nm}\sin\left(\frac{n\pi x}{L}\right).
$$

Project $g_m(x)$ onto the $n$th sine on $[0,L]$.

$$
\int_0^L\left[\frac{2}{H}\int_0^H
\mechanical{\alpha}(x,y)\sin\left(\frac{m\pi y}{H}\right)\,dy\right]
\sin\left(\frac{n\pi x}{L}\right)\,dx=\frac{L}{2}A_{nm}.
$$

Multiplying by $2/L$ gives the coefficient $A_{nm}$. Apply the same projection to the initial velocity to find $B_{nm}$, with the time derivative factor as on [[#Coefficients from the initial membrane velocity|the section on Coefficients from the initial membrane velocity]].

##### Final exam study. Vibrating circular membrane

The wave equation, rim condition, and initial data are

$$
\begin{aligned}
\mechanical{u}_{tt}&=\mechanical{c}^{\,2}\nabla^2\mechanical{u},&
\mechanical{u}(a,\theta,t)&=0,\\
\mechanical{u}(r,\theta,0)&=\mechanical{\alpha}(r,\theta),&
\mechanical{u}_t(r,\theta,0)&=\mechanical{\beta}(r,\theta).
\end{aligned}
$$

Let $\mechanical{u}(r,\theta,t)=\phi(r,\theta)h(t)$. Substitution gives $\phi h''=h\mechanical{c}^{\,2}\nabla^2\phi$. Divide to separate the variables.

$$
\frac{h''}{\mechanical{c}^{\,2}h}=\frac{\nabla^2\phi}{\phi}=-\lambda.
$$

The time equation is $h''=-\lambda\mechanical{c}^{\,2}h$. The spatial problem is

$$
\nabla^2\phi+\lambda\phi=0,\qquad \phi(a,\theta)=0.
$$

Separate the spatial factor as $\phi(r,\theta)=f(r)g(\theta)$ on $0<r<a$ and $-\pi<\theta<\pi$.

Use the polar Laplacian in $\nabla^2\phi+\lambda\phi=0$ with $\phi=f(r)g(\theta)$.

$$
\frac{g}{r}\frac{d}{dr}(rf')+\frac{f}{r^2}g''+\lambda fg=0.
$$

Divide by $fg$ and multiply by $r^2$.

$$
\frac{1}{fr}\frac{d}{dr}(rf')+\frac{g''}{gr^2}+\lambda=0,
\qquad
\frac{r}{f}\frac{d}{dr}(rf')+\lambda r^2=-\frac{g''}{g}=\mu.
$$

The three ordinary differential equations are

$$
\begin{aligned}
h''&=-\lambda\mechanical{c}^{\,2}h, &&\text{(1)}\\
g''&=-\mu g, &&\text{(2)}\\
r(rf')'+(\lambda r^2-\mu)f&=0. &&\text{(3)}
\end{aligned}
$$

For Eq. (3), the radial part of the separated equation first gives $r(rf')'/f=\mu-\lambda r^2$. The angular conditions are $g(-\pi)=g(\pi)$ and $g'(-\pi)=g'(\pi)$. The rim condition $\phi(a,\theta)=0$ gives $f(a)=0$ for a nonzero angular factor, and $\lvert f(0)\rvert<\infty$ imposes boundedness at the origin.

For the angular equation $g''=-\mu g$ with $\mu>0$, the characteristic roots are $\pm i\sqrt{\mu}$. Its general solution has the equivalent forms

$$
g(\theta)=D_1e^{i\sqrt{\mu}\,\theta}+D_2e^{-i\sqrt{\mu}\,\theta}
=C_1\cos(\sqrt{\mu}\,\theta)+C_2\sin(\sqrt{\mu}\,\theta).
$$

The square root and the argument $\theta$ follow from the characteristic roots. With the periodic conditions, $\mu_m=m^2$ for $m=0,1,2,\ldots$, and the angular modes are linear combinations of $\sin(m\theta)$ and $\cos(m\theta)$, including the constant mode at $m=0$.

For each $m$, solve the radial eigenvalue problem

$$
r(rf')'+(\lambda r^2-m^2)f=0,\qquad
f(a)=0,\qquad \lvert f(0)\rvert<\infty.
$$

Divide by $r$ to obtain the Sturm–Liouville form.

$$
(rf')'+\left(\lambda r-\frac{m^2}{r}\right)f=0,\qquad
p(r)=r,\quad \sigma(r)=r,\quad q(r)=-\frac{m^2}{r}.
$$

The problem is singular at $r=0$. The condition there is boundedness, both $p$ and $\sigma$ vanish, and for $m\ne 0$ the coefficient $q$ diverges to $-\infty$. The handwritten discussion appears to repeat $q$ where the coefficient list gives $\sigma$ and omits the negative sign in the divergence.

For fixed $m$, the radial eigenfunctions are orthogonal with weight $r$.

$$
\int_0^a f_{mn_1}(r)f_{mn_2}(r)\,r\,dr=0
\qquad\text{for }n_1\ne n_2.
$$

##### Reduction to Bessel's equation

Starting from the Sturm–Liouville form, expand the radial derivative and multiply by $r$.

$$
\begin{aligned}
(rf')'+\left(\lambda r-\frac{m^2}{r}\right)f&=0,\\
f'+rf''+\left(\lambda r-\frac{m^2}{r}\right)f&=0,\\
r^2 f''+r f'+(\lambda r^2-m^2)f&=0.
\end{aligned}
$$

Use $z=\sqrt{\lambda}\,r$, $r(z)=z/\sqrt{\lambda}$, and $dr/dz=1/\sqrt{\lambda}$. With $F(z)=f(r(z))$ as on [[#Bessel functions and their asymptotic properties|the section on Bessel functions and their asymptotic properties]],

$$
\frac{dF}{dz}=\frac{df}{dr}\frac{dr}{dz}=\frac{1}{\sqrt{\lambda}}\frac{df}{dr},
\qquad
\frac{df}{dr}=\sqrt{\lambda}\frac{dF}{dz}.
$$

For the second derivative, apply the product and chain rules.

$$
\frac{d^2F}{dz^2}
=\frac{d^2f}{dr^2}\left(\frac{dr}{dz}\right)^2+\frac{df}{dr}\frac{d^2r}{dz^2}
=\frac{1}{\lambda}\frac{d^2f}{dr^2},
$$

since $r(z)$ is linear. Substitution gives

$$
z^2\frac{d^2F}{dz^2}+z\frac{dF}{dz}+(z^2-m^2)F=0.
$$

**Bessel functions and their asymptotic properties**

The Bessel function of the first kind of order $m$, $J_m(z)$, stays bounded at zero. The second-kind function $Y_m(z)$ is singular there. The general solution is

$$
F(z)=C_1J_m(z)+C_2Y_m(z).
$$

For nonnegative integer $m$ as $z\to 0^+$, the leading behavior is

$$
J_m(z)\sim\begin{cases}
1,&m=0,\\[2pt]
\displaystyle\frac{z^m}{2^m m!},&m>0,
\end{cases}
\qquad
Y_m(z)\sim\begin{cases}
\displaystyle\frac{2}{\pi}\ln z,&m=0,\\[4pt]
\displaystyle-\frac{2^m(m-1)!}{\pi}z^{-m},&m>0.
\end{cases}
$$

The handwritten note marks the divergence with $\pm\infty$. The displayed leading terms give $Y_m(z)\to-\infty$ as $z\to 0^+$.

##### Eigenvalue problem with Bessel functions

Start with

$$
(rf')'+\left(\lambda r-\frac{m^2}{r}\right)f=0,\qquad
f(a)=0,\qquad \lvert f(0)\rvert<\infty.
$$

The change of variable $z=\sqrt{\lambda}\,r$ gives $z^2F''+zF'+(z^2-m^2)F=0$, with the first- and second-kind solution above.

In the original radial variable the general solution is

$$
f(r)=C_1J_m(\sqrt{\lambda}\,r)+C_2Y_m(\sqrt{\lambda}\,r).
$$

The condition $\lvert f(0)\rvert<\infty$ gives $C_2=0$. Then $f(a)=0$ gives $C_1J_m(\sqrt{\lambda}\,a)=0$. For a nonzero eigenfunction, let $\sqrt{\lambda}\,a=z_{mn}$, the $n$th positive zero of $J_m$. There are infinitely many eigenvalues for each $m$.

$$
\lambda_{mn}=\left(\frac{z_{mn}}{a}\right)^2,\qquad
f_{mn}(r)=J_m(\sqrt{\lambda_{mn}}\,r)=J_m\left(\frac{z_{mn}r}{a}\right),
\qquad m=0,1,2,\ldots,\quad n=1,2,\ldots.
$$

For fixed $m$, the functions are orthogonal with weight $r$.

$$
\int_0^a J_m(\sqrt{\lambda_{mp}}\,r)J_m(\sqrt{\lambda_{mq}}\,r)\,r\,dr
=0,\qquad p\ne q.
$$

They form a complete set for the radial expansion at fixed $m$. The generalized Fourier expansion of $\alpha(r)$ is called a Fourier–Bessel series.

$$
\alpha(r)=\sum_{n=1}^{\infty}a_nJ_m(\sqrt{\lambda_{mn}}\,r).
$$

The final handwritten formula appears to use $J_n$. The preceding eigenfunctions and the fixed-order condition give $J_m$.

##### Fourier–Bessel coefficients

For fixed $m$, multiply the expansion $\alpha(r)=\sum_{n=1}^{\infty}a_nJ_m(\sqrt{\lambda_{mn}}\,r)$ by $J_m(\sqrt{\lambda_{mp}}\,r)$ and integrate with weight $r$.

$$
\int_0^a\alpha(r)J_m(\sqrt{\lambda_{mp}}\,r)\,r\,dr
=\sum_{n=1}^{\infty}a_n\int_0^a
J_m(\sqrt{\lambda_{mn}}\,r)J_m(\sqrt{\lambda_{mp}}\,r)\,r\,dr.
$$

Orthogonality makes the integrals with $n\ne p$ zero. Relabel the surviving index as $n$ and divide by the squared norm to obtain

$$
\boxed{a_n=\frac{\displaystyle\int_0^a\alpha(r)J_m(\sqrt{\lambda_{mn}}\,r)\,r\,dr}
{\displaystyle\int_0^a J_m^2(\sqrt{\lambda_{mn}}\,r)\,r\,dr}.}
$$

##### Initial-value problem for a vibrating circular membrane

The separated solution has the form $\mechanical{u}(r,\theta,t)=f(r)g(\theta)h(t)$. Its product modes combine one factor from each of the following groups.

$$
J_m(\sqrt{\lambda_{mn}}\,r),\qquad
\{\cos(m\theta),\sin(m\theta)\},\qquad
\{\cos(\mechanical{c}\sqrt{\lambda_{mn}}\,t),
\ \sin(\mechanical{c}\sqrt{\lambda_{mn}}\,t)\}.
$$

For a membrane initially at rest, $\mechanical{u}_t(r,\theta,0)=\mechanical{\beta}(r,\theta)=0$. The cosine time factors have zero initial derivative, as in the solution on [[#Circular membrane review|the section on Circular membrane review]].

## Source

Kyle Kabasares, *Partial Differential Equations (Math 126, UC Merced 2017)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{u}$ | $\unit{Pa}$ | Pressure | Unknown pressure in the divergence-form example. |
| $\thermal{u}$ | $\unit{K}$ | Temperature | Temperature in the rod as a function of position and time. |
| $\thermal{k}$ | $\unit{m^2/s}$ | Thermal diffusivity | Ratio of conductivity to volumetric heat capacity. |
| $\mechanical{c}$, $\mechanical{v}$ | $\unit{m\,s^{-1}}$ | Wave speed | Constant propagation speed in the scalar or vector wave equation. |
| $\mechanical{\beta}$ | $\unit{s^{-1}}$ | Velocity damping coefficient | Coefficient of the transverse velocity in the damped wave equation. |
| $L$, $H$ | $\unit{m}$ | Rectangular membrane dimensions | Length in the $x$ direction and height in the $y$ direction. |
| $\mechanical{\alpha}(x,y)$ | $\unit{m}$ | Initial membrane displacement | Transverse displacement of the membrane at $t=0$. |
| $\mechanical{\beta}(x,y)$ | $\unit{m\,s^{-1}}$ | Initial membrane velocity | Transverse velocity of the membrane at $t=0$. |
| $r$, $a$ | $\unit{m}$ | Radial distance and membrane radius | Distance from the center and its value at the fixed rim. |
