---
title: "Linear programming and gradient-search problems"
---

> [!TLDR]
> Translate resource constraints into a simplex tableau and compare vertex searches with derivative-based optimization.

## Worked lecture material

The gradient-ascent iteration is $\vec P_{n+1}=\vec P_n+h\nabla f(\vec P_n)$. For sufficiently small $h>0$ and a nonzero gradient, the step increases $f$. The notes describe convergence toward a maximum and point out that taking very small steps makes progress slow.

For a restricted domain $D$, the proposed method follows the projection of the gradient onto the boundary when the iteration reaches it. If $\hat n$ is a unit normal and $\vec u$ is the tangential component, then

$$
\vec u+(\nabla f\cdot\hat n)\hat n=\nabla f,
\qquad
\vec P_{n+1}=\vec P_n+h\vec u.
$$

![[Kyle Kabasares - Mathematical Modeling - Gradient projection onto the boundary.png|**Fig. 86** The gradient splits into a tangential component along the boundary and a component along the normal.]]

The notes stop the boundary iteration when $\nabla f$ is parallel to $\hat n$ or when it reaches a corner. The parallel-gradient condition gives a stationary candidate along the smooth boundary. At a corner, one can check the feasible directions on the adjacent sides.

##### Convex domains and linear programming

The lecture asks what makes a domain convex and whether the feasible domain in linear programming is convex. The final-project reminder calls for an appointment and records a 10% deduction for missing the meeting.

To maximize $f(\vec x)$ numerically, start at a point in the domain and reevaluate the gradient after each step.

![[Kyle Kabasares - Mathematical Modeling - Successive gradient ascent directions.png|**Fig. 87** The two arrows show the gradients at successive points.]]

![[Kyle Kabasares - Mathematical Modeling - Box shaped domain sketch.png|**Fig. 88** A box-shaped domain with a path drawn near one face.]]

A nonconvex domain can obstruct a gradient path from reaching the global maximum from some starting points.

![[Kyle Kabasares - Mathematical Modeling - Gradient ascent in a nonconvex domain.png|**Fig. 89** The asterisk marks the global maximum in the sketch. The gradient steps from the left approach a different part of the boundary.]]

The notes suggest trying several starting points and ask how many are needed. The second suggestion is to formulate the problem with a convex domain when possible.

A domain in $\mathbb R^n$ is convex if the straight line segment joining any two points of the domain lies entirely in it.

A domain $D$ is convex if every pair $\vec x,\vec y\in D$ satisfies

$$
\vec r(\lambda)=\lambda\vec x+(1-\lambda)\vec y\in D
\qquad\text{for all }\lambda\in[0,1].
$$

The segment is parametrized from $\vec r(0)=\vec y$ to $\vec r(1)=\vec x$.

![[Kyle Kabasares - Mathematical Modeling - Segment joining two points.png|**Fig. 90** The straight segment $\vec r(\lambda)$ joins $\vec y$ and $\vec x$.]]

**Example.** Is the closed unit disk $D=\{(x,y):x^2+y^2\le1\}$ convex? Take $P_1=(x_1,y_1)$ and $P_2=(x_2,y_2)$ in $D$, so $x_i^2+y_i^2\le1$ for $i=1,2$.

![[Kyle Kabasares - Mathematical Modeling - Two points in the closed unit disk.png|**Fig. 91** Two points are marked in the disk. The question is whether their entire connecting segment lies inside it.]]

The segment is

$$
\vec r(\lambda)=\lambda P_1+(1-\lambda)P_2
=\begin{pmatrix}\lambda x_1+(1-\lambda)x_2\\
\lambda y_1+(1-\lambda)y_2\end{pmatrix}.
$$

To check whether $\vec r(\lambda)\in D$, expand the sum of the squares of its components.

$$
\begin{aligned}
\|\vec r(\lambda)\|^2
&=\bigl(\lambda x_1+(1-\lambda)x_2\bigr)^2+
\bigl(\lambda y_1+(1-\lambda)y_2\bigr)^2\\
&=\lambda^2(x_1^2+y_1^2)+(1-\lambda)^2(x_2^2+y_2^2)
+2\lambda(1-\lambda)(x_1x_2+y_1y_2).
\end{aligned}
$$

To finish the unit-disk proof, use $x_1x_2+y_1y_2=P_1\cdot P_2$. For nonzero vectors this is $\|P_1\|\|P_2\|\cos\theta$, where $\theta$ is the angle between them. The handwritten estimate replaces $\|P_1\|\|P_2\|$ by 1 before bounding $\cos\theta$. To cover negative dot products as well, bound the whole product by $P_1\cdot P_2\le\|P_1\|\|P_2\|\le1$. Then

$$
\|\vec r(\lambda)\|^2
\le\lambda^2+(1-\lambda)^2+2\lambda(1-\lambda)
=\bigl(\lambda+(1-\lambda)\bigr)^2=1.
$$

Therefore $\vec r(\lambda)$ stays in the disk and $D$ is convex.

##### Linear programs

Maximize a linear objective $f(\vec x)=\sum_{i=1}^n c_ix_i$ subject to linear constraints such as $A\vec x\le\vec b$ or $C\vec x=\vec d$, together with $x_i\ge0$ for $i=1,\ldots,n$.

##### Examples and properties of solutions

The lecture recalls the objective $f(\vec x)=\vec c^{\,T}\vec x$ and the constraint forms $A\vec x\le\vec b$, $A\vec x\ge\vec b$, and $A\vec x=\vec b$. These define a feasible domain $D$ over real variables. A separate handwritten line lists $x_i=0,1,2,\ldots,n$. Taking that list as an integrality constraint would give a discrete feasible set. The convexity argument on this page concerns the real domain.

For the case $A\vec x\le\vec b$, take $\vec x_1,\vec x_2\in D$, so $A\vec x_1\le\vec b$ and $A\vec x_2\le\vec b$. The question is whether $\vec z=\lambda\vec x_1+(1-\lambda)\vec x_2$ also satisfies $A\vec z\le\vec b$.

For $0\le\lambda\le1$, linearity gives

$$
A\vec z=\lambda A\vec x_1+(1-\lambda)A\vec x_2
\le\lambda\vec b+(1-\lambda)\vec b=\vec b.
$$

The inequality holds componentwise, so the feasible region is convex.

![[Kyle Kabasares - Mathematical Modeling - Feasible region bounded by linear inequalities.png|**Fig. 92** The shaded region illustrates a feasible set cut out by linear inequalities.]]

##### Bakery example

A bakery sells boxes of croissants for 10 dollars and boxes of cupcakes for 5 dollars. Each box of croissants requires 8 units of butter and 4 units of flour. Each box of cupcakes requires 5 units of butter and 1 unit of flour. The prose repeats “butter” for the second cupcake ingredient, but the recipe beneath it uses $5b+1f$, where $b$ is butter and $f$ is flour. There are 30 units of butter and 10 units of flour in stock.

Let $x$ and $y$ be the numbers of croissant and cupcake boxes, respectively. If their unit prices are $c_1$ and $c_2$, the revenue is

$$
f(\vec x)=c_1x+c_2y=f(x,y)=10x+5y.
$$

The objective is to choose production quantities that maximize this revenue.

The butter and flour limits in the bakery example are

$$
8x+5y\le30,\qquad 4x+y\le10.
$$

In matrix form, $A\vec x\le\vec b$ with

$$
A=\begin{pmatrix}8&5\\4&1\end{pmatrix},
\qquad
\vec b=\begin{pmatrix}30\\10\end{pmatrix}.
$$

The feasible production quantities also satisfy $x,y\ge0$.

![[Kyle Kabasares - Mathematical Modeling - Bakery feasible polygon and revenue contours.png|**Fig. 93** The revenue contours shift parallel to themselves as revenue increases. The last feasible contour touches the intersection of the two resource limits.]]

To test revenue of 5 or 10 dollars, draw the lines $10x+5y=5$ and $10x+5y=10$. The maximum in the continuous model occurs where both ingredient constraints are active. From $4x+y=10$, get $y=10-4x$. Substitution into $8x+5y=30$ gives $8x+50-20x=30$, or $12x=20$. Hence

$$
x=\frac53,\qquad y=\frac{10}3,\qquad f(x,y)=\frac{50}3+\frac{50}3=\frac{100}3
$$

in dollars.

The notes ask which corner gives the optimum and observe that a whole edge may share the optimal value. Here $\nabla f=(10,5)$ is constant and nonzero, so the continuous problem has no interior stationary point.

The remaining outcomes listed for a linear program are an objective unbounded above, in which case no maximum exists, or an empty feasible domain. The notes introduce the simplex method as a way to seek the best corner without trying all of them.

##### Standard form of a linear program

A general linear program maximizes $f(\vec x)=\vec c^{\,T}\vec x$ under linear constraints of types $\le$, $=$, and $\ge$. The lecture takes $x_i\ge0$ for $i=1,\ldots,n$. In the standard form used here, all constraints other than nonnegativity are equalities.

$$
\text{Maximize }\vec c^{\,T}\vec x
\qquad\text{subject to}\qquad A\vec x=\vec b,\quad \vec x\ge0.
$$

The unknown $\vec x$ is $n\times1$, and $A$ is $m\times n$, with $m$ equations in $n$ variables. The notes focus on $m\ll n$. In that case, if the equality system is consistent, it has infinitely many real solutions before the nonnegativity restriction is imposed.

To convert a minimization problem with objective $g(\vec x)=\vec d^{\,T}\vec x$, maximize $f(\vec x)=-g(\vec x)$ over the same feasible set.

For the converted objective, $\vec c=-\vec d$. The notes then convert the constraints and variables to standard form.

2. For $\vec s_i^{\,T}\vec y\le b_i$, introduce a slack variable $t_i\ge0$ and impose $\vec s_i^{\,T}\vec y+t_i=b_i$. For example, $x\le5$ is equivalent to $x+t=5$ with $t\ge0$. The augmented equation has the form $\vec r_i^{\,T}\vec x=b_i$.
3. For $\vec s_i^{\,T}\vec y\ge b_i$, introduce a surplus variable $t_i\ge0$ and impose $\vec s_i^{\,T}\vec y-t_i=b_i$. With $\vec x=(\vec y,t_i)^T$ in block notation, the augmented row is $\vec r_i^{\,T}=(\vec s_i^{\,T},-1)$.
4. For $y_i\ge c$, use $x_i=y_i-c\ge0$.
5. For $y_i\le c$, use $x_i=c-y_i\ge0$.

An unrestricted $y_i$ can be expressed as $x_i-x_{i+1}$ with both new variables nonnegative.

**Example.** Write a standard linear program for a mixture of onion soup and chicken stock. Onion soup costs 3 cents per ounce and chicken stock costs 2 cents per ounce. Each ounce of onion soup contains 5 grams of protein and 10 units of iron.

Each serving of the mixture must contain at least 35 grams of protein and 40 units of iron. The initial constraints use $S$ and $C$ for onion soup and chicken stock. The rest of the calculation uses $x$ and $y$, respectively, measured in ounces per serving.

$$
5x+7y\ge35,\qquad 10x+4y\ge40.
$$

Minimize the cost $3x+2y$ in cents, with coefficient vector $(3,2)^T$. In standard form, maximize its negative, $-3x-2y$. Introduce nonnegative surplus variables $s,t$ for the two nutrient requirements.

$$
5x+7y-s=35,\qquad 10x+4y-t=40,
\qquad x,y,s,t\ge0.
$$

Thus

$$
\vec x=\begin{pmatrix}x\\y\\s\\t\end{pmatrix},
\qquad
\vec c=\begin{pmatrix}-3\\-2\\0\\0\end{pmatrix},
\qquad
A=\begin{pmatrix}5&7&-1&0\\10&4&0&-1\end{pmatrix},
\qquad
\vec b=\begin{pmatrix}35\\40\end{pmatrix}.
$$

The handwritten right-hand-side vector shows 45 in its second entry. The problem statement, the inequality, and the equality above it all use 40.

For the soup mixture, the cost contours have equation $3x+2y=c$, or $y=c/2-3x/2$. The sketch marks contours for $c=0$ and $c=15$ and identifies the corner where both nutrient constraints are active.

![[Kyle Kabasares - Mathematical Modeling - Soup mixture feasible region and cost lines.png|**Fig. 94** The arrow marks the minimum-cost corner at the intersection of the two nutrient constraints. The line intercepts and cost levels are sketched approximately.]]

The recorded solution is $(x,y,s,t)^T=(14/5,3,0,0)^T$. Substitution gives $5(14/5)+7(3)=35$ and $10(14/5)+4(3)=40$, consistent with the two stated requirements.

The general objective is $P=\sum_i c_ix_i$ with $A\vec x\le\vec b$ and all decision variables nonnegative.

##### Jewelry example

Let $x$ count pairs of earrings and $y$ count necklaces. Maximize $g(x,y)=15x+20y$ subject to

$$
\frac12x+y\le10,\qquad x+y\le15.
$$

The first constraint is labeled as time. Its equality form is $\tfrac12x+y+s=10$ with slack $s\ge0$. In matrix form the original inequalities are

$$
\begin{pmatrix}0.5&1\\1&1\end{pmatrix}
\begin{pmatrix}x\\y\end{pmatrix}
\le\begin{pmatrix}10\\15\end{pmatrix}.
$$

**Example 2.** Let $x$ count sofas and $y$ count chairs. Maximize $75x+90y$ under the following limits.

$$
\begin{aligned}
2x+3y&\le66 &&\text{(carpentry)},\\
4x+9y&\le180 &&\text{(finishing)},\\
10x+2y&\le200 &&\text{(upholstery)}.
\end{aligned}
$$

##### Applying the simplex method

The lecture asks what the method does geometrically and how to carry it out, mentions `linprog`, and introduces an industrial model to develop.

A linear program with objective $f(\vec y)=\vec d^{\,T}\vec y$ and constraints $B\vec y\le\vec g$ can be written in standard form with objective $f(\vec x)=\vec c^{\,T}\vec x$, constraints $A\vec x=\vec b$, and nonnegative variables. Here $A$ represents $m$ equations and $\vec x$ has $n$ unknowns, with $n\gg m$ in the cases considered.

The equality system has infinitely many solutions when it is consistent and $n>m$. To look for extreme feasible solutions, set $n-m$ nonbasic variables to zero and use the remaining $m$ basic variables to satisfy $A\vec x=\vec b$. There are $\binom nm=n!/[m!(n-m)!]$ ways to choose the candidate basic variables.

For seven variables and three basic positions, there are $\binom73=7!/(3!4!)$ choices. The number of candidate bases grows quickly with $n$, so the notes emphasize choosing which ones to examine.

![[Kyle Kabasares - Mathematical Modeling - Illustrative polygon and corner points.png|**Fig. 95** Several vertices are marked on the boundary of a feasible polygon.]]

The geometric observation is that a vertex in $\mathbb R^m$ can be identified by $m$ linearly independent active equations. In two dimensions, the sketch illustrates intersections of pairs of constraint lines.

##### Simplex example

Maximize $f(x,y)=x+y$ subject to $x,y\ge0$ and

$$
\begin{aligned}
-2x+y&\le7 &&\Longleftrightarrow & y&\le7+2x,\\
-x+y&\ge-10 &&\Longleftrightarrow & y&\ge-10+x,\\
x+4y&\le40 &&\Longleftrightarrow & y&\le10-x/4.
\end{aligned}
$$

The three constraint lines have $y$-intercepts 7, $-10$, and 10. The feasible region has five corners, with the origin chosen as the starting point.

![[Kyle Kabasares - Mathematical Modeling - Five corner feasible region for the simplex example.png|**Fig. 96** The axes and the three numbered constraint lines enclose a pentagon. The arrow at the origin marks the starting point.]]

For standard form the objective becomes $f(x,y,r,s,t)=x+y$, with new nonnegative variables. The first two equality rows are $-2x+y+r=7$ and $-x+y-s=-10$. The latter right-hand side appears as $10$ at the bottom of the page. The original inequality above uses $-10$.

The third constraint in standard form is $x+4y+t=40$, with $x,y,r,s,t\ge0$. In the variable order $(x,y,r,s,t)$,

$$
\vec c=\begin{pmatrix}1\\1\\0\\0\\0\end{pmatrix},
\qquad
A=\begin{pmatrix}
-2&1&1&0&0\\
-1&1&0&-1&0\\
1&4&0&0&1
\end{pmatrix},
\qquad
\vec b=\begin{pmatrix}7\\-10\\40\end{pmatrix}.
$$

The handwritten vector next to $A$ appears to begin with 4. Both the first constraint and the numerical tableau use 7.

Assemble the objective and constraints in a tableau with first row $(1,\vec c^{\,T},0)$ and lower block $(0,A,\vec b)$.

$$
T=\begin{pmatrix}
1&1&1&0&0&0&0\\
0&-2&1&1&0&0&7\\
0&-1&1&0&-1&0&-10\\
0&1&4&0&0&1&40
\end{pmatrix}.
$$

The notes propose row reductions for price reduction. The indicated operation $R_3\gets-R_3$ makes the three columns for $r,s,t$ into an identity block in the constraint rows. The target form is

$$
\begin{pmatrix}
1&\vec c_H^{\,T}&\vec c_B^{\,T}&0\\
0&H&I&\vec b'
\end{pmatrix}.
$$

The handwritten arrows label the blocks in reverse. The columns forming $I$ are the basic columns, and the variables corresponding to $H$ are nonbasic and initially set to zero. The method then changes the basis to increase the objective.

Start with $x=y=0$. After negating the third tableau row, the constraints give the identity columns for $r,s,t$.

$$
T=\begin{pmatrix}
1&1&1&0&0&0&0\\
0&-2&1&1&0&0&7\\
0&1&-1&0&1&0&10\\
0&1&4&0&0&1&40
\end{pmatrix}.
$$

The initial basic values are $r=7$, $s=10$, and $t=40$. To decide which variable enters the basis, the notes pick the largest improving coefficient from the nonbasic part of the objective row. The two coefficients are equal, so either $x$ or $y$ can enter. The page says “basic variables” in this instruction, but the variables initially set to zero are the nonbasic ones.

Choose $y$, the third column of the full tableau. To find the first boundary reached, examine $b_i/a_{i3}$ for constraint rows with $a_{i3}>0$. Here those ratios are $7/1=7$ and $40/4=10$. The coefficient $-1$ in the other constraint row gives no upper bound on increasing $y$. Thus the second row of the full tableau is the pivot row, and $r$ is the first basic variable to reach zero.

The notes list a discussion on using MATLAB to solve linear programs and a reminder to set up meetings with Terese.

The page sketches a search problem in a rectangular region, followed by a circular region of radius 1.

![[Kyle Kabasares - Mathematical Modeling - Rectangular search area sketches.png|**Fig. 97** The upper sketch shows a drone-like object and a square with arrows. The lower sketch marks a shaded corner of a rectangular region.]]

![[Kyle Kabasares - Mathematical Modeling - Unit circular search area.png|**Fig. 98** The circular region has radius 1.]]

Let $(x(t),y(t))$ be the trajectory of the center, with $(x(0),y(0))=(0,0)$. A proposed trajectory is

$$
x(t)=2Rt\cos(2\pi t),\qquad y(t)=2Rt\sin(2\pi t).
$$

![[Kyle Kabasares - Mathematical Modeling - Spiral search path with turn spacing.png|**Fig. 99** The proposed spiral starts at the origin and increases in radius by $2R$ each turn.]]

To assess the trajectory, the notes propose computing efficiency as a function of arc length and the probability of finding the drone within a given distance traveled.

The search example proposes integrating the target-location density $p(x,y)$ over a moving disk of radius $R$, centered at $(x(t),y(t))$. Reading the disk integral in polar coordinates, the proposed expression is

$$
\int_0^T\int_0^{2\pi}\int_0^R
p\bigl(x(t)+r\cos\theta,y(t)+r\sin\theta\bigr)
\,r\,dr\,d\theta\,dt.
$$

The notes label this as the probability of finding the drone within $T$. As written, it integrates instantaneous coverage over time. For a fixed target and certain detection on contact, the probability is the density integral over the union of the searched disks, counting each location once.

##### Nonlinear optimization

The page writes the year as 2016. The adjacent dated lectures in this sequence are in 2017. The agenda lists the final schedule and nonlinear optimization.

##### Gradient step

The notes call the method steepest descent, but the written update and acceptance test maximize $f$.

$$
\vec x^{\,n+1}=\vec x^{\,n}+\tau\nabla f(\vec x^{\,n}),
$$

where $\tau$ is the step length. One option is to fix $\tau$. Another is to try $\tau_n$ and compare the objective values. If $f(\vec x^{\,n+1})<f(\vec x^{\,n})$, reject the step and try $\tau_n/2$. If the objective increases, the page appears to set the next trial length to $1.1\tau_n$.

##### Line search

Choose $\tau$ to maximize the objective along the current gradient direction. With $\vec d=\nabla f(\vec x^{\,n})$ and $g(\tau)=f(\vec x^{\,n}+\tau\vec d)$, an interior maximizing step satisfies

$$
g'(\tau)=\nabla f(\vec x^{\,n}+\tau\vec d)\cdot\vec d=0.
$$

![[Kyle Kabasares - Mathematical Modeling - Line search steps and orthogonality.png|**Fig. 100** The sketch marks the point where the gradient has zero dot product with the search direction.]]

An exact interior line search makes the new gradient orthogonal to the old one. Finding $\tau$ can still be difficult, although the search is one-dimensional.

**3. Solve the stationarity equations.** Seek a point where $\nabla f=\vec 0$. In $n$ variables this gives $n$ equations $\partial f/\partial x_i=0$ for $i=1,\ldots,n$. For a general system $\vec h(\vec x)=\vec 0$, Newton's method iterates

$$
\vec x^{\,n+1}=\vec x^{\,n}-J_h(\vec x^{\,n})^{-1}\vec h(\vec x^{\,n}),
\qquad
(J_h)_{ij}=\frac{\partial h_i}{\partial x_j}.
$$

When $\vec h=\nabla f$, the Jacobian is the Hessian of $f$. In two variables,

$$
H(x,y)=\begin{pmatrix}
\partial^2 f/\partial x^2&\partial^2 f/(\partial x\partial y)\\
\partial^2 f/(\partial y\partial x)&\partial^2 f/\partial y^2
\end{pmatrix}.
$$

The notes favor this method when the Hessian can be computed and inverted.

**Example.** Maximize $f(x,y)=-x^2-y^2/9$ from $\vec x_0=(1,3)$. Its gradient is $\nabla f=(-2x,-2y/9)$, so $\nabla f(1,3)=(-2,-2/3)$.

![[Kyle Kabasares - Mathematical Modeling - Quadratic contours and initial gradient.png|**Fig. 101** Elliptical level curves around the origin and the initial search direction from $\vec x_0$.]]

For the quadratic example, the line search from $(1,3)$ follows

$$
\vec x(\tau)=(1,3)+\tau(-2,-2/3)
=\left(1-2\tau,3-\frac23\tau\right).
$$

The handwritten line search uses the positive quadratic $g(\tau)=(1-2\tau)^2+\tfrac19(3-\tfrac23\tau)^2$. Minimizing this expression maximizes the stated objective $f(\vec x(\tau))=-g(\tau)$. The derivative equation is

$$
2(1-2\tau)(-2)+\frac29\left(3-\frac23\tau\right)\left(-\frac23\right)=0.
$$

It gives $\tau=360/656=45/82$ and $\vec x_1=(-8/82,216/82)$.

##### Newton step using the Hessian

Here the Hessian is constant, so evaluation at the current point leaves it unchanged.

$$
H=\begin{pmatrix}-2&0\\0&-2/9\end{pmatrix},
\qquad
H^{-1}=\begin{pmatrix}-1/2&0\\0&-9/2\end{pmatrix}.
$$

The update is

$$
\vec x_1=\vec x_0-H^{-1}\nabla f(\vec x_0)
=\begin{pmatrix}1\\3\end{pmatrix}
-\begin{pmatrix}1\\3\end{pmatrix}
=\begin{pmatrix}0\\0\end{pmatrix}.
$$

For a general quadratic $f(\vec x)=-\tfrac12\vec x^{\,T}Q\vec x-\vec x^{\,T}\vec b$ with $Q$ symmetric positive definite, $\nabla f=-Q\vec x-\vec b$ and $H_f=-Q$. The stationary equation gives $Q\vec x=-\vec b$, so $\vec x=-Q^{-1}\vec b$. The page first calls this a maximum and later writes “at minimum” in the derivative line. The Hessian $-Q$ is negative definite, giving a strict maximum. Newton's method reaches it in one step from any $\vec x_0$.

$$
\vec x_1=\vec x_0-(-Q^{-1})(-Q\vec x_0-\vec b)
=\vec x_0-\vec x_0-Q^{-1}\vec b
=-Q^{-1}\vec b.
$$

## Source

Kyle Kabasares, *Mathematical Modeling (Math 150, UC Merced 2017)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $R$ | 1 | Population | Number of animals in the isolated system. |
| $t$, $1/\alpha$ | $\unit{s}$ | Elapsed time | Time in the population model and time for one factor of $e$ of exponential growth, expressed in the chosen time unit. |
| $t_0$ | $\unit{s}$ | Inflection time | Time at which the logistic population reaches half its carrying capacity. |
| $y_i$ | 1 | Age-group population | Number of individuals in the indicated age band. |
| $\tau$ | 1 | Total population | Sum of the four age-group populations. |
| $T$ | $\unit{s}$ | Sampling period | Time between successive measurements at the same phase. |
| $\lambda$ | $\unit{s^{-1}}$ | Lyapunov exponent | Exponential rate of growth or decay of a perturbation in time. |
| $x$, $y$ | $\unit{oz}$ | Ingredient amounts | Onion soup and chicken stock per serving, respectively. |
| $s$ | $\unit{g}$ | Protein surplus | Protein above the minimum required per serving. |
| $t$ | — | Iron surplus | Iron above the minimum required per serving, in the unspecified iron units of the exercise. |
