---
title: "Note Improvement Tracker – 02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations"
---

> [!TLDR]
> This note tracks the review of the 34 notes in `02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 4 possible errors or notation conflicts. 4 of them are verified (4 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N1920|N1920]] 06 Common Errors: Symbol clash within the note: the box section's $\phi_n=\sqrt{2/L}\sin(n\pi x/L)$ on $[0,L]$ and $c_n$ (box amplitude) collide with $\phi_n^*=e^{-in\pi x/L}/\sqrt{2L}$ and $c_n$ (complex Fourier coefficient) in Errors 1 and 4; rename the box amplitudes or basis (e.g. $\beta_n$, $\chi_n$) rather than relying on the closing callout. **Fixed:** Renamed box modes to \signal{\chi}_n and box amplitudes to \beta_n in the QM section, checks, and table; reworded the callout to contrast \beta_n with c_n
- [[#N1920|N1920]] 06 Common Errors: Macro inconsistency: $\phi_n$ is uncoloured although the table groups it with $\signal{\psi}$ (and Exercise 5 uses \signal{\phi}_n), and $\psi(0)$ in $c_n=\langle\phi_n|\psi(0)\rangle$ is uncoloured; colour them consistently. **Fixed:** Box modes are now \signal{\chi}_n and psi(0) in the projection is \signal{\psi}(0)
- [[#N1929|N1929]] 07 Exercise 7: Symbol clash: $\signal{\delta}_n$ (mode phase, question and table) and $\delta_{mn}$ (Kronecker delta, part (a) and the derivative orthogonality) share the letter; rename the phase (e.g. $\varphi_n$), which is never used after the question anyway. **Fixed:** Renamed the mode phase to \signal{\varphi}_n in the question and table
- [[#N1929|N1929]] 07 Exercise 7: Notation inconsistency: part (b) writes $c_1\phi_1(\mechanical{x})+c_2\phi_2(\mechanical{x})$ with uncoloured $\phi$ while the rest uses \signal{\phi}_n, and $\energy{E}$ denotes the classical string total while $\langle\energy{E}\rangle$, $\energy{E}_n$ in part (c) are quantum energies; colour $\phi$ consistently and label the classical energy distinctly (e.g. $\energy{E}_{\text{string}}$). **Fixed:** Coloured \signal{\phi}_1,\signal{\phi}_2 in (b); labelled classical total energy \energy{E}_{\text{string}} (and its mean); split the energy table row into string and quantum energies

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N1914 | [[00 Fourier Series\|12 Fourier Series/00 Fourier Series]] | Analyzed | low | no | no | [[#N1914\|View]] |
| N1915 | [[01 The Complex Form\|12 Fourier Series/01 The Complex Form]] | Analyzed | medium | yes | yes | [[#N1915\|View]] |
| N1916 | [[02 The Real Form\|12 Fourier Series/02 The Real Form]] | Analyzed | low | no | no | [[#N1916\|View]] |
| N1917 | [[03 Examples of Fourier Series\|12 Fourier Series/03 Examples of Fourier Series]] | Analyzed | medium | yes | no | [[#N1917\|View]] |
| N1918 | [[04 Convergence and the Gibbs Phenomenon\|12 Fourier Series/04 Convergence and the Gibbs Phenomenon]] | Analyzed | medium | no | yes | [[#N1918\|View]] |
| N1919 | [[05 Parseval's Relation\|12 Fourier Series/05 Parseval's Relation]] | Analyzed | low | yes | no | [[#N1919\|View]] |
| N1920 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/12 Fourier Series/06 Common Errors\|12 Fourier Series/06 Common Errors]] | Analyzed | medium | no | yes | [[#N1920\|View]] |
| N1921 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/12 Fourier Series/07 Chapter Summary\|12 Fourier Series/07 Chapter Summary]] | Analyzed | low | no | no | [[#N1921\|View]] |
| N1922 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/12 Fourier Series/08 Exercises\|12 Fourier Series/08 Exercises]] | Analyzed | low | no | no | [[#N1922\|View]] |
| N1923 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/12 Fourier Series/99 Exercises/01 Exercise 1\|12 Fourier Series/99 Exercises/01 Exercise 1]] | Analyzed | low | yes | no | [[#N1923\|View]] |
| N1924 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/12 Fourier Series/99 Exercises/02 Exercise 2\|12 Fourier Series/99 Exercises/02 Exercise 2]] | Analyzed | low | no | no | [[#N1924\|View]] |
| N1925 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/12 Fourier Series/99 Exercises/03 Exercise 3\|12 Fourier Series/99 Exercises/03 Exercise 3]] | Analyzed | low | yes | no | [[#N1925\|View]] |
| N1926 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/12 Fourier Series/99 Exercises/04 Exercise 4\|12 Fourier Series/99 Exercises/04 Exercise 4]] | Analyzed | low | no | no | [[#N1926\|View]] |
| N1927 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/12 Fourier Series/99 Exercises/05 Exercise 5\|12 Fourier Series/99 Exercises/05 Exercise 5]] | Analyzed | low | yes | no | [[#N1927\|View]] |
| N1928 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/12 Fourier Series/99 Exercises/06 Exercise 6\|12 Fourier Series/99 Exercises/06 Exercise 6]] | Analyzed | low | no | no | [[#N1928\|View]] |
| N1929 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/12 Fourier Series/99 Exercises/07 Exercise 7\|12 Fourier Series/99 Exercises/07 Exercise 7]] | Analyzed | medium | no | yes | [[#N1929\|View]] |
| N1930 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/12 Fourier Series/99 Exercises/08 Exercise 8\|12 Fourier Series/99 Exercises/08 Exercise 8]] | Analyzed | low | yes | no | [[#N1930\|View]] |
| N1931 | [[00 Fourier Transform\|13 Fourier Transform/00 Fourier Transform]] | Analyzed | low | no | no | [[#N1931\|View]] |
| N1932 | [[01 From Discrete to Continuous\|13 Fourier Transform/01 From Discrete to Continuous]] | Analyzed | medium | yes | yes | [[#N1932\|View]] |
| N1933 | [[02 Basic Properties\|13 Fourier Transform/02 Basic Properties]] | Analyzed | medium | yes | yes | [[#N1933\|View]] |
| N1934 | [[03 The Dirac Delta Distribution\|13 Fourier Transform/03 The Dirac Delta Distribution]] | Analyzed | medium | yes | yes | [[#N1934\|View]] |
| N1935 | [[04 Important Transform Pairs\|13 Fourier Transform/04 Important Transform Pairs]] | Analyzed | low | yes | yes | [[#N1935\|View]] |
| N1936 | [[05 Position-Momentum Duality\|13 Fourier Transform/05 Position-Momentum Duality]] | Analyzed | low | yes | no | [[#N1936\|View]] |
| N1937 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/13 Fourier Transform/06 Common Errors\|13 Fourier Transform/06 Common Errors]] | Analyzed | medium | no | no | [[#N1937\|View]] |
| N1938 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/13 Fourier Transform/07 Chapter Summary\|13 Fourier Transform/07 Chapter Summary]] | Analyzed | low | no | no | [[#N1938\|View]] |
| N1939 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/13 Fourier Transform/08 Exercises\|13 Fourier Transform/08 Exercises]] | Analyzed | low | no | no | [[#N1939\|View]] |
| N1940 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/13 Fourier Transform/99 Exercises/01 Exercise 1\|13 Fourier Transform/99 Exercises/01 Exercise 1]] | Analyzed | low | yes | no | [[#N1940\|View]] |
| N1941 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/13 Fourier Transform/99 Exercises/02 Exercise 2\|13 Fourier Transform/99 Exercises/02 Exercise 2]] | Analyzed | low | no | no | [[#N1941\|View]] |
| N1942 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/13 Fourier Transform/99 Exercises/03 Exercise 3\|13 Fourier Transform/99 Exercises/03 Exercise 3]] | Analyzed | low | no | no | [[#N1942\|View]] |
| N1943 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/13 Fourier Transform/99 Exercises/04 Exercise 4\|13 Fourier Transform/99 Exercises/04 Exercise 4]] | Analyzed | low | yes | no | [[#N1943\|View]] |
| N1944 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/13 Fourier Transform/99 Exercises/05 Exercise 5\|13 Fourier Transform/99 Exercises/05 Exercise 5]] | Analyzed | low | no | no | [[#N1944\|View]] |
| N1945 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/13 Fourier Transform/99 Exercises/06 Exercise 6\|13 Fourier Transform/99 Exercises/06 Exercise 6]] | Analyzed | low | yes | yes | [[#N1945\|View]] |
| N1946 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/13 Fourier Transform/99 Exercises/07 Exercise 7\|13 Fourier Transform/99 Exercises/07 Exercise 7]] | Analyzed | medium | yes | no | [[#N1946\|View]] |
| N1947 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/13 Fourier Transform/99 Exercises/08 Exercise 8\|13 Fourier Transform/99 Exercises/08 Exercise 8]] | Analyzed | low | no | yes | [[#N1947\|View]] |

## Suggestions

### N1914

Note: [[00 Fourier Series|00 Fourier Series]]  
Priority: low · Graph: no · Manim: no

Clear chapter hub with good historical motivation and a sensible reading order; links resolve.

- [Intuition] In "Why modes are useful", answer the posed check explicitly in one sentence (a constant needs one complex mode $n=0$ but infinitely many odd sine modes on $[0,L]$, coefficients $\propto1/n$) so the reader sees why the boundary conditions matter.

### N1915

Note: [[01 The Complex Form|01 The Complex Form]]  
Priority: medium · Graph: yes · Manim: yes

Correct and compact, but the projection derivation is described in words only and the note jumps quickly to $L^2$ subtleties without a concrete picture.

- [Simplify] Write out the orthogonality step as an equation, $\int_{-L}^{L}e^{i(n-m)\pi x/L}dx=2L\delta_{nm}$, and link [[03 Exercise 3]] where it is proved, instead of describing "the surviving integral is $2L$" only in prose.
- [Example] Add a two-line worked example, e.g. $f(x)=\cos(\pi x/L)$ giving $c_{\pm1}=1/2$ and all others zero, to show that a real cosine needs a pair of opposite harmonics.
- [Graph] Plot the real and imaginary parts of $e^{in\pi x/L}$ for $n=1,2,3$ on $[-L,L]$ (take $L=1$) to show that each mode completes exactly $n$ cycles per period, which is the origin of orthogonality.
- [Manim] Animate a rotating phasor $e^{in\pi x/L}$ as $x$ sweeps one period for $n=1,2,3$ next to its real-part trace, showing integer winding numbers.
- [Links] The sentence about orthogonal projection could link the Hilbert-space note [[03 Orthonormal Bases]] (Chapter 8), where projection and norm convergence are developed.

### N1916

Note: [[02 The Real Form|02 The Real Form]]  
Priority: low · Graph: no · Manim: no

Correct and clear; the conversion rules and the $a_0/2$ check are well explained.

- [Simplify] Show the one-line derivation $a_n=c_n+c_{-n}$, $b_n=i(c_n-c_{-n})$ from Euler's formula before stating the conversion rules, so the pairing argument is visible rather than asserted.
- [Example] Under "Symmetry and coefficient calculations", add a non-symmetric example (e.g. a shifted step) to show that general functions need both $a_n$ and $b_n$ (even part gives cosines, odd part gives sines).

### N1917

Note: [[03 Examples of Fourier Series|03 Examples of Fourier Series]]  
Priority: medium · Graph: yes · Manim: no

All three derivations and the Basel and alternating checks are correct, but the note has no figure of the partial sums that would make the $1/n$ versus $1/n^2$ decay difference visible.

- [Graph] Plot $x$ and its partial sums $2\sum_{n=1}^{N}(-1)^{n+1}\sin(nx)/n$ for $N=3,10$ on $[-3\pi,3\pi]$ to show the sawtooth periodic extension and the jumps at odd multiples of $\pi$.
- [Graph] Plot $x^2$ and the partial sums $\pi^2/3+4\sum_{n=1}^{N}(-1)^n\cos(nx)/n^2$ for $N=1,3$ on $[-3\pi,3\pi]$; the close fit at $N=3$ illustrates the faster $1/n^2$ convergence claimed in the introduction.
- [Graph] A log-log plot of $|b_n|$ for $x$ and $|a_n|$ for $x^2$ versus $n=1..50$ would show the slopes $-1$ and $-2$ predicted by the endpoint test.
- [Structure] The $x$ example applies the real-form Parseval relation before it is introduced in [[05 Parseval's Relation]] (and its real form only appears in Common Errors); state $\tfrac1\pi\int|f|^2=a_0^2/2+\sum(a_n^2+b_n^2)$ here and link it.
- [Simplify] Replace "dated 1734 in the source" with a plain historical statement (Euler, solved 1734, published 1735) and drop the source meta-commentary.

### N1918

Note: [[04 Convergence and the Gibbs Phenomenon|04 Convergence and the Gibbs Phenomenon]]  
Priority: medium · Graph: no · Manim: yes

Mathematically correct with a good existing Gibbs figure, but the norm-versus-pointwise discussion is dense and the note contains source-editing commentary that distracts from the physics.

- [Structure] Rewrite the "[!note]" about the source legend and caption as plain content (N is the highest harmonic, $N=5$ has three terms, $N=25$ thirteen, and the overshoot is $\approx0.179$ above 1, i.e. $\approx8.95\%$ of the jump 2) without referring to "the source".
- [Simplify] The sentence "Convergence to $f$ at a specified point depends on its assigned value; the Fourier coefficients and their series limit do not" is hard to parse; let the concrete $f(0)=7$ example that follows carry the point.
- [Intuition] State the limiting value explicitly: the first peak of the partial sums tends to $\tfrac2\pi\operatorname{Si}(\pi)\approx1.179$ and sits at $x=\pi/(N+1)$ for highest harmonic $N$; link [[08 Exercise 8]] where this is derived.
- [Manim] Animate the sign-function partial sums as odd harmonics are added one at a time (up to $N\approx49$), keeping a fixed overshoot marker while the peak slides toward $x=0$; the motion shows persistent height and shrinking width better than two static curves.
- [Links] The final paragraph on finite kinetic energy could link the box-state section of [[12 Fourier Series/06 Common Errors|Common errors]], where the condition $\sum n^2|c_n|^2<\infty$ is stated.

### N1919

Note: [[05 Parseval's Relation|05 Parseval's Relation]]  
Priority: low · Graph: yes · Manim: no

Correct and well normalized, with a useful best-approximation remark; it lacks a worked numerical example.

- [Links] Turn "the Parseval identity from Chapter 8" into a wiki link to [[03 Orthonormal Bases]] in the Hilbert Space chapter, where the identity and its finite-sum proof appear.
- [Example] Add the sign-function example: $\tfrac1{2\pi}\int_{-\pi}^{\pi}|\operatorname{sgn}|^2dx=1=\sum|c_n|^2$ with $|c_{\pm n}|=2/(n\pi)$ for odd $n$ gives $\sum_{\text{odd}}1/n^2=\pi^2/8$.
- [Graph] Plot the relative mean-square error $1-\tfrac{8}{\pi^2}\sum_{k=0}^{K}(2k+1)^{-2}$ of the sign-function series versus $K=0..30$ (log y-axis) to visualize the finite identity and the slow $1/K$ decay.

### N1920

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/12 Fourier Series/06 Common Errors|06 Common Errors]]  
Priority: medium · Graph: no · Manim: yes

The error list and box-state section are correct, but the quantum section reuses $L$, $\phi_n$, and $c_n$ with new meanings and the file title undersells the quantum content.

- [Correctness] Symbol clash within the note: the box section's $\phi_n=\sqrt{2/L}\sin(n\pi x/L)$ on $[0,L]$ and $c_n$ (box amplitude) collide with $\phi_n^*=e^{-in\pi x/L}/\sqrt{2L}$ and $c_n$ (complex Fourier coefficient) in Errors 1 and 4; rename the box amplitudes or basis (e.g. $\beta_n$, $\chi_n$) rather than relying on the closing callout.
- [Correctness] Macro inconsistency: $\phi_n$ is uncoloured although the table groups it with $\signal{\psi}$ (and Exercise 5 uses \signal{\phi}_n), and $\psi(0)$ in $c_n=\langle\phi_n|\psi(0)\rangle$ is uncoloured; colour them consistently.
- [Simplify] "the sign-independent conservation of norm" is unclear; say the norm is conserved because $|e^{-iE_nt/\hbar}|=1$, independent of the sign convention in the exponent.
- [Structure] Give the quantum material its own clearly separated section (or note); the hub links this note as "Common errors and quantum applications" while the title says only "Common Errors".
- [Manim] Animate $|\psi(x,t)|^2$ for an equal superposition of box modes $n=1,2$, showing the density sloshing with period $2\pi\hbar/(E_2-E_1)$ while the total area stays one, which makes the "local density can vary, norm fixed" remark concrete.

### N1921

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/12 Fourier Series/07 Chapter Summary|07 Chapter Summary]]  
Priority: low · Graph: no · Manim: no

Accurate summary with a good reconstruction paragraph; only the source meta-note is unnecessary.

- [Structure] Remove or rephrase the closing "[!note]" about the source summary; the bullets already distinguish $c_n$ and $d_n$.
- [Simplify] The "Real form" bullet omits the formulas; add $a_n=\tfrac1L\int f\cos(n\pi x/L)\,dx$ and $b_n=\tfrac1L\int f\sin(n\pi x/L)\,dx$ so the summary works as a reference.

### N1922

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/12 Fourier Series/08 Exercises|08 Exercises]]  
Priority: low · Graph: no · Manim: no

Clean exercise index with useful guidance; links resolve.

- [Structure] No change needed.

### N1923

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/12 Fourier Series/99 Exercises/01 Exercise 1|01 Exercise 1]]  
Priority: low · Graph: yes · Manim: no

Correct solution with well-motivated symmetry arguments; the $x=0$ check is mentioned but not carried out.

- [Example] Carry out the $x=0$ check explicitly: it requires $\sum_{k\ge1}(-1)^{k+1}/(4k^2-1)=(\pi-2)/4$, giving $2/\pi+(\pi-2)/\pi=1$ (verified numerically).
- [Graph] Plot $|\cos x|$ and the partial sums with $k\le1$ and $k\le3$ on $[-2\pi,2\pi]$ to show the period-$\pi$ structure and the fast convergence even at the cusps.

### N1924

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/12 Fourier Series/99 Exercises/02 Exercise 2|02 Exercise 2]]  
Priority: low · Graph: no · Manim: no

Correct and clear; it duplicates the sign-function example of the main text, which the note acknowledges.

- [Links] Link "the sign-function example" to [[03 Examples of Fourier Series#Example — The sign function]] and the Gibbs figure in [[04 Convergence and the Gibbs Phenomenon]] instead of only naming them.

### N1925

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/12 Fourier Series/99 Exercises/03 Exercise 3|03 Exercise 3]]  
Priority: low · Graph: yes · Manim: no

Correct and well explained, including the useful non-integer extension.

- [Graph] Plot $I(r)/2L=\sin(\pi r)/(\pi r)$ for real $r\in[-5,5]$ with integer points marked, showing that the overlap vanishes exactly at nonzero integers only.

### N1926

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/12 Fourier Series/99 Exercises/04 Exercise 4|04 Exercise 4]]  
Priority: low · Graph: no · Manim: no

Correct derivation (integral $8\pi^4/45$ and $\pi^4/90$ verified) with good sanity checks.

- [Links] Note that the nonconstant coefficients equal those of $x^2$ in [[03 Examples of Fourier Series#Example — The function f(x) = x²]] and link there, so the integration by parts need not be repeated.

### N1927

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/12 Fourier Series/99 Exercises/05 Exercise 5|05 Exercise 5]]  
Priority: low · Graph: yes · Manim: no

Correct throughout (normalization, $c_n$, $S_5\approx0.999999048$, $P(E_1)\approx0.998555$, $P(E_3)\approx0.00136976$ all verified) and clearly motivated.

- [Graph] Plot the scaled state $\sqrt{30}\,y(1-y)$ and the single-mode approximation $c_1\sqrt2\sin(\pi y)$ on $y\in[0,1]$ to show why $P(E_1)\approx0.9986$; the curves are almost indistinguishable.
- [Intuition] Add one sentence noting that the $n^{-3}$ coefficient decay (and $n^{-6}$ probabilities) reflects that the odd periodic extension of the parabola is continuous with continuous first derivative, linking the smoothness-decay rule from [[03 Examples of Fourier Series]].

### N1928

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/12 Fourier Series/99 Exercises/06 Exercise 6|06 Exercise 6]]  
Priority: low · Graph: no · Manim: no

Correct, and the prefactor correction is right ($2/\pi$ on the half interval); the source meta-commentary is the main distraction.

- [Structure] State the question directly with the correct $2/\pi$ prefactor and reduce the "printed prefactor is incorrect" discussion to a short remark, since vault readers never see "the source".

### N1929

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/12 Fourier Series/99 Exercises/07 Exercise 7|07 Exercise 7]]  
Priority: medium · Graph: no · Manim: yes

Physically correct and careful (energy $\tfrac{\mu D^2}{2}\sum\omega_n^2c_n^2$ verified), but long and burdened by repairs to the original question and some symbol reuse.

- [Correctness] Symbol clash: $\signal{\delta}_n$ (mode phase, question and table) and $\delta_{mn}$ (Kronecker delta, part (a) and the derivative orthogonality) share the letter; rename the phase (e.g. $\varphi_n$), which is never used after the question anyway.
- [Correctness] Notation inconsistency: part (b) writes $c_1\phi_1(\mechanical{x})+c_2\phi_2(\mechanical{x})$ with uncoloured $\phi$ while the rest uses \signal{\phi}_n, and $\energy{E}$ denotes the classical string total while $\langle\energy{E}\rangle$, $\energy{E}_n$ in part (c) are quantum energies; colour $\phi$ consistently and label the classical energy distinctly (e.g. $\energy{E}_{\text{string}}$).
- [Simplify] Reformulate the question to include zero initial velocity, linear density $\mu$, tension $T$, and a displacement scale, so the "[!note]" and the first half of part (b) about missing data shrink to one remark.
- [Manim] Animate the string $y(x,t)$ for $c_1=c_2=1/\sqrt2$ beside $|\psi(x,t)|^2$ for the quantum superposition, showing the string profile's squared norm oscillating while the quantum norm stays one, the key distinction of part (c).

### N1930

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/12 Fourier Series/99 Exercises/08 Exercise 8|08 Exercise 8]]  
Priority: low · Graph: yes · Manim: no

Correct and thorough (tail bounds, $f_N'$ identity, and $\tfrac2\pi\operatorname{Si}(\pi)\approx1.17898$ verified); the source-correction note is the only distraction.

- [Structure] Rephrase part (c) to ask directly which convergence mode fails near the jump and drop the source-wording note, keeping only the cutoff-convention remark (highest harmonic $2N+1$ versus Fig. 12.1).
- [Graph] Plot the exact squared error $2-\tfrac{16}{\pi^2}\sum_{k=0}^{N}(2k+1)^{-2}$ with the bounds $8/[\pi^2(2N+3)]$ and $8/[\pi^2(2N+1)]$ for $N=0..40$ on log-log axes to show the $N^{-1}$ rate.

### N1931

Note: [[00 Fourier Transform|00 Fourier Transform]]  
Priority: low · Graph: no · Manim: no

Clear chapter hub with a useful reading path and a good translation-versus-modulation guiding test; all section links resolve.

- [Structure] No change needed beyond optionally linking the "previous chapter" mention in the first paragraph to the Fourier series chapter hub so the $L\to\infty$ motivation has a direct back-reference.

### N1932

Note: [[01 From Discrete to Continuous|01 From Discrete to Continuous]]  
Priority: medium · Graph: yes · Manim: yes

The formal limit (including $2Lc_n\to\sqrt{2\pi}\hat f(k_n)$ and $d_n\approx\sqrt{\Delta k}\,\hat f(k_n)$) is correct, but the note is terse and abstract, with no concrete function to watch the limit happen.

- [Example] Add a worked instance with $f(x)=e^{-|x|}$ or a Gaussian: compute $2Lc_n$ for $L=2,5,20$ and show the points $(k_n,2Lc_n/\sqrt{2\pi})$ landing on the curve $\hat f(k)$, which makes the "individual $c_n\to0$ but weighted sum survives" sentence concrete.
- [Graph] Plot stems of $2Lc_n/\sqrt{2\pi}$ at $k_n=n\pi/L$ for $L=3$ and $L=10$ over $k\in[-6,6]$ together with the continuous $\hat f(k)=\sqrt{2/\pi}/(1+k^2)$ for $f=e^{-|x|}$, to show the spacing $\Delta k=\pi/L$ shrinking onto the transform.
- [Manim] Animate $L$ growing from 2 to 30: the periodic extension of $f$ on $[-L,L]$ spreads its copies apart while the discrete spectral stems (scaled by $2L$) densify onto the continuous $\hat f(k)$.
- [Structure] Remove the meta references to "the source" in the closing note (e.g. "The source states the integral formulas for $f\in L^2$") and state the $L^2$ extension directly; the reader has no access to the source.
- [Intuition] Before the definition box, add one sentence explaining why the symmetric $1/\sqrt{2\pi}$ split is chosen here (it makes $\mathcal F$ unitary, so Parseval has no extra factor), linking to the Parseval row in [[02 Basic Properties]].

### N1933

Note: [[02 Basic Properties|02 Basic Properties]]  
Priority: medium · Graph: yes · Manim: yes

Property table and derivative proof are correct for the symmetric convention, but the convolution factor is only described in words and the translation/modulation checks lack a picture.

- [Simplify] Write out the convolution derivation explicitly in three lines (insert inverse transforms, use $\int e^{i(k-k')y}dy=2\pi\delta(k-k')$, collect the factors to $\sqrt{2\pi}$) instead of the prose paragraph, so the $\sqrt{2\pi}$ factor can be checked.
- [Example] Add a short worked use of the convolution theorem, e.g. $e^{-x^2/2}*e^{-x^2/2}=\sqrt{\pi}\,e^{-x^2/4}$, verified via $\sqrt{2\pi}\,\hat f\hat g=\sqrt{2\pi}\,e^{-k^2}$.
- [Graph] Two-panel plot for $f(x)=e^{-x^2/2}$: left, $\lvert\mathcal F[f(x-a)]\rvert$ and $\operatorname{Re}\mathcal F[f(x-a)]$ for $a=0,2$ over $k\in[-4,4]$ (same magnitude, oscillating real part); right, $\lvert\mathcal F[e^{ik_0x}f]\rvert$ for $k_0=0,2$ (shifted magnitude).
- [Manim] Animate a Gaussian packet sliding in $x$ while its spectral magnitude stays fixed and its phase winds (real part oscillating), then a modulation $e^{ik_0x}$ being dialled up while the spectral peak slides to $k_0$.
- [Structure] Drop "The source also mentions absolutely continuous functions..." and state the condition directly.

### N1934

Note: [[03 The Dirac Delta Distribution|03 The Dirac Delta Distribution]]  
Priority: medium · Graph: yes · Manim: yes

Correct and careful distributional treatment, but identities (13.3) and (13.4) are stated without derivation and the Gaussian nascent-delta idea has no visual.

- [Simplify] Derive (13.4) from the general rule $\delta(g(x))=\sum_i\delta(x-x_i)/\lvert g'(x_i)\rvert$ for simple roots, stated once; then (13.2) and (13.4) become special cases and the $a\neq0$ remark follows naturally.
- [Example] Add a one-line test-function check of (13.3), $\int x\delta(x)\varphi(x)\,dx=0\cdot\varphi(0)=0$, and an applied example such as $\int\delta(x^2-4)e^{x}dx=\tfrac12\cosh 2$.
- [Graph] Plot $\delta_\sigma(x)=e^{-x^2/(2\sigma^2)}/(\sigma\sqrt{2\pi})$ for $\sigma=1,0.5,0.25,0.1$ over $x\in[-3,3]$, illustrating constant unit area with pointwise blow-up at zero.
- [Manim] Animate $\sigma\to0$ for $\delta_\sigma$ overlaid on a fixed test function $\varphi(x)$, with a running readout of $\int\delta_\sigma\varphi\,dx$ converging to $\varphi(0)$.
- [Intuition] For $\delta(x)=\tfrac1{2\pi}\int e^{ikx}dk$, show the truncated integral $\tfrac1{2\pi}\int_{-K}^{K}e^{ikx}dk=\sin(Kx)/(\pi x)$ as a second nascent delta, which explains why the identity is only distributional.

### N1935

Note: [[04 Important Transform Pairs|04 Important Transform Pairs]]  
Priority: low · Graph: yes · Manim: yes

Gaussian and rectangular transforms, width conventions, prefactor and Parseval checks, and the existing figure (verified: $\sigma_x=0.7$, transform amplitude $0.7$, $\sigma_k$ arrow to $4+1/0.7$) are all correct and well explained.

- [Graph] Add a plot for the rectangular window: $f(x)$ for $L=2$ and $\hat f(k)=\sqrt{2/\pi}\sin(kL/2)/k$ over $k\in[-4\pi,4\pi]$, marking the first zeros at $\pm2\pi/L$ and the $k=0$ value $L/\sqrt{2\pi}$; optionally overlay $L=1$ to show the broader spectrum.
- [Manim] Animate a Gaussian whose $\sigma_x$ is slowly decreased while its transform widens and lowers in sync, with a live readout of $\sigma_x\sigma_k=1$ and $\Delta x\Delta k=1/2$.
- [Intuition] In the chirp paragraph, give an explicit example such as $e^{-ax^2/2}e^{i\beta x^2}$, whose spectral density is Gaussian with a width that grows with $\lvert\beta\rvert$, so "can broaden its Fourier density" is backed by a formula.
- [Structure] Rephrase the callout "The source writes a width estimate..." to state the heuristic $\Delta x\,\Delta k\sim2\pi$ directly.

### N1936

Note: [[05 Position-Momentum Duality|05 Position-Momentum Duality]]  
Priority: low · Graph: yes · Manim: no

Correct ($\widetilde\psi(p)=\hbar^{-1/2}\hat\psi(p/\hbar)$, the Gaussian momentum amplitude, $\Delta p=\hbar/(2\sigma)$ and the table units all check out) and clearly organized.

- [Graph] Side-by-side plot of $\lvert\psi(x)\rvert^2$ and $\lvert\widetilde\psi(p)\rvert^2$ for $\sigma=1$, $\hbar=1$, $p_0=2$ over $x\in[-4,4]$ and $p\in[0,4]$, with $\pm\Delta x$ and $\pm\Delta p$ marked, mirroring Fig. 13.1 but with probability widths.
- [Simplify] Back the claim $\hat x=i\hbar\,\partial_p$ with the same two-line argument used for $\hat p$ (differentiate $\widetilde\psi$ under the integral), or say explicitly that it is left as an exercise.
- [Structure] Remove "The source's short proof suppresses the factor..." and simply state why the $1/\sqrt\hbar$ factor is kept.
- [Simplify] Use one notation for the mean momentum: this note writes $\mechanical{p_0}$ while Exercises 5, 6 and 8 write $\mechanical{p}_0$; align them so the macro colours the subscript consistently.

### N1937

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/13 Fourier Transform/06 Common Errors|06 Common Errors]]  
Priority: medium · Graph: no · Manim: no

Formulas are correct (including $\mathcal F[fg]=\hat f*\hat g/\sqrt{2\pi}$), but the note mixes an error list with a substantial quantum-application section and contains editorial commentary on "the source".

- [Structure] Rewrite Error 4 so it does not say "The source heading says ... That statement is incorrect"; title it directly, e.g. "Every $L^2$ function has a transform, but not every function is in $L^2$", and keep the plane-wave example.
- [Structure] Consider moving the "Quantum mechanics — Position–momentum duality" section and the one after it into [[05 Position-Momentum Duality]], or rename the note to match the hub label "Common errors and quantum applications"; the heading "A stationary equation is not an ordinary probability distribution" is confusing and could read "No normalizable free-particle energy eigenstate".
- [Example] Give Error 2 a concrete counterexample: for $f=g=e^{-x^2/2}$, $\mathcal F[fg]=e^{-k^2/4}/\sqrt2$ while $\hat f\hat g=e^{-k^2}$.
- [Intuition] Under Error 3, add the nascent-Gaussian check $\int\delta_\sigma^2dx=1/(2\sigma\sqrt\pi)\to\infty$, which shows concretely why the delta cannot be normalized.

### N1938

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/13 Fourier Transform/07 Chapter Summary|07 Chapter Summary]]  
Priority: low · Graph: no · Manim: no

Accurate, compact summary consistent with the chapter's conventions and width distinctions.

- [Structure] No change needed; optionally add the translation $e^{-ika}\hat f$ and modulation $\hat f(k-k_0)$ rules as a bullet, since the hub's guiding test relies on them.

### N1939

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/13 Fourier Transform/08 Exercises|08 Exercises]]  
Priority: low · Graph: no · Manim: no

Clean exercise index with working links and a helpful suggested order.

- [Structure] No change needed.

### N1940

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/13 Fourier Transform/99 Exercises/01 Exercise 1|01 Exercise 1]]  
Priority: low · Graph: yes · Manim: no

All three transforms are correct (the sign in (b) verified two ways) and the quick checks are good.

- [Graph] Plot the pair for part (a), $e^{-\lvert x\rvert}$ and $\sqrt{2/\pi}/(1+k^2)$, next to the Gaussian pair $e^{-x^2/2}\leftrightarrow e^{-k^2/2}$ over $k\in[-5,5]$, to visualise the cusp-to-$k^{-2}$-tail versus Gaussian-decay comparison made in the checks.
- [Intuition] In part (c), note that for large $k_0$ the two Gaussians separate and $\hat h$ shows two peaks at $\pm k_0$, the spectral signature of a real oscillating signal.

### N1941

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/13 Fourier Transform/99 Exercises/02 Exercise 2|02 Exercise 2]]  
Priority: low · Graph: no · Manim: no

Short, correct exercise with good direction and magnitude checks.

- [Structure] No change needed.

### N1942

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/13 Fourier Transform/99 Exercises/03 Exercise 3|03 Exercise 3]]  
Priority: low · Graph: no · Manim: no

Correct completion of the square, prefactor and normalization, with useful unit and scaling checks.

- [Simplify] Mention that the result also follows in one line from Parseval plus the normalized position density, so the explicit integral is a check rather than the only route.

### N1943

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/13 Fourier Transform/99 Exercises/04 Exercise 4|04 Exercise 4]]  
Priority: low · Graph: yes · Manim: no

Correct and well checked (derivative-jump balance, uniqueness, singular $k_0\to0$ limit).

- [Graph] Plot $f(x)=e^{-k_0\lvert x\rvert}/(2k_0)$ for $k_0=0.5,1,2$ over $x\in[-5,5]$ to show the cusp with slope jump $-1$ and the growth of the peak $1/(2k_0)$ as $k_0\to0$.
- [Structure] Replace "the Green-function solution requested by the source" with a direct statement of the problem.

### N1944

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/13 Fourier Transform/99 Exercises/05 Exercise 5|05 Exercise 5]]  
Priority: low · Graph: no · Manim: no

Correct moments and uncertainty product, with a good amplitude-versus-density width warning.

- [Simplify] In part (a), "Write $q=p-p_0$ as an integration variable" is misleading because that integral is over $x$; call $q$ the shifted momentum label (it becomes an integration variable only in part (b)).
- [Simplify] Part (a) duplicates Exercise 3; state that the modulation property shifts the Exercise 3 result by $p_0$ and skip the repeated integral.

### N1945

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/13 Fourier Transform/99 Exercises/06 Exercise 6|06 Exercise 6]]  
Priority: low · Graph: yes · Manim: yes

Derivation verified (coefficients $A$, $B$, the prefactor and $\Delta x(t)=\sigma\sqrt{1+\tau^2}$ are correct) and well interpreted, including the Heisenberg-picture cross-check.

- [Graph] Plot $\lvert\psi(x,t)\rvert^2$ for $\tau=0,1,2,4$ with $\sigma=1$ and the centre moving at $p_0/m$, plus a second panel of $\Delta x(t)/\sigma=\sqrt{1+\tau^2}$ against $\tau\in[0,5]$ with its linear asymptote $\tau$.
- [Manim] Animate the packet moving and spreading in time, showing $\operatorname{Re}\psi$ developing a chirp (faster oscillation at the leading edge) while a momentum-density panel stays fixed.
- [Example] Add a numerical scale: an electron with $\sigma=1\,\text{nm}$ has $2m\sigma^2/\hbar\approx1.7\times10^{-14}\,\text{s}$, whereas a $1\,\mu\text{g}$ grain with $\sigma=1\,\mu\text{m}$ needs about $2\times10^{13}\,\text{s}$, giving intuition for why spreading is a quantum-scale effect.

### N1946

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/13 Fourier Transform/99 Exercises/07 Exercise 7|07 Exercise 7]]  
Priority: medium · Graph: yes · Manim: no

Mathematically correct (coefficients $\sqrt{\pi/b}\,f(x_n)$, sinc series, error bound, Parseval for samples, rectangular-pulse transform and the aliasing counterexample check out), but dense for a reader new to sampling.

- [Graph] Plot a band-limited example such as $f(x)=\operatorname{sinc}^2(x/2)$ (band limit $b=1$), its samples at $x_n=n\pi$, and the weighted terms $f(x_n)\operatorname{sinc}(x-x_n)$ summing to $f$ over $x\in[-15,15]$.
- [Graph] Add a second plot of the counterexample $e^{-x^2}\sin(bx)$ for $b=2$, with its zero samples at every $x_n=n\pi/b$ marked, to make the role of band limitation visible.
- [Simplify] Open part (a) with a one-paragraph plain-language idea (a spectrum on a finite interval is a Fourier series, and its coefficients are exactly the samples) before the $L^1$/continuous-representative technicalities.
- [Structure] Remove the repeated "the source's" phrasing in the question, the note callout and part (b), and state the duration–bandwidth heuristic directly with the angular-frequency label.

### N1947

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/04 Frequencies and Transformations/13 Fourier Transform/99 Exercises/08 Exercise 8|08 Exercise 8]]  
Priority: low · Graph: no · Manim: yes

Correct throughout (derivatives of $K$, $A=(1+i\tau)/(4i\sigma^2\tau)$, $m/(2i\hbar tA)=1/(1+i\tau)$, kernel units $\unit{m^{-1}}$ and $\lvert K\rvert^2=m/(2\pi\hbar t)$ verified) and consistent with Exercise 6.

- [Manim] Animate $\operatorname{Re}K(x,t;0,0)$ for decreasing $t$: the chirp oscillates ever faster with growing amplitude, while its integral against a fixed smooth test function converges to $\varphi(0)$.
- [Structure] Replace the callout about the source's "previous exercise" wording with a plain pointer to Exercises 5 and 6.
