---
title: "Evolutes involutes and envelopes"
catalogue_ids:
  - "3.6.1.5"
  - "3.6.1.6"
---

> [!TLDR]
> An evolute traces curvature centers, an involute unwinds tangents, and an envelope is tangent to a changing family of curves.

## From a curve to its curvature centers

Read [[Plane curves tangents and curvature]] first. Let a regular oriented plane curve have unit tangent $T$, left unit normal $N$, and nonzero signed curvature $\kappa_s$. Its curvature center is

$$
C=r+\frac{N}{\kappa_s}.
$$

The **evolute** is the locus of these centers. Each center lies on the original curve's normal line, at signed distance $1/\kappa_s$. An evolute need not be regular. A circle has all centers at one point, so its evolute collapses to that point. At zero curvature the finite-center formula fails. Tumarkin's [plane-curve lecture notes](https://www.maths.dur.ac.uk/users/pavel.tumarkin/past/fall16/DG/outline_term1_3.pdf) give this construction and its regularity conditions.

For a graph $r(x)=(x,f(x))$ with $f''\ne0$, insert $N=(-f',1)/\sqrt{1+f'^2}$ and $\kappa_s=f''/(1+f'^2)^{3/2}$:

$$
C(x)=\left(x-\frac{f'(1+f'^2)}{f''},\ 
f+\frac{1+f'^2}{f''}\right).
$$

For $f=x^2$, this becomes $C(x)=(-4x^3,1/2+3x^2)$. At $x=0$ its derivative vanishes. The evolute has a cusp at $(0,1/2)$ although the parabola is regular there. The original parabola has its smallest radius of curvature there.

## Involutes and unwinding

Use arc length $s$ along a regular curve $r(s)$, so $r'=T$. For a fixed constant $s_0$, define

$$
I(s)=r(s)-(s-s_0)T(s).
$$

The tangent segment has length $|s-s_0|$. It is the idealized shape traced by the free end of a taut string unwound from the original curve. Different constants give different involutes. Differentiate:

$$
I'=T-T-(s-s_0)\kappa_sN=-(s-s_0)\kappa_sN.
$$

Thus the involute's tangent is parallel to the original normal, where $(s-s_0)\kappa_s\ne0$. Its normal is parallel to the original tangent. This explains why the original curve is the evolute of its regular involute branches. At the starting point $s=s_0$ the derivative vanishes, so a cusp or other degeneracy requires separate examination.

For a circle $r(t)=(R\cos t,R\sin t)$, increasing $t$ gives $s=Rt$ from $t=0$ and $T=(-\sin t,\cos t)$. Its involute is

$$
I(t)=R(\cos t+t\sin t,\ \sin t-t\cos t).
$$

For $t>0$, $I'=Rt(\cos t,\sin t)$, which is radial and hence perpendicular to the circle tangent. This exact derivative checks the geometric construction.

## Envelopes of curve families

A family $F(x,y,a)=0$ varies with a parameter $a$. An **envelope** is a curve tangent to members of the family at changing contact points. If a differentiable contact curve is $(x(a),y(a))$, differentiation of $F=0$ gives $F_xx'+F_yy'+F_a=0$. Tangency to the member means $F_xx'+F_yy'=0$. Therefore contact candidates satisfy

$$
F(x,y,a)=0,\qquad F_a(x,y,a)=0.
$$

Solve these together and eliminate $a$ if useful. This is a candidate method, not a guarantee. Check that each member is regular at contact, that the candidate trace is a curve, and that tangency actually holds. For example $F=(y-a)^2=0$ has $F_a=0$ automatically on every horizontal member because the equation is repeated; it does not produce an envelope of all those lines. Replace it by the equivalent regular family $y-a=0$ to see $F_a=-1$ and no solution.

## Worked example: a family of tangent lines

Consider $F=y-ax+a^2=0$, or $y=ax-a^2$. Differentiate with respect to the family parameter: $F_a=-x+2a$. Thus $a=x/2$, and substitution gives $y=x^2/4$. Check the contact point of the member $a$: it is $(2a,a^2)$, which lies on the parabola and line. The parabola derivative there is $x/2=a$, exactly the line slope. Hence the candidate is the envelope.

![[catalogue-ch03b-envelope.svg|**Fig. C.ch03b.3** Lines y = ax − a² touch the parabola y = x²/4 at (2a, a²). Changing a moves the contact point along the envelope.]]

At $a=1$, the contact point is $(2,1)$ and the line is $y=x-1$. Their difference is $x^2/4-x+1=(x-2)^2/4$, which has a double zero. This algebraic contact confirms tangency without relying on a drawing.

## Practice

1. Find the curvature center of $y=x^2$ at $x=1$.
2. Find and verify an envelope for the lines $y=2ax-a^2$.

## Worked answers

1. Use $C(x)=(-4x^3,1/2+3x^2)$ to get $(-4,7/2)$. The displacement from $(1,1)$ is $(-5,5/2)$, perpendicular to tangent direction $(1,2)$ since their dot product is zero.
2. Set $F=y-2ax+a^2$. Then $F_a=-2x+2a=0$ gives $a=x$. Substitution gives $y=x^2$. At the contact point $(a,a^2)$ its slope is $2a$, equal to the member's slope.
