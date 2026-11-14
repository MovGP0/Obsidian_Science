---
title: "Residues and real integrals by contour deformation"
---

> [!TLDR]
> Extract residues at isolated singularities and handle real integrals using large arcs and, where required, a small indentation.

## Worked lecture material

In the preceding example $1/\sin(\pi/z)$, for any $\delta>0$ choose $n$ large enough that $1/n<\delta$. This puts a singular point inside the punctured disk around $0$, so $0$ is not isolated.

##### Residue at an isolated singularity

If $z_0$ is an isolated singularity of $f$, the Laurent series on a punctured disk about $z_0$ has the form

$$
f(z)=\sum_{n=0}^{\infty}a_n(z-z_0)^n
+\frac{b_1}{z-z_0}+\frac{b_2}{(z-z_0)^2}+\cdots.
$$

For a positively oriented contour $C$ in the punctured disk enclosing $z_0$,

$$
b_n=\frac1{2\pi i}\int_C f(z)(z-z_0)^{n-1}\,dz,\qquad
b_1=\frac1{2\pi i}\int_C f(z)\,dz.
$$

The coefficient of $1/(z-z_0)$ is the **residue** of $f$ at $z_0$, denoted $\operatorname{Res}_{z=z_0} f(z)$.

**Example.** For $f(z)=e^{1/z}$, substitute $1/z$ into the exponential series.

$$
e^{1/z}=1+\frac1z+\frac1{2!z^2}+\cdots+\frac1{n!z^n}+\cdots,\qquad |z|>0.
$$

Thus $b_1=1$ and $\int_C e^{1/z}\,dz=2\pi i$ around $0$ with positive orientation.

**Example.** For $f(z)=e^{1/z^2}$, the series is $1+1/z^2+1/(2!z^4)+\cdots$. There is no $1/z$ term, so $b_1=0$.

##### Cauchy's residue theorem

Let $C$ be a positively oriented simple closed curve. If $f$ is analytic on and inside $C$ except for finitely many points $z_1,\ldots,z_n$ inside $C$, then

$$
\int_C f(z)\,dz=2\pi i\sum_{k=1}^n\operatorname{Res}_{z=z_k}f(z).
$$

##### Proof of the residue theorem

Use contour deformation to replace the integral on $C$ by the sum of integrals on small, positively oriented contours $C_k$ around the individual singularities.

![[Kyle Kabasares - Complex Variables - Small residue contours inside C.png|**Fig. 135** Each small contour encloses one singularity $z_k$ inside the outer contour $C$.]]

$$
\int_C f(z)\,dz
=\sum_{k=1}^n\int_{C_k}f(z)\,dz
=2\pi i\sum_{k=1}^n\operatorname{Res}_{z=z_k}f(z).
$$

##### Principal part

If $z_0$ is an isolated singularity, the Laurent expansion for $0<|z-z_0|<R$ is

$$
f(z)=\sum_{n=0}^{\infty}a_n(z-z_0)^n+
\underbrace{\left(\frac{b_1}{z-z_0}+\frac{b_2}{(z-z_0)^2}+\cdots\right)}_{\text{principal part}}.
$$

##### Types of singularity

1. If every $b_j=0$, then $z_0$ is a removable singularity.
2. If $b_m\ne0$ and $b_j=0$ for all $j>m$, then $z_0$ is a pole of order $m$. A pole of order $1$ is a simple pole.
3. If infinitely many $b_j$ are nonzero, then $z_0$ is an essential singularity.

**Example.** Classify the singularity at $z=0$ of $f(z)=(e^z-1)/z$. Expand $e^z$ and cancel the constant terms in the numerator.

$$
f(z)=\frac{1}{z}\left(z+\frac{z^2}{2!}+\frac{z^3}{3!}+\cdots\right)
=1+\frac{z}{2!}+\frac{z^2}{3!}+\cdots.
$$

All negative-power coefficients vanish, including $b_1=\operatorname{Res}_{z=0}f(z)=0$. Thus $0$ is a removable singularity.

Remove the singularity in the previous example by defining

$$
f(z)=
\begin{cases}
(e^z-1)/z,&z\ne0,\\
1,&z=0.
\end{cases}
$$

##### Residues at poles

An isolated singularity $z_0$ of $f$ is a pole of order $m$ if and only if

$$
f(z)=\frac{g(z)}{(z-z_0)^m}
$$

near $z_0$, where $g$ is analytic near $z_0$ and $g(z_0)\ne0$. For $m=1$ the residue is $g(z_0)$. For $m\ge2$ it is $g^{(m-1)}(z_0)/(m-1)!$.

**Example.** Find the residue of $f(z)=\sin z/(z^2+4)^2$ at $z_0=-2i$. Factoring the denominator gives

$$
f(z)=\frac{g(z)}{(z+2i)^2},\qquad
g(z)=\frac{\sin z}{(z-2i)^2}.
$$

Since $g$ is analytic and nonzero at $-2i$, the pole has order $2$. The residue is $g'(-2i)$, which the page leaves as

$$
\left.
\frac{(z-2i)^2\cos z-2(z-2i)\sin z}{(z-2i)^4}
\right|_{z=-2i}.
$$

##### Zeros of analytic functions

A zero of order $m$ at $z_0$ has $f(z_0)=0$ and $f^{(m)}(z_0)\ne0$, with all lower derivatives vanishing. The handwriting gives the condition on the $m$th derivative explicitly. In the example $f(z)=(z-z_0)^m$ has a zero of order $m$ and its reciprocal has a pole of order $m$.

The residue is the Laurent coefficient $b_1$ of $1/(z-z_0)$. The page reviews the three types of isolated singularity.

- Removable if all $b_j=0$, leaving only $\sum_{n=0}^{\infty}a_n(z-z_0)^n$.
- A pole of order $m$ if the largest index with $b_j\ne0$ is $m$.
- Essential if infinitely many $b_j$ are nonzero.

##### Residue theorem review

For a positively oriented simple closed contour enclosing the isolated singularities $z_1,\ldots,z_n$,

$$
\int_C f(z)\,dz=2\pi i\sum_{k=1}^n\operatorname{Res}_{z=z_k}f(z).
$$

At a pole of order $m$, write $f(z)=g(z)/(z-z_0)^m$ with $g$ analytic at $z_0$ and $g(z_0)\ne0$. The residue is $g^{(m-1)}(z_0)/(m-1)!$.

**Example 1.** For $f(z)=1/[z^2(1+z)]$, the isolated singularities are $0$ and $-1$. For $0<|z|<1$,

$$
f(z)=\frac1{z^2}\sum_{n=0}^{\infty}(-1)^n z^n
=\frac1{z^2}-\frac1z+1-z+\cdots.
$$

There is a pole of order $2$ at $0$ with residue $-1$. The boxed residue and series give this sign, although a nearby $b_1$ label appears to give $+1$. At $-1$ the pole is simple and the residue is $1/(-1)^2=1$. For a contour enclosing both poles, the integral is $2\pi i(-1+1)=0$.

##### Additional examples

The page expands $(z+1)/(z-1)=-(z+1)\sum_{n=0}^{\infty}z^n=-\sum_{n=0}^{\infty}(z^{n+1}+z^n)$ for $|z|<1$ and writes the contour integral in Cauchy integral formula form. The handwritten label “removable singularity” appears next to this example. The table below correctly classifies $z=1$ as a simple pole. The second example factors $1/(z+z^2)=1/[z(1+z)]$.

The lecture recalls the pole criterion $f(z)=g(z)/(z-z_0)^m$. The handwritten formula on this line omits the exponent $m$. The table uses positively oriented contours enclosing the listed poles.

| $f(z)$ | Singular points | Type | Residues | $\int_C f(z)\,dz$ |
| --- | --- | --- | --- | --- |
| $(z+1)/(z-1)$ | $1$ | Simple pole | $2$ | $4\pi i$ |
| $1/[z(1+z)]$ | $0,-1$ | Two simple poles | $1$ at $0$, $-1$ at $-1$ | $0$ |
| $e^{-z}/z^2$ | $0$ | Pole of order $2$ | $-1$ | $-2\pi i$ |

##### Theorem

If $p$ and $q$ are analytic at $z_0$, $p(z_0)\ne0$, and $q$ has a zero of order $m$ at $z_0$, then $p/q$ has a pole of order $m$ there. For example, $(z-2)^2$ has first derivative $2(z-2)$ and second derivative $2$, so its zero at $2$ has order $2$.

For the proof, write $q(z)=(z-z_0)^m g(z)$, where $g$ is analytic and nonzero at $z_0$. Then

$$
\frac{p(z)}{q(z)}=\frac{p(z)/g(z)}{(z-z_0)^m},
$$

and $p/g$ is analytic and nonzero at $z_0$.

##### Residue of a quotient at a simple pole

Let $p$ and $q$ be analytic at $z_0$, with $p(z_0)\ne0$, $q(z_0)=0$, and $q'(z_0)\ne0$. Then $p/q$ has a simple pole at $z_0$ and

$$
\operatorname{Res}_{z=z_0}\frac{p(z)}{q(z)}=\frac{p(z_0)}{q'(z_0)}.
$$

The handwritten hypothesis says $q'(z_0)=0$. The simple pole condition and the denominator in the residue formula require $q'(z_0)\ne0$.

**Example.** On the positively oriented unit circle, evaluate $\int_C e^z/(e^z-1)\,dz$. Take $p(z)=e^z$, $q(z)=e^z-1$, and $q'(z)=e^z$. The only zero of $q$ inside the unit circle is $0$, since the zeros are $2\pi ni$ for $n\in\mathbb Z$. Thus

$$
\int_C\frac{e^z}{e^z-1}\,dz
=2\pi i\operatorname{Res}_{z=0}\frac{e^z}{e^z-1}
=2\pi i\left.\frac{e^z}{e^z}\right|_{z=0}
=2\pi i.
$$

##### Applications of residues

The residue at a simple pole is $\lim_{z\to z_0}(z-z_0)f(z)$. At a pole of order $k$,

$$
\operatorname{Res}_{z=z_0}f(z)
=\frac1{(k-1)!}\lim_{z\to z_0}
\frac{d^{k-1}}{dz^{k-1}}\bigl[(z-z_0)^k f(z)\bigr].
$$

For $k=1$, multiply the Laurent expansion by $z-z_0$. This gives $b_1+\sum_{n=0}^{\infty}a_n(z-z_0)^{n+1}$, whose limit at $z_0$ is $b_1$.

For $k=2$, multiply the expansion by $(z-z_0)^2$.

$$
(z-z_0)^2 f(z)=b_2+b_1(z-z_0)+\sum_{n=0}^{\infty}a_n(z-z_0)^{n+2}.
$$

The handwritten sum uses $n+1$ here. The factor $(z-z_0)^2$ gives $n+2$, so differentiating and taking the limit at $z_0$ leaves $b_1$.

##### L'Hôpital's rule

If $f$ and $g$ are analytic at $\alpha$, $f(\alpha)=g(\alpha)=0$, and $g'(\alpha)\ne0$, then $\lim_{z\to\alpha}f(z)/g(z)=f'(\alpha)/g'(\alpha)$. The handwriting gives equality of the two values at $\alpha$. The zero common value is needed for this rule.

**Applications of residues**

The lecture opens with the residue theorem $\int_C f(z)\,dz=2\pi i\sum_k\operatorname{Res}[f,r_k]$, where the sum is over the enclosed singularities for a positively oriented simple closed contour.

1. The residue at $r_k$ is $b_1$ in the Laurent expansion

   $$
   f(z)=\sum_{n=0}^{\infty}a_n(z-r_k)^n+\sum_{n=1}^{\infty}b_n(z-r_k)^{-n}.
   $$

2. If $r_k$ is a simple pole, write $f(z)=g(z)/(z-r_k)$ with $g$ analytic at $r_k$. Then $\operatorname{Res}[f,r_k]=\lim_{z\to r_k}(z-r_k)f(z)$.

For a pole of order $k$ at $r_0$, the principal part ends at the nonzero coefficient of $(z-r_0)^{-k}$. Then

$$
\operatorname{Res}[f,r_0]
=\frac1{(k-1)!}\lim_{z\to r_0}\frac{d^{k-1}}{dz^{k-1}}
\bigl[(z-r_0)^k f(z)\bigr].
$$

##### Singularity on the boundary

The lecture turns to contour integrals when a pole lies on the real axis. Suppose $f$ has a simple pole at $z=x_0$ with residue $B_0$ in its Laurent expansion on $0<|z-x_0|<R_0$. Let $C_\rho$ be the upper half of the circle $|z-x_0|=\rho$, with $0<\rho<R_0$, traversed clockwise.

##### Limit around a boundary pole

For the clockwise upper semicircle $C_\rho$ centered at $x_0$,

$$
\lim_{\rho\to0^+}\int_{C_\rho} f(z)\,dz=-\pi i B_0,
$$

where $B_0$ is the residue at the simple pole $x_0$.

![[Kyle Kabasares - Complex Variables - Upper semicircle centered on a real pole.png|**Fig. 136** The small upper semicircle has radius $\rho$ and center $z_0=x_0$ on the real axis.]]

##### Proof

Write $f(z)=g(z)+B_0/(z-x_0)$ on the punctured disk, with $g$ analytic on the full disk. Then

$$
\int_{C_\rho} f(z)\,dz
=\int_{C_\rho}g(z)\,dz+B_0\int_{C_\rho}\frac{dz}{z-x_0}.
$$

For a fixed sufficiently small $\rho_0$, choose $M\ge0$ so that $|g(z)|\le M$ when $|z-x_0|\le\rho_0$. If $0<\rho<\rho_0$, the ML inequality gives $\left|\int_{C_\rho}g(z)\,dz\right|\le M\pi\rho$, which tends to zero.

![[Kyle Kabasares - Complex Variables - Clockwise arc used in the ML estimate.png|**Fig. 137** The arc has length $\pi\rho$ and is traversed from left to right.]]

For the pole term, put $z=x_0+\rho e^{i\theta}$ and let $\theta$ decrease from $\pi$ to $0$.

![[Kyle Kabasares - Complex Variables - Clockwise arc from argument pi to zero.png|**Fig. 138** The arc starts at angle $\pi$ and ends at angle $0$ relative to $x_0$.]]

$$
B_0\int_{C_\rho}\frac{dz}{z-x_0}
=B_0\int_\pi^0\frac{i\rho e^{i\theta}}{\rho e^{i\theta}}\,d\theta
=-B_0\int_0^\pi i\,d\theta
=-B_0\pi i.
$$

##### Next example

The notes set up $\int_{-\infty}^{\infty}x/(x^3-8)\,dx$. The real pole at $x=2$ calls for a principal value in the contour method.

##### Principal value example

Set $f(z)=z/(z^3-8)$. The denominator factors as $(z-2)(z^2+2z+4)$, with roots $2$, $z_+=-1+i\sqrt3$, and $z_-=-1-i\sqrt3$.

![[Kyle Kabasares - Complex Variables - Large semicircle with an indentation at two.png|**Fig. 139** The upper contour includes the straight portions of $[-R,R]$, the clockwise indentation $C_\rho$ around $2$, and the outer arc $C_R$. Only the upper pole $z_+$ is enclosed.]]

For sufficiently large $R$ and small $\rho$, the residue theorem gives

$$
\int_C f(z)\,dz=2\pi i\operatorname{Res}[f,z_+].
$$

To find the residue, factor out $z-z_+$ and evaluate the remaining factor at $z_+$. The handwritten factorization later loses the minus sign on the real part of $z_-$. The roots listed at the top of the page give

$$
\operatorname{Res}[f,z_+]
=\left.\frac{z}{(z-2)(z-z_-)}\right|_{z=z_+}
=\frac{-1-i\sqrt3}{12}.
$$

Writing $I_{R,\rho}=[-R,2-\rho]\cup[2+\rho,R]$ with increasing real orientation,

$$
\int_C f(z)\,dz
=\int_{I_{R,\rho}}\frac{x}{x^3-8}\,dx
+\int_{C_R} f(z)\,dz+\int_{C_\rho} f(z)\,dz.
$$

The indentation satisfies $\lim_{\rho\to0^+}\int_{C_\rho}f(z)\,dz=-\pi i\operatorname{Res}[f,2]$. The notes turn to the ML inequality to show that the outer arc contribution tends to zero as $R\to\infty$.

For $f(z)=z/(z^3-8)$ and $R>2$, the reverse triangle inequality bounds $|f(z)|\le R/(R^3-8)$ on the outer arc. Its length is $\pi R$, so

$$
\left|\int_{C_R} f(z)\,dz\right|
\le\frac{\pi R^2}{R^3-8}\longrightarrow0
\qquad\text{as }R\to\infty.
$$

![[Kyle Kabasares - Complex Variables - Orientation of the principal value contour.png|**Fig. 140** The outer arc runs from $R$ back to $-R$. The real segments and the small clockwise arc run from left to right.]]

The contour integral is $2\pi i\operatorname{Res}[f,-1+i\sqrt3]$. Subtracting the indentation contribution $-\pi i\operatorname{Res}[f,2]$ gives the formula recorded in the notes.

$$
\operatorname{PV}\int_{-\infty}^{\infty}\frac{x}{x^3-8}\,dx
=2\pi i\operatorname{Res}[f,-1+i\sqrt3]+\pi i\operatorname{Res}[f,2].
$$

The boxed rule assigns $2\pi i$ times the enclosed residue and $\pi i$ times the simple residue on the real axis when the large arc vanishes and the indentation is taken above the pole.

An isolated singularity $z_0$ is a pole of order $m$ if $f(z)=\phi(z)/(z-z_0)^m$, with $\phi$ analytic and nonzero at $z_0$. The page writes $\operatorname{Res}_{z=z_0}f(z)=\phi(z_0)$, which is the $m=1$ case. For general $m$, use $\phi^{(m-1)}(z_0)/(m-1)!$.

**Example.** The integrand of $\int_0^\infty dx/(x^2+1)^2$ is even, so the integral is half the integral over the full real axis. Set

$$
f(z)=\frac1{(z^2+1)^2}=\frac1{(z+i)^2(z-i)^2}.
$$

![[Kyle Kabasares - Complex Variables - Upper semicircle enclosing the double pole at i.png|**Fig. 141** The upper contour encloses $i$ and leaves $-i$ below the real axis.]]

For the upper pole, write $f(z)=\phi(z)/(z-i)^2$ with $\phi(z)=1/(z+i)^2$. The page sets up $2\pi i\operatorname{Res}_{z=i}f(z)$ for the full real-axis integral as the arc radius tends to infinity.

##### Double-pole example

With $\phi(z)=1/(z+i)^2$, the residue at $i$ is $\phi'(i)$. The integral over the positive real axis is

$$
\begin{aligned}
\int_0^\infty\frac{dx}{(x^2+1)^2}
&=\frac12\frac{2\pi i}{(2-1)!}\phi^{(2-1)}(i)
=\frac12(2\pi i)\left.\frac{-2}{(z+i)^3}\right|_{z=i}\\
&=\frac12(2\pi i)\frac{-2}{-8i}=\frac\pi4.
\end{aligned}
$$

**1.** The function $(1+z)^3$ has a zero at $z=-1$.

**7(b).** Evaluate $\int_C e^z/(z^2+1)\,dz$ on the positively oriented outer circle shown.

![[Kyle Kabasares - Complex Variables - Outer circle and small loops around plus and minus i.png|**Fig. 142** The radius-$2$ circle encloses both poles. A small loop surrounds each of $i$ and $-i$.]]

Factor $z^2+1=(z+i)(z-i)$. The contribution from $i$ is $2\pi i\,e^i/(2i)=\pi e^i$. The contribution from $-i$ is $2\pi i\,e^{-i}/(-2i)=-\pi e^{-i}$. Thus the integral is $\pi e^i-\pi e^{-i}$.

**7(c).** Evaluate $\int_C\sin z/(z+i)^4\,dz$. Using the third derivative of $\sin z$ at $-i$ gives

$$
\int_C\frac{\sin z}{(z+i)^4}\,dz
=\frac{2\pi i}{3!}(-\cos(-i))
=-\frac{\pi i}{3}\cos(-i).
$$

The margin writes a difference of exponentials for cosine. The cosine formula uses a sum, $\cos z=(e^{iz}+e^{-iz})/2$, so $\cos(-i)=(e+e^{-1})/2$.

##### Laurent series and residues

**Theorem**

Suppose $f$ is analytic throughout $R_1<|z-z_0|<R_2$. Let $C$ be a positively oriented simple closed contour surrounding $z_0$ and lying in that annulus. Then at every point of the annulus,

$$
f(z)=\sum_{n=0}^{\infty}a_n(z-z_0)^n+
\sum_{n=1}^{\infty}\frac{b_n}{(z-z_0)^n}.
\tag{1}
$$

The coefficients are

$$
\begin{aligned}
a_n&=\frac1{2\pi i}\int_C\frac{f(\zeta)}{(\zeta-z_0)^{n+1}}\,d\zeta,
&&n=0,1,2,\ldots,\\
b_n&=\frac1{2\pi i}\int_C\frac{f(\zeta)}{(\zeta-z_0)^{1-n}}\,d\zeta,
&&n=1,2,\ldots.
\end{aligned}
$$

The handwritten range for $b_n$ starts at $0$, while the negative-power sum starts at $1$.

Replace $n$ by $-n$ in the second sum of (1). It becomes $\sum_{n=-\infty}^{-1}b_{-n}(z-z_0)^n$, where $b_{-n}=(2\pi i)^{-1}\int_C f(\zeta)/(\zeta-z_0)^{n+1}\,d\zeta$ for $n=-1,-2,\ldots$. Defining

$$
c_n=
\begin{cases}
b_{-n},&n\le-1,\\
a_n,&n\ge0,
\end{cases}
$$

gives the equivalent form

$$
f(z)=\sum_{n=-\infty}^{\infty}c_n(z-z_0)^n,\qquad
c_n=\frac1{2\pi i}\int_C\frac{f(\zeta)}{(\zeta-z_0)^{n+1}}\,d\zeta,\qquad n\in\mathbb Z.
\tag{4}
$$

Both (1) and (4) are Laurent series representations.

##### Finding a Laurent series

The page references Churchill and Brown, section 62. For $e^{1/z}$, substitute $1/z$ into $e^z=1+z+z^2/2!+z^3/3!+\cdots$.

$$
e^{1/z}
=\sum_{n=0}^{\infty}\frac1{z^n n!}
=1+\frac1z+\frac1{2!z^2}+\frac1{3!z^3}+\cdots,\qquad 0<|z|<\infty.
$$

For $e^{1/z}$, the coefficient of $1/z$ is $b_1=1$. The Laurent coefficient formula on a positively oriented simple closed contour $\Gamma$ enclosing the origin gives

$$
1=b_1=\frac{1}{2\pi i}\int_\Gamma e^{1/z}\,dz.
$$

Thus the contour integral equals $2\pi i$.

**Example 2.** The function $f(z)=1/(z-i)^2$ is already a Laurent series centered at $i$ for $0<|z-i|<\infty$. The coefficient $c_{-2}=1$ and all other coefficients vanish. On a positively oriented circle $C$ given by $|z-i|=R$,

$$
c_n=\frac1{2\pi i}\int_C\frac{f(z)}{(z-i)^{n+1}}\,dz,\qquad
\int_C\frac{dz}{(z-i)^{n+3}}=
\begin{cases}
0,&n\ne-2,\\
2\pi i,&n=-2.
\end{cases}
$$

The last handwritten case uses $n=2$. The nonzero coefficient is $c_{-2}$, where the exponent in the denominator is $1$.

**Example 3.** Find the series in powers of $z$ for

$$
f(z)=-\frac1{(z-1)(z-2)}=\frac1{z-1}-\frac1{z-2}.
$$

The poles at $1$ and $2$ give three regions for the expansions, namely $|z|<1$, $1<|z|<2$, and $2<|z|<\infty$. Use $1/(1-z)=\sum_{n=0}^{\infty}z^n$ for $|z|<1$.

![[Kyle Kabasares - Complex Variables - Disk D1 and annulus D2 in the final review.png|**Fig. 143** The circles of radii $1$ and $2$ bound the disk $D_1$ and annulus $D_2$.]]

In $D_1$, expand both partial fractions in nonnegative powers.

$$
\begin{aligned}
\frac1{z-1}&=-\sum_{n=0}^{\infty}z^n,\\
-\frac1{z-2}&=\frac1{2-z}=\frac12\sum_{n=0}^{\infty}\frac{z^n}{2^n},\\
f(z)&=\sum_{n=0}^{\infty}\left(\frac1{2^{n+1}}-1\right)z^n,\qquad |z|<1.
\end{aligned}
$$

**Example 3, continued.** In $D_2$, where $1<|z|<2$, the ratios $1/z$ and $z/2$ both have modulus less than $1$. Therefore

$$
\begin{aligned}
f(z)
&=\frac1z\frac1{1-1/z}+\frac12\frac1{1-z/2}\\
&=\sum_{n=0}^{\infty}\frac1{z^{n+1}}+\sum_{n=0}^{\infty}\frac{z^n}{2^{n+1}}
=\sum_{n=1}^{\infty}\frac1{z^n}+\sum_{n=0}^{\infty}\frac{z^n}{2^{n+1}}.
\end{aligned}
$$

In $D_3$, where $2<|z|<\infty$, both $2/z$ and $1/z$ have modulus less than $1$. Expanding both partial fractions in inverse powers gives

$$
\begin{aligned}
f(z)
&=\frac1z\frac1{1-1/z}-\frac1z\frac1{1-2/z}\\
&=\sum_{n=0}^{\infty}\frac1{z^{n+1}}-\sum_{n=0}^{\infty}\frac{2^n}{z^{n+1}}
=\sum_{n=1}^{\infty}\frac{1-2^{n-1}}{z^n}.
\end{aligned}
$$

**Section 62, exercise 1.** Expand $f(z)=z^2\sin(1/z^2)$ using the exponential definition of sine.

$$
\begin{aligned}
f(z)
&=\frac{z^2}{2i}\left(e^{iz^{-2}}-e^{-iz^{-2}}\right)\\
&=\frac{z^2}{2i}\sum_{n=0}^{\infty}
\frac{i^n z^{-2n}}{n!}\bigl(1-(-1)^n\bigr).
\end{aligned}
$$

Only odd indices remain. Replace $n$ by $2k+1$, so $1-(-1)^{2k+1}=2$ and $i^{2k}=(-1)^k$. Then

$$
f(z)=\sum_{k=0}^{\infty}\frac{(-1)^k z^{-4k}}{(2k+1)!}
=1+\sum_{k=1}^{\infty}\frac{(-1)^k}{(2k+1)!\,z^{4k}},
\qquad 0<|z|<\infty.
$$

**Exercise 2.** Find the Laurent series for $e^z/(z+1)^2$ about $z_0=-1$, valid for $0<|z+1|<\infty$.

The notes recall the Laurent expansion and coefficient integrals. For the nonnegative powers, $a_n=(2\pi i)^{-1}\int_C f(\zeta)/(\zeta-z_0)^{n+1}\,d\zeta$ for $n\ge0$. For the negative powers, $b_n=(2\pi i)^{-1}\int_C f(\zeta)/(\zeta-z_0)^{1-n}\,d\zeta$ for $n\ge1$. The second denominator in the handwriting repeats the exponent $n+1$ from the first.

Start with the Taylor series for $e^z$ at $-1$. All derivatives have value $e^{-1}$ there, so the Taylor coefficient is $1/(en!)$ and

$$
e^z=\frac1e\sum_{n=0}^{\infty}\frac{(z+1)^n}{n!}.
$$

Divide by $(z+1)^2$.

$$
\frac{e^z}{(z+1)^2}=\frac1e\sum_{n=0}^{\infty}\frac{(z+1)^{n-2}}{n!}.
$$

The terms $n=0$ and $n=1$ give the two negative powers. Reindex the remaining terms by replacing $n$ with $n+2$.

$$
\frac{e^z}{(z+1)^2}
=\frac1e\left(
\sum_{n=0}^{\infty}\frac{(z+1)^n}{(n+2)!}
+\frac1{z+1}+\frac1{(z+1)^2}\right).
$$

##### More Laurent series review

The principal part of a Laurent series consists of its negative-power terms.

##### Residue theorem

Suppose $f$ is analytic on a simply connected domain $D$ except at finitely many isolated singularities $z_1,\ldots,z_n$ in $D$. Let $\gamma$ be a positively oriented, piecewise smooth, simple closed curve in $D$ that passes through none of the singularities. Then

$$
\int_\gamma f(z)\,dz=2\pi i\sum_{z_k\ \mathrm{inside}\ \gamma}\operatorname{Res}(f;z_k).
$$

**Proof**

Draw disjoint positively oriented small circles $\gamma_k$ about the singularities inside $\gamma$. Let $\Omega$ be the region inside $\gamma$ and outside the small disks.

![[Kyle Kabasares - Complex Variables - Punctured region Omega inside gamma.png|**Fig. 144** The region $\Omega$ lies between $\gamma$ and the small circles. A singularity drawn outside $\gamma$ contributes no residue.]]

Because $f$ is analytic on $\Omega$ and its boundary, the boundary integral is zero. The notes connect this with Green's theorem and Cauchy's theorem. Since the inner circles have the opposite orientation as components of $\partial\Omega$,

$$
\int_\gamma f(z)\,dz-\sum_k\int_{\gamma_k}f(z)\,dz=0.
$$

The Laurent coefficient formula on each small circle $|w-z_k|=s$ gives $\operatorname{Res}(f;z_k)=(2\pi i)^{-1}\int_{\gamma_k} f(w)\,dw$. Substitution gives the boxed formula with the sum restricted to the enclosed singularities.

##### Integrals of rational functions

The notes begin with the polynomial $p(z)=a_nz^n+a_{n-1}z^{n-1}+\cdots+a_1z+a_0$ of degree $n$, with $a_n\ne0$.

##### Polynomial facts

If $p(\alpha)=0$, then $p(z)=(z-\alpha)q(z)$ with $q$ of degree $n-1$. A degree-$n$ polynomial has at most $n$ distinct roots. With leading coefficient $a_n\ne0$,

$$
\lim_{|z|\to\infty}\left|\frac{p(z)}{z^n}\right|
=\lim_{|z|\to\infty}\left|a_n+\frac{a_{n-1}}z+\cdots+\frac{a_0}{z^n}\right|
=|a_n|.
$$

Hence on $|z|=R$ for sufficiently large $R$,

$$
\tfrac12|a_n|R^n\le |p(z)|\le 2|a_n|R^n.
$$

##### Rational integrals

Suppose $P,Q$ are real-valued on the real axis, $Q(x)\ne0$ for all real $x$, and $\deg Q\ge\deg P+2$. To find $\int_{-\infty}^{\infty}P(x)/Q(x)\,dx$, close $[-R,R]$ with the upper semicircle $\gamma_R$.

![[Kyle Kabasares - Complex Variables - Upper contour for a rational real integral.png|**Fig. 145** The contour follows the real interval from $-R$ to $R$ and returns on the upper arc.]]

Write $n=\deg P$ and $m=\deg Q$ with leading coefficients $a_n,b_m$, respectively. For large enough $R$, the arc avoids the zeros of $Q$, and the polynomial bounds give

$$
\left|\frac{P(z)}{Q(z)}\right|
\le\frac{2|a_n|R^n}{\frac12|b_m|R^m}
\le 4\left|\frac{a_n}{b_m}\right|R^{-2}.
$$

The ML inequality bounds the arc integral by a constant times $\pi R/R^2$, which tends to zero. In the limit the contour integral equals the real integral. The residue theorem therefore gives

$$
\int_{-\infty}^{\infty}\frac{P(x)}{Q(x)}\,dx
=2\pi i\sum_{\operatorname{Im}z_k>0}\operatorname{Res}(P/Q;z_k).
$$

**Next example**

Use $P(z)=z^2$ and $Q(z)=(1+z^2)(4+z^2)$ to evaluate $\int_{-\infty}^{\infty}x^2/[(1+x^2)(4+x^2)]\,dx$.

##### Rational integral example

The denominator has degree $4$ and the numerator has degree $2$, so the degree condition holds. For $Q(z)=(1+z^2)(4+z^2)$,

$$
Q'(z)=2z(4+z^2)+(1+z^2)2z.
$$

The zeros of $Q$ are $\pm i,\pm2i$, of which $i$ and $2i$ lie in the upper half-plane. Both are simple. Using $P(z)=z^2$,

$$
\begin{aligned}
\operatorname{Res}(P/Q;i)&=\frac{P(i)}{Q'(i)}=\frac{-1}{3(2i)}=-\frac1{6i},\\
\operatorname{Res}(P/Q;2i)&=\frac{P(2i)}{Q'(2i)}=\frac{-4}{(-3)(4i)}=\frac1{3i}.
\end{aligned}
$$

Thus

$$
\int_{-\infty}^{\infty}\frac{x^2}{(1+x^2)(4+x^2)}\,dx
=2\pi i\left(-\frac1{6i}+\frac1{3i}\right)
=\frac{\pi}{3}.
$$

##### Computing residues

At a pole of order $m$, write $f(z)=H(z)/(z-z_0)^m$ with $H$ analytic for $|z-z_0|<r$. Its power series is $H(z)=\sum_{k=0}^{\infty}c_k(z-z_0)^k$. Dividing by $(z-z_0)^m$ gives

$$
f(z)=\frac{c_0}{(z-z_0)^m}+\cdots+\frac{c_{m-1}}{z-z_0}
+c_m+c_{m+1}(z-z_0)+\cdots
$$

for $0<|z-z_0|<r$. The terms through $c_{m-1}/(z-z_0)$ have negative powers of $z-z_0$.

The residue is $(2\pi i)^{-1}\int_{|w-z_0|=s}f(w)\,dw$ for a positively oriented circle with $0<s<r$. Substitute the Laurent expansion and consider the contribution of each power separately, distinguishing $j=-1$ from $j\ne-1$ in

$$
\frac1{2\pi i}\int_{|z-z_0|=s}(z-z_0)^j\,dz.
$$

##### Integrating the Laurent monomials

Parametrize $|z-z_0|=s$ by $z=z_0+se^{i\theta}$ for $0\le\theta\le2\pi$. For an integer $j\ne-1$,

$$
\begin{aligned}
\frac1{2\pi i}\int_{|z-z_0|=s}(z-z_0)^j\,dz
&=\frac{s^{j+1}}{2\pi}\int_0^{2\pi}e^{i(j+1)\theta}\,d\theta\\
&=\frac{s^{j+1}}{2\pi}
\frac{e^{2\pi i(j+1)}-1}{i(j+1)}=0.
\end{aligned}
$$

When $j=-1$, the same parametrization gives $(2\pi)^{-1}\int_0^{2\pi}d\theta=1$. A later handwritten line drops the minus sign on the index of the surviving power. The calculation above selects $(z-z_0)^{-1}$.

For $f(z)=H(z)/(z-z_0)^m$, this power has coefficient $c_{m-1}$ from the Taylor expansion of $H$. In fact,

$$
H(z)=c_0+c_1(z-z_0)+c_2(z-z_0)^2+\cdots,\qquad
H'(z)=c_1+2c_2(z-z_0)+\cdots.
$$

Taking $m-1$ derivatives and evaluating at $z_0$ leaves $(m-1)!c_{m-1}$. Therefore

$$
\operatorname{Res}(f;z_0)=c_{m-1}=\frac{H^{(m-1)}(z_0)}{(m-1)!}.
$$

**Example.** Find the residue of $e^z/(z-1)^3$ at $z_0=1$. Here $H(z)=e^z$. The notes recall $e^z=\sum_{n=0}^{\infty}z^n/n!$ and begin the expansion about $1$ by writing $e^z=e\,e^{z-1}$.

For $f(z)=e^z/(z-1)^3$, use $e^z=e\sum_{n=0}^{\infty}(z-1)^n/n!$. Then

$$
\frac{e^z}{(z-1)^3}
=\frac{e}{(z-1)^3}+\frac{e}{(z-1)^2}
+\frac{e}{2!(z-1)}+\frac{e}{3!}+\cdots.
$$

The residue at $1$ is $e/2$.

**Example.** Let $F$ and $G$ be analytic on $|z-z_0|<r_0$, with $G(z_0)=0$ and $G'(z_0)\ne0$. Find $\operatorname{Res}(F/G;z_0)$. Write $G(z)=(z-z_0)P(z)$ with $P$ analytic and nonzero at $z_0$. The handwriting attributes the factorization to the fundamental theorem of algebra. Here it follows from the Taylor expansion of $G$ at its simple zero. In particular,

$$
P(z_0)=\lim_{z\to z_0}\frac{G(z)}{z-z_0}
=\lim_{z\to z_0}\frac{G(z)-G(z_0)}{z-z_0}=G'(z_0).
$$

Now $F/G=(F/P)/(z-z_0)$, so the residue is $F(z_0)/P(z_0)=F(z_0)/G'(z_0)$.

##### Isolated singularities and residues

At an isolated singularity $z_0$, $f$ is analytic in a punctured disk $0<|z-z_0|<r$ for some $r>0$.

![[Kyle Kabasares - Complex Variables - Punctured disk about an isolated singularity.png|**Fig. 146** The dashed circle of radius $r$ surrounds the excluded point $z_0$.]]

##### Removable singularities

If $|f(z)|$ remains bounded as $z\to z_0$, define

$$
g(z)=
\begin{cases}
(z-z_0)^2 f(z),&0<|z-z_0|<r,\\
0,&z=z_0.
\end{cases}
$$

The function $g$ is analytic on the punctured disk. It is also differentiable at $z_0$ since boundedness of $f$ gives

$$
\lim_{z\to z_0}\frac{g(z)-g(z_0)}{z-z_0}
=\lim_{z\to z_0}(z-z_0)f(z)=0.
$$

The function $g$ is analytic on $|z-z_0|<r$ and has a Taylor series $g(z)=b_0+b_1(z-z_0)+b_2(z-z_0)^2+\cdots$. Since $g(z_0)=g'(z_0)=0$, its first two coefficients vanish. Thus

$$
g(z)=b_2(z-z_0)^2+b_3(z-z_0)^3+\cdots.
$$

On the punctured disk,

$$
f(z)=\frac{g(z)}{(z-z_0)^2}=b_2+b_3(z-z_0)+\cdots.
$$

Define $f(z_0)=b_2$. The power series now gives an analytic extension throughout $|z-z_0|<r$, so the singularity is removable.

##### Poles

Suppose $\lim_{z\to z_0}|f(z)|=\infty$. Choose $r>0$ small enough that $|f(z)|>1$ on $0<|z-z_0|<r$.

![[Kyle Kabasares - Complex Variables - Approaching a pole from the punctured disk.png|**Fig. 147** Arrows from several directions point toward the isolated point $z_0$.]]

Then $g=1/f$ is analytic there and satisfies $|g|<1$. By the removable singularity result, $g$ extends analytically to $z_0$, with $g(z_0)=0$ because $|f(z)|\to\infty$. Let $m$ be the order of the zero of $g$. For example, if $f(z)=1/(z-z_0)^3$, then $g(z)=(z-z_0)^3$ and $m=3$.

In general, write $g(z)=(z-z_0)^m h(z)$ with $h$ analytic on the disk and $h(z_0)\ne0$. The reciprocal $g$ is nonzero on the punctured disk, so $h$ is nonzero there as well. Thus $H=1/h$ is analytic on the disk and $H(z_0)\ne0$. Consequently,

$$
f(z)=\frac1{g(z)}=\frac1{(z-z_0)^m h(z)}
=\frac{H(z)}{(z-z_0)^m}.
$$

The preceding factorization writes $f$ as an analytic function, nonzero at $z_0$, divided by $(z-z_0)^m$. Therefore $f$ has a pole of order $m$ at $z_0$.

##### Residue at $z_0$

The crossed-out final setup recalls the residue integral for $f$ analytic on $0<|z-z_0|<r$.

$$
\frac1{2\pi i}\int_{|w-z_0|=s}f(w)\,dw,\qquad 0<s<r,
$$

with the circle taken counterclockwise.

## Source

Kyle Kabasares, *Complex Variables and Applications (Math 122, UC Merced 2016)*.
