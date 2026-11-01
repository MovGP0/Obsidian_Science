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

The calculation first defines integrals where they converge, then continues the resulting functions of dimension. Choosing a small positive regulator softens the ultraviolet behavior of a logarithmically divergent integral, but does not make every divergent integral converge. For example, a quadratic ultraviolet divergence requires a larger initial change of dimension before continuation. Infrared divergences require separate analysis.

The scale factor can be checked from [[A.01.02 Dimensions in Natural Units]]: a quartic scalar interaction has coupling dimension $4-d=2\varepsilon$, so its dimensionless four-dimensional coupling requires two regulator powers of the reference scale. This explains the interaction-dependent warning above. Use [[A.08.02 Feynman Parametrization]] to combine denominators, [[A.08.01 Gaussian Integrals in d Euclidean Dimensions]] to evaluate the continued integral, and [[A.08.04 Expansion around d = 4]] to separate its pole and finite terms. A regulator pole is not yet a physical prediction or a renormalized observable.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{\mu}$ | $\unit{GeV}$ | Renormalization reference scale | The mass scale introduced in dimensional regularization. |
| $\signal{g}$ | $1$ | Four-dimensional coupling | The dimensionless gauge or Yukawa coupling before the scale factor. |
