---
title: "Conclusions and cumulative problems"
source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"
video_chapter: "Concluding Thoughts"
video_start: "05:05:26"
video_end: "05:11:18"
document_type: "Original self-study chapter with added derivations and exercises"
---

> [!TLDR]
> The core result is a geometric origin for an Abelian connection and its dynamics; a successful physical theory still needs a consistent scalar sector and realistic matter.

## Rebuild the full argument

Start from a metric with a compact spacelike direction. Impose the cylinder condition on the retained gravitational background. Complete the square to identify the base metric, mixed vector, and radion.

A local change in the circular origin changes the vector by a gradient and changes the phase of a periodic matter mode. The same transformation leaves the base geometry unchanged. The correct matter derivative combines its ordinary derivative with the potential.

The fixed-radius gravitational action reduces to Einstein–Maxwell form. Periodicity supplies integer circular momenta, which appear as discrete four-dimensional masses and charges. The scalar equation and the resulting mass–charge scale then expose limitations of the simplest model.

The following problems are intended as a cumulative test. Use earlier chapters only after attempting each calculation.

## Problem 1: Extract fields from a block metric

Suppose a five-dimensional metric has fifth diagonal coefficient $D>0$, mixed entries $C_\mu$, and base block $H_{\mu\nu}$. These are temporary labels for matrix entries.

Find the radius factor, canonical vector potential, and base metric. Explain why using the uncorrected base block would be wrong.

### Solution

Complete the square exactly as in [[KK 06 Algebraic decomposition of the metric]]:

$$
\mechanical{\Phi}=\sqrt D,
\qquad
\electric{A}_\mu=\frac{C_\mu}{\mechanical{\kappa}D},
\qquad
g_{\mu\nu}=H_{\mu\nu}-\frac{C_\mu C_\nu}{D}.
$$

The subtraction removes the base quadratic term already contained in the shifted circular square. Without it, rebuilding the original line element would double-count that contribution.

## Problem 2: Check a pure-gauge configuration

Begin with zero potential. Change the circular origin by a smooth base-dependent parameter. Derive the new potential and show that its field strength vanishes.

### Solution

Invariance of the shifted circular differential gives

$$
\electric{A}_\mu'=-\partial_\mu\lambda.
$$

Its antisymmetric derivative vanishes because the second derivatives commute. The full metric can have new mixed entries, but the configuration remains a pure coordinate/gauge change. Compare [[KK 10 Gauge freedom on a tube]].

## Problem 3: Derive a massive tower

Let the original five-dimensional mass be $4\,\unit{GeV}$ and the inverse radius be $3\,\unit{GeV}$. Find the zero-mode and first two nonzero mass levels. State the charges in units of the first positive charge.

### Solution

Use the squared-mass sum from [[KK 18 Deriving the Kaluza-Klein mass tower]]. The masses are four, five, and $\sqrt{52}$ GeV. Each nonzero level has two opposite circular-momentum signs. Their charges are plus or minus one and plus or minus two in the stated charge units. The zero mode has zero geometric charge.

The masses are not evenly spaced because the starting field is already massive.

## Problem 4: Match the action normalization

After the circular integral, the field-strength quadratic term has coefficient

$$
-\frac{\mechanical{\kappa}^{\,2}}{64\pi\mechanical{G}_4}.
$$

Find the condition for canonical Maxwell normalization. Explain why rescaling the potential later also rescales mode charges.

### Solution

Set this coefficient equal to minus one quarter. This gives

$$
\mechanical{\kappa}^{\,2}=16\pi\mechanical{G}_4.
$$

The matter derivative contains the product of charge and potential. A rescaling of the potential requires the inverse rescaling of the charge to preserve that derivative. A normalization convention therefore cannot independently alter a physical charge-to-mass prediction.

## Problem 5: Check the omitted equation

A restricted calculation gives a four-dimensional Einstein–Maxwell solution and sets the radion to a nonzero constant. Is this automatically a solution of unrestricted five-dimensional vacuum gravity?

### Solution

No. The scalar equation must also hold. In the simple vacuum reduction it requires

$$
\electric{F}_{\mu\nu}\electric{F}^{\mu\nu}=0
$$

for a constant radion. A generic electromagnetic solution does not satisfy this. A stabilization mechanism or extra matter changes the full problem and must be supplied rather than assumed. See [[KK 23 Radion and the mass-charge problem]].

## What you should now be able to do

You should be able to reproduce the metric decomposition, distinguish a base metric from a coordinate slice, calculate the induced gauge transformation, normalize the action, derive the matter tower, and identify the simple model’s mass–charge failure.

You should also be able to identify the assumptions in each step. The collection is not a derivation of the full Standard Model, a complete treatment of fermion compactification, or a proof that extra dimensions exist. Those are separate research and study problems.

For deeper work, follow the relevant sections in [[Relativists Toolkit - Contents]], [[Gauge Theories - Contents]], and [[Elementary Particles - Contents]].

## Source and navigation

[Video segment 05:05:26–05:11:18](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=18326s). These are original study notes for the segment topic, with added calculations and exercises. They are not a transcript or a line-by-line reconstruction of the segment.

[[Kaluza-Klein - Study Guide#Notation and units|Notation, units, and sources]] · Previous: [[KK 23 Radion and the mass-charge problem]] · Next: [[KK 25 Credits and further study]]

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $g_{\mu\nu}$ | $1$ | Metric fields | Metric coefficients for length-valued coordinates; an angular coefficient instead carries the required length factors. |
| $\mechanical{\Phi}$ | $1$ | Radion | Ratio of the physical circular radius to the reference radius. |
| $\mechanical{\kappa}$ | $\unit{GeV^{-1}}$ | Metric coupling scale | Scale between the canonical electromagnetic potential and the metric shift. |
| $\electric{A}_\mu$ | $\unit{GeV}$ | Potential components | Canonically normalized electromagnetic potential components. |
| $\electric{F}_{\mu\nu},\;\electric{F}^{\mu\nu}$ | $\unit{GeV^2}$ | Electromagnetic field strength | Antisymmetric derivative of the gauge potential, in coordinate or frame components. |
| $\mechanical{G}_4$ | $\unit{GeV^{-2}}$ | Four-dimensional gravitational constant | Coupling in the reduced gravitational action. |
