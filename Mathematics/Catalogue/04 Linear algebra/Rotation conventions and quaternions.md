---
title: "Rotation conventions and quaternions"
catalogue_ids:
  - "4.4.2"
  - "4.4.2.1"
  - "4.4.2.2"
  - "4.4.2.3"
  - "4.4.2.4"
  - "4.4.2.5"
  - "4.4.2.6"
  - "4.4.2.7"
---

> [!TLDR]
> Unit quaternions and rotation matrices describe the same rotations once axes, angle order, and active or passive conventions are fixed.

## Fix the convention first

Read [[Quaternion algebra]]. All rotations here are active: vectors move in a fixed right-handed coordinate system. Vectors are columns, positive angles follow the right-hand rule, and the rightmost factor acts first. Write $c=\cos\theta$, $s=\sin\theta$. The three coordinate-axis rotations are

$$
R_x(\theta)=\begin{pmatrix}1&0&0\\0&c&-s\\0&s&c\end{pmatrix},\quad
R_y(\theta)=\begin{pmatrix}c&0&s\\0&1&0\\-s&0&c\end{pmatrix},\quad
R_z(\theta)=\begin{pmatrix}c&-s&0\\s&c&0\\0&0&1\end{pmatrix}.
$$

Each preserves length, fixes its axis, and has determinant $1$. Its inverse is its transpose, obtained by reversing the angle. A passive change of coordinate frame instead uses the inverse rotation on coordinate columns. Confusing the two conventions reverses signs and order.

## Cardan and Euler angles

**Cardan angles**, also called Tait–Bryan angles, use three distinct axes. Specify the sequence because there are several choices. Here the fixed-axis sequence is $x$ by $\phi$, then $y$ by $\theta$, then $z$ by $\psi$:

$$
R=R_z(\psi)R_y(\theta)R_x(\phi).
$$

Proper **Euler angles** repeat the first axis, for example $R=R_z(\alpha)R_y(\beta)R_z(\gamma)$. This means fixed-axis rotations $z(\gamma)$, then $y(\beta)$, then $z(\alpha)$. Intrinsic rotations about moving axes can describe the same products in reverse verbal order. A bare list of three angles without its sequence does not specify a rotation.

For Cardan $z$-$y$-$x$ angles, the matrix has $R_{31}=-\sin\theta$. When $\cos\theta\ne0$ and $-\pi/2<\theta<\pi/2$, recover $\theta=\arcsin(-R_{31})$, $\phi=\operatorname{atan2}(R_{32},R_{33})$, and $\psi=\operatorname{atan2}(R_{21},R_{11})$. The function $\operatorname{atan2}(y,x)$ uses both signs to select an angle. At $\theta=\pm\pi/2$, two outer rotations become dependent: this coordinate failure is gimbal lock. Proper Euler $z$-$y$-$z$ angles similarly fail when $\sin\beta=0$. The orientation itself remains well defined.

## Rotate about an arbitrary axis

Let $n$ be a unit vector. Split an input into its part along $n$ and its perpendicular part. Leave the parallel part fixed and rotate the perpendicular part in its plane. This gives Rodrigues' formula:

$$
Rv=v\cos\theta+(n\times v)\sin\theta+n(n\cdot v)(1-\cos\theta).
$$

Equivalently, define $q=\cos(\theta/2)+n\sin(\theta/2)$, treating $n$ as a pure quaternion. The same output is $v'=qv\bar q$. To see the equivalence, put $a=\cos(\theta/2)$, $u=n\sin(\theta/2)$ and expand with the multiplication law:

$$
qv\bar q=(a^2-u\cdot u)v+2u(u\cdot v)+2a(u\times v).
$$

Double-angle identities give Rodrigues' formula. The scalar part cancels, so the output is again a vector. Both $q$ and $-q$ give the same result. A zero rotation may use any axis; an axis is not unique in that case.

## Convert Cardan angles to a quaternion

Compose the corresponding half-angle quaternions in matrix order: $q=q_z(\psi)q_y(\theta)q_x(\phi)$. Set $c_\phi=\cos(\phi/2)$, $s_\phi=\sin(\phi/2)$ and similarly for the other angles. Then

$$
\begin{aligned}
w&=c_\psi c_\theta c_\phi+s_\psi s_\theta s_\phi,\\
x&=c_\psi c_\theta s_\phi-s_\psi s_\theta c_\phi,\\
y&=c_\psi s_\theta c_\phi+s_\psi c_\theta s_\phi,\\
z&=s_\psi c_\theta c_\phi-c_\psi s_\theta s_\phi.
\end{aligned}
$$

These formulas belong to the stated convention. For a unit $q=(w,x,y,z)$, matrix entries needed for the reverse conversion are $R_{31}=2(xz-wy)$, $R_{32}=2(yz+wx)$, $R_{33}=1-2(x^2+y^2)$, $R_{21}=2(xy+wz)$, $R_{11}=1-2(y^2+z^2)$. Use the previous angle extraction, including its singular-case limitation.

## Worked composition and cost

Rotate $e_2$ by $90^\circ$ about $x$, then $90^\circ$ about $y$. The matrix stages give $e_2\mapsto e_3\mapsto e_1$. The quaternion is

$$
q=\frac{1+j}{\sqrt2}\frac{1+i}{\sqrt2}=\frac{1+i+j-k}{2}.
$$

Substitution into the expanded vector formula gives $q e_2\bar q=e_1$. Reversing the rotations gives a different quaternion and sends $e_2$ to $e_3$. This is a concrete check on noncommutativity.

A naive quaternion composition uses $16$ real multiplications and $12$ additions, versus $27$ multiplications and $18$ additions for dense $3\times3$ matrix composition. A precomputed matrix applies to one vector with only $9$ multiplications and $6$ additions. Storage, repeated use, normalization, and hardware change the practical comparison. No representation is always fastest. Renormalize a quaternion when roundoff changes its length; matrices may likewise drift from orthogonality.

## Practice

1. Use an axis quaternion to rotate $(1,0,0)$ by $180^\circ$ about $z$.
2. What does the proper Euler sequence with $\beta=0$ reduce to?

## Worked answers

1. $q=k$ and $\bar q=-k$. Thus $k i(-k)=j(-k)=-i$, giving $(-1,0,0)$. Rodrigues' formula gives the same result.
2. $R_z(\alpha)R_y(0)R_z(\gamma)=R_z(\alpha+\gamma)$. Only the sum is determined; the two individual angles cannot be recovered uniquely.

## Source

[Berkeley Rotations project: rotation representations](https://rotations.berkeley.edu/other-representations-of-a-rotation/) discusses the unit constraint and the quadratic rotation representation. The conventions and worked examples here are stated independently.
