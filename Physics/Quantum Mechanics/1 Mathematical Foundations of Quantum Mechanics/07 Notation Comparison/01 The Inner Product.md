---
title: "The Inner Product"
---

> [!TLDR]
> This book conjugates the first inner-product argument. Many mathematics texts conjugate the second argument; either convention works when all formulas follow it consistently.

## Compare the conventions

For complex column vectors $u$ and $v$:

| Feature | Physics convention used in this book | Common mathematics convention |
| --- | --- | --- |
| Definition | $\langle u,v\rangle=u^{\dagger}v$ | $\langle u,v\rangle=u^T\overline v$ |
| Antilinear argument | First argument | Second argument |
| Dirac notation | $\langle u\vert v\rangle$ | Usually not used in this form |

In the physics convention,

$$
\langle\alpha u,v\rangle=\alpha^*\langle u,v\rangle.
$$

In the mathematics convention shown above,

$$
\langle u,\alpha v\rangle=\alpha^*\langle u,v\rangle.
$$

The two displayed definitions give complex-conjugate values for the same ordered vector pair. They encode equivalent inner-product structures. Keep the chosen convention consistent when taking adjoints, expanding states, and calculating coefficients.

> [!note] Check the author's definition
> The column headings describe common choices, rather than a rule followed by every author. Some mathematics texts also use the physics convention.
