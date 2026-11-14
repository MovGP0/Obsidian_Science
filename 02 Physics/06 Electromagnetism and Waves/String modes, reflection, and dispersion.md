---
title: "String modes, reflection, and dispersion"
---

> [!TLDR]
> Boundary conditions select standing-wave modes, and impedance differences split a traveling wave into reflected and transmitted parts.

## Fixed ends select a discrete spectrum

Assume small transverse slopes on a uniform flexible string under constant tension $\mechanical{T}$. Force balance on a short segment gives $u_{tt}=\signal{v}^{\,2}u_{xx}$ with $\signal{v}=\sqrt{\mechanical{T}/\mechanical{\mu}}$, where $\mechanical{\mu}$ is the mass per length. For endpoints fixed a distance $\mechanical{L}$ apart, both displacements vanish. The spatial factors are $\sin(n\pi\mechanical{x}/\mechanical{L})$ and the angular frequencies are $\signal{\omega}_n=n\pi\signal{v}/\mechanical{L}$. The initial displacement sets the sine coefficients and the initial velocity sets the other independent set of coefficients for the time factors. A clamp at the midpoint permits only even $n$ among the original modes because they already have a node there.

## Match both sides of a junction

Join two semi-infinite strings with the same tension, linear densities $\mechanical{\mu}_1,\mechanical{\mu}_2$, and negligible junction mass. At one angular frequency, continuity gives $A_i+A_r=A_t$ for the complex displacement amplitudes. Transverse force balance requires continuity of tension times slope. The reflected wave travels in the opposite direction, so this condition is $Z_1(A_i-A_r)=Z_2 A_t$, with wave impedance $Z_j=\mechanical{T}/\signal{v}_j$. Solving the two equations gives

$$
\frac{A_r}{A_i}=\frac{Z_1-Z_2}{Z_1+Z_2},\qquad
\frac{A_t}{A_i}=\frac{2Z_1}{Z_1+Z_2}.
$$

When the second impedance is larger the reflected displacement reverses phase. When the impedances are equal there is no reflection. Average wave power at fixed frequency is proportional to impedance times squared amplitude, so the reflected and transmitted power fractions add to one. This also checks the limit as the second impedance tends to infinity, where the displacement at the junction tends to zero.

## Dispersion changes a pulse

An ideal string has $\signal{\omega}=\signal{v}\signal{k}$ for positive wave number $\signal{k}$. Its phase velocity $\signal{\omega}/\signal{k}$ and narrowband group velocity $d\signal{\omega}/d\signal{k}$ are equal. If the propagation law is nonlinear in $\signal{k}$, different Fourier components can acquire enough relative phase for a pulse to change shape. Compare the travel time of the peaks of two narrowband wave packets to test the dependence on frequency. For the related forced-oscillator model, see [[04.07 Driven Oscillator and Resonance|driven oscillators and resonance]].

## Sources

Source material from Kyle Kabasares’s UC Merced notes. [[Fixed-string normal modes and Fourier coefficients#Continuous systems|Physics 122]], [[Wave pulses, interfaces, and dispersive propagation|Physics 122]], [[Mechanical oscillation and traveling-wave problems#) — Energy of a mass–spring oscillator|Physics 8]], [[The wave equation on a line and a finite string#Vibrating string with fixed ends|Math 126]].

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $u,A_i,A_r,A_t$ | $\unit{m}$ | Transverse displacement and amplitudes | String displacement and complex amplitudes at the junction. |
| $\mechanical{x},\mechanical{L}$ | $\unit{m}$ | Position and length | Distance along the string and fixed-end separation. |
| $t$ | $\unit{s}$ | Time | Independent time variable. |
| $\mechanical{T}$ | $\unit{N}$ | Tension | Common static tension. |
| $\mechanical{\mu},\mechanical{\mu}_1,\mechanical{\mu}_2$ | $\unit{kg\,m^{-1}}$ | Linear mass density | Mass per unit length of a string. |
| $\signal{v},\signal{v}_j,\signal{\omega}/\signal{k},d\signal{\omega}/d\signal{k}$ | $\unit{m\,s^{-1}}$ | Propagation speeds | String wave speed, phase velocity, and group velocity. |
| $\signal{\omega},\signal{\omega}_n$ | $\unit{rad\,s^{-1}}$ | Angular frequency | Frequency of a traveling wave or standing mode. |
| $\signal{k}$ | $\unit{rad\,m^{-1}}$ | Wave number | Spatial angular frequency. |
| $Z_j$ | $\unit{kg\,s^{-1}}$ | String wave impedance | Tension divided by wave speed. |
