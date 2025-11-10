Take a single particle of mass $m$ moving under a force that comes from a potential $V(\mathbf r)$. In classical mechanics, for a conservative force we have

$$
\mathbf F(\mathbf r) = -\nabla V(\mathbf r).
$$

At the same time, Newton’s 2nd law says

$$
m \mathbf a = \mathbf F.
$$

Define

* kinetic energy: $T = E_{\text{kin}} = \frac{1}{2} m \mathbf v^2$,
* potential energy: $V = E_{\text{pot}}$,
* total energy: $E = T + V$.

> [!note]
> In **Analytical Mechanics** we use $T$ (for the latin *travail*; work) for the kinetic energy and $V$ is historically used for potentials (like voltage).

## Proof for the Conservation of Energy

We want to show $\dfrac{dE}{dt} = 0$, i.e. energy is conserved (not changing in time).

**Step 1:** time derivative of kinetic energy
$$
T = \frac{1}{2} m \mathbf v \cdot \mathbf v.
$$
Differentiate with respect to time:
$$
\frac{dT}{dt}
= \frac{d}{dt} \left( \frac{1}{2} m \mathbf v \cdot \mathbf v \right)
= m \mathbf v \cdot \frac{d\mathbf v}{dt}
= m \mathbf v \cdot \mathbf a.
$$
Use Newton $m \mathbf a = \mathbf F$:
$$
\frac{dT}{dt} = \mathbf F \cdot \mathbf v.
$$

**Step 2:** time derivative of potential energy
The potential is a function of position, $V = V(\mathbf r)$. By the chain rule,
$$
\frac{dV}{dt} = \nabla V(\mathbf r) \cdot \frac{d\mathbf r}{dt}
= \nabla V \cdot \mathbf v.
$$
But $\mathbf F = -\nabla V$, so
$$
\frac{dV}{dt} = -\mathbf F \cdot \mathbf v.
$$

**Step 3:** add both
$$
\frac{dE}{dt} = \frac{d}{dt}(T + V) = \frac{dT}{dt} + \frac{dV}{dt}
= \mathbf F \cdot \mathbf v + (-\mathbf F \cdot \mathbf v) = 0.
$$

Here the time derivative of the kinetic energy is $\mathbf F \cdot \mathbf v$ and the time derivative of the potential energy $-\mathbf F \cdot \mathbf v$ become the same except the sign is inverse, so they cancel in total.

So for a particle subject to a conservative force with time-independent potential,
$$
\frac{d}{dt}(E_{\text{kin}} + E_{\text{pot}}) = 0,
$$
i.e. total mechanical energy is conserved.

## Limits (counterexamples)

### Non-conservative forces (friction)

then $\mathbf F \neq -\nabla V$, so $\frac{dV}{dt} = -\mathbf F \cdot \mathbf v$ no longer follows, and mechanical energy is not conserved.

### Time-dependent potential $V(\mathbf r, t)$

then
   $$
   \frac{dV}{dt} = \nabla V \cdot \mathbf v + \frac{\partial V}{\partial t},
   $$
so you get
   $$
   \frac{dE}{dt} = \frac{\partial V}{\partial t},
   $$
which is not zero if the potential explicitly depends on time.

> [!note]
> The proof works exactly under the classical assumptions: Newton’s law + conservative, time-independent potential.
