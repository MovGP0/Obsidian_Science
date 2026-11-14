---
title: "Euler's Formula"
---

> [!TLDR]
> Euler's formula connects complex exponentials with sine and cosine. It gives a compact polar form and lets us derive trigonometric identities with algebra.

One of the main results of mathematical analysis makes the polar form much easier to use.

> [!theorem] Theorem 1.1 — Euler's formula
> For every $\theta\in\mathbb{R}$,
>
> $$
> \mathrm{e}^{\mathrm{i}\theta}=\cos\theta+\mathrm{i}\sin\theta.
> $$

## Why does it hold?

The standard proof uses Taylor series. Recall that

$$
\mathrm{e}^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\frac{x^4}{4!}+\cdots.
$$

Substitute $x=\mathrm{i}\theta$:

$$
\begin{aligned}
\mathrm{e}^{\mathrm{i}\theta}
&=1+\mathrm{i}\theta+\frac{(\mathrm{i}\theta)^2}{2!}
+\frac{(\mathrm{i}\theta)^3}{3!}+\frac{(\mathrm{i}\theta)^4}{4!}+\cdots\\
&=1+\mathrm{i}\theta-\frac{\theta^2}{2!}
-\mathrm{i}\frac{\theta^3}{3!}+\frac{\theta^4}{4!}
+\mathrm{i}\frac{\theta^5}{5!}-\cdots.
\end{aligned}
$$

Here we use $\mathrm{i}^2=-1$, $\mathrm{i}^3=-\mathrm{i}$, $\mathrm{i}^4=1$, and the repeating cycle of these powers. Group the real and imaginary parts:

$$
\begin{aligned}
\operatorname{Re}(\mathrm{e}^{\mathrm{i}\theta})
&=1-\frac{\theta^2}{2!}+\frac{\theta^4}{4!}-\cdots=\cos\theta,\\
\operatorname{Im}(\mathrm{e}^{\mathrm{i}\theta})
&=\theta-\frac{\theta^3}{3!}+\frac{\theta^5}{5!}-\cdots=\sin\theta.
\end{aligned}
$$

These are the Taylor series for cosine and sine. $\square$

Euler's formula directly gives the inverse expressions:

$$
\cos\theta=\frac{\mathrm{e}^{\mathrm{i}\theta}+\mathrm{e}^{-\mathrm{i}\theta}}{2}. \tag{1.3}
$$

$$
\sin\theta=\frac{\mathrm{e}^{\mathrm{i}\theta}-\mathrm{e}^{-\mathrm{i}\theta}}{2\mathrm{i}}. \tag{1.4}
$$

These formulas let us derive trigonometric identities with algebra. There is no need to memorize the angle-addition formulas.

## Example — Derive cos²θ − sin²θ = cos(2θ)

Use Euler's formula:

$$
\begin{aligned}
\cos^2\theta-\sin^2\theta
&=\left(\frac{\mathrm{e}^{\mathrm{i}\theta}+\mathrm{e}^{-\mathrm{i}\theta}}{2}\right)^2
-\left(\frac{\mathrm{e}^{\mathrm{i}\theta}-\mathrm{e}^{-\mathrm{i}\theta}}{2\mathrm{i}}\right)^2\\
&=\frac{\mathrm{e}^{2\mathrm{i}\theta}+2+\mathrm{e}^{-2\mathrm{i}\theta}}{4}
+\frac{\mathrm{e}^{2\mathrm{i}\theta}-2+\mathrm{e}^{-2\mathrm{i}\theta}}{4}\\
&=\frac{\mathrm{e}^{2\mathrm{i}\theta}+\mathrm{e}^{-2\mathrm{i}\theta}}{2}
=\cos(2\theta).
\end{aligned}
$$

Euler's formula makes the polar form compact:

$$
z=r\mathrm{e}^{\mathrm{i}\theta},\qquad r=|z|,\quad\theta=\arg(z).
$$

The product becomes

$$
z_1z_2=r_1\mathrm{e}^{\mathrm{i}\theta_1}\cdot r_2\mathrm{e}^{\mathrm{i}\theta_2}
=r_1r_2\mathrm{e}^{\mathrm{i}(\theta_1+\theta_2)}.
$$

## Example — Euler's identity

For $\theta=\pi$,

$$
\mathrm{e}^{\mathrm{i}\pi}=\cos\pi+\mathrm{i}\sin\pi
=-1+\mathrm{i}\cdot0=-1.
$$

Thus, $\mathrm{e}^{\mathrm{i}\pi}+1=0$. This identity connects five fundamental mathematical constants: $\mathrm{e}$, $\mathrm{i}$, $\pi$, $1$, and $0$. It follows directly from Euler's formula.

## Conditions behind the series proof

In this proof, define the complex exponential by its power series. The ratio of successive absolute terms is $|\theta|/(n+1)$, which tends to zero. The series therefore converges absolutely for every real $\theta$. This is the reason we can separate its even and odd terms without changing its sum. Substitution into a formula stated only for real inputs would not, by itself, justify a complex extension.

The choice of even and odd powers is useful because even powers of $\mathrm{i}$ are real and odd powers are imaginary. They produce the cosine and sine series directly. The argument establishes an exact identity, not a small-angle approximation.

Conjugating the identity gives $\mathrm{e}^{-\mathrm{i}\theta}=\cos\theta-\mathrm{i}\sin\theta$, so

$$
|\mathrm{e}^{\mathrm{i}\theta}|^2=\cos^2\theta+\sin^2\theta=1.
$$

Thus an imaginary exponential changes angle without changing magnitude. Check $\theta=0$ and $\theta=\pi/2$: the values are $1$ and $\mathrm{i}$. To reuse the method, derive the sine addition formula from the imaginary parts of $\mathrm{e}^{\mathrm{i}(\alpha+\beta)}=\mathrm{e}^{\mathrm{i}\alpha}\mathrm{e}^{\mathrm{i}\beta}$. The exponential product law follows independently from the absolutely convergent series, so it need not assume the trigonometric addition formulas being derived.
