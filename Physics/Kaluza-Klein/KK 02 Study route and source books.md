---
title: "Study route and prerequisites"
document_type: "Self-contained study chapter"
---

> [!TLDR]
> Study the construction in the order geometry, transformations, dynamics, quantum modes, and physical limitations.

%% source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"; video_chapter: "Video Outline & Books Cited"; video_start: "00:12:45"; video_end: "00:25:05" %%

<!-- visual-source:start -->
## Geometric and field equations

Use natural units: the speed of light and reduced Planck constant are one. Greek indices run from 0 to 3; capital Latin indices run from 0 to 4. For spacetime calculations in this first section, use a mostly-minus metric: one positive time direction and four negative spatial directions. Euclidean distance examples are identified separately. The compact angle is dimensionless and has period two pi. Its physical radius has units of length. The scalar with subscript ang is the physical radius squared; it is not a dimensionless radion. The parameter xi is a dimensionless normalization of the mixed vector.

### Assumptions and calculation plan %% Video 00:13:00–00:21:40 %%

Assume a five-dimensional spacetime with coordinates $(\mechanical{t},\mechanical{x},\mechanical{y},\mechanical{z},\mechanical{\theta})$, identification $\mechanical{\theta}\sim\mechanical{\theta}+2\pi$, reference radius $\mechanical{r}$, and metric components independent of the circular coordinate.

The calculation has five parts:

1. Separate the five-dimensional metric into a four-dimensional metric, a vector potential, and a scalar radius field. Hold the scalar constant for the restricted action calculation.
2. Reduce the five-dimensional Einstein–Hilbert action to a four-dimensional gravitational action and a Maxwell action.
3. Expand a matter field around the circle. Integer phase winding produces discrete modes whose four-dimensional interpretation includes electric charge.
4. Interpret local phase symmetry as circular-coordinate freedom allowed by general covariance.
5. Test the construction against the radion, mass–charge, chirality, and vacuum problems.

The outline prints the final metric decomposition:

$$
\widetilde g_{AB}=\begin{pmatrix}
g_{\mu\nu}-\mechanical{\Phi}_{\mathrm{ang}}\mechanical{\xi}^{\,2}\electric{A}_\mu\electric{A}_\nu
&\mechanical{\Phi}_{\mathrm{ang}}\mechanical{\xi}\electric{A}_\mu\\
\mechanical{\Phi}_{\mathrm{ang}}\mechanical{\xi}\electric{A}_\nu&-\mechanical{\Phi}_{\mathrm{ang}}
\end{pmatrix}.
$$

It also states the action equality that will be proved:

$$
\begin{aligned}
\energy{\widetilde S}&=-\frac1{16\pi\mechanical{\widetilde G}}
\int\mathrm d^5\mechanical{x}\sqrt{|\det\widetilde g|}\,\widetilde R\\
&=-\frac1{16\pi\mechanical{G}}\int\mathrm d^4\mechanical{x}\sqrt{|\det g|}\,R\\
&\quad-\frac14\int\mathrm d^4\mechanical{x}\sqrt{|\det g|}\,
\electric{F}_{\mu\nu}\electric{F}^{\mu\nu}.
\end{aligned}
$$

The matter and potential transformations in the outline are

$$
\begin{aligned}
\mechanical{\theta}'&=\mechanical{\theta}+\mechanical{\xi}\varepsilon(\mechanical{x}),\\
\signal{\psi}'_n&=e^{-in\mechanical{\xi}\varepsilon}\signal{\psi}_n,\\
\electric{A}'_\mu&=\electric{A}_\mu+\partial_\mu\varepsilon,\\
\electric{q}_n&=n\mechanical{\xi}=n\mechanical{\kappa}/\mechanical{r}.
\end{aligned}
$$

The block matrix states how the fields fit into the geometry. The action fixes their dynamics and normalization. Periodicity fixes the integer label, and coordinate covariance fixes the corresponding charge transformation.

### Exact angular titles %% Video 00:22:20–00:25:00 %%

Optional background reading covers three complementary tools: relativistic matter fields, gauge-invariant actions, and differential geometry. The main topics are included in these notes; the following books can provide further examples.

- David Griffiths, *Introduction to Elementary Particles*.
- Chris Quigg, *Gauge Theories of the Strong, Weak, and Electromagnetic Interactions*.
- Eric Poisson, *A Relativist's Toolkit*.

A tensor is an object whose components obey a specified coordinate-transformation law. A metric is a symmetric tensor that assigns an interval to coordinate displacements. An action is a functional whose stationary points give field equations. A Fourier mode is a component with definite integer winding around the circle. These four ideas connect the calculations that follow.

![[kk-field-decomposition.svg|**Fig. 2.1** One five-dimensional metric separates into a base metric, a mixed vector, and a radius sector; the labels count component functions.]]

<!-- visual-source:end -->

## What you should learn

Identify which question each stage answers. Use the existing books in this vault to repair a missing prerequisite without losing the main argument.

## The chain of reasoning

The construction has several logically distinct stages. Do not replace one stage with an appealing picture from another stage.

| Stage | Question | Evidence required |
| --- | --- | --- |
| Geometry | What can a symmetric five-dimensional metric contain? | Algebraic decomposition and component counting |
| Transformations | Does its vector part behave as an electromagnetic potential? | A coordinate transformation and the induced gauge law |
| Dynamics | Does that field have Maxwell dynamics? | Reduction and variation of an action |
| Quantum modes | Why are some masses and charges discrete? | Periodic boundary conditions and a mode expansion |
| Phenomenology | Does the result describe known particles? | A comparison of predicted scales and observed properties |

The order matters. A field with four components is not automatically an electromagnetic potential. A correct gauge transformation is not automatically Maxwell’s action. A beautiful mass spectrum is not automatically the spectrum found in nature.

## Minimum prerequisites

A coordinate basis changes when coordinates change. A vector is a geometric object expressed in that basis. A rank-two covariant tensor transforms with one Jacobian for each lower index. Its contraction with two coordinate differentials is invariant when the transformation factors cancel. The metric chapters perform that cancellation explicitly.

An action is an integral that assigns a number to a complete field configuration. Varying that configuration by an arbitrary small change gives a stationarity equation. Integration by parts separates the interior field equation from boundary terms. The action chapters write out these steps for the metric and electromagnetic potential.

Before the matter chapters, you should understand a complex phase and a Fourier series. A periodic function can be written as a sum of integer modes. The mode amplitudes are functions of the remaining spacetime coordinates. The Klein–Gordon chapter develops the wave equation needed to interpret these amplitudes as four-dimensional fields.

A local phase transformation multiplies a complex field by a position-dependent unit complex number. Its ordinary derivative acquires an extra term. A covariant derivative includes a potential whose transformation cancels that term. The charge chapter derives this cancellation directly from a change of circular coordinate.

## Optional connections to the vault

[[Relativists Toolkit - Contents]] provides the geometric language: tensors, covariant differentiation, curvature, and the gravitational action. It is most useful when a transformation rule or curvature identity is unclear.

[[Gauge Theories - Contents]] provides the connection between symmetries, potentials, and field Lagrangians. Use its phase-invariance sections when the geometric vector field begins to look like electromagnetism.

[[Elementary Particles - Contents]] supplies the particle interpretation and the wider Standard Model context. It is useful when asking what the simple compactification has failed to explain.

The calculation in this collection is explicit: coordinate transformations determine the gauge law, action reduction determines normalization, and the scalar wave equation determines mode masses. The linked books are optional extensions.

## A practical study method

For each technical chapter, first read the goal and definitions. Then reproduce the calculation on paper without looking at the next line. Check dimensions before checking numerical factors. Finally, do the self-check and compare your answer with the supplied solution.

Keep a distinction between assumptions, identities, and predictions. For example, independence from the fifth coordinate is an assumption about the retained background. A block-matrix identity is algebra. The inferred mass of a charged mode is a prediction after the normalization and charge identification are fixed.

## Self-check

1. Which stage would fail if a vector transformed correctly but had an unsuitable kinetic term?
2. Why does the derivative of a vector require connection terms in a varying coordinate basis?

### Answers

1. The dynamics stage. The transformation law alone does not determine the full action.
2. Differentiating a vector differentiates both its components and its basis. The connection accounts for the basis change; an ordinary component derivative alone does not transform as a tensor.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{t}$ | $\unit{GeV^{-1}}$ | Time | Time coordinate in the angular formulation’s natural units. |
| $\mechanical{x}$ | $\unit{GeV^{-1}}$ | Base coordinate | Ordinary length-valued base coordinate; a four-coordinate argument where stated. |
| $\mechanical{y}$ | $\unit{GeV^{-1}}$ | Spatial coordinate | Ordinary spatial coordinate in the stated example. |
| $\mechanical{z}$ | $\unit{GeV^{-1}}$ | Spatial coordinate | Third ordinary spatial coordinate. |
| $\mechanical{r}$ | $\unit{GeV^{-1}}$ | Radius | Physical circle radius; radial coordinate in the explicitly identified spherical inset. |
| $\mechanical{\theta}$ | $1$ | Circular angle | Compact circular angle; the spherical-coordinate inset identifies its separate polar-angle use. |
| $\mechanical{\Phi}_{\mathrm{ang}}$ | $\unit{GeV^{-2}}$ | Angular squared radius | Squared physical radius; distinct from the dimensionless radius ratio in the length-coordinate formulation. |
| $\electric{A}_\mu$ | $\unit{GeV}$ | Angular-convention potential | Electromagnetic potential with the angular formulation’s positive-gradient gauge law. |
| $\electric{F}_{\mu\nu}$ | $\unit{GeV^2}$ | Field strength | Antisymmetric derivative of the angular potential. |
| $\electric{q}$ | $1$ | Test charge | Charge acted on by the Lorentz force. |
| $\mechanical{\xi}$ | $1$ | Angular normalization | Dimensionless factor relating the mixed vector to the four-potential. |
| $\mechanical{\kappa}$ | $\unit{GeV^{-1}}$ | Angular charge-to-mass scale | Length-valued coupling equal to radius times xi. |
| $\mechanical{G}$ | $\unit{GeV^{-2}}$ | Gravitational constant | Four-dimensional Newton coupling in the reduced action. |
| $\mechanical{\widetilde G}$ | $\unit{GeV^{-3}}$ | Gravitational constant | Five-dimensional Newton coupling before the circle integral. |
| $\energy{\widetilde S}$ | $1$ | Actions | Four- and five-dimensional actions in units of the reduced Planck constant. |
| $\electric{q}_n$ | $1$ | Mode charge | Signed mode charge in natural Heaviside–Lorentz units. |
| $\signal{\psi},\signal{\psi}_n$ | — | Scalar waves | Scalar field and Fourier coefficients in the unnormalized expansion; amplitude units depend on the chosen normalization. |
| $\widetilde g_{AB}$ | — | Five-dimensional metric | Component units depend on the length-valued base coordinates and dimensionless angular coordinate. |
| $g_{\mu\nu},g_{ab}$ | $1$ | Angular base metric | Metric examples in this chapter; angular-coordinate entries carry the required length factors. |
| $R,\widetilde R$ | $\unit{GeV^2}$ | Scalar curvature | Four- and five-dimensional scalar curvatures in the angular convention. |
