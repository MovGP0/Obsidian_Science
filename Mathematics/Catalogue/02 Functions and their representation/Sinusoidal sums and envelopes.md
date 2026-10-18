---
title: "Sinusoidal sums and envelopes"
catalogue_ids:
  - "2.7.3"
  - "2.7.3.1"
  - "2.7.3.2"
  - "2.7.3.3"
  - "2.7.3.4"
---

> [!TLDR]
> Sine and cosine terms with one frequency combine by vector addition; unequal frequencies and exponential envelopes produce different patterns.

## The mathematical oscillation problem

An oscillation here means a repeated change of a mathematical function around a reference output. No physical system is assumed. Use a real input $x$ and consider $f(x)=A\cos(kx+\phi)+D$ with $k\ne0$. The midline is $D$, amplitude is $|A|$, period is $2\pi/|k|$, and phase is the angle offset $\phi$. A negative coefficient can be absorbed into the phase by adding $\pi$.

The central problem is to describe a sum of such functions: can it be expressed as one sinusoid, what is its amplitude, and does it repeat? The answer depends on whether the angular factors are equal. Adding the amplitudes is valid only for aligned phases with a consistent sign convention.

## One frequency: rectangular and phase forms

For

$$
f(x)=a\cos kx+b\sin kx,
$$

seek a form $R\cos(kx-\theta)$ with $R\ge0$. Expand using angle subtraction:

$$
R\cos(kx-\theta)
=R\cos\theta\cos kx+R\sin\theta\sin kx.
$$

Thus $a=R\cos\theta$ and $b=R\sin\theta$. If $(a,b)\ne(0,0)$, choose

$$
R=\sqrt{a^2+b^2},\qquad
\theta=\operatorname{atan2}(b,a).
$$

The two-argument angle selects the quadrant from both coordinates. Using $\arctan(b/a)$ alone can choose the wrong quadrant and fails at $a=0$. If $a=b=0$, the resultant is identically zero and its phase can be chosen arbitrarily; there is no distinguished phase or nonzero amplitude.

## A vector diagram for phase addition

A term $A\cos(kx+\phi)$ corresponds to the fixed coordinate vector $(A\cos\phi,A\sin\phi)$ when the resultant is written $R\cos(kx+\psi)$. Expanding the term gives the cosine coefficient $A\cos\phi$ and sine coefficient $-A\sin\phi$. Add these vectors for terms with the same $k$. Their sum $(U,V)$ gives $R=\sqrt{U^2+V^2}$ and $\psi=\operatorname{atan2}(V,U)$.

![[catalogue-ch02a-phase-vectors.svg|**Fig. C.ch02a.4** Add phase vectors by placing the second vector at the end of the first; the diagonal gives the combined amplitude and phase.]]

Fig. C.ch02a.4 uses two perpendicular vectors of lengths three and four. Their resultant has length five. The vector diagram works because every term has the same input angle $kx$ added to its fixed phase. It does not permit terms of different frequencies to be merged into one fixed vector.

For two terms of nonnegative amplitudes $A,B$ and phase difference $\delta$, the resultant length obeys

$$
R^2=A^2+B^2+2AB\cos\delta.
$$

Aligned phases give $R=A+B$; opposite phases give $R=|A-B|$. Complete cancellation requires equal amplitudes and opposite phases.

## Unequal frequencies and envelopes

For two equal-amplitude cosine terms,

$$
\cos k_1x+\cos k_2x
=2\cos\left(\frac{k_1-k_2}{2}x\right)
\cos\left(\frac{k_1+k_2}{2}x\right).
$$

If the frequencies are close, the first factor changes slowly and gives a visible envelope around the faster second factor. The nonnegative magnitude envelope is $2|\cos((k_1-k_2)x/2)|$. This is not one sinusoid of constant amplitude. For two nonzero frequencies with rational ratio, a common period exists. With irrational ratio, the nontrivial two-term sum has no common period; apparent near-repetition does not make it exactly periodic.

Mathematical damping multiplies a sinusoid by a decreasing envelope, for example

$$
g(x)=A e^{-\lambda x}\cos(kx+\phi),\qquad \lambda>0,\quad x\ge0.
$$

Then $|g(x)|\le|A|e^{-\lambda x}\to0$. The cosine factor still has period $2\pi/|k|$, but the full nonzero function does not repeat with this period because its envelope changes. Successive envelope heights separated by that input period have ratio $e^{-2\pi\lambda/|k|}$.

## Read a phase diagram consistently

In Fig. C.ch02a.4, the vector $(3,4)$ uses the plus-phase convention and therefore represents $3\cos kx-4\sin kx=5\cos(kx+\theta)$. The worked example below uses $3\cos kx+4\sin kx$, whose plus-phase vector is $(3,-4)$. Reflecting the vector changes the phase sign and preserves its length five. Naming the convention prevents an otherwise correct amplitude calculation from producing a shifted graph in the wrong direction.

## Worked example: a same-frequency sum

Combine $f(x)=3\cos2x+4\sin2x$. Here $R=5$. Choose the first-quadrant angle $\theta$ with $\cos\theta=3/5$ and $\sin\theta=4/5$, so $\theta=\arctan(4/3)$. Therefore

$$
f(x)=5\cos(2x-\theta).
$$

Its range is $[-5,5]$ and its period is $\pi$. Multiplying by $e^{-x}$ for $x\ge0$ gives a damped version bounded between $-5e^{-x}$ and $5e^{-x}$. The bound describes an envelope; its points need not themselves be local extrema of the full product.

## Practice

1. Combine $2\cos x+2\cos(x+\pi)$ and explain the resultant phase.
2. Rewrite $\cos5x+\cos3x$ as a product. Give a common period and an output magnitude envelope.

## Worked answers

1. Since $\cos(x+\pi)=-\cos x$, the sum is zero. Its amplitude is zero, so no phase is singled out by the resultant.
2. The sum-to-product rule gives $2\cos x\cos4x$. The function repeats after $2\pi$, which is a common period of the original two cosines. Its magnitude is at most $2|\cos x|$, the absolute value of the slow factor times two.
