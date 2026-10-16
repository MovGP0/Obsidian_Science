---
title: "Interpreting and rebuilding the metric"
source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"
video_chapter: "Interpreting g_munu and B_mu, Reassembling g_AB"
video_start: "01:18:18"
video_end: "01:26:18"
document_type: "Original self-study chapter with added derivations and exercises"
---

> [!TLDR]
> Rebuilding the metric, its inverse, and its determinant verifies the decomposition and explains which four-dimensional geometry is independent of the circle’s coordinate origin.

## Rebuild the original matrix

From [[KK 06 Algebraic decomposition of the metric]], the line element is

$$
\mathrm d\mechanical{s}_5^{\,2}
=g_{\mu\nu}\,\mathrm d\mechanical{x}^\mu\mathrm d\mechanical{x}^\nu
+\mechanical{\Phi}^{\,2}
\left(\mathrm d\mechanical{y}+\mechanical{\kappa}\electric{A}_\mu\,\mathrm d\mechanical{x}^\mu\right)^2.
$$

Expanding the square gives the original components:

$$
\widetilde g_{\mu\nu}=g_{\mu\nu}
+\mechanical{\kappa}^{\,2}\mechanical{\Phi}^{\,2}\electric{A}_\mu\electric{A}_\nu,
\quad
\widetilde g_{\mu5}=\mechanical{\kappa}\mechanical{\Phi}^{\,2}\electric{A}_\mu,
\quad
\widetilde g_{55}=\mechanical{\Phi}^{\,2}.
\tag{7.1}
$$

The upper-left block includes both the base metric and a vector-dependent contribution. It is therefore important to distinguish it from $g_{\mu\nu}$.

## Horizontal displacement and coordinate slices

A displacement satisfying

$$
\mathrm d\mechanical{y}
=-\mechanical{\kappa}\electric{A}_\mu\,\mathrm d\mechanical{x}^\mu
\tag{7.2}
$$

has no component in the shifted circular direction. For this displacement, the interval is determined by the base metric alone. Such a displacement is called horizontal.

A displacement at fixed circular coordinate is different. Setting $\mathrm d\mechanical{y}=0$ leaves the vector contribution in the interval. Thus the metric induced on an arbitrary fixed-coordinate slice is not generally the same as the base metric.

This distinction is useful later: changing the local origin of the circle changes the slice, but it does not change the base geometry.

## Derive and check the inverse

Raise vector indices with the base inverse metric. The full inverse is

$$
\widetilde g^{AB}=
\begin{pmatrix}
g^{\mu\nu}&-\mechanical{\kappa}\electric{A}^\mu\\
-\mechanical{\kappa}\electric{A}^\nu
&\mechanical{\Phi}^{-2}+\mechanical{\kappa}^{\,2}\electric{A}_\rho\electric{A}^\rho
\end{pmatrix}.
\tag{7.3}
$$

Check the upper-left product. It contains an identity term from $g_{\mu\nu}g^{\nu\rho}$ and two vector products with equal magnitudes and opposite signs. The vector products cancel. The upper-right product similarly vanishes. This verifies the inverse without guessing individual components.

The inverse is needed for curvature, field equations, and the scalar wave operator. Do not invert the upper-left block separately and call that the upper-left part of the full inverse.

## Derive the determinant

The Schur complement gives

$$
\det\widetilde g
=\mechanical{\Phi}^{\,2}\det g,
\qquad
\sqrt{-\det\widetilde g}
=\mechanical{\Phi}\sqrt{-\det g},
\tag{7.4}
$$

where the positive radius branch is used. A block row operation proves the result: subtract the mixed column times its transpose divided by the fifth diagonal entry. This leaves the base metric as the complementary block. The vector drops out of the determinant.

## Worked consistency check

If the vector vanishes and the radius factor is one, the metric becomes a direct product. Equation (7.3) becomes a block-diagonal inverse, and equation (7.4) gives equal four- and five-dimensional determinant factors. All three constructions reduce correctly.

## Self-check

1. Does a nonzero mixed metric component by itself imply a physical electromagnetic field?
2. Why does the vector drop out of the volume determinant?

### Answers

1. No. A coordinate change can generate a pure-gauge potential with zero field strength. The next chapters give an example.
2. The vector enters through a unit-determinant triangular change of the differential basis. The only extra volume factor is the circle’s radius factor.

For invariant volume elements, see [[1.7 Metric determinant]].

## Source and navigation

[Video segment 01:18:18–01:26:18](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=4698s). These are original study notes for the segment topic, with added calculations and exercises. They are not a transcript or a line-by-line reconstruction of the segment.

[[Kaluza-Klein - Study Guide#Notation and units|Notation, units, and sources]] · Previous: [[KK 06 Algebraic decomposition of the metric]] · Next: [[KK 08 Identifying the U(1) gauge potential]]

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}^\mu,\;\mechanical{y}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{s}_5$ | $\unit{GeV^{-1}}$ | Interval or spatial length | Separation specified by the relevant line element. |
| $g_{\mu\nu}$ | $1$ | Metric fields | Metric coefficients for length-valued coordinates; an angular coefficient instead carries the required length factors. |
| $\mechanical{\Phi}$ | $1$ | Radion | Ratio of the physical circular radius to the reference radius. |
| $\mechanical{\kappa}$ | $\unit{GeV^{-1}}$ | Metric coupling scale | Scale between the canonical electromagnetic potential and the metric shift. |
| $\electric{A}_\mu,\;\electric{A}^\mu$ | $\unit{GeV}$ | Potential components | Canonically normalized electromagnetic potential components. |
