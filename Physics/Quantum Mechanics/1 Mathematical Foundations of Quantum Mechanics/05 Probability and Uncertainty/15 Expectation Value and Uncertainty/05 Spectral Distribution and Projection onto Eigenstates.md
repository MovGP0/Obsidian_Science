---
title: "Spectral Distribution and Projection onto Eigenstates"
---

> [!TLDR]
> Projection onto energy eigenstates gives the energy probabilities of a state. A normalized parabolic state in a box has about 99.86% of its probability in the ground state and a mean energy slightly above that level.

## Example — Energy distribution of a parabolic state

Consider the normalized initial wavefunction in a box $[0,\mechanical{L}]$:

$$
\signal{\psi}(\mechanical{x},0)
=\signal{A}\,\mechanical{x}(\mechanical{L}-\mechanical{x}),
\qquad
\signal{A}=\sqrt{\frac{30}{\mechanical{L}^{5}}}.
$$

Expand the state in the box energy eigenfunctions. The coefficients are projections:

$$
c_n=\langle n|\psi(0)\rangle
=\sqrt{\frac2{\mechanical{L}}}
\int_0^{\mechanical{L}}
\signal{A}\,\mechanical{x}(\mechanical{L}-\mechanical{x})
\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)
\,d\mechanical{x}.
$$

The required integral is

$$
\int_0^{\mechanical{L}}
\mechanical{x}(\mechanical{L}-\mechanical{x})
\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)
\,d\mechanical{x}
=\frac{2\mechanical{L}^{3}}{n^3\pi^3}
\bigl(1-(-1)^n\bigr).
$$

The even terms vanish by symmetry. For odd $n$, the factor $1-(-1)^n$ is $2$, so

$$
\begin{aligned}
c_n
&=\sqrt{\frac2{\mechanical{L}}}
\sqrt{\frac{30}{\mechanical{L}^{5}}}
\frac{4\mechanical{L}^{3}}{n^3\pi^3}\\
&=\frac{4\sqrt{60}}{n^3\pi^3}.
\end{aligned}
$$

Thus the energy probabilities are

$$
P(\energy{E_n})=|c_n|^2
=\begin{cases}
\dfrac{960}{n^6\pi^6},& n\text{ odd},\\
0,&n\text{ even}.
\end{cases}
$$

In particular,

$$
|c_1|^2=\frac{960}{\pi^6}\approx0.9986.
$$

About $99.86\%$ of the probability belongs to the ground-state energy $\energy{E_1}$.

This large probability agrees with the shapes of the functions. The parabolic shape $\mechanical{x}(\mechanical{L}-\mechanical{x})$ resembles the ground-state shape $\sin(\pi\mechanical{x}/\mechanical{L})$. Both are positive inside the interval, vanish at the walls, and have their maximum at the center.

## Mean energy

The energy probabilities decrease as $1/n^6$. Since the box energies satisfy $\energy{E_n}=n^2\energy{E_1}$, the mean energy is

$$
\begin{aligned}
\langle\hat H\rangle
&=\sum_n|c_n|^2\energy{E_n}\\
&=\energy{E_1}\frac{960}{\pi^6}
\sum_{k=0}^{\infty}\frac1{(2k+1)^4}\\
&=\energy{E_1}\frac{960}{\pi^6}\frac{\pi^4}{96}\\
&=\frac{10}{\pi^2}\energy{E_1}
\approx1.013\,\energy{E_1}.
\end{aligned}
$$

The result is slightly above the ground-state energy, as expected from $|c_1|^2\approx1$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$, $\mechanical{L}$ | $\unit{m}$ | Position and box length | The coordinate and the length of the confining interval. |
| $\signal{\psi}$ | $\unit{m^{-1/2}}$ | Wavefunction | The normalized one-dimensional state amplitude. |
| $\signal{A}$ | $\unit{m^{-5/2}}$ | Normalization factor | The coefficient of the parabolic wavefunction. |
| $c_n$ | $\unit{1}$ | Probability amplitude | The projection onto the energy eigenstate $\vert n\rangle$. |
| $P(\energy{E_n})$ | $\unit{1}$ | Energy probability | The probability of measuring a particular energy. |
| $\energy{E_n}$, $\energy{E_1}$, $\langle\hat H\rangle$ | $\unit{J}$ | Energy | The energy levels, ground-state energy, and mean energy. |
