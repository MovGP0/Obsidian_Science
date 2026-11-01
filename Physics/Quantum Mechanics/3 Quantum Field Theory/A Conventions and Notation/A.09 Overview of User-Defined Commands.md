---
title: "Overview of User-Defined Commands"
---

> [!TLDR]
> This reference records the custom LaTeX shorthand commands used in the source text.

The following list records the user-defined LaTeX macros used by the source.

**Table A.4** User-defined LaTeX commands in the source.

| Command | Typical output | Description |
| --- | --- | --- |
| `\lag` | $\energy{\mathcal L}$ | Lagrangian density |
| `\ham` | $\energy{\mathcal H}$ | Hamiltonian density |
| `\dd` | $\mathrm d$ | Upright differential symbol |
| `\Dp{f}{x}` | $\frac{\partial f}{\partial x}$ | Partial derivative of $f$ with respect to $x$ |
| `\comm{A}{B}` | $[A,B]$ | Commutator |
| `\acomm{A}{B}` | $\{A,B\}$ | Anticommutator |
| `\bvec{k}` | $\boldsymbol{k}$ | Bold vector |
| `\dslash{p}` | $\not{p}$ | Feynman slash |
| `\tr` | $\operatorname{tr}$ | Trace with lowercase notation |
| `\Tr` | $\operatorname{Tr}$ | Trace with uppercase notation |

> [!note]
> These are the source document's command names. The examples show their intended notation; the literal commands are not required for the vault's MathJax definitions.

Use this table to read the source notation, rather than paste its command names into a vault equation. The actual vault definitions are in `preamble.sty`; the semantic quantity macros there select a color by physical meaning. A shorthand for a Lagrangian or a bold vector does not by itself specify a physical dimension, a vector's transformation rule, or an operator ordering.

For example, `\dslash{p}` denotes contraction with a lowered momentum index, as defined in [[A.04.01 Clifford Algebra]], not a quotient by the momentum. The two trace commands differ typographically here, not by a new trace operation. Expanding `\comm{A}{B}` gives $AB-BA$, whereas expanding `\acomm{A}{B}` gives $AB+BA$; the order of the factors must remain fixed for matrices. This small check distinguishes notation replacement from an algebraic simplification.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{\mathcal L},\energy{\mathcal H}$ | $\unit{GeV^4}$ | Lagrangian and Hamiltonian densities | The physical densities represented by the source's first two commands in four-dimensional natural units. |
