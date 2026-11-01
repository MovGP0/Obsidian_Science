---
title: "Symmetries and Conservation Laws"
---

> [!TLDR]
> A continuous unitary symmetry has a generator that is conserved when it commutes with the Hamiltonian and has no explicit time dependence. Discrete symmetries, such as parity, also impose conservation conditions but require a separate interpretation.

A symmetry must be tested against the dynamics, not inferred from the name of a transformation. In finite dimensions, invariance under the whole one-parameter group allows differentiation at the identity and hence gives commutation with its generator. Invariance under one isolated group element is weaker and need not imply generator conservation.

For example, the identity transformation always commutes with the Hamiltonian, but that fact says nothing about whether a proposed nontrivial generator commutes with it. Continuous translation symmetry must therefore hold for every displacement, not only for one period. A periodic potential can retain one discrete translation without conserving ordinary momentum.

The table uses physical generators with different units. Each parameter must supply the reciprocal unit needed to make the exponent dimensionless. This check fixes the normalization but does not establish a symmetry. For unbounded generators, invariance must also preserve the Hamiltonian domain; a formal commutator is not the whole test.

| Symmetry | Unitary operator | Conserved quantity or generator |
| --- | --- | --- |
| Spatial translation | $\hat T(\mechanical{a})=e^{-i\mechanical{a}\hat p/\mechanical{\hbar}}$ | Momentum, $\hat p$. |
| Time translation | $\hat U(\signal{t})=e^{-i\hat H\signal{t}/\mechanical{\hbar}}$ | Energy, $\hat H$, for a time-independent Hamiltonian. |
| Rotation about $z$ | $\hat R_z(\signal{\theta})=e^{-i\signal{\theta}\hat L_z/\mechanical{\hbar}}$ | Angular momentum component, $\hat L_z$. |
| Spin rotation about $z$ | $e^{-i\signal{\theta}\hat S_z/\mechanical{\hbar}}$ | Spin component, $\hat S_z$. |
| Parity | $\hat P$, spatial reflection. | Parity, for a reflection-symmetric potential. |
| $U(1)$ phase symmetry | $e^{i\alpha\hat Q/\mechanical{\hbar}}$ | Electric charge, $\hat Q$. |

For a continuous one-parameter group, symmetry of the Hamiltonian means

$$
[\hat H,\hat U(\theta)]=0\qquad\text{for every }\theta.
$$

Differentiating the symmetry relation at the identity gives $[\hat H,\hat G]=0$, where $\hat G$ is the generator, with the necessary domain assumptions. If the generator has no explicit time dependence, the Ehrenfest relation then gives

$$
\frac{d\langle\hat G\rangle}{d\signal{t}}=0.
$$

> [!note]
> The source applies the generator statement to every row. Parity is a discrete symmetry rather than a continuous spatial one-parameter group. Its conservation follows directly from $[\hat H,\hat P]=0$. Conservation of a particular spin or angular-momentum component also requires the corresponding symmetry; it is not automatic for every Hamiltonian.

> [!note]
> The source writes the charge transformation as $e^{i\alpha\hat Q/\mechanical{\hbar}}$. Its exponent must be dimensionless. In this normalization, $\alpha$ has units of action divided by charge; it is not itself a dimensionless phase angle.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{a}$ | $\unit{m}$ | Translation distance | The spatial displacement parameter. |
| $\signal{t}$ | $\unit{s}$ | Time | The time-translation parameter. |
| $\signal{\theta}$ | $1$ | Rotation angle | The orbital or spin rotation angle, in radians. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale in the symmetry exponentials. |
| $\alpha$ | $\unit{J\,s\,C^{-1}}$ | Charge-symmetry parameter | The parameter in the source’s charge-generator normalization. |
| $\langle\hat G\rangle$ | — | Generator expectation | The conserved mean, with the unit of the physical generator. |
