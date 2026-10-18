---
title: "Improper, Stieltjes, and Lebesgue integrals"
catalogue_ids:
  - "8.2.3"
  - "8.2.3.1"
  - "8.2.3.2"
  - "8.2.3.3"
---

> [!TLDR]
> Improper integrals take endpoint limits, Stieltjes integrals change the weighting measure, and Lebesgue integrals organize contributions by measurable sets.

## Why generalize

Read [[Definite integrals and accumulation]] and [[07.01 Limits]]. The basic Riemann definition treats bounded functions on finite intervals. Three different changes extend that setting. An improper integral extends the interval or permits a singularity by taking limits. A Stieltjes integral assigns different weights to interval increments. A Lebesgue integral uses a measure of sets and can handle more discontinuous functions. These changes solve different problems; they are not interchangeable names for one method.

## Infinite limits

Define $\int_a^\infty f(x)\,dx=\lim_{R\to\infty}\int_a^R f(x)\,dx$ when the limit exists and is finite. For example,

$$
\int_1^R x^{-p}\,dx=
\begin{cases}(R^{1-p}-1)/(1-p),&p\ne1,\\\ln R,&p=1.\end{cases}
$$

Consequently $\int_1^\infty x^{-p}\,dx$ converges exactly for $p>1$, with value $1/(p-1)$. Merely having $f(x)\to0$ is insufficient: $1/x$ tends to zero but its integral diverges.

For an integral over the whole real line, choose any finite $c$ and require both $\int_{-\infty}^c f$ and $\int_c^\infty f$ to converge separately. Symmetric cancellation is not the definition. If $0\le f\le g$ outside a finite interval and $\int g$ converges, then $\int f$ converges. This comparison follows because its partial integrals increase while remaining bounded. The analogous lower bound can prove divergence.

## Unbounded integrands

If $f$ is unbounded near $a$, define $\int_a^b f=\lim_{\varepsilon\to0^+}\int_{a+\varepsilon}^b f$. For an interior singularity $c$, split at $c$ and require both one-sided limits to converge. For the power test,

$$
\int_0^1 x^{-p}\,dx=\frac1{1-p}\quad\text{exactly when }p<1.
$$

This reverses the infinity threshold. Near zero, a more negative exponent is more singular; at infinity it decays faster. Thus $\int_0^1 dx/\sqrt{x}=2$, whereas $\int_1^\infty dx/\sqrt{x}$ diverges.

For $\int_{-1}^1 dx/x$, the negative and positive one-sided integrals diverge. The symmetric truncated expression is zero, but that is a **Cauchy principal value**, a different convention. It does not make the ordinary improper integral converge. Absolute convergence, $\int|f|<\infty$, implies convergence; conditional convergence permits sign cancellation but still requires the specified one-sided endpoint limits.

## Stieltjes integration

In a Riemann–Stieltjes sum, replace interval widths by increments of a function $\alpha$:

$$
\sum_i f(\xi_i)[\alpha(x_i)-\alpha(x_{i-1})].
$$

Its limit is written $\int_a^b f\,d\alpha$. A useful sufficient condition is that $f$ is continuous on $[a,b]$ and $\alpha$ has bounded variation: the total absolute increment over any partition is bounded by one fixed finite number. In particular, every monotone bounded $\alpha$ qualifies. If $\alpha$ is continuously differentiable, this becomes $\int_a^b f(x)\alpha'(x)\,dx$.

For example, with $f(x)=x$ and $\alpha(x)=x^2$ on $[0,1]$, the answer is $\int_0^1 2x^2\,dx=2/3$. If instead $\alpha$ is zero for $x<c$ and $h$ for $x\ge c$, with $a<c<b$, the integral for continuous $f$ is $hf(c)$. Only the subinterval containing the jump carries weight. These cases are derived in [Zach Teitler's analysis notes](https://zteitler.github.io/analytic-number-theory-notes/sec-riemann-stieltjes.html).

## Lebesgue integration

A **measure** assigns sizes to suitable sets. For ordinary length, an interval has its length and a countable set has measure zero. A nonnegative simple function takes finitely many values, $s=\sum_j a_j\mathbf1_{A_j}$ on disjoint measurable sets. Define $\int s=\sum_j a_j\mu(A_j)$. The integral of a nonnegative measurable function is the supremum of these values for all $0\le s\le f$. Measurability is a compatibility condition between level sets and the chosen measure; a full construction is beyond this lesson.

For a signed real $f$, write $f=f^+-f^-$ with both parts nonnegative. A finite Lebesgue integral requires $\int|f|<\infty$. If one part is infinite and the other finite, an extended infinite value is possible; subtracting two infinities is undefined. A Riemann-integrable function has the same Lebesgue value. The rational-point indicator on $[0,1]$ is not Riemann integrable but has Lebesgue integral zero, since its nonzero set is countable. A conditionally convergent improper integral need not be a finite Lebesgue integral on the same domain. [MIT's measure-theory notes](https://math.mit.edu/~sheffield/2016175/Lecture4.pdf) develop the general theory.

## Practice

1. Determine $\int_0^1x^{-2/3}\,dx$ and $\int_1^\infty x^{-2/3}\,dx$.
2. For continuous $f(x)=1+x$ on $[0,2]$, compute $\int f\,d\alpha$ when $\alpha$ jumps upward by $3$ at $x=1$ and is otherwise constant.

## Worked answers

1. Near zero the exponent threshold gives convergence, with value $1/(1-2/3)=3$. At infinity, $p=2/3\le1$ gives divergence. The finite partial integral there is $3(R^{1/3}-1)$.
2. The jump contributes its size times the function value: $3f(1)=3(2)=6$. Ordinary length weighting would instead give $\int_0^2(1+x)\,dx=4$, so the weighting measure matters.
