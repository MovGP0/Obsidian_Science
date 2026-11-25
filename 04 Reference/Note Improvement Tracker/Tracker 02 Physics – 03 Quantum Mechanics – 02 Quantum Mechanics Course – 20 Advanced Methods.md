---
title: "Note Improvement Tracker – 02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/20 Advanced Methods"
---

> [!TLDR]
> This note tracks the review of the 8 notes in `02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/20 Advanced Methods`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found no possible errors in this folder.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2203 | [[20.00 Advanced Methods\|20.00 Advanced Methods]] | Analyzed | low | no | no | [[#N2203\|View]] |
| N2204 | [[20.01 Variational Method\|20.01 Variational Method]] | Analyzed | medium | yes | no | [[#N2204\|View]] |
| N2205 | [[20.02 WKB Approximation in More Detail\|20.02 WKB Approximation in More Detail]] | Analyzed | medium | yes | no | [[#N2205\|View]] |
| N2206 | [[20.03 Scattering Concepts\|20.03 Scattering Concepts]] | Analyzed | medium | no | yes | [[#N2206\|View]] |
| N2207 | [[20.04 Born Approximation\|20.04 Born Approximation]] | Analyzed | medium | yes | no | [[#N2207\|View]] |
| N2208 | [[20.05 Partial Waves\|20.05 Partial Waves]] | Analyzed | medium | yes | no | [[#N2208\|View]] |
| N2209 | [[20.06 Optical Theorem\|20.06 Optical Theorem]] | Analyzed | medium | no | no | [[#N2209\|View]] |
| N2210 | [[20.07 Advanced Methods Exercises\|20.07 Advanced Methods Exercises]] | Analyzed | low | no | no | [[#N2210\|View]] |

## Suggestions

### N2203

Note: [[20.00 Advanced Methods|20.00 Advanced Methods]]  
Priority: low · Graph: no · Manim: no

Concise, correct chapter hub whose summary bullets match the section notes.

- [Links] Turn the summary bullets into links to their sections ([[20.01 Variational Method]], [[20.02 WKB Approximation in More Detail]], [[20.04 Born Approximation]], [[20.05 Partial Waves]], [[20.06 Optical Theorem]]) and add [[21.20 Solutions for Variational Methods, WKB, and Scattering]] next to the exercise link.

### N2204

Note: [[20.01 Variational Method|20.01 Variational Method]]  
Priority: medium · Graph: yes · Manim: no

Correct and compact, but the helium section only quotes a percentage and never shows the minimizing parameter or the resulting energy.

- [Example] In "Helium with a hydrogen-like trial state", state the minimum explicitly: $Z_{\mathrm{eff}}^*=27/16\approx1.69$ and $\energy E_{\min}=-(27/16)^2\,\unit{Ha}\approx\quantity{-77.5}{eV}$ versus $\quantity{-79.0}{eV}$ (1.9 % above), and interpret $Z_{\mathrm{eff}}<2$ as screening of the nucleus by the other electron.
- [Links] "derived in Exercise 7" should link to [[20.07 Advanced Methods Exercises]] and to the worked solution in [[21.20 Solutions for Variational Methods, WKB, and Scattering]].
- [Graph] Plot $E(\alpha)/(\hbar\omega)=\alpha/(4\alpha^*)+\alpha^*/(4\alpha)$ for $\alpha/\alpha^*\in[0.2,4]$ with a horizontal line at the exact $1/2$, showing the kinetic and potential terms separately; optionally a second panel $E(Z_{\mathrm{eff}})=Z^2-27Z/8$ (Ha) for $Z\in[1,2.5]$ with the experimental $-2.904\,\mathrm{Ha}$ line.
- [Simplify] The proof assumes a discrete spectrum; add one sentence that the same argument holds with a spectral integral when part of the spectrum is continuous, since $\energy E_0$ is then the bottom of the spectrum.
- [Intuition] Add one sentence on why the energy error is second order in the wave-function error (the energy is stationary at eigenstates), which explains why crude trial states give good energies.

### N2205

Note: [[20.02 WKB Approximation in More Detail|20.02 WKB Approximation in More Detail]]  
Priority: medium · Graph: yes · Manim: no

Correct and well illustrated, but the origin of the $1/2$ and the validity condition of WKB are only asserted.

- [Structure] The note names the turning points both $x_\pm$ (text, harmonic oscillator, table) and $x_1,x_2$ (figure, Bohr–Sommerfeld integral); use one notation throughout.
- [Intuition] Explain the $1/2$: the Airy connection formula gives a phase loss of $\pi/4$ at each smooth turning point, so the two together add $\pi/2$ to $\int k\,\mathrm dx=n\pi$; at a hard wall the loss is $\pi/2$ each, which is why the infinite well has no $1/2$.
- [Simplify] Add the validity condition $\lvert\mathrm d\lambda/\mathrm dx\rvert\ll 2\pi$ (equivalently $\lvert k'\rvert\ll k^2$) and say it fails near turning points, motivating the Airy matching.
- [Graph] Add a second plot of the Airy function $\mathrm{Ai}(-\xi)$ for $\xi\in[-3,10]$ overlaid with its WKB asymptotes $\pi^{-1/2}\xi^{-1/4}\sin(\tfrac23\xi^{3/2}+\pi/4)$ and $\tfrac12\pi^{-1/2}\lvert\xi\rvert^{-1/4}e^{-\frac23\lvert\xi\rvert^{3/2}}$, showing where WKB diverges and Airy stays finite.
- [Example] The existing Fig. 20.1 uses the $n=4$ oscillator state; say so in the caption, since its four nodes illustrate the quantization count $n$.

### N2206

Note: [[20.03 Scattering Concepts|20.03 Scattering Concepts]]  
Priority: medium · Graph: no · Manim: yes

Correct but very terse; the step from flux to $\lvert f\rvert^2$ is only stated.

- [Simplify] Show the two-line derivation: incident flux density $\hbar k_0/m$, scattered radial flux $(\hbar k_0/m)\lvert f\rvert^2/r^2$, flux through $r^2\,\mathrm d\Omega$ gives $\mathrm d\sigma/\mathrm d\Omega=\lvert f\rvert^2$.
- [Intuition] Add the classical analogy (impact parameter $b$, $\mathrm d\sigma=b\,\mathrm db\,\mathrm d\phi$) and a hard-sphere example where $\sigma=\pi a^2$ classically, to motivate why $f$ has units of length.
- [Structure] The note writes $\mathbf k_0,k_0$ while 20.04–20.06 use $k$ and $\mathbf k_i$; unify the symbol for the incident wave vector across the chapter (and use the same unit $\unit{m^{-1}}$ as the other tables).
- [Manim] Animate a wave packet hitting a localized potential and splitting into an unscattered forward packet and an outgoing spherical shell whose angular brightness is $\lvert f(\theta)\rvert^2$.

### N2207

Note: [[20.04 Born Approximation|20.04 Born Approximation]]  
Priority: medium · Graph: yes · Manim: no

Formulas are correct, but the note lacks the validity condition and does not show the explicit Rutherford result it mentions.

- [Example] Make the Coulomb limit explicit: with $V_0=Z_1Z_2e^2/(4\pi\varepsilon_0)$ and $q=2k\sin(\theta/2)$, $\mathrm d\sigma/\mathrm d\Omega=\big(Z_1Z_2e^2/(16\pi\varepsilon_0\energy E)\big)^2/\sin^4(\theta/2)$.
- [Simplify] State the validity condition, e.g. $\lvert V\rvert\ll\hbar^2/(ma^2)$ at low energy or $\lvert V\rvert a\ll\hbar v$ at high energy, i.e. the scattered wave is small compared with the incident wave inside the potential.
- [Intuition] Add one sentence on the Fourier picture: a potential of range $1/\mu$ scatters appreciably only for $q\lesssim\mu$, so short-range potentials scatter more isotropically.
- [Graph] Plot $\mathrm d\sigma/\mathrm d\Omega$ (normalized to its forward value) versus $\theta\in[0,\pi]$ for the Yukawa result with $\mu/k=0.1,0.5,2$, on a logarithmic vertical axis, to show the transition from Rutherford-like forward peaking to near isotropy.
- [Simplify] Show the one-line angular integral $\int e^{-i\mathbf q\cdot\mathbf r}\,\mathrm d\Omega=4\pi\sin(qr)/(qr)$ that leads to the radial formula.

### N2208

Note: [[20.05 Partial Waves|20.05 Partial Waves]]  
Priority: medium · Graph: yes · Manim: no

Correct formulas presented without motivation; the meaning of the phase shift and the low-energy limit of the cross section are missing.

- [Intuition] Explain the phase shift with the asymptotic form $u_\ell(r)\propto\sin(kr-\ell\pi/2+\delta_\ell)$: an attractive potential pulls the wave in ($\delta_\ell>0$), a repulsive one pushes it out ($\delta_\ell<0$).
- [Example] Add the consequence $\sigma\to4\pi a^2$ as $k\to0$ and compare with the hard sphere (four times the geometric cross section), linking to Exercise 5 of [[20.07 Advanced Methods Exercises]].
- [Intuition] Add the semiclassical argument that only $\ell\lesssim kR$ contributes (impact parameter $b\approx\ell/k$ must be within the range $R$), which explains $s$-wave dominance at low energy.
- [Graph] Plot the partial cross sections $(4\pi/k^2)(2\ell+1)\sin^2\delta_\ell$ for a hard sphere ($\tan\delta_\ell=j_\ell(ka)/y_\ell(ka)$) for $\ell=0,1,2$ and their sum, versus $ka\in[0,5]$, in units of $\pi a^2$.

### N2209

Note: [[20.06 Optical Theorem|20.06 Optical Theorem]]  
Priority: medium · Graph: no · Manim: no

Correct statement with a qualitative explanation, but no check against the partial-wave formula and a misplaced chapter-level section.

- [Example] Verify the theorem in two lines from [[20.05 Partial Waves]]: $\operatorname{Im}f(0)=(1/k)\sum_\ell(2\ell+1)\sin^2\delta_\ell$, so $(4\pi/k)\operatorname{Im}f(0)$ reproduces $\sigma_{\mathrm{tot}}$.
- [Structure] The section "Physical meaning" compares variational, WKB, and scattering methods and has nothing to do with the optical theorem; move it to [[20.00 Advanced Methods]] and replace it with the physical meaning of the theorem (shadow formed by interference of $f(0)$ with the incident wave).
- [Simplify] State explicitly that the theorem holds with the normalization $\psi\simeq e^{ikz}+f\,e^{ikr}/r$ of [[20.03 Scattering Concepts]] and that $\sigma_{\mathrm{tot}}$ includes inelastic channels when they are open.

### N2210

Note: [[20.07 Advanced Methods Exercises|20.07 Advanced Methods Exercises]]  
Priority: low · Graph: no · Manim: no

Exercise list with correct quoted results (checked Ex. 2, 4, 5, 9).

- [Links] Add a link to the worked solutions in [[21.20 Solutions for Variational Methods, WKB, and Scattering]].
- [Structure] Exercise 6 contains a remark about the source's one-dimensional formula; move it into a short note callout so that the task statement itself stays clean.
