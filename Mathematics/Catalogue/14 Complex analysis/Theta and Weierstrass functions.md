---
title: "Theta and Weierstrass functions"
catalogue_ids:
  - "14.6.3"
  - "14.6.4"
---

> [!TLDR]
> Theta series encode a complex period lattice, while the Weierstrass ℘ function builds an elliptic function by placing a double pole at each lattice point.

## Prerequisites and the period lattice

Read [[Elliptic integrals and Jacobi functions]] and [[Complex series and analytic continuation]]. Choose $\omega_1\ne0$ and $\omega_2$ with nonreal ratio. Their **lattice** is $\Lambda=\{m\omega_1+n\omega_2:m,n\in\mathbb Z\}$. Each point is an integer number of steps in two independent directions. Values of an elliptic function repeat under both shifts, so one parallelogram describes the repeated pattern, apart from how we assign its boundary points.

![[catalogue-ch14-period-lattice.svg|**Fig. C.ch14.4** Two independent complex shifts generate a lattice. A shaded fundamental parallelogram repeats by integer translations in both directions.]]

The figure uses the full periods themselves. A common alternative writes the lattice as $2m\omega_1+2n\omega_2$ and calls the $\omega_j$ half-periods. These conventions produce different factors of two. In this lesson, $\omega_1,\omega_2$ are full lattice generators.

## Theta functions

Let $\operatorname{Im}\tau>0$ and $q=e^{i\pi\tau}$, so $|q|<1$. The number $q$ is the **nome**. One of the four standard Jacobi theta functions is

$$
\vartheta_3(v\mid\tau)
=\sum_{n=-\infty}^{\infty}e^{i\pi\tau n^2+2inv}
=1+2\sum_{n=1}^{\infty}q^{n^2}\cos(2nv).
$$

This convention gives period $\pi$ in $v$. The factor $q^{n^2}$ decreases rapidly on bounded sets of complex $v$, so the series converges uniformly there and defines an entire function of $v$. For example, when $\tau=i$, $q=e^{-\pi}$ and

$$
\vartheta_3(0\mid i)=1+2e^{-\pi}+2e^{-4\pi}+\cdots\approx1.0864348.
$$

The other standard series are

$$
\begin{aligned}
\vartheta_1(v\mid\tau)&=2\sum_{n=0}^{\infty}(-1)^nq^{(n+1/2)^2}\sin((2n+1)v),\\
\vartheta_2(v\mid\tau)&=2\sum_{n=0}^{\infty}q^{(n+1/2)^2}\cos((2n+1)v),\\
\vartheta_4(v\mid\tau)&=1+2\sum_{n=1}^{\infty}(-1)^nq^{n^2}\cos(2nv).
\end{aligned}
$$

For fractional powers of the nome, interpret $q^s=e^{i\pi\tau s}$ with the specified $\tau$, rather than selecting a new logarithm of $q$. These are the [theta-series conventions of NIST DLMF §20.2](https://dlmf.nist.gov/20.2). Some texts use an argument multiplied by $\pi$; that changes the written periods.

## Quasiperiodicity and elliptic quotients

Theta functions themselves are generally **quasiperiodic**, not doubly periodic. Directly shifting the series and changing the integer index gives

$$
\vartheta_3(v+\pi\mid\tau)=\vartheta_3(v\mid\tau),\qquad
\vartheta_3(v+\pi\tau\mid\tau)
=e^{-i\pi\tau-2iv}\vartheta_3(v\mid\tau).
$$

The second shift multiplies the value by a nonconstant factor. Suitable ratios cancel such factors and yield meromorphic elliptic functions. For real $0<k<1$, put $\tau=iK'/K$, $q=e^{-\pi K'/K}$, and $v=\pi u/(2K)$. Then

$$
\operatorname{sn}(u,k)=
\frac{\vartheta_3(0\mid\tau)}{\vartheta_2(0\mid\tau)}
\frac{\vartheta_1(v\mid\tau)}{\vartheta_4(v\mid\tau)}.
$$

This formula connects the previous lesson's inverse-integral definition to convergent series. The normalization factor and rescaled argument are essential. [NIST DLMF §22.2](https://dlmf.nist.gov/22.2) also gives $k=\vartheta_2(0\mid\tau)^2/\vartheta_3(0\mid\tau)^2$ and $K=(\pi/2)\vartheta_3(0\mid\tau)^2$.

## Weierstrass functions

For the lattice $\Lambda$, define

$$
\wp(z;\Lambda)=\frac1{z^2}
+\sum_{\omega\in\Lambda\setminus\{0\}}
\left[\frac1{(z-\omega)^2}-\frac1{\omega^2}\right].
$$

The subtraction is part of the definition; it makes the sum converge absolutely and uniformly on compact sets that avoid lattice points. Pairing opposite lattice points shows that $\wp$ is even. It has a double pole with zero residue at each lattice point and periods $\omega_1,\omega_2$. The construction places the same local singular pattern throughout a grid. [NIST DLMF §23.2](https://dlmf.nist.gov/23.2) states the lattice sum, convergence, and periodicity.

Two related Weierstrass functions are useful. The **zeta function** is

$$
\zeta(z)=\frac1z+\sum_{\omega\ne0}
\left(\frac1{z-\omega}+\frac1\omega+\frac z{\omega^2}\right),
\qquad \zeta'(z)=-\wp(z).
$$

The **sigma function** is an entire function normalized by $\sigma(z)/z\to1$ at zero and characterized by $\sigma'/\sigma=\zeta$ away from its zeros. Its zeros are simple at the lattice points. Zeta and sigma are quasiperiodic; they are not elliptic functions themselves. The names refer here to Weierstrass functions, not the Riemann zeta function or a sum symbol.

## Worked example: a local differential equation

Define the convergent lattice sums $g_2=60\sum_{\omega\ne0}\omega^{-4}$ and $g_3=140\sum_{\omega\ne0}\omega^{-6}$. The Weierstrass function satisfies

$$
(\wp')^2=4\wp^3-g_2\wp-g_3.
$$

The equation, recorded in [NIST DLMF §23.3](https://dlmf.nist.gov/23.3), connects elliptic functions to cubic equations. Near zero write $\wp=z^{-2}+az^2+bz^4+\cdots$. Then $\wp'=-2z^{-3}+2az+4bz^3+\cdots$. On squaring, the coefficient of $z^{-2}$ is $-8a$ and the constant coefficient is $-16b$. On the right, they are $12a-g_2$ and $12b-g_3$. Equating gives $a=g_2/20$ and $b=g_3/28$. The initial terms can therefore be calculated from the lattice without evaluating the full function.

## Practice

1. Show directly from its series that $\vartheta_3(v+\pi\mid\tau)=\vartheta_3(v\mid\tau)$.
2. Calculate the integral of $\wp$ around a counterclockwise fundamental parallelogram whose boundary avoids lattice points and which encloses exactly one lattice point.

### Worked answers

1. Each term gains $e^{2in\pi}=1$ for integer $n$. Every term is unchanged, and absolute convergence permits the termwise comparison.
2. The enclosed pole has order two but residue zero. The residue theorem gives an integral of zero. Independently, opposite boundary edges cancel because $\wp$ is periodic; this is consistent with the local calculation.
