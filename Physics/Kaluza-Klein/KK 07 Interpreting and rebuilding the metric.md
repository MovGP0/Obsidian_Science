---
title: "Interpreting and rebuilding the metric"
document_type: "Self-contained study chapter"
---

> [!TLDR]
> Rebuilding the metric, its inverse, and its determinant verifies the decomposition and explains which four-dimensional geometry is independent of the circle’s coordinate origin.

%% source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"; video_chapter: "Interpreting g_munu and B_mu, Reassembling g_AB"; video_start: "01:18:18"; video_end: "01:26:18" %%

<!-- visual-source:start -->
## Geometric and field equations

Use natural units: the speed of light and reduced Planck constant are one. Greek indices run from 0 to 3; capital Latin indices run from 0 to 4. For spacetime calculations in this first section, use a mostly-minus metric: one positive time direction and four negative spatial directions. Euclidean distance examples are identified separately. The compact angle is dimensionless and has period two pi. Its physical radius has units of length. The scalar with subscript ang is the physical radius squared; it is not a dimensionless radion. The parameter xi is a dimensionless normalization of the mixed vector.

### Interpret the shifted circular differential %% Video 01:18:20–01:21:40 %%

Assume a metric independent of the circular angle and a constant nonzero radius. Separate the base contribution and shifted-circle contribution:

$$
\mathrm d\mechanical{\widetilde s}^{\,2}
=g_{\mu\nu}\,\mathrm d\mechanical{x}^\mu\mathrm d\mechanical{x}^\nu
-\mechanical{\Phi}_{\mathrm{ang}}
\left(\mathrm d\mechanical{\theta}-\electric{B}_\mu\mathrm d\mechanical{x}^\mu\right)^2.
$$

The first term looks like an ordinary four-dimensional metric interval. The second says that a change in ordinary coordinates can shift which circular displacement is compared with zero. The mixed vector therefore describes how base motion and circular motion enter the full interval together. It is assembled from existing metric entries, not added as an independent fifth-dimensional matter field.

### Rebuild every metric block %% Video 01:22:00–01:26:00 %%

Expand the square again:

$$
\begin{aligned}
\mathrm d\mechanical{\widetilde s}^{\,2}
={}&\left(g_{\mu\nu}-\mechanical{\Phi}_{\mathrm{ang}}\electric{B}_\mu\electric{B}_\nu\right)
\mathrm d\mechanical{x}^\mu\mathrm d\mechanical{x}^\nu\\
&+2\mechanical{\Phi}_{\mathrm{ang}}\electric{B}_\mu\,\mathrm d\mechanical{x}^\mu\mathrm d\mechanical{\theta}
-\mechanical{\Phi}_{\mathrm{ang}}(\mathrm d\mechanical{\theta})^2.
\end{aligned}
$$

Reading its coefficients gives all three types of component:

$$
\widetilde g_{\mu\nu}=g_{\mu\nu}-\mechanical{\Phi}_{\mathrm{ang}}\electric{B}_\mu\electric{B}_\nu,
\qquad
\widetilde g_{\mu4}=\widetilde g_{4\mu}=\mechanical{\Phi}_{\mathrm{ang}}\electric{B}_\mu,
\qquad
\widetilde g_{44}=-\mechanical{\Phi}_{\mathrm{ang}}.
$$

The component equations below specify all entries of the five-dimensional matrix. They can also be arranged as a block matrix:

$$
\widetilde g_{AB}
=\begin{pmatrix}
g_{\mu\nu}-\mechanical{\Phi}_{\mathrm{ang}}\electric{B}_\mu\electric{B}_\nu
&\mechanical{\Phi}_{\mathrm{ang}}\electric{B}_\mu\\
\mechanical{\Phi}_{\mathrm{ang}}\electric{B}_\nu&-\mechanical{\Phi}_{\mathrm{ang}}
\end{pmatrix}.
$$

The displayed component entries are therefore fully specified as follows. The four base diagonal entries are

$$
\begin{aligned}
\widetilde g_{00}&=g_{00}-\mechanical{\Phi}_{\mathrm{ang}}\electric{B}_0^2,\\
\widetilde g_{11}&=g_{11}-\mechanical{\Phi}_{\mathrm{ang}}\electric{B}_1^2,\\
\widetilde g_{22}&=g_{22}-\mechanical{\Phi}_{\mathrm{ang}}\electric{B}_2^2,\\
\widetilde g_{33}&=g_{33}-\mechanical{\Phi}_{\mathrm{ang}}\electric{B}_3^2.
\end{aligned}
$$

The six independent off-diagonal base entries are

$$
\begin{aligned}
\widetilde g_{01}&=g_{01}-\mechanical{\Phi}_{\mathrm{ang}}\electric{B}_0\electric{B}_1,\\
\widetilde g_{02}&=g_{02}-\mechanical{\Phi}_{\mathrm{ang}}\electric{B}_0\electric{B}_2,\\
\widetilde g_{03}&=g_{03}-\mechanical{\Phi}_{\mathrm{ang}}\electric{B}_0\electric{B}_3,\\
\widetilde g_{12}&=g_{12}-\mechanical{\Phi}_{\mathrm{ang}}\electric{B}_1\electric{B}_2,\\
\widetilde g_{13}&=g_{13}-\mechanical{\Phi}_{\mathrm{ang}}\electric{B}_1\electric{B}_3,\\
\widetilde g_{23}&=g_{23}-\mechanical{\Phi}_{\mathrm{ang}}\electric{B}_2\electric{B}_3.
\end{aligned}
$$

The four circular mixed entries are

$$
\begin{aligned}
\widetilde g_{04}&=\mechanical{\Phi}_{\mathrm{ang}}\electric{B}_0,&
\widetilde g_{14}&=\mechanical{\Phi}_{\mathrm{ang}}\electric{B}_1,\\
\widetilde g_{24}&=\mechanical{\Phi}_{\mathrm{ang}}\electric{B}_2,&
\widetilde g_{34}&=\mechanical{\Phi}_{\mathrm{ang}}\electric{B}_3.
\end{aligned}
$$

The lower triangle follows by symmetry, and the remaining diagonal entry is minus the squared radius. %% Bailin–Love 1.7. %% The upper-left entry is a four-by-four block; the upper-right and lower-left entries are four-component column and row blocks. Replacing those blocks by scalar numbers would lose the index content.

<!-- visual-source:end -->

## Length-coordinate convention for the worked derivation

The following worked derivation uses a length coordinate y with period two pi times the reference radius and the mostly-plus metric. To translate the angular calculation above at fixed radius: set y equal to radius times angle, reverse the sign of the full metric, and reverse the sign of the potential. The length-valued coupling kappa equals radius times xi. The field-strength tensor reverses sign with the potential. The two mixed vectors called B also have different coordinate units: the length-coordinate B equals minus the reference radius times the angular-coordinate B. The first has no units; the second has units of inverse length. The dimensionless radion Phi is the physical radius divided by the reference radius; the earlier squared-radius scalar equals reference radius squared times Phi squared. In this later notation, an index labeled 5 denotes the same compact direction labeled 4 in the first calculation; it does not add another coordinate. The algebra below defines its own variables before using them.

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
| $\mechanical{\widetilde s}$ | $\unit{GeV^{-1}}$ | Five-dimensional interval | Five-dimensional interval in the mostly-minus convention. |
| $\mechanical{\theta}$ | $1$ | Circular angle | Compact circular angle; the spherical-coordinate inset identifies its separate polar-angle use. |
| $\mechanical{\Phi}_{\mathrm{ang}}$ | $\unit{GeV^{-2}}$ | Angular squared radius | Squared physical radius; distinct from the dimensionless radius ratio in the length-coordinate formulation. |
| $\electric{B}_\mu$ | $\unit{GeV}$ | Angular metric shift | Mixed angular-coordinate vector before potential normalization; not magnetic flux density. |
| $\widetilde g_{AB}$ | — | Five-dimensional metric | Component units depend on the length-valued base coordinates and dimensionless angular coordinate. |
| $g_{\mu\nu},g_{ab}$ | $1$ | Angular base metric | Four-dimensional metric or positive spatial example, as identified beside the equation. |
