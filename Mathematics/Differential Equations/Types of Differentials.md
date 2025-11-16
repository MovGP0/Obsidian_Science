## Summary

| Symbol              | Meaning                                                | Covariance                                  | Requires a connection?              | Typical context                                 |
| ------------------- | ------------------------------------------------------ | ------------------------------------------- | ----------------------------------- | ----------------------------------------------- |
| $\Delta f/\Delta t$ | Finite difference over a sampling interval             | no (depends on the chosen parameterization) | no                                  | numerical approximations, discrete-time samples |
| $df/dt$             | Total derivative along a single parameter              | scalar (covariant)                          | no                                  | ODEs, proper-time evolution along worldlines    |
| $\partial_\mu f$    | Coordinate partial derivative of a scalar              | covector                                    | no                                  | scalar fields, spacetime gradients              |
| $\nabla_\mu$        | Covariant derivative operator                          | tensorial (index structure preserved)       | yes                                 | curved manifolds, general relativity            |
| $\mathcal{L}_v$     | Lie derivative along a vector field $v$                | tensorial                                   | no                                  | flows, symmetries, Killing vectors              |
| $d\omega$           | Exterior derivative on a differential form             | increases the form degree by one            | no                                  | Maxwell theory, Stokes's theorem                |
| $\nabla_\mu V^\mu$  | Divergence of a vector field                           | scalar                                      | yes (connection appears implicitly) | conservation laws, continuity equations         |
| $\Box$              | Laplacian / d'Alembertian on scalars                   | scalar                                      | yes                                 | wave equations, potential theory                |
| $D/Dt$              | Material derivative following a fluid parcel           | scalar but frame-dependent                  | no                                  | continuum mechanics, fluid dynamics             |
| $u^\mu \nabla_\mu$  | Directional derivative along the four-velocity $u^\mu$ | scalar or tensor contraction                | yes                                 | relativistic dynamics, geodesics                |

## Finite difference

**Definition:** A ratio of discrete changes evaluated at two nearby points in any sampling sequence; the limit is not taken.

**Meaning:** Samples the average rate of change across an interval of length $\Delta t$ and converges to a derivative as the spacing shrinks.

$$
\frac{\Delta f}{\Delta t} = \frac{f(t+\Delta t) - f(t)}{\Delta t}
$$

**Use cases:**
- Numerical approximations of derivatives and integrals.
- Discrete-time systems such as sampled signals.
- Experimental data when a smooth derivative is not directly available.

**Key point:** Not a derivative per se, but a finite approximation that becomes exact in the $\Delta t\to 0$ limit.

## Ordinary derivative

**Definition:** The limit of the finite difference when the function depends on a single independent variable.

$$
\frac{df}{dt} = \lim_{\Delta t\to 0} \frac{f(t+\Delta t)-f(t)}{\Delta t}
$$

**Meaning:** The instantaneous rate of change of a scalar function $f(t)$ along its domain.

**Use cases:**
- One-dimensional dynamics and ordinary differential equations.
- Worldline derivatives parameterized by proper time $\tau$.

**Key point:** Applicable only when $f$ depends on one independent variable.

## Partial derivative

**Definition:** The limit of a finite difference while holding all other variables constant.

$$
\frac{\partial f}{\partial t} = \lim_{\Delta t\to 0} \frac{f(t+\Delta t, x, y, z, \ldots) - f(t, x, y, z, \ldots)}{\Delta t}
$$

**Meaning:** Measures how $f(t, x, y, z, \ldots)$ changes when only $t$ varies.

**Use cases:**
- Scalar fields such as temperature or potentials.
- Space-time dependent quantities $f(t, \mathbf{x})$.

**Key point:** The correct derivative when $f$ depends on multiple coordinates.

## Gradient (spatial differential)

**Definition:** The vector of spatial partial derivatives of a function defined on space.

$$
\nabla f =
\left(
\frac{\partial f}{\partial x},
\frac{\partial f}{\partial y},
\frac{\partial f}{\partial z}
\right)
$$

**Meaning:** Points in the direction of steepest increase and encodes directional sensitivity.

**Use cases:**
- Spatial fields in electromagnetism, fluid dynamics, and general relativity.
- Potential fields such as $\mathbf{E} = -\nabla \phi$.

**Key point:** A vector operator that acts on spatial slices or functions defined purely on space.

## Time derivative notation (Newton dot)

**Definition:** A shorthand for the ordinary derivative with respect to time (or another single parameter).

$$
\dot{f} := \frac{df}{dt}
$$

When $f$ is parameterized by proper time $\tau$, the same dot notation gives $\dot{f} = df/d\tau$.

**Use cases:**
- Newtonian equations of motion.
- Worldline evolution in relativistic particle dynamics.

**Key point:** Compact notation for time evolution when the parameter is understood from context.

## Covariant derivative

**Definition:** Generalizes the ordinary derivative to curved manifolds by adding connection terms to preserve tensorial transformation laws.

For a scalar $f$ we have $\nabla_\mu f = \partial_\mu f$, and for a vector field $V^\nu$:

$$
\nabla_\mu V^\nu = \partial_\mu V^\nu + \Gamma^\nu_{\mu\rho} V^\rho
$$

**Meaning:** Corrects for the twisting of the coordinate basis so the result transforms like a tensor.

**Use cases:**
- Geodesic equation $d^2x^\mu/d\tau^2 + \Gamma^\mu_{\nu\rho} dx^\nu/d\tau dx^\rho/d\tau = 0$.
- Conservation laws such as $\nabla_\mu T^{\mu\nu} = 0$.
- Maxwell's equations in curved spacetime.

**Key point:** The unique derivative operator that respects curvature and index structure on manifolds.

## Lie derivative

**Definition:** The derivative along the flow generated by a vector field $v^\mu$ without appealing to a connection.

For a scalar $f$:

$$
\mathcal{L}_v f = v^\mu \partial_\mu f
$$

For a vector $W^\mu$ in components:

$$
\mathcal{L}_v W^\mu = v^\nu \partial_\nu W^\mu - W^\nu \partial_\nu v^\mu
$$

**Meaning:** Measures how tensors change as they are dragged along the flow of $v$.

**Use cases:**
- Killing vector fields satisfying $\mathcal{L}_v g_{\mu\nu} = 0$.
- Fluid dynamics and the evolution of fields along a velocity field.
- Lie dragging of tensors in relativity.

**Key point:** Connection-independent and captures changes due to coordinate motion rather than curvature.

## Exterior derivative

**Definition:** Maps a differential $k$-form to a $(k+1)$-form by antisymmetrized partial derivatives.

For a 1-form $\omega = \omega_\mu dx^\mu$ in coordinates:

$$
d\omega = \partial_\nu \omega_\mu \wedge dx^\nu \wedge dx^\mu
$$

**Meaning:** Encodes generalized curls and fluxes without reference to a metric or connection.

**Use cases:**
- Stokes's theorem and de Rham cohomology.
- Maxwell's equations written in form language.

**Key point:** $d^2 = 0$, so exact forms are automatically closed.

## Divergence

**Definition:** The contraction of a covariant derivative acting on a vector field.

$$
\nabla_\mu V^\mu = \partial_\mu V^\mu + \Gamma^\mu_{\mu\nu} V^\nu
$$

**Meaning:** Measures the net flux leaving an infinitesimal volume.

**Use cases:**
- Conservation laws (continuity equations).
- Relativistic currents and fluid flows.

**Key point:** Includes connection terms to maintain tensorial behavior in curved space.

## Laplacian

**Definition:** The trace of two covariant derivatives acting on scalars or tensors; for scalars

$$
\Box f = \nabla^\mu \nabla_\mu f
$$

**Meaning:** Measures how a scalar deviates from its average value in the vicinity.

**Use cases:**
- Wave and Klein-Gordon equations.
- Potential theory in curved spaces.

**Key point:** The covariant Laplacian (sometimes called the d'Alembertian) reduces to $\partial^\mu \partial_\mu$ in flat space but reacts to curvature via $\nabla$.

## Material derivative

**Definition:** Tracks the change of a field $f(t, \mathbf{x})$ as a fluid parcel moves with velocity $\mathbf{v}(t, \mathbf{x})$.

$$
\frac{D f}{D t} = \frac{\partial f}{\partial t} + v^i \partial_i f
$$

**Meaning:** Adds the convective change to the local time derivative to follow the flow.

**Use cases:**
- Fluid mechanics and continuum dynamics.
- Heat or pollutant transport in moving media.

**Key point:** The operator depends on the chosen velocity field and is not covariant in the relativistic sense.

## Proper-time directional derivative

**Definition:** The contraction of the covariant derivative with the four-velocity $u^\mu$ of a timelike curve.

$$
u^\mu \nabla_\mu f
$$

**Meaning:** Computes how a scalar or tensor changes when carried along the worldline parameterized by proper time $\tau$.

**Use cases:**
- Relativistic dynamics of particles and fields.
- Geodesic deviation and the evolution of frame components.

**Key point:** Equivalent to following an observer with four-velocity $u^\mu$, so it generalizes $d/d\tau$ to curved spacetime.
