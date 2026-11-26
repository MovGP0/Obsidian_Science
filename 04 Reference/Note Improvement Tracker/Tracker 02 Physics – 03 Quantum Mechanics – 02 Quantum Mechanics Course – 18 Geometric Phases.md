---
title: "Note Improvement Tracker – 02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/18 Geometric Phases"
---

> [!TLDR]
> This note tracks the review of the 9 notes in `02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/18 Geometric Phases`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 1 possible errors or notation conflicts. 1 of them are verified (1 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N2189|N2189]] 18.07 Generalizations and Outlook: The sentence "\[\[19.00 Bands in Periodic Potentials|Bands in Periodic Potentials\]\] applies Berry curvature to the Brillouin zone…" is wrong: no note in chapter 19 mentions Berry curvature, the anomalous velocity, or Chern numbers (grep finds no "Berry" in that folder); rephrase it as an outlook beyond the course or link to a note that actually covers it. **Fixed:** Rephrased as an outlook beyond the course and kept the link only as the place where crystal bands are introduced

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2182 | [[18.00 Geometric Phases\|18.00 Geometric Phases]] | Analyzed | low | no | no | [[#N2182\|View]] |
| N2183 | [[18.01 Adiabatic Theorem\|18.01 Adiabatic Theorem]] | Analyzed | medium | yes | yes | [[#N2183\|View]] |
| N2184 | [[18.02 Dynamical and Geometric Phases\|18.02 Dynamical and Geometric Phases]] | Analyzed | low | no | no | [[#N2184\|View]] |
| N2185 | [[18.03 Berry Phase Along Closed Paths\|18.03 Berry Phase Along Closed Paths]] | Analyzed | low | no | no | [[#N2185\|View]] |
| N2186 | [[18.04 Spin ½ in a Rotating Magnetic Field\|18.04 Spin ½ in a Rotating Magnetic Field]] | Analyzed | low | no | yes | [[#N2186\|View]] |
| N2187 | [[18.05 Aharonov–Bohm Effect\|18.05 Aharonov–Bohm Effect]] | Analyzed | low | yes | no | [[#N2187\|View]] |
| N2188 | [[18.06 Topological Significance and Flux Quantization\|18.06 Topological Significance and Flux Quantization]] | Analyzed | low | no | no | [[#N2188\|View]] |
| N2189 | [[18.07 Generalizations and Outlook\|18.07 Generalizations and Outlook]] | Analyzed | low | no | no | [[#N2189\|View]] |
| N2190 | [[18.08 Geometric Phases Exercises\|18.08 Geometric Phases Exercises]] | Analyzed | low | no | no | [[#N2190\|View]] |

## Suggestions

### N2182

Note: [[18.00 Geometric Phases|18.00 Geometric Phases]]  
Priority: low · Graph: no · Manim: no

Clear chapter hub with an accurate summary of the Berry and Aharonov–Bohm results.

- [Links] Link the summary bullets to \[\[18.01 Adiabatic Theorem\]\], \[\[18.03 Berry Phase Along Closed Paths\]\], \[\[18.04 Spin ½ in a Rotating Magnetic Field\]\] and \[\[18.05 Aharonov–Bohm Effect\]\]; the table lists $\magnetic\Phi_0$, which the summary never names (it writes $h/\lvert\electric q\rvert$).

### N2183

Note: [[18.01 Adiabatic Theorem|18.01 Adiabatic Theorem]]  
Priority: medium · Graph: yes · Manim: yes

Correct and careful about scope, but abstract: the criterion (18.1) is never shown in a concrete system, and "the source gives" phrasing appears repeatedly.

- [Example] Apply Eq. (18.1) to a two-level Landau–Zener sweep $\energy{\hat H}=\tfrac12(vt\,\sigma_z+\energy\Delta\,\sigma_x)$: the criterion becomes $\hbar v\ll\energy\Delta^2$, matching the exponent of the Landau–Zener probability $e^{-\pi\energy\Delta^2/(2\hbar v)}$.
- [Graph] Plot the two instantaneous levels $\pm\tfrac12\sqrt{(vt)^2+\energy\Delta^2}$ against $t$ (avoided crossing, $\energy\Delta=1$, $-5\le vt\le5$) to show the gap that controls adiabaticity.
- [Manim] Animate the Bloch vector of a spin following a field that rotates slowly versus quickly: in the slow case it stays locked to the field, in the fast case it precesses away, illustrating the adiabatic condition.
- [Structure] Replace the repeated "The source gives…" wording in Theorem 18.1 and the scope callout with direct statements.

### N2184

Note: [[18.02 Dynamical and Geometric Phases|18.02 Dynamical and Geometric Phases]]  
Priority: low · Graph: no · Manim: no

Correct derivation of the Berry connection and its gauge behavior, with a well-built 3D figure.

- [Simplify] Show the projection step explicitly: inserting (18.2) and projecting on $\langle n\rvert$ gives $-\hbar\dot\gamma_n+i\hbar\langle n|\partial_t n\rangle=0$, so $\dot\gamma_n=i\langle n|\partial_t n\rangle$; mention that the neglected off-diagonal terms are the adiabatic approximation.
- [Structure] Fold the "Scope of the solid-angle formula" callout into the figure caption and drop the "source caption" meta.

### N2185

Note: [[18.03 Berry Phase Along Closed Paths|18.03 Berry Phase Along Closed Paths]]  
Priority: low · Graph: no · Manim: no

Correct; Eq. (18.3) has the right sign and form, but the link between the vector $\mathbf F_n$ and the tensor $F_{n,\mu\nu}$ is left implicit.

- [Simplify] State $F_{n,\mu\nu}=\partial_\mu A_{n,\nu}-\partial_\nu A_{n,\mu}$ and, in three dimensions, $(\mathbf F_n)_\lambda=\tfrac12\varepsilon_{\lambda\mu\nu}F_{n,\mu\nu}$ before Eq. (18.3), and add the two-line derivation using $\langle m|\partial_\mu n\rangle=\langle m|\partial_\mu\energy{\hat H}|n\rangle/(\energy{E}_n-\energy{E}_m)$.
- [Links] Point to \[\[18.04 Spin ½ in a Rotating Magnetic Field\]\] as the worked example where (18.3) gives the monopole curvature.

### N2186

Note: [[18.04 Spin ½ in a Rotating Magnetic Field|18.04 Spin ½ in a Rotating Magnetic Field]]  
Priority: low · Graph: no · Manim: yes

Correct and clear worked example ($A_\varphi=-\sin^2(\theta/2)$, $\gamma_+=-\Omega/2$, monopole curvature $-\magnetic{\mathbf B}/(2|\magnetic{\mathbf B}|^3)$ all check).

- [Intuition] Note that the chosen gauge is singular at $\theta=\pi$ (the phase $e^{i\varphi}$ is undefined there), which is why the $\theta\to\pi$ limit gives $-2\pi$; the other gauge (multiply by $e^{-i\varphi}$) gives $A_\varphi=\cos^2(\theta/2)$ and the same phase modulo $2\pi$.
- [Manim] Animate the field direction sweeping the cone at fixed $\theta$ while a phase arrow for $\lvert+,\hat{\mathbf n}\rangle$ rotates and the swept cap area fills in, ending at $\gamma_+=-\Omega/2$; vary $\theta$ to show the $\theta=\pi/2$ sign flip.

### N2187

Note: [[18.05 Aharonov–Bohm Effect|18.05 Aharonov–Bohm Effect]]  
Priority: low · Graph: yes · Manim: no

Correct and clear SI treatment of the magnetic Aharonov–Bohm effect.

- [Example] Give the explicit exterior gauge $\magnetic{\mathbf A}=\magnetic\Phi_B\,\hat{\boldsymbol\varphi}/(2\pi r)$ and check $\nabla\times\magnetic{\mathbf A}=0$ outside the solenoid while $\oint\magnetic{\mathbf A}\cdot\mathrm d\boldsymbol\ell=\magnetic\Phi_B$.
- [Graph] Plot the two-slit intensity $I(y)\propto\cos^2(\pi yd/(\lambda L)+\phi_{\mathrm{AB}}/2)$ with a slider for $\magnetic\Phi_B/\magnetic\Phi_0$ from 0 to 1 to show the fringe shift and its periodicity.
- [Simplify] Remove the unclear sentence "The path coordinates here are the particle's positions."

### N2188

Note: [[18.06 Topological Significance and Flux Quantization|18.06 Topological Significance and Flux Quantization]]  
Priority: low · Graph: no · Manim: no

Correct numbers ($h/e\approx4.136\times10^{-15}$ Wb, $h/2e\approx2.068\times10^{-15}$ Wb) and a clear statement of the holonomy picture.

- [Intuition] Add one sentence on why the superconducting flux quantum uses $2\electric e$: single-valuedness of the Cooper-pair condensate wave function around the ring forces $2\electric e\magnetic\Phi/\hbar=2\pi n$; this connects the ring result to the AB phase above.

### N2189

Note: [[18.07 Generalizations and Outlook|18.07 Generalizations and Outlook]]  
Priority: low · Graph: no · Manim: no

A short outlook whose forward link promises content that the target chapter does not contain.

- [Correctness] The sentence "\[\[19.00 Bands in Periodic Potentials|Bands in Periodic Potentials\]\] applies Berry curvature to the Brillouin zone…" is wrong: no note in chapter 19 mentions Berry curvature, the anomalous velocity, or Chern numbers (grep finds no "Berry" in that folder); rephrase it as an outlook beyond the course or link to a note that actually covers it.

### N2190

Note: [[18.08 Geometric Phases Exercises|18.08 Geometric Phases Exercises]]  
Priority: low · Graph: no · Manim: no

Well-posed exercises; all stated results check out (solid angles, $7.6\times10^7$ flux quanta, $6.6\times10^{-13}$ s, the $-(\pi\alpha^2/4)\cos\theta_0$ correction, ring levels).

- [Structure] Exercise 11 is vague (a "tangential electric field" on a ring changes the flux, not just the energy); restate it with an explicit Hamiltonian and cycle, then remove the source-sign callout.
