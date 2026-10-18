---
title: "Flows and linear stability"
catalogue_ids:
  - "17.1.2"
  - "17.1.2.1"
  - "17.1.2.2"
  - "17.1.2.3"
---

> [!TLDR]
> A differential equation gives a local flow when solutions exist uniquely; linearization tests stability only under suitable conditions.

## Qualitative analysis

For an autonomous ordinary differential equation, write $x'=F(x)$. Autonomous means that the rule has no explicit dependence on the independent variable $t$. Here $t$ is a mathematical parameter, with no physical unit assumed. In a plane, $x=(u,v)$ contains two coordinates and $F$ assigns a direction vector to each point. A **phase portrait** shows the curves traced by solutions, with arrows toward increasing $t$.

Qualitative analysis asks where solutions go without first seeking a closed formula. Find equilibrium points from $F(p)=0$, inspect directions between them, and determine which sets attract or repel nearby solutions. A correct formula remains useful for checking the portrait.

Before this lesson, use [[14.02 Solutions and data]] for initial conditions and [[07.08 Linear approximation]] for derivatives. A derivative gives the slope of a local linear approximation. In several coordinates the corresponding object is a matrix, called the Jacobian.

## When a flow exists

If $F$ is continuous and locally Lipschitz on an open set in $\mathbb R^m$, each initial state has a unique solution for a sufficiently short interval around its initial parameter. “Locally Lipschitz” means that in a small neighborhood there is a finite $L$ with $\|F(x)-F(y)\|\le L\|x-y\|$. A continuously differentiable $F$ satisfies this condition locally. Uniqueness lets us define $\phi_t(x_0)$ and gives the flow identity wherever the compositions exist.

Local existence is not global existence. For $x'=x^2$ with $x(0)=1$, separating variables gives $x(t)=1/(1-t)$. The solution becomes unbounded as $t\to1$ from below. No flow on all of $\mathbb R$ for every positive $t$ follows from local smoothness. A globally Lipschitz vector field on $\mathbb R^m$ does give solutions for all real $t$.

Continuity alone does not guarantee uniqueness. The equation $x'=\sqrt{|x|}$ at zero admits the constant solution and also solutions that stay at zero until a chosen $a\ge0$, then take $x(t)=(t-a)^2/4$ for $t\ge a$. A single initial state then fails to determine one future.

## Linear equations

For $x'=ax$, the solution is $x(t)=x_0e^{at}$. A negative $a$ contracts displacements, a positive $a$ expands them, and zero leaves them constant. For the diagonal system $u'=-u$, $v'=2v$,

$$
u(t)=u_0e^{-t},\qquad v(t)=v_0e^{2t}.
$$

The horizontal axis approaches the origin, but any nonzero $v_0$ eventually moves away. This is a **saddle**. For a matrix equation $x'=Ax$, the solution is $x(t)=e^{tA}x_0$, where $e^{tA}=I+tA+t^2A^2/2!+\cdots$. An eigenvector with eigenvalue $a$ evolves by the scalar factor $e^{at}$. For a complex eigenvalue, its real part determines growth and its imaginary part determines rotation. [[14.06 Linear systems]] develops the matrix method.

![[catalogue-ch17-phase-portrait.svg|**Fig. C.ch17.1** Exact trajectories of u′ = −u and v′ = 2v approach the origin only on the horizontal axis.]]

The two axes in the figure are special solution sets. The curved trajectories cannot cross them. Crossing a unique solution would give two different solutions through one point.

## Stability and linearization

A stable equilibrium has this property: for every allowed error $\varepsilon>0$, there is a starting error $\delta>0$ that keeps the entire future orbit within $\varepsilon$. An asymptotically stable equilibrium is stable and attracts all sufficiently near starts. Attraction alone should not be substituted for the full stability definition. A **hyperbolic** equilibrium has no Jacobian eigenvalues with zero real part.

Writing $x=p+\eta$ gives $\eta'=DF(p)\eta+$ terms smaller than $\|\eta\|$. If every eigenvalue of $DF(p)$ has negative real part, the equilibrium is locally asymptotically stable. A positive real part makes it unstable. Zero real parts need further analysis. The equations $x'=-x^3$ and $x'=x^3$ have the same zero linearization but opposite stability behavior. See [[14.07 Equilibria and stability]].

## Worked example: certify nonlinear attraction

Consider $u'=-u-u^3$ and $v'=-2v$. Only $(0,0)$ is an equilibrium. The Jacobian there is diagonal with entries $-1,-2$, so local attraction follows. We can establish more directly. Put $V=u^2+v^2$. Along each solution,

$$
V'=2u(-u-u^3)+2v(-2v)
=-2u^2-2u^4-4v^2\le-2V.
$$

Thus $e^{2t}V(t)$ is nonincreasing, and $V(t)\le V(0)e^{-2t}$. The state remains bounded and approaches zero. Bounded solutions of this smooth field continue forward, so this proves global forward attraction as well as stability. This example is stronger than the local eigenvalue test because it controls every initial state.

## Practice

1. Solve $u'=3u$, $v'=-v$ and identify the set that approaches zero forward in $t$.
2. Does the linearization of $x'=-x^3$ prove attraction? Use the sign of the right-hand side to decide behavior instead.

## Worked answers

1. The solution is $(u_0e^{3t},v_0e^{-t})$. It approaches zero exactly when $u_0=0$. The vertical axis is the stable set, while the equilibrium is unstable because other arbitrarily near starts leave.
2. The derivative at zero is zero, so the linearization gives no decision. For $x>0$ the derivative is negative and for $x<0$ it is positive. Explicitly $x(t)=x_0/\sqrt{1+2x_0^2t}$ tends to zero and never increases its distance from zero. This proves asymptotic stability.
