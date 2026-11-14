---
title: "Classification and heat-equation examples"
---

> [!TLDR]
> Classify second-order PDEs and use conservation, separation of variables, and projection of initial data to solve heat problems.

## Worked lecture material

##### Changing the forcing at one point

Consider $y''+4y=f(t)$ with

$$
f(t)=\begin{cases}
1,&0<t<1,\\
-1,&t=1,\\
1,&t>1.
\end{cases}
$$

![[Kyle Kabasares - Intermediate Ordinary Differential Equations - Forcing with one exceptional value.png|**Fig. 8** The forcing is one except for the value $-1$ at $t=1$.]]

For $s>0$, a change at the single point $t=1$ does not affect the integral:

$$
\mathcal L\{f\}(s)=\int_0^1 e^{-st}\,dt+\int_1^\infty e^{-st}\,dt=\frac1s.
$$

The notes use this to explain why the inverse transform determines the function only up to values at isolated points in this example. Both the constant $1$ and the piecewise $f$ give $1/s$.

The calculation takes $y(0)=y'(0)=0$, as shown by the disappearance of the initial terms. Then

$$
(s^2+4)Y(s)=\frac1s,\qquad
Y(s)=\frac1{s(s^2+4)}=\frac1{4s}-\frac{s}{4(s^2+4)}.
$$

The inverse is $y(t)=\frac14-\frac14\cos(2t)$. It satisfies the equation on each open interval on either side of $t=1$. The Laplace calculation treats the forcing up to its value at the exceptional point.

##### Introduction to PDEs

An ordinary differential equation such as $y''(t)+2y(t)=e^t$ uses a function of one independent variable. A partial differential equation uses a function of several independent variables. For example, the one-dimensional heat equation for the temperature $\thermal{y}(\mechanical{x},\signal{t})$ is

$$
\frac{\partial\thermal{y}}{\partial\signal{t}}
=\thermal{k}\frac{\partial^2\thermal{y}}{\partial\mechanical{x}^2}.
$$

##### Partial differential equations and notation

A PDE is a relation involving partial derivatives of an unknown function $u$. In applications, $u$ can depend on spatial variables $x,y,z$ and a time variable $t$. The derivative notation on this page is

$$
\begin{aligned}
u_x&=\frac{\partial u}{\partial x},\\
u_{xx}&=\frac{\partial}{\partial x}\left(\frac{\partial u}{\partial x}\right)
=\frac{\partial^2u}{\partial x^2},\\
u_{xt}&=\frac{\partial}{\partial t}\left(\frac{\partial u}{\partial x}\right)
=\frac{\partial^2u}{\partial t\,\partial x}.
\end{aligned}
$$

The mixed partials $u_{xy}=\partial_y(\partial_xu)$ and $u_{yx}=\partial_x(\partial_yu)$ can differ without a regularity hypothesis. They agree if $u$ has continuous second partial derivatives in a neighborhood.

##### Linear second-order equations in two variables

For $u=u(x,y)$, the general form given is

$$
A u_{xx}+B u_{xy}+C u_{yy}+D u_x+E u_y+F u=G. \tag{I}
$$

The coefficients and forcing can be constant or depend on the independent variables $x,y$. The note in the margin is read as ruling out dependence on the unknown $u$, since $y$ itself is an independent variable here.

##### Classification of linear second-order PDEs

Laplace's equation is $u_{xx}+u_{yy}=0$. Its coefficients in (I) are $A=C=1$ and $B=D=E=F=G=0$. The first subscript in the handwritten equation looks like $xy$, but the stated coefficients and the name of the equation give $xx$. A second example is $u_{xx}+4u_{xy}+4u_{yy}+u=1$.

Where the second-order part is nonzero, use the discriminant $B^2-4AC$:

| Sign | Type |
| --- | --- |
| $B^2-4AC>0$ | Hyperbolic |
| $B^2-4AC=0$ | Parabolic |
| $B^2-4AC<0$ | Elliptic |

The names parallel the classification of nondegenerate conics $ax^2+bxy+cy^2+dx+ey+f=0$. With the mixed coefficient written as $b$, the determinant of the quadratic part is $ac-b^2/4$. The notes use $ac-b^2$, which corresponds to a mixed term written as $2bxy$. In both examples below the mixed coefficient is zero.

For the hyperbola $x^2-y^2=1$, $a=1$, $b=0$, $c=-1$, so the determinant is negative.

![[Kyle Kabasares - Intermediate Ordinary Differential Equations - Hyperbola.png|**Fig. 9** The two branches of $x^2-y^2=1$ meet the horizontal axis at $x=-1$ and $x=1$.]]

For the ellipse $x^2/4+y^2=1$, the determinant is $(1/4)\cdot1=1/4>0$.

![[Kyle Kabasares - Intermediate Ordinary Differential Equations - Ellipse.png|**Fig. 10** The ellipse has horizontal semiaxis $2$ and vertical semiaxis $1$.]]

##### The wave equation and separation of variables

The wave equation is

$$
\frac{\partial^2\mechanical{u}}{\partial\signal{t}^2}
=\mechanical{c}^2\frac{\partial^2\mechanical{u}}{\partial\mechanical{x}^2},
\qquad \mechanical{u}=\mechanical{u}(\mechanical{x},\signal{t}).
$$

Writing the second-order part with coefficients $A=\mechanical{c}^2$, $B=0$, and $C=-1$ gives $B^2-4AC=4\mechanical{c}^2>0$ for nonzero wave speed. The wave equation is hyperbolic. The heat equation is parabolic.

The method of **separation of variables** seeks a product $u(x,y)=X(x)Y(y)$ for equation (I). The goal is to determine the two single-variable functions. The first exercise is to try this approach on $u_x=u_y$.

##### Uniqueness of the inverse Laplace transform

If $f$ and $g$ are continuous and their Laplace transforms exist and agree for all $s>a$, then $f(t)=g(t)$ for all $t>0$. This is the continuous-function case of uniqueness.

For $F(s)=\frac1{s-3}-\frac{16}{s^2+9}$, use linearity and rewrite $16/(s^2+9)$ as $(16/3)\cdot3/(s^2+9)$. This gives

$$
\mathcal L^{-1}\{F\}(t)=e^{3t}-\frac{16}{3}\sin(3t).
$$

##### Laplace-transform practice. Example 1

Solve $y''-2y'+y=3e^t$ with $y(0)=y'(0)=1$. Set $Y(s)=\mathcal L\{y\}(s)$. The formulas used are

$$
\mathcal L\{y'\}=sY-y(0),\qquad
\mathcal L\{y''\}=s^2Y-sy(0)-y'(0),\qquad
\mathcal L\{e^{at}\}=\frac1{s-a}\quad(s>a).
$$

Apply the transform and insert the initial values:

$$
\begin{aligned}
(s^2Y-s-1)-2(sY-1)+Y&=\frac3{s-1},\\
(s^2-2s+1)Y&=\frac3{s-1}+s-1
=\frac{s^2-2s+4}{s-1}.
\end{aligned}
$$

Therefore

$$
Y(s)=\frac{s^2-2s+4}{(s^2-2s+1)(s-1)}.
$$

##### Separating $u_x=u_y$

Set $u(x,y)=X(x)Y(y)$, so $u_x=X'(x)Y(y)$ and $u_y=X(x)Y'(y)$. For a nonzero product, separation gives

$$
\frac{X'(x)}{X(x)}=\frac{Y'(y)}{Y(y)}=-\lambda.
$$

The two ratios depend on independent variables, so their common value is constant. Thus $X'+\lambda X=0$ and $Y'+\lambda Y=0$, with $X(x)=C_1e^{-\lambda x}$ and $Y(y)=C_2e^{-\lambda y}$. The resulting separated solution is

$$
u(x,y)=C_1C_2e^{-\lambda(x+y)}.
$$

##### Deriving the heat equation

Let $\Omega$ be a region occupied by a solid. The unknown $\thermal{u}(\mechanical{x},\mechanical{y},\mechanical{z},\signal{t})$ gives the temperature at position $(\mechanical{x},\mechanical{y},\mechanical{z})$ and time $\signal{t}$.

![[Kyle Kabasares - Intermediate Ordinary Differential Equations - Solid region for heat conduction.png|**Fig. 11** The solid region $\Omega$ is shown in three spatial coordinates, with an arrow pointing into the region.]]

##### Energy balance in a thin conducting rod

Heat flows from higher temperature to lower temperature. The rate of change of thermal energy in a region equals the incoming heat rate minus the outgoing heat rate plus the rate of heat generation inside.

Take a thin circular rod of cross-sectional area $\mechanical{A}$ with insulated sides and no internal heat generation. Consider a slice from $\mechanical{x}$ to $\mechanical{x}+\Delta\mechanical{x}$. Heat crosses its two end faces by conduction.

![[Kyle Kabasares - Intermediate Ordinary Differential Equations - Thin conducting rod.png|**Fig. 12** A slice in the conducting rod extends from $\mechanical{x}$ to $\mechanical{x}+\Delta\mechanical{x}$.]]

![[Kyle Kabasares - Intermediate Ordinary Differential Equations - Rod slice.png|**Fig. 13** The slice volume is $\mechanical{A}\Delta\mechanical{x}$.]]

Let $\mechanical{\rho}$ be the material density and $\thermal{c}$ its specific heat capacity. The slice has mass $\mechanical{m}=\mechanical{\rho}\mechanical{A}\Delta\mechanical{x}$. Approximating the slice temperature by $\thermal{u}(\mechanical{x},\signal{t})$, its thermal energy relative to the chosen reference is

$$
\thermal{Q}\approx\thermal{c}\mechanical{m}\thermal{u}(\mechanical{x},\signal{t}),\qquad
\thermal{Q}_t\approx\thermal{c}\mechanical{\rho}\mechanical{A}\Delta\mechanical{x}\,
\thermal{u}_t(\mechanical{x},\signal{t}).
$$

The sketch uses $m$ for mass per unit length, while the calculation $m=\rho A\Delta x$ uses it for the mass of the slice. The displayed balance uses the slice mass.

With conductivity $\thermal{K}$, the heat rates in the positive $\mechanical{x}$ direction across the left and right faces are $-\thermal{K}\mechanical{A}\thermal{u}_x(\mechanical{x},\signal{t})$ and $-\thermal{K}\mechanical{A}\thermal{u}_x(\mechanical{x}+\Delta\mechanical{x},\signal{t})$. Their difference gives the slice balance

$$
\thermal{c}\mechanical{\rho}\mechanical{A}\Delta\mechanical{x}\,\thermal{u}_t
\approx \thermal{K}\mechanical{A}
\bigl[\thermal{u}_x(\mechanical{x}+\Delta\mechanical{x},\signal{t})
-\thermal{u}_x(\mechanical{x},\signal{t})\bigr].
$$

##### The one-dimensional heat equation

Divide the slice balance by $\thermal{c}\mechanical{\rho}\mechanical{A}\Delta\mechanical{x}$ to obtain the difference quotient

$$
\thermal{u}_t\approx
\frac{\thermal{K}}{\thermal{c}\mechanical{\rho}}
\frac{\thermal{u}_x(\mechanical{x}+\Delta\mechanical{x},\signal{t})
-\thermal{u}_x(\mechanical{x},\signal{t})}{\Delta\mechanical{x}}.
$$

As $\Delta\mechanical{x}\to0$, this gives the heat equation

$$
\thermal{u}_t=\frac{\thermal{K}}{\thermal{c}\mechanical{\rho}}\thermal{u}_{xx}
=\thermal{k}\thermal{u}_{xx}.
$$

For a rod of length $\mechanical{L}$, specify the initial temperature $\thermal{u}(\mechanical{x},0)=\thermal{f}(\mechanical{x})$ and the boundary conditions $\thermal{u}(0,\signal{t})=\thermal{u}(\mechanical{L},\signal{t})=0$.

##### Laplace's equation as steady heat conduction

In two dimensions, the heat equation is $\thermal{u}_t=\thermal{k}(\thermal{u}_{xx}+\thermal{u}_{yy})$. If the temperature on a plate is time independent, $\thermal{u}_t=0$. With $\thermal{k}>0$, this gives

$$
\Delta\thermal{u}=\thermal{u}_{xx}+\thermal{u}_{yy}=0.
$$

![[Kyle Kabasares - Intermediate Ordinary Differential Equations - Hot plate.png|**Fig. 14** A plate motivates the two-dimensional steady-temperature model.]]

1. Solve $\mathbf{x}'=A\mathbf{x}$, $\mathbf{x}(t_0)=\mathbf{x}_0$ using the matrix exponential.
2. Solve second-order linear equations by power series or Fourier series.
3. Find eigenvalues and eigenfunctions of boundary-value problems.
4. Solve differential equations using the Laplace transform.

5. Classify simple PDEs and solve them by separation of variables.

##### Practice final, problem 5. Solving the heat equation

The rod sketch has endpoints at $x=0$ and $x=L$. The specific problem, in numerical coordinates, is

$$
\begin{cases}
u_t=3u_{xx},&0<x<4,\quad t>0,\\
u(x,0)=\sin x,&0<x<4,\\
u(0,t)=u(4,t)=0,&t>0.
\end{cases}
$$

The handwritten domain includes the endpoints in the first line. The equation is imposed in the interior, with endpoint values for positive time. The initial profile has $\sin 4\ne0$, so a solution with these data cannot be continuous at the corner $(4,0)$.

For the general heat equation $\thermal{k}\thermal{u}_{xx}-\thermal{u}_t=0$ with $\thermal{k}>0$, take $\mechanical{x},\signal{t}$ as the two independent variables. The coefficients in the classification formula are $A=\thermal{k}$, $B=C=0$, and $E=-1$. Thus $B^2-4AC=0$ and the equation is parabolic.

To find separated solutions on $0<\mechanical{x}<\mechanical{L}$ with $\thermal{u}(\mechanical{x},0)=\thermal{f}(\mechanical{x})$, set $\thermal{u}(\mechanical{x},\signal{t})=X(\mechanical{x})T(\signal{t})$. Then $\thermal{u}_t=X(\mechanical{x})T'(\signal{t})$ and $\thermal{u}_{xx}=X''(\mechanical{x})T(\signal{t})$, so

$$
X(\mechanical{x})T'(\signal{t})=\thermal{k}X''(\mechanical{x})T(\signal{t}).
$$

##### Spatial eigenfunctions and time dependence

Dividing the separated equation by $\thermal{k}XT$ gives

$$
\frac{X''(\mechanical{x})}{X(\mechanical{x})}=\frac{T'(\signal{t})}{\thermal{k}T(\signal{t})}=-\lambda.
$$

The left side is independent of $\signal{t}$ and the right side independent of $\mechanical{x}$, so their common value is constant. Therefore

$$
X''+\lambda X=0,\qquad T'+\thermal{k}\lambda T=0.
$$

For a nonzero time factor, the boundary conditions $\thermal{u}(0,\signal{t})=\thermal{u}(\mechanical{L},\signal{t})=0$ require $X(0)=X(\mechanical{L})=0$. The cases $\lambda=0$ and $\lambda<0$ give only the zero spatial factor. For $\lambda=\alpha^2>0$, the solution starts as $X(\mechanical{x})=C_1\cos(\alpha \mechanical{x})+C_2\sin(\alpha \mechanical{x})$. The endpoints force $C_1=0$ and $\alpha=n\pi/\mechanical{L}$, giving

$$
\lambda_n=\left(\frac{n\pi}{\mechanical{L}}\right)^2,\qquad
X_n(\mechanical{x})=\sin\left(\frac{n\pi \mechanical{x}}{\mechanical{L}}\right),\qquad n\ge1.
$$

The time factor is a multiple of $T_n(\signal{t})=e^{-\thermal{k}(n\pi/\mechanical{L})^2\signal{t}}$. In the product on the handwritten page, the argument of $X_n$ appears as $\signal{t}$. This factor depends on $\mechanical{x}$. The separated solutions and their superposition are

$$
\thermal{u}_n(\mechanical{x},\signal{t})=e^{-\thermal{k}(n\pi/\mechanical{L})^2\signal{t}}\sin\left(\frac{n\pi \mechanical{x}}{\mechanical{L}}\right),\qquad
\thermal{u}(\mechanical{x},\signal{t})=\sum_{n=1}^\infty A_n\thermal{u}_n(\mechanical{x},\signal{t}).
$$

##### Matching the initial temperature

At $\signal{t}=0$ the exponential factors are one, so the initial data require

$$
\thermal{f}(\mechanical{x})=\sum_{n=1}^\infty A_n\sin\left(\frac{n\pi \mechanical{x}}{\mechanical{L}}\right).
$$

The sine factor is a function of $\mechanical{x}$, as in the initial-data line. Orthogonality on $[0,\mechanical{L}]$ determines $A_n$. In the numerical coordinates of the example, $L=4$ and $f(x)=\sin x$, giving

$$
\begin{aligned}
A_n
&=\frac{2}{\mechanical{L}}\int_0^\mechanical{L} \thermal{f}(\mechanical{x})\sin\left(\frac{n\pi \mechanical{x}}{\mechanical{L}}\right)\,d\mechanical{x}\\
&=\frac24\int_0^4\sin x\sin\left(\frac{n\pi x}{4}\right)\,dx\\
&=\frac14\left[
\int_0^4\cos\left(\left(1-\frac{n\pi}{4}\right)x\right)\,dx
-\int_0^4\cos\left(\left(1+\frac{n\pi}{4}\right)x\right)\,dx
\right].
\end{aligned}
$$

The last line uses the product-to-sum identity for two sines.

##### Practice problem 4. Laplace transform of $t\cos t$

Consider $y''-2y'+y=t\cos t$ with $y(0)=y'(0)=0$. The forcing transform can be computed by integration by parts or by differentiating the transform of $\cos t$. For real $s>0$, use $\frac{\partial}{\partial s}e^{-st}=-te^{-st}$:

$$
\begin{aligned}
\mathcal L\{t\cos t\}(s)
&=\int_0^\infty t\cos(t)e^{-st}\,dt\\
&=-\frac{d}{ds}\int_0^\infty\cos(t)e^{-st}\,dt
=-\frac{d}{ds}\left(\frac{s}{s^2+1}\right)
=\frac{s^2-1}{(s^2+1)^2}.
\end{aligned}
$$

The zero initial data give $(s^2-2s+1)Y(s)=(s^2-1)/(s^2+1)^2$. Factoring and canceling one $s-1$ gives

$$
Y(s)=\frac{s^2-1}{(s^2+1)^2(s^2-2s+1)}
=\frac{s+1}{(s^2+1)^2(s-1)}.
$$

## Source

Kyle Kabasares, *Intermediate Ordinary Differential Equations (Math 125, UC Merced 2016)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Mass of the vibrating body or of a slice of the conducting rod. |
| $\mechanical{x}$ | $\unit{m}$ | Displacement or spatial coordinate | Position relative to equilibrium in the oscillator or distance along the wave and heat models. |
| $\mechanical{c}$ | $\unit{N\,s\,m^{-1}}$ | Viscous damping coefficient | Proportionality between velocity and damping force. |
| $\signal{t}$ | $\unit{s}$ | Time | Independent variable in the vibration and heat models. |
| $\thermal{y}$ | $\unit{K}$ | Temperature | Dependent variable in the heat equation on [[#Changing the forcing at one point\|the section on Changing the forcing at one point]]. |
| $\thermal{k}$ | $\unit{m^2\,s^{-1}}$ | Thermal diffusivity | Coefficient of the second spatial derivative in the heat equation. |
| $\mechanical{u}$ | $\unit{m}$ | Wave displacement | Dependent variable in the one-dimensional mechanical wave model. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Wave speed | Coefficient whose square multiplies the second spatial derivative in the wave equation. |
| $\thermal{u}$ | $\unit{K}$ | Temperature field | Temperature in the solid as a function of position and time. |
| $\mechanical{y}$, $\mechanical{z}$ | $\unit{m}$ | Transverse spatial coordinates | The two remaining coordinates alongside $\mechanical{x}$ in the three-dimensional heat equation. |
| $\mechanical{A}$ | $\unit{m^2}$ | Cross-sectional area | Area of either end face of a rod slice. |
| $\Delta\mechanical{x}$ | $\unit{m}$ | Slice length | Distance between the end faces used in the energy balance. |
| $\mechanical{\rho}$ | $\unit{kg\,m^{-3}}$ | Mass density | Mass per volume of rod material. |
| $\thermal{c}$ | $\unit{J\,kg^{-1}\,K^{-1}}$ | Specific heat capacity | Energy per unit mass per temperature increment. |
| $\thermal{Q}$ | $\unit{J}$ | Thermal energy | Energy of the slice relative to a chosen temperature reference. |
| $\thermal{K}$ | $\unit{W\,m^{-1}\,K^{-1}}$ | Thermal conductivity | Proportionality between temperature gradient and conductive heat flux. |
| $\mechanical{L}$ | $\unit{m}$ | Rod length | Distance between the endpoints used in the heat equation. |
| $\thermal{f}$ | $\unit{K}$ | Initial temperature profile | Temperature as a function of position at the initial time. |
