---
title: "Laurent series and residues"
catalogue_ids:
  - "14.3.4"
  - "14.3.5"
  - "14.3.5.1"
  - "14.3.5.2"
  - "14.3.5.4"
  - "14.3.5.5"
---

> [!TLDR]
> A Laurent series allows negative powers near a hole; its coefficient of the inverse first power is the residue that determines a closed integral.

## Laurent expansion

Read [[Complex series and analytic continuation]] and [[Cauchy theorems and integral formulas]]. A function holomorphic on an annulus $r<|z-a|<R$ has a unique **Laurent series**

$$
f(z)=\sum_{n=-\infty}^{\infty}c_n(z-a)^n,
\qquad
c_n=\frac1{2\pi i}\oint_{|\zeta-a|=\rho}
\frac{f(\zeta)}{(\zeta-a)^{n+1}}d\zeta,
\quad r<\rho<R.
$$

The circle is counterclockwise. The negative-power terms form the **principal part**. Both halves converge absolutely on the annulus and uniformly on every closed smaller annulus. A different annulus about the same center can give a different expansion, because the enclosing singularities have changed.

For example, $1/[z(1-z)]$ has expansion $z^{-1}+1+z+z^2+\cdots$ on $0<|z|<1$. On $|z|>1$, rewrite it as $-z^{-2}/(1-1/z)$ to obtain $-z^{-2}-z^{-3}-\cdots$. The first formula cannot be used outside its annulus. In particular, the coefficient of $z^{-1}$ depends on which annulus is under discussion; the residue at zero uses the small punctured neighborhood.

## Isolated singularities

Suppose $f$ is holomorphic on $0<|z-a|<R$. The Laurent principal part classifies the missing point.

- **Removable:** all negative-power coefficients are zero. Defining $f(a)=c_0$ makes the function holomorphic. For example, $\sin z/z=1-z^2/6+\cdots$ has a removable singularity at zero.
- **Pole of order $m$:** the principal part stops at $c_{-m}(z-a)^{-m}$, where $m\ge1$ and $c_{-m}\ne0$. Equivalently, $(z-a)^m f(z)$ extends to a holomorphic function that is nonzero at $a$.
- **Essential:** infinitely many negative-power coefficients are nonzero. The series $e^{1/z}=1+z^{-1}+z^{-2}/2!+\cdots$ makes zero essential.

A function bounded near an isolated singularity has a removable singularity. This assertion needs the punctured-neighborhood hypothesis. A branch cut is not a chain of isolated singularities, and a branch point cannot be classified by applying this list to a nonexistent single-valued punctured-disk branch.

## Meromorphic functions

A function is **meromorphic on a domain** if it is holomorphic there except for isolated poles. It has no essential singularities inside that domain. Rational functions are meromorphic on $\mathbb C$. The function $\tan z$ is another example, with poles at the zeros of cosine. Poles cannot accumulate at an interior point of a meromorphic domain, although they can approach its boundary or infinity.

Meromorphic does not mean entire, bounded, or pole-free on the chosen contour. The contour in the residue theorem must avoid the poles. A meromorphic function on a smaller domain can have behavior at an excluded boundary point that is not meromorphic on a larger domain.

## Residue and calculation rules

The **residue** at an isolated singularity is $c_{-1}$ in its local Laurent series, written $\operatorname{Res}(f,a)$. It is a coefficient, not necessarily the value of the function or the coefficient of the most singular term. For a simple pole,

$$
\operatorname{Res}(f,a)=\lim_{z\to a}(z-a)f(z).
$$

If $f=g/h$, with $g,h$ holomorphic near $a$, $h(a)=0$, and $h'(a)\ne0$, the formula becomes $g(a)/h'(a)$. For a pole of order $m$,

$$
\operatorname{Res}(f,a)=\frac1{(m-1)!}
\left[\frac{d^{m-1}}{dz^{m-1}}\big((z-a)^mf(z)\big)\right]_{z=a}.
$$

The expression in parentheses must first be extended at $a$. The formula follows by selecting the coefficient of $(z-a)^{m-1}$ in that holomorphic factor.

## Residue theorem

Let $C$ be a counterclockwise simple closed piecewise smooth contour. Suppose $f$ is holomorphic on an open neighborhood of $C$ and its interior except for finitely many isolated singularities $a_j$ strictly inside, with none on $C$. Then

$$
\oint_C f(z)\,dz=2\pi i\sum_j\operatorname{Res}(f,a_j).
$$

To see why residues appear, surround each missing point by a small circle and apply Cauchy's theorem to the remaining region. On each circle, integrate its Laurent series. For every integer $n\ne-1$, the integral of $(z-a)^n$ is zero; for $n=-1$ it is $2\pi i$. Thus only that coefficient survives. For more general closed contours, winding numbers weight the enclosed residues; the simple-contour version suffices here.

## Worked example: a double pole

On $|z|=2$ counterclockwise, integrate $e^z/[z^2(z-3)]$. Only zero is inside, and it is a double pole. Put $g(z)=e^z/(z-3)$. Then

$$
\operatorname{Res}(f,0)=g'(0)
=\left[\frac{e^z}{z-3}-\frac{e^z}{(z-3)^2}\right]_{z=0}
=-\frac13-\frac19=-\frac49.
$$

The integral is $-8\pi i/9$. The pole at $3$ must not be included merely because it appears in the same formula. A larger contour of radius $4$ would enclose it and give a different answer.

## Practice

1. Classify zero for $1/z^3+2/z$ and find its residue and counterclockwise unit-circle integral.
2. Find the residue of $1/(z^2+4)$ at $2i$ and at $-2i$.

### Worked answers

1. Zero is a pole of order three because the highest negative power is $z^{-3}$. The residue is $2$, so the integral is $4\pi i$. Pole order and residue are different data.
2. Factor $(z-2i)(z+2i)$. At $2i$ the remaining factor is $4i$, so the residue is $1/(4i)$. At $-2i$ it is $-4i$, so the residue is $-1/(4i)$. A circle enclosing both poles has zero integral.
