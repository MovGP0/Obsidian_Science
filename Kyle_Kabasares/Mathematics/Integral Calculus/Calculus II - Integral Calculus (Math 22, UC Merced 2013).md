---
title: "Calculus II – Integral Calculus (Math 22, UC Merced 2013)"
---

> [!TLDR]
> These Math 22 notes develop integration techniques through worked problems and review exercises.

Source notes by Kyle Kabasares. [[Calculus II - Integral Calculus (Math 22, UC Merced 2013).pdf|Original PDF]].

Transcribed PDF pages 1–119 of 119.

## Transcription

### PDF page 1

**Math 22 final review. Basic integration (indefinite integrals)**

**Example 1.** Integrate the polynomial term by term.

$$
\begin{aligned}
\int(1+2x-4x^3)\,dx
&=\int 1\,dx+\int 2x\,dx-\int 4x^3\,dx\\
&=x+x^2-x^4+C.
\end{aligned}
$$

**Example 2.** Write the square root as a power of $x$.

$$
\begin{aligned}
\int\frac{3x-2}{\sqrt{x}}\,dx
&=\int\left(\frac{3x}{x^{1/2}}-\frac{2}{x^{1/2}}\right)\,dx\\
&=\int(3x^{1/2}-2x^{-1/2})\,dx\\
&=2x^{3/2}-4x^{1/2}+C.
\end{aligned}
$$

**Example 3.** Factor $\sin\theta$ and use $1+\tan^2\theta=\sec^2\theta$.

$$
\begin{aligned}
\int\frac{\sin\theta+\sin\theta\tan^2\theta}{\sec^2\theta}\,d\theta
&=\int\frac{\sin\theta(1+\tan^2\theta)}{\sec^2\theta}\,d\theta\\
&=\int\sin\theta\,d\theta=-\cos\theta+C.
\end{aligned}
$$

### PDF page 2

**Indefinite integral.** Expand the product before integrating.

$$
\begin{aligned}
\int(x+1)(x^2+3)\,dx
&=\int(x^3+3x+x^2+3)\,dx\\
&=\frac{x^4}{4}+\frac32x^2+\frac{x^3}{3}+3x+C.
\end{aligned}
$$

**Fundamental theorem of calculus, part 1.** If $f$ is continuous on $[a,b]$ and $g(x)=\int_a^x f(t)\,dt$, then $g'(x)=f(x)$ for $a<x<b$.

**Find the derivative.**

1. For $g(x)=\int_1^x(t^2-1)^{20}\,dt$, the theorem gives $g'(x)=(x^2-1)^{20}$.
2. Reverse the limits when the variable is in the lower bound.

   $$
   h(x)=\int_x^2[\cos(t^2)+t]\,dt=-\int_2^x[\cos(t^2)+t]\,dt,
   \qquad
   h'(x)=-[\cos(x^2)+x].
   $$

3. For $g(x)=\int_1^{\sqrt x}s^2/(s^2+1)\,ds$, use the chain rule on the upper bound. For $x>0$,

   $$
   g'(x)=\frac{(\sqrt x)^2}{(\sqrt x)^2+1}\cdot\frac12 x^{-1/2}
   =\frac{x}{x+1}\cdot\frac1{2\sqrt x}.
   $$

### PDF page 3

**Fundamental theorem of calculus, part 2.** If $F'=f$, so $F$ is an antiderivative of $f$, then

$$
\int_a^b f(x)\,dx=\left[F(x)\right]_a^b=F(b)-F(a).
$$

**Example 1**

$$
\begin{aligned}
\int_1^3(x+2)\,dx
&=\left[\frac{x^2}{2}+2x\right]_1^3\\
&=\left(\frac92+6\right)-\left(\frac12+2\right)
=8.
\end{aligned}
$$

**Example 2**

$$
\begin{aligned}
\int_1^4(x^2-2x+1)\,dx
&=\left[\frac{x^3}{3}-x^2+x\right]_1^4\\
&=\left(\frac{64}{3}-16+4\right)-\left(\frac13-1+1\right)
=9.
\end{aligned}
$$

The handwritten evaluation substitutes the integrand at the endpoints and gives $12$. Substituting the endpoints into the antiderivative gives $9$.

**Substitution.** For $\int 2x(x^2+4)^{100}\,dx$, let $u=x^2+4$, so $du=2x\,dx$. Then

$$
\int 2x(x^2+4)^{100}\,dx
=\int u^{100}\,du
=\frac{u^{101}}{101}+C
=\frac{(x^2+4)^{101}}{101}+C.
$$

### PDF page 4

**Substitution examples**

**1.** Let $u=\cos\theta$, so $du=-\sin\theta\,d\theta$. Then

$$
\int\cos^4\theta\sin\theta\,d\theta
=-\int u^4\,du=-\frac{u^5}{5}+C
=-\frac{\cos^5\theta}{5}+C.
$$

**2.** Let $u=x+2$, so $x=u-2$ and $du=dx$. For $x>-2$,

$$
\begin{aligned}
\int\frac{x}{\sqrt[4]{x+2}}\,dx
&=\int (u-2)u^{-1/4}\,du
=\int(u^{3/4}-2u^{-1/4})\,du\\
&=\frac47u^{7/4}-\frac83u^{3/4}+C\\
&=\frac47(x+2)^{7/4}-\frac83(x+2)^{3/4}+C.
\end{aligned}
$$

**3.** For $\int_1^2 x^2(x^3+1)\,dx$, put $u=x^3+1$ and $du=3x^2\,dx$. The bounds $x=1$ and $x=2$ correspond to $u=2$ and $u=9$.

$$
\int_1^2 x^2(x^3+1)\,dx
=\frac13\int_2^9u\,du
=\frac13\left[\frac{u^2}{2}\right]_2^9
=\frac{77}{6}.
$$

The handwritten calculation keeps the $x$ limits $1$ and $2$ after changing to $u$ and obtains $1/2$. The transformed limits give $77/6$.

### PDF page 5

**Substitution, continued**

**1.** For $u=e^x$, $du=e^x\,dx$.

$$
\int e^{x+e^x}\,dx=\int e^x e^{e^x}\,dx
=\int e^u\,du=e^u+C=e^{e^x}+C.
$$

**2.** Let $u=\ln(\sin x)$ on an interval where $\sin x>0$. Then $du=(\cos x/\sin x)\,dx=\cot x\,dx$.

$$
\int\cot x\ln(\sin x)\,dx
=\int u\,du=\frac{u^2}{2}+C
=\frac{[\ln(\sin x)]^2}{2}+C.
$$

**3.** In $\int x/(1-x^2+\sqrt{1-x^2})\,dx$, first set $u=1-x^2$ so that $x\,dx=-du/2$. Next set $v=\sqrt u$ so that $u=v^2$ and $du=2v\,dv$.

$$
\begin{aligned}
\int\frac{x}{1-x^2+\sqrt{1-x^2}}\,dx
&=-\frac12\int\frac{du}{u+\sqrt u}\\
&=-\frac12\int\frac{2v}{v^2+v}\,dv
=-\int\frac{dv}{v+1}\\
&=-\ln|v+1|+C
=-\ln\left|\sqrt{1-x^2}+1\right|+C.
\end{aligned}
$$

### PDF page 6

**Work.** For a force $\mechanical{F}$ along the direction of motion, the work over the interval from $\mechanical{a}$ to $\mechanical{b}$ is

$$
\energy{W}=\int_{\mechanical{a}}^{\mechanical{b}}\mechanical{F}\,d\mechanical{x}.
$$

![[Kyle Kabasares - Integral Calculus - Work as area under a force curve.png|**Fig. 1** The strips approximate the area under the force–displacement curve. Each strip has width $\mechanical{\Delta x}$.]]

**Example.** A cable weighing $\quantity{2}{lbf/ft}$ lifts coal weighing $\quantity{800}{lbf}$ from a mine shaft of depth $\mechanical{d}=\quantity{500}{ft}$. Find the work done.

![[Kyle Kabasares - Integral Calculus - Cable lifting coal from a mine shaft.png|**Fig. 2** The coal hangs from the cable at the bottom of the shaft. The handwritten pounds describe weight and are written as pound-force here.]]

After lifting the coal through $\mechanical{y}$ feet, the length of cable still hanging is $\quantity{500}{ft}-\mechanical{y}$. The force equals the weight of the coal plus the weight of this length of cable.

$$
\mechanical{F}=\quantity{800}{lbf}+\left(\quantity{2}{lbf/ft}\right)(\quantity{500}{ft}-\mechanical{y})
=\quantity{1800}{lbf}-\left(\quantity{2}{lbf/ft}\right)\mechanical{y}.
$$

Using numerical values in feet and pound-force, the work calculation is

$$
\energy{W}
=\left(\int_0^{500}(1800-2\mechanical{y})\,d\mechanical{y}\right)\unit{ft\cdot lbf}
=\left[1800\mechanical{y}-\mechanical{y}^2\right]_0^{500}\unit{ft\cdot lbf}
=\quantity{650000}{ft\cdot lbf}.
$$

### PDF page 7

**Work, continued.** A leaky bucket of mass $\quantity{10}{kg}$ is lifted from the ground at constant speed to a height of $\quantity{12}{m}$. It starts with $\quantity{36}{kg}$ of water, which leaks at a constant rate until the bucket reaches the final height. Ignore the mass of the rope.

![[Kyle Kabasares - Integral Calculus - Leaking bucket lifted twelve meters.png|**Fig. 3** The arrow shows the bucket rising from the ground to the $\quantity{12}{m}$ level.]]

At height $\mechanical{y}$, the water mass is $\mechanical{m}_{\mathrm{water}}=\quantity{36}{kg}-(\quantity{3}{kg/m})\mechanical{y}$. The lifting force is $\mechanical{F}=\mechanical{m}\mechanical{g}$, where $\mechanical{m}=\mechanical{m}_{\mathrm{bucket}}+\mechanical{m}_{\mathrm{water}}$. With numerical values in SI units, the calculation is

$$
\begin{aligned}
\energy{W}
&=\mechanical{g}\int_0^{12}[10+(36-3\mechanical{y})]\,d\mechanical{y}\\
&=\mechanical{g}\left[46\mechanical{y}-\tfrac32\mechanical{y}^2\right]_0^{12}
=\quantity{3292.8}{J},
\end{aligned}
$$

using $\mechanical{g}=\quantity{9.8}{m/s^2}$.

**Hooke's law.** The force required to hold the spring at extension $\mechanical{x}$ is $\mechanical{F}=\mechanical{k}\mechanical{x}$, so the work is $\energy{W}=\int\mechanical{k}\mechanical{x}\,d\mechanical{x}$.

**Example.** Stretching a spring from its natural length of $\quantity{30}{cm}$ to $\quantity{42}{cm}$ requires $\quantity{2}{J}$. The initial extension is zero and the final extension is $\quantity{0.12}{m}$. With numerical values in SI units,

$$
2=\mechanical{k}\left[\frac{\mechanical{x}^2}{2}\right]_0^{0.12},
\qquad
\mechanical{k}=\frac4{(0.12)^2}\,\unit{N/m}\approx\quantity{277.78}{N/m}.
$$

Stretching the spring from $\quantity{35}{cm}$ to $\quantity{40}{cm}$ changes the extension from $\quantity{0.05}{m}$ to $\quantity{0.10}{m}$. The corresponding work is

$$
\energy{W}=\mechanical{k}\int_{0.05}^{0.10}\mechanical{x}\,d\mechanical{x}
=\frac{\mechanical{k}}{2}\bigl[(0.10)^2-(0.05)^2\bigr]\approx\quantity{1.04}{J}.
$$

### PDF page 8

**Integration by parts**

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

### PDF page 9

**Integration by parts, continued**

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

### PDF page 10

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

### PDF page 11

**Trigonometric integrals.** For $\int\sin^m x\cos^n x\,dx$, if either exponent is odd, set aside one factor of the corresponding function. Use $\sin^2 x+\cos^2 x=1$ to rewrite the remaining even power.

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

### PDF page 12

**Odd powers.** For $\int\sin^3 x\cos^3 x\,dx$, separate one factor of $\cos x$ and put $u=\sin x$, $du=\cos x\,dx$.

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

**Even powers.** When both exponents $m$ and $n$ are even, use the half-angle formulas

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

### PDF page 13

**Trigonometric integrals, continued.** Apply the half-angle identities to both squared factors.

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

**Product-to-sum identities**

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

### PDF page 14

**Product-to-sum example**

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

**Integrals of tangent and secant**

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

### PDF page 15

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

### PDF page 16

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

### PDF page 17

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

### PDF page 18

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

**Trigonometric substitutions**

| Expression | Substitution and angular range | Identity |
| --- | --- | --- |
| $\sqrt{a^2-x^2}$ | $x=a\sin\theta$, $-\pi/2\le\theta\le\pi/2$ | $1-\sin^2\theta=\cos^2\theta$ |
| $\sqrt{a^2+x^2}$ | $x=a\tan\theta$, $-\pi/2<\theta<\pi/2$ | $1+\tan^2\theta=\sec^2\theta$ |
| $\sqrt{x^2-a^2}$ | $x=a\sec\theta$, $0\le\theta<\pi/2$ or $\pi\le\theta<3\pi/2$ | $\sec^2\theta-1=\tan^2\theta$ |

The tangent range excludes both endpoints, where tangent is undefined.

### PDF page 19

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

### PDF page 20

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

### PDF page 21

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

### PDF page 22

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

### PDF page 23

**Partial fraction decomposition**

Use partial fractions to integrate rational functions. The numerator must have lower degree than the denominator. If its degree is at least as high, apply polynomial long division first. Stop when the remainder has lower degree than the divisor.

**Example.** Divide $x^2+4x-8$ by $x-2$. The first quotient term is $x$, and subtracting $x(x-2)$ leaves $6x-8$. The next quotient term is $6$, and subtracting $6(x-2)$ leaves the remainder $4$.

$$
\begin{aligned}
(x^2+4x-8)-(x^2-2x)&=6x-8,\\
(6x-8)-(6x-12)&=4.
\end{aligned}
$$

$$
\frac{x^2+4x-8}{x-2}=\boxed{x+6+\frac{4}{x-2}}.
$$

**Example.** Divide $x^3+4x+6$ by $x^2+1$. Use $0x^2$ as a placeholder in the numerator and $0x$ as a placeholder in the denominator. The first quotient term is $x$.

$$
(x^3+0x^2+4x+6)-x(x^2+0x+1)
=(x^3+0x^2+4x+6)-(x^3+0x^2+x)
=3x+6.
$$

The remainder has degree one, so the division stops.

$$
\frac{x^3+4x+6}{x^2+1}=\boxed{x+\frac{3x+6}{x^2+1}}.
$$

### PDF page 24

**Polynomial long division, continued**

Divide $x^3+2x^2+x+1$ by $x-3$. The quotient terms are $x^2$, $5x$, and $16$ in order. Subtract each term times the divisor.

$$
\begin{aligned}
(x^3+2x^2+x+1)-(x^3-3x^2)&=5x^2+x+1,\\
(5x^2+x+1)-(5x^2-15x)&=16x+1,\\
(16x+1)-(16x-48)&=49.
\end{aligned}
$$

$$
\frac{x^3+2x^2+x+1}{x-3}=\boxed{x^2+5x+16+\frac{49}{x-3}}.
$$

Divide $x^4-x^2+x-4$ by $x^2-2x+5$. Write $0x^3$ in the dividend to align the powers. The quotient terms are $x^2$, $2x$, and $-2$.

$$
\begin{aligned}
(x^4+0x^3-x^2+x-4)-(x^4-2x^3+5x^2)&=2x^3-6x^2+x-4,\\
(2x^3-6x^2+x-4)-(2x^3-4x^2+10x)&=-2x^2-9x-4,\\
(-2x^2-9x-4)-(-2x^2+4x-10)&=-13x+6.
\end{aligned}
$$

$$
\frac{x^4-x^2+x-4}{x^2-2x+5}
=\boxed{x^2+2x-2+\frac{-13x+6}{x^2-2x+5}}.
$$

The transcription uses the remainder $-13x+6$ shown in the division. The handwritten box changes the sign of the constant when placing a minus sign in front of the fraction.

### PDF page 25

**Partial fractions, continued**

**1. Distinct linear factors.** Use a constant numerator for each factor.

$$
\begin{aligned}
\frac{x}{(x+3)(x-2)}&=\frac{A}{x+3}+\frac{B}{x-2},\\
\frac{1}{(x-2)(2x+3)x}&=\frac{A}{x-2}+\frac{B}{2x+3}+\frac{C}{x}.
\end{aligned}
$$

**2. Linear factors, some repeated.** Include a term for each power of a repeated factor through its multiplicity.

$$
\frac{3x+1}{(x+1)^3x}
=\frac{A}{x+1}+\frac{B}{(x+1)^2}+\frac{C}{(x+1)^3}+\frac{D}{x}.
$$

Factor the denominator first to identify repeated factors.

$$
\frac{1}{(x^2-4)(x-2)}
=\frac{1}{(x-2)(x+2)(x-2)}
=\frac{1}{(x-2)^2(x+2)}.
$$

**3. Distinct irreducible quadratic factors.** Use numerators of degree at most one.

$$
\frac{x+1}{(x^2+4)(x^2+9)}
=\frac{Ax+B}{x^2+4}+\frac{Cx+D}{x^2+9}.
$$

**4. Irreducible quadratic factors, some repeated.** Include a linear numerator for each power of a repeated quadratic factor.

$$
\begin{aligned}
\frac{x+1}{(x^2+4)^3(x^2+9)}
={}&\frac{Ax+B}{x^2+4}+\frac{Cx+D}{(x^2+4)^2}\\
&+\frac{Ex+F}{(x^2+4)^3}+\frac{Gx+H}{x^2+9}.
\end{aligned}
$$

The transcription writes the denominator of the third term as $(x^2+4)^3$ to match the repeated quadratic on the left.

### PDF page 26

**Example with linear and quadratic factors.** The denominator has a repeated linear factor $x$, a distinct linear factor $x+1$, and a repeated irreducible quadratic factor $x^2+3$.

$$
\begin{aligned}
\frac{x+4}{x^2(x+1)(x^2+3)^4}
={}&\frac{A}{x}+\frac{B}{x^2}+\frac{C}{x+1}+\frac{Dx+E}{x^2+3}\\
&+\frac{Fx+G}{(x^2+3)^2}+\frac{Hx+I}{(x^2+3)^3}
+\frac{Jx+K}{(x^2+3)^4}.
\end{aligned}
$$

**Determining coefficients by substitution**

Factor the denominator in $\int x/(x^2+3x+2)\,dx$ as $(x+1)(x+2)$. Write the partial fractions and multiply through by $(x+1)(x+2)$.

$$
\begin{aligned}
\frac{x}{(x+1)(x+2)}&=\frac{A}{x+1}+\frac{B}{x+2},\\
x&=A(x+2)+B(x+1).
\end{aligned}
$$

Substitute the roots of the denominator into the resulting polynomial identity.

$$
\begin{aligned}
x=-2&:\quad -2=A(-2+2)+B(-2+1)=-B,\qquad B=2,\\
x=-1&:\quad -1=A(-1+2)+B(-1+1)=A,\qquad A=-1.
\end{aligned}
$$

$$
\begin{aligned}
\int\frac{x}{(x+1)(x+2)}\,dx
&=-\int\frac{dx}{x+1}+2\int\frac{dx}{x+2}\\
&=\boxed{2\ln|x+2|-\ln|x+1|+C}.
\end{aligned}
$$

### PDF page 27

**Determining coefficients by matching powers**

Return to the identity from the previous example. Expand the right-hand side and match the coefficients of $x$ and the constant terms.

$$
\begin{aligned}
x&=A(x+2)+B(x+1)\\
&=Ax+2A+Bx+B,\\
1x+0&=(A+B)x+(2A+B).
\end{aligned}
$$

$$
1=A+B,\qquad 0=2A+B.
$$

The first equation gives $B=1-A$. In the second equation,

$$
0=2A+1-A
\quad\Longrightarrow\quad
A=2A+1
\quad\Longrightarrow\quad
-A=1
\quad\Longrightarrow\quad
A=-1.
$$

Then $0=2(-1)+B$, giving $B=2$.

**Example.** Evaluate $\displaystyle\int\frac{x+1}{x^2-2x-8}\,dx$. Factor the denominator and clear the fractions.

$$
\begin{aligned}
\frac{x+1}{x^2-2x-8}
&=\frac{x+1}{(x+2)(x-4)}
=\frac{A}{x+2}+\frac{B}{x-4},\\
x+1&=A(x-4)+B(x+2).
\end{aligned}
$$

$$
\begin{aligned}
x=4&:\quad 5=6B,\qquad B=\frac56,\\
x=-2&:\quad -1=A(-2-4)=-6A,\qquad A=\frac16.
\end{aligned}
$$

$$
\begin{aligned}
\int\frac{x+1}{(x+2)(x-4)}\,dx
&=\frac16\int\frac{dx}{x+2}+\frac56\int\frac{dx}{x-4}\\
&=\boxed{\frac16\ln|x+2|+\frac56\ln|x-4|+C}.
\end{aligned}
$$

### PDF page 28

**Example with a repeated linear factor.** Evaluate $\displaystyle\int\frac{x+2}{x(x+1)^2}\,dx$.

$$
\begin{aligned}
\frac{x+2}{x(x+1)^2}&=\frac{A}{x}+\frac{B}{x+1}+\frac{C}{(x+1)^2},\\
x+2&=A(x+1)^2+Bx(x+1)+Cx.
\end{aligned}
$$

At $x=0$, the polynomial identity gives $2=A$. At $x=-1$, it gives $1=-C$, hence $C=-1$. Expand to find $B$.

$$
\begin{aligned}
x+2&=Ax^2+2Ax+A+Bx^2+Bx+Cx,\\
0x^2+1x+2&=(A+B)x^2+(2A+B+C)x+A.
\end{aligned}
$$

The $x^2$ coefficient gives $A+B=0$, so $2+B=0$ and $B=-2$. The transcription includes the $C$ term in the coefficient of $x$.

$$
\begin{aligned}
\int\frac{x+2}{x(x+1)^2}\,dx
&=2\int\frac{dx}{x}-2\int\frac{dx}{x+1}
-\int\frac{dx}{(x+1)^2}\\
&=2\ln|x|-2\ln|x+1|-\int\frac{dx}{(x+1)^2}.
\end{aligned}
$$

For the remaining integral, let $u=x+1$ and $du=dx$. Up to an additive constant,

$$
\int\frac{dx}{(x+1)^2}=\int u^{-2}\,du=-u^{-1}=-\frac{1}{x+1}.
$$

Therefore,

$$
\int\frac{x+2}{x(x+1)^2}\,dx
=\boxed{2\ln|x|-2\ln|x+1|+\frac{1}{x+1}+C}.
$$

### PDF page 29

**Example.** Evaluate $\displaystyle\int\frac{5}{(2x+1)(x-2)}\,dx$.

$$
\begin{aligned}
\frac{5}{(2x+1)(x-2)}&=\frac{A}{2x+1}+\frac{B}{x-2},\\
5&=A(x-2)+B(2x+1).
\end{aligned}
$$

Use the roots of the two denominator factors.

$$
\begin{aligned}
x=2&:\quad 5=B(4+1)=5B,\qquad B=1,\\
x=-\frac12&:\quad 5=A\left(-\frac12-\frac42\right)
=-\frac52A,\qquad A=-2.
\end{aligned}
$$

$$
\begin{aligned}
\int\frac{5}{(2x+1)(x-2)}\,dx
&=-2\int\frac{dx}{2x+1}+\int\frac{dx}{x-2}\\
&=-2\cdot\frac12\ln|2x+1|+\ln|x-2|+C\\
&=\boxed{-\ln|2x+1|+\ln|x-2|+C}.
\end{aligned}
$$

### PDF page 30

**Example.** Evaluate $\displaystyle\int\frac{x^3+4}{x^2+4}\,dx$. Polynomial long division gives quotient $x$ and remainder $-4x+4$.

$$
(x^3+0x^2+0x+4)-x(x^2+0x+4)
=(x^3+0x^2+0x+4)-(x^3+0x^2+4x)
=-4x+4.
$$

$$
\begin{aligned}
\int\frac{x^3+4}{x^2+4}\,dx
&=\int x\,dx+\int\frac{-4x+4}{x^2+4}\,dx\\
&=\frac{x^2}{2}-\int\frac{4x}{x^2+4}\,dx+\int\frac{4}{x^2+4}\,dx.
\end{aligned}
$$

For the first remaining integral, use $u=x^2+4$ and $du=2x\,dx$, so $2\,du=4x\,dx$. The following antiderivatives are written up to additive constants.

$$
\int\frac{4x}{x^2+4}\,dx
=2\int\frac{du}{u}
=2\ln|u|
=2\ln|x^2+4|.
$$

For the second, use $x=2\tan\theta$, so $dx=2\sec^2\theta\,d\theta$ and $\tan\theta=x/2$.

![[Kyle Kabasares - Integral Calculus - Triangle for quadratic denominator.png|**Fig. 11** The triangle for $x=2\tan\theta$, drawn for $x>0$.]]

$$
\begin{aligned}
\int\frac{4}{x^2+4}\,dx
&=\int\frac{4\cdot2\sec^2\theta}{4\tan^2\theta+4}\,d\theta\\
&=\int\frac{8\sec^2\theta}{4(\tan^2\theta+1)}\,d\theta
=\int\frac{8\sec^2\theta}{4\sec^2\theta}\,d\theta\\
&=\int 2\,d\theta
=2\theta
=2\arctan\left(\frac{x}{2}\right).
\end{aligned}
$$

$$
\int\frac{x^3+4}{x^2+4}\,dx
=\boxed{\frac{x^2}{2}-2\ln|x^2+4|+2\arctan\left(\frac{x}{2}\right)+C}.
$$

The transcription carries the signed remainder $-4x+4$ through the split and includes the integration constant in the boxed result.

### PDF page 31

**Example.** Evaluate $\displaystyle\int\frac{10}{x^2-25}\,dx$. Factor $x^2-25=(x+5)(x-5)$ and take the factor $10$ outside the integral.

$$
\begin{aligned}
\frac{1}{(x+5)(x-5)}&=\frac{A}{x+5}+\frac{B}{x-5},\\
1&=A(x-5)+B(x+5).
\end{aligned}
$$

At $x=5$, $1=10B$, so $B=1/10$. At $x=-5$, $1=-10A$, so $A=-1/10$.

$$
\begin{aligned}
\int\frac{10}{x^2-25}\,dx
&=10\left(-\frac1{10}\int\frac{dx}{x+5}
+\frac1{10}\int\frac{dx}{x-5}\right)\\
&=10\left[-\frac1{10}\ln|x+5|+\frac1{10}\ln|x-5|\right]+C\\
&=\boxed{\ln|x-5|-\ln|x+5|+C}.
\end{aligned}
$$

**Example.** Evaluate $\displaystyle\int\frac{e^x}{(e^{2x}-4)(e^{2x}+1)}\,dx$. Let $u=e^x$ and $du=e^x\,dx$. Then

$$
\int\frac{e^x\,dx}{(e^{2x}-4)(e^{2x}+1)}
=\int\frac{du}{(u^2-4)(u^2+1)}
=\int\frac{du}{(u+2)(u-2)(u^2+1)}.
$$

$$
\begin{aligned}
\frac{1}{(u+2)(u-2)(u^2+1)}
&=\frac{A}{u+2}+\frac{B}{u-2}+\frac{Cu+D}{u^2+1},\\
1&=A(u-2)(u^2+1)+B(u+2)(u^2+1)+(Cu+D)(u+2)(u-2).
\end{aligned}
$$

After clearing denominators, the equation is a polynomial identity and can be evaluated at both roots of $u^2-4$.

$$
\begin{aligned}
u=2&:\quad 1=B(2+2)(4+1)=20B,\qquad B=\frac1{20},\\
u=-2&:\quad 1=A(-2-2)(4+1)=-20A,\qquad A=-\frac1{20}.
\end{aligned}
$$

### PDF page 32

**Exponential substitution and partial fractions, continued**

Expand the polynomial identity from page 31 and collect powers of $u$.

$$
\begin{aligned}
1={}&(Au-2A)(u^2+1)+(Bu+2B)(u^2+1)\\
&+(Cu^2+2Cu+Du+2D)(u-2)\\
={}&(A+B+C)u^3+(-2A+2B+D)u^2\\
&+(A+B-4C)u+(-2A+2B-4D).
\end{aligned}
$$

The transcription cancels the opposite $2Cu^2$ and $2Du$ terms in the expansion. Matching the coefficients of $u^3$ and $u^2$, with $A=-1/20$ and $B=1/20$, gives

$$
\begin{aligned}
0&=A+B+C=C,\\
0&=-2A+2B+D=\frac{2}{20}+\frac{2}{20}+D,\\
D&=-\frac15.
\end{aligned}
$$

Thus, up to an additive constant,

$$
\begin{aligned}
\int\frac{du}{(u+2)(u-2)(u^2+1)}
&=\int\left(-\frac{1}{20(u+2)}+\frac{1}{20(u-2)}-\frac{1}{5(u^2+1)}\right)\,du\\
&=-\frac1{20}\ln|u+2|+\frac1{20}\ln|u-2|-\frac15\int\frac{du}{u^2+1}.
\end{aligned}
$$

To evaluate the last term, set $u=\tan\theta$, with $du=\sec^2\theta\,d\theta$.

$$
\begin{aligned}
-\frac15\int\frac{du}{u^2+1}
&=-\frac15\int\frac{\sec^2\theta}{\tan^2\theta+1}\,d\theta
=-\frac15\int d\theta\\
&=-\frac15\theta
=-\frac15\arctan u.
\end{aligned}
$$

The transcription retains the negative sign from $D=-1/5$ throughout this substitution. Return to $u=e^x$.

$$
\int\frac{e^x\,dx}{(e^{2x}-4)(e^{2x}+1)}
=\boxed{-\frac1{20}\ln|e^x+2|+\frac1{20}\ln|e^x-2|-\frac15\arctan(e^x)+C}.
$$

### PDF page 33

**Improper integrals**

**Infinite upper limit.** Replace the infinite endpoint with $t$ and take the limit.

$$
\int_1^\infty\frac{dx}{x^2}
=\lim_{t\to\infty}\int_1^t x^{-2}\,dx
=\lim_{t\to\infty}\left[-\frac1x\right]_1^t
=\lim_{t\to\infty}\left(-\frac1t+1\right)
=\boxed{1}.
$$

**Infinite discontinuity at an endpoint.** Approach $x=0$ from the left.

$$
\int_{-1}^0\frac{dx}{x^2}
=\lim_{t\to0^-}\int_{-1}^t x^{-2}\,dx
=\lim_{t\to0^-}\left(-\frac1t-1\right)
=+\infty.
$$

The integral diverges.

**Infinite upper and lower limits.** Split at $x=0$.

$$
\int_{-\infty}^{\infty}x^2e^{-x^3}\,dx
=\int_{-\infty}^0x^2e^{-x^3}\,dx+\int_0^\infty x^2e^{-x^3}\,dx.
$$

Set $u=-x^3$ and $du=-3x^2\,dx$. On the positive half-line, $x=0$ gives $u=0$ and $x=t$ gives $u=-t^3$, so

$$
\int_0^\infty x^2e^{-x^3}\,dx
=\lim_{t\to\infty}-\frac13\int_0^{-t^3}e^u\,du
=\lim_{t\to\infty}\frac{1-e^{-t^3}}{3}
=\frac13.
$$

On the negative half-line, $x=-t$ gives $u=t^3$, so

$$
\int_{-\infty}^0 x^2e^{-x^3}\,dx
=\lim_{t\to\infty}-\frac13\int_{t^3}^0e^u\,du
=\lim_{t\to\infty}\frac{e^{t^3}-1}{3}
=+\infty.
$$

The full integral diverges, as stated in the notes. The transcription changes the bounds with the substitution and evaluates both halves. The divergence comes from the negative half-line.

### PDF page 34

**Example with an interior singularity.** Split the integral at $x=0$.

$$
\int_{-1}^1\frac{e^x}{e^x-1}\,dx
=\int_{-1}^0\frac{e^x}{e^x-1}\,dx
+\int_0^1\frac{e^x}{e^x-1}\,dx.
$$

For the left-hand integral, let $u=e^x-1$, with $du=e^x\,dx$. The antiderivative is $\ln|u|=\ln|e^x-1|$, up to an additive constant. The lower and upper bounds in $u$ are $e^{-1}-1$ and $e^t-1$ respectively.

$$
\begin{aligned}
\int_{-1}^0\frac{e^x}{e^x-1}\,dx
&=\lim_{t\to0^-}\int_{-1}^t\frac{e^x}{e^x-1}\,dx\\
&=\lim_{t\to0^-}\int_{e^{-1}-1}^{e^t-1}\frac{du}{u}\\
&=\lim_{t\to0^-}\bigl[\ln|e^t-1|-\ln|e^{-1}-1|\bigr]
=-\infty.
\end{aligned}
$$

Since the left-hand integral diverges, the full improper integral diverges.

**Example.** Evaluate $\displaystyle\int_1^\infty\frac{dx}{(x+2)^2}$. With $u=x+2$ and $du=dx$, the bounds $1$ and $t$ become $3$ and $t+2$.

$$
\begin{aligned}
\int_1^\infty\frac{dx}{(x+2)^2}
&=\lim_{t\to\infty}\int_1^t\frac{dx}{(x+2)^2}\\
&=\lim_{t\to\infty}\int_3^{t+2}\frac{du}{u^2}
=\lim_{t\to\infty}\left[-\frac1u\right]_3^{t+2}\\
&=\lim_{t\to\infty}\left(-\frac1{t+2}+\frac13\right)
=\boxed{\frac13}.
\end{aligned}
$$

### PDF page 35

**Arc length**

For the graph $y=f(x)$ between $x=a$ and $x=b$, the sketch uses $\Delta y\approx f'(x)\Delta x$.

![[Kyle Kabasares - Integral Calculus - Arc length increments.png|**Fig. 12** Horizontal and vertical increments between two points on the curve.]]

$$
L=\int_a^b\sqrt{1+[f'(x)]^2}\,dx
=\int_a^b\sqrt{1+\left(\frac{dy}{dx}\right)^2}\,dx.
$$

**Example.** Find the length of the arc of $y^2=x^3$ between $(1,1)$ and $(4,8)$. On the branch containing these points, $f(x)=x^{3/2}$ and $f'(x)=\frac32x^{1/2}$.

$$
L=\int_1^4\sqrt{1+\left(\frac32x^{1/2}\right)^2}\,dx
=\int_1^4\sqrt{1+\frac94x}\,dx.
$$

Set $u=1+\frac94x$, so $du=\frac94\,dx$ and $dx=\frac49\,du$. The bounds are $u=1+\frac94=\frac{13}{4}$ at $x=1$ and $u=1+9=10$ at $x=4$.

$$
\begin{aligned}
L
&=\frac49\int_{13/4}^{10}u^{1/2}\,du\\
&=\frac49\left[\frac23u^{3/2}\right]_{13/4}^{10}\\
&=\boxed{\frac8{27}\left[10^{3/2}-\left(\frac{13}{4}\right)^{3/2}\right]}.
\end{aligned}
$$

### PDF page 36

**Example.** Find the length of the arc of $y=x^2-\frac18\ln x$ from $x=1$ to $x=3$. The endpoints on this curve are $(1,1)$ and $(3,9-\frac18\ln 3)$. The handwritten statement has a plus sign in the second endpoint's ordinate.

With $f(x)=x^2-\frac18\ln x$, we have $f'(x)=2x-\frac{1}{8x}$. Expanding the square in the arc-length integrand gives

$$
\left(2x-\frac{1}{8x}\right)^2
=4x^2-\frac12+\frac{1}{64x^2}.
$$

$$
\begin{aligned}
L&=\int_1^3\sqrt{1+\left(2x-\frac{1}{8x}\right)^2}\,dx\\
&=\int_1^3\sqrt{4x^2+\frac12+\frac{1}{64x^2}}\,dx\\
&=\int_1^3\sqrt{\left(2x+\frac{1}{8x}\right)^2}\,dx\\
&=\int_1^3\left(2x+\frac{1}{8x}\right)\,dx\\
&=\left[x^2\right]_1^3+\frac18\left[\ln|x|\right]_1^3\\
&=(9-1)+\frac18(\ln 3-\ln 1)
=\boxed{8+\frac18\ln 3}.
\end{aligned}
$$

### PDF page 37

**Example.** Find the arc length of $y=\frac13(x^2+2)^{3/2}$ from $x=0$ to $x=1$. For $f(x)=\frac13(x^2+2)^{3/2}$,

$$
f'(x)=\frac32\cdot\frac13(x^2+2)^{1/2}\cdot2x=x(x^2+2)^{1/2}.
$$

$$
\begin{aligned}
L&=\int_0^1\sqrt{1+[f'(x)]^2}\,dx\\
&=\int_0^1\sqrt{1+x^2(x^2+2)}\,dx
=\int_0^1\sqrt{1+x^4+2x^2}\,dx\\
&=\int_0^1\sqrt{(x^2+1)^2}\,dx
=\int_0^1(x^2+1)\,dx\\
&=\left[\frac{x^3}{3}+x\right]_0^1
=\frac13+1=\boxed{\frac43}.
\end{aligned}
$$

**Parametric curves**

Parametric curves can describe objects moving in two dimensions.

**Example.** Sketch the curve given by

$$
x=1+\sqrt{t},\qquad y=t^2-4t,\qquad 0\le t\le4.
$$

| $t$ | $x$ | $y$ |
| --- | --- | --- |
| $0$ | $1$ | $0$ |
| $1$ | $2$ | $-3$ |
| $4$ | $3$ | $0$ |

![[Kyle Kabasares - Integral Calculus - Parametric curve with square root.png|**Fig. 13** Handwritten sketch marking the initial point at $t=0$ and terminal point at $t=4$.]]

The terminal point has $x=3$ according to the formula and table. The sketch labels its horizontal coordinate $4$. The lowest point occurs at $t=2$, where $y=-4$.

### PDF page 38

**Example.** Sketch the curve $x=\sqrt t$, $y=1-t$. The square root requires $t\ge0$.

| $t$ | $x$ | $y$ |
| --- | --- | --- |
| $0$ | $0$ | $1$ |
| $1$ | $1$ | $0$ |
| $4$ | $2$ | $-3$ |
| $9$ | $3$ | $-8$ |

![[Kyle Kabasares - Integral Calculus - Parametric curve from square root and line.png|**Fig. 14** Sample points and arrows showing the direction of increasing $t$.]]

**Eliminating the parameter**

For $x=t-1$ and $y=4t+1$, solve $t=x+1$ and substitute.

$$
y=4(x+1)+1=\boxed{4x+5}.
$$

For $x=\sqrt{t+1}$ and $y=3t+2$, use $x^2=t+1$ and $t=x^2-1$. The square root restricts the resulting curve to $x\ge0$.

$$
y=3(x^2-1)+2=3x^2-3+2=\boxed{3x^2-1}.
$$

For $x=4e^{t/4}$ and $y=3e^t$, raise $x/4=e^{t/4}$ to the fourth power.

$$
\left(\frac{x}{4}\right)^4=(e^{t/4})^4=e^t,\qquad
\boxed{y=3\left(\frac{x}{4}\right)^4},\qquad x>0.
$$

### PDF page 39

**Example.** Given fixed radii $a$ and $b$, find parametric equations for all possible positions of $P$ in the figure, using the angle $\theta$ as the parameter.

![[Kyle Kabasares - Integral Calculus - Concentric circles for ellipse.png|**Fig. 15** A ray from the origin meets the outer circle at $Q$ and the inner circle at $R$. The point $P$ is directly below $Q$ and horizontally aligned with $R$.]]

**Point $Q$.** The right triangle has hypotenuse $a$, so $Q=(a\cos\theta,a\sin\theta)$.

![[Kyle Kabasares - Integral Calculus - Outer circle projection triangle.png|**Fig. 16** Right triangle giving the coordinates of $Q$.]]

**Point $R$.** The right triangle has hypotenuse $b$, so $R=(b\cos\theta,b\sin\theta)$.

![[Kyle Kabasares - Integral Calculus - Inner circle projection triangle.png|**Fig. 17** Right triangle giving the coordinates of $R$.]]

**Point $P$.** Take the $x$-coordinate from $Q$ and the $y$-coordinate from $R$.

![[Kyle Kabasares - Integral Calculus - Ellipse point projection.png|**Fig. 18** Construction of $P$ from the two projections, with $RQ=a-b$.]]

$$
x=a\cos\theta,\qquad y=b\sin\theta.
$$

Then $x/a=\cos\theta$ and $y/b=\sin\theta$. The identity $\sin^2\theta+\cos^2\theta=1$ gives

$$
\left(\frac{y}{b}\right)^2+\left(\frac{x}{a}\right)^2=1,
\qquad
\boxed{\frac{y^2}{b^2}+\frac{x^2}{a^2}=1}.
$$

The locus is an ellipse.

### PDF page 40

**Example.** The witch of Maria Agnesi consists of all possible positions of $P$ in the figure. Show that its parametric equations are $x=2a\cot\theta$ and $y=2a\sin^2\theta$.

![[Kyle Kabasares - Integral Calculus - Witch of Agnesi construction.png|**Fig. 19** The circle has diameter $OB=2a$. The ray from $O$ meets the circle at $A$ and the tangent $y=2a$ at $C$. The point $P$ shares the height of $A$ and the horizontal coordinate of $C$.]]

**Point $C$.** Its right triangle has height $2a$ and horizontal side $x$. Therefore $\tan\theta=2a/x$ in the illustrated configuration, giving

$$
x\tan\theta=2a,\qquad x=\frac{2a}{\tan\theta}=\boxed{2a\cot\theta}.
$$

![[Kyle Kabasares - Integral Calculus - Witch of Agnesi tangent triangle.png|**Fig. 20** Right triangle from $O$ to $C$, with hypotenuse labeled $h$.]]

**Points $A$ and $B$.** Because $OB$ is a diameter, the angle at $A$ is a right angle. The angle at $B$ in $\triangle OAB$ is $\theta$, so $OA=2a\sin\theta$ and $BA=2a\cos\theta$.

![[Kyle Kabasares - Integral Calculus - Witch of Agnesi inscribed triangle.png|**Fig. 21** The right triangle $OAB$ inscribed in the circle.]]

In the triangle projecting $A$ onto the horizontal axis, the horizontal coordinate of $A$ is $2a\sin\theta\cos\theta$. Its height is $y$, which also gives the height of $P$.

![[Kyle Kabasares - Integral Calculus - Witch of Agnesi height triangle.png|**Fig. 22** The height of $A$ is the side opposite $\theta$ in the projection triangle.]]

$$
\sin\theta=\frac{y}{2a\sin\theta},
\qquad \boxed{y=2a\sin^2\theta}.
$$

### PDF page 41

**Derivatives of parametric functions**

For $x=f(t)$ and $y=g(t)$, the tangent vector is $\bigl(dx/dt,dy/dt\bigr)$. When $dx/dt\ne0$, its slope is

$$
\frac{dy}{dx}=\frac{dy/dt}{dx/dt}.
$$

**Example.** Find the equation of the tangent line at $t=4$ for $x=3t^2-t$ and $y=\sqrt t$. Use point-slope form $y-y_1=m(x-x_1)$.

$$
x(4)=3(4)^2-4=48-4=44,\qquad y(4)=\sqrt4=2.
$$

$$
\frac{dy}{dx}
=\frac{\frac{d}{dt}(\sqrt t)}{\frac{d}{dt}(3t^2-t)}
=\frac{\frac12t^{-1/2}}{6t-1}.
$$

At $t=4$,

$$
m=\frac{1/(2\sqrt4)}{6(4)-1}
=\frac{1/4}{23}
=\frac14\cdot\frac1{23}
=\frac1{92}.
$$

The tangent line is

$$
\boxed{y-2=\frac1{92}(x-44)}.
$$

### PDF page 42

**Second derivatives of parametric equations**

Where $dx/dt\ne0$, apply the chain rule to the first derivative.

$$
\frac{d^2y}{dx^2}
=\frac{d}{dx}\left(\frac{dy}{dx}\right)
=\frac{d}{dx}\left(\frac{dy/dt}{dx/dt}\right)
=\frac{\dfrac{d}{dt}\left(\dfrac{dy}{dx}\right)}{dx/dt}.
$$

**Example.** Find $d^2y/dx^2$ for $x=t^3+t$ and $y=t^5+1$.

$$
\frac{dx}{dt}=3t^2+1,\qquad
\frac{dy}{dt}=5t^4,\qquad
\frac{dy}{dx}=\frac{5t^4}{3t^2+1}.
$$

Use the quotient rule to differentiate $dy/dx$ with respect to $t$.

$$
\frac{d}{dt}\left(\frac{5t^4}{3t^2+1}\right)
=\frac{(3t^2+1)(20t^3)-(5t^4)(6t)}{(3t^2+1)^2}.
$$

Divide by $dx/dt=3t^2+1$ to obtain

$$
\frac{d^2y}{dx^2}
=\boxed{\frac{(3t^2+1)(20t^3)-(5t^4)(6t)}{(3t^2+1)^3}}.
$$

### PDF page 43

**Calculating areas under parametric curves**

For $x=f(t)$ and $y=g(t)$, suppose $x$ increases from $a=f(\alpha)$ to $b=f(\beta)$ as $t$ runs from $\alpha$ to $\beta$. The area under the curve shown is

$$
A=\int_\alpha^\beta g(t)f'(t)\,dt=\int_a^b y\,dx.
$$

![[Kyle Kabasares - Integral Calculus - Area under a parametric curve.png|**Fig. 23** Shaded area under a parametric curve between $t=\alpha$ and $t=\beta$.]]

**Example.** Find the area under one arch of the cycloid

$$
x=r(\theta-\sin\theta),\qquad y=r(1-\cos\theta),\qquad 0\le\theta\le2\pi.
$$

![[Kyle Kabasares - Integral Calculus - Cycloid first arch area.png|**Fig. 24** The shaded cycloid arch extends from $x=0$ to $x=2\pi r$.]]

Since $r$ is constant, $dx/d\theta=r(1-\cos\theta)$. Use $\cos^2\theta=\frac12(1+\cos2\theta)$ to integrate.

$$
\begin{aligned}
A&=\int_0^{2\pi}r(1-\cos\theta)\,r(1-\cos\theta)\,d\theta\\
&=r^2\int_0^{2\pi}(1-\cos\theta)^2\,d\theta\\
&=r^2\int_0^{2\pi}(1-2\cos\theta+\cos^2\theta)\,d\theta\\
&=r^2\int_0^{2\pi}\left(\frac32-2\cos\theta+\frac{\cos2\theta}{2}\right)\,d\theta\\
&=r^2\left[\frac32\theta-2\sin\theta+\frac{\sin2\theta}{4}\right]_0^{2\pi}\\
&=r^2\left(\frac32\cdot 2\pi\right)
=\boxed{3\pi r^2}.
\end{aligned}
$$

### PDF page 44

**Example.** Find the area under the parametric curve $x=1+e^t$, $y=t-t^2$, and above the $x$-axis.

From $x-1=e^t$, we have $t=\ln(x-1)$ and

$$
y=\ln(x-1)-[\ln(x-1)]^2.
$$

At an $x$-intercept,

$$
0=\ln(x-1)[1-\ln(x-1)].
$$

Thus $\ln(x-1)=0$ or $\ln(x-1)=1$. These equations give $x-1=e^0=1$ or $x-1=e^1=e$, so the intercepts are $x=2$ and $x=e+1$. Their parameter values are $t=\ln(2-1)=0$ and $t=\ln(e+1-1)=1$. The curve is above the axis between them.

$$
\begin{aligned}
A&=\int_2^{e+1}y\,dx
=\int_0^1g(t)f'(t)\,dt\\
&=\int_0^1(t-t^2)e^t\,dt
=\int_0^1te^t\,dt-\int_0^1t^2e^t\,dt.
\end{aligned}
$$

For the first integral, use $u=t$, $du=dt$, $dv=e^t\,dt$, and $v=e^t$.

$$
\int_0^1te^t\,dt
=\left[te^t\right]_0^1-\left[e^t\right]_0^1
=(e-e)-(0-1)=1.
$$

For the second, use $u=t^2$, $du=2t\,dt$, $dv=e^t\,dt$, and $v=e^t$.

$$
\int_0^1t^2e^t\,dt
=\left[t^2e^t\right]_0^1-2\int_0^1te^t\,dt
=e-2.
$$

Therefore $A=1-(e-2)=\boxed{3-e}$.

### PDF page 45

**Example.** The parametric trajectory $C$ is given by $x=t^2$ and $y=t^3-3t$.

1. Show that $C$ has two tangents at $(3,0)$ and find their equations.
2. Find the points where the tangent is horizontal or vertical.
3. Determine where the curve is concave up or down.
4. Sketch the graph.

**Tangents at $(3,0)$.** The equation $t^2=3$ gives $t=\pm\sqrt3$. The equation $y=t(t^2-3)=0$ gives $t=0$ or $t=\pm\sqrt3$, so both values $t=\pm\sqrt3$ reach $(3,0)$.

$$
\frac{dx}{dt}=2t,\qquad
\frac{dy}{dt}=3t^2-3,\qquad
\frac{dy}{dx}=\frac{3t^2-3}{2t}.
$$

At $t=\sqrt3$, the slope is $(9-3)/(2\sqrt3)=\sqrt3$. At $t=-\sqrt3$, it is $-\sqrt3$. Substituting into the point-slope equation $y-0=m(x-3)$ gives

$$
\boxed{y=\sqrt3(x-3)}
\qquad\text{or}\qquad
\boxed{y=-\sqrt3(x-3)}.
$$

**Horizontal tangents.** Setting $dy/dx=0$ gives $3t^2-3=0$ and $t=\pm1$. In both cases $dx/dt$ is nonzero. At $t=1$, $(x,y)=(1,1-3)=(1,-2)$. At $t=-1$, $(x,y)=(1,-1-3(-1))=(1,2)$.

$$
\boxed{(1,-2)\quad\text{and}\quad(1,2)}.
$$

### PDF page 46

**Parametric trajectory, continued**

**Vertical tangent.** The derivative $dx/dt=2t$ vanishes at $t=0$, where $dy/dt=-3$. The vertical tangent occurs at $\boxed{(0,0)}$.

**Concavity.** Differentiate the slope from page 45 and divide by $dx/dt$.

$$
\begin{aligned}
\frac{d}{dt}\left(\frac{3t^2-3}{2t}\right)
&=\frac{(2t)(6t)-(3t^2-3)(2)}{4t^2}\\
&=\frac{12t^2-6t^2+6}{4t^2}
=\frac{6t^2+6}{4t^2}.
\end{aligned}
$$

$$
\frac{d^2y}{dx^2}
=\frac{\dfrac{d}{dt}\left(\dfrac{dy}{dx}\right)}{dx/dt}
=\frac{6t^2+6}{8t^3},\qquad t\ne0.
$$

The curve is concave up when $t>0$ and concave down when $t<0$. The transcription uses $d^2y/dx^2$ and includes the full factor of $2t$ in the denominator.

**Sketch**

| $t$ | $x$ | $y$ |
| --- | --- | --- |
| $-1$ | $1$ | $2$ |
| $0$ | $0$ | $0$ |
| $1$ | $1$ | $-2$ |
| $2$ | $4$ | $2$ |

![[Kyle Kabasares - Integral Calculus - Parametric curve with crossing and tangents.png|**Fig. 25** The trajectory passes through a vertical tangent at the origin and crosses itself at $(3,0)$.]]

### PDF page 47

**Polar coordinates**

The polar pair $(r,\theta)$ and Cartesian pair $(x,y)$ are related by

$$
x=r\cos\theta,\qquad
y=r\sin\theta,\qquad
r^2=x^2+y^2,\qquad
\tan\theta=\frac{y}{x}\quad(x\ne0).
$$

![[Kyle Kabasares - Integral Calculus - Polar to Cartesian geometry.png|**Fig. 26** The right triangle relating polar and Cartesian coordinates in the first quadrant.]]

**Example.** Plot the polar pairs $(1,\pi/2)$, $(-2,\pi/4)$, and $(-1,-\pi/2)$. The first and third represent the same point on the positive $y$-axis. The negative radius in $(-2,\pi/4)$ puts the point two units from the origin on the ray opposite $\theta=\pi/4$.

![[Kyle Kabasares - Integral Calculus - Plotting negative polar radii.png|**Fig. 27** The plotted polar pairs, with the positive-radius point $(2,\pi/4)$ shown for reference.]]

**Example.** Plot $(2\sqrt2,3\pi/4)$ by converting to Cartesian coordinates.

$$
\begin{aligned}
x&=2\sqrt2\cos(3\pi/4)=2\sqrt2\left(-\frac{\sqrt2}{2}\right)=-2,\\
y&=2\sqrt2\sin(3\pi/4)=2\sqrt2\left(\frac{\sqrt2}{2}\right)=2.
\end{aligned}
$$

![[Kyle Kabasares - Integral Calculus - Cartesian point from polar form.png|**Fig. 28** The Cartesian point $(-2,2)$ in the second quadrant.]]

### PDF page 48

**Example.** Convert the Cartesian point $(-1,-\sqrt3)$ to polar form.

$$
\begin{aligned}
r^2&=x^2+y^2=(-1)^2+(-\sqrt3)^2=1+3=4,\\
\tan\theta&=\frac{y}{x}=\frac{-\sqrt3}{-1}=\sqrt3.
\end{aligned}
$$

The equation $r^2=4$ allows $r=\pm2$. With $r=2$, the point lies in the third quadrant, so use the reference angle $\arctan(\sqrt3)=\pi/3$ and add $\pi$. The resulting polar pair is $\boxed{(2,4\pi/3)}$. The choice $r=-2$ instead gives $(-2,\pi/3)$.

![[Kyle Kabasares - Integral Calculus - Polar angle in the third quadrant.png|**Fig. 29** The point with radius $2$ and angle $4\pi/3$.]]

**Example.** Graph the region $1\le r\le2$. With all angles allowed, the region is the closed annulus between circles of radii $1$ and $2$ centered at the origin.

![[Kyle Kabasares - Integral Calculus - Annulus from polar bounds.png|**Fig. 30** The shaded annulus includes both boundary circles.]]

### PDF page 49

**Example.** Graph $r=\tan\theta\sec\theta$.

$$
r=\frac{\sin\theta}{\cos\theta}\frac{1}{\cos\theta}
=\frac{\sin\theta}{\cos^2\theta},
\qquad r\cos^2\theta=\sin\theta.
$$

Multiplying by $r$ gives $(r\cos\theta)^2=r\sin\theta$. Using the Cartesian coordinates $x=r\cos\theta$ and $y=r\sin\theta$ gives $\boxed{y=x^2}$.

![[Kyle Kabasares - Integral Calculus - Parabola from polar equation.png|**Fig. 31** The polar equation traces the upward-opening parabola $y=x^2$.]]

**Example.** Graph $r=3\cos(2\theta)$. The first positive zero occurs at $2\theta=\pi/2$, or $\theta=\pi/4$. The other zeros over one revolution occur at $3\pi/4$, $5\pi/4$, and $7\pi/4$.

![[Kyle Kabasares - Integral Calculus - Cosine rose reference plot.png|**Fig. 32** Reference graph of the signed radius $r$ against $\theta$, with values between $-3$ and $3$.]]

![[Kyle Kabasares - Integral Calculus - Four petal cosine rose.png|**Fig. 33** The polar graph has four petals of length $3$ along the coordinate axes.]]

### PDF page 50

**Example.** Graph $r=7\sin(2\theta)$. The first maximum occurs at $2\theta=\pi/2$, so $\theta=\pi/4$ and $r=7$.

![[Kyle Kabasares - Integral Calculus - Sine rose reference plot.png|**Fig. 34** The reference graph of $r$ against $\theta$ over one revolution, with extrema $7$ and $-7$.]]

![[Kyle Kabasares - Integral Calculus - Four petal sine rose.png|**Fig. 35** Four petals of length $7$ along the rays $\theta=\pi/4$, $3\pi/4$, $5\pi/4$, and $7\pi/4$.]]

**Example.** Graph $r=6+4\sin\theta$. The radius is $6$ at $\theta=0,\pi,2\pi$, reaches $10$ at $\theta=\pi/2$, and reaches its minimum $2$ at $\theta=3\pi/2$.

![[Kyle Kabasares - Integral Calculus - Sine limacon reference plot.png|**Fig. 36** The reference graph marks the radius at the four cardinal angles and at $2\pi$.]]

![[Kyle Kabasares - Integral Calculus - Dimpled sine limacon.png|**Fig. 37** A dimpled limaçon symmetric about the vertical axis, with the dimple at $\theta=3\pi/2$.]]

### PDF page 51

**Polar derivatives**

For $x=r\cos\theta$ and $y=r\sin\theta$, use $\theta$ as the parameter. When $dx/d\theta\ne0$,

$$
\frac{dy}{dx}=\frac{dy/d\theta}{dx/d\theta}.
$$

**Example.** For $r=2\sin\theta$, find the horizontal and vertical tangents and the tangent line at $\theta=\pi/6$.

$$
\begin{aligned}
x&=2\sin\theta\cos\theta,
&\frac{dx}{d\theta}&=2\cos^2\theta-2\sin^2\theta,\\
y&=2\sin^2\theta,
&\frac{dy}{d\theta}&=4\sin\theta\cos\theta.
\end{aligned}
$$

$$
\frac{dy}{dx}=\frac{4\sin\theta\cos\theta}{2\cos^2\theta-2\sin^2\theta}.
$$

**Horizontal tangents.** The numerator vanishes when $\sin\theta=0$ or $\cos\theta=0$. On $0\le\theta\le2\pi$ this gives $\boxed{\theta=0,\pi,2\pi}$ or $\boxed{\theta=\pi/2,3\pi/2}$. The denominator is nonzero at these values.

**Vertical tangents.** Set $dx/d\theta=0$. Then

$$
2\cos^2\theta=2\sin^2\theta,\qquad
\cos^2\theta=1-\cos^2\theta,\qquad
\cos^2\theta=\frac12.
$$

Thus $\cos\theta=\pm\sqrt2/2$, giving

$$
\boxed{\theta=\frac{\pi}{4},\frac{3\pi}{4},\frac{5\pi}{4},\frac{7\pi}{4}}.
$$

The numerator is nonzero at all four values.

### PDF page 52

**Tangent line, continued.** For $r=2\sin\theta$ at $\theta=\pi/6$, substitute into the slope from page 51.

$$
\begin{aligned}
m
&=\frac{4\sin(\pi/6)\cos(\pi/6)}{2\cos^2(\pi/6)-2\sin^2(\pi/6)}\\
&=\frac{4(1/2)(\sqrt3/2)}{2(\sqrt3/2)^2-2(1/2)^2}
=\frac{\sqrt3}{3/2-1/2}
=\sqrt3.
\end{aligned}
$$

At that angle, the point is

$$
\begin{aligned}
x&=2\sin(\pi/6)\cos(\pi/6)=\frac{\sqrt3}{2},\\
y&=2\sin^2(\pi/6)=\frac12.
\end{aligned}
$$

In point-slope form the tangent line is $y-\frac12=\sqrt3(x-\frac{\sqrt3}{2})$. Hence

$$
y=\frac12+\sqrt3\,x-\frac32=\boxed{\sqrt3\,x-1}.
$$

**Polar areas**

A sector of radius $r$ and angle $\theta$ has area

$$
A=\frac{\theta}{2\pi}\cdot\pi r^2=\frac12r^2\theta.
$$

![[Kyle Kabasares - Integral Calculus - Circular sector for polar area.png|**Fig. 38** A sector with radius $r$ and central angle $\theta$.]]

For a region swept out once by $r=r(\theta)$ as $\theta$ runs from $a$ to $b$, the area is

$$
A=\int_a^b\frac12r(\theta)^2\,d\theta.
$$

### PDF page 53

**Example.** Find the area of one loop of $r=2\cos(2\theta)$. The first positive zero satisfies $2\theta=\pi/2$, so $\theta=\pi/4$. The right-hand petal is traced from $-\pi/4$ to $\pi/4$.

![[Kyle Kabasares - Integral Calculus - Reference plot for rose petal area.png|**Fig. 39** The reference graph of $r=2\cos(2\theta)$, with the zeros of $r$ marked on the horizontal axis.]]

![[Kyle Kabasares - Integral Calculus - Shaded rose petal.png|**Fig. 40** The handwritten sketch shades the right-hand petal. The full rose also has a petal along the positive vertical axis, omitted in this sketch.]]

$$
\begin{aligned}
A
&=\frac12\int_{-\pi/4}^{\pi/4}[2\cos(2\theta)]^2\,d\theta\\
&=2\int_{-\pi/4}^{\pi/4}\cos^2(2\theta)\,d\theta\\
&=2\int_{-\pi/4}^{\pi/4}\frac12(1+\cos4\theta)\,d\theta\\
&=\left[\theta+\frac{\sin4\theta}{4}\right]_{-\pi/4}^{\pi/4}\\
&=\left(\frac{\pi}{4}+\frac{\sin\pi}{4}\right)
-\left(-\frac{\pi}{4}+\frac{\sin(-\pi)}{4}\right)
=\boxed{\frac{\pi}{2}}.
\end{aligned}
$$

### PDF page 54

**Example.** Find the area of one petal of $r=2\sin(2\theta)$. The first-quadrant petal starts and ends at the pole as $\theta$ runs from $0$ to $\pi/2$. Its maximum radius is $2$, attained at $2\theta=\pi/2$, or $\theta=\pi/4$.

![[Kyle Kabasares - Integral Calculus - Reference plot for sine petal area.png|**Fig. 41** The reference graph marks the zeros and extrema of $r=2\sin(2\theta)$.]]

![[Kyle Kabasares - Integral Calculus - Shaded sine rose petal.png|**Fig. 42** The shaded first-quadrant petal is centered on the ray $\theta=\pi/4$.]]

$$
\begin{aligned}
A
&=\frac12\int_0^{\pi/2}(2\sin2\theta)^2\,d\theta\\
&=2\int_0^{\pi/2}\sin^2(2\theta)\,d\theta\\
&=2\int_0^{\pi/2}\frac12(1-\cos4\theta)\,d\theta\\
&=\int_0^{\pi/2}(1-\cos4\theta)\,d\theta\\
&=\left[\theta-\frac{\sin4\theta}{4}\right]_0^{\pi/2}\\
&=\left(\frac{\pi}{2}-\frac{\sin(2\pi)}{4}\right)
-\left(0-\frac{\sin 0}{4}\right)
=\boxed{\frac{\pi}{2}}.
\end{aligned}
$$

### PDF page 55

**Polar areas, continued**

**Example.** Find the area of one loop of $r=2\cos(4\theta)$. The first positive zero satisfies $4\theta=\pi/2$, or $\theta=\pi/8$. For the upward petal, the consecutive zeros of $r$ are at $\theta=3\pi/8$ and $5\pi/8$.

![[Kyle Kabasares - Integral Calculus - Reference plot for eight petal rose.png|**Fig. 43** The reference graph of $r=2\cos(4\theta)$ from $\theta=0$ to $\theta=\pi$.]]

![[Kyle Kabasares - Integral Calculus - Eight petal rose partial sketch.png|**Fig. 44** Part of the polar curve, including the upward petal centered at $\theta=\pi/2$.]]

$$
\begin{aligned}
A
&=\frac12\int_{3\pi/8}^{5\pi/8}[2\cos(4\theta)]^2\,d\theta\\
&=\frac12\int_{3\pi/8}^{5\pi/8}4\cos^2(4\theta)\,d\theta
=2\int_{3\pi/8}^{5\pi/8}\cos^2(4\theta)\,d\theta\\
&=2\int_{3\pi/8}^{5\pi/8}\frac12(1+\cos8\theta)\,d\theta\\
&=\left[\theta+\frac{\sin8\theta}{8}\right]_{3\pi/8}^{5\pi/8}\\
&=\left(\frac{5\pi}{8}+\frac{\sin5\pi}{8}\right)
-\left(\frac{3\pi}{8}+\frac{\sin3\pi}{8}\right)\\
&=\frac{5\pi}{8}-\frac{3\pi}{8}
=\boxed{\frac{\pi}{4}}.
\end{aligned}
$$

### PDF page 56

**Example.** Find the area common to the polar curves $r=\cos\theta$ and $r=\sin(2\theta)$. The sketch shades the portions of the two right-hand rose petals inside the circle.

![[Kyle Kabasares - Integral Calculus - Reference plot for circle and rose.png|**Fig. 45** Reference graphs of the signed radii $\cos\theta$ and $\sin(2\theta)$.]]

![[Kyle Kabasares - Integral Calculus - Overlap of circle and rose.png|**Fig. 46** The common region is symmetric about the horizontal axis. The upper boundaries meet away from the pole on the ray $\theta=\pi/6$.]]

For the intersection in $0<\theta<\pi/2$,

$$
\sin(2\theta)=\cos\theta
\quad\Longrightarrow\quad
2\sin\theta\cos\theta=\cos\theta
\quad\Longrightarrow\quad
\sin\theta=\frac12
\quad\Longrightarrow\quad
\theta=\frac{\pi}{6}.
$$

In the upper half of the region, the smaller radius is $\sin(2\theta)$ from $0$ to $\pi/6$ and $\cos\theta$ from $\pi/6$ to $\pi/2$. Double the sum of the two sector integrals to include the lower half.

$$
\begin{aligned}
A
&=2\left[\frac12\int_0^{\pi/6}\sin^2(2\theta)\,d\theta
+\frac12\int_{\pi/6}^{\pi/2}\cos^2\theta\,d\theta\right]\\
&=\left[\frac{\theta}{2}-\frac{\sin4\theta}{8}\right]_0^{\pi/6}
+\left[\frac{\theta}{2}+\frac{\sin2\theta}{4}\right]_{\pi/6}^{\pi/2}\\
&=\left(\frac{\pi}{12}-\frac{\sqrt3}{16}\right)
+\left(\frac{\pi}{6}-\frac{\sqrt3}{8}\right)
=\boxed{\frac{\pi}{4}-\frac{3\sqrt3}{16}}.
\end{aligned}
$$

### PDF page 57

**Sequences**

A sequence is an ordered list of numbers. The first term is $a_1$, the second is $a_2$, and the $n$th term is $a_n$.

**Example.** Find a formula for the general term of the sequence

$$
\frac35,\quad -\frac4{25},\quad \frac5{125},\quad -\frac6{625},\quad \ldots.
$$

The numerators have magnitudes $n+2$, the denominators are $5^n$, and the signs alternate. The boxed formula in the notes gives a minus sign for the fourth term.

$$
\boxed{a_n=(-1)^{n-1}\frac{n+2}{5^n}}.
$$

**Monotonic sequence theorem.** Every bounded monotonic sequence converges.

- A sequence is bounded above if there is a number $M$ such that $a_n\le M$ for all $n\ge1$.
- It is bounded below if there is a number $m$ such that $m\le a_n$ for all $n\ge1$.
- A sequence is monotonic if it is increasing or decreasing.

**Example.** List the first five terms of $a_n=2n/(n^2+1)$.

$$
a_1=\frac{2(1)}{1^2+1}=1,\qquad
a_2=\frac45,\qquad
a_3=\frac6{10},\qquad
a_4=\frac8{17},\qquad
a_5=\frac{10}{26}.
$$

### PDF page 58

**Examples.** Find a formula for the general term of each sequence.

$$
1,\ \frac13,\ \frac15,\ \frac17,\ \frac19,\ \ldots
\qquad\Longrightarrow\qquad \boxed{a_n=\frac1{2n-1}}.
$$

The first terms are $a_1=1$, $a_2=1/[2(2)-1]=1/3$, and $a_3=1/[2(3)-1]=1/5$.

$$
\frac12,\ -\frac43,\ \frac94,\ -\frac{16}5,\ \frac{25}6,\ \ldots
\qquad\Longrightarrow\qquad \boxed{a_n=(-1)^{n-1}\frac{n^2}{n+1}}.
$$

Using the equivalent sign factor $(-1)^{n+1}$ gives $a_1=(-1)^{1+1}(1)^2/(1+1)=1/2$ and $a_2=(-1)^{2+1}(2)^2/(2+1)=-4/3$.

**Examples.** Determine whether each sequence converges and find its limit if it does.

1. Let $a_n=\tan\left(\frac{2n\pi}{1+8n}\right)$ and $b_n=\frac{2n\pi}{1+8n}$. Then

   $$
   \lim_{n\to\infty}b_n
   =\lim_{n\to\infty}\frac{2\pi}{1/n+8}
   =\frac{2\pi}{8}
   =\frac{\pi}{4}.
   $$

   By continuity of tangent at $\pi/4$, $\lim_{n\to\infty}a_n=\tan(\pi/4)=\boxed{1}$.

2. Let $a_n=\frac{e^n+e^{-n}}{e^{2n}-1}$. Multiply the numerator and denominator by $e^{-n}$.

   $$
   a_n=\frac{1+e^{-2n}}{e^n-e^{-n}}.
   $$

   The numerator tends to $1$ and the denominator tends to $+\infty$, so $\lim_{n\to\infty}a_n=\boxed{0}$.

### PDF page 59

**Sequence limits**

Apply l'Hôpital's rule to the corresponding real-variable limits. For $a_n=n^2e^{-n}$, two applications give

$$
\lim_{x\to\infty}\frac{x^2}{e^x}
=\lim_{x\to\infty}\frac{2x}{e^x}
=\lim_{x\to\infty}\frac{2}{e^x}
=\boxed{0}.
$$

The last quotient tends to zero directly. The sequence has the same limit.

For $a_n=\ln n/\ln(3n)$,

$$
\lim_{x\to\infty}\frac{\ln x}{\ln(3x)}
=\lim_{x\to\infty}\frac{1/x}{3/(3x)}
=\boxed{1}.
$$

**Series**

A series is a sum of terms. Its partial sums are

$$
\begin{aligned}
s_1&=a_1,\\
s_2&=a_1+a_2,\\
s_3&=a_1+a_2+a_3,\\
s_n&=a_1+a_2+\cdots+a_{n-1}+a_n=\sum_{i=1}^n a_i.
\end{aligned}
$$

**Geometric series**

A geometric series has first term $a=a_1$, common ratio $r$, and general term $a_n=a_1r^{n-1}$.

$$
a+ar+ar^2+ar^3+\cdots=\sum_{n=1}^\infty ar^{n-1}.
$$

For $|r|<1$, the sum is $a/(1-r)$.

**Example.** Find $\displaystyle\sum_{n=3}^\infty 5(2/3)^{n-1}$. Its first included term is $5(2/3)^2=20/9$, and its common ratio is $2/3$.

$$
\sum_{n=3}^\infty 5\left(\frac23\right)^{n-1}
=\frac{20/9}{1-2/3}
=\frac{20}{9}\cdot3
=\boxed{\frac{20}{3}}.
$$

### PDF page 60

**Example.** The series

$$
\sum_{n=1}^\infty\frac{\pi^n}{3^{n+2}}
=\sum_{n=1}^\infty\frac{\pi^n}{3^n\,3^2}
=\frac19\sum_{n=1}^\infty\left(\frac{\pi}{3}\right)^n
$$

is a divergent geometric series because $|\pi/3|>1$.

**$p$-series.** The series $\sum_{n=1}^\infty 1/n^p$ converges if $p>1$ and diverges if $p\le1$.

**Tests for convergence and divergence**

1. **Test for divergence.** If $\lim_{n\to\infty}a_n$ does not exist or is unequal to zero, then $\sum_{n=1}^\infty a_n$ diverges.
2. **Integral test.** Suppose $f$ is continuous, positive, and decreasing on $[1,\infty)$ and $a_n=f(n)$. Then $\sum_{n=1}^\infty a_n$ converges if and only if $\int_1^\infty f(x)\,dx$ converges.
3. **Comparison test.** Suppose $\sum a_n$ and $\sum b_n$ have positive terms.
   - If $\sum b_n$ converges and $a_n\le b_n$ for every $n$, then $\sum a_n$ converges.
   - If $\sum b_n$ diverges and $a_n\ge b_n$ for every $n$, then $\sum a_n$ diverges.

### PDF page 61

**Tests for convergence and divergence, continued**

4. **Limit comparison test.** Suppose $\sum a_n$ and $\sum b_n$ have positive terms. If $\lim_{n\to\infty}a_n/b_n=c$ for a finite $c>0$, then both series converge or both diverge.
5. **Alternating series test.** The alternating series $\sum_{n=1}^\infty(-1)^{n-1}b_n$ converges if its term magnitudes satisfy $b_{n+1}\le b_n$ for all $n$ and $\lim_{n\to\infty}b_n=0$.
6. **Ratio test.** Let $L=\lim_{n\to\infty}|a_{n+1}/a_n|$.
   - If $L<1$, then $\sum_{n=1}^\infty a_n$ converges absolutely.
   - If $L>1$ or $L=+\infty$, then the series diverges.
   - If $L=1$, the test is inconclusive.
7. **Root test.** Let $L=\lim_{n\to\infty}\sqrt[n]{|a_n|}$.
   - If $L<1$, then $\sum_{n=1}^\infty a_n$ converges absolutely.
   - If $L>1$ or $L=+\infty$, then the series diverges.
   - If $L=1$, the test is inconclusive.

### PDF page 62

**Error estimation**

**Remainder estimate for the integral test.** Let $S$ be the sum of the series with $a_n=f(n)$, and let $S_n$ be its $n$th partial sum. Under the integral-test hypotheses, the remainder $R_n=S-S_n$ satisfies

$$
\int_{n+1}^\infty f(x)\,dx\le R_n\le\int_n^\infty f(x)\,dx.
$$

The integral starting at $n$ gives an upper bound for the remainder.

**Alternating series estimation theorem.** Suppose $S=\sum_{n=1}^\infty(-1)^{n-1}b_n$, where $0\le b_{n+1}\le b_n$ and $\lim_{n\to\infty}b_n=0$. Then

$$
|R_n|=|S-S_n|\le b_{n+1}.
$$

**Ratio test example.** For the series $\sum_{n=1}^\infty 1/(n+3^n)$ written at the start of the example, the ratio is

$$
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
=\lim_{n\to\infty}\frac{n+3^n}{n+1+3^{n+1}}
=\lim_{n\to\infty}\frac{n/3^n+1}{(n+1)/3^n+3}
=\frac13<1.
$$

The handwritten calculation below that expression uses $a_n=1/(n\,3^n)$, which also gives the limit $1/3$.

$$
\lim_{n\to\infty}\frac{n}{n+1}\frac{3^n}{3^{n+1}}
=1\cdot\frac13=\frac13.
$$

Both series converge by the ratio test.

**Root test example.** For $\sum_{n=1}^\infty (2n+1)^n/n^{2n}$,

$$
\sqrt[n]{|a_n|}
=\left[\frac{(2n+1)^n}{n^{2n}}\right]^{1/n}
=\frac{2n+1}{n^2}.
$$

Its limit is $\lim_{n\to\infty}(2/n+1/n^2)=0$. The series converges absolutely by the root test.

### PDF page 63

**Example.** For $\sum_{n=1}^\infty(-1)^n n/(n+2)$, the magnitudes of the terms satisfy

$$
\lim_{n\to\infty}|a_n|=\lim_{n\to\infty}\frac{n}{n+2}
=\lim_{n\to\infty}\frac{1}{1+2/n}=1.
$$

The terms themselves have no limit. The even subsequence tends to $1$ and the odd subsequence tends to $-1$. The series diverges by the test for divergence.

**Example.** For $\sum_{n=2}^\infty 1/(n\sqrt{\ln n})$, use $f(x)=1/(x\sqrt{\ln x})$, which is continuous, positive, and decreasing for $x\ge2$. Set $u=\ln x$ and $du=dx/x$.

$$
\begin{aligned}
\int_2^\infty\frac{dx}{x\sqrt{\ln x}}
&=\lim_{t\to\infty}\int_2^t\frac{dx}{x\sqrt{\ln x}}\\
&=\lim_{t\to\infty}\int_{\ln 2}^{\ln t}u^{-1/2}\,du\\
&=\lim_{t\to\infty}\left(2\sqrt{\ln t}-2\sqrt{\ln 2}\right)
=+\infty.
\end{aligned}
$$

The series diverges by the integral test. The transcription uses $\ln t$ as the transformed upper limit.

**Example.** For $\sum_{k=1}^\infty k^2e^{-k}=\sum_{k=1}^\infty k^2/e^k$, the ratio test gives

$$
\lim_{k\to\infty}\left|\frac{a_{k+1}}{a_k}\right|
=\lim_{k\to\infty}\frac{(k+1)^2}{k^2}\frac{e^k}{e^{k+1}}
=\frac1e<1.
$$

The series converges absolutely. The transcription includes the square on $k$ in the ratio's denominator.

**Example.** For $\sum_{n=1}^\infty n/5^n$,

$$
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
=\lim_{n\to\infty}\frac{n+1}{n}\frac{5^n}{5^{n+1}}
=\frac15<1.
$$

The series converges absolutely by the ratio test.

### PDF page 64

**Example.** Test $\sum_{n=1}^\infty n\ln n/(n+1)^3$ for convergence. Compare with $b_n=n\ln n/n^3=\ln n/n^2$ and let $f(x)=\ln x/x^2$.

$$
f'(x)=\frac{x^2(1/x)-2x\ln x}{x^4}
=\frac{x(1-2\ln x)}{x^4}
=\frac{1-2\ln x}{x^3}.
$$

The function is decreasing when $2\ln x>1$, in particular on $[2,\infty)$. It is continuous and positive there.

To evaluate $\int_1^\infty f(x)\,dx$, integrate by parts using $u=\ln x$, $du=dx/x$, $dv=x^{-2}\,dx$, and $v=-1/x$.

$$
\int\frac{\ln x}{x^2}\,dx
=-\frac{\ln x}{x}-\int\left(-\frac1x\right)\frac{dx}{x}
=-\frac{\ln x}{x}-\frac1x+C.
$$

$$
\begin{aligned}
\int_1^\infty\frac{\ln x}{x^2}\,dx
&=\lim_{t\to\infty}\left[-\frac{\ln x}{x}-\frac1x\right]_1^t\\
&=\lim_{t\to\infty}\left(-\frac{\ln t}{t}-\frac1t+1\right)
=\boxed{1}.
\end{aligned}
$$

The integral test on the tail from $n=2$ gives convergence of $\sum b_n$. The transcription makes the final comparison explicit. Since $(n+1)^3\ge n^3$ and $n\ln n\ge0$ for $n\ge1$, the given series is bounded term by term by $\sum b_n$ and also converges.

### PDF page 65

**Example.** Compare $\sum_{n=1}^\infty 1/(10n+1)$ with the divergent harmonic series $\sum_{n=1}^\infty 1/n$, a $p$-series with $p=1$.

$$
\lim_{n\to\infty}\frac{a_n}{b_n}
=\lim_{n\to\infty}\frac{1/(10n+1)}{1/n}
=\lim_{n\to\infty}\frac{n}{10n+1}
=\frac1{10}>0.
$$

The series diverges by the limit comparison test.

**Example.** For $\sum_{n=1}^\infty 1/n^{1/5}$, take $b_n=1/n$. Since $n\ge n^{1/5}$ for $n\ge1$,

$$
a_n=\frac1{n^{1/5}}\ge\frac1n=b_n.
$$

The series diverges by comparison with the harmonic series. It also diverges by the $p$-series rule with $p=1/5$.

**Example.** Compare $\sum_{n=1}^\infty 1/(2n+1)^3$ with $\sum_{n=1}^\infty 1/(2n^3)$, a constant multiple of a convergent $p$-series with exponent $p=3$. For $n\ge1$,

$$
(2n+1)^3=(4n^2+4n+1)(2n+1)
=8n^3+12n^2+6n+1>2n^3.
$$

Hence $1/(2n+1)^3<1/(2n^3)$, and the series converges by the comparison test.

### PDF page 66

**Example.** How many terms suffice to approximate $\pi$ with absolute error at most $0.0005$? Use

$$
\pi=\sum_{n=1}^\infty(-1)^{n-1}\frac4{2n-1}.
$$

The alternating-series estimate gives $|\pi-S_n|\le b_{n+1}$, where $b_n=4/(2n-1)$. Require

$$
b_{n+1}=\frac4{2(n+1)-1}=\frac4{2n+1}\le0.0005.
$$

Then $4/0.0005=8000\le2n+1$, so $7999\le2n$. The first integer meeting this bound is $\boxed{4000}$.

**Example.** How many terms suffice to approximate $\pi^2$ with absolute error less than $0.0005$? From $\sum_{n=1}^\infty 1/n^2=\pi^2/6$, use $\sum_{n=1}^\infty 6/n^2=\pi^2$ and the integral-test remainder bound.

$$
R_n=S-S_n\le\int_n^\infty\frac6{x^2}\,dx
=\lim_{t\to\infty}\left[-\frac6x\right]_n^t
=\lim_{t\to\infty}\left(-\frac6t+\frac6n\right)
=\frac6n.
$$

The sufficient condition $6/n<0.0005$ gives $\boxed{n>12000}$, so $12001$ terms satisfy the displayed strict bound.

### PDF page 67

**Example.** Estimate the error from using ten terms of $\sum_{n=2}^\infty 1/[n(\ln n)^2]$. Set $f(x)=1/[x(\ln x)^2]$, which is positive, continuous, and decreasing for $x\ge2$. The substitution $u=\ln x$, $du=dx/x$, gives

$$
\begin{aligned}
\int_2^\infty f(x)\,dx
&=\lim_{t\to\infty}\int_{\ln 2}^{\ln t}\frac{du}{u^2}\\
&=\lim_{t\to\infty}\left(-\frac{1}{\ln t}+\frac1{\ln 2}\right)
=\frac1{\ln 2}.
\end{aligned}
$$

The series converges by the integral test. For a partial sum ending at index $N$, the integral remainder estimate is

$$
R_N\le\int_N^\infty f(x)\,dx
=\lim_{t\to\infty}\left[-\frac{1}{\ln x}\right]_N^t
=\frac1{\ln N}.
$$

The notes give $R_{10}\le 1/\ln 10$, for a sum ending at index $10$. Ten terms from $n=2$ end at $n=11$, giving the bound $\boxed{1/\ln 11}$ for the question as worded.

**Example.** How many terms suffice to approximate $\pi^2$ with absolute error at most $0.00005$? Start with the alternating series identity.

$$
\sum_{n=1}^\infty(-1)^{n-1}\frac1{n^2}=\frac{\pi^2}{12},
\qquad
\sum_{n=1}^\infty(-1)^{n-1}\frac{12}{n^2}=\pi^2.
$$

The alternating-series estimate gives

$$
|R_n|\le b_{n+1}=\frac{12}{(n+1)^2}.
$$

Require $12/(n+1)^2\le0.00005$. This gives

$$
(n+1)^2\ge\frac{12}{0.00005}=240000,
\qquad
n+1\ge\sqrt{240000}.
$$

The smallest integer $n+1$ meeting the bound is $490$, so $\boxed{489}$ terms suffice.

### PDF page 68

**Power-series representation of functions**

Use the geometric series with common ratio $x$.

$$
\frac1{1-x}=\sum_{n=0}^\infty x^n,\qquad |x|<1.
$$

**Examples.** Substitute the indicated expressions for the common ratio. The convergence conditions follow from requiring that its magnitude be less than one.

$$
\begin{aligned}
\frac1{1+x}
&=\frac1{1-(-x)}
=\boxed{\sum_{n=0}^\infty(-x)^n},
& |x|&<1,\\
\frac1{1-x^3}
&=\sum_{n=0}^\infty(x^3)^n
=\boxed{\sum_{n=0}^\infty x^{3n}},
& |x|&<1,\\
\frac1{1+9x^2}
&=\frac1{1-(-9x^2)}
=\boxed{\sum_{n=0}^\infty(-9x^2)^n},
& |x|&<\frac13.
\end{aligned}
$$

$$
\begin{aligned}
\frac{x}{4x+1}
&=x\frac1{1-(-4x)}\\
&=x\sum_{n=0}^\infty(-4x)^n
=\boxed{\sum_{n=0}^\infty(-4)^n x^{n+1}},\qquad |x|<\frac14.
\end{aligned}
$$

$$
\begin{aligned}
\frac{x}{9+x^2}
&=x\frac1{9(1+x^2/9)}\\
&=\frac{x}{9}\frac1{1-(-x^2/9)}
=\frac{x}{9}\sum_{n=0}^\infty\left(-\frac{x^2}{9}\right)^n\\
&=\boxed{\sum_{n=0}^\infty\frac{(-1)^n x^{2n+1}}{9^{n+1}}},\qquad |x|<3.
\end{aligned}
$$

### PDF page 69

**Finding the interval and radius of convergence**

**Example.** For $\sum_{n=1}^\infty x^n/\sqrt n$, apply the ratio test at $x\ne0$.

$$
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
=\lim_{n\to\infty}\left|\frac{x^{n+1}}{x^n}\right|
\frac{\sqrt n}{\sqrt{n+1}}
=|x|.
$$

The series converges absolutely for $|x|<1$, including $x=0$ where all terms are zero. It diverges for $|x|>1$. The radius of convergence is $R=1$.

- At $x=1$, the series is $\sum_{n=1}^\infty 1/n^{1/2}$, a divergent $p$-series with $p=1/2$.
- At $x=-1$, the series is $\sum_{n=1}^\infty(-1)^n/n^{1/2}$. The magnitudes $b_n=1/\sqrt n$ tend to zero and $b_{n+1}=1/\sqrt{n+1}<1/\sqrt n$. The series converges by the alternating series test.

The interval of convergence is $\boxed{[-1,1)}$.

### PDF page 70

**Example.** Find the radius and interval of convergence of $\sum_{n=0}^\infty (-3)^n x^n/\sqrt{n+1}$. For $x\ne0$, the ratio test gives

$$
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
=\lim_{n\to\infty}\left|\frac{(-3)^{n+1}x^{n+1}}{(-3)^n x^n}\right|
\frac{\sqrt{n+1}}{\sqrt{n+2}}
=3|x|.
$$

The series converges absolutely for $|x|<1/3$, including $x=0$ directly, and diverges for $|x|>1/3$. Thus $\boxed{R=1/3}$.

At $x=-1/3$, the terms become $a_n=1/\sqrt{n+1}$. Compare the tail with $b_n=1/\sqrt n$, whose series diverges because $p=1/2$.

$$
\lim_{n\to\infty}\frac{a_n}{b_n}
=\lim_{n\to\infty}\frac{\sqrt n}{\sqrt{n+1}}=1.
$$

The series diverges at the left endpoint by limit comparison.

At $x=1/3$, the terms become $(-1)^n/\sqrt{n+1}$. The magnitudes $b_n=1/\sqrt{n+1}$ tend to zero and satisfy $b_{n+1}=1/\sqrt{n+2}<1/\sqrt{n+1}$. The series converges at the right endpoint by the alternating series test.

The interval of convergence is $\boxed{(-1/3,1/3]}$.

### PDF page 71

**Taylor and Maclaurin series**

The Taylor series of $f$ about $a$ is

$$
\begin{aligned}
\sum_{n=0}^\infty\frac{f^{(n)}(a)}{n!}(x-a)^n
={}&f(a)+\frac{f'(a)}{1!}(x-a)+\frac{f''(a)}{2!}(x-a)^2\\
&+\frac{f'''(a)}{3!}(x-a)^3+\cdots.
\end{aligned}
$$

Where the Taylor series represents $f$, the expression equals $f(x)$. The case $a=0$ is a Maclaurin series.

**Example.** Find the Maclaurin series for $f(x)=\sin x$. The coefficients are $c_n=f^{(n)}(0)/n!$.

| $n$ | $f^{(n)}(x)$ | $f^{(n)}(0)$ | $c_n$ |
| --- | --- | --- | --- |
| $0$ | $\sin x$ | $0$ | $0/0!$ |
| $1$ | $\cos x$ | $1$ | $1/1!$ |
| $2$ | $-\sin x$ | $0$ | $0/2!$ |
| $3$ | $-\cos x$ | $-1$ | $-1/3!$ |
| $4$ | $\sin x$ | $0$ | $0/4!$ |

$$
\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\cdots
=\boxed{\sum_{n=0}^\infty\frac{(-1)^n x^{2n+1}}{(2n+1)!}}.
$$

The third-degree Taylor polynomial is $T_3(x)=x-x^3/3!$.

**Example.** Find the Maclaurin series for $f(x)=e^x$.

| Order | Derivative | Value at $0$ | Coefficient |
| --- | --- | --- | --- |
| $0$ | $e^x$ | $1$ | $1/0!$ |
| $1$ | $e^x$ | $1$ | $1/1!$ |
| $2$ | $e^x$ | $1$ | $1/2!$ |
| $3$ | $e^x$ | $1$ | $1/3!$ |
| $n$ | $e^x$ | $1$ | $1/n!$ |

$$
e^x
=1+\frac{x}{1!}+\frac{x^2}{2!}+\frac{x^3}{3!}+\frac{x^4}{4!}+\cdots
=\boxed{\sum_{n=0}^\infty\frac{x^n}{n!}}.
$$

### PDF page 72

**Example.** Find the Maclaurin series for $f(x)=e^{5x}$.

| Order | Derivative | Value at $0$ | Coefficient |
| --- | --- | --- | --- |
| $0$ | $e^{5x}$ | $1$ | $1/0!$ |
| $1$ | $5e^{5x}$ | $5$ | $5/1!$ |
| $2$ | $25e^{5x}$ | $25$ | $5^2/2!$ |
| $3$ | $125e^{5x}$ | $125$ | $5^3/3!$ |
| $4$ | $625e^{5x}$ | $625$ | $5^4/4!$ |
| $n$ | $5^n e^{5x}$ | $5^n$ | $5^n/n!$ |

$$
e^{5x}=\boxed{\sum_{n=0}^\infty\frac{5^n}{n!}x^n}.
$$

**Differentiating and integrating series**

**Example.** Find a power series for $x^2/(1-2x)^2$. Start with the geometric series

$$
\frac1{1-2x}=\sum_{n=0}^\infty(2x)^n
=\sum_{n=0}^\infty 2^n x^n,\qquad |x|<\frac12.
$$

Differentiate within the interval of convergence and reindex the sum.

$$
\frac{d}{dx}\left(\frac1{1-2x}\right)
=\frac2{(1-2x)^2}
=\sum_{n=1}^\infty 2^n n x^{n-1}
=\sum_{n=0}^\infty 2^{n+1}(n+1)x^n.
$$

Multiply by $x^2/2$ to obtain

$$
\frac{x^2}{(1-2x)^2}
=\boxed{\sum_{n=0}^\infty 2^n(n+1)x^{n+2}},\qquad |x|<\frac12.
$$

### PDF page 73

**Constructing new Taylor series from known series**

**Example.** Find the Taylor series of $1/(1+x)^2$ about $0$. Start with

$$
\frac1{1+x}=1-x+x^2-x^3+\cdots=\sum_{n=0}^\infty(-1)^n x^n,\qquad |x|<1.
$$

Differentiate term by term.

$$
\frac{d}{dx}\left(\frac1{1+x}\right)
=-\frac1{(1+x)^2}
=-1+2x-3x^2+4x^3-\cdots
=\sum_{n=0}^\infty(-1)^{n+1}(n+1)x^n.
$$

Thus

$$
\frac1{(1+x)^2}
=1-2x+3x^2-4x^3+\cdots
=\boxed{\sum_{n=0}^\infty(-1)^n(n+1)x^n},\qquad |x|<1.
$$

**Example.** Find the Taylor series of $\arctan x$ about $0$. Use the geometric series for $1/(1+x^2)$ and integrate term by term from $0$ to $x$, with $|x|<1$.

$$
\begin{aligned}
\arctan x
&=\int_0^x\frac{dt}{1+t^2}
=\int_0^x(1-t^2+t^4-t^6+\cdots)\,dt\\
&=x-\frac{x^3}{3}+\frac{x^5}{5}-\frac{x^7}{7}+\cdots\\
&=\boxed{\sum_{n=0}^\infty\frac{(-1)^n x^{2n+1}}{2n+1}}.
\end{aligned}
$$

### PDF page 74

**Lecture, November 1, 2013**

**11.1 Sequences**

Monotonic sequence theorem.

$$
\begin{aligned}
\cos x&=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\cdots,\\
\sin x&=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\frac{x^7}{7!}+\cdots,\\
e^x&=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots.
\end{aligned}
$$

**Example.** The sequence $1/3,1/9,1/27,\ldots$ has general term $a_n=1/3^n$, where $n$ is the index.

$$
\lim_{n\to\infty}a_n=\lim_{n\to\infty}\frac1{3^n}=\boxed{0}.
$$

**Example.**

$$
\lim_{n\to\infty}\frac{n^3+3n}{4n^3+5}=\boxed{\frac14}.
$$

**11.2 Series**

**Geometric series.** The partial sum of the first $n$ terms is

$$
s_n=a+ar+ar^2+\cdots+ar^{n-1}=\sum_{k=1}^{n}ar^{k-1}.
$$

The series converges for $|r|<1$, and its sum is

$$
\sum_{n=1}^\infty ar^{n-1}=\frac{a}{1-r}.
$$

For $a\ne0$, the series diverges when $|r|\ge1$. The transcription gives the partial sum a finite upper index and includes both signs of $r$ in the divergence condition.

### PDF page 75

**Telescoping sum**

Show that $\sum_{n=1}^\infty 1/[n(n+1)]$ converges and find its sum. Each term is $1/n-1/(n+1)$, giving the partial sum $S_n=1-1/(n+1)$.

$$
S=\lim_{n\to\infty}S_n
=\lim_{n\to\infty}\left(1-\frac1{n+1}\right)
=1-0=\boxed{1}.
$$

**Example.** For $\sum_{n=1}^\infty n^2/(5n^2+4)$,

$$
\lim_{n\to\infty}a_n=\lim_{n\to\infty}\frac{n^2}{5n^2+4}
=\frac15\ne0.
$$

The series diverges by the test for divergence.

**Example.** For $\sum_{n=1}^\infty1/n$, the terms satisfy $\lim_{n\to\infty}1/n=0$, so the test for divergence is inconclusive.

**Testing series for convergence**

Many series lack a closed-form sum like that of a geometric series. For a convergent series in such cases, use a partial sum to approximate the infinite sum.

### PDF page 76

**Lecture, November 4, 2013**

**11.3 Integral test**

For $a_n=f(n)$ with $f$ continuous, positive, and decreasing on $[1,\infty)$, the series $\sum_{n=1}^\infty a_n$ converges if $\int_1^\infty f(x)\,dx$ converges and diverges if the integral diverges.

**$p$-series.** The series $\sum_{n=1}^\infty 1/n^p$ converges for $p>1$ and diverges for $p\le1$.

**Error estimation.** Suppose $f(k)=a_k$, where $f$ is continuous, positive, and decreasing for $x\ge n$, and the series $\sum a_k$ converges to $S$. If $R_n=S-s_n$, then

$$
\int_{n+1}^{\infty} f(x)\,dx\le R_n\le \int_n^{\infty} f(x)\,dx.
$$

![[Kyle Kabasares - Integral Calculus - Integral test remainder rectangles.png|**Fig. 47** The first two unit-width rectangles of the tail have heights $a_{n+1}$ and $a_{n+2}$. They lie beneath the decreasing curve, illustrating the upper integral bound.]]

$$
s_n=a_1+a_2+\cdots+a_n,\qquad
R_n=a_{n+1}+a_{n+2}+\cdots,\qquad
S=s_n+R_n.
$$

### PDF page 77

**Example.** How many terms suffice to approximate $\pi^2$ with absolute error below $0.0005$? Use

$$
\sum_{n=1}^\infty\frac1{n^2}=\frac{\pi^2}{6},
\qquad
S=\sum_{n=1}^\infty\frac6{n^2}=\pi^2.
$$

For $R_n=S-S_n$, impose the sufficient condition $R_n<\int_n^\infty 6x^{-2}\,dx<0.0005$.

$$
\int_n^\infty\frac6{x^2}\,dx
=\lim_{a\to\infty}\left[-\frac6x\right]_n^a
=\lim_{a\to\infty}\left(-\frac6a+\frac6n\right)
=\frac6n.
$$

Thus $6/0.0005<n$, giving $\boxed{12000<n}$ as the condition on the upper bound. The notes also record the numerical partial sum $\sum_{n=1}^{12000}6/n^2\approx9.86910$. At $n=12000$ the upper bound equals $0.0005$, and the strictly decreasing integrand still makes the actual remainder smaller than the bound.

**Comparison test**

Suppose $\sum a_n$ and $\sum b_n$ have positive terms.

1. If $\sum b_n$ converges and $a_n\le b_n$ for all $n$, then $\sum a_n$ converges.
2. If $\sum b_n$ diverges and $a_n\ge b_n$ for all $n$, then $\sum a_n$ diverges.

### PDF page 78

**Comparison test, continued**

**Part 1.** Let $\sum b_n=b_1+b_2+b_3+\cdots$ be the known series and $\sum a_n=a_1+a_2+a_3+\cdots$ the series being tested. Both have positive terms. If $b_n>a_n$ for all $n$ and $\sum b_n$ converges, then $\sum a_n$ converges.

![[Kyle Kabasares - Integral Calculus - Comparison test upper bound sketch.png|**Fig. 48** The drawing places the smaller series $\sum a_n$ inside the convergent comparison series $\sum b_n$.]]

**Part 2.** If $b_n<a_n$ for all $n$ and $\sum b_n$ diverges, then $\sum a_n$ diverges.

![[Kyle Kabasares - Integral Calculus - Comparison test lower bound sketch.png|**Fig. 49** The drawing places the divergent comparison series $\sum b_n$ inside the larger series $\sum a_n$.]]

**Example.** For $a_n=n/(2n^3+1)$, use

$$
b_n=\frac{n}{2n^3}=\frac12\frac1{n^2}.
$$

The series $\sum b_n$ converges by the $p$-series rule with $p=2$. Cross-multiplying $n/(2n^3)>n/(2n^3+1)$ gives $n(2n^3+1)>2n^4$, which reduces to $n>0$. Therefore $a_n<b_n$ for every $n\ge1$ and $\sum_{n=1}^\infty a_n$ converges by comparison.

### PDF page 79

**Example.** For $\sum_{n=2}^\infty n^3/(n^4-1)$, compare with $b_n=n^3/n^4=1/n$. The comparison series is a divergent $p$-series with $p=1$. For $n\ge2$ both denominators are positive, and

$$
\frac{n^3}{n^4-1}>\frac{n^3}{n^4}
\quad\Longleftrightarrow\quad
n^7>n^7-n^3
\quad\Longleftrightarrow\quad
0>-n^3.
$$

Thus $a_n>b_n$ and $\sum a_n$ diverges by comparison.

**Limit comparison test**

Suppose $\sum a_n$ and $\sum b_n$ are series with positive terms. If $\lim_{n\to\infty}a_n/b_n=c$, where $c$ is finite and positive, both series converge or both diverge.

**Example.** The denominator in this example is written with a plus sign.

$$
\lim_{n\to\infty}\frac{n^3}{n^4+1}\frac{n^4}{n^3}
=\lim_{n\to\infty}\frac{n^4}{n^4+1}
=\lim_{n\to\infty}\frac{1}{1+1/n^4}
=\boxed{1}.
$$

Comparison with the harmonic series also gives divergence for $\sum_{n=1}^\infty n^3/(n^4+1)$.

### PDF page 80

**Lecture, November 6, 2013**

**Example.** Test the series

$$
\frac15+\frac18+\frac1{11}+\frac1{14}+\cdots
=\sum_{n=1}^\infty\frac1{3n+2}.
$$

Use $a_n=1/(3n+2)$ and $b_n=1/(3n)$. The series $\sum b_n=\frac13\sum 1/n$ diverges, and $a_n<b_n$ for all $n\ge1$. Direct comparison with this upper bound is inconclusive.

![[Kyle Kabasares - Integral Calculus - Inconclusive comparison with harmonic series.png|**Fig. 50** The series being tested lies inside the divergent upper comparison series in the sketch.]]

The limit comparison gives

$$
\lim_{n\to\infty}\frac{a_n}{b_n}
=\lim_{n\to\infty}\frac{3n}{3n+2}
=\lim_{n\to\infty}\frac3{3+2/n}=1>0.
$$

Therefore $\sum a_n$ diverges by limit comparison.

**Example.** Compare $\sum_{n=1}^\infty\sqrt{n^2-1}/(n^3+2n^2+5)$ with the convergent series $\sum \sqrt{n^2}/n^3=\sum 1/n^2$.

$$
\begin{aligned}
\lim_{n\to\infty}\frac{a_n}{b_n}
&=\lim_{n\to\infty}\frac{\sqrt{n^2-1}}{n^3+2n^2+5}
\frac{n^3}{\sqrt{n^2}}\\
&=\lim_{n\to\infty}\sqrt{\frac{n^2-1}{n^2}}\,
\frac1{1+2/n+5/n^3}
=1\cdot1=\boxed{1}>0.
\end{aligned}
$$

The given series converges by limit comparison on the tail $n\ge2$.

### PDF page 81

**Example 3.** Compare $\sum_{n=1}^\infty 9^n/(10^n-3)$ with $\sum_{n=1}^\infty 9^n/10^n=\sum_{n=1}^\infty(9/10)^n$, a convergent geometric series with $|r|=9/10<1$.

$$
\lim_{n\to\infty}\frac{9^n}{10^n-3}\frac{10^n}{9^n}
=\lim_{n\to\infty}\frac{10^n}{10^n-3}
=\lim_{n\to\infty}\frac1{1-3/10^n}
=1>0.
$$

The given series converges by limit comparison.

**Alternating series test**

Suppose $b_n>0$ in the alternating series

$$
\sum_{n=1}^\infty(-1)^{n-1}b_n=b_1-b_2+b_3-b_4+\cdots.
$$

If $b_{n+1}\le b_n$ for all $n$ and $\lim_{n\to\infty}b_n=0$, then the series converges. The first partial sums are

$$
S_1=b_1,\qquad S_2=b_1-b_2,\qquad S_3=b_1-b_2+b_3.
$$

The partial sums tend to $L$ as $n\to\infty$.

![[Kyle Kabasares - Integral Calculus - Alternating partial sums around the limit.png|**Fig. 51** The changes in successive partial sums have decreasing magnitudes, and the sums approach the line labeled $L$.]]

### PDF page 82

**Example.** The alternating harmonic series is

$$
\sum_{n=1}^\infty\frac{(-1)^{n-1}}{n}
=\sum_{n=1}^\infty(-1)^{n-1}\frac1n
=1-\frac12+\frac13-\frac14+\frac15-\cdots.
$$

For $b_n=1/n$, we have $b_{n+1}=1/(n+1)<1/n=b_n$. Equivalently, $f(x)=1/x$ has $f'(x)=-1/x^2<0$ for $x>0$. Also, $\lim_{n\to\infty}b_n=0$. The series converges by the alternating series test. The notes give its sum as $\ln 2$.

**Example 2.** Consider $\sum_{n=1}^\infty(-1)^{n-1}3n/(4n-1)$, with $b_n=3n/(4n-1)$. Check whether $b_{n+1}<b_n$.

$$
\begin{aligned}
\frac{3(n+1)}{4(n+1)-1}<\frac{3n}{4n-1}
&\quad\Longleftrightarrow\quad (3n+3)(4n-1)<3n(4n+3)\\
&\quad\Longleftrightarrow\quad 12n^2+9n-3<12n^2+9n\\
&\quad\Longleftrightarrow\quad -3<0.
\end{aligned}
$$

The magnitudes decrease, but

$$
\lim_{n\to\infty}b_n
=\lim_{n\to\infty}\frac{3}{4-1/n}
=\frac34\ne0.
$$

The alternating series test gives no conclusion. The handwritten example continues on the next page.

### PDF page 83

**Example 2, continued.** Use the test for divergence on

$$
a_n=(-1)^{n-1}\frac{3n}{4n-1}.
$$

The factor $3n/(4n-1)$ tends to $3/4$. The factor $(-1)^{n-1}$ is $1$ on odd indices and $-1$ on even indices. Consequently,

$$
\lim_{k\to\infty}a_{2k-1}=\frac34,\qquad
\lim_{k\to\infty}a_{2k}=-\frac34.
$$

The term limit does not exist, so $\sum a_n$ diverges. The transcription uses the two subsequences to justify the conclusion because the handwritten product of limits contains a factor with no limit.

### PDF page 84

**Lecture, November 8, 2013**

**Example.** Test $\sum_{n=1}^\infty(-1)^{n-1}n^2/(n^3+1)$ for convergence. Let $b_n=n^2/(n^3+1)$. To check whether $b_{n+1}<b_n$, cross-multiply the positive denominators.

$$
\frac{(n+1)^2}{(n+1)^3+1}<\frac{n^2}{n^3+1}
\quad\Longleftrightarrow\quad
(n^3+1)(n+1)^2<n^2[(n+1)^3+1].
$$

Expanding both sides gives

$$
n^5+2n^4+n^3+n^2+2n+1
<n^5+3n^4+3n^3+2n^2.
$$

After canceling common terms, this is $n^2+2n+1<n^4+2n^3+2n^2$. It holds for $n\ge1$, so $b_{n+1}<b_n$.

The notes also check eventual decrease by differentiating $f(x)=x^2/(x^3+1)$.

$$
\begin{aligned}
f'(x)
&=\frac{2x(x^3+1)-3x^2\cdot x^2}{(x^3+1)^2}\\
&=\frac{2x^4+2x-3x^4}{(x^3+1)^2}
=\frac{2x-x^4}{(x^3+1)^2}.
\end{aligned}
$$

The derivative is negative for $x>\sqrt[3]{2}$. Also,

$$
\lim_{n\to\infty}b_n
=\lim_{n\to\infty}\frac{1/n}{1+1/n^3}=0.
$$

The series converges by the alternating series test.

**Alternating series estimation theorem.** If $S=\sum_{n=1}^\infty(-1)^{n-1}b_n$, $0\le b_{n+1}\le b_n$, and $b_n\to0$, then the error after $n$ terms satisfies $|R_n|=|S-S_n|\le b_{n+1}$.

How many terms are needed for three decimal places?

### PDF page 85

**Alternating-series remainder.** Write $\sum_{n=1}^\infty(-1)^{n-1}b_n=b_1-b_2+b_3-b_4+\cdots$, where the magnitudes decrease to zero. The first partial sums are

$$
S_1=b_1,\qquad S_2=b_1-b_2,\qquad S_3=b_1-b_2+b_3.
$$

After three terms the error satisfies $|R_3|=|S-S_3|\le b_4$. In general,

$$
|R_n|=|S-S_n|\le b_{n+1}.
$$

**Example.** Estimate $\ln 2$ to the stated tolerance of $0.0005$. Use

$$
\ln 2=\sum_{n=1}^\infty\frac{(-1)^{n-1}}{n},\qquad
b_n=\frac1n,\qquad b_{n+1}=\frac1{n+1}.
$$

The notes take a strict inequality in solving the bound.

$$
\frac1{n+1}<0.0005
\quad\Longleftrightarrow\quad
n+1>2000
\quad\Longleftrightarrow\quad
\boxed{n>1999}.
$$

Thus $2000$ terms suffice for that strict bound. For the non-strict bound $\frac1{n+1}\le0.0005$, $1999$ terms suffice.

**Absolute and conditional convergence**

1. A series $\sum a_n$ is **absolutely convergent** if $\sum |a_n|$ converges.
2. A series $\sum a_n$ is **conditionally convergent** if it converges while $\sum |a_n|$ diverges.

The positive series $\sum 1/n^2$ converges absolutely by the $p$-series rule. The alternating harmonic series with $a_n=(-1)^{n-1}/n$ converges, while $\sum|a_n|=\sum 1/n$ diverges. It converges conditionally.

### PDF page 86

If $\sum |a_n|$ converges, then $\sum a_n$ converges. The proof uses

$$
0\le |a_n|-a_n\le 2|a_n|.
$$

Both bounds can be attained, so the transcription uses non-strict inequalities.

**Lecture, November 13, 2013**

**Absolute convergence.** For $a_n=(-1)^n/n^2$, the magnitudes are $|a_n|=1/n^2$, whose sum converges.

**Proof.** Let $M=\sum_{n=1}^\infty |a_n|$ and $b_n=|a_n|-a_n$. The series $\sum 2|a_n|$ converges to $2M$. Since $0\le b_n\le2|a_n|$, comparison gives convergence of $\sum b_n$ to some $L$. For finite partial sums,

$$
\sum_{n=1}^{N}a_n=\sum_{n=1}^{N}|a_n|-\sum_{n=1}^{N}b_n.
$$

Taking limits gives $\boxed{\sum_{n=1}^\infty a_n=M-L}$.

**Example.** For $\sum_{n=1}^\infty \cos(n)/n^2$, the inequality $-1\le\cos n\le1$ implies

$$
0\le\frac{|\cos n|}{n^2}\le\frac1{n^2}.
$$

The upper series is a convergent $p$-series, so $\sum|\cos(n)/n^2|$ converges by comparison. The original series converges absolutely.

### PDF page 87

**Ratio test**

Let $L=\lim_{n\to\infty}|a_{n+1}/a_n|$, assuming the ratios are defined for sufficiently large $n$.

1. If $L<1$, then $\sum_{n=1}^\infty a_n$ converges absolutely.
2. If $L>1$ or $L=+\infty$, then the series diverges.
3. If $L=1$, the ratio test is inconclusive.

**Proof of the second case.** For large enough $n$, the ratio is greater than $1$, so $|a_{n+1}|>|a_n|$. The magnitudes are eventually bounded below by a positive term, so the terms fail to tend to zero and the series diverges.

**Example.** Test $\sum_{n=1}^\infty(-1)^n n^3/n!$. The consecutive terms are

$$
a_n=\frac{(-1)^n n^3}{n!},\qquad
a_{n+1}=\frac{(-1)^{n+1}(n+1)^3}{(n+1)!}.
$$

$$
\begin{aligned}
\left|\frac{a_{n+1}}{a_n}\right|
&=\left|\frac{(-1)^{n+1}}{(-1)^n}\frac{(n+1)^3}{n^3}
\frac{n!}{(n+1)!}\right|\\
&=|-1|\left(\frac{n+1}{n}\right)^3\frac{n!}{(n+1)!}.
\end{aligned}
$$

### PDF page 88

**Factorial series, continued.** Since $(n+1)!=(n+1)n!$, cancel $n!$ in the ratio from page 87.

$$
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
=\lim_{n\to\infty}\left(\frac{n+1}{n}\right)^3\frac{1}{n+1}
=1\cdot0=0.
$$

The series converges absolutely by the ratio test.

**Example.** For $\sum_{n=1}^\infty(-1)^n/\sqrt n$,

$$
a_n=\frac{(-1)^n}{\sqrt n},\qquad a_{n+1}=\frac{(-1)^{n+1}}{\sqrt{n+1}}.
$$

$$
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
=\lim_{n\to\infty}\sqrt{\frac{n}{n+1}}=1.
$$

The ratio test is inconclusive.

**Lecture, November 15, 2013**

**Example.** For $\sum_{n=1}^\infty(-1)^ne^n/n^3$, the consecutive terms are $a_n=(-1)^ne^n/n^3$ and $a_{n+1}=(-1)^{n+1}e^{n+1}/(n+1)^3$.

$$
\begin{aligned}
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
&=\lim_{n\to\infty}\left|\frac{(-1)^{n+1}}{(-1)^n}\frac{e^{n+1}}{e^n}\frac{n^3}{(n+1)^3}\right|\\
&=1\cdot e\cdot1=e>1.
\end{aligned}
$$

The series diverges by the ratio test. The test for divergence also applies. Three applications of l'Hôpital's rule give

$$
\lim_{x\to\infty}\frac{e^x}{x^3}
=\lim_{x\to\infty}\frac{e^x}{3x^2}
=\lim_{x\to\infty}\frac{e^x}{6x}
=\lim_{x\to\infty}\frac{e^x}{6}=+\infty.
$$

Thus $|a_n|\to+\infty$, so the terms fail to tend to zero. The transcription takes the limit of the magnitude to avoid a product involving the oscillating factor $(-1)^n$.

### PDF page 89

**Root test**

Let $L=\lim_{n\to\infty}\sqrt[n]{|a_n|}$. The transcription includes the absolute value as in the statement on page 61.

1. If $L<1$, then $\sum_{n=1}^\infty a_n$ converges absolutely.
2. If $L>1$, then the series diverges.
3. If $L=1$, the test is inconclusive.

**Example.** Test $\sum_{n=1}^\infty\left(\frac{2n+3}{3n+2}\right)^n$. The base tends to $2/3$, suggesting the convergent geometric series with ratio $2/3$. For the root test,

$$
\sqrt[n]{|a_n|}=\frac{2n+3}{3n+2},
\qquad
\lim_{n\to\infty}\frac{2n+3}{3n+2}=\frac23<1.
$$

The series converges by the root test.

**11.7 Testing series**

- Does the term $a_n$ fail to tend to zero?
- Is the series related to a $p$-series or a geometric series?
- Is the series alternating?
- Does the series contain factorials or constants raised to the $n$th power?
- For a rational function of $n$, the ratio test gives the inconclusive limit $1$.
- Is $a_n$ of the form $(b_n)^n$?

### PDF page 90

**Testing series, continued.** If $a_n=f(n)$ and $\int f(x)\,dx$ is easy to evaluate, consider the integral test. The notes list it as a last resort.

**Examples**

1. Inspect the series and predict whether it converges or diverges.
2. Identify a test.
3. List the conditions of the test.
4. Apply the test.

For $\sum_{n=1}^\infty (n-1)/(2n+1)$, the term limit is $\lim_{n\to\infty}(n-1)/(2n+1)=1/2\ne0$. The series diverges by the test for divergence.

For $\sum_{n=1}^\infty ne^{-n^2}$, the notes suggest the comparison test or the integral test and leave the remaining steps blank.

For $\sum_{n=1}^\infty(-1)^{n-1}n/(n^2+1)$, the magnitudes $b_n=n/(n^2+1)$ behave like $1/n$ for large $n$. The notes identify the alternating series test.

### PDF page 91

**Example.** For $\sum_{n=1}^\infty(-1)^n/n!$, the consecutive terms are $a_n=(-1)^n/n!$ and $a_{n+1}=(-1)^{n+1}/(n+1)!$. The ratio test gives

$$
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
=\lim_{n\to\infty}\frac{n!}{(n+1)!}
=\lim_{n\to\infty}\frac1{n+1}=0<1.
$$

The series converges absolutely.

**Example.** For $\sum_{n=1}^\infty\cos(2n)/(2+3^n)$, compare the absolute values of the terms with a geometric series.

$$
\left|\frac{\cos(2n)}{2+3^n}\right|
\le\frac1{2+3^n}\le\frac1{3^n}.
$$

Since $\sum_{n=1}^\infty 1/3^n$ converges with common ratio $1/3$, the original series converges absolutely.

### PDF page 92

**Lecture, November 18, 2013**

**Example 1.** Since $-1\le\cos(2n)\le1$,

$$
0\le\left|\frac{\cos(2n)}{2+3^n}\right|
\le\frac1{2+3^n}\le\left(\frac13\right)^n.
$$

The upper bound gives a convergent geometric series with ratio $1/3$. The series of absolute values converges by comparison.

**Example 2.** For $a_n=\left(\frac{n}{2n+1}\right)^{2n}$, the root test gives

$$
\sqrt[n]{|a_n|}=\left(\frac{n}{2n+1}\right)^2,\qquad
\lim_{n\to\infty}\left(\frac{n}{2n+1}\right)^2=\frac14<1.
$$

Thus $\sum_{n=1}^\infty a_n$ converges absolutely.

**11.8 Power series**

A power series has the form $\sum_{n=0}^\infty c_n(x-a)^n$, with coefficients $c_n$ and expansion point $a$. There are three possibilities.

1. The series converges only at $x=a$.
2. The series converges for all $x$.
3. There is a positive number $R$ such that the series converges for $|x-a|<R$ and diverges for $|x-a|>R$.

### PDF page 93

**Example 1.** Find the interval and radius of convergence of $f(x)=\sum_{n=1}^\infty(4x+1)^n/n^2$. Apply the ratio test away from $x=-1/4$, where every term is zero.

$$
\begin{aligned}
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
&=\lim_{n\to\infty}\left|\frac{(4x+1)^{n+1}}{(4x+1)^n}\frac{n^2}{(n+1)^2}\right|\\
&=|4x+1|\lim_{n\to\infty}\left(\frac{n}{n+1}\right)^2
=|4x+1|.
\end{aligned}
$$

The condition $|4x+1|<1$ becomes $-1<4x+1<1$, hence $-2<4x<0$ and $-1/2<x<0$. Test both endpoints separately.

- At $x=0$, the series becomes $\sum_{n=1}^\infty 1/n^2$, a convergent $p$-series.
- At $x=-1/2$, the series becomes $\sum_{n=1}^\infty(-1)^n/n^2$, which converges absolutely.

The interval of convergence is $\boxed{[-1/2,0]}$ and its radius is $\boxed{R=1/4}$.

![[Kyle Kabasares - Integral Calculus - Closed interval of convergence.png|**Fig. 52** The interval includes both endpoints, and its radius is measured from the center $x=-1/4$.]]

### PDF page 94

**Example 2.** Consider $\sum_{n=1}^\infty x^n/(5^n n^5)$. For $x\ne0$,

$$
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
=\lim_{n\to\infty}\left|\frac{x^{n+1}}{x^n}\right|
\frac{5^n}{5^{n+1}}\frac{n^5}{(n+1)^5}
=\frac{|x|}{5}.
$$

The transcription keeps $x^n$ in the denominator of the ratio. The ratio is below $1$ when $-5<x<5$, and the series at $x=0$ is zero. At $x=5$, it reduces to the convergent $p$-series $\sum 1/n^5$. At $x=-5$, it becomes $\sum(-1)^n/n^5$, which converges absolutely. The interval is $[-5,5]$.

**Lecture, November 20, 2013**

Using the cubic Maclaurin polynomial of $e^x$,

$$
e^{0.3}\approx1+0.3+\frac{0.3^2}{2!}+\frac{0.3^3}{3!}.
$$

**Example 1.** Consider $\sum_{n=1}^\infty \frac{2^n}{n}(4x-8)^n$. For $x\ne2$,

$$
\begin{aligned}
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
&=\lim_{n\to\infty}\left|\frac{2^{n+1}}{2^n}\frac{n}{n+1}
\frac{(4x-8)^{n+1}}{(4x-8)^n}\right|\\
&=2|4x-8|.
\end{aligned}
$$

The condition $2|4x-8|<1$ gives $-\frac12<4x-8<\frac12$, then $\frac{15}{2}<4x<\frac{17}{2}$, and hence $\frac{15}{8}<x<\frac{17}{8}$. At $x=2$, the terms are zero.

At $x=15/8$, $4x-8=-1/2$, and the series becomes

$$
\sum_{n=1}^\infty\frac{2^n(-1/2)^n}{n}
=\sum_{n=1}^\infty\frac{(-1)^n}{n}.
$$

It converges by the alternating series test with $b_n=1/n$.

### PDF page 95

**Endpoint test, continued.** At $x=17/8$, $4x-8=1/2$, so

$$
\sum_{n=1}^\infty\frac{2^n}{n}(4x-8)^n
=\sum_{n=1}^\infty\frac{2^n(1/2)^n}{n}
=\sum_{n=1}^\infty\frac1n.
$$

The harmonic series diverges. The interval of convergence is $\boxed{[15/8,17/8)}$.

![[Kyle Kabasares - Integral Calculus - Half open interval of convergence.png|**Fig. 53** The interval includes the left endpoint $15/8$ and excludes the right endpoint $17/8$.]]

**Example.** For $\sum_{n=1}^\infty x^n/n!$, apply the ratio test for $x\ne0$.

$$
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
=\lim_{n\to\infty}\left|\frac{x^{n+1}}{x^n}\frac{n!}{(n+1)!}\right|
=|x|\lim_{n\to\infty}\frac1{n+1}=0<1.
$$

The series also converges at $x=0$, so it converges for every $x$ and $\boxed{R=\infty}$.

**Functions as power series**

For $|r|<1$, the geometric series satisfies $\sum_{n=1}^\infty ar^{n-1}=a/(1-r)$. With $a=1$ and $r=x$,

$$
\frac1{1-x}=\sum_{n=1}^\infty x^{n-1}=1+x+x^2+x^3+\cdots,\qquad |x|<1.
$$

**Example 1.** Replace $x$ by $-x$.

$$
\frac1{1+x}=\frac1{1-(-x)}
=1-x+x^2-x^3+x^4-\cdots
=\sum_{n=0}^\infty(-1)^n x^n.
$$

Integrating term by term for $|x|<1$ gives

$$
\ln|1+x|=x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4}+\cdots+C.
$$

At $x=0$, the left-hand side is $\ln 1=0$, so $C=0$.

### PDF page 96

**Lecture, November 22, 2013**

**Taylor series**

A power series about $a$ has the form $\sum_{n=0}^\infty c_n(x-a)^n$. To express $e^x$ as a power series about $0$, start with

$$
e^x=c_0+c_1x+c_2x^2+c_3x^3+\cdots.
$$

At $x=0$, $e^0=1=c_0$. Differentiate and evaluate at zero to obtain the next coefficients.

$$
\begin{aligned}
\frac{d}{dx}e^x&=c_1+2c_2x+3c_3x^2+\cdots,
&1&=c_1,\\
\frac{d^2}{dx^2}e^x&=2c_2+3\cdot2\,c_3x+4\cdot3\,c_4x^2+\cdots,
&1&=2c_2,\\
\frac{d^3}{dx^3}e^x&=3\cdot2\,c_3+4\cdot3\cdot2\,c_4x+\cdots,
&1&=3\cdot2\,c_3.
\end{aligned}
$$

Thus $c_2=1/2$ and $c_3=1/6$. In general $c_n=1/n!$, so

$$
\boxed{e^x=\sum_{n=0}^\infty\frac{x^n}{n!}}
=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\frac{x^4}{4!}+\cdots.
$$

**Taylor polynomial**

If $f(x)=\sum_{n=0}^\infty c_n(x-a)^n$ for $|x-a|<R$, then the coefficients are

$$
\boxed{c_n=\frac{f^{(n)}(a)}{n!}}.
$$

For $f(x)=e^x$ and $a=0$, this gives the same coefficients.

| $n$ | $f^{(n)}(x)$ | $f^{(n)}(0)$ | $c_n$ |
| --- | --- | --- | --- |
| $0$ | $e^x$ | $1$ | $1/0!$ |
| $1$ | $e^x$ | $1$ | $1/1!$ |
| $2$ | $e^x$ | $1$ | $1/2!$ |
| $3$ | $e^x$ | $1$ | $1/3!$ |
| $4$ | $e^x$ | $1$ | $1/4!$ |
| $5$ | $e^x$ | $1$ | $1/5!$ |

### PDF page 97

**Maclaurin series**

When $a=0$, the Taylor series $\sum c_n(x-a)^n$ becomes the Maclaurin series $\sum c_nx^n$. Use $c_n=f^{(n)}(0)/n!$.

**Sine.** Find the Maclaurin series and the third-degree Taylor polynomial for $f(x)=\sin x$.

| $n$ | $f^{(n)}(x)$ | $f^{(n)}(0)$ | $c_n$ |
| --- | --- | --- | --- |
| $0$ | $\sin x$ | $0$ | $0/0!$ |
| $1$ | $\cos x$ | $1$ | $1/1!=1$ |
| $2$ | $-\sin x$ | $0$ | $0/2!=0$ |
| $3$ | $-\cos x$ | $-1$ | $-1/3!$ |
| $4$ | $\sin x$ | $0$ | $0/4!=0$ |
| $5$ | $\cos x$ | $1$ | $1/5!$ |

$$
\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\frac{x^7}{7!}+\frac{x^9}{9!}-\cdots
=\boxed{\sum_{n=0}^\infty\frac{(-1)^n x^{2n+1}}{(2n+1)!}}.
$$

$$
\boxed{T_3(x)=x-\frac{x^3}{3!}}.
$$

**Cosine.** For $f(x)=\cos x$, the derivative values give the even powers.

| $n$ | $f^{(n)}(x)$ | $f^{(n)}(0)$ | $c_n$ |
| --- | --- | --- | --- |
| $0$ | $\cos x$ | $1$ | $1/0!$ |
| $1$ | $-\sin x$ | $0$ | $0/1!$ |
| $2$ | $-\cos x$ | $-1$ | $-1/2!$ |
| $3$ | $\sin x$ | $0$ | $0/3!$ |
| $4$ | $\cos x$ | $1$ | $1/4!$ |
| $5$ | $-\sin x$ | $0$ | $0/5!$ |
| $6$ | $-\cos x$ | $-1$ | $-1/6!$ |

$$
\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\frac{x^6}{6!}+\cdots
=\boxed{\sum_{n=0}^\infty\frac{(-1)^n x^{2n}}{(2n)!}}.
$$

### PDF page 98

**Lecture, November 25, 2013**

**Example.** Find the Taylor series of $f(x)=\ln x$. Choose $a=1$ as the expansion point and write $\ln x=\sum_{n=0}^\infty c_n(x-1)^n$ with $c_n=f^{(n)}(1)/n!$.

| $n$ | $f^{(n)}(x)$ | $f^{(n)}(1)$ | $c_n$ |
| --- | --- | --- | --- |
| $0$ | $\ln x$ | $0$ | $0$ |
| $1$ | $1/x$ | $1$ | $1/1!=1$ |
| $2$ | $-1/x^2$ | $-1$ | $-1/2$ |
| $3$ | $2/x^3$ | $2$ | $2/3!=1/3$ |
| $4$ | $-6/x^4$ | $-6$ | $-6/4!=-6/24=-1/4$ |

$$
\begin{aligned}
\ln x
&=(x-1)-\frac12(x-1)^2+\frac13(x-1)^3-\frac14(x-1)^4+\cdots\\
&=\boxed{\sum_{n=1}^\infty \frac{(-1)^{n+1}(x-1)^n}{n}}.
\end{aligned}
$$

This expansion represents $\ln x$ at least for $|x-1|<1$.

### PDF page 99

**Kyle Kabasares — Midterm 3 study guide**

**Sequences**

- $1,2,3,4,\ldots$ tends to $+\infty$ and diverges.
- $1,0.1,0.01,0.001,0.0001,\ldots$ converges to $0$.

**Example.** For $a_n=3(-1)^n/n!$, the first three terms are

$$
a_1=\frac{3(-1)^1}{1!}=\boxed{-3},\qquad
a_2=\frac{3(-1)^2}{2!}=\boxed{\frac32},\qquad
a_3=\frac{3(-1)^3}{3!}=-\frac36=\boxed{-\frac12}.
$$

**Converge or diverge?**

For $a_n=n(n-1)$, the limit is $+\infty$, so the sequence diverges. In the next example,

$$
\lim_{n\to\infty}\frac{2^n}{3^{n+1}}
=\lim_{n\to\infty}\frac{2^n}{3\cdot3^n}
=\frac13\lim_{n\to\infty}\left(\frac23\right)^n=0.
$$

**Geometric sequences.** Each term after the first is obtained by multiplying the preceding term by a fixed nonzero number called the common ratio. If the first term is $a_1$ and the common ratio is $r$, then the $n$th term is $a_n=a_1r^{n-1}$.

### PDF page 100

**Example.** For the geometric sequence $3,6,12,24,48,\ldots$, derive a formula for $a_n$ and find $a_8$.

$$
a_1=3,\qquad a_2=3\cdot2,\qquad a_3=3\cdot2^2,\qquad a_4=3\cdot2^3.
$$

The exponent is one less than the index, so $\boxed{a_n=3\cdot2^{n-1}}$. In particular,

$$
a_8=3\cdot2^{8-1}=3\cdot2^7=3\cdot128=\boxed{384}.
$$

**Series.** A series is a sum of numbers.

**Geometric series.** For $|r|<1$, equivalently $-1<r<1$, the sum is the first term $a$ divided by $1-r$.

$$
1+0.1+0.01+0.001+0.0001+\cdots
=\sum_{n=1}^\infty 1\left(\frac1{10}\right)^{n-1}
=\frac1{1-1/10}
=\boxed{\frac{10}{9}}.
$$

The transcription includes the $0.1$ term implied by the common ratio and the summation formula.

**Test for divergence.** If the terms $a_n$ fail to tend to zero, the series $\sum a_n$ diverges.

### PDF page 101

**Converge or diverge?**

**Example.** The series $1+0.4+0.16+0.064+\cdots$ is geometric with common ratio $r=0.4$. Since $|r|<1$, it converges to

$$
\sum_{n=1}^\infty\left(\frac4{10}\right)^{n-1}
=\frac1{1-0.4}
=\frac1{1-4/10}
=\frac{10}{6}
=\boxed{\frac53=1.\overline{6}}.
$$

**Example.** The series $\sum_{n=3}^\infty 5(2/3)^{n-1}$ is geometric and converges because $|2/3|<1$. Its first included term is $5(2/3)^2=20/9$.

$$
\sum_{n=3}^\infty5\left(\frac23\right)^{n-1}
=\frac{20/9}{1-2/3}
=\frac{20}{9}\cdot3
=\boxed{\frac{20}{3}}.
$$

**Example.** The series

$$
\sum_{n=1}^\infty\frac{\pi^n}{3^{n+2}}
=\sum_{n=1}^\infty\frac{\pi^n}{3^n\cdot3^2}
=\frac19\sum_{n=1}^\infty\left(\frac\pi3\right)^n
$$

is geometric and diverges because $\pi/3>1$.

**Example.** For $\sum_{n=1}^\infty n^2/(2n^2-1)$,

$$
\lim_{n\to\infty}\frac{n^2}{2n^2-1}=\frac12\ne0,
$$

so the series diverges by the test for divergence.

### PDF page 102

**Example.** Split the sum into two geometric series.

$$
\begin{aligned}
\sum_{n=1}^\infty\frac{3^n+2^n}{6^n}
&=\sum_{n=1}^\infty\left(\frac36\right)^n+\sum_{n=1}^\infty\left(\frac26\right)^n\\
&=\sum_{n=1}^\infty\left(\frac12\right)^n+\sum_{n=1}^\infty\left(\frac13\right)^n\\
&=\frac{1/2}{1-1/2}+\frac{1/3}{1-1/3}
=1+\frac12
=\boxed{\frac32}.
\end{aligned}
$$

Both common ratios have magnitude less than one.

**Integral test for series**

If $a_n=f(n)$ with $f$ continuous, positive, and decreasing on $[1,\infty)$, then $\sum_{n=1}^\infty a_n$ converges if $\int_1^\infty f(x)\,dx$ converges.

**Example.** For $\sum_{n=1}^\infty ne^{-n^2}$, let $f(x)=xe^{-x^2}$. It is continuous and positive for $x\ge1$, with derivative

$$
f'(x)=e^{-x^2}+x e^{-x^2}(-2x)=e^{-x^2}(1-2x^2).
$$

The derivative vanishes at $x=\pm1/\sqrt2$ and is negative for $x\ge1$, so $f$ decreases on the required interval. With $u=-x^2$ and $du=-2x\,dx$,

$$
\begin{aligned}
\int_1^\infty xe^{-x^2}\,dx
&=\lim_{t\to\infty}\int_1^t xe^{-x^2}\,dx\\
&=\lim_{t\to\infty}\left[-\frac12e^{-x^2}\right]_1^t\\
&=-\frac12\lim_{t\to\infty}(e^{-t^2}-e^{-1})
=\boxed{\frac1{2e}}.
\end{aligned}
$$

The series converges by the integral test.

### PDF page 103

**Alternating series**

For $\sum_{n=1}^\infty(-1)^n b_n$ with $b_n\ge0$, check that $b_{n+1}\le b_n$ and $\lim_{n\to\infty}b_n=0$. It is enough for the inequality to hold from some index onward.

**Example.** For $\sum_{n=1}^\infty(-1)^n/n$, let $b_n=1/n$. Then $1/(n+1)\le1/n$ because $n\le n+1$ for $n\ge1$. Also $\lim_{n\to\infty}1/n=0$. The series converges by the alternating series test.

**Example.** For $\sum_{n=1}^\infty(-1)^{n-1}\ln(n)/n$, use $b_n=\ln(n)/n$. By l'Hôpital's rule on the real-variable limit,

$$
\lim_{x\to\infty}\frac{\ln x}{x}
=\lim_{x\to\infty}\frac1x=0.
$$

For $f(x)=\ln(x)/x$,

$$
f'(x)=\frac{x(1/x)-\ln(x)\cdot1}{x^2}
=\frac{1-\ln x}{x^2}.
$$

The derivative vanishes at $x=e$ and is negative for $x>e$. The tail from $n=3$ therefore has decreasing magnitudes tending to zero, so the series converges by the alternating series test.

### PDF page 104

**Example.** Since $\cos(n\pi)=(-1)^n$,

$$
\sum_{n=1}^\infty\frac{\cos(n\pi)}{n^{3/4}}
=\sum_{n=1}^\infty(-1)^n\frac1{n^{3/4}}.
$$

The magnitudes tend to zero. They are decreasing because $n^{3/4}\le(n+1)^{3/4}$ for $n\ge1$, so $1/(n+1)^{3/4}\le1/n^{3/4}$. The series converges by the alternating series test.

**Alternating series estimation theorem**

For an alternating series $\sum(-1)^n b_n$ with nonnegative magnitudes $b_n$ decreasing to zero, the error in the partial sum $S_n$ is at most the magnitude of the first neglected term.

$$
|R_n|=|S-S_n|\le b_{n+1}.
$$

**Example.** For $\sum_{n=1}^\infty(-1)^{n+1}/n$,

$$
S=1-\frac12+\frac13-\frac14+\frac15-\frac16+\cdots.
$$

Taking $S_3=1-\frac12+\frac13$ gives $|S-S_3|\le 1/4=0.25$, since the first neglected term is $-1/4$.

**Example.** Approximate $\ln 2$ with absolute error at most $0.0005$, the tolerance used in the notes for three decimal places.

$$
\ln 2=\sum_{n=1}^\infty\frac{(-1)^{n+1}}{n},
\qquad
b_n=\frac1n,\qquad b_{n+1}=\frac1{n+1}.
$$

Using the strict bound shown in the calculation,

$$
\frac1{n+1}<0.0005
\quad\Longrightarrow\quad
2000<n+1
\quad\Longrightarrow\quad
\boxed{1999<n}.
$$

Thus $2000$ terms suffice under that bound. The transcription uses the sign convention that starts with $+1$, consistent with the stated sum $\ln 2$.

### PDF page 105

**Example.** Test $\sum_{n=1}^\infty \left(\frac{n}{n+1}\right)^{n^2}$ for convergence. By the root test,

$$
\begin{aligned}
\lim_{n\to\infty}\sqrt[n]{|a_n|}
&=\lim_{n\to\infty}\left[\left(\frac{n}{n+1}\right)^{n^2}\right]^{1/n}\\
&=\lim_{n\to\infty}\left(\frac{n}{n+1}\right)^n
=\lim_{n\to\infty}\frac{1}{(1+1/n)^n}
=\frac1e<1.
\end{aligned}
$$

The series converges absolutely.

**Representations of functions as power series**

Use the geometric series identity

$$
1+x+x^2+x^3+x^4+\cdots
=\frac1{1-x}
=\sum_{n=0}^\infty x^n,\qquad |x|<1.
$$

**Example.** Replace the common ratio $x$ by $-x$.

$$
\frac1{1+x}
=\frac1{1-(-x)}
=\sum_{n=0}^\infty(-x)^n,\qquad |x|<1.
$$

The interval is $\boxed{-1<x<1}$.

**Example.** Replace the common ratio $x$ by $x^3$.

$$
\frac1{1-x^3}
=\sum_{n=0}^\infty(x^3)^n
=\sum_{n=0}^\infty x^{3n}.
$$

The condition $|x^3|<1$ gives $|x|<1$, hence $\boxed{-1<x<1}$.

### PDF page 106

**Example.** Use the geometric series with ratio $-9x^2$.

$$
\frac1{1+9x^2}=\frac1{1-(-9x^2)}
=\sum_{n=0}^\infty(-9x^2)^n.
$$

The convergence condition $|-9x^2|<1$ gives $|x|^2<1/9$, hence $\boxed{-1/3<x<1/3}$.

**Example.** Factor out $x$ and use the geometric series with ratio $-4x$.

$$
\frac{x}{4x+1}
=x\frac1{1+4x}
=x\frac1{1-(-4x)}
=x\sum_{n=0}^\infty(-4x)^n
=\boxed{\sum_{n=0}^\infty(-4)^nx^{n+1}},\qquad |x|<\frac14.
$$

**Finding the interval of convergence for power series**

**Example.** Consider $\sum_{n=1}^\infty x^n/\sqrt n$. For $x\ne0$ the ratio test gives

$$
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
=\lim_{n\to\infty}\left|\frac{x^{n+1}}{x^n}\right|
\frac{\sqrt n}{\sqrt{n+1}}
=|x|.
$$

The radius is $R=1$, and the series converges absolutely for $-1<x<1$, including $x=0$ directly. At $x=-1$ the series becomes $\sum_{n=1}^\infty(-1)^n/n^{1/2}$. The magnitudes $b_n=1/n^{1/2}$ tend to zero. To check decrease, write $b_n=f(n)$ for $f(x)=x^{-1/2}$. Then $f'(x)=-\frac12x^{-3/2}<0$ for $x>0$. The alternating series test gives convergence at $x=-1$.

### PDF page 107

**Endpoint test, continued.** At $x=1$, the series from page 106 becomes

$$
\sum_{n=1}^\infty\frac{1^n}{\sqrt n}=\sum_{n=1}^\infty\frac1{n^{1/2}}.
$$

This $p$-series diverges because $p=1/2$. The interval of convergence is $\boxed{[-1,1)}$.

**Example.** Find the interval of convergence of $\sum_{n=0}^\infty n^3(x-5)^n$. For $x\ne5$, the ratio test gives

$$
\begin{aligned}
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
&=\lim_{n\to\infty}\left|\frac{(n+1)^3(x-5)^{n+1}}{n^3(x-5)^n}\right|\\
&=|x-5|\lim_{n\to\infty}\left(\frac{n+1}{n}\right)^3
=|x-5|.
\end{aligned}
$$

The transcription retains the factor $|x-5|$ after taking the limit. The condition $|x-5|<1$ gives $4<x<6$. At $x=5$ the series is zero.

- At $x=4$, the series becomes $\sum_{n=0}^\infty n^3(-1)^n$. The magnitudes tend to $+\infty$, so the terms fail to tend to zero.
- At $x=6$, it becomes $\sum_{n=0}^\infty n^3$. The terms tend to $+\infty$.

Both endpoints fail the test for convergence of the terms to zero. The interval of convergence is $\boxed{(4,6)}$.

### PDF page 108

**Example.** Find the interval and radius of convergence of $\sum_{n=0}^\infty (x+2)^n/(n+3)$. For $x\ne-2$,

$$
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
=\lim_{n\to\infty}\left|\frac{(x+2)^{n+1}}{(x+2)^n}\right|\frac{n+3}{n+4}
=|x+2|.
$$

The condition $|x+2|<1$ gives $-1<x+2<1$, hence $-3<x<-1$. At the center $x=-2$, only the constant term is nonzero.

At $x=-3$, the series becomes

$$
\sum_{n=0}^\infty\frac{(-3+2)^n}{n+3}
=\sum_{n=0}^\infty\frac{(-1)^n}{n+3}.
$$

The magnitudes $b_n=1/(n+3)$ tend to zero. For $f(x)=(x+3)^{-1}$, the derivative is $f'(x)=-(x+3)^{-2}<0$ for $x\ge0$. Thus $b_n$ is decreasing, and the alternating series test gives convergence.

At $x=-1$, the series becomes

$$
\sum_{n=0}^\infty\frac{(-1+2)^n}{n+3}
=\sum_{n=0}^\infty\frac1{n+3}.
$$

The notes compare $1/(n+3)<1/n$ for $n>0$. This bounds the terms above by a divergent series. The endpoint divergence follows by reindexing $\sum_{n=0}^\infty1/(n+3)=\sum_{k=3}^\infty1/k$, a tail of the harmonic series.

The interval is $\boxed{[-3,-1)}$ and the radius is $\boxed{R=(-1-(-3))/2=1}$.

### PDF page 109

**Taylor and Maclaurin series**

**Example.** Find the Maclaurin series for $f(x)=e^{5x}$. At $a=0$, the Taylor series $\sum c_n(x-a)^n$ becomes $\sum c_nx^n$.

| $n$ | $f^{(n)}(x)$ | $f^{(n)}(0)$ | $c_n=f^{(n)}(0)/n!$ |
| --- | --- | --- | --- |
| $0$ | $e^{5x}$ | $1$ | $1/0!$ |
| $1$ | $5e^{5x}$ | $5$ | $5/1!=5$ |
| $2$ | $25e^{5x}$ | $25$ | $25/2!=5^2/2!$ |
| $n$ | $5^ne^{5x}$ | $5^n$ | $5^n/n!$ |

The transcription retains the factorials in the coefficient column, consistent with the boxed series.

$$
\boxed{e^{5x}=\sum_{n=0}^\infty\frac{5^nx^n}{n!}}.
$$

### PDF page 110

**Example 2.** For $\sum_{n=1}^\infty 1/n^4$, choose the number of terms so that the remainder $R_n=S-S_n$ is below $0.0005$. The integral-test remainder bound gives

$$
\begin{aligned}
R_n&<\int_n^\infty x^{-4}\,dx\\
&=\lim_{t\to\infty}\left[-\frac1{3x^3}\right]_n^t
=\lim_{t\to\infty}\left(\frac1{3n^3}-\frac1{3t^3}\right)
=\frac1{3n^3}.
\end{aligned}
$$

To make the upper bound smaller than $0.0005$, require

$$
\frac1{3n^3}<0.0005
\quad\Longleftrightarrow\quad
3n^3>\frac1{0.0005}=2000
\quad\Longleftrightarrow\quad
n>\sqrt[3]{\frac{2000}{3}}.
$$

The smallest integer satisfying this bound is $\boxed{9}$. The handwritten calculation uses $12000$ for the reciprocal and then takes a square root. The transcription uses $2000$ and the cube root.

**Example 3.** For $\sum_{n=1}^\infty 1/[n\sqrt{n^2+1}]$, take

$$
a_n=\frac1{n\sqrt{n^2+1}},\qquad b_n=\frac1{n\sqrt{n^2}}=\frac1{n^2}.
$$

For $n\ge1$, the inequality $n^2<n^2+1$ gives $n<\sqrt{n^2+1}$, hence $n^2<n\sqrt{n^2+1}$ and $a_n<b_n$. The series $\sum b_n$ converges because it is a $p$-series with $p=2$. Therefore $\sum a_n$ converges by comparison.

### PDF page 111

**Example.** For $a_n=(3+\cos^2 n)/n^2$, start with $0\le\cos^2 n\le1$. Adding $3$ and dividing by $n^2$ gives

$$
\frac3{n^2}\le\frac{3+\cos^2 n}{n^2}\le\frac4{n^2}.
$$

The upper comparison series is $\sum_{n=1}^\infty b_n=4\sum_{n=1}^\infty 1/n^2$ with $b_n=4/n^2$. It converges because $p=2>1$. Therefore $\sum a_n$ converges by the comparison test.

**Example.** Consider $a_n=(3n^3-2n^2)/(n^5-n^3)$ and compare with $b_n=3n^3/n^5=3/n^2$. The source starts the series at $n=1$, where the denominator vanishes. The convergence calculation applies to the series starting at $n=2$.

$$
\begin{aligned}
\lim_{n\to\infty}\frac{a_n}{b_n}
&=\lim_{n\to\infty}\frac{(3n^3-2n^2)n^2}{3(n^5-n^3)}\\
&=\lim_{n\to\infty}\frac{3n^5-2n^4}{3n^5-3n^3}
=1.
\end{aligned}
$$

Since $\sum_{n=2}^\infty b_n$ converges, $\sum_{n=2}^\infty a_n$ converges by limit comparison.

### PDF page 112

**Example.** Test $\sum_{n=1}^\infty(-1)^{n-1}ne^{-n}$. Its term magnitudes are $b_n=ne^{-n}$. For $f(x)=xe^{-x}$, the product rule gives

$$
f'(x)=(1)e^{-x}+x(-e^{-x})
=e^{-x}-xe^{-x}
=e^{-x}(1-x).
$$

Thus $f$ decreases for $x>1$. Also, by l'Hôpital's rule applied to the corresponding real-variable limit,

$$
\lim_{n\to\infty}ne^{-n}
=\lim_{x\to\infty}\frac{x}{e^x}
=\lim_{x\to\infty}\frac1{e^x}=0.
$$

The series converges by the alternating series test.

**Example.** The page gives the following series as a new exercise.

$$
\sum_{n=2}^\infty\frac{9^n}{(-2)^{n+1}n}.
$$

### PDF page 113

**Absolute convergence, conditional convergence, and divergence**

1. If $\sum |a_n|$ converges, then $\sum a_n$ also converges and is called **absolutely convergent**.
2. If $\sum |a_n|$ diverges but $\sum a_n$ converges, then $\sum a_n$ is called **conditionally convergent**.
3. If both series diverge, then $\sum a_n$ is **divergent**.

**Example.** For $a_n=(-10)^n/n!$, the series of absolute values is $\sum_{n=0}^\infty 10^n/n!$. By the ratio test,

$$
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
=\lim_{n\to\infty}\frac{10^{n+1}}{(n+1)!}\frac{n!}{10^n}
=\lim_{n\to\infty}\frac{10}{n+1}=0<1.
$$

The series converges absolutely.

**Example.** Consider $\sum_{n=1}^\infty(-1)^{n+1}/\sqrt[4]n$. Its absolute-value series is $\sum_{n=1}^\infty 1/n^{1/4}$, a divergent $p$-series. For $b_n=n^{-1/4}$, $\lim_{n\to\infty}b_n=0$. Also, $f(x)=x^{-1/4}$ has $f'(x)=-\tfrac14x^{-5/4}<0$ for $x>0$, so the magnitudes decrease. The alternating series test gives convergence, and the original series is conditionally convergent.

### PDF page 114

**Example.** Consider $\sum_{n=1}^\infty(-1)^nn/(n+5)$. The terms of its absolute-value series satisfy $\lim_{n\to\infty}n/(n+5)=1\ne0$, so that series diverges. For the original series the even terms approach $1$ and the odd terms approach $-1$. Its term limit does not exist, so the original series also diverges by the test for divergence.

**Root test**

Let $L=\lim_{n\to\infty}\sqrt[n]{|a_n|}$.

1. If $L<1$, then $\sum_{n=1}^\infty a_n$ converges absolutely.
2. If $L>1$ or $L=+\infty$, then the series diverges.
3. If $L=1$, the test is inconclusive.

**Example.** For $a_n=\left(\frac{n^2+1}{2n^2+1}\right)^n$,

$$
\lim_{n\to\infty}\sqrt[n]{|a_n|}
=\lim_{n\to\infty}\frac{n^2+1}{2n^2+1}
=\frac12.
$$

The series converges by the root test.

**Example.** For $\sum_{n=1}^\infty n^n/3^{1+3n}$,

$$
\lim_{n\to\infty}\left(\frac{n^n}{3^{1+3n}}\right)^{1/n}
=\lim_{n\to\infty}\frac{n}{3^{1/n}\cdot3^3}
=+\infty.
$$

The series diverges by the root test. The denominator uses $3^{1+3n}=3\cdot3^{3n}$, so its $n$th root tends to $27$.

### PDF page 115

**Lecture, December 6, 2013**

**Taylor series.** When $f$ is represented by a power series about $a$,

$$
f(x)=\sum_{n=0}^\infty c_n(x-a)^n,\qquad c_n=\frac{f^{(n)}(a)}{n!}.
$$

For $f(x)=\ln x$ and $a=1$:

| $n$ | $f^{(n)}(x)$ | $f^{(n)}(1)$ | $c_n$ |
| --- | --- | --- | --- |
| $0$ | $\ln x$ | $0$ | $0$ |
| $1$ | $x^{-1}$ | $1$ | $1$ |
| $2$ | $-x^{-2}$ | $-1$ | $-1/2!$ |
| $3$ | $2x^{-3}$ | $2$ | $2/3!$ |
| $4$ | $-3\cdot2\,x^{-4}$ | $-6$ | $-1/4$ |
| $5$ | $4\cdot3\cdot2\,x^{-5}$ | $24$ | $1/5$ |
| $6$ | $-5\cdot4\cdot3\cdot2\,x^{-6}$ | $-120$ | $-1/6$ |

The coefficients are aligned with their derivative orders using $c_n=f^{(n)}(1)/n!$. For $n\ge1$, $c_n=(-1)^{n+1}/n$, giving

$$
\ln x=\sum_{n=1}^\infty\frac{(-1)^{n+1}}{n}(x-1)^n
=(x-1)-\frac12(x-1)^2+\frac13(x-1)^3-\cdots.
$$

**Interval of convergence.** For $x\ne1$, the ratio test gives

$$
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
=\lim_{n\to\infty}|x-1|\frac{n}{n+1}
=|x-1|.
$$

The condition $|x-1|<1$ gives $0<x<2$. At the center $x=1$ all terms vanish.

- At $x=0$, $(-1)^{n+1}(x-1)^n/n=(-1)^{2n+1}/n=-1/n$, so the series diverges.
- At $x=2$, the series is $\sum_{n=1}^\infty(-1)^{n+1}/n$. The magnitudes satisfy $1/(n+1)<1/n$ and tend to zero. The series converges by the alternating series test.

The interval of convergence is $\boxed{(0,2]}$.

### PDF page 116

**Logarithmic series, continued**

$$
\ln x=\sum_{n=1}^\infty\frac{(-1)^{n+1}(x-1)^n}{n},\qquad 0<x\le2.
$$

**Challenge problem.** Find $\ln 3$. Use $\ln 3=-\ln(1/3)$, so the argument of the series lies in its interval of convergence.

**Binomial series expansion**

The Taylor series about $x=0$ for $f(x)=(1+x)^k$ is the binomial series.

$$
(1+x)^k=\sum_{n=0}^\infty\binom{k}{n}x^n,\qquad |x|<1.
$$

Here $\binom{k}{0}=1$, and for $n\ge1$,

$$
\binom{k}{n}=\frac{k(k-1)(k-2)\cdots(k-n+1)}{n!}.
$$

| $n$ | $f^{(n)}(x)$ | $f^{(n)}(0)$ | $c_n$ |
| --- | --- | --- | --- |
| $0$ | $(1+x)^k$ | $1$ | $1/0!$ |
| $1$ | $k(1+x)^{k-1}$ | $k$ | $k/1!$ |
| $2$ | $k(k-1)(1+x)^{k-2}$ | $k(k-1)$ | $k(k-1)/2!$ |
| $3$ | $k(k-1)(k-2)(1+x)^{k-3}$ | $k(k-1)(k-2)$ | $k(k-1)(k-2)/3!$ |

For nonnegative integer $k$, the expansion terminates and the coefficients come from Pascal's triangle. The rows shown are $1$, $1,2,1$, and $1,3,3,1$.

$$
\begin{aligned}
(1+x)^3&=1+3x+3x^2+x^3,\\
(1+x)^4&=1+4x+6x^2+4x^3+x^4.
\end{aligned}
$$

For $k=-1$,

$$
\begin{aligned}
(1+x)^{-1}
&=1-x+\frac{(-1)(-2)}{2!}x^2+\frac{(-1)(-2)(-3)}{3!}x^3+\cdots\\
&=1-x+x^2-x^3+x^4-x^5+\cdots.
\end{aligned}
$$

This is the geometric series for $1/(1+x)$. The transcription uses the plus sign in the denominator to match the alternating terms and the preceding line.

### PDF page 117

**Final lecture, December 9, 2013**

**How good is the partial sum?** Write $f(x)=T_n(x)+R_n(x)$, where $T_n$ is the Taylor polynomial and $R_n$ is the remainder. The error depends on the distance from the expansion point $x=a$.

![[Kyle Kabasares - Integral Calculus - Sine and cubic Taylor sketch.png|**Fig. 54** The source sketch compares $\sin x$ with its third-degree Taylor polynomial near the expansion point.]]

**Taylor's inequality.** If $M$ is an upper bound for $|f^{(n+1)}|$ on $|x-a|<d$, then throughout that interval

$$
|R_n(x)|\le\frac{M|x-a|^{n+1}}{(n+1)!}.
$$

**Example.** Estimate the error when $e^x$ is approximated by its fourth-degree Maclaurin polynomial on $-0.5<x<0.5$.

$$
T_4(x)=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\frac{x^4}{4!}.
$$

![[Kyle Kabasares - Integral Calculus - Exponential and quartic Taylor sketch.png|**Fig. 55** The handwritten sketch marks the interval from $-0.5$ to $0.5$ around the expansion point.]]

Use $n=4$ and $a=0$. All derivatives of $f(x)=e^x$ equal $e^x$, so $M=e^{0.5}$ is an upper bound for the fifth derivative on the interval.

$$
|R_4(x)|\le\frac{e^{0.5}|x|^5}{5!}
<\frac{e^{0.5}(0.5)^5}{5!}
\approx0.0004294<0.0005.
$$

The transcription retains the fifth power of $|x|$ and gives the bound before rounding it to the handwritten $0.0004$.

### PDF page 118

**Example.** Determine how many terms of the Maclaurin expansion of $\sin x$ are needed to estimate $\sin(0.5)$ within $0.00005$, the tolerance used here for four decimal places.

Use $a=0$ and $f(x)=\sin x$ in Taylor's inequality,

$$
|R_n(x)|\le\frac{M|x-a|^{n+1}}{(n+1)!}.
$$

The notes first consider $\sin(0.5)$ as a derivative bound and then use $M=1$, which bounds the magnitudes of both sine and cosine and therefore works for every derivative order.

$$
\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\frac{x^7}{7!}+\cdots.
$$

![[Kyle Kabasares - Integral Calculus - Sine near the Maclaurin center.png|**Fig. 56** The sketch highlights the sine curve near zero and marks $x=-0.5$ and $x=0.5$.]]

With $M=1$, require

$$
|R_n(0.5)|\le\frac{(0.5)^{n+1}}{(n+1)!}\le0.00005.
$$

By trial, the first degree satisfying this bound is $\boxed{n=5}$. The resulting polynomial has three nonzero terms, $x-x^3/3!+x^5/5!$.

**Creating new series from known series**

Find the Taylor series for $f(x)=\sin(x^2)$, $f(x)=\cos^2 x$, and $f(x)=1/(1+x^2)$.

### PDF page 119

**Creating new series from known series, continued**

Substitute $x^2$ into the sine series.

$$
\sin(x^2)=x^2-\frac{x^6}{3!}+\frac{x^{10}}{5!}-\frac{x^{14}}{7!}+\cdots.
$$

For $\cos^2 x$, use the double-angle identity and substitute $2x$ into the cosine series.

$$
\cos^2 x=\frac12[1+\cos(2x)],
\qquad
\cos(2x)=1-\frac{(2x)^2}{2!}+\frac{(2x)^4}{4!}-\cdots.
$$

**New series by differentiation and integration**

- Find a series for $\cos x$ starting with the series for $\sin x$.
- Find a series for $\ln(1-x)$ starting with the series for $(1-x)^{-1}$.
- Find a series for $\arctan x$ starting with the series for $(1+x^2)^{-1}$.

For $|x|<1$, the geometric series gives

$$
\frac1{1+x^2}=1-x^2+x^4-x^6+x^8-\cdots.
$$

Integrate term by term from $0$ to $x$.

$$
\begin{aligned}
\arctan x&=\int_0^x\frac{dt}{1+t^2}
=\int_0^x(1-t^2+t^4-t^6+t^8-\cdots)\,dt\\
&=x-\frac{x^3}{3}+\frac{x^5}{5}-\frac{x^7}{7}+\cdots.
\end{aligned}
$$

At the endpoint $x=1$, the integrated series converges by the alternating series test and gives

$$
\arctan 1=\frac{\pi}{4}=1-\frac13+\frac15-\frac17+\cdots.
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{W}$ | $\unit{ft\cdot lbf}$ or $\unit{J}$ | Work | Energy transferred by the force along the path. |
| $\mechanical{F}$ | $\unit{lbf}$ or $\unit{N}$ | Force | Applied force in the direction of displacement. |
| $\mechanical{x},\mechanical{y}$ | $\unit{ft}$ or $\unit{m}$ | Displacement coordinate | Position along the path or distance lifted. |
| $\mechanical{a},\mechanical{b}$ | $\unit{ft}$ | Path endpoints | Start and end of the displacement interval. |
| $\mechanical{\Delta x}$ | $\unit{ft}$ | Displacement increment | Width of one strip in the work estimate. |
| $\mechanical{d}$ | $\unit{ft}$ | Shaft depth | Vertical distance from the top to the bottom of the shaft. |
| — | $\unit{lbf/ft}$ | Cable weight per unit length | Weight of one foot of cable. |
| — | $\unit{lbf}$ | Coal weight | Constant load carried by the cable. |
| $\mechanical{m}$ | $\unit{kg}$ | Total lifted mass | Combined mass of the bucket and remaining water. |
| $\mechanical{m}_{\mathrm{bucket}},\mechanical{m}_{\mathrm{water}}$ | $\unit{kg}$ | Bucket and water masses | The bucket mass is fixed and the water mass decreases during the lift. |
| $\mechanical{g}$ | $\unit{m/s^2}$ | Gravitational acceleration | Converts the lifted mass to its weight. |
| $\mechanical{k}$ | $\unit{N/m}$ | Spring constant | Force required per unit extension. |
| — | $\unit{kg/m}$ | Water loss per unit lift | The decrease in water mass per meter of bucket travel. |
