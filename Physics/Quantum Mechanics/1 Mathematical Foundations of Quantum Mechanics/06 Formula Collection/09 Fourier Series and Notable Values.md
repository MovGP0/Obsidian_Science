---
title: "Fourier Series and Notable Values"
---

> [!TLDR]
> Fourier series connect periodic functions to useful infinite sums. These formulas collect four standard sums and the sine expansions of the sawtooth and sign functions.

## Infinite sums

$$
\sum_{n=1}^{\infty}\frac1{n^2}=\frac{\pi^2}6,
\qquad
\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}n=\ln2,
$$

$$
\sum_{k=0}^{\infty}\frac{(-1)^k}{2k+1}=\frac\pi4,
\qquad
\sum_{n=1}^{\infty}\frac1{n^4}=\frac{\pi^4}{90}.
$$

## Sawtooth function

$$
x=2\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}n\sin(nx),
\qquad x\in(-\pi,\pi).
$$

## Sign function

$$
\operatorname{sgn}(x)
=\frac4\pi\sum_{k=0}^{\infty}
\frac{\sin((2k+1)x)}{2k+1},
\qquad x\in(-\pi,\pi).
$$

At $x=0$, the series is $0$, consistent with $\operatorname{sgn}(0)=0$. At jumps of the periodic extensions, the series converges to the mean of the one-sided limits.

## Select the expansion and check its boundary

Both expansions refer to $2\pi$-periodic extensions of the functions on the stated interval. They contain only sine terms because these extensions are odd. The sign function also changes sign after a shift by $\pi$, which removes the even harmonics. Use that symmetry to select the second series before calculating coefficients.

For example, at $x=\pi/2$ the sign series becomes

$$
1=\frac4\pi\left(1-\frac13+\frac15-\cdots\right),
$$

which reproduces the odd-denominator sum above. At $x=\pi$, both sine series are zero. For the sawtooth, this is the mean of the periodic limits $\pi$ and $-\pi$, not the value $\pi$. Extending the displayed equality for $x$ to that endpoint would therefore be false.

The reciprocal-square and reciprocal-fourth-power sums converge absolutely. The two alternating reciprocal sums converge conditionally, so their term order must be retained. The function series converge in squared norm and at interior continuity points; convergence is not uniform across a jump. Increasing a finite truncation leaves oscillations near a jump, so pointwise values and integral errors need separate checks.

For quantum mode expansions, squared-norm convergence is the relevant control on state normalization. It does not imply convergence of the energy expectation when the Hamiltonian is unbounded: high-frequency coefficients receive larger energy weights. Check the weighted sum as well before using a discontinuous trial state in an energy calculation.
