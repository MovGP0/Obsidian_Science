---
title: "Finite limits and convergence tests"
catalogue_ids:
  - "2.1.4"
  - "2.1.4.1"
  - "2.1.4.2"
  - "2.1.4.3"
  - "2.1.4.7"
  - "2.1.4.8"
---

> [!TLDR]
> A finite limit controls all nearby function values; sequences and a Cauchy condition provide equivalent ways to test that control.

## Output tolerance and input tolerance

Use [[Function inputs outputs and representations]] before this lesson. Let $f:D\subseteq\mathbb R\to\mathbb R$ and suppose $a$ is an accumulation point of $D$: arbitrarily close domain inputs other than $a$ exist. The statement $\lim_{x\to a}f(x)=L$ means that for every tolerance $\varepsilon>0$, there is $\delta>0$ such that

$$
x\in D,\quad 0<|x-a|<\delta
\quad\Longrightarrow\quad |f(x)-L|<\varepsilon.
$$

The output tolerance is prescribed first. We then choose an input tolerance that works for **all** eligible inputs. The condition excludes $x=a$, so the limit neither needs nor specifies $f(a)$. The domain restriction stays in force throughout.

![[catalogue-ch02a-limit-tolerances.svg|**Fig. C.ch02a.2** A sufficiently narrow input interval maps into a prescribed output band. The centre input is excluded from the limit test.]]

In Fig. C.ch02a.2 the horizontal tolerance is chosen to meet the vertical requirement. For $f(x)=3x-2$ at $a=1$, the proposed limit is $1$. Since $|f(x)-1|=3|x-1|$, choose $\delta=\varepsilon/3$. This proves the definition for every tolerance. A table of decimal values cannot replace that quantifier.

## Reduction to sequences

A sequence is a numbered list $x_1,x_2,\ldots$. It tends to $a$ when, for each positive tolerance, all sufficiently late terms lie within that tolerance of $a$. The **sequential criterion** says that $f(x)\to L$ as $x\to a$ if and only if every sequence of inputs $x_n\in D\setminus\{a\}$ tending to $a$ satisfies $f(x_n)\to L$.

The forward direction follows by applying the limit's $\delta$ to the tail of each sequence. Conversely, if the tolerance definition fails, there is some $\varepsilon_0>0$ for which every input neighbourhood contains a bad point. Choose one bad point with $0<|x_n-a|<1/n$. These points form a sequence approaching $a$, while their outputs stay at least $\varepsilon_0$ from $L$. This contradicts the proposed sequential condition.

Thus two sequences with different output limits disprove a limit. For $\sin(1/x)$ at zero, take $x_n=1/(\pi/2+2\pi n)$ and $y_n=1/(3\pi/2+2\pi n)$. Both tend to zero, but the function values are $1$ and $-1$. One convenient sequence that gives a candidate limit does not prove the condition for every sequence.

## Cauchy's convergence criterion

A finite limit exists if and only if nearby output values become mutually close: for every $\varepsilon>0$, there is $\delta>0$ such that

$$
0<|x-a|<\delta,\quad 0<|y-a|<\delta,\quad x,y\in D
\quad\Longrightarrow\quad |f(x)-f(y)|<\varepsilon.
$$

If a limit $L$ exists, bound each difference from $L$ by $\varepsilon/2$ and add. For the reverse direction, choose domain points $x_n\to a$. The displayed condition makes $f(x_n)$ a Cauchy sequence. Completeness of the real numbers guarantees a finite limit $L$. Comparing arbitrary nearby $f(x)$ with a sufficiently late $f(x_n)$ then gives $f(x)\to L$. This explains why the criterion can establish existence before we know the value. It concerns one function near a point, not a sequence of different functions.

## Limit rules and safe calculation

If $f\to A$ and $g\to B$ are finite limits at the same point, then $f+g\to A+B$, $fg\to AB$, and $cf\to cA$. For a quotient, require $B\ne0$; then $f/g\to A/B$. A continuous outer function can be applied to a finite limit when defined near it. The squeeze theorem says that if $u\le f\le v$ near the point and both bounding functions tend to $L$, then $f\to L$ too. These statements concern nearby inputs where all expressions exist.

## Worked example: remove zero divided by zero

Evaluate

$$
\lim_{x\to0}\frac{\sqrt{1+2x}-1}{x}.
$$

Direct substitution gives $0/0$, an indeterminate form, not an answer. For nonzero inputs near zero, multiply by the conjugate:

$$
\frac{\sqrt{1+2x}-1}{x}
=\frac{2x}{x(\sqrt{1+2x}+1)}
=\frac2{\sqrt{1+2x}+1}.
$$

The final denominator tends to two and is nonzero. The limit is therefore one. Cancellation was legitimate because the limit excludes $x=0$; it did not define the original quotient there.

## Practice

1. Evaluate $\lim_{x\to3}(x^2-9)/(x-3)$ and prove the result with a tolerance choice after cancellation.
2. Define $f(x)=1$ for positive $x$ and $f(x)=-1$ for negative $x$. Use sequences and Cauchy's criterion to test a two-sided finite limit at zero.

## Worked answers

1. For $x\ne3$, the quotient is $x+3$, so the limit is six. Its difference from six is $|x-3|$; choosing $\delta=\varepsilon$ proves the claim.
2. Inputs $1/n$ give outputs one, while $-1/n$ give outputs minus one, so the sequential criterion fails. Also any punctured interval about zero contains opposite-sign inputs whose output difference is two. Taking $\varepsilon=1$ disproves the Cauchy condition.
