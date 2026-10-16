---
title: "Fourier modes and periodicity"
document_type: "Self-contained study chapter"
---

> [!TLDR]
> A periodic field has integer Fourier modes, and the derivative around the circle turns each mode number into a definite compact-direction momentum.

%% source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"; video_chapter: "Quantization from Periodicity"; video_start: "03:11:47"; video_end: "03:17:01" %%

<!-- visual-source:start -->
## Geometric and field equations

Use natural units: the speed of light and reduced Planck constant are one. Greek indices run from 0 to 3; capital Latin indices run from 0 to 4. For spacetime calculations in this first section, use a mostly-minus metric: one positive time direction and four negative spatial directions. Euclidean distance examples are identified separately. The compact angle is dimensionless and has period two pi. Its physical radius has units of length. The scalar with subscript ang is the physical radius squared; it is not a dimensionless radion. The parameter xi is a dimensionless normalization of the mixed vector. An integer n labels circular winding, and i is the imaginary unit. A real function epsilon specifies a local shift of the angular origin whenever it appears in a transformation.

### Continuous Fourier components on a line %% Video 03:12:00–03:14:40 %%

The complex phases one, imaginary one, minus one, and minus imaginary one are successive quarter turns around the unit circle. A function on a noncompact line has a continuous Fourier decomposition:

$$
f(\mechanical{x})=\int_{-\infty}^{\infty}\widetilde f(\signal{k})
\exp(i\signal{k}\mechanical{x})\,\mathrm d\signal{k}.
$$

The displayed convention absorbs Fourier normalization factors into the coefficient function. The wave number can vary continuously because the line imposes no return condition. The colored wavy line illustrates a superposition, not one momentum eigenstate.

### Periodicity changes the integral into a sum %% Video 03:15:00–03:17:00 %%

A periodic function on a circular domain instead has a discrete Fourier series:

$$
f(\mechanical{\theta})=\sum_{n=-\infty}^{\infty}\widetilde f_n\exp(in\mechanical{\theta}),
\qquad
f(\mechanical{\theta}+2\pi)=f(\mechanical{\theta}).
$$

Returning once around the circle must return the function to its original value. A single exponential therefore requires $e^{2\pi in}=1$, which selects integer mode labels. The coefficients are now a discrete set rather than a continuous coefficient function. This establishes quantized circular wave number. Identifying that wave number with mass and charge requires the wave equation and the coordinate transformation, respectively.

The orthogonality relation and the resulting coefficient are

$$
\frac1{2\pi}\int_0^{2\pi}e^{i(n-\ell)\mechanical{\theta}}\,\mathrm d\mechanical{\theta}
=\delta_{n\ell},
\qquad
\widetilde f_n=\frac1{2\pi}\int_0^{2\pi}
f(\mechanical{\theta})e^{-in\mechanical{\theta}}\,\mathrm d\mechanical{\theta}.
$$

A complex function on a circle has a magnitude and phase at each angular position. The domain remains a fixed circle even if its function values are drawn as a varying curve. Phase winding counts how many full phase turns occur in one circuit of the domain.

![[kk-fourier-winding.svg|**Fig. 16.1** A fixed circular domain permits integer phase windings; color records phase rather than a change in radius.]]

<!-- visual-source:end -->

## Length-coordinate convention for the worked derivation

The following worked derivation uses a length coordinate y with period two pi times the reference radius and the mostly-plus metric. To translate the angular calculation above at fixed radius: set y equal to radius times angle, reverse the sign of the full metric, and reverse the sign of the potential. The length-valued coupling kappa equals radius times xi. The field-strength tensor reverses sign with the potential. The dimensionless radion Phi is the physical radius divided by the reference radius; the earlier squared-radius scalar equals reference radius squared times Phi squared. In this later notation, an index labeled 5 denotes the same compact direction labeled 4 in the first calculation; it does not add another coordinate. The algebra below defines its own variables before using them.

## Impose the boundary condition

Let a scalar field live on the product of ordinary spacetime and a circle. For the periodic boundary condition used in this construction,

$$
\signal{\Psi}(\mechanical{x},\mechanical{y}+2\pi\mechanical{r})
=\signal{\Psi}(\mechanical{x},\mechanical{y}).
\tag{16.1}
$$

Consider a circular plane-wave factor $e^{i\signal{k}_5\mechanical{y}}$. After a complete circuit it acquires $e^{i2\pi\signal{k}_5\mechanical{r}}$. Periodicity requires that factor to be one. Thus its allowed wave number is an integer divided by the radius.

The integer condition comes from the boundary condition. It is not an assumption that all possible frequencies are integers on every space.

## Expand the field

Use normalized circular basis functions to write

$$
\signal{\Psi}(\mechanical{x},\mechanical{y})
=\frac1{\sqrt{2\pi\mechanical{r}}}
\sum_{n\in\mathbb Z}\signal{\psi}_n(\mechanical{x})e^{in\mechanical{y}/\mechanical{r}}.
\tag{16.2}
$$

Each coefficient is a field over four-dimensional spacetime. The discrete mode label is not another coordinate. For suitable fields the expansion can be understood in the square-integrable sense; extra smoothness is needed when differentiating it term by term.

The normalization follows from orthogonality:

$$
\frac1{2\pi\mechanical{r}}
\int_0^{2\pi\mechanical{r}}\mathrm d\mechanical{y}\,
e^{i(n-m)\mechanical{y}/\mechanical{r}}
=\delta_{nm}.
\tag{16.3}
$$

For unequal integers, integration over a whole number of phase cycles cancels. For equal integers, the integrand is one and the circumference cancels the denominator.

## Why the normalization matters physically

Suppose the five-dimensional action has a canonical scalar kinetic term. Insert equation (16.2) and integrate around the circle. Orthogonality removes cross terms between distinct modes. The factor in front of the sum makes each four-dimensional mode’s kinetic term canonically normalized.

In natural units, a canonical scalar field has mass dimension three halves in five dimensions and one in four dimensions. The inverse square root of a length supplies the missing one-half power. This checks the normalization dimensionally.

## Read off compact momentum

The compact-direction momentum operator is minus the imaginary unit times the circular derivative. Acting on a basis factor gives

$$
-i\partial_{\mechanical{y}}e^{in\mechanical{y}/\mechanical{r}}
=\frac{n}{\mechanical{r}}e^{in\mechanical{y}/\mechanical{r}}.
$$

Hence

$$
\mechanical{p}_{5,n}=\frac{n}{\mechanical{r}}.
\tag{16.4}
$$

Restoring the reduced Planck constant gives compact momentum equal to the integer times $\energy{\hbar}/\mechanical{r}$. The canonical momentum conjugate to the angle is different by a radius factor and has angular-momentum units. Do not confuse these two quantities.

## Worked mode example

For a field proportional to $1+2\cos(\mechanical{y}/\mechanical{r})$, use the exponential expression for cosine. The field contains a zero mode and the two modes with indices plus and minus one. The two nonzero modes have opposite compact momentum but equal momentum magnitude.

A real field obeys $\signal{\psi}_{-n}=\signal{\psi}_n^{*}$. Its positive and negative modes are therefore not arbitrary independent complex fields. A general complex five-dimensional field does not have this reality constraint.

## Self-check

1. What mode is retained by the cylinder condition?
2. Would a field that changes sign after a circuit have the same spectrum?

### Answers

1. The zero mode. It has no circular dependence.
2. No. An antiperiodic boundary condition shifts the allowed mode numbers by one half. Different fields and spin structures can have different boundary conditions; equation (16.1) states the one used here.

Continue to [[KK 18 Deriving the Kaluza-Klein mass tower]] after reviewing the wave equation in the next chapter.

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x},\;\mechanical{y}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{r}$ | $\unit{GeV^{-1}}$ | Reference circle radius | Radius encoded in the periodic coordinate identification. |
| $\signal{\Psi}$ | $\unit{GeV^{3/2}}$ | Five-dimensional scalar field | Canonically normalized higher-dimensional matter field. |
| $\signal{\psi}_n,\;\signal{\psi}_{-n}$ | $\unit{GeV}$ | Four-dimensional scalar fields | Canonical field or Fourier-mode amplitude on the base spacetime. |
| $\mechanical{p}_{5,n}$ | $\unit{GeV}$ | Momenta | Compact-direction or ordinary spatial momentum. |
| $\signal{k}_5$ | $\unit{GeV}$ | Angular frequency and wave vector | Temporal or spatial phase gradient in natural units. |
| $\energy{\hbar}$ | $1$ | Reduced Planck constant | Set to one in natural units; restored explicitly in SI formulas. |
| $\mechanical{\theta}$ | $1$ | Circular angle | Compact circular angle; the spherical-coordinate inset identifies its separate polar-angle use. |
