---
title: "Vectors, projections, lines, and planes"
---

> [!TLDR]
> Use dot and cross products to describe projections, three-dimensional geometry, and distances between lines and planes.

## Worked lecture material

##### Calculus in three dimensions

The topics are integration, differentiation, and visualization in three dimensions.

![[Kyle Kabasares - Calculus III - Vector Calculus - Two and three dimensional coordinates.png|**Fig. 1** Cartesian coordinates in two and three dimensions, with $P=(1,2,4)$ and its projection $Q=(1,2,0)$ onto the $xy$-plane.]]

Find the distances from the origin to $P$ and $Q$. For $Q$, the distance is $\sqrt{1^2+2^2}=\sqrt5$. For $P$, it is $\sqrt{1^2+2^2+4^2}=\sqrt{21}$.

In general, the distance from the origin to $(x,y,z)$ is $d=\sqrt{x^2+y^2+z^2}$. For two points $(x_1,y_1,z_1)$ and $(x_2,y_2,z_2)$, the distance is

$$
d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}.
$$

##### Spheres, cylinders, planes, and lines

A sphere of radius $r$ centered at $(h,j,k)$ has equation

$$
(x-h)^2+(y-j)^2+(z-k)^2=r^2.
$$

**1.** The equation $\sqrt{x^2+y^2+z^2}=3$ is equivalent to $x^2+y^2+z^2=9$. The points lie on the sphere of radius $3$ centered at the origin.

![[Kyle Kabasares - Calculus III - Vector Calculus - Sphere at the origin.png|**Fig. 2** A sphere centered where the three coordinate axes meet.]]

**2.** The equation $(x-1)^2+(y+2)^2+(z-3)^2=4$ describes a sphere of radius $2$ centered at $(1,-2,3)$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Translated sphere.png|**Fig. 3** A sphere whose center is displaced from the origin.]]

**3.** In $x^2+y^2=9$, $z$ is arbitrary. A circle of radius $3$ in the $xy$-plane extends along the $z$ direction to form a cylinder.

![[Kyle Kabasares - Calculus III - Vector Calculus - Circular cylinder and trace.png|**Fig. 4** A circular trace of radius $3$ and the cylinder formed by repeating it at every height.]]

**4.** The equation $z=2$ fixes the height and allows arbitrary $x$ and $y$, giving a plane parallel to the $xy$-plane.

![[Kyle Kabasares - Calculus III - Vector Calculus - Horizontal plane.png|**Fig. 5** The plane $z=2$.]]

**5.** The equation $x=2$ gives a plane parallel to the $yz$-plane.

![[Kyle Kabasares - Calculus III - Vector Calculus - Vertical plane.png|**Fig. 6** The plane $x=2$.]]

**6.** The simultaneous equations $x=2$ and $y=1$ leave $z$ free and give a line parallel to the $z$-axis.

![[Kyle Kabasares - Calculus III - Vector Calculus - Vertical line.png|**Fig. 7** A line with two fixed coordinates and one free coordinate.]]

##### Vectors

A nonzero vector has magnitude and direction. A scalar is a single number. Translating both ends of a directed segment preserves the vector. Changing the direction of the segment changes the vector, even if the length stays the same.

![[Kyle Kabasares - Calculus III - Vector Calculus - Vector translation and rotation.png|**Fig. 8** Three segments of length $10$. The first two represent the same vector, while the last points in a different direction.]]

The points $P_1=(x_1,y_1,z_1)$ and $P_2=(x_2,y_2,z_2)$ define a displacement vector with components
$\overrightarrow{P_1P_2}=\langle x_2-x_1,y_2-y_1,z_2-z_1\rangle$. For $P=(2,2,1)$ and $Q=(0,4,2)$, subtract the starting point from the endpoint:

$$
\overrightarrow{PQ}=\langle 0-2,4-2,2-1\rangle=\langle-2,2,1\rangle.
$$

##### Vector operations

For $\mathbf v=\langle v_1,v_2,v_3\rangle$ and $c\in\mathbb R$, scalar multiplication gives $c\mathbf v=\langle cv_1,cv_2,cv_3\rangle$. The page uses $c=2$ as an example.

For $\mathbf w=\langle w_1,w_2,w_3\rangle$, vector addition gives

$$
\mathbf v+\mathbf w=\langle v_1+w_1,v_2+w_2,v_3+w_3\rangle.
$$

##### The Cartesian basis

The vectors

$$
\hat{\mathbf i}=\langle1,0,0\rangle,\qquad
\hat{\mathbf j}=\langle0,1,0\rangle,\qquad
\hat{\mathbf k}=\langle0,0,1\rangle
$$

form an orthonormal basis. Each has length one, and each pair is perpendicular.

![[Kyle Kabasares - Calculus III - Vector Calculus - Cartesian basis vectors.png|**Fig. 9** The unit vectors point along the positive coordinate axes.]]

For example,

$$
\mathbf v=\langle3,-1,4\rangle
=3\langle1,0,0\rangle-\langle0,1,0\rangle+4\langle0,0,1\rangle
=3\hat{\mathbf i}-\hat{\mathbf j}+4\hat{\mathbf k}.
$$

##### Geometry and magnitude of vectors

The vector $-\mathbf v$ reverses the direction of $\mathbf v$. Add vectors by placing them head to tail. Subtraction satisfies $\mathbf w-\mathbf v=\mathbf w+(-\mathbf v)$. Positive scaling preserves direction, and negative scaling reverses it.

![[Kyle Kabasares - Calculus III - Vector Calculus - Vector operations as arrows.png|**Fig. 10** Negation, addition, subtraction, and scaling of directed segments, including $2\mathbf v$ and $-\mathbf v/3$.]]

For $\mathbf v=\langle v_1,v_2,v_3\rangle$,

$$
\|\mathbf v\|=\sqrt{v_1^2+v_2^2+v_3^2},\qquad
\|c\mathbf v\|=\sqrt{(cv_1)^2+(cv_2)^2+(cv_3)^2}=|c|\|\mathbf v\|.
$$

The final handwritten line drops the absolute value around $c$. The square root gives $|c|$, including for the negative scaling in the sketch.

A **unit vector** has length one. The unit vector in the direction of a nonzero $\mathbf v$ is $\mathbf u=\mathbf v/\|\mathbf v\|$. For $\mathbf v=2\hat{\mathbf i}+7\hat{\mathbf j}-\hat{\mathbf k}$,

$$
\|\mathbf v\|=\sqrt{2^2+7^2+(-1)^2}=\sqrt{54},\qquad
\mathbf u=\frac{\langle2,7,-1\rangle}{\sqrt{54}},\qquad
\|\mathbf u\|=1.
$$

##### Dot product

The dot product, also called the scalar product or inner product here, returns a scalar. For $\mathbf v=\langle v_1,v_2,v_3\rangle$ and $\mathbf w=\langle w_1,w_2,w_3\rangle$,

$$
\mathbf v\cdot\mathbf w=v_1w_1+v_2w_2+v_3w_3.
$$

For $\mathbf v=\langle1,e^t,e^{-t}\rangle$ and $\mathbf w=e^t\hat{\mathbf i}+3\hat{\mathbf j}+e^t\hat{\mathbf k}$, the result is $e^t+3e^t+1=1+4e^t$.

1. $\mathbf a\cdot\mathbf b=\mathbf b\cdot\mathbf a$ by commutativity.
2. For a scalar $s$, $(s\mathbf a)\cdot\mathbf b=\mathbf a\cdot(s\mathbf b)=s(\mathbf a\cdot\mathbf b)$.
3. $\mathbf a\cdot\mathbf a=a_1^2+a_2^2+a_3^2=\|\mathbf a\|^2$.
4. $(\mathbf a+\mathbf b)\cdot\mathbf c=\mathbf a\cdot\mathbf c+\mathbf b\cdot\mathbf c$.
5. $\mathbf a\cdot\mathbf 0=\langle a_1,a_2,a_3\rangle\cdot\langle0,0,0\rangle=0$.

##### Relating the dot product to the angle

Let $\theta$ be the angle between nonzero vectors $\mathbf a$ and $\mathbf b$. To prove $\mathbf a\cdot\mathbf b=\|\mathbf a\|\|\mathbf b\|\cos\theta$, expand the squared length of the third side:

$$
\begin{aligned}
\|\mathbf a-\mathbf b\|^2
&=(\mathbf a-\mathbf b)\cdot(\mathbf a-\mathbf b)\\
&=\|\mathbf a\|^2+\|\mathbf b\|^2-2\mathbf a\cdot\mathbf b.
\end{aligned}
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Dot product triangle.png|**Fig. 11** The angle $\theta$ lies between $\mathbf a$ and $\mathbf b$. A perpendicular of height $h$ divides the base into $\mathbf b_1$ and $\mathbf b_2$ in the acute-angle sketch.]]

The acute-angle sketch gives $\mathbf b=\mathbf b_1+\mathbf b_2$, $\|\mathbf b_1\|=\|\mathbf a\|\cos\theta$, and $\mathbf b_2=\mathbf b-\mathbf b_1$. The signed scalar projection extends this construction to obtuse angles.

The right triangle in the preceding sketch has height $h=\|\mathbf a\|\sin\theta$ and signed horizontal difference $\|\mathbf b\|-\|\mathbf a\|\cos\theta$. The Pythagorean theorem gives

$$
\begin{aligned}
\|\mathbf a-\mathbf b\|^2
&=\|\mathbf a\|^2\sin^2\theta+(\|\mathbf b\|-\|\mathbf a\|\cos\theta)^2\\
&=\|\mathbf a\|^2+\|\mathbf b\|^2-2\|\mathbf a\|\|\mathbf b\|\cos\theta.
\end{aligned}
$$

The handwritten expansion appears to omit the square on one cosine. Comparing with the dot-product expansion gives

$$
\mathbf a\cdot\mathbf b=\|\mathbf a\|\|\mathbf b\|\cos\theta.
$$

When two nonzero vectors are perpendicular, $\theta=90^\circ$ and their dot product is zero.

##### Examples

For $\mathbf a=\langle4,1,2\rangle$ and $\mathbf b=\langle3,0,-1\rangle$, the dot product is $4\cdot3+0-2=10$. The lengths are $\|\mathbf a\|=\sqrt{21}$ and $\|\mathbf b\|=\sqrt{10}$, so $\cos\theta=10/(\sqrt{21}\sqrt{10})$. The written vector appears to end in $+1$. The worked dot product uses $-1$, which gives the recorded value. The literal $+1$ would instead give a dot product of $14$.

For $\mathbf a=\langle1,t,t\rangle$ and $\mathbf b=\langle3,1,-2\rangle$, find the $t$ that makes the vectors perpendicular. Set $\mathbf a\cdot\mathbf b=3+t-2t=3-t=0$. This gives $t=3$ and $\mathbf a=\langle1,3,3\rangle$.

##### Scalar and vector projection

> [!note]
> To get the vector projection, multiply the scalar projection by the unit vector in the direction onto which the shadow is cast.

For $\mathbf b\ne\mathbf0$, the scalar projection of $\mathbf a$ onto $\mathbf b$ is its signed component along $\mathbf b$. When $\mathbf a\ne\mathbf0$ and $\theta$ is the angle between the vectors,

$$
\operatorname{comp}_{\mathbf b}\mathbf a
=\|\mathbf a\|\cos\theta
=\frac{\mathbf a\cdot\mathbf b}{\|\mathbf b\|}.
$$

In the acute-angle sketch, the scalar projection also equals the length of the vector projection. For an obtuse angle the scalar projection is negative. The vector projection is

$$
\operatorname{proj}_{\mathbf b}\mathbf a
=\left(\frac{\mathbf a\cdot\mathbf b}{\|\mathbf b\|}\right)
\frac{\mathbf b}{\|\mathbf b\|}
=\frac{\mathbf a\cdot\mathbf b}{\|\mathbf b\|^2}\mathbf b.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Vector projection as a shadow.png|**Fig. 12** A perpendicular from the tip of $\mathbf a$ gives its projection $\mathbf b_1$ along $\mathbf b$.]]

For $\mathbf a=\langle1,2\rangle$ and $\mathbf b=\langle3,1\rangle$, the scalar projection is $5/\sqrt{10}$. The vector projection is $(5/10)\langle3,1\rangle=\langle3/2,1/2\rangle$.

##### Dot product review

Recall $\mathbf a\cdot\mathbf b=\|\mathbf a\|\|\mathbf b\|\cos\theta$. For perpendicular vectors the result is $0$. For parallel vectors pointing in the same direction, $\theta=0$ and the result is $\|\mathbf a\|\|\mathbf b\|$. For antiparallel vectors, $\theta=180^\circ$ and the result is $-\|\mathbf a\|\|\mathbf b\|$.

For $\mathbf a=\langle2,-1,2\rangle$ and $\mathbf b=\langle0,3,1\rangle$, $\mathbf a\cdot\mathbf b=-1$ and $\|\mathbf b\|=\sqrt{10}$. The scalar projection onto $\mathbf b$ is $-1/\sqrt{10}$, and the vector projection is

$$
-\frac1{10}\langle0,3,1\rangle=\left\langle0,-\frac3{10},-\frac1{10}\right\rangle.
$$

##### Cross product

The cross product $\mathbf v\times\mathbf w=\mathbf z$ gives a vector. Its algebraic properties include:

1. $\mathbf a\times\mathbf b=-\mathbf b\times\mathbf a$. In particular, $\mathbf w\times\mathbf v=-\mathbf z$.
2. $(s\mathbf a)\times\mathbf b=\mathbf a\times(s\mathbf b)=s(\mathbf a\times\mathbf b)$ for any scalar $s$.
3. $\mathbf a\times\mathbf a=\mathbf0$.
4. $(\mathbf a+\mathbf b)\times\mathbf c=\mathbf a\times\mathbf c+\mathbf b\times\mathbf c$.

The result is orthogonal to both inputs. When the cross product is nonzero, the right-hand rule gives its direction. If $\theta$ is the angle between nonzero $\mathbf v$ and $\mathbf w$, its magnitude is the area of the parallelogram generated by the inputs:

$$
\|\mathbf v\times\mathbf w\|=\|\mathbf v\|\|\mathbf w\|\sin\theta.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Cross product orientation.png|**Fig. 13** Reversing the order of the vectors reverses the direction of their cross product.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Parallelogram base and height.png|**Fig. 14** The parallelogram has base $\|\mathbf v\|$ and height $h=\|\mathbf w\|\sin\theta$.]]

##### Computing the cross product

For $\mathbf v=\langle v_x,v_y,v_z\rangle$ and $\mathbf w=\langle w_x,w_y,w_z\rangle$,

$$
\begin{aligned}
\mathbf v\times\mathbf w
&=\begin{vmatrix}
\hat{\mathbf i}&\hat{\mathbf j}&\hat{\mathbf k}\\
v_x&v_y&v_z\\
w_x&w_y&w_z
\end{vmatrix}\\
&=(v_yw_z-v_zw_y)\hat{\mathbf i}
+(v_zw_x-v_xw_z)\hat{\mathbf j}
+(v_xw_y-v_yw_x)\hat{\mathbf k}.
\end{aligned}
$$

Expand along the first row with signs $+,-,+$. In a $2\times2$ determinant, multiply the upper-left entry by the lower-right entry and subtract the other diagonal product:

$$
\begin{vmatrix}a_1&a_2\\b_1&b_2\end{vmatrix}=a_1b_2-a_2b_1.
$$

##### Finding a perpendicular vector

Take $P=(1,2,-1)$, $Q=(3,5,0)$, and $R=(0,2,1)$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Triangle for a normal vector.png|**Fig. 15** The sides from $P$ to $Q$ and from $P$ to $R$ span the plane of the triangle.]]

Then $\overrightarrow{PQ}=\langle2,3,1\rangle$ and $\overrightarrow{PR}=\langle-1,0,2\rangle$. Their cross product is $\mathbf z=\langle6,-5,3\rangle$. The short basis-vector line omits the $3$ before $\hat{\mathbf k}$, which is present in the component form and follows from the determinant. To check perpendicularity,

$$
\mathbf z\cdot\overrightarrow{PQ}=12-15+3=0,\qquad
\mathbf z\cdot\overrightarrow{PR}=-6+6=0.
$$

##### Scalar triple product

The scalar triple product is the determinant

$$
\mathbf a\cdot(\mathbf b\times\mathbf c)
=\begin{vmatrix}
a_1&a_2&a_3\\
b_1&b_2&b_3\\
c_1&c_2&c_3
\end{vmatrix}.
$$

The second row is the vector $\mathbf b$, so its final entry is $b_3$, even though the handwritten entry resembles $c_2$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Parallelepiped.png|**Fig. 16** The base is spanned by $\mathbf b$ and $\mathbf c$. The component of $\mathbf a$ along the normal gives the signed height.]]

When $\mathbf b\times\mathbf c\ne\mathbf0$, let $\theta$ be its angle with $\mathbf a$. The base area is $\|\mathbf b\times\mathbf c\|$, and the signed height is $\|\mathbf a\|\cos\theta$. Their product is the signed volume. The ordinary volume is $|\mathbf a\cdot(\mathbf b\times\mathbf c)|$.

##### Lines and planes

A point $P$ and a nonzero direction $\mathbf v$ determine a line, analogous to point-slope form in two dimensions. If another point $Q$ is given, take $\mathbf v=\overrightarrow{PQ}=Q-P$. Add real multiples of $\mathbf v$ to the starting point:

$$
\mathbf r(t)=P+t\mathbf v
=\langle P_x+tv_x,P_y+tv_y,P_z+tv_z\rangle,\qquad t\in\mathbb R.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Line through two points.png|**Fig. 17** The line passes through $P$ at $t=0$, the midpoint $P'$ at $t=1/2$, and $Q$ at $t=1$.]]

For $P=(-1,-2,-3)$ and $Q=(2,0,1)$, $\mathbf v=\langle3,2,4\rangle$, so

$$
\mathbf r_1(t)=\langle-1+3t,-2+2t,-3+4t\rangle.
$$

##### Intersection of two lines

Consider

$$
\mathbf r_1(t)=\langle-1+3t,-2+2t,-3+4t\rangle,\qquad
\mathbf r_2(s)=\langle3+s,2s,-1-s\rangle.
$$

The second direction is $\mathbf w=\langle1,2,-1\rangle$. To find an intersection, first match the $x$ and $y$ coordinates. The $x$ equation gives $s=3t-4$. The $y$ equation gives $-2+2t=2s=6t-8$, so $t=3/2$ and $s=1/2$. At these parameters, $z_1=-3+4(3/2)=3$ and $z_2=-1-1/2=-3/2$. The different $z$ coordinates rule out an intersection.

##### Parallel and skew lines

The directions of parallel lines are nonzero scalar multiples of each other. For example, $\mathbf v_1=\langle1,2,3\rangle$ and $\mathbf v_2=\langle-2,-4,-6\rangle$ are opposite in direction. The parametric example instead uses the positive multiple:

$$
\mathbf r_1(t)=(3,2,4)+t\langle1,2,3\rangle,\qquad
\mathbf r_2(s)=(1,1,1)+s\langle2,4,6\rangle.
$$

In either orientation the cross product is $\langle0,0,0\rangle$, and for the two positive directions its magnitude is $\|\mathbf v_1\|\|\mathbf v_2\|\sin0=0$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Parallel line directions.png|**Fig. 18** Direction vectors $\mathbf v$ and $2\mathbf v$ on parallel lines through different points.]]

Lines are **skew** when they have different directions and no intersection.

##### Symmetric equations

For $\mathbf r(t)=P+t\mathbf v$ with all direction components nonzero, solve the three coordinate equations for $t$:

$$
\frac{x-P_x}{v_x}=\frac{y-P_y}{v_y}=\frac{z-P_z}{v_z}=t.
$$

The handwritten denominators show just $x,y,z$. The coordinate equations immediately to their left identify them as the corresponding components of $\mathbf v$.

##### Equation of a plane

Let the plane contain $P=(P_x,P_y,P_z)$ and have a nonzero normal vector $\mathbf n=\langle n_x,n_y,n_z\rangle$. A point $R=(x,y,z)$ lies on the plane when the vector $\overrightarrow{PR}=\langle x-P_x,y-P_y,z-P_z\rangle$ is orthogonal to $\mathbf n$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Plane and normal.png|**Fig. 19** The normal $\mathbf n$ is perpendicular to every vector in the plane, including $\overrightarrow{PR}$.]]

The dot-product equation expands to

$$
n_x(x-P_x)+n_y(y-P_y)+n_z(z-P_z)=0.
$$

With $a=n_x$, $b=n_y$, $c=n_z$, and $d=-(n_xP_x+n_yP_y+n_zP_z)$, this becomes $ax+by+cz+d=0$.

##### Distances to a plane

For $P=(2,0,1)$ and $\mathbf n=\langle3,2,-1\rangle$, the plane $\pi$ has equation

$$
3(x-2)+2y-(z-1)=0.
$$

For $P_1=(3,1,6)$, substituting into the left side gives $3(3-2)+2(1)-(6-1)=3+2-5=0$. Thus $P_1$ lies on the plane and its distance is zero.

For $P_2=(4,1,6)$, project $\overrightarrow{PP_2}$ onto $\mathbf n$. The signed scalar projection is $\overrightarrow{PP_2}\cdot\mathbf n/\|\mathbf n\|$, and its absolute value gives the distance.

![[Kyle Kabasares - Calculus III - Vector Calculus - Point above a plane.png|**Fig. 20** The component of the vector from $P$ to $P_2$ along the normal determines the distance to the plane.]]

For $P_2=(4,1,6)$, $\overrightarrow{PP_2}=\langle2,1,5\rangle$. The distance to the plane from the preceding page is

$$
\frac{|\langle2,1,5\rangle\cdot\langle3,2,-1\rangle|}{\sqrt{3^2+2^2+(-1)^2}}
=\frac{6+2-5}{\sqrt{14}}
=\frac3{\sqrt{14}}.
$$

##### Distance from a line to a plane

If the line meets the plane or lies in it, the distance is zero. If the line is parallel to and disjoint from the plane, use any point on the line to compute the distance.

For $\mathbf r(t)=(1,3,2)+t\langle1,2,-1\rangle$ and the plane $y+2z=5$, the direction $\mathbf v=\langle1,2,-1\rangle$ and the normal $\mathbf n=\langle0,1,2\rangle$ satisfy $\mathbf n\cdot\mathbf v=0+2-2=0$. Thus the direction is parallel to the plane.

![[Kyle Kabasares - Calculus III - Vector Calculus - Line parallel to a plane.png|**Fig. 21** The normal is perpendicular to the direction of the line.]]

At $t=0$ the line gives $B=(1,3,2)$. Take $A=(0,5,0)$ on the plane. Then $\overrightarrow{AB}=\langle1,-2,2\rangle$ and

$$
d=\frac{|\overrightarrow{AB}\cdot\mathbf n|}{\|\mathbf n\|}
=\frac{|-2+4|}{\sqrt5}
=\frac2{\sqrt5}.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Projection from a line to a plane.png|**Fig. 22** Projecting $\overrightarrow{AB}$ onto the normal gives the perpendicular distance.]]

For the second line, $x=1-2t$, $y=-1-3t$, and $z=2-2t$. The value at $t=0$ is $(1,-1,2)$ by the coordinate equations, although a handwritten line gives a different point. Substituting into $y+2z=5$ gives $-1-3t+4-4t=5$, or $t=-2/7$. This line intersects the plane, so its distance is zero.

![[Kyle Kabasares - Calculus III - Vector Calculus - Line intersecting a plane.png|**Fig. 23** The line meets the plane at parameter $t=-2/7$.]]

##### Distance between two lines

Distances are nonnegative. Intersecting lines have distance zero. For example,

$$
\mathbf r_1(t)=\langle1+5t,3+2t,8+2t\rangle,\qquad
\mathbf r_2(s)=\langle1+8s,3+7s,8+s\rangle
$$

meet at $(1,3,8)$ when $t=s=0$.

Consider instead

$$
\mathbf r_1(t)=\langle1+t,1+6t,2t\rangle,\qquad
\mathbf r_2(s)=\langle1+2s,5+15s,-2+6s\rangle.
$$

Their direction vectors $\mathbf v_1=\langle1,6,2\rangle$ and $\mathbf v_2=\langle2,15,6\rangle$ are linearly independent. Matching the first two coordinates gives $t=-8/3$ and $s=-4/3$, at which the third coordinates differ. The lines are skew.

Place each line in a plane parallel to both directions. A common normal is

$$
\mathbf n=\mathbf v_1\times\mathbf v_2
=\begin{vmatrix}
\hat{\mathbf i}&\hat{\mathbf j}&\hat{\mathbf k}\\
1&6&2\\
2&15&6
\end{vmatrix}
=\langle6,-2,3\rangle.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Distance between skew lines.png|**Fig. 24** The two parallel planes contain the two skew lines. The common normal gives the direction in which to measure the distance.]]

Take $P=(1,1,0)$ and $Q=(1,5,-2)$ at parameter zero on the two lines. Then $\overrightarrow{PQ}=\langle0,4,-2\rangle$ and $\|\mathbf n\|=\sqrt{36+4+9}=7$. The distance is

$$
d=\frac{|\overrightarrow{PQ}\cdot\mathbf n|}{\|\mathbf n\|}
=\frac{|-8-6|}{7}=2.
$$

##### Distance between parallel planes

Parallel planes have distance zero when they coincide and a positive distance otherwise. Consider

$$
2x-y+5z=4,\qquad -4x+2y-10z=5.
$$

Their normals $\mathbf n_1=\langle2,-1,5\rangle$ and $\mathbf n_2=\langle-4,2,-10\rangle$ are scalar multiples. Choose any point on each plane, such as $A=(2,0,0)$ and $B=(0,0,-1/2)$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Parallel planes.png|**Fig. 25** A common perpendicular gives the distance between the planes.]]

The connecting vector is $\overrightarrow{AB}=\langle-2,0,-1/2\rangle$. Taking its scalar projection along $\mathbf n_2$ in absolute value gives

$$
d=\frac{|\langle-2,0,-1/2\rangle\cdot\langle-4,2,-10\rangle|}{\sqrt{120}}
=\frac{8+5}{\sqrt{120}}
=\frac{13}{\sqrt{120}}.
$$

##### Angle between two planes

For the planes $\pi\colon 3x+2y-z-5=0$ and $\chi\colon 2x-y+2z-3=0$, take the normals $\mathbf n_\pi=\langle3,2,-1\rangle$ and $\mathbf n_\chi=\langle2,-1,2\rangle$. Their dot product is $6-2-2=2$. The acute angle between the planes satisfies

$$
\cos\theta=\frac{|\mathbf n_\pi\cdot\mathbf n_\chi|}{\|\mathbf n_\pi\|\|\mathbf n_\chi\|}
=\frac2{\sqrt{14}\sqrt9}.
$$

The planes intersect in a line.

![[Kyle Kabasares - Calculus III - Vector Calculus - Angle between planes.png|**Fig. 26** The two planes intersect along a line, and the angle can be found from their normals.]]

##### Cylinders and quadric surfaces

The notes refer to Stewart, Section 12.6, page 854. The two-dimensional review begins with the ellipse $x^2/a^2+y^2/b^2=1$. It is a circle when $a^2=b^2$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Ellipse trace.png|**Fig. 27** An ellipse centered at the origin.]]

The equation $x^2/a^2-y^2/b^2=1$ gives a hyperbola.

![[Kyle Kabasares - Calculus III - Vector Calculus - Hyperbola trace.png|**Fig. 28** The two branches of a hyperbola opening along the $x$-axis.]]

## Source

Kyle Kabasares, *Calculus III - Vector Calculus (Math 23, UC Merced 2014)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\lVert\mechanical{\mathbf v}\rVert$ | $\unit{m\,s^{-1}}$ | Speed | Magnitude of the velocity vector. |
