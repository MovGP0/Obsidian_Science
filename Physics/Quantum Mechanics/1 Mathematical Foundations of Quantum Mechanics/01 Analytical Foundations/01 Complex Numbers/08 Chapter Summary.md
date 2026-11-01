---
title: "Chapter Summary"
---

> [!TLDR]
> Complex numbers link algebra, plane geometry, and oscillations. Conjugation and exponential form provide tools that are also essential for quantum wavefunctions.

- $z=a+\mathrm{i}b$ with $\mathrm{i}^2=-1$. The real part is $a=\operatorname{Re}(z)$. The imaginary part is $b=\operatorname{Im}(z)$, which is a real number.
- The conjugate is $z^*=a-\mathrm{i}b$. The absolute value is $|z|=\sqrt{a^2+b^2}$. They obey $zz^*=|z|^2$.
- For division, multiply the numerator and denominator by the conjugate of the denominator.
- The exponential form is $z=r\mathrm{e}^{\mathrm{i}\theta}$. Euler's formula is $\mathrm{e}^{\mathrm{i}\theta}=\cos\theta+\mathrm{i}\sin\theta$.
- In exponential form, $z_1z_2=r_1r_2\mathrm{e}^{\mathrm{i}(\theta_1+\theta_2)}$. Multiply the absolute values and add the arguments.
- A nonzero complex number has $n$ distinct $n$th roots. They are equally spaced on a circle.
- In the usual quantum formulation, $\signal{\psi}$ is a complex state amplitude. The Born rule assigns the position probability density $|\signal{\psi}|^2$ to a normalized position-space state.

## Choose a representation for the task

For a sum, Cartesian components reveal cancellation. For a product or integer power, polar form reveals the change in magnitude and angle. For a quotient, check the denominator before using its conjugate. For roots, list all phase representatives that produce distinct values and state any chosen branch.

Reconstruct these ideas with one number: for $z=1+\mathrm{i}$, find $z^*$, $|z|^2$, and $z^2$ without a calculator. They are $1-\mathrm{i}$, $2$, and $2\mathrm{i}$. The square has argument $\pi/2$, while its modulus is $2$. Squaring a complex value therefore differs from taking its squared magnitude.

Keep this distinction when reading quantum theory. Complex arithmetic provides amplitudes and relative phases; the physical probability rule supplies the connection from a normalized state to outcomes. A common overall phase leaves all its squared coefficient magnitudes unchanged. Relative phases can affect the squared magnitude of a sum, so the arithmetic must retain them.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\psi}$ | — | Wavefunction | A complex state wavefunction. Its unit depends on its representation and normalization. |
| $\lvert\signal{\psi}\rvert^2$ | — | Probability density | The density associated with the wavefunction. Its unit depends on the representation. |
