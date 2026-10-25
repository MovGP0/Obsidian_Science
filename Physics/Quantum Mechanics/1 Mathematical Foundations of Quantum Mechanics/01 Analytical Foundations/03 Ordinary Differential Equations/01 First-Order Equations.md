---
title: "First-Order Equations"
---

> [!TLDR]
> A first-order equation contains the first derivative of an unknown function. An initial condition selects a solution, and separation of variables solves many important examples.

> [!definition] Definition 3.1 — First-order ordinary differential equation in normal form
> A first-order **ordinary differential equation** (ODE) is
>
> $$
> \frac{\mathrm{d}y}{\mathrm{d}x}=f(x,y),
> $$
>
> where $y=y(x)$ is the unknown function. A **solution** is any function $y(x)$ that satisfies the equation identically in $x$.

## The Cauchy problem

An initial condition $y(x_0)=y_0$ selects a unique solution if $f$ is sufficiently regular. The relevant condition is Lipschitz continuity in $y$, as stated by the Cauchy–Lipschitz theorem.

Physically, knowledge of a system's initial state determines its evolution. One initial value is sufficient for a first-order equation. A second-order equation, such as $\mechanical{F}=\mechanical{m}\mechanical{a}$, needs both position and velocity.

> [!note]
> The usual local existence and uniqueness theorem also assumes continuity in the independent variable. Local Lipschitz continuity in the dependent variable is a sufficient uniqueness condition. The solution need not exist for all values of the independent variable.

## Separation of variables

If $f(x,y)=g(x)h(y)$, separate the equation:

$$
\frac{\mathrm{d}y}{h(y)}=g(x)\,\mathrm{d}x
\quad\Longrightarrow\quad
\int\frac{\mathrm{d}y}{h(y)}=\int g(x)\,\mathrm{d}x.
$$

> [!note]
> Division by $h(y)$ assumes $h(y)\ne0$. Check the constant solutions with $h(y)=0$ separately, so that separation does not remove them.

## Example — Radioactive decay

The decay equation is

$$
\frac{\mathrm{d}N}{\mathrm{d}\signal{t}}=-\signal{\lambda}N.
$$

Here $N(\signal{t})$ is the number of nuclei at time $\signal{t}$, and $\signal{\lambda}>0$ is the decay constant.

Separate the variables:

$$
\frac{\mathrm{d}N}{N}=-\signal{\lambda}\,\mathrm{d}\signal{t}.
$$

Integrate:

$$
\ln|N|=-\signal{\lambda}\signal{t}+C,
\qquad N(\signal{t})=C'\mathrm{e}^{-\signal{\lambda}\signal{t}}.
$$

The factor from exponentiation of the integration constant is included in $C'$. With the initial condition $N(0)=N_0$,

$$
N(\signal{t})=N_0\mathrm{e}^{-\signal{\lambda}\signal{t}}.
$$

**Interpretation:** The decay rate is proportional to the number of nuclei present. Each nucleus decays independently of the others. The constant $\signal{\tau}=1/\signal{\lambda}$ is the **mean lifetime**. Over this time, the population decreases by a factor of $\mathrm{e}$.

The same exponential form occurs in the time evolution of energy eigenstates in quantum mechanics:

$$
\signal{\psi}(\signal{t})=\signal{\psi}_0\mathrm{e}^{-\mathrm{i}\energy{E}\signal{t}/\energy{\hbar}}.
$$

## Example — The logistic equation

The logistic equation models growth with saturation, such as population growth or the spread of an epidemic:

$$
\frac{\mathrm{d}N}{\mathrm{d}\signal{t}}
=\signal{r}N\left(1-\frac{N}{K}\right).
$$

Separate the variables:

$$
\frac{\mathrm{d}N}{N(1-N/K)}=\signal{r}\,\mathrm{d}\signal{t}.
$$

Use partial fractions:

$$
\frac{1}{N(1-N/K)}=\frac1N+\frac{1/K}{1-N/K}.
$$

Integrate both sides:

$$
\ln N-\ln(1-N/K)=\signal{r}\signal{t}+C,
\qquad
\ln\frac{N}{K-N}=\signal{r}\signal{t}+C.
$$

The additive constant absorbs the constant factor between the logarithmic forms. Solve for $N$:

$$
N(\signal{t})=\frac{K}{1+A\mathrm{e}^{-\signal{r}\signal{t}}},
\qquad A=\frac{K-N_0}{N_0}.
$$

As $\signal{t}\to\infty$, $N(\signal{t})\to K$, the **carrying capacity**. This nonlinear equation does not occur directly in quantum mechanics. It shows how widely the separation method can be used.

> [!note]
> The logarithms as written assume $0<N<K$. Use absolute values for other non-equilibrium ranges. The saturation interpretation uses $\signal{r}>0$, $K>0$, and a positive initial population. The equilibrium solutions $N=0$ and $N=K$ must also be retained.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{F}$ | $\unit{N}$ | Force | The force in the second-order example used to explain initial data. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The mass in Newton's law. |
| $\mechanical{a}$ | $\unit{m\,s^{-2}}$ | Acceleration | The acceleration in Newton's law. |
| $\signal{t}$ | $\unit{s}$ | Time | The independent variable of the decay and growth models. |
| $N,N_0$ | $1$ | Population count | The current and initial numbers of nuclei or members of a population. |
| $\signal{\lambda}$ | $\unit{s^{-1}}$ | Decay constant | The positive decay rate per nucleus. |
| $\signal{\tau}$ | $\unit{s}$ | Mean lifetime | The reciprocal of the radioactive decay constant. |
| $\signal{r}$ | $\unit{s^{-1}}$ | Growth rate | The growth-rate coefficient of the logistic model. |
| $K$ | $1$ | Carrying capacity | The limiting population in the logistic model. |
| $\signal{\psi},\signal{\psi}_0$ | — | State amplitude | The evolving state amplitude and its initial value. Their units depend on representation. |
| $\energy{E}$ | $\unit{J}$ | Energy | The energy eigenvalue in the state's phase factor. |
| $\energy{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant in the quantum time-evolution phase. |
