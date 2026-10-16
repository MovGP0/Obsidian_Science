---
title: "Full coordinate transformation calculation"
document_type: "Self-contained study chapter"
---

> [!TLDR]
> Applying the tensor transformation law shows that the vector shifts by a gradient while the base metric and radius field remain unchanged.

%% source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"; video_chapter: "\"Part 1.5\", Optional Rigorous Transformation Calculations"; video_start: "01:54:04"; video_end: "02:20:31" %%

<!-- visual-source:start -->
## Geometric and field equations

Use natural units: the speed of light and reduced Planck constant are one. Greek indices run from 0 to 3; capital Latin indices run from 0 to 4. For spacetime calculations in this first section, use a mostly-minus metric: one positive time direction and four negative spatial directions. Euclidean distance examples are identified separately. The compact angle is dimensionless and has period two pi. Its physical radius has units of length. The scalar with subscript ang is the physical radius squared; it is not a dimensionless radion. The parameter xi is a dimensionless normalization of the mixed vector.

### Write all four Jacobian blocks %% Video 01:54:20–02:00:40 %%

The coordinate change leaves ordinary spacetime coordinates fixed and changes only the circular coordinate:

$$
x'^\mu=x^\mu,
\qquad
\mechanical{\theta}'=\mechanical{\theta}+\mechanical{\xi}\varepsilon(\mechanical{x}).
$$

Apply the covariant tensor transformation rule in the direction shown:

$$
\widetilde g_{AB}=\widetilde g'_{CD}
\frac{\partial x'^C}{\partial x^A}
\frac{\partial x'^D}{\partial x^B}.
$$

Its four Jacobian blocks are

$$
\frac{\partial x'^\mu}{\partial x^\nu}=\delta^\mu_\nu,
\qquad
\frac{\partial x'^\mu}{\partial x^4}=0,
\qquad
\frac{\partial x'^4}{\partial x^4}=1,
\qquad
\frac{\partial x'^4}{\partial x^\mu}=\mechanical{\xi}\partial_\mu\varepsilon.
$$

The zeros and ones follow from unchanged ordinary coordinates and the unit coefficient of the old angle. The only nontrivial derivatives are the spacetime derivatives of the circular adjustment.

### Bottom-right component %% Video 02:01:00–02:06:20 %%

When both lower indices are four, all terms involving derivatives of an ordinary primed coordinate with respect to the old angle vanish. The remaining term is

$$
\widetilde g_{44}=\widetilde g'_{44}
\left(\frac{\partial x'^4}{\partial x^4}\right)^2
=\widetilde g'_{44}.
$$

Thus the angular metric component, and therefore the frozen radius, is unchanged by this transformation.

### Mixed component %% Video 02:06:40–02:14:00 %%

For one ordinary and one circular lower index, the nonzero Jacobian factors give

$$
\widetilde g_{\mu4}
=\widetilde g'_{\mu4}+\widetilde g'_{44}\mechanical{\xi}\partial_\mu\varepsilon.
$$

Substitute the metric definitions:

$$
\mechanical{\Phi}_{\mathrm{ang}}\mechanical{\xi}\electric{A}_\mu
=\mechanical{\Phi}_{\mathrm{ang}}\mechanical{\xi}\electric{A}'_\mu
-\mechanical{\Phi}_{\mathrm{ang}}\mechanical{\xi}\partial_\mu\varepsilon.
$$

The circular Jacobian column can also be written in the explicit case form used in the calculation:

$$
\frac{\partial x'^B}{\partial x^4}
=\begin{cases}0,&B=0,1,2,3,\\1,&B=4.\end{cases}
$$

For a nonzero radius and normalization, divide both sides to obtain the positive-gradient potential transformation. The sign follows from the negative angular metric entry; it is not an arbitrary sign inserted after the calculation.

### Base metric and the cancellation %% Video 02:14:20–02:20:20 %%

For two ordinary lower indices, retain four terms:

$$
\begin{aligned}
\widetilde g_{\mu\nu}
={}&\widetilde g'_{\mu\nu}
+\mechanical{\xi}\partial_\nu\varepsilon\,\widetilde g'_{\mu4}
+\mechanical{\xi}\partial_\mu\varepsilon\,\widetilde g'_{4\nu}\\
&+\mechanical{\xi}^{\,2}\partial_\mu\varepsilon\partial_\nu\varepsilon\,\widetilde g'_{44}.
\end{aligned}
$$

Substitution of the metric blocks gives the complete four-term expression

$$
\begin{aligned}
g_{\mu\nu}-\mechanical{\Phi}_{\mathrm{ang}}\mechanical{\xi}^{\,2}\electric{A}_\mu\electric{A}_\nu
={}&g'_{\mu\nu}-\mechanical{\Phi}_{\mathrm{ang}}\mechanical{\xi}^{\,2}\electric{A}'_\mu\electric{A}'_\nu\\
&+\mechanical{\Phi}_{\mathrm{ang}}\mechanical{\xi}^{\,2}\electric{A}'_\mu\partial_\nu\varepsilon\\
&+\mechanical{\Phi}_{\mathrm{ang}}\mechanical{\xi}^{\,2}\electric{A}'_\nu\partial_\mu\varepsilon\\
&-\mechanical{\Phi}_{\mathrm{ang}}\mechanical{\xi}^{\,2}\partial_\mu\varepsilon\partial_\nu\varepsilon.
\end{aligned}
$$

Using the previously proved potential law, the result can be grouped as

$$
\begin{aligned}
g_{\mu\nu}-\mechanical{\Phi}_{\mathrm{ang}}\mechanical{\xi}^{\,2}\electric{A}_\mu\electric{A}_\nu
={}&g'_{\mu\nu}-\mechanical{\Phi}_{\mathrm{ang}}\mechanical{\xi}^{\,2}\\
&\times\left(\electric{A}'_\mu-\partial_\mu\varepsilon\right)
\left(\electric{A}'_\nu-\partial_\nu\varepsilon\right).
\end{aligned}
$$

The two products are equal and cancel. Thus the adjusted base metric is unchanged: $g\prime_{\mu
u}=g_{\mu
u}$. The raw upper-left block is not invariant by itself; the combination that includes the mixed-vector product is invariant.

<!-- visual-source:end -->

## Length-coordinate convention for the worked derivation

The following worked derivation uses a length coordinate y with period two pi times the reference radius and the mostly-plus metric. To translate the angular calculation above at fixed radius: set y equal to radius times angle, reverse the sign of the full metric, and reverse the sign of the potential. The length-valued coupling kappa equals radius times xi. The field-strength tensor reverses sign with the potential. The dimensionless radion Phi is the physical radius divided by the reference radius; the earlier squared-radius scalar equals reference radius squared times Phi squared. In this later notation, an index labeled 5 denotes the same compact direction labeled 4 in the first calculation; it does not add another coordinate. The algebra below defines its own variables before using them.

## Set up the coordinate map and its inverse

Use a cylinder-independent metric and the change

$$
\mechanical{x}^{\mu'}=\mechanical{x}^\mu,
\qquad
\mechanical{y}'=\mechanical{y}+\mechanical{\kappa}\lambda(\mechanical{x}).
$$

The inverse is the old circular coordinate equal to the new one minus the same shift. The Jacobian of old coordinates with respect to new coordinates is

$$
J^A{}_{B'}=
\begin{pmatrix}
\delta^\mu{}_{\nu'}&0\\
-\mechanical{\kappa}\partial_{\nu'}\lambda&1
\end{pmatrix}.
\tag{11.1}
$$

The tensor transformation law is

$$
\widetilde g'_{A'B'}
=J^C{}_{A'}J^D{}_{B'}\widetilde g_{CD}.
\tag{11.2}
$$

It is the same rule as the matrix product $J^{\mathsf T}\widetilde gJ$. The field values are evaluated at corresponding events. Cylinder independence ensures that the transformed coefficients remain functions of the four base coordinates alone.

## Transform the fifth and mixed components

Only the circular derivative survives for the fifth diagonal entry, so

$$
\widetilde g'_{55}=\widetilde g_{55}=\mechanical{\Phi}^{\,2}.
$$

For a mixed entry,

$$
\begin{aligned}
\widetilde g'_{\mu5}
&=\widetilde g_{\mu5}
-\mechanical{\kappa}\widetilde g_{55}\partial_\mu\lambda\\
&=\mechanical{\kappa}\mechanical{\Phi}^{\,2}
\left(\electric{A}_\mu-\partial_\mu\lambda\right).
\end{aligned}
\tag{11.3}
$$

The radius field is unchanged and the potential has the expected gauge transformation.

## Transform the upper-left block

There are four contributions:

$$
\begin{aligned}
\widetilde g'_{\mu\nu}
={}&\widetilde g_{\mu\nu}
-\mechanical{\kappa}\widetilde g_{\mu5}\partial_\nu\lambda
-\mechanical{\kappa}\widetilde g_{\nu5}\partial_\mu\lambda\\
&+\mechanical{\kappa}^{\,2}\widetilde g_{55}
\partial_\mu\lambda\partial_\nu\lambda.
\end{aligned}
\tag{11.4}
$$

Substitute the decomposed entries. The three vector-dependent contributions combine into a product:

$$
\widetilde g'_{\mu\nu}
=g_{\mu\nu}
+\mechanical{\kappa}^{\,2}\mechanical{\Phi}^{\,2}
\left(\electric{A}_\mu-\partial_\mu\lambda\right)
\left(\electric{A}_\nu-\partial_\nu\lambda\right).
\tag{11.5}
$$

Now extract the base metric using the Schur complement:

$$
g'_{\mu\nu}
=\widetilde g'_{\mu\nu}
-\frac{\widetilde g'_{\mu5}\widetilde g'_{\nu5}}{\widetilde g'_{55}}
=g_{\mu\nu}.
\tag{11.6}
$$

The vector product cancels exactly. The unprimed and primed base metrics are equal because the base coordinates themselves were not changed.

## Interpret the result

The full metric components do change. The extracted four-dimensional geometry and the physical circle size do not. The vector potential changes only by a gauge term, so its field strength is unchanged.

This is stronger than component counting. It proves that the three extracted fields separate in a useful way under the relevant subgroup of coordinate transformations.

It is also narrower than a statement about every five-dimensional coordinate transformation. A transformation that mixes the base coordinates with the circle in a more general way need not preserve this same four-dimensional field ansatz. See [[KK 20 General covariance and gauge symmetry]].

## Self-check

1. Why must the inverse-coordinate Jacobian be used in equation (11.2)?
2. Which term would be missed if you kept only the first-order gradient terms in equation (11.4)?
3. Does the calculation require a fixed radion?

### Answers

1. Covariant metric components multiply coordinate differentials. Each old differential is expanded in new differentials using derivatives of old coordinates with respect to new ones.
2. The quadratic gradient term. It is needed for the exact finite transformation and for the cancellation in equation (11.6).
3. No. A positive, cylinder-independent radius field can vary on the base and remains unchanged under this circular-origin shift.

For the general tensor rule, see [[1.1 Vectors, dual vectors, and tensors]].

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}^\mu,\;\mechanical{x},\;\mechanical{y}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $g_{\mu\nu}$ | $1$ | Metric fields | Metric coefficients for length-valued coordinates; an angular coefficient instead carries the required length factors. |
| $\mechanical{\Phi}$ | $1$ | Radion | Ratio of the physical circular radius to the reference radius. |
| $\mechanical{\kappa}$ | $\unit{GeV^{-1}}$ | Metric coupling scale | Scale between the canonical electromagnetic potential and the metric shift. |
| $\electric{A}_\mu$ | $\unit{GeV}$ | Potential components | Canonically normalized electromagnetic potential components. |
| $\mechanical{\theta}$ | $1$ | Circular angle | Compact circular angle; the spherical-coordinate inset identifies its separate polar-angle use. |
| $\mechanical{\Phi}_{\mathrm{ang}}$ | $\unit{GeV^{-2}}$ | Angular squared radius | Squared physical radius; distinct from the dimensionless radius ratio in the length-coordinate formulation. |
| $\mechanical{\xi}$ | $1$ | Angular normalization | Dimensionless factor relating the mixed vector to the four-potential. |
| $\widetilde g_{AB}$ | — | Five-dimensional metric | Component units depend on the length-valued base coordinates and dimensionless angular coordinate. |
| $g_{\mu\nu},g_{ab}$ | $1$ | Angular base metric | Four-dimensional metric or positive spatial example, as identified beside the equation. |
