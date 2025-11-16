This walkthrough applies the substitution method for solving differential equations to the simple harmonic oscillator
$$m\,\ddot{x} = -k\,x\qquad\text{or}\qquad \ddot{x} + \omega^2 x = 0,\qquad \omega := \sqrt{\frac{k}{m}}.$$

**Step 1: Propose a trial solution.**  
For constant-coefficient linear equations we try a combination of sine and cosine,
$$x(t) = C\cos(\omega t)+D\sin(\omega t).$$

**Step 2: Differentiate and plug into the ODE.**  
The second derivative is
$$\ddot{x}(t) = -\omega^2C\cos(\omega t)-\omega^2D\sin(\omega t) = -\omega^2 x(t),$$
which matches the right-hand side of the equation, so the ansatz is consistent for any constants $C,D$.

**Step 3: Use the initial conditions** $x(0)=x_0$ and $\dot{x}(0)=v_0$.
Evaluating at $t=0$ gives
$$x(0) = C = x_0,\qquad \dot{x}(0) = \omega D = v_0.$$
Solving for the constants yields $C=x_0$ and $D=\frac{v_0}{\omega}$.

**Step 4: State the final solution.**  
Putting everything together,
$$x(t) = x_0\cos(\omega t) + \frac{v_0}{\omega}\sin(\omega t).$$
This compact expression explicitly satisfies the oscillator equation and the supplied initial conditions; the frequency $\omega$ encodes the physical parameters $m,k$.

---


**Ansatz:** Assume that the solution can be described by this function:

$x(t) = A \cos \left( Ω\,t \right)$

| Term | Description           | Phyical Unit |
| ---- | --------------------- | ------------ |
| x    | Position              | [m]          |
| A    | Some constant         | [m]          |
| Ω    | Oscillation Frequency | [rad/s]      |
| t    | Time                  | [s]          |

**Substitute**

$\frac{\mathrm{d}^2\,x}{\mathrm{d}\,t^2} = (-k\,m^{-1})\,x$

**Calculate 2nd derivative**

$x(t) = A\cos(Ωt) + B\sin(Ωt)$ => Apply chain rule
$\frac{\mathrm{d}\,x}{\mathrm{d}\,t^2} = −AΩ\sin(Ωt)+BΩ\cos(Ωt)$ => Apply chain rule
$\frac{\mathrm{d}^2\,x}{\mathrm{d}\,t^2} = -Ω^2 A\cos(Ωt)-Ω^2B\sin(Ωt)$

**Substitute**

$\frac{\mathrm{d}^2\,x^2}{\mathrm{d}\,t^2} = \left(-k\,m^{-1}\right)\,x = -Ω^2 \left(A\cos(Ωt) + B\sin(Ωt) \right)$

- A and B represent the initial condition of the system.
