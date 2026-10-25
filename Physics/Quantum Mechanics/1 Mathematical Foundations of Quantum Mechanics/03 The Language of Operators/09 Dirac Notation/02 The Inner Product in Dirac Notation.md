---
title: "The Inner Product in Dirac Notation"
---

> [!TLDR]
> The Dirac inner product is conjugate symmetric, linear in the ket, and positive definite. For normalized states, the squared magnitude of their overlap is a projection probability.

The inner-product properties take the compact form

$$
\langle\psi|\phi\rangle=\langle\phi|\psi\rangle^*.
\tag{9.1}
$$

$$
\langle\psi|(\alpha|\phi\rangle+\beta|\chi\rangle)
=\alpha\langle\psi|\phi\rangle+\beta\langle\psi|\chi\rangle.
\tag{9.2}
$$

$$
\langle\psi|\psi\rangle\ge0,
\qquad\langle\psi|\psi\rangle=0\ \Longleftrightarrow\ |\psi\rangle=0.
\tag{9.3}
$$

Equation (9.1) implies that $\langle\psi|\psi\rangle$ is real, which is necessary for a well-defined norm. Together with positivity, it gives $\lVert\psi\rVert=\sqrt{\langle\psi|\psi\rangle}$.

## Example — Inner product in ℂ²

Use the orthonormal basis

$$
|\uparrow\rangle=(1,0)^T,
\qquad|\downarrow\rangle=(0,1)^T.
$$

Then

$$
|\psi\rangle=\alpha|\uparrow\rangle+\beta|\downarrow\rangle
\longleftrightarrow\begin{pmatrix}\alpha\\\beta\end{pmatrix},
\qquad
\langle\psi|\longleftrightarrow(\alpha^*,\beta^*).
$$

For

$$
|\psi\rangle=\frac1{\sqrt2}(|\uparrow\rangle+i|\downarrow\rangle),
\qquad
|\phi\rangle=\frac1{\sqrt3}(|\uparrow\rangle+\sqrt2|\downarrow\rangle),
$$

we obtain

$$
\langle\psi|\phi\rangle
=\frac1{\sqrt2\sqrt3}\left(1\cdot1+(-i)\cdot\sqrt2\right)
=\frac1{\sqrt6}(1-i\sqrt2).
$$

**Check:**

$$
|\langle\psi|\phi\rangle|^2
=\frac16(1+2)=\frac12.
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\alpha$, $\beta$ | $1$ | State amplitude | The coefficients of the two spin basis states. |
| $\langle\psi\vert\phi\rangle$ | $1$ | Overlap amplitude | The amplitude for projection between the two normalized states in the example. |
