---
title: "Classification of second-order PDEs"
catalogue_ids:
  - "9.2.2"
  - "9.2.2.1"
  - "9.2.2.2"
  - "9.2.2.3"
---

> [!TLDR]
> The symmetric matrix of highest derivative coefficients determines the local type of a real second-order PDE and guides coordinate changes and solution methods.

## Start with the principal part

Read [[12.05 Second derivatives]], [[10.07 Eigenvalues and eigenvectors]], and [[15.01 Basic language]]. A second-order linear PDE in two independent variables has the form

$$
A u_{xx}+2B u_{xy}+C u_{yy}+D u_x+E u_y+F u=G.
$$

All coefficients are given functions of $x,y$, not functions of the unknown $u$. The **principal part** contains the highest derivatives: $A u_{xx}+2B u_{xy}+C u_{yy}$. Its real symmetric coefficient matrix is $M=\begin{pmatrix}A&B\\B&C\end{pmatrix}$. The factor $2$ before $B$ is part of this convention. If an equation is written with mixed coefficient $B$ rather than $2B$, its discriminant formula must change accordingly.

At a point where $A,B,C$ are not all zero, classify by $B^2-AC$. A negative value is **elliptic**, a positive value is **hyperbolic**, and zero gives the usual degenerate principal form associated with **parabolic** equations when the remaining terms supply the required evolution direction. A degenerate principal form alone does not guarantee all the usual properties of a heat equation.

Examples are $u_{xx}+u_{yy}=0$ (elliptic), $u_{tt}-u_{xx}=0$ (hyperbolic), and $u_t-u_{xx}=0$ (parabolic). In the last equation the variables are $x,t$, and only the $x$ direction has a second derivative. These words describe equation structure; they do not assert that every solution is an ellipse, hyperbola, or parabola.

## A coordinate change reveals the two directions

For the equation $u_{xx}+2b u_{xy}+u_{yy}=0$ with constant $b$, rotate to $\xi=(x+y)/\sqrt2$, $\eta=(x-y)/\sqrt2$. The principal matrix eigenvalues are $1+b$ and $1-b$, and the equation becomes

$$
(1+b)u_{\xi\xi}+(1-b)u_{\eta\eta}=0.
$$

For $|b|<1$ both coefficients have the same sign, so it is elliptic. For $|b|>1$ they have opposite signs, so it is hyperbolic. For $|b|=1$ one vanishes. This derives the discriminant test from diagonalization. A smooth invertible real change of independent variables preserves the numbers of positive and negative principal directions at a point; lower-order terms created by the change do not alter this count.

For variable coefficients, classification is local. The equation $y u_{xx}+u_{yy}=0$ is elliptic where $y>0$, hyperbolic where $y<0$, and degenerate on $y=0$. One cannot use a single uniform-type theorem across the whole plane without treating that transition.

## More than two variables

For $x_1,\ldots,x_n$, write the principal part as $\sum_{i,j}a_{ij}u_{x_ix_j}$ with a real symmetric matrix $M=(a_{ij})$. Symmetry is sufficient because the antisymmetric part cancels against equal mixed derivatives for twice continuously differentiable $u$.

If all eigenvalues are nonzero and have the same sign, the operator is elliptic. A bound $\mathbf v^TM(x)\mathbf v\ge c|\mathbf v|^2$ with one fixed $c>0$ on the region gives uniform ellipticity after choosing a positive sign convention. Pointwise positivity alone need not give such a global lower bound.

A nondegenerate signature with one sign occurring once and the other occurring $n-1$ times gives the wave-type hyperbolic principal form. For example, $u_{tt}-u_{xx}-u_{yy}=0$ has signature $(1,2)$. With at least two directions of each sign, such as $u_{x_1x_1}+u_{x_2x_2}-u_{x_3x_3}-u_{x_4x_4}=0$, the form is ultrahyperbolic and does not share the ordinary one-time wave initial-value theory.

The diffusion equation $u_t=\sum_{j=1}^d u_{x_jx_j}$ has one zero principal direction in the full $(x_1,\ldots,x_d,t)$ variable space. Its first derivative in that missing direction is essential to its parabolic evolution. A matrix with zero eigenvalues requires inspection of the lower-order terms and the selected evolution direction; it cannot always be classified safely from rank alone.

## Integration methods and their limits

For a constant-coefficient wave equation $u_{tt}-c^2u_{xx}=0$ with $c>0$, use $\xi=x-ct$, $\eta=x+ct$. Direct chain-rule calculation gives $u_{tt}-c^2u_{xx}=-4c^2u_{\xi\eta}$. Thus $u_{\xi\eta}=0$, and two integrations give

$$
u(x,t)=f(x-ct)+g(x+ct).
$$

The two arbitrary functions must be determined by initial or boundary data. They replace constants because a PDE leaves freedom along whole curves. This coordinate method is especially useful in hyperbolic equations; it is not a real-coordinate shortcut that turns every elliptic equation into the same two one-variable functions.

**Separation of variables** tries $u(x,t)=X(x)T(t)$ on a domain with suitable geometry and homogeneous boundaries. It produces ordinary eigenvalue problems. Sums of separated solutions are permitted for a linear homogeneous PDE, but one product rarely represents arbitrary data. **Eigenfunction expansion** supplies the needed sum; see [[Boundary eigenvalue problems]]. **Integral transforms** replace derivatives by algebraic factors under decay or distribution assumptions and are useful on unbounded domains. Nonzero boundary data often need a preliminary subtraction before separation. No one method is a general integration formula for arbitrary variable coefficients and arbitrary boundary shapes.

## Practice

1. Classify $3u_{xx}+4u_{xy}+u_{yy}=0$ using the stated mixed-term convention.
2. Classify $u_{xx}+u_{yy}+u_{zz}=0$ and $u_{tt}-u_{xx}-u_{yy}-u_{zz}=0$. How many second-derivative directions does $u_t-u_{xx}-u_{yy}=0$ have?

## Worked answers

1. Here $A=3$, $B=2$, $C=1$. Therefore $B^2-AC=4-3=1>0$: the equation is hyperbolic. Using $4$ as $B$ would apply the wrong convention.
2. The first has principal matrix $I_3$, so it is elliptic. The second has one positive and three negative eigenvalues, the wave-type hyperbolic signature. The third has two nonzero second-derivative directions and one zero direction, with a first derivative in $t$ that supplies parabolic evolution.

## Further reading

Julie Levandosky’s [Stanford notes on second-order equations](https://web.stanford.edu/class/math220a/handouts/secondorder.pdf) explain classification and canonical coordinates.
