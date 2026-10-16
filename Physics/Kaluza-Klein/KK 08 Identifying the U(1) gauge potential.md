---
title: "Identifying the U(1) gauge potential"
document_type: "Self-contained study chapter"
---

> [!TLDR]
> The mixed metric field is an electromagnetic candidate because local shifts of the circular coordinate induce the usual gradient shift of a U(1) potential.

%% source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"; video_chapter: "Defining A_mu, a U(1) Gauge Field in the Metric Tensor"; video_start: "01:26:18"; video_end: "01:30:50" %%

<!-- visual-source:start -->
## Geometric and field equations

Use natural units: the speed of light and reduced Planck constant are one. Greek indices run from 0 to 3; capital Latin indices run from 0 to 4. For spacetime calculations in this first section, use a mostly-minus metric: one positive time direction and four negative spatial directions. Euclidean distance examples are identified separately. The compact angle is dimensionless and has period two pi. Its physical radius has units of length. The scalar with subscript ang is the physical radius squared; it is not a dimensionless radion. The parameter xi is a dimensionless normalization of the mixed vector.

### Normalize the mixed vector %% Video 01:26:20–01:28:00 %%

Introduce a real constant normalization:

$$
\electric{B}_\mu=\mechanical{\xi}\electric{A}_\mu.
$$

$$
\widetilde g_{AB}
=\begin{pmatrix}
g_{\mu\nu}-\mechanical{\Phi}_{\mathrm{ang}}\mechanical{\xi}^{\,2}\electric{A}_\mu\electric{A}_\nu
&\mechanical{\Phi}_{\mathrm{ang}}\mechanical{\xi}\electric{A}_\mu\\
\mechanical{\Phi}_{\mathrm{ang}}\mechanical{\xi}\electric{A}_\nu&-\mechanical{\Phi}_{\mathrm{ang}}
\end{pmatrix}.
$$

The action will fix the normalization by requiring a Maxwell kinetic term with coefficient minus one quarter. Before that choice, rescaling the potential by a constant and rescaling its coupling inversely changes no physics.

### The transformation diagram and the two proofs %% Video 01:28:20–01:30:40 %%

The diagram places circular-coordinate freedom at its top. Two arrows lead to the transformations of the matter mode and the four-potential:

$$
\mechanical{\theta}'=\mechanical{\theta}+\mechanical{\xi}\varepsilon(\mechanical{x})
\quad\Longrightarrow\quad
\begin{cases}
\signal{\psi}'_n=e^{-in\mechanical{\xi}\varepsilon}\signal{\psi}_n,\\
\electric{A}'_\mu=\electric{A}_\mu+\partial_\mu\varepsilon.
\end{cases}
$$

Together, these transformations define local $U(1)$ covariance. A mode with integer circular winding acquires a local phase. The potential gradient compensates the derivative of that phase in the charged derivative.

Two calculations establish the transformation law. On a flat tube, shift the angular origin by a function of one axial position and read the new mixed metric entry. For the general case, apply the tensor transformation law with a shift depending on all four ordinary coordinates. The next equations state the general law; the oblique-coordinate and tube examples explain its geometry.

![[kk-gauge-transformations.svg|**Fig. 8.1** One circular-coordinate change produces the paired matter-phase and potential transformations.]]

<!-- visual-source:end -->

## Length-coordinate convention for the worked derivation

The following worked derivation uses a length coordinate y with period two pi times the reference radius and the mostly-plus metric. To translate the angular calculation above at fixed radius: set y equal to radius times angle, reverse the sign of the full metric, and reverse the sign of the potential. The length-valued coupling kappa equals radius times xi. The field-strength tensor reverses sign with the potential. The dimensionless radion Phi is the physical radius divided by the reference radius; the earlier squared-radius scalar equals reference radius squared times Phi squared. In this later notation, an index labeled 5 denotes the same compact direction labeled 4 in the first calculation; it does not add another coordinate. The algebra below defines its own variables before using them.

## A vector is not enough

Four components do not by themselves identify a field as electromagnetism. The candidate must transform correctly, couple to matter correctly, and have suitable dynamics. This chapter establishes the first requirement. Later chapters establish the coupling and action.

In the fixed-radius metric, define the circular one-form

$$
\eta=\mathrm d\mechanical{y}
+\mechanical{\kappa}\electric{A}_\mu\,\mathrm d\mechanical{x}^\mu.
$$

The symbol $\eta$ is a mathematical one-form used to shorten the calculation.

## Change the local circular origin

Let the base coordinates be unchanged and choose

$$
\mechanical{y}'=\mechanical{y}+\mechanical{\kappa}\lambda(\mechanical{x}).
$$

Differentiation gives

$$
\mathrm d\mechanical{y}'=\mathrm d\mechanical{y}
+\mechanical{\kappa}\partial_\mu\lambda\,\mathrm d\mechanical{x}^\mu.
$$

The same geometric one-form has the same value when written in the new coordinates. Substituting this expression and comparing coefficients gives

$$
\electric{A}_\mu'=\electric{A}_\mu-\partial_\mu\lambda.
\tag{8.1}
$$

The function $\lambda$ is a freely chosen, dimensionless coordinate/gauge parameter. It is not an additional physical field. The minus sign follows from the plus sign in the coordinate redefinition.

## Find a gauge-invariant derivative combination

Define

$$
\electric{F}_{\mu\nu}
=\partial_\mu\electric{A}_\nu-\partial_\nu\electric{A}_\mu.
$$

Under equation (8.1), the transformed field strength contains two extra terms:

$$
\electric{F}_{\mu\nu}'
=\electric{F}_{\mu\nu}
-\partial_\mu\partial_\nu\lambda
+\partial_\nu\partial_\mu\lambda
=\electric{F}_{\mu\nu}.
\tag{8.2}
$$

The final equality requires a sufficiently smooth parameter on the patch. This calculation is the same local cancellation as in [[3.2 Gauge Invariance in Classical Electrodynamics]].

## Why the group is U(1)

Translations around a circle compose by addition of their angles, with a complete turn identified with the starting point. A phase factor represents this operation as multiplication by a unit complex number. The group of these phase factors is $U(1)$.

The metric calculation so far only exhibits the gauge transformation of the potential. A periodic matter mode will acquire a phase under the same coordinate change. That is the step that identifies its charge in [[KK 19 Deriving charge from phase winding]].

Locally, a pure gradient potential can be removed by a gauge choice. Globally, coordinate patches and loops can introduce additional structure. Zero field strength on a region does not by itself settle every possible global phase question; compare [[3.4 Significance of Potentials in Quantum Theory]].

## Worked sign check

Start with zero potential and choose a new circular origin that varies across the base. Equation (8.1) produces a nonzero gradient potential. Equation (8.2) still gives zero field strength. The transformed metric can have mixed entries even though no electromagnetic field was introduced.

## Self-check

1. If the coordinate shift has the opposite sign, what happens to the potential transformation?
2. What remains unproved after deriving equation (8.1)?

### Answers

1. The gradient term has the opposite sign. Consistency matters more than the isolated sign choice.
2. Maxwell dynamics and the charged-matter coupling remain to be derived. A transformation law alone does not supply them.

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}^\mu,\;\mechanical{x},\;\mechanical{y}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{\kappa}$ | $\unit{GeV^{-1}}$ | Metric coupling scale | Scale between the canonical electromagnetic potential and the metric shift. |
| $\electric{A}_\mu$ | $\unit{GeV}$ | Potential components | Canonically normalized electromagnetic potential components. |
| $\electric{F}_{\mu\nu}$ | $\unit{GeV^2}$ | Electromagnetic field strength | Antisymmetric derivative of the gauge potential, in coordinate or frame components. |
| $\mechanical{\theta}$ | $1$ | Circular angle | Compact circular angle; the spherical-coordinate inset identifies its separate polar-angle use. |
| $\mechanical{\Phi}_{\mathrm{ang}}$ | $\unit{GeV^{-2}}$ | Angular squared radius | Squared physical radius; distinct from the dimensionless radius ratio in the length-coordinate formulation. |
| $\electric{B}_\mu$ | $\unit{GeV}$ | Angular metric shift | Mixed angular-coordinate vector before potential normalization; not magnetic flux density. |
| $\mechanical{\xi}$ | $1$ | Angular normalization | Dimensionless factor relating the mixed vector to the four-potential. |
| $\signal{\psi},\signal{\psi}_n$ | — | Scalar waves | Scalar field and Fourier coefficients in the unnormalized expansion; amplitude units depend on the chosen normalization. |
| $\widetilde g_{AB}$ | — | Five-dimensional metric | Component units depend on the length-valued base coordinates and dimensionless angular coordinate. |
| $g_{\mu\nu},g_{ab}$ | $1$ | Angular base metric | Four-dimensional metric or positive spatial example, as identified beside the equation. |
