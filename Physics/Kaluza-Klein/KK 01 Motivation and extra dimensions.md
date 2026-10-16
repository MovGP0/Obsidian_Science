---
title: "Motivation and extra dimensions"
document_type: "Self-contained study chapter"
---

> [!TLDR]
> A small compact dimension can be hidden at low energy while still changing the fields and particle modes seen in four dimensions.

%% source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"; video_chapter: "Video Intro"; video_start: "00:00:00"; video_end: "00:12:45" %%

<!-- visual-source:start -->
## Geometric and field equations

Use natural units: the speed of light and reduced Planck constant are one. Greek indices run from 0 to 3; capital Latin indices run from 0 to 4. For spacetime calculations in this first section, use a mostly-minus metric: one positive time direction and four negative spatial directions. Euclidean distance examples are identified separately. The compact angle is dimensionless and has period two pi. Its physical radius has units of length. The scalar with subscript ang is the physical radius squared; it is not a dimensionless radion. The parameter xi is a dimensionless normalization of the mixed vector.

### Dimensions and the scope of the model %% Video 00:00:00–00:07:20 %%

A change of the circular coordinate induces two linked transformations: a phase change of each matter mode and a gradient change of the electromagnetic potential.

$$
\mechanical{\theta}'=\mechanical{\theta}+\mechanical{\xi}\varepsilon,
\qquad
\signal{\psi}'_n=e^{-in\mechanical{\xi}\varepsilon}\signal{\psi}_n,
\qquad
\electric{A}'_\mu=\electric{A}_\mu+\partial_\mu\varepsilon.
$$

Attach one compact circle to each ordinary spacetime position. A choice of zero angle on each circle fixes a local phase convention. Changing those zero angles changes both the mode phase and the components of the gauge potential, while leaving measurable fields unchanged.

In Heaviside–Lorentz units with the speed of light set to one, Maxwell's equations and the Lorentz force are

$$
\boldsymbol\nabla\cdot\electric{\mathbf E}=\electric{\rho},
\qquad
\boldsymbol\nabla\cdot\magnetic{\mathbf B}=0,
$$

$$
\begin{aligned}
\boldsymbol\nabla\times\electric{\mathbf E}&=-\partial_t\magnetic{\mathbf B},\\
\boldsymbol\nabla\times\magnetic{\mathbf B}&=\electric{\mathbf J}+\partial_t\electric{\mathbf E},\\
\mechanical{\mathbf F}&=\electric{q}\left(\electric{\mathbf E}+\mechanical{\mathbf v}\times\magnetic{\mathbf B}\right).
\end{aligned}
$$

The homogeneous Maxwell equations follow from expressing field strength as the antisymmetric derivative of a potential. The inhomogeneous equations follow from varying the Maxwell action. Local phase covariance fixes how the potential couples to charged matter. These are separate steps: phase symmetry alone does not select every term in an action.

An eleven-dimensional model has seven directions beyond four-dimensional spacetime, since $11=4+7$. The simpler model studied here has one extra spatial direction and coordinates $(\mechanical{t},\mechanical{x},\mechanical{y},\mechanical{z},\mechanical{\theta})$. The fifth direction is a circle rather than an unbounded line.

The Standard Model gauge group is

$$
SU(3)_{\mathrm C}\times SU(2)_{\mathrm L}\times U(1)_{\mathrm Y}.
$$

Electroweak symmetry breaking leaves the electromagnetic subgroup $U(1)_{\mathrm{EM}}$. The single-circle construction supplies an Abelian vector field and gravity. It does not supply the strong and weak gauge sectors or derive the complete Standard Model.

Electromagnetism accounts for electric currents, magnetic effects, light, radio waves, chemical bonding, and much of the contact force between ordinary objects. A geometric account of its potential therefore connects one mathematical construction to a wide range of familiar phenomena.

### Appearance and evidence %% Video 00:07:40–00:12:40 %%

Limited spatial resolution can hide structure. A chain of closely spaced points can appear continuous from a distance. Likewise, a compact direction can be too small to resolve even when the large-scale geometry appears lower dimensional.

Local appearance does not determine global geometry. A small region of Earth can appear flat although the complete surface is curved. Observing three large spatial directions therefore does not prove that no compact direction exists. Conversely, a mathematical relation between gauge theory and a fifth coordinate is not experimental evidence for that coordinate.

<!-- visual-source:end -->

## What you should learn

Explain the difference between an extra coordinate, a compact dimension, and an embedding diagram. Separate a mathematical unification from an experimental claim.

## Local dimension and global shape

A dimension is an independent local direction in which a point can change its position. A circle has one dimension: a single coordinate locates a point locally. Drawing the circle in a plane does not give the circle two intrinsic dimensions. The plane belongs to the drawing.

An infinite line and a circle are both locally one-dimensional. Their global structures differ. On the line, moving in one direction never returns to the initial point. On the circle, one complete circuit does.

In the model studied here, ordinary spacetime has four coordinates. A fifth, spatial coordinate is periodic:

$$
\mechanical{y}\sim\mechanical{y}+2\pi\mechanical{r}.
$$

The symbol $\sim$ identifies two coordinate labels for the same point. It does not describe two separate copies of the universe. The radius $\mechanical{r}$ sets the circumference.

The familiar tube picture contains a line direction and a circular direction. It is useful because it shows a compact coordinate directly. In the physical model, however, every spacetime event has a circular direction. The circle is not a small ring placed at a location in ordinary three-dimensional space.

## Why a small dimension can be difficult to see

Resolving short distances requires large momentum transfer. For a periodic quantum field, the first nonzero momentum around a circle has magnitude $\energy{\hbar}/\mechanical{r}$. The associated energy scale is of order

$$
\energy{E}_{\mathrm{KK}}\sim\frac{\energy{\hbar}\mechanical{c}}{\mechanical{r}}.
$$

This is an order-of-magnitude relation, not yet a derivation of a complete spectrum. The precise mode calculation appears in [[KK 16 Fourier modes and periodicity]] and [[KK 18 Deriving the Kaluza-Klein mass tower]].

If the experimental energy is far below this scale, the nonzero modes are difficult to excite. Fields can then appear independent of the circular coordinate. This explains why a low-energy approximation can look four-dimensional even when the underlying model has five dimensions.

The radius is not hidden merely because it is small in a drawing. It is hidden because experiments have limited spatial resolution and limited available energy.

## What unification would mean

In ordinary general relativity, the metric describes gravitational geometry. In the five-dimensional construction, some metric components behave as a four-dimensional electromagnetic potential. A single higher-dimensional object therefore contains fields that appear different to a four-dimensional observer.

Three claims must remain separate:

1. A five-dimensional metric can be decomposed into a metric, a vector, and a scalar.
2. Under suitable assumptions, its action contains gravitational and electromagnetic terms.
3. Nature is described by this particular model.

The first two are mathematical statements that can be tested by calculation. The third requires agreement with observations. The simplest model does not reproduce the observed relation between particle masses and electric charges.

## Worked estimate

Use $\energy{\hbar}\mechanical{c}\approx1.97\times10^{-16}\,\unit{GeV\,m}$. For an illustrative radius of $\mechanical{r}=10^{-18}\,\unit{m}$,

$$
\energy{E}_{\mathrm{KK}}\sim
\frac{1.97\times10^{-16}\,\unit{GeV\,m}}{10^{-18}\,\unit{m}}
\approx197\,\unit{GeV}.
$$

This example is a scale conversion, not an allowed-radius claim. Experimental limits depend on which fields use the extra dimension and how they interact.

## Self-check

1. Why does a tube drawing not prove that an extra dimension requires an external embedding space?
2. If the radius is reduced by a factor of ten, what happens to the first excitation scale?

### Answers

1. The drawing uses an embedding to display intrinsic geometry. The metric and coordinate identifications define the model without that drawing.
2. The scale increases by a factor of ten because it is inversely proportional to the radius.

For background on the four-dimensional starting point, see [[Spacetime Coordinates]] and [[Spacetime Interval]].

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{y}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{r}$ | $\unit{GeV^{-1}}$ | Reference circle radius | Radius encoded in the periodic coordinate identification. |
| $\energy{E}_{\mathrm{KK}}$ | $\unit{GeV}$ | Energies | Excitation scale, wave energy, or first-mode rest energy. |
| $\energy{\hbar}$ | $1$ | Reduced Planck constant | Set to one in natural units; restored explicitly in SI formulas. |
| $\mechanical{c}$ | $1$ | Speed of light | Set to one in natural units; restored explicitly in SI formulas. |
| $\mechanical{t}$ | $\unit{GeV^{-1}}$ | Time | Time coordinate in the angular formulation’s natural units. |
| $\mechanical{x}$ | $\unit{GeV^{-1}}$ | Base coordinate | Ordinary length-valued base coordinate; a four-coordinate argument where stated. |
| $\mechanical{z}$ | $\unit{GeV^{-1}}$ | Spatial coordinate | Third ordinary spatial coordinate. |
| $\mechanical{\theta}$ | $1$ | Circular angle | Compact circular angle; the spherical-coordinate inset identifies its separate polar-angle use. |
| $\electric{A}_\mu$ | $\unit{GeV}$ | Angular-convention potential | Electromagnetic potential with the angular formulation’s positive-gradient gauge law. |
| $\mechanical{\xi}$ | $1$ | Angular normalization | Dimensionless factor relating the mixed vector to the four-potential. |
| $\signal{\psi},\signal{\psi}_n$ | — | Scalar waves | Scalar field and Fourier coefficients in the unnormalized expansion; amplitude units depend on the chosen normalization. |
| $\electric{\rho}$ | $\unit{GeV^3}$ | Charge density | Charge per volume in the introductory Maxwell equations. |
| $\electric{\mathbf J}$ | $\unit{GeV^3}$ | Current density | Charge-current vector in the introductory Maxwell equations. |
| $\mechanical{\mathbf F}$ | $\unit{GeV^2}$ | Lorentz force | Lorentz force in natural units. |
| $\mechanical{\mathbf v}$ | $1$ | Velocity | Particle velocity with the speed of light set to one. |
| $\electric{q}$ | $1$ | Test charge | Charge acted on by the Lorentz force. |
| $\electric{\mathbf E}$ | $\unit{GeV^2}$ | Electric field | Electric entries of the field-strength matrix in a local inertial frame. |
| $\magnetic{\mathbf B}$ | $\unit{GeV^2}$ | Magnetic field | Magnetic entries of the field-strength matrix; distinct from the geometric mixed vector. |
