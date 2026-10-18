---
title: "Gaussian and Romberg quadrature"
catalogue_ids:
  - "19.3.3"
  - "19.3.3.1"
  - "19.3.3.2"
  - "19.3.4"
  - "19.3.4.1"
  - "19.3.4.2"
---

> [!TLDR]
> Gaussian rules choose efficient nodes, while Romberg integration cancels successive terms in the trapezoidal error.

## Two ways to improve quadrature

[[Quadrature from interpolation]] introduces nodes, weights, and degree of exactness. Gaussian rules improve node placement. Romberg integration instead reuses an equally spaced trapezoidal sequence and combines its values to cancel error terms. These approaches need different information and have different failure modes.

## Gaussian quadrature

Consider $\int_{-1}^1 f(x)\,dx$. With $n$ unconstrained nodes and suitable weights, Gauss–Legendre quadrature is exact for every polynomial of degree at most $2n-1$. Its nodes are the $n$ zeros of the Legendre polynomial $P_n$, orthogonal to lower-degree polynomials on this interval. Orthogonal means that their product has zero integral. This choice supplies more exactness than choosing arbitrary nodes in advance. More generally Gaussian rules use polynomials orthogonal for a specified positive weight.

Derive the two-node case without advanced theory. Symmetry suggests nodes $-c,c$ and equal weights $w$. Exactness for $1$ gives $2w=2$, so $w=1$. Exactness for $x^2$ gives $2c^2=2/3$, so $c=1/\sqrt3$. Odd powers cancel automatically. Hence

$$
\int_{-1}^1 f(x)\,dx\approx f(-1/\sqrt3)+f(1/\sqrt3).
$$

For $x^4$, the result is $2/9$ rather than the true $2/5$. Exact through degree $3$ does not mean exact through degree $4$. On $[a,b]$, substitute $x=(a+b)/2+(b-a)t/2$ and multiply the sum by $(b-a)/2$. Forgetting this factor produces the wrong interval length.

For positive weight $w(x)$, the Gaussian error has the form

$$
I-Q=\frac{f^{(2n)}(\xi)}{(2n)!}\int_a^b w(x)\pi_n(x)^2\,dx,
$$

where $\pi_n$ is the monic orthogonal polynomial and $f$ has a continuous derivative of order $2n$. It shows why high-order exactness is useful for smooth integrands. It gives no such guarantee across a singularity.

## Lobatto rules include the endpoints

Gauss–Lobatto rules on $[-1,1]$ require both endpoint nodes and use the remaining freedom for exactness. An $n$-node Legendre–Lobatto rule, $n\ge2$, is exact through degree $2n-3$. Its interior nodes are zeros of $P'_{n-1}$. Endpoints are useful when their values are already available or must be shared by neighbouring panels.

For $n=3$, symmetry gives nodes $-1,0,1$. Let endpoint weights be $w$ and middle weight be $v$. Exactness for $1$ and $x^2$ gives $2w+v=2$ and $2w=2/3$. Thus $w=1/3$, $v=4/3$: this is Simpson's rule on $[-1,1]$. Both the Gaussian and Lobatto formulas are covered in [NIST DLMF, Gaussian quadrature](https://dlmf.nist.gov/3.5#v).

## Extrapolation principle

Suppose an approximation has an expansion $A(h)=I+c h^p+O(h^{p+q})$ as $h\to0$, where $p,q>0$ are known. Then

$$
\frac{2^pA(h/2)-A(h)}{2^p-1}=I+O(h^{p+q}).
$$

Subtract the expansions to verify that the $c h^p$ terms cancel. This is **Richardson extrapolation**. The denominator depends on the leading error power. Applying it without that expansion can make a result worse.

## Romberg's algorithm and worked table

For a sufficiently smooth function, the composite trapezoidal rule has an expansion in even powers $h^2,h^4,\ldots$. Write $R_{k,0}=T_{2^k}$ and calculate

$$
R_{k,j}=R_{k,j-1}+\frac{R_{k,j-1}-R_{k-1,j-1}}{4^j-1},\qquad1\le j\le k.
$$

Each new trapezoidal row reuses old nodes and adds midpoints. For $x^4$ on $[0,1]$, the values are:

| $k$ | $R_{k,0}$ | $R_{k,1}$ | $R_{k,2}$ |
| --- | --- | --- | --- |
| $0$ | $1/2$ | — | — |
| $1$ | $9/32$ | $5/24$ | — |
| $2$ | $113/512$ | $77/384$ | $1/5$ |

For example, $R_{1,1}=(4\cdot9/32-1/2)/3=5/24$. The next extrapolation gives $R_{2,2}=(16\cdot77/384-5/24)/15=1/5$, the exact integral. The first extrapolation is composite Simpson; the second cancels its leading fourth-power error. This example uses a polynomial, so only finitely many error terms occur.

With enough derivatives, successive Romberg columns gain even orders. On a nonsmooth integrand such as $\sqrt x$ at zero, the standard even-power expansion fails and those order claims do not apply. At very fine grids rounding can dominate. Compare several refinements, not one impressive diagonal entry.

## Practice

1. Apply the two-node Gaussian rule to $x^2$ on $[0,2]$.
2. If $A(h)=I+3h^2+5h^4$, find the leading error of $(4A(h/2)-A(h))/3$.

> [!example]- Worked answers
> 1. The transformed nodes are $1\pm1/\sqrt3$, each with weight $1$. Their squares sum to $2+2/3=8/3$, equal to the exact integral.
> 2. $A(h/2)=I+3h^2/4+5h^4/16$. Four times this minus $A(h)$ cancels $h^2$ and leaves $3I-15h^4/4$. Divide by $3$: the error is $-5h^4/4$.
