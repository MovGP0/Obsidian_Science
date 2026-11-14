---
title: "Box counting and random-walk distributions"
---

> [!TLDR]
> Use covering counts to estimate dimension and model a walker’s probability density with step distributions and convolution.

## Worked lecture material

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

##### Example. Sierpiński triangle

1. Start with an equilateral triangle of side $1$.
2. Split it into four smaller equilateral triangles.
3. Remove the central triangle.
4. Repeat steps 2 and 3 on each remaining triangle.

![[Kyle Kabasares - Mathematical Modeling - Sierpinski triangle after two subdivisions.png|**Fig. 26** The shaded triangles mark the central regions removed during the first two subdivisions.]]

##### Two-dimensional walkers

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

##### Fractal dimension and dust-bunny formation

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

##### Dust-bunny model

The random walkers represent dust particles. Specify how they move and how they stick to each other. Their motion combines a random part, a gravity bias, and background flow. The flow can provide a position-dependent velocity bias, and motion can depend on particle size.

For implementation, store each particle's position in an array $d$ with one row per particle and two columns. For particle $3$, $d(3,1)$ is its $x$ coordinate and $d(3,2)$ its $y$ coordinate.

Choose a distribution for the steps. The page proposes normal distributions with a mean set by the air velocity in $x$, and by the air velocity with a downward gravity bias in $y$. Each distribution also has a variance.

![[Kyle Kabasares - Mathematical Modeling - Shifted distribution for particle steps.png|**Fig. 29** The sketch shows a step distribution with a mean to the left of zero.]]

The dust model still needs a velocity as a function of position and a rule for where particles stick.

##### Review of probability

For a continuous random variable $X$ with probability density $p$, the cumulative probability is

$$
P(X\le x)=\int_{-\infty}^{x}p(t)\,dt.
$$

![[Kyle Kabasares - Mathematical Modeling - Probability density and cumulative area.png|**Fig. 30** The shaded area to the left of $x$ represents $P(X\le x)$. The sketch marks the mean $\mu$ and the spread $\sigma$.]]

For a normal distribution with mean $\mu$ and standard deviation $\sigma$,

$$
p(x)=\frac{e^{-(x-\mu)^2/(2\sigma^2)}}{\sqrt{2\pi\sigma^2}}.
$$

The denominator in the handwriting appears to lack the square on $\sigma$. The square gives the normalized Gaussian used on [[Model error, random walks, and continuum limits#Heat equation, boundary effects, and extensions|the section on Heat equation, boundary effects, and extensions]].

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

Since $E[X]=\mu$ and the density integrates to one,

$$
\operatorname{Var}(X)=E[X^2]-2\mu E[X]+\mu^2
=E[X^2]-(E[X])^2.
$$

More generally, the $n$th moment is $E[X^n]=\int_{-\infty}^{\infty}t^n p(t)\,dt$ when it exists. In particular, $E[X^2]=\operatorname{Var}(X)+(E[X])^2$.

##### Time evolution of a random walker's density

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

##### Evolution with a general step distribution

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

##### Traffic model

![[Kyle Kabasares - Mathematical Modeling - Traffic model with queues and a looping road.png|**Fig. 33** Cars queue at an intersection and on the return leg of a looping road. An arrow indicates the direction of travel through the intersection.]]

The page marks a time step $\Delta t$ and starts an update with $P(t+\Delta t)=$. The right-hand side is blank.

##### Nonstandard random walks

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

##### One and two symmetric steps

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

##### Moment scaling and long jumps

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

##### Parameter estimation by maximum likelihood

To model a phenomenon with a random process, first choose a distribution for the random component. This choice can draw on expertise about the phenomenon. Then use data to estimate the parameters that describe the distribution. A suitable view of the data can reveal a natural interpretation of the parameters.

The example uses heights measured in inches.

![[Kyle Kabasares - Mathematical Modeling - Heights plotted by individual name.png|**Fig. 38** Heights plotted against names A through E. The notes label this arrangement unhelpful for seeing the distribution.]]

Suppose height is normally distributed with mean $\mu$ and standard deviation $\sigma$. Its density is

$$
p(x\mid\mu,\sigma)=\frac{e^{-(x-\mu)^2/(2\sigma^2)}}{\sqrt{2\pi\sigma^2}}.
$$

Which values of $\mu$ and $\sigma$ best describe the observations? The notes suggest viewing the counts by height.

![[Kyle Kabasares - Mathematical Modeling - Histogram of height measurements.png|**Fig. 39** A histogram groups the observations by height to show the distribution of measurements.]]

## Source

Kyle Kabasares, *Mathematical Modeling (Math 150, UC Merced 2017)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\Delta x}$ | $\unit{m}$ | Grid spacing | Width of a spatial cell in the walker model. |
| $\mechanical{\Delta t}$ | $\unit{s}$ | Time step | Interval between snapshots of the walker model. |
| $\mechanical{D}$ | $\unit{m^2\,s^{-1}}$ | Variance growth rate | The ratio $(\mechanical{\Delta x})^2/\mechanical{\Delta t}$ and twice the coefficient in the diffusion equation. |
| $\mechanical{U}$ | $\unit{m\,s^{-1}}$ | Drift velocity | Continuum advection velocity produced by the scaled random-walk bias. |
| $t$, $1/\alpha$ | $\unit{s}$ | Elapsed time | Time in the population model and time for one factor of $e$ of exponential growth, expressed in the chosen time unit. |
| $M$ | 1 | Carrying capacity | Population that the modeled resources can sustain at equilibrium. |
| $\delta$ | $\unit{s^{-1}}$ | Wolf decline rate | Fractional rate of decline in the absence of prey. |
| $x$, $y$ | $\unit{oz}$ | Ingredient amounts | Onion soup and chicken stock per serving, respectively. |
| $s$ | $\unit{g}$ | Protein surplus | Protein above the minimum required per serving. |
| $t$ | — | Iron surplus | Iron above the minimum required per serving, in the unspecified iron units of the exercise. |
