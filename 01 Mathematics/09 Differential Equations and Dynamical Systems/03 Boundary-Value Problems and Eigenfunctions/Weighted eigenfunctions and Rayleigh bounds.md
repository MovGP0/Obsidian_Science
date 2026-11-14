---
title: "Weighted eigenfunctions and Rayleigh bounds"
---

> [!TLDR]
> Place nonuniform strings and diffusion in a Sturm–Liouville framework and estimate the lowest eigenvalue with trial functions.

## Worked lecture material

The third example is vibration of a nonuniform string.

$$
\mechanical{T}_0\phi''+\alpha\phi+\lambda\mechanical{\rho}_0(x)\phi=0.
$$

The coefficients are $p(x)=\mechanical{T}_0$, $q(x)=\alpha$, and $\sigma(x)=\mechanical{\rho}_0(x)$.

##### Properties illustrated by the Dirichlet problem

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

At a point of continuity the eigenfunction expansion on [[#Properties illustrated by the Dirichlet problem|the section on Properties illustrated by the Dirichlet problem]] converges to $f(x)$.

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

##### Self-adjoint operators and Sturm–Liouville eigenvalue problems

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

##### Lagrange's identity

$$
u\mathcal{L}(v)-v\mathcal{L}(u)
=\frac{d}{dx}\left[p(x)\left(u\frac{dv}{dx}-v\frac{du}{dx}\right)\right].
$$

##### Derivation of Lagrange's identity

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

##### Green's formula

Integrate the identity over $[a,b]$.

$$
\int_a^b\bigl[u\mathcal{L}(v)-v\mathcal{L}(u)\bigr]\,dx
=\bigl[p(x)(uv'-vu')\bigr]_a^b.
$$

The notes specify continuous first derivatives for $u$ and $v$. When $p=1$ and $q=0$, the operator reduces to $\mathcal{L}(u)=u''$, so

$$
\int_a^b(uv''-vu'')\,dx=[uv'-vu']_a^b.
$$

##### Self-adjointness of $\mathcal{L}$

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

##### Orthogonal eigenfunctions

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

##### Rayleigh quotient

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

##### Nonnegative eigenvalues

Equation (2) gives $\lambda\ge 0$ when $-[p\phi'\phi]_a^b\ge 0$ and $q(x)\le 0$ throughout $[a,b]$, since $p$ and $\sigma$ are positive. The handwritten boundary-term inequality appears strict, but the examples use equality.

- For $\phi(a)=\phi(b)=0$, each endpoint term vanishes.
- For $\phi(a)=0$ and $\phi'(b)=0$, each endpoint term also vanishes. The page labels this pair Robin conditions. The displayed equations give a Dirichlet condition at $a$ and a Neumann condition at $b$.
- For periodic conditions $\phi(a)=\phi(b)$ and $\phi'(a)=\phi'(b)$, the boundary term is
  $$
  -[p\phi'\phi]_a^b=-\bigl[p(b)\phi'(b)\phi(b)-p(a)\phi'(a)\phi(a)\bigr].
  $$
  The handwritten example drops the factor $p$, as in the constant-$p$ case. With $p(a)=p(b)$, the periodic conditions give zero.

The periodic endpoint contribution on [[#Nonnegative eigenvalues|the section on Nonnegative eigenvalues]] is $-[\phi'\phi]_a^b=0$ for $p=1$.

##### Minimization principle

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

##### Vibrations of a nonuniform string

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

The resulting bounds for the lowest eigenvalue of the nonuniform string are

$$
\boxed{\frac{\mechanical{T}_0}{\mechanical{\rho}_{\max}}
\left(\frac{\pi}{L}\right)^2
\le\lambda_1\le
\frac{\mechanical{T}_0}{\mechanical{\rho}_{\min}}
\left(\frac{\pi}{L}\right)^2.}
$$

##### Sturm–Liouville review

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

The second condition repeats $\beta_3$ in the handwriting. The derivative coefficient is given as $\beta_4$ on [[The wave equation on a line and a finite string#Sturm–Liouville eigenvalue problems|the section on Sturm–Liouville eigenvalue problems]] and 68.

For the regular problem, $p$, $q$, and $\sigma$ are real and continuous throughout $[a,b]$. Both $p$ and $\sigma$ are positive, including at the endpoints.

##### Theorems for regular Sturm–Liouville problems with separated boundary conditions

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

The derivative coefficient at $b$ is transcribed as $\beta_4$ using the same convention as [[The wave equation on a line and a finite string#Sturm–Liouville eigenvalue problems|the section on Sturm–Liouville eigenvalue problems]] and 68. Multiply the differential equation by $\phi$ and integrate to derive

$$
\lambda=
\frac{\displaystyle-[p\phi\phi']_a^b
+\int_a^b\bigl[p(\phi')^2-q\phi^2\bigr]\,dx}
{\displaystyle\int_a^b\sigma\phi^2\,dx}.
$$

Minimizing the quotient gives a way to bound the lowest eigenvalue.

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

##### Example with mixed boundary conditions

$$
\phi''+(\lambda-1)\phi=0,\qquad
\phi(0)=0,\qquad \phi'(1)=0.
$$

The Sturm–Liouville coefficients are $p=1$, $q=-1$, and $\sigma=1$.

## Source

Kyle Kabasares, *Partial Differential Equations (Math 126, UC Merced 2017)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{u}$ | $\unit{Pa}$ | Pressure | Unknown pressure in the divergence-form example. |
| $\thermal{c}$ | $\unit{J/(kg\,K)}$ | Specific heat capacity | Thermal energy per unit mass per unit temperature rise. |
| $\mechanical{\rho}$ | $\unit{kg/m^3}$ | Mass density | Mass per unit volume of the rod. |
| $\thermal{k}_0$ | $\unit{W/(m\,K)}$ | Thermal conductivity | Material coefficient in Fourier's law. |
| $\thermal{k}$ | $\unit{m^2/s}$ | Thermal diffusivity | Ratio of conductivity to volumetric heat capacity. |
| $\mechanical{u}(x,t)$ | $\unit{m}$ | Wave displacement | Scalar displacement at position $x$ and time $t$ in the one-dimensional wave model. |
| $\mechanical{c}$, $\mechanical{v}$ | $\unit{m\,s^{-1}}$ | Wave speed | Constant propagation speed in the scalar or vector wave equation. |
| $\mechanical{\rho}_0(x)$ | $\unit{kg\,m^{-1}}$ | Linear mass density | Mass per unit length of the string near $x$. |
| $\mechanical{T}(x,t)$, $\mechanical{T}_0$ | $\unit{N}$ | String tension | Tangential force and its constant value in the idealized model. |
| $\mechanical{f}(x)$ | $\unit{m}$ | Initial string displacement | Transverse displacement at $t=0$. |
| $\mechanical{g}(x)$ | $\unit{m\,s^{-1}}$ | Initial string velocity | Transverse velocity at $t=0$. |
| $\mechanical{\rho}(x)$, $\mechanical{\rho}_{\min}$, $\mechanical{\rho}_{\max}$ | $\unit{kg\,m^{-1}}$ | Nonuniform string density and its bounds | Mass per unit length and the lower and upper bounds used in the Rayleigh quotient. |
| $\mechanical{Q}$ in Exercise 4.4.2 | $\unit{N\,m^{-1}}$ | Load per unit length | Displacement-proportional load added directly to the string equation on [[#Theorems for regular Sturm–Liouville problems with separated boundary conditions\|the section on Theorems for regular Sturm–Liouville problems with separated boundary conditions]]. |
| $L$, $H$ | $\unit{m}$ | Rectangular membrane dimensions | Length in the $x$ direction and height in the $y$ direction. |
| $r$, $a$ | $\unit{m}$ | Radial distance and membrane radius | Distance from the center and its value at the fixed rim. |
