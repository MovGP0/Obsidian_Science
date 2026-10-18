---
title: "Conjugacy and structural stability"
catalogue_ids:
  - "17.1.2.6"
  - "17.1.3.3"
  - "17.1.4"
  - "17.1.4.1"
  - "17.1.4.2"
  - "17.1.4.3"
---

> [!TLDR]
> Conjugacy changes coordinates while preserving iteration; structural stability asks whether small changes of the rule preserve its qualitative behavior.

## Conjugacy of maps

Two maps $f:X\to X$ and $g:Y\to Y$ are **topologically conjugate** if there is a homeomorphism $h:X\to Y$ with

$$
h\circ f=g\circ h.
$$

A homeomorphism is a bijection that is continuous in both directions. It changes labels without tearing or merging the state space. Induction gives $h(f^n(x))=g^n(h(x))$, so it carries complete forward orbits to forward orbits with the same step count. Fixed points and least periods are preserved. The inverse must be continuous: a bare algebraic bijection can destroy the neighborhood information needed for stability.

For example, let $f(x)=x/2$ on $\mathbb R$ and $h(x)=x^3$. Then $h$ is a homeomorphism with inverse the real cube root. Calculation gives

$$
h(f(x))=x^3/8=g(h(x)),\qquad g(y)=y/8.
$$

The maps contract at different numerical rates but have the same orbit structure under this coordinate change. Derivative-based exponents need stronger regularity of the coordinate change to preserve their values; topological conjugacy alone does not do that.

## Equivalence of flows

For flows, a time-preserving conjugacy requires $h(\phi_t(x))=\psi_t(h(x))$ for every allowed $t$. A weaker **orbit equivalence** carries oriented trajectories to oriented trajectories while allowing a continuous increasing change of the parameter along each trajectory. The distinction matters. The equations $x'=-x$ and $x'=-2x$ trace the same oriented half-lines but move at different speeds. The identity map gives orbit equivalence with new parameter $2t$, though it is not a time-preserving conjugacy.

Near a hyperbolic equilibrium, the Hartman–Grobman theorem gives a local topological comparison with the linearized system. Precise flow formulations may use a time change. In either form the conclusion concerns a neighborhood of the equilibrium, not the entire global portrait. It does not say that the nonlinear trajectories are straight, or that a smooth linearizing coordinate change always exists.

## Structural stability

Structural stability concerns changes to the **rule**, rather than changes to the initial state. Specify the space of rules, its topology, and the domain. A $C^1$-small change keeps both values and first derivatives close on the specified compact domain. A structurally stable system has a neighborhood of rules all equivalent to it in the chosen sense. Initial-state Lyapunov stability from [[Flows and linear stability]] is a different property.

## Robust flows

Consider $x'=-x$ near zero. Small $C^1$ perturbations retain a nearby hyperbolic attracting equilibrium. Its exact coordinate can shift, so robustness does not mean the equation or the equilibrium stays numerically unchanged. By contrast, $x'=x^2$ has a nonhyperbolic zero. The arbitrarily small perturbation $x'=x^2+\varepsilon$ removes the equilibrium for $\varepsilon>0$, and gives two for $\varepsilon<0$. There cannot be a local equivalence preserving the number of equilibria across this change.

A useful global class on compact manifolds is **Morse–Smale**: the nonwandering set is a finite collection of hyperbolic equilibria and periodic orbits, and their stable and unstable manifolds meet transversely. Nonwandering means that every neighborhood has returns after arbitrarily large times. Transverse intersection means the tangent directions of the two manifolds together span the ambient tangent space. Morse–Smale systems are structurally stable. This is a deep theorem, not a consequence of just counting equilibria. [Araújo and Viana's account of hyperbolic dynamics](https://arxiv.org/abs/0804.3192) describes the global stability result and its historical setting.

## Robust maps

For $f_a(x)=ax$ with $0<a<1$, the origin remains attracting as $a$ changes slightly within that interval. The local derivative test is $|f_a'(0)|<1$. At $a=1$, the whole line consists of fixed points, while $a<1$ has only one. That boundary is not robust.

For diffeomorphisms on compact manifolds, Morse–Smale maps have finitely many hyperbolic periodic orbits as their nonwandering set and transverse stable/unstable intersections. They too are structurally stable. A map with a robust hyperbolic fixed point need not be globally structurally stable: changes elsewhere can create other orbit structures. Always state whether a conclusion is local or global.

## Generic does not mean universal

A **generic** property is usually one that holds on a residual set: a set containing a countable intersection of open dense subsets of the chosen function space. Dense means arbitrarily near every rule; open means small further changes preserve membership. Residual sets in suitable complete spaces are topologically large. “Almost every” instead concerns a specified measure and a measure-zero exceptional set. Neither term means “every.”

For $C^r$ diffeomorphisms of a compact smooth manifold, with $r\ge1$, hyperbolicity of all periodic points is a generic property. It does not by itself imply global structural stability. In higher dimensions, one cannot assert that all generic systems are Morse–Smale. The relevant distinction is discussed in [Araújo and Viana's account of hyperbolic dynamics](https://arxiv.org/abs/0804.3192).

## Practice

1. Let $f(x)=x/3$ and $h(x)=x^5$. Find the conjugate $g=h\circ f\circ h^{-1}$.
2. Is a stable initial condition enough to prove structural stability? Use $x'=0$ to explain.

## Worked answers

1. Put $y=x^5$. Then $h(f(x))=(x/3)^5=y/243$, so $g(y)=y/243$. Since the real fifth power is a homeomorphism, this is a genuine conjugacy on $\mathbb R$.
2. No. Every equilibrium of $x'=0$ is stable with respect to initial displacements, since each solution stays where it starts. An arbitrarily small constant perturbation $x'=\varepsilon\ne0$ removes all equilibria on the line. The qualitative orbit structure changes.
