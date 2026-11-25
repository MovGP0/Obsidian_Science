---
title: "Note Improvement Tracker – 01 Mathematics/13 Topology, Differential Geometry, and Symmetry"
---

> [!TLDR]
> This note tracks the review of the 193 notes in `01 Mathematics/13 Topology, Differential Geometry, and Symmetry`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 58 possible errors or notation conflicts. 58 of them are verified (54 fixed, 3 partly, 1 rejected); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N0620|N0620]] Box counting and random-walk distributions: The "Physical quantities" table lists symbols from other notes that are never used here and clash with this note: $M$ as carrying capacity (here $M$ is the square side length), $\delta$ as wolf decline rate (here $\delta$ is the Dirac delta), $x,y$ as ingredient amounts in oz (here positions), $s$ as protein surplus (here the signed step), $t$ as iron surplus and $1/\alpha$ (here time, $\alpha$ unused); keep only $\Delta x$, $\Delta t$, $D$, $U$ and add $L$ (box size) and $p$, $C$ if desired. **Fixed:** Removed the six foreign rows; added rows for Delta y, box size L, square side M, positions x,y, signed step s and time t (all with length or time units)
- [[#N0655|N0655]] 2.11 Laplacian: Symbol clash: $\phi$ denotes the scalar field in Eqs. (2.43)–(2.50) and the $k/r$ example, but the azimuth angle in Eqs. (2.51)–(2.52) (where the field is renamed $\psi$); use $\psi$ for the scalar field throughout the note. **Rejected:** The note explicitly introduces psi as the scalar field before Eqs. (2.51)-(2.52), so each equation is unambiguous; renaming phi would also contradict the phi_0 labels in Fig. 2.17 and its caption
- [[#N0670|N0670]] 3.5 Chapter 3 problems: Problem 3.3 gives a push of 10 N on a box of unspecified mass $m$; the speed at the top depends on $m$ ($a=F/m-g(\sin25^\circ+0.33\cos25^\circ)$, and the box only accelerates up the ramp if $m<1.41\,\mathrm{kg}$), so state a numerical mass. **Partly:** Dependence on m and the 1.41 kg limit are correct (g(sin25+0.33cos25)=7.08 m/s^2); no source mass is known, so instead of inventing one the problem now asks for the speed as a function of m and states the m<1.41 kg condition
- [[#N0688|N0688]] 5.5 Metric tensor: Symbol clash: $\phi$ is the spherical azimuth in Eqs. (5.16)–(5.18) and the scalar field in the gradient and Laplacian formulas; $\theta$ is both the angle between $\vec A$ and $\vec B$ and the polar angle. Rename the scalar field (e.g. $f$, as in 4.9) and the inter-vector angle (e.g. $\vartheta$). **Fixed:** Renamed the scalar field in the gradient and Laplacian formulas to f and the angle between A and B to vartheta (with a short defining phrase)
- [[#N0694|N0694]] 6.1 The inertia tensor: Symbol clash: $\mechanical{a}$ denotes acceleration (intro and table) and the pyramid half-side, and $a,b$ are also used as component indices in $\mechanical{I}_{ab}$; rename the half-side (e.g. $\mechanical{d}$) or the indices ($j,k$) and keep only one meaning per symbol in the table. **Partly:** Index clash is real: renamed component indices a,b to j,k in I_jk; kept the half-side a because Fig. 6.2 labels it a and the text marks it as a length, distinct from the vector acceleration vec a
- [[#N0695|N0695]] 6.2 The electromagnetic field tensor: Symbol clash: $\mechanical{v}$ is the generic wave speed in Eq. (6.12) and the frame speed in the boost, and $\vec A$ is a generic vector field in Eq. (6.12) while $A$ is the Lorentz matrix in Eq. (6.18); rename the wave-equation field (e.g. $\vec\Psi$) and speed ($u$), and update the table. **Fixed:** Renamed the field in Eq. (6.12) to vec Psi and its speed to u; added a wave-speed row for u to the table
- [[#N0697|N0697]] 6.4 Chapter 6 problems: The table lists $\theta$ only as the rotation angle of Problem 6.3, but Problem 6.9 uses $\theta$ as the polar angle in $ds^2=d\mechanical{r}^2+\mechanical{r}^2d\theta^2$; add the polar-angle meaning to that row (or use a different letter, e.g. $\alpha$, for the 20° rotation). **Fixed:** The 20 degree rotation has no symbol in the text, so the theta row now describes the polar angle of Problem 6.9
- [[#N0731|N0731]] Surface geometry curvature and geodesics: Symbol clash: $f$ is the graph function in $r(u,v)=(u,v,f(u,v))$ and also the second-form coefficient $f=n\cdot r_{uv}$, and $F$ is both the level-surface function $F(x,y,z)=0$ and the first-form coefficient $F=r_u\cdot r_v$; rename the second-form coefficients (e.g. $L,M,N$) and the implicit function (e.g. $\Phi$). **Fixed:** Renamed second-form coefficients e,f,g to L,M,N (definition, k_n formula, paraboloid example) and the implicit function F to Phi; also removed the UTF-8 BOM and stored with LF
- [[#N0751|N0751]] Exterior Product: "$(a\wedge b)_i = ε_{ijk}\ a_j e_j\ b_k e_k$" mixes components with basis vectors and gives a vector, not a bivector; the bivector components are $(a\wedge b)_{jk}=a_jb_k-a_kb_j$, and in 3D its Hodge dual is the cross product $(a\times b)_i=\varepsilon_{ijk}a_jb_k$. **Fixed:** Replaced by bivector components (a wedge b)_jk = a_j b_k - a_k b_j and added that its 3D Hodge dual is (a x b)_i = eps_ijk a_j b_k
- [[#N0751|N0751]] Exterior Product: "$c_i = ε_{ijkl} \, a_j \, b_k \, e_l$" uses a four-index Levi-Civita symbol in three dimensions with a free basis vector; delete it or replace it by $a\wedge b=\tfrac12(a_jb_k-a_kb_j)\,e_j\wedge e_k$. **Fixed:** Replaced by c = 1/2 (a_j b_k - a_k b_j) e_j wedge e_k
- [[#N0751|N0751]] Exterior Product: "2D exterior product: Special case of the cross product" writes $a\times b=a_xb_y-a_yb_x$; in 2D the wedge is $a\wedge b=(a_xb_y-a_yb_x)\,e_x\wedge e_y$ (a multiple of the unit bivector), and the wedge exists in every dimension while only in 3D is it dual to the cross product, so "higher order version of the cross product" inverts the relation. **Fixed:** 2D formula now a wedge b = (a_x b_y - a_y b_x) e_x wedge e_y with text on the unit bivector; intro now says the wedge exists in every dimension and is dual to the cross product in 3D; converted CRLF to LF
- [[#N0753|N0753]] Algebra of Rotation: The heading "Algebraic Spaces of Rotation $SO(n)$" lists complex numbers, quaternions and spinors, which represent $U(1)\cong SO(2)$ and $SU(2)=\mathrm{Spin}(3)$ (a double cover), not $SO(n)$ itself; retitle e.g. "Representations of rotations" and state which group each item realizes. **Fixed:** Retitled heading to Representations of Rotations (no incoming heading links) and stated the group each item realizes: SO(3), SO(n), U(1)=SO(2), SU(2) double cover, Spin(3)
- [[#N0754|N0754]] Homotopology classes in the Axis-Angle Space: "Those loops may have a winding number greater than 0" suggests an integer invariant; the fundamental group of $SO(3)$ is $\mathbb Z_2$, so there are exactly two classes and no integer winding number. Say this explicitly. **Fixed:** Now states no integer winding number and that pi_1(SO(3)) = Z_2 gives exactly two classes
- [[#N0754|N0754]] Homotopology classes in the Axis-Angle Space: The space is described only as "a loop around a spherical space ... represented as a circle"; state precisely that the axis-angle space is the solid ball of radius $\pi$ with antipodal boundary points identified ($\mathbb{RP}^3$), and that a "teleport" is passing through the boundary to the antipodal point. **Fixed:** Now describes the solid ball of radius pi with antipodal boundary points identified (RP^3) and the teleport as continuing from the antipodal boundary point
- [[#N0755|N0755]] Homotopology: "Two curves are called homotopic when they have the same Topology" is wrong: all curves have the topology of an interval or circle; homotopy is a continuous deformation inside a given space (with fixed endpoints, or freely for loops). Replace with the definition $H:[0,1]\times[0,1]\to X$, $H(\cdot,0)=\gamma_0$, $H(\cdot,1)=\gamma_1$. **Fixed:** Replaced the callout with the definition via H:[0,1]x[0,1]->X, H(.,0)=gamma_0, H(.,1)=gamma_1, fixed endpoints or free for loops
- [[#N0755|N0755]] Homotopology: "A homotopic class is defined by the winding number" is only true for spaces with fundamental group $\mathbb Z$ (circle, annulus, cylinder); for $SO(3)$, used in the companion note, the classes form $\mathbb Z_2$. State the general notion (fundamental group $\pi_1(X)$) and give winding number as the $\mathbb Z$ example. **Fixed:** Defined classes generally via pi_1(X), kept winding number as the Z example (circle, annulus, cylinder) and noted pi_1(SO(3)) = Z_2
- [[#N0756|N0756]] Rotation using Axis-Angle Vector: "can be represented by some (one or more) axis" contradicts Euler's rotation theorem cited right below: every rotation of $\mathbb R^3$ is a rotation about exactly one axis (unique unless the rotation is the identity). **Fixed:** Now says exactly one axis, unique unless the rotation is the identity
- [[#N0756|N0756]] Rotation using Axis-Angle Vector: The callout "Rotations in 3 dimensions can't be properly represented by an 3d vector ... requires 4 dimensions" is misleading: every rotation is represented by the 3-parameter axis-angle vector ($SO(3)$ is 3-dimensional); what fails is that axis-angle vectors do not compose by addition and do not record the path class, which the unit quaternion on $S^3\subset\mathbb R^4$ captures. **Fixed:** Rewrote: axis-angle vector represents every rotation (SO(3) is 3-dimensional) but does not compose by addition or record the path class, which the unit quaternion on S^3 in R^4 records
- [[#N0756|N0756]] Rotation using Axis-Angle Vector: Symbol clash: the angle is $Θ$ in the first section and $θ$ in "Angular velocity"; also state that $\dot{\hat x}_b=ω_s\times\hat x_b$ requires all vectors expressed in frame $s$. **Fixed:** Changed theta to Theta in the angular-velocity section and stated that all vectors are expressed in frame s; converted CRLF to LF
- [[#N0758|N0758]] Rotation using Matrices: "Because $SO(3)$ is fully contained in $SU(2)$" is wrong: $SO(3)$ is not a subgroup of $SU(2)$ but the quotient $SU(2)/\{\pm I\}$ via a 2-to-1 homomorphism; the line "$v'\leftrightarrow\pm s'$" should be replaced by the map $s\mapsto s^\dagger\vec\sigma s$ from spinors to vectors. **Fixed:** Replaced with v_i = s^dagger sigma_i s (s and -s give the same vector) and stated SO(3) = SU(2)/{+-I} via a 2-to-1 homomorphism, not a subgroup
- [[#N0758|N0758]] Rotation using Matrices: Gimbal lock is a property of Euler-angle parametrizations, not of $SO(3)$ matrices; rotation matrices and unit quaternions are both free of it. Rewrite the warning accordingly. **Fixed:** Warning now attributes gimbal lock to Euler-angle parametrizations and says matrices and unit quaternions are free of it
- [[#N0758|N0758]] Rotation using Matrices: "Rotation matrices are not commutative" contradicts $SO(2)$, which the note treats at length and which is abelian ($R_θR_ϑ=R_{θ+ϑ}$); say $SO(n)$ is non-commutative for $n\ge3$. **Fixed:** Restricted to SO(n), n>=3, in general, and added R_Theta R_vartheta = R_(Theta+vartheta) for SO(2)
- [[#N0758|N0758]] Rotation using Matrices: "In the special case of a matrix with determinant of $-1$, it is considered to be in the group $S(n)$" is wrong: there is no such group; orthogonal matrices with $\det=-1$ form $O(n)\setminus SO(n)$, which is not a group (not closed under products). **Fixed:** Now says orthogonal det -1 matrices form O(n)\SO(n), which is not a group because products have det +1
- [[#N0758|N0758]] Rotation using Matrices: Product rule: if $R_{AB}$ maps column components from frame A to frame B, then $R_{AC}=R_{BC}R_{AB}$, not $R_{AB}R_{BC}$; either reverse the order or define $R_{AB}$ as the orientation of B relative to A (Modern Robotics convention). Also the set definitions "$O(n)={R∈ℝ^{n×n}∣R^TR=I}$" lose their braces when rendered; use escaped braces. **Fixed:** Changed to R_BC R_AB = R_AC matching the stated A-to-B convention; escaped braces in the O(n) and SO(n) set definitions; converted CRLF to LF
- [[#N0760|N0760]] Jones Vectors: "we can assume it to be complex, with a complex value of zero" is wrong: the added imaginary part is $iA\sin(ωt-kz+φ)$, not zero; the physical field is $\mathrm{Re}\,E$. **Fixed:** Replaced with: the field is extended to a complex field, the imaginary part has no physical meaning, the physical field is Re E.
- [[#N0760|N0760]] Jones Vectors: The "Conventions" section attributes the sign of $L=(1,\pm i)$ to the metric signature $(+,-,-,-)$ vs $(-,+,+,+)$; it actually depends on the phase convention $e^{i(ωt-kz)}$ vs $e^{i(kz-ωt)}$ and on whether handedness is defined from the source or the receiver view. **Fixed:** Conventions now name the phase convention e^{i(ωt-kz)} vs e^{i(kz-ωt)} and the source/receiver viewpoint for handedness.
- [[#N0760|N0760]] Jones Vectors: Under "Jones Matrices", waveplates do not "filter circular polarization" (they are lossless retarders), and $\frac1{\sqrt2}\begin{pmatrix}1&i\\i&i\end{pmatrix}$ is not unitary; the 45° quarter-wave plate is $\frac1{\sqrt2}\begin{pmatrix}1&i\\i&1\end{pmatrix}$ up to a global phase. **Fixed:** Waveplates described as lossless retarders; matrix corrected to (1/√2)[[1,i],[i,1]].
- [[#N0760|N0760]] Jones Vectors: In "Phase Shift", adding $φ=\pi/2$ gives $\cos(θ+\pi/2)=-\sinθ$, not $\sinθ$; the quoted identity $\sinθ=\cos(θ-\pi/2)$ corresponds to $φ=-\pi/2$. **Fixed:** Changed the phase to φ = -π/2 to match sinθ = cos(θ-π/2).
- [[#N0760|N0760]] Jones Vectors: Symbol inconsistency: amplitudes appear as $A_x$, $Aʸ$ (Unicode superscript) and $A^x,A^y$, components as bold $\mathbf E^x$ and plain $E^x$; also fix the typos "$eit$", "$\mathbf{_x}$", "_x-direction", "non-traverse", and replace "density in time/space" by frequency $ω/2\pi$ and inverse wavelength $k/2\pi$. **Fixed:** Unified amplitudes to A_x, A_y and components to plain E^x, E^y; fixed e^{it}, \mathbf{x}, x-direction, non-transverse; density in time/space replaced by frequency ω/2π and inverse wavelength k/2π.
- [[#N0761|N0761]] Pointcaré Sphere: "$Q''=\frac12\begin{pmatrix}1&1\\-1&1\end{pmatrix}$" is not unitary; the factor must be $\frac1{\sqrt2}$, as the note's own later callout uses. **Fixed:** Changed the prefactor to 1/√2.
- [[#N0761|N0761]] Pointcaré Sphere: The name is "Poincaré", not "Pointcaré", in the filename, text and reference label (also "Wikipdia"). **Partly:** Fixed "Poincaré Sphere" in text and the reference label (Wikipedia: Poincaré-Kugel); filename not renamed because a rename is outside the brief and affects links in other notes.
- [[#N0762|N0762]] Waveplates: In "Rotated Quarter Waveplate", "$\cos 45° = \cos\frac{π}{2}$" is wrong; $45°=\pi/4$ (the final numeric matrix is correct). **Fixed:** Changed π/2 to π/4 in the middle matrix of G.
- [[#N0762|N0762]] Waveplates: After $QL=A$, "we get the original polarization direction, but with a half cycle phase change" is wrong: $A$ is perpendicular to the original $D$; two quarter-wave passes act as a half-wave plate that maps $D$ to $A$. **Fixed:** Text now says A is perpendicular to D and two quarter-wave passes act as a half waveplate.
- [[#N0762|N0762]] Waveplates: "$e^{i \frac{π}{4}}{4}$" contains a stray "{4}"; the verified result is $G^{-1}QG=e^{i\pi/4}\frac1{\sqrt2}\begin{pmatrix}1&i\\i&1\end{pmatrix}$. **Fixed:** Removed the stray {4}; product G^{-1}QG verified numerically.
- [[#N0763|N0763]] Dirac Equation: "$\hat{p}^μ = -i\hbar \partial_\mu$" has the wrong sign and mismatched index placement for the stated equation; with $\psi\propto e^{-ip\cdot x/\hbar}$ and signature $(+,-,-,-)$, $\hat p_μ=i\hbar\partial_μ$, which turns $(\gamma^μ\hat p_μ-mc)\psi=0$ into $(i\hbar\gamma^μ\partial_μ-mc)\psi=0$. **Fixed:** Changed to p̂_μ = iħ∂_μ and added that with (+,-,-,-) it turns (γ^μ p̂_μ - mc)ψ=0 into the stated equation.
- [[#N0763|N0763]] Dirac Equation: $(\psi_1,\psi_2)$ and $(\psi_3,\psi_4)$ are not "electron spinor" and "positron spin" in general; in the Dirac representation they are the large and small components, which separate into particle and antiparticle parts only in the nonrelativistic limit (in the Weyl representation they are the left- and right-handed parts). **Fixed:** Relabelled as upper (large) and lower (small) components in the Dirac representation; added nonrelativistic-limit and Weyl-representation remark.
- [[#N0763|N0763]] Dirac Equation: "Klein-Gordon let's derive the Lorentz Invariance without Spinors, so electrons are not neccessarily Fermions" is confused: Klein–Gordon is the spin-0 equation; Dirac's first-order equation needs $\{\gamma^μ,\gamma^ν\}=2\eta^{μν}$ and four-component spinors, which is why it describes spin-1/2 particles. **Fixed:** Rewrote note: Klein-Gordon is second order and spin-0; first-order Dirac equation needs {γ^μ,γ^ν}=2η^{μν} and four-component spinors, hence spin-1/2.
- [[#N0764|N0764]] Pauli Exclusion Principle: "Two or more fermions cannot occupy the same quantum state" must say identical fermions; different species (e.g. an electron and a muon) are not constrained. **Fixed:** Added "identical" to the TLDR statement.
- [[#N0765|N0765]] Spin-Statistics-Theorem: The sentence describes the exchange property of fermions, not the theorem; the theorem states that in relativistic quantum field theory integer-spin particles obey Bose statistics (symmetric) and half-integer-spin particles obey Fermi statistics (antisymmetric), and the sign applies to exchange of identical particles only. **Fixed:** Stated the theorem (integer spin Bose, half-integer spin Fermi, in relativistic QFT) and restricted the sign to identical particles.
- [[#N0766|N0766]] Spinors in Physics: "Quarks, Electron, Muon, Tau Neutrino (Tauons)" omits the tau lepton as such and the electron and muon neutrinos; list the six quarks and the six leptons $e,\mu,\tau,\nu_e,\nu_\mu,\nu_\tau$. **Fixed:** Listed six quarks and six leptons (e, μ, τ and three neutrinos) plus antiparticles.
- [[#N0766|N0766]] Spinors in Physics: "spin, is $\frac{n}{2}\hbar$, where $n$ is an integer" includes integer spins; $n$ must be odd. Also the spin quantum number $s$ gives magnitude $\sqrt{s(s+1)}\hbar$ while $s\hbar$ is the maximal projection; say which is meant in both sections. **Fixed:** Fermions: s = n/2 with n odd; both sections now state maximal projection sħ and magnitude √(s(s+1))ħ. Converted CRLF to LF.
- [[#N0767|N0767]] Stern-Gerlach-Experiment: "Born Rule: If two states are mutually exclusive, they must be orthogonal" is not the Born rule; the Born rule is $P=|\braket{\beta|\alpha}|^2$, and orthogonality of perfectly distinguishable outcomes follows from it. **Fixed:** ² as the Born rule and kept orthogonality of mutually exclusive states as its consequence. Converted CRLF to LF.
- [[#N0768|N0768]] Vector Representation of Spinors in Physics: "$\bra{\phi} = \alpha \ket{\uparrow} + \beta \ket{\uparrow}$" should be the ket $\ket{\phi}=\alpha\ket{\uparrow}+\beta\ket{\downarrow}$ (bra on the left side and a repeated $\ket{\uparrow}$). **Fixed:** ↓⟩. Converted CRLF to LF.
- [[#N0768|N0768]] Vector Representation of Spinors in Physics: The table calls $\alpha,\beta$ probabilities; they are complex probability amplitudes, the probabilities are $|\alpha|^2$ and $|\beta|^2$, with $|\alpha|^2+|\beta|^2=1$. **Fixed:** ²=1.
- [[#N0782|N0782]] Quaternions: The Pauli list repeats $\sigma_2$ twice and omits $\sigma_3=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$. **Fixed:** Replaced the duplicate σ2 with σ3 = [[1,0],[0,-1]].
- [[#N0782|N0782]] Quaternions: "They can be used to replace i, j, k in Quaternions" is wrong as stated: $\sigma_a^2=+I$, not $-I$. The correct substitution is $i\mapsto-i\sigma_1$, $j\mapsto-i\sigma_2$, $k\mapsto-i\sigma_3$, which satisfies $i^2=j^2=k^2=ijk=-1$. **Fixed:** Stated σ_a² = σ_0 and the substitution i→-iσ1, j→-iσ2, k→-iσ3 giving i²=j²=k²=ijk=-1.
- [[#N0782|N0782]] Quaternions: "Properties of i, j, k" mixes cross products of basis vectors ($i\times i=0$) with quaternion products ($i^2=-1$) for the same letters; as quaternions $ii=-1$, $ij=k$, $ik=-j$. Use quaternion products throughout, or label the cross-product lines as the vector part of $uv$. **Fixed:** Rewrote the list as quaternion products (ii=jj=kk=-1, ij=k, ik=-j, ...) with a short label. Converted CRLF to LF.
- [[#N0796|N0796]] 27.07 Transition functions: Symbol clash: $B$ is the base space ($\pi:E\to B$) and also a matrix in Practice 2 ($g_{23}=B$), and $A$ names an overlap component in the worked example and a matrix in Practice 2; rename the practice matrices (for example $M,N$). **Fixed:** Renamed the Practice 2 matrices and answer to M, N (MN, NM checked). Removed BOM and converted CRLF to LF.
- [[#N0798|N0798]] 27.09 Connections and holonomy: Symbol clash: $a$ is the rectangle width in "$[0,a]\times[0,b]$" and $\oint A=cab$, and later the real coefficient in $A=a\alpha$ with holonomy $e^{-2\pi ian}$; rename one (for example rectangle sides $w,h$ or coefficient $\kappa$). **Fixed:** Renamed the S^1 coefficient to κ (A=κα, 2πκn, e^{-2πiκn}, κ=1/2). Removed BOM and converted CRLF to LF.
- [[#N0803|N0803]] Category of Categories: "The Category set of all possible [[Category]]" is incorrect and runs into a size paradox; $\mathbf{Cat}$ is the category whose objects are small categories and whose morphisms are functors, with functor composition and identity functors. Also add a quoted title, a TLDR, and a trailing newline. **Fixed:** Defined Cat as small categories with functors, functor composition and identity functors; added quoted title, TLDR, size note and trailing newline.
- [[#N0804|N0804]] Category: Under "Compositions", for $f:A\to B$ and $g:B\to C$ the composite is $g\circ f:A\to C$, not $h=f\circ g$; the note's own associativity law $(h\circ g)\circ f$ uses the right-to-left convention, so the composition line contradicts it. **Fixed:** Changed h = f∘g to h = g∘f, consistent with the associativity law
- [[#N0804|N0804]] Category: The identity law "$I_e(e)=e$" applies a morphism to an element, which a general category does not provide; the law is $f\circ\mathrm{id}_A=f=\mathrm{id}_B\circ f$ for every $f:A\to B$. **Fixed:** Replaced with f∘id_A = f = id_B∘f for f:A→B and reworded the sentence
- [[#N0804|N0804]] Category: "Objects are Elements in a Set" with the set-order and repetition examples is wrong and irrelevant: objects need not form a set (e.g. in $\mathbf{Set}$ itself) and need not have elements, and morphisms need not be functions between sets ("transformation functions"). Remove the set examples and give $\mathbf{Set}$, $\mathbf{Grp}$, $\mathbf{Vect}$ and a poset as examples. **Fixed:** Replaced the set-order and repetition examples with an abstract description and Set, Grp, Vect, poset examples; reworded the morphism definition
- [[#N0805|N0805]] Equivalence: "Two groups $C$ and $D$" should be "two categories"; an equivalence consists of functors $F:C\to D$ and $G:D\to C$ with natural isomorphisms $G\circ F\cong1_C$ and $F\circ G\cong1_D$ (the categories themselves are not "natural isomorph"). **Fixed:** Changed to two categories with functors F:C→D and G:D→C whose compositions are naturally isomorphic to the identity functors
- [[#N0805|N0805]] Equivalence: The natural-transformation paragraph omits the defining condition: $\nu:F\Rightarrow G$ is a family $\nu_X:F(X)\to G(X)$ with $G(f)\circ\nu_X=\nu_Y\circ F(f)$ for every $f:X\to Y$; it is a natural isomorphism when every $\nu_X$ is invertible, which is what $\nu^{-1}$ should express. **Fixed:** Added the component family ν_X and the condition G(f)∘ν_X = ν_Y∘F(f); stated natural isomorphism as all ν_X invertible with inverse ν⁻¹:G⇒F
- [[#N0806|N0806]] Functor: "A Functor is a map between two sets" is wrong; a functor maps between categories (objects to objects, morphisms to morphisms), as the next sentence correctly says. Delete the first sentence. **Fixed:** Deleted the first sentence
- [[#N0807|N0807]] Isomorphism: The text calls the equations "$f\circ f^{-1}=I_B$ and $f^{-1}\circ f=I_A$" the isomorphisms; correctly, $f:A\to B$ is an isomorphism if some $g:B\to A$ satisfies $g\circ f=\mathrm{id}_A$ and $f\circ g=\mathrm{id}_B$, and then $g=f^{-1}$ is unique. **Fixed:** Rewrote definition: f is an isomorphism if some g satisfies g∘f=id_A and f∘g=id_B; g is unique and written f⁻¹
- [[#N0807|N0807]] Isomorphism: "isomorphisms between two sets" should be "between two objects" of a category; in $\mathbf{Set}$ isomorphisms are bijections, in $\mathbf{Grp}$ group isomorphisms, in $\mathbf{Top}$ homeomorphisms. Add these examples, a quoted title, and a TLDR. **Fixed:** Changed to objects of a category; added Set/Grp/Top examples, quoted title and TLDR; converted CRLF to LF

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N0615 | [[27.01 Topological language\|01 Elementary Topology/27.01 Topological language]] | Analyzed | low | yes | no | [[#N0615\|View]] |
| N0616 | [[27.02 Compactness\|01 Elementary Topology/27.02 Compactness]] | Analyzed | low | yes | no | [[#N0616\|View]] |
| N0617 | [[27.03 Identifications\|01 Elementary Topology/27.03 Identifications]] | Analyzed | low | yes | yes | [[#N0617\|View]] |
| N0618 | [[27.04 Loops and homotopies\|01 Elementary Topology/27.04 Loops and homotopies]] | Analyzed | low | no | yes | [[#N0618\|View]] |
| N0619 | [[27.05 Winding numbers\|01 Elementary Topology/27.05 Winding numbers]] | Analyzed | medium | yes | yes | [[#N0619\|View]] |
| N0620 | [[Box counting and random-walk distributions\|01 Elementary Topology/Box counting and random-walk distributions]] | Analyzed | high | yes | yes | [[#N0620\|View]] |
| N0621 | [[18.01 Dual spaces\|02 Tensor Algebra and Manifolds/18.01 Dual spaces]] | Analyzed | low | no | no | [[#N0621\|View]] |
| N0622 | [[18.02 Tensor products\|02 Tensor Algebra and Manifolds/18.02 Tensor products]] | Analyzed | low | no | no | [[#N0622\|View]] |
| N0623 | [[18.03 Tensor type\|02 Tensor Algebra and Manifolds/18.03 Tensor type]] | Analyzed | low | no | no | [[#N0623\|View]] |
| N0624 | [[18.04 Components\|02 Tensor Algebra and Manifolds/18.04 Components]] | Analyzed | low | no | no | [[#N0624\|View]] |
| N0625 | [[18.05 Transformation laws\|02 Tensor Algebra and Manifolds/18.05 Transformation laws]] | Analyzed | low | yes | no | [[#N0625\|View]] |
| N0626 | [[18.06 Index notation\|02 Tensor Algebra and Manifolds/18.06 Index notation]] | Analyzed | low | no | no | [[#N0626\|View]] |
| N0627 | [[18.07 Tensor operations\|02 Tensor Algebra and Manifolds/18.07 Tensor operations]] | Analyzed | low | no | no | [[#N0627\|View]] |
| N0628 | [[18.08 Forms and metrics\|02 Tensor Algebra and Manifolds/18.08 Forms and metrics]] | Analyzed | low | yes | no | [[#N0628\|View]] |
| N0629 | [[18.09 Coordinate checks\|02 Tensor Algebra and Manifolds/18.09 Coordinate checks]] | Analyzed | low | yes | no | [[#N0629\|View]] |
| N0630 | [[19.01 Local models\|02 Tensor Algebra and Manifolds/19.01 Local models]] | Analyzed | low | yes | no | [[#N0630\|View]] |
| N0631 | [[19.02 Charts and atlases\|02 Tensor Algebra and Manifolds/19.02 Charts and atlases]] | Analyzed | low | no | yes | [[#N0631\|View]] |
| N0632 | [[19.03 Transition maps\|02 Tensor Algebra and Manifolds/19.03 Transition maps]] | Analyzed | low | yes | no | [[#N0632\|View]] |
| N0633 | [[19.04 Examples\|02 Tensor Algebra and Manifolds/19.04 Examples]] | Analyzed | low | yes | no | [[#N0633\|View]] |
| N0634 | [[19.05 Tangent vectors\|02 Tensor Algebra and Manifolds/19.05 Tangent vectors]] | Analyzed | medium | yes | no | [[#N0634\|View]] |
| N0635 | [[19.06 Tangent and cotangent spaces\|02 Tensor Algebra and Manifolds/19.06 Tangent and cotangent spaces]] | Analyzed | low | yes | no | [[#N0635\|View]] |
| N0636 | [[19.07 Smooth maps\|02 Tensor Algebra and Manifolds/19.07 Smooth maps]] | Analyzed | low | no | yes | [[#N0636\|View]] |
| N0637 | [[19.08 Vector and tensor fields\|02 Tensor Algebra and Manifolds/19.08 Vector and tensor fields]] | Analyzed | low | yes | no | [[#N0637\|View]] |
| N0638 | [[19.09 Local and global statements\|02 Tensor Algebra and Manifolds/19.09 Local and global statements]] | Analyzed | low | yes | no | [[#N0638\|View]] |
| N0639 | [[Curvilinear tensor calculations\|02 Tensor Algebra and Manifolds/Curvilinear tensor calculations]] | Analyzed | low | no | no | [[#N0639\|View]] |
| N0640 | [[Manifolds and coordinate charts - Overview\|02 Tensor Algebra and Manifolds/Manifolds and coordinate charts - Overview]] | Analyzed | low | no | no | [[#N0640\|View]] |
| N0641 | [[Pseudotensors and reflections\|02 Tensor Algebra and Manifolds/Pseudotensors and reflections]] | Analyzed | low | no | yes | [[#N0641\|View]] |
| N0642 | [[Tensor algebra - Overview\|02 Tensor Algebra and Manifolds/Tensor algebra - Overview]] | Analyzed | low | no | no | [[#N0642\|View]] |
| N0643 | [[Tensor coordinates and invariants\|02 Tensor Algebra and Manifolds/Tensor coordinates and invariants]] | Analyzed | low | no | no | [[#N0643\|View]] |
| N0644 | [[1 Vectors\|02 Tensor Algebra and Manifolds/Vectors and Tensors/1 Vectors/1 Vectors]] | Analyzed | low | no | no | [[#N0644\|View]] |
| N0645 | [[1.1 Definitions (basic)\|02 Tensor Algebra and Manifolds/Vectors and Tensors/1 Vectors/1.1 Definitions (basic)]] | Analyzed | low | no | no | [[#N0645\|View]] |
| N0646 | [[1.2 Cartesian unit vectors\|02 Tensor Algebra and Manifolds/Vectors and Tensors/1 Vectors/1.2 Cartesian unit vectors]] | Analyzed | low | no | no | [[#N0646\|View]] |
| N0647 | [[1.3 Vector components\|02 Tensor Algebra and Manifolds/Vectors and Tensors/1 Vectors/1.3 Vector components]] | Analyzed | low | yes | no | [[#N0647\|View]] |
| N0648 | [[1.4 Vector addition and multiplication by a scalar\|02 Tensor Algebra and Manifolds/Vectors and Tensors/1 Vectors/1.4 Vector addition and multiplication by a scalar]] | Analyzed | low | yes | yes | [[#N0648\|View]] |
| N0649 | [[1.5 Non-Cartesian unit vectors\|02 Tensor Algebra and Manifolds/Vectors and Tensors/1 Vectors/1.5 Non-Cartesian unit vectors]] | Analyzed | medium | yes | yes | [[#N0649\|View]] |
| N0650 | [[1.6 Basis vectors\|02 Tensor Algebra and Manifolds/Vectors and Tensors/1 Vectors/1.6 Basis vectors]] | Analyzed | medium | yes | yes | [[#N0650\|View]] |
| N0651 | [[1.7 Chapter 1 problems\|02 Tensor Algebra and Manifolds/Vectors and Tensors/1 Vectors/1.7 Chapter 1 problems]] | Analyzed | low | no | no | [[#N0651\|View]] |
| N0652 | [[2 Vector operations\|02 Tensor Algebra and Manifolds/Vectors and Tensors/2 Vector operations/2 Vector operations]] | Analyzed | low | no | no | [[#N0652\|View]] |
| N0653 | [[2.1 Scalar product\|02 Tensor Algebra and Manifolds/Vectors and Tensors/2 Vector operations/2.1 Scalar product]] | Analyzed | low | yes | yes | [[#N0653\|View]] |
| N0654 | [[2.10 Curl\|02 Tensor Algebra and Manifolds/Vectors and Tensors/2 Vector operations/2.10 Curl]] | Analyzed | medium | yes | yes | [[#N0654\|View]] |
| N0655 | [[2.11 Laplacian\|02 Tensor Algebra and Manifolds/Vectors and Tensors/2 Vector operations/2.11 Laplacian]] | Analyzed | medium | yes | no | [[#N0655\|View]] |
| N0656 | [[2.12 Chapter 2 problems\|02 Tensor Algebra and Manifolds/Vectors and Tensors/2 Vector operations/2.12 Chapter 2 problems]] | Analyzed | low | no | no | [[#N0656\|View]] |
| N0657 | [[2.2 Cross product\|02 Tensor Algebra and Manifolds/Vectors and Tensors/2 Vector operations/2.2 Cross product]] | Analyzed | low | yes | yes | [[#N0657\|View]] |
| N0658 | [[2.3 Triple scalar product\|02 Tensor Algebra and Manifolds/Vectors and Tensors/2 Vector operations/2.3 Triple scalar product]] | Analyzed | low | yes | no | [[#N0658\|View]] |
| N0659 | [[2.4 Triple vector product\|02 Tensor Algebra and Manifolds/Vectors and Tensors/2 Vector operations/2.4 Triple vector product]] | Analyzed | medium | no | no | [[#N0659\|View]] |
| N0660 | [[2.5 Partial derivatives\|02 Tensor Algebra and Manifolds/Vectors and Tensors/2 Vector operations/2.5 Partial derivatives]] | Analyzed | low | yes | no | [[#N0660\|View]] |
| N0661 | [[2.6 Vectors as derivatives\|02 Tensor Algebra and Manifolds/Vectors and Tensors/2 Vector operations/2.6 Vectors as derivatives]] | Analyzed | medium | yes | yes | [[#N0661\|View]] |
| N0662 | [[2.7 Nabla - the del operator\|02 Tensor Algebra and Manifolds/Vectors and Tensors/2 Vector operations/2.7 Nabla - the del operator]] | Analyzed | low | no | no | [[#N0662\|View]] |
| N0663 | [[2.8 Gradient\|02 Tensor Algebra and Manifolds/Vectors and Tensors/2 Vector operations/2.8 Gradient]] | Analyzed | low | no | no | [[#N0663\|View]] |
| N0664 | [[2.9 Divergence\|02 Tensor Algebra and Manifolds/Vectors and Tensors/2 Vector operations/2.9 Divergence]] | Analyzed | medium | yes | yes | [[#N0664\|View]] |
| N0665 | [[3 Vector applications\|02 Tensor Algebra and Manifolds/Vectors and Tensors/3 Vector applications/3 Vector applications]] | Analyzed | low | no | no | [[#N0665\|View]] |
| N0666 | [[3.1 Mass on an inclined plane\|02 Tensor Algebra and Manifolds/Vectors and Tensors/3 Vector applications/3.1 Mass on an inclined plane]] | Analyzed | low | yes | yes | [[#N0666\|View]] |
| N0667 | [[3.2 Curvilinear motion\|02 Tensor Algebra and Manifolds/Vectors and Tensors/3 Vector applications/3.2 Curvilinear motion]] | Analyzed | medium | yes | yes | [[#N0667\|View]] |
| N0668 | [[3.3 The electric field\|02 Tensor Algebra and Manifolds/Vectors and Tensors/3 Vector applications/3.3 The electric field]] | Analyzed | medium | yes | no | [[#N0668\|View]] |
| N0669 | [[3.4 The magnetic field\|02 Tensor Algebra and Manifolds/Vectors and Tensors/3 Vector applications/3.4 The magnetic field]] | Analyzed | low | yes | yes | [[#N0669\|View]] |
| N0670 | [[3.5 Chapter 3 problems\|02 Tensor Algebra and Manifolds/Vectors and Tensors/3 Vector applications/3.5 Chapter 3 problems]] | Analyzed | low | no | no | [[#N0670\|View]] |
| N0671 | [[4 Covariant and contravariant vector components\|02 Tensor Algebra and Manifolds/Vectors and Tensors/4 Covariant and contravariant vector components/4 Covariant and contravariant vector components]] | Analyzed | low | no | no | [[#N0671\|View]] |
| N0672 | [[4.1 Coordinate-system transformations\|02 Tensor Algebra and Manifolds/Vectors and Tensors/4 Covariant and contravariant vector components/4.1 Coordinate-system transformations]] | Analyzed | low | yes | no | [[#N0672\|View]] |
| N0673 | [[4.10 Chapter 4 problems\|02 Tensor Algebra and Manifolds/Vectors and Tensors/4 Covariant and contravariant vector components/4.10 Chapter 4 problems]] | Analyzed | low | no | no | [[#N0673\|View]] |
| N0674 | [[4.2 Basis-vector transformations\|02 Tensor Algebra and Manifolds/Vectors and Tensors/4 Covariant and contravariant vector components/4.2 Basis-vector transformations]] | Analyzed | low | no | no | [[#N0674\|View]] |
| N0675 | [[4.3 Basis-vector vs. component transformations\|02 Tensor Algebra and Manifolds/Vectors and Tensors/4 Covariant and contravariant vector components/4.3 Basis-vector vs. component transformations]] | Analyzed | low | no | yes | [[#N0675\|View]] |
| N0676 | [[4.4 Non-orthogonal coordinate systems\|02 Tensor Algebra and Manifolds/Vectors and Tensors/4 Covariant and contravariant vector components/4.4 Non-orthogonal coordinate systems]] | Analyzed | medium | no | yes | [[#N0676\|View]] |
| N0677 | [[4.5 Dual basis vectors\|02 Tensor Algebra and Manifolds/Vectors and Tensors/4 Covariant and contravariant vector components/4.5 Dual basis vectors]] | Analyzed | medium | no | no | [[#N0677\|View]] |
| N0678 | [[4.6 Finding covariant and contravariant components\|02 Tensor Algebra and Manifolds/Vectors and Tensors/4 Covariant and contravariant vector components/4.6 Finding covariant and contravariant components]] | Analyzed | medium | yes | no | [[#N0678\|View]] |
| N0679 | [[4.7 Index notation\|02 Tensor Algebra and Manifolds/Vectors and Tensors/4 Covariant and contravariant vector components/4.7 Index notation]] | Analyzed | low | no | no | [[#N0679\|View]] |
| N0680 | [[4.8 Quantities that transform contravariantly\|02 Tensor Algebra and Manifolds/Vectors and Tensors/4 Covariant and contravariant vector components/4.8 Quantities that transform contravariantly]] | Analyzed | low | no | no | [[#N0680\|View]] |
| N0681 | [[4.9 Quantities that transform covariantly\|02 Tensor Algebra and Manifolds/Vectors and Tensors/4 Covariant and contravariant vector components/4.9 Quantities that transform covariantly]] | Analyzed | medium | no | no | [[#N0681\|View]] |
| N0682 | [[5 Higher-rank tensors\|02 Tensor Algebra and Manifolds/Vectors and Tensors/5 Higher-rank tensors/5 Higher-rank tensors]] | Analyzed | low | no | no | [[#N0682\|View]] |
| N0683 | [[5.1 Definitions (advanced)\|02 Tensor Algebra and Manifolds/Vectors and Tensors/5 Higher-rank tensors/5.1 Definitions (advanced)]] | Analyzed | low | no | no | [[#N0683\|View]] |
| N0684 | [[5.10 Chapter 5 problems\|02 Tensor Algebra and Manifolds/Vectors and Tensors/5 Higher-rank tensors/5.10 Chapter 5 problems]] | Analyzed | low | no | no | [[#N0684\|View]] |
| N0685 | [[5.2 Covariant, contravariant, and mixed tensors\|02 Tensor Algebra and Manifolds/Vectors and Tensors/5 Higher-rank tensors/5.2 Covariant, contravariant, and mixed tensors]] | Analyzed | low | no | no | [[#N0685\|View]] |
| N0686 | [[5.3 Tensor addition and subtraction\|02 Tensor Algebra and Manifolds/Vectors and Tensors/5 Higher-rank tensors/5.3 Tensor addition and subtraction]] | Analyzed | low | no | no | [[#N0686\|View]] |
| N0687 | [[5.4 Tensor multiplication\|02 Tensor Algebra and Manifolds/Vectors and Tensors/5 Higher-rank tensors/5.4 Tensor multiplication]] | Analyzed | low | no | no | [[#N0687\|View]] |
| N0688 | [[5.5 Metric tensor\|02 Tensor Algebra and Manifolds/Vectors and Tensors/5 Higher-rank tensors/5.5 Metric tensor]] | Analyzed | medium | no | no | [[#N0688\|View]] |
| N0689 | [[5.6 Index raising and lowering\|02 Tensor Algebra and Manifolds/Vectors and Tensors/5 Higher-rank tensors/5.6 Index raising and lowering]] | Analyzed | medium | no | no | [[#N0689\|View]] |
| N0690 | [[5.7 Tensor derivatives and Christoffel symbols\|02 Tensor Algebra and Manifolds/Vectors and Tensors/5 Higher-rank tensors/5.7 Tensor derivatives and Christoffel symbols]] | Analyzed | medium | yes | yes | [[#N0690\|View]] |
| N0691 | [[5.8 Covariant differentiation\|02 Tensor Algebra and Manifolds/Vectors and Tensors/5 Higher-rank tensors/5.8 Covariant differentiation]] | Analyzed | medium | no | no | [[#N0691\|View]] |
| N0692 | [[5.9 Vectors and one-forms\|02 Tensor Algebra and Manifolds/Vectors and Tensors/5 Higher-rank tensors/5.9 Vectors and one-forms]] | Analyzed | medium | no | no | [[#N0692\|View]] |
| N0693 | [[6 Tensor applications\|02 Tensor Algebra and Manifolds/Vectors and Tensors/6 Tensor applications/6 Tensor applications]] | Analyzed | low | no | no | [[#N0693\|View]] |
| N0694 | [[6.1 The inertia tensor\|02 Tensor Algebra and Manifolds/Vectors and Tensors/6 Tensor applications/6.1 The inertia tensor]] | Analyzed | low | no | yes | [[#N0694\|View]] |
| N0695 | [[6.2 The electromagnetic field tensor\|02 Tensor Algebra and Manifolds/Vectors and Tensors/6 Tensor applications/6.2 The electromagnetic field tensor]] | Analyzed | low | yes | no | [[#N0695\|View]] |
| N0696 | [[6.3 The Riemann curvature tensor\|02 Tensor Algebra and Manifolds/Vectors and Tensors/6 Tensor applications/6.3 The Riemann curvature tensor]] | Analyzed | medium | no | yes | [[#N0696\|View]] |
| N0697 | [[6.4 Chapter 6 problems\|02 Tensor Algebra and Manifolds/Vectors and Tensors/6 Tensor applications/6.4 Chapter 6 problems]] | Analyzed | low | no | no | [[#N0697\|View]] |
| N0698 | [[Further reading for Vectors and Tensors\|02 Tensor Algebra and Manifolds/Vectors and Tensors/Further reading for Vectors and Tensors]] | Analyzed | low | no | no | [[#N0698\|View]] |
| N0699 | [[Index for Vectors and Tensors\|02 Tensor Algebra and Manifolds/Vectors and Tensors/Index for Vectors and Tensors]] | Analyzed | low | no | no | [[#N0699\|View]] |
| N0700 | [[Vectors and Tensors\|02 Tensor Algebra and Manifolds/Vectors and Tensors/Vectors and Tensors]] | Analyzed | low | no | no | [[#N0700\|View]] |
| N0701 | [[20.01 Metric definitions\|03 Metrics, Connections, and Curvature/20.01 Metric definitions]] | Analyzed | low | yes | no | [[#N0701\|View]] |
| N0702 | [[20.02 Coordinate components\|03 Metrics, Connections, and Curvature/20.02 Coordinate components]] | Analyzed | low | yes | no | [[#N0702\|View]] |
| N0703 | [[20.03 Coordinate changes\|03 Metrics, Connections, and Curvature/20.03 Coordinate changes]] | Analyzed | low | yes | yes | [[#N0703\|View]] |
| N0704 | [[20.04 Inverse metrics\|03 Metrics, Connections, and Curvature/20.04 Inverse metrics]] | Analyzed | low | no | no | [[#N0704\|View]] |
| N0705 | [[20.05 Signature\|03 Metrics, Connections, and Curvature/20.05 Signature]] | Analyzed | low | no | no | [[#N0705\|View]] |
| N0706 | [[20.06 Lengths and angles\|03 Metrics, Connections, and Curvature/20.06 Lengths and angles]] | Analyzed | low | yes | no | [[#N0706\|View]] |
| N0707 | [[20.07 Curves\|03 Metrics, Connections, and Curvature/20.07 Curves]] | Analyzed | low | yes | yes | [[#N0707\|View]] |
| N0708 | [[20.08 Volume\|03 Metrics, Connections, and Curvature/20.08 Volume]] | Analyzed | low | no | no | [[#N0708\|View]] |
| N0709 | [[20.09 Examples and limits\|03 Metrics, Connections, and Curvature/20.09 Examples and limits]] | Analyzed | low | yes | no | [[#N0709\|View]] |
| N0710 | [[21.01 The differentiation problem\|03 Metrics, Connections, and Curvature/21.01 The differentiation problem]] | Analyzed | low | no | yes | [[#N0710\|View]] |
| N0711 | [[21.02 Affine connections\|03 Metrics, Connections, and Curvature/21.02 Affine connections]] | Analyzed | low | no | no | [[#N0711\|View]] |
| N0712 | [[21.03 Connection coefficients\|03 Metrics, Connections, and Curvature/21.03 Connection coefficients]] | Analyzed | low | no | no | [[#N0712\|View]] |
| N0713 | [[21.04 Covectors and tensors\|03 Metrics, Connections, and Curvature/21.04 Covectors and tensors]] | Analyzed | low | no | no | [[#N0713\|View]] |
| N0714 | [[21.05 Transformation behaviour\|03 Metrics, Connections, and Curvature/21.05 Transformation behaviour]] | Analyzed | low | no | no | [[#N0714\|View]] |
| N0715 | [[21.06 Levi-Civita connection\|03 Metrics, Connections, and Curvature/21.06 Levi-Civita connection]] | Analyzed | low | no | no | [[#N0715\|View]] |
| N0716 | [[21.07 Parallel transport\|03 Metrics, Connections, and Curvature/21.07 Parallel transport]] | Analyzed | low | yes | yes | [[#N0716\|View]] |
| N0717 | [[21.08 Geodesics\|03 Metrics, Connections, and Curvature/21.08 Geodesics]] | Analyzed | low | yes | no | [[#N0717\|View]] |
| N0718 | [[21.09 Coordinate examples\|03 Metrics, Connections, and Curvature/21.09 Coordinate examples]] | Analyzed | low | no | no | [[#N0718\|View]] |
| N0719 | [[22.01 Curvature definitions\|03 Metrics, Connections, and Curvature/22.01 Curvature definitions]] | Analyzed | low | no | yes | [[#N0719\|View]] |
| N0720 | [[22.02 Coordinate expressions\|03 Metrics, Connections, and Curvature/22.02 Coordinate expressions]] | Analyzed | low | no | no | [[#N0720\|View]] |
| N0721 | [[22.03 Conventions\|03 Metrics, Connections, and Curvature/22.03 Conventions]] | Analyzed | low | no | no | [[#N0721\|View]] |
| N0722 | [[22.04 Tensor symmetries\|03 Metrics, Connections, and Curvature/22.04 Tensor symmetries]] | Analyzed | low | no | no | [[#N0722\|View]] |
| N0723 | [[22.05 Bianchi identities\|03 Metrics, Connections, and Curvature/22.05 Bianchi identities]] | Analyzed | low | no | no | [[#N0723\|View]] |
| N0724 | [[22.06 Contractions\|03 Metrics, Connections, and Curvature/22.06 Contractions]] | Analyzed | low | no | no | [[#N0724\|View]] |
| N0725 | [[22.07 The Einstein tensor\|03 Metrics, Connections, and Curvature/22.07 The Einstein tensor]] | Analyzed | low | no | no | [[#N0725\|View]] |
| N0726 | [[22.08 Examples\|03 Metrics, Connections, and Curvature/22.08 Examples]] | Analyzed | low | yes | no | [[#N0726\|View]] |
| N0727 | [[22.09 Local flatness and information loss\|03 Metrics, Connections, and Curvature/22.09 Local flatness and information loss]] | Analyzed | low | no | no | [[#N0727\|View]] |
| N0728 | [[Connections and covariant derivatives - Overview\|03 Metrics, Connections, and Curvature/Connections and covariant derivatives - Overview]] | Analyzed | low | no | no | [[#N0728\|View]] |
| N0729 | [[Curvature - Overview\|03 Metrics, Connections, and Curvature/Curvature - Overview]] | Analyzed | low | no | no | [[#N0729\|View]] |
| N0730 | [[Metric geometry - Overview\|03 Metrics, Connections, and Curvature/Metric geometry - Overview]] | Analyzed | low | no | no | [[#N0730\|View]] |
| N0731 | [[Surface geometry curvature and geodesics\|03 Metrics, Connections, and Curvature/Surface geometry curvature and geodesics]] | Analyzed | medium | yes | yes | [[#N0731\|View]] |
| N0732 | [[23.01 Alternating tensors\|04 Differential Forms and Moving Frames/23.01 Alternating tensors]] | Analyzed | low | no | no | [[#N0732\|View]] |
| N0733 | [[23.02 Wedge products\|04 Differential Forms and Moving Frames/23.02 Wedge products]] | Analyzed | low | no | no | [[#N0733\|View]] |
| N0734 | [[23.03 Exterior derivatives\|04 Differential Forms and Moving Frames/23.03 Exterior derivatives]] | Analyzed | low | no | no | [[#N0734\|View]] |
| N0735 | [[23.04 Coordinate expressions\|04 Differential Forms and Moving Frames/23.04 Coordinate expressions]] | Analyzed | low | no | no | [[#N0735\|View]] |
| N0736 | [[23.05 Pullbacks\|04 Differential Forms and Moving Frames/23.05 Pullbacks]] | Analyzed | low | yes | yes | [[#N0736\|View]] |
| N0737 | [[23.06 Integration\|04 Differential Forms and Moving Frames/23.06 Integration]] | Analyzed | low | yes | no | [[#N0737\|View]] |
| N0738 | [[23.07 Stokes’ theorem\|04 Differential Forms and Moving Frames/23.07 Stokes’ theorem]] | Analyzed | low | no | yes | [[#N0738\|View]] |
| N0739 | [[23.08 Closed and exact forms\|04 Differential Forms and Moving Frames/23.08 Closed and exact forms]] | Analyzed | low | yes | no | [[#N0739\|View]] |
| N0740 | [[23.09 Classical operations\|04 Differential Forms and Moving Frames/23.09 Classical operations]] | Analyzed | low | no | no | [[#N0740\|View]] |
| N0741 | [[24.01 Frames and coframes\|04 Differential Forms and Moving Frames/24.01 Frames and coframes]] | Analyzed | low | no | no | [[#N0741\|View]] |
| N0742 | [[24.02 Orthonormal frames\|04 Differential Forms and Moving Frames/24.02 Orthonormal frames]] | Analyzed | low | no | no | [[#N0742\|View]] |
| N0743 | [[24.03 Non-coordinate frames\|04 Differential Forms and Moving Frames/24.03 Non-coordinate frames]] | Analyzed | low | yes | no | [[#N0743\|View]] |
| N0744 | [[24.04 Connection one-forms\|04 Differential Forms and Moving Frames/24.04 Connection one-forms]] | Analyzed | low | no | no | [[#N0744\|View]] |
| N0745 | [[24.05 Cartan’s first structure equation\|04 Differential Forms and Moving Frames/24.05 Cartan’s first structure equation]] | Analyzed | low | no | no | [[#N0745\|View]] |
| N0746 | [[24.06 Cartan’s second structure equation\|04 Differential Forms and Moving Frames/24.06 Cartan’s second structure equation]] | Analyzed | low | no | no | [[#N0746\|View]] |
| N0747 | [[24.07 Reading components\|04 Differential Forms and Moving Frames/24.07 Reading components]] | Analyzed | low | no | no | [[#N0747\|View]] |
| N0748 | [[24.08 Contractions\|04 Differential Forms and Moving Frames/24.08 Contractions]] | Analyzed | low | no | no | [[#N0748\|View]] |
| N0749 | [[24.09 Frame changes\|04 Differential Forms and Moving Frames/24.09 Frame changes]] | Analyzed | low | no | yes | [[#N0749\|View]] |
| N0750 | [[Differential forms - Overview\|04 Differential Forms and Moving Frames/Differential forms - Overview]] | Analyzed | low | no | no | [[#N0750\|View]] |
| N0751 | [[Exterior Product\|04 Differential Forms and Moving Frames/Exterior Product]] | Analyzed | high | yes | no | [[#N0751\|View]] |
| N0752 | [[Frames and Cartan equations - Overview\|04 Differential Forms and Moving Frames/Frames and Cartan equations - Overview]] | Analyzed | low | no | no | [[#N0752\|View]] |
| N0753 | [[Algebra of Rotation\|05 Lie Groups, Quaternions, and Spinors/03 Spinors/01 Rotation/Algebra of Rotation]] | Analyzed | medium | no | no | [[#N0753\|View]] |
| N0754 | [[Homotopology classes in the Axis-Angle Space\|05 Lie Groups, Quaternions, and Spinors/03 Spinors/01 Rotation/Homotopology classes in the Axis-Angle Space]] | Analyzed | high | yes | yes | [[#N0754\|View]] |
| N0755 | [[Homotopology\|05 Lie Groups, Quaternions, and Spinors/03 Spinors/01 Rotation/Homotopology]] | Analyzed | high | yes | no | [[#N0755\|View]] |
| N0756 | [[Rotation using Axis-Angle Vector\|05 Lie Groups, Quaternions, and Spinors/03 Spinors/01 Rotation/Rotation using Axis-Angle Vector]] | Analyzed | high | yes | yes | [[#N0756\|View]] |
| N0757 | [[Rotation using Complex Numbers\|05 Lie Groups, Quaternions, and Spinors/03 Spinors/01 Rotation/Rotation using Complex Numbers]] | Analyzed | medium | yes | no | [[#N0757\|View]] |
| N0758 | [[Rotation using Matrices\|05 Lie Groups, Quaternions, and Spinors/03 Spinors/01 Rotation/Rotation using Matrices]] | Analyzed | high | no | yes | [[#N0758\|View]] |
| N0759 | [[Rotation using Quaternions\|05 Lie Groups, Quaternions, and Spinors/03 Spinors/01 Rotation/Rotation using Quaternions]] | Analyzed | high | no | yes | [[#N0759\|View]] |
| N0760 | [[Jones Vectors\|05 Lie Groups, Quaternions, and Spinors/03 Spinors/02 Examples from Physics/01 Polarization/Jones Vectors]] | Analyzed | high | no | yes | [[#N0760\|View]] |
| N0761 | [[Pointcaré Sphere\|05 Lie Groups, Quaternions, and Spinors/03 Spinors/02 Examples from Physics/01 Polarization/Pointcaré Sphere]] | Analyzed | high | yes | yes | [[#N0761\|View]] |
| N0762 | [[Waveplates\|05 Lie Groups, Quaternions, and Spinors/03 Spinors/02 Examples from Physics/01 Polarization/Waveplates]] | Analyzed | high | yes | yes | [[#N0762\|View]] |
| N0763 | [[Dirac Equation\|05 Lie Groups, Quaternions, and Spinors/03 Spinors/02 Examples from Physics/Dirac Equation]] | Analyzed | high | no | no | [[#N0763\|View]] |
| N0764 | [[Pauli Exclusion Principle\|05 Lie Groups, Quaternions, and Spinors/03 Spinors/02 Examples from Physics/Pauli Exclusion Principle]] | Analyzed | medium | no | no | [[#N0764\|View]] |
| N0765 | [[Spin-Statistics-Theorem\|05 Lie Groups, Quaternions, and Spinors/03 Spinors/02 Examples from Physics/Spin-Statistics-Theorem]] | Analyzed | high | no | no | [[#N0765\|View]] |
| N0766 | [[Spinors in Physics\|05 Lie Groups, Quaternions, and Spinors/03 Spinors/02 Examples from Physics/Spinors in Physics]] | Analyzed | high | no | no | [[#N0766\|View]] |
| N0767 | [[Stern-Gerlach-Experiment\|05 Lie Groups, Quaternions, and Spinors/03 Spinors/02 Examples from Physics/Stern-Gerlach-Experiment]] | Analyzed | high | yes | yes | [[#N0767\|View]] |
| N0768 | [[Vector Representation of Spinors in Physics\|05 Lie Groups, Quaternions, and Spinors/03 Spinors/02 Examples from Physics/Vector Representation of Spinors in Physics]] | Analyzed | high | no | no | [[#N0768\|View]] |
| N0769 | [[Rotation\|05 Lie Groups, Quaternions, and Spinors/03 Spinors/Rotation]] | Analyzed | low | no | no | [[#N0769\|View]] |
| N0770 | [[Spinors\|05 Lie Groups, Quaternions, and Spinors/03 Spinors/Spinors]] | Analyzed | medium | no | yes | [[#N0770\|View]] |
| N0771 | [[25.04 Matrix groups\|05 Lie Groups, Quaternions, and Spinors/25.04 Matrix groups]] | Analyzed | low | yes | yes | [[#N0771\|View]] |
| N0772 | [[25.05 Lie groups\|05 Lie Groups, Quaternions, and Spinors/25.05 Lie groups]] | Analyzed | low | yes | no | [[#N0772\|View]] |
| N0773 | [[25.06 Generators and Lie algebras\|05 Lie Groups, Quaternions, and Spinors/25.06 Generators and Lie algebras]] | Analyzed | medium | no | yes | [[#N0773\|View]] |
| N0774 | [[25.07 Exponential maps\|05 Lie Groups, Quaternions, and Spinors/25.07 Exponential maps]] | Analyzed | low | no | yes | [[#N0774\|View]] |
| N0775 | [[25.08 The circle group U(1)\|05 Lie Groups, Quaternions, and Spinors/25.08 The circle group U(1)]] | Analyzed | low | yes | yes | [[#N0775\|View]] |
| N0776 | [[Dual quaternions and rigid transformations\|05 Lie Groups, Quaternions, and Spinors/Dual quaternions and rigid transformations]] | Analyzed | medium | no | yes | [[#N0776\|View]] |
| N0777 | [[Groups and continuous symmetries - Overview\|05 Lie Groups, Quaternions, and Spinors/Groups and continuous symmetries - Overview]] | Analyzed | low | no | no | [[#N0777\|View]] |
| N0778 | [[Lie groups and infinitesimal transformations\|05 Lie Groups, Quaternions, and Spinors/Lie groups and infinitesimal transformations]] | Analyzed | medium | no | yes | [[#N0778\|View]] |
| N0779 | [[Octonions\|05 Lie Groups, Quaternions, and Spinors/Octonions]] | Analyzed | low | no | no | [[#N0779\|View]] |
| N0780 | [[Quaternion algebra\|05 Lie Groups, Quaternions, and Spinors/Quaternion algebra]] | Analyzed | low | no | no | [[#N0780\|View]] |
| N0781 | [[Quaternion interpolation and applications\|05 Lie Groups, Quaternions, and Spinors/Quaternion interpolation and applications]] | Analyzed | medium | yes | yes | [[#N0781\|View]] |
| N0782 | [[Quaternions\|05 Lie Groups, Quaternions, and Spinors/Quaternions]] | Analyzed | high | no | no | [[#N0782\|View]] |
| N0783 | [[Rotation conventions and quaternions\|05 Lie Groups, Quaternions, and Spinors/Rotation conventions and quaternions]] | Analyzed | low | no | yes | [[#N0783\|View]] |
| N0784 | [[Sedenions\|05 Lie Groups, Quaternions, and Spinors/Sedenions]] | Analyzed | low | no | no | [[#N0784\|View]] |
| N0785 | [[Trigintaduonions\|05 Lie Groups, Quaternions, and Spinors/Trigintaduonions]] | Analyzed | low | no | no | [[#N0785\|View]] |
| N0786 | [[26.01 Sections and local frames\|06 Bundles, Holonomy, and Gauge Connections/26.01 Sections and local frames]] | Analyzed | low | no | yes | [[#N0786\|View]] |
| N0787 | [[26.02 Local gauge transformations\|06 Bundles, Holonomy, and Gauge Connections/26.02 Local gauge transformations]] | Analyzed | low | yes | yes | [[#N0787\|View]] |
| N0788 | [[26.03 The derivative problem\|06 Bundles, Holonomy, and Gauge Connections/26.03 The derivative problem]] | Analyzed | low | yes | no | [[#N0788\|View]] |
| N0789 | [[26.04 Covariant derivatives\|06 Bundles, Holonomy, and Gauge Connections/26.04 Covariant derivatives]] | Analyzed | low | no | no | [[#N0789\|View]] |
| N0790 | [[26.05 Abelian phase connections\|06 Bundles, Holonomy, and Gauge Connections/26.05 Abelian phase connections]] | Analyzed | low | yes | no | [[#N0790\|View]] |
| N0791 | [[26.06 Curvature or field strength\|06 Bundles, Holonomy, and Gauge Connections/26.06 Curvature or field strength]] | Analyzed | low | no | yes | [[#N0791\|View]] |
| N0792 | [[26.07 Covariance and invariants\|06 Bundles, Holonomy, and Gauge Connections/26.07 Covariance and invariants]] | Analyzed | low | no | no | [[#N0792\|View]] |
| N0793 | [[26.08 Parallel transport\|06 Bundles, Holonomy, and Gauge Connections/26.08 Parallel transport]] | Analyzed | low | yes | yes | [[#N0793\|View]] |
| N0794 | [[26.09 Pure gauge and global limits\|06 Bundles, Holonomy, and Gauge Connections/26.09 Pure gauge and global limits]] | Analyzed | low | yes | yes | [[#N0794\|View]] |
| N0795 | [[27.06 Bundle structure\|06 Bundles, Holonomy, and Gauge Connections/27.06 Bundle structure]] | Analyzed | low | yes | yes | [[#N0795\|View]] |
| N0796 | [[27.07 Transition functions\|06 Bundles, Holonomy, and Gauge Connections/27.07 Transition functions]] | Analyzed | low | no | yes | [[#N0796\|View]] |
| N0797 | [[27.08 Bundle types\|06 Bundles, Holonomy, and Gauge Connections/27.08 Bundle types]] | Analyzed | low | yes | no | [[#N0797\|View]] |
| N0798 | [[27.09 Connections and holonomy\|06 Bundles, Holonomy, and Gauge Connections/27.09 Connections and holonomy]] | Analyzed | medium | yes | yes | [[#N0798\|View]] |
| N0799 | [[27.10 Local and global potentials\|06 Bundles, Holonomy, and Gauge Connections/27.10 Local and global potentials]] | Analyzed | low | yes | no | [[#N0799\|View]] |
| N0800 | [[Elementary topology and bundles - Overview\|06 Bundles, Holonomy, and Gauge Connections/Elementary topology and bundles - Overview]] | Analyzed | low | no | no | [[#N0800\|View]] |
| N0801 | [[Gauge connections - Overview\|06 Bundles, Holonomy, and Gauge Connections/Gauge connections - Overview]] | Analyzed | low | no | no | [[#N0801\|View]] |
| N0802 | [[Category Theory\|07 Category Theory/Category Theory]] | Analyzed | high | no | no | [[#N0802\|View]] |
| N0803 | [[Category of Categories\|07 Category Theory/Category of Categories]] | Analyzed | medium | no | no | [[#N0803\|View]] |
| N0804 | [[Category\|07 Category Theory/Category]] | Analyzed | high | yes | no | [[#N0804\|View]] |
| N0805 | [[Equivalence\|07 Category Theory/Equivalence]] | Analyzed | high | no | no | [[#N0805\|View]] |
| N0806 | [[Functor\|07 Category Theory/Functor]] | Analyzed | high | no | no | [[#N0806\|View]] |
| N0807 | [[Isomorphism\|07 Category Theory/Isomorphism]] | Analyzed | high | no | no | [[#N0807\|View]] |

## Suggestions

### N0615

Note: [[27.01 Topological language|27.01 Topological language]]  
Priority: low · Graph: yes · Manim: no

Clear, correct introduction to open sets, subspace topology, continuity, and connectedness; the worked examples ($x^3$, interval connectedness, practice answers) all check out.

- [Intuition] In "Open sets and neighbourhoods", add one sentence that an open set is one where every point has some "wiggle room" inside the set before the axioms, so the intersection $\bigcap(-1/n,1/n)=\{0\}$ example reads as a failure of wiggle room.
- [Graph] In "Continuity and homeomorphisms", plot $y=x^3$ and $y=\sqrt[3]{x}$ on $x\in[-2,2]$ in one 2D graph to show that the inverse is continuous although it has a vertical tangent at $0$.
- [Simplify] The interval-connectedness proof in "Connectedness" packs the supremum argument into one paragraph; split the cases $c\in V$ and $c\in U$ into two numbered steps.

### N0616

Note: [[27.02 Compactness|27.02 Compactness]]  
Priority: low · Graph: yes · Manim: no

Correct and well-structured treatment of open covers, Heine–Borel, and the compactness/connectedness/boundary distinctions; the $(0,1)$ cover example and practice answers are right.

- [Graph] In "A worked noncompact example", draw the nested intervals $U_n=(1/n,1)$ for $n=2,\ldots,8$ as horizontal bars above the axis $[0,1]$ so the reader sees that every finite union misses a strip near $0$.
- [Simplify] In worked answer 1, "Its only possible accumulation point outside its isolated points is $0$" is awkward; state that every point of $K$ except $0$ is isolated and $0$ is the only limit point of $K$, which belongs to $K$.
- [Intuition] Add one sentence to the bisection proof of compactness of $[0,1]$ explaining why it fails for $(0,1)$: the nested intervals can shrink to the missing endpoint $0$.

### N0617

Note: [[27.03 Identifications|27.03 Identifications]]  
Priority: low · Graph: yes · Manim: yes

Correct and careful construction of the circle as a quotient, with a good seam discussion and a correct derivative check $h'(0)=2\pi$, $h'(2\pi)=-2\pi$.

- [Graph] In "Worked example: functions that descend", plot $\cos t$, $t$, and $t(2\pi-t)$ on $[0,2\pi]$ in one 2D graph so the endpoint-value and endpoint-slope conditions are visible.
- [Manim] Animate the interval $[0,L]$ bending into a circle with the two endpoints meeting, highlighting a small neighbourhood of the joined point as two half-intervals that merge into one arc; this shows the quotient topology better than the static Fig. 27.1.
- [Simplify] In "From an interval to a quotient space", the compact-to-Hausdorff homeomorphism argument is dense; give the three facts (closed in compact is compact, image of compact is compact, compact in Hausdorff is closed) as a short numbered list.

### N0618

Note: [[27.04 Loops and homotopies|27.04 Loops and homotopies]]  
Priority: low · Graph: no · Manim: yes

Correct and readable note on path homotopy and the fundamental group; the semicircle/diameter counterexample and both worked answers are verified.

- [Manim] Animate the linear homotopy $H(t,s)=(1-s)\gamma_0(t)+s\gamma_1(t)$ from the upper semicircle to the diameter in the disk, then show the same formula leaving the circle at $(0,1/2)$; motion makes the "permitted target space" point immediate.
- [Intuition] In "The fundamental-group idea", add a small picture or sentence for concatenation as "run $\gamma$ at double speed, then $\eta$ at double speed" before the piecewise formula.
- [Example] Add a one-line contrast for practice 1 in the punctured plane: the loop $2+\tfrac12e^{2\pi it}$ (not enclosing $0$) is null-homotopic there, so the obstruction is enclosing the hole, not being in the punctured plane.

### N0619

Note: [[27.05 Winding numbers|27.05 Winding numbers]]  
Priority: medium · Graph: yes · Manim: yes

Correct and complete, with a verified worked loop (winding $2$) and integral check, but the homotopy-invariance proof in "Why deformation cannot change the integer" is compressed.

- [Simplify] In "Why deformation cannot change the integer", spell out why $\delta(1)=\delta(0)$ and why $\theta_s+\delta$ lifts $u(\cdot,s')$, as two short displayed steps rather than one paragraph.
- [Graph] Plot the worked loop $\gamma(t)=(2+\cos2\pi t)e^{i(4\pi t+\frac12\sin2\pi t)}$ as a parametric 2D curve together with the lifted angle $\theta(t)=4\pi t+\tfrac12\sin2\pi t$ against $t\in[0,1]$, marking $\theta(1)-\theta(0)=4\pi$.
- [Manim] Animate a ray from $0$ to a point tracing the worked loop while an angle counter accumulates to $4\pi$, then continuously deform the loop away from $0$ to show the count cannot jump.
- [Intuition] Before the lift construction, add the "dog on a leash walking around a lamp post" picture or similar plain-language image for net turns.

### N0620

Note: [[Box counting and random-walk distributions|Box counting and random-walk distributions]]  
Priority: high · Graph: yes · Manim: yes

A transcription of lecture pages on box counting, random walks, and maximum likelihood that is mathematically sound in the derivations but misfiled under Topology, interrupted by handwriting commentary, and carrying a wrong physical-quantities table.

- [Correctness] The "Physical quantities" table lists symbols from other notes that are never used here and clash with this note: $M$ as carrying capacity (here $M$ is the square side length), $\delta$ as wolf decline rate (here $\delta$ is the Dirac delta), $x,y$ as ingredient amounts in oz (here positions), $s$ as protein surplus (here the signed step), $t$ as iron surplus and $1/\alpha$ (here time, $\alpha$ unused); keep only $\Delta x$, $\Delta t$, $D$, $U$ and add $L$ (box size) and $p$, $C$ if desired.
- [Structure] The note is a Mathematical Modeling lecture transcription (fractal dimension, random walks, Lévy flights, MLE) and does not belong in "01 Elementary Topology"; move it near "Model error, random walks, and continuum limits" or a modeling/probability folder and link it from there.
- [Simplify] Remove or move to a collapsed callout the handwriting remarks ("The handwritten integral limits appear to use...", "A separate line records a theoretical dimension near $1.65$...", "The page marks a time step... The right-hand side is blank"); they interrupt the explanation and the unlabelled $1.65$ value and blank traffic update carry no content.
- [Graph] Plot $\log N$ against $\log(1/L)$ for the Sierpiński table ($m=0,\ldots,6$) with the fitted line of slope $\log3/\log2\approx1.585$, plus reference lines of slope $1$ and $2$.
- [Graph] Plot the standard normal density $p(x)$ and its CDF on $x\in[-4,4]$ with the shaded area $P(X\le x)$ at $x=1$, and on a second graph the Cauchy density $1/(\pi(1+x^2))$ against the normal density to show the heavy tails behind the infinite $E[X^2]$.
- [Manim] Animate the convolution update starting from $C(x,0)=\delta(x)$: bars at $\pm\Delta x$ after one step, $\tfrac14,\tfrac12,\tfrac14$ after two, and the binomial histogram approaching a Gaussian after many steps, to connect the delta calculation with the heat-equation limit.

### N0621

Note: [[18.01 Dual spaces|18.01 Dual spaces]]  
Priority: low · Graph: no · Manim: no

Clear and correct introduction to covectors and the dual basis; the slanted-basis example ($\alpha=2\varepsilon^1$, $\alpha(3,4)=2$) and the practice answers check out, and Fig. 18.1 already gives the needed level-line picture.

- [Intuition] In "Worked example: coordinates in a slanted basis", add one sentence noting that $\varepsilon^1(x,y)=x-y/2$ is not the "x coordinate" even though $e_1=(1,0)$: changing $e_2$ changes $\varepsilon^1$, which is the key surprise about dual bases.
- [Simplify] In "Natural identification with the double dual", state explicitly that injectivity uses the dual basis: if $\varepsilon^i(v)=0$ for all $i$ then all coordinates of $v$ vanish.

### N0622

Note: [[18.02 Tensor products|18.02 Tensor products]]  
Priority: low · Graph: no · Manim: no

Correct and well-motivated, with a clear outer-product example and a valid non-simplicity proof for $e_1\otimes e_1+e_2\otimes e_2$.

- [Intuition] Before the quotient construction in "Why introduce a new product?", give the concrete model first: for $\mathbb R^n\otimes\mathbb R^m$ the tensor product is the space of $n\times m$ arrays with $v\otimes w=vw^{\mathsf T}$, then present the abstract construction as the basis-free version.
- [Example] In "Basis and dimension", add a one-line contrast $\dim(V\otimes W)=nm$ versus $\dim(V\times W)=n+m$ (for $n=2$, $m=3$: $6$ versus $5$) to show why the tensor product is not the Cartesian product.

### N0623

Note: [[18.03 Tensor type|18.03 Tensor type]]  
Priority: low · Graph: no · Manim: no

Correct and clear account of type $(r,s)$, slot roles, and component counts; the $T(\alpha,\beta,v)=56$ evaluation and the symmetric/alternating counts are verified.

- [Simplify] In "Slots reverse the factor roles", the sentence "evaluate each covector argument on its corresponding vector factor and each covector factor on its vector argument" is hard to parse; show it once for $v\otimes\alpha$ as $(v\otimes\alpha)(\beta,w)=\beta(v)\alpha(w)$.
- [Example] In "Component counts and symmetry", add a small table of $n^2$, $n(n+1)/2$, $n(n-1)/2$ for $n=2,3,4$ to make the counting concrete.

### N0624

Note: [[18.04 Components|18.04 Components]]  
Priority: low · Graph: no · Manim: no

Correct and clear; the bilinear-form example ($B(v,w)=13$ by both expansion and matrix product) and both practice answers check out.

- [Intuition] In "General extraction and reconstruction", add one sentence that components are just "the tensor's answers on basis inputs", mirroring the vector case $v^i=\varepsilon^i(v)$, before the general index formula.
- [Example] In "What components do not tell you alone", show the same matrix $\begin{pmatrix}2&-1\\3&4\end{pmatrix}$ transformed under $M=\operatorname{diag}(2,1)$ as a bilinear form ($M^{\mathsf T}BM$) and as an endomorphism ($M^{-1}BM$) to make the warning concrete.

### N0625

Note: [[18.05 Transformation laws|18.05 Transformation laws]]  
Priority: low · Graph: yes · Manim: no

Correct and clearly conventioned; the shear-basis example (coordinates $(1,2)$, covector $(2,1)$, pairing $4$, $B'$ and length $13$) and the practice answers are verified.

- [Graph] Draw the old basis $e_1,e_2$, the shear basis $e'_1=e_1$, $e'_2=e_1+e_2$, and the vector $v=(3,2)=1e'_1+2e'_2$ as arrows in a 2D plot, showing the parallelogram decomposition along the new basis.
- [Intuition] After $v'^a=(M^{-1})^a{}_iv^i$, add the plain-language reason "if the basis vectors get longer, the coordinates must get smaller", using practice 1 with $M=\operatorname{diag}(2,3)$.

### N0626

Note: [[18.06 Index notation|18.06 Index notation]]  
Priority: low · Graph: no · Manim: no

Clear and correct; the matrix product, trace $13$, and the cyclic-trace index argument are verified.

- [Example] In "Common notation traps", add one concrete invalid equation such as $w_i=A^i{}_jv^j$ (mismatched free-index position) and its corrected form, since the section lists rules without a worked failure.

### N0627

Note: [[18.07 Tensor operations|18.07 Tensor operations]]  
Priority: low · Graph: no · Manim: no

Correct and compact; the symmetric/alternating splits and both contractions in the examples and practice check out.

- [Structure] The file starts with a UTF-8 BOM and uses CRLF line endings; save it as UTF-8 without BOM with LF line endings.
- [Example] In "Slot permutation and projections", give a three-index example of $T_{[123]}$ for $T=\varepsilon^1\otimes\varepsilon^2\otimes\varepsilon^3$ (six signed terms, factor $1/6$) so the general formulas are not left abstract.
- [Intuition] In "Contraction", add a sentence that contracting different slot pairs gives different results (already shown in practice 2) earlier in the main text, so readers learn to always name which slots are contracted.

### N0628

Note: [[18.08 Forms and metrics|18.08 Forms and metrics]]  
Priority: low · Graph: yes · Manim: no

Correct and clear treatment of nondegenerate forms and index raising/lowering; the $G=\begin{pmatrix}2&1\\1&3\end{pmatrix}$ example, inverse, and practice answers are verified.

- [Structure] The file starts with a UTF-8 BOM and uses CRLF line endings; save it as UTF-8 without BOM with LF line endings.
- [Graph] For the Minkowski-type example $g=\operatorname{diag}(1,-1)$ in "Bilinear forms as tensors", plot the level sets $x^2-y^2=\pm1$ and the null lines $y=\pm x$ to show nondegenerate but indefinite behaviour, complementing the positive-definite ellipse of Fig. 18.2.
- [Intuition] In "Worked example", add one sentence interpreting $v^\flat=(1,-2)$ geometrically: its level line $w^1-2w^2=0$ is the $g$-orthogonal complement of $v$, not the Euclidean one.

### N0629

Note: [[18.09 Coordinate checks|18.09 Coordinate checks]]  
Priority: low · Graph: yes · Manim: no

Correct and well-chosen counterexample; the $y=x^2$ derivative $1/x$, the connection coefficient $\Gamma^y{}_{yy}=-1/(2y)$, and the Hessian extra term are all verified.

- [Structure] The file starts with a UTF-8 BOM and uses CRLF line endings; save it as UTF-8 without BOM with LF line endings.
- [Graph] In "Worked example", plot $v^x=1$ against $x$ and $v^y=2\sqrt y$ against $y$ on $(0,4]$ side by side, so the reader sees one constant vector field with a nonconstant component in the second coordinate.
- [Simplify] In "Scalars and connections", say that $\Gamma^y{}_{yy}=(\partial y/\partial x)(\partial^2x/\partial y^2)$ comes from the inhomogeneous transformation law, and show the one-line computation, since the value currently appears without derivation.

### N0630

Note: [[19.01 Local models|19.01 Local models]]  
Priority: low · Graph: yes · Manim: no

Correct and accessible introduction to topological manifolds, with a verified semicircle chart and good boundary and crossing counterexamples.

- [Structure] The file starts with a UTF-8 BOM and uses CRLF line endings; save it as UTF-8 without BOM with LF line endings.
- [Graph] In "Worked example: the circle near its top point", plot the unit circle with the upper semicircle highlighted and its projection onto the interval $(-1,1)$ on the $x$-axis, plus the right semicircle projected onto the $y$-axis.
- [Example] In "What a local model means", add a one-line example of why Hausdorff is needed (the line with two origins), since the note says the conditions exclude "poor separation" without showing one.

### N0631

Note: [[19.02 Charts and atlases|19.02 Charts and atlases]]  
Priority: low · Graph: no · Manim: yes

Correct and clear; the stereographic formulas, the Fig. 19.1 value $u=0.5$, and the practice values $u=3$, $v=1/3$ are verified.

- [Structure] The file starts with a UTF-8 BOM and uses CRLF line endings; save it as UTF-8 without BOM with LF line endings.
- [Manim] Animate a point $P$ moving around the circle while the line from $N$ through $P$ sweeps and its intersection $u$ slides along the axis, running off to $\pm\infty$ as $P\to N$; this shows why $N$ must be excluded.
- [Simplify] In "Worked example: two charts for a circle", show the algebra from $x=u(1-y)$ to $y=(u^2-1)/(1+u^2)$ (the quadratic in $y$ with the root $y=1$ discarded), since the inverse is currently stated without the step.

### N0632

Note: [[19.03 Transition maps|19.03 Transition maps]]  
Priority: low · Graph: yes · Manim: no

Correct and well-organized; the $v=1/u$ transition, the velocity $-1/2$, and the $x^3$ incompatibility warning are verified.

- [Structure] The file starts with a UTF-8 BOM and uses CRLF line endings; save it as UTF-8 without BOM with LF line endings.
- [Graph] Plot $v=1/u$ on $u\in[-4,-0.25]\cup[0.25,4]$ to show the two overlap components and the decreasing (orientation-reversing) transition, and separately $x=u^{1/3}$ near $0$ to show the vertical tangent that breaks compatibility.

### N0633

Note: [[19.04 Examples|19.04 Examples]]  
Priority: low · Graph: yes · Manim: no

Correct survey of standard manifolds with verified charts and a sound regular-level-set example and nonexample ($x^3=0$).

- [Graph] Add a native 3D plot of the paraboloid $z=x^2+y^2$ over $x,y\in[-1.5,1.5]$ with the grid lines $u=\text{const}$, $v=\text{const}$ of the global parametrization drawn on it.
- [Graph] Optionally a 3D plot of the torus $((2+\cos\phi)\cos\theta,(2+\cos\phi)\sin\theta,\sin\phi)$ with one small coordinate patch shaded, illustrating that $(\theta,\phi)$ is only local.

### N0634

Note: [[19.05 Tangent vectors|19.05 Tangent vectors]]  
Priority: medium · Graph: yes · Manim: no

Correct, with verified examples, but the derivation-equals-velocity proof (Hadamard lemma) in "The derivation description" is compressed for a first encounter.

- [Simplify] In "The derivation description", write out $h_i(x)=\int_0^1\partial_if(x_0+t(x-x_0))\,dt$ explicitly and apply the Leibniz rule step by step ($D[(x^i-x_0^i)h_i]=D[x^i]h_i(x_0)+0$), or move the proof into a collapsed callout.
- [Graph] In "Worked example on a circle", plot the unit circle, the point $(1,0)$, the tangent arrow $(0,1)$, and a few level curves of $f=x^2+3y$ to show that $v[f]=3$ is the rate of crossing level curves.
- [Intuition] Add one sentence motivating why a definition without an ambient space is needed (for example an abstract manifold like a configuration space), since the embedding check makes the intrinsic definition look unnecessary.

### N0635

Note: [[19.06 Tangent and cotangent spaces|19.06 Tangent and cotangent spaces]]  
Priority: low · Graph: yes · Manim: no

Correct and clear; the polar basis and dual-form formulas and the check $\alpha(v)=13$ at $(0,2)$ are verified.

- [Structure] The file starts with a UTF-8 BOM and uses CRLF line endings; save it as UTF-8 without BOM with LF line endings.
- [Graph] Plot the polar coordinate grid with arrows $\partial_r$ and $\partial_\theta$ at several points (for example $r=1,2$ and $\theta=0,\pi/2,\pi$) to show that $|\partial_\theta|=r$ grows with radius.
- [Simplify] Use $\delta^i{}_j$ with spaced indices as in the 18.xx notes instead of $\delta^i_j$, for consistency across the tensor chapter.

### N0636

Note: [[19.07 Smooth maps|19.07 Smooth maps]]  
Priority: low · Graph: no · Manim: yes

Correct and clear; the $F=(x^2-y^2,2xy)$ Jacobian, pushforward $(10,10)$, pullback $-10\,dy$, and practice answers are verified.

- [Structure] The file starts with a UTF-8 BOM and uses CRLF line endings; save it as UTF-8 without BOM with LF line endings.
- [Manim] Animate the map $F(z)=z^2$ acting on a small grid around $p=(1,2)$ and around the origin: near $p$ the grid is rotated and scaled (invertible $J_p$), near $0$ it collapses and wraps twice, showing why $J_0=0$ and $F(x,y)=F(-x,-y)$.
- [Intuition] In "Worked example with a noninvertible derivative", mention that $F$ is $z\mapsto z^2$ in complex notation, which explains the rotation-scaling form of $J_p$ and $\det J=4|z|^2$.

### N0637

Note: [[19.08 Vector and tensor fields|19.08 Vector and tensor fields]]  
Priority: low · Graph: yes · Manim: no

Correct and clear; $X=\partial_\theta$, the polar metric $dr^2+r^2d\theta^2$, and both practice answers are verified.

- [Structure] The file starts with a UTF-8 BOM and uses CRLF line endings; save it as UTF-8 without BOM with LF line endings.
- [Graph] Add a 2D vector-field (quiver) plot of $X=-y\partial_x+x\partial_y$ on $[-2,2]^2$ with the circles $x^2+y^2=1,4$ overlaid, illustrating practice 1 ($X[f]=0$) and the vanishing at the origin.
- [Simplify] In "Worked example: one field, two descriptions", show the two-line expansion of $dx\otimes dx+dy\otimes dy$ in polar form that cancels the mixed terms, since it is currently only described.

### N0638

Note: [[19.09 Local and global statements|19.09 Local and global statements]]  
Priority: low · Graph: yes · Manim: no

Correct and useful distinction between coordinate singularities and genuine local obstructions, with sound crossing, $y^3=0$, and $y=|x|$ examples.

- [Structure] The file starts with a UTF-8 BOM and uses CRLF line endings; save it as UTF-8 without BOM with LF line endings.
- [Simplify] In "A true local obstruction", make the count explicit: $U\setminus\{0\}\subset X\setminus\{0\}$ meets all four open half-axes, which are separated, so $U\setminus\{0\}$ has at least four components while a punctured interval has two.
- [Graph] Plot $y=|x|$ and the horizontal line $y=0$ (the set $y^3=0$) side by side, labelling the first "topologically a line, not smoothly embedded" and the second "smooth despite $DF=0$".

### N0639

Note: [[Curvilinear tensor calculations|Curvilinear tensor calculations]]  
Priority: low · Graph: no · Manim: no

Correct and clear catalogue lesson; the polar example at $(2,0)$ (components $(3,2)$, $(3,8)$, length $25$, lowered array) and practice answers are verified, and Fig. C.ch04.2 covers the visual need.

- [Structure] The file starts with a UTF-8 BOM and uses CRLF line endings; save it as UTF-8 without BOM with LF line endings.
- [Example] The worked example uses $\theta=0$ where $g_r$, $g_\theta$ align with the Cartesian axes; add a second point such as $(r,\theta)=(2,\pi/4)$ so the reader sees the expansion with genuinely rotated basis vectors.
- [Structure] The figure label "Fig. C.ch04.2" follows a catalogue numbering unlike the "Fig. 18.x/19.x" labels of the neighbouring notes; align it with the folder convention.

### N0640

Note: [[Manifolds and coordinate charts - Overview|Manifolds and coordinate charts - Overview]]  
Priority: low · Graph: no · Manim: no

Clean hub; all topic links resolve and the outcomes match the lessons.

- [Structure] The file starts with a UTF-8 BOM and uses CRLF line endings; save it as UTF-8 without BOM with LF line endings.

### N0641

Note: [[Pseudotensors and reflections|Pseudotensors and reflections]]  
Priority: low · Graph: no · Manim: yes

Correct and careful treatment of axial vectors and pseudotensors; the reflection examples and the rule $(Qu)\times(Qv)=\det(Q)Q(u\times v)$ check out.

- [Structure] The file starts with a UTF-8 BOM and uses CRLF line endings; save it as UTF-8 without BOM with LF line endings.
- [Manim] Animate $u=e_1$, $v=e_2$ and $u\times v=e_3$ under the mirror $Q=\operatorname{diag}(-1,1,1)$: the inputs reflect, the naively reflected arrow $Qw=e_3$ is shown in grey, and the actual cross product $-e_3$ appears, making the extra $\det Q$ visible.
- [Example] Add a physical example of an axial vector (angular momentum $L=r\times p$ or the magnetic field) with one sentence on its behaviour under point reflection, since the note stays purely geometric.

### N0642

Note: [[Tensor algebra - Overview|Tensor algebra - Overview]]  
Priority: low · Graph: no · Manim: no

Clean hub; all topic links resolve and the outcomes match the 18.xx lessons.

- [Structure] The file starts with a UTF-8 BOM and uses CRLF line endings; save it as UTF-8 without BOM with LF line endings.

### N0643

Note: [[Tensor coordinates and invariants|Tensor coordinates and invariants]]  
Priority: low · Graph: no · Manim: no

Correct and clear summary of tensor components and basis changes; the slanted-basis example, rotation check $\operatorname{diag}(2,1)$, and symmetric/skew split are verified.

- [Structure] The file starts with a UTF-8 BOM and uses CRLF line endings; save it as UTF-8 without BOM with LF line endings.
- [Structure] The worked example (shear $M$, $v=(3,2)$, $\alpha=(2,-1)$, $G'$, length $13$) and practice 1 ($M=\operatorname{diag}(2,3)$) duplicate [[18.05 Transformation laws]] exactly; either link to 18.05 for them or choose different numbers so the two notes complement each other.
- [Example] Add a short isotropic-tensor check in "Second-order tensors with special properties", for example $M^{\mathsf T}(3I)M=3I$ for the rotation in practice 2, contrasting with $\operatorname{diag}(1,2)\mapsto\operatorname{diag}(2,1)$.

### N0644

Note: [[1 Vectors|1 Vectors]]  
Priority: low · Graph: no · Manim: no

Clean chapter hub with a TLDR and correct links to all seven section notes.

- [Structure] No change needed; all links resolve.

### N0645

Note: [[1.1 Definitions (basic)|1.1 Definitions (basic)]]  
Priority: low · Graph: no · Manim: no

Clear and correct introductory definitions of scalar, vector, and tensor, with a somewhat padded physical-quantities table.

- [Intuition] In the free/bound/sliding vector paragraph, add one concrete contrast (the same force applied at the hinge vs. at the handle of a door gives different torque) so the reader sees why the point of application matters for bound and sliding vectors.
- [Simplify] The definition "a tensor ... can have magnitude and multiple directions" is vague; add one sentence after the inertia-tensor example saying that a rank-2 tensor maps one vector ($\vec\omega$) to another vector ($\vec L$) that need not be parallel.
- [Structure] The physical-quantities table lists ten quantities with no symbol (speed, mass, charge, energy, angular momentum, ...) that are only mentioned in passing; keep only the quantities that the note writes as symbols ($\mechanical{\mathbf F}$) or merge the rest into one row, to keep the table useful.

### N0646

Note: [[1.2 Cartesian unit vectors|1.2 Cartesian unit vectors]]  
Priority: low · Graph: no · Manim: no

Short, correct note on $\hat i,\hat j,\hat k$; adequate for its scope.

- [Example] Add a one-line example that combines the three given terms, $5\hat i-3\hat j+\hat k$, and states its magnitude $\sqrt{35}\approx5.92$, as a bridge to 1.3.

### N0647

Note: [[1.3 Vector components|1.3 Vector components]]  
Priority: low · Graph: yes · Manim: no

Correct and clear; the numerical example (7 m at 210°, components −6.1 m and −3.5 m) and the quadrant rule check out.

- [Graph] Add a native 2D graph of the Eq. (1.3) example: arrow from the origin to $(-6.06,-3.5)$, dashed projections onto both axes, the angle arc of $210^\circ$, axes from $-8$ to $2$ (x) and $-5$ to $2$ (y); it makes the "both components negative" statement visible.
- [Simplify] The paragraph on light and shadows (Fig. 1.6) and the following non-orthogonal remark can be shortened to one sentence each; the distinction "parallel projection vs. perpendicular projection" is only meaningful in Chapter 4 and can be a forward link.
- [Intuition] After Eq. (1.5), state explicitly why $\arctan(A_y/A_x)$ alone fails: $(3,4)$ and $(-3,-4)$ give the same ratio, so the principal value cannot distinguish opposite vectors.

### N0648

Note: [[1.4 Vector addition and multiplication by a scalar|1.4 Vector addition and multiplication by a scalar]]  
Priority: low · Graph: yes · Manim: yes

Correct and readable; the worked example $\vec C=4\hat i+9\hat j$, $|\vec C|\approx9.85$, $\theta\approx66.0^\circ$ is verified.

- [Graph] Add a native 2D graph for the worked example: arrows $\vec A=(6,1)$ from the origin, $\vec B=(-2,8)$ from $(6,1)$, and resultant $\vec C=(4,9)$, plus a faint parallelogram using $\vec B$ from the origin; range x in $[-3,7]$, y in $[0,10]$.
- [Manim] Animate the head-to-tail rule: translate $\vec B$ so its tail meets the head of $\vec A$, draw $\vec C$, then repeat in the order $\vec B+\vec A$ to show commutativity via the parallelogram.
- [Intuition] Add one sentence that subtraction is addition of $-\vec B$, since 3.2 later relies on $\Delta\vec v=\vec v_{\mathrm{final}}+(-\vec v_{\mathrm{initial}})$.

### N0649

Note: [[1.5 Non-Cartesian unit vectors|1.5 Non-Cartesian unit vectors]]  
Priority: medium · Graph: yes · Manim: yes

Formulas for polar, cylindrical, and spherical coordinates and unit vectors are all correct, but the note reuses $r$ and $\theta$ with different meanings across sections and gives no intuition for why the unit vectors rotate.

- [Simplify] The note uses $\theta$ for the polar angle from the $x$-axis and later for the zenith angle from the $z$-axis, and $r$ for the cylindrical distance from the $z$-axis and the spherical distance from the origin; add a short warning at the start of each subsection (or write $\rho$ for the cylindrical radius, as already mentioned) so readers do not mix them.
- [Manim] Animate a point moving around a circle at fixed $r$ with $\hat r$ and $\hat\theta$ attached to it, alongside fixed $\hat i,\hat j$ at the same point; this shows directly why polar unit vectors are position-dependent and why their time derivatives are nonzero.
- [Graph] Add a 3D graph of the spherical unit vectors at one point (for example $r=1$, $\theta=50^\circ$, $\phi=35^\circ$), drawing $\hat r,\hat\theta,\hat\phi$ from Eq. (1.17) together with the meridian and the parallel through that point.
- [Simplify] The sentence "they do not constitute a fixed set of free vectors" is confusing because each unit vector can be moved as a free vector; say instead that the triad changes from point to point, so there is no single global polar basis.
- [Intuition] Add the derivative relations $\mathrm d\hat r/\mathrm d\theta=\hat\theta$ and $\mathrm d\hat\theta/\mathrm d\theta=-\hat r$ (directly from Eq. 1.11) right after the remark "account for changes in its unit vectors", as a concrete payoff.

### N0650

Note: [[1.6 Basis vectors|1.6 Basis vectors]]  
Priority: medium · Graph: yes · Manim: yes

Correct (the spherical coordinate basis vectors and Eq. 1.20 check out), but the step from "basis" to "coordinate basis from partial derivatives" is abrupt for a beginner.

- [Intuition] Before the spherical example, explain in one sentence that $\vec e_\theta=\partial\vec R/\partial\theta$ is the velocity of the point when only $\theta$ changes, which is why its length is $r$ (arc length $r\,\mathrm d\theta$); then state $|\vec e_\phi|=r\sin\theta$ explicitly.
- [Example] Add a numerical non-orthogonal example: with $\vec e_1=\hat i$ and $\vec e_2=\hat i+\hat j$, the vector $3\hat i+2\hat j$ has components $(1,2)$; this makes "components depend on the basis" concrete.
- [Graph] Add a 2D graph with an oblique grid generated by $\vec e_1=(1,0)$ and $\vec e_2=(1,1)$ over $[-1,4]\times[-1,3]$ and the vector $(3,2)$ decomposed along the grid lines.
- [Manim] Animate the transformation of the square Cartesian grid into the oblique grid while a fixed arrow stays in place and its component labels update; this shows that the vector is unchanged while its components change.
- [Simplify] State that the general formula Eq. (1.20) is the same chain rule as Eq. (2.25) and write it compactly as $\vec e_i=\sum_j(\partial x'_j/\partial x_i)\,\vec e'_j$ before the expanded form.

### N0651

Note: [[1.7 Chapter 1 problems|1.7 Chapter 1 problems]]  
Priority: low · Graph: no · Manim: no

Clear problem list; the problems are well-posed (the basis in 1.10 is linearly independent, determinant 9).

- [Structure] No change needed; optionally add short numerical answers (for example 1.1(b): $|\vec C|\approx5.83\,\mathrm{m\,s^{-1}}$ at $121^\circ$) so readers can self-check, since footnote 7 in 1.4 says full solutions are external.

### N0652

Note: [[2 Vector operations|2 Vector operations]]  
Priority: low · Graph: no · Manim: no

Clean chapter hub with correct links to all twelve section notes.

- [Structure] No change needed; all links resolve.

### N0653

Note: [[2.1 Scalar product|2.1 Scalar product]]  
Priority: low · Graph: yes · Manim: yes

Correct and clear; the angle example $\arccos(41/\sqrt{45\cdot59})\approx37.3^\circ$ is verified.

- [Manim] Animate $\vec B$ rotating around a fixed $\vec A$ while the projection of $\vec B$ onto $\vec A$ and the value $\vec A\cdot\vec B$ update; this shows the sign change at $90^\circ$ and the maximum at $0^\circ$.
- [Graph] Add a 2D graph of $\vec A\cdot\vec B/(|\vec A||\vec B|)=\cos\theta$ for $\theta\in[0,180^\circ]$ with the zero crossing at $90^\circ$ marked, next to the projection picture.
- [Example] Add a short physical example with numbers for the work statement in the first paragraph (for example $\vec F=(3,4)\,\mathrm N$, $\vec d=(5,0)\,\mathrm m$, $W=15\,\mathrm J$).

### N0654

Note: [[2.10 Curl|2.10 Curl]]  
Priority: medium · Graph: yes · Manim: yes

Formulas (Cartesian, cylindrical, spherical curl and the $k/r\,\hat\phi$ example) are correct, but the paddlewheel argument for Fig. 2.16 depends on a flow direction that the text never states.

- [Simplify] In the Fig. 2.16 paragraph, state the sense of the flow (clockwise or counterclockwise) and where the paddlewheel sits; as written, "curvature turns the wheel clockwise" is only true for clockwise flow, while the field $(k/r)\hat\phi$ with $k>0$ circulates counterclockwise.
- [Example] Add the rigid-rotation counterexample $\vec A=\omega r\,\hat\phi$, whose curl is $2\omega\hat z$, beside the $k/r$ example; the pair shows that circulating field lines alone do not determine the curl.
- [Graph] Add a native 2D vector-field plot (quiver) of the shear field $\vec A=y\,\hat i$ and the vortex field $\vec A=(-y\hat i+x\hat j)/(x^2+y^2)$ over $[-2,2]^2$, to match Figs. 2.14 and 2.16 with formulas.
- [Manim] Animate a small paddlewheel carried by (a) rigid rotation, (b) shear flow, and (c) the $1/r$ vortex; it spins in (a) and (b) but only translates in (c), which is the key insight of the section.
- [Simplify] The constant $k$ in $(k/r)\hat\phi$ is visually close to the unit vector $\hat k$ in the same note; rename it (for example $c$ or $\Gamma/2\pi$).

### N0655

Note: [[2.11 Laplacian|2.11 Laplacian]]  
Priority: medium · Graph: yes · Manim: no

The finite-difference derivation and the $k/r$ example are correct and well motivated, but the scalar field changes name from $\phi$ to $\psi$ halfway because $\phi$ is also the azimuth, and the 1/r figure discussion is confusing.

- [Correctness] Symbol clash: $\phi$ denotes the scalar field in Eqs. (2.43)–(2.50) and the $k/r$ example, but the azimuth angle in Eqs. (2.51)–(2.52) (where the field is renamed $\psi$); use $\psi$ for the scalar field throughout the note.
- [Simplify] The Fig. 2.19 paragraph introduces $1/r$ as "a steep peak" right after explaining that peaks have negative Laplacian; for the planar profile $1/\rho$ shown, the 2D Laplacian is $+1/\rho^3>0$, so the figure is not an example of that sign rule. Use a Gaussian peak $e^{-\rho^2}$ (2D Laplacian $(4\rho^2-4)e^{-\rho^2}$, negative near the top) as the illustration instead.
- [Graph] Add a 1D graph of $f(x)=e^{-x^2}$ and $f''(x)=(4x^2-2)e^{-x^2}$ on $[-3,3]$, marking that $f''<0$ near the peak and $f''>0$ in the tails; this supports the "center vs. neighbor average" interpretation of Eq. (2.50).
- [Example] Add a numerical check of Eq. (2.49) with $\phi=x^2+y^2+z^2$ (exact Laplacian 6) at $h=0.1$, which returns exactly 6 and shows the formula works.

### N0656

Note: [[2.12 Chapter 2 problems|2.12 Chapter 2 problems]]  
Priority: low · Graph: no · Manim: no

Clear, well-posed problem list.

- [Structure] No change needed; optionally add short answers (for example 2.11: $W=mgd\sin20^\circ\approx2.0\times10^5\,\mathrm J$; 2.12: force perpendicular to the wrench, $3.0\,\mathrm{N\,m}$) for self-checking.

### N0657

Note: [[2.2 Cross product|2.2 Cross product]]  
Priority: low · Graph: yes · Manim: yes

Correct and clear; component formula, determinant, magnitude, and unit-vector table are all right.

- [Graph] Add a native 3D graph with $\vec A=(2,0,0)$, $\vec B=(1,2,0)$, the parallelogram they span, and $\vec A\times\vec B=(0,0,4)$, so area and direction are visible together.
- [Manim] Animate $\vec B$ rotating in the $xy$-plane from parallel to antiparallel with $\vec A$ while the parallelogram area and the length of $\vec A\times\vec B$ along $\hat k$ grow, peak at $90^\circ$, and shrink; then continue past $180^\circ$ to show the product flips to $-\hat k$.
- [Example] Add a short numerical example (for example $\vec A=\hat i+2\hat j$, $\vec B=3\hat i-\hat j+\hat k$) with an explicit check that the result is perpendicular to both inputs via dot products.

### N0658

Note: [[2.3 Triple scalar product|2.3 Triple scalar product]]  
Priority: low · Graph: yes · Manim: no

Correct and concise derivation with geometric meaning and coplanarity test.

- [Graph] Add a native 3D graph of a parallelepiped spanned by $\vec A=(1,0.3,1.2)$, $\vec B=(2,0,0)$, $\vec C=(0.5,1.5,0)$, showing the base normal $\vec B\times\vec C$ and the height $|\vec A|\cos\phi$.
- [Example] Add a numerical example with a determinant evaluation and a coplanar case (for example $\vec C=\vec A+\vec B$ gives zero) to illustrate Eq. (2.13).

### N0659

Note: [[2.4 Triple vector product|2.4 Triple vector product]]  
Priority: medium · Graph: no · Manim: no

The component derivation of BAC−CAB is correct (Eqs. 2.18 and 2.19 verified) but long and mechanical, with little insight.

- [Simplify] Replace or supplement the full component expansion with the short argument: the result lies in the plane of $\vec B$ and $\vec C$, so it is $\beta\vec B+\gamma\vec C$; perpendicularity to $\vec A$ gives $\beta(\vec A\cdot\vec B)+\gamma(\vec A\cdot\vec C)=0$, and one simple case fixes the scale. Alternatively verify only the $\hat i$ component and say the rest follow by cyclic permutation.
- [Example] Add the physical example promised in the first sentence: centripetal acceleration $\vec\omega\times(\vec\omega\times\vec r)=\vec\omega(\vec\omega\cdot\vec r)-\omega^2\vec r$, which for $\vec r\perp\vec\omega$ is $-\omega^2\vec r$.
- [Example] Add a numerical demonstration of non-associativity, for example $\hat i\times(\hat i\times\hat j)=-\hat j$ while $(\hat i\times\hat i)\times\hat j=\vec 0$.

### N0660

Note: [[2.5 Partial derivatives|2.5 Partial derivatives]]  
Priority: low · Graph: yes · Manim: no

Correct and clear; the example derivatives, slope values at $(-3,2)$, and the native 3D graph scaling all check out.

- [Simplify] In the paragraph before the graph, "zero near $x=0$" should say "zero at $x=-1/3$", matching the value computed later in "Slopes of the surface".
- [Graph] In Fig. 2.9, add the two tangent lines at $(x,y)=(-3,2)$ with slopes $-59$ (along $x$) and $39$ (along $y$), scaled by the same factor $1/65$, so the reader sees that the partial derivatives are slopes of two different curves on the surface.
- [Structure] The power-rule subsection interrupts the partial-derivative thread; move it before the two-variable discussion or into a footnote.

### N0661

Note: [[2.6 Vectors as derivatives|2.6 Vectors as derivatives]]  
Priority: medium · Graph: yes · Manim: yes

Correct but abstract; the jump from the chain rule to "partial derivatives are basis vectors" needs a concrete example.

- [Example] Add a worked example: $T(x,y)=x^2+y$ along the path $x=t$, $y=t^2$; compute $\mathrm dT/\mathrm dt=2t\cdot1+1\cdot2t=4t$ by Eq. (2.27) and confirm by substitution $T=2t^2$.
- [Graph] Add a 2D graph with contour lines of the example temperature field and the parametrized path, with tangent velocity arrows at $t=0.5,1,1.5$, to make the abstract Fig. 2.10 explanation concrete.
- [Manim] Animate a dot moving along the path over the temperature contours while a side panel plots $T(t)$; it shows how the same spatial field gives different rates for different speeds and directions.
- [Intuition] Explain in one sentence why one may identify the vector with the operator: the map $f\mapsto\mathrm df/\mathrm dt$ determines the components $(v_x,v_y)$ uniquely (apply it to $f=x$ and $f=y$).

### N0662

Note: [[2.7 Nabla - the del operator|2.7 Nabla - the del operator]]  
Priority: low · Graph: no · Manim: no

Short, correct definition note for the del operator.

- [Simplify] Add one sentence warning that $\nabla$ is an operator, not an ordinary vector, so $\nabla\cdot\vec A\neq\vec A\cdot\nabla$ and its non-Cartesian forms are not obtained by simply swapping unit vectors (compare Eqs. 2.31 and 2.36).

### N0663

Note: [[2.8 Gradient|2.8 Gradient]]  
Priority: low · Graph: no · Manim: no

Correct and clear, with two good native graphs (3D plane and 2D contours with gradient arrows) whose slopes and labels check out.

- [Example] Add a non-uniform example such as $\psi=x^2+y^2$ (gradient $2x\hat i+2y\hat j$, pointing radially outward and perpendicular to circular contours), since the plane example has a constant gradient and hides the position dependence.
- [Intuition] State and briefly justify the directional-derivative relation $\mathrm d\psi/\mathrm ds=\nabla\psi\cdot\hat u$, which is the reason the gradient gives the steepest slope and is perpendicular to contours.

### N0664

Note: [[2.9 Divergence|2.9 Divergence]]  
Priority: medium · Graph: yes · Manim: yes

Correct calculations ($\nabla\cdot(r^2\hat r)=4r$, $\nabla\cdot(\hat r/r^2)=0$), but the intuition relies on raster figures and the flux interpretation is introduced only at the end.

- [Graph] Add native 2D vector-field plots for $\vec A=\sin(\pi x)\hat i$ on $[0,2]\times[0,1]$, and for $\vec A=r^2\hat r$ and $\vec A=\hat r/r^2$ in the $xy$-plane on $[-2,2]^2$, so the formulas and pictures sit side by side.
- [Intuition] Move the flux definition ("compare outward and inward flows across a small volume", i.e. $\nabla\cdot\vec A=\lim_{V\to0}\frac1V\oint\vec A\cdot\mathrm d\vec S$) to the top of the note, before the sawdust analogy; it makes the later examples interpretable.
- [Example] Verify $\nabla\cdot(\hat r/r^2)=0$ once with Eq. (2.37), $\frac1{r^2}\partial_r(r^2\cdot r^{-2})=0$, to show why spherical coordinates were recommended.
- [Manim] Animate a small cube moving through the $\sin(\pi x)\hat i$ field with inflow and outflow arrows on its faces scaled by the local field, showing net outflow where $\cos(\pi x)>0$ and net inflow where it is negative.
- [Simplify] Footnote 7 ("analogy with an incompressible fluid") should add that, for an incompressible fluid, nonzero divergence means a source or sink is present; otherwise readers may conclude the divergence must be zero.

### N0665

Note: [[3 Vector applications|3 Vector applications]]  
Priority: low · Graph: no · Manim: no

Clean chapter hub with correct links.

- [Structure] No change needed; all links resolve.

### N0666

Note: [[3.1 Mass on an inclined plane|3.1 Mass on an inclined plane]]  
Priority: low · Graph: yes · Manim: yes

Correct, careful, and complete; numbers verified (4.43 m/s, 0.90 s, 2.45 m/s with friction).

- [Intuition] After Eq. (3.14), note that $d\sin\theta=h$ is the height of the ramp, so $v=\sqrt{2gh}$ is independent of the angle; this answers the opening question "which quantities affect it" and links to energy conservation.
- [Graph] Add a 2D graph of final speed $v(\theta)=\sqrt{2gd(\sin\theta-\mu_k\cos\theta)}$ for $d=2\,\mathrm m$, $\theta\in[0,90^\circ]$, with curves for $\mu_k=0$ and $\mu_k=0.4$; the friction curve starts at $\theta=\arctan0.4\approx21.8^\circ$.
- [Manim] Animate the free-body diagram: rotate the ramp from $0^\circ$ to $90^\circ$ while the gravity components $mg\sin\theta$ and $mg\cos\theta$ and the normal force resize, illustrating the two limiting cases discussed in the text.

### N0667

Note: [[3.2 Curvilinear motion|3.2 Curvilinear motion]]  
Priority: medium · Graph: yes · Manim: yes

Correct physics and numbers (333 m/s², 1333 N ≈ 300 lbf), but the core $v^2/r$ derivation depends on raster figures and the centrifugal discussion is a bit diffuse.

- [Manim] Animate a point moving on a circle at constant speed, copying $\vec v_{\mathrm{initial}}$ and $\vec v_{\mathrm{final}}$ to a common tail, drawing $\Delta\vec v$, and shrinking $\Delta t$ so that $\Delta\vec v$ turns toward the center and $|\Delta\vec v|/\Delta t\to v^2/r$.
- [Graph] Add a 2D graph of a circle of radius $1.2$ with velocity arrows at two positions $\Delta\theta=30^\circ$ apart and the velocity triangle beside it, to supplement Figs. 3.13–3.14.
- [Intuition] Add a vector derivation in two lines using 1.5: $\vec r=r\hat r$, $\vec v=r\dot\theta\hat\theta$, $\vec a=r\ddot\theta\hat\theta-r\dot\theta^2\hat r$ (constant $r$), which gives both tangential and centripetal parts at once and connects to the polar unit vectors.
- [Simplify] In the hammer example, state that the cable length is used as the radius (ignoring the thrower's arms), since the radius of the hammer's circle is larger in practice.

### N0668

Note: [[3.3 The electric field|3.3 The electric field]]  
Priority: medium · Graph: yes · Manim: no

Correct and well structured (proton field $1.44\times10^{-9}$ N/C, divergence and curl checks), but the superposition example depends on charge positions that appear only in a raster figure.

- [Structure] Fig. 3.18 gives the positions of $q_1,q_2,q_3$ only in the image; write the coordinates in the text so the superposition section and Problem 3.6 are usable without the figure.
- [Graph] Add a native 2D field plot (arrows or field lines) of the three charges $+5$, $-6$, $-8\,\mathrm{nC}$ at the Fig. 3.18 positions, with the three contributions and their sum at the origin.
- [Simplify] The covector paragraph ($-\mathrm dV$, one-forms, metric) is far ahead of the reader's level in Chapter 3; move it to a footnote or the end with a forward link to 5.9.
- [Intuition] At "the point charge contributes to the divergence there", give the explicit result $\nabla\cdot\vec E=q\,\delta^3(\vec r)/\varepsilon_0$ and note that $k_e=1/(4\pi\varepsilon_0)$, which links Eq. (3.28) to Gauss's law (3.30).

### N0669

Note: [[3.4 The magnetic field|3.4 The magnetic field]]  
Priority: low · Graph: yes · Manim: yes

Correct and clear; the force directions in Figs. 3.21 and 3.23 and the divergence/curl checks of the wire field are verified.

- [Simplify] "carrying current $I$ along the positive axis" should name the axis: "along the positive $z$-axis".
- [Manim] Animate a positive charge in a uniform field out of the page tracing the clockwise circle with velocity and force arrows, then add a parallel velocity component to show the helix in 3D.
- [Graph] Add a native 2D plot of $|\vec B|=\mu_0I/(2\pi r)$ versus $r$ (for $I=10\,\mathrm A$, $r\in[0.01,0.2]\,\mathrm m$), or a 3D graph of the helix $x=R\cos\omega t$, $y=-R\sin\omega t$, $z=v_\parallel t$.
- [Example] Add the cyclotron radius $r=mv/(|q|B)$ from the $v^2/r$ result of 3.2, with a numerical example (electron at $10^6\,\mathrm{m/s}$ in $1\,\mathrm{mT}$ gives $r\approx5.7\,\mathrm{mm}$).

### N0670

Note: [[3.5 Chapter 3 problems|3.5 Chapter 3 problems]]  
Priority: low · Graph: no · Manim: no

Clear problem list, but Problem 3.3 is underdetermined and Problem 3.5 uses an unrealistic radius.

- [Correctness] Problem 3.3 gives a push of 10 N on a box of unspecified mass $m$; the speed at the top depends on $m$ ($a=F/m-g(\sin25^\circ+0.33\cos25^\circ)$, and the box only accelerates up the ramp if $m<1.41\,\mathrm{kg}$), so state a numerical mass.
- [Example] Problem 3.5: a curve of radius 10 m at 150 mi/h gives $a_c\approx450\,\mathrm{m\,s^{-2}}\approx46g$, which is physically impossible for a car; use a realistic radius (for example 100 m) or note that the numbers are illustrative.

### N0671

Note: [[4 Covariant and contravariant vector components|4 Covariant and contravariant vector components]]  
Priority: low · Graph: no · Manim: no

Clear chapter hub with a short motivating paragraph and complete links to all ten sections.

- [Structure] File on disk uses CRLF line endings (no BOM); convert to LF as required by the Obsidian skill.
- [Structure] No content change needed; optionally add one line saying that the running examples are the $150^\circ$ rotation (4.1–4.3) and the basis $\vec e_1=(1,3)$, $\vec e_2=(4,0)$ (4.6).

### N0672

Note: [[4.1 Coordinate-system transformations|4.1 Coordinate-system transformations]]  
Priority: low · Graph: yes · Manim: no

Correct, well-paced derivation of the passive rotation matrix with a verified numeric example ($A'_x\approx-2.83$, $A'_y\approx-5.10$), though it relies heavily on figures for the direction-cosine angles.

- [Structure] File on disk uses CRLF line endings (no BOM); convert to LF as required by the Obsidian skill.
- [Graph] Add a native 2D plot of $A'_x(\theta)=5\cos\theta+3\sin\theta$ and $A'_y(\theta)=-5\sin\theta+3\cos\theta$ for $\theta\in[0^\circ,360^\circ]$, with markers at $\theta=150^\circ$ $(-2.83,-5.10)$ and at $\theta=\arctan(3/5)\approx31^\circ$ where $A'_y=0$ and $A'_x=|\vec A|\approx5.83$; this makes the "rotate until $\vec A$ lies along $x'$" remark concrete.
- [Intuition] After Eq. (4.11), add the invariance check $A_x'^2+A_y'^2\approx(-2.83)^2+(-5.10)^2\approx34=5^2+3^2$ to show numerically that the vector itself is unchanged.
- [Simplify] In the $150^\circ$ example, state explicitly that $\alpha_{21}=240^\circ$ is equivalent to the unsigned angle $120^\circ$ (equal cosines), since readers measuring the angle between $y'$ and $x$ directly get $120^\circ$.

### N0673

Note: [[4.10 Chapter 4 problems|4.10 Chapter 4 problems]]  
Priority: low · Graph: no · Manim: no

Clear problem list consistent with the chapter; the link in Problem 4.9 points to a numbered equation rather than to the unnumbered simultaneous equations it means.

- [Structure] File on disk uses CRLF line endings (no BOM); convert to LF as required by the Obsidian skill.
- [Links] Problem 4.9 cites "Equation (4.26)", but the simultaneous equations follow it unnumbered (their numeric form is Eq. (4.27)/(4.28)); cite Eq. (4.27) or give the system explicitly.

### N0674

Note: [[4.2 Basis-vector transformations|4.2 Basis-vector transformations]]  
Priority: low · Graph: no · Manim: no

Correct and readable derivation of the active rotation matrix with a verified numeric example ($\approx(-5.83,-0.10)$).

- [Structure] File on disk uses CRLF line endings (no BOM); convert to LF as required by the Obsidian skill.
- [Simplify] Paragraph 2 states the covariant/contravariant transformation rule before any non-orthonormal basis has been introduced; move it after the active/passive comparison or add "in general bases (Sec. 4.4)" so the claim is not read as applying to the Cartesian example where both coincide.
- [Intuition] After Eq. (4.16), note that $|\vec A'|=\sqrt{5.83^2+0.10^2}\approx5.83=\sqrt{34}$, confirming length preservation numerically.
- [Simplify] Collapse the two near-identical intermediate equation blocks (angle-addition form and parenthesized form) into one step to shorten the derivation.

### N0675

Note: [[4.3 Basis-vector vs. component transformations|4.3 Basis-vector vs. component transformations]]  
Priority: low · Graph: no · Manim: yes

Short, correct note showing $M_\mathrm{passive}=R^{-1}=R^\mathsf T$; it would benefit from one concrete check and a visual of the compensation.

- [Structure] File on disk uses CRLF line endings (no BOM); convert to LF as required by the Obsidian skill.
- [Manim] Animate side by side: (left) axes rotating by $\theta$ with fixed $\vec A=5\hat i+3\hat j$ and its components updating, (right) the vector rotating by $-\theta$ in fixed axes; both component readouts stay identical, illustrating $M_\mathrm{passive}(\theta)=R(-\theta)$.
- [Example] State the identity $M_\mathrm{passive}(\theta)=R(-\theta)$ explicitly and verify it with the $150^\circ$ numbers from 4.1 and 4.2 (Problem 4.4 asks for this, so a one-line pointer suffices).

### N0676

Note: [[4.4 Non-orthogonal coordinate systems|4.4 Non-orthogonal coordinate systems]]  
Priority: medium · Graph: no · Manim: yes

Conceptually correct but entirely figure-dependent with no formulas, so the two kinds of projection remain abstract.

- [Structure] File on disk uses CRLF line endings (no BOM); convert to LF as required by the Obsidian skill.
- [Manim] Animate the angle between the two axes shrinking from $90^\circ$ to $60^\circ$ while showing both the parallel-projection shadow and the perpendicular-projection shadow on the $x$-axis; the two lengths start equal and visibly separate.
- [Example] Add a minimal formula: for unit axes at angle $\varphi$ with $\vec A=A^1\hat e_1+A^2\hat e_2$, the perpendicular projections are $A_1=\vec A\cdot\hat e_1=A^1+A^2\cos\varphi$ and $A_2=A^1\cos\varphi+A^2$; this shows directly why they coincide only for $\varphi=90^\circ$.
- [Intuition] State explicitly why perpendicular components fail to reconstruct $\vec A$ (Fig. 4.12(b)): $A_1\hat e_1+A_2\hat e_2$ double-counts the overlap terms proportional to $\cos\varphi$; this motivates the dual basis in 4.5.

### N0677

Note: [[4.5 Dual basis vectors|4.5 Dual basis vectors]]  
Priority: medium · Graph: no · Manim: no

Correct definitions of the reciprocal basis including Eq. (4.24), but the component labels $A^x,A_x$ paired with $\vec e_1,\vec e_2$ clash with the Cartesian meaning of $A_x$ used in 4.1 and 4.6.

- [Structure] File on disk uses CRLF line endings (no BOM); convert to LF as required by the Obsidian skill.
- [Simplify] Replace $A^x,A^y,A_x,A_y$ in Eqs. (4.20), (4.23), (4.25) by $A^1,A^2,A_1,A_2$; in 4.6 $A_x$ again denotes the Cartesian component ($=7$), so the current labels invite confusion between covariant and Cartesian components.
- [Simplify] State the defining relation compactly as $\vec e^{\,i}\cdot\vec e_j=\delta^i{}_j$ before the angle-based Eqs. (4.21)–(4.22); the length formulas then follow in one line.
- [Example] Add a short 2D check using the 4.6 basis: $\vec e_1=(1,3)$, $\vec e_2=(4,0)$ give $\vec e^{\,1}=(0,1/3)$, $\vec e^{\,2}=(1/4,-1/12)$, and verify $\vec e^{\,i}\cdot\vec e_j=\delta^i{}_j$; optionally verify Eq. (4.24) by embedding in 3D with $\vec e_3=\hat k$.

### N0678

Note: [[4.6 Finding covariant and contravariant components|4.6 Finding covariant and contravariant components]]  
Priority: medium · Graph: yes · Manim: no

All numbers check out ($A^1=2/3$, $A^2=19/12$, $A_1=13$, $A_2=28$, $|\vec e^{\,2}|\approx0.264$), but the geometric route via Eqs. (4.33)–(4.36) is long and obscures the simple dot-product result given only at the end.

- [Structure] File on disk uses CRLF line endings (no BOM); convert to LF as required by the Obsidian skill.
- [Structure] Move the dot-product shortcut (Eqs. (4.41)–(4.42) and the four-line example) up front, then present the geometric and Cramer's-rule calculations as checks; readers currently wade through three methods before seeing the one-line answer.
- [Graph] Add a native 2D plot of $\vec A=(7,2)$, $\vec e_1=(1,3)$, $\vec e_2=(4,0)$, the reciprocal vectors $\vec e^{\,1}=(0,1/3)$ and $\vec e^{\,2}=(1/4,-1/12)$, and the parallelogram $A^1\vec e_1+A^2\vec e_2$ with $A^1=2/3$, $A^2=19/12$; axes $x\in[-1,8]$, $y\in[-1,4]$.
- [Intuition] Add the closing check $A^iA_i=\tfrac23\cdot13+\tfrac{19}{12}\cdot28=53=|\vec A|^2$ to connect the two component sets to the invariant length (anticipates 5.5).
- [Simplify] In Eq. (4.31), give the exact values $|\vec e^{\,1}|=1/3$ and $|\vec e^{\,2}|=\sqrt{10}/12$ instead of only decimals, which removes the rounding in $A_1\approx13.0$, $A_2\approx28.0$.

### N0679

Note: [[4.7 Index notation|4.7 Index notation]]  
Priority: low · Graph: no · Manim: no

Clear build-up from matrix rows to the summation convention; Eq. (4.48) mixes index positions before the corrected form is mentioned.

- [Structure] File on disk uses CRLF line endings (no BOM); convert to LF as required by the Obsidian skill.
- [Simplify] Eq. (4.48) $A'^i=a_{ij}A^j$ has the free index $i$ up on the left and down on the right, contradicting the convention stated just before it; write $A'^i=a^i{}_jA^j$ directly and keep the remark that Cartesian texts often ignore index position.
- [Example] Add one 2D worked line: with the entries of Eq. (4.9), $A'^1=a^1{}_1A^1+a^1{}_2A^2=5\cos150^\circ+3\cos60^\circ\approx-2.83$, linking the abstract notation back to 4.1.

### N0680

Note: [[4.8 Quantities that transform contravariantly|4.8 Quantities that transform contravariantly]]  
Priority: low · Graph: no · Manim: no

Correct and well-structured derivation of the contravariant rule with a good polar example confirming that the Jacobian columns are coordinate basis vectors.

- [Structure] File on disk uses CRLF line endings (no BOM); convert to LF as required by the Obsidian skill.
- [Intuition] Note after Eq. (4.58) that $|\vec e_2|=r$, i.e. the coordinate basis vector $\vec e_\theta$ is not a unit vector; this prepares the scale factors in 5.5 and the Christoffel example in 5.7.
- [Simplify] Eq. (4.49) introduces $a_{11},a_{12},a_{13}$ without values; add $a_{11}=\partial x/\partial r=\sin\theta\cos\phi$, $a_{12}=r\cos\theta\cos\phi$, $a_{13}=-r\sin\theta\sin\phi$ so the "coefficients are partial derivatives" claim is shown, not just asserted.

### N0681

Note: [[4.9 Quantities that transform covariantly|4.9 Quantities that transform covariantly]]  
Priority: medium · Graph: no · Manim: no

Correct derivation of the covariant rule, but the paragraph after Eq. (4.61) packs inverse Jacobian, transpose, reciprocal basis, and gradient normals into a few dense sentences without an example.

- [Structure] File on disk uses CRLF line endings (no BOM); convert to LF as required by the Obsidian skill.
- [Example] Add the polar counterpart to the 4.8 example: for $f(x,y)$, $\partial f/\partial r=\cos\theta\,\partial_xf+\sin\theta\,\partial_yf$ and $\partial f/\partial\theta=-r\sin\theta\,\partial_xf+r\cos\theta\,\partial_yf$, showing that the same Jacobian entries now act from the other side (transposed).
- [Simplify] Split the paragraph after Eq. (4.61) into two: (1) inverse Jacobian versus Jacobian and the transpose, (2) geometric meaning (reciprocal basis normal to coordinate surfaces, gradient expansion).
- [Intuition] Add the one-line invariance check $\mathrm df=\partial_if\,\mathrm dx^i=\partial'_if\,\mathrm dx'^i$, which shows why the two transformation rules must be inverse to each other.

### N0682

Note: [[5 Higher-rank tensors|5 Higher-rank tensors]]  
Priority: low · Graph: no · Manim: no

Clean chapter hub with complete links; no content change needed.

- [Structure] File on disk uses CRLF line endings (no BOM); convert to LF as required by the Obsidian skill.

### N0683

Note: [[5.1 Definitions (advanced)|5.1 Definitions (advanced)]]  
Priority: low · Graph: no · Manim: no

Concise and correct transformation-based definitions; footnote 2 is out of context.

- [Structure] File on disk uses CRLF line endings (no BOM); convert to LF as required by the Obsidian skill.
- [Structure] Footnote 2 ("Specifying one direction in three dimensions takes two angles") is attached to a sentence about Chapter 1 and has no visible connection to the text; move it next to the vector definition or remove it.
- [Example] Add a concrete rank-two example (e.g. $A^iB^j$ or the inertia tensor of 6.1) to illustrate the $3^n$ entries and the basis factors $T^{ij}\vec e_i\otimes\vec e_j$.

### N0684

Note: [[5.10 Chapter 5 problems|5.10 Chapter 5 problems]]  
Priority: low · Graph: no · Manim: no

Clear, consistent problem list; links and referenced equations (5.16), (5.17) exist.

- [Structure] File on disk uses CRLF line endings (no BOM); convert to LF as required by the Obsidian skill.
- [Links] Problem 5.8 uses $R$ for the sphere radius while 6.3 uses $\mechanical{a}$ for the same sphere and $R$ for the Ricci scalar; add a pointer to [[6.3 The Riemann curvature tensor]] and align the radius symbol.

### N0685

Note: [[5.2 Covariant, contravariant, and mixed tensors|5.2 Covariant, contravariant, and mixed tensors]]  
Priority: low · Graph: no · Manim: no

Correct and compact statement of the transformation rules for rank-two tensors.

- [Structure] File on disk uses CRLF line endings (no BOM); convert to LF as required by the Obsidian skill.
- [Example] Add one concrete check, e.g. that $\delta^i{}_j$ transforms into itself under Eq. (5.5), or obtain the polar metric $g_{ij}$ from the Cartesian $\delta_{ab}$ with Eq. (5.4); this gives readers a worked rank-two transformation.

### N0686

Note: [[5.3 Tensor addition and subtraction|5.3 Tensor addition and subtraction]]  
Priority: low · Graph: no · Manim: no

Correct and clear; no substantive change needed.

- [Structure] File on disk uses CRLF line endings (no BOM); convert to LF as required by the Obsidian skill.
- [Intuition] Add one sentence on why tensors of different type cannot be added ($A^{ij}+B_{ij}$ does not transform with a single law), which explains the "same type" requirement.

### N0687

Note: [[5.4 Tensor multiplication|5.4 Tensor multiplication]]  
Priority: low · Graph: no · Manim: no

Correct treatment of outer product and contraction with a clear Kronecker-delta argument; the Cartesian outer-product example uses lower indices and then switches to upper.

- [Structure] File on disk uses CRLF line endings (no BOM); convert to LF as required by the Obsidian skill.
- [Simplify] The outer-product matrix uses $A_1,B_1,\dots$ but the next sentence writes $C^{ij}=A^iB^j$; use upper indices in the matrix as well (or say that index position is immaterial for Cartesian components).
- [Example] Add a numeric contraction: for $\vec A=(1,2,0)$ and $\vec B=(3,-1,4)$ in Cartesian components, the trace of the outer-product matrix is $1=\vec A\cdot\vec B$, linking contraction to the dot product.

### N0688

Note: [[5.5 Metric tensor|5.5 Metric tensor]]  
Priority: medium · Graph: no · Manim: no

Correct metric derivation and orthogonal-coordinate formulas (curl prefactors $h_1/H$ etc. verified), but symbols are reused and the primed/unprimed roles are reversed relative to 4.8.

- [Structure] File on disk uses CRLF line endings (no BOM); convert to LF as required by the Obsidian skill.
- [Correctness] Symbol clash: $\phi$ is the spherical azimuth in Eqs. (5.16)–(5.18) and the scalar field in the gradient and Laplacian formulas; $\theta$ is both the angle between $\vec A$ and $\vec B$ and the polar angle. Rename the scalar field (e.g. $f$, as in 4.9) and the inter-vector angle (e.g. $\vartheta$).
- [Simplify] In "Transformation of metric components" the primed coordinates are Cartesian and the unprimed ones curvilinear, the reverse of 4.8 where primes mark the new system; state the role reversal explicitly at the start of the subsection.
- [Example] Add the 2D metric of the 4.6 basis, $g_{ij}=\begin{pmatrix}10&4\\4&16\end{pmatrix}$, and show $g_{ij}A^iA^j=53=|\vec A|^2$ for $A^i=(2/3,19/12)$, tying the abstract metric to the earlier example.
- [Intuition] After the mixed form $\mathrm ds^2=\mathrm dx^i\,\mathrm dx_i$, add $\mathrm dx_i=g_{ij}\mathrm dx^j$ so the equality with $g_{ij}\mathrm dx^i\mathrm dx^j$ is immediate rather than asserted.

### N0689

Note: [[5.6 Index raising and lowering|5.6 Index raising and lowering]]  
Priority: medium · Graph: no · Manim: no

Correct but very terse; formulas only, with no example or intuition for what raising and lowering mean.

- [Structure] File on disk uses CRLF line endings (no BOM); convert to LF as required by the Obsidian skill.
- [Example] Use the 4.6 example: with $g_{ij}=\begin{pmatrix}10&4\\4&16\end{pmatrix}$ and $A^i=(2/3,19/12)$, $g_{ij}A^j=(13,28)=A_i$, reproducing the covariant components found geometrically; then invert with $g^{ij}$.
- [Intuition] Add one sentence that $g^{ij}g_{jk}=\delta^i{}_k$ (so raising undoes lowering) and that in an orthonormal Cartesian basis raising and lowering change nothing, which is why the distinction was invisible in 4.1–4.3.

### N0690

Note: [[5.7 Tensor derivatives and Christoffel symbols|5.7 Tensor derivatives and Christoffel symbols]]  
Priority: medium · Graph: yes · Manim: yes

Correct derivation of Eq. (5.23) and correct cylindrical example ($\Gamma^1{}_{22}=-r$), but the "add two zero expressions" step is opaque and the polar example appears before the symbols are derived.

- [Structure] File on disk uses CRLF line endings (no BOM); convert to LF as required by the Obsidian skill.
- [Simplify] Before adding the two zero expressions, state the goal: rewrite each $\vec e\cdot\partial\vec e$ term via $\partial_k(\vec e_i\cdot\vec e_j)=\vec e_i\cdot\partial_k\vec e_j+\vec e_j\cdot\partial_k\vec e_i$ as derivatives of $g_{ij}$; then the six-term regrouping becomes transparent.
- [Example] Verify the polar value $\Gamma^\theta{}_{r\theta}=1/r$ directly from $\vec e_r=(\cos\theta,\sin\theta)$ and $\vec e_\theta=(-r\sin\theta,r\cos\theta)$: $\partial_\theta\vec e_r=(-\sin\theta,\cos\theta)=\vec e_\theta/r$; this is quicker than citing values.
- [Graph] Add a 2D vector-field plot of the polar coordinate basis $\vec e_r$ and $\vec e_\theta$ at grid points $r\in\{1,2,3\}$, $\theta$ every $30^\circ$, showing that $\vec e_\theta$ grows with $r$ and both rotate with $\theta$.
- [Manim] Animate a point moving along a circle of fixed $r$ with $\vec e_r$ attached, drawing the accumulated change $\Delta\vec e_r$ and showing it align with $\vec e_\theta/r$.

### N0691

Note: [[5.8 Covariant differentiation|5.8 Covariant differentiation]]  
Priority: medium · Graph: no · Manim: no

Correct formulas (5.24)–(5.25) and cylindrical example, but the parallel-transport paragraphs are abstract and the covariant rule (5.25) is stated without derivation.

- [Structure] File on disk uses CRLF line endings (no BOM); convert to LF as required by the Obsidian skill.
- [Simplify] Add a two-line justification of the minus sign in Eq. (5.25): require $(A_iB^i)_{;j}=\partial_j(A_iB^i)$ for the scalar $A_iB^i$ and use Eq. (5.24).
- [Example] Check the cylindrical result with the constant Cartesian field $\vec A=\hat i$: $A^r=\cos\phi$, $A^\phi=-\sin\phi/r$ give $A^r{}_{;\phi}=-\sin\phi+\sin\phi=0$ and $A^\phi{}_{;\phi}=-\cos\phi/r+\cos\phi/r=0$, showing that the covariant derivative of a constant field vanishes.
- [Links] The sphere paragraph points to 6.3, but [[5.10 Chapter 5 problems]] Problems 5.8–5.9 contain the sphere metric and connection; link those too.

### N0692

Note: [[5.9 Vectors and one-forms|5.9 Vectors and one-forms]]  
Priority: medium · Graph: no · Manim: no

Correct modern viewpoint, but compressed into four dense paragraphs with no worked pairing.

- [Structure] File on disk uses CRLF line endings (no BOM); convert to LF as required by the Obsidian skill.
- [Example] Add a numeric pairing: $\omega=\mathrm df$ for $f=x^2+y$ at $(1,0)$ has components $(2,1)$; with $\vec v=(3,-1)$, $\omega(\vec v)=5$ is the directional rate of change, i.e. the number of unit-spaced level surfaces crossed per unit parameter.
- [Intuition] Connect to 4.5: the dual basis one-forms satisfy $\mathrm dx^i(\vec e_j)=\delta^i{}_j$, the same relation that defined the reciprocal vectors; the metric is needed only to turn a one-form into an arrow.

### N0693

Note: [[6 Tensor applications|6 Tensor applications]]  
Priority: low · Graph: no · Manim: no

Clean chapter hub; no content change needed.

- [Structure] File on disk uses CRLF line endings (no BOM); convert to LF as required by the Obsidian skill.

### N0694

Note: [[6.1 The inertia tensor|6.1 The inertia tensor]]  
Priority: low · Graph: no · Manim: yes

Correct and well-motivated; all pyramid tensors (8; 20/20/8; 12/12/8; the 30° results and the two-rotation result 17.75, -2.6, -3.9, 17, -4.5, 13.25) recompute exactly.

- [Structure] File on disk uses CRLF line endings (no BOM); convert to LF as required by the Obsidian skill.
- [Correctness] Symbol clash: $\mechanical{a}$ denotes acceleration (intro and table) and the pyramid half-side, and $a,b$ are also used as component indices in $\mechanical{I}_{ab}$; rename the half-side (e.g. $\mechanical{d}$) or the indices ($j,k$) and keep only one meaning per symbol in the table.
- [Manim] Animate Fig. 6.1: a single mass circling the $z$-axis above the origin with $\vec\omega$ fixed and $\vec L=m\vec r\times\vec v$ sweeping a cone; then add the opposite mass and show the transverse parts cancel so that $\vec L\parallel\vec\omega$.
- [Simplify] List the coordinates of the five masses before computing $I_{xx}$ (e.g. $m_1=(a,a,0)$, $m_2=(-a,a,0)$, $m_3=(-a,-a,0)$, $m_4=(a,-a,0)$, $m_5=(0,0,2a)$); currently they must be inferred from the figure and the sums.
- [Intuition] After the spherical-top result, note that the origin is the centre of the base, not the centre of mass, and that principal moments depend on the chosen origin.

### N0695

Note: [[6.2 The electromagnetic field tensor|6.2 The electromagnetic field tensor]]  
Priority: low · Graph: yes · Manim: no

Correct (Jackson-style $F^{\alpha\beta}$ and dual, recovery of all four Maxwell equations, and the boost $F'=AFA^\mathsf T$ all verified) and clearly worked, but with a few reused symbols.

- [Structure] File on disk uses CRLF line endings (no BOM); convert to LF as required by the Obsidian skill.
- [Correctness] Symbol clash: $\mechanical{v}$ is the generic wave speed in Eq. (6.12) and the frame speed in the boost, and $\vec A$ is a generic vector field in Eq. (6.12) while $A$ is the Lorentz matrix in Eq. (6.18); rename the wave-equation field (e.g. $\vec\Psi$) and speed ($u$), and update the table.
- [Graph] Add a 2D plot of $E'_y/(cB_z)=-\gamma\beta$ and $B'_z/B_z=\gamma$ for a pure $B_z$ field versus $\beta\in[0,0.95]$, showing the induced electric field growing without bound as $\beta\to1$ (connects to Problem 6.7).
- [Intuition] Mention the invariants $\vec E\cdot\vec B$ and $B^2-E^2/c^2$ (from $F_{\alpha\beta}F^{\alpha\beta}$) as a quick check on Eqs. (6.19)–(6.20).
- [Simplify] The field tensor is colored with \magnetic{} although half its entries are $E/c$; consider leaving $F$ uncolored and coloring only the entries.

### N0696

Note: [[6.3 The Riemann curvature tensor|6.3 The Riemann curvature tensor]]  
Priority: medium · Graph: no · Manim: yes

Derivation and sphere results are correct ($R^\theta{}_{\phi\theta\phi}=\sin^2\theta$, $R^\phi{}_{\theta\phi\theta}=1$ in the MTW/Carroll convention), but the sixteen fully written expansions dominate the note and hide the short result.

- [Structure] File on disk uses CRLF line endings (no BOM); convert to LF as required by the Obsidian skill.
- [Simplify] Replace the two long expansion blocks with the statement that in 2D only one component (e.g. $R^\theta{}_{\phi\theta\phi}$) is independent by the Riemann symmetries, compute it in three lines, and move the full sixteen-term listing into a collapsed callout.
- [Manim] Animate the Quito example on a 3D sphere: transport a tangent arrow along the meridian over the pole and along the equator to the antipode, ending with opposite orientations; optionally close a small loop to show the rotation angle equals enclosed area over $a^2$.
- [Intuition] State the end result $R_{\theta\theta}=1$, $R_{\phi\phi}=\sin^2\theta$, $R=2/\mechanical{a}^2$ (or point to Problem 6.10) so readers see the curvature scale with the radius; the computed $R^\sigma{}_{\alpha\beta\gamma}$ alone hides the $a$-dependence.
- [Simplify] Index conventions shift from 6.2 (coordinates $0$–$3$) and 5.7 ($\Gamma^k{}_{ij}$ spacing) to "numbered from 1 to 4" and $\Gamma^\sigma_{\alpha\beta}$ here; align them, and note that $\mechanical{G}$ (Newton) and $G_{\mu\nu}$ (Einstein tensor) share a letter.
- [Links] Link the sphere metric to [[5.10 Chapter 5 problems]] (Problems 5.8–5.9), which ask for the same metric and Christoffel symbols.

### N0697

Note: [[6.4 Chapter 6 problems|6.4 Chapter 6 problems]]  
Priority: low · Graph: no · Manim: no

A clear exercise list whose only issue is a physical-quantities table that gives one meaning to a symbol used for two quantities.

- [Correctness] The table lists $\theta$ only as the rotation angle of Problem 6.3, but Problem 6.9 uses $\theta$ as the polar angle in $ds^2=d\mechanical{r}^2+\mechanical{r}^2d\theta^2$; add the polar-angle meaning to that row (or use a different letter, e.g. $\alpha$, for the 20° rotation).
- [Structure] Optionally add short numerical answers for 6.6 and 6.7 ($\gamma=4/\sqrt{15}$, so $E'_z=\gamma E_z\approx5.16\,\mathrm{V/m}$ and $B'_y=\gamma vE_z/c^2$ for 6.6; analogous for 6.7) so readers can check their work.

### N0698

Note: [[Further reading for Vectors and Tensors|Further reading for Vectors and Tensors]]  
Priority: low · Graph: no · Manim: no

A plain reference list; no change needed.

- [Structure] No change needed; optionally add one line per entry saying which chapter of this series it supports (e.g. Schutz and Carroll for Chapter 6.3).

### N0699

Note: [[Index for Vectors and Tensors|Index for Vectors and Tensors]]  
Priority: low · Graph: no · Manim: no

A working alphabetical index whose links all resolve; no change needed.

- [Structure] No change needed; for consistency capitalise the lowercase entries ("electric field", "electromagnetic field tensor", "inertia tensor", "magnetic field") like the other items.

### N0700

Note: [[Vectors and Tensors|Vectors and Tensors]]  
Priority: low · Graph: no · Manim: no

A minimal hub with valid chapter links; no change needed.

- [Structure] No change needed; optionally add a one-line description under each chapter link so the hub doubles as a roadmap.

### N0701

Note: [[20.01 Metric definitions|20.01 Metric definitions]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; the worked example (determinant 1, $(a+xb)^2+b^2$, pairing $-3$) and both practice answers check out.

- [Graph] Plot the unit circles $g(v,v)=1$ of the worked-example metric $G(x,y)$ at $x=-2,0,2$ as ellipses in the $(a,b)$ component plane ($a$, $b\in[-3,3]$), showing how the metric tilts and stretches from point to point while staying positive definite.
- [Intuition] In "Limits and common errors" add one sentence on why nondegeneracy (not positivity) is the condition needed for index raising, with a forward link to [[20.04 Inverse metrics]].

### N0702

Note: [[20.02 Coordinate components|20.02 Coordinate components]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; all numbers in the worked example and practice (36, 7, 59, determinant 11, and the two answers) verify.

- [Graph] Plot the level curve $4a^2+6ab+5b^2=1$ together with the circle $a^2+b^2=1$ on $[-1.2,1.2]^2$, with the eigenvector axes of $G$ drawn, to show that the cross term $6\,dx\,dy$ only rotates the unit ellipse.
- [Intuition] In "What the line element means" add one sentence that $ds^2$ is the squared length of an infinitesimal displacement $(dx,dy)$, so the line element is used by integrating its square root along a curve (link [[20.07 Curves]]).

### N0703

Note: [[20.03 Coordinate changes|20.03 Coordinate changes]]  
Priority: low · Graph: yes · Manim: yes

Clear and correct; the shear example and both practice answers verify, and the congruence-vs-similarity warning is well placed.

- [Graph] Draw the shear chart $x=u+v,\ y=v$ as a grid of $u$- and $v$-coordinate lines on $[-2,2]^2$ with the basis vectors $\partial_u=(1,0)$ and $\partial_v=(1,1)$ at the origin, making the off-diagonal entry $g_{uv}=1$ visible as the non-right angle.
- [Manim] Animate the Cartesian grid continuously shearing into the $(u,v)$ grid while two fixed arrows $a$, $b$ stay put and their component labels update, showing that the vectors and their pairing $1$ are unchanged while components and $G$ change.

### N0704

Note: [[20.04 Inverse metrics|20.04 Inverse metrics]]  
Priority: low · Graph: no · Manim: no

Clear and correct; the inverse matrices, the raised and lowered components, and the practice answers all verify.

- [Intuition] Add one geometric sentence in "Two different spaces": in the Euclidean case $v^\flat$ is the covector whose level lines are perpendicular to $v$, which is why the distinction is invisible in orthonormal Cartesian coordinates.
- [Example] Add a brief polar-coordinate example ($G=\operatorname{diag}(1,r^2)$, $G^{-1}=\operatorname{diag}(1,r^{-2})$) showing that the gradient $df$ raises to $\partial_r f\,\partial_r+r^{-2}\partial_\theta f\,\partial_\theta$, a common use of index raising.

### N0705

Note: [[20.05 Signature|20.05 Signature]]  
Priority: low · Graph: no · Manim: no

Clear and correct with a good figure; the completing-the-square example, null lines $x=(-2\pm\sqrt3)y$, and practice answers all check out.

- [Simplify] The second paragraph of "Diagonal forms and sign counts" compresses the Sylvester argument; spell out in one extra sentence why a subspace of dimension $>p$ must meet the span of the negative and zero directions (dimension count $k+(q+r)>n$).
- [Example] Add the Minkowski line element $-c^2dt^2+dx^2$ as a one-line instance of signature $(1,1)$ / Lorentzian, linking the abstract counts to the familiar case.

### N0706

Note: [[20.06 Lengths and angles|20.06 Lengths and angles]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; the Cauchy–Schwarz derivation, the $60^\circ$ example, the orthonormalisation $z=(1,-4)$ with $g(z,z)=12$, and both practice answers verify.

- [Graph] Plot the unit ellipse $4a^2+2ab+b^2=1$ of the worked-example metric with $e_1/2$, $e_2$ and the orthonormal pair $E_1$, $E_2$ drawn as arrows on $[-1.2,1.2]^2$, so readers see that $E_1,E_2$ are conjugate diameters of the ellipse rather than Euclidean-perpendicular vectors.
- [Graph] In "Why indefinite metrics need limits" add a plot of the hyperbolas $v_1^2-v_2^2=\pm1$ and the null lines $v_2=\pm v_1$ with $w=(\cosh t,\sinh t)$ for $t\in[-1.5,1.5]$, showing why $h(v,w)=\cosh t$ exceeds 1.

### N0707

Note: [[20.07 Curves|20.07 Curves]]  
Priority: low · Graph: yes · Manim: yes

Clear and correct; the spiral length $\sqrt2$, the Cartesian check, and both practice answers verify.

- [Graph] Plot the spiral $r=e^t,\ \theta=t$ for $t\in[0,\log 2]$ in the Cartesian plane together with the straight chord between its endpoints $(1,0)$ and $(2\cos\log2,2\sin\log2)$, labelling the lengths $\sqrt2\approx1.414$ and the chord length, to illustrate "a curve length is an upper bound for distance".
- [Manim] Animate a point moving along the spiral with its tangent vector $\dot\gamma$ drawn and a running counter $s(t)=\sqrt2(e^t-1)$, then replay with a reparameterised speed to show the counter reaches the same final length.

### N0708

Note: [[20.08 Volume|20.08 Volume]]  
Priority: low · Graph: no · Manim: no

Clear and correct with a helpful polar-cell figure; the determinant argument, the area $\pi/2$, and both practice answers verify.

- [Example] Add the unit-sphere area $\int_0^{2\pi}\int_0^\pi\sin\theta\,d\theta\,d\phi=4\pi$ from $G=\operatorname{diag}(1,\sin^2\theta)$ as a short second example where the density is not a Jacobian of a planar change of variables.
- [Intuition] In "A determinant measures a local cell" add one sentence relating $\sqrt{\det G}$ to the worked example in [[20.06 Lengths and angles]]: $\lVert e_1\rVert\lVert e_2\rVert\sin\theta=2\cdot1\cdot\sin(\pi/3)=\sqrt3$, matching practice 1.

### N0709

Note: [[20.09 Examples and limits|20.09 Examples and limits]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; the polar Christoffel symbols, the Riemann component $R^r{}_{\theta r\theta}=-ff''$, $K=-f''/f$, and the practice answers all verify.

- [Graph] For the family $ds^2=dr^2+f(r)^2d\theta^2$, plot the circumference function $2\pi f(r)$ for $f=r$, $\sin r$, $e^r$ (and $\sinh r$) on $r\in[0,3]$, so readers see that curvature corresponds to the circumference growing slower or faster than linearly.
- [Intuition] In "A useful family" add one sentence that $f(r)$ is the circumference radius of the circle at distance $r$ and that $K=-f''/f$ is the Jacobi equation $f''+Kf=0$, which explains the three examples at once.

### N0710

Note: [[21.01 The differentiation problem|21.01 The differentiation problem]]  
Priority: low · Graph: no · Manim: yes

Clear and correct; the rotating-frame derivative, the constant-vector example, and the coordinate-basis derivatives all verify.

- [Manim] Animate a point moving around the unit circle carrying the rotating $e_r,e_\theta$ frame and the fixed vector $e_x$, with live component readouts $a=\cos t$, $b=-\sin t$, to show components changing while the vector stays constant (an animated version of Fig. 21.1).
- [Simplify] In "Coordinate basis versus unit frame" show the one-line derivation $\partial_\theta\partial_\theta=\partial_\theta(re_\theta)=-re_r=-r\partial_r$ for the third identity, as was done implicitly for the first two.

### N0711

Note: [[21.02 Affine connections|21.02 Affine connections]]  
Priority: low · Graph: no · Manim: no

Clear and correct; the line-connection example ($20\partial_x$ at $x=2$), the difference-tensor argument, and the practice answers verify.

- [Intuition] Add one sentence in "Definition and domain" that the connection is the extra structure that says which vectors at nearby points count as "the same", foreshadowing [[21.07 Parallel transport]].
- [Example] In "Worked example: a different connection on a line" add the parallel fields of this connection ($g'+xg=0\Rightarrow g=Ce^{-x^2/2}$) to show concretely what the nonstandard connection does.

### N0712

Note: [[21.03 Connection coefficients|21.03 Connection coefficients]]  
Priority: low · Graph: no · Manim: no

Clear and correct; the derivation of $\nabla_iY^k$, the polar example $-2\partial_r+2\partial_\theta$ at $(2,1)$, and the practice answers verify.

- [Example] Add a curve example for $DV^k/dt$: on the unit circle $\theta=t$ with $V=\partial_r$, show $DV^\theta/dt=\Gamma^\theta{}_{\theta r}=1$, matching $de_r/dt=e_\theta$ from [[21.01 The differentiation problem]].

### N0713

Note: [[21.04 Covectors and tensors|21.04 Covectors and tensors]]  
Priority: low · Graph: no · Manim: no

Clear and correct; the sign derivation for covectors, the general tensor rules, the $dx$ check in polar coordinates, and the practice answers verify.

- [Example] The practice Hessian could be illustrated with $f=r^2/2$ in polar coordinates: $H_{rr}=1$, $H_{\theta\theta}=0-\Gamma^r{}_{\theta\theta}r=r^2$, i.e. $H=g$, matching the Cartesian Hessian of $(x^2+y^2)/2$.

### N0714

Note: [[21.05 Transformation behaviour|21.05 Transformation behaviour]]  
Priority: low · Graph: no · Manim: no

Clear and correct; the inhomogeneous transformation law, the $y=\log x$ example ($\widetilde\Gamma^y{}_{yy}=1$), and both practice answers verify.

- [Simplify] In "Why the covariant derivative transforms as a tensor" the cancellation is only described in words; add the two-line computation $\partial_b\widetilde V^a=A^i{}_b\partial_i(B^a{}_kV^k)$ and $\partial_bB^a{}_k\,A^k{}_c=-B^a{}_k\,\partial^2x^k/\partial y^b\partial y^c$ so readers can see the terms cancel.
- [Intuition] Add one sentence after the boxed law: the second-derivative term is exactly what makes "zero coefficients" a chart-dependent statement, preparing the normal-coordinate idea in [[22.09 Local flatness and information loss]].

### N0715

Note: [[21.06 Levi-Civita connection|21.06 Levi-Civita connection]]  
Priority: low · Graph: no · Manim: no

Clear and correct; the three-permutation derivation, the Koszul formula, the polar coefficients, and the practice answers verify.

- [Simplify] In "Derive the Christoffel formula" write out the three compatibility equations explicitly (one line each) before stating the cancellation; the sentence "cancels all terms except the two equal copies" is hard to check mentally.
- [Example] Add the 2-sphere $g=a^2(d\theta^2+\sin^2\theta\,d\phi^2)$ as a short second example ($\Gamma^\theta{}_{\phi\phi}=-\sin\theta\cos\theta$, $\Gamma^\phi{}_{\theta\phi}=\cot\theta$), since it is reused in [[22.02 Coordinate expressions]] without derivation.

### N0716

Note: [[21.07 Parallel transport|21.07 Parallel transport]]  
Priority: low · Graph: yes · Manim: yes

Clear and correct; the circle transport ($V^r=\cos t$, $V^\theta=-\sin t/R$, $V=e_x$) and both practice answers verify.

- [Manim] Animate parallel transport on a sphere around a latitude circle (e.g. colatitude $\theta_0=60^\circ$) next to the flat polar circle, showing the flat vector returning unchanged while the sphere vector returns rotated by $2\pi(1-\cos\theta_0)$, the enclosed cap area (equivalently $-2\pi\cos\theta_0$ mod $2\pi$); this makes "path dependence" and holonomy concrete.
- [Graph] For practice 2, plot $v(t)=3e^{-t}$ for $t\in[0,4]$ against the constant Euclidean value 3, illustrating that a non-metric-compatible connection changes the length of a transported vector.
- [Example] In "Metric and path dependence" add a curved worked example (sphere latitude circle: holonomy angle $2\pi(1-\cos\theta_0)$, equal to the enclosed cap area) so the path-dependence claim is demonstrated, not only stated.

### N0717

Note: [[21.08 Geodesics|21.08 Geodesics]]  
Priority: low · Graph: yes · Manim: no

Clear and correct with a good figure; the reparameterisation identity, the polar straight-line check, and the practice answers verify.

- [Graph] Plot $r(t)=\sqrt{t^2+b^2}$ and $\theta(t)=\operatorname{arccot}(t/b)$ for $b=1$, $t\in[-4,4]$ in a 2D chart, showing that both polar components curve although the path is straight (complements Fig. 21.2).
- [Example] Add a curved-space example: great circles on the unit sphere, e.g. the equator $\theta=\pi/2,\ \phi=t$ satisfies $\ddot\theta-\sin\theta\cos\theta\,\dot\phi^2=0$ while other latitude circles do not.

### N0718

Note: [[21.09 Coordinate examples|21.09 Coordinate examples]]  
Priority: low · Graph: no · Manim: no

Clear and correct; the polar Christoffel symbols, both explicit curvature components, and the practice answers verify, though it largely repeats 20.09 and 21.06.

- [Structure] The polar metric derivation, the Christoffel symbols and $R^r{}_{\theta r\theta}=0$ are already computed in [[20.09 Examples and limits]] and [[21.06 Levi-Civita connection]]; shorten those parts to a link and use the space for a genuinely new coordinate example (e.g. spherical coordinates in $\mathbb R^3$ or the sphere).

### N0719

Note: [[22.01 Curvature definitions|22.01 Curvature definitions]]  
Priority: low · Graph: no · Manim: yes

Clear and correct; the tensoriality argument, the loop formula $P_\square=I-stR(X,Y)+\dots$, and the constant-matrix example (commutator $\operatorname{diag}(1,-1)$) all verify.

- [Manim] Animate a vector being parallel-transported around a small geodesic quadrilateral on a sphere, then shrink the loop and show the rotation angle scaling with the enclosed area, illustrating the leading $st\,R(X,Y)$ term.
- [Intuition] Before the abstract definition, add one sentence that on a sphere transporting a vector around a closed loop rotates it by an angle equal to $K$ times the enclosed area, giving readers a picture of what $R$ measures.

### N0720

Note: [[22.02 Coordinate expressions|22.02 Coordinate expressions]]  
Priority: low · Graph: no · Manim: no

Clear and correct; the component formula, the sphere component $R^\theta{}_{\phi\theta\phi}=\sin^2\theta$, $K=1/a^2$, and the practice answers verify.

- [Simplify] In the sphere example, show briefly which terms of $\Gamma^\theta{}_{\theta c}\Gamma^c{}_{\phi\phi}$ vanish (all $\Gamma^\theta{}_{\theta c}=0$) so the reader sees why only one product term survives.

### N0721

Note: [[22.03 Conventions|22.03 Conventions]]  
Priority: low · Graph: no · Manim: no

Correct and careful; the slot conversions $C_{ijba}=R_{abij}$ and $Q_{ijkl}=R_{lkij}$, the torsion term in the Hessian, and the sphere translations all verify, but the note is dense.

- [Structure] Add a small comparison table of common conventions (e.g. this vault, Misner–Thorne–Wheeler, Wald, do Carmo) listing the operator sign, slot order and Ricci contraction, each with the resulting sign of $R_{1212}$ for the unit sphere; this is the main practical use of the note.
- [Simplify] "Index slots are not the order of arguments" is hard to follow; lead with the concrete numbers ($R_{1212}=1$, $C_{1212}=-1$ on the unit sphere) before the abstract slot equation.

### N0722

Note: [[22.04 Tensor symmetries|22.04 Tensor symmetries]]  
Priority: low · Graph: no · Manim: no

Clear and correct; the normal-coordinate expression for $R_{abij}$, the cyclic identity, the surface components and $\operatorname{Ric}=Kg$, and the practice answers verify.

- [Example] Add the count of independent components $n^2(n^2-1)/12$ (1, 6, 20 for $n=2,3,4$) as a consequence of the symmetries, with the surface case as the $n=2$ check.

### N0723

Note: [[22.05 Bianchi identities|22.05 Bianchi identities]]  
Priority: low · Graph: no · Manim: no

Clear and correct; the normal-coordinate proofs, the contracted identity, and the Schur calculation $(n-1)(n-2)\partial_jk=0$ verify.

- [Simplify] In "Why the algebraic identity holds" write out all six terms of the cyclic sum in one display and pair them, instead of "the remaining terms cancel in the same way"; it is short and removes the only skipped step.
- [Intuition] Add one sentence on the meaning of the differential identity: it is the curvature analogue of $d(dA)=0$ (or $\nabla\cdot(\nabla\times A)=0$), a consistency condition that any curvature coming from a connection must satisfy; link [[26.06 Curvature or field strength]] for the gauge-field version.

### N0724

Note: [[22.06 Contractions|22.06 Contractions]]  
Priority: low · Graph: no · Manim: no

Clear and correct; the sphere contraction ($S=2/a^2$), the sectional-curvature sums, and both practice answers verify.

- [Example] Add a quick 3D illustration of $\operatorname{Ric}(v,v)=\sum K_{ij}$, e.g. the product $S^2\times\mathbb R$ of radius $a$ where $\operatorname{Ric}=\operatorname{diag}(1/a^2,1/a^2,0)$ and $S=2/a^2$, showing that Ricci remembers direction but $S$ does not.

### N0725

Note: [[22.07 The Einstein tensor|22.07 The Einstein tensor]]  
Priority: low · Graph: no · Manim: no

Clear and correct; the two-stage contraction of the differential Bianchi identity, $\nabla^i\operatorname{Ric}_{ij}=\tfrac12\nabla_jS$, the constant-curvature formula, and the practice answers verify.

- [Intuition] Add one sentence noting that this divergence-free property is why $G_{ij}$ (rather than $\operatorname{Ric}_{ij}$) appears in the Einstein field equations with a conserved source, linking to the relativity notes, while keeping the mathematical derivation as is.

### N0726

Note: [[22.08 Examples|22.08 Examples]]  
Priority: low · Graph: yes · Manim: no

Clear and correct with a good figure; the plane and sphere curvature components, $K=1/a^2$, $K=-f''/f$, and the practice answers verify, though much repeats 20.09 and 22.02.

- [Structure] The polar-plane and sphere computations duplicate [[20.09 Examples and limits]] and [[22.02 Coordinate expressions]] almost verbatim; keep one short version here and link, or replace one with a new case such as the torus $g=(R+r\cos u)^2dv^2+r^2du^2$ whose curvature changes sign.
- [Graph] A 3D plot of a torus coloured by $K=\cos u/(r(R+r\cos u))$ ($R=2$, $r=1$) would show positive, zero and negative curvature on one surface; alternatively plot $K(u)$ for $u\in[0,2\pi]$.

### N0727

Note: [[22.09 Local flatness and information loss|22.09 Local flatness and information loss]]  
Priority: low · Graph: no · Manim: no

Clear and correct; the normal-coordinate statement, the $S^2\times H^2$ example with $S=0$, the Ricci-flat algebraic tensor (all four diagonal Ricci entries vanish), and the practice answers verify.

- [Intuition] In "Scalar curvature can cancel" name the example ($S^2\times H^2$ with radii 1) and mention that its Einstein tensor is nonzero, tying it to practice 2 at the outset.
- [Example] Mention a standard genuinely Ricci-flat but non-flat metric (e.g. the Schwarzschild or Eguchi–Hanson metric) after the algebraic example, so readers know the pointwise counterexample is realised by actual metrics.

### N0728

Note: [[Connections and covariant derivatives - Overview|Connections and covariant derivatives - Overview]]  
Priority: low · Graph: no · Manim: no

A clear hub with valid links and well-matched learning outcomes; no change needed.

- [Structure] No change needed.

### N0729

Note: [[Curvature - Overview|Curvature - Overview]]  
Priority: low · Graph: no · Manim: no

A clear hub with valid links; no change needed.

- [Structure] No change needed.

### N0730

Note: [[Metric geometry - Overview|Metric geometry - Overview]]  
Priority: low · Graph: no · Manim: no

A clear hub with valid links; no change needed.

- [Structure] No change needed.

### N0731

Note: [[Surface geometry curvature and geodesics|Surface geometry curvature and geodesics]]  
Priority: medium · Graph: yes · Manim: yes

Mostly clear and the computations (tangent planes, $K=\pm4$ at the origin, the $(-v,-u,1)$ normal, the helix length $\sqrt{13}T$) are correct, but several letters are reused for different quantities.

- [Correctness] Symbol clash: $f$ is the graph function in $r(u,v)=(u,v,f(u,v))$ and also the second-form coefficient $f=n\cdot r_{uv}$, and $F$ is both the level-surface function $F(x,y,z)=0$ and the first-form coefficient $F=r_u\cdot r_v$; rename the second-form coefficients (e.g. $L,M,N$) and the implicit function (e.g. $\Phi$).
- [Links] The external PDF links (Durham "outline_term1_7.pdf" etc. and "liverpool.ac.uk/~pjgiblin/papers/diff-geom-book.pdf" attributed to Bruce and Giblin) look like guessed course-material URLs; verify they resolve and that the Liverpool file really is a Bruce–Giblin text, or replace with stable book citations (e.g. do Carmo, *Differential Geometry of Curves and Surfaces*).
- [Graph] Add a 3D plot of $z=x^2+y^2$ and $z=x^2-y^2$ on $[-1,1]^2$ with their tangent plane $z=0$ at the origin, illustrating $K=4$ versus $K=-4$.
- [Manim] Animate the cylinder of radius 2 unrolling into the $(U,v)$ plane while the helix $r(t)=(2\cos t,2\sin t,3t)$ straightens into the line $v=\tfrac32U$ (the moving version of the static Fig. C.ch03b.4).
- [Structure] Rename the figure caption "Fig. C.ch03b.4" to the vault's numbering scheme; it reads like a leftover catalogue identifier.

### N0732

Note: [[23.01 Alternating tensors|23.01 Alternating tensors]]  
Priority: low · Graph: no · Manim: no

Clear, correct introduction with a verified worked example ($\omega(u,v)=7$) and a figure for oriented area; only small gaps in motivation remain.

- [Intuition] In "Components and their count", add one sentence relating $\binom nk$ to choosing $k$ coordinate axes, e.g. the three coordinate planes $xy,xz,yz$ in $\mathbb R^3$ correspond to the three independent components of a two-form.
- [Example] After the worked example, show that $\omega(u,u)=0$ for the same $\omega$ and $u=(1,2,0)$ by a one-line determinant check, to make the alternation property concrete.
- [Simplify] The sentence "Their evaluation is the determinant of the matrix whose $(a,b)$ entry is $e^{i_a}(v_b)$" could be followed by the explicit $3\times3$ case for $e^1\wedge e^2\wedge e^3$ as signed volume, to bridge to the figure.

### N0733

Note: [[23.02 Wedge products|23.02 Wedge products]]  
Priority: low · Graph: no · Manim: no

Correct and well paced; the normalization, graded commutativity, and the $\gamma\wedge\gamma\ne0$ counterexample are all verified.

- [Intuition] In "Definition and normalization", add one sentence that $(a\wedge b)(u,v)$ is the signed area of the parallelogram spanned by $(a(u),b(u))$ and $(a(v),b(v))$, linking to Fig. 23.1 in [[23.01 Alternating tensors]].
- [Example] For the $\gamma\wedge\gamma$ display, write out the four expansion terms explicitly (two vanishing, two equal to $dx^1\wedge dx^2\wedge dx^3\wedge dx^4$), because the sign of $dx^3\wedge dx^4\wedge dx^1\wedge dx^2$ is exactly the graded-commutativity point being made.
- [Simplify] Name the other common normalization (alternation with $1/(p+q)!$, as in Kobayashi–Nomizu) next to "Some texts define an alternation operator with a different normalization", so readers can recognize factor differences in other texts.

### N0734

Note: [[23.03 Exterior derivatives|23.03 Exterior derivatives]]  
Priority: low · Graph: no · Manim: no

Correct and clear; the worked example and both practice answers check out, including the signed product rule.

- [Intuition] Add a short geometric reading of $d$ for a one-form in the plane: $d\alpha$ evaluated on a small parallelogram equals the circulation of $\alpha$ around its boundary to leading order, foreshadowing [[23.07 Stokes’ theorem]].
- [Example] In "Why the derivative squared is zero", add a tiny explicit case such as $f=x^2y$ showing the $dx\wedge dy$ and $dy\wedge dx$ terms cancelling, before the general index argument.
- [Simplify] The definition of $d\omega$ puts $dx^j$ in front; state once that the new factor must then be moved into increasing order with a sign, since the worked example relies on that reordering ($dy\wedge dx=-dx\wedge dy$).

### N0735

Note: [[23.04 Coordinate expressions|23.04 Coordinate expressions]]  
Priority: low · Graph: no · Manim: no

Correct and careful about the $1/k!$ convention; the evaluation ($7$) and $(d\omega)_{123}=2$ are verified.

- [Structure] In the last paragraph of the worked-example section the coordinate change is written $x=x(y)$, which reuses $y$ (already the second Cartesian coordinate in the example); use new coordinates such as $x=x(u)$ with $dx^i=\sum_a(\partial x^i/\partial u^a)du^a$.
- [Example] Add a two-line explicit check that the full-index sum $\tfrac12\sum_{i,j}\omega_{ij}dx^i\wedge dx^j$ for the example matrix reproduces $x\,dy\wedge dz+z\,dx\wedge dy$, so the $1/2$ is seen working rather than just asserted.
- [Simplify] State that the component formula for $(d\omega)_{i_0\cdots i_k}$ relies on the determinant wedge normalization of [[23.02 Wedge products]]; with the other normalization an extra factor $(k+1)$ appears.

### N0736

Note: [[23.05 Pullbacks|23.05 Pullbacks]]  
Priority: low · Graph: yes · Manim: yes

Clear and correct; the polar pullbacks ($r\,dr\wedge d\theta$, $r^2d\theta$) and the commuting check with $d$ are verified.

- [Graph] Add a 2D graph of the polar map: constant-$r$ circles and constant-$\theta$ rays for $1\le r\le2$, $0\le\theta\le\pi/2$, with one small coordinate cell highlighted, to show that its image area is approximately $r\,\Delta r\,\Delta\theta$.
- [Manim] Animate a square grid in the $(r,\theta)$ plane being mapped by $F(r,\theta)=(r\cos\theta,r\sin\theta)$ onto the annular sector, with tangent vectors pushed forward by $dF$, to show why forms are pulled back in the opposite direction.
- [Intuition] In Practice 2, add that $F(u,v)=(u+v,u-v)$ is $\sqrt2$ times a reflection, so it reverses orientation while doubling area, which explains the factor $-2$.

### N0737

Note: [[23.06 Integration|23.06 Integration]]  
Priority: low · Graph: yes · Manim: no

Correct and well structured; the triangle integral $1/3$, the surface integral $1$, and the annulus $3\pi$ are verified.

- [Graph] Add a 3D graph of the surface $z=u+v$ over $[0,1]^2$ with the tangent vectors $\partial_u\phi=(1,0,1)$ and $\partial_v\phi=(0,1,1)$ drawn at one point, to show the orientation choice used in "A surface in three dimensions".
- [Intuition] In "A surface in three dimensions", contrast explicitly with the scalar surface integral: $\int_S z\,dA=\sqrt3\int\!\!\int(u+v)\,du\,dv=\sqrt3$, so the reader sees what the form integral is not.
- [Simplify] In "What is integrated", give the one-dimensional case ($\int_c\alpha$ along a curve) before the general $m$-dimensional definition, since it is the most familiar instance.

### N0738

Note: [[23.07 Stokes’ theorem|23.07 Stokes’ theorem]]  
Priority: low · Graph: no · Manim: yes

Correct and well motivated; the rectangle proof, the $x^2dy$ example (both sides $4$) and the annulus answers check out.

- [Manim] Animate a rectangle subdivided into small cells, each with its counterclockwise boundary circulation, and show interior edges cancelling pairwise so only the outer boundary remains; this illustrates the partition argument in "The local calculation behind the theorem".
- [Example] Add a short three-dimensional instance (for example $\omega=z\,dx\wedge dy$ on the unit ball, giving $\int d\omega=4\pi/3$) so that the divergence-theorem case is computed in forms, not only described.
- [Intuition] In "Statement and orientation", add a one-line note for 3D: outward normal first, then the boundary basis, reproduces the right-hand rule used for surface orientation in vector calculus.

### N0739

Note: [[23.08 Closed and exact forms|23.08 Closed and exact forms]]  
Priority: low · Graph: yes · Manim: no

Correct and clear; the angle-form derivatives, the $2\pi$ circulation, and the one-form Poincaré proof are verified.

- [Graph] Add a 2D vector-field plot of the dual field $(-y,x)/(x^2+y^2)$ on $[-2,2]^2$ with the unit circle drawn, to show a field that is curl-free away from the origin yet circulates around it.
- [Intuition] After the $2\pi$ result, add that on the slit plane (negative $x$ axis removed) $\alpha=d\theta$ with $\theta\in(-\pi,\pi)$, which makes "a local potential exists, a global one does not" concrete.
- [Example] Add a closed path that does not encircle the origin (e.g. the unit circle centered at $(3,0)$) and note that its integral is $0$, in contrast with the unit circle about the origin.

### N0740

Note: [[23.09 Classical operations|23.09 Classical operations]]  
Priority: low · Graph: no · Manim: no

Correct and compact dictionary between forms and vector calculus; the curl $2\partial_z$ and divergence $2z$ example are verified.

- [Structure] Add a small table summarizing the chain 0-forms $\to$ 1-forms $\to$ 2-forms $\to$ 3-forms under $d$ with the corresponding grad, curl, div and the needed $\flat$, $*$ maps; the text states this sequence but a table makes it memorable.
- [Example] Include the Laplacian $\Delta f=*d*df$ as a natural follow-up, since it reuses both identifications.
- [Simplify] Explain $*(dx\wedge dz)=-dy$ in one clause ($dx\wedge dz=-dz\wedge dx$ and $*(dz\wedge dx)=dy$), so the cyclic rule is derived, not only asserted.

### N0741

Note: [[24.01 Frames and coframes|24.01 Frames and coframes]]  
Priority: low · Graph: no · Manim: no

Correct and clear; the polar example ($V=3e_1+2re_2$, $\alpha(V)=16$) and both practice answers check out.

- [Structure] The answer section is "## Worked answers" while the 23.xx notes use "### Worked answers" under Practice; align the heading level across the folder.
- [Intuition] In "Conversion from coordinates", add a sentence that $E$ has the frame vectors as columns while $F=E^{-1}$ has the coframe forms as rows, so $FE=I$ reads as rows times columns.

### N0742

Note: [[24.02 Orthonormal frames|24.02 Orthonormal frames]]  
Priority: low · Graph: no · Manim: no

Correct and clear; the cross-term metric example ($e_1=\tfrac12\partial_x$, $e_2=-\tfrac12\partial_x+\partial_y$, $g(V,V)=20$) is verified.

- [Example] For the indefinite Gram–Schmidt paragraph, add a two-line example (e.g. $g=-dt^2+dx^2$, $u_1=\partial_t$, $u_2=\partial_t+2\partial_x$) showing the $\varepsilon_a$ projection and the $\sqrt{|g(w,w)|}$ normalization, since the displayed algorithm covers only the positive definite case.
- [Structure] Heading "## Worked answers" should match the "### Worked answers" level used in the 23.xx notes.

### N0743

Note: [[24.03 Non-coordinate frames|24.03 Non-coordinate frames]]  
Priority: low · Graph: yes · Manim: no

Correct and clear; the bracket $[e_1,e_2]=-r^{-1}e_2$, $d\theta^2=r^{-1}\theta^1\wedge\theta^2$, and both practice answers are verified.

- [Graph] Add a 2D graph of a non-closing flow quadrilateral for $e_1=\partial_r$, $e_2=r^{-1}\partial_\phi$: from a point at $r=1$, flow $\varepsilon$ along $e_1$ then $e_2$, and in the other order, showing endpoints that differ by approximately $\varepsilon^2[e_1,e_2]$ (use e.g. $\varepsilon=0.4$ so the gap is visible).
- [Intuition] In "Coordinate fields commute", add a sentence that the bracket measures this gap, which gives a geometric meaning to $C^a{}_{bc}$ before the algebra.

### N0744

Note: [[24.04 Connection one-forms|24.04 Connection one-forms]]  
Priority: low · Graph: no · Manim: no

Correct and careful about index conventions; the rotating polar frame example and the indefinite-signature remark are verified.

- [Intuition] In the worked example, add that $\omega^2{}_1=d\phi$ is the rate at which the frame turns as one moves, so its value $1/r$ on $e_2$ is the turning angle per unit arc length (the curvature of the circle).
- [Example] Add a short check of the dual rule $\nabla_X\theta^a=-\omega^a{}_b(X)\theta^b$ on the polar coframe, e.g. $\nabla_{e_2}\theta^1=-r^{-1}\theta^2$, since that formula is stated but never used.

### N0745

Note: [[24.05 Cartan’s first structure equation|24.05 Cartan’s first structure equation]]  
Priority: low · Graph: no · Manim: no

Correct and well organized; the solution $\omega^1{}_2=-f'\,d\phi$ and the practice answers are verified and consistent with 24.04.

- [Simplify] In the derivation of $T^a$, show the intermediate expansion $\nabla_XY=[X(y^a)+\omega^a{}_b(X)y^b]e_a$ explicitly with a link to [[24.04 Connection one-forms]], since "Expanding the covariant derivatives yields" hides it.
- [Example] Add the $f=\sinh r$ case after the worked example ($\omega^1{}_2=-\cosh r\,d\phi$), so all three geometries from 24.02 appear before curvature is computed in 24.06.

### N0746

Note: [[24.06 Cartan’s second structure equation|24.06 Cartan’s second structure equation]]  
Priority: low · Graph: no · Manim: no

Correct and clear; $K=-f''/f$, the three model cases, the spherical-coordinate cancellation, and the practice answers are verified.

- [Simplify] In "Derive the equation", show the cancellation of $\nabla_{[X,Y]}e_b$ against the $-\omega^a{}_b([X,Y])$ term of $d\omega^a{}_b(X,Y)$ explicitly, since this is the step readers find hardest.
- [Simplify] Replace "There are no off-diagonal product terms in dimension two for this matrix" by the explicit statement $(\omega\wedge\omega)^1{}_2=\omega^1{}_1\wedge\omega^1{}_2+\omega^1{}_2\wedge\omega^2{}_2=0$ because the diagonal entries vanish.
- [Example] In "Why the wedge square matters", also note (or set as an exercise) that $\Omega^1{}_2=\Omega^2{}_3=0$, so the flatness check is complete.

### N0747

Note: [[24.07 Reading components|24.07 Reading components]]  
Priority: low · Graph: no · Manim: no

Correct and precise; the factor-of-one-half discussion and the sphere coordinate component $R^r{}_{\phi r\phi}=\sin^2r$ are verified.

- [Example] In "Lowering indices and checking symmetry", add a two-dimensional Lorentzian instance ($\eta=\operatorname{diag}(-1,1)$, $R_{1212}=-R^1{}_{212}$) showing the sign change the warning describes.
- [Simplify] Consider a small table of the four nonzero surface components $R^a{}_{bcd}$ with their sources $\Omega^a{}_b(e_c,e_d)$, which makes the index reading quicker to scan.

### N0748

Note: [[24.08 Contractions|24.08 Contractions]]  
Priority: low · Graph: no · Manim: no

Correct and carefully cross-checked; frame and coordinate Ricci ($-f''/f$, $-ff''$), $S=2K$, and the constant-curvature traces are verified.

- [Simplify] The $\operatorname{Ric}_{\phi\phi}$ line compresses three Christoffel products into "$-(-ff')\frac{f'}{f}$"; display $\operatorname{Ric}_{\mu\nu}=\partial_\rho\Gamma^\rho{}_{\mu\nu}-\partial_\nu\Gamma^\rho{}_{\mu\rho}+\Gamma^\rho{}_{\rho\lambda}\Gamma^\lambda{}_{\mu\nu}-\Gamma^\rho{}_{\nu\lambda}\Gamma^\lambda{}_{\mu\rho}$ and its four terms so the reader can reproduce $-ff''$.
- [Intuition] Add one sentence on what Ricci measures (the volume deficit of small geodesic balls relative to flat space), so the contraction is not only index bookkeeping.

### N0749

Note: [[24.09 Frame changes|24.09 Frame changes]]  
Priority: low · Graph: no · Manim: yes

Correct and clear; $\omega'=A^{-1}\omega A+A^{-1}dA$, the rotation example, and the practice answers are verified.

- [Manim] Animate the Cartesian frame being rotated pointwise into the polar frame $A(\phi)$ along a circle, showing that the rotating frame produces a nonzero $\omega'$ while the plane stays flat ($\Omega'=0$).
- [Intuition] Mention the gauge analogy: $\omega'=\omega+dh$ in Practice 1 is the same law as an electromagnetic gauge transformation $A\to A+d\chi$, with $d\omega$ playing the role of the gauge-invariant field strength.

### N0750

Note: [[Differential forms - Overview|Differential forms - Overview]]  
Priority: low · Graph: no · Manim: no

A clean hub whose links and topic list match the 23.xx notes.

- [Structure] No change needed.

### N0751

Note: [[Exterior Product|Exterior Product]]  
Priority: high · Graph: yes · Manim: no

A short legacy stub with incorrect index formulas, no TLDR, and an unquoted title, inconsistent with the careful 23.02 note on the same subject.

- [Correctness] "$(a\wedge b)_i = ε_{ijk}\ a_j e_j\ b_k e_k$" mixes components with basis vectors and gives a vector, not a bivector; the bivector components are $(a\wedge b)_{jk}=a_jb_k-a_kb_j$, and in 3D its Hodge dual is the cross product $(a\times b)_i=\varepsilon_{ijk}a_jb_k$.
- [Correctness] "$c_i = ε_{ijkl} \, a_j \, b_k \, e_l$" uses a four-index Levi-Civita symbol in three dimensions with a free basis vector; delete it or replace it by $a\wedge b=\tfrac12(a_jb_k-a_kb_j)\,e_j\wedge e_k$.
- [Correctness] "2D exterior product: Special case of the cross product" writes $a\times b=a_xb_y-a_yb_x$; in 2D the wedge is $a\wedge b=(a_xb_y-a_yb_x)\,e_x\wedge e_y$ (a multiple of the unit bivector), and the wedge exists in every dimension while only in 3D is it dual to the cross product, so "higher order version of the cross product" inverts the relation.
- [Structure] Add a quoted frontmatter title, a TLDR, and write the example with explicit basis bivectors $e_y\wedge e_z$ etc. instead of "$yz$"; link [[23.02 Wedge products]] and consider merging, since the alias "wedge product" duplicates that note.
- [Graph] Add a 2D graph of two vectors $a,b$ with the shaded oriented parallelogram whose signed area is $a_xb_y-a_yb_x$, with an arrow showing the circulation sense.

### N0752

Note: [[Frames and Cartan equations - Overview|Frames and Cartan equations - Overview]]  
Priority: low · Graph: no · Manim: no

A clean hub whose links and topic list match the 24.xx notes.

- [Structure] No change needed.

### N0753

Note: [[Algebra of Rotation|Algebra of Rotation]]  
Priority: medium · Graph: no · Manim: no

A bare link list with a misleading heading and one broken heading link.

- [Links] "[[Rotation#Axis-Angle Vector|Axis-Angle Vector]]" points to a heading that does not exist; Rotation.md's heading is "Rotation using Axis-Angle Vector", so link [[Rotation using Axis-Angle Vector]] directly.
- [Correctness] The heading "Algebraic Spaces of Rotation $SO(n)$" lists complex numbers, quaternions and spinors, which represent $U(1)\cong SO(2)$ and $SU(2)=\mathrm{Spin}(3)$ (a double cover), not $SO(n)$ itself; retitle e.g. "Representations of rotations" and state which group each item realizes.
- [Structure] Add frontmatter with a quoted title, a TLDR, and one line per item saying what it parametrizes (3 parameters for $SO(3)$, unit quaternion on $S^3$, etc.).

### N0754

Note: [[Homotopology classes in the Axis-Angle Space|Homotopology classes in the Axis-Angle Space]]  
Priority: high · Graph: yes · Manim: yes

Captures the right idea (two loop classes in $SO(3)$) but the description of the space is vague, the winding-number language is inappropriate, and the class labelling is reversed from convention.

- [Correctness] "Those loops may have a winding number greater than 0" suggests an integer invariant; the fundamental group of $SO(3)$ is $\mathbb Z_2$, so there are exactly two classes and no integer winding number. Say this explicitly.
- [Correctness] The space is described only as "a loop around a spherical space ... represented as a circle"; state precisely that the axis-angle space is the solid ball of radius $\pi$ with antipodal boundary points identified ($\mathbb{RP}^3$), and that a "teleport" is passing through the boundary to the antipodal point.
- [Structure] Label the trivial (even, contractible) class first and the odd class second, and rename the note "Homotopy classes ..." since "Homotopology" is not a standard term.
- [Links] "[[Vector|Vectors]]" has no target note or alias in the vault; link an existing vector note (e.g. in "03 Linear Algebra/01 Vectors and Bases").
- [Graph] Add a 2D graph of a disk of radius $\pi$ (a slice of the ball) showing a loop with one antipodal jump and a loop with two jumps, and the two-jump loop being deformed so its jump points meet and cancel.
- [Manim] Animate the two antipodal jump points of a class-two loop sliding along the boundary until they coincide and the loop contracts to a point, while a class-one loop cannot do so; this is the core argument and is inherently a continuous deformation.

### N0755

Note: [[Homotopology|Homotopology]]  
Priority: high · Graph: yes · Manim: no

Informal definition note that contains a wrong statement about homotopy and generalizes winding numbers beyond where they apply.

- [Correctness] "Two curves are called homotopic when they have the same Topology" is wrong: all curves have the topology of an interval or circle; homotopy is a continuous deformation inside a given space (with fixed endpoints, or freely for loops). Replace with the definition $H:[0,1]\times[0,1]\to X$, $H(\cdot,0)=\gamma_0$, $H(\cdot,1)=\gamma_1$.
- [Correctness] "A homotopic class is defined by the winding number" is only true for spaces with fundamental group $\mathbb Z$ (circle, annulus, cylinder); for $SO(3)$, used in the companion note, the classes form $\mathbb Z_2$. State the general notion (fundamental group $\pi_1(X)$) and give winding number as the $\mathbb Z$ example.
- [Structure] Fix "cluing" (gluing), rename the note to "Homotopy", and add a quoted title and TLDR.
- [Simplify] Replace "can shrink down to a point whenever they want" and the "CD-shape" explanation with: a cylinder surface deformation-retracts to a circle, so a loop around it cannot be contracted.
- [Graph] Add a 2D graph of an annulus $1\le r\le2$ with three loops of winding numbers 0, 1, 2 around the hole, matching the table.

### N0756

Note: [[Rotation using Axis-Angle Vector|Rotation using Axis-Angle Vector]]  
Priority: high · Graph: yes · Manim: yes

Short informal note with a misleading claim about representing 3D rotations, inconsistent angle symbols, and an imprecise statement of Euler's theorem.

- [Correctness] "can be represented by some (one or more) axis" contradicts Euler's rotation theorem cited right below: every rotation of $\mathbb R^3$ is a rotation about exactly one axis (unique unless the rotation is the identity).
- [Correctness] The callout "Rotations in 3 dimensions can't be properly represented by an 3d vector ... requires 4 dimensions" is misleading: every rotation is represented by the 3-parameter axis-angle vector ($SO(3)$ is 3-dimensional); what fails is that axis-angle vectors do not compose by addition and do not record the path class, which the unit quaternion on $S^3\subset\mathbb R^4$ captures.
- [Correctness] Symbol clash: the angle is $Θ$ in the first section and $θ$ in "Angular velocity"; also state that $\dot{\hat x}_b=ω_s\times\hat x_b$ requires all vectors expressed in frame $s$.
- [Example] Add the explicit relation to the rotation matrix via [[Rotation using Matrices]] (Rodrigues) and a numeric case, e.g. $\vec Θ=(\pi/2)\hat z$ maps $\hat x\to\hat y$.
- [Graph] Add a 3D graph of a unit axis $\hat e$, a vector $v$, and its rotated image $Rv$ with the cone traced by the rotation.
- [Manim] Animate $90°$ about $\hat x$ then $90°$ about $\hat y$ versus the reverse order applied to a box, to show non-commutativity and why axis-angle vectors cannot simply be added.

### N0757

Note: [[Rotation using Complex Numbers|Rotation using Complex Numbers]]  
Priority: medium · Graph: yes · Manim: no

Correct but very terse; the isomorphism $SO(2)\cong U(1)$ is stated without showing why multiplication by $e^{iΘ}$ rotates a point.

- [Simplify] Show the computation $(x+iy)e^{iΘ}=(x\cosΘ-y\sinΘ)+i(x\sinΘ+y\cosΘ)$, which reproduces $R_Θ(x,y)^T$, so the correspondence is derived rather than asserted.
- [Structure] Name the group (unit complex numbers $U(1)=\{z:|z|=1\}$), write "isomorphic" instead of "isomorph", and add a quoted title and TLDR.
- [Graph] Add a 2D graph of the unit circle with points $e^{iθ}$, $e^{iϑ}$ and their product $e^{i(θ+ϑ)}$, showing that angles add.

### N0758

Note: [[Rotation using Matrices|Rotation using Matrices]]  
Priority: high · Graph: no · Manim: yes

Long, loosely organized note with several group-theory and computational errors that would mislead readers.

- [Correctness] "Because $SO(3)$ is fully contained in $SU(2)$" is wrong: $SO(3)$ is not a subgroup of $SU(2)$ but the quotient $SU(2)/\{\pm I\}$ via a 2-to-1 homomorphism; the line "$v'\leftrightarrow\pm s'$" should be replaced by the map $s\mapsto s^\dagger\vec\sigma s$ from spinors to vectors.
- [Correctness] Gimbal lock is a property of Euler-angle parametrizations, not of $SO(3)$ matrices; rotation matrices and unit quaternions are both free of it. Rewrite the warning accordingly.
- [Correctness] "Rotation matrices are not commutative" contradicts $SO(2)$, which the note treats at length and which is abelian ($R_θR_ϑ=R_{θ+ϑ}$); say $SO(n)$ is non-commutative for $n\ge3$.
- [Correctness] "In the special case of a matrix with determinant of $-1$, it is considered to be in the group $S(n)$" is wrong: there is no such group; orthogonal matrices with $\det=-1$ form $O(n)\setminus SO(n)$, which is not a group (not closed under products).
- [Correctness] Product rule: if $R_{AB}$ maps column components from frame A to frame B, then $R_{AC}=R_{BC}R_{AB}$, not $R_{AB}R_{BC}$; either reverse the order or define $R_{AB}$ as the orientation of B relative to A (Modern Robotics convention). Also the set definitions "$O(n)={R∈ℝ^{n×n}∣R^TR=I}$" lose their braces when rendered; use escaped braces.
- [Manim] Animate a 3D box rotated by $R=I+\sinθ\,K+(1-\cosθ)K^2$ as $θ$ goes from $0$ to $4\pi$ about a tilted axis, with the corresponding $SU(2)$ matrix shown reaching $-I$ at $2\pi$ and $I$ only at $4\pi$.

### N0759

Note: [[Rotation using Quaternions|Rotation using Quaternions]]  
Priority: high · Graph: no · Manim: yes

A stub that gives the $SU(2)$–quaternion correspondence but never shows how a quaternion rotates a vector.

- [Example] Add the rotation formula $v'=q\,v\,q^{*}$ with $q=\cos(θ/2)+\sin(θ/2)(n_xi+n_yj+n_zk)$ and a worked case ($90°$ about $z$ mapping $i\to j$), which also shows the half-angle behind the double cover.
- [Links] "[[Quaternion]]" has no target note or alias; the vault note is [[Quaternions]].
- [Simplify] State that the displayed correspondence $q\mapsto U$ is a group isomorphism from unit quaternions to $SU(2)$, and that $q$ and $-q$ give the same rotation.
- [Manim] Animate an object rotating about a fixed axis while $q(θ)$ travels a great circle on a stereographically projected $S^3$, reaching $-1$ at $θ=2\pi$ and $+1$ at $4\pi$.
- [Structure] Add frontmatter with a quoted title and a TLDR.

### N0760

Note: [[Jones Vectors|Jones Vectors]]  
Priority: high · Graph: no · Manim: yes

Valuable step-by-step build-up of Jones vectors, but it contains several physics and matrix errors, a wrong explanation of handedness conventions, and inconsistent notation.

- [Correctness] "we can assume it to be complex, with a complex value of zero" is wrong: the added imaginary part is $iA\sin(ωt-kz+φ)$, not zero; the physical field is $\mathrm{Re}\,E$.
- [Correctness] The "Conventions" section attributes the sign of $L=(1,\pm i)$ to the metric signature $(+,-,-,-)$ vs $(-,+,+,+)$; it actually depends on the phase convention $e^{i(ωt-kz)}$ vs $e^{i(kz-ωt)}$ and on whether handedness is defined from the source or the receiver view.
- [Correctness] Under "Jones Matrices", waveplates do not "filter circular polarization" (they are lossless retarders), and $\frac1{\sqrt2}\begin{pmatrix}1&i\\i&i\end{pmatrix}$ is not unitary; the 45° quarter-wave plate is $\frac1{\sqrt2}\begin{pmatrix}1&i\\i&1\end{pmatrix}$ up to a global phase.
- [Correctness] In "Phase Shift", adding $φ=\pi/2$ gives $\cos(θ+\pi/2)=-\sinθ$, not $\sinθ$; the quoted identity $\sinθ=\cos(θ-\pi/2)$ corresponds to $φ=-\pi/2$.
- [Correctness] Symbol inconsistency: amplitudes appear as $A_x$, $Aʸ$ (Unicode superscript) and $A^x,A^y$, components as bold $\mathbf E^x$ and plain $E^x$; also fix the typos "$eit$", "$\mathbf{_x}$", "_x-direction", "non-traverse", and replace "density in time/space" by frequency $ω/2\pi$ and inverse wavelength $k/2\pi$.
- [Manim] Animate the real field vector $(\cos t,\cos(t+φ_y))$ tracing a line, ellipse, and circle as $φ_y$ goes from $0$ to $\pi/2$ to $\pi$, together with the propagating helix along $z$; the "check" callout already computes these snapshots.

### N0761

Note: [[Pointcaré Sphere|Pointcaré Sphere]]  
Priority: high · Graph: yes · Manim: yes

Good idea to connect Jones matrices to rotations of a sphere, but the name is misspelled, one normalization is wrong, and the sphere is never defined (no Stokes parameters).

- [Correctness] "$Q''=\frac12\begin{pmatrix}1&1\\-1&1\end{pmatrix}$" is not unitary; the factor must be $\frac1{\sqrt2}$, as the note's own later callout uses.
- [Correctness] The name is "Poincaré", not "Pointcaré", in the filename, text and reference label (also "Wikipdia").
- [Simplify] Define the sphere via the Stokes parameters $S_1=|J_x|^2-|J_y|^2$, $S_2=2\,\mathrm{Re}(J_x^*J_y)$, $S_3=2\,\mathrm{Im}(J_x^*J_y)$, so that H/V, D/A, L/R are the three axes and the claimed rotations can be checked.
- [Intuition] Explain the angle doubling (a physical rotation of linear polarization by $θ$ moves the point by $2θ$ on the sphere), and say in the final callout that $U(2)$ acts on the sphere through $SO(3)$ after dropping the global phase, rather than invoking $O(3)$ with reflections.
- [Graph] Supplement the static SVG with a 3D graph of the unit sphere showing the six labeled points and the three great circles traced by $Q$, $Q'$, $Q''$.
- [Manim] Animate a Jones vector under a waveplate with continuously increasing retardance while its Stokes point moves along a great circle.

### N0762

Note: [[Waveplates|Waveplates]]  
Priority: high · Graph: yes · Manim: yes

Concrete matrix calculations that mostly check out, but with a wrong angle conversion, a wrong description of the second quarter-wave pass, and formatting typos.

- [Correctness] In "Rotated Quarter Waveplate", "$\cos 45° = \cos\frac{π}{2}$" is wrong; $45°=\pi/4$ (the final numeric matrix is correct).
- [Correctness] After $QL=A$, "we get the original polarization direction, but with a half cycle phase change" is wrong: $A$ is perpendicular to the original $D$; two quarter-wave passes act as a half-wave plate that maps $D$ to $A$.
- [Correctness] "$e^{i \frac{π}{4}}{4}$" contains a stray "{4}"; the verified result is $G^{-1}QG=e^{i\pi/4}\frac1{\sqrt2}\begin{pmatrix}1&i\\i&1\end{pmatrix}$.
- [Simplify] State the rotation convention: with $G=R(+45°)$, $G^{-1}QG=R(-45°)\,Q\,R(45°)$ describes a plate whose fast axis is at $-45°$ in the usual active convention; say which sign is meant so the arbitrary-$θ$ formula is unambiguous.
- [Graph] Add a 2D graph of the real field ellipse $(\cos t,\cos(t+φ))$ for $φ=0,\pi/4,\pi/2,3\pi/4,\pi$ to illustrate "Elliptical Polarization".
- [Manim] Animate the polarization ellipse as light passes through a birefringent plate with retardance growing from $0$ to $2\pi$, showing $D\to L\to A\to R\to D$.

### N0763

Note: [[Dirac Equation|Dirac Equation]]  
Priority: high · Graph: no · Manim: no

A fragmentary note with a wrong momentum-operator sign, a wrong electron/positron split of the bispinor, and a confused remark about Klein–Gordon.

- [Correctness] "$\hat{p}^μ = -i\hbar \partial_\mu$" has the wrong sign and mismatched index placement for the stated equation; with $\psi\propto e^{-ip\cdot x/\hbar}$ and signature $(+,-,-,-)$, $\hat p_μ=i\hbar\partial_μ$, which turns $(\gamma^μ\hat p_μ-mc)\psi=0$ into $(i\hbar\gamma^μ\partial_μ-mc)\psi=0$.
- [Correctness] $(\psi_1,\psi_2)$ and $(\psi_3,\psi_4)$ are not "electron spinor" and "positron spin" in general; in the Dirac representation they are the large and small components, which separate into particle and antiparticle parts only in the nonrelativistic limit (in the Weyl representation they are the left- and right-handed parts).
- [Correctness] "Klein-Gordon let's derive the Lorentz Invariance without Spinors, so electrons are not neccessarily Fermions" is confused: Klein–Gordon is the spin-0 equation; Dirac's first-order equation needs $\{\gamma^μ,\gamma^ν\}=2\eta^{μν}$ and four-component spinors, which is why it describes spin-1/2 particles.
- [Simplify] Add the derivation sketch $p^μp_μ-m^2c^2=(\gamma^μp_μ+mc)(\gamma^νp_ν-mc)$, which forces the Clifford relation, and complete or remove the dangling line "First order in Space-Time".
- [Structure] Add frontmatter with a quoted title, a TLDR, and a symbol table ($\gamma^μ$, $\psi$, $m$, $c$, $\hbar$).

### N0764

Note: [[Pauli Exclusion Principle|Pauli Exclusion Principle]]  
Priority: medium · Graph: no · Manim: no

Very short and mostly right, but the statement omits the essential word "identical".

- [Correctness] "Two or more fermions cannot occupy the same quantum state" must say identical fermions; different species (e.g. an electron and a muon) are not constrained.
- [Example] Add the antisymmetric two-particle state $\psi(x_1,x_2)=\tfrac1{\sqrt2}[\phi_a(x_1)\phi_b(x_2)-\phi_b(x_1)\phi_a(x_2)]$ and show it vanishes for $a=b$, which is the exclusion principle in one line.

### N0765

Note: [[Spin-Statistics-Theorem|Spin-Statistics-Theorem]]  
Priority: high · Graph: no · Manim: no

A one-sentence stub that states Fermi–Dirac antisymmetry rather than the spin-statistics theorem itself.

- [Correctness] The sentence describes the exchange property of fermions, not the theorem; the theorem states that in relativistic quantum field theory integer-spin particles obey Bose statistics (symmetric) and half-integer-spin particles obey Fermi statistics (antisymmetric), and the sign applies to exchange of identical particles only.
- [Structure] Add frontmatter, a TLDR, the exchange rule $\psi(\ldots,x_j,\ldots,x_i,\ldots)=\pm\psi(\ldots,x_i,\ldots,x_j,\ldots)$, and a link to the $2\pi$ sign of spinors in [[Spinors]].

### N0766

Note: [[Spinors in Physics|Spinors in Physics]]  
Priority: high · Graph: no · Manim: no

A Standard Model classification list with an incomplete fermion list and an imprecise definition of half-integer spin.

- [Correctness] "Quarks, Electron, Muon, Tau Neutrino (Tauons)" omits the tau lepton as such and the electron and muon neutrinos; list the six quarks and the six leptons $e,\mu,\tau,\nu_e,\nu_\mu,\nu_\tau$.
- [Correctness] "spin, is $\frac{n}{2}\hbar$, where $n$ is an integer" includes integer spins; $n$ must be odd. Also the spin quantum number $s$ gives magnitude $\sqrt{s(s+1)}\hbar$ while $s\hbar$ is the maximal projection; say which is meant in both sections.
- [Simplify] Replace the nested "Bosons (Forces)/Fermions (Matter)" list by a small table (particle, spin, representation: scalar, vector, Weyl/Dirac spinor), noting that the Higgs is not a force carrier in the same sense as gauge bosons.
- [Structure] Add a quoted title and TLDR; "Representation by an bispinor field" applies to Dirac fermions, so mention Weyl/Majorana descriptions for neutrinos.

### N0767

Note: [[Stern-Gerlach-Experiment|Stern-Gerlach-Experiment]]  
Priority: high · Graph: yes · Manim: yes

A few bullet points that never describe the experiment and misname the orthogonality statement as the Born rule.

- [Correctness] "Born Rule: If two states are mutually exclusive, they must be orthogonal" is not the Born rule; the Born rule is $P=|\braket{\beta|\alpha}|^2$, and orthogonality of perfectly distinguishable outcomes follows from it.
- [Simplify] Describe the experiment: silver atoms in an inhomogeneous field feel $F_z=\mu_z\,\partial B_z/\partial z$ and split into two beams, not a continuum; then explain why $180°$ in space becomes $90°$ in state space via the half angle, e.g. $\ket{\uparrow_x}=(\ket{\uparrow}+\ket{\downarrow})/\sqrt2$.
- [Example] Add the sequential Stern–Gerlach example (z, then x, then z) with probabilities $1/2$, showing how the spinor description predicts the reappearance of $\ket{\downarrow}$.
- [Graph] Add a 2D graph mapping physical spin directions at angle $θ$ to state vectors $(\cos(θ/2),\sin(θ/2))$, showing $\uparrow$ and $\downarrow$ at $90°$ in state space.
- [Manim] Animate a beam splitting into two spots in an inhomogeneous magnet, then a second magnet rotated by $90°$ splitting each selected beam again.

### N0768

Note: [[Vector Representation of Spinors in Physics|Vector Representation of Spinors in Physics]]  
Priority: high · Graph: no · Manim: no

A three-line note whose only equation and table both contain errors.

- [Correctness] "$\bra{\phi} = \alpha \ket{\uparrow} + \beta \ket{\uparrow}$" should be the ket $\ket{\phi}=\alpha\ket{\uparrow}+\beta\ket{\downarrow}$ (bra on the left side and a repeated $\ket{\uparrow}$).
- [Correctness] The table calls $\alpha,\beta$ probabilities; they are complex probability amplitudes, the probabilities are $|\alpha|^2$ and $|\beta|^2$, with $|\alpha|^2+|\beta|^2=1$.
- [Example] Add a worked case, e.g. $\ket{\uparrow_x}=\tfrac1{\sqrt2}(1,1)^T$ giving $50\%$ up and $50\%$ down along $z$, and the bra $\bra\phi=(\alpha^*,\beta^*)$ for computing $\braket{\phi|\phi}$.

### N0769

Note: [[Rotation|Rotation]]  
Priority: low · Graph: no · Manim: no

A hub of embeds that works but omits the quaternion note and inherits the "Homotopology" misnomer.

- [Structure] Add an embed or link for [[Rotation using Quaternions]], which is missing here, and rename the "Homotopology classes" heading to "Homotopy classes" if that note is renamed.

### N0770

Note: [[Spinors|Spinors]]  
Priority: medium · Graph: no · Manim: yes

A minimal hub with one correct key fact (sign flip under $2\pi$) and an incomplete learning list.

- [Links] The "Learning" list omits existing notes in this folder: [[Rotation]], [[Dirac Equation]], [[Pauli Exclusion Principle]], [[Spin-Statistics-Theorem]], [[Jones Vectors]], [[Waveplates]]; link them and mark the unlinked items as planned.
- [Intuition] In "Transformation", add the formula behind the sign flip: $U(θ)=\exp(-iθ\,\hat n\cdot\vec\sigma/2)$ gives $U(2\pi)=-I$ and $U(4\pi)=I$.
- [Manim] Animate the Dirac belt (plate) trick: after a $2\pi$ rotation the attached belt stays twisted, after $4\pi$ the twist can be undone, illustrating the two loop classes of $SO(3)$.

### N0771

Note: [[25.04 Matrix groups|25.04 Matrix groups]]  
Priority: low · Graph: yes · Manim: yes

Clear and correct (products $RS$, $SR$ and $\det U=e^{i5\pi/6}$ check out); it lacks only a geometric picture and dimension counts.

- [Graph] In "Worked example: rotation and reflection", add a 2D plot of the unit square and its images under $R$, $S$, $RS$ and $SR$ (axes $-1.5\le x,y\le1.5$), so orientation reversal by $S$ and $RS\ne SR$ are visible.
- [Manim] Animate a coordinate grid with a marked asymmetric letter under $R(\theta)$ for $\theta:0\to\pi/2$ and then under $S$, showing that rotation keeps handedness while reflection flips it, and that the order of $R$ and $S$ changes the final picture.
- [Example] After "The case $SO(3)$ is different", give one explicit pair, e.g. quarter-turns $R_x(\pi/2)$ and $R_z(\pi/2)$ applied to $e_1$ in both orders, instead of only asserting noncommutativity.
- [Intuition] Add a one-line parameter count ($\dim GL_n=n^2$, $\dim O(n)=n(n-1)/2$, $\dim U(n)=n^2$, $\dim SU(n)=n^2-1$) with a forward link to [[25.06 Generators and Lie algebras]], where the counts are justified.

### N0772

Note: [[25.05 Lie groups|25.05 Lie groups]]  
Priority: low · Graph: yes · Manim: no

Correct and careful (the $3\pi/4+3\pi/4\to-\pi/2$ example and the closed-subgroup remarks are right), but a few sentences are defensive rather than explanatory.

- [Simplify] In "Worked example: the general linear group", drop or rephrase "The dimension is $n^2$, not the number of free eigenvalues..."; it answers a question the reader has not asked. Say instead that $GL_n(\mathbb R)$ is open in $\mathbb R^{n^2}$, so all $n^2$ entries are local coordinates.
- [Intuition] State that $GL_n(\mathbb R)$ has exactly two components ($\det>0$ and $\det<0$) while $GL_n(\mathbb C)$ is connected, which shows why the real sign argument is special.
- [Graph] In "Local angles are not a global coordinate", plot the unit circle with the chart arc $-\pi/2<\theta<\pi/2$ highlighted and the jump point $-1$ marked, next to the principal-angle function on $[-\pi,\pi)$ vs. arc length showing the discontinuity.
- [Example] In "Smooth matrix subgroups", name the theorem (Cartan's closed-subgroup theorem) and add the irrational-slope line on the torus $T^2$ as the classic dense one-parameter subgroup that is an injectively immersed but not embedded Lie subgroup; it shows the topology issue better than the countable circle subgroup.

### N0773

Note: [[25.06 Generators and Lie algebras|25.06 Generators and Lie algebras]]  
Priority: medium · Graph: no · Manim: yes

Mathematically correct, but the bracket-closure argument is compressed into one sentence and the only worked example ($\mathfrak{gl}_2$ shears) misses the canonical $\mathfrak{so}(3)$ case.

- [Simplify] In "The bracket", expand the one-sentence closure argument into steps: $gYg^{-1}\in\mathfrak g$ for $g\in G$, set $g=e^{tX}$, differentiate at $t=0$ to get $XY-YX$, and note that $\mathfrak g$ is a closed vector subspace, so the derivative stays in it.
- [Example] Add the $\mathfrak{so}(3)$ generators $L_x,L_y,L_z$ with $[L_x,L_y]=L_z$ (cyclic), linking the bracket to the cross product; later rotation and spinor notes rely on this example.
- [Manim] Animate the group commutator $e^{tX}e^{tY}e^{-tX}e^{-tY}$ for small rotations about $x$ and $y$ acting on a point of the sphere: the four arcs fail to close and the gap is a rotation about $z$ of size about $t^2$, illustrating the $t^2[X,Y]$ formula.
- [Intuition] In "Differentiate the defining equations", add the dimension counts that follow ($\dim\mathfrak{so}(n)=n(n-1)/2$, $\dim\mathfrak u(n)=n^2$, $\dim\mathfrak{su}(n)=n^2-1$) and justify $\frac{d}{dt}\det(e^{tX})|_{t=0}=\operatorname{tr}X$ in one line.
- [Example] Complete the shear example: with $H=\operatorname{diag}(1,-1)$, $[X,Y]=H$, $[H,X]=2X$, $[H,Y]=-2Y$ (Practice 2 does one of these), and name this traceless triple as the basis of $\mathfrak{sl}_2(\mathbb R)$.

### N0774

Note: [[25.07 Exponential maps|25.07 Exponential maps]]  
Priority: low · Graph: no · Manim: yes

Correct and well structured; one closing sentence about identity components is cryptic and would benefit from a concrete counterexample.

- [Example] Replace "Membership in that component alone does not guarantee a single exponential in every Lie group" with the standard counterexample: $\operatorname{diag}(-2,-1/2)\in SL_2(\mathbb R)$ lies in the identity component but is not $e^X$ for any real traceless $X$ (the eigenvalues of $e^X$ are $e^{\pm\lambda}$ with $\lambda$ real or purely imaginary, never two distinct negative numbers).
- [Manim] Animate the tangent line $tJ$ at $I$ being wrapped onto the circle $e^{tJ}$, and alongside show $(I+tJ/n)^n$ for $n=1,2,4,16$ converging to the rotation, which motivates the exponential as compounded infinitesimal steps.
- [Intuition] In "The matrix exponential", add the limit formula $e^X=\lim_{n\to\infty}(I+X/n)^n$ as the bridge from "infinitesimal transformation" to the series.
- [Simplify] In "Products of different generators", show the $t^2$ term of $e^{t(X+Y)}$ explicitly, $\tfrac12(X^2+XY+YX+Y^2)$, so the $\tfrac12[X,Y]$ difference follows visibly by subtraction.

### N0775

Note: [[25.08 The circle group U(1)|25.08 The circle group U(1)]]  
Priority: low · Graph: yes · Manim: yes

Clear, correct, and well illustrated by Fig. 25.2; the worked example and the two kernel distinctions are accurate.

- [Graph] Add a 3D plot of the helix $(\cos\theta,\sin\theta,\theta)$ for $\theta\in[-3\pi,3\pi]$ above the unit circle in the plane $z=0$, making the covering $p:\mathbb R\to U(1)$ and its $2\pi$-spaced fibres concrete.
- [Manim] Animate the real line wrapping onto the circle under $p(\theta)=e^{i\theta}$, with the three marked preimages of $i$ from Fig. 25.2 landing on the same point, then animate multiplication by $e^{i\alpha}$ as a rigid rotation of the circle.
- [Intuition] In "Integer powers", add that $\chi_n$ wraps the circle $n$ times around itself (winding number $n$), which explains why only integers work and previews the winding numbers used in the bundle notes.

### N0776

Note: [[Dual quaternions and rigid transformations|Dual quaternions and rigid transformations]]  
Priority: medium · Graph: no · Manim: yes

The algebra and worked example are correct (I re-checked $q_d$, the recovered translation, the inverse, and the composition), but the encoding $q_d=\tfrac12tq$ appears without motivation and the opening terminology paragraph is dense.

- [Intuition] In "Encode a rotation and translation", motivate $Q=q+\varepsilon\tfrac12tq$ as the product $(1+\varepsilon t/2)\,q$ of a pure rotation followed by a pure translation, which makes the factor $\tfrac12$ and the order of $t$ and $q$ self-explanatory.
- [Simplify] Shorten "Two different extensions": state once that complex biquaternions are a different algebra and move the naming history to a short remark; the paragraph currently front-loads terminology before the reader sees why $\varepsilon^2=0$ is useful.
- [Manim] Animate a rigid body moving from identity to the worked-example pose by screw linear interpolation (ScLERP) of the unit dual quaternion, contrasted with naive linear blending of $q_r,q_d$, which leaves the unit constraints.
- [Intuition] In "Limits and numerical use", name the Chasles (screw) theorem: every rigid motion is a rotation about an axis plus a translation along it, the geometric reason dual quaternions interpolate well.
- [Structure] The file starts with a UTF-8 BOM; save it without BOM as the vault convention requires.

### N0777

Note: [[Groups and continuous symmetries - Overview|Groups and continuous symmetries - Overview]]  
Priority: low · Graph: no · Manim: no

A clear topic hub whose links all resolve, although four linked lessons (25.01–25.03, 25.09) live in the abstract-algebra folder and the quaternion lessons in this folder are not listed.

- [Links] List the notes that sit in this folder but are missing here ([[Quaternion algebra]], [[Rotation conventions and quaternions]], [[Quaternion interpolation and applications]], [[Dual quaternions and rigid transformations]], [[Lie groups and infinitesimal transformations]]), and note that 25.01–25.03 and 25.09 are in "11 Discrete Mathematics and Abstract Algebra/03 Groups, Rings, Fields, and Representations".

### N0778

Note: [[Lie groups and infinitesimal transformations|Lie groups and infinitesimal transformations]]  
Priority: medium · Graph: no · Manim: yes

Correct (the $SE(2)$ compositions $(1,2)^T$ vs $(3,0)^T$ and the $SO(4)$ count check out), but it largely duplicates 25.04–25.07 and has a few confusing asides.

- [Structure] Most of "Matrix Lie groups", "Tangent directions and the Lie algebra" and "Brackets" repeats [[25.04 Matrix groups]], [[25.06 Generators and Lie algebras]] and [[25.07 Exponential maps]]; shorten these to a summary with links and keep the distinctive $SE(2)$/$SE(3)$ robotics material as the core.
- [Simplify] In "Matrix Lie groups", delete "These group names do not count spacetime coordinates", which brings in an unrelated idea; the following sentences on $SO(3)$ and $SU(2)$ already make the dimension point.
- [Example] In the robotics example, write the $\mathfrak{se}(2)$ element explicitly, $\begin{pmatrix}\omega J&v\\0&0\end{pmatrix}$, and compute its exponential for $\omega\ne0$, showing that it is a rotation about a point other than the origin, so the exponential gives a circular arc rather than a straight translation.
- [Manim] Animate a planar link under $T_1T_2$ and $T_2T_1$ (rotate by $\pi/2$ and shift by $(1,0)$, combined with a shift by $(2,0)$ in both orders), ending at translations $(1,2)$ and $(3,0)$, to make the order dependence visible.
- [Structure] The file starts with a UTF-8 BOM; save it without BOM.

### N0779

Note: [[Octonions|Octonions]]  
Priority: low · Graph: no · Manim: no

Frontmatter-only placeholder.

- [Structure] Quote the title (`title: "𝕆 Octonions"`) per the frontmatter rule; when content is added, cover the Fano-plane multiplication table, non-associativity, alternativity and $|xy|=|x||y|$, and link from [[Quaternion algebra]] through the Cayley–Dickson construction.

### N0780

Note: [[Quaternion algebra|Quaternion algebra]]  
Priority: low · Graph: no · Manim: no

Clear and correct (the $L(q)$ matrix, $pq$ and $qp$, both division orders, and the practice answers all check out).

- [Intuition] After the multiplication table, add that $i\to j\to k\to i$ is cyclic like $e_1\times e_2=e_3$, and that each of $\{1,i\}$, $\{1,j\}$, $\{1,k\}$ spans a copy of $\mathbb C$, so quaternions contain many complex planes that do not commute with each other.
- [Example] In "A real matrix representation", also give the $2\times2$ complex representation $1\mapsto I$, $i\mapsto-i\sigma_1$, $j\mapsto-i\sigma_2$, $k\mapsto-i\sigma_3$ and its link to $SU(2)$, preparing the spinor notes.
- [Structure] The file starts with a UTF-8 BOM; save it without BOM.

### N0781

Note: [[Quaternion interpolation and applications|Quaternion interpolation and applications]]  
Priority: medium · Graph: yes · Manim: yes

Correct (slerp midpoint, stereographic coordinate $p=(0,0,1+\sqrt2)$, the Wahba example and $Dv=-\operatorname{div}v+\operatorname{curl}v$ all check out), but it bundles four loosely related topics and the slerp derivation skips how $u$ is obtained.

- [Graph] In "Spherical linear interpolation", plot the rotation angle of slerp and of normalized lerp vs. $t\in[0,1]$ for relative rotations of $90^\circ$ and $170^\circ$, showing that slerp is a straight line and nlerp bends.
- [Manim] Animate a cube interpolated from identity to a $180^\circ$ turn about $z$ by entrywise matrix averaging (it flattens at $t=1/2$) versus slerp (it rotates rigidly), matching "Worked midpoint".
- [Simplify] In the slerp derivation, give $u=(q_1-q_0\cos\Omega)/\sin\Omega$ explicitly and show the substitution in one line, so the claim that the formula reduces to $q_0\cos(t\Omega)+u\sin(t\Omega)$ is verifiable.
- [Structure] "Stereographic projection of unit quaternions" and "Vector analysis through quaternion multiplication" are not interpolation topics; move them to [[Quaternion algebra]] or a separate note, or retitle this note to match its catalogue scope.
- [Structure] The file starts with a UTF-8 BOM; save it without BOM.

### N0782

Note: [[Quaternions|Quaternions]]  
Priority: high · Graph: no · Manim: no

An early sketch with errors, no TLDR or prose, and content that conflicts with the careful [[Quaternion algebra]] note.

- [Correctness] The Pauli list repeats $\sigma_2$ twice and omits $\sigma_3=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$.
- [Correctness] "They can be used to replace i, j, k in Quaternions" is wrong as stated: $\sigma_a^2=+I$, not $-I$. The correct substitution is $i\mapsto-i\sigma_1$, $j\mapsto-i\sigma_2$, $k\mapsto-i\sigma_3$, which satisfies $i^2=j^2=k^2=ijk=-1$.
- [Correctness] "Properties of i, j, k" mixes cross products of basis vectors ($i\times i=0$) with quaternion products ($i^2=-1$) for the same letters; as quaternions $ii=-1$, $ij=k$, $ik=-j$. Use quaternion products throughout, or label the cross-product lines as the vector part of $uv$.
- [Structure] Quote the title, add a TLDR, and turn this note into a short hub linking [[Quaternion algebra]], [[Rotation conventions and quaternions]], [[Quaternion interpolation and applications]] and [[Dual quaternions and rigid transformations]] instead of duplicating the multiplication table.

### N0783

Note: [[Rotation conventions and quaternions|Rotation conventions and quaternions]]  
Priority: low · Graph: no · Manim: yes

Correct and convention-explicit; I verified numerically the Cardan-to-quaternion formulas, the quaternion matrix entries, the angle extraction, and the worked composition $qe_2\bar q=e_1$.

- [Manim] Animate a three-ring gimbal following $R_z(\psi)R_y(\theta)R_x(\phi)$ as $\theta\to\pi/2$, showing the outer and inner rings aligning so that $\phi$ and $\psi$ produce the same motion (gimbal lock), while the quaternion path through the same orientation stays smooth.
- [Intuition] In "Cardan and Euler angles", state explicitly that $R_z(\psi)R_y(\theta)R_x(\phi)$ equals intrinsic rotations about $z$, then the new $y'$, then the new $x''$ (the aerospace yaw-pitch-roll reading); the current "reverse verbal order" sentence leaves this to the reader.
- [Example] Add a numeric round trip: pick $(\phi,\theta,\psi)=(30^\circ,-40^\circ,60^\circ)$, compute $q$, rebuild $R_{31},R_{32},R_{33},R_{21},R_{11}$, and recover the angles with atan2.
- [Structure] The file starts with a UTF-8 BOM; save it without BOM.

### N0784

Note: [[Sedenions|Sedenions]]  
Priority: low · Graph: no · Manim: no

Frontmatter-only placeholder.

- [Structure] Quote the title (`title: "𝕊 Sedenions"`); when filled, state that sedenions are the 16-dimensional Cayley–Dickson algebra with zero divisors, so the norm is no longer multiplicative.

### N0785

Note: [[Trigintaduonions|Trigintaduonions]]  
Priority: low · Graph: no · Manim: no

A one-sentence stub without TLDR; the statement is correct but minimal.

- [Structure] Quote the title (`title: "𝕋 Trigintaduonions"`), add a TLDR, and state the Cayley–Dickson origin (doubling the sedenions), the presence of zero divisors, and links to [[Sedenions]] and [[Octonions]].

### N0786

Note: [[26.01 Sections and local frames|26.01 Sections and local frames]]  
Priority: low · Graph: no · Manim: yes

Clear and correct (the rotated components $(\sqrt3,1)^T$, the Fig. 26.1 labels, and both practice answers check out).

- [Manim] Animate Fig. 26.1: keep $s(p)$ fixed while the frame rotates continuously from $0^\circ$ to $30^\circ$, with live component readouts moving from $(1,\sqrt3)$ to $(\sqrt3,1)$, so "the vector stays, the column changes" becomes visible.
- [Intuition] In "Fibres, sections, and components", add a concrete nontrivial bundle (tangent vectors on $S^2$ or the Möbius line) to motivate why one global frame may not exist, with a link to [[27.08 Bundle types]].
- [Structure] The file starts with a UTF-8 BOM; save it without BOM.

### N0787

Note: [[26.02 Local gauge transformations|26.02 Local gauge transformations]]  
Priority: low · Graph: yes · Manim: yes

Correct and carefully distinguishes frame changes from base-coordinate changes; the worked example would be clearer with a picture.

- [Graph] In "Worked example: a moving rotation", plot $\psi'^1(x)=\cos x$ and $\psi'^2(x)=-\sin x$ for $x\in[0,2\pi]$ together with the constant original components $(1,0)$, showing that varying components can describe a constant section.
- [Manim] Animate the base line $x\in[0,2\pi]$ with the same fixed arrow above each sample point while the frames $R(x)$ rotate point by point; this shows a local (position-dependent) gauge change in contrast with a global one.
- [Simplify] In "A coordinate change on the base", the one-form Jacobian paragraph introduces matrix-valued $A$ before connections are defined; move it to [[26.04 Covariant derivatives]] or mark it as a preview.
- [Structure] The file starts with a UTF-8 BOM; save it without BOM.

### N0788

Note: [[26.03 The derivative problem|26.03 The derivative problem]]  
Priority: low · Graph: yes · Manim: no

Correct ($dR=RJ\,dx$, $d\psi'=-J\psi'\,dx$, and the practice answers check out) and well motivated.

- [Graph] In the rotating-basis example, plot $\psi'(x)=(\cos x,-\sin x)$ and $d\psi'/dx=(-\sin x,-\cos x)$ for $x\in[0,2\pi]$, illustrating that a constant section has a nonzero component derivative in a rotating frame.
- [Intuition] In "How the correction is determined", add the familiar analogy: velocity components in a rotating reference frame acquire an $\omega\times$ term, which plays the role of $A'=J\,dx$.
- [Structure] The file starts with a UTF-8 BOM; save it without BOM.

### N0789

Note: [[26.04 Covariant derivatives|26.04 Covariant derivatives]]  
Priority: low · Graph: no · Manim: no

Correct and well derived (the transformation law, the diagonal-scaling example, and both practice answers check out).

- [Example] Add the orthonormal counterpart from [[26.03 The derivative problem]]: $g=R(x)$ gives $A'=J\,dx$, which is skew-symmetric as metric compatibility requires, in contrast with the non-skew $A'=\operatorname{diag}(1,-1)dx$ of the scaling example.
- [Intuition] After the boxed law, state in words that $g^{-1}Ag$ re-expresses the old connection in the new basis and $g^{-1}dg$ measures how fast the new basis itself turns, which is why $A$ is not a tensor.
- [Structure] The file starts with a UTF-8 BOM; save it without BOM.

### N0790

Note: [[26.05 Abelian phase connections|26.05 Abelian phase connections]]  
Priority: low · Graph: yes · Manim: no

Correct and explicit (the two-variable example, $da'=da=dx\wedge dy$, and the practice answers check out).

- [Graph] In "Worked example in two variables", show side-by-side 2D vector-field plots of $a=(0,x)$ and $a'=(y,2x)$ on $[-2,2]^2$, captioned with their equal curl $1$, to show that different potentials describe the same field strength.
- [Links] Link to the physics use (electromagnetic potential, $a\leftrightarrow qA/\hbar$) so the reader sees that $a'=a+d\chi$ is the gauge freedom of the vector potential, and note the sign difference if the physics notes use $D=d-iqA/\hbar$.
- [Structure] The file starts with a UTF-8 BOM; save it without BOM.

### N0791

Note: [[26.06 Curvature or field strength|26.06 Curvature or field strength]]  
Priority: low · Graph: no · Manim: yes

Correct ($D^2=dA+A\wedge A$, the constant-coefficient example with $F=\operatorname{diag}(1,-1)dx\wedge dy$, and $[D_x,D_y](1,2)^T=(1,-2)^T$ check out), but curvature is presented algebraically without the loop picture.

- [Manim] Animate parallel transport of a vector around a small square of side $\epsilon$ for $A=P\,dx+Q\,dy$, showing that the returning vector differs from the start by approximately $-\epsilon^2F_{xy}v$, which links $[D_x,D_y]$ to the loop picture in [[26.08 Parallel transport]].
- [Intuition] In "Define the product before using it", add one sentence that $D^2$ measures "go around an infinitesimal loop and compare", so the reader knows why $F$ is called curvature before the algebra starts.
- [Structure] The file starts with a UTF-8 BOM; save it without BOM.

### N0792

Note: [[26.07 Covariance and invariants|26.07 Covariance and invariants]]  
Priority: low · Graph: no · Manim: no

Correct and clear (the conjugated matrix $K'$, its invariants, and the metric example $\psi'^\dagger H'\psi'=5$ check out).

- [Links] In "Invariants built from curvature", add a forward pointer that $\operatorname{tr}(F\wedge F)$ integrates to a topological (Chern or Pontryagin) number and that $\operatorname{tr}(F_{\mu\nu}F^{\mu\nu})$ is the Yang–Mills Lagrangian, which motivates why these invariants matter.
- [Structure] The file starts with a UTF-8 BOM; save it without BOM.

### N0793

Note: [[26.08 Parallel transport|26.08 Parallel transport]]  
Priority: low · Graph: yes · Manim: yes

Correct (the two-path example $T_1=e^{-i}$, $T_2=1$, the Stokes check, and the practice answers check out) and well organized.

- [Graph] In "Worked example: two paths with the same endpoints", plot the unit square with paths $\gamma_1$ and $\gamma_2$ in two colours over a quiver plot of $a=(0,x)$, so it is visible why only the right edge contributes.
- [Manim] Animate a phase arrow in the fibre carried along $\gamma_1$ and $\gamma_2$ at the same time, rotating by $-\int a$, so the two arrows arrive at $(1,1)$ with a phase difference of $1$ radian.
- [Simplify] In "Turn a connection into an ordinary differential equation", show the second-order term in one line (substitute the integral equation into itself once) before quoting the path-ordered series.
- [Structure] The file starts with a UTF-8 BOM; save it without BOM.

### N0794

Note: [[26.09 Pure gauge and global limits|26.09 Pure gauge and global limits]]  
Priority: low · Graph: yes · Manim: yes

Correct (holonomy $e^{-2\pi i\alpha}$, the integer-$\alpha$ removal, and the cut-domain practice answer check out), but it repeats the punctured-plane example of [[27.09 Connections and holonomy]] and [[27.10 Local and global potentials]] in different notation.

- [Manim] Animate a phase arrow transported around a small loop away from the origin (returns unchanged) and around the unit circle for $\alpha=1/2$ (returns reversed), matching Fig. 26.2.
- [Graph] Plot the phase $-\alpha\theta$ of the parallel frame along the lifted angle $\theta\in[0,2\pi]$ for $\alpha=1/3,1/2,1$, marking the mismatch at $2\pi$ that obstructs global removal unless $\alpha\in\mathbb Z$.
- [Intuition] In "Worked example: a flat connection around a missing point", name the Aharonov–Bohm setting: $a$ is the vector potential outside a thin solenoid with flux proportional to $\alpha$, a physical flat connection with nontrivial holonomy.
- [Structure] Harmonize notation with [[27.09 Connections and holonomy]]: here $D=d+ia$ with real $a$ and $A=ia$, there $\nabla=d+iA$ with real $A$; state the correspondence in both notes or adopt one convention.
- [Structure] The file starts with a UTF-8 BOM; save it without BOM.

### N0795

Note: [[27.06 Bundle structure|27.06 Bundle structure]]  
Priority: low · Graph: yes · Manim: yes

Correct (the double-cover local trivialization and the no-section proof are sound) and clearly written.

- [Graph] Add a 3D plot of the double cover as the curve $\bigl((1+0.3\cos\phi)\cos2\phi,\,(1+0.3\cos\phi)\sin2\phi,\,0.3\sin\phi\bigr)$, $\phi\in[0,2\pi]$, over the unit base circle in the plane $z=0$: one connected curve that passes twice over each base point.
- [Manim] Animate a point moving once around the base circle while its two preimages move along the double cover and end swapped, which shows directly why a continuous choice of one preimage (a section) is impossible.
- [Structure] The file starts with a UTF-8 BOM; save it without BOM.

### N0796

Note: [[27.07 Transition functions|27.07 Transition functions]]  
Priority: low · Graph: no · Manim: yes

Correct (cocycle conditions, the coordinate-change rule $g'_{ij}=h_ig_{ij}h_j^{-1}$, and both practice answers check out), with Fig. 27.2 supporting the Möbius example.

- [Correctness] Symbol clash: $B$ is the base space ($\pi:E\to B$) and also a matrix in Practice 2 ($g_{23}=B$), and $A$ names an overlap component in the worked example and a matrix in Practice 2; rename the practice matrices (for example $M,N$).
- [Manim] Animate two strips (charts $U$, $V$) being glued along the overlap components $A$ and $C$, first both with $+1$ (cylinder) and then with $-1$ on $C$ (Möbius band), matching Fig. 27.2.
- [Simplify] In "Fix a direction convention", move the faithfulness discussion to a short remark after the cocycle condition; it interrupts the main derivation for a technicality most readers do not need.
- [Structure] The file starts with a UTF-8 BOM; save it without BOM.

### N0797

Note: [[27.08 Bundle types|27.08 Bundle types]]  
Priority: low · Graph: yes · Manim: no

Correct and clear (the Möbius no-frame argument, principal-bundle trivialization by a section, and the practice answers are right).

- [Graph] In "Worked example: the Möbius line bundle", plot the sample section $f(t)=\cos(\pi t)$ on $t\in[0,1]$, showing $f(1)=-f(0)$ and the forced zero at $t=1/2$, next to a constant section for the product case.
- [Example] In "Principal bundles", add the Hopf fibration $S^3\to S^2$ (a principal $U(1)$-bundle) as a named nontrivial connected example, linking to the quaternion notes where $S^3$ appears as the unit quaternions.
- [Structure] The file starts with a UTF-8 BOM; save it without BOM.

### N0798

Note: [[27.09 Connections and holonomy|27.09 Connections and holonomy]]  
Priority: medium · Graph: yes · Manim: yes

The mathematics is correct (rectangle holonomy $e^{-icab}$, flat circle holonomy $e^{-2\pi ian}$, Fig. 27.3 values), but one letter has two meanings and the notation differs from the 26.xx notes.

- [Correctness] Symbol clash: $a$ is the rectangle width in "$[0,a]\times[0,b]$" and $\oint A=cab$, and later the real coefficient in $A=a\alpha$ with holonomy $e^{-2\pi ian}$; rename one (for example rectangle sides $w,h$ or coefficient $\kappa$).
- [Structure] Here $A$ is a real one-form with $\nabla=d+iA$, while [[26.04 Covariant derivatives]] to [[26.09 Pure gauge and global limits]] use $A=ia$ as the anti-Hermitian connection form; add one sentence stating that $A$ here corresponds to $a$ there.
- [Graph] Plot the holonomy values $e^{-2\pi i\kappa n}$ on the unit circle for $n=0,1,2,3$ and $\kappa=1/3$, showing the homomorphism $\pi_1(S^1)\to U(1)$ and why winding 3 returns to $1$ (Practice 2).
- [Manim] Animate the rectangle loop shrinking for $A=cx\,dy$: the holonomy phase $-c\cdot\text{area}$ shrinks to zero, contrasted with the flat circle connection, where the phase stays $-2\pi\kappa$ for every loop around the hole.
- [Structure] The file starts with a UTF-8 BOM; save it without BOM.

### N0799

Note: [[27.10 Local and global potentials|27.10 Local and global potentials]]  
Priority: low · Graph: yes · Manim: no

Correct (the Poincaré-lemma derivation, $\partial_xQ=\partial_yP$, the period $2\pi$, and both practice answers check out) and well organized.

- [Graph] Add a 3D plot of the helicoid $z=\theta$ over the annulus $0.1<r<2$ for $\theta\in[0,4\pi]$, showing that the local potential of $\alpha$ is multivalued and gains $2\pi$ per turn.
- [Simplify] In "Closed and exact one-forms", spell out the middle step of the $\partial_kf$ computation ("by closedness, $\sum_jx^j\partial_ka_j(tx)=\sum_jx^j\partial_ja_k(tx)$, and $t$ times this is $t\frac{d}{dt}a_k(tx)$"), since that substitution is the whole proof.
- [Structure] The punctured-plane example duplicates [[26.09 Pure gauge and global limits]]; cross-link the two notes and keep one full computation.
- [Structure] The file starts with a UTF-8 BOM; save it without BOM.

### N0800

Note: [[Elementary topology and bundles - Overview|Elementary topology and bundles - Overview]]  
Priority: low · Graph: no · Manim: no

A clear hub; all links resolve (27.01–27.05 live in "01 Elementary Topology").

- [Links] Mention that 27.01–27.05 are in the "01 Elementary Topology" folder, point to [[Gauge connections - Overview]] as the parallel 26.xx sequence that treats the same holonomy examples in matrix language, and remove the UTF-8 BOM.

### N0801

Note: [[Gauge connections - Overview|Gauge connections - Overview]]  
Priority: low · Graph: no · Manim: no

A clear hub; all links resolve.

- [Links] Point to [[Elementary topology and bundles - Overview]] (27.09–27.10 overlap with 26.08–26.09), state the convention used ($e'=eg$, $\psi'=g^{-1}\psi$, $D=d+A$) once here, and remove the UTF-8 BOM.

### N0802

Note: [[Category Theory|Category Theory]]  
Priority: high · Graph: no · Manim: no

A three-line stub without frontmatter or TLDR that describes category theory only vaguely and does not link the other notes in its folder.

- [Structure] Add a quoted title and TLDR, and turn the note into a hub linking [[Category]], [[Functor]], [[Isomorphism]], [[Equivalence]] and [[Category of Categories]].
- [Simplify] Replace "used to transform a mathematical problem expressed in one way into another representation" with a precise description: category theory studies objects through the structure-preserving maps between them, and functors transport problems between areas.
- [Example] Give one concrete translation: the fundamental-group functor $\pi_1$ turns "is there a retraction $D^2\to S^1$?" into "is there a factorization $\mathbb Z\to0\to\mathbb Z$ of the identity?", which is clearly impossible.

### N0803

Note: [[Category of Categories|Category of Categories]]  
Priority: medium · Graph: no · Manim: no

A one-sentence stub without frontmatter whose definition is wrong.

- [Correctness] "The Category set of all possible [[Category]]" is incorrect and runs into a size paradox; $\mathbf{Cat}$ is the category whose objects are small categories and whose morphisms are functors, with functor composition and identity functors. Also add a quoted title, a TLDR, and a trailing newline.

### N0804

Note: [[Category|Category]]  
Priority: high · Graph: yes · Manim: no

An informal draft without frontmatter or TLDR that contains several definitional errors.

- [Correctness] Under "Compositions", for $f:A\to B$ and $g:B\to C$ the composite is $g\circ f:A\to C$, not $h=f\circ g$; the note's own associativity law $(h\circ g)\circ f$ uses the right-to-left convention, so the composition line contradicts it.
- [Correctness] The identity law "$I_e(e)=e$" applies a morphism to an element, which a general category does not provide; the law is $f\circ\mathrm{id}_A=f=\mathrm{id}_B\circ f$ for every $f:A\to B$.
- [Correctness] "Objects are Elements in a Set" with the set-order and repetition examples is wrong and irrelevant: objects need not form a set (e.g. in $\mathbf{Set}$ itself) and need not have elements, and morphisms need not be functions between sets ("transformation functions"). Remove the set examples and give $\mathbf{Set}$, $\mathbf{Grp}$, $\mathbf{Vect}$ and a poset as examples.
- [Graph] Add a small commutative diagram (triangle $A\to B\to C$ with $g\circ f$) as an image instead of only external links.
- [Structure] Add a quoted title and TLDR, and fix the spelling ("A identity", "it's", "than").

### N0805

Note: [[Equivalence|Equivalence]]  
Priority: high · Graph: no · Manim: no

A short draft without frontmatter whose definitions are garbled.

- [Correctness] "Two groups $C$ and $D$" should be "two categories"; an equivalence consists of functors $F:C\to D$ and $G:D\to C$ with natural isomorphisms $G\circ F\cong1_C$ and $F\circ G\cong1_D$ (the categories themselves are not "natural isomorph").
- [Correctness] The natural-transformation paragraph omits the defining condition: $\nu:F\Rightarrow G$ is a family $\nu_X:F(X)\to G(X)$ with $G(f)\circ\nu_X=\nu_Y\circ F(f)$ for every $f:X\to Y$; it is a natural isomorphism when every $\nu_X$ is invertible, which is what $\nu^{-1}$ should express.
- [Example] Add the standard example: finite-dimensional real vector spaces are equivalent to the category with objects $n\in\mathbb N$ and $m\times n$ matrices as morphisms, although the two categories are not isomorphic.
- [Structure] Add a quoted title and TLDR.

### N0806

Note: [[Functor|Functor]]  
Priority: high · Graph: no · Manim: no

A brief draft without frontmatter whose opening sentence is wrong.

- [Correctness] "A Functor is a map between two sets" is wrong; a functor maps between categories (objects to objects, morphisms to morphisms), as the next sentence correctly says. Delete the first sentence.
- [Simplify] State the functor rules precisely: $F(f)$ is a morphism $F(X)\to F(Y)$ for $f:X\to Y$, and $F(\mathrm{id}_X)=\mathrm{id}_{F(X)}$; "a identity of $C$ becomes an identity in $D$" does not say which identity.
- [Simplify] In "Free Group Functor", replace "by adding the required properties" with the construction (reduced words in $S\cup S^{-1}$ under concatenation) and mention that it is left adjoint to the forgetful functor $U$.
- [Structure] Add a quoted title and TLDR, write $\mathbf{Grp}$ and $\mathbf{Set}$ consistently, and replace "Ie." with "For example".

### N0807

Note: [[Isomorphism|Isomorphism]]  
Priority: high · Graph: no · Manim: no

A two-sentence draft without frontmatter whose definition is garbled.

- [Correctness] The text calls the equations "$f\circ f^{-1}=I_B$ and $f^{-1}\circ f=I_A$" the isomorphisms; correctly, $f:A\to B$ is an isomorphism if some $g:B\to A$ satisfies $g\circ f=\mathrm{id}_A$ and $f\circ g=\mathrm{id}_B$, and then $g=f^{-1}$ is unique.
- [Correctness] "isomorphisms between two sets" should be "between two objects" of a category; in $\mathbf{Set}$ isomorphisms are bijections, in $\mathbf{Grp}$ group isomorphisms, in $\mathbf{Top}$ homeomorphisms. Add these examples, a quoted title, and a TLDR.
