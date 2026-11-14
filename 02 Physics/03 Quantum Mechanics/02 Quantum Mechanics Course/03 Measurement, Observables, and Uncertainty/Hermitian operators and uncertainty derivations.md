---
title: "Hermitian operators and uncertainty derivations"
---

> [!TLDR]
> Use operator adjoints, orthogonal eigenvectors, and Cauchy–Schwarz to derive and apply the generalized uncertainty relation.

## Worked lecture material

Let $a(x)$ and $b(x)$ be square-integrable on the interval and set $c(x)=a(x)+b(x)$. Expanding the norm of the sum gives

$$
\int\lvert c(x)\rvert^2\,dx
=\int\lvert a(x)\rvert^2\,dx+\int\lvert b(x)\rvert^2\,dx
+2\operatorname{Re}\int a(x)^*b(x)\,dx.
$$

The square terms converge by assumption. The cross term converges by the Schwarz inequality,

$$
\left\lvert\int_a^b f(x)^*g(x)\,dx\right\rvert
\le\sqrt{\int_a^b\lvert f(x)\rvert^2\,dx\ \int_a^b\lvert g(x)\rvert^2\,dx}.
$$

Thus the sum is square-integrable. Multiplication by a scalar multiplies the squared norm by its squared modulus, so that norm remains finite. The normalized functions alone lack the zero vector.

For part (b), the conjugate symmetry check is

$$
\langle g\mid f\rangle
=\int_a^b g(x)^*f(x)\,dx
=\left(\int_a^b f(x)^*g(x)\,dx\right)^*
=\langle f\mid g\rangle^*.
$$

##### Hermitian operators

The notes characterize a Hermitian operator $\hat Q$ by $\langle f\mid\hat Q f\rangle=\langle\hat Q f\mid f\rangle$ for every $f$ in its domain. The inner-product relation also lets $\hat Q$ act on either member, $\langle f\mid\hat Qg\rangle=\langle\hat Q f\mid g\rangle$. Check this for the momentum operator.

For $\hat p=(\hbar/i)d/dx$, test whether $\langle f\mid\hat p g\rangle=\langle\hat p f\mid g\rangle$. Integrate by parts with $u=f^*$ and $dv=g'\,dx$.

$$
\begin{aligned}
\langle f\mid\hat p g\rangle
&=\frac{\hbar}{i}\int_{-\infty}^{+\infty}f^*g'\,dx\\
&=\frac{\hbar}{i}\left([f^*g]_{-\infty}^{+\infty}
-\int_{-\infty}^{+\infty}(f^*)'g\,dx\right)\\
&=\int_{-\infty}^{+\infty}
\left(\frac{\hbar}{i}f'\right)^*g\,dx
=\langle\hat p f\mid g\rangle.
\end{aligned}
$$

The last step assumes a domain for which the boundary term vanishes.

##### Determinate states

A determinate state for $\hat Q$ satisfies $\hat Q\Psi=q\Psi$. Here $\Psi$ is the eigenfunction and $q$ is the corresponding eigenvalue. The notes call the collection of eigenvalues the spectrum. An eigenvalue is degenerate if at least two linearly independent eigenfunctions share it.

**Example 3.1**

Is $\hat Q=i\,d/d\phi$ Hermitian? Find its eigenvalues and eigenfunctions.

Use functions on $0\le\phi\le2\pi$ with periodic boundary condition $f(\phi+2\pi)=f(\phi)$. The Hermiticity check is $\langle f\mid\hat Qf\rangle=\langle\hat Qf\mid f\rangle$.

$$
\begin{aligned}
\langle f\mid\hat Q f\rangle
&=i\int_0^{2\pi}f^*(\phi)f'(\phi)\,d\phi\\
&=i[f^*f]_0^{2\pi}-i\int_0^{2\pi}f(\phi)(f^*)'(\phi)\,d\phi\\
&=\int_0^{2\pi}\big(if'(\phi)\big)^*f(\phi)\,d\phi
=\langle\hat Q f\mid f\rangle.
\end{aligned}
$$

The endpoints cancel because the function is periodic. Thus $\hat Q$ is Hermitian on the periodic domain.

For an eigenfunction,

$$
\hat Q f=qf,
\qquad
if'(\phi)=qf(\phi),
\qquad
f(\phi)=Ae^{-iq\phi}.
$$

Periodicity gives $e^{-2\pi iq}=1$, so $q=0,\pm1,\pm2,\ldots$.

##### Properties of Hermitian operators

##### Theorem 1

The eigenvalues of a Hermitian operator are real. If $\hat Qf=qf$ with $f\ne0$, Hermiticity gives

$$
\langle\hat Qf\mid f\rangle=\langle f\mid\hat Qf\rangle,
\qquad
q^*\langle f\mid f\rangle=q\langle f\mid f\rangle.
$$

The norm is positive, hence $q^*=q$ and $q$ is real.

##### Theorem 2

Eigenfunctions belonging to distinct eigenvalues are orthogonal. Let $\hat Qf=qf$ and $\hat Qg=q'g$. Then

$$
\langle\hat Qf\mid g\rangle=\langle f\mid\hat Qg\rangle,
\qquad
q^*\langle f\mid g\rangle=q'\langle f\mid g\rangle.
$$

Since $q^*=q$ and $q\ne q'$, $\langle f\mid g\rangle=0$.

**Problem 3.12**

1. Suppose $f$ and $g$ are eigenfunctions of $\hat Q$ with the same eigenvalue $q$. Show that every nonzero linear combination is an eigenfunction with eigenvalue $q$.
2. Check that $f(x)=e^x$ and $g(x)=e^{-x}$ are eigenfunctions of $d^2/dx^2$ with the same eigenvalue. Construct two orthogonal eigenfunctions on $(-1,1)$ as linear combinations of $f$ and $g$.

For part (a), linearity gives

$$
\hat Q(af+bg)=a\hat Q f+b\hat Qg=aqf+bqg=q(af+bg).
$$

For part (b), differentiating twice gives $(e^x)''=e^x$ and $(e^{-x})''=e^{-x}$. Both functions have eigenvalue $1$.

To build an orthogonal pair on $(-1,1)$, take $f=ae^x+be^{-x}$ and $g=ce^x+de^{-x}$ for real $a,b,c,d$. Expand the inner product.

$$
\langle f\mid g\rangle
=\int_{-1}^{1}(ac\,e^{2x}+ad+bc+bd\,e^{-2x})\,dx.
$$

The constant terms integrate to $2ad+2bc$, and the exponential integrals are equal.

$$
\int_{-1}^1e^{2x}\,dx
=\int_{-1}^1e^{-2x}\,dx
=\frac{e^2-e^{-2}}{2}.
$$

The handwritten choice $(a,b,c,d)=(2,1,2,4)$ yields $2e^x+e^{-x}$ and $2e^x+4e^{-x}$, whose inner product is positive. Setting $(a,b,c,d)=(1,1,1,-1)$ instead makes both $ac+bd$ and $ad+bc$ vanish. This gives the orthogonal pair $e^x+e^{-x}$ and $e^x-e^{-x}$.

##### Generalized statistical interpretation

A measurement of $Q(x,\mechanical{p})$ on a particle in state $\Psi(x,t)$ gives a spectral value of the Hermitian operator $\hat Q(x,-i\hbar\,d/dx)$. For a discrete nondegenerate eigenvalue $q_n$ with normalized eigenfunction $f_n$, the probability is $\lvert c_n\rvert^2$. Orthonormality gives the coefficient by Fourier's trick.

$$
c_n=\langle f_n\mid\Psi\rangle=\int f_n(x)^*\Psi(x,t)\,dx.
$$

The coefficient is the amplitude of the component $f_n$ in $\Psi$.

##### Proof of the generalized uncertainty principle

Let $q=\langle Q\rangle$. The variance is

$$
\sigma_Q^2
=\langle\Psi\mid(\hat Q-q)^2\Psi\rangle
=\langle(\hat Q-q)\Psi\mid(\hat Q-q)\Psi\rangle\ge0.
$$

The handwritten line ends in zero. Equality holds for a determinate state. For two observables let $f=(\hat A-\langle A\rangle)\Psi$ and $g=(\hat B-\langle B\rangle)\Psi$. Schwarz gives

$$
\sigma_A^2\sigma_B^2=\langle f\mid f\rangle\langle g\mid g\rangle
\ge\lvert\langle f\mid g\rangle\rvert^2.
$$

For a complex number $z$,

$$
\lvert z\rvert^2=(\operatorname{Re}z)^2+(\operatorname{Im}z)^2
\ge(\operatorname{Im}z)^2
=\left(\frac{z-z^*}{2i}\right)^2.
$$

Now take $z=\langle f\mid g\rangle$.

The preceding inequalities give

$$
\sigma_A^2\sigma_B^2\ge
\left[\frac{\langle f\mid g\rangle-\langle g\mid f\rangle}{2i}\right]^2.
$$

Hermiticity lets the centered operator on the bra move to the ket side. With $\Psi$ normalized,

$$
\begin{aligned}
\langle f\mid g\rangle
&=\langle(\hat A-\langle A\rangle)\Psi
\mid(\hat B-\langle B\rangle)\Psi\rangle\\
&=\langle\Psi\mid(\hat A-\langle A\rangle)(\hat B-\langle B\rangle)\Psi\rangle\\
&=\langle\hat A\hat B\rangle-\langle B\rangle\langle A\rangle
-\langle A\rangle\langle B\rangle+\langle A\rangle\langle B\rangle\\
&=\langle\hat A\hat B\rangle-\langle A\rangle\langle B\rangle.
\end{aligned}
$$

Interchanging $A$ and $B$ and subtracting leaves $\langle[\hat A,\hat B]\rangle$, where $[\hat A,\hat B]=\hat A\hat B-\hat B\hat A$.

$$
\sigma_A^2\sigma_B^2\ge
\left[\frac{\langle[\hat A,\hat B]\rangle}{2i}\right]^2.
$$

## Source

Kyle Kabasares, *Quantum Mechanics (Physics 137, UC Merced 2015)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\hbar$ | $\unit{J\,s}$ | Reduced Planck constant | Planck constant divided by $2\pi$. |
| $\Psi$ | $\unit{m^{-3/2}}$ in three dimensions | Position-space wavefunction | Probability amplitude for one particle. Its squared magnitude is a probability density. |
