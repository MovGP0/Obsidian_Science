---
title: "Normalization and probabilities of a parabolic box state"
---

> [!TLDR]
> A normalized parabolic box state contains only odd energy modes, with probabilities proportional to the reciprocal sixth power.

**Chapter 12 · Exercise 5 · Intermediate level**

[[12 Fourier Series/08 Exercises|Chapter 12 exercises]]

## Question

The initial state of a particle in the box $[0,\mechanical{L}]$ is

$$
\signal{\psi}(\mechanical{x},0)=\signal{A}\mechanical{x}(\mechanical{L}-\mechanical{x}).
$$

**(a)** Determine $\signal{A}$ from normalization.

**(b)** Calculate $c_n=\langle\signal{\phi}_n|\psi\rangle$, with

$$
\signal{\phi}_n(\mechanical{x})=\sqrt{\frac2{\mechanical{L}}}
\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right).
$$

**Hint:** For even $n$, $c_n=0$ by symmetry.

**(c)** Check the normalization identity $\sum_n|c_n|^2=1$ by calculating the partial sum of the first five nonzero terms. What is that partial sum?

**(d)** What is the probability of measuring $\energy{E}_1$? What is the probability of measuring $\energy{E}_3$?

## Worked solution

### (a) Normalize the state

**Why integrate the absolute square?** The probability over the complete box must be one. Choose the physically irrelevant overall phase so that $\signal{A}$ is real and positive:

$$
\begin{aligned}
1&=|\signal{A}|^2\int_0^{\mechanical{L}}\mechanical{x}^2(\mechanical{L}-\mechanical{x})^2\,d\mechanical{x}\\
&=|\signal{A}|^2\left[\frac{\mechanical{L}^2\mechanical{x}^3}{3}-\frac{\mechanical{L}\mechanical{x}^4}{2}+\frac{\mechanical{x}^5}{5}\right]_0^{\mechanical{L}}
=|\signal{A}|^2\frac{\mechanical{L}^5}{30}.
\end{aligned}
$$

Hence $\signal{A}=\sqrt{30/\mechanical{L}^5}$. A factor $e^{i\alpha}$ with real $\alpha$ gives the same physical state.

### (b) Project onto each box mode

Use $y=\mechanical{x}/\mechanical{L}$ to remove the physical scale from the integral:

$$
c_n=\signal{A}\sqrt{\frac2{\mechanical{L}}}\mechanical{L}^3
\int_0^1y(1-y)\sin(n\pi y)\,dy
=\sqrt{60}\,J_n.
$$

**Why examine the midpoint?** The parabola is even about $y=1/2$, whereas even-$n$ sine modes are odd about this point. Their overlaps vanish. To obtain the nonzero coefficients as well, integrate twice by parts. Put $a=n\pi$:

$$
\begin{aligned}
J_n&=\left[-\frac{y(1-y)\cos(ay)}a\right]_0^1
+\frac1a\int_0^1(1-2y)\cos(ay)\,dy\\
&=\left[\frac{(1-2y)\sin(ay)}{a^2}\right]_0^1
+\frac2{a^2}\int_0^1\sin(ay)\,dy\\
&=\frac{2[1-(-1)^n]}{n^3\pi^3}.
\end{aligned}
$$

Therefore $c_n=0$ for even $n$ and $c_n=4\sqrt{60}/(n^3\pi^3)$ for odd $n$.

### (c) Check the first five nonzero probabilities

The nonzero labels are $1,3,5,7,9$. Square each coefficient before adding:

$$
S_5=\frac{960}{\pi^6}\left(1+\frac1{3^6}+\frac1{5^6}+\frac1{7^6}+\frac1{9^6}\right)
\approx0.999999048.
$$

This finite sum checks the normalization closely; it does not by itself prove the infinite identity. Completeness of the box basis and normalization in part (a) prove it. One can also check it from

$$
\sum_{n\text{ odd}}\frac1{n^6}
=(1-2^{-6})\frac{\pi^6}{945}=\frac{\pi^6}{960}.
$$

The omitted probability is about $9.52\times10^{-7}$.

### (d) Read the energy probabilities

**Why square the overlap?** The Born rule assigns $|c_n|^2$ to the outcome $\energy{E}_n$. Thus

$$
P(\energy{E}_1)=\frac{960}{\pi^6}\approx0.998555,
\qquad
P(\energy{E}_3)=\frac{960}{3^6\pi^6}\approx0.00136976.
$$

## Answer

**(a)** $\signal{A}=\sqrt{30/\mechanical{L}^5}$, up to an overall phase.

**(b)** $c_{2k}=0$ and $c_{2k+1}=4\sqrt{60}/[(2k+1)^3\pi^3]$.

**(c)** The first five nonzero probabilities sum to $0.999999048$ to nine decimal places.

**(d)** $P(\energy{E}_1)=960/\pi^6\approx0.998555$ and $P(\energy{E}_3)=960/(729\pi^6)\approx0.00136976$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$ | $\unit{m}$ | Position | The coordinate within the box. |
| $\mechanical{L}$ | $\unit{m}$ | Box length | The distance between the box walls. |
| $\signal{\psi}$, $\signal{\phi}_n$ | $\unit{m^{-1/2}}$ | Wavefunction | The normalized initial state and box basis states. |
| $\signal{A}$ | $\unit{m^{-5/2}}$ | Wavefunction coefficient | The factor multiplying the parabolic profile. |
| $c_n$ | $1$ | Probability amplitude | The overlap with the nth box state. |
| $P(\energy{E}_n)$ | $1$ | Energy probability | The probability of the nth energy outcome. |
| $\energy{E}_1$, $\energy{E}_3$, $\energy{E}_n$ | $\unit{J}$ | Energy | The energy outcomes for the box modes. |
