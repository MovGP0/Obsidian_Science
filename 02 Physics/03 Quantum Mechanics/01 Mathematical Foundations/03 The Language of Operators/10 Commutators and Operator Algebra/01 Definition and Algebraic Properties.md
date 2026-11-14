---
title: "Definition and Algebraic Properties"
---

> [!TLDR]
> The commutator is antisymmetric and linear in both arguments. Its product rules let you calculate commutators without expanding every operator product.

For matrices, every product below is defined on the full vector space. For unbounded operators, a useful sufficient working assumption for these algebraic manipulations is a common dense invariant domain: applying any of the participating operators keeps a test vector in that domain. Mere membership in the separate domains does not ensure that a product is defined.

The product rule is useful because it reduces a long commutator to already known shorter ones. Add and subtract the intermediate product without exchanging any factors. This is why the second term in (10.3) starts with the original left factor of the product. As a sign check, the commutator of two Hermitian matrices must be anti-Hermitian. The result $2i\sigma_z$ below has precisely this property; $2\sigma_z$ would fail it.

> [!definition] Definition 10.1 | Commutator
> The **commutator** of two operators is
>
> $$
> [\hat A,\hat B]=\hat A\hat B-\hat B\hat A.
> $$
>
> The operators **commute** if $[\hat A,\hat B]=0$.

The commutator is itself an operator. Direct substitution verifies the following identities:

$$
[\hat A,\hat B]=-[\hat B,\hat A]
\qquad\text{(antisymmetry)}.
\tag{10.1}
$$

$$
[\hat A,\hat B+\hat C]=[\hat A,\hat B]+[\hat A,\hat C]
\qquad\text{(linearity)}.
\tag{10.2}
$$

$$
[\hat A,\hat B\hat C]=[\hat A,\hat B]\hat C+\hat B[\hat A,\hat C].
\tag{10.3}
$$

$$
[\hat A\hat B,\hat C]=\hat A[\hat B,\hat C]+[\hat A,\hat C]\hat B.
\tag{10.4}
$$

The **Jacobi identity** is printed across two numbered lines in the source. The following displays are one continuous expression:

$$
[\hat A,[\hat B,\hat C]]+[\hat B,[\hat C,\hat A]]
\tag{10.5}
$$

$$
{}+[\hat C,[\hat A,\hat B]]=0.
\tag{10.6}
$$

For unbounded operators, these algebraic expressions require a common domain on which all displayed products are defined.

## Example — Proof of the Leibniz rule

The product rule (10.3) is especially useful. It calculates the commutator of a product without a full expansion:

$$
\begin{aligned}
[\hat A,\hat B\hat C]
&=\hat A\hat B\hat C-\hat B\hat C\hat A\\
&=\hat A\hat B\hat C-\hat B\hat A\hat C
+\hat B\hat A\hat C-\hat B\hat C\hat A\\
&=[\hat A,\hat B]\hat C+\hat B[\hat A,\hat C].
\end{aligned}
$$

Add and subtract $\hat B\hat A\hat C$. This leaves the expression unchanged and allows the commutators to be factored.

## Example — Commutators of the Pauli matrices

Calculate $[\sigma_x,\sigma_y]$:

$$
\sigma_x\sigma_y
=\begin{pmatrix}0&1\\1&0\end{pmatrix}
\begin{pmatrix}0&-i\\i&0\end{pmatrix}
=\begin{pmatrix}i&0\\0&-i\end{pmatrix}=i\sigma_z.
$$

$$
\sigma_y\sigma_x
=\begin{pmatrix}0&-i\\i&0\end{pmatrix}
\begin{pmatrix}0&1\\1&0\end{pmatrix}
=\begin{pmatrix}-i&0\\0&i\end{pmatrix}=-i\sigma_z.
$$

Thus,

$$
[\sigma_x,\sigma_y]=i\sigma_z-(-i\sigma_z)=2i\sigma_z.
$$

By the same calculation, or by cyclic symmetry,

$$
[\sigma_y,\sigma_z]=2i\sigma_x,
\qquad[\sigma_z,\sigma_x]=2i\sigma_y.
$$

In compact form,

$$
[\sigma_i,\sigma_j]=2i\sum_k\epsilon_{ijk}\sigma_k,
$$

where $\epsilon_{ijk}$ is the Levi-Civita symbol. The source uses an implicit sum over the repeated index $k$.
