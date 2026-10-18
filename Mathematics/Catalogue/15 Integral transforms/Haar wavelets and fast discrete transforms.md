---
title: "Haar wavelets and fast discrete transforms"
catalogue_ids:
  - "15.5.4"
  - "15.5.4.1"
  - "15.5.4.2"
---

> [!TLDR]
> The discrete Haar transform repeatedly separates pair averages from pair differences, with exact recovery when every coefficient is retained.

## Discrete wavelet transform

Start with [[Wavelets and local transforms]]. A continuous transform uses all real shifts and positive scales. A **discrete wavelet transform**, or DWT, uses selected scales and shifts. For Haar on the line, define

$$
\psi_{j,m}(t)=2^{j/2}\psi(2^jt-m),\qquad j,m\in\mathbb Z.
$$

The support is $[m2^{-j},(m+1)2^{-j}]$. Increasing $j$ gives finer intervals. These Haar wavelets form an orthonormal basis of $L^2(\mathbb R)$: distinct wavelets have inner product zero and each has norm one. The basis theorem says a square-integrable function is recovered in mean square from all its coefficients. A full completeness proof requires approximation theory. Its finite counterpart below can be proved by elementary algebra.

For functions on $[0,1)$, retain the constant scaling function $\phi(t)=1$ there, together with Haar wavelets supported on its halves, quarters, and later subdivisions. The constant coefficient holds the average level. Omitting it loses the mean because every wavelet has zero mean.

## Discrete Haar wavelet transform

Take a finite list $x[0],\ldots,x[N-1]$ with $N=2^J$ for a nonnegative integer $J$. Pair adjacent entries and define

$$
a[m]=\frac{x[2m]+x[2m+1]}{\sqrt2},\qquad
d[m]=\frac{x[2m]-x[2m+1]}{\sqrt2}.
$$

The $a$ values are coarse coefficients; $d$ gives the details. The sign convention is first entry minus second entry. The factor $1/\sqrt2$ makes this an orthonormal operation. These coarse coefficients are scaled averages, not ordinary arithmetic means. The inverse is

$$
x[2m]=\frac{a[m]+d[m]}{\sqrt2},\qquad
x[2m+1]=\frac{a[m]-d[m]}{\sqrt2}.
$$

Adding and subtracting the forward equations proves the inverse. Also, $a[m]^2+d[m]^2=x[2m]^2+x[2m+1]^2$ for real entries. With complex entries, replace squares by squared moduli. This proves preservation of the squared norm at one stage, and hence through all stages.

## Fast wavelet transform

Repeat the same pairing operation on the coarse list $a$, then on its coarse list, until one coefficient remains. Keep every detail list. This is the **fast wavelet transform** for Haar. The first stage touches $N$ entries, the next $N/2$, then $N/4$, and so on. The total is less than $2N$, so the arithmetic work grows proportionally to $N$. Reconstruction reverses the stages and has the same order of work.

More general wavelets use low-pass and high-pass filter coefficients followed by downsampling. A fast filter-bank calculation is invertible only when its analysis and synthesis filters satisfy perfect-reconstruction conditions. Arbitrarily chosen averages and differences do not automatically define an orthogonal wavelet basis.

## Worked four-entry example

Use the list $(4,6,10,12)$. The first stage gives

$$
a=(5\sqrt2,11\sqrt2),\qquad d=(-\sqrt2,-\sqrt2).
$$

Transform the coarse pair once more:

$$
A=\frac{5\sqrt2+11\sqrt2}{\sqrt2}=16,\qquad
D=\frac{5\sqrt2-11\sqrt2}{\sqrt2}=-6.
$$

Choose coefficient order $(A,D,d[0],d[1])$. The result is $(16,-6,-\sqrt2,-\sqrt2)$. Inversion first gives $a[0]=(16-6)/\sqrt2=5\sqrt2$ and $a[1]=(16+6)/\sqrt2=11\sqrt2$. Each recovered coarse coefficient and its detail then gives the original pair. For example, $(5\sqrt2-\sqrt2)/\sqrt2=4$ and $(5\sqrt2+\sqrt2)/\sqrt2=6$.

![[catalogue-ch15-haar-tree.svg|**Fig. C.ch15.3** Two Haar stages retain one coarse value, one half-list difference, and two local differences.]]

The input squared norm is $16+36+100+144=296$. The coefficient squared norm is $256+36+2+2=296$. If both finest details are replaced by zero, the inverse becomes $(5,5,11,11)$. The squared error is $1+1+1+1=4$, exactly the sum of the discarded coefficient squares. This is a finite orthogonality calculation, not a promise that discarding details is always harmless.

## Support, boundaries, and interpretation

A fine Haar coefficient compares adjacent local intervals. A coarse one compares larger blocks. A change confined to one input pair cannot affect the finest details of remote pairs. Coarse coefficients can still change because their support is wider. This local support distinguishes Haar analysis from a basis whose every vector spans the entire interval.

The finite algorithm above requires a power-of-two length. Other lengths need a stated policy, such as padding, an incomplete final stage, or a boundary extension. Zero padding and periodic extension can produce different coefficients near the edges. State the policy before comparing results from software. The complete coefficient count stays $N$: $1+1+2+4+\cdots+N/2=N$. The algorithm changes description without increasing the independent data count.

Haar handles jumps with simple local calculations, but its reconstructed basis functions are discontinuous. If smooth approximation is needed, another wavelet family can be preferable. The word discrete also does not mean simply evaluating every CWT scale-shift pair on a rectangular grid; the orthogonal scale structure matters.

## Practice

1. Transform $(2,2,6,6)$ using the stated coefficient order.
2. Reconstruct a four-entry list from $(A,D,d[0],d[1])=(8,0,\sqrt2,-\sqrt2)$.

> [!example]- Worked answers
> 1. The first coarse list is $(2\sqrt2,6\sqrt2)$ and both details are zero. The final coarse and difference are $8$ and $-4$. Thus the transform is $(8,-4,0,0)$.
> 2. The coarse list is $(4\sqrt2,4\sqrt2)$. The first pair is $(5,3)$ and the second is $(3,5)$. Their squared norm is $68$, equal to $8^2+0^2+(\sqrt2)^2+(-\sqrt2)^2$.

## Reference

[Benedetto, introduction to wavelet theory](https://www.math.umd.edu/~jjb/benedetto_0.pdf) describes the Haar wavelet system. The finite transform, inverse, norm identity, and examples above are derived directly from pair addition and subtraction.
