---
title: "RC and RL response in time and frequency"
---

> [!TLDR]
> A resistor with a capacitor or inductor sets an exponential time scale and a frequency-dependent voltage ratio.

## Circuit models and step response

Take ideal components and a source that switches from zero to a constant $\electric{U}_0$ at time $t=0$. In the series RC circuit measure $\electric{U}_C$ across the capacitor. With an initially uncharged capacitor, the loop equation follows from $\electric{I}=\circuit{C}\,d\electric{U}_C/dt$:

$$
\circuit{R}\circuit{C}\frac{d\electric{U}_C}{dt}+\electric{U}_C=\electric{U}_0,\qquad
\electric{U}_C(t)=\electric{U}_0(1-e^{-t/(\circuit{R}\circuit{C})}).
$$

In the series RL circuit the inductive voltage is $\circuit{L}\,d\electric{I}/dt$. Starting with zero current gives $\electric{I}(t)=(\electric{U}_0/\circuit{R})(1-e^{-\circuit{R}t/\circuit{L}})$. The finite step preserves the capacitor voltage and the inductor current at switching because changing either instantaneously would require an impulse in its constitutive equation. In each circuit the step response reaches $1-e^{-1}$ of its final value at one time constant.

## Sinusoidal steady state

For an RC input proportional to $e^{i\signal{\omega}t}$, differentiation multiplies its steady response by $i\signal{\omega}$. The ratio $\signal{H_C}$ of capacitor to input voltage and the ratio $\signal{H_R}$ for an output across the resistor are

$$
\signal{H_C}(\signal{\omega})=\frac1{1+i\signal{\omega}\circuit{R}\circuit{C}},
\qquad
\signal{H_R}(\signal{\omega})=1-\signal{H_C}
=\frac{i\signal{\omega}\circuit{R}\circuit{C}}{1+i\signal{\omega}\circuit{R}\circuit{C}}.
$$

The low-frequency and high-frequency limits exchange between the two outputs. Their magnitudes both equal $1/\sqrt2$ at $\signal{\omega}_c=1/(\circuit{R}\circuit{C})$. Sweep the frequency at fixed input amplitude and compare the measured output-to-input ratio against this prediction. Source resistance or loading by the meter can shift the measured response, so measure input voltage at the actual circuit terminals. See [[Signal Processing#Basic Filters|the filter overview]].

## Sources

Source material from Kyle Kabasares’s UC Merced notes. [[Induction, circuit transients, and filter measurements#Magnetic flux and Faraday's law|Physics 9H]].

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\electric{U}_0,\electric{U}_C$ | $\unit{V}$ | Voltage | Applied step amplitude and capacitor voltage. |
| $\electric{I}$ | $\unit{A}$ | Current | Series circuit current. |
| $\circuit{R}$ | $\unit{\Omega}$ | Resistance | Series resistance. |
| $\circuit{C}$ | $\unit{F}$ | Capacitance | Capacitance of the capacitor. |
| $\circuit{L}$ | $\unit{H}$ | Inductance | Inductance of the inductor. |
| $t,\circuit{R}\circuit{C},\circuit{L}/\circuit{R}$ | $\unit{s}$ | Time and time constants | Time after switching and the RC and RL time constants. |
| $\signal{\omega},\signal{\omega}_c$ | $\unit{rad\,s^{-1}}$ | Angular frequency | Input angular frequency and RC cutoff. |
| $\signal{H_C},\signal{H_R}$ | 1 | Voltage ratios | Complex transfer functions for the capacitor and resistor outputs. |
