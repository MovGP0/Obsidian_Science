---
title: "Connections and covariant derivatives — overview"
document_type: "Mathematics topic overview"
---

> [!TLDR]
> Differentiate vector and tensor fields consistently when their local basis changes from point to point.

## Scope

Vectors at different points belong to different tangent spaces, so subtracting their component lists is not an intrinsic derivative. A connection supplies a rule for differentiating fields and comparing directions along a curve.

## Starting knowledge

Use partial derivatives from [[Multivariable calculus - Overview]], tensor transformation laws from [[Tensor algebra - Overview]], and metric geometry from [[Metric geometry - Overview]].

## Topics to cover

- [[21.01 The differentiation problem|The differentiation problem]]: show explicitly how differentiating a coordinate-dependent basis adds terms to a component derivative.
- [[21.02 Affine connections|Affine connections]]: linearity properties, the product rule, and the derivative of one vector field along another.
- [[21.03 Connection coefficients|Connection coefficients]]: express a connection in a coordinate basis and derive the vector covariant derivative.
- [[21.04 Covectors and tensors|Covectors and tensors]]: determine the sign of each connection contribution by preserving scalar contractions.
- [[21.05 Transformation behaviour|Transformation behaviour]]: explain why connection coefficients are not tensor components, although a covariant derivative is a tensor.
- [[21.06 Levi-Civita connection|Levi-Civita connection]]: metric compatibility, vanishing torsion, uniqueness, and the resulting Christoffel formula.
- [[21.07 Parallel transport|Parallel transport]]: define transport along a curve and formulate its ordinary differential equation.
- [[21.08 Geodesics|Geodesics]]: derive the parallel-tangent condition, its coordinate equation, and the role of an affine parameter.
- [[21.09 Coordinate examples|Coordinate examples]]: calculate a nonzero connection in flat polar coordinates and distinguish that result from curvature.

## Learning outcomes

After studying this topic, you should be able to:

- Derive the covariant derivative of a covector from the derivative of a scalar pairing.
- Calculate Christoffel symbols for a simple metric and check metric compatibility.
- Write the parallel-transport and geodesic equations for a specified curve or metric.
