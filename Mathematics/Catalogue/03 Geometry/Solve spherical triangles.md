---
title: "Solve spherical triangles"
catalogue_ids:
  - "3.4.3"
  - "3.4.3.1"
  - "3.4.3.2"
  - "3.4.3.3"
  - "3.4.3.4"
---

> [!TLDR]
> Solve spherical triangles with angular sine and cosine rules, then check domains and residuals; small arcs and ambiguous data need special care.

## Inputs, outputs, and branches

Read [[Geometry on a sphere]] and [[Spherical triangle identities]] first. Here $a,b,c$ are sides measured as central angles, and $A,B,C$ are opposite interior angles. All are in $(0,\pi)$ for an Eulerian triangle. Surface lengths are $Ra,Rb,Rc$ on a radius-$R$ sphere. Convert degree inputs consistently; area always uses radian excess.

The basic data patterns are SSS, SAS, ASA, AAA, SSA, and AAS. SSS and SAS have unique valid Eulerian solutions up to reflection. AAA and ASA can be converted to side problems through the polar triangle, so they also have a unique solution if the data are admissible. SSA and AAS can be ambiguous. A count of three given elements does not prove either existence or uniqueness.

For SSS, check positive sides less than $\pi$, strict triangle inequalities, and $a+b+c<2\pi$. Then recover each angle with

$$
A=\arccos\left(\frac{\cos a-\cos b\cos c}{\sin b\sin c}\right),
$$

and cyclic forms. The inverse cosine selects an angle in $[0,\pi]$; the strict checks rule out its endpoints. For SAS, find the third side first with the side cosine rule, then use SSS. For AAA, form polar sides $\pi-A,\pi-B,\pi-C$, solve for polar angles, and supplement them to recover the original sides.

## Right spherical triangles

If $C=\pi/2$, the side cosine rule reduces to

$$
\cos c=\cos a\cos b.
$$

The sine rule gives $\sin A=\sin a/\sin c$ and $\sin B=\sin b/\sin c$. These equations alone do not select acute versus obtuse angles. From the cosine rules one can also obtain

$$
\cos A=\frac{\sin b\cos a}{\sin c},
\qquad
\cos B=\frac{\sin a\cos b}{\sin c}.
$$

For example, derive the first by substituting $\cos c=\cos a\cos b$ into $(\cos a-\cos b\cos c)/(\sin b\sin c)$. The numerator becomes $\cos a\sin^2b$. These paired sine and cosine expressions determine the quadrant, including cases with a side longer than $90^\circ$.

Let $a=b=60^\circ$, $C=90^\circ$. Then $c=\arccos(1/4)\approx75.5225^\circ$. Since $\sin c=\sqrt{15}/4$, $\sin A=2/\sqrt5$ and $\cos A=1/\sqrt5$. Thus $A=B=\arctan(2)\approx63.4349^\circ$. The angle sum is approximately $216.8699^\circ$; the excess is positive as expected.

## Oblique triangles and ambiguity

For oblique SAS data, take $a=b=60^\circ$ and $C=60^\circ$. The side cosine rule gives $\cos c=1/4+(3/4)(1/2)=5/8$. Therefore $c=\arccos(5/8)\approx51.3178^\circ$. The angle cosine calculation gives

$$
\cos A=\frac{1/2-(1/2)(5/8)}{(\sqrt3/2)(\sqrt{39}/8)}=\frac3{\sqrt{117}}.
$$

Thus $A=B\approx73.8979^\circ$. The larger equal sides correctly face the larger equal angles.

For SSA, suppose $a,b,A$ are known. The equation $\sin B=\sin b\sin A/\sin a$ supplies up to two candidates, but each needs a full consistency check. Recover $c$ using both sine and cosine information rather than retaining every inverse-sine candidate. For a genuine two-solution example, take $a=60^\circ$, $b=90^\circ$, $A=30^\circ$. The cosine rule at $A$ gives $1/2=(\sqrt3/2)\sin c$, so $c$ can be $\arcsin(1/\sqrt3)$ or its supplement, approximately $35.2644^\circ$ and $144.7356^\circ$. The remaining cosine rules give $B=180^\circ-c$ and $\cos C=2\cos c/\sqrt3$. Both candidates satisfy the strict side conditions and all three rules. Their $C$ values are approximately $19.4712^\circ$ and $160.5288^\circ$, respectively. The distinct shapes are not just reflected placements.

## Spherical curves and distances from coordinates

For two points with latitudes $\varphi_1,\varphi_2$ and longitude difference $\Delta\lambda$, apply the spherical cosine rule to their polar triangle:

$$
\cos\sigma=\sin\varphi_1\sin\varphi_2+
\cos\varphi_1\cos\varphi_2\cos\Delta\lambda.
$$

The shorter great-circle distance is $R\sigma$, where $0\le\sigma\le\pi$. A constant-latitude arc instead has length $R\cos\varphi\,|\Delta\lambda|$ along the selected parallel. Except at the equator, that parallel is not a great circle and is not generally the shortest joining curve.

For example, two points at latitude $60^\circ$ separated by $90^\circ$ of longitude have $\cos\sigma=3/4$. Their shorter distance is $R\arccos(3/4)\approx0.722734R$. The parallel arc has length $R(1/2)(\pi/2)=\pi R/4\approx0.785398R$, which is longer. A **small circle** more generally consists of points at fixed angular distance $\rho$ from an axis pole. Its radius in its own plane is $R\sin\rho$ and its circumference is $2\pi R\sin\rho$.

## Accuracy checks

For very small $\sigma$, the cosine is close to $1$, so inverse cosine can lose relative accuracy. An equivalent haversine formula is

$$
h=\sin^2\frac{\varphi_2-\varphi_1}{2}
+\cos\varphi_1\cos\varphi_2\sin^2\frac{\Delta\lambda}{2},
\qquad
\sigma=2\operatorname{atan2}(\sqrt h,\sqrt{1-h}).
$$

Here $\operatorname{atan2}(y,x)$ selects the quadrant from both arguments. The formula follows by substituting $\cos\sigma=1-2\sin^2(\sigma/2)$ into the coordinate cosine rule. Roundoff can put $h$ slightly outside $[0,1]$; investigate input accuracy before clamping a tiny numerical excess. Near antipodal endpoints, direction is poorly determined and exactly antipodal points have no unique shortest great circle. Keep guard digits and substitute a computed triangle back into all three cosine rules.

## Practice

1. A right spherical triangle has $a=120^\circ$, $b=60^\circ$, and $C=90^\circ$. Find $c$ and decide whether $A$ is acute or obtuse.
2. Two points on the equator differ by $40^\circ$ longitude on a radius-$9$ sphere. Find the shorter arc length and the chord length.

## Worked answers

1. The right rule gives $\cos c=(-1/2)(1/2)=-1/4$, so $c=\arccos(-1/4)$. Also $\cos A=\sin b\cos a/\sin c<0$. With $0<A<180^\circ$, this means $A$ is obtuse. In fact $\cos A=-1/\sqrt5$, giving $A\approx116.5651^\circ$.
2. On the equator the shorter longitude difference is the central angle $\sigma=40\pi/180=2\pi/9$. The arc length is $9(2\pi/9)=2\pi$. The chord length is $18\sin20^\circ$. A chord is a straight interior segment and is shorter than the nonzero surface arc.

## References

[MIT, Modern Navigation lecture 4](https://ocw.mit.edu/courses/12-215-modern-navigation-fall-2006/resources/12_215_lec04/) derives coordinate and bearing relations. [Rob Johnson's spherical trigonometry notes](https://www.math.ucla.edu/~robjohn/math/spheretrig.pdf) give independent forms for checking triangle calculations.
