---
title: "Local and global bifurcations"
catalogue_ids:
  - "17.3"
  - "17.3.1"
  - "17.3.1.1"
  - "17.3.1.2"
  - "17.3.1.3"
---

> [!TLDR]
> A bifurcation changes qualitative orbit structure as a parameter varies; local derivatives and global connections detect different changes.

## Changing a parameter

Let $\mu$ be a real parameter in a family of equations. A **bifurcation** occurs when arbitrarily small parameter changes near a value change the qualitative orbit structure. Examples are creation of equilibria, exchange of stability, or formation of a connecting orbit. A changed numerical coordinate alone is not a bifurcation: an attracting point can move smoothly without changing its type.

Use [[Flows and linear stability]], [[Manifolds and return maps]], and [[Conjugacy and structural stability]] first. These explain equilibria, eigenvalues, return maps, and equivalence. The examples below include their calculations so that the qualitative language has a concrete meaning.

## Morse–Smale regions and their boundaries

A Morse–Smale system has a finite hyperbolic recurrent structure and transverse stable/unstable manifold intersections. Its structural stability means small changes stay within the same qualitative type. A path through parameter space can leave this region when hyperbolicity fails or a global intersection ceases to be transverse. The system at the boundary need not be Morse–Smale. Thus “bifurcations in Morse–Smale systems” describes changes between such regions, not a claim that structural stability allows a bifurcation while all its conditions persist.

For flows, hyperbolicity fails when an equilibrium eigenvalue reaches the imaginary axis or a transverse cycle multiplier reaches the unit circle. These are candidate local bifurcation points; a crossing and suitable nonzero higher-order coefficients are needed for the familiar generic patterns. A zero eigenvalue alone does not specify which pattern occurs.

## Local bifurcations of equilibria

For the scalar equation $x'=\mu-x^2$, equilibria satisfy $x^2=\mu$. There are none when $\mu<0$, one at zero when $\mu=0$, and two when $\mu>0$. The derivative is $-2x$, so $+\sqrt\mu$ attracts and $-\sqrt\mu$ repels. This is a **saddle-node bifurcation** in one dimension: a stable and an unstable equilibrium appear together. At $\mu=0$, positive states move toward zero, but negative states move away, so zero is not stable from both sides.

Two other normal forms show why a zero eigenvalue needs context. For $x'=\mu x-x^2$, the branches $x=0$ and $x=\mu$ exchange stability at zero; this is transcritical. For $x'=\mu x-x^3$, the zero branch becomes unstable for $\mu>0$ and two stable branches $\pm\sqrt\mu$ appear; this is a supercritical pitchfork. The exact symmetry $x\mapsto-x$ supports the pitchfork. An arbitrary perturbation can break that symmetry, so a pitchfork is not the unrestricted generic one-parameter scalar case.

In two dimensions, consider the smooth system with polar equations $r'=\mu r-r^3$, $\theta'=1$. Its Cartesian form is $u'=\mu u-v-u(u^2+v^2)$, $v'=u+\mu v-v(u^2+v^2)$. The eigenvalues at zero are $\mu\pm i$. For $\mu<0$, the origin attracts. For $\mu>0$, it repels and a periodic circle $r=\sqrt\mu$ attracts radially, since the radial derivative there is $\mu-3\mu=-2\mu$. This is an explicit supercritical **Hopf bifurcation**. The full Hopf theorem requires a simple conjugate eigenvalue pair crossing with nonzero speed and a nonzero nonlinear coefficient; this example satisfies the intended behavior directly.

## Local bifurcations of periodic orbits

A periodic orbit is a fixed point of its return map, so use discrete multipliers. A multiplier crossing $+1$ can create a saddle-node of cycles. For a transverse return coordinate $s$, the normal form $P_\mu(s)=s+\mu-s^2$ has fixed points $s=\pm\sqrt\mu$ for $\mu>0$. Their derivatives are $1\mp2\sqrt\mu$; the positive branch attracts for small positive $\mu$, while the negative branch repels.

A crossing at $-1$ can cause a **flip**, or period doubling. The map $P_\mu(s)=-(1+\mu)s+s^3$ has a fixed zero and, for $\mu>0$, a two-cycle $\{\sqrt\mu,-\sqrt\mu\}$. Each derivative on the cycle is $-1+2\mu$, so the two-step multiplier is $(-1+2\mu)^2<1$ for $0<\mu<1$. Near zero the fixed point is stable for negative $\mu$ and unstable for positive $\mu$. In a flow this represents a doubling of a periodic orbit's return count. Such a flip is unavailable for a regular periodic orbit of an autonomous planar flow, whose one-dimensional return derivative is positive; higher-dimensional return maps allow it.

A complex multiplier pair can cross the unit circle and create an invariant circle in a map, called a Neimark–Sacker bifurcation under suitable nonresonance and nondegeneracy conditions. In a flow, that circle of return points corresponds to an invariant torus. [[Routes to chaos]] explains why a torus itself need not be chaotic.

## Global connections

A **homoclinic orbit** leaves a saddle in backward time and returns to the same saddle in forward time. A **heteroclinic orbit** connects two different invariant objects. These depend on where whole manifolds travel, not only on derivatives at one point.

For $u'=v$, $v'=u-u^3$, the function $H=v^2/2-u^2/2+u^4/4$ has derivative zero. Its level $H=0$ contains loops from the origin back to the origin. One branch obeys $v=\pm u\sqrt{1-u^2/2}$ for $0\le u\le\sqrt2$. Adding a term $-\delta v$ to $v'$ gives $H'=-\delta v^2$. For $\delta\ne0$, a nonconstant homoclinic return to the same zero value of $H$ is impossible: the integral change has a strict sign. The equilibrium remains a saddle for either sign of small $\delta$, since the linear characteristic equation is $\lambda^2+\delta\lambda-1=0$. Its global connection changes while its local saddle type persists.

## Practice

1. At $\mu=1/4$, find and classify the equilibria of $x'=\mu-x^2$.
2. At $\mu=1/4$, verify the two-cycle and multiplier of $P_\mu(s)=-(1+\mu)s+s^3$.

## Worked answers

1. The equilibria are $1/2$ and $-1/2$. The derivative $-2x$ is $-1$ at the positive point and $+1$ at the negative point. Thus the positive point attracts and the negative point repels.
2. The points are $\pm1/2$. Substitution gives $P(1/2)=-5/8+1/8=-1/2$, and odd symmetry gives the return. The derivative at each is $-5/4+3/4=-1/2$. The two-step multiplier is $1/4$, so the cycle is locally attracting.
