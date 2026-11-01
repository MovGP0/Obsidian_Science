---
title: "Complex Numbers"
---

> [!TLDR]
> Euler's formula connects complex exponentials to sine and cosine. A complex number multiplied by its conjugate gives its squared modulus.

## Euler's formula

For a real angle $\theta$,

$$
e^{i\theta}=\cos\theta+i\sin\theta.
$$

The angle is measured in radians. The modulus of this exponential is one, so multiplication by it changes the phase of a complex amplitude without changing its modulus. Choose exponential form when phases multiply; their angles then add.

## Sine and cosine in exponential form

$$
\cos\theta=\frac{e^{i\theta}+e^{-i\theta}}2,
\qquad
\sin\theta=\frac{e^{i\theta}-e^{-i\theta}}{2i}.
$$

These identities follow by adding or subtracting Euler's formulas for $\theta$ and $-\theta$. They are useful when a sum of real oscillations must be written as a sum of complex modes.

## Modulus and conjugate

For $z\in\mathbb C$,

$$
|z|^2=zz^*.
$$

If $z=a+ib$ with real $a,b$, then $z^*=a-ib$ and $zz^*=a^2+b^2\geq0$. This is the operation needed to form a quantum probability from an amplitude. Squaring without conjugation fails: for $z=i$, $z^2=-1$ but $|z|^2=1$.

A common phase does not affect probabilities, but a relative phase can affect interference. For example, the amplitudes $1$ and $e^{i\theta}$ have fixed individual moduli, while $|1+e^{i\theta}|^2=2+2\cos\theta$. The sum changes from $4$ to $0$ as the relative phase changes from $0$ to $\pi$; these are unnormalized amplitudes, not probabilities that must lie below one.
