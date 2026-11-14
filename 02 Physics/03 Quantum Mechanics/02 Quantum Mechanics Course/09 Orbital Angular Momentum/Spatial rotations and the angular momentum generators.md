---
title: "Spatial rotations and the angular momentum generators"
---

> [!TLDR]
> Relate finite three-dimensional rotations to infinitesimal generators and their commutators.

## Worked lecture material

In the dipole limit $e^{-i\signal{\mathbf k}\cdot\mechanical{\mathbf r}}\simeq1-i\signal{\mathbf k}\cdot\mechanical{\mathbf r}$. The leading term gives the dipole projection transverse to the propagation direction.

![[Kyle Kabasares - Quantum Mechanics II - Dipole transverse component.png|**Fig. 20** The perpendicular projection of a vertical dipole has magnitude $|\mathbf d_{0n}|\sin\theta$.]]

For a single particle in a central potential, the notes derive the orbital selection rule from the position operator and the double commutator
$$
[\mechanical{\mathbf L}^2,[\mechanical{\mathbf L}^2,\mechanical{\mathbf r}]]
=2\hbar^2(\mechanical{\mathbf L}^2\mechanical{\mathbf r}+\mechanical{\mathbf r}\mechanical{\mathbf L}^2).
$$
On the left, the expanded terms are $(\mechanical{\mathbf L}^2)^2\mechanical{\mathbf r}-2\mechanical{\mathbf L}^2\mechanical{\mathbf r}\mechanical{\mathbf L}^2+\mechanical{\mathbf r}(\mechanical{\mathbf L}^2)^2$. Take the matrix element between states of orbital angular momentum $\ell'$ and $\ell$. After canceling $\hbar^4$ and factoring the resulting polynomial, one obtains
$$
(\ell+\ell')(\ell+\ell'+2)\bigl[(\ell'-\ell)^2-1\bigr]
\langle\ell'm'\vert\mechanical{\mathbf r}\vert\ell m\rangle=0.
$$
When both labels are zero, the vector matrix element vanishes by parity. Otherwise the first two factors are nonzero, so the dipole transition requires $\ell'=\ell\pm1$. Angular momentum is conserved for the combined atom and radiation system when their interaction is rotationally invariant.

##### Rotations and angular momentum

A plane coordinate rotation has the matrix
$$
O(\alpha)=\begin{pmatrix}\cos\alpha&\sin\alpha\\-\sin\alpha&\cos\alpha\end{pmatrix},
\qquad
\begin{pmatrix}x'\\y'\end{pmatrix}=O(\alpha)\begin{pmatrix}x\\y\end{pmatrix}.
$$
It belongs to $O(2)$ because $O^{\mathsf T}O=I$. For any orthogonal matrix, taking determinants of this identity gives $(\det O)^2=1$.

A real orthogonal matrix has determinant $+1$ or $-1$. The reflection $\operatorname{diag}(1,-1)$ has determinant $-1$ and squares to the identity. Orthogonal matrices form a group under multiplication, since the product of two is orthogonal and $O^{-1}=O^{\mathsf T}$. The special orthogonal group $SO(2)$ is the subgroup of real $2\times2$ orthogonal matrices with determinant $+1$.

Use the Hermitian generator
$$
T=\begin{pmatrix}0&i\\-i&0\end{pmatrix}.
$$
Its square is $I$, so its even powers equal $I$ and its odd powers equal $T$. Expanding the exponential gives
$$
\begin{aligned}
e^{-i\alpha T}
&=I-i\alpha T-\frac{\alpha^2}{2!}I+\frac{i\alpha^3}{3!}T+\cdots\\
&=I\cos\alpha-iT\sin\alpha
=\begin{pmatrix}\cos\alpha&\sin\alpha\\-\sin\alpha&\cos\alpha\end{pmatrix}.
\end{aligned}
$$
The real antisymmetric generator in the exponent is $-iT$. Every element of $SO(2)$ has this form for some $\alpha$.

An infinitesimal plane rotation is $I-i\epsilon T+O(\epsilon^2)$. In the one-dimensional complex representation, take the generator to be the number 1. The finite transformations are complex numbers of modulus one. Their multiplication adds angles, $e^{i\alpha_1}e^{i\alpha_2}=e^{i(\alpha_1+\alpha_2)}$, and their unitarity condition is $U^\dagger U=1$. Thus the plane rotation group $SO(2)$ is isomorphic to $U(1)$.

##### The three-dimensional rotation group

A real $3\times3$ matrix with $O^{\mathsf T}O=I_3$ belongs to $O(3)$ and has determinant $\pm1$. The subgroup $SO(3)$ consists of the proper rotations with determinant $+1$. For the coordinate rotation convention on the preceding pages,
$$
O_z(\phi)=
\begin{pmatrix}\cos\phi&\sin\phi&0\\-\sin\phi&\cos\phi&0\\0&0&1\end{pmatrix}.
$$
For small angle $\epsilon$, $O_z(\epsilon)=I_3-i\epsilon L_z+O(\epsilon^2)$. The dimensionless generators for this coordinate convention are
$$
L_x=\begin{pmatrix}0&0&0\\0&0&i\\0&-i&0\end{pmatrix},\qquad
L_y=\begin{pmatrix}0&0&-i\\0&0&0\\i&0&0\end{pmatrix},\qquad
L_z=\begin{pmatrix}0&i&0\\-i&0&0\\0&0&0\end{pmatrix}.
$$
Composing infinitesimal rotations gives the finite transformation $O_z(\phi)=e^{-i\phi L_z}$.

To first order, $O_j(\epsilon)=I_3-i\epsilon L_j$. In particular,
$$
O_z(\epsilon)=\begin{pmatrix}1&\epsilon&0\\-\epsilon&1&0\\0&0&1\end{pmatrix}
+O(\epsilon^2).
$$
Compare the two orders of the small $x$ and $y$ rotations. The linear terms cancel, and the leading difference is
$$
O_y(\epsilon)O_x(\epsilon)-O_x(\epsilon)O_y(\epsilon)
=\epsilon^2[L_x,L_y]+O(\epsilon^3)
=\begin{pmatrix}0&-\epsilon^2&0\\\epsilon^2&0&0\\0&0&0\end{pmatrix}
+O(\epsilon^3).
$$
This is $O_z(-\epsilon^2)-I_3$ to the displayed order. The matrices on [[#The three-dimensional rotation group|the section on The three-dimensional rotation group]] obey $[L_i,L_j]=-i\varepsilon_{ijk}L_k$. The usual active generators are their negatives and obey the positive-sign convention $[J_i,J_j]=i\varepsilon_{ijk}J_k$. The source places the active algebra next to the passive coordinate matrices. The two orders of the rotations give different results, as in the composition of Euler rotations.

For a rotation about $\widehat{\mathbf n}$, set $\boldsymbol\omega=\phi\widehat{\mathbf n}$ for the angle-axis parameter. The rotation $e^{-i\boldsymbol\omega\cdot\mathbf L}$ acts on the components of a vector, such as $\magnetic{\mathbf A}$. Its expansion is
$$
e^{-i\phi\,\widehat{\mathbf n}\cdot\mathbf L}
=I_3-i\phi\,\widehat{\mathbf n}\cdot\mathbf L
-\frac{\phi^2}{2}(\widehat{\mathbf n}\cdot\mathbf L)^2+O(\phi^3).
$$
The notes record that the following week's discussion is canceled.

##### General rotations

Write an angle-axis rotation as $R(\phi,\widehat{\mathbf n})=e^{-i\phi\widehat{\mathbf n}\cdot\mathbf L}$, with $\phi\widehat{\mathbf n}$ the rotation parameter. The term of order $\phi^2$ in the expansion is $-\phi^2(\widehat{\mathbf n}\cdot\mathbf L)^2/2$. The square contains $n_x^2L_x^2+n_y^2L_y^2+n_z^2L_z^2$ and cross terms such as $n_xn_y(L_xL_y+L_yL_x)$.

Here the notes switch to the active convention, with $L_z=\begin{pmatrix}0&-i&0\\i&0&0\\0&0&0\end{pmatrix}$ and $L_z^2=\operatorname{diag}(1,1,0)$. Using $[L_x,L_y]=iL_z$ gives $L_xL_y+L_yL_x=2L_xL_y-iL_z$.

For quantum states, a linear combination of basis functions $\psi_{n\ell m}$ gives a vector in Hilbert space. For the hydrogen bound states, fixing $n$ leaves a subspace with $0\leq\ell\leq n-1$ and $-\ell\leq m\leq\ell$, of dimension $\sum_{\ell=0}^{n-1}(2\ell+1)=n^2$ when spin is ignored. Fixing both $n$ and $\ell$ leaves a $(2\ell+1)$-dimensional subspace. For example, when $\ell=1$ its vectors have the form
$$
C_1\lvert n,1,1\rangle+C_0\lvert n,1,0\rangle+C_{-1}\lvert n,1,-1\rangle.
$$

The quantization axis may be changed by rotating the coordinate axes. For $\ell=1$, the three basis states labeled by $m=1,0,-1$ span a three-dimensional space. Rotations mix the three components within that space. The associated matrices give a representation of the rotation group.

![[Kyle Kabasares - Quantum Mechanics II - Angular momentum basis axes.png|**Fig. 21** Rotating the axes changes the basis used to label the magnetic quantum number.]]

For fixed $n,\ell$, a state $\lvert\alpha\rangle$ is specified by its $2\ell+1$ coefficients. For $\ell=2$, for instance, it is $\sum_{m=-2}^{2} C_m\lvert n,2,m\rangle$. Write the rotated state as $\lvert\alpha(R)\rangle=D(R)\lvert\alpha\rangle$. Applying $R_1$ followed by $R_2$ gives
$$
D(R_2R_1)=D(R_2)D(R_1).
$$
The operators are unitary, with $D(R)^\dagger=D(R^{-1})$ and $D(R)^\dagger D(R)=I$. Thus $\langle\alpha\vert D(R)^\dagger D(R)\vert\alpha\rangle=\langle\alpha\vert\alpha\rangle$.

In the active convention, the difference between two orders of infinitesimal rotations is
$$
O_x(\epsilon_x)O_y(\epsilon_y)-O_y(\epsilon_y)O_x(\epsilon_x)
=-\epsilon_x\epsilon_y[L_x,L_y]+\text{higher orders}.
$$
Since $[L_x,L_y]=iL_z$, the leading term is $-i\epsilon_x\epsilon_y L_z=O_z(\epsilon_x\epsilon_y)-I$ to this order. The representation matrices $D(R)$ must reproduce the same composition law. For a fixed-$\ell$ space their generators $T_a$ are $(2\ell+1)\times(2\ell+1)$ matrices, and
$$
D(R)=e^{-i\phi^a T_a},\qquad [T_a,T_b]=i\varepsilon_{abc}T_c
$$
in the active convention. For example, $\ell=2$ gives five-dimensional matrices. The dimensionful quantum angular momenta $\mechanical{L}_a$ obey $[\mechanical{L}_a,\mechanical{L}_b]=i\hbar\varepsilon_{abc}\mechanical{L}_c$, so division by $\hbar$ gives dimensionless generators.

The instructor advised against placing too much weight on a score difference such as 23 versus 27 out of 30. The qualifying exam is intended to be comprehensive, including perturbation theory and early fall-quarter material.

The rotation review contrasts the Cartesian vector representation, which acts on $(v_x,v_y,v_z)$, with the representation acting on the three spherical components for $\ell=1$. In Cartesian coordinates a rotation uses the matrix exponential with the angle-axis parameter $\boldsymbol\omega=\phi\widehat{\mathbf n}$.

For $\ell=2$, the five basis functions have $m=2,1,0,-1,-2$. Different representations use different matrices, but their generators obey the same rotation algebra. For the active Cartesian generators, $[L_x,L_y]=iL_z$ and $[L_y,L_x]=-iL_z$. The quantum rotation operator corresponding to $e^{-i\boldsymbol\omega\cdot\mathbf L}$ in the Cartesian representation is $e^{-i\boldsymbol\omega\cdot\mechanical{\widehat{\mathbf L}}/\hbar}$. The dimensionless matrices $J_i$ on the fixed-$\ell$ space obey $[J_i,J_j]=i\varepsilon_{ijk}J_k$.

The outer product $T=VW^{\mathsf T}$ of two three-component vectors is a $3\times3$ matrix or rank-two tensor. Under $O=e^{-i\boldsymbol\omega\cdot\mathbf L}$, it transforms as $T\mapsto OTO^{\mathsf T}$. The notes start to separate the trace and symmetric traceless parts. Including the antisymmetric part gives the complete decomposition:
$$
T=\frac{\operatorname{tr}T}{3}I_3
+\left[\frac{T+T^{\mathsf T}}2-\frac{\operatorname{tr}T}{3}I_3\right]
+\frac{T-T^{\mathsf T}}2.
$$
Each part transforms separately under rotations.

The outer product $T^i{}_j=V^iW_j$ splits into its trace part, symmetric traceless part $S$, and antisymmetric part $A$. The parts have dimensions $1$, $5$, and $3$, respectively. Under a rotation,
$$
T'=OTO^{\mathsf T}=\tfrac13(\operatorname{tr}T)I_3+OSO^{\mathsf T}+OAO^{\mathsf T}.
$$
The trace is invariant because $\operatorname{tr}(OTO^{\mathsf T})=\operatorname{tr}(O^{\mathsf T}OT)=\operatorname{tr}T$. Also $(OSO^{\mathsf T})^{\mathsf T}=OSO^{\mathsf T}$ and $(OAO^{\mathsf T})^{\mathsf T}=-OAO^{\mathsf T}$, so the symmetric and antisymmetric spaces are preserved. The Cartesian generator matrices are antisymmetric under transpose, as seen in $O=I-i\boldsymbol\omega\cdot\mathbf L+\cdots$.

An antisymmetric three-dimensional tensor can be represented by an axial vector. For example, $\mechanical{\mathbf L}=\mechanical{\mathbf r}\times\mechanical{\mathbf p}$ transforms under an orthogonal matrix $O$ with the extra factor $\det O$. It is invariant under spatial inversion.

A product state is written $\lvert n_1,\ell_1,m_1\rangle\otimes\lvert n_2,\ell_2,m_2\rangle$. The notes consider coupling a vector to a symmetric traceless tensor, corresponding to $\ell_1=1$ and $\ell_2=2$. Their product gives $\ell_{\mathrm{tot}}=3,2,1$, with dimensions $7,5,3$ adding to $15$.

## Source

Kyle Kabasares, *Quantum Mechanics II (Physics 215B, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\hbar$ | $\unit{J\,s}$ | Reduced Planck constant | Planck constant divided by $2\pi$. |
| $\mechanical{L}$ | $\unit{m}$ | Box side length | Periodic normalization length in each coordinate. |
| $\signal{\mathbf k}$, $\signal{k}_j$ | $\unit{m^{-1}}$ | Wave vector and components | Spatial frequencies of the momentum eigenfunction. |
| $\mechanical{\mathbf p}$, $\mechanical{\mathbf p}'$ | $\unit{kg\,m\,s^{-1}}$ | Momentum vectors | Momentum before and after scattering. |
| $\magnetic{\mathbf A}$ | $\unit{T\,m}$ | Magnetic vector potential | Spatial part of the electromagnetic four-potential. |
| $c$ | $\unit{m\,s^{-1}}$ | Speed of light | Vacuum light speed used in the time coordinate and Maxwell equations. |
| $A$, $B$ | $\unit{s^{-1}}$ | Mode emission and absorption coefficients | Spontaneous rate and induced transition rate per photon for a single resonant mode. |
| $\mathbf d_{0n}$ | $\unit{m}$ | Transition position matrix element | Electric dipole matrix element with the common charge factored out. |
| $\mechanical{\mathbf L}$, $\mechanical{L}_z$ | $\unit{J\,s}$ | Orbital angular momentum | Total orbital angular momentum and its projection on the $z$-axis. |
