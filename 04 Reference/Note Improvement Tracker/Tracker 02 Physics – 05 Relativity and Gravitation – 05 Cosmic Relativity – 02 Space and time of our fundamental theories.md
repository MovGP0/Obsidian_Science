---
title: "Note Improvement Tracker – 02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/02 Space and time of our fundamental theories"
---

> [!TLDR]
> This note tracks the review of the 11 notes in `02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/02 Space and time of our fundamental theories`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 7 possible errors or notation conflicts. 7 of them are verified (7 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N3500|N3500]] 02 References: Ref. 3: the book title is "Einstein, Tagore and the Nature of Reality" (ed. P. Ghose, Routledge Studies in the Philosophy of Mathematics and Physics). The printed entry scrambles the series name into the title and misspells Einstein. **Fixed:** Changed to *Einstein, Tagore and the Nature of Reality*, ed. P. Ghose, with the Routledge series named after the title.
- [[#N3502|N3502]] 02.01 Newton's Space and Time: The Scholium on time and space follows the Definitions and precedes the Axioms (Laws of Motion), outside Book 1. The note says it is the first Scholium of Book 1, "after the definitions and 'axioms'". **Fixed:** Reworded the sentence to place the Scholium after the definitions, before the axioms and before Book 1.
- [[#N3505|N3505]] 02.04 Space and Time in Einstein's Relativity: "Since any two points in space-time can be connected by light, it follows that their interval remains invariant" is wrong: spacelike-separated events cannot be joined by a light signal, and invariance of the null cone alone gives only $ds'^2=\lambda(v)\,ds^2$. Fixing $\lambda=1$ needs isotropy and the group property; correct this in the interpretation. **Fixed:** Added to Interpretation that spacelike events cannot be joined by light and null-cone invariance gives ds'^2=lambda ds^2; lambda=1 needs isotropy and group property; added lambda to the table.
- [[#N3505|N3505]] 02.04 Space and Time in Einstein's Relativity: The local-time term $vx/c^2$ is described as making clocks run "at rates that depend on both the relative velocity and the distance". It is a position-dependent synchronization offset (relativity of simultaneity), not a rate; the rate effect is the separate factor $\gamma$. **Fixed:** Added to Interpretation that it is relativity of simultaneity and the rate effect is gamma; added gamma to the table.
- [[#N3505|N3505]] 02.04 Space and Time in Einstein's Relativity: Einstein–Barnett quotation: per Lehmkuhl (2014) it reads "which we are wont to look at" and "is not logically founded", not "which we wont" and "not logically found". **Fixed:** Corrected both words in the quotation.
- [[#N3507|N3507]] 02.06 Space and Time in the Factual Universe: "globally synchronised, but for the small fluctuations amounting a part in a million": the primary CMB temperature anisotropies are about $\Delta T/T\sim10^{-5}$ (tens of μK on 2.725 K), and the dipole is about $10^{-3}$. Add a short callout with the correct order of magnitude. **Fixed:** Added a callout with Delta T/T about 1e-5 and the dipole about 1e-3.
- [[#N3509|N3509]] 02.08 Space, Time, and the Principle of Relativity: In the quotation from 'The Meaning of Relativity', "every other system K which moves uniformly ... relatively to K" must read "every other system K′". As printed, the statement compares K with itself. **Fixed:** Changed K to K′ in the quotation.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N3500 | [[02 References\|02 References]] | Analyzed | low | no | no | [[#N3500\|View]] |
| N3501 | [[02.00 Space and Time of Our Fundamental Theories\|02.00 Space and Time of Our Fundamental Theories]] | Analyzed | low | no | no | [[#N3501\|View]] |
| N3502 | [[02.01 Newton's Space and Time\|02.01 Newton's Space and Time]] | Analyzed | medium | yes | yes | [[#N3502\|View]] |
| N3503 | [[02.02 Ernst Mach's Critique and Insight\|02.02 Ernst Mach's Critique and Insight]] | Analyzed | low | no | no | [[#N3503\|View]] |
| N3504 | [[02.03 Space and Time in 19th Century Physics\|02.03 Space and Time in 19th Century Physics]] | Analyzed | low | no | no | [[#N3504\|View]] |
| N3505 | [[02.04 Space and Time in Einstein's Relativity\|02.04 Space and Time in Einstein's Relativity]] | Analyzed | medium | yes | yes | [[#N3505\|View]] |
| N3506 | [[02.05 Speculative Space and Time\|02.05 Speculative Space and Time]] | Analyzed | low | yes | no | [[#N3506\|View]] |
| N3507 | [[02.06 Space and Time in the Factual Universe\|02.06 Space and Time in the Factual Universe]] | Analyzed | medium | yes | no | [[#N3507\|View]] |
| N3508 | [[02.07 Philosopher's Space and Time\|02.07 Philosopher's Space and Time]] | Analyzed | low | no | no | [[#N3508\|View]] |
| N3509 | [[02.08 Space, Time, and the Principle of Relativity\|02.08 Space, Time, and the Principle of Relativity]] | Analyzed | low | no | no | [[#N3509\|View]] |
| N3510 | [[02.09 Summary\|02.09 Summary]] | Analyzed | low | no | no | [[#N3510\|View]] |

## Suggestions

### N3500

Note: [[02 References|02 References]]  
Priority: low · Graph: no · Manim: no

A reference list; one entry is garbled.

- [Correctness] Ref. 3: the book title is "Einstein, Tagore and the Nature of Reality" (ed. P. Ghose, Routledge Studies in the Philosophy of Mathematics and Physics). The printed entry scrambles the series name into the title and misspells Einstein.

### N3501

Note: [[02.00 Space and Time of Our Fundamental Theories|02.00 Space and Time of Our Fundamental Theories]]  
Priority: low · Graph: no · Manim: no

A chapter abstract and introduction with a sensible operational frame; no change needed.

- [Structure] No change needed.

### N3502

Note: [[02.01 Newton's Space and Time|02.01 Newton's Space and Time]]  
Priority: medium · Graph: yes · Manim: yes

Faithful quotations with a short physical interpretation; the bucket experiment would benefit from a quantitative example and visuals.

- [Correctness] The Scholium on time and space follows the Definitions and precedes the Axioms (Laws of Motion), outside Book 1. The note says it is the first Scholium of Book 1, "after the definitions and 'axioms'".
- [Example] Derive the free surface $z(r)=\Omega^2r^2/(2g)$ from the interpretation's pressure argument; for $R=0.15$ m and $\Omega=2\pi$ rad/s the rim rises about 4.5 cm.
- [Graph] Plot $z(r)$ for $\Omega=2,4,6$ rad/s over $r\in[-0.15,0.15]$ m.
- [Manim] Bucket spin-up: the bucket starts rotating, the water lags, and the surface goes from flat to parabolic, matching Newton's four stages.

### N3503

Note: [[02.02 Ernst Mach's Critique and Insight|02.02 Ernst Mach's Critique and Insight]]  
Priority: low · Graph: no · Manim: no

A quotation-heavy historical note with an adequate interpretation.

- [Intuition] Mach's "walls several leagues thick" question has a quantitative general-relativistic answer: Lense–Thirring frame dragging inside a rotating shell, measured by Gravity Probe B and LAGEOS. Add one paragraph with the order of magnitude.
- [Links] Link to \[\[07.12 The GTR and Mach's Principle\]\] where Einstein's adoption of Mach's principle is mentioned.

### N3504

Note: [[02.03 Space and Time in 19th Century Physics|02.03 Space and Time in 19th Century Physics]]  
Priority: low · Graph: no · Manim: no

A readable historical account with a sound interpretation.

- [Example] Show the ether's "electromagnetic properties" numerically: $c=1/\sqrt{\mu_0\varepsilon_0}\approx3.00\times10^8$ m/s, the Maxwell result that made the medium idea attractive.
- [Structure] Fix the typo "forward to Max Jammer's book" to "foreword".

### N3505

Note: [[02.04 Space and Time in Einstein's Relativity|02.04 Space and Time in Einstein's Relativity]]  
Priority: medium · Graph: yes · Manim: yes

A long lecture account with a useful sign-convention callout, but it keeps two physically wrong arguments and a misquoted letter without comment.

- [Correctness] "Since any two points in space-time can be connected by light, it follows that their interval remains invariant" is wrong: spacelike-separated events cannot be joined by a light signal, and invariance of the null cone alone gives only $ds'^2=\lambda(v)\,ds^2$. Fixing $\lambda=1$ needs isotropy and the group property; correct this in the interpretation.
- [Correctness] The local-time term $vx/c^2$ is described as making clocks run "at rates that depend on both the relative velocity and the distance". It is a position-dependent synchronization offset (relativity of simultaneity), not a rate; the rate effect is the separate factor $\gamma$.
- [Correctness] Einstein–Barnett quotation: per Lehmkuhl (2014) it reads "which we are wont to look at" and "is not logically founded", not "which we wont" and "not logically found".
- [Graph] Minkowski diagram: the invariant hyperbolas $x^2-c^2t^2=\pm1$, the light cone, and the boosted axes for $v=0.6c$.
- [Manim] A Lorentz boost of the Minkowski grid in which the axes scissor toward the light cone while the hyperbolas stay fixed, showing what "rotation in space-time" means.

### N3506

Note: [[02.05 Speculative Space and Time|02.05 Speculative Space and Time]]  
Priority: low · Graph: yes · Manim: no

A short, correct overview of extra dimensions; the experimental bound is vague and the in-vault Kaluza–Klein collection is not linked.

- [Example] Replace "a few microns" with the current bound: torsion-balance tests (Eöt-Wash, Lee et al. 2020) confirm the inverse-square law for gravitational-strength Yukawa terms down to about 50 µm, which bounds the largest extra dimension to tens of micrometres.
- [Graph] Log-log plot of $F r^2$ (normalized) against $r$ for one and two compact dimensions of size $R=50$ µm, showing the crossover from $1/r^2$ ($r\gg R$) to $1/r^{2+n}$ ($r\ll R$).
- [Links] Link the Kaluza–Klein paragraph to \[\[Kaluza-Klein - Study Guide\]\] and the charge-quantization remark to \[\[KK 19 Deriving charge from phase winding\]\].

### N3507

Note: [[02.06 Space and Time in the Factual Universe|02.06 Space and Time in the Factual Universe]]  
Priority: medium · Graph: yes · Manim: no

A short, readable account of the FLRW metric and cosmic time, but the CMB uniformity figure is off and the metric is given without a worked example.

- [Correctness] "globally synchronised, but for the small fluctuations amounting a part in a million": the primary CMB temperature anisotropies are about $\Delta T/T\sim10^{-5}$ (tens of μK on 2.725 K), and the dipole is about $10^{-3}$. Add a short callout with the correct order of magnitude.
- [Example] After Eq. (2.6), add one worked step: a photon emitted at $t_e$ and received at $t_0$ has $1+z=a(t_0)/a(t_e)$. Also add $H_0\approx70\,\unit{km\,s^{-1}\,Mpc^{-1}}$, which gives $1/H_0\approx14\,\unit{Gyr}$, so the reader sees what $H$ means in numbers.
- [Graph] Plot $a(t)/a(t_0)$ against $t$ for a flat ΛCDM model ($\Omega_m=0.3$, $\Omega_\Lambda=0.7$) and for matter-only ($a\propto t^{2/3}$), over 0–20 Gyr. Mark today. This shows "steadily expanding" and the present acceleration.
- [Intuition] In "Interpretation and checks", add one sentence: comoving observers are those who see no CMB dipole, so the cosmic time $t$ is the proper time of these observers. This links the abstract metric to the dipole in Fig. 1.3.

### N3508

Note: [[02.07 Philosopher's Space and Time|02.07 Philosopher's Space and Time]]  
Priority: low · Graph: no · Manim: no

A philosophical and historical note that is clear enough; it has no equations and needs little change.

- [Structure] Separate the author's claims (for example "a local clock synchronised to the CMBR temperature will read the same time as any other clock anywhere") from established results, with a short callout: CMB temperature defines cosmic time only for comoving observers, after correction for the local dipole and gravitational redshift.
- [Links] Link "CMBR" and "universal time" to \[\[08.05 The Cosmic Microwave Background Radiation\]\] and to \[\[02.06 Space and Time in the Factual Universe\]\], where the FLRW cosmic time is defined.

### N3509

Note: [[02.08 Space, Time, and the Principle of Relativity|02.08 Space, Time, and the Principle of Relativity]]  
Priority: low · Graph: no · Manim: no

A clear, quotation-led statement of the Principle of Relativity; the numbers are correct, but one quotation has lost a prime.

- [Correctness] In the quotation from 'The Meaning of Relativity', "every other system K which moves uniformly ... relatively to K" must read "every other system K′". As printed, the statement compares K with itself.
- [Example] The lifetime distance checks out: $370\,\unit{km/s}\times80\,\unit{yr}\approx9\times10^{11}\,\unit{km}\approx0.1$ light year. Show this one-line calculation, and name the measured CMB dipole speed of the Sun (about 370 km/s) as the source of the "nearly 400 km/s".
- [Intuition] The "Interpretation and checks" cabin-with-a-window example is good. Move it near Galileo's ship quotation, so that the difference between an isolated cabin and an "open deck" in a medium is made right where the ether doubt is introduced.

### N3510

Note: [[02.09 Summary|02.09 Summary]]  
Priority: low · Graph: no · Manim: no

A chapter summary that does its job; no change needed apart from links.

- [Links] Add wiki links from each summarised topic (Newton's bucket, Mach, ether and fields, FLRW metric, logical positivists, PoR) to the matching 02.0x notes, so the summary works as a navigation hub.
