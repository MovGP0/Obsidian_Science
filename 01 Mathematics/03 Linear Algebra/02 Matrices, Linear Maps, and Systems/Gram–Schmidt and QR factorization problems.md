---
title: "Gram–Schmidt and QR factorization problems"
---

> [!TLDR]
> Successive projections produce orthogonal basis vectors and expose the triangular factor in a QR decomposition.

## Worked lecture material

##### 3C. Fundamental theorem of orthogonality

The row space $C(A^{\mathsf T})$ is orthogonal to $N(A)$ in $\mathbb R^n$, and $C(A)$ is orthogonal to the left null space in $\mathbb R^m$. The orthogonal complement of $V$ is $V^\perp$, the space of all vectors orthogonal to $V$. The dimensions of the row space and null space add to the number of columns. The dimensions of the column space and left null space add to the number of rows.

##### The Gram–Schmidt process

For orthonormal $a,b,c$, the projections of $v$ onto the first direction, the span of the first two, and the span of all three are

$$
(a^{\mathsf T}v)a,\qquad
(a^{\mathsf T}v)a+(b^{\mathsf T}v)b,\qquad
(a^{\mathsf T}v)a+(b^{\mathsf T}v)b+(c^{\mathsf T}v)c.
$$

These formulas use orthonormality. For three independent inputs $a,b,c$, Gram–Schmidt constructs orthonormal vectors $q_1,q_2,q_3$ spanning the same space. In general, the process converts a basis $x_1,\ldots,x_n$ of $V$ to an orthogonal basis $y_1,\ldots,y_n$, then normalizes it.

At each step, $y_j$ is the part of $x_j$ perpendicular to the previous directions $y_1,\ldots,y_{j-1}$. For a nonzero $y$, write $P_yx=y(y^{\mathsf T}x)/(y^{\mathsf T}y)$ for projection onto its span. Then

$$
y_1=x_1,\qquad
y_2=x_2-P_{y_1}x_2,\qquad
y_3=x_3-P_{y_1}x_3-P_{y_2}x_3.
$$

![[Kyle Kabasares - Linear Analysis I - Gram–Schmidt geometric steps.png|**Fig. 5** The first vector is retained. The second and third steps keep the components perpendicular to the span already constructed.]]

##### Example in three dimensions

Let $x_1=(1,1,1)^{\mathsf T}$, $x_2=(6,4,5)^{\mathsf T}$, and $x_3=(3,6,9)^{\mathsf T}$. Start with $y_1=x_1$. The projection of $x_2$ onto $y_1$ is

$$
P_{y_1}x_2
=\frac{(1,1,1)\cdot(6,4,5)}{(1,1,1)\cdot(1,1,1)}
\begin{pmatrix}1\\1\\1\end{pmatrix}
=\frac{15}{3}\begin{pmatrix}1\\1\\1\end{pmatrix}
=\begin{pmatrix}5\\5\\5\end{pmatrix}.
$$

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

Normalize $y_1,y_2,y_3$ from [[#Example in three dimensions|the section on Example in three dimensions]] by dividing each by its length. The first two lengths are $\sqrt3$ and $\sqrt2$. The third is

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

##### QR factorization

If $A$ is $m\times n$ with independent columns, it can be written $A=QR$. The columns of the $m\times n$ matrix $Q$ form an orthonormal basis of $C(A)$, and $R$ is $n\times n$, upper triangular, with positive diagonal entries. Because $Q$ preserves lengths, $\|Ax\|=\|QRx\|=\|Rx\|$.

To factor $A$, apply Gram–Schmidt to its columns to construct $Q$, then calculate $R=Q^{\mathsf T}A$.

##### QR factorization example

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

The previous example gives $R=\begin{pmatrix}\sqrt2&4\sqrt2\\0&1\end{pmatrix}$, which is upper triangular with positive diagonal entries.

##### Change-of-basis review

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

For $p(t)=at^2+bt+c$ to belong to $\ker T$, both evaluations must vanish. The equation $p(0)=0$ gives $c=0$, and $p(1)=0$ gives $a+b=0$. Hence the kernel is the span of $t^2-t$.

Use the ordered basis $(1,t,t^2)$ for $P_2$ and the standard basis for $\mathbb R^2$. The images are $T(1)=(1,1)^{\mathsf T}$, $T(t)=(0,1)^{\mathsf T}$, and $T(t^2)=(0,1)^{\mathsf T}$. Therefore the matrix of $T$ is

$$
A=\begin{pmatrix}1&0&0\\1&1&1\end{pmatrix}.
$$

## Source

Kyle Kabasares, *Linear Analysis I - Linear Algebra (Math 141, UC Merced 2016)*.
