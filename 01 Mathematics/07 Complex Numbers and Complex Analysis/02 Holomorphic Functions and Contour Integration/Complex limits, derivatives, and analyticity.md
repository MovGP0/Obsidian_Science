---
title: "Complex limits, derivatives, and analyticity"
---

> [!TLDR]
> Use the geometry of disks and the Cauchy–Riemann equations to test continuity and complex differentiability.

## Worked lecture material

On the real line the $\epsilon$-neighborhood of $x_0$ is the interval

$$
N_\epsilon(x_0)=\{x\in\mathbb R\mid |x-x_0|<\epsilon\}
=(x_0-\epsilon,x_0+\epsilon).
$$

![[Kyle Kabasares - Complex Variables - Epsilon neighborhood on the real line.png|**Fig. 16** The neighborhood extends a distance $\epsilon$ to either side of $x_0$.]]

In $\mathbb C$, the condition $|z-z_0|<\epsilon$ gives an open disk. A deleted neighborhood excludes the center as well as the boundary, so $0<|z-z_0|<\epsilon$. The real analogue is $(x_0-\epsilon,x_0)\cup(x_0,x_0+\epsilon)$.

![[Kyle Kabasares - Complex Variables - Shaded deleted neighborhood.png|**Fig. 17** The shaded disk has its center removed and its circumference dashed.]]

![[Kyle Kabasares - Complex Variables - Deleted neighborhood centered at zero.png|**Fig. 18** The origin is excluded from its deleted neighborhood.]]

##### Points of a region

Let $S\subseteq\mathbb C$.

- An interior point $z_0$ has a neighborhood contained in $S$.
- An exterior point $z_0$ has a neighborhood containing no point of $S$.
- At a boundary point, every neighborhood meets both $S$ and its complement.

![[Kyle Kabasares - Complex Variables - Interior and boundary points of a region.png|**Fig. 19** A small disk about the interior point lies in the region. The other marked point lies on the boundary.]]

**Example.** For the closed unit disk $S=\{z\in\mathbb C\mid |z|\le1\}$,

$$
\begin{aligned}
\operatorname{Int}(S)&=\{z\mid |z|<1\},\\
\operatorname{Ext}(S)&=\{z\mid |z|>1\},\\
\operatorname{Bdry}(S)&=\{z\mid |z|=1\}.
\end{aligned}
$$

If a point $z_1$ outside the disk is adjoined, giving $S=\{z\in\mathbb C\mid |z|\le1\}\cup\{z_1\}$, then $z_1$ is also a boundary point.

![[Kyle Kabasares - Complex Variables - Unit disk and isolated boundary point.png|**Fig. 20** The point $z_1$ lies away from the disk and belongs to the boundary of the union.]]

##### Open and closed sets

A set is open if it contains none of its boundary points. The notes illustrate this with the open unit disk.

![[Kyle Kabasares - Complex Variables - Open unit disk with dashed circumference.png|**Fig. 21** The dashed circle is excluded from the open disk.]]

A set is closed if it contains all its boundary points. The closed disk with the isolated point $z_1$ is an example.

![[Kyle Kabasares - Complex Variables - Closed disk with an isolated point.png|**Fig. 22** Both the solid circumference and the point $z_1$ belong to the set.]]

Adjoin the single boundary point $i$ to the open unit disk. The resulting set is neither open nor closed.

![[Kyle Kabasares - Complex Variables - Open disk with one boundary point included.png|**Fig. 23** The dashed circumference is excluded except for the marked point $i$.]]

The closure of $S$ consists of $S$ together with all its boundary points.

##### Connected sets

The notes use a polygonal-path criterion. For each pair $z_1,z_2$ in the set, there must be a path made of finitely many line segments lying entirely in the set. This criterion is equivalent to connectedness for open subsets of $\mathbb C$.

![[Kyle Kabasares - Complex Variables - Connected and disconnected sets.png|**Fig. 24** The points in the left sketch can be joined inside the region. The segment on the right crosses the gap between two components.]]

##### Bounded sets

A set $S$ is bounded if there is a real $R>0$ such that every point of $S$ lies inside the circle $C_R=\{z\mid |z|=R\}$. A set without such a bound is unbounded.

**Example.** The half-plane $S=\{z\mid\operatorname{Re}z\ge1\}$ is closed and connected. For $z=x+iy$, the condition is $x\ge1$.

![[Kyle Kabasares - Complex Variables - Closed right half plane.png|**Fig. 25** The shaded half-plane includes the vertical boundary line $\operatorname{Re}z=1$.]]

The entire complex plane $\mathbb C$ is both open and closed as a subset of itself. The real axis $\mathbb R$ is closed in the complex plane.

For a finite set $S=\{z_1,\ldots,z_n\}\subseteq\mathbb C$, every point of $S$ is a boundary point and every point outside $S$ is exterior. Thus $S$ is bounded and closed. If it has more than one point, it is disconnected.

![[Kyle Kabasares - Complex Variables - Finite set of isolated complex points.png|**Fig. 26** Each dot is an isolated point and belongs to the boundary of the finite set.]]

##### Functions

A function $f$ on a set $D$ of complex numbers assigns one complex number $w=f(z)$ to each $z\in D$. The set $D$ is the domain of definition. The set of all values $f(z)$ as $z$ varies over $D$ is the range, denoted $R$ in the notes.

For $z=x+iy$, write $f(z)=u(x,y)+iv(x,y)$, where $u$ and $v$ are the real and imaginary parts of the output.

![[Kyle Kabasares - Complex Variables - Mapping from the domain to the range.png|**Fig. 27** The map $w=f(z)$ takes points of $D$ in the $(x,y)$ plane to points of $R$ in the $(u,v)$ plane.]]

Write $f(z)=u(z)+iv(z)$, where $u(z)=u(x,y)$ and $v(z)=v(x,y)$ are real-valued functions of the two real variables $x$ and $y$. If the domain is all of $\mathbb C$, each component is a map $\mathbb R^2\to\mathbb R$.

**Example.** For $f(z)=z^3$, expand the cube.

$$
\begin{aligned}
(x+iy)^3
&=x^3+3ix^2y-3xy^2-iy^3\\
&=(x^3-3xy^2)+i(3x^2y-y^3).
\end{aligned}
$$

Thus $u(x,y)=x^3-3xy^2$ and $v(x,y)=3x^2y-y^3$. The handwritten grouped expression and the line for $u$ use $y^3$ in the real term. The first expansion gives $y^2$ there.

**Example.** For $f(z)=e^z=e^x(\cos y+i\sin y)$, the real and imaginary parts are $u=e^x\cos y$ and $v=e^x\sin y$.

![[Kyle Kabasares - Complex Variables - Exponential map sends lines to circles and rays.png|**Fig. 28** Under the exponential, $x=c$ maps to the circle of radius $e^c$. The line $y=c$ maps to the ray at angle $c$, excluding its origin.]]

**Example.** Find the image of the circle $z(t)=(1+\cos t)+i(1+\sin t)$, $-\pi\le t\le\pi$, under $f(z)=(3+4i)z+(-2+i)$. The page substitutes $x=1+\cos t$ and $y=1+\sin t$ into the map and begins distributing the factors. Grouping the terms gives

$$
f(z(t))=(-3+3\cos t-4\sin t)+i(8+4\cos t+3\sin t).
$$

##### Mappings

The announcement lists Thursday office hours from 12:30 to 2:30 p.m. A mapping assigns values from one set to another. The image of $A$ under $f$ is $B=\{f(z)\mid z\in A\}$.

![[Kyle Kabasares - Complex Variables - Constant function graph and singleton image.png|**Fig. 29** The graph of $f(x)=1$ is a horizontal line, while its image on $\mathbb R$ is the single value 1.]]

A complex map $w=f(z)$ sends the input coordinates $(x,y)$ to output coordinates $(u,v)$, where $z=x+iy$ and $w=u+iv$.

**Example.** Continue the circle calculation for $w=(3+4i)z+(-2+i)$. The first handwritten statement of the map appears to use $-z+i$ for the translation. The expansion below it and the previous page use $-2+i$.

$$
w=(3+4i)(x+iy)+(-2+i)=(3x-4y-2)+i(4x+3y+1).
$$

With $x(t)=1+\cos t$ and $y(t)=1+\sin t$, the components become

$$
u(t)=3\cos t-4\sin t-3,\qquad
v(t)=4\cos t+3\sin t+8.
$$

Then $(u(t)+3)^2+(v(t)-8)^2=25$, or $|w(t)-(-3+8i)|=5$.

![[Kyle Kabasares - Complex Variables - Image of a circle under an affine map.png|**Fig. 30** The unit circle centered at $1+i$ maps to a circle of radius 5 centered at $-3+8i$.]]

The bottom line starts solving for $z$ by moving the translation to the other side. The full inverse is $z=(w-(-2+i))/(3+4i)$.

##### Accumulation points

A point $z_0$ is an accumulation point of $S$ if each deleted neighborhood $D_\epsilon(z_0)=\{z\in\mathbb C\mid 0<|z-z_0|<\epsilon\}$, with $\epsilon>0$, contains at least one point of $S$.

![[Kyle Kabasares - Complex Variables - Deleted neighborhood of an accumulation point.png|**Fig. 31** The point $z\in S$ lies within distance $\epsilon$ of $z_0$ and is distinct from it.]]

**Worksheet 4**

1(a). The sketched half-plane $\operatorname{Im}z>1$ is a domain. A domain is nonempty, open, and connected.

![[Kyle Kabasares - Complex Variables - Open half plane above imaginary coordinate one.png|**Fig. 32** The shaded half-plane excludes the dashed line $\operatorname{Im}z=1$.]]

1(b). The set $|z-2+i|\le1$ can be written $|(x-2)+i(y+1)|\le1$. It is a closed disk of radius 1 centered at $2-i$. It includes its boundary, so it fails the openness condition for a domain.

![[Kyle Kabasares - Complex Variables - Closed disk centered at two minus i.png|**Fig. 33** The disk is centered at $(2,-1)$ and tangent to the real axis.]]

2(a). For $z_n=i^n$ with $n=1,2,3,\ldots$, the values repeat in the order $i,-1,-i,1$. The set of these four values has no accumulation points.

![[Kyle Kabasares - Complex Variables - Four points from the powers of i.png|**Fig. 34** The four distinct powers lie on the coordinate axes.]]

2(b). For $z_n=i^n/n$, the first four terms are $i,-1/2,-i/3,1/4$. The points cycle through the axes with modulus $1/n$, so they approach zero.

![[Kyle Kabasares - Complex Variables - Powers of i scaled by the reciprocal index.png|**Fig. 35** The first four terms lie on different axes at decreasing distances from the origin.]]

##### Continuity and limits

For a real function defined around $c$, continuity at $c$ requires both one-sided limits to exist and agree with the function value.

$$
\lim_{x\to c^+}f(x)=f(c)=\lim_{x\to c^-}f(x).
$$

![[Kyle Kabasares - Complex Variables - Continuous real function at c.png|**Fig. 36** The graph approaches the marked value $f(c)$ from either side.]]

The $\epsilon$–$\delta$ definition of $\lim_{x\to x_0}f(x)=L$ asks that for every $\epsilon>0$ there be a $\delta>0$ such that $|f(x)-L|<\epsilon$ whenever $0<|x-x_0|<\delta$ and $x$ is in the domain. The handwritten condition omits the exclusion of $x=x_0$. The sketch illustrates the continuous case $f(x_0)=L$, where the inequality also holds at $x_0$.

![[Kyle Kabasares - Complex Variables - Epsilon and delta intervals for a real limit.png|**Fig. 37** A horizontal interval of radius $\delta$ about $x_0$ keeps the corresponding function values within $\epsilon$ of $L$.]]

##### Complex limits and continuity

Let $z_0$ be an accumulation point of the domain. The statement $\lim_{z\to z_0}f(z)=w_0$ means that for every real $\epsilon>0$ there is a real $\delta>0$ such that

$$
0<|z-z_0|<\delta\quad\Longrightarrow\quad |f(z)-w_0|<\epsilon
$$

for $z$ in the domain. The handwritten inequality omits the lower bound, while the text explicitly says that $f(z_0)$ need not exist. The lower bound gives the deleted neighborhood used for the limit.

![[Kyle Kabasares - Complex Variables - Neighborhoods in the input and output planes.png|**Fig. 38** The image of the relevant input neighborhood fits inside the $\epsilon$-neighborhood of $w_0$.]]

The choice of $\delta$ depends on $\epsilon$. It is not unique. If a positive $\delta$ works, then so do $\delta/2$ and $\delta/4$.

To establish uniqueness of the limit by contradiction, the notes draw two candidate values $w_0$ and $w_1$ separated by $D=|w_0-w_1|>0$, choose $\epsilon=D/10$, and recall the triangle inequality $|a+b|\le|a|+|b|$.

![[Kyle Kabasares - Complex Variables - Two candidate complex limits.png|**Fig. 39** The two proposed limits have disjoint neighborhoods of radius $D/10$.]]

For three complex numbers $z,w,y$, use $a=-(z-w)$ and $b=z-y$ in the triangle inequality.

$$
|w-y|=|-(z-w)+(z-y)|\le|w-z|+|z-y|.
$$

Geometrically, the direct distance is at most the length of the path through $z$.

##### Uniqueness of the limit

Suppose $w_0\ne y_0$ are both limits of $f(z)$ as $z\to z_0$. This page chooses $\epsilon=|w_0-y_0|/3$. The two limit conditions supply $\delta_1,\delta_2>0$. Let $\delta=\min\{\delta_1,\delta_2\}$. At a domain point with $0<|z-z_0|<\delta$, both $|f(z)-w_0|<\epsilon$ and $|f(z)-y_0|<\epsilon$ hold. Such points exist because $z_0$ is an accumulation point of the domain. Then

$$
3\epsilon=|w_0-y_0|
\le|f(z)-w_0|+|f(z)-y_0|
<2\epsilon,
$$

a contradiction.

##### Limits of the real and imaginary parts

Write $f(z)=u(x,y)+iv(x,y)$, $z=x+iy$, $z_0=x_0+iy_0$, and $w_0=u_0+iv_0$. Then $\lim_{z\to z_0}f(z)=w_0$ if and only if

$$
\lim_{(x,y)\to(x_0,y_0)}u(x,y)=u_0
\qquad\text{and}\qquad
\lim_{(x,y)\to(x_0,y_0)}v(x,y)=v_0.
$$

The notes suggest proving this by starting with the real component limits and then treating the complex limit.

**Example.** Find the limit of $f(z)=(z+i)^2$ as $z\to2-i$. The introductory line looks like $z\to z-i$, but the substitution below uses $2-i$. With $z=x+iy$,

$$
\begin{aligned}
f(z)&=z^2+2iz-1\\
&=(x^2-y^2-2y-1)+i(2xy+2x).
\end{aligned}
$$

The two components are polynomials and continuous at $(2,-1)$. Substitution gives a real part of $4-1+2-1=4$ and an imaginary part of $2(2)(-1)+2(2)=0$. Therefore the limit is 4.

##### Limits at infinity

The extended complex plane adjoins one point, $\infty$, to $\mathbb C$.

![[Kyle Kabasares - Complex Variables - Directions toward complex infinity.png|**Fig. 40** The arrows indicate that points can tend to infinity in any direction in the plane.]]

For each $\epsilon>0$, the region $|z|>1/\epsilon$ corresponds to points near the north pole under stereographic projection. Together with $\infty$, it forms a neighborhood of infinity in the extended plane.

![[Kyle Kabasares - Complex Variables - Neighborhood outside a circle at infinity.png|**Fig. 41** The finite part of the neighborhood lies outside the circle $|z|=1/\epsilon$.]]

##### Theorem on infinite limits

For $f$ and its reciprocal on a deleted neighborhood in the domain,

$$
\lim_{z\to z_0}f(z)=\infty
\quad\Longleftrightarrow\quad
\lim_{z\to z_0}\frac1{f(z)}=0.
$$

Here tending to infinity means that the modulus grows beyond every finite bound.

##### Review of the $\epsilon$–$\delta$ definition

The modulus $|z|$ is distance from the origin. The modulus $|z_1-z_2|$ is the length of the segment between $z_1$ and $z_2$. If both coordinates of $z_2$ exceed those of $z_1$, the two signed components of $z_1-z_2$ are negative. The handwritten explanation calls these negative quantities “magnitudes.”

![[Kyle Kabasares - Complex Variables - Difference of two complex points as a vector.png|**Fig. 42** The vector $z_1-z_2$ points from $z_2$ to $z_1$ and is redrawn from the origin.]]

To show $\lim_{z\to z_0}f(z)=L$, start with a given $\epsilon>0$, the radius of an open disk centered at $L$. Find $\delta>0$ such that every domain point with $0<|z-z_0|<\delta$ has $|f(z)-L|<\epsilon$. The image needs to lie inside the output disk. The handwritten phrase “maps onto every point” would require the stronger condition that the entire output disk is attained.

![[Kyle Kabasares - Complex Variables - Deleted input disk mapped inside the output disk.png|**Fig. 43** The arrows show points of the input disk mapping into the output disk.]]

##### Epsilon–delta proofs

For each $\epsilon>0$, choose $\delta>0$ so that $|f(z)-L|<\epsilon$ whenever $0<|z-z_0|<\delta$ in the domain. In general $\delta$ depends on $\epsilon$.

**Example.** For $f(z)=i\bar z/2$ on the open unit disk, prove $\lim_{z\to1}f(z)=i/2$.

![[Kyle Kabasares - Complex Variables - Open disk for the conjugation limit.png|**Fig. 44** The domain is the open disk $|z|<1$, and the approach point $1$ lies on its boundary.]]

Using $|z_1z_2|=|z_1||z_2|$ and invariance of modulus under conjugation,

$$
\left|f(z)-\frac i2\right|
=\left|\frac{i(\bar z-1)}2\right|
=\frac{|\bar z-1|}{2}=\frac{|z-1|}{2}.
$$

Choose $\delta=2\epsilon$. Then $0<|z-1|<\delta$ implies $\left|f(z)-i/2\right|<\epsilon$.

**Example.** Show that $z/\bar z$ has no limit as $z\to0$. The notes suggest trying paths such as $x=y$, $x=y^2$, the real axis, and the imaginary axis. On the real axis, with $z=x+i0$ and $x\ne0$, the quotient is $x/x=1$, so the limit along that axis is 1.

On the imaginary axis $z=iy$ and $z/\bar z=iy/(-iy)=-1$ for $y\ne0$. The limit along this axis is $-1$, while the limit along the real axis is $1$. Therefore $\lim_{z\to0}z/\bar z$ does not exist.

##### Continuity conditions

The limit $\lim_{z\to z_0}f(z)$ must exist, $f(z_0)$ must be defined, and the two must agree.

##### Worksheet 1(a)

To show $\lim_{z\to z_0}\bar z=\bar z_0$, use $|\bar z-\bar z_0|=|\overline{z-z_0}|=|z-z_0|$. Taking $\delta=\epsilon$ gives the required estimate.

##### Worksheet 3(a)

The notes record $\lim_{z\to\infty}T(z)=\infty$ if $c=0$. The displayed denominator of $T$ is incomplete. In the usual linear fractional form $T(z)=(az+b)/(cz+d)$ with $ad-bc\ne0$, the case $c=0$ gives a nonconstant affine function, which tends to infinity in modulus.

##### Theorem 1

The lecture restates that $\lim_{z\to z_0}f(z)=\infty$ if and only if $\lim_{z\to z_0}1/f(z)=0$. The proof begins by assuming the infinite limit. The handwritten estimate starts with the finite-limit template $|f(z)-L|<\epsilon$. For $L=\infty$, the sketch instead motivates using the neighborhood of infinity, corresponding in the plane to $|f(z)|>1/\epsilon$.

![[Kyle Kabasares - Complex Variables - Neighborhood of infinity on the sphere.png|**Fig. 45** The cap around the north pole represents a neighborhood of infinity on the extended complex plane.]]

For an infinite limit, given any $\epsilon>0$, choose $\delta>0$ so that $|f(z)|>1/\epsilon$ whenever $0<|z-z_0|<\delta$ in the domain. The reciprocal inequality is

$$
\left|\frac1{f(z)}-0\right|=\frac1{|f(z)|}<\epsilon.
$$

The two inequalities are equivalent where the reciprocal is defined. This gives the limit $1/f(z)\to0$ as $z\to z_0$.

![[Kyle Kabasares - Complex Variables - Function value outside the radius one over epsilon.png|**Fig. 46** The value $f(z)$ lies outside the circle of radius $1/\epsilon$.]]

For a limit at infinity in both planes, the notes combine reciprocation of the input and output.

$$
\lim_{z\to\infty} f(z)=\infty
\quad\Longleftrightarrow\quad
\lim_{\zeta\to0}\frac1{f(1/\zeta)}=0.
$$

The page refers to lecture 8, slide 17, for the proof.

**Example.** The initial line gives 0 for the limit of $f(z)=(2z^3-1)/(z^2+1)$ as $z\to\infty$. The worked calculation below assigns 0 to the transformed reciprocal and infinity to the original limit. With $\zeta=1/z$,

$$
g(\zeta)=\frac1{f(1/\zeta)}
=\frac{(1/\zeta)^2+1}{2(1/\zeta)^3-1}
=\frac{\zeta+\zeta^3}{2-\zeta^3}.
$$

Thus $g(\zeta)\to0$ as $\zeta\to0$, and $f(z)\to\infty$ as $z\to\infty$. The page lists three ways to study the limit of $g$. Use the $\epsilon$–$\delta$ definition, substitute $\zeta=re^{i\theta}$ and let $r\to0$, or write $\zeta=x+iy$ and study the two real components of $g$.

To estimate the transformed function from the preceding example, seek $\delta>0$ such that

$$
\left|\frac{z+z^3}{2-z^3}\right|<\epsilon
\qquad\text{whenever }0<|z|<\delta.
$$

For $z=re^{i\theta}$, the numerator obeys $|re^{i\theta}+r^3e^{3i\theta}|\le r+r^3$. The notes recall $|a+b|\le|a|+|b|$ and the reverse estimate $|a|-|b|\le |a+b|$. Applied to the denominator, the latter gives $|2-z^3|\ge2-r^3$.

##### Differentiability

The real difference quotient is $[f(x+h)-f(x)]/h$. For a complex increment $\Delta z=\Delta x+i\Delta y$, the derivative is

$$
f'(z_0)
=\lim_{\Delta z\to0}\frac{f(z_0+\Delta z)-f(z_0)}{\Delta z}
=\lim_{z\to z_0}\frac{f(z)-f(z_0)}{z-z_0},
$$

when the limit exists.

**Example.** For $f(z)=3z^2+1$, the constants cancel in the difference quotient.

$$
\frac{3(z+\Delta z)^2+1-(3z^2+1)}{\Delta z}
=\frac{6z\Delta z+3(\Delta z)^2}{\Delta z}
=6z+3\Delta z.
$$

The intermediate handwritten expansion appears to place an extra factor of 3 on the cross term, while the final line uses $6z$. Taking $\Delta z\to0$ gives $f'(z)=6z$.

**Example.** For $f(z)=\bar z$, the difference quotient at any $z$ simplifies to

$$
\frac{\overline{z+\Delta z}-\bar z}{\Delta z}
=\frac{\overline{\Delta z}}{\Delta z}
=\frac{\Delta x-i\Delta y}{\Delta x+i\Delta y}.
$$

Along $\Delta y=0$ the quotient is $1$, while along $\Delta x=0$ it is $-1$. The latter value is circled in the notes. The two paths give different limits, so conjugation is nowhere complex differentiable.

![[Kyle Kabasares - Complex Variables - Conjugation reflects a point.png|**Fig. 47** The point $z$ and its conjugate are reflections across the real axis.]]

For $f(z)=u(x,y)+iv(x,y)$, write the numerator at $z_0=x_0+iy_0$ as $\Delta u+i\Delta v$, where $\Delta u=u(x_0+\Delta x,y_0+\Delta y)-u(x_0,y_0)$ and $\Delta v=v(x_0+\Delta x,y_0+\Delta y)-v(x_0,y_0)$. The notes write the two terms of the difference on separate lines and propose comparing $\Delta x=0$ with $\Delta y=0$.

##### Complex analysis limits review

The notes contrast two candidate sequence limits $P$ and $M$. Convergence to $P$ requires that every open disk about $P$ contain all but finitely many terms. In the sketch, infinitely many terms remain outside the disk about $M$.

![[Kyle Kabasares - Complex Variables - Disks around two candidate sequence limits.png|**Fig. 48** The sketch compares neighborhoods of $P$ and $M$ for a sequence approaching $P$.]]

##### Sequence examples

$$
\frac12+\frac in\longrightarrow\frac12,
\qquad
\left(-\frac13\right)^n+\left(2+\frac1{3n}\right)i
\longrightarrow2i.
$$

The sequence $i^n$ cycles through $i,-1,-i,1$ and does not converge. If $z_n\to x$ and $s_n\to y$, then $z_ns_n\to xy$ and $z_n+ws_n\to x+wy$ for any fixed $w\in\mathbb C$. Also $z_n/s_n\to x/y$ if $y\ne0$.

##### Modulus and conjugate review

The examples are $|1+i|=\sqrt2$, $|2|=|2i|$, and $\overline{3+i}=3-i$.

![[Kyle Kabasares - Complex Variables - Modulus of one plus i.png|**Fig. 49** The segment from the origin to $1+i$ has length $\sqrt2$.]]

![[Kyle Kabasares - Complex Variables - Equal moduli along two axes.png|**Fig. 50** The positive real and imaginary axes show equal distances to $2$ and $2i$.]]

##### Function limits

In one real dimension one can approach from either side. In the complex plane one must account for every approach through the domain. For each $\epsilon>0$, choose $\delta>0$ such that $|f(z)-L|<\epsilon$ whenever $0<|z-z_0|<\delta$ in the domain.

![[Kyle Kabasares - Complex Variables - Approach directions for a complex limit.png|**Fig. 51** The dotted arrows show several directions toward $z_0$, and the disk around $L$ represents the tolerance for the corresponding outputs.]]

##### Continuity

A function is continuous at $z_0$ if $\lim_{z\to z_0}f(z)=f(z_0)$.

**Example.** Along the real axis, $z=x$ and $z/\bar z=x/x=1$ for $x\ne0$. Along the imaginary axis, $z=iy$ and $z/\bar z=iy/(-iy)=-1$ for $y\ne0$. The different values show that $\lim_{z\to0}z/\bar z$ does not exist.

![[Kyle Kabasares - Complex Variables - Real axis approach to the origin.png|**Fig. 52** The arrow marks an approach to zero along the real axis.]]

##### Functions review

In the terminology for regions of the complex plane, a domain is open and connected. The notes say that ranges are not necessarily open or connected. A continuous function preserves connectedness of a connected domain, while an arbitrary function need not do so.

##### Theorems on limits

The page lists three implications.

1. If $\lim_{z\to z_0}1/f(z)=0$, then $\lim_{z\to z_0}f(z)=\infty$.
2. If $\lim_{\zeta\to0}f(1/\zeta)=w_0$, then $\lim_{z\to\infty}f(z)=w_0$.
3. If $\lim_{\zeta\to0}1/f(1/\zeta)=0$, then $\lim_{z\to\infty}f(z)=\infty$.

##### Complex derivatives

For $f:\mathbb C\to\mathbb C$, the derivative at $z_0$ exists when the complex difference quotient has a limit.

$$
f'(z_0)=\lim_{z\to z_0}\frac{f(z)-f(z_0)}{z-z_0}
=\lim_{\Delta z\to0}\frac{f(z_0+\Delta z)-f(z_0)}{\Delta z}.
$$

The notes recall that $f(z)=3z^2+1$ has derivative $6z$ at every $z\in\mathbb C$.

For $f(z)=\bar z$, the quotient is

$$
\frac{\overline{z+\Delta z}-\bar z}{\Delta z}
=\frac{\overline{\Delta z}}{\Delta z},
\qquad
\Delta z=\Delta x+i\Delta y,\quad
\overline{\Delta z}=\Delta x-i\Delta y.
$$

With $\Delta y=0$ and $\Delta x\to0$, the quotient is $\Delta x/\Delta x=1$. With $\Delta x=0$ and $\Delta y\to0$, the quotient is $-i\Delta y/(i\Delta y)=-1$. The two path limits disagree, so the derivative does not exist.

##### Cauchy–Riemann equations

Write $f(z)=u(x,y)+iv(x,y)$ for $z=x+iy$. Let $z_0=x_0+iy_0$ and $\Delta z=\Delta x+i\Delta y$. The difference quotient is

$$
\frac{u(x_0+\Delta x,y_0+\Delta y)-u(x_0,y_0)
+i\bigl[v(x_0+\Delta x,y_0+\Delta y)-v(x_0,y_0)\bigr]}
{\Delta x+i\Delta y}.
$$

First take $\Delta y=0$ and let $\Delta x\to0$. The quotient separates into two real difference quotients, one multiplied by $i$.

$$
f'(z_0)=u_x(x_0,y_0)+iv_x(x_0,y_0)
$$

if the complex derivative exists. Thus its real part is $u_x(x_0,y_0)$ and its imaginary part is $v_x(x_0,y_0)$.

Next take $\Delta x=0$ and let $\Delta y\to0$. The page sets up the quotient

$$
\frac{u(x_0,y_0+\Delta y)-u(x_0,y_0)}{i\Delta y}
+i\frac{v(x_0,y_0+\Delta y)-v(x_0,y_0)}{i\Delta y}.
$$

The handwritten vertical-path numerator has inconsistent signs on the $v$ terms. Subtracting $f(z_0)$ from $f(z_0+i\Delta y)$ gives the difference shown above.

Along the vertical approach, take $\Delta x=0$ and let $\Delta y\to0$. Using $1/i=-i$ gives

$$
\begin{aligned}
f'(z_0)
&=\lim_{\Delta y\to0}\left[
\frac{v(x_0,y_0+\Delta y)-v(x_0,y_0)}{\Delta y}
-i\frac{u(x_0,y_0+\Delta y)-u(x_0,y_0)}{\Delta y}
\right]\\
&=v_y(x_0,y_0)-iu_y(x_0,y_0).
\end{aligned}
$$

If $f$ is differentiable at $z_0$, both approaches give the same derivative.

$$
\begin{aligned}
f'(z_0)&=u_x(x_0,y_0)+iv_x(x_0,y_0),\\
f'(z_0)&=v_y(x_0,y_0)-iu_y(x_0,y_0).
\end{aligned}
$$

Equating real and imaginary parts gives

$$
\begin{aligned}
u_x(x_0,y_0)&=v_y(x_0,y_0),\\
v_x(x_0,y_0)&=-u_y(x_0,y_0).
\end{aligned}
$$

These equations are necessary for complex differentiability. They alone are insufficient. The page also raises a question about harmonic functions.

**Example.** Let $f(z)=z^2$, so $f'(z)=2z$. In Cartesian form,

$$
f(z)=(x+iy)^2=\underbrace{(x^2-y^2)}_{u(x,y)}+i\underbrace{2xy}_{v(x,y)}.
$$

The handwritten expansion omits the exponent on $x$. The expansion above agrees with the partial derivatives on the page.

$$
\begin{aligned}
u_x&=2x, & v_x&=2y,\\
u_y&=-2y, & v_y&=2x.
\end{aligned}
$$

Both equations hold, since $u_x=v_y$ and $v_x=-u_y$.

**Example.** For $f(z)=|z|^2$, write

$$
f(x,y)=|x+iy|^2=\underbrace{(x^2+y^2)}_{u(x,y)}+i\underbrace{0}_{v(x,y)}.
$$

The equation $u_x=v_y$ gives $x=0$, and $v_x=-u_y$ gives $y=0$. The handwriting says “these 2 points.” The two conditions together give the single candidate $(0,0)$.

##### Extra credit

Prove that $f$ is differentiable at $(0,0)$.

##### Theorem. Sufficient conditions for differentiability

Let $f(z)=u(x,y)+iv(x,y)$ be defined throughout an $\epsilon$-neighborhood of $z_0=x_0+iy_0$. Suppose that all first-order partial derivatives of $u$ and $v$ exist throughout that neighborhood. If these partial derivatives are continuous at $(x_0,y_0)$ and satisfy $u_x=v_y$ and $v_x=-u_y$ there, then $f'(z_0)$ exists. The page marks a proof as tentative.

##### Question

How does complex differentiability compare with differentiability for maps $\mathbb R^2\to\mathbb R^2$? Consider

$$
f(x,y)=\underbrace{(3x+2y)}_{u}+i\underbrace{(2x+5y)}_{v}.
$$

Here $u_x=3$, $u_y=2$, $v_x=2$, and $v_y=5$. The Cauchy–Riemann equations fail everywhere, so $f$ is nowhere complex differentiable.

The page also lists harmonic conjugates as a topic.

##### Polar-coordinate version

For $z_0\ne0$, use $x=r\cos\theta$ and $y=r\sin\theta$.

Apply the chain rule to $u$ in polar coordinates.

$$
\begin{aligned}
u_r
&=u_x\frac{\partial x}{\partial r}+u_y\frac{\partial y}{\partial r}
=u_x\cos\theta+u_y\sin\theta,\\
u_\theta
&=u_x\frac{\partial x}{\partial\theta}+u_y\frac{\partial y}{\partial\theta}
=-ru_x\sin\theta+ru_y\cos\theta.
\end{aligned}
$$

The same calculation for $v$ gives

$$
\begin{aligned}
v_r&=v_x\cos\theta+v_y\sin\theta,\\
v_\theta&=-rv_x\sin\theta+rv_y\cos\theta.
\end{aligned}
$$

Using $v_x=-u_y$ and $v_y=u_x$ in the last two equations yields

$$
\begin{aligned}
v_r&=-u_y\cos\theta+u_x\sin\theta,\\
v_\theta&=ru_y\sin\theta+ru_x\cos\theta.
\end{aligned}
$$

Comparing with the expressions for $u_r$ and $u_\theta$ gives the **Cauchy–Riemann equations in polar coordinates**.

$$
\boxed{v_\theta=ru_r,\qquad u_\theta=-rv_r}
$$

Prove that $\operatorname{Arg}(z_1z_2)=\operatorname{Arg}(z_1)+\operatorname{Arg}(z_2)$ when $\operatorname{Re}(z_1)>0$ and $\operatorname{Re}(z_2)>0$.

Write $z_1=r_1e^{i\theta_1}$ and $z_2=r_2e^{i\theta_2}$ with $\theta_j=\operatorname{Arg}(z_j)$. Then

$$
z_1z_2=r_1r_2e^{i(\theta_1+\theta_2)}.
$$

Both principal arguments lie strictly between $-\pi/2$ and $\pi/2$, so $-\pi<\theta_1+\theta_2<\pi$. This lies in the principal range $(-\pi,\pi]$, giving $\operatorname{Arg}(z_1z_2)=\theta_1+\theta_2$.

![[Kyle Kabasares - Complex Variables - Principal arguments in the right half-plane.png|**Fig. 53** The right semicircle spans angles from $-\pi/2$ to $\pi/2$.]]

**Limits at infinity**

$$
\begin{aligned}
\lim_{z\to z_0} f(z)=\infty
&\iff \lim_{z\to z_0}\frac{1}{f(z)}=0,\\
\lim_{z\to\infty} f(z)=w_0
&\iff \lim_{z\to0} f(1/z)=w_0,\\
\lim_{z\to\infty} f(z)=\infty
&\iff \lim_{z\to0}\frac{1}{f(1/z)}=0.
\end{aligned}
$$

For example, $\lim_{z\to-1}(iz+3)/(z+1)=\infty$ by the first equivalence, since

$$
\lim_{z\to-1}\frac{z+1}{iz+3}=\frac{0}{-i+3}=0.
$$

##### Differentiation

The page lists the power rule $\frac{d}{dz}z^n=nz^{n-1}$, the product and quotient rules, and the sum rule $[f(z)+g(z)]'=f'(z)+g'(z)$.

##### Worksheet. Power rule by induction

Use the product rule

$$
\frac{d}{dz}[f(z)g(z)]=f(z)g'(z)+f'(z)g(z).
$$

The worksheet starts with $n=2$. Applying the product rule to $f(z)=g(z)=z$ gives

$$
\frac{d}{dz}(z^2)=\frac{d}{dz}(zz)=z(1)+1(z)=2z.
$$

For $n=k+1$, assume $\frac{d}{dz}(z^k)=kz^{k-1}$. Then

$$
\frac{d}{dz}(z^{k+1})
=\frac{d}{dz}(z^k z)
=z^k(1)+kz^{k-1}z
=z^k+kz^k
=(1+k)z^k.
$$

Thus $\frac{d}{dz}(z^n)=nz^{n-1}$ for the positive integer powers covered by the induction, with $n=1$ following from $\frac{d}{dz}z=1$.

**Problem 4.** Show that $\lim_{z\to z_0}(az+b)=az_0+b$. The page writes $a=x_a+iy_a$, $b=x_b+iy_b$, and $z=x+iy$, then estimates the difference directly.

$$
|(az+b)-(az_0+b)|=|az-az_0|=|a(z-z_0)|=|a|\,|z-z_0|.
$$

For $a\ne0$, this is less than $\epsilon$ whenever $|z-z_0|<\epsilon/|a|$. The boxed bound in the handwriting uses $a^{-1}$, which here requires the modulus $|a|^{-1}$. For $a=0$, the difference is identically zero.

##### Problem 5(a)

Find $\lim_{z\to\infty}4z^2/(z-1)^2$. Substitute $1/\zeta$ for $z$ and let $\zeta\to0$. Multiplying numerator and denominator by $\zeta^2$ gives

$$
\lim_{\zeta\to0}\frac{4(1/\zeta)^2}{(1/\zeta-1)^2}
=\lim_{\zeta\to0}\frac{4}{1-2\zeta+\zeta^2}
=4.
$$

##### Problem 5(b)

Show that $\lim_{z\to1}1/(z-1)^3=\infty$. The reciprocal has limit $\lim_{z\to1}(z-1)^3=0$.

##### Analytic and harmonic functions

The lecture recalls the limit definition of the derivative and the theorem that uses the Cauchy–Riemann equations $u_x=v_y$ and $v_x=-u_y$ for $f(z)=u(x,y)+iv(x,y)$.

A function $f$ is **analytic at $z_0$** if it is complex differentiable at every $z$ in some $\epsilon$-neighborhood of $z_0$.

![[Kyle Kabasares - Complex Variables - Analytic neighborhood of z0.png|**Fig. 54** The hatched region around $z_0$ marks a neighborhood where $f$ is differentiable.]]

##### Real-variable example

The function $f(x)=|x|$ is continuous and fails to be $C^1$ at the origin. Its derivative is $-1$ for $x<0$ and $1$ for $x>0$, with no derivative at $0$.

![[Kyle Kabasares - Complex Variables - Absolute value and its derivative.png|**Fig. 55** The V-shaped graph of $|x|$ and the two constant branches of its derivative.]]

A function $f$ is **entire** if it is analytic everywhere in the complex plane.

##### Aside

If $f$ is entire and bounded, so that $|f(z)|\le M$ for every $z\in\mathbb C$ and some constant $M$, then $f(z)=k$ for a constant $k\in\mathbb C$.

A point $z_0$ is a **singularity** if $f$ fails to be analytic there and is analytic at at least one point in every neighborhood of $z_0$. The notes mention black holes as an aside.

![[Kyle Kabasares - Complex Variables - Singularity at the origin.png|**Fig. 56** The sketch shows two branches rising near the vertical axis and marks $0$ as a singularity.]]

**Examples**

1. Polynomials are entire and have no singularities in the complex plane. A degree-$n$ polynomial with leading coefficient $a_n$ factors as $f(z)=a_n\prod_{j=1}^n(z-z_j)$. In the monic quadratic case the product is $(z-z_1)(z-z_2)$.
2. The function $f(z)=1/z$ is analytic at every $z\ne0$. The origin is a singular point.
3. For $f(z)=\bar z=x-iy$, we have $u(x,y)=x$ and $v(x,y)=-y$. Then $u_x=1$ and $v_y=-1$, so the first Cauchy–Riemann equation fails everywhere.

The function $f(z)=\bar z$ is nowhere complex differentiable and nowhere analytic. It has no singularities under the preceding definition, which requires analytic points arbitrarily near a singularity.

The page also flags $f(z)=|z|^2=z\bar z$ and includes a reminder to look up “double staircase.”

##### Properties of analytic functions

1. The sum of two analytic functions is analytic.
2. The product of two analytic functions is analytic.
3. The quotient of two analytic functions is analytic where the denominator is nonzero.
4. The composition $f(g(z))$ is analytic where $g$ is analytic and $f$ is analytic at $g(z)$.

**Example.** Show that exactly one of $f(z)=z^2$ and $\overline{f(z)}=\overline{z^2}$ is analytic. For $f$,

$$
f(z)=(x+iy)^2=\underbrace{(x^2-y^2)}_{u(x,y)}+i\underbrace{2xy}_{v(x,y)}.
$$

The partial derivatives are continuous and satisfy $u_x=2x=v_y$ and $v_x=2y=-u_y$ everywhere. Thus $f$ is entire. Conjugation changes $u+iv$ to $u-iv$, giving

$$
\overline{f(z)}=(x-iy)^2=(x^2-y^2)+i(-2xy).
$$

The page observes that the signs in the Cauchy–Riemann equations change for the conjugate. In this example they can hold for the conjugate only when $x=y=0$, which gives no neighborhood of differentiability.

##### Next example

Consider $f(z)=\ln r+i\theta$ for $z=re^{i\theta}$.

## Source

Kyle Kabasares, *Complex Variables and Applications (Math 122, UC Merced 2016)*.
