---
title: "Reducing the Einstein-Hilbert action"
document_type: "Self-contained study chapter"
---

> [!TLDR]
> Integrating the fixed-radius gravitational action around the circle gives Einstein–Maxwell form and fixes the metric-to-potential normalization.

%% source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"; video_chapter: "A Miraculous Proof"; video_start: "02:33:10"; video_end: "02:49:03" %%

<!-- visual-source:start -->
## Geometric and field equations

Use natural units: the speed of light and reduced Planck constant are one. Greek indices run from 0 to 3; capital Latin indices run from 0 to 4. For spacetime calculations in this first section, use a mostly-minus metric: one positive time direction and four negative spatial directions. Euclidean distance examples are identified separately. The compact angle is dimensionless and has period two pi. Its physical radius has units of length. The scalar with subscript ang is the physical radius squared; it is not a dimensionless radion. The parameter xi is a dimensionless normalization of the mixed vector.

### Perform the circle integral %% Video 02:33:20–02:37:40 %%

Start from the five-dimensional Einstein–Hilbert action and separate the four base coordinates from the circular angle:

$$
\energy{\widetilde S}
=-\frac1{16\pi\mechanical{\widetilde G}}
\int\mathrm d^4\mechanical{x}\int_0^{2\pi}\mathrm d\mechanical{\theta}
\sqrt{|\det\widetilde g|}\,\widetilde R.
$$

The cylinder condition makes the integrand independent of the angle. The angular integral therefore gives a factor of $2\pi$, leaving a four-dimensional integration whose integrand still contains the five-dimensional metric determinant and scalar curvature.

### Reduce the determinant by column operations %% Video 02:38:00–02:41:00 %%

For each ordinary column, add xi times the corresponding potential component times the fifth column. In column notation, the operation is

$$
C_\nu\longmapsto C_\nu+\mechanical{\xi}\electric{A}_\nu C_4,
\qquad \nu=0,1,2,3.
$$

The column labels are algebraic helpers, not additional fields. These additions preserve the determinant and give an upper block-triangular matrix:

$$
\det\widetilde g
=\det\begin{pmatrix}
g_{\mu\nu}&\mechanical{\Phi}_{\mathrm{ang}}\mechanical{\xi}\electric{A}_\mu\\
0&-\mechanical{\Phi}_{\mathrm{ang}}
\end{pmatrix}
=-\mechanical{\Phi}_{\mathrm{ang}}\det g.
$$

Since the radius is positive and $\mechanical{\Phi}_{\mathrm{ang}}=\mechanical{r}^{\,2}$,

$$
\sqrt{|\det\widetilde g|}=\mechanical{r}\sqrt{|\det g|},
\qquad
\energy{S}=-\frac{\mechanical{r}}{8\mechanical{\widetilde G}}
\int\mathrm d^4\mechanical{x}\sqrt{|\det g|}\,\widetilde R.
$$

Thus the radius factor comes from the angular metric determinant, while the $2\pi$ comes from the angular coordinate range. Together they give the physical circumference.

### Insert the curvature identity %% Video 02:42:20–02:45:20 %%

The required geometric identity is

$$
\widetilde R=R+\frac{\mechanical{\xi}^{\,2}\mechanical{\Phi}_{\mathrm{ang}}}{4}
\electric{F}_{\mu\nu}\electric{F}^{\mu\nu},
\qquad
\electric{F}_{\mu\nu}=\partial_\mu\electric{A}_\nu-\partial_\nu\electric{A}_\mu.
$$

Inserting the curvature identity gives the two reduced terms:

$$
\begin{aligned}
\energy{S}
&=-\frac{\mechanical{r}}{8\mechanical{\widetilde G}}\int\mathrm d^4\mechanical{x}\sqrt{|\det g|}\,R\\
&\quad-\frac{\mechanical{\xi}^{\,2}\mechanical{r}^{\,3}}{32\mechanical{\widetilde G}}
\int\mathrm d^4\mechanical{x}\sqrt{|\det g|}\,\electric{F}_{\mu\nu}\electric{F}^{\mu\nu}.
\end{aligned}
$$

### Normalize both terms %% Video 02:45:40–02:49:00 %%

Choose the four-dimensional gravitational constant and vector normalization as follows:

$$
\mechanical{G}=\frac{\mechanical{\widetilde G}}{2\pi\mechanical{r}},
\qquad
\mechanical{\xi}^{\,2}=\frac{8\mechanical{\widetilde G}}{\mechanical{r}^{\,3}}
=\frac{16\pi\mechanical{G}}{\mechanical{r}^{\,2}}.
$$

The first choice gives the ordinary gravitational coefficient. The second makes the vector coefficient minus one quarter:

$$
\begin{aligned}
\energy{S}&=-\frac1{16\pi\mechanical{G}}\int\mathrm d^4\mechanical{x}\sqrt{|\det g|}\,R\\
&\quad-\frac14\int\mathrm d^4\mechanical{x}\sqrt{|\det g|}\,\electric{F}_{\mu\nu}\electric{F}^{\mu\nu}.
\end{aligned}
$$

The first definition reproduces the four-dimensional gravitational coefficient. The second gives the Maxwell coefficient minus one quarter. These signs use the mostly-minus curvature convention of this section. The fixed-radius reduction does not include the independent scalar equation.

![[kk-action-reduction.svg|**Fig. 14.1** Circle independence, a fixed radius, the determinant, and curvature reduction give the two four-dimensional action terms.]]

<!-- visual-source:end -->

## Length-coordinate convention for the worked derivation

The following worked derivation uses a length coordinate y with period two pi times the reference radius and the mostly-plus metric. To translate the angular calculation above at fixed radius: set y equal to radius times angle, reverse the sign of the full metric, and reverse the sign of the potential. The length-valued coupling kappa equals radius times xi. The field-strength tensor reverses sign with the potential. The dimensionless radion Phi is the physical radius divided by the reference radius; the earlier squared-radius scalar equals reference radius squared times Phi squared. In this later notation, an index labeled 5 denotes the same compact direction labeled 4 in the first calculation; it does not add another coordinate. The algebra below defines its own variables before using them.

## State the assumptions first

Use a spacelike circle of coordinate circumference $2\pi\mechanical{r}$. Retain fields independent of its coordinate. Set the radius factor to one in this restricted calculation. The base metric and potential may still vary with ordinary spacetime position.

The five-dimensional bulk action is

$$
\energy{S}_5=\frac1{16\pi\mechanical{G}_5}
\int\mathrm d^4\mechanical{x}\int_0^{2\pi\mechanical{r}}\mathrm d\mechanical{y}
\sqrt{-\widetilde g}\,R_5.
$$

Its metric determinant and scalar curvature identities are

$$
\sqrt{-\widetilde g}=\sqrt{-g},
\qquad
R_5=R_4-\frac{\mechanical{\kappa}^{\,2}}4
\electric{F}_{\mu\nu}\electric{F}^{\mu\nu}.
\tag{14.1}
$$

For the determinant, add minus kappa times each potential component times the fifth row to the corresponding base row. The mixed entries vanish, the remaining diagonal blocks are the base metric and one, and the determinant is unchanged. For the curvature contraction, the torsion-free connection gives

$$
\begin{aligned}
\widetilde R_{ab}&=R_{ab}-\frac{\mechanical{\kappa}^{\,2}}2
\electric{F}_{ac}\electric{F}_b{}^c,\\
\widetilde R_{55}&=\frac{\mechanical{\kappa}^{\,2}}4
\electric{F}_{ab}\electric{F}^{ab}.
\end{aligned}
$$

Tracing the first line and adding the second gives the scalar identity, because minus one half plus one quarter equals minus one quarter. Here a and b are orthonormal base indices and the fifth frame direction is spacelike. The full connection expansion and contraction are included in [[KK 15 Deriving the curvature split]]; the action reduction uses these explicit components.

## Integrate the circular coordinate

The integrand is independent of the circular coordinate, so its integral simply multiplies by the circumference:

$$
\begin{aligned}
\energy{S}_5
&=\frac{2\pi\mechanical{r}}{16\pi\mechanical{G}_5}
\int\mathrm d^4\mechanical{x}\sqrt{-g}
\left(R_4-\frac{\mechanical{\kappa}^{\,2}}4\electric{F}_{\mu\nu}\electric{F}^{\mu\nu}\right)\\
&=\int\mathrm d^4\mechanical{x}\sqrt{-g}
\left(
\frac{R_4}{16\pi\mechanical{G}_4}
-\frac{\mechanical{\kappa}^{\,2}}{64\pi\mechanical{G}_4}
\electric{F}_{\mu\nu}\electric{F}^{\mu\nu}
\right),
\end{aligned}
\tag{14.2}
$$

where

$$
\mechanical{G}_4=\frac{\mechanical{G}_5}{2\pi\mechanical{r}}.
$$

Matching the Maxwell coefficient to minus one quarter requires

$$
\mechanical{\kappa}^{\,2}=16\pi\mechanical{G}_4.
\tag{14.3}
$$

This is where the normalization is fixed. It is not an independent free adjustment after the gravitational and electromagnetic terms have been normalized.

## Recover the field equations

Vary the potential while holding the metric fixed. The field-strength variation is the antisymmetric derivative of the potential variation. Antisymmetry combines the two terms; integration by parts then gives

$$
\nabla_\mu\electric{F}^{\mu\nu}=0.
\tag{14.4}
$$

This is the source-free Maxwell equation. Matter couplings would supply a current on its right-hand side. The identity that the exterior derivative of the field strength vanishes supplies the homogeneous Maxwell equations.

Varying the base metric gives

$$
\mathcal G_{\mu\nu}=8\pi\mechanical{G}_4\energy{T}_{\mu\nu}^{\mathrm{EM}},
$$

with

$$
\energy{T}_{\mu\nu}^{\mathrm{EM}}
=\electric{F}_{\mu\rho}\electric{F}_\nu{}^\rho
-\frac14g_{\mu\nu}\electric{F}_{\rho\sigma}\electric{F}^{\rho\sigma}.
\tag{14.5}
$$

The symbol $\mathcal G_{\mu\nu}$ denotes the Einstein tensor, not the gravitational constant. It has curvature units. The electromagnetic stress tensor is traceless in four dimensions.

## Important limit of this calculation

The restricted action has Einstein–Maxwell form. The full five-dimensional theory also has the scalar equation omitted by fixing the radius. These are different variation problems. General Einstein–Maxwell solutions need not solve unrestricted five-dimensional vacuum gravity with constant radion. [[KK 23 Radion and the mass-charge problem]] shows why.

## Worked normalization check

If the coefficient multiplying the squared potential in the metric were rescaled by a factor of two, the induced Maxwell coefficient would be multiplied by four. Restoring canonical normalization would rescale the potential and its matter charge. This illustrates why changing the charge normalization alone cannot repair the later mass–charge problem.

## Show the potential variation term by term

Write the Maxwell action as

$$
\energy{S}_{\mathrm M}
=-\frac14\int\mathrm d^4\mechanical{x}\sqrt{-g}
\electric{F}_{\mu\nu}\electric{F}^{\mu\nu},
\qquad
\delta\electric{F}_{\mu\nu}
=\nabla_\mu\delta\electric{A}_\nu-\nabla_\nu\delta\electric{A}_\mu.
$$

The connection terms cancel in this antisymmetric derivative because the connection has no torsion. At fixed metric, antisymmetry of field strength gives

$$
\begin{aligned}
\delta\energy{S}_{\mathrm M}
&=-\frac12\int\mathrm d^4\mechanical{x}\sqrt{-g}
\electric{F}^{\mu\nu}\delta\electric{F}_{\mu\nu}\\
&=-\int\mathrm d^4\mechanical{x}\sqrt{-g}
\electric{F}^{\mu\nu}\nabla_\mu\delta\electric{A}_\nu\\
&=\int\mathrm d^4\mechanical{x}\sqrt{-g}
\left(\nabla_\mu\electric{F}^{\mu\nu}\right)\delta\electric{A}_\nu.
\end{aligned}
$$

The last equality discards a surface integral for variations with compact support. Requiring stationarity for every potential variation gives the inhomogeneous Maxwell equation with zero current. The homogeneous identity follows independently by expanding

$$
\partial_\lambda\electric{F}_{\mu\nu}
+\partial_\mu\electric{F}_{\nu\lambda}
+\partial_\nu\electric{F}_{\lambda\mu}=0:
$$

every second derivative of a potential component occurs twice with opposite signs.

## Show how metric variation gives electromagnetic stress

Vary the inverse metric and keep the lower-index field strength fixed. The two required identities are

$$
\begin{aligned}
\delta\sqrt{-g}&=-\frac12\sqrt{-g}\,g_{\mu\nu}\delta g^{\mu\nu},\\
\delta\left(\electric{F}_{\rho\sigma}\electric{F}^{\rho\sigma}\right)
&=2\electric{F}_{\mu\rho}\electric{F}_\nu{}^\rho\delta g^{\mu\nu}.
\end{aligned}
$$

The first follows by differentiating the determinant. The second has two equal terms because raising the two indices uses two inverse metrics. Combining them yields

$$
\delta\energy{S}_{\mathrm M}
=-\frac12\int\mathrm d^4\mechanical{x}\sqrt{-g}
\left(\electric{F}_{\mu\rho}\electric{F}_\nu{}^\rho
-\frac14g_{\mu\nu}\electric{F}_{\rho\sigma}\electric{F}^{\rho\sigma}\right)
\delta g^{\mu\nu}.
$$

The expression in parentheses is the stress tensor. The bulk gravitational variation is the same integral with coefficient $\mathcal G_{\mu\nu}/(16\pi\mechanical{G}_4)$ and positive sign. Their sum is stationary exactly when Einstein's equation holds with the electromagnetic stress on its right-hand side.

## Self-check

1. What is lost if the circle integral is omitted?
2. Does the absence of a boundary around the circle remove all boundary issues from the gravitational action?

### Answers

1. The relation between the four- and five-dimensional gravitational constants, including the radius factor.
2. No. The four-dimensional region can still have a boundary, and a metric variation needs the appropriate boundary treatment. See [[4.1.3 General relativity]].

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{r}$ | $\unit{GeV^{-1}}$ | Reference circle radius | Radius encoded in the periodic coordinate identification. |
| $g_{\mu\nu}$ | $1$ | Metric fields | Metric coefficients for length-valued coordinates; an angular coefficient instead carries the required length factors. |
| $\mechanical{\kappa}$ | $\unit{GeV^{-1}}$ | Metric coupling scale | Scale between the canonical electromagnetic potential and the metric shift. |
| $\electric{F}_{\mu\nu},\;\electric{F}^{\mu\nu},\;\electric{F}_{\mu\rho},\;\electric{F}_\nu{}^\rho,\;\electric{F}_{\rho\sigma},\;\electric{F}^{\rho\sigma}$ | $\unit{GeV^2}$ | Electromagnetic field strength | Antisymmetric derivative of the gauge potential, in coordinate or frame components. |
| $\energy{S}_5$ | $1$ | Actions | Actions measured in units of the reduced Planck constant. |
| $\energy{T}_{\mu\nu}^{\mathrm{EM}}$ | $\unit{GeV^4}$ | Electromagnetic stress tensor | Energy, momentum, and stress carried by the electromagnetic field. |
| $\mechanical{G}_4$ | $\unit{GeV^{-2}}$ | Four-dimensional gravitational constant | Coupling in the reduced gravitational action. |
| $\mechanical{G}_5$ | $\unit{GeV^{-3}}$ | Five-dimensional gravitational constant | Coupling in the higher-dimensional gravitational action. |
| $R_4,\;R_5,\;\mathcal G_{\mu\nu}$ | $\unit{GeV^2}$ | Curvature fields | Ricci scalar, Ricci tensor, or Einstein tensor as indicated by the symbol. |
| $\mechanical{\theta}$ | $1$ | Circular angle | Compact circular angle; the spherical-coordinate inset identifies its separate polar-angle use. |
| $\mechanical{\Phi}_{\mathrm{ang}}$ | $\unit{GeV^{-2}}$ | Angular squared radius | Squared physical radius; distinct from the dimensionless radius ratio in the length-coordinate formulation. |
| $\electric{A}_\mu$ | $\unit{GeV}$ | Angular-convention potential | Electromagnetic potential with the angular formulation’s positive-gradient gauge law. |
| $\mechanical{\xi}$ | $1$ | Angular normalization | Dimensionless factor relating the mixed vector to the four-potential. |
| $\mechanical{\widetilde G}$ | $\unit{GeV^{-3}}$ | Gravitational constant | Five-dimensional Newton coupling before the circle integral. |
| $\energy{\widetilde S}$ | $1$ | Actions | Four- and five-dimensional actions in units of the reduced Planck constant. |
| $\widetilde g_{AB}$ | — | Five-dimensional metric | Component units depend on the length-valued base coordinates and dimensionless angular coordinate. |
| $g_{\mu\nu},g_{ab}$ | $1$ | Angular base metric | Four-dimensional metric or positive spatial example, as identified beside the equation. |
| $R,\widetilde R$ | $\unit{GeV^2}$ | Scalar curvature | Four- and five-dimensional scalar curvatures in the angular convention. |
| $\energy{S}_{\mathrm M}$ | $1$ | Maxwell action | Four-dimensional electromagnetic action. |
| $\widetilde R_{ab},\widetilde R_{55}$ | $\unit{GeV^2}$ | Five-dimensional Ricci components | Frame components entering the scalar-curvature contraction. |
