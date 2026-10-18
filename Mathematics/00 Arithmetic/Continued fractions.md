---
title: "Continued fractions"
catalogue_ids:
  - "1.1.1.4"
---

> [!TLDR]
> A simple continued fraction records repeated integer parts and reciprocals; its finite truncations give rational approximations.

## A fraction inside a fraction

A **simple continued fraction** has the form

$$
a_0+\cfrac1{a_1+\cfrac1{a_2+\cfrac1{\ddots+\cfrac1{a_n}}}}
=[a_0;a_1,a_2,\ldots,a_n].
$$

Here $a_0$ is an integer and the later entries are positive integers. The semicolon separates the first entry from the others; it is not a decimal separator. An integer has the one-entry form $[a_0]$. For a finite expression with more than one entry, we normally require the last entry to exceed $1$. This convention removes the ambiguity $[a_0;\ldots,b]=[a_0;\ldots,b-1,1]$ when $b\ge2$.

To evaluate a finite continued fraction, start at the bottom. For example,

$$
[1;2,3]=1+\frac1{2+1/3}
=1+\frac1{7/3}=1+\frac37=\frac{10}7.
$$

Do not add all the entries before dividing. The nested brackets determine the order of the operations.

## Build the entries

For a real number $x$, its **floor**, written $\lfloor x\rfloor$, is the greatest integer no larger than $x$. For example, $\lfloor2.7\rfloor=2$, but $\lfloor-2.7\rfloor=-3$. Set $a_0=\lfloor x\rfloor$. If $x=a_0$, stop. Otherwise write

$$
x=a_0+r,\qquad 0<r<1,
\qquad x_1=\frac1r.
$$

Now repeat the procedure on $x_1$ to obtain $a_1=\lfloor x_1\rfloor$. Each new reciprocal exceeds $1$, so all entries after $a_0$ are positive. A zero remainder means that the expression is complete; never try to take the reciprocal of zero.

For a rational input, this is repeated division with remainder. The positive remainders decrease as integers, so the process must end. An irrational input cannot end: a finite continued fraction uses only integer arithmetic and division and therefore has a rational value. See [[Number sets and the real line]] for the meaning of rational and irrational.

## Worked example: expand 43/19

Divide at each stage:

$$
\begin{aligned}
43&=2\cdot19+5,\\
19&=3\cdot5+4,\\
5&=1\cdot4+1,\\
4&=4\cdot1+0.
\end{aligned}
$$

The quotients are $2,3,1,4$, so

$$
\frac{43}{19}=[2;3,1,4].
$$

Check from the bottom: $1+1/4=5/4$, then $3+1/(5/4)=19/5$, then $2+1/(19/5)=43/19$. This check tests the order of the entries as well as the final value.

The successive finite **convergents** stop after each entry:

$$
[2]=2,\qquad [2;3]=\frac73,\qquad
[2;3,1]=\frac94,\qquad [2;3,1,4]=\frac{43}{19}.
$$

The word convergent names these truncations. For an infinite simple continued fraction, they approach a definite real value. That convergence theorem is stated here without its full proof. It explains why nested fractions can specify a number exactly even though no finite truncation equals an irrational value.

## Approximate the square root of two

Put $s=\sqrt2$. Rationalising a denominator gives

$$
\frac1{s-1}=s+1=2+(s-1).
$$

Since $1<s<2$, the first integer part is $1$, and each later step has integer part $2$ and the same remainder $s-1$. Therefore

$$
\sqrt2=[1;2,2,2,\ldots].
$$

Its first convergents are $1$, $3/2$, $7/5$, and $17/12$. Their decimal values are $1$, $1.5$, $1.4$, and approximately $1.41667$. They alternately lie below and above $\sqrt2$. An overbar can mark the repeating block: $[1;\overline2]$.

An exact error check is available without relying on rounded digits. For positive $p,q$,

$$
\left|\frac pq-\sqrt2\right|
=\frac{|p^2-2q^2|}{q^2(p/q+\sqrt2)}.
$$

This follows by multiplying the difference by its conjugate sum. For $p/q=17/12$, $p^2-2q^2=289-288=1$. Since $17/12+\sqrt2>2$, the error is less than $1/288$. This is a guaranteed bound, not a claim that the approximation is exact.

For another school-level explanation of nested fractions and this square-root example, see Alan and Toni Beardon's [Continued Fractions II](https://nrich.maths.org/articles/continued-fractions-ii), published by the University of Cambridge's NRICH project.

## Practice

1. Evaluate $[2;1,3]$ exactly.
2. Expand $17/12$ as a finite simple continued fraction. Explain why the procedure stops.

> [!example]- Worked answers
> 1. Start inside: $1+1/3=4/3$. Thus $[2;1,3]=2+1/(4/3)=2+3/4=11/4$.
>
> 2. Use $17=1\cdot12+5$, $12=2\cdot5+2$, $5=2\cdot2+1$, and $2=2\cdot1+0$. The quotients give $[1;2,2,2]$. The final remainder is zero, so no further reciprocal is required. Equivalently, the exact input is rational and its integer remainder process terminates.
