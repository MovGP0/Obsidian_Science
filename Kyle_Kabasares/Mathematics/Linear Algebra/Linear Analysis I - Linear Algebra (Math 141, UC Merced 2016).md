---
title: "Linear Analysis I – Linear Algebra (Math 141, UC Merced 2016)"
---

> [!TLDR]
> The lectures use row reduction to solve linear systems and bases to represent linear maps. Worked examples cover determinants, diagonalization, orthogonal projections, and LU and QR factorization.

Source notes by Kyle Kabasares. [[Linear Analysis I - Linear Algebra (Math 141, UC Merced 2016).pdf|Original PDF]].

Transcribed PDF pages 1–81 of 81.

### PDF page 1

#### Cramer's rule and triangular factorization

For the system with coefficient matrix $A=\begin{pmatrix}1&2\\2&5\end{pmatrix}$ and right-hand side $(1,0)^{\mathsf T}$, replace one column at a time to obtain

$$
x=\frac{\begin{vmatrix}1&2\\0&5\end{vmatrix}}{\begin{vmatrix}1&2\\2&5\end{vmatrix}}=5,
\qquad
y=\frac{\begin{vmatrix}1&1\\2&0\end{vmatrix}}{\begin{vmatrix}1&2\\2&5\end{vmatrix}}=-2.
$$

The matrix is symmetric, $A=A^{\mathsf T}$. The elimination matrix is lower triangular, and the result of elimination is upper triangular,

$$
\begin{pmatrix}1&0\\-2&1\end{pmatrix}
\begin{pmatrix}1&2\\2&5\end{pmatrix}
=\begin{pmatrix}1&2\\0&1\end{pmatrix}.
$$

Inverting the elimination gives $A=LU$. The pivots are both one, so the $LDU$ factorization has $D=I$ and $U=L^{\mathsf T}$,

$$
\begin{pmatrix}1&2\\2&5\end{pmatrix}
=\begin{pmatrix}1&0\\2&1\end{pmatrix}
\begin{pmatrix}1&0\\0&1\end{pmatrix}
\begin{pmatrix}1&2\\0&1\end{pmatrix}.
$$

#### Lecture 8/26/16

Find $a$ and $b$ such that

$$
a\begin{pmatrix}3\\1\end{pmatrix}+b\begin{pmatrix}1\\2\end{pmatrix}
=\begin{pmatrix}107\\64\end{pmatrix}.
$$

The two equations are $3a+b=107$ and $a+2b=64$. The coefficient matrix $A$ has determinant $6-1=5$. For a general $2\times2$ matrix with entries $a_{11},a_{12},a_{21},a_{22}$, its inverse is

$$
A^{-1}=\frac{1}{\det A}
\begin{pmatrix}a_{22}&-a_{12}\\-a_{21}&a_{11}\end{pmatrix}.
$$

Here $A^{-1}=\tfrac15\begin{pmatrix}2&-1\\-1&3\end{pmatrix}$. Multiplication by $A$ gives $\tfrac15\begin{pmatrix}6-1&2-2\\-3+3&-1+6\end{pmatrix}=I$. The solution is

$$
\begin{pmatrix}a\\b\end{pmatrix}
=\frac15\begin{pmatrix}2&-1\\-1&3\end{pmatrix}\begin{pmatrix}107\\64\end{pmatrix}
=\frac15\begin{pmatrix}214-64\\-107+192\end{pmatrix}
=\begin{pmatrix}30\\17\end{pmatrix}.
$$

Gauss–Jordan elimination gives another method. Start with the augmented matrix $\left[\begin{array}{cc|c}3&1&107\\1&2&64\end{array}\right]$.

### PDF page 2

#### Discussion 8/26

The date on this page appears to end in 2015. The sketches show four possibilities for two lines in the plane. Distinct parallel lines have no intersection. Intersecting lines have one point in common, including the special case of perpendicular lines. Coincident lines share every point.

#### Sample quiz

Solve

$$
x+2y=1,\qquad 2x+5y=0.
$$

Substitution gives $y=(1-x)/2$ and $2x+5(1-x)/2=0$. The notebook crosses out an incorrect expansion after this step. Multiplying by two gives $4x+5-5x=0$, so $x=5$ and $y=-2$.

When $\det A\ne0$, the inverse of $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ is $\frac{1}{\det A}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$. In this example,

$$
A^{-1}\begin{pmatrix}1\\0\end{pmatrix}
=\begin{pmatrix}5&-2\\-2&1\end{pmatrix}\begin{pmatrix}1\\0\end{pmatrix}
=\begin{pmatrix}5\\-2\end{pmatrix}.
$$

The row reduction is

$$
\left[\begin{array}{cc|r}1&2&1\\2&5&0\end{array}\right]
\xrightarrow{R_2\gets R_2-2R_1}
\left[\begin{array}{cc|r}1&2&1\\0&1&-2\end{array}\right]
\xrightarrow{R_1\gets R_1-2R_2}
\left[\begin{array}{cc|r}1&0&5\\0&1&-2\end{array}\right].
$$

### PDF page 3

#### Lecture 8/29/2016. Vectors and linear combinations

Review vectors, scalar multiplication, and addition algebraically and geometrically. The notes show a column vector such as $\begin{pmatrix}3\\1\end{pmatrix}$ or $\begin{pmatrix}x_1\\x_2\end{pmatrix}$ as an arrow in the plane.

In the magic carpet and hoverboard problem, the trip combines two directions,

$$
a\begin{pmatrix}3\\1\end{pmatrix}+b\begin{pmatrix}1\\2\end{pmatrix}
=\begin{pmatrix}107\\64\end{pmatrix}.
$$

This vector equation is the same as $\begin{pmatrix}3&1\\1&2\end{pmatrix}\begin{pmatrix}a\\b\end{pmatrix}=\begin{pmatrix}107\\64\end{pmatrix}$, or $3a+b=107$ and $a+2b=64$. The solution is $a=30$, $b=17$. In the east–north sketch, the first leg is $30(3,1)=(90,30)$, and the second leg is $17(1,2)=(17,34)$. In the graph of the equations in the $(a,b)$ plane, the two lines meet at $(30,17)$. The first line is $b=-3a+107$.

The notes cite section 1.2 of Strang. The length of $(3,1)$ is $\sqrt{3^2+1^2}=\sqrt{10}$, and the length of $30(3,1)$ is $30\sqrt{10}$. The result $(107,64)$ is a linear combination of $(3,1)$ and $(1,2)$.

#### 8/31/2016. Independence and span

The lecture replaces the target with an arbitrary vector $(c,d)$. Alex's conjecture is that two vectors are independent if neither is a scalar multiple of the other. To test dependence, solve

$$
a\begin{pmatrix}3\\1\end{pmatrix}+b\begin{pmatrix}1\\2\end{pmatrix}=\begin{pmatrix}0\\0\end{pmatrix}.
$$

The pair is dependent if there is a solution with at least one nonzero coefficient. For the carpet problem the two vectors are independent. The lecture conjectures that the linear combinations of two independent vectors in $\mathbb R^2$ cover the entire plane, leaving nowhere for Gauss to hide.

### PDF page 4

#### Reduced row echelon form

1. All zero rows are at the bottom.
2. The leftmost nonzero entry of each nonzero row is one. This is a leading one, or pivot. There are as many pivots as pivot columns.
3. Each pivot is farther to the right than the pivot in the row above it.
4. A pivot is the only nonzero entry in its column.

#### Discussion 9/2/2016. Span and dependence

The span consists of all possible linear combinations,

$$
\operatorname{span}\{v_1,\dots,v_n\}
=\{c_1v_1+\cdots+c_nv_n:c_1,\dots,c_n\in\mathbb R\}.
$$

To express $(a,b)$ in terms of $(3,1)$ and $(1,2)$, solve for $c_1,c_2$ in the augmented matrix. The notes begin with

$$
\left[\begin{array}{cc|r}3&1&a\\1&2&b\end{array}\right]
\xrightarrow{R_1\gets R_1-2R_2}
\left[\begin{array}{cc|r}1&-3&a-2b\\1&2&b\end{array}\right].
$$

For the week 3 portfolio, the vectors are $v_1=(1,1,1)$, $v_2=(6,3,8)$, and $v_3=(4,1,6)$. The notebook sets up $c_1v_1+c_2v_2+c_3v_3=0$ and writes the first two vectors as columns of $\begin{pmatrix}1&6\\1&3\\1&8\end{pmatrix}$. In the earlier two-dimensional example, the zero vector is a linear combination of $(3,1)$ and $(1,2)$ with both coefficients zero.

Vectors $v_1,\ldots,v_p$ are linearly dependent if $c_1v_1+\cdots+c_pv_p=0$ for some coefficients that are not all zero.

#### Discussion 9/9

Expand a linear combination of $v+w$ and $v-w$,

$$
c_1(v+w)+c_2(v-w)=(c_1+c_2)v+(c_1-c_2)w.
$$

For the target $v$, set $c_1+c_2=1$ and $c_1-c_2=0$, so $c_1=c_2=1/2$. For the target $w$, set $c_1+c_2=0$ and $c_1-c_2=1$, so $c_1=1/2$ and $c_2=-1/2$.

### PDF page 5

#### Discussion, continued

Let $c=v+w$ and $d=v-w$. Since $c,d$ are combinations of $v,w$, and $v=(c+d)/2$, $w=(c-d)/2$, the spans agree,

$$
\operatorname{span}\{v,w\}=\operatorname{span}\{c,d\}.
$$

The coefficient transformations in the notebook are

$$
\begin{aligned}
c_1v+c_2w&=\tfrac12(c_1+c_2)c+\tfrac12(c_1-c_2)d,\\
d_1d+d_2c&=(d_1+d_2)v+(-d_1+d_2)w.
\end{aligned}
$$

In each direction the transformation is invertible. A zero linear combination of either pair therefore has only zero coefficients exactly when the same holds for the other pair.

#### Lecture 9/9/2016. Linear independence and implications

The vectors $v_1,\ldots,v_p$ are linearly independent when $c_1v_1+\cdots+c_pv_p=0$ implies $c_1=\cdots=c_p=0$. For example, the vectors $(1,1,1)$, $(6,3,8)$, and $(4,4,4)$ are dependent because $-4v_1+0v_2+v_3=0$.

The notes label an implication “if $P$, then $Q$.” In the two-vector example, $P$ says that neither vector is a scalar multiple of the other, and $Q$ says that the pair is linearly independent.

### PDF page 6

The portfolio vectors on page 4 are dependent because

$$
2\begin{pmatrix}1\\1\\1\end{pmatrix}
-\begin{pmatrix}6\\3\\8\end{pmatrix}
+\begin{pmatrix}4\\1\\6\end{pmatrix}
=\begin{pmatrix}0\\0\\0\end{pmatrix}.
$$

The notes return to $c_1-c_2=0$ and $c_1+c_2=1$. In the first attempt the subtraction $R_2\gets R_1-R_2$ gives the row $(0,-2\mid -1)$. The notebook appears to lose the minus sign on the right. The second attempt starts with the equations in reverse order and gives the correct result,

$$
\begin{aligned}
\left[\begin{array}{cc|c}1&1&1\\1&-1&0\end{array}\right]
&\xrightarrow{R_2\gets R_1-R_2}
\left[\begin{array}{cc|c}1&1&1\\0&2&1\end{array}\right]\\
&\xrightarrow{R_2\gets R_2/2}
\left[\begin{array}{cc|c}1&1&1\\0&1&1/2\end{array}\right]
\xrightarrow{R_1\gets R_1-R_2}
\left[\begin{array}{cc|c}1&0&1/2\\0&1&1/2\end{array}\right].
\end{aligned}
$$

Thus the coefficients of $v+w$ and $v-w$ that give $v$ are both $1/2$.

#### Lecture 9/12/2016. Contraposition

The implication $P\implies Q$ is equivalent to $\neg Q\implies\neg P$. Likewise, $\neg P\implies Q$ is equivalent to $\neg Q\implies P$. The page begins a test of the statement

$$
\begin{pmatrix}3\\2\\5\end{pmatrix}
\in\operatorname{span}\left\{
\begin{pmatrix}1\\1\\2\end{pmatrix},
\begin{pmatrix}1\\-1\\0\end{pmatrix},
\begin{pmatrix}-2\\1\\-1\end{pmatrix}
\right\}.
$$

Set up a linear combination of the three generators and equate it to the target.

### PDF page 7

#### Discussion 9/16/2016. Homework 2

**4.** If $w_1,w_2,w_3$ are linearly independent, prove that $v_1=w_2+w_3$, $v_2=w_1+w_3$, and $v_3=w_1+w_2$ are linearly independent. Suppose $c_1v_1+c_2v_2+c_3v_3=0$. Expanding yields

$$
(c_2+c_3)w_1+(c_1+c_3)w_2+(c_1+c_2)w_3=0.
$$

Independence of the $w_i$ implies $c_2+c_3=0$, $c_1+c_3=0$, and $c_1+c_2=0$. Subtract the second equation from the first to get $c_2=c_1$. The third then gives $2c_2=0$, so $c_1=c_2=0$. The remaining coefficient is $c_3=0$.

**5.** If $\{x,y\}$ is linearly independent and $\{x,y,z\}$ is linearly dependent, then $z\in\operatorname{span}\{x,y\}$. By dependence choose coefficients, not all zero, with $c_1x+c_2y+c_3z=0$. If $c_3=0$, the independence of $x,y$ forces $c_1=c_2=0$, a contradiction. Therefore $c_3\ne0$, and

$$
z=-\frac{c_1}{c_3}x-\frac{c_2}{c_3}y.
$$

#### Lecture 9/19/2016. Homogeneous systems

The system $A\mathbf{x}=0$ always has the zero solution. Does it have any other solutions when $A=\begin{pmatrix}3&4&1\\1&1&1\\2&3&2\end{pmatrix}$? The notes mark the three columns as vectors.

### PDF page 8

#### Column space and null space

The column space $C(A)$ is the span of the columns of $A$. For the matrix on page 7,

$$
0\begin{pmatrix}3\\1\\2\end{pmatrix}
+5\begin{pmatrix}4\\1\\3\end{pmatrix}
-2\begin{pmatrix}1\\1\\2\end{pmatrix}
=\begin{pmatrix}18\\3\\11\end{pmatrix}\in C(A).
$$

The null space $N(A)=\{\mathbf{x}:A\mathbf{x}=0\}$ contains the zero vector. To see whether it contains any other vector, use elimination on the augmented matrix. First use $R_2\gets R_2-R_1/3$ and $R_3\gets R_3-2R_1/3$. Then use $R_3\gets R_3+R_2$,

$$
\left[\begin{array}{ccc|c}3&4&1&0\\1&1&1&0\\2&3&2&0\end{array}\right]
\longrightarrow
\left[\begin{array}{ccc|c}3&4&1&0\\0&-1/3&2/3&0\\0&1/3&4/3&0\end{array}\right]
\longrightarrow
\left[\begin{array}{ccc|c}3&4&1&0\\0&-1/3&2/3&0\\0&0&2&0\end{array}\right].
$$

This is upper triangular. Its three nonzero diagonal entries are the pivots.

#### Lecture 9/21/2016

The review returns to the same matrix. Since there are three pivots, $A\mathbf{x}=0$ has a unique solution.

### PDF page 9

#### Forward elimination and back substitution

The triangular system $U\mathbf{x}=0$ has equations $3x+4y+z=0$, $-y/3+2z/3=0$, and $2z=0$. Solve upward to get $z=y=x=0$.

For a nonzero right-hand side, perform the same row operations on both sides,

$$
\left[\begin{array}{ccc|r}3&4&1&2\\1&1&1&1\\2&3&2&1\end{array}\right]
\longrightarrow
\left[\begin{array}{ccc|r}3&4&1&2\\0&-1/3&2/3&1/3\\0&1/3&4/3&-1/3\end{array}\right]
\longrightarrow
\left[\begin{array}{ccc|r}3&4&1&2\\0&-1/3&2/3&1/3\\0&0&2&0\end{array}\right].
$$

This is the end of forward elimination. In the new system $U\mathbf{x}=\mathbf{b}_{\mathrm{new}}$, back substitution gives $z=0$, then $-y/3=1/3$, and finally $3x+4y=2$. The solution is $(x,y,z)=(2,-1,0)$.

#### Rectangular matrix

The matrix $B$ is $3\times4$, so the unknown in $B\mathbf{x}=0$ has four components $(x,y,z,w)$. Subtract the first row from the second and third, then clear the third row with the second,

$$
B=\begin{pmatrix}1&2&6&4\\1&2&3&1\\1&2&8&6\end{pmatrix}
\longrightarrow
\begin{pmatrix}1&2&6&4\\0&0&-3&-3\\0&0&2&2\end{pmatrix}
\longrightarrow
\begin{pmatrix}1&2&6&4\\0&0&-3&-3\\0&0&0&0\end{pmatrix}.
$$

The circled pivots are $1$ and $-3$. A pivot is nonzero by definition.

### PDF page 10

#### Pivot and free variables

Use each pivot to make the entries below it zero. For the rectangular system on page 9, the resulting equations are

$$
x+2y+6z+4w=0,\qquad -3z-3w=0,\qquad 0=0.
$$

The first and third columns are pivot columns, so $x,z$ are pivot variables. The second and fourth columns are free, so $y,w$ can take any real values. The second equation gives $z=-w$. Substituting $6(-w)+4w=-2w$ into the first gives $x=-2y+2w$. For example, choosing $w=1$ gives $z=-1$ and $x=-2y+2$.

The entire solution is

$$
\begin{pmatrix}x\\y\\z\\w\end{pmatrix}
=\begin{pmatrix}-2y+2w\\y\\-w\\w\end{pmatrix}
=y\underbrace{\begin{pmatrix}-2\\1\\0\\0\end{pmatrix}}_{v_1}
+w\underbrace{\begin{pmatrix}2\\0\\-1\\1\end{pmatrix}}_{v_2}.
$$

The null space is the span of $v_1,v_2$. There are four unknowns, three equations, and two pivots.

### PDF page 11

To compute the special solutions of $U\mathbf{x}=0$, set one free variable to one and the other to zero. The choice $(y,w)=(1,0)$ gives $(-2,1,0,0)$, and $(0,1)$ gives $(2,0,-1,1)$.

#### Discussion 9/23. The four fundamental subspaces

For an $m\times n$ matrix $A$ of rank $r$, the diagram groups the row space $C(A^{\mathsf T})$ with $N(A)$ and the column space $C(A)$ with $N(A^{\mathsf T})$. The rank counts the number of independent columns in a maximal independent set. The column space has dimension $r$, and the null space has dimension $n-r$.

**(a)** Find a square matrix whose null space contains only zero. For $A=I_2$, the equation $A(x,y)^{\mathsf T}=0$ gives $x=y=0$. Another example is $\begin{pmatrix}1&0\\1&1\end{pmatrix}$. Its homogeneous equations are $x=0$ and $x+y=0$, so $y=0$ also.

**(b)** The notebook asks for a rectangular matrix with trivial null space, then tests the wide matrix

$$
A=\begin{pmatrix}1&0&0&0\\0&0&1&0\end{pmatrix},
\qquad
A\begin{pmatrix}w\\x\\y\\z\end{pmatrix}=\begin{pmatrix}w\\y\end{pmatrix}.
$$

This matrix has rank two and four columns. The equation gives $w=y=0$, with $x,z$ free. It therefore has nullity two. Its transpose provides a rectangular example with trivial null space.

### PDF page 12

For the wide matrix on page 11, each null vector splits into its second and fourth coordinate parts,

$$
\begin{pmatrix}0\\x\\0\\z\end{pmatrix}
=\begin{pmatrix}0\\x\\0\\0\end{pmatrix}+\begin{pmatrix}0\\0\\0\\z\end{pmatrix}.
$$

The sketch represents this two-dimensional null space as the $xz$ plane. For the transpose, the equation is

$$
\begin{pmatrix}1&0\\0&0\\0&1\\0&0\end{pmatrix}
\begin{pmatrix}x\\y\end{pmatrix}
=\begin{pmatrix}x\\0\\y\\0\end{pmatrix}
=\begin{pmatrix}0\\0\\0\\0\end{pmatrix}.
$$

Thus $x=y=0$. The transpose has two columns and rank two, so its null space has dimension zero.

If $v,w\in N(A)$, then every linear combination of them belongs to $N(A)$. Indeed,

$$
A(\alpha v+\beta w)=A(\alpha v)+A(\beta w)=\alpha Av+\beta Aw=0.
$$

#### Lecture 9/23/2016. Pivoting

The lecture repeats the reduction of $B$ on page 9. If the first entry of the first row were zero, so that the matrix were $\begin{pmatrix}0&2&6&4\\1&2&3&1\\1&2&8&6\end{pmatrix}$, exchange rows to bring a nonzero entry into the first pivot position.

### PDF page 13

Miller asks what happens to $A\mathbf{x}=\mathbf b$ when two rows are exchanged. Exchanging rows of both $A$ and $\mathbf b$ preserves the solutions. The column space of $A$ may change. In particular, forward elimination produces an upper echelon matrix $U$ with the same homogeneous solutions as $A$, so $N(U)=N(A)$.

The rectangular example gives $x=-2y+2w$ and $z=-w$, with $y,w$ free. To construct the first special solution, set $y=1$ and $w=0$ in $x+2y+6z+4w=0$ and $-3z-3w=0$. This gives $x=-2$, $z=0$. To get the second solution, set $y=0$ and $w=1$. Therefore,

$$
N(B)=\operatorname{span}\left\{
\begin{pmatrix}-2\\1\\0\\0\end{pmatrix},
\begin{pmatrix}2\\0\\-1\\1\end{pmatrix}
\right\}.
$$

The rank is the number of pivots. There is one special solution for each free variable. The repeated handwritten equations contain inconsistent signs and entries. The vectors here follow the calculation on pages 9–10.

### PDF page 14

#### Complete solution to a nonhomogeneous system

For the same rectangular matrix $B$, use the right-hand side $(3,0,5)^{\mathsf T}$,

$$
\left[\begin{array}{cccc|r}1&2&6&4&3\\1&2&3&1&0\\1&2&8&6&5\end{array}\right]
\longrightarrow
\left[\begin{array}{cccc|r}1&2&6&4&3\\0&0&-3&-3&-3\\0&0&2&2&2\end{array}\right]
\longrightarrow
\left[\begin{array}{cccc|r}1&2&6&4&3\\0&0&-3&-3&-3\\0&0&0&0&0\end{array}\right].
$$

The last row is $0=0$, leaving two equations in four variables. The second equation $-3z-3w=-3$ gives $z=1-w$. Substitute this into the first equation to get $x+2y+6-2w=3$, or $x=-3-2y+2w$. With $y,w$ free,

$$
\begin{pmatrix}x\\y\\z\\w\end{pmatrix}
=\begin{pmatrix}-3-2y+2w\\y\\1-w\\w\end{pmatrix}
=\begin{pmatrix}-3\\0\\1\\0\end{pmatrix}
+\begin{pmatrix}-2y+2w\\y\\-w\\w\end{pmatrix}.
$$

The first vector is a particular solution. The second ranges over $N(B)$. Thus $\mathbf{x}_{\mathrm{complete}}=\mathbf{x}_{\mathrm{part}}+\mathbf{x}_{\mathrm{null}}$.

### PDF page 15

#### Lecture 9/26/2016. Matrices as transformations

The matrix $A=\begin{pmatrix}3&1\\1&2\end{pmatrix}$ maps $(30,17)$ to $(107,64)$. A transformation $T\colon\mathbb R^m\to\mathbb R^n$ is a rule that sends each vector $\mathbf{x}\in\mathbb R^m$ to a vector $T(\mathbf{x})\in\mathbb R^n$.

![[Kyle Kabasares - Linear Analysis I - Matrix acting on a vector.png|**Fig. 1** The matrix $A$ sends the input vector $(30,17)$ to the output vector $(107,64)$.]]

For example, the $2\times4$ matrix

$$
T=\begin{pmatrix}3&1&5&0\\1&2&0&8\end{pmatrix}
$$

multiplies a $4\times1$ column vector and gives a $2\times1$ column vector. It defines a map from $\mathbb R^4$ to $\mathbb R^2$. A matrix $L$ that maps $\mathbb R^2$ into $\mathbb R^3$ must be $3\times2$, since it maps $(x,y)^{\mathsf T}$ to a vector $(u,v,w)^{\mathsf T}$.

#### Lecture 9/28/2016. Image of zero

A transformation defined by a matrix sends the zero vector to zero. For example,

$$
\begin{pmatrix}1&1/3\\0&4/3\end{pmatrix}
\begin{pmatrix}0\\0\end{pmatrix}
=\begin{pmatrix}0\\0\end{pmatrix}.
$$

### PDF page 16

#### Discussion 9/30/2016. Homework 4

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

### PDF page 17

#### Homework 4, continued

**(c)** Row reduction gives

$$
\left[\begin{array}{cc|c}2&2&4\\2&2&4\end{array}\right]
\longrightarrow
\left[\begin{array}{cc|c}2&2&4\\0&0&0\end{array}\right].
$$

Set $y=t$, the free variable. Then $x=(4-2t)/2$. With $t=0$ the solution is $\mathbf{x}_1=(2,0)$ and $\|\mathbf{x}_1\|=2$. With $t=1$ the solution is $\mathbf{x}_2=(1,1)$ and $\|\mathbf{x}_2\|=\sqrt2$. The second is shorter, so setting a free variable to zero need not minimize the solution's norm.

**(b)** The claim that $A\mathbf{x}=\mathbf b$ has at most one particular solution is false. Any vector that satisfies the equation can serve as the particular solution.

**(a)** Apply $A$ to $c_1\mathbf{x}_{\mathrm{null}}+c_2\mathbf{x}_{\mathrm{part}}$. The result is $c_2\mathbf b$. When $\mathbf b\ne0$, it equals $\mathbf b$ precisely when $c_2=1$.

#### Lecture 9/30/2016. Review

Review linear combinations and span, linear dependence and independence, matrix–vector multiplication, column and null spaces, and existence and uniqueness in homogeneous and nonhomogeneous systems. Review the roles of pivots in forward elimination and back substitution.

### PDF page 18

#### Independence and spanning in three dimensions

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

### PDF page 19

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

### PDF page 20

#### Consistency and uniqueness

Consider the system with columns $u,v,w$ and right-hand side $(b_1,b_2,b_3)$. If the last row after elimination is $(0,0,0\mid 0)$ and the first two rows have pivots, then one variable is free and there are infinitely many solutions. If the last row is $(0,0,0\mid 1)$, then the system has no solutions. Three pivots in a $3\times3$ coefficient matrix guarantee a unique solution for each right-hand side.

#### Lecture 10/5/2016. Linear transformations

A matrix transformation $T\colon\mathbb R^n\to\mathbb R^m$ with $T(\mathbf{x})=A\mathbf{x}$ sends zero to zero. It also distributes over vector addition, $A(v+w)=Av+Aw$.

A transformation is linear if for all $\mathbf{x},\mathbf{y}\in\mathbb R^n$ and all scalars $c$,

$$
T(\mathbf{x}+\mathbf{y})=T(\mathbf{x})+T(\mathbf{y}),
\qquad
T(c\mathbf{x})=cT(\mathbf{x}).
$$

The page sets up the map $T\colon\mathbb R^2\to\mathbb R^2$ with $T(x,y)=(x-1,2y)$ for a test of linearity.

### PDF page 21

#### Discussion 10/7/2016

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

### PDF page 22

For an $m\times n$ matrix of rank $r$, the condition $m=r$ guarantees a solution for every right-hand side. The condition $n=r$ guarantees uniqueness whenever a solution exists.

For example,

$$
\begin{pmatrix}3&1&2\\0&2&0\\0&0&0\end{pmatrix}
\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}
=\begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix}.
$$

If $b_3\ne0$, the system is unsolvable. If $b_3=0$, the third variable is free and there are infinitely many solutions. No right-hand side gives a unique solution for this coefficient matrix.

#### Lecture 10/6/2016. Transformations in coordinates

A function such as $f(x)=\sin(x^2)$ can be viewed as a transformation from $\mathbb R$ to $\mathbb R$, with $T([x])=[\sin(x^2)]$. To specify a transformation from $\mathbb R^n$ to $\mathbb R^m$ explicitly, give $m$ coordinate functions of $n$ variables.

#### Lecture 10/10/2016

The heading includes “Happy Birthday!” For a linear map $A\colon\mathbb R^2\to\mathbb R^2$, knowing where two spanning vectors go determines where every vector goes. Write the input as a linear combination of the two vectors and use the same coefficients on their images. The page then raises the example of a map $\mathbb R^7\to\mathbb R^2$.

### PDF page 23

#### Bases of the domain

A basis for $\mathbb R^n$ is a linearly independent set that spans $\mathbb R^n$. The two properties are related and play different roles. The sketches show the standard basis $\{(1,0),(0,1)\}$ of $\mathbb R^2$ and another basis $\{(2,0),(2,3)\}$. Every basis for $\mathbb R^n$ has exactly $n$ vectors.

To find the matrix of a linear transformation, determine the images of a basis of its domain.

#### Lecture 10/17/2016. Inverse transformations

The identity matrix $I_n$ represents the identity transformation, and an inverse matrix represents the inverse transformation. A matrix $A$ is invertible if there is a matrix $C$ such that $AC=I$ and $CA=I$. Write $C=A^{-1}$.

A linear transformation $T\colon\mathbb R^n\to\mathbb R^m$ is invertible if there is a transformation $S\colon\mathbb R^m\to\mathbb R^n$ such that $T\circ S=\mathrm{Id}_{\mathbb R^m}$ and $S\circ T=\mathrm{Id}_{\mathbb R^n}$. Write $S=T^{-1}$.

The diagram shows $T_1\colon\mathbb R^n\to\mathbb R^m$ followed by $T_2\colon\mathbb R^m\to\mathbb R^p$, with inverses $S_1$ and $S_2$ along the reverse arrows. If $T_1,T_2$ are invertible, undo $T_2$ first, then $T_1$,

$$
(T_2\circ T_1)^{-1}=S_1\circ S_2=T_1^{-1}\circ T_2^{-1}.
$$

### PDF page 24

#### Inverse of a product

For invertible matrices $A$ and $B$, the inverse of $AB$ is $C=B^{-1}A^{-1}$. Verify both orders of multiplication,

$$
\begin{aligned}
C(AB)&=B^{-1}(A^{-1}A)B=B^{-1}B=I,\\
(AB)C&=A(BB^{-1})A^{-1}=AA^{-1}=I.
\end{aligned}
$$

The order matches the inverse-composition rule for transformations.

#### Lecture 10/19/2016. One-to-one and onto

For $T\colon\mathbb R^n\to\mathbb R^m$, the domain is $\mathbb R^n$ and the codomain is $\mathbb R^m$. The lecture relates the properties of $T$ to its matrix and systems of equations.

| Transformation | Matrix $A$ | System $A\mathbf{x}=\mathbf b$ |
| --- | --- | --- |
| One-to-one | There is a pivot in every column. The columns are independent. | There is at most one solution for each $\mathbf b$. |
| Onto | There is a pivot in every row. | There is at least one solution for each $\mathbf b$. |

For an onto map, every vector in the codomain is the image of some vector in the domain. The sketches include examples of general functions $\mathbb R\to\mathbb R$. The parabola $y=x^2$ is neither one-to-one nor onto. The other sketch shows a strictly increasing curve through the origin that reaches every real value, so it is both one-to-one and onto.

### PDF page 25

The range of a map is contained in its codomain. The handwritten sentence above the exercise reverses this inclusion.

Find a nonzero $2\times2$ matrix $A$ and distinct vectors $u,v\in\mathbb R^2$ with $Au=Av$. Such a matrix is noninvertible because the common image cannot be mapped back uniquely to both inputs.

#### Discussion 10/21/2016

The notebook tests whether there is a linear map $T\colon\mathbb R^3\to\mathbb R^2$ with

$$
T(1,0,1)=(2,1),\qquad
T(0,0,5)=(0,5),\qquad
T(1,0,3)=(2,11).
$$

Write its matrix as $A=\begin{pmatrix}a&b&c\\d&e&f\end{pmatrix}$. The first image requires $a+c=2$ and $d+f=1$. The second requires $5c=0$ and $5f=5$, so $c=0$ and $f=1$. It follows that $a=2$ and $d=0$.

The third input has second output coordinate $d+3f$, so the stated third image would require $d+3=11$. The notebook writes $2d+3=11$ at this step, although the input's first entry is one. With the values forced by the first two images, the third output would be $(2,3)$.

### PDF page 26

#### 10/21/2016. Gauss–Jordan method for the inverse

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

### PDF page 27

#### Determinants by elimination

For a $2\times2$ matrix, $\begin{vmatrix}a&b\\c&d\end{vmatrix}=ad-bc$. For the tridiagonal example, use $R_2\gets R_2-R_1/2$ and $R_3\gets R_3-(2/3)R_2$,

$$
A=\begin{pmatrix}2&1&0\\1&2&1\\0&1&2\end{pmatrix}
\longrightarrow
\begin{pmatrix}2&1&0\\0&3/2&1\\0&0&4/3\end{pmatrix}.
$$

Neither row replacement changes the determinant. Multiply the pivots to get $\det A=2\cdot(3/2)\cdot(4/3)=4$. With $s$ row exchanges and no row scaling, the determinant is $(-1)^s$ times the product of the diagonal entries in the triangular result.

#### Cofactors

The minor $M_{ij}$ is the determinant after deleting row $i$ and column $j$ of $A$. For this example,

$$
M_{11}=\begin{vmatrix}2&1\\1&2\end{vmatrix}=3.
$$

The cofactor is $C_{ij}=(-1)^{i+j}M_{ij}$.

### PDF page 28

#### Surjective maps

For a function $f\colon X\to Y$, the set $Y$ is the codomain. The function is **surjective**, or **onto**, if for every $y\in Y$ there is at least one $x\in X$ such that $f(x)=y$.

The first arrow diagram uses $X=\{1,2,3,4,5\}$ and $Y=\{a,b,c,d\}$. The values are

$$
f(1)=a,\qquad f(2)=b,\qquad f(3)=c,\qquad f(4)=f(5)=d.
$$

Every element of $Y$ has a preimage, so this function is onto. The second diagram keeps the same assignments and adds $e$ to $Y$. Then $e$ has no preimage and the function is no longer onto.

The codomain is the declared set of possible targets. The range, also called the image, is the set of targets actually reached. Thus $\operatorname{im}(f)=\operatorname{range}(f)\subseteq Y$, with equality precisely when $f$ is surjective.

### PDF page 29

#### Injective maps

A function $f\colon X\to Y$ is **injective**, or **one-to-one**, if every $y\in Y$ has at most one preimage. The lone dot in $Y$ in the sketch has no preimage. The two arrows reach different targets, so the illustrated map is injective and fails to be surjective.

![[Kyle Kabasares - Linear Analysis I - Injective map with an unreached target.png|**Fig. 2** Two inputs reach two distinct targets. The circled element in the codomain has no preimage.]]

#### Invertibility and matrix transformations

For $T\colon\mathbb R^n\to\mathbb R^m$ given by $T(\mathbf{x})=A\mathbf{x}$, the matrix $A$ is $m\times n$. Invertibility requires both surjectivity and injectivity. To test whether $T$ is onto, take any $\mathbf b\in\mathbb R^m$ and ask whether there is a vector $\mathbf{x}\in\mathbb R^n$ with $A\mathbf{x}=\mathbf b$. Surjectivity means there is at least one such solution for every $\mathbf b$.

### PDF page 30

Write $A=[a_1,\dots,a_n]$ and $\mathbf{x}=(x_1,\ldots,x_n)^{\mathsf T}$. Then $A\mathbf{x}=x_1a_1+\cdots+x_na_n$. For $T$ to be onto, these combinations must reach every target $\mathbf b\in\mathbb R^m$. Equivalently, $C(A)=\mathbb R^m$.

Reduce $[A\mid\mathbf b]$ to $[R\mid\mathbf c]$. There can be infinitely many solutions, one solution, or no solution. Inconsistency occurs precisely when a row of the coefficient block is zero and the corresponding right-hand entry is nonzero. The notebook sketches an example whose last right-hand entry is $2b_1+3b_2-b_3$. If the last coefficient row is zero, solvability imposes the condition $2b_1+3b_2-b_3=0$. This rules out some targets, so the map is not onto.

Therefore $T$ is onto if and only if $\operatorname{rref}(A)$ has a pivot in every row, for $m$ pivots in total.

#### Basis for the column space

Use $R=\operatorname{rref}(A)$ to find the pivot column indices. The columns of the original $A$ at those indices form a basis for $C(A)$. The diagram points from the pivot positions in $R$ to the corresponding columns $a_i$ of $A$.

### PDF page 31

#### Matrix condition for injectivity

To find $N(A)$, reduce $[A\mid 0]$ to $[\operatorname{rref}(A)\mid 0]$. The solution set consists of combinations of the special solutions $n_1,n_2,\ldots$, so a null vector has the form $a n_1+b n_2+\cdots$.

For the inhomogeneous equation, reduce $[A\mid\mathbf b]$ to $[\operatorname{rref}(A)\mid\mathbf b']$. If the system is consistent, obtain a particular solution $\mathbf{x}_p$ from the reduced equations, for example by setting the free variables to zero. Then all solutions have the form

$$
\mathbf{x}=\mathbf{x}_p+\mathbf{x}_h,
\qquad \mathbf{x}_h\in N(A).
$$

Indeed, if $A\mathbf{x}=A\mathbf{x}_p=\mathbf b$, then $A(\mathbf{x}-\mathbf{x}_p)=0$. The page labels $\mathbf b'$ as the particular solution, which in general must be read from the pivot equations.

A map is one-to-one when each $\mathbf b$ has at most one preimage. For $T(\mathbf{x})=A\mathbf{x}$, the displayed description of the solutions gives the criterion $N(A)=\{0\}$.

### PDF page 32

The condition $N(A)=\{0\}$ means that $x_1a_1+\cdots+x_na_n=0$ has only the zero coefficient vector. This is precisely independence of the columns $a_1,\ldots,a_n$. These $n$ columns then form a basis for $C(A)$, so $\dim C(A)=n$. The boxed $C(A)=\mathbb R^n$ on the page expresses this dimension count. For an $m\times n$ matrix, $C(A)$ is a subspace of $\mathbb R^m$. Thus $T$ is one-to-one exactly when $\operatorname{rank}A=n$.

#### Lecture 10/24/2016. Determinant and area

The image of the unit square under $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ is the parallelogram with edges $(a,c)$ and $(b,d)$. In the pictured orientation, its enclosing rectangle has area $(a+b)(c+d)$. The pieces outside the parallelogram consist of two copies each of triangles of areas $bd/2$, $ca/2$, and a rectangle of area $cb$. Subtracting gives

$$
(a+b)(c+d)-(bd+2cb+ca)=ad-bc.
$$

The determinant gives the signed area scale, and its absolute value gives the ordinary area scale.

![[Kyle Kabasares - Linear Analysis I - Determinant as parallelogram area.png|**Fig. 3** The enclosing rectangle and the pieces removed to find the shaded parallelogram's area.]]

### PDF page 33

#### Lecture 10/26/2016. Vector spaces and subspaces

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

### PDF page 34

The space $U$ of all $2\times2$ matrices is also a vector space. The notes return to closure of a null space. If $A\mathbf{x}_1=A\mathbf{x}_2=0$, then $A(\mathbf{x}_1+\mathbf{x}_2)=0$ and $A(c_1\mathbf{x}_1)=c_1A\mathbf{x}_1=0$.

#### Discussion 10/28/2016

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

### PDF page 35

#### Lecture 10/28/2016. Vector spaces

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

### PDF page 36

Let $V_3$ be the solution set of

$$
A\mathbf{x}=\mathbf b,\qquad A=\begin{pmatrix}1&2\\2&4\end{pmatrix},\qquad \mathbf b=\begin{pmatrix}3\\6\end{pmatrix}.
$$

For two solutions $\mathbf{x}_1,\mathbf{x}_2$, their sum maps to $A\mathbf{x}_1+A\mathbf{x}_2=(6,12)^{\mathsf T}$. Therefore $V_3$ fails closure under addition and is not a vector space.

#### Linear transformations of general vector spaces

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

### PDF page 37

For the trace map, scalar multiplication gives

$$
T_1\left(m\begin{pmatrix}a&b\\c&d\end{pmatrix}\right)=ma+md=m(a+d).
$$

Together with additivity, this proves linearity. The trace of a square matrix is the sum of its diagonal entries.

#### Lecture 10/31/2016. Differentiation on a polynomial space

The map $T\colon P_4\to P_4$ is given by $T(p)=p'$. To represent $p(t)=a+bt+ct^2+dt^3+ft^4$ by a column of numbers, choose a basis. Take

$$
e_1(t)=1,\qquad e_2(t)=t,\qquad e_3(t)=t^2,\qquad e_4(t)=t^3,\qquad e_5(t)=t^4.
$$

Every polynomial in $P_4$ is a linear combination of these five. The zero vector of $P_4$ is the zero polynomial, and $a+bt+ct^2+dt^3+ft^4$ is the zero polynomial only when $a=b=c=d=f=0$. Thus the five monomials are independent and span $P_4$.

### PDF page 38

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

#### Lecture 11/2/2016. Matrix of a linear map

Suppose $T\colon V\to W$ is linear.

1. Choose bases $\mathcal B=(v_1,\ldots,v_n)$ for $V$ and $\mathcal C=(w_1,\ldots,w_m)$ for $W$, so vectors can be represented by coordinate columns.
2. Compute each image $T(v_i)$ and write its coordinate column in the basis $\mathcal C$.
3. Use those coordinate columns as the columns of $A$, in the order of the basis $\mathcal B$.

For example, $3-2t^2+4t^4\in P_4$ has column $(3,0,-2,0,4)^{\mathsf T}$ in the monomial basis.

### PDF page 39

#### Coordinate representation of a matrix

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

### PDF page 40

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

#### Lecture 11/7/2016. Stretching along a basis direction

The transformation stretches by a factor of two along $y=-3x$ and fixes every point on $y=x$. Choose $a=(1,1)$ and $b=(1,-3)$ as basis vectors along these lines. To compute $T(-2,2)$, first write $(-2,2)$ as a linear combination of $a,b$, then apply $T$ using $T(a)=a$ and $T(b)=2b$.

The lecture conjectures that linear transformations send lines and planes to lines and planes, and asks for a proof. A general linear map can also reduce the dimension of the image.

### PDF page 41

#### 11/9–11/16/2016. Two coordinate systems

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

### PDF page 42

#### Diagonalization

For the two coordinate systems on page 41,

$$
\begin{pmatrix}5/4&-1/4\\-3/4&7/4\end{pmatrix}
=\begin{pmatrix}1&-1\\1&3\end{pmatrix}
\begin{pmatrix}1&0\\0&2\end{pmatrix}
\begin{pmatrix}1&-1\\1&3\end{pmatrix}^{-1}.
$$

A matrix $A$ is diagonalizable if $A=PDP^{-1}$ for an invertible $P$ and a diagonal $D$. The diagonal entries of $D$ are eigenvalues, which give the stretching factors. The corresponding columns of $P$ are eigenvectors, which point in the stretching directions.

#### Discussion 11/18/2016

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

### PDF page 43

If $Av=-3v$ and $Aw=100w$ for two independent vectors, take $P=[v\mid w]$ and $D=\operatorname{diag}(-3,100)$. The review also calls for knowing injectivity and surjectivity and proving that a transformation is linear.

#### Determinant as a map on matrices

Consider $T\colon M_{2\times2}\to\mathbb R$, where $T\bigl(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\bigr)=ad-bc$. Each of the four basis matrices on page 39 has determinant zero. If $T$ were linear, its coordinate matrix would be $(0,0,0,0)$ and it would vanish on every matrix. The identity has determinant one, so this contradicts linearity.

#### Lecture 11/18/2016. Eigenvectors and eigenvalues

For a linear map $T\colon V\to V$ represented by $A$, a nonzero vector $v$ is an eigenvector with eigenvalue $\lambda$ if $Av=\lambda v$. The vector gives a stretching direction and the eigenvalue gives the factor. For example, $(2,1)$ points along $y=x/2$, and

$$
\begin{pmatrix}1&-8\\-4&5\end{pmatrix}
\begin{pmatrix}2\\1\end{pmatrix}
=\begin{pmatrix}-6\\-3\end{pmatrix}
=-3\begin{pmatrix}2\\1\end{pmatrix}.
$$

### PDF page 44

The eigenvalue condition has three equivalent forms,

$$
\lambda\text{ is an eigenvalue of }A
\quad\Longleftrightarrow\quad
(A-\lambda I)\mathbf{x}=0\text{ has a nonzero solution}
\quad\Longleftrightarrow\quad
\det(A-\lambda I)=0.
$$

#### When can a matrix be diagonalized?

The matrix $A$ must be square. The matrix $P$ must be invertible, so its columns must consist of $n$ independent eigenvectors. A zero determinant still allows diagonalization. For example,

$$
A=\begin{pmatrix}1&-3\\2&1\end{pmatrix}
\begin{pmatrix}8&0\\0&0\end{pmatrix}
\begin{pmatrix}1&-3\\2&1\end{pmatrix}^{-1}
$$

is diagonalizable and has $\det A=\det D=0$. Zero is an eigenvalue precisely when $A\mathbf{x}=0$ has a nonzero solution. Equivalently, the columns of $A$ are dependent and $N(A)$ contains a nonzero vector.

The determinant is the product of all eigenvalues and the trace is their sum, with algebraic multiplicities included.

#### Midterm 2 study session. Kernel and image

For $T\colon V\to W$, the diagram marks $\ker T$ inside $V$ and $\operatorname{im}T$ inside $W$. The kernel maps to zero, and the image contains every vector reached by $T$.

### PDF page 45

The diagram shows $T(v_1)=w_1$, $T(v_2)=w_2$, and

$$
T\left(\tfrac14v_1+\tfrac34v_2\right)=\tfrac14w_1+\tfrac34w_2.
$$

For a linear map $T\colon\mathbb R^n\to\mathbb R^m$, probing the map on the $n$ vectors of an input basis determines it completely. Choose a basis $e_1,\ldots,e_n$ and record the output $T(e_i)$ for each input $e_i$. Every input $v$ has an expansion $v=v_1e_1+\cdots+v_ne_n$ in those basis vectors. Linearity then gives

$$
T(v)=v_1T(e_1)+v_2T(e_2)+\cdots+v_nT(e_n).
$$

The domain is $\mathbb R^n$ and the codomain is $\mathbb R^m$. The image is a subspace of the codomain, and $T$ is surjective if $\operatorname{im}T=\mathbb R^m$. The kernel is the subspace of the domain that maps to the zero vector.

### PDF page 46

For $T\colon\mathbb R^n\to\mathbb R^m$, the kernel is

$$
\ker T=\{v\in\mathbb R^n:T(v)=0\}.
$$

A linear map with trivial kernel $\{0\}$ is injective. Different inputs then have different outputs. A map that is both injective and surjective is bijective.

For a bijective linear map between the stated spaces, $n=m$. Surjectivity requires $n\ge m$ so there are enough independent input directions to span the codomain. Injectivity requires $m\ge n$ so all $n$ independent directions can have independent images.

For example, $T\colon\mathbb R^3\to\mathbb R^2$ with $T(x,y,z)=(x,z)$ has kernel $\operatorname{span}\{(0,1,0)\}$. The exercise asks for its range and whether it is injective or surjective. Every pair $(x,z)$ has a preimage, and varying $y$ preserves that image, so the map is surjective and fails injectivity.

#### LU decomposition

For a square matrix $A$, find a lower triangular $L$ and an upper triangular $U$ such that $A=LU$. The notes describe the elimination method in which $A$ reaches echelon form $U$ without row exchanges.

### PDF page 47

An $LU$ factorization can have different factors if no normalization is imposed. If $E_k\cdots E_2E_1A=U$, then

$$
A=(E_1^{-1}E_2^{-1}\cdots E_k^{-1})U,\qquad
L=E_1^{-1}E_2^{-1}\cdots E_k^{-1}.
$$

To record a row operation as a matrix, apply the operation to the identity. For $A=\begin{pmatrix}4&-16\\3&-8\end{pmatrix}$, use $R_2\gets-3R_1+4R_2$. Then

$$
E_1=\begin{pmatrix}1&0\\-3&4\end{pmatrix},\qquad E_1 A=U=\begin{pmatrix}4&-16\\0&16\end{pmatrix}.
$$

The cofactor matrix of $E_1$ is $C=\begin{pmatrix}4&3\\0&1\end{pmatrix}$. Since $\det E_1=4$, $L=E_1^{-1}=C^{\mathsf T}/4=\begin{pmatrix}1&0\\3/4&1/4\end{pmatrix}$. The product $LU$ recovers $A$.

For a second example,

$$
A=\begin{pmatrix}1&2&0\\3&-4&1\\-2&4&-3\end{pmatrix}
\xrightarrow{R_2\gets R_2-3R_1}
\begin{pmatrix}1&2&0\\0&-10&1\\-2&4&-3\end{pmatrix}
\xrightarrow{R_3\gets R_3+2R_1}
\begin{pmatrix}1&2&0\\0&-10&1\\0&8&-3\end{pmatrix}.
$$

The final row operation is $R_3\gets 5R_3+4R_2$.

### PDF page 48

The last row operation on page 47 gives $U=\begin{pmatrix}1&2&0\\0&-10&1\\0&0&-11\end{pmatrix}$. Applying the three operations separately to $I_3$ gives

$$
E_1=\begin{pmatrix}1&0&0\\-3&1&0\\0&0&1\end{pmatrix},\qquad
E_2=\begin{pmatrix}1&0&0\\0&1&0\\2&0&1\end{pmatrix},\qquad
E_3=\begin{pmatrix}1&0&0\\0&1&0\\0&4&5\end{pmatrix}.
$$

The middle row of $E_3$ is unchanged by the stated row operation. The handwritten matrix shows that row as $(0,0,1)$. Since $E_3E_2E_1A=U$, multiply by the inverses in reverse order to obtain $A=E_1^{-1}E_2^{-1}E_3^{-1}U$, where $L=E_1^{-1}E_2^{-1}E_3^{-1}$.

#### Shortcut for LU factorization

When elimination uses only replacements $R_i\gets R_i-m_{ij}R_j$ with $i>j$, build $L$ by putting the multipliers $m_{ij}$ below the diagonal and ones on the diagonal. These entries are the negatives of the coefficients added during elimination.

The next example asks for the factorization of

$$
A=\begin{pmatrix}1&4&-3\\-2&8&5\\3&4&7\end{pmatrix}.
$$

### PDF page 49

Apply the shortcut to $A=\begin{pmatrix}1&4&-3\\-2&8&5\\3&4&7\end{pmatrix}$. The row replacements are $R_2\gets R_2+2R_1$, $R_3\gets R_3-3R_1$, and $R_3\gets R_3+R_2/2$. Before the last replacement, the second and third rows are $(0,16,-1)$ and $(0,-8,16)$. Thus the last pivot is $16-1/2=15.5$. Record $-2,3,-1/2$ in the corresponding lower triangular positions to obtain

$$
A=LU=
\begin{pmatrix}1&0&0\\-2&1&0\\3&-1/2&1\end{pmatrix}
\begin{pmatrix}1&4&-3\\0&16&-1\\0&0&15.5\end{pmatrix}.
$$

For the second example, $A=\begin{pmatrix}2&4&-4\\1&-4&3\\-6&-9&5\end{pmatrix}$. Use $R_2\gets R_2-R_1/2$, $R_3\gets R_3+3R_1$, and $R_3\gets R_3+R_2/2$. The second and third rows before the last replacement are $(0,-6,5)$ and $(0,3,-7)$, and the last pivot is $2.5-7=-4.5$. The factors are

$$
L=\begin{pmatrix}1&0&0\\1/2&1&0\\-3&-1/2&1\end{pmatrix},
\qquad
U=\begin{pmatrix}2&4&-4\\0&-6&5\\0&0&-4.5\end{pmatrix}.
$$

### PDF page 50

The page confirms $A=LU$ and then returns to linear transformations.

#### Currency conversion as an example of linearity

In the example, an American in Paris buys eggs for €4 and coffee for €2. The exercise assumes that €1 converts to USD 1.50. Adding the prices in euros before converting gives the same result as converting each price and then adding. Multiplying a price by a scalar also commutes with conversion.

The two defining properties are $T(u+v)=T(u)+T(v)$ and $T(\alpha u)=\alpha T(u)$. Equivalently,

$$
T(\alpha u+\beta v)=\alpha T(u)+\beta T(v).
$$

A linear transformation of $\mathbb R^n$ can be represented by a matrix product. For instance,

$$
T_1\begin{pmatrix}a\\b\\c\end{pmatrix}
=\begin{pmatrix}b\\a\\2c\end{pmatrix}
=\begin{pmatrix}0&1&0\\1&0&0\\0&0&2\end{pmatrix}
\begin{pmatrix}a\\b\\c\end{pmatrix}.
$$

#### Change of basis

The notes cite 3Blue1Brown's linear algebra series. In the standard plane coordinates, the first basis vector points right and the second points up. The sketch adds two different basis vectors $b_1,b_2$ in red and asks how a friend using that coordinate system would describe the same vector.

### PDF page 51

In Jennifer's coordinate system, one step along $b_1$ has coordinates $(1,0)$, and one step along $b_2$ has coordinates $(0,1)$. The grid describes a choice of coordinates for the same space.

Suppose the basis vectors in standard coordinates are $b_1=(2,1)$ and $b_2=(-1,1)$. The matrix with these columns sends the standard grid to Jennifer's grid as a geometric transformation. As a coordinate conversion for a fixed vector, it translates from Jennifer's coordinates to standard coordinates,

$$
P=\begin{pmatrix}2&-1\\1&1\end{pmatrix}.
$$

For conversion in the other direction, use

$$
P^{-1}=\begin{pmatrix}1/3&1/3\\-1/3&2/3\end{pmatrix}.
$$

For example, the vector with standard coordinates $(3,2)$ has coordinates $(5/3,1/3)$ in the new basis,

$$
P^{-1}\begin{pmatrix}3\\2\end{pmatrix}
=\begin{pmatrix}5/3\\1/3\end{pmatrix}.
$$

#### Changing the matrix of a transformation

Start with a vector expressed in another person's coordinate system. The notes introduce the question of how to express a transformation in that system.

### PDF page 52

#### Determinants

A square matrix $A$ is singular if $\det A=0$ and invertible if $\det A\ne0$. To find the eigenvalues, identify the values of $\lambda$ for which $A-\lambda I$ is singular. The degree-$n$ polynomial $\det(A-\lambda I)$ has $n$ complex roots counted with multiplicity, giving the eigenvalues of an $n\times n$ matrix.

The absolute determinant gives the $n$-dimensional volume of the image of the unit box, and it is the volume scaling factor. For example, a plane transformation with determinant four multiplies areas by four. Elimination without row scaling gives the product of the diagonal entries, with a sign for each row exchange.

The notes list three basic properties.

1. $\det I_n=1$.
2. An exchange of two rows reverses the determinant's sign.
3. The determinant is linear in each row separately when the other rows are fixed.

Subtracting a multiple of one row from another preserves the determinant,

$$
\begin{vmatrix}a-\ell c&b-\ell d\\c&d\end{vmatrix}
=\begin{vmatrix}a&b\\c&d\end{vmatrix}.
$$

A matrix with a zero row has determinant zero. A triangular matrix has determinant equal to the product of its diagonal entries. The product rule is $\det(AB)=\det A\det B$.

### PDF page 53

The product rule implies $\det(A^{-1})=1/\det A$ for invertible $A$. Transposing preserves the determinant, $\det(A^{\mathsf T})=\det A$. For an $n\times n$ matrix and $k\in\mathbb R$, $\det(kA)=k^n\det A$.

#### Section 4.2 exercises

**1.** For a $4\times4$ matrix with $\det A=1/2$,

$$
\det(2A)=2^4\cdot\tfrac12=8,\quad
\det(-A)=(-1)^4\cdot\tfrac12=\tfrac12,\quad
\det(A^2)=\left(\tfrac12\right)^2=\tfrac14,\quad
\det(A^{-1})=2.
$$

**2.** For a $3\times3$ matrix with $\det A=-1$,

$$
\det(\tfrac12A)=-\tfrac18,\quad
\det(-A)=1,\quad
\det(A^2)=1,\quad
\det(A^{-1})=-1.
$$

**7(a).** Multiplying a $3\times1$ column by a $1\times3$ row gives

$$
A=\begin{pmatrix}1\\4\\2\end{pmatrix}\begin{pmatrix}2&-1&2\end{pmatrix}
=\begin{pmatrix}2&-1&2\\8&-4&8\\4&-2&4\end{pmatrix}.
$$

Columns 1 and 3 are identical. Proportional columns give determinant zero.

**7(b).** For the upper triangular matrix

$$
U=\begin{pmatrix}4&4&8&8\\0&1&2&2\\0&0&2&6\\0&0&0&2\end{pmatrix},
$$

the determinant is the product of the diagonal entries, $4\cdot1\cdot2\cdot2=16$.

### PDF page 54

**7(c).** The transpose of the matrix in 7(b) is

$$
U^{\mathsf T}=\begin{pmatrix}4&0&0&0\\4&1&0&0\\8&2&2&0\\8&2&6&2\end{pmatrix}.
$$

Its determinant is $16$. **7(d).** The inverse has determinant $1/16$.

#### Formulas for determinants

For invertible $A$, factor $PA=LDU$, with $P$ recording row exchanges, $L$ and $U$ unit triangular, and $D$ holding the pivots. Then $\det P=\pm1$, and

$$
\det A=\det P\det L\det D\det U
=\det P\prod_i D_{ii}.
$$

The sign is positive for an even number of exchanges and negative for an odd number.

Expansion along any row $i$ gives $\det A=\sum_j a_{ij}C_{ij}$. Here $C_{ij}=(-1)^{i+j}\det M_{ij}$, using $M_{ij}$ for the submatrix with row $i$ and column $j$ deleted. On page 27 the same symbol denotes the determinant of that submatrix.

#### Applications of determinants

For the cofactor matrix $C$, the inverse is $A^{-1}=C^{\mathsf T}/\det A$, with $(A^{-1})_{ij}=C_{ji}/\det A$. The solution to $A\mathbf{x}=\mathbf b$ is $\mathbf{x}=C^{\mathsf T}\mathbf b/\det A$.

For $x_1+3x_2=0$ and $2x_1+4x_2=6$, Cramer's rule gives

$$
x_1=\frac{\begin{vmatrix}0&3\\6&4\end{vmatrix}}{\begin{vmatrix}1&3\\2&4\end{vmatrix}}
=\frac{-18}{-2}=9,\qquad
x_2=\frac{\begin{vmatrix}1&0\\2&6\end{vmatrix}}{\begin{vmatrix}1&3\\2&4\end{vmatrix}}
=\frac{6}{-2}=-3.
$$

### PDF page 55

#### Eigenvalues and eigenvectors

Rewrite $A\mathbf{x}=\lambda\mathbf{x}$ as $(A-\lambda I)\mathbf{x}=0$. Choose $\lambda$ so that $A-\lambda I$ is singular. Then its null space contains a nonzero vector $\mathbf{x}$. The first numbered item on the page says “nullspace of $A$,” and the following equation and discussion use the shifted matrix $A-\lambda I$.

Let $A=\begin{pmatrix}4&-5\\2&-3\end{pmatrix}$. The characteristic polynomial is

$$
\det(A-\lambda I)=(4-\lambda)(-3-\lambda)+10
=\lambda^2-\lambda-2=(\lambda+1)(\lambda-2).
$$

For $\lambda_1=-1$, the matrix is $A+I=\begin{pmatrix}5&-5\\2&-2\end{pmatrix}$. Its null vectors satisfy $x=y$, so choose $\mathbf{x}_1=(1,1)^{\mathsf T}$. The notebook writes $(3,-3)$ in the second row, which gives the same null space.

For $\lambda_2=2$, the matrix is $A-2I=\begin{pmatrix}2&-5\\2&-5\end{pmatrix}$. Its null vectors satisfy $2x=5y$, so choose $\mathbf{x}_2=(5,2)^{\mathsf T}$.

### PDF page 56

A zero eigenvalue signals that $A$ is singular. All eigenvalues of an invertible matrix are nonzero. Counting multiplicities, their sum is the trace and their product is the determinant,

$$
\operatorname{tr}A=\lambda_1+\cdots+\lambda_n=a_{11}+\cdots+a_{nn},
\qquad
\det A=\lambda_1\cdots\lambda_n.
$$

#### Diagonalization of a matrix

If $A$ has $n$ linearly independent eigenvectors, place them as columns of $S$. Then

$$
S^{-1}AS=\Lambda=\operatorname{diag}(\lambda_1,\ldots,\lambda_n).
$$

The notebook calls $S$ the eigenvector matrix and $\Lambda$ the eigenvalue matrix.

1. If an $n\times n$ matrix has $n$ distinct eigenvalues in the field under consideration, the corresponding eigenvectors are independent. The matrix is diagonalizable over that field.
2. The choice of $S$ is not unique. For example, a nonzero scalar multiple of an eigenvector is an eigenvector for the same eigenvalue.
3. A matrix without $n$ independent eigenvectors cannot be diagonalized.

### PDF page 57

Diagonalizability requires $n$ independent eigenvectors, and invertibility requires every eigenvalue to be nonzero. These are independent conditions. Over a field where the characteristic polynomial splits, diagonalization can fail only when there are repeated eigenvalues. Eigenvectors $x_1,\ldots,x_k$ for distinct eigenvalues $\lambda_1,\ldots,\lambda_k$ are linearly independent. The notebook says “eigenvalues” in the conclusion of this theorem. A crossed-out proof start assumes $k=2$ and $c_1x_1+c_2x_2=0$.

#### Products and powers

If $Ax=\lambda x$, then $A^2x=A(\lambda x)=\lambda Ax=\lambda^2x$. The eigenvalues of $A^2$ are the squares of the eigenvalues of $A$, with multiplicities counted. For diagonalizable $A$, multiplying copies of $S^{-1}AS$ gives $\Lambda^k=S^{-1}A^kS$.

If $Ax=\lambda x$ and $Bx=\mu x$ for the same nonzero $x$, then $ABx=\mu\lambda x$. Two diagonalizable matrices over the same field have a common eigenvector basis if and only if $AB=BA$.

### PDF page 58

#### Vector spaces and subspaces

A real vector space has operations for vector addition and multiplication by real numbers. A subspace is a nonempty subset closed under linear combinations with the inherited operations. The sketch shades the first quadrant $x,y\ge0$ in $\mathbb R^2$. Multiplying a nonzero vector in this region by a negative scalar leaves the region, so it fails the subspace test.

#### The four fundamental subspaces

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

### PDF page 59

The conditions on page 58 for injectivity are also equivalent to $\ker T=\{0\}$, $\operatorname{nullity}A=0$, and $\operatorname{rank}A=n$.

The following are equivalent conditions for surjectivity.

1. $T$ is onto.
2. $T(\mathbf{x})=\mathbf b$ has a solution for every $\mathbf b\in\mathbb R^m$.
3. The columns of $A$ span $\mathbb R^m$. Each $\mathbf b$ is a linear combination of these columns.
4. $\operatorname{im}A=\mathbb R^m$.
5. $\operatorname{rank}A=m$, which is full row rank.
6. $\operatorname{nullity}A=n-m$.

If $m>n$, the $n$ columns of an $m\times n$ matrix cannot span $\mathbb R^m$. For example, a $3\times2$ matrix $\begin{pmatrix}a&d\\b&e\\c&f\end{pmatrix}$ has only two columns, too few to span $\mathbb R^3$.

#### Representing transformations as matrices

Consider $T\colon\mathbb R^3\to\mathbb R^3$ given by $T(a_1,a_2,a_3)=(3a_1+a_2,a_1+a_3,a_1-a_3)$.

For $P_3$, use the basis $p_1=1$, $p_2=t$, $p_3=t^2$, and $p_4=t^3$. Their derivatives are $0,1,2t,3t^2$. The page asks for a matrix representing the derivative operator in these coordinates.

### PDF page 60

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

### PDF page 61

For $T\colon\mathbb R^2\to\mathbb R^3$ with $T(x_1,x_2)=(x_1-2x_2,-x_2,3x_1-5x_2)$, use the standard basis $e_1=(1,0)$, $e_2=(0,1)$. Since $\mathbf{x}=x_1e_1+x_2e_2$,

$$
T(\mathbf{x})=x_1T(e_1)+x_2T(e_2)=[T(e_1)\mid T(e_2)]\mathbf{x}.
$$

Evaluating at $e_1$ gives $(1,0,3)$ and evaluating at $e_2$ gives $(-2,-1,-5)$, so

$$
A=\begin{pmatrix}1&-2\\0&-1\\3&-5\end{pmatrix}.
$$

#### Integration matrix

Use $V=P_3$ and $W=P_4$ with monomial bases. The last codomain basis vector is $t^4$, as required by $P_4$ and the image of $t^3$. The handwritten list appears to give $t^5$. The zero-constant antiderivative sends

$$
1\mapsto t,\qquad t\mapsto \frac{t^2}{2},\qquad
t^2\mapsto\frac{t^3}{3},\qquad t^3\mapsto\frac{t^4}{4}.
$$

The coordinate columns have their sole nonzero entries in rows 2, 3, 4, and 5, with coefficients $1$, $1/2$, $1/3$, and $1/4$, respectively.

### PDF page 62

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

For differentiation $T\colon P_3\to P_3$, the basis $(1,t,t^2,t^3)$ maps to $(0,1,2t,3t^2)$. The corresponding columns are $(0,0,0,0)^{\mathsf T}$, $(1,0,0,0)^{\mathsf T}$, $(0,2,0,0)^{\mathsf T}$, and $(0,0,3,0)^{\mathsf T}$, reproducing $A_{\mathrm{diff}}$ on page 60.

The final example returns to $M_{2\times2}$ with the same matrix-unit basis in domain and codomain. The matrix $\begin{pmatrix}a&b\\c&d\end{pmatrix}$ has coordinate column $(a,b,c,d)^{\mathsf T}$. Transposition maps it to $(a,c,b,d)^{\mathsf T}$, so the columns of the representing matrix are $e_1,e_3,e_2,e_4$, as on page 40.

### PDF page 63

For the map from page 59,

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

### PDF page 64

#### Lecture 11/28/2016. Fundamental subspaces under elimination

The lecture compares the four fundamental subspaces of $A=LU$ with those of $U$. It marks $N(A)=N(U)$ and $C(A^{\mathsf T})=C(U^{\mathsf T})$. It places the column spaces $C(A),C(U)$ and the left null spaces $N(A^{\mathsf T}),N(U^{\mathsf T})$ side by side without marking equality. In particular, solve $U\mathbf{x}=0$ to find the solutions to $A\mathbf{x}=0$.

#### Eigenvalue calculation and diagonalization

For a linear map $T\colon V\to V$, a nonzero $x$ satisfying $Tx=\lambda x$ is an eigenvector associated with $\lambda$. For an $n\times n$ matrix, solve $\det(A-\lambda I)=0$ for the eigenvalues, then compute $N(A-\lambda I)$ for each one. Its nonzero elements are the associated eigenvectors.

The matrix is diagonalizable if $A=PDP^{-1}$ for diagonal $D$ and invertible $P$. Eigenvalues may repeat. Every nonzero scalar multiple of an eigenvector is another eigenvector for the same eigenvalue.

### PDF page 65

An $n\times n$ matrix has $n$ eigenvalues over $\mathbb C$ when counted with algebraic multiplicity. Over $\mathbb R$, some of these roots may be absent. In $A=PDP^{-1}$ the eigenvalues are the entries of $D$ and the corresponding eigenvectors are the columns of $P$ in matching order. Eigenvectors belonging to distinct eigenvalues are independent.

A diagonal matrix is already diagonalized. The example asks for the eigenvectors of

$$
A=\begin{pmatrix}3&0&0\\0&3&0\\0&0&2\end{pmatrix}.
$$

### PDF page 66

#### Discussion 12/2/2016. Repeated eigenvalues

**1.** Let $A=\begin{pmatrix}1&2\\0&1\end{pmatrix}$. Its determinant is one and its trace is two. Its only eigenvalue is one, of multiplicity two. The eigenvector equation is

$$
\begin{pmatrix}0&2\\0&0\end{pmatrix}v=0.
$$

The eigenvectors are the nonzero multiples of $(1,0)^{\mathsf T}$. There is only one independent direction, so $A$ has no eigenvector basis and is not diagonalizable.

**2.** Let $A=2I_2$. Its eigenvalue two also has multiplicity two, but $A-2I_2=0$. Every vector $c_1(1,0)^{\mathsf T}+c_2(0,1)^{\mathsf T}$ solves the shifted equation. The two standard basis vectors are independent eigenvectors.

### PDF page 67

For $A=2I_2$, both rows of $(A-2I_2)v=0$ read $0v_1+0v_2=0$. Both variables are free. Choose $(v_1,v_2)=(1,0)$ for the first eigenvector and $(0,1)$ for the second.

A past midterm gives $Av=2v$ and $Aw=-w$ and asks for $A^{101}(\pi v+ew)$. Linearity gives

$$
A^{101}(\pi v+ew)
=\pi A^{101}v+eA^{101}w=\pi2^{101}v-ew.
$$

#### Lecture 12/2/2016. Dot product

Take $v=(3,0,1)$ and $w=(-1,2,7)$. Their dot product is $3(-1)+0(2)+1(7)=4$. In $\mathbb R^n$ the dot product is $v\cdot w=v^{\mathsf T}w=w^{\mathsf T}v$. The squared norm of $v$ is $v\cdot v=3^2+0^2+1^2=10$. For nonzero vectors, the angle $\theta$ is determined by

$$
v\cdot w=\|v\|\|w\|\cos\theta,
\qquad
\cos\theta=\frac{v\cdot w}{\|v\|\|w\|}.
$$

The final line gives the entrywise identity for a matrix times its inverse, $\sum_k A_{ik}(A^{-1})_{kj}=\delta_{ij}$.

### PDF page 68

#### Lecture 12/5/2016. Orthogonality

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

### PDF page 69

The null space and row space are orthogonal complements in $\mathbb R^n$, and the left null space and column space are orthogonal complements in $\mathbb R^m$,

$$
N(A)=C(A^{\mathsf T})^\perp,\qquad N(A^{\mathsf T})=C(A)^\perp.
$$

#### Lecture 12/7/2016. Domain and codomain decompositions

The diagram for $A\colon\mathbb R^n\to\mathbb R^m$ labels the row space and column space with dimension $r=\operatorname{rank}A$. The kernel has dimension $n-r$ and maps to the origin. The left null space has dimension $m-r$ and is orthogonal to the range.

![[Kyle Kabasares - Linear Analysis I - Four fundamental subspaces.png|**Fig. 4** Orthogonal pairs in the domain and codomain. The arrow from the kernel ends at zero.]]

Suppose a basis of the left null space is $\{(2,1,0),(1,0,0)\}$. To determine whether $(5,8,7)$ is in $C(A)$, take its dot product with each basis vector. The products are $18$ and $5$, so the target is outside the column space. The dot product test works in $\mathbb R^n$. The usual vector cross product used in the course is an operation in $\mathbb R^3$.

### PDF page 70

#### Orthonormal sets

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

### PDF page 71

For a matrix with orthonormal columns,

$$
(Q\mathbf{x})\cdot(Q\mathbf{y})
=(Q\mathbf{x})^{\mathsf T}(Q\mathbf{y})
=\mathbf{x}^{\mathsf T}Q^{\mathsf T}Q\mathbf{y}
=\mathbf{x}^{\mathsf T}\mathbf{y}.
$$

#### Final review. Orthogonal projections

In an orthogonal basis, every vector is perpendicular to every other basis vector. Divide each vector by its length to turn the basis into an orthonormal one. The condition $q_i^{\mathsf T}q_j=0$ for $i\ne j$ expresses orthogonality, and $q_i^{\mathsf T}q_i=1$ expresses normalization. The notes use $Q$ for a matrix with orthonormal columns.

The standard basis of $\mathbb R^2$ is $e_1=(1,0)$, $e_2=(0,1)$. In $\mathbb R^n$, the standard basis consists of the columns of $I_n$. A rotation preserves lengths and right angles, so rotating the standard axes gives another orthonormal basis.

The standard basis vectors may fall outside a given subspace of $\mathbb R^n$. Gram–Schmidt orthogonalization constructs an orthonormal basis of that subspace.

### PDF page 72

#### Orthogonal matrices

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

### PDF page 73

Multiplication by $Q$ with orthonormal columns preserves lengths,

$$
\|Qx\|^2=(Qx)^{\mathsf T}(Qx)=x^{\mathsf T}Q^{\mathsf T}Qx=x^{\mathsf T}x=\|x\|^2.
$$

It also preserves inner products, as on page 71.

#### Coordinates in an orthonormal basis

Write $b=x_1q_1+\cdots+x_nq_n$ in an orthonormal basis of $\mathbb R^n$. Multiplying by $q_i^{\mathsf T}$ eliminates every term with $j\ne i$. Since $q_i^{\mathsf T}q_i=1$, the remaining coefficient is $x_i=q_i^{\mathsf T}b=q_i\cdot b$. Therefore,

$$
b=(q_1^{\mathsf T}b)q_1+(q_2^{\mathsf T}b)q_2+\cdots+(q_n^{\mathsf T}b)q_n.
$$

In matrix form, $Qx=b$ and $x=Q^{\mathsf T}b=Q^{-1}b$. The entries of $Q^{\mathsf T}b$ are the dot products with the basis vectors.

### PDF page 74

Every vector $b$ is the sum of its one-dimensional projections onto the lines through the vectors of an orthonormal basis. For a square matrix, orthonormal columns also imply orthonormal rows.

#### Orthogonality review

The length of $x\in\mathbb R^n$ is $\sqrt{x^{\mathsf T}x}$. The inner product is

$$
x^{\mathsf T}y=\begin{pmatrix}x_1&\cdots&x_n\end{pmatrix}
\begin{pmatrix}y_1\\\vdots\\y_n\end{pmatrix}
=\sum_{i=1}^n x_i y_i=y^{\mathsf T}x.
$$

For nonzero vectors, a positive result gives an angle less than $90^\circ$, a negative result gives an angle greater than $90^\circ$, and zero gives orthogonality. The zero vector is the only vector orthogonal to itself.

Suppose $v_1,\ldots,v_k$ are mutually orthogonal and nonzero. If $\sum_j c_jv_j=0$, multiply by $v_i^{\mathsf T}$. Only $c_i v_i^{\mathsf T}v_i$ remains. Since $v_i^{\mathsf T}v_i>0$, this implies $c_i=0$. The same holds for every coefficient, so the vectors are linearly independent.

Two subspaces $V,W\subseteq\mathbb R^n$ are orthogonal if $v^{\mathsf T}w=0$ for all $v\in V$ and $w\in W$.

### PDF page 75

#### 3C. Fundamental theorem of orthogonality

The row space $C(A^{\mathsf T})$ is orthogonal to $N(A)$ in $\mathbb R^n$, and $C(A)$ is orthogonal to the left null space in $\mathbb R^m$. The orthogonal complement of $V$ is $V^\perp$, the space of all vectors orthogonal to $V$. The dimensions of the row space and null space add to the number of columns. The dimensions of the column space and left null space add to the number of rows.

#### The Gram–Schmidt process

For orthonormal $a,b,c$, the projections of $v$ onto the first direction, the span of the first two, and the span of all three are

$$
(a^{\mathsf T}v)a,\qquad
(a^{\mathsf T}v)a+(b^{\mathsf T}v)b,\qquad
(a^{\mathsf T}v)a+(b^{\mathsf T}v)b+(c^{\mathsf T}v)c.
$$

These formulas use orthonormality. For three independent inputs $a,b,c$, Gram–Schmidt constructs orthonormal vectors $q_1,q_2,q_3$ spanning the same space. In general, the process converts a basis $x_1,\ldots,x_n$ of $V$ to an orthogonal basis $y_1,\ldots,y_n$, then normalizes it.

### PDF page 76

At each step, $y_j$ is the part of $x_j$ perpendicular to the previous directions $y_1,\ldots,y_{j-1}$. For a nonzero $y$, write $P_yx=y(y^{\mathsf T}x)/(y^{\mathsf T}y)$ for projection onto its span. Then

$$
y_1=x_1,\qquad
y_2=x_2-P_{y_1}x_2,\qquad
y_3=x_3-P_{y_1}x_3-P_{y_2}x_3.
$$

![[Kyle Kabasares - Linear Analysis I - Gram–Schmidt geometric steps.png|**Fig. 5** The first vector is retained. The second and third steps keep the components perpendicular to the span already constructed.]]

#### Example in three dimensions

Let $x_1=(1,1,1)^{\mathsf T}$, $x_2=(6,4,5)^{\mathsf T}$, and $x_3=(3,6,9)^{\mathsf T}$. Start with $y_1=x_1$. The projection of $x_2$ onto $y_1$ is

$$
P_{y_1}x_2
=\frac{(1,1,1)\cdot(6,4,5)}{(1,1,1)\cdot(1,1,1)}
\begin{pmatrix}1\\1\\1\end{pmatrix}
=\frac{15}{3}\begin{pmatrix}1\\1\\1\end{pmatrix}
=\begin{pmatrix}5\\5\\5\end{pmatrix}.
$$

### PDF page 77

Subtract the first projection from $x_2$,

$$
y_2=\begin{pmatrix}6\\4\\5\end{pmatrix}-\begin{pmatrix}5\\5\\5\end{pmatrix}
=\begin{pmatrix}1\\-1\\0\end{pmatrix}.
$$

This vector is orthogonal to $y_1$. For $x_3=(3,6,9)^{\mathsf T}$, compute both projections,

$$
\begin{aligned}
P_{y_1}x_3&=\frac{18}{3}\begin{pmatrix}1\\1\\1\end{pmatrix}=\begin{pmatrix}6\\6\\6\end{pmatrix},\\
P_{y_2}x_3&=\frac{-3}{2}\begin{pmatrix}1\\-1\\0\end{pmatrix}=\begin{pmatrix}-3/2\\3/2\\0\end{pmatrix}.
\end{aligned}
$$

Subtract both from $x_3$,

$$
y_3=\begin{pmatrix}3\\6\\9\end{pmatrix}
-\begin{pmatrix}6\\6\\6\end{pmatrix}
-\begin{pmatrix}-3/2\\3/2\\0\end{pmatrix}
=\begin{pmatrix}-3/2\\-3/2\\3\end{pmatrix}.
$$

The first entry follows from $3-6+3/2=-3/2$. The boxed vector is faint here, and the next page copies this entry with a positive sign.

### PDF page 78

Normalize $y_1,y_2,y_3$ from pages 76–77 by dividing each by its length. The first two lengths are $\sqrt3$ and $\sqrt2$. The third is

$$
\|y_3\|=\sqrt{(-3/2)^2+(-3/2)^2+3^2}=\frac{\sqrt{54}}2.
$$

The orthonormal vectors are

$$
z_1=\frac{1}{\sqrt3}\begin{pmatrix}1\\1\\1\end{pmatrix},
\qquad
z_2=\frac{1}{\sqrt2}\begin{pmatrix}1\\-1\\0\end{pmatrix},
\qquad
z_3=\frac{1}{\sqrt6}\begin{pmatrix}-1\\-1\\2\end{pmatrix}.
$$

The source drops signs in the displayed $z_2$ and $y_3$ and writes the length of $y_3$ as a multiplier. The vectors here follow the preceding projections and division by each norm.

#### QR factorization

If $A$ is $m\times n$ with independent columns, it can be written $A=QR$. The columns of the $m\times n$ matrix $Q$ form an orthonormal basis of $C(A)$, and $R$ is $n\times n$, upper triangular, with positive diagonal entries. Because $Q$ preserves lengths, $\|Ax\|=\|QRx\|=\|Rx\|$.

To factor $A$, apply Gram–Schmidt to its columns to construct $Q$, then calculate $R=Q^{\mathsf T}A$.

### PDF page 79

#### QR factorization example

Let

$$
A=\begin{pmatrix}1&4\\0&1\\1&4\end{pmatrix}.
$$

Its columns are $x_1=(1,0,1)^{\mathsf T}$ and $x_2=(4,1,4)^{\mathsf T}$. Set $y_1=x_1$. Subtract the component of $x_2$ parallel to $y_1$,

$$
y_2=x_2-\frac{x_2\cdot y_1}{y_1\cdot y_1}y_1
=\begin{pmatrix}4\\1\\4\end{pmatrix}
-\frac82\begin{pmatrix}1\\0\\1\end{pmatrix}
=\begin{pmatrix}0\\1\\0\end{pmatrix}.
$$

The sketch shows the orthogonal remainder and the removed projection as the two legs of a right triangle. Normalize the two vectors to get

$$
Q=\begin{pmatrix}1/\sqrt2&0\\0&1\\1/\sqrt2&0\end{pmatrix},
\qquad
Q^{\mathsf T}=\begin{pmatrix}1/\sqrt2&0&1/\sqrt2\\0&1&0\end{pmatrix}.
$$

Since $Q^{\mathsf T}A=Q^{\mathsf T}QR=R$,

$$
R=\begin{pmatrix}1/\sqrt2&0&1/\sqrt2\\0&1&0\end{pmatrix}
\begin{pmatrix}1&4\\0&1\\1&4\end{pmatrix}
=\begin{pmatrix}2/\sqrt2&8/\sqrt2\\0&1\end{pmatrix}.
$$

### PDF page 80

The previous example gives $R=\begin{pmatrix}\sqrt2&4\sqrt2\\0&1\end{pmatrix}$, which is upper triangular with positive diagonal entries.

#### Change-of-basis review

Let $B=(u,w)$ and $B'=(u',w')$ be two bases of $\mathbb R^2$. To convert a vector's coordinates between the two bases, write $u'=au+bw$ and $w'=cu+dw$. Then the matrix with columns $[u']_B$ and $[w']_B$ is

$$
P=\begin{pmatrix}a&c\\b&d\end{pmatrix},
\qquad
[v]_B=P[v]_{B'},
\qquad
[v]_{B'}=P^{-1}[v]_B.
$$

If $B$ is the standard basis and $B'=((3,1),(-2,1))$, then $P=\begin{pmatrix}3&-2\\1&1\end{pmatrix}$.

The last example defines an evaluation map $T(p)=(p(0),p(1))^{\mathsf T}$. The polynomial $p(t)=t^2-t$ gives $T(p)=(0,0)^{\mathsf T}$.

### PDF page 81

For $p(t)=at^2+bt+c$ to belong to $\ker T$, both evaluations must vanish. The equation $p(0)=0$ gives $c=0$, and $p(1)=0$ gives $a+b=0$. Hence the kernel is the span of $t^2-t$.

Use the ordered basis $(1,t,t^2)$ for $P_2$ and the standard basis for $\mathbb R^2$. The images are $T(1)=(1,1)^{\mathsf T}$, $T(t)=(0,1)^{\mathsf T}$, and $T(t^2)=(0,1)^{\mathsf T}$. Therefore the matrix of $T$ is

$$
A=\begin{pmatrix}1&0&0\\1&1&1\end{pmatrix}.
$$
