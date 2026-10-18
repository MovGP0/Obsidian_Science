---
title: "Schrödinger evolution and probability"
catalogue_ids:
  - "9.2.4"
  - "9.2.4.1"
  - "9.2.4.2"
  - "9.2.4.3"
  - "9.2.4.4"
---

> [!TLDR]
> The linear Schrödinger equation evolves a complex function; a self-adjoint boundary problem supplies stationary modes and preserves the integral of its squared modulus.

## A mathematical equation with complex outputs

Read [[06.03 Conjugation and modulus]], [[06.05 Euler’s formula]], [[Boundary eigenvalue problems]], and [[Wave diffusion and potential equations]]. In this lesson $x,t$ and all coefficients are dimensionless mathematical variables. The physical Schrödinger equation can be scaled to such a form; physical unit conversion and model construction are outside this article. We study

$$
i\psi_t=H\psi,\qquad H\psi=-\psi_{xx}+V(x)\psi,
$$

where $i^2=-1$, $V$ is a given real coefficient function, and $\psi(x,t)$ is complex-valued. The operator $H$ includes both its differential expression and its domain: the interval, boundary conditions, and regularity requirements. Calling an expression self-adjoint without a domain is incomplete.

The equation is linear in $\psi$. If $\psi_1,\psi_2$ solve it with the same $V$ and homogeneous boundary conditions, then $a\psi_1+b\psi_2$ also solves it for constants $a,b$. This superposition rule concerns amplitudes, not their squared moduli. The nonlinear equation with an additional $|\psi|^2\psi$ term is a different equation, considered in [[Travelling solitary waves]].

## Real and imaginary parts

Write $\psi=a+ib$, where $a,b$ are real functions. Substitution gives $i a_t-b_t=Ha+iHb$, because $H$ has real coefficients. Equating real and imaginary parts yields

$$
a_t=Hb,\qquad b_t=-Ha.
$$

Thus one complex equation is a coupled real system. It is not the heat equation with the same decay factor. Multiplication by $i$ changes the evolution from real exponential decay to phase rotation for each eigenmode.

## The time-independent eigenvalue problem

If $V$ does not depend on $t$, try $\psi(x,t)=\phi(x)T(t)$. At points where the factors are nonzero, separation gives $H\phi/\phi=iT'/T=\varepsilon$, a constant. Hence

$$
H\phi=\varepsilon\phi,\qquad
T(t)=Ce^{-i\varepsilon t}.
$$

The equations extend through zeros by continuity. A self-adjoint operator has real eigenvalues $\varepsilon$, so $|e^{-i\varepsilon t}|=1$. A stationary mode has a changing complex phase and an unchanged squared modulus. “Time-independent equation” names the eigenvalue problem for $\phi$; it does not mean the full amplitude must be constant in $t$.

On $(0,1)$ with $V=0$ and $\phi(0)=\phi(1)=0$, the eigenfunctions are $\sin(n\pi x)$ and $\varepsilon_n=n^2\pi^2$. Requiring unit squared integral fixes the positive real normalization factor to $\sqrt2$, since $\int_0^1\sin^2(n\pi x)dx=1/2$.

## Worked example: one mode and two modes

The function

$$
\psi_1(x,t)=\sqrt2\sin(\pi x)e^{-i\pi^2t}
$$

solves the zero-boundary equation. Indeed, $i\psi_{1,t}=\pi^2\psi_1=-\psi_{1,xx}$. Its squared modulus is $2\sin^2\pi x$, independent of $t$, and its integral over $(0,1)$ is $1$.

Now define normalized real eigenfunctions $\phi_1=\sqrt2\sin\pi x$ and $\phi_2=\sqrt2\sin2\pi x$. The equally weighted superposition

$$
\psi=\frac1{\sqrt2}\left(\phi_1e^{-i\pi^2t}+
\phi_2e^{-i4\pi^2t}\right)
$$

has

$$
|\psi|^2=\frac12\left(\phi_1^2+\phi_2^2+
2\phi_1\phi_2\cos(3\pi^2t)\right).
$$

The cross term usually changes pointwise with $t$. Orthogonality makes its integral zero, so the total squared integral remains $1$. Adding the two probability densities would miss this interference term. A common phase multiplying the whole function changes no squared modulus, but the relative phase between modes matters.

## Why the total squared integral is preserved

For a sufficiently smooth solution with real $V$, let $\rho=|\psi|^2=\overline\psi\psi$. The equation and its conjugate give

$$
\rho_t+J_x=0,\qquad
J=2\operatorname{Im}(\overline\psi\psi_x).
$$

This follows by differentiating the product: the terms with real $V$ cancel, and the second-derivative terms combine into a total derivative. Integration over $(a,b)$ gives $d\int_a^b\rho\,dx/dt=J(a,t)-J(b,t)$. Zero Dirichlet boundaries make both endpoint terms zero. Zero Neumann conditions or matching periodic conditions also cancel the boundary contribution in their respective domains. On the whole line, sufficient decay can serve the same purpose.

This elementary calculation explains norm conservation for smooth solutions. The general theorem uses self-adjoint operator theory and also covers data for which pointwise differentiation is unavailable. Merely making $V$ real is not a complete operator-domain proof, especially for singular coefficients or unbounded intervals.

## Statistical interpretation and its limits

In the quantum interpretation, a normalized amplitude assigns probability $\int_A|\psi|^2dx$ to an allowed region $A$. This interpretive rule is a physical postulate, not a consequence of differentiation alone. Mathematically, nonnegativity and a unit total integral make $|\psi|^2$ a probability density. A density at one point is not itself the probability of that point; on a continuous interval single points have probability zero for an ordinary integrable density.

For the first interval mode, symmetry about $x=1/2$ gives probability $1/2$ on either half. The amplitude $\psi$ may be negative or complex; the density cannot be negative. A constant nonzero amplitude over the whole real line cannot be normalized because its squared integral diverges. Formal plane-wave modes are useful generalized functions, but a single one is not a normalized whole-line state.

## Practice

1. Find the positive normalization constant $A$ for $\phi=A\sin(2\pi x)$ on $(0,1)$, and write its evolution for $V=0$.
2. If $H\phi=5\phi$ with $\int|\phi|^2=1$, compare the squared moduli of $\phi e^{-5it}$ and $e^{i\theta}\phi e^{-5it}$ for real $\theta$.

## Worked answers

1. Since the squared sine integrates to $1/2$, $A^2/2=1$, so $A=\sqrt2$. The second derivative gives eigenvalue $4\pi^2$, hence $\psi=\sqrt2\sin(2\pi x)e^{-4\pi^2it}$.
2. Both phase factors have modulus $1$. Therefore both squared moduli equal $|\phi|^2$ at every input. A global phase does not alter the density or its total integral.

## Further reading

David Tong’s [one-dimensional quantum mechanics notes](https://www.damtp.cam.ac.uk/user/tong/qm/qmhtml/S2.html) give the physical equation, stationary states, and probability interpretation in physical units.
