---
title: "Composition of spatial translations"
---

> [!TLDR]
> Two spatial translations add their displacements and commute with each other.

Chapter: [[11 Unitary Operators/00 Unitary Operators|Chapter 11 — Unitary Operators]]. Exercise 2. Difficulty: **Basic level**.

Back to [[11 Unitary Operators/08 Exercises#Exercise 2|Chapter 11 exercise index]].

## Question

Verify

$$
\hat T(\mechanical{a})\hat T(\mechanical{b})=\hat T(\mechanical{a}+\mechanical{b}).
$$

What does this mean physically?

## Worked solution

Use the active-translation convention from the chapter:

$$
\hat T(\mechanical{a})\signal{\psi}(\mechanical{x})
=\signal{\psi}(\mechanical{x}-\mechanical{a}).
$$

Apply the rightmost operator first. For an arbitrary wavefunction,

$$
\begin{aligned}
\hat T(\mechanical{a})\hat T(\mechanical{b})\signal{\psi}(\mechanical{x})
&=\hat T(\mechanical{a})\signal{\psi}(\mechanical{x}-\mechanical{b})\\
&=\signal{\psi}(\mechanical{x}-\mechanical{a}-\mechanical{b})\\
&=\hat T(\mechanical{a}+\mechanical{b})\signal{\psi}(\mechanical{x}).
\end{aligned}
$$

The equality holds on every state in the translation representation, so it is an operator equality. An equivalent check uses the momentum generator:

$$
\hat T(\mechanical{a})=e^{-i\mechanical{a}\hat p/\mechanical{\hbar}},
\qquad
e^{-i\mechanical{a}\hat p/\mechanical{\hbar}}e^{-i\mechanical{b}\hat p/\mechanical{\hbar}}
=e^{-i(\mechanical{a}+\mechanical{b})\hat p/\mechanical{\hbar}}.
$$

The exponents commute because they are multiples of the same generator. Physically, a displacement by $\mechanical{b}$ followed by one by $\mechanical{a}$ gives the total displacement $\mechanical{a}+\mechanical{b}$. Reversing their order gives the same final state. These spatial translations form an Abelian group, with identity $\hat T(0)=\hat I$ and inverse $\hat T(-\mechanical{a})$.

## Answer

$$
\hat T(\mechanical{a})\hat T(\mechanical{b})=\hat T(\mechanical{a}+\mechanical{b})=\hat T(\mechanical{b})\hat T(\mechanical{a}).
$$

Successive translations add their displacements; their order does not matter.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{a}$, $\mechanical{b}$ | $\unit{m}$ | Translation distance | The two spatial displacements. |
| $\mechanical{x}$ | $\unit{m}$ | Position | The coordinate at which the state is evaluated. |
| $\signal{\psi}$ | $\unit{m^{-1/2}}$ | Wavefunction | The one-dimensional position probability amplitude. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale in the translation operator. |
