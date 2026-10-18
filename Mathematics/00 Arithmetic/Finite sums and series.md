---
title: "Finite sums and series"
catalogue_ids:
  - "1.2"
  - "1.2.1"
---

> [!TLDR]
> A finite series adds a fixed number of terms; sigma notation states exactly which terms to add.

## A list and its sum

A **sequence** is an ordered list of numbers. A **term** is one number in that list. For example, $3,6,9,12$ is a finite sequence of four terms. Its corresponding **finite series** is the addition $3+6+9+12$. The value of that series is $30$. A sequence lists numbers; a series adds them.

We often write the terms as $a_1,a_2,\ldots,a_n$. The small number below the letter is an **index**: $a_3$ means the third term, not $a$ multiplied by $3$. The letter $n$ is the number of terms and is a positive integer. A rule such as $a_k=3k$ gives the value at position $k$.

The sum of the first $n$ terms is

$$
S_n=a_1+a_2+\cdots+a_n.
$$

The dots continue the stated rule. If the rule is unclear, dots alone do not define the sum. For example, the start $1,2,4$ could continue by doubling or by another rule. State the rule and the final index.

## Read sigma notation

The Greek capital letter sigma, $\sum$, means “add the specified terms”. For example,

$$
\sum_{k=1}^{4}3k=3(1)+3(2)+3(3)+3(4)=30.
$$

Read from the bottom: set $k=1$, increase $k$ by one each time, and stop at $k=4$. The expression $3k$ is the **summand**. The lower and upper numbers are the **limits of summation**, not limits in calculus. Both endpoints are included.

For integers $p\le q$, the sum $\sum_{k=p}^{q}a_k$ has $q-p+1$ terms. Thus $\sum_{k=3}^{7}k$ has five terms, not four. An **empty sum**, with no indices to include, has value $0$ by convention. This makes formulas for joining adjacent ranges work even when one range is empty.

The index letter is a local name. The sums $\sum_{k=1}^{4}3k$ and $\sum_{j=1}^{4}3j$ are equal. Replacing the letter everywhere changes no term. Changing only the index limits usually changes the sum.

## Useful rules for finite sums

Ordinary addition gives these rules for a fixed real number $c$:

$$
\sum_{k=1}^{n}(a_k+b_k)=\sum_{k=1}^{n}a_k+\sum_{k=1}^{n}b_k,
\qquad
\sum_{k=1}^{n}ca_k=c\sum_{k=1}^{n}a_k.
$$

Each rule follows by expanding both sides and collecting the same terms. A constant summand occurs $n$ times, so $\sum_{k=1}^{n}c=nc$. Addition permits regrouping and reordering a finite sum of real numbers. It does not permit replacing addition by multiplication: in general, $\sum a_kb_k$ is not $(\sum a_k)(\sum b_k)$.

Split a range only without losing or repeating an index:

$$
\sum_{k=1}^{8}a_k=\sum_{k=1}^{3}a_k+\sum_{k=4}^{8}a_k.
$$

The **partial sum** $S_m$ adds only the first $m$ terms, where $m\le n$. For $m\ge2$, the difference $S_m-S_{m-1}=a_m$ recovers the newly added term.

## Worked example: translate before calculating

Calculate $\sum_{k=2}^{5}(2k-1)$.

1. Count the terms: $5-2+1=4$.
2. Substitute each allowed index: $3+5+7+9$.
3. Add: $3+5=8$ and $7+9=16$, so the sum is $24$.
4. Check with the rules: $2(2+3+4+5)-4=2(14)-4=24$.

The constant $-1$ is added four times. Subtracting it once would give the wrong answer $27$.

## Next steps and limits

[[Arithmetic series]] handles a constant step between terms. [[Geometric series]] handles a constant multiplier. [[09.01 Sequences]] develops sequences further, but its limit definition is not needed here. An infinite series needs an additional definition, explained in [[09.02 Infinite series]]. A formula for a finite sum alone does not justify adding infinitely many terms.

## Practice

1. Expand and calculate $\sum_{j=0}^{3}(j+2)^2$.
2. Given $S_4=18$ and $S_5=25$, find $a_5$. Also state how many terms occur in $\sum_{k=6}^{10}a_k$.

## Worked answers

1. The index values are $0,1,2,3$, so the sum is $2^2+3^2+4^2+5^2=4+9+16+25=54$. Starting at zero still gives four terms.
2. The fifth term is $a_5=S_5-S_4=25-18=7$. The range from $6$ through $10$ contains $10-6+1=5$ terms; their values cannot be found from the given partial sums.
