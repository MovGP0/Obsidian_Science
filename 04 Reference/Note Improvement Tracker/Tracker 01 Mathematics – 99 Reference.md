---
title: "Note Improvement Tracker – 01 Mathematics/99 Reference"
---

> [!TLDR]
> This note tracks the review of the 20 notes in `01 Mathematics/99 Reference`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 2 possible errors or notation conflicts. 2 of them are verified (2 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N0809|N0809]] Definite integral tables: In "Definite integrals and improper limits", "At $0<p<1$, the power grows without bound" is misleading because the integrand $x^{-p}$ decays; it is the partial integral $(R^{1-p}-1)/(1-p)$ that grows without bound as $R\to\infty$. **Fixed:** Now says the partial integral (R^(1-p)-1)/(1-p) grows without bound as R -> infinity
- [[#N0810|N0810]] Elliptic integral tables: In "Worked example and a convention trap", $8E(0.5)\approx11.739696$ comes from multiplying the rounded table entry; the six-place value is $8E(0.5)=11.739698$. **Fixed:** scipy gives 11.7396977; changed 11.739696 to 11.739698

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N0808 | [[Bessel and Legendre tables\|01 Formula and Transform Tables/Bessel and Legendre tables]] | Analyzed | low | yes | no | [[#N0808\|View]] |
| N0809 | [[Definite integral tables\|01 Formula and Transform Tables/Definite integral tables]] | Analyzed | low | yes | no | [[#N0809\|View]] |
| N0810 | [[Elliptic integral tables\|01 Formula and Transform Tables/Elliptic integral tables]] | Analyzed | low | yes | no | [[#N0810\|View]] |
| N0811 | [[Fourier transform tables\|01 Formula and Transform Tables/Fourier transform tables]] | Analyzed | low | yes | yes | [[#N0811\|View]] |
| N0812 | [[Gamma function tables\|01 Formula and Transform Tables/Gamma function tables]] | Analyzed | low | yes | no | [[#N0812\|View]] |
| N0813 | [[Laplace transform tables\|01 Formula and Transform Tables/Laplace transform tables]] | Analyzed | low | no | no | [[#N0813\|View]] |
| N0814 | [[Radical substitutions\|01 Formula and Transform Tables/Radical substitutions]] | Analyzed | low | no | no | [[#N0814\|View]] |
| N0815 | [[Rational integral tables\|01 Formula and Transform Tables/Rational integral tables]] | Analyzed | low | no | no | [[#N0815\|View]] |
| N0816 | [[Series and Fourier tables\|01 Formula and Transform Tables/Series and Fourier tables]] | Analyzed | low | yes | yes | [[#N0816\|View]] |
| N0817 | [[Transcendental integral tables\|01 Formula and Transform Tables/Transcendental integral tables]] | Analyzed | low | no | no | [[#N0817\|View]] |
| N0818 | [[Trigonometric integral tables\|01 Formula and Transform Tables/Trigonometric integral tables]] | Analyzed | low | no | no | [[#N0818\|View]] |
| N0819 | [[Z-transform tables\|01 Formula and Transform Tables/Z-transform tables]] | Analyzed | low | yes | no | [[#N0819\|View]] |
| N0820 | [[Chi-squared F and Student tables\|02 Probability Tables/Chi-squared F and Student tables]] | Analyzed | low | yes | no | [[#N0820\|View]] |
| N0821 | [[Normal probability tables\|02 Probability Tables/Normal probability tables]] | Analyzed | low | yes | no | [[#N0821\|View]] |
| N0822 | [[Poisson probability tables\|02 Probability Tables/Poisson probability tables]] | Analyzed | low | yes | no | [[#N0822\|View]] |
| N0823 | [[Random-number tables\|02 Probability Tables/Random-number tables]] | Analyzed | low | no | no | [[#N0823\|View]] |
| N0824 | [[Numerical constants and rounding\|03 Constants and Units/Numerical constants and rounding]] | Analyzed | low | no | no | [[#N0824\|View]] |
| N0825 | [[Physical constants and SI units\|03 Constants and Units/Physical constants and SI units]] | Analyzed | low | no | no | [[#N0825\|View]] |
| N0826 | [[Mathematics Catalogue Source Guide\|Mathematics Catalogue Source Guide]] | Analyzed | low | no | no | [[#N0826\|View]] |
| N0827 | [[Tables - Catalogue Guide\|Tables - Catalogue Guide]] | Analyzed | low | no | no | [[#N0827\|View]] |

## Suggestions

### N0808

Note: [[Bessel and Legendre tables|Bessel and Legendre tables]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; all table values, the series check of $J_0(1)$, and the Legendre recurrence steps verify.

- [Graph] Add a 2D plot of $J_0(x)$, $J_1(x)$ and $Y_0(x)$ for $0\le x\le15$ (clip $Y_0$ at about $-1.5$) so the zeros, decaying oscillation and the singularity of $Y_0$ at 0 are visible next to the table.
- [Graph] Add a second plot of $P_0,\dots,P_4$ on $[-1,1]$ showing $P_n(1)=1$ and the alternating parity, supporting the orthogonality section.
- [Intuition] In "Bessel functions of the first and second kind", state that $J_n(x)\approx\sqrt{2/(\pi x)}\cos(x-n\pi/2-\pi/4)$ for large $x$, which explains why the table values oscillate with decreasing amplitude.
- [Structure] File is saved with a UTF-8 BOM and CRLF line endings; re-save as UTF-8 without BOM with LF endings per AGENTS.md.

### N0809

Note: [[Definite integral tables|Definite integral tables]]  
Priority: low · Graph: yes · Manim: no

Correct and well organized, with one misleading sentence in the convergence discussion.

- [Correctness] In "Definite integrals and improper limits", "At $0<p<1$, the power grows without bound" is misleading because the integrand $x^{-p}$ decays; it is the partial integral $(R^{1-p}-1)/(1-p)$ that grows without bound as $R\to\infty$.
- [Graph] Plot $x^{-p}$ on $(0,5]$ for $p=0.5,1,2$ with the line $x=1$ marked, to show which tail (near 0 or near infinity) carries the divergence for each $p$.
- [Example] In the principal-value paragraph, give one line of computation: $\int_{-1}^{-\varepsilon}+\int_{\varepsilon}^{1}dx/x=0$, whereas $\int_{\varepsilon}^{1}dx/x=-\ln\varepsilon\to\infty$ on its own.
- [Structure] File is saved with a UTF-8 BOM and CRLF line endings; re-save as UTF-8 without BOM with LF endings per AGENTS.md.

### N0810

Note: [[Elliptic integral tables|Elliptic integral tables]]  
Priority: low · Graph: yes · Manim: no

Clear, with good convention warnings; table values verify, but one derived perimeter carries a rounding error.

- [Correctness] In "Worked example and a convention trap", $8E(0.5)\approx11.739696$ comes from multiplying the rounded table entry; the six-place value is $8E(0.5)=11.739698$.
- [Simplify] In "Why introduce another function?", "The two first kinds have different integrands" should read "The first and second kinds have different integrands".
- [Graph] Plot $K(k)$ and $E(k)$ for $0\le k<0.999$ with the horizontal line $\pi/2$, showing $E\le\pi/2\le K$, $E(1)=1$ and the divergence of $K$ as $k\to1^-$.
- [Structure] File is saved with a UTF-8 BOM and CRLF line endings; re-save as UTF-8 without BOM with LF endings per AGENTS.md.

### N0811

Note: [[Fourier transform tables|Fourier transform tables]]  
Priority: low · Graph: yes · Manim: yes

Correct and careful about conventions; the parity derivations and the shifted-rectangle example verify.

- [Graph] Plot the rectangle of half-width $a$ and its transform $2\sin(a\omega)/\omega$ for $a=1$ and $a=2$ ($-10\le\omega\le10$) to show that a wider pulse gives a narrower central lobe.
- [Manim] Animate $e^{-ax^2}$ and $\sqrt{\pi/a}\,e^{-\omega^2/(4a)}$ side by side while $a$ sweeps from 0.25 to 4, showing the width trade-off between a function and its transform.
- [Intuition] After the whole-line table, add one sentence on the reciprocal widths implied by the Gaussian row: the widths scale as $1/\sqrt a$ and $\sqrt a$, so their product is independent of $a$.
- [Structure] File is saved with a UTF-8 BOM and CRLF line endings; re-save as UTF-8 without BOM with LF endings per AGENTS.md.

### N0812

Note: [[Gamma function tables|Gamma function tables]]  
Priority: low · Graph: yes · Manim: no

Correct and well motivated; the recurrence, the half-integer values and the worked integral verify.

- [Graph] Plot $\Gamma(x)$ on $-4<x<5$ (y clipped to $[-6,6]$) with the points $(n+1,n!)$ marked, showing the poles at $0,-1,-2,\dots$, the minimum near $x\approx1.4616$ and the alternating signs between poles.
- [Intuition] In the table paragraph, give the location of the minimum ($x\approx1.4616$, $\Gamma\approx0.8856$) so the stated non-monotonicity has a concrete reference point.
- [Structure] File is saved with a UTF-8 BOM and CRLF line endings; re-save as UTF-8 without BOM with LF endings per AGENTS.md.

### N0813

Note: [[Laplace transform tables|Laplace transform tables]]  
Priority: low · Graph: no · Manim: no

Correct and clear; the table rows, shift and scaling rules, and the worked initial-value problem all verify.

- [Simplify] In the table, the row $e^{at}\cos bt$ lacks the "real $a,b$" qualifier that the other rows carry; add it for consistency.
- [Example] Add the companion row $e^{at}\sin bt\to b/[(s-a)^2+b^2]$ and a short second-order example such as $y''+y=0$, $y(0)=0$, $y'(0)=1$, so the $s^2F-sf(0)-f'(0)$ rule is used once.
- [Structure] File is saved with a UTF-8 BOM and CRLF line endings; re-save as UTF-8 without BOM with LF endings per AGENTS.md.

### N0814

Note: [[Radical substitutions|Radical substitutions]]  
Priority: low · Graph: no · Manim: no

Thorough and correct; every displayed antiderivative, the two-radical example and the recurrences verify, though a few sentences are cryptic.

- [Simplify] In "Two linear radicals", the sentence "Although each radical can retain a common square-root factor, their ratio is $u$" is hard to parse; say instead that after the substitution both radicals share one leftover square-root factor, so their quotient (and many rational combinations) become rational in $u$.
- [Simplify] In "Other irrational expressions", "the radical contains four distinct roots" should say that the polynomial $1-x^4$ under the radical has four distinct complex roots.
- [Structure] Add a short summary table at the top mapping radical type to substitution ($\sqrt{a^2-x^2}\to a\sin\theta$, $\sqrt{x^2+a^2}\to a\sinh u$, $\sqrt{x^2-a^2}\to a\cosh u$, $\sqrt{ax+b}\to u$, $\sqrt[q]{x}\to u$) for quick lookup.
- [Structure] File is saved with a UTF-8 BOM and CRLF line endings; re-save as UTF-8 without BOM with LF endings per AGENTS.md.

### N0815

Note: [[Rational integral tables|Rational integral tables]]  
Priority: low · Graph: no · Manim: no

Correct and systematic; the discriminant cases, the cubic and quartic rows, and the partial-fraction examples verify.

- [Example] In "Expressions X = a⁴ + x⁴", finish the computation and display the final antiderivative of $1/(1+u^4)$ (two logarithm terms and two arctangents) so readers can check their own integration against it.
- [Simplify] In the $\int dx/Q$ cases, add a one-line reminder that $D=4ac-b^2$ is the negative of the usual discriminant $b^2-4ac$, so "$D<0$" means two real roots.
- [Structure] File is saved with a UTF-8 BOM and CRLF line endings; re-save as UTF-8 without BOM with LF endings per AGENTS.md.

### N0816

Note: [[Series and Fourier tables|Series and Fourier tables]]  
Priority: low · Graph: yes · Manim: yes

Correct and compact; the error-bound example and the sawtooth coefficients verify.

- [Graph] Plot the sawtooth $x$ on $[-3\pi,3\pi]$ with Fourier partial sums for $N=1,3,10$, showing convergence to 0 at the jumps and the Gibbs overshoot.
- [Graph] Plot $\sin x$ with Maclaurin partial sums of degree 1, 3, 5, 7 on $[-2\pi,2\pi]$ to show local approximation near 0 versus failure far away.
- [Manim] Animate the square-wave series adding odd harmonics one by one ($N=1$ to 15), showing the corners sharpening and the persistent overshoot near $x=0,\pm\pi$.
- [Structure] File is saved with a UTF-8 BOM and CRLF line endings; re-save as UTF-8 without BOM with LF endings per AGENTS.md.

### N0817

Note: [[Transcendental integral tables|Transcendental integral tables]]  
Priority: low · Graph: no · Manim: no

Correct and readable; all antiderivatives and sign explanations verify.

- [Example] In "Exponential functions", show the two integration-by-parts steps for $\int e^{ax}\cos bx\,dx$ in two lines instead of only describing them, since this "solve for the integral" trick is the main new idea.
- [Structure] File is saved with a UTF-8 BOM and CRLF line endings; re-save as UTF-8 without BOM with LF endings per AGENTS.md.

### N0818

Note: [[Trigonometric integral tables|Trigonometric integral tables]]  
Priority: low · Graph: no · Manim: no

Correct and clearly structured; reduction formulas and worked answers verify.

- [Structure] In "Cosine powers", rename the family $C_n=\int\cos^nx\,dx$ to a letter such as $K_n$ instead of warning about the clash with the integration constant $C$.
- [Example] Add a short definite check of the sine recurrence, for example $\int_0^{\pi}\sin^4x\,dx=3\pi/8$, linking to \[\[Definite integral tables\]\] where the same recurrence appears.
- [Structure] File is saved with a UTF-8 BOM and CRLF line endings; re-save as UTF-8 without BOM with LF endings per AGENTS.md.

### N0819

Note: [[Z-transform tables|Z-transform tables]]  
Priority: low · Graph: yes · Manim: no

Correct and clear about regions of convergence; the table rows, the left-sided example and the recurrence example verify.

- [Graph] Add a complex-plane plot showing the pole at $z=a$ with the two ROCs $|z|>|a|$ and $|z|<|a|$ shaded, labelled right-sided and left-sided, next to "Same rational function, different sequence".
- [Graph] Plot the sequences $0.8^nu_n$ and $-(1.25)^n$ for $n\le-1$ as stem plots so readers see what each ROC selects.
- [Structure] File is saved with a UTF-8 BOM and CRLF line endings; re-save as UTF-8 without BOM with LF endings per AGENTS.md.

### N0820

Note: [[Chi-squared F and Student tables|Chi-squared F and Student tables]]  
Priority: low · Graph: yes · Manim: no

Correct and careful; all quantiles, the exact F(2,2) case and the interval examples verify.

- [Graph] Plot Student t densities for $\nu=1,2,5$ together with the standard normal density on $[-5,5]$ to show the heavier tails described in the text.
- [Graph] Plot $\chi^2_\nu$ densities for $\nu=1,2,5$ on $(0,15]$, marking $q_{0.95}=5.991465$ for $\nu=2$ to support the worked chi-squared lookup.
- [Intuition] In "Student t-distribution", add the standard normal values 1.644854 and 1.959964 as a last row ($\nu=\infty$) so the convergence of t quantiles to the normal is visible in the table itself.
- [Structure] File is saved with a UTF-8 BOM and CRLF line endings; re-save as UTF-8 without BOM with LF endings per AGENTS.md.

### N0821

Note: [[Normal probability tables|Normal probability tables]]  
Priority: low · Graph: yes · Manim: no

Correct and clear; table entries, quantiles and worked answers verify.

- [Graph] Add a native plot of $\phi(z)$ on $[-4,4]$ with the central region $|z|\le1.96$ shaded, complementing the existing area-accounting strip, which deliberately is not a density graph.
- [Example] In "Practical limits", give a concrete cancellation example such as $1-\Phi(5)\approx2.87\times10^{-7}$, which a six-place CDF table would show as 0.
- [Structure] File is saved with a UTF-8 BOM and CRLF line endings; re-save as UTF-8 without BOM with LF endings per AGENTS.md.

### N0822

Note: [[Poisson probability tables|Poisson probability tables]]  
Priority: low · Graph: yes · Manim: no

Correct and well explained; the mass table, tail row, cumulative sums and quantile example verify.

- [Graph] Add a stem or bar plot of $p_k$ for $\lambda=1,2,3$ over $k=0..10$, showing the shared maxima at $k=\lambda-1,\lambda$ and the shift of the distribution with $\lambda$.
- [Intuition] In "Define the model", add one sentence on why Poisson appears: it is the limit of a binomial with $n\to\infty$, $p=\lambda/n$, which also explains why mean and variance coincide.
- [Structure] File is saved with a UTF-8 BOM and CRLF line endings; re-save as UTF-8 without BOM with LF endings per AGENTS.md.

### N0823

Note: [[Random-number tables|Random-number tables]]  
Priority: low · Graph: no · Manim: no

Correct and practical; the rejection examples, inverse-transform example and the toy LCG sequence verify.

- [Intuition] Point out that rows 1, 3 and 4 of the synthetic table are each a permutation of 0–9 (every digit exactly once), which a genuinely random row would rarely be; this is a ready-made illustration of the "balanced but not random" point in the last section.
- [Simplify] In "Seeds and reproducibility", add one sentence on why $s_{n+1}=(5s_n+1)\bmod16$ reaches the full period 16 (odd increment, $a-1$ divisible by 4), so readers do not assume every LCG does.
- [Structure] File is saved with a UTF-8 BOM and CRLF line endings; re-save as UTF-8 without BOM with LF endings per AGENTS.md.

### N0824

Note: [[Numerical constants and rounding|Numerical constants and rounding]]  
Priority: low · Graph: no · Manim: no

Correct and clear; the rounding bounds, the series bound for $e$ and the practice answers verify.

- [Example] In "Worked example: a constant inside a formula", give the resulting numbers: $\pi(1.995)^2\approx12.5035$ and $\pi(2.005)^2\approx12.6293$, so the width 0.126 can be compared directly with the 0.0002 bound from $\pi$.
- [Structure] File is saved with a UTF-8 BOM and CRLF line endings; re-save as UTF-8 without BOM with LF endings per AGENTS.md.

### N0825

Note: [[Physical constants and SI units|Physical constants and SI units]]  
Priority: low · Graph: no · Manim: no

Correct and current (CODATA 2022 values verify), with consistent semantic macros and a complete quantity table.

- [Structure] In "Physical quantities", the last row uses "—" as the symbol for the volume in the exercise; give it a symbol such as $\mechanical{V}$ and use it in the practice answer, or drop the row.
- [Simplify] In the photon example, show the arithmetic $6.62607015\times10^{-34}\times5.00\times10^{14}=3.313\times10^{-19}$ before rounding to 3.31, so the significant-figure remark has its input visible.
- [Structure] File is saved with a UTF-8 BOM and CRLF line endings; re-save as UTF-8 without BOM with LF endings per AGENTS.md.

### N0826

Note: [[Mathematics Catalogue Source Guide|Mathematics Catalogue Source Guide]]  
Priority: low · Graph: no · Manim: no

Clear navigation hub; all links resolve and the Tables entry count (64) matches the chapter index.

- [Structure] No change needed beyond optionally listing chapter 1 (Arithmetic) in "Start from secondary-school mathematics" so the bullet list matches the section's own starting recommendation.

### N0827

Note: [[Tables - Catalogue Guide|Tables - Catalogue Guide]]  
Priority: low · Graph: no · Manim: no

Clear chapter guide; links, the embedded figure and the lesson index resolve correctly.

- [Structure] File is saved with a UTF-8 BOM and CRLF line endings; re-save as UTF-8 without BOM with LF endings per AGENTS.md (the same applies to all 18 table notes in this chapter).
