---
title: "Solve plane triangles"
catalogue_ids:
  - "3.2"
  - "3.2.1"
  - "3.2.1.1"
  - "3.2.1.2"
---

> [!TLDR]
> Right triangles use ratios and Pythagoras; general triangles use sine and cosine rules with explicit checks for ambiguous data.

## Set up the unknowns

Let a nondegenerate plane triangle have angles $A,B,C$ and opposite side lengths $a,b,c$. Use matching lower- and upper-case letters throughout. Angles lie strictly between $0$ and $180^\circ$, sum to $180^\circ$, and the lengths satisfy strict triangle inequalities. A successful calculation must respect all three conditions.

The objective of solving a triangle is to find its missing sides and angles from sufficient independent data. Three arbitrary numbers are not always sufficient. Three angles determine the shape but give no scale; SSA data can determine two shapes. Start by identifying the data pattern rather than selecting a formula by its appearance.

## Right triangles

If $C=90^\circ$, side $c$ is the hypotenuse. From the definitions in [[Circular and hyperbolic geometry]],

$$
\sin A=\frac ac,\qquad \cos A=\frac bc,
\qquad \tan A=\frac ab,
\qquad a^2+b^2=c^2.
$$

The remaining acute angle is $B=90^\circ-A$. For known positive legs, take $c=\sqrt{a^2+b^2}$ and $A=\arctan(a/b)$, whose value is acute. If only an acute angle and a side are known, choose the ratio that includes the known and required sides.

For example, let $b=9$ and $A=30^\circ$. Then $a=b\tan30^\circ=3\sqrt3$ and $c=b/\cos30^\circ=6\sqrt3$. The square check gives $27+81=108=(6\sqrt3)^2$. With $a=5,c=13$ instead, the missing leg is $b=\sqrt{169-25}=12$ and $A=\arcsin(5/13)$. The complementary inverse-sine solution is excluded because $A$ is acute in a right triangle.

## Derive the rules for oblique triangles

An oblique triangle has no right angle. Draw a perpendicular height to the side $b$. Its length is $c\sin A$, even when the foot is on an extension. Its area is therefore $K=bc\sin A/2$. Repeating the calculation on other bases gives

$$
\frac12bc\sin A=\frac12ca\sin B=\frac12ab\sin C.
$$

Divide by $abc/2$ and invert to obtain the **sine rule**:

$$
\frac a{\sin A}=\frac b{\sin B}=\frac c{\sin C}.
$$

For a rule that uses the included angle, put $A=(0,0)$, $B=(c,0)$, and $C=(b\cos A,b\sin A)$ in coordinates; the reused $A$ in the final pair denotes the angle. The squared distance from $B$ to $C$ is

$$
a^2=(b\cos A-c)^2+b^2\sin^2A
=b^2+c^2-2bc\cos A.
$$

This is the **cosine rule**. It reduces to Pythagoras when $A=90^\circ$. Solving it for the angle gives $A=\arccos((b^2+c^2-a^2)/(2bc))$, with the unique value in $(0,180^\circ)$ for valid SSS data.

## Choose a solution route

For SSS, use the cosine rule to find an angle, then another cosine-rule angle, and subtract from $180^\circ$. For SAS, use the included-angle cosine rule to find the third side, then recover the angles. For ASA or AAS, use the angle sum and then the sine rule. These routes have a unique triangle up to reflection when the data are valid.

For SSA, first compute a sine value. If it exceeds $1$, there is no triangle. If it lies strictly between $0$ and $1$, both $B=\arcsin q$ and $B=180^\circ-\arcsin q$ must be tested. Retain only candidates with positive third angle and matching original data. Do not assume the calculator's principal inverse sine is the whole solution.

## Worked example: two valid triangles

Suppose $A=30^\circ$, $a=7$, and $b=10$. The sine rule gives

$$
\sin B=\frac{b\sin A}{a}=\frac57.
$$

Thus $B_1\approx45.5847^\circ$ and $B_2\approx134.4153^\circ$. Both leave a positive third angle: $C_1\approx104.4153^\circ$, $C_2\approx15.5847^\circ$. A direct length calculation confirms the two results. With $c$ unknown, the cosine rule at $A$ gives $49=100+c^2-10\sqrt3c$. Therefore

$$
c=5\sqrt3\pm2\sqrt6.
$$

The two positive values are approximately $13.5592$ and $3.7613$. Both satisfy $|10-7|<c<10+7$. The large value corresponds to the large $C$; this gives a useful pairing check.

## Accuracy and mistakes

Keep exact expressions or guard digits until the last step. Set a calculator's angle mode explicitly. If rounded data make a theoretically unit-bounded cosine slightly greater than $1$, first inspect input precision; do not silently replace a clearly invalid value. Near a flat triangle, small measurement changes can cause large angle changes. Uniqueness of a mathematical solution does not guarantee stability with noisy input.

## Practice

1. Let $b=4$, $c=6$, $A=60^\circ$. Find $a$ and the area exactly.
2. Let $A=40^\circ$, $B=65^\circ$, and $a=8$. Give formulas for $b,c$ and explain why there is one shape and one scale.

## Worked answers

1. The cosine rule gives $a^2=16+36-48(1/2)=28$, so $a=2\sqrt7$. The area is $bc\sin A/2=12(\sqrt3/2)=6\sqrt3$.
2. The third angle is $75^\circ$. The sine rule gives $b=8\sin65^\circ/\sin40^\circ$ and $c=8\sin75^\circ/\sin40^\circ$. Two angles fix similarity, and the stated side $a$ fixes scale. The reflected placement is congruent and is not a second shape.
