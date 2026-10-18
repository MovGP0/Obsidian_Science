---
title: "Exponential form of complex numbers"
catalogue_ids:
  - "1.5.2.4"
---

> [!TLDR]
> The notation eⁱᶿ records a point on the unit circle; complex products add its angles and multiply any positive scale factors.

## Start with the unit circle

Read [[Polar form of complex numbers]] for the meaning of a modulus, an argument, and radians. The number $\cos\theta+i\sin\theta$ has modulus one and points at angle $\theta$. We introduce the compact notation

$$
e^{i\theta}=\cos\theta+i\sin\theta,\qquad \theta\in\mathbb R.
$$

At this entry level, use this equation to define what the new notation means for a purely imaginary exponent. You do not need calculus, an infinite sum, or a logarithm to calculate with it. It records a point in the plane, not a real number raised to an ordinary imaginary count of factors.

The letter $e$ is the base of the natural exponential. Its approximate real value is $2.71828$. Why use the same letter for the circular notation? The notation fits a consistent extension of the real exponential to complex inputs. When that extension is defined independently by a convergent power series, the displayed equation is a theorem called **Euler’s formula**. The proof in [[06.05 Euler’s formula]] is optional advanced reading and uses infinite series. Defining the notation here is not itself a proof of that deeper connection.

## Exponential form

For $z\ne0$, replace the trigonometric bracket in polar form by this notation:

$$
z=r(\cos\theta+i\sin\theta)=re^{i\theta},\qquad r=|z|>0.
$$

This is **exponential form**. The factor $r$ gives distance from the origin; the imaginary exponent gives angle. For example,

$$
e^{i\pi/2}=i,\quad e^{i\pi}=-1,\quad
e^{-i\pi/2}=-i,\quad e^{i2\pi}=1.
$$

In particular, $e^{i\pi}+1=0$. The angle must be in radians when written in this form. Replace $90^\circ$ by $\pi/2$ before placing it in the exponent. Multiplying by $r=0$ gives zero, but zero still has no direction angle.

## Derive the product law from trigonometry

For real angles $\theta,\phi$, multiply the definitions and distribute:

$$
\begin{aligned}
e^{i\theta}e^{i\phi}
&=(\cos\theta+i\sin\theta)(\cos\phi+i\sin\phi)\\
&=(\cos\theta\cos\phi-\sin\theta\sin\phi)\\
&\quad+i(\sin\theta\cos\phi+\cos\theta\sin\phi)\\
&=\cos(\theta+\phi)+i\sin(\theta+\phi)\\
&=e^{i(\theta+\phi)}.
\end{aligned}
$$

The third line uses the sine and cosine angle-addition formulas. Therefore the usual exponent-addition pattern holds for these new symbols. Putting $\phi=-\theta$ gives $e^{i\theta}e^{-i\theta}=1$. Hence division subtracts angles. With positive real $r,s$,

$$
(re^{i\theta})(se^{i\phi})=rs\,e^{i(\theta+\phi)},\qquad
\frac{re^{i\theta}}{se^{i\phi}}=\frac rs e^{i(\theta-\phi)}.
$$

Multiplication by $e^{i\phi}$ rotates a point through $\phi$ without changing its modulus. A positive angle gives a counterclockwise rotation. See [[06.06 Rotations and products]] for the corresponding coordinate calculation.

## Worked example: a product with a simple direction

Calculate $(\sqrt3+i)(1+i)$ by exponential form.

The first factor has modulus $\sqrt{3+1}=2$ and argument $\pi/6$. The second has modulus $\sqrt2$ and argument $\pi/4$. Thus

$$
(\sqrt3+i)(1+i)
=(2e^{i\pi/6})(\sqrt2e^{i\pi/4})
=2\sqrt2e^{i5\pi/12}.
$$

The product has modulus $2\sqrt2$ and argument $5\pi/12$, or $75^\circ$. If Cartesian coordinates are wanted, a direct expansion gives

$$
\sqrt3+\sqrt3i+i+i^2=(\sqrt3-1)+(\sqrt3+1)i.
$$

Both components are positive, in agreement with the first-quadrant angle. Its modulus squared is $(\sqrt3-1)^2+(\sqrt3+1)^2=8$, so its modulus is $2\sqrt2$, as the polar calculation predicted.

## Equal exponential values and common errors

Full turns do not change the point: $e^{i(\theta+2\pi k)}=e^{i\theta}$ for each integer $k$. Therefore equality of complex exponential values does not force the written angles to be identical. For real $\theta,\phi$, they are equal exactly when $\theta-\phi$ is a whole multiple of $2\pi$.

Do not use the product rule for a sum: $e^{i\theta}+e^{i\phi}$ is generally not $e^{i(\theta+\phi)}$. At $\theta=\phi=0$, the first side is $2$ and the second is $1$. Also do not confuse $e^{i\theta}$ with $e^\theta i$. The latter is purely imaginary for real $\theta$, while the former moves around a unit circle.

Continue to [[Integer powers of complex numbers]] to apply repeated multiplication, and to [[All roots of complex numbers]] to reverse it.

## Practice

1. Express $4e^{-i\pi/3}$ in Cartesian form.
2. Calculate $(6e^{i5\pi/6})/(2e^{i\pi/3})$ and give all arguments of the answer.

### Worked answers

1. Use $\cos(-\pi/3)=1/2$ and $\sin(-\pi/3)=-\sqrt3/2$. Multiply both by $4$ to get $2-2\sqrt3i$.
2. Divide the moduli to get $3$ and subtract angles: $5\pi/6-\pi/3=\pi/2$. The quotient is $3e^{i\pi/2}=3i$. All its arguments are $\pi/2+2\pi k$ with integer $k$.
