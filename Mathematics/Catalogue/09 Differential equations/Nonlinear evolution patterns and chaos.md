---
title: "Nonlinear evolution, patterns, and chaos"
catalogue_ids:
  - "9.2.5"
  - "9.2.5.1"
---

> [!TLDR]
> Nonlinear PDEs can form shocks, localized pulses, spatial patterns, or chaotic evolution; data, boundaries, and stability determine which behavior occurs.

## What changes when the equation is nonlinear?

Read [[Characteristics for first-order PDEs]], [[Wave diffusion and potential equations]], and [[16.02 Trigonometric and complex bases]]. A nonlinear PDE contains a nonlinear operation on the unknown function or its derivatives. For example, $u_t+u u_x=0$ is nonlinear because it multiplies the unknown by its derivative. The term $x^2u$, in contrast, is linear in the unknown because its coefficient is a given input function.

If $u$ and $v$ solve a nonlinear equation, their sum usually does not. For the transport nonlinearity, $(u+v)(u_x+v_x)$ contains the extra cross terms $uv_x+vu_x$. Therefore a Fourier expansion can still represent a function, but its coefficients typically interact. Solving each Fourier coefficient independently and adding the results is not generally valid.

All variables in this lesson are dimensionless mathematical variables. The catalogue's “physical and mathematical problem statement” means that a model also needs its intended domain, coefficient choices, data, and solution concept. An equation name alone does not specify a well-posed problem. This article treats the mathematical distinctions before the explicit examples in [[Travelling solitary waves]].

## State the problem before studying its behavior

Choose a domain, for example the real line with decay, or an interval of length $L$ with periodic conditions. Then give initial data and the derivatives required by temporal order. For an equation with $u_{xxxx}$ on a finite nonperiodic interval, two spatial boundary conditions are generally insufficient: its fourth-order spatial operator needs an appropriate larger set. Periodicity supplies matching derivative data through the required order.

Specify whether a **classical solution** has pointwise derivatives, a **weak solution** satisfies integrated identities, or a numerical approximation is being discussed. The smooth solution of a conservation law can develop an infinite gradient. Continuing through a jump needs integral conservation and a selection rule such as entropy admissibility. A classical solution and an entropy solution are not two formulas for the same unqualified definition.

An **equilibrium** does not change with $t$. A **travelling wave** has $u(x,t)=U(x-ct)$, where $c$ is a constant. A **spatially periodic pattern** repeats after a fixed shift in $x$. A **time-periodic solution** repeats after a fixed shift in $t$. These properties can combine, but none follows from the equation being nonlinear.

## Linearization detects the first growth of a disturbance

For $u_t=\mathcal F(u)$ and equilibrium $u_*$, put $u=u_*+\epsilon v$ and keep terms of first order in the small scalar $\epsilon$. This produces a linear equation for the disturbance. It describes early small-amplitude behavior; neglected higher-order terms can matter later.

Consider the periodic **Swift–Hohenberg equation** in one variable:

$$
u_t=r u-(1+\partial_x^2)^2u-u^3.
$$

Here $r$ is a real parameter, and $(1+\partial_x^2)^2u=u+2u_{xx}+u_{xxxx}$. The zero function is an equilibrium. Near zero, drop the cubic term and try $v=e^{\sigma t}e^{ikx}$. The derivatives give

$$
\sigma(k)=r-(1-k^2)^2.
$$

On a periodic interval of length $L$, only $k=2\pi n/L$ occur, for integers $n$. Thus the domain selects which growing modes are available. On an interval of length $2\pi$, $k=1$ has growth rate $r$; for small positive $r$ that mode grows, while $k=0$ has rate $r-1<0$. This explains finite-wavelength pattern onset. It does not yet prove that a stable final pattern exists.

## Nonlinear saturation: a controlled approximation

Near the $k=1$ onset, try $u\approx A(t)\cos x$ on the $2\pi$-periodic interval. Since $(1+\partial_x^2)\cos x=0$ and $\cos^3x=(3\cos x+\cos3x)/4$, projection onto $\cos x$ gives

$$
A'\approx rA-\frac34A^3.
$$

The approximate nonzero equilibrium amplitude is $A\approx\pm\sqrt{4r/3}$ for $r>0$. This calculation explains how a cubic term can stop linear growth. It is not an exact single-cosine solution of the PDE: the cubic term also generates a third harmonic. A systematic amplitude approximation tracks that neglected component and controls its error.

## A worked instability calculation

The periodic **Kuramoto–Sivashinsky equation** is

$$
u_t+u u_x+u_{xx}+u_{xxxx}=0.
$$

Linearization about zero gives $\sigma(k)=k^2-k^4$. Modes with $0<|k|<1$ grow, while $|k|>1$ decay. For $L=4\pi$, $k=n/2$, so $n=\pm1$ grow, $n=\pm2$ are neutral in the linear test, and larger $|n|$ decay. The nonlinear product couples these modes, and the spatial mean is conserved for smooth periodic solutions because every non-temporal term integrates to zero.

For suitable domain lengths and data, this equation exhibits chaotic evolution. Instability of zero alone does not prove chaos: growth can instead lead to an equilibrium or periodic orbit. Primary computational demonstrations, including the reproducible [Chebfun example](https://www.chebfun.org/examples/pde/Kuramoto.html), document the additional behavior.

## What chaos means, and what a graph does not prove

Chaotic dynamics combine deterministic rules with sensitive dependence on nearby data on a relevant invariant regime. A positive largest Lyapunov exponent measures exponential growth of small perturbations in a chosen norm before saturation. An irregular-looking graph can also result from numerical error or a complicated transient. It is not a sufficient chaos test.

To compare two PDE solutions, specify a distance such as $\|u-v\|_2=(\int_0^L|u-v|^2dx)^{1/2}$. A numerical claim should test spatial resolution, temporal step size, and interval length, and examine long-time behavior after transients. A finite Fourier truncation is a finite ODE model of the PDE; its attractor need not be unchanged when more modes are retained. None of these observations implies that every nonlinear PDE is chaotic or that a solitary pulse is unstable.

## Practice

1. In the linearized Swift–Hohenberg equation with $r=0.1$ on a $2\pi$-periodic interval, find the growth rates for $k=0,1,2$.
2. Why is $u=A\cos x$ with $A\ne0$ generally not an exact stationary Swift–Hohenberg solution, even if $rA-3A^3/4=0$?

## Worked answers

1. Substitution into $r-(1-k^2)^2$ gives $-0.9$, $0.1$, and $-8.9$. Thus the $k=1$ mode initially grows, while the constant and $k=2$ modes decay under the linearized equation.
2. The cubic produces $A^3\cos3x/4$ as well as $3A^3\cos x/4$. Balancing the fundamental mode leaves a nonzero third-harmonic residual. More harmonics are needed in a stationary pattern, so the amplitude formula is an approximation.

## Further reading

Hermann Riecke’s [nonlinear dynamics lecture notes](https://people.esam.northwestern.edu/~riecke/Vorlesungen/438/notes.pdf) discuss pattern formation and the relation between instabilities and nonlinear dynamics.
