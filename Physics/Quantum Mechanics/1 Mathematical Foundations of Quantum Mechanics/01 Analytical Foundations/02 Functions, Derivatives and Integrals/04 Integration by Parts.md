---
title: "Integration by Parts"
---

> [!TLDR]
> Integration by parts moves a derivative from one factor to another and produces a boundary term. This is a basic step in the proof of symmetry for quantum differential operators.

The integration-by-parts rule follows from Leibniz's product rule:

$$
\int_a^b f'(x)g(x)\,\mathrm{d}x
=\bigl[f(x)g(x)\bigr]_a^b
-\int_a^b f(x)g'(x)\,\mathrm{d}x.
$$

In quantum mechanics, this formula is essential to show that certain operators are Hermitian. For functions over the real line that vanish at infinity, the boundary term vanishes:

$$
\int_{-\infty}^{+\infty}f'(x)g(x)\,\mathrm{d}x
=-\int_{-\infty}^{+\infty}f(x)g'(x)\,\mathrm{d}x,
$$

provided that $f(x)g(x)\to0$ as $x\to\pm\infty$.

## Example — The momentum operator is Hermitian

We want to show that $\hat p=-\mathrm{i}\energy{\hbar}\,\mathrm{d}/\mathrm{d}\mechanical{x}$ satisfies $\langle\signal{f},\hat p\signal{g}\rangle=\langle\hat p\signal{f},\signal{g}\rangle$. Thus, we require

$$
\int_{-\infty}^{+\infty}\signal{f}^*(\mechanical{x})
\left(-\mathrm{i}\energy{\hbar}\frac{\mathrm{d}\signal{g}}{\mathrm{d}\mechanical{x}}\right)\mathrm{d}\mechanical{x}
=\int_{-\infty}^{+\infty}
\left(-\mathrm{i}\energy{\hbar}\frac{\mathrm{d}\signal{f}}{\mathrm{d}\mechanical{x}}\right)^*
\signal{g}(\mechanical{x})\,\mathrm{d}\mechanical{x}.
$$

Apply integration by parts to the left side:

$$
\begin{aligned}
-\mathrm{i}\energy{\hbar}\int\signal{f}^*\signal{g}'\,\mathrm{d}\mechanical{x}
&=-\mathrm{i}\energy{\hbar}\underbrace{\bigl[\signal{f}^*\signal{g}\bigr]_{-\infty}^{+\infty}}_{=0}
+\mathrm{i}\energy{\hbar}\int(\signal{f}^*)'\signal{g}\,\mathrm{d}\mechanical{x}\\
&=\mathrm{i}\energy{\hbar}\int(\signal{f}')^*\signal{g}\,\mathrm{d}\mechanical{x}.
\end{aligned}
$$

The right side is

$$
\int(-\mathrm{i}\energy{\hbar}\signal{f}')^*\signal{g}\,\mathrm{d}\mechanical{x}
=\mathrm{i}\energy{\hbar}\int(\signal{f}')^*\signal{g}\,\mathrm{d}\mechanical{x}.
$$

The two sides agree. $\square$

The crucial step is the boundary condition. For physically suitable wavefunctions, we assume $\signal{\psi}\to0$ as $\mechanical{x}\to\pm\infty$. This is compatible with normalizability. The source notes that not every $L^2$ function tends to zero, but physical wavefunctions do.

> [!note]
> The integrals with omitted limits in the worked proof are over the whole real line. The functions and their derivatives must have suitable regularity and integrability, and the boundary product must vanish. Normalizability alone does not prove these conditions.
>
> This integration-by-parts calculation proves symmetry on a suitable operator domain. To establish self-adjointness for an unbounded operator, its domain must also be specified and compared with the adjoint's domain. The source uses “Hermitian” for the displayed symmetry relation.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{f},\signal{g},\signal{\psi}$ | — | Wavefunctions | State functions used in the momentum-operator proof and boundary condition. Their units depend on normalization. |
| $\mechanical{x}$ | $\unit{m}$ | Position | The position coordinate used in the operator and integral. |
| $\energy{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant in the momentum operator. |
