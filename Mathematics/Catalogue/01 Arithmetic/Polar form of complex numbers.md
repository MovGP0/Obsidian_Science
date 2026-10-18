---
title: "Polar form of complex numbers"
catalogue_ids:
  - "1.5.2.3"
---

> [!TLDR]
> Polar form describes a complex number by a distance and an angle; keep the quadrant and the angle convention when converting from coordinates.

## Distance and direction instead of coordinates

In [[Complex numbers and the plane]], $z=x+yi$ identifies the point $(x,y)$. This is called Cartesian or rectangular form. A second description gives the distance $r$ from the origin and a direction angle $\theta$. For a nonzero number,

$$
r=|z|=\sqrt{x^2+y^2}>0.
$$

Measure the angle counterclockwise from the positive real axis. A clockwise angle is negative. By the definitions of sine and cosine on a circle,

$$
x=r\cos\theta,\qquad y=r\sin\theta.
$$

Substitute these into $x+yi$ to get the **trigonometric form**, also called **polar form**:

$$
z=r(\cos\theta+i\sin\theta).
$$

Thus Cartesian form gives two signed coordinates, while polar form gives a positive distance and an angle. They describe the same number, not different kinds of number. The identity $\cos^2\theta+\sin^2\theta=1$ checks the modulus: $x^2+y^2=r^2$.

## Radians and full turns

A radian measures angle as arc length divided by radius. A full circle has circumference $2\pi r$, so one full turn is $2\pi$ radians. Therefore $180^\circ=\pi$, $90^\circ=\pi/2$, and $60^\circ=\pi/3$. Multiply a degree measure by $\pi/180$ to convert it to radians. No physical length unit remains in this ratio.

One point has many direction angles because you can add full turns. If $\theta$ is an **argument** of $z$, then all its arguments are

$$
\theta+2\pi k,\qquad k\in\mathbb Z.
$$

The symbol $\mathbb Z$ means the integers, including zero and negative integers. A **principal argument** is one selected angle. In this lesson we use $-\pi<\operatorname{Arg}z\le\pi$. Under this convention, the negative real axis has argument $\pi$. The number zero has no argument, because no direction is selected at the origin. Although $0(\cos\theta+i\sin\theta)=0$ for every $\theta$, those expressions do not define an argument of zero.

## Convert Cartesian form to polar form

First find the modulus. Next check the signs of both coordinates. If $x\ne0$, the ratio $y/x$ gives $\tan\theta$, but it does not identify the quadrant: opposite points have the same ratio.

For nonzero coordinates, find the acute reference angle $\beta=\arctan(|y/x|)$, between $0$ and $\pi/2$. Select the principal argument from the signs:

| Signs of $(x,y)$ | Principal argument |
| --- | --- |
| $(+,+)$ | $\beta$ |
| $(-,+)$ | $\pi-\beta$ |
| $(-,-)$ | $-\pi+\beta$ |
| $(+,-)$ | $-\beta$ |

For an axis point, use its direction directly: positive real $0$, positive imaginary $\pi/2$, negative real $\pi$, and negative imaginary $-\pi/2$. A calculator function called `atan2(y,x)` can do the quadrant selection; check its angle units and endpoint convention.

## Worked example: a point in the second quadrant

Convert $z=-\sqrt3+i$ to polar form, then convert back.

The modulus is

$$
r=\sqrt{(-\sqrt3)^2+1^2}=\sqrt{3+1}=2.
$$

The reference angle satisfies $\tan\beta=1/\sqrt3$, so $\beta=\pi/6$. The real part is negative and the imaginary part is positive. The point is in the second quadrant, and $\theta=\pi-\pi/6=5\pi/6$. Hence

$$
z=2\left(\cos\frac{5\pi}{6}+i\sin\frac{5\pi}{6}\right).
$$

To convert back, use $\cos(5\pi/6)=-\sqrt3/2$ and $\sin(5\pi/6)=1/2$. Multiplication by $2$ gives $-\sqrt3+i$, as required. All arguments are $5\pi/6+2\pi k$. A direct calculation of $\arctan(y/x)=-\pi/6$ would point to the opposite quadrant and give a wrong answer.

## Why this representation helps

Large products and powers become easier because multiplication combines directions as angles. For nonzero $z=r(\cos\theta+i\sin\theta)$ and $w=s(\cos\phi+i\sin\phi)$, distribution and the angle-addition formulas give

$$
zw=rs\bigl(\cos(\theta+\phi)+i\sin(\theta+\phi)\bigr).
$$

The real part comes from $rs(\cos\theta\cos\phi-\sin\theta\sin\phi)$; the imaginary part comes from $rs(\sin\theta\cos\phi+\cos\theta\sin\phi)$. Thus multiply the moduli and add the angles. This result prepares the shorter notation in [[Exponential form of complex numbers]]. For more polar geometry, see [[06.04 Polar representation]].

## Practice

1. Find the polar form of $-2-2i$ with the principal argument used in this article.
2. Convert $6(\cos(-\pi/6)+i\sin(-\pi/6))$ to Cartesian form and check its modulus.

### Worked answers

1. The modulus is $\sqrt{4+4}=2\sqrt2$. The reference angle is $\pi/4$, and both coordinates are negative. Thus the principal argument is $-\pi+\pi/4=-3\pi/4$. The result is $2\sqrt2(\cos(-3\pi/4)+i\sin(-3\pi/4))$.
2. Cosine is $\sqrt3/2$ and sine is $-1/2$. The result is $3\sqrt3-3i$. Its modulus is $\sqrt{27+9}=6$, which agrees with the polar radius.
