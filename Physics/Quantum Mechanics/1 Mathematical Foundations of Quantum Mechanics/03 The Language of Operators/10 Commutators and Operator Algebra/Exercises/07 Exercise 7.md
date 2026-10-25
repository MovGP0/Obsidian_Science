---
title: "Coherent states and minimum uncertainty"
---

> [!TLDR]
> A coherent state is normalized, is an annihilation-operator eigenstate, and has the minimum position–momentum uncertainty product.

Chapter 10 — Commutators and Operator Algebra · Exercise 7 · Challenge.

Back to [[10 Commutators and Operator Algebra/08 Exercises|Chapter 10 exercises]].

## Question

A **coherent state** $|\alpha\rangle$ is an eigenstate of the annihilation operator:

$$
\hat a|\alpha\rangle=\signal{\alpha}|\alpha\rangle,
\qquad\signal{\alpha}\in\mathbb C.
$$

**(a)** Use $[\hat a,\hat a^\dagger]=1$ to calculate $[\hat a,(\hat a^\dagger)^n]$.

**(b)** Show that

$$
|\alpha\rangle=e^{-|\signal{\alpha}|^2/2}
\sum_{n=0}^{\infty}\frac{\signal{\alpha}^n}{\sqrt{n!}}|n\rangle
$$

is normalized.

**(c)** Verify that this state satisfies $\hat a|\alpha\rangle=\signal{\alpha}|\alpha\rangle$.

**(d)** Calculate $\mechanical{\Delta x}\,\mechanical{\Delta p}$ for this state and show that it saturates the Heisenberg bound.

> [!note]
> Coherent states describe an idealized form of laser light and have many classical features within quantum mechanics. The source calls them the “most classical” quantum states.

## Worked solution

### (a) The commutator with a creation-operator power

For $n=1$, the required relation is $[\hat a,\hat a^\dagger]=\hat I$. Assume it holds for some $n\geq1$. The product rule then gives

$$
\begin{aligned}
[\hat a,(\hat a^\dagger)^{n+1}]
&=[\hat a,(\hat a^\dagger)^n]\hat a^\dagger
+(\hat a^\dagger)^n[\hat a,\hat a^\dagger]\\
&=n(\hat a^\dagger)^{n-1}\hat a^\dagger+(\hat a^\dagger)^n\hat I\\
&=(n+1)(\hat a^\dagger)^n.
\end{aligned}
$$

Thus $[\hat a,(\hat a^\dagger)^n]=n(\hat a^\dagger)^{n-1}$ for $n\geq1$; for $n=0$ it is zero. Acting on the vacuum also gives $\hat a|n\rangle=\sqrt n|n-1\rangle$.

### (b) Normalization

The number states are orthonormal: $\langle r|n\rangle=\delta_{rn}$. Take the adjoint of the proposed series and multiply it by the original series:

$$
\begin{aligned}
\langle\alpha|\alpha\rangle
&=e^{-|\signal{\alpha}|^2}
\sum_{r,n=0}^{\infty}
\frac{(\signal{\alpha}^*)^r\signal{\alpha}^n}{\sqrt{r!n!}}\langle r|n\rangle\\
&=e^{-|\signal{\alpha}|^2}
\sum_{n=0}^{\infty}\frac{|\signal{\alpha}|^{2n}}{n!}\\
&=e^{-|\signal{\alpha}|^2}e^{|\signal{\alpha}|^2}=1.
\end{aligned}
$$

Orthonormality removes all cross terms. The remaining series is the exponential series, which converges for every finite complex amplitude.

### (c) The annihilation eigenvalue

Apply the lowering rule term by term. The $n=0$ term vanishes because $\hat a|0\rangle=0$:

$$
\begin{aligned}
\hat a|\alpha\rangle
&=e^{-|\signal{\alpha}|^2/2}\sum_{n=1}^{\infty}
\frac{\signal{\alpha}^n\sqrt n}{\sqrt{n!}}|n-1\rangle\\
&=\signal{\alpha}e^{-|\signal{\alpha}|^2/2}\sum_{n=1}^{\infty}
\frac{\signal{\alpha}^{n-1}}{\sqrt{(n-1)!}}|n-1\rangle\\
&=\signal{\alpha}e^{-|\signal{\alpha}|^2/2}\sum_{r=0}^{\infty}
\frac{\signal{\alpha}^{r}}{\sqrt{r!}}|r\rangle
=\signal{\alpha}|\alpha\rangle.
\end{aligned}
$$

The second line uses $n!=n(n-1)!$; the third line sets $r=n-1$.

### (d) First moments, second moments, and variances

For oscillator mass $\mechanical{m}>0$ and angular frequency $\signal{\omega}>0$, invert the ladder-operator definitions:

$$
\hat x=\sqrt{\frac{\mechanical{\hbar}}{2\mechanical{m}\signal{\omega}}}(\hat a+\hat a^\dagger),
\qquad
\hat p=-i\sqrt{\frac{\mechanical{m}\signal{\omega}\mechanical{\hbar}}2}(\hat a-\hat a^\dagger).
$$

In the following equations, every expectation is in the normalized state $|\alpha\rangle$. Part (c) and its adjoint give

$$
\langle\hat a\rangle=\signal{\alpha},\quad
\langle\hat a^\dagger\rangle=\signal{\alpha}^*,\quad
\langle\hat a^2\rangle=\signal{\alpha}^2,\quad
\langle(\hat a^\dagger)^2\rangle=(\signal{\alpha}^*)^2.
$$

For the mixed products, apply the eigenvalue to the ket and its conjugate to the bra. Then use the commutator to reverse the other product:

$$
\langle\hat a^\dagger\hat a\rangle=|\signal{\alpha}|^2,
\qquad
\langle\hat a\hat a^\dagger\rangle
=\langle\hat a^\dagger\hat a+\hat I\rangle
=|\signal{\alpha}|^2+1.
$$

The first moments are therefore

$$
\begin{aligned}
\langle\hat x\rangle
&=\sqrt{\frac{\mechanical{\hbar}}{2\mechanical{m}\signal{\omega}}}
(\signal{\alpha}+\signal{\alpha}^*),\\
\langle\hat p\rangle
&=-i\sqrt{\frac{\mechanical{m}\signal{\omega}\mechanical{\hbar}}2}
(\signal{\alpha}-\signal{\alpha}^*).
\end{aligned}
$$

Expand the square of each operator without changing the order of mixed terms:

$$
\begin{aligned}
\langle\hat x^2\rangle
&=\frac{\mechanical{\hbar}}{2\mechanical{m}\signal{\omega}}
\langle\hat a^2+\hat a\hat a^\dagger+\hat a^\dagger\hat a+(\hat a^\dagger)^2\rangle\\
&=\frac{\mechanical{\hbar}}{2\mechanical{m}\signal{\omega}}
\left[\signal{\alpha}^2+(\signal{\alpha}^*)^2+2|\signal{\alpha}|^2+1\right],\\
\langle\hat p^2\rangle
&=-\frac{\mechanical{m}\signal{\omega}\mechanical{\hbar}}2
\langle\hat a^2-\hat a\hat a^\dagger-\hat a^\dagger\hat a+(\hat a^\dagger)^2\rangle\\
&=\frac{\mechanical{m}\signal{\omega}\mechanical{\hbar}}2
\left[-\signal{\alpha}^2-(\signal{\alpha}^*)^2+2|\signal{\alpha}|^2+1\right].
\end{aligned}
$$

Subtract the squares of the means. The amplitude terms cancel because $(\signal{\alpha}+\signal{\alpha}^*)^2=\signal{\alpha}^2+(\signal{\alpha}^*)^2+2|\signal{\alpha}|^2$ and $-(\signal{\alpha}-\signal{\alpha}^*)^2=-\signal{\alpha}^2-(\signal{\alpha}^*)^2+2|\signal{\alpha}|^2$:

$$
\begin{aligned}
(\mechanical{\Delta x})^2
&=\langle\hat x^2\rangle-\langle\hat x\rangle^2
=\frac{\mechanical{\hbar}}{2\mechanical{m}\signal{\omega}},\\
(\mechanical{\Delta p})^2
&=\langle\hat p^2\rangle-\langle\hat p\rangle^2
=\frac{\mechanical{m}\signal{\omega}\mechanical{\hbar}}2.
\end{aligned}
$$

Take the positive square roots and multiply:

$$
\mechanical{\Delta x}\mechanical{\Delta p}
=\sqrt{\frac{\mechanical{\hbar}}{2\mechanical{m}\signal{\omega}}}
\sqrt{\frac{\mechanical{m}\signal{\omega}\mechanical{\hbar}}2}
=\frac{\mechanical{\hbar}}2.
$$

The Heisenberg inequality requires a product at least $\mechanical{\hbar}/2$. Equality holds for every coherent-state amplitude.

## Answer

$$
[\hat a,(\hat a^\dagger)^n]=n(\hat a^\dagger)^{n-1}\quad(n\geq1),
\qquad
\langle\alpha|\alpha\rangle=1,
\qquad
\hat a|\alpha\rangle=\signal{\alpha}|\alpha\rangle.
$$

$$
\mechanical{\Delta x}=\sqrt{\frac{\mechanical{\hbar}}{2\mechanical{m}\signal{\omega}}},
\qquad
\mechanical{\Delta p}=\sqrt{\frac{\mechanical{m}\signal{\omega}\mechanical{\hbar}}2},
\qquad
\boxed{\mechanical{\Delta x}\mechanical{\Delta p}=\frac{\mechanical{\hbar}}2}.
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\alpha}$ | $1$ | Coherent-state amplitude | The complex annihilation-operator eigenvalue. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The oscillator mass. |
| $\signal{\omega}$ | $\unit{s^{-1}}$ | Angular frequency | The oscillator angular frequency. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant in the uncertainty bound. |
| $\langle\hat x\rangle$ | $\unit{m}$ | Mean position | The coherent-state position expectation. |
| $\langle\hat p\rangle$ | $\unit{kg\,m\,s^{-1}}$ | Mean momentum | The coherent-state momentum expectation. |
| $\langle\hat x^2\rangle$ | $\unit{m^2}$ | Second position moment | The expectation of squared position. |
| $\langle\hat p^2\rangle$ | $\unit{kg^2\,m^2\,s^{-2}}$ | Second momentum moment | The expectation of squared momentum. |
| $\mechanical{\Delta x}$ | $\unit{m}$ | Position uncertainty | The standard deviation of position. |
| $\mechanical{\Delta p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum uncertainty | The standard deviation of momentum. |
