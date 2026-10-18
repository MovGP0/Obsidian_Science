---
title: "All roots of complex numbers"
catalogue_ids:
  - "1.5.3.6"
---

> [!TLDR]
> A nonzero complex number has n distinct nth roots; add full turns before dividing its argument to obtain every root.

## The equation to solve

An **nth root** of a number $z$ is a number $w$ that satisfies $w^n=z$. Here $n$ is a positive integer. The word root refers to a solution of this equation, not necessarily to one selected value of a root symbol. For example, both $2$ and $-2$ solve $w^2=4$, although $\sqrt4$ conventionally means $2$.

This lesson uses the polar representation and integer-power rule from [[Polar form of complex numbers]] and [[Integer powers of complex numbers]]. For $z\ne0$, write $z=re^{i\theta}$, where $r>0$ and $\theta$ is any argument. Write a proposed root as $w=\rho e^{i\alpha}$, with $\rho>0$. Raising it to the nth power gives

$$
w^n=\rho^ne^{in\alpha}.
$$

To equal $z$, it needs the same modulus and a direction that differs by a whole number of full turns. Thus

$$
\rho^n=r,\qquad n\alpha=\theta+2\pi k,
\quad k\in\mathbb Z.
$$

The positive real root gives $\rho=r^{1/n}$. Divide the angle equation by $n$ to obtain all roots:

$$
w_k=r^{1/n}\left(\cos\frac{\theta+2\pi k}{n}
+i\sin\frac{\theta+2\pi k}{n}\right),
\qquad k=0,1,\ldots,n-1.
$$

Equivalently, write the bracket as $e^{i(\theta+2\pi k)/n}$. The root modulus is $r^{1/n}$, not $r/n$.

## Why exactly n roots?

The equations for $\rho$ and $\alpha$ are necessary for every root, so none are missed by this method. Increasing $k$ by $n$ adds $2\pi$ to the root angle and repeats the same point. The $n$ listed angles differ by $2\pi/n$; no two of them differ by a whole full turn. They therefore give $n$ distinct points.

All roots lie on a circle of radius $r^{1/n}$. Consecutive roots have the same angle separation. For $n\ge3$, they form a regular polygon. For $n=2$, they are opposite points; for $n=1$, there is just the original number.

The **roots of unity** solve $w^n=1$. Their radius is one. For fourth roots, the angles are $0,\pi/2,\pi,3\pi/2$, so the roots are $1,i,-1,-i$.

![[arithmetic-complex-fourth-roots.svg|**Fig. A.complex.2** The four fourth roots of unity form a square on the unit circle. Multiplication by i moves each root one quarter turn counterclockwise.]]

In Fig. A.complex.2, raising any marked point to the fourth power multiplies its angle by four. The result is a whole number of full turns, so each fourth power is $1$.

## Worked example: every cube root of −8

Use $-8=8e^{i\pi}$. The positive root of the modulus is $8^{1/3}=2$. The three angles are

$$
\begin{aligned}
\alpha_0&=(\pi+0)/3=\pi/3,\\
\alpha_1&=(\pi+2\pi)/3=\pi,\\
\alpha_2&=(\pi+4\pi)/3=5\pi/3.
\end{aligned}
$$

Convert each to Cartesian form:

$$
\begin{aligned}
w_0&=2(1/2+i\sqrt3/2)=1+i\sqrt3,\\
w_1&=2(-1+0i)=-2,\\
w_2&=2(1/2-i\sqrt3/2)=1-i\sqrt3.
\end{aligned}
$$

Check the first root directly. Its square is $1+2i\sqrt3-3=-2+2i\sqrt3$. Multiplying once more gives

$$
(-2+2i\sqrt3)(1+i\sqrt3)
=-2-2i\sqrt3+2i\sqrt3-6=-8.
$$

The second has cube $(-2)^3=-8$. The third has the opposite imaginary signs in this calculation, which again cancel, leaving $-8$. Therefore all three work. Dividing only the argument $\pi$ by three would have found only the first root.

## Zero, principal values, and a useful distinction

If $z=0$, the equation $w^n=0$ has only one distinct solution, $w=0$. A nonzero $w$ would have positive modulus and therefore a positive powered modulus, which cannot be zero. The polar argument formula does not apply at zero.

For nonzero $z$, a calculator can return only one selected root, often called the principal root. With $\operatorname{Arg}z\in(-\pi,\pi]$, the selection $r^{1/n}e^{i\operatorname{Arg}z/n}$ is a common convention. This selection is not the complete solution set. There are also different conventions: the real cube root of $-8$ is $-2$, while the complex principal selection under this argument convention is $1+i\sqrt3$. State which question you are answering. See [[06.07 Roots]] for further root examples.

## Practice

1. Find all fourth roots of $16$ and check a nonreal root.
2. Find both square roots of $3+4i$ by writing $w=a+bi$ with real $a,b$.

### Worked answers

1. The modulus is $16^{1/4}=2$, and the four angles are $0,\pi/2,\pi,3\pi/2$. The roots are $2,2i,-2,-2i$. For example, $(2i)^4=16i^4=16$.
2. Expand: $w^2=(a^2-b^2)+2abi$. Equality gives $a^2-b^2=3$ and $2ab=4$. Also $|w|^2=|3+4i|=5$, so $a^2+b^2=5$. Adding the two square equations gives $2a^2=8$, hence $a=2$ or $a=-2$. From $ab=2$, the corresponding $b$ values are $1$ and $-1$. Thus $w=2+i$ or $w=-2-i$. Squaring either gives $3+4i$.
