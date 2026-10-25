---
title: "Addition of two symmetric phasors"
---

> [!TLDR]
> The imaginary components cancel, and the two real components add to a positive real phasor.

Chapter 1 — Complex Numbers. Exercise 9. **Difficulty: Intermediate.**

Back to [[01 Complex Numbers/09 Exercises#Exercise 9|the chapter exercise index]].

## Question

Two signals have the phasors

$$
\signal{\widetilde A}_1=5\mathrm{e}^{\mathrm{i}\pi/6},
\qquad\signal{\widetilde A}_2=5\mathrm{e}^{-\mathrm{i}\pi/6}.
$$

Calculate the resultant phasor $\signal{\widetilde A}=\signal{\widetilde A}_1+\signal{\widetilde A}_2$. Give a geometric interpretation.

## Worked solution

Euler’s formula converts both phasors into Cartesian components:

$$
\begin{aligned}
\signal{\widetilde A}_1
&=5\left(\cos\frac\pi6+\mathrm{i}\sin\frac\pi6\right)
=\frac{5\sqrt3}{2}+\mathrm{i}\frac52,\\
\signal{\widetilde A}_2
&=5\left(\cos\frac\pi6-\mathrm{i}\sin\frac\pi6\right)
=\frac{5\sqrt3}{2}-\mathrm{i}\frac52.
\end{aligned}
$$

Add the components. The imaginary terms cancel because they are equal in size and opposite in sign:

$$
\begin{aligned}
\signal{\widetilde A}
&=\signal{\widetilde A}_1+\signal{\widetilde A}_2\\
&=\frac{5\sqrt3}{2}+\frac{5\sqrt3}{2}
+\mathrm{i}\left(\frac52-\frac52\right)\\
&=5\sqrt3=5\sqrt3\,\mathrm{e}^{\mathrm{i}0}.
\end{aligned}
$$

This is also the identity $5(\mathrm{e}^{\mathrm{i}\pi/6}+\mathrm{e}^{-\mathrm{i}\pi/6})=10\cos(\pi/6)$.

Geometrically, the two vectors have length 5 and phases $+30^\circ$ and $-30^\circ$. They are reflections in the real axis. The vertical components cancel, and the horizontal components add along the positive real axis. The resultant amplitude is less than 10 because the vectors do not point in the same direction.

## Answer

$$
\boxed{\signal{\widetilde A}=5\sqrt3\,\mathrm{e}^{\mathrm{i}0},
\qquad |\signal{\widetilde A}|=5\sqrt3,
\qquad \arg(\signal{\widetilde A})=0\pmod{2\pi}.}
$$

The amplitude has the same unit as the two original signal amplitudes.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\widetilde A}_1,\signal{\widetilde A}_2$ | — | Signal phasors | The two input amplitudes and phases; their unit depends on the signal. |
| $\signal{\widetilde A}$ | — | Resultant phasor | The sum of the two signal phasors, in the same unit. |
