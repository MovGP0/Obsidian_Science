---
title: "Nabla identities and curvilinear coordinates"
catalogue_ids:
  - "13.2"
  - "13.2.6"
  - "13.2.6.1"
  - "13.2.6.2"
  - "13.2.6.3"
  - "13.2.6.4"
  - "13.2.6.5"
  - "13.2.7"
  - "13.2.7.1"
  - "13.2.7.2"
  - "13.2.7.3"
---

> [!TLDR]
> Nabla denotes a differential operator; coordinate scale factors preserve the geometric meanings of gradient, divergence, curl, and Laplacian.

## Spatial differential operations

Read [[Directional derivatives and gradients]], [[Divergence and local expansion]], and [[Curl and local circulation]]. In Cartesian coordinates,

$$
\nabla=\mathbf e_x\partial_x+\mathbf e_y\partial_y+\mathbf e_z\partial_z.
$$

This notation organizes derivatives. It is an operator, so it acts on a specified function or field. The type of the input and output matters:

| Operation | Input | Output | Meaning |
| --- | --- | --- | --- |
| $\nabla f$ | Scalar | Vector | Direction and rate of greatest increase |
| $\nabla\cdot\mathbf F$ | Vector | Scalar | Local outward balance |
| $\nabla\times\mathbf F$ | Vector in 3D | Vector | Local oriented circulation |
| $J=D\mathbf F$ | Vector | Matrix | Complete first derivative |
| $\Delta f=\nabla\cdot\nabla f$ | Scalar | Scalar | Sum of second Cartesian derivatives |

For the vector gradient we retain $J_{ij}=\partial F_i/\partial x_j$, so $D_{\mathbf a}\mathbf F=J\mathbf a$. Nabla's dot and cross symbols do not make every ordinary vector identity valid without product rules.

## Repeated application and calculation rules

For $C^2$ fields, commuting mixed partial derivatives proves

$$
\nabla\times\nabla f=0,\qquad
\nabla\cdot(\nabla\times\mathbf F)=0,
$$
$$
\nabla\times(\nabla\times\mathbf F)
=\nabla(\nabla\cdot\mathbf F)-\Delta\mathbf F.
$$

The vector Laplacian $\Delta\mathbf F$ acts on each Cartesian component. The last identity can define its coordinate-independent Euclidean version; applying a scalar-coordinate Laplacian separately to components in a rotating basis is generally incorrect. For scalar products,

$$
\Delta(fg)=f\Delta g+2\nabla f\cdot\nabla g+g\Delta f,
$$
$$
\nabla(\mathbf F\cdot\mathbf G)
=(\mathbf F\cdot\nabla)\mathbf G+(\mathbf G\cdot\nabla)\mathbf F
+\mathbf F\times(\nabla\times\mathbf G)+\mathbf G\times(\nabla\times\mathbf F).
$$

For example, the middle term in the scalar product formula is required because each first derivative produces two product terms, and a second derivative differentiates both again. The identities are local. They do not establish global existence of potentials on a domain with holes.

## Orthogonal coordinates and scale factors

Let $\mathbf X(q_1,q_2,q_3)$ be a smooth coordinate map with nonzero, mutually perpendicular tangent vectors. Define $h_i=\|\partial\mathbf X/\partial q_i\|$ and $\mathbf e_i=(\partial\mathbf X/\partial q_i)/h_i$. Assume this unit basis is right-handed. Small displacements have lengths $h_i\,dq_i$, and a small box has volume $H\,dq_1dq_2dq_3$, where $H=h_1h_2h_3$.

![[catalogue-ch13-coordinate-lengths.svg|**Fig. C.ch13.3** Equal azimuth changes cover different distances at different cylindrical radii. The length factor for the angular coordinate is ρ.]]

For $\mathbf F=\sum_iF_i\mathbf e_i$, the general formulas are

$$
\nabla f=\sum_i\frac{\partial_{q_i}f}{h_i}\mathbf e_i,
\quad
\nabla\cdot\mathbf F=\frac1H\sum_i\partial_{q_i}\left(\frac{H}{h_i}F_i\right),
$$
$$
(\nabla\times\mathbf F)_i=
\frac{\partial_{q_j}(h_kF_k)-\partial_{q_k}(h_jF_j)}{h_jh_k},
\quad (i,j,k)=(1,2,3),(2,3,1),(3,1,2),
$$
$$
\Delta f=\frac1H\sum_i\partial_{q_i}\left(\frac{H}{h_i^2}\partial_{q_i}f\right).
$$

The gradient follows by comparing $df=\nabla f\cdot d\mathbf X$ with the ordinary differential of $f$. Divergence follows by subtracting opposite face fluxes and dividing by box volume. Curl follows by subtracting opposite edge integrals and dividing by face area. Finally substitute the gradient into divergence to derive the Laplacian. Thus these are geometric calculations, not four unrelated tables. They require orthogonal coordinates and unit-basis components. [Kleitman's MIT derivations](https://math.mit.edu/~djk/18_022/chapter13/contents.html) describe the same construction.

## Cartesian, cylindrical, and spherical expressions

Cartesian coordinates have $h_x=h_y=h_z=1$. Cylindrical coordinates are $(\rho,\phi,z)$ with $\mathbf X=(\rho\cos\phi,\rho\sin\phi,z)$ and scale factors $(1,\rho,1)$. Spherical coordinates are $(r,\theta,\phi)$ with $\mathbf X=(r\sin\theta\cos\phi,r\sin\theta\sin\phi,r\cos\theta)$ and scale factors $(1,r,r\sin\theta)$. Thus

$$
\Delta f=f_{xx}+f_{yy}+f_{zz}
$$

in Cartesian coordinates,

$$
\Delta f=\frac1\rho\partial_\rho(\rho f_\rho)
+\frac1{\rho^2}f_{\phi\phi}+f_{zz}
$$

in cylindrical coordinates, and

$$
\Delta f=\frac1{r^2}\partial_r(r^2f_r)
+\frac1{r^2\sin\theta}\partial_\theta(\sin\theta f_\theta)
+\frac1{r^2\sin^2\theta}f_{\phi\phi}
$$

in spherical coordinates. Explicit gradient, divergence, and curl expressions are given in their linked lessons. Use $\rho>0$ in a cylindrical chart, and $r>0$, $0<\theta<\pi$ in a spherical chart. At coordinate singularities, return to the original geometric field before deciding whether a singularity is real.

## Worked example: coordinate and identity checks

Take $f=x^2+y^2+z^2$. Cartesian differentiation gives $\Delta f=6$. In cylindrical form $f=\rho^2+z^2$, so $\rho^{-1}\partial_\rho(2\rho^2)+2=4+2=6$. In spherical form $f=r^2$, so $r^{-2}\partial_r(2r^3)=6$. All three must agree because they describe the same scalar field.

For $\mathbf F=(xy,0,0)$, divergence is $y$, so $\nabla(\nabla\cdot\mathbf F)=(0,1,0)$. Its Cartesian vector Laplacian is zero. Curl is $(0,0,-x)$ and curl again is $(0,1,0)$, which checks the curl-of-curl identity including its sign.

## Practice and worked answers

1. Compute $\Delta(r^m)$ in three dimensions for $r>0$. **Answer:** differentiate $r^2mr^{m-1}=mr^{m+1}$ and divide by $r^2$. The result is $m(m+1)r^{m-2}$; in particular $1/r$ is harmonic away from zero.
2. Find $\Delta(x^2y^2)$ using the scalar product rule. **Answer:** take $f=x^2$, $g=y^2$. Their gradients are perpendicular, and $\Delta f=\Delta g=2$. Hence the result is $2x^2+2y^2$, also obtained by direct second derivatives.
