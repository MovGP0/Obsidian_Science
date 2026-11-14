---
title: "Markov models and population dynamics"
---

> [!TLDR]
> Estimate transition probabilities, solve for stationary distributions, and build growth or competition models from population assumptions.

## Worked lecture material

##### Markov chains

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

Two successive questions give $\vec v_{t+2}=\vec v_{t+1}P=(\vec v_tP)P=\vec v_tP^2$. Each row of a transition matrix sums to 1, including the rows of $P^2$.

##### Long-term distributions and hitting times

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

The stationary distribution for the classroom example is $\vec v_\infty=(3,5,1)/9$. The entries of the unnormalized eigenvector sum to 9.

##### Hitting times

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

##### A six-state illness model

1. Susceptible
2. Infected
3. Sick and noncontagious
4. Recovering and noncontagious
5. Immune
6. Dead

Here $p_{ij}$ is the probability of moving from state $i$ to state $j$.

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

##### Population modeling

Models with continuous variables involve differential equations. The lecture lists the sigmoid and logistic functions.

Consider an isolated system, such as an island, with a given initial number of animals. Let $R(t)$ denote the population at time $t$. The simplest growth model assumes that the rate of change is proportional to the population.

$$
\frac{dR}{dt}=\lim_{h\to0}\frac{R(t+h)-R(t)}{h}=\alpha R,
\qquad
R(t)=R(0)e^{\alpha t},\quad \alpha>0.
$$

The growth rate $\alpha$ has units of inverse time. The time $1/\alpha$ is the time required for the population to grow by a factor of $e$.

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

A probability calculation at the top of the page gives $E(p_1)=\int_{-\infty}^\infty p_1f(p_1)\,dp_1$, with $f$ the density. The notes state that $p_1$ and $p_2$ are uniform on $(0,1)$.

##### Competition between rabbits and koalas

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

##### Numerical methods for $x'=f(x)$

1. Euler's method approximates the derivative at the initial state by $(x_1-x_0)/\Delta t$. This gives $x_1=x_0+\Delta t\,f(x_0)$.
2. The second-order Runge–Kutta method shown is the explicit midpoint method. The notes give a global error of order $(\Delta t)^2$.

$$
x^*=x_n+\frac{\Delta t}{2}f(x_n),
\qquad
x_{n+1}=x_n+\Delta t\,f(x^*).
$$

##### Predator–prey models

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

## Source

Kyle Kabasares, *Mathematical Modeling (Math 150, UC Merced 2017)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
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
| $\tau$ | 1 | Total population | Sum of the four age-group populations. |
| $T$ | $\unit{s}$ | Sampling period | Time between successive measurements at the same phase. |
| $\lambda$ | $\unit{s^{-1}}$ | Lyapunov exponent | Exponential rate of growth or decay of a perturbation in time. |
| $x$, $y$ | $\unit{oz}$ | Ingredient amounts | Onion soup and chicken stock per serving, respectively. |
| $s$ | $\unit{g}$ | Protein surplus | Protein above the minimum required per serving. |
| $t$ | — | Iron surplus | Iron above the minimum required per serving, in the unspecified iron units of the exercise. |
