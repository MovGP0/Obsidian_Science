---
title: "Insulated, periodic, and forced heat problems"
---

> [!TLDR]
> Neumann and periodic conditions allow a constant mode, while subtracting a constructed profile handles nonzero endpoint values.

## Worked lecture material

In the positive case of Exercise 2.3.3, the left condition gives $X(0)=k_1=0$. The right condition is $k_2\sin(\sqrt{\lambda}L)=0$. For a nontrivial solution $\sqrt{\lambda}L=n\pi$, so $\lambda_n=(n\pi/L)^2$ and $X_n(x)=k_2\sin(n\pi x/L)$ for $n=1,2,\ldots$. Combining with the time factors and superposing gives

$$
\thermal{u}(x,t)=\sum_{n=1}^{\infty}B_n\sin(n\pi x/L)e^{-n^2\pi^2\thermal{k}t/L^2}.
$$

To impose $\thermal{u}(x,0)=6\sin(9\pi x/L)$, choose $B_9=6$ and $B_n=0$ for $n\ne9$. Then

$$
\thermal{u}(x,t)=6\sin(9\pi x/L)e^{-81\pi^2\thermal{k}t/L^2}.
$$

##### )

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

The ansatz $\thermal{u}(x,t)=X(x)T(t)$ gives $T'=-\lambda\thermal{k}T$ with solution $T(t)=Ce^{-\lambda\thermal{k}t}$. The spatial problem is

$$
X''=-\lambda X,\qquad X'(0)=X'(L)=0.
$$

##### Positive eigenvalues

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

##### Zero eigenvalue

For $\lambda=0$, $X(x)=c_3x+c_4$. The condition $X'(0)=0$ gives $c_3=0$. A constant $X=c_4$ also satisfies $X'(L)=0$ for any $c_4$. Since $T$ is constant for $\lambda=0$, the corresponding product solution is a constant $A_0$.

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

For $m=0$, $\cos(m\pi x/L)=1$, and the integrals of all nonconstant cosine modes vanish. For $m\ge1$, orthogonality selects $A_mL/2$. The coefficients of the solution on [[#Zero eigenvalue|the section on Zero eigenvalue]] are

$$
A_0=\frac1L\int_0^L\thermal{f}(x)\,dx,
\qquad
A_m=\frac2L\int_0^L\thermal{f}(x)\cos(m\pi x/L)\,dx,
\qquad m=1,2,\ldots.
$$

**)**

A thin wire of length $2L$ with insulated lateral surfaces is bent into a circle. The temperature $\thermal{u}(x,t)$ is constant across each cross section, and there is no thermal source.

![[Kyle Kabasares - Partial Differential Equations - Circular wire and identified endpoints.png|**Fig. 10** The coordinates $x=-L$ and $x=L$ identify the same point on the ring.]]

Assume perfect thermal contact where the ends meet, so $\thermal{u}(-L,t)=\thermal{u}(L,t)$. The heat flux must also be continuous at the joint.

$$
-\thermal{k}_0\partial_x\thermal{u}(-L,t)
=-\thermal{k}_0\partial_x\thermal{u}(L,t).
$$

For uniform conductivity, this gives $\partial_x\thermal{u}(-L,t)=\partial_x\thermal{u}(L,t)$.

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

At $\lambda=0$, the separated solution is the constant $\thermal{u}(x,t)=a_0$.

##### Negative separation constants

For $\lambda<0$, set $s=-\lambda>0$ and write

$$
X(x)=c_5\cosh(\sqrt{s}x)+c_6\sinh(\sqrt{s}x).
$$

The notes recall that $\cosh z=(e^z+e^{-z})/2$ is even and $\sinh z=(e^z-e^{-z})/2$ is odd. Their derivatives are $\sinh z$ and $\cosh z$, respectively. The condition $X(-L)=X(L)$ gives $2c_6\sinh(\sqrt{s}L)=0$. The derivative condition gives $2c_5\sinh(\sqrt{s}L)=0$ after canceling a nonzero common factor. Since $\sinh(\sqrt{s}L)\ne0$, both coefficients vanish.

##### Superposition on the ring

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

For the ring on $[-L,L]$, sine and cosine are mutually orthogonal because their product is odd.

$$
\int_{-L}^L\sin(n\pi x/L)\cos(m\pi x/L)\,dx=0.
$$

Multiplying the initial Fourier series by $\sin(m\pi x/L)$ and integrating gives $\int_{-L}^L\thermal{f}(x)\sin(m\pi x/L)\,dx=Lb_m$. Therefore

$$
b_m=\frac1L\int_{-L}^L\thermal{f}(x)\sin(m\pi x/L)\,dx,
\qquad m=1,2,\ldots.
$$

**)**

On $[0,L]$, the notes prescribe $\thermal{u}(0,t)=\thermal{u}(L,t)$ and $\partial_x\thermal{u}(0,t)=\partial_x\thermal{u}(L,t)$. The initial-condition line begins a piecewise expression with an $x$ entry. The other entries and interval limits are absent from that line.

With $\thermal{u}=XT$, the heat equation gives $T'/(\thermal{k}T)=X''/X=-\lambda$. For $\lambda=0$, the spatial solution is $X=c_1x+c_2$. Matching its values at $0$ and $L$ forces $c_1=0$, leaving $X=c_2$. For $\lambda>0$, $X=c_1\cos(\sqrt{\lambda}x)+c_2\sin(\sqrt{\lambda}x)$ and $X'=\sqrt{\lambda}[-c_1\sin(\sqrt{\lambda}x)+c_2\cos(\sqrt{\lambda}x)]$.

The Fourier sum at the bottom of the page uses $\cos(n\pi x/L)$ and $\sin(n\pi x/L)$ with $\lambda_n=(n\pi/L)^2$, the modes for $[-L,L]$. For the stated interval $[0,L]$, matching values and derivatives requires a period of $L$. The positive frequencies there are $2\pi n/L$, so the solution takes the form

$$
\thermal{u}(x,t)=A_0+\sum_{n=1}^\infty
\left[A_n\cos(2\pi nx/L)+B_n\sin(2\pi nx/L)\right]
e^{-\thermal{k}(2\pi n/L)^2t}.
$$

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

##### Nonhomogeneous problems

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

##### Case 2. Nonhomogeneous equation and boundary conditions

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

For the time-independent source, the equilibrium $\thermal{u}_E$ satisfies $\thermal{k}\thermal{u}_E''+\thermal{Q}'(x)=0$ with the prescribed endpoint temperatures. Define $\thermal{v}=\thermal{u}-\thermal{u}_E$. Then $\partial_t\thermal{v}=\partial_t\thermal{u}$ and $\partial_x^2\thermal{v}=\partial_x^2\thermal{u}-\thermal{u}_E''$. Substituting into the forced equation gives

$$
\begin{aligned}
\partial_t\thermal{v}
&=\thermal{k}(\partial_x^2\thermal{v}+\thermal{u}_E'')+\thermal{Q}'(x)\\
&=\thermal{k}\partial_x^2\thermal{v}.
\end{aligned}
$$

The last step uses the equilibrium equation.

##### Case 3. Time-dependent source and boundary values

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

**)**

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

## Source

Kyle Kabasares, *Partial Differential Equations (Math 126, UC Merced 2017)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\thermal{u}$ | $\unit{K}$ | Temperature | Temperature in the rod as a function of position and time. |
| $\thermal{k}_0$ | $\unit{W/(m\,K)}$ | Thermal conductivity | Material coefficient in Fourier's law. |
| $\thermal{k}$ | $\unit{m^2/s}$ | Thermal diffusivity | Ratio of conductivity to volumetric heat capacity. |
| $\thermal{Q}$ | $\unit{W/m^3}$ | Volumetric heat source | Thermal energy supplied per unit time and volume. |
| $\thermal{Q}'$ | $\unit{K/s}$ | Temperature source | Volumetric heat source divided by volumetric heat capacity. |
| $\thermal{f}(x)$ | $\unit{K}$ | Initial temperature | Prescribed temperature distribution in the discussion example. |
| $\thermal{u}_E$ | $\unit{K}$ | Equilibrium temperature | Time-independent temperature profile with the prescribed boundary values. |
| $\thermal{v}$ | $\unit{K}$ | Temperature difference | Temperature relative to the equilibrium profile. |
| $\thermal{r}$ | $\unit{K}$ | Boundary interpolation | Temperature profile that interpolates between the time-dependent endpoint values. |
| $\thermal{\bar Q}$ | $\unit{K/s}$ | Effective temperature source | Normalized heat source minus the time derivative of the boundary interpolation. |
| $L$, $H$ | $\unit{m}$ | Rectangular membrane dimensions | Length in the $x$ direction and height in the $y$ direction. |
| $r$, $a$ | $\unit{m}$ | Radial distance and membrane radius | Distance from the center and its value at the fixed rim. |
