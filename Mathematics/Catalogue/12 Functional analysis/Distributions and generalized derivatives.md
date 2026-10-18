---
title: "Distributions and generalized derivatives"
catalogue_ids:
  - "12.9.5"
  - "12.9.5.1"
  - "12.9.5.2"
  - "12.9.5.3"
  - "12.9.5.4"
---

> [!TLDR]
> Distributions act on smooth test functions, so differentiation can remain meaningful for functions with corners or jumps.

## Prerequisite route

Read [[07.03 The derivative]], [[08.05 Integration by parts]], [[Measure and Lebesgue integration]], and [[Continuous functionals and representation]]. We work on an open interval $\Omega\subset\mathbb R$. An integral identity will replace a pointwise derivative formula. This introduces distributions from explicit calculations, without requiring prior knowledge of topological vector spaces.

## Integration by parts formula

For continuously differentiable $f,\varphi$ on $[a,b]$,

$$
\int_a^b f'(t)\varphi(t)\,dt
=[f(t)\varphi(t)]_a^b-\int_a^bf(t)\varphi'(t)\,dt.
$$

A **test function** on $\Omega$ is infinitely differentiable and has compact support inside $\Omega$. Its support is the closure of the set where it is nonzero. Compact support inside the interval means it vanishes near the endpoints or outside a bounded internal region. We write the test-function space as $\mathcal D(\Omega)=C_c^\infty(\Omega)$.

For a test function the boundary term vanishes. This gives

$$
\int_\Omega f'\varphi=-\int_\Omega f\varphi'.
$$

The right side still makes sense for many $f$ that have no ordinary derivative. This motivates a definition rather than assuming that a missing classical derivative exists.

## Generalized derivative

A function $f$ is **locally integrable**, written $f\in L^1_{\mathrm{loc}}(\Omega)$, if $\int_K|f|<\infty$ for every compact subset $K$ of $\Omega$. A locally integrable $g$ is a **weak derivative** of $f$ when

$$
\int_\Omega g\varphi=-\int_\Omega f\varphi'
\quad\text{for every }\varphi\in C_c^\infty(\Omega).
$$

For $f(t)=|t|$ on the real line, split the second integral at zero. Ordinary integration by parts on each half gives

$$
-\int_{-\infty}^{\infty}|t|\varphi'(t)\,dt
=-\int_{-\infty}^0\varphi(t)\,dt+\int_0^\infty\varphi(t)\,dt.
$$

Thus the weak derivative is $g(t)=-1$ for $t<0$ and $g(t)=1$ for $t>0$. Its value at zero is irrelevant. The corner prevents a classical derivative at zero, but it does not prevent a weak derivative represented by an ordinary locally integrable function.

## Distributions

A **distribution** $T$ is a continuous linear functional on the test functions. Its value is written $\langle T,\varphi\rangle$. Here angle brackets mean evaluation, not a Hilbert inner product. Continuity means: if all $\varphi_n$ have support in one fixed compact set and every derivative of $\varphi_n$ converges uniformly to zero, then $\langle T,\varphi_n\rangle\to0$.

Equivalently, on every fixed compact support set $K$ there are a constant $C$ and a nonnegative integer $m$ such that

$$
|\langle T,\varphi\rangle|
\le C\max_{0\le j\le m}\sup_{t\in K}|\varphi^{(j)}(t)|
$$

for all test functions supported in $K$. The derivative order and constant can depend on $K$. This is not merely boundedness with respect to a single $L^2$ norm.

Every locally integrable $f$ defines a **regular distribution** $T_f$ by $\langle T_f,\varphi\rangle=\int f\varphi$. Local integrability and compact support ensure finiteness. The bound with $m=0$ follows from $|\int f\varphi|\le(\int_K|f|)\sup_K|\varphi|$.

The **Dirac distribution** at $a\in\Omega$ is $\langle\delta_a,\varphi\rangle=\varphi(a)$. It obeys a continuity bound with $m=0$ and $C=1$. It is not an ordinary function that is infinite at one point: changing the value of an integrable function at one point cannot create nonzero integral mass.

## Derivative of a distribution

Define

$$
\langle T',\varphi\rangle=-\langle T,\varphi'\rangle.
$$

This is again a continuous linear functional, so **every distribution has a distributional derivative**. Repeated differentiation gives $\langle T^{(k)},\varphi\rangle=(-1)^k\langle T,\varphi^{(k)}\rangle$. A weak derivative is the special case where $T_f'$ can be represented by a locally integrable function. A distributional derivative need not be regular. [Hunter, section 3.3](https://www.math.ucdavis.edu/~hunter/pdes/ch3.pdf)

## Worked example: differentiate a jump

Let $H(t)=0$ for $t<0$ and $H(t)=1$ for $t>0$, with any value at zero. For a test function,

$$
\langle T_H',\varphi\rangle
=-\int_0^\infty\varphi'(t)\,dt
=\varphi(0).
$$

The final equality holds because $\varphi$ vanishes for large $t$. Thus $T_H'=\delta_0$. A jump of size $c$ at $a$ contributes $c\delta_a$ to the distributional derivative. For example $f(t)=2+3H(t-a)$ has derivative $3\delta_a$. The constant contributes zero, since the integral of a test function's derivative is zero.

For $|t|$, the first weak derivative is $\operatorname{sgn}(t)=2H(t)-1$. Its next distributional derivative is therefore $2\delta_0$. The second derivative is not represented by an ordinary locally integrable function. Differentiating the Dirac distribution itself gives $\langle\delta_a',\varphi\rangle=-\varphi'(a)$.

Distributional differentiation preserves linearity, but arbitrary products of distributions are not defined in this theory. Multiplication by a smooth function is defined by $\langle aT,\varphi\rangle=\langle T,a\varphi\rangle$. The expression $\delta_0^2$ has no automatic meaning. Also, boundary terms reappear if the chosen functions do not vanish near the boundary; do not discard them without checking support.

## Practice

1. Find the distributional derivative of $f(t)=H(t-1)-H(t-3)$.
2. If $T=2\delta_1'-\delta_0$, express $\langle T,\varphi\rangle$ in terms of test-function values and derivatives.

> [!example]- Worked answers
> 1. The first jump is $+1$ at $1$, and the second is $-1$ at $3$. Hence $T_f'=\delta_1-\delta_3$. Directly, $-\int_1^3\varphi'=\varphi(1)-\varphi(3)$ gives the same result.
> 2. By linearity and the derivative definition, $\langle T,\varphi\rangle=-2\varphi'(1)-\varphi(0)$. The minus sign on the derivative term is required by integration by parts.
