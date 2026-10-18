---
title: "Bicubic spline algorithms"
catalogue_ids:
  - "19.7.2"
  - "19.7.2.1"
  - "19.7.2.2"
  - "19.7.2.3"
---

> [!TLDR]
> Bicubic splines combine cubic pieces in two directions to interpolate or fit values on a rectangular domain.

## From curves to a scalar surface

[[Cubic spline algorithms]] treats a scalar value depending on one input. Now consider $z=f(x,y)$ on a rectangle. A rectangular table of sampled values is useful for contour maps, geometric height fields, and function tables. The surface model lets us estimate values and partial derivatives between the grid points. These are mathematical examples; no physical quantity is assumed.

A **bicubic polynomial** has degree at most $3$ separately in each variable:

$$
p(x,y)=\sum_{i=0}^3\sum_{j=0}^3 a_{ij}x^iy^j.
$$

There are $16$ coefficients. Its total degree can be $6$, as the term $x^3y^3$ shows. Thus bicubic does not mean “total degree at most three.” A bicubic spline joins such patches across a rectangular grid with specified derivative matching. The word “bicubic interpolation” is also used for other local image-resampling schemes; their continuity and boundary policies can differ.

## Tensor-product spline interpolation

Choose one-dimensional cubic interpolation basis functions $L_i(x)$ and $M_j(y)$ for the two grids, with the chosen boundary conditions already built in. They satisfy $L_i(x_k)=\delta_{ik}$ and $M_j(y_l)=\delta_{jl}$. Then

$$
S(x,y)=\sum_i\sum_j z_{ij}L_i(x)M_j(y)
$$

returns $z_{kl}$ at $(x_k,y_l)$. This is a **tensor product**: each term is a product of a function of $x$ and a function of $y$. To evaluate it, interpolate each column in $x$ at the requested $x$, then interpolate those resulting values in $y$. With linear fixed-basis interpolation operators and consistent endpoint policies, reversing this order gives the same exact result because the finite sums commute. Nonlinear shape-preserving algorithms do not have that automatic property.

On the two-by-two corner table for $f(x,y)=x+y$ on $[0,1]^2$, the values are $0,1,1,2$. Linear interpolation in each direction gives $S(x,y)=x+y$, a polynomial also within the bicubic family. The centre is $1$. A bicubic spline method with endpoint conditions consistent with a plane reproduces this plane. It needs no artificial bend just because its maximum allowed degree is higher.

## A local Hermite bicubic patch

Another construction specifies each corner value, $x$ derivative, $y$ derivative, and mixed derivative. Four data per corner give $16$ conditions. On a unit interval define

$$
H_0(t)=2t^3-3t^2+1,\quad H_1(t)=-2t^3+3t^2,
$$

$$
K_0(t)=t^3-2t^2+t,\quad K_1(t)=t^3-t^2.
$$

$H_a$ selects endpoint value $a$ with zero endpoint slopes; $K_a$ selects endpoint slope $a$ with zero endpoint values. On the unit square the patch is

$$
\begin{aligned}
S(x,y)=\sum_{a,b=0}^1\bigl[&z_{ab}H_a(x)H_b(y)
+z^x_{ab}K_a(x)H_b(y)\\
&+z^y_{ab}H_a(x)K_b(y)
+z^{xy}_{ab}K_a(x)K_b(y)\bigr].
\end{aligned}
$$

For a rectangle of widths $h_x,h_y$, use normalized coordinates and multiply derivative data by $h_x$, $h_y$, and $h_xh_y$ respectively. Omitting these factors changes the specified slopes. Adjacent Hermite patches need shared edge data to match appropriately; a local Hermite construction is not automatically a globally $C^2$ tensor-product cubic spline.

As a worked patch, take corner values of $f=xy$, derivative data $f_x=y$, $f_y=x$, and $f_{xy}=1$. The unique bicubic satisfying these conditions is $xy$ itself, so $S(1/2,1/2)=1/4$. Uniqueness follows from the independent one-dimensional Hermite basis in each direction. Supplying only the four corner values would leave $12$ conditions unspecified and would not determine a bicubic.

## Bicubic fitting

For noisy or scattered data choose fixed knot sequences and cubic B-spline bases $B_i(x),C_j(y)$. Fit

$$
S(x,y)=\sum_{i,j}c_{ij}B_i(x)C_j(y)
$$

by minimizing a weighted sum of squared sample residuals. Each design-matrix row contains products $B_i(x_k)C_j(y_k)$. Use QR or a rank-aware solver. A roughness penalty involving second derivatives can discourage unnecessary bends. The number of samples alone does not guarantee unique coefficients: their placement and the basis rank matter.

For a small complete example, restrict the fitting space to planes $a+bx+cy$, which are included in the bicubic family. Fit corner observations $0,1,1,3$ on the unit square. The normal equations give $a=-1/4$, $b=c=3/2$. Fitted corner values are $-1/4,5/4,5/4,11/4$, with residuals $-1/4,1/4,1/4,-1/4$. Their sum and coordinate-weighted sums vanish. This illustrates fitting rather than interpolating every supplied value.

## Limitations and practice

Boundary data, knot placement, and scaling affect the result. Overshoot is possible even when all sample values are positive. A smooth-looking surface does not certify errors at unsampled points. [SciPy's rectangular bivariate-spline reference](https://docs.scipy.org/doc/scipy/reference/generated/scipy.interpolate.RectBivariateSpline.html) distinguishes interpolation from smoothing and notes the importance of input scaling.

1. How many coefficients does a polynomial of degree at most $2$ separately in $x$ and $y$ have?
2. On a rectangle of widths $2$ and $3$, what normalized mixed-derivative datum corresponds to $f_{xy}=4$?

> [!example]- Worked answers
> 1. There are $3$ choices for the $x$ exponent and $3$ for the $y$ exponent, hence $9$ coefficients. The maximum total degree is $4$.
> 2. For normalized coordinates $u=(x-x_0)/2$ and $v=(y-y_0)/3$, the chain rule gives $f_{uv}=2\cdot3 f_{xy}=24$. This is the coefficient datum for $K_a(u)K_b(v)$.
