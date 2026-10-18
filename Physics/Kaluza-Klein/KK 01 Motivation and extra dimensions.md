---
title: "Motivation and extra dimensions"
document_type: "Self-contained study chapter"
---

> [!TLDR]
> A small compact dimension can be hidden at low energy while still changing the fields seen in four dimensions. Standard Model symmetry groups do not require extra coordinates, but a geometric Kaluza–Klein construction can give eleven spacetime dimensions.

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

Explain the difference between an extra coordinate, a compact dimension, and an embedding diagram. Distinguish spacetime dimensions, symmetry-group dimensions, and field components. Explain how a compact-space construction gives eleven dimensions, and separate a mathematical unification from an experimental claim.

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

## Spacetime, symmetry groups, and field components

The word *dimension* has three different meanings in this discussion:

| Meaning | What is counted | Example |
| --- | --- | --- |
| Spacetime dimension | Independent local coordinates that locate an event. | Ordinary spacetime has one time coordinate and three spatial coordinates. |
| Lie-group dimension | Independent continuous transformation parameters, or generators. | $SU(3)$ has eight generators. |
| Representation dimension | Components on which a group acts in a specified representation. | An $SU(2)$ doublet has two complex components. |

An internal gauge transformation changes the field description at a fixed spacetime point. It does not move that point along an extra coordinate. The Standard Model can therefore use its internal gauge groups in four-dimensional spacetime. Extra coordinates require an additional physical assumption.

### Spacetime and proper time

Ordinary spacetime has coordinates $(\mechanical{t},\mechanical{x},\mechanical{y},\mechanical{z})$ in the natural units used here. Its Lorentz symmetry is $O(1,3)$, not $SU(4)$. The connected subgroup $SO^+(1,3)$ describes rotations and boosts that preserve spatial orientation and time orientation. The two common signature conventions use opposite signs for the same Lorentzian geometry.

Proper time is the time measured by an ideal clock along a timelike path. It is one time quantity associated with that path, not the name of the four-coordinate set. In general relativity, the metric can vary with position, and coordinate changes are described by diffeomorphisms. Gravity is not part of the Standard Model's internal gauge group. See [[Spacetime Coordinates]] and [[Spacetime Interval]] for the spacetime description.

### Standard Model gauge groups

The Standard Model gauge group is conventionally written as

$$
G_{\mathrm{SM}}=SU(3)_{\mathrm C}\times SU(2)_{\mathrm L}\times U(1)_{\mathrm Y}.
$$

| Interaction or sector | Group | Meaning | Number of generators |
| --- | --- | --- | ---: |
| Strong interaction | $SU(3)_{\mathrm C}$ | Transformations of colour charge. | 8 |
| Weak interaction | $SU(2)_{\mathrm L}$ | Transformations of weak isospin; the weak gauge coupling acts on left-handed fermion doublets. | 3 |
| Weak hypercharge | $U(1)_{\mathrm Y}$ | Phase transformations associated with weak hypercharge. | 1 |
| Electromagnetism after electroweak symmetry breaking | $U(1)_{\mathrm{EM}}$ | Phase transformations associated with electric charge. | 1 |

The electromagnetic row is the surviving subgroup after electroweak symmetry breaking. It is not an additional independent factor in the first three rows. The Higgs vacuum leaves

$$
SU(2)_{\mathrm L}\times U(1)_{\mathrm Y}
\longrightarrow U(1)_{\mathrm{EM}}.
$$

The three weak gauge fields and the hypercharge gauge field combine into the massive $W^+$, $W^-$, and $Z$ bosons and the massless photon. The electric-charge generator is a combination of a weak-isospin generator and the hypercharge generator.

The Higgs field transforms as an $SU(2)_{\mathrm L}$ doublet and also carries hypercharge. Its two complex components contain four real field components at each spacetime point. After symmetry breaking, three supply the longitudinal modes of the massive weak bosons, and one remains as the physical Higgs scalar. These field components do not add spacetime coordinates. See [[11.9 The Higgs Mechanism|the Higgs mechanism]].

Electromagnetism uses $U(1)$, not $SU(1)$. Elements of $U(1)$ are complex phases. The determinant-one condition leaves $SU(1)$ with only the identity, so it cannot describe the continuous electromagnetic gauge symmetry. These group assignments and field representations are described in [the University of Jena Standard Model lecture](https://www.tpi.uni-jena.de/~floerchinger/qft2/lecture16/).

### Counting group dimensions

The group $U(n)$ consists of unitary complex $n\times n$ matrices. The subgroup $SU(n)$ also requires determinant one. In the defining representation, these matrices act on $n$ complex components. This matrix size is different from the real dimension of the group:

$$
\dim_{\mathbb R}U(n)=n^2,
\qquad
\dim_{\mathbb R}SU(n)=n^2-1.
$$

Thus,

$$
\dim_{\mathbb R}G_{\mathrm{SM}}=8+3+1=12.
$$

These twelve generators correspond to eight gluon gauge fields and four electroweak gauge fields. They do not give twelve spatial directions. Similarly, $SU(4)$ has fifteen generators; its label does not mean four spacetime dimensions. [David Tong's Lorentz-symmetry notes](https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S4.html) explain the separate spacetime symmetry.

## How a Kaluza–Klein construction gives eleven dimensions

To connect the gauge groups to extra coordinates, make a further assumption: the four-dimensional gauge fields arise from the metric of a higher-dimensional spacetime. In this Kaluza–Klein construction, continuous isometries of a compact internal space produce gauge symmetries. An isometry is a transformation that preserves the metric.

For the introductory circle model, the internal space is $S^1$. Its continuous rotation symmetry gives a $U(1)$ gauge field, and its one coordinate gives a total of five spacetime dimensions. To include the Standard Model gauge algebra through the same metric mechanism, a larger compact space is needed.

### A seven-dimensional internal space

An illustrative choice is

$$
K=\mathbb{CP}^{2}\times S^{2}\times S^{1}.
$$

Here $\mathbb{CP}^{2}$ is the complex projective plane, $S^2$ is a two-dimensional sphere, and $S^1$ is a circle. The superscript in $\mathbb{CP}^{2}$ counts complex dimensions, so its real dimension is four.

| Compact factor | Connected isometry group for the standard metric | Associated gauge algebra | Real coordinate dimensions |
| --- | --- | --- | ---: |
| Complex projective plane $\mathbb{CP}^{2}$ | $SU(3)/\mathbb Z_3$ | $\mathfrak{su}(3)$ | 4 |
| Sphere $S^{2}$ | $SO(3)\simeq SU(2)/\mathbb Z_2$ | $\mathfrak{su}(2)$ | 2 |
| Circle $S^{1}$ | $U(1)$ | $\mathfrak{u}(1)$ | 1 |

The finite quotients do not change the local Lie algebras or their dimensions. They do affect the global groups and which matter representations are allowed. This example gives the Standard Model gauge algebra; it does not by itself fix the complete global gauge group or the particle content.

The internal coordinate count is

$$
\dim_{\mathbb R}K=4+2+1=7.
$$

With four ordinary spacetime dimensions, the total is

$$
\boxed{
D=\underbrace{4}_{\text{ordinary spacetime}}
+\underbrace{4+2+1}_{\text{compact spatial dimensions}}
=11.
}
$$

Thus, this construction has ten spatial dimensions and one time dimension. The seven extra dimensions are spatial.

### Why the group and space dimensions differ

A group can have more transformation parameters than the space has coordinates. For example, a sphere is two-dimensional, but its rotations have three independent parameters. Rotations about an axis through a chosen point leave that point fixed.

For a homogeneous space $G/H$, the subgroup $H$ contains the transformations that leave a chosen point fixed. Its dimension is

$$
\dim(G/H)=\dim G-\dim H.
$$

In the present example,

$$
\begin{aligned}
\mathbb{CP}^{2}&\simeq SU(3)/U(2),
&\dim_{\mathbb R}\mathbb{CP}^{2}&=8-4=4,\\
S^{2}&\simeq SU(2)/U(1),
&\dim_{\mathbb R}S^{2}&=3-1=2.
\end{aligned}
$$

The notation $U(2)$ in the first quotient denotes its usual embedded subgroup in $SU(3)$. These quotients explain why the compact-space count is $4+2+1$, while the gauge-group count is $8+3+1$.

In the conventional smooth compact-space construction, where the gauge algebra comes from metric isometries, seven internal dimensions are the minimum for this Standard Model symmetry. Witten developed this argument in [*Search for a realistic Kaluza–Klein theory* (1981), pp. 33–34 in this reprint](https://api.pageplace.de/preview/DT0400.9781482268737_A38492133/preview-9781482268737_A38492133.pdf#page=45). The paper also explains why obtaining the correct light fermions is a separate problem.

> [!note]
> The Standard Model does not require eleven spacetime dimensions. The count above depends on the added assumption that its gauge fields come from compact-space geometry. A space with the required symmetry is not yet a full physical model: its field equations, matter spectrum, Higgs sector, and agreement with observations must also be checked.

### Relation to M-theory

M-theory also uses eleven spacetime dimensions, with ten spatial directions and one time direction. Its motivation comes from string dualities and eleven-dimensional supergravity. In particular, the strongly coupled ten-dimensional Type IIA string has an eleven-dimensional description, as discussed in [Witten's *String Theory Dynamics in Various Dimensions* (1995)](https://arxiv.org/abs/hep-th/9503124).

This is a different argument from the compact-space count above. The shared number eleven does not make the simple circle model a derivation of M-theory, and neither argument is experimental evidence for extra dimensions.

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
