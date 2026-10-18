---
title: "Complex analysis learning guide"
catalogue_ids:
  - "14"
---

> [!TLDR]
> Complex analysis studies functions whose derivative is independent of the direction of approach, then uses this strong condition to calculate curves, series, and integrals.

## A route from school mathematics

Start with [[Complex numbers and the plane]], [[Complex arithmetic and conjugates]], [[Polar form of complex numbers]], and [[06.05 Euler’s formula]]. These notes explain $i^2=-1$, distance, angle, and $e^{i\theta}$. Then read [[07.01 Limits]], [[07.03 The derivative]], and [[08.01 Definite integrals]]. A derivative is a limit of difference quotients; an integral is a limit of sums. This chapter explains the extra restrictions when the input can move in a plane.

You do not need prior university complex analysis. When partial derivatives occur, they mean change in one real coordinate with the other coordinate fixed; [[12.02 Partial derivatives]] provides more practice. Infinite series enter after the first integration lessons. Read [[09.02 Infinite series]] and [[09.05 Power series]] at that stage. Each advanced lesson defines its new objects and gives a small example before its general formulas.

## What makes the subject different

The two real coordinates of $z=x+iy$ do not give two unrelated complex derivatives. In a complex derivative, the increment $h$ can approach zero from every direction. A single answer must work for all these directions. The function $z^2$ meets this requirement, but $\overline z$ does not. This simple distinction leads to strong theorems: a holomorphic function has derivatives of every order and a local convergent power series.

Complex integration follows an oriented curve. An integral can detect a hole even when the integrand is differentiable at every point on the curve. For example, $\oint dz/z=2\pi i$ around the counterclockwise unit circle. The value comes from the singularity at the enclosed origin. Residues isolate this information and make some real improper integrals easier to calculate.

## Study order and boundaries

Read limits and derivatives first, followed by holomorphic functions. Conformal mapping is a geometric branch that can follow immediately. Next study contour integration, Cauchy's formulas, series, and residues. Real-integral calculations use all these tools. Branches explain why a complex logarithm needs a domain choice. Elliptic functions are an optional final extension: they generalize the periodic behavior of sine to two independent complex periods.

Definitions, elementary derivations, and stated theorems have different roles. The lessons derive calculations that use only algebra and calculus. A theorem such as Cauchy's theorem is stated with its hypotheses; its full proof needs a longer course. Always check a domain and a contour before inserting values into an integral formula.

## A first check

For $f(z)=z^2$, the quotient is $(f(z+h)-f(z))/h=2z+h$. Thus $f'(z)=2z$. At $z=i$ this is $2i$: multiplication by the derivative turns a small increment through a right angle and multiplies its length by two.

## Practice

1. Why is a function of one complex variable also a map with two real input coordinates?
2. Does differentiability on a circle imply differentiability in the disk it bounds?

### Worked answers

1. Write $z=x+iy$ and $f(z)=u(x,y)+iv(x,y)$. Each input and output has two real coordinates. Complex differentiability adds a restriction that a general map of real coordinate pairs need not satisfy.
2. No. The function $1/z$ is holomorphic near every point of the unit circle, but it is undefined at the origin inside. A theorem that requires holomorphic behavior throughout the disk cannot be applied to it there.

<!-- catalogue-complete-lesson-index:start -->
## Complete lesson index

Read the prerequisite route above before the advanced lessons. The source topic links are in [[Planned Topics#14. Complex analysis|the detailed catalogue]].

- [[Complex limits and derivatives|Complex limits and derivatives]] — 14.1, 14.1.1, 14.1.1.1, 14.1.1.2, 14.1.1.3, 14.1.1.4.
- [[Holomorphic functions and their consequences|Holomorphic functions and their consequences]] — 14.1.2, 14.1.2.1, 14.1.2.2, 14.1.2.3, 14.1.2.4.
- [[Conformal maps and harmonic functions|Conformal maps and harmonic functions]] — 14.1.3, 14.1.3.1, 14.1.3.2, 14.1.3.3, 14.1.3.4, 14.1.3.5, 14.1.3.6.
- [[Contour integrals and primitives|Contour integrals and primitives]] — 14.2, 14.2.1, 14.2.1.1, 14.2.1.2.
- [[Cauchy theorems and integral formulas|Cauchy theorems and integral formulas]] — 14.2.2, 14.2.2.1, 14.2.2.2, 14.2.3, 14.2.3.1, 14.2.3.2.
- [[Complex series and analytic continuation|Complex series and analytic continuation]] — 14.3, 14.3.1, 14.3.1.1, 14.3.1.2, 14.3.1.3, 14.3.2, 14.3.3.
- [[Laurent series and residues|Laurent series and residues]] — 14.3.4, 14.3.5, 14.3.5.1, 14.3.5.2, 14.3.5.4, 14.3.5.5.
- [[Elliptic integrals and Jacobi functions|Elliptic integrals and Jacobi functions]] — 14.3.5.3, 14.6, 14.6.1, 14.6.2.
- [[Real integrals by contour methods|Real integrals by contour methods]] — 14.4, 14.4.1, 14.4.2, 14.4.3, 14.4.3.1, 14.4.3.2.
- [[Complex branches and elementary functions|Complex branches and elementary functions]] — 14.5, 14.5.1, 14.5.2, 14.5.3.
- [[Theta and Weierstrass functions|Theta and Weierstrass functions]] — 14.6.3, 14.6.4.
<!-- catalogue-complete-lesson-index:end -->
