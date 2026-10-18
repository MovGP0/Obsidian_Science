---
title: "Higher differentials and local approximation"
catalogue_ids:
  - "6.2.2"
  - "6.2.2.2"
  - "6.2.2.3"
---

> [!TLDR]
> Second partial derivatives form a quadratic correction to the total differential and describe the first change in local slope.

## From a tangent plane to a quadratic model

Read [[Partial changes and total differentials]] and [[Taylor polynomials with error control]] first. A linear approximation uses the first partial derivatives at a point. A quadratic approximation also uses their changes. For two inputs, changes can occur in the same coordinate twice or in two different coordinates. This introduces mixed partial derivatives.

The notation $C^2$ means that all partial derivatives through order two exist and are continuous on the region. This hypothesis is strong enough for the interchange and approximation rules below. It should not be replaced by existence of a few partial derivatives at just one point.

## Higher partial derivatives and differentials

We use $f_{xy}=\partial_y(\partial_x f)$: first differentiate with respect to $x$, then with respect to $y$. The quantities $f_{xx},f_{yy},f_{xy},f_{yx}$ are second-order partial derivatives. If the mixed second partials are continuous in a neighborhood, then $f_{xy}=f_{yx}$ there. Without suitable regularity, the two orders can differ.

Arrange the second partials into the **Hessian matrix**

$$
H_f=\begin{pmatrix}f_{xx}&f_{xy}\\f_{yx}&f_{yy}\end{pmatrix}.
$$

A matrix here is a rectangular array that packages coefficients of a rule. When $f$ is $C^2$, the off-diagonal entries agree. For a displacement vector $\mathbf h=(h,k)^{\mathsf T}$, multiplying the row, matrix, and column gives

$$
\mathbf h^{\mathsf T}H_f\mathbf h=f_{xx}h^2+2f_{xy}hk+f_{yy}k^2.
$$

This is the second differential $\mathrm d^2f$ when $h=\mathrm dx$ and $k=\mathrm dy$ are fixed independent coordinate increments. It is quadratic rather than linear.

For order three with continuous third partials,

$$
\mathrm d^3f=f_{xxx}h^3+3f_{xxy}h^2k+3f_{xyy}hk^2+f_{yyy}k^3.
$$

The binomial coefficients count equivalent differentiation orders. In $n$ variables, the second differential is $\sum_{i,j}f_{x_ix_j}h_i h_j$. This sum includes both $(i,j)$ and $(j,i)$; that is why the mixed term has a factor $2$ in two variables.

## Multivariable Taylor theorem

If $f$ is $C^2$ near a point $\mathbf a$, then

$$
f(\mathbf a+\mathbf h)=f(\mathbf a)+Df(\mathbf a)\mathbf h
+\frac12\mathbf h^{\mathsf T}H_f(\mathbf a)\mathbf h
+o(\|\mathbf h\|^2).
$$

Here $\|\mathbf h\|=\sqrt{h_1^2+\cdots+h_n^2}$ is the Euclidean length. The symbol $o(\|\mathbf h\|^2)$ means an error whose ratio to the squared input length tends to zero. The coefficient $1/2$ belongs to the Taylor polynomial, not to the second differential itself.

An accessible derivation restricts the function to one segment. Set $q(t)=f(\mathbf a+t\mathbf h)$ for $0\le t\le1$. The chain rule gives $q'(0)=Df(\mathbf a)\mathbf h$ and $q''(0)=\mathbf h^{\mathsf T}H_f(\mathbf a)\mathbf h$. Ordinary Taylor approximation for $q(1)$ gives the displayed terms. Continuity of the Hessian controls the remainder as the displacement tends to zero. [MIT's calculus with theory notes, chapter C](https://ocw.mit.edu/courses/18-024-multivariable-calculus-with-theory-spring-2011/cdf8e8d3cd13b6b8035d4bd7812bcd97_MIT18_024s11_ChCnotes.pdf) give the multivariable theorem and its use in the second derivative test.

If $f$ is $C^{m+1}$ on a neighborhood of the whole segment, the same reduction gives

$$
f(\mathbf a+\mathbf h)=\sum_{j=0}^{m}\frac{1}{j!}
\left(\sum_i h_i\partial_{x_i}\right)^j f(\mathbf a)
+\frac{q^{(m+1)}(\theta)}{(m+1)!},\quad 0<\theta<1.
$$

The differential operator in brackets means repeated directional differentiation with the displacement held constant. In the remainder, $q^{(m+1)}$ is evaluated along the segment and already includes the displacement factors. Bounding it gives a numerical error estimate. This is a finite formula; it does not require an infinite Taylor series.

## Worked example: retain mixed terms

Let $f(x,y)=x^2y$ at $(1,2)$. First, $f=2$, $f_x=4$, and $f_y=1$. The second derivatives there are $f_{xx}=4$, $f_{xy}=2$, and $f_{yy}=0$. Hence

$$
P_2(h,k)=2+4h+k+\frac12(4h^2+4hk)
=2+4h+k+2h^2+2hk.
$$

Direct expansion gives $f(1+h,2+k)=P_2(h,k)+h^2k$. The remainder is cubic. For $(h,k)=(0.1,-0.05)$, the quadratic estimate is $2.36$ and the exact value is $2.3595$. The difference $-0.0005$ agrees with $h^2k$. Omitting the mixed term would miss $-0.01$, much larger than the actual remainder.

## Coordinate caution

These higher differentials use independent Cartesian increments. Along a nonlinear curve $\mathbf x(t)$, the second derivative of $f(\mathbf x(t))$ also includes $Df\,\mathbf x''(t)$. It is not only the Hessian term. Read [[Composite functions and coordinate changes]] for the full rule. A coordinate change can alter second differential expressions even though the composed function describes the same values.

## Practice

1. Find $\mathrm d^2f$ and the quadratic Taylor polynomial at zero for $f(x,y)=e^{x+y}$.
2. At $(1,1)$, find the Hessian and second differential for $g(x,y)=x^3+xy^2$.

## Worked answers

1. All three distinct second partials equal $e^{x+y}$. At zero, $\mathrm d^2f=h^2+2hk+k^2=(h+k)^2$. The Taylor polynomial is $1+h+k+(h+k)^2/2$. The factor $1/2$ appears only when the differential enters Taylor's formula.
2. The second partials are $g_{xx}=6x$, $g_{xy}=2y$, and $g_{yy}=2x$. The Hessian is $\begin{pmatrix}6&2\\2&2\end{pmatrix}$ and $\mathrm d^2g=6h^2+4hk+2k^2$. The quadratic term in the Taylor polynomial is $3h^2+2hk+k^2$.
