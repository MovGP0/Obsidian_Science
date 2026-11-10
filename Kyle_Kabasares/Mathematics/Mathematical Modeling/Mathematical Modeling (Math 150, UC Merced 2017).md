---
title: "Mathematical Modeling (Math 150, UC Merced 2017)"
---

> [!TLDR]
> These Math 150 notes develop mathematical models for predicting the behavior of complex systems and measuring the error of those predictions.

Source notes by Kyle Kabasares. [[Mathematical Modeling (Math 150, UC Merced 2017).pdf|Original PDF]].

Transcribed PDF pages 1–114 of 114.

### PDF page 1

**January 18, 2017. Math 150 with François Blanchette**

The page lists *Mathematical Modeling of Physical Systems* by D. Basmadjian and *Concepts of Mathematical Modeling* as recommended books. The first author's surname is read from the handwriting as Basmadjian.

Models make predictions about complicated systems. A good model is reasonably accurate, relatively simple to use, and self-contained.

To develop a good model, identify which effects matter, choose a metric to measure the error, and understand the real problem.

**January 20, 2017. Definition of a metric**

A metric $d\colon X\times X\to[0,\infty)$ assigns a nonnegative real number to two elements of a set $X$. For all $x,y,z\in X$, it satisfies the following properties.

1. **Nonnegativity.** $d(x,y)\ge 0$.
2. **Identity of indiscernibles.** $d(x,y)=0$ if and only if $x=y$.
3. **Symmetry.** $d(x,y)=d(y,x)$.
4. **Triangle inequality.** $d(x,y)\le d(x,z)+d(z,y)$.

![[Kyle Kabasares - Mathematical Modeling - Triangle inequality for a metric.png|**Fig. 1** The direct distance from $x$ to $y$ is at most the sum of the distances through $z$.]]

Check all four properties when defining a metric. The codomain is written with a closing square bracket in the handwriting. The definition here uses finite distances.

### PDF page 2

**Norms**

A norm $p\colon V\to[0,\infty)$ assigns a nonnegative real number to a vector in a real vector space $V$. The handwritten definition calls $V$ a vector field. For vectors $\vec u,\vec v\in V$ and scalars $a\in\mathbb{R}$, the norm satisfies

1. $p(\vec v)\ge 0$.
2. $p(\vec v)=0$ if and only if $\vec v=\vec 0$.
3. $p(\vec u+\vec v)\le p(\vec u)+p(\vec v)$, the triangle inequality.
4. $p(a\vec v)=\lvert a\rvert p(\vec v)$.

**Connection between norms and metrics**

If $p$ is a norm, then $d(\vec x,\vec y)=p(\vec x-\vec y)$ is a metric.

The notes give the following example under the label “discrete norm.” The formula defines the discrete metric.

$$
d(x,y)=\begin{cases}
0,&x=y,\\
1,&x\ne y.
\end{cases}
$$

This metric distinguishes two outcomes for a comparison, equality or inequality.

### PDF page 3

**The $p$-norm**

For $\vec x=\langle x_1,x_2,\ldots,x_n\rangle$ and $1\le p<\infty$, define

$$
\lVert\vec x\rVert_p=\left(\sum_{i=1}^{n}\lvert x_i\rvert^p\right)^{1/p}.
$$

The common case $p=2$ gives the Euclidean norm, $\lVert\vec x\rVert_2=\sqrt{\sum_{i=1}^n\lvert x_i\rvert^2}$. For example, its associated distance can compare positions. For $p=1$, $\lVert\vec x\rVert_1=\sum_{i=1}^n\lvert x_i\rvert$. The notes suggest this norm for errors in predictions of prices or other quantities that are counted.

**The infinity norm**

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

### PDF page 4

**Relative errors**

![[Kyle Kabasares - Mathematical Modeling - Prediction curve and observed values.png|**Fig. 2** A model curve and scattered observations. The vertical arrow illustrates their difference at one input.]]

The $2$-norm depends on the magnitudes of the entries. Relative errors can account for differences in scale. With predictions $x_i$ and nonzero observations $y_i$, the notes give the sum

$$
d(\vec x,\vec y)=\sum_{i=1}^n\frac{\lvert x_i-y_i\rvert}{\lvert y_i\rvert}.
$$

This expression uses the observations as the reference scale. The page also suggests a logarithmic comparison for positive entries. The bars in the handwriting surround the logarithms separately, giving the expression $\sum_{i=1}^n(\lvert\log x_i\rvert-\lvert\log y_i\rvert)$. If the intended quantity is a nonnegative absolute log error, the corresponding formula is $\sum_{i=1}^n\lvert\log x_i-\log y_i\rvert$.

**January 20, 2017 discussion**

The page records office hours on Friday from 3:30 to 5:20 p.m. in SSM 154 and Monday from 2:30 to 3:30 p.m. in AOA 182.

For a sequence $s_n$, the limit as $n\to\infty$ can be finite, can be $+\infty$ or $-\infty$ in the extended sense, or can fail to exist even in that sense. If $s_n\to+\infty$, then $1/s_n\to0$ with reciprocal scaling.

### PDF page 5

**Review of big-O notation**

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

### PDF page 6

The example gave $s_n-3=O(n^{-1})$. The notes infer the rate because the log-log plots of $\lvert s_n-3\rvert$ and $n^{-1}$ were parallel. The handwritten sentence refers to the plot of $s_n$, while the plotted deviation is the one defined on page 5.

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

**January 23, 2017. Walkers, Monte Carlo, and the advection equation**

The idea is to represent a phenomenon with a discrete number of walkers.

![[Kyle Kabasares - Mathematical Modeling - Discrete walkers in a Monte Carlo model.png|**Fig. 3** Four dots represent individual walkers in the model.]]

### PDF page 7

**Discrete walker rule**

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

### PDF page 8

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

### PDF page 9

**January 25, 2017 lecture. Advection and characteristics**

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

### PDF page 10

**Advection with an initial and a boundary condition**

For rightward speed $\mechanical{c}>0$, prescribe $f(x,0)=g(x)$ for $0\le x\le 1$ and $f(0,t)=h(t)$ for $t>0$. Along the characteristic through $(x,t)$, the value of $x-\mechanical{c}t$ is constant. If it is nonnegative, the characteristic meets the initial line at $x_0=x-\mechanical{c}t$. If it is negative, the characteristic meets the left boundary at the time $t_1=-(x-\mechanical{c}t)/\mechanical{c}=t-x/\mechanical{c}$. The solution on the given interval is

$$
f(x,t)=\begin{cases}
g(x-\mechanical{c}t),&x-\mechanical{c}t\ge 0,\\
h(t-x/\mechanical{c}),&x-\mechanical{c}t<0.
\end{cases}
$$

**Adding a random component**

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

### PDF page 11

Divide the random-walk difference equation by $\mechanical{\Delta t}$. With $(\mechanical{\Delta x})^2=\mechanical{D}\mechanical{\Delta t}$ for a positive constant $\mechanical{D}$, the equation becomes

$$
\frac{C(x,t+\mechanical{\Delta t})-C(x,t)}{\mechanical{\Delta t}}
=\frac{\mechanical{D}}{2}
\frac{C(x-\mechanical{\Delta x},t)-2C(x,t)+C(x+\mechanical{\Delta x},t)}
{(\mechanical{\Delta x})^2}.
$$

Let $\mechanical{\Delta x}$ and $\mechanical{\Delta t}$ tend to zero with $\mechanical{D}$ fixed. The centered second difference tends to $C_{xx}$ for a smooth profile, giving the heat equation $C_t=(\mechanical{D}/2)C_{xx}$.

**January 27, 2017 lecture. Heat equation, boundary effects, and extensions**

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

### PDF page 12

**Properties of the fundamental solution continued**

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

**Boundary conditions**

- **Type I.** Prescribe $N$ walkers at the boundary.
- **Type II.** Reflecting boundary. The walkers cannot leave through it, so the net flux is zero.
- **Type III.** Periodic boundary.

### PDF page 13

**Type II. Zero flux at a reflecting boundary**

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

**January 27, 2017 discussion. Updating a walker array**

One sample array starts with counts $[0,2,0,0]$. Keep separate counts for walkers assigned to move left or right.

![[Kyle Kabasares - Mathematical Modeling - Walker counts and direction arrays.png|**Fig. 13** A sample walker array and the scratch layout for recording movement directions.]]

For each node $i$, flip a coin for each walker to choose its direction. Record the outcome in the corresponding direction array. Then update node $i$ with the walkers arriving from its two neighbors.

$$
\operatorname{new}(i)=\operatorname{right}(i-1)+\operatorname{left}(i+1).
$$

The scratch arrays read left $[2,3,4,0,1]$, right $[1,2,1,3,0,1]$, and new $[1,4,2,1,1]$. The sketch preserves their original alignment.

![[Kyle Kabasares - Mathematical Modeling - Left right and updated walker counts.png|**Fig. 14** Scratch arrays labeled left, right, and new for the walker update.]]

### PDF page 14

**January 30, 2017 lecture. Biased random walkers**

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

### PDF page 15

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

**February 1, 2017 lecture**

Finish the biased random walk and consider further modifications of the random walk. The teams for Homework 2 have been posted.

![[Kyle Kabasares - Mathematical Modeling - Biased random walk with equal step lengths.png|**Fig. 16** The walker steps by the same distance in either direction, with a rightward bias $0<z<1/2$.]]

Take $\mechanical{\Delta t}\to0$ with $\mechanical{D}=(\mechanical{\Delta x})^2/\mechanical{\Delta t}$ fixed.

### PDF page 16

With $\mechanical{U}$ and $\mechanical{D}$ fixed and $z=\mechanical{U}\mechanical{\Delta x}/(2\mechanical{D})$, the expected walker count satisfies $C_t+\mechanical{U}C_x=(\mechanical{D}/2)C_{xx}$. The handwritten review calls the bias constant. The scaling on page 15 keeps the velocity constant as the bias shrinks.

**Moving coordinate**

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

### PDF page 17

The advection–diffusion kernel starts at $\delta(x)$ at $t=0$. Its center moves to $x=\mechanical{U}t$, and its peak height decreases in proportion to $1/\sqrt{t}$ as the profile spreads.

![[Kyle Kabasares - Mathematical Modeling - Gaussian profile spreading and drifting right.png|**Fig. 18** The initial point source and the spreading profiles at $t=1$ and $t=2$. The dotted curve marks the decrease in peak height.]]

**Possible extensions to random walks**

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

**February 3, 2017 lecture. Diffusion-limited aggregates and fractal dimension**

The notes credit the model to Witten and give 1978 as the year of introduction. Diffusion-limited aggregation models the growth of an object from material that is also diffusing. Crystal growth is one example.

### PDF page 18

**Growth of a diffusion-limited aggregate**

The first sketch shows a water droplet undergoing Brownian motion near a growing cluster. The dark square marks the starting seed of the cluster.

![[Kyle Kabasares - Mathematical Modeling - Brownian path toward an aggregate.png|**Fig. 19** A droplet follows a Brownian path toward the aggregate.]]

In the setup labeled “1D,” pick a random horizontal coordinate $x$ and start a random walker there. The seed lies on the lower line.

![[Kyle Kabasares - Mathematical Modeling - Random walker approaching a seed on a line.png|**Fig. 20** A walker starts above the line and reaches the seed.]]

The typical result is a branching cluster.

![[Kyle Kabasares - Mathematical Modeling - Branching aggregate growing from a line.png|**Fig. 21** The aggregate grows outward in branches from its seed.]]

Diffusion-limited aggregates are self-similar fractal objects. The sketch shows a smaller branch resembling the larger branching pattern when magnified.

![[Kyle Kabasares - Mathematical Modeling - Self-similarity in a magnified aggregate branch.png|**Fig. 22** Magnification of part of a branch reveals a similar pattern at a smaller scale.]]

**Measuring dimension**

Cover the object with regular shapes of size $L$, such as squares of side $L$, and count the number $N$ used. Study how $N$ depends on $L$ as $L\to0$.

![[Kyle Kabasares - Mathematical Modeling - Square cell for box counting.png|**Fig. 23** A square of side $L$ serves as one covering cell.]]

### PDF page 19

For the objects considered here, the number of covering cells $N(L)$ tends to infinity as their size $L$ tends to zero. The rate of growth of $N(L)$ describes the dimension.

![[Kyle Kabasares - Mathematical Modeling - Outline on a box-counting grid.png|**Fig. 24** A grid superimposed on an outline shows how to count the cells that meet the object.]]

A full square of side $M$ needs $N(L)=(M/L)^2$ square cells when the sizes divide exactly. A full cube needs $N(L)=(M/L)^3$ cubic cells.

![[Kyle Kabasares - Mathematical Modeling - Small cube covering a three-dimensional object.png|**Fig. 25** A small cubic cell at the corner of a larger cube.]]

For the cube,

$$
\log N(L)=3\log(M/L)=3\log M-3\log L.
$$

The exponent gives the dimension. In general the box-counting dimension, when the limit exists, is

$$
d=\lim_{L\to0}\frac{-\log N(L)}{\log L}.
$$

Here $L$ is measured in fixed units.

**Example. Sierpiński triangle**

1. Start with an equilateral triangle of side $1$.
2. Split it into four smaller equilateral triangles.
3. Remove the central triangle.
4. Repeat steps 2 and 3 on each remaining triangle.

![[Kyle Kabasares - Mathematical Modeling - Sierpinski triangle after two subdivisions.png|**Fig. 26** The shaded triangles mark the central regions removed during the first two subdivisions.]]

### PDF page 20

**February 3, 2017 discussion. Two-dimensional walkers**

Modify the one-dimensional algorithm from the previous week for walkers that move in two dimensions with a uniformly random step length. Include $y$ in the location variables. For $n$ walkers, store a $2\times n$ position matrix with all $x$ coordinates in the first row and all $y$ coordinates in the second row. The one-dimensional count array becomes a matrix of size `nodes_x` by `nodes_y`.

The function takes the current locations and returns the updated `walker_count` and `walker_location`. For each walker, pick a step length $\ell$ using `max_step_length` and pick an angle $\theta=2\pi\,\operatorname{rand}()$. The page mentions a uniform step length but the pseudocode line ends at `max_step_length`. A uniform draw on $[0,\text{max step length}]$ is consistent with the stated goal. The handwritten $x$ update and the corresponding $y$ update are

$$
x_{\mathrm{new}}=x_{\mathrm{old}}+\ell\cos\theta,\qquad
y_{\mathrm{new}}=y_{\mathrm{old}}+\ell\sin\theta.
$$

Compute the cell indices using the ceiling function. The handwritten $y$ line uses ditto marks for the corresponding $y$ calculation.

$$
i_x=\left\lceil\frac{x_{\mathrm{new}}-x_{\mathrm{start}}}{\mechanical{\Delta x}}\right\rceil,
\qquad
i_y=\left\lceil\frac{y_{\mathrm{new}}-y_{\mathrm{start}}}{\mechanical{\Delta y}}\right\rceil.
$$

Increment `walker_count` at $(i_x,i_y)$ by one.

### PDF page 21

**February 6, 2017 lecture. Fractal dimension and dust-bunny formation**

A filled planar region has box count proportional to $L^{-2}$. Its box-counting dimension is obtained from $-\log N(L)/\log L$ as $L\to0$.

![[Kyle Kabasares - Mathematical Modeling - Covering squares on a planar region.png|**Fig. 27** Small covering squares sketched on a planar region.]]

For the Sierpiński triangle, each iteration halves the side length and triples the number of remaining triangles.

![[Kyle Kabasares - Mathematical Modeling - Repeated subdivision in a Sierpinski triangle.png|**Fig. 28** The shaded triangles mark the portions removed at successive scales.]]

| Iteration | $0$ | $1$ | $2$ | $m$ |
| --- | --- | --- | --- | --- |
| Side length $L$ | $1$ | $1/2$ | $1/4$ | $2^{-m}$ |
| Number $N$ | $1$ | $3$ | $9$ | $3^m$ |

Thus

$$
d=\lim_{m\to\infty}\frac{-\log(3^m)}{\log((1/2)^m)}
=\frac{\log 3}{\log 2}\approx1.58.
$$

A separate line records a theoretical dimension near $1.65$ and a simulation value of $1.65$. The theoretical entry appears to repeat $1.65$ on both sides of a tilde. The page does not label the object in that line.

**Dust-bunny model**

The random walkers represent dust particles. Specify how they move and how they stick to each other. Their motion combines a random part, a gravity bias, and background flow. The flow can provide a position-dependent velocity bias, and motion can depend on particle size.

For implementation, store each particle's position in an array $d$ with one row per particle and two columns. For particle $3$, $d(3,1)$ is its $x$ coordinate and $d(3,2)$ its $y$ coordinate.

Choose a distribution for the steps. The page proposes normal distributions with a mean set by the air velocity in $x$, and by the air velocity with a downward gravity bias in $y$. Each distribution also has a variance.

### PDF page 22

![[Kyle Kabasares - Mathematical Modeling - Shifted distribution for particle steps.png|**Fig. 29** The sketch shows a step distribution with a mean to the left of zero.]]

The dust model still needs a velocity as a function of position and a rule for where particles stick.

**February 8, 2017 lecture. Review of probability**

For a continuous random variable $X$ with probability density $p$, the cumulative probability is

$$
P(X\le x)=\int_{-\infty}^{x}p(t)\,dt.
$$

![[Kyle Kabasares - Mathematical Modeling - Probability density and cumulative area.png|**Fig. 30** The shaded area to the left of $x$ represents $P(X\le x)$. The sketch marks the mean $\mu$ and the spread $\sigma$.]]

For a normal distribution with mean $\mu$ and standard deviation $\sigma$,

$$
p(x)=\frac{e^{-(x-\mu)^2/(2\sigma^2)}}{\sqrt{2\pi\sigma^2}}.
$$

The denominator in the handwriting appears to lack the square on $\sigma$. The square gives the normalized Gaussian used on page 11.

The mean is $\mu=E[X]=\int_{-\infty}^{\infty}t\,p(t)\,dt$, and the density satisfies $\int_{-\infty}^{\infty}p(t)\,dt=1$. Expand the squared deviation to calculate the variance.

$$
\begin{aligned}
\operatorname{Var}(X)
&=E[(X-\mu)^2]=\int_{-\infty}^{\infty}(t-\mu)^2p(t)\,dt\\
&=\int_{-\infty}^{\infty}t^2p(t)\,dt
-2\mu\int_{-\infty}^{\infty}t\,p(t)\,dt
+\mu^2\int_{-\infty}^{\infty}p(t)\,dt.
\end{aligned}
$$

### PDF page 23

Since $E[X]=\mu$ and the density integrates to one,

$$
\operatorname{Var}(X)=E[X^2]-2\mu E[X]+\mu^2
=E[X^2]-(E[X])^2.
$$

More generally, the $n$th moment is $E[X^n]=\int_{-\infty}^{\infty}t^n p(t)\,dt$ when it exists. In particular, $E[X^2]=\operatorname{Var}(X)+(E[X])^2$.

**Time evolution of a random walker's density**

Let $C(x,t)$ be the probability density of the walker's position at fixed time $t$. Then the probability that the walker lies to the left of $x$ is $\int_{-\infty}^{x}C(x',t)\,dx'$ for a continuous position distribution.

Let $p(s)$ be the distribution of the signed step $s$. For a symmetric step of length $\mechanical{\Delta x}$, half the probability is at each of $-\mechanical{\Delta x}$ and $+\mechanical{\Delta x}$.

![[Kyle Kabasares - Mathematical Modeling - Two-point distribution of a signed walk step.png|**Fig. 31** The signed step takes one of two values, $-\Delta x$ or $+\Delta x$.]]

For $0<\varepsilon<2\mechanical{\Delta x}$,

$$
P(s<-\mechanical{\Delta x}+\varepsilon)=\tfrac12,\qquad
P(s<-\mechanical{\Delta x}-\varepsilon)=0.
$$

These probabilities are obtained by integrating the distribution to the indicated cutoffs. The handwritten integral limits appear to use $\tfrac12\pm\varepsilon$, and the delta notation omits the step variable. The cutoffs and sketch give the point masses in the form

$$
p(s)=\tfrac12\delta(s+\mechanical{\Delta x})+\tfrac12\delta(s-\mechanical{\Delta x}).
$$

More generally, the step can have another distribution, for example $s\sim\mathcal{N}(0,(\mechanical{\Delta x})^2)$.

### PDF page 24

**Evolution with a general step distribution**

![[Kyle Kabasares - Mathematical Modeling - Continuous step distribution centered at zero.png|**Fig. 32** A continuous step distribution with a characteristic width marked $\Delta x$.]]

If the signed step $Y$ is independent of the current position and has density $p(y)$, the exact update is

$$
C(x,t+\mechanical{\Delta t})
=\int_{-\infty}^{\infty}C(x-y,t)p(y)\,dy.
$$

The first factor is the density for finding the walker at $x-y$ before the step. The second is the density for taking a step of size $y$.

Expand $C(x-y,t)$ about $x$ while holding $t$ fixed.

$$
C(x-y,t)=C(x,t)-yC_x(x,t)+\frac{y^2}{2}C_{xx}(x,t)+\cdots
+\frac{(-y)^n}{n!}\frac{\partial^n C}{\partial x^n}(x,t)+\cdots.
$$

The derivatives evaluated at $(x,t)$ are independent of the integration variable $y$. Integrating the terms formally against $p(y)$ gives

$$
C(x,t+\mechanical{\Delta t})
=C(x,t)-E[Y]C_x+\frac{E[Y^2]}{2}C_{xx}
+\cdots+\frac{(-1)^nE[Y^n]}{n!}\frac{\partial^n C}{\partial x^n}+\cdots.
$$

Subtract $C(x,t)$ and divide by $\mechanical{\Delta t}$. The second-order approximation is

$$
\frac{C(x,t+\mechanical{\Delta t})-C(x,t)}{\mechanical{\Delta t}}
+\frac{E[Y]}{\mechanical{\Delta t}}C_x
\approx\frac{E[Y^2]}{2\mechanical{\Delta t}}C_{xx}.
$$

The factor $1/\mechanical{\Delta t}$ on the right follows from dividing the entire update by the time step. For zero mean step, a finite limit of $E[Y^2]/\mechanical{\Delta t}$, and vanishing higher-order contributions, the limit is the heat equation.

### PDF page 25

**Traffic model**

![[Kyle Kabasares - Mathematical Modeling - Traffic model with queues and a looping road.png|**Fig. 33** Cars queue at an intersection and on the return leg of a looping road. An arrow indicates the direction of travel through the intersection.]]

The page marks a time step $\Delta t$ and starts an update with $P(t+\Delta t)=$. The right-hand side is blank.

### PDF page 26

**February 10, 2017 lecture. Nonstandard random walks**

The agenda lists Lévy flights and the start of parameter estimation by maximum likelihood.

Let $C(x,t)$ denote the position density of a random walker at time $t$. Recall the convolution update

$$
C(x,t+\mechanical{\Delta t})=\int_{-\infty}^{\infty}C(x-y,t)p(y)\,dy.
$$

Try a symmetric step distribution with equal point masses at $\pm\mechanical{\Delta x}$.

$$
p(y)=\tfrac12\delta(y-\mechanical{\Delta x})+\tfrac12\delta(y+\mechanical{\Delta x}).
$$

![[Kyle Kabasares - Mathematical Modeling - Equal point masses for a symmetric step.png|**Fig. 34** The two red marks represent equal point masses at $-\Delta x$ and $\Delta x$.]]

Start the walker at the origin, so $C(x,0)=\delta(x)$.

![[Kyle Kabasares - Mathematical Modeling - Point-source initial position of a walker.png|**Fig. 35** A single point mass at the origin represents the initial position.]]

The one-step integral is

$$
C(x,\mechanical{\Delta t})
=\int_{-\infty}^{\infty}\delta(x-y)
\left[\tfrac12\delta(y-\mechanical{\Delta x})+\tfrac12\delta(y+\mechanical{\Delta x})\right]\,dy.
$$

The two terms sample the shifted initial distribution at $y=\mechanical{\Delta x}$ and $y=-\mechanical{\Delta x}$. The handwriting uses $\delta(0)$ as shorthand for a point mass at the origin and writes $0-y$ in the update. The argument $x-y$ retains the position variable in the density.

### PDF page 27

**One and two symmetric steps**

The delta distribution has the sampling property $\int_{-\infty}^{\infty}\delta(s)f(s)\,ds=f(0)$.

![[Kyle Kabasares - Mathematical Modeling - Narrow pulse representing the Dirac delta.png|**Fig. 36** A narrow pulse illustrates the delta distribution as a limit with shrinking width and increasing height.]]

After one step from the origin,

$$
C(x,\mechanical{\Delta t})=\tfrac12\delta(x-\mechanical{\Delta x})
+\tfrac12\delta(x+\mechanical{\Delta x}).
$$

Convolving this result with the same step distribution gives four terms, each with weight $1/4$. The two mixed terms return to the origin.

$$
C(x,2\mechanical{\Delta t})=\tfrac14\left[
\delta(x-2\mechanical{\Delta x})+2\delta(x)+\delta(x+2\mechanical{\Delta x})\right].
$$

**Moment scaling and long jumps**

With $X$ the signed step, the formal expansion after division by the time step is

$$
C_t+\frac{E[X]}{\mechanical{\Delta t}}C_x
=\frac{E[X^2]}{2\mechanical{\Delta t}}C_{xx}
-\frac{E[X^3]}{3!\,\mechanical{\Delta t}}C_{xxx}+\cdots.
$$

For an advection–diffusion limit, take $\mechanical{\Delta t}\to0$ with $E[X]/\mechanical{\Delta t}\to\mechanical{U}$ and $E[X^2]/\mechanical{\Delta t}\to\mechanical{D}$ and with higher-order contributions vanishing. This requires finite first and second moments at each time step.

The page gives the example $p(x)=x^{-2}$ for $x>1$ and zero elsewhere. Its mean is $+\infty$. It also gives

$$
p(x)=\frac{1}{\pi(1+x^2)}.
$$

This is the standard Cauchy density, which the page labels a Lévy distribution. Its symmetry gives a principal value of zero for the first moment, recorded as $E[X]=0$ in the handwriting. The ordinary expectation is undefined, and $E[X^2]=+\infty$.

The notes emphasize that long jumps depend on nonlocal probabilities, so the local advection–diffusion equation from the moment expansion does not describe these walks. A Lévy flight is suggested as a model for animal foraging.

![[Kyle Kabasares - Mathematical Modeling - Long jumps in a Levy flight.png|**Fig. 37** The sketch illustrates jumps between separated locations in a Lévy flight.]]

### PDF page 28

**Parameter estimation by maximum likelihood**

To model a phenomenon with a random process, first choose a distribution for the random component. This choice can draw on expertise about the phenomenon. Then use data to estimate the parameters that describe the distribution. A suitable view of the data can reveal a natural interpretation of the parameters.

The example uses heights measured in inches.

![[Kyle Kabasares - Mathematical Modeling - Heights plotted by individual name.png|**Fig. 38** Heights plotted against names A through E. The notes label this arrangement unhelpful for seeing the distribution.]]

Suppose height is normally distributed with mean $\mu$ and standard deviation $\sigma$. Its density is

$$
p(x\mid\mu,\sigma)=\frac{e^{-(x-\mu)^2/(2\sigma^2)}}{\sqrt{2\pi\sigma^2}}.
$$

Which values of $\mu$ and $\sigma$ best describe the observations? The notes suggest viewing the counts by height.

![[Kyle Kabasares - Mathematical Modeling - Histogram of height measurements.png|**Fig. 39** A histogram groups the observations by height to show the distribution of measurements.]]

### PDF page 29

**Likelihood for a single height**

The goal is to choose the mean $\mu$ and standard deviation $\sigma$ that maximize the likelihood. For $X_i$, the height of person $i$, and its observed value $x_i$, the likelihood contribution is the normal density evaluated at $x_i$.

$$
p(x_i\mid\mu,\sigma)=\frac{e^{-(x_i-\mu)^2/(2\sigma^2)}}{\sqrt{2\pi\sigma^2}}.
$$

The handwritten notation $p(X=x_i)$ refers to this density value. The example records a height of $\quantity{65}{in}$.

**February 10, 2017 discussion. Traffic at a stop sign**

![[Kyle Kabasares - Mathematical Modeling - Discrete car queue at a stop sign.png|**Fig. 40** The sketch places the stop sign at $x=0$, with cars at negative positions and a marked position at $x=1$. The grid spacing is one.]]

The page lists the probabilities that the action takes one, two, or three seconds. The sketch below shows cars moving across the stop line.

![[Kyle Kabasares - Mathematical Modeling - Car motion past the stop line.png|**Fig. 41** Arrows show cars moving right across the vertical line.]]

A crossed-out list mentions the stop sign location, number of cars, car locations, and start time.

### PDF page 30

A plotting fragment at the top appears to read `plot(x, walker, 'ro')`, followed by an unfinished `axis[` line.

**February 13, 2017 lecture. Maximum likelihood for the normal distribution**

The data come from a random process. Postulate a form for its probability density and estimate the parameters of that density from the data. Let $X_1=x_1,\ldots,X_n=x_n$ be the observations and assume the $X_i$ are independent, each with distribution $\mathcal N(\mu,\sigma^2)$.

![[Kyle Kabasares - Mathematical Modeling - Normal likelihood density with marked spread.png|**Fig. 42** A normal density with its center and a spread marked $\sigma$.]]

The likelihood contribution from observation $i$ alone is

$$
p(x_i\mid\mu,\sigma)=\frac{\exp\bigl[-(x_i-\mu)^2/(2\sigma^2)\bigr]}{\sqrt{2\pi\sigma^2}},
\qquad i=1,\ldots,n.
$$

The page writes out the factors for $x_1$, $x_2$, and $x_n$. The aim is to choose the mean and variance that maximize the likelihood of the observed data.

### PDF page 31

All observations share the same $\mu$ and $\sigma$. Once the data are collected, the likelihood is a function of those two parameters. By independence,

$$
L(\mu,\sigma)=\prod_{i=1}^n p(x_i\mid\mu,\sigma).
$$

To avoid differentiating a product, define the log-likelihood $\lambda=\log L$. Since the logarithm is strictly increasing, the same values of $\mu$ and $\sigma$ maximize both expressions.

![[Kyle Kabasares - Mathematical Modeling - Increasing logarithm in the likelihood argument.png|**Fig. 43** The increasing logarithm preserves the ordering of likelihood values.]]

The logarithm of the product is

$$
\lambda(\mu,\sigma)=\sum_{i=1}^{n}\log p(x_i\mid\mu,\sigma)
=\sum_{i=1}^n\left[-\frac{(x_i-\mu)^2}{2\sigma^2}-\log\sqrt{2\pi\sigma^2}\right].
$$

The derivative with respect to $\mu$ is

$$
\frac{\partial\lambda}{\partial\mu}=\sum_{i=1}^n\frac{x_i-\mu}{\sigma^2}.
$$

An individual term vanishes at $\mu=x_i$. For the full sample the sum vanishes when n times the mean parameter equals the sum of the observations.

For the variance derivative, write $k=\sigma^2$. For each observation,

$$
\frac{\partial}{\partial k}\left[-\frac{(x_i-\mu)^2}{2k}
-\log\bigl((2\pi k)^{1/2}\bigr)\right]
=\frac{(x_i-\mu)^2}{2k^2}-\frac{1}{2k}.
$$

Here the log term gives $d\log((2\pi k)^{1/2})/dk=\pi/(2\pi k)=1/(2k)$.

### PDF page 32

For one observation and fixed $\mu$, the variance derivative vanishes when $(x_i-\mu)^2/\sigma^2=1$. For the complete data set, use the sum of the derivatives. The mean equation gives $\widehat{\mu}=n^{-1}\sum_{i=1}^n x_i$. Setting the variance derivative to zero gives

$$
\frac{1}{2(\widehat{\sigma}^2)^2}\sum_{i=1}^n(x_i-\widehat{\mu})^2
=\frac{n}{2\widehat{\sigma}^2},
$$

so the maximum-likelihood variance estimate for a sample with nonzero spread is

$$
\widehat{\sigma}^2=\frac1n\sum_{i=1}^n(x_i-\widehat{\mu})^2.
$$

The source uses the estimated mean in the first sum and writes $\mu$ without the hat in the next line. The estimated mean is used in both equations above.

![[Kyle Kabasares - Mathematical Modeling - Likelihood curve with an interior maximum.png|**Fig. 44** The peak of the likelihood curve locates the estimate $\widehat{\mu}$.]]

![[Kyle Kabasares - Mathematical Modeling - Likelihood curve peaking below the true mean.png|**Fig. 45** A second sketch places the likelihood maximum $\widehat{\mu}$ to the left of the marked value $\mu$.]]

The notes ask whether $\widehat{\mu}$ is biased and what its expectation is. The example at the foot of the page lists this discrete distribution.

| Outcome | Probability |
| --- | --- |
| $1$ | $1/6$ |
| $2$ | $1/6$ |
| $3$ | $1/6$ |
| $100$ | $1/2$ |

The scratch calculation sums the first three contributions to the expectation, $1/6+2/6+3/6=1$.

### PDF page 33

**Bias of the mean and variance estimators**

If the data come from $\mathcal N(\mu_0,\sigma_0^2)$, the expectation of the estimated mean is

$$
E[\widehat\mu]
=E\left[\frac1n\sum_{i=1}^n X_i\right]
=\frac1n\sum_{i=1}^n E[X_i]
=\frac1n\sum_{i=1}^n\mu_0=\mu_0.
$$

Thus the sample mean is unbiased. The notes next ask whether the maximum-likelihood variance estimate is biased.

$$
\widehat{\sigma}^2=\frac1n\sum_{i=1}^n(X_i-\widehat\mu)^2.
$$

To find $E[\widehat{\sigma}^2]$, insert $\widehat\mu=n^{-1}\sum_{j=1}^n X_j$ and expand the square.

$$
\begin{aligned}
\widehat{\sigma}^2
&=\frac1n\sum_{i=1}^n
\left(X_i-\frac1n\sum_{j=1}^n X_j\right)^2\\
&=\frac1n\sum_{i=1}^n X_i^2
-\frac{2}{n^2}\sum_{i=1}^n\sum_{j=1}^n X_iX_j
+\frac{1}{n^3}\sum_{i=1}^n
\left(\sum_{j=1}^n\sum_{k=1}^n X_jX_k\right)\\
&=\frac1n\sum_{i=1}^n X_i^2
-\frac{2}{n^2}\sum_{i=1}^n\sum_{j=1}^n X_iX_j
+\frac{1}{n^2}\sum_{j=1}^n\sum_{k=1}^n X_jX_k.
\end{aligned}
$$

The last double sum inside parentheses is independent of $i$, so the sum over $i$ contributes a factor of $n$.

### PDF page 34

The last two double sums on page 33 combine to give

$$
\widehat{\sigma}^2=\frac1n\sum_{i=1}^n X_i^2-\frac1{n^2}\sum_{i=1}^n\sum_{j=1}^n X_iX_j.
$$

Since $\sigma_0^2=E[(X_i-\mu_0)^2]=E[X_i^2]-\mu_0^2$, the second moment is $E[X_i^2]=\sigma_0^2+\mu_0^2$. For $i\ne j$, independence gives $E[X_iX_j]=E[X_i]E[X_j]=\mu_0^2$. The handwritten line for the expectation of the first sum places the square outside $E$, but the following line uses the second moment.

The double sum has $n$ terms with $i=j$ and $n(n-1)$ terms with $i\ne j$. Therefore

$$
\begin{aligned}
E[\widehat{\sigma}^2]
&=\sigma_0^2+\mu_0^2
-\frac1{n^2}\left[n(\sigma_0^2+\mu_0^2)+n(n-1)\mu_0^2\right]\\
&=\sigma_0^2\left(1-\frac1n\right)
=\sigma_0^2\frac{n-1}{n}.
\end{aligned}
$$

The estimator maximizes the likelihood and has a downward bias. A marginal calculation appears to record $N\ge m$ and a count of unordered pairs, written as $N(n-1)/2$.

**February 17, 2017 lecture. Monte Carlo integration**

The agenda lists Monte Carlo integration as an application of maximum likelihood and a comparison with classical techniques.

### PDF page 35

A margin note records Bayes' rule, $P(A\mid B)=P(B\mid A)P(A)/P(B)$.

**Monte Carlo integration**

To estimate $A=\int_a^b f(x)\,dx$ for $0\le f(x)\le L$, draw points $(x_i,y_i)$ uniformly in the rectangle $[a,b]\times[0,L]$. Count a point when $y_i<f(x_i)$. If $m$ out of $N$ draws fall below the curve, estimate the area fraction by $A/[L(b-a)]\approx m/N$.

![[Kyle Kabasares - Mathematical Modeling - Monte Carlo points in a bounding rectangle.png|**Fig. 46** A random point lies in the rectangle of height $L$. The shaded region $A$ lies below the curve between $a$ and $b$.]]

Each draw is a Bernoulli trial. The indicator $X_i$ equals $1$ with probability $p$ if the point is inside the target region and $0$ with probability $1-p$ otherwise. Let $M=\sum_{i=1}^N X_i$. Given $M=m$, which value of $p$ maximizes the likelihood?

For one draw, $P(M=1)=p$. For two draws, $P(M=1)=2p(1-p)$. In general,

$$
P(M=m\mid N,p)=\binom{N}{m}p^m(1-p)^{N-m},
\qquad
\binom{N}{m}=\frac{N!}{m!(N-m)!}.
$$

To find an interior maximum, differentiate with respect to $p$ and set the derivative to zero.

$$
\frac{d}{dp}P(M=m\mid N,p)
=\binom{N}{m}\left[m p^{m-1}(1-p)^{N-m}
-(N-m)p^m(1-p)^{N-m-1}\right].
$$

### PDF page 36

For $0<m<N$, factor the derivative of the binomial likelihood at an interior maximum $\widehat p$.

$$
0=\binom{N}{m}\widehat p^{\,m-1}(1-\widehat p)^{N-m-1}
\bigl[m(1-\widehat p)-(N-m)\widehat p\bigr].
$$

The bracket is $m-N\widehat p$, so $\widehat p=m/N$. This also gives the endpoint maximum if $m=0$ or $m=N$.

The true probability $p_0$ equals the area $A$ divided by the area of the sampling domain. The estimator $\widehat p=M/N$ is unbiased since $E[M]=Np_0$.

**Expected squared error**

The squared error is $(\widehat p-p_0)^2$. Here the count $M$ is random and $N$ and $p_0$ are fixed. Its expectation is

$$
\begin{aligned}
E[(\widehat p-p_0)^2]
&=E\left[\left(\frac MN-p_0\right)^2\right]
=\frac{1}{N^2}E[(M-Np_0)^2]\\
&=\frac{1}{N^2}\bigl[E[M^2]-2Np_0 E[M]+N^2p_0^2\bigr].
\end{aligned}
$$

### PDF page 37

With $M=\sum_{i=1}^N X_i$, expand the expected squared error and separate equal and unequal indices.

$$
\begin{aligned}
E[(\widehat p-p_0)^2]
&=\frac1{N^2}\left[
E\left[\left(\sum_{i=1}^N X_i\right)^2\right]
-2Np_0\sum_{i=1}^N E[X_i]+N^2p_0^2\right]\\
&=\frac1{N^2}\left[
\sum_{i=1}^N E[X_i^2]
+\sum_{i=1}^N\sum_{\substack{j=1\\j\ne i}}^N E[X_iX_j]-N^2p_0^2\right].
\end{aligned}
$$

A Bernoulli variable has $E[X_i^2]=1\cdot p_0+0\cdot(1-p_0)=p_0$. For $i\ne j$, independence gives $E[X_iX_j]=p_0^2$. Therefore

$$
E[(\widehat p-p_0)^2]
=\frac{Np_0+N(N-1)p_0^2-N^2p_0^2}{N^2}
=\frac{p_0-p_0^2}{N}.
$$

The root mean square error is $\sqrt{p_0-p_0^2}/\sqrt N$.

**Trapezoidal rule**

![[Kyle Kabasares - Mathematical Modeling - Trapezoidal partition under a curve.png|**Fig. 47** The vertical divisions mark subintervals for estimating the integral by the trapezoidal rule.]]

**February 22, 2017 lecture**

The agenda compares Monte Carlo integration with the trapezoidal rule, lists maximum likelihood for rankings, and introduces Lagrange multipliers. The Monte Carlo setup has $N$ draws with $m$ points inside the target region $A$.

![[Kyle Kabasares - Mathematical Modeling - Target region inside a Monte Carlo sampling box.png|**Fig. 48** The shaded target region $A$ is inside the sampling box.]]

### PDF page 38

For a target area $A$ inside a square of side $L$, use $m/N$ to estimate $A/L^2$. The mean square error has the form $K/N$ and the root mean square error scales as $N^{-1/2}$. The handwritten expectation omits the square, which is required by the calculation on page 37.

For a unit disk inside a square of side $2$, the area fraction is $\pi/4$, so $\pi\approx 4m/N$.

![[Kyle Kabasares - Mathematical Modeling - Unit disk in a square for estimating pi.png|**Fig. 49** A unit disk fits inside a square of side two. The sketch also marks vertical strips over the upper semicircle.]]

**Comparison with trapezoidal integration**

In one dimension, the trapezoidal error for a sufficiently smooth integrand is of order $(\Delta x)^2$. With $N$ proportional to $(\Delta x)^{-1}$, this gives an error of order $N^{-2}$, compared with $N^{-1/2}$ for the Monte Carlo estimate.

![[Kyle Kabasares - Mathematical Modeling - Grid for two-dimensional trapezoidal integration.png|**Fig. 50** A two-dimensional grid with spacing $\Delta x$ illustrates the number of cells used in the quadrature.]]

In two dimensions, $N$ is proportional to $(\Delta x)^{-2}$, so the trapezoidal error scales as $N^{-1}$. In $d$ dimensions, $N$ is proportional to $(\Delta x)^{-d}$ and $\Delta x$ scales as $N^{-1/d}$. The handwritten intermediate line repeats the two-dimensional exponent. The final comparison gives the trapezoidal error $N^{-2/d}$ and the Monte Carlo error $N^{-1/2}$. The Monte Carlo rate is faster when $d>4$.

**Ranking teams**

Assign each of the $n$ teams a rating $p_i$. A simple rating is the number of wins of team $i$ divided by the total number of games it played. The proposed model relates a team's rating to the probability that it wins a particular matchup. Consider team $i$ with rating $p_i$ playing team $j$ with rating $p_j$.

### PDF page 39

**Pairwise team ratings**

Assume there are no draws. If team $i$ has rating $p_i$ and team $j$ has rating $p_j$, then for $p_i+p_j>0$,

$$
P(i\text{ wins against }j)=\frac{p_i}{p_i+p_j},
\qquad
P(j\text{ wins against }i)=\frac{p_j}{p_i+p_j}.
$$

The ratings satisfy $0\le p_i\le1$ and $\sum_{i=1}^n p_i=1$. If $p_i>p_j$, team $i$ is rated higher and has the higher win probability in their matchup.

Start with two teams, so $p_1+p_2=1$. Suppose team 1 wins $w_1$ games and team 2 wins $w_2$, with independent game outcomes. The likelihood for the observed outcomes is

$$
f(p_1,p_2)
=\left(\frac{p_1}{p_1+p_2}\right)^{w_1}
\left(\frac{p_2}{p_1+p_2}\right)^{w_2}.
$$

If the data are treated as win totals without their order, the probability also has a binomial coefficient independent of the ratings. The estimation problem is to maximize $f(p_1,p_2)$ subject to $p_1+p_2=1$.

**Lagrange multipliers**

The general problem is to maximize $f(\vec x)$ subject to $g(\vec x)=0$. As an example, $g(x,y)=x^2+y^2-1$ defines the unit circle as the feasible set.

![[Kyle Kabasares - Mathematical Modeling - Unit circle as an equality constraint.png|**Fig. 51** The unit circle is the zero level set of $g(x,y)=x^2+y^2-1$.]]

### PDF page 40

The gradient $\nabla f$ points in the direction of fastest increase where it is nonzero.

![[Kyle Kabasares - Mathematical Modeling - Objective gradients along a circular constraint.png|**Fig. 52** Arrows show possible directions of $\nabla f$ at points of the constraint curve $g(\vec x)=0$.]]

At a local maximum or minimum of $f$ restricted to a smooth constraint curve, the derivative along the curve is zero. Thus $\nabla f$ is perpendicular to its tangent. The notes assume $f$ is twice differentiable.

**February 24, 2017. Constrained optimization**

The page marks this lecture as missed. To maximize $f(\vec x)$ subject to $g(\vec x)=0$, use the fact that $\nabla g$ is normal to the level curve wherever $\nabla g\ne\vec 0$. At a regular constrained extremum $\vec x^*$ the gradients are linearly dependent. The notes describe this as parallel vectors with zero cross product, or one vector being a scalar multiple of the other.

$$
\nabla f(\vec x^*)=\lambda\nabla g(\vec x^*),
\qquad
g(\vec x^*)=0.
$$

The scalar $\lambda$ is the Lagrange multiplier.

**Example.** Maximize $f(x,y)=x^2-2y^2$ subject to $x^2+y^2=1$.

![[Kyle Kabasares - Mathematical Modeling - Unit-circle constraint for the quadratic example.png|**Fig. 53** The feasible points lie on the unit circle.]]

### PDF page 41

Form $P(\vec x,\lambda)=f(\vec x)-\lambda g(\vec x)$ and find its critical points. In two variables the equations are

$$
P_x=f_x-\lambda g_x=0,\qquad
P_y=f_y-\lambda g_y=0,\qquad
P_\lambda=-g(\vec x)=0.
$$

The first two give $\nabla f=\lambda\nabla g$, and the last recovers the constraint.

For the quadratic example, the page uses $g(x,y)=1-x^2-y^2$, which has the same zero set as the earlier choice. Then

$$
P(x,y,\lambda)=x^2-2y^2-\lambda(1-x^2-y^2).
$$

The conditions are

$$
2x(1+\lambda)=0,\qquad 2y(\lambda-2)=0,\qquad x^2+y^2=1.
$$

If $\lambda=-1$, then $y=0$ and $x=\pm1$. If $x=0$, the constraint gives $y=\pm1$, so $\lambda=2$. The handwritten second branch appears to label the resulting $\pm1$ values with $\lambda$. The constraint gives those values for $y$. The candidates are $(1,0)$, $(-1,0)$, $(0,1)$, and $(0,-1)$.

**Return to the two-team model**

Team 1 has rating $p_1$ and $w_1$ wins, and team 2 has rating $p_2$ and $w_2$ wins. The probability of the observed win counts is

$$
\binom{w_1+w_2}{w_1}
\left(\frac{p_1}{p_1+p_2}\right)^{w_1}
\left(\frac{p_2}{p_1+p_2}\right)^{w_2}.
$$

Under the constraint $p_1+p_2=1$, maximize $\binom{w_1+w_2}{w_1}p_1^{w_1}p_2^{w_2}$.

### PDF page 42

Take the logarithm of the win-count probability under $p_1+p_2=1$.

$$
f(p_1,p_2)=\log\Pr(\text{observed win counts}\mid p_1,p_2)
=w_1\log p_1+w_2\log p_2+\log\binom{w_1+w_2}{w_1}.
$$

The equality constraint is $g(p_1,p_2)=1-p_1-p_2=0$.

### PDF page 43

**February 27, 2017 lecture. Rating a new team**

The page recalls stationarity equations such as $\partial F/\partial p_1=0$ and $\partial F/\partial p_2=0$ for a function of the ratings. It lists fixed-point iteration and Newton's method as ways to solve equations.

Suppose $N$ teams have known ratings $p_1,\ldots,p_N$. A new “Dream Team” with unknown rating $p$ beats the first $k$ teams and loses to the rest. Its win probability against team $i$ is $p/(p+p_i)$. The notes give $k/N$ as a rough starting point. The new rating is estimated on the existing scale without a new sum constraint.

For independent results the likelihood is

$$
f(p)=\prod_{i=1}^k\frac{p}{p+p_i}
\prod_{i=k+1}^N\frac{p_i}{p+p_i}.
$$

The log-likelihood is

$$
\log f(p)=\sum_{i=1}^k\log\left(\frac{p}{p+p_i}\right)
+\sum_{i=k+1}^N\log\left(\frac{p_i}{p+p_i}\right).
$$

The product in the notes gives the denominators for both sums. The final handwritten line says to set $\log f(p)=0$. An interior maximum instead requires $d(\log f(p))/dp=0$.

### PDF page 44

Differentiate the new team's log-likelihood.

$$
\begin{aligned}
\frac{d}{dp}\log f(p)
&=\sum_{i=1}^k\left(\frac1p-\frac1{p+p_i}\right)
-\sum_{i=k+1}^N\frac1{p+p_i}\\
&=\frac{k}{p}-\sum_{i=1}^N\frac1{p+p_i}.
\end{aligned}
$$

An interior estimate solves $k/p=\sum_{i=1}^N 1/(p+p_i)$. The notes observe that the model uses the strength of the schedule, so stronger opponents can raise the estimate for the same number of wins. The likelihood distinguishes which teams were beaten, but changing the identities of the defeated teams while holding the schedule and the win total fixed only changes a factor independent of $p$. The estimate is therefore unchanged by that change in outcomes.

The notes say there is no maximum-likelihood estimator if $k=N$ or $k=0$. For positive opponent ratings and $p>0$, there is no interior maximum in either case. With all wins the supremum is approached as $p\to\infty$. With all losses the supremum is approached as $p\to0^+$, and $p=0$ attains it if that endpoint is allowed.

**Equal opponent ratings**

If $p_i=p_0$ for every $i$ and $0<k<N$, the stationarity equation gives

$$
\frac{k}{p}=\frac{N}{p+p_0},\qquad
1+\frac{p_0}{p}=\frac Nk,\qquad
\widehat p=\frac{kp_0}{N-k}.
$$

### PDF page 45

**Example.** The new team wins $k=2$ of $N=3$ games against opponents rated $p_1=1/4$, $p_2=1/2$, and $p_3=3/4$. Its rating $p$ satisfies

$$
\frac{2}{p}
=\frac{1}{p+1/4}+\frac{1}{p+1/2}+\frac{1}{p+3/4}.
$$

The handwritten calculation combines the terms over a common denominator and gives $p^3-(11/16)p-6/64=0$, with $p\approx0.89$. Clearing the denominators in the displayed score equation gives

$$
p^3-\frac{11}{16}p-\frac{3}{16}=0,
\qquad
\widehat p\approx0.94161.
$$

The constant term is $-2(1/4)(1/2)(3/4)=-3/16$. The notes remark that the likelihood varies weakly with $p$ and ask whether the expected win fraction is $2/3$. Using the handwritten estimate $p\approx0.89$, they calculate a mean win probability of about $0.654$. At the corrected estimate the score equation gives

$$
\frac13\sum_{i=1}^3\frac{\widehat p}{\widehat p+p_i}=\frac23.
$$

The notes connect this question to unbiasedness. The fitted expected win fraction follows directly from the score equation. Unbiasedness concerns the expectation of the rating estimator over repeated samples.

**Lagrange multipliers (Patrick JMT)**

To optimize $f(x,y,z)$ subject to $g(x,y,z)=k$, form $F(x,y,z,\lambda)=f(x,y,z)-\lambda(g(x,y,z)-k)$ and solve

$$
F_x=F_y=F_z=F_\lambda=0.
$$

Evaluate $f$ at the resulting candidate points.

### PDF page 46

**Example.** Find the constrained extremum of $C(x,y)=6x^2+12y^2$ subject to $x+y=90$. Define

$$
F(x,y,\lambda)=6x^2+12y^2-\lambda(x+y-90)
=6x^2+12y^2-\lambda x-\lambda y+90\lambda.
$$

The stationarity equations are

$$
\begin{aligned}
F_x&=12x-\lambda=0, & x&=\frac{\lambda}{12},\\
F_y&=24y-\lambda=0, & y&=\frac{\lambda}{24},\\
F_\lambda&=-x-y+90=0.
\end{aligned}
$$

Substitute the first two expressions into the third equation.

$$
-\frac{\lambda}{12}-\frac{\lambda}{24}+90
=-\frac{3\lambda}{24}+90=0.
$$

It follows that $\lambda/24=30$, so $\lambda=720$, $x=720/12=60$, and $y=720/24=30$. Substitution into the objective gives $C(60,30)=6(60)^2+12(30)^2=32{,}400$. The notes classify this as a minimum and compare it with the larger value at the nearby feasible point $(61,29)$. Along the constraint, $C(x,90-x)=18(x-60)^2+32{,}400$, which confirms the minimum.

### PDF page 47

**March 1, 2017 lecture. Markov chains**

A chain is a sequence of values taken by a random variable. Write $X_i=x_i$ when the realized value at step $i$ is $x_i$. For example, $X(t_2)=X_2=x_2$ means the value at step 2 is $x_2$.

For a Markov chain, the conditional distribution at the next step depends only on the present state. The notes describe this as having no memory.

$$
\Pr(X_{t+1}=x_{t+1}\mid X_t=x_t)
=\Pr(X_{t+1}=x_{t+1}\mid X_1=x_1,\ldots,X_t=x_t).
$$

**Example.** Three students $S_1$, $S_2$, and $S_3$ ask questions in class. Time counts questions, and $X_t$ identifies the student who asked question $t$. If student 1 asked the previous question, the probabilities for the next question are

$$
\begin{aligned}
\Pr(X_{t+1}=1\mid X_t=1)&=0.6,\\
\Pr(X_{t+1}=2\mid X_t=1)&=0.1,\\
\Pr(X_{t+1}=3\mid X_t=1)&=0.3.
\end{aligned}
$$

![[Kyle Kabasares - Mathematical Modeling - Transition diagram for three students.png|**Fig. 54** Transition probabilities for the three students. Arrows point from the current questioner to the next, and loops represent consecutive questions from the same student.]]

The diagram gives probabilities $(0.1,0.9,0)$ from state 2 and $(0.7,0,0.3)$ from state 3, in state order $(1,2,3)$.

### PDF page 48

A hidden variable that affects the outcome can limit the usefulness of a Markov model based only on the observed states. The notes also give the maximum-likelihood estimate of a transition probability as the number of observed occurrences of that transition divided by the number of opportunities for it to occur. For $i\to j$, the denominator is the number of observed transitions out of $i$.

Write $p_{ij}=\Pr(X_{t+1}=j\mid X_t=i)$ for the probability of going from $i$ to $j$. Assemble these entries into the matrix $P$. The notes use

$$
P=\begin{pmatrix}
0.6&0.1&0.3\\
0.1&0.9&0\\
0.7&0.2&0.1
\end{pmatrix}.
$$

This page changes the third row from the probabilities shown in the previous diagram. Let $\vec v=(v_1,v_2,v_3)=(0.4,0.5,0.1)$, where $v_i$ is the probability that student $i$ asks the first question.

The page first tries the product $P\vec v^{\,T}$, a $3\times3$ matrix times a $3\times1$ vector, and marks the result with a question mark. Its first entry appears as $0.14$ in the handwriting. The product from the displayed matrix and vector is $(0.32,0.49,0.39)^T$.

The law of total probability gives the first entry of the next distribution by conditioning on the first questioner.

$$
\begin{aligned}
\Pr(X_2=1)
&=\Pr(X_1=1)\Pr(X_2=1\mid X_1=1)\\
&\quad+\Pr(X_1=2)\Pr(X_2=1\mid X_1=2)\\
&\quad+\Pr(X_1=3)\Pr(X_2=1\mid X_1=3)\\
&=v_1p_{11}+v_2p_{21}+v_3p_{31}.
\end{aligned}
$$

The row-vector update is $\vec v_{t+1}=\vec v_tP$, with $\vec vP=(P^T\vec v^{\,T})^T$. For the example it gives $(0.36,0.51,0.13)$. The page ends by asking how to compute transition probabilities two questions away.

### PDF page 49

Two successive questions give $\vec v_{t+2}=\vec v_{t+1}P=(\vec v_tP)P=\vec v_tP^2$. Each row of a transition matrix sums to 1, including the rows of $P^2$.

**Lecture dated 3/4/17. Long-term distributions and hitting times**

The notes return to the questioner transition matrix. Its rows correspond to the current questioner.

$$
P=\begin{pmatrix}
0.6&0.1&0.3\\
0.1&0.9&0\\
0.7&0.2&0.1
\end{pmatrix}.
$$

The initial row vector $\vec v_0=(v_1,v_2,v_3)$ gives the probabilities for the first questioner. After $t$ transitions, $\vec v_t=\vec v_0P^t$. The long-term distribution is

$$
\vec v_\infty=\lim_{t\to\infty}\vec v_t
=\lim_{t\to\infty}\vec v_0P^t
$$

when the limit exists. If $P=CDC^{-1}$ with $D$ diagonal, then $P^t=CD^tC^{-1}$. The diagonal entries of $D^t$ are the $t$th powers of the diagonal entries of $D$.

If the limit exists, then $\vec v_\infty=\vec v_\infty P$. To find the candidate distribution, solve for a left eigenvector of $P$ with eigenvalue $\lambda=1$ and normalize its nonnegative entries to sum to 1. The notes write the normalization as $\|\vec v_\infty\|=1$, which here means the $1$-norm.

### PDF page 50

Transpose the stationary equation to obtain the ordinary column-vector eigenvalue problem.

$$
P^T\vec v_\infty^{\,T}=1\vec v_\infty^{\,T}.
$$

Why is 1 an eigenvalue? The columns of $P^T$ sum to 1 because the rows of $P$ sum to 1. If the entries of row $i$ are written $R_{ij}$, then $\sum_{j=1}^nR_{ij}=1$. Multiplication by a column of ones computes those row sums.

$$
P\begin{pmatrix}1\\1\\\vdots\\1\end{pmatrix}
=\begin{pmatrix}
\sum_{j=1}^nR_{1j}\\
\sum_{j=1}^nR_{2j}\\
\vdots\\
\sum_{j=1}^nR_{nj}
\end{pmatrix}
=\begin{pmatrix}1\\1\\\vdots\\1\end{pmatrix}.
$$

Thus $(P-I)\mathbf 1=\mathbf 0$, so $1$ is an eigenvalue of $P$. Transposition preserves the determinant, which gives

$$
\det(P-\lambda I)=\det\bigl((P-\lambda I)^T\bigr)
=\det(P^T-\lambda I).
$$

Both matrices have the same eigenvalues, including $\lambda=1$. Their right eigenvectors may differ. The notes use MATLAB to find the eigenvectors of $P^T$ with `eig(P')` for this real matrix.

### PDF page 51

The stationary distribution for the classroom example is $\vec v_\infty=(3,5,1)/9$. The entries of the unnormalized eigenvector sum to 9.

**Hitting times**

The hitting time is the number of steps required to reach a target state from a starting state. The equations on the page use the target as the first subscript and the starting state as the second. Thus $\tau_{ij}$ in these equations is the expected number of steps to reach $i$ starting from $j$, and $\tau_{ii}=0$. For target state 1, conditioning on the first step gives

$$
\begin{aligned}
\tau_{12}&=1+p_{21}\tau_{11}+p_{22}\tau_{12}+p_{23}\tau_{13},\\
\tau_{13}&=1+p_{31}\tau_{11}+p_{32}\tau_{12}+p_{33}\tau_{13}.
\end{aligned}
$$

Using $\tau_{11}=0$ and the classroom matrix, the first equation becomes $\tau_{12}=1+0.90\tau_{12}$, so $\tau_{12}=1/0.1=10$.

For $\tau_{13}$, the handwritten substitution appears to use $0.22$ and ends with $23/0.9$. With $p_{32}=0.2$ and $p_{33}=0.1$ from the stated matrix, the second equation instead gives

$$
\tau_{13}=1+0.2(10)+0.1\tau_{13},
\qquad
\tau_{13}=\frac{3}{0.9}=\frac{10}{3}.
$$

**March 3, 2017 discussion. A six-state illness model**

1. Susceptible
2. Infected
3. Sick and noncontagious
4. Recovering and noncontagious
5. Immune
6. Dead

Here $p_{ij}$ is the probability of moving from state $i$ to state $j$.

### PDF page 52

The six-state illness model has the transition matrix

$$
P=\begin{pmatrix}
0.9&0.1&0&0&0&0\\
0&0.5&0.5&0&0&0\\
0&0&0.6&0.3&0&0.1\\
0&0&0.1&0.5&0.4&0\\
0.1&0&0&0&0.9&0\\
0&0&0&0&0&1
\end{pmatrix}.
$$

The stationary equation in column-vector form is $(\vec v_\infty)^T=(\vec v_\infty P)^T=P^T(\vec v_\infty)^T$.

**March 6, 2017 lecture. Population modeling**

Models with continuous variables involve differential equations. The lecture lists the sigmoid and logistic functions.

Consider an isolated system, such as an island, with a given initial number of animals. Let $R(t)$ denote the population at time $t$. The simplest growth model assumes that the rate of change is proportional to the population.

$$
\frac{dR}{dt}=\lim_{h\to0}\frac{R(t+h)-R(t)}{h}=\alpha R,
\qquad
R(t)=R(0)e^{\alpha t},\quad \alpha>0.
$$

The growth rate $\alpha$ has units of inverse time. The time $1/\alpha$ is the time required for the population to grow by a factor of $e$.

### PDF page 53

Exponential growth cannot continue indefinitely. To slow growth as resources become scarce, subtract a term proportional to the square of the population.

$$
\frac{dR}{dt}=\alpha R-\beta R^2
=\alpha R\left(\frac{M-R}{M}\right),
\qquad M>0,\quad \beta=\frac{\alpha}{M}.
$$

Here $M$ is the carrying capacity and $M-R$ represents available resources in the model. There is no growth at the equilibria $R=0$ and $R=M$. For $\alpha>0$, the direction field shows that $R=M$ is stable and $R=0$ is unstable.

![[Kyle Kabasares - Mathematical Modeling - Logistic growth direction field.png|**Fig. 55** The direction field for logistic growth, with an increasing solution approaching the stable equilibrium $R=M$. The horizontal axis is the unstable equilibrium $R=0$.]]

For a given initial population $R(0)=R_0$, separate the variables.

$$
\frac{dR}{R(1-R/M)}=\alpha\,dt,
\qquad
\int\left(\frac1R+\frac{1/M}{1-R/M}\right)dR
=\alpha t+C.
$$

For the branch $0<R<M$ shown in the sketch, this gives

$$
\ln R-\ln(M-R)=\ln\left(\frac{R}{M-R}\right)=\alpha t+C.
$$

Let $k=e^C$. Then $R/(M-R)=ke^{\alpha t}$, so $R=(M-R)ke^{\alpha t}$ and $R(1+ke^{\alpha t})=Mke^{\alpha t}$. The solution is

$$
R(t)=\frac{Mke^{\alpha t}}{1+ke^{\alpha t}}.
$$

### PDF page 54

Evaluate the logistic solution at $t=0$ to find the integration constant.

$$
R(0)=\frac{Mk}{1+k},
\qquad
k\bigl(R(0)-M\bigr)=-R(0),
\qquad
k=\frac{R(0)}{M-R(0)}.
$$

For $0<R(0)<M$, put $1/k=e^{\alpha t_0}$. Dividing by the exponential and then by $k$ gives the standard sigmoid form.

$$
R(t)=\frac{Mke^{\alpha t}}{1+ke^{\alpha t}}
=\frac{Mk}{e^{-\alpha t}+k}
=\frac{M}{1+e^{-\alpha(t-t_0)}}.
$$

As $t\to\infty$, $R(t)\to M$, and as $t\to-\infty$, $R(t)\to0$. The derivative $dR/dt=\alpha R(1-R/M)$ is positive between the two equilibria, so the S-shaped curve increases monotonically. Its inflection occurs at $t=t_0$, where $R(t_0)=M/2$. The rate $\alpha$ controls how quickly the curve rises. The notes describe $1/\alpha$ as the time scale for growth from near zero toward $M$. The exact time between any two levels depends on the chosen levels.

### PDF page 55

A probability calculation at the top of the page gives $E(p_1)=\int_{-\infty}^\infty p_1f(p_1)\,dp_1$, with $f$ the density. The notes state that $p_1$ and $p_2$ are uniform on $(0,1)$.

**March 8, 2017 lecture. Competition between rabbits and koalas**

Let $R$ and $K$ be the rabbit and koala populations. The first proposed model gives rabbits ordinary logistic growth and reduces the koalas' effective carrying capacity as the rabbit population increases.

$$
\frac{dR}{dt}=\alpha_R R\left(1-\frac R M\right),
\qquad
\frac{dK}{dt}=\alpha_K K\left(1-\frac K{M_K-R\beta_K}\right),
\qquad
\alpha_R,\alpha_K>0.
$$

The notes reject this proposal and replace it with a model in which both species share the same resource factor.

$$
\begin{aligned}
\frac{dR}{dt}&=\alpha_R R\left(1-\frac R{M_R}-\frac K{M_K}\right),\\
\frac{dK}{dt}&=\alpha_K K\left(1-\frac R{M_R}-\frac K{M_K}\right).
\end{aligned}
$$

Each $\alpha$ is the growth rate when food is plentiful, with 1 shown as an example value. Each $M$ is the equilibrium population of its species when alone.

At equilibrium, $R'=0$ and $K'=0$. The first condition holds if $R=0$ or $1-R/M_R-K/M_K=0$. The second holds if $K=0$ or that same factor vanishes. On the axis $R=0$, the equilibrium koala populations are $K=0$ and $K=M_K$, with logistic dynamics between them. On the axis $K=0$, the equilibrium rabbit populations are $R=0$ and $R=M_R$. The common resource factor also gives the equilibrium line $R/M_R+K/M_K=1$.

### PDF page 56

If both populations are nonzero at equilibrium, the shared resource factor must vanish.

$$
1-\frac R{M_R}-\frac K{M_K}=0.
$$

This is one equation in two unknowns, so there are infinitely many equilibria. To simplify the dynamical system, multiply the rabbit equation by $\alpha_K K$ and the koala equation by $\alpha_R R$, then subtract. Their right-hand sides cancel.

$$
0=\alpha_K KR'-\alpha_R RK',
\qquad
0=KR'-\frac{\alpha_R}{\alpha_K}RK'.
$$

The notes also divide the latter expression by $R^2$ in the nonzero case. The quotient rule gives, for $K>0$,

$$
\left(\frac{R}{K^p}\right)'
=\frac{R'K^p-RpK^{p-1}K'}{K^{2p}}
=\frac{K^{p-1}}{K^{2p}}\left(KR'-pRK'\right).
$$

With $p=\alpha_R/\alpha_K$, the factor in parentheses vanishes. The ratio $R/K^p$ therefore stays constant along the trajectory.

$$
\frac{R(t)}{K(t)^{\alpha_R/\alpha_K}}
=c=\frac{R(0)}{K(0)^{\alpha_R/\alpha_K}}.
$$

The final handwritten line setting the ratio to zero appears to omit the derivative mark. The quotient rule gives zero for the derivative and a constant for the ratio.

### PDF page 57

**Example.** If $\alpha_R/\alpha_K=2$, then $R/K^2=c$, or $R=cK^2$. Substitute this relation into the koala equation.

$$
\frac{dK}{dt}=\alpha_K K\left(1-\frac{cK^2}{M_R}-\frac K{M_K}\right).
$$

The first handwritten statement of the koala equation on this page omits the factor $K$. It appears again in the substituted equation. Apart from $K=0$, equilibria satisfy $cK^2/M_R+K/M_K-1=0$. For $c>0$, the quadratic formula gives

$$
K_{\mathrm{eq}}=\frac{-1/M_K\pm\sqrt{1/M_K^2+4c/M_R}}{2c/M_R}.
$$

The plus sign gives the positive equilibrium. The minus sign gives a negative root of the polynomial.

![[Kyle Kabasares - Mathematical Modeling - Koala equilibrium direction field.png|**Fig. 56** Slopes are negative above the positive equilibrium and positive just below it, so solutions approach it along the chosen trajectory.]]

![[Kyle Kabasares - Mathematical Modeling - Koala growth rate as a function of population.png|**Fig. 57** The cubic growth rate crosses zero at the two quadratic roots and at $K=0$. The population increases for $0<K<K_{\mathrm{eq}}$ and decreases in time for $K>K_{\mathrm{eq}}$.]]

### PDF page 58

**Numerical methods for $x'=f(x)$**

1. Euler's method approximates the derivative at the initial state by $(x_1-x_0)/\Delta t$. This gives $x_1=x_0+\Delta t\,f(x_0)$.
2. The second-order Runge–Kutta method shown is the explicit midpoint method. The notes give a global error of order $(\Delta t)^2$.

$$
x^*=x_n+\frac{\Delta t}{2}f(x_n),
\qquad
x_{n+1}=x_n+\Delta t\,f(x^*).
$$

**March 10, 2017 lecture. Predator–prey models**

Let $R$ be the rabbit population and $W$ the wolf population. The model is

$$
\frac{dR}{dt}=\alpha R(1-\beta W),
\qquad
\frac{dW}{dt}=\delta W(-1+\gamma R),
\qquad
\alpha,\beta,\gamma,\delta>0.
$$

The factor $-\beta W$ represents the effect of predators on the rabbits. The factor $\gamma R$ represents the effect of prey on the wolves. The first handwritten wolf equation has an extra minus sign before $\delta W$. The equilibrium calculation on this page uses the sign shown above, which gives a declining wolf population when $R=0$.

The rabbit equation vanishes if $R=0$ or $W=1/\beta$. The wolf equation vanishes if $W=0$ or $R=1/\gamma$. The two equilibria are

$$
(R_{\mathrm e},W_{\mathrm e})=(0,0)
\qquad\text{and}\qquad
(R_{\mathrm e},W_{\mathrm e})=\left(\frac1\gamma,\frac1\beta\right).
$$

The phase plane plots $(R(t),W(t))$ with $t$ as the parameter along the trajectory.

![[Kyle Kabasares - Mathematical Modeling - Predator prey equilibria and flow near the origin.png|**Fig. 58** The sketch marks both equilibria and shows flow near the origin.]]

### PDF page 59

The top margin gives the quadratic Taylor approximation in one variable.

$$
f(x)\approx f(a)+f'(a)(x-a)+\frac12 f''(a)(x-a)^2.
$$

**Linearize the predator–prey equations**

For a function of two variables near $(x_0,y_0)$, the first-order Taylor approximation is

$$
f(x,y)\approx f(x_0,y_0)+f_x(x_0,y_0)(x-x_0)+f_y(x_0,y_0)(y-y_0).
$$

Write $R'=f_1(R,W)$ and $W'=f_2(R,W)$. At an equilibrium $(R_{\mathrm e},W_{\mathrm e})$, both $f_1$ and $f_2$ vanish. The linearized equations use the two partial derivatives of each function evaluated at the equilibrium. For the predator–prey system they are

$$
\begin{aligned}
\frac{d(R-R_{\mathrm e})}{dt}
&\approx\alpha(1-\beta W_{\mathrm e})(R-R_{\mathrm e})
-\beta\alpha R_{\mathrm e}(W-W_{\mathrm e}),\\
\frac{d(W-W_{\mathrm e})}{dt}
&\approx\delta\gamma W_{\mathrm e}(R-R_{\mathrm e})
+\delta(-1+\gamma R_{\mathrm e})(W-W_{\mathrm e}).
\end{aligned}
$$

The handwritten scalar expansion repeats $\partial/\partial R$ in the final term and later leaves the factor $W-W_{\mathrm e}$ off the wolf equation. The Jacobian written below it gives the two distinct partial derivatives in each row.

At $(0,0)$ the linearized equations are

$$
\frac{d}{dt}\begin{pmatrix}R\\W\end{pmatrix}
=\begin{pmatrix}\alpha R\\-\delta W\end{pmatrix}
=\begin{pmatrix}\alpha&0\\0&-\delta\end{pmatrix}
\begin{pmatrix}R\\W\end{pmatrix}.
$$

The line above the matrix appears to use $-\alpha W$. The matrix and the wolf equation give $-\delta W$. The coefficient matrix is the Jacobian evaluated at the equilibrium.

$$
\left.
\begin{pmatrix}
\partial f_1/\partial R & \partial f_1/\partial W\\
\partial f_2/\partial R & \partial f_2/\partial W
\end{pmatrix}
\right|_{(R_{\mathrm e},W_{\mathrm e})}.
$$

For $\vec x\in\mathbb R^n$ satisfying $d\vec x/dt=A\vec x$, the solution is $\vec x(t)=e^{At}\vec x(0)$. If $A$ is diagonalizable, write $A=PDP^{-1}$.

### PDF page 60

In the diagonalization $A=PDP^{-1}$, the columns of $P$ are the eigenvectors $\vec v_1,\vec v_2,\vec v_3$ in the three-dimensional example. The diagonal of $D$ has the corresponding eigenvalues $\lambda_1,\lambda_2,\lambda_3$. The matrix exponential follows from the power series.

$$
\begin{aligned}
e^{At}
&=I+At+\frac{A^2t^2}{2!}+\cdots\\
&=P\left(I+Dt+\frac{D^2t^2}{2!}+\cdots\right)P^{-1}
=Pe^{Dt}P^{-1},\\
e^{Dt}
&=\begin{pmatrix}
e^{\lambda_1t}&0&0\\
0&e^{\lambda_2t}&0\\
0&0&e^{\lambda_3t}
\end{pmatrix}.
\end{aligned}
$$

For the linearization of the predator–prey system at the origin,

$$
\begin{pmatrix}R(t)\\W(t)\end{pmatrix}
=\begin{pmatrix}e^{\alpha t}&0\\0&e^{-\delta t}\end{pmatrix}
\begin{pmatrix}R(0)\\W(0)\end{pmatrix}.
$$

The eigenvalues $\lambda_1=\alpha>0$ and $\lambda_2=-\delta<0$ make the origin an unstable saddle point.

**March 10, 2017 discussion**

The goals are to review linearization of a differential-equation system and work on implementing a second-order Runge–Kutta solver. Find an equilibrium of

$$
\frac{dx}{dt}=f_1(x,y)=3x-y^2,\qquad
\frac{dy}{dt}=f_2(x,y)=\sin y-x.
$$

The notes propose examining the behavior around one equilibrium point by setting both right-hand sides to zero.

### PDF page 61

The discussion chooses the equilibrium $(0,0)$ and finds the tangent plane to each component there. Recall that the tangent plane to $z=z(x,y)$ at $(a,b)$ has equation

$$
z=z(a,b)+z_x(a,b)(x-a)+z_y(a,b)(y-b).
$$

For $f_1=3x-y^2$ and $f_2=\sin y-x$, the partial derivatives are

$$
f_{1x}=3,\quad f_{1y}=-2y,\qquad
f_{2x}=-1,\quad f_{2y}=\cos y.
$$

Since both components vanish at $(0,0)$, their linear approximations there are $3x$ and $-x+y$. An intermediate handwritten line reads $3x-2y^2$. The tangent plane and the subsequent Jacobian calculation use $3x$.

$$
J=\left.
\begin{pmatrix}f_{1x}&f_{1y}\\ f_{2x}&f_{2y}\end{pmatrix}
\right|_{(0,0)}
=\begin{pmatrix}3&0\\-1&1\end{pmatrix},
\qquad
\frac d{dt}\begin{pmatrix}x\\y\end{pmatrix}
=J\begin{pmatrix}x\\y\end{pmatrix}.
$$

The characteristic equation is $(3-\lambda)(1-\lambda)=0$, giving $\lambda_1=3$ and $\lambda_2=1$. Solving the corresponding homogeneous systems gives

$$
\begin{aligned}
J-3I&=\begin{pmatrix}0&0\\-1&-2\end{pmatrix},
& \vec v_1&=\begin{pmatrix}2\\-1\end{pmatrix},\\
J-I&=\begin{pmatrix}2&0\\-1&0\end{pmatrix},
& \vec v_2&=\begin{pmatrix}0\\1\end{pmatrix}.
\end{aligned}
$$

### PDF page 62

The solution to the preceding linearized system approximates the dynamics near $(0,0)$.

$$
\vec x(t)\approx c_1e^{3t}\begin{pmatrix}2\\-1\end{pmatrix}
+c_2e^t\begin{pmatrix}0\\1\end{pmatrix}.
$$

Both eigenvalues are positive, so the origin is a source.

**Example.** Examine the behavior near $(0,0)$ for

$$
x'=f_1(x,y)=2x-y-x^2,\qquad
y'=f_2(x,y)=x-2y+y^2.
$$

The derivatives are $f_{1x}=2-2x$, $f_{1y}=-1$, $f_{2x}=1$, and $f_{2y}=-2+2y$. At the origin the first-order terms are $f_1\approx2x-y$ and $f_2\approx x-2y$. The last handwritten scalar line drops the $x$ after writing $1(x)-2y$. The matrix below it retains that term.

$$
\frac d{dt}\begin{pmatrix}x\\y\end{pmatrix}
=\begin{pmatrix}2&-1\\1&-2\end{pmatrix}
\begin{pmatrix}x\\y\end{pmatrix}.
$$

**Second-order Runge–Kutta**

For $\vec x'=\vec f(t,\vec x)$, this version estimates the slope at the current point and at the Euler predictor, then averages the two.

$$
\begin{aligned}
\vec k_1&=\vec f(t_n,\vec x_n),\\
\vec k_2&=\vec f(t_n+h,\vec x_n+h\vec k_1),\\
\vec x_{n+1}&=\vec x_n+\frac h2(\vec k_1+\vec k_2).
\end{aligned}
$$

### PDF page 63

**March 13, 2017 lecture notes, marked as missed**

The rabbit–wolf model has equilibria at $(0,0)$ and $(1/\gamma,1/\beta)$. The origin is a saddle. The recap writes the wolf equation as $\delta W(1-\gamma R)$. The saddle sketch and the Jacobian below use $-\delta W(1-\gamma R)$.

![[Kyle Kabasares - Mathematical Modeling - Saddle at the predator prey origin.png|**Fig. 59** Near the origin the vertical axis is attracting and the horizontal axis is repelling.]]

Analyze the other equilibrium $(R_{\mathrm e},W_{\mathrm e})=(1/\gamma,1/\beta)$. For the deviation vector $(R-R_{\mathrm e},W-W_{\mathrm e})^T$, the linearized dynamics use the Jacobian

$$
\left.
\begin{pmatrix}
\alpha(1-\beta W)&-\alpha\beta R\\
\delta\gamma W&-\delta(1-\gamma R)
\end{pmatrix}
\right|_{(R_{\mathrm e},W_{\mathrm e})}
=\begin{pmatrix}
0&-\alpha\beta/\gamma\\
\delta\gamma/\beta&0
\end{pmatrix}
=A.
$$

The handwritten intermediate Jacobian appears to use $W_{\mathrm e}$ in the upper-right entry, and the evaluated matrix omits $1/\gamma$ in that entry. Differentiating the rabbit equation with respect to $W$ gives $-\alpha\beta R_{\mathrm e}=-\alpha\beta/\gamma$. This gives the characteristic polynomial written on the page.

$$
p(\lambda)=\det(A-\lambda I)=\lambda^2+\alpha\delta.
$$

Since $\alpha,\beta,\gamma,\delta>0$, the eigenvalues are $\lambda_{1,2}=\pm i\sqrt{\alpha\delta}$, with two complex eigenvectors.

### PDF page 64

For the linearization at the positive equilibrium, $e^{At}=Pe^{Dt}P^{-1}$ with

$$
e^{Dt}=
\begin{pmatrix}
e^{i\sqrt{\alpha\delta}\,t}&0\\
0&e^{-i\sqrt{\alpha\delta}\,t}
\end{pmatrix}.
$$

The real solutions are oscillatory. The rabbit deviation has the form

$$
R-R_{\mathrm e}
=c_1\sin\bigl(\sqrt{\alpha\delta}\,t\bigr)
+c_2\cos\bigl(\sqrt{\alpha\delta}\,t\bigr),
$$

and the wolf deviation is also a linear combination of the same sine and cosine. The page calls the equilibrium a marginally stable node. The linearized system has a center, with closed trajectories and no decay of oscillation amplitude.

![[Kyle Kabasares - Mathematical Modeling - Oscillations near predator prey coexistence.png|**Fig. 60** Nested curves sketch oscillatory motion around the positive equilibrium at $(1/\gamma,1/\beta)$.]]

To determine the direction of motion, take $R=1/\gamma$ and $W=1/\beta-w_0$, with $0<w_0<1/\beta$. Then $W'=0$ and $1-\beta W=\beta w_0>0$, so $R'>0$. The flow points to the right below the equilibrium.

![[Kyle Kabasares - Mathematical Modeling - Combined predator prey phase portrait.png|**Fig. 61** The phase-plane sketch combines the saddle at the origin with circulation around the positive equilibrium.]]

**March 15, 2017. Linearized systems**

For a two-dimensional system $\vec x'=A\vec x$ with $A$ a $2\times2$ matrix, $\vec x=(0,0)^T$ is an equilibrium.

### PDF page 65

**Homework ideas.** Build a population model with three, four, or five age groups, give each group a death rate, and require the system to have an equilibrium. The four-group example uses $x_1$ for ages above 0 through 20, $x_2$ for ages 21 through 40, and $x_3$ for ages 41 through just under 60. The last line is written as $60>\text{age}$ for $x_4$. In this sequence it appears to mean age 60 and above. Time is measured in years, and the notes write $dx_i/dt$ for a group’s rate of change.

![[Kyle Kabasares - Mathematical Modeling - Saddle portrait for a two dimensional linear system.png|**Fig. 62** A saddle with trajectories approaching the origin along the vertical axis and leaving it along the horizontal axis.]]

For the linear system $\vec x'=A\vec x$, the eigenvalues $\lambda_1$ and $\lambda_2$ give the exponential factors $e^{\lambda_1t}$ and $e^{\lambda_2t}$ along their corresponding eigenvectors. The notes list six cases for real eigenvalues.

1. $\lambda_1<0$ and $\lambda_2<0$.
2. $\lambda_1<0$ and $\lambda_2>0$, giving a saddle.
3. $\lambda_1>0$ and $\lambda_2>0$.
4. $\lambda_1=0$ and $\lambda_2<0$.
5. $\lambda_1=0$ and $\lambda_2>0$.
6. $\lambda_1=0$ and $\lambda_2=0$.

For a nonreal conjugate pair $\lambda_{1,2}=a\pm ib$ with $b\ne0$, the remaining cases are

7. $\operatorname{Re}(\lambda_1)<0$.
8. $\operatorname{Re}(\lambda_1)>0$.
9. $\operatorname{Re}(\lambda_1)=0$.

### PDF page 66

For the cases shown, use coordinates along the two eigenvectors of the linear system. Then $x_1(t)=c_1e^{\lambda_1t}$ and $x_2(t)=c_2e^{\lambda_2t}$. The initial point determines the constants.

**Case 1. Both eigenvalues negative.** The origin is asymptotically stable. A nonzero trajectory approaches $(0,0)$ as $t\to\infty$ and reaches it only in the limit.

![[Kyle Kabasares - Mathematical Modeling - Sink with two negative eigenvalues.png|**Fig. 63** Trajectories point toward the equilibrium when both exponential factors decay.]]

**Case 3. Both eigenvalues positive.** The origin is an unstable source.

![[Kyle Kabasares - Mathematical Modeling - Source with two positive eigenvalues.png|**Fig. 64** Trajectories point away from the equilibrium when both exponential factors grow.]]

**Case 4. $\lambda_1=0$ and $\lambda_2<0$.** Here $x_1(t)=c_1$ and $x_2(t)=c_2e^{\lambda_2t}$. The notes call this marginally stable. Each trajectory approaches the point $(c_1,0)$ on the line of equilibria.

![[Kyle Kabasares - Mathematical Modeling - Equilibrium line with negative transverse eigenvalue.png|**Fig. 65** The flow above and below the horizontal equilibrium line points toward it.]]

**Case 5. $\lambda_1=0$ and $\lambda_2>0$.** The first coordinate is still constant, but a nonzero second coordinate grows in magnitude. The equilibrium line is unstable.

![[Kyle Kabasares - Mathematical Modeling - Equilibrium line with positive transverse eigenvalue.png|**Fig. 66** The flow above and below the horizontal equilibrium line points away from it.]]

### PDF page 67

**Case 6. Both eigenvalues zero.** The page illustrates the diagonalizable case, for which $A=0$. The coordinates stay constant, $x_1(t)=c_1$ and $x_2(t)=c_2$, and both derivatives vanish. The notes describe this as marginally stable. A nondiagonalizable matrix with two zero eigenvalues can instead have a term linear in $t$.

![[Kyle Kabasares - Mathematical Modeling - Phase plane of the zero matrix.png|**Fig. 67** Every point is an equilibrium for $A=0$.]]

For a conjugate pair $a\pm ib$ with $b\ne0$, the two complex modes have factors $e^{at}e^{ibt}$ and $e^{at}e^{-ibt}$. The oscillatory factors give rotation in the real phase plane, and the factor $e^{at}$ determines whether the amplitude decays or grows.

**Case 7. $a<0$.** The origin is a stable spiral.

![[Kyle Kabasares - Mathematical Modeling - Spiral sink phase portrait.png|**Fig. 68** The trajectory spirals inward as the oscillations decay.]]

**Case 8. $a>0$.** The origin is an unstable spiral.

![[Kyle Kabasares - Mathematical Modeling - Spiral source phase portrait.png|**Fig. 69** The trajectory spirals outward as the oscillations grow.]]

**Case 9. $a=0$.** The mode factors reduce to $e^{ibt}$ and $e^{-ibt}$. The linear system has a center.

![[Kyle Kabasares - Mathematical Modeling - Center phase portrait.png|**Fig. 70** Closed trajectories surround the center when the eigenvalues are purely imaginary.]]

### PDF page 68

A nonlinear system can have several equilibria. With unique solutions, distinct phase trajectories cannot cross. Trajectories can loop around an equilibrium or connect an equilibrium to infinity, meaning $x_1^2+x_2^2\to\infty$ along the unbounded end. A trajectory can also be unbounded in both time directions, which the notes describe as going from $-\infty$ to $+\infty$.

![[Kyle Kabasares - Mathematical Modeling - Trajectories near multiple equilibria.png|**Fig. 71** The sketch shows trajectories directed toward one location and a loop around another equilibrium.]]

Long-term behavior can differ between regions of the phase plane. The basin of attraction of an attracting equilibrium consists of the initial points whose trajectories converge to it. Separatrices divide regions with different behaviors. The axes in the saddle example are separatrices.

**March 17, 2017. Difference equations and the Fibonacci sequence**

The notes include a reminder to look up biological examples of the Fibonacci sequence. A difference equation expresses the next term in terms of earlier ones.

$$
y_n=f(y_{n-1},y_{n-2},\ldots,y_{n-k}),
\qquad
y_1=A_1,\quad y_2=A_2,\quad\ldots,\quad y_k=A_k.
$$

Together with the $k$ initial values, this recurrence defines the sequence.

### PDF page 69

Euler's method for the differential equation $dy/dt=f(y)$ gives the first-order recurrence

$$
y_n=y_{n-1}+\Delta t\,f(y_{n-1})=g(y_{n-1}).
$$

In a population model, $y_n$ can count individuals in generation $n$.

**Linear difference equations.** For $y_n=\alpha y_{n-1}$ and $y_0=A$, the solution is $y_n=\alpha^nA$. The Fibonacci sequence instead satisfies $x_n=x_{n-1}+x_{n-2}$, with $x_0=0$ and $x_1=1$. Its next terms are $x_2=1$, $x_3=2$, and $x_4=3$.

The notes write a general homogeneous recurrence of order $k$ as

$$
a_ny_n+a_{n-1}y_{n-1}+\cdots+a_{n-k}y_{n-k}=0.
$$

For the characteristic-root method, the coefficients at each lag are held fixed as $n$ varies. Try $y_n=cr^n$. Substitution and factoring give

$$
cr^{n-k}\bigl(a_nr^k+a_{n-1}r^{k-1}+\cdots+a_{n-k}\bigr)=0.
$$

For a nonzero mode with $c\ne0$ and $r\ne0$, the parenthesized factor is the characteristic polynomial of degree $k$. With $k$ distinct nonzero roots $r_j$, the general solution has the form $y_n=\sum_{j=1}^k c_jr_j^n$. The page compares this form with a mode of the differential system $d\vec y/dt=A\vec y$, where $y_j=c_je^{\lambda_jt}=c_j(e^{\lambda_j})^t$ in eigenvector coordinates.

### PDF page 70

Use the starting values of the recurrence to determine the constants $c_j$.

### PDF page 71

**March 20, 2017 lecture. Reducing the number of parameters**

The lecture also lists nonlinear difference equations and mentions an article on Canvas. An unfinished line reads $dp_1/dt=\alpha p_1+\beta p_2-r\ldots$.

The predator–prey equations contain four positive parameters $\alpha,\beta,\gamma,\delta$.

$$
\frac{dR}{dt}=\alpha R(1-\beta W),
\qquad
\frac{dW}{dt}=-\delta W(1-\gamma R).
$$

Introduce relative populations $\bar R$ and $\bar W$ and a rescaled time $\bar t$. Use the nonzero equilibrium populations as the reference values.

$$
\bar R=\frac{R}{R_{\mathrm e}}=\gamma R,
\qquad
\bar W=\frac{W}{W_{\mathrm e}}=\beta W.
$$

The notes suggest looking at limiting cases to choose scales and leave $\bar t$ unspecified for now. Substituting the relative populations into the rabbit equation gives

$$
\frac{dR}{dt}
=\frac1\gamma\frac{d\bar R}{dt}
=\frac{\alpha\bar R}{\gamma}(1-\bar W).
$$

The interaction parameter $\beta$ is absorbed into $\bar W$, and the factors of $\gamma$ cancel when solving for $d\bar R/dt$.

### PDF page 72

Substitute the relative populations into the wolf equation as well.

$$
\frac{dW}{dt}=\frac1\beta\frac{d\bar W}{dt}
=-\frac{\delta\bar W}{\beta}(1-\bar R).
$$

The factors of $\beta$ cancel, and the relative populations have a positive equilibrium at $(1,1)$.

![[Kyle Kabasares - Mathematical Modeling - Equilibrium in relative population coordinates.png|**Fig. 72** In relative coordinates the positive equilibrium is at $\bar R=\bar W=1$.]]

Set $\bar t=Ct$. By the chain rule, $d\bar R/d\bar t=(1/C)\,d\bar R/dt$. Choosing $C=\alpha$ removes the growth-rate coefficient from the first equation. The rescaled system is

$$
\frac{d\bar R}{d\bar t}=\bar R(1-\bar W),
\qquad
\frac{d\bar W}{d\bar t}=-\epsilon\bar W(1-\bar R),
\qquad
\epsilon=\frac{\delta}{\alpha}.
$$

The barred variables $\bar R$, $\bar W$, and $\bar t$ are dimensionless. The reduced equations have just one parameter, $\epsilon$.

![[Kyle Kabasares - Mathematical Modeling - Dimensionless predator prey phase curves.png|**Fig. 73** The sketch marks the positive equilibrium and draws surrounding phase curves for $\epsilon<1$.]]

### PDF page 73

**Nonlinear difference equations.** Start with the logistic differential equation $dy/dt=\alpha y(1-y)$.

![[Kyle Kabasares - Mathematical Modeling - Logistic solution with sampled points.png|**Fig. 74** The continuous logistic curve with points marked at several times.]]

An Euler step gives

$$
\begin{aligned}
y_n
&=y_{n-1}+\alpha\Delta t\,y_{n-1}(1-y_{n-1})\\
&=(1+\alpha\Delta t)y_{n-1}
\left(1-\frac{\alpha\Delta t}{1+\alpha\Delta t}y_{n-1}\right).
\end{aligned}
$$

Let $\beta=1+\alpha\Delta t$ and $x_n=\alpha\Delta t\,y_n/(1+\alpha\Delta t)$. The handwritten factoring and change of variables omit $\Delta t$ from the numerator of this coefficient. Expanding the Euler step gives the coefficient above, which includes $\Delta t$. For a nonzero step and positive $\alpha$, substitution gives the logistic map

$$
x_n=\beta x_{n-1}(1-x_{n-1}).
$$

The notes then study this map at $\beta=1$, starting from $x_0=1/2$. The first iterates are $x_1=1/4$, $x_2=3/16$, and $x_3=39/256$. The last handwritten denominator appears to be $216$. The recurrence gives $x_3=(3/16)(13/16)=39/256$.

![[Kyle Kabasares - Mathematical Modeling - Logistic map iterates at parameter one.png|**Fig. 75** The iterates decrease toward zero in the example with $\beta=1$.]]

If the sequence converges to $x^*$, continuity gives the fixed-point equation $x^*=\beta x^*(1-x^*)$.

### PDF page 74

Solve $x^*=f(x^*)$ for $f(x)=\beta x(1-x)$. Rearranging gives

$$
x^*-\beta x^*(1-x^*)=0
\quad\Longleftrightarrow\quad
\beta(x^*)^2+(1-\beta)x^*=0.
$$

For $\beta\ne0$, the fixed points are $0$ and $1-1/\beta=(\beta-1)/\beta$.

If $|f'(x^*)|<1$, iteration converges to $x^*$ from a sufficiently close starting point. The notes write a geometric error bound with the base $|f'(x^*)|$. A local contraction bound follows by choosing any $q$ with $|f'(x^*)|<q<1$ and keeping the iterates in a neighborhood where $|f'|\le q$.

$$
|x_n-x^*|\le q^n|x_0-x^*|.
$$

For the logistic map,

$$
f'(x)=\beta(1-2x),\qquad
f'(0)=\beta,\qquad
f'\left(\frac{\beta-1}{\beta}\right)=2-\beta.
$$

For $0<\beta<1$, the origin attracts nearby iterates. For $1<\beta<3$, the positive fixed point attracts nearby iterates and the origin is repelling.

### PDF page 75

**March 22, 2017 lecture. Logistic map**

The lecture focuses on how to visualize the results of iterating the logistic map and how to explain them. The final project schedule lists a written report due Friday, May 5, and a 10–15 minute oral presentation during the last two lectures and the discussion. Required meetings are listed with François during the week of April 10 and with Terese during the week of April 24. The page also includes a birthday annotation.

Write $x_{n+1}=f(x_n)=\beta x_n(1-x_n)$. The fixed points are $x_1^*=0$ and $x_2^*=(\beta-1)/\beta$, with derivatives $f'(x_1^*)=\beta$ and $f'(x_2^*)=2-\beta$.

**Example with $0<\beta<1$.** Take $\beta=0.5$. At $x=1/2$ the map has value $\beta/4=1/8$. The sketch starts at $x_0$, reads $x_1=f(x_0)$ from the parabola, and uses the diagonal to feed $x_1$ back into the map.

![[Kyle Kabasares - Mathematical Modeling - Logistic map cobweb at beta one half.png|**Fig. 76** The graph of $f(x)=0.5x(1-x)$ and the diagonal $y=x$ show successive iterates moving toward the origin.]]

For this parameter value any $0\le x_0\le1$ gives $x_n\to0$. The page ends by introducing the range $1\le\beta\le2$ and the example $\beta=2$.

### PDF page 76

**Example with $\beta=2$.** Every initial point strictly between 0 and 1 gives $x_n\to1/2$. The endpoints themselves map to zero.

![[Kyle Kabasares - Mathematical Modeling - Logistic map cobweb at beta two.png|**Fig. 77** The cobweb construction shows iterates from two starting values moving toward $1/2$.]]

**Example with $\beta=3.2$.** The cobweb suggests a loop that repeats every two steps.

![[Kyle Kabasares - Mathematical Modeling - Logistic map cobweb at beta three point two.png|**Fig. 78** The sketch follows two successive iterates near a repeating orbit.]]

With $f(x)=\beta x(1-x)$, the condition for returning after two iterations is

$$
x_n=x_{n+2}
=\beta x_{n+1}(1-x_{n+1})
=\beta\bigl[\beta x_n(1-x_n)\bigr]
\bigl[1-\beta x_n(1-x_n)\bigr].
$$

This equation finds fixed points of $f\circ f$. Two distinct values $y_1,y_2$ form a two-cycle if $y_2=f(y_1)$ and $y_1=f(y_2)$. The notes describe other starting points approaching the pair as $n\to\infty$, with the even and odd subsequences approaching different members of the cycle.

### PDF page 77

As $\beta$ increases beyond the first period doubling, the logistic map can have an attracting cycle of four distinct values.

$$
y_1=f(y_4),\qquad y_2=f(y_1),\qquad
y_3=f(y_2),\qquad y_4=f(y_3).
$$

The sketch labels the first split “Hopf bifurcation.” Here the fixed-point derivative crosses $-1$ at $\beta=3$, so the split is a period-doubling bifurcation. The notes mark the onset of chaos near $\beta=3.57$.

![[Kyle Kabasares - Mathematical Modeling - Logistic map period doubling and onset of chaos.png|**Fig. 79** Schematic bifurcation diagram of long-term values of $x_n$ as $\beta$ increases. The handwritten axis is approximate.]]

**March 24, 2017 lecture. Sample population model**

The lecture lists an age-structured model and a further look at the logistic method. Time $t$ is in years. The four populations are $y_1$ for ages 0–19, $y_2$ for ages 20–39, $y_3$ for ages 40–59, and $y_4$ for ages 60 and above. The last two groups are annotated “mature” and “old,” respectively.

$$
\begin{aligned}
\frac{dy_1}{dt}&=-d_1(t)+a_2(t)y_2+a_3(t)y_3+a_1y_1+a_4y_4,\\
\frac{dy_2}{dt}&=-d_2y_2+\frac{y_1}{20}-\frac{y_2}{20}+I_2(t),\\
\frac{dy_3}{dt}&=-d_3(t)y_3+\frac{y_2}{20}+I_3(t)-\frac{y_3}{20},\\
\frac{dy_4}{dt}&=-d_4y_4+\frac{y_3}{20}+I_4(t).
\end{aligned}
$$

The first equation is transcribed as written, with $-d_1(t)$ standing alone and no explicit aging outflow. The other rows show the aging transfers between groups.

### PDF page 78

Let $M$ be the maximum capacity in the age-structured model. The symbol for the total population appears to be $\tau$.

$$
\tau=y_1+y_2+y_3+y_4,
\qquad
1-\frac{\tau}{M}.
$$

The page writes the capacity factor on its own and leaves its placement in the system unspecified.

**Newton's method**

To solve $f(x)=0$, choose an initial guess $x_0$ and iterate

$$
x_n=x_{n-1}-\frac{f(x_{n-1})}{f'(x_{n-1})}.
$$

The scalar line appears to omit the subtraction sign before the fraction. The vector formula below includes the subtraction explicitly. For $\vec F(\vec x)=\vec 0$, choose $\vec x_0$ and use the Jacobian $J$ of $\vec F$.

$$
\vec x_n=\vec x_{n-1}-J(\vec x_{n-1})^{-1}\vec F(\vec x_{n-1}).
$$

### PDF page 79

**March 24, 2017 discussion. Logistic difference equation**

A first-order recurrence has the form $y_{n+1}=g(y_n)$. For comparison, the Euler step for $y'=f(t,y)$ is $y_{n+1}=y_n+\Delta t\,f(t_n,y_n)$. The short line below the update reads $y'=f(t)$, while the update itself includes both arguments.

**Fibonacci sequence.** Use $x_{n+1}=x_n+x_{n-1}$ with $x_0=x_1=1$. This indexing gives $1,1,2,3,5,8,\ldots$.

The discussion recalls the logistic difference and differential equations.

$$
y_{n+1}=\beta y_n(1-y_n),
\qquad
\frac{dy}{dt}=\alpha y(1-y).
$$

The proposed program for the difference equation takes an initial value $y_0$, a parameter $1<\beta<4$, and a number of generations. The notes call for a phase portrait using successive generation values.

![[Kyle Kabasares - Mathematical Modeling - Successive generation values phase plot.png|**Fig. 80** A sketch plotting the value at generation $n+1$ against the value at generation $n$.]]

### PDF page 80

**April 3, 2017. Introduction to chaos**

The lecture asks how to recognize, measure, and observe chaos. In a chaotic system, small differences in initial conditions can become large within a finite time. The notes call this the butterfly effect.

Consider the predator–prey phase plane near the axes. Two nearby initial points can have markedly different trajectories, especially near the separatrix. The notes describe that separation as confined to a small region near the axes.

![[Kyle Kabasares - Mathematical Modeling - Nearby initial conditions near predator prey axes.png|**Fig. 81** The sketch marks two nearby starting points near the horizontal axis and shows their differing paths.]]

The page describes a chaotic domain as one where separation occurs from arbitrarily small perturbations and says those perturbations can point in any direction. The usual sensitivity condition requires that arbitrarily near each point there exist initial conditions whose orbits eventually separate by a fixed positive distance. Requiring every perturbation direction is stronger.

The notes list three difficulties in modeling chaotic systems.

1. Initial conditions are known only approximately.
2. The model omits some aspects of the real system.
3. Numerical errors can produce large differences in the computed results.

### PDF page 81

To study systems that may be chaotic, the notes start with a periodic reference motion. If $\vec f(\vec x_0,t)$ is the solution from initial state $\vec x_0$ and has period $T$, then

$$
\vec f(\vec x_0,t)=\vec f(\vec x_0,t+T).
$$

The page describes stroboscopic sampling as a Poincaré map. At a fixed phase $t_0$, record one measurement per period, $\vec F_i(\vec x_0)=\vec f(\vec x_0,t_0+iT)$. To compare nearby initial conditions, measure

$$
\left\|\vec F_i(\vec x_0)-\vec F_i(\vec x_0+\Delta\vec x)\right\|.
$$

![[Kyle Kabasares - Mathematical Modeling - Separation sampled once per period.png|**Fig. 82** The sketch plots the distance between the sampled trajectories against the sampling index $i$.]]

The notes model exponential separation by $\|\vec F_i(\vec x_0)-\vec F_i(\vec x_0+\Delta\vec x)\|\approx e^{\lambda t}\|\Delta\vec x\|$, where elapsed time is $t=iT$. Here $\lambda$ is a Lyapunov exponent. A positive value corresponds to exponential growth of a sufficiently small perturbation along the expanding direction. The handwritten line uses $\lambda=0$ to indicate no chaos. Zero for a measured direction indicates no exponential growth in that direction.

**Example.** For $y''+y=0$, the characteristic equation $r^2+1=0$ gives $r=\pm i$. Thus

$$
y(x)=c_1e^{ix}+c_2e^{-ix}=A\cos x+B\sin x.
$$

The initial conditions on the page are $y(0)=1$ and $y'(0)=0$. They give $A=1$ and $B=0$.

### PDF page 82

For $y''+y=0$ with $y(0)=1$ and $y'(0)=0$, the solution is $y(t)=\cos t$, with $y'(t)=-\sin t$ and $y''(t)=-\cos t$. In the $(y,y')$ plane the reference trajectory is the unit circle.

![[Kyle Kabasares - Mathematical Modeling - Oscillator phase circle with initial perturbation.png|**Fig. 83** The perturbation $\Delta\vec x$ shifts the starting point along the horizontal axis of the phase plane.]]

Apply $\Delta\vec x=(\epsilon,0)$ with a small positive $\epsilon$. The perturbed solution has $y_1(0)=1+\epsilon$ and $y_1'(0)=0$, so

$$
y_1(t)=(1+\epsilon)\cos t,\qquad
y_1''(t)=-(1+\epsilon)\cos t.
$$

Both trajectories have period $T=2\pi$ in these normalized coordinates.

![[Kyle Kabasares - Mathematical Modeling - Concentric oscillator trajectories.png|**Fig. 84** The reference and perturbed solutions trace concentric circles of radii 1 and $1+\epsilon$.]]

At each sample, $\|\vec F_i(\vec x_0)-\vec F_i(\vec x_0+\Delta\vec x)\|=\epsilon$. The separation stays constant, giving zero exponential growth.

### PDF page 83

**April 5, 2017 lecture. The Lorenz system and optimization**

The day of the month has a handwritten 5 above an overwritten digit. The agenda lists the Lorenz system, homework feedback, and an introduction to optimization. The notes date the Lorenz system to the 1960s and write it as

$$
\frac{dx}{dt}=\sigma(y-x),\qquad
\frac{dy}{dt}=x(\rho-z)-y,\qquad
\frac{dz}{dt}=xy-\beta z,
\qquad \sigma,\beta,\rho>0.
$$

**Numerical optimization.** The goal is to maximize $f(\vec x)$, sometimes with constraints on $\vec x$. Where $\nabla f$ is nonzero, it points in the direction of steepest increase. The simplest algorithm moves from a starting point in that direction.

![[Kyle Kabasares - Mathematical Modeling - First gradient ascent step inside the domain.png|**Fig. 85** A gradient step from $P_0=(x_0,y_0)$ toward $P_1$ in the domain $D$.]]

With step size $h$, the first update is $\vec P_1=\vec P_0+h\nabla f(x_0,y_0)$.

### PDF page 84

The gradient-ascent iteration is $\vec P_{n+1}=\vec P_n+h\nabla f(\vec P_n)$. For sufficiently small $h>0$ and a nonzero gradient, the step increases $f$. The notes describe convergence toward a maximum and point out that taking very small steps makes progress slow.

For a restricted domain $D$, the proposed method follows the projection of the gradient onto the boundary when the iteration reaches it. If $\hat n$ is a unit normal and $\vec u$ is the tangential component, then

$$
\vec u+(\nabla f\cdot\hat n)\hat n=\nabla f,
\qquad
\vec P_{n+1}=\vec P_n+h\vec u.
$$

![[Kyle Kabasares - Mathematical Modeling - Gradient projection onto the boundary.png|**Fig. 86** The gradient splits into a tangential component along the boundary and a component along the normal.]]

The notes stop the boundary iteration when $\nabla f$ is parallel to $\hat n$ or when it reaches a corner. The parallel-gradient condition gives a stationary candidate along the smooth boundary. At a corner, one can check the feasible directions on the adjacent sides.

### PDF page 85

**April 10, 2017 lecture. Convex domains and linear programming**

The lecture asks what makes a domain convex and whether the feasible domain in linear programming is convex. The final-project reminder calls for an appointment and records a 10% deduction for missing the meeting.

To maximize $f(\vec x)$ numerically, start at a point in the domain and reevaluate the gradient after each step.

![[Kyle Kabasares - Mathematical Modeling - Successive gradient ascent directions.png|**Fig. 87** The two arrows show the gradients at successive points.]]

![[Kyle Kabasares - Mathematical Modeling - Box shaped domain sketch.png|**Fig. 88** A box-shaped domain with a path drawn near one face.]]

A nonconvex domain can obstruct a gradient path from reaching the global maximum from some starting points.

![[Kyle Kabasares - Mathematical Modeling - Gradient ascent in a nonconvex domain.png|**Fig. 89** The asterisk marks the global maximum in the sketch. The gradient steps from the left approach a different part of the boundary.]]

The notes suggest trying several starting points and ask how many are needed. The second suggestion is to formulate the problem with a convex domain when possible.

A domain in $\mathbb R^n$ is convex if the straight line segment joining any two points of the domain lies entirely in it.

### PDF page 86

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

### PDF page 87

To finish the unit-disk proof, use $x_1x_2+y_1y_2=P_1\cdot P_2$. For nonzero vectors this is $\|P_1\|\|P_2\|\cos\theta$, where $\theta$ is the angle between them. The handwritten estimate replaces $\|P_1\|\|P_2\|$ by 1 before bounding $\cos\theta$. To cover negative dot products as well, bound the whole product by $P_1\cdot P_2\le\|P_1\|\|P_2\|\le1$. Then

$$
\|\vec r(\lambda)\|^2
\le\lambda^2+(1-\lambda)^2+2\lambda(1-\lambda)
=\bigl(\lambda+(1-\lambda)\bigr)^2=1.
$$

Therefore $\vec r(\lambda)$ stays in the disk and $D$ is convex.

**Linear programs.** Maximize a linear objective $f(\vec x)=\sum_{i=1}^n c_ix_i$ subject to linear constraints such as $A\vec x\le\vec b$ or $C\vec x=\vec d$, together with $x_i\ge0$ for $i=1,\ldots,n$.

**April 12, 2017 lecture. Examples and properties of solutions**

The lecture recalls the objective $f(\vec x)=\vec c^{\,T}\vec x$ and the constraint forms $A\vec x\le\vec b$, $A\vec x\ge\vec b$, and $A\vec x=\vec b$. These define a feasible domain $D$ over real variables. A separate handwritten line lists $x_i=0,1,2,\ldots,n$. Taking that list as an integrality constraint would give a discrete feasible set. The convexity argument on this page concerns the real domain.

For the case $A\vec x\le\vec b$, take $\vec x_1,\vec x_2\in D$, so $A\vec x_1\le\vec b$ and $A\vec x_2\le\vec b$. The question is whether $\vec z=\lambda\vec x_1+(1-\lambda)\vec x_2$ also satisfies $A\vec z\le\vec b$.

### PDF page 88

For $0\le\lambda\le1$, linearity gives

$$
A\vec z=\lambda A\vec x_1+(1-\lambda)A\vec x_2
\le\lambda\vec b+(1-\lambda)\vec b=\vec b.
$$

The inequality holds componentwise, so the feasible region is convex.

![[Kyle Kabasares - Mathematical Modeling - Feasible region bounded by linear inequalities.png|**Fig. 92** The shaded region illustrates a feasible set cut out by linear inequalities.]]

**Bakery example.** A bakery sells boxes of croissants for 10 dollars and boxes of cupcakes for 5 dollars. Each box of croissants requires 8 units of butter and 4 units of flour. Each box of cupcakes requires 5 units of butter and 1 unit of flour. The prose repeats “butter” for the second cupcake ingredient, but the recipe beneath it uses $5b+1f$, where $b$ is butter and $f$ is flour. There are 30 units of butter and 10 units of flour in stock.

Let $x$ and $y$ be the numbers of croissant and cupcake boxes, respectively. If their unit prices are $c_1$ and $c_2$, the revenue is

$$
f(\vec x)=c_1x+c_2y=f(x,y)=10x+5y.
$$

The objective is to choose production quantities that maximize this revenue.

### PDF page 89

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

### PDF page 90

The remaining outcomes listed for a linear program are an objective unbounded above, in which case no maximum exists, or an empty feasible domain. The notes introduce the simplex method as a way to seek the best corner without trying all of them.

**April 14, 2017 lecture. Standard form of a linear program**

A general linear program maximizes $f(\vec x)=\vec c^{\,T}\vec x$ under linear constraints of types $\le$, $=$, and $\ge$. The lecture takes $x_i\ge0$ for $i=1,\ldots,n$. In the standard form used here, all constraints other than nonnegativity are equalities.

$$
\text{Maximize }\vec c^{\,T}\vec x
\qquad\text{subject to}\qquad A\vec x=\vec b,\quad \vec x\ge0.
$$

The unknown $\vec x$ is $n\times1$, and $A$ is $m\times n$, with $m$ equations in $n$ variables. The notes focus on $m\ll n$. In that case, if the equality system is consistent, it has infinitely many real solutions before the nonnegativity restriction is imposed.

To convert a minimization problem with objective $g(\vec x)=\vec d^{\,T}\vec x$, maximize $f(\vec x)=-g(\vec x)$ over the same feasible set.

### PDF page 91

For the converted objective, $\vec c=-\vec d$. The notes then convert the constraints and variables to standard form.

2. For $\vec s_i^{\,T}\vec y\le b_i$, introduce a slack variable $t_i\ge0$ and impose $\vec s_i^{\,T}\vec y+t_i=b_i$. For example, $x\le5$ is equivalent to $x+t=5$ with $t\ge0$. The augmented equation has the form $\vec r_i^{\,T}\vec x=b_i$.
3. For $\vec s_i^{\,T}\vec y\ge b_i$, introduce a surplus variable $t_i\ge0$ and impose $\vec s_i^{\,T}\vec y-t_i=b_i$. With $\vec x=(\vec y,t_i)^T$ in block notation, the augmented row is $\vec r_i^{\,T}=(\vec s_i^{\,T},-1)$.
4. For $y_i\ge c$, use $x_i=y_i-c\ge0$.
5. For $y_i\le c$, use $x_i=c-y_i\ge0$.

An unrestricted $y_i$ can be expressed as $x_i-x_{i+1}$ with both new variables nonnegative.

**Example.** Write a standard linear program for a mixture of onion soup and chicken stock. Onion soup costs 3 cents per ounce and chicken stock costs 2 cents per ounce. Each ounce of onion soup contains 5 grams of protein and 10 units of iron.

### PDF page 92

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

### PDF page 93

For the soup mixture, the cost contours have equation $3x+2y=c$, or $y=c/2-3x/2$. The sketch marks contours for $c=0$ and $c=15$ and identifies the corner where both nutrient constraints are active.

![[Kyle Kabasares - Mathematical Modeling - Soup mixture feasible region and cost lines.png|**Fig. 94** The arrow marks the minimum-cost corner at the intersection of the two nutrient constraints. The line intercepts and cost levels are sketched approximately.]]

The recorded solution is $(x,y,s,t)^T=(14/5,3,0,0)^T$. Substitution gives $5(14/5)+7(3)=35$ and $10(14/5)+4(3)=40$, consistent with the two stated requirements.

**April 14, 2017 discussion. Linear programming and group projects**

The general objective is $P=\sum_i c_ix_i$ with $A\vec x\le\vec b$ and all decision variables nonnegative.

**Jewelry example.** Let $x$ count pairs of earrings and $y$ count necklaces. Maximize $g(x,y)=15x+20y$ subject to

$$
\frac12x+y\le10,\qquad x+y\le15.
$$

The first constraint is labeled as time. Its equality form is $\tfrac12x+y+s=10$ with slack $s\ge0$. In matrix form the original inequalities are

$$
\begin{pmatrix}0.5&1\\1&1\end{pmatrix}
\begin{pmatrix}x\\y\end{pmatrix}
\le\begin{pmatrix}10\\15\end{pmatrix}.
$$

### PDF page 94

**Example 2.** Let $x$ count sofas and $y$ count chairs. Maximize $75x+90y$ under the following limits.

$$
\begin{aligned}
2x+3y&\le66 &&\text{(carpentry)},\\
4x+9y&\le180 &&\text{(finishing)},\\
10x+2y&\le200 &&\text{(upholstery)}.
\end{aligned}
$$

**April 17, 2017 lecture. Applying the simplex method**

The lecture asks what the method does geometrically and how to carry it out, mentions `linprog`, and introduces an industrial model to develop.

A linear program with objective $f(\vec y)=\vec d^{\,T}\vec y$ and constraints $B\vec y\le\vec g$ can be written in standard form with objective $f(\vec x)=\vec c^{\,T}\vec x$, constraints $A\vec x=\vec b$, and nonnegative variables. Here $A$ represents $m$ equations and $\vec x$ has $n$ unknowns, with $n\gg m$ in the cases considered.

The equality system has infinitely many solutions when it is consistent and $n>m$. To look for extreme feasible solutions, set $n-m$ nonbasic variables to zero and use the remaining $m$ basic variables to satisfy $A\vec x=\vec b$. There are $\binom nm=n!/[m!(n-m)!]$ ways to choose the candidate basic variables.

### PDF page 95

For seven variables and three basic positions, there are $\binom73=7!/(3!4!)$ choices. The number of candidate bases grows quickly with $n$, so the notes emphasize choosing which ones to examine.

![[Kyle Kabasares - Mathematical Modeling - Illustrative polygon and corner points.png|**Fig. 95** Several vertices are marked on the boundary of a feasible polygon.]]

The geometric observation is that a vertex in $\mathbb R^m$ can be identified by $m$ linearly independent active equations. In two dimensions, the sketch illustrates intersections of pairs of constraint lines.

**Simplex example.** Maximize $f(x,y)=x+y$ subject to $x,y\ge0$ and

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

### PDF page 96

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

### PDF page 97

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

### PDF page 98

**April 21, 2017 lecture**

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

### PDF page 99

The search example proposes integrating the target-location density $p(x,y)$ over a moving disk of radius $R$, centered at $(x(t),y(t))$. Reading the disk integral in polar coordinates, the proposed expression is

$$
\int_0^T\int_0^{2\pi}\int_0^R
p\bigl(x(t)+r\cos\theta,y(t)+r\sin\theta\bigr)
\,r\,dr\,d\theta\,dt.
$$

The notes label this as the probability of finding the drone within $T$. As written, it integrates instantaneous coverage over time. For a fixed target and certain detection on contact, the probability is the density integral over the union of the searched disks, counting each location once.

**April 24 lecture. Nonlinear optimization**

The page writes the year as 2016. The adjacent dated lectures in this sequence are in 2017. The agenda lists the final schedule and nonlinear optimization.

**Gradient step.** The notes call the method steepest descent, but the written update and acceptance test maximize $f$.

$$
\vec x^{\,n+1}=\vec x^{\,n}+\tau\nabla f(\vec x^{\,n}),
$$

where $\tau$ is the step length. One option is to fix $\tau$. Another is to try $\tau_n$ and compare the objective values. If $f(\vec x^{\,n+1})<f(\vec x^{\,n})$, reject the step and try $\tau_n/2$. If the objective increases, the page appears to set the next trial length to $1.1\tau_n$.

**Line search.** Choose $\tau$ to maximize the objective along the current gradient direction. With $\vec d=\nabla f(\vec x^{\,n})$ and $g(\tau)=f(\vec x^{\,n}+\tau\vec d)$, an interior maximizing step satisfies

$$
g'(\tau)=\nabla f(\vec x^{\,n}+\tau\vec d)\cdot\vec d=0.
$$

![[Kyle Kabasares - Mathematical Modeling - Line search steps and orthogonality.png|**Fig. 100** The sketch marks the point where the gradient has zero dot product with the search direction.]]

### PDF page 100

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

### PDF page 101

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

**Newton step using the Hessian.** Here the Hessian is constant, so evaluation at the current point leaves it unchanged.

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

### PDF page 102

**April 26, 2017 lecture. Functionals**

A scalar function such as $f(x)=x^2$ takes a number as input and returns a number. A functional $L$ takes a function as input and returns a number.

The page gives five examples.

1. Evaluation at $a$, $L(f)=f(a)$.
2. The endpoint difference, $L(f)=f(b)-f(a)$.
3. The integral, $L(f)=\int_a^b f(t)\,dt$.
4. The integral of the square, $L(f)=\int_a^b(f(t))^2\,dt$.
5. A weighted integral, $L(f)=\int_a^b f(t)g(t)\,dt$, for a given kernel $g(t)$. The example kernel is $g(t)=1/(1+t^2)$.

The page diagrams a real scalar function as $x\mapsto f(x)$ from $\mathbb R$ into $\mathbb R$. It diagrams a functional as $f\mapsto L(f)$ from a space of functions into $\mathbb R$. The examples of function spaces are $L^1[a,b]$, with $\int_a^b|f(t)|\,dt$ finite, and $L^2[a,b]$, with $\int_a^b|f(t)|^2\,dt$ finite. The evaluation examples use a domain where point values are defined, such as continuous functions.

### PDF page 103

**6. Arc length.** The length of the graph of $f$ on $[a,b]$ is another functional.

$$
L(f)=\int_a^b\sqrt{1+f'(x)^2}\,dx.
$$

Consider functionals of the form $L(f)=\int_a^b h(f(t),f'(t))\,dt$. A variation is a small perturbation $\epsilon\eta(x)$, where $\epsilon\in\mathbb R$ and $\eta$ is chosen so the perturbed function is admissible. For fixed endpoint values, take $\eta(a)=\eta(b)=0$. Then $f+\epsilon\eta$ has the same endpoint values as $f$.

**Example.** On $[0,1]$ take $f(x)=x^2$, $\eta(x)=\sin(3\pi x)$, and $\epsilon=0.1$.

![[Kyle Kabasares - Mathematical Modeling - Endpoint preserving variation of a parabola.png|**Fig. 102** The sketch compares the parabola with a perturbed curve that has the same endpoints.]]

The notes ask whether a functional can be optimized. They write $L(f)<L(f+\epsilon\eta)$ for positive $\epsilon$ and any variation $\eta$. This strict inequality describes a strict minimum when tested on nonzero admissible variations in the relevant neighborhood. Testing both $\eta$ and $-\eta$ covers either sign of the perturbation. The next example fixes $f(a)=f_a$ and $f(b)=f_b$.

### PDF page 104

Minimize the graph length $L(f)=\int_a^b\sqrt{1+(f'(t))^2}\,dt$ between fixed endpoints $(a,f_a)$ and $(b,f_b)$.

![[Kyle Kabasares - Mathematical Modeling - Fixed endpoints for the arc length problem.png|**Fig. 103** The two prescribed points set the boundary values of the curve.]]

One approach is to try a quadratic $f(x)=Ax^2+Bx+C$. More generally, discretize the problem so that only finitely many variables need to be determined. Use

$$
\Delta x=\frac{b-a}{N},
\qquad
x_i=a+i\Delta x,
\qquad
x_0=a,\quad x_N=b.
$$

With $f_i\approx f(x_i)$, the polygonal arc length is

$$
L(f_1,\ldots,f_{N-1})
=\sum_{i=1}^N\sqrt{(\Delta x)^2+(f_i-f_{i-1})^2}.
$$

The interior values are the variables to optimize. The notes write $f_0=a$ and $f_N=b$ under the sum. The fixed endpoint ordinates from the sketch give $f_0=f_a$ and $f_N=f_b$.

For the functional $\int_a^b\sqrt{f^2+(f')^2}\,dx$, the analogous discretization is

$$
L\approx\sum_{i=1}^N \Delta x
\sqrt{f_i^2+\left(\frac{f_i-f_{i-1}}{\Delta x}\right)^2}.
$$

Another approach is to represent the function in a finite basis and solve for the coefficients. The trigonometric example reads

$$
f(x)=b_0+\sum_{k=1}^N\bigl(a_k\sin(kx)+b_k\cos(kx)\bigr).
$$

The handwritten cosine term appears as $\cos(k)$. The basis uses the variable argument $kx$ in both terms.

### PDF page 105

**Project meeting notes.** The notes list testing different gravities, considering a rover's transfer between planets, discussing a second robotic example, asking whether a small nudge causes chaos, and deciding what constitutes a realistic rover arm.

The state vector and its initial value are

$$
\vec y(t)=\begin{pmatrix}
\mechanical{\theta}_1(t)\\
d\mechanical{\theta}_1/dt\\
\mechanical{\theta}_2(t)\\
d\mechanical{\theta}_2/dt
\end{pmatrix},
\qquad
\vec y_0=\begin{pmatrix}
\mechanical{\theta}_1(0)\\
(d\mechanical{\theta}_1/dt)(0)\\
\mechanical{\theta}_2(0)\\
(d\mechanical{\theta}_2/dt)(0)
\end{pmatrix}.
$$

The page sketches a perturbed initial state $\vec y_0+\Delta\vec y$, with the perturbation read as $\Delta\vec y=\epsilon(1,1,1,1)^T$ in the numerical coordinates.

For two nearby initial states, the notes use the approximate separation law

$$
\|F_i(\vec x_0)-F_i(\vec x_0+\Delta\vec x)\|
\approx e^{\lambda t}\|\Delta\vec x\|.
$$

Taking a logarithm gives the finite-time estimate

$$
\lambda\approx\frac1t\ln\left(
\frac{\|F_i(\vec x_0)-F_i(\vec x_0+\Delta\vec x)\|}{\|\Delta\vec x\|}
\right).
$$

The handwritten denominator switches to $\Delta y$. The normalization in the separation law is the size of the initial perturbation used in the numerator. For homework 5, the notes use $\Delta\vec x=(1,0,0)^T$, so $\|\Delta\vec x\|=1$ and the denominator drops out. A note refers to `dt` in the MATLAB code. The time in the estimate is the elapsed time between the initial state and the sampled state.

The bottom of the page starts a table of the three coordinates $x,y,z$ at successive time indices, with $(x_1,y_1,z_1)$ in the first row.

### PDF page 106

The notes compare the $z$ coordinates from two runs that start at $\vec y_0$ and $\vec y_0+\Delta\vec y$. They write the separation model as

$$
\left|z(\vec y_0,t)-z(\vec y_0+\Delta\vec y,t)\right|
\approx e^{\lambda t}\|\Delta\vec y\|.
$$

Denote the two values by $A$ and $B$. With the initial perturbation normalized to $\|\Delta\vec y\|=1$, taking the logarithm gives $\ln|A-B|\approx\lambda t$, hence $\lambda\approx t^{-1}\ln|A-B|$.

A run with $n$ sampled states and three coordinates can be stored in an $n\times3$ matrix. The page sketches a MATLAB procedure that preallocates a column with `zeros(length(xout),1)` and stores the norm of the difference between the two runs at each row `i`. It labels `sum(A)/length(A)` as the Lyapunov exponent. With the array populated as written, that expression averages the distances. The estimate above uses their logarithmic growth relative to the initial separation and elapsed time.

### PDF page 107

**April 28, 2017 lecture. Euler–Lagrange equations**

The lecture asks whether a functional is linear, how it can be linearized, and what happens at an optimal function. The goal is to find the function $f(t)$ that optimizes $J(f)$.

A functional is linear if

$$
J(af+bg)=aJ(f)+bJ(g)
\qquad\text{for }a,b\in\mathbb R.
$$

The ordinary integral $J(f)=\int_a^b f(t)\,dt$ is linear. The graph-length functional $J(f)=\int_a^b\sqrt{1+f'(t)^2}\,dt$ is nonlinear.

The notes recall the ordinary difference quotient $f'(a)=\lim_{h\to0}[f(a+h)-f(a)]/h$. They then try using the change $\epsilon\eta(x)$ as the denominator of a functional difference quotient and observe that it vanishes wherever $\eta(x)=0$. To vary the function while preserving its endpoints, choose $\eta(a)=\eta(b)=0$ and vary the small real parameter $\epsilon$. This gives a function of one variable,

$$
H(\epsilon)=J(f+\epsilon\eta).
$$

### PDF page 108

For the arc-length functional, varying $f$ along $\eta$ gives

$$
H(\epsilon)=\int_a^b\sqrt{1+\bigl(f'(t)+\epsilon\eta'(t)\bigr)^2}\,dt.
$$

Seek $f$ for which $\epsilon=0$ is a critical point of $H$ for every admissible choice of $\eta$.

Consider the more general functional

$$
J(f)=\int_a^b g(t,f(t),f'(t))\,dt,
$$

where $g(t,p,q)$ is twice differentiable. For arc length, $g(t,p,q)=\sqrt{1+q^2}$. Write

$$
H(\epsilon)=\int_a^b
g\bigl(t,f(t)+\epsilon\eta(t),f'(t)+\epsilon\eta'(t)\bigr)\,dt.
$$

Differentiate under the integral sign. The chain rule gives zero for the derivative of the first argument with respect to $\epsilon$, $\eta(t)$ for the second, and $\eta'(t)$ for the third. Hence

$$
H'(\epsilon)=\int_a^b
\left(g_p\,\eta(t)+g_q\,\eta'(t)\right)\,dt,
$$

with $g_p$ and $g_q$ evaluated at the perturbed arguments. At a stationary function, $H'(0)=0$ for every admissible $\eta$.

### PDF page 109

Integrate the $g_q\eta'$ term of $H'(0)$ by parts. Take $u=g_q(t,f(t),f'(t))$ and $dv=\eta'(t)\,dt$, so $v=\eta(t)$. The boundary term $\left[g_q\eta\right]_a^b$ vanishes because $\eta(a)=\eta(b)=0$. The remaining variation is

$$
H'(0)=\int_a^b \eta(t)
\left[
g_p(t,f(t),f'(t))
-\frac{d}{dt}g_q(t,f(t),f'(t))
\right]dt.
$$

The first derivation writes the derivative of $g_q$ with a partial-derivative symbol. Here it is the total derivative along $f$, as in the recap below. At an optimum the first variation vanishes for every admissible $\eta$. The fundamental lemma of the calculus of variations gives the Euler–Lagrange equation

$$
g_p(t,f(t),f'(t))-\frac{d}{dt}g_q(t,f(t),f'(t))=0.
$$

This generally gives a second-order ODE for $f$, with the prescribed values $f(a)=f_a$ and $f(b)=f_b$.

**May 1, 2017 lecture. Arc length and surface area**

The lecture lists two applications of the Euler–Lagrange equation, minimizing arc length and minimizing surface area. The next meeting is for presentations. The final project is graded 50% on the oral presentation and 50% on the written work.

The notes recall the functional $\int_a^b g(t,f(t),f'(t))\,dt$ and the stationarity equation $g_p-d(g_q)/dt=0$ with fixed endpoint values. The first example minimizes arc length between two points.

### PDF page 110

Minimize the arc length between $(a,f_a)$ and $(b,f_b)$.

![[Kyle Kabasares - Mathematical Modeling - Straight segment between arc length endpoints.png|**Fig. 104** A dashed straight segment joins the two prescribed points.]]

The functional is $J(f)=\int_a^b\sqrt{1+f'(t)^2}\,dt$, with $g(t,p,q)=\sqrt{1+q^2}$. The first integral line on the page omits the square on $f'(t)$, while the expression for $g$ and the derivatives use it. Since

$$
g_p=0,\qquad
g_q=\frac{q}{\sqrt{1+q^2}},
$$

the Euler–Lagrange equation becomes

$$
\frac{d}{dt}\left(\frac{f'(t)}{\sqrt{1+f'(t)^2}}\right)=0.
$$

Absorb the overall sign into the integration constant and write $f'(t)/\sqrt{1+f'(t)^2}=A$. Squaring gives $(1-A^2)f'(t)^2=A^2$. The handwritten square-root line appears to drop the square from $A^2$. Using the unsquared relation to retain the sign gives $f'(t)=A/\sqrt{1-A^2}=C$ for $|A|<1$. Therefore $f(t)=Ct+C_1$.

### PDF page 111

**Example 2. Surface of revolution.** Connect $(a,f(a))$ and $(b,f(b))$ by a graph whose revolution about the horizontal axis has minimum area.

![[Kyle Kabasares - Mathematical Modeling - Surface of revolution with fixed boundary circles.png|**Fig. 105** Rotating the connecting profile gives a surface with prescribed boundary circles at $a$ and $b$.]]

If $f_a=f_b$, one candidate is a cylinder. Its lateral area is $2\pi f_a(b-a)$.

![[Kyle Kabasares - Mathematical Modeling - Equal radii and trial cylinder.png|**Fig. 106** A curved profile and a trial cylinder between boundary circles of equal radius.]]

For a positive profile $f$, the area functional and its integrand are

$$
J(f)=\int_a^b 2\pi f(t)\sqrt{1+f'(t)^2}\,dt,
\qquad
g(t,p,q)=2\pi p\sqrt{1+q^2}.
$$

The partial derivatives are $g_p=2\pi\sqrt{1+q^2}$ and $g_q=2\pi pq/\sqrt{1+q^2}$. After canceling the common factor $2\pi$, the Euler–Lagrange equation reads

$$
\sqrt{1+f'(t)^2}
-\frac{d}{dt}\left(\frac{f(t)f'(t)}{\sqrt{1+f'(t)^2}}\right)=0.
$$

The page proposes multiplying this equation by $f'(t)$.

### PDF page 112

Multiply the surface-area Euler–Lagrange equation by $f'$. The result is the derivative of an expression that must therefore be constant.

$$
\frac{d}{dt}\left(
f\sqrt{1+(f')^2}-\frac{f(f')^2}{\sqrt{1+(f')^2}}
\right)=0.
$$

Combining the terms over a common denominator gives

$$
\frac{f}{\sqrt{1+(f')^2}}=C,
\qquad
f=C\sqrt{1+(f')^2}.
$$

Using $1+\sinh^2 u=\cosh^2 u$, a positive catenary solution is

$$
f(t)=C\cosh\left(\frac{t+C_2}{C}\right),
\qquad
f'(t)=\sinh\left(\frac{t+C_2}{C}\right),
\qquad C>0.
$$

The handwritten arguments switch to $x$ while the function is written as $f(t)$. The formula above uses $t$ throughout.

First try the endpoints $(0,0)$ and $(1,1)$. The notes point to $C=0$ when trying to impose $f(0)=0$. Every positive catenary in this family has $f(t)\ge C>0$, and the formula is undefined at $C=0$.

![[Kyle Kabasares - Mathematical Modeling - Boundary trial from the axis to unit radius.png|**Fig. 107** A sketch of the trial boundary values $f(0)=0$ and $f(1)=1$.]]

The next trial uses symmetric endpoints at $t=-1$ and $t=1$. The endpoint ordinates are blank on the first line, and the next lines specify $f(1)=2$ and use symmetry, giving $f(-1)=2$ and $C_2=0$. Then

$$
2=C\cosh(1/C).
$$

The notes say that such a $C$ exists and can be approximated numerically.

### PDF page 113

**Simplex method calculations (Patrick JMT)**

Maximize profit when all resource constraints have the form $\le$. A manufacturer makes three types of electronic components for computers.

| Component | Fabrication hours per unit | Assembly hours per unit | Profit per unit (dollars) |
| --- | --- | --- | --- |
| A | 2 | 1 | 7 |
| B | 3 | 1 | 8 |
| C | 2 | 2 | 10 |

Each week there are 1,000 fabrication labor-hours and 800 assembly labor-hours. Let $x_1,x_2,x_3$ count the components of types A, B, and C. The objective and resource limits are

$$
\begin{aligned}
\text{Maximize }P&=7x_1+8x_2+10x_3,\\
2x_1+3x_2+2x_3&\le1000 &&\text{(fabrication)},\\
x_1+x_2+2x_3&\le800 &&\text{(assembly)}.
\end{aligned}
$$

The handwritten variable condition is strict, $x_1,x_2,x_3>0$. The simplex formulation uses nonnegativity, allowing a component to be omitted. Introduce nonnegative slack variables $s_1$ and $s_2$.

$$
\begin{aligned}
-7x_1-8x_2-10x_3+P&=0,\\
2x_1+3x_2+2x_3+s_1&=1000,\\
x_1+x_2+2x_3+s_2&=800.
\end{aligned}
$$

The next page sets up the tableau.

### PDF page 114

Put the two resource equations with slack variables first and the objective equation last. The initial tableau, with the right-hand side after the divider, is

$$
\begin{array}{c|rrrrrr|r}
 &x_1&x_2&x_3&s_1&s_2&P&\text{RHS}\\
\hline
s_1&2&3&2&1&0&0&1000\\
s_2&1&1&2&0&1&0&800\\
P&-7&-8&-10&0&0&1&0
\end{array}
$$

The most negative entry in the bottom row is $-10$, so choose the $x_3$ column. Compare the positive ratios $1000/2=500$ and $800/2=400$. The smaller ratio selects the second row, whose pivot entry is 2. Scale it by $1/2$ to make the pivot 1.

$$
\begin{array}{c|rrrrrr|r}
 &x_1&x_2&x_3&s_1&s_2&P&\text{RHS}\\
\hline
s_1&2&3&2&1&0&0&1000\\
s_2&1/2&1/2&1&0&1/2&0&400\\
P&-7&-8&-10&0&0&1&0
\end{array}
$$

The final instruction is to use row operations to make the entries above and below the pivot zero.

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
| $\alpha_R$, $\alpha_K$ | $\unit{s^{-1}}$ | Species growth rates | Fractional growth rates when food is plentiful. |
| $M_R$, $M_K$ | 1 | Species carrying capacities | Equilibrium populations for rabbits and koalas in isolation. |
| $\beta_K$ | 1 | Capacity reduction per rabbit | Reduction in koala capacity per rabbit in the first proposed model. |
| $W$ | 1 | Wolf population | Number of predators in the rabbit and wolf model. |
| $\delta$ | $\unit{s^{-1}}$ | Wolf decline rate | Fractional rate of decline in the absence of prey. |
| $\beta$ | 1 | Predator effect coefficient | Reciprocal of the wolf count at which the rabbit growth term vanishes. |
| $\gamma$ | 1 | Prey effect coefficient | Reciprocal of the rabbit count at which the wolf growth term vanishes. |
| $\bar R$, $\bar W$ | 1 | Relative populations | Rabbit and wolf populations divided by their respective nonzero equilibrium values. |
| $\bar t$ | 1 | Rescaled time | Elapsed time multiplied by the rabbit growth rate. |
| $\epsilon$ | 1 | Rate ratio | Ratio of the wolf decline rate to the rabbit growth rate. |
| $y_i$ | 1 | Age-group population | Number of individuals in the indicated age band. |
| $a_i$ | $\unit{yr^{-1}}$ | Birth-rate coefficients | Per-capita contributions to the youngest group. |
| $d_2$, $d_3(t)$, $d_4$ | $\unit{yr^{-1}}$ | Death-rate coefficients | Per-capita loss coefficients for the three older groups. |
| $d_1(t)$, $I_i(t)$ | $\unit{yr^{-1}}$ | Population flows | Direct loss and external inflow terms in the equations as written, with population counted as a dimensionless number. |
| $\tau$ | 1 | Total population | Sum of the four age-group populations. |
| $T$ | $\unit{s}$ | Sampling period | Time between successive measurements at the same phase. |
| $\lambda$ | $\unit{s^{-1}}$ | Lyapunov exponent | Exponential rate of growth or decay of a perturbation in time. |
| $x$, $y$ | $\unit{oz}$ | Ingredient amounts | Onion soup and chicken stock per serving, respectively. |
| $s$ | $\unit{g}$ | Protein surplus | Protein above the minimum required per serving. |
| $t$ | — | Iron surplus | Iron above the minimum required per serving, in the unspecified iron units of the exercise. |
| $\mechanical{\theta}_1$, $\mechanical{\theta}_2$ | $\unit{rad}$ | Angular coordinates | The two angles in the rover-arm state. |
| $d\mechanical{\theta}_i/dt$ | $\unit{rad\,s^{-1}}$ | Angular rate | Time derivative of the corresponding angular coordinate. |
| $s_1$, $s_2$ | $\unit{h}$ | Unused labor time | Weekly fabrication and assembly labor-hours remaining, respectively. |
