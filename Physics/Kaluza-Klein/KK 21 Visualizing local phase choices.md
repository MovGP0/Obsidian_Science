---
title: "Visualizing local phase choices"
document_type: "Self-contained study chapter"
---

> [!TLDR]
> A local phase convention is a choice of where to read each circular mode; the gauge potential compensates for changes in that convention when neighboring points are compared.

%% source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"; video_chapter: "The Meditation"; video_start: "04:23:31"; video_end: "04:39:16" %%

<!-- visual-source:start -->
## Geometric and field equations

Use natural units: the speed of light and reduced Planck constant are one. Greek indices run from 0 to 3; capital Latin indices run from 0 to 4. For spacetime calculations in this first section, use a mostly-minus metric: one positive time direction and four negative spatial directions. Euclidean distance examples are identified separately. The compact angle is dimensionless and has period two pi. Its physical radius has units of length. The scalar with subscript ang is the physical radius squared; it is not a dimensionless radion. The parameter xi is a dimensionless normalization of the mixed vector. An integer n labels circular winding, and i is the imaginary unit. A real function epsilon specifies a local shift of the angular origin whenever it appears in a transformation.

### The curved zero-angle line and the gradient sign %% Video 04:23:40–04:27:40 %%

The top captions retain all three transformation laws: circular-coordinate change, matter phase, and potential. The colored tube alternates between straight and curved reference lines, while vector arrows change with the local choice of phase origin.

Choose the new zero-angle line. Since the primed angle vanishes on that line,

$$
\mechanical{\theta}'=0
\quad\Longrightarrow\quad
\mechanical{\theta}=-\mechanical{\xi}\varepsilon(\mechanical{x}).
$$

Although the potential changes by a positive gradient of epsilon, it is proportional to the **negative** gradient of the drawn seam's old angular position. The line is not a graph of positive epsilon. This resolves the apparent sign conflict between the tube drawing and the printed gauge rule.

### Phase fronts and potential arrows on a plane %% Video 04:28:00–04:31:40 %%

With two ordinary spatial momenta, a scalar momentum eigenstate is

$$
\signal{\psi}(\mechanical{t},\mechanical{x},\mechanical{y},\mechanical{\theta})
=C\exp\left[i\left(\mechanical{p}_x\mechanical{x}+\mechanical{p}_y\mechanical{y}
+n\mechanical{\theta}-\energy{E}\mechanical{t}\right)\right],
$$

$$
\mechanical{m}_n=\frac{|n|}{\mechanical{r}},
\qquad
\energy{E}^{\,2}=\mechanical{p}_x^{\,2}+\mechanical{p}_y^{\,2}+\mechanical{m}_n^{\,2}.
$$

The circular momentum contribution looks like mass to an observer using the two ordinary spatial directions. The colors on the plane encode the mode's phase. The arrows visualize the potential that accompanies a changing local phase convention. They must not be read as a direct picture of magnetic field lines.

### Extend the same comparison into a volume %% Video 04:32:00–04:35:20 %%

The same argument works throughout three-dimensional ordinary space. A local phase change alters the phase at each base position. The matching gradient shift of the potential compensates it in the covariant derivative. This changes a description of the field, not the field strength.

### A state at rest can have circular momentum %% Video 04:35:40–04:39:00 %%

For zero ordinary spatial momentum, the state becomes

$$
\signal{\psi}(\mechanical{t},\mechanical{x},\mechanical{y},\mechanical{z},\mechanical{\theta})
=C\exp\left[i\left(n\mechanical{\theta}-\mechanical{m}_n\mechanical{t}\right)\right],
\qquad
\mechanical{m}_n=\frac{|n|}{\mechanical{r}}.
$$

It has zero ordinary spatial momentum and nonzero circular momentum when the mode label is nonzero. A uniform spatial phase can be made position dependent by a local gauge choice; the accompanying arrows then compensate that change. The field's magnitude remains constant.

For the angular-coordinate phase and potential signs, use $D_\mu=\partial_\mu+i\electric{q}_n\electric{A}_\mu$. Then

$$
D'_\mu\signal{\psi}'_n
=e^{-i\electric{q}_n\varepsilon}D_\mu\signal{\psi}_n.
$$

For an initially zero potential and a rest state, a spatially varying gauge function gives $\electric{A}'_i=\partial_i\varepsilon$ and $\partial_i\signal{\psi}'_n=-i\electric{q}_n\partial_i\varepsilon\,\signal{\psi}'_n$. The two terms in the covariant derivative cancel. The color changes and potential arrows therefore do not establish a new force. Smooth pure-gauge shifts leave the field strength unchanged.

### A gauge-independent comparison between two positions %% Video 04:36:00 %%

Write the nonzero mode coefficient as $\signal{\psi}_n=|\signal{\psi}_n|e^{i\signal{\chi}}$. Along a fixed spatial path from point a to point b, define

$$
\signal{\Omega}_{ab}=\signal{\chi}(b)-\signal{\chi}(a)
+\electric{q}_n\int_a^b\electric{A}_i\,\mathrm d\mechanical{x}^i.
$$

The phase changes by minus charge times the gauge function, while the line integral changes by its endpoint difference:

$$
\begin{aligned}
\signal{\Omega}'_{ab}
={}&\signal{\chi}(b)-\electric{q}_n\varepsilon(b)
-\signal{\chi}(a)+\electric{q}_n\varepsilon(a)\\
&+\electric{q}_n\int_a^b\left(\electric{A}_i+\partial_i\varepsilon\right)\mathrm d\mechanical{x}^i
=\signal{\Omega}_{ab}.
\end{aligned}
$$

The path must be specified when field strength is nonzero. For the pure-gauge changes illustrated here, this calculation makes the cancellation between the colored phase pattern and the potential explicit. A local phase value alone does not give this gauge-independent comparison.

![[kk-local-phase-comparison.svg|**Fig. 21.1** Local phase changes and the connection compensate in the comparison between two positions.]]

<!-- visual-source:end -->

## Length-coordinate convention for the worked derivation

The following worked derivation uses a length coordinate y with period two pi times the reference radius and the mostly-plus metric. To translate the angular calculation above at fixed radius: set y equal to radius times angle, reverse the sign of the full metric, and reverse the sign of the potential. The length-valued coupling kappa equals radius times xi. The field-strength tensor reverses sign with the potential. The dimensionless radion Phi is the physical radius divided by the reference radius; the earlier squared-radius scalar equals reference radius squared times Phi squared. In this later notation, an index labeled 5 denotes the same compact direction labeled 4 in the first calculation; it does not add another coordinate. The algebra below defines its own variables before using them.

## Build the mental picture one step at a time

At each ordinary spacetime event, imagine a circle. A mode has a phase that winds an integer number of times around it. Now select one marked point on each circle as the local zero of the circular coordinate.

Reading the full field at that selected circular origin gives a four-dimensional mode amplitude. Changing the selected origin changes the phase assigned to that amplitude. The full higher-dimensional scalar field remains the same geometric field.

This picture does not mean that a particle is simultaneously measured at every possible phase. It means that the four-dimensional field representative depends on a convention used to describe the circular mode.

## Express the phase relation

Write a nonzero four-dimensional scalar mode as

$$
\signal{\psi}_n=\signal{\rho}_ne^{i\signal{\chi}_n}.
$$

The magnitude $\signal{\rho}_n$ has the field’s units. The phase $\signal{\chi}_n$ is dimensionless and is only defined locally where the magnitude is nonzero.

Under a circular-origin shift,

$$
\signal{\chi}_n'=\signal{\chi}_n-\electric{q}_n\lambda,
\qquad
\electric{A}_\mu'=\electric{A}_\mu-\partial_\mu\lambda.
$$

Consequently,

$$
\partial_\mu\signal{\chi}_n'
-\electric{q}_n\electric{A}_\mu'
=\partial_\mu\signal{\chi}_n
-\electric{q}_n\electric{A}_\mu.
\tag{21.1}
$$

The phase gradient alone is convention-dependent. The compensated combination is gauge invariant.

## Connect the picture to the kinetic term

Apply the covariant derivative:

$$
D_\mu\signal{\psi}_n
=e^{i\signal{\chi}_n}
\left[
\partial_\mu\signal{\rho}_n
+i\signal{\rho}_n
\left(\partial_\mu\signal{\chi}_n-\electric{q}_n\electric{A}_\mu\right)
\right].
\tag{21.2}
$$

The kinetic term depends on derivatives of the magnitude and on the invariant phase-gradient combination. It does not depend on the arbitrary phase convention by itself.

This is why a position-dependent phase that is generated solely by a gauge change does not automatically represent a new physical flow or new field energy. The potential changes at the same time.

## Compare phases around a loop

Transport between nearby circles uses the gauge connection. For a closed loop, the phase factor can be written in terms of

$$
\exp\left(i\electric{q}_n\oint\electric{A}_\mu\,\mathrm d\mechanical{x}^\mu\right).
\tag{21.3}
$$

An overall orientation convention can conjugate this factor. Under a single-valued gauge change, the integral of the added gradient around the loop vanishes. More general allowed large gauge changes leave the exponentiated phase unchanged for the permitted charges.

For a small contractible loop, Stokes’ theorem relates the phase to the field strength through the enclosed surface. For a noncontractible loop, global information can matter even if the field strength vanishes on the region traversed. See [[3.4 Significance of Potentials in Quantum Theory]].

## Worked cancellation

Start with a constant positive magnitude, zero phase, and zero potential on a patch. Make a gauge change. The new phase gradient is minus the charge times the parameter gradient. The new potential is minus that same parameter gradient. Substituting into equation (21.1) gives zero exactly.

The ordinary derivative of the transformed mode is generally nonzero, but its covariant derivative remains zero. This is a useful calculation to repeat whenever the visual picture becomes confusing.

## Self-check

1. Is the local phase itself a gauge-invariant observable?
2. What fails in the magnitude–phase representation at a zero of the field?
3. Why is a closed-loop comparison more useful than comparing absolute phases at isolated points?

### Answers

1. No. It changes with the chosen circular origin.
2. The phase becomes undefined. The original complex field remains the appropriate variable there.
3. The connection supplies the comparison rule, and the resulting loop phase can be gauge invariant. An absolute local phase has no such invariant meaning by itself.

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}^\mu$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\electric{A}_\mu$ | $\unit{GeV}$ | Potential components | Canonically normalized electromagnetic potential components. |
| $\signal{\psi}_n$ | $\unit{GeV}$ | Four-dimensional scalar fields | Canonical field or Fourier-mode amplitude on the base spacetime. |
| $\signal{\rho}_n$ | $\unit{GeV}$ | Scalar-field magnitude | Magnitude in the local magnitude-phase representation. |
| $\signal{\chi}_n$ | $1$ | Field phase | Local phase of a nonzero complex scalar mode. |
| $\electric{q}_n$ | $1$ | Electric charges | Mode charge or elementary charge in Heaviside-Lorentz natural units. |
| $\mechanical{t}$ | $\unit{GeV^{-1}}$ | Time | Time coordinate in the angular formulation’s natural units. |
| $\mechanical{y}$ | $\unit{GeV^{-1}}$ | Spatial coordinate | Ordinary spatial coordinate in the stated example. |
| $\mechanical{z}$ | $\unit{GeV^{-1}}$ | Spatial coordinate | Third ordinary spatial coordinate. |
| $\mechanical{r}$ | $\unit{GeV^{-1}}$ | Radius | Physical circle radius; radial coordinate in the explicitly identified spherical inset. |
| $\mechanical{\theta}$ | $1$ | Circular angle | Compact circular angle; the spherical-coordinate inset identifies its separate polar-angle use. |
| $\mechanical{\xi}$ | $1$ | Angular normalization | Dimensionless factor relating the mixed vector to the four-potential. |
| $\mechanical{p}_x,\mechanical{p}_y$ | $\unit{GeV}$ | Momenta | Four-momentum and ordinary spatial momentum components. |
| $\energy{E}$ | $\unit{GeV}$ | Energy | Energy in the relativistic dispersion relation; distinct from electric field. |
| $\mechanical{m}$ | $\unit{GeV}$ | Rest mass | Four-dimensional rest mass in the angular Klein–Gordon equation. |
| $\mechanical{m}_n$ | $\unit{GeV}$ | Mode mass | Four-dimensional mass associated with the circular Fourier label. |
| $\signal{\psi},\signal{\psi}_n$ | — | Scalar waves | Scalar field and Fourier coefficients in the unnormalized expansion; amplitude units depend on the chosen normalization. |
| $C$ | — | Wave amplitude | Constant amplitude with units set by the chosen wave normalization. |
| $\signal{\Omega}_{ab}$ | $1$ | Wave phase | Local wave phase and its path-dependent gauge-independent comparison. |
