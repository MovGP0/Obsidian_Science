---
title: "Bessel functions and Legendre polynomial tables"
catalogue_ids:
  - "21.11"
  - "21.12"
---

> [!TLDR]
> Bessel functions and Legendre polynomials are defined by specific differential equations and normalizations; their recurrences make tables useful and checkable.

## Why these functions appear in tables

A differential equation specifies a relation between a function and its derivatives. Different equations need different function families. Here $y'$ is the derivative and $y''$ is its derivative. Review [[07.03 The derivative]], [[07.06 Higher derivatives]], and [[09.05 Power series]]. The discussion uses dimensionless mathematical variables. The labels cylinder and spherical functions describe historical geometric applications, not an assumption that the reader has studied physics.

## Bessel functions of the first and second kind

Bessel's equation of order $\nu$ is

$$
x^2y''+xy'+(x^2-\nu^2)y=0.
$$

For a nonnegative integer $n$, the first-kind solution is fixed by the convergent series

$$
J_n(x)=\sum_{m=0}^{\infty}\frac{(-1)^m(x/2)^{2m+n}}{m!(m+n)!}.
$$

The order $n$ labels a member of the family; $x$ is its input. In particular, $J_0(0)=1$ and $J_n(0)=0$ for $n>0$. The second-kind solution $Y_n$ is linearly independent and is singular at zero. For noninteger $\nu$, a standard normalization is $Y_\nu=(J_\nu\cos\pi\nu-J_{-\nu})/\sin\pi\nu$; integer orders are obtained by a limit. These definitions can be checked in [NIST DLMF §10.2](https://dlmf.nist.gov/10.2).

| Input $x$ | $J_0(x)$ | $J_1(x)$ |
| --- | --- | --- |
| 0 | 1.000000 | 0.000000 |
| 0.5 | 0.938470 | 0.242268 |
| 1 | 0.765198 | 0.440051 |
| 2 | 0.223891 | 0.576725 |
| 3 | −0.260052 | 0.339059 |

Entries are rounded to six places. The sign change in $J_0$ indicates a zero between 2 and 3. It does not locate that zero accurately by itself. Values near zeros require care: a small absolute error can be a large relative error.

The recurrence is $J_{n+1}(x)=2nJ_n(x)/x-J_{n-1}(x)$ for $x\ne0$, and $J_0'(x)=-J_1(x)$. [DLMF recurrence relations](https://dlmf.nist.gov/10.6) At zero, use limits or the defining series instead of dividing by zero. Recurrence direction affects numerical stability; a correct algebraic identity is not automatically a stable algorithm for high order.

### Worked example: construct J₀(1)

For $n=0$ and $x=1$, the first four terms are

$$
J_0(1)\approx1-\frac14+\frac1{64}-\frac1{2304}
=0.7651909722.
$$

The next term is $1/147456\approx0.000006782$. Terms decrease in magnitude, so the alternating-series error is no greater than that next term. Adding it gives 0.765197754, close to the six-place table entry. This check uses the definition rather than another copied decimal.

## Legendre polynomials of the first kind

Legendre's equation for integer degree $n\ge0$ is

$$
(1-x^2)y''-2xy'+n(n+1)y=0.
$$

The polynomial solution is normalized by $P_n(1)=1$. The word **degree** refers to its highest power of $x$. Define it explicitly by Rodrigues' formula,

$$
P_n(x)=\frac1{2^nn!}\frac{d^n}{dx^n}(x^2-1)^n.
$$

| Degree $n$ | $P_n(x)$ |
| --- | --- |
| 0 | $1$ |
| 1 | $x$ |
| 2 | $(3x^2-1)/2$ |
| 3 | $(5x^3-3x)/2$ |
| 4 | $(35x^4-30x^2+3)/8$ |

These are ordinary Legendre polynomials. Associated Legendre functions and full spherical harmonics require an additional order and an angular variable; the source label spherical functions does not make them identical to this one-variable polynomial family. The polynomial normalization follows [NIST DLMF §14.7](https://dlmf.nist.gov/14.7).

The recurrence

$$
(n+1)P_{n+1}(x)=(2n+1)xP_n(x)-nP_{n-1}(x)
$$

starts with $P_0=1$, $P_1=x$. At $n=1$, it yields $2P_2=3x^2-1$. At $n=2$, it yields $3P_3=5x(3x^2-1)/2-2x=(15x^3-9x)/2$. These reproduce two table rows. [DLMF §14.10](https://dlmf.nist.gov/14.10)

## Use orthogonality to read coefficients

On $[-1,1]$, the polynomials satisfy

$$
\int_{-1}^1P_m(x)P_n(x)dx=\frac{2}{2n+1}\delta_{mn}.
$$

Here $\delta_{mn}$ is 1 when the indices match and 0 otherwise. This is an orthogonality statement under an integral, not a claim that polynomial values multiply to zero at every point. It is the polynomial analogue of Fourier orthogonality. [DLMF §14.17(iii)](https://dlmf.nist.gov/14.17#iii)

For example, rearrange $P_2=(3x^2-1)/2$ to get $x^2=P_0/3+2P_2/3$. Thus a quadratic has an exact two-term Legendre expansion. Its integral over $[-1,1]$ is $2/3$, because $\int P_0=2$ and $\int P_2=0$. Direct integration of $x^2$ confirms it. Unlike a general infinite expansion, this finite identity needs no convergence theorem.

## Practice

1. Use the Bessel series to show $J_1(x)=x/2-x^3/16+O(x^5)$ near zero. Explain why $J_1(0)=0$.
2. Find $P_3(0)$ and $P_4(0)$, and expand $3x^2+2$ in $P_0,P_2$.

> [!example]- Worked answers
> 1. The $m=0$ term is $(x/2)/1=x/2$. The $m=1$ term is $-(x/2)^3/(1!2!)=-x^3/16$. All remaining terms contain at least $x^5$, so the function tends to zero as $x\to0$.
> 2. The table gives $P_3(0)=0$ and $P_4(0)=3/8$. Since $3x^2=1+2P_2$, the expansion is $3P_0+2P_2$.
