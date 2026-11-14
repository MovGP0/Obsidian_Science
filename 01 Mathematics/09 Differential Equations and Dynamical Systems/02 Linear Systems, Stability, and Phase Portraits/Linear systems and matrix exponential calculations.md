---
title: "Linear systems and matrix exponential calculations"
---

> [!TLDR]
> Represent a coupled differential equation as a matrix system and compute its evolution using eigenvectors or variation of constants.

## Worked lecture material

**Example 2.** The system $x'=2x^2-3y+t$, $y'=x+2y+\cos y$ is nonlinear in the unknowns. Linearity requires that the unknowns enter to the first power in linear combinations. The coefficient and forcing functions can depend nonlinearly on the independent variable $t$.

##### Matrix form of a linear system

Write $\mathbf x=(x_1,\ldots,x_n)^{\mathsf T}$, $A(t)=(a_{ij}(t))_{i,j=1}^n$, and $\mathbf F=(f_1,\ldots,f_n)^{\mathsf T}$. Solving the $n$ component equations is equivalent to solving

$$
\mathbf x'=A(t)\mathbf x+\mathbf F(t). \tag{III}
$$

The lecture returns to Example 1 with $A=\begin{pmatrix}2&-3\\1&2\end{pmatrix}$, $\mathbf x=(x,y)^{\mathsf T}$, and $\mathbf F=(t,e^t)^{\mathsf T}$.

**Example 3.** The third-order equation $y'''+2y''+3y'+4y=0$ has auxiliary polynomial $\lambda^3+2\lambda^2+3\lambda+4$. It can also be written as a first-order system. Set $x_1=y$, $x_2=y'$, and $x_3=y''$. In general the last state is $x_n=y^{(n-1)}$. Here the derivatives are

$$
\mathbf x'=\begin{pmatrix}x_2\\x_3\\-2x_3-3x_2-4x_1\end{pmatrix}.
$$

For the system on [[#Matrix form of a linear system|the section on Matrix form of a linear system]],

$$
\mathbf x'=\begin{pmatrix}0&1&0\\0&0&1\\-4&-3&-2\end{pmatrix}\mathbf x.
$$

Solving the scalar equation of order $n$ is equivalent to solving a first-order system with $n$ state components and an initial vector $\mathbf x(t_0)=\mathbf x_0$. If $A(t)$ and $\mathbf F(t)$ are continuous on the interval, the IVP $\mathbf x'=A(t)\mathbf x+\mathbf F(t)$ has a unique vector solution there. The notes use $I=[t_0,T]$.

##### Superposition and fundamental sets

An equation such as $y^{(10)}+2y-t=0$ can be converted to a system $\mathbf x'=A\mathbf x+\mathbf F(t)$. When $\mathbf F(t)=0$, the system is homogeneous.

For a homogeneous system of $n$ equations, a fundamental set on $I$ consists of $n$ linearly independent solution vectors $\mathbf X_1,\ldots,\mathbf X_n$. The notebook writes the components of column $j$ as $x_{1j}(t),\ldots,x_{nj}(t)$. The general solution is

$$
\mathbf x=c_1\mathbf X_1+c_2\mathbf X_2+\cdots+c_n\mathbf X_n.
$$

##### Wronskian of solution vectors

For $n$ solutions of an $n$-component homogeneous linear system, assemble their vectors as the columns of a square matrix. The Wronskian is $W(\mathbf X_1,\ldots,\mathbf X_n)=\det[\mathbf X_1\ \cdots\ \mathbf X_n]$. Its entries are the components themselves, so this determinant requires no differentiation. A nonzero determinant at one point gives linear independence. For solutions of the same continuous linear system, independence also implies that this determinant is nonzero at every point.

##### Section 8.1, exercise 14

Verify that

$$
A=\begin{pmatrix}2&1\\-1&0\end{pmatrix},\qquad
\mathbf x=\begin{pmatrix}1\\3\end{pmatrix}e^t+\begin{pmatrix}4\\-4\end{pmatrix}te^t
$$

give $\mathbf x'=A\mathbf x$. Differentiation yields

$$
\mathbf x'
=\begin{pmatrix}1\\3\end{pmatrix}e^t+\begin{pmatrix}4\\-4\end{pmatrix}(1+t)e^t
=\begin{pmatrix}5+4t\\-1-4t\end{pmatrix}e^t.
$$

Multiplying each constant vector by $A$ gives $(5,-1)^{\mathsf T}$ and $(4,-4)^{\mathsf T}$, respectively. Therefore $A\mathbf x$ equals the displayed derivative.

**25.** Prove that the general solution of $\mathbf x'=A\mathbf x$ on $\mathbb R$ for $A=\begin{pmatrix}0&6&0\\1&0&1\\1&1&0\end{pmatrix}$ is

$$
\mathbf x=c_1\begin{pmatrix}6\\-1\\-5\end{pmatrix}e^{-t}
+c_2\begin{pmatrix}-3\\1\\1\end{pmatrix}e^{-2t}
+c_3\begin{pmatrix}2\\1\\1\end{pmatrix}e^{3t}.
$$

Use the Wronskian to show independence of the three solution vectors. The notebook leaves the calculation as practice.

##### Matrix exponential

For $y'=ay$ with $y(t_0)=y_0$, the solution is $y_0e^{a(t-t_0)}$. The displayed $y_0e^{at}$ takes $t_0=0$. The lecture asks whether $\mathbf x=e^{At}\mathbf x_0$ similarly solves $\mathbf x'=A\mathbf x$ at $t_0=0$.

Extend the scalar power series to an $n\times n$ matrix $A$ by taking $A^0=I_n$,

$$
e^A=\sum_{k=0}^\infty\frac{A^k}{k!},\qquad
e^{At}=I_n+At+\frac{A^2t^2}{2!}+\frac{A^3t^3}{3!}+\cdots
=\sum_{k=0}^\infty\frac{t^kA^k}{k!}.
$$

To verify that the columns of $X(t)=e^{At}$ solve the homogeneous system, differentiate the series.

Termwise differentiation gives

$$
\frac{d}{dt}e^{At}=\sum_{k=1}^\infty\frac{A^k t^{k-1}}{(k-1)!}=Ae^{At}.
$$

##### Eigenvalues and eigenvectors

Think of a matrix as a transformation from a vector $\mathbf r$ to an output $\mathbf R$. A nonzero $\mathbf r$ is an eigenvector if $\mathbf R=\lambda\mathbf r$ for some scalar $\lambda$.

For $A=\begin{pmatrix}5&-2\\-2&2\end{pmatrix}$, the component equations for $A(x,y)^{\mathsf T}=\lambda(x,y)^{\mathsf T}$ are $(5-\lambda)x-2y=0$ and $-2x+(2-\lambda)y=0$. A nonzero solution requires the secular determinant to vanish,

$$
\begin{vmatrix}5-\lambda&-2\\-2&2-\lambda\end{vmatrix}
=(5-\lambda)(2-\lambda)-4
=\lambda^2-7\lambda+6=(\lambda-1)(\lambda-6)=0.
$$

For $\lambda=1$, substitution gives $4x-2y=0$, so $y=2x$. For $\lambda=6$, it gives $-x-2y=0$, so $y=-x/2$.

##### Forced second-order linear equations

The constant-coefficient equation is

$$
a_2\frac{d^2y}{dx^2}+a_1\frac{dy}{dx}+a_0y=f(x). \tag{6.1}
$$

Dividing by $a_2$ gives $y''+(a_1/a_2)y'+(a_0/a_2)y=F(x)$, with $F=f/a_2$. The right-hand side is the forcing function, such as an applied force in mechanics or an electromotive force in a circuit.

##### Superposition example

Consider

$$
(D^2+5D+4)y=\cos 2x.
$$

The characteristic polynomial of the homogeneous equation factors as $(r+1)(r+4)$. The complementary solution is $y_c=Ae^{-x}+Be^{-4x}$. A particular solution is $y_p=\frac{1}{10}\sin 2x$, since

$$
(D^2+5D+4)y_p
=-\frac{4}{10}\sin 2x+\cos 2x+\frac{4}{10}\sin 2x
=\cos 2x.
$$

As $(D^2+5D+4)y_c=0$, the general solution is

$$
y=Ae^{-x}+Be^{-4x}+\frac{1}{10}\sin 2x.
$$

In general, for $a_2\ne0$, write a second-order linear equation in the normalized form

$$
y''+\frac{a_1}{a_2}y'+\frac{a_0}{a_2}y=F(x).
$$

The general solution is $y=y_c+y_p$, where $y_c$ solves the associated homogeneous equation and $y_p$ is any particular solution of the nonhomogeneous equation.

##### Matrix exponential review

The matrix exponential is defined by

$$
e^A=I+A+\frac{A^2}{2!}+\frac{A^3}{3!}+\cdots.
$$

The scalar equation $x'=ax$ has solutions $x(t)=e^{at}c$. Analogously, $X'=AX$ with $X(0)=I$ has the matrix solution $X(t)=e^{At}$.

1. $e^{A0}=I$.
2. $\frac{d}{dt}e^{At}=Ae^{At}$.
3. The initial-value problem $\mathbf{x}'=A\mathbf{x}$, $\mathbf{x}(t_0)=\mathbf{x}_0$ has solution $\mathbf{x}(t)=e^{(t-t_0)A}\mathbf{x}_0$.

The order of multiplication matters. The column vector belongs on the right, and even for square matrices of the same size, $AB$ need not equal $BA$.

The first example is the system $x'=x$, $y'=2y$.

##### Exponential of a diagonal matrix

For $x'=x$, $y'=2y$, take

$$
\mathbf{x}'=A\mathbf{x},\qquad
A=\begin{bmatrix}1&0\\0&2\end{bmatrix},\qquad
\mathbf{x}(0)=\begin{bmatrix}x(0)\\y(0)\end{bmatrix}=\begin{bmatrix}1\\2\end{bmatrix}.
$$

The matrix powers stay diagonal. For instance, $A^2t^2=\operatorname{diag}(t^2,4t^2)$, and the exponential series becomes

$$
e^{At}
=I+At+\frac{A^2t^2}{2!}+\cdots
=\begin{bmatrix}
1+t+\frac{t^2}{2!}+\cdots&0\\
0&1+2t+\frac{(2t)^2}{2!}+\cdots
\end{bmatrix}
=\begin{bmatrix}e^t&0\\0&e^{2t}\end{bmatrix}.
$$

Thus $\mathbf{x}(t)=e^{At}\mathbf{x}(0)$ gives $x(t)=e^t$ and $y(t)=2e^{2t}$. The initial-value list uses $y(0)$ twice. The column vector and solution identify the first entry as $x(0)=1$.

4. If $A=\operatorname{diag}(a_1,a_2,\ldots,a_n)$, then $e^{At}=\operatorname{diag}(e^{a_1t},e^{a_2t},\ldots,e^{a_nt})$. For example, $\operatorname{diag}(-3,5)$ gives $\operatorname{diag}(e^{-3t},e^{5t})$.

##### A nondiagonal coefficient matrix

For $x'=4x-2y$, $y'=x+y$, the coefficient matrix is

$$
A=\begin{bmatrix}4&-2\\1&1\end{bmatrix}.
$$

To compute $e^{At}$ using the preceding property, seek a change of basis that makes $A$ diagonal.

##### Similarity and diagonalization

A square matrix $A$ is **diagonalizable** if it is similar to a diagonal matrix. Two square matrices $A$ and $B$ are **similar** if there is an invertible matrix $T$ such that $B=T^{-1}AT$. Multiplying on the left by $T$ gives $TB=AT$. Multiplying on the right by $T^{-1}$ then gives $A=TBT^{-1}$, so similarity is symmetric.

Similar matrices have the same characteristic polynomial and therefore the same eigenvalues. With the convention $p_A(\lambda)=\det(A-\lambda I)$, the determinant example is

$$
p_A(\lambda)=
\begin{vmatrix}1-\lambda&2\\3&4-\lambda\end{vmatrix}
=(1-\lambda)(4-\lambda)-6.
$$

The final sign is read as subtraction, as required by the determinant. For similar $A$ and $B$, $\det(A-\lambda I)=\det(B-\lambda I)$ and $p_A=p_B$.

If $B=T^{-1}AT$ is diagonal, its diagonal entries are the eigenvalues of $A$. The problem is to find $T$ so that

$$
T^{-1}AT=D=\operatorname{diag}(\lambda_1,\ldots,\lambda_n).
$$

Equivalently, $AT=TD$.

##### Finding the change of basis

Write $T=[\mathbf{v}_1\ \mathbf{v}_2\ \cdots\ \mathbf{v}_n]$, where each $\mathbf{v}_i$ is a column. The equation $AT=TD$ reads

$$
[A\mathbf{v}_1\ A\mathbf{v}_2\ \cdots\ A\mathbf{v}_n]
=[\lambda_1\mathbf{v}_1\ \lambda_2\mathbf{v}_2\ \cdots\ \lambda_n\mathbf{v}_n].
$$

Thus $A\mathbf{v}_i=\lambda_i\mathbf{v}_i$ for each $i$. The columns are eigenvectors, and $T$ is invertible exactly when these columns are linearly independent.

1. Find the eigenvalues of $A$.
2. Find $n$ linearly independent eigenvectors $\mathbf{v}_1,\ldots,\mathbf{v}_n$, if they exist.
3. Use the eigenvectors as the columns of $T$. The diagonal entries of $D=T^{-1}AT$ are the corresponding eigenvalues in the same order.

Since $A=TDT^{-1}$, the matrix exponential is

$$
e^{At}=Te^{Dt}T^{-1}
=T\operatorname{diag}(e^{\lambda_1t},\ldots,e^{\lambda_nt})T^{-1}.
$$

##### Solving a system by diagonalization

Consider

$$
\mathbf{x}'=A\mathbf{x},\qquad
A=\begin{bmatrix}4&-2\\1&1\end{bmatrix},\qquad
\mathbf{x}(0)=\begin{bmatrix}1\\2\end{bmatrix}.
$$

The opening matrix on this page appears to have $-1$ in the lower-right entry. The previous page, the characteristic determinant, and the resulting eigenpairs all use $+1$.

First solve

$$
\begin{vmatrix}4-\lambda&-2\\1&1-\lambda\end{vmatrix}
=(4-\lambda)(1-\lambda)+2
=\lambda^2-5\lambda+6=0.
$$

The eigenvalues are $\lambda_1=2$ and $\lambda_2=3$. Their eigenvectors are $\mathbf{v}_1=(1,1)^{\mathsf T}$ and $\mathbf{v}_2=(2,1)^{\mathsf T}$, respectively. Verify both eigenvector equations. Then

$$
T=\begin{bmatrix}1&2\\1&1\end{bmatrix},\qquad
D=\begin{bmatrix}2&0\\0&3\end{bmatrix},\qquad
e^{At}
=\begin{bmatrix}1&2\\1&1\end{bmatrix}
\begin{bmatrix}e^{2t}&0\\0&e^{3t}\end{bmatrix}
\begin{bmatrix}-1&2\\1&-1\end{bmatrix}.
$$

Multiplying by the initial vector gives

$$
\mathbf{x}(t)=
\begin{bmatrix}3e^{2t}-2e^{3t}\\3e^{2t}-e^{3t}\end{bmatrix}.
$$

If the eigenvalues are ordered as $\lambda_1=3$, $\lambda_2=2$, then $D=\operatorname{diag}(3,2)$ and $T=\begin{bmatrix}2&1\\1&1\end{bmatrix}$. The column ordering in $T$ must match the order in $D$.

##### Review of diagonalization for differential equations

For any square matrix $A$, take $A^2=AA$, $A^3=AA^2$, and $A^n=AA^{n-1}$. Then

$$
e^{At}=I+At+\frac{A^2t^2}{2!}+\cdots.
$$

For $A=\operatorname{diag}(1,2)$, this gives $e^{At}=\operatorname{diag}(e^t,e^{2t})$.

The aim is to replace the coupled equations

$$
x_i'=\sum_{j=1}^n a_{ij}x_j,\qquad i=1,\ldots,n,
$$

with independent scalar equations in the new coordinates, $y_i'=d_{ii}y_i$. Writing $\mathbf{x}=T\mathbf{y}$ gives $\mathbf{y}'=D\mathbf{y}$ when $D=T^{-1}AT$.

For $x'=4x-2y$, $y'=x+y$, $x(0)=1$, and $y(0)=2$, we have

$$
\begin{bmatrix}x\\y\end{bmatrix}'=
\begin{bmatrix}4&-2\\1&1\end{bmatrix}
\begin{bmatrix}x\\y\end{bmatrix}.
$$

The equation for an eigenvector is $(A-\lambda I)\mathbf{v}=\mathbf{0}$. Its determinant condition is

$$
(4-\lambda)(1-\lambda)+2
=\lambda^2-5\lambda+6
=(\lambda-2)(\lambda-3)=0.
$$

The two distinct eigenvalues yield a diagonalization with $D=\operatorname{diag}(2,3)$. The solution is $\mathbf{x}(t)=Te^{Dt}T^{-1}\mathbf{x}_0$, where $e^{Dt}=\operatorname{diag}(e^{2t},e^{3t})$ and $\mathbf{x}_0=(1,2)^{\mathsf T}$.

##### The Laplace transform

The Laplace transform is the integral transform

$$
\mathcal{L}\{f\}(p)=F(p)=\int_0^\infty f(t)e^{-pt}\,dt.
$$

It is convenient to define $f(t)=0$ for $t<0$. For $f(t)=1$ on $t\ge0$ and $p>0$,

$$
F(p)=\int_0^\infty e^{-pt}\,dt
=\left[-\frac{1}{p}e^{-pt}\right]_0^\infty
=\frac{1}{p}.
$$

##### Power series

For a power series $\sum_{n=0}^\infty c_n(x-a)^n$, the ratio test uses

$$
L=\lim_{n\to\infty}\left|\frac{c_{n+1}(x-a)^{n+1}}{c_n(x-a)^n}\right|
=|x-a|\lim_{n\to\infty}\left|\frac{c_{n+1}}{c_n}\right|
$$

where the ratios and limit are defined. If $L<1$, the series converges absolutely. If $L>1$, it diverges. Convergence at the endpoints of the interval of convergence requires separate checks.

##### Diagonalization with a repeated eigenvalue

An $n\times n$ matrix $A$ is diagonalizable when it has $n$ linearly independent eigenvectors. A sufficient condition is that it have $n$ distinct eigenvalues.

For example, consider $A=\begin{bmatrix}4&1\\-1&2\end{bmatrix}$. The characteristic equation is

$$
\begin{vmatrix}4-\lambda&1\\-1&2-\lambda\end{vmatrix}
=(4-\lambda)(2-\lambda)+1
=\lambda^2-6\lambda+9
=(\lambda-3)^2=0.
$$

The two eigenvalues coincide at $\lambda=3$. In this example $A$ cannot be diagonalized. Indeed, a diagonal matrix with both entries equal to $3$ would be $3I$, and any matrix similar to $3I$ equals $3I$. This check supplies the justification beyond the repeated root recorded in the notes.

##### Applications of diagonalization

For $A=\begin{bmatrix}4&-2\\1&1\end{bmatrix}$, the eigenvalues $2$ and $3$ are distinct, so $A=TDT^{-1}$ for $D=\operatorname{diag}(2,3)$. The intermediate factors $T^{-1}T$ cancel when taking powers, giving

$$
A^k=(TDT^{-1})^k
=TD^kT^{-1}
=T\operatorname{diag}(\lambda_1^k,\ldots,\lambda_n^k)T^{-1}.
$$

In particular, $A^{10}=TD^{10}T^{-1}$ with $D^{10}=\operatorname{diag}(2^{10},3^{10})$.

A separate calculation in the margin uses the lower-right entry $-1$ and finds the adjugate

$$
\operatorname{adj}\begin{bmatrix}4&-2\\1&-1\end{bmatrix}
=\begin{bmatrix}-1&2\\-1&4\end{bmatrix}.
$$

##### Variation of constants

For a constant matrix $A$, the nonhomogeneous initial-value problem $\mathbf{x}'=A\mathbf{x}+\mathbf{F}(t)$ with $\mathbf{x}(t_0)=\mathbf{x}_0$ has solution

$$
\mathbf{x}(t)=e^{A(t-t_0)}\mathbf{x}_0
+\int_{t_0}^t e^{A(t-s)}\mathbf{F}(s)\,ds.
$$

This is the **variation of constants** or **variation of parameters** formula.

In Example 3, $A=\operatorname{diag}(1,2)$, $\mathbf{F}(t)=(t,e^{4t})^{\mathsf T}$, and $\mathbf{x}(0)=(1,2)^{\mathsf T}$. Substitution gives

$$
\begin{aligned}
\mathbf{x}(t)
&=\begin{bmatrix}e^t&0\\0&e^{2t}\end{bmatrix}
\begin{bmatrix}1\\2\end{bmatrix}
+\int_0^t
\begin{bmatrix}e^{t-s}&0\\0&e^{2(t-s)}\end{bmatrix}
\begin{bmatrix}s\\e^{4s}\end{bmatrix}\,ds\\
&=\begin{bmatrix}e^t\\2e^{2t}\end{bmatrix}
+\int_0^t \begin{bmatrix}se^{t-s}\\e^{2t+2s}\end{bmatrix}\,ds\\
&=\begin{bmatrix}
2e^t-t-1\\
2e^{2t}+\frac{1}{2}(e^{4t}-e^{2t})
\end{bmatrix}.
\end{aligned}
$$

The first entry in the handwritten boxed result differs from the preceding integral. Here it is evaluated using $\int_0^t se^{t-s}\,ds=e^t-t-1$.

## Source

Kyle Kabasares, *Intermediate Ordinary Differential Equations (Math 125, UC Merced 2016)*.
