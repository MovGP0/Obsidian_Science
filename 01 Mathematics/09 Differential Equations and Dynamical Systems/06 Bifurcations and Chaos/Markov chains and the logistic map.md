---
title: "Markov chains and the logistic map"
---

> [!TLDR]
> A transition matrix propagates a distribution, while a nonlinear update propagates a state whose stability can change with a parameter.

## Stationarity in a two-state chain

Use row vectors for probability distributions and let $P_{ij}$ be the chance of moving from $i$ to $j$. For

$$
P=\begin{pmatrix}3/4&1/4\\1/2&1/2\end{pmatrix},
$$

every row sums to one. A distribution $\pi$ is stationary when $\pi P=\pi$. If $\pi=(a,1-a)$, the equality of the fluxes $a/4=(1-a)/2$ gives $a=2/3$. Starting with state one gives $a_0=1$ and the recursion $a_{n+1}=1/2+a_n/4$. Subtracting the fixed point gives $a_n-2/3=4^{-n}(a_0-2/3)$. This proves convergence for this chain. In data, estimate a row from observed transitions out of that state and check that the model has enough observations for the states it uses.

## Local stability of a deterministic update

For the logistic map $x_{n+1}=f(x_n)=r x_n(1-x_n)$ on $[0,1]$ with $0\le r\le4$, the nonzero fixed point for $r>1$ is $x_*=1-1/r$. Linearizing around it gives $x_{n+1}-x_*\simeq(2-r)(x_n-x_*)$. It is locally attracting for $1<r<3$, and the signed perturbation alternates for $2<r<3$. At $r=3$ the derivative crosses $-1$ and a stable two-cycle emerges just above the crossing. Testing local attraction of a cycle uses the product of derivatives around it, the derivative of the return map.

The continuous logistic equation $x'=r x(1-x)$ with $r>0$ gives monotone approach to $1$ for $0<x(0)<1$. Fitting a discrete update to observations and discretizing a continuous equation are different modeling choices. If an Euler approximation oscillates while the differential equation predicts monotone motion, reduce the step and check whether the oscillations persist. See [[Nonlinear evolution patterns and chaos]] and [[Initial value algorithms]].

## Sources

Source material from Kyle Kabasares’s UC Merced notes. [[Markov models and population dynamics#Markov chains|Math 150]], [[Linearization, phase portraits, and nonlinear maps#Difference equations and the Fibonacci sequence|Math 150]].
