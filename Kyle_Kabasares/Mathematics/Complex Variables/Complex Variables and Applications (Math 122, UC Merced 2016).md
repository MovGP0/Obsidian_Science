---
title: "Complex Variables and Applications (Math 122, UC Merced 2016)"
---

> [!TLDR]
> These Math 122 notes develop complex arithmetic and the tools used to study functions of a complex variable.

Source notes by Kyle Kabasares. [[Complex Variables and Applications (Math 122, UC Merced 2016).pdf|Original PDF]].

Transcribed PDF pages 1–127 of 127.

## Transcription

### PDF page 1

**January 19, 2016. Complex numbers**

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

### PDF page 2

For $z=(x,y)$ and $z^{-1}=(u,v)$, expand the product and match its real and imaginary parts to those of 1.

$$
(x+iy)(u+iv)=(xu-yv)+i(xv+yu)=1,
\qquad
xu-yv=1,\quad xv+yu=0.
$$

The handwritten work starts eliminating $x/y$ by writing $x/y=-u/v$ and $(x/y)u-v=1/y$, assuming the denominators are nonzero. The two equations also give $(x^2+y^2)u=x$ and $(x^2+y^2)v=-y$ without those divisions. Thus $z^{-1}=(x-iy)/(x^2+y^2)$ for $z\ne0$.

**January 20, 2016 lecture**

The page lists Professor Sindi and the address `ssindi@ucmerced.edu`, with “Math 122” in the subject line. Starting with homework 3, the notes call for typing homework in LaTeX and uploading it. They also mention scanning and uploading to CatCourses. Homework is due Fridays at noon and posted at least a week before it is due. Tentative midterms are March 16 and April 20, with the final on May 11 from 8 to 11 a.m.

**Why complex variables?** The lecture represents $z=a+ib$ in the plane.

![[Kyle Kabasares - Complex Variables - Real and imaginary coordinates of a complex number.png|**Fig. 1** The point $z=a+ib$ has real coordinate $a$ and imaginary coordinate $b$.]]

Harmonic functions $u(x,y)$ solve Laplace's equation,

$$
\nabla^2u=\frac{\partial^2u}{\partial x^2}
+\frac{\partial^2u}{\partial y^2}=0.
$$

The notes mention applications to heat and fluid flow. In the metal example, $\thermal{u}$ represents temperature.

![[Kyle Kabasares - Complex Variables - Temperature in a piece of metal.png|**Fig. 2** A piece of metal illustrates the temperature application of Laplace's equation.]]

### PDF page 3

The notes ask how complex numbers are related to Laplace's equation and use flow through pipes as another application. They also mention power series and the use of residue theory to evaluate real integrals of the form $\int_{-\infty}^{+\infty} f(x)\,dx$.

![[Kyle Kabasares - Complex Variables - Fluid flowing past an obstacle.png|**Fig. 3** Arrows illustrate fluid flowing past an obstacle.]]

**Sums and products of complex numbers**

Write $i=\sqrt{-1}$, with $i^2=-1$, and $z=x+iy$ for $x,y\in\mathbb R$. The notes refer to the complex numbers as the algebraic completion of the reals. A degree-$n$ polynomial $P_n(z)=a_0+a_1z+\cdots+a_nz^n$ with real coefficients factors over $\mathbb C$.

$$
P_n(z)=a_n\prod_{j=1}^n(z-z_j),
$$

where the roots $z_j$ are counted with multiplicity. The displayed product in the handwriting omits $a_n$, giving the monic case. The example $(z-2i)^2$ illustrates a double root at $2i$.

**Complex plane**

![[Kyle Kabasares - Complex Variables - Complex number as a vector.png|**Fig. 4** The point $z=x+iy$ has Cartesian coordinates $(x,y)$.]]

The real and imaginary parts are $\operatorname{Re}z=x$ and $\operatorname{Im}z=y$. For $z_1=x_1+iy_1$ and $z_2=x_2+iy_2$, add the corresponding parts.

$$
z_1+z_2=(x_1+x_2)+i(y_1+y_2).
$$

The symbol $\mathbb R$ denotes the set of real numbers. The complex numbers are $\mathbb C=\{z=x+iy\mid x,y\in\mathbb R\}$.

### PDF page 4

The real numbers form a subset of the complex numbers.

![[Kyle Kabasares - Complex Variables - Real numbers as a subset of complex numbers.png|**Fig. 5** The inner region represents $\mathbb R$ inside $\mathbb C$.]]

In the sum $z_1+z_2$, the real parts and imaginary parts add separately. In particular, if $z_1,z_2\in\mathbb R$, then $\operatorname{Im}(z_1+z_2)=0+0=0$, so their sum is real.

**Product of two complex numbers.** Expanding and using $i^2=-1$ gives

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

**Basic algebraic properties.** Addition and multiplication commute, $z_1+z_2=z_2+z_1$ and $z_1z_2=z_2z_1$. The product formula shows that swapping the two factors preserves both parts. The distributive law gives $z(z_1+z_2)=z_1z+z_2z$, and addition satisfies $(z_1+z_2)+z_3=z_1+(z_2+z_3)$.

### PDF page 5

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

**Additive and multiplicative inverses.** The notes use $5+(-5)=0$ and $5(1/5)=1$ to illustrate the additive identity 0 and multiplicative identity 1. For $z=x+iy$, the additive inverse is $-z=-x+i(-y)$, since $z+(-z)=x-x+i(y-y)=0$.

For the multiplicative inverse, write $z^{-1}=u+iv$ and set $(x+iy)(u+iv)=1+i(0)$. Thus $xu-vy=1$ and $uy+vx=0$. When $x$ and $u$ are nonzero, the latter gives $y/x=-v/u$. The former gives $u-vy/x=1/x$, so $u+v^2/u=1/x$.

### PDF page 6

Solving $xu-vy=1$ and $uy+vx=0$ gives

$$
u=\frac{x}{x^2+y^2},
\qquad
v=-\frac{y}{x^2+y^2}.
$$

**January 25, 2016 lecture**

The notes point to the numbered lecture notes in the CatCourses Files section. Euler's formula is $e^{i\theta}=\cos\theta+i\sin\theta$.

**Sets of numbers**

- The natural numbers are $\mathbb N=\{1,2,3,\ldots\}$.
- The integers $\mathbb Z=\{\ldots,-1,0,1,\ldots\}$ contain $\mathbb N$.
- The rational numbers are $\mathbb Q=\{p/q\mid p,q\in\mathbb Z,\ q\ne0\}$.
- The irrational numbers include $\sqrt2$. The notes begin a proof by contradiction by assuming $p/q=\sqrt2$ for integers $p,q$ with $q\ne0$.

![[Kyle Kabasares - Complex Variables - Unit square with diagonal square root of two.png|**Fig. 6** A unit square has diagonal length $\sqrt2$.]]

**Limits of sequences**

Let $\{a_n\}$ be a sequence in a set $X$ equipped with a distance. It converges to $L$ if for every $\epsilon>0$ there is an $N>0$ such that $|a_n-L|<\epsilon$ for every $n>N$, where the absolute difference represents the distance in this example.

![[Kyle Kabasares - Complex Variables - Sequence values and reference limit.png|**Fig. 7** The sketch marks early sequence terms, the index $N$, and the horizontal reference level $L$.]]

The notes ask how we know whether the limit belongs to $X$. The example sequence $a_n=(1+1/n)^n$ tends to $e$ as $n\to\infty$.

### PDF page 7

The notes describe $\mathbb R$ as the rational numbers together with their accumulation points, the limits of rational approximations. They describe $\mathbb C=\{a+ib\mid a,b\in\mathbb R\}$ as the algebraic completion of the reals. For nonzero $z=a+ib$, the multiplicative inverse $z^{-1}=u+iv$ satisfies $zz^{-1}=1$.

**Conjugate.** The conjugate of $z=a+ib$ is $\bar z=a-ib$, also denoted $z^*$. Geometrically this reflects the point across the real axis.

![[Kyle Kabasares - Complex Variables - Conjugation reflects across the real axis.png|**Fig. 8** The points $z$ and $\bar z$ have the same real part, opposite imaginary parts, and the same distance from the origin.]]

**Modulus.** The modulus is the length of the vector from the origin to $z$. For $z=x+iy$,

$$
|z|^2=z\bar z=(x+iy)(x-iy)=x^2-i^2y^2=x^2+y^2.
$$

For complex $z,z_1,z_2$ and real $\alpha$, the page lists three properties.

1. $|z|\ge0$, with $|z|=0$ if and only if $z=0$.
2. $|\alpha z|=|\alpha||z|$.
3. $|z_1+z_2|\le |z_1|+|z_2|$, the triangle inequality.

The proof of the third property starts by taking arbitrary $z_1=x_1+iy_1$ and $z_2=x_2+iy_2$ in $\mathbb C$. The notes describe a proof as deriving a new fact from the assumptions.

### PDF page 8

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

**Division using the modulus.** For $z_2\ne0$, multiply the numerator and denominator by $\bar z_2$.

$$
\frac{z_1}{z_2}
=\frac{z_1}{z_2}\frac{\bar z_2}{\bar z_2}
=\frac{z_1\bar z_2}{|z_2|^2},
\qquad
z^{-1}=\frac{\bar z}{|z|^2}\quad(z\ne0).
$$

**Proof by induction.** The goal is to show $1+3+5+\cdots+(2n-1)=n^2$ for every $n\ge1$. The first handwritten statement ends in $2n+1$, while the base case and inductive hypothesis use $2n-1$.

1. For $n=1$, the sum is $1=1^2$.
2. As the inductive hypothesis, suppose $1+3+5+\cdots+(2k-1)=k^2$.

### PDF page 9

Complete the induction for the sum of odd integers. Let $a_k=1+3+\cdots+(2k-1)$. By the inductive hypothesis $a_k=k^2$, so

$$
a_{k+1}=a_k+2(k+1)-1=k^2+2k+1=(k+1)^2.
$$

**January 26, 2016 discussion. Induction example**

Prove $n!\le n^n$ for every integer $n\ge1$. At $n=1$, $1!=1^1$. For the inductive step, assume $k!\le k^k$ for some integer $k\ge1$. Then

$$
(k+1)!=k!(k+1)\le k^k(k+1)
\le(k+1)^k(k+1)=(k+1)^{k+1}.
$$

**Properties of complex numbers.** For $z=x+iy$, the conjugate is $\bar z=x-iy$ and the modulus is $|z|=\sqrt{x^2+y^2}$. The triangle inequality is $|z_1+z_2|\le |z_1|+|z_2|$.

![[Kyle Kabasares - Complex Variables - Unit circle in the complex plane.png|**Fig. 10** The set $|z|=1$ is the unit circle in the complex plane.]]

**Discussion worksheet 1.** For $z=a+bi$ with $a,b\in\mathbb R$, show that $\operatorname{Im}z=(z-\bar z)/(2i)$. With $\bar z=a-bi$,

$$
\frac{z-\bar z}{2i}
=\frac{(a+bi)-(a-bi)}{2i}
=\frac{2bi}{2i}=b=\operatorname{Im}z.
$$

### PDF page 10

The worksheet concludes that $\operatorname{Im}(a+bi)=b=(z-\bar z)/(2i)$. The top line appears to write a plus sign in the numerator. The previous page's derivation uses subtraction.

**Exercise 2. Conjugate of a product.** The base case $n=2$ uses $\overline{z_1z_2}=\bar z_1\bar z_2$. Assume the formula holds for $n=k$, so $\overline{z_1\cdots z_k}=\bar z_1\cdots\bar z_k$. The page starts the line for $n=k+1$ and leaves the calculation unfinished.

**Exercise 3(a). Conjugate of a sum.** Set $z_1=a_1+ib_1$ and $z_2=a_2+ib_2$. Then

$$
\begin{aligned}
\overline{z_1+z_2}
&=(a_1+a_2)-i(b_1+b_2)\\
&=(a_1-ib_1)+(a_2-ib_2)=\bar z_1+\bar z_2.
\end{aligned}
$$

**Exercise 3(b).** For $z=a+bi$, the difference is $z-\bar z=(a+bi)-(a-bi)=2bi$, which is purely imaginary.

**Exercise 4.** Apply the sum rule to the two numbers $2-5i$ and $3+2i$.

$$
\overline{2-5i}+\overline{3+2i}
-\overline{(2-5i)+(3+2i)}
=(2+5i)+(3-2i)-\bigl((2+5i)+(3-2i)\bigr)=0.
$$

### PDF page 11

**January 27 lecture. Polar form**

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

### PDF page 12

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

**Exponential representation and multiplication.** Write $z=x+iy=r(\cos\theta+i\sin\theta)=re^{i\theta}$. If $z_1=r_1e^{i\theta_1}$ and $z_2=r_2e^{i\theta_2}$, then

$$
z_1z_2=r_1r_2e^{i(\theta_1+\theta_2)}
=(x_1x_2-y_1y_2)+i(x_2y_1+x_1y_2).
$$

The page asks us to verify that the modulus from either expression is the same. In polar form, $|z_1z_2|=r_1r_2|e^{i(\theta_1+\theta_2)}|$ because the radii are nonnegative real numbers.

### PDF page 13

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

**Multiplicative inverse.** For nonzero $z=re^{i\theta}$,

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

### PDF page 14

The second and third rules for exponential form give quotients and integer powers.

$$
\frac{z_1}{z_2}=\frac{r_1}{r_2}e^{i(\theta_1-\theta_2)}
\quad(z_2\ne0),
\qquad
z^n=(re^{i\theta})^n=r^ne^{in\theta}
\quad(z\ne0,\ n\in\mathbb Z).
$$

**De Moivre's formula**

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

### PDF page 15

**Exercise (c).** For $z=(\sqrt3-i)^6$, the base has modulus $\sqrt{3+1}=2$ and angle $\arctan(-1/\sqrt3)=-\pi/6$. Hence $z=(2e^{-i\pi/6})^6=2^6e^{-i\pi}=-64$. Since $-\pi$ is excluded by the principal interval $(-\pi,\pi]$, $\operatorname{Arg}z=\pi$.

**Exercise 2.** For $1-i$, the modulus is $\sqrt{1^2+(-1)^2}=\sqrt2$ and the angle is $\arctan(-1)=-\pi/4$. Then

$$
(1-i)^6=(\sqrt2e^{-i\pi/4})^6
=8\bigl(\cos(-3\pi/2)+i\sin(-3\pi/2)\bigr)=8i.
$$

**Exercise 3.** Show that $e^{i\theta_1}e^{i\theta_2}\cdots e^{i\theta_n}=e^{i(\theta_1+\theta_2+\cdots+\theta_n)}$. The page begins by writing the first two factors in trigonometric form, with radii $r_1,r_2$. The factors $e^{i\theta_j}$ have unit modulus.

**February 3 lecture. Regions of complex space**

The page writes 2015 in the date. The course notes begin in 2016.

![[Kyle Kabasares - Complex Variables - Point in the real imaginary plane.png|**Fig. 14** The point $z_0$ is marked relative to the real and imaginary axes.]]

For a point $z_0\in\mathbb C$ and real $\epsilon>0$, the $\epsilon$-neighborhood is

$$
N_\epsilon(z_0)=\{z\in\mathbb C\mid |z-z_0|<\epsilon\}.
$$

It is the open disk of radius $\epsilon$ about $z_0$, with the circumference excluded.

![[Kyle Kabasares - Complex Variables - Open epsilon neighborhood.png|**Fig. 15** The dotted circumference is at distance $\epsilon$ from the center $z_0$.]]

### PDF page 16

On the real line the $\epsilon$-neighborhood of $x_0$ is the interval

$$
N_\epsilon(x_0)=\{x\in\mathbb R\mid |x-x_0|<\epsilon\}
=(x_0-\epsilon,x_0+\epsilon).
$$

![[Kyle Kabasares - Complex Variables - Epsilon neighborhood on the real line.png|**Fig. 16** The neighborhood extends a distance $\epsilon$ to either side of $x_0$.]]

In $\mathbb C$, the condition $|z-z_0|<\epsilon$ gives an open disk. A deleted neighborhood excludes the center as well as the boundary, so $0<|z-z_0|<\epsilon$. The real analogue is $(x_0-\epsilon,x_0)\cup(x_0,x_0+\epsilon)$.

![[Kyle Kabasares - Complex Variables - Shaded deleted neighborhood.png|**Fig. 17** The shaded disk has its center removed and its circumference dashed.]]

![[Kyle Kabasares - Complex Variables - Deleted neighborhood centered at zero.png|**Fig. 18** The origin is excluded from its deleted neighborhood.]]

**Points of a region.** Let $S\subseteq\mathbb C$.

- An interior point $z_0$ has a neighborhood contained in $S$.
- An exterior point $z_0$ has a neighborhood containing no point of $S$.
- At a boundary point, every neighborhood meets both $S$ and its complement.

![[Kyle Kabasares - Complex Variables - Interior and boundary points of a region.png|**Fig. 19** A small disk about the interior point lies in the region. The other marked point lies on the boundary.]]

### PDF page 17

**Example.** For the closed unit disk $S=\{z\in\mathbb C\mid |z|\le1\}$,

$$
\begin{aligned}
\operatorname{Int}(S)&=\{z\mid |z|<1\},\\
\operatorname{Ext}(S)&=\{z\mid |z|>1\},\\
\operatorname{Bdry}(S)&=\{z\mid |z|=1\}.
\end{aligned}
$$

If a point $z_1$ outside the disk is adjoined, giving $S=\{z\in\mathbb C\mid |z|\le1\}\cup\{z_1\}$, then $z_1$ is also a boundary point.

![[Kyle Kabasares - Complex Variables - Unit disk and isolated boundary point.png|**Fig. 20** The point $z_1$ lies away from the disk and belongs to the boundary of the union.]]

**Open and closed sets.** A set is open if it contains none of its boundary points. The notes illustrate this with the open unit disk.

![[Kyle Kabasares - Complex Variables - Open unit disk with dashed circumference.png|**Fig. 21** The dashed circle is excluded from the open disk.]]

A set is closed if it contains all its boundary points. The closed disk with the isolated point $z_1$ is an example.

![[Kyle Kabasares - Complex Variables - Closed disk with an isolated point.png|**Fig. 22** Both the solid circumference and the point $z_1$ belong to the set.]]

### PDF page 18

Adjoin the single boundary point $i$ to the open unit disk. The resulting set is neither open nor closed.

![[Kyle Kabasares - Complex Variables - Open disk with one boundary point included.png|**Fig. 23** The dashed circumference is excluded except for the marked point $i$.]]

The closure of $S$ consists of $S$ together with all its boundary points.

**Connected sets.** The notes use a polygonal-path criterion. For each pair $z_1,z_2$ in the set, there must be a path made of finitely many line segments lying entirely in the set. This criterion is equivalent to connectedness for open subsets of $\mathbb C$.

![[Kyle Kabasares - Complex Variables - Connected and disconnected sets.png|**Fig. 24** The points in the left sketch can be joined inside the region. The segment on the right crosses the gap between two components.]]

**Bounded sets.** A set $S$ is bounded if there is a real $R>0$ such that every point of $S$ lies inside the circle $C_R=\{z\mid |z|=R\}$. A set without such a bound is unbounded.

**Example.** The half-plane $S=\{z\mid\operatorname{Re}z\ge1\}$ is closed and connected. For $z=x+iy$, the condition is $x\ge1$.

![[Kyle Kabasares - Complex Variables - Closed right half plane.png|**Fig. 25** The shaded half-plane includes the vertical boundary line $\operatorname{Re}z=1$.]]

### PDF page 19

The entire complex plane $\mathbb C$ is both open and closed as a subset of itself. The real axis $\mathbb R$ is closed in the complex plane.

For a finite set $S=\{z_1,\ldots,z_n\}\subseteq\mathbb C$, every point of $S$ is a boundary point and every point outside $S$ is exterior. Thus $S$ is bounded and closed. If it has more than one point, it is disconnected.

![[Kyle Kabasares - Complex Variables - Finite set of isolated complex points.png|**Fig. 26** Each dot is an isolated point and belongs to the boundary of the finite set.]]

**February 8, 2016. Functions**

A function $f$ on a set $D$ of complex numbers assigns one complex number $w=f(z)$ to each $z\in D$. The set $D$ is the domain of definition. The set of all values $f(z)$ as $z$ varies over $D$ is the range, denoted $R$ in the notes.

For $z=x+iy$, write $f(z)=u(x,y)+iv(x,y)$, where $u$ and $v$ are the real and imaginary parts of the output.

![[Kyle Kabasares - Complex Variables - Mapping from the domain to the range.png|**Fig. 27** The map $w=f(z)$ takes points of $D$ in the $(x,y)$ plane to points of $R$ in the $(u,v)$ plane.]]

### PDF page 20

Write $f(z)=u(z)+iv(z)$, where $u(z)=u(x,y)$ and $v(z)=v(x,y)$ are real-valued functions of the two real variables $x$ and $y$. If the domain is all of $\mathbb C$, each component is a map $\mathbb R^2\to\mathbb R$.

**Example.** For $f(z)=z^3$, expand the cube.

$$
\begin{aligned}
(x+iy)^3
&=x^3+3ix^2y-3xy^2-iy^3\\
&=(x^3-3xy^2)+i(3x^2y-y^3).
\end{aligned}
$$

Thus $u(x,y)=x^3-3xy^2$ and $v(x,y)=3x^2y-y^3$. The handwritten grouped expression and the line for $u$ use $y^3$ in the real term. The first expansion gives $y^2$ there.

**Example.** For $f(z)=e^z=e^x(\cos y+i\sin y)$, the real and imaginary parts are $u=e^x\cos y$ and $v=e^x\sin y$.

![[Kyle Kabasares - Complex Variables - Exponential map sends lines to circles and rays.png|**Fig. 28** Under the exponential, $x=c$ maps to the circle of radius $e^c$. The line $y=c$ maps to the ray at angle $c$, excluding its origin.]]

**Example.** Find the image of the circle $z(t)=(1+\cos t)+i(1+\sin t)$, $-\pi\le t\le\pi$, under $f(z)=(3+4i)z+(-2+i)$. The page substitutes $x=1+\cos t$ and $y=1+\sin t$ into the map and begins distributing the factors. Grouping the terms gives

$$
f(z(t))=(-3+3\cos t-4\sin t)+i(8+4\cos t+3\sin t).
$$

### PDF page 21

**February 9, 2016 discussion. Mappings**

The announcement lists Thursday office hours from 12:30 to 2:30 p.m. A mapping assigns values from one set to another. The image of $A$ under $f$ is $B=\{f(z)\mid z\in A\}$.

![[Kyle Kabasares - Complex Variables - Constant function graph and singleton image.png|**Fig. 29** The graph of $f(x)=1$ is a horizontal line, while its image on $\mathbb R$ is the single value 1.]]

A complex map $w=f(z)$ sends the input coordinates $(x,y)$ to output coordinates $(u,v)$, where $z=x+iy$ and $w=u+iv$.

**Example.** Continue the circle calculation for $w=(3+4i)z+(-2+i)$. The first handwritten statement of the map appears to use $-z+i$ for the translation. The expansion below it and the previous page use $-2+i$.

$$
w=(3+4i)(x+iy)+(-2+i)=(3x-4y-2)+i(4x+3y+1).
$$

With $x(t)=1+\cos t$ and $y(t)=1+\sin t$, the components become

$$
u(t)=3\cos t-4\sin t-3,\qquad
v(t)=4\cos t+3\sin t+8.
$$

Then $(u(t)+3)^2+(v(t)-8)^2=25$, or $|w(t)-(-3+8i)|=5$.

![[Kyle Kabasares - Complex Variables - Image of a circle under an affine map.png|**Fig. 30** The unit circle centered at $1+i$ maps to a circle of radius 5 centered at $-3+8i$.]]

The bottom line starts solving for $z$ by moving the translation to the other side. The full inverse is $z=(w-(-2+i))/(3+4i)$.

### PDF page 22

**Accumulation points.** A point $z_0$ is an accumulation point of $S$ if each deleted neighborhood $D_\epsilon(z_0)=\{z\in\mathbb C\mid 0<|z-z_0|<\epsilon\}$, with $\epsilon>0$, contains at least one point of $S$.

![[Kyle Kabasares - Complex Variables - Deleted neighborhood of an accumulation point.png|**Fig. 31** The point $z\in S$ lies within distance $\epsilon$ of $z_0$ and is distinct from it.]]

**Worksheet 4**

1(a). The sketched half-plane $\operatorname{Im}z>1$ is a domain. A domain is nonempty, open, and connected.

![[Kyle Kabasares - Complex Variables - Open half plane above imaginary coordinate one.png|**Fig. 32** The shaded half-plane excludes the dashed line $\operatorname{Im}z=1$.]]

1(b). The set $|z-2+i|\le1$ can be written $|(x-2)+i(y+1)|\le1$. It is a closed disk of radius 1 centered at $2-i$. It includes its boundary, so it fails the openness condition for a domain.

![[Kyle Kabasares - Complex Variables - Closed disk centered at two minus i.png|**Fig. 33** The disk is centered at $(2,-1)$ and tangent to the real axis.]]

2(a). For $z_n=i^n$ with $n=1,2,3,\ldots$, the values repeat in the order $i,-1,-i,1$. The set of these four values has no accumulation points.

![[Kyle Kabasares - Complex Variables - Four points from the powers of i.png|**Fig. 34** The four distinct powers lie on the coordinate axes.]]

### PDF page 23

2(b). For $z_n=i^n/n$, the first four terms are $i,-1/2,-i/3,1/4$. The points cycle through the axes with modulus $1/n$, so they approach zero.

![[Kyle Kabasares - Complex Variables - Powers of i scaled by the reciprocal index.png|**Fig. 35** The first four terms lie on different axes at decreasing distances from the origin.]]

**February 10, 2016. Lecture 8. Continuity and limits**

For a real function defined around $c$, continuity at $c$ requires both one-sided limits to exist and agree with the function value.

$$
\lim_{x\to c^+}f(x)=f(c)=\lim_{x\to c^-}f(x).
$$

![[Kyle Kabasares - Complex Variables - Continuous real function at c.png|**Fig. 36** The graph approaches the marked value $f(c)$ from either side.]]

The $\epsilon$–$\delta$ definition of $\lim_{x\to x_0}f(x)=L$ asks that for every $\epsilon>0$ there be a $\delta>0$ such that $|f(x)-L|<\epsilon$ whenever $0<|x-x_0|<\delta$ and $x$ is in the domain. The handwritten condition omits the exclusion of $x=x_0$. The sketch illustrates the continuous case $f(x_0)=L$, where the inequality also holds at $x_0$.

![[Kyle Kabasares - Complex Variables - Epsilon and delta intervals for a real limit.png|**Fig. 37** A horizontal interval of radius $\delta$ about $x_0$ keeps the corresponding function values within $\epsilon$ of $L$.]]

### PDF page 24

**Complex limits and continuity.** Let $z_0$ be an accumulation point of the domain. The statement $\lim_{z\to z_0}f(z)=w_0$ means that for every real $\epsilon>0$ there is a real $\delta>0$ such that

$$
0<|z-z_0|<\delta\quad\Longrightarrow\quad |f(z)-w_0|<\epsilon
$$

for $z$ in the domain. The handwritten inequality omits the lower bound, while the text explicitly says that $f(z_0)$ need not exist. The lower bound gives the deleted neighborhood used for the limit.

![[Kyle Kabasares - Complex Variables - Neighborhoods in the input and output planes.png|**Fig. 38** The image of the relevant input neighborhood fits inside the $\epsilon$-neighborhood of $w_0$.]]

The choice of $\delta$ depends on $\epsilon$. It is not unique. If a positive $\delta$ works, then so do $\delta/2$ and $\delta/4$.

To establish uniqueness of the limit by contradiction, the notes draw two candidate values $w_0$ and $w_1$ separated by $D=|w_0-w_1|>0$, choose $\epsilon=D/10$, and recall the triangle inequality $|a+b|\le|a|+|b|$.

![[Kyle Kabasares - Complex Variables - Two candidate complex limits.png|**Fig. 39** The two proposed limits have disjoint neighborhoods of radius $D/10$.]]

### PDF page 25

For three complex numbers $z,w,y$, use $a=-(z-w)$ and $b=z-y$ in the triangle inequality.

$$
|w-y|=|-(z-w)+(z-y)|\le|w-z|+|z-y|.
$$

Geometrically, the direct distance is at most the length of the path through $z$.

**Uniqueness of the limit.** Suppose $w_0\ne y_0$ are both limits of $f(z)$ as $z\to z_0$. This page chooses $\epsilon=|w_0-y_0|/3$. The two limit conditions supply $\delta_1,\delta_2>0$. Let $\delta=\min\{\delta_1,\delta_2\}$. At a domain point with $0<|z-z_0|<\delta$, both $|f(z)-w_0|<\epsilon$ and $|f(z)-y_0|<\epsilon$ hold. Such points exist because $z_0$ is an accumulation point of the domain. Then

$$
3\epsilon=|w_0-y_0|
\le|f(z)-w_0|+|f(z)-y_0|
<2\epsilon,
$$

a contradiction.

**Limits of the real and imaginary parts.** Write $f(z)=u(x,y)+iv(x,y)$, $z=x+iy$, $z_0=x_0+iy_0$, and $w_0=u_0+iv_0$. Then $\lim_{z\to z_0}f(z)=w_0$ if and only if

$$
\lim_{(x,y)\to(x_0,y_0)}u(x,y)=u_0
\qquad\text{and}\qquad
\lim_{(x,y)\to(x_0,y_0)}v(x,y)=v_0.
$$

The notes suggest proving this by starting with the real component limits and then treating the complex limit.

### PDF page 26

**Example.** Find the limit of $f(z)=(z+i)^2$ as $z\to2-i$. The introductory line looks like $z\to z-i$, but the substitution below uses $2-i$. With $z=x+iy$,

$$
\begin{aligned}
f(z)&=z^2+2iz-1\\
&=(x^2-y^2-2y-1)+i(2xy+2x).
\end{aligned}
$$

The two components are polynomials and continuous at $(2,-1)$. Substitution gives a real part of $4-1+2-1=4$ and an imaginary part of $2(2)(-1)+2(2)=0$. Therefore the limit is 4.

**Limits at infinity.** The extended complex plane adjoins one point, $\infty$, to $\mathbb C$.

![[Kyle Kabasares - Complex Variables - Directions toward complex infinity.png|**Fig. 40** The arrows indicate that points can tend to infinity in any direction in the plane.]]

For each $\epsilon>0$, the region $|z|>1/\epsilon$ corresponds to points near the north pole under stereographic projection. Together with $\infty$, it forms a neighborhood of infinity in the extended plane.

![[Kyle Kabasares - Complex Variables - Neighborhood outside a circle at infinity.png|**Fig. 41** The finite part of the neighborhood lies outside the circle $|z|=1/\epsilon$.]]

### PDF page 27

**Theorem on infinite limits.** For $f$ and its reciprocal on a deleted neighborhood in the domain,

$$
\lim_{z\to z_0}f(z)=\infty
\quad\Longleftrightarrow\quad
\lim_{z\to z_0}\frac1{f(z)}=0.
$$

Here tending to infinity means that the modulus grows beyond every finite bound.

**Review of the $\epsilon$–$\delta$ definition.** The modulus $|z|$ is distance from the origin. The modulus $|z_1-z_2|$ is the length of the segment between $z_1$ and $z_2$. If both coordinates of $z_2$ exceed those of $z_1$, the two signed components of $z_1-z_2$ are negative. The handwritten explanation calls these negative quantities “magnitudes.”

![[Kyle Kabasares - Complex Variables - Difference of two complex points as a vector.png|**Fig. 42** The vector $z_1-z_2$ points from $z_2$ to $z_1$ and is redrawn from the origin.]]

To show $\lim_{z\to z_0}f(z)=L$, start with a given $\epsilon>0$, the radius of an open disk centered at $L$. Find $\delta>0$ such that every domain point with $0<|z-z_0|<\delta$ has $|f(z)-L|<\epsilon$. The image needs to lie inside the output disk. The handwritten phrase “maps onto every point” would require the stronger condition that the entire output disk is attained.

![[Kyle Kabasares - Complex Variables - Deleted input disk mapped inside the output disk.png|**Fig. 43** The arrows show points of the input disk mapping into the output disk.]]

### PDF page 28

**February 16, 2016 discussion. Epsilon–delta proofs**

For each $\epsilon>0$, choose $\delta>0$ so that $|f(z)-L|<\epsilon$ whenever $0<|z-z_0|<\delta$ in the domain. In general $\delta$ depends on $\epsilon$.

**Example.** For $f(z)=i\bar z/2$ on the open unit disk, prove $\lim_{z\to1}f(z)=i/2$.

![[Kyle Kabasares - Complex Variables - Open disk for the conjugation limit.png|**Fig. 44** The domain is the open disk $|z|<1$, and the approach point $1$ lies on its boundary.]]

Using $|z_1z_2|=|z_1||z_2|$ and invariance of modulus under conjugation,

$$
\left|f(z)-\frac i2\right|
=\left|\frac{i(\bar z-1)}2\right|
=\frac{|\bar z-1|}{2}=\frac{|z-1|}{2}.
$$

Choose $\delta=2\epsilon$. Then $0<|z-1|<\delta$ implies $\left|f(z)-i/2\right|<\epsilon$.

**Example.** Show that $z/\bar z$ has no limit as $z\to0$. The notes suggest trying paths such as $x=y$, $x=y^2$, the real axis, and the imaginary axis. On the real axis, with $z=x+i0$ and $x\ne0$, the quotient is $x/x=1$, so the limit along that axis is 1.

### PDF page 29

On the imaginary axis $z=iy$ and $z/\bar z=iy/(-iy)=-1$ for $y\ne0$. The limit along this axis is $-1$, while the limit along the real axis is $1$. Therefore $\lim_{z\to0}z/\bar z$ does not exist.

**Continuity conditions.** The limit $\lim_{z\to z_0}f(z)$ must exist, $f(z_0)$ must be defined, and the two must agree.

**Worksheet 1(a).** To show $\lim_{z\to z_0}\bar z=\bar z_0$, use $|\bar z-\bar z_0|=|\overline{z-z_0}|=|z-z_0|$. Taking $\delta=\epsilon$ gives the required estimate.

**Worksheet 3(a).** The notes record $\lim_{z\to\infty}T(z)=\infty$ if $c=0$. The displayed denominator of $T$ is incomplete. In the usual linear fractional form $T(z)=(az+b)/(cz+d)$ with $ad-bc\ne0$, the case $c=0$ gives a nonconstant affine function, which tends to infinity in modulus.

**February 17, 2016 lecture. Theorem 1**

The lecture restates that $\lim_{z\to z_0}f(z)=\infty$ if and only if $\lim_{z\to z_0}1/f(z)=0$. The proof begins by assuming the infinite limit. The handwritten estimate starts with the finite-limit template $|f(z)-L|<\epsilon$. For $L=\infty$, the sketch instead motivates using the neighborhood of infinity, corresponding in the plane to $|f(z)|>1/\epsilon$.

![[Kyle Kabasares - Complex Variables - Neighborhood of infinity on the sphere.png|**Fig. 45** The cap around the north pole represents a neighborhood of infinity on the extended complex plane.]]

### PDF page 30

For an infinite limit, given any $\epsilon>0$, choose $\delta>0$ so that $|f(z)|>1/\epsilon$ whenever $0<|z-z_0|<\delta$ in the domain. The reciprocal inequality is

$$
\left|\frac1{f(z)}-0\right|=\frac1{|f(z)|}<\epsilon.
$$

The two inequalities are equivalent where the reciprocal is defined. This gives the limit $1/f(z)\to0$ as $z\to z_0$.

![[Kyle Kabasares - Complex Variables - Function value outside the radius one over epsilon.png|**Fig. 46** The value $f(z)$ lies outside the circle of radius $1/\epsilon$.]]

For a limit at infinity in both planes, the notes combine reciprocation of the input and output.

$$
\lim_{z\to\infty} f(z)=\infty
\quad\Longleftrightarrow\quad
\lim_{\zeta\to0}\frac1{f(1/\zeta)}=0.
$$

The page refers to lecture 8, slide 17, for the proof.

**Example.** The initial line gives 0 for the limit of $f(z)=(2z^3-1)/(z^2+1)$ as $z\to\infty$. The worked calculation below assigns 0 to the transformed reciprocal and infinity to the original limit. With $\zeta=1/z$,

$$
g(\zeta)=\frac1{f(1/\zeta)}
=\frac{(1/\zeta)^2+1}{2(1/\zeta)^3-1}
=\frac{\zeta+\zeta^3}{2-\zeta^3}.
$$

Thus $g(\zeta)\to0$ as $\zeta\to0$, and $f(z)\to\infty$ as $z\to\infty$. The page lists three ways to study the limit of $g$. Use the $\epsilon$–$\delta$ definition, substitute $\zeta=re^{i\theta}$ and let $r\to0$, or write $\zeta=x+iy$ and study the two real components of $g$.

### PDF page 31

To estimate the transformed function from the preceding example, seek $\delta>0$ such that

$$
\left|\frac{z+z^3}{2-z^3}\right|<\epsilon
\qquad\text{whenever }0<|z|<\delta.
$$

For $z=re^{i\theta}$, the numerator obeys $|re^{i\theta}+r^3e^{3i\theta}|\le r+r^3$. The notes recall $|a+b|\le|a|+|b|$ and the reverse estimate $|a|-|b|\le |a+b|$. Applied to the denominator, the latter gives $|2-z^3|\ge2-r^3$.

**Lecture 9. Differentiability**

The real difference quotient is $[f(x+h)-f(x)]/h$. For a complex increment $\Delta z=\Delta x+i\Delta y$, the derivative is

$$
f'(z_0)
=\lim_{\Delta z\to0}\frac{f(z_0+\Delta z)-f(z_0)}{\Delta z}
=\lim_{z\to z_0}\frac{f(z)-f(z_0)}{z-z_0},
$$

when the limit exists.

**Example.** For $f(z)=3z^2+1$, the constants cancel in the difference quotient.

$$
\frac{3(z+\Delta z)^2+1-(3z^2+1)}{\Delta z}
=\frac{6z\Delta z+3(\Delta z)^2}{\Delta z}
=6z+3\Delta z.
$$

The intermediate handwritten expansion appears to place an extra factor of 3 on the cross term, while the final line uses $6z$. Taking $\Delta z\to0$ gives $f'(z)=6z$.

### PDF page 32

**Example.** For $f(z)=\bar z$, the difference quotient at any $z$ simplifies to

$$
\frac{\overline{z+\Delta z}-\bar z}{\Delta z}
=\frac{\overline{\Delta z}}{\Delta z}
=\frac{\Delta x-i\Delta y}{\Delta x+i\Delta y}.
$$

Along $\Delta y=0$ the quotient is $1$, while along $\Delta x=0$ it is $-1$. The latter value is circled in the notes. The two paths give different limits, so conjugation is nowhere complex differentiable.

![[Kyle Kabasares - Complex Variables - Conjugation reflects a point.png|**Fig. 47** The point $z$ and its conjugate are reflections across the real axis.]]

For $f(z)=u(x,y)+iv(x,y)$, write the numerator at $z_0=x_0+iy_0$ as $\Delta u+i\Delta v$, where $\Delta u=u(x_0+\Delta x,y_0+\Delta y)-u(x_0,y_0)$ and $\Delta v=v(x_0+\Delta x,y_0+\Delta y)-v(x_0,y_0)$. The notes write the two terms of the difference on separate lines and propose comparing $\Delta x=0$ with $\Delta y=0$.

**Complex analysis limits review.** The notes contrast two candidate sequence limits $P$ and $M$. Convergence to $P$ requires that every open disk about $P$ contain all but finitely many terms. In the sketch, infinitely many terms remain outside the disk about $M$.

![[Kyle Kabasares - Complex Variables - Disks around two candidate sequence limits.png|**Fig. 48** The sketch compares neighborhoods of $P$ and $M$ for a sequence approaching $P$.]]

### PDF page 33

**Sequence examples**

$$
\frac12+\frac in\longrightarrow\frac12,
\qquad
\left(-\frac13\right)^n+\left(2+\frac1{3n}\right)i
\longrightarrow2i.
$$

The sequence $i^n$ cycles through $i,-1,-i,1$ and does not converge. If $z_n\to x$ and $s_n\to y$, then $z_ns_n\to xy$ and $z_n+ws_n\to x+wy$ for any fixed $w\in\mathbb C$. Also $z_n/s_n\to x/y$ if $y\ne0$.

**Modulus and conjugate review.** The examples are $|1+i|=\sqrt2$, $|2|=|2i|$, and $\overline{3+i}=3-i$.

![[Kyle Kabasares - Complex Variables - Modulus of one plus i.png|**Fig. 49** The segment from the origin to $1+i$ has length $\sqrt2$.]]

![[Kyle Kabasares - Complex Variables - Equal moduli along two axes.png|**Fig. 50** The positive real and imaginary axes show equal distances to $2$ and $2i$.]]

**Function limits.** In one real dimension one can approach from either side. In the complex plane one must account for every approach through the domain. For each $\epsilon>0$, choose $\delta>0$ such that $|f(z)-L|<\epsilon$ whenever $0<|z-z_0|<\delta$ in the domain.

![[Kyle Kabasares - Complex Variables - Approach directions for a complex limit.png|**Fig. 51** The dotted arrows show several directions toward $z_0$, and the disk around $L$ represents the tolerance for the corresponding outputs.]]

### PDF page 34

**Continuity.** A function is continuous at $z_0$ if $\lim_{z\to z_0}f(z)=f(z_0)$.

**Example.** Along the real axis, $z=x$ and $z/\bar z=x/x=1$ for $x\ne0$. Along the imaginary axis, $z=iy$ and $z/\bar z=iy/(-iy)=-1$ for $y\ne0$. The different values show that $\lim_{z\to0}z/\bar z$ does not exist.

![[Kyle Kabasares - Complex Variables - Real axis approach to the origin.png|**Fig. 52** The arrow marks an approach to zero along the real axis.]]

**Functions review.** In the terminology for regions of the complex plane, a domain is open and connected. The notes say that ranges are not necessarily open or connected. A continuous function preserves connectedness of a connected domain, while an arbitrary function need not do so.

**Theorems on limits.** The page lists three implications.

1. If $\lim_{z\to z_0}1/f(z)=0$, then $\lim_{z\to z_0}f(z)=\infty$.
2. If $\lim_{\zeta\to0}f(1/\zeta)=w_0$, then $\lim_{z\to\infty}f(z)=w_0$.
3. If $\lim_{\zeta\to0}1/f(1/\zeta)=0$, then $\lim_{z\to\infty}f(z)=\infty$.

### PDF page 35

**February 22, 2016. Complex derivatives**

For $f:\mathbb C\to\mathbb C$, the derivative at $z_0$ exists when the complex difference quotient has a limit.

$$
f'(z_0)=\lim_{z\to z_0}\frac{f(z)-f(z_0)}{z-z_0}
=\lim_{\Delta z\to0}\frac{f(z_0+\Delta z)-f(z_0)}{\Delta z}.
$$

The notes recall that $f(z)=3z^2+1$ has derivative $6z$ at every $z\in\mathbb C$.

For $f(z)=\bar z$, the quotient is

$$
\frac{\overline{z+\Delta z}-\bar z}{\Delta z}
=\frac{\overline{\Delta z}}{\Delta z},
\qquad
\Delta z=\Delta x+i\Delta y,\quad
\overline{\Delta z}=\Delta x-i\Delta y.
$$

With $\Delta y=0$ and $\Delta x\to0$, the quotient is $\Delta x/\Delta x=1$. With $\Delta x=0$ and $\Delta y\to0$, the quotient is $-i\Delta y/(i\Delta y)=-1$. The two path limits disagree, so the derivative does not exist.

### PDF page 36

**Cauchy–Riemann equations**

Write $f(z)=u(x,y)+iv(x,y)$ for $z=x+iy$. Let $z_0=x_0+iy_0$ and $\Delta z=\Delta x+i\Delta y$. The difference quotient is

$$
\frac{u(x_0+\Delta x,y_0+\Delta y)-u(x_0,y_0)
+i\bigl[v(x_0+\Delta x,y_0+\Delta y)-v(x_0,y_0)\bigr]}
{\Delta x+i\Delta y}.
$$

First take $\Delta y=0$ and let $\Delta x\to0$. The quotient separates into two real difference quotients, one multiplied by $i$.

$$
f'(z_0)=u_x(x_0,y_0)+iv_x(x_0,y_0)
$$

if the complex derivative exists. Thus its real part is $u_x(x_0,y_0)$ and its imaginary part is $v_x(x_0,y_0)$.

Next take $\Delta x=0$ and let $\Delta y\to0$. The page sets up the quotient

$$
\frac{u(x_0,y_0+\Delta y)-u(x_0,y_0)}{i\Delta y}
+i\frac{v(x_0,y_0+\Delta y)-v(x_0,y_0)}{i\Delta y}.
$$

The handwritten vertical-path numerator has inconsistent signs on the $v$ terms. Subtracting $f(z_0)$ from $f(z_0+i\Delta y)$ gives the difference shown above.

### PDF page 37

Along the vertical approach, take $\Delta x=0$ and let $\Delta y\to0$. Using $1/i=-i$ gives

$$
\begin{aligned}
f'(z_0)
&=\lim_{\Delta y\to0}\left[
\frac{v(x_0,y_0+\Delta y)-v(x_0,y_0)}{\Delta y}
-i\frac{u(x_0,y_0+\Delta y)-u(x_0,y_0)}{\Delta y}
\right]\\
&=v_y(x_0,y_0)-iu_y(x_0,y_0).
\end{aligned}
$$

**Cauchy–Riemann equations.** If $f$ is differentiable at $z_0$, both approaches give the same derivative.

$$
\begin{aligned}
f'(z_0)&=u_x(x_0,y_0)+iv_x(x_0,y_0),\\
f'(z_0)&=v_y(x_0,y_0)-iu_y(x_0,y_0).
\end{aligned}
$$

Equating real and imaginary parts gives

$$
\begin{aligned}
u_x(x_0,y_0)&=v_y(x_0,y_0),\\
v_x(x_0,y_0)&=-u_y(x_0,y_0).
\end{aligned}
$$

These equations are necessary for complex differentiability. They alone are insufficient. The page also raises a question about harmonic functions.

**Example.** Let $f(z)=z^2$, so $f'(z)=2z$. In Cartesian form,

$$
f(z)=(x+iy)^2=\underbrace{(x^2-y^2)}_{u(x,y)}+i\underbrace{2xy}_{v(x,y)}.
$$

The handwritten expansion omits the exponent on $x$. The expansion above agrees with the partial derivatives on the page.

$$
\begin{aligned}
u_x&=2x, & v_x&=2y,\\
u_y&=-2y, & v_y&=2x.
\end{aligned}
$$

Both equations hold, since $u_x=v_y$ and $v_x=-u_y$.

### PDF page 38

**Example.** For $f(z)=|z|^2$, write

$$
f(x,y)=|x+iy|^2=\underbrace{(x^2+y^2)}_{u(x,y)}+i\underbrace{0}_{v(x,y)}.
$$

The equation $u_x=v_y$ gives $x=0$, and $v_x=-u_y$ gives $y=0$. The handwriting says “these 2 points.” The two conditions together give the single candidate $(0,0)$.

**Extra credit.** Prove that $f$ is differentiable at $(0,0)$.

**Theorem. Sufficient conditions for differentiability.** Let $f(z)=u(x,y)+iv(x,y)$ be defined throughout an $\epsilon$-neighborhood of $z_0=x_0+iy_0$. Suppose that all first-order partial derivatives of $u$ and $v$ exist throughout that neighborhood. If these partial derivatives are continuous at $(x_0,y_0)$ and satisfy $u_x=v_y$ and $v_x=-u_y$ there, then $f'(z_0)$ exists. The page marks a proof as tentative.

**Question.** How does complex differentiability compare with differentiability for maps $\mathbb R^2\to\mathbb R^2$? Consider

$$
f(x,y)=\underbrace{(3x+2y)}_{u}+i\underbrace{(2x+5y)}_{v}.
$$

Here $u_x=3$, $u_y=2$, $v_x=2$, and $v_y=5$. The Cauchy–Riemann equations fail everywhere, so $f$ is nowhere complex differentiable.

The page also lists harmonic conjugates as a topic.

**Polar-coordinate version.** For $z_0\ne0$, use $x=r\cos\theta$ and $y=r\sin\theta$.

### PDF page 39

Apply the chain rule to $u$ in polar coordinates.

$$
\begin{aligned}
u_r
&=u_x\frac{\partial x}{\partial r}+u_y\frac{\partial y}{\partial r}
=u_x\cos\theta+u_y\sin\theta,\\
u_\theta
&=u_x\frac{\partial x}{\partial\theta}+u_y\frac{\partial y}{\partial\theta}
=-ru_x\sin\theta+ru_y\cos\theta.
\end{aligned}
$$

The same calculation for $v$ gives

$$
\begin{aligned}
v_r&=v_x\cos\theta+v_y\sin\theta,\\
v_\theta&=-rv_x\sin\theta+rv_y\cos\theta.
\end{aligned}
$$

Using $v_x=-u_y$ and $v_y=u_x$ in the last two equations yields

$$
\begin{aligned}
v_r&=-u_y\cos\theta+u_x\sin\theta,\\
v_\theta&=ru_y\sin\theta+ru_x\cos\theta.
\end{aligned}
$$

Comparing with the expressions for $u_r$ and $u_\theta$ gives the **Cauchy–Riemann equations in polar coordinates**.

$$
\boxed{v_\theta=ru_r,\qquad u_\theta=-rv_r}
$$

### PDF page 40

**February 23, 2016. Discussion**

Prove that $\operatorname{Arg}(z_1z_2)=\operatorname{Arg}(z_1)+\operatorname{Arg}(z_2)$ when $\operatorname{Re}(z_1)>0$ and $\operatorname{Re}(z_2)>0$.

Write $z_1=r_1e^{i\theta_1}$ and $z_2=r_2e^{i\theta_2}$ with $\theta_j=\operatorname{Arg}(z_j)$. Then

$$
z_1z_2=r_1r_2e^{i(\theta_1+\theta_2)}.
$$

Both principal arguments lie strictly between $-\pi/2$ and $\pi/2$, so $-\pi<\theta_1+\theta_2<\pi$. This lies in the principal range $(-\pi,\pi]$, giving $\operatorname{Arg}(z_1z_2)=\theta_1+\theta_2$.

![[Kyle Kabasares - Complex Variables - Principal arguments in the right half-plane.png|**Fig. 53** The right semicircle spans angles from $-\pi/2$ to $\pi/2$.]]

**Limits at infinity**

$$
\begin{aligned}
\lim_{z\to z_0} f(z)=\infty
&\iff \lim_{z\to z_0}\frac{1}{f(z)}=0,\\
\lim_{z\to\infty} f(z)=w_0
&\iff \lim_{z\to0} f(1/z)=w_0,\\
\lim_{z\to\infty} f(z)=\infty
&\iff \lim_{z\to0}\frac{1}{f(1/z)}=0.
\end{aligned}
$$

For example, $\lim_{z\to-1}(iz+3)/(z+1)=\infty$ by the first equivalence, since

$$
\lim_{z\to-1}\frac{z+1}{iz+3}=\frac{0}{-i+3}=0.
$$

**Differentiation.** The page lists the power rule $\frac{d}{dz}z^n=nz^{n-1}$, the product and quotient rules, and the sum rule $[f(z)+g(z)]'=f'(z)+g'(z)$.

### PDF page 41

**Worksheet. Power rule by induction**

Use the product rule

$$
\frac{d}{dz}[f(z)g(z)]=f(z)g'(z)+f'(z)g(z).
$$

The worksheet starts with $n=2$. Applying the product rule to $f(z)=g(z)=z$ gives

$$
\frac{d}{dz}(z^2)=\frac{d}{dz}(zz)=z(1)+1(z)=2z.
$$

For $n=k+1$, assume $\frac{d}{dz}(z^k)=kz^{k-1}$. Then

$$
\frac{d}{dz}(z^{k+1})
=\frac{d}{dz}(z^k z)
=z^k(1)+kz^{k-1}z
=z^k+kz^k
=(1+k)z^k.
$$

Thus $\frac{d}{dz}(z^n)=nz^{n-1}$ for the positive integer powers covered by the induction, with $n=1$ following from $\frac{d}{dz}z=1$.

**Problem 4.** Show that $\lim_{z\to z_0}(az+b)=az_0+b$. The page writes $a=x_a+iy_a$, $b=x_b+iy_b$, and $z=x+iy$, then estimates the difference directly.

$$
|(az+b)-(az_0+b)|=|az-az_0|=|a(z-z_0)|=|a|\,|z-z_0|.
$$

For $a\ne0$, this is less than $\epsilon$ whenever $|z-z_0|<\epsilon/|a|$. The boxed bound in the handwriting uses $a^{-1}$, which here requires the modulus $|a|^{-1}$. For $a=0$, the difference is identically zero.

### PDF page 42

**Problem 5(a).** Find $\lim_{z\to\infty}4z^2/(z-1)^2$. Substitute $1/\zeta$ for $z$ and let $\zeta\to0$. Multiplying numerator and denominator by $\zeta^2$ gives

$$
\lim_{\zeta\to0}\frac{4(1/\zeta)^2}{(1/\zeta-1)^2}
=\lim_{\zeta\to0}\frac{4}{1-2\zeta+\zeta^2}
=4.
$$

**Problem 5(b).** Show that $\lim_{z\to1}1/(z-1)^3=\infty$. The reciprocal has limit $\lim_{z\to1}(z-1)^3=0$.

**February 24, 2016. Analytic and harmonic functions**

The lecture recalls the limit definition of the derivative and the theorem that uses the Cauchy–Riemann equations $u_x=v_y$ and $v_x=-u_y$ for $f(z)=u(x,y)+iv(x,y)$.

A function $f$ is **analytic at $z_0$** if it is complex differentiable at every $z$ in some $\epsilon$-neighborhood of $z_0$.

![[Kyle Kabasares - Complex Variables - Analytic neighborhood of z0.png|**Fig. 54** The hatched region around $z_0$ marks a neighborhood where $f$ is differentiable.]]

### PDF page 43

**Real-variable example.** The function $f(x)=|x|$ is continuous and fails to be $C^1$ at the origin. Its derivative is $-1$ for $x<0$ and $1$ for $x>0$, with no derivative at $0$.

![[Kyle Kabasares - Complex Variables - Absolute value and its derivative.png|**Fig. 55** The V-shaped graph of $|x|$ and the two constant branches of its derivative.]]

A function $f$ is **entire** if it is analytic everywhere in the complex plane.

**Aside.** If $f$ is entire and bounded, so that $|f(z)|\le M$ for every $z\in\mathbb C$ and some constant $M$, then $f(z)=k$ for a constant $k\in\mathbb C$.

A point $z_0$ is a **singularity** if $f$ fails to be analytic there and is analytic at at least one point in every neighborhood of $z_0$. The notes mention black holes as an aside.

![[Kyle Kabasares - Complex Variables - Singularity at the origin.png|**Fig. 56** The sketch shows two branches rising near the vertical axis and marks $0$ as a singularity.]]

**Examples**

1. Polynomials are entire and have no singularities in the complex plane. A degree-$n$ polynomial with leading coefficient $a_n$ factors as $f(z)=a_n\prod_{j=1}^n(z-z_j)$. In the monic quadratic case the product is $(z-z_1)(z-z_2)$.
2. The function $f(z)=1/z$ is analytic at every $z\ne0$. The origin is a singular point.
3. For $f(z)=\bar z=x-iy$, we have $u(x,y)=x$ and $v(x,y)=-y$. Then $u_x=1$ and $v_y=-1$, so the first Cauchy–Riemann equation fails everywhere.

### PDF page 44

The function $f(z)=\bar z$ is nowhere complex differentiable and nowhere analytic. It has no singularities under the preceding definition, which requires analytic points arbitrarily near a singularity.

The page also flags $f(z)=|z|^2=z\bar z$ and includes a reminder to look up “double staircase.”

**Properties of analytic functions**

1. The sum of two analytic functions is analytic.
2. The product of two analytic functions is analytic.
3. The quotient of two analytic functions is analytic where the denominator is nonzero.
4. The composition $f(g(z))$ is analytic where $g$ is analytic and $f$ is analytic at $g(z)$.

**Example.** Show that exactly one of $f(z)=z^2$ and $\overline{f(z)}=\overline{z^2}$ is analytic. For $f$,

$$
f(z)=(x+iy)^2=\underbrace{(x^2-y^2)}_{u(x,y)}+i\underbrace{2xy}_{v(x,y)}.
$$

The partial derivatives are continuous and satisfy $u_x=2x=v_y$ and $v_x=2y=-u_y$ everywhere. Thus $f$ is entire. Conjugation changes $u+iv$ to $u-iv$, giving

$$
\overline{f(z)}=(x-iy)^2=(x^2-y^2)+i(-2xy).
$$

The page observes that the signs in the Cauchy–Riemann equations change for the conjugate. In this example they can hold for the conjugate only when $x=y=0$, which gives no neighborhood of differentiability.

**Next example.** Consider $f(z)=\ln r+i\theta$ for $z=re^{i\theta}$.

### PDF page 45

**Logarithm in polar coordinates.** The notes choose $r>0$ and $0\le\theta<2\pi$ for $f(z)=\ln r+i\theta$. With $u=\ln r$ and $v=\theta$,

$$
u_r=\frac{1}{r},\qquad v_\theta=1,\qquad v_r=0,\qquad u_\theta=0.
$$

These derivatives satisfy $ru_r=v_\theta$ and $rv_r=-u_\theta$. The page concludes “analytic everywhere.” For the chosen angle range, this applies off the nonnegative real axis, where the angle varies continuously. The positive real axis is the jump in this angle choice, and $r=0$ is excluded.

**Harmonic functions.** A real-valued function $u(x,y)$ is harmonic when its Laplacian vanishes:

$$
\nabla^2u=u_{xx}+u_{yy}=0.
$$

To relate harmonic functions to complex functions, let $f(z)=u(x,y)+iv(x,y)$ be analytic in a neighborhood of $z_0$. Differentiating $u_x=v_y$ with respect to $x$ and $u_y=-v_x$ with respect to $y$ gives

$$
u_{xx}=v_{yx},\qquad u_{yy}=-v_{xy}.
$$

When the mixed partial derivatives agree, $v_{yx}=v_{xy}$, we get $u_{xx}+u_{yy}=0$. The same argument with $u$ and $v$ interchanged in the differentiated equations gives $v_{xx}+v_{yy}=0$. In the analytic pair $u+iv$, $v$ is a harmonic conjugate of $u$.

**Example.** For $f(z)=z^2$, $u=x^2-y^2$ and $v=2xy$. Both Laplacians vanish:

$$
u_{xx}+u_{yy}=2-2=0,\qquad v_{xx}+v_{yy}=0+0=0.
$$

### PDF page 46

**Example.** For $z=x+iy$,

$$
f(z)=ie^{iz}
=ie^{ix-y}
=i(\cos x+i\sin x)e^{-y}
=-\sin x\,e^{-y}+i\cos x\,e^{-y}.
$$

Thus $u(x,y)=-\sin x\,e^{-y}$ and $v(x,y)=\cos x\,e^{-y}$. The line labeled $u_{xx}+u_{yy}$ on the page gives only the term $u_{xx}=\sin x\,e^{-y}$. The other term is $u_{yy}=-\sin x\,e^{-y}$, so their sum is zero.

**February 29, 2016. Lecture**

A function is analytic at $z_0\in\mathbb C$ if it is complex differentiable at every point in a neighborhood of $z_0$. A real-valued function $u(x,y)$ is harmonic if $u_{xx}+u_{yy}=0$.

For an analytic function $f=u+iv$, the notes assume all second partial derivatives of $u$ and $v$ exist and are continuous. The Cauchy–Riemann equations are $u_x=v_y$ and $v_x=-u_y$. The minus sign in the second equation is supplied from the preceding derivation. The real and imaginary parts form a harmonic conjugate pair and satisfy

$$
u_{xx}+u_{yy}=0,\qquad v_{xx}+v_{yy}=0.
$$

**Example.** For $u(x,y)=2x(1-y)$,

$$
u_x=2(1-y),\qquad u_y=-2x,\qquad u_{xx}=0,\qquad u_{yy}=0.
$$

Therefore $u$ is harmonic.

### PDF page 47

**Finding a harmonic conjugate.** For $u(x,y)=2x(1-y)$, the equation $v_y=u_x$ gives

$$
v(x,y)=\int 2(1-y)\,dy=2y-y^2+g(x).
$$

The other Cauchy–Riemann equation gives $v_x=-u_y=2x$, hence $g'(x)=2x$. Choosing the additive constant to be zero gives $g(x)=x^2$ and

$$
v(x,y)=2y-y^2+x^2.
$$

To check that $v$ is harmonic, compute

$$
v_x=2x,\qquad v_y=2-2y,\qquad
v_{xx}=2,\qquad v_{yy}=-2.
$$

Thus $v_{xx}+v_{yy}=2-2=0$. The pair $u$ and $v$ gives an analytic function $f(z)=u(x,y)+iv(x,y)$.

![[Kyle Kabasares - Complex Variables - Domain and range of an analytic map.png|**Fig. 57** The map $f$ takes points in the $(x,y)$ plane to points with coordinates $(u(x,y),v(x,y))$.]]

The notes emphasize that analyticity imposes strong constraints on a complex function.

### PDF page 48

**Lecture 11. Exponential and logarithmic functions**

The lecture introduces branch cuts as a topic. For $z=x+iy$, the complex exponential is

$$
e^z=e^{x+iy}=e^xe^{iy}=e^x(\cos y+i\sin y).
$$

It satisfies the usual exponential identities:

$$
e^{z_1}e^{z_2}=e^{z_1+z_2},\qquad
\frac{e^{z_1}}{e^{z_2}}=e^{z_1-z_2},\qquad
\frac{1}{e^z}=e^{-z}.
$$

To compute its complex derivative, write $u=e^x\cos y$ and $v=e^x\sin y$. Their partial derivatives are

$$
\begin{aligned}
u_x&=e^x\cos y, & v_x&=e^x\sin y,\\
u_y&=-e^x\sin y, & v_y&=e^x\cos y.
\end{aligned}
$$

They are continuous and satisfy the Cauchy–Riemann equations everywhere. Therefore

$$
\frac{d}{dz}e^z=u_x+iv_x=e^x\cos y+ie^x\sin y=e^xe^{iy}=e^z.
$$

For $x=c_1$ the image has constant modulus $e^{c_1}$, and for $y=c_2$ the image has constant angle $c_2$ modulo $2\pi$.

![[Kyle Kabasares - Complex Variables - Exponential maps lines to circles and rays.png|**Fig. 58** The exponential maps a vertical line $x=c_1$ to a circle of radius $e^{c_1}$ and a horizontal line $y=c_2$ to a ray at angle $c_2$ with its endpoint excluded.]]

### PDF page 49

The page opens with an integral reversal reminder. The handwriting repeats the limits on both integrals. Reversing them gives $\int_a^b f(x)\,dx=-\int_b^a f(x)\,dx$.

**Other properties of $e^z$**

1. The exponential never vanishes. In $e^z=e^x(\cos y+i\sin y)$, its modulus is $e^x>0$.
2. The exponential is periodic. In the notation $f(z+c)=f(z)$, a period is $c=2\pi i$, since $\cos y$ and $\sin y$ have period $2\pi$.
3. The equation $e^z=-1$ has the example $x=0$, $y=\pi$. Periodicity gives $y=\pi+2\pi n$ for $n\in\mathbb Z$.

**Logarithm.** A value $w=\log z$ satisfies $e^w=z$. Write $z=re^{i\theta}$ with $r>0$ and $w=u+iv$. The equation $e^ue^{iv}=re^{i\theta}$ gives

$$
e^u=r,\qquad u=\ln r,\qquad v=\theta+2\pi n,\quad n\in\mathbb Z.
$$

The logarithm is multivalued because each integer $n$ gives a value.

$$
\log z=\ln|z|+i\arg z=\ln|z|+i(\theta+2\pi n).
$$

The principal value uses $\theta=\operatorname{Arg}z$, so $\operatorname{Log}z=\ln r+i\theta$ and the values of $\log z$ are $\operatorname{Log}z+2\pi ni$.

### PDF page 50

**Logarithm examples.** The first sketch shows $z=-1-i\sqrt3$. Its modulus is $\sqrt{1^2+(\sqrt3)^2}=2$. The acute angle with the negative real axis is $\arctan(\sqrt3/1)=\pi/3$, so the principal argument is $-2\pi/3$. The handwritten result uses $\pi/3$ directly and shows the reciprocal tangent ratio. The quadrant and side lengths in the sketch give

$$
\log z=\ln 2+i(-2\pi/3+2\pi n),\qquad n\in\mathbb Z.
$$

![[Kyle Kabasares - Complex Variables - Argument triangle in the third quadrant.png|**Fig. 59** The horizontal leg has length $1$ and the downward vertical leg has length $\sqrt3$. The angle marked at the origin is measured from the negative real axis.]]

For a negative real input,

$$
\log(-2)=\ln 2+i(\pi+2\pi n),\qquad n\in\mathbb Z.
$$

**Complex exponents.** For $z=re^{i\theta}\ne0$, the values of $z^c$ are given by

$$
z^c=e^{c\log z}=e^{c(\ln r+i(\theta+2\pi n))},\qquad n\in\mathbb Z.
$$

In particular, $i^i=e^{-(\pi/2+2\pi n)}$ is multivalued.

**March 1, 2016. Discussion**

If $f(z)=u(x,y)+iv(x,y)$ and $f'(z_0)$ exists at $z_0=x_0+iy_0$, then $u_x=v_y$, $u_y=-v_x$, and $f'(z_0)=u_x+iv_x$, with the partial derivatives evaluated at $(x_0,y_0)$.

For $f(z)=3z^2-2z+4$, we have $f'(z)=6z-2$, so the Cauchy–Riemann equations must hold. The Cartesian expansion is

$$
\begin{aligned}
f(z)&=3(x^2-y^2+2ixy)-2(x+iy)+4\\
&=\underbrace{(3x^2-3y^2-2x+4)}_{u(x,y)}
+i\underbrace{(6xy-2y)}_{v(x,y)}.
\end{aligned}
$$

### PDF page 51

**Sufficient conditions for differentiability.** The first partial derivatives of $u$ and $v$ must exist in a neighborhood, be continuous at $(x_0,y_0)$, and satisfy the Cauchy–Riemann equations at $(x_0,y_0)$. Analyticity at $z_0$ requires differentiability throughout a neighborhood of $z_0$. An entire function is differentiable everywhere in $\mathbb C$.

**1(a).** For $f(z)=xy+iy$, the page compares $u_x=y$ with $v_y=1$ and $v_x=0$ with $-u_y=-x$. The equations hold only at $(0,1)$.

**1(b).** For $f(z)=2xy+i(x^2-y^2)$,

$$
u_x=2y,\quad v_y=-2y,\qquad v_x=2x,\quad -u_y=-2x.
$$

Both equations hold only at the origin.

**1(c).** For $f(z)=e^{2y}e^{ix}=e^{2y}\cos x+ie^{2y}\sin x$,

$$
\begin{aligned}
u_x&=-e^{2y}\sin x, & v_y&=2e^{2y}\sin x,\\
-u_y&=-2e^{2y}\cos x, & v_x&=e^{2y}\cos x.
\end{aligned}
$$

The equations would require both $\sin x=0$ and $\cos x=0$, so they hold nowhere.

**2(a).** For $f(z)=(3x+y)+i(3y-x)$, the page obtains $u_x=3=v_y$ and $u_y=1=-v_x$.

**2(b).** For $f(z)=(z^2-2)e^{-z}$, use $z=x+iy$ to write

$$
\begin{aligned}
f(z)&=\bigl((x+iy)^2-2\bigr)e^{-x}e^{-iy}\\
&=e^{-x}(x^2+2ixy-y^2-2)(\cos y-i\sin y).
\end{aligned}
$$

The handwritten expansion drops the constant $-2$ after the first line. It is retained here from the stated function.

### PDF page 52

**2(b), continued.** The page distributes the factors of $e^{-x}(x^2+2ixy-y^2)(\cos y-i\sin y)$ and starts collecting the terms. Its expansion still omits the $-2$ from the original problem. With that constant restored, the real and imaginary parts are

$$
\begin{aligned}
u(x,y)&=e^{-x}\bigl[(x^2-y^2-2)\cos y+2xy\sin y\bigr],\\
v(x,y)&=e^{-x}\bigl[2xy\cos y-(x^2-y^2-2)\sin y\bigr].
\end{aligned}
$$

**3.** Let $f(r,\theta)=u(r,\theta)+iv(r,\theta)$ be analytic in $D$. The page sets out the polar Laplace equation for $u$ and recalls the polar Cauchy–Riemann equations.

$$
\begin{aligned}
r^2u_{rr}+ru_r+u_{\theta\theta}&=0,\\
ru_r&=v_\theta,\\
rv_r&=-u_\theta.
\end{aligned}
$$

**March 2, 2016. Elementary functions**

1. The exponential $e^z=e^{x+iy}=e^xe^{iy}=e^x(\cos y+i\sin y)$ is periodic in $y$.
2. A value $w=\log z$ satisfies $e^w=z$. Writing $z=re^{i\theta}$ gives $\log z=\ln|z|+i\arg z$.
3. For real or complex $c$, the complex power is $z^c=e^{c\log z}=e^{c(\ln|z|+i\arg z)}$.

**Question.** Is $z$ the unique value of $\log(e^z)$? The notes answer no and begin the calculation with $\log(e^{x+iy})=\log(e^xe^{iy})=\log\bigl(e^x(\cos y+i\sin y)\bigr)$.

### PDF page 53

For $z=x+iy$, the values $x+iy$, $x+i(y+2\pi)$, and more generally $x+i(y+2\pi n)$ give the same exponential. In fact,

$$
\log(e^z)=\ln|e^z|+i\arg(e^z)
=x+i(y+2\pi n)=z+2\pi ni,\qquad n\in\mathbb Z,
$$

since $|re^{i\theta}|=r$ and $\arg(e^z)$ consists of $y+2\pi n$.

**Question.** Does $e^{\log z}$ have the single value $z$? Yes, for $z\ne0$. The identities $\cos(\alpha+2\pi)=\cos\alpha$ and $\sin(\alpha+2\pi)=\sin\alpha$ make the exponential independent of the choice $\arg z=\operatorname{Arg}z+2\pi n$:

$$
e^{\log z}
=e^{\ln|z|}e^{i\arg z}
=|z|e^{i\operatorname{Arg}z}
=z.
$$

**Branches of multivalued functions.** A branch of a multivalued function $f$ is a single-valued analytic function $F$ on a domain, with $F(z)$ equal to one of the values of $f(z)$ at every point in the domain.

**Branch cuts and branch points.** The notes describe a branch cut as a portion of a line or curve introduced to define a branch of $f$. They call a point common to all such cuts a branch point.

For the logarithm, $\log z=\ln|z|+i\arg z$ and $\operatorname{Log}z=\ln|z|+i\operatorname{Arg}z$.

![[Kyle Kabasares - Complex Variables - Principal logarithm branch cut.png|**Fig. 60** The principal logarithm uses a cut along the nonpositive real axis. The limiting arguments above and below the negative real axis are $\pi$ and $-\pi$, respectively.]]

### PDF page 54

To evaluate $\int_C\log(z)\,dz$, choose a single branch of the logarithm whose cut stays clear of the path $C$.

![[Kyle Kabasares - Complex Variables - Integration path avoiding the logarithm cut.png|**Fig. 61** The contour $C$ joins $A$ and $B$ and crosses the positive real axis. The shaded cut for the principal branch extends left from the origin.]]

**Complex sine and cosine**

$$
\sin z=\frac{e^{iz}-e^{-iz}}{2i},
\qquad
\cos z=\frac{e^{iz}+e^{-iz}}{2}.
$$

**Exercise.** Show that $\sin(-z)=-\sin z$ and $\cos(-z)=\cos z$. Sine is odd and cosine is even.

For real $x$, the complex definition gives the ordinary sine:

$$
\sin(x+i0)
=\frac{e^{ix}-e^{-ix}}{2i}
=\frac{(\cos x+i\sin x)-(\cos x-i\sin x)}{2i}
=\sin x.
$$

For a complex input, use $e^{i\pi/2}=i$ and $e^{-i\pi/2}=-i$. The latter sign follows from $\cos(\pi/2)-i\sin(\pi/2)$ and is the one used in the main calculation.

$$
\begin{aligned}
\sin\left(\frac{\pi}{2}-100i\right)
&=\frac{e^{i(\pi/2-100i)}-e^{-i(\pi/2-100i)}}{2i}\\
&=\frac{e^{i\pi/2}e^{100}-e^{-i\pi/2}e^{-100}}{2i}\\
&=\frac{ie^{100}-(-i)e^{-100}}{2i}
=\frac{e^{100}+e^{-100}}{2}
=\cosh(100).
\end{aligned}
$$

### PDF page 55

**March 7, 2016. Integration**

The goal is to define $\int_C f(z)\,dz$ for a complex-valued function of a complex variable.

![[Kyle Kabasares - Complex Variables - Oriented closed integration contour.png|**Fig. 62** Arrows mark the direction of traversal around a closed contour $C$ in the complex plane.]]

First consider a parametrized curve $w(t)=u(t)+iv(t)$, with real parameter $a\le t\le b$. Integrate the real and imaginary parts separately:

$$
\int_a^b w(t)\,dt
=\int_a^b\bigl(u(t)+iv(t)\bigr)\,dt
=\int_a^b u(t)\,dt+i\int_a^b v(t)\,dt.
$$

**Example**

$$
\begin{aligned}
\int_0^{\pi/4}e^{it}\,dt
&=\int_0^{\pi/4}\cos t\,dt+i\int_0^{\pi/4}\sin t\,dt\\
&=\left[\sin t\right]_0^{\pi/4}
+i\left[-\cos t\right]_0^{\pi/4}\\
&=\frac{1}{\sqrt2}+i\left(1-\frac{1}{\sqrt2}\right).
\end{aligned}
$$

**Moduli of integrals.** When $a\le b$ and the integrals exist,

$$
\left|\int_a^b w(t)\,dt\right|\le\int_a^b|w(t)|\,dt.
$$

### PDF page 56

**Proof of the modulus inequality.** If $\int_a^b w(t)\,dt=0$, the inequality holds because the right-hand side is nonnegative. Otherwise write

$$
\int_a^b w(t)\,dt=r_0e^{i\theta_0},\qquad r_0>0.
$$

Multiplying by $e^{-i\theta_0}$ gives the real number $r_0$. Move the constant inside the integral and take real parts:

$$
r_0=\operatorname{Re}\left(\int_a^b e^{-i\theta_0}w(t)\,dt\right)
=\int_a^b\operatorname{Re}\bigl(e^{-i\theta_0}w(t)\bigr)\,dt.
$$

Since $|e^{-i\theta_0}|=\sqrt{\cos^2\theta_0+\sin^2\theta_0}=1$,

$$
\operatorname{Re}\bigl(e^{-i\theta_0}w(t)\bigr)
\le\bigl|e^{-i\theta_0}w(t)\bigr|
=|w(t)|.
$$

Integrating gives $\left|\int_a^b w(t)\,dt\right|=r_0\le\int_a^b|w(t)|\,dt$.

**Contour integrals.** For a contour $C$ parametrized by a differentiable $z(t)$ with $a\le t\le b$,

$$
\boxed{\int_C f(z)\,dz=\int_a^b f(z(t))z'(t)\,dt.}
$$

![[Kyle Kabasares - Complex Variables - Parametrized contour and endpoints.png|**Fig. 63** The sketch labels the endpoints of $C$ by their parameter values $a$ and $b$.]]

The next example asks for $\int_C f(z)\,dz$ when $f(z)=\bar z$.

### PDF page 57

**Example.** Integrate $f(z)=\bar z$ along the contour $z(t)=2e^{it}$ for $-\pi/2\le t\le\pi/2$.

![[Kyle Kabasares - Complex Variables - Counterclockwise right semicircle of radius two.png|**Fig. 64** The right semicircle is traversed from $-2i$ through $2$ to $2i$.]]

If $z(t)=x(t)+iy(t)$ has differentiable components, then $z'(t)=x'(t)+iy'(t)$. Here $z(t)=2(\cos t+i\sin t)$, so $z'(t)=2ie^{it}$ and $\overline{z(t)}=2e^{-it}$. Thus

$$
\begin{aligned}
\int_C\bar z\,dz
&=\int_{-\pi/2}^{\pi/2}\overline{z(t)}z'(t)\,dt\\
&=\int_{-\pi/2}^{\pi/2}(2e^{-it})(2ie^{it})\,dt
=4i\int_{-\pi/2}^{\pi/2}dt
=4\pi i.
\end{aligned}
$$

**Properties of contour integrals**

1. Integration is additive in the integrand, so $\int_C(f(z)+g(z))\,dz=\int_C f(z)\,dz+\int_C g(z)\,dz$.
2. Reversing the direction gives $\int_C f(z)\,dz=-\int_{-C}f(z)\,dz$.

![[Kyle Kabasares - Complex Variables - A contour and its reverse.png|**Fig. 65** The paths $C$ and $-C$ trace the same curve in opposite directions.]]

3. If $C$ is formed by following $C_1$ and then $C_2$, then $\int_C f(z)\,dz=\int_{C_1}f(z)\,dz+\int_{C_2}f(z)\,dz$.

### PDF page 58

**Example.** Evaluate $\int_C f(z)\,dz$ for

$$
f(x+iy)=
\begin{cases}
1,&y<0,\\
4y,&y\ge0,
\end{cases}
$$

where $C$ is the arc of $y=x^3$ from $-1-i$ to $1+i$.

![[Kyle Kabasares - Complex Variables - Cubic contour through the origin.png|**Fig. 66** The arrows point from $-1-i$ toward $1+i$ through the origin, where the definition of the integrand changes.]]

Take $x(t)=t$ and $y(t)=t^3$ for $-1\le t\le1$. Then $z(t)=t+it^3$ and $z'(t)=1+3it^2$. Split the integral at $t=0$.

$$
\int_C f(z)\,dz
=\int_{-1}^0(1+3it^2)\,dt
+\int_0^1 4t^3(1+3it^2)\,dt.
$$

The first part is $\left[t+it^3\right]_{-1}^0=1+i$. The second is

$$
\int_0^1(4t^3+12it^5)\,dt
=\left[t^4+2it^6\right]_0^1
=1+2i.
$$

Adding the two parts gives $\boxed{2+3i}$.

### PDF page 59

**March 8, 2016. Discussion on elementary functions**

For $z=x+iy$, $e^z=e^xe^{iy}=e^x(\cos y+i\sin y)$. The final expression on the handwritten opening line drops the factor $e^x$.

- The complex exponential can take negative real values. For instance, $e^{i(2n+1)\pi}=-1$ for $n\in\mathbb Z$.
- It is periodic because $e^{z+2\pi i}=e^ze^{2\pi i}=e^z$.

**Example 1.** Solve $e^z=1+i$. The polar form $1+i=\sqrt2\,e^{i\pi/4}$ gives $x=\ln\sqrt2=\frac12\ln2$ and $y=(2n+\frac14)\pi$. Hence

$$
z=\frac12\ln2+\left(2n+\frac14\right)\pi i,\qquad n\in\mathbb Z.
$$

**Logarithm.** The multivalued logarithm is $\log z=\ln|z|+i\arg z$. The analytic principal branch is $\operatorname{Log}z=\ln r+i\Theta$ for $r>0$ and $-\pi<\Theta<\pi$.

![[Kyle Kabasares - Complex Variables - Approaching the principal branch cut from both sides.png|**Fig. 67** The same point on the dashed cut can be approached from above or below, giving limiting angles $\pi$ and $-\pi$.]]

More generally, selecting $\alpha<\theta<\alpha+2\pi$ with $r>0$ gives a single-valued branch $\ln r+i\theta$.

**Example.** Show that $\operatorname{Log}(i^3)\ne3\operatorname{Log}(i)$. Since $i^3=-i$, the two sides are

$$
\operatorname{Log}(i^3)=\ln1-\frac{\pi i}{2}=-\frac{\pi i}{2},
\qquad
3\operatorname{Log}(i)=3\left(\ln1+\frac{\pi i}{2}\right)=\frac{3\pi i}{2}.
$$

![[Kyle Kabasares - Complex Variables - Arguments at the four unit axis points.png|**Fig. 68** The axis diagram marks the angles $\pi/2$ at $i$ and $-\pi/2$ at $-i$ used in the example.]]

### PDF page 60

**Contour integrals.** Use $\int_C f(z)\,dz$ for an integral along a specified contour. If the integral is independent of the path, it can be written $\int_{z_1}^{z_2}f(z)\,dz$ using the endpoints alone. For a parametrization $z=z(t)$ on $a\le t\le b$,

$$
\int_C f(z)\,dz=\int_a^b f(z(t))z'(t)\,dt.
$$

**Example.** The contour $C$ is the right semicircle on $|z|=2$. Set $z=2e^{i\theta}$ for $-\pi/2\le\theta\le\pi/2$.

![[Kyle Kabasares - Complex Variables - Right semicircle with labeled endpoints.png|**Fig. 69** The arrows show the right half of the circle traversed from $-2i$ to $2i$.]]

$$
\begin{aligned}
\int_C\bar z\,dz
&=\int_{-\pi/2}^{\pi/2}\overline{2e^{i\theta}}\,(2e^{i\theta})'\,d\theta\\
&=\int_{-\pi/2}^{\pi/2}(2e^{-i\theta})(2ie^{i\theta})\,d\theta
=4i\int_{-\pi/2}^{\pi/2}d\theta
=4\pi i.
\end{aligned}
$$

**Discussion 1(a).** Since $\sin(3\pi)=0$ and $\cos(3\pi)=-1$,

$$
e^{2\pm3\pi i}=e^2e^{\pm3\pi i}
=e^2\bigl(\cos(3\pi)\pm i\sin(3\pi)\bigr)
=-e^2.
$$

**1(b).**

$$
e^{(2+\pi i)/4}
=e^{1/2}\left(\cos\frac{\pi}{4}+i\sin\frac{\pi}{4}\right)
=e^{1/2}\left(\frac{1}{\sqrt2}+\frac{i}{\sqrt2}\right)
=\sqrt{\frac e2}\,(1+i).
$$

### PDF page 61

**2(a).** Solve $e^z=-2$. Taking the multivalued logarithm gives $\log(e^z)=\log(-2)$. The modulus of $e^z$ is $e^x$, so $x=\ln 2$. The arguments of $-2$ are the odd multiples of $\pi$. Thus

$$
z=\ln2+i(2n+1)\pi,\qquad n\in\mathbb Z.
$$

The handwriting lists positive integers as examples. The full solution uses all integers.

**2(b).** Solve $e^{2z-1}=1$. The page rewrites the exponential in Cartesian and polar form.

$$
e^{2z-1}=e^{2x-1}e^{2iy}=e^{2x-1}(\cos 2y+i\sin 2y).
$$

Taking logarithms, the real part is $\ln|e^{2x-1}|=2x-1$, and the arguments of $1$ are $2\pi n$ for $n\in\mathbb Z$. Equivalently,

$$
2x-1+2iy=2\pi ni,\qquad
z=\frac12+\pi ni,\quad n\in\mathbb Z.
$$

The handwritten calculation extracts $1/e$ from inside the logarithm and later drops the factor $2$ on $y$. It ends at $2x+iy=1$ after canceling equal integer shifts. Keeping the full argument of $e^{2z-1}$ gives the solution family above.

**March 9, 2016. More integrals**

1. For a complex-valued function of a real parameter $t$, consider $\int_a^b w(t)\,dt$ with $w(t)=u(t)+iv(t)$, where $u,v$ are real-valued.

### PDF page 62

**2. Integrating along a contour.** Find a parametrization $z(t)$ of $C$ for $t\in[a,b]$. Then

$$
\int_C f(z)\,dz=\int_a^b f(z(t))z'(t)\,dt.
$$

![[Kyle Kabasares - Complex Variables - General parametrized contour in the complex plane.png|**Fig. 70** Arrows give the direction of traversal along the open contour $C$.]]

**Example.** Let $C$ be the semicircle $z(\theta)=3e^{i\theta}$ for $0\le\theta\le\pi$. Use the square root $f(z)=\sqrt r\,e^{i\theta/2}$ along this path.

![[Kyle Kabasares - Complex Variables - Upper semicircle of radius three.png|**Fig. 71** The upper semicircle runs counterclockwise from $3$ to $-3$.]]

Since $z(\theta)=3\cos\theta+3i\sin\theta$, its derivative is $-3\sin\theta+3i\cos\theta=3ie^{i\theta}$. Thus

$$
\begin{aligned}
\int_C f(z)\,dz
&=\int_0^\pi f(z(\theta))z'(\theta)\,d\theta\\
&=\int_0^\pi \sqrt3\,e^{i\theta/2}(3ie^{i\theta})\,d\theta
=3^{3/2}i\int_0^\pi e^{3i\theta/2}\,d\theta.
\end{aligned}
$$

**Method 1.** Integrate the cosine and sine separately.

$$
\int_0^\pi e^{3i\theta/2}\,d\theta
=\left[\frac23\sin\frac{3\theta}{2}\right]_0^\pi
+i\left[-\frac23\cos\frac{3\theta}{2}\right]_0^\pi.
$$

**Method 2.** Integrate the exponential directly.

$$
\int_0^\pi e^{3i\theta/2}\,d\theta
=\left[\frac{2}{3i}e^{3i\theta/2}\right]_0^\pi
=\frac{2}{3i}\bigl(e^{3i\pi/2}-1\bigr)
=\frac{2}{3i}(-i-1).
$$

The page ends with this expression multiplied by the original prefactor $3^{3/2}i$.

### PDF page 63

The preceding square-root integral ends with $(3\sqrt3\,i)\frac{2}{3i}(-i-1)$, which simplifies to $-2\sqrt3(1+i)$.

**Splitting the integrand.** For $f=u+iv$, linearity gives

$$
\int_C f(z)\,dz=\int_C u(z)\,dz+i\int_C v(z)\,dz.
$$

The next handwritten line replaces $dz$ by $ds$ and sketches an arc-length sum $\sum_{j=1}^n u(x_j,y_j)\Delta s$. That sum approximates $\int_C u\,ds$. In the contour integral above, $dz=z'(t)\,dt$, while $ds=|z'(t)|\,dt$.

**Example.** Integrate $f(z)=z^2$ along the line segment from $0$ to $2i$.

![[Kyle Kabasares - Complex Variables - Imaginary axis segment from zero to two i.png|**Fig. 72** The arrows point upward along the segment from the origin to $2i$.]]

Set $z(t)=it$ for $0\le t\le2$. Then $z'(t)=i$, so

$$
\int_C f(z)\,dz=\int_0^2 f(it)i\,dt=-i\int_0^2t^2\,dt
=-i\left[\frac{t^3}{3}\right]_0^2=-\frac{8i}{3}.
$$

Under “Pretend,” the page evaluates $[z^3/3]_0^{2i}$ and gets the same result. The integrand on that line is written $z^3$, while the example and the derivative of $z^3/3$ both give $z^2$.

**Antiderivative.** Let $f$ be continuous on a domain $D$. A function $F$ satisfying $F'(z)=f(z)$ for all $z\in D$ is an antiderivative of $f$ on $D$. The domain is open, so $F$ is analytic there. An additive constant may be chosen freely.

### PDF page 64

**Example.** Integrate $f(z)=(z+2)/z$ along the upper semicircle $z(\theta)=2e^{i\theta}$ for $0\le\theta\le\pi$. Along the path,

$$
f(z(\theta))=\frac{2e^{i\theta}+2}{2e^{i\theta}},
\qquad
z'(\theta)=2ie^{i\theta}.
$$

The common factor $2e^{i\theta}$ cancels, giving

$$
\int_C f(z)\,dz
=i\int_0^\pi(2e^{i\theta}+2)\,d\theta
=2i\left(\int_0^\pi e^{i\theta}\,d\theta+\pi\right).
$$

The sine antiderivative contributes through the imaginary part.

$$
\int_0^\pi e^{i\theta}\,d\theta
=\left[\sin\theta-i\cos\theta\right]_0^\pi
=-i(\cos\pi-\cos0)
=2i.
$$

Therefore $\int_C f(z)\,dz=2i(2i+\pi)=\boxed{-4+2\pi i}$.

**Fundamental theorem of calculus.** Write $w(t)=u(t)+iv(t)$ for a complex-valued function of a real variable. Let $W(t)=U(t)+iV(t)$ satisfy $W'(t)=w(t)$. The real fundamental theorem gives $\int_a^b u(t)\,dt=U(b)-U(a)$. The page begins the componentwise calculation with

$$
\int_a^b w(t)\,dt
=\int_a^b u(t)\,dt+i\int_a^b v(t)\,dt.
$$

### PDF page 65

The componentwise fundamental theorem gives

$$
\int_a^b w(t)\,dt
=(U(b)-U(a))+i(V(b)-V(a))
=W(b)-W(a).
$$

Let $F$ be an antiderivative of $f$. The chain rule gives

$$
\frac{d}{dt}F(z(t))
=F'(z(t))z'(t)=f(z(t))z'(t).
$$

Applying the fundamental theorem to $F(z(t))$ yields

$$
\int_C f(z)\,dz=\int_a^b f(z(t))z'(t)\,dt=F(z(b))-F(z(a)).
$$

![[Kyle Kabasares - Complex Variables - Contour endpoints for the antiderivative theorem.png|**Fig. 73** The contour starts at $z(a)$ and ends at $z(b)$.]]

**Path independence.** An integral is path independent if its value depends only on the endpoints $z_1$ and $z_2$. When $F'=f$, both $\int_{C_1}f(z)\,dz$ and $\int_{C_2}f(z)\,dz$ equal $F(z_2)-F(z_1)$ for paths with those endpoints.

![[Kyle Kabasares - Complex Variables - Two paths with the same endpoints.png|**Fig. 74** Both $C_1$ and $C_2$ run from the lower-left point to $z_2$.]]

Following $C_1$ and then the reverse of $C_2$ gives the closed path $C=C_1-C_2$. Its integral is $F(z_1)-F(z_1)=0$.

**Branch and branch cut review**

- A branch of a multivalued function $f$ is a single-valued analytic function $F$ on a domain, with $F(z)$ one of the values of $f(z)$ at each point. The principal branch of the logarithm is $\operatorname{Log}z=\ln r+i\Theta$ for $r>0$ and $-\pi<\Theta<\pi$.
- A branch cut is a portion of a line or curve introduced to define a branch $F$. The notes refer to points on the cut as singular points for that branch.

### PDF page 66

**Midterm 1 review. Exponential function**

For $z=x+iy$ with $x,y\in\mathbb R$, $e^z=e^x(\cos y+i\sin y)$. If $w=s+it$, then

$$
e^{(x+iy)+(s+it)}=e^{z+w}=e^ze^w.
$$

![[Kyle Kabasares - Complex Variables - Cartesian coordinates of a complex input.png|**Fig. 75** A point $z$ in the plane has horizontal coordinate $x$ and vertical coordinate $y$.]]

The exponential has real part $e^x\cos y$ and imaginary part $e^x\sin y$. Consequently $|e^z|=e^x$ and $e^z$ never vanishes. The notes also observe that sine and cosine cannot vanish simultaneously.

![[Kyle Kabasares - Complex Variables - Modulus triangle for the exponential.png|**Fig. 76** The radial segment for $e^z$ has length $e^x$ and makes angle $y$ with the real axis.]]

**Solve $w=e^z$.** For $w\ne0$, write $w=r(\cos\theta+i\sin\theta)$ and compare with $e^x(\cos y+i\sin y)$.

![[Kyle Kabasares - Complex Variables - Polar coordinates of an exponential output.png|**Fig. 77** The sketch decomposes $w$ into components $r\cos\theta$ and $r\sin\theta$.]]

Equating moduli gives $r=e^x$. Equating angles modulo $2\pi$ gives

$$
x=\ln r,\qquad y=\theta+2n\pi,\qquad n\in\mathbb Z.
$$

There are infinitely many solutions for each $w\ne0$.

**Mapping by $f(z)=e^z$.** Consider a horizontal strip of height $2\pi$. For each fixed $y$ in the strip, varying $x$ maps the horizontal line to the ray with angle $y$ modulo $2\pi$, with radius $e^x$.

![[Kyle Kabasares - Complex Variables - Exponential sends horizontal strip lines to rays.png|**Fig. 78** The blue horizontal line in the strip maps to the blue ray. A different height maps to a different angle within the strip.]]

### PDF page 67

Each horizontal line in the input plane maps under $e^z$ to a ray. Letting the height $y$ vary through one full turn covers all angles. A strip of height $2\pi$ that includes one of its boundary lines maps onto $\mathbb C\setminus\{0\}$, since $e^z$ never vanishes.

![[Kyle Kabasares - Complex Variables - Strip of height two pi mapped to radial directions.png|**Fig. 79** Horizontal lines between the heights $y_0$ and $y_0+2\pi$ map to rays at the corresponding angles.]]

**Logarithm.** A value $w$ of $\log z$ satisfies $e^w=z$. Write

$$
z=|z|\cos\theta+i|z|\sin\theta=|z|(\cos\theta+i\sin\theta).
$$

![[Kyle Kabasares - Complex Variables - Modulus and argument of a logarithm input.png|**Fig. 80** The segment from the origin to $z$ has length $|z|$ and angle $\theta$.]]

For $w=s+it$, the equation $e^w=z$ becomes

$$
e^s(\cos t+i\sin t)=|z|(\cos\theta+i\sin\theta).
$$

Thus $e^s=|z|$ and $t=\theta+2\pi n$, so $w=\ln|z|+i(\theta+2\pi n)$ for $n\in\mathbb Z$. To make the logarithm single-valued, restrict the allowed angle. The notes denote the principal choice by $\operatorname{Log}z$. The sketch labels both endpoints of the angle interval as included. For a unique principal value use $-\pi<\theta\le\pi$, and for the analytic branch off the cut use $-\pi<\theta<\pi$.

![[Kyle Kabasares - Complex Variables - Principal argument of a first quadrant point.png|**Fig. 81** For this first-quadrant point, the principal angle is $\pi/4$. Adding a nonzero integer multiple of $2\pi$ leaves the principal range.]]

### PDF page 68

**Example.** Find $w=\operatorname{Log}(1+i)$. The modulus of $1+i$ is $\sqrt2$, and its argument in $(-\pi,\pi)$ is $\pi/4$. Thus

$$
w=\ln\sqrt2+\frac{\pi i}{4}.
$$

![[Kyle Kabasares - Complex Variables - Polar triangle for one plus i.png|**Fig. 82** The point $1+i$ has coordinates $(1,1)$ and distance $\sqrt2$ from the origin.]]

**Continuity of the principal logarithm.** Follow the lower half of a circle toward the negative real axis. As the path crosses that axis, the principal angle jumps from near $-\pi$ to near $\pi$. A principal value assigned on the cut therefore cannot be continuous across it.

![[Kyle Kabasares - Complex Variables - Argument jump on crossing the negative real axis.png|**Fig. 83** The lower arc approaches the negative real axis with argument tending to $-\pi$.]]

Remove the negative real axis and the origin from the domain. The principal logarithm is continuous on the resulting slit plane.

![[Kyle Kabasares - Complex Variables - Nonpositive real axis removed for the principal logarithm.png|**Fig. 84** The shaded negative ray and the open circle at $0$ indicate the excluded set.]]

To construct another branch on a slit plane, exclude a different ray and choose an argument interval of length $2\pi$ with endpoints at the direction of that ray modulo $2\pi$.

### PDF page 69

**Another cut for the logarithm.** Remove the ray at angle $\pi/4$ and select arguments in $(\pi/4,9\pi/4)$. The interval has length $2\pi$.

![[Kyle Kabasares - Complex Variables - Branch cut at angle pi over four.png|**Fig. 85** The shaded ray leaves the origin at angle $\pi/4$.]]

**Logarithm and complex powers.** The opening line writes $w=e^z$ and $z=e^w$ together. The inverse relation used here is $w=\log z$ when $z=e^w$. For a nonzero complex base $a$ and complex exponent $z$, define the values of $a^z$ by $e^{z\log a}$.

![[Kyle Kabasares - Complex Variables - Unit modulus of i.png|**Fig. 86** The point $i$ lies one unit above the origin. Its principal argument is $\pi/2$.]]

Since $|i|=1$ and its arguments are $\pi/2+2\pi n$,

$$
i^i=e^{i\log i}
=e^{i\left(\ln1+i(\pi/2+2\pi n)\right)}
=e^{-\pi(1/2+2n)},\qquad n\in\mathbb Z.
$$

The principal choice $n=0$ gives $e^{-\pi/2}\approx0.2079$, a real number. The page ends the example with “Imaginary to an imaginary = Real?!” and a heart next to “Math.”

**Defining a branch.** Delete a ray from the domain and choose an interval for the argument. For the cut along the positive imaginary axis, either $(\pi/2,5\pi/2)$ or $(-3\pi/2,\pi/2)$ works. Each interval has length $2\pi$ and defines a continuous logarithm on the slit plane.

![[Kyle Kabasares - Complex Variables - Branch cut along the positive imaginary axis.png|**Fig. 87** The thick upward ray is removed. The surrounding hatched region represents the domain of the branch.]]

### PDF page 70

**Trigonometric functions**

$$
\cos z=\frac{e^{iz}+e^{-iz}}{2},\qquad
\sin z=\frac{e^{iz}-e^{-iz}}{2i}.
$$

The remaining functions are defined wherever their denominators are nonzero.

$$
\tan z=\frac{\sin z}{\cos z},\qquad
\cot z=\frac{\cos z}{\sin z},\qquad
\sec z=\frac{1}{\cos z},\qquad
\csc z=\frac{1}{\sin z}.
$$

Since $e^{2\pi i}=e^{-2\pi i}=1$,

$$
\cos(z+2\pi)
=\frac{e^{iz}e^{2\pi i}+e^{-iz}e^{-2\pi i}}{2}
=\frac{e^{iz}+e^{-iz}}{2}
=\cos z.
$$

Sine and cosine retain the period $2\pi$. Define the hyperbolic functions by

$$
\cosh z=\frac{e^z+e^{-z}}{2},\qquad
\sinh z=\frac{e^z-e^{-z}}{2}.
$$

These give the real and imaginary parts of sine and cosine for $z=x+iy$.

$$
\begin{aligned}
\cos(x+iy)&=\cos x\cosh y-i\sin x\sinh y,\\
\sin(x+iy)&=\sin x\cosh y+i\cos x\sinh y.
\end{aligned}
$$

**Curves.** A parametrized curve $\gamma(t)$ has a real parameter $t\in[a,b]$, a starting point $\gamma(a)$, an endpoint $\gamma(b)$, and a direction given by increasing $t$. The parameter can be thought of as time.

![[Kyle Kabasares - Complex Variables - Curve with initial point A and terminal point B.png|**Fig. 88** The curve starts at $\gamma(a)=A$ and follows the arrows to $\gamma(b)=B$.]]

### PDF page 71

**Simple and closed curves.** A simple curve has no self-intersections. Distinct parameter values give distinct points, with a coincident initial and terminal point allowed for a simple closed curve.

![[Kyle Kabasares - Complex Variables - Simple curve and self intersection.png|**Fig. 89** The solid curve from $A$ to $B$ has no self-intersection. The small sketch at right marks a repeated point.]]

A closed curve has $\gamma(a)=\gamma(b)$, so its starting point and endpoint coincide.

![[Kyle Kabasares - Complex Variables - Closed curve with coincident endpoints.png|**Fig. 90** The labels $A$ and $B$ mark the same point on the loop.]]

**Components of a curve**

$$
\gamma(t)=x(t)+iy(t),\qquad
\gamma'(t)=x'(t)+iy'(t).
$$

The notes describe a smooth curve as one with continuous derivative. The piecewise smooth example has a cusp and can be split there into two smooth segments.

![[Kyle Kabasares - Complex Variables - Smooth curve from A to B.png|**Fig. 91** A smooth path follows the arrows from $A$ to $B$.]]

![[Kyle Kabasares - Complex Variables - Two smooth segments joined at a cusp.png|**Fig. 92** Segment 1 runs from $A$ to the cusp, and segment 2 runs from the cusp to $B$.]]

**March 14, 2016. ML inequality and path independence**

If $|f(z)|\le M$ on $C$ and $L$ is the length of $C$, then

$$
\left|\int_C f(z)\,dz\right|\le ML.
$$

The notes identify $M$ as the maximum of $|f|$ along the contour when that maximum exists.

### PDF page 72

**Proof of the ML inequality.** Parametrize the contour by $z(t)$, $a\le t\le b$.

![[Kyle Kabasares - Complex Variables - Endpoints above the contour integral.png|**Fig. 93** The sketch marks the endpoints $z(a)$ and $z(b)$.]]

The modulus inequality for integrals gives

$$
\begin{aligned}
\left|\int_C f(z)\,dz\right|
&=\left|\int_a^b f(z(t))z'(t)\,dt\right|\\
&\le\int_a^b|f(z(t))z'(t)|\,dt
=\int_a^b|f(z(t))|\,|z'(t)|\,dt.
\end{aligned}
$$

Set $M=\max_{a\le t\le b}|f(z(t))|=\max_{z\in C}|f(z)|$. The last integral is bounded by

$$
M\int_a^b|z'(t)|\,dt=ML,
$$

where $L$ is the contour length.

**Example.** Let $C_R$ be the upper half of $|z|=R$ with $R>2$, traversed counterclockwise. Use $z(t)=Re^{it}$ for $0\le t\le\pi$.

![[Kyle Kabasares - Complex Variables - Upper half circle for the ML estimate.png|**Fig. 94** The circle is drawn in full. The arrows on its upper half show the contour from $R$ to $-R$.]]

Show that

$$
\int_{C_R}\frac{2z^2-1}{z^4+5z^2+4}\,dz\longrightarrow0
\qquad\text{as }R\to\infty.
$$

Use the ML inequality to bound the modulus by a function $g(R)$ that tends to zero. The upper semicircle has length $L=\pi R$. The numerator satisfies $|2z^2-1|\le|2z^2|+|-1|$ on $C_R$.

### PDF page 73

On $C_R$, the numerator bound becomes $|2z^2|+|-1|=2R^2+1$. For the denominator, factor $z^4+5z^2+4=(z^2+1)(z^2+4)$ and use the reverse triangle inequality $|a+b|\ge\bigl||a|-|b|\bigr|$.

$$
|z^2+1|\ge|R^2-1|=R^2-1,\qquad
|z^2+4|\ge|R^2-4|=R^2-4,
$$

since $R>2$. It follows that

$$
|f(z)|=\left|\frac{2z^2-1}{z^4+5z^2+4}\right|
\le\frac{2R^2+1}{(R^2-1)(R^2-4)}.
$$

With $L=\pi R$, the ML inequality gives

$$
\left|\int_{C_R} f(z)\,dz\right|
\le \frac{(2R^2+1)\pi R}{(R^2-1)(R^2-4)}
\longrightarrow0
\qquad\text{as }R\to\infty.
$$

**Antiderivative review.** Suppose $F'(z)=f(z)$ on a domain containing the contour $C$.

![[Kyle Kabasares - Complex Variables - Open contour for endpoint evaluation.png|**Fig. 95** The curve $C$ joins $z(a)$ to $z(b)$.]]

$$
\int_C f(z)\,dz
=\int_a^b\underbrace{f(z(t))z'(t)}_{\frac{d}{dt}F(z(t))}\,dt
=F(z(b))-F(z(a)).
$$

If $C$ is closed, the endpoints coincide and $\int_C f(z)\,dz=0$.

![[Kyle Kabasares - Complex Variables - Closed contour for zero integral.png|**Fig. 96** The arrows indicate counterclockwise traversal of the closed curve $C$.]]

### PDF page 74

**Theorem.** Suppose $f$ is continuous on a domain $D$, described here as open and simply connected. The following conditions are equivalent.

1. The function $f$ has an antiderivative $F$ in $D$.
2. All contours lying in $D$ and joining $z_1$ to $z_2$ give the same integral of $f$.
3. The integral of $f$ around every closed contour lying in $D$ is zero.

**Example.** The integral of $f(z)=z^2$ around the circle $|z|=2$ is zero, since $F(z)=z^3/3$ is an antiderivative.

![[Kyle Kabasares - Complex Variables - Circle of radius two with left and right points.png|**Fig. 97** The sketch shows the circle and marks its left and right intersections with the real axis. The arrows show counterclockwise traversal.]]

The direct calculation on the page uses $z(\theta)=2e^{i\theta}$ with $\pi\le\theta\le3\pi/2$, so it covers a quarter of the circle. On that arc,

$$
f(z(\theta))z'(\theta)=(4e^{2i\theta})(2ie^{i\theta})=8ie^{3i\theta}.
$$

The page splits the exponential into cosine and sine and uses their antiderivatives. Keeping the factor $8i$ on both terms gives

$$
8i\int_\pi^{3\pi/2}e^{3i\theta}\,d\theta
=\frac{8i}{3}\left[\sin(3\theta)-i\cos(3\theta)\right]_\pi^{3\pi/2}
=\frac{8i}{3}(1-i)
=\frac{8}{3}(1+i).
$$

The handwritten last line instead gives $i(8\pi/3-1)$. A full turn gives zero because $e^{3i\theta}$ has the same value at its two endpoints.

### PDF page 75

**Branches and derivatives.** The values of $\log z$ are $\ln|z|+i\arg z$. A branch selects one value at each point so that the resulting function is analytic on its domain.

For $z=re^{i\theta}$ with $r>0$ and $-\pi<\theta<\pi$, the principal branch is

$$
\operatorname{Log}z=\ln|z|+i\operatorname{Arg}z=\ln r+i\theta.
$$

Its components satisfy the polar Cauchy–Riemann equations. The principal branch is differentiable on the plane with $0$ and the negative real axis removed.

![[Kyle Kabasares - Complex Variables - Principal argument limits at the logarithm cut.png|**Fig. 98** The arrows approach the negative real axis from above with angle tending to $\pi$ and from below with angle tending to $-\pi$.]]

A branch on another slit plane uses $\ln r+i\theta$ with $\theta\in(\alpha,\alpha+2\pi)$.

**Midterm review. Homework 5 problem**

Assume $\lim_{z\to0}f(z)=0$ and $|g(z)|\le M$ for $|z|<R$. Show that $\lim_{z\to0}f(z)g(z)=0$.

Given $\epsilon>0$, seek $\delta>0$ such that $0<|z|<\delta$ implies $|f(z)g(z)|<\epsilon$. For any $\epsilon_1>0$, the limit of $f$ gives $\delta_1>0$ such that $0<|z|<\delta_1$ implies $|f(z)|<\epsilon_1$. Let $\delta=\min\{\delta_1,R\}$. Then for $0<|z|<\delta$,

$$
|f(z)g(z)-0|=|f(z)g(z)|\le M|f(z)|.
$$

### PDF page 76

**Homework 5 problem, continued.** If $M>0$, choose $\epsilon_1=\epsilon/M$. Then for $0<|z|<\delta$,

$$
|f(z)g(z)|\le M|f(z)|<M\epsilon_1=\epsilon.
$$

If $M=0$, the product vanishes wherever the bound holds.

**March 15, 2016. Discussion**

$$
\begin{aligned}
\int_0^{\pi/6}e^{2it}\,dt
&=\int_0^{\pi/6}(\cos 2t+i\sin 2t)\,dt\\
&=\left[\frac{\sin 2t}{2}-i\frac{\cos 2t}{2}\right]_0^{\pi/6}\\
&=\left(\frac{\sqrt3}{4}-\frac{i}{4}\right)-\left(-\frac{i}{2}\right)
=\frac{\sqrt3+i}{4}.
\end{aligned}
$$

**2(a).** The parametrization $z(\theta)=e^{-i\theta}=\cos\theta-i\sin\theta$ starts at $(1,0)$ when $\theta=0$ and reaches $(0,-1)$ when $\theta=\pi/2$.

![[Kyle Kabasares - Complex Variables - Clockwise unit circle parametrization.png|**Fig. 99** The arrows show clockwise traversal as $\theta$ increases.]]

**2(b).** Sketch $z(t)=\sin(2t)+i\cos t$ for $0\le t\le\pi$. The page computes these sample points.

| $t$ | $x(t)=\sin(2t)$ | $y(t)=\cos t$ |
| --- | --- | --- |
| $0$ | $0$ | $1$ |
| $\pi/6$ | $\sqrt3/2$ | $\sqrt3/2$ |
| $\pi/4$ | $1$ | $\sqrt2/2$ |
| $\pi/3$ | $\sqrt3/2$ | $1/2$ |
| $\pi/2$ | $0$ | $0$ |
| $3\pi/4$ | $-1$ | $-\sqrt2/2$ |
| $\pi$ | $0$ | $-1$ |

![[Kyle Kabasares - Complex Variables - Curve with components sine of twice t and cosine of t.png|**Fig. 100** The curve runs from $(0,1)$ through the origin to $(0,-1)$, bending to the right above the real axis and to the left below it.]]

### PDF page 77

**3.** Evaluate $\int_0^\pi e^{(1+i)x}\,dx$. The page first separates real and imaginary parts.

$$
\int_0^\pi e^{(1+i)x}\,dx
=\int_0^\pi e^x\cos x\,dx+i\int_0^\pi e^x\sin x\,dx.
$$

For the real part, the tabular integration by parts differentiates $e^x$ repeatedly and integrates $\cos x$ to $\sin x$ and then to $-\cos x$. The resulting identity is

$$
\int_0^\pi e^x\cos x\,dx
=\left[e^x(\sin x+\cos x)\right]_0^\pi
-\int_0^\pi e^x\cos x\,dx.
$$

The page also evaluates the original integral directly. Using $e^{i\pi}=-1$ and multiplying by $(1-i)/(1-i)$ gives

$$
\begin{aligned}
\int_0^\pi e^{(1+i)x}\,dx
&=\left[\frac{e^{(1+i)x}}{1+i}\right]_0^\pi
=\frac{-e^\pi-1}{1+i}\\
&=\frac{(-e^\pi-1)(1-i)}{2}
=\frac{-e^\pi-1}{2}+i\frac{e^\pi+1}{2}.
\end{aligned}
$$

**5.** Since $|z|=\sqrt{x^2+y^2}$, we have $|z|^2=x^2+y^2=z\bar z$. The page takes $u(x,y)=\ln(x^2+y^2)$ and $v(x,y)=0$. Thus $v_x=v_y=0$. For $(x,y)\ne(0,0)$,

$$
\begin{aligned}
u_x&=\frac{2x}{x^2+y^2}, & u_y&=\frac{2y}{x^2+y^2},\\
u_{xx}&=\frac{2(x^2+y^2)-4x^2}{(x^2+y^2)^2}
=\frac{-2x^2+2y^2}{(x^2+y^2)^2},\\
u_{yy}&=\frac{2(x^2+y^2)-4y^2}{(x^2+y^2)^2}
=\frac{2x^2-2y^2}{(x^2+y^2)^2}.
\end{aligned}
$$

### PDF page 78

**March 28, 2016. Integration**

Lectures 13 and 14 look for ways to evaluate integrals with less work by using analyticity.

**Integration theorem 1.** Suppose $f$ is continuous in a domain $D$, an open connected set. The lecture recalls the equivalent conditions.

1. The function $f$ has an antiderivative $F$ in $D$, with $F'(z)=f(z)$ throughout the domain.
2. Integrals along paths contained in $D$ are path independent. When $F$ is an antiderivative, the common value from $z_1$ to $z_2$ is $\int_{z_1}^{z_2}f(z)\,dz=F(z_2)-F(z_1)$.
3. For each closed contour $C$ in $D$, $\int_C f(z)\,dz=0$.

**Lecture 14. Cauchy–Goursat theorem**

If $f$ is analytic on and inside a simple closed contour $C$, then $\int_C f(z)\,dz=0$. The handwritten statement ends at the integral, and the calculation on page 80 gives its value.

**Green's theorem.** Let $D$ be a region in $\mathbb R^2$ bounded by a positively oriented simple closed contour $\Gamma$. Suppose $P$ and $Q$ are defined on a larger open set containing the region and have continuous first partial derivatives there.

![[Kyle Kabasares - Complex Variables - Positive boundary orientation in Green theorem.png|**Fig. 101** The arrows follow $\Gamma$ with $D$ on the left.]]

$$
\int_\Gamma P\,dx+Q\,dy
=\iint_D\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)\,dx\,dy.
$$

### PDF page 79

**Example.** Use Green's theorem to evaluate $\int_C y^3\,dx-x^3\,dy$, where $C$ is the positively oriented circle of radius $2$. Set $P=y^3$ and $Q=-x^3$. Then $P_y=3y^2$ and $Q_x=-3x^2$, giving

$$
\int_C y^3\,dx-x^3\,dy=-3\iint_D(x^2+y^2)\,dx\,dy.
$$

Use $x=r\cos\theta$, $y=r\sin\theta$, and $dx\,dy=r\,dr\,d\theta$ on the disk $D$.

$$
-3\int_0^{2\pi}\int_0^2 r^3\,dr\,d\theta
=-6\pi\left[\frac{r^4}{4}\right]_0^2
=-24\pi.
$$

**Relationship to complex integrals.** Let $C$ be a simple closed contour parametrized by $z(t)$, $t\in[a,b]$, with $z(a)=z(b)$.

![[Kyle Kabasares - Complex Variables - Simple closed contour with matching parameter endpoints.png|**Fig. 102** The contour is traversed counterclockwise and returns to its starting point.]]

The contour integral and component formulas are

$$
\begin{aligned}
\int_C f(z)\,dz&=\int_a^b f(z(t))z'(t)\,dt,\\
f(z)&=u(x,y)+iv(x,y),\\
z(t)&=x(t)+iy(t),\\
z'(t)&=x'(t)+iy'(t).
\end{aligned}
$$

### PDF page 80

Multiplying $f(z(t))=u(x(t),y(t))+iv(x(t),y(t))$ by $z'(t)=x'(t)+iy'(t)$ gives

$$
\int_C f(z)\,dz
=\int_a^b(ux'-vy')\,dt+i\int_a^b(vx'+uy')\,dt.
$$

The page recalls the dot product $\langle x_1,x_2\rangle\cdot\langle y_1,y_2\rangle=x_1y_1+x_2y_2$. In terms of the vector fields $\vec F_1(x,y)=\langle u,-v\rangle$ and $\vec F_2(x,y)=\langle v,u\rangle$, the two terms are

$$
\int_C\vec F_1\cdot d\vec r+i\int_C\vec F_2\cdot d\vec r.
$$

Apply Green's theorem to each line integral for the positively oriented contour $C$ and its interior $D$.

$$
\int_C f(z)\,dz
=\iint_D(-v_x-u_y)\,dx\,dy
+i\iint_D(u_x-v_y)\,dx\,dy.
$$

Both integrands vanish by the Cauchy–Riemann equations. This gives $\int_C f(z)\,dz=0$ under the regularity assumptions of Green's theorem, including continuous first partial derivatives of $u$ and $v$.

**Goursat's contribution.** The theorem holds without assuming separately that $f'$ is continuous.

**Example.** For a natural number $n>1$, $f(z)=z^{-n}$ is analytic everywhere in $\mathbb C$ except at $z=0$.

### PDF page 81

For $f(z)=z^{-n}$ with $n>1$, consider a simple closed contour whose interior excludes the origin. The notes give two ways to obtain a zero integral. The function has the antiderivative $F(z)=z^{-n+1}/(-n+1)$ away from $0$, and the Cauchy–Goursat theorem applies because $f$ is analytic on and inside this contour. Here $f'$ is continuous as well.

![[Kyle Kabasares - Complex Variables - Contour excluding the origin for a negative power.png|**Fig. 103** The loop $C$ lies away from the origin and does not enclose it.]]

**Deformation of contours.** Suppose the points where $f$ fails to be analytic all lie inside the inner contour $C_1$, and $f$ is analytic on the region between $C_1$ and $C_2$, including its boundaries. Split that region into $D_1$ and $D_2$.

![[Kyle Kabasares - Complex Variables - Splitting the region between nested contours.png|**Fig. 104** Two connecting arcs divide the shaded region between the contours into $D_1$ and $D_2$. The crosses mark points inside $C_1$.]]

By Cauchy–Goursat, the integrals around $\partial D_1$ and $\partial D_2$ each vanish. Adding them cancels the shared arcs because each is traversed in opposite directions. With $C_1$ and $C_2$ both taken counterclockwise,

$$
0=\int_{\partial D_1}f(z)\,dz+\int_{\partial D_2}f(z)\,dz
=\int_{C_2}f(z)\,dz-\int_{C_1}f(z)\,dz.
$$

Thus $\int_{C_1}f(z)\,dz=\int_{C_2}f(z)\,dz$.

**March 29, 2016. Discussion on the ML inequality**

Let $C$ be a contour of length $L$ and suppose $f$ is piecewise continuous on $C$. If $|f(z)|\le M$ for all $z$ on $C$, then $\left|\int_C f(z)\,dz\right|\le ML$.

**Example 1.** Show without evaluating that for the circle $C$ given by $|z|=4$,

$$
\left|\int_C\frac{e^z}{z+1}\,dz\right|\le \frac{8\pi e^4}{3}.
$$

First find an upper bound $M$ for the modulus of the integrand.

### PDF page 82

**Example 1, continued.** On $|z|=4$, the reverse triangle inequality gives $|z+1|\ge|z|-1=3$. Also $|e^z|=e^{\operatorname{Re}z}\le e^4$, so

$$
\left|\frac{e^z}{z+1}\right|\le\frac{e^4}{3}.
$$

The circle has length $L=2\pi(4)=8\pi$. By the ML inequality,

$$
\left|\int_C\frac{e^z}{z+1}\,dz\right|\le\frac{8\pi e^4}{3}.
$$

**Cauchy–Goursat theorem.** If $f$ is analytic on and inside a simple closed curve $C$, then $\int_C f(z)\,dz=0$.

**Example 2.** Show that the integral of $\operatorname{sech}z=1/\cosh z$ around $|z|=1$ is zero. The denominator $\cosh z=(e^z+e^{-z})/2$ is entire and vanishes precisely when $e^{2z}=-1$. Write $z=x+iy$ to get

$$
-1=e^{2x}\bigl(\cos(2y)+i\sin(2y)\bigr).
$$

The imaginary part gives $\sin(2y)=0$, hence $2y=k\pi$. The real part gives $e^{2x}(-1)^k=-1$, so $x=0$ and $k$ is odd. The handwriting drops the factor of $2$ in the condition on $y$. The zeros are $z=ik\pi/2$ for odd $k$. Since their moduli are at least $\pi/2>1$, Cauchy–Goursat gives the desired zero integral.

**Discussion problem 1.** Consider $\left|\int_C z/(z-1)\,dz\right|$ for $C$ given by $|z|=3$. The notes begin with the modulus of the integrand, $|z|/|z-1|=3/|z-1|$.

**March 30, 2016. Cauchy integral formula**

### PDF page 83

**Contour deformation, continued.** Let $C_1$ be the inner contour and $C_2$ the outer contour, with both oriented counterclockwise. The two connecting segments $L_1$ and $L_2$ divide the region between them into upper and lower pieces.

![[Kyle Kabasares - Complex Variables - Upper and lower boundaries for contour deformation.png|**Fig. 105** The upper and lower pieces each have a closed boundary. Their directions along the shared segments are opposite.]]

The upper boundary uses $L_1$, $-C_{1,\mathrm{upper}}$, $L_2$, and $C_{2,\mathrm{upper}}$. The lower boundary uses $-L_1$, $-C_{1,\mathrm{lower}}$, $-L_2$, and $C_{2,\mathrm{lower}}$. Each boundary integral is zero by Cauchy–Goursat. For example, $\int_{L_1}f(z)\,dz=-\int_{-L_1}f(z)\,dz$. Canceling both pairs of connecting segments gives

$$
0=\int_{-C_1}f(z)\,dz+\int_{C_2}f(z)\,dz
=-\int_{C_1}f(z)\,dz+\int_{C_2}f(z)\,dz.
$$

Thus $\int_{C_2}f(z)\,dz=\int_{C_1}f(z)\,dz$.

**Several exceptional points.** If $f$ is analytic on and inside $C$ apart from $z_1,z_2,z_3$, construct three small contours $C_1,C_2,C_3$ around the respective points. With all contours counterclockwise,

$$
\int_C f(z)\,dz=\int_{C_1}f(z)\,dz+\int_{C_2}f(z)\,dz+\int_{C_3}f(z)\,dz.
$$

![[Kyle Kabasares - Complex Variables - Three inner contours around exceptional points.png|**Fig. 106** The outer contour $C$ encloses three smaller contours, each around one exceptional point.]]

**Next example.** Let $f(z)=1/(z-z_0)$ for a given complex number $z_0$.

### PDF page 84

Let $C$ be a positively oriented simple closed contour containing $z_0$ in its interior. For $f(z)=1/(z-z_0)$, deform $C$ to a small circle $C_1$ of radius $R$ centered at $z_0$.

![[Kyle Kabasares - Complex Variables - Small circle centered at z0 inside an outer contour.png|**Fig. 107** The inner circle surrounds $z_0$ and lies entirely inside $C$.]]

Write $z_0=x_0+iy_0$ and parametrize the small circle by $z(\theta)=Re^{i\theta}+z_0$, $0\le\theta\le2\pi$. Then $z'(\theta)=iRe^{i\theta}$, so

$$
\int_C\frac{dz}{z-z_0}
=\int_{C_1}\frac{dz}{z-z_0}
=\int_0^{2\pi}\frac{iRe^{i\theta}}{Re^{i\theta}}\,d\theta
=2\pi i.
$$

**Higher negative powers.** For integer $n>1$, the same circle gives

$$
\int_{C_1}\frac{dz}{(z-z_0)^n}
=iR^{1-n}\int_0^{2\pi}e^{i(1-n)\theta}\,d\theta
=iR^{1-n}\left[\frac{e^{i(1-n)\theta}}{i(1-n)}\right]_0^{2\pi}
=0.
$$

The handwriting drops an overall factor $i$ in the intermediate lines. The endpoint exponential is the same at $0$ and $2\pi$, so the integral still vanishes.

**Cauchy integral formula.** Let $f$ be analytic on and inside a positively oriented simple closed contour $C$. If $z_0$ is interior to $C$, then

$$
\int_C\frac{f(z)}{z-z_0}\,dz=2\pi i f(z_0).
$$

**Start of proof.** Choose $\rho>0$ so that $C_\rho$, the circle $|z-z_0|=\rho$, lies entirely inside $C$. The integrand $f(z)/(z-z_0)$ is analytic between and on the two contours, so contour deformation gives

$$
\int_C\frac{f(z)}{z-z_0}\,dz
=\int_{C_\rho}\frac{f(z)}{z-z_0}\,dz.
$$

### PDF page 85

**Proof of the Cauchy integral formula, continued.** By contour deformation and the integral of $1/(z-z_0)$ around $C_\rho$,

$$
\begin{aligned}
\int_C\frac{f(z)}{z-z_0}\,dz-2\pi i f(z_0)
&=\int_{C_\rho}\frac{f(z)}{z-z_0}\,dz
-f(z_0)\int_{C_\rho}\frac{dz}{z-z_0}\\
&=\int_{C_\rho}\frac{f(z)-f(z_0)}{z-z_0}\,dz.
\end{aligned}
$$

For every $\epsilon>0$, continuity at $z_0$ gives $\delta>0$ such that $|f(z)-f(z_0)|<\epsilon$ when $|z-z_0|<\delta$. Choose $\rho<\delta$ with $C_\rho$ inside $C$.

![[Kyle Kabasares - Complex Variables - Contours for the Cauchy integral formula estimate.png|**Fig. 108** The inner circle $C_\rho$ is centered at $z_0$ and both contours have positive orientation.]]

On $C_\rho$, the modulus of the difference quotient is at most $\epsilon/\rho$. The circle has length $2\pi\rho$. The estimate uses arc length $ds$ for the modulus integral, where the handwriting writes $dz$.

$$
\left|\int_{C_\rho}\frac{f(z)-f(z_0)}{z-z_0}\,dz\right|
\le\int_{C_\rho}\frac{|f(z)-f(z_0)|}{|z-z_0|}\,ds
\le\frac{\epsilon}{\rho}(2\pi\rho)=2\pi\epsilon.
$$

Because $\epsilon$ is arbitrary and the original difference is independent of $\rho$, the difference is zero.

$$
\int_C\frac{f(z)}{z-z_0}\,dz=2\pi i f(z_0).
$$

**April 4, 2016. Lectures 15 and 16**

The topics are the Cauchy integral formula and the fundamental theorem of algebra. The page restates the formula for $f$ analytic on and inside a positively oriented simple closed contour $C$ and $z_0$ in its interior, with a reminder to review the proof.

A simple curve has no self-intersections. For a figure-eight path the notes suggest splitting the curve at its crossing.

![[Kyle Kabasares - Complex Variables - Figure eight split into two loops.png|**Fig. 109** The two lobes of the self-intersecting path are labeled $C_1$ and $C_2$.]]

### PDF page 86

A contour can consist of piecewise differentiable segments.

![[Kyle Kabasares - Complex Variables - Piecewise differentiable polygon contour.png|**Fig. 110** Four straight segments form a closed contour oriented counterclockwise.]]

**Example.** Let $f(z)=(z+1)^2$ and let $C$ be the counterclockwise circle centered at $1$ with radius $5$. The function $f$ is entire, and the Cauchy integral formula gives

$$
\int_C\frac{f(z)}{z-1}\,dz=2\pi i f(1)
=2\pi i(1+1)^2=\boxed{8\pi i}.
$$

![[Kyle Kabasares - Complex Variables - Circle centered at one with a distant real point.png|**Fig. 111** The sketch marks the center $1$ and the distant real point $1000$ outside the circle.]]

To verify directly, use $z(\theta)=1+5e^{i\theta}$, $0\le\theta\le2\pi$. The page questions its first parametrization calculation, which omitted the denominator. Restoring it gives $z'(\theta)/(z(\theta)-1)=i$, so

$$
\begin{aligned}
\int_C\frac{f(z)}{z-1}\,dz
&=i\int_0^{2\pi}(5e^{i\theta}+2)^2\,d\theta\\
&=i\int_0^{2\pi}(25e^{2i\theta}+20e^{i\theta}+4)\,d\theta
=8\pi i.
\end{aligned}
$$

The two nonconstant exponentials integrate to zero over the full turn.

**Cauchy integral formula for derivatives.** Suppose $f$ is analytic on and inside a positively oriented simple closed contour $C$, and $z_0$ lies inside $C$. Then

$$
\int_C\frac{f(z)}{(z-z_0)^{n+1}}\,dz
=\frac{2\pi i}{n!}f^{(n)}(z_0).
$$

**Next example.** Evaluate $\int_C e^{z^2}/(z-i)^4\,dz$ for the circle centered at $0$ of radius $2$. The numerator $f(z)=e^{z^2}$ is entire, and $i$ is inside $C$.

### PDF page 87

**Derivative formula example, continued.** With $f(z)=e^{z^2}$ and $(z-i)^4$ in the denominator, the integral is $2\pi i f^{(3)}(i)/3!$. Compute

$$
\begin{aligned}
f'(z)&=2ze^{z^2},\\
f''(z)&=(2+4z^2)e^{z^2},\\
f^{(3)}(z)&=(12z+8z^3)e^{z^2}.
\end{aligned}
$$

Then $f^{(3)}(i)=(12i+8i^3)e^{-1}=4i/e$, so

$$
\int_C\frac{e^{z^2}}{(z-i)^4}\,dz
=\frac{2\pi i(4i)}{6e}
=\boxed{-\frac{4\pi}{3e}}.
$$

**Lemma.** If $f$ is continuous on $C$, then for each positive integer $n$ the function

$$
F_n(z)=\int_C\frac{f(w)}{(w-z)^n}\,dw
$$

is analytic for $z$ off $C$, and $F_n'(z)=nF_{n+1}(z)$. The page points to Lecture 15, page 10, for the $n=1$ case in connection with the Cauchy integral formula for derivatives.

**How to evaluate contour integrals**

1. For an open contour, parametrize $C$ and evaluate directly, or use an antiderivative when one exists on a domain containing the path.
2. For a closed contour, parametrize and evaluate directly, possibly after deforming the contour. For a simple closed contour with $f$ analytic on and inside it, Cauchy–Goursat gives zero. If there is one singular point $z_0$ inside $C$, look for a representation $\int_C g(z)/(z-z_0)^k\,dz$ with $g$ analytic on and inside $C$.

### PDF page 88

**Cauchy integral formula for derivatives.** The formula gives

$$
\int_C\frac{f(z)}{(z-z_0)^{n+1}}\,dz=\frac{2\pi i}{n!}f^{(n)}(z_0).
$$

The opening line of the page omits $i$ in this coefficient. The estimate below starts from the correct coefficient $n!/(2\pi i)$ when solving for $f^{(n)}(z_0)$. The proof of the formula shows that if $f$ is analytic in a neighborhood of $z_0$, then all derivatives $f^{(n)}(z_0)$ exist.

**Lecture 16. Fundamental theorem of algebra**

**Cauchy's inequality.** Suppose $f$ is analytic on and inside the positively oriented circle $C_R$ of radius $R$ centered at $z_0$. Let $M_R$ be the maximum of $|f(z)|$ on $C_R$. Then

$$
|f^{(n)}(z_0)|\le\frac{n!M_R}{R^n},\qquad n=0,1,2,\ldots.
$$

![[Kyle Kabasares - Complex Variables - Circle for the Cauchy derivative estimate.png|**Fig. 112** The radius from $z_0$ to the circle is $R$.]]

Use $z(t)=z_0+Re^{it}$ for one full turn. On $C_R$, the modulus of the integrand is bounded by $M_R/R^{n+1}$, and the circle has length $2\pi R$. Thus the derivative formula and the ML inequality give

$$
|f^{(n)}(z_0)|
=\frac{n!}{2\pi}\left|\int_{C_R}\frac{f(z)}{(z-z_0)^{n+1}}\,dz\right|
\le\frac{n!}{2\pi}\frac{M_R}{R^{n+1}}\,2\pi R
=\frac{n!M_R}{R^n}.
$$

**April 5, 2016. Discussion**

In a simply connected domain, if $f$ is analytic throughout the domain, its integral around a closed contour $C$ in that domain is zero. In the multiply connected case, let $C$ be the outer boundary and $C_j$ the inner boundaries. If $f$ is analytic on the region between them and on its boundary, then

$$
\int_C f(z)\,dz+\sum_{j=1}^n\int_{C_j}f(z)\,dz=0,
$$

where the outer boundary is counterclockwise and the inner boundaries are clockwise.

![[Kyle Kabasares - Complex Variables - Boundary orientation in a region with a hole.png|**Fig. 113** The connecting segments are traversed in both directions. The outer and inner boundaries have opposite orientations.]]

### PDF page 89

**Cauchy integral formula**

$$
f(z_0)=\frac{1}{2\pi i}\int_C\frac{f(z)}{z-z_0}\,dz,
\qquad
\int_C\frac{f(z)}{z-z_0}\,dz=2\pi i f(z_0).
$$

**Example 1.** Evaluate $\int_C dz/(z^2-z)$. Split the path into loops $C_1$ and $C_2$. The first contains neither pole. The second encloses $0$ and leaves $1$ outside.

![[Kyle Kabasares - Complex Variables - Two loops with only the larger enclosing zero.png|**Fig. 114** The small left loop is $C_1$. The larger loop $C_2$ contains the origin.]]

By Cauchy–Goursat the $C_1$ integral is zero. On $C_2$, use the numerator $f(z)=1/(z-1)$ in the Cauchy integral formula.

$$
\int_{C_2}\frac{dz}{z^2-z}
=\int_{C_2}\frac{1/(z-1)}{z-0}\,dz
=2\pi i f(0)=-2\pi i.
$$

The page also mentions partial fractions as an alternative.

**1(a).** Evaluate $\int_C \cos z/[z(z^2+8)]\,dz$ on the positively oriented square shown.

![[Kyle Kabasares - Complex Variables - Square contour with coordinates plus and minus two.png|**Fig. 115** The square has sides on $x=\pm2$ and $y=\pm2$. It encloses $0$ and leaves $\pm i\sqrt8$ outside.]]

Since $z^2+8=(z+i\sqrt8)(z-i\sqrt8)$, take $f(z)=\cos z/(z^2+8)$. The integral is $2\pi i f(0)=2\pi i/8=\pi i/4$.

**1(b).** For the same square,

$$
\int_C\frac{z}{2z+1}\,dz
=\int_C\frac{z/2}{z-(-1/2)}\,dz
=2\pi i\frac{-1/2}{2}
=-\frac{\pi i}{2}.
$$

**2.** On the positively oriented circle $|z-i|=2$, the pole at $2i$ lies inside and the pole at $-2i$ lies outside. Therefore

$$
\int_C\frac{dz}{z^2+4}
=\int_C\frac{1/(z+2i)}{z-2i}\,dz
=2\pi i\frac{1}{4i}
=\frac{\pi}{2}.
$$

### PDF page 90

**3(a).** The notes conclude that the contour integral is zero because neither singular point lies inside $C$. The displayed denominator is $z^2+2z+2$, which factors as $(z+1+i)(z+1-i)$ and has roots $-1\pm i$. The handwritten factors are $(z-1+i)(z-1-i)$, which instead correspond to $z^2-2z+2$.

**3(b).** The next exercise sets up $\int_C \sin z/\cos z\,dz$.

**April 6, 2016. Lecture**

The page lists exam 2 for April 20 and a guest speaker for April 8 at 10 a.m.

The lecture recalls the Cauchy integral formula and its derivative version. For $f$ analytic on and inside a positively oriented simple closed contour $C$ and $z_0$ in its interior,

$$
\int_C\frac{f(z)}{z-z_0}\,dz=2\pi i f(z_0),\qquad
\int_C\frac{f(z)}{(z-z_0)^{k+1}}\,dz
=\frac{2\pi i}{k!}f^{(k)}(z_0).
$$

Analyticity in a neighborhood of $z_0$ implies that all derivatives exist there. The notes mark a question about $C^\infty$ for office hours.

**Cauchy's inequality.** For the circle $C_R$ parametrized by $z(\theta)=z_0+Re^{i\theta}$, let $M_R=\max_{z\in C_R}|f(z)|$. The derivative formula gives the bound $|f^{(n)}(z_0)|\le n!M_R/R^n$ for $n=0,1,\ldots$.

![[Kyle Kabasares - Complex Variables - Radius R for the derivative bound.png|**Fig. 116** The circle used in the estimate has center $z_0$ and radius $R$.]]

![[Kyle Kabasares - Complex Variables - Maximum on a closed real interval.png|**Fig. 117** The extreme value theorem is illustrated by a continuous graph with a marked maximum on $[a,b]$.]]

**Example.** Let $f$ be entire with $|f(z)|\le A|z|$ for a fixed positive real $A$. The claimed form is $f(z)=a_1z$, with $a_1\in\mathbb C$ and $|a_1|\le A$.

On $C_R$ the triangle inequality gives

$$
|f(z(\theta))|\le A|z_0+Re^{i\theta}|\le A(|z_0|+R).
$$

Using Cauchy's inequality at the center $z_0$ gives

$$
|f^{(n)}(z_0)|\le\frac{n!M_R}{R^n}
\le\frac{n!A(|z_0|+R)}{R^n}.
$$

Since $R$ can grow arbitrarily large, $f^{(n)}(z_0)=0$ for $n\ge2$.

### PDF page 91

**Linear growth example, continued.** Since $f''(z_0)=0$ for every $z_0$, $f$ is affine. The bound $|f(z)|\le A|z|$ gives $f(0)=0$, so $f(z)=a_1z$.

**Gauss's mean value theorem.** Suppose $f$ is analytic in a simply connected domain $D$ containing the circle $C_R$ given by $|z-z_0|=R$. Then

$$
f(z_0)=\frac{1}{2\pi}\int_0^{2\pi} f(z_0+Re^{i\theta})\,d\theta.
$$

![[Kyle Kabasares - Complex Variables - Disk within the mean value theorem domain.png|**Fig. 118** The circle of radius $R$ centered at $z_0$ and the disk it encloses lie inside $D$.]]

For the proof, put $z=z_0+Re^{i\theta}$ in Cauchy's formula. The factor $Re^{i\theta}$ cancels and the factor $i$ cancels with the one in the prefactor.

$$
\begin{aligned}
f(z_0)
&=\frac{1}{2\pi i}\int_{C_R}\frac{f(z)}{z-z_0}\,dz\\
&=\frac{1}{2\pi i}\int_0^{2\pi}
\frac{f(z_0+Re^{i\theta})}{Re^{i\theta}}\,iRe^{i\theta}\,d\theta
=\frac{1}{2\pi}\int_0^{2\pi}f(z_0+Re^{i\theta})\,d\theta.
\end{aligned}
$$

**Example.** Find the average of $u(x,y)=x^2-y^2-x$ on the circle centered at $(0,1)$ with radius $2$. The function satisfies $u_{xx}+u_{yy}=0$ and is the real part of $f(z)=z^2-z$, whose imaginary part is $v(x,y)=2xy-y$.

![[Kyle Kabasares - Complex Variables - Mean value example circle centered at i.png|**Fig. 119** The example averages values on the circle of radius $2$ around $i$.]]

Taking real and imaginary parts of the formula separately gives

$$
\begin{aligned}
u(z_0)&=\frac{1}{2\pi}\int_0^{2\pi}u(z_0+Re^{i\theta})\,d\theta,\\
v(z_0)&=\frac{1}{2\pi}\int_0^{2\pi}v(z_0+Re^{i\theta})\,d\theta.
\end{aligned}
$$

The requested average is $u(0,1)=-1$. The handwritten line expanding $f=u+iv$ omits $i$ before the second integral.

**Liouville's theorem.** Every bounded entire function is constant. If $|f(z)|\le M$ everywhere, Cauchy's inequality for $n=1$ gives $|f'(z_0)|\le M_R/R\le M/R$.

**Fundamental theorem of algebra.** The page introduces the problem of proving that a polynomial of positive degree has a root.

### PDF page 92

**April 11, 2016. Lecture 17. Complex sequences and series**

A complex sequence is a function from the natural numbers to the complex numbers. Its terms are $z_1,z_2,z_3,\ldots$, and the sequence is denoted $\{z_n\}$.

**Example.** For $n\in\mathbb N$ with $n\ge1$, let

$$
z_n=\left(2-\frac1n\right)+i\left(5+\frac1n\right).
$$

The notes observe that the component sequences $x_n=2-1/n$ and $y_n=5+1/n$ both converge and suggest that the complex sequence converges as well.

**Sequence limits.** A sequence $\{z_n\}$ has limit $z$ if for each real $\epsilon>0$ there is an $N$ such that $|z_n-z|<\epsilon$ whenever $n>N$. Write $\lim_{n\to\infty}z_n=z$. Subtracting the proposed limit reduces the condition to convergence to $0$.

![[Kyle Kabasares - Complex Variables - Complex sequence eventually in the epsilon disk.png|**Fig. 120** Early terms may lie outside the circle of radius $\epsilon$. All terms with $n>N$ lie inside it.]]

![[Kyle Kabasares - Complex Variables - Real sequence terms beyond the index N.png|**Fig. 121** The real-variable sketch shows the terms $x_n$ staying near $x$ after index $N$.]]

A sequence may diverge. When its limit exists, the limit is unique. The page suggests proving uniqueness by contradiction using the limit definition.

### PDF page 93

**Theorem.** Suppose $z_n=x_n+iy_n$ and $z=x+iy$. Then

$$
\lim_{n\to\infty}z_n=z
\quad\Longleftrightarrow\quad
\lim_{n\to\infty}x_n=x\quad\text{and}\quad\lim_{n\to\infty}y_n=y.
$$

**From the component limits to the complex limit.** Given $\epsilon>0$, choose $N_x$ and $N_y$ so that $|x_n-x|<\epsilon/2$ for $n>N_x$ and $|y_n-y|<\epsilon/2$ for $n>N_y$. Let $N=\max\{N_x,N_y\}$. For $n>N$, the triangle inequality gives

$$
|z_n-z|
=|(x_n-x)+i(y_n-y)|
\le|x_n-x|+|y_n-y|
<\frac{\epsilon}{2}+\frac{\epsilon}{2}=\epsilon.
$$

Thus $z_n\to z$ as $n\to\infty$. The handwritten boxed limit uses $n\to0$, while the theorem and the proof use $n\to\infty$.

**From the complex limit to the component limits.** For each $\epsilon>0$, choose $N$ so that $|z_n-z|<\epsilon$ for $n>N$. Then

$$
|x_n-x|\le|(x_n-x)+i(y_n-y)|=|z_n-z|<\epsilon.
$$

The same bound holds for $|y_n-y|$, giving both component limits.

**Example.** Find the limit of $z_n=(\sqrt n+i(n+1))/n$. The real component is $x_n=\sqrt n/n=1/\sqrt n$, which tends to zero. The page begins the proof by choosing an index $N$ that makes $|x_n-0|<\epsilon$ for $n>N$.

### PDF page 94

For the real component $x_n=1/\sqrt n$, the inequality $|x_n-0|<\epsilon$ holds when $n>1/\epsilon^2$. Choose $N=\lceil1/\epsilon^2\rceil$. For the imaginary component $y_n=(n+1)/n=1+1/n$,

$$
|y_n-1|=\frac1n<\epsilon
$$

whenever $n>N$ and $N>1/\epsilon$. Thus $x_n\to0$, $y_n\to1$, and $z_n\to i$.

**Divergence example.** Show that $z_n=(1+i)^n$ diverges. The polar form is

$$
(1+i)^n=(\sqrt2)^n e^{in\pi/4}
=(\sqrt2)^n\cos\frac{n\pi}{4}
+i(\sqrt2)^n\sin\frac{n\pi}{4}.
$$

The first handwritten expansion drops the exponent on $\sqrt2$, which reappears in the component formulas. The notes propose showing that one of the components diverges. For instance, at $n=8k$ the real component equals $(\sqrt2)^{8k}$, which is unbounded.

**Complex series.** The infinite series $\sum_{n=1}^{\infty}z_n$ converges to $S$ if the sequence of partial sums

$$
S_N=\sum_{n=1}^N z_n=z_1+z_2+\cdots+z_N
$$

converges to $S$. For $z_n=x_n+iy_n$ and $S=X+iY$, the condition $\sum_{n=1}^{\infty}z_n=S$ is equivalent to $\sum_{n=1}^{\infty}x_n=X$ and $\sum_{n=1}^{\infty}y_n=Y$.

A series is **absolutely convergent** if $\sum_{n=1}^{\infty}|z_n|$ converges. This implies that both $\sum_{n=1}^{\infty}|x_n|$ and $\sum_{n=1}^{\infty}|y_n|$ converge.

**Geometric series.** For $|z|<1$,

$$
\sum_{n=0}^{\infty}z^n=\frac{1}{1-z}.
$$

For $|z|\ge1$, the series diverges.

### PDF page 95

**D'Alembert's ratio test.** For a complex series $\sum_{n=0}^{\infty}z_n$, suppose the ratios are eventually defined and $\lim_{n\to\infty}|z_{n+1}|/|z_n|=L$. The series converges absolutely if $L<1$ and diverges if $L>1$. The test is inconclusive if $L=1$.

**Proof for $L<1$.** Set $r=(L+1)/2$, so $L<r<1$. For sufficiently large $N$, $|z_{n+1}|<r|z_n|$ for $n\ge N$. Iteration gives $|z_{N+j}|\le r^j|z_N|$ for $j\ge1$. Thus

$$
\sum_{j=1}^{\infty}|z_{N+j}|
\le |z_N|\sum_{j=1}^{\infty}r^j
=|z_N|\frac{r}{1-r}<\infty.
$$

The written tail bound uses $z_{N+1}$ with powers starting at $r^1$. Using $z_N$ with those powers aligns the indices. The finite sum $\sum_{n=0}^N |z_n|$ adds only a finite amount, so $\sum_{n=0}^{\infty}|z_n|$ converges.

**Taylor series.** If $f$ is analytic in $|z-z_0|<R$, then throughout that disk,

$$
f(z)=\sum_{n=0}^{\infty}a_n(z-z_0)^n,\qquad
a_n=\frac{f^{(n)}(z_0)}{n!},\quad n=0,1,2,\ldots.
$$

**April 12, 2016. Discussion**

- **Liouville's theorem.** An entire function bounded on $\mathbb C$ is constant.
- **Fundamental theorem of algebra.** Every polynomial $P$ of degree $n\ge1$ has at least one root $z_0$, so $P(z_0)=0$.
- **Mean value theorem.** If $f$ is analytic on and inside the circle $|z-z_0|=\rho$, then $f(z_0)=\frac1{2\pi}\int_0^{2\pi}f(z_0+\rho e^{i\theta})\,d\theta$.

**Example.** Let $f$ be entire and suppose $u(x,y)=\operatorname{Re}f(z)\le u_0$ everywhere. Put $g(z)=e^{f(z)}$. With $f=u+iv$,

$$
|g(z)|=|e^ue^{iv}|=e^u\le e^{u_0}.
$$

The entire function $g$ is bounded and therefore constant by Liouville's theorem. Then $g'(z)=e^{f(z)}f'(z)=0$. Since the exponential is nonzero, $f'(z)=0$, so $f$ and its real part $u$ are constant.

### PDF page 96

**Worksheet**

**1(a).** Evaluate $\int_C\cosh z/z^4\,dz$ on the positively oriented contour around the origin.

![[Kyle Kabasares - Complex Variables - Worksheet contour around the origin.png|**Fig. 122** The circular contour encloses the origin.]]

Since $\cosh z=(e^z+e^{-z})/2$, its third derivative is $\sinh z$. The Cauchy formula for derivatives gives

$$
\int_C\frac{\cosh z}{z^4}\,dz
=\frac{2\pi i}{3!}\sinh(0)=0.
$$

The handwritten denominator in this coefficient is unclear. The exponent $4$ requires $3!$.

**1(b).** For $-2<x_0<2$, the page applies the same formula to the first derivative of $\tan(z/2)$ at $x_0$. For positive orientation, with $x_0$ inside $C$ and $\tan(z/2)$ analytic on and inside $C$,

$$
\int_C\frac{\tan(z/2)}{(z-x_0)^2}\,dz
=\frac{2\pi i}{1!}\,\frac12\sec^2(x_0/2)
=\pi i\sec^2(x_0/2).
$$

**2.** The line for $z^k-z_0^k$ ends after the equals sign.

**3.** The worksheet gives $\int_0^{2\pi}\cos(\cos\theta)\cosh(\sin\theta)\,d\theta=2\pi$ and begins by expanding the product.

$$
\begin{aligned}
\cos(\cos\theta)\cosh(\sin\theta)
&=\tfrac14(e^{i\cos\theta}+e^{-i\cos\theta})(e^{\sin\theta}+e^{-\sin\theta})\\
&=\tfrac14\bigl(e^{i\cos\theta+\sin\theta}+e^{i\cos\theta-\sin\theta}
+e^{-i\cos\theta+\sin\theta}+e^{-i\cos\theta-\sin\theta}\bigr).
\end{aligned}
$$

**April 13, 2016. Proof of Taylor's theorem**

Laurent series are listed as a generalization. If $f$ is analytic in the disk $|z-z_0|<R_0$, its Taylor series is

$$
f(z)=\sum_{n=0}^{\infty}a_n(z-z_0)^n,\qquad a_n=\frac{f^{(n)}(z_0)}{n!}.
$$

The opening statement writes a closed radius bound. The proof establishes the formula for $|z-z_0|<R_0$ by choosing an intermediate circle inside that disk.

Translate the center to $z_0=0$. The proof uses the Cauchy formula for derivatives and the geometric series. For fixed $z$ with $|z|=r<R_0$, choose $r<r_0<R_0$ and integrate with respect to $s$ on $C_{r_0}$.

![[Kyle Kabasares - Complex Variables - Intermediate circle for the Taylor proof.png|**Fig. 123** The point $z$ lies inside the dashed circle of radius $r_0$, which lies inside the disk of radius $R_0$.]]

$$
f(z)=\frac{1}{2\pi i}\int_{C_{r_0}}\frac{f(s)}{s-z}\,ds,\qquad
\frac1{s-z}=\frac1s\frac1{1-z/s},\qquad
\left|\frac zs\right|=\frac r{r_0}<1.
$$

The factored kernel matches $1/(s-z)$ in the integral. The handwritten kernel on the last line reverses that order.

### PDF page 97

**Geometric series with a remainder.** For $|p|<1$,

$$
\frac1{1-p}=\sum_{n=0}^{\infty}p^n
=\sum_{n=0}^{N-1}p^n+\sum_{n=N}^{\infty}p^n
=\sum_{n=0}^{N-1}p^n+\frac{p^N}{1-p}.
$$

In the Cauchy formula on $C_{r_0}$, substitute $p=z/s$. This gives

$$
\begin{aligned}
f(z)
&=\frac1{2\pi i}\int_{C_{r_0}}\frac{f(s)}s
\left[\sum_{n=0}^{N-1}\left(\frac zs\right)^n+
\frac{(z/s)^N}{1-z/s}\right]\,ds\\
&=\sum_{n=0}^{N-1}z^n\,\frac1{2\pi i}
\int_{C_{r_0}}\frac{f(s)}{s^{n+1}}\,ds+E_N(z)\\
&=\sum_{n=0}^{N-1}\frac{f^{(n)}(0)}{n!}z^n+E_N(z),
\end{aligned}
$$

where the last equality uses the Cauchy formula for derivatives and

$$
E_N(z)=\frac1{2\pi i}\int_{C_{r_0}}\frac{f(s)z^N}{(s-z)s^N}\,ds.
$$

On the circle, $|s|=r_0$ and $|s-z|\ge\bigl||s|-|z|\bigr|=r_0-r$ since $r_0>r$. Write $M_{r_0}=\max_{s\in C_{r_0}}|f(s)|$. Using the length $2\pi r_0$ in the ML inequality gives

$$
\begin{aligned}
|E_N(z)|
&\le \frac{r^N}{2\pi(r_0-r)}
\int_{C_{r_0}}\left|\frac{f(s)}{s^N}\right|\,|ds|\\
&\le\frac{r^N}{2\pi(r_0-r)}(2\pi r_0)\frac{M_{r_0}}{r_0^N}
=\frac{r_0M_{r_0}}{r_0-r}\left(\frac r{r_0}\right)^N.
\end{aligned}
$$

Here $|ds|$ denotes arc length along the circle, written $ds$ in the handwritten modulus bound. The remainder tends to zero as $N\to\infty$ because $r/r_0<1$.

### PDF page 98

**Remarks.** A Taylor series centered at $z_0$ converges inside the disk whose radius is the distance to the nearest point where the function fails to be analytic. The Taylor series is unique.

**Example 1.** Find the Taylor series of $3/(2+iz)$ about $0$. Multiply numerator and denominator by $i$ and factor $2i$.

$$
\frac{3}{2+iz}
=\frac{3i}{2i-z}
=\frac32\frac1{1-z/(2i)}
=\frac32\sum_{n=0}^{\infty}\left(\frac z{2i}\right)^n,\qquad |z|<2.
$$

**Example 2.** Expand $1/z$ about $z_0=1$.

$$
\frac1z=\frac1{1-(1-z)}
=\sum_{n=0}^{\infty}(1-z)^n
=\sum_{n=0}^{\infty}(-1)^n(z-1)^n,\qquad |z-1|<1.
$$

The handwriting puts both the factor $(-1)^n$ and the power $(1-z)^n$ in one intermediate term. The two equivalent forms above use the factor with $(z-1)^n$.

**Example 3.** Seek a series centered at $0$ for $f(z)=(1+2z^2)/(z^3+z^5)$, which fails to be analytic at the center. First rewrite

$$
f(z)=\frac1{z^3}\frac{1+2z^2}{1+z^2}
=\frac1{z^3}\left(2-\frac1{1+z^2}\right).
$$

The geometric series gives $1/(1+z^2)=\sum_{n=0}^{\infty}(-1)^nz^{2n}$ for $|z|<1$. Hence

$$
f(z)=\frac1{z^3}(2-1+z^2-z^4+z^6-z^8+\cdots)
=\frac1{z^3}+\frac1z-z+z^3-z^5+\cdots,\qquad 0<|z|<1.
$$

**Laurent's theorem.** Suppose $f$ is analytic throughout an annular domain $R_1<|z-z_0|<R_2$. Let $C$ be any positively oriented simple closed contour enclosing $z_0$ and lying in the annulus.

### PDF page 99

**Laurent's theorem, continued.** For every $z$ with $R_1<|z-z_0|<R_2$,

$$
f(z)=\sum_{n=0}^{\infty}a_n(z-z_0)^n+
\sum_{n=1}^{\infty}\frac{b_n}{(z-z_0)^n}.
$$

On the contour $C$ from the theorem, the coefficients are

$$
a_n=\frac{1}{2\pi i}\int_C\frac{f(\zeta)}{(\zeta-z_0)^{n+1}}\,d\zeta,
\qquad
b_n=\frac{1}{2\pi i}\int_C f(\zeta)(\zeta-z_0)^{n-1}\,d\zeta.
$$

The notes relate the first coefficient formula to the Cauchy integral formula for derivatives.

![[Kyle Kabasares - Complex Variables - Annulus with inner and outer radii.png|**Fig. 124** Two concentric circles mark the inner and outer boundaries of the annulus.]]

**Power series.** A power series is an infinite series of the form $\sum_{n=0}^{\infty}a_n(z-z_0)^n$, with complex coefficients $a_n$ and center $z_0$.

**Theorem A.** If the series converges at some $z_1\ne z_0$, then it converges absolutely for every $z$ with $|z-z_0|<|z_1-z_0|$.

**Start of proof.** Choose $r$ such that $|z-z_0|\le r<|z_1-z_0|$.

![[Kyle Kabasares - Complex Variables - Power series convergence on a smaller disk.png|**Fig. 125** The smaller disk centered at $z_0$ contains $z$. The point $z_1$ lies on the outer circle.]]

Since $\sum_{n=0}^{\infty}a_n(z_1-z_0)^n$ converges, its terms tend to zero. Hence there is a constant $M$ such that $|a_n|\,|z_1-z_0|^n\le M$ for every $n$.

### PDF page 100

**Proof of Theorem A, continued.** Set $p=r/|z_1-z_0|$. The choice $|z-z_0|\le r<|z_1-z_0|$ gives $0\le p<1$, so

$$
|a_n|\,|z-z_0|^n
=|a_n|\,|z_1-z_0|^n
\left(\frac{|z-z_0|}{|z_1-z_0|}\right)^n
\le Mp^n.
$$

The handwritten reminder for $p<1$ uses $z$ in one place. The denominator and the chosen upper bound on $r$ use $z_1$. Since the geometric series $\sum_{n=0}^{\infty}Mp^n$ converges, comparison gives convergence of $\sum_{n=0}^{\infty}|a_n|\,|z-z_0|^n$. Therefore the power series converges absolutely.

**Radius of convergence.** The notes distinguish three cases.

1. If the series converges only at $z=z_0$, then $R=0$.

   ![[Kyle Kabasares - Complex Variables - Convergence set with zero radius.png|**Fig. 126** The only point shown in the convergence set is $z_0$.]]

2. If it converges for every $z$, then $R=\infty$.

   ![[Kyle Kabasares - Complex Variables - Convergence across the whole plane.png|**Fig. 127** Hatching represents convergence throughout the plane.]]

3. If the radius is finite and positive, the series converges absolutely for $|z-z_0|<R$ and diverges for $|z-z_0|>R$. At $|z-z_0|=R$, use a separate convergence test.

   ![[Kyle Kabasares - Complex Variables - Convergence disk of radius five.png|**Fig. 128** The dashed boundary illustrates the finite-radius case with $R=5$.]]

### PDF page 101

**Ratio test.** For $z\ne0$, the ratio of successive terms of $\sum_{n=0}^{\infty}(-1)^n z^n/n!$ gives

$$
\lim_{n\to\infty}
\left|\frac{(-1)^{n+1}z^{n+1}}{(n+1)!}
\frac{n!}{(-1)^n z^n}\right|
=\lim_{n\to\infty}\frac{|z|}{n+1}=0.
$$

The page recalls that the ratio test gives absolute convergence below $1$, divergence above $1$, and is inconclusive at $1$. The series converges at $z=0$ as well, so $R=\infty$.

**Root test.** Apply $\lim_{n\to\infty}\sqrt[n]{|a_n|}$, when the limit exists, to the terms $a_n$ of the series. For $\sum_{n=0}^{\infty}5^n(z-1)^n$, the limit is

$$
\lim_{n\to\infty}|5^n(z-1)^n|^{1/n}=5|z-1|.
$$

It is less than $1$ for $|z-1|<1/5$, giving $R=1/5$.

![[Kyle Kabasares - Complex Variables - Radius one fifth around the center one.png|**Fig. 129** The dashed circle shows the disk centered at $1$ with radius $1/5$.]]

**Derivative of a power series.** If $f(z)=\sum_{n=0}^{\infty}a_n(z-z_0)^n$ has radius $R>0$, including $R=\infty$, then $f$ is infinitely differentiable for $|z-z_0|<R$. Termwise differentiation gives

$$
f^{(k)}(z)=\sum_{n=k}^{\infty}
n(n-1)\cdots(n-k+1)a_n(z-z_0)^{n-k}.
$$

**Example.** With $a_n=n$ and $z_0=0$,

$$
\begin{aligned}
f(z)&=\sum_{n=0}^{\infty}nz^n=z+2z^2+3z^3+\cdots,\\
f'(z)&=\sum_{n=1}^{\infty}n^2z^{n-1}=1+4z+9z^2+\cdots.
\end{aligned}
$$

### PDF page 102

**Power series at the center.** In the formula

$$
f^{(k)}(z)=\sum_{n=k}^{\infty}n(n-1)\cdots(n-k+1)a_n(z-z_0)^{n-k},
$$

the term with $n=k$ is constant, and the terms with $n>k$ vanish at $z=z_0$. The notes mark the constant term with $0^0$ and a side calculation $\lim_{t\to0^+}t^t=1$. Here the factor is $1$ because it is the constant monomial. Thus $f^{(k)}(z_0)=k!a_k$, so

$$
a_k=\frac{f^{(k)}(z_0)}{k!}.
$$

**Example.** Let $f(z)=\sum_{n=0}^{\infty}z^n/n!$. The center is $0$ and the radius of convergence is infinite. Differentiation and reindexing give

$$
f'(z)=\sum_{n=1}^{\infty}\frac{nz^{n-1}}{n!}
=\sum_{n=1}^{\infty}\frac{z^{n-1}}{(n-1)!}
=\sum_{n=0}^{\infty}\frac{z^n}{n!}=f(z).
$$

Therefore

$$
\frac{d}{dz}\bigl(e^{-z}f(z)\bigr)
=e^{-z}f'(z)-e^{-z}f(z)=0.
$$

The second term in the handwriting also carries a prime. The product rule gives the unprimed factor above. Since $f(0)=1$, the constant $e^{-z}f(z)$ equals $1$, and $f(z)=e^z$.

**April 18, 2016. Laurent series**

Suppose $f$ is analytic for $R_1<|z-z_0|<R_2$. Take a positively oriented simple closed contour $C$ in the annulus enclosing $z_0$.

![[Kyle Kabasares - Complex Variables - Contour C between the two annular radii.png|**Fig. 130** The contour $C$ lies between the circles of radii $R_1$ and $R_2$.]]

$$
f(z)=\sum_{n=0}^{\infty}a_n(z-z_0)^n+\sum_{n=1}^{\infty}\frac{b_n}{(z-z_0)^n}.
$$

### PDF page 103

**Laurent coefficients.** The coefficient formulas are

$$
a_n=\frac{1}{2\pi i}\int_C\frac{f(z)}{(z-z_0)^{n+1}}\,dz,
\qquad
b_n=\frac{1}{2\pi i}\int_C f(z)(z-z_0)^{n-1}\,dz.
$$

If $f$ is analytic on the full disk $|z-z_0|<R_2$, including the center, then all $b_n$ vanish by Cauchy–Goursat. In that case $a_n=f^{(n)}(z_0)/n!$, an equality written next to the first coefficient formula on the page.

Two approaches are to evaluate the coefficient integrals directly or rearrange the expression using a known series, such as the geometric series or $e^x=\sum_{n=0}^{\infty}x^n/n!$.

**Example.** Expand $f(z)=1/(1-z)$ about $0$. The pole at $1$ lies on the unit circle.

![[Kyle Kabasares - Complex Variables - Unit circle through the pole at one.png|**Fig. 131** The circle is centered at $0$ and goes through the pole $z=1$.]]

The geometric series gives the Taylor expansion $\frac1{1-z}=\sum_{n=0}^{\infty}z^n$ for $|z|<1$. For the exterior annulus $1<|z|<\infty$, use $|1/z|<1$ there.

$$
\frac1{1-z}=-\frac1z\frac1{1-1/z}
=-\frac1z\sum_{n=0}^{\infty}\left(\frac1z\right)^n
=-\sum_{m=1}^{\infty}z^{-m}.
$$

The boxed result and the numerical check both include the minus sign. A later restatement on the page drops it. At $z=2$, the function gives $1/(1-2)=-1$, and the Laurent series gives $-(1/2)/(1-1/2)=-1$.

### PDF page 104

The preceding exterior series also gives $f(3)=-(1/3)/(1-1/3)=-1/2$.

**Example.** Find the series about $0$ for

$$
f(z)=-\frac1{(z-1)(z-2)}
=\frac1{z-1}-\frac1{z-2}.
$$

The poles divide the problem into $D_1$ with $|z|<1$, $D_2$ with $1<|z|<2$, and $D_3$ with $|z|>2$. Taylor and Laurent series may be added term by term on their common region of convergence.

![[Kyle Kabasares - Complex Variables - Circles through the poles at one and two.png|**Fig. 132** The circles of radii $1$ and $2$ separate the three regions for the expansions centered at $0$.]]

**Region $D_1$.** For $|z|<1$,

$$
\frac1{z-1}=-\frac1{1-z}=-\sum_{n=0}^{\infty}z^n.
$$

The other term expands for $|z|<2$.

$$
-\frac1{z-2}=\frac1{2-z}
=\frac12\frac1{1-z/2}
=\frac12\sum_{n=0}^{\infty}\left(\frac z2\right)^n.
$$

Adding the two gives

$$
f(z)=\sum_{n=0}^{\infty}\left(-1+\frac1{2^{n+1}}\right)z^n,
\qquad |z|<1.
$$

The page also suggests direct coefficient evaluation using $a_n=(2\pi i)^{-1}\int_C f(z)/z^{n+1}\,dz$. The handwritten prefactor omits $i$.

**Region $D_2$.** For $1<|z|<2$, expand the first term in inverse powers because $|1/z|<1$.

$$
\frac1{z-1}=\frac1z\frac1{1-1/z}
=\frac1z\sum_{n=0}^{\infty}\left(\frac1z\right)^n.
$$

### PDF page 105

**Region $D_2$, continued.** Since $|z|<2$, the second term is

$$
-\frac1{z-2}=\frac1{2-z}=\frac12\sum_{n=0}^{\infty}\left(\frac z2\right)^n.
$$

On $1<|z|<2$, combine it with the inverse-power expansion from page 104.

$$
f(z)=\frac1z\sum_{n=0}^{\infty}\left(\frac1z\right)^n+
\frac12\sum_{n=0}^{\infty}\left(\frac z2\right)^n.
$$

The page recalls $a_n=(2\pi i)^{-1}\int_C f(z)/(z-z_0)^{n+1}\,dz$ and the geometric tail $\sum_{n=k}^{\infty}r^n=r^k/(1-r)$ for $|r|<1$, with first term $r^k$.

**April 19, 2016. Office hours**

For $f(z)=1/(1-z)$, the series $\sum_{n=0}^{\infty}z^n$ converges for $|z|<1$.

![[Kyle Kabasares - Complex Variables - Unit disk for the geometric series at zero.png|**Fig. 133** The dashed unit circle bounds the convergence disk centered at $0$.]]

The Taylor coefficients can be computed from the derivatives or by a contour integral.

$$
a_n=\frac{f^{(n)}(0)}{n!}
=\frac1{2\pi i}\int_C\frac{f(z)}{z^{n+1}}\,dz.
$$

Here $f(0)=1$, $f'(0)=1$, and $f''(0)=2$. In general $f^{(n)}(z)=n!(1-z)^{-(n+1)}$, giving $a_n=1$.

**Expansion about $z_0=3$.** The disk in the sketch has radius $2$, reaching from $1$ to $5$ along the real axis. Its condition is $|z-3|<2$, written $|z|<2$ on one line.

![[Kyle Kabasares - Complex Variables - Taylor disk centered at three.png|**Fig. 134** The disk centered at $3$ reaches the pole at $1$ on its boundary.]]

The notes suggest writing the fraction in the form $A/[B-(z-3)]$. The last line gives the factorization that determines the alternating signs in the series.

$$
\begin{aligned}
\frac1{1-z}
&=\frac1{1-3-(z-3)}
=-\frac12\frac1{1+(z-3)/2}\\
&=-\frac12\sum_{n=0}^{\infty}\left(-\frac{z-3}{2}\right)^n
=\sum_{n=0}^{\infty}\frac{(-1)^{n+1}}{2^{n+1}}(z-3)^n.
\end{aligned}
$$

The intermediate series on the page drops the minus sign in the geometric ratio.

### PDF page 106

With $c=z-3$, the preceding factorization reads $1/(-2-c)=1/[-2(1+c/2)]$.

**April 25, 2016. Laurent series**

**Region $D_3$.** Continue the example $f(z)=1/(z-1)-1/(z-2)$. The handwritten product form on this page loses its leading minus sign. For $|z|>2$, expand the second partial fraction using $|2/z|<1$.

$$
-\frac1{z-2}
=-\frac1z\frac1{1-2/z}
=-\frac1z\sum_{n=0}^{\infty}\left(\frac2z\right)^n
=-\sum_{n=0}^{\infty}\frac{2^n}{z^{n+1}}.
$$

Both fractions now expand in inverse powers. Adding them and reindexing gives

$$
f(z)=\sum_{n=0}^{\infty}\frac{1-2^n}{z^{n+1}}
=\sum_{m=1}^{\infty}(1-2^{m-1})z^{-m},
\qquad |z|>2.
$$

The ratio condition and final region are reversed in places in the handwriting. The exterior expansion requires $|2/z|<1$.

**Properties of power series.** Let $f(z)=\sum_{n=0}^{\infty}a_nz^n$ and $g(z)=\sum_{n=0}^{\infty}b_nz^n$ on a common disk $|z|<R$.

$$
\begin{aligned}
f(z)+g(z)&=\sum_{n=0}^{\infty}(a_n+b_n)z^n,\\
f'(z)&=\sum_{n=1}^{\infty}na_nz^{n-1},\\
F(z)&=\sum_{n=0}^{\infty}\frac{a_n}{n+1}z^{n+1},\qquad F'=f,\\
f(z)g(z)&=\sum_{k=0}^{\infty}\left(\sum_{n=0}^k a_n b_{k-n}\right)z^k.
\end{aligned}
$$

The indices in the last two handwritten formulas are inconsistent. The antiderivative includes the contribution $a_0z$, and the product coefficient collects powers with indices adding to $k$.

**Cauchy–Goursat theorem.** If $f$ is analytic on and inside a simple closed contour $C$, then $\int_C f(z)\,dz=0$.

**Isolated singular points.** A singular point is a point where $f$ fails to be analytic. It is isolated if $f$ is analytic on a punctured disk $0<|z-z_0|<\delta$ for some $\delta>0$.

1. For $f(z)=1/z$, the origin is an isolated singularity.
2. For $f(z)=1/\sin(\pi/z)$, the points $z=1/n$ for nonzero integers $n$ are isolated singularities. They accumulate at $0$, so the origin is a nonisolated singularity.

### PDF page 107

In the preceding example $1/\sin(\pi/z)$, for any $\delta>0$ choose $n$ large enough that $1/n<\delta$. This puts a singular point inside the punctured disk around $0$, so $0$ is not isolated.

**Residue at an isolated singularity.** If $z_0$ is an isolated singularity of $f$, the Laurent series on a punctured disk about $z_0$ has the form

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

**Cauchy's residue theorem.** Let $C$ be a positively oriented simple closed curve. If $f$ is analytic on and inside $C$ except for finitely many points $z_1,\ldots,z_n$ inside $C$, then

$$
\int_C f(z)\,dz=2\pi i\sum_{k=1}^n\operatorname{Res}_{z=z_k}f(z).
$$

### PDF page 108

**Proof of the residue theorem.** Use contour deformation to replace the integral on $C$ by the sum of integrals on small, positively oriented contours $C_k$ around the individual singularities.

![[Kyle Kabasares - Complex Variables - Small residue contours inside C.png|**Fig. 135** Each small contour encloses one singularity $z_k$ inside the outer contour $C$.]]

$$
\int_C f(z)\,dz
=\sum_{k=1}^n\int_{C_k}f(z)\,dz
=2\pi i\sum_{k=1}^n\operatorname{Res}_{z=z_k}f(z).
$$

**Principal part.** If $z_0$ is an isolated singularity, the Laurent expansion for $0<|z-z_0|<R$ is

$$
f(z)=\sum_{n=0}^{\infty}a_n(z-z_0)^n+
\underbrace{\left(\frac{b_1}{z-z_0}+\frac{b_2}{(z-z_0)^2}+\cdots\right)}_{\text{principal part}}.
$$

**Types of singularity**

1. If every $b_j=0$, then $z_0$ is a removable singularity.
2. If $b_m\ne0$ and $b_j=0$ for all $j>m$, then $z_0$ is a pole of order $m$. A pole of order $1$ is a simple pole.
3. If infinitely many $b_j$ are nonzero, then $z_0$ is an essential singularity.

**Example.** Classify the singularity at $z=0$ of $f(z)=(e^z-1)/z$. Expand $e^z$ and cancel the constant terms in the numerator.

$$
f(z)=\frac{1}{z}\left(z+\frac{z^2}{2!}+\frac{z^3}{3!}+\cdots\right)
=1+\frac{z}{2!}+\frac{z^2}{3!}+\cdots.
$$

All negative-power coefficients vanish, including $b_1=\operatorname{Res}_{z=0}f(z)=0$. Thus $0$ is a removable singularity.

### PDF page 109

Remove the singularity in the previous example by defining

$$
f(z)=
\begin{cases}
(e^z-1)/z,&z\ne0,\\
1,&z=0.
\end{cases}
$$

**Residues at poles.** An isolated singularity $z_0$ of $f$ is a pole of order $m$ if and only if

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

**Zeros of analytic functions.** A zero of order $m$ at $z_0$ has $f(z_0)=0$ and $f^{(m)}(z_0)\ne0$, with all lower derivatives vanishing. The handwriting gives the condition on the $m$th derivative explicitly. In the example $f(z)=(z-z_0)^m$ has a zero of order $m$ and its reciprocal has a pole of order $m$.

**April 26, 2016. Discussion**

The residue is the Laurent coefficient $b_1$ of $1/(z-z_0)$. The page reviews the three types of isolated singularity.

- Removable if all $b_j=0$, leaving only $\sum_{n=0}^{\infty}a_n(z-z_0)^n$.
- A pole of order $m$ if the largest index with $b_j\ne0$ is $m$.
- Essential if infinitely many $b_j$ are nonzero.

### PDF page 110

**Residue theorem review.** For a positively oriented simple closed contour enclosing the isolated singularities $z_1,\ldots,z_n$,

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

**Additional examples.** The page expands $(z+1)/(z-1)=-(z+1)\sum_{n=0}^{\infty}z^n=-\sum_{n=0}^{\infty}(z^{n+1}+z^n)$ for $|z|<1$ and writes the contour integral in Cauchy integral formula form. The handwritten label “removable singularity” appears next to this example. The table below correctly classifies $z=1$ as a simple pole. The second example factors $1/(z+z^2)=1/[z(1+z)]$.

**April 27, 2016. Lecture**

The lecture recalls the pole criterion $f(z)=g(z)/(z-z_0)^m$. The handwritten formula on this line omits the exponent $m$. The table uses positively oriented contours enclosing the listed poles.

| $f(z)$ | Singular points | Type | Residues | $\int_C f(z)\,dz$ |
| --- | --- | --- | --- | --- |
| $(z+1)/(z-1)$ | $1$ | Simple pole | $2$ | $4\pi i$ |
| $1/[z(1+z)]$ | $0,-1$ | Two simple poles | $1$ at $0$, $-1$ at $-1$ | $0$ |
| $e^{-z}/z^2$ | $0$ | Pole of order $2$ | $-1$ | $-2\pi i$ |

**Theorem.** If $p$ and $q$ are analytic at $z_0$, $p(z_0)\ne0$, and $q$ has a zero of order $m$ at $z_0$, then $p/q$ has a pole of order $m$ there. For example, $(z-2)^2$ has first derivative $2(z-2)$ and second derivative $2$, so its zero at $2$ has order $2$.

For the proof, write $q(z)=(z-z_0)^m g(z)$, where $g$ is analytic and nonzero at $z_0$. Then

$$
\frac{p(z)}{q(z)}=\frac{p(z)/g(z)}{(z-z_0)^m},
$$

and $p/g$ is analytic and nonzero at $z_0$.

### PDF page 111

**Residue of a quotient at a simple pole.** Let $p$ and $q$ be analytic at $z_0$, with $p(z_0)\ne0$, $q(z_0)=0$, and $q'(z_0)\ne0$. Then $p/q$ has a simple pole at $z_0$ and

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

**Applications of residues.** The residue at a simple pole is $\lim_{z\to z_0}(z-z_0)f(z)$. At a pole of order $k$,

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

**L'Hôpital's rule.** If $f$ and $g$ are analytic at $\alpha$, $f(\alpha)=g(\alpha)=0$, and $g'(\alpha)\ne0$, then $\lim_{z\to\alpha}f(z)/g(z)=f'(\alpha)/g'(\alpha)$. The handwriting gives equality of the two values at $\alpha$. The zero common value is needed for this rule.

### PDF page 112

**May 2, 2016. Lecture on applications of residues**

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

**Singularity on the boundary.** The lecture turns to contour integrals when a pole lies on the real axis. Suppose $f$ has a simple pole at $z=x_0$ with residue $B_0$ in its Laurent expansion on $0<|z-x_0|<R_0$. Let $C_\rho$ be the upper half of the circle $|z-x_0|=\rho$, with $0<\rho<R_0$, traversed clockwise.

### PDF page 113

**Limit around a boundary pole.** For the clockwise upper semicircle $C_\rho$ centered at $x_0$,

$$
\lim_{\rho\to0^+}\int_{C_\rho} f(z)\,dz=-\pi i B_0,
$$

where $B_0$ is the residue at the simple pole $x_0$.

![[Kyle Kabasares - Complex Variables - Upper semicircle centered on a real pole.png|**Fig. 136** The small upper semicircle has radius $\rho$ and center $z_0=x_0$ on the real axis.]]

**Proof.** Write $f(z)=g(z)+B_0/(z-x_0)$ on the punctured disk, with $g$ analytic on the full disk. Then

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

**Next example.** The notes set up $\int_{-\infty}^{\infty}x/(x^3-8)\,dx$. The real pole at $x=2$ calls for a principal value in the contour method.

### PDF page 114

**Principal value example, continued.** Set $f(z)=z/(z^3-8)$. The denominator factors as $(z-2)(z^2+2z+4)$, with roots $2$, $z_+=-1+i\sqrt3$, and $z_-=-1-i\sqrt3$.

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

### PDF page 115

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

**May 3, 2016. Discussion**

An isolated singularity $z_0$ is a pole of order $m$ if $f(z)=\phi(z)/(z-z_0)^m$, with $\phi$ analytic and nonzero at $z_0$. The page writes $\operatorname{Res}_{z=z_0}f(z)=\phi(z_0)$, which is the $m=1$ case. For general $m$, use $\phi^{(m-1)}(z_0)/(m-1)!$.

**Example.** The integrand of $\int_0^\infty dx/(x^2+1)^2$ is even, so the integral is half the integral over the full real axis. Set

$$
f(z)=\frac1{(z^2+1)^2}=\frac1{(z+i)^2(z-i)^2}.
$$

![[Kyle Kabasares - Complex Variables - Upper semicircle enclosing the double pole at i.png|**Fig. 141** The upper contour encloses $i$ and leaves $-i$ below the real axis.]]

For the upper pole, write $f(z)=\phi(z)/(z-i)^2$ with $\phi(z)=1/(z+i)^2$. The page sets up $2\pi i\operatorname{Res}_{z=i}f(z)$ for the full real-axis integral as the arc radius tends to infinity.

### PDF page 116

**Double-pole example, continued.** With $\phi(z)=1/(z+i)^2$, the residue at $i$ is $\phi'(i)$. The integral over the positive real axis is

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

### PDF page 117

**Finals review. Laurent series and residues**

**Theorem.** Suppose $f$ is analytic throughout $R_1<|z-z_0|<R_2$. Let $C$ be a positively oriented simple closed contour surrounding $z_0$ and lying in that annulus. Then at every point of the annulus,

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

**Finding a Laurent series.** The page references Churchill and Brown, section 62. For $e^{1/z}$, substitute $1/z$ into $e^z=1+z+z^2/2!+z^3/3!+\cdots$.

$$
e^{1/z}
=\sum_{n=0}^{\infty}\frac1{z^n n!}
=1+\frac1z+\frac1{2!z^2}+\frac1{3!z^3}+\cdots,\qquad 0<|z|<\infty.
$$

### PDF page 118

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

### PDF page 119

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

### PDF page 120

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

### PDF page 121

**More Laurent series review.** The principal part of a Laurent series consists of its negative-power terms.

**Residue theorem.** Suppose $f$ is analytic on a simply connected domain $D$ except at finitely many isolated singularities $z_1,\ldots,z_n$ in $D$. Let $\gamma$ be a positively oriented, piecewise smooth, simple closed curve in $D$ that passes through none of the singularities. Then

$$
\int_\gamma f(z)\,dz=2\pi i\sum_{z_k\ \mathrm{inside}\ \gamma}\operatorname{Res}(f;z_k).
$$

**Proof.** Draw disjoint positively oriented small circles $\gamma_k$ about the singularities inside $\gamma$. Let $\Omega$ be the region inside $\gamma$ and outside the small disks.

![[Kyle Kabasares - Complex Variables - Punctured region Omega inside gamma.png|**Fig. 144** The region $\Omega$ lies between $\gamma$ and the small circles. A singularity drawn outside $\gamma$ contributes no residue.]]

Because $f$ is analytic on $\Omega$ and its boundary, the boundary integral is zero. The notes connect this with Green's theorem and Cauchy's theorem. Since the inner circles have the opposite orientation as components of $\partial\Omega$,

$$
\int_\gamma f(z)\,dz-\sum_k\int_{\gamma_k}f(z)\,dz=0.
$$

The Laurent coefficient formula on each small circle $|w-z_k|=s$ gives $\operatorname{Res}(f;z_k)=(2\pi i)^{-1}\int_{\gamma_k} f(w)\,dw$. Substitution gives the boxed formula with the sum restricted to the enclosed singularities.

**Integrals of rational functions.** The notes begin with the polynomial $p(z)=a_nz^n+a_{n-1}z^{n-1}+\cdots+a_1z+a_0$ of degree $n$, with $a_n\ne0$.

### PDF page 122

**Polynomial facts.** If $p(\alpha)=0$, then $p(z)=(z-\alpha)q(z)$ with $q$ of degree $n-1$. A degree-$n$ polynomial has at most $n$ distinct roots. With leading coefficient $a_n\ne0$,

$$
\lim_{|z|\to\infty}\left|\frac{p(z)}{z^n}\right|
=\lim_{|z|\to\infty}\left|a_n+\frac{a_{n-1}}z+\cdots+\frac{a_0}{z^n}\right|
=|a_n|.
$$

Hence on $|z|=R$ for sufficiently large $R$,

$$
\tfrac12|a_n|R^n\le |p(z)|\le 2|a_n|R^n.
$$

**Rational integrals.** Suppose $P,Q$ are real-valued on the real axis, $Q(x)\ne0$ for all real $x$, and $\deg Q\ge\deg P+2$. To find $\int_{-\infty}^{\infty}P(x)/Q(x)\,dx$, close $[-R,R]$ with the upper semicircle $\gamma_R$.

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

**Next example.** Use $P(z)=z^2$ and $Q(z)=(1+z^2)(4+z^2)$ to evaluate $\int_{-\infty}^{\infty}x^2/[(1+x^2)(4+x^2)]\,dx$.

### PDF page 123

**Rational integral example, continued.** The denominator has degree $4$ and the numerator has degree $2$, so the degree condition holds. For $Q(z)=(1+z^2)(4+z^2)$,

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

**Computing residues.** At a pole of order $m$, write $f(z)=H(z)/(z-z_0)^m$ with $H$ analytic for $|z-z_0|<r$. Its power series is $H(z)=\sum_{k=0}^{\infty}c_k(z-z_0)^k$. Dividing by $(z-z_0)^m$ gives

$$
f(z)=\frac{c_0}{(z-z_0)^m}+\cdots+\frac{c_{m-1}}{z-z_0}
+c_m+c_{m+1}(z-z_0)+\cdots
$$

for $0<|z-z_0|<r$. The terms through $c_{m-1}/(z-z_0)$ have negative powers of $z-z_0$.

The residue is $(2\pi i)^{-1}\int_{|w-z_0|=s}f(w)\,dw$ for a positively oriented circle with $0<s<r$. Substitute the Laurent expansion and consider the contribution of each power separately, distinguishing $j=-1$ from $j\ne-1$ in

$$
\frac1{2\pi i}\int_{|z-z_0|=s}(z-z_0)^j\,dz.
$$

### PDF page 124

**Integrating the Laurent monomials.** Parametrize $|z-z_0|=s$ by $z=z_0+se^{i\theta}$ for $0\le\theta\le2\pi$. For an integer $j\ne-1$,

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

### PDF page 125

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

**Isolated singularities and residues.** At an isolated singularity $z_0$, $f$ is analytic in a punctured disk $0<|z-z_0|<r$ for some $r>0$.

![[Kyle Kabasares - Complex Variables - Punctured disk about an isolated singularity.png|**Fig. 146** The dashed circle of radius $r$ surrounds the excluded point $z_0$.]]

**Removable singularities.** If $|f(z)|$ remains bounded as $z\to z_0$, define

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

### PDF page 126

**Removable singularities, continued.** The function $g$ is analytic on $|z-z_0|<r$ and has a Taylor series $g(z)=b_0+b_1(z-z_0)+b_2(z-z_0)^2+\cdots$. Since $g(z_0)=g'(z_0)=0$, its first two coefficients vanish. Thus

$$
g(z)=b_2(z-z_0)^2+b_3(z-z_0)^3+\cdots.
$$

On the punctured disk,

$$
f(z)=\frac{g(z)}{(z-z_0)^2}=b_2+b_3(z-z_0)+\cdots.
$$

Define $f(z_0)=b_2$. The power series now gives an analytic extension throughout $|z-z_0|<r$, so the singularity is removable.

**Poles.** Suppose $\lim_{z\to z_0}|f(z)|=\infty$. Choose $r>0$ small enough that $|f(z)|>1$ on $0<|z-z_0|<r$.

![[Kyle Kabasares - Complex Variables - Approaching a pole from the punctured disk.png|**Fig. 147** Arrows from several directions point toward the isolated point $z_0$.]]

Then $g=1/f$ is analytic there and satisfies $|g|<1$. By the removable singularity result, $g$ extends analytically to $z_0$, with $g(z_0)=0$ because $|f(z)|\to\infty$. Let $m$ be the order of the zero of $g$. For example, if $f(z)=1/(z-z_0)^3$, then $g(z)=(z-z_0)^3$ and $m=3$.

In general, write $g(z)=(z-z_0)^m h(z)$ with $h$ analytic on the disk and $h(z_0)\ne0$. The reciprocal $g$ is nonzero on the punctured disk, so $h$ is nonzero there as well. Thus $H=1/h$ is analytic on the disk and $H(z_0)\ne0$. Consequently,

$$
f(z)=\frac1{g(z)}=\frac1{(z-z_0)^m h(z)}
=\frac{H(z)}{(z-z_0)^m}.
$$

### PDF page 127

The preceding factorization writes $f$ as an analytic function, nonzero at $z_0$, divided by $(z-z_0)^m$. Therefore $f$ has a pole of order $m$ at $z_0$.

**Residue at $z_0$.** The crossed-out final setup recalls the residue integral for $f$ analytic on $0<|z-z_0|<r$.

$$
\frac1{2\pi i}\int_{|w-z_0|=s}f(w)\,dw,\qquad 0<s<r,
$$

with the circle taken counterclockwise.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\thermal{u}$ | $\unit{K}$ | Temperature | Field in the steady heat example. |
