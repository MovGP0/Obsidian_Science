---
title: "Algebraic decomposition of the metric"
document_type: "Self-contained study chapter"
---

> [!TLDR]
> Completing the square separates a symmetric five-dimensional metric into a four-dimensional metric, a vector field, and a radius field.

%% source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"; video_chapter: "Dissecting g_AB into g_munu, B_mu, and Phi"; video_start: "01:00:41"; video_end: "01:18:18" %%

<!-- visual-source:start -->
## Geometric and field equations

Use natural units: the speed of light and reduced Planck constant are one. Greek indices run from 0 to 3; capital Latin indices run from 0 to 4. For spacetime calculations in this first section, use a mostly-minus metric: one positive time direction and four negative spatial directions. Euclidean distance examples are identified separately. The compact angle is dimensionless and has period two pi. Its physical radius has units of length. The scalar with subscript ang is the physical radius squared; it is not a dimensionless radion. The parameter xi is a dimensionless normalization of the mixed vector.

### Separate the index sum %% Video 01:01:00–01:06:20 %%

Separate the upper four-by-four block, the four mixed components, and the bottom-right scalar. For $\mathrm d\mechanical{x}^4=\mathrm d\mechanical{\theta}$ and a fixed radius,

$$
\mathrm d\mechanical{\widetilde s}^{\,2}
=\widetilde g_{\mu\nu}\,\mathrm d\mechanical{x}^\mu\mathrm d\mechanical{x}^\nu
+2\widetilde g_{\mu4}\,\mathrm d\mechanical{x}^\mu\mathrm d\mechanical{\theta}
-\mechanical{\Phi}_{\mathrm{ang}}(\mathrm d\mechanical{\theta})^2.
$$

The factor two joins the two equal mixed terms. No gravitational equation or electromagnetic equation has been used in this separation.

### Complete the square without dropping a term %% Video 01:07:40–01:12:40 %%

Add and subtract the same base-space product to complete the square:

$$
\begin{aligned}
\mathrm d\mechanical{\widetilde s}^{\,2}
={}&\left(\widetilde g_{\mu\nu}
+\frac{\widetilde g_{\mu4}\widetilde g_{\nu4}}{\mechanical{\Phi}_{\mathrm{ang}}}\right)
\mathrm d\mechanical{x}^\mu\mathrm d\mechanical{x}^\nu\\
&-\mechanical{\Phi}_{\mathrm{ang}}
\left(\mathrm d\mechanical{\theta}
-\frac{\widetilde g_{\mu4}}{\mechanical{\Phi}_{\mathrm{ang}}}\mathrm d\mechanical{x}^\mu\right)^2.
\end{aligned}
$$

Expanding the last square produces the original mixed term and a negative base-space product. That negative product cancels the added positive product. This is why the adjusted four-dimensional tensor differs from the original upper block.

### Define the two new fields %% Video 01:13:00–01:17:40 %%

The cylinder condition makes the mixed components independent of the circle coordinate. Normalize them and define the adjusted base tensor:

$$
\electric{B}_\mu(\mechanical{t},\mechanical{x},\mechanical{y},\mechanical{z})
\equiv\frac{\widetilde g_{\mu4}}{\mechanical{\Phi}_{\mathrm{ang}}},
\qquad
g_{\mu\nu}\equiv\widetilde g_{\mu\nu}
+\mechanical{\Phi}_{\mathrm{ang}}\electric{B}_\mu\electric{B}_\nu.
$$

The interval becomes

$$
\mathrm d\mechanical{\widetilde s}^{\,2}
=g_{\mu\nu}\,\mathrm d\mechanical{x}^\mu\mathrm d\mechanical{x}^\nu
-\mechanical{\Phi}_{\mathrm{ang}}
\left(\mathrm d\mechanical{\theta}-\electric{B}_\mu\,\mathrm d\mechanical{x}^\mu\right)^2.
$$

These definitions are algebraic. The adjusted base tensor must still be checked under coordinate transformations, and the mixed vector must still be checked under local circular shifts. Its electromagnetic dynamics requires an action.

<!-- visual-source:end -->

## Length-coordinate convention for the worked derivation

The following worked derivation uses a length coordinate y with period two pi times the reference radius and the mostly-plus metric. To translate the angular calculation above at fixed radius: set y equal to radius times angle, reverse the sign of the full metric, and reverse the sign of the potential. The length-valued coupling kappa equals radius times xi. The field-strength tensor reverses sign with the potential. The two mixed vectors called B also have different coordinate units: the length-coordinate B equals minus the reference radius times the angular-coordinate B. The first has no units; the second has units of inverse length. The dimensionless radion Phi is the physical radius divided by the reference radius; the earlier squared-radius scalar equals reference radius squared times Phi squared. In this later notation, an index labeled 5 denotes the same compact direction labeled 4 in the first calculation; it does not add another coordinate. The algebra below defines its own variables before using them.

## Start without a physical interpretation

Write a symmetric metric in block form:

$$
\widetilde g_{AB}=
\begin{pmatrix}
H_{\mu\nu}&C_\mu\\
C_\nu&D
\end{pmatrix}.
$$

The symbols $H$, $C$, and $D$ are temporary algebraic block labels. They are not additional physical fields beyond the metric. Assume that the distinguished fifth direction is spacelike, so $D>0$ in the coordinate patch under consideration.

The line element is

$$
\mathrm d\mechanical{s}_5^{\,2}
=H_{\mu\nu}\,\mathrm d\mechanical{x}^\mu\mathrm d\mechanical{x}^\nu
+2C_\mu\,\mathrm d\mechanical{x}^\mu\mathrm d\mechanical{y}
+D\,\mathrm d\mechanical{y}^{\,2}.
\tag{6.1}
$$

Define the scalar and the mixed vector by

$$
\mechanical{\Phi}=\sqrt D,
\qquad
\electric{B}_\mu=\frac{C_\mu}{D}.
\tag{6.2}
$$

The vector $\electric{B}_\mu$ is a normalized metric shift. It is not the magnetic flux density.

## Complete the square explicitly

Expand

$$
D\left(\mathrm d\mechanical{y}+\electric{B}_\mu\,\mathrm d\mechanical{x}^\mu\right)^2
=D\,\mathrm d\mechanical{y}^{\,2}
+2C_\mu\,\mathrm d\mechanical{x}^\mu\mathrm d\mechanical{y}
+\frac{C_\mu C_\nu}{D}\,\mathrm d\mechanical{x}^\mu\mathrm d\mechanical{x}^\nu.
$$

The first two terms are exactly the fifth-direction and mixed terms in equation (6.1). Subtract the extra quadratic term from the four-dimensional block. This defines

$$
g_{\mu\nu}
=H_{\mu\nu}-\frac{C_\mu C_\nu}{D}
=\widetilde g_{\mu\nu}
-\frac{\widetilde g_{\mu5}\widetilde g_{\nu5}}{\widetilde g_{55}}.
\tag{6.3}
$$

Therefore

$$
\mathrm d\mechanical{s}_5^{\,2}
=g_{\mu\nu}\,\mathrm d\mechanical{x}^\mu\mathrm d\mechanical{x}^\nu
+\mechanical{\Phi}^{\,2}
\left(\mathrm d\mechanical{y}+\electric{B}_\mu\,\mathrm d\mechanical{x}^\mu\right)^2.
\tag{6.4}
$$

No field equation has been used. This is a block-matrix identity, also called a Schur-complement decomposition.

## Introduce the electromagnetic normalization

Write $\electric{B}_\mu=\mechanical{\kappa}\electric{A}_\mu$. The constant $\mechanical{\kappa}$ separates the normalization of the physical electromagnetic potential from its contribution to the metric. Its value will be fixed by the action, not by the square-completion identity.

All coordinates in this convention have units of length. The metric and the shift vector are dimensionless. In natural units the canonical potential has units of energy, so $\mechanical{\kappa}$ must have units of inverse energy.

## Worked block example

Consider a two-dimensional spatial block with temporary numerical entries $H=5$, $C=2$, and $D=2$. Then $\mechanical{\Phi}^{\,2}=2$, the shift coefficient is one, and the reduced metric coefficient is $5-4/2=3$. The quadratic form becomes a base contribution with coefficient three plus twice the square of the shifted circular differential. Expanding it returns the original coefficients.

This numerical example checks the subtraction sign in equation (6.3). A plus sign there would fail to reconstruct the original form.

## Self-check

1. Why is the four-dimensional metric not simply the upper-left block of the original matrix?
2. What happens to the decomposition if the fifth diagonal coefficient vanishes?

### Answers

1. The mixed terms contribute an extra base quadratic form when the square is completed. That contribution must be subtracted.
2. This form divides by that coefficient and fails in such a patch. A nondegenerate spacelike circular direction is an assumption of the construction.

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}^\mu,\;\mechanical{y}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{s}_5$ | $\unit{GeV^{-1}}$ | Interval or spatial length | Separation specified by the relevant line element. |
| $g_{\mu\nu},\;\widetilde g_{AB}$ | $1$ | Metric fields | Metric coefficients for length-valued coordinates; an angular coefficient instead carries the required length factors. |
| $\mechanical{\Phi}$ | $1$ | Radion | Ratio of the physical circular radius to the reference radius. |
| $\mechanical{\kappa}$ | $\unit{GeV^{-1}}$ | Metric coupling scale | Scale between the canonical electromagnetic potential and the metric shift. |
| $\electric{B}_\mu$ | $1$ | Metric shift vector | Normalized mixed metric field, distinct from magnetic flux density. |
| $\electric{A}_\mu$ | $\unit{GeV}$ | Potential components | Canonically normalized electromagnetic potential components. |
| $\mechanical{t}$ | $\unit{GeV^{-1}}$ | Time | Time coordinate in the angular formulation’s natural units. |
| $\mechanical{z}$ | $\unit{GeV^{-1}}$ | Spatial coordinate | Third ordinary spatial coordinate. |
| $\mechanical{\widetilde s}$ | $\unit{GeV^{-1}}$ | Five-dimensional interval | Five-dimensional interval in the mostly-minus convention. |
| $\mechanical{\theta}$ | $1$ | Circular angle | Compact circular angle; the spherical-coordinate inset identifies its separate polar-angle use. |
| $\mechanical{\Phi}_{\mathrm{ang}}$ | $\unit{GeV^{-2}}$ | Angular squared radius | Squared physical radius; distinct from the dimensionless radius ratio in the length-coordinate formulation. |
| $\widetilde g_{AB}$ | — | Five-dimensional metric | Component units depend on the length-valued base coordinates and dimensionless angular coordinate. |
| $g_{\mu\nu},g_{ab}$ | $1$ | Angular base metric | Four-dimensional metric or positive spatial example, as identified beside the equation. |
