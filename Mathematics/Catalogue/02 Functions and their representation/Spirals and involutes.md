---
title: "Spirals and involutes"
catalogue_ids:
  - "2.14"
  - "2.14.1"
  - "2.14.2"
  - "2.14.3"
  - "2.14.4"
  - "2.14.5"
---

> [!TLDR]
> A spiral rule controls radius as angle changes; an involute uses an unwound tangent, while a clothoid controls turning by arc length.

## Prerequisite route

Read [[03.05 Trigonometric functions]] and [[03.04 Exponential and logarithmic functions]]. In polar coordinates, $x=r\cos\theta$ and $y=r\sin\theta$. Thus one radius formula supplies both Cartesian coordinates. Angles are in radians. The final clothoid section introduces an integral as an accumulated sum; [[08.02 Antiderivatives]] is optional further reading.

## Read a spiral rule

A spiral winds around a pole while its radius changes. State the angular domain: a formula on one revolution is not the same curve segment as the same formula on ten revolutions. Also distinguish a constant **radial difference** per turn from a constant **radial factor** per turn. The two rules lead to different shapes. Throughout this lesson $a>0$ is a scale parameter; additional parameters are defined in their sections.

## Archimedean spiral

The standard outward **Archimedean spiral** is

$$
r=a\theta,\qquad
x=a\theta\cos\theta,\quad y=a\theta\sin\theta,\qquad \theta\geq0.
$$

The point begins at the pole. A full turn adds $2\pi$ to the angle and therefore adds $2\pi a$ to the radius. Successive turns meet a fixed ray at equal radial gaps. The more general $r=r_0+a\theta$ shifts the starting radius, but the radial gap remains $2\pi a$. A negative angular extension with signed radii adds another arm; do not include it without stating the domain. See [MacTutor's Archimedean spiral](https://mathshistory.st-andrews.ac.uk/Curves/Spiral/).

## Hyperbolic spiral

The **hyperbolic spiral**, also called a reciprocal spiral, is

$$
r=\frac a\theta,\qquad \theta>0.
$$

As $\theta$ increases, the radius decreases towards zero while the point winds through arbitrarily many turns. As $\theta\to0^+$ the radius increases without bound, but the Cartesian coordinates have a revealing limit:

$$
x=\frac{a\cos\theta}{\theta}\longrightarrow+\infty,
\qquad y=\frac{a\sin\theta}{\theta}\longrightarrow a.
$$

Thus $y=a$ is an asymptote at this end. The familiar limit $\sin\theta/\theta\to1$ explains the finite vertical coordinate. The name does not say that this is a branch of the conic hyperbola; it describes the reciprocal relation between $r$ and $\theta$. Extending to $\theta<0$ with signed radii gives another part of the curve. See [MacTutor's hyperbolic spiral](https://mathshistory.st-andrews.ac.uk/Curves/Hyperbolic/).

## Logarithmic spiral

For a real constant $b\ne0$, define

$$
r=ae^{b\theta},\qquad \theta\in\mathbb R.
$$

Taking logarithms gives $\ln(r/a)=b\theta$, which explains its name. Equal angular steps multiply radius by the same factor. One full turn multiplies it by $e^{2\pi b}$. For $b>0$, increasing angle moves outward. For $b<0$, increasing angle moves inward. Radius stays positive and never reaches the pole at a finite angle.

This is also the **equiangular spiral**: the angle between its tangent and its radial line has a constant magnitude $\alpha$ with $\tan\alpha=1/|b|$. Here is a local explanation. Over a small angle change $\Delta\theta$, the approximate radial change is $br\Delta\theta$, and the perpendicular change is $r\Delta\theta$. Their ratio is $1/|b|$, independent of radius. This argument uses the derivative of an exponential; it explains the property without requiring a full curve theory. The case $b=0$ is a circle, not a winding-in or winding-out spiral. See [MacTutor's equiangular spiral](https://mathshistory.st-andrews.ac.uk/Curves/Equiangular/).

![[catalogue-ch02b-spirals.svg|**Fig. C.ch02b.6** An Archimedean spiral adds a fixed radius per turn, a hyperbolic spiral has reciprocal radius, and a logarithmic spiral multiplies radius per turn.]]

## Involute of a circle

An **involute** is traced by the end of a taut line as it unwinds from a curve. For a circle of radius $a$, let the contact point be $Q=(a\cos t,a\sin t)$. When the contact has turned through $t\geq0$, the unwound line length equals the circular arc length $at$. The unit tangent at $Q$ is $(-\sin t,\cos t)$. Move backwards along that tangent by $at$ to obtain

$$
x=a(\cos t+t\sin t),\qquad
y=a(\sin t-t\cos t),\qquad t\geq0.
$$

The initial point is $(a,0)$. Its squared radius is $a^2(1+t^2)$ because cross terms cancel, so its distance from the pole grows as $a\sqrt{1+t^2}$. The parameter $t$ is the contact angle, not the polar angle of the traced endpoint. Substituting it directly into a polar formula would be a different construction. See [MacTutor's circle involute](https://mathshistory.st-andrews.ac.uk/Curves/Involute/).

## Clothoid

A **clothoid**, or Euler spiral, is specified by how quickly its tangent turns as distance accumulates along the curve. Let $s$ be signed arc length measured from an inflection point. **Curvature** is the tangent-angle change per unit arc length. Set

$$
\kappa(s)=ks,\qquad \phi(s)=\frac{k s^2}{2},\qquad k>0.
$$

The second expression follows by accumulating the curvature from zero: the area under the straight graph $ku$ from $u=0$ to $u=s$ is $ks^2/2$. A unit tangent at angle $\phi$ has components $(\cos\phi,\sin\phi)$. Accumulate these components to define

$$
x(s)=\int_0^s\cos\left(\frac{k u^2}{2}\right)\,du,\qquad
y(s)=\int_0^s\sin\left(\frac{k u^2}{2}\right)\,du,\qquad s\in\mathbb R.
$$

An integral here means the limit of sums of many small tangent displacements. These coordinates are not obtained by inserting $s$ into $r=a\theta$ or $r=a/\theta$. The derivative vector has length one, since $\cos^2\phi+\sin^2\phi=1$, which confirms that $s$ really measures arc length.

The standard Fresnel integrals are $C(z)=\int_0^z\cos(\pi u^2/2)\,du$ and $S(z)=\int_0^z\sin(\pi u^2/2)\,du$. With $L=\sqrt{\pi/k}$, the coordinates are $x=L C(s/L)$, $y=L S(s/L)$. The $\pi/2$ normalization is important: other books absorb it into the argument. Compare [NIST DLMF §7.2](https://dlmf.nist.gov/7.2) and the clothoid definition in [Bertolazzi and Frego's paper](https://arxiv.org/abs/1305.6644). A full study of curvature and improper-integral limits belongs to later calculus; these definitions and finite examples do not require it.

## Worked example: distinguish two growth rules

Suppose a spiral's radius is $2$ at angle zero and $6$ after one full turn. An Archimedean rule has $r=2+a\theta$ with $2+2\pi a=6$, so $a=2/\pi$. After two turns its radius is $10$. A logarithmic rule has $r=2e^{b\theta}$ with $e^{2\pi b}=3$, so $b=\ln3/(2\pi)$. After two turns its radius is $18$. Two matching sample radii therefore do not determine the type of spiral without a rule assumption.

## Practice

1. A circle involute has $a=2$. Find its point at $t=\pi/2$ and its distance from the origin.
2. A clothoid has $k=1/4$. Find its tangent angle and curvature at arc length $s=4$. Explain which quantity is linear in $s$.

## Worked answers

1. Substitution gives $x=2(0+\pi/2)=\pi$, $y=2(1-0)=2$. Its radius is $\sqrt{\pi^2+4}=2\sqrt{1+\pi^2/4}$, in agreement with the general radius formula.
2. The curvature is $\kappa(4)=(1/4)4=1$, and the tangent angle is $\phi(4)=(1/4)16/2=2$ radians. Curvature is linear in arc length. The tangent angle is quadratic because it accumulates that linear curvature. Neither statement says that the polar radius is linear.
