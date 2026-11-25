---
title: "Note Improvement Tracker – 01 Mathematics/03 Linear Algebra"
---

> [!TLDR]
> This note tracks the review of the 64 notes in `01 Mathematics/03 Linear Algebra`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 27 possible errors or notation conflicts. 27 of them are verified (26 fixed, 1 partly); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N0148|N0148]] 05.08 Lines and planes: "See [[05.07 Linear combinations]] for the difference between a span through the origin and its translated copy" points to a note that never discusses translated copies; link [[10.01 Vector spaces]] (which mentions translated lines and affine sets) or drop the claim. **Fixed:** Retargeted the link to [[10.01 Vector spaces]], which discusses translated lines and affine sets
- [[#N0150|N0150]] Basis change: In "Basis change on Covector", ${e'}_j = B^i_j\ a_i$ uses an undefined $a_i$; it should read ${e'}_j = B^i_j\ e_i$. **Fixed:** Changed ${e'}_j = B^i_j\ a_i$ to ${e'}_j = B^i_j\ e_i$
- [[#N0151|N0151]] Cross product: The index form $c_i = ε_{ijk} \, a_i \, b_j$ is wrong (free index $i$ repeated, $k$ dangling); it must be $c_i=\varepsilon_{ijk}\,a_j\,b_k$. **Fixed:** Changed to $c_i = ε_{ijk}\,a_j\,b_k$
- [[#N0151|N0151]] Cross product: "Determinant of two 3D vectors" is not a valid definition (a determinant needs three rows); say that $\mathbf a\times\mathbf b$ is the formal determinant with rows $(\mathbf e_x,\mathbf e_y,\mathbf e_z)$, $\mathbf a$, $\mathbf b$, i.e. its components are $2\times2$ minors. **Fixed:** Reworded as formal determinant with rows (e_x, e_y, e_z), a, b whose components are 2x2 minors
- [[#N0155|N0155]] Scalar Product: $c_i = a_i\,b_i$ defines a vector (the component-wise product), not the scalar product; the dot product is $c=a_ib_i=\sum_i a_ib_i$ with no free index, and writing $c=a\,b$ without a dot clashes with the geometric product $ab$ in [[Vector product]]. **Fixed:** Changed to $c = a\cdot b$ and $c = a_i b_i = \sum_i a_i b_i$; used a\cdot b in the angle formulas
- [[#N0155|N0155]] Scalar Product: The angle formula is restricted to "$\forall a,b\in\mathbb{R}^2$" although it holds in any $\mathbb R^n$ with an orthonormal basis; generalize it and require $a,b\neq0$ for the $\cos\gamma$ formula. **Fixed:** Generalized to R^n (orthonormal basis) and added a,b nonzero to the cos formula
- [[#N0159|N0159]] Vector product: "with $xy = -xy$ and $xx = 1$" is wrong as written; it should be $e_xe_y=-e_ye_x$ (distinct basis vectors) and $e_xe_x=1$. **Fixed:** Changed to $e_xe_y = -e_ye_x$ (distinct basis vectors) and $e_xe_x = 1$
- [[#N0159|N0159]] Vector product: The bivector basis lines $e_z e_x = -(e_z e_x) = j$ and $e_y e_z = -(e_y e_z) = k$ assert $X=-X$; they should read $e_ze_x=-e_xe_z=j$ and $e_ye_z=-e_ze_y=k$. **Fixed:** Changed to $e_ze_x = -e_xe_z = j$ and $e_ye_z = -e_ze_y = k$
- [[#N0159|N0159]] Vector product: The overbrace labels the bivector part "cross product"; it is the wedge product $a\wedge b$, whose components equal those of $a\times b$ only through the Hodge dual ($a\wedge b=I\,(a\times b)$ with $I=e_xe_ye_z$). **Fixed:** Relabeled it "wedge product a wedge b" and added one line on the Hodge dual a wedge b = I (a x b) with I = e_xe_ye_z (verified I e_x = e_ye_z)
- [[#N0169|N0169]] LU factorization and matrix practice: "On [[Linear maps, inverses, and determinants#Determinants by elimination|the section on Determinants by elimination]] the same symbol denotes the determinant of that submatrix" points to the wrong heading; $M_{ij}$ is defined under [[Linear maps, inverses, and determinants#Cofactors]]. **Fixed:** Retargeted to [[Linear maps, inverses, and determinants#Cofactors]], where the minor M_ij is defined
- [[#N0170|N0170]] Linear algebra - Catalogue Guide: [[Planned Topics#4. Linear algebra|the detailed catalogue]] is broken: no note named "Planned Topics" exists in the vault; retarget it or remove it. **Fixed:** No Planned Topics note exists in the vault (only a backup in .temp); removed the sentence with the broken link (same broken link exists in other Catalogue Guides outside this batch)
- [[#N0175|N0175]] Row reduction and the four fundamental subspaces: Wrong internal anchors: "The portfolio vectors on [[#Reduced row echelon form]]" (they are introduced under "Span and dependence"), "For the matrix on the section on Homework 2" (the matrix is in "Homogeneous systems"), and three references to [[#Forward elimination and back substitution]] for the matrix $B$, which is defined under "Rectangular matrix". **Fixed:** Retargeted to #Span and dependence, #Homogeneous systems (now a link), and #Rectangular matrix (three places)
- [[#N0176|N0176]] Scaling Matrices: "A matrix $M$ is scaling a vector field, if it's Determinant is not equal to 1" is wrong: $\operatorname{diag}(2,1/2)$ scales both axes yet has determinant 1, and a rotation combined with a scaling has determinant $\ne1$ without being a scaling matrix; define a scaling matrix as $\operatorname{diag}(s_x,s_y,\ldots)$ and say $|\det|$ is the volume factor. **Fixed:** Defined a scaling matrix as diag(s_x, s_y, ...), stated abs(det) as volume factor with the diag(2,1/2) counterexample
- [[#N0176|N0176]] Scaling Matrices: "Scaling Matrix in $ℝ^2$" shows a $3\times3$ matrix; the linear scaling on $\mathbb R^2$ is $\begin{pmatrix}s_x&0\\0&s_y\end{pmatrix}$, and the $3\times3$ form acts on homogeneous coordinates (same issue for the $\mathbb R^3$ and $\mathbb R^4$ sections). **Partly:** Note already mentioned homogeneous coordinates; added the 2x2 linear matrix in R^2 and diag forms for R^3 and R^4, and labeled the existing matrices as homogeneous-coordinate forms
- [[#N0178|N0178]] Subspaces, eigenvectors, and orthogonal projections: Wrong anchors: "The conditions on [[#Vector spaces and subspaces]] for injectivity" (they are listed under "The four fundamental subspaces"); "as on [[Coordinate matrices and diagonalization#Stretching along a basis direction]]" for the transpose matrix (it is under "Coordinate representation of a matrix"); "[[#Orthogonal projections|the section on Final review. Orthogonal projections]]" for inner-product preservation (the proof is under "Orthonormal sets", and "Final review" is not a heading). **Fixed:** Retargeted to #The four fundamental subspaces, Coordinate matrices and diagonalization#Coordinate representation of a matrix, and #Orthonormal sets
- [[#N0179|N0179]] Symmetrization and Antisymmetrization: "Any real square matrix $A_{ii}$" and "$A_{ii}= A_{(ij)} + A_{[ij]}$" use a diagonal index; both should be $A_{ij}$. **Fixed:** Changed both occurrences to A_ij
- [[#N0179|N0179]] Symmetrization and Antisymmetrization: The general symmetrization formula is written with square brackets $A_{[i_1 i_2 \dots i_n]}$; it must use round brackets $A_{(i_1 i_2 \dots i_n)}$, since square brackets denote antisymmetrization in this note. **Fixed:** Changed to round brackets A_(i_1 ... i_n)
- [[#N0179|N0179]] Symmetrization and Antisymmetrization: "$\omega_{ij} = \epsilon_{ijk},\omega^k$" has a stray comma and is not an antisymmetrization formula; write $\omega_{ij}=\epsilon_{ijk}\omega^k$ with inverse $\omega^k=\tfrac12\epsilon^{kij}\omega_{ij}$ and say it identifies 3D antisymmetric matrices with axial vectors. **Fixed:** Wrote omega_ij = eps_ijk omega^k with inverse omega^k = 1/2 eps^kij omega_ij and stated it identifies 3D antisymmetric matrices with axial vectors
- [[#N0180|N0180]] Vectors, projections, lines, and planes: The "Physical quantities" table lists $\lVert\mechanical{\mathbf v}\rVert$ as speed in $\unit{m\,s^{-1}}$, but the note uses $\mathbf v$ only as a generic geometric vector and never as velocity; remove the table (and the macro use) from this mathematics note. **Fixed:** Removed the Physical quantities section (only mechanical macro use in the note)
- [[#N0184|N0184]] Determinant of a Matrix: The $3\times3$ formula $aei + bdi + ceg - afh - bdi - ceg$ is wrong (it cancels to $aei-afh$); the rule of Sarrus gives $aei+bfg+cdh-ceg-bdi-afh$. **Fixed:** Changed to Sarrus form aei + bfg + cdh - ceg - bdi - afh
- [[#N0184|N0184]] Determinant of a Matrix: The cofactor expansion $a_1\det(M_{11})-a_2\det(M_{12})+\cdots+(-1)^n a_n\det(M_{nn})$ is wrong in its last term and sign; it should be $\det A=\sum_{j=1}^n(-1)^{1+j}a_{1j}\det M_{1j}$ (Laplace expansion, not "Levi-Civita's expansion"). **Fixed:** Changed to det A = sum_j (-1)^(1+j) a_1j det M_1j and renamed to Laplace expansion
- [[#N0184|N0184]] Determinant of a Matrix: "$\det A=1$ ... representing rotations" and "$\det A\notin\{0,1,-1\}$ indicates scaling or skewing" are wrong: shears have determinant 1, and $\operatorname{diag}(2,1/2)$ scales with determinant 1; determinant only fixes the signed volume factor. Likewise in the second callout, $\det R=\pm1$ does not make a matrix orthogonal, so say "for orthogonal matrices". **Fixed:** Rewrote callout as signed volume factor (det 1 includes rotations, shears, diag(2,1/2)); changed "rotation matrices" to "orthogonal matrices"
- [[#N0184|N0184]] Determinant of a Matrix: "Volume of a Vector Space" puts a formal row $(\mathbf i,\mathbf j,\mathbf k,\ldots)$ into the matrix; the volume spanned by $n$ vectors in $\mathbb R^n$ is $|\det[a\;b\;c\;\cdots]|$ of the $n\times n$ matrix of their components, and "a positive determinant indicates that vectors form a volume" should say "nonzero". **Fixed:** Replaced with abs(det) of the n x n component matrix and changed "positive" to "nonzero"
- [[#N0184|N0184]] Determinant of a Matrix: "Orientation of a Vector Space" uses the determinant of an $n\times(n+1)$ matrix, which is undefined; orientation is the sign of the $n\times n$ determinant of the basis relative to a reference basis. **Fixed:** Rewrote as the sign of the n x n determinant of the basis relative to a reference basis
- [[#N0187|N0187]] Eigenvectors and Eigenvalues: "When eigenvectors and eigenvalues are imaginary, then every non-zero vector will change" is imprecise: the relevant case is non-real complex eigenvalues (for example $(1\pm i)/\sqrt2$ for a $45^\circ$ rotation, not purely imaginary), and the correct conclusion is that no nonzero real vector stays on its own line. **Fixed:** Changed to non-real complex eigenvalues (example (1 +- i)/sqrt2 for 45 degree rotation) and no nonzero real vector stays on its own line
- [[#N0200|N0200]] Hermitian Conjungate: "$\|J\|^2 = J^{\dagger} J = J J^{\dagger}$" is wrong: $J^\dagger J$ is the scalar $\|J\|^2$, but $JJ^\dagger$ is an $n\times n$ matrix (the projector onto $J$ when $\|J\|=1$). **Fixed:** Removed = J J^dagger and added that J J^dagger is an n x n matrix (projector onto J when norm(J) = 1)
- [[#N0200|N0200]] Hermitian Conjungate: "we can't simply get the inverse of the vector using the transpose method" describes the wrong concept; the issue is the squared norm, since $J^TJ$ can be zero or complex for nonzero $J$ (for example $J=(1,i)$). **Fixed:** Changed to squared norm and explained J^T J can be zero or complex, example J = (1, i)^T

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N0141 | [[05.01 Geometric vectors\|01 Vectors and Bases/05.01 Geometric vectors]] | Analyzed | low | yes | yes | [[#N0141\|View]] |
| N0142 | [[05.02 Vector operations\|01 Vectors and Bases/05.02 Vector operations]] | Analyzed | low | no | yes | [[#N0142\|View]] |
| N0143 | [[05.03 Components and bases\|01 Vectors and Bases/05.03 Components and bases]] | Analyzed | low | no | yes | [[#N0143\|View]] |
| N0144 | [[05.04 Magnitude and unit vectors\|01 Vectors and Bases/05.04 Magnitude and unit vectors]] | Analyzed | low | yes | no | [[#N0144\|View]] |
| N0145 | [[05.05 Dot products\|01 Vectors and Bases/05.05 Dot products]] | Analyzed | low | yes | yes | [[#N0145\|View]] |
| N0146 | [[05.06 General bases\|01 Vectors and Bases/05.06 General bases]] | Analyzed | low | no | no | [[#N0146\|View]] |
| N0147 | [[05.07 Linear combinations\|01 Vectors and Bases/05.07 Linear combinations]] | Analyzed | low | yes | no | [[#N0147\|View]] |
| N0148 | [[05.08 Lines and planes\|01 Vectors and Bases/05.08 Lines and planes]] | Analyzed | low | yes | no | [[#N0148\|View]] |
| N0149 | [[10.01 Vector spaces\|01 Vectors and Bases/10.01 Vector spaces]] | Analyzed | low | no | no | [[#N0149\|View]] |
| N0150 | [[Basis change\|01 Vectors and Bases/Basis change]] | Analyzed | high | no | no | [[#N0150\|View]] |
| N0151 | [[Cross product\|01 Vectors and Bases/Cross product]] | Analyzed | high | yes | no | [[#N0151\|View]] |
| N0152 | [[Hadamard product\|01 Vectors and Bases/Hadamard product]] | Analyzed | low | no | no | [[#N0152\|View]] |
| N0153 | [[Length of Vector\|01 Vectors and Bases/Length of Vector]] | Analyzed | low | no | no | [[#N0153\|View]] |
| N0154 | [[Linear maps functionals and complexification\|01 Vectors and Bases/Linear maps functionals and complexification]] | Analyzed | low | no | yes | [[#N0154\|View]] |
| N0155 | [[Scalar Product\|01 Vectors and Bases/Scalar Product]] | Analyzed | high | no | no | [[#N0155\|View]] |
| N0156 | [[Unit Vector\|01 Vectors and Bases/Unit Vector]] | Analyzed | low | no | no | [[#N0156\|View]] |
| N0157 | [[Vector Addition\|01 Vectors and Bases/Vector Addition]] | Analyzed | low | no | no | [[#N0157\|View]] |
| N0158 | [[Vector calculations and geometric products\|01 Vectors and Bases/Vector calculations and geometric products]] | Analyzed | low | yes | no | [[#N0158\|View]] |
| N0159 | [[Vector product\|01 Vectors and Bases/Vector product]] | Analyzed | high | no | yes | [[#N0159\|View]] |
| N0160 | [[Vectors - Overview\|01 Vectors and Bases/Vectors - Overview]] | Analyzed | low | no | no | [[#N0160\|View]] |
| N0161 | [[10.02 Linear maps\|02 Matrices, Linear Maps, and Systems/10.02 Linear maps]] | Analyzed | low | no | yes | [[#N0161\|View]] |
| N0162 | [[10.03 Matrices\|02 Matrices, Linear Maps, and Systems/10.03 Matrices]] | Analyzed | low | no | yes | [[#N0162\|View]] |
| N0163 | [[10.04 Linear systems\|02 Matrices, Linear Maps, and Systems/10.04 Linear systems]] | Analyzed | low | yes | no | [[#N0163\|View]] |
| N0164 | [[10.05 Inverses\|02 Matrices, Linear Maps, and Systems/10.05 Inverses]] | Analyzed | low | no | yes | [[#N0164\|View]] |
| N0165 | [[10.09 Real and complex matrices\|02 Matrices, Linear Maps, and Systems/10.09 Real and complex matrices]] | Analyzed | low | no | no | [[#N0165\|View]] |
| N0166 | [[10.10 Block matrices\|02 Matrices, Linear Maps, and Systems/10.10 Block matrices]] | Analyzed | low | no | no | [[#N0166\|View]] |
| N0167 | [[Coordinate matrices and diagonalization\|02 Matrices, Linear Maps, and Systems/Coordinate matrices and diagonalization]] | Analyzed | medium | yes | yes | [[#N0167\|View]] |
| N0168 | [[Gram–Schmidt and QR factorization problems\|02 Matrices, Linear Maps, and Systems/Gram–Schmidt and QR factorization problems]] | Analyzed | medium | yes | yes | [[#N0168\|View]] |
| N0169 | [[LU factorization and matrix practice\|02 Matrices, Linear Maps, and Systems/LU factorization and matrix practice]] | Analyzed | medium | no | yes | [[#N0169\|View]] |
| N0170 | [[Linear algebra - Catalogue Guide\|02 Matrices, Linear Maps, and Systems/Linear algebra - Catalogue Guide]] | Analyzed | low | no | no | [[#N0170\|View]] |
| N0171 | [[Linear algebra - Overview\|02 Matrices, Linear Maps, and Systems/Linear algebra - Overview]] | Analyzed | low | no | no | [[#N0171\|View]] |
| N0172 | [[Linear maps, inverses, and determinants\|02 Matrices, Linear Maps, and Systems/Linear maps, inverses, and determinants]] | Analyzed | medium | no | yes | [[#N0172\|View]] |
| N0173 | [[Linear systems and pivot exchange\|02 Matrices, Linear Maps, and Systems/Linear systems and pivot exchange]] | Analyzed | low | yes | no | [[#N0173\|View]] |
| N0174 | [[Matrices and linear maps\|02 Matrices, Linear Maps, and Systems/Matrices and linear maps]] | Analyzed | low | no | yes | [[#N0174\|View]] |
| N0175 | [[Row reduction and the four fundamental subspaces\|02 Matrices, Linear Maps, and Systems/Row reduction and the four fundamental subspaces]] | Analyzed | medium | yes | yes | [[#N0175\|View]] |
| N0176 | [[Scaling Matrices\|02 Matrices, Linear Maps, and Systems/Scaling Matrices]] | Analyzed | high | yes | no | [[#N0176\|View]] |
| N0177 | [[Skewing Matrices\|02 Matrices, Linear Maps, and Systems/Skewing Matrices]] | Analyzed | medium | yes | yes | [[#N0177\|View]] |
| N0178 | [[Subspaces, eigenvectors, and orthogonal projections\|02 Matrices, Linear Maps, and Systems/Subspaces, eigenvectors, and orthogonal projections]] | Analyzed | medium | yes | no | [[#N0178\|View]] |
| N0179 | [[Symmetrization and Antisymmetrization\|02 Matrices, Linear Maps, and Systems/Symmetrization and Antisymmetrization]] | Analyzed | medium | no | no | [[#N0179\|View]] |
| N0180 | [[Vectors, projections, lines, and planes\|02 Matrices, Linear Maps, and Systems/Vectors, projections, lines, and planes]] | Analyzed | medium | yes | no | [[#N0180\|View]] |
| N0181 | [[10.06 Determinants and trace\|03 Determinants and Eigenvalues/10.06 Determinants and trace]] | Analyzed | low | no | yes | [[#N0181\|View]] |
| N0182 | [[10.07 Eigenvalues and eigenvectors\|03 Determinants and Eigenvalues/10.07 Eigenvalues and eigenvectors]] | Analyzed | low | no | yes | [[#N0182\|View]] |
| N0183 | [[10.08 Diagonalization\|03 Determinants and Eigenvalues/10.08 Diagonalization]] | Analyzed | low | no | yes | [[#N0183\|View]] |
| N0184 | [[Determinant of a Matrix\|03 Determinants and Eigenvalues/Determinant of a Matrix]] | Analyzed | high | no | no | [[#N0184\|View]] |
| N0185 | [[Determinants and oriented area\|03 Determinants and Eigenvalues/Determinants and oriented area]] | Analyzed | low | no | yes | [[#N0185\|View]] |
| N0186 | [[Eigenvalues and principal axes\|03 Determinants and Eigenvalues/Eigenvalues and principal axes]] | Analyzed | low | yes | yes | [[#N0186\|View]] |
| N0187 | [[Eigenvectors and Eigenvalues\|03 Determinants and Eigenvalues/Eigenvectors and Eigenvalues]] | Analyzed | medium | no | no | [[#N0187\|View]] |
| N0188 | [[11.01 Bilinear maps\|04 Inner Products, Quadratic Forms, and Factorizations/11.01 Bilinear maps]] | Analyzed | low | no | no | [[#N0188\|View]] |
| N0189 | [[11.02 Quadratic forms\|04 Inner Products, Quadratic Forms, and Factorizations/11.02 Quadratic forms]] | Analyzed | low | yes | no | [[#N0189\|View]] |
| N0190 | [[11.03 Symmetry\|04 Inner Products, Quadratic Forms, and Factorizations/11.03 Symmetry]] | Analyzed | low | no | no | [[#N0190\|View]] |
| N0191 | [[11.04 Inner products\|04 Inner Products, Quadratic Forms, and Factorizations/11.04 Inner products]] | Analyzed | low | yes | no | [[#N0191\|View]] |
| N0192 | [[11.05 Orthonormal bases\|04 Inner Products, Quadratic Forms, and Factorizations/11.05 Orthonormal bases]] | Analyzed | low | no | yes | [[#N0192\|View]] |
| N0193 | [[11.06 Basis changes\|04 Inner Products, Quadratic Forms, and Factorizations/11.06 Basis changes]] | Analyzed | low | no | no | [[#N0193\|View]] |
| N0194 | [[11.07 Classification\|04 Inner Products, Quadratic Forms, and Factorizations/11.07 Classification]] | Analyzed | low | yes | no | [[#N0194\|View]] |
| N0195 | [[11.08 Indefinite forms\|04 Inner Products, Quadratic Forms, and Factorizations/11.08 Indefinite forms]] | Analyzed | low | no | yes | [[#N0195\|View]] |
| N0196 | [[11.09 Complex inner products\|04 Inner Products, Quadratic Forms, and Factorizations/11.09 Complex inner products]] | Analyzed | low | no | no | [[#N0196\|View]] |
| N0197 | [[Bilinear and quadratic forms - Overview\|04 Inner Products, Quadratic Forms, and Factorizations/Bilinear and quadratic forms - Overview]] | Analyzed | low | no | no | [[#N0197\|View]] |
| N0198 | [[Cauchy-Schwarz inequality\|04 Inner Products, Quadratic Forms, and Factorizations/Cauchy-Schwarz inequality]] | Analyzed | low | yes | no | [[#N0198\|View]] |
| N0199 | [[From row reduction to least squares\|04 Inner Products, Quadratic Forms, and Factorizations/From row reduction to least squares]] | Analyzed | low | yes | no | [[#N0199\|View]] |
| N0200 | [[Hermitian Conjungate\|04 Inner Products, Quadratic Forms, and Factorizations/Hermitian Conjungate]] | Analyzed | high | no | no | [[#N0200\|View]] |
| N0201 | [[Least squares and numerical stability\|04 Inner Products, Quadratic Forms, and Factorizations/Least squares and numerical stability]] | Analyzed | low | yes | no | [[#N0201\|View]] |
| N0202 | [[Singular value decomposition\|04 Inner Products, Quadratic Forms, and Factorizations/Singular value decomposition]] | Analyzed | low | no | yes | [[#N0202\|View]] |
| N0203 | [[Vector and matrix norms\|04 Inner Products, Quadratic Forms, and Factorizations/Vector and matrix norms]] | Analyzed | low | yes | no | [[#N0203\|View]] |
| N0204 | [[Vector spaces and bilinear forms\|04 Inner Products, Quadratic Forms, and Factorizations/Vector spaces and bilinear forms]] | Analyzed | low | no | no | [[#N0204\|View]] |

## Suggestions

### N0141

Note: [[05.01 Geometric vectors|05.01 Geometric vectors]]  
Priority: low · Graph: yes · Manim: yes

Clear, correct introduction to free vectors, components, and position vectors; all numbers check out.

- [Graph] Plot the worked example: points A=(1,-2), B=(4,2), C=(-3,5), D=(0,9) with arrows AB and CD (both (3,4)) and BA, on axes x in [-4,5], y in [-3,10], to show equal vectors with different endpoints.
- [Manim] Animate an arrow (3,4) sliding parallel from A to C (vector unchanged) and then rotating (vector changes), plus the origin moving from O to O'=(1,-2) while point (4,2) stays fixed and its position vector changes from (4,2) to (3,4).
- [Intuition] In "Position vectors depend on an origin", add one sentence stating why $P+\mathbf v$ and $Q-P$ are origin-independent but $P+Q$ is not (shifting the origin by $\mathbf c$ changes the sum of position vectors by $-2\mathbf c$ instead of $-\mathbf c$).
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM as the Obsidian skill requires.

### N0142

Note: [[05.02 Vector operations|05.02 Vector operations]]  
Priority: low · Graph: no · Manim: yes

Well-structured and correct; the figure already covers head-to-tail and parallelogram addition.

- [Manim] Animate scalar multiplication $a\mathbf u$ with $a$ sweeping from 2 through 0 to -1.5, showing length scaling by $|a|$ and direction reversal at $a<0$, followed by the construction of $\mathbf u-\mathbf v$ as the arrow from the head of $\mathbf v$ to the head of $\mathbf u$.
- [Example] In "Subtraction and multiplication by a number", give a numeric instance of the shared-tail rule (for example $\mathbf u=(3,1)$, $\mathbf v=(-1,2)$: the arrow from $(-1,2)$ to $(3,1)$ is $(4,-1)=\mathbf u-\mathbf v$) to make the claim checkable.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0143

Note: [[05.03 Components and bases|05.03 Components and bases]]  
Priority: low · Graph: no · Manim: yes

Clear and correct treatment of components, the basis matrix, and a two-step basis change, with verified worked answers.

- [Manim] Animate the standard grid deforming into the oblique grid of $\mathbf b_1=(2,0)$, $\mathbf b_2=(1,1)$ while the vector $(4,2)$ stays fixed and its label changes from $(4,2)$ to $(1,2)$; this shows "the vector stays the same, the list changes" better than the static figure.
- [Example] In "Change from one basis to another", evaluate $[\mathbf v]_{\mathcal C}=C^{-1}B[\mathbf v]_{\mathcal B}$ explicitly with $C^{-1}=\tfrac12\begin{pmatrix}1&1\\-1&1\end{pmatrix}$ and $B(1,2)^{\mathsf T}=(4,2)^{\mathsf T}$, so the matrix route visibly agrees with the equation-solving route on $(3,-1)$.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0144

Note: [[05.04 Magnitude and unit vectors|05.04 Magnitude and unit vectors]]  
Priority: low · Graph: yes · Manim: no

Correct and readable; norm axioms, normalization, and worked answers all check out.

- [Graph] Plot the unit circles of the three norms named in "What a norm must satisfy": $|x|+|y|=1$ (diamond), $x^2+y^2=1$ (circle), $\max(|x|,|y|)=1$ (square) on $[-1.3,1.3]^2$, to show that "unit vector" depends on the norm.
- [Intuition] After the triangle inequality, state the equality case (for the Euclidean norm, equality iff one vector is a nonnegative multiple of the other) as a limiting-case check.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0145

Note: [[05.05 Dot products|05.05 Dot products]]  
Priority: low · Graph: yes · Manim: yes

Correct derivation of the angle formula and projection with a well-checked worked example ($\theta\approx8.13^\circ$ verified).

- [Graph] Plot the worked example: $\mathbf v=(3,4)$, $\mathbf a=(1,1)$, the line spanned by $\mathbf a$, the projection $\mathbf p=(7/2,7/2)$ and the remainder $\mathbf r=(-1/2,1/2)$ drawn from the head of $\mathbf p$, on $[-1,5]^2$.
- [Manim] Animate $\mathbf v$ rotating around a fixed $\mathbf a$ while the projection foot slides along the line and a readout of $\mathbf v\cdot\mathbf a$ changes sign at $90^\circ$, linking the sign of the dot product to acute, right, and obtuse angles.
- [Simplify] In "Angle and orthogonality", show the one-line expansion $(\mathbf u-\mathbf v)\cdot(\mathbf u-\mathbf v)=\mathbf u\cdot\mathbf u-2\mathbf u\cdot\mathbf v+\mathbf v\cdot\mathbf v$ using bilinearity and symmetry instead of only saying "expanding by the component definition".
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0146

Note: [[05.06 General bases|05.06 General bases]]  
Priority: low · Graph: no · Manim: no

Correct and well-motivated derivation of the Gram matrix with a numerically verified oblique-basis example.

- [Intuition] In "Components do not specify basis geometry", the example "components in $\mathcal B$ start with $(1,0,\ldots)$" is abstract; use a concrete 2D basis such as $\mathbf b_1=(2,0)$, $\mathbf b_2=(0,1)$ so the reader sees $[\mathbf b_1]_{\mathcal B}=(1,0)$ but $\|\mathbf b_1\|^2=4$.
- [Links] Add forward links to [[11.06 Basis changes]] (the Gram matrix transforms as $P^{\mathsf T}GP$) and [[11.04 Inner products]], where the Gram matrix reappears.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0147

Note: [[05.07 Linear combinations|05.07 Linear combinations]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; span, independence, and uniqueness are well explained with a checked example.

- [Graph] 3D plot of the plane $y=x+z$ spanned by $\mathbf a=(1,1,0)$ and $\mathbf b=(0,1,1)$ for $s,t\in[-1,4]$, with $\mathbf w=(2,5,3)$ lying in it and $\mathbf z=(2,6,3)$ visibly off the plane.
- [Example] In "Common errors", give an explicit example of three pairwise nonparallel but dependent vectors, for example $(1,0),(0,1),(1,1)$ with $(1,0)+(0,1)-(1,1)=\mathbf0$.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0148

Note: [[05.08 Lines and planes|05.08 Lines and planes]]  
Priority: low · Graph: yes · Manim: no

Correct and clear; the normal vector $(1,-1,1)$, the intersection point $(3,1,3)$, and both worked answers check out.

- [Graph] 3D plot of the worked example: the plane $x+y+z=7$ over $x,y\in[-1,5]$ and the line $(1,2,0)+t(2,-1,3)$ for $t\in[-0.5,2]$, marking the intersection $(3,1,3)$.
- [Correctness] "See [[05.07 Linear combinations]] for the difference between a span through the origin and its translated copy" points to a note that never discusses translated copies; link [[10.01 Vector spaces]] (which mentions translated lines and affine sets) or drop the claim.
- [Example] In "Other intersection types", add a short skew-lines example (for example $(0,0,0)+s(1,0,0)$ and $(0,1,1)+t(0,1,0)$) showing that the component equations have no solution.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0149

Note: [[10.01 Vector spaces|10.01 Vector spaces]]  
Priority: low · Graph: no · Manim: no

Concise and correct axiomatic introduction with a well-chosen plane-in-$\mathbb R^3$ example.

- [Example] In "What makes a vector space", work one non-arrow example briefly (for example polynomials of degree at most 2 with basis $1,t,t^2$, dimension 3), since the text claims polynomials and functions are vectors but never shows one.
- [Simplify] The dimension paragraph compresses the exchange (Steinitz) argument into one sentence; either name it and link a proof, or mark it explicitly as a sketch.
- [Structure] The figure shows $w=u+v$ in $\mathbb R^2$ but sits inside the $\mathbb R^3$ plane example; give it its own short subsection so the two bases are not confused.

### N0150

Note: [[Basis change|Basis change]]  
Priority: high · Graph: no · Manim: no

A terse formula stub without frontmatter title, TLDR, or explanation, with a typo and confusing index conventions.

- [Correctness] In "Basis change on Covector", ${e'}_j = B^i_j\ a_i$ uses an undefined $a_i$; it should read ${e'}_j = B^i_j\ e_i$.
- [Simplify] State explicitly that upper-index $e^j$ denotes the dual (covector) basis and lower-index $e_j$ the basis vectors; as written, the headings "Basis change on Vector/Covector" suggest that basis vectors and vector components transform with the same matrix, which would contradict invariance of $v=v^je_j$.
- [Structure] Add frontmatter with a quoted title and a TLDR, define $B$ (which basis is expressed in which), and remove the leading blank line.
- [Example] Add a 2D example (for example $e'_1=2e_1$, $e'_2=e_1+e_2$) showing basis vectors transforming with $B$, components with $B^{-1}$, and $v^je_j$ unchanged.
- [Links] Link [[05.03 Components and bases]], [[11.06 Basis changes]] and [[18.01 Dual spaces]].

### N0151

Note: [[Cross product|Cross product]]  
Priority: high · Graph: yes · Manim: no

Short formula note with a wrong index formula and a misleading one-line definition.

- [Correctness] The index form $c_i = ε_{ijk} \, a_i \, b_j$ is wrong (free index $i$ repeated, $k$ dangling); it must be $c_i=\varepsilon_{ijk}\,a_j\,b_k$.
- [Correctness] "Determinant of two 3D vectors" is not a valid definition (a determinant needs three rows); say that $\mathbf a\times\mathbf b$ is the formal determinant with rows $(\mathbf e_x,\mathbf e_y,\mathbf e_z)$, $\mathbf a$, $\mathbf b$, i.e. its components are $2\times2$ minors.
- [Simplify] The skew matrix $[a]$ uses $a_1,a_2,a_3$ while the component form uses $a_x,a_y,a_z$; use one convention, and state magnitude $|a||b|\sin\theta$, orthogonality to both inputs, anticommutativity, and the right-hand rule.
- [Graph] 3D plot of $\mathbf a=(2,0,0)$, $\mathbf b=(1,2,0)$ and $\mathbf a\times\mathbf b=(0,0,4)$ with the shaded parallelogram of area 4.
- [Structure] Add a TLDR and quote the Unicode title; link [[Vector calculations and geometric products]] for the full treatment.

### N0152

Note: [[Hadamard product|Hadamard product]]  
Priority: low · Graph: no · Manim: no

Minimal but correct definition stub.

- [Simplify] The title writes $a\circ b$ for vectors but the formula uses matrix indices $c_{ij}$; state that both inputs must have the same shape, give the vector form $c_i=a_ib_i$ with one small numeric example, and add a TLDR.

### N0153

Note: [[Length of Vector|Length of Vector]]  
Priority: low · Graph: no · Manim: no

Minimal correct stub that duplicates 05.04.

- [Links] State that $a_ia_i$ assumes an orthonormal basis, link [[05.04 Magnitude and unit vectors]] and [[05.06 General bases]] (Gram-matrix form), fix "Euclidian" to "Euclidean", and add a TLDR.

### N0154

Note: [[Linear maps functionals and complexification|Linear maps functionals and complexification]]  
Priority: low · Graph: no · Manim: yes

Clear and correct; linearity, kernel, isomorphism, and complexification are well explained, and the rotation eigenvector example checks out.

- [Manim] Animate $J(x,y)=(-y,x)$ rotating the plane by $90^\circ$, showing that no real direction is mapped onto its own line, which motivates the complex eigenvectors $(1,\mp i)$.
- [Intuition] In "Complexification of a real space", say explicitly that the scalar rule is ordinary complex multiplication applied to vector "real and imaginary parts", and that for $V=\mathbb R$ it reproduces $\mathbb C$ (as practice 2 shows).
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0155

Note: [[Scalar Product|Scalar Product]]  
Priority: high · Graph: no · Manim: no

Formula stub whose index formula describes the Hadamard product, not the scalar product.

- [Correctness] $c_i = a_i\,b_i$ defines a vector (the component-wise product), not the scalar product; the dot product is $c=a_ib_i=\sum_i a_ib_i$ with no free index, and writing $c=a\,b$ without a dot clashes with the geometric product $ab$ in [[Vector product]].
- [Correctness] The angle formula is restricted to "$\forall a,b\in\mathbb{R}^2$" although it holds in any $\mathbb R^n$ with an orthonormal basis; generalize it and require $a,b\neq0$ for the $\cos\gamma$ formula.
- [Links] Add a TLDR and link [[05.05 Dot products]] for the derivation and projections.

### N0156

Note: [[Unit Vector|Unit Vector]]  
Priority: low · Graph: no · Manim: no

One-line correct formula stub.

- [Links] Add the condition $a\neq0$, a TLDR, and a link to [[05.04 Magnitude and unit vectors]], which covers the topic fully.

### N0157

Note: [[Vector Addition|Vector Addition]]  
Priority: low · Graph: no · Manim: no

Correct minimal stub.

- [Links] Add a TLDR, write the component identity with $a+b$ on the left, and link [[05.02 Vector operations]] for the geometric head-to-tail rule.

### N0158

Note: [[Vector calculations and geometric products|Vector calculations and geometric products]]  
Priority: low · Graph: yes · Manim: no

Clear and correct survey of dot, cross, and triple products; all worked numbers (area 2, volume 12, tetrahedron 2) check out.

- [Links] Next to the existing [[Oblique bases and vector equations]] link, also point to [[05.06 General bases]], which derives the Gram-matrix correction for dot products in non-orthonormal bases.
- [Graph] 3D plot of the worked example: triangle $A=(1,0,0)$, $B=(3,1,0)$, $C=(1,2,0)$, the edge vectors, the normal $(0,0,4)$, and the parallelepiped spanned with $\mathbf w=(0,0,3)$.
- [Example] In "Multiple products", add one numeric check comparing $\mathbf u\times(\mathbf v\times\mathbf w)$ with $(\mathbf u\times\mathbf v)\times\mathbf w$ to show non-associativity concretely.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0159

Note: [[Vector product|Vector product]]  
Priority: high · Graph: no · Manim: yes

Informal geometric-algebra note with several sign/notation errors and a title that clashes with the standard meaning of "vector product" (cross product).

- [Correctness] "with $xy = -xy$ and $xx = 1$" is wrong as written; it should be $e_xe_y=-e_ye_x$ (distinct basis vectors) and $e_xe_x=1$.
- [Correctness] The bivector basis lines $e_z e_x = -(e_z e_x) = j$ and $e_y e_z = -(e_y e_z) = k$ assert $X=-X$; they should read $e_ze_x=-e_xe_z=j$ and $e_ye_z=-e_ze_y=k$.
- [Correctness] The overbrace labels the bivector part "cross product"; it is the wedge product $a\wedge b$, whose components equal those of $a\times b$ only through the Hodge dual ($a\wedge b=I\,(a\times b)$ with $I=e_xe_ye_z$).
- [Structure] Rename to "Geometric product ab" (the vault's [[Cross product]] and [[Vector calculations and geometric products]] use "vector product" for $\times$), add a quoted title and TLDR, and fix "orthorgonal", "Qaternion", "an quaternion".
- [Manim] Animate multiplying a 2D vector by the rotor $\cos\theta+\sin\theta\,e_xe_y$ to show the bivector acting like $i$ and rotating the vector, which explains the "2D product returns a complex number" claim.

### N0160

Note: [[Vectors - Overview|Vectors - Overview]]  
Priority: low · Graph: no · Manim: no

Clean topic hub with valid links and clear outcomes.

- [Structure] No content change needed; only save the file without the UTF-8 BOM.

### N0161

Note: [[10.02 Linear maps|10.02 Linear maps]]  
Priority: low · Graph: no · Manim: yes

Clear and correct; kernel, image, rank-nullity proof, and the worked example (kernel $t(-1,1,-1)$, preimage line) all check out.

- [Manim] Animate $T(x,y,z)=(x+y,y+z)$ flattening $\mathbb R^3$ onto $\mathbb R^2$: the kernel line $t(-1,1,-1)$ collapses to the origin while parallel lines (preimages such as $(2,0,3)+t(-1,1,-1)$) each collapse to one output point.
- [Example] In the worked example, also write the matrix $\begin{pmatrix}1&1&0\\0&1&1\end{pmatrix}$ and note that the kernel is its null space, linking forward to [[10.03 Matrices]] and [[10.04 Linear systems]].
- [Intuition] After the rank-nullity proof, add one sentence of geometric meaning: every input dimension either survives into the image or is lost into the kernel, never both.

### N0162

Note: [[10.03 Matrices|10.03 Matrices]]  
Priority: low · Graph: no · Manim: yes

Clear and correct; the worked example with different input and output bases and the composition example are verified.

- [Example] In "Change of basis", verify $A_{\rm new}=Q^{-1}A_{\rm old}P$ on the earlier worked example: $A_{\rm old}=\begin{pmatrix}1&2\\3&1\end{pmatrix}$, $P=\begin{pmatrix}1&1\\1&-1\end{pmatrix}$, $Q=\begin{pmatrix}1&1\\0&1\end{pmatrix}$ gives exactly $\begin{pmatrix}-1&-3\\4&2\end{pmatrix}$, tying the two halves of the note together.
- [Manim] Animate the grid under $A=\begin{pmatrix}1&1\\0&1\end{pmatrix}$ then $B=\operatorname{diag}(2,3)$ versus the reverse order, showing that $BA\neq AB$ as different final grids.
- [Intuition] In "Coordinates come before entries", add a mnemonic for $[T]_{C\leftarrow B}$: "columns are images of input basis vectors, written in output coordinates".

### N0163

Note: [[10.04 Linear systems|10.04 Linear systems]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; the worked family of solutions and the translated-kernel argument are well explained.

- [Graph] 3D plot of the three planes $x+y+z=2$, $2x+3y+z=5$, $3x+4y+2z=7$ over $x,y\in[-3,3]$, together with the common line $(1,1,0)+t(-2,1,1)$, to show geometrically why rank 2 gives a one-parameter family.
- [Example] Next to "Pivots and free variables", add the 2D picture-level contrast of the three cases (two crossing lines, two parallel lines, one repeated line), mirroring the practice problems.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0164

Note: [[10.05 Inverses|10.05 Inverses]]  
Priority: low · Graph: no · Manim: yes

Clear and correct; the Gauss-Jordan example, the solution $(1,1)^T$, and the invertibility criteria check out.

- [Manim] Animate the unit square under $A=\begin{pmatrix}2&1\\1&1\end{pmatrix}$ and then under $A^{-1}=\begin{pmatrix}1&-1\\-1&2\end{pmatrix}$ returning to the square, and contrast with the singular $\begin{pmatrix}1&2\\2&4\end{pmatrix}$ collapsing it onto a line that cannot be undone.
- [Example] In "Useful rules and limitations", give the concrete counterexample for sums: $A=I$ and $B=-I$ are invertible but $A+B=0$ is not.

### N0165

Note: [[10.09 Real and complex matrices|10.09 Real and complex matrices]]  
Priority: low · Graph: no · Manim: no

Correct and compact treatment of adjoints, Hermitian and unitary matrices with a verified diagonalization of $H$.

- [Simplify] In the orthogonality proof for Hermitian eigenvectors, write the two lines explicitly: $\langle Hu,v\rangle=\overline\lambda\langle u,v\rangle=\lambda\langle u,v\rangle$ and $\langle u,Hv\rangle=\mu\langle u,v\rangle$, so the reader sees where reality of $\lambda$ enters.
- [Example] After the spectral theorem, write the spectral sum $H=3\,u_1u_1^*+1\,u_2u_2^*$ for the worked example (with $u_1,u_2$ the normalized columns of $U$) to make the theorem concrete.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0166

Note: [[10.10 Block matrices|10.10 Block matrices]]  
Priority: low · Graph: no · Manim: no

Correct and well-derived Schur complement and block inverse; the $3\times3$ example ($\det M=8$, $M^{-1}$) checks out numerically.

- [Intuition] Add one sentence on where Schur complements appear (eliminating internal nodes of a circuit, conditioning a Gaussian, static condensation) to motivate the abstract elimination.
- [Simplify] The block-triangular determinant rule is justified only by "grouping terms"; prove it via $\begin{pmatrix}A&B\\0&S\end{pmatrix}=\begin{pmatrix}A&0\\0&I\end{pmatrix}\begin{pmatrix}I&A^{-1}B\\0&S\end{pmatrix}$ or mark it as quoted.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0167

Note: [[Coordinate matrices and diagonalization|Coordinate matrices and diagonalization]]  
Priority: medium · Graph: yes · Manim: yes

Correct lecture transcription (all checked numbers agree) but cluttered by notebook commentary and loosely connected sections.

- [Structure] Remove transcription remarks that do not teach ("The date appears to have been overwritten", "interchanged in the notebook", "The caption on the handwritten matrix says determinant", "the notebook gives $(0,-2)$"), and move the stray "**4.**" tridiagonal-determinant exercise out of "Vector spaces and subspaces" into its own section.
- [Example] "Stretching along a basis direction" sets up $T(-2,2)$ but never finishes: $(-2,2)=-a-b$ with $a=(1,1)$, $b=(1,-3)$, so $T(-2,2)=-a-2b=(-3,5)$; also note that this is the same map as in "Two coordinate systems" ($A=\tfrac14\begin{pmatrix}5&-1\\-3&7\end{pmatrix}$ fixes $(1,1)$ and doubles $(-1,3)$).
- [Graph] Plot the eigenlines $y=x$ and $y=-3x$ and the image of the unit square under $A=\tfrac14\begin{pmatrix}5&-1\\-3&7\end{pmatrix}$ on $[-2,3]^2$.
- [Manim] Animate the two equivalent paths of "Two coordinate systems": convert $(2,6)$ to blue coordinates with $P^{-1}$, stretch with $D$, convert back with $P$ to $(1,9)$, versus applying $A$ directly.
- [Structure] Headings jump from H2 to H5 ("#####"); use H3 for the lecture sections so the outline renders properly.

### N0168

Note: [[Gram–Schmidt and QR factorization problems|Gram–Schmidt and QR factorization problems]]  
Priority: medium · Graph: yes · Manim: yes

Correct Gram-Schmidt and QR examples (verified), but mixed with unrelated material and transcription remarks.

- [Structure] Delete the remarks about the source ("The boxed vector is faint here...", "The source drops signs...", "The sketch shows...") and move "Change-of-basis review" and the evaluation map $T(p)=(p(0),p(1))$ to a change-of-basis note; they are unrelated to the title.
- [Simplify] In "QR factorization example", "The previous example gives $R=\begin{pmatrix}\sqrt2&4\sqrt2\\0&1\end{pmatrix}$" is the same example simplified; say "Simplifying, $R=\ldots$" and verify $QR=A$ explicitly.
- [Manim] Animate Gram-Schmidt on $x_1=(1,1,1)$, $x_2=(6,4,5)$, $x_3=(3,6,9)$ in 3D: subtract the projection onto $y_1$, then onto the plane of $y_1,y_2$, ending with $y_3=(-3/2,-3/2,3)$.
- [Graph] 3D plot of the original vectors and the orthonormal $z_1,z_2,z_3$ for the same example, with axes $[-2,9]$.
- [Structure] Headings jump from H2 to H5; use H3 for lecture sections.

### N0169

Note: [[LU factorization and matrix practice|LU factorization and matrix practice]]  
Priority: medium · Graph: no · Manim: yes

Arithmetic is correct throughout, but the note is a grab bag (kernels, LU, currency, change of basis, determinants, eigenvalues) with a misdirected cross-note anchor and an unfinished section.

- [Correctness] "On [[Linear maps, inverses, and determinants#Determinants by elimination|the section on Determinants by elimination]] the same symbol denotes the determinant of that submatrix" points to the wrong heading; $M_{ij}$ is defined under [[Linear maps, inverses, and determinants#Cofactors]].
- [Simplify] The first LU example uses $R_2\gets-3R_1+4R_2$, which scales a row and yields the non-unit $L=\begin{pmatrix}1&0\\3/4&1/4\end{pmatrix}$; also show the standard unit-lower-triangular result $L=\begin{pmatrix}1&0\\3/4&1\end{pmatrix}$, $U=\begin{pmatrix}4&-16\\0&4\end{pmatrix}$ so it matches the later "Shortcut" rule.
- [Example] "Changing the matrix of a transformation" is an empty stub; complete it with $A_{\rm J}=P^{-1}AP$ for Jennifer's basis $P=\begin{pmatrix}2&-1\\1&1\end{pmatrix}$ and a concrete $A$ (for example a $90^\circ$ rotation).
- [Manim] Animate the standard grid morphing into Jennifer's grid ($b_1=(2,1)$, $b_2=(-1,1)$) while the fixed vector $(3,2)$ acquires coordinates $(5/3,1/3)$.
- [Structure] Split into an LU note and move determinants, eigenvalues, and diagonalization to the notes in "03 Determinants and Eigenvalues"; remove meta remarks such as "The page confirms $A=LU$" and "The handwritten matrix shows that row as $(0,0,1)$".

### N0170

Note: [[Linear algebra - Catalogue Guide|Linear algebra - Catalogue Guide]]  
Priority: low · Graph: no · Manim: no

Useful reading-route hub with a correct worked orientation example; one broken link and a misleading title.

- [Correctness] [[Planned Topics#4. Linear algebra|the detailed catalogue]] is broken: no note named "Planned Topics" exists in the vault; retarget it or remove it.
- [Structure] The frontmatter title is "Overview", which neither matches the file name nor distinguishes it from [[Linear algebra - Overview]]; use "Linear algebra — catalogue guide" and remove the UTF-8 BOM.

### N0171

Note: [[Linear algebra - Overview|Linear algebra - Overview]]  
Priority: low · Graph: no · Manim: no

Clean topic hub with valid links and clear outcomes.

- [Structure] No content change needed; only save the file without the UTF-8 BOM.

### N0172

Note: [[Linear maps, inverses, and determinants|Linear maps, inverses, and determinants]]  
Priority: medium · Graph: no · Manim: yes

Mathematically correct (all checked numbers agree) but hard to follow: homework parts are out of order, exercises are left unanswered, and transcription noise is retained.

- [Structure] Remove non-mathematical transcription notes ("The heading includes 'Happy Birthday!'", "a tic-tac-toe sketch marked 'Draw'", "The notebook labels this...") and reorder "Homework 4", whose parts currently appear as 3(a), 3(b), 5(d), (c), (b), (a).
- [Example] The linearity test of $T(x,y)=(x-1,2y)$ is set up but never concluded; add $T(0,0)=(-1,0)\neq0$, so $T$ is not linear.
- [Example] Answer the posed exercise "find a nonzero $2\times2$ matrix and distinct $u,v$ with $Au=Av$", for example $A=\begin{pmatrix}1&1\\1&1\end{pmatrix}$, $u=(1,0)$, $v=(0,1)$.
- [Manim] Animate the unit square under $A=\begin{pmatrix}3&1\\1&2\end{pmatrix}$ (the matrix of Fig. 1) becoming a parallelogram of area $\det A=5$, linking "Determinant and area" to the opening example.
- [Structure] Headings jump from H2 to H5; use H3 for lecture sections.

### N0173

Note: [[Linear systems and pivot exchange|Linear systems and pivot exchange]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; elimination, the exchange-method coefficients, and the Cramer check ($x=(3,2)$) are verified.

- [Graph] 3D plot of the three planes of the first worked system ($x+y+z=6$, $2x+3y+z=11$, $x+2y+3z=14$) meeting at the single point $(1,2,3)$, contrasted with the rank-1 system of practice 2.
- [Example] In "Exchange method", show the tableau (rows $y_1,y_2$, columns $x_1,x_2$) before and after the first pivot, since the text mentions a tableau but never draws one.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0174

Note: [[Matrices and linear maps|Matrices and linear maps]]  
Priority: low · Graph: no · Manim: yes

Clear and correct introduction; the shear/stretch composition example and practice answers check out.

- [Manim] Animate the unit square under $S$ then $D$ versus $D$ then $S$, ending at different parallelograms, so "$DS\neq SD$" is seen rather than computed.
- [Intuition] In "Columns and square matrices", add one sentence that $Ax=x_1a_1+\cdots+x_na_n$ (column picture) and $y_i=\text{row}_i\cdot x$ (row picture) are the same product read two ways.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0175

Note: [[Row reduction and the four fundamental subspaces|Row reduction and the four fundamental subspaces]]  
Priority: medium · Graph: yes · Manim: yes

Calculations are correct, but several internal section links point to the wrong sections and some exercises are left unfinished.

- [Correctness] Wrong internal anchors: "The portfolio vectors on [[#Reduced row echelon form]]" (they are introduced under "Span and dependence"), "For the matrix on the section on Homework 2" (the matrix is in "Homogeneous systems"), and three references to [[#Forward elimination and back substitution]] for the matrix $B$, which is defined under "Rectangular matrix".
- [Example] Finish the contraposition span test: the three generators are dependent ($\det=0$) and span the plane $x+y=z$; $(3,2,5)=\tfrac52(1,1,2)+\tfrac12(1,-1,0)$ lies in it.
- [Example] The Gauss-Jordan reduction of the augmented matrix with rows $(3,1\mid107)$ and $(1,2\mid64)$ is started but not carried out; complete it to $(30,17)$.
- [Graph] Plot the row picture (lines $3a+b=107$ and $a+2b=64$ meeting at $(30,17)$) beside the column picture ($30(3,1)+17(1,2)=(107,64)$).
- [Manim] Animate the "magic carpet and hoverboard" column picture: scale $(3,1)$ by 30, then add $17(1,2)$ head to tail to reach $(107,64)$.
- [Structure] "The four fundamental subspaces" gives only the column and null space dimensions; add row space ($r$), left null space ($m-r$), and the orthogonality pairs, or link [[Subspaces, eigenvectors, and orthogonal projections#The four fundamental subspaces]].

### N0176

Note: [[Scaling Matrices|Scaling Matrices]]  
Priority: high · Graph: yes · Manim: no

Unstructured note with a wrong definition of a scaling matrix and homogeneous matrices presented without explanation as the $\mathbb R^n$ case.

- [Correctness] "A matrix $M$ is scaling a vector field, if it's Determinant is not equal to 1" is wrong: $\operatorname{diag}(2,1/2)$ scales both axes yet has determinant 1, and a rotation combined with a scaling has determinant $\ne1$ without being a scaling matrix; define a scaling matrix as $\operatorname{diag}(s_x,s_y,\ldots)$ and say $|\det|$ is the volume factor.
- [Correctness] "Scaling Matrix in $ℝ^2$" shows a $3\times3$ matrix; the linear scaling on $\mathbb R^2$ is $\begin{pmatrix}s_x&0\\0&s_y\end{pmatrix}$, and the $3\times3$ form acts on homogeneous coordinates (same issue for the $\mathbb R^3$ and $\mathbb R^4$ sections).
- [Simplify] Drop the claim that 4D scaling is "useful in physics (relativity)" (Lorentz transformations are not scalings), and note that a negative $s_i$ gives the reflection mentioned in the definition section.
- [Graph] Plot the unit square and its image under $\operatorname{diag}(2,0.5)$ and $\operatorname{diag}(-1,1)$ on $[-2,2.5]^2$ to show non-uniform scaling and reflection.
- [Structure] Add frontmatter with a quoted title and a TLDR, fix "it's" to "its", and link [[Skewing Matrices]].

### N0177

Note: [[Skewing Matrices|Skewing Matrices]]  
Priority: medium · Graph: yes · Manim: yes

Two bare homogeneous shear matrices with no explanation, frontmatter, or TLDR.

- [Structure] Add frontmatter and a TLDR, state that these $3\times3$ matrices act on homogeneous 2D coordinates, give the plain linear form $\begin{pmatrix}1&\tan\alpha\\0&1\end{pmatrix}$, and define $\alpha$ as the angle by which vertical lines tilt.
- [Intuition] State that $\det S_\alpha=1$, so shears preserve area, which contrasts with the determinant-based definition in [[Scaling Matrices]].
- [Graph] Plot the unit square and its image under $S_\alpha$ with $\alpha=30^\circ$ on $[-0.5,2]\times[-0.5,1.5]$.
- [Manim] Animate $\alpha$ increasing from $0^\circ$ to $45^\circ$ while the square shears into a parallelogram of constant area.

### N0178

Note: [[Subspaces, eigenvectors, and orthogonal projections|Subspaces, eigenvectors, and orthogonal projections]]  
Priority: medium · Graph: yes · Manim: no

Correct content but with three misdirected section links, unfinished exercises, and no subspace-projection formula despite the title.

- [Correctness] Wrong anchors: "The conditions on [[#Vector spaces and subspaces]] for injectivity" (they are listed under "The four fundamental subspaces"); "as on [[Coordinate matrices and diagonalization#Stretching along a basis direction]]" for the transpose matrix (it is under "Coordinate representation of a matrix"); "[[#Orthogonal projections|the section on Final review. Orthogonal projections]]" for inner-product preservation (the proof is under "Orthonormal sets", and "Final review" is not a heading).
- [Structure] The TLDR and title promise projection onto a subspace, but no formula appears; add $P=A(A^{\mathsf T}A)^{-1}A^{\mathsf T}$, or $P=QQ^{\mathsf T}$ for orthonormal columns, with a small example.
- [Example] Complete the left-open exercises: the standard matrix from the three images of $(1,2,3)$, $(2,3,4)$, $(0,2,3)$ (the input matrix has determinant 1), and the matrix of $T$ in the basis $\mathcal B$.
- [Graph] 3D plot of a plane $C(A)$ in $\mathbb R^3$ with its orthogonal complement line $N(A^{\mathsf T})$, and a vector $b$ split into its projection and residual.
- [Structure] Headings jump from H2 to H5; use H3 for lecture sections.

### N0179

Note: [[Symmetrization and Antisymmetrization|Symmetrization and Antisymmetrization]]  
Priority: medium · Graph: no · Manim: no

Useful decomposition note with a correct worked example and code, but several index and notation errors.

- [Correctness] "Any real square matrix $A_{ii}$" and "$A_{ii}= A_{(ij)} + A_{[ij]}$" use a diagonal index; both should be $A_{ij}$.
- [Correctness] The general symmetrization formula is written with square brackets $A_{[i_1 i_2 \dots i_n]}$; it must use round brackets $A_{(i_1 i_2 \dots i_n)}$, since square brackets denote antisymmetrization in this note.
- [Correctness] "$\omega_{ij} = \epsilon_{ijk},\omega^k$" has a stray comma and is not an antisymmetrization formula; write $\omega_{ij}=\epsilon_{ijk}\omega^k$ with inverse $\omega^k=\tfrac12\epsilon^{kij}\omega_{ij}$ and say it identifies 3D antisymmetric matrices with axial vectors.
- [Structure] Remove the raw `{\color{brown} \operatorname{sgn}(\sigma)}` (operators stay uncolored per the vault rules), add frontmatter with a quoted title and TLDR, and drop the emoji markers.
- [Links] Link [[11.03 Symmetry]], which treats the same decomposition for bilinear forms.

### N0180

Note: [[Vectors, projections, lines, and planes|Vectors, projections, lines, and planes]]  
Priority: medium · Graph: yes · Manim: no

Calculations are correct throughout (distances, skew lines, angles verified), but the note carries a wrong physical-quantity table, transcription remarks, and an unfinished last section.

- [Correctness] The "Physical quantities" table lists $\lVert\mechanical{\mathbf v}\rVert$ as speed in $\unit{m\,s^{-1}}$, but the note uses $\mathbf v$ only as a generic geometric vector and never as velocity; remove the table (and the macro use) from this mathematics note.
- [Structure] Remove notebook commentary ("The handwritten expansion appears to omit the square...", "The written vector appears to end in $+1$...", "even though the handwritten entry resembles $c_2$", "a handwritten line gives a different point").
- [Structure] "Cylinders and quadric surfaces" ends after the ellipse and hyperbola; either add the quadric surfaces (ellipsoid, hyperboloids, paraboloids) or retitle the section as a 2D conic review.
- [Example] In "Examples", finish the angle: $\cos\theta=10/\sqrt{210}$ gives $\theta\approx46.4^\circ$.
- [Graph] 3D plot of the skew lines $(1+t,1+6t,2t)$ and $(1+2s,5+15s,-2+6s)$ with the common normal $\langle6,-2,3\rangle$ and the shortest connecting segment of length 2.

### N0181

Note: [[10.06 Determinants and trace|10.06 Determinants and trace]]  
Priority: low · Graph: no · Manim: yes

Clear and correct; the elimination example ($\det A=-7$, checked by expansion) and the invariance proofs are sound.

- [Intuition] Give trace a geometric meaning, as determinant has one: $\det(I+tA)=1+t\operatorname{tr}A+O(t^2)$, so trace is the first-order rate of volume change (the divergence of $x\mapsto Ax$).
- [Manim] Animate the unit square under $\begin{pmatrix}1&t\\0&1\end{pmatrix}$ (area constant, $\det=1$) and then under a reflection, showing the determinant's sign flip as an orientation reversal of the labelled square.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0182

Note: [[10.07 Eigenvalues and eigenvectors|10.07 Eigenvalues and eigenvectors]]  
Priority: low · Graph: no · Manim: yes

Clear and correct; the worked example, the multiplicity bound, and the repeated-root and rotation counterexamples are well chosen.

- [Manim] Animate many unit vectors under $A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$ moving to their images, highlighting that only those on $y=x$ (scaled by 3) and $y=-x$ (fixed) stay on their own lines; the static Fig. 10.2 shows only the end state.
- [Example] For $J=\begin{pmatrix}2&1\\0&2\end{pmatrix}$, state both multiplicities explicitly (algebraic 2, geometric 1) to connect the counterexample to the displayed inequality.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0183

Note: [[10.08 Diagonalization|10.08 Diagonalization]]  
Priority: low · Graph: no · Manim: yes

Clear and correct; the diagonalization of $A$, the formula for $A^k$, and the failure cases are verified.

- [Manim] Animate iterating $x_{k+1}=Ax_k$ for $A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$ from $x_0=(1,0)$: the component along $(1,1)$ grows as $3^k$ while the $(1,-1)$ component stays fixed, so the direction approaches the dominant eigenline.
- [Intuition] Add a one-sentence application motivating $A^k=PD^kP^{-1}$ (for example decoupling a linear recurrence or coupled oscillators), since "why diagonalize" is not stated.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0184

Note: [[Determinant of a Matrix|Determinant of a Matrix]]  
Priority: high · Graph: no · Manim: no

Short note with several wrong formulas and misleading geometric claims; it should be rewritten or reduced to links to the correct notes.

- [Correctness] The $3\times3$ formula $aei + bdi + ceg - afh - bdi - ceg$ is wrong (it cancels to $aei-afh$); the rule of Sarrus gives $aei+bfg+cdh-ceg-bdi-afh$.
- [Correctness] The cofactor expansion $a_1\det(M_{11})-a_2\det(M_{12})+\cdots+(-1)^n a_n\det(M_{nn})$ is wrong in its last term and sign; it should be $\det A=\sum_{j=1}^n(-1)^{1+j}a_{1j}\det M_{1j}$ (Laplace expansion, not "Levi-Civita's expansion").
- [Correctness] "$\det A=1$ ... representing rotations" and "$\det A\notin\{0,1,-1\}$ indicates scaling or skewing" are wrong: shears have determinant 1, and $\operatorname{diag}(2,1/2)$ scales with determinant 1; determinant only fixes the signed volume factor. Likewise in the second callout, $\det R=\pm1$ does not make a matrix orthogonal, so say "for orthogonal matrices".
- [Correctness] "Volume of a Vector Space" puts a formal row $(\mathbf i,\mathbf j,\mathbf k,\ldots)$ into the matrix; the volume spanned by $n$ vectors in $\mathbb R^n$ is $|\det[a\;b\;c\;\cdots]|$ of the $n\times n$ matrix of their components, and "a positive determinant indicates that vectors form a volume" should say "nonzero".
- [Correctness] "Orientation of a Vector Space" uses the determinant of an $n\times(n+1)$ matrix, which is undefined; orientation is the sign of the $n\times n$ determinant of the basis relative to a reference basis.
- [Structure] Add frontmatter with a quoted title and TLDR, remove the leading blank line, and link [[10.06 Determinants and trace]] and [[Determinants and oriented area]], which treat the topic correctly.

### N0185

Note: [[Determinants and oriented area|Determinants and oriented area]]  
Priority: low · Graph: no · Manim: yes

Clear and correct; the axioms, elimination example ($\det A=1$, cofactor check), and the conditioning caveat are well done.

- [Manim] Animate $u=(1,0)$ fixed while $v$ rotates once around the origin, with the parallelogram shaded and a readout of $\det(u,v)$ passing through zero (collinear) and changing sign, illustrating oriented area.
- [Example] In "Degeneracy and numerical limits", quantify the "very large and very small stretches" example, for example $\operatorname{diag}(10^{6},10^{-6})$ with $\det=1$ but condition number $10^{12}$.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0186

Note: [[Eigenvalues and principal axes|Eigenvalues and principal axes]]  
Priority: low · Graph: yes · Manim: yes

Clear and correct; the principal-axis example (semiaxes $1/\sqrt3$ and $1$), generalized problem, and power-iteration remarks check out.

- [Graph] Plot the level set $2x_1^2+2x_1x_2+2x_2^2=1$ (ellipse) with principal axes along $(1,1)$ and $(1,-1)$ and semiaxes $1/\sqrt3$ and $1$, plus the hyperbola $y_1^2-y_2^2=1$ for the indefinite case, on $[-1.5,1.5]^2$.
- [Manim] Animate power iteration for $A=\operatorname{diag}(3,1)$ from $(1,1)$: the normalized iterate swings toward the first axis with angle ratio $1/3^k$.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0187

Note: [[Eigenvectors and Eigenvalues|Eigenvectors and Eigenvalues]]  
Priority: medium · Graph: no · Manim: no

Three-sentence stub with imprecise statements and no frontmatter.

- [Correctness] "When eigenvectors and eigenvalues are imaginary, then every non-zero vector will change" is imprecise: the relevant case is non-real complex eigenvalues (for example $(1\pm i)/\sqrt2$ for a $45^\circ$ rotation, not purely imaginary), and the correct conclusion is that no nonzero real vector stays on its own line.
- [Simplify] Replace "the vectors who are not rotated" with the definition $Av=\lambda v$, $v\neq0$, noting that a negative $\lambda$ reverses the vector, and add frontmatter, a TLDR, and links to [[10.07 Eigenvalues and eigenvectors]] and [[Eigenvalues and principal axes]].

### N0188

Note: [[11.01 Bilinear maps|11.01 Bilinear maps]]  
Priority: low · Graph: no · Manim: no

Clear and correct; the nonsymmetric worked example ($B(u,v)=13$, $B(v,u)=33$) and practice answers check out.

- [Intuition] Add one or two familiar bilinear forms before the abstract definition: the dot product and the 2D signed area $u_1v_2-u_2v_1$, so the reader recognizes the concept.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0189

Note: [[11.02 Quadratic forms|11.02 Quadratic forms]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; matrix, polarization, and completing-the-square calculations are verified.

- [Graph] 3D surface $z=3x_1^2+4x_1x_2+2x_2^2$ over $[-1,1]^2$ (an upward bowl) with its contour ellipses, to visualize positive definiteness found by completing the square.
- [Simplify] In "Recover the symmetric bilinear form", show the subtraction that gives the second polarization formula $\tfrac14(q(x+y)-q(x-y))$ in one displayed line rather than in words.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0190

Note: [[11.03 Symmetry|11.03 Symmetry]]  
Priority: low · Graph: no · Manim: no

Clear and correct; the decomposition, uniqueness proof, and worked example ($27-14=13$) check out.

- [Links] Link [[Symmetrization and Antisymmetrization]], which covers the same matrix decomposition in index notation, so the two notes reference each other.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0191

Note: [[11.04 Inner products|11.04 Inner products]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; the weighted-product projection example and its Pythagorean check are verified.

- [Graph] Plot the unit "circle" of the weighted product $2a^2+b^2=1$ (an ellipse) together with $x=(2,0)$, $u=(1,1)$, $p=(4/3,4/3)$, and $r=(2/3,-4/3)$ on $[-1,2.5]\times[-1.5,1.5]$, so the reader sees $G$-orthogonality as an oblique angle.
- [Simplify] In the Cauchy-Schwarz derivation, show the one-line expansion of $\|x-ty\|^2$ before substituting $t$, since the displayed equality skips it.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0192

Note: [[11.05 Orthonormal bases|11.05 Orthonormal bases]]  
Priority: low · Graph: no · Manim: yes

Clear and correct; the 3D Gram-Schmidt example and the weighted-product practice are verified.

- [Manim] Animate Gram-Schmidt on $v_1=(1,1,0)$, $v_2=(1,0,1)$, $v_3=(0,1,1)$: show each projection being subtracted and the residual normalized to $e_1,e_2,e_3$.
- [Links] Mention that collecting the coefficients gives $A=QR$ and link [[Gram–Schmidt and QR factorization problems]] and [[Least squares and numerical stability]].
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0193

Note: [[11.06 Basis changes|11.06 Basis changes]]  
Priority: low · Graph: no · Manim: no

Clear and correct distinction between congruence and similarity, with a verified worked example (value 42 in both bases).

- [Links] Link [[05.06 General bases]] (Gram matrix as a congruence of the identity) and [[Basis change]] so the transformation conventions are cross-referenced.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0194

Note: [[11.07 Classification|11.07 Classification]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; Sylvester's law proof, the completing-the-square example, and the radical-versus-null-vector contrast are verified.

- [Graph] Three 3D surfaces over $[-1,1]^2$ for the 2D sign classes: $z=x^2+y^2$ (inertia $(2,0,0)$), $z=x^2-y^2$ ($(1,1,0)$), and $z=x^2$ ($(1,0,1)$, with its flat radical direction).
- [Example] In "Diagonal form and inertia", state that the convention $(p,m)$ gives $(1,1)$ for $x^2-y^2$ while the difference convention gives 0, so readers can map other texts.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0195

Note: [[11.08 Indefinite forms|11.08 Indefinite forms]]  
Priority: low · Graph: no · Manim: yes

Clear and correct; null vectors, the failed projection, and the failure of norm and Cauchy-Schwarz are explained with verified examples.

- [Manim] Animate a vector rotating around the origin with a readout of $q=x^2-y^2$ changing sign each time it crosses the null lines $y=\pm x$, complementing the static Fig. 11.2.
- [Intuition] Mention that this is the 1+1 Minkowski form, where null lines are light rays, as a familiar motivation for indefinite forms.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0196

Note: [[11.09 Complex inner products|11.09 Complex inner products]]  
Priority: low · Graph: no · Manim: no

Clear and correct; the convention, polarization identity, and projection examples are verified, including the sign check.

- [Links] Link [[10.09 Real and complex matrices]], which uses the same conjugate-linear-first convention, and [[Hermitian Conjungate]], whose notation should be aligned with this note.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0197

Note: [[Bilinear and quadratic forms - Overview|Bilinear and quadratic forms - Overview]]  
Priority: low · Graph: no · Manim: no

Clean topic hub with valid links and clear outcomes.

- [Structure] No content change needed; only save the file without the UTF-8 BOM.

### N0198

Note: [[Cauchy-Schwarz inequality|Cauchy-Schwarz inequality]]  
Priority: low · Graph: yes · Manim: no

Clear and correct elementary proof via the Lagrange identity, with verified examples and equality conditions.

- [Graph] Plot the circle $x^2+y^2=5$ with the lines $2x-3y=\pm\sqrt{65}$ tangent to it at $\pm\sqrt{5/13}(2,-3)$ on $[-3,3]^2$, showing the bound of practice 1 as tangency.
- [Intuition] Add the geometric reading $|\cos\theta|\le1$ for the angle between the two lists viewed as vectors, linking [[05.05 Dot products]] and [[11.04 Inner products]].
- [Simplify] Reword "A stronger-looking but equally valid useful version" to "A stronger version".
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0199

Note: [[From row reduction to least squares|From row reduction to least squares]]  
Priority: low · Graph: yes · Manim: no

Concise and correct bridge note; the line fit ($c_0=7/6$, $c_1=1/2$, residual check) is verified and all links resolve.

- [Graph] Plot the data $(0,1),(1,2),(2,2)$, the fitted line $y=7/6+t/2$ for $t\in[-0.5,2.5]$, and vertical residual segments of lengths $1/6,1/3,1/6$.
- [Simplify] Show the normal equations $\begin{pmatrix}3&3\\3&5\end{pmatrix}c=\begin{pmatrix}5\\6\end{pmatrix}$ explicitly instead of only their solution.

### N0200

Note: [[Hermitian Conjungate|Hermitian Conjungate]]  
Priority: high · Graph: no · Manim: no

Short note with a wrong identity, a misnamed concept, a misspelled title, and no frontmatter.

- [Correctness] "$\|J\|^2 = J^{\dagger} J = J J^{\dagger}$" is wrong: $J^\dagger J$ is the scalar $\|J\|^2$, but $JJ^\dagger$ is an $n\times n$ matrix (the projector onto $J$ when $\|J\|=1$).
- [Correctness] "we can't simply get the inverse of the vector using the transpose method" describes the wrong concept; the issue is the squared norm, since $J^TJ$ can be zero or complex for nonzero $J$ (for example $J=(1,i)$).
- [Structure] Fix the spelling "Conjungate" to "Conjugate" in the file name, title, and text (incoming links update automatically), add frontmatter with a quoted title and TLDR, and rewrite the garbled final note "When the rotation vector is normalized, that the rotation does not change...".
- [Links] Link [[10.09 Real and complex matrices]] and [[11.09 Complex inner products]] for the general adjoint and inner product.

### N0201

Note: [[Least squares and numerical stability|Least squares and numerical stability]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; derivation, worked line fit, QR example, and conditioning remarks are verified.

- [Graph] Plot the data points, the fitted line $y=7/6+t/2$, and the residual segments, complementing the abstract projection figure.
- [Example] Quantify $\kappa_2(A^TA)=\kappa_2(A)^2$ with the note's matrix $\begin{pmatrix}1&1\\1&1+\delta\end{pmatrix}$ at $\delta=10^{-3}$: $\kappa_2(A)\approx4.0\times10^3$ and $\kappa_2(A^TA)\approx1.6\times10^7$.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0202

Note: [[Singular value decomposition|Singular value decomposition]]  
Priority: low · Graph: no · Manim: yes

Clear and correct; existence argument, rank-deficient example, pseudoinverse ($x=(1/2,1/2)$, residual norm squared 11), and truncation results check out.

- [Manim] Animate $A=U\Sigma V^T$ acting on the unit circle for a full-rank $2\times2$ example such as $A=\begin{pmatrix}3&0\\4&5\end{pmatrix}$: rotate by $V^T$, stretch by $\sigma_1=3\sqrt5$, $\sigma_2=\sqrt5$, rotate by $U$, ending at the image ellipse.
- [Example] Add one full-rank $2\times2$ worked SVD (the matrix above) since the only worked example is rank-deficient.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0203

Note: [[Vector and matrix norms|Vector and matrix norms]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; norm axioms, induced-norm formulas, and worked numbers check out.

- [Graph] Plot the unit balls of the 1-, 2-, and infinity-norms on $[-1.5,1.5]^2$, and the image of the infinity-norm unit square under $A=\begin{pmatrix}1&-2\\3&0\end{pmatrix}$, with the corner $(1,-1)\mapsto(3,3)$ marked as the worst-case input.
- [Intuition] Add the 2-norm counterpart to the column/row-sum rules: $\|A\|_2$ is the length of the longest semiaxis of the image of the unit circle.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N0204

Note: [[Vector spaces and bilinear forms|Vector spaces and bilinear forms]]  
Priority: low · Graph: no · Manim: no

Correct compact survey; examples (dimension formula, invertible $T$, weighted inner product) check out.

- [Links] Link [[10.01 Vector spaces]], [[10.02 Linear maps]], and [[11.04 Inner products]], which develop these sections in detail, so the survey points to the full treatments.
- [Structure] "### Worked answers" sits one level below "## Practice" unlike the sibling notes; use "## Worked answers", and remove the UTF-8 BOM.
