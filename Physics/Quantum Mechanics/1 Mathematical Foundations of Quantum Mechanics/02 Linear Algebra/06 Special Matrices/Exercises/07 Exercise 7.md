---
title: "Bloch representation and purity of a two-level state"
---

> [!TLDR]
> The Bloch vector determines every two-level density matrix and fixes its purity.

Chapter 6: Special Matrices · Exercise 7 · Intermediate level

Back to [[06 Special Matrices/11 Exercises|Chapter 6 exercises]].

## Question

For the density matrix $\rho$ of a two-level system:

**(a)** Show that every $2\times2$ density matrix can be written as

$$
\rho=\frac12(I+\mathbf r\cdot\boldsymbol\sigma),
\qquad|\mathbf r|\le1.
$$

The vector $\mathbf r$ is the **Bloch vector**.

**(b)** Show that

$$
\operatorname{Tr}(\rho^2)=\frac12(1+|\mathbf r|^2).
$$

When does equality hold?

> [!note]
> The last question follows an equality that already holds for every Bloch vector in the displayed representation. The source does not specify an inequality there. State which equality case you discuss, such as saturation of the preceding bound $|\mathbf r|\le1$ or of the purity bound.

## Worked solution

### (a) Derive the Bloch representation

A density matrix is Hermitian, positive semidefinite, and has trace one. Hermiticity and the trace condition give the general form

$$
\rho=\begin{pmatrix}a&z\\z^*&1-a\end{pmatrix},
\qquad a\in\mathbb R,\quad z\in\mathbb C.
$$

The Pauli matrices are

$$
\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad
\sigma_y=\begin{pmatrix}0&-\mathrm{i}\\\mathrm{i}&0\end{pmatrix},\quad
\sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.
$$

Define real Bloch coordinates $r_x=2\operatorname{Re}z$, $r_y=-2\operatorname{Im}z$, and $r_z=2a-1$. Then

$$
\rho=\frac12
\begin{pmatrix}
1+r_z&r_x-\mathrm{i}r_y\\
r_x+\mathrm{i}r_y&1-r_z
\end{pmatrix}
=\frac12(I+\mathbf r\cdot\boldsymbol\sigma).
$$

The minus sign in $r_y$ follows from the upper-right entry of $\sigma_y$. It is needed to reproduce $z$.

To impose positivity, calculate the characteristic polynomial:

$$
\det(\rho-\lambda I)
=\left(\frac12-\lambda\right)^2
-\frac{r_x^2+r_y^2+r_z^2}{4}=0.
$$

Its roots are

$$
\lambda_\pm=\frac{1\pm|\mathbf r|}{2}.
$$

Both roots are nonnegative exactly when $|\mathbf r|\le1$. Conversely, any real $\mathbf r$ in this unit ball gives a Hermitian trace-one matrix with nonnegative eigenvalues. The representation therefore gives every two-level density matrix.

The Bloch coordinates are observable expectation values: $r_k=\operatorname{Tr}(\rho\sigma_k)$. This follows from $\operatorname{Tr}(\sigma_k)=0$ and $\operatorname{Tr}(\sigma_j\sigma_k)=2\delta_{jk}$.

### (b) Calculate the purity and state the equality case

The Pauli identity is

$$
\sigma_j\sigma_k=\delta_{jk}I
+\mathrm{i}\sum_\ell\varepsilon_{jk\ell}\sigma_\ell.
$$

In $(\mathbf r\cdot\boldsymbol\sigma)^2$, the coefficients $r_jr_k$ are symmetric in $j,k$, whereas $\varepsilon_{jk\ell}$ is antisymmetric. Thus the antisymmetric sum vanishes and

$$
(\mathbf r\cdot\boldsymbol\sigma)^2=|\mathbf r|^2I.
$$

Square the density matrix and take its trace:

$$
\begin{aligned}
\rho^2&=\frac14\left[(1+|\mathbf r|^2)I
+2\mathbf r\cdot\boldsymbol\sigma\right],\\
\operatorname{Tr}(\rho^2)
&=\frac14\left[2(1+|\mathbf r|^2)+0\right]
=\frac12(1+|\mathbf r|^2).
\end{aligned}
$$

The displayed identity holds for every allowed Bloch vector. For the equality case in the purity bound, use $0\le|\mathbf r|^2\le1$:

$$
\frac12\le\operatorname{Tr}(\rho^2)\le1.
$$

The upper bound is reached exactly when $|\mathbf r|=1$. Then the eigenvalues are $1,0$, so the state is pure. The lower bound is reached exactly when $\mathbf r=0$, where $\rho=I/2$ is maximally mixed. This states both possible bound equalities and resolves the source's unspecified equality question.

## Answer

**(a)** Every two-level density matrix has

$$
\boxed{\rho=\frac12(I+\mathbf r\cdot\boldsymbol\sigma),
\qquad\mathbf r\in\mathbb R^3,\quad|\mathbf r|\le1.}
$$

**(b)** Its purity is

$$
\boxed{\operatorname{Tr}(\rho^2)=\frac12(1+|\mathbf r|^2).}
$$

Purity equals one exactly on the unit sphere. It equals one half only at the center. The displayed purity identity itself has no additional equality condition.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mathbf r$, $r_x$, $r_y$, $r_z$ | $1$ | Bloch vector and coordinates | The three Pauli expectation values of the state. |
| $\operatorname{Tr}(\rho^2)$ | $1$ | Purity | The scalar that tests whether the state is pure. |
