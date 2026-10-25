---
title: "Product and chain rules for wave functions"
---

> [!TLDR]
> The product rule separates factors, and the chain rule includes the derivative of each inner function.

Chapter 2: Functions, Derivatives and Integrals · Exercise 1 · Basic level.

Back to [[02 Functions, Derivatives and Integrals/08 Exercises#Exercise 1|Chapter 2 exercise index]].

## Question

Calculate the following derivatives.

**(a)**

$$
\frac{\mathrm{d}}{\mathrm{d}x}\left[x^3\mathrm{e}^{-2x}\right].
$$

**(b)**

$$
\frac{\mathrm{d}}{\mathrm{d}\mechanical{x}}\left[\sin^2(\signal{k}\mechanical{x})\right].
$$

**(c)**

$$
\frac{\mathrm{d}}{\mathrm{d}\mechanical{x}}
\left[\mathrm{e}^{-\mechanical{x}^2/(2\mechanical{\sigma}^2)}\right].
$$

**(d)**

$$
\frac{\partial}{\partial\signal{t}}
\left[\mathrm{e}^{\mathrm{i}(\signal{k}\mechanical{x}-\signal{\omega}\signal{t})}\right].
$$

**(e)**

$$
\frac{\partial^2}{\partial\mechanical{x}^2}
\left[\sin(\signal{k}\mechanical{x})\mathrm{e}^{-\mathrm{i}\signal{\omega}\signal{t}}\right].
$$

## Worked solution

Treat each parameter as constant during differentiation. Use a positive width $\mechanical{\sigma}>0$ in (c). In (a), $x$ is a dimensionless mathematical variable. The other parts use position, time, and wave parameters.

### (a) Differentiate the product

The two factors both depend on $x$. The product rule therefore gives two terms:

$$
\begin{aligned}
\frac{\mathrm{d}}{\mathrm{d}x}(x^3\mathrm{e}^{-2x})
&=3x^2\mathrm{e}^{-2x}+x^3(-2)\mathrm{e}^{-2x}\\
&=x^2\mathrm{e}^{-2x}(3-2x).
\end{aligned}
$$

The factor $-2$ is the derivative of the exponent $-2x$.

### (b) Differentiate the square and then the sine

Apply the chain rule first to the square and then to the sine:

$$
\begin{aligned}
\frac{\mathrm{d}}{\mathrm{d}\mechanical{x}}\sin^2(\signal{k}\mechanical{x})
&=2\sin(\signal{k}\mechanical{x})\cos(\signal{k}\mechanical{x})\signal{k}\\
&=\signal{k}\sin(2\signal{k}\mechanical{x}).
\end{aligned}
$$

The last step uses $2\sin u\cos u=\sin(2u)$.

### (c) Differentiate the Gaussian exponent

The derivative of the exponential is the same exponential multiplied by the derivative of its exponent:

$$
\frac{\mathrm{d}}{\mathrm{d}\mechanical{x}}
\left(-\frac{\mechanical{x}^2}{2\mechanical{\sigma}^2}\right)
=-\frac{\mechanical{x}}{\mechanical{\sigma}^2}.
$$

Thus,

$$
\frac{\mathrm{d}}{\mathrm{d}\mechanical{x}}
\mathrm{e}^{-\mechanical{x}^2/(2\mechanical{\sigma}^2)}
=-\frac{\mechanical{x}}{\mechanical{\sigma}^2}
\mathrm{e}^{-\mechanical{x}^2/(2\mechanical{\sigma}^2)}.
$$

### (d) Hold position fixed

Only the time term in the exponent changes in this partial derivative. Therefore,

$$
\frac{\partial}{\partial\signal{t}}
\mathrm{e}^{\mathrm{i}(\signal{k}\mechanical{x}-\signal{\omega}\signal{t})}
=-\mathrm{i}\signal{\omega}
\mathrm{e}^{\mathrm{i}(\signal{k}\mechanical{x}-\signal{\omega}\signal{t})}.
$$

### (e) Differentiate twice with respect to position

The time factor is constant in both position derivatives:

$$
\begin{aligned}
\frac{\partial}{\partial\mechanical{x}}
\left[\sin(\signal{k}\mechanical{x})\mathrm{e}^{-\mathrm{i}\signal{\omega}\signal{t}}\right]
&=\signal{k}\cos(\signal{k}\mechanical{x})\mathrm{e}^{-\mathrm{i}\signal{\omega}\signal{t}},\\
\frac{\partial^2}{\partial\mechanical{x}^2}
\left[\sin(\signal{k}\mechanical{x})\mathrm{e}^{-\mathrm{i}\signal{\omega}\signal{t}}\right]
&=-\signal{k}^2\sin(\signal{k}\mechanical{x})\mathrm{e}^{-\mathrm{i}\signal{\omega}\signal{t}}.
\end{aligned}
$$

## Answer

**(a)** $x^2\mathrm{e}^{-2x}(3-2x)$.

**(b)** $\signal{k}\sin(2\signal{k}\mechanical{x})$.

**(c)** $-(\mechanical{x}/\mechanical{\sigma}^2)\mathrm{e}^{-\mechanical{x}^2/(2\mechanical{\sigma}^2)}$.

**(d)** $-\mathrm{i}\signal{\omega}\mathrm{e}^{\mathrm{i}(\signal{k}\mechanical{x}-\signal{\omega}\signal{t})}$.

**(e)** $-\signal{k}^2\sin(\signal{k}\mechanical{x})\mathrm{e}^{-\mathrm{i}\signal{\omega}\signal{t}}$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$ | $\unit{m}$ | Position | The position coordinate in parts (b) to (e). |
| $\signal{t}$ | $\unit{s}$ | Time | The time coordinate in parts (d) and (e). |
| $\signal{k}$ | $\unit{m^{-1}}$ | Wave number | The spatial phase coefficient. |
| $\signal{\omega}$ | $\unit{rad\,s^{-1}}$ | Angular frequency | The temporal phase coefficient. |
| $\mechanical{\sigma}$ | $\unit{m}$ | Gaussian width | The positive length in the Gaussian exponent. |
