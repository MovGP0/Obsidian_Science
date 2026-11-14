---
title: "An eighth power from polar form"
---

> [!TLDR]
> Polar form converts the eighth power into a power of the modulus and a multiple of the argument.

Chapter 1 — Complex Numbers. Exercise 5. **Difficulty: Intermediate.**

Back to [[01 Complex Numbers/09 Exercises#Exercise 5|the chapter exercise index]].

## Question

Calculate $(1+\mathrm{i})^8$ by the fastest method. *Hint:* write $1+\mathrm{i}$ in exponential form.

## Worked solution

The modulus of $1+\mathrm{i}$ is $\sqrt2$ and its argument is $\pi/4$. Write

$$
1+\mathrm{i}=\sqrt2\,\mathrm{e}^{\mathrm{i}\pi/4}.
$$

For an integer power, raise the modulus to that power and multiply the angle by that integer:

$$
\begin{aligned}
(1+\mathrm{i})^8
&=(\sqrt2)^8\mathrm{e}^{8\mathrm{i}\pi/4}\\
&=2^4\mathrm{e}^{2\pi\mathrm{i}}\\
&=16(\cos2\pi+\mathrm{i}\sin2\pi)=16.
\end{aligned}
$$

The angle completes one full turn, so the result is positive and real. This avoids expansion of eight factors.

### An independent algebraic check

Repeated squaring gives $(1+\mathrm{i})^2=2\mathrm{i}$, $(1+\mathrm{i})^4=-4$, and $(1+\mathrm{i})^8=16$. This uses three products and confirms the phase calculation without a binomial expansion.

For transfer, predict $(1+\mathrm{i})^4$ before calculating it. Its angle is four times $\pi/4$, so it lies on the negative real axis, with modulus $(\sqrt2)^4=4$. The sign is fixed by the accumulated phase, not by the positivity of the initial real component. This is the same reason a sequence of phase factors in a quantum calculation must be multiplied before its final phase is interpreted.

## Answer

$$
\boxed{(1+\mathrm{i})^8=16.}
$$
