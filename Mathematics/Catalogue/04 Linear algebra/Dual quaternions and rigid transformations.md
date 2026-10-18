---
title: "Dual quaternions and rigid transformations"
catalogue_ids:
  - "4.4.3.6"
---

> [!TLDR]
> A unit dual quaternion combines a three-dimensional rotation and translation in an order-sensitive algebra.

## Two different extensions

Read [[Quaternion algebra]] and [[Rotation conventions and quaternions]] first. The word **biquaternion** has more than one use. Quaternions with complex coefficients use a commuting scalar unit whose square is $-1$. Dual quaternions instead use a commuting symbol $\varepsilon$ with $\varepsilon^2=0$ and $\varepsilon\ne0$. These algebras are different. For Euclidean rigid transformations this lesson uses **dual quaternions**, also called dual or Study biquaternions in some texts. An unqualified complex biquaternion should not be substituted into the following formulas.

A dual number $a+\varepsilon b$ multiplies by distribution, with every $\varepsilon^2$ term removed. Thus $(a+\varepsilon b)(c+\varepsilon d)=ac+\varepsilon(ad+bc)$. The same construction with quaternion coefficients gives

$$
Q=q_r+\varepsilon q_d,\quad
QP=q_rp_r+\varepsilon(q_rp_d+q_dp_r).
$$

The order inside each quaternion product matters. The symbol $\varepsilon$ commutes with them, but the coefficients generally do not commute with each other. Eight real coefficients are stored. Constraints will reduce them to the six independent choices of a three-dimensional rigid transformation.

## Encode a rotation and translation

Let $q$ be a unit quaternion and $t$ a pure quaternion for a translation vector. Fix the point transformation $v'=qv\bar q+t$, an active rotation followed by a translation expressed in the output frame. Define

$$
Q=q+\varepsilon\tfrac12tq.
$$

Thus $q_r=q$ and $q_d=\tfrac12tq$. Recover the translation from $t=2q_d\bar q_r$. The constraint on $Q$ is

$$
q_r\bar q_r=1,\qquad
q_r\bar q_d+q_d\bar q_r=0.
$$

The second equation is the Study condition. Its left side is a real scalar equal to twice the four-component dot product $q_r\cdot q_d$. Consequently these are two real constraints on eight coefficients. They guarantee that $2q_d\bar q_r$ has zero scalar part and is a vector translation. Quaternion conjugation is applied coefficientwise here; it is distinct from replacing $\varepsilon$ by $-\varepsilon$.

Do not apply the ordinary sandwich $Qv\bar Q$ to a point and expect the translation to appear correctly. Dual quaternion point embeddings require an additional convention and conjugation. The recovery rule above followed by $v'=qv\bar q+t$ is explicit and sufficient.

## Why multiplication composes motions

Let $Q_1=q_1+\varepsilon t_1q_1/2$ act first and $Q_2=q_2+\varepsilon t_2q_2/2$ act next. Their product is

$$
Q_2Q_1=q_2q_1+
\frac{\varepsilon}{2}(q_2t_1q_1+t_2q_2q_1).
$$

Insert $\bar q_2q_2=1$ in the first dual term. The expression becomes $q_{21}+\varepsilon t_{21}q_{21}/2$, with

$$
q_{21}=q_2q_1,\qquad
t_{21}=q_2t_1\bar q_2+t_2.
$$

This is exactly the result of substituting the first point transformation into the second. The first translation must be rotated into the final frame before the second is added. Adding translations alone would miss this frame change. The inverse motion has rotation $\bar q$ and translation $-\bar q t q$. Algebraically, $Q^{-1}=\bar q-\varepsilon\bar q q_d\bar q$.

## Worked example

Take $q=(1+k)/\sqrt2$, a quarter-turn about $z$, and $t=2i$. Then

$$
q_d=\tfrac12tq=\frac{i-j}{\sqrt2},\qquad
Q=\frac{1+k}{\sqrt2}+\varepsilon\frac{i-j}{\sqrt2}.
$$

Recover the translation: $2q_d\bar q=(i-j)(1-k)=2i$. An input point $v=i$ first rotates to $j$ and then becomes $2i+j$, or $(2,1,0)$. For the inverse, the recovered translation is $-\bar q(2i)q=2j$. Applying the inverse to $2i+j$ rotates it to $i-2j$ and adds $2j$, recovering $i$.

For a composition check, let the first operation be translation by $e_1$ with no rotation, and the second be the quarter-turn above with no translation. The combined translation is $q i\bar q=j$, so the origin ends at $e_2$. Reversing the operations leaves the origin at $e_1$. Rigid transformations are not commutative.

## Limits and numerical use

The pairs $Q$ and $-Q$ encode the same transformation. A linear average of valid dual quaternions need not satisfy both unit constraints. Normalizing only $q_r$ while leaving $q_d$ unchanged generally breaks the encoding. Interpolation or blending therefore needs a method that restores the appropriate constraints and treats the sign choices consistently. Dual quaternions describe rigid transformations; an arbitrary scale or shear is outside this representation.

## Practice

1. Encode a pure translation by $(0,4,0)$ with no rotation. Recover its translation.
2. Is $Q=1+\varepsilon$ a unit dual quaternion for a Euclidean rigid transformation?

## Worked answers

1. Choose $q_r=1$, $t=4j$, so $q_d=2j$ and $Q=1+2\varepsilon j$. Recovery gives $2(2j)\bar1=4j$.
2. Although $q_r$ has norm $1$, the Study condition gives $1\cdot1+1\cdot1=2\ne0$. The supposed translation $2q_d\bar q_r=2$ is scalar, not a three-vector. Thus it fails the required constraint.

## Sources

[Federico Thomas, Approaching dual quaternions from matrix algebra](https://www.iri.upc.edu/publications/show/1463) develops their relation to rigid transformations. [Benjamin Kenwright, A Survey on Dual-Quaternions](https://arxiv.org/abs/2303.14765) provides a wider reference. All encodings above use the active, scalar-first convention stated here.
