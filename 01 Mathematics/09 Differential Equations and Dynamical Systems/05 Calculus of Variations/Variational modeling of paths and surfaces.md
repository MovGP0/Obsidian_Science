---
title: "Variational modeling of paths and surfaces"
---

> [!TLDR]
> Vary a function while holding endpoint data fixed and derive the equations for a shortest path or surface of revolution.

## Worked lecture material

##### Functionals

A scalar function such as $f(x)=x^2$ takes a number as input and returns a number. A functional $L$ takes a function as input and returns a number.

The page gives five examples.

1. Evaluation at $a$, $L(f)=f(a)$.
2. The endpoint difference, $L(f)=f(b)-f(a)$.
3. The integral, $L(f)=\int_a^b f(t)\,dt$.
4. The integral of the square, $L(f)=\int_a^b(f(t))^2\,dt$.
5. A weighted integral, $L(f)=\int_a^b f(t)g(t)\,dt$, for a given kernel $g(t)$. The example kernel is $g(t)=1/(1+t^2)$.

The page diagrams a real scalar function as $x\mapsto f(x)$ from $\mathbb R$ into $\mathbb R$. It diagrams a functional as $f\mapsto L(f)$ from a space of functions into $\mathbb R$. The examples of function spaces are $L^1[a,b]$, with $\int_a^b|f(t)|\,dt$ finite, and $L^2[a,b]$, with $\int_a^b|f(t)|^2\,dt$ finite. The evaluation examples use a domain where point values are defined, such as continuous functions.

**6. Arc length.** The length of the graph of $f$ on $[a,b]$ is another functional.

$$
L(f)=\int_a^b\sqrt{1+f'(x)^2}\,dx.
$$

Consider functionals of the form $L(f)=\int_a^b h(f(t),f'(t))\,dt$. A variation is a small perturbation $\epsilon\eta(x)$, where $\epsilon\in\mathbb R$ and $\eta$ is chosen so the perturbed function is admissible. For fixed endpoint values, take $\eta(a)=\eta(b)=0$. Then $f+\epsilon\eta$ has the same endpoint values as $f$.

**Example.** On $[0,1]$ take $f(x)=x^2$, $\eta(x)=\sin(3\pi x)$, and $\epsilon=0.1$.

![[Kyle Kabasares - Mathematical Modeling - Endpoint preserving variation of a parabola.png|**Fig. 102** The sketch compares the parabola with a perturbed curve that has the same endpoints.]]

The notes ask whether a functional can be optimized. They write $L(f)<L(f+\epsilon\eta)$ for positive $\epsilon$ and any variation $\eta$. This strict inequality describes a strict minimum when tested on nonzero admissible variations in the relevant neighborhood. Testing both $\eta$ and $-\eta$ covers either sign of the perturbation. The next example fixes $f(a)=f_a$ and $f(b)=f_b$.

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

##### Project meeting notes

The notes list testing different gravities, considering a rover's transfer between planets, discussing a second robotic example, asking whether a small nudge causes chaos, and deciding what constitutes a realistic rover arm.

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

The notes compare the $z$ coordinates from two runs that start at $\vec y_0$ and $\vec y_0+\Delta\vec y$. They write the separation model as

$$
\left|z(\vec y_0,t)-z(\vec y_0+\Delta\vec y,t)\right|
\approx e^{\lambda t}\|\Delta\vec y\|.
$$

Denote the two values by $A$ and $B$. With the initial perturbation normalized to $\|\Delta\vec y\|=1$, taking the logarithm gives $\ln|A-B|\approx\lambda t$, hence $\lambda\approx t^{-1}\ln|A-B|$.

A run with $n$ sampled states and three coordinates can be stored in an $n\times3$ matrix. The page sketches a MATLAB procedure that preallocates a column with `zeros(length(xout),1)` and stores the norm of the difference between the two runs at each row `i`. It labels `sum(A)/length(A)` as the Lyapunov exponent. With the array populated as written, that expression averages the distances. The estimate above uses their logarithmic growth relative to the initial separation and elapsed time.

##### Euler–Lagrange equations

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

##### Arc length and surface area

The lecture lists two applications of the Euler–Lagrange equation, minimizing arc length and minimizing surface area. The next meeting is for presentations. The final project is graded 50% on the oral presentation and 50% on the written work.

The notes recall the functional $\int_a^b g(t,f(t),f'(t))\,dt$ and the stationarity equation $g_p-d(g_q)/dt=0$ with fixed endpoint values. The first example minimizes arc length between two points.

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

##### Surface of revolution

Connect $(a,f(a))$ and $(b,f(b))$ by a graph whose revolution about the horizontal axis has minimum area.

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

## Source

Kyle Kabasares, *Mathematical Modeling (Math 150, UC Merced 2017)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $R$ | 1 | Population | Number of animals in the isolated system. |
| $t$, $1/\alpha$ | $\unit{s}$ | Elapsed time | Time in the population model and time for one factor of $e$ of exponential growth, expressed in the chosen time unit. |
| $\epsilon$ | 1 | Rate ratio | Ratio of the wolf decline rate to the rabbit growth rate. |
| $T$ | $\unit{s}$ | Sampling period | Time between successive measurements at the same phase. |
| $\lambda$ | $\unit{s^{-1}}$ | Lyapunov exponent | Exponential rate of growth or decay of a perturbation in time. |
| $x$, $y$ | $\unit{oz}$ | Ingredient amounts | Onion soup and chicken stock per serving, respectively. |
| $s$ | $\unit{g}$ | Protein surplus | Protein above the minimum required per serving. |
| $t$ | — | Iron surplus | Iron above the minimum required per serving, in the unspecified iron units of the exercise. |
| $\mechanical{\theta}_1$, $\mechanical{\theta}_2$ | $\unit{rad}$ | Angular coordinates | The two angles in the rover-arm state. |
