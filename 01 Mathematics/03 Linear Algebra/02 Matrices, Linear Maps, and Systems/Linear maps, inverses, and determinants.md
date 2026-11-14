---
title: "Linear maps, inverses, and determinants"
---

> [!TLDR]
> Interpret matrices as linear maps, test whether a map is one-to-one or onto, and compute determinants by elimination and cofactors.

## Worked lecture material

##### Matrices as transformations

The matrix $A=\begin{pmatrix}3&1\\1&2\end{pmatrix}$ maps $(30,17)$ to $(107,64)$. A transformation $T\colon\mathbb R^m\to\mathbb R^n$ is a rule that sends each vector $\mathbf{x}\in\mathbb R^m$ to a vector $T(\mathbf{x})\in\mathbb R^n$.

![[Kyle Kabasares - Linear Analysis I - Matrix acting on a vector.png|**Fig. 1** The matrix $A$ sends the input vector $(30,17)$ to the output vector $(107,64)$.]]

For example, the $2\times4$ matrix

$$
T=\begin{pmatrix}3&1&5&0\\1&2&0&8\end{pmatrix}
$$

multiplies a $4\times1$ column vector and gives a $2\times1$ column vector. It defines a map from $\mathbb R^4$ to $\mathbb R^2$. A matrix $L$ that maps $\mathbb R^2$ into $\mathbb R^3$ must be $3\times2$, since it maps $(x,y)^{\mathsf T}$ to a vector $(u,v,w)^{\mathsf T}$.

##### Image of zero

A transformation defined by a matrix sends the zero vector to zero. For example,

$$
\begin{pmatrix}1&1/3\\0&4/3\end{pmatrix}
\begin{pmatrix}0\\0\end{pmatrix}
=\begin{pmatrix}0\\0\end{pmatrix}.
$$

**Homework 4**

**3.** Suppose $A\mathbf{x}_0=\mathbf b$ and $A\mathbf{x}_1=\mathbf b$.

**(a)** Subtract the two equations. Then $A(\mathbf{x}_0-\mathbf{x}_1)=\mathbf b-\mathbf b=0$, so the difference is in $N(A)$. Every multiple $c(\mathbf{x}_0-\mathbf{x}_1)$ is also in $N(A)$ because $A[c(\mathbf{x}_0-\mathbf{x}_1)]=cA(\mathbf{x}_0-\mathbf{x}_1)=0$.

**(b)** The midpoint solves the nonhomogeneous system because

$$
A\left(\frac{\mathbf{x}_0+\mathbf{x}_1}{2}\right)
=\frac{A\mathbf{x}_0+A\mathbf{x}_1}{2}=\mathbf b.
$$

More generally, $c_1\mathbf{x}_0+c_2\mathbf{x}_1$ maps to $\mathbf b$ when $c_1+c_2=1$. Set $c_2=1-c_1$ and use linearity to obtain $c_1\mathbf b+(1-c_1)\mathbf b=\mathbf b$. These solutions can also be written as

$$
\mathbf{x}_0+c(\mathbf{x}_0-\mathbf{x}_1),
$$

with $\mathbf{x}_0$ a particular solution and the second term in the null space. The notebook labels this the complete solution. When the two solutions are distinct, this formula gives their affine line. It gives every solution if the difference spans the null space. In general the full solution set is $\mathbf{x}_0+N(A)$.

**5(d).** The zero vector belongs to $N(A)$ because $A0=0$.

**(c)** Row reduction gives

$$
\left[\begin{array}{cc|c}2&2&4\\2&2&4\end{array}\right]
\longrightarrow
\left[\begin{array}{cc|c}2&2&4\\0&0&0\end{array}\right].
$$

Set $y=t$, the free variable. Then $x=(4-2t)/2$. With $t=0$ the solution is $\mathbf{x}_1=(2,0)$ and $\|\mathbf{x}_1\|=2$. With $t=1$ the solution is $\mathbf{x}_2=(1,1)$ and $\|\mathbf{x}_2\|=\sqrt2$. The second is shorter, so setting a free variable to zero need not minimize the solution's norm.

**(b)** The claim that $A\mathbf{x}=\mathbf b$ has at most one particular solution is false. Any vector that satisfies the equation can serve as the particular solution.

**(a)** Apply $A$ to $c_1\mathbf{x}_{\mathrm{null}}+c_2\mathbf{x}_{\mathrm{part}}$. The result is $c_2\mathbf b$. When $\mathbf b\ne0$, it equals $\mathbf b$ precisely when $c_2=1$.

Review linear combinations and span, linear dependence and independence, matrix–vector multiplication, column and null spaces, and existence and uniqueness in homogeneous and nonhomogeneous systems. Review the roles of pivots in forward elimination and back substitution.

##### Independence and spanning in three dimensions

The review continues with special solutions, particular solutions, and complete solutions. Suppose $u,v,w$ in $\mathbb R^3$ are independent. The system

$$
\begin{pmatrix}u_1&v_1&w_1\\u_2&v_2&w_2\\u_3&v_3&w_3\end{pmatrix}
\begin{pmatrix}c_1\\c_2\\c_3\end{pmatrix}
=\begin{pmatrix}0\\0\\0\end{pmatrix}
$$

has only $c_1=c_2=c_3=0$. The upper echelon form has no free columns, so $A$ has three pivots. For a consistent system, nonuniqueness is equivalent to having a nonzero special solution, a free variable, or a column with no pivot. In general,

$$
\text{number of free columns}+\text{number of pivots}=\text{number of columns}.
$$

With a pivot in every row, $A$ maps onto $\mathbb R^3$. Thus $\operatorname{span}\{u,v,w\}=C(A)=\mathbb R^3$. Any target in $\mathbb R^3$ can be written as $c_1u+c_2v+c_3w$.

For

$$
A=\begin{pmatrix}1&2&3\\0&0&2\\0&0&0\end{pmatrix},
$$

the column space consists of all linear combinations of $(1,0,0)$, $(2,0,0)$, and $(3,2,0)$. It has dimension two. The second column is twice the first, so the independent pair can be taken as the first and third. The notebook names the first and second in its independence statement.

For another example, set

$$
A=\begin{pmatrix}1&2\\2&4\\2&5\\3&9\end{pmatrix},
\qquad
\mathbf b=\begin{pmatrix}3\\6\\7\\12\end{pmatrix}.
$$

The target is in the span of the columns because it is their sum. In general, if $x_1(1,2,2,3)+x_2(2,4,5,9)=(b_1,b_2,b_3,b_4)$, then $\mathbf b\in C(A)$. Returning to the three-dimensional case, if $C(A)=\mathbb R^3$, then $A\mathbf{x}=\mathbf b$ is solvable for every $\mathbf b\in\mathbb R^3$.

##### Consistency and uniqueness

Consider the system with columns $u,v,w$ and right-hand side $(b_1,b_2,b_3)$. If the last row after elimination is $(0,0,0\mid 0)$ and the first two rows have pivots, then one variable is free and there are infinitely many solutions. If the last row is $(0,0,0\mid 1)$, then the system has no solutions. Three pivots in a $3\times3$ coefficient matrix guarantee a unique solution for each right-hand side.

##### Linear transformations

A matrix transformation $T\colon\mathbb R^n\to\mathbb R^m$ with $T(\mathbf{x})=A\mathbf{x}$ sends zero to zero. It also distributes over vector addition, $A(v+w)=Av+Aw$.

A transformation is linear if for all $\mathbf{x},\mathbf{y}\in\mathbb R^n$ and all scalars $c$,

$$
T(\mathbf{x}+\mathbf{y})=T(\mathbf{x})+T(\mathbf{y}),
\qquad
T(c\mathbf{x})=cT(\mathbf{x}).
$$

The page sets up the map $T\colon\mathbb R^2\to\mathbb R^2$ with $T(x,y)=(x-1,2y)$ for a test of linearity.

**1(a).** Use $R_3\gets R_3-R_1$ and then $R_3\gets R_3+R_2$,

$$
\begin{pmatrix}2&-4&-2&1\\0&-7&2&0\\2&3&-4&2\end{pmatrix}
\longrightarrow
\begin{pmatrix}2&-4&-2&1\\0&-7&2&0\\0&7&-2&1\end{pmatrix}
\longrightarrow
\begin{pmatrix}2&-4&-2&1\\0&-7&2&0\\0&0&0&1\end{pmatrix}.
$$

There are three pivots, in columns 1, 2, and 4. **1(b).** Keep the first row and use its pivot for the first elimination step.

**2(a).** The notes give two rectangular systems. For the tall system

$$
\begin{pmatrix}3&1\\0&2\\0&0\end{pmatrix}
\begin{pmatrix}x_1\\x_2\end{pmatrix}
=\begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix},
$$

there is a unique solution if $b_3=0$ and no solution if $b_3\ne0$. Both columns contain pivots, so there are no free variables. For the wide system

$$
\begin{pmatrix}3&1&2\\0&0&2\end{pmatrix}
\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}
=\begin{pmatrix}b_1\\b_2\end{pmatrix},
$$

every right-hand side is possible because every row contains a pivot. Column 2 is free, so each right-hand side has infinitely many solutions.

For an $m\times n$ matrix of rank $r$, the condition $m=r$ guarantees a solution for every right-hand side. The condition $n=r$ guarantees uniqueness whenever a solution exists.

For example,

$$
\begin{pmatrix}3&1&2\\0&2&0\\0&0&0\end{pmatrix}
\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}
=\begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix}.
$$

If $b_3\ne0$, the system is unsolvable. If $b_3=0$, the third variable is free and there are infinitely many solutions. No right-hand side gives a unique solution for this coefficient matrix.

##### Transformations in coordinates

A function such as $f(x)=\sin(x^2)$ can be viewed as a transformation from $\mathbb R$ to $\mathbb R$, with $T([x])=[\sin(x^2)]$. To specify a transformation from $\mathbb R^n$ to $\mathbb R^m$ explicitly, give $m$ coordinate functions of $n$ variables.

The heading includes “Happy Birthday!” For a linear map $A\colon\mathbb R^2\to\mathbb R^2$, knowing where two spanning vectors go determines where every vector goes. Write the input as a linear combination of the two vectors and use the same coefficients on their images. The page then raises the example of a map $\mathbb R^7\to\mathbb R^2$.

##### Bases of the domain

A basis for $\mathbb R^n$ is a linearly independent set that spans $\mathbb R^n$. The two properties are related and play different roles. The sketches show the standard basis $\{(1,0),(0,1)\}$ of $\mathbb R^2$ and another basis $\{(2,0),(2,3)\}$. Every basis for $\mathbb R^n$ has exactly $n$ vectors.

To find the matrix of a linear transformation, determine the images of a basis of its domain.

##### Inverse transformations

The identity matrix $I_n$ represents the identity transformation, and an inverse matrix represents the inverse transformation. A matrix $A$ is invertible if there is a matrix $C$ such that $AC=I$ and $CA=I$. Write $C=A^{-1}$.

A linear transformation $T\colon\mathbb R^n\to\mathbb R^m$ is invertible if there is a transformation $S\colon\mathbb R^m\to\mathbb R^n$ such that $T\circ S=\mathrm{Id}_{\mathbb R^m}$ and $S\circ T=\mathrm{Id}_{\mathbb R^n}$. Write $S=T^{-1}$.

The diagram shows $T_1\colon\mathbb R^n\to\mathbb R^m$ followed by $T_2\colon\mathbb R^m\to\mathbb R^p$, with inverses $S_1$ and $S_2$ along the reverse arrows. If $T_1,T_2$ are invertible, undo $T_2$ first, then $T_1$,

$$
(T_2\circ T_1)^{-1}=S_1\circ S_2=T_1^{-1}\circ T_2^{-1}.
$$

##### Inverse of a product

For invertible matrices $A$ and $B$, the inverse of $AB$ is $C=B^{-1}A^{-1}$. Verify both orders of multiplication,

$$
\begin{aligned}
C(AB)&=B^{-1}(A^{-1}A)B=B^{-1}B=I,\\
(AB)C&=A(BB^{-1})A^{-1}=AA^{-1}=I.
\end{aligned}
$$

The order matches the inverse-composition rule for transformations.

##### One-to-one and onto

For $T\colon\mathbb R^n\to\mathbb R^m$, the domain is $\mathbb R^n$ and the codomain is $\mathbb R^m$. The lecture relates the properties of $T$ to its matrix and systems of equations.

| Transformation | Matrix $A$ | System $A\mathbf{x}=\mathbf b$ |
| --- | --- | --- |
| One-to-one | There is a pivot in every column. The columns are independent. | There is at most one solution for each $\mathbf b$. |
| Onto | There is a pivot in every row. | There is at least one solution for each $\mathbf b$. |

For an onto map, every vector in the codomain is the image of some vector in the domain. The sketches include examples of general functions $\mathbb R\to\mathbb R$. The parabola $y=x^2$ is neither one-to-one nor onto. The other sketch shows a strictly increasing curve through the origin that reaches every real value, so it is both one-to-one and onto.

The range of a map is contained in its codomain. The handwritten sentence above the exercise reverses this inclusion.

Find a nonzero $2\times2$ matrix $A$ and distinct vectors $u,v\in\mathbb R^2$ with $Au=Av$. Such a matrix is noninvertible because the common image cannot be mapped back uniquely to both inputs.

The notebook tests whether there is a linear map $T\colon\mathbb R^3\to\mathbb R^2$ with

$$
T(1,0,1)=(2,1),\qquad
T(0,0,5)=(0,5),\qquad
T(1,0,3)=(2,11).
$$

Write its matrix as $A=\begin{pmatrix}a&b&c\\d&e&f\end{pmatrix}$. The first image requires $a+c=2$ and $d+f=1$. The second requires $5c=0$ and $5f=5$, so $c=0$ and $f=1$. It follows that $a=2$ and $d=0$.

The third input has second output coordinate $d+3f$, so the stated third image would require $d+3=11$. The notebook writes $2d+3=11$ at this step, although the input's first entry is one. With the values forced by the first two images, the third output would be $(2,3)$.

##### Gauss–Jordan method for the inverse

The page has a tic-tac-toe sketch marked “Draw.” The mathematical notes remark that explicitly calculating an inverse is rarely necessary in applied calculations.

To find the inverse of an invertible $n\times n$ matrix, apply Gauss–Jordan elimination to $[A\mid I_n]$ until the left block is $I_n$. The resulting right block $C$ is $A^{-1}$. Row operations act by left multiplication. For example,

$$
\begin{pmatrix}1&0&0\\-2&1&0\\0&0&1\end{pmatrix}
\begin{pmatrix}1&1&0\\2&0&2\\1&2&3\end{pmatrix}
=\begin{pmatrix}1&1&0\\0&-2&2\\1&2&3\end{pmatrix}.
$$

If $B$ is the product of the elementary matrices, then

$$
B[A\mid I_n]=[BA\mid B]=[I_n\mid C].
$$

Thus $BA=I_n$ and $B=C$. A two-sided inverse satisfies both $CA=I$ and $AC=I$. The notebook writes the rectangular pair

$$
A=\begin{pmatrix}1&0\\0&1\\0&0\end{pmatrix},
\qquad
C=\begin{pmatrix}1&0&0\\0&1&0\end{pmatrix}.
$$

Here $CA=I_2$, while $AC=\operatorname{diag}(1,1,0)$. This pair illustrates a left inverse.

##### Determinants by elimination

For a $2\times2$ matrix, $\begin{vmatrix}a&b\\c&d\end{vmatrix}=ad-bc$. For the tridiagonal example, use $R_2\gets R_2-R_1/2$ and $R_3\gets R_3-(2/3)R_2$,

$$
A=\begin{pmatrix}2&1&0\\1&2&1\\0&1&2\end{pmatrix}
\longrightarrow
\begin{pmatrix}2&1&0\\0&3/2&1\\0&0&4/3\end{pmatrix}.
$$

Neither row replacement changes the determinant. Multiply the pivots to get $\det A=2\cdot(3/2)\cdot(4/3)=4$. With $s$ row exchanges and no row scaling, the determinant is $(-1)^s$ times the product of the diagonal entries in the triangular result.

##### Cofactors

The minor $M_{ij}$ is the determinant after deleting row $i$ and column $j$ of $A$. For this example,

$$
M_{11}=\begin{vmatrix}2&1\\1&2\end{vmatrix}=3.
$$

The cofactor is $C_{ij}=(-1)^{i+j}M_{ij}$.

##### Surjective maps

For a function $f\colon X\to Y$, the set $Y$ is the codomain. The function is **surjective**, or **onto**, if for every $y\in Y$ there is at least one $x\in X$ such that $f(x)=y$.

The first arrow diagram uses $X=\{1,2,3,4,5\}$ and $Y=\{a,b,c,d\}$. The values are

$$
f(1)=a,\qquad f(2)=b,\qquad f(3)=c,\qquad f(4)=f(5)=d.
$$

Every element of $Y$ has a preimage, so this function is onto. The second diagram keeps the same assignments and adds $e$ to $Y$. Then $e$ has no preimage and the function is no longer onto.

The codomain is the declared set of possible targets. The range, also called the image, is the set of targets actually reached. Thus $\operatorname{im}(f)=\operatorname{range}(f)\subseteq Y$, with equality precisely when $f$ is surjective.

##### Injective maps

A function $f\colon X\to Y$ is **injective**, or **one-to-one**, if every $y\in Y$ has at most one preimage. The lone dot in $Y$ in the sketch has no preimage. The two arrows reach different targets, so the illustrated map is injective and fails to be surjective.

![[Kyle Kabasares - Linear Analysis I - Injective map with an unreached target.png|**Fig. 2** Two inputs reach two distinct targets. The circled element in the codomain has no preimage.]]

##### Invertibility and matrix transformations

For $T\colon\mathbb R^n\to\mathbb R^m$ given by $T(\mathbf{x})=A\mathbf{x}$, the matrix $A$ is $m\times n$. Invertibility requires both surjectivity and injectivity. To test whether $T$ is onto, take any $\mathbf b\in\mathbb R^m$ and ask whether there is a vector $\mathbf{x}\in\mathbb R^n$ with $A\mathbf{x}=\mathbf b$. Surjectivity means there is at least one such solution for every $\mathbf b$.

Write $A=[a_1,\dots,a_n]$ and $\mathbf{x}=(x_1,\ldots,x_n)^{\mathsf T}$. Then $A\mathbf{x}=x_1a_1+\cdots+x_na_n$. For $T$ to be onto, these combinations must reach every target $\mathbf b\in\mathbb R^m$. Equivalently, $C(A)=\mathbb R^m$.

Reduce $[A\mid\mathbf b]$ to $[R\mid\mathbf c]$. There can be infinitely many solutions, one solution, or no solution. Inconsistency occurs precisely when a row of the coefficient block is zero and the corresponding right-hand entry is nonzero. The notebook sketches an example whose last right-hand entry is $2b_1+3b_2-b_3$. If the last coefficient row is zero, solvability imposes the condition $2b_1+3b_2-b_3=0$. This rules out some targets, so the map is not onto.

Therefore $T$ is onto if and only if $\operatorname{rref}(A)$ has a pivot in every row, for $m$ pivots in total.

##### Basis for the column space

Use $R=\operatorname{rref}(A)$ to find the pivot column indices. The columns of the original $A$ at those indices form a basis for $C(A)$. The diagram points from the pivot positions in $R$ to the corresponding columns $a_i$ of $A$.

##### Matrix condition for injectivity

To find $N(A)$, reduce $[A\mid 0]$ to $[\operatorname{rref}(A)\mid 0]$. The solution set consists of combinations of the special solutions $n_1,n_2,\ldots$, so a null vector has the form $a n_1+b n_2+\cdots$.

For the inhomogeneous equation, reduce $[A\mid\mathbf b]$ to $[\operatorname{rref}(A)\mid\mathbf b']$. If the system is consistent, obtain a particular solution $\mathbf{x}_p$ from the reduced equations, for example by setting the free variables to zero. Then all solutions have the form

$$
\mathbf{x}=\mathbf{x}_p+\mathbf{x}_h,
\qquad \mathbf{x}_h\in N(A).
$$

Indeed, if $A\mathbf{x}=A\mathbf{x}_p=\mathbf b$, then $A(\mathbf{x}-\mathbf{x}_p)=0$. The page labels $\mathbf b'$ as the particular solution, which in general must be read from the pivot equations.

A map is one-to-one when each $\mathbf b$ has at most one preimage. For $T(\mathbf{x})=A\mathbf{x}$, the displayed description of the solutions gives the criterion $N(A)=\{0\}$.

The condition $N(A)=\{0\}$ means that $x_1a_1+\cdots+x_na_n=0$ has only the zero coefficient vector. This is precisely independence of the columns $a_1,\ldots,a_n$. These $n$ columns then form a basis for $C(A)$, so $\dim C(A)=n$. The boxed $C(A)=\mathbb R^n$ on the page expresses this dimension count. For an $m\times n$ matrix, $C(A)$ is a subspace of $\mathbb R^m$. Thus $T$ is one-to-one exactly when $\operatorname{rank}A=n$.

##### Determinant and area

The image of the unit square under $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ is the parallelogram with edges $(a,c)$ and $(b,d)$. In the pictured orientation, its enclosing rectangle has area $(a+b)(c+d)$. The pieces outside the parallelogram consist of two copies each of triangles of areas $bd/2$, $ca/2$, and a rectangle of area $cb$. Subtracting gives

$$
(a+b)(c+d)-(bd+2cb+ca)=ad-bc.
$$

The determinant gives the signed area scale, and its absolute value gives the ordinary area scale.

![[Kyle Kabasares - Linear Analysis I - Determinant as parallelogram area.png|**Fig. 3** The enclosing rectangle and the pieces removed to find the shaded parallelogram's area.]]

## Source

Kyle Kabasares, *Linear Analysis I - Linear Algebra (Math 141, UC Merced 2016)*.
