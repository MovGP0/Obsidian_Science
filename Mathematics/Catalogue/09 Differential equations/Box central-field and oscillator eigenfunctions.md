---
title: "Box, central-field, and oscillator eigenfunctions"
catalogue_ids:
  - "9.2.4.5"
  - "9.2.4.6"
  - "9.2.4.7"
---

> [!TLDR]
> Boundary conditions, spherical symmetry, and a quadratic coefficient reduce three important Schrödinger eigenvalue problems to explicit ordinary equations.

## Scope and mathematical conventions

Read [[Schrödinger evolution and probability]], [[Boundary eigenvalue problems]], [[06.05 Euler’s formula]], and [[12.07 Multiple integrals]]. This lesson uses the dimensionless mathematical operator $H=-\Delta+V$. The eigenvalue $\varepsilon$ and variables are dimensionless, and no physical units or constants are defined. The usual particle models motivate the names; the task here is to solve their associated boundary eigenvalue equations.

The stationary equation is $H\phi=\varepsilon\phi$, with $\phi\ne0$. A normalized mode has $\int|\phi|^2=1$ over its domain. Its evolution is $\phi e^{-i\varepsilon t}$. Boundary conditions and square-integrability are part of the problem, not optional checks after finding a formal differential solution.

## A force-free rectangular box

Inside a one-dimensional box $(0,L)$ take $V=0$ and zero endpoint values. “Force-free” refers to the constant interior potential; the confining boundaries remain essential. The equation is $-X''=\varepsilon X$. Negative eigenvalues are excluded by integration by parts, and zero gives only the forbidden zero function. Positive eigenvalues give

$$
\varepsilon_n=\left(\frac{n\pi}{L}\right)^2,\qquad
X_n=\sqrt{\frac2L}\sin\frac{n\pi x}{L},\qquad n=1,2,\ldots.
$$

For a three-dimensional rectangular box $0<x_j<L_j$, use $\phi=X_1(x_1)X_2(x_2)X_3(x_3)$. Each one-variable factor supplies its own positive integer. The operator is a sum of second derivatives, so

$$
\varepsilon_{n_1n_2n_3}=\pi^2\left(
\frac{n_1^2}{L_1^2}+\frac{n_2^2}{L_2^2}+\frac{n_3^2}{L_3^2}\right).
$$

Normalize by multiplying the three factors $\sqrt{2/L_j}$. In the unit cube, $(n_1,n_2,n_3)=(1,1,1)$ gives $3\pi^2$. The triples $(2,1,1)$ and its permutations give three independent eigenfunctions with eigenvalue $6\pi^2$. This is **degeneracy**: different modes share an eigenvalue. It comes from symmetry and boundary shape, not from a failure to solve the equation.

## A symmetric central field

For $V=V(r)$ in three dimensions, $r=\sqrt{x_1^2+x_2^2+x_3^2}$, use spherical coordinates. The Laplacian separates into a radial part and an angular part:

$$
\Delta=\frac1{r^2}\frac{\partial}{\partial r}
\left(r^2\frac{\partial}{\partial r}\right)
+\frac1{r^2}\Delta_{S^2}.
$$

Here $\Delta_{S^2}$ differentiates only along the unit sphere. Its smooth single-valued eigenfunctions, the **spherical harmonics** $Y_{\ell m}$, satisfy $-\Delta_{S^2}Y_{\ell m}=\ell(\ell+1)Y_{\ell m}$, where $\ell=0,1,\ldots$ and $m=-\ell,\ldots,\ell$. The angular spectral theorem is stated here without its full proof. For the simplest case, $Y_{00}=1/\sqrt{4\pi}$ is constant and has angular eigenvalue zero.

Put $\phi=R(r)Y_{\ell m}$. After division and substitution, the radial equation is

$$
-R''-\frac2rR'+\left[V(r)+\frac{\ell(\ell+1)}{r^2}\right]R
=\varepsilon R.
$$

The substitution $v=rR$ cancels the first derivative and gives

$$
-v''+\left[V(r)+\frac{\ell(\ell+1)}{r^2}\right]v
=\varepsilon v,\qquad r>0.
$$

With normalized $Y_{\ell m}$, the squared radial norm is $\int_0^\infty|R|^2r^2dr=\int_0^\infty|v|^2dr$. For a regular bounded original amplitude at the origin, require $v(0)=0$. Singular central potentials can need a more careful operator-domain condition; square-integrability alone is not always sufficient. The coefficient depends on $\ell$ but not $m$, so central symmetry gives at least the $2\ell+1$ angular multiplicity for each allowed radial mode. It does not determine a universal radial eigenvalue formula for every $V$.

## Worked central example

For $V(r)=-2/r$ and $\ell=0$, try $R=e^{-r}$. Then $R'=-e^{-r}$ and $R''=e^{-r}$. The radial expression is $-e^{-r}+2e^{-r}/r-2e^{-r}/r=-e^{-r}$, so $\varepsilon=-1$.

The full normalized amplitude is $\phi=e^{-r}/\sqrt\pi$. Indeed, spherical integration gives

$$
\int_{\mathbb R^3}|\phi|^2d^3x
=4\int_0^\infty r^2e^{-2r}dr=4\left(\frac14\right)=1.
$$

Two integrations by parts give the integral $1/4$. This verifies an eigenfunction for one specific singular coefficient. It does not assert that all central-field functions are exponentials.

## The linear harmonic oscillator

On the real line take $H=-d^2/dx^2+x^2$. The adjective “linear” describes its dependence on the unknown function, although $V=x^2$ is quadratic in the independent variable. Seek square-integrable solutions of $-\phi''+x^2\phi=\varepsilon\phi$.

The Gaussian $\phi_0=\pi^{-1/4}e^{-x^2/2}$ works because $\phi_0''=(x^2-1)\phi_0$, giving $\varepsilon_0=1$. Its normalization uses $\int_{-\infty}^{\infty}e^{-x^2}dx=\sqrt\pi$. The familiar Gaussian integral can be derived by squaring it and using polar coordinates.

Set $\phi=e^{-x^2/2}P(x)$. Direct product differentiation gives

$$
P''-2xP'+(\varepsilon-1)P=0.
$$

A polynomial of degree $n$ needs its highest-degree coefficient to satisfy $\varepsilon-1=2n$. The resulting polynomials are the physicists' Hermite polynomials: $H_0=1$, $H_1=2x$, $H_2=4x^2-2$. The normalized modes are

$$
\phi_n=\frac{H_n(x)e^{-x^2/2}}{\pi^{1/4}\sqrt{2^n n!}},
\qquad\varepsilon_n=2n+1,\qquad n=0,1,\ldots.
$$

Polynomial construction proves these are eigenfunctions. To justify that it exhausts the square-integrable spectrum, use the operator-domain spectral theorem or the lowering-operator argument: $A=d/dx+x$ gives $H=A^*A+1$ and lowers an eigenvalue by $2$ when $A\phi\ne0$. The norm identity $\|A\phi\|^2=(\varepsilon-1)\|\phi\|^2$ gives a lower bound of $1$, so repeated lowering must terminate in the Gaussian ground mode. This argument assumes the eigenfunctions lie in the domains of the required products; a full domain proof is beyond this lesson.

## Practice

1. Find the first two eigenvalues and normalized modes in a box $(0,2)$.
2. Check directly that $x e^{-x^2/2}$ is an oscillator eigenfunction and find its eigenvalue.

## Worked answers

1. The eigenvalues are $\pi^2/4$ and $\pi^2$. The normalization factor is $\sqrt{2/2}=1$, so the modes are $\sin(\pi x/2)$ and $\sin\pi x$. Their squared integrals over length $2$ are both $1$.
2. If $f=xe^{-x^2/2}$, then $f'=(1-x^2)e^{-x^2/2}$ and $f''=(x^3-3x)e^{-x^2/2}$. Thus $-f''+x^2f=3f$, giving $\varepsilon=3$. Multiplication by a normalization constant leaves the eigenvalue unchanged.

## Further reading

David Tong’s [central-potential notes](https://www.damtp.cam.ac.uk/user/tong/qm/qmhtml/S4.html) give the physical radial separation. The [NIST DLMF oscillator formulas](https://dlmf.nist.gov/18.39) specify the Hermite normalization and its physical-unit counterpart.
