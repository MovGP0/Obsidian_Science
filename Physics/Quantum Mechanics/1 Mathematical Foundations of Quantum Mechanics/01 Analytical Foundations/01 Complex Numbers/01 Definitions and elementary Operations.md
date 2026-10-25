---
title: "Definitions and elementary operations"
---

> [!TLDR]
> A complex number has the form $z=a+\mathrm{i}b$, where $a$ and $b$ are real and $\mathrm{i}^2=-1$. Addition and multiplication use the usual algebraic rules with this extra relation.

We now give a formal definition of what Bombelli understood intuitively.

> [!definition] Definition 1.1 — Imaginary unit and complex numbers
> The **imaginary unit** $\mathrm{i}$ has the defining property
>
> $$
> \mathrm{i}^2=-1.
> $$
>
> A **complex number** is an ordered pair $(a,b)\in\mathbb{R}^2$, written in the form
>
> $$
> z=a+\mathrm{i}b,\qquad a,b\in\mathbb{R}.
> $$
>
> The component $a=\operatorname{Re}(z)$ is the **real part**. The component $b=\operatorname{Im}(z)$ is the **imaginary part**. The set of all complex numbers is $\mathbb{C}$.

> [!note]
> Use the terms carefully. The imaginary part of $z=3+5\mathrm{i}$ is $5$, not $5\mathrm{i}$. It is a real number. This is a common error.

We extend the algebraic operations to complex numbers. Apply the usual rules of algebra and replace $\mathrm{i}^2$ with $-1$ wherever it occurs:

$$
(a+\mathrm{i}b)+(c+\mathrm{i}d)=(a+c)+\mathrm{i}(b+d). \tag{1.1}
$$

$$
\begin{aligned}
(a+\mathrm{i}b)(c+\mathrm{i}d)
&=ac+\mathrm{i}ad+\mathrm{i}bc+\mathrm{i}^2bd\\
&=(ac-bd)+\mathrm{i}(ad+bc).
\end{aligned} \tag{1.2}
$$

Addition follows directly from these rules. The following example shows how multiplication works.

## Example — Product of two complex numbers

Calculate $(2+3\mathrm{i})(1-\mathrm{i})$.

Use equation (1.2) with $a=2$, $b=3$, $c=1$, and $d=-1$:

$$
(2+3\mathrm{i})(1-\mathrm{i})
=\bigl(2\cdot1-3\cdot(-1)\bigr)
+\mathrm{i}\bigl(2\cdot(-1)+3\cdot1\bigr)
=5+\mathrm{i}.
$$

Alternatively, expand the product as two binomials. This method does not require you to memorize the formula:

$$
\begin{aligned}
(2+3\mathrm{i})(1-\mathrm{i})
&=2-2\mathrm{i}+3\mathrm{i}-3\mathrm{i}^2\\
&=2+\mathrm{i}-3(-1)\\
&=5+\mathrm{i}.
\end{aligned}
$$

The second method is more reliable because it does not depend on memorization.
