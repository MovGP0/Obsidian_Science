---
title: "Reference Formulas"
---

> [!TLDR]
> This sheet collects spin matrices, Dirac equations, external-line factors, and propagators.

<!-- PDF page 402; unnumbered reference sheet -->

## Pauli Matrices

$$
\sigma_1=\begin{pmatrix}0&1\\1&0\end{pmatrix};\quad
\sigma_2=\begin{pmatrix}0&-i\\i&0\end{pmatrix};\quad
\sigma_3=\begin{pmatrix}1&0\\0&-1\end{pmatrix}
$$

$$
\sigma_i\sigma_j=\delta_{ij}+i\epsilon_{ijk}\sigma_k;\qquad
[\sigma_i,\sigma_j]=2i\epsilon_{ijk}\sigma_k;\qquad
\{\sigma_i,\sigma_j\}=2\delta_{ij}
$$

$$
(\mathbf a\cdot\boldsymbol{\sigma})(\mathbf b\cdot\boldsymbol{\sigma})
=\mathbf a\cdot\mathbf b+i\boldsymbol{\sigma}\cdot(\mathbf a\times\mathbf b);\qquad
e^{i\boldsymbol{\theta}\cdot\boldsymbol{\sigma}}=\cos\theta+i\hat{\boldsymbol{\theta}}\cdot\boldsymbol{\sigma}\sin\theta
$$

## Dirac Matrices

$$
\gamma^0=\begin{pmatrix}1&0\\0&-1\end{pmatrix};\quad
\gamma^i=\begin{pmatrix}0&\sigma_i\\-\sigma_i&0\end{pmatrix};\quad
\gamma^5=i\gamma^0\gamma^1\gamma^2\gamma^3=\begin{pmatrix}0&1\\1&0\end{pmatrix}
$$

$$
\{\gamma^\mu,\gamma^\nu\}=2g^{\mu\nu};\qquad
g^{\mu\nu}=\begin{pmatrix}1&0&0&0\\0&-1&0&0\\0&0&-1&0\\0&0&0&-1\end{pmatrix}
$$

Product rules and trace theorems: see Appendix C.

## Dirac Equation

$$
i\energy{\hbar}\gamma^\mu\partial_\mu\signal{\psi}-\mechanical{m}\mechanical{c}\signal{\psi}=0
$$

$$
(\not{\mechanical{p}}-\mechanical{m}\mechanical{c})\signal{u}=0;\qquad
(\not{\mechanical{p}}+\mechanical{m}\mechanical{c})\signal{v}=0
$$

$$
\signal{\bar u}(\not{\mechanical{p}}-\mechanical{m}\mechanical{c})=0;\qquad
\signal{\bar v}(\not{\mechanical{p}}+\mechanical{m}\mechanical{c})=0
$$

$$
\signal{\bar\psi}=\signal{\psi}^{\dagger}\gamma^0;\qquad
\bar\Gamma=\gamma^0\Gamma^{\dagger}\gamma^0;\qquad
\gamma^0\gamma^\mu\gamma^0=\gamma^{\mu\dagger}
$$

## Feynman Rules

### External Lines

Spin 0: (Nothing)

Spin $\tfrac12$:

$$
\begin{cases}
\text{Incoming particle: }&\signal{u}\\
\text{Incoming antiparticle: }&\signal{\bar v}\\
\text{Outgoing particle: }&\signal{\bar u}\\
\text{Outgoing antiparticle: }&\signal{v}
\end{cases}
$$

Spin 1:

$$
\begin{cases}
\text{Incoming: }&\signal{\epsilon}^{\mu}\\
\text{Outgoing: }&\signal{\epsilon}^{\mu*}
\end{cases}
$$

### Propagators

Spin 0:

$$
\frac{i}{\mechanical{q}^2-(\mechanical{m}\mechanical{c})^2}
$$

Spin $\tfrac12$:

$$
\frac{i(\not{\mechanical{q}}+\mechanical{m}\mechanical{c})}
{\mechanical{q}^2-(\mechanical{m}\mechanical{c})^2}
$$

Spin 1:

$$
\begin{cases}
\displaystyle\text{Massless: }&
\displaystyle\frac{-ig_{\mu\nu}}{\mechanical{q}^2}\\[6pt]
\displaystyle\text{Massive: }&
\displaystyle\frac{-i[g_{\mu\nu}-\mechanical{q}_\mu\mechanical{q}_\nu/(\mechanical{m}\mechanical{c})^2]}
{\mechanical{q}^2-(\mechanical{m}\mechanical{c})^2}
\end{cases}
$$

Vertex factors: see Appendix D.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{\hbar}$ | $\unit{\mathrm{erg\,s}}$ | Reduced Planck constant | The quantum constant in the Dirac equation. |
| $\signal{\psi},\signal{\bar\psi}$ | $\unit{\mathrm{cm^{-3/2}}}$ | Dirac field | The spinor field and its adjoint. |
| $\mechanical{m}$ | $\unit{\mathrm{g}}$ | Particle mass | The mass in the Dirac equation and propagators. |
| $\mechanical{c}$ | $\unit{\mathrm{cm/s}}$ | Speed of light | The conversion factor between mass and momentum. |
| $\mechanical{p},\mechanical{q},\mechanical{q}_\mu$ | $\unit{\mathrm{g\,cm/s}}$ | Four-momentum | The external or internal relativistic momentum. |
| $\signal{u},\signal{v},\signal{\bar u},\signal{\bar v}$ | — | External spinors | The particle and antiparticle states with the chosen normalization. |
| $\signal{\epsilon}^{\mu}$ | $1$ | Polarization vector | The polarization of an external spin-one particle. |
