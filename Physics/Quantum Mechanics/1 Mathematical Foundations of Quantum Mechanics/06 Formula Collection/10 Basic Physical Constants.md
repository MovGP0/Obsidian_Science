---
title: "Basic Physical Constants"
---

> [!TLDR]
> These rounded constants set the scales used in quantum calculations. The fine-structure constant, Bohr radius, and Hartree energy connect the electromagnetic and atomic scales.

The numerical values below retain the precision of the supplied source. They are rounded reference values, so they are written with approximate equality.

## Fundamental constants

$$
\mechanical{\hbar}\approx1.055\times10^{-34}\,\unit{J\,s},
$$

$$
\mechanical{m_e}\approx9.109\times10^{-31}\,\unit{kg},
$$

$$
\electric{e}\approx1.602\times10^{-19}\,\unit{C},
$$

$$
\thermal{k_B}\approx1.381\times10^{-23}\,\unit{J\,K^{-1}},
$$

$$
\signal{c}\approx2.998\times10^8\,\unit{m\,s^{-1}},
$$

$$
\electric{\varepsilon_0}\approx8.854\times10^{-12}\,\unit{F\,m^{-1}}.
$$

## Atomic constants

The fine-structure constant is

$$
\electric{\alpha}
=\frac{\electric{e}^2}
{4\pi\electric{\varepsilon_0}\mechanical{\hbar}\signal{c}}
\approx\frac1{137}.
$$

The Bohr radius is

$$
\mechanical{a_0}
=\frac{4\pi\electric{\varepsilon_0}\mechanical{\hbar}^2}
{\mechanical{m_e}\electric{e}^2}
\approx5.292\times10^{-11}\,\unit{m}.
$$

The Hartree energy is

$$
\energy{E_h}
=\frac{\mechanical{m_e}\electric{e}^4}
{(4\pi\electric{\varepsilon_0})^2\mechanical{\hbar}^2}
\approx27.21\,\unit{eV}.
$$

Here, $\mechanical{\hbar}$ is the reduced Planck constant, $\mechanical{m_e}$ is the electron mass, $\electric{e}$ is the elementary charge, $\thermal{k_B}$ is the Boltzmann constant, $\signal{c}$ is the speed of light in vacuum, and $\electric{\varepsilon_0}$ is the vacuum permittivity.

## Use and consistency checks

Use the SI formulas as a complete set: the Coulomb factor $4\pi\electric{\varepsilon_0}$ must remain present. Formulas in Gaussian units distribute this factor differently. Also, $\electric{e}>0$ is a charge magnitude; the electron charge is $-\electric{e}$. Its sign matters in an interaction even though the atomic scales above contain even powers.

Substitution of the fine-structure constant gives two useful checks on the atomic scales:

$$
\mechanical{a_0}=\frac{\mechanical{\hbar}}
{\mechanical{m_e}\signal{c}\electric{\alpha}},
\qquad
\energy{E_h}=\electric{\alpha}^2\mechanical{m_e}\signal{c}^2
=\frac{\electric{e}^2}{4\pi\electric{\varepsilon_0}\mechanical{a_0}}.
$$

The first ratio has units of length; each expression for the Hartree has units of energy. These equivalent definitions also appear in the [NIST CODATA constants table](https://physics.nist.gov/cuu/pdf/wall_2022.pdf). This link checks the definitions; the rounded source values on this page are retained.

For the nonrelativistic hydrogen problem with an infinitely heavy point nucleus, the ground-state energy is $-\energy{E_h}/2$. Thus the positive Hartree is an energy unit, not the signed energy of that bound state, and the Bohr radius is a length scale rather than the radius of a classical orbit. Finite nuclear mass changes the hydrogen scales through the reduced mass, as in the [NIST DLMF Coulomb equation](https://dlmf.nist.gov/33.22.i); relativistic and radiative corrections require additional physics.

Keep units consistent before inserting numbers. In particular, the displayed Hartree value is in electronvolts, whereas the fundamental constants above are in SI units. Rounding at the start can make two equivalent formulas differ in their last digits; such a difference alone does not show a physical discrepancy.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale in quantum mechanics. |
| $\mechanical{m_e}$ | $\unit{kg}$ | Electron mass | The mass used in the atomic scales. |
| $\electric{e}$ | $\unit{C}$ | Elementary charge | The positive magnitude of the electron charge. |
| $\thermal{k_B}$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | The conversion factor between temperature and energy. |
| $\signal{c}$ | $\unit{m\,s^{-1}}$ | Speed of light | The propagation speed of light in vacuum. |
| $\electric{\varepsilon_0}$ | $\unit{F\,m^{-1}}$ | Vacuum permittivity | The electric constant in the Coulomb interaction. |
| $\electric{\alpha}$ | $\unit{1}$ | Fine-structure constant | The dimensionless electromagnetic coupling strength. |
| $\mechanical{a_0}$ | $\unit{m}$ | Bohr radius | The atomic length scale for hydrogen. |
| $\energy{E_h}$ | $\unit{eV}$ | Hartree energy | The atomic energy scale. |
