---
title: "LU factorization and matrix practice"
---

> [!TLDR]
> Store elimination multipliers in a triangular factor and apply changes of basis and determinant rules to worked problems.

## Worked lecture material

For $T\colon\mathbb R^n\to\mathbb R^m$, the kernel is

$$
\ker T=\{v\in\mathbb R^n:T(v)=0\}.
$$

A linear map with trivial kernel $\{0\}$ is injective. Different inputs then have different outputs. A map that is both injective and surjective is bijective.

For a bijective linear map between the stated spaces, $n=m$. Surjectivity requires $n\ge m$ so there are enough independent input directions to span the codomain. Injectivity requires $m\ge n$ so all $n$ independent directions can have independent images.

For example, $T\colon\mathbb R^3\to\mathbb R^2$ with $T(x,y,z)=(x,z)$ has kernel $\operatorname{span}\{(0,1,0)\}$. The exercise asks for its range and whether it is injective or surjective. Every pair $(x,z)$ has a preimage, and varying $y$ preserves that image, so the map is surjective and fails injectivity.

##### LU decomposition

For a square matrix $A$, find a lower triangular $L$ and an upper triangular $U$ such that $A=LU$. The notes describe the elimination method in which $A$ reaches echelon form $U$ without row exchanges.

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

The last row operation on [[#LU decomposition|the section on LU decomposition]] gives $U=\begin{pmatrix}1&2&0\\0&-10&1\\0&0&-11\end{pmatrix}$. Applying the three operations separately to $I_3$ gives

$$
E_1=\begin{pmatrix}1&0&0\\-3&1&0\\0&0&1\end{pmatrix},\qquad
E_2=\begin{pmatrix}1&0&0\\0&1&0\\2&0&1\end{pmatrix},\qquad
E_3=\begin{pmatrix}1&0&0\\0&1&0\\0&4&5\end{pmatrix}.
$$

The middle row of $E_3$ is unchanged by the stated row operation. The handwritten matrix shows that row as $(0,0,1)$. Since $E_3E_2E_1A=U$, multiply by the inverses in reverse order to obtain $A=E_1^{-1}E_2^{-1}E_3^{-1}U$, where $L=E_1^{-1}E_2^{-1}E_3^{-1}$.

##### Shortcut for LU factorization

When elimination uses only replacements $R_i\gets R_i-m_{ij}R_j$ with $i>j$, build $L$ by putting the multipliers $m_{ij}$ below the diagonal and ones on the diagonal. These entries are the negatives of the coefficients added during elimination.

The next example asks for the factorization of

$$
A=\begin{pmatrix}1&4&-3\\-2&8&5\\3&4&7\end{pmatrix}.
$$

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

The page confirms $A=LU$ and then returns to linear transformations.

##### Currency conversion as an example of linearity

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

##### Change of basis

The notes cite 3Blue1Brown's linear algebra series. In the standard plane coordinates, the first basis vector points right and the second points up. The sketch adds two different basis vectors $b_1,b_2$ in red and asks how a friend using that coordinate system would describe the same vector.

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

##### Changing the matrix of a transformation

Start with a vector expressed in another person's coordinate system. The notes introduce the question of how to express a transformation in that system.

##### Determinants

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

The product rule implies $\det(A^{-1})=1/\det A$ for invertible $A$. Transposing preserves the determinant, $\det(A^{\mathsf T})=\det A$. For an $n\times n$ matrix and $k\in\mathbb R$, $\det(kA)=k^n\det A$.

##### Section 4.2 exercises

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

**7(c).** The transpose of the matrix in 7(b) is

$$
U^{\mathsf T}=\begin{pmatrix}4&0&0&0\\4&1&0&0\\8&2&2&0\\8&2&6&2\end{pmatrix}.
$$

Its determinant is $16$. **7(d).** The inverse has determinant $1/16$.

##### Formulas for determinants

For invertible $A$, factor $PA=LDU$, with $P$ recording row exchanges, $L$ and $U$ unit triangular, and $D$ holding the pivots. Then $\det P=\pm1$, and

$$
\det A=\det P\det L\det D\det U
=\det P\prod_i D_{ii}.
$$

The sign is positive for an even number of exchanges and negative for an odd number.

Expansion along any row $i$ gives $\det A=\sum_j a_{ij}C_{ij}$. Here $C_{ij}=(-1)^{i+j}\det M_{ij}$, using $M_{ij}$ for the submatrix with row $i$ and column $j$ deleted. On [[Linear maps, inverses, and determinants#Determinants by elimination|the section on Determinants by elimination]] the same symbol denotes the determinant of that submatrix.

##### Applications of determinants

For the cofactor matrix $C$, the inverse is $A^{-1}=C^{\mathsf T}/\det A$, with $(A^{-1})_{ij}=C_{ji}/\det A$. The solution to $A\mathbf{x}=\mathbf b$ is $\mathbf{x}=C^{\mathsf T}\mathbf b/\det A$.

For $x_1+3x_2=0$ and $2x_1+4x_2=6$, Cramer's rule gives

$$
x_1=\frac{\begin{vmatrix}0&3\\6&4\end{vmatrix}}{\begin{vmatrix}1&3\\2&4\end{vmatrix}}
=\frac{-18}{-2}=9,\qquad
x_2=\frac{\begin{vmatrix}1&0\\2&6\end{vmatrix}}{\begin{vmatrix}1&3\\2&4\end{vmatrix}}
=\frac{6}{-2}=-3.
$$

##### Eigenvalues and eigenvectors

Rewrite $A\mathbf{x}=\lambda\mathbf{x}$ as $(A-\lambda I)\mathbf{x}=0$. Choose $\lambda$ so that $A-\lambda I$ is singular. Then its null space contains a nonzero vector $\mathbf{x}$. The first numbered item on the page says “nullspace of $A$,” and the following equation and discussion use the shifted matrix $A-\lambda I$.

Let $A=\begin{pmatrix}4&-5\\2&-3\end{pmatrix}$. The characteristic polynomial is

$$
\det(A-\lambda I)=(4-\lambda)(-3-\lambda)+10
=\lambda^2-\lambda-2=(\lambda+1)(\lambda-2).
$$

For $\lambda_1=-1$, the matrix is $A+I=\begin{pmatrix}5&-5\\2&-2\end{pmatrix}$. Its null vectors satisfy $x=y$, so choose $\mathbf{x}_1=(1,1)^{\mathsf T}$. The notebook writes $(3,-3)$ in the second row, which gives the same null space.

For $\lambda_2=2$, the matrix is $A-2I=\begin{pmatrix}2&-5\\2&-5\end{pmatrix}$. Its null vectors satisfy $2x=5y$, so choose $\mathbf{x}_2=(5,2)^{\mathsf T}$.

A zero eigenvalue signals that $A$ is singular. All eigenvalues of an invertible matrix are nonzero. Counting multiplicities, their sum is the trace and their product is the determinant,

$$
\operatorname{tr}A=\lambda_1+\cdots+\lambda_n=a_{11}+\cdots+a_{nn},
\qquad
\det A=\lambda_1\cdots\lambda_n.
$$

##### Diagonalization of a matrix

If $A$ has $n$ linearly independent eigenvectors, place them as columns of $S$. Then

$$
S^{-1}AS=\Lambda=\operatorname{diag}(\lambda_1,\ldots,\lambda_n).
$$

The notebook calls $S$ the eigenvector matrix and $\Lambda$ the eigenvalue matrix.

1. If an $n\times n$ matrix has $n$ distinct eigenvalues in the field under consideration, the corresponding eigenvectors are independent. The matrix is diagonalizable over that field.
2. The choice of $S$ is not unique. For example, a nonzero scalar multiple of an eigenvector is an eigenvector for the same eigenvalue.
3. A matrix without $n$ independent eigenvectors cannot be diagonalized.

Diagonalizability requires $n$ independent eigenvectors, and invertibility requires every eigenvalue to be nonzero. These are independent conditions. Over a field where the characteristic polynomial splits, diagonalization can fail only when there are repeated eigenvalues. Eigenvectors $x_1,\ldots,x_k$ for distinct eigenvalues $\lambda_1,\ldots,\lambda_k$ are linearly independent. The notebook says “eigenvalues” in the conclusion of this theorem. A crossed-out proof start assumes $k=2$ and $c_1x_1+c_2x_2=0$.

##### Products and powers

If $Ax=\lambda x$, then $A^2x=A(\lambda x)=\lambda Ax=\lambda^2x$. The eigenvalues of $A^2$ are the squares of the eigenvalues of $A$, with multiplicities counted. For diagonalizable $A$, multiplying copies of $S^{-1}AS$ gives $\Lambda^k=S^{-1}A^kS$.

If $Ax=\lambda x$ and $Bx=\mu x$ for the same nonzero $x$, then $ABx=\mu\lambda x$. Two diagonalizable matrices over the same field have a common eigenvector basis if and only if $AB=BA$.

## Source

Kyle Kabasares, *Linear Analysis I - Linear Algebra (Math 141, UC Merced 2016)*.
