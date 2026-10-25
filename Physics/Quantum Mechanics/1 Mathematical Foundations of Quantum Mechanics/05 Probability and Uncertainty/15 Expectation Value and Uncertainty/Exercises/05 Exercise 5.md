---
title: "Interference in a box"
---

> [!TLDR]
> The mean position oscillates at the energy-gap frequency, and equal state probabilities give the largest amplitude.

Chapter 15: [[00 Expectation Value and Uncertainty|Expectation Value, Variance, and Quantum Uncertainty]] · Exercise 5 · **Intermediate level**

Back to [[15 Expectation Value and Uncertainty/08 Exercises|Chapter 15 exercises]].

## Question

Let the initial state be

$$
|\psi(0)\rangle=c_1|1\rangle+c_2|2\rangle,
\qquad|c_1|^2+|c_2|^2=1.
$$

(a) Calculate $\langle\hat x\rangle(\signal{t})$. Show that its interference term oscillates with angular frequency $(\energy{E_2}-\energy{E_1})/\mechanical{\hbar}$.

(b) Express the initial phase of the oscillation in terms of $c_1$ and $c_2$.

(c) Which choice of $c_1$ and $c_2$ gives the largest oscillation amplitude?

## Worked solution

Use the real box eigenfunctions $\signal{\psi_n}(\mechanical{x})=\sqrt{2/\mechanical{L}}\sin(n\pi\mechanical{x}/\mechanical{L})$ with $\mechanical{L}>0$. This fixes the phase convention of $|1\rangle$ and $|2\rangle$. The box energies are $\energy{E_n}=n^2\pi^2\mechanical{\hbar}^2/(2\mechanical{m}\mechanical{L}^2)$.

### (a) The diagonal terms and the interference term

Time evolution gives

$$
|\psi(\signal{t})\rangle
=c_1e^{-i\energy{E_1}\signal{t}/\mechanical{\hbar}}|1\rangle
+c_2e^{-i\energy{E_2}\signal{t}/\mechanical{\hbar}}|2\rangle.
$$

Expand the expectation into four terms. The diagonal matrix elements are both $\mechanical{L}/2$ by reflection symmetry. The off-diagonal elements are real and equal, since the eigenfunctions are real and position is Hermitian:

$$
\begin{aligned}
\langle\hat x\rangle(\signal{t})
={}&|c_1|^2\frac{\mechanical{L}}2+|c_2|^2\frac{\mechanical{L}}2\\
&+2\operatorname{Re}\left[c_1^*c_2\langle1|\hat x|2\rangle
e^{-i(\energy{E_2}-\energy{E_1})\signal{t}/\mechanical{\hbar}}\right].
\end{aligned}
$$

Calculate the cross matrix element with $2\sin u\sin v=\cos(u-v)-\cos(u+v)$:

$$
\begin{aligned}
\langle1|\hat x|2\rangle
&=\frac2{\mechanical{L}}\int_0^{\mechanical{L}}\mechanical{x}
\sin\left(\frac{\pi\mechanical{x}}{\mechanical{L}}\right)
\sin\left(\frac{2\pi\mechanical{x}}{\mechanical{L}}\right)\,d\mechanical{x}\\
&=\frac1{\mechanical{L}}\int_0^{\mechanical{L}}\mechanical{x}
\left[\cos\left(\frac{\pi\mechanical{x}}{\mechanical{L}}\right)
-\cos\left(\frac{3\pi\mechanical{x}}{\mechanical{L}}\right)\right]d\mechanical{x}.
\end{aligned}
$$

For a nonzero wave number $\signal{k}$, integration by parts gives

$$
\int_0^{\mechanical{L}}\mechanical{x}\cos(\signal{k}\mechanical{x})\,d\mechanical{x}
=\left[\frac{\mechanical{x}\sin(\signal{k}\mechanical{x})}{\signal{k}}
+\frac{\cos(\signal{k}\mechanical{x})}{\signal{k}^2}\right]_0^{\mechanical{L}}.
$$

For $\signal{k}=\pi/\mechanical{L}$ this is $-2\mechanical{L}^2/\pi^2$; for $\signal{k}=3\pi/\mechanical{L}$ it is $-2\mechanical{L}^2/(9\pi^2)$. Thus

$$
\langle1|\hat x|2\rangle
=\frac1{\mechanical{L}}\left(-\frac{2\mechanical{L}^2}{\pi^2}
+\frac{2\mechanical{L}^2}{9\pi^2}\right)
=-\frac{16\mechanical{L}}{9\pi^2}.
$$

Define the transition angular frequency by

$$
\signal{\Omega}=\frac{\energy{E_2}-\energy{E_1}}{\mechanical{\hbar}}
=\frac{3\pi^2\mechanical{\hbar}}{2\mechanical{m}\mechanical{L}^2}
=3\signal{\omega},
\qquad\signal{\omega}=\frac{\pi^2\mechanical{\hbar}}{2\mechanical{m}\mechanical{L}^2}.
$$

Normalization reduces the diagonal terms to $\mechanical{L}/2$. Therefore,

$$
\langle\hat x\rangle(\signal{t})
=\frac{\mechanical{L}}2-\frac{32\mechanical{L}}{9\pi^2}
\operatorname{Re}(c_1^*c_2e^{-i\signal{\Omega}\signal{t}}).
$$

The phase difference, rather than either absolute energy phase, sets the interference frequency.

### (b) Initial phase and its sign convention

When both coefficients are nonzero, write $c_j=|c_j|e^{i\theta_j}$ and let $\signal{\varphi}=\theta_2-\theta_1=\arg(c_1^*c_2)$, modulo $2\pi$. Then

$$
\operatorname{Re}(c_1^*c_2e^{-i\signal{\Omega}\signal{t}})
=|c_1c_2|\cos(\signal{\Omega}\signal{t}-\signal{\varphi}),
$$

$$
\langle\hat x\rangle(\signal{t})
=\frac{\mechanical{L}}2-\mechanical{A}\cos(\signal{\Omega}\signal{t}-\signal{\varphi}),
\qquad\mechanical{A}=\frac{32\mechanical{L}}{9\pi^2}|c_1c_2|.
$$

This formula keeps the negative cross matrix element explicit. If the convention is $\mechanical{L}/2+\mechanical{A}\cos(\signal{\Omega}\signal{t}+\signal{\delta})$ with positive amplitude, then $\signal{\delta}=\pi-\signal{\varphi}$ modulo $2\pi$. If either coefficient is zero, the oscillation amplitude is zero and its phase is undefined. A common overall phase on both coefficients does not change the result.

### (c) Largest amplitude

Set $u=|c_1|^2$ and use $|c_2|^2=1-u$. Then

$$
|c_1c_2|^2=u(1-u)=\frac14-\left(u-\frac12\right)^2\leq\frac14.
$$

Equality holds only when both squared moduli are $1/2$. Hence

$$
|c_1|=|c_2|=\frac1{\sqrt2},\qquad
\mechanical{A_{\max}}=\frac{16\mechanical{L}}{9\pi^2}.
$$

The relative phase can have any value. It sets the starting point in the cycle and does not change the amplitude.

## Answer

$$
\boxed{\langle\hat x\rangle(\signal{t})=\frac{\mechanical{L}}2
-\frac{32\mechanical{L}}{9\pi^2}|c_1c_2|
\cos(\signal{\Omega}\signal{t}-\signal{\varphi}),\quad
\signal{\Omega}=\frac{\energy{E_2}-\energy{E_1}}{\mechanical{\hbar}}.}
$$

Here $\signal{\varphi}=\arg(c_1^*c_2)$ for nonzero coefficients. The largest amplitude is $\mechanical{A_{\max}}=16\mechanical{L}/(9\pi^2)$, reached when $|c_1|=|c_2|=1/\sqrt2$. If one coefficient is zero, the mean is constant and no oscillation phase is defined.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$, $\mechanical{L}$, $\langle\hat x\rangle$, $\langle1\vert\hat x\vert2\rangle$ | $\unit{m}$ | Position and length | The coordinate, box length, mean, and cross matrix element. |
| $\mechanical{A}$, $\mechanical{A_{\max}}$ | $\unit{m}$ | Oscillation amplitude | The amplitude and its maximum value. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The mass of the particle in the box. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale in evolution and energy levels. |
| $\energy{E_n}$, $\energy{E_1}$, $\energy{E_2}$ | $\unit{J}$ | Energy | The box energy levels. |
| $\signal{t}$ | $\unit{s}$ | Time | The elapsed evolution time. |
| $\signal{\Omega}$, $\signal{\omega}$ | $\unit{s^{-1}}$ | Angular frequency | The transition frequency and the box frequency scale. |
| $\signal{k}$ | $\unit{m^{-1}}$ | Wave number | The spatial frequency in the cross integral. |
| $\signal{\varphi}$, $\signal{\delta}$, $\theta_j$ | $\unit{1}$ | Phase | The relative phase, cosine offset, and coefficient phases in radians. |
| $c_1$, $c_2$ | $\unit{1}$ | Probability amplitude | The initial coefficients of the two energy states. |
| $\signal{\psi_n}$ | $\unit{m^{-1/2}}$ | Wavefunction | A normalized box eigenfunction. |
