---
title: "Variance and Quantum Uncertainty"
---

> [!TLDR]
> Quantum uncertainty is the standard deviation of measurement outcomes. It vanishes exactly when a normalized pure state has a definite value of the observable.

> [!definition] Definition 15.2 | Quantum uncertainty
> For a normalized state with the required finite moments,
>
> $$
> \Delta A=\sqrt{\langle\hat A^2\rangle-\langle\hat A\rangle^2}
> =\sqrt{\left\langle(\hat A-\langle\hat A\rangle\hat I)^2\right\rangle}.
> $$

The key property is $\Delta A=0$ if and only if $|\psi\rangle$ is an eigenstate of $\hat A$.

**Proof.** Set $\mu=\langle\hat A\rangle$:

$$
\begin{aligned}
\Delta A=0
&\Longleftrightarrow\left\langle(\hat A-\mu\hat I)^2\right\rangle=0\\
&\Longleftrightarrow\lVert(\hat A-\mu\hat I)|\psi\rangle\rVert^2=0\\
&\Longleftrightarrow\hat A|\psi\rangle=\mu|\psi\rangle.
\end{aligned}
$$

Thus the state has a definite eigenvalue $\mu$. A vector inside a degenerate eigenspace is still an eigenvector; the result does not require a unique basis vector.

## Example — Energy uncertainty of the preceding state

Use $|c_1|^2=1/5$, $|c_2|^2=4/5$, and $\energy{E_n}=n\mechanical{\hbar}\signal{\omega}$:

$$
\langle\hat H^2\rangle
=\sum_n\energy{E_n}^2|c_n|^2
=\frac15\mechanical{\hbar}^2\signal{\omega}^2
+\frac45\cdot4\mechanical{\hbar}^2\signal{\omega}^2
=\frac{17}5\mechanical{\hbar}^2\signal{\omega}^2.
$$

Since $\langle\hat H\rangle=9\mechanical{\hbar}\signal{\omega}/5$,

$$
\langle\hat H\rangle^2=\frac{81}{25}\mechanical{\hbar}^2\signal{\omega}^2,
\qquad\frac{17}5=\frac{85}{25}.
$$

Therefore,

$$
\energy{\Delta H}
=\mechanical{\hbar}\signal{\omega}\sqrt{\frac{85-81}{25}}
=\frac{2\mechanical{\hbar}\signal{\omega}}5.
$$

The system has energy $\mechanical{\hbar}\signal{\omega}$ with probability $1/5$ and energy $2\mechanical{\hbar}\signal{\omega}$ with probability $4/5$. Its energy uncertainty is nonzero because it has components at two different energy eigenvalues.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\Delta A$ | — | Observable uncertainty | The measurement standard deviation, with the unit of the observable. |
| $\mu$, $\langle\hat A\rangle$ | — | Observable mean | The expectation value used to center the operator. |
| $\langle\hat A^2\rangle$ | — | Second observable moment | The mean squared outcome, with the squared observable unit. |
| $c_n$, $c_1$, $c_2$ | $1$ | Probability amplitude | The coefficients of the normalized energy eigenstates. |
| $\energy{E_n}$, $\langle\hat H\rangle$, $\energy{\Delta H}$ | $\unit{J}$ | Energy and uncertainty | The energy eigenvalue, mean, and standard deviation. |
| $\langle\hat H^2\rangle$ | $\unit{J^2}$ | Second energy moment | The mean squared energy. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale in the energy spectrum. |
| $\signal{\omega}$ | $\unit{s^{-1}}$ | Angular frequency | The frequency parameter of the spectrum. |
