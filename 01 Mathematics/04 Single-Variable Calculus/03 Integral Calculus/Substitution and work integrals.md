---
title: "Substitution and work integrals"
---

> [!TLDR]
> These calculations use substitution to integrate composite expressions and integrate a varying force to compute work.

## Worked lecture material

##### Basic integration (indefinite integrals)

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

##### Indefinite integral

Expand the product before integrating.

$$
\begin{aligned}
\int(x+1)(x^2+3)\,dx
&=\int(x^3+3x+x^2+3)\,dx\\
&=\frac{x^4}{4}+\frac32x^2+\frac{x^3}{3}+3x+C.
\end{aligned}
$$

##### Fundamental theorem of calculus, part 1

If $f$ is continuous on $[a,b]$ and $g(x)=\int_a^x f(t)\,dt$, then $g'(x)=f(x)$ for $a<x<b$.

##### Find the derivative

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

##### Fundamental theorem of calculus, part 2

If $F'=f$, so $F$ is an antiderivative of $f$, then

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

##### Substitution

For $\int 2x(x^2+4)^{100}\,dx$, let $u=x^2+4$, so $du=2x\,dx$. Then

$$
\int 2x(x^2+4)^{100}\,dx
=\int u^{100}\,du
=\frac{u^{101}}{101}+C
=\frac{(x^2+4)^{101}}{101}+C.
$$

##### Substitution examples

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

##### Work

For a force $\mechanical{F}$ along the direction of motion, the work over the interval from $\mechanical{a}$ to $\mechanical{b}$ is

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

A leaky bucket of mass $\quantity{10}{kg}$ is lifted from the ground at constant speed to a height of $\quantity{12}{m}$. It starts with $\quantity{36}{kg}$ of water, which leaks at a constant rate until the bucket reaches the final height. Ignore the mass of the rope.

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

##### Hooke's law

The force required to hold the spring at extension $\mechanical{x}$ is $\mechanical{F}=\mechanical{k}\mechanical{x}$, so the work is $\energy{W}=\int\mechanical{k}\mechanical{x}\,d\mechanical{x}$.

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

## Source

Kyle Kabasares, *Calculus II - Integral Calculus (Math 22, UC Merced 2013)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{W}$ | $\unit{ft\cdot lbf}$ or $\unit{J}$ | Work | Energy transferred by the force along the path. |
| $\mechanical{F}$ | $\unit{lbf}$ or $\unit{N}$ | Force | Applied force in the direction of displacement. |
| $\mechanical{\Delta x}$ | $\unit{ft}$ | Displacement increment | Width of one strip in the work estimate. |
| $\mechanical{d}$ | $\unit{ft}$ | Shaft depth | Vertical distance from the top to the bottom of the shaft. |
| $\mechanical{m}$ | $\unit{kg}$ | Total lifted mass | Combined mass of the bucket and remaining water. |
| $\mechanical{g}$ | $\unit{m/s^2}$ | Gravitational acceleration | Converts the lifted mass to its weight. |
| $\mechanical{k}$ | $\unit{N/m}$ | Spring constant | Force required per unit extension. |
| $\mechanical{x},\mechanical{y}$ | $\unit{ft}$ or $\unit{m}$ | Displacement coordinate | Position along the path or distance lifted. |
| $\mechanical{a},\mechanical{b}$ | $\unit{ft}$ | Path endpoints | Start and end of the displacement interval. |
| $\mechanical{m}_{\mathrm{bucket}},\mechanical{m}_{\mathrm{water}}$ | $\unit{kg}$ | Bucket and water masses | The bucket mass is fixed and the water mass decreases during the lift. |
