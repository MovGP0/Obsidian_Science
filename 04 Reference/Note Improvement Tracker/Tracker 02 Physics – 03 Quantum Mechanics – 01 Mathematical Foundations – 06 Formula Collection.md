---
title: "Note Improvement Tracker – 02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/06 Formula Collection"
---

> [!TLDR]
> This note tracks the review of the 11 notes in `02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/06 Formula Collection`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found no possible errors in this folder.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N1979 | [[00 Formula Collection\|00 Formula Collection]] | Analyzed | low | no | no | [[#N1979\|View]] |
| N1980 | [[01 Complex Numbers\|01 Complex Numbers]] | Analyzed | low | yes | no | [[#N1980\|View]] |
| N1981 | [[02 Gaussian Integrals\|02 Gaussian Integrals]] | Analyzed | low | yes | no | [[#N1981\|View]] |
| N1982 | [[03 Linear Algebra\|03 Linear Algebra]] | Analyzed | low | no | no | [[#N1982\|View]] |
| N1983 | [[04 Dirac Notation and Quantum Mechanics\|04 Dirac Notation and Quantum Mechanics]] | Analyzed | low | no | no | [[#N1983\|View]] |
| N1984 | [[05 Fourier Transform\|05 Fourier Transform]] | Analyzed | low | yes | no | [[#N1984\|View]] |
| N1985 | [[06 Pauli Matrices and Spin Operators\|06 Pauli Matrices and Spin Operators]] | Analyzed | low | no | no | [[#N1985\|View]] |
| N1986 | [[07 Harmonic Oscillator Operators\|07 Harmonic Oscillator Operators]] | Analyzed | low | yes | no | [[#N1986\|View]] |
| N1987 | [[08 Basic Trigonometric Identities\|08 Basic Trigonometric Identities]] | Analyzed | low | no | no | [[#N1987\|View]] |
| N1988 | [[09 Fourier Series and Notable Values\|09 Fourier Series and Notable Values]] | Analyzed | low | yes | yes | [[#N1988\|View]] |
| N1989 | [[10 Basic Physical Constants\|10 Basic Physical Constants]] | Analyzed | low | no | no | [[#N1989\|View]] |

## Suggestions

### N1979

Note: [[00 Formula Collection|00 Formula Collection]]  
Priority: low · Graph: no · Manim: no

A clear hub with a useful task-based guide; all topic links resolve.

- [Structure] No change needed; optionally add one-line descriptions after each topic link so the hub doubles as an index.

### N1980

Note: [[01 Complex Numbers|01 Complex Numbers]]  
Priority: low · Graph: yes · Manim: no

Concise and correct reference; the interference example is a good touch.

- [Graph] Plot $|1+e^{i\theta}|^2=2+2\cos\theta$ for $\theta\in[0,2\pi]$ next to the relative-phase paragraph, with the constant individual squared moduli (value 1) shown as a dashed line.

### N1981

Note: [[02 Gaussian Integrals|02 Gaussian Integrals]]  
Priority: low · Graph: yes · Manim: no

Correct formulas with useful checks, including the amplitude-versus-density variance trap.

- [Graph] Plot the normalized densities $\sqrt{a/\pi}e^{-ax^2}$ for $a=0.5,1,2$ over $x\in[-4,4]$ to illustrate the stated variance $1/(2a)$ and the narrowing for larger $a$.
- [Example] Add the general moment $\int x^{2n}e^{-ax^2}dx=\frac{(2n-1)!!}{(2a)^n}\sqrt{\pi/a}$, obtained by repeated differentiation in $a$, since the note already explains the differentiation trick and the fourth moment appears in uncertainty calculations.

### N1982

Note: [[03 Linear Algebra|03 Linear Algebra]]  
Priority: low · Graph: no · Manim: no

Correct and compact; the counterexample $\operatorname{Tr}(ABC)=1\neq\operatorname{Tr}(ACB)=2$ is verified.

- [Example] Add the companion identities $\operatorname{Tr}(A^\dagger)=\overline{\operatorname{Tr}A}$ and $(A^{-1})^\dagger=(A^\dagger)^{-1}$, which are used alongside the listed rules when checking Hermiticity of expectation values.

### N1983

Note: [[04 Dirac Notation and Quantum Mechanics|04 Dirac Notation and Quantum Mechanics]]  
Priority: low · Graph: no · Manim: no

Correct reference with careful domain remarks; the commutator sign check is described only in words.

- [Simplify] Replace the verbal description of the commutator check with the one-line calculation $[\hat x,\hat p]\psi=-i\hbar x\psi'+i\hbar(\psi+x\psi')=i\hbar\psi$; it is shorter and clearer than the prose.
- [Example] Under the Leibniz rule, add the consequence $[\hat x,\hat p^2]=2i\hbar\hat p$ as a worked application, the identity most often needed with these formulas.

### N1984

Note: [[05 Fourier Transform|05 Fourier Transform]]  
Priority: low · Graph: yes · Manim: no

Correct symmetric-convention reference with a verified Gaussian check ($\hat f=e^{-k^2/2}$, both squared norms $\sqrt\pi$).

- [Graph] Plot $f(x)=e^{-x^2/(2\sigma^2)}$ and its transform $\sigma e^{-\sigma^2k^2/2}$ for $\sigma=0.5,1,2$ on shared axes to show the reciprocal width relation that motivates the uncertainty principle.
- [Example] In the last paragraph, give the explicit momentum version $\tilde\psi(p)=(2\pi\hbar)^{-1/2}\int\psi(x)e^{-ipx/\hbar}dx=\hbar^{-1/2}\hat\psi(p/\hbar)$, so the measure change described in words appears as a formula.

### N1985

Note: [[06 Pauli Matrices and Spin Operators|06 Pauli Matrices and Spin Operators]]  
Priority: low · Graph: no · Manim: no

Correct and well organized; exponentials, algebra and eigenstates check out.

- [Example] Add the general formula $e^{i\theta\,\hat n\cdot\boldsymbol\sigma/2}=\cos(\theta/2)\hat I+i\sin(\theta/2)\,\hat n\cdot\boldsymbol\sigma$ for a unit vector $\hat n$, of which the two displayed exponentials are special cases.
- [Example] Add the product identity $(\mathbf a\cdot\boldsymbol\sigma)(\mathbf b\cdot\boldsymbol\sigma)=(\mathbf a\cdot\mathbf b)\hat I+i(\mathbf a\times\mathbf b)\cdot\boldsymbol\sigma$, which compactly encodes both the commutator and the anticommutator in the Algebra section.

### N1986

Note: [[07 Harmonic Oscillator Operators|07 Harmonic Oscillator Operators]]  
Priority: low · Graph: yes · Manim: no

Correct reference with a justified source-correction callout; the coefficient product $\hbar/2$ is verified.

- [Graph] Plot $V(x)=\tfrac12m\omega^2x^2$ with the first four levels $E_n=\hbar\omega(n+1/2)$ as horizontal lines (dimensionless $x/x_0\in[-3,3]$, $E/\hbar\omega$) to visualize the equal spacing and the zero-point energy.
- [Example] In "Commutator and Hamiltonian", show the two-line computation giving $\hat a^\dagger\hat a=\hat H/(\hbar\omega)-\hat I/2$ instead of only describing it.

### N1987

Note: [[08 Basic Trigonometric Identities|08 Basic Trigonometric Identities]]  
Priority: low · Graph: no · Manim: no

Correct and adequate reference; the orthonormality remark is helpful.

- [Structure] No change needed; optionally add the double-angle forms $\sin^2\theta=(1-\cos2\theta)/2$ and $\cos^2\theta=(1+\cos2\theta)/2$, which the normalization derivation actually uses.

### N1988

Note: [[09 Fourier Series and Notable Values|09 Fourier Series and Notable Values]]  
Priority: low · Graph: yes · Manim: yes

Correct sums and series with good convergence remarks.

- [Graph] Plot partial sums $S_N(x)$ of the sign-function series for $N=1,3,10,50$ terms over $x\in[-\pi,\pi]$ together with $\operatorname{sgn}(x)$, to show the Gibbs overshoot (about 9% of the jump) described in the convergence paragraph.
- [Manim] Animate the sawtooth partial sums as $N$ increases from 1 to 30, highlighting that the overshoot near $x=\pm\pi$ narrows but does not shrink in height.

### N1989

Note: [[10 Basic Physical Constants|10 Basic Physical Constants]]  
Priority: low · Graph: no · Manim: no

Correct rounded constants and consistent atomic-unit relations.

- [Example] Add $h\approx6.626\times10^{-34}\,\mathrm{J\,s}$, $1\,\mathrm{eV}=1.602\times10^{-19}\,\mathrm{J}$ and $\hbar c\approx197.3\,\mathrm{eV\,nm}$, since the Hartree is quoted in eV while the rest is SI and the note itself warns about this mixing.
