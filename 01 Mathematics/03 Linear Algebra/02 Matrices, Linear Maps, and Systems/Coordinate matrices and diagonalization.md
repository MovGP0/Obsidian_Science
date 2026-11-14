---
title: "Coordinate matrices and diagonalization"
---

> [!TLDR]
> Build a matrix for a linear map on an abstract vector space, change basis, and use eigenvectors to diagonalize the map when possible.

## Worked lecture material

##### Vector spaces and subspaces

The date appears to have been overwritten. The lecture recalls that $\det A\ne0$ if and only if the square matrix $A$ is invertible. An equivalence requires both $P\implies Q$ and $Q\implies P$.

What makes vectors special? The lecture asks which operations are available in $\mathbb R^n$, what properties those operations have, and which other objects can use the same operations.

Let $V$ be the set of polynomials in $t$ of degree exactly three. For $p(t)=1+2t-t^3$, scalar multiplication gives $5p(t)=5+10t-5t^3$. With $q(t)=2t^3+4t$, the sum is $p(t)+q(t)=t^3+6t+1$. With $h(t)=t^3+4t$, however, $p(t)+h(t)=6t+1$ falls outside $V$. Thus $V$ is not closed under addition. The set $W$ of polynomials of degree at most three, including the zero polynomial, is a vector space.

The set of all real $2\times2$ matrices is another example. The page illustrates scalar multiplication and addition,

$$
-2\begin{pmatrix}1&2\\0&7\end{pmatrix}
=\begin{pmatrix}-2&-4\\0&-14\end{pmatrix},
\qquad
\begin{pmatrix}3&-1\\8&0\end{pmatrix}+\begin{pmatrix}1&2\\0&7\end{pmatrix}
=\begin{pmatrix}4&1\\8&7\end{pmatrix}.
$$

The resulting objects are still $2\times2$ matrices. The two off-diagonal entries of the sum are interchanged in the notebook.

The space $U$ of all $2\times2$ matrices is also a vector space. The notes return to closure of a null space. If $A\mathbf{x}_1=A\mathbf{x}_2=0$, then $A(\mathbf{x}_1+\mathbf{x}_2)=0$ and $A(c_1\mathbf{x}_1)=c_1A\mathbf{x}_1=0$.

Suppose the third row of a matrix is the sum of its first two. For the right-hand side $(1,0,0)^{\mathsf T}$, subtract the first row from the third and then subtract the second row,

$$
\left[\begin{array}{c|r}R_1&1\\R_2&0\\R_1+R_2&0\end{array}\right]
\longrightarrow
\left[\begin{array}{c|r}R_1&1\\R_2&0\\R_2&-1\end{array}\right]
\longrightarrow
\left[\begin{array}{c|r}R_1&1\\R_2&0\\0&-1\end{array}\right].
$$

The system is inconsistent. For a general right-hand side $(b_1,b_2,b_3)^{\mathsf T}$, these row operations give the condition $b_3-b_1-b_2=0$.

**4.** Let $A_n$ be the $n\times n$ tridiagonal matrix with ones on the main diagonal and both adjacent diagonals. The notes give $A_1=(1)$, $A_2=\begin{pmatrix}1&1\\1&1\end{pmatrix}$, $A_3=\begin{pmatrix}1&1&0\\1&1&1\\0&1&1\end{pmatrix}$, and

$$
A_4=\begin{pmatrix}1&1&0&0\\1&1&1&0\\0&1&1&1\\0&0&1&1\end{pmatrix}.
$$

For $D_n=\det A_n$, the recurrence is $D_n=D_{n-1}-D_{n-2}$ with $D_1=1$ and $D_2=0$. Thus $D_3=-1$ and $D_4=-1$. The sequence repeats every six terms, giving $D_{1000}=-1$.

##### Vector spaces

A vector space is a set whose addition and scalar multiplication produce elements of the same set. These operations must also satisfy eight properties. Each element of the space is called a vector.

For example, $P_3$ is the polynomial space of degree at most three in one variable $t$. One of its vectors is $t^3-2t^2+7$. The set $M_{2\times2}$ of all $2\times2$ matrices is a matrix space, in which the identity matrix is one vector.

Let $V\subseteq M_{2\times2}$ consist of all upper triangular matrices. Adding two elements and multiplying an element by a scalar give

$$
\begin{aligned}
\begin{pmatrix}a&b\\0&c\end{pmatrix}
+\begin{pmatrix}e&f\\0&g\end{pmatrix}
&=\begin{pmatrix}a+e&b+f\\0&c+g\end{pmatrix},\\
k\begin{pmatrix}a&b\\0&c\end{pmatrix}
&=\begin{pmatrix}ka&kb\\0&kc\end{pmatrix}.
\end{aligned}
$$

Both results are upper triangular. The zero matrix is also upper triangular, so $V$ is a vector subspace of $M_{2\times2}$.

Let $V_3$ be the solution set of

$$
A\mathbf{x}=\mathbf b,\qquad A=\begin{pmatrix}1&2\\2&4\end{pmatrix},\qquad \mathbf b=\begin{pmatrix}3\\6\end{pmatrix}.
$$

For two solutions $\mathbf{x}_1,\mathbf{x}_2$, their sum maps to $A\mathbf{x}_1+A\mathbf{x}_2=(6,12)^{\mathsf T}$. Therefore $V_3$ fails closure under addition and is not a vector space.

##### Linear transformations of general vector spaces

If $V,W$ are vector spaces, then $T\colon V\to W$ is linear when $T(\mathbf{x}_1+\mathbf{x}_2)=T(\mathbf{x}_1)+T(\mathbf{x}_2)$ and $T(c\mathbf{x}_1)=cT(\mathbf{x}_1)$ for all $\mathbf{x}_1,\mathbf{x}_2\in V$ and all scalars $c$.

An example is the trace map $T_1\colon M_{2\times2}\to\mathbb R$ with $T_1\bigl(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\bigr)=a+d$. To check additivity, take two arbitrary matrices,

$$
\begin{aligned}
T_1\left(\begin{pmatrix}a&b\\c&d\end{pmatrix}+\begin{pmatrix}e&f\\g&h\end{pmatrix}\right)
&=T_1\begin{pmatrix}a+e&b+f\\c+g&d+h\end{pmatrix}\\
&=(a+e)+(d+h)\\
&=(a+d)+(e+h).
\end{aligned}
$$

The last line is the sum of the two traces.

For the trace map, scalar multiplication gives

$$
T_1\left(m\begin{pmatrix}a&b\\c&d\end{pmatrix}\right)=ma+md=m(a+d).
$$

Together with additivity, this proves linearity. The trace of a square matrix is the sum of its diagonal entries.

##### Differentiation on a polynomial space

The map $T\colon P_4\to P_4$ is given by $T(p)=p'$. To represent $p(t)=a+bt+ct^2+dt^3+ft^4$ by a column of numbers, choose a basis. Take

$$
e_1(t)=1,\qquad e_2(t)=t,\qquad e_3(t)=t^2,\qquad e_4(t)=t^3,\qquad e_5(t)=t^4.
$$

Every polynomial in $P_4$ is a linear combination of these five. The zero vector of $P_4$ is the zero polynomial, and $a+bt+ct^2+dt^3+ft^4$ is the zero polynomial only when $a=b=c=d=f=0$. Thus the five monomials are independent and span $P_4$.

In the ordered basis $\mathcal B=(1,t,t^2,t^3,t^4)$, the polynomial $p(t)=2+t+3t^2-8t^3$ has coordinates $(2,1,3,-8,0)^{\mathsf T}$. The basis polynomials differentiate to $0,1,2t,3t^2,4t^3$, so

$$
[p']_{\mathcal B}=
\begin{pmatrix}
0&1&0&0&0\\
0&0&2&0&0\\
0&0&0&3&0\\
0&0&0&0&4\\
0&0&0&0&0
\end{pmatrix}
\begin{pmatrix}2\\1\\3\\-8\\0\end{pmatrix}
=\begin{pmatrix}1\\6\\-24\\0\\0\end{pmatrix}.
$$

The output polynomial is $1+6t-24t^2$.

##### Matrix of a linear map

Suppose $T\colon V\to W$ is linear.

1. Choose bases $\mathcal B=(v_1,\ldots,v_n)$ for $V$ and $\mathcal C=(w_1,\ldots,w_m)$ for $W$, so vectors can be represented by coordinate columns.
2. Compute each image $T(v_i)$ and write its coordinate column in the basis $\mathcal C$.
3. Use those coordinate columns as the columns of $A$, in the order of the basis $\mathcal B$.

For example, $3-2t^2+4t^4\in P_4$ has column $(3,0,-2,0,4)^{\mathsf T}$ in the monomial basis.

##### Coordinate representation of a matrix

A matrix representation of a linear map uses one basis for the domain and one for the codomain. Here use the same ordered basis of $M_{2\times2}$ for both,

$$
\left(
\begin{pmatrix}1&0\\0&0\end{pmatrix},
\begin{pmatrix}0&1\\0&0\end{pmatrix},
\begin{pmatrix}0&0\\1&0\end{pmatrix},
\begin{pmatrix}0&0\\0&1\end{pmatrix}
\right).
$$

In this basis, $\begin{pmatrix}a&b\\c&d\end{pmatrix}$ has coordinate column $(a,b,c,d)^{\mathsf T}$. For example, $\begin{pmatrix}4&14\\14&29\end{pmatrix}$ corresponds to $(4,14,14,29)^{\mathsf T}$. The coordinate entries are the coefficients of the four basis matrices.

The page asks for a $4\times4$ matrix that sends $(a,b,c,d)^{\mathsf T}$ to $(a,c,b,d)^{\mathsf T}$. This would represent the transpose map on $M_{2\times2}$.

The images of the four matrix basis vectors give the columns of the coordinate matrix,

$$
\begin{pmatrix}
1&0&0&0\\
0&0&1&0\\
0&1&0&0\\
0&0&0&1
\end{pmatrix}
\begin{pmatrix}a\\b\\c\\d\end{pmatrix}
=\begin{pmatrix}a\\c\\b\\d\end{pmatrix}.
$$

The caption on the handwritten matrix says “determinant,” but the displayed action interchanges the off-diagonal entries, so it represents the transpose.

##### Stretching along a basis direction

The transformation stretches by a factor of two along $y=-3x$ and fixes every point on $y=x$. Choose $a=(1,1)$ and $b=(1,-3)$ as basis vectors along these lines. To compute $T(-2,2)$, first write $(-2,2)$ as a linear combination of $a,b$, then apply $T$ using $T(a)=a$ and $T(b)=2b$.

The lecture conjectures that linear transformations send lines and planes to lines and planes, and asks for a proof. A general linear map can also reduce the dimension of the image.

##### Two coordinate systems

The top calculation shows that $\operatorname{diag}(1/2,3/2)$ sends $(2,6)$ to $(1,9)$. The subsequent example uses a basis in which the same vector $a$ has black coordinates $(2,6)$ and blue coordinates $(3,1)$. The blue basis vectors in black coordinates are the columns of $P$. The matrix $D$ acts on blue coordinates,

$$
P=\begin{pmatrix}1&-1\\1&3\end{pmatrix},
\qquad
D=\begin{pmatrix}1&0\\0&2\end{pmatrix}.
$$

| Black input | Blue input | Blue output |
| --- | --- | --- |
| $(2,6)$ | $(3,1)$ | $(3,2)$ |
| $(-8,0)$ | $(-6,2)$ | $(-6,4)$ |
| $(-2,6)$ | $(0,2)$ | $(0,4)$ |

In the third row, the notebook gives $(0,-2)\mapsto(0,-4)$ in blue coordinates. That row would start with black coordinates $(2,-6)$. The table uses the black input as written and applies the displayed matrices.

For the first input, $D(3,1)^{\mathsf T}=(3,2)^{\mathsf T}$ and $P(3,2)^{\mathsf T}=(1,9)^{\mathsf T}$. The same transformation has a different matrix $A$ in black coordinates,

$$
A=\begin{pmatrix}5/4&-1/4\\-3/4&7/4\end{pmatrix}.
$$

The diagram shows the two equivalent paths. Convert the input to blue coordinates with $P^{-1}$, apply $D$, and convert the result to black coordinates with $P$. The direct path applies $A$. The transformation itself is independent of the choice of basis.

##### Diagonalization

For the two coordinate systems on [[#Two coordinate systems|the section on Two coordinate systems]],

$$
\begin{pmatrix}5/4&-1/4\\-3/4&7/4\end{pmatrix}
=\begin{pmatrix}1&-1\\1&3\end{pmatrix}
\begin{pmatrix}1&0\\0&2\end{pmatrix}
\begin{pmatrix}1&-1\\1&3\end{pmatrix}^{-1}.
$$

A matrix $A$ is diagonalizable if $A=PDP^{-1}$ for an invertible $P$ and a diagonal $D$. The diagonal entries of $D$ are eigenvalues, which give the stretching factors. The corresponding columns of $P$ are eigenvectors, which point in the stretching directions.

For $A=PDP^{-1}$, multiplying $k$ copies cancels each adjacent $P^{-1}P$ and gives $A^k=PD^kP^{-1}$. The lecture recalls $\det(kA)=k^n\det A$ for an $n\times n$ matrix and $\det(AB)=\det A\det B$. The matrix exponential is

$$
e^A=\sum_{k=0}^\infty\frac{A^k}{k!}
=P\left(\sum_{k=0}^\infty\frac{D^k}{k!}\right)P^{-1}
=Pe^DP^{-1}.
$$

**1.** The red basis vectors have black coordinates $(2,-1)$ and $(1,4)$. The first has red coordinates $(1,0)$ because it is $1(2,-1)+0(1,4)$. The second has red coordinates $(0,1)$. The matrix converting black coordinates to red is

$$
Q=\frac19\begin{pmatrix}4&-1\\1&2\end{pmatrix}.
$$

Its inverse converts red coordinates to black, with the two red basis vectors as its columns.

If $Av=-3v$ and $Aw=100w$ for two independent vectors, take $P=[v\mid w]$ and $D=\operatorname{diag}(-3,100)$. The review also calls for knowing injectivity and surjectivity and proving that a transformation is linear.

##### Determinant as a map on matrices

Consider $T\colon M_{2\times2}\to\mathbb R$, where $T\bigl(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\bigr)=ad-bc$. Each of the four basis matrices on [[#Coordinate representation of a matrix|the section on Coordinate representation of a matrix]] has determinant zero. If $T$ were linear, its coordinate matrix would be $(0,0,0,0)$ and it would vanish on every matrix. The identity has determinant one, so this contradicts linearity.

##### Eigenvectors and eigenvalues

For a linear map $T\colon V\to V$ represented by $A$, a nonzero vector $v$ is an eigenvector with eigenvalue $\lambda$ if $Av=\lambda v$. The vector gives a stretching direction and the eigenvalue gives the factor. For example, $(2,1)$ points along $y=x/2$, and

$$
\begin{pmatrix}1&-8\\-4&5\end{pmatrix}
\begin{pmatrix}2\\1\end{pmatrix}
=\begin{pmatrix}-6\\-3\end{pmatrix}
=-3\begin{pmatrix}2\\1\end{pmatrix}.
$$

The eigenvalue condition has three equivalent forms,

$$
\lambda\text{ is an eigenvalue of }A
\quad\Longleftrightarrow\quad
(A-\lambda I)\mathbf{x}=0\text{ has a nonzero solution}
\quad\Longleftrightarrow\quad
\det(A-\lambda I)=0.
$$

##### When can a matrix be diagonalized?

The matrix $A$ must be square. The matrix $P$ must be invertible, so its columns must consist of $n$ independent eigenvectors. A zero determinant still allows diagonalization. For example,

$$
A=\begin{pmatrix}1&-3\\2&1\end{pmatrix}
\begin{pmatrix}8&0\\0&0\end{pmatrix}
\begin{pmatrix}1&-3\\2&1\end{pmatrix}^{-1}
$$

is diagonalizable and has $\det A=\det D=0$. Zero is an eigenvalue precisely when $A\mathbf{x}=0$ has a nonzero solution. Equivalently, the columns of $A$ are dependent and $N(A)$ contains a nonzero vector.

The determinant is the product of all eigenvalues and the trace is their sum, with algebraic multiplicities included.

##### Midterm 2 study session. Kernel and image

For $T\colon V\to W$, the diagram marks $\ker T$ inside $V$ and $\operatorname{im}T$ inside $W$. The kernel maps to zero, and the image contains every vector reached by $T$.

The diagram shows $T(v_1)=w_1$, $T(v_2)=w_2$, and

$$
T\left(\tfrac14v_1+\tfrac34v_2\right)=\tfrac14w_1+\tfrac34w_2.
$$

For a linear map $T\colon\mathbb R^n\to\mathbb R^m$, probing the map on the $n$ vectors of an input basis determines it completely. Choose a basis $e_1,\ldots,e_n$ and record the output $T(e_i)$ for each input $e_i$. Every input $v$ has an expansion $v=v_1e_1+\cdots+v_ne_n$ in those basis vectors. Linearity then gives

$$
T(v)=v_1T(e_1)+v_2T(e_2)+\cdots+v_nT(e_n).
$$

The domain is $\mathbb R^n$ and the codomain is $\mathbb R^m$. The image is a subspace of the codomain, and $T$ is surjective if $\operatorname{im}T=\mathbb R^m$. The kernel is the subspace of the domain that maps to the zero vector.

## Source

Kyle Kabasares, *Linear Analysis I - Linear Algebra (Math 141, UC Merced 2016)*.
