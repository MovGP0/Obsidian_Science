---
title: "Manifolds and return maps"
catalogue_ids:
  - "17.1.2.4"
  - "17.1.2.5"
  - "17.1.3.2"
---

> [!TLDR]
> Stable and unstable manifolds organize nearby motion; a return map records repeated crossings of a transverse section.

## A manifold is a locally smooth shape

Read [[Flows and linear stability]] first. A curve in the plane can be described locally by one coordinate along the curve. A smooth surface can be described by two coordinates. Such sets are **manifolds** when each small part has consistent smooth coordinates. A crossing of two lines is not a one-dimensional manifold at the crossing, because it has four local branches rather than two. [[19.01 Local models]] develops the coordinate idea.

An invariant manifold is a manifold that the evolution preserves. It need not fill the state space. A line inside a plane can contain entire trajectories, and so can a curved line. It is useful because motion along it requires fewer coordinates than motion in the full space.

## Invariant manifolds for flows

For a complete flow $\phi_t$ and an equilibrium $p$, define its **stable manifold** as the set of states with $\phi_t(x)\to p$ as $t\to+\infty$. The **unstable manifold** consists of states that approach $p$ as $t\to-\infty$. The second definition requires backward solutions. For a continuously differentiable field at a hyperbolic equilibrium, the stable manifold theorem gives local smooth manifolds tangent to the stable and unstable linear eigenspaces. The proof is advanced, but the distinction between tangency and equality is visible in the next example.

Take $u'=-u$ and $v'=v+u^2$. The solutions satisfy $u=u_0e^{-t}$. Multiplying the second equation by $e^{-t}$ gives $(e^{-t}v)'=u_0^2e^{-3t}$. Therefore

$$
v(t)=e^t\left(v_0+\frac{u_0^2}{3}\right)-\frac{u_0^2}{3}e^{-2t}.
$$

Approach to the origin requires $v_0=-u_0^2/3$. Thus the stable manifold is the parabola $v=-u^2/3$, tangent to the horizontal eigenspace but different from it. Directly on that parabola, $v'=u^2(2/3)$, which equals $(-2u/3)u'$ as required by the chain rule. The unstable manifold is $u=0$: then $v=v_0e^t$ tends to zero backward.

## Invariant manifolds for maps

For an invertible smooth map $f$, replace the flow with iterates: $W^s(p)=\{x:f^n(x)\to p\}$ and $W^u(p)=\{x:f^{-n}(x)\to p\}$. The eigenvalue boundary is now the unit circle. Values of modulus less than one contract forward; values of modulus greater than one contract backward. A hyperbolic fixed point has none on the unit circle. The local stable manifold theorem applies to a continuously differentiable diffeomorphism near such a point.

For $f(u,v)=(u/2,2v)$, iterating gives $(2^{-n}u,2^nv)$. Its stable manifold is $v=0$ and its unstable manifold is $u=0$. Both are lines here because the map is linear. For a noninvertible map, preimages can branch; do not use the inverse-iterate definition without specifying the possible backward orbits.

## A Poincaré return map

Suppose a continuous flow repeatedly crosses a small curve or surface $\Sigma$. Choose it **transverse** to the flow: the direction of motion must cross it rather than lie tangent to it. Starting at $q\in\Sigma$, follow the flow to its next crossing. The resulting map $P(q)=\phi_{\tau(q)}(q)$ is the **Poincaré map**. The positive return time $\tau(q)$ may depend on $q$, and a return need not exist for every starting point.

A periodic orbit crossing $\Sigma$ gives a fixed point of the return map. The map removes the coordinate along the motion and tests deviations across the orbit. For an autonomous flow, the direction along a periodic orbit has multiplier one because shifting the starting position just shifts phase. The other multipliers are the eigenvalues of the derivative of the return map. Attraction requires their moduli to be less than one.

## Worked example: a circle and a radial return

On an annulus around $r=1$, use polar coordinates and the system $r'=-(r-1)$, $\theta'=1$. These are abstract coordinates. Since the annulus excludes zero, the angle coordinate causes no singularity in the calculation. The circle $r=1$ is periodic with period $2\pi$.

Choose the positive radial section $\theta=0$ modulo $2\pi$. After one turn,

$$
r(t)=1+(r_0-1)e^{-t},\qquad
P(r_0)=1+(r_0-1)e^{-2\pi}.
$$

The derivative $P'(1)=e^{-2\pi}<1$ proves transverse attraction. The orbit does not approach one fixed point on the circle: it keeps turning. Its distance to the whole circle tends to zero. This distinction is why the return map is more useful than an equilibrium test for a periodic orbit.

## Practice

1. For $f(u,v)=(3u,v/4)$, find the stable and unstable manifolds of zero.
2. Replace the radial rule above by $r'=2(r-1)$. Find the return derivative and decide stability.

## Worked answers

1. Iteration gives $(3^nu,4^{-n}v)$. Forward convergence requires $u=0$, so the stable manifold is the vertical axis. Backward convergence requires $v=0$, so the unstable manifold is the horizontal axis.
2. The radial displacement after $2\pi$ is $(r_0-1)e^{4\pi}$. Hence $P'(1)=e^{4\pi}>1$ and the periodic orbit repels transverse perturbations. Its continued existence alone does not make it stable.
