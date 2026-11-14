---
title: "Nuclear binding and radioactive decay"
---

> [!TLDR]
> Mass differences determine which decay channels are energetically possible, and decay data determine the rate at which nuclei disappear.

## Binding and decay energy

Use nuclear masses throughout. For a nucleus of mass $\mechanical{M}$ with $Z$ protons and $N_{\mathrm n}$ neutrons, its binding energy is

$$
\energy{B}=(Z\mechanical{m}_p+N_{\mathrm n}\mechanical{m}_n-\mechanical{M})\signal{c}^2.
$$

It is the energy required to separate the nucleus into free nucleons at rest. For a specified decay channel, compute $\energy{Q}=(\mechanical{M}-\sum_i\mechanical{m}_i)\signal{c}^2$, where the sum includes every massive final product. In the initial rest frame a positive $\energy{Q}$ is available to final kinetic energy and radiation. A nucleus can have positive binding energy relative to its free nucleons and still decay to fragments with lower total rest mass. The lecture uses beryllium-8 as an example in which two alpha particles have lower total rest mass than the parent. If you use tabulated atomic masses, account for electron masses and binding consistently with the channel.

## Activity and half-life

For a single nuclide with constant decay probability per unit time, the expected number of surviving nuclei obeys $d\mathcal N/dt=-\lambda\mathcal N$. Integrating gives $\mathcal N(t)=\mathcal N_0e^{-\lambda t}$ and half-life $t_{1/2}=(\ln 2)/\lambda$. The activity $\mathcal A=\lambda\mathcal N$ is the expected decay rate. A sample with activity $\quantity{1000}{Bq}$ and half-life $\quantity{1}{h}$ has $\mathcal N=\mathcal A t_{1/2}/\ln 2\simeq5.19\times10^6$ surviving parent nuclei. After two half-lives its expected activity is $\quantity{250}{Bq}$.

Detector counts estimate activity only after accounting for detection efficiency, branching fractions, and background. For a single parent with constant efficiency, the logarithm of the expected background-subtracted count rate is linear in time with slope $-\lambda$. A mixture of parents can give a curved result because its rate is a sum of exponentials. See [[Four-momentum and reaction thresholds]] for energy–momentum constraints in other processes.

## Sources

Source material from Kyle Kabasares’s UC Merced notes. [[Nuclear mass, decay channels, and dating problems#Radioactive decay|Physics 10]], [[Nuclear and quantum statistics review calculations#Nuclear physics review|Physics 10]].

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{M},\mechanical{m}_p,\mechanical{m}_n,\mechanical{m}_i$ | $\unit{kg}$ | Rest masses | Parent nucleus, free nucleons, and final products. |
| $Z,N_{\mathrm n},\mathcal N,\mathcal N_0$ | 1 | Counts | Proton and neutron numbers and expected surviving and initial nuclei. |
| $\energy{B},\energy{Q}$ | $\unit{J}$ | Energies | Binding energy and energy available in the decay. |
| $\signal{c}$ | $\unit{m\,s^{-1}}$ | Speed of light | Constant converting rest mass to rest energy. |
| $t,t_{1/2}$ | $\unit{s}$ | Times | Elapsed time and half-life. |
| $\lambda$ | $\unit{s^{-1}}$ | Decay constant | Probability rate per surviving parent. |
| $\mathcal A$ | $\unit{Bq}$ | Activity | Expected number of decays per second. |
