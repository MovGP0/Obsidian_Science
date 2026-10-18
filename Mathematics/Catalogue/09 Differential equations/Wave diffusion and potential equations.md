---
title: "Wave, diffusion, and potential equations"
catalogue_ids:
  - "9.2.3"
  - "9.2.3.1"
  - "9.2.3.2"
  - "9.2.3.3"
  - "9.2.3.4"
---

> [!TLDR]
> Wave, diffusion, and potential equations need different data; separation of variables and boundary eigenfunctions provide explicit solutions on simple domains.

## Equations and admissible data

Read [[Classification of second-order PDEs]], [[Boundary eigenvalue problems]], and [[15.03 Initial and boundary data]]. The names below come from science and engineering, but all variables and constants in this lesson are abstract dimensionless mathematical inputs and parameters. This keeps the focus on equation structure and solution methods.

For an evolution problem, **initial data** specify the unknown function at a starting value of $t$. A second derivative in $t$ normally needs both $u$ and $u_t$ there. **Boundary data** specify values or derivatives on the edge of the spatial domain. Dirichlet data prescribe $u$; Neumann data prescribe the outward normal derivative $\partial_nu$; Robin data prescribe a linear combination $a u+b\partial_nu$. These are different operators, not interchangeable names for the same condition.

For a classical solution, initial and boundary data must agree where their sets meet. On $0<x<L$, fixed zero endpoint values imply $u(0,0)=u(L,0)=0$. A continuous initial profile with different endpoint values cannot satisfy both conditions pointwise at those corners. Weaker solution notions can allow corner mismatch, but must identify the intended sense of the data.

![[catalogue-ch09-data-regions.svg|**Fig. C.ch09.2** An evolution problem prescribes a function on the initial edge and conditions on the two side edges. An elliptic boundary problem prescribes data around the domain boundary.]]

Fig. C.ch09.2 separates an initial edge from side boundaries. A boundary surrounds an elliptic domain; it is not a hidden starting time.

## The wave equation on the whole line

For $c>0$, solve $u_{tt}=c^2u_{xx}$ with $u(x,0)=f(x)$ and $u_t(x,0)=g(x)$. The characteristic-variable calculation in [[Classification of second-order PDEs]] gives the general smooth form $F(x-ct)+G(x+ct)$. Solving for the two functions from the initial data gives d'Alembert's formula:

$$
u(x,t)=\frac{f(x-ct)+f(x+ct)}2+
\frac1{2c}\int_{x-ct}^{x+ct}g(s)\,ds.
$$

For twice continuously differentiable $f$ and continuously differentiable $g$, this gives a classical solution. The formula uses data only in $[x-ct,x+ct]$, the one-dimensional domain of dependence.

For $c=1$, $f(x)=x^2$, $g(x)=1$, the average of $(x-t)^2$ and $(x+t)^2$ is $x^2+t^2$. The integral contributes $t$. Thus $u=x^2+t^2+t$. Check $u_{tt}=2=u_{xx}$ and the two initial functions. Giving $f$ without $g$ would leave many possible solutions.

## The wave equation on a finite interval

With $u(0,t)=u(L,t)=0$, set $u=XT$ in $u_{tt}=c^2u_{xx}$. Division on regions where the factors are nonzero gives $X''/X=T''/(c^2T)=-\lambda$. Each factor equation then extends by continuity through zeros. The boundary eigenfunctions are $X_n=\sin(n\pi x/L)$ with $\lambda_n=(n\pi/L)^2$. The temporal factor solves $T_n''+c^2\lambda_nT_n=0$.

For $L=1$, $c=1$, initial function $\sin\pi x$ and zero initial derivative, the answer is $u=\sin\pi x\cos\pi t$. General sufficiently regular compatible data can be expanded in sine modes. Convergence must be strong enough to differentiate the series for a classical solution; square-integrable data instead lead naturally to weaker solution concepts.

## Diffusion and the heat equation

The homogeneous diffusion equation is $u_t=\kappa u_{xx}$ with $\kappa>0$. It is first order in $t$, so prescribe one initial function. On $(0,L)$ with zero Dirichlet boundaries, separation gives the same sine eigenfunctions but a different temporal equation:

$$
T_n'=-\kappa\lambda_n T_n,\qquad
u(x,t)=\sum_{n=1}^{\infty}b_ne^{-\kappa(n\pi/L)^2t}\sin(n\pi x/L).
$$

For $L=1$, $\kappa=1$, and initial data $\sin\pi x+2\sin2\pi x$, this finite sum is $e^{-\pi^2t}\sin\pi x+2e^{-4\pi^2t}\sin2\pi x$. Each term satisfies the PDE and both boundaries. The second mode decays faster because its eigenvalue is four times larger.

On the whole line, for suitable bounded or integrable initial data, the Gaussian-kernel formula is

$$
u(x,t)=\frac1{\sqrt{4\pi\kappa t}}
\int_{-\infty}^{\infty}
e^{-(x-s)^2/(4\kappa t)}f(s)\,ds,\qquad t>0.
$$

The kernel integrates to $1$ and narrows as $t\to0^+$. At continuity points it recovers $f$. On an interval, boundary conditions change the kernel; the whole-line formula cannot be reused without adjustment. Reversing the temporal direction multiplies high-frequency modes by exponentially growing factors. Small final-data errors can become large backward errors, so backward diffusion is unstable in common function norms.

## Potential and Poisson equations

The potential equation is Laplace's equation $\Delta u=0$, where $\Delta u=u_{xx}+u_{yy}$ in two variables. Its inhomogeneous version is Poisson's equation $\Delta u=f$. There is no selected evolution coordinate, so an initial profile alone is generally the wrong data type.

For a concrete Dirichlet example on the unit square, prescribe boundary values from $u(x,y)=x^2-y^2$: the bottom edge is $x^2$, the top is $x^2-1$, the left is $-y^2$, and the right is $1-y^2$. The second derivatives are $2$ and $-2$, so the sum is zero. These consistent data give this harmonic function. Uniqueness follows from the maximum principle for the difference of two harmonic functions: its zero boundary values force its maximum and minimum to be zero, assuming continuity on the closed bounded domain and harmonicity inside.

For a Neumann Poisson problem, integrating and using the divergence theorem gives the necessary compatibility condition $\int_\Omega f=\int_{\partial\Omega}\partial_nu$. If a solution exists on a connected domain, adding a constant leaves its derivatives and Neumann data unchanged. A mean-value condition can fix that remaining constant. Thus pure Neumann data generally have a compatibility requirement and a constant ambiguity.

## Practice

1. Solve $u_t=2u_{xx}$ on $(0,1)$ with zero endpoint values and initial data $3\sin\pi x$.
2. For $u_{tt}=u_{xx}$ on the real line, use initial functions $f=0$, $g(x)=2x$ in d'Alembert's formula.

## Worked answers

1. The sine mode has eigenvalue $\pi^2$, so $u=3e^{-2\pi^2t}\sin\pi x$. Differentiation gives the same factor $-2\pi^2$ in $u_t$ and $2u_{xx}$, and its initial coefficient is $3$.
2. The formula gives $u=\tfrac12\int_{x-t}^{x+t}2s\,ds=((x+t)^2-(x-t)^2)/2=2xt$. Its second derivatives in $t$ and $x$ both vanish. Also $u(x,0)=0$ and $u_t(x,0)=2x$.
