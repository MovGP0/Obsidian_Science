---
title: "Quaternion algebra"
catalogue_ids:
  - "4.4"
  - "4.4.1"
  - "4.4.1.1"
  - "4.4.1.2"
  - "4.4.1.3"
---

> [!TLDR]
> Quaternions extend real arithmetic to four components with an associative but noncommutative multiplication.

## Four components and a multiplication table

Read [[Matrices and linear maps]] first. A **quaternion** is an expression $q=a+bi+cj+dk$ with real numbers $a,b,c,d$. These expressions form a four-dimensional real vector space: add the four coefficients separately and scale them by real numbers. Extra multiplication rules turn that vector space into an algebra:

$$
i^2=j^2=k^2=-1,\qquad ij=k,\quad jk=i,\quad ki=j,
$$

$$
ji=-k,\qquad kj=-i,\qquad ik=-j.
$$

Real scalars commute with everything. Expand products by distributivity, then use the table. Multiplication is associative, so parentheses can move without changing the result, but factors generally cannot change places. In particular $ij\ne ji$. There is no rule that all imaginary directions behave like the same complex unit.

Write $q=(a,u)$ with $u=(b,c,d)$. With the usual dot and cross products of three-component vectors, the entire multiplication table becomes

$$
(a,u)(s,v)=(as-u\cdot v,\ av+su+u\times v).
$$

The negative dot product is the scalar part; the cross product records the order-sensitive part. For two pure quaternions $(0,u)$ and $(0,v)$, the scalar part is $-u\cdot v$. Thus $uv+vu=-2u\cdot v$ and $uv-vu=2u\times v$, where vectors on the right are identified with pure quaternions. [[05.05 Dot products]] and [[Cross product]] explain these vector operations.

## Conjugate, norm, and division

Define $\bar q=a-bi-cj-dk$. Multiplying out gives

$$
q\bar q=\bar q q=a^2+b^2+c^2+d^2=|q|^2.
$$

The norm $|q|$ is the nonnegative square root. Conjugation reverses product order: $\overline{pq}=\bar q\bar p$. Consequently $|pq|^2=pq\bar q\bar p=|q|^2p\bar p=|q|^2|p|^2$, so $|pq|=|p||q|$. If $q\ne0$, the inverse is $q^{-1}=\bar q/|q|^2$. Both $qq^{-1}$ and $q^{-1}q$ equal $1$.

Division requires an order. To solve $qx=b$, multiply on the left by $q^{-1}$ and get $x=q^{-1}b$. To solve $xq=b$, multiply on the right and get $x=bq^{-1}$. A notation such as $b/q$ is incomplete unless that convention is supplied. Zero has no inverse, just as with real numbers.

## A real matrix representation

Left multiplication by $q$ is a linear operation on the four real components. Expanding $q(s+xi+yj+zk)$ gives its matrix:

$$
L(q)=\begin{pmatrix}
a&-b&-c&-d\\
b&a&-d&c\\
c&d&a&-b\\
d&-c&b&a
\end{pmatrix}.
$$

If $[p]=(s,x,y,z)^T$, then $[qp]=L(q)[p]$. Associativity implies $L(qp)=L(q)L(p)$, because both sides act on every quaternion column in the same way. The first column recovers $q$, so distinct quaternions give distinct matrices. This is a faithful real matrix representation. It proves that computations with quaternions can be expressed entirely with ordinary real arrays. Not every $4\times4$ real matrix has this special pattern.

For $|q|=1$, norm multiplicativity shows that $L(q)$ preserves four-dimensional Euclidean length. This alone is not the three-dimensional rotation rule: that rule uses **two-sided** multiplication, $qv\bar q$, as developed in [[Rotation conventions and quaternions]].

## Worked examples

Let $p=1+i$ and $q=1+j$. Expanding in order gives

$$
pq=1+i+j+k,\qquad qp=1+i+j-k.
$$

Both have norm $2$, agreeing with $|p||q|=\sqrt2\sqrt2=2$. Since $p^{-1}=(1-i)/2$, solve $px=j$ by

$$
x=p^{-1}j=(j-k)/2.
$$

Check in the original order: $(1+i)(j-k)/2=(j-k+k+j)/2=j$. Solving $xp=j$ would instead give $(j+k)/2$, so an order error changes the answer.

For a matrix check, $L(i)$ sends $(0,0,1,0)^T$, the column of $j$, to $(0,0,0,1)^T$, the column of $k$. Its square is $-I_4$, which is exactly the rule $i^2=-1$ in array form.

## Practice

1. Compute $(i+j)^2$ and explain why the mixed terms disappear.
2. Find the inverse of $q=2+k$, then solve $xq=i$.

## Worked answers

1. Expanding gives $i^2+ij+ji+j^2=-1+k-k-1=-2$. Treating multiplication as commutative would incorrectly leave a $2k$ term.
2. $|q|^2=5$, so $q^{-1}=(2-k)/5$. The right-sided equation gives $x=iq^{-1}=(2i-ik)/5=(2i+j)/5$. Multiplication on the right by $2+k$ recovers $i$.
