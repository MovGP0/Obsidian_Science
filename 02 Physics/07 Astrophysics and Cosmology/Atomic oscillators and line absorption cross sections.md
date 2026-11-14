---
title: "Atomic oscillators and line absorption cross sections"
---

> [!TLDR]
> Use a driven atomic oscillator to derive resonant absorption and connect oscillator strengths to Einstein coefficients.

## Worked lecture material

The line-transfer expressions describe an isolated bound–bound transition. The Einstein coefficients and the line profile determine the radiative terms for a two-level atom, given the level populations. For more nonoverlapping lines, sum their absorption and emission contributions. Collisions can also cause upward and downward transitions and affect the populations used in the radiative rates.

The lecture recaps the line-transfer equation with the stimulated-emission correction and spontaneous-emission term.

##### Classical model of an atom

The notes refer to Rybicki and Lightman, section 3.6, and to Jackson. Model a bound electron as oscillating about the nucleus. The resulting electric dipole acts as a damped oscillator driven by an external electromagnetic field.

![[Kyle Kabasares - Radiative Transfer - Classical electron oscillator.png|**Fig. 84** The sketch represents the bound electron by an oscillator in an electromagnetic wave.]]

##### Case 1. Undriven oscillator (spontaneous emission)

Before including radiation damping, the equation of motion is $\ddot{\vec{\mechanical{r}}}+\signal{\omega}_0^2\vec{\mechanical{r}}=0$. Choosing zero initial phase gives $\vec{\mechanical{r}}=\vec{\mechanical{r}}_0\cos(\signal{\omega}_0t)$.

The accelerating dipole radiates power $\energy{L}=2\electric{e}^2\mechanical{a}^2/(3c^3)$, where $\vec{\mechanical{a}}=\ddot{\vec{\mechanical{r}}}$. This energy loss damps the oscillation. Over a cycle of duration $T_0$, the work by the radiation reaction force equals the negative of the radiated energy.

$$
\int_t^{t+T_0}\vec{\mechanical{F}}_{\mathrm{rad}}\cdot\vec{\mechanical{v}}\,dt
=-\frac{2\electric{e}^2}{3c^3}\int_t^{t+T_0}
\dot{\vec{\mechanical{v}}}\cdot\dot{\vec{\mechanical{v}}}\,dt.
$$

The next step integrates the right side by parts.

Integration by parts gives

$$
-\frac{2\electric{e}^2}{3c^3}
\left[\vec{\mechanical{v}}\cdot\dot{\vec{\mechanical{v}}}\Big|_t^{t+T_0}
-\int_t^{t+T_0}\vec{\mechanical{v}}\cdot\ddot{\vec{\mechanical{v}}}\,dt\right].
$$

In the weak-damping approximation the motion is nearly periodic over a cycle, so the boundary term is negligible. The corresponding radiation reaction force inferred from the cycle work is

$$
\vec{\mechanical{F}}_{\mathrm{rad}}=\frac{2\electric{e}^2}{3c^3}\ddot{\vec{\mechanical{v}}}.
$$

The derivation from work constrains the component along the velocity. The notes assume the perpendicular component is zero for the one-dimensional oscillator. Adding the restoring force gives

$$
\mechanical{m}_e\ddot{\vec{\mechanical{r}}}
=-\mechanical{m}_e\signal{\omega}_0^2\vec{\mechanical{r}}
+\frac{2\electric{e}^2}{3c^3}\ddot{\vec{\mechanical{v}}}.
$$

The timescale $2\electric{e}^2/(3\mechanical{m}_ec^3)\sim\quantity{10^{-23}}{s}$ is small, so evaluate the radiation term perturbatively using the undamped solution $\vec{\mechanical{r}}=\vec{\mechanical{r}}_0\cos(\signal{\omega}_0t)$.

For the undamped solution,

$$
\begin{aligned}
\vec{\mechanical{v}}&=-\signal{\omega}_0\vec{\mechanical{r}}_0\sin(\signal{\omega}_0t),\\
\dot{\vec{\mechanical{v}}}&=-\signal{\omega}_0^2\vec{\mechanical{r}}_0\cos(\signal{\omega}_0t),\\
\ddot{\vec{\mechanical{v}}}&=\signal{\omega}_0^3\vec{\mechanical{r}}_0\sin(\signal{\omega}_0t)
=-\signal{\omega}_0^2\vec{\mechanical{v}}.
\end{aligned}
$$

The force $\vec{\mechanical{F}}_{\mathrm{rad}}\propto\ddot{\vec{\mechanical{v}}}$ is the **radiation reaction force**, also called the Abraham–Lorentz force. The third derivative of position can lead to spurious solutions if treated as an exact equation of motion. With only the radiation reaction force and $C=2\electric{e}^2/(3c^3)$, Newton's law gives $\mechanical{m}\dot{\vec{\mechanical{v}}}-C\ddot{\vec{\mechanical{v}}}=0$. It admits constant velocity and an unphysical exponentially growing velocity proportional to $e^{t/(C/\mechanical{m})}$. Treat the radiation reaction as a small perturbation, so the change in dipole motion over one cycle is small.

Substituting $\ddot{\vec{\mechanical{v}}}\simeq-\signal{\omega}_0^2\vec{\mechanical{v}}$ gives the weakly damped oscillator equation and its approximate solution.

$$
\begin{aligned}
\ddot{\vec{\mechanical{r}}}+\Gamma\dot{\vec{\mechanical{r}}}+\signal{\omega}_0^2\vec{\mechanical{r}}&=0,\\
\vec{\mechanical{r}}(t)&\simeq\vec{\mechanical{r}}_0e^{-\Gamma t/2}\cos(\signal{\omega}_0t),\\
\Gamma&=\frac{2\electric{e}^2\signal{\omega}_0^2}{3\mechanical{m}_ec^3}
=\frac{8\pi^2\electric{e}^2\signal{\nu}_0^2}{3\mechanical{m}_ec^3}.
\end{aligned}
$$

Here $\Gamma$ sets the decay rate and is related to the Einstein $A$ coefficient. The notes give $\Gamma\simeq2.5\times10^{-22}(\signal{\nu}_0/\unit{Hz})^2\,\unit{s^{-1}}$. For the hydrogen Balmer $\mathrm{H}\alpha$ line, $\signal{\lambda}_0=\quantity{6563}{\mathring{A}}$ and $\signal{\nu}_0=c/\signal{\lambda}_0$. The classical estimate is $\quantity{5\times10^7}{s^{-1}}$, compared with the quoted quantum result $\quantity{4.4\times10^7}{s^{-1}}$.

##### Case 2. Driven oscillator (absorption)

Place the model atom in an external electric field with complex representation $\vec{\electric{E}}_0e^{i\signal{\omega}t}$. Add the driving force to the restoring and damping forces. For an electron, take the drive to be $-\electric{e}\vec{\electric{E}}_0e^{i\signal{\omega}t}$, with its sign absorbable into the drive phase. The notes write the force with a plus sign.

The damping constant $\Gamma$ sets the dipole field envelope $e^{-\Gamma t/2}$. At a fixed observing point, the radiated electric field has the time dependence $\vec{\electric{E}}_{\mathrm{rad}}(t)\propto e^{-\Gamma t/2}\cos(\signal{\omega}_0t)$ in the weak-damping approximation. The handwritten exponent on the field appears positive, while the oscillator solution and surrounding description specify decay. The Poynting flux is proportional to the squared field, so the cycle-averaged power drops by a factor of $e$ after time $\Gamma^{-1}$.

For the driven oscillator, try the real part of $\vec{C}e^{i\signal{\omega}t}$. Using the drive sign of the source, the steady-state displacement is

$$
\vec{\mechanical{r}}(t)
=\operatorname{Re}\left[
\frac{(\electric{e}\vec{\electric{E}}_0/\mechanical{m}_e)e^{i\signal{\omega}t}}
{\signal{\omega}_0^2-\signal{\omega}^2+i\Gamma\signal{\omega}}\right].
$$

The acceleration is $\vec{\mechanical{a}}=-\signal{\omega}^2\vec{\mechanical{r}}$, and Larmor's formula gives the scattered luminosity $\energy{L}=2\electric{e}^2|\vec{\mechanical{a}}|^2/(3c^3)$. This will be used to compute the cross section.

Rationalizing the denominator in the driven solution gives the time-dependent real factor

$$
\frac{(\signal{\omega}_0^2-\signal{\omega}^2)\cos(\signal{\omega}t)
+\Gamma\signal{\omega}\sin(\signal{\omega}t)}
{(\signal{\omega}_0^2-\signal{\omega}^2)^2+\Gamma^2\signal{\omega}^2}.
$$

Substitute the resulting acceleration into Larmor's formula. Averaging over a cycle gives $1/2$ for each squared trigonometric function and zero for their cross term.

$$
\langle\energy{L}\rangle
=\frac{\electric{e}^4\electric{E}_0^2}{3\mechanical{m}_e^2c^3}
\frac{\signal{\omega}^4}{(\signal{\omega}^2-\signal{\omega}_0^2)^2+\Gamma^2\signal{\omega}^2}.
$$

The simplified handwritten denominator appears to omit squares that are present in the averaging step. The cross section is defined through $\langle\energy{L}\rangle=\mechanical{\sigma}\langle\energy{S}\rangle$. In Gaussian CGS the time-averaged incident Poynting flux is

$$
\langle\energy{S}\rangle
=\frac{c\electric{E}_0^2}{4\pi}\langle\cos^2(\signal{\omega}t)\rangle
=\frac{c\electric{E}_0^2}{8\pi}.
$$

#### Cross section near resonance

Integrate the line cross section over frequency. With $x=4\pi(\signal{\nu}-\signal{\nu}_0)/\Gamma$,

$$
\int_0^\infty \mechanical{\sigma}(\signal{\nu})\,d\signal{\nu}
\simeq \frac{\pi\electric{e}^2}{\mechanical{m}_e c}\frac{1}{\pi}
\int_{-\infty}^\infty\frac{dx}{1+x^2}
=\frac{\pi\electric{e}^2}{\mechanical{m}_e c}.
$$

At $\signal{\nu}=0$, $x=-4\pi\signal{\nu}_0/\Gamma$. The estimates $\Gamma\sim\quantity{10^8}{s^{-1}}$ and $\signal{\nu}_0\sim\quantity{10^{15}}{s^{-1}}$ justify extending the lower limit of the line integral to $-\infty$. Substitute $x=\tan\theta$ and $dx=\sec^2\theta\,d\theta$ to obtain $\int_{-\pi/2}^{\pi/2}d\theta=\pi$.

The oscillator cross section is the mean radiated power divided by the incident energy flux,

$$
\mechanical{\sigma}(\signal{\omega})
=\frac{\langle\energy{L}\rangle}{c\electric{E}_0^2/(8\pi)}
=\frac{8\pi\electric{e}^4}{3\mechanical{m}_e^2 c^4}
\frac{\signal{\omega}^4}{(\signal{\omega}^2-\signal{\omega}_0^2)^2+\Gamma^2\signal{\omega}^2}.
$$

Near resonance, $(\signal{\omega}^2-\signal{\omega}_0^2)^2=(\signal{\omega}-\signal{\omega}_0)^2(\signal{\omega}+\signal{\omega}_0)^2\simeq4\signal{\omega}_0^2(\signal{\omega}-\signal{\omega}_0)^2$. Replacing the other smooth frequency factors by their values at $\signal{\omega}_0$ gives the Lorentzian used in the line integral.

Substitute $\Gamma=2\electric{e}^2\signal{\omega}_0^2/(3\mechanical{m}_ec^3)$ into the near-resonance cross section. In angular frequency and ordinary frequency, respectively,

$$
\begin{aligned}
\mechanical{\sigma}(\signal{\omega})
&=\frac{\pi\electric{e}^2}{\mechanical{m}_ec}
\frac{\Gamma}{(\signal{\omega}-\signal{\omega}_0)^2+(\Gamma/2)^2},\\
\mechanical{\sigma}(\signal{\nu})
&=\frac{\pi\electric{e}^2}{\mechanical{m}_ec}
\frac{\Gamma/(4\pi^2)}{(\signal{\nu}-\signal{\nu}_0)^2+(\Gamma/(4\pi))^2},
\qquad \signal{\nu}=\frac{\signal{\omega}}{2\pi}.
\end{aligned}
$$

The Lorentzian describes the frequency dependence near resonance. The integrated classical line cross section is $\mechanical{\sigma}_{\mathrm{classical}}=\pi\electric{e}^2/(\mechanical{m}_ec)$, in $\unit{cm^2\,Hz}$. The absorption damping rate $\Gamma_{\mathrm{abs}}$ measures how efficiently energy is removed from the incident beam.

- Online evaluations.
- Final exam listed as Thursday, June 11, 10:30–12:30, at HERE (as written).

#### Absorption oscillator strength

The classical frequency-integrated cross section, $\mechanical{\sigma}_{\mathrm{classical}}=\pi\electric{e}^2/(\mechanical{m}_e c)$, measures the efficiency of energy removal from the incident beam. Its units are $\unit{cm^2\,Hz}$. The classical result assigns the same absorption or scattering efficiency to every atomic transition. Quantum mechanics gives different cross sections for different transitions.

Introduce the absorption oscillator strength $f_{\ell\to u}$ to generalize the classical oscillator model of an excited atom:

$$
\mechanical{\sigma}_{\ell\to u}=\frac{\pi\electric{e}^2}{\mechanical{m}_e c}f_{\ell\to u}.
$$

The dimensionless $f_{\ell\to u}$ is the effective number of classical oscillators contributing to the transition. For strong lines such as H$\alpha$, it is of order unity. For weak lines, $f_{\ell\to u}\ll1$.

Exam reminders were to bring a calculator and answer in CGS units.

For the strongest transitions the integrated dipole cross section is a general result, independent of the detailed frequency dependence of the incident radiation. The dipole approximation must apply, radiative losses must cause the normal modes to decay, and at high frequency the particle must respond as if free. In the oscillator formula the ratio $\signal{\omega}^4/[(\signal{\omega}^2-\signal{\omega}_0^2)^2+\Gamma^2\signal{\omega}^2]$ approaches unity as $\signal{\omega}\to\infty$, leaving the Thomson cross section $\mechanical{\sigma}_T=8\pi\electric{e}^4/(3\mechanical{m}_e^2c^4)$.

#### Oscillator strength and Einstein coefficients

The photoabsorption coefficient is

$$
\signal{\alpha}_{\signal{\nu}}^{\mathrm{photoabs}}=
n_\ell B_{\ell\to u}\frac{h\signal{\nu}_{\ell u}}{4\pi}\phi(\signal{\nu})
=n_\ell\mechanical{\sigma}_{\ell\to u}(\signal{\nu}).
$$

Integrate over frequency using $\int_0^\infty\phi(\signal{\nu})\,d\signal{\nu}=1$:

$$
\mechanical{\sigma}_{\ell\to u}
=B_{\ell\to u}\frac{h\signal{\nu}_{\ell u}}{4\pi}
=\frac{\pi\electric{e}^2}{\mechanical{m}_ec}f_{\ell\to u}.
$$

$$
B_{\ell\to u}=\frac{4\pi^2\electric{e}^2}{\mechanical{m}_ec}\frac{f_{\ell\to u}}{h\signal{\nu}_{\ell u}}.
$$

Stimulated emission contributes negative absorption, $\signal{\alpha}_{\signal{\nu}}^{\mathrm{stim}}=-n_u B_{u\to\ell}h\signal{\nu}_{\ell u}\phi(\signal{\nu})/(4\pi)$. Its integrated cross section per atom is $\mechanical{\sigma}_{u\to\ell}=-B_{u\to\ell}h\signal{\nu}_{\ell u}/(4\pi)$. The emission oscillator strength $f_{u\to\ell}$ is signed.

$$
B_{u\to\ell}=\frac{4\pi^2\electric{e}^2}{\mechanical{m}_ec}\frac{-f_{u\to\ell}}{h\signal{\nu}_{\ell u}}.
$$

The Einstein relation $g_\ell B_{\ell\to u}=g_u B_{u\to\ell}$ gives $g_\ell f_{\ell\to u}=-g_u f_{u\to\ell}$. The spontaneous emission coefficient is

$$
A_{u\to\ell}=\frac{2h\signal{\nu}_{\ell u}^3}{c^2}B_{u\to\ell}
=\frac{8\pi^2\electric{e}^2}{\mechanical{m}_ec^3}\signal{\nu}_{\ell u}^2\frac{g_\ell}{g_u}f_{\ell\to u}.
$$

The absorption oscillator strength determines all three coefficients. The factor $c^3$ follows from the displayed Einstein relations. The source's boxed expression has $c^2$.

#### Quantum oscillator strengths

Time-dependent perturbation theory for a quantum atom in a classical radiation field gives the absorption oscillator strength in terms of electric dipole matrix elements (Rybicki and Lightman, Eq. 10.29b):

$$
f_{\ell\to u}=\frac{8\pi^2\mechanical{m}_e}{3\electric{e}^2 h^2}
\frac{\energy{E}_u-\energy{E}_\ell}{g_\ell}
\sum_{g_\ell,g_u}\lvert\langle\ell|\electric{\boldsymbol{d}}|u\rangle\rvert^2.
$$

For multiple electrons, $\electric{\boldsymbol{d}}=-\electric{e}\sum_{i=1}^N\mechanical{\boldsymbol{r}}_i$. The sum covers the degenerate sublevels. The handwriting uses $\boldsymbol{r}$ in the matrix element and shows one power of $h$. The expression here uses the electric dipole moment and $h^2$, which make $f_{\ell\to u}$ dimensionless.

For hydrogen-like ions, Kramers' approximation gives (Bethe and Salpeter, 1957)

$$
f_{\ell\to u}
=\frac{2^6}{3\sqrt{3}\pi}\frac{1}{g_\ell}
\frac{1}{(1/n_\ell^2-1/n_u^2)^3}\frac{g_{\mathrm{I}}}{n_\ell^3 n_u^3},
$$

where $g_{\mathrm{I}}$ is the Gaunt factor. For fixed lower level $\ell$, the oscillator strength drops rapidly as the upper level rises. The exact result for the hydrogen Lyman series has $f_{1\to n}\propto n^5(n-1)^{2n-4}/(n+1)^{2n+4}$ (Rybicki and Lightman, Eq. 10.46).

## Source

Kyle Kabasares, *Radiative Transfer in Astrophysics (Physics 240C, UC Irvine 2019)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{L}$ | $\unit{erg\cdot s^{-1}}$ | Luminosity | Total radiant energy emitted per unit time. |
| $\energy{E}$ | $\unit{erg}$ | Radiant energy | Energy emitted by the source. |
| $t$ | $\unit{s}$ | Time | Elapsed time used to define the emission rate. |
| $\alpha$ | $1$ | Fine-structure constant | Dimensionless electromagnetic coupling constant. |
| $\energy{S}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}}$ | Incident energy flux | Electromagnetic energy incident per unit time and area. |
| $\phi(\signal{\nu})$ | $\unit{Hz^{-1}}$ | Normalized line profile | Frequency distribution of a line, normalized to unit integral. |
| $\Gamma$ | $\unit{s^{-1}}$ | Radiative damping rate | Energy decay rate in the weakly damped classical oscillator model. |
| $f_{\ell\to u}$ | — | Absorption oscillator strength | Scales the integrated classical cross section for a transition from the lower to the upper level. |
| $f_{u\to\ell}$ | — | Emission oscillator strength | Signed oscillator strength for stimulated emission. |
| $b$ | $\unit{cm\,s^{-1}}$ | Doppler parameter | Thermal speed scale for the line profile. |
