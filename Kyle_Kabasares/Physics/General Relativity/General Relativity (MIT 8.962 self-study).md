---
title: "General Relativity (MIT 8.962 self-study)"
---

> [!TLDR]
> These self-study notes follow Scott Hughes’s MIT 8.962 course from special relativity, tensors, and curvature to the Einstein field equations, gravitational waves, cosmology, compact stars, and black holes.

Source notes by Kyle Kabasares. [[General Relativity (MIT 8.962 self-study).pdf|Original PDF]].

Transcribed PDF pages 1–191 of 191.

### PDF page 1

#### MIT 8.962. General Relativity by Scott Hughes

#### Lecture 1. Spacetime

The first half develops the mathematical foundations of general relativity and derives the Einstein field equations. The second half treats applications to astrophysical systems. The course begins by emphasizing the geometry of special relativity.

- **Spacetime** is a manifold of events equipped with a metric.
- A **manifold** is a set of points with well-defined connectedness properties. See Carroll, pp. 54–62, for a rigorous discussion.
- An **event** is when and where something happens. Coordinates label it, and the event itself exists independently of those labels.
- A **metric** supplies a notion of interval between events on the manifold.

Einstein's insight was that gravity is intimately connected to the metric.

### PDF page 2

#### Inertial frames and Einstein synchronization

Special relativity is the simplest theory of spacetime and describes general relativity's flat-spacetime limit. Following Blandford and Thorne, represent an inertial reference frame by a lattice of clocks and measuring rods that assigns coordinates to spacetime events.

1. The lattice moves freely, with no applied forces or torques.
2. Measuring rods are mutually orthogonal, with uniformly spaced tick marks.
3. Clocks tick uniformly.
4. Einstein synchronization uses the same speed of light for all inertial observers.

Clock 1 emits a light pulse at $t_{1,e}$ and receives the reflection at $t_{1,r}$. Set clock 2 to read $t_{2,b}=(t_{1,e}+t_{1,r})/2$ when it reflects the pulse.

![[Kyle Kabasares - General Relativity - Clock synchronization.png|**Fig. 1** Spacetime diagram of two clocks and the outgoing and returning light pulses.]]

### PDF page 3

Strong gravity complicates the assignment of time coordinates because clock synchronization uses light signals.

Choose a unit of length equal to the distance light travels in the basic unit of time. With seconds as the time unit, the length unit is a light-second. With nanoseconds as the time unit, one light-nanosecond is about one foot. Then $c=1$ in these units.

Let $O$ be an inertial observer who observes events $P$ and $Q$. The displacement $\Delta\mechanical{\boldsymbol{x}}$ is the arrow from $P$ to $Q$. In $O$'s coordinates its components are

$$
\Delta\mechanical{x}^{\mu}=(t_Q-t_P,\ \mechanical{x}_Q-\mechanical{x}_P,\ \mechanical{y}_Q-\mechanical{y}_P,\ \mechanical{z}_Q-\mechanical{z}_P).
$$

Greek indices such as $\mu$ label all four spacetime components $(t,x,y,z)$ or $(0,1,2,3)$. Latin indices often select the spatial components.

![[Kyle Kabasares - General Relativity - Spacetime displacement.png|**Fig. 2** Displacement vector from event P to event Q.]]

### PDF page 4

#### Lorentz transformation and summation convention

The events $P$, $Q$ and the displacement $\Delta\mechanical{\boldsymbol{x}}$ are geometric objects independent of their coordinate representation. An inertial observer $\bar O$ moving along axis 1 at speed $\mechanical{v}$ relative to $O$ measures different components.

![[Kyle Kabasares - General Relativity - Displacement in another frame.png|**Fig. 3** The same geometric displacement measured by another observer.]]

$$
\begin{aligned}
\Delta\mechanical{x}^{\bar 0}&=\gamma\Delta\mechanical{x}^0-\gamma\mechanical{v}\,\Delta\mechanical{x}^1,\\
\Delta\mechanical{x}^{\bar 1}&=-\gamma\mechanical{v}\,\Delta\mechanical{x}^0+\gamma\Delta\mechanical{x}^1,\\
\Delta\mechanical{x}^{\bar 2}&=\Delta\mechanical{x}^2,\\
\Delta\mechanical{x}^{\bar 3}&=\Delta\mechanical{x}^3,
\qquad \gamma=\frac{1}{\sqrt{1-\mechanical{v}^2}}.
\end{aligned}
$$

Write $\Delta\mechanical{x}^{\bar\mu}=\sum_{\nu=0}^3\Lambda^{\bar\mu}{}_\nu\Delta\mechanical{x}^\nu=\Lambda^{\bar\mu}{}_\nu\Delta\mechanical{x}^\nu$. The Einstein summation convention sums over a repeated upper and lower spacetime index from $0$ through $3$.

### PDF page 5

The transformation matrix can be written as the Jacobian $\Lambda^{\bar\mu}{}_\nu=\partial\mechanical{x}^{\bar\mu}/\partial\mechanical{x}^\nu$. The summed index is a dummy index and can be renamed:

$$
\Delta\mechanical{x}^{\bar\mu}
=\Lambda^{\bar\mu}{}_\nu\Delta\mechanical{x}^\nu
=\Lambda^{\bar\mu}{}_\alpha\Delta\mechanical{x}^\alpha.
$$

The free index $\bar\mu$ selects the output component.

#### Spacetime vectors

A spacetime vector has four components $(A^0,A^1,A^2,A^3)$ in an inertial frame. In another frame, they transform like the displacement components, $A^{\bar\mu}=\Lambda^{\bar\mu}{}_\alpha A^\alpha$.

The vector operations are linear. If $\boldsymbol{A}$ and $\boldsymbol{B}$ are vectors, $\boldsymbol{C}=\boldsymbol{A}+\boldsymbol{B}$ is a vector. If $a$ is a scalar, with the same value for all observers, then $\boldsymbol{D}=a\boldsymbol{A}$ is a vector.

### PDF page 6

#### Lecture 2. Tensors

In frame $O$, take the four basis vectors to have components $(1,0,0,0)$, $(0,1,0,0)$, $(0,0,1,0)$, and $(0,0,0,1)$, respectively. Compactly, $(\boldsymbol{e}_\alpha)^\beta=\delta^\beta_\alpha$. The geometric vector is $\boldsymbol{A}=A^\alpha\boldsymbol{e}_\alpha$, an equality between vectors rather than an identification with a tuple.

To see how the basis transforms, expand the same vector in the two frames and substitute the component transformation:

$$
\boldsymbol{A}=A^\alpha\boldsymbol{e}_\alpha
=A^{\bar\mu}\boldsymbol{e}_{\bar\mu}
=(\Lambda^{\bar\mu}{}_\beta A^\beta)\boldsymbol{e}_{\bar\mu}
=A^\beta\Lambda^{\bar\mu}{}_\beta\boldsymbol{e}_{\bar\mu}.
$$

The index $\beta$ in the last expression is a dummy index. The two expansions represent the same vector for arbitrary components.

### PDF page 7

Rename the dummy index and subtract the two expansions. Since $A^\alpha(\boldsymbol{e}_\alpha-\Lambda^{\bar\mu}{}_\alpha\boldsymbol{e}_{\bar\mu})=0$ for all $A^\alpha$,

$$
\boldsymbol{e}_\alpha=\Lambda^{\bar\mu}{}_\alpha\boldsymbol{e}_{\bar\mu},
\qquad A^{\bar\mu}=\Lambda^{\bar\mu}{}_\alpha A^\alpha.
$$

The basis and components transform in opposite directions between frames. Line up the free and summed indices to see which frame each belongs to.

The inverse boost reverses the relative velocity $\mechanical{\boldsymbol{v}}$.

![[Kyle Kabasares - General Relativity - Inverse boost observers.png|**Fig. 4** Each observer sees the other moving with the opposite relative velocity.]]

$$
\begin{aligned}
\boldsymbol{e}_\alpha
&=\Lambda^{\bar\beta}{}_\alpha(\mechanical{\boldsymbol{v}})\boldsymbol{e}_{\bar\beta}
=\Lambda^{\bar\beta}{}_\alpha(\mechanical{\boldsymbol{v}})
\Lambda^\gamma{}_{\bar\beta}(-\mechanical{\boldsymbol{v}})\boldsymbol{e}_\gamma,\\
\delta^\gamma_\alpha&=\Lambda^{\bar\beta}{}_\alpha\Lambda^\gamma{}_{\bar\beta},
\qquad
\delta^{\bar\gamma}_{\bar\alpha}=\Lambda^\beta{}_{\bar\alpha}\Lambda^{\bar\gamma}{}_\beta.
\end{aligned}
$$

#### Scalar product

The spacetime interval $\Delta\mechanical{s}^2=-\Delta t^2+\Delta\mechanical{x}^2+\Delta\mechanical{y}^2+\Delta\mechanical{z}^2$ is invariant for all inertial observers.

### PDF page 8

The invariant interval is the scalar product of the displacement with itself:

$$
\Delta\mechanical{s}^2=\Delta\mechanical{\boldsymbol{x}}\cdot\Delta\mechanical{\boldsymbol{x}}
=-(\Delta\mechanical{x}^0)^2+(\Delta\mechanical{x}^1)^2+(\Delta\mechanical{x}^2)^2+(\Delta\mechanical{x}^3)^2.
$$

The negative time term is part of the geometry. Since any four-vector transforms like a displacement, its squared norm $-(A^0)^2+(A^1)^2+(A^2)^2+(A^3)^2$ is invariant too. The source writes the $(A^1)^2$ term twice. A nonzero vector is **timelike** if its squared norm is negative, **spacelike** if positive, and **lightlike** or **null** if zero.

For any two four-vectors,

$$
\boldsymbol{A}\cdot\boldsymbol{B}=-A^0B^0+A^1B^1+A^2B^2+A^3B^3.
$$

To prove invariance, set $\boldsymbol{C}=\boldsymbol{A}+\boldsymbol{B}$. In the expansion $\boldsymbol{C}\cdot\boldsymbol{C}=\boldsymbol{A}\cdot\boldsymbol{A}+\boldsymbol{B}\cdot\boldsymbol{B}+2\boldsymbol{A}\cdot\boldsymbol{B}$, each squared norm is invariant. Their difference proves invariance of the scalar product.

### PDF page 9

#### The Minkowski metric and coordinate basis

Expanding both vectors gives $\boldsymbol{A}\cdot\boldsymbol{B}=A^\alpha B^\beta(\boldsymbol{e}_\alpha\cdot\boldsymbol{e}_\beta)=\eta_{\alpha\beta}A^\alpha B^\beta$. In an inertial Cartesian frame the metric tensor is

$$
\eta_{\alpha\beta}=\begin{pmatrix}
-1&0&0&0\\
0&1&0&0\\
0&0&1&0\\
0&0&0&1
\end{pmatrix}.
$$

Thus $\Delta\mechanical{s}^2=\eta_{\alpha\beta}\Delta\mechanical{x}^\alpha\Delta\mechanical{x}^\beta$ and $d\mechanical{s}^2=\eta_{\alpha\beta}\,d\mechanical{x}^\alpha d\mechanical{x}^\beta$. When the displacement is $d\mechanical{\boldsymbol{x}}=d\mechanical{x}^\alpha\boldsymbol{e}_\alpha$, with the coordinate differentials as its components, the $\boldsymbol{e}_\alpha$ are coordinate basis vectors. In curvilinear spatial coordinates $(\mechanical{r},\theta,\phi)$,

$$
d\mechanical{\boldsymbol{x}}=dx^i\boldsymbol{e}_i=d\mechanical{r}\,\boldsymbol{e}_r+d\theta\,\boldsymbol{e}_\theta+d\phi\,\boldsymbol{e}_\phi.
$$

### PDF page 10

For spherical coordinates the orthonormal basis $\boldsymbol{e}_{\hat{\imath}}$ satisfies $\boldsymbol{e}_{\hat{\imath}}\cdot\boldsymbol{e}_{\hat{\jmath}}=\delta_{\hat{\imath}\hat{\jmath}}$. In that basis all displacement components have units of length:

$$
d\mechanical{\boldsymbol{x}}=d\mechanical{r}\,\boldsymbol{e}_{\hat r}
+\mechanical{r}\,d\theta\,\boldsymbol{e}_{\hat\theta}
+\mechanical{r}\sin\theta\,d\phi\,\boldsymbol{e}_{\hat\phi}.
$$

The coordinate basis instead has squared norms $1$, $\mechanical{r}^2$, and $\mechanical{r}^2\sin^2\theta$. The handwriting omits $d\phi$ in the orthonormal expansion.

#### Four-velocity and four-momentum

The four-velocity is $\mechanical{\boldsymbol{u}}=d\mechanical{\boldsymbol{x}}/d\tau$, where $d\tau$ is the proper time measured along the observer's trajectory. In an inertial frame it has components $(\gamma,\gamma\mechanical{\boldsymbol{v}})$, where $\gamma=1/\sqrt{1-\mechanical{v}^2}$. In the observer's rest frame its components are $(1,\boldsymbol{0})$, or $(c,\boldsymbol{0})$ with $c$ restored.

The four-momentum is $\mechanical{\boldsymbol{p}}=\mechanical{m}\mechanical{\boldsymbol{u}}$ for rest mass $\mechanical{m}$. Its components are $(\gamma\mechanical{m},\gamma\mechanical{m}\mechanical{\boldsymbol{v}})=(\energy{E},\mechanical{\mathbf{p}})$ in units with $c=1$.

### PDF page 11

The scalar square of four-velocity is $\mechanical{\boldsymbol{u}}\cdot\mechanical{\boldsymbol{u}}=-\gamma^2+\gamma^2\mechanical{v}^2=-1$. In the moving observer's own frame, $\mechanical{v}=0$ and $\gamma=1$.

$$
\mechanical{\boldsymbol{p}}\cdot\mechanical{\boldsymbol{p}}
=\mechanical{m}^2(\mechanical{\boldsymbol{u}}\cdot\mechanical{\boldsymbol{u}})
=-\mechanical{m}^2=-\energy{E}^2+\lvert\mechanical{\mathbf{p}}\rvert^2.
$$

Hence $\energy{E}^2-\lvert\mechanical{\mathbf{p}}\rvert^2=\mechanical{m}^2$ with $c=1$. Restoring units gives $\energy{E}^2-\lvert\mechanical{\mathbf{p}}\rvert^2c^2=\mechanical{m}^2c^4$.

#### Conservation of four-momentum

For $N$ interacting particles, $\mechanical{\boldsymbol{p}}_{\mathrm{tot}}=\sum_{i=1}^N\mechanical{\boldsymbol{p}}_i$ is conserved. In the center-of-momentum frame $\mechanical{\boldsymbol{p}}_{\mathrm{tot}}=(\energy{E},\boldsymbol{0})$ with $c=1$. That frame simplifies the analysis of collisions.

### PDF page 12

![[Kyle Kabasares - General Relativity - Particle momenta.png|**Fig. 5** Two particles with individual momenta and rest masses.]]

Let $\mechanical{\boldsymbol{p}}$ be particle A's four-momentum and $\mechanical{\boldsymbol{u}}$ be the four-velocity of observer $O$. In $O$'s frame, $\mechanical{\boldsymbol{p}}$ has components $(\energy{E}_O,\mechanical{\mathbf{p}}_O)$ and $\mechanical{\boldsymbol{u}}$ has components $(1,\boldsymbol{0})$. The measured energy is therefore

$$
\energy{E}_O=-\mechanical{\boldsymbol{p}}\cdot\mechanical{\boldsymbol{u}}.
$$

By invariance, the scalar product can be evaluated in any common frame.

The four-acceleration is $\mechanical{\boldsymbol{a}}=d\mechanical{\boldsymbol{u}}/d\tau$. It satisfies $\mechanical{\boldsymbol{a}}\cdot\mechanical{\boldsymbol{u}}=0$.

### PDF page 13

Differentiate the invariant $\mechanical{\boldsymbol{u}}\cdot\mechanical{\boldsymbol{u}}=-1$ along the trajectory:

$$
\frac{d}{d\tau}(\mechanical{\boldsymbol{u}}\cdot\mechanical{\boldsymbol{u}})
=2\mechanical{\boldsymbol{u}}\cdot\mechanical{\boldsymbol{a}}=0.
$$

A tensor of type $\binom{0}{N}$ maps $N$ four-vectors to a Lorentz-invariant scalar and is linear in each argument.

#### Lecture 3. Tensors continued

The Minkowski metric $\eta_{\alpha\beta}=\operatorname{diag}(-1,1,1,1)$ gives $\boldsymbol{A}\cdot\boldsymbol{B}=\eta_{\alpha\beta}A^\alpha B^\beta=a$. For a scalar multiplier $\gamma$, $(\gamma\boldsymbol{A})\cdot\boldsymbol{B}=\eta_{\alpha\beta}(\gamma A^\alpha)B^\beta=\gamma a$. Addition gives $\boldsymbol{A}\cdot(\boldsymbol{B}+\boldsymbol{C})=\eta_{\alpha\beta}A^\alpha B^\beta+\eta_{\alpha\beta}A^\alpha C^\beta$.

Viewed as a two-argument map, $\boldsymbol{\eta}(\boldsymbol{A},\boldsymbol{B})=\boldsymbol{A}\cdot\boldsymbol{B}$. It takes two geometric vectors and produces the same scalar in every frame.

### PDF page 14

A tensor is itself a frame-independent geometric object. Different observers represent it by different components, obtained by evaluating it on their own basis vectors. Thus $\boldsymbol{\eta}(\boldsymbol{e}_\alpha,\boldsymbol{e}_\beta)=\eta_{\alpha\beta}$ and $\boldsymbol{\eta}(\boldsymbol{e}_{\bar\alpha},\boldsymbol{e}_{\bar\beta})=\eta_{\bar\alpha\bar\beta}$. Substitute the basis transformations and use bilinearity:

$$
\begin{aligned}
\eta_{\bar\alpha\bar\beta}
&=\boldsymbol{\eta}(\Lambda^\mu{}_{\bar\alpha}\boldsymbol{e}_\mu,\Lambda^\nu{}_{\bar\beta}\boldsymbol{e}_\nu)\\
&=\Lambda^\mu{}_{\bar\alpha}\Lambda^\nu{}_{\bar\beta}\boldsymbol{\eta}(\boldsymbol{e}_\mu,\boldsymbol{e}_\nu)
=\Lambda^\mu{}_{\bar\alpha}\Lambda^\nu{}_{\bar\beta}\eta_{\mu\nu}.
\end{aligned}
$$

The Minkowski metric has the same components $\operatorname{diag}(-1,1,1,1)$ in all inertial Cartesian frames.

A tensor of type $\binom{0}{1}$ is a **one-form**, also called a dual vector. It maps a single vector linearly to a Lorentz-invariant scalar.

### PDF page 15

#### Components and basis of one-forms

A one-form $\tilde p$ returns a scalar when applied to a vector. Its components are $p_\alpha=\tilde p(\boldsymbol{e}_\alpha)$. Linearity gives the contraction

$$
\tilde p(\boldsymbol{A})=\tilde p(A^\alpha\boldsymbol{e}_\alpha)
=A^\alpha\tilde p(\boldsymbol{e}_\alpha)=A^\alpha p_\alpha.
$$

The components in the barred frame are $p_{\bar\alpha}=\Lambda^\mu{}_{\bar\alpha}p_\mu$.

Seek basis one-forms $\{\tilde\omega^\alpha\}$ with $\tilde p=p_\alpha\tilde\omega^\alpha$. To recover $\tilde p(\boldsymbol{A})=p_\alpha A^\alpha$ from $\tilde p(\boldsymbol{A})=p_\beta A^\alpha\tilde\omega^\beta(\boldsymbol{e}_\alpha)$, require $\tilde\omega^\beta(\boldsymbol{e}_\alpha)=\delta^\beta_\alpha$.

### PDF page 16

In the dual basis, $\tilde\omega^0$ has components $(1,0,0,0)$, $\tilde\omega^1$ has components $(0,1,0,0)$, and so on. If basis vectors are columns, basis one-forms can be represented as rows. The direct sum $\sum_{\mu=0}^3A^\mu B^\mu$ of two upper-index component sets is generally frame dependent. The contraction $\sum_{\mu=0}^3p_\mu A^\mu$ of a lower index with an upper index is invariant.

In quantum mechanics the analogous pairing is the inner product

$$
\langle\psi\mid\phi\rangle=\int\psi^*(\mechanical{\boldsymbol{x}})\phi(\mechanical{\boldsymbol{x}})\,d^3x.
$$

The pairing includes complex conjugation and integration over position.

### PDF page 17

#### Rate of change of a scalar field along a trajectory

Consider a trajectory with four-velocity $\mechanical{\boldsymbol{u}}=d\mechanical{\boldsymbol{x}}/d\tau$ in a spacetime with scalar field $\phi(t,x,y,z)$.

![[Kyle Kabasares - General Relativity - Scalar field trajectory.png|**Fig. 6** A trajectory in spacetime parametrized by proper time.]]

For a static field in ordinary space, the chain rule gives

$$
\frac{d\phi}{dt}=
\frac{d\mechanical{x}}{dt}\frac{\partial\phi}{\partial\mechanical{x}}+
\frac{d\mechanical{y}}{dt}\frac{\partial\phi}{\partial\mechanical{y}}+
\frac{d\mechanical{z}}{dt}\frac{\partial\phi}{\partial\mechanical{z}}
=\mechanical{\mathbf{v}}\cdot\nabla\phi.
$$

In spacetime this generalizes to

$$
\frac{d\phi}{d\tau}=
\frac{dt}{d\tau}\frac{\partial\phi}{\partial t}+
\frac{d\mechanical{x}}{d\tau}\frac{\partial\phi}{\partial\mechanical{x}}+\cdots
=\mechanical{u}^{t}\frac{\partial\phi}{\partial t}+\mechanical{u}^{x}\frac{\partial\phi}{\partial\mechanical{x}}+\cdots.
$$

### PDF page 18

In index notation, the rate of change is the contraction of a four-vector with a one-form:

$$
\frac{d\phi}{d\tau}
=\mechanical{u}^\alpha\frac{\partial\phi}{\partial x^\alpha}
=\mechanical{u}^\alpha\partial_\alpha\phi
=\nabla_{\mechanical{\boldsymbol{u}}}\phi.
$$

The gradient of a scalar field, written $d\phi$ or $\widetilde{\nabla}\phi$, is a one-form with components $\partial_\alpha\phi$. Since $\partial_\beta x^\alpha=\delta^\alpha_\beta=\tilde\omega^\alpha(\boldsymbol{e}_\beta)$, the coordinate basis one-forms are $\tilde\omega^\alpha=dx^\alpha$.

For a picture in two dimensions, draw the level curves of the height field $h(x,y)$ and consider two displacements across them.

![[Kyle Kabasares - General Relativity - Height field contours.png|**Fig. 7** Level curves of a height field with two displacement vectors.]]

### PDF page 19

The one-form $dh$ acts on the displacement $\Delta\mechanical{\boldsymbol{x}}$ to give the first-order change in the height, $\Delta h\simeq dh(\Delta\mechanical{\boldsymbol{x}})=\Delta\mechanical{x}^\alpha\partial_\alpha h$. The level surfaces of $h$ give a geometric picture of this one-form.

The basis one-form $\tilde\omega^x$ can be pictured as sheets of constant $x$, normal to the $x$ axis and spaced one unit apart. This picture helps interpret flux through differently oriented surfaces.

![[Kyle Kabasares - General Relativity - Basis one-form sheets.png|**Fig. 8** Sheets of constant x and the direction of the corresponding basis vector.]]

Evaluating the metric on two vectors yields the Lorentz-invariant scalar $\boldsymbol{A}\cdot\boldsymbol{B}=\boldsymbol{\eta}(\boldsymbol{A},\boldsymbol{B})$.

### PDF page 20

#### Raising and lowering indices

Filling one slot of the metric gives a one-form $\tilde A=\boldsymbol{\eta}(\boldsymbol{A},\,\cdot\,)$. Its components are

$$
A_\alpha=\boldsymbol{\eta}(A^\beta\boldsymbol{e}_\beta,\boldsymbol{e}_\alpha)
=\eta_{\alpha\beta}A^\beta.
$$

The metric lowers an index and the inverse metric $\eta^{\alpha\beta}$ raises it. By definition $\eta^{\alpha\beta}\eta_{\beta\gamma}=\delta^\alpha_\gamma$. Thus $\eta^{\alpha\beta}p_\beta=p^\alpha$. A vector also acts on one-forms by evaluation. The scalar product can be expressed either way:

$$
\boldsymbol{A}\cdot\boldsymbol{B}
=\tilde A(\boldsymbol{B})=\tilde B(\boldsymbol{A})
=\boldsymbol{A}(\tilde B)=\boldsymbol{B}(\tilde A)
=\eta_{\alpha\beta}A^\alpha B^\beta=\eta^{\alpha\beta}A_\alpha B_\beta.
$$

### PDF page 21

#### Tensor types and outer products

A tensor of type $(M,N)$ maps $M$ one-forms and $N$ vectors multilinearly to a Lorentz scalar. Type $(0,1)$ denotes a one-form and type $(1,0)$ a vector.

Using the metric to lower an index changes $(M,N)$ to $(M-1,N+1)$, as in $\eta_{\alpha\mu}R^\mu{}_{\beta\gamma\delta}=R_{\alpha\beta\gamma\delta}$. Raising an index with the inverse metric changes $(M,N)$ to $(M+1,N-1)$, as in $\eta^{\alpha\mu}S_{\mu\beta\gamma}=S^\alpha{}_{\beta\gamma}$.

To expand the metric or inverse metric in a basis, construct basis tensors directly from basis one-forms or vectors. The outer products are $\tilde\omega^{\alpha\beta}=\tilde\omega^\alpha\otimes\tilde\omega^\beta$ and $\boldsymbol{e}_{\alpha\beta}=\boldsymbol{e}_\alpha\otimes\boldsymbol{e}_\beta$.

### PDF page 22

For the stress-energy tensor, $\boldsymbol{T}=T^{\alpha\beta}\boldsymbol{e}_\alpha\otimes\boldsymbol{e}_\beta$. The component $T^{\alpha\beta}$ gives the flux of four-momentum component $\alpha$ in direction $\beta$. A mixed tensor can involve both kinds of basis element:

$$
\boldsymbol{R}=R^\alpha{}_{\beta\gamma\delta}\boldsymbol{e}_\alpha
\otimes\tilde\omega^\beta\otimes\tilde\omega^\gamma\otimes\tilde\omega^\delta.
$$

Along a trajectory with $\mechanical{\boldsymbol{u}}=d\mechanical{\boldsymbol{x}}/d\tau$, differentiating a mixed tensor $\boldsymbol{T}=T^\alpha{}_\beta\boldsymbol{e}_\alpha\otimes\tilde\omega^\beta$ generally involves derivatives of both the components and the basis elements.

![[Kyle Kabasares - General Relativity - Tensor along a trajectory.png|**Fig. 9** Spacetime trajectory along which the tensor and its basis can vary.]]

### PDF page 23

#### Lecture 4. Volume elements and conservation laws

For massive particles, $\mechanical{\boldsymbol{u}}=(\gamma,\gamma\mechanical{\mathbf{v}})$ is timelike and normalized by $\mechanical{\boldsymbol{u}}\cdot\mechanical{\boldsymbol{u}}=-1$. Four-velocity defined using proper time applies to timelike trajectories. Four-momentum works for both massive and massless particles. For a massive particle $\mechanical{\boldsymbol{p}}=\mechanical{m}\mechanical{\boldsymbol{u}}=(\energy{E},\mechanical{\mathbf{p}})$, and in either case $\mechanical{\boldsymbol{p}}\cdot\mechanical{\boldsymbol{p}}=-\mechanical{m}^2$ implies $\energy{E}^2-\lvert\mechanical{\mathbf{p}}\rvert^2=\mechanical{m}^2$.

For a photon, $\mechanical{\boldsymbol{p}}=\hbar\signal{\omega}(1,\hat{\boldsymbol{n}})$, where $\hat{\boldsymbol{n}}$ is the unit propagation direction.

**Dust** is a simple continuum of noninteracting particles carrying mass and energy. Each dust element has its own rest frame, which can vary across the cloud.

### PDF page 24

#### Dust number density and flux

Let $n_0$ be the number of particles per unit volume in the rest frame of a dust element. In a frame where the dust moves with velocity $\mechanical{\mathbf{v}}$, the same particles occupy a Lorentz-contracted volume, giving $n=\gamma n_0$. The spatial number flux, measured in particles crossing unit area per unit time, is $n\mechanical{\mathbf{v}}=\gamma n_0\mechanical{\mathbf{v}}$.

In units with $c=1$, combine density and flux into the number current

$$
\boldsymbol{N}=(n,n\mechanical{\mathbf{v}})=n_0(\gamma,\gamma\mechanical{\mathbf{v}})=n_0\mechanical{\boldsymbol{u}}.
$$

This is a geometric four-vector. Its squared norm is $\boldsymbol{N}\cdot\boldsymbol{N}=-n_0^2$, so every observer can recover the rest density as $n_0=\sqrt{-\boldsymbol{N}\cdot\boldsymbol{N}}$.

### PDF page 25

#### Flux through a surface

A coordinate one-form $dx^\alpha$ is associated with level surfaces of $x^\alpha$ spaced at unit coordinate ticks. The contraction $(dx^\alpha)_\beta N^\beta=N^\alpha$ selects the flux in that coordinate direction, since $(dx^\alpha)_\beta=\delta^\alpha_\beta$. In the time direction, $(dt)_\beta N^\beta=N^0=n$. The density is the number flux across a constant-time slice in these units.

More generally, define a surface by $\psi(t,x,y,z)=\mathrm{const}$, for example $\sqrt{x^2+y^2+z^2}=5$. Its associated one-form is $d\psi$. The contraction $(\partial_\alpha\psi)N^\alpha$ selects the normal flux up to the normalization of the normal.

#### Conservation of particle number

The net flux out of a fixed volume comes at the expense of the dust inside it. With $\mathbf{j}=n\mechanical{\mathbf{v}}$ the spatial number flux, $\partial n/\partial t=-\nabla\cdot\mathbf{j}$.

![[Kyle Kabasares - General Relativity - Dust conservation volume.png|**Fig. 10** Volume element used for the flux balance.]]

### PDF page 26

In spacetime notation, number conservation is $\partial_\alpha N^\alpha=0$, where $\partial_\alpha=\partial/\partial x^\alpha$. In the spatial volume $\mathcal{V}$ of a particular observer, the divergence theorem gives

$$
\frac{d}{dt}\int_{\mathcal{V}}n\,d\mechanical{V}
=-\int_{\partial\mathcal{V}}\mathbf{j}\cdot d\mechanical{\mathbf{a}}.
$$

Here $\partial\mathcal{V}$ is the boundary of the three-dimensional volume and $d\mechanical{\mathbf{a}}$ points outward. The minus sign follows from the local continuity equation. The handwriting shows a plus sign for the surface term.

#### Volumes and volume integrals

For a parallelepiped with sides $\mathbf{A}$, $\mathbf{B}$, and $\mathbf{C}$, the oriented three-volume is the scalar triple product:

$$
\mathbf{A}\cdot(\mathbf{B}\times\mathbf{C})
=\mathbf{B}\cdot(\mathbf{C}\times\mathbf{A})
=\mathbf{C}\cdot(\mathbf{A}\times\mathbf{B})
=\epsilon_{ijk}A^i B^j C^k,
$$

where $\epsilon_{ijk}$ is the Levi-Civita symbol.

![[Kyle Kabasares - General Relativity - Parallelepiped volume.png|**Fig. 11** Three edge vectors defining a parallelepiped.]]

### PDF page 27

The Levi-Civita symbol $\epsilon_{ijk}$ is $+1$ for even permutations of $(1,2,3)$, $-1$ for odd permutations, and $0$ if any index repeats. In a right-handed orthonormal basis these are the components of the volume tensor $\boldsymbol{\epsilon}$ of type $(0,3)$. Its evaluation $\boldsymbol{\epsilon}(\mathbf{A},\mathbf{B},\mathbf{C})$ gives the oriented three-volume.

Filling just two slots gives the one-form $\boldsymbol{\epsilon}(\,\cdot\,,\mathbf{B},\mathbf{C})$ with components $\Sigma_i=\epsilon_{ijk}B^j C^k$. Its Euclidean dual is the cross product $\mathbf{B}\times\mathbf{C}$, whose magnitude is the area spanned by $\mathbf{B}$ and $\mathbf{C}$.

Gauss's theorem uses this oriented area element:

$$
\int_{\mathcal{V}}(\nabla\cdot\mathbf{A})\,d\mechanical{V}
=\int_{\partial\mathcal{V}}\mathbf{A}\cdot d\boldsymbol{\Sigma}.
$$

For an infinitesimal volume element, take three differential edge vectors $d\boldsymbol{x}_1$, $d\boldsymbol{x}_2$, and $d\boldsymbol{x}_3$.

### PDF page 28

The three-volume element is $d\mechanical{V}=\epsilon_{ijk}\,dx_1^i dx_2^j dx_3^k$. The surface one-form is constructed by filling two slots of the volume tensor.

#### Four-volume and the spacetime divergence theorem

The spacetime generalization uses four edges $\boldsymbol{A}$, $\boldsymbol{B}$, $\boldsymbol{C}$, and $\boldsymbol{D}$. Their oriented four-volume is $\epsilon_{\alpha\beta\gamma\delta} A^\alpha B^\beta C^\gamma D^\delta$. In the orientation used here $\epsilon_{0123}=+1$, $\epsilon_{1023}=-1$, and $\epsilon_{0023}=0$. A face has three-volume and is represented by the one-form $\Sigma_\alpha=\epsilon_{\alpha\beta\gamma\delta}B^\beta C^\gamma D^\delta$.

The flat-spacetime version of Gauss's theorem in inertial Cartesian coordinates is

$$
\int_{\mathcal{V}_4}(\partial_\alpha V^\alpha)\,d^4x
=\int_{\partial\mathcal{V}_4}V^\alpha\,d\Sigma_\alpha.
$$

A conservation law for the divergence fixes the corresponding net boundary flux.

### PDF page 29

If number is conserved, $\int_{\mathcal{V}_4}\partial_\alpha N^\alpha\,d^4x=0$, hence $\int_{\partial\mathcal{V}_4}N^\alpha\,d\Sigma_\alpha=0$. An $n$-dimensional parallelepiped has $2n$ faces, giving eight terms in four dimensions.

![[Kyle Kabasares - General Relativity - Four-volume boundary.png|**Fig. 12** Boundary faces shown in the time and x directions.]]

The source displays the pairs of faces in the $t$ and $x$ directions. The orientation inherited from the Levi-Civita symbol gives opposite signs on opposite faces:

$$
\begin{aligned}
0={}&\int_{t=t_2}N^0\,dx\,dy\,dz-\int_{t=t_1}N^0\,dx\,dy\,dz\\
&+\int_{x=x_2}N^1\,dt\,dy\,dz-\int_{x=x_1}N^1\,dt\,dy\,dz .
\end{aligned}
$$

The other spatial directions contribute analogous terms when they carry flux. Set $t_2=t_1+dt$ to express the time-face difference as the change in total particle number.

### PDF page 30

Move the six spatial-face integrals to the right. To first order in $dt$, the two $x$ faces contribute $-dt[\int_{x_2}N^1\,dy\,dz-\int_{x_1}N^1\,dy\,dz]$, with corresponding terms for $y$ and $z$. Divide the difference of the time-face integrals by $dt$ and let $dt\to0$:

$$
\frac{\partial}{\partial t}\int_{\mathcal{V}}N^0\,d\mechanical{V}
=-\int_{\partial\mathcal{V}}\mathbf{N}\cdot d\mechanical{\mathbf{a}}.
$$

This is the number balance in the selected Cartesian frame, with $\mathbf{N}$ the spatial part of $\boldsymbol{N}$.

The electric four-current is another example. With $c=1$, $\electric{\boldsymbol{J}}=(\electric{\rho},\electric{\mathbf{J}})$ combines charge density with spatial current density.

### PDF page 31

#### Charge conservation and Maxwell's equations

Charge conservation reads $\partial\electric{\rho}/\partial t=-\nabla\cdot\electric{\mathbf{J}}$ or $\partial_\alpha\electric{J}^\alpha=0$. A symmetric $4\times4$ tensor has four diagonal and six independent off-diagonal entries. The electromagnetic field uses six entries, so it fits an antisymmetric tensor, $F^{\alpha\beta}=-F^{\beta\alpha}$, whose diagonal entries vanish.

$$
F^{\mu\nu}=\begin{pmatrix}
0&\electric{E}_x&\electric{E}_y&\electric{E}_z\\
-\electric{E}_x&0&\magnetic{B}_z&-\magnetic{B}_y\\
-\electric{E}_y&-\magnetic{B}_z&0&\magnetic{B}_x\\
-\electric{E}_z&\magnetic{B}_y&-\magnetic{B}_x&0
\end{pmatrix}.
$$

In the lecture's Gaussian units with $c=1$, Maxwell's equations are $\partial_\nu F^{\mu\nu}=4\pi\electric{J}^\mu$ and $\partial_\mu F_{\nu\lambda}+\partial_\nu F_{\lambda\mu}+\partial_\lambda F_{\mu\nu}=0$. Taking the divergence,

$$
4\pi\partial_\mu\electric{J}^\mu=\partial_\mu\partial_\nu F^{\mu\nu}
=\partial_\nu\partial_\mu F^{\nu\mu}
=-\partial_\nu\partial_\mu F^{\mu\nu}
=-\partial_\mu\partial_\nu F^{\mu\nu}=0.
$$

The steps use dummy-index renaming, antisymmetry of $F$, and commutation of partial derivatives.

### PDF page 32

The contraction of an antisymmetric tensor with a symmetric tensor vanishes: $A^{\alpha\beta}S_{\alpha\beta}=0$. The notes ask the reader to prove this by exchanging the summed indices.

#### Lecture 5. The stress-energy tensor and the Christoffel symbol

Suppose each dust particle has rest mass $\mechanical{m}$. The rest energy density of the dust element is $\energy{\rho}_0=\mechanical{m}n_0$ with $c=1$. In a frame moving relative to the dust, each particle has energy $\gamma\mechanical{m}$ and the number density is $\gamma n_0$, so

$$
\energy{\rho}=(\gamma\mechanical{m})(\gamma n_0)=\gamma^2\energy{\rho}_0.
$$

Two factors of $\gamma$ appear because $\energy{\rho}$ is the product of two time components, particle energy $\mechanical{p}^t$ and particle density $N^t$. Thus $\energy{\rho}=\mechanical{p}^tN^t=T^{tt}$, one component of a tensor built from two four-vectors.

### PDF page 33

For dust,
$$
\boldsymbol{T}=\boldsymbol{N}\otimes\mechanical{\boldsymbol{p}}
=\energy{\rho}_0\,\mechanical{\boldsymbol{u}}\otimes\mechanical{\boldsymbol{u}},
\qquad T^{\alpha\beta}=\energy{\rho}_0\mechanical{u}^\alpha\mechanical{u}^\beta.
$$

Evaluating $\boldsymbol{T}$ on $dx^\alpha$ and $dx^\beta$ gives the flux of four-momentum component $\alpha$ across surfaces of constant $x^\beta$. In the chosen Cartesian frame:

- $T^{00}=\energy{\rho}_0\mechanical{u}^t\mechanical{u}^t=\energy{\rho}$ is the energy density.
- $T^{0i}=\gamma^2\energy{\rho}_0\mechanical{v}^i$ is the energy flux in direction $i$.
- $T^{i0}=\gamma^2\energy{\rho}_0\mechanical{v}^i$ is the density of momentum component $i$.
- $T^{ij}$ is the flux of momentum component $i$ in direction $j$.

### PDF page 34

For dust $T^{ij}=\gamma^2\energy{\rho}_0\mechanical{v}^i\mechanical{v}^j$. The stress-energy tensor is symmetric. For other kinds of matter, use the physical interpretation of each component to construct the tensor.

#### Perfect fluids

A perfect fluid has zero energy flux and shear stress in its rest frame, and zero viscosity. Its rest-frame energy density is $\energy{\rho}$ and its isotropic spatial stress is the pressure $\mechanical{P}$. In that frame $T^{\alpha\beta}=\operatorname{diag}(\energy{\rho},\mechanical{P},\mechanical{P},\mechanical{P})$. Pressure also contributes to gravity.

In covariant form, the spatial projector in the fluid rest frame is $\eta^{\alpha\beta}+\mechanical{u}^\alpha\mechanical{u}^\beta$. Hence

$$
\begin{aligned}
T^{\alpha\beta}
&=\energy{\rho}\,\mechanical{u}^\alpha\mechanical{u}^\beta
+\mechanical{P}(\eta^{\alpha\beta}+\mechanical{u}^\alpha\mechanical{u}^\beta)\\
&=(\energy{\rho}+\mechanical{P})\mechanical{u}^\alpha\mechanical{u}^\beta+\mechanical{P}\eta^{\alpha\beta}.
\end{aligned}
$$

### PDF page 35

#### Newtonian field equation and the stress-energy source

Newtonian gravity obeys $\nabla^2\mechanical{\Phi}=4\pi G\mechanical{\rho}$ for mass density $\mechanical{\rho}$. The relativistic source is the stress-energy tensor $T^{\alpha\beta}$, which includes the energy density as one component.

To motivate the symmetry $T^{ij}=T^{ji}$, consider a cube of side $\mechanical{\ell}$ immersed in a medium with stress-energy $T^{\alpha\beta}$. Examine the forces from the momentum flux through the faces, starting with face 1. The face labels are 1 front, 2 right, 3 back, and 4 left.

![[Kyle Kabasares - General Relativity - Cube stress faces.png|**Fig. 13** Cube and labeled faces for the momentum-flux calculation.]]

### PDF page 36

The force components on faces 1 and 2 are $F_1^i=T^{ix}\mechanical{\ell}^2$ and $F_2^i=T^{iy}\mechanical{\ell}^2$. Opposite faces have $\mechanical{\mathbf{F}}_3=-\mechanical{\mathbf{F}}_1$ and $\mechanical{\mathbf{F}}_4=-\mechanical{\mathbf{F}}_2$ for a uniform stress.

Sum $\mechanical{\mathbf{r}}\times\mechanical{\mathbf{F}}$ over the faces for the torque about the cube's center. The notes use $\mechanical{\tau}^z=\mechanical{\ell}^3(T^{xy}-T^{yx})$. With a dimensionless shape constant $a$, the moment of inertia scales as $\mechanical{I}=a(\mechanical{\rho}\mechanical{\ell}^3)\mechanical{\ell}^2=a\mechanical{\rho}\mechanical{\ell}^5$. Thus at fixed density the angular acceleration is

$$
\ddot\theta=\frac{\mechanical{\tau}^z}{\mechanical{I}}\propto\frac{T^{xy}-T^{yx}}{\mechanical{\ell}^2}.
$$

For ordinary continuum matter without intrinsic torques, a finite small-element limit requires $T^{xy}=T^{yx}$. Repeating the argument about the other axes gives $T^{ij}=T^{ji}$.

### PDF page 37

#### Energy and momentum conservation

A nonsymmetric stress-energy tensor would imply unusual matter behavior in the cube argument. In a Cartesian inertial frame, local conservation of energy and momentum is $\partial_\alpha T^{\alpha\beta}=0$. Its time and space components, using symmetry, are

$$
\frac{\partial T^{00}}{\partial t}=-\frac{\partial T^{0i}}{\partial x^i},
\qquad
\frac{\partial T^{i0}}{\partial t}=-\frac{\partial T^{ij}}{\partial x^j}.
$$

The integral form of the energy equation, used in the problem set, is

$$
\frac{\partial}{\partial t}\int_{\mathcal{V}}T^{00}\,d^3x
=-\int_{\partial\mathcal{V}}T^{0i}\,d\Sigma_i.
$$

### PDF page 38

#### Point particle and electromagnetic stress-energy

For a particle of rest mass $\mechanical{m}_0$ on the worldline $\mechanical{\boldsymbol{z}}(\tau)$,

$$
T^{\mu\nu}(x)=\mechanical{m}_0\int\mechanical{u}^\mu\mechanical{u}^\nu
\delta^{(4)}[x-z(\tau)]\,d\tau.
$$

The four-dimensional delta is the product of $\delta[t-z^0(\tau)]$ and the three spatial delta functions. For a simple root $g(x_0)=0$, $\int f(x)\delta[g(x)]\,dx=f(x_0)/\lvert g'(x_0)\rvert$. Using the time delta gives $T^{\mu\nu}=\mechanical{m}_0\mechanical{u}^\mu\mechanical{u}^\nu\delta^{(3)}[\mathbf{x}-\mathbf{z}(\tau)]/\mechanical{u}^0$, with $\tau$ evaluated at $z^0(\tau)=t$.

The electromagnetic field has

$$
T_{\mathrm{EM}}^{\mu\nu}=\frac{1}{4\pi}
\left(F^{\mu\lambda}F^\nu{}_\lambda-\frac14\eta^{\mu\nu}F^{\lambda\sigma}F_{\lambda\sigma}\right).
$$

In Gaussian units with $c=1$, its components are

$$
\begin{aligned}
T^{00}&=\frac{\electric{\mathbf{E}}^2+\magnetic{\mathbf{B}}^2}{8\pi},\\
T^{0i}&=\frac{(\electric{\mathbf{E}}\times\magnetic{\mathbf{B}})^i}{4\pi},\\
T^{ij}&=\frac{(\electric{\mathbf{E}}^2+\magnetic{\mathbf{B}}^2)\delta^{ij}
-2(\electric{E}^i\electric{E}^j+\magnetic{B}^i\magnetic{B}^j)}{8\pi}.
\end{aligned}
$$

### PDF page 39

For a purely electric field $\electric{\mathbf{E}}=\electric{E}^x\mathbf{e}_x$, the electromagnetic tensor is $T_{\mathrm{EM}}^{\mu\nu}=(\electric{E}^x)^2\operatorname{diag}(1,-1,1,1)/(8\pi)$.

#### Prelude to curvature. Flat spacetime in curvilinear coordinates

Replace $(t,x,y,z)$ by cylindrical coordinates $(t,r,\phi,z)$ with $\mechanical{x}=\mechanical{r}\cos\phi$ and $\mechanical{y}=\mechanical{r}\sin\phi$. Continue to use a coordinate basis:

$$
d\mechanical{\boldsymbol{x}}
=dx^\alpha\boldsymbol{e}_\alpha
=dt\,\boldsymbol{e}_t+d\mechanical{r}\,\boldsymbol{e}_r+d\phi\,\boldsymbol{e}_\phi+d\mechanical{z}\,\boldsymbol{e}_z.
$$

The displacement has units of length and $d\phi$ is an angle, so $\boldsymbol{e}_\phi$ carries units of length and $\boldsymbol{e}_\phi\cdot\boldsymbol{e}_\phi$ is generally different from one. For changes of coordinates, denote the Jacobian by $L^\alpha{}_{\bar\mu}=\partial x^\alpha/\partial x^{\bar\mu}$, reserving $\Lambda$ for Lorentz transformations.

### PDF page 40

The barred coordinates are cylindrical and the unbarred coordinates Cartesian. Differentiating the coordinate relations gives the forward and inverse Jacobians:

$$
L^\alpha{}_{\bar\mu}=\frac{\partial x^\alpha}{\partial x^{\bar\mu}}=
\begin{pmatrix}
1&0&0&0\\
0&\cos\phi&-\mechanical{r}\sin\phi&0\\
0&\sin\phi&\mechanical{r}\cos\phi&0\\
0&0&0&1
\end{pmatrix},
\qquad
L^{\bar\mu}{}_\alpha=\frac{\partial x^{\bar\mu}}{\partial x^\alpha}=
\begin{pmatrix}
1&0&0&0\\
0&\cos\phi&\sin\phi&0\\
0&-\sin\phi/\mechanical{r}&\cos\phi/\mechanical{r}&0\\
0&0&0&1
\end{pmatrix}.
$$

The handwritten spatial blocks place the mixed radial and angular terms in transposed positions and show zeros in the last rows. The matrices above use output coordinates as rows and preserve $z$ in both directions.

### PDF page 41

#### Lecture 6. The principle of equivalence

The cylindrical coordinate basis vectors in the plane are

$$
\begin{aligned}
\boldsymbol{e}_r&=\cos\phi\,\boldsymbol{e}_x+\sin\phi\,\boldsymbol{e}_y=L^\alpha{}_r\boldsymbol{e}_\alpha,\\
\boldsymbol{e}_\phi&=-\mechanical{r}\sin\phi\,\boldsymbol{e}_x+\mechanical{r}\cos\phi\,\boldsymbol{e}_y=L^\alpha{}_\phi\boldsymbol{e}_\alpha .
\end{aligned}
$$

Their scalar products give the metric $g_{\alpha\beta}=\operatorname{diag}(-1,1,\mechanical{r}^2,1)$ in plane-polar coordinates, with $t$ and $z$ retained. The line element is

$$
d\mechanical{s}^2=g_{\alpha\beta}\,dx^\alpha dx^\beta
=-dt^2+d\mechanical{r}^2+\mechanical{r}^2d\phi^2+d\mechanical{z}^2.
$$

The basis one-forms are $dr=L^r{}_\alpha dx^\alpha=\cos\phi\,dx+\sin\phi\,dy$ and $d\phi=(-\sin\phi\,dx+\cos\phi\,dy)/\mechanical{r}$.

Coordinate dependence of the basis matters when differentiating. For example, $\partial_r\boldsymbol{e}_r=0$ and $\partial_\phi\boldsymbol{e}_r=\boldsymbol{e}_\phi/\mechanical{r}$.

### PDF page 42

The other nonzero basis derivatives are $\partial_r\boldsymbol{e}_\phi=\boldsymbol{e}_\phi/\mechanical{r}$ and $\partial_\phi\boldsymbol{e}_\phi=-\mechanical{r}\boldsymbol{e}_r$.

For a vector $\boldsymbol{V}=V^\alpha\boldsymbol{e}_\alpha$, form the gradient $\nabla\boldsymbol{V}=\partial_\beta(V^\alpha\boldsymbol{e}_\alpha)\otimes\tilde\omega^\beta$ in flat spacetime. By the product rule,

$$
\partial_\beta\boldsymbol{V}=(\partial_\beta V^\alpha)\boldsymbol{e}_\alpha+V^\alpha\partial_\beta\boldsymbol{e}_\alpha.
$$

The complete expression accounts for both the component and basis variation. Expand the basis derivative as $\partial_\beta\boldsymbol{e}_\alpha=\Gamma^\mu{}_{\beta\alpha}\boldsymbol{e}_\mu$. The Christoffel symbols $\Gamma^\mu{}_{\beta\alpha}$ are connection coefficients with a non-tensorial transformation law. In plane-polar coordinates their only nonzero values are

$$
\Gamma^\phi{}_{r\phi}=\Gamma^\phi{}_{\phi r}=\frac{1}{\mechanical{r}},\qquad
\Gamma^r{}_{\phi\phi}=-\mechanical{r}.
$$

### PDF page 43

#### Covariant derivative of a vector

Substitute the connection into the basis derivative and exchange the dummy indices $\alpha$ and $\mu$ in the second term:

$$
\begin{aligned}
\partial_\beta\boldsymbol{V}
&=(\partial_\beta V^\alpha)\boldsymbol{e}_\alpha+V^\alpha\Gamma^\mu{}_{\beta\alpha}\boldsymbol{e}_\mu\\
&=(\partial_\beta V^\alpha+\Gamma^\alpha{}_{\beta\mu}V^\mu)\boldsymbol{e}_\alpha
=(\nabla_\beta V^\alpha)\boldsymbol{e}_\alpha .
\end{aligned}
$$

The covariant derivative $\nabla_\beta V^\alpha=\partial_\beta V^\alpha+\Gamma^\alpha{}_{\beta\mu}V^\mu$ gives the components of a tensor. The derivative of the components by itself depends on how the coordinate basis changes. In a coordinate transformation the Christoffel symbols acquire an extra term. With the derivative slot written first, $\nabla\boldsymbol{V}=(\nabla_\beta V^\alpha)\tilde\omega^\beta\otimes\boldsymbol{e}_\alpha$.

Contract the two indices to get the divergence. In cylindrical coordinates,

$$
\nabla_\alpha V^\alpha=\partial_\alpha V^\alpha+\Gamma^\alpha{}_{\alpha\mu}V^\mu
=\partial_tV^t+\partial_rV^r+\partial_zV^z+\partial_\phi V^\phi+\frac{V^r}{\mechanical{r}}.
$$

### PDF page 44

The cylindrical expansion $\boldsymbol{V}=V^t\boldsymbol{e}_t+V^r\boldsymbol{e}_r+V^z\boldsymbol{e}_z+V^\phi\boldsymbol{e}_\phi$ shows that $V^\phi$ has the units of the vector divided by length, because $\boldsymbol{e}_\phi$ carries a length.

#### Covariant derivative of a scalar and a one-form

A scalar has no basis factors, so $\nabla_\alpha\Phi=\partial_\alpha\Phi$. The contraction $p_\alpha A^\alpha$ of a one-form and a vector is a scalar. Use the ordinary product rule and replace the derivative of $A^\alpha$ by its covariant derivative minus the connection term:

$$
\begin{aligned}
\nabla_\beta(p_\alpha A^\alpha)
&=\partial_\beta(p_\alpha A^\alpha)
=A^\alpha\partial_\beta p_\alpha+p_\alpha\partial_\beta A^\alpha\\
&=p_\alpha\nabla_\beta A^\alpha+A^\alpha(\partial_\beta p_\alpha-\Gamma^\mu{}_{\beta\alpha}p_\mu).
\end{aligned}
$$

The last line relabels the dummy indices of the connection term. Requiring the covariant product rule yields $\nabla_\beta p_\alpha=\partial_\beta p_\alpha-\Gamma^\mu{}_{\beta\alpha}p_\mu$.

### PDF page 45

The dual basis derivative is $\partial_\beta\tilde\omega^\alpha=-\Gamma^\alpha{}_{\beta\mu}\tilde\omega^\mu$. Its minus sign follows by differentiating the constant pairing $\tilde\omega^\alpha(\boldsymbol{e}_\gamma)=\delta^\alpha_\gamma$.

#### Covariant derivative of a general tensor

$$
\begin{aligned}
\nabla_\beta T^{\mu\nu}
&=\partial_\beta T^{\mu\nu}
+\Gamma^\mu{}_{\beta\alpha}T^{\alpha\nu}+\Gamma^\nu{}_{\beta\alpha}T^{\mu\alpha},\\
\nabla_\beta T_{\mu\nu}
&=\partial_\beta T_{\mu\nu}
-\Gamma^\alpha{}_{\beta\mu}T_{\alpha\nu}-\Gamma^\alpha{}_{\beta\nu}T_{\mu\alpha},\\
\nabla_\beta T^{\mu\nu\cdots}{}_{\rho\tau\cdots}
&=\partial_\beta T^{\mu\nu\cdots}{}_{\rho\tau\cdots}
+\Gamma^\mu{}_{\beta\alpha}T^{\alpha\nu\cdots}{}_{\rho\tau\cdots}
+\Gamma^\nu{}_{\beta\alpha}T^{\mu\alpha\cdots}{}_{\rho\tau\cdots}+\cdots\\
&\quad-\Gamma^\alpha{}_{\beta\rho}T^{\mu\nu\cdots}{}_{\alpha\tau\cdots}
-\Gamma^\alpha{}_{\beta\tau}T^{\mu\nu\cdots}{}_{\rho\alpha\cdots}-\cdots .
\end{aligned}
$$

Use one positive connection term for each upper index and one negative term for each lower index. A more direct way to obtain the Christoffel symbols starts from the metric and its relation to the covariant derivative.

### PDF page 46

#### Symmetry of the connection

A tensor equation holds in every coordinate representation if it holds in one. For the double gradient of a smooth scalar $\phi$, Cartesian inertial coordinates give $\nabla\nabla\phi=(\partial_\alpha\partial_\beta\phi)\tilde\omega^\alpha\otimes\tilde\omega^\beta$. Its components are symmetric because the partial derivatives commute. In any coordinates the tensor is $(\nabla_\alpha\nabla_\beta\phi)\tilde\omega^\alpha\otimes\tilde\omega^\beta$, and the symmetry still holds.

The first derivative of a scalar is $\partial_\beta\phi$, so use the one-form derivative rule for the second:

$$
\begin{aligned}
\nabla_\alpha\nabla_\beta\phi&=\partial_\alpha\partial_\beta\phi-\Gamma^\mu{}_{\alpha\beta}\partial_\mu\phi,\\
\nabla_\beta\nabla_\alpha\phi&=\partial_\beta\partial_\alpha\phi-\Gamma^\mu{}_{\beta\alpha}\partial_\mu\phi.
\end{aligned}
$$

Equating these and canceling the partial derivatives gives $(\Gamma^\mu{}_{\alpha\beta}-\Gamma^\mu{}_{\beta\alpha})\partial_\mu\phi=0$.

### PDF page 47

Parentheses and brackets on indices denote symmetrization and antisymmetrization:

$$
A_{(\alpha\beta)}=\tfrac12(A_{\alpha\beta}+A_{\beta\alpha}),\qquad
A_{[\alpha\beta]}=\tfrac12(A_{\alpha\beta}-A_{\beta\alpha}).
$$

The connection satisfies $\Gamma^\mu{}_{\alpha\beta}=\Gamma^\mu{}_{(\alpha\beta)}$, so its contraction with an antisymmetric $A^{\alpha\beta}$ vanishes.

#### Christoffel symbols from the metric

The metric has zero covariant derivative in inertial Cartesian coordinates and therefore in every coordinate representation. Write $\nabla\boldsymbol{g}=(\nabla_\gamma g_{\alpha\beta})\tilde\omega^\alpha\otimes\tilde\omega^\beta\otimes\tilde\omega^\gamma$. Metric compatibility and two cyclic permutations give

$$
\begin{aligned}
0&=\nabla_\gamma g_{\alpha\beta}=\partial_\gamma g_{\alpha\beta}
-\Gamma^\mu{}_{\gamma\alpha}g_{\mu\beta}-\Gamma^\mu{}_{\gamma\beta}g_{\alpha\mu},\\
0&=\nabla_\alpha g_{\beta\gamma}=\partial_\alpha g_{\beta\gamma}
-\Gamma^\mu{}_{\alpha\beta}g_{\mu\gamma}-\Gamma^\mu{}_{\alpha\gamma}g_{\beta\mu},\\
0&=\nabla_\beta g_{\gamma\alpha}=\partial_\beta g_{\gamma\alpha}
-\Gamma^\mu{}_{\beta\gamma}g_{\mu\alpha}-\Gamma^\mu{}_{\beta\alpha}g_{\gamma\mu}.
\end{aligned}
$$

### PDF page 48

Subtract the second and third metric-compatibility equations from the first. Symmetry in the lower connection indices cancels the terms with $g_{\mu\beta}$ and $g_{\mu\alpha}$. The remaining equation gives the Christoffel symbols of the first and second kinds:

$$
\Gamma_{\gamma\alpha\beta}=g_{\gamma\mu}\Gamma^\mu{}_{\alpha\beta}
=\tfrac12(\partial_\alpha g_{\beta\gamma}+\partial_\beta g_{\gamma\alpha}-\partial_\gamma g_{\alpha\beta}),
\qquad
\Gamma^\mu{}_{\alpha\beta}=g^{\mu\gamma}\Gamma_{\gamma\alpha\beta}.
$$

#### Gravitational redshift

Special relativity uses global inertial frames. In the presence of gravity, local inertial frames still exist, while a global inertial frame generally cannot cover curved spacetime.

Drop a rock of rest mass $\mechanical{m}$ from a tower of height $\mechanical{h}$. At the bottom its energy is $\energy{E}_{\mathrm{bot}}=\mechanical{m}+\mechanical{m}\mechanical{g}\mechanical{h}$ in the weak-field approximation with $c=1$. An imagined device at the bottom converts the rock into a single photon while conserving energy.

![[Kyle Kabasares - General Relativity - Gravitational redshift tower.png|**Fig. 14** Tower, falling mass, and photon conversion device at the bottom.]]

### PDF page 49

The photon leaves the bottom with $\energy{E}_B=\hbar\signal{\omega}_B=\mechanical{m}(1+\mechanical{g}\mechanical{h})$. At the top a device converts the photon back into a rock. To close the cycle without gaining energy, the photon at the top has $\energy{E}_T=\hbar\signal{\omega}_T=\mechanical{m}$. Hence

$$
\frac{\signal{\omega}_T}{\signal{\omega}_B}
=\frac{\energy{E}_T}{\energy{E}_B}
=\frac{1}{1+\mechanical{g}\mechanical{h}}\simeq1-\mechanical{g}\mechanical{h}.
$$

The photon is redshifted as it climbs the tower.

### PDF page 50

#### Lecture 7. Principle of equivalence

In an inertial frame, a particle has zero acceleration when no forces act on it. Gravity appears to change this because it causes acceleration, but the gravitational force is proportional to the object's inertial mass. In the notes' analogy, mass is the gravitational charge. All freely falling objects at the same location therefore experience the same gravitational acceleration in a uniform field. With no other forces, they retain their relative velocities in that approximation.

A frame in free fall recovers the behavior of an inertial frame locally. Relative to the frame's own acceleration, the common gravitational acceleration cancels. The **weak equivalence principle** states that over a sufficiently small region, the motion of freely falling particles under gravity is indistinguishable from that seen in a uniformly accelerating frame. The lecture notes give a test precision of about $10^{-13}$.

### PDF page 51

#### Tides, curvature, and the Einstein equivalence principle

A freely falling frame recovers special relativity locally. There are two obstacles to extending it globally:

1. Free-fall frames differ from point to point, so a single such frame generally cannot cover the entire spacetime and the global Lorentz symmetry of Minkowski spacetime is lost.
2. In a nonuniform field, the top and bottom of a freely falling elevator have different accelerations. This is a tidal effect that survives a change of frame.

Tides cause initially parallel free-fall trajectories to deviate from one another. The notes connect this failure of Euclidean parallelism to curvature and identify tidal effects as the fundamental gravitational field.

The size of the region in which an inertial description is accurate depends on the curvature. The **Einstein equivalence principle** extends the weak principle by stating that in sufficiently small regions of spacetime, one can choose a freely falling frame in which local nongravitational physics reduces to special relativity.

### PDF page 52

The **strong equivalence principle** extends universality of free fall to gravitational self-energy. The notes summarize it by saying that gravitational energy falls like ordinary mass-energy.

#### Constructing a locally Lorentzian frame

Start with coordinates $x^\alpha$ and metric $g_{\alpha\beta}$. Seek coordinates $x^{\bar\alpha}$ near an event $P$, with respective coordinate labels $x_P^\alpha$ and $x_P^{\bar\alpha}$. For a map $x^\alpha=x^\alpha(x^{\bar\beta})$, set $L^\alpha{}_{\bar\beta}=\partial x^\alpha/\partial x^{\bar\beta}$. The target is to make the transformed metric Minkowskian through as many orders in distance from $P$ as possible:

$$
g_{\bar\mu\bar\nu}=L^\alpha{}_{\bar\mu} L^\beta{}_{\bar\nu}g_{\alpha\beta}\simeq\eta_{\bar\mu\bar\nu}.
$$

Expand $L^\alpha{}_{\bar\mu}L^\beta{}_{\bar\nu}g_{\alpha\beta}$ in a Taylor series about $P$ to see which coefficients can be set by the coordinate choice.

### PDF page 53

Compare the constraints imposed by the given metric and its derivatives with the degrees of freedom in the coordinate transformation. Set $\Delta x^{\bar\gamma}=x^{\bar\gamma}-x_P^{\bar\gamma}$. Expand the original metric components as functions of the barred coordinates and expand the transformation matrix as well:

$$
\begin{aligned}
g_{\alpha\beta}(x)&=g_{\alpha\beta}(P)+\Delta x^{\bar\gamma}(\partial_{\bar\gamma}g_{\alpha\beta})_P
+\tfrac12\Delta x^{\bar\gamma}\Delta x^{\bar\delta}(\partial_{\bar\gamma}\partial_{\bar\delta}g_{\alpha\beta})_P+\cdots,\\
L^\alpha{}_{\bar\mu}(x)&=L^\alpha{}_{\bar\mu}(P)+\Delta x^{\bar\gamma}(\partial_{\bar\gamma}L^\alpha{}_{\bar\mu})_P
+\tfrac12\Delta x^{\bar\gamma}\Delta x^{\bar\delta}(\partial_{\bar\gamma}\partial_{\bar\delta}L^\alpha{}_{\bar\mu})_P+\cdots.
\end{aligned}
$$

In $g_{\bar\mu\bar\nu}=L^\alpha{}_{\bar\mu}L^\beta{}_{\bar\nu}g_{\alpha\beta}$ the constant term is the product evaluated at $P$. The linear terms involve first derivatives, and the quadratic terms involve derivatives up to second order. Choose the available derivatives of $L$ to match $\eta=\operatorname{diag}(-1,1,1,1)$ as closely as possible. At zeroth order, the symmetry of the $4\times4$ metric leaves ten independent conditions.

### PDF page 54

- **Zeroth order.** The Jacobian $L^\alpha{}_{\bar\mu}(P)$ has 16 entries. Setting the metric to $\eta_{\bar\mu\bar\nu}$ uses 10 degrees of freedom. The remaining six correspond to three boosts and three rotations.
- **First order.** The metric has $10\times4=40$ independent first derivatives. The adjustable coefficients $\partial_{\bar\gamma}L^\alpha{}_{\bar\mu}=\partial_{\bar\gamma}\partial_{\bar\mu}x^\alpha$ have one symmetric pair and one unrestricted index, giving $4\times10=40$ degrees of freedom. These suffice to make the first derivatives of the metric vanish at $P$.
- **Second order.** The two symmetric index pairs on $\partial_{\bar\gamma}\partial_{\bar\delta}g_{\alpha\beta}$ give $10\times10=100$ constraints. The coefficients $\partial_{\bar\gamma}\partial_{\bar\delta}L^\alpha{}_{\bar\mu}$ have three symmetric barred indices and four choices of $\alpha$. That gives $4[n(n+1)(n+2)/3!]_{n=4}=80$ degrees of freedom. A general metric cannot have all its second derivatives removed by a coordinate change.

### PDF page 55

Near $P$ the metric can be written

$$
g_{\bar\mu\bar\nu}=\eta_{\bar\mu\bar\nu}+O\!\bigl[(\partial^2g)(\delta x)^2\bigr],
$$

where $\delta x$ is the coordinate distance from $P$ and $\partial^2g$ denotes the scale of the second derivatives in these coordinates.

1. The frame is locally inertial up to quadratic corrections. Newtonian tides involve second derivatives of the potential, suggesting that the metric plays a role analogous to the gravitational potential.
2. The second-derivative terms contain curvature. The count $100-80=20$ anticipates the 20 independent components of spacetime curvature in four dimensions.
3. The inertial approximation breaks down on the scale $\delta x\sim1/\sqrt{\lvert\partial^2g\rvert}$.

Riemann normal coordinates explicitly realize this form.

### PDF page 56

#### Curvature and curved manifolds

On a curved manifold, initially parallel geodesics can cease to be parallel. The surface of a sphere has intrinsic curvature. The surface of a cylinder is intrinsically flat and can be unrolled locally.

Vectors live in tangent spaces. On a sphere, visualize the tangent space at a point as the plane tangent to the surface there. Different points have different tangent spaces, and the variation of the basis from point to point enters into derivatives.

![[Kyle Kabasares - General Relativity - Sphere tangent plane.png|**Fig. 15** Tangent plane at a point on a sphere.]]

Consider a curve $\gamma$ with tangent vector $\boldsymbol{u}$ and a vector field $\boldsymbol{A}$ in its vicinity. To differentiate $\boldsymbol{A}$ along $\gamma$, one needs a rule for comparing vectors in the tangent spaces of nearby points.

### PDF page 57

![[Kyle Kabasares - General Relativity - Vector field at neighboring points.png|**Fig. 16** Vector field values at neighboring points P and Q on a curve.]]

The tangent is $\boldsymbol{u}=d\boldsymbol{x}/d\lambda$, where $\lambda$ is an affine parameter that sets the scale along the curve. For points $P$ at $x^\alpha$ and $Q$ at $x^\alpha+dx^\alpha$, a first guess is to differentiate the components by taking their difference quotient. This ignores the variation of the basis because $P$ and $Q$ have different tangent spaces.

To test whether $\partial_\beta A^\alpha$ is tensorial, ask whether

$$
\partial_{\beta'}A^{\alpha'}\overset{?}{=}
\frac{\partial x^{\alpha'}}{\partial x^\alpha}
\frac{\partial x^\beta}{\partial x^{\beta'}}\partial_\beta A^\alpha .
$$

The separate transformation laws are $A^{\alpha'}=(\partial x^{\alpha'}/\partial x^\alpha)A^\alpha$ and $\partial_{\beta'}=(\partial x^\beta/\partial x^{\beta'})\partial_\beta$.

### PDF page 58

Applying both transformations and using the product rule gives

$$
\partial_{\beta'} A^{\alpha'}
=\frac{\partial x^\beta}{\partial x^{\beta'}}
\left(\frac{\partial x^{\alpha'}}{\partial x^\alpha}\partial_\beta A^\alpha
+A^\alpha\frac{\partial^2x^{\alpha'}}{\partial x^\beta\partial x^\alpha}\right).
$$

The second term shows that the partial derivative of vector components fails the tensor transformation law for general coordinate changes.

#### Parallel transport

Before comparing the vector field values, transport the vector at $Q$ back to $P$ along $\gamma$. In flat spacetime there is a canonical identification of tangent spaces that previous applications used implicitly. For curved spacetime we need an explicit transport rule.

![[Kyle Kabasares - General Relativity - Parallel transport to a nearby point.png|**Fig. 17** Transport of the vector at Q back along the curve to P.]]

### PDF page 59

Let $\Pi^\alpha{}_{\beta\mu}$ be the connection used to transport a vector from $P$ to nearby $Q$:

$$
A^\alpha_{\mathrm{PT}}(P\to Q)=A^\alpha(P)-\Pi^\alpha{}_{\beta\mu}A^\mu\,dx^\beta.
$$

For an infinitesimal step along coordinate $\beta$, compare $A^\alpha(Q)$ with $A^\alpha_{\mathrm{PT}}(P\to Q)$ in the tangent space at $Q$ and divide by the coordinate increment. The limit gives $D_\beta A^\alpha=\partial_\beta A^\alpha+\Pi^\alpha{}_{\beta\mu}A^\mu$.

Require the contracted connection term to transform as

$$
\Pi^{\alpha'}{}_{\beta'\mu'}A^{\mu'}=
\frac{\partial x^{\alpha'}}{\partial x^\alpha}\frac{\partial x^\beta}{\partial x^{\beta'}}
\Pi^\alpha{}_{\beta\mu}A^\mu
-\frac{\partial^2x^{\alpha'}}{\partial x^\beta\partial x^\mu}
\frac{\partial x^\beta}{\partial x^{\beta'}}A^\mu.
$$

The inhomogeneous term cancels the extra term in the partial derivative, so $D_\beta A^\alpha$ transforms as a tensor. Also require $D_\gamma g_{\alpha\beta}=0$, consistent with the metric in a locally Lorentzian frame. Together with the symmetric connection, these conditions determine the Christoffel symbols.

### PDF page 60

The connection is $\Pi^\alpha{}_{\beta\mu}=\Gamma^\alpha{}_{\beta\mu}$ and $D_\beta=\nabla_\beta$. Along a curve $\gamma$ with tangent $u^\alpha=dx^\alpha/d\lambda$, the derivative of a vector along the curve is

$$
\frac{DA^\alpha}{d\lambda}=u^\beta\nabla_\beta A^\alpha
=u^\beta(\partial_\beta A^\alpha+\Gamma^\alpha{}_{\beta\mu}A^\mu).
$$

Parallel transport along $\gamma$ is defined by $DA^\alpha/d\lambda=0$. The notes next evaluate this rule in a freely falling local Lorentz frame.

![[Kyle Kabasares - General Relativity - Parallel transport along a curve.png|**Fig. 18** Vector at a point on the curve along which it is transported.]]

### PDF page 61

At the origin of a local Lorentz frame, $\Gamma^\alpha{}_{\beta\mu}=0$. The transport equation becomes $u^\beta\partial_\beta A^\alpha=dA^\alpha/d\lambda=0$. In this frame, parallel transport keeps the components fixed to first order along the curve.

#### Lecture 8. Lie transport, Killing vectors, and tensor densities

In a locally Lorentzian frame, $g_{\mu\nu}=\eta_{\mu\nu}+O[(\delta x)^2\partial^2 g]$. The curvature length scale is of order $1/\sqrt{\lvert\partial^2g\rvert}$.

The lecture recaps why partial derivatives of vector components fail to transform as tensors. The transformed derivative $\partial_{\beta'}A^{\alpha'}$ contains the term $(\partial x^\beta/\partial x^{\beta'})A^\alpha\partial_\beta\partial_\alpha x^{\alpha'}$ in addition to the ordinary tensor transformation term. Parallel transport supplies a way to compare values of a vector at different points.

![[Kyle Kabasares - General Relativity - Parallel transport recap.png|**Fig. 19** Values of a vector field at the points used in the transport comparison.]]

### PDF page 62

The recap defines transport by $A^\alpha_T(P\to Q)=A^\alpha(P)-\Pi^\alpha{}_{\beta\mu}dx^\beta A^\mu$. Compare the transported vector with the actual field at $Q$ and take the infinitesimal coordinate quotient:

$$
D_\beta A^\alpha=\lim_{dx^\beta\to0}\frac{A^\alpha(Q)-A^\alpha_T(P\to Q)}{dx^\beta}
=\partial_\beta A^\alpha+\Pi^\alpha{}_{\beta\mu}A^\mu.
$$

The required transformation of the connection term is

$$
\Pi^{\alpha'}{}_{\beta'\mu'}A^{\mu'}
=\frac{\partial x^{\alpha'}}{\partial x^\alpha}\frac{\partial x^\beta}{\partial x^{\beta'}}
\Pi^\alpha{}_{\beta\mu}A^\mu
-\frac{\partial^2x^{\alpha'}}{\partial x^\beta\partial x^\mu}
\frac{\partial x^\beta}{\partial x^{\beta'}} A^\mu.
$$

The second term cancels the extra term produced when the partial derivative acts on the Jacobian.

### PDF page 63

With metric compatibility $D_\beta g_{\mu\nu}=0$ and a symmetric connection, $\Pi^\alpha{}_{\beta\mu}=\Gamma^\alpha{}_{\beta\mu}$. Hence $D_\beta$ is the covariant derivative $\nabla_\beta$.

Let $\lambda$ mark uniform parameter increments along $\gamma$ and let $u^\alpha=dx^\alpha/d\lambda$ be its tangent. The covariant rate of change of a vector along the curve is

$$
\frac{DA^\alpha}{d\lambda}=u^\beta\nabla_\beta A^\alpha
=u^\beta(\partial_\beta A^\alpha+\Gamma^\alpha{}_{\beta\mu}A^\mu).
$$

Parallel transport sets this rate to zero. For a sufficiently short step, use the local Lorentz frame at the starting point, where the connection vanishes at that point.

![[Kyle Kabasares - General Relativity - Affine parameter transport.png|**Fig. 20** Parallel transport between points marked by an affine parameter on the curve.]]

### PDF page 64

In the local Lorentz frame the parallel-transport equation reduces to $dA^\alpha/d\lambda=0$ at the reference event. This keeps the vector as parallel as the local geometry allows.

#### Lie transport

For $\gamma$ with tangent $u^\alpha$, regard the shift from $P$ to $Q$ as the infinitesimal flow map $(x')^\alpha=x^\alpha+u^\alpha d\lambda$. Its Jacobian pushes the vector at $P$ to $Q$:

$$
\begin{aligned}
A_{\mathrm{LT}}^\alpha(P\to Q)
&=\frac{\partial(x')^\alpha}{\partial x^\beta}A^\beta(P)\\
&=(\delta^\alpha_\beta+\partial_\beta u^\alpha\,d\lambda)A^\beta(P)\\
&=A^\alpha(P)+d\lambda\,A^\beta(P)\partial_\beta u^\alpha.
\end{aligned}
$$

The actual field at $Q$ is $A^\alpha(x^\beta+dx^\beta)$ and can be Taylor expanded about $P$ for comparison.

![[Kyle Kabasares - General Relativity - Lie transport flow.png|**Fig. 21** Nearby points related by a small step of the flow along the curve.]]

### PDF page 65

At first order, $A^\alpha(Q)=A^\alpha(P)+d\lambda\,u^\beta\partial_\beta A^\alpha(P)$. Subtract the Lie-transported vector and divide by $d\lambda$ in the limit. The **Lie derivative** of $\boldsymbol{A}$ along $\boldsymbol{u}$ is the vector with components

$$
(\mathcal{L}_{\boldsymbol{u}}\boldsymbol{A})^\alpha
=u^\beta\partial_\beta A^\alpha-A^\beta\partial_\beta u^\alpha
=u^\beta\nabla_\beta A^\alpha-A^\beta\nabla_\beta u^\alpha .
$$

The connection terms cancel by symmetry, and the expression is the Lie bracket $[\boldsymbol{u},\boldsymbol{A}]$. The corresponding formulas for a scalar, a one-form, and a mixed tensor are

$$
\begin{aligned}
\mathcal{L}_{\boldsymbol{u}}\Phi
&=u^\alpha\partial_\alpha\Phi=u^\alpha\nabla_\alpha\Phi,\\
(\mathcal{L}_{\boldsymbol{u}}p)_\alpha
&=u^\beta\nabla_\beta p_\alpha+p_\beta\nabla_\alpha u^\beta,\\
(\mathcal{L}_{\boldsymbol{u}}T)^\alpha{}_\beta
&=u^\mu\nabla_\mu T^\alpha{}_\beta
-T^\mu{}_\beta\nabla_\mu u^\alpha+T^\alpha{}_\mu\nabla_\beta u^\mu .
\end{aligned}
$$

The covariant derivatives in these formulas can be replaced by partial derivatives as a group. If $\mathcal{L}_{\boldsymbol{u}}T=0$, the tensor field is Lie-transported by the flow of $\boldsymbol{u}$.

### PDF page 66

Choose coordinates adapted to the flow of $\boldsymbol{u}$ in a region where it is nonzero. Let $x^0=\lambda$ along the curve and keep $x^1,x^2,x^3$ constant along the flow. Then $u^\alpha=\delta^\alpha_0$ throughout the coordinate patch and $\partial_\mu u^\alpha=0$. The Lie derivative of tensor components is simply their partial derivative with respect to $x^0$. For a Lie-transported tensor that derivative vanishes.

#### Killing vectors and metric symmetries

Suppose $\mathcal{L}_{\boldsymbol{\xi}}g=0$. In coordinates adapted to a nonzero $\boldsymbol{\xi}$, the metric is independent of the coordinate in the flow direction, $\partial_\gamma g_{\alpha\beta}=0$ for that particular $\gamma$. Conversely, if the metric is independent of $x^0$, its coordinate vector $\partial/\partial x^0$ Lie-transports the metric.

### PDF page 67

Expand the Lie derivative of the metric:

$$
0=(\mathcal{L}_{\boldsymbol{\xi}}g)_{\alpha\beta}
=\xi^\gamma\nabla_\gamma g_{\alpha\beta}
+g_{\alpha\gamma}\nabla_\beta\xi^\gamma
+g_{\beta\gamma}\nabla_\alpha\xi^\gamma.
$$

Metric compatibility makes the first term vanish and allows the metric in the other terms to move inside the derivative. The **Killing equation** is $\nabla_\alpha\xi_\beta+\nabla_\beta\xi_\alpha=0$, or $\nabla_{(\alpha}\xi_{\beta)}=0$. A solution $\boldsymbol{\xi}$ is a Killing vector.

For a freely falling body, $\mechanical{u}^\alpha\nabla_\alpha\mechanical{u}^\beta=0$. If the spacetime has a Killing vector, $C=\mechanical{u}^\alpha\xi_\alpha$ is constant along the motion. When the metric is independent of time, the corresponding Killing vector gives the conserved energy, with the sign and mass factor set by normalization.

### PDF page 68

A metric independent of the azimuth $\phi$ has a rotational Killing vector. Its conserved quantity $C$ corresponds to angular momentum.

#### Tensor densities

A tensor density transforms with the tensor index factors and an additional power of the determinant of the coordinate transformation matrix. The lecture's main examples are the Levi-Civita symbol and the determinant of the metric.

The symbol $\tilde\epsilon_{\alpha\beta\gamma\delta}$ equals $+1$ for even permutations of $(0,1,2,3)$, $-1$ for odd permutations, and $0$ if any index is repeated. For any $4\times4$ matrix $M^\alpha{}_\mu$,

$$
\tilde\epsilon_{\alpha\beta\gamma\delta}M^\alpha{}_\mu M^\beta{}_\nu M^\gamma{}_\rho M^\delta{}_\sigma
=\tilde\epsilon_{\mu\nu\rho\sigma}\det M.
$$

### PDF page 69

For the coordinate change $M^\alpha{}_{\mu'}=\partial x^\alpha/\partial x^{\mu'}$, the Levi-Civita symbol has the ordinary four covariant Jacobian factors times $\det(M^{-1})$:

$$
\tilde\epsilon_{\alpha'\beta'\gamma'\delta'}
=\det(M^{-1})\,\tilde\epsilon_{\alpha\beta\gamma\delta}
M^\alpha{}_{\alpha'}M^\beta{}_{\beta'}M^\gamma{}_{\gamma'}M^\delta{}_{\delta'}.
$$

The notes call this a tensor density of weight $1$ in their convention. The determinant here is signed, or one can restrict to orientation-preserving coordinates.

In three-dimensional spherical coordinates, $d\mechanical{s}^2=d\mechanical{r}^2+\mechanical{r}^2d\theta^2+\mechanical{r}^2\sin^2\theta\,d\phi^2$. Thus $g_{ij}=\operatorname{diag}(1,\mechanical{r}^2,\mechanical{r}^2\sin^2\theta)$, $g=\det g_{ij}=\mechanical{r}^4\sin^2\theta$, and $\sqrt{g}=\mechanical{r}^2\sin\theta$ in the usual angular range.

#### Lecture 9. Geodesics

The lecture starts by recapping the weight-$1$ transformation of the Levi-Civita symbol. Under the same coordinate transformation, $g_{\alpha'\beta'}=M^\alpha{}_{\alpha'}M^\beta{}_{\beta'}g_{\alpha\beta}$. Taking determinants gives $g'=(\det M)^2g$.

### PDF page 70

Equivalently, $g'=[\det(\partial x'/\partial x)]^{-2}g$. In the notes' convention the determinant of the metric is therefore a scalar density of weight $-2$. In an orientation-preserving chart, multiply a tensor density of weight $w$ by $\lvert g\rvert^{w/2}$ to obtain a tensor. The absolute value makes the square root real for the Lorentzian signature.

$$
\epsilon_{\alpha\beta\gamma\delta}
=\sqrt{\lvert g\rvert}\,\tilde\epsilon_{\alpha\beta\gamma\delta},\qquad
\epsilon^{\alpha\beta\gamma\delta}
=\frac{\tilde\epsilon^{\alpha\beta\gamma\delta}}{\sqrt{\lvert g\rvert}}.
$$

With $\epsilon_{0123}=+\sqrt{\lvert g\rvert}$, the upper-index symbol has $\tilde\epsilon^{0123}=-1$ in Lorentzian signature. The covariant four-volume is obtained by applying the volume form to four differential edge vectors. For coordinate-aligned edges, this is

$$
d\mathcal{V}_4=\sqrt{\lvert g\rvert}\,dx^0\,dx^1\,dx^2\,dx^3.
$$

![[Kyle Kabasares - General Relativity - Volume element axes.png|**Fig. 22** Three spatial edges of the volume element, with the time direction omitted in the sketch.]]

### PDF page 71

In ordinary three-dimensional spherical coordinates the metric is $\operatorname{diag}(1,\mechanical{r}^2,\mechanical{r}^2\sin^2\theta)$, giving $d\mathcal{V}_3=\sqrt{\lvert g\rvert}\,d\mechanical{r}\,d\theta\,d\phi=\mechanical{r}^2\sin\theta\,d\mechanical{r}\,d\theta\,d\phi$.

#### Contracted Christoffel symbol

Contract the definition of the Christoffel symbol:

$$
\Gamma^\mu{}_{\mu\alpha}
=\tfrac12g^{\mu\beta}(\partial_\mu g_{\beta\alpha}+\partial_\alpha g_{\beta\mu}-\partial_\beta g_{\mu\alpha})
=\tfrac12 g^{\mu\beta}\partial_\alpha g_{\mu\beta}.
$$

The first and third terms cancel because $g^{\mu\beta}$ is symmetric while their sum is antisymmetric in $\mu,\beta$. The target identity is $\Gamma^\mu{}_{\mu\alpha}=\partial_\alpha\ln\sqrt{\lvert g\rvert}=(1/\sqrt{\lvert g\rvert})\partial_\alpha\sqrt{\lvert g\rvert}$.

To prove it, consider an invertible matrix $M$. The first-order change in the logarithm of its determinant is obtained from $\ln\lvert\det(M+\delta M)\rvert-\ln\lvert\det M\rvert$.

### PDF page 72

By multiplicativity of determinants, the logarithmic difference is $\ln\det(I+M^{-1}\delta M)$ for a sufficiently small variation. For a small matrix $\varepsilon$, $\det(I+\varepsilon)=1+\operatorname{tr}\varepsilon+O(\varepsilon^2)$. Set $\varepsilon=M^{-1}\delta M$ and expand the logarithm to first order:

$$
\delta\ln\lvert\det M\rvert=\operatorname{tr}(M^{-1}\delta M).
$$

For $M=(g_{\alpha\beta})$, the inverse has components $g^{\alpha\beta}$. Taking the trace contracts the upper and lower indices, so

$$
\delta\ln\lvert g\rvert=\operatorname{tr}(g^{-1}\delta g)=g^{\mu\beta}\delta g_{\beta\mu}.
$$

For a covariant array $\varepsilon_{\alpha\beta}$ the corresponding metric trace is $g^{\alpha\beta}\varepsilon_{\alpha\beta}=\varepsilon^\beta{}_\beta$.

### PDF page 73

Taking the variation along coordinate $x^\alpha$ gives $\partial_\alpha\ln\lvert g\rvert=g^{\mu\beta}\partial_\alpha g_{\beta\mu}$. Thus

$$
\Gamma^\mu{}_{\mu\alpha}
=\tfrac12g^{\mu\beta}\partial_\alpha g_{\beta\mu}
=\tfrac12\partial_\alpha\ln\lvert g\rvert
=\partial_\alpha\ln\sqrt{\lvert g\rvert}.
$$

For the spacetime divergence of a vector field, the product rule combines the ordinary derivative and the contracted connection:

$$
\begin{aligned}
\nabla_\alpha A^\alpha&=\partial_\alpha A^\alpha+\Gamma^\beta{}_{\beta\alpha}A^\alpha\\
&=\partial_\alpha A^\alpha+\frac{A^\alpha}{\sqrt{\lvert g\rvert}}\partial_\alpha\sqrt{\lvert g\rvert}
=\frac{1}{\sqrt{\lvert g\rvert}}\partial_\alpha(\sqrt{\lvert g\rvert}A^\alpha).
\end{aligned}
$$

The invariant volume measure cancels the prefactor in the Gauss integral, giving $\int_{\mathcal{V}_4}\nabla_\alpha A^\alpha\sqrt{\lvert g\rvert}\,d^4x=\int_{\mathcal{V}_4}\partial_\alpha(\sqrt{\lvert g\rvert}A^\alpha)\,d^4x$.

### PDF page 74

For a rank-two tensor, the divergence retains a connection term for the free index:

$$
\nabla_\alpha A^{\alpha\beta}
=\partial_\alpha A^{\alpha\beta}
+\Gamma^\alpha{}_{\alpha\gamma}A^{\gamma\beta}
+\Gamma^\beta{}_{\alpha\gamma}A^{\alpha\gamma}.
$$

The determinant identity simplifies the first connection term. The second is generally still present in the conservation law $\nabla_\mu T^{\mu\beta}=0$.

#### Free-fall trajectories

Consider an ideal test body with mass, zero charge and spin, and negligible spatial extent. In a freely falling local Lorentz frame the motion is locally inertial, $x^\alpha=x_0^\alpha+\mechanical{u}^\alpha\tau$ to first order in proper time. Geometrically the body parallel-transports its own tangent.

Parametrize the trajectory by $\lambda$, with $u^\alpha=dx^\alpha/d\lambda$. Parallel transport of the tangent is $u^\alpha\nabla_\alpha u^\beta=0$, also written $\nabla_{\boldsymbol{u}}\boldsymbol{u}=0$ or $Du^\alpha/d\lambda=0$.

### PDF page 75

Expanding $u^\alpha\nabla_\alpha u^\beta=0$ gives the **geodesic equation**:

$$
\frac{du^\beta}{d\lambda}+\Gamma^\beta{}_{\alpha\mu}u^\alpha u^\mu=0,
\qquad
\frac{d^2x^\beta}{d\lambda^2}+\Gamma^\beta{}_{\alpha\mu}
\frac{dx^\alpha}{d\lambda}\frac{dx^\mu}{d\lambda}=0.
$$

Its solutions are geodesics. With another parameter $\lambda^*$, allow the scale of $u^\alpha=dx^\alpha/d\lambda^*$ to change while retaining its direction under transport: $Du^\alpha/d\lambda^*=K(\lambda^*)u^\alpha$. The homework exercise is to show that this right-hand side can always be removed by reparametrization. Set

$$
\frac{d\lambda}{d\lambda^*}=\exp\!\left[\int K(\lambda^*)\,d\lambda^*\right].
$$

Then $v^\alpha=dx^\alpha/d\lambda$ satisfies $v^\alpha\nabla_\alpha v^\beta=0$. A parameter for which the right-hand side vanishes is called **affine**. Its ticks are uniformly spaced in the local Lorentz frame.

### PDF page 76

For a timelike geodesic, proper time $\tau$ is an affine parameter. If $\lambda$ is affine, $\lambda'=a\lambda+b$ with constant $a\ne0$ and $b$ is affine too.

#### Geodesics from a variational principle

A second route generalizes the straight line between two points. The timelike free-fall path locally **maximizes** elapsed proper time between nearby fixed events. The handwriting says “minimally aged.” For a path from $P$ to $Q$,

$$
\Delta\tau=\int_0^{\lambda_Q}\sqrt{-g_{\alpha\beta}\frac{dx^\alpha}{d\lambda}\frac{dx^\beta}{d\lambda}}\,d\lambda .
$$

![[Kyle Kabasares - General Relativity - Competing paths.png|**Fig. 23** Paths between the same two events for the proper-time comparison.]]

An equivalent quadratic action in an affine parameter, denoted $\tau$ on the geodesic, is $I=\tfrac12\int g_{\alpha\beta}u^\alpha u^\beta\,d\tau$. Vary $x^\gamma$ by $\delta x^\gamma$ at fixed endpoints and parameter values. The metric varies by $(\partial_\gamma g_{\alpha\beta})\delta x^\gamma$. After integrating by parts,

$$
\delta I=-\int d\tau
\left[g_{\gamma\alpha}\frac{du^\alpha}{d\tau}
+\tfrac12u^\alpha u^\beta(\partial_\alpha g_{\beta\gamma}+\partial_\beta g_{\gamma\alpha}-\partial_\gamma g_{\alpha\beta})\right]\delta x^\gamma.
$$

The derivative combination is $\Gamma_{\gamma\alpha\beta}$.

### PDF page 77

The first variation is $\delta I=-\int[g_{\gamma\alpha}(du^\alpha/d\tau)+\Gamma_{\gamma\alpha\beta}u^\alpha u^\beta]\delta x^\gamma\,d\tau$. Since $\delta I=0$ for arbitrary interior variations, the bracket vanishes. Raise its free index with the inverse metric to recover $du^\mu/d\tau+\Gamma^\mu{}_{\alpha\beta}u^\alpha u^\beta=0$. Geodesics generalize straight lines and describe trajectories of extremal proper time.

#### Lecture 10. Spacetime curvature

For a timelike trajectory with constant rest mass $\mechanical{m}$, set $\mechanical{p}^\alpha=\mechanical{m}\mechanical{u}^\alpha$. The geodesic equation becomes

$$
\mechanical{p}^\alpha\nabla_\alpha\mechanical{p}^\beta=0,\qquad
\mechanical{m}\frac{d\mechanical{p}^\beta}{d\tau}+\Gamma^\beta{}_{\mu\nu}\mechanical{p}^\mu\mechanical{p}^\nu=0.
$$

The handwriting uses $dt$ in the expanded equation. The parameter here is proper time $\tau$. With $\Delta\lambda=\Delta\tau/\mechanical{m}$, the four-momentum itself is the tangent $\mechanical{p}^\alpha=dx^\alpha/d\lambda$.

### PDF page 78

In the affine parameter $\lambda$ the momentum equation is $d\mechanical{p}^\beta/d\lambda+\Gamma^\beta{}_{\mu\nu}\mechanical{p}^\mu\mechanical{p}^\nu=0$. It remains valid for null trajectories, viewed as a limit in which $\mechanical{m}\to0$ and $\Delta\tau\to0$ at fixed $\Delta\tau/\mechanical{m}$. In the null case $\mechanical{p}^\alpha\mechanical{p}_\alpha=0$.

Metric compatibility allows lowering the momentum index inside the covariant derivative, so $\mechanical{p}^\alpha\nabla_\alpha\mechanical{p}_\beta=0$. In proper time for a massive particle,

$$
\begin{aligned}
\mechanical{m}\frac{d\mechanical{p}_\beta}{d\tau}
&=\Gamma_{\gamma\beta\alpha}\mechanical{p}^\alpha\mechanical{p}^\gamma\\
&=\tfrac12(\partial_\beta g_{\alpha\gamma}+\partial_\alpha g_{\gamma\beta}
-\partial_\gamma g_{\beta\alpha})\mechanical{p}^\alpha\mechanical{p}^\gamma\\
&=\tfrac12(\partial_\beta g_{\alpha\gamma})\mechanical{p}^\alpha\mechanical{p}^\gamma.
\end{aligned}
$$

The last two metric derivative terms cancel on contraction with the symmetric product of momenta.

### PDF page 79

If the metric is independent of a particular coordinate $x^\beta$, then $\mechanical{p}_\beta$ is constant along the geodesic. The corresponding coordinate basis vector is a Killing vector. More generally, differentiate the scalar $\mechanical{p}^\beta\xi_\beta$ along a geodesic:

$$
\begin{aligned}
\mechanical{p}^\alpha\nabla_\alpha(\mechanical{p}^\beta\xi_\beta)
&=\xi_\beta\mechanical{p}^\alpha\nabla_\alpha\mechanical{p}^\beta
+\mechanical{p}^\alpha\mechanical{p}^\beta\nabla_\alpha\xi_\beta\\
&=\tfrac12\mechanical{p}^\alpha\mechanical{p}^\beta(\nabla_\alpha\xi_\beta+\nabla_\beta\xi_\alpha)=0.
\end{aligned}
$$

The first term vanishes by the geodesic equation. The second involves only the symmetric part of $\nabla_\alpha\xi_\beta$ because $\mechanical{p}^\alpha\mechanical{p}^\beta$ is symmetric. That part vanishes by the Killing equation.

If $\partial_tg_{\alpha\beta}=0$, the time-translation Killing vector gives constant $\mechanical{p}_t$. In an asymptotically flat spacetime with $t$ normalized at infinity, $\mechanical{p}_t=-\energy{E}$.

### PDF page 80

#### Slow motion in a static weak field

Consider the line element

$$
d\mechanical{s}^2=-(1+2\mechanical{\Phi})dt^2
+(1-2\mechanical{\Phi})(d\mechanical{x}^2+d\mechanical{y}^2+d\mechanical{z}^2),
\qquad \lvert\mechanical{\Phi}\rvert\ll1,\quad \partial_t\mechanical{\Phi}=0.
$$

In the slow-motion limit $\energy{E}\gg\lvert\mechanical{\mathbf{p}}\rvert$ and $\mechanical{p}^0\simeq\energy{E}\simeq\mechanical{m}$. The $\mu=\nu=0$ term dominates in the geodesic equation:

$$
\mechanical{m}\frac{d\mechanical{p}^\beta}{d\tau}\simeq
-\Gamma^\beta{}_{00}(\mechanical{p}^0)^2\simeq-\mechanical{m}^2\Gamma^\beta{}_{00}.
$$

For spatial $\beta=i$, the time derivatives vanish. Using $g^{ij}=(1-2\mechanical{\Phi})^{-1}\delta^{ij}$ gives

$$
\Gamma^i{}_{00}=-\tfrac12g^{ij}\partial_j g_{00}
=-\tfrac12(1-2\mechanical{\Phi})^{-1}\delta^{ij}\partial_j(-2\mechanical{\Phi}).
$$

### PDF page 81

To first order, $\Gamma^i{}_{00}=\delta^{ij}\partial_j\mechanical{\Phi}+O(\mechanical{\Phi}^2)$. The spatial momentum therefore obeys $d\mechanical{p}^i/d\tau\simeq-\mechanical{m}\delta^{ij}\partial_j\mechanical{\Phi}$, which is the Newtonian force law in this limit.

#### Measuring curvature by parallel transport

Curvature can be detected by the failure of initially parallel trajectories to remain parallel. Another test is to parallel-transport a vector around a closed curve. A triangle in flat space has interior angles summing to $180^\circ$. Transport around it returns a vector with its original direction.

![[Kyle Kabasares - General Relativity - Flat triangle.png|**Fig. 24** Parallel transport around a flat triangle.]]

A geodesic triangle made of two meridians separated by $90^\circ$ and the intervening equatorial arc has three right angles, summing to $270^\circ$. Parallel transport around the triangle rotates the vector by the angular excess, $270^\circ-180^\circ=90^\circ$, with sign set by the orientation of traversal.

![[Kyle Kabasares - General Relativity - Spherical triangle.png|**Fig. 25** A spherical triangle and the change in direction under parallel transport.]]

### PDF page 82

The transformation induced by transport around a loop is called **holonomy**. The handwriting mentions Wikipedia and Wolfram as references. Parallel-transport $V^\alpha$ around the infinitesimal coordinate loop $A\to B\to C\to D\to A$.

![[Kyle Kabasares - General Relativity - Holonomy coordinate loop.png|**Fig. 26** Four sides of the loop follow coordinate lines in the sigma and lambda directions.]]

On side 1, $x^\lambda$ is constant and the tangent is $\boldsymbol{e}_\sigma$. Then $\nabla_\sigma V^\alpha=0$ implies $\partial_\sigma V^\alpha=-\Gamma^\alpha{}_{\sigma\mu}V^\mu$. Integrate along sides 1 and 2:

$$
V^\alpha(B)=V^\alpha_{\mathrm{init}}-\int_1\Gamma^\alpha{}_{\sigma\mu}V^\mu\,dx^\sigma,\qquad
V^\alpha(C)=V^\alpha(B)-\int_2\Gamma^\alpha{}_{\lambda\mu}V^\mu\,dx^\lambda.
$$

### PDF page 83

For side 3, $V^\alpha(D)=V^\alpha(C)-\int_{C}^{D}\Gamma^\alpha{}_{\sigma\mu}V^\mu\,dx^\sigma$. Side 4 similarly runs in the negative $x^\lambda$ direction. Reorient both integrals over increasing coordinate and group the opposite sides:

$$
\begin{aligned}
\delta V^\alpha=V^\alpha_{\mathrm{final}}-V^\alpha_{\mathrm{initial}}
={}&\int_4\Gamma^\alpha{}_{\lambda\mu}V^\mu\,dx^\lambda-\int_2\Gamma^\alpha{}_{\lambda\mu}V^\mu\,dx^\lambda\\
&+\int_3\Gamma^\alpha{}_{\sigma\mu}V^\mu\,dx^\sigma-\int_1\Gamma^\alpha{}_{\sigma\mu}V^\mu\,dx^\sigma.
\end{aligned}
$$

The $x^\lambda$ integrals on sides 4 and 2 are evaluated at $x^\sigma$ and $x^\sigma+\delta x^\sigma$, respectively. Their difference to leading order is $-\int_2\delta x^\sigma\partial_\sigma(\Gamma^\alpha{}_{\lambda\mu}V^\mu)\,dx^\lambda$. The $x^\sigma$ integrals on sides 3 and 1 are evaluated at $x^\lambda+\delta x^\lambda$ and $x^\lambda$. Their difference is $+\int_1\delta x^\lambda\partial_\lambda(\Gamma^\alpha{}_{\sigma\mu}V^\mu)\,dx^\sigma$.

### PDF page 84

Evaluate the infinitesimal side integrals and expand their derivatives:

$$
\delta V^\alpha\simeq\delta x^\lambda\delta x^\sigma
\left[(\partial_\lambda\Gamma^\alpha{}_{\sigma\mu}-\partial_\sigma\Gamma^\alpha{}_{\lambda\mu})V^\mu
+\Gamma^\alpha{}_{\sigma\mu}\partial_\lambda V^\mu-\Gamma^\alpha{}_{\lambda\mu}\partial_\sigma V^\mu\right].
$$

Use $\partial_\lambda V^\mu=-\Gamma^\mu{}_{\lambda\nu}V^\nu$ and $\partial_\sigma V^\mu=-\Gamma^\mu{}_{\sigma\nu}V^\nu$ on the transported edges. Relabel dummy indices to get $\delta V^\alpha\simeq\delta x^\lambda\delta x^\sigma V^\mu R^\alpha{}_{\mu\lambda\sigma}$ for this oriented loop. The **Riemann curvature tensor** in the convention used here is

$$
R^\alpha{}_{\mu\lambda\sigma}
=\partial_\lambda\Gamma^\alpha{}_{\sigma\mu}
-\partial_\sigma\Gamma^\alpha{}_{\lambda\mu}
+\Gamma^\alpha{}_{\lambda\nu}\Gamma^\nu{}_{\sigma\mu}
-\Gamma^\alpha{}_{\sigma\nu}\Gamma^\nu{}_{\lambda\mu}.
$$

An equivalent definition uses commutators:

$$
[\nabla_\lambda,\nabla_\sigma]V^\alpha=R^\alpha{}_{\mu\lambda\sigma}V^\mu,\qquad
[\nabla_\lambda,\nabla_\sigma]p_\alpha=-R^\mu{}_{\alpha\lambda\sigma}p_\mu.
$$

The notes flag a wrong sign for the one-form formula in the first edition of Schutz.

### PDF page 85

A four-index tensor in four dimensions has $4^4=256$ entries before imposing symmetries. The independent Riemann components in $n$ dimensions number $n^2(n^2-1)/12$. This gives zero for $n=1$, one for $n=2$ (the single local curvature), and $16\cdot15/12=20$ for $n=4$. The last number agrees with the count of second-order metric terms left after choosing a freely falling frame.

#### Lecture 11. More on spacetime curvature

Antisymmetry in the last pair, $R^\alpha{}_{\mu\lambda\sigma}=-R^\alpha{}_{\mu\sigma\lambda}$, corresponds to reversing the transport loop. To get the other symmetries, lower the first index, $R_{\alpha\mu\lambda\sigma}=g_{\alpha\nu}R^\nu{}_{\mu\lambda\sigma}$, and work at the origin of a local Lorentz frame. There the connection vanishes, while its derivatives can be nonzero.

### PDF page 86

In a local Lorentz frame at the reference point, insert the connection derivatives into $R_{\alpha\mu\lambda\sigma}=\partial_\lambda\Gamma_{\alpha\sigma\mu}-\partial_\sigma\Gamma_{\alpha\lambda\mu}$:

$$
R_{\alpha\mu\lambda\sigma}
=\tfrac12(\partial_\lambda\partial_\mu g_{\alpha\sigma}
-\partial_\lambda\partial_\alpha g_{\sigma\mu}
-\partial_\sigma\partial_\mu g_{\alpha\lambda}
+\partial_\sigma\partial_\alpha g_{\lambda\mu}).
$$

This reveals the symmetries, which hold in any coordinates:

$$
\begin{aligned}
R_{\alpha\mu\lambda\sigma}&=-R_{\alpha\mu\sigma\lambda}
=-R_{\mu\alpha\lambda\sigma}=R_{\lambda\sigma\alpha\mu},\\
R_{\alpha\mu\lambda\sigma}+R_{\alpha\lambda\sigma\mu}+R_{\alpha\sigma\mu\lambda}&=0
\qquad (R_{\alpha[\mu\lambda\sigma]}=0).
\end{aligned}
$$

Counting the remaining components gives $n^2(n^2-1)/12$, or 20 in four dimensions. The notes give this count as a combinatorics exercise.

The following local expansion, labeled Riemann normal coordinates in the notes, has the form of Fermi normal coordinates about a geodesic. The cited reference is Poisson, *A Relativist’s Toolkit*. To quadratic order in the spatial offsets,

$$
g_{tt}=-1-R_{tjt k}x^jx^k,\qquad
g_{tj}=-\tfrac23 R_{tijk}x^ix^k,\qquad
g_{jk}=\delta_{jk}-\tfrac13 R_{jik\ell}x^ix^\ell .
$$

Contract the first and third Riemann indices to get the **Ricci tensor**, $R_{\mu\nu}=R^\alpha{}_{\mu\alpha\nu}=g^{\alpha\beta}R_{\beta\mu\alpha\nu}$.

### PDF page 87

The Ricci tensor in terms of the connection is

$$
R_{\mu\nu}=\partial_\alpha\Gamma^\alpha{}_{\mu\nu}
-\partial_\nu\Gamma^\alpha{}_{\alpha\mu}
+\Gamma^\alpha{}_{\alpha\beta}\Gamma^\beta{}_{\nu\mu}
-\Gamma^\alpha{}_{\nu\beta}\Gamma^\beta{}_{\alpha\mu}.
$$

The second term contains $\partial_\nu\partial_\mu\ln\sqrt{\lvert g\rvert}$. The tensor is symmetric in $\mu,\nu$ and has ten independent components in four dimensions. Its trace is the **Ricci scalar**, $R=R^\mu{}_\mu=g^{\mu\nu}R_{\mu\nu}$.

#### Weyl tensor

For dimension $n\geq3$, the trace-free part of Riemann is

$$
C_{\alpha\mu\lambda\sigma}=R_{\alpha\mu\lambda\sigma}
-\frac{2}{n-2}(g_{\alpha[\lambda}R_{\sigma]\mu}-g_{\mu[\lambda}R_{\sigma]\alpha})
+\frac{2}{(n-2)(n-1)}g_{\alpha[\lambda}g_{\sigma]\mu}R.
$$

It has the same algebraic symmetries as Riemann and ten independent components in four dimensions. Riemann decomposes into Weyl curvature and terms determined by Ricci curvature. The Ricci part is closely related to the sources of gravity. The next application is to characterize the deviation of initially parallel geodesics as one moves along their worldlines.

### PDF page 88

#### Geodesic deviation

Consider nearby geodesics $\gamma_{\boldsymbol{u}}$ and $\gamma_{\boldsymbol{v}}$, each parametrized by $\lambda$, with tangents $\boldsymbol{u}$ and $\boldsymbol{v}$. At $\lambda_0$ the geodesics pass through $A$ and $A'$, respectively.

![[Kyle Kabasares - General Relativity - Neighboring geodesics.png|**Fig. 27** The separation vector connects corresponding events on two nearby geodesics.]]

The infinitesimal separation vector $\boldsymbol{\xi}$ points from the event on $\gamma_{\boldsymbol{u}}$ at parameter $\lambda$ to the event on $\gamma_{\boldsymbol{v}}$ at the same parameter, with components given to first order by the coordinate difference. Assume the initial tangents are parallel, interpreted by comparison under transport. The initial relative velocity is $(u^\alpha\nabla_\alpha\xi^\beta)_{\lambda_0}=0$.

Work in the local Lorentz frame centered on $A$ to understand how the separation changes. At $A$, $g_{\mu\nu}=\eta_{\mu\nu}$ and $\Gamma^\mu{}_{\alpha\beta}=0$.

### PDF page 89

At $A'$, the metric is still Minkowskian to first order in the separation, while $\Gamma^\mu{}_{\alpha\beta}(A')\simeq\xi^\delta\partial_\delta\Gamma^\mu{}_{\alpha\beta}(A)$. The reference geodesic has zero coordinate acceleration at $A$. At $A'$, use the geodesic equation and the equality of initial tangents to leading order:

$$
\left.\frac{d^2x^\alpha}{d\lambda^2}\right|_{A'}=
-\left.\Gamma^\alpha{}_{\mu\nu}\frac{dx^\mu}{d\lambda}\frac{dx^\nu}{d\lambda}\right|_{A'}
\simeq-(\partial_\beta\Gamma^\alpha{}_{\mu\nu})u^\mu u^\nu\xi^\beta.
$$

Subtracting the coordinate acceleration at $A$ gives the same expression for $d^2\xi^\alpha/d\lambda^2$. To write this tensorially, replace $d/d\lambda=u^\beta\partial_\beta$ by $D/d\lambda=u^\beta\nabla_\beta$. In particular,

$$
\frac{D\xi^\alpha}{d\lambda}
=u^\beta\nabla_\beta\xi^\alpha=u^\beta\partial_\beta\xi^\alpha
+u^\beta\Gamma^\alpha{}_{\beta\mu}\xi^\mu .
$$

### PDF page 90

Differentiate $D\xi^\alpha/d\lambda=d\xi^\alpha/d\lambda+\Gamma^\alpha{}_{\beta\mu}u^\beta\xi^\mu$ once more along the reference geodesic. In the local Lorentz frame at $A$, terms containing an undifferentiated connection vanish. The derivative of $u^\beta$ along the geodesic and the initial covariant derivative of $\xi^\mu$ also vanish there. The surviving terms are

$$
\begin{aligned}
\frac{D^2\xi^\alpha}{d\lambda^2}
&=\frac{d^2\xi^\alpha}{d\lambda^2}
+(\partial_\gamma\Gamma^\alpha{}_{\beta\mu})u^\beta u^\gamma\xi^\mu\\
&=(\partial_\gamma\Gamma^\alpha{}_{\beta\mu})u^\beta u^\gamma\xi^\mu
-(\partial_\beta\Gamma^\alpha{}_{\mu\nu})u^\mu u^\nu\xi^\beta .
\end{aligned}
$$

In the second term, relabel $\beta\to\mu$, $\mu\to\gamma$, and $\nu\to\beta$ to expose the curvature combination.

### PDF page 91

With the indices relabeled, the geodesic deviation equation is

$$
\frac{D^2\xi^\alpha}{d\lambda^2}
=(\partial_\gamma\Gamma^\alpha{}_{\beta\mu}-\partial_\mu\Gamma^\alpha{}_{\gamma\beta})u^\beta u^\gamma\xi^\mu
=R^\alpha{}_{\beta\gamma\mu}u^\beta u^\gamma\xi^\mu.
$$

The first expression holds at the origin of the local Lorentz frame. The curvature form is tensorial and describes relative acceleration, including the tidal effects used in gravitational-wave research.

#### Toward the differential Bianchi identity

The covariant derivative commutator acts on every index. On a mixed tensor it gives

$$
[\nabla_\lambda,\nabla_\sigma]F^\alpha{}_\beta
=R^\alpha{}_{\mu\lambda\sigma}F^\mu{}_\beta
-R^\mu{}_{\beta\lambda\sigma}F^\alpha{}_\mu.
$$

Apply it to $\nabla_\gamma p_\delta$ and also differentiate its action on $p_\delta$:

$$
\begin{aligned}
[\nabla_\alpha,\nabla_\beta]\nabla_\gamma p_\delta
&=-R^\mu{}_{\gamma\alpha\beta}\nabla_\mu p_\delta
-R^\mu{}_{\delta\alpha\beta}\nabla_\gamma p_\mu,\\
\nabla_\alpha[\nabla_\beta,\nabla_\gamma]p_\delta
&=-p_\mu\nabla_\alpha R^\mu{}_{\delta\beta\gamma}
-R^\mu{}_{\delta\beta\gamma}\nabla_\alpha p_\mu.
\end{aligned}
$$

Antisymmetrize the first left-hand side in $\alpha,\beta,\gamma$. The six terms come in pairs because each commutator is antisymmetric. The result is

$$
\frac13\bigl([\nabla_\alpha,\nabla_\beta]\nabla_\gamma+
[\nabla_\beta,\nabla_\gamma]\nabla_\alpha+
[\nabla_\gamma,\nabla_\alpha]\nabla_\beta\bigr)p_\delta.
$$

### PDF page 92

The cyclic sum of commutators on the preceding page equals

$$
\frac13\bigl(\nabla_\alpha[\nabla_\beta,\nabla_\gamma]
+\nabla_\beta[\nabla_\gamma,\nabla_\alpha]
+\nabla_\gamma[\nabla_\alpha,\nabla_\beta]\bigr)p_\delta
$$

after expanding and regrouping the derivative operators. Equate the corresponding antisymmetrized right-hand sides. The term $R^\mu{}_{[\gamma\alpha\beta]}\nabla_\mu p_\delta$ vanishes by the algebraic curvature identity. The remaining terms proportional to $\nabla p$ cancel. Thus $p^\mu\nabla_{[\alpha}R_{\beta\gamma]\mu\delta}=0$ for every $p^\mu$, giving the **differential Bianchi identity**:

$$
\nabla_{[\alpha}R_{\beta\gamma]\mu\delta}=0,
\qquad
\nabla_\alpha R_{\beta\gamma\mu\delta}
+\nabla_\beta R_{\gamma\alpha\mu\delta}
+\nabla_\gamma R_{\alpha\beta\mu\delta}=0.
$$

The contracted Bianchi identity is $\nabla^\mu(R_{\alpha\mu}-\tfrac12g_{\alpha\mu}R)=0$.

### PDF page 93

#### Lecture 12. The Einstein field equation

The Einstein curvature tensor $G_{\mu\nu}=R_{\mu\nu}-\tfrac12g_{\mu\nu}R$ satisfies $\nabla^\mu G_{\alpha\mu}=0$. To derive this, begin with the cyclic Bianchi identity. Contract with $g^{\beta\mu}$ to obtain

$$
\nabla_\alpha R_{\gamma\nu}+\nabla^\mu R_{\gamma\alpha\mu\nu}-\nabla_\gamma R_{\alpha\nu}=0.
$$

Contract again with $g^{\gamma\nu}$. By curvature symmetries and metric compatibility,

$$
\nabla_\alpha R-\nabla^\mu R_{\alpha\mu}-\nabla^\nu R_{\alpha\nu}
=\nabla_\alpha R-2\nabla^\mu R_{\alpha\mu}=0.
$$

Equivalently, $\nabla^\mu(R_{\alpha\mu}-\tfrac12g_{\alpha\mu}R)=0$. In four dimensions the trace is $G^\mu{}_\mu=g^{\mu\nu}G_{\mu\nu}=R-\tfrac12(4)R=-R$. Thus the Einstein tensor is the trace reversal of the Ricci tensor.

### PDF page 94

Two ingredients enter the theory of gravity.

1. The **minimal coupling principle** uses the equivalence principle to extend laws valid in flat spacetime or a local freely falling frame. Write the law in tensor form and take that form to hold in curved spacetime. For force-free motion, $d^2x^\mu/d\tau^2=0$ in a local Lorentz frame becomes $\mechanical{u}^\alpha\nabla_\alpha\mechanical{u}^\mu=0$, with $\mechanical{u}^\alpha=dx^\alpha/d\tau$. Local conservation of energy and momentum, $\partial_\mu T^{\mu\nu}=0$ in the local Lorentz frame, becomes $\nabla_\mu T^{\mu\nu}=0$.
2. The field equation connects the geometry of spacetime to its matter and energy sources. In the Newtonian limit it must recover $\nabla^2\mechanical{\Phi}=\delta^{ij}\partial_i\partial_j\mechanical{\Phi}=4\pi G\mechanical{\rho}$.

### PDF page 95

#### Recovering Newtonian motion

Newtonian motion gives $d^2x^i/dt^2=-\delta^{ij}\partial_j\mechanical{\Phi}$. Start with the geodesic equation, $d^2x^\mu/d\tau^2+\Gamma^\mu{}_{\alpha\beta}(dx^\alpha/d\tau)(dx^\beta/d\tau)=0$. For slow motion, $dt/d\tau\gg\lvert dx^i/d\tau\rvert$, so the dominant connection term is $\Gamma^\mu{}_{00}(dt/d\tau)^2$. In the stationary approximation,

$$
\Gamma^\mu{}_{00}=\tfrac12g^{\mu\nu}(\partial_0g_{\nu0}+\partial_0g_{0\nu}-\partial_\nu g_{00})
\simeq-\tfrac12g^{\mu\nu}\partial_\nu g_{00}.
$$

Write $g_{\mu\nu}=\eta_{\mu\nu}+h_{\mu\nu}$ with $\lVert h_{\mu\nu}\rVert\ll1$. The inverse is $g^{\mu\nu}=\eta^{\mu\nu}-h^{\mu\nu}+O(h^2)$, where $h^{\mu\nu}=\eta^{\alpha\mu}\eta^{\beta\nu}h_{\alpha\beta}$. Therefore $\Gamma^\mu{}_{00}=-\tfrac12\eta^{\mu\nu}\partial_\nu h_{00}+O(h^2)$.

### PDF page 96

At this order $\Gamma^0{}_{00}=0$ and $d^2t/d\tau^2=0$. The spatial part gives

$$
\frac{d^2x^i}{d\tau^2}=\tfrac12\eta^{ij}\partial_j h_{00}\left(\frac{dt}{d\tau}\right)^2
\quad\Longrightarrow\quad
\frac{d^2x^i}{dt^2}=\tfrac12\delta^{ij}\partial_j h_{00}.
$$

This reproduces Newton's equation if $h_{00}=-2\mechanical{\Phi}$, so $g_{00}=-(1+2\mechanical{\Phi})$.

#### Tensorial form of the gravitational field equation

Poisson's equation $\delta^{ij}\partial_i\partial_j\mechanical{\Phi}=4\pi G\mechanical{\rho}$ relates second derivatives of the potential to mass density. In units with $c=1$, mass density in the slow-motion limit is represented by the energy density component $T^{00}$. The tensor equation must therefore use $T_{\mu\nu}$ as the source and a geometric tensor involving up to two derivatives of the metric on the other side.

### PDF page 97

Second derivatives of the metric enter through curvature. Since $\nabla_\mu T^{\mu\nu}=0$, the geometric side should also be a divergence-free rank-two tensor. Use the Einstein tensor and a constant $K$ to match dimensions and the Newtonian limit:

$$
G_{\mu\nu}=KT_{\mu\nu},
\qquad
R_{\mu\nu}=K(T_{\mu\nu}-\tfrac12g_{\mu\nu}T),
\qquad T=g^{\mu\nu}T_{\mu\nu}.
$$

Use a static perfect fluid as the source, with $T_{\mu\nu}=(\energy{\rho}+\mechanical{P})\mechanical{u}_\mu\mechanical{u}_\nu+\mechanical{P}g_{\mu\nu}$ and $\energy{\rho}\gg\mechanical{P}$. For $\mechanical{u}^\mu=(\mechanical{u}^0,0,0,0)$, normalization gives $g_{00}(\mechanical{u}^0)^2=-1$. Thus $g_{00}=-1+h_{00}$ implies $\mechanical{u}^0=1+\tfrac12h_{00}+O(h^2)$. Lowering with the full metric gives $\mechanical{u}_0=-1+\tfrac12h_{00}+O(h^2)$ and $T_{00}=\energy{\rho}(1-h_{00})$ to first order. The handwritten approximation $\mechanical{u}_0=-\mechanical{u}^0$ gives the opposite sign for the first-order correction. The Newtonian matching uses the common leading term $T_{00}\simeq\energy{\rho}$.

### PDF page 98

For negligible pressure the trace is $T=\energy{\rho}\,\mechanical{u}^\mu\mechanical{u}_\mu=-\energy{\rho}$. Keep only the leading source term:

$$
T_{00}-\tfrac12g_{00}T\simeq\tfrac12\energy{\rho},\qquad R_{00}\simeq\tfrac12K\energy{\rho}.
$$

On the geometry side, $R_{00}=R^\mu{}_{0\mu0}=R^i{}_{0i0}$. In a static weak field, the time derivative and terms quadratic in the connection are negligible:

$$
R_{00}=\partial_i\Gamma^i{}_{00}-\partial_0\Gamma^i{}_{i0}+O(\Gamma^2)
\simeq-\tfrac12\delta^{ij}\partial_i\partial_j h_{00}
=-\tfrac12\nabla^2 h_{00}.
$$

Equating the two expressions gives $\nabla^2 h_{00}=-K\energy{\rho}$. Since $h_{00}=-2\mechanical{\Phi}$ and $\nabla^2\mechanical{\Phi}=4\pi G\mechanical{\rho}$, the match in units $c=1$ requires $K=8\pi G$.

### PDF page 99

The **Einstein field equation** in units with $c=1$ is $G_{\mu\nu}=8\pi G T_{\mu\nu}$. Metric compatibility allows the divergence-free term $\Lambda g_{\mu\nu}$, with cosmological constant $\Lambda$:

$$
G_{\mu\nu}+\Lambda g_{\mu\nu}=8\pi G T_{\mu\nu}.
$$

Move the cosmological term to the source side and define $T^\Lambda_{\mu\nu}=-\Lambda g_{\mu\nu}/(8\pi G)$. This has the form of a perfect fluid with $\energy{\rho}_\Lambda=\Lambda/(8\pi G)$ and $\mechanical{P}_\Lambda=-\energy{\rho}_\Lambda$. The notes connect the term to quantum-field zero-point energy and credit Zel'dovich for developing that interpretation.

Relativists often set both $G=1$ and $c=1$. Measurements of gravity constrain $G\mechanical{M}$ more directly than $\mechanical{M}$ alone. In geometrized units, mass, time, and length share a unit. Multiply an SI mass by $G/c^2$ to express it as a length, for example $G\mechanical{M}_\odot/c^2\simeq\quantity{1.47}{km}$.

### PDF page 100

To convert mass to time, use $G\mechanical{M}/c^3$. For the Sun this gives $G\mechanical{M}_\odot/c^3\simeq\quantity{4.92\times10^{-6}}{s}$. The factor $G/c^4$ converts energy to length. Since stress-energy has units of energy per volume in an orthonormal frame, $(G/c^4)T_{\mu\nu}$ has units of inverse length squared, as required for curvature.

$$
G_{\mu\nu}=\frac{8\pi G}{c^4}T_{\mu\nu}.
$$

The notes associate the small coupling in conventional units with the difficulty of producing appreciable curvature.

#### Lecture 13. Variational derivation of the Einstein field equation

The Einstein–Hilbert action gives another route to the field equations. Schematically, the action is the integral of the Lagrangian density $\mathcal{L}$ of the fields over spacetime:

$$
S=\int d^4x\,\mathcal{L}=\int d^4x\,\sqrt{-g}\,\widehat{\mathcal{L}}.
$$

### PDF page 101

Stationarity requires $\delta S=0$ for arbitrary admissible variations of the fields, which yields the Euler–Lagrange field equations. For a scalar field in flat spacetime, let $\mathcal{L}=\mathcal{L}(\phi,\partial_\mu\phi)$. Under $\phi\to\phi+\delta\phi$, the derivative varies by $\partial_\mu(\delta\phi)$. Thus

$$
\delta S=\int d^4x\left[
\frac{\partial\mathcal{L}}{\partial\phi}\delta\phi+
\frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi)}\partial_\mu(\delta\phi)\right].
$$

Integrate the second term by parts, taking the variations to vanish at the boundary:

$$
\delta S=\int d^4x\left[\frac{\partial\mathcal{L}}{\partial\phi}
-\partial_\mu\left(\frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi)}\right)\right]\delta\phi.
$$

For arbitrary interior $\delta\phi$, the expression in brackets must vanish.

### PDF page 102

For a free massive scalar, the Lagrangian is

$$
\mathcal{L}=-\tfrac12\eta^{\mu\nu}(\partial_\mu\phi)(\partial_\nu\phi)-\tfrac12\mechanical{m}^2\phi^2.
$$

The handwriting in this line repeats $\mu$ and writes one power of the mass, while the derivatives and boxed equation use the form above. One finds $\partial\mathcal{L}/\partial\phi=-\mechanical{m}^2\phi$ and $\partial\mathcal{L}/\partial(\partial_\mu\phi)=-\eta^{\mu\nu}\partial_\nu\phi$. Taking the derivative of the latter gives $-\eta^{\mu\nu}\partial_\mu\partial_\nu\phi=-\Box\phi$. The Euler–Lagrange equation is the massive Klein–Gordon equation $\Box\phi-\mechanical{m}^2\phi=0$.

For gravity, choose an integrand that gives a scalar action and is built from curvature, which is independent of the choice of frame. The Ricci scalar is $\widehat{\mathcal{L}}=R=g^{\alpha\beta}R_{\alpha\beta}(g)$. With the normalization anticipated from the field equation,

$$
S=\frac{1}{16\pi G}\int d^4x\,\sqrt{-g}\,R.
$$

### PDF page 103

Vary the inverse metric $g^{\alpha\beta}$. The product $\sqrt{-g}\,g^{\alpha\beta}R_{\alpha\beta}$ has one variation from each factor. The determinant identity gives $\delta\sqrt{-g}=-\tfrac12\sqrt{-g}\,g_{\alpha\beta}\delta g^{\alpha\beta}$. The curvature variation is

$$
\delta R_{\alpha\beta}=\nabla_\mu\delta\Gamma^\mu{}_{\alpha\beta}
-\nabla_\alpha\delta\Gamma^\mu{}_{\mu\beta}.
$$

Metric compatibility and $\delta g_{\alpha\beta}=-g_{\alpha\mu}g_{\beta\nu}\delta g^{\mu\nu}$ give

$$
\begin{aligned}
\delta\Gamma^\mu{}_{\alpha\beta}
&=\tfrac12\left[
\nabla_\gamma(g_{\alpha\delta}g_{\beta\lambda}g^{\mu\gamma}\delta g^{\delta\lambda})
-\nabla_\alpha(g_{\beta\gamma}\delta g^{\mu\gamma})
-\nabla_\beta(g_{\alpha\gamma}\delta g^{\mu\gamma})
\right],\\
g^{\alpha\beta}\delta R_{\alpha\beta}
&=\nabla_\alpha\nabla_\beta(g^{\alpha\beta}g_{\mu\nu}\delta g^{\mu\nu}-\delta g^{\alpha\beta})
=\nabla_\alpha V^\alpha .
\end{aligned}
$$

Combining the determinant and inverse-metric variations leaves the Einstein tensor in the bulk:

$$
\delta S=\frac{1}{16\pi G}\int d^4x\,\sqrt{-g}
\left[G_{\alpha\beta}\delta g^{\alpha\beta}+\nabla_\alpha V^\alpha\right].
$$

The remaining step is to handle the divergence term.

### PDF page 104

Carroll notes that the divergence theorem converts the divergence term into a boundary integral. For variations supported away from the boundary, the remaining bulk condition is $G_{\alpha\beta}=0$.

The notes give two further treatments:

1. In the **Palatini variation**, take $S=(16\pi G)^{-1}\int d^4x\,\sqrt{-g}\,g^{\alpha\beta}R_{\alpha\beta}(\Gamma)$ and vary $g$ and the symmetric connection $\Gamma$ independently. This produces the vacuum Einstein equation and the metric-compatible connection, $\nabla_\alpha g_{\beta\gamma}=0$.
2. With a three-dimensional boundary of the four-dimensional spacetime region, account for the boundary geometry in the action. A suitable boundary term cancels the boundary variation from $\nabla_\alpha V^\alpha$. See Wald, *General Relativity*, Appendix E.

Stationarity of the Einstein–Hilbert action alone gives the vacuum equation $G_{\alpha\beta}=0$. Including matter gives the action

$$
S=\int d^4x\,\sqrt{-g}\left[\frac{R}{16\pi G}+\mathcal{L}_{\mathrm{m}}\right].
$$

### PDF page 105

Stationarity of the total action gives

$$
\frac{\sqrt{-g}}{16\pi G}G_{\alpha\beta}
+\frac{\partial(\sqrt{-g}\mathcal{L}_{\mathrm m})}{\partial g^{\alpha\beta}}=0.
$$

For matter without metric derivatives in its Lagrangian, define $T_{\alpha\beta}=-2(\partial(\sqrt{-g}\mathcal{L}_{\mathrm m})/\partial g^{\alpha\beta})/\sqrt{-g}$.

For example, with the electromagnetic normalization used in this derivation, $\mathcal{L}_{\mathrm m}=-\tfrac14 F^{\mu\nu}F_{\mu\nu}$ and

$$
S_{\mathrm{EM}}=-\tfrac14\int d^4x\,\sqrt{-g}\,g^{\alpha\mu}g^{\beta\nu}F_{\alpha\beta}F_{\mu\nu}.
$$

Vary the metric while holding the covariant field components fixed:

$$
\delta S_{\mathrm{EM}}=-\tfrac12\int d^4x\,\sqrt{-g}
\left[F_{\alpha\mu}F_\beta{}^\mu-\tfrac14 g_{\alpha\beta}F_{\mu\nu}F^{\mu\nu}\right]\delta g^{\alpha\beta}.
$$

The bracket is the electromagnetic stress-energy tensor in this normalization. With $\widehat{\mathcal L}=R$ for gravity, the variation gives the Einstein field equations with the matter stress-energy as source.

### PDF page 106

#### Modified gravity actions

$R$ is the simplest scalar formed from curvature. An illustrative modification at small curvature is $\widehat{\mathcal L}=R-\alpha/R$. Corrections become important when $\lvert R\rvert\sim\sqrt{\alpha}$. Varying the metric gives

$$
G_{\alpha\beta}
+\frac{\alpha}{R^2}(R_{\alpha\beta}+\tfrac12g_{\alpha\beta}R)
+\alpha(g_{\alpha\beta}\nabla_\mu\nabla^\mu-\nabla_{(\alpha}\nabla_{\beta)})R^{-2}
=8\pi G T_{\alpha\beta}.
$$

The notes cite Carroll et al., *Physical Review D*, 043528 (2004). Tuning $\alpha$ can account for cosmic acceleration in this model, while its solar-system orbital predictions disagree with observations.

A modification at large curvature is $S_g=(16\pi G)^{-1}\int d^4x\,\sqrt{-g}\,[R+\beta R^2]$. The quadratic term matters when $\lvert R\rvert\gtrsim1/\lvert\beta\rvert$. The handwritten estimate appears to read $\beta\sim\hbar^{-1}$.

A further possibility is a scalar field that modifies how spacetime couples to the source.

### PDF page 107

An example of a scalar–tensor theory has actions

$$
S_g=\frac{1}{16\pi G}\int d^4x\,\sqrt{-g}\,R f(\phi),
\qquad
S_\phi=\int d^4x\,\sqrt{-g}\,[g(\phi)\nabla^\mu\nabla_\mu\phi-V(\phi)]
$$

with the scalar term written as in the notes. See Carroll, §4.8.

#### Recap of the first half of MIT 8.962

The metric $g_{\alpha\beta}$ determines geodesic motion and gives curvature and tides. The Einstein field equation $G_{\alpha\beta}=8\pi G T_{\alpha\beta}$ relates geometry to the matter source in units with $c=1$.

The second half studies solutions of these coupled nonlinear partial differential equations. The three methods listed are weak-field expansion $g_{\mu\nu}=\eta_{\mu\nu}+h_{\mu\nu}$, imposing a symmetry, and numerical relativity for general cases.

### PDF page 108

#### Lecture 14. Linearized gravity and the static limit

View $G_{\alpha\beta}=8\pi G T_{\alpha\beta}$ as differential equations for the metric given a source. Schematically, $G_{\alpha\beta}=\mathcal{D}^2_{\alpha\beta}(g_{\mu\nu})$ is a second-order nonlinear differential operator. A perfect fluid source has $T_{\alpha\beta}=(\energy{\rho}+\mechanical{P})\mechanical{u}_\alpha\mechanical{u}_\beta+\mechanical{P}g_{\alpha\beta}$ and $g_{\mu\nu}\mechanical{u}^\mu\mechanical{u}^\nu=-1$.

Three approaches to solving the equations are weak-field expansion about Minkowski spacetime, symmetric solutions with possible perturbations, and numerical solutions of the general system.

For weak gravity, choose nearly Lorentzian coordinates so that $g_{\alpha\beta}=\eta_{\alpha\beta}+h_{\alpha\beta}$ with $\lVert h_{\alpha\beta}\rVert\ll1$. In linearized general relativity, retain only terms through first order in $h$.

### PDF page 109

Under $L^\alpha{}_{\bar\mu}=\partial x^\alpha/\partial x^{\bar\mu}$ the metric transforms as $g_{\bar\mu\bar\nu}=L^\alpha{}_{\bar\mu}L^\beta{}_{\bar\nu}g_{\alpha\beta}$. For a Lorentz transformation $\Lambda$, the background metric is invariant. Applying $\Lambda$ to the sum $\eta_{\alpha\beta}+h_{\alpha\beta}$ therefore gives

$$
g_{\bar\mu\bar\nu}=\eta_{\bar\mu\bar\nu}+h_{\bar\mu\bar\nu},\qquad
h_{\bar\mu\bar\nu}=\Lambda^\alpha{}_{\bar\mu}\Lambda^\beta{}_{\bar\nu}h_{\alpha\beta}.
$$

This lets us treat $h_{\alpha\beta}$ as a tensor field on the flat background under Lorentz transformations. To first order,

$$
g^{\alpha\mu}g^{\beta\nu}h_{\mu\nu}=\eta^{\alpha\mu}\eta^{\beta\nu}h_{\mu\nu}+O(h^2).
$$

Use the background metric to raise and lower perturbation indices in the linearized theory.

### PDF page 110

#### Inverse metric and infinitesimal coordinate changes

Write $g^{\alpha\beta}=\eta^{\alpha\beta}+m^{\alpha\beta}$ with $m^{\alpha\beta}=O(h)$. The defining product $g^{\alpha\beta}g_{\beta\gamma}=\delta^\alpha_\gamma$ expands as

$$
(\eta^{\alpha\beta}+m^{\alpha\beta})(\eta_{\beta\gamma}+h_{\beta\gamma})
=\delta^\alpha_\gamma+m^\alpha{}_\gamma+h^\alpha{}_\gamma+O(h^2).
$$

Thus $m^\alpha{}_\gamma=-h^\alpha{}_\gamma$ to first order and $g^{\alpha\beta}=\eta^{\alpha\beta}-h^{\alpha\beta}+O(h^2)$.

Consider $x^{\alpha'}=x^\alpha+\xi^\alpha(x^\beta)$ with all $\lvert\partial_\beta\xi^\alpha\rvert\ll1$. Its Jacobian is $L^{\alpha'}{}_\beta=\delta^{\alpha'}_\beta+\partial_\beta\xi^\alpha$, with the coordinate labels identified at zeroth order. The inverse obeys $L^{\alpha'}{}_\beta L^\beta{}_{\gamma'}=\delta^{\alpha'}_{\gamma'}$.

![[Kyle Kabasares - General Relativity - Infinitesimal coordinate shift.png|**Fig. 28** Small displacement of a line of the original coordinate grid.]]

### PDF page 111

To first order the inverse Jacobian is $L^\beta{}_{\gamma'}=\delta^\beta_{\gamma'}-\partial_\gamma\xi^\beta+O((\partial\xi)^2)$. Substitute in the metric transformation:

$$
g_{\mu'\nu'}=(\delta^\alpha_\mu-\partial_\mu\xi^\alpha)(\delta^\beta_\nu-\partial_\nu\xi^\beta)(\eta_{\alpha\beta}+h_{\alpha\beta})
=\eta_{\mu\nu}+h_{\mu\nu}-\partial_\mu\xi_\nu-\partial_\nu\xi_\mu+O(2).
$$

Here $O(2)$ denotes terms of second order in the perturbation and infinitesimal coordinate change. Identifying the background metric gives $h^{\mathrm{new}}_{\mu\nu}=h^{\mathrm{old}}_{\mu\nu}-\partial_\mu\xi_\nu-\partial_\nu\xi_\mu$. This is a **gauge transformation** in linearized gravity. The linearized Riemann tensor is invariant, analogous to electromagnetic gauge invariance of $F_{\mu\nu}$ under $A_\mu\to A_\mu+\partial_\mu\Lambda$.

Applying the curvature formula to the perturbed metric gives

$$
R_{\mu\alpha\nu\beta}=\tfrac12(\partial_\alpha\partial_\nu h_{\mu\beta}
+\partial_\mu\partial_\beta h_{\alpha\nu}
-\partial_\alpha\partial_\beta h_{\mu\nu}
-\partial_\mu\partial_\nu h_{\alpha\beta})
$$

to linear order.

### PDF page 112

The gauge variation of linearized Riemann has eight terms from derivatives of $\xi$. They cancel in pairs by commutation of partial derivatives. Let $\Box=\eta^{\mu\nu}\partial_\mu\partial_\nu$ and $h=\eta^{\mu\nu}h_{\mu\nu}$. The contractions give

$$
\begin{aligned}
R_{\alpha\beta}
&=\eta^{\mu\nu}R_{\mu\alpha\nu\beta}
=\tfrac12(\partial_\alpha\partial^\mu h_{\mu\beta}+\partial_\beta\partial^\mu h_{\mu\alpha}
-\partial_\alpha\partial_\beta h-\Box h_{\alpha\beta}),\\
R&=\eta^{\alpha\beta}R_{\alpha\beta}=\partial^\alpha\partial^\mu h_{\alpha\mu}-\Box h,\\
G_{\alpha\beta}
&=\tfrac12(\partial_\alpha\partial^\mu h_{\mu\beta}+\partial_\beta\partial^\mu h_{\mu\alpha}
-\partial_\alpha\partial_\beta h-\Box h_{\alpha\beta}
+\eta_{\alpha\beta}\Box h-\eta_{\alpha\beta}\partial^\mu\partial^\nu h_{\mu\nu}).
\end{aligned}
$$

Introduce the **trace-reversed perturbation** $\bar h_{\alpha\beta}=h_{\alpha\beta}-\tfrac12\eta_{\alpha\beta}h$. In four dimensions $\bar h=-h$, so $h_{\alpha\beta}=\bar h_{\alpha\beta}+\tfrac12\eta_{\alpha\beta}h$. On substitution, all terms involving the trace alone cancel:

$$
G_{\alpha\beta}=\tfrac12(\partial_\alpha\partial^\mu\bar h_{\mu\beta}
+\partial_\beta\partial^\mu\bar h_{\mu\alpha}
-\eta_{\alpha\beta}\partial^\mu\partial^\nu\bar h_{\mu\nu}
-\Box\bar h_{\alpha\beta}).
$$

Three terms contain the divergence of $\bar h_{\mu\nu}$. The four gauge functions $\xi_\nu$ give freedom to impose the four conditions $\partial^\mu\bar h_{\mu\nu}=0$.

### PDF page 113

The trace-reversed gauge transformation is

$$
\bar h^{\mathrm{new}}_{\mu\nu}=\bar h^{\mathrm{old}}_{\mu\nu}
-\partial_\mu\xi_\nu-\partial_\nu\xi_\mu+\eta_{\mu\nu}\partial^\alpha\xi_\alpha.
$$

In its divergence, the last two contributions cancel by commutation of partial derivatives. Hence $\partial^\mu\bar h^{\mathrm{new}}_{\mu\nu}=\partial^\mu\bar h^{\mathrm{old}}_{\mu\nu}-\Box\xi_\nu$. Solve $\Box\xi_\nu=\partial^\mu\bar h^{\mathrm{old}}_{\mu\nu}$ to impose the **Lorenz gauge**, $\partial^\mu\bar h^{\mathrm{new}}_{\mu\nu}=0$. Then

$$
G_{\alpha\beta}=-\tfrac12\Box\bar h_{\alpha\beta},\qquad
\Box\bar h_{\alpha\beta}=-16\pi G T_{\alpha\beta}.
$$

The notes compare this with the Lorenz-gauge wave equation $\Box A^\alpha=4\pi J^\alpha$ in their electromagnetic convention. A radiative Green's function gives a solution, as in Jackson's treatment of electrodynamics.

For the static limit, choose a nonrelativistic perfect fluid source. Then $\partial_t=0$, $\energy{\rho}\gg\mechanical{P}$, and $T_{\alpha\beta}\simeq\energy{\rho}\,\mechanical{u}_\alpha\mechanical{u}_\beta$.

### PDF page 114

With $T_{00}\simeq\energy{\rho}$ and other components negligible, the static equation is $\nabla^2\bar h_{00}=-16\pi G\energy{\rho}$. Comparing with $\nabla^2\mechanical{\Phi}_N=4\pi G\mechanical{\rho}$ gives $\bar h_{00}=-4\mechanical{\Phi}_N$ for the same vanishing-at-infinity condition. The other components of $\bar h_{\mu\nu}$ vanish for this solution.

The trace is $\bar h=-\bar h_{00}=4\mechanical{\Phi}_N$. Reverse the trace once more, $h_{\mu\nu}=\bar h_{\mu\nu}-\tfrac12\eta_{\mu\nu}\bar h$. This gives $h_{00}=-2\mechanical{\Phi}_N$ and $h_{11}=h_{22}=h_{33}=-2\mechanical{\Phi}_N$. The line element in the Newtonian limit is

$$
d\mechanical{s}^2=-(1+2\mechanical{\Phi}_N)dt^2
+(1-2\mechanical{\Phi}_N)(d\mechanical{x}^2+d\mechanical{y}^2+d\mechanical{z}^2).
$$

Problem set 7 considers a rotating body.

### PDF page 115

#### Lecture 15. Linearized gravity with dynamic sources

For a static source $\Box\to\nabla^2$. The metric is $d\mechanical{s}^2=-(1+2\mechanical{\Phi}_N)dt^2+(1-2\mechanical{\Phi}_N)(dx^2+dy^2+dz^2)$, where $\mechanical{\Phi}_N$ satisfies $\nabla^2\mechanical{\Phi}_N=4\pi G\mechanical{\rho}$.

For a general equation $Df(t,\mathbf{x})=S(t,\mathbf{x})$ with linear operator $D$, field $f$, and source $S$, use a Green's function. The source cites Arfken, 3rd ed., §§16.5–16.6. Replace the source by a unit impulse at $(t',\mathbf{x}')$ and define the response by

$$
D G(t,\mathbf{x};t',\mathbf{x}')=\delta(t-t')\delta^{(3)}(\mathbf{x}-\mathbf{x}').
$$

Here $(t,\mathbf{x})$ is the field point and $(t',\mathbf{x}')$ the source point. A general source is a weighted superposition of impulses,

$$
S(t,\mathbf{x})=\int dt'\,d^3x'\,S(t',\mathbf{x}')\delta(t-t')\delta^{(3)}(\mathbf{x}-\mathbf{x}').
$$

### PDF page 116

The response to a general source is $f(t,\mathbf{x})=\int dt'\,d^3x'\,S(t',\mathbf{x}')G(t,\mathbf{x};t',\mathbf{x}')$. Acting with $D$ in the unprimed variables lets it pass through the integration and act on $G$. Replacing $DG$ by its delta functions returns $S(t,\mathbf{x})$.

For $D=\Box$, the retarded Green's function is

$$
G(t,\mathbf{x};t',\mathbf{x}')=-\frac{\delta[t'-(t-\lvert\mathbf{x}-\mathbf{x}'\rvert)]}{4\pi\lvert\mathbf{x}-\mathbf{x}'\rvert}
$$

with $c=1$. See Jackson, 2nd ed., §6.6. The delta function accounts for the propagation time between the source and field points.

### PDF page 117

![[Kyle Kabasares - General Relativity - Retarded propagation.png|**Fig. 29** A disturbance originating at $\mathbf{x}'$ reaches the observer at $\mathbf{x}$ after a delay of $\lvert\mathbf{x}-\mathbf{x}'\rvert/c$.]]

For the linearized Einstein equation,

$$
\Box\bar h_{\alpha\beta}=-16\pi G T_{\alpha\beta},
$$

the retarded Green's function gives

$$
\begin{aligned}
\bar h_{\alpha\beta}(t,\mathbf{x})
&=-16\pi G\int dt'\,d^3x'\,T_{\alpha\beta}(t',\mathbf{x}')G(t,\mathbf{x};t',\mathbf{x}')\\
&=4G\int d^3x'\,\frac{T_{\alpha\beta}(t-\lvert\mathbf{x}-\mathbf{x}'\rvert,\mathbf{x}')}{\lvert\mathbf{x}-\mathbf{x}'\rvert}.
\end{aligned}
$$

Here $c=1$. Each component of the trace-reversed metric perturbation appears to be radiative, but the gauge obscures which parts are physical.

As an example from electromagnetism, consider the potentials

$$
\begin{aligned}
\electric{A}^0
&=\frac{\electric{q}}{\mechanical{r}}-\electric{q}\signal{\omega}\sin(\signal{\mathbf{k}}\cdot\mechanical{\mathbf{r}}-\signal{\omega}\mechanical{t})\frac{R}{\mechanical{r}},\\
\electric{A}^i
&=-\electric{q}\signal{k}^i\sin(\signal{\mathbf{k}}\cdot\mechanical{\mathbf{r}}-\signal{\omega}\mechanical{t})\frac{R}{\mechanical{r}}
-\electric{q}x^i\cos(\signal{\mathbf{k}}\cdot\mechanical{\mathbf{r}}-\signal{\omega}\mechanical{t})\frac{R}{\mechanical{r}^3},
\end{aligned}
$$

where $\mechanical{r}=\sqrt{x^2+y^2+z^2}$.

### PDF page 118

#### Field tensor

$$
\electric{F}^{\mu\nu}
=\partial^\mu \electric{A}^\nu-\partial^\nu\electric{A}^\mu
=\frac{\electric{q}}{\mechanical{r}^3}
\begin{bmatrix}
0&-x&-y&-z\\
x&0&0&0\\
y&0&0&0\\
z&0&0&0
\end{bmatrix}.
$$

The handwritten derivative terms have interchanged indices on the potentials. The antisymmetric expression above is consistent with the matrix.

$$
\electric{E}^i=\frac{\electric{q}x^i}{\mechanical{r}^3},
\qquad
\magnetic{B}^i=0.
$$

Gauges can obscure the physics. The potentials on the previous page describe a Coulomb point charge in a gauge that makes the potentials look radiative.

Recast the metric and source to identify the radiative and non-radiative degrees of freedom in linearized theory. Spacetime has four physical non-radiative degrees of freedom governed by Poisson equations and two radiative degrees of freedom governed by a wave equation.

Consider $h_{\mu\nu}$ as a tensor field on a flat background and choose time and space coordinates.

### PDF page 119

Under spatial coordinate transformations, the metric perturbation components transform as a scalar $h_{tt}=-2\phi$, a vector $h_{ti}$, and a symmetric tensor $h_{ij}$. Decompose the vector as

$$
h_{ti}=\beta_i+\partial_i\gamma,
\qquad
\partial_i\beta_i=0.
$$

Spatial indices may be raised or lowered freely in these Cartesian coordinates, and repeated spatial indices are summed. Decompose the spatial tensor as

$$
h_{ij}=h_{ij}^{\mathrm{TT}}+\frac13H\delta_{ij}+\partial_{(i}\epsilon_{j)}
+\left(\partial_i\partial_j-\frac13\delta_{ij}\nabla^2\right)\lambda.
$$

- $\gamma$ is a scalar with one degree of freedom.
- $\beta_i$ is a divergence-free vector with $3-1=2$ degrees of freedom.
- $H$ is a scalar with one degree of freedom.
- $\epsilon_i$ is a vector with $\partial_i\epsilon_i=0$ and $3-1=2$ degrees of freedom.
- $\lambda$ is a scalar with one degree of freedom. The operator acting on it has zero trace.
- $h_{ij}^{\mathrm{TT}}$ is a transverse, traceless tensor. Its conditions $\delta_{ij}h_{ij}^{\mathrm{TT}}=0$ and $\partial_i h_{ij}^{\mathrm{TT}}=0$ leave $6-1-3=2$ degrees of freedom.

### PDF page 120

The scalar, vector, and tensor functions $(\phi,\gamma,\beta_i,H,\lambda,\epsilon_i,h_{ij}^{\mathrm{TT}})$ characterize $h_{\mu\nu}$ with $1+1+2+1+1+2+2=10$ components. The goal is to express the Einstein field equations in terms of these functions.

Write the gauge generator as

$$
\xi_\alpha=(\xi_t,\xi_i)=(A,B_i+\partial_i C),
\qquad
\partial_i B_i=0,
$$

where $A$ and $C$ are scalars. Apply $h_{\mu\nu}\longrightarrow h_{\mu\nu}-\partial_\mu\xi_\nu-\partial_\nu\xi_\mu$ to obtain

$$
\begin{aligned}
\phi &\longrightarrow \phi+\partial_t A,\\
\beta_i &\longrightarrow \beta_i-\partial_t B_i,\\
\gamma &\longrightarrow \gamma-A-\partial_t C,\\
H &\longrightarrow H-2\nabla^2 C,\\
\lambda &\longrightarrow \lambda-2C,\\
\epsilon_i &\longrightarrow \epsilon_i-2B_i,\\
h_{ij}^{\mathrm{TT}} &\longrightarrow h_{ij}^{\mathrm{TT}}.
\end{aligned}
$$

The handwritten $\epsilon_i$ transformation includes $\partial_t B_i$. The spatial part of the gauge transformation gives $B_i$ itself. The transverse, traceless part is already gauge invariant. The next page gives the other gauge-invariant combinations.

### PDF page 121

The gauge-invariant combinations are

$$
\begin{aligned}
\Phi&=\phi+\partial_t\gamma-\frac12\partial_t^2\lambda,\\
\Theta&=\frac12(H-\nabla^2\lambda),\\
\Psi_i&=\beta_i-\frac12\partial_t\epsilon_i,
&\partial_i\Psi_i&=0,
\end{aligned}
$$

together with $h_{ij}^{\mathrm{TT}}$. The time derivative of $\epsilon_i$ in $\Psi_i$ follows from the preceding gauge transformations. The two scalars contribute $1+1$ independent functions, the divergence-free vector contributes $3-1=2$, and the transverse, traceless tensor contributes $6-1-3=2$. This gives six gauge-invariant functions.

To express $G_{\alpha\beta}=8\pi T_{\alpha\beta}$ in terms of those functions, decompose the stress–energy tensor first.

$$
\begin{aligned}
T_{tt}&=\energy{\rho},\\
T_{ti}&=S_i+\partial_i S,
&\partial_i S_i&=0,\\
T_{ij}&=\mechanical{P}\delta_{ij}+\sigma_{ij}+\partial_{(i}\sigma_{j)}
+\left(\partial_i\partial_j-\frac13\delta_{ij}\nabla^2\right)\sigma.
\end{aligned}
$$

The constraints are $\partial_i\sigma_i=0$, $\partial_i\sigma_{ij}=0$, and $\delta_{ij}\sigma_{ij}=0$. Local conservation of energy and momentum requires $\partial^\alpha T_{\alpha\beta}=0$. Its time component gives

$$
\nabla^2S=\partial_t\energy{\rho}.
$$

### PDF page 122

The remaining conservation equations give

$$
\nabla^2\sigma=-\frac32\mechanical{P}+\frac32\partial_tS,
\qquad
\nabla^2\sigma_i=2\partial_t S_i.
$$

Only $\energy{\rho}$, $\mechanical{P}$, $S_i$, and $\sigma_{ij}$ are freely specifiable. They determine the other four components of the decomposition.

The linearized Einstein tensor in gauge-invariant variables is

$$
\begin{aligned}
G_{tt}&=-\nabla^2\Theta,\\
G_{ti}&=-\frac12\nabla^2\Psi_i-\partial_i\partial_t\Theta,\\
G_{ij}&=-\frac12\Box h_{ij}^{\mathrm{TT}}-\partial_t\partial_{(i}\Psi_{j)}
-\frac12\partial_i\partial_j(2\Phi+\Theta)\\
&\qquad+\delta_{ij}\left[\frac12\nabla^2(2\Phi+\Theta)-\partial_t^2\Theta\right].
\end{aligned}
$$

The time derivative in the vector contribution to $G_{ij}$ is implicit in the handwritten derivation. The field equation $G_{\alpha\beta}=8\pi G T_{\alpha\beta}$ yields

$$
\begin{aligned}
\nabla^2\Phi&=4\pi G(\energy{\rho}+3\mechanical{P}-3\partial_t S),\\
\nabla^2\Theta&=-8\pi G\energy{\rho},\\
\nabla^2\Psi_i&=-16\pi G S_i,\\
\Box h_{ij}^{\mathrm{TT}}&=-16\pi G\sigma_{ij}.
\end{aligned}
$$

The last equation is the wave equation for gravitational radiation.

### PDF page 123

#### Lecture 16. Gravitational radiation

$$
\Box h_{ij}^{\mathrm{TT}}=-16\pi G\sigma_{ij}.
$$

The goal is to relate $h_{ij}^{\mathrm{TT}}$ to observables and compute it for a given source. Take a perturbation with $\Phi=\Theta=\Psi_i=0$ and $h_{ij}^{\mathrm{TT}}=h_{ij}^{\mathrm{TT}}(t-z)$, describing radiation propagating in the positive $z$ direction. Then

$$
h_{\mu\nu}=
\begin{bmatrix}
0&0&0&0\\
0&h_{xx}^{\mathrm{TT}}&h_{xy}^{\mathrm{TT}}&0\\
0&h_{yx}^{\mathrm{TT}}&h_{yy}^{\mathrm{TT}}&0\\
0&0&0&0
\end{bmatrix}.
$$

Symmetry gives $h_{xy}^{\mathrm{TT}}=h_{yx}^{\mathrm{TT}}$. The zero trace gives $h_{xx}^{\mathrm{TT}}+h_{yy}^{\mathrm{TT}}=0$, so $h_{xx}^{\mathrm{TT}}=-h_{yy}^{\mathrm{TT}}$.

Consider freely falling bodies in the spacetime $g_{\mu\nu}=\eta_{\mu\nu}+h_{\mu\nu}$. Their trajectories satisfy the geodesic equation

$$
\frac{du^\alpha}{d\tau}+\Gamma^\alpha_{\mu\nu}u^\mu u^\nu=0.
$$

Initially $h_{\mu\nu}=0$ and $u^\mu=(1,0,0,0)$. At $t=0$, a nonzero perturbation arrives and passes over the bodies.

### PDF page 124

The initial four-acceleration in the chosen coordinates is

$$
\begin{aligned}
\left.\frac{du^\alpha}{d\tau}\right|_{t=0}
&=-\left.\Gamma^\alpha_{\mu\nu}u^\mu u^\nu\right|_{t=0}
=-\Gamma^\alpha_{00}\\
&=-\frac12\eta^{\alpha\beta}
\left(\partial_t h_{\beta0}^{\mathrm{TT}}+\partial_t h_{0\beta}^{\mathrm{TT}}-\partial_\beta h_{00}^{\mathrm{TT}}\right)=0.
\end{aligned}
$$

The body remains at fixed spatial coordinates. What, then, does LIGO measure? The coordinates follow the freely falling body as the wave passes.

Consider two nearby bodies following geodesics in $g_{\mu\nu}=\eta_{\mu\nu}+h_{\mu\nu}$.

![[Kyle Kabasares - General Relativity - Nearby freely falling bodies.png|**Fig. 30** Body $A$ is at the origin. Body $B$ is displaced by $\epsilon\mathbf{e}_x$.]]

### PDF page 125

Consider a light pulse traveling back and forth between $A$ and $B$. Its tangent is $p^\mu=(dt/d\lambda,dx/d\lambda,0,0)$. From the null condition,

$$
0=g_{\mu\nu}p^\mu p^\nu=-\left(\frac{dt}{d\lambda}\right)^2+
(1+h_{xx}^{\mathrm{TT}})\left(\frac{dx}{d\lambda}\right)^2.
$$

For the outbound pulse the binomial expansion gives

$$
dt=\sqrt{1+h_{xx}^{\mathrm{TT}}}\,dx\simeq\left(1+\frac12h_{xx}^{\mathrm{TT}}\right)dx.
$$

The round-trip time is

$$
\begin{aligned}
\mechanical{T}_{A\to B\to A}
&=\int_0^\epsilon\left(1+\frac12h_{xx}^{\mathrm{TT}}\right)dx
+\int_\epsilon^0\left(1+\frac12h_{xx}^{\mathrm{TT}}\right)(-dx)\\
&=2\epsilon+\frac12\int_0^\epsilon h_{xx}^{\mathrm{TT}}\,dx
-\frac12\int_\epsilon^0 h_{xx}^{\mathrm{TT}}\,dx .
\end{aligned}
$$

The arrival times therefore depend on $h_{xx}^{\mathrm{TT}}$ evaluated along the light paths.

The bodies initially have four-velocities $u^\mu=(1,0,0,0)+O(h)$. Their freely falling worldlines obey the geodesic deviation equation

$$
\frac{D^2\xi^\alpha}{d\tau^2}=R^\alpha{}_{\mu\nu\beta}u^\mu u^\nu\xi^\beta.
$$

### PDF page 126

Since the curvature is $O(h)$, the linearized deviation equation for the spatial components is

$$
\partial_t^2\xi^i=R^i{}_{00j}\xi^j+O(h^2).
$$

The independent nonzero curvature components entering this equation are

$$
\begin{aligned}
R_{x0x0}&=R^x{}_{0x0}=-\frac12\partial_t^2 h_{xx}^{\mathrm{TT}},\\
R_{y0y0}&=R^y{}_{0y0}=-\frac12\partial_t^2 h_{yy}^{\mathrm{TT}}
=+\frac12\partial_t^2 h_{xx}^{\mathrm{TT}},\\
R_{y0x0}&=R^y{}_{0x0}=-\frac12\partial_t^2 h_{xy}^{\mathrm{TT}}.
\end{aligned}
$$

The handwritten final equality for $R_{y0y0}$ repeats $h_{yy}^{\mathrm{TT}}$ where tracelessness gives $-h_{xx}^{\mathrm{TT}}$. The other components needed here follow by symmetry or vanish. The relative accelerations are

$$
\begin{aligned}
\partial_t^2\xi^x&=\frac12\partial_t^2 h_{xx}^{\mathrm{TT}}\xi^x+
\frac12\partial_t^2 h_{xy}^{\mathrm{TT}}\xi^y,\\
\partial_t^2\xi^y&=\frac12\partial_t^2 h_{xy}^{\mathrm{TT}}\xi^x-
\frac12\partial_t^2 h_{xx}^{\mathrm{TT}}\xi^y,\\
\partial_t^2\xi^z&=0.
\end{aligned}
$$

For a small wave, write $\xi^i=\xi_0^i+\delta\xi^i$. The initial separation $\xi_0^i$ is time independent, and the varying part $\delta\xi^i$ is of order $h$.

### PDF page 127

#### Gravitational-wave polarizations

For the **plus polarization**, $h_{xx}^{\mathrm{TT}}$ is sinusoidal and $h_{xy}^{\mathrm{TT}}=0$. The wave alternately stretches and squeezes the ring along the $x$ and $y$ axes.

![[Kyle Kabasares - General Relativity - Plus polarization.png|**Fig. 31** A circular ring alternates between horizontal and vertical elongation under a plus-polarized wave.]] 

For the **cross polarization**, $h_{xx}^{\mathrm{TT}}=0$ and $h_{xy}^{\mathrm{TT}}$ is sinusoidal. The axes of stretch and squeeze are diagonal.

![[Kyle Kabasares - General Relativity - Cross polarization.png|**Fig. 32** A circular ring alternates between elongation along the two diagonals under a cross-polarized wave.]]

#### Computing the wave from a source

The gauge-invariant formalism identifies $h_{ij}^{\mathrm{TT}}$ as the radiative part in every gauge. In gauges such as Lorenz gauge, other metric components may also appear to radiate because of the gauge choice.

### PDF page 128

Compute $h_{\alpha\beta}$ in a convenient gauge, then extract its transverse, traceless spatial part. In Lorenz gauge the linearized Einstein equation and retarded solution are

$$
\begin{aligned}
\Box\bar h_{\alpha\beta}&=-16\pi G T_{\alpha\beta},\\
\bar h_{\alpha\beta}(t,\mathbf{x})
&=4G\int d^3x'\,\frac{T_{\alpha\beta}(t-\lvert\mathbf{x}-\mathbf{x}'\rvert,\mathbf{x}')}{\lvert\mathbf{x}-\mathbf{x}'\rvert}.
\end{aligned}
$$

The field point is $(t,\mathbf{x})$ and the integration runs over source points $\mathbf{x}'$. Typically the source is much smaller than its distance to the field point.

![[Kyle Kabasares - General Relativity - Distant source geometry.png|**Fig. 33** The observation point is a distance $\mechanical{r}$ from the small source region.]]

The leading approximation on this page replaces $\lvert\mathbf{x}-\mathbf{x}'\rvert$ by $\mechanical{r}$ in the amplitude and the delay.

$$
\bar h_{\alpha\beta}\simeq\frac{4G}{\mechanical{r}}\int d^3x'\,T_{\alpha\beta}(t-\mechanical{r},\mathbf{x}').
$$

A more detailed multipole expansion writes $1/\lvert\mathbf{x}-\mathbf{x}'\rvert$ as a series of Legendre polynomials. For the transverse, traceless projection only the spatial components are needed.

$$
\bar h_{ij}\simeq\frac{4G}{\mechanical{r}}\int d^3x'\,T_{ij}(t-\mechanical{r},\mathbf{x}').
$$

### PDF page 129

Problem set 2 uses the tensor virial theorem,

$$
\int d^3x'\,T_{ij}=\frac12\frac{\partial^2}{\partial t^2}\int d^3x'\,T_{00}x_i'x_j'.
$$

Thus in the distant-source approximation,

$$
\bar h_{ij}=\frac{2G}{\mechanical{r}}\frac{\partial^2 I_{ij}}{\partial t^2},
\qquad
I_{ij}=\int d^3x'\,T_{00}x_i'x_j',
$$

where $I_{ij}$ is the quadrupole moment and the time derivatives on the right are evaluated at the retarded time.

Extract the transverse, traceless part. Far from the source, $\Box\bar h_{ij}=0$, so expand the solution in plane waves. For a single wave,

$$
\bar h_{j\ell}=A_{j\ell}\exp[i(\signal{\omega}t-\signal{\mathbf{k}}\cdot\mathbf{x})].
$$

Its divergence is

$$
\partial_j\bar h_{j\ell}=-i\signal{k}_j A_{j\ell}\exp[i(\signal{\omega}t-\signal{\mathbf{k}}\cdot\mathbf{x})].
$$

Consequently the transversality condition is $\signal{k}_j\bar h_{j\ell}=0$. The transverse wave field is orthogonal to the wave vector.

### PDF page 130

Define the propagation direction $n_j=\signal{k}_j/\sqrt{\signal{\mathbf{k}}\cdot\signal{\mathbf{k}}}$. Problem set 1, problem 3, gives the projector $P_{ij}=\delta_{ij}-n_i n_j$, which retains components orthogonal to $\mathbf{n}$. Project both indices of the trace-reversed perturbation to obtain

$$
\bar h_{ij}^{\mathrm T}=\bar h_{\ell k}P_{\ell i}P_{kj}.
$$

Next impose zero trace. For a tensor $a_{ij}$ on an $N$-dimensional manifold with metric $g_{ij}$, the trace-free part is

$$
a_{ij}^{\mathrm{TF}}=a_{ij}-\frac1N(a_{k\ell}g^{k\ell})g_{ij}.
$$

The transverse perturbation lives in the two-dimensional plane with metric $P_{ij}$. Hence

$$
\begin{aligned}
\bar h_{ij}^{\mathrm{TT}}
&=\bar h_{ij}^{\mathrm T}-\frac12\bar h_{\ell k}^{\mathrm T}P_{\ell k}P_{ij}\\
&=\bar h_{\ell k}P_{\ell i}P_{kj}-\frac12\bar h_{\ell k}P_{\ell k}P_{ij}\\
&=h_{ij}^{\mathrm{TT}}.
\end{aligned}
$$

### PDF page 131

#### The quadrupole formula

$$
h_{ij}^{\mathrm{TT}}=\frac{2G}{\mechanical{r}}\frac{d^2 I_{\ell k}}{dt^2}
\left(P_{\ell i}P_{kj}-\frac12P_{\ell k}P_{ij}\right).
$$

Restoring the factors of $c$ in the prefactor shows the small size of the perturbation.

#### Lecture 17. Gravitational radiation II

To describe gravitational waves on a nonflat background, write

$$
g_{\alpha\beta}=\hat g_{\alpha\beta}+h_{\alpha\beta}.
$$

Measurements probe the full metric $g_{\alpha\beta}$. The background $\hat g_{\alpha\beta}$ varies in space and time, and the perturbation $h_{\alpha\beta}$ is generally small. The distinction between wave and background follows from their different length scales and timescales. The wave oscillates on much shorter scales than the background varies.

The analogy is an ocean wave. Its short-scale shape is distinct from the curvature of the Earth and the bending associated with geological structures. The analysis uses two sets of scales.

### PDF page 132

Let $(\mathcal L,\mathcal T)$ denote the long scales on which the background varies, and $(\signal{\lambda},\signal{\tau})$ the short wavelength and period of the gravitational waves. Average over a time $\mechanical{T}$ of several periods and a length $\mechanical{L}$ of several wavelengths. The background changes little over the window, and the oscillating contribution averages to zero.

$$
\langle g_{\alpha\beta}\rangle=\langle\hat g_{\alpha\beta}\rangle+\langle h_{\alpha\beta}\rangle
\simeq\hat g_{\alpha\beta}+0.
$$

Identify the background as $\hat g_{\alpha\beta}=\langle g_{\alpha\beta}\rangle$ and the perturbation as $h_{\alpha\beta}=g_{\alpha\beta}-\langle g_{\alpha\beta}\rangle$.

The averaging prescription attributed to Brill and Hartle (1964) uses a peaked, normalized function $f$ with spatial and temporal widths $(\mechanical{L},\mechanical{T})$.

$$
\langle g_{\alpha\beta}\rangle=\int dV^{(4)}\,g_{\alpha\beta}f(x^\mu),
\qquad
\int dV^{(4)}\,f(x^\mu)=1.
$$

The result transforms as a tensor up to corrections of order $\signal{\lambda}/\mechanical{L}$. With $g_{\alpha\beta}=\hat g_{\alpha\beta}+h_{\alpha\beta}$, expand the spacetime quantities in powers of $h$ about $\hat g$.

### PDF page 133

The connection expands to first order as

$$
\begin{aligned}
\Gamma^\alpha_{\mu\nu}
&=\frac12g^{\alpha\beta}(\partial_\mu g_{\nu\beta}+\partial_\nu g_{\beta\mu}-\partial_\beta g_{\mu\nu})\\
&=\hat\Gamma^\alpha_{\mu\nu}-h^{\alpha\beta}\hat\Gamma_{\beta\mu\nu}
+\frac12\hat g^{\alpha\beta}(\partial_\mu h_{\nu\beta}+\partial_\nu h_{\beta\mu}-\partial_\beta h_{\mu\nu})+O(h^2).
\end{aligned}
$$

Write $\Gamma^\alpha_{\mu\nu}=\hat\Gamma^\alpha_{\mu\nu}+\delta\Gamma^\alpha_{\mu\nu}+O(h^2)$, where the variation can be expressed in terms of the background covariant derivative.

$$
\delta\Gamma^\alpha_{\mu\nu}=\frac12\hat g^{\alpha\beta}
(\hat\nabla_\mu h_{\nu\beta}+\hat\nabla_\nu h_{\beta\mu}-\hat\nabla_\beta h_{\mu\nu}).
$$

The Riemann tensor is $\hat R^\alpha{}_{\beta\gamma\delta}+\delta R^\alpha{}_{\beta\gamma\delta}+O(h^2)$, with

$$
\delta R^\alpha{}_{\beta\gamma\delta}=\hat\nabla_\gamma\delta\Gamma^\alpha_{\beta\delta}
-\hat\nabla_\delta\delta\Gamma^\alpha_{\beta\gamma}.
$$

The Einstein equation couples the Ricci and Einstein tensors to stress–energy. For this calculation take $T_{\mu\nu}=0$, so $\hat G_{\alpha\beta}=0$ implies $\hat R_{\alpha\beta}=0$ and $\hat R=0$. The first-order Ricci tensor is

$$
\delta R_{\mu\nu}=\delta R^\alpha{}_{\mu\alpha\nu}
=-\frac12\hat\Box h_{\mu\nu}-\frac12\hat\nabla_\nu\hat\nabla_\mu h
+\hat\nabla_\alpha\hat\nabla_{(\mu}h_{\nu)}{}^\alpha.
$$

### PDF page 134

The first-order Ricci scalar and Einstein tensor on a vacuum background are

$$
\begin{aligned}
\delta R&=\hat g^{\mu\nu}\delta R_{\mu\nu}
=-\hat\Box h+\hat\nabla_\alpha\hat\nabla_\beta h^{\beta\alpha},\\
\hat\Box&=\hat g^{\alpha\beta}\hat\nabla_\alpha\hat\nabla_\beta,
&h&=\hat g^{\alpha\beta}h_{\alpha\beta},\\
\delta G_{\alpha\beta}&=\delta R_{\alpha\beta}-\frac12\hat g_{\alpha\beta}\delta R=0.
\end{aligned}
$$

Generalize the gauge transformation to $x^{\alpha'}=x^\alpha+\xi^\alpha$, with Jacobian $L^{\alpha'}{}_\mu=\partial_\mu x^{\alpha'}=\delta^\alpha_\mu+\partial_\mu\xi^\alpha$. The metric transforms with two inverse Jacobians,

$$
g_{\mu'\nu'}(x')=(\hat g_{\alpha\beta}+h_{\alpha\beta})(x)L^\alpha{}_{\mu'}L^\beta{}_{\nu'}.
$$

Expressing both fields at the same numerical coordinate values and expanding to first order gives

$$
g'_{\mu\nu}=\hat g_{\mu\nu}+h_{\mu\nu}
-\xi^\alpha\partial_\alpha\hat g_{\mu\nu}
-\hat g_{\alpha\nu}\partial_\mu\xi^\alpha
-\hat g_{\mu\alpha}\partial_\nu\xi^\alpha.
$$

The background shift here is $x=x'-\xi$ for the stated coordinate transformation. The handwritten intermediate line writes it with the opposite sign. Use $\hat g_{\alpha\nu}\partial_\mu\xi^\alpha=\hat\nabla_\mu\xi_\nu-\hat\Gamma_{\nu\mu\alpha}\xi^\alpha$ to collect the terms. The result is

$$
h'_{\mu\nu}=h_{\mu\nu}-\hat\nabla_\mu\xi_\nu-\hat\nabla_\nu\xi_\mu.
$$

The trace-reversed perturbation is $\bar h_{\mu\nu}=h_{\mu\nu}-\frac12\hat g_{\mu\nu}h$.

### PDF page 135

In terms of the trace-reversed perturbation,

$$
\begin{aligned}
\delta G_{\mu\nu}
={}&-\frac12\hat\Box\bar h_{\mu\nu}+\hat R_{\alpha\mu\nu\beta}\bar h^{\alpha\beta}
-\frac12\hat g_{\mu\nu}\hat\nabla_\alpha\hat\nabla_\beta\bar h^{\beta\alpha}\\
&+\frac12\hat\nabla_\mu\hat\nabla_\alpha\bar h^\alpha{}_\nu
+\frac12\hat\nabla_\nu\hat\nabla_\alpha\bar h^\alpha{}_\mu.
\end{aligned}
$$

Choose the generalized Lorenz gauge $\hat\nabla^\alpha\bar h_{\alpha\beta}^{\mathrm{new}}=0$ by solving $\hat\Box\xi_\beta=\hat\nabla^\alpha\bar h_{\alpha\beta}^{\mathrm{old}}$. The Einstein tensor then simplifies to

$$
\delta G_{\mu\nu}=-\frac12\hat\Box\bar h_{\mu\nu}+\hat R_{\alpha\mu\nu\beta}\bar h^{\alpha\beta}.
$$

#### Energy content of gravitational waves

In a local Lorentz frame the metric is Minkowskian at the center. The wave energy must be extracted through curvature and averaging over a region. Expand the metric to second order about the background.

$$
g_{\alpha\beta}=\hat g_{\alpha\beta}+\epsilon h_{\alpha\beta}+\epsilon^2 j_{\alpha\beta}.
$$

Here $\epsilon$ counts orders in the expansion and is set to $1$ at the end. The vacuum equation is $G_{\alpha\beta}[\hat g_{\mu\nu}+\epsilon h_{\mu\nu}+\epsilon^2j_{\mu\nu}]=0$.

### PDF page 136

Expand the vacuum Einstein equation to second order.

$$
\begin{aligned}
0={}&G_{\alpha\beta}[\hat g]
+\epsilon G_{\alpha\beta}^{(1)}[h;\hat g]\\
&+\epsilon^2\left(G_{\alpha\beta}^{(1)}[j;\hat g]+G_{\alpha\beta}^{(2)}[h;\hat g]\right)
+O(\epsilon^3).
\end{aligned}
$$

The order-$1$ equation says that the background is vacuum. The order-$\epsilon$ equation is the wave equation for $h_{\mu\nu}$. At order $\epsilon^2$,

$$
G_{\alpha\beta}^{(1)}[j;\hat g]=-G_{\alpha\beta}^{(2)}[h;\hat g].
$$

Terms quadratic in $h$ act as a source for $j$. Define $\Delta j_{\mu\nu}=j_{\mu\nu}-\langle j_{\mu\nu}\rangle$. The fluctuation varies on the wave scale $\signal{\lambda}$, and the average varies on the long background scale $\mathcal L$. The averaging scale $\mechanical{L}$ is intermediate. Regroup the metric by scale,

$$
g_{\mu\nu}
=\underbrace{\big[\hat g_{\mu\nu}+\epsilon^2\langle j_{\mu\nu}\rangle\big]}_{\text{varies on }\mathcal L}
+\underbrace{\big[\epsilon h_{\mu\nu}+\epsilon^2\Delta j_{\mu\nu}\big]}_{\text{varies on }\lambda}.
$$

Averaging the second-order equation yields

$$
\big\langle G_{\alpha\beta}^{(1)}[j;\hat g]\big\rangle
=-\big\langle G_{\alpha\beta}^{(2)}[h;\hat g]\big\rangle.
$$

### PDF page 137

Averaging approximately commutes with two derivatives,

$$
\left\langle\partial^2 f_{\mu\nu}\right\rangle
=\partial^2\langle f_{\mu\nu}\rangle+O\!\left(\frac{\signal{\lambda}^2}{\mathcal L^2}\right).
$$

Hence $G_{\alpha\beta}^{(1)}[\langle j\rangle;\hat g]=-\langle G_{\alpha\beta}^{(2)}[h;\hat g]\rangle+O(\signal{\lambda}^2/\mathcal L^2)$. Since $\hat g$ is a vacuum solution, the averaged metric satisfies an Einstein equation with an effective source. To the retained order it reads

$$
G_{\alpha\beta}[\hat g+\epsilon^2\langle j\rangle]
=-\epsilon^2\langle G_{\alpha\beta}^{(2)}[h;\hat g]\rangle.
$$

Define $T_{\alpha\beta}^{\mathrm{GW}}=-(8\pi G)^{-1}\langle G_{\alpha\beta}^{(2)}[h;\hat g]\rangle$. Expanding the operator and using the transverse, traceless field gives the **Isaacson stress–energy tensor**,

$$
T_{\alpha\beta}^{\mathrm{GW}}=\frac{1}{32\pi G}
\left\langle\hat\nabla_\alpha h_{ij}^{\mathrm{TT}}\,
\hat\nabla_\beta h_{\mathrm{TT}}^{ij}\right\rangle.
$$

For radiation in a nearly flat region, with $c=1$, the energy flux in the propagation direction is

$$
T_{00}^{\mathrm{GW}}=\frac{d\energy{E}}{d\mechanical{A}\,d\mechanical{t}}
=\frac{1}{32\pi G}\left\langle\partial_t h_{ij}^{\mathrm{TT}}\,\partial_t h_{ij}^{\mathrm{TT}}\right\rangle.
$$

### PDF page 138

Integrate the flux over a sphere to obtain the radiated power.

$$
\frac{d\energy{E}}{d\mechanical{t}}=\mechanical{r}^2\int d\Omega\,T_{00}^{\mathrm{GW}},
\qquad
h_{ij}^{\mathrm{TT}}=\frac{2G}{\mechanical{r}}\ddot I_{k\ell}\left(P_{ki}P_{\ell j}-\frac12P_{k\ell}P_{ij}\right),
\qquad
P_{ij}=\delta_{ij}-n_i n_j.
$$

The angular integrals used in the contraction are

$$
\begin{aligned}
\int n_i n_j\,d\Omega&=\frac{4\pi}{3}\delta_{ij},\\
\int n_i n_j n_k\,d\Omega&=0,\\
\int n_i n_j n_k n_\ell\,d\Omega
&=\frac{4\pi}{15}(\delta_{ij}\delta_{k\ell}+\delta_{ik}\delta_{j\ell}+\delta_{i\ell}\delta_{jk}).
\end{aligned}
$$

The resulting quadrupole power formula is

$$
\frac{d\energy{E}}{d\mechanical{t}}=\frac{G}{5}
\left\langle\dddot I_{ij}^{\mathrm{TF}}\dddot I_{ij}^{\mathrm{TF}}\right\rangle.
$$

The boxed handwritten formula uses $I_{ij}$ without a superscript. The transverse, traceless projection removes the trace of the quadrupole, so $I_{ij}^{\mathrm{TF}}=I_{ij}-\delta_{ij}I_{kk}/3$ appears in the contraction.

### PDF page 139

#### Lecture 18. Cosmology

Cosmology studies the large-scale structure of the universe. Imposing symmetries on spacetime makes the equations tractable.

A **maximally symmetric space** has the largest possible number of Killing vectors, $n(n+1)/2$ in $n$ dimensions. See Carroll, section 3.9. Intuitively, the space is homogeneous, with uniform properties at all locations, and isotropic, with the same properties in all directions.

- Three-dimensional Euclidean space has six Killing vectors, three rotations and three translations.
- Four-dimensional flat spacetime has ten Killing vectors, three rotations, four spacetime translations, and three boosts. The handwritten list groups these as three rotations, three translations, and four boosts.

The Riemann tensor of a maximally symmetric spacetime must be Lorentz invariant in a local Lorentz frame. It takes the form

$$
R_{\alpha\mu\beta\nu}=\frac{R}{n(n-1)}(g_{\alpha\beta}g_{\mu\nu}-g_{\alpha\nu}g_{\beta\mu}),
$$

where $n$ is the number of dimensions.

### PDF page 140

Contract the maximally symmetric Riemann tensor to get

$$
R_{\mu\nu}=\frac{R}{n(n-1)}(ng_{\mu\nu}-g_{\mu\nu})=\frac Rn g_{\mu\nu}.
$$

Our universe is approximately homogeneous and isotropic on large spatial scales, and it evolves in time. The cosmic microwave background probes the largest scales and is isotropic at the level of roughly $10^{-5}$ after accounting for the dipole. The notes give several times $\quantity{10}{Mpc}$ as a scale on which deviations from homogeneity become important. Galaxy clusters are examples of clumping under gravity.

Use the spacetime interval

$$
ds^2=-dt^2+R^2(t)\gamma_{ij}\,dx^i dx^j,
$$

where $R(t)$ is the scale factor. In these coordinates $g_{tt}=-1$ and $g_{ti}=0$. A comoving observer with four-velocity $u^\mu=(1,0,0,0)$ follows the expansion of spacetime. The Earth has a velocity relative to the comoving frame. Cosmological measurements must account for it, for example through the Doppler dipole in the cosmic microwave background.

### PDF page 141

Take $\gamma_{ij}$ to be maximally symmetric. The comoving $x^i$ are dimensionless, with the physical length scale absorbed into $R(t)$. The spatial curvature tensors are

$$
{}^{(3)}R_{ijk\ell}=k(\gamma_{ik}\gamma_{j\ell}-\gamma_{i\ell}\gamma_{jk}),
\qquad
{}^{(3)}R_{j\ell}=2k\gamma_{j\ell},
\qquad
{}^{(3)}R=6k.
$$

The spherical symmetry of $\gamma_{ij}$ allows the form

$$
\gamma_{ij}\,dx^i dx^j=f(\bar r)\,d\bar r^2+\bar r^2 d\Omega^2,
\qquad
d\Omega^2=d\theta^2+\sin^2\theta\,d\phi^2.
$$

Set $f(\bar r)=\exp[2\beta(\bar r)]$. Computing the radial Ricci component from this metric and from maximal symmetry gives

$$
{}^{(3)}R_{\bar r\bar r}=\frac{2}{\bar r}\partial_{\bar r}\beta
=2k\gamma_{\bar r\bar r}=2ke^{2\beta}.
$$

Thus $e^{-2\beta}\partial_{\bar r}\beta=k\bar r$. Choose $\beta(0)=0$ and integrate to find

$$
\beta(\bar r)=-\frac12\ln(1-k\bar r^2).
$$

### PDF page 142

The spacetime line element is

$$
ds^2=-dt^2+R^2(t)\left[\frac{d\bar r^2}{1-k\bar r^2}+\bar r^2 d\Omega^2\right].
$$

For $\alpha>0$, set $\tilde r=\sqrt{\alpha}\,\bar r$ and $\tilde R(t)=R(t)/\sqrt{\alpha}$. Then

$$
ds^2=-dt^2+\tilde R^2(t)\left[\frac{d\tilde r^2}{1-k'\tilde r^2}+\tilde r^2 d\Omega^2\right],
\qquad k'=\frac{k}{\alpha}.
$$

The handwritten rescaling gives $k'=\alpha k$. With the stated $\tilde r$ and $\tilde R$, substitution gives $k'=k/\alpha$. The magnitude of nonzero $k$ can therefore be absorbed into the scale factor, leaving $k\in\{-1,0,+1\}$.

Define a radial coordinate $\chi$ by

$$
d\chi=\frac{d\bar r}{\sqrt{1-k\bar r^2}},
\qquad
\bar r=\begin{cases}
\sin\chi & k=+1,\\
\chi & k=0,\\
\sinh\chi & k=-1.
\end{cases}
$$

For $k=+1$,

$$
ds^2=-dt^2+R^2(t)\left[d\chi^2+\sin^2\chi\,d\Omega^2\right].
$$

Each spatial slice of this closed universe is a three-sphere. The unit three-sphere consists of the points at unit distance from a chosen center in four-dimensional Euclidean space.

### PDF page 143

For $k=0$ the line element is

$$
ds^2=-dt^2+R^2(t)\big[d\chi^2+\chi^2d\Omega^2\big].
$$

Each spatial slice is Euclidean, while the four-dimensional spacetime can have curvature. For $k=-1$,

$$
ds^2=-dt^2+R^2(t)\big[d\chi^2+\sinh^2\chi\,d\Omega^2\big].
$$

Each spatial slice is a hyperboloid. This is an open universe. The angular factor $d\Omega^2$ follows from the previous page.

Normalize the scale factor to its present value $R_0=R(t_0)$. Set

$$
a(t)=\frac{R(t)}{R_0},
\qquad a(t_0)=1,
\qquad r=R_0\bar r,
\qquad \kappa=\frac{k}{R_0^2}.
$$

The **Robertson–Walker spacetime** then has metric

$$
ds^2=-dt^2+a^2(t)\left[\frac{dr^2}{1-\kappa r^2}+r^2d\Omega^2\right].
$$

Use a perfect fluid at rest in the comoving coordinates as the source. A homogeneous fluid at rest in this frame respects the spatial homogeneity and isotropy.

### PDF page 144

The perfect-fluid stress–energy tensor in comoving coordinates is

$$
T_{\mu\nu}=(\energy{\rho}+\mechanical{P})u_\mu u_\nu+\mechanical{P}g_{\mu\nu}
=\begin{bmatrix}
\energy{\rho}&0\\
0&\mechanical{P}g_{ij}
\end{bmatrix},
\qquad
T^\mu{}_\nu=\operatorname{diag}(-\energy{\rho},\mechanical{P},\mechanical{P},\mechanical{P}).
$$

The spatial block uses the full spatial metric, including the scale factor. Local energy conservation is $\nabla_\mu T^\mu{}_0=0$. Expanding the derivative gives

$$
0=\partial_\mu T^\mu{}_0+\Gamma^\mu_{\mu\lambda}T^\lambda{}_0
-\Gamma^\lambda_{\mu0}T^\mu{}_\lambda.
$$

Substituting the Robertson–Walker metric gives the continuity equation

$$
0=\partial_t\energy{\rho}+3\frac{\partial_t a}{a}(\energy{\rho}+\mechanical{P}).
$$

With $R(t)=a(t)R_0$, the equivalent form is

$$
\partial_t(\energy{\rho}R^3)=-\mechanical{P}\,\partial_t(R^3).
$$

The left side is the rate of change of energy in a comoving volume, and the right side is minus the pressure times the rate of change of that volume. This is the first law of thermodynamics for adiabatic expansion, $d\thermal{U}=-\mechanical{P}\,d\mechanical{V}$.

### PDF page 145

The Einstein equation can be written as

$$
R_{\mu\nu}=8\pi G\left(T_{\mu\nu}-\frac12g_{\mu\nu}T\right),
\qquad T=g^{\mu\nu}T_{\mu\nu}.
$$

The time component and a combination with the spatial components give the **Friedmann equations**.

$$
\begin{aligned}
\frac{\ddot a}{a}&=-\frac{4\pi G}{3}(\energy{\rho}+3\mechanical{P}) &&\text{(F1)},\\
\left(\frac{\dot a}{a}\right)^2&=\frac{8\pi G}{3}\energy{\rho}-\frac{\kappa}{a^2} &&\text{(F2)}.
\end{aligned}
$$

The acceleration equation uses $\ddot a$, where the handwriting shows one dot. Friedmann–Robertson–Walker metrics are Robertson–Walker metrics satisfying the Einstein equation with the cosmological source.

The **Hubble parameter** is $H=\dot a/a$, with units of inverse time. Its present value is $H_0=H(t_0)$. Define the critical density and density parameter by

$$
\energy{\rho}_{\mathrm{crit}}=\frac{3H^2}{8\pi G},
\qquad
\Omega=\frac{\energy{\rho}}{\energy{\rho}_{\mathrm{crit}}}.
$$

The squared Hubble equation then gives

$$
\Omega-1=\frac{\kappa}{H^2a^2}.
$$

### PDF page 146

The sign of $\Omega-1$ distinguishes the three spatial geometries.

- $\Omega<1$ and $\energy{\rho}<\energy{\rho}_{\mathrm{crit}}$ give $\kappa<0$ and $k=-1$, an open universe.
- $\Omega=1$ and $\energy{\rho}=\energy{\rho}_{\mathrm{crit}}$ give $\kappa=k=0$, a spatially flat universe.
- $\Omega>1$ and $\energy{\rho}>\energy{\rho}_{\mathrm{crit}}$ give $\kappa>0$ and $k=+1$, a closed universe. The handwritten inequality $\kappa>1$ refers to positive curvature, with the normalized $k$ equal to $+1$.

A convenient notation absorbs the curvature term into an effective density.

$$
\energy{\rho}_{\mathrm{curv}}=-\frac{3\kappa}{8\pi G a^2},
\qquad
\Omega_{\mathrm{curv}}=\frac{\energy{\rho}_{\mathrm{curv}}}{\energy{\rho}_{\mathrm{crit}}},
\qquad
\Omega+\Omega_{\mathrm{curv}}=1.
$$

To solve for the evolution, specify an equation of state $\mechanical{P}=\mechanical{P}(\energy{\rho})$. Cosmological models often use $\mechanical{P}=w\energy{\rho}$, a restrictive form that is useful on large scales.

### PDF page 147

Suppose the universe is dominated by a species $i$ with $\mechanical{P}_i=w_i\energy{\rho}_i$. The continuity equation and its solution for constant $w_i$ are

$$
\begin{aligned}
\partial_t(\energy{\rho}_i a^3)&=-\mechanical{P}_i\partial_t(a^3),\\
\frac{\dot{\energy{\rho}}_i}{\energy{\rho}_i}&=-3(1+w_i)\frac{\dot a}{a},\\
\frac{\energy{\rho}_i}{\energy{\rho}_{i0}}&=\left(\frac{a}{a_0}\right)^{-3(1+w_i)}.
\end{aligned}
$$

1. **Matter.** Pressureless matter, or dust, has $w_{\mathrm M}=0$. Matter–matter interactions are negligible on cosmological scales in this model. The number of dust particles in a comoving volume is constant. With $a_0=1$, $\energy{\rho}_{\mathrm M}=\energy{\rho}_{\mathrm{M}0}a^{-3}$.
2. **Radiation.** $\mechanical{P}_{\mathrm R}=\energy{\rho}_{\mathrm R}/3$, so $w_{\mathrm R}=1/3$ and $\energy{\rho}_{\mathrm R}\propto a^{-4}$. The additional inverse power of $a$ comes from the redshift of each quantum.
3. **Cosmological constant.** $\mechanical{P}_\Lambda=-\energy{\rho}_\Lambda$, so $w_\Lambda=-1$ and $\energy{\rho}_\Lambda\propto a^0$.

### PDF page 148

For a spatially flat universe with one species, $\kappa=0$ and $a_0=1$. The Friedmann equation becomes

$$
\left(\frac{\dot a}{a}\right)^2=\frac{8\pi G}{3}\energy{\rho}
=\frac{8\pi G}{3}\energy{\rho}_0 a^{-n},
\qquad n=3(1+w).
$$

For the expanding branch, $\dot a\propto a^{1-n/2}$. Integrating with a suitable time origin gives $a\propto t^{2/n}$ for $n\ne0$.

- Matter domination has $w=0$, $n=3$, and $a\propto t^{2/3}$.
- Radiation domination has $w=1/3$, $n=4$, and $a\propto t^{1/2}$. The handwriting gives $w=4/3$, while the previous page and $n=4$ give $w=1/3$.
- Cosmological-constant domination has $w=-1$ and $n=0$. Then $\energy{\rho}=\energy{\rho}_0=\Lambda/(8\pi G)$ and

$$
\left(\frac{\dot a}{a}\right)^2=\frac{\Lambda}{3},
\qquad
a\propto \exp\!\left(\pm\sqrt{\frac{\Lambda}{3}}\,t\right).
$$

### PDF page 149

#### Lecture 19. Cosmology II

To build a model of the universe, choose a spatial curvature $k\in\{-1,0,+1\}$ and a mixture of species contributing $\energy{\rho}=\sum_i\energy{\rho}_i$. Give each species an equation of state $\mechanical{P}_i=w_i\energy{\rho}_i$. For separately conserved species, $\nabla_\mu T^\mu{}_0=0$ gives

$$
\frac{\dot{\energy{\rho}}_i}{\energy{\rho}_i}=-3(1+w_i)\frac{\dot a}{a},
\qquad
\energy{\rho}_i=\energy{\rho}_{i0}a^{-n_i},
\qquad
n_i=3(1+w_i).
$$

Then ask how varying the species and curvature changes $a(t)$. Comparison with observations requires an observable surrogate for both $a(t)$ and $t$.

#### Aside on Killing tensors

A Killing vector satisfies

$$
\nabla_\alpha\xi_\beta+\nabla_\beta\xi_\alpha=0,
\qquad
\nabla_{(\alpha}\xi_{\beta)}=0.
$$

For a rank-$n$ Killing tensor, the analogous equation symmetrizes over the derivative index and the $n$ tensor indices.

$$
\nabla_{(\alpha}K_{\beta\gamma\ldots\delta)}=0.
$$

The handwritten rank-$n$ line omits the symmetrization parentheses.

### PDF page 150

For a rank-four Killing tensor, contract with four copies of the tangent $u^\alpha$ to a geodesic.

$$
\mathcal K=K_{\alpha\beta\gamma\delta}u^\alpha u^\beta u^\gamma u^\delta.
$$

The geodesic equation $u^\alpha\nabla_\alpha u^\beta=0$ and the Killing-tensor equation imply $u^\alpha\nabla_\alpha\mathcal K=0$. The same argument works for other ranks.

An FRW spacetime admits the rank-two Killing tensor

$$
K_{\mu\nu}=a^2(t)(g_{\mu\nu}+u_\mu u_\nu),
$$

where $u_\mu$ is the four-velocity of the comoving fluid. For a null geodesic with four-momentum $p^\mu$, the conserved contraction is

$$
\begin{aligned}
K_{\mathrm{NG}}&=K_{\mu\nu}p^\mu p^\nu\\
&=a^2(t)\big[g_{\mu\nu}p^\mu p^\nu+(u_\mu p^\mu)(u_\nu p^\nu)\big]
=a^2(t)\energy{E}^2 .
\end{aligned}
$$

The first term vanishes because $p^\mu p_\mu=0$. The energy measured by a comoving observer is $\energy{E}=-u_\mu p^\mu$. Thus $a\energy{E}$ is constant as the radiation crosses the universe.

### PDF page 151

For a photon, $\energy{E}=\hbar\signal{\omega}$. The conserved product $a\energy{E}$ gives

$$
\frac{\signal{\omega}_{\mathrm{obs}}}{\signal{\omega}_{\mathrm{em}}}
=\frac{a_{\mathrm{em}}}{a_0}
=\frac{\signal{\lambda}_{\mathrm{em}}}{\signal{\lambda}_{\mathrm{obs}}},
\qquad a_0=1.
$$

Define the redshift and the scale factor at emission by

$$
z=\frac{\signal{\lambda}_{\mathrm{obs}}-\signal{\lambda}_{\mathrm{em}}}{\signal{\lambda}_{\mathrm{em}}},
\qquad
a_{\mathrm{em}}=\frac1{1+z}.
$$

Measure the source spectrum and identify the pattern of well-characterized atomic transitions. The observed wavelengths are stretched by a common factor $1+z$. Measuring it determines $a_{\mathrm{em}}$.

How can we infer the time of emission? The source distance is a more readily accessible observational proxy. To distinguish the cosmological distance measures, start with the proper distance in

$$
ds^2=-dt^2+a^2(t)R_0^2\big[d\chi^2+S_k^2(\chi)d\Omega^2\big].
$$

For radial separation at fixed $t$, $d\theta=d\phi=dt=0$. The instantaneous physical distance is

$$
\mechanical{D}_{\mathrm p}=a(t)R_0\chi.
$$

### PDF page 152

At fixed comoving separation $\chi$, the apparent recession due to expansion is

$$
\mechanical{V}_{\mathrm{apparent}}=\dot aR_0\chi=H\mechanical{D}_{\mathrm p},
\qquad
H_0=\left.\frac{\dot a}{a}\right|_{t=t_0}.
$$

At the present time this reduces to $\mechanical{V}_{\mathrm{apparent}}=H_0\mechanical{D}_{\mathrm p}$. Instantaneous separation is inaccessible to direct measurement. Three definitions based on measurable quantities generalize the Euclidean relations.

1. Compare intrinsic luminosity $\energy{L}$ with observed flux $\energy{F}$ to define **luminosity distance** $\mechanical{D}_{\mathrm L}$.

$$
\energy{F}=\frac{\energy{L}}{4\pi\mechanical{D}_{\mathrm L}^2}.
$$

2. Compare the physical size $\Delta\mechanical{\ell}$ with the angle $\Delta\theta$ subtended on the sky to define **angular diameter distance** $\mechanical{D}_{\mathrm A}$.

$$
\Delta\theta=\frac{\Delta\mechanical{\ell}}{\mechanical{D}_{\mathrm A}}.
$$

3. Compare the transverse speed $\mechanical{V}_\perp$ with the apparent angular speed $\dot\Theta$ to define **proper motion distance** $\mechanical{D}_{\mathrm M}$.

$$
\dot\Theta=\frac{\mechanical{V}_\perp}{\mechanical{D}_{\mathrm M}}.
$$

### PDF page 153

The notes refer to David Hogg, *Distance Measures in Cosmology*, arXiv:astro-ph/9905116.

The distance measures use the Friedmann equation. Including curvature as an effective component when needed,

$$
\begin{aligned}
H^2&=\left(\frac{\dot a}{a}\right)^2=\frac{8\pi G}{3}\sum_i\energy{\rho}_i,\\
\energy{\rho}_i&=\energy{\rho}_{i0}a^{-n_i}
=\energy{\rho}_{i0}(1+z)^{n_i},\\
H(z)&=H_0E(z),
& E(z)&=\left[\sum_i\Omega_{i0}(1+z)^{n_i}\right]^{1/2}.
\end{aligned}
$$

The final square root is the dimensionless $E(z)$, with $H_0$ required for $H(z)$.

Consider a source subtending $\Delta\phi$ on the sky. Orient the coordinates so that it lies in the $\theta=\pi/2$ plane. Its transverse proper size at emission is

$$
\Delta\mechanical{L}=a(t_{\mathrm{em}})R_0S_k(\chi_{\mathrm{em}})\Delta\phi.
$$

The angular diameter distance is then

$$
\mechanical{D}_{\mathrm A}=\frac{\Delta\mechanical{L}}{\Delta\phi}
=a(t_{\mathrm{em}})R_0S_k(\chi_{\mathrm{em}})
=\frac{R_0S_k(\chi_{\mathrm{em}})}{1+z_{\mathrm{em}}}.
$$

Eliminate the unobservable coordinate $\chi_{\mathrm{em}}$ using the radial null path.

$$
0=-dt^2+a^2(t)R_0^2d\chi^2,
\qquad
\chi_{\mathrm{em}}=\frac1{R_0}\int_{t_{\mathrm{em}}}^{t_{\mathrm{obs}}}\frac{dt}{a(t)}.
$$

### PDF page 154

Change the integration variable from time to scale factor and then to redshift. With $a=(1+z)^{-1}$,

$$
\chi_{\mathrm{em}}=\frac1{R_0}\int_{a_{\mathrm{em}}}^{1}\frac{da}{a\dot a}
=\frac1{R_0}\int_{a_{\mathrm{em}}}^{1}\frac{da}{a^2H(a)}
=\frac1{H_0R_0}\int_0^z\frac{dz'}{E(z')}.
$$

The present curvature density parameter is $\Omega_{\mathrm{curv},0}=-k/(R_0^2H_0^2)$. For $k=\pm1$ this gives $R_0=H_0^{-1}/\sqrt{\lvert\Omega_{\mathrm{curv},0}\rvert}$. The handwritten denominator in the density parameter lacks the squares required by the previous definitions.

With $J(z)=\int_0^z dz'/E(z')$, the angular diameter distance is

$$
\mechanical{D}_{\mathrm A}(z)=\frac{H_0^{-1}}{1+z}
\begin{cases}
\displaystyle\frac{\sin\!\big(\sqrt{\lvert\Omega_{\mathrm{curv},0}\rvert}\,J(z)\big)}
{\sqrt{\lvert\Omega_{\mathrm{curv},0}\rvert}},& k=+1,\\[6pt]
J(z),&k=0,\\[4pt]
\displaystyle\frac{\sinh\!\big(\sqrt{\lvert\Omega_{\mathrm{curv},0}\rvert}\,J(z)\big)}
{\sqrt{\lvert\Omega_{\mathrm{curv},0}\rvert}},&k=-1.
\end{cases}
$$

### PDF page 155

The three observational distance measures are related by

$$
\mechanical{D}_{\mathrm L}=(1+z)\mechanical{D}_{\mathrm M}
=(1+z)^2\mechanical{D}_{\mathrm A}.
$$

Measurements that inform the cosmological model include the following.

1. The characteristic size of hot and cold spots in the cosmic microwave background supplies a standard ruler.
2. Type Ia supernovae, explosions of white dwarfs, serve as standard candles.
3. Nearby standard candles probe the local Hubble law and constrain $H_0$.

#### The flatness problem

Why is the universe apparently spatially flat? The Friedmann equation gives

$$
H^2=\left(\frac{\dot a}{a}\right)^2=\frac{8\pi G}{3}\energy{\rho}-\frac{\kappa}{a^2},
\qquad
\Omega+\Omega_{\mathrm{curv}}=1.
$$

Radiation scales as $\energy{\rho}\propto a^{-4}$, matter as $\energy{\rho}\propto a^{-3}$, and effective curvature density as $\energy{\rho}_{\mathrm{curv}}\propto a^{-2}$. Hence $\Omega_{\mathrm{curv}}/\Omega\propto a$ in the matter era and $\Omega_{\mathrm{curv}}/\Omega\propto a^2$ in the radiation era. In either era a slight initial deviation from flatness grows as the universe expands.

### PDF page 156

#### The horizon problem and cosmic inflation

Why is the cosmic microwave background so uniform? The early universe was a dense, hot plasma that cooled as the universe expanded. In a history with only matter and radiation domination, points on opposite sides of the sky would have been out of causal contact in the early universe. Their near-equal temperatures suggest thermal equilibrium.

**Cosmic inflation** is a proposed solution to the flatness and horizon problems. Recall that with a positive cosmological constant, the expanding solution is $a=\exp(\sqrt{\Lambda/3}\,t)$ and $\energy{\rho}_\Lambda$ is constant. Hence

$$
\frac{\Omega_{\mathrm{curv}}}{\Omega_\Lambda}\propto a^{-2}
\propto \exp\!\left(-2\sqrt{\frac{\Lambda}{3}}\,t\right).
$$

Exponential expansion rapidly drives $\Omega$ close to $1$. It also stretches a region that was originally in causal contact, so that widely separated points can appear causally disconnected today.

A cosmological constant acts like vacuum energy density. To obtain an early phase with similar behavior, introduce a scalar field $\phi$ in a false vacuum. Its evolution and the corresponding Friedmann equation are

$$
\ddot\phi+3H\dot\phi+\frac{dV}{d\phi}=0,
\qquad
H^2=\frac{8\pi G}{3}\left(V(\phi)+\frac{\dot\phi^2}{2}\right).
$$

### PDF page 157

The field $\phi$ rolls down the potential $V(\phi)$ with a drag term proportional to $3H$. In the **slow-roll regime**, the field changes slowly enough that

$$
\dot\phi^2\ll V(\phi),
\qquad
\lvert\ddot\phi\rvert\ll\lvert3H\dot\phi\rvert.
$$

Then $V(\phi)$ behaves like the vacuum energy density $\energy{\rho}_\Lambda$, and the universe adiabatically traces the form of the inflationary potential. How does inflation end?

### PDF page 158

#### Lecture 20. Spherical compact sources I

A compact spherical body occupies a finite spatial region with a vacuum exterior. A static, spherically symmetric metric can be written as

$$
ds^2=-e^{-2\Phi(r)}dt^2+e^{2\Lambda(r)}dr^2+R^2(r)d\Omega^2.
$$

A coordinate transformation can remove a cross term involving $t$ and $r$. One convenient choice of radial coordinate makes $R^2(r)=r^2$. The coordinate $r$ then labels nested spheres of area $4\pi r^2$ and is called the **areal radius**. Proper radial distance follows by integrating the radial part of the line element. In these Schwarzschild coordinates,

$$
ds^2=-e^{-2\Phi(r)}dt^2+e^{2\Lambda(r)}dr^2+r^2d\Omega^2.
$$

An alternative uses isotropic coordinates,

$$
ds^2=-e^{-2\Phi(\bar r)}dt^2+e^{2\mu(\bar r)}(d\bar r^2+\bar r^2d\Omega^2).
$$

The notes give the isotropic weak-field metric as

$$
ds^2=-(1+2\Phi)dt^2+(1-2\Phi)(dx^2+dy^2+dz^2),
\qquad
\mu=-\Phi,\quad \lvert\Phi\rvert\ll1.
$$

The weak-field line uses the sign convention of the Newtonian potential. With the preceding exponent $-2\Phi$, that potential is the negative of the temporal metric function.

### PDF page 159

Use the convention $g_{tt}=-e^{2\Phi}$ on this page, as in the handwritten Ricci components and four-velocity. The nonzero components of the Ricci tensor are

$$
\begin{aligned}
R_{rr}&=-\left[\partial_r^2\Phi+(\partial_r\Phi)^2-(\partial_r\Phi)(\partial_r\Lambda)
-\frac2r\partial_r\Lambda\right],\\
R_{tt}&=e^{2(\Phi-\Lambda)}\left[\partial_r^2\Phi+(\partial_r\Phi)^2
-(\partial_r\Phi)(\partial_r\Lambda)+\frac2r\partial_r\Phi\right],\\
R_{\theta\theta}&=e^{-2\Lambda}\big[r\partial_r\Lambda-r\partial_r\Phi-1\big]+1,\\
R_{\phi\phi}&=\sin^2\theta\,R_{\theta\theta}.
\end{aligned}
$$

The source is a perfect fluid with $T_{\mu\nu}=(\energy{\rho}+\mechanical{P})u_\mu u_\nu+\mechanical{P}g_{\mu\nu}$, $\energy{\rho}=\energy{\rho}(r)$, and $\mechanical{P}=\mechanical{P}(r)$. A static star has $u^\mu=(u^t,0,0,0)$, and $u^\mu u_\mu=-1$ gives $u^t=e^{-\Phi(r)}$ and $u_t=-e^{\Phi(r)}$. Both $\energy{\rho}$ and $\mechanical{P}$ vanish outside the stellar radius $\mechanical{R}_*$.

In the exterior, $G_{\mu\nu}=0$ implies $R_{\mu\nu}=0$. Form the combination

$$
e^{2(\Lambda-\Phi)}R_{tt}+R_{rr}=\frac2r(\partial_r\Phi+\partial_r\Lambda)=0.
$$

Hence $\Phi=-\Lambda+k$, where $k$ here is an integration constant.

### PDF page 160

Rescale time by $e^k$ to absorb the constant $k$, leaving $\Lambda=-\Phi$. The exterior angular equation $R_{\theta\theta}=0$ becomes

$$
\begin{aligned}
0&=e^{-2\Lambda}\big[r\partial_r\Lambda-r\partial_r\Phi-1\big]+1,\\
1&=e^{2\Phi}\big[2r\partial_r\Phi+1\big]=\partial_r(re^{2\Phi}).
\end{aligned}
$$

Integrating gives $\Phi(r)=\tfrac12\ln(1+A/r)$, where $A$ is an integration constant. The metric is

$$
ds^2=-\left(1+\frac{A}{r}\right)dt^2+\left(1+\frac{A}{r}\right)^{-1}dr^2+r^2d\Omega^2.
$$

Consider radial free fall far away, with $r\gg\lvert A\rvert$. The geodesic equation is

$$
\frac{d^2x^\mu}{d\tau^2}+\Gamma^\mu_{\alpha\beta}
\frac{dx^\alpha}{d\tau}\frac{dx^\beta}{d\tau}=0.
$$

For slow radial motion $dt/d\tau\gg\lvert dr/d\tau\rvert$, so the radial component becomes

$$
\frac{d^2r}{d\tau^2}+\Gamma^r_{00}\left(\frac{dt}{d\tau}\right)^2\simeq0,
\qquad
\Gamma^r_{00}=e^{2(\Phi-\Lambda)}\partial_r\Phi.
$$

### PDF page 161

For the exterior metric,

$$
\Gamma^r_{00}=-\frac{A}{2r^2}\left(1+\frac Ar\right)\simeq-\frac{A}{2r^2}.
$$

The resulting $d^2r/dt^2\simeq A/(2r^2)$ must approach the Newtonian result $-G\mechanical{M}/r^2$. Thus $A=-2G\mechanical{M}$ and the **Schwarzschild metric** is

$$
ds^2=-\left(1-\frac{2G\mechanical{M}}{r}\right)dt^2
+\left(1-\frac{2G\mechanical{M}}{r}\right)^{-1}dr^2+r^2d\Omega^2.
$$

The notes mention Schwarzschild working on the solution during World War I.

#### Birkhoff's theorem

The exterior vacuum of any spherically symmetric body is described by the Schwarzschild metric. The body may vary in time while maintaining spherical symmetry, as in radial pulsations.

Start with $ds^2=-e^{2\Phi(r,t)}dt^2+e^{2\Lambda(r,t)}dr^2+r^2d\Omega^2$. The new vacuum Ricci component is

$$
R_{tr}=\frac2r\partial_t\Lambda=0,
$$

so $\Lambda(t,r)=\Lambda(r)$. The angular equation is

$$
R_{\theta\theta}=e^{-2\Lambda}\big[r\partial_r\Lambda-r\partial_r\Phi-1\big]+1=0.
$$

### PDF page 162

Taking $\partial_t R_{\theta\theta}=0$ gives $\partial_t\partial_r\Phi=0$, so $\Phi=\Phi_r(r)+\Phi_t(t)$. Therefore

$$
ds^2=-e^{2\Phi_r(r)}e^{2\Phi_t(t)}dt^2+e^{2\Lambda(r)}dr^2+r^2d\Omega^2.
$$

The change of time coordinate $d\tilde t=e^{\Phi_t(t)}dt$ recovers the static Schwarzschild form. In the static exterior region the timelike Killing vector $\xi^\mu_{(t)}$ gives the conserved energy $\energy{E}=-p_\mu\xi^\mu_{(t)}$.

#### Interior of the star

Inside, $G^\mu{}_\nu=8\pi G T^\mu{}_\nu$, with

$$
T^\mu{}_\nu=\operatorname{diag}[-\energy{\rho}(r),\mechanical{P}(r),\mechanical{P}(r),\mechanical{P}(r)].
$$

The temporal component is

$$
G^t{}_t=-\frac1{r^2}\frac{d}{dr}\left[r(1-e^{-2\Lambda})\right].
$$

Define a mass function $\mechanical{m}(r)$ by $e^{-2\Lambda}=1-2G\mechanical{m}(r)/r$ so the interior metric can be matched to the exterior at the surface. Then

$$
G^t{}_t=8\pi G T^t{}_t
\quad\Longrightarrow\quad
-\frac{2G}{r^2}\frac{d\mechanical{m}}{dr}=-8\pi G\energy{\rho}(r).
$$

### PDF page 163

Integrate with the regular stellar boundary condition $\mechanical{m}(0)=0$.

$$
\mechanical{m}(r)=4\pi\int_0^r\energy{\rho}(r')(r')^2\,dr'.
$$

The notes contrast this condition with a black-hole solution. The spherical Euclidean shell volume is $4\pi r^2dr$. The proper shell volume carries an additional factor $e^{\Lambda(r)}$. The notes call the corresponding proper-volume integral the baryonic mass.

$$
\mechanical{m}_{\mathrm B}(r)=\int_0^r\energy{\rho}(r')\,dV^{(3)}
=4\pi\int_0^r\energy{\rho}(r')(r')^2e^{\Lambda(r')}\,dr'
>\mechanical{m}(r).
$$

In this comparison the baryonic mass counts baryons, the gravitational mass $\mechanical{m}(r)$ determines the gravitational field, and the difference is associated with gravitational binding energy. Strictly, a baryonic mass integral uses the rest-mass density of the baryons. The handwritten comparison uses the same density symbol in both integrals.

The radial Einstein equation is

$$
\begin{aligned}
G^r{}_r
&=e^{-2\Lambda}\left[\frac2r\frac{d\Phi}{dr}+\frac1{r^2}\right]-\frac1{r^2}\\
&=\left(1-\frac{2G\mechanical{m}(r)}r\right)\left[\frac2r\frac{d\Phi}{dr}+\frac1{r^2}\right]-\frac1{r^2}
=8\pi G\mechanical{P}.
\end{aligned}
$$

Solve for the temporal metric function.

$$
\frac{d\Phi}{dr}
=\frac{G[\mechanical{m}(r)+4\pi r^3\mechanical{P}(r)]}{r[r-2G\mechanical{m}(r)]}.
$$

Pressure contributes to the energy budget through work on the fluid. The denominator contains the correction for non-Euclidean geometry. An earlier problem set used $\nabla_\mu T^{\mu\nu}=0$ for a perfect fluid in hydrostatic equilibrium.

### PDF page 164

For a perfect fluid, the momentum equation is

$$
(\energy{\rho}+\mechanical{P})u^\beta\nabla_\beta u_\alpha
=-\partial_\alpha\mechanical{P}-u_\alpha u^\beta\partial_\beta\mechanical{P}.
$$

With $u^\alpha=(e^{-\Phi},0,0,0)$ and $\Phi=\Phi(r)$, its radial component gives

$$
(\energy{\rho}+\mechanical{P})\Gamma^t_{rt}=-\frac{d\mechanical{P}}{dr},
\qquad
\Gamma^t_{rt}=\frac{d\Phi}{dr}.
$$

Combining this with the Einstein equations gives the **Tolman–Oppenheimer–Volkoff equations** (TOV).

$$
\begin{aligned}
\frac{d\mechanical{P}}{dr}&=
-\frac{G(\energy{\rho}+\mechanical{P})(\mechanical{m}+4\pi r^3\mechanical{P})}{r(r-2G\mechanical{m})},\\
\frac{d\Phi}{dr}&=\frac{G(\mechanical{m}+4\pi r^3\mechanical{P})}{r(r-2G\mechanical{m})},\\
\mechanical{m}(r)&=\int_0^r 4\pi\energy{\rho}(r')(r')^2\,dr'.
\end{aligned}
$$

### PDF page 165

#### Lecture 21. Spherical compact sources II

The total mass is $\mechanical{M}=\mechanical{m}(\mechanical{R}_*)$. To solve the stellar structure equations, choose a central density $\energy{\rho}_{\mathrm c}$ and an equation of state $\mechanical{P}=\mechanical{P}(\energy{\rho})$. Integrate outward until $\mechanical{P}=0$. That radius defines the stellar surface.

In the idealized constant-density limit the speed of sound satisfies $\mechanical{c}_{\mathrm s}^2=d\mechanical{P}/d\energy{\rho}\to\infty$ in units with $c=1$. The mass function and total mass are

$$
\mechanical{m}(r)=\frac43\pi\energy{\rho}r^3\quad(r\le\mechanical{R}_*),
\qquad
\mechanical{M}=\frac43\pi\energy{\rho}\mechanical{R}_*^3.
$$

The pressure profile satisfies

$$
\frac{d\mechanical{P}}{dr}=-\frac43\pi G r
\frac{(\energy{\rho}+\mechanical{P})(\energy{\rho}+3\mechanical{P})}{1-8\pi G\energy{\rho}r^2/3}.
$$

With $\mechanical{P}_{\mathrm c}=\mechanical{P}(0)$, its solution obeys

$$
\frac{\energy{\rho}+3\mechanical{P}}{\energy{\rho}+\mechanical{P}}
=\frac{\energy{\rho}+3\mechanical{P}_{\mathrm c}}{\energy{\rho}+\mechanical{P}_{\mathrm c}}
\sqrt{1-\frac{2G\mechanical{m}(r)}r}.
$$

The surface condition $\mechanical{P}(\mechanical{R}_*)=0$ gives

$$
\begin{aligned}
\mechanical{R}_*^2&=\frac{3}{8\pi G\energy{\rho}}
\left[1-\frac{(\energy{\rho}+\mechanical{P}_{\mathrm c})^2}{(\energy{\rho}+3\mechanical{P}_{\mathrm c})^2}\right],\\
\mechanical{P}_{\mathrm c}&=
\energy{\rho}\,\frac{1-\sqrt{1-2G\mechanical{M}/\mechanical{R}_*}}
{3\sqrt{1-2G\mechanical{M}/\mechanical{R}_*}-1}.
\end{aligned}
$$

### PDF page 166

The total mass is $\mechanical{M}_{\mathrm{tot}}=(4\pi/3)\energy{\rho}\mechanical{R}_*^3$. The central pressure diverges when the denominator in the preceding expression vanishes.

$$
\begin{aligned}
3\sqrt{1-\frac{2G\mechanical{M}_{\mathrm{tot}}}{\mechanical{R}_*}}-1&=0,\\
\sqrt{1-\frac{2G\mechanical{M}_{\mathrm{tot}}}{\mechanical{R}_*}}&=\frac13,\\
1-\frac{2G\mechanical{M}_{\mathrm{tot}}}{\mechanical{R}_*}&=\frac19,\\
\frac{2G\mechanical{M}_{\mathrm{tot}}}{\mechanical{R}_*}&=\frac89,\\
\frac{G\mechanical{M}_{\mathrm{tot}}}{\mechanical{R}_*}&=\frac49.
\end{aligned}
$$

A constant-density star with finite central pressure must have compactness below this value.

### PDF page 167

#### Buchdahl's theorem

The constant-density result gives the limiting ratio $\mechanical{R}_*/(G\mechanical{M}_{\mathrm{tot}})=9/4$ in units with $c=1$. Buchdahl's theorem bounds the radius of a static, spherically symmetric perfect-fluid star with isotropic pressure and outwardly nonincreasing density. Restoring $c$, the limiting radius is

$$
\mechanical{R}_*=\frac{9G\mechanical{M}_{\mathrm{tot}}}{4c^2}.
$$

The notes refer to Weinberg, section 11.6, for the proof.

Realistic equations of state relate pressure to density, and more generally to density and entropy, $\mechanical{P}=\mechanical{P}(\energy{\rho},\thermal{S})$. The first law reads

$$
d\thermal{U}=-\mechanical{P}\,d\mechanical{V}+\thermal{T}\,d\thermal{S}.
$$

Whether a fluid is cold depends on its temperature relative to its Fermi temperature $\thermal{T}_{\mathrm F}=\energy{E}_{\mathrm F}/k_{\mathrm B}$. The notes give $\thermal{T}_{\mathrm F}\simeq\quantity{10^{13}}{K}$ for neutron stars and observed temperatures of $\quantity{10^6}{K}$ to $\quantity{10^9}{K}$. Even a billion kelvin is cold on that scale.

A test equation of state takes the pressure to be a power law of the rest-mass density, $\mechanical{P}=K\mechanical{\rho}_0^\Gamma$, with constants $K$ and $\Gamma$. This is a **polytrope**.

### PDF page 168

The density $\mechanical{\rho}_0$ is the rest-mass density. Compression work contributes to the total energy density $\energy{\rho}$. For an adiabatic change, $d\thermal{U}=-\mechanical{P}\,d\mechanical{V}$. With $c=1$,

$$
\energy{\rho}=\frac{\thermal{U}}{\mechanical{V}},
\qquad
\mechanical{\rho}_0=\frac{\mechanical{m}_{\mathrm{rest}}}{\mechanical{V}}.
$$

At fixed $\mechanical{m}_{\mathrm{rest}}$, the changes are $d\thermal{U}=\mechanical{m}_{\mathrm{rest}}d(\energy{\rho}/\mechanical{\rho}_0)$ and $d\mechanical{V}=\mechanical{m}_{\mathrm{rest}}d(1/\mechanical{\rho}_0)$. The first law gives

$$
d\!\left(\frac{\energy{\rho}}{\mechanical{\rho}_0}\right)
=-\mechanical{P}\,d\!\left(\frac1{\mechanical{\rho}_0}\right).
$$

For the polytrope, $\mechanical{\rho}_0=(\mechanical{P}/K)^{1/\Gamma}$, so

$$
d\!\left(\frac{\energy{\rho}}{\mechanical{\rho}_0}\right)
=\frac{K^{1/\Gamma}}{\Gamma}\frac{\mechanical{P}\,d\mechanical{P}}{\mechanical{P}^{1+1/\Gamma}}.
$$

Integrating gives $\energy{\rho}=\mechanical{P}/(\Gamma-1)+C\mechanical{\rho}_0$. The integration constant is fixed by $\energy{\rho}/\mechanical{\rho}_0\to1$ at low pressure for $\Gamma>1$. Thus

$$
\energy{\rho}=\mechanical{\rho}_0+\frac{\mechanical{P}}{\Gamma-1}.
$$

### PDF page 169

To solve the stellar structure equations numerically,

1. Choose the central rest-mass density $\mechanical{\rho}_0(0)$. The equation of state gives the central energy density and pressure.
2. Set $\mechanical{m}(0)=0$.
3. Integrate the pressure and mass functions outward from the center. Also integrate $d\Phi/dr$, allowing for an additive constant because $\Phi(0)$ is initially unknown.
4. The first zero of $\mechanical{P}(r)$ defines $\mechanical{R}_*$. The enclosed mass there is $\mechanical{M}_{\mathrm{tot}}$.

Match to the Schwarzschild exterior at the surface. Birkhoff's theorem gives

$$
\Phi(\mechanical{R}_*)=\frac12\ln\!\left(1-\frac{2G\mechanical{M}_{\mathrm{tot}}}{\mechanical{R}_*}\right).
$$

This fixes the integration constant for $\Phi$. The handwritten boundary condition also labels this value $g_{tt}$, which is related by $g_{tt}=-e^{2\Phi}$.

Now consider the Schwarzschild spacetime itself,

$$
ds^2=-\left(1-\frac{2G\mechanical{M}}r\right)dt^2
+\frac{dr^2}{1-2G\mechanical{M}/r}+r^2d\Omega^2.
$$

It is a vacuum solution with $G_{\mu\nu}=T_{\mu\nu}=0$ in the vacuum region. Radial geodesics in the weak field nevertheless describe infall toward a mass $\mechanical{M}$. The notes pose the puzzle of a vacuum spacetime with a mass parameter.

### PDF page 170

Compare the electric field of a point charge at the origin. In Gaussian units,

$$
\electric{\mathbf E}=\electric{q}\frac{\mathbf x}{r^3},
\qquad
\nabla\cdot\electric{\mathbf E}=4\pi\electric{\rho}=0\quad(r>0).
$$

The total charge is $\electric{q}$ even though the density away from the origin is zero. The charge is singular at $r=0$. The Schwarzschild metric plays a similar role for gravity.

Two radii stand out in the Schwarzschild coordinates, $r=0$ and $r=2G\mechanical{M}$. Construct the invariant scalar

$$
I=R_{\alpha\beta\gamma\delta}R^{\alpha\beta\gamma\delta}
=\frac{48G^2\mechanical{M}^2}{r^6}.
$$

The quantity $\sqrt I$ gives an invariant measure of the scale of tidal effects. $I$ stays finite at $r=2G\mechanical{M}$ and diverges at $r=0$. What is the significance of $r=2G\mechanical{M}$?

### PDF page 171

Consider a circle at fixed $r$ in the $\theta=\pi/2$ plane. As Schwarzschild time runs from $t_{\mathrm{start}}$ to $t_{\mathrm{end}}$, the circle traces a tube.

![[Kyle Kabasares - General Relativity - Equatorial world tube.png|**Fig. 34** A circle of fixed radius traces a tube in the coordinates $(t,r\cos\phi,r\sin\phi)$.]]

The tube area from the induced metric is

$$
\begin{aligned}
\mechanical{A}_{\mathrm{tube}}
&=\int_{t_{\mathrm{start}}}^{t_{\mathrm{end}}}dt\int_0^{2\pi}d\phi\,\sqrt{\lvert g_{tt}g_{\phi\phi}\rvert}\\
&=2\pi r\sqrt{1-\frac{2G\mechanical{M}}r}\,\Delta t
\longrightarrow 0 \quad \text{as }r\longrightarrow 2G\mechanical{M}.
\end{aligned}
$$

The time coordinate is poorly behaved near $r=2G\mechanical{M}$.

The angular coordinates on a sphere illustrate a related problem with representing geometry. At either pole, $\theta=0$ or $\theta=\pi$, all azimuths $\phi$ label the same point.

![[Kyle Kabasares - General Relativity - Angular chart on a sphere.png|**Fig. 35** The rectangular $(\phi,\theta)$ chart represents each pole by an entire horizontal edge.]]

### PDF page 172

The notes compare the degeneracy of Schwarzschild time at $r=2G\mechanical{M}$ to the collapse of one coordinate in the spherical chart.

Consider a particle falling radially from $r_0$. Integrating the geodesic gives one description in coordinate time $t$ and another in the proper time $\tau$ along the worldline. The formulas on this page describe the infall branch with unit energy per unit rest mass.

$$
\frac{\tau}{2G\mechanical{M}}=\frac23\left[
\left(\frac{r_0}{2G\mechanical{M}}\right)^{3/2}
-\left(\frac{r}{2G\mechanical{M}}\right)^{3/2}\right].
$$

![[Kyle Kabasares - General Relativity - Coordinate and proper time in radial infall.png|**Fig. 36** The radius reaches zero in finite proper time, while in Schwarzschild time it asymptotically approaches the horizon radius.]]

For the coordinate-time integral, write

$$
f(r)=\ln\!\left(\frac{\sqrt{r/(2G\mechanical{M})}+1}{\sqrt{r/(2G\mechanical{M})}-1}\right)
-2\sqrt{\frac r{2G\mechanical{M}}}\left(1+\frac r{6G\mechanical{M}}\right).
$$

Then $t/(2G\mechanical{M})=f(r)-f(r_0)$. The infalling observer measures finite proper time to $r=0$. Schwarzschild coordinate time grows without bound as the observer approaches $r=2G\mechanical{M}$ from outside.

### PDF page 173

What does Schwarzschild coordinate time $t$ represent? The metric is

$$
ds^2=-\left(1-\frac{2G\mechanical{M}}r\right)dt^2
+\frac{dr^2}{1-2G\mechanical{M}/r}+r^2d\Omega^2.
$$

When $r\gg 2G\mechanical{M}$ it approaches the flat spacetime metric in spherical coordinates.

$$
ds^2\simeq-dt^2+dr^2+r^2d\Omega^2.
$$

Thus $t$ is normalized to the proper time measured by distant observers at rest relative to the source.

### PDF page 174

#### Lecture 22. Black holes

Imagine an infalling body emitting a radio pulse. Far from the source, at $r\gg2G\mechanical{M}$, the covariant momentum of an outgoing radial photon is $p_\alpha^{\mathrm{radio}}\simeq\hbar\signal{\omega}(-1,1,0,0)$, with $\signal{\omega}$ measured there. The energy measured by an observer of four-velocity $u^\alpha$ is $\energy{E}_u=-p_\alpha u^\alpha$. In this time-independent spacetime $p_t=p_0$ is conserved.

For a static observer, $u^\alpha=(u^t,0,0,0)$ and $g_{\alpha\beta}u^\alpha u^\beta=-1$, giving

$$
u^t(r)=\left(1-\frac{2G\mechanical{M}}r\right)^{-1/2}.
$$

Compare the pulse energies measured by static observers at emission radius $r$ and reception radius $R$. They are $\energy{E}_{\mathrm{emit}}=-p_tu^t(r)$ and $\energy{E}_{\mathrm{obs}}=-p_tu^t(R)$. Thus

$$
\frac{\energy{E}_{\mathrm{obs}}(R)}{\energy{E}_{\mathrm{emit}}(r)}
=\sqrt{\frac{1-2G\mechanical{M}/r}{1-2G\mechanical{M}/R}}.
$$

Taking $R\to\infty$ yields $\energy{E}_\infty/\energy{E}_{\mathrm{emit}}=\sqrt{1-2G\mechanical{M}/r}$, which goes to zero as $r\to2G\mechanical{M}$ from outside.

### PDF page 175

For fixed locally emitted energy, the received energy tends to zero as the emission radius approaches $2G\mechanical{M}$. The static redshift factor similarly stretches an emission interval $\Delta\mechanical{T}$ to

$$
\Delta\mechanical{T}_\infty=\Delta\mechanical{T}\left(1-\frac{2G\mechanical{M}}r\right)^{-1/2}
\longrightarrow\infty\quad(r\to2G\mechanical{M}).
$$

The preceding formula follows from static observers on page 174. The handwritten text calls the beacon freely falling, in which case its motion also contributes a Doppler shift. The surface $r=2G\mechanical{M}$ corresponds to infinite redshift in this limit, and the Schwarzschild time coordinate breaks down there.

For radial null geodesics,

$$
0=-\left(1-\frac{2G\mechanical{M}}r\right)dt^2+\left(1-\frac{2G\mechanical{M}}r\right)^{-1}dr^2,
\qquad
\frac{dt}{dr}=\pm\left(1-\frac{2G\mechanical{M}}r\right)^{-1}.
$$

In the exterior the positive sign gives outward propagation and the negative sign gives inward propagation. These slopes define the radial light cone. Far from the source $dt/dr\to\pm1$. As $r\to2G\mechanical{M}$, $dr/dt\to0$ and the reciprocal slope $dt/dr$ diverges. The handwritten last line uses $dt/dr$ for the slope that goes to zero.

### PDF page 176

![[Kyle Kabasares - General Relativity - Schwarzschild radial light cones.png|**Fig. 37** Radial light cones narrow in Schwarzschild $(r,t)$ coordinates as $r$ approaches $2G\mechanical{M}$. Far away they approach their flat-spacetime form.]]

Define the **tortoise coordinate** in the exterior,

$$
r_*=r+2G\mechanical{M}\ln\!\left(\frac r{2G\mechanical{M}}-1\right).
$$

Radial null rays satisfy $dt=\pm dr_*$, and $r_*\to-\infty$ as $r\to2G\mechanical{M}$ from outside. Define $v=t+r_*$, constant on ingoing rays, and $u=t-r_*$, constant on outgoing rays.

Use $v$ in place of $t$. Substituting $dt=dv-dr_*$ into the metric gives

$$
ds^2=-\left(1-\frac{2G\mechanical{M}}r\right)dv^2+2\,dv\,dr+r^2d\Omega^2.
$$

The handwritten cross term lacks the factor of two from expanding $dt^2$. Ingoing radial null curves satisfy $dv/dr=0$.

### PDF page 177

For outgoing radial null rays in the ingoing coordinates,

$$
\frac{dv}{dr}=2\left(1-\frac{2G\mechanical{M}}r\right)^{-1}.
$$

![[Kyle Kabasares - General Relativity - Ingoing-coordinate light cones.png|**Fig. 38** The future light cones tip inward in the $(r,v)$ diagram. On the horizon the outgoing null direction lies along $r=2G\mechanical{M}$.]]

Timelike trajectories lie inside the light cone. At $r=2G\mechanical{M}$ every future-directed timelike trajectory moves to smaller $r$. Inside, both future radial null directions lead toward smaller radius as well. An object that crosses the horizon inward cannot return to the exterior.

The surface of infinite static redshift is the **event horizon** of this Schwarzschild black hole. Events there cannot causally influence events in the exterior $r>2G\mechanical{M}$. The outgoing null generators can remain on the horizon itself.

### PDF page 178

#### Kruskal coordinates

Exponentiate the null coordinates and form their half-sum and half-difference.

$$
v'=\exp\!\left(\frac{v}{4G\mechanical{M}}\right),
\qquad
u'=-\exp\!\left(-\frac{u}{4G\mechanical{M}}\right),
\qquad
T=\frac{v'+u'}2,
\qquad
R=\frac{v'-u'}2 .
$$

These definitions apply in the right exterior. The signs and factors of four agree with the explicit coordinate formulas below. The two handwritten exponentiation lines omit these factors and the signs in the formula for $u'$.

For $r>2G\mechanical{M}$,

$$
\begin{aligned}
T&=\pm \sqrt{\frac r{2G\mechanical{M}}-1}\,e^{r/(4G\mechanical{M})}
\sinh\!\left(\frac t{4G\mechanical{M}}\right),\\
R&=\pm \sqrt{\frac r{2G\mechanical{M}}-1}\,e^{r/(4G\mechanical{M})}
\cosh\!\left(\frac t{4G\mechanical{M}}\right).
\end{aligned}
$$

For $r<2G\mechanical{M}$,

$$
\begin{aligned}
T&=\pm \sqrt{1-\frac r{2G\mechanical{M}}}\,e^{r/(4G\mechanical{M})}
\cosh\!\left(\frac t{4G\mechanical{M}}\right),\\
R&=\pm \sqrt{1-\frac r{2G\mechanical{M}}}\,e^{r/(4G\mechanical{M})}
\sinh\!\left(\frac t{4G\mechanical{M}}\right).
\end{aligned}
$$

The signs select the different coordinate regions, and in both cases

$$
T^2-R^2=\left(1-\frac r{2G\mechanical{M}}\right)e^{r/(2G\mechanical{M})}.
$$

### PDF page 179

The relation between the Kruskal–Szekeres coordinates $(T,R,\theta,\phi)$ and Schwarzschild time is

$$
\frac TR=\begin{cases}
\tanh(t/(4G\mechanical{M})),&r>2G\mechanical{M},\\
\coth(t/(4G\mechanical{M})),&r<2G\mechanical{M},
\end{cases}
$$

where the ratio is understood where defined. The metric is

$$
ds^2=\frac{32G^3\mechanical{M}^3}{r}e^{-r/(2G\mechanical{M})}
(-dT^2+dR^2)+r^2d\Omega^2.
$$

Radial null geodesics satisfy $dT=\pm dR$. This makes the causal structure visible. A surface of constant $r$ satisfies $T^2-R^2=(1-r/(2G\mechanical{M}))e^{r/(2G\mechanical{M})}$ and traces a hyperbola away from the horizon. A surface of constant $t$ traces a line through the origin, with exterior slope $\tanh(t/(4G\mechanical{M}))$. The horizons $r=2G\mechanical{M}$ are the lines $T=\pm R$, which can be approached as $t\to\pm\infty$ from the exterior.

![[Kyle Kabasares - General Relativity - Kruskal horizons and radial light.png|**Fig. 39** Constant-radius hyperbolae, the tidal singularity, an event horizon, and outgoing radial light pulses in the Kruskal diagram.]]

### PDF page 180

Signals from the black-hole interior $r<2G\mechanical{M}$ cannot reach the exterior $r>2G\mechanical{M}$. The Schwarzschild black-hole metric is

$$
ds^2=-\left(1-\frac{2G\mechanical{M}}r\right)dt^2
+\frac{dr^2}{1-2G\mechanical{M}/r}+r^2d\Omega^2.
$$

The singularity of these coordinates at $r=2G\mechanical{M}$ is a coordinate singularity.

#### Reissner–Nordström solution

The Reissner–Nordström solution describes a charged black hole with a Coulomb electric field. In geometric units $G=c=1$, with $\mechanical{M}$ and $\electric{Q}$ expressed as lengths,

$$
\begin{aligned}
ds^2&=-f(r)\,dt^2+f(r)^{-1}dr^2+r^2d\Omega^2,\\
f(r)&=1-\frac{2\mechanical{M}}r+\frac{\electric{Q}^2}{r^2},\\
T^\mu{}_\nu&=\frac{\electric{Q}^2}{8\pi r^4}\operatorname{diag}(-1,-1,1,1).
\end{aligned}
$$

The final stress component uses the same denominator as the other angular component by spherical symmetry. The source alternates between geometric and explicit-$G$ notation for $\mechanical{M}$ and $\electric{Q}$. In the geometric units above the outer root is

$$
r_{\mathrm{hor}}=\mechanical{M}+\sqrt{\mechanical{M}^2-\electric{Q}^2}.
$$

The horizon is where a constant-radius surface becomes null, so the squared norm of its normal $dr$ is $g^{rr}=0$.

### PDF page 181

#### Kerr and Kerr–Newman solutions

The Kerr metric in Boyer–Lindquist coordinates is

$$
\begin{aligned}
ds^2={}&-\left(1-\frac{2G\mechanical{M}r}{\rho^2}\right)dt^2
+\frac{\rho^2}{\Delta}\,dr^2+\rho^2d\theta^2\\
&+\frac{\sin^2\theta}{\rho^2}\left[(r^2+a^2)^2-a^2\Delta\sin^2\theta\right]d\phi^2
-\frac{4G\mechanical{M}ar\sin^2\theta}{\rho^2}\,dt\,d\phi,\\
\Delta={}&r^2-2G\mechanical{M}r+a^2,\qquad
\rho^2=r^2+a^2\cos^2\theta .
\end{aligned}
$$

The handwritten angular term omits the division by $\rho^2$ and the square on $d\phi$. The outer horizon lies at $\Delta=0$,

$$
r_{\mathrm H}=G\mechanical{M}+\sqrt{G^2\mechanical{M}^2-a^2}.
$$

The spin parameter is $a=\lVert\mechanical{\mathbf S}\rVert/\mechanical{M}$ with $c=1$, where $\mechanical{\mathbf S}$ is the spin angular momentum. A horizon requires $\lvert a\rvert\le G\mechanical{M}$.

Kerr has axial symmetry and generally $g_{\phi\phi}\ne\sin^2\theta\,g_{\theta\theta}$. The time and azimuthal coordinates are coupled by $g_{t\phi}=-2G\mechanical{M}ar\sin^2\theta/\rho^2$.

The charged, rotating solution is Kerr–Newman. The notes state the black-hole uniqueness result in terms of mass, spin, and charge. Under the stationary, asymptotically flat electrovacuum uniqueness assumptions in $3+1$ dimensions, the black holes are Kerr–Newman. Here stationary means time independent.

### PDF page 182

#### Price's theorem and the no-hair result

The diagram shows a distorted source with mass, charge, spin, and magnetic fields radiating and settling to a black hole characterized by $\mechanical{M}$, $a$, and $\electric{Q}$. The notes summarize Price's theorem as “Everything that can be radiated is radiated.”

![[Kyle Kabasares - General Relativity - Radiative settling to a black hole.png|**Fig. 40** Radiation carries away the changing structure as the system settles to a stationary black hole described by mass, spin, and charge.]]

### PDF page 183

#### Lecture 23. Black holes II

To study motion in a black-hole spacetime, one could compute all connection coefficients and solve the geodesic equation directly. The symmetries and their Killing vectors simplify the problem. Begin with the Schwarzschild metric,

$$
ds^2=-\left(1-\frac{2G\mechanical{M}}r\right)dt^2
+\frac{dr^2}{1-2G\mechanical{M}/r}+r^2d\Omega^2.
$$

Spherical symmetry preserves the orientation of the orbital plane. Rotate the coordinates to put the orbit in the equatorial plane $\theta=\pi/2$. The time and azimuthal symmetries give

$$
\begin{aligned}
\partial_t g_{\mu\nu}=0&\quad\Longrightarrow\quad p_t=-\energy{E}=\text{constant},\\
\partial_\phi g_{\mu\nu}=0&\quad\Longrightarrow\quad p_\phi=\mechanical{L}_z=\text{constant}.
\end{aligned}
$$

Here $\energy{E}$ is the orbital energy. The four-momentum of a body of mass $\mechanical{m}$ in the equatorial plane is

$$
p^\mu=\mechanical{m}\left(\frac{dt}{d\tau},\frac{dr}{d\tau},0,\frac{d\phi}{d\tau}\right).
$$

### PDF page 184

Lower the momentum index with $p_\mu=g_{\mu\nu}p^\nu$. Writing $f=1-2G\mechanical{M}/r$, the conserved components are

$$
p_t=-\mechanical{m}f\frac{dt}{d\tau}=-\energy{E},
\qquad
p_\phi=g_{\phi\phi}p^\phi=\mechanical{m}r^2\sin^2\theta\frac{d\phi}{d\tau}=\mechanical{L}_z.
$$

The factor $\sin^2\theta$ equals $1$ on the equatorial plane. With $\hat E=\energy{E}/\mechanical{m}$ and $\hat L_z=\mechanical{L}_z/\mechanical{m}$,

$$
\frac{dt}{d\tau}=\frac{\hat E}{f},
\qquad
\frac{d\phi}{d\tau}=\frac{\hat L_z}{r^2}.
$$

The normalization $g_{\mu\nu}p^\mu p^\nu=-\mechanical{m}^2$ gives

$$
-\mechanical{m}^2 f\left(\frac{dt}{d\tau}\right)^2
+\mechanical{m}^2 f^{-1}\left(\frac{dr}{d\tau}\right)^2
+\mechanical{m}^2r^2\left(\frac{d\phi}{d\tau}\right)^2
=-\mechanical{m}^2.
$$

Substituting the conserved quantities and multiplying by $f/\mechanical{m}^2$ yields

$$
-\hat E^2+\left(\frac{dr}{d\tau}\right)^2+\frac{f\hat L_z^2}{r^2}=-f.
$$

Thus the radial equation has an effective potential,

$$
\left(\frac{dr}{d\tau}\right)^2=\hat E^2-\left(1-\frac{2G\mechanical{M}}r\right)
\left(1+\frac{\hat L_z^2}{r^2}\right)=\hat E^2-V_{\mathrm{eff}}(\hat L_z,r).
$$

Choose $\hat E$, $\hat L_z$, and the initial $(r,\phi)$ at $t=\tau=0$. Integrate $dr/d\tau$, $d\phi/d\tau$, and $dt/d\tau$ with the appropriate initial radial direction.

### PDF page 185

The effective potential controls the possible radial motions.

![[Kyle Kabasares - General Relativity - Timelike effective potential.png|**Fig. 41** The example effective potential has a local maximum and minimum and tends to $1$ at large radius.]]

The squared specific energy $\hat E^2$ has the same units as $V_{\mathrm{eff}}$, so compare them on the same plot.

![[Kyle Kabasares - General Relativity - Timelike orbital turning points.png|**Fig. 42** The higher energy intersects the outer side of the barrier at $r_1$. At the lower energy, an eccentric orbit oscillates in radius between $r_{\mathrm p}$ and $r_{\mathrm a}$.]]

The radial equation

$$
\left(\frac{dr}{d\tau}\right)^2=\hat E^2-V_{\mathrm{eff}}
$$

requires $\hat E^2\ge V_{\mathrm{eff}}$ for real radial motion. The case $\hat E_1>1$ in the sketch describes a body arriving from large radius and turning around where it reaches the barrier.

### PDF page 186

At the turning point $\hat E_1=\sqrt{V_{\mathrm{eff}}}$. The body then returns to large radius.

![[Kyle Kabasares - General Relativity - Stable and unstable circular orbits.png|**Fig. 43** The maximum of the effective potential gives an unstable circular orbit, labeled $u$. The minimum gives a stable circular orbit, labeled $s$.]]

A circular orbit has $dr/d\tau=0$, so $\hat E=\sqrt{V_{\mathrm{eff}}}$. It also requires $\partial V_{\mathrm{eff}}/\partial r=0$. Evaluating the latter gives

$$
2\hat L_z^2(r-3G\mechanical{M})=2G\mechanical{M}r^2,
\qquad
\hat L_z=\pm\sqrt{\frac{G\mechanical{M}r}{1-3G\mechanical{M}/r}}.
$$

At large radius this approaches $\pm\sqrt{G\mechanical{M}r}$. Substitution into the potential gives the circular-orbit specific energy,

$$
\hat E=\frac{1-2G\mechanical{M}/r}{\sqrt{1-3G\mechanical{M}/r}}.
$$

The denominator applies to the entire numerator in the last expression.

### PDF page 187

For a bound orbit, $\hat E<1$. In the Newtonian limit the energy per unit mass is approximately

$$
\hat E=\frac{\energy{E}}{\mechanical{m}}\simeq
\frac{\mechanical{m}+\energy{E}_{\mathrm{kinetic}}+\energy{E}_{\mathrm{potential}}}{\mechanical{m}}.
$$

For a circular orbit at large radius, expanding the full expression on page 186 gives $\hat E\simeq1-G\mechanical{M}/(2r)$. The handwritten next line keeps only the numerator $1-2G\mechanical{M}/r$.

The angular velocity measured using distant-observer time is

$$
\begin{aligned}
\mechanical{\Omega}
&=\frac{d\phi}{dt}
=\frac{d\phi/d\tau}{dt/d\tau}
=\frac{\hat L_z/r^2}{\hat E/(1-2G\mechanical{M}/r)}\\
&=\pm\frac{\sqrt{G\mechanical{M}r}}{r^2}
=\pm\sqrt{\frac{G\mechanical{M}}{r^3}}.
\end{aligned}
$$

This is the same radius dependence as Kepler's law. A circular orbit is radially stable if $\partial^2V_{\mathrm{eff}}/\partial r^2>0$ and unstable if it is negative.

### PDF page 188

A marginally stable circular orbit occurs where $\partial^2 V_{\mathrm{eff}}/\partial r^2=0$. At fixed $\hat L_z$ and then evaluated at the circular-orbit value of $\hat L_z$,

$$
\frac{\partial^2 V_{\mathrm{eff}}}{\partial r^2}
=\frac{6\hat L_z^2(r-4G\mechanical{M})-4G\mechanical{M}r^2}{r^5}
=\frac{2G\mechanical{M}(r-6G\mechanical{M})}{r^3(r-3G\mechanical{M})}.
$$

The marginally stable radius is $r_{\mathrm{ms}}=6G\mechanical{M}$. Stable circular timelike orbits exist only outside it.

#### Photon orbits

Parametrize a null geodesic by an affine parameter $\lambda$, with $p^\mu=dx^\mu/d\lambda$ and $p_\mu p^\mu=0$. In the equatorial plane this condition gives

$$
0=-f\left(\frac{dt}{d\lambda}\right)^2+f^{-1}\left(\frac{dr}{d\lambda}\right)^2
+r^2\left(\frac{d\phi}{d\lambda}\right)^2,
\qquad f=1-\frac{2G\mechanical{M}}r.
$$

The radial metric factor is $f^{-1}$, as in the original line element. The constants are $\energy{E}=-p_t=f\,dt/d\lambda$ and $\mechanical{L}=p_\phi=r^2d\phi/d\lambda$. Then

$$
\left(\frac{dr}{d\lambda}\right)^2
=\energy{E}^2-\frac{\mechanical{L}^2}{r^2}\left(1-\frac{2G\mechanical{M}}r\right).
$$

### PDF page 189

Rescale the affine parameter by $\lambda_{\mathrm{new}}=\mechanical{L}\lambda_{\mathrm{old}}$ for nonzero angular momentum. Define the **impact parameter** $b=\mechanical{L}/\energy{E}$. With $\lambda$ denoting the rescaled parameter,

$$
\left(\frac{dr}{d\lambda}\right)^2=\frac1{b^2}
-\frac1{r^2}\left(1-\frac{2G\mechanical{M}}r\right)
=\frac1{b^2}-V_{\mathrm{phot}}(r).
$$

![[Kyle Kabasares - General Relativity - Photon effective potential.png|**Fig. 44** The effective potential for photons peaks at the photon-sphere radius $r=3G\mechanical{M}$.]]

The maximum is

$$
V_{\mathrm{phot}}(3G\mechanical{M})
=\frac1{27G^2\mechanical{M}^2}
=\frac1{(3\sqrt3\,G\mechanical{M})^2}.
$$

### PDF page 190

Far from the black hole, the incident momentum is $\mechanical{\mathbf p}=p_x\hat{\mathbf x}$ and the transverse offset is $\mathbf b=b\hat{\mathbf y}$. The orbital angular momentum is $\mechanical{\mathbf L}=\mathbf b\times\mechanical{\mathbf p}$.

![[Kyle Kabasares - General Relativity - Photon impact parameter.png|**Fig. 45** The impact parameter is the perpendicular offset of the incident ray far from the black hole.]]

The radial equation $(dr/d\lambda)^2=b^{-2}-V_{\mathrm{phot}}(r)$ determines whether the ray can cross the potential barrier. Using the nonnegative impact parameter shown in the sketch, if $b<3\sqrt3\,G\mechanical{M}$ then $1/b^2$ exceeds the potential everywhere. An incoming ray passes the peak and continues toward $r=0$.

![[Kyle Kabasares - General Relativity - Captured photon trajectory.png|**Fig. 46** A ray with a small impact parameter falls into the black hole.]]

If $b>3\sqrt3\,G\mechanical{M}$, then $1/b^2$ is below the peak. The incoming ray turns at a radius outside the peak.

![[Kyle Kabasares - General Relativity - Deflected photon trajectory.png|**Fig. 47** A ray with a large impact parameter is deflected and escapes.]]

### PDF page 191

For the critical impact parameter $b_{\mathrm{crit}}=3\sqrt3\,G\mechanical{M}$, the value $1/b_{\mathrm{crit}}^2$ equals the peak of $V_{\mathrm{phot}}$. The circular photon orbit is at $r=3G\mechanical{M}$. An incoming critical ray approaches this unstable orbit.

![[Kyle Kabasares - General Relativity - Critical photon orbit and shadow.png|**Fig. 48** The capture boundary has impact-parameter diameter $2b_{\mathrm{crit}}=6\sqrt3\,G\mechanical{M}$ for a distant observer. The sketch connects this boundary to the black-hole shadow observed by the Event Horizon Telescope.]]

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\Delta\mechanical{x}^{\mu}$ | light-time unit | Spacetime displacement | Coordinate differences between two events in an inertial frame with $c=1$. |
| $\eta_{\alpha\beta}$ | — | Minkowski metric | Scalar products of the Cartesian spacetime basis vectors. |
| $d\mechanical{s}^2$ | light-time unit squared | Squared interval | Invariant quadratic form of the infinitesimal displacement. |
| $\tau$ | $\unit{s}$ | Proper time | Time measured by a clock along the trajectory. |
| $\mechanical{\boldsymbol{u}}$ | $\unit{m\,s^{-1}}$ | Four-velocity | Derivative of spacetime position with respect to proper time. |
| $\mechanical{\boldsymbol{p}}$ | $\unit{kg\,m\,s^{-1}}$ | Four-momentum | Spacetime vector with time component $E/c$ and spatial components of momentum. |
| $\mechanical{\boldsymbol{a}}$ | $\unit{m\,s^{-2}}$ | Four-acceleration | Proper-time derivative of the four-velocity. |
| $n_0$ | $\unit{m^{-3}}$ | Proper number density | Number of particles per unit volume in the dust rest frame. |
| $\boldsymbol{N}$ | $\unit{m^{-2}\,s^{-1}}$ | Number four-current | Proper density times the four-velocity, with time component $cn$ when $c$ is restored. |
| $\electric{\boldsymbol{J}}$ | $\unit{A\,m^{-2}}$ (SI) | Electric four-current | Combines $c$ times charge density with the spatial current density when $c$ is restored. |
| $\energy{\rho}_0$ | $\unit{J\,m^{-3}}$ | Rest energy density | Energy per unit volume measured in the dust rest frame. |
| $\mechanical{P}$ | $\unit{Pa}$ | Pressure | Isotropic normal stress in the fluid rest frame. |
| $g_{\alpha\beta}$ | depends on coordinates | Metric tensor | Scalar products of the coordinate basis vectors, used to compute the line element. |
| $\Lambda$ | $\unit{m^{-2}}$ | Cosmological constant | Multiplies the metric in the field equation. |
| $a$ | $1$ | Normalized scale factor | $a(t_0)=1$. |
| $H$ | $\unit{s^{-1}}$ | Hubble parameter | Fractional rate of change of the scale factor. |
| $\energy{\rho}_{\mathrm{crit}}$ | $\unit{J/m^3}$ | Critical density | Density for zero spatial curvature at a given $H$, with $c=1$ in the displayed equations. |
| $\Omega$ | $1$ | Cosmological density parameter | Density relative to the critical density. |
| $z$ | $1$ | Cosmological redshift | Fractional increase in observed wavelength relative to the emitted wavelength. |
| $\mechanical{D}_{\mathrm p}$ | $\unit{m}$ | Proper distance | Radial distance on a constant-time spatial slice. |
| $\mechanical{D}_{\mathrm L}$ | $\unit{m}$ | Luminosity distance | Inferred from source luminosity and measured flux. |
| $\mechanical{D}_{\mathrm A}$ | $\unit{m}$ | Angular diameter distance | Physical transverse size divided by angular size. |
| $\mechanical{D}_{\mathrm M}$ | $\unit{m}$ | Proper motion distance | Transverse speed divided by observed angular speed. |
| $\mechanical{m}(r)$ | $\unit{kg}$ | Enclosed gravitational mass | Stellar mass function defined by the radial metric component, with $c=1$ in the displayed equations. |
| $a$ | $\unit{m}$ | Kerr spin parameter | Angular momentum per mass with $c=1$ in the displayed equation. |
| $r_{\mathrm H}$ | $\unit{m}$ | Horizon radius | Outer root of $\Delta=0$ in the Kerr coordinates. |
| $b_{\mathrm{crit}}$ | $\unit{m}$ | Critical photon impact parameter | Boundary between capture and deflection of incoming Schwarzschild light rays. |
