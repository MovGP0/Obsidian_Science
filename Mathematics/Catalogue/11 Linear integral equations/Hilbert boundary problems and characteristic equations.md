---
title: "Hilbert boundary problems and characteristic equations"
catalogue_ids:
  - "11.5.2.4"
  - "11.5.2.5"
  - "11.5.2.6"
---

> [!TLDR]
> A scalar Hilbert boundary problem relates analytic functions on opposite sides of a curve; Cauchy jumps turn this relation into a singular integral equation.

## Hilbert boundary value problem

Read [[Cauchy integrals and boundary jumps]] first. It defines analytic functions, oriented contours, Hölder continuity, Cauchy integrals, and the boundary operator $S$. This lesson uses a smooth simple counterclockwise closed curve $\Gamma$. The plus region is inside and the minus region is outside. We require the outside function to tend to zero at infinity.

In this catalogue, the scalar **Hilbert boundary value problem**, also called a scalar **Riemann–Hilbert problem**, asks for functions $F^+$ and $F^-$ analytic on the two regions whose boundary values satisfy

$$
F^+(t)=G(t)F^-(t)+g(t),\qquad t\in\Gamma.
$$

Here $G$ and $g$ are known Hölder functions, $G$ never vanishes on the curve, and the unknown pair has continuous Hölder boundary values. “Boundary” is the curve where the two descriptions meet. The equation is prescribed only there. In another convention “Hilbert problem” means prescribing the real part of a single analytic function; the jump formulation above is the convention used here for Cauchy-kernel equations.

The normalization at infinity is essential. When $G=1$, adding a constant to both functions preserves their boundary difference. Requiring $F^-(\infty)=0$ removes this freedom. The additive problem $G=1$ has the solution $F=Cg$ on the two regions, since the Cauchy jump is $g$.

## Solution of the boundary problem

First suppose that $G$ has **index zero**. The index counts how many full counterclockwise turns $G(t)$ makes around zero while $t$ travels once around the contour. A nonvanishing index-zero function has a continuous logarithm along the curve. Choose such a logarithm and form

$$
H(z)=\frac1{2\pi i}\int_\Gamma\frac{\log G(t)}{t-z}\,dt,
\qquad X(z)=e^{H(z)}.
$$

The jump theorem gives $H^+-H^-=\log G$, so $X^+=GX^-$. Also $X$ never vanishes and $X^-(\infty)=1$. Divide the required equation by $X^+$:

$$
\frac{F^+}{X^+}-\frac{F^-}{X^-}=\frac{g}{X^+}.
$$

This is now an additive jump. Thus

$$
F(z)=X(z)\frac1{2\pi i}\int_\Gamma
\frac{g(t)}{X^+(t)(t-z)}\,dt
$$

solves the problem and has the required decay. The construction follows directly from the preceding jump identity. Uniqueness uses the fact that a globally analytic bounded function is constant: the difference of two candidates divided by $X$ has no jump and tends to zero at infinity. A proof of that global analytic theorem requires later complex analysis.

For nonzero index $\kappa$, choose coordinates with zero inside $\Gamma$ and set

$$
H(z)=C\!\left[\log(t^{-\kappa}G(t))\right](z),
\qquad
X^+(z)=e^{H(z)},\qquad X^-(z)=z^{-\kappa}e^{H(z)}.
$$

The boundary ratio is again $G$. The logarithm now exists because $t^{-\kappa}G$ has zero index. Let $Q=C[g/X^+]$. All decaying solutions for $\kappa>0$ have the form $F=X(Q+P)$, where $P$ is any polynomial of degree at most $\kappa-1$. There are $\kappa$ free coefficients. For $\kappa=0$, use $P=0$. For $\kappa=-m<0$, use $P=0$ and impose the $m$ compatibility conditions

$$
\int_\Gamma\frac{t^jg(t)}{X^+(t)}\,dt=0,
\qquad j=0,\ldots,m-1.
$$

To understand them, expand $1/(t-z)=-\sum_{j\geq0}t^j/z^{j+1}$ for large $z$. The conditions cancel the first $m$ terms of $Q$, allowing $X^-Q$, with $X^-\sim z^m$, to decay. This explains why negative index restricts the data and positive index permits free solutions. The scalar construction, regularity assumptions, and index signs were checked against [Cambridge's boundary-problem notes, section 3.2](https://www.damtp.cam.ac.uk/user/examples/D17L.pdf). The classification is specific to this normalization and these closed contours.

### Worked example: a constant jump factor

On the unit circle, solve $F^+=2F^-+t+t^{-1}$ with $F^-(\infty)=0$. Take $X^+=2$ and $X^-=1$. Then $X^+/X^-=2$, and the additive data for $F/X$ are $(t+t^{-1})/2$.

The Cauchy integral of $t$ is $z$ inside and zero outside. For $t^{-1}$ it is zero inside and $-z^{-1}$ outside. The last assertion follows by expanding the kernel outside: only its constant-in-$t$ term combines with $t^{-1}$ to give a nonzero circle integral. Therefore

$$
F^+(z)=z,\qquad F^-(z)=-\frac1{2z}.
$$

Check on $|t|=1$: $2F^-(t)+t+t^{-1}=-t^{-1}+t+t^{-1}=t$. The exterior answer decays. The coefficient $2$ affects only the negative-power part in this example.

## Solution of the characteristic integral equation

Consider the equation with no additional smooth-kernel term,

$$
a(t)\phi(t)+b(t)S\phi(t)=f(t),
\qquad
S\phi(t)=\frac1{\pi i}\operatorname{pv}\int_\Gamma
\frac{\phi(\tau)}{\tau-t}\,d\tau.
$$

This is the **characteristic equation** in Cauchy singular-integral theory. It is not the characteristic polynomial of a matrix. Assume $a,b,f$ are Hölder and $a+b$ and $a-b$ never vanish. Put $F=C\phi$. The jump identities give $\phi=F^+-F^-$ and $S\phi=F^++F^-$. Substitution yields

$$
(a+b)F^+-(a-b)F^-=f,
\qquad
G=\frac{a-b}{a+b},\qquad g=\frac{f}{a+b}.
$$

Solve that boundary problem by the preceding construction and recover $\phi=F^+-F^-$. Thus index zero gives a unique answer in this Hölder class; positive index gives free homogeneous solutions; negative index requires the stated moments. If either $a+b$ or $a-b$ vanishes, this regular factorization theorem does not apply. Open arcs have endpoint restrictions that are not covered by this closed-contour formula.

For constant $a,b$ with $a^2\ne b^2$, a direct check is simpler. Split $f=f_++f_-$ into its nonnegative and negative powers on the unit circle. Then $Sf_+=f_+$ and $Sf_-=-f_-$. Consequently $\phi=f_+/(a+b)+f_-/(a-b)$. With $a=2$, $b=1$, and $f=3t+2t^{-1}$, the answer is $\phi=t+2t^{-1}$. Indeed $S\phi=t-2t^{-1}$ and $2\phi+S\phi=3t+2t^{-1}$. This explicit check fixes both signs and the factor $\pi i$.

## Practice

1. Solve the unit-circle problem $F^+=3F^-+2t+6t^{-1}$ with exterior decay.
2. Solve $3\phi+S\phi=8+2t^{-1}$ on the unit circle. What happens to a pure negative-power datum when $a=b=1$?

## Worked answers

1. Choose $F^+(z)=2z$ and $F^-(z)=-2/z$. On the boundary, $3(-2/t)+2t+6/t=2t$. Both functions are analytic on their required regions and the outside one decays; the zero-index theorem gives uniqueness.
2. The constant belongs to the plus part, so $\phi=8/(3+1)+[2/(3-1)]t^{-1}=2+t^{-1}$. Then $S\phi=2-t^{-1}$, giving the required data. For $a=b=1$, the operator is $I+S$, which annihilates every negative-power mode. A nonzero pure negative-power right-hand side is incompatible, and a zero such datum leaves those modes undetermined.
