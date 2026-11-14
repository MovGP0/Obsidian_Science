---
title: "Model error, random walks, and continuum limits"
---

> [!TLDR]
> Quantify approximation error and derive advection and diffusion models from discrete walker updates and initial or inflow data.

## Worked lecture material

##### Math 150 with François Blanchette

The page lists *Mathematical Modeling of Physical Systems* by D. Basmadjian and *Concepts of Mathematical Modeling* as recommended books. The first author's surname is read from the handwriting as Basmadjian.

Models make predictions about complicated systems. A good model is reasonably accurate, relatively simple to use, and self-contained.

To develop a good model, identify which effects matter, choose a metric to measure the error, and understand the real problem.

##### Definition of a metric

A metric $d\colon X\times X\to[0,\infty)$ assigns a nonnegative real number to two elements of a set $X$. For all $x,y,z\in X$, it satisfies the following properties.

1. **Nonnegativity.** $d(x,y)\ge 0$.
2. **Identity of indiscernibles.** $d(x,y)=0$ if and only if $x=y$.
3. **Symmetry.** $d(x,y)=d(y,x)$.
4. **Triangle inequality.** $d(x,y)\le d(x,z)+d(z,y)$.

![[Kyle Kabasares - Mathematical Modeling - Triangle inequality for a metric.png|**Fig. 1** The direct distance from $x$ to $y$ is at most the sum of the distances through $z$.]]

Check all four properties when defining a metric. The codomain is written with a closing square bracket in the handwriting. The definition here uses finite distances.

##### Norms

A norm $p\colon V\to[0,\infty)$ assigns a nonnegative real number to a vector in a real vector space $V$. The handwritten definition calls $V$ a vector field. For vectors $\vec u,\vec v\in V$ and scalars $a\in\mathbb{R}$, the norm satisfies

1. $p(\vec v)\ge 0$.
2. $p(\vec v)=0$ if and only if $\vec v=\vec 0$.
3. $p(\vec u+\vec v)\le p(\vec u)+p(\vec v)$, the triangle inequality.
4. $p(a\vec v)=\lvert a\rvert p(\vec v)$.

##### Connection between norms and metrics

If $p$ is a norm, then $d(\vec x,\vec y)=p(\vec x-\vec y)$ is a metric.

The notes give the following example under the label “discrete norm.” The formula defines the discrete metric.

$$
d(x,y)=\begin{cases}
0,&x=y,\\
1,&x\ne y.
\end{cases}
$$

This metric distinguishes two outcomes for a comparison, equality or inequality.

##### The $p$-norm

For $\vec x=\langle x_1,x_2,\ldots,x_n\rangle$ and $1\le p<\infty$, define

$$
\lVert\vec x\rVert_p=\left(\sum_{i=1}^{n}\lvert x_i\rvert^p\right)^{1/p}.
$$

The common case $p=2$ gives the Euclidean norm, $\lVert\vec x\rVert_2=\sqrt{\sum_{i=1}^n\lvert x_i\rvert^2}$. For example, its associated distance can compare positions. For $p=1$, $\lVert\vec x\rVert_1=\sum_{i=1}^n\lvert x_i\rvert$. The notes suggest this norm for errors in predictions of prices or other quantities that are counted.

##### The infinity norm

$$
\lVert\vec x\rVert_\infty=\lim_{p\to\infty}\lVert\vec x\rVert_p
=\lim_{p\to\infty}\left(\sum_{i=1}^n\lvert x_i\rvert^p\right)^{1/p}.
$$

Let $\lvert x_m\rvert=\max_{1\le i\le n}\lvert x_i\rvert$. If $\vec x\ne\vec 0$, factor $\lvert x_m\rvert^p$ out of the sum.

$$
\lVert\vec x\rVert_p=\lvert x_m\rvert
\left(\sum_{i=1}^n\left\lvert\frac{x_i}{x_m}\right\rvert^p\right)^{1/p}.
$$

Each ratio has magnitude at most $1$, and at least one has magnitude $1$. The sum therefore lies between $1$ and $n$, so its $p$th root tends to $1$ even if several entries share the maximum. Thus $\lVert\vec x\rVert_\infty=\max_i\lvert x_i\rvert$, which also holds for the zero vector. The handwritten derivation replaces the inner sum by $1$. The bounds justify the limit with or without a tie.

For example, $\lVert\langle 1,-2,-5,6,3\rangle\rVert_\infty=6$. The infinity norm measures the worst component. The $1$- and $2$-norms can grow as more entries of comparable size are included, while the infinity norm is determined by the largest magnitude. The page ends by noting that differences in the sizes of entries can make the $2$-norm misleading.

##### Relative errors

![[Kyle Kabasares - Mathematical Modeling - Prediction curve and observed values.png|**Fig. 2** A model curve and scattered observations. The vertical arrow illustrates their difference at one input.]]

The $2$-norm depends on the magnitudes of the entries. Relative errors can account for differences in scale. With predictions $x_i$ and nonzero observations $y_i$, the notes give the sum

$$
d(\vec x,\vec y)=\sum_{i=1}^n\frac{\lvert x_i-y_i\rvert}{\lvert y_i\rvert}.
$$

This expression uses the observations as the reference scale. The page also suggests a logarithmic comparison for positive entries. The bars in the handwriting surround the logarithms separately, giving the expression $\sum_{i=1}^n(\lvert\log x_i\rvert-\lvert\log y_i\rvert)$. If the intended quantity is a nonnegative absolute log error, the corresponding formula is $\sum_{i=1}^n\lvert\log x_i-\log y_i\rvert$.

The page records office hours on Friday from 3:30 to 5:20 p.m. in SSM 154 and Monday from 2:30 to 3:30 p.m. in AOA 182.

For a sequence $s_n$, the limit as $n\to\infty$ can be finite, can be $+\infty$ or $-\infty$ in the extended sense, or can fail to exist even in that sense. If $s_n\to+\infty$, then $1/s_n\to0$ with reciprocal scaling.

##### Review of big-O notation

Let $a_n\to\alpha$ and $b_n\to 0$. If there is a constant $K>0$ and an integer $N$ such that $\lvert a_n-\alpha\rvert\le K\lvert b_n\rvert$ for all $n>N$, then $a_n-\alpha=O(b_n)$. The error is eventually bounded by a constant multiple of $\lvert b_n\rvert$.

The notes list some common shapes for a comparison sequence and the plots that make them linear.

| Shape | Plot |
| --- | --- |
| $b_n=n^p$ | Logarithmic scale on both axes |
| $b_n=e^{kn}$ | Logarithmic scale on the vertical axis |
| $b_n=\log n$ | Logarithmic scale on the horizontal axis |

For convergence to zero, the power and exponential cases use negative exponents. The logarithm itself is listed as a comparison shape.

The example appears to give $s_n=(3n^2+2n)/(n^2+2)$, which tends to $3$. To test for power-law convergence, model the deviation as $s_n-3\approx A/n^p$ with $A>0$. Taking logarithms gives

$$
\log\lvert s_n-3\rvert\approx\log A-p\log n.
$$

Set $y_n=\log\lvert s_n-3\rvert$, $x_n=\log n$, and $a=\log A$. The model $y_n=a-px_n$ is a line with intercept $a$ and slope $-p$.

The example gave $s_n-3=O(n^{-1})$. The notes infer the rate because the log-log plots of $\lvert s_n-3\rvert$ and $n^{-1}$ were parallel. The handwritten sentence refers to the plot of $s_n$, while the plotted deviation is the one defined on [[#Review of big-O notation|the section on Review of big-O notation]].

For an exponential model $s_n=L+Ce^{-\beta n}$ with $C>0$ and $\beta>0$,

$$
\log\lvert s_n-L\rvert=\log C-\beta n.
$$

The vertical semilog plot uses $y_n=\log\lvert s_n-L\rvert$ and $x_n=n$. Its intercept is $\log C$ and its slope is $-\beta$.

For the logarithmic model $s_n=L+\log(kn)$ with $k>0$ and $kn\ge 1$, set $y_n=\lvert s_n-L\rvert$ and $x_n=\log n$. Then

$$
y_n=\log k+x_n.
$$

**Homework 1 strategy**

- **Model 1.** For a given date, use average temperature and average rainfall from that date and nearby dates during the three preceding years. Average the values together.
- **Model 2.** For a given date, average temperature and rainfall from the same calendar date in each of the preceding ten years.

##### Walkers, Monte Carlo, and the advection equation

The idea is to represent a phenomenon with a discrete number of walkers.

![[Kyle Kabasares - Mathematical Modeling - Discrete walkers in a Monte Carlo model.png|**Fig. 3** Four dots represent individual walkers in the model.]]

##### Discrete walker rule

Discretize space with grid spacing $\mechanical{\Delta x}$ and take snapshots every $\mechanical{\Delta t}$. The model prescribes rules for each walker, which can include randomness. In this example each walker moves $3\mechanical{\Delta x}$ to the right at every time step.

![[Kyle Kabasares - Mathematical Modeling - Walker displacement after one time step.png|**Fig. 4** The black dots show two walkers before the step. The red dots show their positions at $t=\Delta t$.]]

Let $f(x,t)$ be the number of walkers in the cell from $x-\mechanical{\Delta x}/2$ to $x+\mechanical{\Delta x}/2$ at time $t$. The cell limits are read this way to match the stated spacing and the sketch. After one step, the walkers in this cell are those that occupied the cell centered at $x-3\mechanical{\Delta x}$ at the previous time.

$$
f(x,t+\mechanical{\Delta t})
=f(x-3\mechanical{\Delta x},t)
=f(x-6\mechanical{\Delta x},t-\mechanical{\Delta t})=\cdots.
$$

Which space-time points $(x,t)$ have the same walker count as $(x_0,t_0)$ by this rule? The red points in the sketch lie on the line to be determined.

![[Kyle Kabasares - Mathematical Modeling - Walker trajectories in space and time.png|**Fig. 5** Points connected by the update rule lie on a straight line in the space-time diagram.]]

After an integer number $a$ of steps,

$$
f(x,t+a\mechanical{\Delta t})=f(x-3a\mechanical{\Delta x},t),\qquad
\mechanical{c}=\frac{3\mechanical{\Delta x}}{\mechanical{\Delta t}}.
$$

The speed $\mechanical{c}$ has dimensions of length divided by time.

The walker count is constant along the line through $(x_0,t_0)$ given by

$$
x-x_0=\mechanical{c}(t-t_0),\qquad
x-\mechanical{c}t=x_0-\mechanical{c}t_0,
\qquad
\mechanical{c}=\frac{3\mechanical{\Delta x}}{\mechanical{\Delta t}}.
$$

Thus $f(x,t)=f(x_0,t_0)$ on this line. At $t_0=0$, $x_0=x-\mechanical{c}t$, so $f(x,t)=g(x-\mechanical{c}t)$, where $g$ is the initial configuration.

![[Kyle Kabasares - Mathematical Modeling - Walker count as a function of position.png|**Fig. 6** A sample profile shows the number of walkers as a function of position.]]

Subtract $f(x,t)$ from the one-step update and divide by $\mechanical{\Delta t}$.

$$
\begin{aligned}
\frac{f(x,t+\mechanical{\Delta t})-f(x,t)}{\mechanical{\Delta t}}
&=\frac{f(x-3\mechanical{\Delta x},t)-f(x,t)}{\mechanical{\Delta t}}\\
&=\frac{f(x-3\mechanical{\Delta x},t)-f(x,t)}{-3\mechanical{\Delta x}}
\left(-\frac{3\mechanical{\Delta x}}{\mechanical{\Delta t}}\right).
\end{aligned}
$$

Take $\mechanical{\Delta x}\to0$ and $\mechanical{\Delta t}\to0$ with $\mechanical{c}=3\mechanical{\Delta x}/\mechanical{\Delta t}$ fixed. For a differentiable continuum profile this gives the advection equation.

$$
\boxed{\frac{\partial f}{\partial t}+\mechanical{c}\frac{\partial f}{\partial x}=0.}
$$

Any differentiable profile of the form $f(x,t)=g(x-\mechanical{c}t)$ is a solution.

##### Advection and characteristics

At every step, a walker moves right by $\mechanical{c}\mechanical{\Delta t}$.

![[Kyle Kabasares - Mathematical Modeling - Single walker displacement at constant speed.png|**Fig. 7** One walker moves a distance $c\Delta t$ to the right in one time step.]]

The continuum equation is $f_t+\mechanical{c}f_x=0$. For $f(x,t)=g(x-\mechanical{c}t)$, the chain rule gives

$$
f_t=-\mechanical{c}g'(x-\mechanical{c}t),\qquad
f_x=g'(x-\mechanical{c}t).
$$

The initial condition is $g(x)=f(x,0)$. The handwriting uses $v$ once for the speed in the solution and $c$ in the model and derivative.

![[Kyle Kabasares - Mathematical Modeling - Initial profile translated by advection.png|**Fig. 8** A sample initial profile and translated profiles at $t=1$ and $t=2$. The sketch marks sample values $1.62$, $1.55$, and $1.78$.]]

The notes describe representing the initial values with walkers of weight $1/100$. On a domain starting at $x=0$, rightward advection requires a left boundary condition.

![[Kyle Kabasares - Mathematical Modeling - Advection characteristics and left boundary.png|**Fig. 9** The walker count is constant along each line $x-ct=K$. The slope in the space-time diagram is $1/c$.]]

Prescribe $f(0,t)=h(t)$. This boundary information propagates to the right along the characteristic lines $x-\mechanical{c}t=K$.

##### Advection with an initial and a boundary condition

For rightward speed $\mechanical{c}>0$, prescribe $f(x,0)=g(x)$ for $0\le x\le 1$ and $f(0,t)=h(t)$ for $t>0$. Along the characteristic through $(x,t)$, the value of $x-\mechanical{c}t$ is constant. If it is nonnegative, the characteristic meets the initial line at $x_0=x-\mechanical{c}t$. If it is negative, the characteristic meets the left boundary at the time $t_1=-(x-\mechanical{c}t)/\mechanical{c}=t-x/\mechanical{c}$. The solution on the given interval is

$$
f(x,t)=\begin{cases}
g(x-\mechanical{c}t),&x-\mechanical{c}t\ge 0,\\
h(t-x/\mechanical{c}),&x-\mechanical{c}t<0.
\end{cases}
$$

##### Adding a random component

At each step, choose the direction randomly. A walker moves one cell left with probability $1/2$ or one cell right with probability $1/2$.

![[Kyle Kabasares - Mathematical Modeling - Left and right steps of random walkers.png|**Fig. 10** Random walkers can move in either direction on the spatial grid.]]

Let $C(x,t)$ be the expected number of walkers in the cell from $x-\mechanical{\Delta x}/2$ to $x+\mechanical{\Delta x}/2$. The walkers entering this cell come from its left and right neighbors.

$$
C(x,t+\mechanical{\Delta t})
=\frac12 C(x-\mechanical{\Delta x},t)+\frac12 C(x+\mechanical{\Delta x},t).
$$

The difference equation is

$$
C(x,t+\mechanical{\Delta t})-C(x,t)
=\frac12\bigl[C(x-\mechanical{\Delta x},t)-2C(x,t)+C(x+\mechanical{\Delta x},t)\bigr].
$$

Divide the random-walk difference equation by $\mechanical{\Delta t}$. With $(\mechanical{\Delta x})^2=\mechanical{D}\mechanical{\Delta t}$ for a positive constant $\mechanical{D}$, the equation becomes

$$
\frac{C(x,t+\mechanical{\Delta t})-C(x,t)}{\mechanical{\Delta t}}
=\frac{\mechanical{D}}{2}
\frac{C(x-\mechanical{\Delta x},t)-2C(x,t)+C(x+\mechanical{\Delta x},t)}
{(\mechanical{\Delta x})^2}.
$$

Let $\mechanical{\Delta x}$ and $\mechanical{\Delta t}$ tend to zero with $\mechanical{D}$ fixed. The centered second difference tends to $C_{xx}$ for a smooth profile, giving the heat equation $C_t=(\mechanical{D}/2)C_{xx}$.

##### Heat equation, boundary effects, and extensions

![[Kyle Kabasares - Mathematical Modeling - Symmetric random walk step.png|**Fig. 11** A walker steps by $\Delta x$ to either side with equal probability.]]

The fundamental solution for the diffusion equation on the line is

$$
f(x,t)=\frac{e^{-x^2/(2\mechanical{D}t)}}{\sqrt{2\pi\mechanical{D}t}},\qquad t>0.
$$

This is a Gaussian with mean $\mu=0$ and variance $\sigma^2=\mechanical{D}t$. The general Gaussian density is

$$
G(x)=\frac{e^{-(x-\mu)^2/(2\sigma^2)}}{\sqrt{2\pi\sigma^2}}.
$$

![[Kyle Kabasares - Mathematical Modeling - Gaussian heat kernel and its width.png|**Fig. 12** A Gaussian profile with its mean $\mu$ and a width marked $\sigma$.]]

The first property noted for $f$ is that it satisfies $f_t=(\mechanical{D}/2)f_{xx}$.

##### Properties of the fundamental solution

2. For each $t>0$, $\lim_{\lvert x\rvert\to\infty}f(x,t)=0$.
3. For each $t>0$, $\int_{-\infty}^{\infty}f(x,t)\,dx=1$. The total amount of walkers over the full domain is constant.
4. As $t\to0^+$, $f(x,t)\to\delta(x)$ in the sense of distributions. Pointwise, the Gaussian tends to zero for $x\ne0$ and grows without bound at $x=0$.
5. The mean square displacement is

   $$
   \int_{-\infty}^{\infty}x^2f(x,t)\,dx=\mechanical{D}t.
   $$

   Its square root $\sqrt{\mechanical{D}t}$ is the root mean square distance from the origin, called the average distance in the notes.

For initial data $g(x)$, sum the contributions of fundamental solutions centered at each initial position $x_0$.

$$
M(x,t)=\int_{-\infty}^{\infty}g(x_0)
\frac{e^{-(x-x_0)^2/(2\mechanical{D}t)}}{\sqrt{2\pi\mechanical{D}t}}\,dx_0.
$$

The superposition uses the linearity of the diffusion equation. In the walker model the walkers move independently of each other.

##### Boundary conditions

- **Type I.** Prescribe $N$ walkers at the boundary.
- **Type II.** Reflecting boundary. The walkers cannot leave through it, so the net flux is zero.
- **Type III.** Periodic boundary.

##### Type II. Zero flux at a reflecting boundary

In the discrete representation at $x=L$, balance the expected number of walkers leaving and entering.

$$
\underbrace{\tfrac12 C(L-\mechanical{\Delta x}/2,t)}_{\text{expected count leaving}}
=\underbrace{\tfrac12 C(L+\mechanical{\Delta x}/2,t)}_{\text{expected count entering}}.
$$

The exterior value is the reflected value in this representation. In the continuum limit the balance gives

$$
\left.\frac{\partial C}{\partial x}\right|_{x=L}=0.
$$

More generally, the notes write the gradient term $(\mechanical{D}/2)C_x$. With flux defined as positive in the $+x$ direction, the diffusive flux is $-(\mechanical{D}/2)C_x$. Either sign convention gives the same zero-flux condition.

##### Updating a walker array

One sample array starts with counts $[0,2,0,0]$. Keep separate counts for walkers assigned to move left or right.

![[Kyle Kabasares - Mathematical Modeling - Walker counts and direction arrays.png|**Fig. 13** A sample walker array and the scratch layout for recording movement directions.]]

For each node $i$, flip a coin for each walker to choose its direction. Record the outcome in the corresponding direction array. Then update node $i$ with the walkers arriving from its two neighbors.

$$
\operatorname{new}(i)=\operatorname{right}(i-1)+\operatorname{left}(i+1).
$$

The scratch arrays read left $[2,3,4,0,1]$, right $[1,2,1,3,0,1]$, and new $[1,4,2,1,1]$. The sketch preserves their original alignment.

![[Kyle Kabasares - Mathematical Modeling - Left right and updated walker counts.png|**Fig. 14** Scratch arrays labeled left, right, and new for the walker update.]]

##### Biased random walkers

Introduce a bias $z>0$. The probability of moving right is $\tfrac12+z$ and the probability of moving left is $\tfrac12-z$, with $z\le\tfrac12$ so that both are valid probabilities.

![[Kyle Kabasares - Mathematical Modeling - Probabilities of biased random walk steps.png|**Fig. 15** The rightward step is more likely than the leftward step by $2z$.]]

Track the expected count $C(x,t)$. Walkers entering from the left must move right, and those entering from the right must move left.

$$
C(x,t+\mechanical{\Delta t})
=\left(\tfrac12+z\right)C(x-\mechanical{\Delta x},t)
+\left(\tfrac12-z\right)C(x+\mechanical{\Delta x},t).
$$

A scratch line swaps the two weights. The update above follows the stated step probabilities and the later derivation on the page. Subtract $C(x,t)$, divide by $\mechanical{\Delta t}$, and group the terms.

$$
\begin{aligned}
\frac{C(x,t+\mechanical{\Delta t})-C(x,t)}{\mechanical{\Delta t}}
&=\frac{C(x-\mechanical{\Delta x},t)-2C(x,t)+C(x+\mechanical{\Delta x},t)}
{2\mechanical{\Delta t}}\\
&\quad+z\frac{C(x-\mechanical{\Delta x},t)-C(x+\mechanical{\Delta x},t)}
{\mechanical{\Delta t}}.
\end{aligned}
$$

Set $\mechanical{D}\mechanical{\Delta t}=(\mechanical{\Delta x})^2$ for constant $\mechanical{D}$. In the continuum limit the first term tends to $(\mechanical{D}/2)C_{xx}$. The second term takes the form

$$
\mechanical{D}z\frac{C(x-\mechanical{\Delta x},t)-C(x+\mechanical{\Delta x},t)}
{(\mechanical{\Delta x})^2}.
$$

The notes turn to Taylor expansions of the two shifted values to determine how this term scales.

Expand $C(x+\mechanical{\Delta x},t)$ and $C(x-\mechanical{\Delta x},t)$ about $x$.

$$
C(x\pm\mechanical{\Delta x},t)
=C(x,t)\pm\mechanical{\Delta x}\,C_x(x,t)
+\frac{(\mechanical{\Delta x})^2}{2}C_{xx}(x,t)+O((\mechanical{\Delta x})^3).
$$

In the difference $C(x-\mechanical{\Delta x},t)-C(x+\mechanical{\Delta x},t)$ the constant and quadratic terms cancel. Multiplication by $\mechanical{D}z/(\mechanical{\Delta x})^2$ gives

$$
-\frac{2\mechanical{D}z}{\mechanical{\Delta x}}C_x
+\mechanical{D}z\,O(\mechanical{\Delta x}).
$$

To obtain a finite nonzero drift in the continuum limit, let the bias shrink with $\mechanical{\Delta x}$ and keep $2\mechanical{D}z/\mechanical{\Delta x}=\mechanical{U}$ constant. Equivalently,

$$
z=\frac{\mechanical{U}\mechanical{\Delta x}}{2\mechanical{D}}
=\frac{\mechanical{U}\sqrt{\mechanical{\Delta t}}}{2\sqrt{\mechanical{D}}}.
$$

The resulting advection–diffusion equation is

$$
\boxed{C_t+\mechanical{U}C_x=\frac{\mechanical{D}}2 C_{xx},}
$$

where $\mechanical{U}$ is a velocity.

Finish the biased random walk and consider further modifications of the random walk. The teams for Homework 2 have been posted.

![[Kyle Kabasares - Mathematical Modeling - Biased random walk with equal step lengths.png|**Fig. 16** The walker steps by the same distance in either direction, with a rightward bias $0<z<1/2$.]]

Take $\mechanical{\Delta t}\to0$ with $\mechanical{D}=(\mechanical{\Delta x})^2/\mechanical{\Delta t}$ fixed.

With $\mechanical{U}$ and $\mechanical{D}$ fixed and $z=\mechanical{U}\mechanical{\Delta x}/(2\mechanical{D})$, the expected walker count satisfies $C_t+\mechanical{U}C_x=(\mechanical{D}/2)C_{xx}$. The handwritten review calls the bias constant. The scaling on [[#Biased random walkers|the section on Biased random walkers]] keeps the velocity constant as the bias shrinks.

##### Moving coordinate

Set $y=x-\mechanical{U}t$ and $\tau=t$. Write $C(x,t)=\widetilde C(y,\tau)$ to distinguish the original and transformed profiles.

![[Kyle Kabasares - Mathematical Modeling - Chain rule dependencies for a moving coordinate.png|**Fig. 17** The chain-rule sketch connects the profile to the transformed coordinates and then to position and time.]]

By the chain rule,

$$
\begin{aligned}
C_t&=\widetilde C_y y_t+\widetilde C_\tau\tau_t
=-\mechanical{U}\widetilde C_y+\widetilde C_\tau,\\
C_x&=\widetilde C_y y_x+\widetilde C_\tau\tau_x=\widetilde C_y,\\
C_{xx}&=\widetilde C_{yy}.
\end{aligned}
$$

Substitution leaves $\widetilde C_\tau=(\mechanical{D}/2)\widetilde C_{yy}$. Its fundamental solution and the corresponding solution in the original coordinates are

$$
\widetilde C(y,\tau)=\frac{e^{-y^2/(2\mechanical{D}\tau)}}{\sqrt{2\pi\mechanical{D}\tau}},
\qquad
C(x,t)=\frac{e^{-(x-\mechanical{U}t)^2/(2\mechanical{D}t)}}{\sqrt{2\pi\mechanical{D}t}}.
$$

The advection–diffusion kernel starts at $\delta(x)$ at $t=0$. Its center moves to $x=\mechanical{U}t$, and its peak height decreases in proportion to $1/\sqrt{t}$ as the profile spreads.

![[Kyle Kabasares - Mathematical Modeling - Gaussian profile spreading and drifting right.png|**Fig. 18** The initial point source and the spreading profiles at $t=1$ and $t=2$. The dotted curve marks the decrease in peak height.]]

##### Possible extensions to random walks

- Let walkers stay in place, as in Homework 2.
- Let the bias depend on position or time.
- Use different types of walkers or allow motion in higher dimensions.
- Give walkers an orientation or another property, such as energy.
- Let walkers multiply, break up, or merge.
- Let walkers interact and slow down or speed up.
- Make step lengths and step frequencies random.
- Let walkers stick to each other or to a location.
- Use self-avoiding random walks.

The next two lectures preview diffusion-limited aggregates, with the formation of dust bunnies as an example model.

##### Diffusion-limited aggregates and fractal dimension

The notes credit the model to Witten and give 1978 as the year of introduction. Diffusion-limited aggregation models the growth of an object from material that is also diffusing. Crystal growth is one example.

##### Growth of a diffusion-limited aggregate

The first sketch shows a water droplet undergoing Brownian motion near a growing cluster. The dark square marks the starting seed of the cluster.

![[Kyle Kabasares - Mathematical Modeling - Brownian path toward an aggregate.png|**Fig. 19** A droplet follows a Brownian path toward the aggregate.]]

In the setup labeled “1D,” pick a random horizontal coordinate $x$ and start a random walker there. The seed lies on the lower line.

![[Kyle Kabasares - Mathematical Modeling - Random walker approaching a seed on a line.png|**Fig. 20** A walker starts above the line and reaches the seed.]]

The typical result is a branching cluster.

![[Kyle Kabasares - Mathematical Modeling - Branching aggregate growing from a line.png|**Fig. 21** The aggregate grows outward in branches from its seed.]]

Diffusion-limited aggregates are self-similar fractal objects. The sketch shows a smaller branch resembling the larger branching pattern when magnified.

![[Kyle Kabasares - Mathematical Modeling - Self-similarity in a magnified aggregate branch.png|**Fig. 22** Magnification of part of a branch reveals a similar pattern at a smaller scale.]]

##### Measuring dimension

Cover the object with regular shapes of size $L$, such as squares of side $L$, and count the number $N$ used. Study how $N$ depends on $L$ as $L\to0$.

![[Kyle Kabasares - Mathematical Modeling - Square cell for box counting.png|**Fig. 23** A square of side $L$ serves as one covering cell.]]

## Source

Kyle Kabasares, *Mathematical Modeling (Math 150, UC Merced 2017)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\Delta x}$ | $\unit{m}$ | Grid spacing | Width of a spatial cell in the walker model. |
| $\mechanical{\Delta t}$ | $\unit{s}$ | Time step | Interval between snapshots of the walker model. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Advection speed | Displacement of a walker divided by the elapsed time. |
| $\mechanical{D}$ | $\unit{m^2\,s^{-1}}$ | Variance growth rate | The ratio $(\mechanical{\Delta x})^2/\mechanical{\Delta t}$ and twice the coefficient in the diffusion equation. |
| $\mechanical{U}$ | $\unit{m\,s^{-1}}$ | Drift velocity | Continuum advection velocity produced by the scaled random-walk bias. |
| $R$ | 1 | Population | Number of animals in the isolated system. |
| $t$, $1/\alpha$ | $\unit{s}$ | Elapsed time | Time in the population model and time for one factor of $e$ of exponential growth, expressed in the chosen time unit. |
| $\alpha$ | $\unit{s^{-1}}$ | Population growth rate | Fractional rate of increase, expressed in the inverse of the chosen time unit. |
| $M$ | 1 | Carrying capacity | Population that the modeled resources can sustain at equilibrium. |
| $\beta$ | $\unit{s^{-1}}$ | Crowding coefficient | Coefficient of the quadratic reduction in growth when population is counted as a dimensionless number. |
| $t_0$ | $\unit{s}$ | Inflection time | Time at which the logistic population reaches half its carrying capacity. |
| $K$ | 1 | Koala population | Number of koalas in the competition model. |
| $\delta$ | $\unit{s^{-1}}$ | Wolf decline rate | Fractional rate of decline in the absence of prey. |
| $\beta$ | 1 | Predator effect coefficient | Reciprocal of the wolf count at which the rabbit growth term vanishes. |
| $y_i$ | 1 | Age-group population | Number of individuals in the indicated age band. |
| $\tau$ | 1 | Total population | Sum of the four age-group populations. |
| $x$, $y$ | $\unit{oz}$ | Ingredient amounts | Onion soup and chicken stock per serving, respectively. |
| $s$ | $\unit{g}$ | Protein surplus | Protein above the minimum required per serving. |
| $t$ | — | Iron surplus | Iron above the minimum required per serving, in the unspecified iron units of the exercise. |
| $a_i$ | $\unit{yr^{-1}}$ | Birth-rate coefficients | Per-capita contributions to the youngest group. |
| $d\mechanical{\theta}_i/dt$ | $\unit{rad\,s^{-1}}$ | Angular rate | Time derivative of the corresponding angular coordinate. |
