---
title: "Note Improvement Tracker – 02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/03 Measurement, Observables, and Uncertainty"
---

> [!TLDR]
> This note tracks the review of the 11 notes in `02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/03 Measurement, Observables, and Uncertainty`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 4 possible errors or notation conflicts. 4 of them are verified (4 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N2035|N2035]] Dirac notation, representations, and quantum uncertainty: The Physical quantities table lists $R$, $T$ as reflection and transmission coefficients, which the note never uses; $T$ is instead a generic matrix in "Linear algebra". Remove the row and add the symbols actually used ($\Phi(\mechanical{p},t)$, $\mechanical{p}$, $\sigma_Q$, $c_n$). **Fixed:** Removed R,T row; added Phi(p,t), p, x, h, sigma_Q, sigma_x and sigma_px, c_n
- [[#N2035|N2035]] Dirac notation, representations, and quantum uncertainty: The table gives $\Psi$ in $\unit{m^{-3/2}}$ "in three dimensions", but every integral in the note is one-dimensional ($dx$), so $\Psi(x,t)$ has unit $\unit{m^{-1/2}}$ and $\Phi(\mechanical{p},t)$ has unit $\unit{(kg\,m\,s^{-1})^{-1/2}}$. **Fixed:** Psi unit changed to m^-1/2 (one dimension); Phi given unit (kg m s^-1)^-1/2
- [[#N2036|N2036]] Hermitian operators and uncertainty derivations: Symbol clash in the opening: $a(x)$, $b(x)$ denote functions while $a$, $b$ are also the integration limits in the Schwarz inequality, and later $a,b,c,d$ are real coefficients in Problem 3.12; rename the functions (e.g. $u(x),v(x)$) or the limits. **Fixed:** Renamed the opening functions a(x),b(x),c(x) to u(x),v(x),w(x)
- [[#N2036|N2036]] Hermitian operators and uncertainty derivations: The quantities table gives $\Psi$ in $\unit{m^{-3/2}}$ "in three dimensions", but the note is one-dimensional ($\Psi(x,t)$, $dx$), so the unit is $\unit{m^{-1/2}}$; also add the symbols used ($\mechanical{p}$, $q$, $\sigma_Q$, $c_n$). **Fixed:** Psi unit changed to m^-1/2; added rows for x, p, q, sigma_Q, c_n

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2026 | [[03.00 Measurement, Observables, and Uncertainty\|03.00 Measurement, Observables, and Uncertainty]] | Analyzed | low | no | no | [[#N2026\|View]] |
| N2027 | [[03.01 Compatibility of Observables\|03.01 Compatibility of Observables]] | Analyzed | low | no | no | [[#N2027\|View]] |
| N2028 | [[03.02 Complete Set of Commuting Observables (CSCO)\|03.02 Complete Set of Commuting Observables (CSCO)]] | Analyzed | low | no | no | [[#N2028\|View]] |
| N2029 | [[03.03 Robertson Inequality\|03.03 Robertson Inequality]] | Analyzed | low | no | yes | [[#N2029\|View]] |
| N2030 | [[03.04 Energy–Time Uncertainty\|03.04 Energy–Time Uncertainty]] | Analyzed | medium | yes | no | [[#N2030\|View]] |
| N2031 | [[03.05 Successive Measurements and the Quantum Zeno Effect\|03.05 Successive Measurements and the Quantum Zeno Effect]] | Analyzed | medium | yes | yes | [[#N2031\|View]] |
| N2032 | [[03.06 A Structural Example – the Angular Momentum Components\|03.06 A Structural Example – the Angular Momentum Components]] | Analyzed | low | no | yes | [[#N2032\|View]] |
| N2033 | [[03.07 Ideal and Real Measurements\|03.07 Ideal and Real Measurements]] | Analyzed | medium | no | no | [[#N2033\|View]] |
| N2034 | [[03.08 Measurement, Observables, and Uncertainty Exercises\|03.08 Measurement, Observables, and Uncertainty Exercises]] | Analyzed | low | no | no | [[#N2034\|View]] |
| N2035 | [[Dirac notation, representations, and quantum uncertainty\|Dirac notation, representations, and quantum uncertainty]] | Analyzed | high | no | no | [[#N2035\|View]] |
| N2036 | [[Hermitian operators and uncertainty derivations\|Hermitian operators and uncertainty derivations]] | Analyzed | medium | no | no | [[#N2036\|View]] |

## Suggestions

### N2026

Note: [[03.00 Measurement, Observables, and Uncertainty|03.00 Measurement, Observables, and Uncertainty]]  
Priority: low · Graph: no · Manim: no

Clear, correct chapter hub whose summary bullets match the section notes.

- [Links] Link each chapter-summary bullet to its section note (03.01 Compatibility, 03.02 CSCO, 03.03 Robertson, 03.04 Energy–Time, 03.05 Zeno, 03.07 Ideal and Real Measurements) so the hub can be used for navigation.

### N2027

Note: [[03.01 Compatibility of Observables|03.01 Compatibility of Observables]]  
Priority: low · Graph: no · Manim: no

Correct and compact, but the proof sketch of Theorem 3.1 skips the key one-line step and the incompatibility bullets stay abstract.

- [Simplify] After Theorem 3.1, spell out the invariance step: if $\hat A\lvert\psi\rangle=a\lvert\psi\rangle$ then $\hat A(\hat B\lvert\psi\rangle)=\hat B\hat A\lvert\psi\rangle=a\,\hat B\lvert\psi\rangle$, so $\hat B$ maps $\mathcal H_a$ into itself.
- [Example] Add a two-level example of incompatible observables (spin-½ $\hat S_z$ then $\hat S_x$ then $\hat S_z$, giving 50 % instead of 100 % for the repeated $S_z$ result) to make "the order of measurements can affect the results" concrete; link to 03.05.
- [Intuition] In the two-position-components example, note explicitly that the 2D Gaussian $e^{-(x^2+y^2)/4\sigma^2}$ has arbitrarily small $\Delta x$ and $\Delta y$ simultaneously, contrasting with the $x$–$p$ case.

### N2028

Note: [[03.02 Complete Set of Commuting Observables (CSCO)|03.02 Complete Set of Commuting Observables (CSCO)]]  
Priority: low · Graph: no · Manim: no

Correct and readable; the examples would benefit from showing why a single observable is not complete.

- [Example] Add the explicit degeneracy argument for hydrogen: $\energy{\hat H}$ alone leaves an $n^2$-fold (or $2n^2$ with spin) degeneracy, $\mechanical{\hat{\vec L}}^{\,2}$ splits it by $\ell$, $\mechanical{\hat L}_z$ by $m_\ell$, and $\mechanical{\hat S}_z$ by $m_s$, so the reader sees each observable removing a degeneracy.
- [Simplify] In the coupled-basis bullet, give the concrete alternative set $\{\energy{\hat H},\mechanical{\hat{\vec L}}^{\,2},\mechanical{\hat{\vec S}}^{\,2},\mechanical{\hat{\vec J}}^{\,2},\mechanical{\hat J}_z\}$ instead of "where appropriate", and note that $\mechanical{\hat L}_z$ and $\mechanical{\hat{\vec J}}^{\,2}$ do not commute.

### N2029

Note: [[03.03 Robertson Inequality|03.03 Robertson Inequality]]  
Priority: low · Graph: no · Manim: yes

Clean proof, correct Gaussian example, and an accurate two-panel figure (densities and $2\Delta$ arrows verified); only intuition about saturation is missing.

- [Intuition] After the proof, state when equality holds: $\hat b\lvert\psi\rangle=\lambda\hat a\lvert\psi\rangle$ with purely imaginary $\lambda$ (Cauchy–Schwarz equality plus vanishing anticommutator term), and show the Gaussian satisfies it, which explains why Gaussians are minimum-uncertainty states.
- [Simplify] In the Gaussian example, show the one-line Fourier transform $\tilde\psi(p)\propto e^{-p^2\sigma^2/\hbar^2}$ so that $\Delta p=\hbar/(2\sigma)$ is derived rather than asserted.
- [Manim] Animate $\sigma$ shrinking: the position Gaussian narrows while the momentum Gaussian widens, with the live product $\Delta x\,\Delta p=\hbar/2$ displayed constant; motion conveys the trade-off better than the static panel.
- [Structure] Mention the Schrödinger strengthening (Exercise 10 in 03.08) at the point where the real anticommutator part is discarded, so the reader knows the bound can be sharpened.

### N2030

Note: [[03.04 Energy–Time Uncertainty|03.04 Energy–Time Uncertainty]]  
Priority: medium · Graph: yes · Manim: no

Correct derivation and sound distinction between the heuristic and Mandelstam–Tamm relations, but the line-width paragraph is asserted without connection to the theorem and without a worked number.

- [Intuition] Explain why $\energy{\Gamma}\simeq\hbar/\tau$ is a different statement from Mandelstam–Tamm (Fourier width of an exponentially decaying amplitude giving a Lorentzian of FWHM $\hbar/\tau$), rather than placing it under the theorem as if it followed from it.
- [Example] Turn the hydrogen $2p\to1s$ numbers into a worked line: $\tau\approx\quantity{1.6}{ns}$ gives $\energy{\Gamma}=\hbar/\tau\approx\quantity{4\times10^{-7}}{eV}$, compared with the $\quantity{10.2}{eV}$ transition energy (relative width $\sim4\times10^{-8}$).
- [Example] Add a two-level worked example: $(\lvert E_1\rangle+\lvert E_2\rangle)/\sqrt2$ has $\Delta E=(E_2-E_1)/2$ and becomes orthogonal to itself after $t=\pi\hbar/(E_2-E_1)=\pi\hbar/(2\Delta E)$, illustrating "fast change requires large energy spread".
- [Graph] Plot the Lorentzian line shape $L(E)=(\Gamma/2\pi)/[(E-E_0)^2+(\Gamma/2)^2]$ for two lifetimes ($\tau$ and $\tau/3$) with $E-E_0$ in units of $\hbar/\tau$ on $[-5,5]$, marking the FWHM $\Gamma$.

### N2031

Note: [[03.05 Successive Measurements and the Quantum Zeno Effect|03.05 Successive Measurements and the Quantum Zeno Effect]]  
Priority: medium · Graph: yes · Manim: yes

Correct formulas, but the short-time expansion is quoted without derivation and the Zeno limit is not shown explicitly.

- [Simplify] Derive the short-time survival: $\langle a\vert e^{-i\hat H\delta t/\hbar}\vert a\rangle=1-i\langle H\rangle\delta t/\hbar-\langle H^2\rangle\delta t^2/(2\hbar^2)+\dots$, whose squared modulus gives $1-(\Delta E\,\delta t/\hbar)^2$; this makes clear why the quadratic onset is essential.
- [Simplify] Show the limit explicitly: with $\delta t=T/N$, $[1-(\Delta E\,T/\hbar N)^2]^N\approx\exp[-(\Delta E\,T/\hbar)^2/N]\to1$.
- [Example] Add a concrete two-level case (Rabi oscillation $P=\cos^2(\Omega t/2)$, survival after $N$ checks $\cos^{2N}(\Omega T/2N)$), matching the Itano et al. setup.
- [Graph] Plot survival probability $\cos^{2N}(\Omega T/2N)$ versus $\Omega T\in[0,\pi]$ for $N=1,2,5,20,100$ to show the curves approach 1.
- [Manim] Animate a Bloch vector rotating under the Hamiltonian and repeatedly snapped back to the pole by measurements at interval $\delta t$, with a counter for the survival probability, comparing small and large $N$.

### N2032

Note: [[03.06 A Structural Example – the Angular Momentum Components|03.06 A Structural Example – the Angular Momentum Components]]  
Priority: low · Graph: no · Manim: yes

Correct and concise; the claim that the product equals $\ell\hbar^2/2$ at $m=\pm\ell$ is true but its source is not shown.

- [Simplify] Show why the bound is attained at $m=\pm\ell$: by symmetry $\langle L_x^2\rangle=\langle L_y^2\rangle=[\ell(\ell+1)-m^2]\hbar^2/2$, so $\Delta L_x\Delta L_y=[\ell(\ell+1)-m^2]\hbar^2/2$, which equals $\lvert m\rvert\hbar^2/2$ exactly when $\lvert m\rvert=\ell$.
- [Intuition] Add the vector-model numbers: the length $\sqrt{\ell(\ell+1)}\hbar$ exceeds the maximal projection $\ell\hbar$, so the vector can never point exactly along $z$.
- [Manim] Animate the semiclassical vector model: a vector of length $\sqrt{\ell(\ell+1)}\hbar$ on a cone with fixed $z$-projection $m\hbar$, precessing so that $L_x,L_y$ average to zero, for $\ell=2$ and $m=0,1,2$.

### N2033

Note: [[03.07 Ideal and Real Measurements|03.07 Ideal and Real Measurements]]  
Priority: medium · Graph: no · Manim: no

Correct but very brief overview; the QND, weak-measurement, and POVM paragraphs lack any concrete example.

- [Example] Give a minimal non-projective POVM, e.g. the unsharp qubit measurement $\hat E_\pm=\tfrac12(\hat I\pm\eta\sigma_z)$ with $0<\eta<1$, and show that $\eta=1$ recovers the projective case.
- [Example] Name a concrete QND case (photon number in a cavity measured dispersively, as in the Haroche experiments) instead of the generic pointer statement.
- [Simplify] Add the state-update rule with measurement operators, $\hat E_m=\hat M_m^\dagger\hat M_m$ and $\lvert\psi\rangle\to\hat M_m\lvert\psi\rangle/\sqrt{P(m)}$, since the note says weak measurements give a "partial" update without saying what it is.

### N2034

Note: [[03.08 Measurement, Observables, and Uncertainty Exercises|03.08 Measurement, Observables, and Uncertainty Exercises]]  
Priority: low · Graph: no · Manim: no

Exercise list with correct results (Ex. 1, 5, 6, 7, 8, 9, 11 rechecked numerically or algebraically).

- [Simplify] Exercise 7: "Compare with the classical distribution" is undefined; specify which classical distribution is meant (e.g. a classical oscillator of the same energy) or remove the clause.

### N2035

Note: [[Dirac notation, representations, and quantum uncertainty|Dirac notation, representations, and quantum uncertainty]]  
Priority: high · Graph: no · Manim: no

A transcription of lecture notes with correct matrix results (AB, BA, $[A,B]$, $\det B=3$, eigenvalues $i,0,1$ verified) but a disordered structure, many "handwritten line" remarks, and an inaccurate quantities table.

- [Correctness] The Physical quantities table lists $R$, $T$ as reflection and transmission coefficients, which the note never uses; $T$ is instead a generic matrix in "Linear algebra". Remove the row and add the symbols actually used ($\Phi(\mechanical{p},t)$, $\mechanical{p}$, $\sigma_Q$, $c_n$).
- [Correctness] The table gives $\Psi$ in $\unit{m^{-3/2}}$ "in three dimensions", but every integral in the note is one-dimensional ($dx$), so $\Psi(x,t)$ has unit $\unit{m^{-1/2}}$ and $\Phi(\mechanical{p},t)$ has unit $\unit{(kg\,m\,s^{-1})^{-1/2}}$.
- [Structure] Reorder into a logical sequence (complex numbers, kets and bras, inner products, matrices/transpose/adjoint, Hermitian eigenproblems, expansion in eigenbases, expectation values, uncertainty proof); currently transpose and Hermitian conjugate precede the definitions of matrices and kets, and the uncertainty proof is split across three headings.
- [Simplify] Remove the editorial remarks about the handwritten notes ("The handwritten line reverses the order…", "The handwritten boxed zero has been corrected", "conflates the coefficient…") and state the correct result directly.
- [Simplify] Either finish the cofactor computation for $B^{-1}$ (give $B^{-1}$ and verify $BB^{-1}=I$ as the exercise asks) or drop the partial column; the sentence deriving $I\psi=\hat H^{-1}\energy{E}\psi$ adds nothing and can be removed.
- [Structure] Apply semantic macros consistently: $\mechanical{p}$ is colored but $x$, $\hat x$, $\hat p_x$ are not; use $\mechanical{x}$, $\mechanical{\hat x}$, $\mechanical{\hat p}_x$ as in sibling notes 03.01–03.03.

### N2036

Note: [[Hermitian operators and uncertainty derivations|Hermitian operators and uncertainty derivations]]  
Priority: medium · Graph: no · Manim: no

Correct derivations (momentum Hermiticity, $i\,d/d\phi$ example, Theorems 1–2, Problem 3.12 orthogonal pair verified) but with a symbol clash, references to unstated problem parts, and an unfinished final step.

- [Correctness] Symbol clash in the opening: $a(x)$, $b(x)$ denote functions while $a$, $b$ are also the integration limits in the Schwarz inequality, and later $a,b,c,d$ are real coefficients in Problem 3.12; rename the functions (e.g. $u(x),v(x)$) or the limits.
- [Structure] The opening and "For part (b)" refer to a problem (square-integrable functions form a vector space; inner-product conjugate symmetry) that is never stated; state the problem before solving it.
- [Simplify] Finish the uncertainty proof: take the square root of the last inequality to obtain $\sigma_A\sigma_B\ge\tfrac12\lvert\langle[\hat A,\hat B]\rangle\rvert$, apply it to $[\hat x,\hat p]=i\hbar$, and remove the "handwritten line ends in zero" remark.
- [Correctness] The quantities table gives $\Psi$ in $\unit{m^{-3/2}}$ "in three dimensions", but the note is one-dimensional ($\Psi(x,t)$, $dx$), so the unit is $\unit{m^{-1/2}}$; also add the symbols used ($\mechanical{p}$, $q$, $\sigma_Q$, $c_n$).
- [Structure] Macro use is inconsistent: $\mechanical{p}$ is colored in the statistical-interpretation section, but $x$ and $\hat p$ elsewhere are not.
