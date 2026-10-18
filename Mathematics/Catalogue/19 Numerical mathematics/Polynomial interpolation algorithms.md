---
title: "Polynomial interpolation algorithms"
catalogue_ids:
  - "19.6"
  - "19.6.1"
  - "19.6.1.1"
  - "19.6.1.2"
  - "19.6.1.3"
---

> [!TLDR]
> Interpolation constructs a polynomial through samples; Lagrange, Newton, and Neville organize the same polynomial in different ways.

## What interpolation requires

Read [[Polynomials and identities]] and [[03.01 Function definitions]]. Suppose $n+1$ sample pairs $(x_i,y_i)$ have distinct real inputs. **Polynomial interpolation** finds a polynomial $p$ of degree at most $n$ with $p(x_i)=y_i$. This is an exact fit to the samples. **Approximation** is broader: a least-squares or minimax fit may deliberately miss some samples. [[Least-squares algorithms]] and [[Minimax approximation]] compare those goals.

The interpolant is unique. If two degree-at-most-$n$ polynomials fit, their difference has $n+1$ distinct zeros. A nonzero degree-at-most-$n$ polynomial cannot have that many zeros, so the difference must vanish. This is an algebraic statement; it does not promise that a computed formula is accurate in floating-point arithmetic or that the data describe a function accurately between nodes.

## Lagrange's formula

Build a basis function for each sample:

$$
\ell_i(x)=\prod_{j\ne i}\frac{x-x_j}{x_i-x_j},\qquad
p(x)=\sum_{i=0}^n y_i\ell_i(x).
$$

Every denominator is nonzero because inputs are distinct. At $x_k$, all terms except $i=k$ vanish and $\ell_k(x_k)=1$. This proves that the formula interpolates. Direct evaluation is clear for small examples; for many nodes a barycentric implementation is more efficient and often numerically preferable. It must return $y_i$ directly when the query equals a node, rather than divide by zero.

Use data $(0,1),(1,2),(2,5)$. The formula is

$$
p(x)=\frac{(x-1)(x-2)}2-2x(x-2)+\frac52x(x-1)=x^2+1.
$$

At $x=3/2$, the three contributions are $-1/8$, $3/2$, and $15/8$, which add to $13/4$.

## Newton's divided differences

Define $f[x_i]=y_i$ and recursively

$$
f[x_i,\ldots,x_{i+k}]=\frac{f[x_{i+1},\ldots,x_{i+k}]-f[x_i,\ldots,x_{i+k-1}]}{x_{i+k}-x_i}.
$$

These are **divided differences**, not derivative values. The Newton form is

$$
p(x)=f[x_0]+f[x_0,x_1](x-x_0)+\cdots+f[x_0,\ldots,x_n]\prod_{j=0}^{n-1}(x-x_j).
$$

For our data, the first divided differences are $1$ and $3$, and the second is $(3-1)/(2-0)=1$. Hence $p(x)=1+x+x(x-1)=x^2+1$. The new highest-degree term vanishes at all old nodes, which explains why an added sample only needs one new coefficient. Evaluate in nested form to avoid computing every product separately. Distinct-node order does not change the exact polynomial but can affect intermediate rounding.

## Aitken–Neville evaluation

If only a value at a particular $x$ is required, Neville's recurrence avoids constructing monomial coefficients. Let $P_{i,i}(x)=y_i$ and

$$
P_{i,j}(x)=\frac{(x_j-x)P_{i,j-1}(x)+(x-x_i)P_{i+1,j}(x)}{x_j-x_i}.
$$

The output $P_{0,n}(x)$ is the same interpolant. Each step combines two overlapping lower-degree interpolants and keeps their common data. This is often called Aitken–Neville interpolation; Aitken's tabular arrangement and Neville's recurrence are closely related evaluation procedures.

At $x=1.5$, the line through the first two samples gives $P_{0,1}=2.5$, and the line through the last two gives $P_{1,2}=3.5$. The next step gives $[(2-1.5)(2.5)+(1.5-0)(3.5)]/2=3.25$. Intermediate values can lie far from the final one; the recurrence is a computation, not an error estimate.

## Error and node choice

If the samples are exact values of $f$ and $f\in C^{n+1}$ on an interval containing the nodes and query, then

$$
f(x)-p(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}\prod_{i=0}^n(x-x_i)
$$

for some point $\xi$ in that interval. The product explains the influence of placement. Raising the degree on equally spaced nodes can cause large oscillations near endpoints, called the Runge phenomenon. It is therefore false that more equally spaced samples always improve the interpolating polynomial everywhere. Chebyshev-type nodes cluster near endpoints and reduce the size of the product; piecewise low-degree splines give another route.

Data errors also matter. If each $y_i$ changes by $\delta y_i$, then $\delta p(x)=\sum_i\delta y_i\ell_i(x)$, so $|\delta p(x)|\le\max_i|\delta y_i|\sum_i|\ell_i(x)|$. This is a direct conditioning bound. Extrapolation outside the node interval can make the basis factors large. The sample fit alone cannot justify an extrapolated prediction. [Trefethen's approximation course](https://people.maths.ox.ac.uk/trefethen/ATAP/) gives further work on interpolation and node choice.

## Practice

1. Interpolate $(0,2),(2,6)$ and evaluate at $1/2$.
2. Add $(3,10)$ to the worked quadratic data. What is the new Newton coefficient?

> [!example]- Worked answers
> 1. The slope is $(6-2)/(2-0)=2$, so $p(x)=2+2x$ and $p(1/2)=3$. This is both the Newton and Lagrange linear interpolant.
> 2. The existing polynomial gives $p(3)=3^2+1=10$, so it already fits. The new cubic coefficient is $(10-p(3))/[(3-0)(3-1)(3-2)]=0$. The degree need not rise when a node is added.
