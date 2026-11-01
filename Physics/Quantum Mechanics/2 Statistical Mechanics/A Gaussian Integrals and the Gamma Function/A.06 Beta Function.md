---
title: "Beta Function"
source_chapter: "A"
source_section: "A.6"
source_page: 466
---

> [!TLDR]
> Euler's beta function converts integrals on the unit interval into ratios of gamma functions.

Use the beta function when an integral has independent power behavior at the two ends of a finite interval. In statistical mechanics this can occur when a fixed total is divided into two nonnegative parts. The substitution in the proof separates the total from the fraction assigned to one part.

**Definition A.3.** For $\operatorname{Re}p,\operatorname{Re}q>0$, Euler's beta function is

$$
B(p,q)=\int_0^1t^{p-1}(1-t)^{q-1}\,dt.
$$

The two real-part conditions control different endpoints. Near zero, the integrand has the power $t^{p-1}$; near one, it has the power $(1-t)^{q-1}$. Both endpoints must be integrable. Use real logarithms for these powers on $0<t<1$.

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

Set $s=ur$ and $t=(1-u)r$, with $u\in[0,1]$ and $r\in[0,\infty)$. Thus $r=s+t$ is the total and $u=s/(s+t)$ is the fraction in the first part. The change turns the common exponential into $e^{-r}$; this is why it separates the integrals. Absolute convergence under the stated hypotheses permits the change of integration order, also for complex parameters. The absolute Jacobian is $r$, so

$$
\Gamma(p)\Gamma(q)
=\int_0^1u^{p-1}(1-u)^{q-1}\,du
\int_0^\infty r^{p+q-1}e^{-r}\,dr
=B(p,q)\Gamma(p+q).
$$

This proves (A.8).

## Alternative forms

For the trigonometric form, substitute $t=\cos^2\theta$ and reverse the limits. Its derivative supplies one sine and one cosine, which accounts for the factor $2$. For the half-line form, substitute $t=u/(1+u)$. Both forms keep the original real-part conditions. See [NIST DLMF §5.12, equations (5.12.1)–(5.12.3)](https://dlmf.nist.gov/5.12).

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

For a second check, $q=1$ gives $B(p,1)=1/p$ for $\operatorname{Re}p>0$, both by direct integration and by the gamma recurrence. At $p=0$ the integral diverges at zero. For positive real parameters the integrand divided by $B(p,q)$ is a normalized density for a fraction; complex parameters retain the integral identity but do not define a probability density.
