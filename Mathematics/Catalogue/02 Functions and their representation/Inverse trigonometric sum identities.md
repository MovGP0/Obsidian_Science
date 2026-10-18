---
title: "Inverse trigonometric sum identities"
catalogue_ids:
  - "2.8.5"
  - "2.8.6"
  - "2.8.7"
---

> [!TLDR]
> Sum identities for inverse circular functions require angle-range corrections; applying an inverse to an addition formula alone can select the wrong branch.

## Keep the two original angles

Read [[Principal inverse trigonometric values]] first. Put $\alpha=\arcsin x$ and $\beta=\arcsin y$, with $x,y\in[-1,1]$. Then $\cos\alpha=\sqrt{1-x^2}$ and $\cos\beta=\sqrt{1-y^2}$, both nonnegative. The addition formulas give

$$
S=x\sqrt{1-y^2}+y\sqrt{1-x^2}=\sin(\alpha+\beta),
$$

$$
C=\sqrt{1-x^2}\sqrt{1-y^2}-xy=\cos(\alpha+\beta).
$$

The pair $(C,S)$ records the angle's quadrant. Its sine alone does not. Since each original angle lies between $-\pi/2$ and $\pi/2$, their sum lies in $[-\pi,\pi]$.

## Sum and difference of inverse sines

If $C\ge0$, the sum is in $[-\pi/2,\pi/2]$, and $\alpha+\beta=\arcsin S$. If $C<0$, the sum lies outside that principal interval. Its sign is then the sign of $x+y$, which cannot be zero in this case. Therefore

$$
\arcsin x+\arcsin y=
\begin{cases}
\arcsin S,&C\ge0,\\
\pi-\arcsin S,&C<0,\ x+y>0,\\
-\pi-\arcsin S,&C<0,\ x+y<0.
\end{cases}
$$

The endpoint cases $x=y=1$ and $x=y=-1$ correctly give $\pi$ and $-\pi$. Both have $S=0$, which shows why the sign cannot be inferred from $S$ alone at every endpoint.

For a difference, use $\arcsin x-\arcsin y=\arcsin x+\arcsin(-y)$. Replace $y$ by $-y$ in the same procedure. This gives $S_-=x\sqrt{1-y^2}-y\sqrt{1-x^2}$ and $C_-=\sqrt{1-x^2}\sqrt{1-y^2}+xy$. If $C_-\ge0$, the difference is $\arcsin S_-$. Otherwise use $\pi-\arcsin S_-$ for $x-y>0$, or $-\pi-\arcsin S_-$ for $x-y<0$. This includes the large differences between opposite-sign principal angles.

## Sum and difference of inverse cosines

Now let $\alpha=\arccos x$ and $\beta=\arccos y$, again with $x,y\in[-1,1]$. Their sines are nonnegative. Thus

$$
C_+=xy-\sqrt{1-x^2}\sqrt{1-y^2}
=\cos(\alpha+\beta).
$$

The sum lies in $[0,2\pi]$, while $\arccos$ can return only $[0,\pi]$. To select the right half, observe that $\alpha+\beta\le\pi$ precisely when $\arccos x\le\arccos(-y)$. Since arccosine is decreasing, this is equivalent to $x+y\ge0$. Hence

$$
\arccos x+\arccos y=
\begin{cases}
\arccos C_+,&x+y\ge0,\\
2\pi-\arccos C_+,&x+y<0.
\end{cases}
$$

For the difference, put $C_-=xy+\sqrt{1-x^2}\sqrt{1-y^2}$. Its magnitude is $\arccos C_-$ because the difference lies in $[-\pi,\pi]$. Its sign is positive when $y>x$, negative when $y<x$, and zero when $y=x$. This gives a complete difference formula without hiding a branch assumption.

## Sum and difference of inverse tangents

Let $\alpha=\arctan x$ and $\beta=\arctan y$ for arbitrary real $x,y$. Their cosines are positive. Set $T=x+y$ and $D=1-xy$. Addition gives tangent $T/D$ when $D\ne0$, but the sum can lie outside the inverse-tangent range. The correct formula is

$$
\arctan x+\arctan y=
\begin{cases}
\arctan(T/D),&D>0,\\
\operatorname{sgn}(T)\pi/2,&D=0,\\
\arctan(T/D)+\operatorname{sgn}(T)\pi,&D<0.
\end{cases}
$$

Here $T\ne0$ whenever $D\le0$, so its sign is well-defined and nonzero in the last two cases. The reason is that the cosine of the sum has the sign of $D$, and its sine has the sign of $T$. This pair determines the quadrant. For a difference replace $y$ by $-y$, so $T=x-y$ and $D=1+xy$. The same three cases apply. No real input restrictions beyond those stated are needed.

## Numerical stability and branch checks

In exact arithmetic, the computed sine and cosine pair satisfies $S^2+C^2=1$. Numerical rounding can make an expression such as $C_+$ slightly larger than one in magnitude when the true angle lies near an endpoint. A calculator may then reject its inverse cosine. This is a numerical issue, not permission to change the exact domain. Where available, a two-argument angle function applied to the computed sine and cosine is often a clearer numerical route, followed by reduction to the stated sum interval. For inverse-cosine sums that interval is $[0,2\pi]$, so a negative two-argument angle must have $2\pi$ added. For inverse-sine and inverse-tangent sums, retain the interval $[-\pi,\pi]$ and check endpoint signs from the original angles. In every method, compare the result's quadrant with the two known principal input angles.

## Worked example: where the shortcut fails

Compute $\arctan2+\arctan3$. The tangent quotient is $(2+3)/(1-6)=-1$. Blindly taking the principal inverse would give $-\pi/4$, although both original angles are positive. Here $D=-5<0$ and $T=5>0$, so add $\pi$:

$$
\arctan2+\arctan3=\arctan(-1)+\pi=3\pi/4.
$$

For an inverse-sine example, take $x=y=\sqrt3/2$. Each principal angle is $\pi/3$, so the sum is $2\pi/3$. The addition expression gives $S=\sqrt3/2$, whose principal inverse is only $\pi/3$. But $C=1/4-3/4=-1/2<0$, so the corrected result is $\pi-\pi/3=2\pi/3$. The range check is the essential step in both examples.

## Practice

1. Evaluate $\arccos(-1/2)+\arccos(-1/2)$ with the sum formula.
2. Evaluate $\arctan1-\arctan(-1)$ and explain why a quotient formula alone fails.

## Worked answers

1. We have $C_+=1/4-3/4=-1/2$ and $x+y=-1<0$. Thus the answer is $2\pi-\arccos(-1/2)=2\pi-2\pi/3=4\pi/3$. This is outside the principal arccosine range, as a sum is permitted to be.
2. For the difference, use $T=1-(-1)=2$ and $D=1+1(-1)=0$. The zero-denominator case gives $\pi/2$. Directly, $\pi/4-(-\pi/4)=\pi/2$. The tangent of this angle is undefined, although the original two inverse-tangent values and their difference are defined.
