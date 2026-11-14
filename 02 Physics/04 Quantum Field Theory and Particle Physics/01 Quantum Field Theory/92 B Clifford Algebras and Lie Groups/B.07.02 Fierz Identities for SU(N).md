---
title: "Fierz Identities for SU(N)"
---

> [!TLDR]
> The SU(N) Fierz identity replaces a contracted generator pair by direct and exchanged Kronecker-delta contractions, which simplifies QCD color currents.

The completeness relation (B.49) can be written as
$$
T^a_{ij}T^a_{kl}
=\frac12\delta_{il}\delta_{kj}
-\frac1{2N}\delta_{ij}\delta_{kl}.
\tag{B.74}
$$
This identity underlies many simplifications in QCD calculations.

## Product of two color currents

$$
\begin{aligned}
&(\bar{\signal{q}}_i\gamma^\mu T^a_{ij}\signal{q}_j)
(\bar{\signal{q}}_k\gamma_\mu T^a_{kl}\signal{q}_l)\\
&\qquad=\frac12
(\bar{\signal{q}}_i\gamma^\mu\signal{q}_j)
(\bar{\signal{q}}_j\gamma_\mu\signal{q}_i)
-\frac1{2N}
(\bar{\signal{q}}_i\gamma^\mu\signal{q}_i)
(\bar{\signal{q}}_k\gamma_\mu\signal{q}_k).
\end{aligned}
\tag{B.75}
$$

## Color structures in Feynman diagrams

The source lists these elementary QCD color factors:
$$
q\text{–}q\text{–}g\text{ vertex}:\qquad T^a_{ij},
\tag{B.76}
$$
$$
\text{Three-gluon interaction}:\qquad \signal{g}\,f^{abc},
\tag{B.77}
$$
$$
\text{Four-gluon color channels}:\qquad
\signal{g}^2\bigl(
f^{abe}f^{cde}+f^{ace}f^{bde}+f^{ade}f^{bce}
\bigr).
\tag{B.78}
$$
Here $\signal{g}$ denotes the strong gauge coupling.

> [!note]
> The source suppresses the momentum, Lorentz, and phase factors. In the full four-gluon vertex, the three products of structure constants multiply different Lorentz tensors. Their unweighted sum in (B.78) is a schematic list of color channels, not the complete vertex.

## Color exchange is not spinor exchange

Equation (B.74) resolves the full matrix space into its singlet identity and its traceless part. It acts on fundamental color indices, not on the four spinor components. To obtain (B.75), replace the two generators by the Kronecker deltas and rename the contracted color labels. No fermion fields need to pass through each other in this step, so it adds no Grassmann sign. A later spinor Fierz rearrangement is a separate operation with its own ordering convention.

As a check, contract (B.74) with $\delta_{ji}$. The left side vanishes because each generator is traceless. The two right-side terms cancel exactly; dropping the $1/N$ subtraction would fail this check.

The quark-field units in the table assume four spacetime dimensions, a canonical kinetic term, and natural units. With those conventions a color current has mass dimension three and the product in (B.75) has dimension six on both sides. The listed vertex color factors still require their separate momentum and Lorentz tensors. They cannot be squared as complete scattering amplitudes.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{q}_i,\bar{\signal{q}}_i$ | $\unit{GeV^{3/2}}$ | Quark fields and adjoints | The color components in the QCD currents. |
| $\signal{g}$ | $1$ | Strong gauge coupling | The interaction coefficient attached to the gluon self-interactions. |
