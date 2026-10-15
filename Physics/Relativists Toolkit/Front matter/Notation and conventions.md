---
title: "Notation and conventions"
source_pdf: "D:\\GitHub\\books\\poisson-arelativits-toolkit.pdf"
source_page: "xvi"
pdf_page: 16
bead: "Obsidian_Electronics-zj6v.182"
---

> [!TLDR]
> The book uses the metric signature −+++ and geometrized units, with separate index ranges for spacetime and surfaces.

<!-- PDF page 16; printed page xvi -->

I adopt the sign conventions of Misner, Thorne, and Wheeler (1973), with a metric of signature $(-1,1,1,1)$, a Riemann tensor defined by $R^\alpha{}_{\beta\gamma\delta}=\Gamma^\alpha_{\beta\delta,\gamma}+\cdots$, and a Ricci tensor defined by $R_{\alpha\beta}=R^\mu{}_{\alpha\mu\beta}$. Greek indices $(\alpha,\beta,\ldots)$ run from 0 to 3, lower-case Latin indices $(a,b,\ldots)$ run from 1 to 3, and upper-case Latin indices $(A,B,\ldots)$ run from 2 to 3. Geometrized units, in which $\mechanical{G}=\mechanical{c}=1$, are employed.

Here's a list of frequently occurring symbols:

| Symbol | Description |
| --- | --- |
| $x^\alpha$ | Arbitrary coordinates on manifold $\mathcal M$ |
| $y^a$ | Arbitrary coordinates on hypersurface $\Sigma$ |
| $\theta^A$ | Arbitrary coordinates on two-surface $S$ |
| $\stackrel{*}{=}$ | Equals in specified coordinates |
| $e_a^\alpha=\partial x^\alpha/\partial y^a,\quad e_A^\alpha=\partial x^\alpha/\partial\theta^A$ | Holonomic basis vectors |
| $\hat e_\mu^\alpha,\quad\hat e_A^\alpha$ | Orthonormal basis vectors |
| $g_{\alpha\beta}$ | Metric on $\mathcal M$ |
| $h_{ab}=g_{\alpha\beta}e_a^\alpha e_b^\beta$ | Induced metric on $\Sigma$ |
| $\sigma_{AB}=g_{\alpha\beta}e_A^\alpha e_B^\beta$ | Induced metric on $S$ |
| $g,\quad h,\quad\sigma$ | Metric determinants |
| $A_{(\alpha\beta)}=\tfrac12(A_{\alpha\beta}+A_{\beta\alpha})$ | Symmetrization |
| $A_{[\alpha\beta]}=\tfrac12(A_{\alpha\beta}-A_{\beta\alpha})$ | Antisymmetrization |
| $\Gamma^\alpha_{\beta\gamma}$ | Christoffel symbols constructed from $g_{\alpha\beta}$ |
| $\Gamma^a_{bc}$ | Christoffel symbols constructed from $h_{ab}$ |
| $R_{\alpha\beta\gamma\delta},\quad R_{\alpha\beta},\quad R$ | As constructed from $g_{\alpha\beta}$ |
| $R_{abcd},\quad R_{ab},\quad{}^3R$ | As constructed from $h_{ab}$ |
| $\psi_{,\alpha}=\partial_\alpha\psi$ | Partial differentiation with respect to $x^\alpha$ |
| $\psi_{,a}=\partial_a\psi$ | Partial differentiation with respect to $y^a$ |
| $A^\alpha{}_{;\beta}=\nabla_\beta A^\alpha$ | Covariant differentiation ($g_{\alpha\beta}$-compatible) |
| $A^a{}_{\mid b}=D_b A^a$ | Covariant differentiation ($h_{ab}$-compatible) |
| $\mathcal L_u A^\alpha$ | Lie derivative of $A^\alpha$ along $u^\alpha$ |
| $[\alpha\ \beta\ \gamma\ \delta]$ | Permutation symbol |
| $\epsilon_{\alpha\beta\gamma\delta}=\sqrt{-g}\,[\alpha\ \beta\ \gamma\ \delta]$ | Levi-Civita tensor |
| $d\Sigma_\mu=\epsilon_{\mu\alpha\beta\gamma}e_1^\alpha e_2^\beta e_3^\gamma\,d^3y$ | Directed surface element on $\Sigma$ |
| $dS_{\mu\nu}=\epsilon_{\mu\nu\alpha\beta}e_2^\alpha e_3^\beta\,d^2\theta$ | Directed surface element on $S$ |
| $n^\alpha$ | Unit normal on $\Sigma$ (if timelike or spacelike) |
| $\varepsilon=n^\alpha n_\alpha$ | $+1$ if $\Sigma$ is timelike, $-1$ if $\Sigma$ is spacelike |
| $K_{ab}=n_{\alpha;\beta}e_a^\alpha e_b^\beta$ | Extrinsic curvature of $\Sigma$ |
| $\mechanical{\theta},\quad\mechanical{\sigma}_{\alpha\beta},\quad\mechanical{\omega}_{\alpha\beta}$ | Expansion, shear, and rotation |
| $d\mechanical{\Omega}^2=d\mechanical{\theta}^2+\sin^2\mechanical{\theta}\,d\mechanical{\phi}^2$ | Line element on unit two-sphere |

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{G}$ | $1$ | Gravitational constant | The constant set to one in geometrized units. |
| $\mechanical{c}$ | $1$ | Speed of light | The constant set to one in geometrized units. |
| $\mechanical{\theta}$ | — | Expansion | The expansion rate with units fixed by the congruence parameter. |
| $\mechanical{\sigma}_{\alpha\beta}$ | — | Shear | The shear rate with units fixed by the congruence parameter. |
| $\mechanical{\omega}_{\alpha\beta}$ | — | Rotation | The rotation rate with units fixed by the congruence parameter. |
| $\mechanical{\theta},\mechanical{\phi}$ | $\unit{\mathrm{rad}}$ | Sphere angles | The polar and azimuthal angles on the unit sphere. |
| $\mechanical{\Omega}$ | $\unit{\mathrm{rad}}$ | Angular distance | The line-element angle on the unit sphere. |
| $x^\alpha,y^a,\theta^A$ | — | Coordinates | The arbitrary spacetime, hypersurface, and two-surface coordinates. |
| $g_{\alpha\beta},h_{ab},\sigma_{AB}$ | — | Metric tensors | The spacetime and induced metrics with coordinate-dependent component units. |
| $R_{\alpha\beta\gamma\delta},R_{abcd}$ | — | Riemann tensors | The spacetime and hypersurface curvature tensors. |
| $R_{\alpha\beta},R_{ab}$ | — | Ricci tensors | The contractions of the corresponding Riemann tensors. |
| $R,{}^3R$ | $\unit{\mathrm{m^{-2}}}$ | Scalar curvatures | The invariant spacetime and hypersurface curvatures in geometrized units. |
| $K_{ab}$ | — | Extrinsic curvature | The curvature of the hypersurface embedding. |
| $d\Sigma_\mu$ | — | Directed hypersurface element | The oriented three-surface element with coordinate-dependent component units. |
| $dS_{\mu\nu}$ | — | Directed two-surface element | The oriented area element with coordinate-dependent component units. |
