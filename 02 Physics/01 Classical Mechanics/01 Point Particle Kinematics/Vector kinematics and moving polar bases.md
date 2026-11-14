---
title: "Vector kinematics and moving polar bases"
---

> [!TLDR]
> Differentiate vectors in Cartesian and polar coordinates and account for the changing polar basis in the acceleration.

## Worked lecture material

##### Physics 105 with Dr. Stone

The first midterm covers Chapters 1–5. The second covers Chapters 6, 7, and 13.

![[Kyle Kabasares - Classical Mechanics - Cartesian and spherical position.png|**Fig. 1** Cartesian components locate point P by its projections. The upper spherical sketch marks the polar angle with ψ and the azimuth with θ.]]

The Cartesian position vector can be written as $\mechanical{\vec r}=(\mechanical{x},\mechanical{y},\mechanical{z})=(\mechanical{r}_1,\mechanical{r}_2,\mechanical{r}_3)$. The basis vectors $\hat{x}$, $\hat{y}$, and $\hat{z}$ are also written $\hat e_1$, $\hat e_2$, and $\hat e_3$.

$$
\mechanical{\vec r}=\sum_{i=1}^3\mechanical{r}_i\hat e_i,
\qquad
\mechanical{\vec v}
=\mechanical{v}_x\hat{x}+\mechanical{v}_y\hat{y}+\mechanical{v}_z\hat{z}
=(\mechanical{v}_x,\mechanical{v}_y,\mechanical{v}_z).
$$

##### Dot and cross products

The scalar product of two vectors and the magnitude of a vector are

$$
\begin{aligned}
\mechanical{\vec r}\cdot\vec s
&=\lvert\mechanical{\vec r}\rvert\lvert\vec s\rvert\cos\theta
=\mechanical{r}_1s_1+\mechanical{r}_2s_2+\mechanical{r}_3s_3
=\sum_{i=1}^3\mechanical{r}_is_i,\\
\mechanical{r}&=\lvert\mechanical{\vec r}\rvert
=\sqrt{\mechanical{\vec r}\cdot\mechanical{\vec r}}.
\end{aligned}
$$

The vector product can be written as a determinant.

$$
\mechanical{\vec r}\times\vec s
=\begin{vmatrix}
\hat{x} & \hat{y} & \hat{z}\\
\mechanical{r}_x & \mechanical{r}_y & \mechanical{r}_z\\
s_x & s_y & s_z
\end{vmatrix}.
$$

The lower sketches contrast another spherical-coordinate labeling, with $\theta$ measured from the $z$ axis and $\phi$ in the horizontal plane, with a Cartesian component construction.

##### Vector addition and scaling

Add vectors by collecting the components along each basis vector.

$$
\begin{aligned}
\mechanical{\vec r}+\vec s
&=\sum_{i=1}^3\mechanical{r}_i\hat e_i+\sum_{i=1}^3s_i\hat e_i\\
&=\sum_{i=1}^3(\mechanical{r}_i+s_i)\hat e_i\\
&=(\mechanical{r}_1+s_1,\mechanical{r}_2+s_2,\mechanical{r}_3+s_3).
\end{aligned}
$$

The first sketch shows the vectors with a common tail. The second moves the tail of $\vec s$ to the head of $\mechanical{\vec r}$. The sum extends from the original tail to the new head of $\vec s$.

If two forces act on the same body, their sum determines its acceleration.

$$
\begin{aligned}
\mechanical{\vec F}_{\mathrm{net}}
&=\mechanical{\vec F}_a+\mechanical{\vec F}_b
=\mechanical{m}\mechanical{\vec a},\\
\mechanical{\vec F}_{\mathrm{net}}
&=(\mechanical{F}_{a1}+\mechanical{F}_{b1},
\mechanical{F}_{a2}+\mechanical{F}_{b2})\quad\text{in two dimensions}.
\end{aligned}
$$

A scalar multiplier $c$ scales each component, so $c\mechanical{\vec r}=\sum_{i=1}^3c\mechanical{r}_i\hat e_i$. The direction is unchanged for $c>0$ and reverses for $c<0$. The length increases when $\lvert c\rvert>1$ and decreases when $\lvert c\rvert<1$.

##### Vector products

The notes distinguish the scalar or dot product, also called the inner product, from the vector or cross product. For the dot product, $\mechanical{\vec r}\cdot\vec s=\lvert\mechanical{\vec r}\rvert\lvert\vec s\rvert\cos\theta=\mechanical{r}_1s_1+\mechanical{r}_2s_2+\mechanical{r}_3s_3$. A vector makes zero angle with itself, so

$$
\mechanical{r}=\sqrt{\mechanical{\vec r}\cdot\mechanical{\vec r}}
=\sqrt{\mechanical{r}_1^2+\mechanical{r}_2^2+\mechanical{r}_3^2}.
$$

##### Expanding vector products

In the Cartesian basis, $\hat e_i\cdot\hat e_j=\delta_{ij}$. For example, $\mechanical{r}_1\hat e_1\cdot s_1\hat e_1=\mechanical{r}_1s_1$, while the products of $\mechanical{r}_1\hat e_1$ with $s_2\hat e_2$ and $s_3\hat e_3$ vanish. Expanding gives

$$
\left(\sum_{i=1}^3\mechanical{r}_i\hat e_i\right)\cdot
\left(\sum_{j=1}^3s_j\hat e_j\right)
=\sum_{i=1}^3\mechanical{r}_is_i.
$$

The cross product points normal to the plane of the two vectors. Its magnitude contains $\sin\theta$, whereas the dot product contains $\cos\theta$. The dot-product sketch projects $\vec A$ along $\vec B$, giving $\vec A\cdot\vec B=(A\cos\theta)B$.

$$
\begin{aligned}
\mechanical{\vec r}\times\vec s
&=\lvert\mechanical{\vec r}\rvert\lvert\vec s\rvert\sin\theta\,\hat n\\
&=\hat e_1(\mechanical{r}_2s_3-\mechanical{r}_3s_2)
-\hat e_2(\mechanical{r}_1s_3-\mechanical{r}_3s_1)
+\hat e_3(\mechanical{r}_1s_2-\mechanical{r}_2s_1).
\end{aligned}
$$

Torque is $\mechanical{\vec\tau}=\mechanical{\vec r}\times\mechanical{\vec F}$. In the sketches a downward force turns the wrench when the handle is horizontal. With the handle vertical and the force along it, the torque is zero. The latter sketch labels the downward force $\mechanical{F}=\mechanical{m}\mechanical{g}$.

##### Vector derivatives

$$
\begin{aligned}
\mechanical{\vec v}(t)&=\frac{\mathrm d\mechanical{\vec r}(t)}{\mathrm dt},&
\mechanical{\vec a}(t)&=\frac{\mathrm d\mechanical{\vec v}(t)}{\mathrm dt}
=\frac{\mathrm d^2\mechanical{\vec r}(t)}{\mathrm dt^2},\\
\mechanical{\vec v}_{\mathrm{avg}}&=\frac{\Delta\mechanical{\vec r}}{\Delta t},&
\mechanical{\vec v}&=\lim_{\Delta t\to0}\frac{\Delta\mechanical{\vec r}}{\Delta t}.
\end{aligned}
$$

Differentiation distributes over a vector sum.

$$
\frac{\mathrm d(\mechanical{\vec r}+\vec s)}{\mathrm dt}
=\frac{\mathrm d\mechanical{\vec r}}{\mathrm dt}+\frac{\mathrm d\vec s}{\mathrm dt}.
$$

For a scalar function $f(t)$ and a vector $\mechanical{\vec r}(t)$, the product rule gives

$$
\frac{\mathrm d}{\mathrm dt}\bigl[f(t)\mechanical{\vec r}(t)\bigr]
=\frac{\mathrm df}{\mathrm dt}\mechanical{\vec r}(t)
+f(t)\frac{\mathrm d\mechanical{\vec r}(t)}{\mathrm dt}.
$$

The first term in the handwriting appears to have an extra derivative on $\mechanical{\vec r}$. With a fixed Cartesian basis,

$$
\frac{\mathrm d\mechanical{\vec r}}{\mathrm dt}
=\frac{\mathrm d\mechanical{x}}{\mathrm dt}\hat x
+\frac{\mathrm d\mechanical{y}}{\mathrm dt}\hat y
+\frac{\mathrm d\mechanical{z}}{\mathrm dt}\hat z.
$$

##### Work and vector products

The dot product distributes over addition, $\mechanical{\vec r}\cdot(\vec s+\vec q)=\mechanical{\vec r}\cdot\vec s+\mechanical{\vec r}\cdot\vec q$. Work is the line integral of the force along the path.

$$
\begin{aligned}
\energy{W}
&=\int_i^f\mechanical{\vec F}\cdot\mathrm d\mechanical{\vec r}\\
&=\int_i^f\mechanical{F}_x\,\mathrm d\mechanical{x}
+\int_i^f\mechanical{F}_y\,\mathrm d\mechanical{y}
+\int_i^f\mechanical{F}_z\,\mathrm d\mechanical{z}
=\int_i^f\mechanical{F}_{\parallel}\,\mathrm d\mechanical{s}.
\end{aligned}
$$

Here $\mechanical{F}_{\parallel}=\lvert\mechanical{\vec F}\rvert\cos\theta$ is the force along the local path direction and $\mathrm d\mechanical{s}$ is the path length element. For a constant parallel component, the notes give $\energy{W}=\mechanical{F}_{\parallel}\Delta\mechanical{s}$.

For generic vectors, $\lvert\vec A\times\vec B\rvert=AB\sin\theta$, $\vec A\times\vec B=-\vec B\times\vec A$, and $\vec A\times\vec A=0$. Expand the components directly, use a determinant, or use the permutation symbol.

$$
\vec A\times\vec B=\sum_{i,j,k=1}^3\epsilon_{ijk}A_jB_k\hat e_i,
\qquad
\epsilon_{ijk}=
\begin{cases}
0 & i=j,\ j=k,\ \text{or } k=i,\\
+1 & (i,j,k)\in\{(1,2,3),(2,3,1),(3,1,2)\},\\
-1 & \text{for the other permutations of }(1,2,3).
\end{cases}
$$

##### Work and energy

The net work is the change in kinetic energy. For a conservative force its work equals the decrease in potential energy. If only conservative forces do work,

$$
\energy{W}=\Delta\energy{K}=-\Delta\energy{U},
\qquad
\Delta\energy{K}+\Delta\energy{U}=0,
\qquad
\energy{E}_{\mathrm T}=\energy{K}+\energy{U}=\text{constant}.
$$

##### Conservative work and dot notation

The work of a conservative force around a closed path is zero. Between two points, its work is the negative change in potential energy.

$$
\oint\mechanical{\vec F}_{\mathrm c}\cdot\mathrm d\mechanical{\vec r}=0,
\qquad
\energy{W}_{\mathrm c}
=\int_i^f\mechanical{\vec F}_{\mathrm c}\cdot\mathrm d\mechanical{\vec r}
=-\Delta\energy{U}.
$$

A prime can denote a derivative with respect to position, as in $\mechanical{y}'=\mathrm d\mechanical{y}/\mathrm d\mechanical{x}$. A dot denotes a time derivative, as in $\mechanical{\dot y}=\mathrm d\mechanical{y}/\mathrm dt$. Thus $\mechanical{\vec v}=\mechanical{\dot{\vec r}}$ and $\mechanical{\vec a}=\mechanical{\dot{\vec v}}=\mechanical{\ddot{\vec r}}$.

##### Newton’s second law and a constant force

The net force is the rate of change of momentum. For constant mass $\mechanical{m}$,

$$
\mechanical{\vec F}_{\mathrm{net}}
=\frac{\mathrm d\mechanical{\vec p}}{\mathrm dt}
=\frac{\mathrm d(\mechanical{m}\mechanical{\vec v})}{\mathrm dt}
=\mechanical{m}\mechanical{\vec a}
=\mechanical{m}\mechanical{\ddot{\vec r}}.
$$

In the example, a constant force $\mechanical{F}_0$ points along the positive $x$ axis. Then $\mechanical{m}\mechanical{\ddot x}=\mechanical{F}_0$. Integrating with respect to time gives $\mechanical{\dot x}=(\mechanical{F}_0/\mechanical{m})t+C$. The initial condition $\mechanical{v}(0)=\mechanical{v}_0$ fixes $C=\mechanical{v}_0$, so

$$
\mechanical{v}(t)=\mechanical{v}_0+\frac{\mechanical{F}_0}{\mechanical{m}}t
=\mechanical{v}_0+\mechanical{a}t.
$$

##### Integrating constant acceleration

Start from $\mathrm d\mechanical{x}/\mathrm dt=\mechanical{v}$ and $\mathrm d\mechanical{v}/\mathrm dt=\mechanical{a}$. For constant acceleration,

$$
\int_{\mechanical{v}_i}^{\mechanical{v}_f}\mathrm d\mechanical{v}
=\int_{t_i}^{t_f}\mechanical{a}\,\mathrm dt,
\qquad
\Delta\mechanical{v}=\mechanical{a}(t_f-t_i).
$$

Set $t_i=0$ and integrate $\mechanical{\dot x}=\mechanical{v}_0+\mechanical{F}_0t/\mechanical{m}$ to obtain

$$
\mechanical{x}(t)=\mechanical{x}_0+\mechanical{v}_0t
+\frac{\mechanical{F}_0t^2}{2\mechanical{m}}
=\mechanical{x}_0+\mechanical{v}_0t+\tfrac12\mechanical{a}t^2.
$$

##### Block on an incline

The notes first write Newton’s second law in Cartesian components.

$$
\mechanical{\vec F}_{\mathrm{net}}
=\mechanical{F}_x\hat x+\mechanical{F}_y\hat y+\mechanical{F}_z\hat z
=\mechanical{m}(\mechanical{\ddot x}\hat x+\mechanical{\ddot y}\hat y+\mechanical{\ddot z}\hat z).
$$

Take the positive $x$ direction downhill and the positive $y$ direction outward normal to the incline. For slope angle $\theta$, the force diagram resolves the weight into $\mechanical{m}\mechanical{g}\sin\theta$ downhill and $\mechanical{m}\mechanical{g}\cos\theta$ into the surface. Without friction the downhill acceleration is $\mechanical{a}_x=\mechanical{g}\sin\theta$.

For a block sliding down with kinetic friction, the friction force points uphill. The normal acceleration is zero.

$$
\begin{aligned}
\mechanical{N}-\mechanical{m}\mechanical{g}\cos\theta&=0,\\
\mechanical{m}\mechanical{a}_x
&=\mechanical{m}\mechanical{g}\sin\theta-\mechanical{f}_k\\
&=\mechanical{m}\mechanical{g}\sin\theta
-\mechanical{\mu}_k\mechanical{m}\mechanical{g}\cos\theta.
\end{aligned}
$$

##### Motion down the incline

For downhill sliding with $\mechanical{x}(0)=0$ and $\mechanical{\dot x}(0)=0$, integrate the acceleration once to find the velocity and again to find the displacement.

$$
\begin{aligned}
\mechanical{\ddot x}
&=\frac{\mechanical{m}\mechanical{g}\sin\theta-\mechanical{f}_k}{\mechanical{m}}
=\mechanical{g}(\sin\theta-\mechanical{\mu}_k\cos\theta),\\
\mechanical{\dot x}(t)&=\mechanical{g}(\sin\theta-\mechanical{\mu}_k\cos\theta)t,\\
\mechanical{x}(t)&=\frac12\mechanical{g}(\sin\theta-\mechanical{\mu}_k\cos\theta)t^2.
\end{aligned}
$$

##### Conservation of momentum

The two-particle sketch shows equal and opposite forces along the line between the particles. Let $\mechanical{\vec F}_{ij}$ denote the force on particle $i$ due to particle $j$. Lowercase $\mechanical{\vec p}_i$ is individual momentum. Uppercase $\mechanical{\vec P}$ is total momentum.

$$
\begin{aligned}
\mechanical{\dot{\vec p}}_1
&=\mechanical{\vec F}_{12}+\mechanical{\vec F}_{1,\mathrm{ext}},\\
\mechanical{\dot{\vec p}}_2
&=\mechanical{\vec F}_{21}+\mechanical{\vec F}_{2,\mathrm{ext}},\\
\mechanical{\dot{\vec P}}
&=\mechanical{\dot{\vec p}}_1+\mechanical{\dot{\vec p}}_2
=\mechanical{\vec F}_{1,\mathrm{ext}}+\mechanical{\vec F}_{2,\mathrm{ext}}.
\end{aligned}
$$

Newton’s third law gives $\mechanical{\vec F}_{12}=-\mechanical{\vec F}_{21}$. In the absence of external forces, $\mathrm d\mechanical{\vec P}/\mathrm dt=0$. For three particles the sketch shows three interacting pairs. Their six internal forces sum to

$$
(\mechanical{\vec F}_{12}+\mechanical{\vec F}_{21})
+(\mechanical{\vec F}_{13}+\mechanical{\vec F}_{31})
+(\mechanical{\vec F}_{23}+\mechanical{\vec F}_{32})=0.
$$

For the three particles, the double sum can be evaluated in either order. Define $\mechanical{\vec F}_{\alpha\alpha}=0$ to include all indices in the same sum.

$$
\begin{aligned}
\sum_{\alpha,\beta=1}^3\mechanical{\vec F}_{\alpha\beta}
&=\sum_{\alpha=1}^3\left[\sum_{\beta=1}^3\mechanical{\vec F}_{\alpha\beta}\right]\\
&=\sum_{\alpha=1}^3\mechanical{\vec F}_{\alpha1}
+\sum_{\alpha=1}^3\mechanical{\vec F}_{\alpha2}
+\sum_{\alpha=1}^3\mechanical{\vec F}_{\alpha3}.
\end{aligned}
$$

##### Orthogonality of the cross product

Expand the determinant for $\vec A\times\vec B$ and then take its dot products with $\vec A$ and $\vec B$.

$$
\begin{aligned}
\vec A\times\vec B
&=\begin{vmatrix}
\hat{\imath}&\hat{\jmath}&\hat{k}\\
A_x&A_y&A_z\\
B_x&B_y&B_z
\end{vmatrix}\\
&=\hat{\imath}(A_yB_z-A_zB_y)
-\hat{\jmath}(A_xB_z-A_zB_x)+\hat{k}(A_xB_y-A_yB_x).
\end{aligned}
$$

##### Order of a double cross product

The notes write $(\vec A\times\vec B)\times\vec C=\vec A\times(\vec B\times\vec C)$ as the relation to check. For $\vec A=(1,2,3)$, $\vec B=(4,5,6)$, and $\vec C=(1,0,4)$, the first determinant gives

$$
\vec A\times\vec B
=\hat{\imath}(12-15)-\hat{\jmath}(6-12)+\hat{k}(5-8)
=(-3,6,-3).
$$

The example on the page stops at this intermediate result. Completing it gives $(\vec A\times\vec B)\times\vec C=(24,9,-6)$ and $\vec A\times(\vec B\times\vec C)=(20,65,-50)$, so the cross product is nonassociative.

##### Scalar triple product

The notes begin verifying $\vec A\cdot(\vec B\times\vec C)=(\vec A\times\vec B)\cdot\vec C$ by expanding the cross product inside the left-hand side.

$$
\vec B\times\vec C=\hat{\imath}(B_yC_z-B_zC_y)
-\hat{\jmath}(B_xC_z-B_zC_x)+\hat{k}(B_xC_y-B_yC_x).
$$

##### Counting internal force pairs

Expanding the double sum over three particles would include terms with the same particle as both source and recipient.

$$
\begin{aligned}
\sum_{\alpha,\beta=1}^3\mechanical{\vec F}_{\alpha\beta}
&=(\mechanical{\vec F}_{11}+\mechanical{\vec F}_{21}+\mechanical{\vec F}_{31})\\
&\quad+(\mechanical{\vec F}_{12}+\mechanical{\vec F}_{22}+\mechanical{\vec F}_{32})\\
&\quad+(\mechanical{\vec F}_{13}+\mechanical{\vec F}_{23}+\mechanical{\vec F}_{33}).
\end{aligned}
$$

The notes explicitly exclude the self terms. For $N$ particles, the internal force sum is

$$
\begin{aligned}
\mechanical{\vec F}_{\mathrm{int}}
&=\sum_{\substack{\alpha,\beta=1\\\alpha\ne\beta}}^N
\mechanical{\vec F}_{\alpha\beta}\\
&=\frac12\sum_{\substack{\alpha,\beta=1\\\alpha\ne\beta}}^N
(\mechanical{\vec F}_{\alpha\beta}+\mechanical{\vec F}_{\beta\alpha})\\
&=\sum_{\substack{\alpha,\beta=1\\\alpha>\beta}}^N
(\mechanical{\vec F}_{\alpha\beta}+\mechanical{\vec F}_{\beta\alpha}).
\end{aligned}
$$

The symmetrized ordered sum counts each pair twice. Restricting to $\alpha>\beta$ counts it once. With $N=3$, the retained pairs are $(2,1)$, $(3,1)$, and $(3,2)$, giving the six force terms of the original sum.

##### Planar polar coordinates

The three-dimensional sketch shows the fixed Cartesian basis $\hat x,\hat y,\hat z$. In the plane, measure $\phi$ from the positive $x$ axis and use the radial unit vector $\hat r$ and the tangential unit vector $\hat\phi$ in the direction of increasing $\phi$.

$$
\begin{aligned}
\mechanical{\vec r}&=\mechanical{x}\hat x+\mechanical{y}\hat y
=\mechanical{r}\cos\phi\,\hat x+\mechanical{r}\sin\phi\,\hat y,\\
\hat r&=\frac{\mechanical{\vec r}}{\lvert\mechanical{\vec r}\rvert}
=\cos\phi\,\hat x+\sin\phi\,\hat y,\\
\hat\phi&=-\sin\phi\,\hat x+\cos\phi\,\hat y.
\end{aligned}
$$

Differentiate the Cartesian expression. Both $\mechanical{r}$ and $\phi$ depend on time.

$$
\begin{aligned}
\mechanical{\vec v}
&=(\mechanical{\dot r}\cos\phi-\mechanical{r}\sin\phi\,\dot\phi)\hat x
+(\mechanical{\dot r}\sin\phi+\mechanical{r}\cos\phi\,\dot\phi)\hat y\\
&=\mechanical{\dot r}\hat r+\mechanical{r}\dot\phi\,\hat\phi.
\end{aligned}
$$

The components are $\mechanical{v}_r=\mechanical{\dot r}$ and $\mechanical{v}_\phi=\mechanical{r}\dot\phi=\mechanical{r}\mechanical{\omega}$. To calculate acceleration for $\mechanical{\vec F}=\mechanical{m}\mechanical{\ddot{\vec r}}$, differentiate once more, including the time dependence of the basis vectors.

The lower sketches show $\Delta\hat r=\hat r_2-\hat r_1$ for two nearby directions separated by $\Delta\phi$. For a small positive $\Delta\phi$, the change approaches the direction $\hat\phi$.

##### Change of the polar basis

The sketch compares two nearby radial unit vectors separated by $\Delta\phi$. Their difference satisfies $\Delta\hat r\simeq\Delta\phi\,\hat\phi$ to first order. The displacement at a fixed radius is instead $\Delta\mechanical{\vec r}\simeq\mechanical{r}\Delta\phi\,\hat\phi$. The handwriting mixes these two expressions before taking the limit for the basis vector.

$$
\frac{\mathrm d\hat r}{\mathrm dt}
=\lim_{\Delta t\to0}\frac{\Delta\hat r}{\Delta t}
=\dot\phi\,\hat\phi.
$$

##### Polar acceleration

Differentiating $\mechanical{\vec r}=\mechanical{r}\hat r$ gives $\mechanical{\vec v}=\mechanical{\dot r}\hat r+\mechanical{r}\dot\phi\,\hat\phi$. Differentiate $\hat\phi=-\sin\phi\,\hat x+\cos\phi\,\hat y$ to get

$$
\frac{\mathrm d\hat\phi}{\mathrm dt}
=-\dot\phi(\cos\phi\,\hat x+\sin\phi\,\hat y)
=-\dot\phi\,\hat r.
$$

Apply the product rule to both terms of the velocity.

$$
\begin{aligned}
\mechanical{\vec a}
&=\mechanical{\ddot r}\hat r
+\mechanical{\dot r}\frac{\mathrm d\hat r}{\mathrm dt}
+(\mechanical{\dot r}\dot\phi+\mechanical{r}\ddot\phi)\hat\phi
+\mechanical{r}\dot\phi\frac{\mathrm d\hat\phi}{\mathrm dt}\\
&=(\mechanical{\ddot r}-\mechanical{r}\dot\phi^2)\hat r
+(2\mechanical{\dot r}\dot\phi+\mechanical{r}\ddot\phi)\hat\phi.
\end{aligned}
$$

For fixed radius, the radial component reduces to $\mechanical{a}_r=-\mechanical{r}\dot\phi^2=-\mechanical{r}\mechanical{\omega}^2$. The notes label the tangential term $2\mechanical{\dot r}\dot\phi$ the Coriolis term.

## Source

Kyle Kabasares, *Classical Mechanics (Physics 105, UC Merced 2015)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\vec r}$, $\mechanical{r}$ | $\unit{m}$ | Position vector and radial distance | The displacement from the origin and its magnitude. |
| $\mechanical{x}$, $\mechanical{y}$, $\mechanical{z}$, $\mechanical{r}_i$ | $\unit{m}$ | Cartesian position components | Projections of position onto the three coordinate axes. |
| $\mechanical{\vec v}$, $\mechanical{v}_i$ | $\unit{m\,s^{-1}}$ | Velocity and components | The directed rate of change of position. |
| $\theta$, $\phi$, $\psi$ | $\unit{rad}$ | Angles | Angles between vectors or angular coordinates. |
| $\mechanical{\vec F}$, $\mechanical{\vec F}_{\mathrm{net}}$ | $\unit{N}$ | Force and net force | Individual forces and their vector sum on the body. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The inertia of the body in Newton’s second law. |
| $\mechanical{\vec a}$ | $\unit{m\,s^{-2}}$ | Acceleration | Rate of change of the velocity. |
| $\mechanical{\vec\tau}$ | $\unit{N\,m}$ | Torque | The moment of a force about the selected point. |
| $\mechanical{g}$ | $\unit{m\,s^{-2}}$ | Gravitational acceleration | The acceleration that sets the weight of the body. |
| $t$, $\Delta t$ | $\unit{s}$ | Time and elapsed time | The time coordinate and the interval used for the average velocity. |
| $\energy{W}$ | $\unit{J}$ | Work | The line integral of force along the path. |
| $\mechanical{s}$ | $\unit{m}$ | Path length | Distance measured along the trajectory. |
| $\energy{K}$, $\energy{T}$ | $\unit{J}$ | Kinetic energy | The energy associated with motion. |
| $\energy{U}$ | $\unit{J}$ | Potential energy | Energy defined from the work of a conservative force. |
| $\energy{E}$, $\energy{E}_{\mathrm T}$ | $\unit{J}$ | Total mechanical energy | The sum of kinetic and potential energy. |
| $\mechanical{\vec p}$ | $\unit{kg\,m\,s^{-1}}$ | Linear momentum | Mass times velocity. |
| $\mechanical{N}$ | $\unit{N}$ | Normal force | Contact force perpendicular to the incline. |
| $\mechanical{f}_k$ | $\unit{N}$ | Kinetic friction force | Contact force opposing sliding along the incline. |
| $\mechanical{\mu}_k$ | 1 | Coefficient of kinetic friction | Ratio of the sliding friction magnitude to the normal force. |
| $\mechanical{\vec P}$ | $\unit{kg\,m\,s^{-1}}$ | Total linear momentum | Vector sum of the individual particle momenta. |
| $\mechanical{\vec\omega}$, $\mechanical{\omega}$, $\dot\phi$, $\dot\theta$ | $\unit{rad\,s^{-1}}$ | Angular velocity | Rate of rotation of the position vector in the plane. |
| $T$ | $\unit{s}$ | Flight time | Positive time when the projectile returns to launch height. |
| $\mechanical{\alpha}$, $\ddot\phi$, $\ddot\theta$ | $\unit{rad\,s^{-2}}$ | Angular acceleration | Rate of change of angular velocity about the rotation axis. |
| $C$, $C_1$, $C_2$ | $\unit{m}$ | Complex displacement coefficients | Coefficients of the complex exponentials used to represent a real oscillation. |
| $T$ | $\unit{s}$ | Travel time | Time along a candidate path in Fermat’s principle or the brachistochrone problem. |
| $\mechanical{a}$ | $\unit{m}$ | Cycloid scale | Length parameter in the brachistochrone solution. |
