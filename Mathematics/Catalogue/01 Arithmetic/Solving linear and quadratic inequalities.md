---
title: "Solving linear and quadratic inequalities"
catalogue_ids:
  - "1.4.3"
  - "1.4.3.1"
  - "1.4.3.2"
  - "1.4.3.3"
  - "1.4.3.4"
---

> [!TLDR]
> Solve linear inequalities with sign-aware algebra, and solve quadratic inequalities by the signs between their real roots or by completing the square.

## General principles

A **solution** is an allowed real input that makes an inequality true. The **solution set** contains all such inputs. An interval such as $(2,5)$ excludes both endpoints, while $[2,5]$ includes both. Mixed brackets include only the square-bracket endpoint. Infinity is not a real endpoint, so always use a round bracket there. The symbol $\cup$ joins sets by “or”; $\cap$ keeps inputs common to both sets by “and”. The symbol $\varnothing$ denotes no solutions, and $\mathbb R$ denotes all real numbers.

Start by recording the domain. Use equivalent transformations on that domain: add the same expression to both sides, or multiply or divide by a known nonzero number. Reverse the comparison when that number is negative. If a factor contains the unknown, its sign may change; split into cases or use a sign table. These rules are developed in [[Inequality definitions and rules]].

## First-degree inequalities

After collecting terms, a first-degree problem has the form $ax+b>0$, or the corresponding $\ge,<,\le$ form. If $a>0$, then $ax+b>0$ gives $x>-b/a$. If $a<0$, it gives $x<-b/a$. For other comparison signs, use the same division rule.

If $a=0$, do not divide by $a$. Test the constant statement. For $b>0$, $b>0$ has solution $\mathbb R$; for $b\le0$, it has solution $\varnothing$. For a non-strict constant comparison, include equality as required. Such a case is no longer genuinely first degree.

For example, $3(2-x)\le x+2$ becomes $6-3x\le x+2$, then $-4x\le-4$, and finally $x\ge1$. Division by $-4$ reverses the comparison. The solution is $[1,\infty)$; substitution at $1$ gives equality.

## Second-degree inequalities of the form x² compared with m

For $m>0$, squaring measures distance from zero:

| Comparison | Solution for $m>0$ |
| --- | --- |
| $x^2<m$ | $(-\sqrt m,\sqrt m)$ |
| $x^2\le m$ | $[-\sqrt m,\sqrt m]$ |
| $x^2>m$ | $(-\infty,-\sqrt m)\cup(\sqrt m,\infty)$ |
| $x^2\ge m$ | $(-\infty,-\sqrt m]\cup[\sqrt m,\infty)$ |

For $m=0$, the solutions to $x^2<0,\ x^2\le0,\ x^2>0,\ x^2\ge0$ are respectively $\varnothing,\ \{0\},\ \mathbb R\setminus\{0\},\ \mathbb R$. The notation $\setminus$ removes the specified inputs from a set. For $m<0$, both $x^2<m$ and $x^2\le m$ have no solution, while both $x^2>m$ and $x^2\ge m$ hold for every real input. These cases prevent invalid square roots of negative numbers.

## General quadratic case

Let $f(x)=ax^2+bx+c$ with $a\ne0$, and let $D=b^2-4ac$ be its **discriminant**. Completing the square gives

$$
f(x)=a\left[\left(x+\frac{b}{2a}\right)^2-\frac{D}{4a^2}\right].
$$

This identity explains every case below. Its derivation is expanded in [[02.07 Completing the square]]. If $a=0$, return to the first-degree or constant case instead.

For $D>0$, there are two distinct real roots. Compute both with $(-b\pm\sqrt D)/(2a)$ and name them $r_1<r_2$, regardless of the sign of $a$. Factoring gives $f(x)=a(x-r_1)(x-r_2)$.

| Leading sign | $f>0$ | $f\ge0$ | $f<0$ | $f\le0$ |
| --- | --- | --- | --- | --- |
| $a>0$ | Outside, exclude roots | Outside, include roots | Between, exclude roots | Between, include roots |
| $a<0$ | Between, exclude roots | Between, include roots | Outside, exclude roots | Outside, include roots |

“Between” means the interval from $r_1$ to $r_2$; “outside” means the two remaining intervals. At a root, $f=0$, so include it only for a non-strict comparison.

![[arithmetic-inequalities-quadratic-signs.svg|**Fig. A.inequalities.2** For f(x) = (x + 1)(x − 3), opposite factor signs make the quadratic negative between −1 and 3.]]

Fig. A.inequalities.2 displays the sign test. If the leading coefficient is negative, every nonzero sign reverses. For the remaining discriminant cases, put $r=-b/(2a)$ when $D=0$:

| Case | $f>0$ | $f\ge0$ | $f<0$ | $f\le0$ |
| --- | --- | --- | --- | --- |
| $D=0,a>0$ | $\mathbb R\setminus\{r\}$ | $\mathbb R$ | $\varnothing$ | $\{r\}$ |
| $D=0,a<0$ | $\varnothing$ | $\{r\}$ | $\mathbb R\setminus\{r\}$ | $\mathbb R$ |
| $D<0,a>0$ | $\mathbb R$ | $\mathbb R$ | $\varnothing$ | $\varnothing$ |
| $D<0,a<0$ | $\varnothing$ | $\varnothing$ | $\mathbb R$ | $\mathbb R$ |

For $D=0$, a repeated root does not change the sign because $f=a(x-r)^2$. For $D<0$, the square-bracket expression is strictly positive, so $f$ always has the sign of $a$.

## Worked example

Solve $-2x^2+8x-6\ge0$. Divide by $-2$ and reverse the sign to get $x^2-4x+3\le0$. Factor to obtain $(x-1)(x-3)\le0$. Below $1$ both factors are negative and the product is positive. Between $1$ and $3$ their signs differ and the product is negative. Above $3$ both are positive. Include both zeros: the solution is $[1,3]$. A check at $x=2$ gives $2\ge0$, while $x=0$ gives $-6\ge0$, which is false.

## Practice

1. Solve $5-2x>9$, and solve the simultaneous requirements $x\ge-1$ and $x<4$.
2. Solve $(x-2)^2\le0$ and $-x^2-1\ge0$. State their discriminant cases.

## Worked answers

1. Subtract $5$, then divide $-2x>4$ by $-2$ to get $x<-2$, or $(-\infty,-2)$. The simultaneous requirements give the intersection $[-1,4)$.
2. A square is nonnegative, so $(x-2)^2\le0$ requires $x=2$; here $D=0,a>0$. The expression $-x^2-1$ is at most $-1$, so its solution set is $\varnothing$; here $D=-4<0,a<0$.
