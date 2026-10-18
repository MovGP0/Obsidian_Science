---
title: "Real integrals by contour methods"
catalogue_ids:
  - "14.4"
  - "14.4.1"
  - "14.4.2"
  - "14.4.3"
  - "14.4.3.1"
  - "14.4.3.2"
---

> [!TLDR]
> Close a real integration path with a suitable complex arc, calculate enclosed residues, and prove that the extra arc has the required limit.

## Set up the real integral

Read [[08.07 Improper integrals]], [[Cauchy theorems and integral formulas]], and [[Laurent series and residues]]. A contour calculation has four tasks: check convergence of the requested real integral, select a contour, calculate the closed integral, and control the added pieces. A beautiful residue calculation alone does not establish the value of a divergent improper integral.

For $\int_{-\infty}^{\infty}r(x)dx$, one common contour follows the real segment from $-R$ to $R$ and returns along the upper semicircle $z=Re^{i\theta}$, $0\le\theta\le\pi$. It is counterclockwise. If the rational function $r$ has no real poles and its denominator degree exceeds its numerator degree by at least two, the arc contribution tends to zero: its length is $\pi R$, while $|r(z)|\le C/R^2$ for all sufficiently large $R$. The same decay ensures absolute convergence on the real tails.

## Application of Cauchy's integral formulas

Consider

$$
I=\int_{-\infty}^{\infty}\frac{dx}{x^2+1}.
$$

The poles are $i$ and $-i$. The upper semicircle encloses only $i$. Write the integrand as $g(z)/(z-i)$ with $g(z)=1/(z+i)$. On and inside this upper contour, $g$ is holomorphic, so Cauchy's formula gives the closed integral $2\pi i\,g(i)=\pi$. On the arc,

$$
|z^2+1|\ge R^2-1,\qquad
\left|\int_{\mathrm{arc}}\frac{dz}{z^2+1}\right|
\le\frac{\pi R}{R^2-1}\longrightarrow0.
$$

Hence $I=\pi$. The elementary antiderivative $\arctan x$ provides an independent check. This first example uses Cauchy's formula directly; the residue theorem extends the same procedure to several or higher-order poles.

## Application of the residue theorem

For $I_4=\int_{-\infty}^{\infty}dx/(1+x^4)$, the four poles satisfy $z^4=-1$. The two upper poles are $a=e^{i\pi/4}$ and $b=e^{3i\pi/4}$. Since the derivative of $1+z^4$ is $4z^3$, each simple-pole residue is $1/(4z^3)$. At a root, $z^{-3}=-z$, so the sum is

$$
-\frac{a+b}4=-\frac{i\sqrt2}4.
$$

The closed integral is $2\pi i(-i\sqrt2/4)=\pi/\sqrt2$. The arc is bounded by $\pi R/(R^4-1)$ and tends to zero, proving $I_4=\pi/\sqrt2$. Evenness then gives $\int_0^\infty dx/(1+x^4)=\pi/(2\sqrt2)$. The factor of two must match the actual interval in the question.

## Periodic real integrals and the unit circle

For an integral over one full turn, the substitution $z=e^{it}$ is often better than a large semicircle. As $t$ increases from zero to $2\pi$, the point travels once counterclockwise around the unit circle. Euler's formula gives $\cos t=(z+z^{-1})/2$, $\sin t=(z-z^{-1})/(2i)$, and $dt=dz/(iz)$. A rational expression in sine and cosine can therefore become a rational contour integrand. The substitution must include the factor $1/(iz)$; otherwise the residue calculation solves a different problem.

For example, the real denominator $5+4\cos t$ is at least one, so its reciprocal is continuous throughout a full turn. Substitution gives

$$
\int_0^{2\pi}\frac{dt}{5+4\cos t}
=\oint_{|z|=1}\frac{dz}{i(2z^2+5z+2)}.
$$

Factor $2z^2+5z+2=(2z+1)(z+2)$. Only the pole $-1/2$ is inside; the pole $-2$ is outside. The residue at the interior pole is $1/[i(4(-1/2)+5)]=1/(3i)$. Multiplication by $2\pi i$ gives $2\pi/3$. No limiting arc is needed: the real parameter interval already covers the entire closed contour. If the transformed denominator has a zero on the unit circle, this ordinary calculation is invalid and the corresponding real integral needs a separate convergence analysis.

## Jordan's lemma

For oscillatory integrals, the exponential can supply extra decay. A useful form of **Jordan's lemma** is as follows. Let $a>0$, and let $g$ be continuous on the upper semicircles of sufficiently large radii. If $M_R=\max_{|z|=R,\operatorname{Im}z\ge0}|g(z)|\to0$, then

$$
\int_{\mathrm{arc}}e^{iaz}g(z)\,dz\longrightarrow0.
$$

Indeed, $|e^{iaRe^{i\theta}}|=e^{-aR\sin\theta}$. The inequality $\sin\theta\ge2\theta/\pi$ for $0\le\theta\le\pi/2$, together with symmetry about $\pi/2$, gives

$$
\left|\int_{\mathrm{arc}}e^{iaz}g(z)dz\right|
\le R M_R\int_0^\pi e^{-aR\sin\theta}d\theta
\le\frac{\pi M_R}{a}.
$$

Thus the contribution tends to zero. For $a<0$, close in the lower half-plane instead. That contour is clockwise and introduces a minus sign in the residue theorem. At $a=0$, this estimate with $1/a$ is unavailable; use an ordinary arc bound. Poles on the real line require a separate indentation and a stated principal-value convention, which this lesson does not assume.

## Worked example for Jordan's lemma

For $a>0$ and $b>0$, integrate $e^{iaz}/(z^2+b^2)$ over the upper contour. The only enclosed pole is $ib$, with residue $e^{-ab}/(2ib)$. Jordan's lemma applies because $|1/(z^2+b^2)|\le1/(R^2-b^2)\to0$. Therefore

$$
\int_{-\infty}^{\infty}\frac{e^{iax}}{x^2+b^2}dx
=\frac\pi b e^{-ab}.
$$

Taking real and imaginary parts gives a cosine integral $\pi e^{-ab}/b$ and a sine integral zero. The latter also follows from oddness. For negative $a$, the final cosine answer uses $e^{-b|a|}$. These integrals converge absolutely because the oscillatory factor has modulus one on the real line and the denominator decays quadratically.

## Practice

1. Calculate $\int_{-\infty}^{\infty}dx/(x^2+9)$ and justify the arc limit.
2. Find $\int_0^\infty\cos(2x)/(x^2+4)dx$.

### Worked answers

1. The upper pole is $3i$, with residue $1/(6i)$. Multiply by $2\pi i$ to obtain $\pi/3$. On the upper arc, the bound $\pi R/(R^2-9)$ tends to zero, so the same value holds for the real integral.
2. Use $a=2$, $b=2$ in the oscillatory result to get $\pi e^{-4}/2$ on the whole line. The cosine integrand is even, so the requested half-line value is $\pi e^{-4}/4$.
