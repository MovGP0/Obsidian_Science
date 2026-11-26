---
title: "Note Improvement Tracker – 02 Physics/04 Quantum Field Theory and Particle Physics/01 Quantum Field Theory/02 Classical Field Theory"
---

> [!TLDR]
> This note tracks the review of the 41 notes in `02 Physics/04 Quantum Field Theory and Particle Physics/01 Quantum Field Theory/02 Classical Field Theory`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 7 possible errors or notation conflicts. 7 of them are verified (6 fixed, 1 partly); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N2307|N2307]] 02.01.02 Oscillator Chain and Continuum Limit: Symbol clash: $\mu$ denotes the linear mass density $m/a$ but is also the Lorentz index in $\mathcal L(\phi,\partial_\mu\phi)$ in (2.5); rename the density (for example $\rho$ or $\varrho$) or write $\mathcal L(\phi,\partial_t\phi,\partial_x\phi)$. **Fixed:** Renamed linear mass density to rho in text, (2.5), wave equation, speed and table
- [[#N2321|N2321]] 02.05.04 Rotations and Angular Momentum: "a vector has $\Delta\signal{A}^{\mu}=-\omega^{\mu}{}_{\nu}\signal{A}^{\nu}$" is inconsistent with $\mechanical{x}^\mu\to\mechanical{x}^\mu+\omega^\mu{}_\nu\mechanical{x}^\nu$ (and with 02.08.04, whose vector generator gives $+\omega^\mu{}_\nu$); write $\Delta\signal{A}^\mu=+\omega^\mu{}_\nu\signal{A}^\nu$ and delete the correcting callout. **Fixed:** Changed to +omega^mu_nu A^nu, removed correcting callout; also updated the sentence on (2.38) to match the corrected sign in 02.06.02
- [[#N2324|N2324]] 02.06.02 The Belinfante–Rosenfeld Tensor: Eq. (2.38) with the spin tensor of (2.37) doubles rather than cancels the antisymmetric part of $\energy{T}^{\mu\nu}$ (the improvement's antisymmetric part is $+\tfrac12\partial_\rho\mechanical{S}^{\rho\mu\nu}=+\tfrac12(\energy{T}^{\mu\nu}-\energy{T}^{\nu\mu})$); replace (2.38) inline by $\energy{\Theta}^{\mu\nu}=\energy{T}^{\mu\nu}-\tfrac12\partial_\rho(\mechanical{S}^{\rho\mu\nu}-\mechanical{S}^{\mu\rho\nu}-\mechanical{S}^{\nu\rho\mu})$ and drop the callout. **Fixed:** Verified antisymmetric part of the improvement equals +(T^mn - T^nm); (2.38) now has a minus sign (and -d_rho B), callout removed
- [[#N2324|N2324]] 02.06.02 The Belinfante–Rosenfeld Tensor: Eq. (2.40) with the leading minus sign gives $-\energy{T}_{\mu\nu}$ for the scalar (since $\tfrac{2}{\sqrt{-g}}\partial(\sqrt{-g}\energy{\mathcal L})/\partial g^{\mu\nu}=\partial_\mu\signal{\phi}\partial_\nu\signal{\phi}-g_{\mu\nu}\energy{\mathcal L}$); print the plus-sign form inline and remove the correction callout. **Fixed:** Verified 2/sqrt(-g) d(sqrt(-g)L)/dg^mn = d_m phi d_n phi - g L; removed the minus sign and the correction callout
- [[#N2327|N2327]] 02.07.02 The Complex Scalar Field: "The source writes $O(2)\cong U(1)$" is kept in the text with a correcting callout; state directly that the phase rotation is $SO(2)\cong U(1)$ (the full $O(2)$ also contains the reflection $\signal{\phi}\to\signal{\phi}^*$) and remove the callout. **Fixed:** Text now states the phase group is SO(2)=U(1) and O(2) adds the reflection phi to phi*; callout removed
- [[#N2328|N2328]] 02.07.03 The Electromagnetic Field: Eq. (2.60) pairs the phase $e^{i\electric{e}\alpha}$ with the shift $\partial_\mu\alpha/\electric{e}$; with $D_\mu=\partial_\mu-i\electric{e}\electric{A}_\mu$ the consistent pair is $\signal{\phi}\to e^{i\electric{e}\alpha}\signal{\phi}$, $\electric{A}_\mu\to\electric{A}_\mu+\partial_\mu\alpha$ (or $e^{i\alpha}$ with $\partial_\mu\alpha/\electric{e}$); print the corrected form and delete the callout. **Fixed:** With D=d-ieA the shift must be +d_mu alpha; removed 1/e, reworded the intro, removed the callout
- [[#N2328|N2328]] 02.07.03 The Electromagnetic Field: Fig. 2.3 draws $\varepsilon^{(1)}$ and $\varepsilon^{(2)}$ as opposite arrows on one line, i.e. the same polarization up to sign; redraw with $\varepsilon^{(1)}$ vertical in the plane and $\varepsilon^{(2)}$ as an out-of-plane dot (or a 3D view), so the figure matches its caption. **Partly:** Error confirmed (existing callout already flags it); not redrawn because the brief forbids redrawing figures; needs a redraw with eps2 out of plane

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2304 | [[02.00 Classical Field Theory\|02.00 Classical Field Theory]] | Analyzed | medium | no | no | [[#N2304\|View]] |
| N2305 | [[02.01 From Discrete Systems to the Continuum\|02.01 From Discrete Systems to the Continuum]] | Analyzed | low | no | no | [[#N2305\|View]] |
| N2306 | [[02.01.01 Review of Lagrangian Mechanics\|02.01.01 Review of Lagrangian Mechanics]] | Analyzed | low | no | no | [[#N2306\|View]] |
| N2307 | [[02.01.02 Oscillator Chain and Continuum Limit\|02.01.02 Oscillator Chain and Continuum Limit]] | Analyzed | medium | yes | yes | [[#N2307\|View]] |
| N2308 | [[02.02 Lagrangian Density and Action Functional\|02.02 Lagrangian Density and Action Functional]] | Analyzed | low | no | no | [[#N2308\|View]] |
| N2309 | [[02.02.01 Basic Definitions\|02.02.01 Basic Definitions]] | Analyzed | low | no | no | [[#N2309\|View]] |
| N2310 | [[02.02.02 Lorentz Covariance\|02.02.02 Lorentz Covariance]] | Analyzed | low | yes | no | [[#N2310\|View]] |
| N2311 | [[02.03 Euler–Lagrange Equations for Fields\|02.03 Euler–Lagrange Equations for Fields]] | Analyzed | low | no | no | [[#N2311\|View]] |
| N2312 | [[02.03.01 Systematic Derivation\|02.03.01 Systematic Derivation]] | Analyzed | low | no | no | [[#N2312\|View]] |
| N2313 | [[02.03.02 Equations of Motion for the Maxwell Field\|02.03.02 Equations of Motion for the Maxwell Field]] | Analyzed | low | no | no | [[#N2313\|View]] |
| N2314 | [[02.04 Hamiltonian Formalism for Fields\|02.04 Hamiltonian Formalism for Fields]] | Analyzed | low | no | no | [[#N2314\|View]] |
| N2315 | [[02.04.01 Conjugate Momentum Density and the Hamiltonian\|02.04.01 Conjugate Momentum Density and the Hamiltonian]] | Analyzed | low | no | no | [[#N2315\|View]] |
| N2316 | [[02.04.02 Poisson Brackets and Symplectic Structure\|02.04.02 Poisson Brackets and Symplectic Structure]] | Analyzed | low | no | no | [[#N2316\|View]] |
| N2317 | [[02.05 Noether's Theorem\|02.05 Noether's Theorem]] | Analyzed | low | no | no | [[#N2317\|View]] |
| N2318 | [[02.05.01 Continuous Symmetries and Conservation Laws\|02.05.01 Continuous Symmetries and Conservation Laws]] | Analyzed | medium | no | no | [[#N2318\|View]] |
| N2319 | [[02.05.02 U(1) Symmetry and Charge Conservation\|02.05.02 U(1) Symmetry and Charge Conservation]] | Analyzed | low | no | no | [[#N2319\|View]] |
| N2320 | [[02.05.03 Translations and the Energy–Momentum Tensor\|02.05.03 Translations and the Energy–Momentum Tensor]] | Analyzed | low | no | no | [[#N2320\|View]] |
| N2321 | [[02.05.04 Rotations and Angular Momentum\|02.05.04 Rotations and Angular Momentum]] | Analyzed | high | no | no | [[#N2321\|View]] |
| N2322 | [[02.06 Energy–Momentum Tensor\|02.06 Energy–Momentum Tensor]] | Analyzed | low | no | no | [[#N2322\|View]] |
| N2323 | [[02.06.01 Limits of the Canonical Tensor\|02.06.01 Limits of the Canonical Tensor]] | Analyzed | low | no | no | [[#N2323\|View]] |
| N2324 | [[02.06.02 The Belinfante–Rosenfeld Tensor\|02.06.02 The Belinfante–Rosenfeld Tensor]] | Analyzed | high | no | no | [[#N2324\|View]] |
| N2325 | [[02.07 Examples of Classical Field Theories\|02.07 Examples of Classical Field Theories]] | Analyzed | low | no | no | [[#N2325\|View]] |
| N2326 | [[02.07.01 The Real Scalar Klein–Gordon Field\|02.07.01 The Real Scalar Klein–Gordon Field]] | Analyzed | medium | no | no | [[#N2326\|View]] |
| N2327 | [[02.07.02 The Complex Scalar Field\|02.07.02 The Complex Scalar Field]] | Analyzed | medium | yes | yes | [[#N2327\|View]] |
| N2328 | [[02.07.03 The Electromagnetic Field\|02.07.03 The Electromagnetic Field]] | Analyzed | medium | no | yes | [[#N2328\|View]] |
| N2329 | [[02.08 The Lorentz Group and Its Representations\|02.08 The Lorentz Group and Its Representations]] | Analyzed | low | no | no | [[#N2329\|View]] |
| N2330 | [[02.08.01 Algebraic Structure of the Lorentz Group\|02.08.01 Algebraic Structure of the Lorentz Group]] | Analyzed | low | no | no | [[#N2330\|View]] |
| N2331 | [[02.08.02 Decomposition and Representations\|02.08.02 Decomposition and Representations]] | Analyzed | low | no | no | [[#N2331\|View]] |
| N2332 | [[02.08.03 Fundamental Representations\|02.08.03 Fundamental Representations]] | Analyzed | low | no | no | [[#N2332\|View]] |
| N2333 | [[02.08.04 Transformation of Fields\|02.08.04 Transformation of Fields]] | Analyzed | low | no | no | [[#N2333\|View]] |
| N2334 | [[02.09 Discrete CPT Symmetry\|02.09 Discrete CPT Symmetry]] | Analyzed | low | no | no | [[#N2334\|View]] |
| N2335 | [[02 Physics/04 Quantum Field Theory and Particle Physics/01 Quantum Field Theory/02 Classical Field Theory/02.10 Summary\|02.10 Summary]] | Analyzed | low | no | no | [[#N2335\|View]] |
| N2336 | [[02.11 Exercises\|02.11 Exercises/02.11 Exercises]] | Analyzed | low | no | no | [[#N2336\|View]] |
| N2337 | [[02.11.01 Proca field equations\|02.11 Exercises/02.11.01 Proca field equations]] | Analyzed | low | no | no | [[#N2337\|View]] |
| N2338 | [[02.11.02 O(N) Noether currents\|02.11 Exercises/02.11.02 O(N) Noether currents]] | Analyzed | low | no | no | [[#N2338\|View]] |
| N2339 | [[02.11.03 Maxwell equations and energy–momentum tensor\|02.11 Exercises/02.11.03 Maxwell equations and energy–momentum tensor]] | Analyzed | low | no | no | [[#N2339\|View]] |
| N2340 | [[02.11.04 Derrick scaling argument\|02.11 Exercises/02.11.04 Derrick scaling argument]] | Analyzed | low | yes | no | [[#N2340\|View]] |
| N2341 | [[02.11.05 Chern–Simons gauge variation\|02.11 Exercises/02.11.05 Chern–Simons gauge variation]] | Analyzed | low | no | no | [[#N2341\|View]] |
| N2342 | [[02.11.06 Electromagnetic duality and Bianchi identity\|02.11 Exercises/02.11.06 Electromagnetic duality and Bianchi identity]] | Analyzed | low | no | yes | [[#N2342\|View]] |
| N2343 | [[02.11.07 Lorentz algebra\|02.11 Exercises/02.11.07 Lorentz algebra]] | Analyzed | low | no | no | [[#N2343\|View]] |
| N2344 | [[02.11.08 Two-dimensional Thirring model\|02.11 Exercises/02.11.08 Two-dimensional Thirring model]] | Analyzed | low | no | no | [[#N2344\|View]] |

## Suggestions

### N2304

Note: [[02.00 Classical Field Theory|02.00 Classical Field Theory]]  
Priority: medium · Graph: no · Manim: no

The chapter hub explains its goals clearly but contains no links to its sections or exercises, and its last paragraph repeats the first.

- [Links] Add a list of wiki links to the section hubs \[\[02.01 From Discrete Systems to the Continuum\]\] through \[\[02.10 Summary\]\] and \[\[02.11 Exercises\]\]; currently the reader cannot navigate from this hub.
- [Simplify] Merge the final paragraph ("Quantum field theory has its roots...") into the opening paragraph; it repeats the chapter scope.

### N2305

Note: [[02.01 From Discrete Systems to the Continuum|02.01 From Discrete Systems to the Continuum]]  
Priority: low · Graph: no · Manim: no

A short, clear section hub with correct links and a useful remark about which constants are held fixed.

- [Structure] No change needed; the duplicated links (inline and as a list) could be reduced to the list.

### N2306

Note: [[02.01.01 Review of Lagrangian Mechanics|02.01.01 Review of Lagrangian Mechanics]]  
Priority: low · Graph: no · Manim: no

Correct and concise review; it lacks a single concrete example to anchor the formalism.

- [Example] Add the harmonic oscillator: $L=\tfrac12m\dot q^2-\tfrac12kq^2$ gives $m\ddot q=-kq$, $p=m\dot q$, $H=p^2/2m+\tfrac12kq^2$; this is exactly the building block of the oscillator chain in the next note.
- [Simplify] Display the integration-by-parts step $\delta S=\int dt\,[\partial L/\partial q-\tfrac{d}{dt}\partial L/\partial\dot q]\delta q+[\partial L/\partial\dot q\,\delta q]_{t_1}^{t_2}$ instead of describing it in words.

### N2307

Note: [[02.01.02 Oscillator Chain and Continuum Limit|02.01.02 Oscillator Chain and Continuum Limit]]  
Priority: medium · Graph: yes · Manim: yes

The continuum limit and wave speed are correct, but the note has a symbol clash between the mass density and the Lorentz index and leaves the chain's boundary term undefined.

- [Correctness] Symbol clash: $\mu$ denotes the linear mass density $m/a$ but is also the Lorentz index in $\mathcal L(\phi,\partial_\mu\phi)$ in (2.5); rename the density (for example $\rho$ or $\varrho$) or write $\mathcal L(\phi,\partial_t\phi,\partial_x\phi)$.
- [Simplify] In (2.4) the sum to $j=N$ contains $q_{N+1}$, which is undefined; state periodic boundary conditions $q_{N+1}=q_1$ (or fixed ends $q_0=q_{N+1}=0$) at the start rather than only in the later remark.
- [Structure] Display the intermediate step $\sum_j a\,[\tfrac{m}{2a}\dot q_j^2-\tfrac{ka}{2}((q_{j+1}-q_j)/a)^2]$ so the reader sees why $\mu=m/a$ and $Y=ka$ are the quantities held fixed.
- [Graph] Plot the discrete dispersion $\omega(\kappa)=2\sqrt{k/m}\,|\sin(\kappa a/2)|$ against the continuum line $\omega=v|\kappa|$, $v=a\sqrt{k/m}$, for $\kappa a\in[-\pi,\pi]$, to show where the continuum approximation holds (long wavelengths) and where lattice dispersion appears.
- [Manim] Animate a travelling wave on a chain of beads with spacing $a$, then halve $a$ repeatedly at fixed $\mu$ and $Y$ so the beads merge into a continuous string carrying the same wave at the same speed.

### N2308

Note: [[02.02 Lagrangian Density and Action Functional|02.02 Lagrangian Density and Action Functional]]  
Priority: low · Graph: no · Manim: no

A short, clear section hub with correct links.

- [Structure] No change needed.

### N2309

Note: [[02.02.01 Basic Definitions|02.02.01 Basic Definitions]]  
Priority: low · Graph: no · Manim: no

Correct and compact definition; it would benefit from one explicit example of a density and of a total-divergence ambiguity.

- [Example] After Definition 2.1, give the real scalar density $\mathcal L=\tfrac12\partial_\mu\phi\,\partial^\mu\phi-\tfrac12m^2\phi^2$ with $[\phi]=1$ as the reference example, and link \[\[02.07.01 The Real Scalar Klein–Gordon Field\]\].
- [Example] Illustrate the total-divergence freedom with $\mathcal L'=\mathcal L+\partial_\mu(\phi\,\partial^\mu\phi)$, which contains second derivatives yet gives the same Klein–Gordon equation for fixed boundary data.

### N2310

Note: [[02.02.02 Lorentz Covariance|02.02.02 Lorentz Covariance]]  
Priority: low · Graph: yes · Manim: no

Correct and well checked (dimensions, sign of the gradient energy, role of the $\mathbb Z_2$ symmetry), short and clear.

- [Graph] Plot the potential $V(\phi)=\tfrac12m^2\phi^2+\tfrac{\lambda}{24}\phi^4$ for $m=1$ with $\lambda=1$ and $\lambda=-1$ over $\phi\in[-6,6]$, showing that only the positive quartic coefficient keeps $V$ bounded below.
- [Example] Show one non-example: a term such as $\partial_\mu\phi$ or $v^\mu\partial_\mu\phi$ with a fixed vector $v^\mu$ is not a Lorentz scalar, which makes "all indices contracted" concrete.

### N2311

Note: [[02.03 Euler–Lagrange Equations for Fields|02.03 Euler–Lagrange Equations for Fields]]  
Priority: low · Graph: no · Manim: no

A clear section hub; both linked subnotes exist.

- [Structure] No change needed.

### N2312

Note: [[02.03.01 Systematic Derivation|02.03.01 Systematic Derivation]]  
Priority: low · Graph: no · Manim: no

Clean, correct derivation of the field Euler–Lagrange equations (2.7)–(2.10) with two short examples.

- [Intuition] Add one sentence explaining the fundamental lemma behind "the coefficient must vanish at each point" (choose $\delta\signal{\phi}^a$ as a narrow bump around any point), since this is the step beginners find least obvious.
- [Example] In Example 2.3, show the one-line computation $\partial\energy{\mathcal L}/\partial(\partial_\mu\signal{\phi}^*)=\partial^\mu\signal{\phi}$, $\partial\energy{\mathcal L}/\partial\signal{\phi}^*=-\mechanical{m}^2\signal{\phi}$, as was done for Example 2.2.

### N2313

Note: [[02.03.02 Equations of Motion for the Maxwell Field|02.03.02 Equations of Motion for the Maxwell Field]]  
Priority: low · Graph: no · Manim: no

Correct and short; the factor-counting argument for (2.13) is given only in words.

- [Simplify] Show (2.13) as equations: $\delta(\electric{F}_{\mu\nu}\electric{F}^{\mu\nu})=2\electric{F}^{\mu\nu}\delta\electric{F}_{\mu\nu}=4\electric{F}^{\mu\nu}\partial_\mu\delta\electric{A}_\nu$, so $\partial\energy{\mathcal L}/\partial(\partial_\rho\electric{A}_\sigma)=-\electric{F}^{\rho\sigma}$.
- [Example] Translate (2.14) into vector form ($\nabla\cdot\electric{\mathbf E}=0$ for $\sigma=0$, $\nabla\times\magnetic{\mathbf B}-\partial_t\electric{\mathbf E}=0$ for $\sigma=i$) and the Bianchi identity into $\nabla\cdot\magnetic{\mathbf B}=0$, $\nabla\times\electric{\mathbf E}+\partial_t\magnetic{\mathbf B}=0$.

### N2314

Note: [[02.04 Hamiltonian Formalism for Fields|02.04 Hamiltonian Formalism for Fields]]  
Priority: low · Graph: no · Manim: no

Clear hub with a correct warning about constraints for gauge fields.

- [Structure] No change needed.

### N2315

Note: [[02.04.01 Conjugate Momentum Density and the Hamiltonian|02.04.01 Conjugate Momentum Density and the Hamiltonian]]  
Priority: low · Graph: no · Manim: no

Correct Legendre transformation and scalar example (2.17), with a good constraint remark.

- [Example] Make the Maxwell constraint explicit: $\mechanical{\pi}^0=\partial\energy{\mathcal L}/\partial\dot{\electric{A}}_0=0$ and $\mechanical{\pi}^i=-\electric{F}^{0i}=\electric{E}^i$, so the reader sees which momentum vanishes.
- [Simplify] In the table, $\mechanical{\pi}^a$ has unit "—" while Example 2.4 gives $\unit{MeV^2}$; state "$\unit{MeV^2}$ for a canonically normalized scalar" in the general row to avoid two different entries for one symbol.

### N2316

Note: [[02.04.02 Poisson Brackets and Symplectic Structure|02.04.02 Poisson Brackets and Symplectic Structure]]  
Priority: low · Graph: no · Manim: no

Correct definitions (2.18)–(2.20) and quantization rule; it lacks a worked use of the bracket.

- [Example] Compute Hamilton's equations from the bracket for (2.17): $\dot{\signal{\phi}}=\{\signal{\phi},\energy{H}\}=\mechanical{\pi}$ and $\dot{\mechanical{\pi}}=\{\mechanical{\pi},\energy{H}\}=\nabla^2\signal{\phi}-\mechanical{m}^2\signal{\phi}$, recovering Klein–Gordon; this also illustrates the integration by parts mentioned in the text.
- [Simplify] Write the quantization rule in the more familiar direction $[\cdot,\cdot]=i\{\cdot,\cdot\}$, giving $[\signal{\hat\phi}(\mathbf x),\hat{\mechanical{\pi}}(\mathbf y)]=i\delta^{(3)}(\mathbf x-\mathbf y)$ explicitly.

### N2317

Note: [[02.05 Noether's Theorem|02.05 Noether's Theorem]]  
Priority: low · Graph: no · Manim: no

Clear hub that correctly separates global symmetry from gauge freedom.

- [Structure] No change needed.

### N2318

Note: [[02.05.01 Continuous Symmetries and Conservation Laws|02.05.01 Continuous Symmetries and Conservation Laws]]  
Priority: medium · Graph: no · Manim: no

The derivation (2.21)–(2.27) is correct, but the step from (2.24) to (2.26) is compressed into one sentence.

- [Simplify] Show the intermediate step: insert (2.23), integrate by parts, use the field equations, and collect $\partial_\mu[\Pi^\mu_a(\Delta\signal{\phi}^a-\delta x^\nu\partial_\nu\signal{\phi}^a)+\energy{\mathcal L}\delta x^\mu]$ with $\Pi^\mu_a=\partial\energy{\mathcal L}/\partial(\partial_\mu\signal{\phi}^a)$; this makes (2.26) verifiable.
- [Example] Add a one-line toy case (time translation of a single oscillator, giving energy) before the field case, so the structure "symmetry → current → charge" is first seen in mechanics.
- [Simplify] Replace the callout about the source calling the total variation "on-shell" with a single clear definition sentence; the meta-remark distracts.

### N2319

Note: [[02.05.02 U(1) Symmetry and Charge Conservation|02.05.02 U(1) Symmetry and Charge Conservation]]  
Priority: low · Graph: no · Manim: no

Correct current (2.31), charge (2.32), and explicit conservation check; well explained.

- [Example] Evaluate (2.32) on $\signal{\phi}=Ae^{-i\omega t}$ and on its conjugate to give $\electric{Q}=\pm2\omega|A|^2V$, making the "opposite charge-density signs" statement concrete.
- [Intuition] Add a short remark that a real field ($\signal{\phi}=\signal{\phi}^*$) gives $\electric{J}^\mu=0$, i.e. neutral particles are their own antiparticles.

### N2320

Note: [[02.05.03 Translations and the Energy–Momentum Tensor|02.05.03 Translations and the Energy–Momentum Tensor]]  
Priority: low · Graph: no · Manim: no

Correct canonical tensor and momentum-density sign check; the relation to the general current (2.26) skips the overall sign.

- [Simplify] Note that inserting $\Delta\signal{\phi}=0$, $\delta x^\mu=\delta^\mu_\nu$ into (2.26) gives $J^\mu=-\energy{T}^\mu{}_\nu$; the overall sign is conventional, but saying so avoids confusion when the reader checks (2.34).
- [Example] Turn the verbal sign check into a formula: for $\signal{\phi}=\cos(kx-\omega t)$, $\energy{T}^{0x}=\dot{\signal{\phi}}\,\partial^x\signal{\phi}=\omega k\sin^2(kx-\omega t)>0$.

### N2321

Note: [[02.05.04 Rotations and Angular Momentum|02.05.04 Rotations and Angular Momentum]]  
Priority: high · Graph: no · Manim: no

The note states a vector transformation sign and then contradicts it in a callout, and cross-references a sign mismatch with (2.38) instead of resolving it, so it is hard to use.

- [Correctness] "a vector has $\Delta\signal{A}^{\mu}=-\omega^{\mu}{}_{\nu}\signal{A}^{\nu}$" is inconsistent with $\mechanical{x}^\mu\to\mechanical{x}^\mu+\omega^\mu{}_\nu\mechanical{x}^\nu$ (and with 02.08.04, whose vector generator gives $+\omega^\mu{}_\nu$); write $\Delta\signal{A}^\mu=+\omega^\mu{}_\nu\signal{A}^\nu$ and delete the correcting callout.
- [Structure] Fix one spin-current convention for (2.37) and (2.38) across this note and 02.06.02 instead of warning that they differ; state $\partial_\mu\mechanical{S}^{\mu\nu\rho}=\energy{T}^{\nu\rho}-\energy{T}^{\rho\nu}$ here, which follows from (2.37).
- [Simplify] Give the spin current explicitly in terms of the representation generators of 02.08.04, $\mechanical{S}^{\mu\nu\rho}\propto\partial\energy{\mathcal L}/\partial(\partial_\mu\signal{\phi}^a)\,(S^{\nu\rho})^a{}_b\signal{\phi}^b$ with the coefficient fixed by the chosen convention, so "a spin matrix $\Sigma$" is not left undefined and is not a second name for $S^{\mu\nu}$.
- [Structure] The title says "Rotations" but the content covers all six Lorentz generators including boosts; mention boosts in the title or TLDR.

### N2322

Note: [[02.06 Energy–Momentum Tensor|02.06 Energy–Momentum Tensor]]  
Priority: low · Graph: no · Manim: no

Clear hub explaining why the tensor is not unique.

- [Structure] No change needed.

### N2323

Note: [[02.06.01 Limits of the Canonical Tensor|02.06.01 Limits of the Canonical Tensor]]  
Priority: low · Graph: no · Manim: no

Correct and concise statement of the improvement freedom; abstract without an explicit example.

- [Example] Show the gauge dependence concretely: under $\electric{A}_\rho\to\electric{A}_\rho+\partial_\rho\alpha$ the canonical tensor (2.42) changes by $-\electric{F}^{\mu\rho}\partial^\nu\partial_\rho\alpha\ne0$.
- [Simplify] Add $B^{\rho\mu\nu}$ to the physical-quantities table (it is used but not listed).

### N2324

Note: [[02.06.02 The Belinfante–Rosenfeld Tensor|02.06.02 The Belinfante–Rosenfeld Tensor]]  
Priority: high · Graph: no · Manim: no

Examples 2.9–2.10 are correct, but two displayed equations are kept in a wrong or inconsistent form with long correction callouts, which makes the note confusing.

- [Correctness] Eq. (2.38) with the spin tensor of (2.37) doubles rather than cancels the antisymmetric part of $\energy{T}^{\mu\nu}$ (the improvement's antisymmetric part is $+\tfrac12\partial_\rho\mechanical{S}^{\rho\mu\nu}=+\tfrac12(\energy{T}^{\mu\nu}-\energy{T}^{\nu\mu})$); replace (2.38) inline by $\energy{\Theta}^{\mu\nu}=\energy{T}^{\mu\nu}-\tfrac12\partial_\rho(\mechanical{S}^{\rho\mu\nu}-\mechanical{S}^{\mu\rho\nu}-\mechanical{S}^{\nu\rho\mu})$ and drop the callout.
- [Correctness] Eq. (2.40) with the leading minus sign gives $-\energy{T}_{\mu\nu}$ for the scalar (since $\tfrac{2}{\sqrt{-g}}\partial(\sqrt{-g}\energy{\mathcal L})/\partial g^{\mu\nu}=\partial_\mu\signal{\phi}\partial_\nu\signal{\phi}-g_{\mu\nu}\energy{\mathcal L}$); print the plus-sign form inline and remove the correction callout.
- [Example] Show the scalar metric variation explicitly (using $\delta\sqrt{-g}=-\tfrac12\sqrt{-g}g_{\mu\nu}\delta g^{\mu\nu}$), which is the "direct sign check" the text only describes.
- [Example] In Example 2.10, show the two-line evaluation of $\energy{\Theta}^{00}$ with $\electric{F}^{0i}=-\electric{E}^i$ and $\electric{F}_{\rho\sigma}\electric{F}^{\rho\sigma}=2(\magnetic{\mathbf B}^2-\electric{\mathbf E}^2)$.

### N2325

Note: [[02.07 Examples of Classical Field Theories|02.07 Examples of Classical Field Theories]]  
Priority: low · Graph: no · Manim: no

Clear hub that frames the examples by components versus physical degrees of freedom.

- [Structure] No change needed.

### N2326

Note: [[02.07.01 The Real Scalar Klein–Gordon Field|02.07.01 The Real Scalar Klein–Gordon Field]]  
Priority: medium · Graph: no · Manim: no

Correct content and a good mass-shell figure, but two source-correction callouts and a misplaced sentence break the flow.

- [Structure] The sentence "The right side is covariant. The integration region is the positive-energy mass shell" belongs directly after (2.48); it now follows the paragraph on orthochronous transformations and reads as a non sequitur.
- [Simplify] Fig. 2.1 labels the shaded area "forbidden region" while the text says it is only off shell for this mass; relabel it "off shell ($k^2\ne m^2$)" for consistency.
- [Simplify] Merge the two "the source calls..." callouts into the main text as plain correct statements ($\signal{\phi}\to-\signal{\phi}$ is a field-sign $\mathbb Z_2$ symmetry; the Hamiltonian density, not the kinetic contraction, is nonnegative).
- [Example] Show the Jacobian explicitly: $\delta(k_0^2-\energy{\omega}_{\mathbf k}^2)\theta(k_0)=\delta(k_0-\energy{\omega}_{\mathbf k})/(2\energy{\omega}_{\mathbf k})$.

### N2327

Note: [[02.07.02 The Complex Scalar Field|02.07.02 The Complex Scalar Field]]  
Priority: medium · Graph: yes · Manim: yes

Correct potential (2.51), vacuum circle, and masses ($\mechanical{m}_\eta^2=2|\mechanical{m}^2|$), with a helpful figure; the symmetry-group statement is retained in a wrong form.

- [Correctness] "The source writes $O(2)\cong U(1)$" is kept in the text with a correcting callout; state directly that the phase rotation is $SO(2)\cong U(1)$ (the full $O(2)$ also contains the reflection $\signal{\phi}\to\signal{\phi}^*$) and remove the callout.
- [Example] Show the mass calculation: with $\signal{\phi}=\signal{\phi}_0+(\signal{\eta}+i\signal{\xi})/\sqrt2$, $\energy{V}\approx\lambda(\sqrt2\signal{\phi}_0\signal{\eta})^2=2\lambda\signal{\phi}_0^2\signal{\eta}^2$, so $\mechanical{m}_\eta^2=4\lambda\signal{\phi}_0^2=2|\mechanical{m}^2|$ and no $\signal{\xi}^2$ term appears.
- [Graph] Add a native 3D surface plot of $\energy{V}(\phi_1,\phi_2)=\tfrac{\lambda}{4}(\phi_1^2+\phi_2^2-v^2)^2$ with $\lambda=1$, $v=1$ on $[-1.6,1.6]^2$, showing the circle of minima that the 2D slice in Fig. 2.2 cannot show.
- [Manim] Animate a ball rolling in the Mexican hat: a radial displacement oscillates (massive $\signal{\eta}$), a tangential push moves freely along the rim (massless Goldstone $\signal{\xi}$).

### N2328

Note: [[02.07.03 The Electromagnetic Field|02.07.03 The Electromagnetic Field]]  
Priority: medium · Graph: no · Manim: yes

Field-strength components, Lagrangian (2.53), and the sourced current are correct, but the gauge transformation (2.60) is printed in an inconsistent form and Fig. 2.3 draws both polarizations on one line.

- [Correctness] Eq. (2.60) pairs the phase $e^{i\electric{e}\alpha}$ with the shift $\partial_\mu\alpha/\electric{e}$; with $D_\mu=\partial_\mu-i\electric{e}\electric{A}_\mu$ the consistent pair is $\signal{\phi}\to e^{i\electric{e}\alpha}\signal{\phi}$, $\electric{A}_\mu\to\electric{A}_\mu+\partial_\mu\alpha$ (or $e^{i\alpha}$ with $\partial_\mu\alpha/\electric{e}$); print the corrected form and delete the callout.
- [Correctness] Fig. 2.3 draws $\varepsilon^{(1)}$ and $\varepsilon^{(2)}$ as opposite arrows on one line, i.e. the same polarization up to sign; redraw with $\varepsilon^{(1)}$ vertical in the plane and $\varepsilon^{(2)}$ as an out-of-plane dot (or a 3D view), so the figure matches its caption.
- [Simplify] Add a one-line check that (2.58) and the corrected (2.60) give $D_\mu\signal{\phi}\to e^{i\electric{e}\alpha}D_\mu\signal{\phi}$, which is the whole point of minimal coupling.
- [Manim] Animate a plane wave along $z$ with $\electric{\mathbf E}$ oscillating along $x$ then along $y$ (two linear polarizations) and a gauge shift $\electric{A}_\mu\to\electric{A}_\mu+\partial_\mu\alpha$ that changes $\electric{A}$ but leaves $\electric{\mathbf E},\magnetic{\mathbf B}$ unchanged.

### N2329

Note: [[02.08 The Lorentz Group and Its Representations|02.08 The Lorentz Group and Its Representations]]  
Priority: low · Graph: no · Manim: no

Clear hub with a correct distinction between field representations and unitary state representations.

- [Structure] No change needed.

### N2330

Note: [[02.08.01 Algebraic Structure of the Lorentz Group|02.08.01 Algebraic Structure of the Lorentz Group]]  
Priority: low · Graph: no · Manim: no

Correct definitions and commutator (2.62); the generators are used without an explicit matrix form.

- [Example] Give the vector-representation generators $(M^{\mu\nu})^\rho{}_\sigma=i(g^{\mu\rho}\delta^\nu_\sigma-g^{\nu\rho}\delta^\mu_\sigma)$ here (it is currently only in 02.08.04) and show one explicit $4\times4$ case, e.g. the boost $K^1$, and a finite boost $\Lambda=\exp(-i\eta K^1)$ with $\cosh\eta$, $\sinh\eta$ entries.
- [Simplify] Show the first-order expansion of (2.61) as an equation, $\omega_{\rho\sigma}+\omega_{\sigma\rho}=0$, instead of describing it in words.

### N2331

Note: [[02.08.02 Decomposition and Representations|02.08.02 Decomposition and Representations]]  
Priority: low · Graph: no · Manim: no

Correct commutators (2.63)–(2.66) and appropriately careful remarks about complexification and covering groups.

- [Example] Show one of the cancellations in (2.66) explicitly, e.g. $[A^i,B^j]=\tfrac14([J^i,J^j]+[K^i,K^j]+i[K^i,J^j]-i[J^i,K^j])=0$, instead of describing it in words.
- [Example] State what $(\tfrac12,0)$ means concretely: $\mathbf J=\boldsymbol\sigma/2$, $\mathbf K=\pm i\boldsymbol\sigma/2$ (sign by convention), to bridge to the Weyl spinors in 02.08.03.

### N2332

Note: [[02.08.03 Fundamental Representations|02.08.03 Fundamental Representations]]  
Priority: low · Graph: no · Manim: no

Correct representation table with good remarks on component counting.

- [Simplify] Replace "The source summarizes the main representations as follows" with a direct introduction, and add a column with the rotation content (e.g. $(\tfrac12,\tfrac12)\to0\oplus1$, $(1,0)\oplus(0,1)\to1\oplus1$ i.e. $\electric{\mathbf E}$ and $\magnetic{\mathbf B}$), which explains the spin column.
- [Simplify] Note that which of $(\tfrac12,0)$ and $(0,\tfrac12)$ is called left-handed is a convention; state the convention used in later chapters.

### N2333

Note: [[02.08.04 Transformation of Fields|02.08.04 Transformation of Fields]]  
Priority: low · Graph: no · Manim: no

Correct infinitesimal transformation (2.68) and generators; the vector sign check is verbal only.

- [Example] Write the sign check: $-\tfrac{i}{2}\omega_{\mu\nu}(S^{\mu\nu})^\rho{}_\sigma=\omega^\rho{}_\sigma$ for the vector generator, matching $\Lambda=1+\omega$.
- [Example] Add the finite spinor transformation $\Lambda_{1/2}=\exp(-\tfrac{i}{2}\omega_{\mu\nu}S^{\mu\nu})$ for a rotation by $\theta$ about $z$, showing the $4\pi$ periodicity ($\Lambda_{1/2}(2\pi)=-1$) that ties back to the covering-group remark in 02.08.02.

### N2334

Note: [[02.09 Discrete CPT Symmetry|02.09 Discrete CPT Symmetry]]  
Priority: low · Graph: no · Manim: no

Correct and suitably qualified overview of P, C, T and the CPT theorem.

- [Example] Update the CP-violation statement: besides K and B mesons, CP violation has been observed in charm ($D^0$, LHCb 2019) and in $b$-baryon decays (LHCb 2025); also name the experimental CPT test $|m_{K^0}-m_{\bar K^0}|/m_K<10^{-18}$ as a concrete consequence.
- [Simplify] Replace "The source associates C violation with matter–antimatter asymmetry" and its callout with the Sakharov statement (baryogenesis needs B violation, C and CP violation, and departure from equilibrium).

### N2335

Note: [[02 Physics/04 Quantum Field Theory and Particle Physics/01 Quantum Field Theory/02 Classical Field Theory/02.10 Summary|02.10 Summary]]  
Priority: low · Graph: no · Manim: no

Correct summary with three worked examples (signs in Example 2.11 and the O(N) vacuum $\signal{v}=\sqrt{|\mechanical{m}^2|/\lambda}$ check out).

- [Simplify] In Example 2.13, note that the QCD two-flavour pion model is $O(4)/O(3)\cong S^3$ with three pions; $O(3)/O(2)$ has only two fields, so "in QCD it is the pion decay constant" should be marked as an analogy.
- [Example] In Example 2.12, state the $\mathfrak{so}(N)$ bracket fully instead of "$\propto(\delta_{ac}Q_{bd}-\cdots)$", and link to the explicit result in \[\[02.11.02 O(N) Noether currents\]\].

### N2336

Note: [[02.11 Exercises|02.11 Exercises]]  
Priority: low · Graph: no · Manim: no

Useful exercise index with brief guiding questions; links resolve.

- [Simplify] The "Source solutions" section says solutions are "supplied in Appendix D of the source" and then that each article contains them; keep only the second sentence, which is what the hub's "D Exercise Solutions" links point to.

### N2337

Note: [[02.11.01 Proca field equations|02.11.01 Proca field equations]]  
Priority: low · Graph: no · Manim: no

Correct and complete solution, including the three-polarization count and the massless-limit caveat.

- [Example] In (b), make the polarization count explicit: in the rest frame $\partial_\mu\signal{A}^\mu=0$ gives $\varepsilon^0=0$, leaving $\varepsilon=\hat x,\hat y,\hat z$; for $\mathbf k\ne0$ the longitudinal vector $(|\mathbf k|,0,0,\energy{\omega})/\mechanical{m}$ grows with energy, which previews the massless-limit subtlety.

### N2338

Note: [[02.11.02 O(N) Noether currents|02.11.02 O(N) Noether currents]]  
Priority: low · Graph: no · Manim: no

Correct solution; the charge-bracket signs and $\{\mechanical{I}_i,\mechanical{I}_j\}=-\epsilon_{ijk}\mechanical{I}_k$ were re-derived and match the stated convention.

- [Simplify] Show the single-field step the text recommends, $\{\signal{Q}_{ab},\signal{\phi}^c\}=\delta^{bc}\signal{\phi}^a-\delta^{ac}\signal{\phi}^b$ (up to the sign convention), as an equation before the full charge bracket.

### N2339

Note: [[02.11.03 Maxwell equations and energy–momentum tensor|02.11.03 Maxwell equations and energy–momentum tensor]]  
Priority: low · Graph: no · Manim: no

A correct, complete solution (Euler–Lagrange signs, Belinfante improvement, $\Theta^{00}$ and Poynting components all check out) whose closing paragraphs repeat caveats at length.

- [Simplify] Merge the three trailing paragraphs after part (d) and the "External-current qualification" callout into one short note; they restate the same point (the field-only tensor obeys $\partial_\mu\Theta^{\mu\nu}=-F^{\nu\lambda}J_\lambda$ with a source) three times. State that divergence formula explicitly instead of describing it in words.
- [Simplify] In part (c), show the one-line combination $-F^{\mu\rho}(\partial^\nu A_\rho-\partial_\rho A^\nu)=-F^{\mu\rho}F^{\nu}{}_{\rho}$ instead of the sentence "The derivative term combines with the corresponding canonical term"; this is the key step of the exercise.
- [Structure] The exercise statement asks for $\energy{T}^{\mu\nu}$ while the solution uses $\energy{T}_{\mathrm{can}}^{\mu\nu}$; use one label, and remove the meta-phrase "The source says" from the callout.

### N2340

Note: [[02.11.04 Derrick scaling argument|02.11.04 Derrick scaling argument]]  
Priority: low · Graph: yes · Manim: no

The scaling powers $\lambda^{2-d}$ and $\lambda^{-d}$ and the no-go conclusion are correct and clearly derived; the closing prose is somewhat repetitive.

- [Graph] Plot $E(\lambda)=\lambda^{2-d}E_\nabla+\lambda^{-d}E_V$ for $\lambda\in[0.3,3]$ with $E_\nabla=E_V=1$ for $d=1,2,3$ on one 2D chart; $d=1$ shows a minimum, $d=2$ a monotone curve flattening to $E_\nabla$, $d=3$ a monotone decrease to zero, which makes the theorem visible at a glance.
- [Example] For $d=1$ add the $\phi^4$ kink as a concrete check: the scaling condition gives $E_\nabla=E_V$ (virial equality), which the kink profile $\tanh(mx/\sqrt2)$ satisfies.
- [Simplify] Condense the last three paragraphs (compression convention, admissibility, $d=1$ and $d=2$ remarks) into a short bullet list of assumptions and limiting cases; they partly duplicate the callout.

### N2341

Note: [[02.11.05 Chern–Simons gauge variation|02.11.05 Chern–Simons gauge variation]]  
Priority: low · Graph: no · Manim: no

Gauge variation, field equation, Maxwell–Chern–Simons equation and the dimension count are correct; the step to $(\Box+k^2)\tilde F=0$ is only asserted.

- [Simplify] Show the derivation of $(\Box+\signal{k}^2)\tilde{\signal{F}}_\mu=0$: write $F^{\mu\nu}=\epsilon^{\mu\nu\lambda}\tilde F_\lambda$, so the field equation becomes $\epsilon^{\mu\nu\lambda}\partial_\mu\tilde F_\lambda=-k\tilde F^\nu$, then apply $\epsilon_{\nu\alpha\beta}\partial^\alpha$ and use $\partial_\mu\tilde F^\mu=0$; this is the only nontrivial step and currently reads "A further derivative ... gives".
- [Structure] The exercise statement uses $k$ and $\varepsilon^{\mu\nu\rho}$ while the solution uses $\signal{k}$ and $\epsilon^{\mu\nu\rho}$; unify the symbol and macro usage, and drop "The source writes $m=k$" phrasing in favour of a plain statement.
- [Intuition] Add one sentence on why the mass is "topological": the Chern–Simons term is metric independent, so it contributes no energy density yet still gaps the photon; contrast with the Proca term already mentioned.

### N2342

Note: [[02.11.06 Electromagnetic duality and Bianchi identity|02.11.06 Electromagnetic duality and Bianchi identity]]  
Priority: low · Graph: no · Manim: yes

Dual-tensor components, both invariants and the duality discussion are correct with $\epsilon^{0123}=+1$; part (b) and (c) skip the component calculations the exercise asks for.

- [Simplify] In part (b) write the two components explicitly: $\nu=0$ gives $\partial_i\tilde F^{i0}=\partial_iB^i=0$, and $\nu=j$ gives $\partial_0\tilde F^{0j}+\partial_i\tilde F^{ij}=-\partial_tB^j-(\nabla\times E)^j=0$, i.e. Faraday; the note only states the results.
- [Simplify] In part (c) show at least $F_{\mu\nu}F^{\mu\nu}=2F_{0i}F^{0i}+F_{ij}F^{ij}=-2E^2+2B^2$ instead of "Direct component calculation gives".
- [Manim] Animate the continuous duality rotation $E\to E\cos\theta+B\sin\theta$, $B\to B\cos\theta-E\sin\theta$ for a plane wave, showing that $E^2+B^2$ and $E\times B$ stay fixed while $B^2-E^2$ and $E\cdot B$ rotate into each other; the discrete map in part (d) is the $\theta=\pi/2$ frame.

### N2343

Note: [[02.11.07 Lorentz algebra|02.11.07 Lorentz algebra]]  
Priority: low · Graph: no · Manim: no

Commutators, the $A/B$ split and the opposite boost exponents $e^{\pm\eta\sigma^3/2}$ are correct; part (a) and (b) assert results without the intermediate algebra.

- [Simplify] In part (b) show one line of the $[A^i,A^j]$ computation: $\tfrac14([J^i,J^j]+i[J^i,K^j]+i[K^i,J^j]-[K^i,K^j])=\tfrac14\epsilon^{ijk}(2iJ^k-2K^k)=\tfrac{i}{2}\epsilon^{ijk}(J^k+iK^k)=i\epsilon^{ijk}A^k$; it makes the role of the minus sign in $[K,K]$ explicit.
- [Links] Replace the bare book references "(2.63)–(2.65) ... from (2.62)" and "(B.85)" with wiki links to the vault note that contains the Lorentz algebra, since the equation numbers are not resolvable in the vault.
- [Example] Add a numeric check: for $\eta=\ln 2$ the left-handed boost is $\mathrm{diag}(\sqrt2,1/\sqrt2)$ and the right-handed one its inverse, showing non-unitarity with unit determinant.

### N2344

Note: [[02.11.08 Two-dimensional Thirring model|02.11.08 Two-dimensional Thirring model]]  
Priority: low · Graph: no · Manim: no

The gamma-matrix choice, axial transformation of $\bar\psi$, mass-term breaking and the sign of $j_5^\mu=\epsilon^{\mu\nu}j_\nu$ (requiring $\epsilon^{01}=-1$) all check out; part (b) is only sketched.

- [Simplify] Make part (b) concrete: with $\psi=(\psi_1,\psi_2)$ Grassmann, every quartic Lorentz scalar is proportional to $\psi_1^\dagger\psi_1\psi_2^\dagger\psi_2$, so $(\bar\psi\psi)^2$, $(\bar\psi\gamma^5\psi)^2$ and $(\bar\psi\gamma^\mu\psi)^2$ are all multiples of the same term; give the explicit proportionality constants for the chosen $\gamma^0=\sigma^1$, $\gamma^1=-i\sigma^3$.
- [Simplify] Show the temporal-component check of the duality relation explicitly: $\gamma^0\gamma^5=\gamma^1$ so $j_5^0=j^1=-j_1=\epsilon^{01}j_1$ with $\epsilon^{01}=-1$; the closing paragraph tells the reader to do this but the note never does.
- [Structure] Shorten the three closing paragraphs; the dimension count and the vector-versus-axial phase argument are useful, the quantum caveat can be one sentence.
