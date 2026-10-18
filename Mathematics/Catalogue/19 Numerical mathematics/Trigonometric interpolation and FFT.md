---
title: "Trigonometric interpolation and FFT"
catalogue_ids:
  - "19.6.4"
  - "19.6.4.1"
  - "19.6.4.2"
---

> [!TLDR]
> A discrete Fourier transform fits periodic samples with trigonometric modes; an FFT computes the same coefficients through reusable smaller transforms.

## Entry route and the sampling problem

Read [[Polar form of complex numbers]], [[16.01 Periodic functions]], and [[16.02 Trigonometric and complex bases]]. The imaginary unit satisfies $i^2=-1$, and $e^{i\theta}=\cos\theta+i\sin\theta$. A trigonometric interpolant is a finite sum of such periodic modes. It fits a finite set of periodic samples exactly, unlike a Fourier series whose coefficients come from integrals of a whole function.

Take $N$ equally spaced samples $y_j$ at $\theta_j=2\pi j/N$, $j=0,\ldots,N-1$. Do not repeat the endpoint $2\pi$: it is the same position as $0$ for a periodic function. Define the unnormalized forward discrete Fourier transform, or DFT, by

$$
Y_k=\sum_{j=0}^{N-1}y_j e^{-2\pi i jk/N},\qquad k=0,\ldots,N-1.
$$

The inverse is

$$
y_j=\frac1N\sum_{k=0}^{N-1}Y_k e^{2\pi i jk/N}.
$$

These signs and the factor $1/N$ are part of the definition. [FFTW's DFT convention](https://www.fftw.org/fftw3_doc/The-1d-Discrete-Fourier-Transform-_0028DFT_0029.html) uses the negative sign for the forward sum and leaves both library directions unnormalized; its backward result therefore needs division by $N$ to give this inverse.

## Why the inverse works

For an integer $m$, the geometric sum $\sum_{j=0}^{N-1}e^{2\pi i mj/N}$ equals $N$ when $m$ is a multiple of $N$, and $0$ otherwise. In the second case the common ratio is not $1$ but its $N$th power is $1$, so the geometric-series numerator vanishes. Substitute the forward formula into the inverse and interchange the two finite sums. This orthogonality removes every term except the sample with the required index. No limiting argument is needed.

For real samples, $Y_{N-k}=\overline{Y_k}$ with indices taken modulo $N$. Thus conjugate pairs combine into real sines and cosines. When $N$ is odd, use frequencies $-(N-1)/2,\ldots,(N-1)/2$ and coefficients $c_k=Y_{k\bmod N}/N$. Then $p(\theta)=\sum_kc_ke^{ik\theta}$ is the degree-$(N-1)/2$ trigonometric interpolant.

When $N$ is even, the highest frequency $N/2$ needs a convention. For real data use the real cosine term $(Y_{N/2}/N)\cos(N\theta/2)$, with the other frequencies $-N/2+1,\ldots,N/2-1$. A sine at that highest frequency is zero at every node and cannot be determined from the samples. Do not silently assign it an arbitrary coefficient.

## Worked four-point transform

Let $N=4$ and $y=(1,0,-1,0)$. Since $e^{-2\pi i/4}=-i$, direct summation gives

$$
Y_0=0,\quad Y_1=2,\quad Y_2=0,\quad Y_3=2.
$$

The signed-frequency coefficients are $c_1=c_{-1}=1/2$. Therefore $p(\theta)=(e^{i\theta}+e^{-i\theta})/2=\cos\theta$. At the four nodes it gives exactly $1,0,-1,0$. This also shows that Fourier coefficients need not resemble the raw sample values.

## Fast Fourier transform

An FFT is an algorithm for the DFT, not a different transform. For even $N$, split the input into its even-indexed and odd-indexed samples. Compute length-$N/2$ DFTs $E_k$ and $O_k$. With $w_N=e^{-2\pi i/N}$, combine them as

$$
Y_k=E_k+w_N^kO_k,\qquad
Y_{k+N/2}=E_k-w_N^kO_k,
\quad 0\le k<N/2.
$$

The second identity uses $w_N^{N/2}=-1$. Repeat the split down to length $1$ when $N$ is a power of two. There are $\log_2N$ levels, each with $O(N)$ arithmetic, so work grows as $O(N\log N)$ rather than the direct $O(N^2)$ sum. Other FFT factorizations handle other lengths.

For the four-point example, the even samples $(1,-1)$ transform to $E=(0,2)$; odd samples $(0,0)$ give $O=(0,0)$. The combination immediately returns $(0,2,0,2)$. For a less trivial combination, $y=(1,2,3,4)$ gives $E=(4,-2)$ and $O=(6,-2)$, hence $Y=(10,-2+2i,-2,-2-2i)$.

## Aliasing and limits

At the grid nodes, frequencies $k$ and $k+N$ give the same exponential. They are **aliases**. No algorithm can distinguish them from these samples alone. Increasing arithmetic precision does not fix missing sampling information. For arbitrary sample values interpolation is exact at the nodes, but it does not guarantee accuracy between them. Smooth periodic functions often have rapidly decreasing coefficients; jumps can cause persistent oscillations near the jump, and nonperiodic endpoints create an artificial discontinuity when treated as periodic.

## Practice

1. Find the DFT of $(1,1,1,1)$ with the stated normalization.
2. Which samples does $\cos(5\theta)$ give on a four-point grid, and which lower frequency has the same samples?

> [!example]- Worked answers
> 1. $Y_0=4$ and the other sums of roots of unity vanish, so $Y=(4,0,0,0)$. Dividing the inverse by $4$ recovers each sample as $1$.
> 2. Since $5\equiv1\pmod4$, the samples are $1,0,-1,0$, identical to $\cos\theta$. A four-point DFT cannot tell those two functions apart.
