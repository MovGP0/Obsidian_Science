---
title: "Calculus III – Vector Calculus (Math 23, UC Merced 2014)"
---

> [!TLDR]
> These lectures cover vectors and geometry in three dimensions, multivariable differentiation and optimization, multiple integrals and coordinate changes, and line and surface integrals. Worked examples apply Green’s theorem and the divergence theorem.

Source notes by Kyle Kabasares. [[Calculus III - Vector Calculus (Math 23, UC Merced 2014).pdf|Original PDF]].

Transcribed PDF pages 1–84 of 84.

### PDF page 1

#### January 22, 2014. Section 12.1. Calculus in three dimensions

The topics are integration, differentiation, and visualization in three dimensions.

![[Kyle Kabasares - Calculus III - Vector Calculus - Two and three dimensional coordinates.png|**Fig. 1** Cartesian coordinates in two and three dimensions, with $P=(1,2,4)$ and its projection $Q=(1,2,0)$ onto the $xy$-plane.]]

Find the distances from the origin to $P$ and $Q$. For $Q$, the distance is $\sqrt{1^2+2^2}=\sqrt5$. For $P$, it is $\sqrt{1^2+2^2+4^2}=\sqrt{21}$.

In general, the distance from the origin to $(x,y,z)$ is $d=\sqrt{x^2+y^2+z^2}$. For two points $(x_1,y_1,z_1)$ and $(x_2,y_2,z_2)$, the distance is

$$
d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}.
$$

### PDF page 2

#### Spheres, cylinders, planes, and lines

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

### PDF page 3

#### January 24, 2014. Section 12.2. Vectors

A nonzero vector has magnitude and direction. A scalar is a single number. Translating both ends of a directed segment preserves the vector. Changing the direction of the segment changes the vector, even if the length stays the same.

![[Kyle Kabasares - Calculus III - Vector Calculus - Vector translation and rotation.png|**Fig. 8** Three segments of length $10$. The first two represent the same vector, while the last points in a different direction.]]

The points $P_1=(x_1,y_1,z_1)$ and $P_2=(x_2,y_2,z_2)$ define a displacement vector with components
$\overrightarrow{P_1P_2}=\langle x_2-x_1,y_2-y_1,z_2-z_1\rangle$. For $P=(2,2,1)$ and $Q=(0,4,2)$, subtract the starting point from the endpoint:

$$
\overrightarrow{PQ}=\langle 0-2,4-2,2-1\rangle=\langle-2,2,1\rangle.
$$

#### Vector operations

For $\mathbf v=\langle v_1,v_2,v_3\rangle$ and $c\in\mathbb R$, scalar multiplication gives $c\mathbf v=\langle cv_1,cv_2,cv_3\rangle$. The page uses $c=2$ as an example.

For $\mathbf w=\langle w_1,w_2,w_3\rangle$, vector addition gives

$$
\mathbf v+\mathbf w=\langle v_1+w_1,v_2+w_2,v_3+w_3\rangle.
$$

### PDF page 4

#### The Cartesian basis

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

#### Geometry and magnitude of vectors

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

### PDF page 5

#### Section 12.3. Dot product

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

#### Relating the dot product to the angle

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

### PDF page 6

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

#### Examples

For $\mathbf a=\langle4,1,2\rangle$ and $\mathbf b=\langle3,0,-1\rangle$, the dot product is $4\cdot3+0-2=10$. The lengths are $\|\mathbf a\|=\sqrt{21}$ and $\|\mathbf b\|=\sqrt{10}$, so $\cos\theta=10/(\sqrt{21}\sqrt{10})$. The written vector appears to end in $+1$. The worked dot product uses $-1$, which gives the recorded value. The literal $+1$ would instead give a dot product of $14$.

For $\mathbf a=\langle1,t,t\rangle$ and $\mathbf b=\langle3,1,-2\rangle$, find the $t$ that makes the vectors perpendicular. Set $\mathbf a\cdot\mathbf b=3+t-2t=3-t=0$. This gives $t=3$ and $\mathbf a=\langle1,3,3\rangle$.

### PDF page 7

#### Scalar and vector projection

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

#### January 29, 2014. Dot product review

Recall $\mathbf a\cdot\mathbf b=\|\mathbf a\|\|\mathbf b\|\cos\theta$. For perpendicular vectors the result is $0$. For parallel vectors pointing in the same direction, $\theta=0$ and the result is $\|\mathbf a\|\|\mathbf b\|$. For antiparallel vectors, $\theta=180^\circ$ and the result is $-\|\mathbf a\|\|\mathbf b\|$.

### PDF page 8

For $\mathbf a=\langle2,-1,2\rangle$ and $\mathbf b=\langle0,3,1\rangle$, $\mathbf a\cdot\mathbf b=-1$ and $\|\mathbf b\|=\sqrt{10}$. The scalar projection onto $\mathbf b$ is $-1/\sqrt{10}$, and the vector projection is

$$
-\frac1{10}\langle0,3,1\rangle=\left\langle0,-\frac3{10},-\frac1{10}\right\rangle.
$$

#### Section 12.4. Cross product

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

### PDF page 9

![[Kyle Kabasares - Calculus III - Vector Calculus - Parallelogram base and height.png|**Fig. 14** The parallelogram has base $\|\mathbf v\|$ and height $h=\|\mathbf w\|\sin\theta$.]]

#### Computing the cross product

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

#### Finding a perpendicular vector

Take $P=(1,2,-1)$, $Q=(3,5,0)$, and $R=(0,2,1)$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Triangle for a normal vector.png|**Fig. 15** The sides from $P$ to $Q$ and from $P$ to $R$ span the plane of the triangle.]]

Then $\overrightarrow{PQ}=\langle2,3,1\rangle$ and $\overrightarrow{PR}=\langle-1,0,2\rangle$. Their cross product is $\mathbf z=\langle6,-5,3\rangle$. The short basis-vector line omits the $3$ before $\hat{\mathbf k}$, which is present in the component form and follows from the determinant. To check perpendicularity,

$$
\mathbf z\cdot\overrightarrow{PQ}=12-15+3=0,\qquad
\mathbf z\cdot\overrightarrow{PR}=-6+6=0.
$$

### PDF page 10

#### Scalar triple product

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

#### Section 12.5. Lines and planes

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

### PDF page 11

#### Intersection of two lines

Consider

$$
\mathbf r_1(t)=\langle-1+3t,-2+2t,-3+4t\rangle,\qquad
\mathbf r_2(s)=\langle3+s,2s,-1-s\rangle.
$$

The second direction is $\mathbf w=\langle1,2,-1\rangle$. To find an intersection, first match the $x$ and $y$ coordinates. The $x$ equation gives $s=3t-4$. The $y$ equation gives $-2+2t=2s=6t-8$, so $t=3/2$ and $s=1/2$. At these parameters, $z_1=-3+4(3/2)=3$ and $z_2=-1-1/2=-3/2$. The different $z$ coordinates rule out an intersection.

#### Parallel and skew lines

The directions of parallel lines are nonzero scalar multiples of each other. For example, $\mathbf v_1=\langle1,2,3\rangle$ and $\mathbf v_2=\langle-2,-4,-6\rangle$ are opposite in direction. The parametric example instead uses the positive multiple:

$$
\mathbf r_1(t)=(3,2,4)+t\langle1,2,3\rangle,\qquad
\mathbf r_2(s)=(1,1,1)+s\langle2,4,6\rangle.
$$

In either orientation the cross product is $\langle0,0,0\rangle$, and for the two positive directions its magnitude is $\|\mathbf v_1\|\|\mathbf v_2\|\sin0=0$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Parallel line directions.png|**Fig. 18** Direction vectors $\mathbf v$ and $2\mathbf v$ on parallel lines through different points.]]

Lines are **skew** when they have different directions and no intersection.

#### Symmetric equations

For $\mathbf r(t)=P+t\mathbf v$ with all direction components nonzero, solve the three coordinate equations for $t$:

$$
\frac{x-P_x}{v_x}=\frac{y-P_y}{v_y}=\frac{z-P_z}{v_z}=t.
$$

The handwritten denominators show just $x,y,z$. The coordinate equations immediately to their left identify them as the corresponding components of $\mathbf v$.

### PDF page 12

#### Equation of a plane

Let the plane contain $P=(P_x,P_y,P_z)$ and have a nonzero normal vector $\mathbf n=\langle n_x,n_y,n_z\rangle$. A point $R=(x,y,z)$ lies on the plane when the vector $\overrightarrow{PR}=\langle x-P_x,y-P_y,z-P_z\rangle$ is orthogonal to $\mathbf n$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Plane and normal.png|**Fig. 19** The normal $\mathbf n$ is perpendicular to every vector in the plane, including $\overrightarrow{PR}$.]]

The dot-product equation expands to

$$
n_x(x-P_x)+n_y(y-P_y)+n_z(z-P_z)=0.
$$

With $a=n_x$, $b=n_y$, $c=n_z$, and $d=-(n_xP_x+n_yP_y+n_zP_z)$, this becomes $ax+by+cz+d=0$.

#### February 3, 2014. Distances to a plane

For $P=(2,0,1)$ and $\mathbf n=\langle3,2,-1\rangle$, the plane $\pi$ has equation

$$
3(x-2)+2y-(z-1)=0.
$$

For $P_1=(3,1,6)$, substituting into the left side gives $3(3-2)+2(1)-(6-1)=3+2-5=0$. Thus $P_1$ lies on the plane and its distance is zero.

For $P_2=(4,1,6)$, project $\overrightarrow{PP_2}$ onto $\mathbf n$. The signed scalar projection is $\overrightarrow{PP_2}\cdot\mathbf n/\|\mathbf n\|$, and its absolute value gives the distance.

![[Kyle Kabasares - Calculus III - Vector Calculus - Point above a plane.png|**Fig. 20** The component of the vector from $P$ to $P_2$ along the normal determines the distance to the plane.]]

### PDF page 13

For $P_2=(4,1,6)$, $\overrightarrow{PP_2}=\langle2,1,5\rangle$. The distance to the plane from the preceding page is

$$
\frac{|\langle2,1,5\rangle\cdot\langle3,2,-1\rangle|}{\sqrt{3^2+2^2+(-1)^2}}
=\frac{6+2-5}{\sqrt{14}}
=\frac3{\sqrt{14}}.
$$

#### Distance from a line to a plane

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

### PDF page 14

#### Distance between two lines

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

### PDF page 15

#### Distance between parallel planes

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

#### Angle between two planes

For the planes $\pi\colon 3x+2y-z-5=0$ and $\chi\colon 2x-y+2z-3=0$, take the normals $\mathbf n_\pi=\langle3,2,-1\rangle$ and $\mathbf n_\chi=\langle2,-1,2\rangle$. Their dot product is $6-2-2=2$. The acute angle between the planes satisfies

$$
\cos\theta=\frac{|\mathbf n_\pi\cdot\mathbf n_\chi|}{\|\mathbf n_\pi\|\|\mathbf n_\chi\|}
=\frac2{\sqrt{14}\sqrt9}.
$$

The planes intersect in a line.

![[Kyle Kabasares - Calculus III - Vector Calculus - Angle between planes.png|**Fig. 26** The two planes intersect along a line, and the angle can be found from their normals.]]

#### February 7, 2014. Section 12.6. Cylinders and quadric surfaces

The notes refer to Stewart, Section 12.6, page 854. The two-dimensional review begins with the ellipse $x^2/a^2+y^2/b^2=1$. It is a circle when $a^2=b^2$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Ellipse trace.png|**Fig. 27** An ellipse centered at the origin.]]

The equation $x^2/a^2-y^2/b^2=1$ gives a hyperbola.

![[Kyle Kabasares - Calculus III - Vector Calculus - Hyperbola trace.png|**Fig. 28** The two branches of a hyperbola opening along the $x$-axis.]]

### PDF page 16

The hyperbola $y^2/b^2-x^2/a^2=1$ opens along the $y$-axis. The equations $y=c_1x^2$ and $x=c_2y^2$ give parabolas with different axes.

![[Kyle Kabasares - Calculus III - Vector Calculus - Vertical hyperbola.png|**Fig. 29** The hyperbola opens upward and downward.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Parabola orientations.png|**Fig. 30** For positive coefficients, $y=c_1x^2$ opens upward and $x=c_2y^2$ opens to the right.]]

#### Explicit and implicit graphs

In $y=f(x)$, the input $x$ lies in the domain and the output $y$ lies in the range. In three dimensions $z=f(x,y)$ gives a height at each input pair. Equivalently, the graph is the zero set of $g(x,y,z)=f(x,y)-z$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Graph of one variable.png|**Fig. 31** The value $y_0=f(x_0)$ is read from a graph in the plane.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Graph of two variables.png|**Fig. 32** The value $z_0=f(x_0,y_0)$ lies over the input pair $(x_0,y_0)$.]]

A plane has form $ax+by+cz+d=0$ with normal $\langle a,b,c\rangle$. A quadric has the general equation

$$
Ax^2+By^2+Cz^2+Dxy+Eyz+Fxz+Gx+Hy+Iz+J=0.
$$

The notes associate mixed terms with rotation and linear terms with translation. The axis-aligned form without mixed or linear terms is $Ax^2+By^2+Cz^2+J=0$.

#### Example 0. Parabolic cylinder

For $z=x^2$, the $y$ coordinate is arbitrary. The parabola repeats along the $y$ direction and forms a trough.

![[Kyle Kabasares - Calculus III - Vector Calculus - Parabolic cylinder.png|**Fig. 33** The parabolic cylinder $z=x^2$ extends along the $y$ direction. The sketch marks a trace at $y=4$.]]

#### Example 1. Elliptic cylinder

In $x^2+z^2/4=1$, $y$ is free. Fixing one variable gives a **trace**. The vertical trace at $y=0$ is an ellipse with $(x,z)$ intercepts $(\pm1,0)$ and $(0,\pm2)$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Elliptic cylinder vertical trace.png|**Fig. 34** The $xz$-plane trace has semiaxes $1$ along $x$ and $2$ along $z$.]]

At a fixed height $z$, the traces are lines parallel to the $y$-axis when $|z|<2$. The sketch labels the pairs at $z=0$ and $z=1$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Elliptic cylinder level traces.png|**Fig. 35** The horizontal traces at $z=1$ are closer to the $y$-axis than those at $z=0$.]]

### PDF page 17

![[Kyle Kabasares - Calculus III - Vector Calculus - Elliptic cylinder.png|**Fig. 36** The elliptic cylinder repeats the same elliptical cross section along its axis.]]

#### Example 2. Ellipsoid

For the axis-aligned quadric, the coefficients $A,B,C$ are nonzero and have the same sign in this example:

$$
\frac{x^2}{4}+\frac{y^2}{9}+z^2=1.
$$

The coordinate-plane traces follow by setting one variable to zero.

![[Kyle Kabasares - Calculus III - Vector Calculus - Ellipsoid yz trace.png|**Fig. 37** At $x=0$, the ellipse $y^2/9+z^2=1$ has semiaxes $3$ and $1$.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Ellipsoid xz trace.png|**Fig. 38** At $y=0$, the ellipse $x^2/4+z^2=1$ has semiaxes $2$ and $1$.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Ellipsoid xy trace.png|**Fig. 39** At $z=0$, the ellipse $x^2/4+y^2/9=1$ has semiaxes $2$ and $3$.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Ellipsoid.png|**Fig. 40** The completed ellipsoid with its coordinate traces indicated.]]

#### February 10, 2014. Example 4. A quadric with mixed signs

The coefficients of $x^2$, $y^2$, and $z^2$ are all nonzero, with two negative and one positive:

$$
z^2-x^2-y^2=1.
$$

At $x=0$, the trace is $z^2-y^2=1$. At $y=0$, the trace is $z^2-x^2=1$. Both are hyperbolas opening along $z$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Hyperboloid yz trace.png|**Fig. 41** The trace at $x=0$ has two branches separated along the $z$-axis.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Hyperboloid xz trace.png|**Fig. 42** The trace at $y=0$ has the same form in the $xz$-plane.]]

The horizontal traces satisfy $x^2+y^2=z^2-1$. There is no real trace at $z=0$. At $z=1$ there is a single point, and at $z=2$ and $z=3$ the traces are circles with squared radii $3$ and $8$, respectively.

### PDF page 18

![[Kyle Kabasares - Calculus III - Vector Calculus - Two sheet hyperboloid.png|**Fig. 43** The surface $z^2-x^2-y^2=1$ has two separate sheets beginning at $z=\pm1$.]]

#### One-sheet hyperboloid

Changing the right side to $-1$ gives $z^2-x^2-y^2=-1$. The traces in the vertical coordinate planes are hyperbolas. For a fixed $z$, rearrange to $x^2+y^2=1+z^2$. At $z=0$, the trace is a circle of radius $1$. At $z=\pm1$, the trace is a circle of radius $\sqrt2$. A few intermediate handwritten equalities appear to lose the minus sign on the right. The trace radii and original equation use $-1$.

![[Kyle Kabasares - Calculus III - Vector Calculus - One sheet hyperboloid.png|**Fig. 44** The one-sheet hyperboloid is connected and has its smallest circular section at $z=0$.]]

#### Cone

With zero constant term, $z^2-x^2-y^2=0$, or $z^2=x^2+y^2$. The trace at $x=0$ consists of $z=\pm y$. The trace at $y=0$ consists of $z=\pm x$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Cone yz trace.png|**Fig. 45** The lines $z=\pm y$ form the trace in the $yz$-plane.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Cone xz trace.png|**Fig. 46** The lines $z=\pm x$ form the trace in the $xz$-plane.]]

At $z=0$, the trace is the single point $x=y=0$. At $z=1$, it is the unit circle. At $z=2$, it has radius $2$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Cone horizontal traces.png|**Fig. 47** Horizontal traces are concentric circles in the projected view, with radius $|z|$.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Double cone.png|**Fig. 48** The two parts of the cone meet at the origin.]]

### PDF page 19

#### Elliptic paraboloid

With no $z^2$ term and positive coefficients on $x^2$ and $y^2$, one example is $z=x^2+4y^2$. Its $x$-traces at $x=0,1$ are $z=4y^2$ and $z=1+4y^2$. Its $y$-traces at $y=0,1$ are $z=x^2$ and $z=x^2+4$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Elliptic paraboloid x traces.png|**Fig. 49** Fixing $x$ gives upward-opening parabolas in the $yz$ coordinates.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Elliptic paraboloid y traces.png|**Fig. 50** Fixing $y$ gives upward-opening parabolas in the $xz$ coordinates. The trace at $y=1$ lies above the one at $y=0$.]]

At $z=0$, $x^2+4y^2=0$ gives the origin. At $z=1$ and $z=2$, the equations $x^2+4y^2=1$ and $x^2+4y^2=2$ give ellipses.

![[Kyle Kabasares - Calculus III - Vector Calculus - Elliptic paraboloid level traces.png|**Fig. 51** The elliptical traces grow as the height increases.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Elliptic paraboloid.png|**Fig. 52** The elliptic paraboloid forms a bowl above the origin.]]

#### Hyperbolic paraboloid

For $z=x^2-4y^2$, setting $x=0$ or $x=1$ gives $z=-4y^2$ or $z=1-4y^2$. The handwritten $x=0$ line appears to omit the minus sign, but the original equation and the downward-opening sketch give $-4y^2$. At $y=0$ and $y=1$, the equations are $z=x^2$ and $z=x^2-4$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Saddle x traces.png|**Fig. 53** The traces at fixed $x$ open downward.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Saddle y traces.png|**Fig. 54** The traces at fixed $y$ open upward.]]

At $z=0$, $x^2=4y^2$ gives $x=\pm2y$. At $z=1$, $x^2-4y^2=1$ is a hyperbola opening along $x$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Saddle level traces.png|**Fig. 55** Horizontal traces include two lines through the origin at height zero and hyperbolas at positive heights.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Hyperbolic paraboloid.png|**Fig. 56** The saddle curves upward in one coordinate direction and downward in the other.]]

### PDF page 20

#### February 12, 2014. Sections 13.1–13.2. Vector-valued functions and space curves

A vector-valued function maps a scalar parameter to a vector:

$$
t\longmapsto \mathbf r(t)=\langle x(t),y(t),z(t)\rangle.
$$

The input is in $\mathbb R$ and the output is in $\mathbb R^3$. In a physical trajectory the parameter can be time $\mechanical{t}$, and examples of time-dependent vectors are position $\mechanical{\mathbf r}(\mechanical{t})$, velocity $\mechanical{\mathbf v}(\mechanical{t})$, and force $\mechanical{\mathbf F}(\mechanical{t})$.

For a line, $\mathbf r(t)=\langle2,3,0\rangle+t\langle1,-2,1\rangle$ gives $x(t)=2+t$, $y(t)=3-2t$, and $z(t)=t$.

#### Parametric examples

**1.** With $x(t)=t$ and $y(t)=t^2$, eliminating $t$ gives $y=x^2$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Parametric parabola.png|**Fig. 57** The curve with coordinates $x=t$ and $y=t^2$ is a parabola.]]

**2.** With $x(t)=\cos t$ and $y(t)=3\sin t$, use $\cos^2t+\sin^2t=1$ to get $x^2+(y/3)^2=1$. The handwritten sketch marks $t$ as an angle. It is the angle in the scaled coordinates $(x,y/3)$, while the polar angle of $(x,y)$ generally differs.

![[Kyle Kabasares - Calculus III - Vector Calculus - Parametric ellipse.png|**Fig. 58** The ellipse has semiaxes $1$ and $3$.]]

**3.** With $x(t)=\cos t$, $y(t)=t$, and $z(t)=\sin t$, the curve lies on $x^2+z^2=1$. At $t=0$ it passes through $(1,0,0)$. As $t$ increases, the point circles the $y$-axis while advancing along it.

![[Kyle Kabasares - Calculus III - Vector Calculus - Helix around the y axis.png|**Fig. 59** The unit-radius helix starts at $(1,0,0)$.]]

### PDF page 21

#### More examples of space curves

For $\mathbf r(t)=\langle t,t^2,t^3\rangle$, the points at $t=-1,0,1,2$ are $(-1,1,-1)$, $(0,0,0)$, $(1,1,1)$, and $(2,4,8)$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Cubic space curve.png|**Fig. 60** Arrows indicate increasing parameter on the curve $\langle t,t^2,t^3\rangle$.]]

A space curve can arise as the intersection of two surfaces. The cylinder $y^2+z^2=16$ and plane $x+y=1$ give

$$
y(t)=4\cos t,\qquad z(t)=4\sin t,\qquad x(t)=1-4\cos t.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Plane cutting a cylinder.png|**Fig. 61** The cylinder and the plane meet along a curve. Parametrize the circular coordinates first, then recover $x$ from the plane.]]

For the cone $z^2=x^2+y^2$ and the plane $z=(x-6)/3$, substitute for $z$ and complete the square:

$$
\frac{(x-6)^2}{9}=x^2+y^2
\quad\Longrightarrow\quad
\frac89\left(x+\frac34\right)^2+y^2=\frac92.
$$

The projected ellipse has $x$ semiaxis $\sqrt{(9/2)/(8/9)}=9/4$ and $y$ semiaxis $3/\sqrt2$. Using the ellipse and the plane gives

$$
x(t)=-\frac34+\frac94\cos t,\qquad
y(t)=\frac3{\sqrt2}\sin t,\qquad
z(t)=-\frac94+\frac34\cos t.
$$

The handwritten $x$-coefficient appears to multiply by $\sqrt{8/9}$. The ellipse equation requires division by that factor. The constant in $z(t)$ then follows from the plane equation.

![[Kyle Kabasares - Calculus III - Vector Calculus - Plane cutting a cone.png|**Fig. 62** The handwritten construction intersects a plane and a double cone. For the stated equations the ellipse lies on the lower sheet.]]

#### Calculus of vector-valued functions

Limits, derivatives, and integrals are taken component by component:

$$
\begin{aligned}
\lim_{t\to t_0}\mathbf r(t)
&=\left\langle\lim_{t\to t_0}x(t),\lim_{t\to t_0}y(t),\lim_{t\to t_0}z(t)\right\rangle,\\
\mathbf r'(t)&=\langle x'(t),y'(t),z'(t)\rangle,\\
\int\mathbf r(t)\,dt
&=\left\langle\int x(t)\,dt,\int y(t)\,dt,\int z(t)\,dt\right\rangle.
\end{aligned}
$$

For a physical trajectory, the derivative of position is velocity. For differentiable vector functions $\mathbf u,\mathbf v$, a differentiable scalar function $f$, and a constant $c$,

$$
\begin{aligned}
(\mathbf u\pm\mathbf v)'&=\mathbf u'\pm\mathbf v',\\
(c\mathbf u)'&=c\mathbf u',\\
(\mathbf u\circ f)'(t)&=\mathbf u'(f(t))f'(t),\\
(f\mathbf u)'&=f\mathbf u'+f'\mathbf u,\\
(\mathbf u\times\mathbf v)'&=\mathbf u'\times\mathbf v+\mathbf u\times\mathbf v',\\
(\mathbf u\cdot\mathbf v)'&=\mathbf u'\cdot\mathbf v+\mathbf u\cdot\mathbf v'.
\end{aligned}
$$

The cross-product derivative is a vector, and the dot-product derivative is a scalar.

### PDF page 22

#### Circular satellite orbit

Let $\mechanical{\mathbf r}(\mechanical{t})$ be the satellite's position relative to Earth's center and let $\mechanical{R}$ be the constant orbital radius. Then $\mechanical{\mathbf r}\cdot\mechanical{\mathbf r}=\mechanical{R}^2$. Differentiation gives

$$
\frac{d}{d\mechanical{t}}
\left(\mechanical{\mathbf r}\cdot\mechanical{\mathbf r}\right)
=\mechanical{\mathbf r}'\cdot\mechanical{\mathbf r}
+\mechanical{\mathbf r}\cdot\mechanical{\mathbf r}'
=2\mechanical{\mathbf r}\cdot\mechanical{\mathbf v}=0.
$$

The position and velocity are perpendicular. The sketch also marks $\mechanical{\mathbf v}\perp\mechanical{\mathbf a}$, as holds for uniform circular motion.

![[Kyle Kabasares - Calculus III - Vector Calculus - Circular satellite orbit.png|**Fig. 63** The radius points toward the satellite and the velocity is tangent to the circular orbit.]]

#### Constant-acceleration kinematics

For constant acceleration in one dimension, $d\mechanical{v}/d\mechanical{t}=\mechanical{a}$. Integrate from time $0$ to $\mechanical{t}$ and from initial velocity $\mechanical{v}_0$ to $\mechanical{v}$ to obtain $\mechanical{v}-\mechanical{v}_0=\mechanical{a}\mechanical{t}$, or

$$
\mechanical{v}=\mechanical{v}_0+\mechanical{a}\mechanical{t}.
$$

#### Section 13.3. Arc length and kinematics

Velocity is the instantaneous rate of change of position:

$$
\mechanical{\mathbf v}(\mechanical{t})
=\frac{d\mechanical{\mathbf r}}{d\mechanical{t}}
=\lim_{h\to0}
\frac{\mechanical{\mathbf r}(\mechanical{t}+h)-\mechanical{\mathbf r}(\mechanical{t})}{h}.
$$

The magnitude $\|\mechanical{\mathbf v}\|$ is the speed. At a point of nonzero velocity the unit tangent is $\mathbf T=\mechanical{\mathbf r}'/\|\mechanical{\mathbf r}'\|$. It has length one and points in the direction of motion.

Acceleration is $\mechanical{\mathbf a}=\mechanical{\mathbf r}''=d\mechanical{\mathbf v}/d\mechanical{t}$. Integration recovers the position and velocity increments:

$$
\mechanical{\mathbf r}(\mechanical{t})-\mechanical{\mathbf r}(0)
=\int_0^{\mechanical{t}}\mechanical{\mathbf v}(s)\,ds,\qquad
\mechanical{\mathbf v}(\mechanical{t})-\mechanical{\mathbf v}(0)
=\int_0^{\mechanical{t}}\mechanical{\mathbf a}(s)\,ds.
$$

The handwritten formulas omit the starting values, which is valid when the corresponding starting vector is zero.

### PDF page 23

#### Velocity and acceleration on a helix

For $\mechanical{\mathbf r}(t)=\langle\cos t,t,\sin t\rangle$ in numerical coordinates,

$$
\mechanical{\mathbf v}(t)=\mechanical{\mathbf r}'(t)=\langle-\sin t,1,\cos t\rangle,\qquad
\mechanical{\mathbf a}(t)=\mechanical{\mathbf r}''(t)=\langle-\cos t,0,-\sin t\rangle.
$$

At $t=0$, the position is $\langle1,0,0\rangle$, the tangent velocity is $\langle0,1,1\rangle$, and the radially inward acceleration is $\langle-1,0,0\rangle$. The speed is $\sqrt{\sin^2t+1+\cos^2t}=\sqrt2$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Helix tangent and acceleration.png|**Fig. 64** At the starting point of the helix, the velocity is tangent and the acceleration points inward toward the axis.]]

#### Arc length

Arc length is the distance along a curve. An ant moving along a string travels approximately $\Delta s=\|\mathbf r'(t)\|\Delta t$ in a short parameter interval $\Delta t$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Arc length along a string.png|**Fig. 65** The distance traveled by the ant follows the string's curve.]]

Add these distances over a partition of $[0,t]$ and take a limit:

$$
s(t)=\lim_{n\to\infty}\sum_{i=1}^n\|\mathbf r'(t_i^*)\|\Delta t_i
=\int_0^t\|\mathbf r'(\tau)\|\,d\tau
=\int_0^t\sqrt{x'(\tau)^2+y'(\tau)^2+z'(\tau)^2}\,d\tau.
$$

By the fundamental theorem of calculus, if $f(t)=\int_0^t g(x)\,dx$ and $g$ is continuous, then $f'(t)=g(t)$. Therefore $ds/dt=\|\mathbf r'(t)\|$.

One can use $s$ instead of $t$ as the curve parameter. In this parameterization $\mathbf r(1)$ is the position reached after traveling one unit of distance. By the chain rule, where $\mathbf r'(t)\ne\mathbf0$,

$$
\frac{d\mathbf r}{ds}
=\frac{d\mathbf r}{dt}\frac{dt}{ds}
=\frac{\mathbf r'(t)}{\|\mathbf r'(t)\|}
=\mathbf T(t).
$$

The rate $d\mathbf T/ds$ measures change of the unit tangent. The scalar curvature is its magnitude, $\kappa=\|d\mathbf T/ds\|$. The handwritten formula on this page omits the magnitude bars.

### PDF page 24

#### Cylindrical coordinates

In the plane, polar coordinates $(r,\theta)$ give $x=r\cos\theta$ and $y=r\sin\theta$. When $x\ne0$, $\tan\theta=y/x$, with the quadrant chosen from the signs of $x$ and $y$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Polar coordinates.png|**Fig. 66** The radius $r$ and azimuth $\theta$ locate a point in the plane.]]

Add the unchanged vertical coordinate $z$ to obtain cylindrical coordinates $(r,\theta,z)$ with $r\ge0$ and $0\le\theta\le2\pi$. The angles $0$ and $2\pi$ give the same direction.

![[Kyle Kabasares - Calculus III - Vector Calculus - Cylindrical coordinates.png|**Fig. 67** At fixed $r$ and $z$, varying $\theta$ traces a horizontal circle.]]

| Equation | Surface |
| --- | --- |
| $r=2$ | Circular cylinder extending along the full $z$-axis. |
| $\theta=\pi/4$ | Vertical half-plane with arbitrary $z$ and $r\ge0$. |
| $z=r$ | Upper half of a cone. |
| $z=r^2=x^2+y^2$ | Circular paraboloid. |

![[Kyle Kabasares - Calculus III - Vector Calculus - Fixed cylindrical radius.png|**Fig. 68** Fixing $r=2$ gives a cylinder of radius $2$.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Fixed azimuth half plane.png|**Fig. 69** Fixing the azimuth and taking $r\ge0$ gives one side of a vertical plane through the axis.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Cone from cylindrical coordinates.png|**Fig. 70** For $z=r$, the horizontal trace has radius equal to its nonnegative height.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Paraboloid from cylindrical coordinates.png|**Fig. 71** For $z=r^2$, the height grows quadratically with the cylindrical radius.]]

#### Spherical coordinates

Use $(\rho,\theta,\phi)$, where $\rho=\sqrt{x^2+y^2+z^2}$, $\theta$ is the same azimuth, and $\phi$ is the angle from the positive $z$-axis. The ranges are $\rho\ge0$, $0\le\theta\le2\pi$, and $0\le\phi\le\pi$. The right triangle gives $z=\rho\cos\phi$ and $r=\rho\sin\phi$. Therefore

$$
x=\rho\sin\phi\cos\theta,\qquad
y=\rho\sin\phi\sin\theta,\qquad
z=\rho\cos\phi.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Spherical coordinates.png|**Fig. 72** The radius $\rho$ makes angle $\phi$ with the positive $z$-axis. Its projection into the horizontal plane has radius $r$ and azimuth $\theta$.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Spherical coordinate triangle.png|**Fig. 73** The vertical and horizontal components of $\rho$ are $z$ and $r$.]]

### PDF page 25

#### Surfaces in spherical coordinates

The equation $\rho=2$ is a sphere of radius $2$ centered at the origin. With $\phi=\pi/4$, all azimuths $0\le\theta\le2\pi$ and all $\rho\ge0$ give the upper cone $z=r$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Fixed spherical radius.png|**Fig. 74** Fixing $\rho=2$ gives a sphere.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Fixed spherical inclination.png|**Fig. 75** Fixing $\phi=\pi/4$ gives a cone with its axis along positive $z$.]]

#### Section 13.4. Cycloid of a rolling circle

A circle of radius $\mechanical{R}$ rolls to the left without slipping with constant angular speed $\mechanical{\omega}>0$. A marked point $P$ starts at $(\mechanical{R},\mechanical{R})$ on the right side of the circle. After a rotation through $\mechanical{\theta}=\mechanical{\omega}\mechanical{t}$, the center has moved a distance $\mechanical{d}=\mechanical{R}\mechanical{\theta}$ to the left.

![[Kyle Kabasares - Calculus III - Vector Calculus - Cycloid rolling circle.png|**Fig. 76** The center stays at height $\mechanical{R}$ as the circle rolls left. The point $P$ rotates around the moving center.]]

The position and velocity components are

$$
\begin{aligned}
\mechanical{x}(\mechanical{t})&=-\mechanical{R}\mechanical{\omega}\mechanical{t}+\mechanical{R}\cos(\mechanical{\omega}\mechanical{t}),\\
\mechanical{y}(\mechanical{t})&=\mechanical{R}+\mechanical{R}\sin(\mechanical{\omega}\mechanical{t}),\\
\mechanical{x}'(\mechanical{t})&=-\mechanical{R}\mechanical{\omega}\bigl(1+\sin(\mechanical{\omega}\mechanical{t})\bigr),\\
\mechanical{y}'(\mechanical{t})&=\mechanical{R}\mechanical{\omega}\cos(\mechanical{\omega}\mechanical{t}).
\end{aligned}
$$

Using $\sin^2\mechanical{\theta}+\cos^2\mechanical{\theta}=1$, the speed is

$$
\|\mechanical{\mathbf r}'\|
=\mechanical{R}\mechanical{\omega}\sqrt{2(1+\sin\mechanical{\theta})}.
$$

At the top, $\mechanical{\theta}=\pi/2$ gives $2\mechanical{R}\mechanical{\omega}$. The handwritten value appears to keep an extra $\sqrt2$. At the bottom, $\mechanical{\theta}=-\pi/2$ modulo $2\pi$ gives zero speed.

Since $(\sin(\mechanical{\theta}/2)+\cos(\mechanical{\theta}/2))^2=1+\sin\mechanical{\theta}$, the square root gives an absolute value. On the initial interval $0\le\mechanical{\theta}\le3\pi/2$, the expression inside is nonnegative. Integrating the speed there gives the handwritten arc-length formula:

$$
\mechanical{s}(\mechanical{t})
=2\sqrt2\,\mechanical{R}\left[1+\sin\left(\frac{\mechanical{\omega}\mechanical{t}}{2}\right)
-\cos\left(\frac{\mechanical{\omega}\mechanical{t}}{2}\right)\right].
$$

The acceleration follows by differentiating the velocity:

$$
\mechanical{\mathbf a}(\mechanical{t})
=\left\langle
-\mechanical{\omega}^2\mechanical{R}\cos(\mechanical{\omega}\mechanical{t}),
-\mechanical{\omega}^2\mechanical{R}\sin(\mechanical{\omega}\mechanical{t})
\right\rangle.
$$

### PDF page 26

#### Projectile motion with a three-dimensional launch direction

The initial speed is $\quantity{240}{m\,s^{-1}}$. The calculation uses azimuth $\mechanical{\theta}=3\pi/4$ measured from east toward north and inclination $\mechanical{\phi}=\pi/3$ from the positive vertical. The compass sketch instead marks $\pi/3$ from west, which would give an azimuth of $2\pi/3$. The component calculation below follows the written azimuth $3\pi/4$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Projectile compass direction.png|**Fig. 77** The horizontal launch direction points northwest. The angle in the sketch and the angle used in the component calculation differ.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Projectile inclination.png|**Fig. 78** The inclination is $\pi/3$ from the vertical.]]

Using the spherical-coordinate direction vector,

$$
\mechanical{\mathbf v}(0)=
(\quantity{240}{m\,s^{-1}})
\left\langle
\cos\left(\frac{3\pi}{4}\right)\sin\left(\frac{\pi}{3}\right),
\sin\left(\frac{3\pi}{4}\right)\sin\left(\frac{\pi}{3}\right),
\cos\left(\frac{\pi}{3}\right)
\right\rangle.
$$

The acceleration is $\langle0,0,-10\rangle$ in $\unit{m\,s^{-2}}$. With numerical time in seconds, integration gives the velocity in $\unit{m\,s^{-1}}$ and the position in $\unit{m}$:

$$
\begin{aligned}
\mechanical{\mathbf v}(t)&=\langle-60\sqrt6,60\sqrt6,120-10t\rangle,\\
\mechanical{\mathbf r}(t)&=\langle-60t\sqrt6,60t\sqrt6,120t-5t^2\rangle.
\end{aligned}
$$

The projectile starts at the origin.

#### February 21, 2014. Section 14.1. Multivariable functions

The midterm covers Chapters 12–14. A scalar function of two variables sends an input pair $(x,y)$ in a domain in $\mathbb R^2$ to a real value $z=f(x,y)$.

For $f(x,y)=\sqrt{x}+\sqrt{3-y}$, the domain is $x\ge0$ and $y\le3$. For instance $f(1,2)=2$. The handwritten shading shows a strip above the $x$-axis, but the formula permits arbitrarily negative $y$. The range is $[0,\infty)$ because $f(0,3)=0$ and $f(x,3)=\sqrt{x}$ takes all nonnegative values.

For $f(x,y)=\sqrt{y-x}\ln(x+y)$, the square root requires $y\ge x$ and the logarithm requires $y>-x$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Domain of square root and logarithm.png|**Fig. 79** The domain lies above both lines, including the allowable part of $y=x$ and excluding $y=-x$.]]

For $f(x,y)=e^{\sqrt{4-x^2-y^2}}$, the domain is the closed disk $x^2+y^2\le4$. The square root ranges from $0$ to $2$, so $1\le f(x,y)\le e^2$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Disk domain and exponential range.png|**Fig. 80** The disk has radius $2$, and the vertical range extends from $1$ to $e^2$.]]

### PDF page 27

#### Traces and contours of the exponential surface

For $f(x,y)=e^{\sqrt{4-x^2-y^2}}$, the trace at $x=0$ is $f(0,y)=e^{\sqrt{4-y^2}}$ for $|y|\le2$. The traces at $x=\pm\sqrt3$ both have $f(\pm\sqrt3,y)=e^{\sqrt{1-y^2}}$ for $|y|\le1$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Exponential surface vertical traces.png|**Fig. 81** The trace at $x=0$ is higher and wider than those at $x=\pm\sqrt3$.]]

A fixed height $z$ gives a level curve or contour. There is no level curve at $z=0$. At $z=1$, the contour is $x^2+y^2=4$. At $z=2$, taking the logarithm gives $x^2+y^2=4-(\ln2)^2$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Exponential surface contours.png|**Fig. 82** The level curve at $z=2$ lies inside the boundary circle at $z=1$.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Exponential dome.png|**Fig. 83** The graph rises from its circular boundary toward its maximum at the center.]]

#### Level curves and intercepts of a plane

For $z=-x-2y+4$, set $z=k$ and solve to get the level line $y=-x/2+(4-k)/2$. All levels have slope $-1/2$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Parallel level lines.png|**Fig. 84** The level curves of the plane are parallel lines in the $xy$-plane.]]

To find the axis intercepts, set the other two coordinates to zero. The intercepts are $(0,0,4)$, $(4,0,0)$, and $(0,2,0)$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Plane intercepts.png|**Fig. 85** The three intercepts bound the portion of the plane in the first octant.]]

#### Level surfaces

For $w=f(x,y,z)$, a fixed level $w=k$ can give a surface in three dimensions. In the example $f(x,y,z)=(x-1)^2+y^2+z^2$, the levels with $k>0$ are spheres centered at $(1,0,0)$ of radius $\sqrt{k}$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Concentric level spheres.png|**Fig. 86** Level surfaces with different positive values of $k$ share the center $(1,0,0)$.]]

### PDF page 28

#### February 24, 2014. Section 14.2. Limits and continuity

For a function of one variable, continuity at an interior point $x_0$ means $\lim_{x\to x_0}f(x)=f(x_0)$. Equivalently, the limits from the left and the right both equal $f(x_0)$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Continuity in one variable.png|**Fig. 87** Both one-sided approaches to $x_0$ give the function value at $x_0$.]]

For a function with a two-dimensional domain, the limit

$$
\lim_{(x,y)\to(x_0,y_0)}f(x,y)=L
$$

requires the same value regardless of the path through the domain. The notes refer to the $\varepsilon$–$\delta$ formulation from Math 122. To disprove a limit, it is enough to find two paths with different limiting values. For approaches to the origin, useful test paths include $y=mx$, $y=ax^2$, $x=by^2$, $x=0$, and $y=0$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Paths to a point.png|**Fig. 88** Many straight and curved paths can approach $(x_0,y_0)$.]]

Examples of functions continuous on their natural domains include polynomials such as $xy+x^3y^5$, trigonometric functions, exponentials, logarithms, noninteger powers such as $(xy)^\pi$, and rational functions. The denominator of a rational function must be nonzero.

### PDF page 29

#### Path tests and polar coordinates

First consider $f(x,y)=\log(x^2+y^2)$ away from the origin and $f(0,0)=0$. The written argument appears to omit the square on $y$, while the condition and polar substitution use $x^2+y^2=r^2$. Then $\log(r^2)\to-\infty$ as $r\to0^+$, so there is no finite limit at the origin.

![[Kyle Kabasares - Calculus III - Vector Calculus - Logarithm near the origin.png|**Fig. 89** The logarithm decreases without bound as its positive argument tends to zero.]]

For $f(x,y)=x^2/(x^2+y^2)$ off the origin and $f(0,0)=1$, approach along $y=mx$. For $x\ne0$,

$$
f(x,mx)=\frac{x^2}{x^2+m^2x^2}=\frac1{1+m^2}.
$$

The values for $m=0$ and $m=1$ differ, so the limit does not exist.

For $f(x,y)=y^4/(x^2+y^4)$ off the origin and $f(0,0)=0$, a line $y=mx$ of finite slope gives

$$
\frac{m^4x^4}{x^2+m^4x^4}
=\frac{m^4x^2}{1+m^4x^2}\longrightarrow0.
$$

Along $x=ay^2$, however,

$$
\frac{y^4}{a^2y^4+y^4}=\frac1{1+a^2}
$$

for $y\ne0$, so the limit again does not exist.

Polar coordinates offer another approach. The expression $x^2/(x^2+y^2)=\cos^2\theta$ still depends on the direction as $r\to0$. By contrast,

$$
\frac{x^4}{x^2+y^2}=r^2\cos^4\theta.
$$

This lies between $0$ and $r^2$ for all $\theta$, so its limit at the origin is $0$.

### PDF page 30

#### Office hours. Practice midterm problem 4

The projectile has numerical acceleration $\mechanical{\mathbf a}=\langle0,0,-10\rangle$ and initial velocity $\mechanical{\mathbf v}_0=\langle\mechanical{v}_{0x},\mechanical{v}_{0y},\mechanical{v}_{0z}\rangle$. The launch angles in this example are $\pi/6$ from the vertical and azimuth $5\pi/4$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Practice projectile direction.png|**Fig. 90** The sketch marks the inclination and azimuth used in the initial velocity.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Spherical coordinate components.png|**Fig. 91** The horizontal projection is $r=\rho\sin\phi$, giving $x=r\cos\theta$ and $y=r\sin\theta$. The vertical component is $z=\rho\cos\phi$.]]

In the numerical units of the exercise, the spherical components give

$$
\mechanical{\mathbf v}_0
=\left\langle
120\sin\left(\frac{\pi}{6}\right)\cos\left(\frac{5\pi}{4}\right),
120\sin\left(\frac{\pi}{6}\right)\sin\left(\frac{5\pi}{4}\right),
120\cos\left(\frac{\pi}{6}\right)
\right\rangle.
$$

Integrate the acceleration, then the velocity:

$$
\begin{aligned}
\mechanical{\mathbf v}(t)
&=\langle\mechanical{v}_{0x},\mechanical{v}_{0y},\mechanical{v}_{0z}-10t\rangle,\\
\mechanical{\mathbf r}(t)
&=\langle
\mechanical{v}_{0x}t+\mechanical{x}_0,\,
\mechanical{v}_{0y}t+\mechanical{y}_0,\,
\mechanical{v}_{0z}t-5t^2+\mechanical{z}_0
\rangle.
\end{aligned}
$$

The handwritten position line has an unclear separator after $y_0$. The three components follow from integrating the preceding velocity. The final part of the exercise calls for solving for $t$.

#### March 3, 2014. Section 14.3. Partial derivatives

For a function of one variable, $f'(x)=\lim_{h\to0}[f(x+h)-f(x)]/h$. For a function of two variables, differentiate along one coordinate while holding the other fixed:

$$
\begin{aligned}
f_x(x,b)
&=\left.\frac{\partial f}{\partial x}\right|_{y=b}
=\lim_{h\to0}\frac{f(x+h,b)-f(x,b)}h,\\
f_y(a,y)
&=\left.\frac{\partial f}{\partial y}\right|_{x=a}
=\lim_{h\to0}\frac{f(a,y+h)-f(a,y)}h.
\end{aligned}
$$

### PDF page 31

#### Partial derivatives from contours and formulas

The contour sketch shows $f(0,1)=1$ and $f(3,1)=2$. Along $y=1$, the difference quotient estimates

$$
f_x(0,1)\approx\frac{f(3,1)-f(0,1)}3=\frac{2-1}3=\frac13.
$$

The handwritten equality gives the slope over a finite interval. Without more information about the function, this slope is an estimate of the derivative.

![[Kyle Kabasares - Calculus III - Vector Calculus - Contour estimate of a partial derivative.png|**Fig. 92** Moving from $(0,1)$ to $(3,1)$ keeps $y$ fixed while crossing from level $1$ to level $2$.]]

For $f(x,y)=3x^2y^4$, holding $y$ fixed gives $f_x=6xy^4$, and holding $x$ fixed gives $f_y=12x^2y^3$.

For the hemisphere $f(x,y)=\sqrt{4-x^2-y^2}$, the partial derivatives in the interior of its domain are

$$
f_x(x,y)=\frac{-x}{\sqrt{4-x^2-y^2}},\qquad
f_y(x,y)=\frac{-y}{\sqrt{4-x^2-y^2}}.
$$

At $(1,0)$ they are $-1/\sqrt3$ and $0$, respectively.

![[Kyle Kabasares - Calculus III - Vector Calculus - Hemisphere partial derivatives.png|**Fig. 93** The point above $(1,0)$ lies on the upper hemisphere.]]

#### Section 14.4. Tangent planes and linear approximation

The tangent line to $y=f(x)$ at $x_0$ gives the linear approximation

$$
f(x)\approx f(x_0)+f'(x_0)(x-x_0).
$$

The handwritten expression repeats a term at $x_0$. The tangent line has a single constant term $f(x_0)$ and slope $f'(x_0)$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Tangent line approximation.png|**Fig. 94** The tangent line approximates the curve near the point of contact.]]

For a differentiable surface $z=f(x,y)$, put $z_0=f(x_0,y_0)$. The tangent plane is

$$
z-z_0=f_x(x_0,y_0)(x-x_0)+f_y(x_0,y_0)(y-y_0).
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Tangent plane sketch.png|**Fig. 95** The tangent plane meets the surface at the point above $(x_0,y_0)$.]]

For $f(x,y)=x^2+y^2/4$ above $(1/2,1)$, the partial derivatives are $2x$ and $y/2$, giving slopes $1$ and $1/2$ at the point. The height is $1/4+1/4=1/2$. Therefore the tangent plane is

$$
z-\frac12=\left(x-\frac12\right)+\frac12(y-1).
$$

### PDF page 32

The tangent-plane function from the preceding example is $\pi(x,y)=1/2+(x-1/2)+(y-1)/2$. It gives

$$
f(0.47,1.02)\approx\pi(0.47,1.02)
=\frac12-0.03+\frac12(0.02)=0.48.
$$

The starting value is $f(1/2,1)=0.5$. The linear change in the plane is $\Delta z_{\mathrm{lin}}=f_x\Delta x+f_y\Delta y$, with derivatives evaluated at the starting point.

#### March 5, 2014. Section 14.5. Chain rule

For $f$ depending on $r(t)$ alone, $df/dt=(df/dr)(dr/dt)$. For two inputs depending on $t$, take $B(r,s)=20r+s^2$ with $r(t)=1+t/2$ and $s(t)=2+3t^3$. Substitution gives

$$
B(r(t),s(t))=20\left(1+\frac t2\right)+(2+3t^3)^2
=24+10t+12t^3+9t^6.
$$

Differentiating this expression gives $10+36t^2+54t^5$. The same result follows directly from the chain rule:

$$
\begin{aligned}
\frac{dB}{dt}
&=\frac{\partial B}{\partial r}\frac{dr}{dt}
+\frac{\partial B}{\partial s}\frac{ds}{dt}\\
&=20\left(\frac12\right)+2(2+3t^3)(9t^2)
=10+36t^2+54t^5.
\end{aligned}
$$

In general, for $z=z(x,y)$ with $x=x(t)$ and $y=y(t)$,

$$
\frac{dz}{dt}=\frac{\partial z}{\partial x}\frac{dx}{dt}
+\frac{\partial z}{\partial y}\frac{dy}{dt}.
$$

### PDF page 33

#### Chain rule with two independent parameters

Let $B$ depend on $r(t,d)=1+d^2-4d$ and $s(t,d)=(2+3t^3)e^{dt}$. The composite function has two partial derivatives,

$$
B_t=B_r r_t+B_s s_t,\qquad B_d=B_r r_d+B_s s_d,
$$

where the left sides denote derivatives of the composite function, and $B_r,B_s$ are evaluated at $(r(t,d),s(t,d))$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Chain rule dependency paths.png|**Fig. 96** For the derivative with respect to $t$, multiply the derivatives along each path through $r$ or $s$ and add the two products.]]

For $f=f(x,y,z)$ with $x=r\cos\theta$, $y=r\sin\theta$, and $z=1-r^2$, let $F(r,\theta)$ denote the composite function. Then

$$
\begin{aligned}
F_r&=f_x x_r+f_y y_r+f_z z_r
=f_x\cos\theta+f_y\sin\theta-2rf_z,\\
F_\theta&=f_x x_\theta+f_y y_\theta+f_z z_\theta
=-rf_x\sin\theta+rf_y\cos\theta.
\end{aligned}
$$

The last term in the second line vanishes since $z_\theta=0$.

#### Implicit differentiation

Suppose $f(x,y,z)=g(x,y,z)$ along functions $x(r,\theta)$, $y(r,\theta)$, and $z(r,\theta)$. Differentiating with respect to $r$ at fixed $\theta$ gives

$$
f_x x_r+f_y y_r+f_z z_r
=g_x x_r+g_y y_r+g_z z_r.
$$

Where $f_z-g_z\ne0$, solve for

$$
z_r=\frac{g_x x_r+g_y y_r-f_x x_r-f_y y_r}{f_z-g_z}.
$$

### PDF page 34

#### March 7, 2014. Section 14.6. Directional derivatives

The partial derivatives $f_x(a,b)$ and $f_y(a,b)$ give rates of change in the positive coordinate directions. To measure the rate in another direction $\mathbf v\ne\mathbf0$, take the unit vector $\mathbf u=\mathbf v/\|\mathbf v\|=\langle u_x,u_y\rangle$. Define

$$
D_{\mathbf u}f(a,b)=
\lim_{h\to0}\frac{f(a+hu_x,b+hu_y)-f(a,b)}h.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Directional derivative surface.png|**Fig. 97** The directional derivative measures how the surface height changes along a chosen input direction.]]

If $f$ is differentiable at $(a,b)$, its linear approximation along $\mathbf u$ is

$$
f(a+hu_x,b+hu_y)=f(a,b)+h f_x(a,b)u_x+h f_y(a,b)u_y+h\varepsilon(h),
$$

where $\varepsilon(h)\to0$ as $h\to0$. Subtract $f(a,b)$, divide by $h$, and take the limit. With the **gradient** $\nabla f(a,b)=\langle f_x(a,b),f_y(a,b)\rangle$,

$$
D_{\mathbf u}f(a,b)=f_x(a,b)u_x+f_y(a,b)u_y
=\nabla f(a,b)\cdot\mathbf u.
$$

When $\nabla f\ne\mathbf0$, this is $\|\nabla f\|\cos\theta$, with $\theta$ the angle between $\nabla f$ and $\mathbf u$.

#### Example

For $f(x,y)=x\cos y$ at $(2,\pi/4)$ in the direction $\mathbf v=\langle-3,4\rangle$, the unit vector is $\langle-3/5,4/5\rangle$. Since $f_x=\cos y$ and $f_y=-x\sin y$, the partial derivatives at the point are $\sqrt2/2$ and $-\sqrt2$. Hence

$$
D_{\mathbf u}f(2,\pi/4)
=-\frac35\frac{\sqrt2}{2}-\frac45\sqrt2
=-\frac{11\sqrt2}{10}.
$$

### PDF page 35

#### Properties of the gradient

At a point where $f$ is differentiable, $\nabla f$ is a vector. When it is nonzero, it points in the direction of steepest increase, where the angle in $D_{\mathbf u}f=\|\nabla f\|\cos\theta$ is $0$ and the cosine is $1$. The opposite direction $-\nabla f$ gives the steepest decrease, with $\cos\pi=-1$. The gradient is perpendicular to any regular level curve through the point.

![[Kyle Kabasares - Calculus III - Vector Calculus - Gradients normal to contours.png|**Fig. 98** The gradient arrows are perpendicular to the contours. The direction of increase depends on the level values.]]

For the hemisphere $f(x,y)=\sqrt{4-x^2-y^2}$,

$$
\nabla f(x,y)=\frac{\langle-x,-y\rangle}{\sqrt{4-x^2-y^2}}
$$

in the interior of its disk. Away from the center, this points radially inward toward greater height.

![[Kyle Kabasares - Calculus III - Vector Calculus - Hemisphere gradient directions.png|**Fig. 99** The arrows in the horizontal plane point toward the center beneath the top of the hemisphere.]]

#### The gradient as the normal to a level surface

For $g(x,y,z)=k$, the gradient $\nabla g=\langle g_x,g_y,g_z\rangle$ is normal to the level surface wherever it is nonzero. In particular, $z=f(x,y)$ is the level $g=0$ of $g(x,y,z)=z-f(x,y)$, and $\nabla g=\langle-f_x,-f_y,1\rangle$. At $(a,b,f(a,b))$, the tangent plane is

$$
-f_x(a,b)(x-a)-f_y(a,b)(y-b)+z-f(a,b)=0.
$$

The second difference in the handwritten formula appears to use $x-b$. The second gradient component multiplies $y-b$.

For $g(x,y,z)=2x^2+y^2+z^2$, the level $g=4$ has $\nabla g=\langle4x,2y,2z\rangle$. At $(1,1,1)$, this gives normal $\langle4,2,2\rangle$ and tangent plane

$$
4(x-1)+2(y-1)+2(z-1)=0.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Tangent plane to an ellipsoid.png|**Fig. 100** The sketch marks the tangent plane to the ellipsoid at $(1,1,1)$.]]

### PDF page 36

#### March 10, 2014. Section 14.7. Optimization

At an interior local maximum or minimum of a differentiable function of one variable, $f'(x)=0$. The tangent line there is horizontal. For a differentiable function of two variables, an interior local extremum at $(a,b)$ requires $f_x(a,b)=f_y(a,b)=0$, so the tangent plane is horizontal.

To classify such a point, consider the second-order Taylor approximation. In one variable,

$$
f(a+\Delta x)\approx f(a)+f'(a)\Delta x+\frac12f''(a)(\Delta x)^2.
$$

In two variables, with all derivatives evaluated at $(a,b)$, the quadratic approximation is

$$
f(a+\Delta x,b+\Delta y)
\approx f(a,b)+f_x\Delta x+f_y\Delta y+
\frac12\bigl[f_{xx}(\Delta x)^2+2f_{xy}\Delta x\Delta y+f_{yy}(\Delta y)^2\bigr].
$$

The handwritten expansion stops after an incomplete mixed term. The full quadratic part includes both pure second derivatives, and the mixed term uses equality of the continuous mixed partials.

At the origin, $u^2+v^2+c$ has a minimum, $-u^2-v^2+c$ has a maximum, and $u^2-v^2+c$ has a saddle point. The second-derivative test at an interior critical point uses

$$
D=f_{xx}f_{yy}-f_{xy}^2.
$$

| Conditions | Classification |
| --- | --- |
| $D>0$, $f_{xx}>0$ | Local minimum |
| $D>0$, $f_{xx}<0$ | Local maximum |
| $D<0$ | Saddle point |
| $D=0$ | The test is inconclusive |

At a saddle point the function can increase in one direction and decrease in another.

### PDF page 37

#### Classifying critical points

Let

$$
f(x,y)=\frac{x^3}{3}-\frac{5x^2}{2}+4x+100+(y-2)^2.
$$

The first derivatives are $f_x=x^2-5x+4=(x-4)(x-1)$ and $f_y=2(y-2)$. The two critical points are $(1,2)$ and $(4,2)$. Since $f_{xx}=2x-5$, $f_{xy}=0$, and $f_{yy}=2$, the determinant is $D=4x-10$.

- At $(1,2)$, $D=-6<0$, so the point is a saddle.
- At $(4,2)$, $D=6>0$ and $f_{xx}=3>0$, so the point is a local minimum.

#### Constrained optimization

A global maximum at $(x_0,y_0)$ satisfies $f(x_0,y_0)\ge f(x,y)$ for every point in the domain under consideration. A global minimum satisfies the reverse inequality. Look for extrema at interior local extrema and along the boundary, including corners. A function unbounded above has no global maximum, and one unbounded below has no global minimum.

In the study-time example, $x$ and $y$ are numerical hours per day spent studying mathematics and studying all subjects, respectively. The same polynomial models accumulated knowledge. Optimize it over $0\le x\le y\le24$. Only $(1,2)$ of the two critical points lies in the region, and it is a saddle. This leaves the boundary to check.

### PDF page 38

#### Checking the boundary of the study-time region

On $x=0$, $f(0,y)=(y-2)^2+100$ has its minimum at $y=2$, where $f(0,2)=100$.

On $y=24$, write $g(x)=f(x,24)=x^3/3-5x^2/2+4x+584$. Its critical points are $x=1,4$. Because $g''(x)=2x-5$, the first is a local maximum along the edge and the second is a local minimum. Their values are

$$
f(1,24)=584+\frac{11}{6},\qquad f(4,24)=584-\frac83.
$$

On $y=x$, write $g(x)=f(x,x)=x^3/3-5x^2/2+4x+100+(x-2)^2$. Then $g'(x)=x^2-3x$ vanishes at $0$ and $3$. Since $g''(x)=2x-3$, the endpoint $0$ is a local maximum on this edge and $3$ is a local minimum. The values are $f(0,0)=104$ and $f(3,3)=9-45/2+12+100+1=99.5$.

The corner values are $f(0,0)=104$, $f(0,24)=584$, and

$$
f(24,24)=\frac{24^3}{3}-\frac{5\cdot24^2}{2}+4\cdot24+100+484=3848.
$$

The handwritten result $6152$ uses $24^3/2$ in this line. The original polynomial has $x^3/3$. The maximum still occurs at $(24,24)$, and comparing all candidates gives the minimum at $(3,3)$.

#### March 12, 2014. Section 15.1. Double integrals

Recall how a Riemann sum approximates area under a nonnegative function on $[a,b]$. For $x_i^*\in[x_{i-1},x_i]$,

$$
A=\int_a^b f(x)\,dx
=\lim_{n\to\infty}\sum_{i=1}^{n} f(x_i^*)(x_i-x_{i-1}),
$$

with the partition widths tending to zero. Each term multiplies a sampled height by the width.

![[Kyle Kabasares - Calculus III - Vector Calculus - Area by Riemann sums.png|**Fig. 101** Partitioning $[a,b]$ into strips gives the area beneath the curve in the limit.]]

### PDF page 39

For a continuous function of one variable, the Riemann sums converge to the same limit regardless of the sample points. The fundamental theorem of calculus gives an antiderivative $F(x)=\int_0^x f(u)\,du$, so $F'(x)=f(x)$. Integration can also be defined over regions of the $xy$-plane, subsets of $\mathbb R^n$, curves, and surfaces.

Let $f(x,y)$ be real-valued and continuous on the rectangle $R=[a,b]\times[c,d]$. Partition the two intervals and choose a sample point $(x_{ij}^*,y_{ij}^*)$ in each subrectangle $[x_{i-1},x_i]\times[y_{j-1},y_j]$. With widths $\Delta x_i=x_i-x_{i-1}$ and $\Delta y_j=y_j-y_{j-1}$, the double integral is
$$
\iint_R f\,dA
=\lim_{\max_i\Delta x_i,\,\max_j\Delta y_j\to0}
\sum_{i=1}^{n}\sum_{j=1}^{m} f(x_{ij}^*,y_{ij}^*)\,\Delta x_i\Delta y_j
=\int_a^b\int_c^d f(x,y)\,dy\,dx.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Riemann sum volume columns.png|**Fig. 102** A column in the double Riemann sum has a rectangular base and a height given by the sampled function value.]]

When $f\geq0$, the integral gives the volume below $z=f(x,y)$ and above $R$. The midpoint rule samples each subrectangle at $\bigl((x_{i-1}+x_i)/2,(y_{j-1}+y_j)/2\bigr)$. The average value on an interval is $\overline f=(b-a)^{-1}\int_a^b f(x)\,dx$. On a rectangle it is
$$
\overline f
=\frac{\int_a^b\int_c^d f(x,y)\,dy\,dx}{\int_a^b\int_c^d 1\,dy\,dx}
=\frac{\iint_R f\,dA}{\iint_R 1\,dA}.
$$

### PDF page 40

Double integrals are linear in the integrand. For domains $D_1$ and $D_2$ whose interiors are disjoint and whose common boundary has area zero, the integral over their union is the sum of the integrals over the two domains:
$$
\begin{aligned}
\iint_D(f+g)\,dA&=\iint_D f\,dA+\iint_D g\,dA,\\
\iint_D cf\,dA&=c\iint_D f\,dA,\\
\iint_{D_1\cup D_2}f\,dA&=\iint_{D_1}f\,dA+\iint_{D_2}f\,dA.
\end{aligned}
$$
The area of $D$ is $\iint_D1\,dA$. If $f\geq 0$, the volume below the graph of $f$ is $V=\iint_Df\,dA$.

#### 15.2 Iterated integrals

Over $[a,b]\times[c,d]$, first fix $x$ and find the area of the vertical cross-section under the curve $y\mapsto f(x,y)$. The volume of a thin slice is approximately that cross-sectional area times its thickness $\Delta x$. Adding the slices yields
$$
V=\lim_{\max_i\Delta x_i\to0}\sum_{i=1}^n
\left(\int_c^d f(x_i^*,y)\,dy\right)\Delta x_i
=\int_a^b\left(\int_c^d f(x,y)\,dy\right)dx.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Volume by slicing.png|**Fig. 103** A thin slice beneath the graph contributes its cross-sectional area times its thickness.]]

### PDF page 41

Evaluate the inner integral while holding the other variable constant. On $D=[0,2]\times[1,3]$, both orders give
$$
\begin{aligned}
\iint_D(x+2y+3)\,dA
&=\int_0^2\int_1^3(x+2y+3)\,dy\,dx\\
&=\int_1^3\int_0^2(x+2y+3)\,dx\,dy\\
&=\int_1^3\left[\frac{x^2}{2}+2xy+3x\right]_0^2dy
=\int_1^3(8+4y)\,dy
=[8y+2y^2]_1^3=32.
\end{aligned}
$$

**Fubini's theorem.** For continuous $f$ on a rectangle, the iterated integrals can be evaluated in either order. A convenient order can simplify the calculation. For example,
$$
\int_1^2\int_0^1\frac{xe^x}{y}\,dx\,dy
=[\log y]_1^2[xe^x-e^x]_0^1
=\log 2.
$$

For a nonrectangular domain, draw arrows across the region in the direction of the inner integration to determine the bounds. For $0\le x\le3$ and $0\le y\le x/2$, vertical slices run from $y=0$ to $y=x/2$. Horizontal slices run from $x=2y$ to $x=3$ for $0\le y\le3/2$. Hence
$$
\int_0^3\int_0^{x/2} f(x,y)\,dy\,dx
=\int_0^{3/2}\int_{2y}^3 f(x,y)\,dx\,dy.
$$
The result is a number. The inner bounds may depend on the outer variable, and the outer bounds must be constants.

### PDF page 42

#### 15.3 Integrating over general domains

Integrate $h(x,y)=x$ over the right half of the disk $x^2+y^2\leq 9$. Vertical slices are bounded by $y=\pm\sqrt{9-x^2}$ for $0\leq x\leq3$. Horizontal slices run from $x=0$ to $x=\sqrt{9-y^2}$ for $-3\leq y\leq3$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Right half disk.png|**Fig. 104** The shaded right half of the disk has radius 3.]]

With vertical slices,
$$
\int_0^3\int_{-\sqrt{9-x^2}}^{\sqrt{9-x^2}} x\,dy\,dx
=\int_0^3 2x\sqrt{9-x^2}\,dx
=\left[-\frac23(9-x^2)^{3/2}\right]_0^3=18.
$$
With horizontal slices,
$$
\int_{-3}^3\int_0^{\sqrt{9-y^2}} x\,dx\,dy
=\int_{-3}^3 \frac{9-y^2}{2}\,dy
=\left[\frac{9y}{2}-\frac{y^3}{6}\right]_{-3}^3=18.
$$

For the next region, add the integrals of $h(x,y)$ over four pieces $D_1,D_2,D_3,D_4$. Two triangles below the $x$-axis are bounded below by $y=-2x-4$ and $y=2x-4$. Two upper semicircles lie on $y^2+(x+1)^2=1$ and $y^2+(x-1)^2=1$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Four piece integration region.png|**Fig. 105** Two triangular pieces and two semicircular pieces partition the integration domain.]]

### PDF page 43

Using the four pieces from the previous page, integrate with vertical slices on $D_1,D_3,D_4$ and horizontal slices on $D_2$:
$$
\begin{aligned}
\iint_D h\,dA
={}&\int_{-2}^0\int_{-2x-4}^0 h(x,y)\,dy\,dx
+\int_{-4}^0\int_0^{(y+4)/2} h(x,y)\,dx\,dy\\
&+\int_{-2}^0\int_0^{\sqrt{1-(x+1)^2}}h(x,y)\,dy\,dx
+\int_0^2\int_0^{\sqrt{1-(x-1)^2}}h(x,y)\,dy\,dx.
\end{aligned}
$$

#### 15.4 Integrals in polar coordinates

The volume between $z=0$ and $z=f(x,y)$ over $D$ is $\iint_D f\,dA$ for $f\geq0$. The area is $\iint_D1\,dA$ and the average of $f$ is $\iint_Df\,dA/\operatorname{area}(D)$. Double integrals obey linearity,
$$
\iint_D(af+bg)\,dA=a\iint_D f\,dA+b\iint_D g\,dA,
$$
and add over pieces whose overlap has area zero. In Cartesian coordinates the integral is a limit of sums of $f(x_i,y_j)\Delta y\,\Delta x$.

To change from Cartesian to polar coordinates, write
$$
r=\sqrt{x^2+y^2},\qquad \tan\theta=\frac yx,\qquad
x=r\cos\theta,\qquad y=r\sin\theta.
$$
The quadrant determines the angle when recovering it from $y/x$. The integrand becomes $f(r\cos\theta,r\sin\theta)$, and the Riemann sum now uses polar cells. Their areas determine the new expression for $dA$.

### PDF page 44

A polar cell from radius $r$ to $r+\Delta r$ and angle $\theta$ to $\theta+\Delta\theta$ occupies the fraction $\Delta\theta/(2\pi)$ of an annulus. Its area is
$$
\Delta A
=\frac{\Delta\theta}{2\pi}\bigl[\pi(r+\Delta r)^2-\pi r^2\bigr]
=r\Delta r\,\Delta\theta+\frac{(\Delta r)^2}{2}\Delta\theta.
$$
The second term is higher order in $\Delta r$, so the area element is $dA=r\,dr\,d\theta$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Annular sector area.png|**Fig. 106** The shaded polar cell is a sector of an annulus.]]

#### Lecture, March 19, 2014

Find the average of $f(x,y)=\sin(x^2+y^2)$ over the right half of the disk of radius 2. In polar coordinates the bounds are $0\leq r\leq2$ and $-\pi/2\leq\theta\leq\pi/2$, and the integrand becomes $\sin(r^2)$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Polar half disk average.png|**Fig. 107** The region used to average the radial function is the right half of the disk of radius 2.]]

Using $u=r^2$ and $du=2r\,dr$ in the numerator,
$$
\begin{aligned}
\overline f
&=\frac{\int_{-\pi/2}^{\pi/2}\int_0^2\sin(r^2)r\,dr\,d\theta}
{\int_{-\pi/2}^{\pi/2}\int_0^2 r\,dr\,d\theta}\\
&=\frac{\int_{-\pi/2}^{\pi/2}\bigl[-\tfrac12\cos(r^2)\bigr]_0^2\,d\theta}
{\int_{-\pi/2}^{\pi/2}\bigl[\tfrac12r^2\bigr]_0^2\,d\theta}
=\frac{\pi(1-\cos4)/2}{2\pi}
=\frac{1-\cos4}{4}.
\end{aligned}
$$

### PDF page 45

For $f(x,y)=xy=r^2\sin\theta\cos\theta$ on the disk $(x-1)^2+y^2\leq1$, the boundary satisfies $x^2+y^2=2x$ and hence $r^2=2r\cos\theta$. Away from the origin the boundary is $r=2\cos\theta$. Integrating from the origin to that boundary gives
$$
\int_{-\pi/2}^{\pi/2}\int_0^{2\cos\theta} r^3\sin\theta\cos\theta\,dr\,d\theta
=4\int_{-\pi/2}^{\pi/2}\cos^5\theta\sin\theta\,d\theta=0
$$
by odd symmetry.

![[Kyle Kabasares - Calculus III - Vector Calculus - Offset polar disk.png|**Fig. 108** The disk centered at $(1,0)$ is tangent to the vertical axis at the origin.]]

For the petal bounded by $r=\cos(2\theta)$ on $-\pi/4\leq\theta\leq\pi/4$, use $\cos^2(2\theta)=(1+\cos4\theta)/2$:
$$
A=\int_{-\pi/4}^{\pi/4}\int_0^{\cos(2\theta)} r\,dr\,d\theta
=\frac12\int_{-\pi/4}^{\pi/4}\cos^2(2\theta)\,d\theta
=\left[\frac{\theta}{4}+\frac{\sin4\theta}{16}\right]_{-\pi/4}^{\pi/4}
=\frac{\pi}{8}.
$$

#### Triple integrals

For a three-dimensional box partitioned into smaller boxes of equal volume $\Delta V$, the integral is the limit of the three-index Riemann sum
$$
\iiint_V f(x,y,z)\,dV
=\lim_{m,n,p\to\infty}
\sum_{i=1}^m\sum_{j=1}^n\sum_{k=1}^p f(x_i,y_j,z_k)\,\Delta V.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Triple Riemann sum cells.png|**Fig. 109** A box partitioned into cells for a three-dimensional Riemann sum.]]

Integrating $1$ gives the volume. If the solid lies between $z=0$ and a nonnegative graph $z=f(x,y)$ over $D$, that volume is also $\iint_D f(x,y)\,dA$. Integrating a mass density $\mechanical{\rho}(x,y,z)$ gives the mass $\mechanical{M}=\iiint_V\mechanical{\rho}(x,y,z)\,dV$.

### PDF page 46

#### 15.7 Triple integrals

For the brownie example, the box has $-1\leq x\leq1$, $0\leq y\leq2$, and $0\leq z\leq1$. Integrate the model calorie density:
$$
\begin{aligned}
\int_{-1}^1\int_0^2\int_0^1(3+xz-y^3)\,dz\,dy\,dx
&=\int_{-1}^1\int_0^2\left[3z+\frac{xz^2}{2}-y^3z\right]_0^1dy\,dx\\
&=\int_{-1}^1\left[3y+\frac{xy}{2}-\frac{y^4}{4}\right]_0^2dx
=\int_{-1}^1(x+2)\,dx=4.
\end{aligned}
$$

For a solid above $z=0$, below $z=1-y$, and on the side $y\geq\sqrt{x}$ with $x\geq0$, its volume can be set up in several orders.

![[Kyle Kabasares - Calculus III - Vector Calculus - Triple integral solid.png|**Fig. 110** The sloping plane bounds the solid above, and the curved vertical face lies on $y=\sqrt{x}$.]]

When integrating $z$ first, the projection in the $xy$-plane can be sliced either vertically or horizontally:
$$
I_1=\int_0^1\int_{\sqrt{x}}^1\int_0^{1-y} dz\,dy\,dx,\qquad
I_2=\int_0^1\int_0^{y^2}\int_0^{1-y} dz\,dx\,dy.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Triple integral xy projection.png|**Fig. 111** The $xy$ projection lies between $y=\sqrt{x}$ and $y=1$, to the right of $x=0$.]]

When integrating $y$ first, the bounds are $\sqrt{x}\leq y\leq1-z$. In the $xz$ projection, $x\leq(1-z)^2$ or equivalently $z\leq1-\sqrt{x}$:
$$
I_3=\int_0^1\int_0^{(1-z)^2}\int_{\sqrt{x}}^{1-z}dy\,dx\,dz,\qquad
I_4=\int_0^1\int_0^{1-\sqrt{x}}\int_{\sqrt{x}}^{1-z}dy\,dz\,dx.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Triple integral xz projection.png|**Fig. 112** The $xz$ projection is bounded by the axes and $z=1-\sqrt{x}$.]]

### PDF page 47

When integrating $x$ first for the solid on the preceding page, the bounds are $0\leq x\leq y^2$. The triangular $yz$ projection can be sliced in either direction:
$$
I_5=\int_0^1\int_0^{1-z}\int_0^{y^2} dx\,dy\,dz,\qquad
I_6=\int_0^1\int_0^{1-y}\int_0^{y^2} dx\,dz\,dy.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Triple integral yz projection.png|**Fig. 113** The $yz$ projection lies in the first quadrant below $y+z=1$.]]

#### 15.8 Triple integrals in cylindrical coordinates

Cylindrical coordinates $(r,\theta,z)$ use polar coordinates in the horizontal plane and retain the Cartesian height $z$. The radius $r$ is the distance from the $z$-axis, and $\theta$ is the azimuth measured from the positive $x$ direction. A fixed $z=k$ gives a horizontal plane, fixed $r=2$ gives a cylinder, and fixed $\theta=\pi/6$ gives a vertical half-plane.

![[Kyle Kabasares - Calculus III - Vector Calculus - Cylindrical coordinate plane and cylinder.png|**Fig. 114** Holding $z$ fixed gives a plane. Holding $r$ fixed gives a cylinder.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Constant azimuth half plane.png|**Fig. 115** Holding the azimuth fixed gives a vertical half-plane starting at the $z$-axis.]]

To set up a triple integral in cylindrical coordinates:

1. Use the volume element $dV=r\,dr\,d\theta\,dz$. A cell has radial width $dr$, angular arc length $r\,d\theta$, and height $dz$.
2. Substitute $x=r\cos\theta$, $y=r\sin\theta$, and unchanged $z$ into the integrand to obtain $f(r\cos\theta,r\sin\theta,z)$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Cylindrical volume element.png|**Fig. 116** Extruding an annular sector through height $dz$ gives a cylindrical volume cell.]]

### PDF page 48

Find the volume of the cone bounded by $z=2\sqrt{x^2+y^2}$ and $z=H$. The conical boundary is $z=2r$, and the plane $z=H$ meets it at radius $H/2$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Cone volume geometry.png|**Fig. 117** The circular top of the cone is a height $H$ above the apex.]]

$$
\begin{aligned}
V
&=\int_0^{2\pi}\int_0^{H/2}\int_{2r}^H r\,dz\,dr\,d\theta
=\int_0^{2\pi}\int_0^{H/2}r(H-2r)\,dr\,d\theta\\
&=2\pi\left[\frac{Hr^2}{2}-\frac{2r^3}{3}\right]_0^{H/2}
=2\pi\left(\frac{H^3}{8}-\frac{H^3}{12}\right)
=\frac{\pi H^3}{12}.
\end{aligned}
$$
With base radius $R=H/2$, this is $V=\pi R^2H/3$.

#### Lecture, April 3, 2014

Find the average height $\overline z$ of the solid upper half of a sphere of radius $R$. The spherical boundary $x^2+y^2+z^2=R^2$ becomes $r^2+z^2=R^2$ in cylindrical coordinates. Above the equatorial plane it gives $z=\sqrt{R^2-r^2}$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Upper hemisphere cylindrical bounds.png|**Fig. 118** The upper hemisphere lies above the equatorial disk in the $xy$-plane.]]

For the three-dimensional average, divide the triple integral of the height by the volume of the solid:
$$
\overline z=\frac{\iiint_V z\,dV}{\iiint_V 1\,dV}.
$$

### PDF page 49

For the upper hemisphere, the cylindrical integral of $z$ is
$$
\int_0^R\int_0^{2\pi}\int_0^{\sqrt{R^2-r^2}} zr\,dz\,d\theta\,dr
=\pi\int_0^R r(R^2-r^2)\,dr=\frac{\pi R^4}{4}.
$$
The denominator $\int_0^R\int_0^{2\pi}\int_0^{\sqrt{R^2-r^2}}r\,dz\,d\theta\,dr$ is half the volume of the sphere, $2\pi R^3/3$. The average height is $\overline z=3R/8$.

#### 15.9 Triple integrals in spherical coordinates

Spherical coordinates $(\rho,\theta,\phi)$ use $\rho\geq0$ for distance from the origin, $0\leq\theta<2\pi$ for azimuth in the $xy$-plane, and $0\leq\phi\leq\pi$ for inclination from the positive $z$-axis.

![[Kyle Kabasares - Calculus III - Vector Calculus - Spherical coordinate angles.png|**Fig. 119** The sketch shows the radial distance, its horizontal projection, and the two spherical angles.]]

A fixed $\rho=R$ gives a sphere. The equation $\theta=\pi/4$ gives a vertical half-plane, and $\phi=\pi/3$ gives a cone.

![[Kyle Kabasares - Calculus III - Vector Calculus - Spherical coordinate surfaces.png|**Fig. 120** A sphere, half-plane, and cone are the coordinate surfaces obtained by fixing one spherical coordinate at a time.]]

From the right triangle, $r=\rho\sin\phi$ and $z=\rho\cos\phi$. Together with $x=r\cos\theta$ and $y=r\sin\theta$, this yields
$$
x=\rho\sin\phi\cos\theta,\qquad
y=\rho\sin\phi\sin\theta,\qquad
z=\rho\cos\phi,\qquad
\rho=\sqrt{x^2+y^2+z^2}.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Spherical conversion triangle.png|**Fig. 121** The inclination from the vertical gives the projections $z=\rho\cos\phi$ and $r=\rho\sin\phi$.]]

### PDF page 50

To integrate in spherical coordinates, convert the integrand, express the solid in $(\rho,\theta,\phi)$, and use $dV=\rho^2\sin\phi\,d\rho\,d\phi\,d\theta$.

#### Mass inside a cone and a sphere

The cone $z=\sqrt{3}\sqrt{x^2+y^2}=\sqrt3\,r$ has inclination $\phi=\pi/6$. The written calculation uses the sphere
$$
x^2+y^2+\left(z-\frac H{\sqrt3}\right)^2=\left(\frac H{\sqrt3}\right)^2.
$$
Expanding gives $\rho^2=(2H/\sqrt3)\rho\cos\phi$. Along each ray within the cone, the sphere is reached at $\rho=2H\cos\phi/\sqrt3$. For the density $3-\rho^2/5$ in the notes, the mass integral is
$$
\mechanical{M}
=\int_0^{2\pi}\int_0^{\pi/6}\int_0^{2H\cos\phi/\sqrt3}
\left(3-\frac{\rho^2}{5}\right)\rho^2\sin\phi\,d\rho\,d\phi\,d\theta.
$$
The upper radial bound follows the expanded sphere equation. The sketch labels $H$ at the cone's circular rim, which does not agree with the position of the rim for the written sphere.

![[Kyle Kabasares - Calculus III - Vector Calculus - Cone with spherical cap.png|**Fig. 122** The handwritten sketch shows the conical side and a rounded cap.]]

#### 15.10 General change of variables, April 4, 2014

Midterm 2 review material includes quizzes, homework, worksheets, problems 5 and 6 on practice midterm 1, and problems 1, 2, and 5 on practice midterm 2. The listed sections are 14.3–14.7, 15.1–15.4, and 15.7–15.9.

### PDF page 51

#### Lecture, April 4, 2014

A change of variables uses invertible relations $u=u(x,y)$ and $v=v(x,y)$ with inverses $x=x(u,v)$ and $y=y(u,v)$. The aim is to describe a region more simply in the new variables.

![[Kyle Kabasares - Calculus III - Vector Calculus - Change of variables region mapping.png|**Fig. 123** The change of variables straightens the sides of a region to make a rectangle in the new coordinate plane.]]

Cartesian coordinates use $(x,y,z)$, polar use $(r,\theta)$, cylindrical use $(r,\theta,z)$, and spherical use $(\rho,\theta,\phi)$. In Cartesian coordinates $dA=dx\,dy$ and $dV=dx\,dy\,dz$. Under $x=r\cos\theta$, $y=r\sin\theta$, the area element is $dA=r\,dr\,d\theta$.

For the one-dimensional example $\int x^2e^{x^2}\,dx$ on $x\geq0$, the substitution $u=x^2$ gives $x=\sqrt u$ and $dx=du/(2\sqrt u)$ for $u>0$. In two variables, choose the new coordinates, compute the new area element, and convert the integrand.

The parallelogram is bounded by $y=x-1$, $y=x+2$, $y=-x/2+3$, and $y=-x/2+4$. Choose variables that are constant on these lines:
$$
u=y-x,\qquad v=y+\frac x2.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Cartesian parallelogram for substitution.png|**Fig. 124** Two families of parallel lines bound the shaded parallelogram in Cartesian coordinates.]]

The new region is $-1\leq u\leq2$ and $3\leq v\leq4$. Adding $u+2v=3y$ and solving for $x$ gives
$$
y=\frac{u+2v}{3},\qquad x=\frac{2(v-u)}{3}.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Rectangle after substitution.png|**Fig. 125** The shaded region becomes a rectangle with sides parallel to the new coordinate axes.]]

### PDF page 52

The shaded first-quadrant region lies between $y=1/x$, $y=2/x$, $y=4x/3$, and $y=x/2$. Let $u=x/y$ and $v=xy$. The two rays become $u=3/4$ and $u=2$, while the two hyperbolas become $v=1$ and $v=2$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Region between rays and hyperbolas.png|**Fig. 126** The two rays and two hyperbolas bound a curvilinear quadrilateral in the first quadrant.]]

Since $x=uy$ and $v=uy^2$, the inverse transformation on this region is
$$
y=\sqrt{\frac vu},\qquad
x=u\sqrt{\frac vu}=\sqrt{uv}.
$$

Small changes $du$ and $dv$ in the new variables produce changes in $x$ and $y$. The image of a small rectangle is approximately a parallelogram.

![[Kyle Kabasares - Calculus III - Vector Calculus - Local parallelogram approximation.png|**Fig. 127** A small coordinate rectangle maps locally to a parallelogram.]]

### PDF page 53

#### Lecture, April 7, 2014

The Jacobian of the transformation $(u,v)\mapsto(x,y)$ is
$$
J=\frac{\partial(x,y)}{\partial(u,v)}
=\begin{vmatrix}x_u&x_v\\y_u&y_v\end{vmatrix}.
$$
The absolute value scales area, so $dA=|J|\,du\,dv$.

Return to the parallelogram bounded by $u=y-x=-1,2$ and $v=y+x/2=3,4$. The inverse transformation gives $x=2(v-u)/3$, $y=(u+2v)/3$, and $x+y=(4v-u)/3$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Parallelogram Jacobian example.png|**Fig. 128** The four Cartesian boundary lines are level sets of the two new coordinates.]]

The determinant is
$$
J=\begin{vmatrix}-2/3&2/3\\1/3&2/3\end{vmatrix}
=-\frac49-\frac29=-\frac23.
$$
Thus $dA=(2/3)\,du\,dv$ and the transformed integral is
$$
\iint_D(x+y)\,dA=\frac23\int_{-1}^2\int_3^4\frac{4v-u}{3}\,dv\,du.
$$

### PDF page 54

For polar coordinates, $x_r=\cos\theta$, $x_\theta=-r\sin\theta$, $y_r=\sin\theta$, and $y_\theta=r\cos\theta$. The Jacobian is
$$
J=\begin{vmatrix}
\cos\theta&-r\sin\theta\\
\sin\theta&r\cos\theta
\end{vmatrix}
=r\cos^2\theta+r\sin^2\theta=r,
$$
so $dA=r\,dr\,d\theta$.

If $u(x,y)$ and $v(x,y)$ are known and the transformation is locally invertible with a nonzero Jacobian, the reciprocal determinant can be calculated directly:
$$
\frac1J=\frac{\partial(u,v)}{\partial(x,y)}
=\begin{vmatrix}u_x&u_y\\v_x&v_y\end{vmatrix}.
$$
For $u=y-x$ and $v=y+x/2$, the determinant is $-1-1/2=-3/2$, giving $|J|=2/3$.

#### Lecture, April 9, 2014

Review problems 5 and 6 from midterm 1. In the tangent-plane exercise, the surface $S$ is given through two curves rather than by an equation:
$$
\mathbf r_1(t)=\langle1+5t,\ 3-t^2,\ 2+t-t^3\rangle,\qquad
\mathbf r_2(s)=\langle3s-2s^2,\ s+s^3+s^4,\ s-s^2+2s^3\rangle.
$$
Find the tangent plane at $P=(1,3,2)$. The parameters at $P$ are $t=0$ and $s=1$. The first components agree because $1+5(0)=3(1)-2(1)^2=1$. Substituting in the other two components gives $3$ and $2$ for both curves, so they intersect at $P$.

### PDF page 55

For the two curves through $P=(1,3,2)$, differentiate to find the tangent vectors:
$$
\begin{aligned}
\mathbf r_1'(t)&=\langle5,-2t,1-3t^2\rangle,
&\mathbf r_1'(0)&=\langle5,0,1\rangle,\\
\mathbf r_2'(s)&=\langle3-4s,1+3s^2+4s^3,1-2s+6s^2\rangle,
&\mathbf r_2'(1)&=\langle-1,8,5\rangle.
\end{aligned}
$$
Their cross product is $\mathbf n=\langle-8,-26,40\rangle$. Hence the tangent plane through $P$ is
$$
-8(x-1)-26(y-3)+40(z-2)=0.
$$

For $f(x,y)=x\cos y+y^2e^x+x$, the differential is
$$
df=dz=(\cos y+y^2e^x+1)\,dx+(-x\sin y+2ye^x)\,dy.
$$
At $(0,\pi,\pi^2)$ the two coefficients evaluate to $\pi^2$ and $2\pi$, so the tangent plane is
$$
z-\pi^2=\pi^2x+2\pi(y-\pi).
$$

### PDF page 56

#### Midterm 2 review

The first region has right boundary $x=y-y^3$. The lower portion $D_1$ extends from $y=-1$ to $y=0$ and has left boundary $x=-1$. The upper portion $D_2$ extends from $y=0$ to $y=1$ and has left boundary $y=(x+1)^2$, or $x=\sqrt y-1$ on the indicated branch. Its total area is
$$
A=\int_{-1}^0\int_{-1}^{y-y^3}1\,dx\,dy
+\int_0^1\int_{\sqrt y-1}^{y-y^3}1\,dx\,dy.
$$
The average of $f(x,y)=y^2$ on $D_1\cup D_2$ is
$$
\overline f=\frac{\iint_{D_1} y^2\,dA+\iint_{D_2} y^2\,dA}{A}.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Midterm two piece region.png|**Fig. 129** The left integration limit changes at $y=0$, so the region is split there.]]

For $f(x,y)=4x+6y-x^2-y^2$, the equations $f_x=4-2x=0$ and $f_y=6-2y=0$ give $(2,3)$. The second derivatives $f_{xx}=f_{yy}=-2$ and $f_{xy}=0$ give determinant $D=4>0$, so this point is a local maximum.

![[Kyle Kabasares - Calculus III - Vector Calculus - Midterm optimization rectangle.png|**Fig. 130** The function is restricted to a rectangle with $0\leq x\leq4$ and $0\leq y\leq5$.]]

On the edge $x=0$, the restriction is $f(0,y)=6y-y^2$. Its derivative vanishes at $y=3$, where its second derivative is $-2$, giving a maximum along that edge.

### PDF page 57

#### Lecture, April 14, 2014 — Chapter 16, vector fields

Scalar-valued functions such as $f(x,y)$ and $g(x,y,z)$ assign a number to each input. A vector-valued function of one variable such as $\mathbf f(t)=\langle x(t),y(t),z(t)\rangle$ assigns a vector to each parameter value.

A vector field assigns a vector to each point of a region. Typical plane and space fields are
$$
\mathbf F(x,y)=\langle F_1(x,y),F_2(x,y)\rangle,\qquad
\mathbf G(x,y,z)=\langle G_1(x,y,z),G_2(x,y,z),G_3(x,y,z)\rangle.
$$
Each component is itself a scalar function of several variables. These examples have types $\mathbf F:\mathbb R^2\to\mathbb R^2$ and $\mathbf G:\mathbb R^3\to\mathbb R^3$.

Represent a plane field by drawing sample vectors at their input points. For $\mathbf F(x,y)=x\mathbf i+y\mathbf j=\langle x,y\rangle$, the vectors point radially outward. In particular, $\mathbf F(0,0)=\langle0,0\rangle$ and $\mathbf F(1,0)=\langle1,0\rangle$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Radial vector field.png|**Fig. 131** The arrows of $\mathbf F(x,y)=\langle x,y\rangle$ point away from the origin and lengthen with distance.]]

### PDF page 58

The plane field $\mathbf F(x,y)=\langle-y,x\rangle$ has sample values
$$
\begin{aligned}
\mathbf F(0,0)&=\langle0,0\rangle,
&\mathbf F(1/2,1/2)&=\langle-1/2,1/2\rangle,\\
\mathbf F(-1,2)&=\langle-2,-1\rangle,
&\mathbf F(-2,0)&=\langle0,-2\rangle.
\end{aligned}
$$
It describes rigid rotation if interpreted as a velocity field. The arrows are tangent to circles, and the speed increases in proportion to the distance from the center.

![[Kyle Kabasares - Calculus III - Vector Calculus - Planar rotation field.png|**Fig. 132** The vectors circulate counterclockwise around the origin.]]

The space field $\mathbf G(x,y,z)=\langle-y,x,z\rangle$ combines rotation around the $z$-axis with motion away from the plane $z=0$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Three dimensional rotation field.png|**Fig. 133** The field rotates about the vertical axis and has a vertical component with the sign of $z$.]]

Force fields, including electric and gravitational examples, give the force $\mechanical{\mathbf F}$ on a test object at each point. Velocity fields give the local velocity $\mechanical{\mathbf v}$, for instance in a fluid. A scalar function $\phi(x,y)$ defines the gradient field $\mathbf F=\nabla\phi$. A field that can be expressed as the gradient of a scalar function is conservative.

### PDF page 59

For a continuously differentiable plane field $\mathbf F=\langle F_1,F_2\rangle$, a conservative field satisfies $\partial F_1/\partial y=\partial F_2/\partial x$. On a simply connected open domain this condition is also sufficient. For $\mathbf F=\langle x,y\rangle$, both derivatives are zero. For $\mathbf F=\langle-y,x\rangle$, they are $-1$ and $1$, so this field is not conservative.

#### Line integrals

Let $C$ be a curve parametrized by $\mathbf r(t)=\langle x(t),y(t),z(t)\rangle$. Divide $C$ into small arcs of lengths $\Delta s_i$ and sample $f(x,y,z)$ at $(x_i^*,y_i^*,z_i^*)$ on each arc. The scalar line integral is the limit
$$
\int_C f(x,y,z)\,ds
=\lim_{\max_i\Delta s_i\to0}\sum_i f(x_i^*,y_i^*,z_i^*)\,\Delta s_i.
$$
Here $ds$ is the arc-length element.

![[Kyle Kabasares - Calculus III - Vector Calculus - Line integral arc subdivisions.png|**Fig. 134** The curve is divided into small arcs, each with its own sample point and length.]]

For the Great Wall of China example, take $C$ to be the base of the wall. Each short portion contributes approximately its height $f$ times its base length $\Delta s$. The integral gives the area of one vertical face in this model.

![[Kyle Kabasares - Calculus III - Vector Calculus - Great Wall line integral.png|**Fig. 135** Each short segment of the wall contributes a nearly rectangular strip.]]

For a video game, let $f(x,y)$ be the density of collectible stars per unit length and $C$ be the path taken. The model estimates the number of stars as $\int_C f(x,y)\,ds$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Video game stars along path.png|**Fig. 136** The sketched path passes through a region containing collectible stars.]]

### PDF page 60

In the fundraising example, $f(x,y)$ models funds raised per unit distance and $C$ is the candidate's route. The total funds raised are $\int_C f\,ds$, the limit of sums $\sum_i f(x_i,y_i)\Delta s_i$.

#### 16.2 Line integrals, April 16, 2014

Parametrize $C$ by $\mathbf r(t)=\langle x(t),y(t),z(t)\rangle$ for $a\leq t\leq b$. Substitute the parametrization into $f$ and use the arc-length element $ds=\lVert\mathbf r'(t)\rVert\,dt$. Then
$$
\int_C f\,ds
=\int_a^b f(x(t),y(t),z(t))
\sqrt{(x'(t))^2+(y'(t))^2+(z'(t))^2}\,dt.
$$

For $f(x,y)=y/x$ on the parabola $y=x^2$ between $x=-2$ and $x=2$, use $\mathbf r(t)=\langle t,t^2\rangle$. The restricted integrand is $t^2/t=t$ away from the origin and extends continuously there. The derivatives $x'=1$ and $y'=2t$ give
$$
I=\int_{-2}^{2}t\sqrt{1+4t^2}\,dt.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Scalar integral along parabola.png|**Fig. 137** The scalar line integral follows the parabola from $x=-2$ to $x=2$.]]

### PDF page 61

For a circular route $C$ of radius 3 miles, the fuel consumption model is $f(x,y)=15+y^2$ gallons per mile when the coordinates are measured in miles. Parametrize one lap by $\mathbf r(t)=\langle3\cos t,3\sin t\rangle$, $0\leq t\leq2\pi$. Then $\mathbf r'(t)=\langle-3\sin t,3\cos t\rangle$, $\lVert\mathbf r'(t)\rVert=3$, and $f(\mathbf r(t))=15+9\sin^2 t$. The total fuel used, in gallons, is
$$
\int_C (15+y^2)\,ds=3\int_0^{2\pi}(15+9\sin^2 t)\,dt.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Circular fuel consumption route.png|**Fig. 138** The circular path represents one complete lap.]]

#### Line integrals of vector fields

The unit tangent to an oriented curve is $\mathbf T=\mathbf r'(t)/\lVert\mathbf r'(t)\rVert$. The signed tangential component of $\mathbf F$ is $\mathbf F\cdot\mathbf T$. In the plane this is
$$
\mathbf F(\mathbf r(t))\cdot\mathbf T
=\frac{\mathbf F(x(t),y(t))\cdot\langle x'(t),y'(t)\rangle}
{\sqrt{(x'(t))^2+(y'(t))^2}}.
$$
Multiplication by $ds=\lVert\mathbf r'(t)\rVert\,dt$ cancels the denominator. For a force field, the integral gives the work along the curve:
$$
\mechanical{W}=\int_C\mechanical{\mathbf F}\cdot\mathbf T\,ds
=\int_a^b\mechanical{\mathbf F}(\mathbf r(t))\cdot\mathbf r'(t)\,dt.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Projection onto path tangent.png|**Fig. 139** Only the component of the field along the tangent contributes to work along the path.]]

### PDF page 62

For the work done by a field $\mechanical{\mathbf F}=\langle\mechanical{F}_1,\mechanical{F}_2,\mechanical{F}_3\rangle$ on a particle moving along $C$, proceed as follows.

1. Choose a parametrization $\mathbf r(t)=\langle x(t),y(t),z(t)\rangle$ for $a\leq t\leq b$.
2. Use $\mathbf T=\mathbf r'/\lVert\mathbf r'\rVert$ to obtain $\mathbf T\,ds=\mathbf r'(t)\,dt$.
3. Substitute the curve into each component of the field.
4. Take the dot product with $\mathbf r'(t)$ and integrate.

$$
\mechanical{W}
=\int_a^b\bigl(\mechanical{F}_1(\mathbf r(t))x'(t)
+\mechanical{F}_2(\mathbf r(t))y'(t)
+\mechanical{F}_3(\mathbf r(t))z'(t)\bigr)\,dt.
$$

In the normalized gravity example, the plane field is
$$
\mechanical{\mathbf F}(x,y,0)=\frac{\langle-x,-y\rangle}{(x^2+y^2)^{3/2}}.
$$
Along the upper semicircle of radius 2, take $\mathbf r(t)=\langle2\cos t,2\sin t\rangle$ for $0\leq t\leq\pi$. The force is $\langle-2\cos t/8,-2\sin t/8\rangle$ and the tangent derivative is $\langle-2\sin t,2\cos t\rangle$. Their dot product is $(4/8)\cos t\sin t-(4/8)\sin t\cos t=0$, so gravity does zero work along the arc.

![[Kyle Kabasares - Calculus III - Vector Calculus - Radial gravity on semicircle.png|**Fig. 140** Gravity points radially inward and is perpendicular to displacement along the semicircle.]]

### PDF page 63

Use the same normalized gravity field on the line segment $\mathbf r(t)=\langle2t,t-1\rangle$ for $0\leq t\leq1$. Then $\mathbf T\,ds=\langle2,1\rangle\,dt$ and
$$
\mechanical{\mathbf F}(\mathbf r(t))
=\frac{\langle-2t,1-t\rangle}{(4t^2+(t-1)^2)^{3/2}}.
$$
The two contributions to the numerator of the dot product are $-4t$ and $1-t$, so
$$
\mechanical{W}=\int_0^1\frac{1-5t}{(4t^2+(t-1)^2)^{3/2}}\,dt.
$$

#### 16.3 Fundamental theorem of line integrals, April 18, 2014

The direct method parametrizes $C$ and evaluates the field on the parametrization. A conservative field $\mathbf F=\nabla\phi$ gives a shortcut through the scalar potential $\phi(x,y,z)$ restricted to the path. In the plane, $\partial F_1/\partial y=\partial F_2/\partial x$ is the differential condition for a potential on a simply connected domain. For a closed curve $C$, the starting and ending values of the potential agree.

### PDF page 64

Let $g(t)=\phi(\mathbf r(t))$ along a path from $P=\mathbf r(a)$ to $Q=\mathbf r(b)$. The chain rule gives
$$
g'(t)=\phi_x x'(t)+\phi_y y'(t)+\phi_z z'(t)
=\nabla\phi(\mathbf r(t))\cdot\mathbf r'(t).
$$
If $\mathbf F=\nabla\phi$, the fundamental theorem of line integrals follows from the ordinary fundamental theorem:
$$
\int_C\mathbf F\cdot d\mathbf r
=\int_a^b\nabla\phi(\mathbf r(t))\cdot\mathbf r'(t)\,dt
=\int_a^b g'(t)\,dt
=g(b)-g(a)=\phi(Q)-\phi(P).
$$
For a conservative force field, the work depends only on the endpoints. For a closed curve $Q=P$, the work is zero.

For $\phi(x,y)=x\sin y$, the gradient is $\mathbf F=\langle\sin y,x\cos y\rangle$. The mixed derivatives $\partial F_1/\partial y$ and $\partial F_2/\partial x$ both equal $\cos y$, consistent with the field being conservative.

### PDF page 65

For $\phi(x,y)=x\sin y$, the line integral of $\mathbf F=\nabla\phi$ along a spiral from $(0,0)$ to $(1,\pi/3)$ is
$$
\phi(1,\pi/3)-\phi(0,0)=\frac{\sqrt3}{2}.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Conservative field spiral path.png|**Fig. 141** The spiral is one possible path between the two endpoints. Its shape does not affect the line integral of the gradient.]]

For a conservative plane field $\mathbf F=\langle F_1,F_2\rangle=\nabla\phi$, the component equations are $\phi_x=F_1$ and $\phi_y=F_2$. When the second derivatives are continuous, $\partial F_2/\partial x=\phi_{yx}=\phi_{xy}=\partial F_1/\partial y$. Both sides equal $\cos y$ in the example. Given $\mathbf F$, recovering its potential means solving the two component equations for $\phi$.

### PDF page 66

#### Lecture, April 21, 2014

A conservative field has a scalar potential satisfying $\mathbf F=\nabla\phi$. Its line integral from $P$ to $Q$ is $\phi(Q)-\phi(P)$, so the integral around a closed curve is zero. In the plane, a continuously differentiable conservative field satisfies $\partial F_1/\partial y=\partial F_2/\partial x$.

Given a conservative field $\langle F_1,F_2\rangle$, integrate the component equations $\phi_x=F_1$ and $\phi_y=F_2$:
$$
\phi(x,y)=\int F_1(x,y)\,dx+C_1(y),\qquad
\phi(x,y)=\int F_2(x,y)\,dy+C_2(x).
$$
Each arbitrary function depends on the variable held fixed in that integration.

For example, $\phi(x,y)=x^2e^y+x^3+3y+6$ produces $\mathbf F=\langle2xe^y+3x^2,x^2e^y+3\rangle$. To recover $\phi$ from the field alone, first check that both cross derivatives are $2xe^y$. Integrating the components gives
$$
\phi=x^2e^y+x^3+C_1(y)
\qquad\text{and}\qquad
\phi=x^2e^y+3y+C_2(x).
$$
Matching these expressions gives $C_1(y)=3y+C$ and $C_2(x)=x^3+C$ for an arbitrary constant $C$.

### PDF page 67

For $\mathbf F=\langle F_1,F_2,F_3\rangle$, the three mixed-partial identities for a conservative field are
$$
(F_2)_x=(F_1)_y,\qquad (F_3)_x=(F_1)_z,\qquad (F_2)_z=(F_3)_y.
$$
Equivalently, the curl vanishes:
$$
\nabla\times\mathbf F
=\begin{vmatrix}
\mathbf i&\mathbf j&\mathbf k\\
\partial_x&\partial_y&\partial_z\\
F_1&F_2&F_3
\end{vmatrix}
=\langle (F_3)_y-(F_2)_z,\ (F_1)_z-(F_3)_x,\ (F_2)_x-(F_1)_y\rangle
=\mathbf 0.
$$
When a potential exists, its component antiderivatives have the forms
$$
\phi=\int F_1\,dx+C_1(y,z),\qquad
\phi=\int F_2\,dy+C_2(x,z),\qquad
\phi=\int F_3\,dz+C_3(x,y).
$$

The field $\langle xy,z+z^2/2,z^2+xy\rangle$ fails the test because $(F_1)_z=0$ and $(F_3)_x=y$. A preliminary line gives the field with first component $ze^{xz}+\log y+yz$ and third component $xe^{xz}+xy$. The middle component on this page appears to read $xy+zy+yz$. The worked version on PDF page 68 uses $x/y+2y+xz$.

#### Lecture, April 23, 2014

For $\mathbf F=\langle xy,z+x^2/2,xy\rangle$, the $xy$ pair agrees because $(F_2)_x=(F_1)_y=x$. The $xz$ pair gives $(F_3)_x=y$ and $(F_1)_z=0$. The $yz$ pair gives $(F_2)_z=1$ and $(F_3)_y=x$. The last two pairs fail to agree identically, so the field is not conservative.

### PDF page 68

For $y>0$, consider
$$
\mathbf F(x,y,z)=
\left\langle ze^{xz}+\log y+yz,\ \frac{x}{y}+2y+xz,\ xe^{xz}+xy\right\rangle.
$$
The three pairs of mixed derivatives agree:
$$
\begin{aligned}
(F_2)_x=(F_1)_y&=\frac1y+z,\\
(F_3)_x=(F_1)_z&=e^{xz}+xze^{xz}+y,\\
(F_2)_z=(F_3)_y&=x.
\end{aligned}
$$
The middle identity uses the product rule. The half-space $y>0$ is simply connected, so the field is conservative.

Integrating each component with respect to its coordinate gives
$$
\begin{aligned}
\phi&=e^{xz}+x\log y+xyz+C_1(y,z),\\
\phi&=x\log y+y^2+xyz+C_2(x,z),\\
\phi&=e^{xz}+xyz+C_3(x,y).
\end{aligned}
$$
Matching the common terms and the terms that depend only on the other variables yields
$$
\phi=e^{xz}+x\log y+xyz+y^2+C.
$$

### PDF page 69

#### 16.4 Green's theorem

For a positively oriented, simple, closed, piecewise smooth curve $C$ enclosing a region $D$, let $\mathbf F=\langle F_1,F_2\rangle$ have continuous first derivatives on an open set containing $D$ and its boundary. Green's theorem gives
$$
\oint_C\mathbf F\cdot d\mathbf r
=\iint_D\left(\frac{\partial F_2}{\partial x}-\frac{\partial F_1}{\partial y}\right)dA.
$$
The positive orientation of an outer boundary is counterclockwise. Reversing it changes the sign of the integral. The scalar expression under the double integral is the vorticity of a plane velocity field, or local circulation per unit area.

![[Kyle Kabasares - Calculus III - Vector Calculus - Green theorem rectangle boundary.png|**Fig. 142** A rectangular region has a boundary formed by four directed segments.]]

For a small rectangle, the boundary circulation is approximately its area $\Delta x\,\Delta y$ times the vorticity. Add the circulations of the rectangles in a partition. Each shared edge is traversed twice with opposite directions, so only the outer boundary contributes. The sum of the area contributions tends to the double integral.

![[Kyle Kabasares - Calculus III - Vector Calculus - Cancellation of interior edges.png|**Fig. 143** The interior edges cancel when the circulations of the three rectangles are added.]]

For $\mathbf F=\langle-y,x\rangle$ and the counterclockwise unit circle, the vorticity is $1-(-1)=2$. Integrating over the disk gives
$$
\oint_C\mathbf F\cdot d\mathbf r
=\int_0^{2\pi}\int_0^1 2r\,dr\,d\theta=2\pi.
$$

### PDF page 70

For $\mathbf F=\langle-yx^2,y^2x\rangle$, the scalar curl is $y^2-(-x^2)=x^2+y^2$. To integrate on the upper unit semicircle $C$ from $(1,0)$ to $(-1,0)$, add the diameter $C_2$ from $(-1,0)$ to $(1,0)$. The field vanishes on $C_2$ because $y=0$. Applying Green's theorem to the closed boundary gives
$$
\int_C\mathbf F\cdot d\mathbf r
=\iint_D(x^2+y^2)\,dA-\int_{C_2}\mathbf F\cdot d\mathbf r
=\int_0^\pi\int_0^1 r^3\,dr\,d\theta=\frac{\pi}{4}.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Green theorem semicircle.png|**Fig. 144** The upper arc is traversed counterclockwise from angle zero to angle $\pi$.]]

#### Lecture, April 25, 2014

Green's theorem applies to nonconservative fields and uses a closed boundary. For $\mathbf F=\langle-y,x\rangle$ on the counterclockwise unit circle, direct parametrization gives $\mathbf r(t)=\langle\cos t,\sin t\rangle$ and $\mathbf F(\mathbf r(t))=\mathbf r'(t)=\langle-\sin t,\cos t\rangle$. Hence
$$
\oint_C\mathbf F\cdot d\mathbf r=\int_0^{2\pi}(\sin^2 t+\cos^2 t)\,dt=2\pi.
$$
The area calculation uses $(F_2)_x=1$ and $(F_1)_y=-1$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Unit circle circulation path.png|**Fig. 145** The unit circle is positively oriented for Green's theorem.]]

### PDF page 71

For $\mathbf F=\langle-y,x\rangle$ on the unit disk, Green's theorem gives $\int_0^{2\pi}\int_0^1 2r\,dr\,d\theta=2\pi$, in agreement with direct parametrization.

For $\mathbf F=\langle-yx^2,y^2x\rangle$, parametrize the upper unit arc $C_1$ by $\mathbf r(t)=\langle\cos t,\sin t\rangle$ for $0\leq t\leq\pi$. Along the arc,
$$
\mathbf F(\mathbf r(t))=\langle-\sin t\cos^2 t,\ \sin^2 t\cos t\rangle,\qquad
\mathbf r'(t)=\langle-\sin t,\cos t\rangle.
$$
Taking the dot product gives $2\sin^2 t\cos^2 t$, whose integral on $[0,\pi]$ is $\pi/4$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Arc closed by diameter.png|**Fig. 146** The diameter $C_2$ closes the arc $C_1$ to form the boundary of the upper half disk.]]

Green's theorem gives the same result. The scalar curl is $x^2+y^2$, so its integral over the half disk is $\pi[r^4/4]_0^1=\pi/4$. In general, after closing an arc one must subtract the line integral along the added path.

The two-dimensional curl is
$$
\begin{vmatrix}\partial_x&\partial_y\\F_1&F_2\end{vmatrix}
=(F_2)_x-(F_1)_y.
$$
In three dimensions,
$$
\nabla\times\mathbf F
=\langle (F_3)_y-(F_2)_z,\ (F_1)_z-(F_3)_x,\ (F_2)_x-(F_1)_y\rangle.
$$

### PDF page 72

The curl describes the local tendency of a velocity field to rotate a small marker placed in the flow. The divergence is the scalar
$$
\nabla\cdot\mathbf F
=\frac{\partial F_1}{\partial x}
+\frac{\partial F_2}{\partial y}
+\frac{\partial F_3}{\partial z}.
$$

At a point $(x_0,y_0,z_0)$, interpret $\mathbf F$ as a velocity field. Positive divergence indicates net local outflow, negative divergence indicates net local inflow, and zero divergence indicates that the two balance to first order.

### PDF page 73

#### 16.6 Surface parametrization, April 30, 2014

Represent a surface by $\mathbf r(u,v)=\langle x(u,v),y(u,v),z(u,v)\rangle$. Holding one parameter fixed and varying the other traces a curve on the surface. The corresponding tangent vectors are
$$
\mathbf r_u=\langle x_u,y_u,z_u\rangle,\qquad
\mathbf r_v=\langle x_v,y_v,z_v\rangle.
$$
Where they are linearly independent, a normal is $\mathbf n=\mathbf r_u\times\mathbf r_v$. A unit normal is $\mathbf n/\lVert\mathbf n\rVert$. The magnitude of the cross product will also determine the surface area element.

![[Kyle Kabasares - Calculus III - Vector Calculus - Surface parameter curves.png|**Fig. 147** The two families of parameter curves trace a grid across the surface.]]

For an ellipsoid with semiaxes $1,3,3$, choose
$$
\mathbf r(u,v)=\langle\cos u\sin v,\ 3\sin u\sin v,\ 3\cos v\rangle.
$$
Then
$$
\begin{aligned}
\mathbf r_u&=\langle-\sin u\sin v,\ 3\cos u\sin v,\ 0\rangle,\\
\mathbf r_v&=\langle\cos u\cos v,\ 3\sin u\cos v,\ -3\sin v\rangle,\\
\mathbf r_u\times\mathbf r_v
&=\langle-9\cos u\sin^2v,\ -3\sin u\sin^2v,\ -3\sin v\cos v\rangle.
\end{aligned}
$$
At $(u,v)=(0,0)$ the cross product is zero because the parametrization is singular at the pole. At $(\pi/2,\pi/2)$ it is $\langle0,-3,0\rangle$, directed along the negative $y$-axis.

![[Kyle Kabasares - Calculus III - Vector Calculus - Ellipsoid surface example.png|**Fig. 148** The ellipsoid extends one unit along its short semiaxis and three along each of the other two semiaxes.]]

### PDF page 74

A parameter rectangle with sides $\Delta u$ and $\Delta v$ maps to a small surface patch. Its area is approximately $\lVert\mathbf r_u\times\mathbf r_v\rVert\,\Delta u\,\Delta v$. In the limit the surface element and the total area are
$$
dS=\lVert\mathbf r_u\times\mathbf r_v\rVert\,du\,dv,\qquad
\iint_S dS=\iint_D\lVert\mathbf r_u\times\mathbf r_v\rVert\,du\,dv,
$$
where $D$ is the parameter domain for a parametrization that covers the surface once.

For a graph $z=f(x,y)$, take $\mathbf r(u,v)=\langle u,v,f(u,v)\rangle$. Then
$$
\mathbf r_u=\langle1,0,f_u\rangle,\qquad
\mathbf r_v=\langle0,1,f_v\rangle,\qquad
\mathbf r_u\times\mathbf r_v=\langle-f_u,-f_v,1\rangle.
$$
The area is $\iint_D\sqrt{1+f_u^2+f_v^2}\,du\,dv$.

#### 16.7 Surface integrals

The double integral $\iint_D f(x,y)\,dx\,dy$ integrates over a flat domain. The same idea extends to curved surfaces using the surface area element.

### PDF page 75

Surface integrals can add population density over Earth to obtain total population, integrate over the ocean to find its area and fraction of the surface, or compute the area-weighted average of atmospheric pressure. A scalar surface integral $\iint_S f\,dS$ is the limit of sums of $f$ sampled on each surface patch times the local patch area $\Delta S$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Spherical surface partition.png|**Fig. 149** A grid divides the sphere into small patches whose areas weight the sampled values.]]

To compute the integral, parametrize the surface by $\mathbf r(u,v)$, substitute $(x(u,v),y(u,v),z(u,v))$ into $f$, and express $dS$ in terms of $u$ and $v$:
$$
\iint_S f\,dS
=\iint_D f(\mathbf r(u,v))\lVert\mathbf r_u\times\mathbf r_v\rVert\,du\,dv.
$$

For the example $f(x,y,z)=x^2$ on the sphere of radius 3, take the spherical angles $u=\theta$ and $v=\phi$:
$$
\mathbf r(u,v)=\langle3\cos u\sin v,\ 3\sin u\sin v,\ 3\cos v\rangle,
\qquad 0\leq u\leq2\pi,\quad 0\leq v\leq\pi.
$$

### PDF page 76

For the sphere of radius 3, the parameter derivatives are
$$
\begin{aligned}
\mathbf r_u&=\langle-3\sin u\sin v,\ 3\cos u\sin v,\ 0\rangle,\\
\mathbf r_v&=\langle3\cos u\cos v,\ 3\sin u\cos v,\ -3\sin v\rangle.
\end{aligned}
$$

#### Lecture, May 2, 2014 — Review of surfaces

Review chapters 12–16, skipping sections 14.8, 15.5, 15.6, and 16.8. Use quizzes, lecture notes, homework, worksheets, and problems 3–6 of the second practice midterm.

For sections 16.6–16.7, parametrize the surface by $\mathbf r(u,v)=\langle x(u,v),y(u,v),z(u,v)\rangle$. The area element is $dS=\lVert\mathbf r_u\times\mathbf r_v\rVert\,du\,dv$. The corresponding unit normal is
$$
\widehat{\mathbf n}
=\frac{\mathbf r_u\times\mathbf r_v}{\lVert\mathbf r_u\times\mathbf r_v\rVert}
$$
for the orientation determined by that cross product.

A scalar surface integral is $\iint_S f(x,y,z)\,dS$, and taking $f=1$ gives the area. The flux of a vector field is $\iint_S \mathbf F\cdot\widehat{\mathbf n}\,dS$. In each case, parametrize the surface and substitute its coordinates into the scalar or vector field. Compute $dS$ in terms of $u,v$ and choose the appropriate normal for a flux.

### PDF page 77

A scalar surface integral can give the total amount of a pollutant from its density per unit area on Earth's surface. On a sphere of radius $R$, choose
$$
\mathbf r(\theta,\phi)
=\langle R\cos\theta\sin\phi,\ R\sin\theta\sin\phi,\ R\cos\phi\rangle.
$$
The parameter derivatives are
$$
\begin{aligned}
\mathbf r_\theta&=\langle-R\sin\theta\sin\phi,\ R\cos\theta\sin\phi,\ 0\rangle,\\
\mathbf r_\phi&=\langle R\cos\theta\cos\phi,\ R\sin\theta\cos\phi,\ -R\sin\phi\rangle.
\end{aligned}
$$
Their cross product is
$$
\mathbf r_\theta\times\mathbf r_\phi
=-R^2\langle\cos\theta\sin^2\phi,\ \sin\theta\sin^2\phi,\ \sin\phi\cos\phi\rangle.
$$
Its magnitude is $R^2\sin\phi$ for $0\leq\phi\leq\pi$, so $dS=R^2\sin\phi\,d\theta\,d\phi$. For the example $f(x,y,z)=z^2$, the integrand on the sphere is $R^2\cos^2\phi$ and the setup is
$$
\iint_S z^2\,dS=\int_0^\pi\int_0^{2\pi}
(R^2\cos^2\phi)(R^2\sin\phi)\,d\theta\,d\phi.
$$

#### 16.7 Flux

Flux measures how much of a vector field passes through a surface. For a field $\mathbf F=\langle F_1,F_2,F_3\rangle$ and a chosen unit normal $\widehat{\mathbf n}$, the relevant component is $\mathbf F\cdot\widehat{\mathbf n}$. The parametrization provides both the normal $\widehat{\mathbf n}=(\mathbf r_u\times\mathbf r_v)/\lVert\mathbf r_u\times\mathbf r_v\rVert$ and the area element $dS=\lVert\mathbf r_u\times\mathbf r_v\rVert\,du\,dv$.

### PDF page 78

The flux through an oriented surface is $\iint_S \mathbf F\cdot\widehat{\mathbf n}\,dS$. The dot product gives flux per unit area. For a compatible parametrization, the oriented area element $\widehat{\mathbf n}\,dS$ equals the corresponding cross product of the two tangent derivatives times the parameter area element.

In the solar-wind example, take $\mathbf F=\langle-x+y,-x-y,z\rangle$ and model Earth by a sphere of radius 7:
$$
\begin{aligned}
\mathbf r(\theta,\phi)&=7\langle\cos\theta\sin\phi,\sin\theta\sin\phi,\cos\phi\rangle,\\
\mathbf r_\theta&=7\langle-\sin\theta\sin\phi,\cos\theta\sin\phi,0\rangle,\\
\mathbf r_\phi&=7\langle\cos\theta\cos\phi,\sin\theta\cos\phi,-\sin\phi\rangle.
\end{aligned}
$$
The outward oriented cross product is $\mathbf r_\phi\times\mathbf r_\theta$. On the sphere the field is
$$
7\langle(-\cos\theta+\sin\theta)\sin\phi,\ -(\cos\theta+\sin\theta)\sin\phi,\ \cos\phi\rangle.
$$
The mixed terms cancel in the dot product, giving the outward flux
$$
\int_0^\pi\int_0^{2\pi}7^3\sin\phi(\cos^2\phi-\sin^2\phi)\,d\theta\,d\phi
=-\frac{4\pi 7^3}{3}.
$$
The source's boxed value uses a plus sign between the squared trigonometric terms. The field as written gives the difference shown above, with inward flux $4\pi 7^3/3$.

For a sphere of arbitrary radius $R$, the same angular parametrization gives the outward unit normal $\langle\cos\theta\sin\phi,\sin\theta\sin\phi,\cos\phi\rangle$ and $dS=R^2\sin\phi\,d\theta\,d\phi$.

### PDF page 79

On the side of a cylinder of radius $R$,
$$
\mathbf r(\theta,z)=\langle R\cos\theta,R\sin\theta,z\rangle,\qquad
\widehat{\mathbf n}=\langle\cos\theta,\sin\theta,0\rangle,\qquad
dS=R\,d\theta\,dz.
$$
For the graph $z=f(x,y)$, the parametrization $\mathbf r(x,y)=\langle x,y,f(x,y)\rangle$ has upward normal $\langle-f_x,-f_y,1\rangle$ before normalization and area element $dS=\sqrt{1+f_x^2+f_y^2}\,dx\,dy$.

#### 16.9 Divergence theorem, May 5, 2014

The final exam is listed for Friday, May 16, from 8 to 11 in COB 116. The divergence $\nabla\cdot\mathbf F=(F_1)_x+(F_2)_y+(F_3)_z$ measures net outward flux per unit volume in the limit near a point.

Computing the flux through a box face by face requires six double integrals. In the sketch, the six outward unit normals, in order, are
$$
\langle-1,0,0\rangle,\quad \langle0,1,0\rangle,\quad
\langle1,0,0\rangle,\quad \langle0,-1,0\rangle,\quad
\langle0,0,1\rangle,\quad \langle0,0,-1\rangle.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Outward normals of a box.png|**Fig. 150** Each of the six faces contributes a flux with its own outward normal.]]

For a box centered at the origin, face 1 lies at $x=-\Delta x/2$, with outward normal $\langle-1,0,0\rangle$. Its flux element is $-F_1(-\Delta x/2,y,z)\,dy\,dz$.

### PDF page 80

The flux through the negative $x$ face of the centered box is
$$
\int_{-\Delta z/2}^{\Delta z/2}\int_{-\Delta y/2}^{\Delta y/2}
-F_1(-\Delta x/2,y,z)\,dy\,dz.
$$
It is approximately the normal component at a sample point times $\Delta y\,\Delta z$.

If $\mathbf F$ is continuously differentiable on a neighborhood of a solid $V$ bounded by a closed piecewise smooth surface $S$, the divergence theorem gives
$$
\iiint_V\nabla\cdot\mathbf F\,dV
=\iint_S\mathbf F\cdot\widehat{\mathbf n}\,dS
$$
with the outward orientation.

![[Kyle Kabasares - Calculus III - Vector Calculus - Closed surface outward direction.png|**Fig. 151** The normal on the boundary of the solid points outward.]]

Find the outward flux through the sphere of radius 2 centered at the origin for
$$
\mathbf F(x,y,z)=\langle x^2+x+1+y,\ 3y-2xy+4z,\ z^2+e^{xy}\rangle.
$$
The divergence is $(1+2x)+(3-2x)+2z=4+2z$. The $2z$ contribution integrates to zero by reflection symmetry. Hence
$$
\iiint_V(4+2z)\,dV=4\left(\frac{4\pi}{3}\cdot2^3\right)=\frac{128\pi}{3}.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Divergence theorem sphere.png|**Fig. 152** The sphere encloses the ball used for the volume integral.]]

### PDF page 81

For the curved hemisphere $S$ on $x^2+y^2+z^2=9$ with $y\leq0$, close the surface with the disk $D$ in the plane $y=0$. The divergence theorem gives
$$
\iint_S\mathbf F\cdot\widehat{\mathbf n}\,dS
=\iiint_V\nabla\cdot\mathbf F\,dV-\iint_D\mathbf F\cdot\widehat{\mathbf n}\,dS.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Hemisphere closed by disk.png|**Fig. 153** The curved hemisphere and a flat disk together enclose the half-ball.]]

The field is $\mathbf F=\langle4x-z^2,(y-1)^2,\sin y+z\rangle$, with divergence $4+2(y-1)+1=3+2y$. The constant part integrates to $3\operatorname{vol}(V)=54\pi$. The angular bounds are $0\leq\phi\leq\pi$, $\pi\leq\theta\leq2\pi$, and $0\leq\rho\leq3$. The $2y$ part contributes
$$
\int_\pi^{2\pi}\int_0^\pi\int_0^3 2\rho^3\sin\theta\sin^2\phi\,d\rho\,d\phi\,d\theta
=-\frac{81\pi}{2}.
$$
Thus the closed surface has flux $27\pi/2$. The disk's outward normal is $\langle0,1,0\rangle$, so its flux is $\iint_D(0-1)^2\,dA=9\pi$. The curved hemisphere contributes the difference $9\pi/2$. The integration bounds and the disk equation $x^2+z^2=9$ specify the plane $y=0$. The sketch labels the plane $x=0$.

### PDF page 82

#### Midterm 2 discussion, May 8, 2014

Problem 2 asks for the absolute maximum of $f(x,y)=2x+2y-x^2-3y^2$ on the triangle bounded by $y=x$, $y=0$, and $x=3$. The equations $f_x=2-2x=0$ and $f_y=2-6y=0$ give $(1,1/3)$. For the second derivative test, $D=f_{xx}f_{yy}-f_{xy}^2$. If $D>0$, the sign of $f_{xx}$ distinguishes a local minimum from a local maximum. If $D<0$, the point is a saddle, and if $D=0$, the test is inconclusive. Here $D=12$ and $f_{xx}=-2$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Triangular optimization domain.png|**Fig. 154** The triangle has vertices $(0,0)$, $(3,0)$, and $(3,3)$.]]

On the edge $y=0$, $f(x,0)=2x-x^2$ has its critical point at $(1,0)$. The page begins a table for comparing the interior candidate, the boundary candidates, and the vertices. The stated maximum is $f(1,1/3)=4/3$. It also follows by writing $f=4/3-(x-1)^2-3(y-1/3)^2$.

Problem 5 sets up the mass integral for the part of the unit ball above the cone $z=r$, with density $3-z^2-r^2$. The cone meets the sphere where $r=\sqrt{1-r^2}$, so the cylindrical setup is
$$
\mechanical{M}
=\int_0^{2\pi}\int_0^{1/\sqrt2}\int_r^{\sqrt{1-r^2}}r(3-z^2-r^2)\,dz\,dr\,d\theta.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Unit sphere and cone section.png|**Fig. 155** A cross-section shows the cone below the spherical boundary.]]

### PDF page 83

For the mass example in spherical coordinates, the bounds are $0\leq\rho\leq1$, $0\leq\phi\leq\pi/4$, and $0\leq\theta\leq2\pi$. The density becomes $3-\rho^2$, so
$$
\mechanical{M}
=\int_0^{\pi/4}\int_0^{2\pi}\int_0^1
(3-\rho^2)\rho^2\sin\phi\,d\rho\,d\theta\,d\phi.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Spherical angle of the cone.png|**Fig. 156** The inclination $\phi$ is measured from the vertical axis to the ray within the cone.]]

#### Worksheet 11, problem 3

Integrate $f(x,y)=(y-3x)(2x+y)^2$ over the quadrilateral with vertices $(0,0)$, $(1,3)$, $(0,5)$, and $(-1,2)$ using a change of variables.

![[Kyle Kabasares - Calculus III - Vector Calculus - Worksheet quadrilateral.png|**Fig. 157** The four edges lie on $y=3x$, $y=3x+5$, $y=-2x$, and $y=-2x+5$.]]

Choose $u=y+2x$ and $v=y-3x$. The pairs of opposite sides become $u=0,5$ and $v=0,5$. The transformed integrand before the area factor is $vu^2$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Worksheet transformed square.png|**Fig. 158** The quadrilateral maps to the square $[0,5]\times[0,5]$.]]

The remaining steps are to solve for $x(u,v)$ and $y(u,v)$ and use
$$
J=\begin{vmatrix}x_u&x_v\\y_u&y_v\end{vmatrix}.
$$

### PDF page 84

#### Cofactor expansion of a $3\times3$ determinant

The cofactor signs form a checkerboard:
$$
\begin{pmatrix}
+&-&+\\
-&+&-\\
+&-&+
\end{pmatrix}.
$$
Expanding along the first row gives
$$
J=\begin{vmatrix}
1&2&3\\
4&5&6\\
7&8&9
\end{vmatrix}
=1(5\cdot9-6\cdot8)-2(4\cdot9-6\cdot7)+3(4\cdot8-5\cdot7)=0.
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{t}$ | $\unit{s}$ | Time | Parameter of a physical trajectory. |
| $\mechanical{\mathbf r}$ | $\unit{m}$ | Position | Vector from the coordinate origin to the moving point. |
| $\mechanical{\mathbf v}$ | $\unit{m\,s^{-1}}$ | Velocity | Time derivative of the position vector. |
| $\mechanical{\mathbf F}$ | $\unit{N}$ | Force | Vector describing a mechanical interaction. |
| $\mechanical{R}$ | $\unit{m}$ | Radius | Distance from Earth’s center to the satellite, or radius of the rolling circle. |
| $\mechanical{\mathbf a}$, $\mechanical{a}$ | $\unit{m\,s^{-2}}$ | Acceleration | Time derivative of velocity, or its signed one-dimensional value. |
| $\mechanical{v}$, $\mechanical{v}_0$ | $\unit{m\,s^{-1}}$ | One-dimensional velocity | Signed velocity and its value at the initial time. |
| $\lVert\mechanical{\mathbf v}\rVert$ | $\unit{m\,s^{-1}}$ | Speed | Magnitude of the velocity vector. |
| $\mechanical{x}$, $\mechanical{y}$ | $\unit{m}$ | Position components | Horizontal and vertical coordinates of the marked point. |
| $\mechanical{\omega}$ | $\unit{rad\,s^{-1}}$ | Angular speed | Constant rate at which the circle rotates. |
| $\mechanical{\theta}$ | $\unit{rad}$ | Rotation angle or azimuth | Angle swept by the rolling circle, or horizontal direction of the initial velocity measured from the positive $x$-axis. |
| $\mechanical{d}$ | $\unit{m}$ | Distance traveled by the center | Arc swept at the circumference, equal to the distance rolled. |
| $\mechanical{s}$ | $\unit{m}$ | Arc length | Distance traveled by the marked point along its trajectory. |
| $\mechanical{\phi}$ | $\unit{rad}$ | Launch inclination | Angle of the initial velocity from the positive vertical. |
| $\mechanical{\mathbf v}_0$, $\mechanical{v}_{0x}$, $\mechanical{v}_{0y}$, $\mechanical{v}_{0z}$ | $\unit{m\,s^{-1}}$ | Initial velocity and components | Velocity at launch resolved into Cartesian components. |
| $\mechanical{x}_0$, $\mechanical{y}_0$, $\mechanical{z}_0$ | $\unit{m}$ | Initial position coordinates | Position components at launch. |
| $\mechanical{\rho}$ | $\unit{kg\,m^{-3}}$ | Mass density | Mass per unit volume. |
| $\mechanical{M}$ | $\unit{kg}$ | Total mass | Integral of the density over the solid. |
| $\mechanical{W}$ | $\unit{J}$ | Work | Integral of force projected onto the direction of displacement. |
| $\mechanical{F}_1$, $\mechanical{F}_2$, $\mechanical{F}_3$ | $\unit{N}$ | Force components | Cartesian components of the force field. |
