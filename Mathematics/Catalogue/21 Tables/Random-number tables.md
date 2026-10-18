---
title: "Random-number tables and reproducible sampling"
catalogue_ids:
  - "21.21"
---

> [!TLDR]
> A random-number table is useful only with a fixed selection rule; uniform digits can generate samples, while seeds make pseudorandom calculations reproducible.

## What a random table represents

A uniform random digit has ten equally likely outcomes, 0 through 9. In an ideal independent digit stream, knowing previous digits does not change the distribution of the next one. A printed random table records one finite realization. An ordinary-looking list is not proved random by its appearance. A deterministic pseudorandom generator starts from a seed and uses a rule to produce a repeatable sequence with useful statistical properties. [NIST pseudorandom-generator definition](https://xlinux.nist.gov/dads/HTML/pseudorandomNumberGen.html)

For learning, the short table below is a **synthetic demonstration table**, fixed in advance. It is not certified random and must not be used as a source of secure randomness. Its purpose is to show grouping and rejection rules without relying on hidden software behavior.

| Row | Digits, read left to right |
| --- | --- |
| 1 | 0 7 8 9 3 1 6 4 2 5 |
| 2 | 4 0 7 7 1 8 2 9 5 6 |
| 3 | 9 2 0 4 8 6 3 1 7 5 |
| 4 | 1 5 6 3 9 0 4 8 2 7 |

Before reading a real random table, choose a starting location and direction independently of its visible values. Do not scan for results you prefer. State how digits are grouped, how out-of-range groups are rejected, and whether repeated selections are allowed.

## Worked example: sample labels without bias

Suppose labels are the integers 0 through 5. A single decimal digit is not directly a uniform label if you take its remainder modulo 6. Digits 0 and 6 both give label 0, while only digit 4 gives label 4. Thus labels 0 through 3 would be twice as likely as labels 4 and 5.

Instead, accept digits 0 through 5 and reject 6 through 9. In row 1, the first digits are 0, 7, 8, 9, 3, 1, 6, 4, 2, 5. The accepted label sequence is 0, 3, 1, 4, 2, 5. Under independent uniform input digits, each accepted label has conditional probability $(1/10)/(6/10)=1/6$. Rejection removes bias; it does not remove the need for suitable input randomness.

For sampling **with replacement**, keep repeated labels. For sampling **without replacement**, reject any label already selected. If accepted input labels are uniform and independent, the next unused label is uniform among those remaining. Reusing a rejected group in a different ad hoc way can introduce bias. For a large population, specialized shuffle or sampling algorithms are more efficient.

## Transform a uniform variable

If $U$ is uniform on $(0,1)$, then $X=a+(b-a)U$ is uniform on $(a,b)$ for $a<b$. This follows by solving $X\le x$ for $U$: its CDF is $(x-a)/(b-a)$ inside the interval. [NIST uniform distribution](https://itl.nist.gov/div898/handbook/eda/section3/eda3662.htm)

More generally, if $F$ is a continuous strictly increasing CDF and $X=F^{-1}(U)$, then $P(X\le x)=P(U\le F(x))=F(x)$. This is **inverse-transform sampling**. For a discrete CDF, use the smallest outcome whose cumulative probability is at least $U$.

For example, define $P(X\le x)=1-e^{-2x}$ for $x\ge0$. Solving $U=1-e^{-2X}$ gives $X=-\tfrac12\ln(1-U)$. A demonstration value $U=0.8$ gives $X=-\ln0.2/2\approx0.804719$. Do not allow an endpoint value that makes a logarithm argument zero. Library generators document whether endpoints are included; that detail matters after a nonlinear transformation.

## Seeds and reproducibility

A simple teaching generator is $s_{n+1}=(5s_n+1)\bmod16$. From seed $s_0=0$, its first states are $1,6,15,12,13,2,11,8,9,14,7,4,5,10,3,0$, then they repeat. Dividing by 16 gives values in $[0,1)$. The short period is visible. This toy generator is useful for understanding state and seeds, but unsuitable for serious simulation.

Real simulation work should record the generator algorithm, software version, seed, and sample size. The same seed does not promise the same sequence across unrelated algorithms. A finite-period generator also cannot supply truly independent random variables forever. NIST Dataplot documents explicit seed control for repeatable calculations. [NIST random-number commands](https://www.itl.nist.gov/div898/software/dataplot/rand_num.htm)

## Check a sample without overclaiming

A frequency count can detect obvious imbalance. A sequence-correlation check can detect simple dependence. Neither proves randomness. A sequence such as 0,1,2,3,4,5 repeated has balanced frequencies and a completely predictable order. For simulation, use established numerical generators and test the calculation's sensitivity to several independent streams. For security, a separate cryptographic requirement applies; a hand-made teaching generator does not meet it.

## Practice

1. Use row 2 as two-digit groups to choose labels 00 through 79 with replacement. Reject other groups. List the accepted groups.
2. Generate a fair die label 1 through 6 from one uniform decimal digit. Explain the mapping and rejection rule.

> [!example]- Worked answers
> 1. The groups are 40, 77, 18, 29, 56. All are within 00 through 79, so all are accepted. An ideal two-digit group has 100 equally likely possibilities; conditioning on the 80 accepted groups makes each accepted label equally likely.
> 2. Accept digits 0 through 5 and add 1; reject 6 through 9. Each accepted digit has conditional probability $1/6$, so each die label is equally likely. Taking digit modulo 6 would give unequal numbers of input digits per label.
