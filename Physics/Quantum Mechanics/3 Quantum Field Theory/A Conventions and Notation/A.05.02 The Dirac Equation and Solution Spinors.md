---
title: "The Dirac Equation and Solution Spinors"
---

> [!TLDR]
> The free Dirac equation admits a Fourier expansion in particle and antiparticle spinors with the invariant momentum measure.

The vacuum Dirac equation is
$$
(i\not{\partial}-\mechanical{m})\signal{\psi}=0.
\tag{A.47}
$$
Its Fourier expansion is
$$
\signal{\psi}(\mechanical{x})
=\int\frac{d^3\mechanical{\mathbf p}}{(2\pi)^3\,2\energy{E}_{\mathbf p}}
\sum_{s=1,2}
\left[
u^{(s)}(\mechanical{\mathbf p})\,a_{\mathbf p}^{(s)}
e^{-i\mechanical{p}\cdot\mechanical{x}}
+v^{(s)}(\mechanical{\mathbf p})\,b_{\mathbf p}^{(s)\dagger}
e^{+i\mechanical{p}\cdot\mechanical{x}}
\right],
\tag{A.48}
$$
where
$$
\energy{E}_{\mathbf p}
=\sqrt{\lvert\mechanical{\mathbf p}\rvert^2+\mechanical{m}^2}.
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\psi}$ | $\unit{GeV^{3/2}}$ | Dirac field | The free spinor field expanded in particle and antiparticle modes. |
| $\mechanical{m}$ | $\unit{GeV}$ | Fermion mass | The mass in the Dirac equation and dispersion relation. |
| $\mechanical{p},\mechanical{\mathbf p}$ | $\unit{GeV}$ | Four-momentum and three-momentum | The on-shell mode momentum and its spatial part. |
| $\mechanical{x}$ | $\unit{GeV^{-1}}$ | Spacetime point | The coordinate in the field and Fourier phases. |
| $\energy{E}_{\mathbf p}$ | $\unit{GeV}$ | Mode energy | The positive on-shell energy in the invariant integration measure. |
