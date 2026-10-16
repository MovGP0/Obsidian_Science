---
title: "Cylinder condition and radion assumptions"
document_type: "Self-contained study chapter"
---

> [!TLDR]
> Independence from the fifth coordinate and a fixed circle radius are separate assumptions; each removes different parts of the general five-dimensional field content.

%% source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"; video_chapter: "The Mostly Wild 5D Metric Tensor"; video_start: "00:50:27"; video_end: "01:00:41" %%

<!-- visual-source:start -->
## Geometric and field equations

Use natural units: the speed of light and reduced Planck constant are one. Greek indices run from 0 to 3; capital Latin indices run from 0 to 4. For spacetime calculations in this first section, use a mostly-minus metric: one positive time direction and four negative spatial directions. Euclidean distance examples are identified separately. The compact angle is dimensionless and has period two pi. Its physical radius has units of length. The scalar with subscript ang is the physical radius squared; it is not a dimensionless radion. The parameter xi is a dimensionless normalization of the mixed vector.

### Fifteen independent metric functions %% Video 00:50:40–00:54:20 %%

A general symmetric five-dimensional metric is a matrix of functions $\widetilde g_{AB}(\mechanical{t},\mechanical{x},\mechanical{y},\mechanical{z},\mechanical{\theta})$. A symmetric five-by-five matrix has

$$
\frac{5(5+1)}2=15
$$

independent components. The full initial matrix is

$$
\widetilde g_{AB}=\begin{pmatrix}
\widetilde g_{00}&\widetilde g_{01}&\widetilde g_{02}&\widetilde g_{03}&\widetilde g_{04}\\
\widetilde g_{10}&\widetilde g_{11}&\widetilde g_{12}&\widetilde g_{13}&\widetilde g_{14}\\
\widetilde g_{20}&\widetilde g_{21}&\widetilde g_{22}&\widetilde g_{23}&\widetilde g_{24}\\
\widetilde g_{30}&\widetilde g_{31}&\widetilde g_{32}&\widetilde g_{33}&\widetilde g_{34}\\
\widetilde g_{40}&\widetilde g_{41}&\widetilde g_{42}&\widetilde g_{43}&\widetilde g_{44}
\end{pmatrix},
\qquad \widetilde g_{AB}=\widetilde g_{BA}.
$$

At this stage each independent entry can depend on all five coordinates. Symmetry of the matrix is an algebraic condition. The gravitational action supplies differential equations, and the cylinder condition adds a restriction on coordinate dependence.

### Cylinder condition %% Video 00:54:40–00:57:20 %%

The first explicit restriction is

$$
\partial_4\widetilde g_{AB}=\partial_\theta\widetilde g_{AB}=0.
$$

The component label four denotes the circular coordinate, not a fourth ordinary spatial direction. This condition keeps fifteen component functions, but each now depends only on the four ordinary spacetime coordinates. It removes dependence on position around the circle; it does not yet fix the circle size or remove all mixed entries.

### Freeze the radion separately %% Video 00:57:40–01:00:20 %%

The circle radius can vary from one base position to another. A fixed-radius calculation imposes a second restriction:

$$
\widetilde g_{44}=-\mechanical{\Phi}_{\mathrm{ang}}=-\mechanical{r}^{\,2},
\qquad
\partial_\mu\mechanical{\Phi}_{\mathrm{ang}}=0.
$$

The radius is nonzero and constant. One of the fifteen functions is now fixed, leaving fourteen functions to be arranged into ten base-metric components and four vector components. These are component counts before gauge freedom and field equations; they are not counts of propagating particle polarizations.

The fixed-radius restriction removes radion dynamics from the reduced calculation. It must be checked against the scalar field equation of the full theory; it is not automatically a solution of that equation.

![[kk-radion-geometry.svg|**Fig. 5.1** A varying circle radius is a scalar field on the ordinary base; freezing it is an additional restriction.]]

<!-- visual-source:end -->

## Length-coordinate convention for the worked derivation

The following worked derivation uses a length coordinate y with period two pi times the reference radius and the mostly-plus metric. To translate the angular calculation above at fixed radius: set y equal to radius times angle, reverse the sign of the full metric, and reverse the sign of the potential. The length-valued coupling kappa equals radius times xi. The field-strength tensor reverses sign with the potential. The dimensionless radion Phi is the physical radius divided by the reference radius; the earlier squared-radius scalar equals reference radius squared times Phi squared. In this later notation, an index labeled 5 denotes the same compact direction labeled 4 in the first calculation; it does not add another coordinate. The algebra below defines its own variables before using them.

## The cylinder condition

Begin with a general metric that could depend on all five coordinates. The cylinder condition is

$$
\partial_{\mechanical{y}}\widetilde g_{AB}=0.
\tag{5.1}
$$

The derivative symbol means differentiation with respect to the circular coordinate. Equation (5.1) says that shifting around the circle does not change the background metric. It does not say that the circle has zero size, or that its coordinate does not exist.

Geometrically, translation around the circle is an isometry. The vector along that direction is a Killing vector. The connection between an isometry and its conserved quantity is developed in [[1.5 Killing vectors]].

## A Fourier interpretation

A periodic metric can formally be expanded in circular Fourier modes. Equation (5.1) retains only its zero mode. This is a restriction on the retained gravitational background, not a claim that every possible five-dimensional excitation is independent of the circle.

Later, a matter field is allowed to have nonzero circular modes while the geometry is treated as a prescribed background. This is useful for finding a spectrum. It is not a fully backreacting solution with arbitrary excited matter.

The expected excitation scale is

$$
\energy{E}_{\mathrm{KK}}\sim
\frac{\energy{\hbar}\mechanical{c}}{\mechanical{r}}.
$$

At energies well below that scale, a zero-mode effective description can be useful. A controlled low-energy expansion still requires checking interactions and consistency. Simply calling a radius small does not prove that every omitted field can be dropped.

## Freezing the radion is a second step

Write the fifth coefficient as

$$
\widetilde g_{55}=\mechanical{\Phi}^{\,2}(\mechanical{x}).
$$

The cylinder condition allows this scalar to vary across ordinary spacetime. To set it to a constant is an additional restriction:

$$
\partial_\mu\mechanical{\Phi}=0.
\tag{5.2}
$$

A constant can be absorbed into a redefinition of the reference radius. We then use $\mechanical{\Phi}=1$ for fixed-radius calculations. However, the scalar’s field equation does not disappear just because its value was fixed in an intermediate calculation.

There are three distinct operations:

1. Choose coordinates. This changes descriptions.
2. Restrict a field ansatz. This selects a subset of configurations.
3. Integrate out a heavy field. This uses its dynamics to obtain an effective theory.

Freezing the radion by assumption is the second operation. It becomes the third only after a stabilization mechanism and an approximation have been supplied.

## Degrees of freedom after the restrictions

The cylinder condition leaves fifteen metric component functions of four coordinates. Fixing the scalar leaves fourteen such functions. These are still algebraic component functions, not fourteen physical polarizations.

The terms “general metric” and “restricted metric” should therefore be used with care. One can allow arbitrary values of the retained component functions while already imposing strong restrictions on coordinate dependence and scalar dynamics.

## Worked distinction

Take a scalar radius factor that changes slowly with ordinary position but is identical all the way around each circle. It satisfies the cylinder condition and violates equation (5.2). A wave that varies around the circle violates the cylinder condition even if the average circle size is fixed.

## Self-check

1. Does independence from the circular coordinate force the radius to be constant in time?
2. Why must a frozen field’s equation still be checked?

### Answers

1. No. Time is an ordinary spacetime coordinate and can still enter the radius field.
2. A restricted action can miss an equation obtained by varying the omitted field. The retained solution may therefore fail to solve the full theory. [[KK 23 Radion and the mass-charge problem]] gives the explicit constraint.

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x},\;\mechanical{y}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{r}$ | $\unit{GeV^{-1}}$ | Reference circle radius | Radius encoded in the periodic coordinate identification. |
| $\widetilde g_{AB}$ | $1$ | Metric fields | Metric coefficients for length-valued coordinates; an angular coefficient instead carries the required length factors. |
| $\mechanical{\Phi}$ | $1$ | Radion | Ratio of the physical circular radius to the reference radius. |
| $\energy{E}_{\mathrm{KK}}$ | $\unit{GeV}$ | Energies | Excitation scale, wave energy, or first-mode rest energy. |
| $\energy{\hbar}$ | $1$ | Reduced Planck constant | Set to one in natural units; restored explicitly in SI formulas. |
| $\mechanical{c}$ | $1$ | Speed of light | Set to one in natural units; restored explicitly in SI formulas. |
| $\mechanical{t}$ | $\unit{GeV^{-1}}$ | Time | Time coordinate in the angular formulation’s natural units. |
| $\mechanical{z}$ | $\unit{GeV^{-1}}$ | Spatial coordinate | Third ordinary spatial coordinate. |
| $\mechanical{\theta}$ | $1$ | Circular angle | Compact circular angle; the spherical-coordinate inset identifies its separate polar-angle use. |
| $\mechanical{\Phi}_{\mathrm{ang}}$ | $\unit{GeV^{-2}}$ | Angular squared radius | Squared physical radius; distinct from the dimensionless radius ratio in the length-coordinate formulation. |
| $\widetilde g_{AB}$ | — | Five-dimensional metric | Component units depend on the length-valued base coordinates and dimensionless angular coordinate. |
