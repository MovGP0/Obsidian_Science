---
title: "Note Improvement Tracker – 02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/01 The Crisis of Classical Physics"
---

> [!TLDR]
> This note tracks the review of the 12 notes in `02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/01 The Crisis of Classical Physics`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 8 possible errors or notation conflicts. 8 of them are verified (7 fixed, 1 partly); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N2004|N2004]] 01.02 Photoelectric Effect: Both source links target the heading `#Blackbody radiation`, which is the wrong section for this note; point them to `Quantization, light, and early atomic models#Photoelectric apparatus` (or `#Quantization of charge, light, and energy`) and `Matter waves, diffraction, and early quantum problems#The photoelectric effect`. **Fixed:** Pointed links to Quantization, light, and early atomic models#Photoelectric apparatus and Matter waves, diffraction, and early quantum problems#The photoelectric effect (headings verified)
- [[#N2012|N2012]] Matter waves, diffraction, and early quantum problems: The Physical quantities table lists a decay constant $\lambda$ (clashing with wavelength $\lambda$), activity $R$, and mean lifetime $\tau$, none of which the note uses. It also describes $\rho$ as "nuclear mass per unit volume", although the note uses gold's bulk density 19.3 g/cm³. Remove or correct these rows and add the symbols actually used ($K$, $D$, $d$, $n$, $f$, $t$). **Fixed:** Removed the three rows, described rho as bulk density of the gold foil, added K, D, d, n, f, foil thickness and t rows
- [[#N2012|N2012]] Matter waves, diffraction, and early quantum problems: "Interference of neutrons": the Zeilinger–Gähler double-slit experiment used very cold neutrons with $\lambda\approx1.85$ nm, that is $v\approx200$ m/s, not about 2 km/s (2.2 km/s is the thermal-neutron speed). **Fixed:** Stated very cold neutrons of wavelength about 1.85 nm at about 200 m/s (h/(m lambda) = 214 m/s) and noted that the source value 2 km/s is the thermal-neutron speed
- [[#N2012|N2012]] Matter waves, diffraction, and early quantum problems: Symbol clashes: $t$ is a time ($10^4$ s) and a foil thickness ($10^{-6}$ m); $T$ is temperature and wave period; $P$ is power and probability density; $\phi$ is a phase shift, the time factor $\phi(t)$, the Davisson–Germer angle, and the Compton recoil angle. The scattered wavelength is called both $\lambda'$ and $\lambda_{\mathrm f}$. **Partly:** Renamed foil thickness to ell, phase shift to delta, time factor to chi(t), lambda_f to lambda'; T and P are already separated by macros (thermal vs signal, energy vs plain); left the Davisson-Germer and Compton angles phi because the figure captions and images use them
- [[#N2013|N2013]] Quantization, light, and early atomic models: The Physical quantities table lists a decay constant $\lambda$, activity $R$, and "nuclear mass per unit volume" $\rho$, which are not used as described. $\sigma$ denotes both the Stefan–Boltzmann constant and the cross section $\pi b^2$. $R$ denotes both radiant exitance and the Rydberg constant in $1/\lambda=R(1/m^2-1/n^2)$. Rename the clashing symbols and fix the table. **Fixed:** Removed decay constant and activity rows, fixed rho description, renamed Stefan-Boltzmann constant to sigma_SB (added table rows for sigma_SB and u), and wrote the Balmer general formula with R_H
- [[#N2013|N2013]] Quantization, light, and early atomic models: "Quantization of charge, light, and energy" quotes $c=2.9989\times10^8$ m/s; the correct value is $2.9979\times10^8$ m/s. **Fixed:** Changed to 2.9979e8 m/s (3.10 eV result unchanged)
- [[#N2013|N2013]] Quantization, light, and early atomic models: Stefan–Boltzmann: $R=\int_0^\infty I(\lambda,T)\,d\lambda$ uses the symbol that the next equation defines as the Rayleigh–Jeans exitance $2\pi ck_BT/\lambda^4$, whose integral diverges. The integrand must be the Planck exitance $2\pi hc^2\lambda^{-5}/(e^{hc/\lambda k_BT}-1)=(c/4)u(\lambda)$. Also note that $\varepsilon=1$ for a blackbody. **Fixed:** Integrand is now the Planck exitance (c/4)u(lambda); added that epsilon=1 for a blackbody and that the Rayleigh-Jeans integral diverges
- [[#N2013|N2013]] Quantization, light, and early atomic models: "Rutherford scattering example 2" never states the angle. The boxed $N/N_i=3.2\times10^{-7}\,\mathrm{mm^{-2}}$ corresponds to $\theta=45^\circ$. With the $90^\circ$ of example 1, the inputs give $2.7\times10^{-8}\,\mathrm{mm^{-2}}$. State $\theta=45^\circ$. **Fixed:** Added theta=45 deg (recomputed: 3.15e-7 mm^-2 at 45 deg, 2.7e-8 mm^-2 at 90 deg)

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2002 | [[01.00 The Crisis of Classical Physics\|01.00 The Crisis of Classical Physics]] | Analyzed | low | no | no | [[#N2002\|View]] |
| N2003 | [[01.01 Blackbody Radiation\|01.01 Blackbody Radiation]] | Analyzed | low | yes | yes | [[#N2003\|View]] |
| N2004 | [[01.02 Photoelectric Effect\|01.02 Photoelectric Effect]] | Analyzed | medium | yes | no | [[#N2004\|View]] |
| N2005 | [[01.03 Compton Effect\|01.03 Compton Effect]] | Analyzed | medium | yes | yes | [[#N2005\|View]] |
| N2006 | [[01.04 Atomic Spectra and Bohr's Atomic Model\|01.04 Atomic Spectra and Bohr's Atomic Model]] | Analyzed | medium | yes | no | [[#N2006\|View]] |
| N2007 | [[01.05 Wave–Particle Duality and the de Broglie Hypothesis\|01.05 Wave–Particle Duality and the de Broglie Hypothesis]] | Analyzed | low | yes | yes | [[#N2007\|View]] |
| N2008 | [[01.06 Double-Slit Experiment\|01.06 Double-Slit Experiment]] | Analyzed | medium | yes | yes | [[#N2008\|View]] |
| N2009 | [[01.07 Stern–Gerlach Experiment\|01.07 Stern–Gerlach Experiment]] | Analyzed | medium | no | yes | [[#N2009\|View]] |
| N2010 | [[01.08 Order-of-Magnitude Estimates with ℏ\|01.08 Order-of-Magnitude Estimates with ℏ]] | Analyzed | medium | yes | no | [[#N2010\|View]] |
| N2011 | [[01.09 The Crisis of Classical Physics Exercises\|01.09 The Crisis of Classical Physics Exercises]] | Analyzed | low | no | no | [[#N2011\|View]] |
| N2012 | [[Matter waves, diffraction, and early quantum problems\|Matter waves, diffraction, and early quantum problems]] | Analyzed | high | yes | yes | [[#N2012\|View]] |
| N2013 | [[Quantization, light, and early atomic models\|Quantization, light, and early atomic models]] | Analyzed | high | yes | no | [[#N2013\|View]] |

## Suggestions

### N2002

Note: [[01.00 The Crisis of Classical Physics|01.00 The Crisis of Classical Physics]]  
Priority: low · Graph: no · Manim: no

Short, correct chapter overview with an accurate summary list.

- [Links] Link each summary bullet to its section note (01.01–01.08) so the summary is also the chapter's navigation.

### N2003

Note: [[01.01 Blackbody Radiation|01.01 Blackbody Radiation]]  
Priority: low · Graph: yes · Manim: yes

Accurate and well structured; the numbers (Sun 3.4e14 Hz, 880 nm, 500 nm) check out and the existing graph is correct.

- [Intuition] Under Planck's law, explain why quantization removes the catastrophe: the mean mode energy $h\nu/(e^{h\nu/k_BT}-1)$ falls far below $k_BT$ once $h\nu\gg k_BT$, so high-frequency modes "freeze out".
- [Simplify] Add one or two lines sketching where $8\pi\nu^2/c^3$ comes from (number of standing-wave modes per volume per frequency, times two polarizations); the note currently asserts it.
- [Graph] Add a second plot comparing $u(\nu)$ and $u(\lambda)$ for $T=5800$ K on a common wavelength axis (300–3000 nm), marking peaks at 880 nm and 500 nm, to make the "different peaks" paragraph visual.
- [Manim] Animate the Planck curve as $T$ rises from 3000 K to 6000 K with a moving marker at $x\simeq2.82$, showing the peak shift and the $T^4$ growth of the area.

### N2004

Note: [[01.02 Photoelectric Effect|01.02 Photoelectric Effect]]  
Priority: medium · Graph: yes · Manim: no

Correct physics, but the last section repeats the opening list and the source links point to the wrong sections.

- [Correctness] Both source links target the heading `#Blackbody radiation`, which is the wrong section for this note; point them to `Quantization, light, and early atomic models#Photoelectric apparatus` (or `#Quantization of charge, light, and energy`) and `Matter waves, diffraction, and early quantum problems#The photoelectric effect`.
- [Structure] Merge "Distinguish a threshold from a change in intensity" into the main text. Define the stopping potential once ($eV_0=K_{\max}$), because that section uses it without defining it.
- [Graph] Plot $K_{\max}=h\nu-W$ versus $\nu$ ($0$–$2\times10^{15}$ Hz) for two metals (for example $W=2.3$ eV and $4.5$ eV): parallel lines with slope $h$ and frequency-axis intercepts at $\nu_0=W/h$.
- [Example] Add a short worked example, such as 200 nm light on $W=4.5$ eV giving $K_{\max}\simeq1.7$ eV (matches Exercise 2).
- [Intuition] Quantify the "classical delay" with an order-of-magnitude estimate (an atom-sized absorber in weak light would need seconds to minutes to collect $W$), so the result is not just asserted.

### N2005

Note: [[01.03 Compton Effect|01.03 Compton Effect]]  
Priority: medium · Graph: yes · Manim: yes

Correct result and setup, but the derivation jumps from the four-momenta straight to the answer.

- [Simplify] Show the three or four missing algebra steps: $p_e^2=p^2+p'^2-2pp'\cos\theta$ from momentum, then $(pc-p'c+m_ec^2)^2=p_e^2c^2+m_e^2c^4$ from energy, then cancel terms to get $1/p'-1/p=(1-\cos\theta)/(m_ec)$.
- [Graph] Plot $\Delta\lambda/\lambda_C=1-\cos\theta$ for $\theta\in[0,\pi]$ and mark $\lambda_C$ at $90^\circ$ and $2\lambda_C$ at $180^\circ$.
- [Example] Add a numeric comparison: for 0.0711 nm X-rays the backscatter shift is about 7 %, while for 500 nm visible light $\Delta\lambda/\lambda\sim10^{-5}$. This shows why the effect needed X-rays.
- [Manim] Animate an incoming photon (wave train) hitting a resting electron, then the scattered photon with visibly longer wavelength and the recoiling electron, with $\theta$ swept so the reader sees $\Delta\lambda$ grow.

### N2006

Note: [[01.04 Atomic Spectra and Bohr's Atomic Model|01.04 Atomic Spectra and Bohr's Atomic Model]]  
Priority: medium · Graph: yes · Manim: no

Correct and compact, but the radius and energy derivations are stated rather than shown.

- [Example] Show the intermediate steps: $v=n\hbar/(m_er)$ substituted into $m_ev^2/r=e^2/(4\pi\varepsilon_0r^2)$ gives $r_n$, and $E=K+U=-e^2/(8\pi\varepsilon_0r)$ gives $E_n$.
- [Intuition] Note that the fixed-nucleus energy gives $R_\infty=|E_1|/(hc)\simeq1.0974\times10^7\,\mathrm{m^{-1}}$. The quoted $R_H\simeq1.0968\times10^7\,\mathrm{m^{-1}}$ follows when $m_e$ is replaced by the reduced mass. This explains the small difference.
- [Graph] Add an energy-level diagram with horizontal lines at $-13.6/n^2$ eV for $n=1$–$6$ (and the continuum at 0), plus downward arrows for the Lyman, Balmer, and Paschen series.
- [Example] Close with a numeric check of Eq. (1.3) for Hα ($3\to2$, 656 nm) to connect the formula to an observed visible line.

### N2007

Note: [[01.05 Wave–Particle Duality and the de Broglie Hypothesis|01.05 Wave–Particle Duality and the de Broglie Hypothesis]]  
Priority: low · Graph: yes · Manim: yes

Clear and correct; the 100 V electron (0.123 nm) and 1 g object (6.6e-31 m) numbers check out.

- [Manim] Animate a matter wave wrapped around a circular orbit for $2\pi r=n\lambda$ with $n=3,4,5$ (closes on itself) versus a non-integer ratio (destructive mismatch), to illustrate the resonance reading of Bohr's rule.
- [Graph] Plot de Broglie wavelength versus kinetic energy (log–log, 1 eV–100 keV) for an electron and a neutron, with a shaded band at typical lattice spacings 0.1–0.4 nm.
- [Intuition] State when the nonrelativistic formula $h/\sqrt{2m_eeV}$ fails (accelerating voltages of tens of kV and above, where $eV$ approaches $m_ec^2$).
- [Links] Link the Davisson–Germer sentence to `Matter waves, diffraction, and early quantum problems#Davisson–Germer experiment`, which has the geometry.

### N2008

Note: [[01.06 Double-Slit Experiment|01.06 Double-Slit Experiment]]  
Priority: medium · Graph: yes · Manim: yes

Correct conceptually but purely qualitative, with no fringe formula or interference term.

- [Simplify] Write out $|\psi_1+\psi_2|^2=|\psi_1|^2+|\psi_2|^2+2\,\mathrm{Re}(\psi_1^*\psi_2)$ and identify the last term as the one that which-path information removes.
- [Example] Add the fringe spacing $\Delta y\simeq\lambda L/d$ with a numeric case, for example 50 eV electrons ($\lambda\simeq0.17$ nm). This shows why electron fringes are so fine.
- [Graph] Plot the detection density $I(y)\propto\cos^2(\pi dy/(\lambda L))\,\mathrm{sinc}^2(\pi ay/(\lambda L))$ against the incoherent sum (single-slit envelope only) for representative $d/a=5$.
- [Manim] Animate single detection dots appearing one at a time and building the fringe pattern; then switch on a which-path detector and show the build-up converging to the fringe-free sum.

### N2009

Note: [[01.07 Stern–Gerlach Experiment|01.07 Stern–Gerlach Experiment]]  
Priority: medium · Graph: no · Manim: yes

Correct but thin; it never explains why the field must be inhomogeneous or why silver's moment is pure spin.

- [Intuition] Add the force $F_z=\mu_z\,\partial B_z/\partial z$. This shows why a uniform field only torques the moment while a gradient sorts atoms by $\mu_z$.
- [Intuition] State that silver's 47th electron is in a 5s state with $l=0$, so the orbital moment vanishes and the two spots measure the electron spin moment $\mu_z\simeq\mp\mu_B$.
- [Manim] Animate a beam of randomly oriented classical moments smearing into a continuous band, then the observed beam splitting into two discrete spots.
- [Links] Link forward to [[10.05 Stern–Gerlach Revisited]] and [[02.04 Wave Function Collapse]], where sequential Stern–Gerlach filters are treated.

### N2010

Note: [[01.08 Order-of-Magnitude Estimates with ℏ|01.08 Order-of-Magnitude Estimates with ℏ]]  
Priority: medium · Graph: yes · Manim: no

Correct idea, but the key minimization step is left out.

- [Example] Carry out the minimization: $dE/dr=0$ gives $r=4\pi\varepsilon_0\hbar^2/(m_ee^2)=a_0$ and $E=-e^2/(8\pi\varepsilon_0a_0)=-13.6$ eV. Note that the exact agreement depends on the chosen $\Delta p\sim\hbar/r$; for example, $\hbar/(2r)$ changes the numbers by factors of order one.
- [Graph] Plot $E(\rho)=13.6\,(1/\rho^2-2/\rho)$ eV against $\rho=r/a_0\in[0.3,5]$, with the kinetic and Coulomb terms as dashed curves and the minimum at $(1,-13.6)$ marked.
- [Intuition] Support the $10^{-11}$ s classical collapse time with the Larmor-formula result ($t\simeq a_0^3/(4r_e^2c)\approx1.6\times10^{-11}$ s) or link it to Exercise 7.

### N2011

Note: [[01.09 The Crisis of Classical Physics Exercises|01.09 The Crisis of Classical Physics Exercises]]  
Priority: low · Graph: no · Manim: no

All stated results recompute correctly (photon energies, threshold, de Broglie wavelengths, Hα, Compton 45.5/4.5 keV, divergence, slit width).

- [Structure] Exercise 10 contains a stray period ("$V=67$ V. and $\theta_1=3^\circ$"). Exercises 5, 7, 9, and 11 lack a final-result line, for example Exercise 7: $t\approx1.6\times10^{-11}$ s.

### N2012

Note: [[Matter waves, diffraction, and early quantum problems|Matter waves, diffraction, and early quantum problems]]  
Priority: high · Graph: yes · Manim: yes

Faithful transcription with correct worked numbers, but cluttered with handwriting commentary and has a wrong quantity table, symbol clashes, and an incorrect neutron speed.

- [Correctness] The Physical quantities table lists a decay constant $\lambda$ (clashing with wavelength $\lambda$), activity $R$, and mean lifetime $\tau$, none of which the note uses. It also describes $\rho$ as "nuclear mass per unit volume", although the note uses gold's bulk density 19.3 g/cm³. Remove or correct these rows and add the symbols actually used ($K$, $D$, $d$, $n$, $f$, $t$).
- [Correctness] "Interference of neutrons": the Zeilinger–Gähler double-slit experiment used very cold neutrons with $\lambda\approx1.85$ nm, that is $v\approx200$ m/s, not about 2 km/s (2.2 km/s is the thermal-neutron speed).
- [Correctness] Symbol clashes: $t$ is a time ($10^4$ s) and a foil thickness ($10^{-6}$ m); $T$ is temperature and wave period; $P$ is power and probability density; $\phi$ is a phase shift, the time factor $\phi(t)$, the Davisson–Germer angle, and the Compton recoil angle. The scattered wavelength is called both $\lambda'$ and $\lambda_{\mathrm f}$.
- [Example] Finish the open interval probability: $\int_{0.50}^{0.95}3(1-x)^2\,dx=(0.5)^3-(0.05)^3\simeq0.125$ (with $L=1$ nm), and contrast it with the 0.027 strip near $x=0$.
- [Manim] Animate the two-wave sum $2A\cos(\tfrac{\Delta k}{2}x-\tfrac{\Delta\omega}{2}t)\cos(k_{\mathrm{avg}}x-\omega_{\mathrm{avg}}t)$ with a carrier crest marker moving at $v_{\mathrm{ph}}$ and an envelope marker at $v_{\mathrm{gr}}$.
- [Structure] Remove the transcription commentary (handwritten dates, crib sheet, midterm list, "handwritten unit appears..."). Rename "Blackbody radiation problems" (it is a radiation-momentum problem). State the temperatures for Tipler 3.12 parts (b) and (c).

### N2013

Note: [[Quantization, light, and early atomic models|Quantization, light, and early atomic models]]  
Priority: high · Graph: yes · Manim: no

Broad lecture transcription with mostly correct derivations, but it has a wrong constant, a wrong integrand, an incomplete example, symbol clashes, and much off-topic marginalia.

- [Correctness] The Physical quantities table lists a decay constant $\lambda$, activity $R$, and "nuclear mass per unit volume" $\rho$, which are not used as described. $\sigma$ denotes both the Stefan–Boltzmann constant and the cross section $\pi b^2$. $R$ denotes both radiant exitance and the Rydberg constant in $1/\lambda=R(1/m^2-1/n^2)$. Rename the clashing symbols and fix the table.
- [Correctness] "Quantization of charge, light, and energy" quotes $c=2.9989\times10^8$ m/s; the correct value is $2.9979\times10^8$ m/s.
- [Correctness] Stefan–Boltzmann: $R=\int_0^\infty I(\lambda,T)\,d\lambda$ uses the symbol that the next equation defines as the Rayleigh–Jeans exitance $2\pi ck_BT/\lambda^4$, whose integral diverges. The integrand must be the Planck exitance $2\pi hc^2\lambda^{-5}/(e^{hc/\lambda k_BT}-1)=(c/4)u(\lambda)$. Also note that $\varepsilon=1$ for a blackbody.
- [Correctness] "Rutherford scattering example 2" never states the angle. The boxed $N/N_i=3.2\times10^{-7}\,\mathrm{mm^{-2}}$ corresponds to $\theta=45^\circ$. With the $90^\circ$ of example 1, the inputs give $2.7\times10^{-8}\,\mathrm{mm^{-2}}$. State $\theta=45^\circ$.
- [Structure] Remove the off-topic marginalia (Predator, Spinal Tap, Ohm's law slope, lab report filename, Igor/MATLAB policy, "date reads 2018") and place the Rutherford substitution directly after example 1 instead of after the Balmer section.
- [Graph] Plot the Rutherford cumulative fraction $f(\theta)=f(90^\circ)\cot^2(\theta/2)$ and $N(\theta)\propto1/\sin^4(\theta/2)$ on a log scale for $\theta=10^\circ$–$180^\circ$ (7.7 MeV alphas on 1 µm gold), showing the strong forward peaking.
