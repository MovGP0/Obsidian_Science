---
title: "Chapter Summary"
---

> [!TLDR]
> Derivatives describe local change, while integrals define norms and expectation values. Gaussian integrals and integration by parts connect these operations to quantum states and observables.

- The derivative is $f'(x)=\lim_{h\to0}[f(x+h)-f(x)]/h$. The main rules are the power, exponential, chain, and Leibniz product rules.
- A plane-wave derivative gives a factor of $\mathrm{i}\signal{k}$:

  $$
  \frac{\mathrm{d}}{\mathrm{d}\mechanical{x}}\mathrm{e}^{\mathrm{i}\signal{k}\mechanical{x}}
  =\mathrm{i}\signal{k}\mathrm{e}^{\mathrm{i}\signal{k}\mechanical{x}}.
  $$

- For a partial derivative, differentiate with respect to one variable and keep the other variables fixed.
- Memorize the Gaussian integral:

  $$
  \int_{-\infty}^{+\infty}\mathrm{e}^{-ax^2}\,\mathrm{d}x
  =\sqrt{\frac{\pi}{a}},\qquad a>0.
  $$

- Integration by parts gives $\int f'g=[fg]-\int fg'$. Over the real line, the boundary term vanishes when $f,g\to0$ at infinity.
- The inner product is $\langle f,g\rangle=\int f^*(x)g(x)\,\mathrm{d}x$. It has Hermitian symmetry and is linear in the second argument.
- In quantum mechanics, $\langle\hat A\rangle=\int\signal{\psi}^*\hat A\signal{\psi}\,\mathrm{d}\mechanical{x}$. The source summarizes the Ehrenfest equations as Newton's equations for expectation values.

> [!note]
> In the integration-by-parts shorthand, the integrals use the same variable and limits as the boundary term. The expectation-value formula assumes a normalized state and a suitable operator domain. The exact Ehrenfest force is the mean force; its equality with the force at the mean position needs the conditions stated in [[02 Functions, Derivatives and Integrals/06 Common Errors|the quantum-mechanics box]].

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$ | $\unit{m}$ | Position | The coordinate in the plane wave and expectation-value integral. |
| $\signal{k}$ | $\unit{m^{-1}}$ | Wave number | The spatial phase coefficient of the plane wave. |
| $\signal{\psi}$ | $\unit{m^{-1/2}}$ | Wavefunction | The normalized one-dimensional position-space state. |
| $\langle\hat A\rangle$ | — | Observable expectation value | The mean value of a general observable. Its unit depends on the observable. |
