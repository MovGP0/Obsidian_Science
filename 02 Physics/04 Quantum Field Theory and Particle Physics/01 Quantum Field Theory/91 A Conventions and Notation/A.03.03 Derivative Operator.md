---
title: "Derivative Operator"
---

> [!TLDR]
> The covariant derivative operator has spatial components with positive signs. Raising its index changes those signs and gives the usual wave operator on contraction.

The coordinate derivative operators are
$$
\partial_\mu=\frac{\partial}{\partial\mechanical{x}^\mu}
=(\partial_t,\boldsymbol\nabla),
\qquad
\partial^\mu=g^{\mu\nu}\partial_\nu
=(\partial_t,-\boldsymbol\nabla).
\tag{A.7}
$$
The d'Alembert operator is
$$
\Box=\partial^\mu\partial_\mu
=\partial_t^2-\boldsymbol\nabla^2.
\tag{A.8}
$$

The lower index on the coordinate derivative follows from the chain rule: a derivative with respect to an upper-index coordinate transforms oppositely to that coordinate. This explains why the lower-index derivative has positive spatial derivative components, although the lower-index coordinate has negative spatial components.

For a function of time alone, (A.8) reduces to the second time derivative. For a time-independent function it reduces to minus the spatial Laplacian. These checks prevent a common sign error in the Klein–Gordon equation. In curvilinear coordinates or curved spacetime, the displayed Cartesian form of the wave operator must be replaced by the appropriate covariant expression; changing coordinates does not preserve this component formula term by term.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}^\mu$ | $\unit{GeV^{-1}}$ | Spacetime coordinate | The coordinate with respect to which the derivative acts. |
