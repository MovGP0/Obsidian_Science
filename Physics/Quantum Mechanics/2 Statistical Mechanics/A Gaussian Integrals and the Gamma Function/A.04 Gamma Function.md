---
title: "Gamma Function"
source_chapter: "A"
source_section: "A.4"
source_page: 464
---

> [!TLDR]
> Euler's gamma function extends factorials and relates Gaussian moments to a general integral.

**Definition A.2.** For $\operatorname{Re}z>0$, Euler's gamma function is

$$
\Gamma(z)=\int_0^{+\infty}t^{z-1}e^{-t}\,dt.
\tag{A.5}
$$

## Basic properties

1. **Recurrence relation:** Integration by parts, initially for $\operatorname{Re}z>0$, gives

$$
\Gamma(z+1)=z\Gamma(z).
\tag{A.6}
$$

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

## Relation to Gaussian moments

Substitute $t=ax^2$ in (A.5), with $a>0$ and $\operatorname{Re}\nu>0$:

$$
\int_0^\infty x^{2\nu-1}e^{-ax^2}\,dx
=\frac{\Gamma(\nu)}{2a^\nu}.
\tag{A.7}
$$

The moments in (A.2) follow as the special case $\nu=n+\tfrac12$.
