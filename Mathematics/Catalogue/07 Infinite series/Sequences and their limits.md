---
title: "Sequences and their limits"
catalogue_ids:
  - "7.1"
  - "7.1.1"
  - "7.1.1.1"
  - "7.1.1.2"
  - "7.1.1.3"
  - "7.1.2"
---

> [!TLDR]
> A sequence is an indexed list; its limit describes eventual closeness, while monotonicity and bounds can prove that a limit exists.

## Definition and notation

A **sequence of numbers** assigns a number $a_n$ to each integer index $n=1,2,3,\ldots$. Thus $a_n=1/n$ describes the list $1,1/2,1/3,\ldots$. Write $(a_n)_{n\geq1}$ for the whole sequence and $a_4$ for its fourth term. The subscript is an index, not a power. Repeated values and different orders are allowed. The lists $1,-1,1,-1,\ldots$ and $1,1,-1,-1,\ldots$ are different sequences even though their sets of values agree.

An explicit rule computes a term from its index. A recurrence computes a term from earlier terms and therefore needs initial data. For instance, $a_1=2$, $a_{n+1}=(a_n+3)/2$ begins $2,5/2,11/4,23/8,\ldots$. These are real sequences; complex sequences use complex values and the modulus in distance estimates. Only elementary algebra is needed below; [[09.01 Sequences]] provides another foundation lesson.

## Monotonic sequences

A sequence is **nondecreasing** when $a_{n+1}\geq a_n$ for every index, and **nonincreasing** when the reverse inequality holds. The strict versions replace these inequalities by $>$ and $<$. A constant sequence is both nondecreasing and nonincreasing. A sequence may also be eventually monotonic: the rule holds after some fixed index.

To test a recurrence, calculate $a_{n+1}-a_n$ and establish its sign. To test positive explicit terms, a ratio can help. For $a_n=n/(n+1)$,

$$
a_{n+1}-a_n=\frac{n+1}{n+2}-\frac n{n+1}
=\frac1{(n+1)(n+2)}>0.
$$

Hence the sequence increases strictly. Examining only the first four terms is not a proof about every index.

## Bounded sequences

An **upper bound** is a number $M$ such that $a_n\leq M$ for every index. A **lower bound** $m$ satisfies $m\leq a_n$. A sequence is bounded if both exist, equivalently if $|a_n|\leq C$ for some fixed $C$. For $n/(n+1)$, $0<a_n<1$, so $0$ and $1$ are bounds. A bound need not be attained by a term.

The list $(-1)^n$ is bounded but does not approach a single number. The list $n$ increases but is not bounded above. Neither boundedness alone nor monotonicity alone proves convergence.

## Limits and the monotone convergence theorem

The statement $a_n\to L$ means: for every error tolerance $\varepsilon>0$, there is an integer $N$ such that

$$
n\geq N\quad\Longrightarrow\quad |a_n-L|<\varepsilon.
$$

The same $N$ must work for every later index. A finite number of early exceptions do not change a limit. A convergent real sequence is bounded, and its limit is unique. To see uniqueness, if two candidate limits differ by $d>0$, use errors below $d/3$ for both. The triangle inequality would give $d<2d/3$, a contradiction.

The **monotone convergence theorem** says that a nondecreasing real sequence bounded above converges. Its limit is the least upper bound of its values. Indeed, if that bound is $L$, then $L-\varepsilon$ cannot be an upper bound. Some term exceeds it, and every later term lies between this term and $L$. The decreasing version uses a lower bound. This proof uses completeness of the real numbers; a decimal approximation is not a substitute for it.

## Worked example: a recurrence

Return to $a_1=2$, $a_{n+1}=(a_n+3)/2$. If $a_n<3$, then $a_{n+1}<3$, so induction gives $a_n<3$ for every $n$. Also $a_{n+1}-a_n=(3-a_n)/2>0$. The theorem therefore gives a limit $L$. Passing to the limit in the recurrence gives $L=(L+3)/2$, hence $L=3$.

The recurrence equation alone did not prove convergence; bounded monotonicity did. For an exact error, subtract each term from $3$:

$$
3-a_{n+1}=\frac{3-a_n}{2},\qquad
3-a_n=2^{-(n-1)}.
$$

Thus an error below $1/100$ is guaranteed at $n=8$, because $2^{-7}=1/128$. This explicit formula independently checks the limit.

## Useful limit rules and cautions

If $a_n\to A$ and $b_n\to B$, then sums, products, and constant multiples have the expected limits. The quotient tends to $A/B$ only if $B\ne0$. If $u_n\leq a_n\leq v_n$ eventually and both bounding sequences tend to $L$, then $a_n\to L$ by the squeeze theorem. For example, $-1/n\leq\sin(n)/n\leq1/n$, so the middle sequence tends to zero.

An unbounded sequence need not tend to positive infinity: $(-1)^n n$ has large values of both signs. The notation $a_n\to+\infty$ means that every real threshold is eventually exceeded; it is not convergence to a real number.

## Practice

1. Prove that $a_n=(2n+1)/(n+1)$ increases and find its limit.
2. Does $a_n=(-1)^n+1/n$ converge? Use the even and odd indices.

## Worked answers

1. Rewrite $a_n=2-1/(n+1)$. Its difference is $1/[(n+1)(n+2)]>0$; it stays below $2$. The exact distance from $2$ is $1/(n+1)\to0$, so its limit is $2$.
2. For $n=2k$, the values are $1+1/(2k)\to1$. For $n=2k+1$, they are $-1+1/(2k+1)\to-1$. A convergent sequence has the same limit along every subsequence. The different limits prove divergence, despite boundedness.
