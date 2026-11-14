---
title: "Integration by parts and trigonometric substitutions"
---

> [!TLDR]
> Worked integrals use integration by parts, trigonometric powers, and substitutions based on right triangles.

## Worked lecture material

#### Integration by parts

$$
\int u\,dv=uv-\int v\,du.
$$

**Example 1.** For $\int xe^{-x}\,dx$, take $u=x$ and $dv=e^{-x}\,dx$. Then $du=dx$ and $v=-e^{-x}$.

$$
\int xe^{-x}\,dx=-xe^{-x}-\int(-e^{-x})\,dx
=-xe^{-x}+\int e^{-x}\,dx
=-xe^{-x}-e^{-x}+C.
$$

**Example 2.** For $\int\ln x\,dx$, take $u=\ln x$ and $dv=dx$. Then $du=dx/x$ and $v=x$.

$$
\int\ln x\,dx=x\ln x-\int x\frac1x\,dx
=x\ln x-\int dx
=x\ln x-x+C.
$$

**Example 3.** For $\int x5^x\,dx$, take $u=x$ and $dv=5^x\,dx$. Then $du=dx$ and $v=5^x/\ln 5$.

$$
\begin{aligned}
\int x5^x\,dx
&=\frac{x5^x}{\ln 5}-\int\frac{5^x}{\ln 5}\,dx\\
&=\frac{x5^x}{\ln 5}-\frac1{\ln 5}\int 5^x\,dx
=\frac{x5^x}{\ln 5}-\frac{5^x}{(\ln 5)^2}+C.
\end{aligned}
$$

**1.** For $\int_1^2 (\ln x)/x^2\,dx$, take $u=\ln x$ and $dv=x^{-2}\,dx$. Then $du=dx/x$ and $v=-x^{-1}$.

$$
\begin{aligned}
\int_1^2\frac{\ln x}{x^2}\,dx
&=\left[-\frac{\ln x}{x}\right]_1^2+\int_1^2\frac{dx}{x^2}\\
&=\left[-\frac{\ln x}{x}-\frac1x\right]_1^2\\
&=\left(-\frac{\ln 2}{2}-\frac12\right)-(0-1)
=\frac12-\frac{\ln 2}{2}.
\end{aligned}
$$

**2.** For $\int(\ln x)^2\,dx$, take $u=(\ln x)^2$ and $dv=dx$. Then $du=2(\ln x)\,dx/x$ and $v=x$, giving

$$
\int(\ln x)^2\,dx=x(\ln x)^2-2\int\ln x\,dx.
$$

For the remaining integral take $p=\ln x$ and $dw=dx$, so $dp=dx/x$ and $w=x$. An antiderivative is $x\ln x-\int 1\,dx=x\ln x-x$, with the constant included in the final result.

$$
\int(\ln x)^2\,dx=x(\ln x)^2-2(x\ln x-x)+C.
$$

**1. Repeated integration by parts.** Let $I$ denote an antiderivative of $e^{2x}\sin x$. First take $u=e^{2x}$ and $dv=\sin x\,dx$, so $du=2e^{2x}\,dx$ and $v=-\cos x$. Then

$$
I=-e^{2x}\cos x+2\int e^{2x}\cos x\,dx.
$$

For the remaining integral, take $p=e^{2x}$ and $dw=\cos x\,dx$, so $dp=2e^{2x}\,dx$ and $w=\sin x$. This gives

$$
\int e^{2x}\cos x\,dx=e^{2x}\sin x-2I.
$$

With constants collected at the end, substitution gives $I=-e^{2x}\cos x+2e^{2x}\sin x-4I$. Therefore

$$
\int e^{2x}\sin x\,dx
=\frac{-e^{2x}\cos x+2e^{2x}\sin x}{5}+C.
$$

**2.** For $\int x^3\ln x\,dx$, take $u=\ln x$ and $dv=x^3\,dx$. Then $du=dx/x$ and $v=x^4/4$.

$$
\int x^3\ln x\,dx
=\frac{x^4\ln x}{4}-\int\frac{x^4}{4}\frac{dx}{x}
=\frac{x^4\ln x}{4}-\int\frac{x^3}{4}\,dx
=\frac{x^4\ln x}{4}-\frac{x^4}{16}+C.
$$

#### Trigonometric integrals

For $\int\sin^m x\cos^n x\,dx$, if either exponent is odd, set aside one factor of the corresponding function. Use $\sin^2 x+\cos^2 x=1$ to rewrite the remaining even power.

**1.** Separate one sine factor and set $u=\cos x$, so $du=-\sin x\,dx$.

$$
\begin{aligned}
\int\sin^3 x\cos^2 x\,dx
&=\int(1-\cos^2 x)\cos^2 x\sin x\,dx\\
&=-\int(1-u^2)u^2\,du
=-\int(u^2-u^4)\,du\\
&=-\frac{\cos^3 x}{3}+\frac{\cos^5 x}{5}+C.
\end{aligned}
$$

**2.** Separate one cosine factor and set $u=\sin x$, so $du=\cos x\,dx$.

$$
\begin{aligned}
\int\cos^3 x\,dx
&=\int\cos^2 x\cos x\,dx
=\int(1-\sin^2 x)\cos x\,dx\\
&=\int(1-u^2)\,du
=u-\frac{u^3}{3}+C\\
&=\sin x-\frac{\sin^3 x}{3}+C.
\end{aligned}
$$

#### Odd powers

For $\int\sin^3 x\cos^3 x\,dx$, separate one factor of $\cos x$ and put $u=\sin x$, $du=\cos x\,dx$.

$$
\begin{aligned}
\int\sin^3 x\cos^3 x\,dx
&=\int\sin^3 x(1-\sin^2 x)\cos x\,dx\\
&=\int u^3(1-u^2)\,du
=\int(u^3-u^5)\,du\\
&=\frac{u^4}{4}-\frac{u^6}{6}+C
=\frac{\sin^4 x}{4}-\frac{\sin^6 x}{6}+C.
\end{aligned}
$$

#### Even powers

When both exponents $m$ and $n$ are even, use the half-angle formulas

$$
\cos^2 x=\frac12(1+\cos 2x),
\qquad
\sin^2 x=\frac12(1-\cos 2x).
$$

For example,

$$
\int\cos^2 x\,dx
=\frac12\int(1+\cos 2x)\,dx
=\frac12\left(x+\frac{\sin 2x}{2}\right)+C
=\frac{x}{2}+\frac{\sin 2x}{4}+C.
$$

Apply the half-angle identities to both squared factors.

$$
\begin{aligned}
\int\sin^2 x\cos^2 x\,dx
&=\frac14\int(1-\cos 2x)(1+\cos 2x)\,dx\\
&=\frac14\int(1-\cos^2(2x))\,dx
=\frac14\int\sin^2(2x)\,dx\\
&=\frac18\int(1-\cos 4x)\,dx
=\frac{x}{8}-\frac{\sin 4x}{32}+C.
\end{aligned}
$$

#### Product-to-sum identities

$$
\begin{aligned}
\sin A\cos B&=\tfrac12[\sin(A-B)+\sin(A+B)],\\
\sin A\sin B&=\tfrac12[\cos(A-B)-\cos(A+B)],\\
\cos A\cos B&=\tfrac12[\cos(A-B)+\cos(A+B)].
\end{aligned}
$$

For example,

$$
\begin{aligned}
\int\sin(5x)\sin(2x)\,dx
&=\frac12\int[\cos(5x-2x)-\cos(5x+2x)]\,dx\\
&=\frac12\int[\cos(3x)-\cos(7x)]\,dx
=\frac{\sin(3x)}{6}-\frac{\sin(7x)}{14}+C.
\end{aligned}
$$

#### Product-to-sum example

$$
\begin{aligned}
\int\sin(3x)\sin(6x)\,dx
&=\int\sin(6x)\sin(3x)\,dx\\
&=\frac12\int[\cos(6x-3x)-\cos(6x+3x)]\,dx\\
&=\frac12\int[\cos(3x)-\cos(9x)]\,dx\\
&=\frac12\left[\frac{\sin(3x)}{3}-\frac{\sin(9x)}{9}\right]+C\\
&=\boxed{\frac{\sin(3x)}{6}-\frac{\sin(9x)}{18}+C}.
\end{aligned}
$$

#### Integrals of tangent and secant

For $\int\tan^m x\sec^n x\,dx$:

- If both $m$ and $n$ are even and $n\ge 2$, separate a factor of $\sec^2 x$.
- If $m$ is odd and $n\ge 1$, separate a factor of $\sec x\tan x$.

The handwritten “if odd” is read as referring to the exponent $m$ of tangent.

**Identities**

$$
\begin{aligned}
\sec^2 x&=\tan^2 x+1,\\
\frac{d}{dx}(\sec x)&=\sec x\tan x,\\
\frac{d}{dx}(\tan x)&=\sec^2 x,\\
\int\tan x\,dx&=\ln|\sec x|+C,\\
\int\sec x\,dx&=\ln|\sec x+\tan x|+C.
\end{aligned}
$$

**Example.** Use $u=\tan x$, so $du=\sec^2 x\,dx$.

$$
\begin{aligned}
\int\tan^6 x\sec^4 x\,dx
&=\int\tan^6 x\sec^2 x\sec^2 x\,dx\\
&=\int\tan^6 x(\tan^2 x+1)\sec^2 x\,dx\\
&=\int u^6(u^2+1)\,du\\
&=\int(u^8+u^6)\,du\\
&=\frac{u^9}{9}+\frac{u^7}{7}+C\\
&=\boxed{\frac{\tan^9 x}{9}+\frac{\tan^7 x}{7}+C}.
\end{aligned}
$$

#### Area of a circle by trigonometric substitution

**Example.** Use integration to prove that the area of a circle of radius $a$ is $\pi a^2$.

![[Kyle Kabasares - Integral Calculus - Circle area by integration.png|**Fig. 4** A circle of radius $a$ centered at the origin, with a right triangle in the first quadrant.]]

$$
x^2+y^2=a^2,\qquad y^2=a^2-x^2,\qquad y=\sqrt{a^2-x^2}
$$

The positive square root describes the upper semicircle. By symmetry, multiply the first-quadrant area by four. Use $x=a\sin\theta$, so $dx=a\cos\theta\,d\theta$. The endpoint $x=0$ gives $\sin\theta=0$ and $\theta=0$, while $x=a$ gives $\sin\theta=1$ and $\theta=\pi/2$.

$$
\begin{aligned}
4\int_0^a\sqrt{a^2-x^2}\,dx
&=4\int_0^{\pi/2}\sqrt{a^2-(a\sin\theta)^2}\,a\cos\theta\,d\theta\\
&=4\int_0^{\pi/2}\sqrt{a^2\cos^2\theta}\,a\cos\theta\,d\theta\\
&=4\int_0^{\pi/2}a\cos\theta\cdot a\cos\theta\,d\theta\\
&=4a^2\int_0^{\pi/2}\cos^2\theta\,d\theta\\
&=4a^2\int_0^{\pi/2}\frac12(1+\cos 2\theta)\,d\theta\\
&=2a^2\left[\theta+\frac{\sin 2\theta}{2}\right]_0^{\pi/2}\\
&=2a^2\left[\left(\frac{\pi}{2}+\frac{\sin\pi}{2}\right)
-\left(0+\frac{\sin 0}{2}\right)\right]\\
&=2a^2\cdot\frac{\pi}{2}
=\boxed{\pi a^2}.
\end{aligned}
$$

The transcription uses the angular limit $\pi/2$ throughout the substitution, as in the final evaluation in the handwritten notes. The substitution angle is complementary to the angle labeled $\theta$ in the sketch.

**Example.** Evaluate $\displaystyle\int\frac{dx}{x^2\sqrt{x^2+4}}$. Substitute $x=2\tan\theta$, so $dx=2\sec^2\theta\,d\theta$. Choose $-\pi/2<\theta<\pi/2$ so $\sec\theta>0$.

$$
\begin{aligned}
\int\frac{dx}{x^2\sqrt{x^2+4}}
&=\int\frac{2\sec^2\theta}{4\tan^2\theta\sqrt{4\tan^2\theta+4}}\,d\theta\\
&=\int\frac{2\sec^2\theta}{4\tan^2\theta\sqrt{4(\tan^2\theta+1)}}\,d\theta\\
&=\int\frac{2\sec^2\theta}{4\tan^2\theta\cdot 2\sec\theta}\,d\theta\\
&=\frac14\int\frac{\sec\theta}{\tan^2\theta}\,d\theta\\
&=\frac14\int\frac{1}{\cos\theta}\frac{\cos^2\theta}{\sin^2\theta}\,d\theta
=\frac14\int\frac{\cos\theta}{\sin^2\theta}\,d\theta.
\end{aligned}
$$

Set $u=\sin\theta$, so $du=\cos\theta\,d\theta$. From $\tan\theta=x/2$, the triangle gives $\sin\theta=x/\sqrt{x^2+4}$ for $x>0$. The same relation holds for negative $x$ in the chosen angular interval.

![[Kyle Kabasares - Integral Calculus - Tangent substitution triangle.png|**Fig. 5** The triangle for the substitution $x=2\tan\theta$.]]

$$
\frac14\int\frac{du}{u^2}
=\frac14\int u^{-2}\,du
=-\frac{1}{4u}+C
=-\frac{1}{4\sin\theta}+C
=\boxed{-\frac{\sqrt{x^2+4}}{4x}+C}.
$$

The handwritten final lines drop the reciprocal when integrating $u^{-2}$. The transcription restores it.

**Example.** Evaluate $\displaystyle\int\frac{\sqrt{x^2-9}}{x}\,dx$ on the branch $x>3$ shown in the sketch. Set $x=3\sec\theta$, so $dx=3\sec\theta\tan\theta\,d\theta$, with $0<\theta<\pi/2$.

$$
\begin{aligned}
\int\frac{\sqrt{x^2-9}}{x}\,dx
&=\int\frac{\sqrt{9\sec^2\theta-9}}{3\sec\theta}\,3\sec\theta\tan\theta\,d\theta\\
&=\int\sqrt{9(\sec^2\theta-1)}\tan\theta\,d\theta\\
&=\int 3\tan\theta\tan\theta\,d\theta
=3\int\tan^2\theta\,d\theta\\
&=3\int(\sec^2\theta-1)\,d\theta
=3\tan\theta-3\theta+C.
\end{aligned}
$$

![[Kyle Kabasares - Integral Calculus - Secant substitution triangle.png|**Fig. 6** The triangle for the substitution $x=3\sec\theta$.]]

The triangle gives $\sec\theta=x/3$, $\cos\theta=3/x$, and $\tan\theta=\sqrt{x^2-9}/3$. Therefore,

$$
3\tan\theta-3\theta+C
=3\frac{\sqrt{x^2-9}}{3}-3\arccos\left(\frac{3}{x}\right)+C
=\boxed{\sqrt{x^2-9}-3\arccos\left(\frac{3}{x}\right)+C}.
$$

**Example.** Evaluate $\displaystyle\int\tan^5\theta\sec^7\theta\,d\theta$. Separate $\sec\theta\tan\theta$ for the substitution $u=\sec\theta$, with $du=\sec\theta\tan\theta\,d\theta$.

$$
\begin{aligned}
\int\tan^5\theta\sec^7\theta\,d\theta
&=\int\tan^4\theta\sec^6\theta\cdot\sec\theta\tan\theta\,d\theta\\
&=\int\tan^2\theta\tan^2\theta\sec^6\theta\cdot\sec\theta\tan\theta\,d\theta\\
&=\int(\sec^2\theta-1)(\sec^2\theta-1)\sec^6\theta\cdot\sec\theta\tan\theta\,d\theta\\
&=\int(u^2-1)(u^2-1)u^6\,du\\
&=\int(u^4-2u^2+1)u^6\,du\\
&=\int(u^{10}-2u^8+u^6)\,du\\
&=\frac{u^{11}}{11}-\frac{2u^9}{9}+\frac{u^7}{7}+C\\
&=\boxed{\frac{\sec^{11}\theta}{11}-\frac{2\sec^9\theta}{9}
+\frac{\sec^7\theta}{7}+C}.
\end{aligned}
$$

**Example.** Evaluate $\displaystyle\int\tan^3\theta\,d\theta$. Introduce the factor $\sec\theta/\sec\theta$ to use the same substitution.

$$
\begin{aligned}
\int\tan^3\theta\,d\theta
&=\int\tan^3\theta\frac{\sec\theta}{\sec\theta}\,d\theta\\
&=\int\frac{\tan^2\theta}{\sec\theta}\tan\theta\sec\theta\,d\theta\\
&=\int\frac{\sec^2\theta-1}{\sec\theta}\tan\theta\sec\theta\,d\theta\\
&=\int\frac{u^2-1}{u}\,du\\
&=\int\left(\frac{u^2}{u}-\frac1u\right)\,du
=\int\left(u-\frac1u\right)\,du\\
&=\frac{u^2}{2}-\ln|u|+C\\
&=\boxed{\frac{\sec^2\theta}{2}-\ln|\sec\theta|+C}.
\end{aligned}
$$

**Example.** Let $I=\int\sec^3\theta\,d\theta$. Write the integrand as $\sec^2\theta\sec\theta$ and integrate by parts.

$$
\begin{aligned}
u&=\sec\theta, & dv&=\sec^2\theta\,d\theta,\\
du&=\sec\theta\tan\theta\,d\theta, & v&=\tan\theta.
\end{aligned}
$$

$$
\begin{aligned}
I=\int u\,dv
&=uv-\int v\,du\\
&=\sec\theta\tan\theta-\int\tan\theta\sec\theta\tan\theta\,d\theta\\
&=\sec\theta\tan\theta-\int\tan^2\theta\sec\theta\,d\theta\\
&=\sec\theta\tan\theta-\int(\sec^2\theta-1)\sec\theta\,d\theta\\
&=\sec\theta\tan\theta-\int(\sec^3\theta-\sec\theta)\,d\theta\\
&=\sec\theta\tan\theta-I+\int\sec\theta\,d\theta.
\end{aligned}
$$

Use $\int\sec\theta\,d\theta=\ln|\sec\theta+\tan\theta|+C$ and solve for $I$, absorbing the resulting constant into $C$.

$$
\begin{aligned}
2I&=\sec\theta\tan\theta+\ln|\sec\theta+\tan\theta|+\text{constant},\\
\int\sec^3\theta\,d\theta
&=\boxed{\frac{\sec\theta\tan\theta}{2}
+\frac{\ln|\sec\theta+\tan\theta|}{2}+C}.
\end{aligned}
$$

#### Trigonometric substitutions

| Expression | Substitution and angular range | Identity |
| --- | --- | --- |
| $\sqrt{a^2-x^2}$ | $x=a\sin\theta$, $-\pi/2\le\theta\le\pi/2$ | $1-\sin^2\theta=\cos^2\theta$ |
| $\sqrt{a^2+x^2}$ | $x=a\tan\theta$, $-\pi/2<\theta<\pi/2$ | $1+\tan^2\theta=\sec^2\theta$ |
| $\sqrt{x^2-a^2}$ | $x=a\sec\theta$, $0\le\theta<\pi/2$ or $\pi\le\theta<3\pi/2$ | $\sec^2\theta-1=\tan^2\theta$ |

The tangent range excludes both endpoints, where tangent is undefined.

**Example.** Evaluate $\displaystyle\int\sqrt{6x-x^2-5}\,dx$. Complete the square under the radical.

$$
6x-x^2-5=-5+9-(x^2-6x+9)=4-(x-3)^2.
$$

Set $x-3=2\sin\theta$. Then $x=2\sin\theta+3$ and $dx=2\cos\theta\,d\theta$. Use $-\pi/2\le\theta\le\pi/2$ so $\cos\theta\ge 0$.

$$
\begin{aligned}
\int\sqrt{6x-x^2-5}\,dx
&=\int\sqrt{4-(x-3)^2}\,dx\\
&=\int\sqrt{4-(2\sin\theta+3-3)^2}\,2\cos\theta\,d\theta\\
&=\int\sqrt{4-4\sin^2\theta}\,2\cos\theta\,d\theta\\
&=\int\sqrt{4(1-\sin^2\theta)}\,2\cos\theta\,d\theta\\
&=\int 2\cos\theta\cdot 2\cos\theta\,d\theta\\
&=4\int\cos^2\theta\,d\theta
=2\int(1+\cos 2\theta)\,d\theta\\
&=2\left(\theta+\frac{\sin 2\theta}{2}\right)+C\\
&=2\theta+\sin 2\theta+C
=2\theta+2\sin\theta\cos\theta+C.
\end{aligned}
$$

![[Kyle Kabasares - Integral Calculus - Shifted sine substitution triangle.png|**Fig. 7** The triangle for $x-3=2\sin\theta$, drawn for $x\ge 3$.]]

$$
\theta=\arcsin\left(\frac{x-3}{2}\right),\qquad
\sin\theta=\frac{x-3}{2},\qquad
\cos\theta=\frac{\sqrt{4-(x-3)^2}}{2}.
$$

Substitute these relations to obtain

$$
\boxed{2\arcsin\left(\frac{x-3}{2}\right)
+\frac{(x-3)\sqrt{4-(x-3)^2}}{2}+C}.
$$

The square-completion step includes the compensating $+9$ to match the original radicand.

**Example.** Evaluate $\displaystyle\int\frac{dx}{x^2+2x+5}$. Complete the square to get $x^2+2x+5=(x^2+2x+1)+4=(x+1)^2+4$. Use $x+1=2\tan\theta$, so $dx=2\sec^2\theta\,d\theta$.

$$
\begin{aligned}
\int\frac{dx}{x^2+2x+5}
&=\int\frac{dx}{4+(x+1)^2}\\
&=\int\frac{2\sec^2\theta}{4+4\tan^2\theta}\,d\theta\\
&=\int\frac{2\sec^2\theta}{4(1+\tan^2\theta)}\,d\theta\\
&=\int\frac{2\sec^2\theta}{4\sec^2\theta}\,d\theta
=\int\frac12\,d\theta
=\frac12\theta+C.
\end{aligned}
$$

![[Kyle Kabasares - Integral Calculus - Shifted tangent substitution triangle.png|**Fig. 8** The triangle for $\tan\theta=(x+1)/2$, drawn for $x>-1$.]]

With $-\pi/2<\theta<\pi/2$, the inverse substitution gives

$$
\frac12\theta+C
=\boxed{\frac12\arctan\left(\frac{x+1}{2}\right)+C}.
$$

The square-completion step uses the constant $4$ alongside the square, as in the following line of the handwritten derivation.

**Example.** Evaluate $\displaystyle\int\frac{dx}{\sqrt{x^2-2x+10}}$. Complete the square to get $x^2-2x+10=(x^2-2x+1)+9=(x-1)^2+9$. Set $x-1=3\tan\theta$, so $dx=3\sec^2\theta\,d\theta$. Take $-\pi/2<\theta<\pi/2$ so $\sec\theta>0$.

$$
\begin{aligned}
\int\frac{dx}{\sqrt{x^2-2x+10}}
&=\int\frac{dx}{\sqrt{(x-1)^2+9}}\\
&=\int\frac{3\sec^2\theta}{\sqrt{9\tan^2\theta+9}}\,d\theta\\
&=\int\frac{3\sec^2\theta}{\sqrt{9(\tan^2\theta+1)}}\,d\theta\\
&=\int\frac{3\sec^2\theta}{\sqrt{9\sec^2\theta}}\,d\theta\\
&=\int\frac{3\sec^2\theta}{3\sec\theta}\,d\theta
=\int\sec\theta\,d\theta\\
&=\ln|\sec\theta+\tan\theta|+C.
\end{aligned}
$$

![[Kyle Kabasares - Integral Calculus - Triangle for reciprocal radical.png|**Fig. 9** The triangle for $x-1=3\tan\theta$, drawn for $x>1$.]]

$$
\tan\theta=\frac{x-1}{3},\qquad
\cos\theta=\frac{3}{\sqrt{(x-1)^2+9}},\qquad
\sec\theta=\frac{\sqrt{(x-1)^2+9}}{3}.
$$

The antiderivative is

$$
\boxed{\ln\left|\frac{\sqrt{(x-1)^2+9}}{3}+\frac{x-1}{3}\right|+C}.
$$

The square-completion step uses the constant $9$ alongside the square, as in the following line of the handwritten derivation.

**Example.** Evaluate $\displaystyle\int_0^1\frac{x^2}{\sqrt{9-x^2}}\,dx$. The bounds appear at the evaluation step in the handwritten notes. First find an antiderivative using $x=3\sin\theta$, so $dx=3\cos\theta\,d\theta$.

$$
\begin{aligned}
\int\frac{x^2}{\sqrt{9-x^2}}\,dx
&=\int\frac{9\sin^2\theta\cdot3\cos\theta}{\sqrt{9-9\sin^2\theta}}\,d\theta\\
&=\int\frac{9\sin^2\theta\cdot3\cos\theta}{\sqrt{9(1-\sin^2\theta)}}\,d\theta\\
&=\int\frac{9\sin^2\theta\cdot3\cos\theta}{\sqrt{9\cos^2\theta}}\,d\theta\\
&=\int\frac{9\sin^2\theta\cdot3\cos\theta}{3\cos\theta}\,d\theta
=9\int\sin^2\theta\,d\theta\\
&=\frac92\int(1-\cos 2\theta)\,d\theta
=\frac92\left(\theta-\frac{\sin 2\theta}{2}\right)+C.
\end{aligned}
$$

![[Kyle Kabasares - Integral Calculus - Sine substitution with radius three.png|**Fig. 10** A right triangle with hypotenuse $3$ for the substitution $x=3\sin\theta$.]]

The triangle gives $\sin\theta=x/3$ and $\cos\theta=\sqrt{9-x^2}/3$. Use $\theta=\arcsin(x/3)$ and $\sin(2\theta)/2=\sin\theta\cos\theta$.

$$
\begin{aligned}
\int_0^1\frac{x^2}{\sqrt{9-x^2}}\,dx
&=\frac92\left[\arcsin\left(\frac{x}{3}\right)-\frac{x}{3}\frac{\sqrt{9-x^2}}{3}\right]_0^1\\
&=\frac92\left[\arcsin\left(\frac13\right)-\frac13\frac{\sqrt{8}}3\right]
-\frac92\left[\arcsin(0)-\frac03\frac{\sqrt9}3\right]\\
&=\boxed{\frac92\arcsin\left(\frac13\right)-\frac{\sqrt8}{2}}.
\end{aligned}
$$

The handwritten evaluation carries $1/3$ into the lower-endpoint product. Substituting $x=0$ makes that product zero and removes the extra $3/2$ from the result.

## Source

Kyle Kabasares, *Calculus II - Integral Calculus (Math 22, UC Merced 2013)*.
