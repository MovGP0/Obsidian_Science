---
title: "Common Errors"
---

> [!TLDR]
> Commuting products need not vanish, and the adjoint of a commutator reverses its sign for Hermitian arguments. Uncertainty describes state statistics rather than the precision of one measurement.

## Error 1 — Commutation means that the product is zero

The condition $[\hat A,\hat B]=0$ means $\hat A\hat B=\hat B\hat A$, not $\hat A\hat B=0$. For example, $[\hat x,\hat x^2]=0$, while $\hat x\hat x^2=\hat x^3\ne0$ as an operator.

## Error 2 — Fail to use linearity

The identity

$$
[\hat A+\hat B,\hat C]=[\hat A,\hat C]+[\hat B,\hat C]
$$

is correct. The commutator is linear in both arguments. The common error is to calculate an expression such as $[\hat H,\hat x]$ directly without first separating the sum of terms.

## Error 3 — Take the adjoint without reversing the order

In general, $[\hat A,\hat B]^\dagger\ne[\hat A^\dagger,\hat B^\dagger]$. Instead,

$$
\begin{aligned}
[\hat A,\hat B]^\dagger
&=(\hat A\hat B-\hat B\hat A)^\dagger\\
&=\hat B^\dagger\hat A^\dagger-\hat A^\dagger\hat B^\dagger\\
&=[\hat B^\dagger,\hat A^\dagger]
=-[\hat A^\dagger,\hat B^\dagger].
\end{aligned}
$$

For Hermitian $\hat A$ and $\hat B$, the commutator is **anti-Hermitian**:

$$
[\hat A,\hat B]^\dagger=-[\hat A,\hat B].
$$

Its expectation is purely imaginary, possibly zero. The uncertainty inequality therefore uses $|\langle[\hat A,\hat B]\rangle|$.

## Error 4 — The canonical relation works only in one dimension

In three dimensions,

$$
[\hat x_i,\hat p_j]=i\mechanical{\hbar}\delta_{ij}\hat I.
$$

Different Cartesian components commute. For example, $[\hat x,\hat p_y]=0$. Momentum along $x$ is compatible with position along $y$.

## Error 5 — The uncertainty principle limits one measurement result

The uncertainty relation concerns the statistical distribution of outcomes in identically prepared states. It does not set a lower bound on the precision of one position result by itself.

Prepare many identical systems. Measure position on one group and momentum on another group prepared in the same state. Their standard deviations satisfy

$$
\mechanical{\Delta x}\,\mechanical{\Delta p}\ge\frac{\mechanical{\hbar}}2.
$$

## Quantum mechanics — The role of commutators

**Quantization:** Canonical quantization replaces classical canonical variables with operators and imposes $[\hat x,\hat p]=i\mechanical{\hbar}\hat I$.

**Conservation laws:** For an observable without explicit time dependence, $[\hat H,\hat A]=0$ implies

$$
\frac{d\langle\hat A\rangle}{d\signal{t}}=0.
$$

Momentum conservation corresponds to $[\hat H,\hat p]=0$ and to translation invariance under the usual translation generator.

**Angular momentum:** The components satisfy

$$
[\hat L_i,\hat L_j]=i\mechanical{\hbar}\sum_k\epsilon_{ijk}\hat L_k.
$$

The same algebra holds for spin. For spin one half,

$$
\hat S_i=\frac{\mechanical{\hbar}}2\sigma_i.
$$

The angular-momentum algebra gives integer or half-integer quantum numbers $j$, with $2j+1$ states per multiplet. Orbital angular momentum has integer $j$; half-integer representations occur for spin.

**Harmonic oscillator:** With the oscillator Hamiltonian and its physical state conditions, $[\hat a,\hat a^\dagger]=1$ gives

$$
\energy{E_n}=\mechanical{\hbar}\signal{\omega}(n+1/2)
$$

without solving a differential equation. In each example, the commutator algebra carries essential information about the system.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The quantum of action in the commutation relations. |
| $\mechanical{\Delta x}$ | $\unit{m}$ | Position uncertainty | The spread of position results in the prepared state. |
| $\mechanical{\Delta p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum uncertainty | The spread of momentum results in the prepared state. |
| $\langle\hat A\rangle$ | — | Observable mean | The conserved expectation value, with the unit of its observable. |
| $\signal{t}$ | $\unit{s}$ | Time | The time parameter in the conservation statement. |
| $\signal{\omega}$ | $\unit{s^{-1}}$ | Angular frequency | The harmonic-oscillator angular frequency. |
| $\energy{E_n}$ | $\unit{J}$ | Energy | The oscillator energy eigenvalue. |
