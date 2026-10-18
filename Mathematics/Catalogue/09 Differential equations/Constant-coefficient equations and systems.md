---
title: "Constant-coefficient equations and systems"
catalogue_ids:
  - "9.1.2.4"
  - "9.1.2.5"
---

> [!TLDR]
> Characteristic roots solve scalar constant-coefficient equations, while matrix eigenvectors and matrix exponentials solve their systems.

## Exponentials turn derivatives into multiplication

Read [[Linear equations and order reduction]], [[06.05 Euler’s formula]], and [[10.07 Eigenvalues and eigenvectors]]. For a scalar linear homogeneous equation with constant coefficients, try $y=e^{rx}$. Since $y^{(k)}=r^ke^{rx}$ and the exponential never vanishes, the ODE becomes an algebraic **characteristic equation**.

For $y''-3y'+2y=0$, it is $r^2-3r+2=(r-1)(r-2)=0$. The roots give independent solutions $e^x,e^{2x}$, so $y=Ae^x+Be^{2x}$. For $y(0)=0$, $y'(0)=1$, the equations $A+B=0$ and $A+2B=1$ give $A=-1$, $B=1$. Substitution checks $y=e^{2x}-e^x$ and both data.

## Repeated and complex roots

A root $r$ of multiplicity $m$ contributes $e^{rx},xe^{rx},\ldots,x^{m-1}e^{rx}$. To see why a repeated factor needs a polynomial, write the derivative operator as $D=d/dx$. For $y=e^{rx}v$, $(D-r)y=e^{rx}v'$. Thus $(D-r)^my=0$ is equivalent to $v^{(m)}=0$, whose solutions are polynomials of degree at most $m-1$.

For real coefficients, complex roots appear in conjugate pairs. Roots $\alpha\pm i\beta$, with $\beta>0$, give the real pair $e^{\alpha x}\cos\beta x$ and $e^{\alpha x}\sin\beta x$. Repeated pairs receive the same powers of $x$. For $y''+2y'+5y=0$, the roots are $-1\pm2i$, giving $e^{-x}(A\cos2x+B\sin2x)$. The imaginary part controls oscillation; the real part controls exponential growth or decay.

## Inhomogeneous terms and resonance

For a polynomial, exponential, or finite sine-cosine forcing, undetermined coefficients often gives a finite trial. If the natural trial is already a homogeneous solution, multiply by enough powers of $x$ to leave the homogeneous space. This is **resonance** in the algebraic solution method.

For $y''-3y'+2y=e^x$, the trial $Ke^x$ fails because the operator sends it to zero. Try $y_p=Kxe^x$. Direct derivatives are $y_p'=K(x+1)e^x$ and $y_p''=K(x+2)e^x$. Combining gives $-Ke^x$, so $K=-1$. The complete answer is

$$
y=Ae^x+Be^{2x}-xe^x.
$$

For forcing $\sin x$ in $y''+y=\sin x$, the resonant particular solution is $-x\cos x/2$. Differentiate twice to verify this before using it. Undetermined coefficients does not apply as a finite trial to arbitrary forcing such as $\log x$; variation of parameters remains available.

## Vector systems and eigenvectors

Let $\mathbf z(x)$ be a column of $m$ unknown functions and $A$ a constant $m\times m$ matrix. The system is $\mathbf z'=A\mathbf z$. If $A\mathbf v=\lambda\mathbf v$, then $\mathbf z=e^{\lambda x}\mathbf v$ solves it. When $A$ has $m$ independent eigenvectors, combine these solutions and use the initial vector to determine the coefficients.

Consider

$$
\begin{pmatrix}u'\\v'\end{pmatrix}
=\begin{pmatrix}2&1\\1&2\end{pmatrix}
\begin{pmatrix}u\\v\end{pmatrix},\qquad
u(0)=1,\quad v(0)=0.
$$

The vectors $(1,1)^T$ and $(1,-1)^T$ have eigenvalues $3$ and $1$. Express the initial vector as half their sum. Therefore $u=(e^{3x}+e^x)/2$ and $v=(e^{3x}-e^x)/2$. A direct alternative sets $s=u+v$ and $d=u-v$: then $s'=3s$, $d'=d$, with $s(0)=d(0)=1$. This derives the same result with scalar equations.

## A repeated eigenvalue need not give enough eigenvectors

For $A=\begin{pmatrix}1&1\\0&1\end{pmatrix}$, both eigenvalues equal $1$, but eigenvectors span only one line. The equations are $v'=v$, $u'=u+v$. Solve the first to get $v=Be^x$, then use an integrating factor in the second to get $u=e^x(C+Bx)$. The polynomial factor is the system counterpart of repeated characteristic roots. Counting eigenvalues with multiplicity is not the same as finding an eigenvector basis.

The **matrix exponential** handles every constant matrix:

$$
e^{Ax}=I+Ax+\frac{A^2x^2}{2!}+\cdots,\qquad
\mathbf z(x)=e^{A(x-x_0)}\mathbf z_0.
$$

The series converges for each finite matrix and real $x$. Termwise differentiation gives $(e^{Ax})'=Ae^{Ax}$, and $e^{A0}=I$ gives the data. For a continuous forcing $\mathbf b(x)$,

$$
\mathbf z(x)=e^{A(x-x_0)}\mathbf z_0+
\int_{x_0}^{x}e^{A(x-s)}\mathbf b(s)\,ds.
$$

Differentiate with the product rule for integrals to check the equation. If the matrix itself varies with $x$, replacing $Ax$ by $\int A(x)dx$ is generally invalid because matrices at different inputs need not commute.

## A real system with complex eigenvalues

The equations $u'=-v$, $v'=u$ have matrix $A=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ and eigenvalues $\pm i$. Real outputs still exist: differentiating the first equation gives $u''=-v'=-u$. Thus $u=a\cos x+b\sin x$, and $v=-u'=a\sin x-b\cos x$. Data $u(0)=1$, $v(0)=0$ select $u=\cos x$, $v=\sin x$. The identity $u^2+v^2=1$ remains constant, as differentiation gives $2u(-v)+2vu=0$.

This example explains why complex eigenvalues of a real matrix do not require complex-valued final data. A conjugate pair describes a real two-dimensional oscillating subspace. A positive real part would add a common growth factor, while a negative real part would add decay. Real and imaginary parts of the same complex eigenvector solution give the required two real solutions.

## Practice

1. Solve $y''-4y'+4y=0$ with $y(0)=1$, $y'(0)=0$.
2. Solve $u'=-u$, $v'=u-v$ with $u(0)=2$, $v(0)=1$.

## Worked answers

1. The repeated root is $2$, so $y=(A+Bx)e^{2x}$. The first datum gives $A=1$. The derivative at zero is $B+2A=0$, so $B=-2$. Thus $y=(1-2x)e^{2x}$.
2. The first equation gives $u=2e^{-x}$. Multiplying the second equation, $v'+v=2e^{-x}$, by $e^x$ gives $(e^xv)'=2$. Thus $v=(1+2x)e^{-x}$. Direct differentiation gives $v'=e^{-x}(1-2x)=u-v$.
