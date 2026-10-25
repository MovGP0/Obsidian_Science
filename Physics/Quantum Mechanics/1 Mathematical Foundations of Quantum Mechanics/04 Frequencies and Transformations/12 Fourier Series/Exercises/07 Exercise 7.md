---
title: "String modes and a two-state quantum superposition"
---

> [!TLDR]
> A string and a quantum state share an orthogonal mode expansion, but their time evolution and energy weights differ.

**Chapter 12 · Exercise 7 · Challenge**

[[12 Fourier Series/08 Exercises|Chapter 12 exercises]]

## Question

A string of length $\mechanical{L}$ is fixed at both ends. Its normalized mode profiles have the form

$$
\signal{u}_n(\mechanical{x},\signal{t})
=\signal{\phi}_n(\mechanical{x})\cos(\signal{\omega}_n\signal{t}+\signal{\delta}_n),
$$

where

$$
\signal{\omega}_n=\frac{n\pi\mechanical{v}}{\mechanical{L}},
\qquad
\signal{\phi}_n(\mechanical{x})=\sqrt{\frac2{\mechanical{L}}}
\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right).
$$

**(a)** Show that $\langle\signal{\phi}_m,\signal{\phi}_n\rangle=\delta_{mn}$.

**(b)** The initial profile is

$$
\signal{u}(\mechanical{x},0)=c_1\phi_1(\mechanical{x})+c_2\phi_2(\mechanical{x}),
\qquad|c_1|^2+|c_2|^2=1.
$$

Write $\signal{u}(\mechanical{x},\signal{t})$ and calculate the mean energy.

**(c)** In what sense is this string analogous to a quantum superposition of two energy eigenstates?

> [!note]
> Part (b) needs additional physical information. The initial velocity or an equivalent phase choice is required for unique string evolution. A physical string energy also needs the mass density and displacement scale. The displayed coefficient normalization defines a normalized mode profile; it does not make classical string energy weights equal to quantum probabilities.

## Worked solution

### (a) Verify mode orthonormality

The inner product is the unscaled spatial integral. Use the product-to-sum identity because its cosine terms have simple endpoint integrals:

$$
\begin{aligned}
\langle\signal{\phi}_m,\signal{\phi}_n\rangle
&=\frac2{\mechanical{L}}\int_0^{\mechanical{L}}
\sin\left(\frac{m\pi\mechanical{x}}{\mechanical{L}}\right)
\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)d\mechanical{x}\\
&=\frac1{\mechanical{L}}\int_0^{\mechanical{L}}
\left[\cos\left(\frac{(m-n)\pi\mechanical{x}}{\mechanical{L}}\right)
-\cos\left(\frac{(m+n)\pi\mechanical{x}}{\mechanical{L}}\right)\right]d\mechanical{x}.
\end{aligned}
$$

For distinct positive labels, both integrals are zero. For equal labels the first integrand is one and the second still integrates to zero. The result is $\delta_{mn}$.

### (b) Specify the missing velocity and physical scale

The initial profile alone does not fix the evolution. In general, let $g_n$ be the mode coefficient of the initial profile velocity. Then

$$
\signal{u}(\mechanical{x},\signal{t})
=\sum_{n\geq1}\signal{\phi}_n(\mechanical{x})
\left[c_n\cos(\signal{\omega}_n\signal{t})
+\frac{g_n}{\signal{\omega}_n}\sin(\signal{\omega}_n\signal{t})\right],
$$

where initially $c_n=0$ except for $n=1,2$. Nonzero initial velocity can excite other modes. To give the two-mode answer intended by the question, **assume zero initial velocity**. This sets every $g_n$ to zero:

$$
\signal{u}(\mechanical{x},\signal{t})
=c_1\signal{\phi}_1(\mechanical{x})\cos(\signal{\omega}_1\signal{t})
+c_2\signal{\phi}_2(\mechanical{x})\cos(\signal{\omega}_2\signal{t}).
$$

For a real string displacement take real coefficients. Complex coefficients can represent modes through a complex notation, with the physical field taken as its real part; the energy then must use the corresponding real initial data.

**Why introduce a displacement scale?** The normalized profile has units $\unit{m^{-1/2}}$, whereas a displacement must have units $\unit{m}$. Write the physical transverse displacement as $\mechanical{y}=\signal{D}\signal{u}$, with $\signal{D}$ in $\unit{m^{3/2}}$, and set $q_n=\signal{D}c_n$. Let $\mechanical{\mu}$ be the linear mass density and $\mechanical{T}$ the tension. The wave speed satisfies $\mechanical{v}^2=\mechanical{T}/\mechanical{\mu}$.

The kinetic and elastic energies are

$$
\energy{K}=\frac{\mechanical{\mu}}2\int_0^{\mechanical{L}}(\partial_{\signal{t}}\mechanical{y})^2d\mechanical{x},
\qquad
\energy{V}=\frac{\mechanical{T}}2\int_0^{\mechanical{L}}(\partial_{\mechanical{x}}\mechanical{y})^2d\mechanical{x}.
$$

Spatial orthogonality removes kinetic cross terms. Cosine orthogonality for mode derivatives also gives

$$
\int_0^{\mechanical{L}}(\partial_{\mechanical{x}}\signal{\phi}_m)
(\partial_{\mechanical{x}}\signal{\phi}_n)d\mechanical{x}
=\left(\frac{n\pi}{\mechanical{L}}\right)^2\delta_{mn}.
$$

It follows, for the real zero-velocity two-mode solution, that

$$
\begin{aligned}
\energy{K}&=\frac{\mechanical{\mu}}2\sum_{n=1}^2\signal{\omega}_n^2q_n^2\sin^2(\signal{\omega}_n\signal{t}),\\
\energy{V}&=\frac{\mechanical{\mu}}2\sum_{n=1}^2\signal{\omega}_n^2q_n^2\cos^2(\signal{\omega}_n\signal{t}),\\
\energy{E}&=\energy{K}+\energy{V}
=\frac{\mechanical{\mu}\signal{D}^2}{2}
\left(\signal{\omega}_1^2|c_1|^2+\signal{\omega}_2^2|c_2|^2\right).
\end{aligned}
$$

The total energy is constant, so its time average equals this same expression. Each separate kinetic and elastic time average is $\energy{E}/2$. Since $\signal{\omega}_2=2\signal{\omega}_1$, the total is also $\mechanical{\mu}\signal{D}^2\signal{\omega}_1^2(|c_1|^2+4|c_2|^2)/2$. No numerical energy follows without the missing physical parameters.

### (c) State the quantum analogy and its limit

Both systems expand a field in orthonormal spatial modes, and projection determines each coefficient. A quantum state with these two components evolves instead as

$$
\signal{\psi}(\mechanical{x},\signal{t})
=c_1\signal{\phi}_1(\mechanical{x})e^{-i\energy{E}_1\signal{t}/\mechanical{\hbar}}
+c_2\signal{\phi}_2(\mechanical{x})e^{-i\energy{E}_2\signal{t}/\mechanical{\hbar}},
\qquad
\langle\energy{E}\rangle=|c_1|^2\energy{E}_1+|c_2|^2\energy{E}_2.
$$

In quantum mechanics $|c_n|^2$ is a measurement probability. In the string it describes the normalized initial profile weight, while the mode energy also contains $\signal{\omega}_n^2$, mass density, and displacement scale. The classical coefficients therefore do not define quantum probabilities by themselves. The shared structure is linear superposition with an orthogonal basis, together with conserved total energy.

## Answer

**(a)** $\langle\signal{\phi}_m,\signal{\phi}_n\rangle=\delta_{mn}$.

**(b)** With zero initial velocity, each initial mode acquires $\cos(\signal{\omega}_n\signal{t})$. With real physical displacement coefficients $q_n=\signal{D}c_n$, the constant total and mean energy is

$$
\overline{\energy{E}}=\frac{\mechanical{\mu}\signal{D}^2}{2}
\left(\signal{\omega}_1^2|c_1|^2+\signal{\omega}_2^2|c_2|^2\right).
$$

**(c)** Both systems use orthogonal mode superposition. Quantum squared amplitudes are measurement probabilities; classical string energies require frequency, mass density, and displacement scale as well.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$ | $\unit{m}$ | Position | The coordinate along the string or box. |
| $\mechanical{L}$ | $\unit{m}$ | Length | The distance between the fixed ends. |
| $\signal{t}$ | $\unit{s}$ | Time | The time from the initial profile. |
| $\signal{u}$, $\signal{u}_n$, $\signal{\phi}_n$ | $\unit{m^{-1/2}}$ | Normalized profile | The spatial string profile before displacement scaling. |
| $\signal{\psi}$ | $\unit{m^{-1/2}}$ | Wavefunction | The normalized quantum state in position space. |
| $c_n$, $c_1$, $c_2$ | $1$ | Mode amplitude | The normalized initial profile or quantum amplitude. |
| $g_n$ | $\unit{s^{-1}}$ | Profile velocity coefficient | The coefficient of the initial profile time derivative. |
| $\signal{\omega}_n$ | $\unit{s^{-1}}$ | Angular frequency | The angular frequency of the nth string mode. |
| $\signal{\delta}_n$ | $1$ | Mode phase | The phase in the given string mode. |
| $\mechanical{v}$ | $\unit{m\,s^{-1}}$ | Wave speed | The wave propagation speed on the string. |
| $\signal{D}$ | $\unit{m^{3/2}}$ | Displacement scale | The factor converting a normalized profile to displacement. |
| $q_n$ | $\unit{m^{3/2}}$ | Displacement coefficient | The physical coefficient of a normalized spatial mode. |
| $\mechanical{y}$ | $\unit{m}$ | Transverse displacement | The real physical displacement of the string. |
| $\mechanical{\mu}$ | $\unit{kg\,m^{-1}}$ | Linear mass density | The string mass per unit length. |
| $\mechanical{T}$ | $\unit{N}$ | Tension | The tensile force in the string. |
| $\energy{K}$, $\energy{V}$, $\energy{E}$, $\energy{E}_n$ | $\unit{J}$ | Energy | The kinetic, elastic, total, or quantum mode energy. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action constant in quantum time evolution. |
