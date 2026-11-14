---
title: "Functions of operators, continuous bases, and Gaussian packets"
---

> [!TLDR]
> Evaluate operator functions, use completeness in continuous bases, and connect change of basis with Gaussian wave-packet uncertainty.

## Worked lecture material

##### Shankar, Mathematical Introduction §1.9 — Functions of operators

Scalars are called $c$-numbers and operators $q$-numbers. Given $f(x)=\sum_{n=0}^\infty a_nx^n$ for a scalar $x$, the corresponding operator series defines $f(\Omega)=\sum_{n=0}^\infty a_n\Omega^n$ wherever it converges. For example,

$$
e^\Omega=\sum_{n=0}^\infty\frac{\Omega^n}{n!}.
$$

For a Hermitian matrix $\Omega$, work in its eigenbasis. If $\Omega=\operatorname{diag}(w_1,w_2,\ldots,w_N)$, then $\Omega^m=\operatorname{diag}(w_1^m,w_2^m,\ldots,w_N^m)$. The exponential is diagonal with entries $\sum_{m=0}^\infty w_i^m/m!=e^{w_i}$.

**Exercise 1.9.1**

For $f(\Omega)=\sum_{n=0}^\infty\Omega^n$, ask when the series represents $(I-\Omega)^{-1}$. In the eigenbasis, write the partial sum as the identity plus diagonal terms with entries $w_i,w_i^2,\ldots,w_i^n$. Each diagonal entry is a scalar geometric series.

For the matrix geometric series, each diagonal series $\sum_{n=0}^{\infty}w_i^n$ must converge. This holds exactly when $\lvert w_i\rvert<1$ for every $i$.

**Exercise 1.9.2**

If $H=H^\dagger$, show that $U=e^{iH}$ is unitary. Taking the adjoint term by term in the exponential gives

$$
U^\dagger=(e^{iH})^\dagger=e^{-iH^\dagger}=e^{-iH}.
$$

The exponents commute, so $UU^\dagger=e^{iH}e^{-iH}=e^0=I$.

**Exercise 1.9.3**

Show that $\det U=e^{i\operatorname{Tr}H}$. In the eigenbasis of $H$, write $H=\operatorname{diag}(h_1,\ldots,h_N)$, so $U=\operatorname{diag}(e^{ih_1},\ldots,e^{ih_N})$. The determinant of a diagonal matrix is the product of its diagonal entries.

$$
\det U=\prod_{k=1}^Ne^{ih_k}
=e^{i\sum_{k=1}^N h_k}
=e^{i\operatorname{Tr}H}.
$$

The handwritten intermediate product is labeled $\operatorname{Tr}(e^{iH})$. It is $\det(e^{iH})$.

##### Derivatives of operators with respect to parameters

For an operator $\Theta(\lambda)$, define

$$
\frac{d\Theta}{d\lambda}
=\lim_{\Delta\lambda\to0}\frac{\Theta(\lambda+\Delta\lambda)-\Theta(\lambda)}{\Delta\lambda}.
$$

In a fixed matrix basis, differentiate the entries. For $\Theta(\lambda)=e^{\lambda\Omega}$ with Hermitian $\Omega$, use the eigenbasis to get $\Theta'=\Omega e^{\lambda\Omega}=e^{\lambda\Omega}\Omega$. The series gives the same result for a non-Hermitian matrix.

$$
\frac{d}{d\lambda}\sum_{n=0}^{\infty}\frac{\lambda^n\Omega^n}{n!}
=\Omega\sum_{n=1}^{\infty}\frac{\lambda^{n-1}\Omega^{n-1}}{(n-1)!}
=\Omega e^{\lambda\Omega}.
$$

With constant $\Omega$, the first-order operator equation $\Theta'-\Theta\Omega=0$ has solution

$$
\Theta(\lambda)=C\exp\left(\int_0^\lambda\Omega\,d\lambda'\right)
=Ce^{\lambda\Omega},
$$

where $C=\Theta(0)$ is the constant operator of integration. The notes suggest an integrating factor. Operator order matters because $q$-numbers need not commute.

Functions of a single operator commute, so $e^{\alpha\Omega}e^{\beta\Omega}=e^{(\alpha+\beta)\Omega}$. For two operators the following identities hold when $[\Omega,\Theta]=0$ and can fail otherwise.

$$
e^{\alpha\Omega}e^{\beta\Theta}=e^{\alpha\Omega+\beta\Theta},
\qquad
e^{\alpha\Omega}e^{\beta\Theta}e^{-\alpha\Omega}=e^{\beta\Theta}.
$$

The product rule preserves operator order.

$$
\frac{d}{d\lambda}\big(e^{\lambda\Omega}e^{\lambda\Theta}\big)
=\Omega e^{\lambda\Omega}e^{\lambda\Theta}
+e^{\lambda\Omega}e^{\lambda\Theta}\Theta.
$$

##### Generalization to infinite dimensions — §1.10

For real-valued functions on $[0,L]$, $\langle f\mid g\rangle=\int_0^L f(x)g(x)\,dx$ and $\langle f\mid f\rangle=\int_0^L f(x)^2\,dx$. For complex functions on $[a,b]$,

$$
\langle f\mid g\rangle=\int_a^b f(x)^*g(x)\,dx.
$$

Each point $x$ has a generalized basis ket $\lvert x\rangle$. Distinct points are orthogonal in the sense that $\langle x\mid x'\rangle$ vanishes away from $x=x'$. The resolution of the identity is

$$
\int_a^b\lvert x'\rangle\langle x'\rvert\,dx'=I.
$$

Multiply by $\langle x\rvert$ on the left and $\lvert f\rangle$ on the right to obtain

$$
\int_a^b\langle x\mid x'\rangle\langle x'\mid f\rangle\,dx'
=\langle x\mid I\mid f\rangle=\langle x\mid f\rangle.
$$

The coordinates in this basis are $\langle x\mid f\rangle=f(x)$ and $\langle x'\mid f\rangle=f(x')$.

Write $\langle x\mid x'\rangle=\delta(x-x')$. The delta distribution is supported at $x'=x$. For $\epsilon>0$ and $x$ in the interior,

$$
\int_{x-\epsilon}^{x+\epsilon}\delta(x-x')f(x')\,dx'=f(x),
\qquad
\int_{x-\epsilon}^{x+\epsilon}\delta(x-x')\,dx'=1.
$$

The notes motivate this by replacing $f(x')$ in the shrinking region by $f(x)$ and pulling it outside the integral. Over $[a,b]$, the same normalization holds for $a<x<b$. The delta is real and even.

$$
\delta(x-x')=\langle x\mid x'\rangle
=\langle x'\mid x\rangle^*
=\delta(x'-x)^*=\delta(x'-x).
$$

For its derivative,

$$
\delta'(x-x')=\frac{d}{dx}\delta(x-x')=-\frac{d}{dx'}\delta(x-x').
$$

The centered difference $[f(x+\epsilon)-f(x-\epsilon)]/(2\epsilon)$ motivates the derivative integral. To verify it, differentiate the sifting integral with respect to $x$, or use integration by parts in $x'$ with the boundary term zero.

$$
\int\delta'(x-x')f(x')\,dx'
=\frac{d}{dx}\int\delta(x-x')f(x')\,dx'
=\frac{df(x)}{dx}.
$$

The derivative $\delta'$ is odd. More generally, differentiating the sifting relation $n$ times with respect to $x$ transfers the derivative to the sampled function.

$$
\int \frac{\partial^n}{\partial x^n}\delta(x-x')\,f(x')\,dx'
=\int\delta(x-x')\frac{d^n f(x')}{dx'^n}\,dx'
=f^{(n)}(x).
$$

##### Fourier representation of the delta function

$$
\tilde f(k)=\frac1{\sqrt{2\pi}}\int_{-\infty}^{+\infty}e^{-ikx}f(x)\,dx,
\qquad
f(x')=\frac1{\sqrt{2\pi}}\int_{-\infty}^{+\infty}e^{ikx'}\tilde f(k)\,dk.
$$

Substituting the first equation into the second gives

$$
f(x')=\int_{-\infty}^{+\infty}\left[
\frac1{2\pi}\int_{-\infty}^{+\infty}e^{ik(x'-x)}\,dk\right]f(x)\,dx.
$$

Compare with $f(x')=\int\delta(x'-x)f(x)\,dx$. The bracket is the Fourier representation of the delta distribution.

$$
\delta(x'-x)=\frac1{2\pi}\int_{-\infty}^{+\infty}e^{ik(x'-x)}\,dk.
$$

##### Operators in infinite dimensions

An operator $\Omega$ maps $\lvert f\rangle$ to $\lvert\tilde f\rangle$. For differentiation, $D\lvert f\rangle=\lvert df/dx\rangle$. To find the matrix elements of $D$ in the position basis, multiply the equation by $\langle x\rvert$.

Insert the resolution of the identity between $D$ and $\lvert f\rangle$.

$$
\langle x\mid D\mid f\rangle
=\int\langle x\mid D\mid x'\rangle\langle x'\mid f\rangle\,dx'
=f'(x).
$$

Comparing with the differentiated sifting relation gives the kernel $D_{xx'}=\langle x\mid D\mid x'\rangle=\delta'(x-x')$. The continuous matrix multiplies the components $f_{x'}=f(x')$ by integration over the second index and returns the derivative at the first index. Equivalently its action can be written

$$
\int\delta(x-x')\frac{d}{dx'}f(x')\,dx'=f'(x).
$$

The real, odd derivative of the delta satisfies

$$
D_{x'x}^*=\delta'(x'-x)=-\delta'(x-x')=-D_{xx'}.
$$

Multiplication by $-i$ gives the formally Hermitian kernel $K=-iD$, since $K_{x'x}^*=i\delta'(x'-x)=-i\delta'(x-x')=K_{xx'}$. The notes then check the operator inner product, which requires a suitable domain and boundary conditions.

$$
\langle g\mid K\mid f\rangle
=\langle g\mid Kf\rangle
=\langle Kf\mid g\rangle^*
=\langle f\mid K^\dagger\mid g\rangle^*
=\langle f\mid K\mid g\rangle^*
$$

when $K^\dagger=K$.

Writing both inner products in the position basis and evaluating the kernels reduces the Hermiticity test to an integration by parts.

$$
\langle g\mid Kf\rangle
=-i\int_a^b g^*(x)f'(x)\,dx
=-i[g^*f]_a^b+i\int_a^b(g^*)'(x)f(x)\,dx.
$$

The remaining integral is $\langle Kg\mid f\rangle$. The symmetry condition is that the boundary term vanish for functions in the domain.

On the full real line the notes discuss both decaying functions and generalized plane waves $e^{ikx}$. For plane waves the boundary term involves $e^{i(k-k')x}$. The notes use an average over a long interval, which tends to zero for $k\ne k'$ even though the exponential continues to oscillate.

$$
\lim_{\Delta\to\infty}\frac{1}{\Delta}
\int_L^{L+\Delta}e^{i(k-k')x}\,dx=0
\quad(k\ne k').
$$

##### Eigenvalue problem of $K$

Set $K\lvert k\rangle=k\lvert k\rangle$ and $\psi_k(x)=\langle x\mid k\rangle$. Insert the identity in the position basis.

$$
k\psi_k(x)=\langle x\mid K\mid k\rangle
=\int\langle x\mid K\mid x'\rangle\langle x'\mid k\rangle\,dx'
=-i\int\delta'(x-x')\psi_k(x')\,dx'
=-i\frac{d\psi_k}{dx}.
$$

The position-space eigenfunction of $K=-iD$ is $\psi_k(x)=\langle x\mid k\rangle$. Apply the derivative kernel to the eigenvalue equation.

$$
-i\int_{-\infty}^{\infty}\langle x\mid D\mid x'\rangle\langle x'\mid k\rangle\,dx'
=-i\psi_k'(x)=k\psi_k(x).
$$

The equation $\psi_k'=ik\psi_k$ has characteristic root $ik$ and solution $Ae^{ikx}$. Choose $A=1/\sqrt{2\pi}$ so that the generalized eigenfunctions are delta-normalized.

$$
\langle k\mid k'\rangle
=\int_{-\infty}^{\infty}\psi_k^*(x)\psi_{k'}(x)\,dx
=\frac{1}{2\pi}\int_{-\infty}^{\infty}e^{i(k'-k)x}\,dx
=\delta(k-k').
$$

The plane waves with real $k$ form a generalized basis for expanding normalizable wave packets. Write $f(x)=\langle x\mid f\rangle$ and $f(k)=\langle k\mid f\rangle$. Inserting the identity in each basis gives the Fourier transform pair.

$$
f(k)=\int_{-\infty}^{\infty}\langle k\mid x\rangle\langle x\mid f\rangle\,dx
=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty}e^{-ikx}f(x)\,dx.
$$

$$
f(x)=\int_{-\infty}^{\infty}\langle x\mid k\rangle\langle k\mid f\rangle\,dk
=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty}e^{ikx}f(k)\,dk.
$$

The expanded integrals include the normalization factors implied by the eigenfunctions above.

##### Position in the position and wave-number bases

In the $k$ basis, $\langle k\mid K\mid k'\rangle=k'\delta(k-k')$. Likewise, in the position basis,

$$
X\lvert x\rangle=x\lvert x\rangle,\qquad
\langle x'\mid X\mid x\rangle=x\delta(x'-x).
$$

Inserting the position identity gives the action of $X$ on $f(x)=\langle x\mid f\rangle$.

$$
\begin{aligned}
\langle x\mid X\mid f\rangle
&=\int_{-\infty}^{\infty}\langle x\mid X\mid x'\rangle\langle x'\mid f\rangle\,dx'\\
&=x\int_{-\infty}^{\infty}\delta(x'-x)f(x')\,dx'=xf(x).
\end{aligned}
$$

In the $k$ basis, the same operator has the kernel

$$
\begin{aligned}
\langle k\mid X\mid k'\rangle
&=\int_{-\infty}^{\infty}\langle k\mid X\mid x\rangle\langle x\mid k'\rangle\,dx\\
&=\frac{1}{2\pi}\int_{-\infty}^{\infty}x e^{i(k'-k)x}\,dx\\
&=i\frac{\partial}{\partial k}
\left(\frac{1}{2\pi}\int_{-\infty}^{\infty}e^{i(k'-k)x}\,dx\right)
=i\frac{\partial}{\partial k}\delta(k-k').
\end{aligned}
$$

Thus if $g(k)=\langle k\mid g\rangle$, then $\langle k\mid X\mid g\rangle=i\,dg(k)/dk$. The plane-wave overlaps supply the single factor of $1/(2\pi)$ in the expanded integral.

##### Commutator of position and wave number

In the position representation, $Xf=xf(x)$ and $Kf=-i\,df/dx$. The two products give

$$
(XKf)(x)=-ix\frac{df}{dx},\qquad
(KXf)(x)=-i\frac{d}{dx}\bigl(xf(x)\bigr).
$$

Subtracting and applying the product rule gives

$$
([X,K]f)(x)=-ixf'(x)+ixf'(x)+if(x)=if(x),
\qquad [X,K]=iI.
$$

##### Shankar §1.8. The eigenvalue problem

An operator $\Omega$ sends $\lvert V\rangle$ to $\lvert V'\rangle$. When $\Omega\lvert V\rangle=\omega\lvert V\rangle$ for a nonzero $\lvert V\rangle$, the ket is an eigenket and $\omega$ is its eigenvalue.

**Example 1.8.1.** Every nonzero ket is an eigenket of the identity, with eigenvalue $1$.

**Example 1.8.2.** For a normalized ket $\lvert V\rangle$, let $P_V=\lvert V\rangle\langle V\rvert$. Every nonzero ket parallel to $\lvert V\rangle$ has eigenvalue $1$. Any nonzero perpendicular ket has eigenvalue $0$.

$$
P_V\lvert V_\perp\rangle
=\lvert V\rangle\langle V\mid V_\perp\rangle
=0\lvert V_\perp\rangle.
$$

A ket $\alpha\lvert V\rangle+\beta\lvert V_\perp\rangle$ with both components nonzero has no single eigenvalue under $P_V$.

**Example 1.8.3.** A rotation through $\pi/2$ about the $x$ axis leaves the basis vector $\lvert 1\rangle$ fixed, so $R(\pi/2,\hat{\mathbf i})\lvert 1\rangle=\lvert 1\rangle$. The rotation has two additional eigendirections in $V^3(\mathbb C)$ with complex eigenvalues.

##### Characteristic equation

Rewrite the eigenvalue equation as $(\Omega-\omega I)\lvert V\rangle=\lvert 0\rangle$. Suppose $(\Omega-\omega I)^{-1}$ exists and apply it to both sides.

If the inverse existed, then $\lvert V\rangle=(\Omega-\omega I)^{-1}\lvert 0\rangle=\lvert 0\rangle$, contradicting the nonzero eigenket requirement. Recall that $M^{-1}=\operatorname{adj}(M)/\det M$ when the determinant is nonzero. Here $\operatorname{adj}(M)$ denotes the transpose of the cofactor matrix. Thus nonzero eigenvectors require $\det(\Omega-\omega I)=0$.

Project onto $\langle i\rvert$ and insert the identity $I=\sum_{j=1}^n\lvert j\rangle\langle j\rvert=\sum_{j=1}^n P_j$ before $\lvert V\rangle$.

$$
\sum_{j=1}^n\langle i\mid\Omega-\omega I\mid j\rangle\langle j\mid V\rangle
=\sum_{j=1}^n(\Omega_{ij}-\omega\delta_{ij})V_j=0.
$$

The determinant gives the characteristic polynomial $P^n(\omega)=\sum_{m=0}^n c_m\omega^m$. Its roots solve the characteristic equation $P^n(\omega)=0$.

##### Diagonalization of Hermitian matrices

Consider a Hermitian operator $\Omega$ on $V^n(\mathbb C)$ with orthonormal basis $\lvert 1\rangle,\ldots,\lvert n\rangle$. In an orthonormal basis of its eigenkets $\lvert\omega_1\rangle,\ldots,\lvert\omega_n\rangle$, the matrix is diagonal. The operator $U$ that maps $\lvert i\rangle$ to $\lvert\omega_i\rangle$ is unitary because it maps one orthonormal basis to another. Its columns contain the eigenvector components in the original basis. Every Hermitian matrix in $V^n(\mathbb C)$ can be diagonalized by such a unitary change of basis.

In a passive change of basis, the unitary matrix $U$ built from the orthonormal eigenvectors of a Hermitian $\Omega$ makes $U^\dagger\Omega U$ diagonal.

##### Eigenvalues and normalized eigenvectors

Find the eigenvalues and normalized eigenvectors of

$$
\Omega=\begin{bmatrix}1&3&1\\0&2&0\\0&1&4\end{bmatrix},
\qquad
\Omega^\dagger=\begin{bmatrix}1&0&0\\3&2&1\\1&0&4\end{bmatrix}.
$$

The two matrices differ, so $\Omega$ is non-Hermitian. Subtracting $\omega I$ and expanding the determinant gives

$$
\Omega-\omega I=\begin{bmatrix}1-\omega&3&1\\0&2-\omega&0\\0&1&4-\omega\end{bmatrix},
\qquad
\det(\Omega-\omega I)=(1-\omega)(2-\omega)(4-\omega).
$$

The roots are $\omega_1=1$, $\omega_2=2$, and $\omega_3=4$. For $\omega_1=1$, the eigenvector equation is

$$
\begin{bmatrix}0&3&1\\0&1&0\\0&1&3\end{bmatrix}
\begin{bmatrix}v_1\\v_2\\v_3\end{bmatrix}
=\begin{bmatrix}0\\0\\0\end{bmatrix}.
$$

The equations $3v_2+v_3=0$, $v_2=0$, and $v_2+3v_3=0$ leave $v_1$ free. A normalized choice is $(1,0,0)^{\mathsf T}$. Repeat for the other eigenvalues using Mathematica. For $\omega_2=2$, the vector $(-5,-2,1)^{\mathsf T}$ becomes $(-5,-2,1)^{\mathsf T}/\sqrt{30}$ upon normalization.

For the eigenvalue $\omega_3=4$, the vector $(1,0,3)^{\mathsf T}$ gives the normalized eigenvector

$$
\mathbf V_3=\frac{1}{\sqrt{10}}\begin{bmatrix}1\\0\\3\end{bmatrix}.
$$

##### Sakurai 1.2. Expansion in Pauli matrices

**(a)** Write $X=a_0I+\boldsymbol\sigma\cdot\mathbf a$, where $\mathbf a=(a_1,a_2,a_3)$ and $\boldsymbol\sigma=(\sigma_x,\sigma_y,\sigma_z)$ consists of the Pauli matrices.

$$
\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad
\sigma_y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\quad
\sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.
$$

Expanding the sum gives

$$
X=\begin{pmatrix}a_0+a_3&a_1-ia_2\\a_1+ia_2&a_0-a_3\end{pmatrix},
\qquad
\operatorname{Tr}X=2a_0.
$$

The notes use Mathematica to compute the traces of the Pauli products. Evaluating $\operatorname{Tr}(\sigma_k X)$ component by component gives $2a_1$, $2a_2$, and $2a_3$, respectively. Thus $a_k=\operatorname{Tr}(\sigma_k X)/2$ for $k=1,2,3$, with $\sigma_1=\sigma_x$, $\sigma_2=\sigma_y$, and $\sigma_3=\sigma_z$.

**(b)** Solve for the coefficients from the four entries of $X$.

$$
a_0=\frac{X_{11}+X_{22}}{2},\qquad
a_1=\frac{X_{12}+X_{21}}{2},\qquad
a_2=\frac{X_{21}-X_{12}}{2i},\qquad
a_3=\frac{X_{11}-X_{22}}{2}.
$$

##### Shankar example 4.2.4. Gaussian wave packet

Expand the ket in the position basis and assume a Gaussian profile centered at $a$ with width parameter $\Delta>0$.

$$
\lvert\psi\rangle=\int_{-\infty}^{\infty}\lvert x\rangle\langle x\mid\psi\rangle\,dx
=\int_{-\infty}^{\infty}\lvert x\rangle\psi(x)\,dx,
\qquad
\psi(x)=Ae^{-(x-a)^2/(2\Delta^2)}.
$$

![[Kyle Kabasares - Quantum Mechanics - Gaussian wave packet in position and momentum.png|**Fig. 64** The position-space amplitude is centered at $a$, and the momentum-space amplitude is centered at zero.]]

Normalize the state.

$$
1=\langle\psi\mid\psi\rangle
=\int_{-\infty}^{\infty}\langle\psi\mid x\rangle\langle x\mid\psi\rangle\,dx
=\int_{-\infty}^{\infty}\lvert\psi(x)\rvert^2\,dx
=\lvert A\rvert^2\sqrt{\pi\Delta^2}.
$$

Choose $A=(\pi\Delta^2)^{-1/4}$, so $\psi(x)=(\pi\Delta^2)^{-1/4}e^{-(x-a)^2/(2\Delta^2)}$. The position operator multiplies this wavefunction by $x$.

$$
\langle x\mid X\mid\psi\rangle
=\int_{-\infty}^{\infty}\langle x\mid X\mid x'\rangle\langle x'\mid\psi\rangle\,dx'
=\int_{-\infty}^{\infty}x\delta(x-x')\psi(x')\,dx'=x\psi(x).
$$

The expectation value follows by inserting the position identity between the bra and $X$. With $y=x-a$,

$$
\begin{aligned}
\langle X\rangle
&=\langle\psi\mid X\mid\psi\rangle
=\int_{-\infty}^{\infty}\psi^*(x)x\psi(x)\,dx\\
&=\frac{1}{\sqrt{\pi\Delta^2}}\int_{-\infty}^{\infty}(y+a)e^{-y^2/\Delta^2}\,dy=a.
\end{aligned}
$$

The odd part integrates to zero. The expectation integral uses the squared normalization factor, since it contains both $\psi^*$ and $\psi$.

Calculate the position uncertainty about the mean $\langle X\rangle=a$.

$$
\begin{aligned}
\Delta X
&=\left[\langle\psi\mid(X-\langle X\rangle I)^2\mid\psi\rangle\right]^{1/2}\\
&=\left[\langle X^2\rangle-2\langle X\rangle\langle\psi\mid X\mid\psi\rangle+\langle X\rangle^2\right]^{1/2}\\
&=\left[\langle X^2\rangle-a^2\right]^{1/2}.
\end{aligned}
$$

For the normalized Gaussian,

$$
\langle X^2\rangle
=\frac{1}{\sqrt{\pi\Delta^2}}\int_{-\infty}^{\infty}
e^{-(x-a)^2/(2\Delta^2)}x^2e^{-(x-a)^2/(2\Delta^2)}\,dx
=\frac{\Delta^2}{2}+a^2.
$$

Hence $\Delta X=\Delta/\sqrt{2}$.

## Source

Kyle Kabasares, *Quantum Mechanics (Physics 137, UC Merced 2015)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $R$, $T$ | $1$ | Reflection and transmission coefficients | Ratios of reflected and transmitted flux magnitudes to the incident flux magnitude. |
| $a_0$ | $\unit{m}$ | Bohr radius | Characteristic length in the hydrogen radial wavefunctions. |
