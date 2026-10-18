---
title: "Dual and Hilbert adjoints"
catalogue_ids:
  - "12.6"
  - "12.6.1"
  - "12.6.2"
  - "12.6.3"
  - "12.6.3.1"
  - "12.6.3.2"
---

> [!TLDR]
> Adjoints transfer an operator across a measurement or inner product; for unbounded operators their domains are part of the definition.

## Prerequisite route

Read [[10.03 Matrices]], [[Continuous functionals and representation]], and [[Inner products and Hilbert spaces]]. A dual functional is a continuous linear scalar-valued map. In this lesson $\langle x,y\rangle$ is conjugate-linear in $x$ and linear in $y$. For real spaces this is the usual dot product. A dense subspace is one in which every vector of the whole space can be approximated arbitrarily closely.

## Adjoint operators in normed spaces

Let $T:X\to Y$ be bounded and linear between normed spaces. Given a functional $g\in Y^*$, measure an output $Tx$ by $g$. The composite $g\circ T$ is a continuous functional on $X$. The **dual operator**, also called the Banach adjoint, is

$$
T':Y^*\to X^*,\qquad (T'g)(x)=g(Tx).
$$

It reverses the direction of the original map. Since $|g(Tx)|\le\|g\|\|T\|\|x\|$, it is bounded. In fact $\|T'\|=\|T\|$, using Hahn–Banach to choose functionals that detect vector length. This construction needs no inner product.

For Hilbert spaces, Riesz representation turns a functional into a vector. The resulting **Hilbert adjoint** $T^*:Y\to X$ is specified by

$$
\langle Tx,y\rangle_Y=\langle x,T^*y\rangle_X.
$$

It exists uniquely for bounded $T$ and has the same norm. For Euclidean matrices it is the conjugate transpose: transpose the matrix and conjugate each entry. In real spaces it is the transpose. Both adjoints are often written $T^*$ in books, so check which spaces occur in the formula. [MIT lecture 18](https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/7f23bfc43ee2e1efd238a5384e5b9d51_MIT18_102s21_lec18.pdf)

For

$$
A=\begin{pmatrix}1&i\\2&0\end{pmatrix},
\qquad
A^*=\begin{pmatrix}1&2\\-i&0\end{pmatrix}.
$$

With $x=(1,0)$ and $y=(0,1)$, $\langle Ax,y\rangle=2$. The other side is $\langle x,A^*y\rangle=\langle(1,0),(2,0)\rangle=2$. Taking a transpose without conjugation would fail on other inputs.

## Adjoint of an unbounded operator

Let $T:D(T)\subset H\to H$ be linear with dense domain. Its formula alone does not specify the operator; the allowed inputs $D(T)$ must also be given. Define $D(T^*)$ to contain those $y\in H$ for which there exists $z\in H$ satisfying

$$
\langle Tx,y\rangle=\langle x,z\rangle\quad\text{for all }x\in D(T).
$$

Then $T^*y=z$. Density makes $z$ unique. Equivalently, the left side, as a function of $x$, must be bounded in the ambient $H$ norm. It is not enough for it to be bounded in a stronger graph norm. [NIST DLMF, section 1.18(ix)](https://dlmf.nist.gov/1.18#ix)

A concrete example needs no boundary calculus. On $\ell^2$, set $(Tx)_n=nx_n$ with

$$
D(T)=\{x\in\ell^2:\sum n^2|x_n|^2<\infty\}.
$$

Finite sequences belong to this domain and approximate every $\ell^2$ sequence, so it is dense. Testing the adjoint identity on $e_n$ forces $z_n=ny_n$. Such $z$ belongs to $\ell^2$ precisely when $y\in D(T)$. Hence $D(T^*)=D(T)$ and $T^*=T$. Yet $\|Te_n\|=n$, so $T$ is unbounded.

## Self-adjoint and positive definite operators

A bounded operator on one Hilbert space is **self-adjoint** if $T=T^*$. For an unbounded operator this equality includes $D(T)=D(T^*)$. The weaker condition $\langle Tx,y\rangle=\langle x,Ty\rangle$ for $x,y\in D(T)$ is called **symmetric**. It need not imply equal domains. For a concrete counterexample, restrict the diagonal map $(Tx)_n=nx_n$ above to finite sequences only, calling the restriction $S$. It is symmetric on its dense domain. Testing the adjoint on coordinate vectors still gives $D(S^*)=\{y:\sum n^2|y_n|^2<\infty\}$, a strictly larger domain. For example $(1/n^2)$ belongs to $D(S^*)$ but is not a finite sequence. Thus $S$ is symmetric and not self-adjoint, even though its coordinate formula is real and diagonal.

A self-adjoint operator is **positive** when $\langle x,Tx\rangle\ge0$ on its domain. It is **positive definite** when the inequality is strict for $x\ne0$. A stronger condition is a uniform lower bound $\langle x,Tx\rangle\ge c\|x\|^2$ for some $c>0$.

These conditions differ in infinite dimensions. The bounded diagonal map $Dx=(x_n/n)$ is positive definite, because $\sum |x_n|^2/n>0$ for $x\ne0$. It has no positive uniform lower bound: on $e_n$ the quadratic value is $1/n$. Thus strict positivity alone does not ensure a bounded inverse.

## Projectors in Hilbert space

A **projector** satisfies $P^2=P$. It is an **orthogonal projector** when also $P=P^*$. Then $x=Px+(I-P)x$ is an orthogonal decomposition. The projector $P(x,y)=(x,0)$ has these properties and norm $1$. Its quadratic value is $\langle x,Px\rangle=\|Px\|^2$, so it is positive, though not positive definite if its kernel is nonzero.

By contrast $Q(x,y)=(x+y,0)$ has $Q^2=Q$ but $Q^*\ne Q$. It projects along a slanted direction and has norm $\sqrt2$. Do not infer orthogonality from idempotence alone. For every closed subspace of a Hilbert space there is a unique orthogonal projector onto it; closedness ensures existence of the closest point.

## Practice

1. Find the adjoint of $A=\begin{pmatrix}2&1+i\\0&3\end{pmatrix}$. Is $A$ self-adjoint?
2. For $P(x,y,z)=(x,y,0)$, determine its norm, kernel, and positivity properties.

> [!example]- Worked answers
> 1. $A^*=\begin{pmatrix}2&0\\1-i&3\end{pmatrix}$. It differs from $A$, so $A$ is not self-adjoint despite its real diagonal entries.
> 2. $\|Px\|\le\|x\|$, with equality at $(1,0,0)$, so $\|P\|=1$. Its kernel is the third coordinate axis. Since $\langle x,Px\rangle=|x_1|^2+|x_2|^2\ge0$, it is positive. It is not positive definite because the value vanishes at $(0,0,1)$.
