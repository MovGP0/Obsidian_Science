---
title: "Heat equation, boundary data, and separation"
---

> [!TLDR]
> Derive one-dimensional heat conduction from an energy balance, specify boundary data, and separate the fixed-temperature rod into modes.

## Worked lecture material

##### Math 126

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

##### Introduction to partial differential equations

A partial differential equation involves an unknown function of several independent variables and its partial derivatives. For example,

$$
\frac{\partial u}{\partial t}(x,t)+a\frac{\partial u}{\partial x}(x,t)=f(x,t),
$$

where $u$ depends on the spatial variable $x$ and time $t$, and $a$ is a known coefficient.

##### Classifying differential equations

- **Number of independent variables.** One gives an ordinary differential equation. Two or more give a partial differential equation.
- **Order.** The highest derivative determines the order. The examples below are first, second, and third order, respectively.
- **Linearity.** A linear equation has $u$ and its derivatives only to the first power, with coefficients that can depend on the independent variables.

$$
u_x+u_t=0,\qquad
u_{xx}+u_t=0,\qquad
\mu u_{xx}+4u_{xxt}+u=0.
$$

The mixed derivative $u_{xxt}$ denotes $\partial^3u/(\partial t\,\partial x^2)$.

##### Three standard examples

$$
\begin{aligned}
u_{xx}+u_{yy}&=f &&\text{(Poisson equation)},\\
u_t-ku_{xx}&=f &&\text{(heat equation)},\\
u_{tt}-ku_{xx}&=f &&\text{(wave equation)}.
\end{aligned}
$$

##### )

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

##### Classification examples

1. **Heat equation.** For $u_t-u_{xx}=0$, the coefficients in the preceding $(t,x)$ ordering are $d=1$, $c=-1$, and $a=b=0$. The discriminant vanishes, so the equation is parabolic.
2. **Wave equation.** For $u_{tt}-u_{xx}=0$, $a=1$, $b=0$, and $c=-1$. Thus $4ac-b^2=-4$, so the equation is hyperbolic.
3. **Mixed derivative example.** For $u_{xx}+4u_{xy}+3u_{yy}+3u_x-u_y+2u=0$, the coefficients in $(x,y)$ order are $a=1$, $b=4$, $c=3$, $d=3$, $e=-1$, $f=2$, and $g=0$. Since $b^2-4ac=16-12=4$, the equation is hyperbolic.
4. **Laplace's equation.** For $u_{xx}+u_{yy}=0$, $a=c=1$ and $b=0$. The equation is elliptic.

##### The heat equation

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

**)**

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

**)**

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

On this page $\thermal{k}$ denotes the material's thermal conductivity, written $\thermal{k}_0$ on [[#The heat equation|the section on The heat equation]]. The negative sign makes the flux point in the direction of decreasing temperature.

If $\thermal{\phi}(x,t)<0$, heat flows to the left. Substituting Fourier's law into conservation of thermal energy gives

$$
\frac{\partial\energy{e}}{\partial t}
=-\frac{\partial\thermal{\phi}}{\partial x}+\thermal{Q}(x,t)
=\frac{\partial}{\partial x}
\left(\thermal{k}_0\frac{\partial\thermal{u}}{\partial x}\right)+\thermal{Q}(x,t).
$$

Here the conductivity is written $\thermal{k}_0$ as on [[#The heat equation|the section on The heat equation]]. In a short segment, the thermal energy is $\energy{e}(x,t)\mechanical{A}\Delta x\approx\thermal{c}(x)\thermal{u}(x,t)\mechanical{\rho}(x)\mechanical{A}\Delta x$, with energy measured relative to the temperature reference. Therefore $\energy{e}=\thermal{c}(x)\mechanical{\rho}(x)\thermal{u}(x,t)$. The heat equation for the temperature in the rod is

$$
\thermal{c}(x)\mechanical{\rho}(x)\frac{\partial\thermal{u}}{\partial t}
=\frac{\partial}{\partial x}
\left(\thermal{k}_0\frac{\partial\thermal{u}}{\partial x}\right)+\thermal{Q}(x,t),
\qquad 0<x<L,\quad t>0.
$$

##### Boundary and initial conditions

For perfectly insulated ends, the heat flux across each end vanishes. These are homogeneous Neumann conditions.

$$
-\thermal{k}_0(0)\frac{\partial\thermal{u}}{\partial x}(0,t)
=-\thermal{k}_0(L)\frac{\partial\thermal{u}}{\partial x}(L,t)=0,
\qquad t>0.
$$

For ends held at the reference temperature, the notes prescribe $\thermal{u}(0,t)=\thermal{u}(L,t)=0$ for $t>0$. These are homogeneous Dirichlet conditions.

##### Newton's law of cooling and the initial condition

The notes refer to [[#The spatial eigenvalue problem|the section on The spatial eigenvalue problem]] for Newton's law of cooling. At the left endpoint the Robin condition is

$$
-\thermal{k}_0(0)\frac{\partial\thermal{u}}{\partial x}(0,t)
+\thermal{H}\thermal{u}(0,t)=\thermal{H}\thermal{u}_B(t),
\qquad t>0.
$$

Here $\thermal{u}_B(t)$ is the surrounding temperature and $\thermal{H}$ is the heat transfer coefficient. The initial condition prescribes $\thermal{u}(x,t_0)=\thermal{\psi}(x)$ for $0<x<L$. Combining the heat equation with this profile and the homogeneous Dirichlet conditions $\thermal{u}(0,t)=\thermal{u}(L,t)=0$ gives an initial–boundary value problem.

##### Steady-state heat equation

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

**)**

Set $\partial\thermal{u}/\partial t=0$ in the constant-coefficient heat equation $\partial\thermal{u}/\partial t=\thermal{k}\partial^2\thermal{u}/\partial x^2+\thermal{Q}(x)/(\thermal{c}\mechanical{\rho})$. Setting the coefficients to one for simplicity gives $-\thermal{u}''=\thermal{Q}(x)$ under the source convention on [[#Newton's law of cooling and the initial condition|the section on Newton's law of cooling and the initial condition]]. The abbreviated equation in the handwriting drops the minus sign.

##### Separation of variables

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

The heat equation is homogeneous if $f(x,t)=0$. Its Dirichlet conditions are homogeneous if $\thermal{T}_1(t)=\thermal{T}_2(t)=0$ for all $t$. The separation-of-variables procedure here starts with a linear homogeneous PDE and homogeneous boundary conditions.

##### Checking linearity

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

##### Principle of superposition

If $u_1$ and $u_2$ solve a linear homogeneous equation $L(u)=0$, then any linear combination $c_1u_1+c_2u_2$ also solves it. Indeed,

$$
L(c_1u_1+c_2u_2)=c_1L(u_1)+c_2L(u_2)=0.
$$

##### Separation of variables for the heat equation

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

##### The spatial eigenvalue problem

Find the values of $\lambda$ for which $X''=-\lambda X$ with $X(0)=X(L)=0$ has a nontrivial solution.

Substituting $X(x)=e^{rx}$ into $X''=-\lambda X$ gives the characteristic equation $r^2=-\lambda$. The notes distinguish four cases.

- If $\lambda>0$, the roots are $\pm i\sqrt{\lambda}$. Euler's formula gives $e^{\pm i\sqrt{\lambda}x}=\cos(\sqrt{\lambda}x)\pm i\sin(\sqrt{\lambda}x)$, so the real general solution is $X(x)=c_1\cos(\sqrt{\lambda}x)+c_2\sin(\sqrt{\lambda}x)$.
- If $\lambda=0$, zero is a double root.
- If $\lambda<0$, write $s=-\lambda>0$. The roots are $r=\pm\sqrt{s}$.
- The notes set aside complex $\lambda$ and say that the eigenvalues will be shown to be real.

**)**

For the equation $u'(x)+u(x)=f(x)$, find the general solution $y_h$ of the homogeneous equation $u'+u=0$ and one particular solution $y_p$ of the forced equation. Their sum solves the forced equation. The notes also start an example with a linear PDE of the form $Au_{xx}+Bu_{xy}+\cdots+Fu=G$.

##### Steady-state temperatures

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

##### Zero and negative separation constants

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

**)**

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

The finite sum solves the initial–boundary value problem when $\thermal{f}(x)=\sum_{n=1}^M B_n\sin(n\pi x/L)$. For a general profile, the notes propose approximating $\thermal{f}$ by such finite sums and increasing $M$. Fourier theory gives convergence under appropriate conditions on $\thermal{f}$.

##### Orthogonality of the sine functions

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

Orthogonality leaves only the term with $n=m$, which contributes $B_m L/2$. Thus the Fourier sine coefficients and the corresponding heat solution are

$$
B_m=\frac2L\int_0^L\thermal{f}(x)\sin\left(\frac{m\pi x}{L}\right)\,dx,
\qquad m=1,2,3,\ldots,
$$

$$
\thermal{u}(x,t)=\sum_{n=1}^\infty B_n
e^{-\thermal{k}(n\pi/L)^2t}\sin\left(\frac{n\pi x}{L}\right).
$$

##### Example with a uniform initial temperature

The notes cite page 48 for the example. Solve $\partial_t\thermal{u}=\thermal{k}\partial_x^2\thermal{u}$ with $\thermal{u}(0,t)=\thermal{u}(L,t)=0$ for $t>0$ and $\thermal{u}(x,0)=100$ in the interior $0<x<L$. The initial temperature and the boundary values meet with a jump at each endpoint. The sine coefficients are

$$
\begin{aligned}
B_n&=\frac{200}{L}\int_0^L\sin\left(\frac{n\pi x}{L}\right)\,dx\\
&=-\frac{200}{n\pi}\left[\cos\left(\frac{n\pi x}{L}\right)\right]_0^L
=\frac{200}{n\pi}\bigl(1-(-1)^n\bigr).
\end{aligned}
$$

Here $\cos(n\pi)=1$ for even $n$ and $-1$ for odd $n$.

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

##### Separation of variables procedure

1. Check that the PDE and boundary conditions are linear and homogeneous.
2. Set the initial conditions aside temporarily.
3. Write $\thermal{u}(x,t)=X(x)T(t)$ and introduce a separation constant.
4. Solve the resulting differential equations.
5. Use superposition to form a linear combination of the product solutions.

6. Apply the initial conditions.
7. Use the orthogonality of the eigenfunctions $\sin(n\pi x/L)$ to determine the coefficients $B_n$.

**)**

Exercise 2.3.1 asks for the ordinary differential equations implied by separation of variables.

##### B

For $u_t=ku_{xx}-\mechanical{v}_0u_x$, write $u(x,t)=X(x)T(t)$. Differentiating gives

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

##### D

The radial equation is $u_t=(k/r^2)\partial_r(r^2u_r)$. Write $u(r,t)=R(r)T(t)$. Substitution and the product rule give

$$
R(r)T'(t)=\frac{k}{r^2}T(t)\frac{d}{dr}(r^2R'(r))
=\frac{kT(t)}{r^2}\bigl(2rR'(r)+r^2R''(r)\bigr).
$$

For the radial equation, dividing by $RT$ and introducing the separation constant gives

$$
\frac{T'}{T}=\frac{k}{Rr^2}(2rR'+r^2R'')=-\lambda.
$$

The resulting equations are $T'=-\lambda T$ and $kR''+(2k/r)R'=-\lambda R$.

**Exercise 2.3.3**

For $\partial_t\thermal{u}=\thermal{k}\partial_x^2\thermal{u}$, write $\thermal{u}(x,t)=X(x)T(t)$. Then $XT'=\thermal{k}TX''$ and $T'/(\thermal{k}T)=X''/X=-\lambda$. The time solution is $T(t)=c_1e^{-\lambda\thermal{k}t}$, and the spatial equation is $X''=-\lambda X$. Its characteristic equation is $r^2=-\lambda$.

When $\lambda=0$, $X(x)=k_1x+k_2$. The conditions $X(0)=X(L)=0$ give $k_2=0$ and $k_1L=0$, hence $X\equiv0$.

When $\lambda>0$, the roots are $\pm i\sqrt{\lambda}$. The exponential solutions $e^{\pm i\sqrt{\lambda}x}$ give a real basis, so $X(x)=k_1\cos(\sqrt{\lambda}x)+k_2\sin(\sqrt{\lambda}x)$.

## Source

Kyle Kabasares, *Partial Differential Equations (Math 126, UC Merced 2017)*.

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
| $\thermal{f}(x)$ | $\unit{K}$ | Initial temperature | Prescribed temperature distribution in the discussion example. |
| $\mechanical{v}_0$ | $\unit{m/s}$ | Advection velocity | Constant coefficient of transport in the advection–diffusion example. |
| $\mechanical{c}$, $\mechanical{v}$ | $\unit{m\,s^{-1}}$ | Wave speed | Constant propagation speed in the scalar or vector wave equation. |
| $\mechanical{\rho}(x)$, $\mechanical{\rho}_{\min}$, $\mechanical{\rho}_{\max}$ | $\unit{kg\,m^{-1}}$ | Nonuniform string density and its bounds | Mass per unit length and the lower and upper bounds used in the Rayleigh quotient. |
| $L$, $H$ | $\unit{m}$ | Rectangular membrane dimensions | Length in the $x$ direction and height in the $y$ direction. |
| $r$, $a$ | $\unit{m}$ | Radial distance and membrane radius | Distance from the center and its value at the fixed rim. |
| $\thermal{T}_1,\thermal{T}_2$ | $\unit{K}$ | Boundary temperatures | Temperatures prescribed at the left and right endpoints of the rod. |
| $\thermal{\alpha},\thermal{\beta}$ | $\unit{K}$ | Endpoint temperatures | Constant temperatures at the left and right ends of the rod in the discussion example. |
