---
title: "Complete analysis of the quantum harmonic oscillator"
---

> [!TLDR]
> Ladder operators give the oscillator moments and uncertainties; the ground-state condition gives a normalized Gaussian wavefunction.

Chapter 15: [[00 Expectation Value and Uncertainty|Expectation Value, Variance, and Quantum Uncertainty]] · Exercise 6 · **Challenge — final exercise of the book**

Back to [[15 Expectation Value and Uncertainty/08 Exercises|Chapter 15 exercises]].

## Question

The Hamiltonian and number operator are

$$
\hat H=\mechanical{\hbar}\signal{\omega}
\left(\hat N+\frac12\hat I\right),
\qquad
\hat N=\hat a^{\dagger}\hat a,
\qquad
[\hat a,\hat a^{\dagger}]=\hat I.
$$

The energy eigenstates are $|n\rangle$, with $n=0,1,2,\ldots$, and

$$
\energy{E_n}=\mechanical{\hbar}\signal{\omega}
\left(n+\frac12\right).
$$

Use the relations

$$
\hat a|n\rangle=\sqrt n\,|n-1\rangle,
\qquad
\hat a^{\dagger}|n\rangle=\sqrt{n+1}\,|n+1\rangle,
$$

and the position and momentum operators

$$
\hat x=\sqrt{\frac{\mechanical{\hbar}}
{2\mechanical{m}\signal{\omega}}}
(\hat a+\hat a^{\dagger}),
\qquad
\hat p=i\sqrt{\frac{\mechanical{m}\mechanical{\hbar}\signal{\omega}}2}
(\hat a^{\dagger}-\hat a).
$$

(a) Calculate $\langle n|\hat x|n\rangle$, $\langle n|\hat x^2|n\rangle$, and $\mechanical{\Delta x_n}$ in the eigenstate $|n\rangle$.

(b) Calculate $\langle n|\hat p|n\rangle$, $\langle n|\hat p^2|n\rangle$, and $\mechanical{\Delta p_n}$.

(c) Verify

$$
\mechanical{\Delta x_n}\,\mechanical{\Delta p_n}
=\mechanical{\hbar}\left(n+\frac12\right).
$$

For which $n$ is the uncertainty product smallest?

(d) Consider the initial state

$$
|\psi(0)\rangle=\frac1{\sqrt2}(|0\rangle+|1\rangle).
$$

Calculate $\langle\hat x\rangle(\signal{t})$. Show that it oscillates with the classical angular frequency $\signal{\omega}$.

(e) **For a further challenge:** calculate the ground-state wavefunction $\signal{\psi_0}(\mechanical{x})=\langle\mechanical{x}|0\rangle$.

*Hint:* impose $\hat a|0\rangle=0$ in the position representation. Obtain

$$
\left(
\frac{d}{d\mechanical{x}}
+\frac{\mechanical{m}\signal{\omega}\mechanical{x}}{\mechanical{\hbar}}
\right)\signal{\psi_0}=0,
$$

and solve this equation.

## Worked solution

Assume $\mechanical{m}>0$ and $\signal{\omega}>0$. The number states are orthonormal. This makes a matrix element zero whenever the operator changes $n$ to a different number.

### (a) Position moments

The linear terms connect only adjacent number states:

$$
\langle n|\hat a|n\rangle=\sqrt n\langle n|n-1\rangle=0,
\qquad
\langle n|\hat a^{\dagger}|n\rangle=\sqrt{n+1}\langle n|n+1\rangle=0.
$$

For $n=0$, the first expression vanishes directly because $\hat a|0\rangle=0$. Thus $\langle n|\hat x|n\rangle=0$. Square the position operator without changing the order of its factors:

$$
\hat x^2=\frac{\mechanical{\hbar}}{2\mechanical{m}\signal{\omega}}
\left(\hat a^2+\hat a\hat a^{\dagger}+\hat a^{\dagger}\hat a+(\hat a^{\dagger})^2\right).
$$

The squared ladder operators change $n$ by two and have zero diagonal expectation. For the other terms, use $\hat a^{\dagger}\hat a=\hat N$ and $\hat a\hat a^{\dagger}=\hat N+\hat I$:

$$
\langle n|\hat a^{\dagger}\hat a|n\rangle=n,
\qquad\langle n|\hat a\hat a^{\dagger}|n\rangle=n+1.
$$

Therefore,

$$
\langle n|\hat x^2|n\rangle
=\frac{\mechanical{\hbar}}{2\mechanical{m}\signal{\omega}}(2n+1),
\qquad
\mechanical{\Delta x_n}
=\sqrt{\frac{\mechanical{\hbar}(2n+1)}{2\mechanical{m}\signal{\omega}}}.
$$

The zero mean makes the second moment equal to the variance.

### (b) Momentum moments

The same adjacent-state argument gives $\langle n|\hat p|n\rangle=0$. The factor $i$ must also be squared:

$$
\hat p^2=-\frac{\mechanical{m}\mechanical{\hbar}\signal{\omega}}2
\left((\hat a^{\dagger})^2-\hat a^{\dagger}\hat a-\hat a\hat a^{\dagger}+\hat a^2\right).
$$

Only the two middle terms contribute to the diagonal expectation. Their signs cancel the leading minus sign:

$$
\begin{aligned}
\langle n|\hat p^2|n\rangle
&=-\frac{\mechanical{m}\mechanical{\hbar}\signal{\omega}}2(0-n-(n+1)+0)\\
&=\frac{\mechanical{m}\mechanical{\hbar}\signal{\omega}}2(2n+1),\\
\mechanical{\Delta p_n}
&=\sqrt{\frac{\mechanical{m}\mechanical{\hbar}\signal{\omega}(2n+1)}2}.
\end{aligned}
$$

### (c) Uncertainty product

Multiply the two positive square roots. The mass and frequency cancel:

$$
\begin{aligned}
\mechanical{\Delta x_n}\mechanical{\Delta p_n}
&=\sqrt{\frac{\mechanical{\hbar}(2n+1)}{2\mechanical{m}\signal{\omega}}
\frac{\mechanical{m}\mechanical{\hbar}\signal{\omega}(2n+1)}2}\\
&=\frac{\mechanical{\hbar}}2(2n+1)
=\mechanical{\hbar}\left(n+\frac12\right).
\end{aligned}
$$

Since $n\geq0$, the minimum within the number states is $\mechanical{\hbar}/2$ at $n=0$. This saturates the uncertainty bound. This statement does not exclude other states, such as coherent states, which also saturate the bound.

### (d) Mean motion of the two-state superposition

The two energies are $\energy{E_0}=\mechanical{\hbar}\signal{\omega}/2$ and $\energy{E_1}=3\mechanical{\hbar}\signal{\omega}/2$, so

$$
|\psi(\signal{t})\rangle
=\frac1{\sqrt2}\left(e^{-i\signal{\omega}\signal{t}/2}|0\rangle
+e^{-3i\signal{\omega}\signal{t}/2}|1\rangle\right).
$$

The diagonal position elements are zero. The ladder rules give

$$
\langle0|\hat x|1\rangle
=\sqrt{\frac{\mechanical{\hbar}}{2\mechanical{m}\signal{\omega}}}
\langle0|(\hat a+\hat a^{\dagger})|1\rangle
=\sqrt{\frac{\mechanical{\hbar}}{2\mechanical{m}\signal{\omega}}},
$$

because $\hat a|1\rangle=|0\rangle$ and $\hat a^{\dagger}|1\rangle=\sqrt2|2\rangle$. The reverse matrix element is the same real number. Thus

$$
\begin{aligned}
\langle\hat x\rangle(\signal{t})
&=\frac12\sqrt{\frac{\mechanical{\hbar}}{2\mechanical{m}\signal{\omega}}}
\left(e^{-i\signal{\omega}\signal{t}}+e^{i\signal{\omega}\signal{t}}\right)\\
&=\sqrt{\frac{\mechanical{\hbar}}{2\mechanical{m}\signal{\omega}}}
\cos(\signal{\omega}\signal{t}).
\end{aligned}
$$

The phase difference evolves at $(\energy{E_1}-\energy{E_0})/\mechanical{\hbar}=\signal{\omega}$. Two derivatives give $d^2\langle\hat x\rangle/d\signal{t}^2=-\signal{\omega}^2\langle\hat x\rangle$, the classical oscillator equation for the mean position. This describes the mean motion; it does not assert that the full superposed state's density translates rigidly.

### (e) Ground-state differential equation and normalization

Solve the position and momentum definitions for the lowering operator:

$$
\hat a=\sqrt{\frac{\mechanical{m}\signal{\omega}}{2\mechanical{\hbar}}}\hat x
+\frac{i}{\sqrt{2\mechanical{m}\mechanical{\hbar}\signal{\omega}}}\hat p.
$$

In the position representation, $\hat p=-i\mechanical{\hbar}\,d/d\mechanical{x}$. Imposing $\hat a|0\rangle=0$ therefore gives

$$
\left[\sqrt{\frac{\mechanical{m}\signal{\omega}}{2\mechanical{\hbar}}}\mechanical{x}
+\sqrt{\frac{\mechanical{\hbar}}{2\mechanical{m}\signal{\omega}}}\frac d{d\mechanical{x}}\right]
\signal{\psi_0}(\mechanical{x})=0.
$$

Divide by the positive coefficient of the derivative to obtain the equation in the hint:

$$
\frac{d\signal{\psi_0}}{d\mechanical{x}}
=-\frac{\mechanical{m}\signal{\omega}}{\mechanical{\hbar}}\mechanical{x}\signal{\psi_0}.
$$

Its nonzero solution is found by separation:

$$
\frac{d\signal{\psi_0}}{\signal{\psi_0}}
=-\frac{\mechanical{m}\signal{\omega}}{\mechanical{\hbar}}\mechanical{x}\,d\mechanical{x},
\qquad
\signal{\psi_0}(\mechanical{x})=C
e^{-\mechanical{m}\signal{\omega}\mechanical{x}^2/(2\mechanical{\hbar})}.
$$

The physical state must be normalized on the full real line. With the Gaussian integral $\int_{-\infty}^{\infty}e^{-a u^2}\,du=\sqrt{\pi/a}$ for $a>0$,

$$
\begin{aligned}
1&=\int_{-\infty}^{\infty}|\signal{\psi_0}(\mechanical{x})|^2\,d\mechanical{x}\\
&=|C|^2\sqrt{\frac{\pi\mechanical{\hbar}}{\mechanical{m}\signal{\omega}}},
\qquad
|C|=\left(\frac{\mechanical{m}\signal{\omega}}{\pi\mechanical{\hbar}}\right)^{1/4}.
\end{aligned}
$$

Choose the arbitrary global phase so that $C$ is positive. The result is

$$
\signal{\psi_0}(\mechanical{x})
=\left(\frac{\mechanical{m}\signal{\omega}}{\pi\mechanical{\hbar}}\right)^{1/4}
e^{-\mechanical{m}\signal{\omega}\mechanical{x}^2/(2\mechanical{\hbar})}.
$$

As a check, differentiating the Gaussian twice gives

$$
\frac{d^2\signal{\psi_0}}{d\mechanical{x}^2}
=\left[\left(\frac{\mechanical{m}\signal{\omega}}{\mechanical{\hbar}}\right)^2\mechanical{x}^2
-\frac{\mechanical{m}\signal{\omega}}{\mechanical{\hbar}}\right]\signal{\psi_0}.
$$

Substitution into $\hat H=-\mechanical{\hbar}^2d^2/(2\mechanical{m}\,d\mechanical{x}^2)+\mechanical{m}\signal{\omega}^2\mechanical{x}^2/2$ cancels the position-dependent terms and leaves $\hat H\signal{\psi_0}=(\mechanical{\hbar}\signal{\omega}/2)\signal{\psi_0}$. The normalized Gaussian has the required ground-state energy.

## Answer

For $n=0,1,2,\ldots$,

$$
\boxed{\langle\hat x\rangle_n=\langle\hat p\rangle_n=0,\quad
\langle\hat x^2\rangle_n=\frac{\mechanical{\hbar}(2n+1)}{2\mechanical{m}\signal{\omega}},\quad
\langle\hat p^2\rangle_n=\frac{\mechanical{m}\mechanical{\hbar}\signal{\omega}(2n+1)}2.}
$$

The uncertainties are the positive square roots of these second moments, and $\mechanical{\Delta x_n}\mechanical{\Delta p_n}=\mechanical{\hbar}(n+1/2)$ is smallest at $n=0$.

$$
\boxed{\langle\hat x\rangle(\signal{t})=\sqrt{\frac{\mechanical{\hbar}}{2\mechanical{m}\signal{\omega}}}\cos(\signal{\omega}\signal{t}).}
$$

Up to an arbitrary global phase,

$$
\boxed{\signal{\psi_0}(\mechanical{x})=
\left(\frac{\mechanical{m}\signal{\omega}}{\pi\mechanical{\hbar}}\right)^{1/4}
e^{-\mechanical{m}\signal{\omega}\mechanical{x}^2/(2\mechanical{\hbar})}.}
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$, $\langle\hat x\rangle_n$, $\mechanical{\Delta x_n}$, $\langle\hat x\rangle$ | $\unit{m}$ | Position | The coordinate, mean position, and position spread. |
| $\langle\hat x^2\rangle_n$, $\langle n\vert\hat x^2\vert n\rangle$ | $\unit{m^2}$ | Second position moment | The mean squared position in a number state. |
| $\langle\hat p\rangle_n$, $\langle n\vert\hat p\vert n\rangle$, $\mechanical{\Delta p_n}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | The mean momentum and momentum spread. |
| $\langle\hat p^2\rangle_n$, $\langle n\vert\hat p^2\vert n\rangle$ | $\unit{kg^2\,m^2\,s^{-2}}$ | Second momentum moment | The mean squared momentum in a number state. |
| $\mechanical{\Delta x_n}\mechanical{\Delta p_n}$ | $\unit{J\,s}$ | Uncertainty product | The product of position and momentum spreads. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The oscillator particle mass. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale of the oscillator. |
| $\signal{\omega}$ | $\unit{s^{-1}}$ | Angular frequency | The positive classical oscillator frequency. |
| $\signal{t}$ | $\unit{s}$ | Time | The elapsed evolution time. |
| $\energy{E_n}$, $\energy{E_0}$, $\energy{E_1}$ | $\unit{J}$ | Energy | The oscillator energy levels. |
| $\signal{\psi_0}$, $C$ | $\unit{m^{-1/2}}$ | Wavefunction amplitude | The ground-state amplitude and its normalization factor. |
