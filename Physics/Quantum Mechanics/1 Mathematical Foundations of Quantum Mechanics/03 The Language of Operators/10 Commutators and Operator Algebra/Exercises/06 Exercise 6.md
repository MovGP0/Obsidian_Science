---
title: "Ladder operators and the number spectrum"
---

> [!TLDR]
> The ladder operators lower and raise oscillator states by one level. Positivity restricts the eigenvalues of the number operator to nonnegative integers.

Chapter 10 — Commutators and Operator Algebra · Exercise 6 · Intermediate level.

Back to [[10 Commutators and Operator Algebra/08 Exercises|Chapter 10 exercises]].

## Question

For the harmonic oscillator, use $[\hat a,\hat a^\dagger]=1$ and $\hat N=\hat a^\dagger\hat a$:

**(a)** Calculate $[\hat N,\hat a]$ and $[\hat N,\hat a^\dagger]$.

**(b)** Show that, if $|n\rangle$ is an eigenstate of $\hat N$ with eigenvalue $n$, then $\hat a|n\rangle$ is an eigenstate with eigenvalue $n-1$, provided this vector is nonzero.

**(c)** Deduce that the eigenvalues of $\hat N$ are the nonnegative integers $0,1,2,\ldots$.

> [!note]
> The source omits the nonzero-vector condition in part (b). Part (c) also uses positivity of $\hat N$ and the usual normalizable oscillator representation, as discussed in [[10 Commutators and Operator Algebra/05 Creation and Annihilation Operators]].

## Worked solution

The scalar $1$ in the commutator denotes the identity operator $\hat I$.

### (a) Number-operator commutators

Use $[\hat A\hat B,\hat C]=\hat A[\hat B,\hat C]+[\hat A,\hat C]\hat B$:

$$
\begin{aligned}
[\hat N,\hat a]
&=\hat a^\dagger[\hat a,\hat a]+[\hat a^\dagger,\hat a]\hat a\\
&=\hat a^\dagger\,0-\hat I\hat a=-\hat a,\\
[\hat N,\hat a^\dagger]
&=\hat a^\dagger[\hat a,\hat a^\dagger]+[\hat a^\dagger,\hat a^\dagger]\hat a\\
&=\hat a^\dagger\hat I+0\hat a=\hat a^\dagger.
\end{aligned}
$$

### (b) The lowered eigenstate

Rearrange $\hat N\hat a-\hat a\hat N=-\hat a$ to place $\hat N$ next to the known eigenstate:

$$
\begin{aligned}
\hat N(\hat a|n\rangle)
&=(\hat a\hat N-\hat a)|n\rangle\\
&=\hat a(n|n\rangle)-\hat a|n\rangle\\
&=(n-1)\hat a|n\rangle.
\end{aligned}
$$

If $\hat a|n\rangle\neq0$, this is an eigenvector equation with eigenvalue $n-1$. A zero vector is not an eigenvector, so the condition in the question is necessary.

### (c) Positivity and termination

Initially call an arbitrary eigenvalue $\lambda$, so we do not assume it is an integer. For a normalized eigenstate $|\lambda\rangle$,

$$
\lambda=\langle\lambda|\hat N|\lambda\rangle
=\langle\lambda|\hat a^\dagger\hat a|\lambda\rangle
=\|\hat a|\lambda\rangle\|^2\geq0.
$$

Repeated lowering, while each vector remains nonzero, reduces the eigenvalue by one. In fact,

$$
\|\hat a^r|\lambda\rangle\|^2
=\lambda(\lambda-1)\cdots(\lambda-r+1)
$$

for positive integers $r$. This follows by applying the same norm identity at each lowering step.

Suppose $\lambda$ were not an integer. Let $q=\lfloor\lambda\rfloor$. After $q+1$ steps all norm factors remain positive, so the resulting vector is nonzero, but its eigenvalue is $\lambda-q-1<0$. This contradicts positivity. Thus $\lambda$ is a nonnegative integer. For $\lambda=n$, the norm factor becomes zero at the next step after reaching eigenvalue zero; hence $\hat a|0\rangle=0$.

To show that every nonnegative integer occurs in the usual oscillator representation, start with its normalized vacuum $|0\rangle$. Part (a) also gives

$$
\hat N\hat a^\dagger|n\rangle=(n+1)\hat a^\dagger|n\rangle,
\qquad
\|\hat a^\dagger|n\rangle\|^2
=\langle n|\hat a\hat a^\dagger|n\rangle=n+1>0.
$$

Each raising step therefore produces a nonzero next state. Normalization gives

$$
|n\rangle=\frac{(\hat a^\dagger)^n}{\sqrt{n!}}|0\rangle,
\qquad n=0,1,2,\ldots.
$$

All products are understood on the oscillator-state domain. The vacuum and normalizable oscillator representation are part of the physical assumptions, as stated in the question note.

## Answer

$$
[\hat N,\hat a]=-\hat a,
\qquad [\hat N,\hat a^\dagger]=\hat a^\dagger,
\qquad \hat N\hat a|n\rangle=(n-1)\hat a|n\rangle.
$$

The last vector is an eigenstate only when it is nonzero. In the usual normalizable oscillator representation, the number eigenvalues are exactly $0,1,2,\ldots$.
