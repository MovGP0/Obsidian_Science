---
title: "Routes to chaos"
catalogue_ids:
  - "17.3.2"
  - "17.3.2.1"
  - "17.3.2.2"
  - "17.3.2.3"
  - "17.3.2.4"
---

> [!TLDR]
> Period doubling, intermittency, homoclinic intersections, and torus breakup are different mechanisms; no one numerical picture proves every route.

## Several mechanisms

A parameter change can produce complicated recurrent motion in several ways. This lesson compares mechanisms rather than claiming every nonlinear system follows one common sequence. Read [[Local and global bifurcations]] first, then use [[Chaos in interval maps]] for an exact example of chaos. The local changes below can be checked algebraically; general global conclusions require the stated additional hypotheses.

## Period-doubling cascades

The logistic family is $f_r(x)=rx(1-x)$ on $[0,1]$, with $0\le r\le4$ so that the interval is forward invariant. Its fixed points are zero and $p=1-1/r$, with the second present for $r\ge1$. Since $f_r'(x)=r(1-2x)$, the nonzero fixed point has derivative $2-r$. It attracts for $1<r<3$ and reaches multiplier $-1$ at $r=3$.

Factoring $f_r^2(x)-x$ and removing the fixed-point factors gives the two-cycle

$$
x_\pm=\frac{r+1\pm\sqrt{(r-3)(r+1)}}{2r}.
$$

The two-step derivative is $f_r'(x_+)f_r'(x_-)=-r^2+2r+4$. This has absolute value less than one for $3<r<1+\sqrt6$. At the upper endpoint it reaches $-1$, where the next doubling occurs. These exact boundaries explain the first two branches in the figure.

![[catalogue-ch17-period-doubling.svg|**Fig. C.ch17.3** Exact attracting branches of the logistic fixed point and two-cycle end at their first two period-doubling thresholds. Dashed branches are unstable.]]

Further doublings create periods $4,8,16,\ldots$, accumulating near $r\approx3.56995$. Numerical thresholds must be distinguished from the algebraic values above. Under the usual smooth unimodal assumptions with a quadratic maximum, successive parameter gaps have a universal asymptotic ratio about $4.6692$. This is not a universal constant for arbitrary map families. [Chapman's logistic-map lectures](https://warwick.ac.uk/fac/sci/physics/archive/teach16_17/sandralecs/lecturenotesfile11-12.pdf) describe the cascade; [Pollicott's study of Feigenbaum invariants](https://warwick.ac.uk/fac/sci/maths/people/staff/mark_pollicott/p3/feigenbaum-dimension-11.pdf) treats the universal scaling.

Past the accumulation parameter there are also periodic windows. Increasing $r$ does not make every subsequent parameter chaotic, and the critical accumulation point should not be identified with the full-interval chaotic case $r=4$.

## Intermittency

Intermittency alternates long nearly regular intervals with irregular bursts. One local mechanism is a bottleneck near a destroyed saddle-node. Consider the local iteration $x_{n+1}=x_n+\varepsilon+x_n^2$. For $\varepsilon<0$ it has fixed points $\pm\sqrt{-\varepsilon}$. For $\varepsilon>0$ there are none, but changes are small near zero when $\varepsilon$ is small.

Approximate the slow passage by $dx/dn=\varepsilon+x^2$. The number of steps across $[-a,a]$ is approximately

$$
N\approx\int_{-a}^a\frac{dx}{\varepsilon+x^2}
=\frac2{\sqrt\varepsilon}\arctan\frac a{\sqrt\varepsilon}
\sim\frac\pi{\sqrt\varepsilon}.
$$

The last relation holds as $\varepsilon\downarrow0$ with fixed positive $a$. It is a local slow-passage approximation, not an exact step count. A global return mechanism must put the orbit back into the bottleneck to produce repeated laminar phases and bursts. The local polynomial alone simply moves points through and can send them away. [Pomeau and Manneville's original paper](https://doi.org/10.1007/BF01197757) established intermittency as a route to chaotic behavior. This derivation explains the type-I bottleneck rather than all intermittency types.

## Global homoclinic bifurcations

Stable and unstable manifolds of a saddle can return to the same neighborhood. For an invertible map, a **transverse homoclinic point** is a point other than the saddle where those manifolds intersect with complementary tangent directions. The Smale–Birkhoff theorem gives a horseshoe for an iterate under these conditions: a compact invariant set has symbolic dynamics like a two-symbol shift. The theorem concerns a diffeomorphism and a hyperbolic saddle, not an arbitrary crossing in a plotted curve. See [Teschl, section 13.2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf).

The geometric mechanism stretches one direction, contracts another, and folds trajectories back. Repeated returns allow arbitrarily long branch histories. The horseshoe set need not attract an open set. Its existence proves chaotic invariant dynamics, not automatically a strange attractor visible from most starting points.

A tangency can mark the parameter boundary before transverse intersections appear. In a planar autonomous flow, distinct solution curves cannot cross because of uniqueness. Therefore the planar homoclinic loop in the preceding lesson is not itself a transverse homoclinic tangle. For a periodically varying equation or a higher-dimensional flow, an appropriate return map can have the required intersections.

## Torus breakup

A torus is the product of two circles: describe a point by angles $(\theta_1,\theta_2)$ modulo $2\pi$. The flow $\theta_1'=1$, $\theta_2'=\omega$ is periodic if $\omega$ is rational and quasiperiodic if $\omega$ is irrational. Quasiperiodic motion has no common return period, but nearby angular displacements stay constant. This gives regular nonperiodic behavior rather than exponential sensitivity.

An invariant circle in a return map can arise after a Neimark–Sacker bifurcation. A concrete radial map is $r_{n+1}=(1+\mu)r_n-r_n^3$, $\theta_{n+1}=\theta_n+\alpha$. For $0<\mu<1$, the circle $r=\sqrt\mu$ has radial derivative $1-2\mu$ of modulus below one. Its angular motion is quasiperiodic when $\alpha/(2\pi)$ is irrational. This is a torus-type regular stage, not a chaotic example.

As a rule changes further, resonances, loss of smoothness, and interactions of stable and unstable sets can destroy an invariant torus and create chaotic dynamics. The Ruelle–Takens work gives a geometric route beyond quasiperiodic motion; it does not assert that every torus must break or that simply adding two incommensurate frequencies proves chaos. See [Ruelle and Takens, original account](https://numdam.org/item/RCP25_1971__12__A2_0/). A claim of actual breakup in a particular family needs its parameter conditions and global analysis.

## Practice

1. For $r=3.2$, find the logistic two-cycle approximately and check its multiplier.
2. In the bottleneck approximation, changing $\varepsilon$ from $10^{-4}$ to $10^{-6}$ changes the long passage scale by what factor? Does this prove repeated intermittent bursts?

## Worked answers

1. The radical is $\sqrt{0.2\times4.2}=\sqrt{0.84}\approx0.916515$. Thus $x_-\approx0.513045$ and $x_+\approx0.799455$. The multiplier is $-3.2^2+2(3.2)+4=0.16$, with modulus below one. The cycle is locally attracting.
2. The scale is proportional to $\varepsilon^{-1/2}$, so the factor is $\sqrt{10^{-4}/10^{-6}}=10$. This only estimates one local passage. Repeated bursts require reinjection by the global rule, and their irregularity requires further analysis.
