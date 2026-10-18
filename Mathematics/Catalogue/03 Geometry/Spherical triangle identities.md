---
title: "Spherical triangle identities"
catalogue_ids:
  - "3.4.2"
  - "3.4.2.1"
  - "3.4.2.2"
  - "3.4.2.3"
---

> [!TLDR]
> Spherical sine and cosine rules connect angular sides to vertex angles; spherical excess measures area rather than an error in the angle sum.

## Domains and general properties

Use the Eulerian triangles defined in [[Geometry on a sphere]]. Let angular sides $a,b,c$ oppose interior angles $A,B,C$. All six lie in $(0,\pi)$, and all formulas in this article use radians unless a degree symbol is shown. The sphere radius $R$ converts angular sides into lengths but does not enter the angular identities.

The side conditions are strict triangle inequalities and perimeter less than a full great circle:

$$
|b-c|<a<b+c,\qquad a+b+c<2\pi,
$$

with cyclic inequalities. Equal sides oppose equal angles, and the larger of two sides opposes the larger angle. The angle sum satisfies $\pi<A+B+C<3\pi$. Angle data also have restrictions: each angle must exceed the sum of the other two minus $\pi$. These follow from applying the side conditions to the polar triangle. Three numbers in $(0,\pi)$ with sum greater than $\pi$ do not alone guarantee a triangle.

## Derive the spherical cosine rule

For a short coordinate proof, use a unit sphere and place vertex $C$ at $(0,0,1)$. Place $A=(\sin b,0,\cos b)$ and $B=(\sin a\cos C,\sin a\sin C,\cos a)$. The surface angle at $C$ is the angle between the horizontal tangent directions, so this placement has the intended angle $C$.

For vectors $u,v$, the scalar product $u\cdot v$ is the sum of their coordinate products. It also equals $|u||v|\cos\gamma$, where $\gamma$ is their ordinary central angle. For unit radius vectors to $A,B$, that central angle is side $c$. Equating the two scalar-product calculations gives

$$
\cos c=\cos a\cos b+\sin a\sin b\cos C.
$$

Relabeling gives the other two forms. This is the **cosine rule for sides**. When $C=\pi/2$, it becomes $\cos c=\cos a\cos b$, not $c^2=a^2+b^2$. The familiar plane identity emerges approximately when all angular sides are small.

## Sine rule and the angle cosine rule

Write $x=\cos a$, $y=\cos b$, and $z=\cos c$. Rearranging the side cosine rule gives

$$
\cos A=\frac{x-yz}{\sqrt{1-y^2}\sqrt{1-z^2}}.
$$

Subtract its square from $1$ and simplify the numerator. Dividing by $\sin^2 a=1-x^2$ gives

$$
\frac{\sin^2 A}{\sin^2 a}
=\frac{1-x^2-y^2-z^2+2xyz}{(1-x^2)(1-y^2)(1-z^2)}.
$$

The right side is unchanged by permuting $x,y,z$. All sines are positive in our domain, so positive square roots yield the **sine rule**:

$$
\frac{\sin a}{\sin A}=\frac{\sin b}{\sin B}=\frac{\sin c}{\sin C}.
$$

The sides themselves do not replace their sines. Applying the cosine rule to the polar triangle and using $a'=\pi-A$, $A'=\pi-a$ gives the **cosine rule for angles**:

$$
\cos C=-\cos A\cos B+\sin A\sin B\cos c.
$$

Unlike plane geometry, three valid angles determine all angular sides. A fixed-radius sphere therefore has no freely scalable family with those same angles.

## Excess, area, and a counting proof

Define the spherical excess $E=A+B+C-\pi$. Girard's theorem states that area $K=R^2E$. To see the relation, extend the three edges to great circles and count the double lunes associated with the three vertices. A double lune at angle $A$ has area $4R^2A$. The three selected double lunes cover the sphere once and cover the triangle and its antipodal copy twice more. If each triangle has area $K$, the total is $4\pi R^2+4K$. Therefore $4R^2(A+B+C)=4\pi R^2+4K$, giving the theorem.

For example, the three-right-angle octant has $E=3\pi/2-\pi=\pi/2$, so $K=\pi R^2/2$. For a very small triangle, the excess can be tiny. Replacing the angle sum by $\pi$ would discard precisely the information that measures its spherical area.

## Further formulas: half angles and analogies

Let $s=(a+b+c)/2$. Because of the strict side conditions, $s<\pi$ and $s-a,s-b,s-c$ are positive. Thus the square roots in the half-angle formula are real:

$$
\tan\frac A2=\sqrt{\frac{\sin(s-b)\sin(s-c)}{\sin s\sin(s-a)}}.
$$

To derive it, use $\sin^2(A/2)=(1-\cos A)/2$ with the cosine rule. Sum-to-product identities give numerator $\sin(s-b)\sin(s-c)/(\sin b\sin c)$. The corresponding cosine-half-angle square is $\sin s\sin(s-a)/(\sin b\sin c)$. Divide them and take the positive square root since $0<A/2<\pi/2$.

Napier's analogies are useful rearrangements:

$$
\tan\frac{A+B}{2}=\frac{\cos((a-b)/2)}{\cos((a+b)/2)}\cot\frac C2,
\qquad
\tan\frac{A-B}{2}=\frac{\sin((a-b)/2)}{\sin((a+b)/2)}\cot\frac C2.
$$

They follow by combining half-angle equations with sum-to-product identities. These quotient forms require nonzero denominators. In particular, $A+B$ can exceed $\pi$, so principal inverse tangent alone can choose the wrong half-sum. Retain sine-and-cosine pairs or check the cosine rules afterward.

L'Huilier's formula computes excess directly from sides:

$$
\tan\frac E4=\sqrt{\tan\frac s2\tan\frac{s-a}2\tan\frac{s-b}2\tan\frac{s-c}2}.
$$

It follows from the half-angle identities but requires a longer algebraic derivation. All factors are positive for this domain. Its value selects $0<E/4<\pi/2$. It can avoid subtracting $\pi$ from three nearly plane angles, though numerical error still requires care near degeneracy.

## Worked example

Take $a=b=c=\pi/3$. Symmetry gives $A=B=C$, and the cosine rule yields $1/2=1/4+(3/4)\cos A$. Thus $\cos A=1/3$ and $A=\arccos(1/3)\approx70.5288^\circ$. Its excess is $3\arccos(1/3)-\pi\approx0.551286$. On a radius-$2$ sphere its area is approximately $2.20514$. Equal $60^\circ$ sides do not imply $60^\circ$ angles on a sphere.

## Practice

1. A right spherical triangle has $a=b=\pi/3$ and $C=\pi/2$. Find $\cos c$.
2. On a radius-$3$ sphere, a triangle has angles $80^\circ$, $90^\circ$, and $110^\circ$. Find its area.

## Worked answers

1. Set $\cos C=0$ in the cosine rule: $\cos c=\cos a\cos b=1/4$. Hence $c=\arccos(1/4)$, which is less than $\pi/2$.
2. The excess is $280^\circ-180^\circ=100^\circ=5\pi/9$ radians. Multiply by $R^2=9$ to obtain $K=5\pi$. These angle data also satisfy the polar triangle inequalities.

## Reference

[Rob Johnson, Spherical Trigonometry](https://www.math.ucla.edu/~robjohn/math/spheretrig.pdf) gives full derivations of the trigonometric identities and excess formulas. The coordinate proof and examples above can be followed with school algebra and trigonometry.
