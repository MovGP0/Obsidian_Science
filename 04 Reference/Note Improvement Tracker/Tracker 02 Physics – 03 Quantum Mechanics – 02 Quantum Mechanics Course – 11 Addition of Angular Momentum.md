---
title: "Note Improvement Tracker – 02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/11 Addition of Angular Momentum"
---

> [!TLDR]
> This note tracks the review of the 13 notes in `02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/11 Addition of Angular Momentum`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 5 possible errors or notation conflicts. 5 of them are verified (4 fixed, 1 partly); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N2114|N2114]] 11.10 Addition of Angular Momentum Exercises: Exercise 10 calls the ladder relation the "Racah recurrence"; the Racah formula is the closed-form expression for CG coefficients, while this is the standard ladder recursion relation. Rename it. **Fixed:** Renamed to ladder recursion relations
- [[#N2115|N2115]] Coupled angular momentum and Clebsch–Gordan calculations: The Physical quantities table is largely copied from other notes: it lists $\mechanical{x}$ "along the oscillator axis", $E$ in newtons as a "linear perturbation coefficient", $\Delta\energy{E},\delta\energy{E}$ continuum scales, $\mechanical{L}$ "Box side length", $\mechanical{\mathbf p}'$ scattering momenta, $\eta$ switching rate, and $A,B$ as "mode emission and absorption coefficients", none of which occur here; in the note $A$ is the spin–spin coupling constant, $\magnetic{\mathbf A}$ the vector potential and $B$ the magnetic field. Rebuild the table from the symbols actually used. **Fixed:** Rebuilt the table: removed oscillator x, E in N, Delta E and delta E, box L, p', eta, emission A,B; added x,y,z, r and r_12, p, v, F, V, Hamiltonians, Delta E^(1), A (spin-spin coupling), B, E field, g, alpha, quantum numbers; kept A vector potential, phi, mu, d rows
- [[#N2115|N2115]] Coupled angular momentum and Clebsch–Gordan calculations: "measured to about ten significant figures" is outdated: the 2023 Northwestern measurement gives $g/2=1.00115965218059(13)$ (0.13 ppt), about 14 significant figures; also drop the quoted wrong handwritten estimate $(\alpha/4\pi)^2$ and keep only $g-2=\alpha/\pi+O(\alpha^2)$. **Partly:** Precision statement updated with the 2023 value g/2=1.00115965218059(13), 0.13 ppt, about 14 significant figures; kept the handwritten remark because the note already gives the correct alpha/pi correction next to it
- [[#N2115|N2115]] Coupled angular momentum and Clebsch–Gordan calculations: The electron mass switches between $\mechanical{m}$ (in $H$, $\magnetic{\boldsymbol\mu}$, $\Delta H$) and $\mechanical{m}_e$ (in $H'$, $\magnetic{\mu}_B$) within the same derivation; use one symbol throughout. **Fixed:** Used m_e in the hydrogen Hamiltonian expansion and in the spin-orbit term Delta H; kept m only in the general-particle formulas (mu, H_mag, practice problem)
- [[#N2116|N2116]] Pauli matrices and two-spin calculations: The Physical quantities table defines $J_x$ as a "Probability flux" in $\unit{s^{-1}}$ and lists $R,T$ reflection/transmission coefficients; in this note $\hat J_x$ is an angular momentum component and $R,T$ never appear. Replace with $\hat{\mathbf S},\hat{\mathbf L},\hat{\mathbf J}$ in $\unit{J\,s}$. **Fixed:** Replaced with rows for S, L, J (J s) and the spin quantum numbers s, m_s

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2104 | [[11.00 Addition of Angular Momentum\|11.00 Addition of Angular Momentum]] | Analyzed | low | no | no | [[#N2104\|View]] |
| N2105 | [[11.01 Statement of the Problem\|11.01 Statement of the Problem]] | Analyzed | low | no | no | [[#N2105\|View]] |
| N2106 | [[11.02 Uncoupled and Coupled Bases\|11.02 Uncoupled and Coupled Bases]] | Analyzed | low | no | no | [[#N2106\|View]] |
| N2107 | [[11.03 Addition Rule\|11.03 Addition Rule]] | Analyzed | medium | yes | no | [[#N2107\|View]] |
| N2108 | [[11.04 Clebsch–Gordan Coefficients\|11.04 Clebsch–Gordan Coefficients]] | Analyzed | low | no | no | [[#N2108\|View]] |
| N2109 | [[11.05 Combining Two Spin-½ Systems\|11.05 Combining Two Spin-½ Systems]] | Analyzed | low | no | no | [[#N2109\|View]] |
| N2110 | [[11.06 Spin–Orbit Coupling\|11.06 Spin–Orbit Coupling]] | Analyzed | low | yes | no | [[#N2110\|View]] |
| N2111 | [[11.07 Spherical Tensor Operators\|11.07 Spherical Tensor Operators]] | Analyzed | low | no | no | [[#N2111\|View]] |
| N2112 | [[11.08 Wigner–Eckart Theorem\|11.08 Wigner–Eckart Theorem]] | Analyzed | medium | no | no | [[#N2112\|View]] |
| N2113 | [[11.09 Electric Dipole Selection Rules\|11.09 Electric Dipole Selection Rules]] | Analyzed | low | no | no | [[#N2113\|View]] |
| N2114 | [[11.10 Addition of Angular Momentum Exercises\|11.10 Addition of Angular Momentum Exercises]] | Analyzed | low | no | no | [[#N2114\|View]] |
| N2115 | [[Coupled angular momentum and Clebsch–Gordan calculations\|Coupled angular momentum and Clebsch–Gordan calculations]] | Analyzed | high | yes | no | [[#N2115\|View]] |
| N2116 | [[Pauli matrices and two-spin calculations\|Pauli matrices and two-spin calculations]] | Analyzed | medium | no | no | [[#N2116\|View]] |

## Suggestions

### N2104

Note: [[11.00 Addition of Angular Momentum|11.00 Addition of Angular Momentum]]  
Priority: low · Graph: no · Manim: no

Clear and correct chapter hub with an accurate summary of the addition rules, CG coefficients, tensors and selection rules.

- [Structure] No change needed; optionally link the section notes 11.01–11.09 next to the summary bullets so the hub navigates the chapter.

### N2105

Note: [[11.01 Statement of the Problem|11.01 Statement of the Problem]]  
Priority: low · Graph: no · Manim: no

Short, correct statement of the problem; the key step from Eqs. (11.1)–(11.2) to (11.3) is asserted rather than shown.

- [Simplify] Show the one-line expansion $[\hat J_i,\hat J_j]=[\hat J_{1i},\hat J_{1j}]+[\hat J_{2i},\hat J_{2j}]$ (cross terms vanish by Eq. 11.2) before Eq. (11.3), since it is the whole content of the note.
- [Example] In Remark 11.1 show why $\hat J_{1z}$ fails to commute with $\hat{\mathbf J}^2$: $[\hat{\mathbf J}^2,\hat J_{1z}]=2[\hat{\mathbf J}_1\cdot\hat{\mathbf J}_2,\hat J_{1z}]=2i\hbar(\hat{\mathbf J}_1\times\hat{\mathbf J}_2)_z\ne0$.

### N2106

Note: [[11.02 Uncoupled and Coupled Bases|11.02 Uncoupled and Coupled Bases]]  
Priority: low · Graph: no · Manim: no

Correct and compact definition of the two bases; a concrete small example would make the abstract labels tangible.

- [Example] Add the $j_1=1$, $j_2=1/2$ case as a 6-state table: the uncoupled kets $\lvert m_1;m_2\rangle$ grouped by $M=m_1+m_2$ next to the coupled kets $\lvert J,M\rangle$, showing that both bases span the same $M$-subspaces.
- [Intuition] Add one sentence that the unitary change of basis is block diagonal in $M$ because both bases are eigenbases of $\hat J_z$; this prepares the rule $m_1+m_2=M$ in 11.04.

### N2107

Note: [[11.03 Addition Rule|11.03 Addition Rule]]  
Priority: medium · Graph: yes · Manim: no

Correct statement of the triangle rule with a helpful vector-model figure, but the counting argument is compressed into two sentences.

- [Graph] Add a native 2D lattice plot of the allowed $(m_1,m_2)$ points for $j_1=2$, $j_2=1$ (axes $m_1\in[-2,2]$, $m_2\in[-1,1]$) with the anti-diagonals $m_1+m_2=M$ drawn and labelled with their point counts $1,2,3,3,3,2,1$; this makes the difference-of-counts argument visible.
- [Simplify] Spell out the counting step: $n(M)$ = number of pairs with $m_1+m_2=M$, and the number of multiplets with highest weight $J$ is $n(J)-n(J+1)$, which equals $1$ for $\lvert j_1-j_2\rvert\le J\le j_1+j_2$ and $0$ otherwise.
- [Example] Add the worked check $j_1=j_2=1$: $J=0,1,2$ with $1+3+5=9=3\times3$.

### N2108

Note: [[11.04 Clebsch–Gordan Coefficients|11.04 Clebsch–Gordan Coefficients]]  
Priority: low · Graph: no · Manim: no

Correct definitions, conventions and examples (Eqs. 11.8 and 11.9 verified, including the Condon–Shortley sign).

- [Example] Turn the callout "Constructing the coefficients" into an explicit derivation of Eq. (11.9): apply $\hat J_-$ to $\lvert\tfrac32,\tfrac32\rangle$ to get $\lvert\tfrac32,\tfrac12\rangle$, then orthogonality plus the sign convention gives $\lvert\tfrac12,\tfrac12\rangle$.
- [Structure] Complete Eq. (11.9) with the remaining three states ($\lvert\tfrac32,-\tfrac12\rangle$, $\lvert\tfrac32,-\tfrac32\rangle$, $\lvert\tfrac12,-\tfrac12\rangle$) so the reader sees the full $6\times6$ orthogonal matrix.

### N2109

Note: [[11.05 Combining Two Spin-½ Systems|11.05 Combining Two Spin-½ Systems]]  
Priority: low · Graph: no · Manim: no

Clear and correct, with a nice measurement example; one source link points to an unrelated section.

- [Links] The link [[Pauli matrices and two-spin calculations#Other potentials|Physics 137]] targets a section of potential-well sketches; point it to "#Two spins" (or "#Coupled and uncoupled spin bases"), and consider "#Total angular momentum" instead of "#Hydrogen and orbital angular momentum" for the Physics 10 link.
- [Example] In "A product state contains two possible total spins" write the decomposition explicitly: $\lvert\uparrow\downarrow\rangle=(\lvert1,0\rangle+\lvert0,0\rangle)/\sqrt2$.

### N2110

Note: [[11.06 Spin–Orbit Coupling|11.06 Spin–Orbit Coupling]]  
Priority: low · Graph: yes · Manim: no

Correct and well illustrated; Eq. (11.10) and the $(2\ell+1)\hbar^2\langle\xi\rangle/2$ splitting are verified.

- [Example] Give the explicit shifts $+\tfrac{\ell}{2}\hbar^2\langle\xi\rangle$ for $j=\ell+\tfrac12$ and $-\tfrac{\ell+1}{2}\hbar^2\langle\xi\rangle$ for $j=\ell-\tfrac12$, and note that the degeneracy-weighted mean shift $(2\ell+2)\ell-2\ell(\ell+1)=0$ vanishes (centre-of-gravity rule).
- [Intuition] Add one sentence on the origin of $\xi(r)=\frac{1}{2m^2c^2}\frac{1}{r}\frac{dV}{dr}$ (rest-frame magnetic field plus Thomas factor), linking to the derivation in the Clebsch–Gordan calculations note.
- [Graph] Optionally add a 2D plot of the two $j$-level shifts for $\ell=1,2,3$ (in units of $\hbar^2\langle\xi\rangle$) to show the splitting growing as $2\ell+1$.

### N2111

Note: [[11.07 Spherical Tensor Operators|11.07 Spherical Tensor Operators]]  
Priority: low · Graph: no · Manim: no

Correct definition and examples; the link between Cartesian vectors and spherical components could be motivated more.

- [Intuition] Explain the minus sign of the $q=+1$ component: $\hat r^1_q=\sqrt{4\pi/3}\,r\,Y_{1q}$ in the Condon–Shortley convention, and $Y_{11}\propto-(x+iy)/r$.
- [Example] Verify one commutator explicitly, e.g. $[\hat L_+,\hat z]=-\hbar(\hat x+i\hat y)=\sqrt2\hbar\,\hat r^1_{+1}$, matching Eq. (11.11) with $k=1,q=0$.

### N2112

Note: [[11.08 Wigner–Eckart Theorem|11.08 Wigner–Eckart Theorem]]  
Priority: medium · Graph: no · Manim: no

Correct statement in the Racah/Edmonds normalization, but without a worked example the theorem stays abstract.

- [Structure] State that the $1/\sqrt{2j'+1}$ normalization is one of several conventions (Sakurai uses $1/\sqrt{2j+1}$), so readers comparing reduced matrix elements across textbooks are not confused.
- [Example] Add the example $\hat T=\hat{\mathbf J}$: from $\langle jm\lvert\hat J_0\rvert jm\rangle=\hbar m$ and $\langle jm;10\mid jm\rangle=m/\sqrt{j(j+1)}$ get $\langle j\lVert\hat J\rVert j\rangle=\hbar\sqrt{j(j+1)(2j+1)}$, then predict $\langle j,m+1\lvert\hat J_{+1}\rvert jm\rangle$.
- [Intuition] Add one sentence on the payoff: ratios of transition strengths between Zeeman sublevels are pure CG ratios, independent of the radial physics.

### N2113

Note: [[11.09 Electric Dipole Selection Rules|11.09 Electric Dipole Selection Rules]]  
Priority: low · Graph: no · Manim: no

Correct and concise selection rules; the link between $q$ and photon polarization is missing.

- [Intuition] Relate $\Delta m=0$ to $\pi$ (linear, along $z$) and $\Delta m=\pm1$ to $\sigma^\pm$ (circular) polarization via the spherical components $\hat r^1_q$.
- [Example] Add a hydrogen example: $2p\to1s$ is allowed (Lyman-$\alpha$), while $2s\to1s$ is E1-forbidden and decays by two-photon emission with a lifetime of about $0.12\,\mathrm{s}$.

### N2114

Note: [[11.10 Addition of Angular Momentum Exercises|11.10 Addition of Angular Momentum Exercises]]  
Priority: low · Graph: no · Manim: no

Good exercise list; the quoted results check out (Ex. 7 reduced element, Ex. 8 eigenvalues, Ex. 10 recursion, Ex. 11 sum rule).

- [Correctness] Exercise 10 calls the ladder relation the "Racah recurrence"; the Racah formula is the closed-form expression for CG coefficients, while this is the standard ladder recursion relation. Rename it.
- [Structure] Exercise 7 asks for $\hat J_+$ via Wigner–Eckart, but $\hat J_+$ is not a spherical component; state that $\hat J_{+1}=-\hat J_+/\sqrt2$ must be used.

### N2115

Note: [[Coupled angular momentum and Clebsch–Gordan calculations|Coupled angular momentum and Clebsch–Gordan calculations]]  
Priority: high · Graph: yes · Manim: no

The derivations are correct (ladder CG coefficients, spinor $\varepsilon$ tensor, $\mathbf p\cdot\mathbf A+\mathbf A\cdot\mathbf p=\mathbf B\cdot\mathbf L$, Zeeman levels, spin–orbit term), but the note is a raw lecture transcript mixing many topics, exam logistics, and an unfinished practice problem.

- [Correctness] The Physical quantities table is largely copied from other notes: it lists $\mechanical{x}$ "along the oscillator axis", $E$ in newtons as a "linear perturbation coefficient", $\Delta\energy{E},\delta\energy{E}$ continuum scales, $\mechanical{L}$ "Box side length", $\mechanical{\mathbf p}'$ scattering momenta, $\eta$ switching rate, and $A,B$ as "mode emission and absorption coefficients", none of which occur here; in the note $A$ is the spin–spin coupling constant, $\magnetic{\mathbf A}$ the vector potential and $B$ the magnetic field. Rebuild the table from the symbols actually used.
- [Correctness] "measured to about ten significant figures" is outdated: the 2023 Northwestern measurement gives $g/2=1.00115965218059(13)$ (0.13 ppt), about 14 significant figures; also drop the quoted wrong handwritten estimate $(\alpha/4\pi)^2$ and keep only $g-2=\alpha/\pi+O(\alpha^2)$.
- [Correctness] The electron mass switches between $\mechanical{m}$ (in $H$, $\magnetic{\boldsymbol\mu}$, $\Delta H$) and $\mechanical{m}_e$ (in $H'$, $\magnetic{\mu}_B$) within the same derivation; use one symbol throughout.
- [Structure] Remove the exam schedule, the topic list of the final, and meta comments ("The factors of two ... correct the earlier spin-raising calculation", "duplicate label in the sketch", "margin note"); split the note into clearly headed sections (two spins, $\ell\otimes\tfrac12$, spinor indices, Zeeman effect, spin–orbit from the boost, practice problem).
- [Example] Finish the "Practice problem on coupled spins" for a uniform field $\mathbf B=B\hat z$: the triplet $m=\pm1$ levels are $A\hbar^2/4\mp\hbar\omega$ with $\omega=qB/(mc)$, and because both spins have the same factor the $m=0$ block stays diagonal with $A\hbar^2/4$ (triplet) and $-3A\hbar^2/4$ (singlet); mention that unequal fields $\mathbf B(\mathbf r_1)\ne\mathbf B(\mathbf r_2)$ mix $\lvert1,0\rangle$ and $\lvert0,0\rangle$.
- [Graph] Replace the PNG "Zeeman shifts for the 2p level" with a native 2D plot of $\Delta E/\mu_B$ versus $B$ for the six $(m,m_s)$ lines with slopes $m+2m_s\in\{2,1,0,0,-1,-2\}$, showing five levels and the doubly degenerate zero line.

### N2116

Note: [[Pauli matrices and two-spin calculations|Pauli matrices and two-spin calculations]]  
Priority: medium · Graph: no · Manim: no

Correct elementary calculations ($S_x$ eigenvectors, the commutator, triplet/singlet construction, the $1\otimes\tfrac32$ CG row) but loosely organized, with an unrelated first section and a wrong quantity table.

- [Correctness] The Physical quantities table defines $J_x$ as a "Probability flux" in $\unit{s^{-1}}$ and lists $R,T$ reflection/transmission coefficients; in this note $\hat J_x$ is an angular momentum component and $R,T$ never appear. Replace with $\hat{\mathbf S},\hat{\mathbf L},\hat{\mathbf J}$ in $\unit{J\,s}$.
- [Structure] Remove or move the "Other potentials" section (a figure of five potential sketches) to the 1D potentials notes; it is unrelated to Pauli matrices and is the target of a misdirected link from 11.05.
- [Example] The notes pose $\chi_1=\chi_2=(1,1)^{\mathsf T}/\sqrt2$ and never answer: expand $\lvert{+x},{+x}\rangle=\tfrac12\lvert1,1\rangle+\tfrac1{\sqrt2}\lvert1,0\rangle+\tfrac12\lvert1,-1\rangle$, so the total spin is $1$ with certainty while $S_z$ gives $\hbar,0,-\hbar$ with probabilities $1/4,1/2,1/4$.
- [Simplify] Drop the odd computation $\hat S^2\hat S_z\lvert\chi_+\rangle=(3\hbar^3/8)\lvert\chi_+\rangle$ and the meta sentence about the "last handwritten line"; they add nothing to the eigenvalue discussion.
- [Structure] Use the vault's semantic macros ($\mechanical{\hat S}$, $\mechanical{\hat J}$) as in the neighbouring chapter-11 notes; all angular momenta are currently uncolored.
