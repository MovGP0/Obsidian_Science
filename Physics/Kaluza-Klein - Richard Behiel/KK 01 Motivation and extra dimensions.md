---
title: "Motivation and extra dimensions"
source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"
video_chapter: "Video Intro"
video_start: "00:00:00"
video_end: "00:12:45"
document_type: "Original self-study chapter with added derivations and exercises"
---

> [!TLDR]
> A small compact dimension can be hidden at low energy while still changing the fields and particle modes seen in four dimensions.

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

## Source and navigation

[Video segment 00:00:00–00:12:45](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=0s). These are original study notes for the segment topic, with added calculations and exercises. They are not a transcript or a line-by-line reconstruction of the segment.

[[Kaluza-Klein - Study Guide#Notation and units|Notation, units, and sources]] · Next: [[KK 02 Study route and source books]]

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{y}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{r}$ | $\unit{GeV^{-1}}$ | Reference circle radius | Radius encoded in the periodic coordinate identification. |
| $\energy{E}_{\mathrm{KK}}$ | $\unit{GeV}$ | Energies | Excitation scale, wave energy, or first-mode rest energy. |
| $\energy{\hbar}$ | $1$ | Reduced Planck constant | Set to one in natural units; restored explicitly in SI formulas. |
| $\mechanical{c}$ | $1$ | Speed of light | Set to one in natural units; restored explicitly in SI formulas. |
