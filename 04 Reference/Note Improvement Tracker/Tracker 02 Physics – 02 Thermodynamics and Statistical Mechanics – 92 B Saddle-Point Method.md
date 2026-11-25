---
title: "Note Improvement Tracker – 02 Physics/02 Thermodynamics and Statistical Mechanics/92 B Saddle-Point Method"
---

> [!TLDR]
> This note tracks the review of the 8 notes in `02 Physics/02 Thermodynamics and Statistical Mechanics/92 B Saddle-Point Method`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found no possible errors in this folder.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N1685 | [[B.00 Saddle-Point Method\|B.00 Saddle-Point Method]] | Analyzed | low | no | no | [[#N1685\|View]] |
| N1686 | [[B.01 Laplace Approximation\|B.01 Laplace Approximation]] | Analyzed | low | yes | yes | [[#N1686\|View]] |
| N1687 | [[B.01.01 Corrections to the Laplace Approximation\|B.01.01 Corrections to the Laplace Approximation]] | Analyzed | low | yes | no | [[#N1687\|View]] |
| N1688 | [[B.02 Saddle-Point Method in the Complex Plane\|B.02 Saddle-Point Method in the Complex Plane]] | Analyzed | low | yes | yes | [[#N1688\|View]] |
| N1689 | [[B.03 Application - Stirling Formula\|B.03 Application - Stirling Formula]] | Analyzed | low | yes | no | [[#N1689\|View]] |
| N1690 | [[B.04 Application - Ensemble Equivalence\|B.04 Application - Ensemble Equivalence]] | Analyzed | medium | yes | no | [[#N1690\|View]] |
| N1691 | [[B.05 Worked Example - Ideal-Gas Partition Function\|B.05 Worked Example - Ideal-Gas Partition Function]] | Analyzed | low | yes | no | [[#N1691\|View]] |
| N1692 | [[B.06 Generalizations and Advanced Applications\|B.06 Generalizations and Advanced Applications]] | Analyzed | low | yes | no | [[#N1692\|View]] |

## Suggestions

### N1685

Note: [[B.00 Saddle-Point Method|B.00 Saddle-Point Method]]  
Priority: low · Graph: no · Manim: no

Clear hub with a good reading order and applicability checks; the links resolve.

- [Structure] No change needed.

### N1686

Note: [[B.01 Laplace Approximation|B.01 Laplace Approximation]]  
Priority: low · Graph: yes · Manim: yes

Correct and rigorous; the only checks are trivial or failing cases, so a nontrivial numerical example would help.

- [Example] Add $\int_0^\pi e^{N\sin x}dx$ against $e^N\sqrt{2\pi/N}$: the ratio is 1.026, 1.013 and 1.0025 at $N=5,10,50$, approaching one as $1+1/(8N)$ (this links to B.01.01).
- [Graph] Plot $e^{N[f(x)-f(x_0)]}$ for $f=\sin x$ on $[0,\pi]$ with $N=2,10,50$, and the Gaussian $e^{-N(x-\pi/2)^2/2}$ dashed, showing the $N^{-1/2}$ width.
- [Manim] Animate $N$ increasing from 1 to 100: the normalized peak narrows, the Gaussian overlay converges to it, and a counter shows the exact/Laplace ratio tending to one.

### N1687

Note: [[B.01.01 Corrections to the Laplace Approximation|B.01.01 Corrections to the Laplace Approximation]]  
Priority: low · Graph: yes · Manim: no

Correct; the coefficient $f^{(4)}/(8f''^2)-5f'''^2/(24f''^3)$ and the Stirling check $1/12$ verify.

- [Example] Add a quartic-only check: for $f=\sin x$ at $\pi/2$, $f'''=0$ and $f^{(4)}=1$ give $1+1/(8N)$. Numerically $\int_0^\pi e^{N\sin x}dx/(e^N\sqrt{2\pi/N})=1.0133$ at $N=10$, against the predicted 1.0125.
- [Graph] Plot the exact ratio $n!/[\sqrt{2\pi n}(n/e)^n]$ and $1+1/(12n)$ against $n=1,\dots,20$ to show the size of the correction.

### N1688

Note: [[B.02 Saddle-Point Method in the Complex Plane|B.02 Saddle-Point Method in the Complex Plane]]  
Priority: low · Graph: yes · Manim: yes

Correct (the steepest-descent angle $(\pi-\phi)/2$ and the contour-phase check verify), but the only example is an exact Gaussian on a straight contour, so the deformation idea stays abstract.

- [Example] Add an example where the saddle lies off the original contour, for example $\int_{-\infty}^{\infty}e^{-Nx^2/2+ikx}dx$ with saddle $x_0=ik/N$. Shifting the real line through it gives $\sqrt{2\pi/N}e^{-k^2/(2N)}$.
- [Graph] Contour plot of $\operatorname{Re}h(z)$ with level lines of $\operatorname{Im}h$ for $h(z)=-z^2/2+iz$ on $[-3,3]\times[-2,3]$, marking the saddle at $z=i$ and the steepest-descent and steepest-ascent directions.
- [Manim] Animate the real-axis contour sliding up onto the horizontal steepest-descent line through the saddle, while a side panel shows the integrand's oscillating real part along the path changing into a single positive Gaussian bump.

### N1689

Note: [[B.03 Application - Stirling Formula|B.03 Application - Stirling Formula]]  
Priority: low · Graph: yes · Manim: no

Correct ($\ln10!=15.1044$, Stirling 15.0961, relative errors 0.055% and 0.83% verify), with one broken sentence and some duplication of A.05.

- [Structure] "$n!\sim\sqrt{2\pi n}(n/e)^n$," is followed by "Using the first correction derived below, the logarithmic form is", which forms a fragment and quotes the $O(1/n)$ form before the correction is derived. End the display with a period and move the logarithmic form after the correction.
- [Links] Link [[A.05 Stirling Formula]], which carries the same derivation, and keep this note focused on the tail check and the $1/(12n)$ correction.
- [Graph] Plot $\ln n!-(n\ln n-n+\tfrac12\ln2\pi n)$ and the same with $1/(12n)$ subtracted, against $n=1,\dots,20$ on a log y-axis, showing the $1/n$ and $1/n^3$ residuals.

### N1690

Note: [[B.04 Application - Ensemble Equivalence|B.04 Application - Ensemble Equivalence]]  
Priority: medium · Graph: yes · Manim: no

Correct ($\mu=-k_BT\,\partial\ln Z_N/\partial N$ and the variance formulas verify), but four caveat callouts break the argument and the ideal-gas check is only referenced.

- [Simplify] Merge the "Source correction" and "Thermodynamic order of the equalities" callouts and the scope sentences into one short "Scope" paragraph after the main result, so that the saddle argument reads continuously.
- [Example] In "Particle-number fluctuations", insert the ideal-gas case inline: $\ln Z_N=N\ln\xi-\ln N!$ gives $-\partial^2\ln Z_N/\partial N^2=1/N$, so $\langle(\Delta N)^2\rangle\simeq\bar N$.
- [Graph] Plot the normalized weights $e^{\beta\mu N}Z_N/\mathcal Z$ against $N/\bar N\in[0,2]$ for the ideal gas with $\bar N=10,100,1000$, showing the relative width shrinking as $\bar N^{-1/2}$.
- [Structure] Pressure is $\mechanical{p}$ here but $\mechanical{P}$ in B.05; use one symbol across the appendix.

### N1691

Note: [[B.05 Worked Example - Ideal-Gas Partition Function|B.05 Worked Example - Ideal-Gas Partition Function]]  
Priority: low · Graph: yes · Manim: no

Correct and instructive; the Stirling-prefactor cancellation and the Poisson check verify.

- [Graph] Plot the exact Poisson $\Pr(N)$ for $\bar N=1,10,100$ (bars) with the Gaussian approximation overlaid, to show the failure at $\bar N=1$ described in "Fluctuations and the saddle".
- [Example] Quantify the warning about dropping the Stirling prefactor: for $\bar N=100$ the false factor is $\sqrt{2\pi\cdot100}\approx25$.

### N1692

Note: [[B.06 Generalizations and Advanced Applications|B.06 Generalizations and Advanced Applications]]  
Priority: low · Graph: yes · Manim: no

Correct (the multivariable formula and the convergent Hubbard–Stratonovich identity verify), but the mean-field section has no equations.

- [Example] Add the Curie–Weiss example. Use $e^{+ax^2/2}=(2\pi a)^{-1/2}\int e^{-\phi^2/(2a)+x\phi}d\phi$, which is the ferromagnetic sign without an $i$, with $x=\sum_i\sigma_i$. This gives $\int dm\,e^{-N[\beta Jm^2/2-\ln2\cosh\beta Jm]}$, whose saddle is $m=\tanh\beta Jm$.
- [Graph] Contour plot of $e^{-N(x^2/2+y^4)}$ for $N=10$ and $100$ on $[-1.5,1.5]^2$, showing the $N^{-1/2}$ width in $x$ against the $N^{-1/4}$ width in the soft quartic direction.
- [Structure] The table lists only $N$ as "Particle count", while $N$ here is a generic large parameter and $n$, $\mathbf H$, $a_j$ and $\phi$ are not listed.
