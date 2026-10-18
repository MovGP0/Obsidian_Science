---
title: "Source and vortex reconstruction"
catalogue_ids:
  - "13.4"
  - "13.4.1"
  - "13.4.2"
---

> [!TLDR]
> Source and vortex data can reconstruct a decaying field in all of three-dimensional space, while boundaries can add undetermined harmonic parts.

## Calculation of fields: start with simple examples

Read [[Divergence and local expansion]], [[Curl and local circulation]], [[Integral theorems and boundary identities]], and [[08.07 Improper integrals]]. A field's **source density** is its divergence $s=\nabla\cdot\mathbf F$, and its **vortex density** is its curl $\boldsymbol\omega=\nabla\times\mathbf F$. These are mathematical descriptions; no fluid or force interpretation is required. Below, smooth means that derivatives of every finite order exist and are continuous. Compactly supported means zero outside some bounded region, with no jumps at its edge.

For $\mathbf F_s=(x,y,z)$, source density is three and vortex density is zero. For $\mathbf F_v=(-y,x,0)$, source density is zero and vortex density is $(0,0,2)$. A sum of these fields has both. A constant field has neither, so source and vortex data alone do not always determine a field. One must also specify the domain and boundary behavior.

## Pure source fields

Here **pure source field** means an irrotational field reconstructed from source data with a stated boundary condition; irrotational means curl-free. It does not mean a field nonzero only at a source. Write $\mathbf F_s=-\nabla\phi$. Then $\nabla\times\mathbf F_s=0$ and the source equation becomes

$$
-\Delta\phi=s.
$$

In all of $\mathbb R^3$, for smooth compactly supported $s$, define

$$
\phi(\mathbf x)=\frac1{4\pi}\iiint_{\mathbb R^3}
\frac{s(\mathbf y)}{\|\mathbf x-\mathbf y\|}\,dV_{\mathbf y}.
$$

The observation point is $\mathbf x$; $\mathbf y$ is the variable source point. The integral is finite near $\mathbf y=\mathbf x$, because a small shell has volume proportional to $R^2dR$, so the $1/R$ singularity has integral proportional to $\int R\,dR$. Differentiating once gives

$$
\mathbf F_s(\mathbf x)=\frac1{4\pi}\iiint
s(\mathbf y)\frac{\mathbf x-\mathbf y}{\|\mathbf x-\mathbf y\|^3}\,dV_{\mathbf y}.
$$

This inverse-square kernel is also locally integrable. Higher derivatives require more care than simply differentiating a singular integrand repeatedly. The equation $-\Delta(1/(4\pi R))=\delta$ is interpreted by integration against smooth test functions, or by excluding a small ball and taking a limit. [[Laplace and Poisson boundary problems]] explains its sign and the role of boundary data.

## Pure vortex fields

A **pure vortex field** is the divergence-free part reconstructed from admissible curl data. Seek $\mathbf F_v=\nabla\times\mathbf A$. Then divergence is zero automatically. The curl-of-curl identity gives

$$
\nabla\times\mathbf F_v=\nabla(\nabla\cdot\mathbf A)-\Delta\mathbf A.
$$

Choose $\nabla\cdot\mathbf A=0$, called the Coulomb gauge, and solve $-\Delta\mathbf A=\boldsymbol\omega$ componentwise. For smooth compactly supported $\boldsymbol\omega$ with $\nabla\cdot\boldsymbol\omega=0$, a suitable whole-space construction is

$$
\mathbf A(\mathbf x)=\frac1{4\pi}\iiint
\frac{\boldsymbol\omega(\mathbf y)}{\|\mathbf x-\mathbf y\|}\,dV_{\mathbf y},
$$
$$
\mathbf F_v(\mathbf x)=\frac1{4\pi}\iiint
\frac{\boldsymbol\omega(\mathbf y)\times(\mathbf x-\mathbf y)}{\|\mathbf x-\mathbf y\|^3}\,dV_{\mathbf y}.
$$

The cross-product order follows by taking $\nabla_{\mathbf x}\times\mathbf A$. Since $\nabla_{\mathbf x}(1/R)=-(\mathbf x-\mathbf y)/R^3$, its cross product with $\boldsymbol\omega$ equals $\boldsymbol\omega\times(\mathbf x-\mathbf y)/R^3$. The condition on divergence is necessary, since any curl has zero divergence. Integration by parts, with no distant boundary contribution for compact support, gives $\nabla\cdot\mathbf A=0$.

## Helmholtz decomposition and its limits

A safe sufficient theorem is the following: if $\mathbf F$ is a smooth compactly supported field on $\mathbb R^3$, then the constructions from its actual $s$ and $\boldsymbol\omega$ give

$$
\mathbf F=-\nabla\phi+\nabla\times\mathbf A.
$$

This is a whole-space Helmholtz decomposition. Its proof uses the fundamental solution and integration by parts; the full analytic limit proof is beyond this introductory lesson. The geometric decomposition is discussed in [Tong's vector-calculus notes, §3.2](https://damtp.cam.ac.uk/user/tong/vc/vc.pdf). The compact-support hypothesis is stronger than necessary but avoids ambiguous decay assumptions.

On a bounded domain a harmonic vector part can remain: a field with zero divergence and zero curl. Boundary data select this part. Even in all of space, a constant field would be missed if its behavior at infinity were ignored. Vector potentials also are not unique: replacing $\mathbf A$ by $\mathbf A+\nabla\chi$ leaves its curl unchanged. This freedom concerns the potential, not an arbitrary change in the reconstructed field.

## Worked example: an explicit local decomposition

Consider $\mathbf F=(x-y,x+y,z)$. Split it as $(x,y,z)+(-y,x,0)$. A scalar potential for the source part is $\phi=-(x^2+y^2+z^2)/2$, since $-\nabla\phi=(x,y,z)$. A vector potential for the vortex part is $\mathbf A=(0,0,-(x^2+y^2)/2)$, because its curl is $(-y,x,0)$. The source density is three and vortex density is $(0,0,2)$. Also $\nabla\cdot\mathbf A=0$.

These polynomials do not decay, so the whole-space integral formulas above are not applicable: their integrals would diverge. The direct algebraic decomposition remains valid. This separates a local potential calculation from a theorem with global boundary assumptions.

## Practice and worked answers

1. Can $(x,0,0)$ and $(x+1,0,0)$ be distinguished by divergence and curl alone on a ball? **Answer:** both have divergence one and curl zero. Their difference is the constant field $(1,0,0)$, so boundary data are needed.
2. Find a divergence-free field with curl $(0,0,6)$, and give a vector potential. **Answer:** take $\mathbf F=(-3y,3x,0)$. Its divergence is zero and its curl is $(0,0,6)$. The potential $\mathbf A=(0,0,-3(x^2+y^2)/2)$ has the required curl.
