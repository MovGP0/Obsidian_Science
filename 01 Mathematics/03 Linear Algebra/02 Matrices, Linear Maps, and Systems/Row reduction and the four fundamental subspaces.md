---
title: "Row reduction and the four fundamental subspaces"
---

> [!TLDR]
> Use pivots to solve linear systems and identify the column, row, and null spaces of a matrix.

## Worked lecture material

##### Cramer's rule and triangular factorization

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

The date on this page appears to end in 2015. The sketches show four possibilities for two lines in the plane. Distinct parallel lines have no intersection. Intersecting lines have one point in common, including the special case of perpendicular lines. Coincident lines share every point.

##### Sample quiz

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

##### Vectors and linear combinations

Review vectors, scalar multiplication, and addition algebraically and geometrically. The notes show a column vector such as $\begin{pmatrix}3\\1\end{pmatrix}$ or $\begin{pmatrix}x_1\\x_2\end{pmatrix}$ as an arrow in the plane.

In the magic carpet and hoverboard problem, the trip combines two directions,

$$
a\begin{pmatrix}3\\1\end{pmatrix}+b\begin{pmatrix}1\\2\end{pmatrix}
=\begin{pmatrix}107\\64\end{pmatrix}.
$$

This vector equation is the same as $\begin{pmatrix}3&1\\1&2\end{pmatrix}\begin{pmatrix}a\\b\end{pmatrix}=\begin{pmatrix}107\\64\end{pmatrix}$, or $3a+b=107$ and $a+2b=64$. The solution is $a=30$, $b=17$. In the east–north sketch, the first leg is $30(3,1)=(90,30)$, and the second leg is $17(1,2)=(17,34)$. In the graph of the equations in the $(a,b)$ plane, the two lines meet at $(30,17)$. The first line is $b=-3a+107$.

The notes cite section 1.2 of Strang. The length of $(3,1)$ is $\sqrt{3^2+1^2}=\sqrt{10}$, and the length of $30(3,1)$ is $30\sqrt{10}$. The result $(107,64)$ is a linear combination of $(3,1)$ and $(1,2)$.

##### Independence and span

The lecture replaces the target with an arbitrary vector $(c,d)$. Alex's conjecture is that two vectors are independent if neither is a scalar multiple of the other. To test dependence, solve

$$
a\begin{pmatrix}3\\1\end{pmatrix}+b\begin{pmatrix}1\\2\end{pmatrix}=\begin{pmatrix}0\\0\end{pmatrix}.
$$

The pair is dependent if there is a solution with at least one nonzero coefficient. For the carpet problem the two vectors are independent. The lecture conjectures that the linear combinations of two independent vectors in $\mathbb R^2$ cover the entire plane, leaving nowhere for Gauss to hide.

##### Reduced row echelon form

1. All zero rows are at the bottom.
2. The leftmost nonzero entry of each nonzero row is one. This is a leading one, or pivot. There are as many pivots as pivot columns.
3. Each pivot is farther to the right than the pivot in the row above it.
4. A pivot is the only nonzero entry in its column.

##### Span and dependence

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

Expand a linear combination of $v+w$ and $v-w$,

$$
c_1(v+w)+c_2(v-w)=(c_1+c_2)v+(c_1-c_2)w.
$$

For the target $v$, set $c_1+c_2=1$ and $c_1-c_2=0$, so $c_1=c_2=1/2$. For the target $w$, set $c_1+c_2=0$ and $c_1-c_2=1$, so $c_1=1/2$ and $c_2=-1/2$.

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

##### Linear independence and implications

The vectors $v_1,\ldots,v_p$ are linearly independent when $c_1v_1+\cdots+c_pv_p=0$ implies $c_1=\cdots=c_p=0$. For example, the vectors $(1,1,1)$, $(6,3,8)$, and $(4,4,4)$ are dependent because $-4v_1+0v_2+v_3=0$.

The notes label an implication “if $P$, then $Q$.” In the two-vector example, $P$ says that neither vector is a scalar multiple of the other, and $Q$ says that the pair is linearly independent.

The portfolio vectors on [[#Reduced row echelon form|the section on Reduced row echelon form]] are dependent because

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

##### Contraposition

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

**Homework 2**

**4.** If $w_1,w_2,w_3$ are linearly independent, prove that $v_1=w_2+w_3$, $v_2=w_1+w_3$, and $v_3=w_1+w_2$ are linearly independent. Suppose $c_1v_1+c_2v_2+c_3v_3=0$. Expanding yields

$$
(c_2+c_3)w_1+(c_1+c_3)w_2+(c_1+c_2)w_3=0.
$$

Independence of the $w_i$ implies $c_2+c_3=0$, $c_1+c_3=0$, and $c_1+c_2=0$. Subtract the second equation from the first to get $c_2=c_1$. The third then gives $2c_2=0$, so $c_1=c_2=0$. The remaining coefficient is $c_3=0$.

**5.** If $\{x,y\}$ is linearly independent and $\{x,y,z\}$ is linearly dependent, then $z\in\operatorname{span}\{x,y\}$. By dependence choose coefficients, not all zero, with $c_1x+c_2y+c_3z=0$. If $c_3=0$, the independence of $x,y$ forces $c_1=c_2=0$, a contradiction. Therefore $c_3\ne0$, and

$$
z=-\frac{c_1}{c_3}x-\frac{c_2}{c_3}y.
$$

##### Homogeneous systems

The system $A\mathbf{x}=0$ always has the zero solution. Does it have any other solutions when $A=\begin{pmatrix}3&4&1\\1&1&1\\2&3&2\end{pmatrix}$? The notes mark the three columns as vectors.

##### Column space and null space

The column space $C(A)$ is the span of the columns of $A$. For the matrix on the section on Homework 2,

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

The review returns to the same matrix. Since there are three pivots, $A\mathbf{x}=0$ has a unique solution.

##### Forward elimination and back substitution

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

##### Rectangular matrix

The matrix $B$ is $3\times4$, so the unknown in $B\mathbf{x}=0$ has four components $(x,y,z,w)$. Subtract the first row from the second and third, then clear the third row with the second,

$$
B=\begin{pmatrix}1&2&6&4\\1&2&3&1\\1&2&8&6\end{pmatrix}
\longrightarrow
\begin{pmatrix}1&2&6&4\\0&0&-3&-3\\0&0&2&2\end{pmatrix}
\longrightarrow
\begin{pmatrix}1&2&6&4\\0&0&-3&-3\\0&0&0&0\end{pmatrix}.
$$

The circled pivots are $1$ and $-3$. A pivot is nonzero by definition.

##### Pivot and free variables

Use each pivot to make the entries below it zero. For the rectangular system on [[#Forward elimination and back substitution|the section on Forward elimination and back substitution]], the resulting equations are

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

To compute the special solutions of $U\mathbf{x}=0$, set one free variable to one and the other to zero. The choice $(y,w)=(1,0)$ gives $(-2,1,0,0)$, and $(0,1)$ gives $(2,0,-1,1)$.

##### The four fundamental subspaces

For an $m\times n$ matrix $A$ of rank $r$, the diagram groups the row space $C(A^{\mathsf T})$ with $N(A)$ and the column space $C(A)$ with $N(A^{\mathsf T})$. The rank counts the number of independent columns in a maximal independent set. The column space has dimension $r$, and the null space has dimension $n-r$.

**(a)** Find a square matrix whose null space contains only zero. For $A=I_2$, the equation $A(x,y)^{\mathsf T}=0$ gives $x=y=0$. Another example is $\begin{pmatrix}1&0\\1&1\end{pmatrix}$. Its homogeneous equations are $x=0$ and $x+y=0$, so $y=0$ also.

**(b)** The notebook asks for a rectangular matrix with trivial null space, then tests the wide matrix

$$
A=\begin{pmatrix}1&0&0&0\\0&0&1&0\end{pmatrix},
\qquad
A\begin{pmatrix}w\\x\\y\\z\end{pmatrix}=\begin{pmatrix}w\\y\end{pmatrix}.
$$

This matrix has rank two and four columns. The equation gives $w=y=0$, with $x,z$ free. It therefore has nullity two. Its transpose provides a rectangular example with trivial null space.

For the wide matrix on [[#The four fundamental subspaces|the section on The four fundamental subspaces]], each null vector splits into its second and fourth coordinate parts,

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

##### Pivoting

The lecture repeats the reduction of $B$ on [[#Forward elimination and back substitution|the section on Forward elimination and back substitution]]. If the first entry of the first row were zero, so that the matrix were $\begin{pmatrix}0&2&6&4\\1&2&3&1\\1&2&8&6\end{pmatrix}$, exchange rows to bring a nonzero entry into the first pivot position.

Miller asks what happens to $A\mathbf{x}=\mathbf b$ when two rows are exchanged. Exchanging rows of both $A$ and $\mathbf b$ preserves the solutions. The column space of $A$ may change. In particular, forward elimination produces an upper echelon matrix $U$ with the same homogeneous solutions as $A$, so $N(U)=N(A)$.

The rectangular example gives $x=-2y+2w$ and $z=-w$, with $y,w$ free. To construct the first special solution, set $y=1$ and $w=0$ in $x+2y+6z+4w=0$ and $-3z-3w=0$. This gives $x=-2$, $z=0$. To get the second solution, set $y=0$ and $w=1$. Therefore,

$$
N(B)=\operatorname{span}\left\{
\begin{pmatrix}-2\\1\\0\\0\end{pmatrix},
\begin{pmatrix}2\\0\\-1\\1\end{pmatrix}
\right\}.
$$

The rank is the number of pivots. There is one special solution for each free variable. The repeated handwritten equations contain inconsistent signs and entries. The vectors here follow the calculation on [[#Forward elimination and back substitution|the section on Forward elimination and back substitution]].

##### Complete solution to a nonhomogeneous system

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

## Source

Kyle Kabasares, *Linear Analysis I - Linear Algebra (Math 141, UC Merced 2016)*.
