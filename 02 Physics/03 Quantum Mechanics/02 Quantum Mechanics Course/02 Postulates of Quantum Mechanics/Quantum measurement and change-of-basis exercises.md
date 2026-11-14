---
title: "Quantum measurement and change-of-basis exercises"
---

> [!TLDR]
> Work through the quantum postulates by calculating states and measurements in different bases.

## Worked lecture material

##### Quantum postulates

The position-basis resolution of a momentum ket is

$$
\lvert p\rangle=\int\lvert x\rangle\langle x\mid p\rangle\,dx.
$$

After measuring $\Omega$ and obtaining $w$, the normalized post-measurement state is

$$
\frac{P_w\lvert\psi\rangle}{\sqrt{\langle P_w\psi\mid P_w\psi\rangle}},
$$

where $P_w$ projects onto the eigenspace $V_w$. For orthonormal kets $\lvert w,1\rangle,\lvert w,2\rangle,\lvert w_3\rangle$, the first two share eigenvalue $w$. If

$$
\lvert\psi\rangle=\frac12\lvert w,1\rangle+\frac12\lvert w,2\rangle
+\frac1{\sqrt2}\lvert w_3\rangle,
$$

then outcome $w$ leaves $(\lvert w,1\rangle+\lvert w,2\rangle)/\sqrt2$. With the initial state unknown, the notes write the normalized state in that subspace as $(\alpha\lvert w,1\rangle+\beta\lvert w,2\rangle)/\sqrt{\alpha^2+\beta^2}$ for real $\alpha,\beta$.

**Exercise 4.2.1**

In units of $\hbar$, the three angular momentum matrices are

$$
L_x=\frac1{\sqrt2}\begin{pmatrix}0&1&0\\1&0&1\\0&1&0\end{pmatrix},
\quad
L_y=\frac1{\sqrt2}\begin{pmatrix}0&-i&0\\i&0&-i\\0&i&0\end{pmatrix},
\quad
L_z=\begin{pmatrix}1&0&0\\0&0&0\\0&0&-1\end{pmatrix}.
$$

To obtain the probability of an observable, determine its eigenbasis and project the state onto the eigenkets. In the $\Omega$ basis, $\lvert\psi\rangle=\sum_j\lvert w_j\rangle\langle w_j\mid\psi\rangle$ and a nondegenerate outcome $w_j$ has probability $\lvert\langle w_j\mid\psi\rangle\rvert^2$.

For a different observable $\Lambda$, form the matrix $\Lambda_{ij}=\langle w_i\mid\Lambda\mid w_j\rangle$. Find the eigenvectors $\lvert\lambda_i\rangle$ with components $\langle w_j\mid\lambda_i\rangle$, then compute

$$
\langle\lambda_i\mid\psi\rangle=\sum_j\langle\lambda_i\mid w_j\rangle\langle w_j\mid\psi\rangle.
$$

For part (a), consider $L_z\lvert\psi\rangle=w\lvert\psi\rangle$ with $L_z=\operatorname{diag}(1,0,-1)$. The notes list the $+1$ and $-1$ outcomes for the state in the exercise. The matrix also has a zero eigenvalue.

For part (b), find $\langle L_x\rangle$, $\langle L_x^2\rangle$, and $\Delta L_x$. In the three-dimensional complex Hilbert space, $\lvert\psi\rangle=a\lvert w_1\rangle+b\lvert w_2\rangle+c\lvert w_3\rangle$. The state with $L_z=1$ has coordinates $(1,0,0)^{\mathsf T}$. Then

$$
\langle L_x\rangle
=\begin{pmatrix}1&0&0\end{pmatrix}
\frac1{\sqrt2}\begin{pmatrix}0&1&0\\1&0&1\\0&1&0\end{pmatrix}
\begin{pmatrix}1\\0\\0\end{pmatrix}
=\begin{pmatrix}1&0&0\end{pmatrix}
\begin{pmatrix}0\\1/\sqrt2\\0\end{pmatrix}=0.
$$

Applying the same matrix twice,

$$
L_x^2\begin{pmatrix}1\\0\\0\end{pmatrix}
=\frac12\begin{pmatrix}0&1&0\\1&0&1\\0&1&0\end{pmatrix}
\begin{pmatrix}0\\1\\0\end{pmatrix}
=\frac12\begin{pmatrix}1\\0\\1\end{pmatrix},
\qquad
\langle L_x^2\rangle=\frac12.
$$

The spread in the same units is

$$
\Delta L_x=\sqrt{\langle(L_x-\langle L_x\rangle)^2\rangle}
=\sqrt{\langle L_x^2\rangle}=\frac1{\sqrt2}.
$$

Part (c) asks for the normalized eigenstates and eigenvalues of $L_x$ in the $L_z$ basis. First identify that basis by solving $(L_z-\lambda I)\mathbf v=0$ for $L_z=\operatorname{diag}(1,0,-1)$.

| $\lambda$ | Diagonal of $L_z-\lambda I$ | Normalized eigenvector |
| --- | --- | --- |
| $1$ | $(0,-1,-2)$ | $(1,0,0)^{\mathsf T}$ |
| $0$ | $(1,0,-1)$ | $(0,1,0)^{\mathsf T}$ |
| $-1$ | $(2,1,0)$ | $(0,0,1)^{\mathsf T}$ |

For each eigenvalue, the zero diagonal entry leaves its corresponding component free and the other two equations set their components to zero.

Label the $L_z$ eigenbasis $\lvert1\rangle,\lvert2\rangle,\lvert3\rangle$ and compute $\langle i\mid L_x\mid j\rangle$. The columns of the basis matrix are the coordinate unit vectors, so the representation of $L_x$ is already the one displayed.

$$
L_x-\lambda I=\begin{pmatrix}
-\lambda&1/\sqrt2&0\\
1/\sqrt2&-\lambda&1/\sqrt2\\
0&1/\sqrt2&-\lambda
\end{pmatrix}.
$$

$$
\det(L_x-\lambda I)
=-\lambda(\lambda^2-\tfrac12)+\frac{\lambda}{2}
=-\lambda^3+\lambda.
$$

The roots are $\lambda=-1,0,1$. For $\lambda=-1$, solve $(L_x+I)\mathbf v=0$.

$$
v_1+\frac{v_2}{\sqrt2}=0,
\qquad
\frac{v_1}{\sqrt2}+v_2+\frac{v_3}{\sqrt2}=0,
\qquad
\frac{v_2}{\sqrt2}+v_3=0.
$$

For $\lambda=1$, solve $(L_x-I)\mathbf v=0$. The notes suggest using Mathematica and record the unnormalized eigenvector $(1,\sqrt2,1)^{\mathsf T}$.

For $\lambda=0$, $L_x\mathbf v=0$ gives $v_2=0$ and $v_1=-v_3$. An eigenvector is $(1,0,-1)^{\mathsf T}$, or its negative. For $\lambda=-1$, the notes use Mathematica and obtain $(1,-\sqrt2,1)^{\mathsf T}$.

Divide the three eigenvectors by their lengths $2,\sqrt2,2$. In the $L_z$ basis, the normalized $L_x$ eigenvectors in order $+1,0,-1$ are

$$
\lvert x+\rangle=\begin{pmatrix}1/2\\1/\sqrt2\\1/2\end{pmatrix},
\qquad
\lvert x0\rangle=\begin{pmatrix}1/\sqrt2\\0\\-1/\sqrt2\end{pmatrix},
\qquad
\lvert x-\rangle=\begin{pmatrix}1/2\\-1/\sqrt2\\1/2\end{pmatrix}.
$$

Part (d) asks for the possible outcomes and probabilities of measuring $L_x$ when the particle starts in the state $L_z=-1$. In the $L_z$ basis that state is $(0,0,1)^{\mathsf T}$. Expand it as a linear combination of the three $L_x$ basis states.

The $L_z=-1$ state expands as $a\lvert x+\rangle+b\lvert x0\rangle+c\lvert x-\rangle$. Comparing the three coordinates gives

$$
\frac a2+\frac b{\sqrt2}+\frac c2=0,
\qquad
\frac{a-c}{\sqrt2}=0,
\qquad
\frac a2-\frac b{\sqrt2}+\frac c2=1.
$$

The notes suggest Mathematica to solve the system. The result is $a=1/2$, $b=-1/\sqrt2$, and $c=1/2$, so the probabilities for $L_x=1,0,-1$ are $1/4,1/2,1/4$.

For part (e), the initial state is $\lvert\psi\rangle=(1/2,1/2,1/\sqrt2)^{\mathsf T}$ in the $L_z$ basis. The squared matrix is

$$
L_z^2=\operatorname{diag}(1,0,-1)\operatorname{diag}(1,0,-1)
=\operatorname{diag}(1,0,1).
$$

Shankar's projection rule for a known initial state and a degenerate outcome gives $P_w\lvert\psi\rangle$ up to normalization. The eigenspace for $L_z^2=1$ is the span of $\lvert1\rangle=(1,0,0)^{\mathsf T}$ and $\lvert3\rangle=(0,0,1)^{\mathsf T}$. The projected state is a linear combination of those two vectors.

The projector onto an eigenspace is the sum of outer products of its orthonormal basis kets. For the outcome $L_z^2=1$, the two basis vectors are those with $L_z=+1$ and $-1$.

$$
P_1=\lvert1\rangle\langle1\rvert+\lvert3\rangle\langle3\rvert
=\begin{pmatrix}1&0&0\\0&0&0\\0&0&1\end{pmatrix},
\qquad
P_1\lvert\psi\rangle=\begin{pmatrix}1/2\\0\\1/\sqrt2\end{pmatrix}.
$$

The projected vector has norm $\sqrt{1/4+1/2}=\sqrt3/2$. Therefore

$$
\lvert\psi_{\mathrm{after}}\rangle
=\frac{P_1\lvert\psi\rangle}{\sqrt{\langle P_1\psi\mid P_1\psi\rangle}}
=\frac2{\sqrt3}\begin{pmatrix}1/2\\0\\1/\sqrt2\end{pmatrix}.
$$

A subsequent $L_z$ measurement yields $+1$ with probability $\lvert\langle1\mid\psi_{\mathrm{after}}\rangle\rvert^2=1/3$ and $-1$ with probability $\lvert\langle3\mid\psi_{\mathrm{after}}\rangle\rvert^2=2/3$. The probability of the preceding $L_z^2=1$ outcome is the squared norm of the projection, $3/4$. The notes use $P(w_i)=\lvert\langle w_i\mid\psi\rangle\rvert^2/\langle\psi\mid\psi\rangle$ for a single eigenket.

For part (f), suppose

$$
P(L_z=1)=\frac14,
\qquad
P(L_z=0)=\frac12,
\qquad
P(L_z=-1)=\frac14.
$$

The most general normalized pure state with these probabilities has arbitrary phases $\delta_1,\delta_2,\delta_3$.

$$
\lvert\psi\rangle
=\frac{e^{i\delta_1}}{2}\lvert L_z=1\rangle
+\frac{e^{i\delta_2}}{\sqrt2}\lvert L_z=0\rangle
+\frac{e^{i\delta_3}}{2}\lvert L_z=-1\rangle.
$$

## Source

Kyle Kabasares, *Quantum Mechanics (Physics 137, UC Merced 2015)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\hbar$ | $\unit{J\,s}$ | Reduced Planck constant | Planck constant divided by $2\pi$. |
| $R$, $T$ | $1$ | Reflection and transmission coefficients | Ratios of reflected and transmitted flux magnitudes to the incident flux magnitude. |
