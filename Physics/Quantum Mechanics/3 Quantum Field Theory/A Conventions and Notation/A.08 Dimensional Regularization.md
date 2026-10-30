---
title: "Dimensional Regularization"
---

> [!TLDR]
> Dimensional regularization analytically continues spacetime dimension and introduces a reference scale to retain the dimensions of interaction couplings.

Continue the spacetime dimension analytically to
$$
d=4-2\varepsilon,
\qquad \varepsilon>0,
$$
to regulate divergent integrals.
Introduce the **'t Hooft mass scale** $\energy{\mu}$ to keep the coupling convention consistent.
A coupling $\signal{g}$ that is dimensionless in four dimensions is replaced by
$$
\signal{g}\,\energy{\mu}^{\varepsilon}
$$
in the stated $d$-dimensional convention.

> [!note]
> Dimensional regularization does not remove the original ultraviolet divergence. It represents it through poles in the regulator, which must be treated by renormalization. The required scale power depends on the interaction; the source's $\signal{g}\energy{\mu}^\varepsilon$ rule applies to gauge and Yukawa couplings in $d=4-2\varepsilon$. A quartic scalar coupling has a different scale power.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{\mu}$ | $\unit{GeV}$ | Renormalization reference scale | The mass scale introduced in dimensional regularization. |
| $\signal{g}$ | $1$ | Four-dimensional coupling | The dimensionless gauge or Yukawa coupling before the scale factor. |
