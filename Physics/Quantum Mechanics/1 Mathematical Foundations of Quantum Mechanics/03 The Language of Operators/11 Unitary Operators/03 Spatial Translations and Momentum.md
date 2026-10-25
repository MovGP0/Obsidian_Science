---
title: "Spatial Translations and Momentum"
---

> [!TLDR]
> Momentum generates spatial translations. The translation operator shifts a position wavefunction, and continuous translation symmetry gives momentum conservation.

The operator for a translation by $\mechanical{a}$ along the $x$ axis is

$$
\hat T(\mechanical{a})=e^{-i\mechanical{a}\hat p/\mechanical{\hbar}}.
$$

## Example — A translation operator shifts the wavefunction

We verify

$$
\hat T(\mechanical{a})\signal{\psi}(\mechanical{x})
=\signal{\psi}(\mechanical{x}-\mechanical{a}).
$$

With $\hat p=-i\mechanical{\hbar}\partial_{\mechanical{x}}$, the formal series gives

$$
\begin{aligned}
\hat T(\mechanical{a})\signal{\psi}(\mechanical{x})
&=e^{-i\mechanical{a}\hat p/\mechanical{\hbar}}\signal{\psi}(\mechanical{x})\\
&=e^{-\mechanical{a}\partial_{\mechanical{x}}}\signal{\psi}(\mechanical{x})\\
&=\sum_{n=0}^{\infty}\frac{(-\mechanical{a})^n}{n!}
\frac{d^n\signal{\psi}}{d\mechanical{x}^n}.
\end{aligned}
$$

This is the Taylor series about $\mechanical{x}$:

$$
\signal{\psi}(\mechanical{x}-\mechanical{a})
=\signal{\psi}(\mechanical{x})-\mechanical{a}\signal{\psi}'(\mechanical{x})
+\frac{\mechanical{a}^2}{2!}\signal{\psi}''(\mechanical{x})-\cdots.
$$

> [!note]
> The Taylor-series argument requires a function for which that series converges to the translated function. The unitary translation itself is defined on all of $L^2(\mathbb R)$ and satisfies the shift formula there, without requiring every wavefunction to be analytic. A positive $\mechanical{a}$ moves the wave packet to the right, although its argument becomes $\mechanical{x}-\mechanical{a}$.

## Translation symmetry and conservation

The quantum form of the Noether correspondence is: if the Hamiltonian is invariant under all translations,

$$
[\hat H,\hat T(\mechanical{a})]=0\qquad\text{for every }\mechanical{a},
$$

then its generator $\hat p$ commutes with $\hat H$, with the appropriate domain conditions. Momentum is conserved.

For a free particle, $\energy{V}=0$, continuous translation invariance holds everywhere. A nonconstant potential $\energy{V}(\mechanical{x})$ breaks this continuous symmetry along $x$, so momentum need not be conserved, as in classical mechanics. A periodic potential can still retain discrete translation symmetry.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{a}$ | $\unit{m}$ | Translation distance | The displacement along the position axis. |
| $\mechanical{x}$ | $\unit{m}$ | Position | The argument of the wavefunction. |
| $\signal{\psi}$ | $\unit{m^{-1/2}}$ | Wavefunction | The one-dimensional position probability amplitude. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale in the translation exponential. |
| $\energy{V}$ | $\unit{J}$ | Potential energy | The potential that can break continuous translation symmetry. |
