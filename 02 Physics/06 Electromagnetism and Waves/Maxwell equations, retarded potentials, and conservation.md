---
title: "Maxwell equations, retarded potentials, and conservation"
---

> [!TLDR]
> Gauge choices and the retarded Green function give causal potentials, while local conservation laws track field energy and momentum.

## Worked lecture material

Match the uniform field at infinity and require regularity at the origin.

$$
C\mechanical{r}Y_{10}=-\frac{\magnetic{B}_0}{\magnetic{\mu}_0}\mechanical{r}\cos\theta,
\qquad B=0.
$$

The continuity of $\magnetic{B}_{\perp}$ at $\mechanical{R}$ gives

$$
\magnetic{\mu}_0\left(C-\frac{2D}{\mechanical{R}^3}\right)
=\magnetic{\mu}\left(A-\frac{2B}{\mechanical{R}^3}\right).
$$

Solving these conditions with the tangential condition on [[Magnetic materials, bound currents, and interface problems#Magnetostatics in media|the section on Magnetostatics in media ·]] gives a uniform induced magnetization. In the result, $\magnetic{\mathbf B}_0$ denotes the applied field far from the sphere.

$$
\magnetic{\mathbf M}
=\frac{3}{\magnetic{\mu}_0}\frac{\magnetic{\mu}-\magnetic{\mu}_0}{\magnetic{\mu}+2\magnetic{\mu}_0}\,\magnetic{\mathbf B}_0.
$$

This is the lecture's main magnetostatic boundary-value example.

##### Electrodynamics and Maxwell's equations

The notes mention that midterm solutions were posted. The lecture then introduces time-dependent fields. In vacuum, the differential equations are

$$
\begin{aligned}
\nabla\cdot\electric{\mathbf E}&=\frac{\electric{\rho}}{\electric{\varepsilon}_0},&
\nabla\times\electric{\mathbf E}&=-\frac{\partial\magnetic{\mathbf B}}{\partial t},\\
\nabla\cdot\magnetic{\mathbf B}&=0,&
\nabla\times\magnetic{\mathbf B}&=\magnetic{\mu}_0
\left(\circuit{\mathbf J}+\electric{\varepsilon}_0\frac{\partial\electric{\mathbf E}}{\partial t}\right).
\end{aligned}
$$

Their integral forms use a closed surface $S$ for the flux laws and a contour $C$ for the circulation laws. The fluxes $\magnetic{\Phi}_{\mathrm B}$ and $\electric{\Phi}_{\mathrm E}$ for the circulation laws are taken through a surface spanning $C$.

$$
\begin{aligned}
\oint_S\electric{\mathbf E}\cdot\hat{\mathbf n}\,dA&=\frac{\electric{Q}_{\mathrm{enc}}}{\electric{\varepsilon}_0},&
\oint_C\electric{\mathbf E}\cdot d\mechanical{\mathbf l}&=-\frac{d\magnetic{\Phi}_{\mathrm B}}{dt},\\
\oint_S\magnetic{\mathbf B}\cdot\hat{\mathbf n}\,dA&=0,&
\oint_C\magnetic{\mathbf B}\cdot d\mechanical{\mathbf l}&=\magnetic{\mu}_0
\left(\circuit{I}_{\mathrm{enc}}+\electric{\varepsilon}_0\frac{d\electric{\Phi}_{\mathrm E}}{dt}\right).
\end{aligned}
$$

##### Electromagnetic potentials and gauge transformations

The lecture uses differential equations for time-dependent problems, where there is often too little symmetry to solve directly from the integral forms. Start from $\nabla\cdot\magnetic{\mathbf B}=0$ and write $\magnetic{\mathbf B}=\nabla\times\magnetic{\mathbf A}$. Faraday's law then gives $\nabla\times(\electric{\mathbf E}+\partial_t\magnetic{\mathbf A})=0$. Introducing a scalar potential yields

$$
\electric{\mathbf E}=-\nabla\electric{\phi}-\frac{\partial\magnetic{\mathbf A}}{\partial t},
\qquad
\magnetic{\mathbf B}=\nabla\times\magnetic{\mathbf A}.
$$

A gradient added to $\magnetic{\mathbf A}$ has zero curl. Compensate its contribution to the electric field by shifting the scalar potential as well.

$$
\magnetic{\mathbf A}\longmapsto\magnetic{\mathbf A}+\nabla\chi,
\qquad
\electric{\phi}\longmapsto\electric{\phi}-\frac{\partial\chi}{\partial t}.
$$

This gauge transformation yields the same electric and magnetic fields. Substitution into Gauss's law and the Ampère–Maxwell law gives

$$
\begin{aligned}
\nabla\cdot\left(-\nabla\electric{\phi}-\frac{\partial\magnetic{\mathbf A}}{\partial t}\right)
&=\frac{\electric{\rho}}{\electric{\varepsilon}_0},\\
\nabla\times(\nabla\times\magnetic{\mathbf A})
&=\magnetic{\mu}_0\left[
\circuit{\mathbf J}+\electric{\varepsilon}_0\frac{\partial}{\partial t}
\left(-\nabla\electric{\phi}-\frac{\partial\magnetic{\mathbf A}}{\partial t}\right)\right].
\end{aligned}
$$

A gauge condition is needed to select potentials from the equivalent choices.

##### Lorenz gauge and the wave operator

The Coulomb gauge would impose $\nabla\cdot\magnetic{\mathbf A}=0$. For time-dependent fields the lecture chooses the **Lorenz gauge**.

$$
\nabla\cdot\magnetic{\mathbf A}
+\magnetic{\mu}_0\electric{\varepsilon}_0\frac{\partial\electric{\phi}}{\partial t}=0.
$$

Gauss's law gives $-\nabla^2\electric{\phi}-\partial_t(\nabla\cdot\magnetic{\mathbf A})=\electric{\rho}/\electric{\varepsilon}_0$. Use the gauge condition to eliminate the divergence. In the Ampère–Maxwell law, the same condition cancels the terms involving the gradient of $\partial_t\electric{\phi}$. Define the d'Alembertian with the sign convention

$$
\Box=\magnetic{\mu}_0\electric{\varepsilon}_0\frac{\partial^2}{\partial t^2}-\nabla^2.
$$

The equations for the two potentials now separate.

$$
\Box\electric{\phi}=\frac{\electric{\rho}}{\electric{\varepsilon}_0},
\qquad
\Box\magnetic{\mathbf A}=\magnetic{\mu}_0\circuit{\mathbf J}.
$$

Together with the Lorenz condition and the field definitions on [[#Electromagnetic potentials and gauge transformations|the section on Electromagnetic potentials and gauge transformations]], these recover the four Maxwell equations. The handwritten page proposes solving first for a Green's function with the normalization

$$
\Box G(x,x')=-4\pi\delta^{(4)}(x-x')
=-4\pi\delta(x^0-x'^0)\delta^{(3)}(\mechanical{\mathbf x}-\mechanical{\mathbf x}').
$$

The overall sign of this Green's function is tied to the source normalization. The sign used in the subsequent retarded solution is tracked separately.

##### Retarded Green's function

The time coordinate can be scaled in different ways. Formally setting $t=-i\tau$ changes the time-derivative term in $\Box$ to $-\magnetic{\mu}_0\electric{\varepsilon}_0\partial_\tau^2$. The page considers and rejects a direct inverse-distance guess from the spatial Poisson problem. The time-dependent Green's function must satisfy a causal condition. In space the potentials of a localized source are required to decay far away. In time the effect must follow its cause, so the retarded kernel vanishes for $t<t'$ and in particular as $t\to-\infty$.

Use the Fourier transform in time. With $\Box=c^{-2}\partial_t^2-\nabla^2$ and $x^0=t$, write

$$
G(\mechanical{\mathbf x},t;\mechanical{\mathbf x}',t')
=\int_{-\infty}^{\infty}\frac{d\omega}{2\pi}
e^{-i\omega(t-t')}g_\omega(\mechanical{\mathbf x},\mechanical{\mathbf x}'),
\qquad
c^{-2}=\magnetic{\mu}_0\electric{\varepsilon}_0.
$$

Using the positive source normalization $\Box G=4\pi\delta(t-t')\delta^{(3)}(\mechanical{\mathbf x}-\mechanical{\mathbf x}')$, the Fourier coefficient satisfies

$$
\left(-\nabla^2-\frac{\omega^2}{c^2}\right)g_\omega
=4\pi\delta^{(3)}(\mechanical{\mathbf x}-\mechanical{\mathbf x}').
$$

Here $\partial_t^2$ contributes $-\omega^2$. The positive source normalization makes the outgoing spatial kernel $e^{i\omega s/c}/s$, where $s=\lvert\mechanical{\mathbf x}-\mechanical{\mathbf x}'\rvert$. Invert the transform to recover the retarded Green's function (Jackson, Eq. 6.44).

$$
G_{\mathrm{ret}}(\mechanical{\mathbf x},t;\mechanical{\mathbf x}',t')
=\frac{\delta(t-t'-s/c)}{s}.
$$

With the negative source normalization written on [[#Lorenz gauge and the wave operator|the section on Lorenz gauge and the wave operator]], the corresponding Green's function is $-G_{\mathrm{ret}}$. The retarded response at a fixed observation point is supported at the specific arrival time $t=t'+s/c$.

![[Kyle Kabasares - Electrodynamics - Spacetime sketch of retarded propagation.png|**Fig. 100** At the observation point, the retarded response vanishes before the signal arrives.]]

##### Retarded potentials

The review lists Maxwell's equations and the field definitions from [[#Electrodynamics and Maxwell's equations|the section on Electrodynamics and Maxwell's equations]]. The Lorenz gauge $\nabla\cdot\magnetic{\mathbf A}+c^{-2}\partial_t\electric{\phi}=0$ reduces the source equations to two wave equations, $\Box\electric{\phi}=\electric{\rho}/\electric{\varepsilon}_0$ and $\Box\magnetic{\mathbf A}=\magnetic{\mu}_0\circuit{\mathbf J}$, where $c^2=1/(\magnetic{\mu}_0\electric{\varepsilon}_0)$.

The retarded vector potential is

$$
\magnetic{\mathbf A}(\mechanical{\mathbf x},t)
=\frac{\magnetic{\mu}_0}{4\pi}
\int\frac{\delta(t-t'-s/c)\circuit{\mathbf J}(\mechanical{\mathbf x}',t')}{s}\,d^3\mechanical{x}'\,dt',
\qquad s=\lvert\mechanical{\mathbf x}-\mechanical{\mathbf x}'\rvert.
$$

The scalar potential has the same integral with $\electric{\rho}$ as source and $1/(4\pi\electric{\varepsilon}_0)$ as the prefactor.

![[Kyle Kabasares - Electrodynamics - Light cone reaching a stationary observer.png|**Fig. 101** The light cone of the emission event intersects the stationary observer's world line at the observation time.]]

The diagram relates the observation time to the source time by $t=t'+s/c$.

##### Point source at the origin

The example asks for $\electric{\phi}(\mechanical{\mathbf x},t)$ for a point source of strength $\electric{Q}(t)$ at the origin and an observer at $(\mechanical{\mathbf x},t)$.

![[Kyle Kabasares - Electrodynamics - Source and observer world lines.png|**Fig. 102** The dashed line connects the source event at the origin with the later observation event.]]

The observer at radius $\mechanical{r}=\lvert\mechanical{\mathbf x}\rvert$ samples the point source at $t'=t-\mechanical{r}/c$. Its scalar potential is

$$
\electric{\phi}(\mechanical{\mathbf x},t)
=\frac{\electric{Q}(t-\mechanical{r}/c)}{4\pi\electric{\varepsilon}_0\mechanical{r}}.
$$

This is a scalar wave-equation example. A time-varying point charge in Maxwell's equations would need a current consistent with charge continuity.

For a dipole $\electric{\mathbf p}=\electric{p}_z(t)\hat{\mathbf z}$ at the origin, the handwritten expression evaluates the static dipole term at the same retarded time.

$$
\electric{\phi}_{\mathrm{near}}(\mechanical{\mathbf x},t)
=\frac{\electric{p}_z(t-\mechanical{r}/c)\mechanical{z}}
{4\pi\electric{\varepsilon}_0\mechanical{r}^3}.
$$

This term captures the quasistatic part. The full retarded scalar potential of an ideal point dipole also has a term $\dot{\electric{p}}_z(t-\mechanical{r}/c)\cos\theta/(4\pi\electric{\varepsilon}_0 c\mechanical{r})$. For an extended source, different source points contribute at different retarded times.

##### Infinite wire with a switched current

Find the vector potential of an infinite wire whose current is spatially uniform at each time and switches on at $t=0$.

![[Kyle Kabasares - Electrodynamics - Current switched on along an infinite wire.png|**Fig. 103** Positive current direction along the wire.]]

$$
\circuit{I}(t)=
\begin{cases}
0,&t<0,\\
\circuit{I}_0,&t>0.
\end{cases}
$$

An observer is a distance $\mechanical{a}$ from the wire. At $t=0$, the entire retarded current is still zero, so $\magnetic{\mathbf A}=0$.

![[Kyle Kabasares - Electrodynamics - Observer at fixed distance from a wire.png|**Fig. 104** The observer lies a perpendicular distance $\mechanical{a}$ from the wire.]]

At $t=\mechanical{a}/c$ the signal arrives from the nearest point. Signals from more distant parts arrive later, so the retarded current sampled by the observer is spatially nonuniform.

![[Kyle Kabasares - Electrodynamics - Retarded current first visible at the nearest point.png|**Fig. 105** The nearest point reaches the switch-on time before the rest of the wire.]]

For $t>\mechanical{a}/c$, the observer samples the switched current over a wire segment of length $2L(t)$, where $L(t)=\sqrt{c^2t^2-\mechanical{a}^2}$.

![[Kyle Kabasares - Electrodynamics - Wire segment inside the observer light cone.png|**Fig. 106** The two ends of the contributing segment are a distance $ct$ from the observer.]]

With the wire along $\hat{\mathbf z}$, the step-current potential is

$$
\magnetic{\mathbf A}(\mechanical{\mathbf x},t)
=\frac{\magnetic{\mu}_0\circuit{I}_0}{4\pi}\hat{\mathbf z}
\int_{-L(t)}^{L(t)}\frac{d\mechanical{z}'}{\sqrt{(\mechanical{z}')^2+\mechanical{a}^2}}.
$$

##### Infinite wire with a linearly increasing current

Now let the current grow linearly after switch-on. The handwritten $\circuit{I}_0$ in this example is a slope with units of current per time.

$$
\circuit{\mathbf J}(\mechanical{\mathbf x},t)
=\begin{cases}
0,&t<0,\\
\circuit{I}_0 t\,\delta(\mechanical{x})\delta(\mechanical{y})\hat{\mathbf z},&t>0.
\end{cases}
$$

Take the observer at $\mechanical{\mathbf x}=(0,\mechanical{a},0)$ and a source point on the wire at $\mechanical{\mathbf x}'=(0,0,\mechanical{z}')$. Their distance is $s=\sqrt{\mechanical{a}^2+(\mechanical{z}')^2}$.

![[Kyle Kabasares - Electrodynamics - Distances from wire to observer.png|**Fig. 107** The observer's distance from each source point follows from the perpendicular offset and the source's axial coordinate.]]

Insert the current density in the retarded vector-potential formula. Integrating the two transverse deltas gives

$$
\magnetic{\mathbf A}(\mechanical{\mathbf x},t)
=\frac{\magnetic{\mu}_0\circuit{I}_0}{4\pi}\hat{\mathbf z}
\int_{-\infty}^{\infty}d\mechanical{z}'\int_0^\infty dt'\,
\frac{t'\,\delta(t-t'-s/c)}{s}.
$$

The time integral selects the zero of the delta argument, $t'=t-s/c$.

The retarded time is positive when $\sqrt{\mechanical{a}^2+(\mechanical{z}')^2}<ct$.

![[Kyle Kabasares - Electrodynamics - Wire source coordinate and path length.png|**Fig. 108** The signal travels the hypotenuse from the source point on the wire to the observer.]]

For $t>\mechanical{a}/c$, the ramp-current result is

$$
\magnetic{\mathbf A}(\mechanical{\mathbf x},t)=
\frac{\magnetic{\mu}_0\circuit{I}_0}{4\pi}\hat{\mathbf z}
\int_{-\sqrt{c^2t^2-\mechanical{a}^2}}^{\sqrt{c^2t^2-\mechanical{a}^2}}
\frac{t-\sqrt{\mechanical{a}^2+(\mechanical{z}')^2}/c}{\sqrt{\mechanical{a}^2+(\mechanical{z}')^2}}
\,d\mechanical{z}'.
$$

The handwritten limits have $+\mechanical{a}^2$ under the radical. Subtracting the perpendicular offset squared follows from the travel-time constraint and the step-current example.

##### Point charge moving at constant speed

Let a charge $\electric{q}$ move along $\mechanical{x}$ at speed $\mechanical{v}$, with $\mechanical{\mathbf v}=\mechanical{v}\hat{\mathbf x}$. Its sources are

$$
\electric{\rho}(\mechanical{\mathbf x},t)=
\electric{q}\delta(\mechanical{y})\delta(\mechanical{z})\delta(\mechanical{x}-\mechanical{v}t),
\qquad
\circuit{\mathbf J}(\mechanical{\mathbf x},t)=\mechanical{\mathbf v}\electric{\rho}(\mechanical{\mathbf x},t).
$$

Insert the density in the retarded potential. The transverse deltas set $\mechanical{y}'=\mechanical{z}'=0$, and the longitudinal delta sets $\mechanical{x}'=\mechanical{v}t'$. This leaves

$$
\electric{\phi}(\mechanical{\mathbf x},t)
=\frac{\electric{q}}{4\pi\electric{\varepsilon}_0}
\int_{-\infty}^{\infty}\frac{\delta(t-t'-s(t')/c)}{s(t')}\,dt',
\qquad
s(t')=\sqrt{(\mechanical{x}-\mechanical{v}t')^2+\mechanical{y}^2+\mechanical{z}^2}.
$$

The observer sees the charge at its retarded position $(\mechanical{v}t',0,0)$, where $t'+s(t')/c=t$.

![[Kyle Kabasares - Electrodynamics - Retarded position of a moving point charge.png|**Fig. 109** The light path joins the moving source at its retarded position to the observation point.]]

For the moving charge, square the travel-time equation to solve for $t'$.

$$
c^2(t-t')^2=(\mechanical{x}-\mechanical{v}t')^2+\mechanical{y}^2+\mechanical{z}^2.
$$

For subluminal motion, the physical root is the one satisfying the unsquared retarded condition. The source coordinate is $\mechanical{v}t'$, as in the preceding page. Evaluating the time integral gives the **Liénard–Wiechert potential** (Jackson, Eq. 14.8), which the notes flag for review.

##### Local conservation laws

For conserved quantities such as energy and momentum, a local conservation law relates the rate of change of the density in a finite volume to its outward flux. Schematically, it has the form $\partial_t(\text{density})+\nabla\cdot(\text{current})=0$.

The canonical example is charge continuity.

$$
\frac{\partial\electric{\rho}}{\partial t}+\nabla\cdot\circuit{\mathbf J}=0.
$$

Take the divergence of the Ampère–Maxwell law and use Gauss's law for the electric field.

$$
0=\frac{1}{\magnetic{\mu}_0}\nabla\cdot(\nabla\times\magnetic{\mathbf B})
=\nabla\cdot\circuit{\mathbf J}
+\electric{\varepsilon}_0\frac{\partial}{\partial t}(\nabla\cdot\electric{\mathbf E})
=\nabla\cdot\circuit{\mathbf J}+\frac{\partial\electric{\rho}}{\partial t}.
$$

Integrate over all space. With vanishing net current flux at infinity, the divergence integral is zero, and $d\electric{Q}/dt=d(\int\electric{\rho}\,d^3\mechanical{x})/dt=0$.

In the absence of sources, the electromagnetic energy density and energy current satisfy

$$
\frac{\partial\energy{u}}{\partial t}+\nabla\cdot\energy{\mathbf S}=0,
\qquad
\energy{u}=\frac{\electric{\varepsilon}_0}{2}\electric{E}^2+\frac{\magnetic{B}^2}{2\magnetic{\mu}_0},
\qquad
\energy{\mathbf S}=\frac{\electric{\mathbf E}\times\magnetic{\mathbf B}}{\magnetic{\mu}_0}.
$$

The energy current $\energy{\mathbf S}$ is the **Poynting vector**. The field also has momentum density $\mechanical{\mathbf g}=c^{-2}\electric{\mathbf E}\times\magnetic{\mathbf H}$. Its momentum transport is described by a tensor related to the Maxwell stress tensor $\mechanical{T}_{ij}$.

##### Conservation laws

Charge continuity pairs the charge density $\electric{\rho}$ with the current density $\circuit{\mathbf J}$. In a source-free region, energy continuity similarly pairs $\energy{u}$ with $\energy{\mathbf S}=\electric{\mathbf E}\times\magnetic{\mathbf H}$. The integral $\oint_S\energy{\mathbf S}\cdot\hat{\mathbf n}\,dA$ is the rate of energy flow out of the closed surface.

## Source

Kyle Kabasares, *Electrodynamics (Physics 213A, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\magnetic{\mathbf A}$ | $\unit{T\,m}$ | Magnetic vector potential | Potential whose curl yields the magnetic flux density. |
| $\magnetic{\Phi}_{\mathrm B}$ | $\unit{Wb}$ | Magnetic flux | Integral of magnetic flux density through an oriented surface. |
| $\electric{\Phi}_{\mathrm E}$ | $\unit{V\,m}$ | Electric flux | Integral of electric field through an oriented surface. |
| $\energy{\mathbf S}$ | $\unit{W\,m^{-2}}$ | Poynting vector | Electromagnetic energy flux density. |
| $\mechanical{\mathbf g}$ | $\unit{kg\,m^{-2}\,s^{-1}}$ | Electromagnetic momentum density | Field momentum per unit volume. |
| $\mechanical{T}_{ij}$ | $\unit{N\,m^{-2}}$ | Maxwell stress tensor | Tensor entering the field momentum balance. |
