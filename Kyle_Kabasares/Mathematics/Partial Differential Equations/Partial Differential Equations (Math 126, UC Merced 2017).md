---
title: "Partial Differential Equations (Math 126, UC Merced 2017)"
---

> [!TLDR]
> These Math 126 notes classify partial differential equations and develop methods for solving them with initial and boundary conditions.

Source notes by Kyle Kabasares. [[Partial Differential Equations (Math 126, UC Merced 2017).pdf|Original PDF]].

Transcribed PDF pages 1–108 of 108.

### PDF page 1

#### Math 126

The page is dated January 17, 2016 in the handwriting. Quizzes cover the previous week's material.

An example with boundary conditions on a domain $\Omega\subset\mathbb R^d$ is

$$
-\nabla\cdot(a\nabla\mechanical{u})=f.
$$

Here $f$ is a given source function, $a$ is a material coefficient described as permeability or permittivity, and $\mechanical{u}$ is the unknown pressure in the pressure interpretation.

The second example is a wave equation for scattering, again on a domain $\Omega\subset\mathbb R^d$ with boundary conditions.

$$
u_{tt}-\frac{1}{s(x)^2}\Delta u=0.
$$

#### Introduction to partial differential equations

A partial differential equation involves an unknown function of several independent variables and its partial derivatives. For example,

$$
\frac{\partial u}{\partial t}(x,t)+a\frac{\partial u}{\partial x}(x,t)=f(x,t),
$$

where $u$ depends on the spatial variable $x$ and time $t$, and $a$ is a known coefficient.

#### Classifying differential equations

- **Number of independent variables.** One gives an ordinary differential equation. Two or more give a partial differential equation.
- **Order.** The highest derivative determines the order. The examples below are first, second, and third order, respectively.
- **Linearity.** A linear equation has $u$ and its derivatives only to the first power, with coefficients that can depend on the independent variables.

$$
u_x+u_t=0,\qquad
u_{xx}+u_t=0,\qquad
\mu u_{xx}+4u_{xxt}+u=0.
$$

The mixed derivative $u_{xxt}$ denotes $\partial^3u/(\partial t\,\partial x^2)$.

### PDF page 2

#### Three standard examples

$$
\begin{aligned}
u_{xx}+u_{yy}&=f &&\text{(Poisson equation)},\\
u_t-ku_{xx}&=f &&\text{(heat equation)},\\
u_{tt}-ku_{xx}&=f &&\text{(wave equation)}.
\end{aligned}
$$

#### Introduction to PDEs continued (January 19, 2017)

Write $u_{xx}-u_t=Q(x)$ as $L(u)=Q(x)$, where $L=\partial^2/\partial x^2-\partial/\partial t$ is a differential operator. In this notation $u_{xx}=\partial^2u/\partial x^2$ and $u_t=\partial u/\partial t$. The operator is linear, so

$$
L(\alpha_1u_1+\alpha_2u_2)=\alpha_1L(u_1)+\alpha_2L(u_2).
$$

A general linear second-order PDE in two independent variables has the form

$$
a u_{tt}+b u_{tx}+c u_{xx}+d u_t+e u_x+f u=g.
$$

The functions $a,b,c,d,e,f$ are the coefficients and $g$ is the source term. The independent variables are position $x$ and time $t$. The mixed derivative can be written $u_{tx}=\partial_t(\partial_x u)$. The page also gives $\partial_x(c(x)\partial_x u)$ as a term that can occur in divergence form.

The discriminant $b^2-4ac$ of the second-order part determines the type.

| Discriminant | Type |
| --- | --- |
| $b^2-4ac<0$ | Elliptic |
| $b^2-4ac=0$ | Parabolic |
| $b^2-4ac>0$ | Hyperbolic |

### PDF page 3

The PDE variable $u$ is the unknown function. To see where the discriminant comes from, compare the coefficients of the second derivatives with those in a conic equation. For $a\ne0$, complete the square.

$$
\begin{aligned}
ax^2+bxy+cy^2+dx+ey+f
&=a\left(x^2+\frac ba xy+\frac ca y^2\right)+dx+ey+f\\
&=a\left(x+\frac{by}{2a}\right)^2
+\left(c-\frac{b^2}{4a}\right)y^2+dx+ey+f
=g.
\end{aligned}
$$

For nondegenerate real conics, $4ac-b^2>0$ gives an ellipse, $4ac-b^2<0$ gives a hyperbola, and $4ac-b^2=0$ gives a parabola. This parallels the elliptic, hyperbolic, and parabolic PDE types. The handwritten line for the parabolic case also lists $a=0$. In that case the discriminant vanishes only if $b=0$.

#### Classification examples

1. **Heat equation.** For $u_t-u_{xx}=0$, the coefficients in the preceding $(t,x)$ ordering are $d=1$, $c=-1$, and $a=b=0$. The discriminant vanishes, so the equation is parabolic.
2. **Wave equation.** For $u_{tt}-u_{xx}=0$, $a=1$, $b=0$, and $c=-1$. Thus $4ac-b^2=-4$, so the equation is hyperbolic.
3. **Mixed derivative example.** For $u_{xx}+4u_{xy}+3u_{yy}+3u_x-u_y+2u=0$, the coefficients in $(x,y)$ order are $a=1$, $b=4$, $c=3$, $d=3$, $e=-1$, $f=2$, and $g=0$. Since $b^2-4ac=16-12=4$, the equation is hyperbolic.
4. **Laplace's equation.** For $u_{xx}+u_{yy}=0$, $a=c=1$ and $b=0$. The equation is elliptic.

### PDF page 4

#### Chapter 1. The heat equation

The one-dimensional heat equation is

$$
\thermal{c}\mechanical{\rho}\frac{\partial\thermal{u}}{\partial t}
=\frac{\partial}{\partial x}\left(\thermal{k}_0(x)\frac{\partial\thermal{u}}{\partial x}\right)
+\thermal{Q}(x,t).
$$

The temperature $\thermal{u}$ depends on position and time. The specific heat $\thermal{c}$, mass density $\mechanical{\rho}$, and thermal conductivity $\thermal{k}_0$ depend on the material and can vary with $x$. The term $\thermal{Q}$ is a heat source per unit volume.

For constant material properties, define the thermal diffusivity $\thermal{k}=\thermal{k}_0/(\thermal{c}\mechanical{\rho})$. Dividing by $\thermal{c}\mechanical{\rho}$ gives

$$
\frac{\partial\thermal{u}}{\partial t}
=\thermal{k}\frac{\partial^2\thermal{u}}{\partial x^2}+\thermal{Q}',
\qquad
\thermal{Q}'=\frac{\thermal{Q}}{\thermal{c}\mechanical{\rho}}.
$$

![[Kyle Kabasares - Partial Differential Equations - Rod and cross sectional area.png|**Fig. 1** A rod extends along the $x$-axis. The sketch marks the cross-sectional area and a segment from $x$ to $x+\Delta x$.]]

Write $\energy{e}(x,t)$ for the thermal energy per unit volume. The derivation will use conservation of thermal energy and Fourier's law of heat conduction.

### PDF page 5

For a rod with constant cross-sectional area $\mechanical{A}$, the thermal energy in a short segment of length $\Delta x$ is approximately $\energy{e}(x,t)\mechanical{A}\Delta x$. Its rate of change is the net heat flow through the two end faces plus the heat generated inside the segment. With $\thermal{\phi}(x,t)$ denoting heat flux in the positive $x$ direction,

$$
\frac{\partial}{\partial t}\bigl(\energy{e}(x,t)\mechanical{A}\Delta x\bigr)
\approx\mechanical{A}\bigl(\thermal{\phi}(x,t)-\thermal{\phi}(x+\Delta x,t)\bigr)
+\thermal{Q}(x,t)\mechanical{A}\Delta x.
$$

Divide by $\mechanical{A}\Delta x$ and take $\Delta x\to0$ to obtain

$$
\frac{\partial\energy{e}}{\partial t}=-\frac{\partial\thermal{\phi}}{\partial x}+\thermal{Q}(x,t).
$$

Fourier's law gives $\thermal{\phi}=-\thermal{k}_0\partial\thermal{u}/\partial x$.

#### Eigenvalue problem (discussion, January 20, 2017)

Consider $y''(x)=-\lambda y(x)$ on $0\le x\le1$, with $\lambda\in\mathbb R$ and $y(0)=y(1)=0$. The notes also sketch the case $y'(0)=0$, $y(1)=0$.

![[Kyle Kabasares - Partial Differential Equations - Eigenfunction with two zero endpoint values.png|**Fig. 2** The function vanishes at both endpoints.]]

![[Kyle Kabasares - Partial Differential Equations - Eigenfunction with mixed endpoint conditions.png|**Fig. 3** The sketch for a prescribed slope at the left endpoint and zero value at the right endpoint.]]

The characteristic equation is $r^2=-\lambda$. Its roots determine the form of the general solution.

$$
y(x)=
\begin{cases}
c_1+c_2x & \lambda=0,\\
c_1e^{-\sqrt{-\lambda}\,x}+c_2e^{\sqrt{-\lambda}\,x} & \lambda<0,\\
c_1\cos(\sqrt{\lambda}\,x)+c_2\sin(\sqrt{\lambda}\,x) & \lambda>0.
\end{cases}
$$

### PDF page 6

#### Deriving the heat equation (January 24, 2017)

Let $\energy{e}(x,t)$ be the heat energy density. For small $\Delta x$, the thermal energy in $[x,x+\Delta x]$ is approximately $\energy{e}(x,t)\mechanical{A}\Delta x$.

![[Kyle Kabasares - Partial Differential Equations - Insulated rod segment and axial coordinate.png|**Fig. 4** The rod extends to $x=L$. The sketch marks its cross-sectional area and the ends of a short segment.]]

The signed heat flux $\thermal{\phi}(x,t)$ describes heat flow per unit area through the section at $x$. Positive flux means heat flows in the positive $x$ direction.

The notes list four requirements for a heat-flux law.

1. The flux is zero when the temperature is spatially constant.
2. Heat flows from hot to cold regions.
3. A larger temperature difference across the same distance causes more heat to flow.
4. The flux depends on the material.

Fourier's law of heat conduction satisfies these requirements.

$$
\thermal{\phi}(x,t)=-\thermal{k}\frac{\partial\thermal{u}}{\partial x},
\qquad \thermal{k}>0.
$$

On this page $\thermal{k}$ denotes the material's thermal conductivity, written $\thermal{k}_0$ on page 4. The negative sign makes the flux point in the direction of decreasing temperature.

### PDF page 7

If $\thermal{\phi}(x,t)<0$, heat flows to the left. Substituting Fourier's law into conservation of thermal energy gives

$$
\frac{\partial\energy{e}}{\partial t}
=-\frac{\partial\thermal{\phi}}{\partial x}+\thermal{Q}(x,t)
=\frac{\partial}{\partial x}
\left(\thermal{k}_0\frac{\partial\thermal{u}}{\partial x}\right)+\thermal{Q}(x,t).
$$

Here the conductivity is written $\thermal{k}_0$ as on page 4. In a short segment, the thermal energy is $\energy{e}(x,t)\mechanical{A}\Delta x\approx\thermal{c}(x)\thermal{u}(x,t)\mechanical{\rho}(x)\mechanical{A}\Delta x$, with energy measured relative to the temperature reference. Therefore $\energy{e}=\thermal{c}(x)\mechanical{\rho}(x)\thermal{u}(x,t)$. The heat equation for the temperature in the rod is

$$
\thermal{c}(x)\mechanical{\rho}(x)\frac{\partial\thermal{u}}{\partial t}
=\frac{\partial}{\partial x}
\left(\thermal{k}_0\frac{\partial\thermal{u}}{\partial x}\right)+\thermal{Q}(x,t),
\qquad 0<x<L,\quad t>0.
$$

#### Boundary and initial conditions

For perfectly insulated ends, the heat flux across each end vanishes. These are homogeneous Neumann conditions.

$$
-\thermal{k}_0(0)\frac{\partial\thermal{u}}{\partial x}(0,t)
=-\thermal{k}_0(L)\frac{\partial\thermal{u}}{\partial x}(L,t)=0,
\qquad t>0.
$$

For ends held at the reference temperature, the notes prescribe $\thermal{u}(0,t)=\thermal{u}(L,t)=0$ for $t>0$. These are homogeneous Dirichlet conditions.

### PDF page 8

#### Newton's law of cooling and the initial condition

The notes refer to page 12 for Newton's law of cooling. At the left endpoint the Robin condition is

$$
-\thermal{k}_0(0)\frac{\partial\thermal{u}}{\partial x}(0,t)
+\thermal{H}\thermal{u}(0,t)=\thermal{H}\thermal{u}_B(t),
\qquad t>0.
$$

Here $\thermal{u}_B(t)$ is the surrounding temperature and $\thermal{H}$ is the heat transfer coefficient. The initial condition prescribes $\thermal{u}(x,t_0)=\thermal{\psi}(x)$ for $0<x<L$. Combining the heat equation with this profile and the homogeneous Dirichlet conditions $\thermal{u}(0,t)=\thermal{u}(L,t)=0$ gives an initial–boundary value problem.

#### Steady-state heat equation

At steady state $\thermal{u}=\thermal{u}(x)$ and $\partial\thermal{u}/\partial t=0$. With a time-independent source, the Dirichlet problem becomes

$$
-\frac{d}{dx}\left(\thermal{k}_0(x)\frac{d\thermal{u}}{dx}\right)=\thermal{Q}(x),
\qquad 0<x<L,
\qquad \thermal{u}(0)=\thermal{u}(L)=0.
$$

The notes call this a Poisson problem. In the example, the conductivity is constant and the source is zero, giving $-1.5\,d^2\thermal{u}/dx^2=0$. With $x$ in centimeters, the prescribed endpoint temperatures are $\thermal{u}(0)=20$ and $\thermal{u}(100)=30$. The page writes $\unit{W/(cm\,K)}$ for conductivity when using centimeters.

![[Kyle Kabasares - Partial Differential Equations - Rod from zero to one hundred centimeters.png|**Fig. 5** The interval for the rod runs from 0 to 100 centimeters.]]

![[Kyle Kabasares - Partial Differential Equations - Temperature profiles with prescribed endpoints.png|**Fig. 6** The endpoint values are fixed at 20 and 30. The straight line is the profile that also satisfies the steady-state equation in this example.]]

Integrating $\thermal{u}''=0$ gives $\thermal{u}'=c_1$ and $\thermal{u}(x)=c_1x+c_2$. The two boundary values determine the constants.

### PDF page 9

For the constant-conductivity example, $\thermal{u}(0)=c_2=20$ and $\thermal{u}(100)=100c_1+20=30$. Thus $c_1=1/10$ and

$$
\thermal{u}(x)=20+\frac{x}{10}.
$$

In the second example, the conductivity varies along the rod.

$$
-\frac{d}{dx}\left[(1.5+0.0025x)\frac{d\thermal{u}}{dx}\right]=0,
\qquad \thermal{u}(0)=20,\qquad \thermal{u}(100)=30.
$$

The page gives $20+10\ln(1+x/560)/\ln(33/28)$. That profile has the prescribed endpoint values and corresponds to an intercept of $1.4$ in the conductivity. Using the written intercept $1.5$ gives $1.5/0.0025=600$ and the profile

$$
\thermal{u}(x)=20+10\frac{\ln(1+x/600)}{\ln(7/6)}.
$$

#### Steady-state heat equation (January 26, 2017)

Set $\partial\thermal{u}/\partial t=0$ in the constant-coefficient heat equation $\partial\thermal{u}/\partial t=\thermal{k}\partial^2\thermal{u}/\partial x^2+\thermal{Q}(x)/(\thermal{c}\mechanical{\rho})$. Setting the coefficients to one for simplicity gives $-\thermal{u}''=\thermal{Q}(x)$ under the source convention on page 8. The abbreviated equation in the handwriting drops the minus sign.

#### Chapter 2. Separation of variables

On the interval $0<x<L$, the heat equation with a source and prescribed end temperatures is

$$
\begin{aligned}
\frac{\partial\thermal{u}}{\partial t}
&=\thermal{k}\frac{\partial^2\thermal{u}}{\partial x^2}+f(x,t),
&&0<x<L,\quad t>0,\\
\thermal{u}(x,0)&=\thermal{\phi}(x),\\
\thermal{u}(0,t)&=\thermal{T}_1(t),&
\thermal{u}(L,t)&=\thermal{T}_2(t),\qquad t>0.
\end{aligned}
$$

![[Kyle Kabasares - Partial Differential Equations - Rod endpoints for separation of variables.png|**Fig. 7** The rod is modeled on the interval from $0$ to $L$.]]

### PDF page 10

The heat equation is homogeneous if $f(x,t)=0$. Its Dirichlet conditions are homogeneous if $\thermal{T}_1(t)=\thermal{T}_2(t)=0$ for all $t$. The separation-of-variables procedure here starts with a linear homogeneous PDE and homogeneous boundary conditions.

#### Checking linearity

Define the heat operator $L=\partial/\partial t-\thermal{k}\partial^2/\partial x^2$. For constants $c_1,c_2$,

$$
\begin{aligned}
L(c_1\thermal{u}_1+c_2\thermal{u}_2)
&=\partial_t(c_1\thermal{u}_1+c_2\thermal{u}_2)
-\thermal{k}\partial_x^2(c_1\thermal{u}_1+c_2\thermal{u}_2)\\
&=c_1\partial_t\thermal{u}_1+c_2\partial_t\thermal{u}_2
-\thermal{k}\left(c_1\partial_x^2\thermal{u}_1+c_2\partial_x^2\thermal{u}_2\right)\\
&=c_1L(\thermal{u}_1)+c_2L(\thermal{u}_2).
\end{aligned}
$$

This proves that $L$ is linear. For the following calculations, take $f(x,t)=0$ everywhere and $\thermal{T}_1(t)=\thermal{T}_2(t)=0$ for all $t$. The zero function is the trivial solution of the linear homogeneous PDE. It also satisfies the homogeneous boundary conditions and corresponds to zero initial data.

The margin reviews the quantifiers $\forall$ (for all), $\exists$ (there exists), and $\exists!$ (there exists exactly one).

### PDF page 11

#### Principle of superposition

If $u_1$ and $u_2$ solve a linear homogeneous equation $L(u)=0$, then any linear combination $c_1u_1+c_2u_2$ also solves it. Indeed,

$$
L(c_1u_1+c_2u_2)=c_1L(u_1)+c_2L(u_2)=0.
$$

#### Separation of variables for the heat equation

Consider the homogeneous initial–boundary value problem

$$
\begin{aligned}
\frac{\partial\thermal{u}}{\partial t}
&=\thermal{k}\frac{\partial^2\thermal{u}}{\partial x^2},
&&0<x<L,\quad t>0,\\
\thermal{u}(x,0)&=\thermal{\phi}(x),
&&0<x<L,\\
\thermal{u}(0,t)&=\thermal{u}(L,t)=0,
&&t>0.
\end{aligned}
$$

The first line in the handwriting has $k^2$, while the substitution and the preceding definition of thermal diffusivity use $k$. The derivation here follows the latter convention.

![[Kyle Kabasares - Partial Differential Equations - Interval for the homogeneous heat problem.png|**Fig. 8** The two endpoints of the interval are at $0$ and $L$.]]

Seek a product $\thermal{u}(x,t)=X(x)T(t)$. Substitution gives $X(x)T'(t)=\thermal{k}T(t)X''(x)$. Where both factors are nonzero, division gives

$$
\frac{T'(t)}{\thermal{k}T(t)}=\frac{X''(x)}{X(x)}=-\lambda.
$$

The left side depends only on $t$ and the right side only on $x$, so both must equal a constant. The page starts this argument by writing $h(t)=T'(t)/(\thermal{k}T(t))=X''(x)/X(x)$ and differentiating with respect to $x$.

### PDF page 12

Since $h(t)$ is independent of $x$, $d h(t)/dx=0=d(X''/X)/dx$. Setting the common value to $-\lambda$ gives the time equation and the spatial boundary value problem.

$$
T'=-\lambda\thermal{k}T,\qquad X''=-\lambda X,\qquad X(0)=X(L)=0.
$$

Indeed, $\thermal{u}(0,t)=X(0)T(t)=0$ for all $t>0$. For a nontrivial separated solution $T$ is not identically zero, so $X(0)=0$. The same argument gives $X(L)=0$.

For the time equation, substituting $T(t)=e^{rt}$ gives $r=-\lambda\thermal{k}$. The general solution is

$$
T(t)=Ce^{-\lambda\thermal{k}t}.
$$

For $\lambda>0$, $T(t)$ decays exponentially. For $\lambda<0$, its magnitude grows exponentially when $C\ne0$. If $\lambda=0$, $T(t)=C$ is constant.

#### Section 2.3.4. The spatial eigenvalue problem

Find the values of $\lambda$ for which $X''=-\lambda X$ with $X(0)=X(L)=0$ has a nontrivial solution.

### PDF page 13

Substituting $X(x)=e^{rx}$ into $X''=-\lambda X$ gives the characteristic equation $r^2=-\lambda$. The notes distinguish four cases.

- If $\lambda>0$, the roots are $\pm i\sqrt{\lambda}$. Euler's formula gives $e^{\pm i\sqrt{\lambda}x}=\cos(\sqrt{\lambda}x)\pm i\sin(\sqrt{\lambda}x)$, so the real general solution is $X(x)=c_1\cos(\sqrt{\lambda}x)+c_2\sin(\sqrt{\lambda}x)$.
- If $\lambda=0$, zero is a double root.
- If $\lambda<0$, write $s=-\lambda>0$. The roots are $r=\pm\sqrt{s}$.
- The notes set aside complex $\lambda$ and say that the eigenvalues will be shown to be real.

#### Discussion (January 27, 2017)

For the equation $u'(x)+u(x)=f(x)$, find the general solution $y_h$ of the homogeneous equation $u'+u=0$ and one particular solution $y_p$ of the forced equation. Their sum solves the forced equation. The notes also start an example with a linear PDE of the form $Au_{xx}+Bu_{xy}+\cdots+Fu=G$.

#### Steady-state temperatures

The example uses the heat equation with diffusivity scaled to one, a source $Q$, an initial profile $f$, and real boundary temperatures $\alpha>\beta$.

$$
\partial_t\thermal{u}=\partial_x^2\thermal{u}+\thermal{Q},
\qquad
\thermal{u}(x,0)=\thermal{f}(x),
\qquad
\thermal{u}(0,t)=\thermal{\alpha},
\qquad
\thermal{u}(L,t)=\thermal{\beta}.
$$

### PDF page 14

The separated time equation gives $T(t)=Ce^{-\lambda\thermal{k}t}$. For the spatial equation, the exponential ansatz gives $r^2+\lambda=0$. When $\lambda>0$, the two exponential solutions $e^{\pm i\sqrt{\lambda}x}$ give the real solutions $\cos(\sqrt{\lambda}x)$ and $\sin(\sqrt{\lambda}x)$ by Euler's formula and superposition. Thus

$$
X(x)=c_1\cos(\sqrt{\lambda}x)+c_2\sin(\sqrt{\lambda}x).
$$

At the left endpoint $X(0)=c_1=0$. At the right endpoint $X(L)=c_2\sin(\sqrt{\lambda}L)=0$. If $c_2=0$, the solution is trivial. Otherwise $\sqrt{\lambda}L$ must be a positive zero of sine.

![[Kyle Kabasares - Partial Differential Equations - Sine zeros for the spatial eigenvalues.png|**Fig. 9** The sine curve crosses the axis at integer multiples of $\pi$.]]

With $\sqrt{\lambda}L=n\pi$, the positive eigenvalues and corresponding eigenfunctions are

$$
\lambda_n=\left(\frac{n\pi}{L}\right)^2,
\qquad
X_n(x)=c_2\sin\left(\frac{n\pi x}{L}\right),
\qquad n=1,2,3,\ldots,\quad c_2\ne0.
$$

### PDF page 15

#### Zero and negative separation constants

For $\lambda=0$, the equation is $X''=0$, so $X'=c_1$ and $X(x)=c_1x+c_2$. The left boundary condition gives $c_2=0$. The right boundary condition gives $c_1L=0$, so $c_1=0$. Only the trivial solution exists.

For $\lambda<0$, set $s=-\lambda>0$. The roots of $r^2=s$ are $r=\pm\sqrt{s}$. In place of $e^{\sqrt{s}x}$ and $e^{-\sqrt{s}x}$, use the hyperbolic functions.

$$
\cosh z=\frac{e^z+e^{-z}}2,\qquad
\sinh z=\frac{e^z-e^{-z}}2.
$$

They satisfy $\cosh 0=1$, $\sinh 0=0$, $(\cosh z)'=\sinh z$, and $(\sinh z)'=\cosh z$. The general solution is

$$
X(x)=c_3\cosh(\sqrt{s}x)+c_4\sinh(\sqrt{s}x).
$$

The left condition gives $c_3=0$. At the right endpoint, $c_4\sinh(\sqrt{s}L)=0$. The equation $\sinh(\sqrt{s}L)=0$ would give $e^{\sqrt{s}L}=e^{-\sqrt{s}L}$, which requires $\sqrt{s}L=0$. Since $s>0$ and $L>0$, it follows that $c_4=0$. The negative case also yields only the trivial solution.

### PDF page 16

For these Dirichlet conditions there are no negative eigenvalues, although other boundary value problems can have negative eigenvalues. Summarizing, the spatial problem $X''=-\lambda X$, $X(0)=X(L)=0$, gives $X_n(x)=c_2\sin(n\pi x/L)$ and $\lambda_n=(n\pi/L)^2$ for $n=1,2,\ldots$. Combining $X_n$ with $T_n(t)=Ce^{-\lambda_n\thermal{k}t}$ gives

$$
\thermal{u}_n(x,t)=B e^{-\thermal{k}(n\pi/L)^2t}
\sin\left(\frac{n\pi x}{L}\right),
\qquad B=Cc_2.
$$

As $t\to\infty$, $\thermal{u}_n(x,t)\to0$. At $t=0$, the temperature is $B\sin(n\pi x/L)$.

For $\partial_t\thermal{u}=\thermal{k}\partial_x^2\thermal{u}$ with zero endpoint temperatures and initial profile $\thermal{u}(x,0)=4\sin(3\pi x/L)$, choose $B=4$ and $n=3$. The solution is

$$
\thermal{u}(x,t)=4e^{-\thermal{k}(3\pi/L)^2t}\sin\left(\frac{3\pi x}{L}\right).
$$

### PDF page 17

#### Separation of variables continued (February 2, 2017)

Section 2.3 returns to $\partial_t\thermal{u}=\thermal{k}\partial_x^2\thermal{u}$ on $0<x<L$, $t>0$, with $\thermal{u}(x,0)=\thermal{f}(x)$ and $\thermal{u}(0,t)=\thermal{u}(L,t)=0$. Each product solution has the form

$$
\thermal{u}(x,t)=X(x)T(t)
=B e^{-\thermal{k}(n\pi/L)^2t}\sin(n\pi x/L),
\qquad n=1,2,3,\ldots.
$$

At $t=0$ this gives $B\sin(n\pi x/L)$. Different $n$ give different solutions. For instance, $n=1$ gives $Be^{-\thermal{k}(\pi/L)^2t}\sin(\pi x/L)$, and the previous example has $B=4$ and $n=3$.

For the initial data $\thermal{f}(x)=4\sin(3\pi x/L)+7\sin(8\pi x/L)$, superpose the two modes.

$$
\thermal{u}(x,t)=4e^{-\thermal{k}(3\pi/L)^2t}\sin(3\pi x/L)
+7e^{-\thermal{k}(8\pi/L)^2t}\sin(8\pi x/L).
$$

At $t=0$ the exponentials are one, so the sum equals $\thermal{f}(x)$. At $x=0$ and $x=L$ both sines vanish, so the boundary conditions hold. More generally, a finite superposition is

$$
\thermal{u}(x,t)=\sum_{n=1}^{M} B_n e^{-\thermal{k}(n\pi/L)^2t}\sin(n\pi x/L),
$$

where $B_n$ is the amplitude of mode $n$.

### PDF page 18

The finite sum solves the initial–boundary value problem when $\thermal{f}(x)=\sum_{n=1}^M B_n\sin(n\pi x/L)$. For a general profile, the notes propose approximating $\thermal{f}$ by such finite sums and increasing $M$. Fourier theory gives convergence under appropriate conditions on $\thermal{f}$.

#### Orthogonality of the sine functions

For positive integers $m,n$,

$$
\int_0^L\sin\left(\frac{n\pi x}{L}\right)
\sin\left(\frac{m\pi x}{L}\right)\,dx
=\begin{cases}
0 & n\ne m,\\
L/2 & n=m.
\end{cases}
$$

Suppose $\thermal{f}(x)=\sum_{n=1}^{\infty}B_n\sin(n\pi x/L)$. Multiply by $\sin(m\pi x/L)$ and integrate from $0$ to $L$. The interchange of the integral and the sum is immediate for finite sums and assumed here for the series.

$$
\begin{aligned}
\int_0^L \thermal{f}(x)\sin(m\pi x/L)\,dx
&=\int_0^L\sum_{n=1}^{\infty}B_n\sin(n\pi x/L)\sin(m\pi x/L)\,dx\\
&=\sum_{n=1}^{\infty}B_n\int_0^L\sin(n\pi x/L)\sin(m\pi x/L)\,dx\\
&=\frac{L}{2}B_m.
\end{aligned}
$$

### PDF page 19

Orthogonality leaves only the term with $n=m$, which contributes $B_m L/2$. Thus the Fourier sine coefficients and the corresponding heat solution are

$$
B_m=\frac2L\int_0^L\thermal{f}(x)\sin\left(\frac{m\pi x}{L}\right)\,dx,
\qquad m=1,2,3,\ldots,
$$

$$
\thermal{u}(x,t)=\sum_{n=1}^\infty B_n
e^{-\thermal{k}(n\pi/L)^2t}\sin\left(\frac{n\pi x}{L}\right).
$$

#### Example with a uniform initial temperature

The notes cite page 48 for the example. Solve $\partial_t\thermal{u}=\thermal{k}\partial_x^2\thermal{u}$ with $\thermal{u}(0,t)=\thermal{u}(L,t)=0$ for $t>0$ and $\thermal{u}(x,0)=100$ in the interior $0<x<L$. The initial temperature and the boundary values meet with a jump at each endpoint. The sine coefficients are

$$
\begin{aligned}
B_n&=\frac{200}{L}\int_0^L\sin\left(\frac{n\pi x}{L}\right)\,dx\\
&=-\frac{200}{n\pi}\left[\cos\left(\frac{n\pi x}{L}\right)\right]_0^L
=\frac{200}{n\pi}\bigl(1-(-1)^n\bigr).
\end{aligned}
$$

Here $\cos(n\pi)=1$ for even $n$ and $-1$ for odd $n$.

### PDF page 20

The uniform initial temperature gives $B_n=0$ for even $n$ and $B_n=400/(n\pi)$ for odd $n$. The first three nonzero terms are

$$
\begin{aligned}
\thermal{u}(x,t)
&=\frac{400}{\pi}e^{-\thermal{k}(\pi/L)^2t}\sin(\pi x/L)\\
&\quad+\frac{400}{3\pi}e^{-\thermal{k}(3\pi/L)^2t}\sin(3\pi x/L)\\
&\quad+\frac{400}{5\pi}e^{-\thermal{k}(5\pi/L)^2t}\sin(5\pi x/L)+\cdots.
\end{aligned}
$$

For $\thermal{k}t(\pi/L)^2=0.5$, the ratio of the third mode's exponential factor to the first mode's is

$$
\frac{e^{-\thermal{k}(3\pi/L)^2t}}{e^{-\thermal{k}(\pi/L)^2t}}
=e^{-8\thermal{k}(\pi/L)^2t}=e^{-4}\approx0.018.
$$

#### Separation of variables procedure

1. Check that the PDE and boundary conditions are linear and homogeneous.
2. Set the initial conditions aside temporarily.
3. Write $\thermal{u}(x,t)=X(x)T(t)$ and introduce a separation constant.
4. Solve the resulting differential equations.
5. Use superposition to form a linear combination of the product solutions.

### PDF page 21

6. Apply the initial conditions.
7. Use the orthogonality of the eigenfunctions $\sin(n\pi x/L)$ to determine the coefficients $B_n$.

#### Discussion (February 3, 2017)

Exercise 2.3.1 asks for the ordinary differential equations implied by separation of variables.

**b.** For $u_t=ku_{xx}-\mechanical{v}_0u_x$, write $u(x,t)=X(x)T(t)$. Differentiating gives

$$
X(x)T'(t)=kT(t)X''(x)-\mechanical{v}_0T(t)X'(x)
=T(t)\bigl(kX''(x)-\mechanical{v}_0X'(x)\bigr).
$$

Divide by $X(x)T(t)$ and set the resulting common value to $-\lambda$.

$$
\frac{T'}T=\frac{kX''-\mechanical{v}_0X'}X=-\lambda,
\qquad
T'=-\lambda T,\qquad X''-\frac{\mechanical{v}_0}{k}X'=-\frac{\lambda}{k}X.
$$

**d.** The radial equation is $u_t=(k/r^2)\partial_r(r^2u_r)$. Write $u(r,t)=R(r)T(t)$. Substitution and the product rule give

$$
R(r)T'(t)=\frac{k}{r^2}T(t)\frac{d}{dr}(r^2R'(r))
=\frac{kT(t)}{r^2}\bigl(2rR'(r)+r^2R''(r)\bigr).
$$

### PDF page 22

For the radial equation, dividing by $RT$ and introducing the separation constant gives

$$
\frac{T'}{T}=\frac{k}{Rr^2}(2rR'+r^2R'')=-\lambda.
$$

The resulting equations are $T'=-\lambda T$ and $kR''+(2k/r)R'=-\lambda R$.

#### Exercise 2.3.3

For $\partial_t\thermal{u}=\thermal{k}\partial_x^2\thermal{u}$, write $\thermal{u}(x,t)=X(x)T(t)$. Then $XT'=\thermal{k}TX''$ and $T'/(\thermal{k}T)=X''/X=-\lambda$. The time solution is $T(t)=c_1e^{-\lambda\thermal{k}t}$, and the spatial equation is $X''=-\lambda X$. Its characteristic equation is $r^2=-\lambda$.

When $\lambda=0$, $X(x)=k_1x+k_2$. The conditions $X(0)=X(L)=0$ give $k_2=0$ and $k_1L=0$, hence $X\equiv0$.

When $\lambda>0$, the roots are $\pm i\sqrt{\lambda}$. The exponential solutions $e^{\pm i\sqrt{\lambda}x}$ give a real basis, so $X(x)=k_1\cos(\sqrt{\lambda}x)+k_2\sin(\sqrt{\lambda}x)$.

### PDF page 23

In the positive case of Exercise 2.3.3, the left condition gives $X(0)=k_1=0$. The right condition is $k_2\sin(\sqrt{\lambda}L)=0$. For a nontrivial solution $\sqrt{\lambda}L=n\pi$, so $\lambda_n=(n\pi/L)^2$ and $X_n(x)=k_2\sin(n\pi x/L)$ for $n=1,2,\ldots$. Combining with the time factors and superposing gives

$$
\thermal{u}(x,t)=\sum_{n=1}^{\infty}B_n\sin(n\pi x/L)e^{-n^2\pi^2\thermal{k}t/L^2}.
$$

To impose $\thermal{u}(x,0)=6\sin(9\pi x/L)$, choose $B_9=6$ and $B_n=0$ for $n\ne9$. Then

$$
\thermal{u}(x,t)=6\sin(9\pi x/L)e^{-81\pi^2\thermal{k}t/L^2}.
$$

#### Section 2.4.1. Heat conduction in a rod with insulated ends (February 7, 2017)

Use separation of variables to solve the heat equation with zero heat flux at both ends.

$$
\begin{aligned}
\partial_t\thermal{u}&=\thermal{k}\partial_x^2\thermal{u},
&&0<x<L,\quad t>0,\\
\partial_x\thermal{u}(0,t)&=\partial_x\thermal{u}(L,t)=0,
&&t>0,\\
\thermal{u}(x,0)&=\thermal{f}(x),
&&0\le x\le L.
\end{aligned}
$$

The two derivative conditions are homogeneous Neumann conditions.

### PDF page 24

The ansatz $\thermal{u}(x,t)=X(x)T(t)$ gives $T'=-\lambda\thermal{k}T$ with solution $T(t)=Ce^{-\lambda\thermal{k}t}$. The spatial problem is

$$
X''=-\lambda X,\qquad X'(0)=X'(L)=0.
$$

#### Positive eigenvalues

For $\lambda>0$, let $X(x)=c_1\cos(\sqrt{\lambda}x)+c_2\sin(\sqrt{\lambda}x)$. Its derivative is

$$
X'(x)=\sqrt{\lambda}\bigl(-c_1\sin(\sqrt{\lambda}x)
+c_2\cos(\sqrt{\lambda}x)\bigr).
$$

The condition $X'(0)=0$ gives $\sqrt{\lambda}c_2=0$ and hence $c_2=0$. For a nonzero eigenfunction the condition $X'(L)=0$ then gives $\sin(\sqrt{\lambda}L)=0$. Thus $\sqrt{\lambda}L=n\pi$ and

$$
\lambda_n=\left(\frac{n\pi}{L}\right)^2,\qquad
X_n(x)=c_1\cos\left(\frac{n\pi x}{L}\right),\qquad n=1,2,\ldots.
$$

The product mode is $A\cos(n\pi x/L)e^{-\thermal{k}(n\pi/L)^2t}$.

#### Zero eigenvalue

For $\lambda=0$, $X(x)=c_3x+c_4$. The condition $X'(0)=0$ gives $c_3=0$. A constant $X=c_4$ also satisfies $X'(L)=0$ for any $c_4$. Since $T$ is constant for $\lambda=0$, the corresponding product solution is a constant $A_0$.

### PDF page 25

The zero eigenvalue has a nontrivial constant eigenfunction. The notes refer the negative case to homework problem 2.4.4. Superposition gives

$$
\begin{aligned}
\thermal{u}(x,t)
&=A_0+\sum_{n=1}^{\infty}A_n\cos(n\pi x/L)e^{-\thermal{k}(n\pi/L)^2t}\\
&=\sum_{n=0}^{\infty}A_n\cos(n\pi x/L)e^{-\thermal{k}(n\pi/L)^2t}.
\end{aligned}
$$

The initial condition requires $\thermal{f}(x)=A_0+\sum_{n=1}^{\infty}A_n\cos(n\pi x/L)$. Use cosine orthogonality for nonnegative integers $m,n$.

$$
\int_0^L\cos(n\pi x/L)\cos(m\pi x/L)\,dx
=\begin{cases}
0 & n\ne m,\\
L/2 & n=m\ne0,\\
L & n=m=0.
\end{cases}
$$

Multiplying the initial series by $\cos(m\pi x/L)$ and integrating gives

$$
\begin{aligned}
\int_0^L\thermal{f}(x)\cos(m\pi x/L)\,dx
&=A_0\int_0^L\cos(m\pi x/L)\,dx\\
&\quad+\sum_{n=1}^\infty A_n
\int_0^L\cos(n\pi x/L)\cos(m\pi x/L)\,dx.
\end{aligned}
$$

For $m=0$, the series terms vanish and the constant term contributes $A_0L$. For $m\ge1$, the constant term vanishes and the surviving term contributes $A_mL/2$.

### PDF page 26

For $m=0$, $\cos(m\pi x/L)=1$, and the integrals of all nonconstant cosine modes vanish. For $m\ge1$, orthogonality selects $A_mL/2$. The coefficients of the solution on page 25 are

$$
A_0=\frac1L\int_0^L\thermal{f}(x)\,dx,
\qquad
A_m=\frac2L\int_0^L\thermal{f}(x)\cos(m\pi x/L)\,dx,
\qquad m=1,2,\ldots.
$$

#### Heat conduction in a circular ring (February 9, 2017)

A thin wire of length $2L$ with insulated lateral surfaces is bent into a circle. The temperature $\thermal{u}(x,t)$ is constant across each cross section, and there is no thermal source.

![[Kyle Kabasares - Partial Differential Equations - Circular wire and identified endpoints.png|**Fig. 10** The coordinates $x=-L$ and $x=L$ identify the same point on the ring.]]

Assume perfect thermal contact where the ends meet, so $\thermal{u}(-L,t)=\thermal{u}(L,t)$. The heat flux must also be continuous at the joint.

$$
-\thermal{k}_0\partial_x\thermal{u}(-L,t)
=-\thermal{k}_0\partial_x\thermal{u}(L,t).
$$

For uniform conductivity, this gives $\partial_x\thermal{u}(-L,t)=\partial_x\thermal{u}(L,t)$.

### PDF page 27

The ring problem is

$$
\begin{aligned}
\partial_t\thermal{u}&=\thermal{k}\partial_x^2\thermal{u},
&&-L<x<L,\quad t>0,\\
\thermal{u}(-L,t)&=\thermal{u}(L,t),&
\partial_x\thermal{u}(-L,t)&=\partial_x\thermal{u}(L,t),\\
\thermal{u}(x,0)&=\thermal{f}(x),
&&-L\le x\le L.
\end{aligned}
$$

The handwriting labels the matching conditions mixed. They express periodicity of the value and first derivative across the joint. As before, $\thermal{u}=X(x)T(t)$ gives $T(t)=Ce^{-\lambda\thermal{k}t}$ and

$$
X''=-\lambda X,\qquad X(-L)=X(L),\qquad X'(-L)=X'(L).
$$

For $\lambda>0$, set $q=\sqrt{\lambda}$ and $X(x)=c_1\cos(qx)+c_2\sin(qx)$. Since cosine is even and sine is odd, $X(-L)=X(L)$ gives

$$
c_1\cos(qL)-c_2\sin(qL)=c_1\cos(qL)+c_2\sin(qL),
\qquad 2c_2\sin(qL)=0.
$$

For the derivative condition, compute $X'(x)=q[-c_1\sin(qx)+c_2\cos(qx)]$ and set $X'(-L)$ equal to $X'(L)$.

### PDF page 28

The periodic derivative condition gives

$$
c_1\sin(qL)+c_2\cos(qL)=-c_1\sin(qL)+c_2\cos(qL),
\qquad 2c_1\sin(qL)=0.
$$

Together with $2c_2\sin(qL)=0$, this forces $c_1=c_2=0$ unless $\sin(qL)=0$. The positive eigenvalues are $\lambda_n=(n\pi/L)^2$, $n=1,2,\ldots$. Each has two independent eigenfunctions, $\cos(n\pi x/L)$ and $\sin(n\pi x/L)$. Multiplying these by the time factor gives the two modes

$$
a\cos(n\pi x/L)e^{-\thermal{k}(n\pi/L)^2t},
\qquad
b\sin(n\pi x/L)e^{-\thermal{k}(n\pi/L)^2t}.
$$

The page also illustrates a translation of the coordinate interval from $0\le x\le2\pi$ to $-\pi\le y\le\pi$. With $y=x-\pi$, the chain rule gives $dX/dx=(dX/dy)(dy/dx)=dX/dy$, and the equation retains the form $d^2X/dy^2=-\lambda X$.

![[Kyle Kabasares - Partial Differential Equations - Shift of a periodic coordinate interval.png|**Fig. 11** Two intervals of length $2\pi$ use different coordinate origins.]]

For $\lambda=0$, the periodic spatial eigenfunction is constant, $X(x)=c_3$. The notes leave this case as an exercise.

### PDF page 29

At $\lambda=0$, the separated solution is the constant $\thermal{u}(x,t)=a_0$.

#### Negative separation constants

For $\lambda<0$, set $s=-\lambda>0$ and write

$$
X(x)=c_5\cosh(\sqrt{s}x)+c_6\sinh(\sqrt{s}x).
$$

The notes recall that $\cosh z=(e^z+e^{-z})/2$ is even and $\sinh z=(e^z-e^{-z})/2$ is odd. Their derivatives are $\sinh z$ and $\cosh z$, respectively. The condition $X(-L)=X(L)$ gives $2c_6\sinh(\sqrt{s}L)=0$. The derivative condition gives $2c_5\sinh(\sqrt{s}L)=0$ after canceling a nonzero common factor. Since $\sinh(\sqrt{s}L)\ne0$, both coefficients vanish.

#### Superposition on the ring

The constant and the positive modes combine to give

$$
\thermal{u}(x,t)=a_0+\sum_{n=1}^\infty
\left[a_n\cos(n\pi x/L)+b_n\sin(n\pi x/L)\right]
e^{-\thermal{k}(n\pi/L)^2t}.
$$

At $t=0$ this is the Fourier series of $\thermal{f}(x)$. For nonnegative indices, the cosine products satisfy

$$
\int_{-L}^L\cos(n\pi x/L)\cos(m\pi x/L)\,dx
=\begin{cases}
0 & n\ne m,\\
L & n=m\ne0,\\
2L & n=m=0.
\end{cases}
$$

For positive indices, $\int_{-L}^L\sin(n\pi x/L)\sin(m\pi x/L)\,dx$ is zero if $n\ne m$ and $L$ if $n=m$.

### PDF page 30

For the ring on $[-L,L]$, sine and cosine are mutually orthogonal because their product is odd.

$$
\int_{-L}^L\sin(n\pi x/L)\cos(m\pi x/L)\,dx=0.
$$

Multiplying the initial Fourier series by $\sin(m\pi x/L)$ and integrating gives $\int_{-L}^L\thermal{f}(x)\sin(m\pi x/L)\,dx=Lb_m$. Therefore

$$
b_m=\frac1L\int_{-L}^L\thermal{f}(x)\sin(m\pi x/L)\,dx,
\qquad m=1,2,\ldots.
$$

#### Periodic boundary conditions (discussion, February 10, 2017)

On $[0,L]$, the notes prescribe $\thermal{u}(0,t)=\thermal{u}(L,t)$ and $\partial_x\thermal{u}(0,t)=\partial_x\thermal{u}(L,t)$. The initial-condition line begins a piecewise expression with an $x$ entry. The other entries and interval limits are absent from that line.

With $\thermal{u}=XT$, the heat equation gives $T'/(\thermal{k}T)=X''/X=-\lambda$. For $\lambda=0$, the spatial solution is $X=c_1x+c_2$. Matching its values at $0$ and $L$ forces $c_1=0$, leaving $X=c_2$. For $\lambda>0$, $X=c_1\cos(\sqrt{\lambda}x)+c_2\sin(\sqrt{\lambda}x)$ and $X'=\sqrt{\lambda}[-c_1\sin(\sqrt{\lambda}x)+c_2\cos(\sqrt{\lambda}x)]$.

The Fourier sum at the bottom of the page uses $\cos(n\pi x/L)$ and $\sin(n\pi x/L)$ with $\lambda_n=(n\pi/L)^2$, the modes for $[-L,L]$. For the stated interval $[0,L]$, matching values and derivatives requires a period of $L$. The positive frequencies there are $2\pi n/L$, so the solution takes the form

$$
\thermal{u}(x,t)=A_0+\sum_{n=1}^\infty
\left[A_n\cos(2\pi nx/L)+B_n\sin(2\pi nx/L)\right]
e^{-\thermal{k}(2\pi n/L)^2t}.
$$

### PDF page 31

The coefficient calculation uses $f(x)=x$ on $[-L,L]$. For the sine coefficient, integrate by parts with $u=x$, $du=dx$, $dv=\sin(n\pi x/L)\,dx$, and $v=-(L/(n\pi))\cos(n\pi x/L)$. The margin gives the mnemonic LIATE for choosing the factor to differentiate.

$$
\begin{aligned}
B_n
&=\frac1L\int_{-L}^L x\sin(n\pi x/L)\,dx\\
&=-\frac1{n\pi}\left[x\cos(n\pi x/L)\right]_{-L}^L
+\frac{L}{(n\pi)^2}\left[\sin(n\pi x/L)\right]_{-L}^L\\
&=-\frac{2L}{n\pi}(-1)^n.
\end{aligned}
$$

The handwritten calculation cancels the boundary terms. The cosine values at the two ends agree, but the factor $x$ changes sign, so those terms add. The sine terms vanish at both endpoints.

#### Lecture of February 14, 2017

The notes say there are two weeks until the first midterm and list nonhomogeneous boundary conditions (Chapters 8 and 3) and Fourier series (Chapter 3). The schedule below preserves the handwritten midterm label.

| Date | Topic or event |
| --- | --- |
| February 16 | Section 3.3, Fourier and sine series |
| February 17 | Quiz |
| February 21 | Section 3.4, term-by-term differentiation. Handout for Homework 6 and a midterm problem. |
| February 23 | Finish Chapter 3 |
| February 24 | Quiz |
| February 28 | Midterm 2 |
| March 2 | Start Chapter 4 |

### PDF page 32

For periodic conditions on $[-L,L]$, the time-dependent solution has a constant term and decaying sine and cosine modes.

$$
\thermal{u}(x,t)=a_0+\sum_{n=1}^{\infty}
e^{-\thermal{k}(n\pi/L)^2t}\bigl[a_n\cos(n\pi x/L)+b_n\sin(n\pi x/L)\bigr].
$$

At $t=0$, all exponential factors are one. Thus the initial profile is

$$
\thermal{f}(x)=a_0+\sum_{n=1}^{\infty}a_n\cos(n\pi x/L)
+\sum_{n=1}^{\infty}b_n\sin(n\pi x/L).
$$

Multiply by $\sin(m\pi x/L)$ and integrate. The cosine terms, including the constant, are orthogonal to the sine. The sine terms vanish except for $n=m$, which gives $Lb_m$. Multiplication by $\cos(m\pi x/L)$ and integration likewise gives $La_m$ for $m\ge1$ and $2La_0$ for $m=0$. The coefficients are

$$
\begin{aligned}
b_m&=\frac1L\int_{-L}^L\thermal{f}(x)\sin(m\pi x/L)\,dx,
&&m=1,2,\ldots,\\
a_m&=\frac1L\int_{-L}^L\thermal{f}(x)\cos(m\pi x/L)\,dx,
&&m=1,2,\ldots,\\
a_0&=\frac1{2L}\int_{-L}^L\thermal{f}(x)\,dx.
\end{aligned}
$$

### PDF page 33

#### Section 8.2. Nonhomogeneous problems

First consider the homogeneous heat equation with nonhomogeneous boundary conditions.

$$
\begin{aligned}
\partial_t\thermal{u}&=\thermal{k}\partial_x^2\thermal{u},
&&0<x<L,\quad t>0,\\
\thermal{u}(0,t)&=\thermal{A},&
\thermal{u}(L,t)&=\thermal{B},\qquad t>0,\\
\thermal{u}(x,0)&=\thermal{f}(x).
\end{aligned}
$$

Find a time-independent equilibrium $\thermal{u}_E$. Its second derivative is zero, so $\thermal{u}_E(x)=c_1+c_2x$. From $\thermal{u}_E(0)=\thermal{A}$ and $\thermal{u}_E(L)=\thermal{B}$, obtain $c_1=\thermal{A}$ and $c_2=(\thermal{B}-\thermal{A})/L$. Hence

$$
\thermal{u}_E(x)=\thermal{A}+\frac{\thermal{B}-\thermal{A}}{L}x.
$$

![[Kyle Kabasares - Partial Differential Equations - Equilibrium line between fixed temperatures.png|**Fig. 12** The equilibrium profile joins the boundary values $A$ at $0$ and $B$ at $L$.]]

Define $\thermal{v}(x,t)=\thermal{u}(x,t)-\thermal{u}_E(x)$. The boundary differences are $\thermal{v}(0,t)=\thermal{A}-\thermal{A}=0$ and $\thermal{v}(L,t)=\thermal{B}-\thermal{B}=0$. The page begins the check that $\thermal{v}$ satisfies the same heat equation.

### PDF page 34

The equilibrium $\thermal{u}_E(x)$ is independent of time and has zero second spatial derivative. Thus $\partial_t\thermal{v}=\partial_t\thermal{u}$ and $\partial_x^2\thermal{v}=\partial_x^2\thermal{u}$. The first few handwritten lines use $t$ in the second derivative. The heat equation and the solution below use the spatial derivative.

The reduced problem is $\partial_t\thermal{v}=\thermal{k}\partial_x^2\thermal{v}$ with $\thermal{v}(0,t)=\thermal{v}(L,t)=0$ and initial data $g(x)=\thermal{f}(x)-\thermal{u}_E(x)$. The sine-series solution is

$$
\thermal{v}(x,t)=\sum_{n=1}^{\infty}a_n\sin(n\pi x/L)e^{-\thermal{k}(n\pi/L)^2t},
\qquad
a_n=\frac2L\int_0^L g(x)\sin(n\pi x/L)\,dx.
$$

The lower limit $0$ agrees with the rod interval and the final boxed formula. Adding the equilibrium back gives

$$
\thermal{u}(x,t)=\thermal{A}+\frac{\thermal{B}-\thermal{A}}Lx
+\sum_{n=1}^\infty a_n\sin(n\pi x/L)e^{-\thermal{k}(n\pi/L)^2t}.
$$

#### Case 2. Nonhomogeneous equation and boundary conditions

The second problem adds a time-independent source, written $Q(x)$ on the page. It has the units of the normalized source $\thermal{Q}'$ in the heat equation for temperature.

$$
\begin{aligned}
\partial_t\thermal{u}&=\thermal{k}\partial_x^2\thermal{u}+\thermal{Q}'(x),
&&0<x<L,\quad t>0,\\
\thermal{u}(0,t)&=\thermal{A},&
\thermal{u}(L,t)&=\thermal{B},\qquad t>0,\\
\thermal{u}(x,0)&=\thermal{f}(x),
&&0\le x\le L.
\end{aligned}
$$

The next step is to show that subtracting the corresponding equilibrium again gives $\partial_t\thermal{v}=\thermal{k}\partial_x^2\thermal{v}$.

### PDF page 35

For the time-independent source, the equilibrium $\thermal{u}_E$ satisfies $\thermal{k}\thermal{u}_E''+\thermal{Q}'(x)=0$ with the prescribed endpoint temperatures. Define $\thermal{v}=\thermal{u}-\thermal{u}_E$. Then $\partial_t\thermal{v}=\partial_t\thermal{u}$ and $\partial_x^2\thermal{v}=\partial_x^2\thermal{u}-\thermal{u}_E''$. Substituting into the forced equation gives

$$
\begin{aligned}
\partial_t\thermal{v}
&=\thermal{k}(\partial_x^2\thermal{v}+\thermal{u}_E'')+\thermal{Q}'(x)\\
&=\thermal{k}\partial_x^2\thermal{v}.
\end{aligned}
$$

The last step uses the equilibrium equation.

#### Case 3. Time-dependent source and boundary values

$$
\begin{aligned}
\partial_t\thermal{u}&=\thermal{k}\partial_x^2\thermal{u}+\thermal{Q}'(x,t),
&&0<x<L,\quad t>0,\\
\thermal{u}(0,t)&=\thermal{A}(t),&
\thermal{u}(L,t)&=\thermal{B}(t),\qquad t>0,\\
\thermal{u}(x,0)&=\thermal{f}(x),
&&0\le x\le L.
\end{aligned}
$$

Set $\thermal{v}(x,t)=\thermal{u}(x,t)-\thermal{r}(x,t)$ and choose $\thermal{r}$ so that $\thermal{v}$ vanishes at both ends. This requires $\thermal{r}(0,t)=\thermal{A}(t)$ and $\thermal{r}(L,t)=\thermal{B}(t)$. A linear interpolation in $x$ is

$$
\thermal{r}(x,t)=\thermal{A}(t)+\frac{\thermal{B}(t)-\thermal{A}(t)}Lx.
$$

The page begins deriving the equation for $\thermal{v}$.

### PDF page 36

#### Time-dependent nonhomogeneous heat equation (February 16, 2017)

The lecture returns to $\partial_t\thermal{u}=\thermal{k}\partial_x^2\thermal{u}+\thermal{Q}'(x,t)$ with endpoint temperatures $\thermal{A}(t)$ and $\thermal{B}(t)$ and initial data $\thermal{f}(x)$. Set

$$
\thermal{r}(x,t)=\thermal{A}(t)+\frac{\thermal{B}(t)-\thermal{A}(t)}Lx,
\qquad
\thermal{v}(x,t)=\thermal{u}(x,t)-\thermal{r}(x,t).
$$

At the endpoints, $\thermal{v}(0,t)=\thermal{A}(t)-\thermal{A}(t)=0$ and $\thermal{v}(L,t)=\thermal{B}(t)-\thermal{B}(t)=0$. The initial difference is

$$
g(x)=\thermal{v}(x,0)=\thermal{f}(x)-
\left[\thermal{A}(0)+\frac{\thermal{B}(0)-\thermal{A}(0)}Lx\right].
$$

Since $\thermal{r}$ is linear in $x$, $\partial_x^2\thermal{u}=\partial_x^2\thermal{v}$. Also $\partial_t\thermal{u}=\partial_t\thermal{v}+\partial_t\thermal{r}$. Substitution gives

$$
\begin{aligned}
\partial_t\thermal{v}&=\thermal{k}\partial_x^2\thermal{v}
+\underbrace{\thermal{Q}'(x,t)-\partial_t\thermal{r}(x,t)}_{\thermal{\bar Q}(x,t)},\\
\thermal{v}(0,t)&=\thermal{v}(L,t)=0,\\
\thermal{v}(x,0)&=g(x).
\end{aligned}
$$

Solve this forced equation with homogeneous boundary conditions, then recover $\thermal{u}=\thermal{v}+\thermal{r}$. The minus sign in the final handwritten margin contradicts the definition of $\thermal{v}$ and the earlier recovery formula on the same page. The notes point to Section 8.3 for other methods for solving this type of problem.

### PDF page 37

#### Chapter 3. Fourier series

The notes cite page 86. Separation of variables for the periodic heat equation requires representing the initial profile as a linear combination of the spatial eigenfunctions of the boundary value problem.

$$
f(x)=a_0+\sum_{n=1}^{\infty}a_n\cos\left(\frac{n\pi x}{L}\right)
+\sum_{n=1}^{\infty}b_n\sin\left(\frac{n\pi x}{L}\right).
$$

Does the series converge? If it converges, does it converge to $f$? Does the resulting infinite series for $u$ solve the PDE?

Recall that a piecewise smooth function has $f$ and $f'$ continuous on the separate pieces of its domain. The sketches illustrate what may occur where the pieces meet.

![[Kyle Kabasares - Partial Differential Equations - Jump in a piecewise smooth function.png|**Fig. 13** The function approaches two different values on the two sides of $x_0$.]]

![[Kyle Kabasares - Partial Differential Equations - Piecewise smooth function with a kink.png|**Fig. 14** A kink at $x_1$ interrupts continuity of the slope. The sketch also shows jumps between other pieces.]]

### PDF page 38

For $f(x)=x^{1/3}$, the derivative is $f'(x)=\tfrac13 x^{-2/3}=1/(3x^{2/3})$ for $x\ne0$. It is unbounded at zero, so this example fails the piecewise-smooth condition on an interval containing zero.

![[Kyle Kabasares - Partial Differential Equations - Cube root with an unbounded derivative.png|**Fig. 15** The cube-root curve has a vertical tangent at the origin.]]

#### Periodic extension

The Fourier series formed from $f$ on $[-L,L]$ is periodic with period $2L$. The original function need only be given on the base interval. For example, repeat $f(x)=\tfrac32 x$ from the interior of $[-L,L]$ to form a sawtooth with jumps at the joins.

![[Kyle Kabasares - Partial Differential Equations - Sawtooth periodic extension of a linear function.png|**Fig. 16** The line rises from $-3L/2$ to $3L/2$ on each period of length $2L$.]]

The Fourier series on $[-L,L]$ is

$$
a_0+\sum_{n=1}^{\infty}a_n\cos\left(\frac{n\pi x}{L}\right)
+\sum_{n=1}^{\infty}b_n\sin\left(\frac{n\pi x}{L}\right),
$$

with Fourier coefficients $a_0$ and $a_n,b_n$ for $n=1,2,\ldots$.

### PDF page 39

The Fourier coefficients on $[-L,L]$ are

$$
\begin{aligned}
a_0&=\frac{1}{2L}\int_{-L}^L f(x)\,dx,\\
a_n&=\frac1L\int_{-L}^L f(x)\cos(n\pi x/L)\,dx,\\
b_n&=\frac1L\int_{-L}^L f(x)\sin(n\pi x/L)\,dx,\qquad n\ge1.
\end{aligned}
$$

The coefficient $a_0$ requires that $\int_{-L}^L f(x)\,dx$ exist and be finite.

#### Fourier series convergence theorem

If $f$ is piecewise smooth on $[-L,L]$, its Fourier series converges to the value of its $2L$-periodic extension wherever that extension is continuous. At a jump, it converges to the mean of the two one-sided limits,

$$
\frac{f_{\mathrm{per}}(x^+)+f_{\mathrm{per}}(x^-)}2.
$$

In the interior, the limit is $f(x)$ at continuity points. At either endpoint the two limits come from opposite ends of the base interval, giving $(f(-L^+)+f(L^-))/2$. The handwritten endpoint line has a minus sign between the limits. The theorem statement and the sketching instructions use their sum.

To sketch the Fourier series limit, draw $f$ on the base interval, extend it periodically, and mark the mean of the one-sided limits at each jump with a cross.

### PDF page 40

#### Fourier series of a step

On $[-L,L]$, let $f(x)=0$ for $x\le L/2$ and $f(x)=1$ for $x>L/2$.

![[Kyle Kabasares - Partial Differential Equations - Step function on its base interval.png|**Fig. 17** The value is zero at $x=L/2$ and jumps to one immediately to its right.]]

![[Kyle Kabasares - Partial Differential Equations - Periodic extension of the step function.png|**Fig. 18** The nonzero segment repeats every $2L$. The sketch shows the next copy between $5L/2$ and $3L$.]]

By the convergence theorem, the Fourier series has the following limit on the base interval.

$$
\begin{cases}
\frac12 & x=-L,\\
0 & -L<x<L/2,\\
\frac12 & x=L/2,\\
1 & L/2<x<L,\\
\frac12 & x=L.
\end{cases}
$$

### PDF page 41

#### Fourier sine series

The heat solution with homogeneous Dirichlet conditions is

$$
\thermal{u}(x,t)=\sum_{n=1}^\infty B_n\sin(n\pi x/L)e^{-\thermal{k}(n\pi/L)^2t}.
$$

#### Discussion (February 17, 2017)

The page lists $f(x)=x^3$ on $[-1,1]$ as a Fourier-series example. It then considers the forced heat equation on $[0,L]$ with fixed endpoint temperatures $\thermal{A},\thermal{B}\in\mathbb R$ and initial profile $\thermal{f}(x)$.

$$
\partial_t\thermal{u}=\thermal{k}\partial_x^2\thermal{u}+\thermal{Q}'(x),
\qquad
\thermal{u}(0,t)=\thermal{A},
\qquad
\thermal{u}(L,t)=\thermal{B},
\qquad
\thermal{u}(x,0)=\thermal{f}(x).
$$

At equilibrium, the time derivative is zero, so $\thermal{k}\thermal{u}_E''=-\thermal{Q}'(x)$. The example takes $\thermal{Q}'=1$, $\thermal{A}=2$, $\thermal{B}=3$, and $L=1$. Integrating gives $\thermal{u}_E(x)=-x^2/(2\thermal{k})+c_1x+c_2$. The endpoints give $c_2=2$ and $c_1=1+1/(2\thermal{k})$, so

$$
\thermal{u}_E(x)=-\frac{x^2}{2\thermal{k}}
+\frac{2\thermal{k}+1}{2\thermal{k}}x+2.
$$

Propose $\thermal{v}=\thermal{u}-\thermal{u}_E$. Then $\partial_t\thermal{u}=\partial_t\thermal{v}+\partial_t\thermal{u}_E$ and $\partial_x^2\thermal{u}=\partial_x^2\thermal{v}+\partial_x^2\thermal{u}_E$.

### PDF page 42

In the forced example, $\partial_t\thermal{u}_E=0$ and $\thermal{u}_E''=-1/\thermal{k}$. Thus

$$
\partial_t\thermal{v}
=\thermal{k}\partial_x^2\thermal{v}+\thermal{k}(-1/\thermal{k})+1
=\thermal{k}\partial_x^2\thermal{v}.
$$

The boundary conditions become $\thermal{v}(0,t)=2-2=0$ and $\thermal{v}(1,t)=3-3=0$. The initial condition is $\thermal{v}(x,0)=\thermal{f}(x)-\thermal{u}_E(x)$. After solving for $\thermal{v}$, recover $\thermal{u}=\thermal{v}+\thermal{u}_E$.

#### Lecture of February 21, 2017

For $\partial_t\thermal{u}=\thermal{k}\partial_x^2\thermal{u}$ on $[-L,L]$, impose $\thermal{u}(-L,t)=\thermal{u}(L,t)$ and $\partial_x\thermal{u}(-L,t)=\partial_x\thermal{u}(L,t)$ for $t>0$. The initial profile is the step from page 40, zero for $x<L/2$ and one for $x>L/2$.

$$
\thermal{u}(x,t)=a_0+\sum_{n=1}^{\infty}
e^{-\thermal{k}(n\pi/L)^2t}\bigl[a_n\cos(n\pi x/L)+b_n\sin(n\pi x/L)\bigr].
$$

The exponent is negative because the heat modes decay. The handwritten exponent places the negative sign inside the square. The coefficients for the initial data are

$$
\begin{aligned}
a_0&=\frac1{2L}\int_{-L}^L\thermal{f}(x)\,dx,\\
a_n&=\frac1L\int_{-L}^L\thermal{f}(x)\cos(n\pi x/L)\,dx,\\
b_n&=\frac1L\int_{-L}^L\thermal{f}(x)\sin(n\pi x/L)\,dx.
\end{aligned}
$$

### PDF page 43

#### Fourier sine series and odd extension

If $f$ is odd, $f(-x)=-f(x)$. Since $\sin(-x)=-\sin x$, the product $f(x)\sin(n\pi x/L)$ is even. Thus

$$
B_n=\frac1L\int_{-L}^L f(x)\sin(n\pi x/L)\,dx
=\frac2L\int_0^L f(x)\sin(n\pi x/L)\,dx.
$$

For a function given on $[0,L]$, form the odd extension by taking $-f(-x)$ on $(-L,0)$ and using zero at the origin for the odd extension. If this extension is piecewise smooth, the Fourier theorem gives the sine series $f(x)\sim\sum_{n=1}^\infty B_n\sin(n\pi x/L)$ on $[0,L]$, with the one-sided average at jumps.

![[Kyle Kabasares - Partial Differential Equations - Odd extension by reflection through the origin.png|**Fig. 19** The dashed left half of the sketch is obtained from the right half by changing the signs of both coordinates.]]

To sketch the sine-series limit, draw $f$ on $[0,L]$, extend it oddly to $[-L,L]$, repeat with period $2L$, and mark the average of the limits at each jump with a cross.

The example cites page 95 and asks for the sine series of $f(x)=100$ on $[0,L]$. The first two sketching steps give the following.

![[Kyle Kabasares - Partial Differential Equations - Odd extension of the constant one hundred.png|**Fig. 20** The odd extension is $-100$ on $(-L,0)$ and $100$ on $(0,L)$.]]

### PDF page 44

![[Kyle Kabasares - Partial Differential Equations - Periodic square wave from the odd extension.png|**Fig. 21** The odd periodic extension alternates between $100$ and $-100$. At each jump, the crosses mark the sine series limit of zero.]]

The sine series is $100$ for $0<x<L$ and zero at $x=0,L$. For the heat equation with homogeneous Dirichlet conditions,

$$
\thermal{u}(x,t)=\sum_{n=1}^{\infty}B_n\sin(n\pi x/L)e^{-\thermal{k}(n\pi/L)^2t},
$$

where

$$
B_n=\frac{200}{L}\int_0^L\sin(n\pi x/L)\,dx
=\frac{200}{n\pi}\bigl(1-(-1)^n\bigr)
=\begin{cases}
0 & n\text{ even},\\
400/(n\pi) & n\text{ odd}.
\end{cases}
$$

The middle handwritten expression has $200/L$. Evaluating the integral gives $200/(n\pi)$, which agrees with the final case split. The sine eigenfunctions satisfy the zero Dirichlet conditions.

#### Fourier cosine series (February 23, 2017)

Section 3.3.2 begins by recalling the full series on $[-L,L]$ and its coefficients.

$$
f(x)\sim a_0+\sum_{n=1}^{\infty}a_n\cos(n\pi x/L)
+\sum_{n=1}^{\infty}b_n\sin(n\pi x/L),
$$

$$
a_0=\frac1{2L}\int_{-L}^L f(x)\,dx,\quad
a_n=\frac1L\int_{-L}^L f(x)\cos(n\pi x/L)\,dx,\quad
b_n=\frac1L\int_{-L}^L f(x)\sin(n\pi x/L)\,dx.
$$

### PDF page 45

For an even function $f$, $f(-x)=f(x)$. The product $g(x)=f(x)\sin(n\pi x/L)$ is odd because $g(-x)=-g(x)$. Its integral on $[-L,L]$ vanishes, so $b_n=0$. The cosine integrands are even, giving

$$
a_0=\frac1L\int_0^L f(x)\,dx,\qquad
a_n=\frac2L\int_0^L f(x)\cos(n\pi x/L)\,dx,\quad n=1,2,\ldots.
$$

The cosine series can be written $a_0+\sum_{n=1}^{\infty}a_n\cos(n\pi x/L)$ or $\sum_{n=0}^{\infty}a_n\cos(n\pi x/L)$.

For $f$ given on $[0,L]$, form the even extension on $[-L,L]$ by reflection, with value $f(-x)$ for $x<0$. If $f$ is piecewise smooth, so is the extension, and the Fourier convergence theorem applies. The coefficients are the same integrals on $[0,L]$ as above.

To sketch the cosine-series limit, draw $f$ on $[0,L]$, reflect it evenly, extend periodically, and mark the average of the one-sided limits at each jump. The example is $f(x)=x$ for $0\le x\le L$.

### PDF page 46

For $f(x)=x$ on $[0,L]$, the even extension on $[-L,L]$ is $\lvert x\rvert$. Repeating it with period $2L$ gives a continuous triangular wave. Therefore the Fourier cosine series converges to $f(x)$ on the whole interval $[0,L]$.

![[Kyle Kabasares - Partial Differential Equations - Even reflection of the linear function.png|**Fig. 22** Reflecting the line $f(x)=x$ across the vertical axis produces $\lvert x\rvert$.]]

![[Kyle Kabasares - Partial Differential Equations - Triangular periodic extension of the linear function.png|**Fig. 23** The even extension repeats with period $2L$ and joins continuously at the endpoints.]]

The coefficients are

$$
a_0=\frac1L\int_0^L x\,dx=\frac L2,
\qquad
a_n=\frac2L\int_0^L x\cos(n\pi x/L)\,dx
=\frac{2L}{(n\pi)^2}(\cos(n\pi)-1).
$$

For the insulated heat problem with this initial profile,

$$
\thermal{u}(x,t)=\frac L2+
\sum_{n=1}^{\infty}\frac{2L(\cos(n\pi)-1)}{(n\pi)^2}
\cos(n\pi x/L)e^{-\thermal{k}(n\pi/L)^2t}.
$$

On a symmetric domain, any function can be written as the sum of its even and odd parts.

$$
f(x)=\underbrace{\frac{f(x)+f(-x)}2}_{f_e(x)}
+\underbrace{\frac{f(x)-f(-x)}2}_{f_o(x)}.
$$

The expansion of the two halves in the handwritten line uses a minus sign for the odd part, which is the sign needed in the grouped formula.

### PDF page 47

The Fourier series of $f$ is the sum of the cosine series of its even part and the sine series of its odd part.

#### Continuous Fourier series

For piecewise smooth $f$ on $[-L,L]$, the Fourier series has a continuous limit equal to $f$ throughout the base interval if and only if $f$ is continuous and $f(-L)=f(L)$. The endpoint equality ensures that the periodic extension joins continuously.

For a piecewise smooth function on $[0,L]$, the notes also ask when the sine series has a continuous limit equal to $f$. Continuity of $f$ is required. Equality at both endpoints also requires $f(0)=f(L)=0$, since every sine term vanishes there.

#### Term-by-term differentiation (March 2, 2017)

For $\partial_t\thermal{u}=\thermal{k}\partial_x^2\thermal{u}$ with $\thermal{u}(0,t)=\thermal{u}(L,t)=0$ and initial profile $\thermal{f}(x)$, recall

$$
\thermal{u}(x,t)=\sum_{n=1}^\infty B_n\sin(n\pi x/L)e^{-\thermal{k}(n\pi/L)^2t},
\qquad
B_n=\frac2L\int_0^L\thermal{f}(x)\sin(n\pi x/L)\,dx.
$$

The sine series reproduces the initial profile at interior continuity points. Formally differentiating gives

$$
\begin{aligned}
\partial_t\thermal{u}
&=-\sum_{n=1}^\infty\thermal{k}(n\pi/L)^2 B_n\sin(n\pi x/L)e^{-\thermal{k}(n\pi/L)^2t},\\
\partial_x^2\thermal{u}
&=-\sum_{n=1}^\infty(n\pi/L)^2 B_n\sin(n\pi x/L)e^{-\thermal{k}(n\pi/L)^2t}.
\end{aligned}
$$

These expressions verify the PDE if differentiating the series term by term is justified. In general, $(\sum_{n=1}^\infty c_nu_n)'$ need not equal $\sum_{n=1}^\infty c_nu_n'$. The next page uses $f(x)=x$ on $[-L,L]$ as a counterexample.

### PDF page 48

![[Kyle Kabasares - Partial Differential Equations - Linear branch of the sawtooth differentiation example.png|**Fig. 24** The graph of $f(x)=x$ on $(-L,L)$, with both endpoints open.]]

The Fourier series for $f(x)=x$ on $(-L,L)$ is

$$
f(x)\sim 2\sum_{n=1}^{\infty}\frac{L}{n\pi}(-1)^{n+1}\sin\left(\frac{n\pi x}{L}\right).
$$

The derivative is $f'(x)=1$ on $(-L,L)$. Differentiating the series formally gives

$$
2\sum_{n=1}^{\infty}(-1)^{n+1}\cos\left(\frac{n\pi x}{L}\right).
$$

At $x=0$ the terms alternate between $2$ and $-2$, so the differentiated series diverges there. The periodic extension of $f$ has a jump at the ends of the interval.

When does differentiating a Fourier series term by term recover the derivative?

- **Full Fourier series.** Suppose $f$ is continuous on $[-L,L]$, $f(-L)=f(L)$, and $f'$ is piecewise smooth. The differentiated series converges to the derivative wherever the derivative of the periodic extension is continuous. At a jump of that derivative, the series converges to the average of its one-sided limits.
- **Fourier cosine series.** If $f$ is continuous on $[0,L]$ and $f'$ is piecewise smooth, use the even extension $f(-x)=f(x)$, which automatically matches the endpoint values at $-L$ and $L$. The same rule then applies to the differentiated series.

The handwritten full-series condition calls $f$ piecewise smooth. The statement above uses the sufficient hypothesis that $f'$ is piecewise smooth, as specified in the cosine-series case.

### PDF page 49

**Differentiation of a Fourier sine series**

Let $f$ be continuous on $[0,L]$ with piecewise smooth derivative. If $f(0)=f(L)=0$, the Fourier sine series can be differentiated term by term to obtain the Fourier cosine series of $f'$.

Write the sine series of $f$ as

$$
f(x)\sim\sum_{n=1}^{\infty}B_n\sin\left(\frac{n\pi x}{L}\right),
\qquad
B_n=\frac{2}{L}\int_0^L f(x)\sin\left(\frac{n\pi x}{L}\right)\,dx.
$$

Since $f'$ is piecewise smooth, its cosine series is

$$
f'(x)\sim A_0+\sum_{n=1}^{\infty}A_n\cos\left(\frac{n\pi x}{L}\right),
$$

where

$$
\begin{aligned}
A_0
&=\frac{1}{L}\int_0^L f'(x)\,dx
=\frac{f(L)-f(0)}{L},\\
A_n
&=\frac{2}{L}\int_0^L f'(x)\cos\left(\frac{n\pi x}{L}\right)\,dx.
\end{aligned}
$$

Integrate by parts with $u=\cos(n\pi x/L)$ and $dv=f'(x)\,dx$. Then $du=-(n\pi/L)\sin(n\pi x/L)\,dx$ and $v=f(x)$, so

$$
\begin{aligned}
A_n
&=\frac{2}{L}\left[f(x)\cos\left(\frac{n\pi x}{L}\right)\right]_0^L
+\frac{n\pi}{L}\frac{2}{L}\int_0^L f(x)\sin\left(\frac{n\pi x}{L}\right)\,dx\\
&=\frac{2}{L}\bigl[(-1)^n f(L)-f(0)\bigr]+\frac{n\pi}{L}B_n.
\end{aligned}
$$

Formal differentiation of the sine series gives the cosine coefficients $(n\pi/L)B_n$. They equal $A_n$ for every $n$ precisely when $(-1)^n f(L)-f(0)=0$ for both odd and even $n$, which gives $f(0)=f(L)=0$. These conditions also give $A_0=0$. Thus under the endpoint conditions,

$$
f'(x)\sim\sum_{n=1}^{\infty}\frac{n\pi}{L}B_n\cos\left(\frac{n\pi x}{L}\right).
$$

### PDF page 50

**Eigenfunction expansion for the heat equation**

Expand the temperature in sine eigenfunctions with time-dependent coefficients,

$$
\thermal{u}(x,t)=\sum_{n=1}^{\infty} B_n(t)\sin\left(\frac{n\pi x}{L}\right).
$$

The initial condition $\thermal{u}(x,0)=\thermal{f}(x)$ requires the sine expansion of $\thermal{f}$ at $t=0$, so

$$
B_n(0)=\frac{2}{L}\int_0^L \thermal{f}(x)\sin\left(\frac{n\pi x}{L}\right)\,dx.
$$

To check $\thermal{u}_t=\thermal{k}\thermal{u}_{xx}$, differentiate the series.

$$
\begin{aligned}
\thermal{u}_{xx}(x,t)
&=-\sum_{n=1}^{\infty}\left(\frac{n\pi}{L}\right)^2 B_n(t)
  \sin\left(\frac{n\pi x}{L}\right),\\
\thermal{u}_t(x,t)
&=\sum_{n=1}^{\infty}\frac{dB_n(t)}{dt}\sin\left(\frac{n\pi x}{L}\right).
\end{aligned}
$$

Matching coefficients gives the same decay factors as separation of variables.

$$
B_n'(t)=-\thermal{k}\left(\frac{n\pi}{L}\right)^2B_n(t),
\qquad
B_n(t)=B_n(0)e^{-\thermal{k}(n\pi/L)^2t}.
$$

**Time differentiation of a Fourier series**

For a continuous function $u(x,t)$, write its Fourier series in $x$ as

$$
u(x,t)\sim a_0(t)+\sum_{n=1}^{\infty}\left[
a_n(t)\cos\left(\frac{n\pi x}{L}\right)
+b_n(t)\sin\left(\frac{n\pi x}{L}\right)
\right].
$$

When differentiation under the coefficient integrals is valid and $\partial u/\partial t$ is piecewise smooth in $x$, the Fourier series of $\partial u/\partial t$ is

$$
\frac{\partial u}{\partial t}(x,t)\sim a_0'(t)+\sum_{n=1}^{\infty}\left[
a_n'(t)\cos\left(\frac{n\pi x}{L}\right)
+b_n'(t)\sin\left(\frac{n\pi x}{L}\right)
\right].
$$

The handwritten statement lists piecewise smoothness of $\partial u/\partial t$ as its condition. The interchange with the coefficient integrals is stated explicitly here.

**Course schedule recorded March 7, 2017**

| Date | Topic |
| --- | --- |
| March 7 | Finish Chapter 3 |
| March 9 | Chapter 4, derive the one-dimensional wave equation |
| March 14 | Section 4.4, solve the one-dimensional wave equation |
| March 16 | Sturm–Liouville eigenvalues |
| March 21 | Section 5.3 and practice midterm |
| March 23 | Midterm 2 |

### PDF page 51

**Section 3.4. Term-by-term differentiation of Fourier series and the method of eigenfunction expansion**

Consider the heat equation with zero endpoint temperatures and a prescribed initial temperature.

$$
\begin{cases}
\displaystyle\frac{\partial\thermal{u}}{\partial t}
=\thermal{k}\frac{\partial^2\thermal{u}}{\partial x^2},\\[4pt]
\thermal{u}(0,t)=\thermal{u}(L,t)=0,\\
\thermal{u}(x,0)=\thermal{f}(x).
\end{cases}
$$

The initial statement on the page equates the two endpoint temperatures. The later calculation explicitly sets both to zero.

Separation of variables gives

$$
\begin{aligned}
\thermal{u}(x,t)
&=\sum_{n=1}^{\infty}B_n\sin\left(\frac{n\pi x}{L}\right)e^{-\thermal{k}(n\pi/L)^2t},\\
B_n
&=\frac{2}{L}\int_0^L\thermal{f}(x)\sin\left(\frac{n\pi x}{L}\right)\,dx.
\end{aligned}
$$

For the eigenfunction expansion, write

$$
\thermal{u}(x,t)=\sum_{n=1}^{\infty}B_n(t)\sin\left(\frac{n\pi x}{L}\right),
$$

where $B_n(t)$ are the Fourier sine coefficients. The condition $\thermal{u}(x,0)=\thermal{f}(x)$ requires

$$
\thermal{f}(x)\sim\sum_{n=1}^{\infty}B_n(0)\sin\left(\frac{n\pi x}{L}\right),
\qquad
B_n(0)=\frac{2}{L}\int_0^L\thermal{f}(x)\sin\left(\frac{n\pi x}{L}\right)\,dx.
$$

To show that the expansion satisfies the heat equation, differentiate in $x$. With $\thermal{u}(0,t)=\thermal{u}(L,t)=0$ and the regularity required for the sine-series differentiation rule, the first derivative has a cosine series. Where $\partial\thermal{u}/\partial x$ is continuous, the series gives its value. Applying the cosine-series differentiation rule then gives the second derivative as a sine series.

$$
\begin{aligned}
\frac{\partial\thermal{u}}{\partial x}
&\sim\sum_{n=1}^{\infty}\frac{n\pi}{L}B_n(t)\cos\left(\frac{n\pi x}{L}\right),\\
\frac{\partial^2\thermal{u}}{\partial x^2}
&\sim-\sum_{n=1}^{\infty}\left(\frac{n\pi}{L}\right)^2B_n(t)\sin\left(\frac{n\pi x}{L}\right).
\end{aligned}
$$

### PDF page 52

Differentiate the sine expansion in time under the regularity conditions for termwise differentiation.

$$
\frac{\partial\thermal{u}}{\partial t}
=\sum_{n=1}^{\infty}B_n'(t)\sin\left(\frac{n\pi x}{L}\right).
$$

The margin assumption appears to name $\partial\thermal{u}/\partial x$ as piecewise smooth. The time-differentiation rule on page 50 refers to $\partial\thermal{u}/\partial t$.

Substituting both differentiated series into the heat equation gives

$$
\sum_{n=1}^{\infty}\left[B_n'(t)+\thermal{k}\left(\frac{n\pi}{L}\right)^2B_n(t)\right]
\sin\left(\frac{n\pi x}{L}\right)=0.
$$

By orthogonality, each coefficient in brackets is zero. For each $n$, the solution is $B_n(t)=C e^{-\thermal{k}(n\pi/L)^2t}$ with $C=B_n(0)$. Thus

$$
\thermal{u}(x,t)=\sum_{n=1}^{\infty}B_n(0)e^{-\thermal{k}(n\pi/L)^2t}
\sin\left(\frac{n\pi x}{L}\right).
$$

**Term-by-term integration of Fourier series**

Take $f(x)=1$ on $[0,L]$. Its sine coefficients follow from the projection formula in Eq. (3.3.23).

$$
b_n=\frac{2}{L}\int_0^L\sin\left(\frac{n\pi x}{L}\right)\,dx
=\begin{cases}
\displaystyle\frac{4}{n\pi},&n\text{ odd},\\[4pt]
0,&n\text{ even}.
\end{cases}
$$

The resulting sine series is

$$
1\sim\sum_{\substack{n\ge 1\\ n\text{ odd}}}\frac{4}{n\pi}\sin\left(\frac{n\pi x}{L}\right)
=\frac{4}{\pi}\left[\sin\left(\frac{\pi x}{L}\right)
+\frac{1}{3}\sin\left(\frac{3\pi x}{L}\right)+\cdots\right].
$$

### PDF page 53

Integrate the sine series of $1$ from $0$ to $x$.

$$
\begin{aligned}
\int_0^x 1\,dt
&=\frac{4}{\pi}\left[
\int_0^x \sin\left(\frac{\pi t}{L}\right)\,dt+
\frac{1}{3}\int_0^x \sin\left(\frac{3\pi t}{L}\right)\,dt+\cdots\right],\\
x&=\frac{4L}{\pi^2}\left(1+\frac{1}{3^2}+\frac{1}{5^2}+\cdots\right)
-\frac{4L}{\pi^2}\sum_{\substack{n\ge 1\\ n\text{ odd}}}
\frac{\cos(n\pi x/L)}{n^2}.
\end{aligned}
$$

The sum over odd integers is the full sum minus its even terms.

$$
\sum_{\substack{n\ge 1\\ n\text{ odd}}}\frac{1}{n^2}
=\sum_{n=1}^{\infty}\frac{1}{n^2}
-\sum_{n=1}^{\infty}\frac{1}{(2n)^2}
=\frac{\pi^2}{6}-\frac{1}{4}\frac{\pi^2}{6}
=\frac{\pi^2}{8}.
$$

This gives the Fourier cosine series of $x$ on $[0,L]$.

$$
x=\frac{L}{2}-\frac{4L}{\pi^2}
\left[\cos\left(\frac{\pi x}{L}\right)
+\frac{1}{3^2}\cos\left(\frac{3\pi x}{L}\right)+\cdots\right].
$$

Its constant coefficient also follows directly from the projection formula.

$$
A_0=\frac{1}{L}\int_0^L x\,dx
=\frac{1}{L}\left[\frac{x^2}{2}\right]_0^L=\frac{L}{2}.
$$

**March 9, 2017. Chapter 4. Wave equation**

The page introduces the one-dimensional scalar wave equation and also writes a vector form.

$$
\frac{\partial^2\mechanical{u}}{\partial t^2}
=\mechanical{c}^{\,2}\frac{\partial^2\mechanical{u}}{\partial x^2},
\qquad
\nabla^2\vec{A}=\frac{1}{\mechanical{v}^{\,2}}\frac{\partial^2\vec{A}}{\partial t^2}.
$$

The scalar function $\mechanical{u}(x,t)$ can describe the displacement of a wave. The constant $\mechanical{c}$ typically represents the wave speed.

### PDF page 54

The wave equation is a second-order, linear, homogeneous hyperbolic PDE. It models propagation, including water waves, sound and pressure waves, electromagnetic waves, and seismic waves. The notes list applications in elasticity, seismology, quantum mechanics, and plasma physics, and mention the evolution of surfaces as another propagation phenomenon.

**Derivation for an elastic string**

The wave equation can be derived in several physical settings. A standard example is the transverse vibration of an elastic string. The displacement $\mechanical{u}$ is the height of the string relative to its equilibrium line.

![[Kyle Kabasares - Partial Differential Equations - Displacement of a vibrating elastic string.png|**Fig. 25** Two profiles of a vibrating string. The arrow measures the transverse displacement from the equilibrium line.]]

The string obeys Newton's laws under tension and any applied loads. Consider the short segment between $x$ and $x+\Delta x$. Its mass is approximately $\mechanical{\rho}_0(x)\Delta x$, where $\mechanical{\rho}_0(x)$ is the mass per unit length.

![[Kyle Kabasares - Partial Differential Equations - Short segment of the elastic string.png|**Fig. 26** The short segment of the string lies above the interval from $x$ to $x+\Delta x$.]]

The goal is to derive an equation for the change in $\mechanical{u}$ with time.

### PDF page 55

Apply Newton's second law, $\mechanical{\vec F}=\mechanical{m}\mechanical{\vec a}$, to the segment. Body forces, such as gravity, act throughout the segment. Tension acts along the tangent to the string at each endpoint.

Let $\mechanical{\theta}(x,t)$ be the angle between the string and the horizontal. The slope is

$$
\frac{\partial\mechanical{u}}{\partial x}
=\tan\mechanical{\theta}
=\frac{\sin\mechanical{\theta}}{\cos\mechanical{\theta}}
\approx\sin\mechanical{\theta}
$$

for small $\mechanical{\theta}$.

![[Kyle Kabasares - Partial Differential Equations - Vertical component of the string tension.png|**Fig. 27** The vertical component of the tangential tension is $T\sin\theta$.]]

The vertical equation of motion for the short segment is

$$
\begin{aligned}
\mechanical{\rho}_0(x)\Delta x\frac{\partial^2\mechanical{u}}{\partial t^2}
&=-\mechanical{T}(x,t)\sin\mechanical{\theta}(x,t)\\
&\quad+\mechanical{T}(x+\Delta x,t)\sin\mechanical{\theta}(x+\Delta x,t)\\
&\quad+\mechanical{\rho}_0(x)\mechanical{Q}(x,t)\Delta x.
\end{aligned}
$$

Here $\mechanical{Q}$ is the vertical body force per unit mass, for example $-\mechanical{g}$ for gravity. The factor $\Delta x$ in the body-force term follows from the segment mass and the continuum equation below.

Divide by $\Delta x$ and let $\Delta x\to 0$.

$$
\mechanical{\rho}_0(x)\frac{\partial^2\mechanical{u}}{\partial t^2}
=\frac{\partial}{\partial x}\left[\mechanical{T}(x,t)\sin\mechanical{\theta}(x,t)\right]
+\mechanical{\rho}_0(x)\mechanical{Q}(x,t).
$$

The small-slope approximation replaces $\sin\mechanical{\theta}$ by $\partial\mechanical{u}/\partial x$. For the idealized elastic string, take the tension to be the constant $\mechanical{T}_0$. Then

$$
\boxed{\mechanical{\rho}_0(x)\frac{\partial^2\mechanical{u}}{\partial t^2}
=\mechanical{T}_0\frac{\partial^2\mechanical{u}}{\partial x^2}
+\mechanical{\rho}_0(x)\mechanical{Q}(x,t).}
$$

If the body force per unit length is negligible compared with the tension term and $\mechanical{\rho}_0$ is uniform, the equation becomes

$$
\frac{\partial^2\mechanical{u}}{\partial t^2}
=\frac{\mechanical{T}_0}{\mechanical{\rho}_0}
\frac{\partial^2\mechanical{u}}{\partial x^2},
\qquad
\mechanical{c}=\sqrt{\frac{\mechanical{T}_0}{\mechanical{\rho}_0}}.
$$

The ratio labeled $c^2$ in the sketch is the square of the wave speed.

### PDF page 56

**Units in the string equation**

The terms $\mechanical{\rho}_0\,\partial^2\mechanical{u}/\partial t^2$ and $\mechanical{T}_0\,\partial^2\mechanical{u}/\partial x^2$ have the same SI units, $\unit{N\,m^{-1}}=\unit{kg\,s^{-2}}$. The page writes $\unit{kg\,m\,s^{-2}}$, which applies to the force on the short segment before dividing by its length.

**March 10, 2017 discussion. Exercise 3.4.9**

Consider the heat equation with a source $\thermal{q}(x,t)$ and zero endpoint temperatures.

$$
\frac{\partial\thermal{u}}{\partial t}
=\thermal{k}\frac{\partial^2\thermal{u}}{\partial x^2}+\thermal{q}(x,t),
\qquad
\thermal{u}(0,t)=\thermal{u}(L,t)=0.
$$

Assume a sine-series solution.

$$
\thermal{u}(x,t)=\sum_{n=1}^{\infty}b_n(t)\sin\left(\frac{n\pi x}{L}\right).
$$

What ODE does $b_n(t)$ satisfy? Differentiate term by term.

$$
\begin{aligned}
\frac{\partial\thermal{u}}{\partial t}
&=\sum_{n=1}^{\infty}b_n'(t)\sin\left(\frac{n\pi x}{L}\right),\\
\frac{\partial^2\thermal{u}}{\partial x^2}
&=-\sum_{n=1}^{\infty}\left(\frac{n\pi}{L}\right)^2
 b_n(t)\sin\left(\frac{n\pi x}{L}\right).
\end{aligned}
$$

The equation then gives

$$
\sum_{n=1}^{\infty}\left[b_n'(t)+\thermal{k}\left(\frac{n\pi}{L}\right)^2b_n(t)\right]
\sin\left(\frac{n\pi x}{L}\right)=\thermal{q}(x,t).
$$

One option is to expand $\thermal{q}$ in a sine series and compare coefficients. Another is to multiply both sides by $\sin(m\pi x/L)$ and integrate in $x$. The orthogonality relation on $[0,L]$ is

$$
\int_0^L\sin\left(\frac{n\pi x}{L}\right)\sin\left(\frac{m\pi x}{L}\right)\,dx
=\begin{cases}
0,&n\ne m,\\
L/2,&n=m.
\end{cases}
$$

The lower limit appears as $-L$ in the handwriting. The value $L/2$ and the domain of the exercise give the lower limit $0$ used here.

### PDF page 57

**Modal equation for the forced heat problem**

Orthogonality leaves the term with $n=m$. The page uses the odd extension of the source to $[-L,L]$ for this projection. Since the integral of the squared sine on that interval is $L$, the equation is

$$
\begin{aligned}
\left[b_n'(t)+\thermal{k}\left(\frac{n\pi}{L}\right)^2b_n(t)\right]
\int_{-L}^L\sin^2\left(\frac{n\pi x}{L}\right)\,dx
&=\int_{-L}^L\thermal{q}_{\mathrm{odd}}(x,t)\sin\left(\frac{n\pi x}{L}\right)\,dx,\\
b_n'(t)+\thermal{k}\left(\frac{n\pi}{L}\right)^2b_n(t)
&=\frac{1}{L}\int_{-L}^L\thermal{q}_{\mathrm{odd}}(x,t)\sin\left(\frac{n\pi x}{L}\right)\,dx\\
&=\frac{2}{L}\int_0^L\thermal{q}(x,t)\sin\left(\frac{n\pi x}{L}\right)\,dx.
\end{aligned}
$$

The odd extension is inferred from the full interval and its normalization in the handwritten calculation.

**March 14, 2017 lecture. Wave equation**

Recall the hyperbolic equation $\mechanical{u}_{tt}=\mechanical{c}^{\,2}\mechanical{u}_{xx}$ with $\mechanical{c}^{\,2}=\mechanical{T}_0/\mechanical{\rho}_0$. The notes list two choices of boundary conditions.

$$
\begin{aligned}
\text{Fixed ends:}&\qquad \mechanical{u}(0,t)=\mechanical{u}(L,t)=0,\\
\text{Zero endpoint slope:}&\qquad \mechanical{u}_x(0,t)=\mechanical{u}_x(L,t)=0.
\end{aligned}
$$

The initial displacement and velocity are

$$
\mechanical{u}(x,0)=\mechanical{f}(x),
\qquad
\mechanical{u}_t(x,0)=\mechanical{g}(x).
$$

**Section 4.4. Vibrating string with fixed ends**

Set $\mechanical{u}(x,t)=X(x)T(t)$. Substitution into the wave equation gives $X(x)T''(t)=\mechanical{c}^{\,2}T(t)X''(x)$ and hence

$$
\frac{1}{\mechanical{c}^{\,2}}\frac{T''(t)}{T(t)}
=\frac{X''(x)}{X(x)}=-\lambda.
$$

The separated problems are

$$
X''=-\lambda X,\qquad X(0)=X(L)=0,
\qquad
T''=-\lambda\mechanical{c}^{\,2}T.
$$

For $\lambda>0$ the fixed-end spatial eigenvalues and eigenfunctions are

$$
\lambda_n=\left(\frac{n\pi}{L}\right)^2,
\qquad
X_n(x)=C_n\sin\left(\frac{n\pi x}{L}\right),
\qquad n=1,2,\ldots.
$$

For $\lambda=0$ and $\lambda<0$, the fixed-end conditions give only the zero solution.

### PDF page 58

For $\lambda>0$, the time equation $T''=-\lambda\mechanical{c}^{\,2}T$ has the solution

$$
T(t)=C_1\cos\left(\sqrt{\lambda}\,\mechanical{c}t\right)
+C_2\sin\left(\sqrt{\lambda}\,\mechanical{c}t\right).
$$

At $\lambda=\lambda_n=(n\pi/L)^2$, substitute $\sqrt{\lambda_n}=n\pi/L$. Superposition of the separated solutions gives

$$
\mechanical{u}(x,t)=\sum_{n=1}^{\infty}\sin\left(\frac{n\pi x}{L}\right)
\left[
A_n\cos\left(\frac{n\pi\mechanical{c}t}{L}\right)
+B_n\sin\left(\frac{n\pi\mechanical{c}t}{L}\right)
\right].
$$

At $t=0$, $\mechanical{f}(x)=\sum_{n=1}^{\infty}A_n\sin(n\pi x/L)$. Multiply by $\sin(m\pi x/L)$ and integrate the odd extension on $[-L,L]$.

$$
\int_{-L}^L \mechanical{f}_{\mathrm{odd}}(x)\sin\left(\frac{m\pi x}{L}\right)\,dx
=\sum_{n=1}^{\infty}A_n\int_{-L}^L
\sin\left(\frac{n\pi x}{L}\right)\sin\left(\frac{m\pi x}{L}\right)\,dx.
$$

The inner integral is zero for $n\ne m$ and $L$ for $n=m\ne 0$ by the orthogonality relation cited as Eq. (2.4.41). Therefore, using the half-range formula in Eq. (3.3.2),

$$
A_n=\frac{1}{L}\int_{-L}^L \mechanical{f}_{\mathrm{odd}}(x)
\sin\left(\frac{n\pi x}{L}\right)\,dx
=\frac{2}{L}\int_0^L \mechanical{f}(x)\sin\left(\frac{n\pi x}{L}\right)\,dx.
$$

Differentiating with respect to $t$ gives

$$
\frac{\partial\mechanical{u}}{\partial t}(x,t)=
\sum_{n=1}^{\infty}\frac{n\pi\mechanical{c}}{L}\sin\left(\frac{n\pi x}{L}\right)
\left[-A_n\sin\left(\frac{n\pi\mechanical{c}t}{L}\right)
+B_n\cos\left(\frac{n\pi\mechanical{c}t}{L}\right)\right].
$$

At $t=0$, $\mechanical{g}(x)=\sum_{n=1}^{\infty}B_n(n\pi\mechanical{c}/L)\sin(n\pi x/L)$. Project this series onto $\sin(m\pi x/L)$ in the same way.

$$
\int_{-L}^L \mechanical{g}_{\mathrm{odd}}(x)\sin\left(\frac{m\pi x}{L}\right)\,dx
=\sum_{n=1}^{\infty}B_n\frac{n\pi\mechanical{c}}{L}
\int_{-L}^L\sin\left(\frac{n\pi x}{L}\right)\sin\left(\frac{m\pi x}{L}\right)\,dx.
$$

### PDF page 59

The velocity projection with $n=m$ gives

$$
\int_{-L}^L\mechanical{g}_{\mathrm{odd}}(x)\sin\left(\frac{m\pi x}{L}\right)\,dx
=B_m\frac{m\pi\mechanical{c}}{L}L.
$$

Thus

$$
B_n=\frac{1}{n\pi\mechanical{c}}\int_{-L}^L
\mechanical{g}_{\mathrm{odd}}(x)\sin\left(\frac{n\pi x}{L}\right)\,dx
=\frac{2}{n\pi\mechanical{c}}\int_0^L
\mechanical{g}(x)\sin\left(\frac{n\pi x}{L}\right)\,dx,
\qquad n=1,2,\ldots.
$$

**March 16, 2017 lecture. Section 4.4 continued**

The notes mark Section 3.3.5 on page 107 as the start of the material for Midterm 2.

The fixed-end string has displacement $\mechanical{u}(x,t)$, prescribed initial position $\mechanical{f}$, and prescribed initial velocity $\mechanical{g}$.

$$
\begin{cases}
\mechanical{u}_{tt}=\mechanical{c}^{\,2}\mechanical{u}_{xx},\\
\mechanical{u}(0,t)=\mechanical{u}(L,t)=0,\\
\mechanical{u}(x,0)=\mechanical{f}(x),\\
\mechanical{u}_t(x,0)=\mechanical{g}(x).
\end{cases}
$$

The solution previously obtained is

$$
\boxed{\mechanical{u}(x,t)=\sum_{n=1}^{\infty}\sin\left(\frac{n\pi x}{L}\right)
\left[A_n\cos\left(\frac{n\pi\mechanical{c}t}{L}\right)
+B_n\sin\left(\frac{n\pi\mechanical{c}t}{L}\right)\right].}
$$

The two coefficient formulas, marked $(*)$ and $(**)$ in the notes, are

$$
\begin{aligned}
A_n&=\frac{2}{L}\int_0^L\mechanical{f}(x)\sin\left(\frac{n\pi x}{L}\right)\,dx,\\
B_n&=\frac{2}{n\pi\mechanical{c}}\int_0^L\mechanical{g}(x)
\sin\left(\frac{n\pi x}{L}\right)\,dx.
\end{aligned}
$$

### PDF page 60

**Normal modes of a vibrating string**

The solution $\mechanical{u}(x,t)$ is the vertical displacement of the string. Each term in the solution has the spatial normal-mode shape $\sin(n\pi x/L)$ and an oscillatory time factor.

$$
\sin\left(\frac{n\pi x}{L}\right)
\left[A_n\cos\left(\frac{n\pi\mechanical{c}t}{L}\right)
+B_n\sin\left(\frac{n\pi\mechanical{c}t}{L}\right)\right].
$$

Write the time factor as a single sine with amplitude $\mechanical{A}_n^{\mathrm{amp}}$, angular frequency $\mechanical{\omega}_n=n\pi\mechanical{c}/L$, and phase $\mechanical{\theta}_n$.

$$
A_n\cos(\mechanical{\omega}_n t)+B_n\sin(\mechanical{\omega}_n t)
=\mechanical{A}_n^{\mathrm{amp}}\sin(\mechanical{\omega}_n t+\mechanical{\theta}_n),
\qquad
\mechanical{A}_n^{\mathrm{amp}}=\sqrt{A_n^2+B_n^2}.
$$

Use the identity $\sin(a+b)=\sin a\cos b+\sin b\cos a$. Matching the coefficients gives $\mechanical{A}_n^{\mathrm{amp}}\sin\mechanical{\theta}_n=A_n$ and $\mechanical{A}_n^{\mathrm{amp}}\cos\mechanical{\theta}_n=B_n$. In particular, $\tan\mechanical{\theta}_n=A_n/B_n$ when $B_n\ne 0$. The two coefficient equations determine the quadrant of the phase for a nonzero mode.

The handwritten derivation divides the angle-addition formula by $\cos\mechanical{\theta}_n$ and multiplies by $B_n$.

$$
\begin{aligned}
\frac{\sin(\mechanical{\omega}_n t+\mechanical{\theta}_n)}{\cos\mechanical{\theta}_n}
&=\sin(\mechanical{\omega}_n t)+\tan\mechanical{\theta}_n\cos(\mechanical{\omega}_n t),\\
\frac{B_n}{\cos\mechanical{\theta}_n}
\sin(\mechanical{\omega}_n t+\mechanical{\theta}_n)
&=B_n\sin(\mechanical{\omega}_n t)+A_n\cos(\mechanical{\omega}_n t).
\end{aligned}
$$

The identity

$$
1+\tan^2\mechanical{\theta}_n
=\frac{\sin^2\mechanical{\theta}_n+\cos^2\mechanical{\theta}_n}{\cos^2\mechanical{\theta}_n}
=\frac{1}{\cos^2\mechanical{\theta}_n}
$$

gives $(B_n/\cos\mechanical{\theta}_n)^2=B_n^2+A_n^2$. With the phase chosen so that $\cos\mechanical{\theta}_n$ has the sign of $B_n$, the prefactor is the positive amplitude. The superscript $\mathrm{amp}$ distinguishes the amplitude labeled $A$ on the page from the cosine coefficient $A_n$.

### PDF page 61

The amplitude identity from the previous page gives

$$
A_n^2+B_n^2=\left(\frac{B_n}{\cos\mechanical{\theta}_n}\right)^2.
$$

For the appropriate phase, $B_n/\cos\mechanical{\theta}_n=\sqrt{A_n^2+B_n^2}$. The circular or angular frequency is $\mechanical{\omega}_n=n\pi\mechanical{c}/L$, and $\sin(\mechanical{\omega}_n t+\mechanical{\theta}_n)$ describes simple harmonic motion.

**March 21, 2017. Fundamental mode and higher modes**

Recall the fixed-end solution.

$$
\mechanical{u}(x,t)=\sum_{n=1}^{\infty}\sin\left(\frac{n\pi x}{L}\right)
\left[A_n\cos\left(\frac{n\pi\mechanical{c}t}{L}\right)
+B_n\sin\left(\frac{n\pi\mechanical{c}t}{L}\right)\right].
$$

Each normal mode has the form

$$
\sin\left(\frac{n\pi x}{L}\right)\sqrt{A_n^2+B_n^2}
\sin(\mechanical{\omega}_n t+\mechanical{\theta}_n).
$$

The notes write the phase as $\tan^{-1}(A_n/B_n)$, with the quadrant determined by the coefficients as on the previous page. The $n=1$ term is the fundamental mode.

![[Kyle Kabasares - Partial Differential Equations - Fundamental mode of a fixed-end string.png|**Fig. 28** The fundamental mode has nodes at the fixed endpoints.]]

![[Kyle Kabasares - Partial Differential Equations - Second mode of a fixed-end string.png|**Fig. 29** The second mode has an additional node at the midpoint, with the two halves moving in opposite directions.]]

Real strings usually have damping. The page writes a damping term proportional to transverse velocity.

$$
\mechanical{u}_{tt}=\mechanical{c}^{\,2}\mechanical{u}_{xx}
-\mechanical{\beta}\mechanical{u}_t.
$$

The annotation beneath the damping term appears to read $e^{-\beta(n\pi/L)^2t}$. For the velocity damping in the displayed equation, an underdamped mode instead has the envelope $e^{-\mechanical{\beta}t/2}$, obtained from the roots of its time equation.

### PDF page 62

The handwritten damping example gives the mode factor

$$
\sin\left(\frac{n\pi x}{L}\right)
\sin\left(\frac{n\pi\mechanical{c}t}{L}\right)
e^{-\beta(n\pi/L)^2t}.
$$

For $\beta=1$ and $L=\pi$ the exponential is $e^{-n^2t}$, so the high-frequency modes in this example decay quickly. This is the frequency-dependent decay written in the source. The velocity-damping equation on page 61 gives the underdamped envelope stated there.

**Traveling waves on an infinite domain**

On the full line, there is no discrete set of harmonics imposed by fixed ends. The functions $R(x+\mechanical{c}t)$ and $S(x-\mechanical{c}t)$ satisfy $\mechanical{u}_{tt}=\mechanical{c}^{\,2}\mechanical{u}_{xx}$. The wave operator factors as

$$
\frac{\partial^2}{\partial t^2}-\mechanical{c}^{\,2}\frac{\partial^2}{\partial x^2}
=\left(\frac{\partial}{\partial t}-\mechanical{c}\frac{\partial}{\partial x}\right)
 \left(\frac{\partial}{\partial t}+\mechanical{c}\frac{\partial}{\partial x}\right).
$$

The factors commute for smooth functions. A solution of either $\mechanical{u}_t-\mechanical{c}\mechanical{u}_x=0$ or $\mechanical{u}_t+\mechanical{c}\mechanical{u}_x=0$ therefore solves the wave equation. The profile $R(x+\mechanical{c}t)$ satisfies the first equation and $S(x-\mechanical{c}t)$ satisfies the second.

For initial displacement $\mechanical{f}$, define

$$
A(x,t)=\frac{\mechanical{f}(x+\mechanical{c}t)+\mechanical{f}(x-\mechanical{c}t)}{2}.
$$

It has $A(x,0)=\mechanical{f}(x)$ and

$$
A_t(x,0)=\frac{\mechanical{c}\mechanical{f}'(x)-\mechanical{c}\mechanical{f}'(x)}{2}=0.
$$

The other part of the solution is introduced as

$$
B(x,t)=\frac{G(x+\mechanical{c}t)-G(x-\mechanical{c}t)}{2\mechanical{c}}.
$$

### PDF page 63

Choose $G$ so that $G'=\mechanical{g}$. Then $B(x,0)=0$ and

$$
B_t(x,0)=\frac{\mechanical{c}G'(x)+\mechanical{c}G'(x)}{2\mechanical{c}}
=G'(x)=\mechanical{g}(x).
$$

Adding $A$ and $B$ gives d'Alembert's solution.

$$
\begin{aligned}
\mechanical{u}(x,t)
&=\underbrace{\frac{\mechanical{f}(x+\mechanical{c}t)}{2}
+\frac{G(x+\mechanical{c}t)}{2\mechanical{c}}}_{R(x+\mechanical{c}t)}
+\underbrace{\frac{\mechanical{f}(x-\mechanical{c}t)}{2}
-\frac{G(x-\mechanical{c}t)}{2\mechanical{c}}}_{S(x-\mechanical{c}t)}.
\end{aligned}
$$

The $R$ profile travels left and the $S$ profile travels right. The handwriting appears to place the denominators inside the function arguments in this line. Their placement outside follows from the definitions of $A$ and $B$ on the preceding page.

**Midterm study. Exercise 4.2.2**

For $\mechanical{c}^{\,2}=\mechanical{T}_0/\mechanical{\rho}_0(x)$, the units of $\mechanical{T}_0$ are $\unit{N}$ and the units of $\mechanical{\rho}_0(x)$ are $\unit{kg\,m^{-1}}$. Therefore

$$
[\mechanical{c}^{\,2}]
=\frac{\unit{N}}{\unit{kg\,m^{-1}}}
=\frac{\unit{kg\,m\,s^{-2}}}{\unit{kg\,m^{-1}}}
=\unit{m^2\,s^{-2}}.
$$

The fixed-end vibrating-string problem is

$$
\begin{cases}
\displaystyle\frac{\partial^2\mechanical{u}}{\partial t^2}
=\mechanical{c}^{\,2}\frac{\partial^2\mechanical{u}}{\partial x^2},
\qquad \mechanical{c}^{\,2}=\dfrac{\mechanical{T}_0}{\mechanical{\rho}_0(x)},\\[6pt]
\mechanical{u}(0,t)=\mechanical{u}(L,t)=0,\\
\mechanical{u}(x,0)=\mechanical{f}(x),\qquad
\displaystyle\frac{\partial\mechanical{u}}{\partial t}(x,0)=\mechanical{g}(x).
\end{cases}
$$

### PDF page 64

**Midterm study. Separation of variables for the fixed-end string**

Assume constant wave speed and set $\mechanical{u}(x,t)=X(x)T(t)$. The PDE becomes

$$
X(x)T''(t)=\mechanical{c}^{\,2}T(t)X''(x),
\qquad
\frac{T''(t)}{\mechanical{c}^{\,2}T(t)}=\frac{X''(x)}{X(x)}=-\lambda.
$$

The spatial equation is $X''=-\lambda X$ with the Dirichlet conditions $X(0)=X(L)=0$. Its modes are $X_n(x)=\sin(n\pi x/L)$ with $\lambda_n=(n\pi/L)^2$.

The time equation is $T''=-\lambda\mechanical{c}^{\,2}T$. For $\lambda>0$ the characteristic equation $r^2=-\lambda\mechanical{c}^{\,2}$ has the roots

$$
r_1=i\mechanical{c}\sqrt{\lambda},\qquad r_2=-i\mechanical{c}\sqrt{\lambda}.
$$

The exponential form and the equivalent real form are

$$
\begin{aligned}
T(t)&=D_1 e^{i\mechanical{c}\sqrt{\lambda}\,t}
+D_2 e^{-i\mechanical{c}\sqrt{\lambda}\,t},\\
T(t)&=C_1\cos\left(\mechanical{c}\sqrt{\lambda}\,t\right)
+C_2\sin\left(\mechanical{c}\sqrt{\lambda}\,t\right).
\end{aligned}
$$

In the last line, substitute $\sqrt{\lambda_n}=n\pi/L$.

$$
T_n(t)=C_1\cos\left(\frac{n\pi\mechanical{c}t}{L}\right)
+C_2\sin\left(\frac{n\pi\mechanical{c}t}{L}\right).
$$

The handwriting labels $n\pi/L$ as $\lambda_n$ beside the squared eigenvalue. It is used as $\sqrt{\lambda_n}$ in the time solution.

### PDF page 65

The midterm review concludes with the fixed-end string solution.

$$
\mechanical{u}(x,t)=\sum_{n=1}^{\infty}\sin\left(\frac{n\pi x}{L}\right)
\left[A_n\cos\left(\frac{n\pi\mechanical{c}t}{L}\right)
+B_n\sin\left(\frac{n\pi\mechanical{c}t}{L}\right)\right].
$$

**April 4, 2017. Chapter 5. Sturm–Liouville eigenvalue problems**

**Section 5.3.1. General classification**

A Sturm–Liouville equation has the form

$$
\frac{d}{dx}\left(p(x)\frac{d\phi}{dx}\right)+q(x)\phi+\lambda\sigma(x)\phi=0.
$$

Here $\lambda$ is the eigenvalue, $\phi(x)$ is the eigenfunction, and $p(x)$, $q(x)$, and $\sigma(x)$ are given functions. The separated boundary conditions on $[a,b]$ are

$$
\begin{cases}
\beta_1\phi(a)+\beta_2\phi'(a)=0,\\
\beta_3\phi(b)+\beta_4\phi'(b)=0.
\end{cases}
$$

1. A simple regular Sturm–Liouville problem is

   $$
   \phi''+\lambda\phi=0,\qquad \phi(0)=\phi(L)=0.
   $$

   Here $p=1$, $q=0$, $\sigma=1$, $\beta_1=\beta_3=1$, and $\beta_2=\beta_4=0$.

2. Heat flow in a nonuniform rod gives the spatial equation

   $$
   \frac{d}{dx}\left(\thermal{k}_0(x)\frac{d\phi}{dx}\right)+\alpha\phi
   +\lambda\thermal{c}(x)\mechanical{\rho}(x)\phi=0.
   $$

   Here $p(x)=\thermal{k}_0(x)$, $q(x)=\alpha$, and $\sigma(x)=\thermal{c}(x)\mechanical{\rho}(x)$, where $\thermal{c}(x)$ is specific heat and $\mechanical{\rho}(x)$ is mass density.

### PDF page 66

The third example is vibration of a nonuniform string.

$$
\mechanical{T}_0\phi''+\alpha\phi+\lambda\mechanical{\rho}_0(x)\phi=0.
$$

The coefficients are $p(x)=\mechanical{T}_0$, $q(x)=\alpha$, and $\sigma(x)=\mechanical{\rho}_0(x)$.

**Properties illustrated by the Dirichlet problem**

Recall $\phi''+\lambda\phi=0$ with $\phi(0)=\phi(L)=0$. The notes refer to Section 5.5 for the first property and illustrate the next three with this example.

2. **Ordering of eigenvalues.** The eigenvalues increase without bound.

   $$
   \lambda_1=\left(\frac{\pi}{L}\right)^2
   <\lambda_2=\left(\frac{2\pi}{L}\right)^2
   <\cdots<\lambda_n=\left(\frac{n\pi}{L}\right)^2<\cdots.
   $$

3. **Zeros of eigenfunctions.** The second eigenfunction $\phi_2(x)=\sin(2\pi x/L)$ has one interior zero at $x=L/2$.

   ![[Kyle Kabasares - Partial Differential Equations - Interior zero of the second Dirichlet eigenfunction.png|**Fig. 30** The second Dirichlet eigenfunction crosses the axis at the midpoint and vanishes at both endpoints.]]

4. **Convergence of the eigenfunction expansion.** For piecewise smooth $f$, the sine expansion converges at each interior point to the average of the two one-sided limits.

   $$
   \sum_{n=1}^{\infty}a_n\sin\left(\frac{n\pi x}{L}\right)
   =\frac{f(x^+)+f(x^-)}{2},
   \qquad 0<x<L.
   $$

### PDF page 67

At a point of continuity the eigenfunction expansion on page 66 converges to $f(x)$.

5. **Orthogonality.** Distinct eigenfunctions are orthogonal with respect to the weight $\sigma(x)$.

   $$
   \int_a^b\phi_n(x)\phi_m(x)\sigma(x)\,dx=0,\qquad n\ne m.
   $$

   In the Dirichlet example, $\sigma(x)=1$, $a=0$, $b=L$, and $\phi_n(x)=\sin(n\pi x/L)$. Thus

   $$
   \int_0^L\sin\left(\frac{n\pi x}{L}\right)
   \sin\left(\frac{m\pi x}{L}\right)\,dx
   =\begin{cases}0,&n\ne m,\\ L/2,&n=m.\end{cases}
   $$

   To find the coefficients of $f(x)=\sum_{n=1}^{\infty}a_n\phi_n(x)$, multiply by $\phi_m(x)\sigma(x)$ and integrate. The terms with $n\ne m$ vanish.

   $$
   \int_0^L f(x)\phi_m(x)\sigma(x)\,dx
   =\sum_{n=1}^{\infty}a_n\int_0^L\phi_n(x)\phi_m(x)\sigma(x)\,dx
   =a_m\int_0^L\phi_m^2(x)\sigma(x)\,dx.
   $$

   Therefore

   $$
   a_n=\frac{\displaystyle\int_0^L f(x)\phi_n(x)\sigma(x)\,dx}
   {\displaystyle\int_0^L\phi_n^2(x)\sigma(x)\,dx},\qquad n=1,2,\ldots.
   $$

6. **Rayleigh quotient.** For an eigenfunction $\phi$ of the Sturm–Liouville equation,

   $$
   \lambda=
   \frac{\displaystyle-[p\phi\phi']_a^b
   +\int_a^b\bigl[p(\phi')^2-q\phi^2\bigr]\,dx}
   {\displaystyle\int_a^b\phi^2\sigma\,dx}.
   $$

   In the Dirichlet example, $p=1$, $q=0$, and $\sigma=1$. The endpoint term vanishes, leaving

   $$
   \lambda=\frac{\displaystyle\int_0^L(\phi')^2\,dx}
   {\displaystyle\int_0^L\phi^2\,dx}.
   $$

   The numerator is nonnegative. It vanishes only if $\phi'=0$, in which case $\phi$ is constant. The square on the derivative is carried through from the preceding line of the handwritten calculation.

### PDF page 68

**April 11, 2017 lecture. Section 5.5. Self-adjoint operators and Sturm–Liouville eigenvalue problems**

The regular Sturm–Liouville problem is

$$
\frac{d}{dx}\left[p(x)\frac{d\phi}{dx}\right]+q(x)\phi+\lambda\sigma(x)\phi=0,
\tag{1a}
$$

with the boundary conditions

$$
\begin{aligned}
\beta_1\phi(a)+\beta_2\phi'(a)&=0, &&\text{(1b)}\\
\beta_3\phi(b)+\beta_4\phi'(b)&=0. &&\text{(1c)}
\end{aligned}
$$

The goal is to prove properties of the regular eigenvalue problem. The $\beta_i$ are real scalar coefficients. The functions $p$, $q$, and $\sigma$ are real and continuous, and $p(x)>0$ and $\sigma(x)>0$ for all $x\in[a,b]$.

Define the linear differential operator on a function $y$ by

$$
\mathcal{L}(y)=\frac{d}{dx}\left(p(x)\frac{dy}{dx}\right)+q(x)y(x).
\tag{2}
$$

With this notation, Eq. (1a) becomes

$$
\mathcal{L}(\phi)+\lambda\sigma(x)\phi=0,\qquad a\le x\le b,
\tag{3}
$$

where $\lambda$ is the eigenvalue and $\phi(x)$ is the associated eigenfunction. Linearity gives

$$
\mathcal{L}(C_1\phi_1+C_2\phi_2)
=C_1\mathcal{L}(\phi_1)+C_2\mathcal{L}(\phi_2).
$$

**Lagrange's identity**

$$
u\mathcal{L}(v)-v\mathcal{L}(u)
=\frac{d}{dx}\left[p(x)\left(u\frac{dv}{dx}-v\frac{du}{dx}\right)\right].
$$

### PDF page 69

**Derivation of Lagrange's identity**

For sufficiently smooth functions $u$ and $v$,

$$
\mathcal{L}(u)=(pu')'+qu,\qquad
\mathcal{L}(v)=(pv')'+qv.
$$

In $u\mathcal{L}(v)-v\mathcal{L}(u)$ the two terms involving $q$ cancel. Apply the product rule $(fg)'=f'g+fg'$ to write

$$
(upv')'=u'pv'+u(pv')',\qquad
(vpu')'=v'pu'+v(pu')'.
$$

Then

$$
\begin{aligned}
u\mathcal{L}(v)-v\mathcal{L}(u)
&=u(pv')'-v(pu')'\\
&=(upv')'-u'pv'-(vpu')'+v'pu'\\
&=\frac{d}{dx}\bigl[p(x)(uv'-vu')\bigr].
\end{aligned}
$$

This is the differential form of Lagrange's formula.

**Green's formula**

Integrate the identity over $[a,b]$.

$$
\int_a^b\bigl[u\mathcal{L}(v)-v\mathcal{L}(u)\bigr]\,dx
=\bigl[p(x)(uv'-vu')\bigr]_a^b.
$$

The notes specify continuous first derivatives for $u$ and $v$. When $p=1$ and $q=0$, the operator reduces to $\mathcal{L}(u)=u''$, so

$$
\int_a^b(uv''-vu'')\,dx=[uv'-vu']_a^b.
$$

### PDF page 70

**Self-adjointness of $\mathcal{L}$**

If $u$ and $v$ satisfy the same homogeneous separated boundary conditions of the regular Sturm–Liouville problem, then

$$
\boxed{\int_a^b\bigl[u\mathcal{L}(v)-v\mathcal{L}(u)\bigr]\,dx=0.}
\tag{6}
$$

The notes call $\mathcal{L}$ self-adjoint when this identity holds. The example uses a Dirichlet condition at $a$ and a Robin condition at $b$.

$$
\begin{aligned}
u(a)&=0, & v(a)&=0,\\
u'(b)+\beta u(b)&=0, & v'(b)+\beta v(b)&=0.
\end{aligned}
$$

By Green's formula,

$$
\begin{aligned}
\int_a^b\bigl[u\mathcal{L}(v)-v\mathcal{L}(u)\bigr]\,dx
&=[p(uv'-vu')]_a^b\\
&=p(b)\bigl[u(b)v'(b)-v(b)u'(b)\bigr]\\
&\quad-p(a)\bigl[u(a)v'(a)-v(a)u'(a)\bigr].
\end{aligned}
$$

The contribution at $a$ vanishes since $u(a)=v(a)=0$. At $b$, substitute $u'(b)=-\beta u(b)$ and $v'(b)=-\beta v(b)$ to obtain

$$
p(b)\bigl[-\beta u(b)v(b)+\beta v(b)u(b)\bigr]=0.
$$

This gives Eq. (6) for these boundary conditions.

### PDF page 71

**Orthogonal eigenfunctions**

Eigenfunctions $\phi_n$ and $\phi_m$ corresponding to distinct eigenvalues $\lambda_n$ and $\lambda_m$ are orthogonal with weight $\sigma(x)$. Both satisfy the same homogeneous boundary conditions, and their equations are

$$
\begin{aligned}
\mathcal{L}(\phi_n)+\lambda_n\sigma(x)\phi_n&=0, &&\text{(7)}\\
\mathcal{L}(\phi_m)+\lambda_m\sigma(x)\phi_m&=0. &&\text{(8)}
\end{aligned}
$$

Set $u=\phi_n$ and $v=\phi_m$ in Green's formula.

$$
\int_a^b\bigl[\phi_n\mathcal{L}(\phi_m)-\phi_m\mathcal{L}(\phi_n)\bigr]\,dx
=\bigl[p(x)(\phi_n\phi_m'-\phi_m\phi_n')\bigr]_a^b=0.
$$

The last equality follows from the common boundary conditions. Substituting Eqs. (7) and (8) gives

$$
(\lambda_n-\lambda_m)\int_a^b \sigma(x)\phi_n(x)\phi_m(x)\,dx=0.
$$

The handwritten substitution reverses the two terms, which changes the overall sign but gives the same equality to zero. Since $\lambda_n\ne\lambda_m$, it follows that

$$
\int_a^b\phi_n(x)\phi_m(x)\sigma(x)\,dx=0.
$$

### PDF page 72

**April 14, 2017 discussion. Exercise 5.5.8**

Consider the fourth-order linear differential operator $\mathcal{L}=d^4/dx^4$. Part (a) asks to express $u\mathcal{L}(v)-v\mathcal{L}(u)$ as an exact derivative. The fourth-order version of Lagrange's identity is

$$
u\mathcal{L}(v)-v\mathcal{L}(u)
=uv^{(4)}-vu^{(4)}
=\frac{d}{dx}\bigl[uv^{(3)}-vu^{(3)}-u'v''+v'u''\bigr].
$$

The product rule verifies the equality.

$$
\begin{aligned}
\frac{d}{dx}\bigl[uv^{(3)}-vu^{(3)}-u'v''+v'u''\bigr]
&=u'v^{(3)}+uv^{(4)}-v'u^{(3)}-vu^{(4)}\\
&\quad-u''v''-u'v^{(3)}+v''u''+v'u^{(3)}\\
&=uv^{(4)}-vu^{(4)}.
\end{aligned}
$$

The Rayleigh quotient attains its minimum at the lowest eigenvalue when minimized over nonzero admissible functions satisfying the boundary conditions. The notes refer to continuous functions, with the regularity needed to define the quotient understood.

**April 18, 2017 lecture. Section 5.6. Rayleigh quotient**

Start with the Sturm–Liouville equation on $[a,b]$.

$$
\frac{d}{dx}\bigl(p(x)\phi'(x)\bigr)+q(x)\phi(x)+\lambda\sigma(x)\phi(x)=0.
\tag{1}
$$

Multiply Eq. (1) by $\phi$ and integrate.

$$
\int_a^b\bigl[(p\phi')'\phi+q\phi^2\bigr]\,dx
+\lambda\int_a^b\phi^2\sigma\,dx=0.
$$

The last integral is strictly positive since $\sigma>0$ and $\phi$ is a nonzero eigenfunction. Solving for $\lambda$ gives

$$
\lambda=-\frac{\displaystyle\int_a^b\bigl[(p\phi')'\phi+q\phi^2\bigr]\,dx}
{\displaystyle\int_a^b\phi^2\sigma\,dx}.
$$

For integration by parts in the first term, take $u=\phi$ and $dv=(p\phi')'\,dx$.

### PDF page 73

Integration by parts gives

$$
\int_a^b(p\phi')'\phi\,dx
=[p\phi'\phi]_a^b-\int_a^b p(\phi')^2\,dx.
$$

Substitution gives the Rayleigh quotient.

$$
\boxed{\lambda=
\frac{\displaystyle-[p\phi'\phi]_a^b+
\int_a^b\bigl[p(\phi')^2-q\phi^2\bigr]\,dx}
{\displaystyle\int_a^b\sigma\phi^2\,dx}.}
\tag{2}
$$

**Nonnegative eigenvalues**

Equation (2) gives $\lambda\ge 0$ when $-[p\phi'\phi]_a^b\ge 0$ and $q(x)\le 0$ throughout $[a,b]$, since $p$ and $\sigma$ are positive. The handwritten boundary-term inequality appears strict, but the examples use equality.

- For $\phi(a)=\phi(b)=0$, each endpoint term vanishes.
- For $\phi(a)=0$ and $\phi'(b)=0$, each endpoint term also vanishes. The page labels this pair Robin conditions. The displayed equations give a Dirichlet condition at $a$ and a Neumann condition at $b$.
- For periodic conditions $\phi(a)=\phi(b)$ and $\phi'(a)=\phi'(b)$, the boundary term is
  $$
  -[p\phi'\phi]_a^b=-\bigl[p(b)\phi'(b)\phi(b)-p(a)\phi'(a)\phi(a)\bigr].
  $$
  The handwritten example drops the factor $p$, as in the constant-$p$ case. With $p(a)=p(b)$, the periodic conditions give zero.

### PDF page 74

The periodic endpoint contribution on page 73 is $-[\phi'\phi]_a^b=0$ for $p=1$.

**Minimization principle**

For a nonzero admissible function $u$ satisfying the boundary conditions, define

$$
R[u]=
\frac{\displaystyle-[puu']_a^b+
\int_a^b\bigl[p(u')^2-qu^2\bigr]\,dx}
{\displaystyle\int_a^b u^2\sigma\,dx}.
$$

The smallest eigenvalue satisfies $\lambda_1=\min_u R[u]$, labeled Eq. (3) in the notes. The minimum occurs at $u=\phi_1$ and at its nonzero scalar multiples because the quotient is unchanged by scaling.

Any admissible trial function $u_T$ gives the upper bound

$$
\lambda_1\le R[u_T].
$$

For example, consider

$$
\phi''+\lambda\phi=0,\qquad 0\le x\le 1,\qquad \phi(0)=\phi(1)=0.
$$

Its eigenvalues and eigenfunctions are $\lambda_n=(n\pi)^2$ and $\phi_n(x)=\sin(n\pi x)$. In particular, $\lambda_1=\pi^2\approx 9.87$ and $\phi_1(x)=\sin(\pi x)$. The handwritten decimal is $9.86$.

For an admissible $u_T$, the Dirichlet conditions give $u_T(0)=u_T(1)=0$. With $p=\sigma=1$ and $q=0$,

$$
R[u_T]=
\frac{\displaystyle-u_T(1)u_T'(1)+u_T(0)u_T'(0)+\int_0^1(u_T')^2\,dx}
{\displaystyle\int_0^1 u_T^2\,dx}
=\frac{\displaystyle\int_0^1(u_T')^2\,dx}{\displaystyle\int_0^1 u_T^2\,dx}.
$$

### PDF page 75

For the Dirichlet problem on $[0,1]$, the upper bound is

$$
\lambda_1\le R[u_T]
=\frac{\displaystyle\int_0^1(u_T')^2\,dx}{\displaystyle\int_0^1u_T^2\,dx}.
$$

The first trial function is the tent-shaped profile

$$
u_{T1}(x)=\begin{cases}
2x,&0\le x\le \tfrac12,\\
2-2x,&\tfrac12<x\le 1.
\end{cases}
$$

The decreasing branch is read as $2-2x$ from the sketch and the boundary value at $x=1$. The page asks the reader to compute its quotient.

![[Kyle Kabasares - Partial Differential Equations - Triangular Rayleigh trial function and exact sine mode.png|**Fig. 31** The triangular trial function and $\sin(\pi x)$ share the endpoint zeros and midpoint peak.]]

Other trial functions give the following values. The notes denote the quotient by $A$.

$$
\begin{aligned}
u_{T2}(x)&=\begin{cases}
x,&0\le x\le \tfrac12,\\
1-x,&\tfrac12<x\le 1,
\end{cases}
& R[u_{T2}]&=12,\\
u_{T3}(x)&=x-x^2=x(1-x),
& R[u_{T3}]&=10,\\
u_{T4}(x)&=\phi_1(x)=\sin(\pi x),
& R[u_{T4}]&=\pi^2=\lambda_1.
\end{aligned}
$$

**Section 5.7. Vibrations of a nonuniform string**

For linear mass density $\mechanical{\rho}(x)$ and constant tension $\mechanical{T}_0$, the problem on $0\le x\le L$, $t>0$ is

$$
\begin{cases}
\mechanical{\rho}(x)\mechanical{u}_{tt}=\mechanical{T}_0\mechanical{u}_{xx},\\
\mechanical{u}(0,t)=\mechanical{u}(L,t)=0,\\
\mechanical{u}(x,0)=\mechanical{f}(x),\\
\mechanical{u}_t(x,0)=\mechanical{g}(x).
\end{cases}
$$

Set $\mechanical{u}(x,t)=\phi(x)T(t)$. The separated problems are

$$
T''=-\lambda T,\qquad
\mechanical{T}_0\phi''+\lambda\mechanical{\rho}(x)\phi=0,
\qquad \phi(0)=\phi(L)=0.
$$

### PDF page 76

For the nonuniform string, $p(x)=\mechanical{T}_0$, $q(x)=0$, and $\sigma(x)=\mechanical{\rho}(x)$. The fixed endpoints make the boundary term zero, so

$$
\lambda=
\frac{\displaystyle\mechanical{T}_0\int_0^L(\phi')^2\,dx}
{\displaystyle\int_0^L\phi^2\mechanical{\rho}(x)\,dx}>0.
$$

The denominator is positive for a nonzero eigenfunction and positive density. The numerator is positive since a nonzero function vanishing at both endpoints cannot be constant. The lowest eigenvalue is

$$
\lambda_1=\min_u
\frac{\displaystyle\mechanical{T}_0\int_0^L(u')^2\,dx}
{\displaystyle\int_0^L u^2\mechanical{\rho}(x)\,dx}.
$$

Assume $0<\mechanical{\rho}_{\min}\le\mechanical{\rho}(x)\le\mechanical{\rho}_{\max}$ on $[0,L]$. Then

$$
\mechanical{\rho}_{\min}\int_0^L u^2\,dx
\le\int_0^L u^2\mechanical{\rho}(x)\,dx
\le\mechanical{\rho}_{\max}\int_0^L u^2\,dx.
$$

This gives the quotient bounds

$$
\frac{\mechanical{T}_0}{\mechanical{\rho}_{\max}}
\frac{\displaystyle\int_0^L(u')^2\,dx}{\displaystyle\int_0^L u^2\,dx}
\le
\frac{\displaystyle\mechanical{T}_0\int_0^L(u')^2\,dx}
{\displaystyle\int_0^L u^2\mechanical{\rho}(x)\,dx}
\le
\frac{\mechanical{T}_0}{\mechanical{\rho}_{\min}}
\frac{\displaystyle\int_0^L(u')^2\,dx}{\displaystyle\int_0^L u^2\,dx}.
$$

Take the minimum of each quotient over admissible $u$. For the unweighted quotient the minimum is $(\pi/L)^2$, the first eigenvalue of the Dirichlet problem on $[0,L]$.

### PDF page 77

The resulting bounds for the lowest eigenvalue of the nonuniform string are

$$
\boxed{\frac{\mechanical{T}_0}{\mechanical{\rho}_{\max}}
\left(\frac{\pi}{L}\right)^2
\le\lambda_1\le
\frac{\mechanical{T}_0}{\mechanical{\rho}_{\min}}
\left(\frac{\pi}{L}\right)^2.}
$$

**Sturm–Liouville review**

The general form on $x\in[a,b]$ is

$$
(p\phi')'+q\phi+\lambda\sigma\phi=0,
$$

where $\lambda$ is the eigenvalue. The simplest case is $\phi''+\lambda\phi=0$, with $p=1$, $q=0$, and $\sigma=1$.

For heat flow in a nonuniform rod,

$$
(\thermal{k}_0\phi')'+\alpha\phi+\lambda\thermal{c}\mechanical{\rho}\phi=0.
$$

In this case $p=\thermal{k}_0$, $q=\alpha$, and $\sigma=\thermal{c}\mechanical{\rho}$.

The separated boundary conditions have real coefficients $\beta_i$.

$$
\begin{aligned}
\beta_1\phi(a)+\beta_2\phi'(a)&=0,\\
\beta_3\phi(b)+\beta_4\phi'(b)&=0.
\end{aligned}
$$

The second condition repeats $\beta_3$ in the handwriting. The derivative coefficient is given as $\beta_4$ on pages 65 and 68.

For the regular problem, $p$, $q$, and $\sigma$ are real and continuous throughout $[a,b]$. Both $p$ and $\sigma$ are positive, including at the endpoints.

### PDF page 78

**Theorems for regular Sturm–Liouville problems with separated boundary conditions**

1. All eigenvalues $\lambda$ are real.
2. There are infinitely many eigenvalues, and there is no largest eigenvalue.
3. The eigenfunction $\phi_n(x)$ associated with the $n$th eigenvalue is unique up to multiplication by a nonzero constant. It has $n-1$ zeros in $a<x<b$.
4. The eigenfunctions form a complete set. A piecewise smooth function has the generalized Fourier expansion

   $$
   f(x)\sim\sum_{n=1}^{\infty}a_n\phi_n(x).
   $$

   With the coefficients chosen by weighted projection, the series converges to $\bigl[f(x^+)+f(x^-)\bigr]/2$ at each interior point $a<x<b$.

5. Eigenfunctions belonging to different eigenvalues are orthogonal with respect to the weight $\sigma(x)$.

   $$
   \int_a^b\phi_n(x)\phi_m(x)\sigma(x)\,dx=0
   \qquad\text{if }\lambda_n\ne\lambda_m.
   $$

6. An eigenvalue and its eigenfunction are related by the Rayleigh quotient.

   $$
   \lambda=\frac{\displaystyle-[p\phi\phi']_a^b
   +\int_a^b\bigl[p(\phi')^2-q\phi^2\bigr]\,dx}
   {\displaystyle\int_a^b\phi^2\sigma\,dx}.
   $$

The heading on the page says “for any” Sturm–Liouville problem. The separated regular problem specified on the preceding page is the setting for this list.

### PDF page 79

**Section 5.3.1 exercises. Exercise 4.4.2**

The notes start with a string subject to a load per unit length $\mechanical{Q}$ proportional to its displacement.

$$
\mechanical{\rho}_0(x)\mechanical{u}_{tt}
=\mechanical{T}_0\mechanical{u}_{xx}+\mechanical{Q},
\qquad
\mechanical{Q}=\alpha_{\mathrm{line}}(x)\mechanical{u}.
$$

Set $\mechanical{u}(x,t)=X(x)T(t)$ to obtain

$$
\mechanical{\rho}_0(x)X(x)T''(t)
=\mechanical{T}_0 X''(x)T(t)+\alpha_{\mathrm{line}}(x)X(x)T(t).
$$

Write $\alpha(x)=\alpha_{\mathrm{line}}(x)/\mechanical{\rho}_0(x)$ for the coefficient after division by the density. Then

$$
\frac{T''(t)}{T(t)}
=\frac{\mechanical{T}_0}{\mechanical{\rho}_0(x)}\frac{X''(x)}{X(x)}+\alpha(x)
=-\lambda.
$$

The temporal equation is $T''=-\lambda T$. Multiplying the spatial equation by $\mechanical{\rho}_0(x)X(x)$ gives

$$
\mechanical{T}_0 X''(x)+\mechanical{\rho}_0(x)\alpha(x)X(x)
+\lambda\mechanical{\rho}_0(x)X(x)=0.
$$

This is a Sturm–Liouville equation with $p=\mechanical{T}_0$, $q=\mechanical{\rho}_0(x)\alpha(x)$, and $\sigma=\mechanical{\rho}_0(x)$. The handwriting uses $\alpha$ both before and after division by the density. The subscript $\mathrm{line}$ distinguishes the first use and retains the stated final coefficient $q$.

### PDF page 80

**April 21, 2017 discussion. Exercise 5.7.1**

Find upper and lower bounds for the lowest natural angular frequency of a nonuniform string fixed at $x=0$ and $x=1$, with

$$
\mechanical{c}^{\,2}(x)=1+4x^2\left(x-\tfrac12\right)^2.
$$

The fixed-end wave equation is $\mechanical{u}_{tt}=\mechanical{c}^{\,2}\mechanical{u}_{xx}$. For the nonuniform string it is written as $\mechanical{\rho}(x)\mechanical{u}_{tt}=\mechanical{T}_0\mechanical{u}_{xx}$. Set $\mechanical{u}=h(t)\phi(x)$ to obtain

$$
h''(t)=-\lambda h(t),\qquad
\mechanical{T}_0\phi''(x)=-\lambda\mechanical{\rho}(x)\phi(x).
$$

For a positive eigenvalue $\lambda_n$, the time solution is

$$
h(t)=C_1\cos(\sqrt{\lambda_n}\,t)+C_2\sin(\sqrt{\lambda_n}\,t).
$$

The lowest angular frequency is $\sqrt{\lambda_1}$. Taking square roots of the bounds from the preceding example gives

$$
\frac{\pi}{L}\sqrt{\frac{\mechanical{T}_0}{\mechanical{\rho}_{\max}}}
\le\sqrt{\lambda_1}\le
\frac{\pi}{L}\sqrt{\frac{\mechanical{T}_0}{\mechanical{\rho}_{\min}}}.
$$

The notes use $\mechanical{\rho}(x)=1/\mechanical{c}^{\,2}(x)$, corresponding to $\mechanical{T}_0=1$ in the normalized equation.

Recall the regular Sturm–Liouville problem

$$
(p\phi')'+(\lambda\sigma+q)\phi=0,\qquad
\beta_1\phi(a)+\beta_2\phi'(a)=0,\qquad
\beta_3\phi(b)+\beta_4\phi'(b)=0.
$$

The derivative coefficient at $b$ is transcribed as $\beta_4$ using the same convention as pages 65 and 68. Multiply the differential equation by $\phi$ and integrate to derive

$$
\lambda=
\frac{\displaystyle-[p\phi\phi']_a^b
+\int_a^b\bigl[p(\phi')^2-q\phi^2\bigr]\,dx}
{\displaystyle\int_a^b\sigma\phi^2\,dx}.
$$

Minimizing the quotient gives a way to bound the lowest eigenvalue.

### PDF page 81

The first eigenvalue is the minimum of the Rayleigh quotient over nonzero admissible functions $u$ that satisfy the same boundary conditions as $\phi$.

$$
\lambda_1=\min_u
\frac{\displaystyle-[puu']_a^b+\int_a^b\bigl[p(u')^2-qu^2\bigr]\,dx}
{\displaystyle\int_a^b\sigma u^2\,dx}.
$$

Any such trial function $u_T$ gives

$$
\lambda_1\le
\frac{\displaystyle-[pu_Tu_T']_a^b+\int_a^b\bigl[p(u_T')^2-qu_T^2\bigr]\,dx}
{\displaystyle\int_a^b\sigma u_T^2\,dx}.
$$

The notes describe the trial functions as continuous. The derivatives and integrals in the quotient must also be defined.

**Example with mixed boundary conditions**

$$
\phi''+(\lambda-1)\phi=0,\qquad
\phi(0)=0,\qquad \phi'(1)=0.
$$

The Sturm–Liouville coefficients are $p=1$, $q=-1$, and $\sigma=1$.

### PDF page 82

The notes mark April 20, 2017 as a missed lecture. The upcoming agenda is

| Date | Topic |
| --- | --- |
| April 25 | Vibrating circular membrane and Bessel functions, Section 7.7, and Homework 13 |
| April 27 | Laplace's equation in a cylinder, Section 7.9 |
| May 2 | Green's functions, Section 8.4 |
| May 4 | Review and questions |

**Chapter 7. Higher-dimensional PDEs, p. 268**

**Section 7.1. Gradient and Laplacian**

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

**Example 1. Heat equation with constant thermal properties**

The equation is $\thermal{u}_t=\thermal{k}\nabla^2\thermal{u}$ in each dimension. In Cartesian coordinates this gives

$$
\begin{aligned}
\text{1D:}\qquad \thermal{u}_t&=\thermal{k}\thermal{u}_{xx},\\
\text{2D:}\qquad \thermal{u}_t&=\thermal{k}(\thermal{u}_{xx}+\thermal{u}_{yy}),\\
\text{3D:}\qquad \thermal{u}_t&=\thermal{k}(\thermal{u}_{xx}+\thermal{u}_{yy}+\thermal{u}_{zz}).
\end{aligned}
$$

### PDF page 83

**Example 2. Steady-state heat equation**

At steady state $\partial\thermal{u}/\partial t=0$. With constant thermal properties and no source, the three-dimensional heat equation reduces to Laplace's equation.

$$
\nabla^2\thermal{u}
=\thermal{u}_{xx}+\thermal{u}_{yy}+\thermal{u}_{zz}=0.
$$

The notes also give the general Poisson equation in the convention $-\nabla^2u=f(x,y,z)$.

**Example 3. Wave equation**

The two-dimensional wave equation models the transverse motion of a membrane.

$$
\frac{\partial^2\mechanical{u}}{\partial t^2}
=\mechanical{c}^{\,2}\left(
\frac{\partial^2\mechanical{u}}{\partial x^2}+
\frac{\partial^2\mechanical{u}}{\partial y^2}\right).
$$

**Section 7.3. Vibrating rectangular membrane**

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

### PDF page 84

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

### PDF page 85

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

### PDF page 86

**April 25, 2017 lecture. Vibrating rectangular membrane continued**

The notes recall the double sine expansion with time factors $\cos(\mechanical{c}\sqrt{\lambda_{nm}}\,t)$ and $\sin(\mechanical{c}\sqrt{\lambda_{nm}}\,t)$. This page writes the coefficients as $A_{nm}$ and $B_{nm}$, with the $x$ index first. They are the same coefficients written $A_{mn}$ and $B_{mn}$ on page 85.

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

### PDF page 87

**Coefficients from the initial membrane velocity**

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

### PDF page 88

**Section 7.7. Vibrating circular membrane and Bessel functions**

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

### PDF page 89

**Separation of variables for the circular membrane**

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

with boundedness at $r=0$ and periodicity in $\theta$ as on page 88. Set $\phi(r,\theta)=f(r)g(\theta)$. This gives

$$
\frac{g}{r}(rf')'+\frac{f}{r^2}g''=-\lambda fg.
$$

Divide by $fg$ and multiply by $r^2$.

$$
\frac{r}{f}(rf')'+\frac{g''}{g}+\lambda r^2=0,\qquad
\frac{r}{f}(rf')'+\lambda r^2=-\frac{g''}{g}=\mu.
$$

The angular equation is therefore $g''=-\mu g$. The radial derivatives are ordinary derivatives because $f$ depends only on $r$.

### PDF page 90

**Angular and radial eigenvalue problems**

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

**April 27, 2017 lecture. Section 7.7.4. Bessel's differential equation**

Expand the radial derivative to get

$$
r^2f''+rf'+(\lambda r^2-m^2)f=0.
$$

The next step is the change of variable $z=\sqrt{\lambda}\,r$.

### PDF page 91

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

**Section 7.7.6. Bessel functions and their asymptotic properties**

The notes repeat the Bessel equation as Eq. (1) and introduce the behavior of its solutions near $z=0$ and as $z\to\infty$.

### PDF page 92

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

**Section 7.7.7. Eigenvalue problem involving Bessel functions**

Recall $f(a)=0$ and $\lvert f(0)\rvert<\infty$. Returning to $z=\sqrt{\lambda}\,r$ gives

$$
f(r)=C_1J_m(\sqrt{\lambda}\,r)+C_2Y_m(\sqrt{\lambda}\,r).
$$

Boundedness at the origin requires $C_2=0$.

### PDF page 93

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

### PDF page 94

**April 28, 2017 discussion. Vibrating circular membrane and Bessel functions**

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

**Exercise 7.7.3. Quarter membrane**

![[Kyle Kabasares - Partial Differential Equations - Quarter membrane with fixed radial edges.png|**Fig. 37** A quarter disk bounded by the rim $r=a$ and radial edges at $\theta=0$ and $\theta=\pi/2$.]]

For fixed radial edges the angular boundary conditions are $g(0)=0$ and $g(\pi/2)=0$.

### PDF page 95

From $x=r\cos\theta$ and $y=r\sin\theta$ we have $r^2=x^2+y^2$. Differentiate at fixed $y$ and use the chain rule.

$$
\frac{\partial}{\partial x}(r^2)
=\frac{d}{dr}(r^2)\frac{\partial r}{\partial x}
=2r\frac{\partial r}{\partial x}
=2x=2r\cos\theta.
$$

For $r>0$ this gives $\partial r/\partial x=\cos\theta$.

**May 2, 2017 lecture. Circular membrane review**

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

### PDF page 96

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

### PDF page 97

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

### PDF page 98

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

Using the radial expansion from page 97 gives

$$
\sum_{n=1}^{\infty}B_{mn}J_m(\sqrt{\lambda_{mn}}\,r)
=\frac{1}{\pi}\int_{-\pi}^{\pi}\mechanical{\alpha}(r,\theta)\sin(m\theta)\,d\theta.
$$

The last handwritten line shows a single radial term. Angular projection fixes $m$ and leaves the sum over $n$.

**Final exam study. Vibrating rectangular membrane**

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

### PDF page 99

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

### PDF page 100

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

### PDF page 101

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

### PDF page 102

Project $g_m(x)$ onto the $n$th sine on $[0,L]$.

$$
\int_0^L\left[\frac{2}{H}\int_0^H
\mechanical{\alpha}(x,y)\sin\left(\frac{m\pi y}{H}\right)\,dy\right]
\sin\left(\frac{n\pi x}{L}\right)\,dx=\frac{L}{2}A_{nm}.
$$

Multiplying by $2/L$ gives the coefficient $A_{nm}$. Apply the same projection to the initial velocity to find $B_{nm}$, with the time derivative factor as on page 87.

**Final exam study. Vibrating circular membrane**

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

### PDF page 103

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

### PDF page 104

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

### PDF page 105

**Reduction to Bessel's equation**

Starting from the Sturm–Liouville form, expand the radial derivative and multiply by $r$.

$$
\begin{aligned}
(rf')'+\left(\lambda r-\frac{m^2}{r}\right)f&=0,\\
f'+rf''+\left(\lambda r-\frac{m^2}{r}\right)f&=0,\\
r^2 f''+r f'+(\lambda r^2-m^2)f&=0.
\end{aligned}
$$

Use $z=\sqrt{\lambda}\,r$, $r(z)=z/\sqrt{\lambda}$, and $dr/dz=1/\sqrt{\lambda}$. With $F(z)=f(r(z))$ as on page 91,

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

### PDF page 106

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

**Eigenvalue problem with Bessel functions**

Start with

$$
(rf')'+\left(\lambda r-\frac{m^2}{r}\right)f=0,\qquad
f(a)=0,\qquad \lvert f(0)\rvert<\infty.
$$

The change of variable $z=\sqrt{\lambda}\,r$ gives $z^2F''+zF'+(z^2-m^2)F=0$, with the first- and second-kind solution above.

### PDF page 107

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

### PDF page 108

**Fourier–Bessel coefficients**

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

**Section 7.7.8. Initial-value problem for a vibrating circular membrane**

The separated solution has the form $\mechanical{u}(r,\theta,t)=f(r)g(\theta)h(t)$. Its product modes combine one factor from each of the following groups.

$$
J_m(\sqrt{\lambda_{mn}}\,r),\qquad
\{\cos(m\theta),\sin(m\theta)\},\qquad
\{\cos(\mechanical{c}\sqrt{\lambda_{mn}}\,t),
\ \sin(\mechanical{c}\sqrt{\lambda_{mn}}\,t)\}.
$$

For a membrane initially at rest, $\mechanical{u}_t(r,\theta,0)=\mechanical{\beta}(r,\theta)=0$. The cosine time factors have zero initial derivative, as in the solution on page 96.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{u}$ | $\unit{Pa}$ | Pressure | Unknown pressure in the divergence-form example. |
| $\thermal{u}$ | $\unit{K}$ | Temperature | Temperature in the rod as a function of position and time. |
| $\thermal{c}$ | $\unit{J/(kg\,K)}$ | Specific heat capacity | Thermal energy per unit mass per unit temperature rise. |
| $\mechanical{\rho}$ | $\unit{kg/m^3}$ | Mass density | Mass per unit volume of the rod. |
| $\thermal{k}_0$ | $\unit{W/(m\,K)}$ | Thermal conductivity | Material coefficient in Fourier's law. |
| $\thermal{k}$ | $\unit{m^2/s}$ | Thermal diffusivity | Ratio of conductivity to volumetric heat capacity. |
| $\thermal{Q}$ | $\unit{W/m^3}$ | Volumetric heat source | Thermal energy supplied per unit time and volume. |
| $\thermal{Q}'$ | $\unit{K/s}$ | Temperature source | Volumetric heat source divided by volumetric heat capacity. |
| $\energy{e}$ | $\unit{J/m^3}$ | Thermal energy density | Thermal energy per unit volume of the rod. |
| $\mechanical{A}$ | $\unit{m^2}$ | Cross-sectional area | Area of a face perpendicular to the rod axis. |
| $\thermal{\phi}$ | $\unit{W/m^2}$ | Heat flux | Rate of heat flow in the positive axial direction per unit area. |
| $\thermal{H}$ | $\unit{W/(m^2\,K)}$ | Heat transfer coefficient | Proportionality coefficient in Newton's law of cooling. |
| $\thermal{u}_B$ | $\unit{K}$ | Surrounding temperature | Temperature of the environment in the Robin condition. |
| $\thermal{\psi}$ | $\unit{K}$ | Initial temperature | Prescribed temperature profile at the initial time. |
| $\thermal{\phi}(x)$ | $\unit{K}$ | Initial temperature | Initial profile in the separation-of-variables chapter. |
| $\thermal{T}_1,\thermal{T}_2$ | $\unit{K}$ | Boundary temperatures | Temperatures prescribed at the left and right endpoints of the rod. |
| $\thermal{f}(x)$ | $\unit{K}$ | Initial temperature | Prescribed temperature distribution in the discussion example. |
| $\thermal{\alpha},\thermal{\beta}$ | $\unit{K}$ | Endpoint temperatures | Constant temperatures at the left and right ends of the rod in the discussion example. |
| $\mechanical{v}_0$ | $\unit{m/s}$ | Advection velocity | Constant coefficient of transport in the advection–diffusion example. |
| $\thermal{A},\thermal{B}$ | $\unit{K}$ | Fixed boundary temperatures | Prescribed endpoint values in the nonhomogeneous Dirichlet problem. |
| $\thermal{u}_E$ | $\unit{K}$ | Equilibrium temperature | Time-independent temperature profile with the prescribed boundary values. |
| $\thermal{v}$ | $\unit{K}$ | Temperature difference | Temperature relative to the equilibrium profile. |
| $\thermal{r}$ | $\unit{K}$ | Boundary interpolation | Temperature profile that interpolates between the time-dependent endpoint values. |
| $\thermal{\bar Q}$ | $\unit{K/s}$ | Effective temperature source | Normalized heat source minus the time derivative of the boundary interpolation. |
| $\mechanical{u}(x,t)$ | $\unit{m}$ | Wave displacement | Scalar displacement at position $x$ and time $t$ in the one-dimensional wave model. |
| $\mechanical{c}$, $\mechanical{v}$ | $\unit{m\,s^{-1}}$ | Wave speed | Constant propagation speed in the scalar or vector wave equation. |
| $\mechanical{\rho}_0(x)$ | $\unit{kg\,m^{-1}}$ | Linear mass density | Mass per unit length of the string near $x$. |
| $\mechanical{T}(x,t)$, $\mechanical{T}_0$ | $\unit{N}$ | String tension | Tangential force and its constant value in the idealized model. |
| $\mechanical{\theta}(x,t)$ | $\unit{rad}$ | Tangent angle | Angle between the tangent to the string and the horizontal. |
| $\mechanical{Q}(x,t)$ | $\unit{m\,s^{-2}}$ | Vertical body force per unit mass | Applied vertical acceleration, such as $-\mechanical{g}$ for gravity. |
| $\thermal{q}(x,t)$ | $\unit{K\,s^{-1}}$ | Temperature source rate | Local heating or cooling rate in the nonhomogeneous heat equation. |
| $\mechanical{f}(x)$ | $\unit{m}$ | Initial string displacement | Transverse displacement at $t=0$. |
| $\mechanical{g}(x)$ | $\unit{m\,s^{-1}}$ | Initial string velocity | Transverse velocity at $t=0$. |
| $\mechanical{A}_n^{\mathrm{amp}}$ | $\unit{m}$ | Normal-mode amplitude | Peak magnitude of the oscillatory time factor for mode $n$. |
| $\mechanical{\omega}_n$ | $\unit{rad\,s^{-1}}$ | Normal-mode angular frequency | Angular frequency of the time factor for mode $n$. |
| $\mechanical{\theta}_n$ | $\unit{rad}$ | Normal-mode phase | Phase offset determined by the two time coefficients. |
| $\mechanical{\beta}$ | $\unit{s^{-1}}$ | Velocity damping coefficient | Coefficient of the transverse velocity in the damped wave equation. |
| $\mechanical{\rho}(x)$, $\mechanical{\rho}_{\min}$, $\mechanical{\rho}_{\max}$ | $\unit{kg\,m^{-1}}$ | Nonuniform string density and its bounds | Mass per unit length and the lower and upper bounds used in the Rayleigh quotient. |
| $\mechanical{Q}$ in Exercise 4.4.2 | $\unit{N\,m^{-1}}$ | Load per unit length | Displacement-proportional load added directly to the string equation on page 79. |
| $L$, $H$ | $\unit{m}$ | Rectangular membrane dimensions | Length in the $x$ direction and height in the $y$ direction. |
| $\mechanical{\alpha}(x,y)$ | $\unit{m}$ | Initial membrane displacement | Transverse displacement of the membrane at $t=0$. |
| $\mechanical{\beta}(x,y)$ | $\unit{m\,s^{-1}}$ | Initial membrane velocity | Transverse velocity of the membrane at $t=0$. |
| $r$, $a$ | $\unit{m}$ | Radial distance and membrane radius | Distance from the center and its value at the fixed rim. |
