---
title: "Reconstructing dynamics from observations"
catalogue_ids:
  - "17.2.7"
  - "17.2.7.1"
  - "17.2.7.2"
---

> [!TLDR]
> Delayed values can separate states hidden by one observation, but embedding theorems require hypotheses and do not certify a finite noisy data set.

## Delay coordinates

Suppose the true state is $x_n\in X$, with $x_{n+1}=f(x_n)$, but we observe only one number $y_n=a(x_n)$. An **observable** $a$ is a function from states to measured numbers. Two states can give the same observable value. A **delay vector** combines values at several steps:

$$
Y_n=(y_n,y_{n+1},\ldots,y_{n+m-1}).
$$

This uses forward values for the theorem and algebra below. In data analysis one often uses past values instead. For invertible evolution, both conventions are coordinate choices along an orbit. If samples are taken every $q$ steps, replace $f$ with $f^q$ and state $q$.

An **embedding** places the state space into a larger coordinate space without identifying distinct states or losing local tangent directions. For a smooth manifold, it is a smooth injective map with injective derivative and a continuous inverse onto its image. A picture with a loop is not itself proof that these conditions hold. Begin with [[03.07 Composition and inverse functions]] and [[Manifolds and return maps]].

## Worked example: recover a circle from two observations

Let the state be an angle $\theta$ modulo $2\pi$, and evolve by $\theta\mapsto\theta+\alpha$. Observe $a(\theta)=\cos\theta$. A single number does not distinguish $\theta$ from $-\theta$. Two consecutive values give

$$
y_0=\cos\theta,\qquad
y_1=\cos(\theta+\alpha)
=\cos\theta\cos\alpha-\sin\theta\sin\alpha.
$$

If $\sin\alpha\ne0$, solve

$$
\cos\theta=y_0,\qquad
\sin\theta=\frac{y_0\cos\alpha-y_1}{\sin\alpha}.
$$

These values identify the point on the unit circle. At $\alpha=\pi/2$, the delay pair is $(\cos\theta,-\sin\theta)$, an exact circle with reversed orientation. The recovery formula also shows why $\alpha$ very close to zero is numerically poor: division by a small sine magnifies observation errors.

If $\alpha=\pi$, then $y_1=-y_0$, so the pair lies on a line and still merges $\theta$ with $-\theta$. Taking samples at a bad delay can destroy the desired information. The successful two-coordinate example does not contradict a larger sufficient bound in a general embedding theorem: a sufficient condition need not be minimal for a special system.

## Generic reconstruction

A classical Takens theorem states that for a compact smooth $d$-dimensional manifold $M$, a generic pair consisting of a $C^2$ diffeomorphism $f$ and a $C^2$ observable $a$ has an embedding

$$
\Phi(x)=(a(x),a(f(x)),\ldots,a(f^{2d}(x)))
\in\mathbb R^{2d+1}.
$$

Here “generic” concerns the space of pairs, not every observable for an arbitrary fixed map. The constant observable fails immediately. Compactness prevents escape, smoothness controls local behavior, and invertibility specifies the evolution class. The theorem does not require the dynamics to be chaotic. The statement and historical context are in [Takens, Detecting strange attractors in turbulence](https://doi.org/10.1007/BFb0091924).

An embedding transports the map to reconstructed coordinates: $\widetilde f=\Phi\circ f\circ\Phi^{-1}$ on $\Phi(M)$. This is why delayed observations can reveal the dynamics instead of only drawing a shape. The inverse is understood on the image, not on every point of the surrounding Euclidean space.

## Prevalent reconstruction

“Generic” is a topological size concept. **Prevalent** is an almost-everywhere concept suitable for certain function spaces: a finite-dimensional family of perturbations can give the property outside a Lebesgue-zero set of coefficients around any starting function. It does not mean that a uniformly random function from an infinite-dimensional space has been selected.

One precise Sauer–Yorke–Casdagli result uses a diffeomorphism $f$ on an open subset of $\mathbb R^k$ and a compact set $A$ of box dimension $D$. Let $m>2D$. For each $1\le p\le m$, require the period-$p$ point set in $A$ to have box dimension below $p/2$, and the corresponding derivatives $Df^p$ to have distinct eigenvalues. Then a prevalent set of smooth observables gives an injective $m$-delay map on $A$, with immersion on compact smooth manifold subsets. See [Embedology, Theorem 2.7](https://sfi-edu.s3.amazonaws.com/sfi-edu/production/uploads/sfi-com/dev/uploads/filer/ab/72/ab72ea70-def1-468c-bb30-7174d2bcdc33/91-01-008.pdf).

This is a statement about possibly fractal sets and includes restrictions on low-period orbits. Replacing manifold dimension by a measured fractal dimension while dropping these restrictions is not a valid application. Nor does injectivity on a fractal set promise a smooth inverse in every ambient direction.

## Apply the idea to a finite record

First state what is sampled and whether the rule can reasonably be treated as fixed. Choose a delay that avoids nearly repeated coordinates. Form vectors using only available samples. Check whether different apparent states remain distinguishable as dimension and sample size increase. Nearby-vector prediction on held-out values can test usefulness, but it is evidence rather than verification of an embedding theorem.

Noise, rounding, missing samples, and a drifting rule can produce false geometry. A finite record cannot uniquely identify an arbitrary unknown system: many different rules can interpolate the same finite data. A smooth reconstructed loop also does not prove chaos, since the circle example above is a regular rotation.

## Practice

1. For the circle observation above, use $\alpha=\pi/2$, $y_0=3/5$, and $y_1=-4/5$ to recover the state.
2. If a compact set has box dimension $D=1.4$, what is the smallest integer delay dimension permitted by $m>2D$? Does this alone guarantee reconstruction?

## Worked answers

1. The recovery formula gives $\cos\theta=3/5$ and $\sin\theta=4/5$. Their squares add to one, and their positive signs place the state in the first quadrant. Thus $\theta$ is the first-quadrant angle with tangent $4/3$, modulo $2\pi$.
2. The inequality is $m>2.8$, so the smallest integer is three. The other hypotheses on the diffeomorphism, periodic sets, derivative eigenvalues, and observable are still required. A dimension estimate from finite data may also be inaccurate.
