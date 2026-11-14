---
title: "Dirac notation, representations, and quantum uncertainty"
---

> [!TLDR]
> Use bra-ket notation and inner products to calculate expectations, variances, and uncertainty bounds in discrete and continuous bases.

## Worked lecture material

##### Bra-ket notation — Matrix transpose

The transpose switches rows and columns, sending $m_{ij}$ to $m_{ji}$ and preserving the diagonal entries.

$$
M^{\mathsf T}=
\begin{pmatrix}
m_{11}&m_{21}&m_{31}\\
m_{12}&m_{22}&m_{32}\\
m_{13}&m_{23}&m_{33}
\end{pmatrix}.
$$

##### Hermitian conjugate

$M^\dagger$, read “$M$ dagger,” is the complex conjugate of the transpose, also called the Hermitian conjugate or adjoint matrix. It sends $m_{ij}$ to $m_{ji}^*$.

$$
M^\dagger=
\begin{pmatrix}
m_{11}^*&m_{21}^*&m_{31}^*\\
m_{12}^*&m_{22}^*&m_{32}^*\\
m_{13}^*&m_{23}^*&m_{33}^*
\end{pmatrix}.
$$

A matrix is Hermitian when $M=M^\dagger$. For example,

$$
M=\begin{pmatrix}1&1+i\\1-i&3\end{pmatrix}
=M^\dagger.
$$

Applying a $2\times2$ matrix to a $2\times1$ ket gives another ket.

$$
M\lvert a\rangle
=\begin{pmatrix}m_{11}&m_{12}\\m_{21}&m_{22}\end{pmatrix}
\begin{pmatrix}a_1\\a_2\end{pmatrix}
=\begin{pmatrix}m_{11}a_1+m_{12}a_2\\m_{21}a_1+m_{22}a_2\end{pmatrix}
=\lvert c\rangle.
$$

##### Identity and unitary matrices

$$
I=\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix},
\qquad
UU^\dagger=I\quad\text{for a unitary matrix }U.
$$

##### Determinant and trace

For $M=\begin{pmatrix}a&b\\c&d\end{pmatrix}$,

$$
\det M=\begin{vmatrix}a&b\\c&d\end{vmatrix}=ad-bc,
\qquad
\operatorname{Tr}M=a+d.
$$

The trace is the sum of the diagonal entries. For the $2\times2$ identity, $\det I=(1)(1)-(0)(0)=1$. The handwritten boxed zero has been corrected.

##### Hermitian matrix eigenvectors

For a Hermitian matrix $H=H^\dagger$, an eigenvector is a ket that the matrix maps to a scalar multiple of itself. The scalar is the eigenvalue.

$$
H\lvert a\rangle=\lambda_a\lvert a\rangle,
\qquad
H\lvert b\rangle=\lambda_b\lvert b\rangle.
$$

##### Kets and bras

A ket is a column vector with possibly complex entries. Its corresponding bra is the conjugate row vector.

$$
\lvert a\rangle=\begin{pmatrix}a_1\\a_2\\a_3\\\vdots\\a_n\end{pmatrix},
\qquad
\langle a\rvert=\begin{pmatrix}a_1^*&a_2^*&a_3^*&\cdots&a_n^*\end{pmatrix}.
$$

A complex number has form $z=x+iy$, with $i^2=-1$. Its conjugate is $z^*=x-iy$ and $(z^*)^*=z$.

![[Kyle Kabasares - Quantum Mechanics - Conjugation in the Complex Plane.png|**Fig. 40** Complex conjugation reflects $z=x+iy$ across the real axis.]]

The modulus is the length of the vector. Its square is

$$
\lvert z^*\rvert^2=\lvert z\rvert^2=zz^*=(x+iy)(x-iy)=x^2+y^2.
$$

A real number such as $z=2$ equals its own conjugate.

To add two kets of the same dimension, add the corresponding entries. For example,

$$
\lvert a\rangle+\lvert b\rangle
=\begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}
+\begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix}
=\begin{pmatrix}a_1+b_1\\a_2+b_2\\a_3+b_3\end{pmatrix}
=\lvert c\rangle.
$$

##### Multiplication and inner products

Multiplying a ket by a scalar $\alpha$, which may be complex, multiplies each component.

$$
\lvert c\rangle=\alpha\lvert a\rangle
=\alpha\begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}
=\begin{pmatrix}\alpha a_1\\\alpha a_2\\\alpha a_3\end{pmatrix}.
$$

The product of a bra and a ket is a scalar called the inner product.

$$
\begin{aligned}
\langle a\mid b\rangle
&=\begin{pmatrix}a_1^*&a_2^*&a_3^*\end{pmatrix}
\begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix}
=a_1^*b_1+a_2^*b_2+a_3^*b_3,\\
\langle b\mid a\rangle&=b_1^*a_1+b_2^*a_2+b_3^*a_3,\\
\langle b\mid a\rangle^*&=b_1a_1^*+b_2a_2^*+b_3a_3^*
=\langle a\mid b\rangle.
\end{aligned}
$$

##### Matrices

In $M$, $m_{ij}$ labels the entry in row $i$ and column $j$. Each entry can be complex. Entrywise conjugation sends $m_{ij}$ to $m_{ij}^*$.

$$
M=\begin{pmatrix}m_{11}&m_{12}&m_{13}\\m_{21}&m_{22}&m_{23}\\m_{31}&m_{32}&m_{33}\end{pmatrix},
\qquad
M^*=\begin{pmatrix}m_{11}^*&m_{12}^*&m_{13}^*\\m_{21}^*&m_{22}^*&m_{23}^*\\m_{31}^*&m_{32}^*&m_{33}^*\end{pmatrix}.
$$

##### Heisenberg uncertainty principle

The standard deviations of position and momentum in the same state obey

$$
\sigma_{p_x}\sigma_x\ge\frac{\hbar}{2}.
$$

The canonical commutator is $[\hat x,\hat p_x]=i\hbar$. The handwritten line reverses the order without reversing the sign.

##### Discrete spectrum

A measurement of an observable $Q$ gives an eigenvalue of its Hermitian operator $\hat Q$. Let $f_n$ be its orthonormal eigenfunctions, $\hat Q f_n=\lambda_n f_n$. A state $\Psi$ can be a superposition of these functions.

$$
\Psi=\sum_n c_nf_n,
\qquad
\Psi=c_1f_1+c_2f_2+c_3f_3
\quad\text{for the three-term example}.
$$

Applying the operator gives $\hat Q\lvert\Psi\rangle$. The expectation value is

$$
\langle\Psi\mid\hat Q\mid\Psi\rangle
=\int_{-\infty}^{+\infty}\Psi^*\hat Q\Psi\,dx.
$$

The expansion coefficient is $c_1=\langle f_1\mid\Psi\rangle$. The probability of the corresponding nondegenerate outcome $\lambda_1$ is $\lvert c_1\rvert^2=\lvert\langle f_1\mid\Psi\rangle\rvert^2$. The handwritten line conflates the coefficient and its squared modulus.

##### Continuous spectrum

The eigenvalues are labeled $\lambda(z)$ and the generalized eigenfunctions are $f_z$, where $z$ may be a label other than position. The expansion coefficient is $c(z)=\langle f_z\mid\Psi\rangle$. The probability density is $\lvert c(z)\rvert^2$, so the probability in an interval $dz$ is $\lvert c(z)\rvert^2\,dz$. In a discrete spectrum the corresponding probability is the squared modulus $\lvert c_n\rvert^2$.

##### Expectation values and Dirac notation

For a state expanded as $\Psi=\sum_n c_nf_n$,

$$
\langle Q\rangle
=\int_{-\infty}^{+\infty}\Psi^*\hat Q\Psi\,dx
=\langle\Psi\mid\hat Q\mid\Psi\rangle.
$$

In position space, the bra $\langle\Psi\rvert$ supplies the conjugate $\Psi^*$, the ket $\lvert\Psi\rangle$ represents $\Psi$, and $\hat Q\lvert\Psi\rangle$ represents the result of applying $\hat Q$ to $\Psi$. A normalized state satisfies $\langle\Psi\mid\Psi\rangle=1$. The discrete eigenfunctions satisfy

$$
\langle f_m\mid f_n\rangle=\delta_{mn}
=\begin{cases}1,&m=n,\\0,&m\ne n.\end{cases}
$$

$\delta_{mn}$ is the Kronecker delta.

In $\Psi=\sum_n c_nf_n$, the coefficient $c_n$ gives the amplitude of the eigenfunction $f_n$. Expanding the expectation value and using orthonormality gives

$$
\begin{aligned}
\langle Q\rangle
&=\left\langle\sum_{n'}c_{n'}f_{n'}\;\middle|\;\hat Q\sum_nc_nf_n\right\rangle\\
&=\sum_{n',n}c_{n'}^*c_n\lambda_n\langle f_{n'}\mid f_n\rangle\\
&=\sum_n\lvert c_n\rvert^2\lambda_n.
\end{aligned}
$$

Here $c_n=\langle f_n\mid\Psi\rangle$ and the probability weight is $\lvert c_n\rvert^2$.

##### Momentum space

Write the momentum-space coefficients as $\Phi(\mechanical{p},t)$. The de Broglie relation is $\mechanical{p}=h/\signal{\lambda}=\hbar\signal{k}$, since $\signal{k}=2\pi/\signal{\lambda}$. The handwritten quotient $\hbar/\signal{k}$ has been corrected.

$$
\begin{aligned}
\Phi(\mechanical{p},t)
&=\langle f_p\mid\Psi\rangle
=\frac{1}{\sqrt{2\pi\hbar}}
\int_{-\infty}^{+\infty}e^{-i\mechanical{p}x/\hbar}\Psi(x,t)\,dx,\\
\Psi(x,t)
&=\frac{1}{\sqrt{2\pi\hbar}}
\int_{-\infty}^{+\infty}e^{i\mechanical{p}x/\hbar}\Phi(\mechanical{p},t)\,d\mechanical{p}.
\end{aligned}
$$

The probability of measuring a momentum in the interval of width $d\mechanical{p}$ is $\lvert\Phi(\mechanical{p},t)\rvert^2\,d\mechanical{p}$.

##### Standard deviation and the uncertainty principle

$$
\sigma_Q=\sqrt{\sigma_Q^2}=\sqrt{\langle Q^2\rangle-\langle Q\rangle^2}.
$$

In the classical example, $\langle x\rangle$ is the mean and $x-\langle x\rangle$ is the deviation. The mean deviation is zero. The mean squared deviation is generally positive.

![[Kyle Kabasares - Quantum Mechanics - Standard Deviation on a Bell Curve.png|**Fig. 41** The mean and a distance of one standard deviation marked on a bell curve.]]

The generalized uncertainty principle is

$$
\sigma_A\sigma_B\ge\frac12\left\lvert\left\langle[\hat A,\hat B]\right\rangle\right\rvert.
$$

The modulus makes the bound independent of the order of $A$ and $B$. With $[\hat x,\hat p_x]=i\hbar$, it gives $\sigma_x\sigma_{p_x}\ge\hbar/2$.

##### Generalized uncertainty principle

For observables $A$ and $B$, define $f=(\hat A-\langle A\rangle)\psi$ and $g=(\hat B-\langle B\rangle)\psi$. Then

$$
\sigma_A^2=\langle f\mid f\rangle,
\qquad
\sigma_B^2=\langle g\mid g\rangle.
$$

Quantum observables are represented by Hermitian operators and have real eigenvalues.

A Hermitian operator obeys $\hat A^\dagger=\hat A$ and its eigenvectors for distinct eigenvalues are orthogonal. The bra $\langle g\rvert$ is the conjugate transpose of $\lvert g\rangle$. A row times a column gives $(a\ b\ c)(1,2,3)^{\mathsf T}=a+2b+3c$.

##### Schwarz inequality

$$
\left\lvert\int_a^b f(x)^*g(x)\,dx\right\rvert
\le
\sqrt{\int_a^b\lvert f(x)\rvert^2\,dx\ \int_a^b\lvert g(x)\rvert^2\,dx}.
$$

For real vectors, $0\le\cos^2\theta\le1$ implies

$$
\lvert\mathbf C\cdot\mathbf D\rvert^2
=\lvert\mathbf C\rvert^2\lvert\mathbf D\rvert^2\cos^2\theta
\le\lvert\mathbf C\rvert^2\lvert\mathbf D\rvert^2.
$$

The inner product $z=\langle f\mid g\rangle=\int_a^b f(x)^*g(x)\,dx$ can be complex. If $z=x+iy$, then

$$
\lvert z\rvert^2=(x+iy)(x-iy)=x^2+y^2
\ge y^2
=\left(\frac{z-z^*}{2i}\right)^2.
$$

Since $\langle g\mid f\rangle=\langle f\mid g\rangle^*$,

$$
\lvert\langle f\mid g\rangle\rvert^2
\ge\left(\frac{\langle f\mid g\rangle-\langle g\mid f\rangle}{2i}\right)^2.
$$

Take $\lvert f\rangle=(\hat A-\langle A\rangle)\lvert\psi\rangle$ and $\lvert g\rangle=(\hat B-\langle B\rangle)\lvert\psi\rangle$. The product of the two separate expectation values is $\langle A\rangle\langle B\rangle=\langle\psi\mid\hat A\mid\psi\rangle\langle\psi\mid\hat B\mid\psi\rangle$. The product operator has expectation $\langle\psi\mid\hat A\hat B\mid\psi\rangle$. The state is normalized, $\langle\psi\mid\psi\rangle=1$.

The matrix element $\langle\psi\mid\hat A\mid\psi\rangle$ is the inner product of $\psi$ with $\hat A\psi$. If $\psi$ is an eigenstate of $\hat A$, the latter is a real scalar times $\psi$.

Expand $\lvert\psi\rangle=\sum_n c_n\lvert\psi_n\rangle$ in orthonormal eigenstates of $\hat B$ with eigenvalues $b_n$.

$$
\langle B\rangle
=\left\langle\psi\;\middle|\;\sum_n b_nc_n\psi_n\right\rangle
=\sum_n b_n\lvert c_n\rvert^2.
$$

For the product of the operators,

$$
\langle\hat A\hat B\rangle
=\langle\psi\mid\hat A\hat B\mid\psi\rangle
=\left\langle\psi\;\middle|\;\sum_n b_nc_n\hat A\psi_n\right\rangle.
$$

The additional replacement $\hat A\psi_n=a_n\psi_n$ in the notes applies if the chosen basis is also an eigenbasis of $\hat A$.

For the centered vectors $f$ and $g$,

$$
\langle f\mid g\rangle=\langle\hat A\hat B\rangle-\langle A\rangle\langle B\rangle,
\qquad
\langle g\mid f\rangle=\langle\hat B\hat A\rangle-\langle B\rangle\langle A\rangle.
$$

The products of scalar expectations cancel in the difference. Apply Schwarz and the bound by the imaginary part of the inner product.

$$
\begin{aligned}
\sigma_A^2\sigma_B^2
&\ge\lvert\langle f\mid g\rangle\rvert^2\\
&\ge\left[\frac{\langle f\mid g\rangle-\langle g\mid f\rangle}{2i}\right]^2\\
&=\left[\frac{\langle\hat A\hat B\rangle-\langle\hat B\hat A\rangle}{2i}\right]^2
=\left[\frac{\langle[\hat A,\hat B]\rangle}{2i}\right]^2.
\end{aligned}
$$

Taking the square root of the variance inequality gives

$$
\sigma_A\sigma_B\ge\frac12\left\lvert\left\langle[\hat A,\hat B]\right\rangle\right\rvert,
\qquad
\sigma_x\sigma_{p_x}\ge\frac12\lvert i\hbar\rvert=\frac{\hbar}{2}.
$$

##### Discrete states

![[Kyle Kabasares - Quantum Mechanics - Discrete and Continuous Spectra.png|**Fig. 42** The infinite well and harmonic oscillator have discrete levels. The barrier has a continuum, and the well below the outer potential adds discrete bound levels.]] 

A vector can be expressed as a linear combination, such as $\mathbf C=a\mathbf A+b\mathbf B$. The Cartesian unit vectors satisfy $\hat{\mathbf x}\cdot\hat{\mathbf x}=1$ and $\hat{\mathbf y}\cdot\hat{\mathbf x}=0$. For $\mathbf v=v_x\hat{\mathbf x}+v_y\hat{\mathbf y}+v_z\hat{\mathbf z}$, the dot product $\hat{\mathbf x}\cdot\mathbf v=v_x$ selects its $x$ component. For real vectors,

$$
\mathbf A\cdot\mathbf B=\sum_{i=x,y,z}A_iB_i.
$$

The corresponding wavefunction expansion and coefficient extraction are

$$
\Psi=\sum_n c_n\Psi_n,
\qquad
\int\Psi_m^*\Psi_n\,dx=\delta_{mn},
\qquad
c_1=\int\Psi_1^*\Psi\,dx.
$$

The last integral projects the full wavefunction onto the specific basis function $\Psi_1$.

For $\Psi=\sum_n c_n\psi_n$ and $\Phi=\sum_m d_m\psi_m$ in an orthonormal basis,

$$
\int\Psi^*\Phi\,dx
=\sum_{m,n}c_n^*d_m\int\psi_n^*\psi_m\,dx
=\sum_{m,n}c_n^*d_m\delta_{nm}
=\sum_n c_n^*d_n.
$$

Only equal indices contribute. The ket $\lvert\Psi\rangle$ is independent of the basis. Its coordinates require a choice of basis.

##### Linear algebra

A ket is a column, its entrywise conjugate is another column, and the corresponding bra is the conjugate transpose.

$$
\lvert a\rangle=\begin{pmatrix}a_1\\a_2\\\vdots\\a_n\end{pmatrix},
\qquad
\lvert a^*\rangle=\begin{pmatrix}a_1^*\\a_2^*\\\vdots\\a_n^*\end{pmatrix},
\qquad
\langle a\rvert=(a_1^*\ a_2^*\ \cdots\ a_n^*).
$$

For a matrix, $(T^\dagger)_{ij}=T_{ji}^*$. A square matrix is Hermitian, or self-adjoint, if $T=T^\dagger$. It is skew-Hermitian, or anti-Hermitian, if $T=-T^\dagger$.

$$
[\hat x,\hat p_x]f=x(\hat p_x f)-\hat p_x(xf),
\qquad
[S,T]=ST-TS.
$$

$$
(ST)^{\mathsf T}=T^{\mathsf T}S^{\mathsf T},
\qquad
(ST)^\dagger=T^\dagger S^\dagger,
\qquad
T^{-1}=\frac{C^{\mathsf T}}{\det T},
$$

where $C$ is the matrix of cofactors and the last expression requires $\det T\ne0$.

##### Matrix exercise

$$
A=\begin{pmatrix}-1&1&i\\2&0&3\\2i&-2i&2\end{pmatrix},
\qquad
B=\begin{pmatrix}2&0&-i\\0&1&0\\i&3&2\end{pmatrix}.
$$

Determine $[A,B]$, $A^{\mathsf T}$, and $B^{-1}$, and check $BB^{-1}=I$. For the commutator, multiply rows by columns in each order.

$$
AB=\begin{pmatrix}
-3&1+3i&3i\\
4+3i&9&6-2i\\
6i&6-2i&6
\end{pmatrix},
\qquad
BA=\begin{pmatrix}
0&0&0\\
2&0&3\\
6+3i&-3i&12
\end{pmatrix}.
$$

$$
[A,B]=AB-BA
=\begin{pmatrix}
-3&1+3i&3i\\
2+3i&9&3-2i\\
-6+3i&6+i&-6
\end{pmatrix}.
$$

The handwritten $(AB)_{11}$ includes a spurious $1\cdot1$ where the first column of $B$ has zero. This entry and the final subtraction in the last row have been corrected.

The determinant of $B$ is $3$. The notes start the first column of its cofactor matrix:

$$
\begin{pmatrix}
(-1)^{1+1}\begin{vmatrix}1&0\\3&2\end{vmatrix}\\
(-1)^{2+1}\begin{vmatrix}0&-i\\3&2\end{vmatrix}\\
(-1)^{3+1}\begin{vmatrix}0&-i\\1&0\end{vmatrix}
\end{pmatrix}.
$$

The eigenvalue equation $\hat H\psi=\energy{E}\psi$ has a matrix, a vector, and a scalar in a basis representation. The identity leaves a vector unchanged, as in $I(\psi_1,\psi_2,\psi_3)^{\mathsf T}=(\psi_1,\psi_2,\psi_3)^{\mathsf T}$. If $\hat H$ is invertible, multiplying the eigenvalue equation by $\hat H^{-1}$ gives $I\psi=\hat H^{-1}\energy{E}\psi$. For coordinates $c_j$, the bra is $\langle\Psi\rvert=(c_1^*,c_2^*,\ldots,c_n^*)$.

##### More on Dirac notation

$$
\int_{-\infty}^{+\infty}\psi^*\psi\,dx=1,
\qquad
\langle A\rangle=\int_{-\infty}^{+\infty}\psi^*\hat A\psi\,dx.
$$

Normalization sets the first integral to one. For an arbitrary $\hat A$, the second integral gives the expectation value. In $\langle u\mid\hat A\mid u\rangle$, the bra supplies $u^*$ and the ket supplies $u$, which can be complex. The result is real for Hermitian $\hat A$.

An operator can be moved across an inner product by taking its adjoint.

$$
\langle\hat A^\dagger u\mid u\rangle=\langle u\mid\hat A u\rangle.
$$

In the cofactor formula for an inverse, the transpose of the cofactor matrix is the adjugate, historically also called the classical adjoint.

For normalized $u$, $\langle u\mid u\rangle=\int_{-\infty}^{+\infty}u^*u\,dx=1$. In an orthonormal set, $\langle u_n\mid u_{n+1}\rangle=0$ and $\langle u_n\mid u_m\rangle=\delta_{mn}$, which is one for $m=n$ and zero otherwise. Linearity gives

$$
\langle u\mid\hat A\pm\hat B\mid u\rangle
=\langle u\mid\hat A\mid u\rangle\pm\langle u\mid\hat B\mid u\rangle.
$$

Find the eigenvalues of

$$
M=\begin{pmatrix}2&0&-2\\-2i&i&2i\\1&0&-1\end{pmatrix}
$$

by setting $\det(M-\lambda I)=0$. Expand along the first row.

$$
\begin{aligned}
\det(M-\lambda I)
&=(2-\lambda)\begin{vmatrix}i-\lambda&2i\\0&-1-\lambda\end{vmatrix}
-2\begin{vmatrix}-2i&i-\lambda\\1&0\end{vmatrix}\\
&=(2-\lambda)(i-\lambda)(-1-\lambda)+2(i-\lambda)\\
&=(i-\lambda)\big[(2-\lambda)(-1-\lambda)+2\big]\\
&=(i-\lambda)(\lambda^2-\lambda)
=(i-\lambda)\lambda(\lambda-1).
\end{aligned}
$$

The eigenvalues are $\lambda=i,0,1$.

## Source

Kyle Kabasares, *Quantum Mechanics (Physics 137, UC Merced 2015)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\hbar$ | $\unit{J\,s}$ | Reduced Planck constant | Planck constant divided by $2\pi$. |
| $\energy{E}$ | $\unit{J}$ | Energy eigenvalue | Energy associated with a stationary state. |
| $\Psi$ | $\unit{m^{-3/2}}$ in three dimensions | Position-space wavefunction | Probability amplitude for one particle. Its squared magnitude is a probability density. |
| $\signal{\lambda}$ | $\unit{m}$ | Wavelength | Distance through which a sinusoidal wave repeats. |
| $\signal{k}$ | $\unit{m^{-1}}$ | Wave number | Spatial phase change per unit distance. |
| $R$, $T$ | $1$ | Reflection and transmission coefficients | Ratios of reflected and transmitted flux magnitudes to the incident flux magnitude. |
