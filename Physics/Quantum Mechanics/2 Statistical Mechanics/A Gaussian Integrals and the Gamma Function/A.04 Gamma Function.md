---
title: "Gamma Function"
source_chapter: "A"
source_section: "A.4"
source_page: 464
---

> [!TLDR]
> Euler's gamma function extends factorials and relates Gaussian moments to a general integral.

Radial phase-space integrals often contain a power times a decaying exponential. The gamma function evaluates this structure even when the power is not an integer. The integration variable $t$ and the argument $z$ below are dimensionless mathematical variables.

**Definition A.2.** For $\operatorname{Re}z>0$, Euler's gamma function is

$$
\Gamma(z)=\int_0^{+\infty}t^{z-1}e^{-t}\,dt.
\tag{A.5}
$$

On the positive real integration path, use $t^{z-1}=\exp[(z-1)\ln t]$ with real $\ln t$. Near zero, the absolute value behaves as $t^{\operatorname{Re}z-1}$, which is integrable exactly when $\operatorname{Re}z>0$. At infinity, the exponential controls every fixed power. Outside this half-plane, the same integral is not the definition: analytic continuation gives a meromorphic function with poles at $0,-1,-2,\ldots$. See [NIST DLMF §5.2](https://dlmf.nist.gov/5.2).

## Basic properties

1. **Recurrence relation:** Integration by parts, initially for $\operatorname{Re}z>0$, gives

$$
\Gamma(z+1)=z\Gamma(z).
\tag{A.6}
$$

The integration-by-parts boundary term is $-t^z e^{-t}$ at zero and infinity. It vanishes under the stated condition. This is the reason the recurrence follows from the integral; it is not valid to use the divergent integral at a pole.

2. **Integer arguments:** Since $\Gamma(1)=1$, the recurrence gives

$$
\Gamma(n+1)=n!,
\qquad n=0,1,2,\ldots.
$$

Thus the gamma function extends the factorial to real and complex arguments.

3. **Half-integer argument:** Substitute $t=u^2$:

$$
\Gamma\left(\frac12\right)
=\int_0^\infty t^{-1/2}e^{-t}\,dt
=2\int_0^\infty e^{-u^2}\,du
=\sqrt\pi.
$$

4. **Euler reflection formula:** After analytic continuation, for $z\notin\mathbb Z$,

$$
\Gamma(z)\Gamma(1-z)=\frac\pi{\sin(\pi z)}.
$$

The reflection formula is a separate identity, not a consequence proved by the preceding recurrence alone. Its domain excludes the integers, where the sine vanishes. The identity and its exclusion are given in [NIST DLMF §5.5(ii)](https://dlmf.nist.gov/5.5#ii).

## Relation to Gaussian moments

Substitute $t=ax^2$ in (A.5), with $a>0$ and $\operatorname{Re}\nu>0$:

$$
\int_0^\infty x^{2\nu-1}e^{-ax^2}\,dx
=\frac{\Gamma(\nu)}{2a^\nu}.
\tag{A.7}
$$

The substitution gives $x^{2\nu-1}dx=t^{\nu-1}dt/(2a^\nu)$, so it removes both the square in the exponent and the power of $x$ in one step. The moments in (A.2) follow as the special case $\nu=n+\tfrac12$.

As a check, $\nu=1$ gives $\int_0^\infty x e^{-ax^2}dx=1/(2a)$, which also follows by direct antidifferentiation. At $\nu=0$, the lower endpoint behaves as $1/x$ and diverges. This boundary test explains why convergence must be checked before using a gamma-function value obtained by continuation.
