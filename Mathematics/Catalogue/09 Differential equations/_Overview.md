---
title: "Differential equations: a learning route"
catalogue_ids:
  - "9"
  - "9.1"
  - "9.2"
---

> [!TLDR]
> A differential equation specifies derivatives of an unknown function; its domain and initial or boundary data determine the solution problem.

## From algebra to an unknown function

An algebraic equation such as $2a=6$ asks for a number. A differential equation such as $y'=2y$ asks for a function. The prime denotes the derivative with respect to the independent input $x$. Here the equation says that the slope at each input is twice the output there. The functions $y(x)=Ce^{2x}$ satisfy this rule for every real constant $C$, since differentiation gives $y'=2Ce^{2x}$. Data select a member: $y(0)=3$ gives $C=3$.

The equation, domain, and data are separate parts of the problem. An expression can solve an equation on one interval and fail at an endpoint. Two endpoint values can leave many solutions or no solution. A numerical approximation is useful, but it does not become an exact solution merely because its plotted points look smooth. These distinctions guide all the lessons below.

## Prerequisites from secondary education

Begin with the foundation route if calculus is new. [[03.04 Exponential and logarithmic functions]] introduces the functions used in the first examples. Read [[07.03 The derivative]] and [[07.04 Differentiation rules]] for slopes, product rules, and chain rules. Then read [[08.02 Antiderivatives]], [[08.03 The fundamental theorem]], and [[08.04 Substitution]]. An integral reverses differentiation under stated conditions; this is the main operation in elementary solution methods.

For example, $y'=2x$ means that $y$ is an antiderivative of $2x$. Thus $y=x^2+C$. The arbitrary constant is necessary because differentiating any constant gives zero. If $y(1)=5$, then $1+C=5$, so $y=x^2+4$. Substitution checks both the derivative and the data. No matrix theory or advanced analysis is needed for this first step.

An **ordinary differential equation**, or ODE, has one independent variable. It can have one unknown function, such as $y(x)$, or several functions of that same input, such as $y_1(x),y_2(x)$. A system does not become a partial differential equation just because it has several outputs. A **partial differential equation**, or PDE, has an unknown function of several independent variables, such as $u(x,t)$. The partial derivative $u_x$ changes $x$ while $t$ stays fixed. See [[12.02 Partial derivatives]] before the PDE lessons.

## Ordinary equations: order, linearity, and data

The **order** is the highest derivative present. The equation $y''+y=0$ has order two. A linear equation combines $y$ and its derivatives with coefficients that depend only on the independent input. The equation $y''+xy=1$ is linear; $y''+y^2=1$ is nonlinear. The inhomogeneous term $1$ does not make an equation nonlinear.

Use [[First-order initial value problems]] to learn what a solution means and when one exists uniquely. Then study [[First-order solution methods]], [[Implicit equations and singular solutions]], and [[Numerical solution of initial value problems]]. Follow with [[Linear equations and order reduction]] and [[Constant-coefficient equations and systems]]. These lessons extend the existing foundation in [[14.01 Equation types]] and [[14.02 Solutions and data]].

An initial-value problem supplies data at one input. For $y''+y=0$, prescribing $y(0)=0$ and $y'(0)=1$ gives $y=\sin x$. A boundary-value problem supplies conditions at different inputs. Prescribing $y(0)=y(\pi)=0$ permits $y=B\sin x$ for every $B$. The second boundary condition cannot select $B$ because $\sin\pi=0$. [[Boundary eigenvalue problems]] explains how this apparent failure leads to useful eigenfunctions.

## Partial equations: geometry and function data

PDE data usually consist of functions, rather than a few numbers. For $u_t+u_x=0$, the condition $u(x,0)=g(x)$ assigns an output to every point on the initial line. The solution $u(x,t)=g(x-t)$ carries those values along the lines $x-t=\text{constant}$. The chain rule checks the equation. This is the starting example in [[Characteristics for first-order PDEs]].

Read [[Classification of second-order PDEs]] before [[Wave diffusion and potential equations]]. The highest derivative terms determine a local classification, but they do not determine all solution properties. Boundary geometry, coefficient regularity, and the chosen data remain essential. In particular, solving a heat equation forward and solving it backward have very different stability properties even though the displayed equation is unchanged.

The later lessons use the same mathematical tools in special equation families. [[Schrödinger evolution and probability]] introduces complex functions and a dimensionless linear evolution equation. [[Box central-field and oscillator eigenfunctions]] works through its interval, radial, and quadratic-coefficient examples. First use [[06.03 Conjugation and modulus]] and [[06.05 Euler’s formula]] if complex numbers are unfamiliar. [[Nonlinear evolution patterns and chaos]] and [[Travelling solitary waves]] then show why nonlinear equations require more than adding elementary modes.

## A reliable study routine

For each problem, write the domain and all data before selecting a method. Identify points at which division would remove a solution or a coefficient would vanish. After calculation, differentiate the candidate and substitute into the original equation, rather than only into an intermediate transformed equation. Finally check every initial or boundary value. If a theorem is used, check its assumptions on the actual interval.

## Practice

1. Classify $y''+x y'=x^2$ by order and linearity. Is $y(0)=1$ sufficient initial data for a unique solution near zero?
2. Check $u(x,t)=(x-2t)^2$ in $u_t+2u_x=0$ and find its initial data.

## Worked answers

1. It is a second-order linear ODE. Its coefficients are continuous and its leading coefficient is $1$, but a second-order initial problem also needs $y'(0)$. One prescribed value leaves an independent slope free.
2. The chain rule gives $u_t=-4(x-2t)$ and $u_x=2(x-2t)$. Their combination is $-4(x-2t)+4(x-2t)=0$. At $t=0$, the initial function is $u(x,0)=x^2$.

<!-- catalogue-complete-lesson-index:start -->
## Complete lesson index

Read the prerequisite route above before the advanced lessons. The source topic links are in [[Planned Topics#9. Differential equations|the detailed catalogue]].

- [[First-order initial value problems|First-order initial value problems]] — 9.1.1, 9.1.1.1.
- [[First-order solution methods|First-order solution methods]] — 9.1.1.2.
- [[Implicit equations and singular solutions|Implicit equations and singular solutions]] — 9.1.1.3, 9.1.1.4.
- [[Numerical solution of initial value problems|Numerical solution of initial value problems]] — 9.1.1.5.
- [[Linear equations and order reduction|Linear equations and order reduction]] — 9.1.2, 9.1.2.1, 9.1.2.2, 9.1.2.3, 9.1.2.6.
- [[Constant-coefficient equations and systems|Constant-coefficient equations and systems]] — 9.1.2.4, 9.1.2.5.
- [[Boundary eigenvalue problems|Boundary eigenvalue problems]] — 9.1.3, 9.1.3.1, 9.1.3.2, 9.1.3.3, 9.1.3.4.
- [[Characteristics for first-order PDEs|Characteristics for first-order PDEs]] — 9.2.1, 9.2.1.1, 9.2.1.2.
- [[Classification of second-order PDEs|Classification of second-order PDEs]] — 9.2.2, 9.2.2.1, 9.2.2.2, 9.2.2.3.
- [[Wave diffusion and potential equations|Wave, diffusion, and potential equations]] — 9.2.3, 9.2.3.1, 9.2.3.2, 9.2.3.3, 9.2.3.4.
- [[Schrödinger evolution and probability|Schrödinger evolution and probability]] — 9.2.4, 9.2.4.1, 9.2.4.2, 9.2.4.3, 9.2.4.4.
- [[Box central-field and oscillator eigenfunctions|Box, central-field, and oscillator eigenfunctions]] — 9.2.4.5, 9.2.4.6, 9.2.4.7.
- [[Nonlinear evolution patterns and chaos|Nonlinear evolution, patterns, and chaos]] — 9.2.5, 9.2.5.1.
- [[Travelling solitary waves|Travelling solitary waves]] — 9.2.5.2, 9.2.5.3, 9.2.5.4, 9.2.5.5.
<!-- catalogue-complete-lesson-index:end -->
