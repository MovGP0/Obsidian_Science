---
title: "Note Improvement Tracker – 02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/01 The paradigm of Cosmic Relativity and its evidence"
---

> [!TLDR]
> This note tracks the review of the 13 notes in `02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/01 The paradigm of Cosmic Relativity and its evidence`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 11 possible errors or notation conflicts. 11 of them are verified (11 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N3487|N3487]] 01 References: Ref. 10 should read R. A. Lyttleton and H. Bondi, "On the physical consequences of a general excess of charge", Proc. R. Soc. Lond. A 252, 313–333 (1959); it is not "Littleton" and not Proc. Phys. Soc. **Fixed:** Corrected author spelling, title ("On the physical consequences ..."), and journal to Proc. R. Soc. Lond. A 252.
- [[#N3487|N3487]] 01 References: Ref. 4: volume 13 of the Collected Papers was published by Princeton University Press in 2012; 1922 is the date of Einstein's original comment, not of the translation volume. **Fixed:** Changed publication year to 2012 and noted the original 1922 comment date.
- [[#N3487|N3487]] 01 References: Ref. 16: replace the impossible year "2919" (most likely 2019) after checking the citation, and resolve the callout. **Fixed:** Changed to 2019 (Physics News vol. 49) and replaced the callout with a note on the typo.
- [[#N3493|N3493]] 01.05 The Cosmic Gravitational Metric and the Potentials: Eqs. (1.4)–(1.6): substituting $dx'=dx-v\,dt$ into a form written in primed coordinates yields the line element in unprimed coordinates. The Galilean transform of the rest metric ($H\to0$) is $ds^2=-(c^2-v^2)dt'^2+2v\,dx'dt'+dx'^2$, with cross coefficient $+v$ for $x'=x-vt$, and $\sqrt{1-v^2/c^2}$ describes a clock at $dx'=0$. In the printed (1.6), a comoving clock ($dx=v\,dt$) shows no dilation at all; add this to the source callout. **Fixed:** Added to the source callout the correct moving-frame metric with cross term +v and the comoving-clock consequence of the printed Eq. (1.6).
- [[#N3493|N3493]] 01.05 The Cosmic Gravitational Metric and the Potentials: After Eq. (1.8): with $A_g=-v/c$, the curl is $\nabla\times A_g=-2\Omega/c$, not $-2\Omega$. Only $-\nabla\times\mathbf v$ equals $-2\Omega$; list this among the dimensional inconsistencies. **Fixed:** Added this dimensional inconsistency to the source callout.
- [[#N3494|N3494]] 01.06 A Phenomenological Assertion: $\sqrt{1-v^2/\Phi_U}$ (and $\sqrt{1-v^2/c^2}$) is called a "Lorentz factor", but the Lorentz factor is $\gamma=1/\sqrt{1-v^2/c^2}$; say "the reciprocal Lorentz factor" or "time-dilation factor" in the added text and the callout. **Fixed:** Added a source-terminology callout stating gamma=1/sqrt(1-v^2/c^2) and that the root is the reciprocal Lorentz (time-dilation) factor.
- [[#N3495|N3495]] 01.07 Summary of the Primary Results of Cosmic Relativity: Eq. (1.17): for $\mathbf v=\boldsymbol\Omega\times\mathbf r$, $-m\,\mathbf v\times\boldsymbol\Omega=m\,\boldsymbol\Omega\times(\boldsymbol\Omega\times\mathbf r)=-m\Omega^2\mathbf r$ points inward, so the final outward $\hat{\mathbf r}\,mv^2/r$ has the opposite sign. With $\mathbf A=-\mathbf v/c$ dimensionless, $m_g\,d\mathbf A/dt$ also lacks a factor $c$ to be a force. **Fixed:** Added a source callout showing -m v x Omega = -m Omega^2 r (inward) and the missing factor c in m_g dA/dt.
- [[#N3495|N3495]] 01.07 Summary of the Primary Results of Cosmic Relativity: Coriolis paragraph: $\mathbf F=m_g\mathbf u\times\mathbf B_g$ with $\mathbf B_g=-2\boldsymbol\Omega$ gives $+2m\,\boldsymbol\Omega\times\mathbf u$, the opposite sign of the standard Coriolis force $-2m\,\boldsymbol\Omega\times\mathbf u$; flag this in a source callout. **Fixed:** Added to the same callout that m_g u x B_g = +2m Omega x u versus standard -2m Omega x u.
- [[#N3495|N3495]] 01.07 Summary of the Primary Results of Cosmic Relativity: "The farthest 1/3 of the Universe has 4 times the amount of matter than the nearer 2/3" is wrong: the volume ratio is $(1-8/27)/(8/27)=19/8\approx2.4$. Only the potential share of the outer third, $1-(2/3)^2=5/9$, matches "more than half". **Fixed:** Added to the callout the volume ratio 19/8 and the potential share 5/9.
- [[#N3495|N3495]] 01.07 Summary of the Primary Results of Cosmic Relativity: Eq. (1.19) closes the spinless orbit phase at $2\pi n$, but the quoted levels $(i+\tfrac12)\hbar\omega$ imply the semiclassical condition $\Phi/\Phi_0=n+\tfrac12$ (Maslov phase $\pi$). The supposedly missing $\pi$ is this omitted term, and the Zeeman $\pi$ for $g\approx2$ gives the standard spin-split levels; the interpretation section should state this standard resolution. **Fixed:** Added to Interpretation the condition Phi/Phi_0=n+1/2 with the Maslov phase and the Zeeman pi giving spin-split levels.
- [[#N3496|N3496]] 01.08 The Universal Clock of Cosmic Relativity: "The same everywhere to ... better than a part in a million" overstates the isotropy: the CMB dipole is about $1.2\times10^{-3}$, and the intrinsic anisotropies are about $10^{-5}$ after the dipole is removed; add a callout with these values. **Fixed:** Added a callout with dipole about 1.2e-3 and intrinsic anisotropies about 1e-5.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N3487 | [[01 References\|01 References]] | Analyzed | low | no | no | [[#N3487\|View]] |
| N3488 | [[01.00 The Paradigm of Cosmic Relativity and Its Evidence\|01.00 The Paradigm of Cosmic Relativity and Its Evidence]] | Analyzed | low | no | no | [[#N3488\|View]] |
| N3489 | [[01.01 The First Principles\|01.01 The First Principles]] | Analyzed | low | no | no | [[#N3489\|View]] |
| N3490 | [[01.02 What Is the Theory of Cosmic Relativity\|01.02 What Is the Theory of Cosmic Relativity]] | Analyzed | low | no | no | [[#N3490\|View]] |
| N3491 | [[01.03 Why Is Cosmic Relativity Necessary\|01.03 Why Is Cosmic Relativity Necessary]] | Analyzed | low | no | no | [[#N3491\|View]] |
| N3492 | [[01.04 The Gravity of Our Universe\|01.04 The Gravity of Our Universe]] | Analyzed | medium | yes | no | [[#N3492\|View]] |
| N3493 | [[01.05 The Cosmic Gravitational Metric and the Potentials\|01.05 The Cosmic Gravitational Metric and the Potentials]] | Analyzed | high | no | yes | [[#N3493\|View]] |
| N3494 | [[01.06 A Phenomenological Assertion\|01.06 A Phenomenological Assertion]] | Analyzed | medium | no | no | [[#N3494\|View]] |
| N3495 | [[01.07 Summary of the Primary Results of Cosmic Relativity\|01.07 Summary of the Primary Results of Cosmic Relativity]] | Analyzed | high | no | no | [[#N3495\|View]] |
| N3496 | [[01.08 The Universal Clock of Cosmic Relativity\|01.08 The Universal Clock of Cosmic Relativity]] | Analyzed | low | yes | no | [[#N3496\|View]] |
| N3497 | [[01.09 Cosmic Relativity and Its Experimental Tests\|01.09 Cosmic Relativity and Its Experimental Tests]] | Analyzed | low | no | no | [[#N3497\|View]] |
| N3498 | [[01.10 Cosmic Relativity and General Relativity\|01.10 Cosmic Relativity and General Relativity]] | Analyzed | low | no | no | [[#N3498\|View]] |
| N3499 | [[01.11 Summary\|01.11 Summary]] | Analyzed | low | no | no | [[#N3499\|View]] |

## Suggestions

### N3487

Note: [[01 References|01 References]]  
Priority: low · Graph: no · Manim: no

A reference list with some bibliographic errors copied from the source.

- [Correctness] Ref. 10 should read R. A. Lyttleton and H. Bondi, "On the physical consequences of a general excess of charge", Proc. R. Soc. Lond. A 252, 313–333 (1959); it is not "Littleton" and not Proc. Phys. Soc.
- [Correctness] Ref. 4: volume 13 of the Collected Papers was published by Princeton University Press in 2012; 1922 is the date of Einstein's original comment, not of the translation volume.
- [Correctness] Ref. 16: replace the impossible year "2919" (most likely 2019) after checking the citation, and resolve the callout.

### N3488

Note: [[01.00 The Paradigm of Cosmic Relativity and Its Evidence|01.00 The Paradigm of Cosmic Relativity and Its Evidence]]  
Priority: low · Graph: no · Manim: no

A faithful abstract with a short critical frame; the strongest claim needs explicit context.

- [Intuition] Interpretation: say that the claimed confirmation of $c\pm v$ is the author's own; the one-way light speed depends on the clock-synchronization convention, and standard experiments agree with special relativity. Link \[\[05.06 The Synchronisation of Time\]\] and \[\[11.04 The Experiment on the One-Way Relative Velocity of Light\]\].

### N3489

Note: [[01.01 The First Principles|01.01 The First Principles]]  
Priority: low · Graph: no · Manim: no

A philosophical introduction without equations; it is adequate as it stands.

- [Structure] The transfer exercise (a magnetic field and the force on an arbitrary material) is not connected to the chapter; replace it with a cosmology example, such as what the CMB dipole does and does not establish.

### N3490

Note: [[01.02 What Is the Theory of Cosmic Relativity|01.02 What Is the Theory of Cosmic Relativity]]  
Priority: low · Graph: no · Manim: no

A faithful lecture account; the interpretation section does not yet address its central testable claim.

- [Intuition] Interpretation: add that a synchronization convention with anisotropy parameter $\varepsilon\neq1/2$ reproduces every special-relativistic prediction, so $c'=c-v$ for one-way light is not observable without a synchronization-independent measurement; this is what the M–M two-way argument in the lecture leaves open.
- [Links] Link the Michelson–Morley discussion to \[\[03.06 Experiments Designed to Detect the Stationary Ether\]\] and the "novel experiment" to \[\[11.04 The Experiment on the One-Way Relative Velocity of Light\]\].

### N3491

Note: [[01.03 Why Is Cosmic Relativity Necessary|01.03 Why Is Cosmic Relativity Necessary]]  
Priority: low · Graph: no · Manim: no

A readable thought experiment whose numeric claim checks out; the interpretation could test the clock claim directly.

- [Example] Check the "more than a volt" claim: with $n_b\approx0.25\,\mathrm{m^{-3}}$, a charge excess of $10^{-40}e$ per baryon, and $R\approx1.4\times10^{26}$ m, the result is $\phi\approx\rho R^2/(2\varepsilon_0)\sim10^3$–$10^4$ V, so the claim holds with a wide margin.
- [Intuition] The claim that matter "up to the Virgo cluster" produces a measurable difference in moving-clock dilation needs a check: a spatially uniform potential shifts all clocks equally, and observed motional dilation follows $\gamma$ with no detected environmental dependence.
- [Structure] Give the electric-potential table row a symbol (for example $\electric{\phi}$) instead of "—", and fix the typo "charges particles" to "charged particles".

### N3492

Note: [[01.04 The Gravity of Our Universe|01.04 The Gravity of Our Universe]]  
Priority: medium · Graph: yes · Manim: no

The order-of-magnitude estimates are correct and the interpretation is good; the "≈c²" coincidence deserves a worked explanation.

- [Example] Evaluate equation (1.1): $2\pi\cdot6.67\times10^{-11}\cdot10^{-26}\cdot10^{52}\approx4\times10^{16}\,\mathrm{m^2/s^2}\approx0.5c^2$. With the critical density $3H_0^2/(8\pi G)$ and $cT=c/H_0$, $\Phi_u=\tfrac34c^2$ exactly, which shows that the near equality follows from Friedmann scaling.
- [Graph] Log-log plot of the cumulative potential $\Phi(R)=2\pi G\rho R^2$ for $R$ from $10^{20}$ to $1.4\times10^{26}$ m, with horizontal reference lines at $c^2$, $10^{11}$ (galaxy), $10^9$ (Sun), and $10^8$ (Earth).
- [Structure] Physical quantities lists $\mechanical{R}$ (causal radius) and $\mechanical{M}$ (shell mass), which appear neither in the text nor in the figures; remove them or use them.

### N3493

Note: [[01.05 The Cosmic Gravitational Metric and the Potentials|01.05 The Cosmic Gravitational Metric and the Potentials]]  
Priority: high · Graph: no · Manim: yes

The callouts flag several normalization problems, but the central Galilean-transformation derivation contains a primed/unprimed error that the note does not mention.

- [Correctness] Eqs. (1.4)–(1.6): substituting $dx'=dx-v\,dt$ into a form written in primed coordinates yields the line element in unprimed coordinates. The Galilean transform of the rest metric ($H\to0$) is $ds^2=-(c^2-v^2)dt'^2+2v\,dx'dt'+dx'^2$, with cross coefficient $+v$ for $x'=x-vt$, and $\sqrt{1-v^2/c^2}$ describes a clock at $dx'=0$. In the printed (1.6), a comoving clock ($dx=v\,dt$) shows no dilation at all; add this to the source callout.
- [Correctness] After Eq. (1.8): with $A_g=-v/c$, the curl is $\nabla\times A_g=-2\Omega/c$, not $-2\Omega$. Only $-\nabla\times\mathbf v$ equals $-2\Omega$; list this among the dimensional inconsistencies.
- [Intuition] State plainly in the interpretation that a Galilean relabelling of flat spacetime leaves the curvature zero and reproduces exactly the special-relativistic dilation relative to the original frame. Eq. (1.7) therefore encodes a choice of simultaneity ($t'=t$), not new physics.
- [Manim] Animate the Galilean shear of a $(t,x)$ grid with the light cone and a moving clock's worldline: the coordinate light speeds become $c\mp v$ while the proper time along the worldline stays the same.

### N3494

Note: [[01.06 A Phenomenological Assertion|01.06 A Phenomenological Assertion]]  
Priority: medium · Graph: no · Manim: no

A short note with a good interpretive warning, but it mislabels the factor it discusses and lacks the numbers that would show the calibration.

- [Correctness] $\sqrt{1-v^2/\Phi_U}$ (and $\sqrt{1-v^2/c^2}$) is called a "Lorentz factor", but the Lorentz factor is $\gamma=1/\sqrt{1-v^2/c^2}$; say "the reciprocal Lorentz factor" or "time-dilation factor" in the added text and the callout.
- [Example] Compute $\Phi_U/c^2=2\pi G\rho T^2$ for the critical density: it is $3/4$ for $T=1/H_0$ and $1/3$ for an Einstein–de Sitter age $T=2/(3H_0)$. The relation is of order unity and depends on the cutoff, not an exact equality.
- [Intuition] Name an observable that would distinguish the two forms, for example the dependence of time-dilation tests on the local gravitational potential, which differs between laboratories, satellites, and solar orbit positions.

### N3495

Note: [[01.07 Summary of the Primary Results of Cosmic Relativity|01.07 Summary of the Primary Results of Cosmic Relativity]]  
Priority: high · Graph: no · Manim: no

A long catalogue of source claims with several sign and arithmetic errors that the callouts do not cover; it is hard to study in its current form.

- [Correctness] Eq. (1.17): for $\mathbf v=\boldsymbol\Omega\times\mathbf r$, $-m\,\mathbf v\times\boldsymbol\Omega=m\,\boldsymbol\Omega\times(\boldsymbol\Omega\times\mathbf r)=-m\Omega^2\mathbf r$ points inward, so the final outward $\hat{\mathbf r}\,mv^2/r$ has the opposite sign. With $\mathbf A=-\mathbf v/c$ dimensionless, $m_g\,d\mathbf A/dt$ also lacks a factor $c$ to be a force.
- [Correctness] Coriolis paragraph: $\mathbf F=m_g\mathbf u\times\mathbf B_g$ with $\mathbf B_g=-2\boldsymbol\Omega$ gives $+2m\,\boldsymbol\Omega\times\mathbf u$, the opposite sign of the standard Coriolis force $-2m\,\boldsymbol\Omega\times\mathbf u$; flag this in a source callout.
- [Correctness] "The farthest 1/3 of the Universe has 4 times the amount of matter than the nearer 2/3" is wrong: the volume ratio is $(1-8/27)/(8/27)=19/8\approx2.4$. Only the potential share of the outer third, $1-(2/3)^2=5/9$, matches "more than half".
- [Correctness] Eq. (1.19) closes the spinless orbit phase at $2\pi n$, but the quoted levels $(i+\tfrac12)\hbar\omega$ imply the semiclassical condition $\Phi/\Phi_0=n+\tfrac12$ (Maslov phase $\pi$). The supposedly missing $\pi$ is this omitted term, and the Zeeman $\pi$ for $g\approx2$ gives the standard spin-split levels; the interpretation section should state this standard resolution.
- [Structure] Split the fourteen numbered results into callouts or separate subsections, each with a one-line "shared with standard physics / distinctive claim" tag, and shorten the 47-row quantity table to the symbols that are actually used.

### N3496

Note: [[01.08 The Universal Clock of Cosmic Relativity|01.08 The Universal Clock of Cosmic Relativity]]  
Priority: low · Graph: yes · Manim: no

A short note with a correct temperature value and a good cosmic-time caveat, but it overstates CMB isotropy.

- [Correctness] "The same everywhere to ... better than a part in a million" overstates the isotropy: the CMB dipole is about $1.2\times10^{-3}$, and the intrinsic anisotropies are about $10^{-5}$ after the dipole is removed; add a callout with these values.
- [Example] Show the clock reading: $T=T_0(1+z)$, so for example $z=1100$ gives about 3000 K. This makes concrete how temperature labels epochs.
- [Graph] Log-log plot of $T_\mathrm{CMB}=2.725(1+z)$ K for $z\in[0,1100]$, marking recombination.
- [Structure] Give the temperature table row a symbol (for example $\thermal{T}_{\mathrm{CMB}}$) instead of "—".

### N3497

Note: [[01.09 Cosmic Relativity and Its Experimental Tests|01.09 Cosmic Relativity and Its Experimental Tests]]  
Priority: low · Graph: no · Manim: no

A brief claims note; the interpretation correctly points to Ashby but gives no worked example.

- [Example] Add the standard GPS Sagnac correction $\Delta t=2\,\boldsymbol\omega_E\cdot\mathbf A/c^2$ (up to about 100 ns for a receiver's signal path) computed in the Earth-centred inertial frame within special relativity. This shows why receiver-velocity terms appear without Galilean velocity addition.
- [Links] Link the GNSS claim to \[\[11.08 Experimental Tests of Time Dilation - GNSS and GPS\]\].

### N3498

Note: [[01.10 Cosmic Relativity and General Relativity|01.10 Cosmic Relativity and General Relativity]]  
Priority: low · Graph: no · Manim: no

The interpretation section handles the "Centenary Einstein's Equation" well; the gravitational-wave claim needs a check.

- [Intuition] Add that GW170817 constrains $|v_\mathrm{gw}-c|/c\lesssim10^{-15}$: gravitational waves and light have equal speeds, which says nothing about Galilean versus Lorentzian velocity addition.
- [Simplify] Write the algebraic identity explicitly: (1.23) is $G_{ik}=(8\pi G/c^4)(T_{ik}+T_{ik(U)})$, the standard field equation with total stress–energy.

### N3499

Note: [[01.11 Summary|01.11 Summary]]  
Priority: low · Graph: no · Manim: no

A chapter summary with an appropriate review exercise; no change needed.

- [Structure] No change needed beyond optionally listing, in one line each, which chapter-1 claims are shared with standard physics and which are distinctive.
