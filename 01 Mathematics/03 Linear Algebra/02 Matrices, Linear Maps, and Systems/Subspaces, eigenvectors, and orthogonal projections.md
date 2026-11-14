---
title: "Subspaces, eigenvectors, and orthogonal projections"
---

> [!TLDR]
> Find bases for the fundamental spaces, compute eigenspaces, and use orthogonality to project onto a subspace.

## Worked lecture material

##### Vector spaces and subspaces

A real vector space has operations for vector addition and multiplication by real numbers. A subspace is a nonempty subset closed under linear combinations with the inherited operations. The sketch shades the first quadrant $x,y\ge0$ in $\mathbb R^2$. Multiplying a nonzero vector in this region by a negative scalar leaves the region, so it fails the subspace test.

##### The four fundamental subspaces

For an $m\times n$ matrix $A$ of rank $r$, the review lists the four spaces.

| Space | Ambient space | Dimension |
| --- | --- | --- |
| Column space $C(A)$ | $\mathbb R^m$ | $r$ |
| Null space $N(A)$ | $\mathbb R^n$ | $n-r$ |
| Row space $C(A^{\mathsf T})$ | $\mathbb R^n$ | $r$ |
| Left null space $N(A^{\mathsf T})$ | $\mathbb R^m$ | $m-r$ |

The column space can range from $\{0\}$ to the whole codomain. Rank–nullity gives $\operatorname{rank}A+\operatorname{nullity}A=n$.

For a linear transformation $T\colon\mathbb R^n\to\mathbb R^m$ with standard matrix $A$, three conditions are equivalent.

1. $T$ is one-to-one.
2. $T(\mathbf{x})=0$ has only the solution $\mathbf{x}=0$.
3. The columns of $A$ are linearly independent.

The conditions on [[#Vector spaces and subspaces|the section on Vector spaces and subspaces]] for injectivity are also equivalent to $\ker T=\{0\}$, $\operatorname{nullity}A=0$, and $\operatorname{rank}A=n$.

The following are equivalent conditions for surjectivity.

1. $T$ is onto.
2. $T(\mathbf{x})=\mathbf b$ has a solution for every $\mathbf b\in\mathbb R^m$.
3. The columns of $A$ span $\mathbb R^m$. Each $\mathbf b$ is a linear combination of these columns.
4. $\operatorname{im}A=\mathbb R^m$.
5. $\operatorname{rank}A=m$, which is full row rank.
6. $\operatorname{nullity}A=n-m$.

If $m>n$, the $n$ columns of an $m\times n$ matrix cannot span $\mathbb R^m$. For example, a $3\times2$ matrix $\begin{pmatrix}a&d\\b&e\\c&f\end{pmatrix}$ has only two columns, too few to span $\mathbb R^3$.

##### Representing transformations as matrices

Consider $T\colon\mathbb R^3\to\mathbb R^3$ given by $T(a_1,a_2,a_3)=(3a_1+a_2,a_1+a_3,a_1-a_3)$.

For $P_3$, use the basis $p_1=1$, $p_2=t$, $p_3=t^2$, and $p_4=t^3$. Their derivatives are $0,1,2t,3t^2$. The page asks for a matrix representing the derivative operator in these coordinates.

In the ordered basis $(1,t,t^2,t^3)$ of $P_3$, the columns for differentiation are the coordinates of $0$, $1$, $2t$, and $3t^2$, respectively. The resulting matrix is

$$
A_{\mathrm{diff}}=\begin{pmatrix}0&1&0&0\\0&0&2&0\\0&0&0&3\\0&0&0&0\end{pmatrix}.
$$

In general, if $x_1,\dots,x_n$ form a basis of $V$ and $y_1,\dots,y_m$ form a basis of $W$, write $T(x_j)=\sum_{i=1}^m a_{ij}y_i$. The coefficients of this expansion make up column $j$ of the matrix $A$ for $T\colon V\to W$.

The next exercise asks for the standard matrix of $T\colon\mathbb R^3\to\mathbb R^3$ from the data

$$
T\begin{pmatrix}1\\2\\3\end{pmatrix}=\begin{pmatrix}1\\1\\1\end{pmatrix},\qquad
T\begin{pmatrix}2\\3\\4\end{pmatrix}=\begin{pmatrix}0\\1\\2\end{pmatrix},\qquad
T\begin{pmatrix}0\\2\\3\end{pmatrix}=\begin{pmatrix}1\\2\\2\end{pmatrix}.
$$

For $T\colon\mathbb R^2\to\mathbb R^3$ with $T(x_1,x_2)=(x_1-2x_2,-x_2,3x_1-5x_2)$, use the standard basis $e_1=(1,0)$, $e_2=(0,1)$. Since $\mathbf{x}=x_1e_1+x_2e_2$,

$$
T(\mathbf{x})=x_1T(e_1)+x_2T(e_2)=[T(e_1)\mid T(e_2)]\mathbf{x}.
$$

Evaluating at $e_1$ gives $(1,0,3)$ and evaluating at $e_2$ gives $(-2,-1,-5)$, so

$$
A=\begin{pmatrix}1&-2\\0&-1\\3&-5\end{pmatrix}.
$$

##### Integration matrix

Use $V=P_3$ and $W=P_4$ with monomial bases. The last codomain basis vector is $t^4$, as required by $P_4$ and the image of $t^3$. The handwritten list appears to give $t^5$. The zero-constant antiderivative sends

$$
1\mapsto t,\qquad t\mapsto \frac{t^2}{2},\qquad
t^2\mapsto\frac{t^3}{3},\qquad t^3\mapsto\frac{t^4}{4}.
$$

The coordinate columns have their sole nonzero entries in rows 2, 3, 4, and 5, with coefficients $1$, $1/2$, $1/3$, and $1/4$, respectively.

The zero-constant integration matrix from $P_3$ to $P_4$ is

$$
A_{\mathrm{int}}=\begin{pmatrix}
0&0&0&0\\
1&0&0&0\\
0&1/2&0&0\\
0&0&1/3&0\\
0&0&0&1/4
\end{pmatrix}.
$$

For differentiation $T\colon P_3\to P_3$, the basis $(1,t,t^2,t^3)$ maps to $(0,1,2t,3t^2)$. The corresponding columns are $(0,0,0,0)^{\mathsf T}$, $(1,0,0,0)^{\mathsf T}$, $(0,2,0,0)^{\mathsf T}$, and $(0,0,3,0)^{\mathsf T}$, reproducing $A_{\mathrm{diff}}$ on [[#Representing transformations as matrices|the section on Representing transformations as matrices]].

The final example returns to $M_{2\times2}$ with the same matrix-unit basis in domain and codomain. The matrix $\begin{pmatrix}a&b\\c&d\end{pmatrix}$ has coordinate column $(a,b,c,d)^{\mathsf T}$. Transposition maps it to $(a,c,b,d)^{\mathsf T}$, so the columns of the representing matrix are $e_1,e_3,e_2,e_4$, as on [[Coordinate matrices and diagonalization#Stretching along a basis direction|the section on Stretching along a basis direction]].

For the map from [[#Representing transformations as matrices|the section on Representing transformations as matrices]],

$$
\begin{aligned}
T\begin{pmatrix}x\\y\\z\end{pmatrix}
&=\begin{pmatrix}3x+y\\x+z\\x-z\end{pmatrix}\\
&=x\begin{pmatrix}3\\1\\1\end{pmatrix}
+y\begin{pmatrix}1\\0\\0\end{pmatrix}
+z\begin{pmatrix}0\\1\\-1\end{pmatrix}.
\end{aligned}
$$

In the standard basis the three coefficient vectors are the columns of $A=\begin{pmatrix}3&1&0\\1&0&1\\1&0&-1\end{pmatrix}$.

Change to $\mathcal B=((1,0,0),(1,1,0),(1,1,1))$. For a vector $a$ with standard coordinates $(a_1,a_2,a_3)$,

$$
[a]_{\mathcal B}=\begin{pmatrix}a_1-a_2\\a_2-a_3\\a_3\end{pmatrix}.
$$

The notebook begins transforming this vector, with a first entry starting $3a_1$, and leaves the calculation unfinished.

##### Fundamental subspaces under elimination

The lecture compares the four fundamental subspaces of $A=LU$ with those of $U$. It marks $N(A)=N(U)$ and $C(A^{\mathsf T})=C(U^{\mathsf T})$. It places the column spaces $C(A),C(U)$ and the left null spaces $N(A^{\mathsf T}),N(U^{\mathsf T})$ side by side without marking equality. In particular, solve $U\mathbf{x}=0$ to find the solutions to $A\mathbf{x}=0$.

##### Eigenvalue calculation and diagonalization

For a linear map $T\colon V\to V$, a nonzero $x$ satisfying $Tx=\lambda x$ is an eigenvector associated with $\lambda$. For an $n\times n$ matrix, solve $\det(A-\lambda I)=0$ for the eigenvalues, then compute $N(A-\lambda I)$ for each one. Its nonzero elements are the associated eigenvectors.

The matrix is diagonalizable if $A=PDP^{-1}$ for diagonal $D$ and invertible $P$. Eigenvalues may repeat. Every nonzero scalar multiple of an eigenvector is another eigenvector for the same eigenvalue.

An $n\times n$ matrix has $n$ eigenvalues over $\mathbb C$ when counted with algebraic multiplicity. Over $\mathbb R$, some of these roots may be absent. In $A=PDP^{-1}$ the eigenvalues are the entries of $D$ and the corresponding eigenvectors are the columns of $P$ in matching order. Eigenvectors belonging to distinct eigenvalues are independent.

A diagonal matrix is already diagonalized. The example asks for the eigenvectors of

$$
A=\begin{pmatrix}3&0&0\\0&3&0\\0&0&2\end{pmatrix}.
$$

##### Repeated eigenvalues

**1.** Let $A=\begin{pmatrix}1&2\\0&1\end{pmatrix}$. Its determinant is one and its trace is two. Its only eigenvalue is one, of multiplicity two. The eigenvector equation is

$$
\begin{pmatrix}0&2\\0&0\end{pmatrix}v=0.
$$

The eigenvectors are the nonzero multiples of $(1,0)^{\mathsf T}$. There is only one independent direction, so $A$ has no eigenvector basis and is not diagonalizable.

**2.** Let $A=2I_2$. Its eigenvalue two also has multiplicity two, but $A-2I_2=0$. Every vector $c_1(1,0)^{\mathsf T}+c_2(0,1)^{\mathsf T}$ solves the shifted equation. The two standard basis vectors are independent eigenvectors.

For $A=2I_2$, both rows of $(A-2I_2)v=0$ read $0v_1+0v_2=0$. Both variables are free. Choose $(v_1,v_2)=(1,0)$ for the first eigenvector and $(0,1)$ for the second.

A past midterm gives $Av=2v$ and $Aw=-w$ and asks for $A^{101}(\pi v+ew)$. Linearity gives

$$
A^{101}(\pi v+ew)
=\pi A^{101}v+eA^{101}w=\pi2^{101}v-ew.
$$

##### Dot product

Take $v=(3,0,1)$ and $w=(-1,2,7)$. Their dot product is $3(-1)+0(2)+1(7)=4$. In $\mathbb R^n$ the dot product is $v\cdot w=v^{\mathsf T}w=w^{\mathsf T}v$. The squared norm of $v$ is $v\cdot v=3^2+0^2+1^2=10$. For nonzero vectors, the angle $\theta$ is determined by

$$
v\cdot w=\|v\|\|w\|\cos\theta,
\qquad
\cos\theta=\frac{v\cdot w}{\|v\|\|w\|}.
$$

The final line gives the entrywise identity for a matrix times its inverse, $\sum_k A_{ik}(A^{-1})_{kj}=\delta_{ij}$.

##### Orthogonality

In $\mathbb R^n$, $x\cdot y=y^{\mathsf T}x=x^{\mathsf T}y$. Vectors $x$ and $y$ are orthogonal if and only if $x\cdot y=0$. A mutually orthogonal set of nonzero vectors is linearly independent. Subspaces $V,W$ are orthogonal if every vector in $V$ is orthogonal to every vector in $W$.

**5.** For a matrix $A$, the notes list $C(A)$, $N(A)$, $N(A^{\mathsf T})$, and $C(A^{\mathsf T})$.

**6.** For a subspace $V\subseteq\mathbb R^n$, define

$$
W=\{x\in\mathbb R^n:x\cdot v=0\text{ for every }v\in V\}.
$$

This space is the orthogonal complement $V^\perp$. For example, when $V$ is the $x$-axis in $\mathbb R^3$, $V^\perp$ is the $yz$ plane. In $\mathbb R^n$,

$$
(V^\perp)^\perp=V,\qquad \dim V+\dim V^\perp=n.
$$

An $m\times n$ matrix maps $\mathbb R^n$ to $\mathbb R^m$ and sends all of $N(A)$ to zero.

The null space and row space are orthogonal complements in $\mathbb R^n$, and the left null space and column space are orthogonal complements in $\mathbb R^m$,

$$
N(A)=C(A^{\mathsf T})^\perp,\qquad N(A^{\mathsf T})=C(A)^\perp.
$$

##### Domain and codomain decompositions

The diagram for $A\colon\mathbb R^n\to\mathbb R^m$ labels the row space and column space with dimension $r=\operatorname{rank}A$. The kernel has dimension $n-r$ and maps to the origin. The left null space has dimension $m-r$ and is orthogonal to the range.

![[Kyle Kabasares - Linear Analysis I - Four fundamental subspaces.png|**Fig. 4** Orthogonal pairs in the domain and codomain. The arrow from the kernel ends at zero.]]

Suppose a basis of the left null space is $\{(2,1,0),(1,0,0)\}$. To determine whether $(5,8,7)$ is in $C(A)$, take its dot product with each basis vector. The products are $18$ and $5$, so the target is outside the column space. The dot product test works in $\mathbb R^n$. The usual vector cross product used in the course is an operation in $\mathbb R^3$.

##### Orthonormal sets

The goals are to construct orthonormal bases, study orthogonal matrices, and use Gram–Schmidt. A set $\{q_1,\ldots,q_k\}$ is orthonormal if

$$
q_i\cdot q_j=\begin{cases}
0,&i\ne j,\\
1,&i=j.
\end{cases}
$$

A unit vector satisfies $v\cdot v=\|v\|^2=1$. Thus the vectors in an orthonormal set all have norm one and are mutually orthogonal. The example uses the columns of

$$
Q=\begin{pmatrix}
1/\sqrt2&1/\sqrt3\\
0&1/\sqrt3\\
-1/\sqrt2&1/\sqrt3
\end{pmatrix}.
$$

The rows of $Q^{\mathsf T}$ are the transposed columns of $Q$. For a general $m\times n$ matrix $Q$, the condition $Q^{\mathsf T}Q=I_n$ is equivalent to having orthonormal columns. A mutually orthogonal set of nonzero vectors is independent, so there can be at most $m$ such vectors in $\mathbb R^m$.

**(b)** For such a $Q$, $(Q\mathbf{x})\cdot(Q\mathbf{y})=\mathbf{x}\cdot\mathbf{y}$.

**(c)** If $\mathbf b=c_1q_1+\cdots+c_kq_k$, take the dot product with $q_i$. Every term except $c_i(q_i\cdot q_i)$ vanishes, giving $c_i=\mathbf b\cdot q_i$.

For a matrix with orthonormal columns,

$$
(Q\mathbf{x})\cdot(Q\mathbf{y})
=(Q\mathbf{x})^{\mathsf T}(Q\mathbf{y})
=\mathbf{x}^{\mathsf T}Q^{\mathsf T}Q\mathbf{y}
=\mathbf{x}^{\mathsf T}\mathbf{y}.
$$

##### Orthogonal projections

In an orthogonal basis, every vector is perpendicular to every other basis vector. Divide each vector by its length to turn the basis into an orthonormal one. The condition $q_i^{\mathsf T}q_j=0$ for $i\ne j$ expresses orthogonality, and $q_i^{\mathsf T}q_i=1$ expresses normalization. The notes use $Q$ for a matrix with orthonormal columns.

The standard basis of $\mathbb R^2$ is $e_1=(1,0)$, $e_2=(0,1)$. In $\mathbb R^n$, the standard basis consists of the columns of $I_n$. A rotation preserves lengths and right angles, so rotating the standard axes gives another orthonormal basis.

The standard basis vectors may fall outside a given subspace of $\mathbb R^n$. Gram–Schmidt orthogonalization constructs an orthonormal basis of that subspace.

##### Orthogonal matrices

An orthogonal matrix $Q$ is square and has orthonormal columns. It satisfies $Q^{\mathsf T}=Q^{-1}$. The off-diagonal entries of $Q^{\mathsf T}Q$ are zero and the diagonal entries are one.

**Example 1.** For a plane rotation,

$$
Q=\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix},
\qquad
Q^{\mathsf T}=\begin{pmatrix}\cos\theta&\sin\theta\\-\sin\theta&\cos\theta\end{pmatrix}.
$$

In $QQ^{\mathsf T}$ the diagonal terms equal $\cos^2\theta+\sin^2\theta=1$ and the cross terms cancel, giving $I_2$. The map $Q$ rotates by $\theta$, and $Q^{\mathsf T}$ reverses the rotation by rotating through $-\theta$.

**Example 2.** Every permutation matrix is orthogonal. For the three-cycle,

$$
\begin{pmatrix}0&1&0\\0&0&1\\1&0&0\end{pmatrix}
\begin{pmatrix}0&0&1\\1&0&0\\0&1&0\end{pmatrix}=I_3.
$$

The two-dimensional swap $P=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ equals its transpose and satisfies $PP^{\mathsf T}=I_2$.

Multiplication by $Q$ with orthonormal columns preserves lengths,

$$
\|Qx\|^2=(Qx)^{\mathsf T}(Qx)=x^{\mathsf T}Q^{\mathsf T}Qx=x^{\mathsf T}x=\|x\|^2.
$$

It also preserves inner products, as on [[#Orthogonal projections|the section on Final review. Orthogonal projections]].

##### Coordinates in an orthonormal basis

Write $b=x_1q_1+\cdots+x_nq_n$ in an orthonormal basis of $\mathbb R^n$. Multiplying by $q_i^{\mathsf T}$ eliminates every term with $j\ne i$. Since $q_i^{\mathsf T}q_i=1$, the remaining coefficient is $x_i=q_i^{\mathsf T}b=q_i\cdot b$. Therefore,

$$
b=(q_1^{\mathsf T}b)q_1+(q_2^{\mathsf T}b)q_2+\cdots+(q_n^{\mathsf T}b)q_n.
$$

In matrix form, $Qx=b$ and $x=Q^{\mathsf T}b=Q^{-1}b$. The entries of $Q^{\mathsf T}b$ are the dot products with the basis vectors.

Every vector $b$ is the sum of its one-dimensional projections onto the lines through the vectors of an orthonormal basis. For a square matrix, orthonormal columns also imply orthonormal rows.

##### Orthogonality review

The length of $x\in\mathbb R^n$ is $\sqrt{x^{\mathsf T}x}$. The inner product is

$$
x^{\mathsf T}y=\begin{pmatrix}x_1&\cdots&x_n\end{pmatrix}
\begin{pmatrix}y_1\\\vdots\\y_n\end{pmatrix}
=\sum_{i=1}^n x_i y_i=y^{\mathsf T}x.
$$

For nonzero vectors, a positive result gives an angle less than $90^\circ$, a negative result gives an angle greater than $90^\circ$, and zero gives orthogonality. The zero vector is the only vector orthogonal to itself.

Suppose $v_1,\ldots,v_k$ are mutually orthogonal and nonzero. If $\sum_j c_jv_j=0$, multiply by $v_i^{\mathsf T}$. Only $c_i v_i^{\mathsf T}v_i$ remains. Since $v_i^{\mathsf T}v_i>0$, this implies $c_i=0$. The same holds for every coefficient, so the vectors are linearly independent.

Two subspaces $V,W\subseteq\mathbb R^n$ are orthogonal if $v^{\mathsf T}w=0$ for all $v\in V$ and $w\in W$.

## Source

Kyle Kabasares, *Linear Analysis I - Linear Algebra (Math 141, UC Merced 2016)*.
