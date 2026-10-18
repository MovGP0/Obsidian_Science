---
title: "Unit-circle function graphs"
catalogue_ids:
  - "2.7"
  - "2.7.1"
  - "2.7.1.1"
  - "2.7.1.2"
---

> [!TLDR]
> Sine and cosine are unit-circle coordinates; tangent, cotangent, secant, and cosecant are their quotients or reciprocals with explicit excluded angles.

## Build the definitions from an angle

Use [[04.04 Angular measure]] if radians are new. A full turn is $2\pi$ radians. A positive angle turns counterclockwise from the point $(1,0)$ on the unit circle. A negative angle turns clockwise. Define its endpoint as $(\cos x,\sin x)$. Since points on the unit circle satisfy the equation $u^2+v^2=1$,

$$
\cos^2x+\sin^2x=1.
$$

The coordinate definition works in every quadrant and for angles beyond one turn. Triangle ratios are the acute-angle version of this definition, not a restriction to acute inputs. All angles in the formulas below use radians.

![[catalogue-ch02a-unit-circle.svg|**Fig. C.ch02a.3** The point at angle θ has horizontal coordinate cos θ and vertical coordinate sin θ; the radius has length one.]]

Fig. C.ch02a.3 shows a first-quadrant angle so both coordinates are positive. Reflection across the horizontal axis reverses the sign of sine and preserves cosine. Thus sine is odd and cosine even. One full turn returns to the same point, so both have period $2\pi$.

## Domains, ranges, and poles

Sine and cosine have domain $\mathbb R$ and range $[-1,1]$. Their standard values follow from the circle: at $0,\pi/2,\pi,3\pi/2$, the endpoint is respectively $(1,0),(0,1),(-1,0),(0,-1)$. The unit square diagonal gives $\sin(\pi/4)=\cos(\pi/4)=\sqrt2/2$. An equilateral triangle split in half gives $\sin(\pi/6)=1/2$ and $\cos(\pi/6)=\sqrt3/2$.

The remaining circular functions are

$$
\tan x=\frac{\sin x}{\cos x},\qquad
\cot x=\frac{\cos x}{\sin x},\qquad
\sec x=\frac1{\cos x},\qquad
\csc x=\frac1{\sin x}.
$$

Tangent and secant exclude $x=\pi/2+k\pi$; cotangent and cosecant exclude $x=k\pi$, where $k$ is an integer. Tangent and cotangent take all real output values and have fundamental period $\pi$. Secant and cosecant have range $(-\infty,-1]\cup[1,\infty)$ and fundamental period $2\pi$. Their gaps follow from taking reciprocals of nonzero numbers of magnitude at most one.

On $(-\pi/2,\pi/2)$, tangent increases from $-\infty$ to $+\infty$. The quotient of the two circle coordinates can have arbitrarily large magnitude even though each coordinate stays bounded. On $(0,\pi)$, cotangent decreases from $+\infty$ to $-\infty$. Use separate branches around poles; do not connect them with a vertical line that would assign infinitely many outputs to one input.

## Scale and translate a sine graph

For $f(x)=A\sin(B(x-h))+D$ with $A,B\ne0$, the midline is $y=D$, amplitude is $|A|$, period is $2\pi/|B|$, and range is $[D-|A|,D+|A|]$. The shift $h$ locates the reference input where the argument is zero. In the form $A\sin(Bx+C)+D$, factor to find $h=-C/B$. The number $C$ by itself is an angle offset, not a horizontal displacement.

These parameters describe mathematical periodic functions. No physical unit or time interpretation is required. A cosine graph follows the same scale rules. Tangent has an input period and output scale, but no finite amplitude because it is unbounded.

## An angle unit changes a small-angle formula

For $0<x<\pi/2$ in radians, geometric comparisons on the unit circle give $\sin x<x<\tan x$. Dividing and using positivity gives $\cos x<\sin x/x<1$. As $x\to0$, cosine tends to one, so the squeeze theorem gives $\sin x/x\to1$; oddness covers the negative side. If the input is measured numerically in degrees, the corresponding limit is instead $\pi/180$, because one degree equals $\pi/180$ radians. Angle units matter in formulas involving the input itself, even when unit-circle values can be calculated in either convention.

## Worked example: exact graph landmarks

Let $f(x)=2\cos(3(x-\pi/6))-1$. The amplitude is two, the midline minus one, the range $[-3,1]$, and the period $2\pi/3$. A quarter-period step is $\pi/6$. Starting at $x=\pi/6$, the cosine arguments are $0,\pi/2,\pi,3\pi/2,2\pi$, so the five outputs are $1,-1,-3,-1,1$.

To find its zeros, solve $\cos(3(x-\pi/6))=1/2$. Circle angles giving this coordinate are $\pm\pi/3+2k\pi$. Hence

$$
x=\frac\pi6\pm\frac\pi9+\frac{2k\pi}3,\qquad k\in\mathbb Z.
$$

The two families per period must both be retained. A single calculator inverse-cosine value gives only one principal angle, not the whole solution set. [[Principal inverse trigonometric values]] explains that difference.

## Practice

1. Give the domain and range of $g(x)=\sec x$, and calculate $g(2\pi/3)$.
2. Find amplitude, period, midline, and range of $h(x)=-4\sin(2x+\pi)+3$.

## Worked answers

1. Exclude $x=\pi/2+k\pi$, where cosine is zero. The range is $(-\infty,-1]\cup[1,\infty)$. Since $\cos(2\pi/3)=-1/2$, its reciprocal is minus two.
2. The amplitude is four and the period is $\pi$. The midline is three and the range is $[3-4,3+4]=[-1,7]$. Factoring the argument as $2(x+\pi/2)$ gives the horizontal shift $-\pi/2$. The negative output coefficient reflects the wave across its midline.
