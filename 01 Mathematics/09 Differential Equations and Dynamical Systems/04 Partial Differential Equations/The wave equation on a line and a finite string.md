---
title: "The wave equation on a line and a finite string"
---

> [!TLDR]
> Use traveling waves on the line and standing modes on an interval, with initial position and velocity determining the solution.

## Worked lecture material

##### Units in the string equation

The terms $\mechanical{\rho}_0\,\partial^2\mechanical{u}/\partial t^2$ and $\mechanical{T}_0\,\partial^2\mechanical{u}/\partial x^2$ have the same SI units, $\unit{N\,m^{-1}}=\unit{kg\,s^{-2}}$. The page writes $\unit{kg\,m\,s^{-2}}$, which applies to the force on the short segment before dividing by its length.

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

##### Modal equation for the forced heat problem

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

##### Wave equation

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

##### Vibrating string with fixed ends

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

The notes mark Section 3.3.5 on [[Rectangular and circular membrane eigenmodes#Eigenvalue problem with Bessel functions|the section on Eigenvalue problem with Bessel functions]] as the start of the material for Midterm 2.

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

##### Normal modes of a vibrating string

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

The amplitude identity from the previous page gives

$$
A_n^2+B_n^2=\left(\frac{B_n}{\cos\mechanical{\theta}_n}\right)^2.
$$

For the appropriate phase, $B_n/\cos\mechanical{\theta}_n=\sqrt{A_n^2+B_n^2}$. The circular or angular frequency is $\mechanical{\omega}_n=n\pi\mechanical{c}/L$, and $\sin(\mechanical{\omega}_n t+\mechanical{\theta}_n)$ describes simple harmonic motion.

##### Fundamental mode and higher modes

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

The handwritten damping example gives the mode factor

$$
\sin\left(\frac{n\pi x}{L}\right)
\sin\left(\frac{n\pi\mechanical{c}t}{L}\right)
e^{-\beta(n\pi/L)^2t}.
$$

For $\beta=1$ and $L=\pi$ the exponential is $e^{-n^2t}$, so the high-frequency modes in this example decay quickly. This is the frequency-dependent decay written in the source. The velocity-damping equation on [[#Fundamental mode and higher modes|the section on Fundamental mode and higher modes]] gives the underdamped envelope stated there.

##### Traveling waves on an infinite domain

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

##### Midterm study. Exercise 4.2.2

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

##### Midterm study. Separation of variables for the fixed-end string

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

The midterm review concludes with the fixed-end string solution.

$$
\mechanical{u}(x,t)=\sum_{n=1}^{\infty}\sin\left(\frac{n\pi x}{L}\right)
\left[A_n\cos\left(\frac{n\pi\mechanical{c}t}{L}\right)
+B_n\sin\left(\frac{n\pi\mechanical{c}t}{L}\right)\right].
$$

##### Sturm–Liouville eigenvalue problems

##### General classification

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
| $\mechanical{A}$ | $\unit{m^2}$ | Cross-sectional area | Area of a face perpendicular to the rod axis. |
| $\mechanical{u}(x,t)$ | $\unit{m}$ | Wave displacement | Scalar displacement at position $x$ and time $t$ in the one-dimensional wave model. |
| $\mechanical{c}$, $\mechanical{v}$ | $\unit{m\,s^{-1}}$ | Wave speed | Constant propagation speed in the scalar or vector wave equation. |
| $\mechanical{\rho}_0(x)$ | $\unit{kg\,m^{-1}}$ | Linear mass density | Mass per unit length of the string near $x$. |
| $\mechanical{T}(x,t)$, $\mechanical{T}_0$ | $\unit{N}$ | String tension | Tangential force and its constant value in the idealized model. |
| $\thermal{q}(x,t)$ | $\unit{K\,s^{-1}}$ | Temperature source rate | Local heating or cooling rate in the nonhomogeneous heat equation. |
| $\mechanical{f}(x)$ | $\unit{m}$ | Initial string displacement | Transverse displacement at $t=0$. |
| $\mechanical{g}(x)$ | $\unit{m\,s^{-1}}$ | Initial string velocity | Transverse velocity at $t=0$. |
| $\mechanical{A}_n^{\mathrm{amp}}$ | $\unit{m}$ | Normal-mode amplitude | Peak magnitude of the oscillatory time factor for mode $n$. |
| $\mechanical{\omega}_n$ | $\unit{rad\,s^{-1}}$ | Normal-mode angular frequency | Angular frequency of the time factor for mode $n$. |
| $\mechanical{\theta}_n$ | $\unit{rad}$ | Normal-mode phase | Phase offset determined by the two time coefficients. |
| $\mechanical{\beta}$ | $\unit{s^{-1}}$ | Velocity damping coefficient | Coefficient of the transverse velocity in the damped wave equation. |
| $\mechanical{\rho}(x)$, $\mechanical{\rho}_{\min}$, $\mechanical{\rho}_{\max}$ | $\unit{kg\,m^{-1}}$ | Nonuniform string density and its bounds | Mass per unit length and the lower and upper bounds used in the Rayleigh quotient. |
| $L$, $H$ | $\unit{m}$ | Rectangular membrane dimensions | Length in the $x$ direction and height in the $y$ direction. |
| $r$, $a$ | $\unit{m}$ | Radial distance and membrane radius | Distance from the center and its value at the fixed rim. |
