---
title: "Finite differences and Richardson calculations"
---

> [!TLDR]
> Use Taylor expansions to derive difference formulas and combine step sizes to cancel leading errors.

## Worked lecture material

For the previous example, set $f(t)=\tfrac12(9+5t)\cos((9+5t)/2)$. Two-point Gaussian quadrature gives

$$
\int_2^7 x\cos x\,dx\approx\frac52\bigl[f(-\sqrt3/3)+f(\sqrt3/3)\bigr].
$$

##### Approximating derivatives

Numerical derivatives help solve differential equations when a closed form is unavailable. As motivation, suppose the position $\mechanical{f}(x)$ of a particle moving along a line is known at several times $x$. Estimate the signed velocity at $x=1.2$ from the two recorded positions. The speed is the magnitude of that velocity.

$$
\mechanical{f}'(1.2)\approx\frac{\mechanical{f}(1.2)-\mechanical{f}(1.1)}{1.2-1.1}.
$$

The notes give no units for these sample times or positions.

For a general function, put $x=a+h$ in the definition of the derivative.

$$
f'(a)=\lim_{x\to a}\frac{f(x)-f(a)}{x-a}
=\lim_{h\to0}\frac{f(a+h)-f(a)}h.
$$

The second-degree Taylor formula is

$$
f(a+h)=f(a)+hf'(a)+\frac{h^2}{2!}f''(a)+\frac{h^3}{3!}f^{(3)}(\xi).
$$

Here $\xi$ is between $a$ and $a+h$. Using the first-degree formula with its second-derivative remainder instead gives

$$
\frac{f(a+h)-f(a)}h=f'(a)+\frac h2 f''(\xi).
$$

The absolute error in the two-point difference is

$$
\left|f'(a)-\frac{f(a+h)-f(a)}{h}\right|=\frac{|h|}{2}|f''(\xi)|.
$$

For the position example, $a=1.2$ and $h=-0.1$, so the backward difference has first-order error, with magnitude bounded by $0.1$ times half a bound on the second derivative.

For a better approximation, take the centered difference. Expand $f(a+h)$ and $f(a-h)$ about $a$, with $\xi_+$ and $\xi_-$ in the respective intervals. Subtraction cancels the constant and quadratic terms.

$$
\begin{aligned}
f(a+h)-f(a-h)&=2hf'(a)+\frac{h^3}{3!}\bigl[f^{(3)}(\xi_+)+f^{(3)}(\xi_-)\bigr],\\
f'(a)-\frac{f(a+h)-f(a-h)}{2h}
&=-\frac{h^2}{12}\bigl[f^{(3)}(\xi_+)+f^{(3)}(\xi_-)\bigr].
\end{aligned}
$$

The centered difference is second order when the third derivative is bounded. The notes distinguish the two-point forward formula ($h>0$) and backward formula ($h<0$), the three-point midpoint formula, and the three-point endpoint formula.

##### Richardson extrapolation

What if the data are unequally spaced?

| $x$ | $1.2$ | $1.225$ | $1.3$ |
| --- | ---: | ---: | ---: |
| $f(x)$ | $6.04967$ | $6.280817$ | $7.0286876$ |

![[Kyle Kabasares - Numerical Analysis - Unequally spaced derivative samples.png|**Fig. 30** Samples at $1.2$, $1.225$ and $1.3$ provide two forward step sizes from the first node.]]

The short-step forward difference gives

$$
f'(1.2)\approx\frac{f(1.225)-f(1.2)}{1.225-1.2}.
$$

The notes report $9.24676445$, with absolute error $0.17229325$. The extrapolated estimate is

$$
f'(1.2)\approx \frac13\left[
4\frac{f(1.225)-f(1.2)}{1.225-1.2}
-\frac{f(1.3)-f(1.2)}{1.3-1.2}\right],
$$

reported as $9.065552213$ with absolute error $0.008919$. The displayed sample values on the preceding page are rounded.

Let $M=f'(1.2)$ be the target and $N(h)=[f(1.2+h)-f(1.2)]/h$ the approximation. Taylor expansion about a general $x$ gives

$$
f(x+h)=f(x)+hf'(x)+\frac{h^2}{2!}f''(x)+\frac{h^3}{3!}f^{(3)}(x)+\cdots.
$$

Subtract $f(x)$ and divide by $h$. At $x=1.2$, this gives $M-N(h)=K_1h+K_2h^2+K_3h^3+\cdots$, with $K_1=-f''(1.2)/2!$ and $K_2=-f^{(3)}(1.2)/3!$. The long step is $h=0.1$, so $N(h)=[f(1.3)-f(1.2)]/0.1$. The short step is $h/4=0.025$, so

$$
M-N(h/4)=K_1(h/4)+K_2(h/4)^2+K_3(h/4)^3+\cdots.
$$

The short-step estimate is $N(0.025)=[f(1.225)-f(1.2)]/0.025$. Multiply the error equation for $h/4$ by $4$ and subtract the equation for $h$. The $K_1h$ terms cancel.

$$
\begin{aligned}
3M-4N(h/4)+N(h)&=K_2(h^2/4-h^2)+O(h^3),\\
M-\frac{4N(h/4)-N(h)}3&=-\frac{K_2}{4}h^2+O(h^3).
\end{aligned}
$$

##### Unequal steps on opposite sides

| $x$ | $1.15$ | $1.2$ | $1.3$ |
| --- | ---: | ---: | ---: |
| $f(x)$ | $5.612521$ | $6.049647$ | $7.0286876$ |

The more precise value for $f(1.2)$ here clarifies the entry on [[#Richardson extrapolation|the section on Richardson extrapolation]]. The notes give $[f(1.3)-f(1.2)]/0.1\approx9.790401$. They report $8.472527$ for $[f(1.15)-f(1.2)]/(-0.05)$, while the displayed samples give approximately $8.74252$.

Seek a higher-accuracy estimate of $M=f'(1.2)$ using $N(h)$ with $h=0.1$ and $N(-h/2)$ with $-h/2=-0.05=1.15-1.2$. The Taylor expansion gives $M-N(h)=-f''(1.2)h/2!-f^{(3)}(1.2)h^2/3!+\cdots$ as before.

Add twice the error expansion for $-h/2$ to the expansion for $h$. The $K_1$ terms cancel and

$$
\begin{aligned}
3M-2N(-h/2)-N(h)&=\tfrac32 K_2 h^2+O(h^3),\\
M-\frac{2N(-h/2)+N(h)}3&=O(h^2).
\end{aligned}
$$

The annotated numerical estimates are $N(-h/2)=8.742529$ and $N(h)=9.790401$. The squared step is positive, so the first equation uses $2(-h/2)^2+h^2=3h^2/2$.

##### Adding a third step size

A sample at $x=1.4$ gives a step of $0.2=2h$. Combine the three errors $M-N(2h)$, $a(M-N(h))$ and $b(M-N(-h/2))$. To cancel the terms in $K_1h$ and $K_2h^2$, require

$$
2+a-\tfrac12b=0,\qquad 4+a+\tfrac14b=0.
$$

Solve the system to obtain

$$
\begin{bmatrix}a\\b\end{bmatrix}
=\frac43\begin{bmatrix}1/4&1/2\\-1&1\end{bmatrix}
\begin{bmatrix}-2\\-4\end{bmatrix}
=\begin{bmatrix}-10/3\\-8/3\end{bmatrix}.
$$

The combined coefficient of $M$ is $1+a+b=-5$. Dividing by it gives the third-order approximation

$$
M=-\tfrac15\left[N(2h)-\tfrac{10}{3}N(h)-\tfrac83N(-h/2)\right]+O(h^3).
$$

##### Finite differences

The derivative is the limit of the forward quotient as $h\to0$. Substitute the Taylor expansion of $f(x_0+h)$ about $x_0$ and cancel $f(x_0)$. Retaining the remainder after the first derivative gives

$$
\frac{f(x_0+h)-f(x_0)}h=f'(x_0)+\frac h2 f''(\xi),
$$

where $\xi$ lies between $x_0$ and $x_0+h$. Thus the forward difference has error of order $h$.

For $h>0$, the backward and centered approximations are

$$
f'(x_0)\approx\frac{f(x_0)-f(x_0-h)}h,\qquad
f'(x_0)\approx\frac{f(x_0+h)-f(x_0-h)}{2h},
$$

respectively.

To use four nodes, interpolate $f$ at $x_0-h$, $x_0$, $x_0+h$ and $x_0+2h$ with a cubic $P_3$, then approximate $f'(x_0)$ by $P_3'(x_0)$. This has the form

$$
a_1 f(x_0-h)+a_2f(x_0)+a_3f(x_0+h)+a_4f(x_0+2h).
$$

The first term of $P_3(x)$ in the Lagrange representation is

$$
f(x_0-h)\frac{(x-x_0)(x-x_0-h)(x-x_0-2h)}{(-h)(-2h)(-3h)}.
$$

The other terms follow on the next page.

With $u=x-x_0$, the three remaining terms of the Lagrange interpolant are

$$
f(x_0)\frac{(u+h)(u-h)(u-2h)}{2h^3}
-f(x_0+h)\frac{(u+h)u(u-2h)}{2h^3}
+f(x_0+2h)\frac{(u+h)u(u-h)}{6h^3}.
$$

Differentiate each numerator and evaluate at $u=0$. In node order $x_0-h,x_0,x_0+h,x_0+2h$, the numerator derivatives are $2h^2,-h^2,-2h^2,-h^2$. The handwritten boxed formula drops the $f(x_0)$ term. Retaining its derivative gives

$$
f'(x_0)\approx P_3'(x_0)
=\frac{-\tfrac13 f(x_0-h)-\tfrac12 f(x_0)+f(x_0+h)-\tfrac16 f(x_0+2h)}{h}.
$$

**Richardson extrapolation**

The forward quotient $D(h)=[f(x_0+h)-f(x_0)]/h$ satisfies $f'(x_0)=D(h)-hf''(\xi)/2$. The error depends on $h$. For a sufficiently smooth $f$, express the target as $D(h)+N_1h+N_2h^2+N_3h^3+\cdots$ to see how combining steps cancels powers of $h$.

For half the step size,

$$
f'(x_0)=D(h/2)+N_1(h/2)+N_2(h/2)^2+N_3(h/2)^3+\cdots,
\qquad D(h/2)=\frac{f(x_0+h/2)-f(x_0)}{h/2}.
$$

Take twice this equation minus the corresponding equation for $h$. The first-order terms cancel, giving

$$
f'(x_0)=2D(h/2)-D(h)-\tfrac12N_2h^2+O(h^3).
$$

The extrapolated approximation is second order.

The review note labeled “Gaussian Quadrature” here shows the endpoint **trapezoidal rule**, $\int_{x_0}^{x_0+h} f(x)\,dx\approx (h/2)[f(x_0)+f(x_0+h)]$.

![[Kyle Kabasares - Numerical Analysis - Endpoint trapezoid.png|**Fig. 31** A trapezoid based on the function values at the two endpoints.]]

##### Closed Newton–Cotes formulas

Approximate $\int_a^b f(x)\,dx$ by integrating the Lagrange interpolant on equally spaced nodes that include $a$ and $b$. Five nodes give an interpolant of degree at most four.

![[Kyle Kabasares - Numerical Analysis - Five closed Newton-Cotes nodes.png|**Fig. 32** Five equally spaced interpolation nodes with $x_0=a$ and $x_4=b$.]]

## Source

Kyle Kabasares, *Numerical Analysis (Math 130, UC Merced 2016)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $x$ | $\unit{s}$ | Time | Independent variable in the particle example. The recorded values have no specified unit. |
| $\mechanical{f}(x)$ | $\unit{m}$ | Position | Signed position along the particle's line of motion. |
