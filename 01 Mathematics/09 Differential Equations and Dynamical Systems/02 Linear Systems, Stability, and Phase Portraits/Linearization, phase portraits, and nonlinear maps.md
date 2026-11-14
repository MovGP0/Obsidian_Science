---
title: "Linearization, phase portraits, and nonlinear maps"
---

> [!TLDR]
> Use local eigenvalues to predict behavior near equilibria and distinguish continuous dynamics from discrete iterates.

## Worked lecture material

The top margin gives the quadratic Taylor approximation in one variable.

$$
f(x)\approx f(a)+f'(a)(x-a)+\frac12 f''(a)(x-a)^2.
$$

##### Linearize the predator–prey equations

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

The goals are to review linearization of a differential-equation system and work on implementing a second-order Runge–Kutta solver. Find an equilibrium of

$$
\frac{dx}{dt}=f_1(x,y)=3x-y^2,\qquad
\frac{dy}{dt}=f_2(x,y)=\sin y-x.
$$

The notes propose examining the behavior around one equilibrium point by setting both right-hand sides to zero.

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

##### Second-order Runge–Kutta

For $\vec x'=\vec f(t,\vec x)$, this version estimates the slope at the current point and at the Euler predictor, then averages the two.

$$
\begin{aligned}
\vec k_1&=\vec f(t_n,\vec x_n),\\
\vec k_2&=\vec f(t_n+h,\vec x_n+h\vec k_1),\\
\vec x_{n+1}&=\vec x_n+\frac h2(\vec k_1+\vec k_2).
\end{aligned}
$$

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

##### Linearized systems

For a two-dimensional system $\vec x'=A\vec x$ with $A$ a $2\times2$ matrix, $\vec x=(0,0)^T$ is an equilibrium.

Build a population model with three, four, or five age groups, give each group a death rate, and require the system to have an equilibrium. The four-group example uses $x_1$ for ages above 0 through 20, $x_2$ for ages 21 through 40, and $x_3$ for ages 41 through just under 60. The last line is written as $60>\text{age}$ for $x_4$. In this sequence it appears to mean age 60 and above. Time is measured in years, and the notes write $dx_i/dt$ for a group’s rate of change.

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

For the cases shown, use coordinates along the two eigenvectors of the linear system. Then $x_1(t)=c_1e^{\lambda_1t}$ and $x_2(t)=c_2e^{\lambda_2t}$. The initial point determines the constants.

##### Case 1. Both eigenvalues negative

The origin is asymptotically stable. A nonzero trajectory approaches $(0,0)$ as $t\to\infty$ and reaches it only in the limit.

![[Kyle Kabasares - Mathematical Modeling - Sink with two negative eigenvalues.png|**Fig. 63** Trajectories point toward the equilibrium when both exponential factors decay.]]

##### Case 3. Both eigenvalues positive

The origin is an unstable source.

![[Kyle Kabasares - Mathematical Modeling - Source with two positive eigenvalues.png|**Fig. 64** Trajectories point away from the equilibrium when both exponential factors grow.]]

##### Case 4. $\lambda_1=0$ and $\lambda_2<0$

Here $x_1(t)=c_1$ and $x_2(t)=c_2e^{\lambda_2t}$. The notes call this marginally stable. Each trajectory approaches the point $(c_1,0)$ on the line of equilibria.

![[Kyle Kabasares - Mathematical Modeling - Equilibrium line with negative transverse eigenvalue.png|**Fig. 65** The flow above and below the horizontal equilibrium line points toward it.]]

##### Case 5. $\lambda_1=0$ and $\lambda_2>0$

The first coordinate is still constant, but a nonzero second coordinate grows in magnitude. The equilibrium line is unstable.

![[Kyle Kabasares - Mathematical Modeling - Equilibrium line with positive transverse eigenvalue.png|**Fig. 66** The flow above and below the horizontal equilibrium line points away from it.]]

##### Case 6. Both eigenvalues zero

The page illustrates the diagonalizable case, for which $A=0$. The coordinates stay constant, $x_1(t)=c_1$ and $x_2(t)=c_2$, and both derivatives vanish. The notes describe this as marginally stable. A nondiagonalizable matrix with two zero eigenvalues can instead have a term linear in $t$.

![[Kyle Kabasares - Mathematical Modeling - Phase plane of the zero matrix.png|**Fig. 67** Every point is an equilibrium for $A=0$.]]

For a conjugate pair $a\pm ib$ with $b\ne0$, the two complex modes have factors $e^{at}e^{ibt}$ and $e^{at}e^{-ibt}$. The oscillatory factors give rotation in the real phase plane, and the factor $e^{at}$ determines whether the amplitude decays or grows.

##### Case 7. $a<0$

The origin is a stable spiral.

![[Kyle Kabasares - Mathematical Modeling - Spiral sink phase portrait.png|**Fig. 68** The trajectory spirals inward as the oscillations decay.]]

##### Case 8. $a>0$

The origin is an unstable spiral.

![[Kyle Kabasares - Mathematical Modeling - Spiral source phase portrait.png|**Fig. 69** The trajectory spirals outward as the oscillations grow.]]

##### Case 9. $a=0$

The mode factors reduce to $e^{ibt}$ and $e^{-ibt}$. The linear system has a center.

![[Kyle Kabasares - Mathematical Modeling - Center phase portrait.png|**Fig. 70** Closed trajectories surround the center when the eigenvalues are purely imaginary.]]

A nonlinear system can have several equilibria. With unique solutions, distinct phase trajectories cannot cross. Trajectories can loop around an equilibrium or connect an equilibrium to infinity, meaning $x_1^2+x_2^2\to\infty$ along the unbounded end. A trajectory can also be unbounded in both time directions, which the notes describe as going from $-\infty$ to $+\infty$.

![[Kyle Kabasares - Mathematical Modeling - Trajectories near multiple equilibria.png|**Fig. 71** The sketch shows trajectories directed toward one location and a loop around another equilibrium.]]

Long-term behavior can differ between regions of the phase plane. The basin of attraction of an attracting equilibrium consists of the initial points whose trajectories converge to it. Separatrices divide regions with different behaviors. The axes in the saddle example are separatrices.

##### Difference equations and the Fibonacci sequence

The notes include a reminder to look up biological examples of the Fibonacci sequence. A difference equation expresses the next term in terms of earlier ones.

$$
y_n=f(y_{n-1},y_{n-2},\ldots,y_{n-k}),
\qquad
y_1=A_1,\quad y_2=A_2,\quad\ldots,\quad y_k=A_k.
$$

Together with the $k$ initial values, this recurrence defines the sequence.

Euler's method for the differential equation $dy/dt=f(y)$ gives the first-order recurrence

$$
y_n=y_{n-1}+\Delta t\,f(y_{n-1})=g(y_{n-1}).
$$

In a population model, $y_n$ can count individuals in generation $n$.

##### Linear difference equations

For $y_n=\alpha y_{n-1}$ and $y_0=A$, the solution is $y_n=\alpha^nA$. The Fibonacci sequence instead satisfies $x_n=x_{n-1}+x_{n-2}$, with $x_0=0$ and $x_1=1$. Its next terms are $x_2=1$, $x_3=2$, and $x_4=3$.

The notes write a general homogeneous recurrence of order $k$ as

$$
a_ny_n+a_{n-1}y_{n-1}+\cdots+a_{n-k}y_{n-k}=0.
$$

For the characteristic-root method, the coefficients at each lag are held fixed as $n$ varies. Try $y_n=cr^n$. Substitution and factoring give

$$
cr^{n-k}\bigl(a_nr^k+a_{n-1}r^{k-1}+\cdots+a_{n-k}\bigr)=0.
$$

For a nonzero mode with $c\ne0$ and $r\ne0$, the parenthesized factor is the characteristic polynomial of degree $k$. With $k$ distinct nonzero roots $r_j$, the general solution has the form $y_n=\sum_{j=1}^k c_jr_j^n$. The page compares this form with a mode of the differential system $d\vec y/dt=A\vec y$, where $y_j=c_je^{\lambda_jt}=c_j(e^{\lambda_j})^t$ in eigenvector coordinates.

Use the starting values of the recurrence to determine the constants $c_j$.

##### Reducing the number of parameters

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

##### Nonlinear difference equations

Start with the logistic differential equation $dy/dt=\alpha y(1-y)$.

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

## Source

Kyle Kabasares, *Mathematical Modeling (Math 150, UC Merced 2017)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $R$ | 1 | Population | Number of animals in the isolated system. |
| $t$, $1/\alpha$ | $\unit{s}$ | Elapsed time | Time in the population model and time for one factor of $e$ of exponential growth, expressed in the chosen time unit. |
| $\alpha$ | $\unit{s^{-1}}$ | Population growth rate | Fractional rate of increase, expressed in the inverse of the chosen time unit. |
| $\beta$ | $\unit{s^{-1}}$ | Crowding coefficient | Coefficient of the quadratic reduction in growth when population is counted as a dimensionless number. |
| $W$ | 1 | Wolf population | Number of predators in the rabbit and wolf model. |
| $\delta$ | $\unit{s^{-1}}$ | Wolf decline rate | Fractional rate of decline in the absence of prey. |
| $\beta$ | 1 | Predator effect coefficient | Reciprocal of the wolf count at which the rabbit growth term vanishes. |
| $\gamma$ | 1 | Prey effect coefficient | Reciprocal of the rabbit count at which the wolf growth term vanishes. |
| $\bar R$, $\bar W$ | 1 | Relative populations | Rabbit and wolf populations divided by their respective nonzero equilibrium values. |
| $\bar t$ | 1 | Rescaled time | Elapsed time multiplied by the rabbit growth rate. |
| $\epsilon$ | 1 | Rate ratio | Ratio of the wolf decline rate to the rabbit growth rate. |
| $T$ | $\unit{s}$ | Sampling period | Time between successive measurements at the same phase. |
| $\lambda$ | $\unit{s^{-1}}$ | Lyapunov exponent | Exponential rate of growth or decay of a perturbation in time. |
| $x$, $y$ | $\unit{oz}$ | Ingredient amounts | Onion soup and chicken stock per serving, respectively. |
| $s$ | $\unit{g}$ | Protein surplus | Protein above the minimum required per serving. |
| $t$ | — | Iron surplus | Iron above the minimum required per serving, in the unspecified iron units of the exercise. |
