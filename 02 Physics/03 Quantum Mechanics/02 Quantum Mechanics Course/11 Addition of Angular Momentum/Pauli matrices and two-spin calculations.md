---
title: "Pauli matrices and two-spin calculations"
---

> [!TLDR]
> Calculate spin components with Pauli matrices and change between product and coupled bases for two spin-half particles.

## Worked lecture material

##### Other potentials

![[Kyle Kabasares - Quantum Mechanics - Five Potential Sketches.png|**Fig. 62** An upward parabola, a symmetric finite well, a well with unequal outer heights, an inverted parabola marked with a question, and a ramp joining constant regions.]]

##### Spin up

Use $\hat{\mathbf L}$ for orbital angular momentum, $\hat{\mathbf J}$ for general angular momentum, and $\hat{\mathbf S}$ for spin. The spin ladder operators are $\hat S_\pm=\hat S_x\pm i\hat S_y$.

The spin-up vector in the $z$ basis is $\chi_+=(1,0)^{\mathsf T}$, also denoted $\lvert\uparrow\rangle$.

$$
\hat S_z\chi_+
=\frac{\hbar}{2}\begin{pmatrix}1&0\\0&-1\end{pmatrix}
\begin{pmatrix}1\\0\end{pmatrix}
=\frac{\hbar}{2}\begin{pmatrix}1\\0\end{pmatrix}.
$$

Thus $\chi_+$ is an eigenvector of $\hat S_z$ with eigenvalue $+\hbar/2$.

For the spin-up state, $\hat S_z\lvert\chi_+\rangle=(\hbar/2)\lvert\chi_+\rangle$. Applying squared spin afterward gives

$$
\hat S^2\hat S_z\lvert\chi_+\rangle
=\frac{\hbar}{2}s(s+1)\hbar^2\lvert\chi_+\rangle
=\frac{3\hbar^3}{8}\lvert\chi_+\rangle.
$$

##### Spin angular momentum

Fermions have half-integer spin, with electrons and protons as $s=1/2$ examples. Bosons have integer spin, with the photon as a spin-one example. The notes also list phonons as bosonic excitations.

For spin one-half, the simultaneous eigenvectors of $\hat S^2$ and $\hat S_z$ can be written

$$
\begin{aligned}
\lvert\tfrac12,+\tfrac12\rangle
&=\lvert\uparrow\rangle=\chi_+=\alpha=\begin{pmatrix}1\\0\end{pmatrix},\\
\lvert\tfrac12,-\tfrac12\rangle
&=\lvert\downarrow\rangle=\chi_-=\beta=\begin{pmatrix}0\\1\end{pmatrix}.
\end{aligned}
$$

In this basis, $\hat S_z=(\hbar/2)\operatorname{diag}(1,-1)$ and $\hat S^2\lvert s,m_s\rangle=\frac34\hbar^2\lvert s,m_s\rangle$. Write $\hat S^2$ as a matrix with entries $a,b,c,d$. Applying it to the up vector determines the first column.

$$
\begin{pmatrix}a&b\\c&d\end{pmatrix}\begin{pmatrix}1\\0\end{pmatrix}
=\frac{3\hbar^2}{4}\begin{pmatrix}1\\0\end{pmatrix},
\qquad
a=\frac{3\hbar^2}{4},
\quad c=0.
$$

Apply squared spin to the down vector to determine the second column.

$$
\hat S^2\chi_-=\hat S^2\beta
=\begin{pmatrix}a&b\\c&d\end{pmatrix}\begin{pmatrix}0\\1\end{pmatrix}
=\frac{3\hbar^2}{4}\begin{pmatrix}0\\1\end{pmatrix}.
$$

Thus $b=0$ and $d=3\hbar^2/4$. Both columns together give

$$
\hat S^2=\frac{3\hbar^2}{4}\begin{pmatrix}1&0\\0&1\end{pmatrix}.
$$

The last handwritten line displays the identity matrix with the common prefactor omitted.

##### Spin-$1/2$ particles

In the $z$ basis,

$$
\hat S^2=\frac34\hbar^2\begin{pmatrix}1&0\\0&1\end{pmatrix},
\qquad
\hat S_z=\frac{\hbar}{2}\begin{pmatrix}1&0\\0&-1\end{pmatrix},
\qquad
\hat S_x=\frac{\hbar}{2}\begin{pmatrix}0&1\\1&0\end{pmatrix},
\qquad
\hat S_y=\frac{\hbar}{2}\begin{pmatrix}0&-i\\i&0\end{pmatrix}.
$$

For $\hat S_x$, set $\det(\hat S_x-\lambda I)=0$.

$$
\begin{vmatrix}-\lambda&\hbar/2\\\hbar/2&-\lambda\end{vmatrix}
=\lambda^2-\left(\frac{\hbar}{2}\right)^2=0,
\qquad
\lambda=\pm\frac{\hbar}{2}.
$$

The $z$-basis vectors are $\chi_+=\alpha=(1,0)^{\mathsf T}$ and $\chi_-=\beta=(0,1)^{\mathsf T}$. For the positive $x$ eigenvalue, the matrix equation on $(a,b)^{\mathsf T}$ gives $(b,a)^{\mathsf T}=(a,b)^{\mathsf T}$. Set $a=b=1$ before normalization. Then

$$
\lvert\chi_+^{(x)}\rangle=A\begin{pmatrix}1\\1\end{pmatrix},
\qquad
\langle\chi_+^{(x)}\mid\chi_+^{(x)}\rangle=2\lvert A\rvert^2=1.
$$

Choose the positive real amplitude $A=1/\sqrt2$.

##### Pauli spin matrices

With $\boldsymbol\sigma=(\sigma_x,\sigma_y,\sigma_z)$, the spin operator is $\hat{\mathbf S}=(\hbar/2)\boldsymbol\sigma$. To verify the commutator, multiply in both orders.

$$
\begin{aligned}
[\sigma_x,\sigma_y]
&=\begin{pmatrix}0&1\\1&0\end{pmatrix}\begin{pmatrix}0&-i\\i&0\end{pmatrix}
-\begin{pmatrix}0&-i\\i&0\end{pmatrix}\begin{pmatrix}0&1\\1&0\end{pmatrix}\\
&=\begin{pmatrix}i&0\\0&-i\end{pmatrix}
-\begin{pmatrix}-i&0\\0&i\end{pmatrix}
=2i\begin{pmatrix}1&0\\0&-1\end{pmatrix}
=2i\sigma_z.
\end{aligned}
$$

##### Two spins

The two-particle $z$ basis has the four possible up/down combinations. The notes give $\chi_1=\chi_2=(1,1)^{\mathsf T}/\sqrt2$ and ask for the spin of the combined system.

$$
\hat{\mathbf S}=\hat{\mathbf S}^{(1)}+\hat{\mathbf S}^{(2)},
\qquad
\hat S_z=\hat S_z^{(1)}+\hat S_z^{(2)}.
$$

Each one-particle operator acts on its own factor in the product state.

$$
\hat S_z(\chi_1\otimes\chi_2)
=(\hat S_z\chi_1)\otimes\chi_2
+\chi_1\otimes(\hat S_z\chi_2).
$$

If $\chi_1,\chi_2$ are one-particle $z$ eigenstates, their projections add.

$$
\hat S_z\lvert\chi_1,\chi_2\rangle
=(m_1+m_2)\hbar\lvert\chi_1,\chi_2\rangle.
$$

For $\lvert\uparrow\uparrow\rangle$, $m_1+m_2=\frac12+\frac12=1$. This is the highest state of the $s_{\mathrm{tot}}=1$ multiplet, $\lvert1,1\rangle$. Lower it using the sum of the two one-particle lowering operators.

$$
\begin{aligned}
\hat S_-\lvert\uparrow\uparrow\rangle
&=(\hat S_-^{(1)}+\hat S_-^{(2)})\lvert\uparrow\uparrow\rangle\\
&=\hbar\big(\lvert\downarrow\uparrow\rangle+\lvert\uparrow\downarrow\rangle\big).
\end{aligned}
$$

The sum of the two orthogonal product kets has norm $\sqrt2$. The normalized state is

$$
\lvert1,0\rangle=\frac{\lvert\uparrow\downarrow\rangle+\lvert\downarrow\uparrow\rangle}{\sqrt2}.
$$

Thus $\hat S_-\lvert1,1\rangle=\sqrt2\hbar\lvert1,0\rangle$. The notes also write the normalized combination separately. Each term of $\lvert1,0\rangle$ has net projection $\frac12-\frac12=0$, so $\hat S_z\lvert1,0\rangle=0$. Lowering again gives a multiple of $\lvert1,-1\rangle$, in accord with the general rule $\hat J_-\lvert j,m_j\rangle=C^-_{j m_j}\lvert j,m_j-1\rangle$.

Lowering $\lvert1,0\rangle$ gives a multiple of $\lvert\downarrow\downarrow\rangle=\lvert1,-1\rangle$. Together the states with $s_{\mathrm{tot}}=1$ and $m_{\mathrm{tot}}=1,0,-1$ form the triplet. The singlet has $s_{\mathrm{tot}}=0$, $m_{\mathrm{tot}}=0$.

$$
\lvert0,0\rangle=\frac{\lvert\uparrow\downarrow\rangle-\lvert\downarrow\uparrow\rangle}{\sqrt2}.
$$

##### Coupled and uncoupled spin bases

$\lvert\uparrow\uparrow\rangle$ denotes the product ket $\lvert s_1,m_{s_1};s_2,m_{s_2}\rangle$ with both spins and both projections equal to $1/2$. The coupled ket $\lvert s,m_s\rangle$ labels total spin and total projection.

Acting on $\lvert\uparrow\downarrow\rangle$, the lowering operator on particle 1 produces $\hbar\lvert\downarrow\downarrow\rangle$ and that on particle 2 gives zero. The two mixed product kets are orthonormal, so the unnormalized difference has squared norm $1+1=2$.

The projection quantum numbers $m_s$, $m_\ell$, and $m_j$ range from minus to plus their respective spin or angular momentum quantum number in unit steps.

$$
\hat{\mathbf S}_{\mathrm{tot}}=\hat{\mathbf S}^{(1)}+\hat{\mathbf S}^{(2)},
\qquad
\hat{\mathbf J}_{\mathrm{tot}}=\hat{\mathbf J}^{(1)}+\hat{\mathbf J}^{(2)},
\qquad
\hat J_{\mathrm{tot},x}=\hat J_x^{(1)}+\hat J_x^{(2)}.
$$

The coupled basis expands in product kets with Clebsch–Gordan coefficients.

$$
\lvert j,m_j\rangle=\sum_{m_1,m_2}C^{j_1j_2j}_{m_1m_2m_j}
\lvert j_1,m_1\rangle\lvert j_2,m_2\rangle.
$$

The example expands the product state in the coupled basis.

$$
\lvert1,0\rangle\lvert\tfrac32,\tfrac12\rangle
=\sqrt{\frac35}\lvert\tfrac52,\tfrac12\rangle
+\sqrt{\frac1{15}}\lvert\tfrac32,\tfrac12\rangle
-\sqrt{\frac13}\lvert\tfrac12,\tfrac12\rangle.
$$

The probability of measuring $j=5/2,m_j=1/2$ is the first coefficient's squared modulus, $3/5$.

##### Reading Clebsch–Gordan tables

Choose the table for the constituent angular momenta $j_1,j_2$. The rows correspond to product states and the columns to combined states. Use a row to expand a product state in the combined basis, and a column to expand a combined state in the product basis.

![[Kyle Kabasares - Quantum Mechanics - Clebsch Gordan Table Layout.png|**Fig. 63** The table layout marks the coefficients down the selected combined-state column.]]

The column in the example gives three products with amplitudes $\sqrt A$, $\sqrt B$, and $-\sqrt C$.

$$
\begin{aligned}
\lvert j_{\mathrm{tot}},m_{\mathrm{tot}}\rangle={}&
\sqrt A\,\lvert j_1,m_{1A}\rangle\lvert j_2,m_{2A}\rangle\\
&+\sqrt B\,\lvert j_1,m_{1B}\rangle\lvert j_2,m_{2B}\rangle\\
&-\sqrt C\,\lvert j_1,m_{1C}\rangle\lvert j_2,m_{2C}\rangle.
\end{aligned}
$$

The state is already normalized because $(\sqrt A)^2+(\sqrt B)^2+(\sqrt C)^2=1$.

## Source

Kyle Kabasares, *Quantum Mechanics (Physics 137, UC Merced 2015)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\hbar$ | $\unit{J\,s}$ | Reduced Planck constant | Planck constant divided by $2\pi$. |
| $J_x$ | $\unit{s^{-1}}$ | Probability flux | Signed one-dimensional probability current. |
| $R$, $T$ | $1$ | Reflection and transmission coefficients | Ratios of reflected and transmitted flux magnitudes to the incident flux magnitude. |
