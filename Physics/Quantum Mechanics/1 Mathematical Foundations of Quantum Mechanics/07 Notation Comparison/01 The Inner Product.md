---
title: "The Inner Product"
---

> [!TLDR]
> This book conjugates the first inner-product argument. Many mathematics texts conjugate the second argument; either convention works when all formulas follow it consistently.

## Compare the conventions

For complex column vectors $u$ and $v$ in the same orthonormal basis:

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

To see why the order matters, take $u=(1,0)^T$ and $v=(i,1)^T$. The physics definition gives $i$, while the mathematics definition in the table gives $-i$. Both give $\langle v,v\rangle=2$. Thus a real norm does not determine which convention an author uses; a non-real cross product does.

For an orthonormal basis $\{e_n\}$ and an expansion $v=\sum_n c_ne_n$, the same coefficients are

$$
c_n=\langle e_n,v\rangle_{\mathrm{phys}}
=\langle v,e_n\rangle_{\mathrm{math}}.
$$

The argument order changes because the coefficient must occur in the linear argument. In a countably infinite basis the expansion converges in Hilbert-space norm. For functions, replace the coordinate sum by an integral: the physics convention is $\langle f,g\rangle=\int\overline{f(x)}g(x)\,dx$ when the functions are square-integrable. A generalized position ket is not a square-integrable basis vector.

**Try the translation:** For $v=(1,i)^T/\sqrt2$, recover its second coefficient using both conventions. Both must give $i/\sqrt2$; keeping the same argument order in both gives the wrong sign in one convention.

> [!note] Check the author's definition
> The column headings describe common choices, rather than a rule followed by every author. Some mathematics texts also use the physics convention.
