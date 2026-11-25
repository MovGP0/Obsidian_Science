---
title: "Note Improvement Tracker – 02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/12 Hydrogen Atom"
---

> [!TLDR]
> This note tracks the review of the 12 notes in `02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/12 Hydrogen Atom`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 8 possible errors or notation conflicts. 8 of them are verified (8 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N2126|N2126]] Atomic spectra and wave mechanics review problems: Electron in an infinite well: $h^2/(8m_eL^2)$ with $L=0.100\,\mathrm{nm}$ gives $6.02\times10^{-18}\,\mathrm J=37.6\,\mathrm{eV}$, not $37.7\,\mathrm{eV}$; the derived levels should be $E_2=150.4$, $E_3=338.4$, and $E_4=601.6\,\mathrm{eV}$. **Fixed:** Changed E1 to 37.6 eV and E2, E3, E4 to 150.4, 338.4, 601.6 eV (recomputed: 6.02e-18 J = 37.60 eV)
- [[#N2126|N2126]] Atomic spectra and wave mechanics review problems: Problem 6-16: $L=\sqrt{3\pi^2\hbar^2\lambda/(2m_ehc)}=\sqrt{3h\lambda/(8m_ec)}$ with $\lambda=694.3\,\mathrm{nm}$ gives $0.795\,\mathrm{nm}$, not $0.791\,\mathrm{nm}$. **Fixed:** Changed result to 0.795 nm (sqrt(3 h lambda/(8 m_e c)) = 0.7948 nm)
- [[#N2126|N2126]] Atomic spectra and wave mechanics review problems: 11.4(a) item 4: the transition is not stated, and $\Delta E=E_f-E_i=-(13.6\,\mathrm{eV})(1/n_f^2-1/n_i^2)$ is negative for emission (for $4\to2$ it is $-2.55\,\mathrm{eV}$); name the transition and either write $\lvert\Delta E\rvert=2.55\,\mathrm{eV}$ or fix the sign. **Fixed:** Stated that 2.55 eV matches emission n_i=4 to n_f=2 and wrote the positive photon energy as abs(Delta E) = E_i - E_f = 13.6 eV (1/n_f^2 - 1/n_i^2)
- [[#N2126|N2126]] Atomic spectra and wave mechanics review problems: Physical quantities table: the rows for decay constant $\lambda$, activity $R$, and mean lifetime $\tau$ are never used, $\lambda$ clashes with the de Broglie wavelength row, and $R$ is used in the note as the radial function; remove them and add the symbols the note uses ($k$, $\kappa$, $\eta$, $\vec L$, $L_z$, $m_\ell$, $j$, $m_j$, $\psi$). **Fixed:** Replaced the three decay rows with k, kappa, eta, vec L, L_z, m_ell, j, m_j, psi
- [[#N2127|N2127]] Hydrogen, spin, and the structure of the periodic table: Helium excited states: the helium $1s\,2p$ $^3P$ multiplet is inverted, so $^3P_2$ is the lowest and $^3P_0$ the highest level ($2^3P_0$ lies about 30 GHz above $2^3P_1$); Hund's rules apply to the ground term of equivalent electrons and do not predict "$^3P_0$ lowest" here, so keep only "triplet below singlet". **Fixed:** Kept the Hund-rule exercise statement, added that only triplet-below-singlet is valid here and that measured 2 3P has 3P2 lowest and 3P0 highest, about 30 GHz above 3P1
- [[#N2127|N2127]] Hydrogen, spin, and the structure of the periodic table: Physical quantities table: emissivity $\varepsilon$, decay constant $\lambda$, activity $R$, and mean lifetime $\tau$ are never used, while in this note $R$ is the radial function and $\tau$ the torque; replace those rows with the symbols the note uses ($R(r)$, $\vec\tau$, $\vec L$, $L_z$, $g_s$, $\vec B$, $\varepsilon_0$). **Fixed:** Replaced epsilon by epsilon_0 and the decay rows by R(r), vec tau, vec L, L_z, g_s, vec B
- [[#N2128|N2128]] Three-dimensional wells and hydrogen wavefunctions: Physical quantities table: $R,T$ are listed as reflection and transmission coefficients, but here $R$ is the radial (or spatial) function and $T(t)$ the time factor, and $Z$ is listed as atomic number but only appears as the Cartesian factor $Z(z)$; fix those rows and add $m$, $\ell$, $Y_\ell^m$, $P_\ell^m$, $j_\ell$, $n_\ell$, $\beta_{n\ell}$, $a$, and $u$. **Fixed:** Replaced with R (spatial/radial function), T (time factor), removed Z, added mu, u, ell, m, Y_ell^m, P_ell^m, j_ell, n_ell, beta_nl, a
- [[#N2128|N2128]] Three-dimensional wells and hydrogen wavefunctions: Symbol clash: $m$ is both the particle mass ($2mr^2/\hbar^2$) and the magnetic quantum number ($m^2$, $e^{im\phi}$), and $Y$ is both the Cartesian factor $Y(y)$ and the angular function $Y(\theta,\phi)$; use $\mu$ or $m_e$ for the mass and different letters for the Cartesian factors. **Fixed:** Renamed the particle mass to mu throughout the note and the Cartesian factors X,Y,Z to f(x)g(y)h(z)

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2117 | [[12.00 Hydrogen Atom\|12.00 Hydrogen Atom]] | Analyzed | low | no | no | [[#N2117\|View]] |
| N2118 | [[12.01 Hamiltonian and Separation of Center-of-Mass Motion\|12.01 Hamiltonian and Separation of Center-of-Mass Motion]] | Analyzed | low | no | no | [[#N2118\|View]] |
| N2119 | [[12.02 Separation of Radial and Angular Variables\|12.02 Separation of Radial and Angular Variables]] | Analyzed | low | yes | no | [[#N2119\|View]] |
| N2120 | [[12.03 Solution of the Radial Equation\|12.03 Solution of the Radial Equation]] | Analyzed | medium | no | yes | [[#N2120\|View]] |
| N2121 | [[12.04 Wave Functions and Degeneracy\|12.04 Wave Functions and Degeneracy]] | Analyzed | low | yes | no | [[#N2121\|View]] |
| N2122 | [[12.05 Ground State and Typical Scales\|12.05 Ground State and Typical Scales]] | Analyzed | low | no | no | [[#N2122\|View]] |
| N2123 | [[12.06 Spectrum and Emission\|12.06 Spectrum and Emission]] | Analyzed | low | no | no | [[#N2123\|View]] |
| N2124 | [[12.07 Fine-Structure and Zeeman Corrections\|12.07 Fine-Structure and Zeeman Corrections]] | Analyzed | medium | yes | no | [[#N2124\|View]] |
| N2125 | [[12.08 Hydrogen Atom Exercises\|12.08 Hydrogen Atom Exercises]] | Analyzed | low | no | no | [[#N2125\|View]] |
| N2126 | [[Atomic spectra and wave mechanics review problems\|Atomic spectra and wave mechanics review problems]] | Analyzed | high | yes | no | [[#N2126\|View]] |
| N2127 | [[Hydrogen, spin, and the structure of the periodic table\|Hydrogen, spin, and the structure of the periodic table]] | Analyzed | medium | no | no | [[#N2127\|View]] |
| N2128 | [[Three-dimensional wells and hydrogen wavefunctions\|Three-dimensional wells and hydrogen wavefunctions]] | Analyzed | medium | yes | no | [[#N2128\|View]] |

## Suggestions

### N2117

Note: [[12.00 Hydrogen Atom|12.00 Hydrogen Atom]]  
Priority: low · Graph: no · Manim: no

Clear and correct chapter hub; the summary formulas ($E_{\mathrm{Ry}}$, $\langle r\rangle=3a_0/2$, $\langle V\rangle=2E_1$) check out.

- [Links] Turn the chapter-summary bullets into links to the sections that derive them (12.01 for reduced mass, 12.03 for $E_n$, 12.04 for degeneracy, 12.05 for the ground state, 12.06 for selection rules, 12.07 for corrections) so the hub works for navigation.

### N2118

Note: [[12.01 Hamiltonian and Separation of Center-of-Mass Motion|12.01 Hamiltonian and Separation of Center-of-Mass Motion]]  
Priority: low · Graph: no · Manim: no

Correct and compact, but it jumps from the two-body Hamiltonian to the separated form without showing the momentum transformation.

- [Simplify] Between the two Hamiltonians, state $\hat{\mathbf P}=\hat{\mathbf p}_e+\hat{\mathbf p}_p$ and $\hat{\mathbf p}=(m_p\hat{\mathbf p}_e-m_e\hat{\mathbf p}_p)/M$, and note that $\hat{\mathbf p}_e^2/2m_e+\hat{\mathbf p}_p^2/2m_p=\hat{\mathbf P}^2/2M+\hat{\mathbf p}^2/2\mu$ is a one-line check.
- [Example] Make the "fractional error of about $1/1836$" concrete: the level energies scale as $\mu/m_e$, which moves H$\alpha$ by about $0.36\,\mathrm{nm}$ relative to the infinite-mass value, and the H–D isotope shift (about $0.18\,\mathrm{nm}$ at 656 nm) is how deuterium was discovered.
- [Intuition] Add one sentence on why the center of mass decouples (the potential depends only on $\mathbf r_e-\mathbf r_p$), with the classical Kepler two-body problem as the analogy.

### N2119

Note: [[12.02 Separation of Radial and Angular Variables|12.02 Separation of Radial and Angular Variables]]  
Priority: low · Graph: yes · Manim: no

Correct and readable derivation of the reduced radial equation; it would benefit from a plot of the effective potential.

- [Graph] Plot $V_{\mathrm{eff}}(r)/E_{\mathrm h}=-1/x+\ell(\ell+1)/(2x^2)$ against $x=r/a_0$ on $0.2<x<15$, $-1.2<V/E_{\mathrm h}<0.6$, for $\ell=0,1,2$, with horizontal lines at the Bohr energies $E_n/E_{\mathrm h}=-1/(2n^2)$ for $n=1,2,3$ to show the classically allowed regions.
- [Simplify] Show the one-line identity $\frac1{r^2}(r^2R')'=\frac1r u''$ for $u=rR$, which is the step that produces the 1D form.
- [Intuition] Justify $u(0)=0$ for $\ell=0$ more carefully: $R\sim1/r$ would be square-integrable, but $\nabla^2(1/r)=-4\pi\delta^{(3)}(\mathbf r)$, so it does not solve the equation at the origin.

### N2120

Note: [[12.03 Solution of the Radial Equation|12.03 Solution of the Radial Equation]]  
Priority: medium · Graph: no · Manim: yes

The math is correct ($\rho_0=2/(a_0\kappa)$, the Laguerre-type equation, and $\rho_0=2n$ all check), but the quantization step is stated rather than shown, so the key result feels unmotivated.

- [Simplify] Write $L(\rho)=\sum_j c_j\rho^j$ and give the recursion $c_{j+1}=\frac{2(j+\ell+1)-\rho_0}{(j+1)(j+2\ell+2)}c_j$; then show that $c_{j+1}/c_j\to2/j$ (which gives $e^{2\rho}$) unless the numerator vanishes at $j=n_r$, giving $\rho_0=2(n_r+\ell+1)$.
- [Simplify] Add the intermediate line from $\rho_0=2n$ to $\kappa=1/(na_0)$ and $E_n=-\hbar^2\kappa^2/2m_e$, and note that $\hbar^2/(2m_ea_0^2)=E_{\mathrm{Ry}}$ ties the result back to the Rydberg energy defined above.
- [Example] Work out $n=2$: list $(n_r,\ell)=(1,0),(0,1)$ and the resulting $L(\rho)$ for each, which leads directly to $R_{20}$ and $R_{21}$ in 12.04.
- [Manim] Animate a shooting-method solution $u(\rho)$ integrated outward while $E$ sweeps through $E_1$ and $E_2$: away from an eigenvalue the tail diverges up or down, and it flips sign exactly when $E$ crosses $E_n$, which shows why only discrete energies are normalizable.

### N2121

Note: [[12.04 Wave Functions and Degeneracy|12.04 Wave Functions and Degeneracy]]  
Priority: low · Graph: yes · Manim: no

Good note; the radial functions, the Fig. 12.1 formulas, and the Runge–Lenz operator are correct, and only the $n=3$ family and the degeneracy intuition are thin.

- [Graph] Extend Fig. 12.1 or add a second panel with $a_0r^2R_{n\ell}^2$ for $3s$, $3p$, $3d$ on $0<r/a_0<25$ so the node count $n-\ell-1$ (2, 1, 0) is visible, since $R_{30}$ is already given in the text.
- [Example] Normalize $R_{30}$ explicitly, $R_{30}=\frac{2}{81\sqrt3}a_0^{-3/2}(27-18r/a_0+2r^2/a_0^2)e^{-r/3a_0}$, instead of leaving it as a proportionality.
- [Intuition] In the degeneracy section, add the classical picture: in a pure $1/r$ potential Kepler ellipses close and do not precess, and the conserved Runge–Lenz vector points along the major axis; this is why different $\ell$ at the same energy are equivalent.
- [Graph] Optionally add a 2D density plot of $\lvert\psi_{200}\rvert^2$ and $\lvert\psi_{210}\rvert^2$ in the $xz$-plane (range $\pm12a_0$) to connect radial nodes and angular lobes with orbital pictures.

### N2122

Note: [[12.05 Ground State and Typical Scales|12.05 Ground State and Typical Scales]]  
Priority: low · Graph: no · Manim: no

Clear and correct; the integrals, the virial check, and Fig. 12.2 are consistent.

- [Simplify] Show one integral with $\int_0^\infty x^ne^{-x}dx=n!$, for example $\langle r\rangle=\frac{4}{a_0^3}\int_0^\infty r^3e^{-2r/a_0}dr=\frac{4}{a_0^3}\cdot\frac{3!\,a_0^4}{16}=\frac32a_0$, so readers can reproduce the results.
- [Intuition] Add the uncertainty-principle estimate $E(a)\approx\hbar^2/(2m_ea^2)-e^2/(4\pi\varepsilon_0a)$, minimized at $a=a_0$ with $E=-13.6\,\mathrm{eV}$, to explain why the atom has size $a_0$ and does not collapse.
- [Example] Give the probability of finding the electron inside the Bohr radius, $P(r<a_0)=1-5e^{-2}\simeq0.32$, to make the radial distribution concrete.

### N2123

Note: [[12.06 Spectrum and Emission|12.06 Spectrum and Emission]]  
Priority: low · Graph: no · Manim: no

Correct and well illustrated; the series values (121.6 nm, 656 nm) and the Fig. 12.3 arrows are right, but the Rydberg formula itself is missing.

- [Simplify] State the Rydberg formula $1/\lambda=R_\infty(1/n'^2-1/n^2)$ with $R_\infty\simeq1.097\times10^7\,\mathrm{m^{-1}}$ (and the reduced-mass factor $\mu/m_e$ for $R_{\mathrm H}$), and add the series limits (91.2 nm, 364.6 nm, 820 nm).
- [Example] Work out H$\alpha$: $\Delta E=13.6\,\mathrm{eV}\,(1/4-1/9)=1.89\,\mathrm{eV}$, $\lambda=hc/\Delta E\simeq656\,\mathrm{nm}$.
- [Intuition] Explain why $2s\to1s$ is absent despite $\Delta n\neq0$: it violates $\Delta\ell=\pm1$, so $2s$ is metastable and decays by two-photon emission with a lifetime of about $0.12\,\mathrm s$.

### N2124

Note: [[12.07 Fine-Structure and Zeeman Corrections|12.07 Fine-Structure and Zeeman Corrections]]  
Priority: medium · Graph: yes · Manim: no

The fine-structure formula and Zeeman Hamiltonian are correct, but the note is a list of results without the Landé factor, a worked $n=2$ example, or the Lamb shift.

- [Example] Evaluate the fine-structure formula for $n=2$: $2S_{1/2}$ and $2P_{1/2}$ shift by $-\frac{5}{64}\alpha^2E_{\mathrm{Ry}}$ and $2P_{3/2}$ by $-\frac{1}{64}\alpha^2E_{\mathrm{Ry}}$, giving a splitting $\alpha^2E_{\mathrm{Ry}}/16\simeq4.5\times10^{-5}\,\mathrm{eV}$ (about 10.9 GHz).
- [Graph] Add a level diagram for $n=2$: the Bohr level, the fine-structure split into $j=1/2$ and $j=3/2$, and the Lamb shift raising $2S_{1/2}$ above $2P_{1/2}$ by about 1.06 GHz (not to scale, with the scales annotated).
- [Structure] Give the Landé factor $g_J=1+\frac{j(j+1)+s(s+1)-\ell(\ell+1)}{2j(j+1)}$ (with $g_s\simeq2$) and evaluate it for $2S_{1/2}$ (2), $2P_{1/2}$ (2/3), and $2P_{3/2}$ (4/3), since $\Delta E=g_Jm_j\mu_BB$ cannot be used without it.
- [Intuition] In the orbital-quantum-number callout, add that the QED Lamb shift lifts the $2S_{1/2}$–$2P_{1/2}$ degeneracy, which explains the "radiative corrections" mentioned in 12.00.
- [Simplify] Add a sentence on the strong-field (Paschen–Back) limit, where $m_\ell,m_s$ are good labels and $\Delta E=\mu_BB(m_\ell+2m_s)$, so readers see what "weak compared with the fine-structure splitting" is contrasted with.

### N2125

Note: [[12.08 Hydrogen Atom Exercises|12.08 Hydrogen Atom Exercises]]  
Priority: low · Graph: no · Manim: no

Clear exercise list; all given results ($3a_0^2$, $2/a_0^2$, $P=(24-65/e)/24$, 122.4 eV) are correct.

- [Example] Give the result of exercise 11, $E^{(1)}=-\frac{5}{8}\alpha^4m_ec^2\simeq-9.1\times10^{-4}\,\mathrm{eV}$, so readers can check their work as in the other exercises.
- [Links] Link each exercise to the section it practices (for example exercise 9 to 12.04 and exercise 11 to 12.07) and to the worked solutions in chapter 21 if they exist.

### N2126

Note: [[Atomic spectra and wave mechanics review problems|Atomic spectra and wave mechanics review problems]]  
Priority: high · Graph: yes · Manim: no

A loosely ordered lecture-notebook transcription with useful worked problems, but it has numerical slips, an unnamed transition, frequent "handwritten" commentary, and a physical-quantities table copied from a nuclear-physics note.

- [Correctness] Electron in an infinite well: $h^2/(8m_eL^2)$ with $L=0.100\,\mathrm{nm}$ gives $6.02\times10^{-18}\,\mathrm J=37.6\,\mathrm{eV}$, not $37.7\,\mathrm{eV}$; the derived levels should be $E_2=150.4$, $E_3=338.4$, and $E_4=601.6\,\mathrm{eV}$.
- [Correctness] Problem 6-16: $L=\sqrt{3\pi^2\hbar^2\lambda/(2m_ehc)}=\sqrt{3h\lambda/(8m_ec)}$ with $\lambda=694.3\,\mathrm{nm}$ gives $0.795\,\mathrm{nm}$, not $0.791\,\mathrm{nm}$.
- [Correctness] 11.4(a) item 4: the transition is not stated, and $\Delta E=E_f-E_i=-(13.6\,\mathrm{eV})(1/n_f^2-1/n_i^2)$ is negative for emission (for $4\to2$ it is $-2.55\,\mathrm{eV}$); name the transition and either write $\lvert\Delta E\rvert=2.55\,\mathrm{eV}$ or fix the sign.
- [Correctness] Physical quantities table: the rows for decay constant $\lambda$, activity $R$, and mean lifetime $\tau$ are never used, $\lambda$ clashes with the de Broglie wavelength row, and $R$ is used in the note as the radial function; remove them and add the symbols the note uses ($k$, $\kappa$, $\eta$, $\vec L$, $L_z$, $m_\ell$, $j$, $m_j$, $\psi$).
- [Structure] Remove the "handwritten"/"crossed-out" commentary (11.4(a) item 2, LS coupling review, 6-4(c), 6-6(a)) and group the content into wave-function sketching, hydrogen and angular momentum, Stern–Gerlach, and LS terms; also define $\alpha$ before writing $\eta=1/\alpha$ in the penetration-depth section, and state the sphere radius used in 10.6(a) (the quoted speed implies $r\approx5\times10^{-16}\,\mathrm m$).
- [Graph] For "Angle of orbital angular momentum", plot the vector model for $\ell=2$: vectors of length $\sqrt6$ with $L_z/\hbar=-2,\ldots,2$ in the $(L_\perp,L_z)$ plane, with the angle $\theta_{\min}=35.3^\circ$ marked.

### N2127

Note: [[Hydrogen, spin, and the structure of the periodic table|Hydrogen, spin, and the structure of the periodic table]]  
Priority: medium · Graph: no · Manim: no

A mostly correct transcription on hydrogen, the Zeeman effect, spin, and LS terms, but its headings do not match the content, the LS-coupling example appears three times, one helium statement is wrong, and the quantities table is copied from unrelated notes.

- [Correctness] Helium excited states: the helium $1s\,2p$ $^3P$ multiplet is inverted, so $^3P_2$ is the lowest and $^3P_0$ the highest level ($2^3P_0$ lies about 30 GHz above $2^3P_1$); Hund's rules apply to the ground term of equivalent electrons and do not predict "$^3P_0$ lowest" here, so keep only "triplet below singlet".
- [Correctness] Physical quantities table: emissivity $\varepsilon$, decay constant $\lambda$, activity $R$, and mean lifetime $\tau$ are never used, while in this note $R$ is the radial function and $\tau$ the torque; replace those rows with the symbols the note uses ($R(r)$, $\vec\tau$, $\vec L$, $L_z$, $g_s$, $\vec B$, $\varepsilon_0$).
- [Structure] Retitle the misleading headings ("Hydrogen and an expectation-value example" is about the oscillator, and the bold "The hydrogen atom" paragraph is about parity) and merge "LS coupling example", "LS coupling example revisited", and "LS coupling example 2" into one section, keeping the "LS coupling example" heading because another note links to it.
- [Structure] Hund's rules: complete rule 3 with the more-than-half-full case (largest $J$) and add a worked ground-term example, for example carbon $2p^2\to{}^3P_0$, which connects to the carbon table at the end.
- [Simplify] Remove the "handwritten" asides (spin coefficient, $J=1\to J=1$) and state only the correct rule, which is already present.

### N2128

Note: [[Three-dimensional wells and hydrogen wavefunctions|Three-dimensional wells and hydrogen wavefunctions]]  
Priority: medium · Graph: yes · Manim: no

The derivations (separation, $P_2^1$, spherical Bessel functions, hydrogen normalization) are correct, but letters are reused for different quantities and the quantities table is wrong.

- [Correctness] Physical quantities table: $R,T$ are listed as reflection and transmission coefficients, but here $R$ is the radial (or spatial) function and $T(t)$ the time factor, and $Z$ is listed as atomic number but only appears as the Cartesian factor $Z(z)$; fix those rows and add $m$, $\ell$, $Y_\ell^m$, $P_\ell^m$, $j_\ell$, $n_\ell$, $\beta_{n\ell}$, $a$, and $u$.
- [Correctness] Symbol clash: $m$ is both the particle mass ($2mr^2/\hbar^2$) and the magnetic quantum number ($m^2$, $e^{im\phi}$), and $Y$ is both the Cartesian factor $Y(y)$ and the angular function $Y(\theta,\phi)$; use $\mu$ or $m_e$ for the mass and different letters for the Cartesian factors.
- [Graph] For the infinite spherical well, plot $j_0(x)$, $j_1(x)$, $j_2(x)$ on $0<x<12$ and mark the zeros $\beta_{10}=\pi$, $\beta_{11}=4.493$, $\beta_{12}=5.763$, $\beta_{20}=2\pi$ so the ordering $E_{10}<E_{11}<E_{12}<E_{20}$ is visible.
- [Simplify] In "Separation in Cartesian coordinates", say that separation works whenever $V=V_1(x)+V_2(y)+V_3(z)$, not only for constant potential, and give the 3D box energies as the example.
- [Structure] Move Problems 7 and 15(a) (Fourier transform, ladder operators) out of this note or under a separate "Other problems" heading, since they are unrelated to 3D wells and hydrogen.
