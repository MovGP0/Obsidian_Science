---
title: "Quantum rotations, unitarity, and course review calculations"
---

> [!TLDR]
> Review operator transformations and expectation values with the final worked problems.

## Worked lecture material

In one dimension, the stationary Schrödinger equation and the local classical momentum are

$$
\frac{\hbar^2}{2\mechanical{m}}\frac{d^2\psi}{d\mechanical{x}^2}
+[\energy{E}-U(\mechanical{x})]\psi(\mechanical{x})=0,
\qquad
\mechanical{p}(\mechanical{x})
=\sqrt{2\mechanical{m}[\energy{E}-U(\mechanical{x})]}.
$$

In the classically allowed region the WKB approximation is

$$
\psi(\mechanical{x})\simeq
\frac{C_1}{\sqrt{\mechanical{p}(\mechanical{x})}}
e^{\frac{i}{\hbar}\int_{\mechanical{x}_0}^{\mechanical{x}}\mechanical{p}(\mechanical{x}')\,d\mechanical{x}'}
+
\frac{C_2}{\sqrt{\mechanical{p}(\mechanical{x})}}
e^{-\frac{i}{\hbar}\int_{\mechanical{x}_0}^{\mechanical{x}}\mechanical{p}(\mechanical{x}')\,d\mechanical{x}'}.
$$

For a simple turning point at $\mechanical{x}=\mechanical{a}$ with $U$ increasing, take the decaying solution on the right. Its exponential is $\exp[-\hbar^{-1}\int_{\mechanical{a}}^{\mechanical{x}}\lvert\mechanical{p}\rvert\,d\mechanical{x}']$ because the momentum is imaginary there. Analytically continue to the left by taking $\psi(\mechanical{x})\to\psi(z)$ with $z=\mechanical{x}+i\mechanical{y}$ and $\partial\psi/\partial z^*=0$. The coordinate identities are $\mechanical{x}=(z+z^*)/2$ and $\mechanical{y}=(z-z^*)/(2i)$. The continued equation is

$$
\frac{\hbar^2}{2\mechanical{m}}\frac{d^2\psi}{dz^2}+[\energy{E}-U(z)]\psi(z)=0.
$$

![[Kyle Kabasares - Quantum Mechanics II - Continuation around a turning point.png|**Fig. 26** A simple turning point and a contour that passes above it in the complex plane.]]

Linearize the potential as $U(z)\simeq \energy{E}-\mechanical{F}(z-\mechanical{a})$, where $\mechanical{F}=-U'(\mechanical{a})$. The magnitude of the real-axis momentum scales as $\lvert\mechanical{x}-\mechanical{a}\rvert^{1/2}$. Writing $z-\mechanical{a}=\mechanical{\rho} e^{i\mechanical{\varphi}}$, the WKB prefactor continued from the right is proportional to

$$
(z-\mechanical{a})^{-1/4}
=\mechanical{\rho}^{-1/4}e^{-i\mechanical{\varphi}/4}.
$$

Along the semicircle $z=\mechanical{a}+\mechanical{\rho} e^{i\mechanical{\varphi}}$, with fixed $\mechanical{\rho}$,

$$
dz=i\mechanical{\rho}e^{i\mechanical{\varphi}}\,d\mechanical{\varphi}.
$$

The continuation of the right-hand decay integrand, $\sqrt{2\mechanical{m}\lvert\mechanical{F}\rvert(z-\mechanical{a})}\,dz$, is proportional to $e^{3i\mechanical{\varphi}/2}\,d\mechanical{\varphi}$. The prefactor gains $e^{-i\pi/4}$ as $\mechanical{\varphi}$ goes from $0$ to $\pi$. On the allowed side, the action produces oscillatory phases. Combining the two conjugate oscillatory factors uses $\cos\alpha=(e^{i\alpha}+e^{-i\alpha})/2$.

With $C_R=C/2$ as noted in the margin, the connection formula for the decaying right-hand solution reads

$$
\psi(\mechanical{x})\simeq
\begin{cases}
\displaystyle \frac{C}{\sqrt{\mechanical{p}(\mechanical{x})}}
\cos\left[\frac{1}{\hbar}\int_{\mechanical{x}}^{\mechanical{a}}\mechanical{p}(\mechanical{x}')\,d\mechanical{x}'-\frac{\pi}{4}\right],
& \mechanical{x}<\mechanical{a},\\[8pt]
\displaystyle\frac{C/2}{\sqrt{\lvert\mechanical{p}(\mechanical{x})\rvert}}
\exp\left[-\frac{1}{\hbar}\int_{\mechanical{a}}^{\mechanical{x}}\lvert\mechanical{p}(\mechanical{x}')\rvert\,d\mechanical{x}'\right],
& \mechanical{x}>\mechanical{a}.
\end{cases}
$$

The phase $\pi/4$ is dimensionless and stays outside the action divided by $\hbar$. The two WKB forms apply away from the immediate vicinity of the turning point.

A bound state in a smooth well has two turning points. Denote the left and right turning points by $\mechanical{b}$ and $\mechanical{a}$, respectively. In the symmetric sketch $\mechanical{b}=-\mechanical{a}$.

![[Kyle Kabasares - Quantum Mechanics II - Two turning points in a well.png|**Fig. 27** A horizontal energy line intersects the potential at the two classical turning points.]]

Matching the two continuations in the allowed region requires

$$
\frac{C}{\sqrt{\mechanical{p}(\mechanical{x})}}
\cos\left[\frac{1}{\hbar}\int_{\mechanical{x}}^{\mechanical{a}}\mechanical{p}(\mechanical{x}')\,d\mechanical{x}'-\frac{\pi}{4}\right]
=
\frac{C'}{\sqrt{\mechanical{p}(\mechanical{x})}}
\cos\left[\frac{1}{\hbar}\int_{\mechanical{b}}^{\mechanical{x}}\mechanical{p}(\mechanical{x}')\,d\mechanical{x}'-\frac{\pi}{4}\right].
$$

The amplitudes satisfy $\lvert C\rvert=\lvert C'\rvert$. The two phases vary oppositely with $\mechanical{x}$, so their sum must be an integer multiple of $\pi$, with the sign of $C'/C$ accounting for odd multiples. This gives the WKB quantization condition

$$
\int_{\mechanical{b}}^{\mechanical{a}}\mechanical{p}(\mechanical{x})\,d\mechanical{x}
=\pi\hbar\left(n+\frac12\right),
\qquad n=0,1,2,\ldots.
$$

The final handwritten line suppresses the $\hbar$ carried by the action integral.

##### Additional quantum mechanics notes on unitarity

A state evolves as $\lvert\Psi(\mechanical{t})\rangle=U(\mechanical{t})\lvert\Psi(0)\rangle$, and its dual is $\langle\Psi(\mechanical{t})\rvert=\langle\Psi(0)\rvert U^\dagger(\mechanical{t})$. If two states are orthogonal initially, unitary evolution preserves their zero overlap:

$$
\langle\Psi(\mechanical{t})\mid\Phi(\mechanical{t})\rangle
=\langle\Psi(0)\lvert U^\dagger(\mechanical{t})U(\mechanical{t})\rvert\Phi(0)\rangle
=0.
$$

More generally, if evolution preserves both the orthogonality and normalization of a complete orthonormal basis, then

$$
\langle i\lvert U^\dagger(\mechanical{t})U(\mechanical{t})\rvert j\rangle
=\delta_{ij},
\qquad
U^\dagger(\mechanical{t})U(\mechanical{t})=I.
$$

**Example 4.1.** For arbitrary states $\lvert A\rangle$ and $\lvert B\rangle$, the inner product of their evolved states is

$$
\langle A\lvert U^\dagger U\rvert B\rangle
=\langle A\lvert I\rvert B\rangle
=\langle A\mid B\rangle.
$$

Interchanging $A$ and $B$ gives the conjugate overlap, which is preserved as well. The notes call this conservation of overlaps.

Let $U(\mechanical{\epsilon})$ be the evolution over a short time $\mechanical{\epsilon}$, with $U(0)=I$. Expanding a differentiable evolution to first order gives

$$
U(\mechanical{\epsilon})=I-\frac{i\mechanical{\epsilon}}{\hbar}H+O(\mechanical{\epsilon}^2),
\qquad
U^\dagger(\mechanical{\epsilon})=I+\frac{i\mechanical{\epsilon}}{\hbar}H^\dagger+O(\mechanical{\epsilon}^2).
$$

Therefore,

$$
U^\dagger(\mechanical{\epsilon})U(\mechanical{\epsilon})
=I+\frac{i\mechanical{\epsilon}}{\hbar}(H^\dagger-H)+O(\mechanical{\epsilon}^2).
$$

Unitarity of $U$ requires the coefficient of $\mechanical{\epsilon}$ to vanish. The resulting condition is $H^\dagger=H$, so the generator $H$ is Hermitian. The box in the handwriting assigns both properties to $H$. The two conditions in the calculation apply to $U$ and $H$, respectively.

Using the same expansion on a state yields

$$
\lim_{\mechanical{\epsilon}\to0}
\frac{\lvert\Psi(\mechanical{t}+\mechanical{\epsilon})\rangle-\lvert\Psi(\mechanical{t})\rangle}{\mechanical{\epsilon}}
=-\frac{i}{\hbar}H\lvert\Psi(\mechanical{t})\rangle.
$$

This is the time-dependent Schrödinger equation:

$$
i\hbar\frac{d}{d\mechanical{t}}\lvert\Psi(\mechanical{t})\rangle
=H\lvert\Psi(\mechanical{t})\rangle.
$$

##### Expectation values

Expand a normalized state $\lvert A\rangle$ in an orthonormal eigenbasis of an observable $L$:

$$
\lvert A\rangle=\sum_i\alpha_i\lvert\lambda_i\rangle,
\qquad
L\lvert\lambda_i\rangle=\lambda_i\lvert\lambda_i\rangle.
$$

Then $L\lvert A\rangle=\sum_i\alpha_i\lambda_i\lvert\lambda_i\rangle$. Taking the inner product with $\langle A\rvert$ and using orthonormality gives

$$
\begin{aligned}
\langle A\lvert L\rvert A\rangle
&=\sum_{i,j}\alpha_j^*\alpha_i\lambda_i\langle\lambda_j\mid\lambda_i\rangle\\
&=\sum_i\lambda_i\lvert\alpha_i\rvert^2
=\langle L\rangle.
\end{aligned}
$$

The weight $\lvert\alpha_i\rvert^2$ is the probability associated with the $i$th eigenvector. For a degenerate outcome, sum these weights over all eigenvectors with that eigenvalue. The expectation value is the matrix element of the observable between the bra and ket of the state.

A global phase $e^{i\theta}$ leaves the physical state unchanged. It multiplies the ket and its complex conjugate multiplies the bra, so the factors cancel in the expectation value.

## Source

Kyle Kabasares, *Quantum Mechanics II (Physics 215B, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\hbar$ | $\unit{J\,s}$ | Reduced Planck constant | Planck constant divided by $2\pi$. |
| $\mechanical{t}$, $\mechanical{t}_0$, $\Delta\mechanical{t}$ | $\unit{s}$ | Time | Observation time, initial or switching time, and elapsed time. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Particle mass. |
| $\mechanical{x}$ | $\unit{m}$ | Position | Displacement along the oscillator axis. |
| $\mechanical{p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | Momentum along the oscillator axis. |
| $\energy{E}$, $\energy{E}_0$ | $\unit{J}$ | Energy eigenvalue | Energy of an eigenstate, including the common energy of a degenerate subspace. |
| $\mechanical{F}$, $\mechanical{F}_0$ | $\unit{N}$ | Linear driving coefficient | Coefficient of displacement in the driving potential, equal to the negative of the applied force. |
| $\mechanical{x}_0$ | $\unit{m}$ | Shifted equilibrium position | Minimum of the oscillator potential after adding the linear term. |
| $E$ | $\unit{N}$ | Linear perturbation coefficient | Electric field strength multiplied by the signed charge, with the sign set by the potential convention. |
| $A$, $B$ | $\unit{s^{-1}}$ | Mode emission and absorption coefficients | Spontaneous rate and induced transition rate per photon for a single resonant mode. |
