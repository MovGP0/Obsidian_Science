---
title: "Complex limits and derivatives"
catalogue_ids:
  - "14.1"
  - "14.1.1"
  - "14.1.1.1"
  - "14.1.1.2"
  - "14.1.1.3"
  - "14.1.1.4"
---

> [!TLDR]
> A complex limit must agree along every approach path; a complex derivative must give one difference-quotient limit for all directions.

## Definition of a complex function

Read [[06.08 Complex-valued functions]] and [[07.01 Limits]] first. A function $f:D\to\mathbb C$ assigns one output to each input in its stated domain $D\subseteq\mathbb C$. Write $z=x+iy$ and

$$
f(x+iy)=u(x,y)+iv(x,y).
$$

Here $u$ and $v$ are real-valued functions of two real variables. For $f(z)=z^2$, expansion gives $u=x^2-y^2$ and $v=2xy$. For $f(z)=1/z$, the domain must exclude zero. An equation such as $w^2=z$ specifies a relation with two outputs at most inputs; it is not a single-valued function until a choice is made. [[Complex branches and elementary functions]] develops that choice.

An **open set** contains a small disk about each of its points. A **domain**, in the usual terminology of complex analysis, is an open connected set. Connected means that the set is in one piece; an open connected subset of the plane allows a path between any two of its points. Open domains let an increment approach a point from every direction.

## Limit of a complex function

The statement $f(z)\to L$ as $z\to a$ means: for every real tolerance $\varepsilon>0$, there is a distance $\delta>0$ such that

$$
0<|z-a|<\delta,\quad z\in D
\quad\Longrightarrow\quad |f(z)-L|<\varepsilon.
$$

Modulus measures ordinary plane distance. Equivalently, the real and imaginary components must approach the two components of $L$. Testing paths is useful for rejecting a limit: two different path answers disprove it. Testing only the real and imaginary axes cannot prove a general limit, because another curve might give a different answer.

For example, $\overline z/z$ for $z\ne0$ equals $1$ on the real axis and $-1$ on the imaginary axis. Therefore it has no limit at zero. By contrast, $z^2\to0$ because $|z^2|=|z|^2$; choosing $\delta=\sqrt\varepsilon$ controls every path at once.

## Continuity of a complex function

The function is **continuous at $a$** if it is defined there and its limit is $f(a)$. Polynomials are continuous everywhere. Quotients of continuous functions are continuous wherever their denominator is nonzero. Continuity does not mean that the function has a complex derivative: conjugation is continuous, since $|\overline z-\overline a|=|z-a|$, but the next test shows its derivative fails.

## Differentiability of a complex function

At an interior point $a$, define

$$
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}h,
$$

when this limit exists. Division by $h$ removes both its size and direction. A derivative thus says that the local change is multiplication by one complex number:

$$
f(a+h)=f(a)+f'(a)h+o(|h|).
$$

The final term means an error whose size divided by $|h|$ tends to zero. Complex multiplication scales and rotates, so a general stretching that acts differently on two axes cannot be a complex derivative.

For $f(z)=\overline z$, the quotient is $\overline h/h$. It is $1$ for real $h$ and $-1$ for imaginary $h$. Conjugation therefore has no complex derivative at any point. As a real map $(x,y)\mapsto(x,-y)$, it still has ordinary partial derivatives everywhere. These are different notions of differentiability.

## Cauchy–Riemann test

Suppose $u,v$ have continuous first partial derivatives near $a$. Along real increments the derivative must be $u_x+iv_x$. Along imaginary increments it must be $v_y-iu_y$. Equating the components gives

$$
u_x=v_y,\qquad u_y=-v_x.
$$

Under the stated continuity assumption, these **Cauchy–Riemann equations** are also sufficient at $a$. Partial-derivative equalities at one point without a real differentiability condition are not enough in general. A first partial derivative, such as $u_x$, holds $y$ fixed while differentiating with respect to $x$.

## Worked example: a derivative that exists only at zero

Let $f(z)=|z|^2=x^2+y^2$. Its components are $u=x^2+y^2$, $v=0$. The equations require $2x=0$ and $2y=0$, so only zero is possible. At zero, directly calculate

$$
\frac{|h|^2}{h}=\overline h\longrightarrow0.
$$

Thus $f'(0)=0$, but $f$ is not holomorphic on any neighborhood of zero. Existence of a derivative at a single point is weaker than existence throughout an open set.

## Practice

1. Find the derivative of $z^3$ directly from its difference quotient.
2. Decide where $f(x+iy)=x+2iy$ is complex differentiable.

### Worked answers

1. Expansion gives $((z+h)^3-z^3)/h=3z^2+3zh+h^2$. The last two terms tend to zero in modulus along every path, so $f'(z)=3z^2$ for all $z$.
2. Here $u_x=1$ and $v_y=2$. The first Cauchy–Riemann equation fails everywhere, so there is no complex derivative. The map stretches the vertical direction twice as much as the horizontal direction and cannot have a local complex multiplier.
