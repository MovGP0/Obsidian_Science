---
title: "Absolute values and triangle bounds"
catalogue_ids:
  - "1.4.2"
  - "1.4.2.1"
  - "1.4.2.2"
---

> [!TLDR]
> Absolute values measure distance, and triangle bounds limit a sum or difference even when its exact value is unknown.

## Absolute value as distance

For a real number $a$, its **absolute value** is its distance from zero:

$$
|a|=\begin{cases}a,&a\ge0,\\-a,&a<0.\end{cases}
$$

Thus $|5|=5$, $|-5|=5$, and $|0|=0$. Absolute value is always nonnegative. It satisfies $|-a|=|a|$, $|ab|=|a||b|$, and $|a|^2=a^2$. The distance between real numbers $a$ and $b$ is $|a-b|$. The order of the two points does not matter because $|a-b|=|b-a|$.

Special inequalities give useful bounds without calculating an exact answer. The triangle inequality is a first example. Other tools, such as [[Inequalities between means]] and [[Cauchy-Schwarz inequality]], put bounds on products and sums of products.

## Triangle inequality

For all real $a,b$,

$$
|a+b|\le |a|+|b|.
$$

To derive it, start with $-|a|\le a\le|a|$ and $-|b|\le b\le|b|$. Add corresponding sides:

$$
-(|a|+|b|)\le a+b\le |a|+|b|.
$$

A number between $-M$ and $M$ has absolute value at most $M$, so the result follows. Equality holds exactly when $a$ and $b$ do not have opposite nonzero signs; equivalently, $ab\ge0$. If they point in opposite directions, part of one step cancels part of the other.

![[arithmetic-inequalities-triangle-steps.svg|**Fig. A.inequalities.1** A step of +5 followed by a step of −3 travels a total distance of 8 but finishes only 2 from the start.]]

Fig. A.inequalities.1 explains why the absolute value of a sum can be smaller than the sum of the absolute values. Repeat the two-term rule to obtain

$$
|a_1+\cdots+a_n|\le |a_1|+\cdots+|a_n|.
$$

Here $n$ is a positive integer and each $a_i$ is real. The subscript $i$ labels the terms; it is not a power. With three or more terms, equality holds when all nonzero terms have the same sign.

## Bounds for a difference

Apply the triangle inequality to $a+(-b)$ to get the upper bound $|a-b|\le|a|+|b|$. A lower bound follows by writing $a=(a-b)+b$:

$$
|a|\le |a-b|+|b|\quad\Longrightarrow\quad |a|-|b|\le|a-b|.
$$

Interchange $a$ and $b$ to get $|b|-|a|\le|a-b|$. Together these statements give the **reverse triangle inequality**:

$$
\bigl||a|-|b|\bigr|\le|a-b|\le|a|+|b|.
$$

For real numbers the lower bound is an equality when $ab\ge0$; the upper bound is an equality when $ab\le0$. If one number is zero, both are equalities. Absolute value signs cannot normally be distributed over subtraction. For $a=2,b=5$, the expression $|a|-|b|=-3$ is negative, whereas $|a-b|=3$.

## Worked example: unknown signs

Suppose $|a|=7$ and $|b|=4$. Without knowing their signs, find bounds on $|a-b|$.

1. Use the reverse triangle inequality for the lower bound: $|7-4|=3$.
2. Use the triangle inequality for the upper bound: $7+4=11$.
3. Therefore $3\le|a-b|\le11$.

For real numbers with these exact magnitudes, the value is actually either $3$ or $11$. Equal signs give $3$; opposite signs give $11$. A bound can include values that the original expression never takes. It is a guaranteed enclosure, not necessarily the exact set of possible outputs.

The same reasoning controls errors. If a desired number is $t$ and two approximation errors are $e_1,e_2$, then $|e_1|\le0.02$ and $|e_2|\le0.03$ imply $|e_1+e_2|\le0.05$. Do not assume that the errors cancel unless their signs are known.

## Practice

1. Check both bounds for $a=-6$ and $b=2$.
2. If $|x-3|\le0.2$, bound $|2x-6|$. Is $|x|\le3.2$ also guaranteed?

## Worked answers

1. The lower bound is $|6-2|=4$. The middle value is $|-6-2|=8$, and the upper bound is $6+2=8$. Thus $4\le8\le8$.
2. Since $2x-6=2(x-3)$, its absolute value is $2|x-3|\le0.4$. Also $x=(x-3)+3$, so the triangle inequality gives $|x|\le|x-3|+3\le3.2$. The first bound measures deviation from $3$; the second measures distance from zero.
