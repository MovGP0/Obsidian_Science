---
title: "Note Improvement Tracker – 01 Mathematics/11 Discrete Mathematics and Abstract Algebra"
---

> [!TLDR]
> This note tracks the review of the 27 notes in `01 Mathematics/11 Discrete Mathematics and Abstract Algebra`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 3 possible errors or notation conflicts. 3 of them are verified (3 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N0569|N0569]] Algebra and discrete mathematics - Catalogue Guide: The index link \[\[Planned Topics#5. Algebra and discrete mathematics|the detailed catalogue\]\] has no target in the vault: the only "Planned Topics.md" is a backup inside the hidden `.temp/catalogue-authoring/...` folder, so the link is broken in Obsidian; restore the note or remove the link. **Fixed:** Removed the sentence with the link to the deleted note; also removed BOM and converted CRLF to LF
- [[#N0572|N0572]] Group: "Group homomorphisms ... given a morphism $f$ on the group $(G,·)$ we can define $f(a\cdot b)=f(a)\cdot f(b)$" is wrong as stated: a homomorphism is a map between two groups, $f:(G,\cdot)\to(H,\ast)$ with $f(a\cdot b)=f(a)\ast f(b)$, and it is not a rule "derived from the rules of groups" as the section's first sentence claims. **Fixed:** Rewrote as map f:(G,.)->(H,*) with f(a.b)=f(a)*f(b) for all a,b in G and removed the derivation claim
- [[#N0572|N0572]] Group: The axiom list omits closure and never says that $\cdot$ is a binary operation $G\times G\to G$, so "a special set with additional rules" does not define a group; add closure or define the operation as a map into $G$. **Fixed:** Added that . is a binary operation G x G -> G with closure a.b in G; converted CRLF to LF

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N0557 | [[Continued fractions\|01 Number Theory and Modular Arithmetic/Continued fractions]] | Analyzed | low | yes | yes | [[#N0557\|View]] |
| N0558 | [[Diophantine equations and modular arithmetic\|01 Number Theory and Modular Arithmetic/Diophantine equations and modular arithmetic]] | Analyzed | low | yes | no | [[#N0558\|View]] |
| N0559 | [[Divisibility primes and Fibonacci numbers\|01 Number Theory and Modular Arithmetic/Divisibility primes and Fibonacci numbers]] | Analyzed | low | no | yes | [[#N0559\|View]] |
| N0560 | [[Number theory theorems and primality tests\|01 Number Theory and Modular Arithmetic/Number theory theorems and primality tests]] | Analyzed | low | yes | no | [[#N0560\|View]] |
| N0561 | [[Boolean structure and normal forms\|02 Graphs, Networks, and Boolean Algebra/Boolean structure and normal forms]] | Analyzed | low | no | no | [[#N0561\|View]] |
| N0562 | [[Directed paths and network flows\|02 Graphs, Networks, and Boolean Algebra/Directed paths and network flows]] | Analyzed | low | no | yes | [[#N0562\|View]] |
| N0563 | [[Graph walks and spanning trees\|02 Graphs, Networks, and Boolean Algebra/Graph walks and spanning trees]] | Analyzed | low | no | yes | [[#N0563\|View]] |
| N0564 | [[Matchings and planar graphs\|02 Graphs, Networks, and Boolean Algebra/Matchings and planar graphs]] | Analyzed | low | no | yes | [[#N0564\|View]] |
| N0565 | [[25.01 Group axioms\|03 Groups, Rings, Fields, and Representations/25.01 Group axioms]] | Analyzed | low | no | yes | [[#N0565\|View]] |
| N0566 | [[25.02 Subgroups and homomorphisms\|03 Groups, Rings, Fields, and Representations/25.02 Subgroups and homomorphisms]] | Analyzed | low | no | no | [[#N0566\|View]] |
| N0567 | [[25.03 Group actions\|03 Groups, Rings, Fields, and Representations/25.03 Group actions]] | Analyzed | low | no | yes | [[#N0567\|View]] |
| N0568 | [[25.09 Representations\|03 Groups, Rings, Fields, and Representations/25.09 Representations]] | Analyzed | low | yes | yes | [[#N0568\|View]] |
| N0569 | [[Algebra and discrete mathematics - Catalogue Guide\|03 Groups, Rings, Fields, and Representations/Algebra and discrete mathematics - Catalogue Guide]] | Analyzed | low | no | no | [[#N0569\|View]] |
| N0570 | [[Algebras and compatible quotients\|03 Groups, Rings, Fields, and Representations/Algebras and compatible quotients]] | Analyzed | low | no | no | [[#N0570\|View]] |
| N0571 | [[Group representations and decomposition\|03 Groups, Rings, Fields, and Representations/Group representations and decomposition]] | Analyzed | medium | no | no | [[#N0571\|View]] |
| N0572 | [[Group\|03 Groups, Rings, Fields, and Representations/Group]] | Analyzed | high | no | no | [[#N0572\|View]] |
| N0573 | [[Identities and free constructions\|03 Groups, Rings, Fields, and Representations/Identities and free constructions]] | Analyzed | low | no | no | [[#N0573\|View]] |
| N0574 | [[Operations semigroups and groups\|03 Groups, Rings, Fields, and Representations/Operations semigroups and groups]] | Analyzed | low | no | yes | [[#N0574\|View]] |
| N0575 | [[Rings ideals and finite fields\|03 Groups, Rings, Fields, and Representations/Rings ideals and finite fields]] | Analyzed | low | no | yes | [[#N0575\|View]] |
| N0576 | [[Symmetry groups and applications\|03 Groups, Rings, Fields, and Representations/Symmetry groups and applications]] | Analyzed | medium | yes | no | [[#N0576\|View]] |
| N0577 | [[AES and IDEA block ciphers\|04 Codes, Cryptography, and Fuzzy Systems/AES and IDEA block ciphers]] | Analyzed | medium | no | yes | [[#N0577\|View]] |
| N0578 | [[Check digits and error-correcting codes\|04 Codes, Cryptography, and Fuzzy Systems/Check digits and error-correcting codes]] | Analyzed | low | no | no | [[#N0578\|View]] |
| N0579 | [[Classical ciphers and cryptanalysis\|04 Codes, Cryptography, and Fuzzy Systems/Classical ciphers and cryptanalysis]] | Analyzed | low | yes | no | [[#N0579\|View]] |
| N0580 | [[Fuzzy relations and inference\|04 Codes, Cryptography, and Fuzzy Systems/Fuzzy relations and inference]] | Analyzed | low | yes | no | [[#N0580\|View]] |
| N0581 | [[Fuzzy sets and aggregation\|04 Codes, Cryptography, and Fuzzy Systems/Fuzzy sets and aggregation]] | Analyzed | low | yes | no | [[#N0581\|View]] |
| N0582 | [[Fuzzy systems and interpolation\|04 Codes, Cryptography, and Fuzzy Systems/Fuzzy systems and interpolation]] | Analyzed | medium | yes | no | [[#N0582\|View]] |
| N0583 | [[Perfect secrecy and public-key arithmetic\|04 Codes, Cryptography, and Fuzzy Systems/Perfect secrecy and public-key arithmetic]] | Analyzed | low | yes | no | [[#N0583\|View]] |

## Suggestions

### N0557

Note: [[Continued fractions|Continued fractions]]  
Priority: low · Graph: yes · Manim: yes

Clear, correct introduction with a checked worked expansion and an exact error bound for the $\sqrt2$ convergents; all numbers verified.

- [Graph] In "Approximate the square root of two", plot the convergents $p_k/q_k$ ($1,3/2,7/5,17/12,41/29,99/70$) as points against $k=0..5$ with the horizontal line $y=\sqrt2$, so the alternating above/below approach is visible; optionally a second plot of $\log_{10}|p_k/q_k-\sqrt2|$ against $k$.
- [Manim] Animate the 43×19 rectangle being cut into 2 squares of side 19, 3 of side 5, 1 of side 4 and 4 of side 1; the square counts are exactly the entries $[2;3,1,4]$, which gives a geometric picture of the floor/reciprocal step.
- [Intuition] After the convergent list for 43/19, state the recurrence $p_k=a_kp_{k-1}+p_{k-2}$, $q_k=a_kq_{k-1}+q_{k-2}$ and check it on $9/4\to43/19$; readers can then compute convergents without re-evaluating each nested fraction.
- [Structure] The file is saved with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF, as the Obsidian skill requires.

### N0558

Note: [[Diophantine equations and modular arithmetic|Diophantine equations and modular arithmetic]]  
Priority: low · Graph: yes · Manim: no

Correct and well-motivated treatment of linear Diophantine equations, inverses, linear congruences and CRT; all examples check out.

- [Graph] In "Worked equation and positive solutions", plot the line $3x+5y=7$ for $x\in[-6,9]$ with the integer solutions $(-1+5t,\,2-3t)$, $t=-1..2$, marked as points; the plot shows that the lattice points jump over the first quadrant, which explains "infinitely many integer solutions but no nonnegative ones".
- [Example] In "Linear Diophantine equations", show the extended Euclidean back-substitution for one case (for example $18u+30v=6$) instead of only quoting $3(-1)+5(2)=7$; the reader then sees where $(u,v)$ comes from, as promised in the sufficiency proof.
- [Simplify] In "Solving linear congruences", the phrase "after a possible sign change" is cryptic; write explicitly $ax\equiv b\pmod m\iff ax-b=my\iff ax+m(-y)=b$.
- [Structure] The file is saved with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.

### N0559

Note: [[Divisibility primes and Fibonacci numbers|Divisibility primes and Fibonacci numbers]]  
Priority: low · Graph: no · Manim: yes

Clear and correct survey of divisibility, primes, digit tests, gcd/lcm and Fibonacci coprimality; all worked numbers verified.

- [Manim] Animate the Euclidean algorithm for 252 and 198 as a rectangle tiled by one 198-square, three 54-squares, one 36-square and two 18-squares; the last square side is the gcd 18.
- [Simplify] In "Greatest common divisor and least common multiple", "nonzero positive integers" is redundant; write "positive integers".
- [Intuition] In "Fibonacci numbers", back the claim about long Euclidean chains with one line: $\gcd(21,13)$ runs through $13,8,5,3,2,1$ with all quotients 1 except the last, the worst case for inputs of that size (Lamé's theorem).
- [Example] In "Divisibility criteria from decimal notation", add a one-line justification for the 4 and 8 rules ($100\equiv0\pmod4$, $1000\equiv0\pmod8$) to match the place-value explanation given for 3, 9 and 11.
- [Structure] The file is saved with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.

### N0560

Note: [[Number theory theorems and primality tests|Number theory theorems and primality tests]]  
Priority: low · Graph: yes · Manim: no

Correct and careful explanation of Fermat, Euler, Wilson and Miller–Rabin with verified worked examples ($3^{13}\equiv12\pmod{17}$, the $n=21$ and $n=9$ rounds).

- [Graph] In "Fermat's little theorem", plot $3^k\bmod17$ and $2^k\bmod17$ as point sequences for $k=0..32$; the period 16 for base 3 and period 8 for base 2 show that $a^{p-1}\equiv1$ while the actual order can be a proper divisor of $p-1$.
- [Example] In "Primality tests and false positives", show the Fermat pass of 561 ($2^{560}\equiv1\pmod{561}$) and then a Miller–Rabin round with base 2 that exposes it ($560=2^4\cdot35$, sequence $2^{35}\equiv263$, then $166,67,1$; 1 appears without a preceding $560$), so the reader sees why Miller–Rabin is stronger.
- [Intuition] In the Miller–Rabin paragraph, explain in one sentence why a prime forces the pattern: the sequence $a^d,a^{2d},\ldots,a^{2^sd}=a^{n-1}\equiv1$ ends at 1, so the element just before the first 1 is a square root of 1 other than 1, hence $-1$.
- [Structure] The file is saved with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.

### N0561

Note: [[Boolean structure and normal forms|Boolean structure and normal forms]]  
Priority: low · Graph: no · Manim: no

Clear and correct introduction to Boolean algebras, atoms, duality, normal forms and switching algebra; the XOR worked example is verified.

- [Example] In "Order, atoms, and finite Boolean algebras", add a Hasse-diagram figure of $\mathcal P(\{p,q,r\})$ (a cube with $\varnothing$ at the bottom and the three atoms on the first level); it makes "meet is the greatest lower bound" and "every element is a join of atoms" visible.
- [Simplify] In "Expressions, functions, and normal forms", give the canonical CNF rule a one-line example for the row $x=1,y=0$ (clause $\neg x\vee y$) so the inverted literal choice is not misread.
- [Intuition] The claim "no finite Boolean algebra has exactly six elements" would land better with the reason in one clause: six is not a power of two.
- [Structure] The file is saved with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.

### N0562

Note: [[Directed paths and network flows|Directed paths and network flows]]  
Priority: low · Graph: no · Manim: yes

Accurate and carefully hedged treatment of Dijkstra, Bellman–Ford, DAG paths and max-flow/min-cut; both worked examples and the negative-weight counterexample check out.

- [Manim] Animate Dijkstra on the five-edge example ($s\to a=4$, $s\to b=1$, $b\to a=2$, $a\to t=1$, $b\to t=7$), showing tentative labels changing ($d(a):4\to3$, $d(t):8\to4$) and vertices turning finalized; then animate the three augmenting paths of the flow example with residual edges appearing.
- [Example] Add a small figure of each worked network (vertices $s,a,b,t$ with weights or capacities); both examples are currently described only in prose, which is hard to follow for flows.
- [Example] In "Worked flow and a proof of optimality", add a case that needs a reverse residual edge (for example, first push 1 unit along $s,a,b,t$ in a network where that blocks a better route, then cancel it); the current example never uses a reverse edge, although that is the subtle part of Ford–Fulkerson.
- [Structure] The file is saved with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.

### N0563

Note: [[Graph walks and spanning trees|Graph walks and spanning trees]]  
Priority: low · Graph: no · Manim: yes

Clear and correct coverage of graph terms, BFS/DFS, Euler trails, trees and Kruskal with a supporting figure; practice answers verified.

- [Manim] Animate BFS and DFS from $A$ on the weighted example graph side by side, colouring the queue/stack frontier, so the layer-by-layer property of BFS and the deep-branch behaviour of DFS are seen to differ.
- [Example] In "Euler trails and Hamiltonian cycles", add a small figure of the two triangles sharing a vertex and of the square with one diagonal; the two counterexamples are the key point of the section and are hard to picture from text.
- [Intuition] In the Kruskal correctness paragraph, name the cut for the example (when $CD$ is accepted, the cut is $\{A,B,C\}$ versus $\{D\}$, and $CD=4<BD=5$) so the abstract exchange argument has a concrete instance.
- [Structure] The file is saved with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.

### N0564

Note: [[Matchings and planar graphs|Matchings and planar graphs]]  
Priority: low · Graph: no · Manim: yes

Correct and well-structured treatment of matchings, Berge, Hall and Euler's formula with the standard $K_5$ and $K_{3,3}$ bounds.

- [Manim] Animate the bipartite augmenting path $b\to1\to a\to2$: highlight the alternating edges, then flip them so $\{a1\}$ becomes $\{b1,a2\}$; this shows why the matching grows by exactly one.
- [Example] Add a figure of $K_4$ drawn with a crossing and redrawn without one, with $n=4$, $m=6$, $f=4$ labelled; it supports both "a drawing with crossings does not prove nonplanarity" and Euler's formula.
- [Simplify] In the $m\le3n-6$ paragraph, write the two-line algebra explicitly: $f\le2m/3$ and $f=2-n+m$ give $2-n+m\le2m/3$, hence $m\le3n-6$.
- [Structure] The file is saved with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.

### N0565

Note: [[25.01 Group axioms|25.01 Group axioms]]  
Priority: low · Graph: no · Manim: yes

Clear, correct introduction to the group axioms with good worked examples for $\mathbb Z/4\mathbb Z$ and $S_3$.

- [Manim] Animate an equilateral triangle with labelled vertices undergoing $p=(12)$ then $q=(23)$ versus $q$ then $p$, ending in different positions; this makes $pq\ne qp$ and the rightmost-first convention concrete.
- [Example] Add the Cayley table of $\mathbb Z/4\mathbb Z$ to the worked example; the identity row and the inverse pairs ($1\oplus3=0$) can then be read off directly.
- [Links] This note overlaps with \[\[Group\]\] and \[\[Operations semigroups and groups\]\]; add a "See also" link to the latter so the two group introductions are connected.
- [Structure] The file uses CRLF line endings; save with LF as the Obsidian skill requires.

### N0566

Note: [[25.02 Subgroups and homomorphisms|25.02 Subgroups and homomorphisms]]  
Priority: low · Graph: no · Manim: no

Concise, correct treatment of the subgroup test, kernels, images and the first isomorphism theorem with good examples.

- [Intuition] In "Worked example: a remainder map", add a sentence or small figure that wraps the integer line around a 4-point circle, so "each fiber is a coset" becomes visual.
- [Example] In "Subgroups inherit the rule", add one finite non-example, such as $\{0,1\}\subset\mathbb Z/4\mathbb Z$ failing closure ($1+1=2$), next to the positive-even-integer example.
- [Structure] The file uses CRLF line endings; save with LF.

### N0567

Note: [[25.03 Group actions|25.03 Group actions]]  
Priority: low · Graph: no · Manim: yes

Clear and correct note on actions, orbits, stabilizers and invariants with a verified $D_4$ example and figure.

- [Manim] Animate all eight $D_4$ elements acting on the square while tracking vertex $v=(1,1)$: the orbit fills all four vertices, and only the identity and the $y=x$ reflection return $v$ to itself.
- [Example] Add a second orbit–stabilizer case with a different split, for example $D_4$ acting on the set of the two diagonals (orbit size 2, stabilizer of order 4), so the formula is seen with three different stabilizer sizes (2, 4, 8).
- [Simplify] In "Orbits and stabilizers", the coset argument would read more easily if it first stated "the map $gG_x\mapsto g\cdot x$ is well defined and injective" and then gave the one-line reason.
- [Structure] The file uses CRLF line endings; save with LF.

### N0568

Note: [[25.09 Representations|25.09 Representations]]  
Priority: low · Graph: yes · Manim: yes

Correct and careful note on representations, faithfulness, equivalence and irreducibility, with verified eigenvectors of $R(\theta)$ and a correct pullback sign.

- [Graph] Plot $\cos(n\theta)$, the real part of $\rho_n(e^{i\theta})$, for $n=0,1,2,3$ over $\theta\in[0,2\pi)$; the points where a curve equals 1 are exactly the kernel elements (one, two, three points for $n=1,2,3$), which matches the faithfulness discussion and Practice 1.
- [Manim] Animate a point $z=e^{i\theta}$ moving once around the unit circle while a second point $\rho_n(z)=z^n$ moves on another circle for $n=1,2$; the image winding twice shows why $\pm1$ both act trivially for $n=2$.
- [Simplify] In "Equivalent representations and invariant subspaces", the inequivalence argument ("A nonzero scalar $T$ would commute with both scalar actions") is indirect; write $T\rho_1(z)=\rho_2(z)T\Rightarrow Tz=z^2T\Rightarrow z=z^2$, which fails at $z=-1$.
- [Structure] The file uses CRLF line endings; save with LF.

### N0569

Note: [[Algebra and discrete mathematics - Catalogue Guide|Algebra and discrete mathematics - Catalogue Guide]]  
Priority: low · Graph: no · Manim: no

Useful chapter route and lesson index; the worked example is correct.

- [Correctness] The index link \[\[Planned Topics#5. Algebra and discrete mathematics|the detailed catalogue\]\] has no target in the vault: the only "Planned Topics.md" is a backup inside the hidden `.temp/catalogue-authoring/...` folder, so the link is broken in Obsidian; restore the note or remove the link.
- [Structure] This chapter-level hub sits inside the "03 Groups, Rings, Fields, and Representations" subfolder although it indexes all four subfolders; move it to the chapter root "11 Discrete Mathematics and Abstract Algebra" and add the numbered 25.01–25.09 notes to the index.
- [Structure] The file is saved with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.

### N0570

Note: [[Algebras and compatible quotients|Algebras and compatible quotients]]  
Priority: low · Graph: no · Manim: no

Correct and well-paced introduction to signatures, homomorphisms, congruences and the isomorphism theorems, with a supporting figure.

- [Simplify] In "Congruence and quotient algebra", the sign-partition counterexample uses binary subtraction, which is not in the signature $(\mathbb Z,+,-,0)$ defined earlier (there "$-$" is unary negation); use addition instead: $1\sim1$ and $-2\sim-1$, but $1+(-2)=-1$ and $1+(-1)=0$ lie in different classes, and name the related input pairs explicitly.
- [Example] In "Homomorphism theorems", show the "quotienting twice" example concretely: the classes $\{[0]_4,[2]_4\}$ and $\{[1]_4,[3]_4\}$ become $[0]_2$ and $[1]_2$.
- [Structure] The file is saved with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.

### N0571

Note: [[Group representations and decomposition|Group representations and decomposition]]  
Priority: medium · Graph: no · Manim: no

Correct but dense survey that packs special representations, tensor products, Maschke, Schur, Clebsch–Gordan and $S_n$ into one note; the $S_3$ and swap examples are verified.

- [Structure] Split the note or add explicit "core" versus "outlook" labels: Clebsch–Gordan for $SU(2)$ and the Specht classification are stated without proof and need concepts (Lie groups, Young tableaux) that the listed prerequisites do not introduce.
- [Simplify] In "Irreducible representations of Sₙ", "such as $3=3=2+1=1+1+1$" is confusing notation; write "the partitions of 3 are $3$, $2+1$ and $1+1+1$".
- [Example] In "Irreducible representations of Sₙ", draw the three Young diagrams for $n=3$ and the two standard tableaux of shape $2+1$, so the dimension 2 is counted rather than stated.
- [Intuition] In "Direct sums and products", give the $2\times2$ block-diagonal matrix of trivial ⊕ sign for $C_2$ and the $4\times4$ Kronecker matrix of swap ⊗ swap, so the difference in dimension ($2+2$ versus $2\cdot2$) is visible.
- [Structure] The file is saved with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.

### N0572

Note: [[Group|Group]]  
Priority: high · Graph: no · Manim: no

Unformatted stub without frontmatter or TLDR that duplicates 25.01 and misstates what a homomorphism is.

- [Correctness] "Group homomorphisms ... given a morphism $f$ on the group $(G,·)$ we can define $f(a\cdot b)=f(a)\cdot f(b)$" is wrong as stated: a homomorphism is a map between two groups, $f:(G,\cdot)\to(H,\ast)$ with $f(a\cdot b)=f(a)\ast f(b)$, and it is not a rule "derived from the rules of groups" as the section's first sentence claims.
- [Correctness] The axiom list omits closure and never says that $\cdot$ is a binary operation $G\times G\to G$, so "a special set with additional rules" does not define a group; add closure or define the operation as a map into $G$.
- [Structure] Add a quoted `title` frontmatter and a TLDR callout, or better replace the stub with a short redirect to \[\[25.01 Group axioms\]\] and \[\[25.02 Subgroups and homomorphisms\]\]; keep the file name because \[\[Group\]\] is linked from the Category Theory note "Functor".
- [Structure] The file uses CRLF line endings; save with LF.

### N0573

Note: [[Identities and free constructions|Identities and free constructions]]  
Priority: low · Graph: no · Manim: no

Clear and correct introduction to terms, identities, varieties, HSP and free monoids with good worked mapping-property examples.

- [Example] In "Term algebra before imposing identities", evaluate $(a*b)*a$ and $a*(b*a)$ in a non-associative target (for example integers with $x*y=x-y$, $a=5,b=2$: $-2$ versus $8$) so the reader sees why the term algebra keeps them distinct.
- [Intuition] In "Why identities survive constructions", add a class that fails one closure property, for example fields are not closed under direct products ($\mathbb F_2\times\mathbb F_2$ has zero divisors), which ties HSP back to the earlier remark that fields are not a variety.
- [Structure] The file is saved with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.

### N0574

Note: [[Operations semigroups and groups|Operations semigroups and groups]]  
Priority: low · Graph: no · Manim: yes

Clear and correct introduction to operations, semigroups, monoids, groups, subgroups and homomorphisms; the $rs\ne sr$ corner check is verified.

- [Manim] Animate the square with a marked upper-right corner under $r$ then $s$ and under $s$ then $r$, ending at lower-left versus upper-right; this is the noncommutativity argument of "Worked example: four rotations".
- [Simplify] In the reflection paragraph, state the composition convention ($sr$ means apply $r$ first) before using it; the note uses rightmost-first implicitly, while 25.01 states it explicitly.
- [Example] In "Subgroups and direct products", put the Cayley tables of $C_4$ and $C_2\times C_2$ side by side; the all-$e$ diagonal of $C_2\times C_2$ shows the order-2 argument at a glance.
- [Structure] The file is saved with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.

### N0575

Note: [[Rings ideals and finite fields|Rings ideals and finite fields]]  
Priority: low · Graph: no · Manim: yes

Correct and well-explained note on rings, ideals, quotients, $\mathbb F_4$ and an LFSR; the seven-state cycle and all field calculations are verified.

- [Manim] Animate the 3-bit register $(u,v,w)\mapsto(v,w,u+v)$ shifting left with the feedback bit $u+v$ entering on the right, cycling through all seven nonzero states.
- [Example] In "Worked construction: a field with four elements", add the full multiplication table of $\mathbb F_4=\{0,1,a,a+1\}$ and contrast it with the table of $\mathbb Z/4\mathbb Z$ (where $2\cdot2=0$), so "different from remainders modulo 4" is concrete.
- [Intuition] In "Finite fields and shift registers", list the powers of $x$ in $\mathbb F_2[x]/(x^3+x+1)$: $x,x^2,x+1,x^2+x,x^2+x+1,x^2+1,1$; this seven-cycle justifies "multiplication by a root cycles through the seven nonzero field elements".
- [Structure] The file is saved with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.

### N0576

Note: [[Symmetry groups and applications|Symmetry groups and applications]]  
Priority: medium · Graph: yes · Manim: no

Correct but broad note (square group, $C_{2v}$, crystallographic restriction, quantum symmetry, Fourier modes) in which several sections are statements without worked examples.

- [Graph] In "Crystallographic groups", plot $y=2\cos\theta$ for $\theta\in[0,2\pi]$ with horizontal lines at $y=-2,-1,0,1,2$ and mark the angles $2\pi/k$ for $k=1,2,3,4,6$; the fivefold angle $72^\circ$ gives $2\cos72^\circ\approx0.618$, visibly not an integer.
- [Example] In "Molecular symmetry as labeled geometry", add the $C_{2v}$ multiplication table (identity, $C_2$, two mirrors), showing it is $C_2\times C_2$ like the rectangle group in Practice 1.
- [Structure] The "Symmetry in quantum mathematics" and "Further uses and limits" sections are outlook material without exercises; label them as an outlook or move them to a physics-facing note, and keep the square group and the lattice restriction as the core.
- [Structure] The file is saved with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.

### N0577

Note: [[AES and IDEA block ciphers|AES and IDEA block ciphers]]  
Priority: medium · Graph: no · Manim: yes

Accurate but dense description of AES and IDEA; the byte products ($02\cdot83=1D$, $03\cdot57=F9$) and the IDEA round example are verified, but the flow of operations is hard to follow in prose.

- [Manim] Animate one AES round on a $4\times4$ state where one byte is changed: SubBytes changes that byte, ShiftRows moves it, MixColumns spreads it to its whole column, and a second round spreads it to all 16 bytes; this shows the diffusion claim directly.
- [Example] Add a block diagram of the IDEA round (four word lines, the $\odot$, $\boxplus$, $\oplus$ boxes for $a..g$, and the middle-word swap); the formulas for $e,f,g$ are hard to picture without it.
- [Simplify] In "AES structure", name the inverse operations explicitly (InvSubBytes, InvShiftRows shifting right, InvMixColumns with matrix entries $0E,0B,0D,09$) instead of only "decryption reverses the operations".
- [Structure] The file is saved with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.

### N0578

Note: [[Check digits and error-correcting codes|Check digits and error-correcting codes]]  
Priority: low · Graph: no · Manim: no

Clear and correct note; the weighted check, Hamming distance, the [7,4] Hamming encoding and syndrome decoding are all verified.

- [Intuition] In "Weighted checks", note that the check symbol $c$ has weight 1, the same as $d_1$, so swapping $d_1$ and $c$ is not detected; ISBN-10 avoids this with distinct weights $10,9,\ldots,1$ for all positions including the check digit.
- [Example] In "Worked encoding and decoding", show the syndrome product $Hr$ row by row for $r=0110001$ (row sums $0,1,1$), since this is the step a reader will want to reproduce.
- [Structure] The file is saved with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.

### N0579

Note: [[Classical ciphers and cryptanalysis|Classical ciphers and cryptanalysis]]  
Priority: low · Graph: yes · Manim: no

Correct and well-scoped note on affine, Vigenère and Hill ciphers and statistical attacks; all modular calculations and the index-of-coincidence numbers are verified.

- [Graph] In "Statistical cryptanalysis", plot the Friedman model $I(r)=1/26+(0.066-1/26)/r$ for $r=1..10$ (with $I_L\approx0.066$ for English) together with the asymptote $y=1/26$; it shows why long periods become hard to distinguish from random text.
- [Example] Add an English letter-frequency bar chart or a table of the most common letters (E, T, A, O) in "Statistical cryptanalysis", since frequency analysis is discussed without any frequencies.
- [Example] Show the known-plaintext attack on the affine cipher in two lines: from $H\to R$ and one more pair, solve $17\equiv7a+b$ and the second congruence for $(a,b)=(5,8)$.
- [Structure] The file is saved with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.

### N0580

Note: [[Fuzzy relations and inference|Fuzzy relations and inference]]  
Priority: low · Graph: yes · Manim: no

Clear and correct note; the max–min product, inference example and centroid comparisons are verified.

- [Graph] In "Worked comparison", plot the output memberships $(0,0.6),(5,0.5),(10,0.4)$ as stems with vertical markers at the centroid $13/3$ and at the maximum $0$, so the disagreement between methods is visible.
- [Intuition] In "Max–min relation product", connect the formula to path strength in a weighted graph (strongest chain, weakest link), which matches the reader's intuition from the graph notes.
- [Example] Add a short check of max–min transitivity on a $3\times3$ relation that fails it, since the definition is given without an example.
- [Structure] The file is saved with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.

### N0581

Note: [[Fuzzy sets and aggregation|Fuzzy sets and aggregation]]  
Priority: low · Graph: yes · Manim: no

Clear and correct note on membership, α-cuts, t-norms, compensatory operators, complements and the extension principle; all numbers verified.

- [Graph] In "Pointwise operations", plot two triangular memberships ("close to 5" and "close to 7", both with half-width 5) on $x\in[0,12]$ with their pointwise min and max as additional curves; the min curve shows the intersection directly.
- [Graph] In "Choose an aggregation rule deliberately", plot the three t-norms $\min(a,0.8)$, $0.8a$ and $\max(0,a-0.2)$ against $a\in[0,1]$ for fixed $b=0.8$, showing the ordering Łukasiewicz ≤ product ≤ minimum.
- [Intuition] In the α-cut paragraph, mention that the cuts are nested ($A_{0.8}=[4,6]\subset A_{0.6}=[3,7]$), which is why a fuzzy set can be rebuilt from its cuts.
- [Structure] The file is saved with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.

### N0582

Note: [[Fuzzy systems and interpolation|Fuzzy systems and interpolation]]  
Priority: medium · Graph: yes · Manim: no

Correct worked Mamdani, Sugeno, feedback and interpolation examples (all recomputed), but the "Regular systems" section spends space on catalogue naming and shows the controller for only two steps.

- [Graph] Plot the Mamdani output $y_M(x)$ and the zero-order Sugeno output $y_S(x)=2+6x$ for $x\in[0,1]$ with the example rules; the nonlinear, narrower Mamdani curve makes "different method, different system" concrete.
- [Graph] In "Knowledge-based interpolation", add a 3D surface of the bilinear interpolant $z=2x(1-u)+4(1-x)u+6xu$ on $[0,1]^2$ with the four corner values marked.
- [Example] In "Regular systems", simulate the controller for 8–10 steps from $s_0=0.6$, $e_{-1}=-0.4$ and show $s_k$ as a table or point plot, so the reader sees whether the policy converges, oscillates or stalls instead of seeing only two steps.
- [Simplify] Shorten the first paragraph of "Regular systems" (catalogue label versus Handbook title and page numbers) to one sentence or a footnote; it is editorial metadata, not mathematics.
- [Structure] The file is saved with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.

### N0583

Note: [[Perfect secrecy and public-key arithmetic|Perfect secrecy and public-key arithmetic]]  
Priority: low · Graph: yes · Manim: no

Clear and correct note; the one-time pad, Diffie–Hellman ($A=8$, $B=19$, shared value 2) and RSA ($13^{27}\equiv7\pmod{55}$) examples are verified.

- [Graph] In "Diffie and Hellman's concept", plot $5^k\bmod23$ as points for $k=0..22$; the irregular scatter illustrates why recovering $k$ from the value (the discrete logarithm) has no obvious shortcut, while the forward direction is easy.
- [Intuition] In "One-time pad and perfect secrecy", add a two-bit table showing that for ciphertext $C=10$ every message $00,01,10,11$ is possible with exactly one key, which is the core of the proof.
- [Example] In "RSA: a complete small example", add why $e=3$ with small messages is dangerous (if $m^3<n$, the ciphertext is the ordinary cube and an integer cube root recovers $m$), as a concrete reason for randomized padding.
- [Structure] The file is saved with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.
