---
title: "Proof of the complex triangle inequality"
---

> [!TLDR]
> Expand the squared modulus and bound its cross term to obtain the triangle inequality.

Chapter 1 — Complex Numbers. Exercise 8. **Difficulty: Intermediate.**

Back to [[01 Complex Numbers/09 Exercises#Exercise 8|the chapter exercise index]].

## Question

Prove the triangle inequality $|z_1+z_2|\le|z_1|+|z_2|$.

*Hint:* calculate $|z_1+z_2|^2=(z_1+z_2)(z_1^*+z_2^*)$ and use $\operatorname{Re}(w)\le|w|$ for every $w\in\mathbb{C}$.

## Worked solution

The square of a modulus removes its square root and allows direct expansion. Use the hint:

$$
\begin{aligned}
|z_1+z_2|^2
&=(z_1+z_2)(z_1^*+z_2^*)\\
&=z_1z_1^*+z_2z_2^*+z_1z_2^*+z_2z_1^*\\
&=|z_1|^2+|z_2|^2+2\operatorname{Re}(z_1z_2^*).
\end{aligned}
$$

The last two products are conjugates of each other, so their sum is twice the real part of either one.

For $w=u+\mathrm{i}v$,

$$
\operatorname{Re}(w)=u\le |u|\le\sqrt{u^2+v^2}=|w|.
$$

Also, $|z_1z_2^*|=|z_1||z_2^*|=|z_1||z_2|$. Therefore

$$
\begin{aligned}
|z_1+z_2|^2
&\le |z_1|^2+|z_2|^2+2|z_1||z_2|\\
&=(|z_1|+|z_2|)^2.
\end{aligned}
$$

Both sides to be compared are nonnegative. The square-root function preserves order on nonnegative inputs, so taking square roots proves the result.

> [!note]
> Equality holds when either number is zero or when both nonzero numbers have the same argument. In that case their vectors point in the same direction, and their lengths add directly.

### Locate the only possible strict inequality

The expansion and factorization are equalities. The only possible loss occurs when $\operatorname{Re}(z_1z_2^*)$ is replaced by $|z_1z_2^*|$. For nonzero inputs this is equality precisely when $z_1z_2^*$ is positive real, which means the two arguments agree modulo $2\pi$. This explains the equality condition from the proof rather than from the drawing alone.

With $z_1=1$ and $z_2=-1$, the real cross term is negative and cancellation is complete. With $z_2=\mathrm{i}$ it is zero and the resultant modulus is $\sqrt2$, strictly less than two. These cases show why the theorem is an upper bound, not an instruction to add magnitudes. In amplitude calculations, phase can reduce the magnitude of a sum even when neither contribution is small.

## Answer

$$
\boxed{|z_1+z_2|\le |z_1|+|z_2|.}
$$
