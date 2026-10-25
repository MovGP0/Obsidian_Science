---
title: "Position matrix elements from completeness"
---

> [!TLDR]
> Insert the position identity on both sides of the position operator, then use the delta distribution to remove one integral.

Chapter 8 — Hilbert Space · Exercise 5 · Intermediate level

Back to [[08 Hilbert Space/09 Exercises|Chapter 8 exercises]].

## Question

Use the completeness relation

$$
\int_{-\infty}^{+\infty}|\mechanical{x}\rangle\langle\mechanical{x}|\,d\mechanical{x}=\hat I
$$

to show that

$$
\langle\psi|\hat x|\phi\rangle
=\int_{-\infty}^{+\infty}\signal{\psi}^*(\mechanical{x})\,
\mechanical{x}\,\signal{\phi}(\mechanical{x})\,d\mechanical{x}.
$$

**Hint:** Insert the resolution of the identity twice and use

$$
\langle\mechanical{x}|\hat x|\mechanical{x}'\rangle
=\mechanical{x}'\delta(\mechanical{x}-\mechanical{x}').
$$

## Worked solution

The position wavefunctions are the overlaps

$$
\signal{\psi}(\mechanical{x})=\langle\mechanical{x}|\psi\rangle,
\qquad
\signal{\phi}(\mechanical{x}')=\langle\mechanical{x}'|\phi\rangle.
$$

Thus $\langle\psi|\mechanical{x}\rangle=\signal{\psi}^*(\mechanical{x})$. Insert one identity to the left of $\hat x$ and an independent identity to the right. The prime distinguishes the two integration variables:

$$
\begin{aligned}
\langle\psi|\hat x|\phi\rangle
&=\langle\psi|\hat I\hat x\hat I|\phi\rangle\\
&=\int_{\mathbb R}d\mechanical{x}\int_{\mathbb R}d\mechanical{x}'\,
\langle\psi|\mechanical{x}\rangle
\langle\mechanical{x}|\hat x|\mechanical{x}'\rangle
\langle\mechanical{x}'|\phi\rangle.
\end{aligned}
$$

The generalized ket satisfies $\hat x|\mechanical{x}'\rangle=\mechanical{x}'|\mechanical{x}'\rangle$. Its overlap is $\langle\mechanical{x}|\mechanical{x}'\rangle=\delta(\mechanical{x}-\mechanical{x}')$. These two relations give the kernel in the hint:

$$
\langle\mechanical{x}|\hat x|\mechanical{x}'\rangle
=\mechanical{x}'\delta(\mechanical{x}-\mechanical{x}').
$$

Substitute the wavefunctions and kernel:

$$
\langle\psi|\hat x|\phi\rangle
=\int_{\mathbb R}d\mechanical{x}\,
\signal{\psi}^*(\mechanical{x})
\int_{\mathbb R}d\mechanical{x}'\,
\delta(\mechanical{x}-\mechanical{x}')\mechanical{x}'\signal{\phi}(\mechanical{x}').
$$

The delta distribution selects the factor at $\mechanical{x}'=\mechanical{x}$:

$$
\int_{\mathbb R}\delta(\mechanical{x}-\mechanical{x}')\mechanical{x}'\signal{\phi}(\mechanical{x}')\,d\mechanical{x}'
=\mechanical{x}\signal{\phi}(\mechanical{x}).
$$

Therefore,

$$
\boxed{\langle\psi|\hat x|\phi\rangle
=\int_{-\infty}^{\infty}\signal{\psi}^*(\mechanical{x})\mechanical{x}\signal{\phi}(\mechanical{x})\,d\mechanical{x}.}
$$

This shows why the position operator acts by multiplication in the position representation. The kets and their delta overlaps are generalized objects; an individual position ket is not a normalized L² vector.

> [!note]
> The matrix element requires a suitable operator domain. One sufficient condition is that $|\psi\rangle$ is in the Hilbert space and $|\phi\rangle$ is in the domain of $\hat x$, so $\int \mechanical{x}^2|\signal{\phi}(\mechanical{x})|^2\,d\mechanical{x}<\infty$. Cauchy–Schwarz then makes the final matrix-element integral finite.

## Answer

Two insertions of the position identity produce the kernel $\mechanical{x}'\delta(\mechanical{x}-\mechanical{x}')$. Its delta integral gives $\langle\psi|\hat x|\phi\rangle=\int\signal{\psi}^*(\mechanical{x})\mechanical{x}\signal{\phi}(\mechanical{x})\,d\mechanical{x}$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$, $\mechanical{x}'$ | $\unit{m}$ | Position | The two position coordinates in the kernel. |
| $\signal{\psi}$, $\signal{\phi}$ | $\unit{m^{-1/2}}$ | Wavefunction | The one-dimensional position probability amplitudes. |
