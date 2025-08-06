![[mexican hat wavelet.png|400]]
## Mother wavelet

A real, symmetric wavelet obtained as the (negative) second derivative of a unit-variance Gaussian:
$$
\psi(t)
   = -\frac{d^{2}}{dt^{2}}\bigl[e^{-t^{2}/2}\bigr]
   = \frac{2}{\sqrt{3}\,\pi^{1/4}}\,
     \bigl(1-t^{2}\bigr)\,e^{-t^{2}/2}.
$$

The prefactor makes $\|\psi\|_{2}=1$ and therefore leaves no free *normalisation-convention* ambiguities. It is sometimes written with an arbitrary width parameter $\sigma$ (just replace $t\mapsto t/\sigma$).

### Frequency-domain shape

With the Fourier convention

$$
\widehat{f}(\omega)=\int_{-\infty}^{\infty}f(t)e^{-i\omega t}\,dt,
$$

we have

$$
\widehat{\psi}(\omega)
   = \frac{2\sqrt{2}}{\sqrt{3}}\,
     \pi^{1/4}\,\omega^{2}\,e^{-\omega^{2}/2},
$$

i.e. a band-pass (zero at ω=0\omega=0 and Gaussian decay for large ∣ω∣|\omega|) whose peak energy is centered around

$$
|\omega|\approx\sqrt{2}
$$

(for the unit-variance version).

### Admissibility

Because

$$
\widehat{\psi}(\omega)\sim\omega^{2}
$$

near zero,

$$
\int_{0}^{\infty}\!|\widehat{\psi}(\omega)|^{2}\omega^{-1}\,d\omega<\infty;
$$

hence the CWT admits an exact inversion with

$$
C_\psi
  = \int_{0}^{\infty}\frac{|\widehat{\psi}(\omega)|^{2}}{\omega}\,d\omega
  \approx 0.3761.
$$


### Vanishing moments

$$
\int_{-\infty}^{\infty}\psi(t)\,dt = 0,\qquad
\int_{-\infty}^{\infty}t\,\psi(t)\,dt = 0,
$$

so the Mexican-Hat has **two vanishing moments** ($m=2$). That makes it blind to polynomials of degree $<2$ and particularly effective at isolating singular-curvature features.

## Scaled and translated wavelet family

For scale $a>0$ and location $b\in\mathbb{R}$ the continuous wavelet family is

$$\psi_{a,b}(t)=\frac{1}{\sqrt{a}}\,\psi\!\left(\frac{t-b}{a}\right).$$

### Continuous Wavelet Transform (CWT)

Given

$$
f\in L^{2}(\mathbb{R}),
$$

the transform is

$$
W_{\psi}f(b,a)
  = \int_{-\infty}^{\infty}f(t)\,\overline{\psi_{a,b}(t)}\,dt
  = \bigl(f\ast\psi_{a}^{\ast}\bigr)(b),
$$

with inversion formula

$$
f(t)=\frac{1}{C_{\psi}}
     \int_{0}^{\infty}\!
     \int_{-\infty}^{\infty}
     W_{\psi}f(b,a)\,
     \psi_{a,b}(t)\,\frac{db\,da}{a^{2}} .
$$


## Key properties at a glance

| Property          | Value / comment                                                                |
| ----------------- | ------------------------------------------------------------------------------ |
| Support           | Infinite (Gaussian tail)                                                       |
| Symmetry          | Even                                                                           |
| Regularity        | $C^{\infty}$ (all derivatives exist and decay like Gaussians)                  |
| Vanishing moments | $m=2$                                                                          |
| Main lobe FWHM    | $\approx2.3548$ in time; $\approx\!1.177$ in frequency                         |
| Best uses         | Detecting sharp, blob-like structures; edge curvature; seismic trace modelling |
### Relation to other wavelet families

- **Derivative-of-Gaussian (DoG n_n)**: the Mexican-Hat is $\text{DoG}_2$. Higher-order DoG wavelets increase the number of vanishing moments.
- **Laplacian of Gaussian (LoG)** in 2-D image analysis is the direct 2-D analogue—again the negative Laplacian of a Gaussian.
- **Approximation by Difference-of-Gaussians** (DoG filter bank) offers a separable, fast-convolution surrogate in computer vision pipelines.

### Note

> [!note] Sample rate
> Because the tails are Gaussian, a span of ±5 σ already captures > 99 % of the $L^{2}$ energy.

> [!note] Numerics
> Most CWT libraries (e.g. **PyWavelets**: wavelet tag `mexh`, **SciPy**: `signal.ricker`) implement the unit-norm form above by default
