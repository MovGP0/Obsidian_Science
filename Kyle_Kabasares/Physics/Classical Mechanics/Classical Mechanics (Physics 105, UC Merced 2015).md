---
title: "Classical Mechanics (Physics 105, UC Merced 2015)"
---

> [!TLDR]
> These lecture notes use vectors, forces, energy, and variational principles to describe mechanical motion.

Source notes by Kyle Kabasares. [[Classical Mechanics (Physics 105, UC Merced 2015).pdf|Original PDF]].

Transcribed PDF pages 1–70 of 70.

### PDF page 1

#### January 21, 2015. Physics 105 with Dr. Stone

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

#### January 23, 2015. Dot and cross products

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

### PDF page 2

#### Vector addition and scaling

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

#### Vector products

The notes distinguish the scalar or dot product, also called the inner product, from the vector or cross product. For the dot product, $\mechanical{\vec r}\cdot\vec s=\lvert\mechanical{\vec r}\rvert\lvert\vec s\rvert\cos\theta=\mechanical{r}_1s_1+\mechanical{r}_2s_2+\mechanical{r}_3s_3$. A vector makes zero angle with itself, so

$$
\mechanical{r}=\sqrt{\mechanical{\vec r}\cdot\mechanical{\vec r}}
=\sqrt{\mechanical{r}_1^2+\mechanical{r}_2^2+\mechanical{r}_3^2}.
$$

### PDF page 3

#### Expanding vector products

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

#### Vector derivatives

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

### PDF page 4

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

#### January 26, 2015. Work and vector products

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

#### Work and energy

The net work is the change in kinetic energy. For a conservative force its work equals the decrease in potential energy. If only conservative forces do work,

$$
\energy{W}=\Delta\energy{K}=-\Delta\energy{U},
\qquad
\Delta\energy{K}+\Delta\energy{U}=0,
\qquad
\energy{E}_{\mathrm T}=\energy{K}+\energy{U}=\text{constant}.
$$

### PDF page 5

#### Conservative work and dot notation

The work of a conservative force around a closed path is zero. Between two points, its work is the negative change in potential energy.

$$
\oint\mechanical{\vec F}_{\mathrm c}\cdot\mathrm d\mechanical{\vec r}=0,
\qquad
\energy{W}_{\mathrm c}
=\int_i^f\mechanical{\vec F}_{\mathrm c}\cdot\mathrm d\mechanical{\vec r}
=-\Delta\energy{U}.
$$

A prime can denote a derivative with respect to position, as in $\mechanical{y}'=\mathrm d\mechanical{y}/\mathrm d\mechanical{x}$. A dot denotes a time derivative, as in $\mechanical{\dot y}=\mathrm d\mechanical{y}/\mathrm dt$. Thus $\mechanical{\vec v}=\mechanical{\dot{\vec r}}$ and $\mechanical{\vec a}=\mechanical{\dot{\vec v}}=\mechanical{\ddot{\vec r}}$.

#### Newton’s second law and a constant force

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

### PDF page 6

#### Integrating constant acceleration

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

#### January 28, 2015. Block on an incline

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

### PDF page 7

#### Motion down the incline

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

#### Conservation of momentum

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

### PDF page 8

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

#### Discussion, January 28, 2015

**Problem 2. Orthogonality of the cross product.** Expand the determinant for $\vec A\times\vec B$ and then take its dot products with $\vec A$ and $\vec B$.

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

**Problem 3. Order of a double cross product.** The notes write $(\vec A\times\vec B)\times\vec C=\vec A\times(\vec B\times\vec C)$ as the relation to check. For $\vec A=(1,2,3)$, $\vec B=(4,5,6)$, and $\vec C=(1,0,4)$, the first determinant gives

$$
\vec A\times\vec B
=\hat{\imath}(12-15)-\hat{\jmath}(6-12)+\hat{k}(5-8)
=(-3,6,-3).
$$

The example on the page stops at this intermediate result. Completing it gives $(\vec A\times\vec B)\times\vec C=(24,9,-6)$ and $\vec A\times(\vec B\times\vec C)=(20,65,-50)$, so the cross product is nonassociative.

**Problem 4. Scalar triple product.** The notes begin verifying $\vec A\cdot(\vec B\times\vec C)=(\vec A\times\vec B)\cdot\vec C$ by expanding the cross product inside the left-hand side.

$$
\vec B\times\vec C=\hat{\imath}(B_yC_z-B_zC_y)
-\hat{\jmath}(B_xC_z-B_zC_x)+\hat{k}(B_xC_y-B_yC_x).
$$

### PDF page 9

#### January 30, 2015. Counting internal force pairs

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

### PDF page 10

#### Planar polar coordinates

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

### PDF page 11

#### Change of the polar basis

The sketch compares two nearby radial unit vectors separated by $\Delta\phi$. Their difference satisfies $\Delta\hat r\simeq\Delta\phi\,\hat\phi$ to first order. The displacement at a fixed radius is instead $\Delta\mechanical{\vec r}\simeq\mechanical{r}\Delta\phi\,\hat\phi$. The handwriting mixes these two expressions before taking the limit for the basis vector.

$$
\frac{\mathrm d\hat r}{\mathrm dt}
=\lim_{\Delta t\to0}\frac{\Delta\hat r}{\Delta t}
=\dot\phi\,\hat\phi.
$$

#### February 2, 2015. Polar acceleration

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

### PDF page 12

#### Sliding in a circular track

The sketch places a block on the inside of a circular track. The radius $\mechanical{r}$ is fixed, and $\phi$ is the angle from the downward vertical. The normal force points toward the center. The component of weight tangent to the track is restoring.

$$
\mechanical{F}_{\mathrm{tan}}=-\mechanical{m}\mechanical{g}\sin\phi
=\mechanical{m}\mechanical{r}\ddot\phi,
\qquad
\ddot\phi=-\frac{\mechanical{g}}{\mechanical{r}}\sin\phi.
$$

For small $\phi$, use $\sin\phi\simeq\phi$ to obtain $\ddot\phi\simeq-\signal{\omega}^2\phi$ with $\signal{\omega}^2=\mechanical{g}/\mechanical{r}$. The page recalls the Taylor expansions

$$
\sin\phi=\phi-\frac{\phi^3}{3!}+\frac{\phi^5}{5!}-\frac{\phi^7}{7!}+\cdots,
\qquad
\cos\phi=1-\frac{\phi^2}{2!}+\frac{\phi^4}{4!}-\cdots.
$$

#### Chapter 2. Drag

Write $\mechanical{\vec v}=\mechanical{v}\hat v$. The drag force points opposite the velocity. A speed expansion of its magnitude has zero constant term because drag vanishes at $\mechanical{v}=0$.

$$
\mechanical{\vec f}
=-(\mechanical{b}\mechanical{v}+\mechanical{c}\mechanical{v}^2)\hat v,
\qquad
\mechanical{f}_{\mathrm{lin}}=\mechanical{b}\mechanical{v},
\qquad
\mechanical{f}_{\mathrm{quad}}=\mechanical{c}\mechanical{v}^2.
$$

The linear term depends on viscosity and the quadratic term on cross-sectional area. For a spherical projectile of diameter $\mechanical{D}$ the notes give $\mechanical{b}=\mechanical{\beta}\mechanical{D}$ and $\mechanical{c}=\mechanical{\gamma}\mechanical{D}^2$, with $\mechanical{\beta}=1.6\times10^{-4}\,\unit{N\,s\,m^{-2}}$ and $\mechanical{\gamma}=0.25\,\unit{N\,s^2\,m^{-4}}$.

$$
\frac{\mechanical{f}_{\mathrm{quad}}}{\mechanical{f}_{\mathrm{lin}}}
=\frac{\mechanical{c}\mechanical{v}^2}{\mechanical{b}\mechanical{v}}
=\frac{\mechanical{\gamma}}{\mechanical{\beta}}\mechanical{D}\mechanical{v}
\simeq(1.6\times10^3\,\unit{s\,m^{-2}})\mechanical{D}\mechanical{v}.
$$

For $\mechanical{D}=7\,\unit{cm}$ and $\mechanical{v}=5\,\unit{m\,s^{-1}}$, the ratio is approximately $560$, rounded in the notes to about $600$.

### PDF page 13

#### February 4, 2015. Projectile motion without drag

The lecture recalls $\mechanical{f}=\mechanical{b}\mechanical{v}+\mechanical{c}\mechanical{v}^2$ and notes that Taylor treats horizontal and vertical motion with linear and quadratic drag. The first example sets drag to zero. The sketch shows a projectile starting at the origin with speed $\mechanical{v}_0$ at angle $\theta$ above the horizontal.

In the absence of drag, $\mechanical{F}_x=0$ and $\mechanical{F}_y=-\mechanical{m}\mechanical{g}$. Therefore $\mechanical{\ddot x}=0$ and $\mechanical{\ddot y}=-\mechanical{g}$. Integrate each component with the initial velocity from the sketch.

$$
\begin{aligned}
\mechanical{v}_x(t)&=\mechanical{v}_{0x}=\mechanical{v}_0\cos\theta,\\
\mechanical{v}_y(t)&=\mechanical{v}_{0y}-\mechanical{g}t
=\mechanical{v}_0\sin\theta-\mechanical{g}t.
\end{aligned}
$$

Integrate again, with $\mechanical{x}_0=\mechanical{y}_0=0$ in the example.

$$
\begin{aligned}
\mechanical{x}(t)&=\mechanical{x}_0+(\mechanical{v}_0\cos\theta)t,\\
\mechanical{y}(t)&=\mechanical{y}_0+(\mechanical{v}_0\sin\theta)t-\tfrac12\mechanical{g}t^2.
\end{aligned}
$$

The speed is the magnitude of the velocity.

$$
\begin{aligned}
\mechanical{v}
&=\sqrt{\mechanical{v}_x^2+\mechanical{v}_y^2}
=\sqrt{\mechanical{v}_0^2\cos^2\theta+
(\mechanical{v}_0\sin\theta-\mechanical{g}t)^2}\\
&=\sqrt{\mechanical{v}_0^2+\mechanical{g}^2t^2-2\mechanical{v}_0\mechanical{g}t\sin\theta}.
\end{aligned}
$$

### PDF page 14

#### Projectile distance, range, and height

The distance from the origin is the magnitude of the position vector.

$$
\mechanical{r}(t)
=\sqrt{\mechanical{v}_0^2t^2+\frac{\mechanical{g}^2t^4}{4}
-\mechanical{v}_0\mechanical{g}t^3\sin\theta}.
$$

For a projectile that lands at its launch height, factor the vertical coordinate as $\mechanical{y}(t)=t(\mechanical{v}_0\sin\theta-\tfrac12\mechanical{g}t)$. The nonzero root and the corresponding horizontal range are

$$
t_f=\frac{2\mechanical{v}_0\sin\theta}{\mechanical{g}},
\qquad
\mechanical{R}=\mechanical{v}_0\cos\theta\,t_f
=\frac{\mechanical{v}_0^2\sin(2\theta)}{\mechanical{g}}.
$$

The maximum occurs halfway through the flight, when the vertical velocity is zero. Substituting $t_{\max}=\mechanical{v}_0\sin\theta/\mechanical{g}$ gives $\mechanical{y}_{\max}=\mechanical{v}_0^2\sin^2\theta/(2\mechanical{g})$. The height formula at the edge of the scan is partly clipped. This expression follows from the preceding vertical trajectory.

The example uses $\mechanical{v}_0=1450\,\unit{m\,s^{-1}}$, $\theta=55^\circ$, and $\mechanical{g}=9.8\,\unit{m\,s^{-2}}$, giving about $201.6\,\unit{km}$ in the level-ground model without drag.

#### Adding linear air resistance

The sketch shows weight vertically downward and drag opposite the velocity. In the linear model, write $\mechanical{\vec f}=-\mechanical{b}\mechanical{\vec v}=-\mechanical{k}\mechanical{m}\mechanical{\vec v}$ with $\mechanical{k}=\mechanical{b}/\mechanical{m}$. Newton’s second law gives

$$
\begin{aligned}
\mechanical{m}\mechanical{\dot v}_x&=-\mechanical{k}\mechanical{m}\mechanical{v}_x,\\
\mechanical{m}\mechanical{\dot v}_y&=-\mechanical{m}\mechanical{g}
-\mechanical{k}\mechanical{m}\mechanical{v}_y.
\end{aligned}
$$

Separate the horizontal equation, $\mathrm d\mechanical{v}_x/\mechanical{v}_x=-\mechanical{k}\,\mathrm dt$. For positive $\mechanical{v}_{0x}$ the integrated equation can be written $\ln(\mechanical{v}_x/\mechanical{v}_{0x})=-\mechanical{k}t$.

### PDF page 15

#### February 6, 2015. Projectile motion with linear drag

The lecture recaps the drag-free component equations $\mechanical{\dot v}_x=0$ and $\mechanical{\dot v}_y=-\mechanical{g}$. With linear drag, the force diagram again shows $\mechanical{m}\mechanical{\vec g}$ downward and $\mechanical{\vec f}=-\mechanical{k}\mechanical{m}\mechanical{\vec v}$ opposite the velocity. The equations separate by component.

For horizontal motion, $\mechanical{\dot v}_x=-\mechanical{k}\mechanical{v}_x$. Exponentiating the integrated logarithmic equation gives $\mechanical{v}_x=C\exp(-\mechanical{k}t)$, where the initial condition fixes $C=\mechanical{v}_{0x}$. With zero initial horizontal position,

$$
\mechanical{\dot x}(t)=\mechanical{v}_{0x}\exp(-\mechanical{k}t),
\qquad
\mechanical{x}(t)
=\frac{\mechanical{v}_{0x}}{\mechanical{k}}[1-\exp(-\mechanical{k}t)].
$$

For vertical motion, $\mechanical{\dot v}_y=-\mechanical{g}-\mechanical{k}\mechanical{v}_y$. For initial height $\mechanical{h}$ and initial vertical velocity $\mechanical{v}_{0y}$ the notes give

$$
\begin{aligned}
\mechanical{\dot y}(t)
&=-\frac{\mechanical{g}}{\mechanical{k}}
+\frac{\mechanical{k}\mechanical{v}_{0y}+\mechanical{g}}{\mechanical{k}}
\exp(-\mechanical{k}t),\\
\mechanical{y}(t)
&=\mechanical{h}-\frac{\mechanical{g}t}{\mechanical{k}}
+\frac{\mechanical{k}\mechanical{v}_{0y}+\mechanical{g}}{\mechanical{k}^2}
[1-\exp(-\mechanical{k}t)].
\end{aligned}
$$

### PDF page 16

#### Integrating the linear-drag equations

Integrate the horizontal velocity and use $\mechanical{x}(0)=\mechanical{x}_0$ to determine the integration constant.

$$
\begin{aligned}
\mechanical{x}(t)&=-\frac{\mechanical{v}_{0x}}{\mechanical{k}}\exp(-\mechanical{k}t)+C,\\
C&=\mechanical{x}_0+\frac{\mechanical{v}_{0x}}{\mechanical{k}},\\
\mechanical{x}(t)&=\mechanical{x}_0+
\frac{\mechanical{v}_{0x}}{\mechanical{k}}[1-\exp(-\mechanical{k}t)].
\end{aligned}
$$

The notes take $\mechanical{x}_0=0$. For the vertical component, separate $\mechanical{\dot v}_y=-(\mechanical{g}+\mechanical{k}\mechanical{v}_y)$.

$$
\frac{\mathrm d\mechanical{v}_y}{\mechanical{g}+\mechanical{k}\mechanical{v}_y}
=-\mathrm dt.
$$

Integrating and exponentiating for the launch considered gives

$$
\begin{aligned}
\mechanical{k}\mechanical{v}_y+\mechanical{g}&=C\exp(-\mechanical{k}t),\\
\mechanical{v}_y&=-\frac{\mechanical{g}}{\mechanical{k}}
+\frac{C}{\mechanical{k}}\exp(-\mechanical{k}t),\\
C&=\mechanical{k}\mechanical{v}_{0y}+\mechanical{g}.
\end{aligned}
$$

### PDF page 17

#### Vertical position and flight time with linear drag

Integrating the vertical velocity gives

$$
\mechanical{y}(t)
=-\frac{\mechanical{g}t}{\mechanical{k}}
-\frac{\mechanical{k}\mechanical{v}_{0y}+\mechanical{g}}{\mechanical{k}^2}
\exp(-\mechanical{k}t)+C.
$$

The initial height is zero here, so $C=(\mechanical{k}\mechanical{v}_{0y}+\mechanical{g})/\mechanical{k}^2$. The boxed equation and its horizontal counterpart are

$$
\begin{aligned}
\mechanical{y}(t)
&=-\frac{\mechanical{g}t}{\mechanical{k}}
+\frac{\mechanical{k}\mechanical{v}_{0y}+\mechanical{g}}{\mechanical{k}^2}
[1-\exp(-\mechanical{k}t)],\\
\mechanical{x}(t)
&=\frac{\mechanical{v}_{0x}}{\mechanical{k}}
[1-\exp(-\mechanical{k}t)].
\end{aligned}
$$

The horizontal line on the scan appears to omit the minus sign in the exponent. The integrated result on the previous page supplies it.

Set $\mechanical{y}(T)=0$ at the positive landing time $T$. The notes call this the time for maximum range, meaning the end of the flight for this launch.

$$
T=\frac{\mechanical{k}\mechanical{v}_{0y}+\mechanical{g}}
{\mechanical{g}\mechanical{k}}\,[1-\exp(-\mechanical{k}T)].
$$

Expand the exponential and divide by $T$ to obtain

$$
1=\frac{\mechanical{k}\mechanical{v}_{0y}+\mechanical{g}}
{\mechanical{g}\mechanical{k}}
\left(\mechanical{k}-\tfrac12\mechanical{k}^2T
+\tfrac16\mechanical{k}^3T^2+\cdots\right).
$$

### PDF page 18

#### Weak-drag approximation for the flight time

Use $1-\exp(-\mechanical{k}T)=\mechanical{k}T-\tfrac12(\mechanical{k}T)^2+\tfrac16(\mechanical{k}T)^3+\cdots$. Keeping the terms needed to find the first-order correction gives

$$
T\simeq
\frac{2\mechanical{v}_{0y}/\mechanical{g}}
{1+\mechanical{k}\mechanical{v}_{0y}/\mechanical{g}}
+\tfrac13\mechanical{k}T^2.
$$

At $\mechanical{k}=0$, the right side reduces to the drag-free time $T_0=2\mechanical{v}_{0y}/\mechanical{g}=2\mechanical{v}_0\sin\theta/\mechanical{g}$. Substitute $T_0$ for $T$ in the term already multiplied by $\mechanical{k}$ and use $(1+u)^{-1}\simeq1-u$.

$$
\begin{aligned}
T&\simeq\frac{2\mechanical{v}_{0y}}{\mechanical{g}}
\left(1-\frac{\mechanical{k}\mechanical{v}_{0y}}{\mechanical{g}}\right)
+\tfrac13\mechanical{k}
\left(\frac{2\mechanical{v}_{0y}}{\mechanical{g}}\right)^2\\
&=\frac{2\mechanical{v}_{0y}}{\mechanical{g}}
\left(1-\frac{\mechanical{k}\mechanical{v}_{0y}}{3\mechanical{g}}\right).
\end{aligned}
$$

#### February 9, 2015. Range with weak linear drag

The lecture repeats the flight-time derivation from $\mechanical{y}(T)=0$ using the Taylor series for the exponential and the binomial expansion for $(1+u)^n$. To find the range, expand the horizontal position at the landing time.

$$
\mechanical{x}(T)
=\frac{\mechanical{v}_{0x}}{\mechanical{k}}
\left(\mechanical{k}T-\tfrac12\mechanical{k}^2T^2
+\tfrac16\mechanical{k}^3T^3+\cdots\right).
$$

Keeping terms through first order in $\mechanical{k}$ gives $\mechanical{R}'\simeq\mechanical{v}_{0x}(T-\tfrac12\mechanical{k}T^2)$.

### PDF page 19

The first-order range, using the flight time on the previous page, is

$$
\mechanical{R}'\simeq
\frac{2\mechanical{v}_{0y}\mechanical{v}_{0x}}{\mechanical{g}}
\left(1-\frac{4\mechanical{k}\mechanical{v}_{0y}}{3\mechanical{g}}\right).
$$

#### Chapter 3. Momentum of a system

For the three particles in the sketch, the total internal force is the sum of $\mechanical{\vec F}_{12}$, $\mechanical{\vec F}_{13}$, $\mechanical{\vec F}_{21}$, $\mechanical{\vec F}_{23}$, $\mechanical{\vec F}_{31}$, and $\mechanical{\vec F}_{32}$. For $n$ particles, split the net force into external and internal contributions.

$$
\begin{aligned}
\mechanical{\vec F}_{\mathrm{net}}
&=\mechanical{\vec F}_{\mathrm{net}}^{(\mathrm{ext})}
+\sum_{\substack{\alpha,\beta=1\\\alpha\ne\beta}}^n\mechanical{\vec F}_{\alpha\beta}\\
&=\mechanical{\vec F}_{\mathrm{net}}^{(\mathrm{ext})}
+\sum_{\substack{\alpha,\beta=1\\\alpha>\beta}}^n
(\mechanical{\vec F}_{\alpha\beta}+\mechanical{\vec F}_{\beta\alpha})
=\mechanical{\vec F}_{\mathrm{net}}^{(\mathrm{ext})}.
\end{aligned}
$$

The internal terms cancel by Newton’s third law. Summing Newton’s second law over the particles gives $\mathrm d\mechanical{\vec P}/\mathrm dt=\mechanical{\vec F}_{\mathrm{net}}^{(\mathrm{ext})}$. If the net external force is zero, the total momentum is constant and $\mechanical{\vec P}_f-\mechanical{\vec P}_i=0$.

### PDF page 20

#### Collisions

In an isolated elastic collision, both total momentum and kinetic energy are conserved. In an isolated inelastic collision, total momentum is conserved and kinetic energy can change. In a perfectly inelastic collision the bodies move together after impact.

$$
\begin{aligned}
\mechanical{m}_1\mechanical{\vec v}_{1i}+\mechanical{m}_2\mechanical{\vec v}_{2i}
&=\mechanical{m}_1\mechanical{\vec v}_{1f}+\mechanical{m}_2\mechanical{\vec v}_{2f},\\
\mechanical{\vec v}_f
&=\frac{\mechanical{m}_1\mechanical{\vec v}_{1i}+\mechanical{m}_2\mechanical{\vec v}_{2i}}
{\mechanical{m}_1+\mechanical{m}_2}
\qquad\text{for a perfectly inelastic collision}.
\end{aligned}
$$

When body 2 starts at rest, the common final velocity is $\mechanical{m}_1\mechanical{\vec v}_{1i}/(\mechanical{m}_1+\mechanical{m}_2)$. For equal masses this is $\mechanical{\vec v}_{1i}/2$.

#### Rocket momentum balance

The rocket sketch shows the rocket moving forward and the exhaust directed backward. Let $\mathrm d\mechanical{m}<0$ be the change in rocket mass and let $\mechanical{v}_{\mathrm{ex}}>0$ be the speed of the exhaust relative to the rocket. The mass of the emitted exhaust is $-\mathrm d\mechanical{m}$ and its velocity in the original frame is $\mechanical{v}-\mechanical{v}_{\mathrm{ex}}$ to the required order.

$$
\begin{aligned}
\mechanical{P}(t)&=\mechanical{m}\mechanical{v},\\
\mechanical{P}(t+\mathrm dt)
&=(\mechanical{m}+\mathrm d\mechanical{m})(\mechanical{v}+\mathrm d\mechanical{v})
-\mathrm d\mechanical{m}(\mechanical{v}-\mechanical{v}_{\mathrm{ex}})\\
&\simeq\mechanical{m}\mechanical{v}
+\mechanical{m}\,\mathrm d\mechanical{v}
+\mechanical{v}_{\mathrm{ex}}\,\mathrm d\mechanical{m}.
\end{aligned}
$$

With no external force, $\mathrm d\mechanical{P}=\mechanical{m}\,\mathrm d\mechanical{v}+\mechanical{v}_{\mathrm{ex}}\,\mathrm d\mechanical{m}=0$. The last handwritten line appears to switch the sign on the exhaust term. The sign above follows from the expansion with $\mathrm d\mechanical{m}<0$.

### PDF page 21

#### February 11, 2015. Rocket equation

The midterm entry gives February 23 and Chapters 1–4. With zero external force, $\mathrm d\mechanical{P}=0$ for rocket and exhaust together. From $\mechanical{m}\,\mathrm d\mechanical{v}=-\mechanical{v}_{\mathrm{ex}}\,\mathrm d\mechanical{m}$,

$$
\mechanical{m}\frac{\mathrm d\mechanical{v}}{\mathrm dt}
=-\mechanical{v}_{\mathrm{ex}}\frac{\mathrm d\mechanical{m}}{\mathrm dt}
=\mechanical{F}_{\mathrm{thrust}}.
$$

The notes consider a constant mass loss rate $\mathrm d\mechanical{m}/\mathrm dt=-\mechanical{\alpha}$. With constant exhaust speed, integration from the initial to the current mass gives

$$
\int_{\mechanical{v}_0}^{\mechanical{v}}\mathrm d\mechanical{v}'
=-\mechanical{v}_{\mathrm{ex}}\int_{\mechanical{m}_0}^{\mechanical{m}}
\frac{\mathrm d\mechanical{m}'}{\mechanical{m}'},
\qquad
\mechanical{v}-\mechanical{v}_0
=\mechanical{v}_{\mathrm{ex}}\ln\frac{\mechanical{m}_0}{\mechanical{m}}.
$$

#### System of particles and total mass

For particle $\alpha$, its force is its external force plus the internal forces due to the other particles. Its position in the planar sketch is $\mechanical{\vec r}_\alpha=\mechanical{x}_\alpha\hat x+\mechanical{y}_\alpha\hat y$. The total mass is $\mechanical{M}=\sum_\alpha\mechanical{m}_\alpha$. Summing Newton’s second law for particles of fixed mass gives

$$
\begin{aligned}
\frac{\mathrm d^2}{\mathrm dt^2}\sum_\alpha\mechanical{m}_\alpha\mechanical{\vec r}_\alpha
&=\sum_\alpha\mechanical{\vec F}^{(\mathrm{ext})}_\alpha
+\sum_{\alpha>\beta}
(\mechanical{\vec F}_{\alpha\beta}+\mechanical{\vec F}_{\beta\alpha})\\
&=\mechanical{\vec F}_{\mathrm{net}}^{(\mathrm{ext})}.
\end{aligned}
$$

### PDF page 22

#### Center of mass

For a planar system, average the coordinates with weights proportional to mass.

$$
\mechanical{x}_{\mathrm{cm}}=\frac1{\mechanical{M}}
\sum_\alpha\mechanical{m}_\alpha\mechanical{x}_\alpha,
\qquad
\mechanical{y}_{\mathrm{cm}}=\frac1{\mechanical{M}}
\sum_\alpha\mechanical{m}_\alpha\mechanical{y}_\alpha.
$$

Combining the two components gives

$$
\mechanical{\vec R}_{\mathrm{cm}}
=\mechanical{x}_{\mathrm{cm}}\hat x+\mechanical{y}_{\mathrm{cm}}\hat y
=\frac1{\mechanical{M}}\sum_\alpha\mechanical{m}_\alpha\mechanical{\vec r}_\alpha.
$$

The second derivative of $\mechanical{M}\mechanical{\vec R}_{\mathrm{cm}}$ is the time derivative of the total momentum, equal to the net external force. For a continuous mass distribution, replace the sum with an integral.

$$
\mechanical{\vec R}_{\mathrm{cm}}=\frac1{\mechanical{M}}
\int\mechanical{\vec r}\,\mathrm d\mechanical{m},
\qquad
\mechanical{x}_{\mathrm{cm}}=\frac1{\mechanical{M}}\int\mechanical{x}\,\mathrm d\mechanical{m},
\qquad
\mechanical{y}_{\mathrm{cm}}=\frac1{\mechanical{M}}\int\mechanical{y}\,\mathrm d\mechanical{m}.
$$

#### Uniform rod

The rod extends along the $x$ axis from $0$ to $\mechanical{L}$. Its linear mass density is $\mechanical{\lambda}=\mechanical{M}/\mechanical{L}$, so $\mathrm d\mechanical{m}=\mechanical{\lambda}\,\mathrm d\mechanical{x}$.

$$
\mechanical{x}_{\mathrm{cm}}
=\frac{\mechanical{\lambda}}{\mechanical{M}}\int_0^{\mechanical{L}}\mechanical{x}\,\mathrm d\mechanical{x}
=\frac{\mechanical{\lambda}\mechanical{L}^2}{2\mechanical{M}}
=\frac{\mechanical{L}}{2}.
$$

The lower sketch marks a small mass element on a semicircular planar region and introduces areal density $\mechanical{\sigma}=\mechanical{M}/\mechanical{A}$.

### PDF page 23

#### Center of mass of a semicircular wire

The sketch shows the upper half of a circle of radius $\mechanical{R}$. The calculation uses mass per length $\mechanical{\lambda}$, so it applies to the wire along the arc. With angle $\theta$ measured from the positive horizontal axis, $\mechanical{y}=\mechanical{R}\sin\theta$ and $\mathrm d\mechanical{m}=\mechanical{\lambda}\mechanical{R}\,\mathrm d\theta$. Symmetry gives $\mechanical{x}_{\mathrm{cm}}=0$.

$$
\begin{aligned}
\mechanical{y}_{\mathrm{cm}}
&=\frac{\mechanical{\lambda}\mechanical{R}^2}{\mechanical{M}}
\int_0^\pi\sin\theta\,\mathrm d\theta
=\frac{2\mechanical{\lambda}\mechanical{R}^2}{\mechanical{M}}\\
&=\frac{2\mechanical{R}}{\pi}\simeq\frac{2\mechanical{R}}{3},
\end{aligned}
$$

where $\mechanical{M}=\pi\mechanical{R}\mechanical{\lambda}$. The final approximation is the rough estimate written in the notes.

#### Discussion, February 11, 2015. Rocket in gravity

Assume negligible air resistance, constant gravitational acceleration with height, and a constant fuel burn rate $\mathrm d\mechanical{m}/\mathrm dt=-\mechanical{\alpha}$. The force sketch shows thrust upward and weight $\mechanical{m}\mechanical{g}$ downward. The handwritten expression above the semicircle appears to give the changing weight, $(\mechanical{m}_0-\mechanical{\alpha}t)\mechanical{g}$.

The discussion proposes evaluating the impulse over $\mathrm dt$ by comparing momentum at $t+\mathrm dt$ and $t$. In the handwritten working, the product rule is applied to the rocket momentum alone, giving $\mathrm d(\mechanical{m}\mechanical{v})/\mathrm dt=\mechanical{m}\mechanical{\dot v}-\mechanical{\alpha}\mechanical{v}$. The sketch’s thrust already accounts for the exhaust momentum. To use that thrust, include the momentum of expelled fuel in the balance as on page 20, with external impulse $-\mechanical{m}\mechanical{g}\,\mathrm dt$.

$$
\mechanical{m}\mechanical{\dot v}
=-\mechanical{v}_{\mathrm{ex}}\mechanical{\dot m}-\mechanical{m}\mechanical{g}
=\mechanical{F}_{\mathrm{thrust}}-\mechanical{m}\mechanical{g}.
$$

### PDF page 24

#### Continuation of the rocket discussion

The handwritten attempt equates $\mathrm d(\mechanical{m}\mechanical{v})/\mathrm dt$ for the rocket alone to $-\mechanical{m}\mechanical{g}$. Applying the product rule with $\mechanical{\dot m}=-\mechanical{\alpha}$ leads in the notes to $\mechanical{m}\mechanical{\dot v}=\mechanical{\alpha}\mechanical{v}-\mechanical{m}\mechanical{g}$, followed by an unfinished separation of variables. This attempt omits the momentum of the emitted mass. In the momentum balance for rocket and exhaust, the term $\mechanical{\alpha}\mechanical{v}$ is replaced by $\mechanical{\alpha}\mechanical{v}_{\mathrm{ex}}$ as on page 23.

#### February 13, 2015. Center of mass of a solid cone

Place the tip of a uniform cone at the origin and the circular base at height $\mechanical{H}$ with radius $\mechanical{R}$. Symmetry gives $\mechanical{x}_{\mathrm{cm}}=\mechanical{y}_{\mathrm{cm}}=0$. Let the volume mass density be $\mechanical{\rho}=\mechanical{M}/\mechanical{V}$.

A horizontal section at $\mechanical{z}$ has radius $\mechanical{r}=\mechanical{R}\mechanical{z}/\mechanical{H}$ by similar triangles, so its area is $\mechanical{A}(\mechanical{z})=\pi(\mechanical{R}\mechanical{z}/\mechanical{H})^2$. Replace the two transverse integrals in the Cartesian volume integral by this section area.

$$
\begin{aligned}
\mechanical{z}_{\mathrm{cm}}
&=\frac1{\mechanical{M}}\int \mechanical{z}\,\mathrm d\mechanical{m}
=\frac{\mechanical{\rho}}{\mechanical{M}}\int_V\mechanical{z}\,\mathrm d\mechanical{V}\\
&=\frac{\mechanical{\rho}}{\mechanical{M}}
\int_0^{\mechanical{H}}\mechanical{z}
\left(\int_{A(\mechanical{z})}\mathrm d\mechanical{x}\,\mathrm d\mechanical{y}\right)
\mathrm d\mechanical{z}\\
&=\frac{\mechanical{\rho}}{\mechanical{M}}
\int_0^{\mechanical{H}}\mechanical{z}\,
\pi\left(\frac{\mechanical{R}\mechanical{z}}{\mechanical{H}}\right)^2
\mathrm d\mechanical{z}.
\end{aligned}
$$

### PDF page 25

#### Evaluating the center-of-mass integral

For the cone, the height integral reduces to a cubic.

$$
\mechanical{z}_{\mathrm{cm}}
=\frac{\mechanical{\rho}\pi\mechanical{R}^2}{\mechanical{M}\mechanical{H}^2}
\int_0^{\mechanical{H}}\mechanical{z}^3\,\mathrm d\mechanical{z}
=\frac{\mechanical{\rho}\pi\mechanical{R}^2\mechanical{H}^2}{4\mechanical{M}}.
$$

Using the cone mass $\mechanical{M}=\mechanical{\rho}\pi\mechanical{R}^2\mechanical{H}/3$ reduces the last expression to $3\mechanical{H}/4$ measured from the tip.

#### Angular momentum and torque

Zero net force implies conservation of linear momentum. For rotation about the origin, define the particle’s angular momentum by $\mechanical{\vec\ell}=\mechanical{\vec r}\times\mechanical{\vec p}$. Differentiate the cross product.

$$
\begin{aligned}
\frac{\mathrm d\mechanical{\vec\ell}}{\mathrm dt}
&=\mechanical{\vec r}\times\frac{\mathrm d\mechanical{\vec p}}{\mathrm dt}
+\mechanical{\vec v}\times\mechanical{\vec p}\\
&=\mechanical{\vec r}\times\mechanical{\vec F}
=\mechanical{\vec\tau},
\end{aligned}
$$

because $\mechanical{\vec p}=\mechanical{m}\mechanical{\vec v}$. The wrench sketch resolves the applied force perpendicular to its handle. The moment magnitude can be written $\mechanical{r}\mechanical{F}\sin\alpha=\mechanical{r}\mechanical{F}_{\perp}$, with $\alpha$ the angle between the handle vector and the force.

#### Central gravity and equal areas

In the Sun–planet sketch, $\mechanical{\vec r}$ extends from the Sun to the planet. The gravitational force on the planet is radial.

$$
\mechanical{\vec F}_{s,p}
=-\frac{\mechanical{G}\mechanical{m}_s\mechanical{m}_p}{\mechanical{r}^2}\hat r.
$$

Its torque about the Sun vanishes, so $\mechanical{\vec L}=\mechanical{\vec r}\times\mechanical{\vec p}$ is constant. The area swept in $\mathrm dt$ is the area of the small triangle formed by $\mechanical{\vec r}$ and $\mechanical{\vec v}\,\mathrm dt$.

$$
\mathrm d\mechanical{A}
=\tfrac12\lvert\mechanical{\vec r}\times\mechanical{\vec v}\rvert\,\mathrm dt
=\frac{\mechanical{L}}{2\mechanical{m}_p}\,\mathrm dt.
$$

Thus the rate of sweeping area is constant.

### PDF page 26

#### Swept area and angular momentum of a system

The orbit sketch refers to the equal-area result on page 25.

![[Kyle Kabasares - Classical Mechanics - Equal areas in equal times.png|**Fig. 2** Two sectors along an orbit illustrate equal areas swept in equal time intervals.]]

For $N$ particles the total angular momentum about the origin is the sum of the particle angular momenta.

$$
\begin{aligned}
\mechanical{\vec L}
&=\sum_{\alpha=1}^N\mechanical{\vec r}_\alpha\times\mechanical{\vec p}_\alpha,\\
\frac{\mathrm d\mechanical{\vec L}}{\mathrm dt}
&=\sum_{\alpha=1}^N\mechanical{\vec r}_\alpha\times\mechanical{\vec F}_\alpha\\
&=\sum_{\alpha=1}^N\mechanical{\vec r}_\alpha\times
\left(\mechanical{\vec F}^{(\mathrm{ext})}_\alpha+
\sum_{\beta\ne\alpha}\mechanical{\vec F}_{\alpha\beta}\right).
\end{aligned}
$$

#### Working for the weak-drag range

The lower half returns to the projectile calculation. Expand the horizontal position through first order in $\mechanical{k}$ and substitute the approximate flight time from page 18.

$$
\begin{aligned}
\mechanical{x}(T)
&=\frac{\mechanical{v}_{0x}}{\mechanical{k}}[1-\exp(-\mechanical{k}T)]
\simeq\mechanical{v}_{0x}T(1-\tfrac12\mechanical{k}T),\\
T&\simeq\frac{2\mechanical{v}_{0y}}{\mechanical{g}}
\left(1-\frac{\mechanical{k}\mechanical{v}_{0y}}{3\mechanical{g}}\right).
\end{aligned}
$$

In the second factor of the range, $\mechanical{k}T$ already contains one factor of $\mechanical{k}$, so only the drag-free part of $T$ contributes at first order. Thus the product reduces to the result given on page 19. The expansion at the bottom of the scan trails off and contains dropped factors of $\mechanical{g}$.

### PDF page 27

#### Second attempt at the weak-drag range

The page starts from the approximate flight time and the exact horizontal position for linear drag.

$$
T\simeq\frac{2\mechanical{v}_{0y}}{\mechanical{g}}
\left(1-\frac{\mechanical{k}\mechanical{v}_{0y}}{3\mechanical{g}}\right),
\qquad
\mechanical{x}(T)=\frac{\mechanical{v}_{0x}}{\mechanical{k}}
[1-\exp(-\mechanical{k}T)].
$$

The subsequent handwritten lines use $\mechanical{v}_{0x}T(1+\tfrac12\mechanical{k}T)$ for the range and repeatedly substitute the approximate $T$ into $\mechanical{R}/(1+\tfrac12\mechanical{k}T)$. The sign in that expansion conflicts with the Taylor series in the line above it. In fact,

$$
1-\exp(-\mechanical{k}T)=\mechanical{k}T-\tfrac12\mechanical{k}^2T^2+\cdots.
$$

Using the minus sign and keeping only first-order terms gives

$$
\begin{aligned}
\mechanical{x}(T)
&\simeq\mechanical{v}_{0x}\frac{2\mechanical{v}_{0y}}{\mechanical{g}}
\left(1-\frac{\mechanical{k}\mechanical{v}_{0y}}{3\mechanical{g}}\right)
\left(1-\frac{\mechanical{k}\mechanical{v}_{0y}}{\mechanical{g}}\right)\\
&\simeq\frac{2\mechanical{v}_{0x}\mechanical{v}_{0y}}{\mechanical{g}}
\left(1-\frac{4\mechanical{k}\mechanical{v}_{0y}}{3\mechanical{g}}\right),
\end{aligned}
$$

in agreement with the lecture result on page 19.

### PDF page 28

The first three lines continue the alternate algebra on page 27. They carry the expression with the incorrect plus sign and combine terms of incompatible units, for example $3-2\mechanical{v}_{0y}$. The consistent first-order range is the one on pages 19 and 27.

#### February 18, 2015. Angular momentum review

The midterm reminder says to study summation notation, vectors, the textbook, and the derivations.

The first sketch shows a position vector from the origin and the particle momentum at its tip. The derivative of $\mechanical{\vec\ell}=\mechanical{\vec r}\times\mechanical{\vec p}$ is

$$
\frac{\mathrm d\mechanical{\vec\ell}}{\mathrm dt}
=\mechanical{\vec r}\times\mechanical{\dot{\vec p}}
+\mechanical{\dot{\vec r}}\times\mechanical{\vec p}
=\mechanical{\vec\tau},
$$

since the second term is proportional to $\mechanical{\vec v}\times\mechanical{\vec v}=0$. When the torque vanishes, $\mechanical{\vec\ell}$ is constant and $\Delta\mechanical{\vec\ell}=0$.

In the Sun–planet sketch the velocity need not be radial, but the gravitational force is $\mechanical{\vec F}=-\mechanical{G}\mechanical{m}_s\mechanical{m}_p\,\hat r/\mechanical{r}^2$. Therefore $\mathrm d\mechanical{\vec L}/\mathrm dt=\mechanical{\vec r}\times\mechanical{\dot{\vec p}}=0$.

### PDF page 29

#### Cancellation of internal torques

For $N$ particles, write $\mechanical{\vec\ell}_\alpha=\mechanical{\vec r}_\alpha\times\mechanical{\vec p}_\alpha$ and $\mechanical{\vec L}=\sum_\alpha\mechanical{\vec\ell}_\alpha$. The sketch connects the positions of particles $\alpha$ and $\beta$ by their separation $\mechanical{\vec r}_\alpha-\mechanical{\vec r}_\beta$. In the derivative of the total angular momentum, group the two torques from each internal force pair.

$$
\begin{aligned}
\mechanical{\dot{\vec L}}
&=\sum_\alpha\mechanical{\vec r}_\alpha\times\mechanical{\vec F}^{(\mathrm{ext})}_\alpha\\
&\quad+\sum_{\alpha>\beta}\left(
\mechanical{\vec r}_\alpha\times\mechanical{\vec F}_{\alpha\beta}
+\mechanical{\vec r}_\beta\times\mechanical{\vec F}_{\beta\alpha}\right)\\
&=\sum_\alpha\mechanical{\vec r}_\alpha\times\mechanical{\vec F}^{(\mathrm{ext})}_\alpha
+\sum_{\alpha>\beta}(\mechanical{\vec r}_\alpha-\mechanical{\vec r}_\beta)
\times\mechanical{\vec F}_{\alpha\beta}.
\end{aligned}
$$

The second sum vanishes for central pair forces because each force lies along the corresponding separation. For those interactions the total angular momentum is conserved whenever the net external torque vanishes, including in the absence of external forces.

#### Rotation about the z axis

The angular velocity $\mechanical{\vec\omega}$ points along the rotation axis. If $\theta$ is the angle between the axis and the position vector, the perpendicular distance to the axis is $\mechanical{R}=\mechanical{r}\sin\theta$. The circular path has arc length $\mechanical{s}=\mechanical{R}\phi$ for angle traveled $\phi$. With $\mechanical{\omega}=\dot\phi$ and fixed $\mechanical{R}$,

$$
\mechanical{v}=\frac{\mathrm d\mechanical{s}}{\mathrm dt}
=\mechanical{R}\mechanical{\omega}
=\mechanical{r}\mechanical{\omega}\sin\theta,
\qquad
\mechanical{\vec v}=\mechanical{\vec\omega}\times\mechanical{\vec r}.
$$

### PDF page 30

#### Moment of inertia

Use the vector triple-product identity

$$
\vec A\times(\vec B\times\vec C)
=\vec B(\vec A\cdot\vec C)-\vec C(\vec A\cdot\vec B).
$$

For particle $\alpha$ rotating with common angular velocity $\mechanical{\vec\omega}$, this gives

$$
\begin{aligned}
\mechanical{\vec\ell}_\alpha
&=\mechanical{m}_\alpha\mechanical{\vec r}_\alpha
\times(\mechanical{\vec\omega}\times\mechanical{\vec r}_\alpha)\\
&=\mechanical{m}_\alpha\left[
\mechanical{r}_\alpha^2\mechanical{\vec\omega}
-(\mechanical{\vec r}_\alpha\cdot\mechanical{\vec\omega})\mechanical{\vec r}_\alpha
\right].
\end{aligned}
$$

The notes drop the second term for positions perpendicular to the rotation axis. More generally, the component of $\mechanical{\vec L}$ along the axis is $\mechanical{L}_z=\mechanical{I}\mechanical{\omega}$, where $\mechanical{R}_\alpha$ is the perpendicular distance to the axis.

$$
\mechanical{I}=\sum_\alpha\mechanical{m}_\alpha\mechanical{R}_\alpha^2
\qquad\text{or}\qquad
\mechanical{I}=\int\mechanical{R}^2\,\mathrm d\mechanical{m}
$$

for a discrete or continuous mass distribution, respectively. In the planar case shown, $\mechanical{\vec L}=\mechanical{I}\mechanical{\vec\omega}$.

#### Torque about the rotation axis

The sketch resolves the force on mass $i$ into its tangential component. The torque component about the axis is the sum of the tangential forces times their lever arms. Each tangential acceleration is $\mechanical{a}_{i,\mathrm{tan}}=\mechanical{R}_i\mechanical{\alpha}$ for the common angular acceleration $\mechanical{\alpha}$.

$$
\mechanical{\tau}_z
=\sum_i\mechanical{R}_i\mechanical{F}_{i,\mathrm{tan}}
=\sum_i\mechanical{R}_i\mechanical{m}_i\mechanical{a}_{i,\mathrm{tan}}
=\mechanical{\alpha}\sum_i\mechanical{m}_i\mechanical{R}_i^2
=\mechanical{I}\mechanical{\alpha}.
$$

### PDF page 31

#### Comparing the range formula with scratch work

The second line restates the lecture result for the range,

$$
\mechanical{R}'\simeq\frac{2\mechanical{v}_{0y}\mechanical{v}_{0x}}{\mechanical{g}}
\left(1-\frac{4\mechanical{k}\mechanical{v}_{0y}}{3\mechanical{g}}\right).
$$

The opening line gives a trial flight time with correction $-\mechanical{k}\mechanical{v}_{0y}/\mechanical{g}$ inside the parentheses. The lecture derivation on page 18 instead gives $-\mechanical{k}\mechanical{v}_{0y}/(3\mechanical{g})$. Below that, the scratch work expands $\exp(-x)=1-x+x^2/2!-x^3/3!+\cdots$, but repeats the sign error from page 27 when subtracting the exponential from $1$. It then multiplies out the product of these two trial factors.

For the first-order approximation, put $u=\mechanical{k}\mechanical{v}_{0y}/\mechanical{g}$. The time contributes the factor $(1-u/3)$. The expansion of the horizontal position contributes $(1-u)$, so their product is $1-4u/3$ through first order, as in the restated result.

### PDF page 32

The top repeats the expanded trial product from page 31 and crosses out its terms proportional to $\mechanical{k}^2$. The next line is incomplete.

#### Summation notation

The lower limit gives the starting value of the index and the upper limit gives the ending value.

$$
\sum_{i=1}^n a_i=a_1+a_2+a_3+a_4+\cdots+a_{n-1}+a_n.
$$

The notes compare two sums of squares with different starting values.

$$
\begin{aligned}
\sum_{i=0}^4i^2&=0^2+1^2+2^2+3^2+4^2=30,\\
\sum_{i=2}^4i^2&=2^2+3^2+4^2=29.
\end{aligned}
$$

A summand can have several terms. Substitute each index value in turn.

$$
\sum_{i=4}^7\left(2i+\frac1i\right)
=\left(2\cdot4+\frac14\right)+\left(2\cdot5+\frac15\right)
+\left(2\cdot6+\frac16\right)+\left(2\cdot7+\frac17\right).
$$

The notes give $1+2+3+4+5=15$ and refer to the Gauss story for the general result.

$$
\sum_{i=1}^n i=\frac{n(n+1)}{2}.
$$

### PDF page 33

#### Net force in a multiparticle system

The sketch distinguishes the internal forces on particle $\alpha$ from a possible external force. For particle mass $\mechanical{m}_\alpha$ and momentum $\mechanical{\vec p}_\alpha$, exclude $\beta=\alpha$ from the internal force sum.

$$
\mechanical{\dot{\vec p}}_\alpha=\mechanical{\vec F}_\alpha
=\sum_{\beta\ne\alpha}\mechanical{\vec F}_{\alpha\beta}
+\mechanical{\vec F}_\alpha^{(\mathrm{ext})}.
$$

The total momentum and its rate of change are sums over the particles.

$$
\begin{aligned}
\mechanical{\vec P}
&=\sum_{\alpha=1}^N\mechanical{\vec p}_\alpha
=\mechanical{\vec p}_1+\mechanical{\vec p}_2+\cdots+\mechanical{\vec p}_N,\\
\mechanical{\dot{\vec P}}
&=\sum_{\alpha=1}^N\mechanical{\dot{\vec p}}_\alpha
=\sum_{\alpha=1}^N\sum_{\beta\ne\alpha}\mechanical{\vec F}_{\alpha\beta}
+\sum_{\alpha=1}^N\mechanical{\vec F}_\alpha^{(\mathrm{ext})}.
\end{aligned}
$$

For $N=2$, the double sum contains $\mechanical{\vec F}_{12}$ and $\mechanical{\vec F}_{21}$. Newton’s third law makes these equal and opposite, leaving

$$
\mechanical{\dot{\vec P}}
=\mechanical{\vec F}_1^{(\mathrm{ext})}+\mechanical{\vec F}_2^{(\mathrm{ext})}.
$$

### PDF page 34

#### February 20, 2015. Exam 1 and Chapter 4

The exam reminder lists definitions of scalar and vector products, a derivation or proof, and a problem. It also calls for dot notation, expansions, and summations.

#### Work–energy theorem

The notes now write kinetic energy as $\energy{T}=\tfrac12\mechanical{m}\mechanical{v}^2$. It is a scalar measured in joules. Use $\mechanical{v}^2=\mechanical{\vec v}\cdot\mechanical{\vec v}$ and differentiate.

$$
\begin{aligned}
\frac{\mathrm d\energy{T}}{\mathrm dt}
&=\tfrac12\mechanical{m}\left(
\mechanical{\vec v}\cdot\mechanical{\dot{\vec v}}+
\mechanical{\dot{\vec v}}\cdot\mechanical{\vec v}\right)\\
&=\mechanical{m}\mechanical{\dot{\vec v}}\cdot\mechanical{\vec v}
=\mechanical{\vec F}\cdot\mechanical{\vec v}.
\end{aligned}
$$

Multiply by $\mathrm dt$ and use $\mathrm d\mechanical{\vec r}=\mechanical{\vec v}\,\mathrm dt$. In the path sketch the dot product selects the component of force along the small displacement.

$$
\Delta\energy{T}
=\int_1^2\mechanical{\vec F}\cdot\mathrm d\mechanical{\vec r}
=\energy{W}.
$$

For one-dimensional motion, the chain rule gives $\mathrm d\mechanical{v}_x/\mathrm dt=(\mathrm d\mechanical{v}_x/\mathrm d\mechanical{x})\mechanical{v}_x$. Then

$$
\int_a^b\mechanical{F}_x\,\mathrm d\mechanical{x}
=\int_{\mechanical{v}_a}^{\mechanical{v}_b}\mechanical{m}\mechanical{v}_x\,\mathrm d\mechanical{v}_x
=\frac{\mechanical{m}}2(\mechanical{v}_b^2-\mechanical{v}_a^2).
$$

When only conservative forces do work, $\energy{W}=-\Delta\energy{U}$ as well as $\energy{W}=\Delta\energy{T}$. Hence $\Delta\energy{T}+\Delta\energy{U}=\Delta\energy{E}_{\mathrm T}=0$.

### PDF page 35

#### Work along path a

Consider $\mechanical{\vec F}=(\mechanical{y},2\mechanical{x})$ in the units of the example. The sketch shows three paths from $(0,0)$ to $P=(1,1)$. Path $a$ goes horizontally to $Q=(1,0)$ and then vertically to $P$.

![[Kyle Kabasares - Classical Mechanics - Three paths in a force field.png|**Fig. 3** Path a follows the two edges through Q. Path b is diagonal and path c is curved.]]

$$
\begin{aligned}
\energy{W}_a
&=\int_a\mechanical{\vec F}\cdot\mathrm d\mechanical{\vec r}
=\int_a(\mechanical{y}\,\mathrm d\mechanical{x}
+2\mechanical{x}\,\mathrm d\mechanical{y})\\
&=\int_0^1 0\,\mathrm d\mechanical{x}
+\int_0^1 2\,\mathrm d\mechanical{y}
=2.
\end{aligned}
$$

#### Useful series

$$
\begin{aligned}
\exp(x)&=\sum_{n=0}^\infty\frac{x^n}{n!}
=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\frac{x^4}{4!}+\cdots,\\
\exp(-x)&=1-x+\frac{x^2}{2!}-\frac{x^3}{3!}+\cdots,\\
\frac1{1-x}&=1+x+x^2+x^3+\cdots,\\
\frac1{1+x}&=1-x+x^2-x^3+\cdots.
\end{aligned}
$$

The two geometric series converge for $-1<x<1$. The handwritten inequalities include the endpoints, where the terms do not approach zero.

#### BAC–CAB rule

The notes verify $\vec A\times(\vec B\times\vec C)=\vec B(\vec A\cdot\vec C)-\vec C(\vec A\cdot\vec B)$ for vectors in the $xy$ plane. In the determinant for $\vec B\times\vec C$, the first two minors vanish because both $z$ components are zero. With $D=B_xC_y-B_yC_x$,

$$
\vec B\times\vec C=D\hat{k},
\qquad
\vec A\times(\vec B\times\vec C)
=\begin{vmatrix}
\hat{\imath}&\hat{\jmath}&\hat{k}\\
A_x&A_y&0\\
0&0&D
\end{vmatrix}
=D(A_y\hat{\imath}-A_x\hat{\jmath}).
$$

### PDF page 36

#### Comparing both sides of the vector triple product

For the planar vectors on page 35,

$$
\vec A\cdot\vec C=A_xC_x+A_yC_y,
\qquad
\vec A\cdot\vec B=A_xB_x+A_yB_y.
$$

The right-hand side of the BAC–CAB identity therefore has components

$$
\begin{aligned}
\vec B(\vec A\cdot\vec C)-\vec C(\vec A\cdot\vec B)
={}&[B_x(A_xC_x+A_yC_y)-C_x(A_xB_x+A_yB_y)]\hat{\imath}\\
&+[B_y(A_xC_x+A_yC_y)-C_y(A_xB_x+A_yB_y)]\hat{\jmath}\\
={}&A_y(B_xC_y-B_yC_x)\hat{\imath}
-A_x(B_xC_y-B_yC_x)\hat{\jmath}.
\end{aligned}
$$

This agrees with the determinant for $\vec A\times(\vec B\times\vec C)$.

#### Scalar triple product for coplanar vectors

The notes check $\vec A\cdot(\vec B\times\vec C)=(\vec A\times\vec B)\cdot\vec C$ by writing $\vec A=(A_x,A_y,0)$, $\vec B=(B_x,B_y,0)$, and $\vec C=(C_x,C_y,0)$.

$$
\vec B\times\vec C=(B_xC_y-B_yC_x)\hat{k},
\qquad
\vec A\times\vec B=(A_xB_y-A_yB_x)\hat{k}.
$$

Each remaining dot product pairs a vector along $\hat{k}$ with one in the plane. Both scalar triple products are zero for this choice of vectors.

### PDF page 37

#### Cross product using the Levi-Civita symbol

Identify indices $1,2,3$ with $x,y,z$. For each component $i$ of $\vec a\times\vec b$, expand the nine terms in the sum over $j$ and $k$. Only the two terms with three distinct indices survive.

$$
\begin{aligned}
(\vec a\times\vec b)_i&=\sum_{j=1}^3\sum_{k=1}^3\epsilon_{ijk}a_jb_k,\\
(\vec a\times\vec b)_1&=\epsilon_{123}a_2b_3+\epsilon_{132}a_3b_2
=a_2b_3-a_3b_2,\\
(\vec a\times\vec b)_2&=\epsilon_{213}a_1b_3+\epsilon_{231}a_3b_1
=a_3b_1-a_1b_3,\\
(\vec a\times\vec b)_3&=\epsilon_{312}a_1b_2+\epsilon_{321}a_2b_1
=a_1b_2-a_2b_1.
\end{aligned}
$$

Thus the boxed Cartesian result is

$$
\vec A\times\vec B
=(A_yB_z-A_zB_y)\hat x
+(A_zB_x-A_xB_z)\hat y
+(A_xB_y-A_yB_x)\hat z.
$$

#### Rocket problem from Discussion 3

The rocket sketch again shows exhaust leaving downward at relative speed $\mechanical{v}_{\mathrm{ex}}$. The margin repeats the starting expressions from the discussion, $\mechanical{F}_{\mathrm{ext}}=-\mechanical{m}\mechanical{g}$ and $\mathrm d\mechanical{m}/\mathrm dt=-\mechanical{\alpha}$. The momentum derivative equated to gravity must account for rocket and emitted fuel, as in the balance on page 23.

### PDF page 38

#### Integrating the rocket equation in gravity

For constant exhaust speed and constant gravitational acceleration, the corrected momentum equation is

$$
\frac{\mathrm d\mechanical{v}}{\mathrm dt}
=\frac{\mechanical{\alpha}\mechanical{v}_{\mathrm{ex}}}{\mechanical{m}}
-\mechanical{g}
=-\frac{\mechanical{v}_{\mathrm{ex}}}{\mechanical{m}}
\frac{\mathrm d\mechanical{m}}{\mathrm dt}-\mechanical{g}.
$$

The page integrates each term over the corresponding interval.

$$
\begin{aligned}
\int_{\mechanical{v}_0}^{\mechanical{v}}\mathrm d\mechanical{v}'
&=-\mechanical{v}_{\mathrm{ex}}
\int_{\mechanical{m}_0}^{\mechanical{m}}\frac{\mathrm d\mechanical{m}'}{\mechanical{m}'}
-\int_0^t\mechanical{g}\,\mathrm dt',\\
\mechanical{v}(t)&=\mechanical{v}_0+
\mechanical{v}_{\mathrm{ex}}\ln\frac{\mechanical{m}_0}{\mechanical{m}(t)}
-\mechanical{g}t.
\end{aligned}
$$

#### Review of planar polar velocity

The sketch labels the horizontal and vertical projections $\mechanical{r}\cos\phi$ and $\mechanical{r}\sin\phi$. Apply the product rule to each projection, then group the terms with $\mechanical{\dot r}$ and those with $\dot\phi$.

$$
\begin{aligned}
\frac{\mathrm d\mechanical{\vec r}}{\mathrm dt}
&=\mechanical{\dot r}(\cos\phi\,\hat x+\sin\phi\,\hat y)
+\mechanical{r}\dot\phi(-\sin\phi\,\hat x+\cos\phi\,\hat y)\\
&=\mechanical{\dot r}\hat r+\mechanical{r}\dot\phi\,\hat\phi.
\end{aligned}
$$

### PDF page 39

#### February 25, 2015. Work and change in kinetic energy

For $\energy{T}=\tfrac12\mechanical{m}\mechanical{\vec v}\cdot\mechanical{\vec v}$, the product rule and Newton’s second law give $\mathrm d\energy{T}/\mathrm dt=\mechanical{\vec F}\cdot\mechanical{\vec v}$. The sketch shows an open path from point 1 to point 2, so the work is a line integral along that path.

$$
\begin{aligned}
\energy{W}
&=\int_1^2\mechanical{\vec F}\cdot\mathrm d\mechanical{\vec r}
=\int_{t_1}^{t_2}\mechanical{m}\mechanical{\dot{\vec v}}\cdot\mechanical{\vec v}\,\mathrm dt\\
&=\int_{t_1}^{t_2}\frac{\mechanical{m}}{2}
\frac{\mathrm d(\mechanical{v}^2)}{\mathrm dt}\,\mathrm dt
=\frac{\mechanical{m}}2(\mechanical{v}_2^2-\mechanical{v}_1^2)
=\Delta\energy{T}.
\end{aligned}
$$

The handwriting uses closed-integral signs and appears to reverse the two endpoint speeds in the last expression. The path sketch and integration limits give the open-path result above.

#### Work along path b

Path $b$ in the example from page 35 is the diagonal from $(0,0)$ to $(1,1)$. Along this path $\theta=45^\circ$, $\mathrm d\mechanical{\vec r}=\hat r\,\mathrm d\mechanical{r}$, and the radial coordinate runs from $0$ to $\sqrt2$ in the units of the example.

$$
\begin{aligned}
\energy{W}_b
&=\int_0^{\sqrt2}(\mechanical{y}\hat x+2\mechanical{x}\hat y)
\cdot\hat r\,\mathrm d\mechanical{r}\\
&=\int_0^{\sqrt2}
(\mechanical{y}\cos\theta+2\mechanical{x}\sin\theta)\,\mathrm d\mechanical{r}.
\end{aligned}
$$

### PDF page 40

The diagonal gives $\mechanical{x}=\mechanical{y}=\mechanical{r}/\sqrt2$. The integral from page 39 therefore gives $\energy{W}_b=\int_0^{\sqrt2}(3\mechanical{r}/2)\,\mathrm d\mechanical{r}=3/2$ in the units of the example. For several forces the change in kinetic energy is the sum of their individual work integrals along the same path.

$$
\Delta\energy{T}
=\int_1^2\left(\sum_i\mechanical{\vec F}_i\right)
\cdot\mathrm d\mechanical{\vec r}
=\sum_i\int_1^2\mechanical{\vec F}_i\cdot\mathrm d\mechanical{\vec r}.
$$

#### Conservative forces and potential energy

The notes consider a position-dependent force $\mechanical{\vec F}(\mechanical{\vec r})$ whose work is path independent. Choose a reference position $\mechanical{\vec r}_0$ with potential energy zero. The potential energy at $\mechanical{\vec r}$ is the negative of the work from the reference.

$$
\energy{U}(\mechanical{\vec r})
=-\int_{\mechanical{\vec r}_0}^{\mechanical{\vec r}}
\mechanical{\vec F}\cdot\mathrm d\mechanical{\vec r}'.
$$

The sketch compares direct travel from the reference to point 2 with a path through point 1. Path independence and additivity give

$$
\begin{aligned}
\energy{W}(\mechanical{\vec r}_1\to\mechanical{\vec r}_2)
&=\energy{W}(\mechanical{\vec r}_0\to\mechanical{\vec r}_2)
-\energy{W}(\mechanical{\vec r}_0\to\mechanical{\vec r}_1)\\
&=-[\energy{U}(\mechanical{\vec r}_2)-\energy{U}(\mechanical{\vec r}_1)].
\end{aligned}
$$

When all work is conservative, $\Delta\energy{T}=-\Delta\energy{U}$ and $\energy{E}=\energy{T}+\energy{U}$ is constant. For a path parallel to the $x$ axis,

$$
\int_{\mechanical{x}_1}^{\mechanical{x}_2}\mechanical{F}_x\,\mathrm d\mechanical{x}
=-\int_{\mechanical{x}_1}^{\mechanical{x}_2}
\frac{\partial\energy{U}}{\partial\mechanical{x}}\,\mathrm d\mechanical{x}.
$$

### PDF page 41

#### Force as the negative gradient

Differentiate the work integral with respect to its endpoint along the $x$ direction. With the transverse coordinates held fixed, $\mechanical{F}_x=-\partial\energy{U}/\partial\mechanical{x}$.

For a conservative field, two paths with the same endpoints have equal work. Following one path forward and the other backward gives zero work around the closed curve. Stokes’s theorem relates this closed integral to the curl through a spanning surface $S$.

$$
\oint_{\partial S}\mechanical{\vec F}\cdot\mathrm d\mechanical{\vec r}
=\int_S(\nabla\times\mechanical{\vec F})\cdot\mathrm d\mechanical{\vec A}.
$$

The Cartesian curl is

$$
\begin{aligned}
\nabla\times\mechanical{\vec F}
={}&\hat x\left(\frac{\partial\mechanical{F}_z}{\partial\mechanical{y}}
-\frac{\partial\mechanical{F}_y}{\partial\mechanical{z}}\right)
+\hat y\left(\frac{\partial\mechanical{F}_x}{\partial\mechanical{z}}
-\frac{\partial\mechanical{F}_z}{\partial\mechanical{x}}\right)\\
&+\hat z\left(\frac{\partial\mechanical{F}_y}{\partial\mechanical{x}}
-\frac{\partial\mechanical{F}_x}{\partial\mechanical{y}}\right).
\end{aligned}
$$

In three dimensions the conservative force is $\mechanical{\vec F}=-\nabla\energy{U}$. For the scalar function $\energy{U}(\mechanical{x},\mechanical{y},\mechanical{z})$,

$$
\mathrm d\energy{U}
=\frac{\partial\energy{U}}{\partial\mechanical{x}}\,\mathrm d\mechanical{x}
+\frac{\partial\energy{U}}{\partial\mechanical{y}}\,\mathrm d\mechanical{y}
+\frac{\partial\energy{U}}{\partial\mechanical{z}}\,\mathrm d\mechanical{z}.
$$

The page ends with the kinematic identities $\mechanical{\vec a}=\mathrm d\mechanical{\vec v}/\mathrm dt$ and $\mechanical{\vec v}=\mathrm d\mechanical{\vec r}/\mathrm dt$. In one dimension, $\mathrm d\mechanical{x}=\mechanical{v}(t)\,\mathrm dt$ and integrating $\mechanical{v}(t)$ gives position up to an additive constant.

### PDF page 42

#### February 27, 2015. Parameterizing the work integral

The sketch shows a curve from $A$ to $B$ and distinguishes its tangent displacement from the applied force. A curve in three dimensions can be parameterized by one independent variable. Taking that variable to be time,

$$
\begin{aligned}
\energy{W}(1\to2)
&=\int_1^2\mechanical{\vec F}\cdot\mathrm d\mechanical{\vec r}
=\int_{t_1}^{t_2}\mechanical{\vec F}\cdot\mechanical{\vec v}\,\mathrm dt\\
&=\int_{t_1}^{t_2}\mechanical{m}\mechanical{\dot{\vec v}}\cdot\mechanical{\vec v}\,\mathrm dt
=\int_{t_1}^{t_2}\frac{\mathrm d}{\mathrm dt}
\left(\frac{\mechanical{m}}2\mechanical{\vec v}\cdot\mechanical{\vec v}\right)\mathrm dt\\
&=\frac{\mechanical{m}}2(\mechanical{v}_2^2-\mechanical{v}_1^2)
=\Delta\energy{T}.
\end{aligned}
$$

The step uses $\mathrm d(\mechanical{\vec v}\cdot\mechanical{\vec v})/\mathrm dt=2\mechanical{\dot{\vec v}}\cdot\mechanical{\vec v}$. In differential form, $\mathrm d\energy{T}=\mechanical{\vec F}\cdot\mathrm d\mechanical{\vec r}$.

#### Local work of a conservative force

The page repeats the reference-point definition $\energy{U}(\mechanical{\vec r})=-\int_{\mechanical{\vec r}_0}^{\mechanical{\vec r}}\mechanical{\vec F}\cdot\mathrm d\mechanical{\vec r}'$ and the result $\energy{W}(1\to2)=-\Delta\energy{U}$. The second sketch divides the path from $\mechanical{\vec r}_0$ to $\mechanical{\vec r}+\mathrm d\mechanical{\vec r}$ at $\mechanical{\vec r}$. Subtracting the two reference-point work integrals gives

$$
\begin{aligned}
\energy{W}(\mechanical{\vec r}\to\mechanical{\vec r}+\mathrm d\mechanical{\vec r})
&=-\energy{U}(\mechanical{\vec r}+\mathrm d\mechanical{\vec r})
+\energy{U}(\mechanical{\vec r})\\
&=-\mathrm d\energy{U}.
\end{aligned}
$$

### PDF page 43

#### Conservative force components

For a small displacement, equate the differential of the potential energy to minus the work.

$$
\begin{aligned}
\mechanical{\vec F}\cdot\mathrm d\mechanical{\vec r}
&=\mechanical{F}_x\,\mathrm d\mechanical{x}
+\mechanical{F}_y\,\mathrm d\mechanical{y}
+\mechanical{F}_z\,\mathrm d\mechanical{z}\\
&=-\left(
\frac{\partial\energy{U}}{\partial\mechanical{x}}\,\mathrm d\mechanical{x}
+\frac{\partial\energy{U}}{\partial\mechanical{y}}\,\mathrm d\mechanical{y}
+\frac{\partial\energy{U}}{\partial\mechanical{z}}\,\mathrm d\mechanical{z}
\right).
\end{aligned}
$$

Matching coefficients gives $\mechanical{F}_x=-\partial\energy{U}/\partial\mechanical{x}$, $\mechanical{F}_y=-\partial\energy{U}/\partial\mechanical{y}$, and $\mechanical{F}_z=-\partial\energy{U}/\partial\mechanical{z}$. Together these give $\mechanical{\vec F}=-\nabla\energy{U}$.

#### Curl of a conservative force

The notes apply Stokes’s theorem and the equality of mixed partial derivatives for a smooth potential. For example,

$$
\frac{\partial\mechanical{F}_x}{\partial\mechanical{y}}
=-\frac{\partial^2\energy{U}}{\partial\mechanical{y}\partial\mechanical{x}}
=-\frac{\partial^2\energy{U}}{\partial\mechanical{x}\partial\mechanical{y}}
=\frac{\partial\mechanical{F}_y}{\partial\mechanical{x}}.
$$

Cyclic permutations give $\partial\mechanical{F}_y/\partial\mechanical{z}=\partial\mechanical{F}_z/\partial\mechanical{y}$ and $\partial\mechanical{F}_z/\partial\mechanical{x}=\partial\mechanical{F}_x/\partial\mechanical{z}$. Expanding the curl determinant as on page 41, each difference of partial derivatives is zero. Hence $\nabla\times\mechanical{\vec F}=\vec 0$.

### PDF page 44

#### Example of a curl-free force

The example asks whether the force

$$
\mechanical{\vec F}
=(2\mechanical{x}\mechanical{y}-\mechanical{z}^3)\hat x
+\mechanical{x}^2\hat y-(3\mechanical{x}\mechanical{z}^2+1)\hat z
$$

is conservative, with the coefficients expressed in the units of the example. The constant in the last component changes sign in the handwritten determinant. It drops out of all the derivatives. The curl’s $x$ component is zero, the $y$ component is $-3\mechanical{z}^2-(-3\mechanical{z}^2)=0$, and the $z$ component is $2\mechanical{x}-2\mechanical{x}=0$. The field is smooth throughout space, so it is conservative.

#### Potential with explicit time dependence

For $\energy{U}(\mechanical{\vec r},t)$, the total differential includes an explicit time term. If $\mechanical{\vec F}=-\nabla\energy{U}$, then

$$
\mathrm d\energy{U}=\nabla\energy{U}\cdot\mathrm d\mechanical{\vec r}
+\frac{\partial\energy{U}}{\partial t}\,\mathrm dt
=-\mechanical{\vec F}\cdot\mathrm d\mechanical{\vec r}
+\frac{\partial\energy{U}}{\partial t}\,\mathrm dt.
$$

With $\mathrm d\energy{T}=\mechanical{\vec F}\cdot\mathrm d\mechanical{\vec r}$, this gives

$$
\frac{\mathrm d}{\mathrm dt}(\energy{T}+\energy{U})
=\frac{\partial\energy{U}}{\partial t}.
$$

#### March 2, 2015. Review

The notes mark this lecture “absent” and give March 20 for Midterm 2. They review $\mathrm d\energy{T}=\mechanical{\vec F}\cdot\mathrm d\mechanical{\vec r}$, the path-independent work of a conservative position-dependent force, and the choice $\energy{U}(\mechanical{\vec r}_0)=0$. Stokes’s theorem is restated for a general vector field $\vec A$.

$$
\int_S(\nabla\times\vec A)\cdot\mathrm d\mechanical{\vec A}
=\oint_{\partial S}\vec A\cdot\mathrm d\mechanical{\vec r}.
$$

### PDF page 45

#### Closed paths and the curl

The sketch joins points $a$ and $b$ by two paths labeled $i$ and $ii$. A conservative force does the same work along both paths from $a$ to $b$. Reversing path $ii$ changes the sign of its integral, so the loop formed by the two paths satisfies

$$
\int_{a\to b,\ i}\mechanical{\vec F}\cdot\mathrm d\mechanical{\vec r}
+\int_{b\to a,\ ii}\mechanical{\vec F}\cdot\mathrm d\mechanical{\vec r}
=\oint\mechanical{\vec F}\cdot\mathrm d\mechanical{\vec r}=0.
$$

The notes repeat $\mechanical{\vec F}=-\nabla\energy{U}(\mechanical{\vec r})$ and the Cartesian determinant for $\nabla\times\mechanical{\vec F}$. The permutation symbol condenses that determinant to

$$
\nabla\times\mechanical{\vec F}
=\sum_{i,j,k=1}^3\hat e_i\epsilon_{ijk}
\frac{\partial\mechanical{F}_k}{\partial\mechanical{x}_j}.
$$

#### March 4, 2015. Degrees of freedom

A sketch marks a position vector on a winding trajectory. Another marks the unconstrained case with three degrees of freedom. The one-degree-of-freedom sketch shows a radius at angle $\theta$, as for a point at fixed distance from the origin whose angle alone can change.

### PDF page 46

#### Conservative work in one dimension

For a force depending on the single coordinate $\mechanical{x}$,

$$
\energy{W}(\mechanical{x}_1\to\mechanical{x}_2)
=\int_{\mechanical{x}_1}^{\mechanical{x}_2}\mechanical{F}(\mechanical{x})\,\mathrm d\mechanical{x}.
$$

The sketch marks points $A$, $B$, and $C$ along a line. Any extra excursion from $B$ to $C$ and back to $B$ contributes zero because the two directed work integrals cancel. A potential with zero at $\mechanical{x}_0$ is

$$
\energy{U}(\mechanical{x})
=-\int_{\mechanical{x}_0}^{\mechanical{x}}\mechanical{F}(u)\,\mathrm du.
$$

#### Spring potential

The spring sketch takes the equilibrium coordinate to be $\mechanical{x}_0=0$. Hooke’s law is $\mechanical{F}=-\mechanical{k}\mechanical{x}$ and gives

$$
\energy{U}(\mechanical{x})
=-\int_0^{\mechanical{x}}(-\mechanical{k}u)\,\mathrm du
=\tfrac12\mechanical{k}\mechanical{x}^2.
$$

For equilibrium at a general $\mechanical{x}_0$, the result is $\energy{U}(\mechanical{x})=\tfrac12\mechanical{k}(\mechanical{x}-\mechanical{x}_0)^2$, with the spring constant restored from the preceding equation. The graph is an upward-opening parabola with its minimum at the equilibrium coordinate. The magnitude of the force is the magnitude of the slope, and its signed value is the negative slope.

### PDF page 47

#### Pair potential and turning points

The pair-potential sketch uses particle diameter $\mechanical{\sigma}$ as the length scale. The potential is positive at short separation, crosses zero near $\mechanical{r}/\mechanical{\sigma}=1$, and has a minimum marked near $\mechanical{r}/\mechanical{\sigma}=1.120$. It tends to zero from below at large separation. The line at total energy $-0.5$ in the plotted energy units marks two turning points where $\energy{T}=0$.

![[Kyle Kabasares - Classical Mechanics - Pair potential and turning points.png|**Fig. 4** A pair potential and the two separations where the potential meets the selected total energy.]]

#### Finding elapsed time from a potential

In one dimension, $\energy{E}=\energy{T}+\energy{U}(\mechanical{x})$ and $\energy{T}=\tfrac12\mechanical{m}\mechanical{\dot x}^2$. On a segment where $\mechanical{x}$ increases,

$$
\mechanical{\dot x}
=\sqrt{\frac{2}{\mechanical{m}}[\energy{E}-\energy{U}(\mechanical{x})]},
\qquad
t-t_0
=\sqrt{\frac{\mechanical{m}}{2}}\int_{\mechanical{x}_0}^{\mechanical{x}}
\frac{\mathrm du}{\sqrt{\energy{E}-\energy{U}(u)}}.
$$

The handwritten line below the integral treats $\energy{E}-\energy{U}$ as an integration variable without its derivative. The integral above applies to a general potential. For the falling-body example at the bottom, $\mechanical{x}$ increases downward and $\energy{U}=-\mechanical{m}\mechanical{g}\mechanical{x}$. A release from rest at $\mechanical{x}=0$ gives $\energy{E}=0$ and $\mechanical{\dot x}=\sqrt{2\mechanical{g}\mechanical{x}}$.

### PDF page 48

#### March 9 lecture. Gradient and coordinate increments

The handwritten date appears to end in 2014, although it falls between the March 2015 lectures. For a scalar function $f$, its Cartesian differential and gradient are

$$
\begin{aligned}
\mathrm df&=\nabla f\cdot\mathrm d\mechanical{\vec r}
=\frac{\partial f}{\partial\mechanical{x}}\,\mathrm d\mechanical{x}
+\frac{\partial f}{\partial\mechanical{y}}\,\mathrm d\mechanical{y}
+\frac{\partial f}{\partial\mechanical{z}}\,\mathrm d\mechanical{z},\\
\nabla f&=\hat x\frac{\partial f}{\partial\mechanical{x}}
+\hat y\frac{\partial f}{\partial\mechanical{y}}
+\hat z\frac{\partial f}{\partial\mechanical{z}}.
\end{aligned}
$$

The notes box the displacement in cylindrical and spherical coordinates. In the cylindrical formula $\theta$ is azimuth. In the spherical formula $\theta$ is polar angle and $\phi$ is azimuth.

$$
\begin{aligned}
\mathrm d\mechanical{\vec r}
&=\mathrm d\mechanical{r}\,\hat r+\mechanical{r}\,\mathrm d\theta\,\hat\theta
+\mathrm d\mechanical{z}\,\hat z
&&\text{(cylindrical)},\\
\mathrm d\mechanical{\vec r}
&=\mathrm d\mechanical{r}\,\hat r+\mechanical{r}\,\mathrm d\theta\,\hat\theta
+\mechanical{r}\sin\theta\,\mathrm d\phi\,\hat\phi
&&\text{(spherical)}.
\end{aligned}
$$

#### Simple pendulum and energy

For $N$ masses subject to $k$ independent position constraints, the notes give $3N-k$ degrees of freedom. A single pendulum constrained to a plane and to a fixed distance from its pivot has $3(1)-2=1$. The sketch uses angle $\phi$ from the downward vertical and length $\mechanical{\ell}$. Choose $\energy{U}(0)=0$. The speed is $\mechanical{\ell}\lvert\dot\phi\rvert$, giving

$$
\energy{E}=\energy{T}+\energy{U}
=\tfrac12\mechanical{m}\mechanical{\ell}^2\dot\phi^2
+\mechanical{m}\mechanical{g}\mechanical{\ell}(1-\cos\phi)
=\text{constant}.
$$

The page begins differentiating the energy with respect to time and notes that $\mathrm d(\dot\phi^2)/\mathrm dt=2\dot\phi\ddot\phi$.

### PDF page 49

#### Pendulum equation and small oscillations

Differentiate the conserved energy.

$$
0=\frac{\mathrm d\energy{E}}{\mathrm dt}
=\mechanical{m}\mechanical{\ell}^2\dot\phi\ddot\phi
+\mechanical{m}\mechanical{g}\mechanical{\ell}\sin\phi\,\dot\phi.
$$

On a moving segment, cancel $\dot\phi$. The torque equation $\mechanical{I}\ddot\phi=\mechanical{F}_{\mathrm{tan}}\mechanical{\ell}$, with $\mechanical{I}=\mechanical{m}\mechanical{\ell}^2$ and $\mechanical{F}_{\mathrm{tan}}=-\mechanical{m}\mechanical{g}\sin\phi$, gives the same result and also applies at the turning points.

$$
\ddot\phi=-\frac{\mechanical{g}}{\mechanical{\ell}}\sin\phi.
$$

For small angles, with about $10^\circ$ given as a practical scale in the notes, $\sin\phi\simeq\phi$. The resulting motion is

$$
\ddot\phi\simeq-\signal{\omega}^2\phi,
\qquad
\phi(t)=A\cos(\signal{\omega}t)+B\sin(\signal{\omega}t),
\qquad
\signal{T}=\frac{2\pi}{\signal{\omega}}
=2\pi\sqrt{\frac{\mechanical{\ell}}{\mechanical{g}}}.
$$

The boxed period fixes $\signal{\omega}=\sqrt{\mechanical{g}/\mechanical{\ell}}$. The line above it appears to omit the square root.

#### Cube rolling on a fixed cylinder

A cube of side $2\mechanical{b}$ and center $C$ is placed on a fixed horizontal cylinder of radius $\mechanical{r}$ and center $O$. Initially $C$ is directly above $O$. Contact and rolling without slipping restrict the motion in the plane to one degree of freedom, represented by $\theta$. The no-slip condition equates the rolled length along the face to the arc length $\mechanical{r}\theta$.

![[Kyle Kabasares - Classical Mechanics - Cube rolling on a cylinder.png|**Fig. 5** The cube rolls without slipping. The geometry gives the height of its center above the cylinder center.]]

The notes give the potential energy from the height of $C$, then differentiate it twice.

$$
\begin{aligned}
\energy{U}(\theta)
&=\mechanical{m}\mechanical{g}[(\mechanical{r}+\mechanical{b})\cos\theta+
\mechanical{r}\theta\sin\theta],\\
\energy{U}'(\theta)
&=\mechanical{m}\mechanical{g}(\mechanical{r}\theta\cos\theta-\mechanical{b}\sin\theta),\\
\energy{U}''(\theta)
&=\mechanical{m}\mechanical{g}[(\mechanical{r}-\mechanical{b})\cos\theta-
\mechanical{r}\theta\sin\theta].
\end{aligned}
$$

A rough sketch beside the calculation illustrates extrema of a potential as a function of angle.

### PDF page 50

#### March 11, 2015. Curl in cylindrical coordinates

The page sets up a curl calculation for $\electric{\vec E}=\electric{E}_\rho\hat\rho+\electric{E}_\phi\hat\phi+\electric{E}_z\hat z$. The first row of the proposed determinant contains the cylindrical basis vectors. The second row labels the three directions of differentiation. Unlike the fixed Cartesian basis, the cylindrical basis depends on $\phi$.

$$
\hat\rho=\hat x\cos\phi+\hat y\sin\phi,
\qquad
\hat\phi=-\hat x\sin\phi+\hat y\cos\phi,
\qquad
\frac{\partial\hat\rho}{\partial\phi}=\hat\phi.
$$

The page begins the basis derivative at the last expression. The $\phi$ derivative of a vector field must act on the basis vectors as well as on the components.

#### Electric circulation and induced emf

The rectangular-loop sketch marks two points $A$ and $B$ at the gap and indicates electric field directions around the loop. The page records both the zero circulation of an electrostatic field and the relation between circulation and curl.

$$
\oint_{\partial S}\electric{\vec E}\cdot\mathrm d\mechanical{\vec\ell}
=\int_S(\nabla\times\electric{\vec E})\cdot\mathrm d\mechanical{\vec A}.
$$

The integral is zero in electrostatics. For a changing magnetic flux through a fixed loop, the emf magnitude is $\lvert\electric{\mathcal E}\rvert=\lvert\mathrm d\magnetic{\Phi}/\mathrm dt\rvert$. For consistent orientation of the loop and surface, the signed relation is

$$
\oint_{\partial S}\electric{\vec E}\cdot\mathrm d\mechanical{\vec\ell}
=-\frac{\mathrm d\magnetic{\Phi}}{\mathrm dt},
\qquad
\magnetic{\Phi}=\int_S\magnetic{\vec B}\cdot\mathrm d\mechanical{\vec A}.
$$

The last handwritten line drops the minus sign. The page also records Ampère’s law for a steady current, $\oint_{\partial S}\magnetic{\vec B}\cdot\mathrm d\mechanical{\vec\ell}=\magnetic{\mu}_0\electric{I}_{\mathrm{enc}}$.

### PDF page 51

#### Circular loop and changing flux

The sketches show a coil and a straight conductor with a circular field line. In the calculation alongside them, the flux is $\magnetic{\Phi}=\pi\mechanical{r}^2\magnetic{B}$, corresponding to a uniform changing field normal to a circular loop. With cylindrical symmetry the tangential electric field has constant magnitude around the loop.

$$
2\pi\mechanical{r}\lvert\electric{E}_\phi\rvert
=\pi\mechanical{r}^2\left\lvert\frac{\mathrm d\magnetic{B}}{\mathrm dt}\right\rvert,
\qquad
\lvert\electric{E}_\phi\rvert
=\frac{\mechanical{r}}2\left\lvert\frac{\mathrm d\magnetic{B}}{\mathrm dt}\right\rvert.
$$

The notes give the azimuthal field with a positive sign. For $\hat\phi$ oriented by the right-hand rule about the positive flux normal, the signed component has the minus sign of Faraday’s law.

#### March 13, 2015. Expanding the cylindrical basis

For $\vec A=A_\rho\hat\rho+A_\phi\hat\phi+A_z\hat z$, the scratch work rewrites the directional derivative operators in $\nabla\times\vec A$ by substituting $\hat\rho=\hat x\cos\phi+\hat y\sin\phi$ and $\hat\phi=-\hat x\sin\phi+\hat y\cos\phi$. Here the gradient’s directional operators are $\partial_\rho$, $\rho^{-1}\partial_\phi$, and $\partial_z$.

#### April 1, 2015. Virtual work and the shortest path

Under the heading “Principle of Virtual Work (D’Alembert’s Principle),” the lecture first reviews Newton’s equations in Cartesian and polar coordinates. The Cartesian components are $\mechanical{F}_x=\mechanical{m}\mechanical{\ddot x}$, $\mechanical{F}_y=\mechanical{m}\mechanical{\ddot y}$, and $\mechanical{F}_z=\mechanical{m}\mechanical{\ddot z}$. The planar polar components are

$$
\mechanical{\vec F}
=\mechanical{m}(\mechanical{\ddot r}-\mechanical{r}\dot\phi^2)\hat r
+\mechanical{m}(\mechanical{r}\ddot\phi+2\mechanical{\dot r}\dot\phi)\hat\phi.
$$

The next example asks why the shortest path between two points is a straight line. The sketch shows a general curve $\mechanical{y}(\mechanical{x})$ between the fixed endpoints. With $\mechanical{y}'=\mathrm d\mechanical{y}/\mathrm d\mechanical{x}$ and increasing $\mechanical{x}$, the length to minimize is

$$
\begin{aligned}
\mathrm d\mechanical{s}&=\sqrt{(\mathrm d\mechanical{x})^2+(\mathrm d\mechanical{y})^2}
=\sqrt{1+(\mechanical{y}')^2}\,\mathrm d\mechanical{x},\\
\mechanical{L}&=\int_1^2\mathrm d\mechanical{s}
=\int_{\mechanical{x}_1}^{\mechanical{x}_2}\sqrt{1+(\mechanical{y}')^2}\,\mathrm d\mechanical{x}.
\end{aligned}
$$

### PDF page 52

#### Differentiating a vector field in cylindrical coordinates

The notes write the curl as

$$
\nabla\times\vec A
=\hat\rho\times\partial_\rho\vec A
+\frac{\hat\phi}{\rho}\times\partial_\phi\vec A
+\hat z\times\partial_z\vec A.
$$

For derivatives with respect to $\rho$ or $z$, the derivatives of all three basis vectors vanish. Only the components need to be differentiated. The azimuthal basis derivatives are $\partial_\phi\hat\rho=\hat\phi$, $\partial_\phi\hat\phi=-\hat\rho$, and $\partial_\phi\hat z=0$. Hence

$$
\begin{aligned}
\partial_\rho\vec A&=(\partial_\rho A_\rho)\hat\rho
+(\partial_\rho A_\phi)\hat\phi+(\partial_\rho A_z)\hat z,\\
\partial_\phi\vec A&=(\partial_\phi A_\rho-A_\phi)\hat\rho
+(\partial_\phi A_\phi+A_\rho)\hat\phi+(\partial_\phi A_z)\hat z,\\
\partial_z\vec A&=(\partial_z A_\rho)\hat\rho
+(\partial_z A_\phi)\hat\phi+(\partial_z A_z)\hat z.
\end{aligned}
$$

The page stops at the point of taking the cross products. The displayed basis derivatives fix the cosine in the $y$ component of $\hat\phi$, which is written as a sine in one handwritten line.

#### March 16, 2015. Hooke’s law

The spring sketch shows compression, equilibrium, and extension. With $\mechanical{x}$ measured from equilibrium, the restoring force $\mechanical{F}_x(\mechanical{x})=-\mechanical{k}\mechanical{x}$ vanishes at $\mechanical{x}=0$.

$$
\energy{U}(\mechanical{x})
=-\int_0^{\mechanical{x}}\mechanical{F}_x(u)\,\mathrm du
=-\int_0^{\mechanical{x}}(-\mechanical{k}u)\,\mathrm du
=\frac12\mechanical{k}\mechanical{x}^2.
$$

### PDF page 53

#### Stability and the quadratic approximation

For the spring, the force is zero at $\mechanical{x}=0$, negative for $\mechanical{x}>0$, and positive for $\mechanical{x}<0$. Its potential has slope $\mechanical{k}\mechanical{x}$ and positive curvature $\mechanical{k}$, so the origin is a stable equilibrium. The two sketches compare the exact spring parabola with a general smooth potential that has a minimum at the origin.

For a general one-dimensional potential, expand about the equilibrium $\mechanical{x}_0$.

$$
\begin{aligned}
\energy{U}(\mechanical{x})
={}&\energy{U}(\mechanical{x}_0)+
\energy{U}'(\mechanical{x}_0)(\mechanical{x}-\mechanical{x}_0)\\
&+\tfrac12\energy{U}''(\mechanical{x}_0)(\mechanical{x}-\mechanical{x}_0)^2+\cdots.
\end{aligned}
$$

The linear term vanishes at equilibrium. Taking $\mechanical{x}_0=0$ and choosing $\energy{U}(0)=0$ gives $\energy{U}(\mechanical{x})\simeq\tfrac12\mechanical{k}\mechanical{x}^2$ with $\mechanical{k}=\energy{U}''(0)$, provided the curvature is positive.

#### Small tilt of the cube

The notes return to the cube on the fixed cylinder. For small $\theta$, use $\cos\theta=1-\theta^2/2+\theta^4/4!-\cdots\simeq1-\theta^2/2$ and $\sin\theta=\theta-\theta^3/3!+\cdots\simeq\theta$. Substitution in the potential gives, through second order,

$$
\begin{aligned}
\energy{U}(\theta)
&\simeq \mechanical{m}\mechanical{g}
\left[(\mechanical{r}+\mechanical{b})(1-\theta^2/2)+\mechanical{r}\theta^2\right]\\
&=\mechanical{m}\mechanical{g}(\mechanical{r}+\mechanical{b})
+\tfrac12\mechanical{m}\mechanical{g}(\mechanical{r}-\mechanical{b})\theta^2.
\end{aligned}
$$

### PDF page 54

#### Simple harmonic motion

The cube potential from page 53 is a constant plus $\tfrac12\mechanical{k}_{\theta}\theta^2$ to second order, with $\mechanical{k}_{\theta}=\mechanical{m}\mechanical{g}(\mechanical{r}-\mechanical{b})$. The notes then turn to the translational spring with $\mechanical{F}_x=-\mechanical{k}\mechanical{x}$. Its second-order equation is

$$
\mechanical{\ddot x}=-\frac{\mechanical{k}}{\mechanical{m}}\mechanical{x}
=-\signal{\omega}^2\mechanical{x},
\qquad
\signal{\omega}=\sqrt{\frac{\mechanical{k}}{\mechanical{m}}}.
$$

Differentiating each of $\exp(i\signal{\omega}t)$ and $\exp(-i\signal{\omega}t)$ twice multiplies it by $-\signal{\omega}^2$. The general solution is therefore

$$
\mechanical{x}(t)=C_1\exp(i\signal{\omega}t)+C_2\exp(-i\signal{\omega}t).
$$

The notes separate the even and odd terms of $\exp(i\theta)$ into cosine and $i$ times sine. Using $\theta=\signal{\omega}t$ gives the real form

$$
\mechanical{x}(t)=B_1\cos(\signal{\omega}t)+B_2\sin(\signal{\omega}t),
\qquad
B_1=C_1+C_2,
\qquad
B_2=i(C_1-C_2).
$$

At $t=0$, $\mechanical{x}_0=B_1$. Differentiating introduces a factor of $\signal{\omega}$ in both terms, so $\mechanical{v}_0=\signal{\omega}B_2$. The derivative line in the handwriting omits these factors, but the final boxed initial-velocity equation includes the required one.

### PDF page 55

#### Initial conditions for the oscillator

The upper sketches compare two choices. Starting from rest at displacement $\mechanical{x}_0$ gives a cosine. Starting at equilibrium with a kick of velocity $\mechanical{v}_0$ gives a sine.

$$
\begin{aligned}
\mechanical{x}(t)&=\mechanical{x}_0\cos(\signal{\omega}t)
&&(\mechanical{\dot x}(0)=0),\\
\mechanical{x}(t)&=\frac{\mechanical{v}_0}{\signal{\omega}}\sin(\signal{\omega}t)
&&(\mechanical{x}(0)=0).
\end{aligned}
$$

The shadow of a rotating arm illustrates sinusoidal motion as a projection of uniform circular motion. In one revolution a point on a circle of radius $\mechanical{R}$ travels $2\pi\mechanical{R}$ at speed $\mechanical{R}\signal{\omega}$, so $\signal{\omega}\signal{T}=2\pi$. For the spring, $\signal{T}=2\pi/\signal{\omega}=2\pi\sqrt{\mechanical{m}/\mechanical{k}}$.

#### Amplitude and phase form

The right triangle in the notes has legs $B_1,B_2$, hypotenuse $\signal{A}$, and angle $\signal{\delta}$. Define $\signal{A}=\sqrt{B_1^2+B_2^2}$, with $\cos\signal{\delta}=B_1/\signal{A}$ and $\sin\signal{\delta}=B_2/\signal{A}$ for nonzero amplitude.

$$
\begin{aligned}
\mechanical{x}(t)
&=B_1\cos(\signal{\omega}t)+B_2\sin(\signal{\omega}t)\\
&=\signal{A}[\cos\signal{\delta}\cos(\signal{\omega}t)
+\sin\signal{\delta}\sin(\signal{\omega}t)]\\
&=\signal{A}\cos(\signal{\omega}t-\signal{\delta}).
\end{aligned}
$$

### PDF page 56

#### March 18, 2015. Complex amplitudes

Invert the relations $B_1=C_1+C_2$ and $B_2=i(C_1-C_2)$. Adding and subtracting $iB_1$ gives $B_2+iB_1=2iC_1$ and $B_2-iB_1=-2iC_2$. Thus

$$
C_1=\tfrac12(B_1-iB_2),
\qquad
C_2=\tfrac12(B_1+iB_2).
$$

For real $B_1,B_2$ these coefficients are complex conjugates. For a general $z=x+iy$, $z^*=x-iy$ and $z+z^*=2\operatorname{Re}z$. The handwritten product $zz^*$ is the squared magnitude $\lvert z\rvert^2$.

In the oscillator, the two exponential terms are conjugates, so the displacement is twice the real part of one. Define $C=2C_1=B_1-iB_2=\signal{A}\exp(-i\signal{\delta})$ using the amplitude triangle from page 55.

$$
\begin{aligned}
\mechanical{x}(t)
&=C_1\exp(i\signal{\omega}t)+C_1^*\exp(-i\signal{\omega}t)\\
&=2\operatorname{Re}[C_1\exp(i\signal{\omega}t)]
=\operatorname{Re}[C\exp(i\signal{\omega}t)]\\
&=\operatorname{Re}\left[\signal{A}\exp(i(\signal{\omega}t-\signal{\delta}))\right]
=\signal{A}\cos(\signal{\omega}t-\signal{\delta}).
\end{aligned}
$$

### PDF page 57

#### Oscillator representations and energy

On the complex plane, $\exp(i\theta)=\cos\theta+i\sin\theta$ lies on the unit circle. Its product with its conjugate is $1$. The second circle sketch scales the radius to $\signal{A}$ and shows that the horizontal projection is $\mechanical{x}(t)=\signal{A}\cos(\signal{\omega}t-\signal{\delta})$. The notes collect the equivalent forms

$$
\begin{aligned}
\mechanical{x}(t)
&=C_1\exp(i\signal{\omega}t)+C_2\exp(-i\signal{\omega}t)\\
&=B_1\cos(\signal{\omega}t)+B_2\sin(\signal{\omega}t)\\
&=\signal{A}\cos(\signal{\omega}t-\signal{\delta})
=\operatorname{Re}[C\exp(i\signal{\omega}t)].
\end{aligned}
$$

The amplitude triangle on this page interchanges the labels $B_1$ and $B_2$ relative to the adjacent formula. The cosine and sine coefficients follow the definitions on page 55.

$$
\begin{aligned}
\energy{U}&=\tfrac12\mechanical{k}\signal{A}^2\cos^2(\signal{\omega}t-\signal{\delta}),\\
\mechanical{v}(t)&=-\signal{A}\signal{\omega}\sin(\signal{\omega}t-\signal{\delta}),\\
\energy{T}&=\tfrac12\mechanical{m}\signal{A}^2\signal{\omega}^2
\sin^2(\signal{\omega}t-\signal{\delta}),\\
\energy{T}+\energy{U}&=\tfrac12\mechanical{k}\signal{A}^2.
\end{aligned}
$$

The last line uses $\mechanical{m}\signal{\omega}^2=\mechanical{k}$.

#### Small oscillations in a radial potential

The example gives $\energy{U}(\mechanical{r})=\energy{U}_0(\mechanical{r}/\mechanical{R}+\lambda^2\mechanical{R}/\mechanical{r})$. For positive parameters, the equilibrium and local stiffness follow from the first two derivatives.

$$
\begin{aligned}
\energy{U}'(\mechanical{r})
&=\energy{U}_0\left(\frac1{\mechanical{R}}-\frac{\lambda^2\mechanical{R}}{\mechanical{r}^2}\right),&
\mechanical{r}_0&=\lambda\mechanical{R},\\
\energy{U}''(\mechanical{r})
&=\frac{2\energy{U}_0\lambda^2\mechanical{R}}{\mechanical{r}^3},&
\energy{U}''(\mechanical{r}_0)&=\frac{2\energy{U}_0}{\lambda\mechanical{R}^2}.
\end{aligned}
$$

Measured from the equilibrium energy, the quadratic term is $\tfrac12\energy{U}''(\mechanical{r}_0)(\mechanical{r}-\mechanical{r}_0)^2$. The handwritten quadratic uses $\mechanical{r}^2$ as shorthand for the squared displacement from equilibrium.

### PDF page 58

#### April 1, 2015. Variational problems

The sketch compares a candidate curve with an alternate curve joining the same fixed endpoints. For a path $\mechanical{y}(\mechanical{x})$ with increasing $\mechanical{x}$, the arc length is

$$
\mechanical{L}[\mechanical{y}]
=\int_{\mechanical{x}_1}^{\mechanical{x}_2}
\sqrt{1+(\mechanical{y}')^2}\,\mathrm d\mechanical{x}.
$$

The objective in the shortest-path problem is to minimize this length over curves. A separate sketch shows the corresponding idea for an ordinary function, whose derivative is zero at a smooth interior extremum.

#### Fermat’s principle

The ray sketch bends toward the normal on entering a medium of refractive index $1.1$ from one of index $1.0$. In a medium of index $\signal{n}$, the speed is $\mechanical{v}=\mechanical{c}/\signal{n}$. The travel time along a path is

$$
\begin{aligned}
T&=\int_1^2\frac{\mathrm d\mechanical{s}}{\mechanical{v}}
=\frac1{\mechanical{c}}\int_1^2\signal{n}\,\mathrm d\mechanical{s}\\
&=\frac1{\mechanical{c}}\int_{\mechanical{x}_1}^{\mechanical{x}_2}
\signal{n}(\mechanical{x},\mechanical{y})\sqrt{1+(\mechanical{y}')^2}\,
\mathrm d\mechanical{x}.
\end{aligned}
$$

The notes call this the least-time path. The overall constant $1/\mechanical{c}$ can be dropped when comparing paths, as in the last handwritten integral.

#### Stationary functional and fixed endpoints

Both examples have the general form $S[y]=\int_{x_1}^{x_2}f(y(x),y'(x),x)\,\mathrm dx$. Seek a curve $y(x)$ for which $S$ is stationary. Compare it with $Y(x)=y(x)+\eta(x)$, where $\eta(x_1)=\eta(x_2)=0$ so the varied curve keeps the endpoints.

### PDF page 59

#### Deriving the Euler–Lagrange equation

Introduce the scalar variation parameter $\alpha$ and set $Y(x)=y(x)+\alpha\eta(x)$. The varied functional becomes an ordinary function of $\alpha$.

$$
S(\alpha)=\int_{x_1}^{x_2}f(Y(x),Y'(x),x)\,\mathrm dx.
$$

Stationarity requires $\mathrm dS/\mathrm d\alpha=0$ at $\alpha=0$ for every allowed $\eta$. In the chain rule, $\partial_\alpha Y=\eta$, $\partial_\alpha Y'=\eta'$, and $\partial_\alpha x=0$. Thus

$$
\begin{aligned}
\left.\frac{\mathrm dS}{\mathrm d\alpha}\right|_{\alpha=0}
&=\int_{x_1}^{x_2}\left(
\frac{\partial f}{\partial y}\eta+\frac{\partial f}{\partial y'}\eta'
\right)\mathrm dx\\
&=\left[\frac{\partial f}{\partial y'}\eta\right]_{x_1}^{x_2}
+\int_{x_1}^{x_2}\left[
\frac{\partial f}{\partial y}
-\frac{\mathrm d}{\mathrm dx}\left(\frac{\partial f}{\partial y'}\right)
\right]\eta\,\mathrm dx.
\end{aligned}
$$

The boundary term from integration by parts vanishes because the endpoints are fixed. Since the variation in the interior is arbitrary, the bracketed integrand coefficient must vanish.

$$
\frac{\partial f}{\partial y}
-\frac{\mathrm d}{\mathrm dx}\left(\frac{\partial f}{\partial y'}\right)=0.
$$

### PDF page 60

#### April 6, 2015. Second form of the Euler–Lagrange equation

For $f=f(y,y',x)$, use the chain rule and the product rule.

$$
\begin{aligned}
\frac{\mathrm df}{\mathrm dx}
&=\frac{\partial f}{\partial x}+y'\frac{\partial f}{\partial y}
+y''\frac{\partial f}{\partial y'},\\
\frac{\mathrm d}{\mathrm dx}\left(y'\frac{\partial f}{\partial y'}\right)
&=y''\frac{\partial f}{\partial y'}
+y'\frac{\mathrm d}{\mathrm dx}\left(\frac{\partial f}{\partial y'}\right).
\end{aligned}
$$

Subtract the first equation from the second. The Euler–Lagrange equation cancels the remaining terms proportional to $y'$, giving

$$
\frac{\mathrm d}{\mathrm dx}
\left(y'\frac{\partial f}{\partial y'}-f\right)
+\frac{\partial f}{\partial x}=0.
$$

If $f$ has no explicit dependence on $x$, the expression in parentheses is constant.

#### Brachistochrone setup

The goal is to find the path of shortest travel time for a body released from rest and sliding under gravity. Measure $\mechanical{x}$ downward from the release point and $\mechanical{y}$ horizontally. Conservation of $\energy{E}=\energy{T}+\energy{U}$ with $\energy{U}=-\mechanical{m}\mechanical{g}\mechanical{x}$ gives $\mechanical{v}=\sqrt{2\mechanical{g}\mechanical{x}}$. The written energy line has a plus sign before the gravity term, while the positive downward coordinate and the resulting speed require the minus sign.

$$
T=\int_1^2\frac{\mathrm d\mechanical{s}}{\mechanical{v}}
=\int_{\mechanical{x}_1}^{\mechanical{x}_2}
\frac{\sqrt{1+(\mechanical{y}')^2}}{\sqrt{2\mechanical{g}\mechanical{x}}}\,
\mathrm d\mechanical{x}.
$$

The integrand depends explicitly on $\mechanical{x}$ and on the slope $\mechanical{y}'$. It has no explicit dependence on $\mechanical{y}$.

### PDF page 61

#### Integrating the brachistochrone equation

Because the time integrand is independent of $\mechanical{y}$, the Euler–Lagrange equation gives a constant $\partial f/\partial\mechanical{y}'$. Absorb the factor $1/\sqrt{2\mechanical{g}}$ into the constant and parameterize it by a positive length $\mechanical{a}$.

$$
\frac{\mechanical{y}'}{\sqrt{\mechanical{x}}\sqrt{1+(\mechanical{y}')^2}}
=\frac1{\sqrt{2\mechanical{a}}},
\qquad
(\mechanical{y}')^2=\frac{\mechanical{x}}{2\mechanical{a}-\mechanical{x}}.
$$

The notes choose the branch for increasing $\mechanical{y}$ on the downward segment. Substitute $\mechanical{x}=\mechanical{a}(1-\cos\theta)$ so that $\mathrm d\mechanical{x}=\mechanical{a}\sin\theta\,\mathrm d\theta$. For $0<\theta<\pi$,

$$
\sqrt{\frac{\mechanical{x}}{2\mechanical{a}-\mechanical{x}}}
=\sqrt{\frac{1-\cos\theta}{1+\cos\theta}}
=\frac{1-\cos\theta}{\sin\theta}.
$$

The last equality uses $\sin^2\theta+\cos^2\theta=1$ and $\sin\theta>0$ on this segment. The sine cancels in the integral, leaving $\mechanical{y}=\int\mechanical{a}(1-\cos\theta)\,\mathrm d\theta$. Choose $\mechanical{y}=0$ at $\theta=0$ to obtain the boxed parametrization.

$$
\mechanical{x}=\mechanical{a}(1-\cos\theta),
\qquad
\mechanical{y}=\mechanical{a}(\theta-\sin\theta).
$$

### PDF page 62

#### April 8, 2015. Shortest path in polar coordinates

The lecture restates the second form of the Euler–Lagrange equation. If the independent and dependent variables are exchanged, the functional is written $S=\int f(x,x',y)\,\mathrm dy$, with $x'=\mathrm dx/\mathrm dy$.

In the discussion problem, use $\theta$ as the independent variable and let $\mechanical{r}'=\mathrm d\mechanical{r}/\mathrm d\theta$. For increasing $\theta$,

$$
\mathrm d\mechanical{\vec s}=\hat r\,\mathrm d\mechanical{r}
+\hat\theta\,\mechanical{r}\,\mathrm d\theta,
\qquad
\mathrm d\mechanical{s}
=\sqrt{(\mechanical{r}')^2+\mechanical{r}^2}\,\mathrm d\theta.
$$

The length integrand $f=\sqrt{(\mechanical{r}')^2+\mechanical{r}^2}$ has no explicit $\theta$ dependence. Therefore $f-\mechanical{r}'\partial f/\partial\mechanical{r}'$ is constant. Differentiate and combine the terms over a common denominator.

$$
\begin{aligned}
\frac{\partial f}{\partial\mechanical{r}'}
&=\frac{\mechanical{r}'}{\sqrt{(\mechanical{r}')^2+\mechanical{r}^2}},\\
\mechanical{k}
&=\sqrt{(\mechanical{r}')^2+\mechanical{r}^2}
-\frac{(\mechanical{r}')^2}{\sqrt{(\mechanical{r}')^2+\mechanical{r}^2}}
=\frac{\mechanical{r}^2}{\sqrt{(\mechanical{r}')^2+\mechanical{r}^2}}.
\end{aligned}
$$

Squaring gives $\mechanical{r}^4=\mechanical{k}^2[(\mechanical{r}')^2+\mechanical{r}^2]$, hence

$$
(\mechanical{r}')^2=\frac{\mechanical{r}^2(\mechanical{r}^2-\mechanical{k}^2)}
{\mechanical{k}^2}.
$$

### PDF page 63

On the branch with increasing radius, the polar length equation separates as

$$
\frac{\mathrm d\mechanical{r}}{\mathrm d\theta}
=\frac{\mechanical{r}\sqrt{\mechanical{r}^2-\mechanical{k}^2}}{\mechanical{k}},
\qquad
\theta=\int\frac{\mechanical{k}\,\mathrm d\mechanical{r}}
{\mechanical{r}\sqrt{\mechanical{r}^2-\mechanical{k}^2}}.
$$

The last handwritten radical appears to switch to a plus sign. The separated differential in the preceding line fixes the minus sign.

#### April 10, 2015. Chapter 7 and Hamilton’s principle

The heading labels this the birthday lecture. A one-dimensional spring obeys $\mechanical{m}\mechanical{\ddot x}=-\mechanical{k}\mechanical{x}$, with total energy $\energy{E}_{\mathrm T}=\energy{T}+\energy{U}$. The Lagrangian instead uses the difference $\energy{\mathcal L}=\energy{T}-\energy{U}$. Hamilton’s principle states that the action is stationary for variations with fixed endpoints.

$$
\energy{S}=\int_{t_1}^{t_2}\energy{\mathcal L}\,\mathrm dt.
$$

To transfer the general variational calculation to mechanics, replace the independent variable $x$ by $t$, the curve value $y$ by the position $\mechanical{x}$, and the slope $y'$ by $\mechanical{\dot x}$. For the spring, $\energy{T}=\tfrac12\mechanical{m}\mechanical{\dot x}^2$ and $\energy{U}=\tfrac12\mechanical{k}\mechanical{x}^2$. The equation for a stationary action is

$$
\frac{\partial\energy{\mathcal L}}{\partial\mechanical{x}}
-\frac{\mathrm d}{\mathrm dt}
\left(\frac{\partial\energy{\mathcal L}}{\partial\mechanical{\dot x}}\right)=0.
$$

### PDF page 64

#### Spring and general Cartesian motion

For the spring,

$$
\energy{\mathcal L}(\mechanical{x},\mechanical{\dot x})
=\tfrac12\mechanical{m}\mechanical{\dot x}^2-\tfrac12\mechanical{k}\mechanical{x}^2.
$$

Its position derivative is $-\mechanical{k}\mechanical{x}$, its velocity derivative is $\mechanical{m}\mechanical{\dot x}$, and the time derivative of the latter is $\mechanical{m}\mechanical{\ddot x}$. Substitution gives $-\mechanical{k}\mechanical{x}-\mechanical{m}\mechanical{\ddot x}=0$. For an arbitrary position potential, the same calculation gives $\mechanical{m}\mechanical{\ddot x}=-\mathrm d\energy{U}/\mathrm d\mechanical{x}$. The handwritten one-dimensional line omits this minus sign, which appears in the three-dimensional equations below it.

In three Cartesian dimensions,

$$
\energy{\mathcal L}
=\frac{\mechanical{m}}2
(\mechanical{\dot x}^2+\mechanical{\dot y}^2+\mechanical{\dot z}^2)
-\energy{U}(\mechanical{x},\mechanical{y},\mechanical{z}).
$$

Apply an Euler–Lagrange equation to each component.

$$
\mechanical{m}\mechanical{\ddot x}=-\frac{\partial\energy{U}}{\partial\mechanical{x}}=\mechanical{F}_x,
\qquad
\mechanical{m}\mechanical{\ddot y}=-\frac{\partial\energy{U}}{\partial\mechanical{y}}=\mechanical{F}_y,
\qquad
\mechanical{m}\mechanical{\ddot z}=-\frac{\partial\energy{U}}{\partial\mechanical{z}}=\mechanical{F}_z.
$$

The bottom sketch introduces a polar position $\mechanical{\vec r}=\mechanical{r}\hat r$. Its velocity is $\mechanical{\vec v}=\mechanical{\dot r}\hat r+\mechanical{r}\,\mathrm d\hat r/\mathrm dt$.

### PDF page 65

#### Polar basis derivatives

The tangential unit vector is the radial direction rotated by $\pi/2$.

$$
\hat\theta=\cos(\theta+\pi/2)\hat x+\sin(\theta+\pi/2)\hat y
=-\sin\theta\,\hat x+\cos\theta\,\hat y.
$$

Differentiating the unit vectors gives $\mathrm d\hat r/\mathrm dt=\dot\theta\hat\theta$ and $\mathrm d\hat\theta/\mathrm dt=-\dot\theta\hat r$.

#### April 13, 2015. Elastic pendulum

The sketch defines $\theta$ from the downward vertical. For a fixed length $\mechanical{\ell}$ there is one degree of freedom. With Cartesian horizontal and downward coordinates $\mechanical{x}=\mechanical{\ell}\sin\theta$ and $\mechanical{y}=\mechanical{\ell}\cos\theta$, differentiation gives $\mechanical{v}^2=\mechanical{\ell}^2\dot\theta^2$.

The elastic pendulum also has an independent radial displacement. In its equations, $\mechanical{x}$ denotes extension from the unstretched length $\mechanical{\ell}$, so $\mechanical{r}=\mechanical{\ell}+\mechanical{x}$. The speed squared is $\mechanical{\dot x}^2+(\mechanical{\ell}+\mechanical{x})^2\dot\theta^2$. The energies are

$$
\begin{aligned}
\energy{T}&=\tfrac12\mechanical{m}
[\mechanical{\dot x}^2+(\mechanical{\ell}+\mechanical{x})^2\dot\theta^2],\\
\energy{U}
&=-\mechanical{m}\mechanical{g}(\mechanical{\ell}+\mechanical{x})\cos\theta
+\tfrac12\mechanical{k}\mechanical{x}^2.
\end{aligned}
$$

Using $\energy{\mathcal L}=\energy{T}-\energy{U}$, the two Euler–Lagrange equations give

$$
\begin{aligned}
\mechanical{m}\mechanical{\ddot x}
&=\mechanical{m}(\mechanical{\ell}+\mechanical{x})\dot\theta^2
+\mechanical{m}\mechanical{g}\cos\theta-\mechanical{k}\mechanical{x},\\
\frac{\mathrm d}{\mathrm dt}
[\mechanical{m}(\mechanical{\ell}+\mechanical{x})^2\dot\theta]
&=-\mechanical{m}\mechanical{g}(\mechanical{\ell}+\mechanical{x})\sin\theta.
\end{aligned}
$$

### PDF page 66

The margin shows a rotating object with a rate of $22.0\,\unit{rev\,min^{-1}}$, radius $0.25\,\unit{m}$, and moment of inertia recorded as $0.015$ without a unit.

#### April 20, 2015. Generalized coordinates and kinetic energy

Let $q_1,\ldots,q_n$ be independent generalized coordinates for the degrees of freedom. When taking partial derivatives of the Lagrangian, treat the coordinates $q_j$ and generalized velocities $\dot q_j$ as independent arguments. For particles with $\mechanical{\vec r}_i=\mechanical{\vec r}_i(q_1,\ldots,q_n)$,

$$
\mechanical{\dot{\vec r}}_i
=\sum_j\frac{\partial\mechanical{\vec r}_i}{\partial q_j}\dot q_j,
\qquad
\frac{\partial\mechanical{\dot{\vec r}}_i}{\partial\dot q_k}
=\frac{\partial\mechanical{\vec r}_i}{\partial q_k}.
$$

The notes call the second identity “dot cancellation.” Differentiate the kinetic energy $\energy{T}=\tfrac12\sum_i\mechanical{m}_i(\mechanical{\dot{\vec r}}_i\cdot\mechanical{\dot{\vec r}}_i)$ with respect to $\dot q_k$.

$$
\frac{\partial\energy{T}}{\partial\dot q_k}
=\sum_i\mechanical{m}_i\mechanical{\dot{\vec r}}_i\cdot
\frac{\partial\mechanical{\dot{\vec r}}_i}{\partial\dot q_k}
=\sum_i\mechanical{\vec p}_i\cdot
\frac{\partial\mechanical{\vec r}_i}{\partial q_k}.
$$

Take the time derivative and apply the product rule.

$$
\frac{\mathrm d}{\mathrm dt}
\left(\frac{\partial\energy{T}}{\partial\dot q_k}\right)
=\sum_i\left[
\mechanical{\dot{\vec p}}_i\cdot\frac{\partial\mechanical{\vec r}_i}{\partial q_k}
+\mechanical{\vec p}_i\cdot
\frac{\mathrm d}{\mathrm dt}\left(\frac{\partial\mechanical{\vec r}_i}{\partial q_k}\right)
\right].
$$

Subtract the second sum. The result is $\sum_i\mechanical{\vec F}_i\cdot\partial\mechanical{\vec r}_i/\partial q_k$, the force combination associated with $q_k$.

### PDF page 67

#### April 24, 2015. Generalized force and Lagrange’s equation

The lecture identifies the second sum in the product rule on page 66. For the smooth coordinate transformation, differentiation gives

$$
\frac{\mathrm d}{\mathrm dt}\left(\frac{\partial\mechanical{\vec r}_i}{\partial q_k}\right)
=\frac{\partial\mechanical{\dot{\vec r}}_i}{\partial q_k},
\qquad
\frac{\partial\energy{T}}{\partial q_k}
=\sum_i\mechanical{\vec p}_i\cdot
\frac{\partial\mechanical{\dot{\vec r}}_i}{\partial q_k}.
$$

Writing the projected force as $Q_k$,

$$
\frac{\mathrm d}{\mathrm dt}
\left(\frac{\partial\energy{T}}{\partial\dot q_k}\right)
-\frac{\partial\energy{T}}{\partial q_k}
=Q_k=\sum_i\mechanical{\vec F}_i\cdot
\frac{\partial\mechanical{\vec r}_i}{\partial q_k}.
$$

For a force derived from a position potential $\energy{U}(q_1,\ldots,q_n)$, $Q_k=-\partial\energy{U}/\partial q_k$. Inserting $\energy{\mathcal L}=\energy{T}-\energy{U}$ gives

$$
\frac{\mathrm d}{\mathrm dt}\left(\frac{\partial\energy{\mathcal L}}{\partial\dot q_k}\right)
-\frac{\partial\energy{\mathcal L}}{\partial q_k}=0.
$$

#### Cyclic coordinates

A coordinate is ignorable, or cyclic, if $\partial\energy{\mathcal L}/\partial q_k=0$. Then the corresponding generalized momentum $\partial\energy{\mathcal L}/\partial\dot q_k$ is constant.

For motion in a uniform gravitational field with $\mechanical{z}$ increasing upward,

$$
\energy{\mathcal L}
=\tfrac12\mechanical{m}(\mechanical{\dot x}^2+\mechanical{\dot y}^2+\mechanical{\dot z}^2)
-\mechanical{m}\mechanical{g}\mechanical{z}.
$$

The cyclic coordinates are $\mechanical{x}$ and $\mechanical{y}$. Their velocity derivatives of the Lagrangian are $\mechanical{m}\mechanical{\dot x}$ and $\mechanical{m}\mechanical{\dot y}$, respectively.

### PDF page 68

#### Cyclic coordinates in cylindrical motion

The purely kinetic cylindrical Lagrangian is

$$
\energy{\mathcal L}
=\tfrac12\mechanical{m}(\mechanical{\dot r}^2
+\mechanical{r}^2\dot\theta^2+\mechanical{\dot z}^2).
$$

Neither $\theta$ nor $\mechanical{z}$ occurs explicitly. Their conjugate momenta $\partial\energy{\mathcal L}/\partial\dot\theta=\mechanical{m}\mechanical{r}^2\dot\theta=\mechanical{L}_z$ and $\partial\energy{\mathcal L}/\partial\mechanical{\dot z}=\mechanical{m}\mechanical{\dot z}$ are constants of the motion. The handwriting repeats the $z$ denominator on the angular-momentum line. Its expression identifies the intended angular velocity derivative.

#### Hamiltonian and conservation of energy

Define the canonically conjugate momentum $p_k=\partial\energy{\mathcal L}/\partial\dot q_k$. The Hamiltonian along the motion is

$$
\energy{\mathcal H}=\sum_k\dot q_kp_k-\energy{\mathcal L}.
$$

Use the product rule on $\dot q_kp_k$ and the chain rule on $\energy{\mathcal L}(q,\dot q,t)$. The terms in $\ddot q_k$ cancel by the definition of $p_k$.

$$
\frac{\mathrm d\energy{\mathcal H}}{\mathrm dt}
=\sum_k\dot q_k\left[
\frac{\mathrm d}{\mathrm dt}\left(\frac{\partial\energy{\mathcal L}}{\partial\dot q_k}\right)
-\frac{\partial\energy{\mathcal L}}{\partial q_k}
\right]
-\frac{\partial\energy{\mathcal L}}{\partial t}
=-\frac{\partial\energy{\mathcal L}}{\partial t}.
$$

The sum vanishes by the Euler–Lagrange equations. The Hamiltonian is constant when the Lagrangian has no explicit time dependence. For $\energy{\mathcal L}=\energy{T}-\energy{U}$ with velocity-independent $\energy{U}$ and homogeneous quadratic $\energy{T}$ in the generalized velocities, the sum $\sum_k\dot q_kp_k$ is $2\energy{T}$. Then $\energy{\mathcal H}=2\energy{T}-(\energy{T}-\energy{U})=\energy{T}+\energy{U}$.

A margin reminder says to ask Fana for Friday’s notes.

### PDF page 69

#### Kinetic energy as a quadratic form

For a time-independent coordinate transformation, substitute $\mechanical{\dot{\vec r}}_i=\sum_\ell(\partial\mechanical{\vec r}_i/\partial q_\ell)\dot q_\ell$ into the Cartesian kinetic energy. Then

$$
\energy{T}=\tfrac12\sum_{\ell,m}A_{\ell m}\dot q_\ell\dot q_m,
\qquad
A_{\ell m}=\sum_i\mechanical{m}_i
\frac{\partial\mechanical{\vec r}_i}{\partial q_\ell}\cdot
\frac{\partial\mechanical{\vec r}_i}{\partial q_m}.
$$

The dot product makes $A_{\ell m}=A_{m\ell}$. In the example with three degrees of freedom, differentiation with respect to $\dot q_2$ picks out the four off-diagonal terms involving $\dot q_2$ and the diagonal term proportional to $\dot q_2^2$.

$$
\begin{aligned}
\frac{\partial\energy{T}}{\partial\dot q_2}
&=\tfrac12[(A_{21}+A_{12})\dot q_1+2A_{22}\dot q_2
+(A_{32}+A_{23})\dot q_3]\\
&=A_{12}\dot q_1+A_{22}\dot q_2+A_{23}\dot q_3.
\end{aligned}
$$

In general only terms with $\ell=k$ or $m=k$ survive. The two contributions are equal by symmetry, giving $\partial\energy{T}/\partial\dot q_k=\sum_\ell A_{\ell k}\dot q_\ell$.

#### Time derivative of the Lagrangian

The last line expands the total derivative and begins substituting the Euler–Lagrange equation into the coordinate term.

$$
\frac{\mathrm d\energy{\mathcal L}}{\mathrm dt}
=\sum_k\left(
\frac{\partial\energy{\mathcal L}}{\partial q_k}\dot q_k+
\frac{\partial\energy{\mathcal L}}{\partial\dot q_k}\ddot q_k
\right)
+\frac{\partial\energy{\mathcal L}}{\partial t}.
$$

### PDF page 70

#### Hamilton’s equations

Substitute $p_k=\partial\energy{\mathcal L}/\partial\dot q_k$ and $\dot p_k=\partial\energy{\mathcal L}/\partial q_k$ into the total derivative.

$$
\frac{\mathrm d\energy{\mathcal L}}{\mathrm dt}
=\sum_k(\dot p_k\dot q_k+p_k\ddot q_k)+\frac{\partial\energy{\mathcal L}}{\partial t}.
$$

The sum is the derivative of $\sum_k p_k\dot q_k$. Thus the Hamiltonian $\energy{\mathcal H}=\sum_k p_k\dot q_k-\energy{\mathcal L}$ satisfies $\mathrm d\energy{\mathcal H}/\mathrm dt=-\partial\energy{\mathcal L}/\partial t$. For the quadratic kinetic energy on page 69 and a potential independent of velocity, $p_k=\sum_\ell A_{\ell k}\dot q_\ell$.

To obtain the canonical equations, take the differential of the defining expression. The terms in $\mathrm d\dot q_k$ cancel.

$$
\begin{aligned}
\mathrm d\energy{\mathcal H}
&=\sum_k\left[
\dot q_k\,\mathrm dp_k+p_k\,\mathrm d\dot q_k
-\frac{\partial\energy{\mathcal L}}{\partial q_k}\,\mathrm dq_k
-\frac{\partial\energy{\mathcal L}}{\partial\dot q_k}\,\mathrm d\dot q_k
\right]-\frac{\partial\energy{\mathcal L}}{\partial t}\,\mathrm dt\\
&=\sum_k(\dot q_k\,\mathrm dp_k-\dot p_k\,\mathrm dq_k)
-\frac{\partial\energy{\mathcal L}}{\partial t}\,\mathrm dt.
\end{aligned}
$$

Comparing the coefficients of $\mathrm dp_k$ and $\mathrm dq_k$ with those of $\mathrm d\energy{\mathcal H}(q,p,t)$ gives

$$
\frac{\partial\energy{\mathcal H}}{\partial p_k}=\dot q_k,
\qquad
\frac{\partial\energy{\mathcal H}}{\partial q_k}=-\dot p_k.
$$

#### One-dimensional free particle

For $\energy{\mathcal L}=\tfrac12\mechanical{m}\mechanical{\dot x}^2$, the momentum is $\mechanical{p}_x=\mechanical{m}\mechanical{\dot x}$. Express the Hamiltonian in terms of momentum.

$$
\energy{\mathcal H}
=\mechanical{p}_x\frac{\mechanical{p}_x}{\mechanical{m}}
-\frac{\mechanical{m}}2\left(\frac{\mechanical{p}_x}{\mechanical{m}}\right)^2
=\frac{\mechanical{p}_x^2}{2\mechanical{m}}.
$$

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
| $\signal{\omega}$ | $\unit{rad\,s^{-1}}$ | Angular frequency | Frequency in radians per second for the small oscillation. |
| $\mechanical{\vec f}$, $\mechanical{f}_{\mathrm{lin}}$, $\mechanical{f}_{\mathrm{quad}}$ | $\unit{N}$ | Drag force and term magnitudes | Drag opposes motion and has linear and quadratic speed terms. |
| $\mechanical{b}$ | $\unit{N\,s\,m^{-1}}$ | Linear drag coefficient | Multiplier of speed in the linear drag term. |
| $\mechanical{c}$ | $\unit{N\,s^2\,m^{-2}}$ | Quadratic drag coefficient | Multiplier of speed squared in the quadratic drag term. |
| $\mechanical{D}$ | $\unit{m}$ | Diameter | The diameter of the spherical projectile. |
| $\mechanical{\beta}$ | $\unit{N\,s\,m^{-2}}$ | Linear drag factor | Coefficient of diameter in the formula for linear drag. |
| $\mechanical{\gamma}$ | $\unit{N\,s^2\,m^{-4}}$ | Quadratic drag factor | Coefficient of diameter squared in the formula for quadratic drag. |
| $\mechanical{R}$, $\mechanical{R}'$ | $\unit{m}$ | Horizontal range | Horizontal distance to the landing point, with a prime used for the weak-drag result. |
| $\mechanical{k}$ | $\unit{s^{-1}}$ | Linear drag rate | Linear drag coefficient divided by the projectile mass. |
| $\mechanical{h}$ | $\unit{m}$ | Initial height | Vertical coordinate at launch in the drag calculation. |
| $T$ | $\unit{s}$ | Flight time | Positive time when the projectile returns to launch height. |
| $\mechanical{v}_{\mathrm{ex}}$ | $\unit{m\,s^{-1}}$ | Relative exhaust speed | Speed of the emitted material measured from the rocket. |
| $\mechanical{F}_{\mathrm{thrust}}$ | $\unit{N}$ | Thrust | Forward force from ejecting exhaust backward. |
| $\mechanical{\alpha}$ | $\unit{kg\,s^{-1}}$ | Mass loss rate | Positive rate at which rocket mass is expelled. |
| $\mechanical{M}$ | $\unit{kg}$ | Total mass | Sum of the masses of the particles. |
| $\mechanical{\vec R}_{\mathrm{cm}}$, $\mechanical{x}_{\mathrm{cm}}$, $\mechanical{y}_{\mathrm{cm}}$, $\mechanical{z}_{\mathrm{cm}}$ | $\unit{m}$ | Center-of-mass position and coordinates | Mass-weighted mean of the particle positions. |
| $\mechanical{L}$ | $\unit{m}$ | Length | Length of the uniform rod or total length of a candidate path. |
| $\mechanical{\lambda}$ | $\unit{kg\,m^{-1}}$ | Linear mass density | Mass per unit length of the rod. |
| $\mechanical{\sigma}$ | $\unit{kg\,m^{-2}}$ | Areal mass density | Mass per unit area of a planar body. |
| $\mechanical{A}$, $\mathrm d\mechanical{\vec A}$ | $\unit{m^2}$ | Area and directed area element | Area of a region, orbital sector, or section, and the normal area element in surface integrals. |
| $\mechanical{R}$ | $\unit{m}$ | Radius | Radius of a wire arc or cone, or the perpendicular distance to a rotation axis. |
| $\mechanical{\rho}$ | $\unit{kg\,m^{-3}}$ | Volume mass density | Mass per unit volume of the cone. |
| $\mechanical{V}$ | $\unit{m^3}$ | Volume | Region occupied by the solid body. |
| $\mechanical{H}$ | $\unit{m}$ | Cone height | Axial distance from the tip to the base. |
| $\mechanical{\vec\ell}$, $\mechanical{\vec L}$ | $\unit{kg\,m^2\,s^{-1}}$ | Angular momentum | Moment of the linear momentum about the chosen origin. |
| $\mechanical{G}$ | $\unit{N\,m^2\,kg^{-2}}$ | Gravitational constant | Coefficient in Newton’s inverse-square law of gravitation. |
| $\mechanical{I}$ | $\unit{kg\,m^2}$ | Moment of inertia | Sum or integral of mass weighted by squared distance from the rotation axis. |
| $\mechanical{\alpha}$, $\ddot\phi$, $\ddot\theta$ | $\unit{rad\,s^{-2}}$ | Angular acceleration | Rate of change of angular velocity about the rotation axis. |
| $\mechanical{k}$ | $\unit{N\,m^{-1}}$ | Spring constant | Force magnitude per unit extension or compression, or the local curvature of a position potential. |
| $\mechanical{\sigma}$ | $\unit{m}$ | Particle diameter | Length scale for separation in the pair-potential sketch. |
| $\mechanical{\ell}$ | $\unit{m}$ | Pendulum length | Distance from the pivot to the bob. |
| $\signal{T}$ | $\unit{s}$ | Oscillation period | Time for one complete cycle of the pendulum. |
| $\mechanical{b}$ | $\unit{m}$ | Cube half-width | Half the length of an edge of the cube. |
| $\electric{\vec E}$ | $\unit{V\,m^{-1}}$ | Electric field | Field whose circulation gives the signed emf. |
| $\magnetic{\vec B}$ | $\unit{T}$ | Magnetic flux density | Field integrated over the loop surface to find the magnetic flux. |
| $\magnetic{\Phi}$ | $\unit{Wb}$ | Magnetic flux | Integral of the normal magnetic field over a surface. |
| $\magnetic{\mu}_0$ | $\unit{N\,A^{-2}}$ | Vacuum permeability | Coefficient in Ampère’s law. |
| $\electric{I}_{\mathrm{enc}}$ | $\unit{A}$ | Enclosed current | Net steady current through the surface. |
| $\mechanical{k}_{\theta}$ | $\unit{J\,rad^{-2}}$ | Angular potential curvature | Second derivative of the cube’s potential energy at zero tilt. |
| $\signal{A}$ | $\unit{m}$ | Oscillation amplitude | Peak displacement of the harmonic oscillator. |
| $B_1$, $B_2$ | $\unit{m}$ | Quadrature coefficients | Coefficients of the cosine and sine components of the harmonic oscillator. |
| $\signal{\delta}$ | $\unit{rad}$ | Oscillation phase constant | Phase offset determined by the two coefficients. |
| $C$, $C_1$, $C_2$ | $\unit{m}$ | Complex displacement coefficients | Coefficients of the complex exponentials used to represent a real oscillation. |
| $\energy{U}_0$ | $\unit{J}$ | Potential energy scale | Multiplier of the dimensionless radial potential. |
| $\mechanical{R}$ | $\unit{m}$ | Radial scale | Reference length in the radial potential. |
| $\lambda$ | 1 | Radial potential parameter | Sets the equilibrium radius in multiples of the radial scale. |
| $\signal{n}$ | 1 | Refractive index | Ratio of the vacuum speed of light to the speed in the medium. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Speed of light in vacuum | Reference speed in the travel-time functional. |
| $T$ | $\unit{s}$ | Travel time | Time along a candidate path in Fermat’s principle or the brachistochrone problem. |
| $\mechanical{a}$ | $\unit{m}$ | Cycloid scale | Length parameter in the brachistochrone solution. |
| $\mechanical{k}$ | $\unit{m}$ | Polar length integral constant | Constant from the absence of explicit azimuth dependence in the arc-length integrand. |
| $\energy{\mathcal L}$ | $\unit{J}$ | Lagrangian | Kinetic energy minus potential energy for the systems considered here. |
| $\energy{S}$ | $\unit{J\,s}$ | Action | Time integral of the Lagrangian along a candidate trajectory. |
| $q_k$ | — | Generalized coordinate | Independent coordinate for a degree of freedom. Its unit depends on the coordinate choice. |
| $\dot q_k$ | — | Generalized velocity | Time derivative of a generalized coordinate. Its unit depends on the coordinate choice. |
| $Q_k$ | — | Generalized force | Force projected onto a change of generalized coordinate. Its unit is energy divided by the coordinate unit. |
| $p_k$ | — | Canonically conjugate momentum | Lagrangian derivative with respect to a generalized velocity. Its unit depends on the coordinate choice. |
| $\energy{\mathcal H}$ | $\unit{J}$ | Hamiltonian | Legendre transform of the Lagrangian with respect to the generalized velocities. |
| $A_{\ell m}$ | — | Kinetic-energy matrix coefficient | Coefficient of the product of two generalized velocities. Its unit depends on their coordinate choices. |
| $\electric{\mathcal E}$ | $\unit{V}$ | Induced emf | Electric-field circulation around the closed loop. |
