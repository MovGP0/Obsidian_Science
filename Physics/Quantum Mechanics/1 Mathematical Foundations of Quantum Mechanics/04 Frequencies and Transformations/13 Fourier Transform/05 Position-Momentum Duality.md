---
title: "Position–Momentum Duality"
---

> [!TLDR]
> Position and momentum wavefunctions represent the same state in different bases. Their Fourier normalization includes ℏ, and a normalized Gaussian gives the minimum position–momentum uncertainty product.

Wavenumber and momentum are related by $\mechanical{p}=\mechanical{\hbar}\signal{k}$. Define the momentum wavefunction by

$$
\signal{\widetilde\psi}(\mechanical{p})
=\frac1{\sqrt{2\pi\mechanical{\hbar}}}
\int_{-\infty}^{+\infty}\signal{\psi}(\mechanical{x})
e^{-i\mechanical{p}\mechanical{x}/\mechanical{\hbar}}\,d\mechanical{x}.
$$

The inverse is

$$
\signal{\psi}(\mechanical{x})
=\frac1{\sqrt{2\pi\mechanical{\hbar}}}
\int_{-\infty}^{+\infty}\signal{\widetilde\psi}(\mechanical{p})
e^{i\mechanical{p}\mechanical{x}/\mechanical{\hbar}}\,d\mechanical{p}.
$$

The two functions describe the same quantum state in different bases. Their probability densities are

$$
\signal{\rho_x}(\mechanical{x})=|\signal{\psi}(\mechanical{x})|^2,
\qquad
\signal{\rho_p}(\mechanical{p})=|\signal{\widetilde\psi}(\mechanical{p})|^2.
$$

## Operators in the two representations

In position space,

$$
\hat p\signal{\psi}(\mechanical{x})
=-i\mechanical{\hbar}\frac{\partial\signal{\psi}}{\partial\mechanical{x}}.
$$

In momentum space, the same operator acts by multiplication:

$$
\widetilde{(\hat p\psi)}(\mechanical{p})
=\mechanical{p}\signal{\widetilde\psi}(\mechanical{p}).
$$

**Proof.** First distinguish the wavenumber transform $\signal{\hat\psi}$ from the momentum transform:

$$
\signal{\widetilde\psi}(\mechanical{p})
=\frac1{\sqrt{\mechanical{\hbar}}}
\signal{\hat\psi}(\mechanical{p}/\mechanical{\hbar}).
$$

The derivative property then gives

$$
\begin{aligned}
\widetilde{(\hat p\psi)}(\mechanical{p})
&=\frac1{\sqrt{\mechanical{\hbar}}}
\mathcal F[-i\mechanical{\hbar}\partial_{\mechanical{x}}\signal{\psi}]
(\mechanical{p}/\mechanical{\hbar})\\
&=\frac1{\sqrt{\mechanical{\hbar}}}
(-i\mechanical{\hbar})\,i\frac{\mechanical{p}}{\mechanical{\hbar}}
\signal{\hat\psi}(\mechanical{p}/\mechanical{\hbar})\\
&=\mechanical{p}\signal{\widetilde\psi}(\mechanical{p}).
\end{aligned}
$$

The source’s short proof suppresses the factor $1/\sqrt{\mechanical{\hbar}}$ when switching from $k$ to $p$. It is retained here to preserve normalization.

Conversely, in momentum space,

$$
\hat x\signal{\widetilde\psi}(\mechanical{p})
=i\mechanical{\hbar}\frac{\partial\signal{\widetilde\psi}}{\partial\mechanical{p}}.
$$

## Example — Complete Gaussian wave-packet calculation

Let

$$
\signal{\psi}(\mechanical{x})
=\left(\frac1{2\pi\mechanical{\sigma}^2}\right)^{1/4}
e^{-\mechanical{x}^2/(4\mechanical{\sigma}^2)}
e^{i\mechanical{p_0}\mechanical{x}/\mechanical{\hbar}},
\qquad\mechanical{\sigma}>0.
$$

The phase factor is a spatial frequency modulation. The modulation property shifts the Gaussian momentum transform:

$$
\signal{\widetilde\psi}(\mechanical{p})
=\left(\frac{2\mechanical{\sigma}^2}{\pi\mechanical{\hbar}^2}\right)^{1/4}
e^{-(\mechanical{p}-\mechanical{p_0})^2\mechanical{\sigma}^2/\mechanical{\hbar}^2}.
$$

With the positive real normalization chosen above, no additional phase is required. An arbitrary global phase would leave the density unchanged:

$$
|\signal{\widetilde\psi}(\mechanical{p})|^2
=\sqrt{\frac{2\mechanical{\sigma}^2}{\pi\mechanical{\hbar}^2}}
e^{-2(\mechanical{p}-\mechanical{p_0})^2\mechanical{\sigma}^2/\mechanical{\hbar}^2}.
$$

This is a Gaussian centered at $\mechanical{p_0}$, with momentum standard deviation $\mechanical{\Delta p}=\mechanical{\hbar}/(2\mechanical{\sigma})$.

- The packet is centered at the origin: $\langle\hat x\rangle=0$, and $\mechanical{\Delta x}=\mechanical{\sigma}$.
- The mean momentum is $\langle\hat p\rangle=\mechanical{p_0}$, and $\mechanical{\Delta p}=\mechanical{\hbar}/(2\mechanical{\sigma})$.
- The uncertainty product is $\mechanical{\Delta x}\mechanical{\Delta p}=\mechanical{\sigma}\mechanical{\hbar}/(2\mechanical{\sigma})=\mechanical{\hbar}/2$.

The Gaussian saturates the product bound. This does not minimize position and momentum spreads independently. Here $\mechanical{\sigma}$ is the **probability standard deviation**, unlike the amplitude scale $\mechanical{\sigma_x}=\sqrt2\mechanical{\sigma}$ used in [[04 Important Transform Pairs]].

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$, $\langle\hat x\rangle$ | $\unit{m}$ | Position | The position coordinate and mean. |
| $\mechanical{p}$, $\mechanical{p_0}$, $\langle\hat p\rangle$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | The momentum coordinate and packet mean. |
| $\signal{k}$ | $\unit{m^{-1}}$ | Wavenumber | The momentum coordinate divided by the reduced Planck constant. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale in the transform kernel. |
| $\signal{\psi}$ | $\unit{m^{-1/2}}$ | Position wavefunction | The position probability amplitude. |
| $\signal{\hat\psi}$ | $\unit{m^{1/2}}$ | Wavenumber wavefunction | The transform normalized with respect to the wavenumber integral. |
| $\signal{\widetilde\psi}$ | $(\unit{kg\,m\,s^{-1}})^{-1/2}$ | Momentum wavefunction | The transform normalized with respect to the momentum integral. |
| $\signal{\rho_x}$ | $\unit{m^{-1}}$ | Position probability density | The probability per unit position. |
| $\signal{\rho_p}$ | $\unit{kg^{-1}\,m^{-1}\,s}$ | Momentum probability density | The probability per unit momentum. |
| $\mechanical{\sigma}$, $\mechanical{\Delta x}$ | $\unit{m}$ | Position standard deviation | The Gaussian width in the probability density. |
| $\mechanical{\sigma_x}$ | $\unit{m}$ | Position amplitude scale | The exp(−1/2) amplitude width of the same Gaussian. |
| $\mechanical{\Delta p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum standard deviation | The width of the Gaussian momentum density. |
