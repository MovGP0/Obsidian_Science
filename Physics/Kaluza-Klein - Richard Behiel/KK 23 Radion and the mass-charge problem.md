---
title: "Radion and the mass-charge problem"
source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"
video_chapter: "The Two Main Flaws"
video_start: "04:52:30"
video_end: "05:05:26"
document_type: "Original self-study chapter with added derivations and exercises"
---

> [!TLDR]
> The radion supplies a missing scalar equation, while matching the first geometric charge to the elementary charge forces a tower mass about a billion trillion times too large for the electron.

## Restore the radius field

Use the metric with a positive radius factor and retain its ordinary-spacetime dependence. The determinant and curvature become

$$
\sqrt{-\widetilde g}=\mechanical{\Phi}\sqrt{-g},
$$

$$
R_5=R_4
-\frac{\mechanical{\kappa}^{\,2}\mechanical{\Phi}^{\,2}}4
\electric{F}_{\mu\nu}\electric{F}^{\mu\nu}
-2\mechanical{\Phi}^{-1}\Box\mechanical{\Phi}.
\tag{23.1}
$$

The last term contains derivatives of the radius. The wave operator here is built from the base metric. Integrating around the reference circle and discarding the resulting total-derivative bulk contribution gives the Jordan-frame action

$$
\energy{S}_4
=\frac1{16\pi\mechanical{G}_4}
\int\mathrm d^4\mechanical{x}\sqrt{-g}
\left[
\mechanical{\Phi}R_4
-\frac{\mechanical{\kappa}^{\,2}\mechanical{\Phi}^{\,3}}4
\electric{F}_{\mu\nu}\electric{F}^{\mu\nu}
\right].
\tag{23.2}
$$

Boundary treatment is understood. The absence of an explicit standalone scalar kinetic term in this frame does not make the scalar nondynamical: it is coupled to curvature. A conformal change of the base metric rearranges these terms. It does not eliminate the physical scalar degree of freedom.

## Obtain the missing constraint

Varying the scalar in equation (23.2) gives

$$
R_4-\frac{3\mechanical{\kappa}^{\,2}\mechanical{\Phi}^{\,2}}4
\electric{F}_{\mu\nu}\electric{F}^{\mu\nu}=0.
$$

Combining this with the trace of the base-metric equation yields

$$
\Box\mechanical{\Phi}
=\frac{\mechanical{\kappa}^{\,2}\mechanical{\Phi}^{\,3}}4
\electric{F}_{\mu\nu}\electric{F}^{\mu\nu}.
\tag{23.3}
$$

For a nonzero constant radius factor in five-dimensional vacuum, the left-hand side vanishes. Therefore

$$
\electric{F}_{\mu\nu}\electric{F}^{\mu\nu}=0.
\tag{23.4}
$$

The condition does not require the whole electromagnetic field to vanish. In the stated signature, the invariant is twice magnetic-field magnitude squared minus electric-field magnitude squared. A plane electromagnetic wave can satisfy it; a generic purely electrostatic field does not.

This is why restricting the action first and varying it afterward can admit more configurations than the full vacuum theory. Additional stabilization physics changes the scalar equation and must be included explicitly. Compare section 3.4 of [Overduin and Wesson](https://arxiv.org/html/gr-qc/9805018).

## Derive the charged-mode scale

Return to the fixed-radius spectrum for a massless five-dimensional matter field:

$$
\mechanical{m}_n=\frac{|n|}{\mechanical{r}},
\qquad
\electric{q}_n=\frac{n\mechanical{\kappa}}{\mechanical{r}},
\qquad
\mechanical{\kappa}^{\,2}=16\pi\mechanical{G}_4.
\tag{23.5}
$$

Identify the first nonzero charge magnitude with the elementary charge. In Heaviside–Lorentz natural units,

$$
\electric{e}^{\,2}=4\pi\electric{\alpha},
\qquad
\mechanical{\ell}_P=\sqrt{\mechanical{G}_4}.
$$

The first-charge condition then fixes the radius:

$$
\mechanical{r}=\frac{\mechanical{\kappa}}{\electric{e}}
=\frac{\sqrt{16\pi\mechanical{G}_4}}{\sqrt{4\pi\electric{\alpha}}}
=\frac{2\mechanical{\ell}_P}{\sqrt{\electric{\alpha}}}.
\tag{23.6}
$$

With the low-energy fine-structure constant, this is approximately twenty-three Planck lengths, or $3.8\times10^{-34}\,\unit{m}$. The corresponding first-mode rest energy, restoring conversion factors for the numerical evaluation, is

$$
\energy{E}_1=\mechanical{m}_1\mechanical{c}^{\,2}
=\frac{\energy{\hbar}\mechanical{c}}{\mechanical{r}}
\approx5.2\times10^{17}\,\unit{GeV}.
\tag{23.7}
$$

The electron rest energy is about $5.11\times10^{-4}\,\unit{GeV}$. Their ratio is approximately $10^{21}$. The result is therefore not a small correction to the electron mass.

## Test possible simple repairs

**Increase the radius.** This lowers the mass spacing, but also lowers the charge unit because both are inversely proportional to the radius. Once gravity and the potential normalization are fixed, the two adjustments cannot be separated in this model.

**Add an ordinary five-dimensional mass.** The mode relation becomes the sum of two nonnegative squared-mass terms. It raises the mode mass rather than canceling the excessive compact contribution.

**Use the zero mode.** This can keep the compact contribution to mass zero, but its geometric charge is also zero. A separate origin of charge would abandon the proposed identification being tested.

**Use the Higgs mechanism.** A mechanism for additional small masses does not supply the missing geometric charge of a zero mode. [[11.9 The Higgs Mechanism]] addresses a different part of the problem.

These arguments apply to the simple spectrum and coupling assumptions stated here. More elaborate compactifications can change them, but must be evaluated as new models.

## Self-check

1. Explain why the constant-radion constraint does not force every electromagnetic field to be zero.
2. Show that changing the radius cannot change the charge-to-mass ratio for nonzero modes of a massless starting field.
3. Why is a sign convention unable to repair the mass problem?

### Answers

1. The constraint is on one quadratic invariant, not every component. Null electromagnetic configurations can have nonzero field strength and zero invariant.
2. Divide the charge magnitude by the mode mass in equation (23.5). The mode index and radius cancel, leaving the metric coupling scale.
3. Reversing the circle orientation changes charge signs, while masses depend on the absolute mode index. The excessive mass magnitude is unchanged.

## Source and navigation

[Video segment 04:52:30–05:05:26](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=17550s). These are original study notes for the segment topic, with added calculations and exercises. They are not a transcript or a line-by-line reconstruction of the segment.

[[Kaluza-Klein - Study Guide#Notation and units|Notation, units, and sources]] · Previous: [[KK 22 Limits and missing ingredients]] · Next: [[KK 24 Conclusions and cumulative problems]]

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{r}$ | $\unit{GeV^{-1}}$ | Reference circle radius | Radius encoded in the periodic coordinate identification. |
| $g_{\mu\nu}$ | $1$ | Metric fields | Metric coefficients for length-valued coordinates; an angular coefficient instead carries the required length factors. |
| $\mechanical{\Phi}$ | $1$ | Radion | Ratio of the physical circular radius to the reference radius. |
| $\mechanical{\kappa}$ | $\unit{GeV^{-1}}$ | Metric coupling scale | Scale between the canonical electromagnetic potential and the metric shift. |
| $\electric{F}_{\mu\nu},\;\electric{F}^{\mu\nu}$ | $\unit{GeV^2}$ | Electromagnetic field strength | Antisymmetric derivative of the gauge potential, in coordinate or frame components. |
| $\energy{S}_4$ | $1$ | Actions | Actions measured in units of the reduced Planck constant. |
| $\mechanical{G}_4$ | $\unit{GeV^{-2}}$ | Four-dimensional gravitational constant | Coupling in the reduced gravitational action. |
| $R_4,\;R_5$ | $\unit{GeV^2}$ | Curvature fields | Ricci scalar, Ricci tensor, or Einstein tensor as indicated by the symbol. |
| $\mechanical{m}_n,\;\mechanical{m}_1$ | $\unit{GeV}$ | Masses | Original mass or effective four-dimensional mode mass in natural units. |
| $\energy{E}_1$ | $\unit{GeV}$ | Energies | Excitation scale, wave energy, or first-mode rest energy. |
| $\electric{q}_n,\;\electric{e}$ | $1$ | Electric charges | Mode charge or elementary charge in Heaviside-Lorentz natural units. |
| $\electric{\alpha}$ | $1$ | Fine-structure constant | Dimensionless electromagnetic coupling. |
| $\mechanical{\ell}_P$ | $\unit{GeV^{-1}}$ | Planck length | Four-dimensional gravitational length scale. |
| $\energy{\hbar}$ | $1$ | Reduced Planck constant | Set to one in natural units; restored explicitly in SI formulas. |
| $\mechanical{c}$ | $1$ | Speed of light | Set to one in natural units; restored explicitly in SI formulas. |
