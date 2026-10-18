---
title: "Composite functions and coordinate changes"
catalogue_ids:
  - "6.2.3"
  - "6.2.3.1"
  - "6.2.3.2"
  - "6.2.4"
  - "6.2.4.1"
  - "6.2.4.2"
---

> [!TLDR]
> The chain rule follows all input dependencies; a coordinate change must also transform higher derivative terms and respect its valid domain.

## Follow every input path

Read [[Partial changes and total differentials]] and [[Higher differentials and local approximation]] first. When an input is itself a function of other variables, changes can reach the final output by several routes. Add the contributions of all routes. First write a dependency list, such as $u\mapsto(x(u),y(u))\mapsto f(x,y)$. A variable held fixed in one derivative may vary in another.

## The multivariable chain rule

If $f$ is differentiable near a path $(x(t),y(t))$, and the path is differentiable, then $z(t)=f(x(t),y(t))$ satisfies

$$
\frac{\mathrm dz}{\mathrm dt}=f_x x'(t)+f_y y'(t).
$$

Insert the path's local linear change into $\mathrm df=f_x\,\mathrm dx+f_y\,\mathrm dy$ to see why the terms add. For two new inputs $u,v$, write $x=x(u,v)$, $y=y(u,v)$ and $F(u,v)=f(x(u,v),y(u,v))$. Then

$$
F_u=f_x x_u+f_y y_u,\qquad
F_v=f_x x_v+f_y y_v.
$$

If $f$ also depends explicitly on $t$, the path derivative has an additional $f_t$ term. Do not discard that route. For many inputs, the rule is $DF=Df\,D\phi$: derivative matrices multiply in composition order. The entrywise sums suffice without prior matrix theory; [[12.04 Multivariable chain rules]] gives the matrix version.

## Worked example: verify by direct substitution

Let $f(x,y)=x^2y$, $x=u+v$, and $y=u-v$. The rule gives

$$
F_u=2xy+x^2,\qquad F_v=2xy-x^2.
$$

Substitute $x=u+v$, $y=u-v$ to obtain $F_u=3u^2+2uv-v^2$ and $F_v=u^2-2uv-3v^2$. Independently, expanding $F=(u+v)^2(u-v)=u^3+u^2v-uv^2-v^3$ and differentiating gives exactly these expressions. This checks both input routes and their signs.

## Implicit functions of several inputs

Suppose $G(x,y,z)=0$ and $G$ is $C^1$ near a solution $(a,b,c)$. If $G_z(a,b,c)\ne0$, the implicit function theorem gives a local $C^1$ solution $z=z(x,y)$. Differentiate the identity while holding the other independent input fixed:

$$
G_x+G_z z_x=0,\qquad G_y+G_z z_y=0.
$$

Thus $z_x=-G_x/G_z$ and $z_y=-G_y/G_z$. The theorem supplies local existence and uniqueness of this graph branch; differentiating a relation alone would not prove them. At a point with $G_z=0$, the division and the guaranteed graph description fail. Another coordinate might still work.

For $G=x^2+y^2+z^2-9$ near $(1,2,2)$, $G_z=4\ne0$. Hence $z_x=-1/2$ and $z_y=-1$ there. This is the positive local square-root branch. At a sphere point with $z=0$, that branch is not guaranteed to be a differentiable graph over the $xy$ plane. See [[12.09 Local inversion]] for the theorem's broader setting.

## Change the coordinates rather than the function

A coordinate change rewrites the same inputs with new labels. To have smooth local coordinates, require a smooth map with an invertible derivative. In two variables its derivative determinant is $x_u y_v-x_v y_u$; a nonzero value ensures a smooth local inverse. A zero value needs separate analysis and cannot justify division by this determinant.

The first differential keeps its form after substitution: $f_x\,\mathrm dx+f_y\,\mathrm dy=F_u\,\mathrm du+F_v\,\mathrm dv$. Substitute $\mathrm dx=x_u\,\mathrm du+x_v\,\mathrm dv$ and the analogous expression for $\mathrm dy$, then collect coefficients. This is a change in the description of the same linear map.

## One-variable differential expressions

Let $x=\phi(u)$ with $\phi'\ne0$, and $Y(u)=y(\phi(u))$. Then

$$
\frac{\mathrm dy}{\mathrm dx}=\frac{Y'}{\phi'},\qquad
\frac{\mathrm d^2y}{\mathrm dx^2}
=\frac{Y''}{(\phi')^2}-\frac{Y'\phi''}{(\phi')^3}.
$$

The extra term comes from differentiating $1/\phi'$. For $x=e^u$, these become $y_x=e^{-u}Y'$ and $y_{xx}=e^{-2u}(Y''-Y')$. Consequently $x^2y_{xx}+xy_x$ becomes $Y''$. Replacing a denominator without differentiating its changing coefficient would give a wrong second derivative.

## Two-variable differential expressions

For twice differentiable maps, a second path derivative contains two terms:

$$
\frac{\mathrm d^2}{\mathrm dt^2}f(\mathbf x(t))
=\mathbf x'(t)^{\mathsf T}H_f\mathbf x'(t)+Df\,\mathbf x''(t).
$$

The first is the Hessian's quadratic contribution; the second comes from curvature of the coordinate path. This explains correction terms under nonlinear coordinate changes.

For a concrete example take $x=r\cos\theta$, $y=r\sin\theta$ with $r>0$ and a chosen local angular interval. Write $F(r,\theta)=f(x,y)$. The first-order operators are

$$
\partial_x=\cos\theta\,\partial_r-\frac{\sin\theta}{r}\partial_\theta,
\quad
\partial_y=\sin\theta\,\partial_r+\frac{\cos\theta}{r}\partial_\theta.
$$

Applying these twice, including derivatives of their coefficients, gives

$$
f_{xx}+f_{yy}=F_{rr}+\frac1rF_r+\frac1{r^2}F_{\theta\theta}.
$$

For example, applying $\partial_x$ to $\cos\theta F_r-(\sin\theta/r)F_\theta$ produces terms from the function and from $\cos\theta$ and $\sin\theta/r$. The analogous $\partial_y$ calculation has opposite mixed terms. They cancel when the two derivatives are added, while the first-derivative term $F_r/r$ remains.

The determinant of the polar map is $r$, so these coordinates exclude $r=0$. A function may still be smooth there; it is this coordinate formula that becomes singular. For $f=x^2+y^2$, $F=r^2$, so the right side is $2+2+0=4$, equal to $f_{xx}+f_{yy}$. The term $F_r/r$ is essential. [[12.08 Coordinate substitution]] gives further coordinate examples.

## Practice

1. Compute $\mathrm dz/\mathrm dt$ for $z=x^2+y^2$, $x=t^2$, $y=1-t$, and check by substitution.
2. Let $x=u^2$ on $u>0$ and $Y(u)=y(u^2)$. Transform $y_{xx}$ and verify it for $y=x^2$.

## Worked answers

1. The chain rule gives $2x(2t)+2y(-1)=4t^3+2t-2$. Direct substitution gives $z=t^4+(1-t)^2$, whose derivative is the same.
2. With $\phi'=2u$ and $\phi''=2$, the result is $y_{xx}=Y''/(4u^2)-Y'/(4u^3)$. For $Y=u^4$, substitute $Y'=4u^3$ and $Y''=12u^2$ to get $3-1=2$, the second derivative of $x^2$. The restriction $u>0$ selects an inverse branch and avoids division by zero.
