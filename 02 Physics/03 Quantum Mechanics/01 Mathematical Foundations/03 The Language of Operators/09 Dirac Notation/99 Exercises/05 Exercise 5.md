---
title: "Change from the spin-z basis to the spin-x basis"
---

> [!TLDR]
> A change of basis changes the amplitudes but preserves the state and its total probability.

Chapter 9 — Dirac Notation · Exercise 5 · Intermediate level

Back to [[09 Dirac Notation/10 Exercises#Exercise 5|Chapter 9 exercise index]].

## Question

The eigenstates of $\sigma_x$ are

$$
|+x\rangle=\frac1{\sqrt2}(|\uparrow\rangle+|\downarrow\rangle),
\qquad
|-x\rangle=\frac1{\sqrt2}(|\uparrow\rangle-|\downarrow\rangle).
$$

**(a)** Express $|\uparrow\rangle$ and $|\downarrow\rangle$ in terms of $|+x\rangle$ and $|-x\rangle$.

**(b)** Write

$$
|\psi\rangle=\frac1{\sqrt2}|\uparrow\rangle+\frac{i}{\sqrt2}|\downarrow\rangle
$$

in the eigenbasis of $\sigma_x$.

**(c)** Calculate the probability of obtaining $+1$ when $\sigma_x$ is measured in this state.

## Worked solution

### (a) Invert the basis relations

Add the two defining equations to cancel the down ket, then subtract them to cancel the up ket:

$$
|+x\rangle+|-x\rangle=\sqrt2|\uparrow\rangle,
\qquad
|+x\rangle-|-x\rangle=\sqrt2|\downarrow\rangle.
$$

Dividing by $\sqrt2$ gives

$$
|\uparrow\rangle=\frac{|+x\rangle+|-x\rangle}{\sqrt2},
\qquad
|\downarrow\rangle=\frac{|+x\rangle-|-x\rangle}{\sqrt2}.
$$

### (b) Substitute and collect the basis kets

$$
\begin{aligned}
|\psi\rangle
&=\frac12(|+x\rangle+|-x\rangle)+\frac i2(|+x\rangle-|-x\rangle)\\
&=\frac{1+i}2|+x\rangle+\frac{1-i}2|-x\rangle.
\end{aligned}
$$

The two coefficients have squared magnitudes $|(1+i)/2|^2=|(1-i)/2|^2=1/2$. Their sum is $1$, as required by normalization.

### (c) Calculate the positive-x outcome probability

The eigenvalue $+1$ of $\sigma_x$ belongs to $|+x\rangle$. Apply the Born rule to its coefficient:

$$
P(+x)=|\langle+x|\psi\rangle|^2
=\left|\frac{1+i}2\right|^2
=\frac{(1-i)(1+i)}4
=\frac{1-i^2}4=\frac12.
$$

The imaginary relative phase in the original basis affects the new amplitudes. It must be retained until the squared magnitudes are calculated.

A relative phase can be invisible in one basis and visible in another. Replace $i$ in the initial ket by $e^{i\signal{\alpha}}$, where $\signal{\alpha}$ is a dimensionless relative phase. The positive-x amplitude is then $(1+e^{i\signal{\alpha}})/2$, whose squared magnitude is $(1+\cos\signal{\alpha})/2$. The exercise is the case $\signal{\alpha}=\pi/2$.

This gives a useful boundary check: at zero relative phase the state is the positive-x eigenstate, so its positive-x probability is one; at phase $\pi$ that probability is zero. Both states still have equal up/down probabilities. Thus equal probabilities in the original basis do not determine the probabilities in every other basis.

## Answer

(a) $|\uparrow\rangle=(|+x\rangle+|-x\rangle)/\sqrt2$ and $|\downarrow\rangle=(|+x\rangle-|-x\rangle)/\sqrt2$. (b) $|\psi\rangle=((1+i)/2)|+x\rangle+((1-i)/2)|-x\rangle$. (c) $P(+x)=1/2$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\langle+x\vert\psi\rangle$ | $1$ | Positive-x amplitude | The coefficient for the positive-x eigenstate. |
| $P(+x)$ | $1$ | Positive-x probability | The probability of obtaining the eigenvalue $+1$. |
| $\signal{\alpha}$ | $1$ | Relative phase | The phase between the two original spin components in the transfer check. |
