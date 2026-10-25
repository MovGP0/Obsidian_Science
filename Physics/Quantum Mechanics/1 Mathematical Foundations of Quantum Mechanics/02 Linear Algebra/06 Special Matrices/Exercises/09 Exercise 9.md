---
title: "Explicit Schmidt decomposition of a two-qubit state"
---

> [!TLDR]
> Two nonzero Schmidt coefficients show that this pure two-qubit state is entangled.

Chapter 6: Special Matrices · Exercise 9 · Challenge level

Back to [[06 Special Matrices/11 Exercises|Chapter 6 exercises]].

## Question

Let

$$
|\psi\rangle=\frac1{\sqrt3}\bigl(|00\rangle+|01\rangle+|10\rangle\bigr)
\in\mathbb{C}^2\otimes\mathbb{C}^2.
$$

**(a)** Write the coefficient matrix $C$, where

$$
|\psi\rangle=\sum_{ij}\signal{c}_{ij}|i\rangle|j\rangle.
$$

**(b)** Calculate the SVD of $C$. Find its singular values and the Schmidt rank.

**(c)** Is the state entangled? How can this be recognized from the reduced density matrix

$$
\rho_A=\operatorname{Tr}_B\bigl(|\psi\rangle\langle\psi|\bigr)?
$$

## Worked solution

### (a) Form the coefficient matrix

Use the ordered one-qubit basis $\{|0\rangle,|1\rangle\}$ for both subsystems. The row labels refer to subsystem $A$, and the column labels refer to subsystem $B$. Read the coefficient of each product ket:

$$
\signal{c}_{00}=\signal{c}_{01}=\signal{c}_{10}=\frac1{\sqrt3},
\qquad\signal{c}_{11}=0,
\qquad
C=\frac1{\sqrt3}\begin{pmatrix}1&1\\1&0\end{pmatrix}.
$$

The sum of the squared amplitudes is $3(1/3)=1$, so the state is normalized.

### (b) Calculate the SVD and the Schmidt vectors

The squares of the singular values are the eigenvalues of

$$
CC^\dagger=C^\dagger C
=\frac13\begin{pmatrix}2&1\\1&1\end{pmatrix}.
$$

For either of these matrices, the characteristic equation is

$$
\left(\frac23-\lambda\right)
\left(\frac13-\lambda\right)-\frac19=0
\quad\Longrightarrow\quad
\lambda^2-\lambda+\frac19=0.
$$

Thus

$$
\lambda_\pm=\frac{3\pm\sqrt5}{6},
\qquad
s_+=\sqrt{\lambda_+}=\frac{1+\sqrt5}{2\sqrt3},
\qquad
s_-=\sqrt{\lambda_-}=\frac{\sqrt5-1}{2\sqrt3}.
$$

For explicit vectors, define two positive real helper numbers

$$
\alpha=\sqrt{\frac{5+\sqrt5}{10}},
\qquad
\beta=\sqrt{\frac{5-\sqrt5}{10}}.
$$

They obey $\alpha^2+\beta^2=1$ and $\beta/\alpha=(\sqrt5-1)/2$. Solving the first eigenvector equation, $(2/3-\lambda)x+y/3=0$, gives $y/x=3\lambda-2$. For $\lambda_+$ this is $\beta/\alpha$; for $\lambda_-$ it is $-\alpha/\beta$. Normalized eigenvectors are therefore

$$
q_+=\begin{pmatrix}\alpha\\\beta\end{pmatrix},
\qquad
q_-=\begin{pmatrix}-\beta\\\alpha\end{pmatrix}.
$$

Their inner product is zero. Direct multiplication by $C$ gives

$$
Cq_+=s_+q_+,
\qquad
Cq_-=-s_-q_-.
$$

The negative sign in the second equation matters. An SVD requires nonnegative singular values. Choose right singular vectors $v_+=q_+$ and $v_-=q_-$, and choose the left singular vectors $u_k=Cv_k/s_k$:

$$
u_+=\begin{pmatrix}\alpha\\\beta\end{pmatrix},
\qquad
u_-=\begin{pmatrix}\beta\\-\alpha\end{pmatrix}.
$$

Consequently an explicit SVD is

$$
U=\begin{pmatrix}\alpha&\beta\\\beta&-\alpha\end{pmatrix},
\quad
\Sigma=\begin{pmatrix}s_+&0\\0&s_-\end{pmatrix},
\quad
V^\dagger=\begin{pmatrix}\alpha&\beta\\-\beta&\alpha\end{pmatrix}.
$$

The columns of $U$ and $V$ are orthonormal. To check reconstruction, use

$$
\alpha\beta=\frac1{\sqrt5},\qquad
s_++s_-=\frac{\sqrt5}{\sqrt3},\qquad
s_+\alpha^2-s_-\beta^2=\frac1{\sqrt3},\qquad
s_+\beta^2-s_-\alpha^2=0.
$$

These identities give

$$
U\Sigma V^\dagger
=\begin{pmatrix}
s_+\alpha^2-s_-\beta^2&(s_++s_-)\alpha\beta\\
(s_++s_-)\alpha\beta&s_+\beta^2-s_-\alpha^2
\end{pmatrix}
=\frac1{\sqrt3}\begin{pmatrix}1&1\\1&0\end{pmatrix}=C.
$$

For a coefficient-matrix SVD $C=U\Sigma V^\dagger$, the subsystem-$B$ Schmidt kets contain the complex conjugates of the columns of $V$. All entries here are real, so no conjugation changes them. The Schmidt kets are

$$
\begin{aligned}
|u_+\rangle_A&=\alpha|0\rangle_A+\beta|1\rangle_A,&
|v_+^*\rangle_B&=\alpha|0\rangle_B+\beta|1\rangle_B,\\
|u_-\rangle_A&=\beta|0\rangle_A-\alpha|1\rangle_A,&
|v_-^*\rangle_B&=-\beta|0\rangle_B+\alpha|1\rangle_B.
\end{aligned}
$$

The complete Schmidt decomposition is

$$
\boxed{|\psi\rangle
=s_+|u_+\rangle_A|v_+^*\rangle_B
+s_-|u_-\rangle_A|v_-^*\rangle_B.}
$$

Both coefficients are nonzero, so the Schmidt rank is two. The vector signs above absorb the negative eigenvalue of $C$ while keeping both Schmidt coefficients positive.

### (c) Calculate the reduced density matrix and test entanglement

The partial trace sums over the same $B$ index in the bra and ket:

$$
(\rho_A)_{ik}
=\sum_{j=0}^1\signal{c}_{ij}\signal{c}_{kj}^{\,*}.
$$

For example, $(\rho_A)_{00}=1/3+1/3=2/3$, $(\rho_A)_{11}=1/3+0=1/3$, and $(\rho_A)_{01}=1/3+0=1/3$. Hence

$$
\rho_A=CC^\dagger
=\frac13\begin{pmatrix}2&1\\1&1\end{pmatrix}
=s_+^2|u_+\rangle\langle u_+|
+s_-^2|u_-\rangle\langle u_-|.
$$

Its trace is one, and its eigenvalues are $\lambda_\pm=s_\pm^2$. Both are nonzero. Calculate its purity directly:

$$
\rho_A^2=\frac19\begin{pmatrix}5&3\\3&2\end{pmatrix},
\qquad
\operatorname{Tr}(\rho_A^2)=\frac59+\frac29=\frac79<1.
$$

A pure bipartite state is a product state exactly when its reduced density matrix is pure. Here the global state is pure, but $\rho_A$ is mixed. Thus the state is entangled. Its Schmidt rank of two gives the same result. Since $C$ is real and symmetric, the other reduced state is also $\rho_B=C^T\overline C=\rho_A$.

## Answer

**(a)** $C=\frac1{\sqrt3}\begin{pmatrix}1&1\\1&0\end{pmatrix}$.

**(b)** With the explicit $U$, $\Sigma$, and $V^\dagger$ above, the Schmidt coefficients are

$$
\boxed{s_+=\sqrt{\frac{3+\sqrt5}{6}},\qquad
s_-=\sqrt{\frac{3-\sqrt5}{6}}.}
$$

The Schmidt rank is two, and the stated Schmidt kets give the full decomposition.

**(c)** The state is entangled because

$$
\boxed{\rho_A=\frac13\begin{pmatrix}2&1\\1&1\end{pmatrix},
\qquad\operatorname{Tr}(\rho_A^2)=\frac79<1.}
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{c}_{ij}$ | $1$ | Product-basis amplitude | The coefficient of $\vert i\rangle_A\vert j\rangle_B$ in the normalized state. |
| $s_+$, $s_-$ | $1$ | Schmidt amplitudes | The positive coefficients of the two orthogonal product states. |
| $\operatorname{Tr}(\rho_A^2)$ | $1$ | Reduced-state purity | The purity of the state after subsystem B is traced out. |
