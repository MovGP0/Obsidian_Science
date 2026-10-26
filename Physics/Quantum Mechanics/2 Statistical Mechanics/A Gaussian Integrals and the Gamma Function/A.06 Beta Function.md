---
title: "Beta Function"
source_chapter: "A"
source_section: "A.6"
source_page: 466
---

> [!TLDR]
> Euler's beta function converts integrals on the unit interval into ratios of gamma functions.

**Definition A.3.** For $\operatorname{Re}p,\operatorname{Re}q>0$, Euler's beta function is

$$
B(p,q)=\int_0^1t^{p-1}(1-t)^{q-1}\,dt.
$$

**Proposition A.1.**

$$
B(p,q)=\frac{\Gamma(p)\Gamma(q)}{\Gamma(p+q)}.
\tag{A.8}
$$

## Proof

Write the product as a double integral:

$$
\Gamma(p)\Gamma(q)
=\int_0^\infty\int_0^\infty
s^{p-1}t^{q-1}e^{-(s+t)}\,ds\,dt.
$$

Set $s=ur$ and $t=(1-u)r$, with $u\in[0,1]$ and $r\in[0,\infty)$. The absolute Jacobian is $r$, so

$$
\Gamma(p)\Gamma(q)
=\int_0^1u^{p-1}(1-u)^{q-1}\,du
\int_0^\infty r^{p+q-1}e^{-r}\,dr
=B(p,q)\Gamma(p+q).
$$

This proves (A.8).

## Alternative forms

Two forms useful in physics are

$$
B(p,q)
=2\int_0^{\pi/2}
\cos^{2p-1}\theta\,\sin^{2q-1}\theta\,d\theta,
\tag{A.9}
$$

and

$$
B(p,q)=\int_0^\infty\frac{u^{p-1}}{(1+u)^{p+q}}\,du.
$$

**Example A.2.** Equation (A.8) gives

$$
B\left(\frac12,\frac12\right)
=\frac{\Gamma(\tfrac12)^2}{\Gamma(1)}
=\pi.
$$

The trigonometric form independently gives $2\int_0^{\pi/2}d\theta=\pi$.
