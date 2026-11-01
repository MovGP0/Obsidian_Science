---
title: "Dirac Adjoint"
---

> [!TLDR]
> The Dirac adjoint is the Hermitian conjugate spinor multiplied by the time gamma matrix. It gives a Lorentz-scalar fermion bilinear.

The Dirac adjoint of a spinor is
$$
\bar{\signal{\psi}}\equiv\signal{\psi}^\dagger\gamma^0.
\tag{A.46}
$$
With this definition, $\bar{\signal{\psi}}\signal{\psi}$ is a Lorentz scalar. The source describes it as real for a free Dirac field with real mass.

The ordinary Hermitian spinor product alone is not a Lorentz scalar because boost matrices are not unitary with that product. If the spinor transforms with $S$, its Dirac adjoint transforms with $S^{-1}$. The factors therefore cancel in the scalar bilinear. This is the reason for the time gamma matrix in (A.46).

For an ordinary complex spinor, Hermiticity of the time gamma matrix makes the scalar bilinear real, but not positive. In the Dirac–Pauli basis the upper-component squared norm contributes positively and the lower-component squared norm negatively. Thus reality does not imply a probability density; the positive time component of the Dirac current uses the ordinary Hermitian product instead. For quantum fields, “real” must be read with the appropriate operator adjoint and ordering, not as a numerical value assigned to an unrenormalized local product.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\psi},\bar{\signal{\psi}}$ | $\unit{GeV^{3/2}}$ | Spinor field and Dirac adjoint | The column field and its Lorentz-covariant row adjoint. |
