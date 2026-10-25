---
title: "Gaussian entropy and minimum quantum uncertainty"
---

> [!TLDR]
> A Gaussian maximizes differential entropy at fixed mean and variance; minimum quantum uncertainty also requires a suitable wavefunction phase.

Chapter 14 · Exercise 7 · Challenge

Back to [[14 Probability and Distributions/08 Exercises|Chapter 14 exercises]] · [[14 Probability and Distributions/00 Probability and Distributions|Chapter 14 overview]].

## Question

The source defines the entropy of a continuous distribution as

$$
S=-\int_{-\infty}^{+\infty}\rho(x)\ln\rho(x)\,dx.
$$

**(a)** Calculate $S$ for $\mathcal N(\mu,\sigma^2)$.

**(b)** Use Lagrange multipliers to prove that the normal distribution maximizes $S$ among densities with specified $\langle X\rangle=\mu$ and $\operatorname{Var}(X)=\sigma^2$.

**(c)** Discuss the source’s observation that a distribution of maximum information uncertainty corresponds to a wave packet of minimum quantum uncertainty.

> [!note]
> The continuous quantity $S$ is **differential entropy**. Its value depends on the coordinate scale; when the variable has physical units, a reference measure or fixed coordinate units are needed in interpreting the logarithm. The maximum is subject to the fixed mean and variance. In part (c), the corresponding minimum quantum uncertainty product requires a suitable Gaussian wavefunction phase, not only a Gaussian position density.

## Worked solution

### (a) Evaluate the Gaussian differential entropy

For $\sigma>0$, the normalized density and its logarithm are

$$
\rho(x)=\frac1{\sqrt{2\pi\sigma^2}}
\exp\left[-\frac{(x-\mu)^2}{2\sigma^2}\right],
\qquad
\ln\rho(x)=-\frac12\ln(2\pi\sigma^2)-\frac{(x-\mu)^2}{2\sigma^2}.
$$

Insert the logarithm into the entropy integral. Separate the constant term from the centered second moment:

$$
\begin{aligned}
S&=\frac12\ln(2\pi\sigma^2)\int_{-\infty}^\infty\rho(x)\,dx
+\frac1{2\sigma^2}\int_{-\infty}^\infty(x-\mu)^2\rho(x)\,dx\\
&=\frac12\ln(2\pi\sigma^2)+\frac12
=\frac12\ln(2\pi e\sigma^2).
\end{aligned}
$$

The first integral is one by normalization; the second is $\sigma^2$ by the specified variance.

### (b) Find the stationary density with all three constraints

Fix the mean, the variance, and the total probability. Use multipliers for all three conditions:

$$
\begin{aligned}
\mathcal L[\rho]
={}&-\int\rho\ln\rho\,dx
-\lambda_0\left(\int\rho\,dx-1\right)\\
&-\lambda_1\int(x-\mu)\rho\,dx
-\lambda_2\left(\int(x-\mu)^2\rho\,dx-\sigma^2\right).
\end{aligned}
$$

All integrals in this part extend over the full real line. The first variation must vanish for arbitrary sufficiently small changes of the density:

$$
\frac{\delta\mathcal L}{\delta\rho}
=-(\ln\rho+1)-\lambda_0-\lambda_1(x-\mu)-\lambda_2(x-\mu)^2=0.
$$

Solve this algebraic equation for the stationary density:

$$
\rho(x)=e^{-1-\lambda_0}
\exp[-\lambda_1(x-\mu)-\lambda_2(x-\mu)^2].
$$

Integrability requires $\lambda_2>0$. Complete the square:

$$
-\lambda_2(x-\mu)^2-\lambda_1(x-\mu)
=-\lambda_2\left(x-\mu+\frac{\lambda_1}{2\lambda_2}\right)^2
+\frac{\lambda_1^2}{4\lambda_2}.
$$

The resulting Gaussian has mean $\mu-\lambda_1/(2\lambda_2)$. The mean constraint therefore requires $\lambda_1=0$. The Gaussian integral and its second-moment derivative give

$$
\int_{-\infty}^\infty e^{-\lambda_2y^2}\,dy=\sqrt{\frac\pi{\lambda_2}},
\qquad
\frac{\int y^2e^{-\lambda_2y^2}\,dy}{\int e^{-\lambda_2y^2}\,dy}
=-\frac{d}{d\lambda_2}\ln\sqrt{\frac\pi{\lambda_2}}
=\frac1{2\lambda_2}.
$$

Thus the fixed variance gives $\lambda_2=1/(2\sigma^2)$. Normalization gives $e^{-1-\lambda_0}=1/\sqrt{2\pi\sigma^2}$. The stationary density is exactly $\mathcal N(\mu,\sigma^2)$.

### Prove that the stationary point is the global maximum

Stationarity alone does not establish a maximum. The second variation is

$$
\delta^2S=-\int\frac{(\delta\rho)^2}{\rho}\,dx<0
$$

for a nonzero admissible change about a positive density. More generally, $-t\ln t$ is strictly concave for $t>0$, and the normalization and fixed-moment constraints are linear in $\rho$. Thus their feasible set is convex and a stationary feasible density is the unique maximum up to sets of measure zero.

One can verify the global bound directly. Let $g$ denote the Gaussian just found and let $\rho$ be any admissible density. Nonnegativity of relative entropy gives

$$
D(\rho\Vert g)=\int\rho\ln\frac\rho g\,dx\geq0.
$$

For example, this follows from $\ln t\leq t-1$ applied to $t=g/\rho$ where $\rho>0$. Since $\ln g$ is a constant plus a centered quadratic, all admissible densities have the same integral against $\ln g$:

$$
-\int\rho\ln g\,dx
=\frac12\ln(2\pi\sigma^2)+\frac12
=S[g].
$$

Therefore

$$
D(\rho\Vert g)=-S[\rho]+S[g]\geq0,
\qquad S[\rho]\leq S[g],
$$

with equality only when $\rho=g$ almost everywhere. The bound applies when the entropy is well defined; a density with entropy $-\infty$ cannot improve the maximum.

### (c) Maximum position entropy and minimum quantum uncertainty

Take the random variable to be physical position. Write its Gaussian mean and standard deviation as $\mechanical{\mu}_x$ and $\mechanical{\sigma}_x$. A wavefunction with this density can have an arbitrary real phase $\signal{\phi}(\mechanical{x})$:

$$
\signal{\psi}(\mechanical{x})
=\frac1{(2\pi\mechanical{\sigma}_x^2)^{1/4}}
\exp\left[-\frac{(\mechanical{x}-\mechanical{\mu}_x)^2}{4\mechanical{\sigma}_x^2}
+i\signal{\phi}(\mechanical{x})\right].
$$

For a constant or linear phase, write $\signal{\phi}(\mechanical{x})=
\signal{\phi}_0+\mechanical{p}_0\mechanical{x}/\mechanical{\hbar}$. The momentum operator is $\hat p=-i\mechanical{\hbar}\,d/d\mechanical{x}$. Differentiation gives

$$
(\hat p-\mechanical{p}_0)\signal{\psi}
=\frac{i\mechanical{\hbar}(\mechanical{x}-\mechanical{\mu}_x)}
{2\mechanical{\sigma}_x^2}\signal{\psi}.
$$

Its expectation is zero because the Gaussian is centered at $\mechanical{\mu}_x$. The squared norm of this expression gives the momentum variance:

$$
\langle\hat p\rangle=\mechanical{p}_0,\qquad
(\mechanical{\Delta p})^2
=\frac{\mechanical{\hbar}^2}{4\mechanical{\sigma}_x^4}
\langle(\mechanical{x}-\mechanical{\mu}_x)^2\rangle
=\frac{\mechanical{\hbar}^2}{4\mechanical{\sigma}_x^2}.
$$

Since $\mechanical{\Delta x}=\mechanical{\sigma}_x$,

$$
\mechanical{\Delta x}\,\mechanical{\Delta p}=\frac{\mechanical{\hbar}}2.
$$

This saturates the position–momentum Heisenberg bound. To see why the phase condition matters, write the wavefunction as a real positive amplitude times $e^{i\signal{\phi}}$. For a differentiable phase with finite momentum variance, direct differentiation and integration give

$$
\langle\hat p\rangle=\mechanical{\hbar}\langle\signal{\phi}'\rangle,
\qquad
(\mechanical{\Delta p})^2
=\frac{\mechanical{\hbar}^2}{4\mechanical{\sigma}_x^2}
+\mechanical{\hbar}^2\operatorname{Var}(\signal{\phi}').
$$

The derivative of the amplitude is real, whereas the phase-gradient contribution to its derivative is imaginary. Their cross term in the squared norm is zero. The added variance is nonnegative and vanishes only for a constant phase gradient almost everywhere. A varying phase gradient therefore increases the momentum spread without changing the Gaussian position density or its entropy.

> [!note]
> The two optimization statements have different constraints. Differential entropy is largest among position densities with the same mean and variance. The quantum product is smallest for a compatible Gaussian wavefunction with constant or linear phase. A Gaussian position density alone does not fix that product. A quadratic phase can saturate the stronger covariance form of the uncertainty relation while giving a larger product $\mechanical{\Delta x}\,\mechanical{\Delta p}$.

For a dimensionful coordinate, use a fixed reference length $\mechanical{\ell}_0$ to make the entropy logarithm dimensionless:

$$
S_{\ell_0}=-\int\rho(\mechanical{x})
\ln[\rho(\mechanical{x})\mechanical{\ell}_0]\,d\mechanical{x}
=\frac12\ln\left(\frac{2\pi e\mechanical{\sigma}_x^2}{\mechanical{\ell}_0^2}\right).
$$

The reference length adds the same constant to all entropies in the comparison, so it does not change which density maximizes entropy.

## Answer

In a fixed coordinate measure,

$$
\boxed{S_{\max}=\frac12\ln(2\pi e\sigma^2),\qquad
\rho_{\max}(x)=\frac{e^{-(x-\mu)^2/(2\sigma^2)}}{\sqrt{2\pi\sigma^2}}.}
$$

The Gaussian is the unique maximum at the specified mean and positive variance. Its square-root amplitude with constant or linear phase gives $\mechanical{\Delta x}\,\mechanical{\Delta p}=\mechanical{\hbar}/2$. A general position-dependent phase need not give that minimum.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$, $\mechanical{\mu}_x$ | $\unit{m}$ | Position and mean position | The quantum position coordinate and its mean. |
| $\mechanical{\sigma}_x$, $\mechanical{\Delta x}$ | $\unit{m}$ | Position standard deviation | The width of the Gaussian position density. |
| $\mechanical{\sigma}_x^2$ | $\unit{m^2}$ | Position variance | The fixed centered second position moment. |
| $\rho(\mechanical{x})$ | $\unit{m^{-1}}$ | Position probability density | The normalized Gaussian density when the variable is position. |
| $\signal{\psi}$ | $\unit{m^{-1/2}}$ | Position wavefunction | The Gaussian amplitude with a specified phase. |
| $\signal{\phi}$, $\signal{\phi}_0$ | $1$ | Wavefunction phase | The position-dependent phase and a constant phase offset. |
| $\signal{\phi}'$ | $\unit{m^{-1}}$ | Phase gradient | The derivative of phase with respect to position. |
| $\mechanical{p}_0$, $\langle\hat p\rangle$, $\mechanical{\Delta p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum and its statistics | The phase momentum, mean momentum, and standard deviation. |
| $(\mechanical{\Delta p})^2$ | $\unit{kg^2\,m^2\,s^{-2}}$ | Momentum variance | The centered second momentum moment. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale in the uncertainty bound. |
| $\mechanical{\ell}_0$ | $\unit{m}$ | Reference length | A fixed scale that makes the density logarithm dimensionless. |
