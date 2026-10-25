---
title: "Normalization and expansion of a parabolic box state"
---

> [!TLDR]
> A normalized parabolic box state has only odd sine coefficients, which decrease as the inverse cube of the basis index.

Chapter 8 — Hilbert Space · Exercise 6 · Intermediate level

Back to [[08 Hilbert Space/09 Exercises|Chapter 8 exercises]].

## Question

At time $\signal{t}=0$, the state of a particle in the box $[0,\mechanical{L}]$ is

$$
\signal{\psi}(\mechanical{x},0)=\signal{A}\mechanical{x}(\mechanical{L}-\mechanical{x}).
$$

**(a)** Determine $\signal{A}$ from normalization.

**(b)** Calculate the coefficients $c_n=\langle\phi_n|\psi\rangle$ in the box basis.

**(c)** Verify numerically that

$$
\sum_{n=1}^{10}|c_n|^2\approx1.
$$

The first terms dominate the sum.

## Worked solution

### (a) Normalize the initial wavefunction

Normalization requires that the total position probability be one:

$$
1=\int_0^{\mechanical{L}}|\signal{\psi}(\mechanical{x},0)|^2\,d\mechanical{x}
=|\signal{A}|^2\int_0^{\mechanical{L}}\mechanical{x}^2(\mechanical{L}-\mechanical{x})^2\,d\mechanical{x}.
$$

Expand the polynomial to evaluate every term:

$$
\begin{aligned}
\int_0^{\mechanical{L}}\mechanical{x}^2(\mechanical{L}-\mechanical{x})^2\,d\mechanical{x}
&=\int_0^{\mechanical{L}}(\mechanical{L}^2\mechanical{x}^2-2\mechanical{L}\mechanical{x}^3+\mechanical{x}^4)\,d\mechanical{x}\\
&=\left[\frac{\mechanical{L}^2\mechanical{x}^3}3-\frac{\mechanical{L}\mechanical{x}^4}2+\frac{\mechanical{x}^5}5\right]_0^{\mechanical{L}}\\
&=\mechanical{L}^5\left(\frac13-\frac12+\frac15\right)=\frac{\mechanical{L}^5}{30}.
\end{aligned}
$$

Thus $|\signal{A}|=\sqrt{30/\mechanical{L}^5}$. Normalization fixes only the magnitude. Choose a zero global phase, so

$$
\signal{A}=\sqrt{\frac{30}{\mechanical{L}^5}}.
$$

Any constant phase multiplying this value gives the same pure physical state.

### (b) Calculate the box-basis coefficients

The normalized box wavefunctions are

$$
\signal{\phi_n}(\mechanical{x})=\sqrt{\frac2{\mechanical{L}}}\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right),
\qquad n=1,2,\ldots.
$$

They are real. Projecting onto them gives

$$
c_n=\sqrt{\frac2{\mechanical{L}}}\signal{A}
\int_0^{\mechanical{L}}\mechanical{x}(\mechanical{L}-\mechanical{x})\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)\,d\mechanical{x}.
$$

Use the dimensionless helper $u=\mechanical{x}/\mechanical{L}$ and write $a=n\pi$. Then $d\mechanical{x}=\mechanical{L}\,du$ and the two position factors supply $\mechanical{L}^2$. Consequently,

$$
c_n=\sqrt{\frac2{\mechanical{L}}}\signal{A}\mechanical{L}^3J_n,
\qquad
J_n=\int_0^1u(1-u)\sin(au)\,du.
$$

The letters $a$, $u$, and $J_n$ are mathematical helpers. Integrate by parts. The polynomial is zero at both endpoints, so the first boundary term vanishes:

$$
\begin{aligned}
J_n
&=\left[-\frac{u(1-u)\cos(au)}a\right]_0^1
+\frac1a\int_0^1(1-2u)\cos(au)\,du\\
&=\frac1a\left[\frac{(1-2u)\sin(au)}a\right]_0^1
+\frac2{a^2}\int_0^1\sin(au)\,du.
\end{aligned}
$$

Since $a=n\pi$, the second boundary term also vanishes. The remaining integral is elementary:

$$
J_n=\frac2{a^2}\left[-\frac{\cos(au)}a\right]_0^1
=\frac{2(1-\cos a)}{a^3}
=\frac{2(1-(-1)^n)}{n^3\pi^3}.
$$

The length factors cancel in the prefactor:

$$
\sqrt{\frac2{\mechanical{L}}}\sqrt{\frac{30}{\mechanical{L}^5}}\mechanical{L}^3=\sqrt{60}.
$$

Therefore,

$$
c_n=\frac{2\sqrt{60}(1-(-1)^n)}{n^3\pi^3}
=\begin{cases}
\dfrac{4\sqrt{60}}{n^3\pi^3},&n\text{ odd},\\
0,&n\text{ even}.
\end{cases}
$$

The parabolic state is symmetric about $\mechanical{L}/2$. The even-indexed sine functions are antisymmetric about that point, so their overlap must be zero. This gives an independent check of the parity factor.

### (c) Sum the first ten indexed probabilities

The Born probability is

$$
|c_n|^2=\begin{cases}
\dfrac{960}{n^6\pi^6},&n\text{ odd},\\
0,&n\text{ even}.
\end{cases}
$$

The nonzero terms with $1\leq n\leq10$ are:

| Basis index $n$ | Probability $\lvert c_n\rvert^2$ |
| --- | --- |
| $1$ | $0.998555014364$ |
| $3$ | $0.001369759965$ |
| $5$ | $0.000063907521$ |
| $7$ | $0.000008487578$ |
| $9$ | $0.000001878957$ |

Use the full values before rounding the sum:

$$
\begin{aligned}
\sum_{n=1}^{10}|c_n|^2
&=\frac{960}{\pi^6}\left(1+\frac1{3^6}+\frac1{5^6}+\frac1{7^6}+\frac1{9^6}\right)\\
&\approx0.999999048.
\end{aligned}
$$

The omitted probability is about $9.52\times10^{-7}$. The first state alone carries about $99.8555\%$ of the probability. The inverse sixth power makes later probabilities small.

As an exact check, the full odd reciprocal-power sum is $\sum_{k=0}^{\infty}(2k+1)^{-6}=\pi^6/960$. It gives a total probability of one, as normalization requires.

> [!note]
> The supplied solution gives the loose estimate $0.9999$. Direct evaluation of the first ten indexed terms gives $0.999999048$; this is the value used here. The first ten indices contain five nonzero odd terms, not ten nonzero terms.

## Answer

**(a)** Choose $\signal{A}=\sqrt{30/\mechanical{L}^5}$, up to an arbitrary global phase.

**(b)** $c_n=4\sqrt{60}/(n^3\pi^3)$ for odd $n$ and $c_n=0$ for even $n$, with the stated phase choice.

**(c)** $\sum_{n=1}^{10}|c_n|^2\approx0.999999048$, so the first ten indexed states contain almost all the probability.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$ | $\unit{m}$ | Position | The particle coordinate inside the box. |
| $\mechanical{L}$ | $\unit{m}$ | Box length | The length of the confinement interval. |
| $\signal{t}$ | $\unit{s}$ | Time | The initial time is zero. |
| $\signal{\psi}$, $\signal{\phi_n}$ | $\unit{m^{-1/2}}$ | Wavefunction | The initial and basis position amplitudes. |
| $\signal{A}$ | $\unit{m^{-5/2}}$ | Wavefunction coefficient | The factor that normalizes the parabolic state. |
| $c_n$ | $1$ | Probability amplitude | The coefficient of the $n$th box state. |
| $\lvert c_n\rvert^2$ | $1$ | Probability | The probability of the $n$th box state. |
