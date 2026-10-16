---
title: "Deriving charge from phase winding"
document_type: "Self-contained study chapter"
---

> [!TLDR]
> A circular Fourier mode becomes a charged four-dimensional field because shifting the circle’s origin changes that mode’s phase and the metric potential together.

%% source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"; video_chapter: "Charge Quantization"; video_start: "04:00:08"; video_end: "04:16:22" %%

<!-- visual-source:start -->
## Geometric and field equations

Use natural units: the speed of light and reduced Planck constant are one. Greek indices run from 0 to 3; capital Latin indices run from 0 to 4. For spacetime calculations in this first section, use a mostly-minus metric: one positive time direction and four negative spatial directions. Euclidean distance examples are identified separately. The compact angle is dimensionless and has period two pi. Its physical radius has units of length. The scalar with subscript ang is the physical radius squared; it is not a dimensionless radion. The parameter xi is a dimensionless normalization of the mixed vector. An integer n labels circular winding, and i is the imaginary unit. A real function epsilon specifies a local shift of the angular origin whenever it appears in a transformation.

### Choose the circular origin independently %% Video 04:00:20–04:07:40 %%

Start with one fixed zero-angle reference along the tube and a definite circular winding. A different choice of zero angle at each ordinary position makes the reference line curve. The same field then has a different local phase relative to that reference line. This is the geometric reason that the mode coefficient undergoes a local phase change.

A scalar has the same value at one event in either coordinate chart:

$$
\mechanical{\theta}'=\mechanical{\theta}+\mechanical{\xi}\varepsilon(\mechanical{x}),
\qquad
\signal{\psi}'(\mechanical{x},\mechanical{\theta}')=\signal{\psi}(\mechanical{x},\mechanical{\theta}).
$$

### Keep the minus sign from cancellation %% Video 04:08:00–04:10:40 %%

For one mode, substitute the new angular argument:

$$
\signal{\psi}'_n(\mechanical{x})
\exp\left[in\left(\mechanical{\theta}+\mechanical{\xi}\varepsilon(\mechanical{x})\right)\right]
=\signal{\psi}_n(\mechanical{x})\exp(in\mechanical{\theta}).
$$

Cancel the common exponential to obtain

$$
\signal{\psi}'_n(\mechanical{x})
=\exp\left[-in\mechanical{\xi}\varepsilon(\mechanical{x})\right]\signal{\psi}_n(\mechanical{x}).
$$

The negative matter-phase sign follows from expressing the old angle in terms of the new angle. Reversing the orientation of the circle reverses all charge signs together. Changing only the matter-phase sign while retaining the same potential and covariant derivative would break gauge covariance. %% Provenance: the speaker contrasts this passive-coordinate sign with Bailin–Love 1.24. %%

### Identify the charge of every mode %% Video 04:11:00–04:16:20 %%

Combine the matter and potential transformation laws:

$$
\signal{\psi}'_n=e^{-i\electric{q}_n\varepsilon}\signal{\psi}_n,
\qquad
\electric{A}'_\mu=\electric{A}_\mu+\partial_\mu\varepsilon,
\qquad
\electric{q}_n=n\mechanical{\xi}=\frac{n\mechanical{\kappa}}{\mechanical{r}},
\quad \mechanical{\kappa}=\mechanical{r}\mechanical{\xi}.
$$

The integer comes from periodicity, while the coefficient xi comes from the metric normalization. The zero mode is neutral. Opposite winding gives opposite charge and the same mass. Each mass eigenmode is also a charge eigenmode because their Fourier phase has one definite coefficient multiplying the gauge function. The fixed proportionality between charge magnitude and mass will become the main problem of the simple model.

<!-- visual-source:end -->

## Length-coordinate convention for the worked derivation

The following worked derivation uses a length coordinate y with period two pi times the reference radius and the mostly-plus metric. To translate the angular calculation above at fixed radius: set y equal to radius times angle, reverse the sign of the full metric, and reverse the sign of the potential. The length-valued coupling kappa equals radius times xi. The field-strength tensor reverses sign with the potential. The dimensionless radion Phi is the physical radius divided by the reference radius; the earlier squared-radius scalar equals reference radius squared times Phi squared. In this later notation, an index labeled 5 denotes the same compact direction labeled 4 in the first calculation; it does not add another coordinate. The algebra below defines its own variables before using them.

## Transform the full scalar field

A scalar has the same value at the same event, even when coordinate labels change. With

$$
\mechanical{y}'=\mechanical{y}+\mechanical{\kappa}\lambda(\mechanical{x}),
$$

we have

$$
\signal{\Psi}'(\mechanical{x},\mechanical{y}')
=\signal{\Psi}(\mechanical{x},\mechanical{y}'-\mechanical{\kappa}\lambda).
$$

Insert one Fourier factor:

$$
e^{in\mechanical{y}/\mechanical{r}}
=e^{in\mechanical{y}'/\mechanical{r}}
e^{-in\mechanical{\kappa}\lambda/\mechanical{r}}.
$$

The second factor multiplies the four-dimensional mode amplitude. Therefore

$$
\signal{\psi}_n'=e^{-i\electric{q}_n\lambda}\signal{\psi}_n,
\qquad
\electric{q}_n=\frac{n\mechanical{\kappa}}{\mechanical{r}}.
\tag{19.1}
$$

This is a local phase transformation with a definite charge coefficient.

## Derive the compatible covariant derivative

The ordinary derivative of the transformed field contains an extra derivative of the phase. Introduce

$$
D_\mu\signal{\psi}_n
=\left(\nabla_\mu-i\electric{q}_n\electric{A}_\mu\right)\signal{\psi}_n.
\tag{19.2}
$$

Use the potential transformation $\electric{A}_\mu'=\electric{A}_\mu-\partial_\mu\lambda$. Expanding the transformed derivative gives two extra terms of equal magnitude and opposite sign. They cancel, leaving

$$
D'_\mu\signal{\psi}_n'
=e^{-i\electric{q}_n\lambda}D_\mu\signal{\psi}_n.
\tag{19.3}
$$

This is the meaning of gauge covariance: the derivative transforms with the same local phase as the field. Compare [[3.5 Phase Invariance in Field Theory]] and [[11.3 Local Gauge Invariance]].

## Find the derivative directly in the geometry

The horizontal derivative dual to the shifted circular one-form is

$$
\partial_\mu-\mechanical{\kappa}\electric{A}_\mu\partial_{\mechanical{y}}.
$$

Acting on a mode with circular dependence $e^{in\mechanical{y}/\mechanical{r}}$ turns the final derivative into multiplication by $in/\mechanical{r}$. The operator becomes exactly equation (19.2). Thus the charge coupling follows from the same geometry as the potential transformation.

For fixed radius, a scalar mode in a curved base with electromagnetic background obeys a gauge-covariant Klein–Gordon equation. Its squared mass is $\mechanical{m}_5^{\,2}+n^2/\mechanical{r}^{\,2}$, since the second circular derivative multiplies a Fourier mode by minus $n^2/\mechanical{r}^{\,2}$.

## Interpret the signs and charge unit

The charge of the zero mode vanishes. Positive and negative winding indices give equal and opposite charges. The choice of orientation around the circle decides which winding is called positive; reversing that convention exchanges the signs without changing the physics.

For this one field and this geometric gauge group, every mode charge is an integer multiple of the first charge unit. That does not derive the full set of Standard Model charge assignments. Additional species and gauge structure require separate analysis.

## Worked gauge-covariance check

Suppose a mode initially has a constant amplitude on a local patch with zero potential. After a circular-origin change, the amplitude can have a position-dependent phase and the potential can become a gradient. The ordinary derivative of that new amplitude is nonzero. Its covariant derivative remains zero because the two new terms cancel. An apparent local phase variation has not created physical energy in the field.

## Expand the gauge-covariance cancellation

For the length-coordinate convention, substitute both transformed quantities before differentiating:

$$
\begin{aligned}
D'_\mu\signal{\psi}'_n
&=\left[\partial_\mu-i\electric{q}_n
\left(\electric{A}_\mu-\partial_\mu\lambda\right)\right]
e^{-i\electric{q}_n\lambda}\signal{\psi}_n\\
&=e^{-i\electric{q}_n\lambda}\big[
\partial_\mu\signal{\psi}_n
-i\electric{q}_n(\partial_\mu\lambda)\signal{\psi}_n\\
&\hspace{7em}-i\electric{q}_n\electric{A}_\mu\signal{\psi}_n
+i\electric{q}_n(\partial_\mu\lambda)\signal{\psi}_n\big]\\
&=e^{-i\electric{q}_n\lambda}D_\mu\signal{\psi}_n.
\end{aligned}
$$

The ordinary derivative of the phase cancels the added potential gradient. Both terms are required. For a scalar, the first spacetime covariant derivative is the ordinary derivative; metric factors enter the second derivative through its vector index.

## Obtain the charged mode equation in a curved base

For a fixed-radius metric in length coordinates, the inverse blocks and volume factor are

$$
\begin{aligned}
\widetilde g^{\mu\nu}&=g^{\mu\nu},\qquad
\widetilde g^{\mu5}=-\mechanical{\kappa}\electric{A}^\mu,\\
\widetilde g^{55}&=1+\mechanical{\kappa}^{\,2}\electric{A}_\rho\electric{A}^\rho,
\qquad \sqrt{-\widetilde g}=\sqrt{-g}.
\end{aligned}
$$

Use them in the five-dimensional scalar equation

$$
\frac1{\sqrt{-\widetilde g}}\partial_A
\left(\sqrt{-\widetilde g}\,\widetilde g^{AB}\partial_B\signal{\Psi}\right)
-\mechanical{m}_5^{\,2}\signal{\Psi}=0.
$$

On a Fourier mode, each circular derivative multiplies by $in/\mechanical{r}$. The cross terms produce minus twice the potential times that circular derivative, and the potential-squared term completes the pair of horizontal derivatives. Dividing out the nonzero exponential gives

$$
\frac1{\sqrt{-g}}D_\mu
\left(\sqrt{-g}\,g^{\mu\nu}D_\nu\signal{\psi}_n\right)
-\left(\mechanical{m}_5^{\,2}+\frac{n^2}{\mechanical{r}^{\,2}}\right)\signal{\psi}_n=0.
$$

$$
\electric{q}_n=\frac{n\mechanical{\kappa}}{\mechanical{r}}.
$$

Here D acts on the charged field factors and as the ordinary derivative on the neutral metric. This equation includes the same charge obtained from the phase transformation and the same mass obtained from circular momentum. No separate electromagnetic matter coupling has been inserted.

## Self-check

1. Does a mode with index minus two have twice the mass or twice the squared mass of the first mode when the original field is massless?
2. What is its charge relative to the plus-one mode?
3. Can one fix the later mass problem by changing the sign of the charge convention?

### Answers

1. Twice the mass and four times the squared mass.
2. Minus twice its charge.
3. No. A sign convention changes orientation, not the magnitude of the mass–charge relation.

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x},\;\mechanical{y}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{r}$ | $\unit{GeV^{-1}}$ | Reference circle radius | Radius encoded in the periodic coordinate identification. |
| $\mechanical{\kappa}$ | $\unit{GeV^{-1}}$ | Metric coupling scale | Scale between the canonical electromagnetic potential and the metric shift. |
| $\electric{A}_\mu$ | $\unit{GeV}$ | Potential components | Canonically normalized electromagnetic potential components. |
| $\signal{\Psi}$ | $\unit{GeV^{3/2}}$ | Five-dimensional scalar field | Canonically normalized higher-dimensional matter field. |
| $\signal{\psi}_n$ | $\unit{GeV}$ | Four-dimensional scalar fields | Canonical field or Fourier-mode amplitude on the base spacetime. |
| $\electric{q}_n$ | $1$ | Electric charges | Mode charge or elementary charge in Heaviside-Lorentz natural units. |
| $\mechanical{\theta}$ | $1$ | Circular angle | Compact circular angle; the spherical-coordinate inset identifies its separate polar-angle use. |
| $\mechanical{\xi}$ | $1$ | Angular normalization | Dimensionless factor relating the mixed vector to the four-potential. |
| $\signal{\psi},\signal{\psi}_n$ | — | Scalar waves | Scalar field and Fourier coefficients in the unnormalized expansion; amplitude units depend on the chosen normalization. |
| $\mechanical{m}_5,\mechanical{m}_n$ | $\unit{GeV}$ | Scalar masses | Original five-dimensional mass and reduced mode mass. |
