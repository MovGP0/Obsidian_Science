---
title: "Physical constants, decimal prefixes, and SI units"
catalogue_ids:
  - "21.2"
  - "21.3"
  - "21.4"
---

> [!TLDR]
> Keep a physical value, its unit, and its uncertainty together; SI prefixes change scale and SI definitions distinguish exact constants from measured constants.

## Physical constants: exact and measured

The table below uses the **2022 CODATA adjustment**, checked against the NIST table on 18 October 2026. Parentheses give standard uncertainty in the final digits: $6.67430(15)$ means $6.67430\pm0.00015$. This uncertainty is not a guaranteed maximum error. The listed defining constants are exact in SI; their experimental realization still has uncertainty. [NIST complete CODATA table](https://physics.nist.gov/cuu/Constants/Table/allascii.txt)

| Constant | Value in SI | Status |
| --- | --- | --- |
| Speed of light $\mechanical{c}$ | $299\,792\,458\,\unit{m\,s^{-1}}$ | Exact |
| Planck constant $\energy{h}$ | $6.62607015\times10^{-34}\,\unit{J\,s}$ | Exact |
| Elementary charge $\electric{e}$ | $1.602176634\times10^{-19}\,\unit{C}$ | Exact |
| Boltzmann constant $\thermal{k_{\mathrm B}}$ | $1.380649\times10^{-23}\,\unit{J\,K^{-1}}$ | Exact |
| Avogadro constant $N_{\mathrm A}$ | $6.02214076\times10^{23}\,\unit{mol^{-1}}$ | Exact |
| Gravitational constant $\mechanical{G}$ | $6.67430(15)\times10^{-11}\,\unit{m^3\,kg^{-1}\,s^{-2}}$ | Measured |
| Electron mass $\mechanical{m_{\mathrm e}}$ | $9.1093837139(28)\times10^{-31}\,\unit{kg}$ | Measured |
| Fine-structure constant $\electric{\alpha}$ | $7.2973525643(11)\times10^{-3}$ | Measured, dimensionless |

The constant $\electric{e}$ is the positive elementary charge, not Euler's number from [[Numerical constants and rounding]]. Subscripts identify a quantity and remain uncolored labels. Avogadro's constant is a count per amount of substance; none of the vault's specialized color groups applies to it.

## Decimal prefixes

A prefix multiplies a unit by a power of ten. The full current list includes the four prefixes adopted in 2022. Symbols are case sensitive: $\unit{m}$ as a prefix means milli, while $\unit{M}$ means mega. [BIPM SI prefixes](https://www.bipm.org/en/measurement-units/si-prefixes)

| Positive power | Prefix and symbol | Negative power | Prefix and symbol |
| --- | --- | --- | --- |
| $10^1$ | deca, da | $10^{-1}$ | deci, d |
| $10^2$ | hecto, h | $10^{-2}$ | centi, c |
| $10^3$ | kilo, k | $10^{-3}$ | milli, m |
| $10^6$ | mega, M | $10^{-6}$ | micro, μ |
| $10^9$ | giga, G | $10^{-9}$ | nano, n |
| $10^{12}$ | tera, T | $10^{-12}$ | pico, p |
| $10^{15}$ | peta, P | $10^{-15}$ | femto, f |
| $10^{18}$ | exa, E | $10^{-18}$ | atto, a |
| $10^{21}$ | zetta, Z | $10^{-21}$ | zepto, z |
| $10^{24}$ | yotta, Y | $10^{-24}$ | yocto, y |
| $10^{27}$ | ronna, R | $10^{-27}$ | ronto, r |
| $10^{30}$ | quetta, Q | $10^{-30}$ | quecto, q |

Do not apply a decimal prefix as a binary multiplier. A kilobyte uses 1000 bytes; a kibibyte uses 1024 bytes. Do not stack prefixes. For mass, prefixes attach to gram: use milligram, not microkilogram.

## Base units and derived units

SI has seven base units. Their definitions use fixed numerical values of constants. The table identifies the quantity and unit; it is not an experimental recipe for realizing each unit.

| Quantity | SI base unit | Symbol |
| --- | --- | --- |
| Time | second | $\unit{s}$ |
| Length | metre | $\unit{m}$ |
| Mass | kilogram | $\unit{kg}$ |
| Electric current | ampere | $\unit{A}$ |
| Thermodynamic temperature | kelvin | $\unit{K}$ |
| Amount of substance | mole | $\unit{mol}$ |
| Luminous intensity | candela | $\unit{cd}$ |

Derived units follow algebra: $\unit{N}=\unit{kg\,m\,s^{-2}}$, $\unit{J}=\unit{N\,m}$, $\unit{W}=\unit{J\,s^{-1}}$, and $\unit{C}=\unit{A\,s}$. Radian is the unit of plane angle and has dimension one. The SI brochure also specifies typography and accepted non-SI units. This article follows the ninth edition (2019), updated online version consulted on 18 October 2026. [BIPM SI brochure](https://www.bipm.org/en/publications/si-brochure)

## Worked example: convert before squaring

For a square with side $\mechanical{l}=3\,\unit{cm}$, first write $\mechanical{l}=0.03\,\unit{m}$. Then its area is

$$
\mechanical{A}=\mechanical{l}^{\,2}
=(0.03\,\unit{m})^2=0.0009\,\unit{m^2}.
$$

Thus $1\,\unit{cm^2}=10^{-4}\,\unit{m^2}$. The exponent applies to the whole prefixed unit. A frequent mistake is to use $10^{-2}$ for both length and area. A unit check detects many wrong factors before a calculator is used.

For a second example, a photon with frequency $\signal{f}=5.00\times10^{14}\,\unit{Hz}$ has energy $\energy{E}=\energy{h}\signal{f}\approx3.31\times10^{-19}\,\unit{J}$. The unit product is $\unit{J\,s}\,\unit{s^{-1}}=\unit{J}$. The three significant figures come from the frequency, even though the Planck constant is exact.

## Practice

1. Convert $2.5\,\unit{mm^3}$ to cubic metres.
2. Explain $\mechanical{m_{\mathrm e}}=9.1093837139(28)\times10^{-31}\,\unit{kg}$ and determine its absolute standard uncertainty.

> [!example]- Worked answers
> 1. Since $1\,\unit{mm}=10^{-3}\,\unit{m}$, cubing gives $1\,\unit{mm^3}=10^{-9}\,\unit{m^3}$. The result is $2.5\times10^{-9}\,\unit{m^3}$.
> 2. The uncertainty belongs to the last two displayed digits. It is $0.0000000028\times10^{-31}\,\unit{kg}=2.8\times10^{-40}\,\unit{kg}$. The mass is measured; the SI definition of the kilogram does not make every mass exact.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Speed of light | Exact vacuum speed in SI. |
| $\energy{h}$ | $\unit{J\,s}$ | Planck constant | Exact energy–frequency conversion constant. |
| $\electric{e}$ | $\unit{C}$ | Elementary charge | Exact positive charge magnitude. |
| $\thermal{k_{\mathrm B}}$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | Exact temperature–energy conversion constant. |
| $N_{\mathrm A}$ | $\unit{mol^{-1}}$ | Avogadro constant | Exact number of entities per mole. |
| $\mechanical{G}$ | $\unit{m^3\,kg^{-1}\,s^{-2}}$ | Gravitational constant | Measured Newtonian coupling constant. |
| $\mechanical{m_{\mathrm e}}$ | $\unit{kg}$ | Electron mass | Measured rest mass of an electron. |
| $\electric{\alpha}$ | $1$ | Fine-structure constant | Dimensionless electromagnetic coupling. |
| $\mechanical{l}$ | $\unit{m}$ | Length | Side length in the conversion example. |
| $\mechanical{A}$ | $\unit{m^2}$ | Area | Area of the example square. |
| $\signal{f}$ | $\unit{Hz}$ | Frequency | Photon frequency in the example. |
| $\energy{E}$ | $\unit{J}$ | Energy | Photon energy calculated from frequency. |
| — | $\unit{m^3}$ | Volume | Volume in the conversion exercise. |
