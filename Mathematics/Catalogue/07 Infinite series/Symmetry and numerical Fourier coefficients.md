---
title: "Symmetry and numerical Fourier coefficients"
catalogue_ids:
  - "7.4.2"
  - "7.4.2.1"
  - "7.4.2.2"
  - "7.4.3"
  - "7.4.5"
---

> [!TLDR]
> Symmetry removes unnecessary Fourier coefficients; numerical samples estimate the remaining integrals but can confuse distinct harmonics through aliasing.

## Different types of symmetry

Use the convention from [[Fourier coefficients and convergence]]: period $2L$, constant term $a_0/2$, and basis arguments $n\pi x/L$. An **even** function satisfies $f(-x)=f(x)$; an **odd** function satisfies $f(-x)=-f(x)$. Over a symmetric interval, an odd integrand has integral zero. Thus an even $f$ has $b_n=0$ and

$$
a_n=\frac2L\int_0^L f(x)\cos(n\pi x/L)\,dx.
$$

An odd $f$ has $a_n=0$, including $a_0=0$, and $b_n=(2/L)\int_0^L f(x)\sin(n\pi x/L)\,dx$. A function is not assumed even merely because it contains a cosine somewhere: test the whole expression and the extension.

**Half-period antisymmetry** means $f(x+L)=-f(x)$. Splitting a coefficient integral into two half-periods introduces the factor $1-(-1)^n$, so even-index harmonics and the mean vanish. **Half-period symmetry**, $f(x+L)=f(x)$, instead removes odd-index harmonics; the stated $2L$ is then not a least period. Combining parity with half-period antisymmetry can leave only odd sines or only odd cosines. The remaining half-interval integral can be split once more to exploit quarter-period reflection. These are algebraic symmetry rules, not assumptions about convergence.

## Forms of expansion and half-range choices

Data supplied only on $0<x<L$ do not determine how to extend outside it. An even extension produces a **half-range cosine series**. An odd extension produces a **half-range sine series**. Both reproduce suitable original data at interior continuity points, but their endpoint behavior can differ because their periodic extensions differ.

For $f(x)=1$ on $(0,L)$, the even extension is simply constant, giving $a_0/2=1$. Its odd extension is $-1$ on $(-L,0)$, giving

$$
b_n=\frac2L\int_0^L\sin(n\pi x/L)\,dx
=\frac{2[1-(-1)^n]}{n\pi}.
$$

Thus the sine expansion is $(4/\pi)\sum_{m=0}^{\infty}\sin((2m+1)\pi x/L)/(2m+1)$. At $x=0$ and $L$, every term is zero and the periodic extension has a jump with midpoint zero. It does not represent an arbitrarily assigned endpoint value $1$ there.

For complex form, first read [[06.01 Complex arithmetic]] and [[06.05 Euler’s formula]]. Write $f\sim\sum_{n\in\mathbb Z}c_ne^{in\pi x/L}$ with symmetric partial sums. Then $c_0=a_0/2$, $c_n=(a_n-ib_n)/2$, $c_{-n}=(a_n+ib_n)/2$ for real $f$. The coefficient integral is $c_n=(1/(2L))\int_{-L}^{L}f(x)e^{-in\pi x/L}dx$. Do not mix its $1/(2L)$ with the real coefficient's $1/L$.

## Numerical coefficients from equally spaced samples

Let $M$ samples cover one period without repeating the endpoint: $x_j=-L+2Lj/M$, $j=0,\ldots,M-1$. The periodic trapezoidal approximation gives

$$
\widetilde c_n=\frac1M\sum_{j=0}^{M-1}f(x_j)e^{-in\pi x_j/L}.
$$

For real coefficients, use $\widetilde a_n=(2/M)\sum_jf(x_j)\cos(n\pi x_j/L)$ and $\widetilde b_n=(2/M)\sum_jf(x_j)\sin(n\pi x_j/L)$. These are quadrature estimates of the continuous coefficient integrals. For a periodic integrand with two continuous derivatives, the composite trapezoidal error is of order $M^{-2}$ with a derivative-dependent bound. At jumps that smooth error guarantee fails; refine and compare sample grids, especially near breaks.

The discrete formulas do not generally recover arbitrarily high continuous harmonics. Values of $e^{i(n+qM)2\pi j/M}$ equal those of $e^{in2\pi j/M}$ for integers $q$. Distinct modes can therefore produce identical samples. This is **aliasing**. Exact recovery from finite samples needs a prior restriction on which modes can occur; increasing a sample count without such a restriction is not proof of exactness. MIT's [numerical Fourier analysis notes](https://ocw.mit.edu/courses/18-330-introduction-to-numerical-analysis-spring-2012/dd43d0af438b8b2aa288022b0064c550_MIT18_330S12_Chapter6.pdf) develop the relation between continuous coefficients and sampled sums.

![[catalogue-ch07-aliasing.svg|**Fig. C.ch07.3** Four samples cannot distinguish cos x from cos 5x. Both give the values 1, 0, −1, 0 at the marked inputs.]]

## Worked example: recover a known low-degree polynomial

Use $f(x)=2+\cos x$ with $L=\pi$, $M=4$, and inputs $-\pi,-\pi/2,0,\pi/2$. The function values are $1,2,3,2$, cosine values are $-1,0,1,0$, and sine values are $0,-1,0,1$. Hence

$$
\widetilde a_0=\frac24(1+2+3+2)=4,\quad
\widetilde a_1=\frac24(-1+0+3+0)=1,\quad
\widetilde b_1=\frac24(0-2+0+2)=0.
$$

These agree with the true coefficients because the given function has only a constant and the first harmonic. The samples alone cannot prove that form: $2+\cos5x$ gives the same samples. Fig. C.ch07.3 shows the corresponding ambiguity on a period beginning at zero.

## Read selected expansion tables safely

The following examples use period $2\pi$. Equalities mean the interior values stated; joined endpoints follow the midpoint rule.

| Function on $(-\pi,\pi)$ | Expansion | Endpoint behavior |
| --- | --- | --- |
| $x$ | $2\sum_{n\geq1}(-1)^{n+1}\sin(nx)/n$ | Zero at $\pm\pi$ |
| $x^2$ | $\pi^2/3+4\sum_{n\geq1}(-1)^n\cos(nx)/n^2$ | $\pi^2$ at $\pm\pi$ |
| $\operatorname{sgn}(x)$ | $(4/\pi)\sum_{m\geq0}\sin((2m+1)x)/(2m+1)$ | Zero at every jump |

Here $\operatorname{sgn}(x)$ is $1$ for $x>0$ and $-1$ for $x<0$. Its value at zero does not alter coefficients. The ramp coefficients were derived in [[Fourier coefficients and convergence]]. For $x^2$, evenness removes all sines; two integrations by parts give $a_n=4(-1)^n/n^2$, while $a_0=(1/\pi)\int_{-\pi}^{\pi}x^2dx=2\pi^2/3$. The sign expansion is the odd extension of the constant example above. Thus each table row has an accessible derivation and a checked normalization.

## Practice

1. Use the $x^2$ expansion at $x=\pi$ to evaluate $\sum_{n=1}^{\infty}1/n^2$.
2. A function is odd and satisfies $f(x+L)=-f(x)$. Which real Fourier coefficients can be nonzero?

## Worked answers

1. The periodic extension of $x^2$ is continuous at the joined endpoints. Since $\cos(n\pi)=(-1)^n$, the identity gives $\pi^2=\pi^2/3+4\sum1/n^2$. Rearrangement yields $\sum1/n^2=\pi^2/6$. The absolute coefficient sum also guarantees uniform convergence here.
2. Oddness removes $a_0$ and every cosine coefficient. Half-period antisymmetry removes all even-index sine coefficients. Only $b_1,b_3,b_5,\ldots$ can remain; additional symmetries could remove more.
