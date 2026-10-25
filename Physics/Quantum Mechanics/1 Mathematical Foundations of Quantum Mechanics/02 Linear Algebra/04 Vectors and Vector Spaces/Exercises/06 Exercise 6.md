---
title: "Cauchy–Schwarz from a nonnegative squared norm"
---

> [!TLDR]
> Subtract the projection along one vector; the nonnegative squared norm of the remainder gives the Cauchy–Schwarz bound.

Chapter 4 — Vectors and Vector Spaces · Exercise 6 · Intermediate level

Back to [[04 Vectors and Vector Spaces/09 Exercises|Chapter 4 exercise index]].

## Question

Prove the **Cauchy–Schwarz inequality**:

$$
|\langle u,v\rangle|^2\le\langle u,u\rangle\langle v,v\rangle.
$$

*Hint:* consider

$$
w=v-\frac{\langle u,v\rangle}{\langle u,u\rangle}u
$$

and use $\langle w,w\rangle\ge0$. Assume $u\ne0$; the case $u=0$ is immediate.

## Worked solution

If $u=0$, then $\langle u,v\rangle=0$ and both sides of the proposed inequality are zero. Now assume $u\ne0$.

Introduce the helper scalars

$$
a=\langle u,u\rangle>0,
\qquad b=\langle u,v\rangle,
\qquad c=\frac ba.
$$

The number $a$ is real and positive by positive definiteness. Thus $\overline a=a$, and $\overline c=\overline b/a$. Set $w=v-cu$. This choice removes the projection along $u$, because

$$
\langle u,w\rangle
=\langle u,v\rangle-c\langle u,u\rangle
=b-\frac ba a=0.
$$

Expand its squared norm. The first slot is conjugate-linear and the second is linear:

$$
\begin{aligned}
\langle w,w\rangle
&=\langle v-cu,v-cu\rangle\\
&=\langle v,v\rangle
-c\langle v,u\rangle
-\overline c\langle u,v\rangle
+\overline c c\langle u,u\rangle.
\end{aligned}
$$

Hermitian symmetry gives $\langle v,u\rangle=\overline b$. Substitute the helper scalars:

$$
\begin{aligned}
\langle w,w\rangle
&=\langle v,v\rangle
-\frac{b\overline b}{a}
-\frac{\overline b b}{a}
+\frac{\overline b b}{a^2}a\\
&=\langle v,v\rangle-\frac{|b|^2}{a}.
\end{aligned}
$$

The two negative terms and the positive term leave one negative copy of $|b|^2/a$. Positivity now gives

$$
0\le\langle w,w\rangle
=\langle v,v\rangle-\frac{|b|^2}{a}.
$$

Multiply by $a>0$. This step preserves the inequality direction:

$$
|\langle u,v\rangle|^2
\le\langle u,u\rangle\langle v,v\rangle.
$$

Equality holds exactly when $\langle w,w\rangle=0$, hence when $w=0$. For $u\ne0$, this means $v=cu$. Thus equality describes linearly dependent vectors, including the case where one is zero.

## Answer

For all $u,v$, $|\langle u,v\rangle|^2\le\langle u,u\rangle\langle v,v\rangle$, with equality exactly for linearly dependent vectors.
