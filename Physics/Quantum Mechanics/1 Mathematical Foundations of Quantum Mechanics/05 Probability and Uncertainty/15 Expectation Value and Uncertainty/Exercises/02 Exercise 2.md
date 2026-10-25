---
title: "Position uncertainty in a box"
---

> [!TLDR]
> Reflection symmetry fixes the mean at the box centre, and direct integration gives a position spread that approaches the uniform-distribution value.

Chapter 15: [[00 Expectation Value and Uncertainty|Expectation Value, Variance, and Quantum Uncertainty]] · Exercise 2 · **Basic level**

Back to [[15 Expectation Value and Uncertainty/08 Exercises|Chapter 15 exercises]].

## Question

Consider a particle in the box $[0,\mechanical{L}]$ in the energy eigenstate $|n\rangle$.

(a) Calculate $\langle\hat x\rangle_n$. Use symmetry.

(b) Calculate

$$
\langle\hat x^2\rangle_n
=\frac2{\mechanical{L}}
\int_0^{\mechanical{L}}
\mechanical{x}^2
\sin^2\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)
\,d\mechanical{x}.
$$

(c) Calculate $\mechanical{\Delta x_n}$ and show that

$$
\mechanical{\Delta x_n}\longrightarrow
\frac{\mechanical{L}}{\sqrt{12}}
\qquad\text{as }n\to\infty.
$$

## Worked solution

Take $n=1,2,\ldots$ and $\mechanical{L}>0$. The normalized position density is

$$
\rho_n(\mechanical{x})=\frac2{\mechanical{L}}
\sin^2\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right).
$$

### (a) Mean position from symmetry

Reflection about the centre gives $\rho_n(\mechanical{L}-\mechanical{x})=\rho_n(\mechanical{x})$. Make the substitution $u=\mechanical{L}-\mechanical{x}$ in the first-moment integral:

$$
\langle\hat x\rangle_n
=\int_0^{\mechanical{L}}(\mechanical{L}-u)\rho_n(u)\,du
=\mechanical{L}-\langle\hat x\rangle_n.
$$

Normalization supplies the first term. Thus $2\langle\hat x\rangle_n=\mechanical{L}$ and $\langle\hat x\rangle_n=\mechanical{L}/2$.

### (b) Second moment by integration

Use $2\sin^2\theta=1-\cos(2\theta)$. Introduce the wave number $\signal{k_n}=2n\pi/\mechanical{L}$ for this cosine:

$$
\langle\hat x^2\rangle_n
=\frac1{\mechanical{L}}\int_0^{\mechanical{L}}\mechanical{x}^2\,d\mechanical{x}
-\frac1{\mechanical{L}}\int_0^{\mechanical{L}}\mechanical{x}^2\cos(\signal{k_n}\mechanical{x})\,d\mechanical{x}.
$$

Integrate the cosine integral by parts twice. This gives

$$
\begin{aligned}
\int\mechanical{x}^2\cos(\signal{k_n}\mechanical{x})\,d\mechanical{x}
&=\frac{\mechanical{x}^2\sin(\signal{k_n}\mechanical{x})}{\signal{k_n}}
-\frac2{\signal{k_n}}\int\mechanical{x}\sin(\signal{k_n}\mechanical{x})\,d\mechanical{x}\\
&=\frac{\mechanical{x}^2\sin(\signal{k_n}\mechanical{x})}{\signal{k_n}}
+\frac{2\mechanical{x}\cos(\signal{k_n}\mechanical{x})}{\signal{k_n}^2}
-\frac{2\sin(\signal{k_n}\mechanical{x})}{\signal{k_n}^3}.
\end{aligned}
$$

At $\mechanical{x}=\mechanical{L}$ the sine is zero and the cosine is one. All terms at zero vanish. Therefore,

$$
\int_0^{\mechanical{L}}\mechanical{x}^2\cos(\signal{k_n}\mechanical{x})\,d\mechanical{x}
=\frac{2\mechanical{L}}{\signal{k_n}^2}
=\frac{\mechanical{L}^3}{2n^2\pi^2}.
$$

The first integral is $\mechanical{L}^3/3$, so

$$
\langle\hat x^2\rangle_n
=\frac{\mechanical{L}^2}{3}-\frac{\mechanical{L}^2}{2n^2\pi^2}.
$$

### (c) Uncertainty and the large-index limit

Subtract the square of the mean before taking the positive square root:

$$
\begin{aligned}
(\mechanical{\Delta x_n})^2
&=\langle\hat x^2\rangle_n-\langle\hat x\rangle_n^2\\
&=\mechanical{L}^2\left(\frac13-\frac1{2n^2\pi^2}-\frac14\right)
=\mechanical{L}^2\left(\frac1{12}-\frac1{2n^2\pi^2}\right).
\end{aligned}
$$

The correction tends to zero as $n\to\infty$. Hence $\mechanical{\Delta x_n}\to\mechanical{L}/\sqrt{12}$. This is the standard deviation of a uniform distribution on the box. The rapidly oscillating density gives the same limiting moments; it does not converge pointwise to a uniform density.

## Answer

$$
\boxed{\langle\hat x\rangle_n=\frac{\mechanical{L}}2,\qquad
\langle\hat x^2\rangle_n=\frac{\mechanical{L}^2}3-\frac{\mechanical{L}^2}{2n^2\pi^2}.}
$$

$$
\boxed{\mechanical{\Delta x_n}=\mechanical{L}\sqrt{\frac1{12}-\frac1{2n^2\pi^2}}
\ \longrightarrow\ \frac{\mechanical{L}}{\sqrt{12}}.}
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$, $\mechanical{L}$, $\langle\hat x\rangle_n$, $\mechanical{\Delta x_n}$ | $\unit{m}$ | Position and length | The coordinate, box length, mean position, and spread. |
| $\langle\hat x^2\rangle_n$, $(\mechanical{\Delta x_n})^2$ | $\unit{m^2}$ | Position second moment and variance | The second moment and squared position spread. |
| $\rho_n$ | $\unit{m^{-1}}$ | Position probability density | The probability per unit length in the box. |
| $\signal{k_n}$ | $\unit{m^{-1}}$ | Wave number | The wave number of the doubled-angle cosine. |
