# Original physics exposition examples

These examples illustrate model-centered explanatory writing. They are original educational examples; no experimental measurements in them are claimed to be real.

## Example 1 — Pendulum: complete miniature article

### A typical formula-first version

> The pendulum period is \(T=2\pi\sqrt{L/g}\). The mass cancels, so it does not matter. For larger angles the formula becomes less accurate.

This is compact but leaves the causal model, the origin of the approximation, and a test of its limits unclear.

### Why does a longer pendulum swing more slowly?

Suspend a small weight from a thin string and displace it sideways. When released, it swings back toward the lowest point. The longer the string, the slower the oscillation appears. Which quantities determine the period—mass, string length, gravitational acceleration, or release angle?

**Prediction before calculation.** A simple test would compare two pendulums with equal length but different masses, and two with equal mass but different lengths. What do you expect?

**The physical model.** Represent the bob as a point mass \(m\) at distance \(L\) from a frictionless fixed pivot, with a massless, inextensible string and approximately uniform gravity \(g\). Ignore air resistance. Let the angular displacement \(\theta\) be positive to one side of the vertical. The model applies while the string remains taut.

**Choose a principle.** The tangential component of gravity supplies a restoring torque about the pivot. Newton's rotational equation gives

\[
\tau=-mgL\sin\theta=I\ddot\theta,
\qquad I=mL^2.
\]

The negative sign means that for positive \(\theta\), the torque acts toward equilibrium. Dividing by \(mL^2\) yields the nonlinear equation

\[
\boxed{\ddot\theta+\frac{g}{L}\sin\theta=0.}
\]

Observe that the mass cancelled because gravity and rotational inertia both scale with \(m\). This is a property of the ideal model, not a statement that air resistance or pivot friction never depend on mass.

**Where the usual formula comes from.** For \(|\theta|\ll1\) (radians), \(\sin\theta\approx\theta\). The resulting linear differential equation is

\[
\ddot\theta+\frac{g}{L}\theta=0.
\]

Its sinusoidal solutions oscillate with angular frequency \(\omega=\sqrt{g/L}\). Therefore the **small-angle approximation** to the period is

\[
\boxed{T_0=2\pi\sqrt{L/g}.}
\]

**Interpretation and checks.** The combination \(\sqrt{L/g}\) has units \(\sqrt{\mathrm{m}/(\mathrm{m}/\mathrm{s}^2)}=\mathrm{s}\), as required for a period. Doubling the length increases the predicted period by a factor \(\sqrt2\), not two. The mass is absent; gravity matters through \(g\).

**What would test this?** Measure the period over multiple oscillations for several masses and lengths, with a small initial angle. Estimate timing and length uncertainties, and look for systematic effects such as pivot drag. These are proposed measurements; no data are supplied here.

**Where does the model fail?** The exact nonlinear equation predicts an amplitude dependence. At moderate amplitudes \(\theta_0\), the period approximately follows

\[
T\approx T_0\left(1+\frac{\theta_0^2}{16}+O(\theta_0^4)\right),
\]

where \(\theta_0\) is measured in radians. Thus the commonly quoted amplitude-independent result is not exact. Large air drag, a massive rod, moving pivot, or large extension of the string require different models.

**Connection.** The same linear equation appears in electrical LC oscillators and vibrating systems after suitable variable changes. That is why the harmonic oscillator is a general model, not just a pendulum trick.

**Think before calculating.** If \(g\) became four times larger while length remained fixed, what would happen to the period in the small-angle model? Why does this not require solving the ODE again? Answer: the period halves because \(T_0\propto g^{-1/2}\).

**Compact reference.** Ideal pendulum: \(\ddot\theta+(g/L)\sin\theta=0\). In the small-angle limit, \(T_0=2\pi\sqrt{L/g}\); independent of \(m\) in the ideal model. Large amplitude and dissipation invalidate the simple formula.

## Example 2 — RC charging: outline and key transitions

**Question:** Why does a capacitor's voltage rise quickly at first but slowly near its final value when connected to a constant voltage through a resistor?

1. **System and assumptions.** Ideal step voltage source \(V_0\), resistor \(R>0\), capacitor \(C>0\), no parasitic inductance or leakage, initially uncharged capacitor, \(t\ge0\).
2. **Choose the model.** Kirchhoff's voltage law gives \(V_0=V_R+V_C\). With \(V_R=Ri\), capacitor relation \(i=C\,dV_C/dt\), and a consistent sign convention:
   \[
   RC\frac{dV_C}{dt}+V_C=V_0.
   \]
3. **Predict.** At first \(V_C=0\), so the resistor initially carries \(V_0/R\). As \(V_C\) grows, the resistor voltage and charging current decline.
4. **Solve with condition.** From \(V_C(0)=0\):
   \[
   \boxed{V_C(t)=V_0(1-e^{-t/(RC)})}.
   \]
5. **Interpret and validate.** The time constant \(\tau=RC\) has units of seconds. At \(t=\tau\), \(V_C=V_0(1-e^{-1})\approx0.632V_0\). Check \(V_C(0)=0\) and \(V_C\to V_0\) as \(t\to\infty\).
6. **Limitation.** Very rapid switching can make stray inductance or source impedance relevant; the simple first-order model then ceases to predict the complete transient.
7. **Transfer question.** Predict what happens to the charging curve when both \(R\) and \(C\) double. Explain why the timescale grows by a factor of four.

**Writing point:** the equation is a *consequence of chosen circuit laws and constitutive relations*, not a mysterious formula to memorize. Every step maps to a testable physical interpretation.
