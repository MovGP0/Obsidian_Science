---
title: "Deriving the Kaluza–Klein mass tower"
document_type: "Self-contained study chapter"
---

> [!TLDR]
> Separating a periodic spatial coordinate in the five-dimensional Klein–Gordon equation gives a four-dimensional tower whose squared masses include the squared compact momentum.

%% source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"; video_chapter: "Mass Quantization"; video_start: "03:35:56"; video_end: "04:00:08" %%

<!-- visual-source:start -->
## Geometric and field equations

Use natural units: the speed of light and reduced Planck constant are one. Greek indices run from 0 to 3; capital Latin indices run from 0 to 4. For spacetime calculations in this first section, use a mostly-minus metric: one positive time direction and four negative spatial directions. Euclidean distance examples are identified separately. The compact angle is dimensionless and has period two pi. Its physical radius has units of length. The scalar with subscript ang is the physical radius squared; it is not a dimensionless radion. The parameter xi is a dimensionless normalization of the mixed vector. An integer n labels circular winding, and i is the imaginary unit. A real function epsilon specifies a local shift of the angular origin whenever it appears in a transformation.

### Roll a plane wave into a tube %% Video 03:36:00–03:43:20 %%

The warm-up compares a flat two-dimensional spatial plane with one spatial direction rolled into a circle. In the flat case,

$$
\signal{\psi}(\mechanical{t},\mechanical{x},\mechanical{y})
=C\exp\left[i\left(\mechanical{p}_x\mechanical{x}+\mechanical{p}_y\mechanical{y}-\energy{E}\mechanical{t}\right)\right],
\qquad
\energy{E}^{\,2}=\mechanical{p}_x^{\,2}+\mechanical{p}_y^{\,2}
$$

for a massless field. Neither momentum is restricted by a circular return condition. After rolling the second direction into an angle,

$$
\signal{\psi}(\mechanical{t},\mechanical{x},\mechanical{\theta})
=C\exp\left[i\left(\mechanical{p}_x\mechanical{x}+\mechanical{p}_\theta\mechanical{r}\mechanical{\theta}-\energy{E}\mechanical{t}\right)\right],
\qquad
\mechanical{p}_\theta=\frac n{\mechanical{r}},\quad n\in\mathbb Z.
$$

Single-valuedness around the circle quantizes circular momentum. It does not quantize momentum along an unbounded axial direction, because the latter has no periodic return condition.

An observer who resolves only the axial direction samples a wave proportional to $\exp[i(\mechanical{p}_x\mechanical{x}-\energy{E}\mechanical{t})]$. The circular phase factor is not resolved, but its energy contribution remains:

$$
\energy{E}^{\,2}=\mechanical{p}_x^{\,2}+\frac{n^2}{\mechanical{r}^{\,2}}.
$$

The observer therefore infers a rest mass of $|n|/\mechanical{r}$. The illustrated dispersion curves are separate allowed branches of this relation. Rolling the direction imposes a boundary condition; it does not change the local massless propagation law in the full space.

### Derive the five-dimensional mass tower %% Video 03:43:40–03:55:20 %%

Expand the full scalar field, abbreviating the four base coordinates by x:

$$
\signal{\psi}(\mechanical{x},\mechanical{\theta})
=\sum_{n=-\infty}^{\infty}\signal{\psi}_n(\mechanical{x})\exp(in\mechanical{\theta}).
$$

The five-dimensional Klein–Gordon equation first has a possible five-dimensional mass. The calculation then sets that mass to zero:

$$
(\widetilde\Box+\mechanical{\widetilde m}^{\,2})\signal{\psi}=0,
\qquad
\mechanical{\widetilde m}=0,
\qquad
\widetilde\Box=\Box_x-\mechanical{r}^{-2}\partial_\theta^2.
$$

Acting on a Fourier component gives

$$
\partial_\theta^2\exp(in\mechanical{\theta})=-n^2\exp(in\mechanical{\theta}),
\qquad
\left(\Box_x+\frac{n^2}{\mechanical{r}^{\,2}}\right)\signal{\psi}_n=0.
$$

Compare this with the four-dimensional Klein–Gordon equation to read

$$
\mechanical{m}_n=\frac{|n|}{\mechanical{r}}.
$$

The zero mode is massless when the original five-dimensional field is massless. Opposite nonzero integer labels have equal masses and opposite circular momenta. The expansion here leaves overall field normalization arbitrary. The later normalized expansion supplies the prefactor needed for canonical four-dimensional kinetic terms.

### Why a superposition does not mix the modes %% Video 03:56:20–04:00:00 %%

A general field can contain a superposition of these modes. The ordinary wave operator leaves each angular exponential unchanged, while the second angular derivative multiplies it by minus the squared integer label. The free equation therefore does not mix different mode labels.

For the full superposition, the equation is

$$
\sum_{n\in\mathbb Z}
\left(\Box_x+\frac{n^2}{\mechanical{r}^{\,2}}\right)
\signal{\psi}_n(\mechanical{x})e^{in\mechanical{\theta}}=0.
$$

Multiply by the opposite circular phase for one integer label ell and integrate. Orthogonality gives

$$
\begin{aligned}
0&=\frac1{2\pi}\int_0^{2\pi}e^{-i\ell\mechanical{\theta}}
\sum_n\left(\Box_x+\frac{n^2}{\mechanical{r}^{\,2}}\right)
\signal{\psi}_n e^{in\mechanical{\theta}}\,\mathrm d\mechanical{\theta}\\
&=\left(\Box_x+\frac{\ell^2}{\mechanical{r}^{\,2}}\right)\signal{\psi}_\ell.
\end{aligned}
$$

Orthogonality removes every other integer label, so each coefficient satisfies its own four-dimensional equation. This projection gives a separate equation for each coefficient, rather than forcing the whole field to occupy one coefficient. The cylinder condition extends the mode-label separation to a circle-independent background. Interactions and backreaction require additional analysis; the simple free calculation does not establish independent interacting sectors in every model.

![[kk-momentum-and-mass.svg|**Fig. 18.1** Circular momentum contributes to the energy seen by an ordinary-space observer as rest mass.]]

<!-- visual-source:end -->

## Length-coordinate convention for the worked derivation

The following worked derivation uses a length coordinate y with period two pi times the reference radius and the mostly-plus metric. To translate the angular calculation above at fixed radius: set y equal to radius times angle, reverse the sign of the full metric, and reverse the sign of the potential. The length-valued coupling kappa equals radius times xi. The field-strength tensor reverses sign with the potential. The dimensionless radion Phi is the physical radius divided by the reference radius; the earlier squared-radius scalar equals reference radius squared times Phi squared. In this later notation, an index labeled 5 denotes the same compact direction labeled 4 in the first calculation; it does not add another coordinate. The algebra below defines its own variables before using them.

## Start from a flat product background

For the first spectrum calculation, take a flat four-dimensional base, a constant radius, and zero electromagnetic background. The five-dimensional wave operator separates:

$$
\Box_5=\Box_4+\partial_{\mechanical{y}}^{\,2}.
$$

A scalar field of five-dimensional mass $\mechanical{m}_5$ satisfies

$$
\left(\Box_5-\mechanical{m}_5^{\,2}\right)\signal{\Psi}=0.
\tag{18.1}
$$

Insert the Fourier expansion from [[KK 16 Fourier modes and periodicity]]. Each circular factor is an eigenfunction of the second derivative:

$$
\partial_{\mechanical{y}}^{\,2}
e^{in\mechanical{y}/\mechanical{r}}
=-\frac{n^2}{\mechanical{r}^{\,2}}
e^{in\mechanical{y}/\mechanical{r}}.
$$

## Separate the mode equations

Orthogonality lets each independent Fourier coefficient satisfy

$$
\left[
\Box_4-
\left(\mechanical{m}_5^{\,2}+\frac{n^2}{\mechanical{r}^{\,2}}\right)
\right]\signal{\psi}_n=0.
\tag{18.2}
$$

Compare this with the four-dimensional Klein–Gordon equation. The effective mass is

$$
\mechanical{m}_n^{\,2}
=\mechanical{m}_5^{\,2}+\frac{n^2}{\mechanical{r}^{\,2}}.
\tag{18.3}
$$

The mathematical field equation, not just a drawing, establishes the mass interpretation.

## Derive the same result from energy

The five-dimensional dispersion relation is

$$
\energy{E}^{\,2}
=|\mechanical{\mathbf p}|^2
+\mechanical{p}_{5,n}^{\,2}
+\mechanical{m}_5^{\,2}.
$$

A four-dimensional observer tracks the energy and three ordinary spatial momentum components. The remaining constant is interpreted as squared rest mass. Using the quantized compact momentum reproduces equation (18.3).

This interpretation does not require the particle to be classically orbiting a visible ring. It is a statement about the circular dependence of the quantum field mode.

## Important special cases

For a massless five-dimensional field,

$$
\mechanical{m}_0=0,
\qquad
\mechanical{m}_n=\frac{|n|}{\mechanical{r}}.
\tag{18.4}
$$

The plus and minus modes have equal masses. They carry opposite compact momenta and will later have opposite charges. The tower is evenly spaced in mass only in this massless starting case. If the five-dimensional mass is nonzero, equation (18.3), rather than an evenly spaced mass formula, is the correct result.

In SI units the dimensional relation is

$$
\mechanical{m}_n^{\,2}
=\mechanical{m}_5^{\,2}
+\frac{n^2\energy{\hbar}^{\,2}}{\mechanical{r}^{\,2}\mechanical{c}^{\,2}}.
$$

Equivalently, the rest-energy squared receives a contribution from the compact momentum multiplied by the speed of light.

## Worked tower

Let the inverse radius correspond to $2\,\unit{GeV}$ and the original mass be $3\,\unit{GeV}$. The zero mode has mass $3\,\unit{GeV}$. The first two nonzero levels have masses $\sqrt{13}\,\unit{GeV}$ and $5\,\unit{GeV}$. Positive and negative values of the same index give the same mass.

If instead the original mass vanishes, the same radius gives masses zero, two, four, six, and so on in GeV. The change illustrates why “equally spaced tower” needs its stated massless assumption.

## Limits of this derivation

The calculation assumes a simple product background and a free field. Warping, interactions, different boundary conditions, and a varying radius can change the spectrum. Modes can mix if the background loses circular translation symmetry. The equation is a precise result for the stated setting, not a universal mass formula for every compactification.

## Self-check

1. Can an ordinary positive five-dimensional mass cancel the compact-momentum contribution?
2. What happens to every nonzero mode as the radius tends to zero?

### Answers

1. No. Both terms in equation (18.3) are nonnegative for a stable non-tachyonic starting field.
2. Its mass increases without bound in this simple model. Only the zero-mode sector can remain light at fixed low energy.

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{y}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{r}$ | $\unit{GeV^{-1}}$ | Reference circle radius | Radius encoded in the periodic coordinate identification. |
| $\signal{\Psi}$ | $\unit{GeV^{3/2}}$ | Five-dimensional scalar field | Canonically normalized higher-dimensional matter field. |
| $\signal{\psi}_n$ | $\unit{GeV}$ | Four-dimensional scalar fields | Canonical field or Fourier-mode amplitude on the base spacetime. |
| $\mechanical{m}_5,\;\mechanical{m}_n,\;\mechanical{m}_0$ | $\unit{GeV}$ | Masses | Original mass or effective four-dimensional mode mass in natural units. |
| $\mechanical{p}_{5,n},\;\mechanical{\mathbf p}$ | $\unit{GeV}$ | Momenta | Compact-direction or ordinary spatial momentum. |
| $\energy{E}$ | $\unit{GeV}$ | Energies | Excitation scale, wave energy, or first-mode rest energy. |
| $\energy{\hbar}$ | $1$ | Reduced Planck constant | Set to one in natural units; restored explicitly in SI formulas. |
| $\mechanical{c}$ | $1$ | Speed of light | Set to one in natural units; restored explicitly in SI formulas. |
| $\mechanical{t}$ | $\unit{GeV^{-1}}$ | Time | Time coordinate in the angular formulation’s natural units. |
| $\mechanical{x}$ | $\unit{GeV^{-1}}$ | Base coordinate | Ordinary length-valued base coordinate; a four-coordinate argument where stated. |
| $\mechanical{\theta}$ | $1$ | Circular angle | Compact circular angle; the spherical-coordinate inset identifies its separate polar-angle use. |
| $\mechanical{p}_x,\mechanical{p}_y$ | $\unit{GeV}$ | Momenta | Four-momentum and ordinary spatial momentum components. |
| $\mechanical{p}_\theta$ | $\unit{GeV}$ | Circular momentum | Physical momentum around the circle, equal to the integer mode divided by radius. |
| $\mechanical{\widetilde m}$ | $\unit{GeV}$ | Full-space mass | Five-dimensional starting mass, set to zero in the angular mass-tower calculation. |
| $\signal{\psi},\signal{\psi}_n$ | — | Scalar waves | Scalar field and Fourier coefficients in the unnormalized expansion; amplitude units depend on the chosen normalization. |
| $C$ | — | Wave amplitude | Constant amplitude with units set by the chosen wave normalization. |
