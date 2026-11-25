---
title: "Note Improvement Tracker – 02 Physics/04 Quantum Field Theory and Particle Physics/01 Quantum Field Theory/01 From Quantum Mechanics to Field Theory"
---

> [!TLDR]
> This note tracks the review of the 48 notes in `02 Physics/04 Quantum Field Theory and Particle Physics/01 Quantum Field Theory/01 From Quantum Mechanics to Field Theory`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 8 possible errors or notation conflicts. 8 of them are verified (8 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N2263|N2263]] 01.04.02 Plane-Wave Solutions: In (1.14) and (1.15) the measure is $d^{3}\mechanical{k}$ while the integrand depends only on $\mechanical{\mathbf p}$, so the integrals are ill-formed as written; write $\int d^{3}\mechanical{p}/(2\pi)^3\,1/(2\energy{\omega}_{\mathbf p})$ and delete the explanatory callout. **Fixed:** Changed both measures to d^3 p, deleted the k/p callout, removed k from the momentum table row
- [[#N2273|N2273]] 01.06.01 Formulation: The caption of Fig. 1.1 says the particle penetrates "with a transmission coefficient that exceeds the classical value", but with the retained momentum choice 01.06.03 finds $\signal{T}<0$ (Eq. 1.62); rephrase to "Region II supports propagating negative-frequency modes; see 01.06.03 for the sign of the transmitted flux". **Fixed:** 01.06.03 gives T<0 (1.62); caption now says Region II supports propagating negative-frequency modes and links 01.06.03 for the flux sign
- [[#N2281|N2281]] 01.08.01 From Particles to Fields: In (1.64) the measure is $d^{3}\mechanical{k}$ but the integrand depends on $\mechanical{\mathbf p}$; as written the integral is ill-formed; use $d^{3}\mechanical{p}$ and drop the callout. **Fixed:** Measure changed to d^3 p, callout removed, table row updated
- [[#N2282|N2282]] 01.08.02 Fock Space: In (1.68) the measure $d^{3}\mechanical{k}$ does not match the integration variable $\mechanical{\mathbf p}$ in the integrand; write $d^{3}\mechanical{p}$. **Fixed:** Measure changed to d^3 p, k/p callout removed, table row updated
- [[#N2283|N2283]] 01.08.03 Antiparticles: In (1.69) and (1.70) the measure $d^{3}\mechanical{k}$ does not match the integrand variable $\mechanical{\mathbf p}$; write $d^{3}\mechanical{p}$. **Fixed:** Both measures changed to d^3 p, k/p callout removed, table row updated
- [[#N2286|N2286]] 01.09.01 The Beginnings (1925–1932): "In 1925, Born and Jordan showed that the quantized harmonic oscillator ... could be described with creation and annihilation operators" is misattributed: Born–Jordan (1925) established the matrix-mechanics commutator; the first field quantization (a vibrating string as a set of oscillators) is the Born–Heisenberg–Jordan paper (1926), and creation/annihilation operators for the radiation field were introduced by Dirac (1927). **Fixed:** Rewrote: Born-Jordan 1925 gave the commutator; Born-Heisenberg-Jordan 1926 quantized a string as oscillators; radiation-field ladder operators came with Dirac 1927
- [[#N2296|N2296]] 01.12.01 Natural units and conversions: Part (c): with the stated inputs $1.0546\times10^{-34}$, $2.998\times10^{8}$ and $1.602\times10^{-13}$ the result is $197.36\approx197.4\,\mathrm{MeV\,fm}$, not $197.3$; use $1.602177\times10^{-13}\,\mathrm{J/MeV}$ (and $\hbar=1.054572\times10^{-34}\,\mathrm{J\,s}$) to obtain $197.33\,\mathrm{MeV\,fm}$. **Fixed:** Recomputed (197.359 with old inputs); inputs changed to hbar=1.054572e-34, c=2.997925e8, 1.602177e-13 J/MeV, giving 197.33 so the stated 197.3 holds
- [[#N2302|N2302]] 01.12.07 Weyl spinors and chirality: Physical-quantities table: $E$ is described as "Incident energy", but there is no scattering here; it is the positive energy of the massless plane-wave mode. **Fixed:** Quantity renamed to Mode energy

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2256 | [[01.01 Physical Motivations\|01.01 Physical Motivations]] | Analyzed | low | no | no | [[#N2256\|View]] |
| N2257 | [[01.02 Natural Units\|01.02 Natural Units]] | Analyzed | low | no | no | [[#N2257\|View]] |
| N2258 | [[01.02.01 Metric Convention\|01.02.01 Metric Convention]] | Analyzed | low | yes | no | [[#N2258\|View]] |
| N2259 | [[01.03 Limits of Nonrelativistic Quantum Mechanics\|01.03 Limits of Nonrelativistic Quantum Mechanics]] | Analyzed | low | no | no | [[#N2259\|View]] |
| N2260 | [[01.03.01 Covariance of the Schrödinger Equation\|01.03.01 Covariance of the Schrödinger Equation]] | Analyzed | medium | yes | no | [[#N2260\|View]] |
| N2261 | [[01.04 The Klein–Gordon Equation\|01.04 The Klein–Gordon Equation]] | Analyzed | low | no | no | [[#N2261\|View]] |
| N2262 | [[01.04.01 Derivation\|01.04.01 Derivation]] | Analyzed | low | no | no | [[#N2262\|View]] |
| N2263 | [[01.04.02 Plane-Wave Solutions\|01.04.02 Plane-Wave Solutions]] | Analyzed | medium | yes | no | [[#N2263\|View]] |
| N2264 | [[01.04.03 Negative Probabilities in the Klein–Gordon Equation\|01.04.03 Negative Probabilities in the Klein–Gordon Equation]] | Analyzed | low | yes | yes | [[#N2264\|View]] |
| N2265 | [[01.05 The Dirac Equation\|01.05 The Dirac Equation]] | Analyzed | low | no | no | [[#N2265\|View]] |
| N2266 | [[01.05.01 Dirac's Strategy\|01.05.01 Dirac's Strategy]] | Analyzed | low | no | no | [[#N2266\|View]] |
| N2267 | [[01.05.02 Gamma Matrices and Clifford Algebra\|01.05.02 Gamma Matrices and Clifford Algebra]] | Analyzed | low | no | no | [[#N2267\|View]] |
| N2268 | [[01.05.03 Dirac–Pauli Representation\|01.05.03 Dirac–Pauli Representation]] | Analyzed | low | no | no | [[#N2268\|View]] |
| N2269 | [[01.05.04 Plane-Wave Solutions and Spinors\|01.05.04 Plane-Wave Solutions and Spinors]] | Analyzed | low | no | no | [[#N2269\|View]] |
| N2270 | [[01.05.05 Probability Current of the Dirac Equation\|01.05.05 Probability Current of the Dirac Equation]] | Analyzed | low | no | no | [[#N2270\|View]] |
| N2271 | [[01.05.06 Negative Energies and the Dirac Sea\|01.05.06 Negative Energies and the Dirac Sea]] | Analyzed | medium | yes | yes | [[#N2271\|View]] |
| N2272 | [[01.06 The Klein Paradox\|01.06 The Klein Paradox]] | Analyzed | low | no | no | [[#N2272\|View]] |
| N2273 | [[01.06.01 Formulation\|01.06.01 Formulation]] | Analyzed | medium | yes | no | [[#N2273\|View]] |
| N2274 | [[01.06.02 Explicit Calculation\|01.06.02 Explicit Calculation]] | Analyzed | medium | yes | no | [[#N2274\|View]] |
| N2275 | [[01.06.03 The Klein Regime\|01.06.03 The Klein Regime]] | Analyzed | medium | no | no | [[#N2275\|View]] |
| N2276 | [[01.07 Limits of Relativistic Single-Particle Theory\|01.07 Limits of Relativistic Single-Particle Theory]] | Analyzed | low | no | no | [[#N2276\|View]] |
| N2277 | [[01.07.01 Nonlocality of Position\|01.07.01 Nonlocality of Position]] | Analyzed | medium | no | no | [[#N2277\|View]] |
| N2278 | [[01.07.02 Causality and the Propagator\|01.07.02 Causality and the Propagator]] | Analyzed | medium | yes | no | [[#N2278\|View]] |
| N2279 | [[01.07.03 Nonconservation of Particle Number\|01.07.03 Nonconservation of Particle Number]] | Analyzed | low | no | no | [[#N2279\|View]] |
| N2280 | [[01.08 Quantization of Fields\|01.08 Quantization of Fields]] | Analyzed | low | no | no | [[#N2280\|View]] |
| N2281 | [[01.08.01 From Particles to Fields\|01.08.01 From Particles to Fields]] | Analyzed | medium | no | no | [[#N2281\|View]] |
| N2282 | [[01.08.02 Fock Space\|01.08.02 Fock Space]] | Analyzed | low | no | no | [[#N2282\|View]] |
| N2283 | [[01.08.03 Antiparticles\|01.08.03 Antiparticles]] | Analyzed | low | no | no | [[#N2283\|View]] |
| N2284 | [[01.08.04 The Quantized Dirac Field\|01.08.04 The Quantized Dirac Field]] | Analyzed | medium | no | no | [[#N2284\|View]] |
| N2285 | [[01.09 A Brief History of Quantum Field Theory\|01.09 A Brief History of Quantum Field Theory]] | Analyzed | low | no | no | [[#N2285\|View]] |
| N2286 | [[01.09.01 The Beginnings (1925–1932)\|01.09.01 The Beginnings (1925–1932)]] | Analyzed | medium | no | no | [[#N2286\|View]] |
| N2287 | [[01.09.02 Infinities and Renormalization (1930–1950)\|01.09.02 Infinities and Renormalization (1930–1950)]] | Analyzed | medium | no | no | [[#N2287\|View]] |
| N2288 | [[01.09.03 Symmetries and Gauge Theories (1954–1973)\|01.09.03 Symmetries and Gauge Theories (1954–1973)]] | Analyzed | medium | yes | no | [[#N2288\|View]] |
| N2289 | [[01.09.04 The Standard Model and Beyond\|01.09.04 The Standard Model and Beyond]] | Analyzed | low | no | no | [[#N2289\|View]] |
| N2290 | [[01.10 The Lagrangian Formalism in Field Theory\|01.10 The Lagrangian Formalism in Field Theory]] | Analyzed | low | no | no | [[#N2290\|View]] |
| N2291 | [[01.10.01 Lagrangian Density and Action\|01.10.01 Lagrangian Density and Action]] | Analyzed | low | no | no | [[#N2291\|View]] |
| N2292 | [[01.10.02 Noether's Theorem\|01.10.02 Noether's Theorem]] | Analyzed | medium | no | no | [[#N2292\|View]] |
| N2293 | [[01.10.03 The Hamiltonian and Canonical Quantization\|01.10.03 The Hamiltonian and Canonical Quantization]] | Analyzed | low | no | no | [[#N2293\|View]] |
| N2294 | [[01.11 Conclusions\|01.11 Conclusions]] | Analyzed | medium | no | no | [[#N2294\|View]] |
| N2295 | [[01.12 Exercises\|01.12 Exercises/01.12 Exercises]] | Analyzed | low | no | no | [[#N2295\|View]] |
| N2296 | [[01.12.01 Natural units and conversions\|01.12 Exercises/01.12.01 Natural units and conversions]] | Analyzed | low | no | no | [[#N2296\|View]] |
| N2297 | [[01.12.02 Gamma-matrix properties\|01.12 Exercises/01.12.02 Gamma-matrix properties]] | Analyzed | low | no | no | [[#N2297\|View]] |
| N2298 | [[01.12.03 Negative mass squared and vacuum instability\|01.12 Exercises/01.12.03 Negative mass squared and vacuum instability]] | Analyzed | low | yes | no | [[#N2298\|View]] |
| N2299 | [[01.12.04 Dirac Noether current\|01.12 Exercises/01.12.04 Dirac Noether current]] | Analyzed | low | no | no | [[#N2299\|View]] |
| N2300 | [[01.12.05 Klein paradox\|01.12 Exercises/01.12.05 Klein paradox]] | Analyzed | medium | yes | no | [[#N2300\|View]] |
| N2301 | [[01.12.06 Scalar energy–momentum tensor\|01.12 Exercises/01.12.06 Scalar energy–momentum tensor]] | Analyzed | low | no | no | [[#N2301\|View]] |
| N2302 | [[01.12.07 Weyl spinors and chirality\|01.12 Exercises/01.12.07 Weyl spinors and chirality]] | Analyzed | low | no | yes | [[#N2302\|View]] |
| N2303 | [[01.12.08 Proca equation and the massless limit\|01.12 Exercises/01.12.08 Proca equation and the massless limit]] | Analyzed | low | no | no | [[#N2303\|View]] |

## Suggestions

### N2256

Note: [[01.01 Physical Motivations|01.01 Physical Motivations]]  
Priority: low · Graph: no · Manim: no

Correct and well-qualified motivation; the editorial meta-remarks about "the source" make it harder to read than needed.

- [Simplify] Replace "The source's broad claim of contradictions must be read with this scope" with a direct statement of the scope (free one-particle sectors are consistent; interactions with pair creation are not covered).
- [Example] Add one concrete threshold to make "enough invariant energy" tangible, for example $\gamma\gamma\to e^+e^-$ needs $\sqrt{s}\ge2\mechanical{m}_e\approx1.022\,\unit{MeV}$, or $e^+e^-\to\mu^+\mu^-$ needs $\sqrt{s}\ge2\mechanical{m}_\mu\approx211\,\unit{MeV}$.

### N2257

Note: [[01.02 Natural Units|01.02 Natural Units]]  
Priority: low · Graph: no · Manim: no

Conversions are correct ($1\,\unit{s}\approx1.52\times10^{24}\,\unit{GeV^{-1}}$, $1\,\unit{kg}\approx5.61\times10^{26}\,\unit{GeV}$, $\energy{\hbar}\mechanical{c}\approx197.3\,\unit{MeV\,fm}$) and the presentation is clear.

- [Example] Add a worked round trip: the muon width $\Gamma\approx3.0\times10^{-19}\,\unit{GeV}$ gives $\tau=\energy{\hbar}/\Gamma\approx2.2\,\unit{\mu s}$, showing how to restore $\energy{\hbar}$ when converting an inverse energy to seconds.
- [Simplify] Add a row "Cross section | $\unit{m^2}$ | $\unit{MeV^{-2}}$" with the handy conversion $1\,\unit{GeV^{-2}}\approx0.389\,\unit{mb}$, since the text already mentions areas.

### N2258

Note: [[01.02.01 Metric Convention|01.02.01 Metric Convention]]  
Priority: low · Graph: yes · Manim: no

Correct and concise statement of the $(+,-,-,-)$ convention with good rest-frame and massless checks.

- [Graph] Plot the mass-shell hyperbolas $\energy{E}=\pm\sqrt{p^2+\mechanical{m}^2}$ for $\mechanical{m}=1$ and the light-cone lines $\energy{E}=\pm|p|$ ($\mechanical{m}=0$) on $p\in[-3,3]$, to visualise the "rest frame" and "massless" checks in the last paragraph.
- [Example] Add a one-line numerical example of (1.4), e.g. $a=(2,1,0,0)$, $b=(1,1,1,0)$ gives $a\cdot b=2-1=1$, so the sign rule is seen in numbers.

### N2259

Note: [[01.03 Limits of Nonrelativistic Quantum Mechanics|01.03 Limits of Nonrelativistic Quantum Mechanics]]  
Priority: low · Graph: no · Manim: no

Short section hub with a clear guiding question and correct links.

- [Structure] No change needed beyond optionally listing the child note as a bullet like the other section hubs for consistency.

### N2260

Note: [[01.03.01 Covariance of the Schrödinger Equation|01.03.01 Covariance of the Schrödinger Equation]]  
Priority: medium · Graph: yes · Manim: no

Correct content, but the paragraph after (1.7) announces "at least two ways" without naming them and mixes in the nonrelativistic expansion, which breaks the flow.

- [Simplify] After (1.7), name the two routes explicitly (square the operator relation, giving Klein–Gordon; linearize it, giving Dirac) and move the low-momentum expansion into its own short paragraph with the formula $\energy{E}\approx\mechanical{m}+\mechanical{\mathbf p}^2/(2\mechanical{m})-\mechanical{\mathbf p}^4/(8\mechanical{m}^3)$.
- [Simplify] "Canonical quantization replaces $\energy{E}\to i\partial_0$" is the correspondence (first-quantization) rule, not canonical quantization of a field as used later in the chapter; rename it to avoid confusion with 01.08 and 01.10.03.
- [Graph] Plot $\energy{E}(p)=\sqrt{p^2+1}$ against its approximation $1+p^2/2$ for $p\in[0,2]$ (units $\mechanical{m}=1$), showing where the Schrödinger kinetic term fails.

### N2261

Note: [[01.04 The Klein–Gordon Equation|01.04 The Klein–Gordon Equation]]  
Priority: low · Graph: no · Manim: no

Clear section hub that separates covariance from the probability question.

- [Structure] No change needed.

### N2262

Note: [[01.04.01 Derivation|01.04.01 Derivation]]  
Priority: low · Graph: no · Manim: no

Correct and compact derivation of (1.9)–(1.11) with useful remarks on dimensions and initial data.

- [Simplify] "The two factors of $i$ in (1.9) produce a minus sign on each side" is imprecise: on the right only the $\nabla^2$ term changes sign; write the intermediate line $-\partial_t^2\signal{\psi}=(-\nabla^2+\mechanical{m}^2)\signal{\psi}$ explicitly.
- [Simplify] Introduce $\signal{\phi}$ once at (1.9) instead of switching from $\signal{\psi}$ to $\signal{\phi}$ between (1.10) and (1.11), which forces an extra explanatory sentence.

### N2263

Note: [[01.04.02 Plane-Wave Solutions|01.04.02 Plane-Wave Solutions]]  
Priority: medium · Graph: yes · Manim: no

Correct physics, but the retained source notation and several stray remarks (photon emission, "electron-emission model") obscure an otherwise simple note.

- [Correctness] In (1.14) and (1.15) the measure is $d^{3}\mechanical{k}$ while the integrand depends only on $\mechanical{\mathbf p}$, so the integrals are ill-formed as written; write $\int d^{3}\mechanical{p}/(2\pi)^3\,1/(2\energy{\omega}_{\mathbf p})$ and delete the explanatory callout.
- [Simplify] Remove or rewrite the sentences "The free equation alone does not describe photon emission" and "The scalar equation is also not an electron-emission model"; they refer to a source argument the reader never sees.
- [Simplify] Show the Jacobian step behind (1.15): $\delta(p^2-\mechanical{m}^2)\theta(p^0)=\delta(p^0-\energy{\omega}_{\mathbf p})/(2\energy{\omega}_{\mathbf p})$, instead of describing it in words.
- [Graph] Plot both branches $\energy{E}=\pm\sqrt{p^2+\mechanical{m}^2}$ for $\mechanical{m}=1$, $p\in[-3,3]$, with the gap $2\mechanical{m}$ marked, to show the two frequency branches of (1.13).

### N2264

Note: [[01.04.03 Negative Probabilities in the Klein–Gordon Equation|01.04.03 Negative Probabilities in the Klein–Gordon Equation]]  
Priority: low · Graph: yes · Manim: yes

Derivations (1.16)–(1.22) and the group-velocity example check out and are well explained.

- [Graph] Plot $\mechanical{v}_{\mathrm{phase}}=\sqrt{p^2+1}/p$ and $\mechanical{v}_{\mathrm{group}}=p/\sqrt{p^2+1}$ against $p/\mechanical{m}\in(0,5]$ with the line $v=1$, noting $\mechanical{v}_{\mathrm{phase}}\mechanical{v}_{\mathrm{group}}=1$.
- [Manim] Animate a 1D Klein–Gordon packet $\mathrm{Re}\,\signal{\phi}(t,x)$ with Gaussian $\signal{f}$, $\mechanical{m}=1$, $p_0=1$: crests visibly overtake the envelope, which moves at $p_0/\sqrt{p_0^2+1}\approx0.71$.
- [Intuition] Before (1.21), state the one-line shortcut $\signal{j}^{0}=2\,\mathrm{Re}(i\signal{\phi}^*\partial_t\signal{\phi})$ = $2\times$(frequency) for a single mode, so the sign follows immediately from the sign of the frequency.

### N2265

Note: [[01.05 The Dirac Equation|01.05 The Dirac Equation]]  
Priority: low · Graph: no · Manim: no

Clear section hub with a sensible reading order.

- [Structure] No change needed.

### N2266

Note: [[01.05.01 Dirac's Strategy|01.05.01 Dirac's Strategy]]  
Priority: low · Graph: no · Manim: no

The squaring argument (1.27)–(1.30) is correct and well motivated.

- [Intuition] Justify "the smallest matrices are $4\times4$" briefly: four mutually anticommuting matrices with square one are needed; tracelessness ($\mathrm{tr}\,\alpha^i=\mathrm{tr}(\beta^2\alpha^i)=-\mathrm{tr}\,\alpha^i$) and eigenvalues $\pm1$ force even dimension, and $2\times2$ has only the three Pauli matrices.
- [Example] Show the mixed-derivative cancellation explicitly for one pair, e.g. the $\partial_1\partial_2$ coefficient $-(\alpha^1\alpha^2+\alpha^2\alpha^1)$, to make (1.28) concrete.

### N2267

Note: [[01.05.02 Gamma Matrices and Clifford Algebra|01.05.02 Gamma Matrices and Clifford Algebra]]  
Priority: low · Graph: no · Manim: no

Correct and concise; the final "algebraic check" paragraph describes in words a two-line calculation that would be clearer as equations.

- [Simplify] Replace the last paragraph with $\not{p}\not{p}=\tfrac12\{\gamma^\mu,\gamma^\nu\}p_\mu p_\nu=p^2$ and $(\not{p}+\mechanical{m})(\not{p}-\mechanical{m})=p^2-\mechanical{m}^2$.
- [Simplify] Show how (1.32) follows from (1.26): multiply by $\beta$ and use $\gamma^i=\beta\alpha^i$; currently "Equation (1.26) then becomes" skips this step.

### N2268

Note: [[01.05.03 Dirac–Pauli Representation|01.05.03 Dirac–Pauli Representation]]  
Priority: low · Graph: no · Manim: no

Matrices (1.35)–(1.40) and the $\varepsilon$ sign convention in (1.38) are correct.

- [Example] Add the explicit block product giving (1.40): $\gamma^1\gamma^2\gamma^3$ in DP form and then $i\gamma^0\gamma^1\gamma^2\gamma^3$, so the reader can "verify the displayed square and anticommutator" as the note asks.
- [Structure] Add the Weyl (chiral) representation for comparison ($\gamma^0$ off-diagonal, $\gamma^5=\mathrm{diag}(-1,1)$), since the note mentions it and the chirality remark is easier to see there.

### N2269

Note: [[01.05.04 Plane-Wave Solutions and Spinors|01.05.04 Plane-Wave Solutions and Spinors]]  
Priority: low · Graph: no · Manim: no

Spinors, normalizations, and completeness relations are correct; the negative-energy part states its defining equation only in words.

- [Simplify] Write the defining equation $(\not{p}+\mechanical{m})\signal{v}(\mechanical{\mathbf p})=0$ explicitly before (1.47) instead of "the corresponding algebraic equation has the plus mass sign".
- [Example] Derive $\overline{\signal{u}}\signal{u}=2\mechanical{m}$ in two lines from (1.46): $(\energy{E}+\mechanical{m})[1-\mechanical{\mathbf p}^2/(\energy{E}+\mechanical{m})^2]=2\mechanical{m}$, which also explains the $\sqrt{\energy{E}+\mechanical{m}}$ prefactor.
- [Example] Add a check of the completeness relation at rest: $\sum_s u\bar u=\mechanical{m}(1+\gamma^0)=\mathrm{diag}(2\mechanical{m},2\mechanical{m},0,0)$.

### N2270

Note: [[01.05.05 Probability Current of the Dirac Equation|01.05.05 Probability Current of the Dirac Equation]]  
Priority: low · Graph: no · Manim: no

Correct derivation of the conserved current; the key step is given in prose only.

- [Simplify] Show the two-line derivation: $\overline{\signal{\psi}}(i\gamma^\mu\partial_\mu\signal{\psi})=\mechanical{m}\overline{\signal{\psi}}\signal{\psi}$ and $(-i\partial_\mu\overline{\signal{\psi}}\gamma^\mu)\signal{\psi}=\mechanical{m}\overline{\signal{\psi}}\signal{\psi}$; subtracting gives (1.49).
- [Simplify] Derive (1.48) from (1.32) in one line (Hermitian conjugate and $\gamma^0\gamma^{\mu\dagger}\gamma^0=\gamma^\mu$) instead of only quoting it.

### N2271

Note: [[01.05.06 Negative Energies and the Dirac Sea|01.05.06 Negative Energies and the Dirac Sea]]  
Priority: medium · Graph: yes · Manim: yes

Correct and carefully qualified (threshold, minimal-coupling sign, Pauli limit), but long and the Dirac-sea picture would benefit from a visual.

- [Graph] Plot the Dirac spectrum $\energy{E}=\pm\sqrt{p^2+\mechanical{m}^2}$ ($\mechanical{m}=1$, $p\in[-3,3]$) with the lower continuum shaded as "filled sea" and the gap $2\mechanical{m}$ marked.
- [Manim] Animate pair creation in the sea picture: an occupied level below $-\mechanical{m}$ absorbs energy $>2\mechanical{m}$ (with a nucleus taking recoil), the electron jumps above $+\mechanical{m}$, and the hole drifts as a positive charge in an applied field.
- [Simplify] In Example 1.2, show the intermediate step $(\boldsymbol{\sigma}\cdot\boldsymbol{\pi})^2=\boldsymbol{\pi}^2-\electric{e}\boldsymbol{\sigma}\cdot\magnetic{\mathbf B}$ with $\boldsymbol{\pi}=\mechanical{\mathbf p}-\electric{e}\magnetic{\mathbf A}$; this is where the spin term in (1.52) comes from and it is currently skipped.
- [Example] Quote the current experimental value $\magnetic{g}_e/2=1.00115965218\ldots$ (CODATA) instead of "the source gives", to keep the benchmark explicit and current.

### N2272

Note: [[01.06 The Klein Paradox|01.06 The Klein Paradox]]  
Priority: low · Graph: no · Manim: no

Clear hub that already warns about the boundary condition in Region II.

- [Structure] No change needed.

### N2273

Note: [[01.06.01 Formulation|01.06.01 Formulation]]  
Priority: medium · Graph: yes · Manim: no

Clear setup with a good schematic, but the figure caption contradicts the signed-flux result derived two notes later.

- [Correctness] The caption of Fig. 1.1 says the particle penetrates "with a transmission coefficient that exceeds the classical value", but with the retained momentum choice 01.06.03 finds $\signal{T}<0$ (Eq. 1.62); rephrase to "Region II supports propagating negative-frequency modes; see 01.06.03 for the sign of the transmitted flux".
- [Graph] Add a band diagram: in Region II shade the allowed bands $\energy{E}>\energy{V}_0+\mechanical{m}$ and $\energy{E}<\energy{V}_0-\mechanical{m}$, in Region I the bands $|\energy{E}|>\mechanical{m}$, with the incident energy line, so the overlap that defines the Klein regime is visible; this replaces the verbal "positive and negative rest-energy edges" paragraph.
- [Simplify] Shorten the paragraph about the external potential ("imposed, time-independent... backreaction") to one sentence; the details distract from the setup.

### N2274

Note: [[01.06.02 Explicit Calculation|01.06.02 Explicit Calculation]]  
Priority: medium · Graph: yes · Manim: no

Matching (1.59)–(1.61) and $\signal{R}+\signal{T}=1$ are correct, but the spinor form (1.56) depends on an unstated 1+1 gamma representation.

- [Simplify] State the representation used, e.g. $\gamma^0=\sigma^3$, $\gamma^1=i\sigma^2$ (so $\alpha=\sigma^1$ and $\signal{j}^x=\signal{\psi}^\dagger\sigma^1\signal{\psi}=2q|\text{amp}|^2$), so the reader can verify (1.56) and the current factor $q_2/q_1$ in $\signal{T}$.
- [Graph] Plot $\signal{R}$ and $\signal{T}$ against $\energy{V}_0/\mechanical{m}\in[0,6]$ for $\energy{E}=1.5\mechanical{m}$, with the evanescent interval $[0.5,2.5]$ shaded ($\signal{R}=1$, $\signal{T}=0$) and the Klein regime $\energy{V}_0>2.5\mechanical{m}$ showing $\signal{R}>1$, $\signal{T}<0$.
- [Simplify] Show the one-line algebra $(q_1-q_2)^2+4q_1q_2=(q_1+q_2)^2$ instead of "expanding the numerators gives".

### N2275

Note: [[01.06.03 The Klein Regime|01.06.03 The Klein Regime]]  
Priority: medium · Graph: no · Manim: no

Numbers in Example 1.3 check out ($\signal{R}\approx3.34$, $\signal{T}\approx-2.34$), and the boundary-condition caveat is correct but stated only abstractly.

- [Example] Complete Example 1.3 with the physical boundary choice $\mechanical{k}_2\to-\mechanical{k}_2$ (rightward group velocity): then $q_2\approx+1.528$, $\signal{R}=((0.447-1.528)/1.975)^2\approx0.30$, $\signal{T}\approx0.70$, so the reader sees how the "paradox" depends on the boundary condition.
- [Simplify] Give the group velocity formula explicitly in the callout: $v_2=\partial\energy{E}/\partial\mechanical{k}_2=\mechanical{k}_2/(\energy{E}-\energy{V}_0)<0$ for $\energy{E}-\energy{V}_0<-\mechanical{m}$.
- [Simplify] Minor rounding: $4\times0.447\times(-1.527)=-2.733$, not $-2.730$; the final $\signal{T}\approx-2.34$ is unaffected.

### N2276

Note: [[01.07 Limits of Relativistic Single-Particle Theory|01.07 Limits of Relativistic Single-Particle Theory]]  
Priority: low · Graph: no · Manim: no

Clear hub that frames the three limitations correctly.

- [Structure] No change needed.

### N2277

Note: [[01.07.01 Nonlocality of Position|01.07.01 Nonlocality of Position]]  
Priority: medium · Graph: no · Manim: no

Physically careful but dominated by caveats about the source's Newton–Wigner claims, so the main message (Compton scale sets where pair creation matters) is buried.

- [Simplify] Lead with the physical statement (probing distances below $1/\mechanical{m}$ needs momentum transfer $\gtrsim\mechanical{m}$, which opens pair creation) and move the Newton–Wigner qualification into a shorter footnote-style callout.
- [Example] Add numbers: $\signal{\bar\lambda}_{\mathrm C}=\energy{\hbar}\mechanical{c}/(\mechanical{m}\mechanical{c}^2)$ is $386\,\unit{fm}$ for the electron and $0.21\,\unit{fm}$ for the proton, compared with the Bohr radius $5.3\times10^4\,\unit{fm}$.

### N2278

Note: [[01.07.02 Causality and the Propagator|01.07.02 Causality and the Propagator]]  
Priority: medium · Graph: yes · Manim: no

Correct, but the relativistic part is described only in words; the key formula and the cancellation are never shown.

- [Intuition] Point out that the modulus squared in (1.63) equals $(\mechanical{m}/(2\pi\mechanical{t}))^3$, independent of $|\mechanical{\mathbf y}-\mechanical{\mathbf x}|$: the kernel is spread uniformly over all space at any $t>0$, which makes the acausality striking.
- [Example] Add the relativistic amplitude at spacelike separation, $D(r)=\langle0|\signal{\hat\phi}(x)\signal{\hat\phi}(y)|0\rangle=\mechanical{m}K_1(\mechanical{m}r)/(4\pi^2r)\sim e^{-\mechanical{m}r}$, and state that $[\signal{\hat\phi}(x),\signal{\hat\phi}(y)]=D(x-y)-D(y-x)=0$ there because $x-y$ can be boosted to $y-x$.
- [Graph] Plot $4\pi^2D(r)/\mechanical{m}^2=K_1(\mechanical{m}r)/(\mechanical{m}r)$ for $\mechanical{m}r\in[0.2,5]$ to show the nonzero but exponentially decaying amplitude outside the light cone.

### N2279

Note: [[01.07.03 Nonconservation of Particle Number|01.07.03 Nonconservation of Particle Number]]  
Priority: low · Graph: no · Manim: no

Short, correct, and appropriately qualified.

- [Example] Add one concrete reaction with its threshold, e.g. $pp\to pp\pi^0$ requires $\sqrt{s}\ge2\mechanical{m}_p+\mechanical{m}_{\pi^0}\approx2.01\,\unit{GeV}$, to illustrate "available center-of-momentum energy determines the allowed channels".

### N2280

Note: [[01.08 Quantization of Fields|01.08 Quantization of Fields]]  
Priority: low · Graph: no · Manim: no

Clear section hub with a good motivation for the reading order.

- [Structure] No change needed.

### N2281

Note: [[01.08.01 From Particles to Fields|01.08.01 From Particles to Fields]]  
Priority: medium · Graph: no · Manim: no

Correct overview of the ladder-operator construction, but the oscillator picture it invokes is never shown.

- [Correctness] In (1.64) the measure is $d^{3}\mechanical{k}$ but the integrand depends on $\mechanical{\mathbf p}$; as written the integral is ill-formed; use $d^{3}\mechanical{p}$ and drop the callout.
- [Intuition] Show the oscillator connection in one line: each Fourier mode obeys $\ddot{\tilde\phi}_{\mathbf p}+\energy{\omega}_{\mathbf p}^2\tilde\phi_{\mathbf p}=0$, so $\hat a,\hat a^\dagger$ are the familiar ladder operators of that oscillator.
- [Simplify] Derive $b=a$ explicitly by writing $\signal{\phi}^*$ from (1.14) and comparing coefficients of $e^{-ip\cdot x}$.

### N2282

Note: [[01.08.02 Fock Space|01.08.02 Fock Space]]  
Priority: low · Graph: no · Manim: no

Clear and correct description of Fock space and the number operator.

- [Correctness] In (1.68) the measure $d^{3}\mechanical{k}$ does not match the integration variable $\mechanical{\mathbf p}$ in the integrand; write $d^{3}\mechanical{p}$.
- [Example] Add a concrete superposition, e.g. $(|0\rangle+|\mathbf p\rangle/\sqrt{\langle\mathbf p|\mathbf p\rangle})/\sqrt2$ (or a box-normalized version), and its number-measurement probabilities, to illustrate "components in several sectors".
- [Simplify] Write the commutator $[\hat N,\hat a^\dagger(\mathbf q)]=\hat a^\dagger(\mathbf q)$ as an equation instead of describing it in the last paragraph.

### N2283

Note: [[01.08.03 Antiparticles|01.08.03 Antiparticles]]  
Priority: low · Graph: no · Manim: no

Correct and concise; the normal-ordering step that produces the minus sign in (1.70) is not shown.

- [Correctness] In (1.69) and (1.70) the measure $d^{3}\mechanical{k}$ does not match the integrand variable $\mechanical{\mathbf p}$; write $d^{3}\mechanical{p}$.
- [Simplify] Show briefly that before normal ordering the $b$ term is $-\hat b\hat b^\dagger$ and that reordering gives $-\hat b^\dagger\hat b$ plus an infinite constant removed by normal ordering, so the origin of the minus sign is visible.

### N2284

Note: [[01.08.04 The Quantized Dirac Field|01.08.04 The Quantized Dirac Field]]  
Priority: medium · Graph: no · Manim: no

The formulas and normalization (1.71) are correct and consistent with Tong, but the opening paragraph on why anticommutators are needed is a tangle of hedges that obscures the main idea.

- [Simplify] Rewrite the second paragraph as two clear claims: (i) fermion fields anticommute at spacelike separation while bilinear observables such as $\overline{\psi}\gamma^\mu\psi$ still commute, so causality is preserved; (ii) quantizing with commutators instead gives a Hamiltonian unbounded below (spin–statistics), which is the real reason; drop "The source relates this requirement...".
- [Example] Turn the exclusion paragraph into a displayed check, $(\hat a^{(s)\dagger}(\mathbf p))^2=\tfrac12\{\hat a^{(s)\dagger}(\mathbf p),\hat a^{(s)\dagger}(\mathbf p)\}=0$, instead of the prose description.
- [Structure] Show briefly that (1.71) with the stated mode anticommutators and $\sum_s u^{(s)}u^{(s)\dagger}$, $\sum_s v^{(s)}v^{(s)\dagger}$ reproduces the equal-time anticommutator (1.85); this is the natural consistency check behind the normalization note.
- [Intuition] Add a small table "operator / acts on / charge change" ($\hat a$ removes an electron, $\hat b^\dagger$ adds a positron, both lower $Q$ by one) to make the antiparticle reinterpretation of the $v\,e^{+ip\cdot x}$ term concrete.

### N2285

Note: [[01.09 A Brief History of Quantum Field Theory|01.09 A Brief History of Quantum Field Theory]]  
Priority: low · Graph: no · Manim: no

A short, clear hub with correct links to its four subnotes.

- [Structure] No change needed; optionally add the date range next to each link so the hub doubles as a timeline.

### N2286

Note: [[01.09.01 The Beginnings (1925–1932)|01.09.01 The Beginnings (1925–1932)]]  
Priority: medium · Graph: no · Manim: no

Readable chronology, but the attribution of ladder operators to Born and Jordan in 1925 is historically inaccurate and the first field quantization and fermion quantization are missing.

- [Correctness] "In 1925, Born and Jordan showed that the quantized harmonic oscillator ... could be described with creation and annihilation operators" is misattributed: Born–Jordan (1925) established the matrix-mechanics commutator; the first field quantization (a vibrating string as a set of oscillators) is the Born–Heisenberg–Jordan paper (1926), and creation/annihilation operators for the radiation field were introduced by Dirac (1927).
- [Structure] Add Jordan–Wigner (1928) anticommutator quantization of fermion fields; it is the historical origin of the anticommutation relations used in [[01.08.04 The Quantized Dirac Field]].
- [Simplify] After "implicitly, antiparticles" add the actual steps: Dirac's hole theory (1930) and the explicit anti-electron proposal (1931), so the reader sees that the 1928 equation alone did not announce the positron.
- [Simplify] The final paragraph ("A useful reading check...") is meta-commentary; replace it with one sentence on how Anderson identified the positron (curvature sign in a known field plus energy loss in a lead plate fixing the direction of motion).

### N2287

Note: [[01.09.02 Infinities and Renormalization (1930–1950)|01.09.02 Infinities and Renormalization (1930–1950)]]  
Priority: medium · Graph: no · Manim: no

Correct historical outline and correct two-term value of $a_e$ (checked numerically, $\approx0.0011596$), but renormalization stays abstract and no actual experimental numbers are given.

- [Example] Give the actual numbers: measured Lamb shift $\approx1058\,\mathrm{MHz}$ (Lamb–Retherford 1947) versus Bethe's nonrelativistic estimate $\approx1040\,\mathrm{MHz}$, which makes "close agreement" concrete.
- [Example] Replace "more than ten significant figures" (source-era wording) with current values, e.g. $a_e^{\mathrm{exp}}=0.00115965218059(13)$ (Fan et al. 2023), and note that the comparison now tests independent determinations of $\alpha$.
- [Intuition] Add a two-sentence toy illustration: a cutoff-dependent bare mass $m_0(\Lambda)$ plus a $\log\Lambda$ self-energy combine into the finite measured mass $m$, so predictions written in terms of $m$ are independent of $\Lambda$.
- [Simplify] The paragraph "As a simple check..." mixes three unrelated remarks; keep the $\alpha\to0$ limit giving $g=2$ and move the warning about consistent parameter definitions next to the renormalization paragraph.

### N2288

Note: [[01.09.03 Symmetries and Gauge Theories (1954–1973)|01.09.03 Symmetries and Gauge Theories (1954–1973)]]  
Priority: medium · Graph: yes · Manim: no

Historically sound and carefully hedged, but it omits the 't Hooft–Veltman renormalizability proof it relies on and blurs predicted versus measured boson masses.

- [Structure] Add 't Hooft and Veltman (1971–72), who proved the renormalizability of spontaneously broken Yang–Mills theories (Nobel 1999); the statement "retains renormalizability" needs this milestone.
- [Structure] Separate prediction from measurement: the quoted 80 and 91 GeV are essentially the measured values ($m_W\approx80.4$, $m_Z\approx91.19\,\mathrm{GeV}$); state the structural prediction $m_W=m_Z\cos\theta_W$ and that pre-1983 estimates depended on the then-measured $\sin^2\theta_W$.
- [Graph] Plot the one-loop QCD coupling $\alpha_s(Q)=12\pi/[(33-2n_f)\ln(Q^2/\Lambda^2)]$ with $n_f=5$, $\Lambda\approx0.09\,\mathrm{GeV}$ (chosen so $\alpha_s(m_Z)\approx0.118$), for $Q$ from 2 to 1000 GeV on a log axis, marking $\alpha_s(m_Z)$, to illustrate asymptotic freedom.
- [Simplify] Reduce the second paragraph's gluon digression to one sentence: gluons are massless in the Lagrangian, and the short range of the strong force comes from confinement, not from a mass term.

### N2289

Note: [[01.09.04 The Standard Model and Beyond|01.09.04 The Standard Model and Beyond]]  
Priority: low · Graph: no · Manim: no

Clear and correct overview; the list of open problems omits the one experimentally established departure from the minimal Standard Model.

- [Structure] Add neutrino masses (established by oscillations, Nobel 2015) to the open questions; unlike the listed theoretical extensions, this is observed physics beyond the minimal Standard Model.
- [Example] Give the measured Higgs mass ($\approx125\,\mathrm{GeV}$) and the relation $Q=T_3+Y$ to make "one electromagnetic combination unbroken" concrete.
- [Simplify] Replace the closing "reconstruction prompt" with a direct statement; as written it reads like an instruction rather than content.

### N2290

Note: [[01.10 The Lagrangian Formalism in Field Theory|01.10 The Lagrangian Formalism in Field Theory]]  
Priority: low · Graph: no · Manim: no

A concise hub with correct links and a sensible reading order.

- [Structure] No change needed.

### N2291

Note: [[01.10.01 Lagrangian Density and Action|01.10.01 Lagrangian Density and Action]]  
Priority: low · Graph: no · Manim: no

Correct and compact; the variation is described in words where a three-line displayed derivation would be clearer.

- [Simplify] Replace the prose description of the variation with the displayed steps $\delta S=\int d^4x\,[\partial\mathcal L/\partial\phi\,\delta\phi+\partial\mathcal L/\partial(\partial_\mu\phi)\,\partial_\mu\delta\phi]$, the integration by parts, and the vanishing surface term.
- [Example] Show the scalar substitution explicitly ($\partial\mathcal L/\partial\phi=-m^2\phi$, $\partial\mathcal L/\partial(\partial_\mu\phi)=\partial^\mu\phi$, giving $(\square+m^2)\phi=0$) instead of describing it in words; it currently only appears in 01.10.03.
- [Intuition] Add one sentence on why varying $\psi$ and $\overline\psi$ independently is legitimate (equivalent to varying real and imaginary parts), and show that varying $\overline\psi$ gives the Dirac equation in one line.

### N2292

Note: [[01.10.02 Noether's Theorem|01.10.02 Noether's Theorem]]  
Priority: medium · Graph: no · Manim: no

The current (1.79) and tensor (1.80) are correct, but the note is cluttered by retaining the source's wrong momentum-space integrals next to their corrections, and the derivation of the current is only described.

- [Simplify] Remove the two retained source formulas with $\int d^3k/(2\pi)^3$ and the $\mathbf k$ table row; keep only the correct $d^3x$ integrals and a one-line footnote that the source misprints the measure.
- [Structure] Display the two-line derivation: $\delta\mathcal L=\partial_\mu[\partial\mathcal L/\partial(\partial_\mu\phi)\,\delta\phi]$ on shell, compare with $\partial_\mu K^\mu$, hence $\partial_\mu j^\mu=0$; then $dQ/dt=-\oint\mathbf j\cdot d\mathbf S=0$.
- [Example] Work the complex-scalar example explicitly: $\delta\phi=i\phi$, $j^\mu=i(\phi^*\partial^\mu\phi-\phi\,\partial^\mu\phi^*)$ (up to sign convention), so the "charge" bullet has a formula.
- [Example] For (1.80) give $T^{00}=\tfrac12\dot\phi^2+\tfrac12(\nabla\phi)^2+\tfrac12m^2\phi^2$ and link to [[01.12.06 Scalar energy–momentum tensor]], so the energy interpretation is visible here.

### N2293

Note: [[01.10.03 The Hamiltonian and Canonical Quantization|01.10.03 The Hamiltonian and Canonical Quantization]]  
Priority: low · Graph: no · Manim: no

Correct and well checked (signs, dimensions of the delta function), with a clear worked example.

- [Intuition] Add the discrete analogy $[q_i,p_j]=i\delta_{ij}\to[\phi(\mathbf x),\pi(\mathbf y)]=i\delta^{(3)}(\mathbf x-\mathbf y)$ via a lattice with $\phi_i=\phi(\mathbf x_i)$, $p_i=a^3\pi(\mathbf x_i)$; this explains where the delta function comes from.
- [Simplify] Move Example 1.4 before the quantization section or point out that it duplicates 01.10.01; as placed it interrupts the Hamiltonian-to-quantization flow.
- [Structure] For the Dirac case, mention in one line that $\pi_\psi=i\psi^\dagger$, which is why (1.85) pairs $\psi$ with $\psi^\dagger$ rather than with a time derivative.

### N2294

Note: [[01.11 Conclusions|01.11 Conclusions]]  
Priority: medium · Graph: no · Manim: no

The physics is correct but several sentences are cryptic one-liners whose referents (Klein step, flux choice) are not named, and the chapter pointers lack links.

- [Simplify] Rewrite the first paragraph as a three-item list naming each problem and its note: Klein–Gordon density not positive, Dirac negative-energy branch, Klein paradox (signed flux ratios); "A strong step also requires a correct incoming/outgoing flux choice" is unintelligible without that context.
- [Links] Link the chapter pointers: Chapter 3 to the scalar-quantization folder hub, Chapter 4 to the Dirac-field hub, Chapters 8 and 12 to the QED and Non-Abelian Gauge Theories hubs, and "Appendix D" to the exercise index [[01.12 Exercises]].
- [Simplify] Replace the "reconstruct three checks" paragraph with short answers or drop it; as written it is an unanswered quiz in a conclusions note.

### N2295

Note: [[01.12 Exercises|01.12 Exercises]]  
Priority: low · Graph: no · Manim: no

A clear exercise index with correct links and a useful suggested order.

- [Structure] No change needed; the "Source solutions" section repeats the introduction and could be merged into one short paragraph.

### N2296

Note: [[01.12.01 Natural units and conversions|01.12.01 Natural units and conversions]]  
Priority: low · Graph: no · Manim: no

Clear and numerically correct except for one rounding inconsistency in part (c).

- [Correctness] Part (c): with the stated inputs $1.0546\times10^{-34}$, $2.998\times10^{8}$ and $1.602\times10^{-13}$ the result is $197.36\approx197.4\,\mathrm{MeV\,fm}$, not $197.3$; use $1.602177\times10^{-13}\,\mathrm{J/MeV}$ (and $\hbar=1.054572\times10^{-34}\,\mathrm{J\,s}$) to obtain $197.33\,\mathrm{MeV\,fm}$.
- [Example] Add the CMB peak photon energy for contrast with part (d): $E_{\mathrm{peak}}\approx2.82\,k_BT\approx0.66\,\mathrm{meV}$, which concretely illustrates the remark that $k_BT$ is not the peak energy.

### N2297

Note: [[01.12.02 Gamma-matrix properties|01.12.02 Gamma-matrix properties]]  
Priority: low · Graph: no · Manim: no

All identities and traces are correct (checked, including the time–space sign check of the four-gamma trace); only the three-slash case is sketched rather than derived.

- [Simplify] Part (a), two-slash step: delete the unused phrase "take the matrix product $A=\gamma^\nu\gamma^\rho$".
- [Structure] Write out the three-slash derivation like the two-slash one: $\gamma^\mu\gamma^\nu\gamma^\rho\gamma^\sigma\gamma_\mu=2\gamma^\rho\gamma^\sigma\gamma^\nu-\gamma^\nu(4g^{\rho\sigma})$, then use $\gamma^\rho\gamma^\sigma=2g^{\rho\sigma}-\gamma^\sigma\gamma^\rho$ to reach $-2\gamma^\sigma\gamma^\rho\gamma^\nu$; "repeating the preceding steps" skips the only nontrivial case.
- [Intuition] In part (b), note that the $\gamma^5$ trick needs $(\gamma^5)^2=1$ and $\{\gamma^5,\gamma^\mu\}=0$, which exist only in even dimension; this ties into the closing remark about noninteger-dimensional regulators.

### N2298

Note: [[01.12.03 Negative mass squared and vacuum instability|01.12.03 Negative mass squared and vacuum instability]]  
Priority: low · Graph: yes · Manim: no

Correct throughout (dispersion relation, $v^2=6\lambda^2/\lambda_4$ and $m_\eta^2=2\lambda^2$ verified) and clearly organized.

- [Graph] Two-panel 2D plot: left, $V(\phi)=-\tfrac12\lambda^2\phi^2+\tfrac{\lambda_4}{24}\phi^4$ with $\lambda=1$, $\lambda_4=1$ for $\phi\in[-4,4]$, the pure $-\tfrac12\phi^2$ curve dashed, minima at $\pm\sqrt6$ marked; right, $E^2(|\mathbf p|)=|\mathbf p|^2-\lambda^2$ and the growth rate $\Omega=\sqrt{\lambda^2-|\mathbf p|^2}$ for $|\mathbf p|\in[0,2\lambda]$.
- [Simplify] The letters $\lambda$ (instability mass scale) and $\lambda_4$ (dimensionless quartic coupling) are easy to confuse; rename the mass scale (for example $\mu^2=-\kappa^2$) or state the distinction in the text, not only in the table.
- [Simplify] In (b) shorten the zero-frequency sentence to "at $|\mathbf p|=\lambda$ the solutions are $A+Bt$".

### N2299

Note: [[01.12.04 Dirac Noether current|01.12.04 Dirac Noether current]]  
Priority: low · Graph: no · Manim: no

Correct derivation (canonical sign, divergence check and charge eigenvalues verified), but the sign-convention discussion in (a) is wordy and (c) skips the key step.

- [Simplify] In (a) replace the two sentences about "changing the direction of the group parameter" with: Noether's theorem fixes $j^\mu$ only up to a constant factor; choose $j^\mu=-j^\mu_{\mathrm{can}}=\overline\psi\gamma^\mu\psi$ so that $j^0=\psi^\dagger\psi\ge0$.
- [Structure] In (c) show the intermediate step: insert (1.71) into $\int d^3x\,\psi^\dagger\psi$, use the spinor orthogonality relations, and normal order with the anticommutator, which is what produces the $-b^\dagger b$ term; it is currently implicit.

### N2300

Note: [[01.12.05 Klein paradox|01.12.05 Klein paradox]]  
Priority: medium · Graph: yes · Manim: no

The numbers are correct ($q_1\approx0.447$, $R\to6.85$, $T\to-5.85$ and the threshold limit $R\to1$ verified), but part (a) asks for a sketch that the note never shows and part (d) is hard to follow.

- [Graph] Plot $R$ and $T$ against $V_0/m\in[0,20]$ at $E=1.5m$ using $R=((q_1-q_2)/(q_1+q_2))^2$, $T=4q_1q_2/(q_1+q_2)^2$, $q_2=k_2/(E-V_0+m)$, with $R=1$, $T=0$ on $0.5<V_0/m<2.5$, shaded regions, and dashed asymptotes $6.85$ and $-5.85$ (check values: $V_0=3m$ gives $R=2.25$, $T=-1.25$; $V_0=5m$ gives $R=4$, $T=-3$).
- [Structure] Display the general formulas for $R$ and $T$ in terms of $q_1,q_2$ at the start of the solution (or link [[01.06.02 Explicit Calculation]]); part (b) uses them without stating them.
- [Simplify] Shorten (d): in the Klein regime the transmitted wave lies in the shifted negative-energy continuum, so with the right-moving-momentum choice its group velocity points left; in field theory the step emits pairs, with antiparticles moving away from the step in Region II; drop the repeated caveats.

### N2301

Note: [[01.12.06 Scalar energy–momentum tensor|01.12.06 Scalar energy–momentum tensor]]  
Priority: low · Graph: no · Manim: no

Correct components and plane-wave result ($P^\mu=2\omega_{\mathbf p}|a|^2Vp^\mu$ re-derived), though the four-vector discussion is longer than needed.

- [Structure] In (d) show the averaging step: $\langle\dot\phi^2\rangle=2\omega^2|a|^2$, $\langle(\nabla\phi)^2\rangle=2|\mathbf p|^2|a|^2$, $\langle m^2\phi^2\rangle=2m^2|a|^2$, hence $\langle T^{00}\rangle=2\omega^2|a|^2$; the result currently appears without intermediate lines.
- [Simplify] Condense the hypersurface paragraph to two sentences; it repeats the finite-box caveat stated just above.
- [Simplify] Reduce the retained momentum-space measure in the exercise statement to a footnote, since the solution and the theory note already use $d^3x$.

### N2302

Note: [[01.12.07 Weyl spinors and chirality|01.12.07 Weyl spinors and chirality]]  
Priority: low · Graph: no · Manim: yes

Correct Weyl decomposition and helicity calculation (signs verified against the $\sigma^\mu$, $\bar\sigma^\mu$ convention), clearly written.

- [Correctness] Physical-quantities table: $E$ is described as "Incident energy", but there is no scattering here; it is the positive energy of the massless plane-wave mode.
- [Manim] Animate the helicity-flip thought experiment from (c): a massive particle with momentum and spin arrows, then a boost to an observer overtaking it so the momentum arrow reverses while the spin arrow stays; contrast with a massless particle moving at $c$, which cannot be overtaken.
- [Intuition] In (d) add the concrete Wu observation (electrons emitted preferentially opposite to the cobalt-60 nuclear spin) to connect the chirality statement to a measured asymmetry.

### N2303

Note: [[01.12.08 Proca equation and the massless limit|01.12.08 Proca equation and the massless limit]]  
Priority: low · Graph: no · Manim: no

Correct derivation and degree-of-freedom count; the closing paragraph partly repeats part (d).

- [Structure] Add the gauge function $\alpha$ in $A_\mu\to A_\mu+\partial_\mu\alpha$ to the physical-quantities table, noting it is not the fine-structure constant.
- [Example] Give the massive polarization vectors explicitly: transverse $\epsilon^\mu=(0,\hat e_{1,2})$ and longitudinal $\epsilon_L^\mu=(|\mathbf k|,0,0,\omega)/m$ for momentum along $z$; the growth $\epsilon_L\approx k^\mu/m$ shows why the massless limit is subtle.
- [Simplify] Merge the final rest-frame paragraph into (d); it restates the counting argument.
