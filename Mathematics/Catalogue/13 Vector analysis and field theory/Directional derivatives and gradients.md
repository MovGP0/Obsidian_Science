---
title: "Directional derivatives and gradients"
catalogue_ids:
  - "13.2.1"
  - "13.2.1.1"
  - "13.2.1.2"
  - "13.2.1.3"
  - "13.2.2"
  - "13.2.2.1"
  - "13.2.2.2"
  - "13.2.2.3"
  - "13.2.2.4"
  - "13.2.2.5"
  - "13.2.2.6"
  - "13.2.3"
---

> [!TLDR]
> The gradient converts a direction into a scalar rate of change, while the vector gradient is a matrix of component derivatives.

## Directional derivatives of scalars and vectors

Read [[12.02 Partial derivatives]], [[05.05 Dot products]], and [[Scalar and vector fields]]. Choose a point $p$ in an open domain and a fixed unit vector $\mathbf a$. The directional derivative measures change per unit distance along that direction:

$$
D_{\mathbf a}f(p)=\lim_{h\to0}\frac{f(p+h\mathbf a)-f(p)}h.
$$

If $f$ is differentiable, the chain rule gives $D_{\mathbf a}f=\nabla f\cdot\mathbf a$, where the **gradient** is $\nabla f=(f_x,f_y,f_z)$. Differentiability is important: separate directional derivatives can exist without one linear approximation controlling all directions. Continuous first partial derivatives are a sufficient condition. Using a non-unit $\mathbf a$ is allowed algebraically, but then the rate includes its length as a speed factor.

For a vector field, differentiate its components: $D_{\mathbf a}\mathbf F=(D_{\mathbf a}F_x,D_{\mathbf a}F_y,D_{\mathbf a}F_z)$. The result is a vector, unlike a scalar directional derivative.

## Gradient, geometry, and calculation rules

The approximation $f(p+\mathbf h)\approx f(p)+\nabla f(p)\cdot\mathbf h$ explains the gradient. For a unit $\mathbf a$, the dot-product bound gives $|D_{\mathbf a}f|\le\|\nabla f\|$. If the gradient is nonzero, the largest increasing rate is its norm, in its own direction. The largest decreasing rate is in the opposite direction. A curve on a level surface satisfies $f(\mathbf r(s))=c$. Differentiation gives $\nabla f\cdot\mathbf r'=0$, so the gradient is perpendicular to every tangent direction.

Linearity and the product and chain rules give

$$
\nabla(af+bg)=a\nabla f+b\nabla g,\quad
\nabla(fg)=f\nabla g+g\nabla f,\quad
\nabla H(f)=H'(f)\nabla f.
$$

Here $a,b$ are constants. For $g\ne0$, $\nabla(f/g)=(g\nabla f-f\nabla g)/g^2$. A zero gradient at one point does not imply a constant function: $f=x^2+y^2$ has a zero gradient at the origin only. A continuously differentiable function with zero gradient everywhere on a connected open domain is constant, by integrating along piecewise smooth paths.

## Vector gradient and its convention

The vector gradient is the Jacobian matrix $J$ with entries $J_{ij}=\partial F_i/\partial x_j$. Rows label output components; columns label input directions. Then

$$
D_{\mathbf a}\mathbf F=J\mathbf a,\qquad
\mathbf F(p+\mathbf h)=\mathbf F(p)+J(p)\mathbf h+o(\|\mathbf h\|).
$$

Some books transpose the array called $\nabla\mathbf F$. Therefore state this convention before using a matrix product. A matrix is a rectangular array of numbers. In the product $J\mathbf a$, output component $i$ is the weighted sum $\sum_{j=1}^3J_{ij}a_j$. This matrix has nine components in three dimensions. Divergence and curl retain only some combinations of them; neither is the whole derivative.

## Gradient in different coordinates

Cylindrical coordinates use $x=\rho\cos\phi$, $y=\rho\sin\phi$, and $z=z$. An angle increment $d\phi$ travels distance $\rho\,d\phi$. Therefore

$$
\nabla f=\mathbf e_\rho f_\rho+\mathbf e_\phi\frac{f_\phi}{\rho}+\mathbf e_z f_z.
$$

Spherical coordinates are $x=r\sin\theta\cos\phi$, $y=r\sin\theta\sin\phi$, $z=r\cos\theta$. The polar angle $\theta$ runs down from the positive $z$-axis; $\phi$ is azimuth. Away from coordinate singularities,

$$
\nabla f=\mathbf e_r f_r+\mathbf e_\theta\frac{f_\theta}{r}
+\mathbf e_\phi\frac{f_\phi}{r\sin\theta}.
$$

These radius factors convert a coordinate rate to a rate per unit length. Their geometric derivation is developed in [[Nabla identities and curvilinear coordinates]].

## Volume derivative or spatial derivative

In this catalogue, **volume derivative** means a boundary integral divided by enclosed volume as the entire region shrinks to the point. It does not mean dividing a field value by volume. For shrinking balls $B_\epsilon(p)$, outward unit normal $\mathbf n$, and volume $V_\epsilon$, the three versions are

$$
\nabla f(p)=\lim_{\epsilon\to0}\frac1{V_\epsilon}\iint_{\partial B_\epsilon}f\mathbf n\,dS,
$$
$$
\nabla\cdot\mathbf F(p)=\lim_{\epsilon\to0}\frac1{V_\epsilon}\iint_{\partial B_\epsilon}\mathbf F\cdot\mathbf n\,dS,
\quad
\nabla\times\mathbf F(p)=\lim_{\epsilon\to0}\frac1{V_\epsilon}\iint_{\partial B_\epsilon}\mathbf n\times\mathbf F\,dS.
$$

Assume $C^1$ fields near the point. The boundary identities in [[Integral theorems and boundary identities]] turn these into volume averages of the corresponding derivatives, which tend to their values by continuity. In particular, reversing $\mathbf n\times\mathbf F$ to $\mathbf F\times\mathbf n$ changes the sign. The scalar version can also be checked componentwise: apply the divergence theorem to $f\mathbf e_i$.

## Worked example

Let $f=x^2+2y^2+z$ and $p=(1,1,0)$. Its gradient at $p$ is $(2,4,1)$. In direction $\mathbf a=(3,4,0)/5$, the rate is $6/5+16/5=22/5$. The greatest rate is $\sqrt{21}$ in direction $(2,4,1)/\sqrt{21}$. The tangent plane to the level surface $f=3$ is $2(x-1)+4(y-1)+z=0$.

For $\mathbf F=(xy,y^2,z)$, its Jacobian at $p$ is $\begin{pmatrix}1&1&0\\0&2&0\\0&0&1\end{pmatrix}$. Multiplying by $\mathbf a$ gives $D_{\mathbf a}\mathbf F=(7/5,8/5,0)$.

## Practice and worked answers

1. Find the gradient of $f=\log(x^2+y^2)$ where defined. **Answer:** the chain rule gives $(2x,2y)/(x^2+y^2)$; the origin is excluded.
2. Find $D_{\mathbf a}\mathbf F$ for $\mathbf F=(x^2,xy)$ at $(2,1)$ and $\mathbf a=(0,1)$. **Answer:** $J=\begin{pmatrix}2x&0\\y&x\end{pmatrix}$, so the second column at that point is $(0,2)$.
