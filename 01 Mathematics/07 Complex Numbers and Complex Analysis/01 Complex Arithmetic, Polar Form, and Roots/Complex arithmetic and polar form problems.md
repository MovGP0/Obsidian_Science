---
title: "Complex arithmetic and polar form problems"
---

> [!TLDR]
> Use conjugation, modulus, and argument to compute complex quotients, powers, and roots.

## Worked lecture material

##### Complex numbers

The course notes list Mario Bañuelos, office COB 396-9, and the email address `mbanuelos4@ucmerced.edu` with “Math 122” as the subject. Office hours are written as Thursday, “10–12 PM.” Discussions are 10% of the grade, with the two lowest dropped. Worksheets are done in groups of three or four.

A complex number is an ordered pair $z=(x,y)$, with $x=\operatorname{Re}z$ and $y=\operatorname{Im}z$. Equivalently, write $z=x+iy$, where $i^2=-1$. The notes list associativity, commutativity, and the distributive law.

**Example.** Show the multiplication rather than assuming the result.

$$
(1+2i)(-2+i)=-2-4i+2i^2+i=-4-3i.
$$

Thus $(1,2)(-2,1)=(-4,-3)$.

**Exercises**

1. Expand $(\sqrt2-i)-i(1-\sqrt2\,i)$. This gives $\sqrt2-i-i+\sqrt2\,i^2=\sqrt2-2i-\sqrt2=-2i$.
2. Compute $(2,-3)(-2,1)$. In complex notation $(2-3i)(-2+i)=-4+2i+6i-3i^2=-1+8i$, which corresponds to $(-1,8)$.
3. Show that $\operatorname{Re}(iz)=-\operatorname{Im}z$ and $\operatorname{Im}(iz)=\operatorname{Re}z$. For $z=x+iy$, multiplication gives $iz=ix+i^2y=-y+ix$, so the real and imaginary parts are $-y$ and $x$.
4. For nonzero $z=(x,y)$, begin finding the inverse by setting $z^{-1}=(u,v)$ and requiring $zz^{-1}=1$.

The notes mark the completed calculations “QED,” with the Latin phrase *quod erat demonstrandum*.

For $z=(x,y)$ and $z^{-1}=(u,v)$, expand the product and match its real and imaginary parts to those of 1.

$$
(x+iy)(u+iv)=(xu-yv)+i(xv+yu)=1,
\qquad
xu-yv=1,\quad xv+yu=0.
$$

The handwritten work starts eliminating $x/y$ by writing $x/y=-u/v$ and $(x/y)u-v=1/y$, assuming the denominators are nonzero. The two equations also give $(x^2+y^2)u=x$ and $(x^2+y^2)v=-y$ without those divisions. Thus $z^{-1}=(x-iy)/(x^2+y^2)$ for $z\ne0$.

The page lists Professor Sindi and the address `ssindi@ucmerced.edu`, with “Math 122” in the subject line. Starting with homework 3, the notes call for typing homework in LaTeX and uploading it. They also mention scanning and uploading to CatCourses. Homework is due Fridays at noon and posted at least a week before it is due. Tentative midterms are March 16 and April 20, with the final on May 11 from 8 to 11 a.m.

##### Why complex variables?

The lecture represents $z=a+ib$ in the plane.

![[Kyle Kabasares - Complex Variables - Real and imaginary coordinates of a complex number.png|**Fig. 1** The point $z=a+ib$ has real coordinate $a$ and imaginary coordinate $b$.]]

Harmonic functions $u(x,y)$ solve Laplace's equation,

$$
\nabla^2u=\frac{\partial^2u}{\partial x^2}
+\frac{\partial^2u}{\partial y^2}=0.
$$

The notes mention applications to heat and fluid flow. In the metal example, $\thermal{u}$ represents temperature.

![[Kyle Kabasares - Complex Variables - Temperature in a piece of metal.png|**Fig. 2** A piece of metal illustrates the temperature application of Laplace's equation.]]

The notes ask how complex numbers are related to Laplace's equation and use flow through pipes as another application. They also mention power series and the use of residue theory to evaluate real integrals of the form $\int_{-\infty}^{+\infty} f(x)\,dx$.

![[Kyle Kabasares - Complex Variables - Fluid flowing past an obstacle.png|**Fig. 3** Arrows illustrate fluid flowing past an obstacle.]]

##### Sums and products of complex numbers

Write $i=\sqrt{-1}$, with $i^2=-1$, and $z=x+iy$ for $x,y\in\mathbb R$. The notes refer to the complex numbers as the algebraic completion of the reals. A degree-$n$ polynomial $P_n(z)=a_0+a_1z+\cdots+a_nz^n$ with real coefficients factors over $\mathbb C$.

$$
P_n(z)=a_n\prod_{j=1}^n(z-z_j),
$$

where the roots $z_j$ are counted with multiplicity. The displayed product in the handwriting omits $a_n$, giving the monic case. The example $(z-2i)^2$ illustrates a double root at $2i$.

##### Complex plane

![[Kyle Kabasares - Complex Variables - Complex number as a vector.png|**Fig. 4** The point $z=x+iy$ has Cartesian coordinates $(x,y)$.]]

The real and imaginary parts are $\operatorname{Re}z=x$ and $\operatorname{Im}z=y$. For $z_1=x_1+iy_1$ and $z_2=x_2+iy_2$, add the corresponding parts.

$$
z_1+z_2=(x_1+x_2)+i(y_1+y_2).
$$

The symbol $\mathbb R$ denotes the set of real numbers. The complex numbers are $\mathbb C=\{z=x+iy\mid x,y\in\mathbb R\}$.

The real numbers form a subset of the complex numbers.

![[Kyle Kabasares - Complex Variables - Real numbers as a subset of complex numbers.png|**Fig. 5** The inner region represents $\mathbb R$ inside $\mathbb C$.]]

In the sum $z_1+z_2$, the real parts and imaginary parts add separately. In particular, if $z_1,z_2\in\mathbb R$, then $\operatorname{Im}(z_1+z_2)=0+0=0$, so their sum is real.

##### Product of two complex numbers

Expanding and using $i^2=-1$ gives

$$
\begin{aligned}
z_1z_2
&=(x_1+iy_1)(x_2+iy_2)\\
&=x_1x_2+ix_1y_2+iy_1x_2+i^2y_1y_2\\
&=(x_1x_2-y_1y_2)+i(x_1y_2+y_1x_2).
\end{aligned}
$$

The imaginary unit is $i=0+1i=(0,1)$. Its first four positive powers are $i$, $-1$, $-i$, and $1$.

For $z^2=1$, the factorization is $(z-1)(z+1)=0$. For $z^4=1$, factor further over the complex numbers.

$$
z^4-1=(z^2-1)(z^2+1)=(z-1)(z+1)(z-i)(z+i).
$$

The four solutions are $1,-1,i,-i$.

##### Basic algebraic properties

Addition and multiplication commute, $z_1+z_2=z_2+z_1$ and $z_1z_2=z_2z_1$. The product formula shows that swapping the two factors preserves both parts. The distributive law gives $z(z_1+z_2)=z_1z+z_2z$, and addition satisfies $(z_1+z_2)+z_3=z_1+(z_2+z_3)$.

A proof is a written argument that starts from known facts and establishes a given statement. To prove associativity of complex addition, take $z_j=x_j+iy_j$ with $x_j,y_j\in\mathbb R$ for $j=1,2,3$. Using the definition of addition and then associativity in $\mathbb R$ gives

$$
\begin{aligned}
(z_1+z_2)+z_3
&=\bigl((x_1+x_2)+x_3\bigr)
+i\bigl((y_1+y_2)+y_3\bigr)\\
&=\bigl(x_1+(x_2+x_3)\bigr)
+i\bigl(y_1+(y_2+y_3)\bigr)\\
&=(x_1+iy_1)+\bigl((x_2+x_3)+i(y_2+y_3)\bigr)\\
&=z_1+(z_2+z_3).
\end{aligned}
$$

The last handwritten expansion appears to repeat $y_2$ in the term for $z_3$. The preceding line and the definition of $z_3$ give $y_3$ there.

##### Additive and multiplicative inverses

The notes use $5+(-5)=0$ and $5(1/5)=1$ to illustrate the additive identity 0 and multiplicative identity 1. For $z=x+iy$, the additive inverse is $-z=-x+i(-y)$, since $z+(-z)=x-x+i(y-y)=0$.

For the multiplicative inverse, write $z^{-1}=u+iv$ and set $(x+iy)(u+iv)=1+i(0)$. Thus $xu-vy=1$ and $uy+vx=0$. When $x$ and $u$ are nonzero, the latter gives $y/x=-v/u$. The former gives $u-vy/x=1/x$, so $u+v^2/u=1/x$.

Solving $xu-vy=1$ and $uy+vx=0$ gives

$$
u=\frac{x}{x^2+y^2},
\qquad
v=-\frac{y}{x^2+y^2}.
$$

The notes point to the numbered lecture notes in the CatCourses Files section. Euler's formula is $e^{i\theta}=\cos\theta+i\sin\theta$.

##### Sets of numbers

- The natural numbers are $\mathbb N=\{1,2,3,\ldots\}$.
- The integers $\mathbb Z=\{\ldots,-1,0,1,\ldots\}$ contain $\mathbb N$.
- The rational numbers are $\mathbb Q=\{p/q\mid p,q\in\mathbb Z,\ q\ne0\}$.
- The irrational numbers include $\sqrt2$. The notes begin a proof by contradiction by assuming $p/q=\sqrt2$ for integers $p,q$ with $q\ne0$.

![[Kyle Kabasares - Complex Variables - Unit square with diagonal square root of two.png|**Fig. 6** A unit square has diagonal length $\sqrt2$.]]

##### Limits of sequences

Let $\{a_n\}$ be a sequence in a set $X$ equipped with a distance. It converges to $L$ if for every $\epsilon>0$ there is an $N>0$ such that $|a_n-L|<\epsilon$ for every $n>N$, where the absolute difference represents the distance in this example.

![[Kyle Kabasares - Complex Variables - Sequence values and reference limit.png|**Fig. 7** The sketch marks early sequence terms, the index $N$, and the horizontal reference level $L$.]]

The notes ask how we know whether the limit belongs to $X$. The example sequence $a_n=(1+1/n)^n$ tends to $e$ as $n\to\infty$.

The notes describe $\mathbb R$ as the rational numbers together with their accumulation points, the limits of rational approximations. They describe $\mathbb C=\{a+ib\mid a,b\in\mathbb R\}$ as the algebraic completion of the reals. For nonzero $z=a+ib$, the multiplicative inverse $z^{-1}=u+iv$ satisfies $zz^{-1}=1$.

##### Conjugate

The conjugate of $z=a+ib$ is $\bar z=a-ib$, also denoted $z^*$. Geometrically this reflects the point across the real axis.

![[Kyle Kabasares - Complex Variables - Conjugation reflects across the real axis.png|**Fig. 8** The points $z$ and $\bar z$ have the same real part, opposite imaginary parts, and the same distance from the origin.]]

##### Modulus

The modulus is the length of the vector from the origin to $z$. For $z=x+iy$,

$$
|z|^2=z\bar z=(x+iy)(x-iy)=x^2-i^2y^2=x^2+y^2.
$$

For complex $z,z_1,z_2$ and real $\alpha$, the page lists three properties.

1. $|z|\ge0$, with $|z|=0$ if and only if $z=0$.
2. $|\alpha z|=|\alpha||z|$.
3. $|z_1+z_2|\le |z_1|+|z_2|$, the triangle inequality.

The proof of the third property starts by taking arbitrary $z_1=x_1+iy_1$ and $z_2=x_2+iy_2$ in $\mathbb C$. The notes describe a proof as deriving a new fact from the assumptions.

To prove the triangle inequality, expand using the conjugate of a sum.

$$
\begin{aligned}
|z_1+z_2|^2
&=(z_1+z_2)\overline{(z_1+z_2)}\\
&=(z_1+z_2)(\bar z_1+\bar z_2)\\
&=|z_1|^2+z_1\bar z_2+z_2\bar z_1+|z_2|^2.
\end{aligned}
$$

The notes mark the conjugation rules as exercises, including $\overline{z_1z_2}=\bar z_1\bar z_2$ and $\overline{\bar z_1}=z_1$. Thus $z_2\bar z_1$ is the conjugate of $z_1\bar z_2$. Since $z+\bar z=2\operatorname{Re}z$, the two cross terms sum to $2\operatorname{Re}(z_1\bar z_2)$.

Both $\operatorname{Re}z$ and $\operatorname{Im}z$ are bounded above by $|z|$. In particular $\operatorname{Re}(z_1\bar z_2)\le|z_1||z_2|$, so

$$
|z_1+z_2|^2\le |z_1|^2+2|z_1||z_2|+|z_2|^2
=(|z_1|+|z_2|)^2.
$$

Taking nonnegative square roots gives the desired inequality.

![[Kyle Kabasares - Complex Variables - Modulus and the real projection.png|**Fig. 9** The real projection is bounded by the length of the vector representing $z$.]]

##### Division using the modulus

For $z_2\ne0$, multiply the numerator and denominator by $\bar z_2$.

$$
\frac{z_1}{z_2}
=\frac{z_1}{z_2}\frac{\bar z_2}{\bar z_2}
=\frac{z_1\bar z_2}{|z_2|^2},
\qquad
z^{-1}=\frac{\bar z}{|z|^2}\quad(z\ne0).
$$

##### Proof by induction

The goal is to show $1+3+5+\cdots+(2n-1)=n^2$ for every $n\ge1$. The first handwritten statement ends in $2n+1$, while the base case and inductive hypothesis use $2n-1$.

1. For $n=1$, the sum is $1=1^2$.
2. As the inductive hypothesis, suppose $1+3+5+\cdots+(2k-1)=k^2$.

Complete the induction for the sum of odd integers. Let $a_k=1+3+\cdots+(2k-1)$. By the inductive hypothesis $a_k=k^2$, so

$$
a_{k+1}=a_k+2(k+1)-1=k^2+2k+1=(k+1)^2.
$$

##### Induction example

Prove $n!\le n^n$ for every integer $n\ge1$. At $n=1$, $1!=1^1$. For the inductive step, assume $k!\le k^k$ for some integer $k\ge1$. Then

$$
(k+1)!=k!(k+1)\le k^k(k+1)
\le(k+1)^k(k+1)=(k+1)^{k+1}.
$$

##### Properties of complex numbers

For $z=x+iy$, the conjugate is $\bar z=x-iy$ and the modulus is $|z|=\sqrt{x^2+y^2}$. The triangle inequality is $|z_1+z_2|\le |z_1|+|z_2|$.

![[Kyle Kabasares - Complex Variables - Unit circle in the complex plane.png|**Fig. 10** The set $|z|=1$ is the unit circle in the complex plane.]]

**Discussion worksheet 1**

For $z=a+bi$ with $a,b\in\mathbb R$, show that $\operatorname{Im}z=(z-\bar z)/(2i)$. With $\bar z=a-bi$,

$$
\frac{z-\bar z}{2i}
=\frac{(a+bi)-(a-bi)}{2i}
=\frac{2bi}{2i}=b=\operatorname{Im}z.
$$

The worksheet concludes that $\operatorname{Im}(a+bi)=b=(z-\bar z)/(2i)$. The top line appears to write a plus sign in the numerator. The previous page's derivation uses subtraction.

##### Conjugate of a product

The base case $n=2$ uses $\overline{z_1z_2}=\bar z_1\bar z_2$. Assume the formula holds for $n=k$, so $\overline{z_1\cdots z_k}=\bar z_1\cdots\bar z_k$. The page starts the line for $n=k+1$ and leaves the calculation unfinished.

##### Conjugate of a sum

Set $z_1=a_1+ib_1$ and $z_2=a_2+ib_2$. Then

$$
\begin{aligned}
\overline{z_1+z_2}
&=(a_1+a_2)-i(b_1+b_2)\\
&=(a_1-ib_1)+(a_2-ib_2)=\bar z_1+\bar z_2.
\end{aligned}
$$

##### Exercise 3(b)

For $z=a+bi$, the difference is $z-\bar z=(a+bi)-(a-bi)=2bi$, which is purely imaginary.

**Exercise 4.** Apply the sum rule to the two numbers $2-5i$ and $3+2i$.

$$
\overline{2-5i}+\overline{3+2i}
-\overline{(2-5i)+(3+2i)}
=(2+5i)+(3-2i)-\bigl((2+5i)+(3-2i)\bigr)=0.
$$

##### Polar form

The handwritten date gives 2015. The surrounding lecture and discussion dates are in 2016.

For a point $(x,y)$, the polar coordinates $r,\theta$ satisfy

$$
x=r\cos\theta,\qquad y=r\sin\theta,\qquad r^2=x^2+y^2.
$$

When $x\ne0$, $\tan\theta=y/x$. The handwritten formula $\theta=\tan^{-1}(y/x)$ gives the angle in the first-quadrant sketch. For other quadrants the signs of both coordinates determine the correct choice. Adding $2\pi$ leaves the Cartesian point unchanged.

![[Kyle Kabasares - Complex Variables - Cartesian and polar coordinates.png|**Fig. 11** The point $(x,y)$ is a distance $r$ from the origin at an angle $\theta$ to the positive real axis.]]

For $z=x+iy\ne0$, the lowercase $\arg z$ denotes the set of angles. The uppercase $\operatorname{Arg}z$ is the unique representative satisfying $-\pi<\operatorname{Arg}z\le\pi$.

$$
\arg z=\{\operatorname{Arg}z+2\pi k\mid k\in\mathbb Z\}.
$$

The page first writes the interval as $(-\pi,\pi)$ and later includes $\pi$. With the latter convention, $\operatorname{Arg}z$ is defined on $\mathbb C\setminus\{0\}$ and is discontinuous on the negative real axis.

![[Kyle Kabasares - Complex Variables - Principal argument and negative real axis.png|**Fig. 12** Near the negative real axis the principal angle approaches $\pi$ from above the axis and $-\pi$ from below.]]

In polar form, $z=r\cos\theta+ir\sin\theta$. The page introduces the complex exponential as $e^z=e^{x+iy}=e^xe^{iy}$.

The exponential series is $e^x=\sum_{n=0}^\infty x^n/n!$. Use the same series at $iy$ and split it into even and odd powers. The series converges absolutely, so this splitting is valid.

$$
\begin{aligned}
e^{iy}
&=\sum_{n=0}^\infty\frac{(iy)^{2n}}{(2n)!}
+\sum_{n=0}^\infty\frac{(iy)^{2n+1}}{(2n+1)!}\\
&=\sum_{n=0}^\infty\frac{(-1)^n y^{2n}}{(2n)!}
+i\sum_{n=0}^\infty\frac{(-1)^n y^{2n+1}}{(2n+1)!}\\
&=\cos y+i\sin y.
\end{aligned}
$$

The odd-power series appears to have $(-1)^{2n}$ in the handwriting. Since $i^{2n+1}=i(-1)^n$, it uses $(-1)^n$. At $y=\pi$, Euler's formula gives $e^{i\pi}=-1$, or $e^{i\pi}+1=0$.

The notes warn that splitting a series requires care. The sum $\sum_{n=0}^\infty(1+(-1))=0$ is valid term by term, while the two proposed separate series $\sum_{n=0}^\infty 1$ and $\sum_{n=0}^\infty(-1)$ both diverge.

##### Exponential representation and multiplication

Write $z=x+iy=r(\cos\theta+i\sin\theta)=re^{i\theta}$. If $z_1=r_1e^{i\theta_1}$ and $z_2=r_2e^{i\theta_2}$, then

$$
z_1z_2=r_1r_2e^{i(\theta_1+\theta_2)}
=(x_1x_2-y_1y_2)+i(x_2y_1+x_1y_2).
$$

The page asks us to verify that the modulus from either expression is the same. In polar form, $|z_1z_2|=r_1r_2|e^{i(\theta_1+\theta_2)}|$ because the radii are nonnegative real numbers.

Since $|e^{i\theta}|=|\cos\theta+i\sin\theta|=1$ for every real $\theta$, the polar product gives $|z_1z_2|=r_1r_2$. The first line appears to omit the $i$ in front of the sine term.

In Cartesian form the mixed terms cancel when the two squares are expanded.

$$
\begin{aligned}
|z_1z_2|^2
&=(x_1x_2-y_1y_2)^2+(x_2y_1+x_1y_2)^2\\
&=(x_1^2+y_1^2)(x_2^2+y_2^2)
=r_1^2r_2^2.
\end{aligned}
$$

The handwritten line immediately below the factored expression reads $r_1r_2$. The factored expression is the squared modulus. Taking its nonnegative square root gives $|z_1z_2|=r_1r_2$.

##### Multiplicative inverse

For nonzero $z=re^{i\theta}$,

$$
\begin{aligned}
z^{-1}
&=(re^{i\theta})^{-1}=\frac1r e^{-i\theta}\\
&=\frac1r\bigl(\cos(-\theta)+i\sin(-\theta)\bigr)\\
&=\frac1r(\cos\theta-i\sin\theta)
=\frac{\bar z}{r^2}=\frac{\bar z}{|z|^2}.
\end{aligned}
$$

The third line uses that cosine is even and sine is odd. The first item in the exponential-form recap is $\bar z=re^{-i\theta}$.

The second and third rules for exponential form give quotients and integer powers.

$$
\frac{z_1}{z_2}=\frac{r_1}{r_2}e^{i(\theta_1-\theta_2)}
\quad(z_2\ne0),
\qquad
z^n=(re^{i\theta})^n=r^ne^{in\theta}
\quad(z\ne0,\ n\in\mathbb Z).
$$

##### De Moivre's formula

$$
(\cos\theta+i\sin\theta)^n=\cos(n\theta)+i\sin(n\theta).
$$

**Example.** Evaluate $z^{-6}$ for $z=-\sqrt3-i$. Its modulus is $\sqrt{(-\sqrt3)^2+(-1)^2}=2$. The handwritten calculation uses $\tan^{-1}(x/y)=\pi/3$, while the sketch shows the correct third-quadrant arguments $7\pi/6$ and $-5\pi/6$. The latter is the principal argument.

![[Kyle Kabasares - Complex Variables - Third quadrant arguments for minus square root of three minus i.png|**Fig. 13** The two labeled angles represent the same ray, and $-5\pi/6$ lies in the principal interval $(-\pi,\pi]$.]]

Using the principal angle,

$$
(-\sqrt3-i)^{-6}=(2e^{-5\pi i/6})^{-6}
=2^{-6}e^{5\pi i}=-\frac1{64}.
$$

The calculation using $\pi/3$ gives $e^{-2\pi i}/64$ instead. The difference comes from the angle used for the base.

##### Exercise (c)

For $z=(\sqrt3-i)^6$, the base has modulus $\sqrt{3+1}=2$ and angle $\arctan(-1/\sqrt3)=-\pi/6$. Hence $z=(2e^{-i\pi/6})^6=2^6e^{-i\pi}=-64$. Since $-\pi$ is excluded by the principal interval $(-\pi,\pi]$, $\operatorname{Arg}z=\pi$.

**Exercise 2.** For $1-i$, the modulus is $\sqrt{1^2+(-1)^2}=\sqrt2$ and the angle is $\arctan(-1)=-\pi/4$. Then

$$
(1-i)^6=(\sqrt2e^{-i\pi/4})^6
=8\bigl(\cos(-3\pi/2)+i\sin(-3\pi/2)\bigr)=8i.
$$

**Exercise 3.** Show that $e^{i\theta_1}e^{i\theta_2}\cdots e^{i\theta_n}=e^{i(\theta_1+\theta_2+\cdots+\theta_n)}$. The page begins by writing the first two factors in trigonometric form, with radii $r_1,r_2$. The factors $e^{i\theta_j}$ have unit modulus.

##### Regions of complex space

The page writes 2015 in the date. The course notes begin in 2016.

![[Kyle Kabasares - Complex Variables - Point in the real imaginary plane.png|**Fig. 14** The point $z_0$ is marked relative to the real and imaginary axes.]]

For a point $z_0\in\mathbb C$ and real $\epsilon>0$, the $\epsilon$-neighborhood is

$$
N_\epsilon(z_0)=\{z\in\mathbb C\mid |z-z_0|<\epsilon\}.
$$

It is the open disk of radius $\epsilon$ about $z_0$, with the circumference excluded.

![[Kyle Kabasares - Complex Variables - Open epsilon neighborhood.png|**Fig. 15** The dotted circumference is at distance $\epsilon$ from the center $z_0$.]]

## Source

Kyle Kabasares, *Complex Variables and Applications (Math 122, UC Merced 2016)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\thermal{u}$ | $\unit{K}$ | Temperature | Field in the steady heat example. |
