---
title: "Rabi oscillations from coupled equations"
---

> [!TLDR]
> The coupled amplitudes are a cosine and an imaginary sine, so their total probability remains one.

Chapter 3 — Ordinary Differential Equations · Exercise 6 · Intermediate level

[[03 Ordinary Differential Equations/08 Exercises|Chapter 3 exercise index]]

## Question

Solve the [[03 Ordinary Differential Equations/03 Systems of Linear Differential Equations|Rabi system]] explicitly. Starting from $\signal{\alpha}(0)=1$ and $\signal{\beta}(0)=0$, find $\signal{\alpha}(\signal{t})$ and $\signal{\beta}(\signal{t})$. Verify that

$$
|\signal{\alpha}(\signal{t})|^2+|\signal{\beta}(\signal{t})|^2=1
$$

for every $\signal{t}$.

## Worked solution

The linked chapter defines a constant, real coupling angular frequency $\signal{\omega}$ and the Hamiltonian

$$
\hat H=\frac{\mechanical{\hbar}\signal{\omega}}2\hat\sigma_x.
$$

The source solution key calls this same frequency $\signal{\Omega}$. Use the chapter's symbol $\signal{\omega}$ here; $\signal{\Omega}=\signal{\omega}$ gives the key's notation.

### 1. Write the coupled equations

The two components of the Schrödinger equation are

$$
\mathrm{i}\mechanical{\hbar}\dot{\signal{\alpha}}
=\frac{\mechanical{\hbar}\signal{\omega}}2\signal{\beta},\qquad
\mathrm{i}\mechanical{\hbar}\dot{\signal{\beta}}
=\frac{\mechanical{\hbar}\signal{\omega}}2\signal{\alpha}.
$$

Cancel $\mechanical{\hbar}$ and use $1/\mathrm{i}=-\mathrm{i}$:

$$
\dot{\signal{\alpha}}=-\frac{\mathrm{i}\signal{\omega}}2\signal{\beta},\qquad
\dot{\signal{\beta}}=-\frac{\mathrm{i}\signal{\omega}}2\signal{\alpha}.
$$

### 2. Reduce to a second-order equation

Differentiate the first equation and substitute the second. This removes $\signal{\beta}$:

$$
\ddot{\signal{\alpha}}
=-\frac{\mathrm{i}\signal{\omega}}2\dot{\signal{\beta}}
=\left(-\frac{\mathrm{i}\signal{\omega}}2\right)^2\signal{\alpha}
=-\frac{\signal{\omega}^2}{4}\signal{\alpha}.
$$

The initial conditions give $\signal{\alpha}(0)=1$ and $\dot{\signal{\alpha}}(0)=0$. Thus the cosine coefficient is one and the sine coefficient is zero:

$$
\signal{\alpha}(\signal{t})=\cos\left(\frac{\signal{\omega}\signal{t}}2\right).
$$

### 3. Recover the second amplitude and check both equations

For nonzero $\signal{\omega}$, the first coupled equation gives

$$
\signal{\beta}=\frac{2\mathrm{i}}{\signal{\omega}}\dot{\signal{\alpha}}
=-\mathrm{i}\sin\left(\frac{\signal{\omega}\signal{t}}2\right).
$$

This has $\signal{\beta}(0)=0$. Its derivative is

$$
\dot{\signal{\beta}}=-\frac{\mathrm{i}\signal{\omega}}2
\cos\left(\frac{\signal{\omega}\signal{t}}2\right)
=-\frac{\mathrm{i}\signal{\omega}}2\signal{\alpha},
$$

so the second equation also holds. If $\signal{\omega}=0$, the original equations give constant amplitudes $1$ and $0$; the same final formulas include that case without division.

### 4. Check normalization

The trigonometric arguments are real, and $|{-\mathrm{i}}|^2=1$. Therefore

$$
|\signal{\alpha}(\signal{t})|^2+|\signal{\beta}(\signal{t})|^2
=\cos^2\left(\frac{\signal{\omega}\signal{t}}2\right)
+\sin^2\left(\frac{\signal{\omega}\signal{t}}2\right)=1.
$$

Probability moves between the two basis states while their total probability remains one.

## Answer

$$
\boxed{\signal{\alpha}(\signal{t})=\cos\left(\frac{\signal{\omega}\signal{t}}2\right),\qquad
\signal{\beta}(\signal{t})=-\mathrm{i}\sin\left(\frac{\signal{\omega}\signal{t}}2\right)}.
$$

The sum of the squared magnitudes is one for every real time.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\alpha},\signal{\beta}$ | $1$ | State amplitudes | The amplitudes of the two basis states. |
| $\signal{t}$ | $\unit{s}$ | Time | The evolution time. |
| $\signal{\omega},\signal{\Omega}$ | $\unit{rad\,s^{-1}}$ | Coupling angular frequency | Two source notations for the same constant coupling. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant in the Hamiltonian. |
