---
title: "Spin evolution and the Bloch vector"
---

> [!TLDR]
> The relative spin phase makes the Bloch vector rotate on the equator, with the rotation sign fixed by the Hamiltonian.

Chapter 15: [[00 Expectation Value and Uncertainty|Expectation Value, Variance, and Quantum Uncertainty]] · Exercise 4 · **Intermediate level**

Back to [[15 Expectation Value and Uncertainty/08 Exercises|Chapter 15 exercises]].

## Question

For the two-level system,

$$
\hat H=\frac{\mechanical{\hbar}\signal{\omega}}2\sigma_z,
\qquad
|\psi(0)\rangle=|+x\rangle
=\frac1{\sqrt2}(|\uparrow\rangle+|\downarrow\rangle).
$$

(a) Calculate $|\psi(\signal{t})\rangle$.

(b) Calculate $\langle\sigma_x\rangle(\signal{t})$, $\langle\sigma_y\rangle(\signal{t})$, and $\langle\sigma_z\rangle(\signal{t})$.

(c) Verify the Ehrenfest equations with the commutators $[\hat H,\sigma_i]$.

(d) Give a geometric description of the motion of the Bloch vector

$$
\mathbf b
=\bigl(\langle\sigma_x\rangle,
\langle\sigma_y\rangle,
\langle\sigma_z\rangle\bigr).
$$

## Worked solution

### (a) Evolve each energy component

The Pauli eigenvalues are $\sigma_z|\uparrow\rangle=|\uparrow\rangle$ and $\sigma_z|\downarrow\rangle=-|\downarrow\rangle$. Their energies are $\energy{E_\uparrow}=\mechanical{\hbar}\signal{\omega}/2$ and $\energy{E_\downarrow}=-\mechanical{\hbar}\signal{\omega}/2$. Thus

$$
|\psi(\signal{t})\rangle
=\frac1{\sqrt2}\left(e^{-i\signal{\omega}\signal{t}/2}|\uparrow\rangle
+e^{i\signal{\omega}\signal{t}/2}|\downarrow\rangle\right).
$$

### (b) Calculate the three Pauli expectations

Write the two coefficients as $\alpha=e^{-i\signal{\omega}\signal{t}/2}/\sqrt2$ and $\beta=e^{i\signal{\omega}\signal{t}/2}/\sqrt2$. Then $\alpha^*\beta=e^{i\signal{\omega}\signal{t}}/2$. Matrix multiplication with the Pauli matrices gives

$$
\begin{aligned}
\langle\sigma_x\rangle
&=\alpha^*\beta+\beta^*\alpha
=2\operatorname{Re}(\alpha^*\beta)=\cos(\signal{\omega}\signal{t}),\\
\langle\sigma_y\rangle
&=-i\alpha^*\beta+i\beta^*\alpha
=2\operatorname{Im}(\alpha^*\beta)=\sin(\signal{\omega}\signal{t}),\\
\langle\sigma_z\rangle
&=|\alpha|^2-|\beta|^2=\frac12-\frac12=0.
\end{aligned}
$$

### (c) Verify all Ehrenfest equations

The Pauli operators have no explicit time dependence, so

$$
\frac{d\langle\sigma_i\rangle}{d\signal{t}}
=\frac{i}{\mechanical{\hbar}}\langle[\hat H,\sigma_i]\rangle.
$$

Use $[\sigma_z,\sigma_x]=2i\sigma_y$, $[\sigma_z,\sigma_y]=-2i\sigma_x$, and $[\sigma_z,\sigma_z]=0$:

$$
\begin{aligned}
[\hat H,\sigma_x]&=i\mechanical{\hbar}\signal{\omega}\sigma_y,\\
[\hat H,\sigma_y]&=-i\mechanical{\hbar}\signal{\omega}\sigma_x,\\
[\hat H,\sigma_z]&=0.
\end{aligned}
$$

Consequently,

$$
\begin{aligned}
\frac{d\langle\sigma_x\rangle}{d\signal{t}}
&=-\signal{\omega}\langle\sigma_y\rangle
=-\signal{\omega}\sin(\signal{\omega}\signal{t}),\\
\frac{d\langle\sigma_y\rangle}{d\signal{t}}
&=\signal{\omega}\langle\sigma_x\rangle
=\signal{\omega}\cos(\signal{\omega}\signal{t}),\\
\frac{d\langle\sigma_z\rangle}{d\signal{t}}&=0.
\end{aligned}
$$

These agree with the direct derivatives in part (b). In particular, the factor $i^2=-1$ fixes the sign of the first equation.

### (d) Geometry of the motion

The Bloch vector is

$$
\mathbf b(\signal{t})=(\cos(\signal{\omega}\signal{t}),\sin(\signal{\omega}\signal{t}),0),
\qquad \frac{d\mathbf b}{d\signal{t}}=\signal{\omega}\mathbf e_z\times\mathbf b.
$$

It has unit length and stays on the equator of the Bloch sphere. It starts at the positive $x$ axis and, for $\signal{\omega}>0$, moves toward the positive $y$ axis. Viewed from the positive $z$ axis toward the origin, the motion is counterclockwise. This is Larmor precession about the $z$ axis with angular speed $|\signal{\omega}|$.

## Answer

$$
\boxed{|\psi(\signal{t})\rangle=\frac{e^{-i\signal{\omega}\signal{t}/2}|\uparrow\rangle+e^{i\signal{\omega}\signal{t}/2}|\downarrow\rangle}{\sqrt2}.}
$$

$$
\boxed{\mathbf b(\signal{t})=(\cos(\signal{\omega}\signal{t}),\sin(\signal{\omega}\signal{t}),0).}
$$

The commutators give $d\langle\sigma_x\rangle/d\signal{t}=-\signal{\omega}\langle\sigma_y\rangle$, $d\langle\sigma_y\rangle/d\signal{t}=\signal{\omega}\langle\sigma_x\rangle$, and $d\langle\sigma_z\rangle/d\signal{t}=0$. The vector precesses on the equator about the positive $z$ axis.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale in spin evolution. |
| $\signal{\omega}$ | $\unit{s^{-1}}$ | Angular frequency | The signed rate of Bloch-vector rotation. |
| $\signal{t}$ | $\unit{s}$ | Time | The elapsed evolution time. |
| $\energy{E_\uparrow}$, $\energy{E_\downarrow}$ | $\unit{J}$ | Energy | The energies of the two spin eigenstates. |
| $\alpha$, $\beta$ | $\unit{1}$ | Probability amplitude | The coefficients of the spin eigenstates. |
| $\mathbf b$, $\langle\sigma_i\rangle$ | $\unit{1}$ | Bloch vector | The vector of Pauli expectations and its components. |
