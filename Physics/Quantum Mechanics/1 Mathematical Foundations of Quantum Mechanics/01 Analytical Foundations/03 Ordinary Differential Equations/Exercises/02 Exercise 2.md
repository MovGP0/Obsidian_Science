---
title: "Second-order equations and a repeated root"
---

> [!TLDR]
> Characteristic roots give exponential or oscillating solutions, while a repeated root adds a polynomial factor.

Chapter 3 — Ordinary Differential Equations · Exercise 2 · Basic level

[[03 Ordinary Differential Equations/08 Exercises|Chapter 3 exercise index]]

## Question

Solve the following second-order ODEs.

**(a)** $y''-5y'+6y=0$, with $y(0)=1$ and $y'(0)=0$.

**(b)** $y''+4y=0$, with $y(0)=0$ and $y'(0)=2$.

**(c)** $y''+2y'+y=0$. This is the critically damped case.

## Worked solution

For a constant-coefficient equation, try $y=\mathrm{e}^{rx}$. Then each derivative contributes a factor $r$. This changes the ODE into a polynomial equation.

### (a) Two distinct real roots

$$
r^2-5r+6=(r-2)(r-3)=0.
$$

The roots are $2$ and $3$, so

$$
y=C_1\mathrm{e}^{2x}+C_2\mathrm{e}^{3x},
\qquad y'=2C_1\mathrm{e}^{2x}+3C_2\mathrm{e}^{3x}.
$$

Apply both initial conditions:

$$
C_1+C_2=1,\qquad 2C_1+3C_2=0.
$$

Subtract twice the first equation from the second. This gives $C_2=-2$, then $C_1=3$. Hence $y=3\mathrm{e}^{2x}-2\mathrm{e}^{3x}$. Its derivative at zero is $6-6=0$, as required.

### (b) Oscillating solutions

$$
r^2+4=0,\qquad r=\pm2\mathrm{i}.
$$

Use the equivalent real basis:

$$
y=C_1\cos(2x)+C_2\sin(2x),
\qquad y'=-2C_1\sin(2x)+2C_2\cos(2x).
$$

At zero, $C_1=0$ and $2C_2=2$. Thus $C_2=1$ and $y=\sin(2x)$. Direct differentiation gives $y''=-4y$.

### (c) Repeated root

$$
r^2+2r+1=(r+1)^2=0.
$$

The root $r=-1$ occurs twice. A second-order equation needs two independent solutions. To obtain the second one, set $y=u(x)\mathrm{e}^{-x}$. Then

$$
y'=(u'-u)\mathrm{e}^{-x},\qquad
y''=(u''-2u'+u)\mathrm{e}^{-x}.
$$

Substitution cancels all terms except $u''\mathrm{e}^{-x}=0$. Thus $u''=0$, so $u=C_1+C_2x$ and

$$
y=(C_1+C_2x)\mathrm{e}^{-x}.
$$

No initial conditions are specified for part (c), so both constants remain free. The repeated real root is the critical-damping case: there is no sine or cosine factor.

## Answer

**(a)** $y=3\mathrm{e}^{2x}-2\mathrm{e}^{3x}$.

**(b)** $y=\sin(2x)$.

**(c)** $y=(C_1+C_2x)\mathrm{e}^{-x}$, with arbitrary constants $C_1,C_2$.
