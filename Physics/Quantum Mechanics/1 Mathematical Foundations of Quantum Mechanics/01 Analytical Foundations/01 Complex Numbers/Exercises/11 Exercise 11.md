---
title: "Roots of unity and their sum"
---

> [!TLDR]
> Roots of unity lie at equal angular intervals, and their sum is zero for every order of at least two.

Chapter 1 — Complex Numbers. Exercise 11. **Difficulty: Challenge.**

Back to [[01 Complex Numbers/09 Exercises#Exercise 11|the chapter exercise index]].

## Question

The **nth roots of unity** are the solutions of $z^n=1$.

**(a)** Find all cube roots of unity $\omega_k$, $k=0,1,2$.

**(b)** Prove that $1+\omega+\omega^2=0$, where $\omega=\mathrm{e}^{2\pi\mathrm{i}/3}$.

**(c)** Generalize the result. Prove that

$$
\sum_{k=0}^{n-1}\mathrm{e}^{2\pi\mathrm{i}k/n}=0
$$

for every $n\ge2$.

## Worked solution

### (a) Find the cube roots

Write $1=\mathrm{e}^{2\pi\mathrm{i}k}$. If $z=r\mathrm{e}^{\mathrm{i}\theta}$ and $z^3=1$, then $r^3=1$ and $3\theta=2\pi k$. Hence $r=1$ and

$$
\omega_k=\mathrm{e}^{2\pi\mathrm{i}k/3},\qquad k=0,1,2.
$$

The three distinct roots are

$$
\omega_0=1,\qquad
\omega_1=-\frac12+\mathrm{i}\frac{\sqrt3}{2},\qquad
\omega_2=-\frac12-\mathrm{i}\frac{\sqrt3}{2}.
$$

An increase of three in $k$ adds $2\pi$ to the angle and repeats a root.

### (b) Sum the three roots

Let $\omega=\mathrm{e}^{2\pi\mathrm{i}/3}$. Then $\omega^3=1$ but $\omega\ne1$. Factor the difference of cubes:

$$
\omega^3-1=(\omega-1)(1+\omega+\omega^2)=0.
$$

Because $\omega-1\ne0$, division by that factor gives

$$
1+\omega+\omega^2=\frac{\omega^3-1}{\omega-1}=0.
$$

The Cartesian values also show the cancellation directly: the real parts sum to $1-1/2-1/2=0$, and the imaginary parts cancel.

### (c) Sum the nth roots

Set $q=\mathrm{e}^{2\pi\mathrm{i}/n}$ and $S=1+q+\cdots+q^{n-1}$. Multiply by $q$, then subtract $S$:

$$
qS=q+q^2+\cdots+q^n,
\qquad (q-1)S=q^n-1.
$$

All middle powers cancel. Since $q^n=\mathrm{e}^{2\pi\mathrm{i}}=1$, the right side is zero. For an integer $n\ge2$, $0<2\pi/n\le\pi$, so $q\ne1$ and division is allowed:

$$
\sum_{k=0}^{n-1}\mathrm{e}^{2\pi\mathrm{i}k/n}
=S=\frac{q^n-1}{q-1}
=\frac{\mathrm{e}^{2\pi\mathrm{i}}-1}{\mathrm{e}^{2\pi\mathrm{i}/n}-1}=0.
$$

Geometrically, the roots are equally spaced on the unit circle. Their vectors balance around the origin. The condition $n\ge2$ is necessary: for $n=1$, the only root and its sum are both one.

## Answer

**(a)**

$$
\boxed{1,\quad -\frac12+\frac{\sqrt3}{2}\mathrm{i},\quad
-\frac12-\frac{\sqrt3}{2}\mathrm{i}.}
$$

**(b)** $\boxed{1+\omega+\omega^2=0}$ for $\omega=\mathrm{e}^{2\pi\mathrm{i}/3}$.

**(c)**

$$
\boxed{\sum_{k=0}^{n-1}\mathrm{e}^{2\pi\mathrm{i}k/n}=0
\quad\text{for every integer }n\ge2.}
$$
