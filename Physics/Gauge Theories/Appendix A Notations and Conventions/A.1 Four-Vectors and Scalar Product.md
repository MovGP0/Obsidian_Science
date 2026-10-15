---
title: "A.1 Four-Vectors and Scalar Product"
source_pdf: "D:\\GitHub\\books\\dokumen.pub_gauge-theories-of-the-strong-weak-and-electromagnetic-interactions-second-edition-secondnbsped-9781400848225.pdf"
source_page: "433"
pdf_page: 447
bead: "Obsidian_Electronics-l4vx.100"
---

> [!TLDR]
> The source uses natural units, the metric signature (+, −, −, −), and four-vector notation for spacetime, momentum, and derivatives.

<!-- PDF page 447; printed page 433; includes Appendix A lead-in -->

This book conforms closely to the conventions of Bjorken and Drell [1], except for the normalization of Dirac spinors [2]. It will generally be advantageous to adopt natural units in which the quantities $\mechanical{\hbar}$ and $\mechanical{c}$ are set equal to unity. Appendix B sets out phase-space formulas and the path from Feynman rules to observables. Numerical values and conversion factors are given in appendix C.

Four-vectors are printed in italic type: $a$; (spatial) three-vectors are in boldface: $\mathbf{a}$. Spacetime coordinates $(\signal{t};\mechanical{x},\mechanical{y},\mechanical{z})=(\signal{t};\mechanical{\mathbf{x}})$ are denoted by the contravariant four-vector

$$
\mechanical{x}^\mu\equiv
(\signal{t};\mechanical{x},\mechanical{y},\mechanical{z})
\equiv(\mechanical{x}^0;\mechanical{x}^1,\mechanical{x}^2,\mechanical{x}^3).
\tag{A.1.1}
$$

The metric tensor

$$
g_{\mu\nu}=
\begin{pmatrix}
1&0&0&0\\
0&-1&0&0\\
0&0&-1&0\\
0&0&0&-1
\end{pmatrix} \tag{A.1.2}
$$

generates the covariant four-vector

$$
\mechanical{x}_\mu\equiv
(\mechanical{x}_0;\mechanical{x}_1,\mechanical{x}_2,\mechanical{x}_3)
\equiv g_{\mu\nu}\mechanical{x}^\nu
=(\signal{t};-\mechanical{x},-\mechanical{y},-\mechanical{z}).
\tag{A.1.3}
$$

Unless specifically indicated to the contrary, repeated indices are summed.

The scalar product is

$$
\mechanical{x}^2=\mechanical{x}^\mu\cdot\mechanical{x}_\mu
=\signal{t}^2-\mechanical{\mathbf{x}}^2. \tag{A.1.4}
$$

Thus a general scalar product is

$$
a\cdot b=a^\mu b_\mu=a^0b_0-\mathbf{a}\cdot\mathbf{b}. \tag{A.1.5}
$$

Momentum vectors are written as

$$
\mechanical{p}^\mu=(\energy{E};\mechanical{p_x},\mechanical{p_y},\mechanical{p_z}).
\tag{A.1.6}
$$

<!-- PDF page 448; printed page 434 -->

A convenient notation for the four-gradient is

$$
\partial^\mu=\frac{\partial}{\partial\mechanical{x}_\mu}
\quad\text{or}\quad
\partial_\mu=\frac{\partial}{\partial\mechanical{x}^\mu}, \tag{A.1.7}
$$

in terms of which the position–space momentum operator is

$$
\mathsf{p}^\mu=i\partial^\mu=
(i\partial/\partial\signal{t};-i\nabla). \tag{A.1.8}
$$

Thus

$$
\mathsf{p}^\mu\mathsf{p}_\mu=
-\partial^\mu\partial_\mu
=-[(\partial^2/\partial\signal{t}^2)-\nabla^2]
=-\square, \tag{A.1.9}
$$

where $\nabla^2$ is the Laplacian and $\square$ is the d’Alembertian operator.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\hbar}$ | $\unit{\mathrm{J\,s}}$ | Reduced Planck constant | The quantum of action, set to one in natural units. |
| $\mechanical{c}$ | $\unit{\mathrm{m\,s}}^{-1}$ | Speed of light | The constant that relates time and spatial units, set to one here. |
| $\signal{t}$ | $\unit{\mathrm{GeV}}^{-1}$ | Time coordinate | The time component of the four-vector in natural units. |
| $\mechanical{x},\mechanical{y},\mechanical{z},\mechanical{\mathbf{x}}$ | $\unit{\mathrm{GeV}}^{-1}$ | Spatial coordinates | The position components and three-vector in natural units. |
| $\mechanical{x}^\mu,\mechanical{x}_\mu$ | $\unit{\mathrm{GeV}}^{-1}$ | Spacetime four-vectors | The contravariant and covariant coordinate components. |
| $\mechanical{x}^2$ | $\unit{\mathrm{GeV}}^{-2}$ | Spacetime interval squared | The invariant scalar product with metric signature (+, −, −, −). |
| $\mechanical{p}^\mu,\mechanical{p_x},\mechanical{p_y},\mechanical{p_z}$ | $\unit{\mathrm{GeV}}$ | Momentum components | The physical four-momentum and spatial momentum components. |
| $\energy{E}$ | $\unit{\mathrm{GeV}}$ | Particle energy | The time component of the physical four-momentum. |
