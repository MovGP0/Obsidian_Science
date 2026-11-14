---
title: "Coupled angular momentum and Clebsch–Gordan calculations"
---

> [!TLDR]
> Combine angular momenta in product and coupled bases and work through two-spin and spin–orbit examples.

## Worked lecture material

##### Addition of two spins

The two-particle spin basis contains $\lvert\uparrow\uparrow\rangle$, $\lvert\uparrow\downarrow\rangle$, $\lvert\downarrow\uparrow\rangle$, and $\lvert\downarrow\downarrow\rangle$. In the coupled basis the four states have $j=1$ with $m=1,0,-1$, or $j=0$ with $m=0$.

With $\mechanical{\mathbf J}=\mechanical{\mathbf S}_1+\mechanical{\mathbf S}_2$, both single-spin projections contribute $\hbar/2$ to $\mechanical{J}_z\lvert\uparrow\uparrow\rangle$. To determine the squared magnitude, use
$$
\mechanical{\mathbf S}_1\cdot\mechanical{\mathbf S}_2
=\mechanical{S}_{1z}\mechanical{S}_{2z}
+\frac12(\mechanical{S}_{1+}\mechanical{S}_{2-}+\mechanical{S}_{1-}\mechanical{S}_{2+}).
$$
The ladder terms annihilate $\lvert\uparrow\uparrow\rangle$. The projection product gives $\hbar^2/4$, while each individual spin square contributes $3\hbar^2/4$. Hence $\mechanical{\mathbf J}^2\lvert\uparrow\uparrow\rangle=2\hbar^2\lvert\uparrow\uparrow\rangle$, which identifies $\lvert\uparrow\uparrow\rangle=\lvert j=1,m=1\rangle$. The state $\lvert\downarrow\downarrow\rangle$ likewise has $j=1$ and $m=-1$. Both states are symmetric under particle exchange. The mixed product states are exchanged with each other.

In the $m=0$ subspace, the symmetric combination of the mixed spin states is the triplet state and the antisymmetric combination is the singlet. Their overlap is $(1-1)/2=0$ because the two product states are orthonormal.

For general $j_1,j_2$, the total projection is $\mechanical{J}_z=\mechanical{J}_{1z}+\mechanical{J}_{2z}$ and $m=m_1+m_2$. The total angular momentum labels range from $|j_1-j_2|$ to $j_1+j_2$ in unit steps. The product basis and coupled basis have equal dimension:
$$
(2j_1+1)(2j_2+1)=\sum_{j=|j_1-j_2|}^{j_1+j_2}(2j+1).
$$
The product of the two highest-projection states, $\lvert j_1,j_1;j_2,j_2\rangle$, has $\mechanical{J}_z$ eigenvalue $\hbar(j_1+j_2)$ and is annihilated by the total raising operator. Its squared total angular momentum eigenvalue is $\hbar^2(j_1+j_2)(j_1+j_2+1)$. Thus it is the highest state of the multiplet $j=j_1+j_2$.

Insert the resolution of the identity in the product basis to express a coupled state:
$$
\lvert j,m;j_1,j_2\rangle
=\sum_{m_1,m_2}\lvert j_1,m_1;j_2,m_2\rangle
\langle j_1,m_1;j_2,m_2\vert j,m;j_1,j_2\rangle.
$$
The overlaps are Clebsch–Gordan coefficients.

Let $j=j_1+j_2$ and start with the highest state $\lvert j,j\rangle=\lvert j_1,j_1;j_2,j_2\rangle$. Applying $\mechanical{J}_-$ in the coupled basis yields $\hbar\sqrt{2j}\lvert j,j-1\rangle$. Applying $\mechanical{J}_{1-}+\mechanical{J}_{2-}$ to the same state in the product basis lowers one of the two projections. Equating the results gives
$$
\lvert j,j-1\rangle=
\sqrt{\frac{j_1}{j}}\lvert j_1,j_1-1;j_2,j_2\rangle
+\sqrt{\frac{j_2}{j}}\lvert j_1,j_1;j_2,j_2-1\rangle
$$
for $j>0$, with terms absent when the corresponding spin is zero. Projection onto either product state reads off its Clebsch–Gordan coefficient.

For a two-component spinor $\chi=(\chi_1,\chi_2)^{\mathsf T}$, the antisymmetric tensor
$$
\varepsilon=\begin{pmatrix}0&1\\-1&0\end{pmatrix}=i\sigma_y
$$
maps its components to $(\chi_2,-\chi_1)^{\mathsf T}$. Equivalently, the row with these entries is $\chi^{\mathsf T}\varepsilon^{\mathsf T}$. This is the spinor dual constructed with $\varepsilon$. If $\chi'=g\chi$, then $\varepsilon\chi'=\varepsilon g\chi$ with
$$
g=e^{-i\phi\widehat{\mathbf n}\cdot\boldsymbol\sigma/2}
=I\cos(\phi/2)-i(\widehat{\mathbf n}\cdot\boldsymbol\sigma)\sin(\phi/2).
$$
Invariance of $\varepsilon$ under $SU(2)$, $g^{\mathsf T}\varepsilon g=\varepsilon$, makes the dual row transform by right multiplication with $g^{-1}$.

The raised spinor index is $\chi'^a=\varepsilon^{ab}\chi'_b$. The notes refer to volume 4 of the Landau series for an introduction to spinors.

##### Coupling orbital angular momentum and spin one-half

The highest projection of $\mechanical{J}_z=\mechanical{L}_z+\mechanical{S}_z$ is $\hbar(\ell+1/2)$. Consequently the highest coupled state is
$$
\lvert j=\ell+\tfrac12,m_j=\ell+\tfrac12\rangle=\lvert\ell,\ell\rangle\lvert\uparrow\rangle.
$$
To lower it use $\mechanical{J}_-=\mechanical{L}_-+\mechanical{S}_-$. The spin ladder matrices are
$$
\mechanical{S}_+=\hbar\begin{pmatrix}0&1\\0&0\end{pmatrix},\qquad
\mechanical{S}_-=\hbar\begin{pmatrix}0&0\\1&0\end{pmatrix}.
$$
The factors of two in the Pauli matrix sums correct the earlier spin-raising calculation. Acting on the highest state with $\mechanical{J}_-$ gives $\hbar\sqrt{2\ell}\lvert\ell,\ell-1\rangle\lvert\uparrow\rangle+\hbar\lvert\ell,\ell\rangle\lvert\downarrow\rangle$ in the product basis. In the coupled basis the result is $\hbar\sqrt{2\ell+1}\lvert\ell+\tfrac12,\ell-\tfrac12\rangle$. Dividing yields the two Clebsch–Gordan coefficients, $\sqrt{2\ell/(2\ell+1)}$ and $1/\sqrt{2\ell+1}$.

In the product basis the projection onto $\lvert\ell,\ell-1;\tfrac12,\tfrac12\rangle$ is the ratio of the orbital and total lowering factors:
$$
\frac{\sqrt{\ell(\ell+1)-\ell(\ell-1)}}
{\sqrt{(\ell+\tfrac12)(\ell+\tfrac32)-(\ell+\tfrac12)(\ell-\tfrac12)}}
=\sqrt{\frac{2\ell}{2\ell+1}}.
$$
The spin-lowered term has numerator one, so the state is
$$
\lvert\ell+\tfrac12,\ell-\tfrac12\rangle
=\sqrt{\frac{2\ell}{2\ell+1}}\lvert\ell,\ell-1\rangle\lvert\uparrow\rangle
+\frac{1}{\sqrt{2\ell+1}}\lvert\ell,\ell\rangle\lvert\downarrow\rangle.
$$
Applying $\mechanical{J}_-$ again gives the state with $m_j=\ell-3/2$ in the same multiplet when that projection exists. Its coupled-basis lowering factor is $\hbar\sqrt{(\ell+\tfrac12)(\ell+\tfrac32)-(\ell-\tfrac12)(\ell-\tfrac32)}$.

The lecture turns to interactions of spin with electromagnetic radiation. A two-component spinor has entries $\chi^1,\chi^2$. For a massive electron, spin up and down can be defined relative to a chosen axis. Helicity uses the momentum direction as the spin quantization axis. The notes distinguish electrons from positrons and refer to positive and negative helicity in the massless limit.

A spinor transforms as $\chi'^\alpha=g^\alpha{}_\beta\chi^\beta$ with $g=e^{-i\phi\widehat{\mathbf n}\cdot\boldsymbol\sigma/2}$. Lower its index by $\chi_\alpha=\varepsilon_{\alpha\beta}\chi^\beta$, where
$$
(\varepsilon_{\alpha\beta})=\begin{pmatrix}0&1\\-1&0\end{pmatrix}.
$$
The notes compare this operation with lowering a four-vector using $g_{\mu\nu}=\operatorname{diag}(1,-1,-1,-1)$. The spatial components change sign, and the invariant contraction is $V_\mu V^\mu=(V^0)^2-(V^1)^2-(V^2)^2-(V^3)^2$. Raising again returns $V^\mu$ because $g^{\mu\nu}g_{\nu\rho}=\delta^\mu{}_\rho$. The inverse antisymmetric tensor similarly satisfies $\varepsilon^{\alpha\beta}\varepsilon_{\beta\gamma}=\delta^\alpha{}_\gamma$.

With the displayed lowering convention, the spinor contraction is $\chi_\alpha\chi^\alpha=\chi^2\chi^1-\chi^1\chi^2$. It vanishes for commuting components, but equals $2\chi^2\chi^1$ for anticommuting components. In the latter case $(\chi^1)^2=(\chi^2)^2=0$. In the product of two spinor columns and dual rows, the antisymmetric combination of the two spin components gives the scalar contraction. For two distinct spinors this is proportional to $\chi_1^1\chi_2^2-\chi_1^2\chi_2^1$, with the subscripts distinguishing the particles.

For two independent spinors, take the outer product of the first spinor with the lowered second spinor:

$$
\chi_1^a\chi_{2b}
=
\begin{pmatrix}
\chi_1^1\chi_2^2 & -\chi_1^1\chi_2^1\\
\chi_1^2\chi_2^2 & -\chi_1^2\chi_2^1
\end{pmatrix}.
$$

Here $1$ and $2$ in the subscripts label the particles. The three symmetric combinations form the spin-$1$ triplet and transform as the components of a vector:

$$
\chi_1^1\chi_2^1,\qquad
\frac{\chi_1^1\chi_2^2+\chi_1^2\chi_2^1}{\sqrt{2}},\qquad
\chi_1^2\chi_2^2.
$$

The antisymmetric combination $(\chi_1^1\chi_2^2-\chi_1^2\chi_2^1)/\sqrt{2}$ is the spin-$0$ singlet and transforms as a scalar.

A creation operator acting on the vacuum gives a one-particle state:

$$
a^\dagger(n,\ell,m,\chi)\lvert 0\rangle
=
\lvert n\ell m,\chi\rangle.
$$

Its wavefunction is $c_1\psi_{n\ell m,1/2}+c_2\psi_{n\ell m,-1/2}$, with $\lvert c_1\rvert^2+\lvert c_2\rvert^2=1$. For a pair of identical particles, exchange both spatial and spin labels. The complete two-particle wavefunction obeys

$$
\Psi(1,2)=\pm\Psi(2,1),
$$

with the plus sign for bosons and the minus sign for fermions.

Before imposing exchange symmetry, the two-particle state is a product of one-particle spatial and spin states:

$$
\left(\lvert n\ell m\rangle\otimes\lvert s\rangle\right)_1
\otimes
\left(\lvert n'\ell'm'\rangle\otimes\lvert s'\rangle\right)_2.
$$

For identical fermions, the complete state must be antisymmetric. If it separates into spatial and spin factors, there are two possibilities:

| Spatial factor | Spin factor |
| --- | --- |
| Symmetric under exchange | Antisymmetric under exchange |
| Antisymmetric under exchange | Symmetric under exchange |

The antisymmetric spin state is the singlet with total spin quantum number $0$:

$$
\frac{\lvert\uparrow\downarrow\rangle-\lvert\downarrow\uparrow\rangle}{\sqrt{2}}.
$$

The symmetric spin states are the triplet with total spin quantum number $1$:

$$
\lvert\uparrow\uparrow\rangle,\qquad
\frac{\lvert\uparrow\downarrow\rangle+\lvert\downarrow\uparrow\rangle}{\sqrt{2}},\qquad
\lvert\downarrow\downarrow\rangle.
$$

For two electrons in helium, consider the matrix element of the Coulomb repulsion $\electric{e}^2/\mechanical{r}_{12}$ in Gaussian units:

$$
\left\langle n\ell m s,n'\ell'm's'
\left\lvert\frac{\electric{e}^2}{\mechanical{r}_{12}}\right\rvert
n\ell m s,n'\ell'm's'\right\rangle.
$$

The symmetric spatial factor for two electrons is proportional to

$$
\psi_{n\ell m}(\mechanical{\mathbf r}_1)\psi_{n'\ell'm'}(\mechanical{\mathbf r}_2)
+
\psi_{n\ell m}(\mechanical{\mathbf r}_2)\psi_{n'\ell'm'}(\mechanical{\mathbf r}_1).
$$

Both the orbital angular momentum and the spin of a charged particle contribute to its magnetic dipole moment. For a particle with signed charge $\electric{q}$, in Gaussian units,

$$
\magnetic{\boldsymbol{\mu}}
=
\frac{\electric{q}}{2\mechanical{m}\mechanical{c}}
\left(\mechanical{\mathbf L}+g\mechanical{\mathbf S}\right).
$$

Here $g$ is the spin $g$-factor. For an electron, $\electric{q}=-\electric{e}$ and $g\approx2$. The notes mention that the electron's magnetic moment has been measured to about ten significant figures. The handwritten estimate for $g-2$ is $(\alpha/4\pi)^2$. The leading correction is $g-2=\alpha/\pi+O(\alpha^2)$, where $\alpha$ is the fine-structure constant. [Schwinger's original calculation](https://journals.aps.org/pr/abstract/10.1103/PhysRev.73.416)

The magnetic interaction is

$$
H_{\mathrm{mag}}
=
-\magnetic{\boldsymbol{\mu}}\cdot\magnetic{\mathbf B}
=
-\frac{\electric{q}}{2\mechanical{m}\mechanical{c}}
\left(\mechanical{\mathbf L}+g\mechanical{\mathbf S}\right)\cdot\magnetic{\mathbf B}.
$$

For hydrogen in a uniform external magnetic field, choose $\magnetic{\mathbf A}=-\mechanical{\mathbf r}\times\magnetic{\mathbf B}/2$ and $\electric{\phi}_{\mathrm{ext}}=0$. With $g=2$,

$$
H=
\frac{1}{2\mechanical{m}}
\left(\mechanical{\mathbf p}-\frac{\electric{q}}{\mechanical{c}}\magnetic{\mathbf A}\right)^2
-\frac{\electric{e}^2}{\mechanical{r}}
-\frac{\electric{q}}{\mechanical{m}\mechanical{c}}
\mechanical{\mathbf S}\cdot\magnetic{\mathbf B}.
$$

Expanding about the field-free Hamiltonian $H_0$ gives

$$
H=H_0
-\frac{\electric{q}}{2\mechanical{m}\mechanical{c}}
\left(\mechanical{\mathbf p}\cdot\magnetic{\mathbf A}+\magnetic{\mathbf A}\cdot\mechanical{\mathbf p}\right)
-\frac{\electric{q}}{\mechanical{m}\mechanical{c}}\mechanical{\mathbf S}\cdot\magnetic{\mathbf B}
+O(\magnetic{\mathbf A}^2).
$$

To simplify the linear orbital term, cyclically permute the scalar triple products:

$$
\begin{aligned}
\mechanical{\mathbf p}\cdot\magnetic{\mathbf A}+\magnetic{\mathbf A}\cdot\mechanical{\mathbf p}
&=-\frac12\left[
\mechanical{\mathbf p}\cdot(\mechanical{\mathbf r}\times\magnetic{\mathbf B})
+(\mechanical{\mathbf r}\times\magnetic{\mathbf B})\cdot\mechanical{\mathbf p}\right]\\
&=-\frac12\left[
(\mechanical{\mathbf p}\times\mechanical{\mathbf r})\cdot\magnetic{\mathbf B}
-(\magnetic{\mathbf B}\times\mechanical{\mathbf r})\cdot\mechanical{\mathbf p}\right].
\end{aligned}
$$

The momentum operator obeys $[\mechanical{\mathbf p},f(\mechanical{\mathbf r})]=-i\hbar\nabla f$. In particular, it commutes with a uniform $\magnetic{\mathbf B}$. Also, $\mechanical{\mathbf p}\times\mechanical{\mathbf r}=-\mechanical{\mathbf r}\times\mechanical{\mathbf p}$ because the only nonzero Cartesian commutators have matching indices and drop out of the cross product. Therefore,

$$
\begin{aligned}
\mechanical{\mathbf p}\cdot\magnetic{\mathbf A}+\magnetic{\mathbf A}\cdot\mechanical{\mathbf p}
&=-\frac12\left[(\mechanical{\mathbf p}\times\mechanical{\mathbf r})\cdot\magnetic{\mathbf B}
-\magnetic{\mathbf B}\cdot(\mechanical{\mathbf r}\times\mechanical{\mathbf p})\right]\\
&=\magnetic{\mathbf B}\cdot\mechanical{\mathbf L}.
\end{aligned}
$$

The first-order perturbation is thus

$$
H'=-\frac{\electric{q}}{2\mechanical{m}_e\mechanical{c}}\magnetic{\mathbf B}\cdot
\left(\mechanical{\mathbf L}+g\mechanical{\mathbf S}\right).
$$

For a given $\ell$ the field-free energy has $2\ell+1$ orbital states. At fixed $n$, the allowed $\ell$ run from $0$ to $n-1$, giving $\sum_{\ell=0}^{n-1}(2\ell+1)=n^2$ orbital states and a further factor of two for electron spin. The source's count $2(n-1)+1$ applies to the highest $\ell$ alone.

Ignore spin first and choose the $z$-axis along $\magnetic{\mathbf B}$. For an electron $\electric{q}=-\electric{e}$, so

$$
H'=\frac{\electric{e}\magnetic{B}}{2\mechanical{m}_e\mechanical{c}}\mechanical{L}_z.
$$

The perturbation matrix is diagonal in the orbital basis:

$$
\left\langle n'\ell'm'\left\lvert H'\right\rvert n\ell m\right\rangle
=
\magnetic{\mu}_B m\magnetic{B}\,\delta_{nn'}\delta_{\ell\ell'}\delta_{mm'},
\qquad
\magnetic{\mu}_B=\frac{\electric{e}\hbar}{2\mechanical{m}_e\mechanical{c}}.
$$

Here $m$ is the magnetic quantum number and $\magnetic{\mu}_B$ is the Bohr magneton in Gaussian units.

For fixed $n=2$ and $\ell=1$, the orbital Zeeman shifts are $\magnetic{\mu}_B\magnetic{B}m$, with $m=-1,0,1$. Including electron spin with $g=2$ gives

$$
\begin{aligned}
\left\langle n'\ell'm',m_s'\left\lvert H'\right\rvert n\ell m,m_s\right\rangle
&=\frac{\electric{e}\magnetic{B}}{2\mechanical{m}_e\mechanical{c}}
\left\langle n'\ell'm',m_s'\left\lvert\mechanical{L}_z+2\mechanical{S}_z\right\rvert n\ell m,m_s\right\rangle,\\
\Delta\energy{E}^{(1)}
&=\magnetic{\mu}_B\magnetic{B}(m+2m_s),\qquad m_s=\pm\tfrac12.
\end{aligned}
$$

![[Kyle Kabasares - Quantum Mechanics II - Zeeman splitting of the 2p level.png|**Fig. 22** Zeeman shifts for the 2p level, with and without the electron spin contribution.]]

The six spin-orbital states occupy five levels with shifts proportional to $-2,-1,0,1,2$. The level at zero contains $(m,m_s)=(1,-1/2)$ and $(-1,1/2)$. The shift proportional to $-1$ corresponds to $(0,-1/2)$, which resolves the duplicate label in the sketch. A margin note mentions nuclear spin, while the calculation uses the electron's $\mechanical{S}_z$.

In the hydrogen ground state, $n=1$ and $\ell=m=0$. The two spin projections split by $2\magnetic{\mu}_B\magnetic{B}$.

![[Kyle Kabasares - Quantum Mechanics II - Ground-state Zeeman doublet.png|**Fig. 23** Splitting of the hydrogen ground state by the electron spin interaction.]]

A boost mixes electric and magnetic fields. For a particle moving with velocity $\mechanical{\mathbf v}$ in a laboratory electric field with $\magnetic{\mathbf B}=0$, the magnetic field in the instantaneous particle rest frame is $\magnetic{\mathbf B}'\simeq-\mechanical{\mathbf v}\times\electric{\mathbf E}/\mechanical{c}$ in Gaussian units. The dipole coupling $-\magnetic{\boldsymbol{\mu}}_{\mathrm{spin}}\cdot\magnetic{\mathbf B}'$ can also be written as an electric dipole coupling $-\electric{\mathbf d}\cdot\electric{\mathbf E}$, with

$$
\electric{\mathbf d}
=
\frac{\mechanical{\mathbf v}\times\magnetic{\boldsymbol{\mu}}_{\mathrm{spin}}}{\mechanical{c}},
\qquad
\magnetic{\boldsymbol{\mu}}_{\mathrm{spin}}
=\frac{\electric{q}}{\mechanical{m}_e\mechanical{c}}\mechanical{\mathbf S}
\quad(g=2).
$$

For an electron in a central potential energy $V(\mechanical{r})$,

$$
\mechanical{\mathbf F}=-\electric{e}\electric{\mathbf E}=-\nabla V,
\qquad
\electric{e}\electric{\mathbf E}
=\frac{\mechanical{\mathbf r}}{\mechanical{r}}\frac{dV}{d\mechanical{r}}.
$$

Combining the spin coupling to the transformed magnetic field with the Thomas factor of $1/2$ gives the spin–orbit term. Replace $\mechanical{\mathbf v}$ by $\mechanical{\mathbf p}/\mechanical{m}$ at this order:

$$
\begin{aligned}
\Delta H
&=-\frac{1}{2\mechanical{m}^2\mechanical{c}^2}
\mechanical{\mathbf S}\cdot(\mechanical{\mathbf p}\times\nabla V)\\
&=\frac{1}{2\mechanical{m}^2\mechanical{c}^2}
(\nabla V\times\mechanical{\mathbf p})\cdot\mechanical{\mathbf S}\\
&=\frac{1}{2\mechanical{m}^2\mechanical{c}^2}
\frac{1}{\mechanical{r}}\frac{dV}{d\mechanical{r}}\,
\mechanical{\mathbf L}\cdot\mechanical{\mathbf S}.
\end{aligned}
$$

The cross product can be reversed with a minus sign because the curl of $\nabla V$ vanishes.

Homework problem 3(b) decomposes a product of two spinors into spin $0$ and spin $1$. Lower the index on $\chi^\beta$ with

$$
\chi_\alpha=\epsilon_{\alpha\beta}\chi^\beta,\qquad
(\epsilon_{\alpha\beta})=\begin{pmatrix}0&1\\-1&0\end{pmatrix},
$$

and form the matrix $\Psi^\alpha{}_\beta=\eta^\alpha\chi_\beta$:

$$
\begin{aligned}
\Psi
&=
\begin{pmatrix}\eta^1\\\eta^2\end{pmatrix}
\begin{pmatrix}\chi^2&-\chi^1\end{pmatrix}\\
&=\frac12(\eta^1\chi^2-\eta^2\chi^1)I_2+
\begin{pmatrix}
\tfrac12(\eta^1\chi^2+\eta^2\chi^1)&-\eta^1\chi^1\\
\eta^2\chi^2&-\tfrac12(\eta^1\chi^2+\eta^2\chi^1)
\end{pmatrix}.
\end{aligned}
$$

The identity part is invariant under rotations and has spin $0$. The traceless part contains the three spin-$1$ components.

The Pauli matrices identify an ordinary vector with a traceless matrix. For a position vector, this gives

$$
\mechanical{\mathbf r}\cdot\boldsymbol{\sigma}
=\begin{pmatrix}
\mechanical{z}&\mechanical{x}-i\mechanical{y}\\
\mechanical{x}+i\mechanical{y}&-\mechanical{z}
\end{pmatrix}.
$$

For a general vector $\mathbf V$,

$$
\mathbf V\cdot\boldsymbol{\sigma}
=\begin{pmatrix}
V_z&V_x-iV_y\\
V_x+iV_y&-V_z
\end{pmatrix}.
$$

Under a rotation by $\mechanical{\varphi}$ about $\hat{\mathbf n}$, the vector components transform by $R=\exp(-i\mechanical{\varphi}\hat{\mathbf n}\cdot\mathbf L)$, with dimensionless spin-$1$ generators $\mathbf L$. The corresponding spinor rotation is $U=\exp(-i\mechanical{\varphi}\hat{\mathbf n}\cdot\boldsymbol{\sigma}/2)$.

The upper-index spinor column transforms as $\chi'=U\chi$. The lower-index row transforms by the inverse rotation:

$$
\begin{pmatrix}\chi'_1&\chi'_2\end{pmatrix}
=
\begin{pmatrix}\chi^2&-\chi^1\end{pmatrix}U^{-1}.
$$

Consequently the matrix $\Psi$ on the preceding page transforms as $\Psi'=U\Psi U^{-1}$, and $(R\mathbf V)\cdot\boldsymbol{\sigma}=U(\mathbf V\cdot\boldsymbol{\sigma})U^{-1}$.

- Material from the first quarter.
- Perturbation theory, including the treatment of degenerate levels.
- Absorption of light.
- Rotations.
- Coupling of spin and orbital angular momentum.
- Double degeneracy associated with spin when the Hamiltonian is independent of a single electron's spin.

The in-class final is scheduled for Wednesday, March 21, from 1:30 to 3:30 p.m.

##### Practice problem on coupled spins

Consider two spin-$1/2$ particles with spin coupling $A$ and a magnetic field evaluated at their respective positions:

$$
H=A\mechanical{\mathbf S}_1\cdot\mechanical{\mathbf S}_2
-\frac{\electric{q}}{\mechanical{m}\mechanical{c}}
\left[\magnetic{\mathbf B}(\mechanical{\mathbf r}_1)\cdot\mechanical{\mathbf S}_1
+\magnetic{\mathbf B}(\mechanical{\mathbf r}_2)\cdot\mechanical{\mathbf S}_2\right].
$$

One choice is to use the spin–spin coupling as $H_0$ and the field terms as the perturbation. One can also start from $H_0=0$ and diagonalize the full matrix in the four-dimensional spin space. A uniform field allows an exact solution using the coupled basis.

The product basis ordered by the individual spin projections is

$$
\lvert\uparrow\uparrow\rangle,\quad
\lvert\uparrow\downarrow\rangle,\quad
\lvert\downarrow\uparrow\rangle,\quad
\lvert\downarrow\downarrow\rangle.
$$

Alternatively, use the triplet and singlet basis:

$$
\lvert\uparrow\uparrow\rangle,\quad
\lvert\downarrow\downarrow\rangle,\quad
\frac{\lvert\uparrow\downarrow\rangle+\lvert\downarrow\uparrow\rangle}{\sqrt{2}},\quad
\frac{\lvert\uparrow\downarrow\rangle-\lvert\downarrow\uparrow\rangle}{\sqrt{2}}.
$$

In the product basis, $\mechanical{S}_{i1}=(\hbar/2)(\sigma_i\otimes I_2)$ and $\mechanical{S}_{i2}=(\hbar/2)(I_2\otimes\sigma_i)$. The coupling is the sum of the three component products:

$$
\mechanical{\mathbf S}_1\cdot\mechanical{\mathbf S}_2
=\mechanical{S}_{x1}\mechanical{S}_{x2}
+\mechanical{S}_{y1}\mechanical{S}_{y2}
+\mechanical{S}_{z1}\mechanical{S}_{z2}.
$$

For either one-particle factor, the $x$ and $y$ components are

$$
\mechanical{S}_x=\frac{\hbar}{2}\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad
\mechanical{S}_y=\frac{\hbar}{2}\begin{pmatrix}0&-i\\i&0\end{pmatrix}.
$$

## Source

Kyle Kabasares, *Quantum Mechanics II (Physics 215B, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\hbar$ | $\unit{J\,s}$ | Reduced Planck constant | Planck constant divided by $2\pi$. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Particle mass. |
| $\mechanical{x}$ | $\unit{m}$ | Position | Displacement along the oscillator axis. |
| $\energy{E}$, $\energy{E}_0$ | $\unit{J}$ | Energy eigenvalue | Energy of an eigenstate, including the common energy of a degenerate subspace. |
| $\mechanical{z}$, $\mechanical{r}$ | $\unit{m}$ | Vertical position and radius | Position along the drive direction and distance from the origin. |
| $E$ | $\unit{N}$ | Linear perturbation coefficient | Electric field strength multiplied by the signed charge, with the sign set by the potential convention. |
| $\Delta\energy{E}$, $\delta\energy{E}$ | $\unit{J}$ | Energy scales | Width over which the continuum factors change and spacing of individual final levels. |
| $\mechanical{L}$ | $\unit{m}$ | Box side length | Periodic normalization length in each coordinate. |
| $\mechanical{\mathbf p}$, $\mechanical{\mathbf p}'$ | $\unit{kg\,m\,s^{-1}}$ | Momentum vectors | Momentum before and after scattering. |
| $\eta$ | $\unit{s^{-1}}$ | Switching rate | Parameter setting the speed of the smooth switch-on. |
| $\electric{\phi}$ | $\unit{V}$ | Scalar electric potential | Time component of the four-potential multiplied by the speed of light. |
| $\magnetic{\mathbf A}$ | $\unit{T\,m}$ | Magnetic vector potential | Spatial part of the electromagnetic four-potential. |
| $c$ | $\unit{m\,s^{-1}}$ | Speed of light | Vacuum light speed used in the time coordinate and Maxwell equations. |
| $\electric{q}$ | $\unit{C}$ | Electric charge | Signed charge of the particle, with the value expressed in the unit system used for the potentials. |
| $\electric{e}$ | $\unit{C}$ | Elementary charge magnitude | Positive magnitude of the proton or electron charge. |
| $A$, $B$ | $\unit{s^{-1}}$ | Mode emission and absorption coefficients | Spontaneous rate and induced transition rate per photon for a single resonant mode. |
| $\mechanical{\mathbf L}$, $\mechanical{L}_z$ | $\unit{J\,s}$ | Orbital angular momentum | Total orbital angular momentum and its projection on the $z$-axis. |
| $\mechanical{\mathbf S}$, $\mechanical{S}_i$ | $\unit{J\,s}$ | Spin angular momentum | Intrinsic angular momentum and its Cartesian components. |
| $\mechanical{\mathbf J}$, $\mechanical{J}_i$ | $\unit{J\,s}$ | Total angular momentum | Sum of orbital and spin angular momentum or of two subsystems' angular momenta. |
| $\magnetic{\boldsymbol{\mu}},\magnetic{\mu}_B$ | $\unit{erg/G}$ | Magnetic dipole moment and Bohr magneton | The orbital and spin contributions couple to a magnetic field. |
| $\electric{\mathbf d}$ | $\unit{statC}\cdot\unit{cm}$ | Electric dipole moment | Effective electric moment of a moving magnetic dipole in Gaussian units. |
