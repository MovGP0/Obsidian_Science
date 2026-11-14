---
title: "Unitary rotations of spinors and Pauli matrices"
---

> [!TLDR]
> Build spin rotations from Pauli matrices and work through their action on spinors and observables.

## Worked lecture material

##### Unitary rotations and the Pauli matrices

The rotation algebra has a two-dimensional spinor representation. This is a representation of $SU(2)$, which is locally isomorphic to $SO(3)$ and double-covers it. The notes introduce it by considering the group $U(2)$ of $2\times2$ matrices with $U^\dagger U=I$. Taking determinants yields $|\det U|^2=1$, so $\det U=e^{i\alpha}$ for real $\alpha$. Restricting to determinant one gives the special unitary group $SU(2)$.

Use the Hermitian, traceless Pauli matrices. In the convention with $[\sigma_x,\sigma_y]=2i\sigma_z$, they are
$$
\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad
\sigma_y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\qquad
\sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.
$$
The handwritten $\sigma_y$ has the opposite sign. The matrices above use the sign consistent with the stated commutator convention. Let $\boldsymbol\omega=\phi\widehat{\mathbf n}$ as before. Then
$$
g=e^{-i\boldsymbol\omega\cdot\boldsymbol\sigma/2}
=I-\frac i2\boldsymbol\omega\cdot\boldsymbol\sigma
-\frac18(\boldsymbol\omega\cdot\boldsymbol\sigma)^2+\cdots.
$$
Hermiticity gives $g^\dagger g=I$. The determinant of $g$ is one because the determinant of a matrix exponential is the exponential of its trace and the Pauli matrices are traceless.

The generators $T_i=\sigma_i/2$ obey $[T_i,T_j]=i\varepsilon_{ijk}T_k$, the same algebra as the active rotation generators on three-component vectors. The two groups have the same local rotation parameters, and $g$ and $-g$ induce the same spatial rotation.

An infinitesimal coordinate rotation acts on Cartesian components $(V_x,V_y,V_z)$ as $(I_3-i\epsilon L_z)\mathbf V$ for the passive generator on [[Spatial rotations and the angular momentum generators#The three-dimensional rotation group|the section on The three-dimensional rotation group]]. In the $\ell=1$ spherical basis ordered by $m=1,0,-1$, the dimensionless quantum generator $\mechanical{L}_z/\hbar$ is $\operatorname{diag}(1,0,-1)$. The dimensionful operators satisfy $[\mechanical{L}_i,\mechanical{L}_j]=i\hbar\varepsilon_{ijk}\mechanical{L}_k$.

For two systems with $\ell_1=\ell_2=1$, there are nine product states labeled by $(m_1,m_2)$, each label taking the values $1,0,-1$. The extreme states of the $\ell=2$ multiplet are $\lvert1,1\rangle$ and $\lvert-1,-1\rangle$ in the product basis. The next two are
$$
\begin{aligned}
\lvert\ell=2,m=1\rangle&=\frac{\lvert1,0\rangle+\lvert0,1\rangle}{\sqrt2},\\
\lvert\ell=2,m=-1\rangle&=\frac{\lvert-1,0\rangle+\lvert0,-1\rangle}{\sqrt2}.
\end{aligned}
$$
In the usual ladder-operator phase convention the normalized singlet is
$$
\lvert\ell=0,m=0\rangle=\frac{\lvert1,-1\rangle-\lvert0,0\rangle+\lvert-1,1\rangle}{\sqrt3}.
$$
The middle coefficient has a minus sign so that total raising and lowering annihilate the singlet.

For two $\ell=1$ systems, the antisymmetric triplet has the coupled states
$$
\begin{aligned}
\lvert\ell=1,m=1\rangle&=\frac{\lvert1,0\rangle-\lvert0,1\rangle}{\sqrt2},\\
\lvert\ell=1,m=0\rangle&=\frac{\lvert1,-1\rangle-\lvert-1,1\rangle}{\sqrt2},\\
\lvert\ell=1,m=-1\rangle&=\frac{\lvert0,-1\rangle-\lvert-1,0\rangle}{\sqrt2}.
\end{aligned}
$$
The $m=0$ quintet state is
$$
\lvert\ell=2,m=0\rangle=\frac{\lvert1,-1\rangle+2\lvert0,0\rangle+\lvert-1,1\rangle}{\sqrt6}.
$$
These signs follow by applying the total lowering operator to the states with $m=1$. The triplet has no $\lvert0,0\rangle$ term, and the quintet is orthogonal to the singlet on the preceding page.

##### Spinor rotation

The matrices $\sigma_i/2$ generate rotations on the spin components of a two-component wavefunction:
$$
\begin{pmatrix}\psi_\uparrow(\mechanical{\mathbf x})\\\psi_\downarrow(\mechanical{\mathbf x})\end{pmatrix}
=\psi_\uparrow(\mechanical{\mathbf x})\begin{pmatrix}1\\0\end{pmatrix}
+\psi_\downarrow(\mechanical{\mathbf x})\begin{pmatrix}0\\1\end{pmatrix}.
$$
For a spin rotation by $\phi$ about $\widehat{\mathbf n}$, the infinitesimal matrix is $I-i\phi\boldsymbol\sigma\cdot\widehat{\mathbf n}/2$, and the finite matrix is its corresponding exponential. About $z$, even and odd powers of $\sigma_z$ give
$$
e^{-i\phi\sigma_z/2}=\cos(\phi/2)I-i\sin(\phi/2)\sigma_z.
$$
At $\phi=2\pi$ the spinor is multiplied by $-1$. The state ray is the same, but the spinor has acquired a phase of $\pi$.

The spin-up and spin-down basis states are $\lvert\uparrow\rangle$ and $\lvert\downarrow\rangle$. A general one-particle spinor is $\psi_\uparrow\lvert\uparrow\rangle+\psi_\downarrow\lvert\downarrow\rangle$, with each spatial component expandable in $\lvert n,\ell,m\rangle$. In occupation-number notation, $\lvert\uparrow\rangle=a_\uparrow^\dagger\lvert0\rangle$ and $\lvert\downarrow\rangle=a_\downarrow^\dagger\lvert0\rangle$, where $\lvert0\rangle$ is the vacuum. Bosonic creation and annihilation operators obey canonical commutation relations. Fermionic operators obey the corresponding anticommutation relations. Quantizing the electromagnetic field gives photons with spin 1 and two transverse helicities.

The operators $\mechanical{\mathbf L}_1$ and $\mechanical{\mathbf L}_2$ act on different particle spaces, so all components of one commute with those of the other. Their sum $\mechanical{\mathbf L}$ satisfies
$$
\mechanical{\mathbf L}^2=\mechanical{\mathbf L}_1^2+2\mechanical{\mathbf L}_1\cdot\mechanical{\mathbf L}_2+\mechanical{\mathbf L}_2^2.
$$
This square commutes with $\mechanical{\mathbf L}_1^2$, $\mechanical{\mathbf L}_2^2$, and $\mechanical{L}_z=\mechanical{L}_{1z}+\mechanical{L}_{2z}$. In general it does not commute with the separate projections $\mechanical{L}_{1z}$ and $\mechanical{L}_{2z}$. The mutually commuting set $\{\mechanical{\mathbf L}^2,\mechanical{L}_z,\mechanical{\mathbf L}_1^2,\mechanical{\mathbf L}_2^2\}$ labels the coupled basis. The separate squares and separate projections label the product basis.

The product basis diagonalizes $\{\mechanical{\mathbf L}_1^2,\mechanical{\mathbf L}_2^2,\mechanical{L}_{1z},\mechanical{L}_{2z}\}$. For a two-particle orbital system, define $\mechanical{\mathbf J}=\mechanical{\mathbf L}_1+\mechanical{\mathbf L}_2$. For one particle with orbital motion and spin, define $\mechanical{\mathbf J}=\mechanical{\mathbf L}+\mechanical{\mathbf S}$. The components of each angular momentum obey the same algebra:
$$
[\mechanical{L}_i,\mechanical{L}_j]=i\hbar\varepsilon_{ijk}\mechanical{L}_k,\qquad
[\mechanical{S}_i,\mechanical{S}_j]=i\hbar\varepsilon_{ijk}\mechanical{S}_k,\qquad
[\mechanical{J}_i,\mechanical{J}_j]=i\hbar\varepsilon_{ijk}\mechanical{J}_k.
$$
For spin $1/2$, $\mechanical{S}_i=\hbar\sigma_i/2$. In a spinor wavefunction, $\mechanical{\mathbf L}$ acts on the spatial functions and $\mechanical{\mathbf S}$ acts on the spin components. Their sum acts on the full state.

Two spin-$1/2$ particles have a symmetric triplet and an antisymmetric singlet:
$$
\begin{aligned}
\lvert j=1,m=1\rangle&=\lvert\uparrow\uparrow\rangle,\\
\lvert j=1,m=0\rangle&=(\lvert\uparrow\downarrow\rangle+\lvert\downarrow\uparrow\rangle)/\sqrt2,\\
\lvert j=1,m=-1\rangle&=\lvert\downarrow\downarrow\rangle,\\
\lvert j=0,m=0\rangle&=(\lvert\uparrow\downarrow\rangle-\lvert\downarrow\uparrow\rangle)/\sqrt2.
\end{aligned}
$$
The triplet has the same three projection labels as the orbital $\ell=1$ representation.

A real three-vector $\mathbf r=(x,y,z)$ corresponds to the traceless Hermitian matrix
$$
\mathbf r\cdot\boldsymbol\sigma=
\begin{pmatrix}z&x-iy\\x+iy&-z\end{pmatrix}.
$$
With $g=e^{-i\phi\widehat{\mathbf n}\cdot\boldsymbol\sigma/2}$, the transformation $g^\dagger(\mathbf r\cdot\boldsymbol\sigma)g$ gives the components of the passively rotated vector. For rotation about $z$ these are $x'=x\cos\phi+y\sin\phi$, $y'=-x\sin\phi+y\cos\phi$, and $z'=z$. A spinor column times a spinor row gives another example of a $2\times2$ matrix.

A scalar is invariant under rotation. A Cartesian vector transforms as $\mathbf A\mapsto O\mathbf A$, where $O=e^{-i\phi\widehat{\mathbf n}\cdot\mathbf L}$ for the chosen Cartesian generators. A two-component spinor transforms under $g$. These are different representations of rotations.

The hydrogen ground-state spatial wavefunction is radial. The excited multiplet $n=2,\ell=1$ has three basis states labeled by $m=1,0,-1$. At fixed $n,\ell=1$, a state is $\psi=C_1\psi_{n,1,1}+C_0\psi_{n,1,0}+C_{-1}\psi_{n,1,-1}$, and the coefficient column represents it in this basis. Each basis wavefunction is normalized. Spin can be included by combining the orbital states with the spinor basis columns.

A spatial ground-state function depending only on radius is invariant under spatial rotation. It can multiply an arbitrary spinor $c_1\lvert\downarrow\rangle+c_2\lvert\uparrow\rangle$. If both coefficients are nonzero, the state has no definite spin projection on the $z$-axis. The notation $\lvert n\ell m,\uparrow\rangle$ or $\lvert n\ell m,\downarrow\rangle$ specifies both the orbital state and the spin projection.

##### Quantum angular momentum and spin operators

The position-space orbital operator and the spin-$1/2$ operator are
$$
\mechanical{\widehat{\mathbf L}}=-i\hbar\mechanical{\mathbf r}\times\nabla,\qquad
\mechanical{\widehat{\mathbf S}}=\frac{\hbar}{2}\boldsymbol\sigma.
$$
Dividing by $\hbar$ gives the generators of the orbital and spin rotations, respectively. Acting on the spin basis, $\mechanical{\widehat S}_z\lvert\uparrow\rangle=(\hbar/2)\lvert\uparrow\rangle$ and $\mechanical{\widehat S}_z\lvert\downarrow\rangle=-(\hbar/2)\lvert\downarrow\rangle$. Since each Pauli matrix squares to the identity, $\mechanical{\widehat{\mathbf S}}^2=(\hbar^2/4)(\sigma_x^2+\sigma_y^2+\sigma_z^2)=3\hbar^2 I/4$. Both basis states have the same spin magnitude.

The orbital eigenvalues of $\mechanical{\mathbf L}^2$ and $\mechanical{L}_z$ are $\hbar^2\ell(\ell+1)$ and $\hbar m$, respectively, with $m=-\ell,\ldots,\ell$. Spin has squared magnitude $\hbar^2s(s+1)$ and projections $\hbar m_s$, where $m_s=\pm1/2$ for $s=1/2$.

For the total angular momentum define $\mechanical{J}_\pm=\mechanical{J}_x\pm i\mechanical{J}_y$. The cross terms cancel when the two products are added:
$$
\mechanical{\mathbf J}^2=\frac12(\mechanical{J}_+\mechanical{J}_-+\mechanical{J}_-\mechanical{J}_+)+\mechanical{J}_z^2.
$$
The ladder actions in the orbital and total bases are
$$
\begin{aligned}
\mechanical{L}_\pm\lvert n,\ell,m\rangle&=\hbar\sqrt{\ell(\ell+1)-m(m\pm1)}\,\lvert n,\ell,m\pm1\rangle,\\
\mechanical{J}_\pm\lvert j,m_j\rangle&=\hbar\sqrt{j(j+1)-m_j(m_j\pm1)}\,\lvert j,m_j\pm1\rangle.
\end{aligned}
$$
For a spin-$1/2$ particle,
$$
\mechanical{S}_+=\frac{\hbar}{2}(\sigma_x+i\sigma_y)
=\hbar\begin{pmatrix}0&1\\0&0\end{pmatrix},
\qquad
\mechanical{S}_+\lvert\downarrow\rangle=\hbar\lvert\uparrow\rangle.
$$
The ladder formula gives the same result since the square root at $s=1/2$, $m_s=-1/2$ is one. In the handwritten matrix sum the upper-right entry is reduced to one too early, leaving an extra factor of $1/2$.

## Source

Kyle Kabasares, *Quantum Mechanics II (Physics 215B, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\hbar$ | $\unit{J\,s}$ | Reduced Planck constant | Planck constant divided by $2\pi$. |
| $\mechanical{L}$ | $\unit{m}$ | Box side length | Periodic normalization length in each coordinate. |
| $c$ | $\unit{m\,s^{-1}}$ | Speed of light | Vacuum light speed used in the time coordinate and Maxwell equations. |
| $A$, $B$ | $\unit{s^{-1}}$ | Mode emission and absorption coefficients | Spontaneous rate and induced transition rate per photon for a single resonant mode. |
| $\mechanical{\mathbf L}$, $\mechanical{L}_z$ | $\unit{J\,s}$ | Orbital angular momentum | Total orbital angular momentum and its projection on the $z$-axis. |
| $\mechanical{\mathbf S}$, $\mechanical{S}_i$ | $\unit{J\,s}$ | Spin angular momentum | Intrinsic angular momentum and its Cartesian components. |
| $\mechanical{\mathbf J}$, $\mechanical{J}_i$ | $\unit{J\,s}$ | Total angular momentum | Sum of orbital and spin angular momentum or of two subsystems' angular momenta. |
