---
title: "Abel equations and weak singularities"
catalogue_ids:
  - "11.5"
  - "11.5.1"
---

> [!TLDR]
> An Abel kernel is unbounded but integrable; applying it twice gives an ordinary integral and an explicit inversion formula.

## Singular integral equations

Read [[08.07 Improper integrals]] and [[08.03 The fundamental theorem]]. A singular integral equation contains an integral that is not a proper integral with a bounded continuous integrand over a finite closed interval. Possible causes include an unbounded kernel, an infinite interval, or a pole that requires a principal value. These cases are not interchangeable.

For example, $\int_0^x(x-t)^{-1/2}\,dt=2\sqrt x$ is an ordinary improper integral. The integrand becomes unbounded at its upper endpoint, but the integral has a finite limit. By contrast, $\int_0^x(x-t)^{-1}\,dt$ diverges. The exponent determines whether the endpoint contribution is finite.

More generally, $\int_0^\delta s^{-\alpha}\,ds=\delta^{1-\alpha}/(1-\alpha)$ for $0<\alpha<1$. Such a kernel is called **weakly singular**. The term describes its integrability, not the size of its values. A Cauchy pole inside an interval needs the different cancellation rule in [[Cauchy integrals and boundary jumps]].

## Abel integral equation

The classical half-order Abel equation on $[0,b]$ is

$$
f(x)=\int_0^x\frac{u(t)}{\sqrt{x-t}}\,dt,
\qquad 0<x\leq b.
$$

The square root is the positive real root for $t<x$. We seek continuous $u$ first. The integral is an improper limit from below. If $|u|\leq M$, its absolute value is at most $2M\sqrt x$, so it converges and $f(0)=0$ after continuous extension.

The operator averages nearby values with a large but integrable weight near $t=x$. An ordinary substitution can remove the singularity for calculation: put $t=x-s^2$. Then $dt=-2s\,ds$ and

$$
f(x)=2\int_0^{\sqrt x}u(x-s^2)\,ds.
$$

There is now no infinite integrand at $s=0$ when $u$ is continuous. This also gives a useful route for numerical integration. One must not feed the endpoint infinity directly into a standard trapezoidal formula.

## Derive the inversion

Apply the same Abel operation to $f$. Set

$$
J(x)=\int_0^x\frac{f(s)}{\sqrt{x-s}}\,ds.
$$

Substitute the equation for $f(s)$ and interchange integrations over $0\leq t\leq s\leq x$:

$$
J(x)=\int_0^xu(t)
\left[\int_t^x\frac{ds}{\sqrt{s-t}\sqrt{x-s}}\right]dt.
$$

This interchange is valid for bounded $u$ on a finite interval because the double integral of the absolute value is finite. For $t<x$, put $s=t+(x-t)\sin^2\theta$. On $0\leq\theta\leq\pi/2$, the two square roots cancel the factors in $ds$, leaving $2\,d\theta$. The bracket therefore equals $\pi$. Consequently

$$
J(x)=\pi\int_0^xu(t)\,dt,
\qquad
u(x)=\frac1\pi\frac{d}{dx}\int_0^x\frac{f(s)}{\sqrt{x-s}}\,ds.
$$

This is a derived identity for data produced by continuous $u$. If arbitrary data are inserted, the resulting candidate must still belong to the selected function class and satisfy the original equation. For example, if $f$ is continuously differentiable and $f(0)=0$, integration by parts gives the equivalent formula

$$
u(x)=\frac1\pi\int_0^x\frac{f'(s)}{\sqrt{x-s}}\,ds.
$$

These assumptions give a continuous solution with $u(0)=0$. They are sufficient, not necessary: $u=1$ gives $f=2\sqrt x$, which is not continuously differentiable at $0$. The classical inversion and its stability issues are discussed in [Gray's Glasgow inverse-problem course](https://www.astro.gla.ac.uk/users/norman/lectures/NumAst-1/).

## Worked example

For $f(x)=x$, use $f'(s)=1$. The inversion gives $u(x)=2\sqrt x/\pi$. Check it directly with $t=x\sin^2\theta$:

$$
\int_0^x\frac{2\sqrt t}{\pi\sqrt{x-t}}\,dt
=\frac{4x}{\pi}\int_0^{\pi/2}\sin^2\theta\,d\theta=x.
$$

The last integral is $\pi/4$, from $\sin^2\theta=(1-\cos2\theta)/2$. Thus both inversion and substitution give the same answer.

For $f(x)=1$ on $x>0$, the derivative-of-integral formula gives $u(x)=1/(\pi\sqrt x)$. This function is not continuous at zero, but it is integrable. Its Abel integral equals $1$ because $\int_0^xdt/[\sqrt t\sqrt{x-t}]=\pi$. So these data have no continuous solution on $[0,b]$, but do have an integrable endpoint-singular solution. The answer class changes the existence statement.

## Limits and useful errors

Do not differentiate the original singular integrand by the elementary moving-limit formula: its endpoint value is infinite. Use the double-integration argument or the substitution instead. Keep the normalization $1/\pi$; omitting it changes every answer. Differentiation in the inverse can magnify irregular data, so numerical inversion often needs smoothing or regularization. Exact solvability is not a guarantee of stable inversion.

## Practice

1. Find the Abel data for the constant function $u(t)=3$.
2. Solve the Abel equation with $f(x)=x^{3/2}$ in the class of continuous functions, using a candidate $u(t)=ct$.

## Worked answers

1. Integrating the kernel gives $f(x)=3\cdot2\sqrt x=6\sqrt x$. Applying the inverse to $6\sqrt x$ returns $3$; the endpoint derivative of the data need not be finite.
2. The integral of $t/\sqrt{x-t}$ is found by $s=x-t$: $\int_0^x(x-s)s^{-1/2}\,ds=2x\sqrt x-(2/3)x^{3/2}=(4/3)x^{3/2}$. Thus $c=3/4$ and $u(t)=3t/4$. The inversion identity proves uniqueness for continuous solutions.
