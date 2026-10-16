---
title: "Electromagnetism as a fifth dimension (Kaluza–Klein)"
source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"
author: "Richard Behiel"
published: 2026-10-08
accessed: 2026-10-16
duration: "05:12:12"
caption_source: "YouTube English automatic captions"
document_type: "Study article based on captions, with added derivations and references"
tags:
  - physics
  - general-relativity
  - electromagnetism
  - gauge-theory
  - kaluza-klein
---

> [!TLDR]
> A compact fifth dimension can encode gravity and an electromagnetic gauge field in one metric. Its circular geometry gives discrete mass and charge modes, but the simplest model does not reproduce known matter.

## Detailed self-study chapters

Use [[Kaluza-Klein - Study Guide]] for the expanded study collection. It has one note per video timestamp chapter, with step-by-step calculations, worked examples, exercises with answers, and links to the existing vault material. The present article remains the short overview.

## Source and scope

This article uses the English automatic captions of Richard Behiel’s [video](https://www.youtube.com/watch?v=hcL3yJ03jQQ) as its starting point. It develops the main arguments with equations and links to existing vault notes. It is a paraphrased study article, not a verbatim transcript. Automatic captions can misidentify names and symbols; the notation below is defined independently of those caption spellings.

The video follows the first part of David Bailin and Alex Love’s [Kaluza–Klein theories](https://doi.org/10.1088/0034-4885/50/9/001). It also cites three books already represented in this vault: [[Elementary Particles - Contents]], [[Gauge Theories - Contents]], and [[Relativists Toolkit - Contents]].

> [!note]
> The equations below use natural units, with $\energy{\hbar}=\mechanical{c}=1$, and metric signature $(-,+,+,+,+)$. The fifth coordinate has units of length. Electromagnetism uses Heaviside–Lorentz normalization. These explicit conventions can change signs and scale factors relative to the video’s notation without changing the argument.

## A guide to the video

| Start | Subject |
| --- | --- |
| [00:00](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=0s) | Motivation and the limits of a geometric interpretation |
| [12:45](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=765s) | Plan of the explanation and source books |
| [25:05](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=1505s) | Intervals and the metric |
| [50:27](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=3027s) | Restrictions on the five-dimensional metric |
| [1:00:41](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=3641s) | Separation into tensor, vector, and scalar fields |
| [1:26:18](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=5178s) | Identification of the electromagnetic potential |
| [1:41:13](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=6073s) | A tube model for gauge transformations |
| [1:54:04](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=6844s) | Transformation laws in the full geometry |
| [2:24:12](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=8652s) | Reduction of the gravitational action |
| [2:49:03](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=10143s) | Curvature and the electromagnetic field strength |
| [3:11:47](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=11507s) | Periodic fields and discrete modes |
| [3:35:56](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=12956s) | Effective particle masses |
| [4:00:08](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=14408s) | Electric charge and phase winding |
| [4:16:22](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=15382s) | Coordinate freedom and local gauge symmetry |
| [4:39:16](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=16756s) | Problems with the simplest model |
| [4:52:30](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=17550s) | The radius field and the mass–charge problem |
| [5:05:26](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=18326s) | What the model does and does not establish |

## 1. Add a compact spatial dimension

The model adds a circular spatial dimension to ordinary spacetime. Locally, its geometry has the product structure

$$
M_5 \simeq M_4\times S^1,
\qquad
\mechanical{y}\sim\mechanical{y}+2\pi\mechanical{r}.
$$

Here, the circle has radius $\mechanical{r}$. A small radius makes motion around the circle difficult to resolve at low energy. The circle is a dimension of the model itself; it does not require a visible tube embedded in ordinary space.

The [[Spacetime Interval]] is the starting point. For coordinates $\mechanical{X}^A=(\mechanical{x}^\mu,\mechanical{y})$, write

$$
\mathrm d\mechanical{s}_5^{\,2}
=\widetilde g_{AB}\,\mathrm d\mechanical{X}^A\mathrm d\mechanical{X}^B.
$$

Capital indices cover all five coordinates. Greek indices cover the four ordinary spacetime coordinates. Repeated indices are summed. Indices and differential operators are mathematical notation and remain uncolored.

A symmetric five-dimensional metric has 15 independent algebraic components. These are not 15 independent propagating modes. For the massless zero-mode sector, the five propagating polarizations of a five-dimensional graviton separate into two gravitational, two vector, and one scalar polarization in four dimensions.

For the required tensor language, see [[1.1 Vectors, dual vectors, and tensors]].

## 2. Separate the metric into three fields

The video imposes the **cylinder condition** on the gravitational background: its fields do not depend on the fifth coordinate. This is a restriction on the fields, not a removal of the circle.

A useful metric form is

$$
\mathrm d\mechanical{s}_5^{\,2}
=g_{\mu\nu}\,\mathrm d\mechanical{x}^\mu\mathrm d\mechanical{x}^\nu
+\mechanical{\Phi}^{\,2}
\left(\mathrm d\mechanical{y}
+\mechanical{\kappa}\electric{A}_\mu\,\mathrm d\mechanical{x}^\mu\right)^2.
\tag{1}
$$

The corresponding matrix is

$$
\widetilde g_{AB}
=\begin{pmatrix}
g_{\mu\nu}+\mechanical{\kappa}^{\,2}\mechanical{\Phi}^{\,2}\electric{A}_\mu\electric{A}_\nu
&\mechanical{\kappa}\mechanical{\Phi}^{\,2}\electric{A}_\mu\\
\mechanical{\kappa}\mechanical{\Phi}^{\,2}\electric{A}_\nu
&\mechanical{\Phi}^{\,2}
\end{pmatrix}.
\tag{2}
$$

This separates the components into:

- The four-dimensional metric $g_{\mu\nu}$, which describes gravity.
- A vector field $\electric{A}_\mu$, which will have the transformation law and dynamics of an electromagnetic potential.
- A scalar field $\mechanical{\Phi}$, which controls the circle’s physical radius. With the stated coordinate period, that radius is $\mechanical{r}\mechanical{\Phi}$.

The scalar is usually called the **radion**. The scale factor $\mechanical{\kappa}$ will be fixed by the normalization of the electromagnetic action.

At this stage, the matrix separation is algebra. Its physical interpretation requires transformation laws and field equations. The video sets the radion to a constant for much of the calculation. Below, this constant is absorbed into the definition of the radius, so $\mechanical{\Phi}=1$ in the subsequent fixed-radius formulas.

## 3. Coordinate freedom becomes electromagnetic gauge freedom

Change the origin of the circular coordinate by an amount that depends on position in ordinary spacetime:

$$
\mechanical{y}'=\mechanical{y}+\mechanical{\kappa}\lambda(\mechanical{x}),
\qquad
\electric{A}_\mu'=\electric{A}_\mu-\partial_\mu\lambda.
\tag{3}
$$

The expression inside parentheses in equation (1) is unchanged:

$$
\mathrm d\mechanical{y}'
+\mechanical{\kappa}\electric{A}_\mu'\,\mathrm d\mechanical{x}^\mu
=\mathrm d\mechanical{y}
+\mechanical{\kappa}\electric{A}_\mu\,\mathrm d\mechanical{x}^\mu.
$$

Thus, different local choices of the circle’s origin describe the same geometry. To a four-dimensional observer, this freedom appears as a gauge transformation of the potential. The sign in equation (3) follows the chosen sign of the coordinate shift.

The electromagnetic field strength is

$$
\electric{F}_{\mu\nu}
=\partial_\mu\electric{A}_\nu-\partial_\nu\electric{A}_\mu.
\tag{4}
$$

It is unchanged by equation (3), because the mixed second derivatives of the smooth function $\lambda$ cancel. Compare this with [[3.2 Gauge Invariance in Classical Electrodynamics]].

The circular shifts form the group $U(1)$. The important result is that an electromagnetic gauge transformation can arise from a change of the fifth coordinate. The video’s tube example gives a lower-dimensional picture of this calculation.

## 4. Five-dimensional curvature gives a Maxwell term

The preceding argument identifies a gauge potential. It does not yet show that the field obeys Maxwell’s equations. For that, the model supplies five-dimensional gravitational dynamics through the Einstein–Hilbert action:

$$
\energy{S}_5
=\frac{1}{16\pi\mechanical{G}_5}
\int\mathrm d^4\mechanical{x}
\int_0^{2\pi\mechanical{r}}\mathrm d\mechanical{y}\,
\sqrt{-\widetilde g}\,R_5.
\tag{5}
$$

The determinants are abbreviated by $\widetilde g=\det(\widetilde g_{AB})$ and $g=\det(g_{\mu\nu})$. For the fixed-radius metric, the curvature separates as

$$
R_5=R_4
-\frac{\mechanical{\kappa}^{\,2}}{4}
\electric{F}_{\mu\nu}\electric{F}^{\mu\nu},
\qquad
\sqrt{-\widetilde g}=\sqrt{-g}.
\tag{6}
$$

Integrating over the circle gives

$$
\mechanical{G}_4=\frac{\mechanical{G}_5}{2\pi\mechanical{r}},
\qquad
\mechanical{\kappa}^{\,2}=16\pi\mechanical{G}_4.
\tag{7}
$$

The second choice gives the usual electromagnetic normalization. The reduced action is then

$$
\energy{S}_4
=\int\mathrm d^4\mechanical{x}\,\sqrt{-g}
\left[
\frac{R_4}{16\pi\mechanical{G}_4}
-\frac14\electric{F}_{\mu\nu}\electric{F}^{\mu\nu}
\right].
\tag{8}
$$

Boundary terms are omitted here. Equation (8) contains the four-dimensional gravitational action and the Maxwell action. Their field equations follow by variation of the metric and potential. This is the action-level unification emphasized in the video.

The relevant vault foundations are [[1.2 Covariant differentiation]], [[1.9 Curvature]], [[4.1.3 General relativity]], and [[2.2 Free Field Theory Examples]].

> [!note]
> Fixing the radion before variation is an additional assumption. The full reduction contains a scalar equation too. In the simplest five-dimensional vacuum theory, a nonzero constant radion requires $\electric{F}_{\mu\nu}\electric{F}^{\mu\nu}=0$. Equation (8) alone is therefore not the full unrestricted five-dimensional theory. See sections 3.2–3.4 of [Overduin and Wesson](https://arxiv.org/html/gr-qc/9805018).

## 5. Periodicity gives a discrete mass spectrum

The cylinder condition used above applies to the background geometry. To study matter, allow an added scalar field to vary around the circle. This is a mode analysis on that background; it does not include the full backreaction of excited matter on the metric.

A periodic field admits a Fourier expansion:

$$
\signal{\Psi}(\mechanical{x},\mechanical{y})
=\frac{1}{\sqrt{2\pi\mechanical{r}}}
\sum_{n\in\mathbb Z}\signal{\psi}_n(\mechanical{x})
e^{in\mechanical{y}/\mechanical{r}}.
\tag{9}
$$

The integer $n$ counts phase windings. Periodicity requires an integer because one complete circuit must return the field to its original value. The index is not a new physical quantity.

The physical momentum along the circle is quantized:

$$
\mechanical{p}_{5,n}=\frac{n}{\mechanical{r}}.
\tag{10}
$$

For a free scalar on a flat product background, separation of the five-dimensional Klein–Gordon equation gives

$$
\mechanical{m}_n^{\,2}
=\mechanical{m}_5^{\,2}+\frac{n^2}{\mechanical{r}^{\,2}}.
\tag{11}
$$

Thus, one five-dimensional field appears in four dimensions as a **Kaluza–Klein tower** of fields. A massless five-dimensional field has a massless zero mode and modes with masses $\mechanical{m}_n=|n|/\mechanical{r}$.

Smaller circles give larger gaps between the modes. Low-energy experiments can then see only the zero modes. The Klein–Gordon equation and its relation to relativistic energy are discussed in [[7.1 The Dirac Equation]] and [[2.2 Free Field Theory Examples]].

## 6. The same mode number determines charge

A five-dimensional scalar has the same value at the same event in either coordinate system. Substituting equation (3) into the expansion gives

$$
\signal{\psi}_n'(\mechanical{x})
=e^{-i\electric{q}_n\lambda(\mechanical{x})}\signal{\psi}_n(\mechanical{x}),
\qquad
\electric{q}_n=\frac{n\mechanical{\kappa}}{\mechanical{r}}.
\tag{12}
$$

This is the local phase transformation of a charged field. Its compatible derivative is

$$
D_\mu\signal{\psi}_n
=\left(\nabla_\mu-i\electric{q}_n\electric{A}_\mu\right)\signal{\psi}_n.
\tag{13}
$$

The opposite winding directions give opposite charges. The zero mode is neutral under this particular electromagnetic field. Charge quantization follows from periodicity once this geometric identification of charge is made.

Compare the usual gauge-theory argument in [[3.3 Phase Invariance in Quantum Mechanics]], [[3.5 Phase Invariance in Field Theory]], and [[11.3 Local Gauge Invariance]]. There, local phase invariance requires a gauge potential. Here, the phase and potential transformations both follow from the same higher-dimensional coordinate change.

General covariance means that a coordinate choice does not change the physical geometry. The result here is more specific: a subset of coordinate changes, those that shift the circle’s origin while preserving the assumed metric form, induces the four-dimensional $U(1)$ gauge symmetry.

## 7. Why the simplest model does not describe known matter

### The circle’s radius needs an explanation

The theory introduces a radius field, but the calculation does not explain why the radius has a particular stable value. A stabilization mechanism would need additional dynamics. A stabilized radius can also fluctuate, so its associated scalar cannot simply be ignored. This is the radion problem discussed near [4:52:30](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=17550s).

### The mass and charge scales are incompatible

For a massless five-dimensional matter field, equations (11) and (12) imply

$$
|\electric{q}_n|=\mechanical{\kappa}\mechanical{m}_n.
\tag{14}
$$

The same radius sets both scales. Match the magnitude of the first nonzero charge to the elementary charge $\electric{e}$. With $\electric{\alpha}=\electric{e}^{\,2}/(4\pi)$ and Planck length $\mechanical{\ell}_P=\sqrt{\mechanical{G}_4}$ in the stated units, equations (7) and (12) give

$$
\mechanical{r}
=\frac{\mechanical{\kappa}}{\electric{e}}
=\frac{2\mechanical{\ell}_P}{\sqrt{\electric{\alpha}}}
\approx23.4\mechanical{\ell}_P
\approx3.8\times10^{-34}\,\unit{m}.
\tag{15}
$$

The first nonzero mode then has mass

$$
\mechanical{m}_1
=\frac{1}{\mechanical{r}}
\approx5.2\times10^{17}\,\unit{GeV},
\tag{16}
$$

where GeV is also the mass unit because the speed of light is set to one. This is about $10^{21}$ times the electron mass. The numerical scale agrees with the video’s discussion; small differences depend on rounding.

An electron cannot be the first charged mode in this simple construction. Assigning it to the zero mode removes its geometric charge. Adding a nonnegative five-dimensional mass increases the masses in equation (11), so that does not solve the problem either.

This failure belongs to the stated model and its identification of electromagnetic charge. It is not a proof against every theory with extra dimensions.

### Further ingredients are missing

The scalar matter field was supplied separately. The calculation does not derive the observed particle species or their interactions. A simple smooth circle reduction also does not by itself produce the chiral fermion content of the [[Standard Model]]. The [[11.9 The Higgs Mechanism|Higgs mechanism]] addresses a different part of the mass problem and does not fix the geometric mass–charge relation above.

The video also mentions vacuum instability. Witten’s [1982 paper](https://doi.org/10.1016/0550-3213(82)90007-4) studies a decay channel for the Kaluza–Klein vacuum. Its application depends on the vacuum and boundary conditions; it should not be generalized to all compactifications.

## 8. What the construction establishes

The model gives a precise connection between geometry and gauge theory. Mixed metric components behave as an electromagnetic potential. Higher-dimensional curvature supplies a Maxwell term. Periodic matter modes acquire discrete masses and charges.

These are mathematical results under stated assumptions. They do not establish that nature has a fifth dimension. The simple model’s matter spectrum is incompatible with known particles, and a complete theory must also address the radion and the other missing ingredients.

For further study, follow the tensor and curvature notes in [[Relativists Toolkit - Contents]], then the phase-invariance notes in [[Gauge Theories - Contents]]. The particle-physics context is in [[Elementary Particles - Contents]].

## References

1. Richard Behiel, [Electromagnetism as a Fifth Dimension (Kaluza-Klein)](https://www.youtube.com/watch?v=hcL3yJ03jQQ), published 8 October 2026. English automatic captions and the creator’s chapter markers were retrieved on 16 October 2026. The captions supplied the article’s outline and main arguments. The full spoken text and slide equations were not checked line by line.
2. D. Bailin and A. Love, [Kaluza–Klein theories](https://doi.org/10.1088/0034-4885/50/9/001), *Reports on Progress in Physics* **50** (1987), 1087–1170. This is the video’s main paper reference. The full paper was not independently reviewed for this article.
3. J. M. Overduin and P. S. Wesson, [Kaluza–Klein Gravity](https://arxiv.org/html/gr-qc/9805018), *Physics Reports* **283** (1997), 303–378. Sections 3.2–3.4 provide additional context for dimensional reduction and the scalar-field restriction.
4. E. Witten, [Instability of the Kaluza–Klein vacuum](https://doi.org/10.1016/0550-3213(82)90007-4), *Nuclear Physics B* **195** (1982), 481–492. Further reading for the vacuum-instability issue mentioned in the video.
5. David Griffiths, [[Elementary Particles - Contents|Introduction to Elementary Particles]]; Chris Quigg, [[Gauge Theories - Contents|Gauge Theories of the Strong, Weak, and Electromagnetic Interactions]]; Eric Poisson, [[Relativists Toolkit - Contents|A Relativist’s Toolkit]]. The relevant local sections are linked at their first use above.

## Physical quantities

The table uses natural units. Mass, energy, and momentum use GeV; length uses inverse GeV. The speed of light and reduced Planck constant are set to one. Units shown in explicit numerical SI expressions are stated there.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{\hbar}$ | $1$ | Reduced Planck constant | Set to one in the natural-unit equations. |
| $\mechanical{c}$ | $1$ | Speed of light | Set to one in the natural-unit equations. |
| $\mechanical{x}^\mu,\mechanical{X}^A,\mechanical{y}$ | $\unit{GeV^{-1}}$ | Spacetime coordinates | Four-dimensional, five-dimensional, and circular coordinates. |
| $\mechanical{r}$ | $\unit{GeV^{-1}}$ | Circle radius | Coordinate radius; also the physical radius when the radion is one. |
| $\mechanical{s}_5$ | $\unit{GeV^{-1}}$ | Five-dimensional interval | Separation specified by the five-dimensional line element. |
| $g_{\mu\nu},\widetilde g_{AB}$ | $1$ | Metric fields | Coefficients of the four- and five-dimensional line elements. |
| $\mechanical{\Phi}$ | $1$ | Radion field | Ratio of the physical circle radius to the coordinate radius. |
| $\mechanical{\kappa}$ | $\unit{GeV^{-1}}$ | Metric coupling scale | Sets the normalized potential’s contribution to the metric. |
| $\electric{A}_\mu$ | $\unit{GeV}$ | Electromagnetic potential | Gauge field from the mixed metric components. |
| $\electric{F}_{\mu\nu}$ | $\unit{GeV^2}$ | Electromagnetic field strength | Gauge-invariant antisymmetric derivative of the potential. |
| $\energy{S}_4,\energy{S}_5$ | $1$ | Actions | Four- and five-dimensional actions measured in units of the reduced Planck constant. |
| $\mechanical{G}_4$ | $\unit{GeV^{-2}}$ | Four-dimensional gravitational constant | Coupling in the reduced gravitational action. |
| $\mechanical{G}_5$ | $\unit{GeV^{-3}}$ | Five-dimensional gravitational constant | Coupling in the original gravitational action. |
| $R_4,R_5$ | $\unit{GeV^2}$ | Ricci scalars | Scalar curvature of each geometry. |
| $\signal{\Psi}$ | $\unit{GeV^{3/2}}$ | Five-dimensional scalar field | Canonically normalized matter field before mode expansion. |
| $\signal{\psi}_n$ | $\unit{GeV}$ | Four-dimensional scalar modes | Canonically normalized fields in the mode expansion. |
| $\mechanical{p}_{5,n}$ | $\unit{GeV}$ | Compact-direction momentum | Physical momentum of a mode around the circle. |
| $\mechanical{m}_5,\mechanical{m}_n,\mechanical{m}_1$ | $\unit{GeV}$ | Matter masses | Original mass and effective four-dimensional mode masses. |
| $\electric{q}_n,\electric{e}$ | $1$ | Electric charges | Mode charge and elementary charge in Heaviside–Lorentz natural units. |
| $\electric{\alpha}$ | $1$ | Fine-structure constant | Dimensionless electromagnetic coupling used for the radius estimate. |
| $\mechanical{\ell}_P$ | $\unit{GeV^{-1}}$ | Planck length | Four-dimensional gravitational length scale. |
