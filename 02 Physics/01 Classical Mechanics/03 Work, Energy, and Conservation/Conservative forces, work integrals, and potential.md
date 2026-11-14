---
title: "Conservative forces, work integrals, and potential"
---

> [!TLDR]
> Compare work along different paths, recover force as the negative gradient of potential energy, and examine explicit time dependence.

## Worked lecture material

The top repeats the expanded trial product from [[Rocket momentum, centers of mass, and internal torque#Comparing the range formula with scratch work|the section on Comparing the range formula with scratch work]] and crosses out its terms proportional to $\mechanical{k}^2$. The next line is incomplete.

##### Summation notation

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

##### Net force in a multiparticle system

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

The exam reminder lists definitions of scalar and vector products, a derivation or proof, and a problem. It also calls for dot notation, expansions, and summations.

##### Work–energy theorem

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

##### Work along path a

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

##### Useful series

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

##### BAC–CAB rule

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

##### Comparing both sides of the vector triple product

For the planar vectors on [[#Work along path a|the section on Work along path a]],

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

##### Scalar triple product for coplanar vectors

The notes check $\vec A\cdot(\vec B\times\vec C)=(\vec A\times\vec B)\cdot\vec C$ by writing $\vec A=(A_x,A_y,0)$, $\vec B=(B_x,B_y,0)$, and $\vec C=(C_x,C_y,0)$.

$$
\vec B\times\vec C=(B_xC_y-B_yC_x)\hat{k},
\qquad
\vec A\times\vec B=(A_xB_y-A_yB_x)\hat{k}.
$$

Each remaining dot product pairs a vector along $\hat{k}$ with one in the plane. Both scalar triple products are zero for this choice of vectors.

##### Cross product using the Levi-Civita symbol

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

##### Rocket momentum problem

The rocket sketch again shows exhaust leaving downward at relative speed $\mechanical{v}_{\mathrm{ex}}$. The margin repeats the starting expressions from the discussion, $\mechanical{F}_{\mathrm{ext}}=-\mechanical{m}\mechanical{g}$ and $\mathrm d\mechanical{m}/\mathrm dt=-\mechanical{\alpha}$. The momentum derivative equated to gravity must account for rocket and emitted fuel, as in the balance on [[Rocket momentum, centers of mass, and internal torque#Center of mass of a semicircular wire|the section on Center of mass of a semicircular wire]].

##### Integrating the rocket equation in gravity

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

##### Review of planar polar velocity

The sketch labels the horizontal and vertical projections $\mechanical{r}\cos\phi$ and $\mechanical{r}\sin\phi$. Apply the product rule to each projection, then group the terms with $\mechanical{\dot r}$ and those with $\dot\phi$.

$$
\begin{aligned}
\frac{\mathrm d\mechanical{\vec r}}{\mathrm dt}
&=\mechanical{\dot r}(\cos\phi\,\hat x+\sin\phi\,\hat y)
+\mechanical{r}\dot\phi(-\sin\phi\,\hat x+\cos\phi\,\hat y)\\
&=\mechanical{\dot r}\hat r+\mechanical{r}\dot\phi\,\hat\phi.
\end{aligned}
$$

##### Work and change in kinetic energy

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

##### Work along path b

Path $b$ in the example from [[#Work along path a|the section on Work along path a]] is the diagonal from $(0,0)$ to $(1,1)$. Along this path $\theta=45^\circ$, $\mathrm d\mechanical{\vec r}=\hat r\,\mathrm d\mechanical{r}$, and the radial coordinate runs from $0$ to $\sqrt2$ in the units of the example.

$$
\begin{aligned}
\energy{W}_b
&=\int_0^{\sqrt2}(\mechanical{y}\hat x+2\mechanical{x}\hat y)
\cdot\hat r\,\mathrm d\mechanical{r}\\
&=\int_0^{\sqrt2}
(\mechanical{y}\cos\theta+2\mechanical{x}\sin\theta)\,\mathrm d\mechanical{r}.
\end{aligned}
$$

The diagonal gives $\mechanical{x}=\mechanical{y}=\mechanical{r}/\sqrt2$. The integral from [[#Work and change in kinetic energy|the section on Work and change in kinetic energy]] therefore gives $\energy{W}_b=\int_0^{\sqrt2}(3\mechanical{r}/2)\,\mathrm d\mechanical{r}=3/2$ in the units of the example. For several forces the change in kinetic energy is the sum of their individual work integrals along the same path.

$$
\Delta\energy{T}
=\int_1^2\left(\sum_i\mechanical{\vec F}_i\right)
\cdot\mathrm d\mechanical{\vec r}
=\sum_i\int_1^2\mechanical{\vec F}_i\cdot\mathrm d\mechanical{\vec r}.
$$

##### Conservative forces and potential energy

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

##### Force as the negative gradient

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

##### Parameterizing the work integral

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

##### Local work of a conservative force

The page repeats the reference-point definition $\energy{U}(\mechanical{\vec r})=-\int_{\mechanical{\vec r}_0}^{\mechanical{\vec r}}\mechanical{\vec F}\cdot\mathrm d\mechanical{\vec r}'$ and the result $\energy{W}(1\to2)=-\Delta\energy{U}$. The second sketch divides the path from $\mechanical{\vec r}_0$ to $\mechanical{\vec r}+\mathrm d\mechanical{\vec r}$ at $\mechanical{\vec r}$. Subtracting the two reference-point work integrals gives

$$
\begin{aligned}
\energy{W}(\mechanical{\vec r}\to\mechanical{\vec r}+\mathrm d\mechanical{\vec r})
&=-\energy{U}(\mechanical{\vec r}+\mathrm d\mechanical{\vec r})
+\energy{U}(\mechanical{\vec r})\\
&=-\mathrm d\energy{U}.
\end{aligned}
$$

##### Conservative force components

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

##### Curl of a conservative force

The notes apply Stokes’s theorem and the equality of mixed partial derivatives for a smooth potential. For example,

$$
\frac{\partial\mechanical{F}_x}{\partial\mechanical{y}}
=-\frac{\partial^2\energy{U}}{\partial\mechanical{y}\partial\mechanical{x}}
=-\frac{\partial^2\energy{U}}{\partial\mechanical{x}\partial\mechanical{y}}
=\frac{\partial\mechanical{F}_y}{\partial\mechanical{x}}.
$$

Cyclic permutations give $\partial\mechanical{F}_y/\partial\mechanical{z}=\partial\mechanical{F}_z/\partial\mechanical{y}$ and $\partial\mechanical{F}_z/\partial\mechanical{x}=\partial\mechanical{F}_x/\partial\mechanical{z}$. Expanding the curl determinant as on [[#Force as the negative gradient|the section on Force as the negative gradient]], each difference of partial derivatives is zero. Hence $\nabla\times\mechanical{\vec F}=\vec 0$.

##### Example of a curl-free force

The example asks whether the force

$$
\mechanical{\vec F}
=(2\mechanical{x}\mechanical{y}-\mechanical{z}^3)\hat x
+\mechanical{x}^2\hat y-(3\mechanical{x}\mechanical{z}^2+1)\hat z
$$

is conservative, with the coefficients expressed in the units of the example. The constant in the last component changes sign in the handwritten determinant. It drops out of all the derivatives. The curl’s $x$ component is zero, the $y$ component is $-3\mechanical{z}^2-(-3\mechanical{z}^2)=0$, and the $z$ component is $2\mechanical{x}-2\mechanical{x}=0$. The field is smooth throughout space, so it is conservative.

##### Potential with explicit time dependence

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

The notes mark this lecture “absent” and give March 20 for Midterm 2. They review $\mathrm d\energy{T}=\mechanical{\vec F}\cdot\mathrm d\mechanical{\vec r}$, the path-independent work of a conservative position-dependent force, and the choice $\energy{U}(\mechanical{\vec r}_0)=0$. Stokes’s theorem is restated for a general vector field $\vec A$.

$$
\int_S(\nabla\times\vec A)\cdot\mathrm d\mechanical{\vec A}
=\oint_{\partial S}\vec A\cdot\mathrm d\mechanical{\vec r}.
$$

##### Closed paths and the curl

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

##### Degrees of freedom

A sketch marks a position vector on a winding trajectory. Another marks the unconstrained case with three degrees of freedom. The one-degree-of-freedom sketch shows a radius at angle $\theta$, as for a point at fixed distance from the origin whose angle alone can change.

##### Conservative work in one dimension

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

##### Spring potential

The spring sketch takes the equilibrium coordinate to be $\mechanical{x}_0=0$. Hooke’s law is $\mechanical{F}=-\mechanical{k}\mechanical{x}$ and gives

$$
\energy{U}(\mechanical{x})
=-\int_0^{\mechanical{x}}(-\mechanical{k}u)\,\mathrm du
=\tfrac12\mechanical{k}\mechanical{x}^2.
$$

For equilibrium at a general $\mechanical{x}_0$, the result is $\energy{U}(\mechanical{x})=\tfrac12\mechanical{k}(\mechanical{x}-\mechanical{x}_0)^2$, with the spring constant restored from the preceding equation. The graph is an upward-opening parabola with its minimum at the equilibrium coordinate. The magnitude of the force is the magnitude of the slope, and its signed value is the negative slope.

##### Pair potential and turning points

The pair-potential sketch uses particle diameter $\mechanical{\sigma}$ as the length scale. The potential is positive at short separation, crosses zero near $\mechanical{r}/\mechanical{\sigma}=1$, and has a minimum marked near $\mechanical{r}/\mechanical{\sigma}=1.120$. It tends to zero from below at large separation. The line at total energy $-0.5$ in the plotted energy units marks two turning points where $\energy{T}=0$.

![[Kyle Kabasares - Classical Mechanics - Pair potential and turning points.png|**Fig. 4** A pair potential and the two separations where the potential meets the selected total energy.]]

##### Finding elapsed time from a potential

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
| $\mechanical{g}$ | $\unit{m\,s^{-2}}$ | Gravitational acceleration | The acceleration that sets the weight of the body. |
| $t$, $\Delta t$ | $\unit{s}$ | Time and elapsed time | The time coordinate and the interval used for the average velocity. |
| $\energy{W}$ | $\unit{J}$ | Work | The line integral of force along the path. |
| $\energy{K}$, $\energy{T}$ | $\unit{J}$ | Kinetic energy | The energy associated with motion. |
| $\energy{U}$ | $\unit{J}$ | Potential energy | Energy defined from the work of a conservative force. |
| $\energy{E}$, $\energy{E}_{\mathrm T}$ | $\unit{J}$ | Total mechanical energy | The sum of kinetic and potential energy. |
| $\mechanical{\vec p}$ | $\unit{kg\,m\,s^{-1}}$ | Linear momentum | Mass times velocity. |
| $\mechanical{\vec P}$ | $\unit{kg\,m\,s^{-1}}$ | Total linear momentum | Vector sum of the individual particle momenta. |
| $\mechanical{\vec\omega}$, $\mechanical{\omega}$, $\dot\phi$, $\dot\theta$ | $\unit{rad\,s^{-1}}$ | Angular velocity | Rate of rotation of the position vector in the plane. |
| $\mechanical{k}$ | $\unit{s^{-1}}$ | Linear drag rate | Linear drag coefficient divided by the projectile mass. |
| $T$ | $\unit{s}$ | Flight time | Positive time when the projectile returns to launch height. |
| $\mechanical{v}_{\mathrm{ex}}$ | $\unit{m\,s^{-1}}$ | Relative exhaust speed | Speed of the emitted material measured from the rocket. |
| $\mechanical{\alpha}$ | $\unit{kg\,s^{-1}}$ | Mass loss rate | Positive rate at which rocket mass is expelled. |
| $\mechanical{\sigma}$ | $\unit{kg\,m^{-2}}$ | Areal mass density | Mass per unit area of a planar body. |
| $\mechanical{A}$, $\mathrm d\mechanical{\vec A}$ | $\unit{m^2}$ | Area and directed area element | Area of a region, orbital sector, or section, and the normal area element in surface integrals. |
| $\mechanical{\alpha}$, $\ddot\phi$, $\ddot\theta$ | $\unit{rad\,s^{-2}}$ | Angular acceleration | Rate of change of angular velocity about the rotation axis. |
| $\mechanical{k}$ | $\unit{N\,m^{-1}}$ | Spring constant | Force magnitude per unit extension or compression, or the local curvature of a position potential. |
| $\mechanical{\sigma}$ | $\unit{m}$ | Particle diameter | Length scale for separation in the pair-potential sketch. |
| $C$, $C_1$, $C_2$ | $\unit{m}$ | Complex displacement coefficients | Coefficients of the complex exponentials used to represent a real oscillation. |
| $T$ | $\unit{s}$ | Travel time | Time along a candidate path in Fermat’s principle or the brachistochrone problem. |
| $\mechanical{k}$ | $\unit{m}$ | Polar length integral constant | Constant from the absence of explicit azimuth dependence in the arc-length integrand. |
