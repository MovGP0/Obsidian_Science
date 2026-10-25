---
title: "Common Errors"
---

> [!TLDR]
> Keep the imaginary part separate from its factor of i, and distinguish absolute value from squared absolute value. Root choices, the triangle inequality, and conjugation in inner products also need care.

This section collects the most common errors in exercises and examinations.

## Error 1 — Confuse Im(z) with i Im(z)

The imaginary part of $z=3+5\mathrm{i}$ is $\operatorname{Im}(z)=5$, not $5\mathrm{i}$. The form $a+\mathrm{i}b$ already includes the factor $\mathrm{i}$. It is incorrect to write $\operatorname{Im}(3+5\mathrm{i})=5\mathrm{i}$.

## Error 2 — Confuse |z| with |z|²

The absolute value is $\sqrt{a^2+b^2}$. If you need the squared absolute value, which occurs often in quantum mechanics, it is correct and useful to leave it as

$$
|z|^2=a^2+b^2.
$$

Do not take the square root in that case. Confusion between these two quantities is a frequent source of errors.

## Error 3 — Treat the complex square root as unique

For a positive real number, we use the convention $\sqrt4=2$. For a complex number, $\sqrt z$ has two values. There is no natural choice of square root that is continuous on all of $\mathbb{C}$. When you write $\sqrt z$ in a complex context, specify which root you mean.

> [!note]
> The statement about two values assumes $z\ne0$. At $z=0$, the two roots coincide. A chosen branch can give a single-valued square-root function on a suitable restricted domain.

## Error 4 — Assume |z₁ + z₂| = |z₁| + |z₂|

This equality is false in general. The **triangle inequality** gives

$$
|z_1+z_2|\le |z_1|+|z_2|.
$$

Equality holds exactly when $z_2=\lambda z_1$ with $\lambda\ge0$, or when one of the two numbers is zero. Geometrically, one side of a triangle is no longer than the sum of the other two sides. The source describes equality as the case of collinear vectors.

> [!note]
> For two nonzero vectors, collinearity alone is not sufficient for equality. They must also point in the same direction, as the condition $\lambda\ge0$ requires.

## Error 5 — Omit conjugation in the inner product

In quantum mechanics, the inner product is

$$
\langle\signal{\psi},\signal{\phi}\rangle
=\int\signal{\psi}^*\signal{\phi}\,\mathrm{d}\mechanical{x}.
$$

The **first** argument is conjugated. If you write $\int\signal{\psi}\signal{\phi}\,\mathrm{d}\mechanical{x}$ without conjugation, the result is generally not even real.

> [!note]
> A correct inner product between two different states can also be complex. Conjugation ensures that the self-inner-product $\langle\signal{\psi},\signal{\psi}\rangle$ is real and nonnegative. The source's final statement needs this distinction.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\psi},\signal{\phi}$ | — | Wavefunctions | The two state wavefunctions in the position-space inner product. Their units depend on the representation and normalization. |
| $\mechanical{x}$ | $\unit{m}$ | Position | The position coordinate used for integration. |
