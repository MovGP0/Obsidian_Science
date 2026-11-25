---
title: "Note Improvement Tracker – 02 Physics/04 Quantum Field Theory and Particle Physics/01 Quantum Field Theory/03 Quantization of the Scalar Field"
---

> [!TLDR]
> This note tracks the review of the 54 notes in `02 Physics/04 Quantum Field Theory and Particle Physics/01 Quantum Field Theory/03 Quantization of the Scalar Field`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 7 possible errors or notation conflicts. 7 of them are verified (7 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N2361|N2361]] 03.04.02 Zero-Point Energy: (3.38) labels an energy density $\energy{E}_0$ (table: MeV$^4$), while 03.04.04 uses $\energy{E}_0$ for a total energy in MeV; write $\energy{E}_0=V\cdot\tfrac12\int\frac{d^3k}{(2\pi)^3}\omega_k$ or rename the density (e.g. $\energy{\varepsilon}_0=E_0/V$) and drop the apologetic callout. **Fixed:** Renamed density to varepsilon_0 (energy per unit volume) in (3.38) and table, removed callout, adjusted the dimension-check sentence
- [[#N2392|N2392]] 03.11.05 Complex-scalar U(1) charge: The physical-quantities row for the Lagrangian density says "The density used to derive the translation current". In this note it is used to derive the U(1) phase current. **Fixed:** Description now says U(1) phase current
- [[#N2394|N2394]] 03.11.07 Massless Feynman propagator: Symbol clash: $k$ denotes the four-momentum in the first display and then the magnitude $|\mathbf k|=k$ in the spherical-coordinate step. Also, $\theta$ is both the step function $\theta(x^0)$ and the polar angle. Rename them, for example to $\kappa=|\mathbf k|$ and $\vartheta$. **Fixed:** In the spherical-coordinate step, magnitude renamed to kappa and polar angle to vartheta; kappa row added to table
- [[#N2394|N2394]] 03.11.07 Massless Feynman propagator: The physical-quantities table lists $\Delta^+,\Delta^-$ and $\mathbf k'$, which the note never uses. **Fixed:** Removed the Delta+- row and k' from the momentum row
- [[#N2395|N2395]] 03.11.08 Retarded scalar propagator: The physical-quantities table lists the Pauli–Jordan function $\Delta$ as "The scalar commutator function in the microcausality exercise", but this note never uses $\Delta$ without a subscript (it would be needed if the derivation above is added). **Fixed:** Removed the row (the k' entry in the momentum row is also unused; not changed)
- [[#N2396|N2396]] 03.11.09 Lorentz Noether current: Table rows are copied from other exercises. $T^{\mu\nu}$ is described as "used to derive the translation current", but here it builds the Lorentz current. $\mathbf y$ is described as "the second integration point in the mode commutator", but here it only appears in the canonical commutator. **Fixed:** T now builds the Lorentz current; y is the second spatial point in the canonical commutator
- [[#N2397|N2397]] 03.11.10 Coherent-state particle number: The physical-quantities table lists $N_a,N_b$ (particle/antiparticle counts), which this real-field note never uses. **Fixed:** Row reduced to N, the total occupation count

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2345 | [[03.00 Quantization of the Scalar Field\|03.00 Quantization of the Scalar Field]] | Analyzed | low | no | no | [[#N2345\|View]] |
| N2346 | [[03.01 Canonical Quantization\|03.01 Canonical Quantization]] | Analyzed | low | no | no | [[#N2346\|View]] |
| N2347 | [[03.01.01 From Poisson Brackets to Commutators\|03.01.01 From Poisson Brackets to Commutators]] | Analyzed | low | no | no | [[#N2347\|View]] |
| N2348 | [[03.01.02 The Real Scalar Field and the Klein–Gordon Equation\|03.01.02 The Real Scalar Field and the Klein–Gordon Equation]] | Analyzed | low | no | no | [[#N2348\|View]] |
| N2349 | [[03.02 Quantization of the Real Scalar Field\|03.02 Quantization of the Real Scalar Field]] | Analyzed | low | no | no | [[#N2349\|View]] |
| N2350 | [[03.02.01 Plane-Wave Expansion\|03.02.01 Plane-Wave Expansion]] | Analyzed | low | yes | yes | [[#N2350\|View]] |
| N2351 | [[03.02.02 Creation and Annihilation Operators\|03.02.02 Creation and Annihilation Operators]] | Analyzed | low | no | no | [[#N2351\|View]] |
| N2352 | [[03.02.03 Canonical Commutation Relations\|03.02.03 Canonical Commutation Relations]] | Analyzed | low | no | no | [[#N2352\|View]] |
| N2353 | [[03.02.04 Verification of the Canonical Relations\|03.02.04 Verification of the Canonical Relations]] | Analyzed | low | no | no | [[#N2353\|View]] |
| N2354 | [[03.03 Fock Space and Bose–Einstein Statistics\|03.03 Fock Space and Bose–Einstein Statistics]] | Analyzed | low | no | no | [[#N2354\|View]] |
| N2355 | [[03.03.01 The Vacuum and Single-Particle States\|03.03.01 The Vacuum and Single-Particle States]] | Analyzed | low | no | no | [[#N2355\|View]] |
| N2356 | [[03.03.02 The Number Operator and n-Particle States\|03.03.02 The Number Operator and n-Particle States]] | Analyzed | low | no | no | [[#N2356\|View]] |
| N2357 | [[03.03.03 Bose–Einstein Statistics\|03.03.03 Bose–Einstein Statistics]] | Analyzed | low | yes | no | [[#N2357\|View]] |
| N2358 | [[03.03.04 Fock Space\|03.03.04 Fock Space]] | Analyzed | low | no | no | [[#N2358\|View]] |
| N2359 | [[03.04 Hamiltonian Operator and Normal Ordering\|03.04 Hamiltonian Operator and Normal Ordering]] | Analyzed | low | no | no | [[#N2359\|View]] |
| N2360 | [[03.04.01 Hamiltonian Operator in the Variables a and a†\|03.04.01 Hamiltonian Operator in the Variables a and a†]] | Analyzed | medium | no | no | [[#N2360\|View]] |
| N2361 | [[03.04.02 Zero-Point Energy\|03.04.02 Zero-Point Energy]] | Analyzed | medium | yes | no | [[#N2361\|View]] |
| N2362 | [[03.04.03 Normal Ordering\|03.04.03 Normal Ordering]] | Analyzed | low | no | no | [[#N2362\|View]] |
| N2363 | [[03.04.04 The Casimir Effect\|03.04.04 The Casimir Effect]] | Analyzed | medium | yes | yes | [[#N2363\|View]] |
| N2364 | [[03.05 The Complex Scalar Field\|03.05 The Complex Scalar Field]] | Analyzed | low | no | no | [[#N2364\|View]] |
| N2365 | [[03.05.01 Lagrangian Density and U(1) Symmetry\|03.05.01 Lagrangian Density and U(1) Symmetry]] | Analyzed | low | no | no | [[#N2365\|View]] |
| N2366 | [[03.05.02 Mode Expansion and Operators\|03.05.02 Mode Expansion and Operators]] | Analyzed | low | no | no | [[#N2366\|View]] |
| N2367 | [[03.05.03 The Charge Operator\|03.05.03 The Charge Operator]] | Analyzed | low | no | no | [[#N2367\|View]] |
| N2368 | [[03.06 Microcausality\|03.06 Microcausality]] | Analyzed | low | no | no | [[#N2368\|View]] |
| N2369 | [[03.06.01 Causality in Quantum Field Theory\|03.06.01 Causality in Quantum Field Theory]] | Analyzed | low | yes | no | [[#N2369\|View]] |
| N2370 | [[03.06.02 The Pauli–Jordan Function\|03.06.02 The Pauli–Jordan Function]] | Analyzed | low | yes | no | [[#N2370\|View]] |
| N2371 | [[03.06.03 Microcausality of the Scalar Field\|03.06.03 Microcausality of the Scalar Field]] | Analyzed | low | yes | yes | [[#N2371\|View]] |
| N2372 | [[03.07 Propagators of the Scalar Field\|03.07 Propagators of the Scalar Field]] | Analyzed | low | no | no | [[#N2372\|View]] |
| N2373 | [[03.07.01 Definitions\|03.07.01 Definitions]] | Analyzed | low | no | no | [[#N2373\|View]] |
| N2374 | [[03.07.02 Retarded and Advanced Propagators\|03.07.02 Retarded and Advanced Propagators]] | Analyzed | low | yes | no | [[#N2374\|View]] |
| N2375 | [[03.07.03 Time Ordering\|03.07.03 Time Ordering]] | Analyzed | low | no | no | [[#N2375\|View]] |
| N2376 | [[03.07.04 The Feynman Propagator\|03.07.04 The Feynman Propagator]] | Analyzed | low | no | no | [[#N2376\|View]] |
| N2377 | [[03.07.05 Fourier Representation\|03.07.05 Fourier Representation]] | Analyzed | medium | no | no | [[#N2377\|View]] |
| N2378 | [[03.07.06 The iε Prescription\|03.07.06 The iε Prescription]] | Analyzed | low | yes | no | [[#N2378\|View]] |
| N2379 | [[03.07.07 Integration Contour in the Complex Plane\|03.07.07 Integration Contour in the Complex Plane]] | Analyzed | low | no | yes | [[#N2379\|View]] |
| N2380 | [[03.07.08 Δ_F as a Green's Function\|03.07.08 Δ_F as a Green's Function]] | Analyzed | medium | no | no | [[#N2380\|View]] |
| N2381 | [[03.07.09 Physical Interpretation\|03.07.09 Physical Interpretation]] | Analyzed | low | no | no | [[#N2381\|View]] |
| N2382 | [[03.08 Covariant Form of the Propagators\|03.08 Covariant Form of the Propagators]] | Analyzed | low | no | no | [[#N2382\|View]] |
| N2383 | [[03.08.01 Covariant Commutator\|03.08.01 Covariant Commutator]] | Analyzed | low | yes | no | [[#N2383\|View]] |
| N2384 | [[03.08.02 Relations between the Propagators\|03.08.02 Relations between the Propagators]] | Analyzed | low | yes | no | [[#N2384\|View]] |
| N2385 | [[03.09 Worked Examples\|03.09 Worked Examples]] | Analyzed | medium | yes | no | [[#N2385\|View]] |
| N2386 | [[03.10 Källén–Lehmann Representation\|03.10 Källén–Lehmann Representation]] | Analyzed | low | yes | no | [[#N2386\|View]] |
| N2387 | [[03.11 Exercises\|03.11 Exercises/03.11 Exercises]] | Analyzed | low | no | no | [[#N2387\|View]] |
| N2388 | [[03.11.01 Mode-operator commutators\|03.11 Exercises/03.11.01 Mode-operator commutators]] | Analyzed | low | no | no | [[#N2388\|View]] |
| N2389 | [[03.11.02 Hamiltonian in mode operators\|03.11 Exercises/03.11.02 Hamiltonian in mode operators]] | Analyzed | low | no | no | [[#N2389\|View]] |
| N2390 | [[03.11.03 Momentum operator\|03.11 Exercises/03.11.03 Momentum operator]] | Analyzed | low | no | no | [[#N2390\|View]] |
| N2391 | [[03.11.04 Spatial translations\|03.11 Exercises/03.11.04 Spatial translations]] | Analyzed | low | no | no | [[#N2391\|View]] |
| N2392 | [[03.11.05 Complex-scalar U(1) charge\|03.11 Exercises/03.11.05 Complex-scalar U(1) charge]] | Analyzed | low | no | no | [[#N2392\|View]] |
| N2393 | [[03.11.06 Explicit microcausality\|03.11 Exercises/03.11.06 Explicit microcausality]] | Analyzed | low | yes | no | [[#N2393\|View]] |
| N2394 | [[03.11.07 Massless Feynman propagator\|03.11 Exercises/03.11.07 Massless Feynman propagator]] | Analyzed | medium | yes | no | [[#N2394\|View]] |
| N2395 | [[03.11.08 Retarded scalar propagator\|03.11 Exercises/03.11.08 Retarded scalar propagator]] | Analyzed | medium | yes | yes | [[#N2395\|View]] |
| N2396 | [[03.11.09 Lorentz Noether current\|03.11 Exercises/03.11.09 Lorentz Noether current]] | Analyzed | low | no | no | [[#N2396\|View]] |
| N2397 | [[03.11.10 Coherent-state particle number\|03.11 Exercises/03.11.10 Coherent-state particle number]] | Analyzed | medium | yes | no | [[#N2397\|View]] |
| N2398 | [[03.12 Summary\|03.12 Summary]] | Analyzed | low | no | no | [[#N2398\|View]] |

## Suggestions

### N2345

Note: [[03.00 Quantization of the Scalar Field|03.00 Quantization of the Scalar Field]]  
Priority: low · Graph: no · Manim: no

A clear chapter hub with a reading path, but it links only some of the chapter's sections.

- [Links] The reading path mentions "The complex field" without linking [[03.05 The Complex Scalar Field]], and omits [[03.08 Covariant Form of the Propagators]], [[03.09 Worked Examples]], [[03.10 Källén–Lehmann Representation]], the exercises and [[03.12 Summary]]; add them so the hub covers the whole chapter.

### N2346

Note: [[03.01 Canonical Quantization|03.01 Canonical Quantization]]  
Priority: low · Graph: no · Manim: no

Short, accurate section hub.

- No change needed.

### N2347

Note: [[03.01.01 From Poisson Brackets to Commutators|03.01.01 From Poisson Brackets to Commutators]]  
Priority: low · Graph: no · Manim: no

Correct and careful statement of the canonical prescription; the caveat paragraph is placed before the material it qualifies.

- [Structure] Move the second paragraph (units, ordering ambiguity, fermions) after (3.5); as an opening it qualifies equations the reader has not yet seen.
- [Intuition] Add the discrete-lattice bridge: on a lattice of spacing $a$, $\phi_i=\phi(\mathbf x_i)$ and $p_i=a^3\pi(\mathbf x_i)$ satisfy $[\phi_i,p_j]=i\delta_{ij}$, and $\delta_{ij}/a^3\to\delta^{(3)}(\mathbf x-\mathbf y)$; this explains why the momentum is a density and where the delta comes from.

### N2348

Note: [[03.01.02 The Real Scalar Field and the Klein–Gordon Equation|03.01.02 The Real Scalar Field and the Klein–Gordon Equation]]  
Priority: low · Graph: no · Manim: no

Correct Lagrangian, field equation, momentum and Hamiltonian density with sound dimension checks.

- [Simplify] Show the Euler–Lagrange step in one line, $\partial_\mu(\partial^\mu\phi)+m^2\phi=0$, instead of only describing integration by parts in prose.
- [Intuition] Add the connection to the next note: each Fourier mode of (3.9) is $\tfrac12(\dot\phi_{\mathbf k}^2+\omega_{\mathbf k}^2\phi_{\mathbf k}^2)$, a harmonic oscillator with $\omega_{\mathbf k}=\sqrt{\mathbf k^2+m^2}$, which motivates the plane-wave expansion.

### N2349

Note: [[03.02 Quantization of the Real Scalar Field|03.02 Quantization of the Real Scalar Field]]  
Priority: low · Graph: no · Manim: no

Clear section hub with a useful note on the order of operations.

- No change needed.

### N2350

Note: [[03.02.01 Plane-Wave Expansion|03.02.01 Plane-Wave Expansion]]  
Priority: low · Graph: yes · Manim: yes

Correct expansion, momentum and dimension count ($a$ has dimension $-3/2$); the box-to-continuum step is described in words rather than shown.

- [Simplify] Show the box step explicitly: periodic modes $k_i=2\pi n_i/L$, cell volume $(2\pi/L)^3$, hence $\sum_{\mathbf k}\to L^3\int d^3k/(2\pi)^3$; the current paragraph explains it only verbally.
- [Graph] Plot the dispersion $\omega_{\mathbf k}=\sqrt{k^2+m^2}$ for $k\in[-3m,3m]$ together with the massless line $\omega=|k|$ and mark discrete box modes $k=2\pi n/L$ for $L=10/m$ as dots on the curve.
- [Manim] Animate one mode $\mathrm{Re}[a\,e^{-i(\omega t-kx)}]$ as a travelling wave next to a phasor rotating clockwise at $\omega$, then add the conjugate term to show that the real field is the sum of the two frequency branches.

### N2351

Note: [[03.02.02 Creation and Annihilation Operators|03.02.02 Creation and Annihilation Operators]]  
Priority: low · Graph: no · Manim: no

The inversion formulas (3.16)–(3.19) are correct and the oscillator analogy is well motivated.

- [Intuition] Add the single-oscillator analogue explicitly, $a=\sqrt{\omega/2}\,q+i p/\sqrt{2\omega}$, next to (3.18), so the reader sees the field formula as the same combination applied mode by mode.
- [Simplify] Display the intermediate combination $\sqrt{\omega/2}\,(3.16)+\tfrac{i}{\sqrt{2\omega}}(3.17)=\tfrac12(a+a^\dagger_{-k})+\tfrac12(a-a^\dagger_{-k})$ instead of describing the cancellation in words.

### N2352

Note: [[03.02.03 Canonical Commutation Relations|03.02.03 Canonical Commutation Relations]]  
Priority: low · Graph: no · Manim: no

The proof of (3.20) is correct, but the displayed chain drops the energy-ratio factor one line before the text says that step is allowed.

- [Simplify] In (3.21) keep the factor $\tfrac12(\sqrt{\omega_k/\omega_{k'}}+\sqrt{\omega_{k'}/\omega_k})$ in the third line next to the $\mathbf x$ integral and replace it by one only after writing $(2\pi)^3\delta^{(3)}(\mathbf k-\mathbf k')$; the text explicitly says the replacement happens at that second step.
- [Simplify] Show the $[a,a]$ case in one line (the two mixed terms carry opposite signs and cancel on $\mathbf k=-\mathbf k'$) instead of "The same calculation gives zero".
- [Structure] Merge "Remark 3.2" with the following paragraph; it currently states the oscillator interpretation twice in consecutive short paragraphs.

### N2353

Note: [[03.02.04 Verification of the Canonical Relations|03.02.04 Verification of the Canonical Relations]]  
Priority: low · Graph: no · Manim: no

The reverse check (3.22)–(3.23) is correct and well explained.

- [Example] Add the companion check $[\phi(\mathbf x,t),\phi(\mathbf y,t)]=0$, which follows from the same integrand with $\cos$ replaced by $\sin$ and is odd in $\mathbf k$; it previews the microcausality argument of 03.06.

### N2354

Note: [[03.03 Fock Space and Bose–Einstein Statistics|03.03 Fock Space and Bose–Einstein Statistics]]  
Priority: low · Graph: no · Manim: no

Clear section hub.

- No change needed.

### N2355

Note: [[03.03.01 The Vacuum and Single-Particle States|03.03.01 The Vacuum and Single-Particle States]]  
Priority: low · Graph: no · Manim: no

Correct definitions and normalization with good caveats about delta-normalized states.

- [Simplify] Show the one-line derivation of (3.26): $\langle k|k'\rangle=2\sqrt{\omega_k\omega_{k'}}\langle0|[a_k,a^\dagger_{k'}]|0\rangle$.
- [Intuition] Add one sentence on why the $2\omega$ factor is Lorentz invariant: $d^3k/(2\omega)$ is the invariant measure, so $2\omega\,\delta^{(3)}$ transforms as a scalar under boosts.

### N2356

Note: [[03.03.02 The Number Operator and n-Particle States|03.03.02 The Number Operator and n-Particle States]]  
Priority: low · Graph: no · Manim: no

Correct number operator and commutators; the derivation of (3.29) is only cited.

- [Simplify] Show (3.29) in one line via $[a^\dagger_pa_p,a^\dagger_k]=a^\dagger_p(2\pi)^3\delta^{(3)}(\mathbf p-\mathbf k)$.
- [Example] Add the discrete-mode example $|n_k\rangle=(a_k^\dagger)^n|0\rangle/\sqrt{n!}$ with $N|n_k\rangle=n|n_k\rangle$ to make the factorial remark concrete.

### N2357

Note: [[03.03.03 Bose–Einstein Statistics|03.03.03 Bose–Einstein Statistics]]  
Priority: low · Graph: yes · Manim: no

Correct and short; the distinction between exchange symmetry and thermal statistics is well made.

- [Graph] Plot mean occupation $\bar n(x)=1/(e^x-1)$ (Bose–Einstein), $1/(e^x+1)$ (Fermi–Dirac) and $e^{-x}$ (Boltzmann) for $x=(\omega-\mu)/T\in[0.05,5]$, to illustrate the thermal consequence the note explicitly separates from exchange symmetry.
- [Links] Link the spin–statistics sentence to [[04.03.02 The Spin–Statistics Theorem]].

### N2358

Note: [[03.03.04 Fock Space|03.03.04 Fock Space]]  
Priority: low · Graph: no · Manim: no

A concise, correct definition of bosonic Fock space.

- [Example] Add the two-mode example: the states $|n_1,n_2\rangle$ with $\mathcal H_2$ spanned by $|2,0\rangle,|1,1\rangle,|0,2\rangle$ (three states, not four), showing what the symmetric product removes.

### N2359

Note: [[03.04 Hamiltonian Operator and Normal Ordering|03.04 Hamiltonian Operator and Normal Ordering]]  
Priority: low · Graph: no · Manim: no

Clear section hub.

- No change needed.

### N2360

Note: [[03.04.01 Hamiltonian Operator in the Variables a and a†|03.04.01 Hamiltonian Operator in the Variables a and a†]]  
Priority: medium · Graph: no · Manim: no

The kinetic term (3.36) and the result (3.37) are correct, but the cancellation of the oscillating $aa$ and $a^\dagger a^\dagger$ terms, the heart of the derivation, is only asserted.

- [Simplify] Display the gradient-plus-mass contribution: $\tfrac12\int d^3x[(\nabla\phi)^2+m^2\phi^2]$ gives the same four structures with prefactor $(\mathbf k\cdot\mathbf k'+m^2)/(2\sqrt{\omega\omega'})$, i.e. $+\omega^2/(2\omega)$ for $aa^\dagger$ terms and $-\omega^2/(2\omega)$ for the $\mathbf k'=-\mathbf k$ terms, so the reader can see the cancellation instead of reading two paragraphs about it.
- [Structure] State (3.35) after the kinetic and potential contributions rather than before them, so the derivation reads top to bottom.

### N2361

Note: [[03.04.02 Zero-Point Energy|03.04.02 Zero-Point Energy]]  
Priority: medium · Graph: yes · Manim: no

The UV-divergence discussion is correct, but the symbol $E_0$ is used for an energy density (MeV$^4$) and only a callout admits the mismatch.

- [Correctness] (3.38) labels an energy density $\energy{E}_0$ (table: MeV$^4$), while 03.04.04 uses $\energy{E}_0$ for a total energy in MeV; write $\energy{E}_0=V\cdot\tfrac12\int\frac{d^3k}{(2\pi)^3}\omega_k$ or rename the density (e.g. $\energy{\varepsilon}_0=E_0/V$) and drop the apologetic callout.
- [Example] Add the cutoff estimate $\varepsilon_0\approx\Lambda^4/(16\pi^2)$ for $m\ll\Lambda$ and evaluate it for $\Lambda$ at the Planck scale versus the observed dark-energy density ($\sim(2\,\mathrm{meV})^4$) to make "divergent" concrete and motivate why subtraction matters.
- [Graph] Plot the integrand $k^2\sqrt{k^2+m^2}/(4\pi^2)$ for $k\in[0,10m]$ against the massless $k^3/(4\pi^2)$ to show that large $k$ dominates (UV) and the mass only matters near $k\lesssim m$.

### N2362

Note: [[03.04.03 Normal Ordering|03.04.03 Normal Ordering]]  
Priority: low · Graph: no · Manim: no

Correct definition and consequences of normal ordering.

- [Example] Add the explicit difference $\phi(x)\phi(y)-\mathcal N\{\phi(x)\phi(y)\}=[\phi^+(x),\phi^-(y)]=\Delta^+(x-y)$, which the text describes in words and which the propagator section later needs.
- [Simplify] Show that normal ordering (3.37) simply drops the $\tfrac12(2\pi)^3\delta^{(3)}(0)$ term, linking back to [[03.04.01 Hamiltonian Operator in the Variables a and a†]].

### N2363

Note: [[03.04.04 The Casimir Effect|03.04.04 The Casimir Effect]]  
Priority: medium · Graph: yes · Manim: yes

The numbers $-\pi/(24d)$, $-\pi/(24d^2)$ and $-\pi^2/(240d^4)$ are correct, but the finite part is pulled from zeta regularization without showing the physical subtraction, and no magnitude is given.

- [Simplify] Replace or supplement the zeta step with an exponential cutoff: $\tfrac{\pi}{2d}\sum_n n\,e^{-n\pi/(d\Lambda)}=\tfrac{d\Lambda^2}{2\pi}-\tfrac{\pi}{24d}+O(\Lambda^{-2})$; the divergent term is proportional to $d$ (bulk energy, cancelled by the outside region) and the finite remainder is cutoff independent, which explains the subtraction the text only mentions.
- [Example] Evaluate (3.45) in SI units: $\pi^2\hbar c/(240d^4)\approx1.3\,\mathrm{mPa}$ at $d=1\,\mu\mathrm{m}$ (about $13\,\mathrm{Pa}$ at $100\,\mathrm{nm}$), and replace "the source reports high-precision verification" with the actual experiments (Lamoreaux 1997, Mohideen–Roy 1998, Bressi et al. 2002 for parallel plates).
- [Structure] "Take plates separated by $d$ along the z-axis" followed by "In 1+1 dimensions" mixes the two models the previous paragraph separates; describe the 1+1 setup as an interval $[0,d]$.
- [Graph] Log-log plot of $|F/A|=\pi^2\hbar c/(240d^4)$ in Pa for $d\in[10\,\mathrm{nm},10\,\mu\mathrm{m}]$, with atmospheric pressure as a reference line.
- [Manim] Show standing modes $\sin(n\pi x/d)$ between two plates while $d$ shrinks, with the allowed modes thinning out compared with a continuum outside, to give the intuition for a separation-dependent mode sum.

### N2364

Note: [[03.05 The Complex Scalar Field|03.05 The Complex Scalar Field]]  
Priority: low · Graph: no · Manim: no

Clear section hub.

- No change needed.

### N2365

Note: [[03.05.01 Lagrangian Density and U(1) Symmetry|03.05.01 Lagrangian Density and U(1) Symmetry]]  
Priority: low · Graph: no · Manim: no

The Lagrangian, field equations and current are correct and consistent with (3.55) ($a$-quanta have $Q=+1$), but the sign-convention discussion is written as prose with a forward reference.

- [Simplify] Replace the prose sentence about the generator with formulas: $[Q,\phi]=-\phi$ and $e^{-i\alpha Q}\phi\,e^{i\alpha Q}=e^{i\alpha}\phi$; and note that the Noether recipe $j^\mu=\frac{\partial\mathcal L}{\partial(\partial_\mu\phi)}\delta\phi+\ldots$ gives the opposite overall sign, which is the convention choice being referred to.
- [Links] The forward reference "(3.55)" should be a link to [[03.05.03 The Charge Operator]].
- [Simplify] Show the decomposition $\mathcal L=\sum_{i=1,2}[\tfrac12(\partial\phi_i)^2-\tfrac12m^2\phi_i^2]$ explicitly.

### N2366

Note: [[03.05.02 Mode Expansion and Operators|03.05.02 Mode Expansion and Operators]]  
Priority: low · Graph: no · Manim: no

Correct expansion and algebra; the paragraph ordering around (3.54) is slightly disjointed.

- [Structure] Move "All other commutators between the two sets vanish." directly under (3.54), before the caveat paragraph, so the full algebra is stated in one place.
- [Intuition] Add that $a$ and $b$ are the combinations $(a_1\pm i a_2)/\sqrt2$ of the two real-field operators, which explains why the mixed commutators vanish and why both species share one mass.

### N2367

Note: [[03.05.03 The Charge Operator|03.05.03 The Charge Operator]]  
Priority: low · Graph: no · Manim: no

Correct result (3.55); the substitution of (3.52) into (3.50) is not shown.

- [Simplify] Show the intermediate unordered result $Q=\int\frac{d^3k}{(2\pi)^3}(a^\dagger a-bb^\dagger)$ before normal ordering, which makes the role of normal ordering (dropping a $\delta^{(3)}(0)$ constant) explicit.
- [Example] Add the explicit check $[Q,a^\dagger_k]=+a^\dagger_k$, $[Q,b^\dagger_k]=-b^\dagger_k$ and the state $a^\dagger_kb^\dagger_p|0\rangle$ with $Q=0$, $E=\omega_k+\omega_p$.

### N2368

Note: [[03.06 Microcausality|03.06 Microcausality]]  
Priority: low · Graph: no · Manim: no

Clear section hub.

- No change needed.

### N2369

Note: [[03.06.01 Causality in Quantum Field Theory|03.06.01 Causality in Quantum Field Theory]]  
Priority: low · Graph: yes · Manim: no

Correct and concise definition with a good operational explanation.

- [Graph] Add a 2D spacetime diagram ($x$ horizontal, $t$ vertical) with the light cone $t=\pm x$ through $y$, shading timelike and spacelike regions and marking an event $x$ in the spacelike region where (3.56) applies.

### N2370

Note: [[03.06.02 The Pauli–Jordan Function|03.06.02 The Pauli–Jordan Function]]  
Priority: low · Graph: yes · Manim: no

The commutator, the definitions (3.58)–(3.59) and the equal-time derivative check are correct.

- [Simplify] Show the one-line reduction of (3.59) to (3.58) using $\delta(k^2-m^2)=[\delta(k^0-\omega)+\delta(k^0+\omega)]/(2\omega)$ and $\mathbf k\to-\mathbf k$ in the negative-energy term.
- [Graph] Plot the smooth part of $\Delta(t,r)$ inside the light cone, $\propto\theta(t^2-r^2)\,mJ_1(m\sqrt{t^2-r^2})/\sqrt{t^2-r^2}$, versus $r$ at fixed $t=10/m$ for $r\in[0,15/m]$, showing it is zero for $r>t$ (state the light-cone delta term separately).

### N2371

Note: [[03.06.03 Microcausality of the Scalar Field|03.06.03 Microcausality of the Scalar Field]]  
Priority: low · Graph: yes · Manim: yes

The proof is correct, but one sentence is detached from the step it explains.

- [Structure] Move "The two exponentials cancel under reversal of the integration momentum." directly under the displayed equal-time integral; it currently follows the timelike paragraph.
- [Graph] Plot $\Delta^+$ at spacelike separation, $\Delta^+(r)=\frac{m}{4\pi^2r}K_1(mr)$, for $r\in[0.2/m,6/m]$ to show that the Wightman function is nonzero (decaying like $e^{-mr}$) outside the light cone while the commutator vanishes.
- [Manim] Animate a spacelike separation vector being boosted to the equal-time frame, rotated by $\pi$, and boosted back to its negative, while a timelike vector under the same operations stays in the future cone; this is the geometric core of the proof.

### N2372

Note: [[03.07 Propagators of the Scalar Field|03.07 Propagators of the Scalar Field]]  
Priority: low · Graph: no · Manim: no

Clear section hub with a sensible reading order.

- No change needed.

### N2373

Note: [[03.07.01 Definitions|03.07.01 Definitions]]  
Priority: low · Graph: no · Manim: no

Correct definitions with good remarks on which functions are homogeneous solutions.

- [Structure] Add a small table listing each function, its defining combination, whether it solves the homogeneous or sourced equation, and its support (everywhere, inside the light cone, future cone, past cone); the information is scattered across the next four notes.

### N2374

Note: [[03.07.02 Retarded and Advanced Propagators|03.07.02 Retarded and Advanced Propagators]]  
Priority: low · Graph: yes · Manim: no

The source $-\delta^{(4)}$, the momentum-space forms (3.65)–(3.66) and the relation $\Delta_F=i\Delta_R+\Delta^-$ are correct; the source check is given only in prose.

- [Simplify] Write the source check as an equation: $(\Box+m^2)[\theta(t)\Delta]=\delta(t)\partial_t\Delta|_{t=0}=-\delta^{(4)}(x-y)$, using $\Delta|_{t=0}=0$ and $\partial_t\Delta|_{t=0}=-\delta^{(3)}$.
- [Graph] Show the complex $k^0$ plane with poles at $\pm\omega_{\mathbf k}-i\varepsilon$ for the retarded case and the closing contours for $t>0$ (below) and $t<0$ (above), as a 2D diagram next to (3.65).

### N2375

Note: [[03.07.03 Time Ordering|03.07.03 Time Ordering]]  
Priority: low · Graph: no · Manim: no

Correct and clear.

- No change needed.

### N2376

Note: [[03.07.04 The Feynman Propagator|03.07.04 The Feynman Propagator]]  
Priority: low · Graph: no · Manim: no

Correct definition with useful checks.

- [Simplify] Write the checks as formulas: $\Delta_F(x-y)=\Delta_F(y-x)$ and $\Delta_F=i\Delta_R+\Delta^-$ (linking [[03.07.02 Retarded and Advanced Propagators]]), instead of describing them in words.

### N2377

Note: [[03.07.05 Fourier Representation|03.07.05 Fourier Representation]]  
Priority: medium · Graph: no · Manim: no

The residue calculation is correct and complete, but the opening paragraphs refer to (3.72) before it is shown and the closing paragraph packs several unrelated checks into dense prose.

- [Structure] Move the sentence "Equation (3.72) supplies that encoding: its single pole is below the real frequency axis..." to after (3.72) is displayed, and add the one-line check: for $t>0$ close below to get $(i/2\pi)(-2\pi i)=1$; for $t<0$ close above to get $0$.
- [Simplify] The text before (3.71) says "Spatial momentum reversal leaves the mode energy unchanged", but (3.71) only collects both terms under one integral. The reversal $\mathbf k\to-\mathbf k$ is actually used in the third line of (3.79), so state it there.
- [Simplify] Split the final paragraph ("At a nonzero fixed positive time difference ...") into a short bulleted check list: decay direction per half-plane, equal residue phases, dimension count ($4-2=2$), off-shell vs on-shell.
- [Links] Fig. 3.1 is named in the text but lives in another note; link it as [[03.07.07 Integration Contour in the Complex Plane]] where "Fig. 3.1 illustrates their positions" appears.

### N2378

Note: [[03.07.06 The iε Prescription|03.07.06 The iε Prescription]]  
Priority: low · Graph: yes · Manim: no

The note is short and correct (the pole shifts in (3.82) and the retarded comparison hold), but it explains the regulator only in words.

- [Graph] Plot Re and Im of $i/(k_0^2-\omega^2+i\varepsilon)$ against $k_0\in[-3,3]$ for $\omega=1$ and $\varepsilon=0.3, 0.1$. This shows that the imaginary part becomes delta peaks at $\pm\omega$ and the real part becomes a principal value as $\varepsilon\to0^+$.
- [Intuition] Add the one-line equivalent $k^2-m^2+i\varepsilon\approx(k^0)^2-(\omega_{\mathbf k}-i\varepsilon')^2$ with $\varepsilon'=\varepsilon/2\omega_{\mathbf k}$, so the reader sees directly that the prescription gives the energy a tiny negative imaginary part.
- [Simplify] The last paragraph mixes the retarded comparison, the undefined-pole remark, and the real-field antiparticle remark; split it into two short paragraphs (prescription comparison vs. interpretation).

### N2379

Note: [[03.07.07 Integration Contour in the Complex Plane|03.07.07 Integration Contour in the Complex Plane]]  
Priority: low · Graph: no · Manim: yes

The contour figure is correct (pole positions, orientations and labels match (3.76)–(3.78)) and the text is concise.

- [Manim] Animate the semicircle radius growing from the real segment, once in the lower half-plane for $\tau>0$ (capturing $+\omega_{\mathbf k}-i\varepsilon'$) and once in the upper half-plane for $\tau<0$. Show the arc contribution $\propto e^{\operatorname{Im}k^0\,\tau}$ shrinking to zero, so it is clear why the closure direction follows from the sign of $\tau$.
- [Simplify] The paragraph after the caption mixes three separate remarks (reversing the time order, the schematic size of the displacements, and equal time). Make each its own sentence, and drop "A finite-radius contour picture alone does not prescribe a value for a coincident field product" or explain it.

### N2380

Note: [[03.07.08 Δ_F as a Green's Function|03.07.08 Δ_F as a Green's Function]]  
Priority: medium · Graph: no · Manim: no

The derivation (3.84) and the $-i$ source convention are correct, but the source-correction callout and the paragraph after it are confusing meta-commentary.

- [Simplify] Replace the callout ("The source instead prints minus i in that alternative rescaling...") and the sentence "As a sign check on the retained correction callout..." with one plain statement: $G\equiv i\Delta_F$ obeys $(\square+m^2)G=\delta^{(4)}$.
- [Intuition] Make the non-uniqueness claim concrete: $(\square+m^2)\Delta_F=-i\delta^{(4)}$ and $(\square+m^2)\Delta_R=-\delta^{(4)}$, so $\Delta_F-i\Delta_R$ solves the homogeneous Klein–Gordon equation. The two inverses differ only by their boundary conditions.
- [Links] Link "Retarded and advanced inverses" to [[03.07.02 Retarded and Advanced Propagators]] and to [[03.08.02 Relations between the Propagators]], so the reader can compare the $-1$ and $-i$ sources.

### N2381

Note: [[03.07.09 Physical Interpretation|03.07.09 Physical Interpretation]]  
Priority: low · Graph: no · Manim: no

The interpretation and the causality remark are correct, with good caveats, but the time-order wording in the second and third paragraphs repeats itself.

- [Simplify] Merge the sentence "For the reverse time order, the earlier event is x and the later event is y..." into the first statement of the reversed ordering, so that the antiparticle reading ($y^0>x^0$: created at $x$, absorbed at $y$) is stated once.
- [Example] Back the causality remark with the explicit spacelike Wightman function $\Delta^+=mK_1(mr)/(4\pi^2r)$ from [[03.11.06 Explicit microcausality]]. It is nonzero and decays like $e^{-mr}$, while the commutator vanishes.

### N2382

Note: [[03.08 Covariant Form of the Propagators|03.08 Covariant Form of the Propagators]]  
Priority: low · Graph: no · Manim: no

This is an adequate hub with a short orientation paragraph.

- [Simplify] No change needed beyond shortening the second paragraph to one sentence that names the two notes' roles (commutator = homogeneous solution, propagators = Green functions).

### N2383

Note: [[03.08.01 Covariant Commutator|03.08.01 Covariant Commutator]]  
Priority: low · Graph: yes · Manim: no

The representation (3.86) and the five properties are correct and consistent ($\partial_0\Delta|_{x^0=0}=-\delta^{(3)}$ matches $[\phi,\pi]=i\delta$), but there is a meta-callout about the source's label.

- [Graph] Plot the two mass-shell branches $k^0=\pm\sqrt{k^2+m^2}$ for $m=1$, $k\in[-3,3]$, with the upper branch labelled $\operatorname{sgn}=+1$ and the lower $-1$. This shows visually why proper orthochronous boosts preserve the sign of $k^0$.
- [Simplify] Replace the callout ("The source labels the second property 'vanishing on the vacuum'...") with just the correct property name.
- [Example] Show the one-line energy integration explicitly: $\delta(k^2-m^2)=[\delta(k^0-\omega)+\delta(k^0+\omega)]/(2\omega)$ gives $i\Delta=\Delta^+-\Delta^-$. The prose already describes this, but the formula is quicker to follow.

### N2384

Note: [[03.08.02 Relations between the Propagators|03.08.02 Relations between the Propagators]]  
Priority: low · Graph: yes · Manim: no

All five identities in (3.87) and the Fourier forms (3.88)–(3.90) check out, and the note is compact.

- [Graph] Add a three-row static pole diagram in the complex $k^0$ plane: retarded (both poles at $\pm\omega-i\varepsilon$), advanced (both at $\pm\omega+i\varepsilon$), Feynman ($+\omega-i\varepsilon$, $-\omega+i\varepsilon$). Reuse the style of Fig. 3.1.
- [Example] Show the fourth line of (3.87) explicitly for $x^0>0$: $\Delta_F-\Delta_F^*=\Delta^+-\Delta^-=i\Delta$, and for $x^0<0$ the sign flips. This is the check the text describes only in words.

### N2385

Note: [[03.09 Worked Examples|03.09 Worked Examples]]  
Priority: medium · Graph: yes · Manim: no

The examples are correct (the Gaussian (3.94) and the dim-reg value (3.96) both check out), but they are prose-heavy and the operator formulas in Example 3.16 omit the mode labels.

- [Graph] Plot $\omega_k=\sqrt{k^2+m^2}$ and its NR approximation $m+k^2/2m$ for $m=1$, $k\in[0,2]$, with a second curve for the phase error $(\omega_k-m-k^2/2m)\,\tau$ at $\tau=10/m$. This makes the "long times accumulate phase" warning concrete.
- [Simplify] In Example 3.16 write $H=\int\frac{d^3k}{(2\pi)^3}\omega_{\mathbf k}a^\dagger(\mathbf k)a(\mathbf k)$ and the same for $\mathbf P$, with explicit arguments and a display instead of an inline fraction.
- [Example] In Example 3.14, give the intermediate dim-reg step $\int\frac{d^{d-1}k}{(2\pi)^{d-1}2\omega}=\frac{\Gamma(1-d/2)}{(4\pi)^{d/2}}m^{d-2}$ (times $\mu^{4-d}$) before (3.96), so that the sign from $\Gamma(-1+\varepsilon)$ can be seen.
- [Simplify] Remove the "The source describes ..." phrasing in Example 3.14 and state the renormalization statement directly.

### N2386

Note: [[03.10 Källén–Lehmann Representation|03.10 Källén–Lehmann Representation]]  
Priority: low · Graph: yes · Manim: no

The theorem, the dimensions ($\rho$ in $\mathrm{MeV}^{-2}$) and the caveats are correct, but the note gives no picture of the spectral density.

- [Graph] Plot a schematic $\rho(\mu^2)$: a spike (narrow bar) of weight $Z$ at $\mu^2=m_{\mathrm{phys}}^2$, and a smooth continuum starting at $\mu^2=4m_{\mathrm{phys}}^2$, with the $\mu^2$ axis in units of $m_{\mathrm{phys}}^2$ over $[0,16]$.
- [Intuition] Give the concrete threshold example that motivates the callout: in $\phi^4$ theory with $\phi\to-\phi$ symmetry, the field cannot create two particles, so the continuum starts at $(3m)^2$.
- [Example] Show in one line how $0\le Z\le1$ follows from the sum rule $\int\rho\,d\mu^2=1$ for a canonically normalized field.

### N2387

Note: [[03.11 Exercises|03.11 Exercises]]  
Priority: low · Graph: no · Manim: no

This is a clear exercise hub with a useful reading guide.

- [Simplify] Merge the two sentences under "Source solutions", which say the same thing.

### N2388

Note: [[03.11.01 Mode-operator commutators|03.11.01 Mode-operator commutators]]  
Priority: low · Graph: no · Manim: no

The derivation is correct (both mixed terms give $+\tfrac12\sqrt{\omega/\omega'}$ and $+\tfrac12\sqrt{\omega'/\omega}$), but it uses Fourier phases opposite to the chapter and needs a callout to explain this.

- [Simplify] Rewrite the inverse-mode formulas with the chapter's phase $e^{-i\mathbf k\cdot\mathbf x}$ for $a(\mathbf k)$ (as in [[03.02.02 Creation and Annihilation Operators]]) and drop the phase-mismatch callout. The calculation is unchanged except for the delta's support.
- [Example] Write out the $[a,a]$ case as a short display: the coefficient $\tfrac12(\sqrt{\omega_{\mathbf k'}/\omega_{\mathbf k}}-\sqrt{\omega_{\mathbf k}/\omega_{\mathbf k'}})$ is multiplied by $(2\pi)^3\delta^{(3)}(\mathbf k+\mathbf k')$, so the reader does not have to redo the signs.
- [Structure] Add $a,a^\dagger$ with unit $\mathrm{MeV}^{-3/2}$ to the physical-quantities table.

### N2389

Note: [[03.11.02 Hamiltonian in mode operators|03.11.02 Hamiltonian in mode operators]]  
Priority: low · Graph: no · Manim: no

The calculation is correct (the coefficient of the $aa$ terms vanishes on shell, and the nonoscillating coefficient is $\omega/2$) and well structured.

- [Example] Show the gradient and mass contributions as explicit displays, parallel to the $\pi^2$ display, with coefficients $\pm|\mathbf k|^2/(4\omega)$ and $m^2/(4\omega)$, instead of "Treat the gradient and mass terms in the same way".
- [Simplify] State the vacuum constant explicitly, $\tfrac12\int d^3k\,\omega_{\mathbf k}\,\delta^{(3)}(0)$, before normal ordering removes it, and link to the Casimir remark in [[03.12 Summary]].

### N2390

Note: [[03.11.03 Momentum operator|03.11.03 Momentum operator]]  
Priority: low · Graph: no · Manim: no

The sign-corrected momentum $P^i=-\int\pi\,\partial_i\phi$ and the mode result are correct, but the index notation for Cartesian components is confusing.

- [Simplify] Write the Fourier coefficient as $ik'^i$ (Cartesian component of $\mathbf k'$) instead of "$k'_i$ denotes a Cartesian component". With the metric $(+,-,-,-)$ used in the same note, $k_i=-k^i$, so the current notation invites a sign error.
- [Example] Add the explicit intermediate $\mathbf P=\tfrac12\int\frac{d^3k}{(2\pi)^3}\mathbf k[a^\dagger a+aa^\dagger-a_{\mathbf k}a_{-\mathbf k}e^{-2i\omega t}-a^\dagger_{\mathbf k}a^\dagger_{-\mathbf k}e^{2i\omega t}]$, so that "the oscillating terms cancel under $\mathbf k\to-\mathbf k$" can be seen.
- [Example] Show the commutator step for $[H,\mathbf P]$, i.e. $[a^\dagger_ka_k,a^\dagger_{k'}a_{k'}]=(2\pi)^3\delta^{(3)}(\mathbf k-\mathbf k')(a^\dagger_ka_{k'}-a^\dagger_{k'}a_k)$, instead of only stating the result.

### N2391

Note: [[03.11.04 Spatial translations|03.11.04 Spatial translations]]  
Priority: low · Graph: no · Manim: no

The Noether derivation of $P^i=\int T^{0i}$ is correct and short, but the TLDR describes a different exercise.

- [Structure] The TLDR "Use the momentum generator to translate the scalar field in space" does not match the content, which derives $P^i$ from the Noether current. Rewrite it, for example as "Derive the field momentum from the translation Noether current and match Exercise 3.3".
- [Simplify] Use one macro for the translation parameter: the exercise statement writes uncolored $\varepsilon^\mu$, while the solution and table use the mechanical-colored one.

### N2392

Note: [[03.11.05 Complex-scalar U(1) charge|03.11.05 Complex-scalar U(1) charge]]  
Priority: low · Graph: no · Manim: no

The current, its conservation and the charge $N_a-N_b$ are correct with the stated source sign convention, but the table contains a copy-paste error.

- [Correctness] The physical-quantities row for the Lagrangian density says "The density used to derive the translation current". In this note it is used to derive the U(1) phase current.
- [Example] In part (c), show the one-line mode computation: $i(\phi^*\dot\phi-\phi\dot\phi^*)$ gives $\tfrac12(a^\dagger a+aa^\dagger)-\tfrac12(bb^\dagger+b^\dagger b)$ before normal ordering. This makes the origin of the relative minus sign visible.

### N2393

Note: [[03.11.06 Explicit microcausality|03.11.06 Explicit microcausality]]  
Priority: low · Graph: yes · Manim: no

The proof and the $K_1$ formula for the spacelike Wightman function are correct and clearly structured.

- [Graph] Plot $\Delta^+(r)=mK_1(mr)/(4\pi^2r)$ at equal time for $m=1$ and the massless $1/(4\pi^2r^2)$, over $r\in[0.2,5]$ on a log $y$-axis. This shows the nonzero spacelike correlation and its $e^{-mr}$ decay, while $\Delta=0$ there.
- [Simplify] Replace the two meta callouts ("The source describes the sine integrand ...", "The source excludes the coincident point ...") with direct statements, since the corrected content is already in the main text.
- [Structure] Remove $\mathbf k'$ from the physical-quantities table; it does not occur in the note.

### N2394

Note: [[03.11.07 Massless Feynman propagator|03.11.07 Massless Feynman propagator]]  
Priority: medium · Graph: yes · Manim: no

The integrals and the final $-1/(4\pi^2(x^2-i\varepsilon))$ are correct, but two letters are used for two different quantities in the same note.

- [Correctness] Symbol clash: $k$ denotes the four-momentum in the first display and then the magnitude $|\mathbf k|=k$ in the spherical-coordinate step. Also, $\theta$ is both the step function $\theta(x^0)$ and the polar angle. Rename them, for example to $\kappa=|\mathbf k|$ and $\vartheta$.
- [Correctness] The physical-quantities table lists $\Delta^+,\Delta^-$ and $\mathbf k'$, which the note never uses.
- [Graph] Plot Re and Im of $-1/(4\pi^2(s-i\varepsilon))$ against $s=x^2\in[-2,2]$ for $\varepsilon=0.1,0.03$. This shows the $1/s$ principal-value part and the delta-like imaginary peak on the light cone that the regulator encodes.

### N2395

Note: [[03.11.08 Retarded scalar propagator|03.11.08 Retarded scalar propagator]]  
Priority: medium · Graph: yes · Manim: yes

The corrected configuration-space form is consistent with $\Delta_R=\theta(x^0)\Delta$ and the $-\delta^{(4)}$ source, but the step from momentum space to the Bessel form is only asserted.

- [Example] Derive the configuration-space bracket by noting $\Delta_R=\theta(x^0)\Delta$ and inserting the closed form $\Delta=-\tfrac{1}{2\pi}\operatorname{sgn}(x^0)[\delta(x^2)-\tfrac{m}{2\sqrt{x^2}}\theta(x^2)J_1(m\sqrt{x^2})]$ from Exercise 3.6. This replaces "The corresponding configuration-space expression is" with a one-line reason.
- [Correctness] The physical-quantities table lists the Pauli–Jordan function $\Delta$ as "The scalar commutator function in the microcausality exercise", but this note never uses $\Delta$ without a subscript (it would be needed if the derivation above is added).
- [Graph] Plot the interior tail $mJ_1(ms)/(4\pi s)$ against proper time $s=\sqrt{x^2}\in[0,20]$ for $m=1$, marking its finite limit $m^2/(8\pi)$ at $s\to0$ and the oscillating decay.
- [Manim] Animate the retarded response to a point source in a 2D spatial slice: a sharp expanding light-cone shell (the delta term), followed by the oscillating massive tail that fills its interior. This shows support only inside the future cone.

### N2396

Note: [[03.11.09 Lorentz Noether current|03.11.09 Lorentz Noether current]]  
Priority: low · Graph: no · Manim: no

The field variation, the current $\mathcal M^{\mu\rho\sigma}$ and the stated algebra are mutually consistent, and $[L^{12},L^{23}]=iL^{31}$ checks out, but the physical-quantities table has copied descriptions.

- [Correctness] Table rows are copied from other exercises. $T^{\mu\nu}$ is described as "used to derive the translation current", but here it builds the Lorentz current. $\mathbf y$ is described as "the second integration point in the mode commutator", but here it only appears in the canonical commutator.
- [Example] Part (c) only asserts the algebra. Add the explicit rotation check $[L^{12},L^{23}]=i\,g^{22}L^{13}=iL^{31}$, which the text describes in words.
- [Simplify] State the divergence step explicitly: $\partial_\mu\mathcal M^{\mu\rho\sigma}=T^{\rho\sigma}-T^{\sigma\rho}=0$.

### N2397

Note: [[03.11.10 Coherent-state particle number|03.11.10 Coherent-state particle number]]  
Priority: medium · Graph: yes · Manim: no

The BCH step, mean, variance and mean-field result are correct, but the prerequisites paragraph is long and hard to follow.

- [Simplify] Shorten the long paragraph after part (c) to two sentences: square integrability gives a normalizable state and finite $\langle N\rangle$, and a smooth, rapidly decreasing $\alpha$ gives a smooth mean field. Move the $1/(\mu^2+k^2)$ counterexample to a callout.
- [Graph] Plot the Poisson probabilities $P(n)=e^{-\bar N}\bar N^n/n!$ for $\bar N=1,4,16$ over $n\in[0,30]$. This makes the shrinking relative width $1/\sqrt{\bar N}$ visible.
- [Correctness] The physical-quantities table lists $N_a,N_b$ (particle/antiparticle counts), which this real-field note never uses.
- [Example] Show the $\langle N^2\rangle$ step explicitly: $a_ka^\dagger_{k'}=a^\dagger_{k'}a_k+(2\pi)^3\delta^{(3)}(\mathbf k-\mathbf k')$ gives $\lVert\alpha\rVert^4+\lVert\alpha\rVert^2$.

### N2398

Note: [[03.12 Summary|03.12 Summary]]  
Priority: low · Graph: no · Manim: no

This is a correct and well-organized chapter summary.

- [Links] Add links from each section heading to its chapter note (for example Causality to [[03.08.01 Covariant Commutator]], and Propagators to [[03.07.05 Fourier Representation]]). Write the Hamiltonian with explicit $a^\dagger(\mathbf k)a(\mathbf k)$.
