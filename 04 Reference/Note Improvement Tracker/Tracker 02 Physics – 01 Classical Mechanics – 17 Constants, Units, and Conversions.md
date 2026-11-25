---
title: "Note Improvement Tracker – 02 Physics/01 Classical Mechanics/17 Constants, Units, and Conversions"
---

> [!TLDR]
> This note tracks the review of the 9 notes in `02 Physics/01 Classical Mechanics/17 Constants, Units, and Conversions`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found no possible errors in this folder.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N1096 | [[17.00 Constants, Units, and Conversions\|17.00 Constants, Units, and Conversions]] | Analyzed | low | no | no | [[#N1096\|View]] |
| N1097 | [[17.01 Fundamental Constants\|17.01 Fundamental Constants]] | Analyzed | low | no | no | [[#N1097\|View]] |
| N1098 | [[17.02 Astronomical Data\|17.02 Astronomical Data]] | Analyzed | low | no | no | [[#N1098\|View]] |
| N1099 | [[17.03 Conversions and Useful Relations\|17.03 Conversions and Useful Relations]] | Analyzed | low | no | no | [[#N1099\|View]] |
| N1100 | [[17.04 Systems of Units in Mechanics\|17.04 Systems of Units in Mechanics]] | Analyzed | low | no | no | [[#N1100\|View]] |
| N1101 | [[17.05 Typical Orders of Magnitude\|17.05 Typical Orders of Magnitude]] | Analyzed | low | yes | no | [[#N1101\|View]] |
| N1102 | [[17.06 Comparison of the Formulations of Mechanics\|17.06 Comparison of the Formulations of Mechanics]] | Analyzed | low | no | no | [[#N1102\|View]] |
| N1103 | [[17.07 Common Numerical Estimates\|17.07 Common Numerical Estimates]] | Analyzed | low | no | no | [[#N1103\|View]] |
| N1104 | [[17.08 Landau Symbols\|17.08 Landau Symbols]] | Analyzed | low | yes | no | [[#N1104\|View]] |

## Suggestions

### N1096

Note: [[17.00 Constants, Units, and Conversions|17.00 Constants, Units, and Conversions]]  
Priority: low · Graph: no · Manim: no

A minimal hub note that is adequate.

- [Links] List direct links to 17.01 through 17.08.

### N1097

Note: [[17.01 Fundamental Constants|17.01 Fundamental Constants]]  
Priority: low · Graph: no · Manim: no

Correct rounded constants.

- [Structure] Note that $c$, $h$, $\electric{e}$, $\thermal{k}_B$, and $N_A$ have exact SI values since 2019, and align the $k_B$ macro with 15.08, which leaves it uncolored.

### N1098

Note: [[17.02 Astronomical Data|17.02 Astronomical Data]]  
Priority: low · Graph: no · Manim: no

Correct rounded data.

- [Structure] Say which year is meant: $\quantity{3.156\times10^7}{s}$ is the Julian year, and $365.25$ d is close to the sidereal period ($365.256$ d); one sentence avoids confusion with the tropical year.

### N1099

Note: [[17.03 Conversions and Useful Relations|17.03 Conversions and Useful Relations]]  
Priority: low · Graph: no · Manim: no

A clean, correct conversion table that needs almost no change.

- [Structure] For consistency, write the horsepower, rpm and Ångström rows with \quantity{}{} like the others (e.g. $\quantity{1}{hp}\simeq\quantity{745.7}{W}$) instead of mixing $1\,\mathrm{hp}$ and $\quantity{}{}$.
- [Simplify] Mark which entries are exact by definition (atm, bar, kWh, cal, rpm, Å) and which are rounded ($\simeq$ eV, hp), e.g. with a short "exact?" column, so readers know which ones they can use without losing precision.

### N1100

Note: [[17.04 Systems of Units in Mechanics|17.04 Systems of Units in Mechanics]]  
Priority: low · Graph: no · Manim: no

A short, correct reference list; it would gain from one concrete example of how a unit system changes an equation.

- [Example] Add a one-line worked example of natural units, e.g. how $E^2=p^2c^2+m^2c^4$ becomes $E^2=p^2+m^2$ when $c=1$, and how to put the factors of $c$ back by dimensional analysis.
- [Intuition] In the classical-mechanics bullet, show a scaling example: for a pendulum, choose time unit $\sqrt{\ell/g}$ so that $\ddot\theta+\sin\theta=0$ has no parameters.

### N1101

Note: [[17.05 Typical Orders of Magnitude|17.05 Typical Orders of Magnitude]]  
Priority: low · Graph: yes · Manim: no

A correct list of scales that overlaps with 17.07 and has no visual sense of scale.

- [Structure] The "Earth's rotational energy" and "92 min orbital period" rows repeat 17.07 word for word; keep them in one note and link to it from the other.
- [Graph] Add a 2D log-scale strip (one axis, $\log_{10}$ of the value) with the energy entries (athlete 1 kJ, lightning $10^9$ J, Earth rotation $2\times10^{29}$ J) as labelled points, so the spread of about 26 orders of magnitude is visible at a glance.
- [Structure] The Symbol column is all "—"; turn it into a plain two-column "Quantity | Typical value" table, or add symbols.

### N1102

Note: [[17.06 Comparison of the Formulations of Mechanics|17.06 Comparison of the Formulations of Mechanics]]  
Priority: low · Graph: no · Manim: no

A compact, correct comparison table that suits its reference role.

- [Example] Add one row or a short follow-up showing the same system (e.g. the simple pendulum) in all three forms: $m\ell\ddot\theta=-mg\sin\theta$, $L=\tfrac12m\ell^2\dot\theta^2+mg\ell\cos\theta$, and $H=p_\theta^2/(2m\ell^2)-mg\ell\cos\theta$. This makes the abstract rows concrete.
- [Links] Link the Lagrange and Hamilton columns to the Euler-Lagrange and Hamilton's-equations notes, and the Quantization row to the path-integral and Poisson-bracket notes.

### N1103

Note: [[17.07 Common Numerical Estimates|17.07 Common Numerical Estimates]]  
Priority: low · Graph: no · Manim: no

Correct estimates, checked: Earth–Sun binding energy $\approx2.65\times10^{33}$ J, rotational energy $\approx2.1\times10^{29}$ J, $\tfrac32RT\approx3.7$ kJ. They are given without the one-line calculation that would make them teachable.

- [Example] Add each estimate's formula and inputs in the Description, e.g. $E_b=\mechanical{G}M_\odot M_T/(2a)$ with $a=1.496\times10^{11}$ m, and $E_{\mathrm{rot}}=\tfrac12 I\Omega^2$ with $\Omega=7.29\times10^{-5}$ rad/s. Readers can then reproduce the numbers.
- [Structure] The table mixes estimate rows with symbol-definition rows ($\mechanical{I},\mechanical{M}_T,\mechanical{R}_T$); split them into an "Estimates" table and the standard "Physical quantities" table.

### N1104

Note: [[17.08 Landau Symbols|17.08 Landau Symbols]]  
Priority: low · Graph: yes · Manim: no

Correct definitions with no example of how they are used in mechanics.

- [Example] Add a physics example: $\sin\theta=\theta+O(\theta^3)$ as $\theta\to0$ (the small-angle pendulum), and $\sin\theta\sim\theta$. Point out that $1-\cos\theta=o(\theta)$ but not $o(\theta^2)$.
- [Graph] Optionally plot $\sin\theta$, $\theta$ and the error $\lvert\sin\theta-\theta\rvert$ together with $\theta^3/6$ for $\theta\in[0,1.5]$ rad, to show the $O(\theta^3)$ bound visually.
