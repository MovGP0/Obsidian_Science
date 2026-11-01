---
title: "Fourier Series"
---

> [!TLDR]
> Fourier series expand periodic functions into sine, cosine, or complex exponential modes. Their convergence and normalization connect signal analysis with Hilbert-space basis expansions.

In 1807, Fourier presented his investigation of heat conduction in solids to the Paris Academy of Sciences. To solve the heat equation, he wrote its solutions as infinite sums of sine and cosine functions. He claimed that every function could be represented this way.

Mathematicians of the time, particularly Lagrange and Laplace, were skeptical. How could a sum of smooth functions produce a discontinuous function? A rigorous answer required almost a century of mathematical work. Meanwhile, Fourier’s method had already solved many physical problems.

Fourier series are now central tools in vibration analysis, signal theory, partial differential equations, and quantum expansions in energy eigenstates.

## Why modes are useful

A periodic profile can have corners or jumps, while each sinusoidal mode is smooth. The useful question is therefore not whether a finite sum reproduces every detail. It is which sense of convergence makes an infinite mode expansion valid, and what a finite cutoff retains.

Read the complex form first to see projection onto orthogonal modes. Use the real form to exploit parity, then compare the examples with the convergence theorem. Parseval's relation finally turns the size of a function, and the error from omitted modes, into sums of squared coefficients.

Keep the boundary conditions separate from this mathematical expansion. Periodic complex modes describe a periodic interval. A particle with hard walls instead uses sine modes that vanish at the walls. Both are basis expansions, but the boundary conditions select different physical operators. As a first check, ask whether a constant profile requires one mode or infinitely many in each basis.

## Chapter sections

- [[01 The Complex Form|The complex form]]
- [[02 The Real Form|The real form]]
- [[03 Examples of Fourier Series|Examples of Fourier series]]
- [[04 Convergence and the Gibbs Phenomenon|Convergence and the Gibbs phenomenon]]
- [[05 Parseval's Relation|Parseval’s relation]]
- [[12 Fourier Series/06 Common Errors|Common errors and quantum applications]]
- [[12 Fourier Series/07 Chapter Summary|Chapter summary]]
- [[12 Fourier Series/08 Exercises|Exercises]]
