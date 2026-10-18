---
title: "Characteristics for first-order PDEs"
catalogue_ids:
  - "9.2.1"
  - "9.2.1.1"
  - "9.2.1.2"
---

> [!TLDR]
> Characteristics convert a first-order PDE to ODEs along curves; nonlinear characteristic crossing can end a smooth solution.

## Partial derivatives and curves

Read [[12.02 Partial derivatives]], [[12.04 Multivariable chain rules]], and [[First-order initial value problems]]. For $u(x,t)$, $u_x$ differentiates one input while the other stays fixed. A PDE such as $u_t+a(x,t)u_x=b(x,t)u+c(x,t)$ specifies a relation between these local changes. This is linear because its coefficients do not depend on the unknown $u$.

Along a curve $x=x(t)$ the chain rule gives

$$
\frac{d}{dt}u(x(t),t)=u_t+x'(t)u_x.
$$

Choose $x'=a(x,t)$. The PDE reduces to the ODE $du/dt=b(x,t)u+c(x,t)$ on that curve. Such a curve is a **characteristic**. Solve one curve from each initial point, solve the output ODE on it, then eliminate the label of the initial point. This converts a two-input problem into a family of one-input problems.

## Worked linear transport problem

Solve $u_t+2u_x=u$ with $u(x,0)=x^2$ on the real line. Label the starting point by $\xi$. The characteristic solves $x'=2$, $x(0)=\xi$, hence $x=\xi+2t$. Along it, $du/dt=u$ with $u(0)=\xi^2$, so $u=e^t\xi^2$. Since $\xi=x-2t$,

$$
u(x,t)=e^t(x-2t)^2.
$$

Direct derivatives give $u_t=e^t(x-2t)^2-4e^t(x-2t)$ and $u_x=2e^t(x-2t)$. Adding $2u_x$ to $u_t$ leaves $u$. At $t=0$ the function is $x^2$ as required. The changing exponential amplitude comes from the source term; transport alone would preserve the values along each characteristic.

![[catalogue-ch09-characteristics.svg|**Fig. C.ch09.1** Linear transport has parallel characteristics. A decreasing profile in the nonlinear example gives converging characteristics that meet at a finite input.]]

The left panel of Fig. C.ch09.1 represents the direction geometry of constant-coefficient transport. The right panel shows why a nonlinear equation can cease to describe a single smooth output even when every characteristic ODE remains easy to solve.

## Data must cross the characteristic direction

For a general equation $a(x,t)u_x+b(x,t)u_t=c(x,t,u)$, prescribe $u$ on a curve $(x_0(s),t_0(s))$. A local reconstruction needs the initial curve to be **noncharacteristic**:

$$
x_0'(s)b(x_0,t_0)-t_0'(s)a(x_0,t_0)\ne0.
$$

The curve tangent must not be parallel to the PDE direction. With sufficiently smooth coefficients and data this condition permits a local coordinate map from starting label and characteristic parameter to $(x,t)$. It does not guarantee a global solution after those coordinates fold or leave the domain.

For $u_t+u_x=0$, the line $t=0$ is noncharacteristic and can carry arbitrary differentiable initial data. The line $x=t$ is itself a characteristic. Data $u(t,t)=t$ are impossible because $u$ must stay constant along that line. Constant data on this line are compatible, but do not determine outputs on other characteristics. Thus tangential data can be inconsistent or insufficient.

## Quasilinear equations and characteristic crossing

An equation is **quasilinear** if the highest derivatives occur linearly but their coefficients may depend on $u$. The nonlinear equation

$$
u_t+u u_x=0,\qquad u(x,0)=g(x),
$$

has $du/dt=0$ along $x'=u$. Hence $u=g(\xi)$ and $x=\xi+t g(\xi)$. The label can be recovered locally where $1+t g'(\xi)\ne0$. Differentiating the implicit formula gives

$$
u_x=\frac{g'(\xi)}{1+t g'(\xi)}.
$$

A zero denominator can produce an unbounded slope. For the exact data $g(\xi)=-\xi$, $x=(1-t)\xi$, so $u=-x/(1-t)$ for $t<1$. At $t=1$, all these characteristics meet at $(0,1)$ and would assign different outputs there. No single classical solution continues through that event. A weak solution is a different notion, not a multi-valued classical graph.

In conservation form the equation is $u_t+(u^2/2)_x=0$. Across a discontinuity separating constant values $u_L,u_R$, integral conservation requires the jump to move with slope $s=(u_L+u_R)/2$. For $u_L>u_R$, characteristics enter that jump, consistent with the entropy shock. For the opposite ordering the admissible solution is a spreading rarefaction. Deriving general weak-solution and entropy theory needs additional analysis; this lesson identifies where the smooth method ends.

## Fully nonlinear first-order equations

An equation such as $u_t+(u_x)^2=0$ is fully nonlinear in first derivatives. One cannot directly use $x'=u$ as in the previous example. For the Hamilton–Jacobi form $u_t+H(u_x)=0$, set $p=u_x$. In a smooth region, differentiating yields $p_t+H'(p)p_x=0$. Thus $p$ is constant along $x'=H'(p)$, while along that curve $du/dt=pH'(p)-H(p)$.

For $H(p)=p^2$ and data $u(x,0)=kx$, $p=k$ is constant. The formula $u=kx-k^2t$ follows, and direct substitution gives $-k^2+k^2=0$. More general data require solving for the initial slope and checking characteristic crossing. The distinction between quasilinear and fully nonlinear changes the characteristic construction.

## Practice

1. Solve $u_t-3u_x=0$ with $u(x,0)=\cos x$.
2. For $u_t+u u_x=0$ with $g(\xi)=\xi$, solve for $u$ and find the forward-time region where the label map is invertible.

## Worked answers

1. Characteristics are $x=\xi-3t$, so $\xi=x+3t$. The output stays constant along them, giving $u=\cos(x+3t)$. Its derivatives satisfy $u_t-3u_x=-3\sin(x+3t)+3\sin(x+3t)=0$.
2. Here $x=(1+t)\xi$, so $u=\xi=x/(1+t)$. For every $t\ge0$, the derivative of the label map is $1+t>0$. It is invertible for all forward time, although it fails at the backward time $t=-1$.

## Further reading

Julie Levandosky’s [Stanford first-order PDE notes](https://web.stanford.edu/class/math220a/handouts/firstorder.pdf) give the characteristic construction and its noncharacteristic-data condition.
