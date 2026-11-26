---
title: "Material properties"
---

> [!TLDR]
> Young's modulus and Poisson's ratio describe how an elastic material deforms under load.

## [Young's modulus](https://en.wikipedia.org/wiki/Young%27s_modulus) (E)

- Describes the behavior of a material in the elastic range: $$ \mechanical{\sigma} = \mechanical{E}\,\mechanical{\epsilon} $$
- Can depend on the direction in some materials (for example, wood and composite materials).
- Elastomers are very flexible and have a very small $\mechanical{E}$ (approximately $\quantity{1}{MPa}$ to $\quantity{100}{MPa}$). Ceramics have a very large $\mechanical{E}$ (approximately $\quantity{100}{GPa}$ to $\quantity{400}{GPa}$).

## [Poisson's ratio](https://en.wikipedia.org/wiki/Poisson%27s_ratio) (ν)

- Describes the ratio of transverse strain to axial strain in the elastic range. The strain along one axis is: $$ \mechanical{\epsilon}_x = \frac{ \Delta \mechanical{l}_x }{ \mechanical{l}_x } $$
- A material expands sideways when you compress it. It becomes narrower when you pull it. For a load along $x$: $$ \mechanical{\nu} = -\frac{ \mechanical{\epsilon}_{\mathrm{trans}} }{ \mechanical{\epsilon}_{\mathrm{axial}} } = -\frac{ \mechanical{\epsilon}_y }{ \mechanical{\epsilon}_x } $$
- For isotropic materials, the value is in the range $\mechanical{\nu} \in [-1, 0.5]$. Most materials have $\mechanical{\nu} \geq 0$.
- Generalized Hooke's law (isotropic material): $$ \mechanical{\epsilon}_x = \frac{1}{\mechanical{E}}\left[ \mechanical{\sigma}_x - \mechanical{\nu} \left( \mechanical{\sigma}_y + \mechanical{\sigma}_z \right) \right] $$

## References

- [The Efficient Engineer](https://www.youtube.com/@TheEfficientEngineer)

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\sigma}$, $\mechanical{\sigma}_x$, $\mechanical{\sigma}_y$, $\mechanical{\sigma}_z$ | $\unit{Pa}$ | Normal stress | Normal stress, in total or along the $x$, $y$, or $z$ axis. |
| $\mechanical{\epsilon}$, $\mechanical{\epsilon}_x$, $\mechanical{\epsilon}_y$ | $1$ | Normal strain | Relative change in length, in total or along the $x$ or $y$ axis. |
| $\mechanical{\epsilon}_{\mathrm{trans}}$, $\mechanical{\epsilon}_{\mathrm{axial}}$ | $1$ | Transverse and axial strain | Strain at a right angle to the load and strain along the load. |
| $\mechanical{E}$ | $\unit{Pa}$ | Young's modulus | Ratio of normal stress to normal strain in the elastic range. |
| $\mechanical{\nu}$ | $1$ | Poisson's ratio | Negative ratio of transverse strain to axial strain. |
| $\mechanical{l}_x$, $\Delta\mechanical{l}_x$ | $\unit{m}$ | Length and change in length | Initial length along the $x$ axis and its change under load. |
