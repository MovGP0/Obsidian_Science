---
title: "Goldstone Boson Propagators"
---

> [!TLDR]
> The three Goldstone fields remain in Rξ-gauge internal diagrams with gauge-dependent masses. They are not physical external particles.

In $R_\xi$ gauge, the three Goldstone fields do not decouple from the diagram rules.
Their masses depend on $\xi$.
In the unitary-gauge limit $\xi\to\infty$, these explicit unphysical fields decouple.

The gauge-fixing term cancels the quadratic mixing between a massive vector and its Goldstone field. This permits separate vector and scalar propagators. A charged scalar line connects conjugate charged fields; the neutral Goldstone is a real field. Use the same gauge parameter in these denominators and in the corresponding vector propagators.

The decoupling statement above concerns the fixed-momentum propagator limit. It does not justify taking the unitary-gauge limit inside an arbitrary loop integral before checking its ultraviolet behavior. The Goldstone fields represent the broken symmetry directions; the physical massive vector still has a longitudinal polarization when no explicit Goldstone line is used. See [Romão and Silva, section 2.6](https://arxiv.org/html/1209.6213v2#S2.SS6).

The charged Goldstone propagator is
$$
\signal{\Delta}_{\phi^\pm}(\mechanical{p})
=\frac{i}{\mechanical{p}^2-\xi\mechanical{m}_W^2+i\varepsilon},
\tag{C.10}
$$
and the neutral Goldstone propagator is
$$
\signal{\Delta}_{\phi^0}(\mechanical{p})
=\frac{i}{\mechanical{p}^2-\xi\mechanical{m}_Z^2+i\varepsilon}.
\tag{C.11}
$$

> [!note] Correction to the source
> The source calls these physical fields in the diagrams. They are unphysical gauge-dependent fields included in intermediate calculations; they are not additional asymptotic physical particles.

At $\xi=1$, each Goldstone denominator matches the mass of its partner vector. At $\xi=0$, each is massless, although the physical W and Z remain massive. This is a direct way to see why a Goldstone pole is gauge dependent. Both rules have units of $\unit{GeV^{-2}}$ and are even under reversal of the line momentum. A complete physical amplitude must combine these contributions with the other diagrams required at that order.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\Delta}_{\phi^\pm},\signal{\Delta}_{\phi^0}$ | $\unit{GeV^{-2}}$ | Goldstone propagators | The charged and neutral unphysical scalar Green functions. |
| $\mechanical{p}$ | $\unit{GeV}$ | Goldstone line momentum | The four-momentum in the scalar denominators. |
| $\mechanical{m}_W,\mechanical{m}_Z$ | $\unit{GeV}$ | Weak-boson masses | The masses multiplied by the gauge parameter in the Goldstone poles. |
