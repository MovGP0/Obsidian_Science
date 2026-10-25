---
title: "Second-Order Linear Equations"
---

> [!TLDR]
> A second-order linear equation with constant coefficients is solved through its characteristic equation. Its roots determine exponential, critically damped, or oscillating solutions.

The most important equations in physics are second order. Consider

$$
ay''+by'+cy=0,\qquad a,b,c\in\mathbb{R},\quad a\ne0.
$$

Seek a solution of the form $y=\mathrm{e}^{rx}$. Substitution gives

$$
(ar^2+br+c)\mathrm{e}^{rx}=0
\quad\Longrightarrow\quad ar^2+br+c=0.
$$

This is the **characteristic equation**. The solutions depend on the sign of the discriminant $\Delta=b^2-4ac$.

| Case | Roots | General solution |
| --- | --- | --- |
| $\Delta>0$ | Distinct $r_1,r_2\in\mathbb{R}$. | $y=C_1\mathrm{e}^{r_1x}+C_2\mathrm{e}^{r_2x}$. |
| $\Delta=0$ | Repeated real root $r$. | $y=(C_1+C_2x)\mathrm{e}^{rx}$. |
| $\Delta<0$ | $r=\alpha\pm\mathrm{i}\beta$, $\beta>0$. | $y=\mathrm{e}^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)$. |

For initial conditions $y(x_0)=y_0$ and $y'(x_0)=v_0$, determine $C_1$ and $C_2$ by solving a $2\times2$ system.

## Example — Damped harmonic oscillator

The equation is

$$
\signal{y}''+2\signal{\gamma}\signal{y}'+\signal{\omega}_0^2\signal{y}=0.
$$

The derivatives in this example are with respect to time. The characteristic equation is

$$
r^2+2\signal{\gamma}r+\signal{\omega}_0^2=0,
\qquad r=-\signal{\gamma}\pm\sqrt{\signal{\gamma}^2-\signal{\omega}_0^2}.
$$

### Underdamped case

For $\signal{\gamma}<\signal{\omega}_0$, the discriminant is negative. Let $\signal{\beta}=\sqrt{\signal{\omega}_0^2-\signal{\gamma}^2}$. Then

$$
\begin{aligned}
\signal{y}(\signal{t})
&=\mathrm{e}^{-\signal{\gamma}\signal{t}}
\bigl(C_1\cos(\signal{\beta}\signal{t})+C_2\sin(\signal{\beta}\signal{t})\bigr)\\
&=\signal{A}\mathrm{e}^{-\signal{\gamma}\signal{t}}
\cos(\signal{\beta}\signal{t}+\signal{\phi}).
\end{aligned}
$$

The amplitude decreases with time. The angular frequency is $\signal{\beta}<\signal{\omega}_0$: damping reduces the oscillation frequency.

### Critically damped case

For $\signal{\gamma}=\signal{\omega}_0$,

$$
\signal{y}(\signal{t})=(C_1+C_2\signal{t})\mathrm{e}^{-\signal{\gamma}\signal{t}}.
$$

The system returns to equilibrium without oscillation. This is the fastest decay among the nonoscillating damping cases.

### Overdamped case

For $\signal{\gamma}>\signal{\omega}_0$, the solution contains two real, decaying exponential terms. There is no oscillation.

### Undamped case

For $\signal{\gamma}=0$,

$$
\signal{y}(\signal{t})
=C_1\cos(\signal{\omega}_0\signal{t})+C_2\sin(\signal{\omega}_0\signal{t}).
$$

This is a pure oscillation: the **classical harmonic oscillator**.

> [!note]
> The damping classification assumes $\signal{\omega}_0>0$ and $\signal{\gamma}\ge0$. The comparison of nonoscillating decay rates uses a fixed natural frequency. The coefficients $a,b,c$ and the symbols $\alpha,\beta$ in the general characteristic-root table are mathematical parameters; their use is separate from the physical oscillator parameters.

## Example — The Schrödinger equation as an ODE for a free particle

For potential energy $\energy{V}=0$, the time-independent Schrödinger equation is

$$
-\frac{\energy{\hbar}^2}{2\mechanical{m}}
\frac{\mathrm{d}^2\signal{\psi}}{\mathrm{d}\mechanical{x}^2}
=\energy{E}\signal{\psi}.
$$

Rewrite it as

$$
\signal{\psi}''=-\frac{2\mechanical{m}\energy{E}}{\energy{\hbar}^2}\signal{\psi}
=-\signal{k}^2\signal{\psi},
\qquad\signal{k}=\frac{\sqrt{2\mechanical{m}\energy{E}}}{\energy{\hbar}},\quad\energy{E}>0.
$$

The characteristic equation is $r^2+\signal{k}^2=0$, with roots $r=\pm\mathrm{i}\signal{k}$. Thus,

$$
\signal{\psi}(\mechanical{x})
=C_1\mathrm{e}^{\mathrm{i}\signal{k}\mechanical{x}}+C_2\mathrm{e}^{-\mathrm{i}\signal{k}\mechanical{x}}
=A\cos(\signal{k}\mechanical{x})+B\sin(\signal{k}\mechanical{x}).
$$

Both forms are valid. The exponential form is more useful in quantum mechanics because $\mathrm{e}^{\mathrm{i}\signal{k}\mechanical{x}}$ is a momentum eigenfunction with eigenvalue $\energy{\hbar}\signal{k}$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{y}(\signal{t})$ | — | Oscillating variable | The dynamical variable of the damped oscillator. Its unit depends on the system. |
| $\signal{A}$ | — | Oscillation amplitude | The amplitude coefficient in the damped cosine form. |
| $\signal{t}$ | $\unit{s}$ | Time | The independent variable of the oscillator. |
| $\signal{\gamma}$ | $\unit{s^{-1}}$ | Damping coefficient | The exponential amplitude-decay rate. |
| $\signal{\omega}_0$ | $\unit{rad\,s^{-1}}$ | Natural angular frequency | The oscillator's undamped angular frequency. |
| $\signal{\beta}$ | $\unit{rad\,s^{-1}}$ | Damped angular frequency | The angular frequency in the underdamped solution. |
| $\signal{\phi}$ | $\unit{rad}$ | Phase | The phase constant of the damped cosine form. |
| $\signal{\psi}$ | — | Wavefunction | The free particle's stationary wavefunction. Its unit depends on normalization. |
| $\mechanical{x}$ | $\unit{m}$ | Position | The spatial coordinate in the Schrödinger equation. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The free particle's mass. |
| $\energy{E}$ | $\unit{J}$ | Energy | The positive free-particle energy. |
| $\energy{V}$ | $\unit{J}$ | Potential energy | The potential energy, set to zero in the example. |
| $\signal{k}$ | $\unit{m^{-1}}$ | Wave number | The spatial oscillation coefficient of the wavefunction. |
| $\energy{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant in the wave equation and momentum eigenvalue. |
