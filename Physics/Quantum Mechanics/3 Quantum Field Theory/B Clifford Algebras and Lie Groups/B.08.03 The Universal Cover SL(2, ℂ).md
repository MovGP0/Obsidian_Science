---
title: "The Universal Cover SL(2, ℂ)"
---

> [!TLDR]
> SL(2, ℂ) maps two-to-one onto the proper orthochronous Lorentz group. Undotted and dotted two-component indices distinguish its left and right Weyl spinors.

The universal cover of the proper orthochronous Lorentz group $SO^+(1,3)$ is
$$
SL(2,\mathbb C),
$$
the group of complex $2\times2$ matrices with determinant one.

The projection
$$
SL(2,\mathbb C)\longrightarrow SO^+(1,3)
$$
is a two-to-one homomorphism with kernel $\{\pm\mathbf1\}$.

## Van der Waerden notation

Weyl spinors have undotted or dotted indices:
$$
\signal{\psi}_\alpha,\quad\alpha=1,2,
\qquad
\text{left-chiral }(\tfrac12,0),
\tag{B.90}
$$
$$
\bar{\signal{\chi}}^{\dot\alpha},\quad\dot\alpha=\dot1,\dot2,
\qquad
\text{right-chiral }(0,\tfrac12).
\tag{B.91}
$$

Raise and lower spinor indices with the antisymmetric symbols
$$
\epsilon_{\alpha\beta},
\qquad
\epsilon^{\alpha\beta}=-\epsilon_{\alpha\beta},
\qquad
\epsilon_{12}=1.
$$
For commuting spinors, the invariant bilinear is
$$
\signal{\psi}\signal{\chi}
=\signal{\psi}^\alpha\signal{\chi}_\alpha
=\signal{\psi}^\alpha\epsilon_{\alpha\beta}\signal{\chi}^\beta
=-\signal{\chi}\signal{\psi}.
\tag{B.92}
$$

> [!note]
> The minus sign in the source's (B.92) is the commuting-spinor convention. For Grassmann-odd spinor fields, exchanging the components gives another minus sign, so the contracted bilinear is symmetric under exchange of the two fields.

The van der Waerden matrices $(\sigma^\mu)_{\alpha\dot\alpha}$ relate Weyl-spinor indices to a four-vector:
$$
A^{\alpha\dot\alpha}
=(\sigma^\mu)^{\alpha\dot\alpha}A_\mu
\equiv(\bar\sigma^\mu)^{\dot\alpha\alpha}A_\mu,
\tag{B.93}
$$
where
$$
\sigma^\mu=(\mathbf1,\boldsymbol\sigma),
\qquad
\bar\sigma^\mu=(\mathbf1,-\boldsymbol\sigma).
$$

## Constructing the covering map

Encode four real numbers $a^\mu$ in the Hermitian matrix $H=a^0\mathbf1+a^i\sigma_i$. Direct evaluation gives $\det H=(a^0)^2-\sum_i(a^i)^2$. For $S\in SL(2,\mathbb C)$, $H\mapsto SHS^\dagger$ preserves Hermiticity and this determinant, so it gives a real Lorentz transformation. The kernel consists of $S=\pm\mathbf1$, which act identically on every $H$.

The construction reaches the identity component. Its derivative has all six Lorentz directions, so its image is an open subgroup of that connected component and hence is the whole component. Polar decomposition writes $S=UP$ with $U\in SU(2)$ and positive Hermitian $P$ of determinant one. Writing $P=e^{b^i\sigma_i}$ identifies this factor with $\mathbb R^3$; $SU(2)$ is a three-sphere. This also shows why the covering space is simply connected. See [Tanedo, §2, discussion of the Lorentz double cover and polar decomposition](https://www.classe.cornell.edu/~pt267/files/notes/FlipSUSY.pdf).

In (B.93), equality between the sigma and bar-sigma forms includes the raising and lowering of both spinor indices with epsilon symbols. They are not equal as raw numerical matrices with unchanged index positions. This is essential because, for a spatial index, $\bar\sigma^i=-\sigma^i$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\psi}_\alpha,\signal{\chi}_\alpha,\bar{\signal{\chi}}^{\dot\alpha}$ | — | Weyl spinors | The two-component objects in the invariant bilinear and undotted or dotted notation; normalization is not fixed by the representation. |
