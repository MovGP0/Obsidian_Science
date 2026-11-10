---
title: "Probability and Statistics (Math 32, UC Merced 2015)"
---

> [!TLDR]
> These course notes develop probability from sample spaces and counting, then use probability models to study random variables and statistical data.

Source notes by Kyle Kabasares. [[Probability and Statistics (Math 32, UC Merced 2015).pdf|Original PDF]].

Transcribed PDF pages 1–107 of 107.

### PDF page 1

#### Introduction to probability · January 20, 2015

Math 32 with Swenson. The opening heading calls this “Boring Math Time,” also known as introduction to probability.

A **sample space** is a set whose elements describe the outcomes of an experiment. The notes use $\Omega$ to denote it.

- A coin toss has the finite sample space $\Omega=\{\mathrm H,\mathrm T\}$.
- A birth month has the finite sample space $\Omega=\{\text{Jan},\text{Feb},\text{Mar},\text{Apr},\text{May},\text{Jun},\text{Jul},\text{Aug},\text{Sep},\text{Oct},\text{Nov},\text{Dec}\}$.
- The failure load of a bridge is modeled by $\Omega=(0,\infty)$, an uncountable or continuous set.

![[Kyle Kabasares - Probability and Statistics - Continuous bridge failure load number line.png|**Fig. 1** Positive real values on the failure-load number line.]]

If you flip a coin until heads first appears, record the number of flips. The positive integers $\Omega=\{1,2,3,4,\ldots\}$ form a countable or discrete set.

#### Arranging envelopes

![[Kyle Kabasares - Probability and Statistics - Three envelopes to arrange.png|**Fig. 2** Three distinct envelopes labeled A, B, and C.]]

There are $3\cdot2\cdot1=3!=6$ arrangements of three envelopes. Four envelopes have $4\cdot6=4!=24$ arrangements.

### PDF page 2

#### Factorials, combinations, and permutations

The factorial of a positive integer is $n!=n(n-1)(n-2)\cdots3\cdot2\cdot1$.

Consider four distinct molecules, $A,B,C,D$, in a two-sided container. Record which molecules are on the left. Possible outcomes include $\{A,B\}$, $\{A,C\}$, $\{A,C,D\}$, $\{A,B,C,D\}$, and the empty set $\varnothing$. Each molecule can be on either side, so there are $2^4=16$ outcomes.

![[Kyle Kabasares - Probability and Statistics - Four molecules in a two sided container.png|**Fig. 3** One configuration has A and B on the left and C and D on the right.]]

| Number on the left | Number of outcomes |
| --- | ---: |
| 0 | 1 |
| 1 | 4 |
| 2 | 6 |
| 3 | 4 |
| 4 | 1 |

These counts are the fifth row of Pascal's triangle and the coefficients of $(x+y)^4=x^4+4x^3y+6x^2y^2+4xy^3+y^4$.

![[Kyle Kabasares - Probability and Statistics - First five rows of Pascal triangle.png|**Fig. 4** The circled row counts configurations for each possible number of molecules on the left.]]

The order within a selected group is irrelevant. The number of combinations of $k$ items from $n$ distinct items is

$$
\binom nk=\frac{n!}{k!(n-k)!}.
$$

For permutations, the order matters. There are $n!$ permutations of all $n$ items.

![[Kyle Kabasares - Probability and Statistics - Arrangement of three distinct labels.png|**Fig. 5** An arrangement of the three labels in a specified order.]]

### PDF page 3

For four objects, $\binom42=4!/(2!2!)=6$, $\binom43=4!/(3!1!)=4$, $\binom40=\binom44=1$, and $\binom41=\binom43=4$. Here $n$ counts the objects and $k$ counts the selected objects, or successes. Interchanging $k$ and $n-k$ interchanges the two factors in the denominator.

$$
\binom n{n-k}=\frac{n!}{(n-k)![n-(n-k)]!}
=\frac{n!}{(n-k)!k!}=\binom nk.
$$

#### Events and set operations

An **event** is a subset of the sample space. For the birth-month example, let $L$ be the event that the birth month has 31 days and $R$ the event that its full name contains the letter r.

$$
\begin{aligned}
L&=\{\text{Jan},\text{Mar},\text{May},\text{Jul},\text{Aug},\text{Oct},\text{Dec}\},\\
R&=\{\text{Jan},\text{Feb},\text{Mar},\text{Apr},\text{Sep},\text{Oct},\text{Nov},\text{Dec}\},\\
L\cap R&=\{\text{Jan},\text{Mar},\text{Oct},\text{Dec}\}.
\end{aligned}
$$

The intersection $L\cap R$ means both events occur. The union $L\cup R$ includes outcomes in either or both events.

![[Kyle Kabasares - Probability and Statistics - Venn diagrams for intersection and union.png|**Fig. 6** Intersection shades only the overlap. Union shades both event regions.]]

### PDF page 4

The union $L\cup R$ contains every month except June, so $L\cup R=\{\text{Jun}\}^{c}$. A complement is the event that the original event does not occur. The complement of $L$ is $\{\text{Feb},\text{Apr},\text{Jun},\text{Sep},\text{Nov}\}$.

![[Kyle Kabasares - Probability and Statistics - Complement of an event.png|**Fig. 7** The complement consists of the part of the sample space outside the event.]]

Events $A$ and $B$ are **disjoint**, or **mutually exclusive**, if $A\cap B=\varnothing$.

![[Kyle Kabasares - Probability and Statistics - Disjoint events in a sample space.png|**Fig. 8** Two disjoint events have no overlap.]]

Event $A$ implies $B$ if $A\subseteq B$. The notes distinguish strict containment $A\subset B$ from containment allowing equality $A\subseteq B$.

![[Kyle Kabasares - Probability and Statistics - One event contained in another.png|**Fig. 9** Every outcome in A also belongs to B.]]

De Morgan's laws relate complements, unions, and intersections.

$$
(A\cup B)^c=A^c\cap B^c,
\qquad
(A\cap B)^c=A^c\cup B^c.
$$

#### Probability axioms

A probability function assigns numbers in $[0,1]$ to events. The handwritten domain is $\Omega$, but the arguments below are events in the sample space. The page gives the following properties.

1. $P(A)\geq0$ for every event $A$.
2. $P(\Omega)=1$.
3. $P(A\cup B)=P(A)+P(B)$ for disjoint events $A$ and $B$.

### PDF page 5

For pairwise disjoint events $A,B,C$, the union $A\cup B$ is disjoint from $C$. Apply additivity twice to obtain $P(A\cup B\cup C)=P(A\cup B)+P(C)=P(A)+P(B)+P(C)$.

![[Kyle Kabasares - Probability and Statistics - Three pairwise disjoint events.png|**Fig. 10** Three disjoint events in the same sample space.]]

#### Probability rules and odds · January 22, 2015

The lecture repeats nonnegativity, normalization, and additivity for disjoint events. Since $A$ and $A^c$ are disjoint and $A\cup A^c=\Omega$,

$$
P(A)+P(A^c)=P(A\cup A^c)=P(\Omega)=1.
$$

For any two events, $P(A\cup B)=P(A)+P(B)-P(A\cap B)$.

For three envelopes, $\Omega=\{ABC,ACB,BAC,BCA,CAB,CBA\}$. With all arrangements equally likely, $P(\{ABC\})=P(\{CBA\})=1/6$.

The odds in favor of $A$ are $P(A)/P(A^c)=P(A)/(1-P(A))$. If the odds for the Patriots to win the Super Bowl are $7$ to $2$, then

$$
\frac{P(A)}{1-P(A)}=\frac72
\quad\Longrightarrow\quad 2P(A)=7-7P(A)
\quad\Longrightarrow\quad P(A)=\frac79.
$$

The notes give two ways to understand this probability. The first is the long-run interpretation, called the classical viewpoint on the page. In repeated games between teams similar to the Patriots and Seahawks, the Patriots-like team would win about seven times out of nine.

### PDF page 6

The second interpretation of the Super Bowl probability is the Bayesian viewpoint. The probability expresses a subjective degree of belief that the Patriots will win.

#### Products of sample spaces and independence

For five coin flips, use the Cartesian product $\Omega=\{0,1\}^5$. Its outcomes are ordered five-tuples such as $(0,0,0,0,0)$ and $(1,1,1,1,1)$. Let $P(1)=p$ and $P(0)=1-p$. For independent flips, the probability of five zeros is $(1-p)^5$.

For two independent fair flips, each of the four joint outcomes has probability $(1/2)(1/2)=1/4$.

| Flip 2 \ Flip 1 | Heads | Tails |
| --- | ---: | ---: |
| Heads | $1/4$ | $1/4$ |
| Tails | $1/4$ | $1/4$ |

Two events $A$ and $B$ are **independent** if $P(A\cap B)=P(A)P(B)$.

In five independent flips, exactly one head has probability $5p(1-p)^4$. Exactly two heads have probability $\binom52p^2(1-p)^3=10p^2(1-p)^3$, since $\binom52=5!/(3!2!)=20/2=10$.

#### An infinite sample space

Flip until the first head. The probabilities of finishing on flips 1, 2, and 3 are $p$, $p(1-p)$, and $p(1-p)^2$. In general, $P(\text{first head on flip }k)=p(1-p)^{k-1}$. Check normalization with the geometric series $1+x+x^2+\cdots=1/(1-x)$ for $\lvert x\rvert<1$.

$$
\sum_{k=1}^{\infty}p(1-p)^{k-1}
=p\bigl[1+(1-p)+(1-p)^2+\cdots\bigr]
=\frac{p}{1-(1-p)}=1
$$

for $0<p\leq1$.

### PDF page 7

#### Conditional probability

Return to the birth-month example and assign probability $1/12$ to each month. Then $P(L)=7/12$ and $P(R)=8/12$. Given that the person was born in a long month, the possible months are restricted to $L$. Four of its seven months are in $R\cap L=\{\text{Jan},\text{Mar},\text{Oct},\text{Dec}\}$.

![[Kyle Kabasares - Probability and Statistics - Overlap for conditional birth month probability.png|**Fig. 11** Within the long-month event, the shaded overlap contains the months whose names have the letter r.]]

$$
P(R\mid L)=\frac{P(R\cap L)}{P(L)}=\frac{4/12}{7/12}=\frac47.
$$

For $P(B)>0$, define the probability of $A$ given $B$ as $P(A\mid B)=P(A\cap B)/P(B)$. In rearranged form, $P(A\cap B)=P(A\mid B)P(B)$ is the multiplication rule, also called the product rule.

#### Birthday problem

Assume independent birthdays uniformly distributed over 365 days. Let $B_n$ be the event that the first $n$ people all have different birthdays, and $A_n$ the event that person $n$ has a birthday different from each earlier person. Then $P(B_2)=1-1/365=364/365$, and

$$
P(B_3)=P(B_2\cap A_3)=P(A_3\mid B_2)P(B_2)
=\frac{363}{365}\frac{364}{365}\simeq0.9918.
$$

Conditioning successively gives

$$
P(B_n)=P(A_n\mid B_{n-1})P(B_{n-1})
=\prod_{j=1}^{n-1}\frac{365-j}{365}
$$

for $1\leq n\leq365$. The handwritten threshold refers to the complementary event. At $n\geq23$, the probability that at least two people share a birthday is greater than $1/2$.

### PDF page 8

#### Bayes' rule · January 27, 2015

The handwritten date appears to end in 2014. The surrounding lecture dates place this lecture in January 2015.

Write the multiplication rule in both directions.

$$
P(A\cap C)=P(A\mid C)P(C)=P(C\mid A)P(A).
$$

For positive conditioning probabilities this gives **Bayes' rule**.

$$
P(A\mid C)=\frac{P(C\mid A)P(A)}{P(C)}.
$$

In the parameter-and-data formulation, the posterior distribution is the likelihood times the prior, divided by the model evidence.

$$
\underbrace{P(\text{parameters}\mid\text{data})}_{\text{posterior}}
=\frac{\overbrace{P(\text{data}\mid\text{parameters})}^{\text{likelihood}}\,
\overbrace{P(\text{parameters})}^{\text{prior}}}
{\underbrace{P(\text{data})}_{\text{model evidence}}}.
$$

### PDF page 9

#### Bayes' theorem and an imperfect test

In this hypothetical example about bovine spongiform encephalopathy (BSE), let $B$ be the event that a cow has the disease and $T$ the event that its test is positive. Find $P(B\mid T)$ and $P(B\mid T^c)$.

![[Kyle Kabasares - Probability and Statistics - Sketch of a BSE test.png|**Fig. 12** Handwritten sketch introducing the test example.]]

The example uses $P(T\mid B)=0.70$, false-positive probability $P(T\mid B^c)=0.10$, and prevalence $P(B)=0.02$. Bayes' rule gives $P(B\mid T)=(0.70)(0.02)/P(T)$.

#### Law of total probability

The event $T$ is the disjoint union of $T\cap B$ and $T\cap B^c$.

![[Kyle Kabasares - Probability and Statistics - Positive tests partitioned by disease status.png|**Fig. 13** The shaded event of a positive test splits into cases with and without the disease.]]

$$
P(T)=P(T\cap B^c)+P(T\cap B)
=P(T\mid B^c)P(B^c)+P(T\mid B)P(B).
$$

Thus

$$
P(B\mid T)=\frac{(0.70)(0.02)}{(0.10)(1-0.02)+(0.70)(0.02)}=0.125.
$$

The page restates the multiplication rule $P(C\cap A)=P(C\mid A)P(A)$ before computing the negative-test probability. Changing the conditioning event gives $P(B\mid T^c)=P(T^c\mid B)P(B)/(1-P(T))$. The complement under the fixed condition $B$ gives $P(T^c\mid B)=1-P(T\mid B)$.

![[Kyle Kabasares - Probability and Statistics - Complement for a negative test.png|**Fig. 14** A negative test among diseased cows corresponds to the part of B outside T.]]

### PDF page 10

For a negative test, $P(T)=0.112$ from the total-probability calculation, and

$$
P(B\mid T^c)=\frac{(1-0.70)(0.02)}{1-0.112}\simeq0.00676.
$$

The boxed value in the handwriting is $0.00675$.

#### Independence and conditional independence

Recall that $P(A\cap B)=P(A)P(B)$ for independent events. The multiplication rule gives $P(A\cap B)=P(A\mid B)P(B)$. If $P(B)>0$, these are equivalent to $P(A\mid B)=P(A)$. If $P(A)>0$, independence is likewise equivalent to $P(B\mid A)=P(B)$. Learning the occurrence of one event leaves the probability of the other the same. Independence also holds when either or both events are replaced by their complements.

For conditional independence of $A$ and $B$ given $C$, the notes use $P(A\mid B\cap C)=P(A\mid C)$ when both conditional probabilities are defined. The multiplication rule within $C$ then gives

$$
P(A\cap B\mid C)=P(A\mid B\cap C)P(B\mid C)=P(A\mid C)P(B\mid C).
$$

#### Two radios from the same factory

Factory A produces defective radios with probability $0.05$, and factory B with probability $0.01$. You buy two radios made at the same factory, with either factory initially equally likely. If the first radio is defective, what is the probability that the second is defective?

Let $A$ and $B$ denote the events that both radios came from the respective factories. Let $D_1$ and $D_2$ denote defects in the first and second radios. The quantity to compute is $P(D_2\mid D_1)$.

### PDF page 11

In the radio example, partition both the numerator and the denominator by factory. The calculation assumes that the two defects are independent once the factory is fixed.

$$
\begin{aligned}
P(D_2\mid D_1)
&=\frac{P(D_1\cap D_2)}{P(D_1)}\\
&=\frac{P(D_1\cap D_2\mid A)P(A)+P(D_1\cap D_2\mid B)P(B)}
{P(D_1\mid A)P(A)+P(D_1\mid B)P(B)}\\
&=\frac{(0.05)^2(1/2)+(0.01)^2(1/2)}{0.05(1/2)+0.01(1/2)}
\simeq0.0433.
\end{aligned}
$$

#### Discrete random variables · January 29, 2015

A random variable can record just the aspect of the outcome that is of interest. In Settlers of Catan, the sum $S$ of two dice determines the number rolled.

![[Kyle Kabasares - Probability and Statistics - Settlers of Catan numbered hexagons.png|**Fig. 15** A sketch of numbered hexagonal tiles.]]

| Die 2 \ Die 1 | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| 5 | 6 | 7 | 8 | 9 | 10 | 11 |
| 6 | 7 | 8 | 9 | 10 | 11 | 12 |

Count occurrences among the 36 equally likely ordered pairs. The page gives $P(S=2)=1/36$, $P(S=3)=2/36$, $P(S=4)=3/36$, $P(S=7)=6/36$, $P(S=11)=2/36$, and $P(S=12)=1/36$. The probability mass function (PMF) is $p_S(a)=P(S=a)$.

In “Max Catan,” take $M$ to be the larger of the two rolls.

| Die 2 \ Die 1 | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | 1 | 2 | 3 | 4 | 5 | 6 |
| 2 | 2 | 2 | 3 | 4 | 5 | 6 |
| 3 | 3 | 3 | 3 | 4 | 5 | 6 |
| 4 | 4 | 4 | 4 | 4 | 5 | 6 |
| 5 | 5 | 5 | 5 | 5 | 5 | 6 |
| 6 | 6 | 6 | 6 | 6 | 6 | 6 |

### PDF page 12

#### Cumulative distribution functions

The cumulative distribution function (CDF) of $X$ is $F_X(a)=P(X\leq a)$. For the maximum $M$ of two fair dice, $F_M(0)=0$, $F_M(1)=1/36$, $F_M(2)=4/36$, $F_M(3)=9/36$, and $F_M(6)=36/36=1$.

#### Five common discrete random variables

**1. Discrete uniform.** A discrete uniform random variable on $\{1,2,\ldots,N\}$ has PMF $p_X(k)=P(X=k)=1/N$ on those integers and zero elsewhere. Examples include a fair die with $N=6$, roulette, and lotteries.

**2. Bernoulli.** Write $X\sim\operatorname{Ber}(p)$ if $P(X=1)=p$ and $P(X=0)=1-p$. This models a coin that can be biased, with $p$ the probability of heads, or any experiment with two outcomes. One run of the experiment is a Bernoulli trial.

**3. Binomial.** The sum of $n$ independent $\operatorname{Ber}(p)$ random variables has a binomial distribution, written $X\sim\operatorname{Bin}(n,p)$.

### PDF page 13

For $X\sim\operatorname{Bin}(n,p)$, choose the $k$ positions that contain successes. Each arrangement has $k$ success factors and $n-k$ failure factors.

$$
P(X=k)=\binom nk p^k(1-p)^{n-k},
\qquad k=0,1,\ldots,n.
$$

For $n=3$ and $p=1/4$, the example gives

| $k$ | $P(X=k)$ | Approximate value |
| ---: | --- | ---: |
| 0 | $(3/4)^3$ | 0.42 |
| 1 | $3(1/4)(3/4)^2$ | 0.42 |
| 2 | $3(1/4)^2(3/4)$ | 0.14 |
| 3 | $(1/4)^3$ | 0.0156 |

The R expression is `dbinom(k, size = n, prob = p)`. For example, use `dbinom(1, size = 3, prob = 1/4)`.

#### Geometric distribution

**4. Geometric.** The trial number of the first success is $X\sim\operatorname{Geo}(p)$ with $P(X=k)=p(1-p)^{k-1}$ for $k=1,2,\ldots$. The page writes `dgeom(k, prob = p)` for this probability. With the trial-count convention used here, use `dgeom(k - 1, prob = p)` because the R argument counts the preceding failures.

The event $X>n$ means the first $n$ trials failed, so $P(X>n)=(1-p)^n$. The same result follows by summing the tail.

$$
\sum_{k=n+1}^{\infty}p(1-p)^{k-1}
=p(1-p)^n\bigl[1+(1-p)+(1-p)^2+\cdots\bigr]=(1-p)^n.
$$

![[Kyle Kabasares - Probability and Statistics - Nested events for geometric memorylessness.png|**Fig. 16** For nonnegative $n$ and $k$, the event $X>n+k$ is contained in $X>k$.]]

For $0<p<1$, this containment gives

$$
P(X>n+k\mid X>k)
=\frac{P(X>n+k)}{P(X>k)}
=\frac{(1-p)^{n+k}}{(1-p)^k}
=(1-p)^n=P(X>n).
$$

This is the **memoryless property**, which characterizes the geometric distribution on the positive integers.

### PDF page 14

#### Poisson distribution

**5. Poisson.** Write $X\sim\operatorname{Pois}(\mu)$ when

$$
P(X=k)=\frac{\mu^k e^{-\mu}}{k!},
\qquad k=0,1,2,\ldots.
$$

This distribution is the limit of a binomial distribution as $n\to\infty$ with $np=\mu$ held fixed. The notes refer to the lecture slides for the derivation. When $X$ counts events during a fixed interval, $\mu$ is the average number in that interval.

For an average of five complaints per month, the probabilities of zero, one, and two complaints are $e^{-5}$, $5e^{-5}$, and $5^2e^{-5}/2$, respectively. The page also lists the probabilities for three through seven complaints. The following values use the formula above and round to three decimal places.

| Complaints $k$ | $P(X=k)$ |
| ---: | ---: |
| 0 | 0.007 |
| 1 | 0.034 |
| 2 | 0.084 |
| 3 | 0.140 |
| 4 | 0.175 |
| 5 | 0.175 |
| 6 | 0.146 |
| 7 | 0.104 |

The handwritten R expression is `dpois(k, lambda = mu)`. The second probability line repeats $X=0$ in the handwriting, but its factorial and power both specify $X=1$.

### PDF page 15

#### Continuous random variables · February 3, 2015

The lecture starts with an image-smoothing model. Let $x_{ij}$ denote a candidate image and $y_{ij}$ the observed image. A cost function combines a data fidelity term and a weighted roughness term $R(x)$.

$$
f(x)=\sum_{i,j}(x_{ij}-y_{ij})^2+\lambda R(x).
$$

The notes say that the constant $\lambda$ can be chosen based on observations of smooth images. A probability density for the candidate image has the form $g(x)\propto e^{-f(x)}$. In the continuous models considered here, a probability density function describes the distribution.

### PDF page 16

#### Probability density and cumulative distribution

For a continuous random variable with probability density function (PDF) $f$, the probability of an interval is

$$
P(a\leq X\leq b)=\int_a^b f(x)\,dx.
$$

A single point has probability $P(X=a)=\int_a^a f(x)\,dx=0$. Thus including or excluding the interval endpoints gives the same probability.

![[Kyle Kabasares - Probability and Statistics - Interval probability as area under a density.png|**Fig. 17** The shaded area from $a$ to $b$ is the probability of the interval.]]

The cumulative distribution function is $F(x)=P(X\leq x)=\int_{-\infty}^x f(t)\,dt$. At points where the density is continuous, differentiation recovers $f(x)=F'(x)$.

![[Kyle Kabasares - Probability and Statistics - CDF and accumulated density area.png|**Fig. 18** The CDF on the left records the area under the density to the left of the cutoff on the right.]]

#### Continuous uniform distribution

For a uniform variable on $[a,b]$, the density is constant at $1/(b-a)$ on the interval and zero elsewhere. The rectangle has area one.

![[Kyle Kabasares - Probability and Statistics - Rectangular density for a uniform variable.png|**Fig. 19** The uniform density is a rectangle over $[a,b]$.]]

For $a\leq x\leq b$, integrating the constant density from $a$ to $x$ gives $(x-a)/(b-a)$. The full CDF is

$$
F(x)=
\begin{cases}
0,&x<a,\\
(x-a)/(b-a),&a\leq x\leq b,\\
1,&x>b.
\end{cases}
$$

The notes mention using the continuous uniform distribution as an approximation to the discrete uniform distribution.

### PDF page 17

In the Dungeons & Dragons example, approximate a roll of a fair 30-sided die by $X\sim U(0,30)$. Then $P(X\leq20)=20/30=2/3$. At this integer cutoff, the discrete model gives the same ratio.

![[Kyle Kabasares - Probability and Statistics - Continuous uniform approximation for a thirty sided die.png|**Fig. 20** The uniform area up to 20 occupies two-thirds of the interval from 0 to 30.]]

#### Exponential distribution

For $X\sim\operatorname{Exp}(\lambda)$, with $\lambda>0$, the density is proportional to $e^{-\lambda x}$ for $x\geq0$ and zero for $x<0$. Choose the constant $C$ by requiring total area one.

![[Kyle Kabasares - Probability and Statistics - Area under an exponential density.png|**Fig. 21** The exponential density decreases from its value at the origin.]]

$$
1=C\int_0^\infty e^{-\lambda x}\,dx
=C\left[-\frac{e^{-\lambda x}}{\lambda}\right]_0^\infty
=\frac C\lambda.
$$

Thus $C=\lambda$, and $f(x)=\lambda e^{-\lambda x}$ for $x\geq0$.

In a lifetime example, $X$ is the life of a computer measured in years, with $X\sim\operatorname{Exp}(1/2)$. To find the probability it lasts more than three years, start with

$$
P(X>3)=1-P(X\leq3)=1-\int_0^3 \frac12 e^{-x/2}\,dx.
$$

![[Kyle Kabasares - Probability and Statistics - Exponential lifetime tail past three years.png|**Fig. 22** The shaded tail represents lifetimes greater than three years.]]

### PDF page 18

For the computer lifetime, the integral gives $P(X>3)=1+(e^{-3/2}-1)=e^{-3/2}\simeq0.22$.

An exponential distribution models waiting times at a constant event rate. The notes give a rate of 5% per year as an example. Like the geometric distribution, it is memoryless.

$$
P(X>s+t\mid X>s)=P(X>t),
\qquad s,t\geq0.
$$

#### Pareto distribution

For the Pareto or power-law distribution $X\sim\operatorname{Par}(\alpha)$, the density is proportional to $x^{-\alpha-1}$ for $x\geq1$ and vanishes for $x<1$.

![[Kyle Kabasares - Probability and Statistics - Pareto density sketch.png|**Fig. 23** The Pareto density decreases along its positive tail.]]

With $\alpha>0$, normalization gives

$$
1=C\int_1^\infty x^{-\alpha-1}\,dx
=C\left[-\frac{x^{-\alpha}}{\alpha}\right]_1^\infty=\frac{C}{\alpha}.
$$

Thus $f(x)=\alpha/x^{\alpha+1}$ for $x\geq1$.

#### Normal distribution

The normal or Gaussian density is proportional to $\exp[-(x-\mu)^2/(2\sigma^2)]$. Here $\mu$ is the mean and $\sigma$ is the standard deviation. The next calculation finds the normalization constant.

### PDF page 19

#### Normalizing the Gaussian density

Set $w=(x-\mu)/\sigma$, with $\sigma>0$, so $dx=\sigma\,dw$. The integral of the unnormalized density is $\sigma I$, where $I=\int_{-\infty}^{\infty}e^{-w^2/2}\,dw$. Square $I$ and use a different integration variable for each factor.

$$
\begin{aligned}
I^2
&=\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}
e^{-(x^2+y^2)/2}\,dx\,dy\\
&=\int_0^{2\pi}\int_0^\infty e^{-r^2/2}r\,dr\,d\theta\\
&=\int_0^{2\pi}\int_0^\infty e^{-u}\,du\,d\theta=2\pi.
\end{aligned}
$$

In the last step, use $u=r^2/2$, so $du=r\,dr$. The integral $I$ is positive, hence $I=\sqrt{2\pi}$. The unnormalized density integrates to $\sigma\sqrt{2\pi}$.

### PDF page 20

For $X\sim N(\mu,\sigma^2)$, the normalized density and cumulative distribution function are

$$
f(x)=\frac{1}{\sigma\sqrt{2\pi}}\exp\!\left[-\frac12\left(\frac{x-\mu}{\sigma}\right)^2\right],
\qquad
F(x)=\int_{-\infty}^x f(t)\,dt.
$$

![[Kyle Kabasares - Probability and Statistics - Gaussian density centered at the mean.png|**Fig. 24** Gaussian density centered at $x=\mu$.]]

The Gaussian CDF has no elementary antiderivative expression. The handwriting says “analytically integrable,” but the suggested methods are numerical evaluation in R and lookup in Table B.1 on CROPS, which gives right-tail probabilities for $N(0,1)$.

#### Example with IQ scores

Model IQ scores by $X\sim N(100,15^2)$ and find $P(X\leq125)$. The R calculation `pnorm(125, mean = 100, sd = 15)` gives approximately $0.95$. For the table method, standardize to $Z=(X-100)/15$.

$$
P(X\leq125)=P\left(Z\leq\frac{125-100}{15}\right)
=P(Z\leq5/3)\simeq1-P(Z>1.67)=1-0.0475=0.9525.
$$

#### Laplace distribution

Write $X\sim\operatorname{Lap}(\mu,\beta)$ if $f(x)\propto e^{-\lvert x-\mu\rvert/\beta}$, where $\beta>0$.

![[Kyle Kabasares - Probability and Statistics - Laplace density with a pointed peak.png|**Fig. 25** The Laplace density has a pointed peak at its location parameter.]]

### PDF page 21

Normalize the Laplace density by shifting to $w=x-\mu$ and using symmetry.

$$
\int_{-\infty}^{\infty} e^{-\lvert x-\mu\rvert/\beta}\,dx
=2\int_0^\infty e^{-w/\beta}\,dw
=2[-\beta e^{-w/\beta}]_0^\infty=2\beta.
$$

Thus $f(x)=e^{-\lvert x-\mu\rvert/\beta}/(2\beta)$.

![[Kyle Kabasares - Probability and Statistics - Laplace and standard normal density comparison.png|**Fig. 26** The Laplace sketch has a cusp, while the standard normal curve has a smooth peak.]]

#### Quantiles

For a continuous distribution with strictly increasing CDF at the cutoff, the quantile at probability $p$ is the value with cumulative area $p$. In percent notation this is the $(100p)$th percentile.

![[Kyle Kabasares - Probability and Statistics - Shaded probability up to a quantile.png|**Fig. 27** The cutoff has cumulative probability $p$.]]

![[Kyle Kabasares - Probability and Statistics - Area up to the seventy fifth percentile.png|**Fig. 28** A cumulative area of $0.75$ defines the 75th percentile.]]

The median is the 50th percentile. For an exponential density with rate $\lambda$, its median $m$ satisfies

$$
\int_0^m\lambda e^{-\lambda x}\,dx=[-e^{-\lambda x}]_0^m
=1-e^{-\lambda m}=\frac12.
$$

![[Kyle Kabasares - Probability and Statistics - Median splits the exponential density.png|**Fig. 29** The exponential density has area one-half on each side of its median.]]

### PDF page 22

The exponential median satisfies $e^{-\lambda m}=1/2$. Taking logarithms gives

$$
-\lambda m=\ln(1/2),
\qquad
m=-\frac{\ln(1/2)}{\lambda}=\frac{\ln 2}{\lambda}.
$$

### PDF page 23

#### Expectation and variance · February 10, 2015

A drill bit lasts 2, 3, or 4 hours with probabilities $0.1$, $0.7$, and $0.2$, respectively. The average lifetime is the probability-weighted sum.

$$
\sum_{k=2}^{4} kP(X=k)=2(0.1)+3(0.7)+4(0.2)=3.1.
$$

Thus the expected lifetime is $\quantity{3.1}{h}$.

For a discrete random variable with possible values $x_i$, define its expectation by $E[X]=\sum_i x_i P(X=x_i)$. For a continuous random variable with density $f$, the corresponding expression is $E[X]=\int_{-\infty}^\infty xf(x)\,dx$, when the expectation exists. The expectation is also called the mean. It is the balance point of the probability distribution.

![[Kyle Kabasares - Probability and Statistics - Mean as a balance point for drill bit lifetimes.png|**Fig. 30** The mean at 3.1 hours is the balance point of the three probability masses.]]

### PDF page 24

#### Mean of a discrete uniform variable

If $X$ is uniform on the integers $1,\ldots,N$, then $P(X=k)=1/N$ for each possible $k$. The mean is

$$
E[X]=\frac1N(1+2+\cdots+N).
$$

To find the sum $S=1+2+\cdots+N$, write the terms in forward and reverse order and add term by term. Each of the $N$ pairs sums to $N+1$, so $2S=N(N+1)$. Therefore $E[X]=(N+1)/2$. For a fair die, $E[X]=(6+1)/2=3.5$.

#### Beginning the expectation of a sum

Let $X$ and $Y$ be independent discrete uniform variables, for example the results of two fair dice. The general joint-distribution expression is

$$
E[X+Y]=\sum_i\sum_j(x_i+y_j)P(X=x_i,Y=y_j).
$$

For the independent example, factor the joint probabilities and collect the terms involving $X$ outside the inner sum.

$$
E[X+Y]=\sum_iP(X=x_i)\sum_j(x_i+y_j)P(Y=y_j).
$$

### PDF page 25

In the independent example, distribute the sum over $x_i+y_j$. The two marginal probability sums are each one.

$$
\begin{aligned}
E[X+Y]
&=\left(\sum_i x_iP(X=x_i)\right)\left(\sum_j P(Y=y_j)\right)
+\left(\sum_iP(X=x_i)\right)\left(\sum_j y_jP(Y=y_j)\right)\\
&=E[X]+E[Y].
\end{aligned}
$$

#### Mean of a Pareto variable

For $X\sim\operatorname{Par}(\alpha)$, the density on $[1,\infty)$ is $\alpha x^{-\alpha-1}$. Thus

$$
E[X]=\int_1^\infty x\alpha x^{-\alpha-1}\,dx
=\alpha\int_1^\infty x^{-\alpha}\,dx
=\frac{\alpha}{\alpha-1}
$$

when $\alpha>1$. For $0<\alpha\leq1$, the integral diverges. The handwritten threshold is $\alpha>2$, but the power $x^{1-\alpha}$ in its own antiderivative tends to zero whenever $\alpha>1$.

### PDF page 26

#### Mean of an exponential variable

For $X\sim\operatorname{Exp}(\lambda)$, apply integration by parts to the expectation integral.

$$
E[X]=\int_0^\infty x\lambda e^{-\lambda x}\,dx
=[-xe^{-\lambda x}]_0^\infty+\int_0^\infty e^{-\lambda x}\,dx=\frac1\lambda.
$$

The boundary term vanishes at both limits.

#### Shannon entropy

For a discrete random variable with PMF $p_X$, the Shannon entropy is the expectation of the information associated with the observed outcome.

$$
H[X]=E[-\ln p_X(X)]
=-\sum_i P(X=x_i)\ln P(X=x_i).
$$

The notes motivate the information function $h$ by requiring it to be nonnegative and additive on independent outcomes. If $X$ and $Y$ are independent, then $P(X=x,Y=y)=P(X=x)P(Y=y)$. The information of the joint outcome should equal the sum of the individual information values.

$$
h(\{X=x\}\cap\{Y=y\})=h(\{X=x\})+h(\{Y=y\}).
$$

The logarithm converts a product to a sum. The page ends by asking whether the logarithm of the probability itself satisfies the requirements.

### PDF page 27

The input to the information function is a probability $p$ in $(0,1]$. Use $h(p)=-\ln p$, which is nonnegative and decreases to zero at $p=1$. Shannon entropy is the mean information $E[h(p_X(X))]$.

![[Kyle Kabasares - Probability and Statistics - Negative logarithm as information.png|**Fig. 31** The information $-\ln p$ decreases as the outcome probability increases.]]

For $X\sim\operatorname{Ber}(p)$, the two possible outcomes give

$$
H[X]=-(1-p)\ln(1-p)-p\ln p.
$$

The entropy is greatest at $p=1/2$, where the outcome is most uncertain. The notes refer to an upcoming worksheet showing that the uniform distribution maximizes entropy among distributions on a fixed finite set.

![[Kyle Kabasares - Probability and Statistics - Bernoulli entropy peaks at one half.png|**Fig. 32** The entropy of a Bernoulli outcome has a maximum at $p=1/2$.]]

#### Linearity of expectation · February 12, 2015

For real constants $r,s$, $E[rX+s]=rE[X]+s$ when the mean exists. In the continuous case,

$$
\begin{aligned}
E[rX+s]
&=\int_{-\infty}^{\infty}(rx+s)f(x)\,dx\\
&=r\int_{-\infty}^{\infty}xf(x)\,dx
+s\int_{-\infty}^{\infty}f(x)\,dx=rE[X]+s.
\end{aligned}
$$

The discrete proof uses a sum in place of the integral.

### PDF page 28

#### Change of temperature units

Let $\thermal{F}$ and $\thermal{C}$ be the same temperature measured in degrees Fahrenheit and degrees Celsius. The conversion is $\thermal{F}=(9/5)\thermal{C}+32$. By linearity,

$$
E[\thermal{F}]=E\!\left[\frac95\thermal{C}+32\right]=\frac95 E[\thermal{C}]+32.
$$

One can convert the mean directly.

#### Variance and standard deviation

The **variance** is the mean squared deviation from the mean. If $\mu=E[X]$, then $\operatorname{Var}(X)=E[(X-\mu)^2]$ when it exists. The standard deviation is $\sqrt{\operatorname{Var}(X)}$ and measures the spread of the values. The notes compare variance to a moment of inertia.

#### Two games with the same mean return

Each game costs 450 dollars to play.

- Game 1 returns 450 dollars or 550 dollars, with probability $1/2$ each.
- Game 2 returns nothing or 1,000 dollars, with probability $1/2$ each.

Let $Y_1$ and $Y_2$ be the respective gross returns in dollars. The expectations are $E[Y_1]=(450+550)/2=500$ and $E[Y_2]=(0+1000)/2=500$. Game 2 has more variable outcomes.

### PDF page 29

The variances of the two gross returns, in squared dollars, are

$$
\begin{aligned}
\operatorname{Var}(Y_1)
&=\tfrac12(450-500)^2+\tfrac12(550-500)^2=50^2=2500,\\
\operatorname{Var}(Y_2)
&=\tfrac12(0-500)^2+\tfrac12(1000-500)^2=500^2=250000.
\end{aligned}
$$

The standard deviation $\operatorname{sd}(X)=\sqrt{\operatorname{Var}(X)}$ has the same units as $X$. The two standard deviations are 50 dollars and 500 dollars.

#### Variance from the first and second moments

For a variable with finite second moment, write $\mu=E[X]$. The first moment is $E[X]$, and the second moment is $E[X^2]$. For the continuous case, expand the square in the variance integral.

$$
\begin{aligned}
\operatorname{Var}(X)
&=\int_{-\infty}^\infty(x-\mu)^2f(x)\,dx\\
&=\int_{-\infty}^\infty x^2f(x)\,dx
-2\mu\int_{-\infty}^\infty xf(x)\,dx
+\mu^2\int_{-\infty}^\infty f(x)\,dx\\
&=E[X^2]-2\mu^2+\mu^2=E[X^2]-(E[X])^2.
\end{aligned}
$$

### PDF page 30

#### Mean and variance of a Poisson variable

For $X\sim\operatorname{Pois}(\mu)$, cancel the factor $k$ against $k!$ in the expectation.

$$
E[X]=\sum_{k=1}^{\infty} k\frac{\mu^k e^{-\mu}}{k!}
=\mu\sum_{k=1}^{\infty}\frac{\mu^{k-1}e^{-\mu}}{(k-1)!}
=\mu.
$$

For the variance, first calculate the second factorial moment.

$$
E[X(X-1)]=\sum_{k=2}^{\infty}k(k-1)\frac{\mu^k e^{-\mu}}{k!}
=\mu^2\sum_{k=2}^{\infty}\frac{\mu^{k-2}e^{-\mu}}{(k-2)!}
=\mu^2.
$$

The shifted sums each equal one. Therefore $\operatorname{Var}(X)=E[X(X-1)]+E[X]-(E[X])^2=\mu^2+\mu-\mu^2=\mu$. The Poisson mean and variance are both $\mu$.

#### Moment-generating functions

The moment-generating function (MGF) of $X$ is the exponential transform $\phi_X(t)=E[e^{tX}]$.

$$
\phi_X(t)=
\begin{cases}
\displaystyle\sum_k e^{tk}P(X=k),&X\text{ is discrete with values }k,\\
\displaystyle\int_{-\infty}^{\infty}e^{tx}f(x)\,dx,&X\text{ has density }f.
\end{cases}
$$

The notes also call this a Laplace transform. An MGF finite on an open interval containing zero determines the distribution, so it can help identify the distribution of a sum.

![[Kyle Kabasares - Probability and Statistics - Exponential density in the MGF example.png|**Fig. 33** The unit-rate exponential density used to calculate the MGF.]]

For $X\sim\operatorname{Exp}(1)$, the density is $e^{-x}$ for $x\geq0$ and zero elsewhere. Therefore

$$
\phi_X(t)=\int_0^\infty e^{tx}e^{-x}\,dx
=\left[\frac{e^{x(t-1)}}{t-1}\right]_0^\infty
=\frac{1}{1-t},
\qquad t<1.
$$

### PDF page 31

#### Moments from derivatives of the MGF

When the MGF is finite near zero, differentiate the exponential inside the expectation.

$$
\phi_X'(t)=E[Xe^{tX}],\qquad
\phi_X''(t)=E[X^2e^{tX}].
$$

At $t=0$, these derivatives give the first and second moments $E[X]$ and $E[X^2]$. For the unit-rate exponential example, $\phi_X(t)=1/(1-t)$, so

$$
E[X]=\phi_X'(0)=\left.\frac{1}{(1-t)^2}\right|_{t=0}=1,
\qquad
E[X^2]=\phi_X''(0)=\left.\frac{2}{(1-t)^3}\right|_{t=0}=2.
$$

Subtract the square of the first moment to obtain $\operatorname{Var}(X)=2-1^2=1$.

### PDF page 32

#### Common random variables and their uses · February 17, 2015

**Discrete uniform.** There are $N$ equally likely outcomes, $P(X=1)=\cdots=P(X=N)=1/N$, and $E[X]=(N+1)/2$.

![[Kyle Kabasares - Probability and Statistics - Equal masses of a discrete uniform distribution.png|**Fig. 34** The horizontal sketch represents equal masses at the supported integers.]]

**Bernoulli.** There are two outcomes. A success is coded as 1 and occurs with probability $p$. A failure is coded as 0 and occurs with probability $1-p$. The mean is $p$. The model describes a single trial, such as flipping a possibly biased coin.

**Binomial.** The parameters are the number of trials $n$ and the success probability $p$ in each trial. For independent Bernoulli trials, the number of successes $X$ has mean $np$ and probability $P(X=k)=\binom nk p^k(1-p)^{n-k}$ for $k=0,\ldots,n$. Counting heads in $n$ independent flips is an example.

### PDF page 33

**Geometric.** Repeat independent Bernoulli trials until the first success. For trial number $k\geq1$, $P(X=k)=(1-p)^{k-1}p$, with $p=P(X=1)$ and $E[X]=1/p$. The geometric distribution has the memoryless property $P(X>n+k\mid X>k)=P(X>n)$.

The notes use a hypothetical model in which a couple has the same probability $p$ of conceiving in each independent month. If they have tried for six months, the chance of waiting more than three additional months is $P(X>9\mid X>6)=P(X>3)$. The chance of conceiving within those next three months is its complement.

**Poisson.** For $X\sim\operatorname{Pois}(\mu)$, $P(X=k)=\mu^k e^{-\mu}/k!$ for $k=0,1,\ldots$ and $E[X]=\operatorname{Var}(X)=\mu$. The parameter is the mean number of events per interval. The binomial limit removes the finite upper bound on the possible count. One example is the monthly count of auto accidents in Merced.

![[Kyle Kabasares - Probability and Statistics - Poisson counts of monthly auto accidents.png|**Fig. 35** A sketch of probabilities for discrete event counts.]]

A discrete variable has a PMF $p(a)=P(X=a)$ and a CDF $F(a)=P(X\leq a)$. The notes contrast this with the ordinary continuous density obtained by differentiating an absolutely continuous CDF. The first “pdf” on the handwritten page is read as “pmf” from its formula.

### PDF page 34

#### Review of continuous random variables

**Exponential.** The density is $f(x)=\lambda e^{-\lambda x}$ for $x\geq0$ and zero otherwise, with $\lambda>0$. The parameter can represent a constant failure rate, and $E[X]=1/\lambda$. Examples include time to failure for an electronic product and time until a radioactive decay. The memoryless property is $P(X>n+k\mid X>k)=P(X>n)$.

**Pareto.** The density is $f(x)=\alpha/x^{\alpha+1}$ for $x\geq1$. Its mean is $\alpha/(\alpha-1)$ for $\alpha>1$. The notes mention modeling earthquake magnitudes and salaries above a threshold.

![[Kyle Kabasares - Probability and Statistics - Pareto density in distribution review.png|**Fig. 36** The support of the Pareto model begins at 1.]]

![[Kyle Kabasares - Probability and Statistics - First Pareto balance point sketch.png|**Fig. 37** One handwritten sketch marks the expected value close to the lower end.]]

![[Kyle Kabasares - Probability and Statistics - Second Pareto balance point sketch.png|**Fig. 38** A second sketch marks the expected value farther along the tail.]]

The mean formula shows that the mean increases as $\alpha$ decreases toward 1. The “$\alpha$ small” label appears beside the near-end balance point in the handwriting.

**Laplace.** The parameters are location $\mu$ and scale $\beta$. The density is $f(x)=e^{-\lvert x-\mu\rvert/\beta}/(2\beta)$. One application mentioned is digital image processing.

![[Kyle Kabasares - Probability and Statistics - Laplace density in distribution review.png|**Fig. 39** A symmetric density with a cusp at the center.]]

**Continuous uniform.** The density has height $1/(b-a)$ between $a$ and $b$, and its mean is $(a+b)/2$. The notes again mention its use as an approximation to a discrete uniform distribution.

![[Kyle Kabasares - Probability and Statistics - Continuous uniform density and height.png|**Fig. 40** Uniform density between its two endpoints.]]

### PDF page 35

**Gaussian or normal.** The density is $f(x)=e^{-(x-\mu)^2/(2\sigma^2)}/(\sigma\sqrt{2\pi})$, with $\mu=E[X]$ and $\sigma=\operatorname{sd}(X)=\sqrt{\operatorname{Var}(X)}$. The normal distribution can approximate sums of random variables, including binomial counts. The review also gives an exact closure example: if $X_1,X_2$ are independent and both have distribution $\operatorname{Pois}(\mu)$, then $X_1+X_2\sim\operatorname{Pois}(2\mu)$.

![[Kyle Kabasares - Probability and Statistics - Normal curve in distribution review.png|**Fig. 41** Normal density centered at $\mu$.]]

#### Distribution of the maximum · February 19, 2015

Let $X_1,\ldots,X_n$ be independent and identically distributed (i.i.d.) with common CDF $F(x)=P(X_i\leq x)$. The maximum is at most $x$ exactly when every variable is at most $x$. Independence gives

$$
F_{\max}(x)
=P(X_1\leq x,\ldots,X_n\leq x)
=\prod_{i=1}^n P(X_i\leq x)
=[F(x)]^n.
$$

For independent $U(0,1)$ variables, integrate the density of one variable to obtain its CDF.

![[Kyle Kabasares - Probability and Statistics - Unit uniform density and CDF.png|**Fig. 42** The unit uniform density is constant from 0 to 1. Its CDF rises linearly across that interval.]]

$$
F(x)=\int_{-\infty}^x f(t)\,dt=
\begin{cases}
0,&x<0,\\
x,&0\leq x\leq1,\\
1,&x>1.
\end{cases}
$$

### PDF page 36

For $n$ independent unit uniform variables, $F_{\max}(x)=[F(x)]^n$ is zero for $x<0$, equals $x^n$ for $0\leq x\leq1$, and is one for $x>1$.

![[Kyle Kabasares - Probability and Statistics - CDF of the maximum of unit uniform variables.png|**Fig. 43** The middle branch of the CDF is $x^n$.]]

The notes record sample maxima in inches for groups of three different sizes.

| Group size $n$ | Recorded maxima in inches |
| ---: | --- |
| 1 | 64, 71, 68, 67, 69, 66, 72 |
| 2 | 68, 67, 69, 68 |
| 3 | 68, 67 |

Differentiating the CDF gives $f_{\max}(x)=nx^{n-1}$ on the unit interval and zero elsewhere.

![[Kyle Kabasares - Probability and Statistics - Density of the maximum of unit uniform variables.png|**Fig. 44** The interior density approaches $n$ at the right endpoint.]]

#### Distribution of the minimum

Let $X_1,\ldots,X_n$ be i.i.d. with CDF $F$. The minimum exceeds $x$ when every variable exceeds $x$. Use a strict inequality in the complement so the formula also applies to discrete variables.

$$
F_{\min}(x)=P(\min_i X_i\leq x)
=1-P(X_1>x,\ldots,X_n>x)
=1-[1-F(x)]^n.
$$

For i.i.d. $U(0,1)$ variables, this is zero for $x<0$, equals $1-(1-x)^n$ for $0\leq x\leq1$, and is one for $x>1$.

### PDF page 37

For the minimum of independent $U(0,1)$ variables, differentiating the CDF gives density $f_{\min}(x)=n(1-x)^{n-1}$ on the unit interval and zero elsewhere.

![[Kyle Kabasares - Probability and Statistics - Density of the minimum of unit uniform variables.png|**Fig. 45** The minimum density starts at height $n$ and decreases for $n>1$.]]

#### Jensen's inequality

If $g(x)=rx+s$ with real $r,s$, then $E[g(X)]=g(E[X])$. For a nonlinear function these two expressions can differ.

A semiconductor firm targets 240 chips per day but makes 40, 60, and 80 on three consecutive days. The average of the daily factors needed to reach the target is $\tfrac13(240/40+240/60+240/80)=13/3\simeq4.3$. The factor needed to scale the average production to the target is $240/[(40+60+80)/3]=4$.

Let $X$ be the fraction of target production, equally likely to be $40/240$, $60/240$, or $80/240$. The two quantities are $E[1/X]$ and $1/E[X]$.

For a convex function $g$ and a random variable for which the relevant expectations exist, Jensen's inequality gives

$$
g(E[X])\leq E[g(X)].
$$

![[Kyle Kabasares - Probability and Statistics - Convex curve and the expectation balance point.png|**Fig. 46** The balance point of observations on the curve lies on or above the curve at the mean input.]]

For example, $g(x)=e^{-x}$ is convex because $g''(x)=e^{-x}>0$.

![[Kyle Kabasares - Probability and Statistics - Decreasing convex exponential sketch.png|**Fig. 47** The exponential $e^{-x}$ is decreasing and convex.]]

### PDF page 38

For the convex exponential example, Jensen's inequality gives $e^{-E[X]}\leq E[e^{-X}]$. The negative sign follows the function $g(x)=e^{-x}$ on page 37.

#### Transforming a discrete random variable

Let $Y=g(X)$. In the motivating example, an airline has 150 seats and offers 200 tickets. Model the number of tickets sold, $X$, as uniform on $\{1,\ldots,200\}$, with mass $1/200$ at each integer. Let $Y$ be the number of passengers turned away.

$$
g(x)=\max\{x-150,0\},
\qquad g(152)=2.
$$

![[Kyle Kabasares - Probability and Statistics - Mapping ticket sales to denied boarding counts.png|**Fig. 48** Sales of 1 through 150 tickets all map to zero. Each larger count maps to its excess above 150.]]

The probability of turning away nobody is $P(Y=0)=P(X\leq150)=150/200=3/4$. For $y=1,\ldots,50$, $P(Y=y)=P(X=150+y)=1/200$. In particular, the events for $Y=1$, $Y=2$, and $Y=50$ are exactly $X=151$, $X=152$, and $X=200$. The handwritten inequalities for $Y=1$ and $Y=2$ are read as equalities from the mapping and the masses. The value $Y=51$ is impossible.

### PDF page 39

In the airplane example, let $Z$ be the number of people who board. Then $Z=\min(X,150)$. The page gives $P(Z=1)=P(X=1)=1/200$, $P(Z=2)=P(X=2)=1/200$, and $P(Z=150)=P(X\geq150)=51/200$.

#### Discussion · February 20, 2015

**1. Bernoulli mean and variance.** The PMF is $p$ at 1, $1-p$ at 0, and zero elsewhere. Then

$$
E[X]=1\cdot p+0\cdot(1-p)=p,\qquad
E[X^2]=1^2p+0^2(1-p)=p,
$$

so $\operatorname{Var}(X)=p-p^2=p(1-p)$.

**2(a). Continuous uniform moments.** Let $X\sim U(\alpha,\beta)$, with density $1/(\beta-\alpha)$ on its support. Integrate over that interval.

$$
\begin{aligned}
E[X]
&=\frac{1}{\beta-\alpha}\int_\alpha^\beta x\,dx
=\frac{\beta^2-\alpha^2}{2(\beta-\alpha)}
=\frac{\alpha+\beta}{2},\\
E[X^2]
&=\frac{1}{\beta-\alpha}\int_\alpha^\beta x^2\,dx
=\frac{1}{\beta-\alpha}\left[\frac{x^3}{3}\right]_\alpha^\beta.
\end{aligned}
$$

### PDF page 40

For $X\sim U(\alpha,\beta)$, factor the difference of cubes to obtain the second moment, then subtract the square of the mean.

$$
\begin{aligned}
E[X^2]
&=\frac{\beta^3-\alpha^3}{3(\beta-\alpha)}
=\frac{\beta^2+\alpha\beta+\alpha^2}{3},\\
\operatorname{Var}(X)
&=\frac{\beta^2+\alpha\beta+\alpha^2}{3}
-\frac{(\alpha+\beta)^2}{4}
=\frac{(\beta-\alpha)^2}{12}.
\end{aligned}
$$

The handwritten work replaces $\beta^2+\alpha\beta+\alpha^2$ with $(\alpha+\beta)^2$. Retaining the correct cross term gives a variance that depends on the width of the interval.

**3. Exponential MGF.** For $X\sim\operatorname{Exp}(\lambda)$, use the positive half-line support.

$$
\phi_X(t)=\lambda\int_0^\infty e^{x(t-\lambda)}\,dx
=\left[\frac{\lambda e^{x(t-\lambda)}}{t-\lambda}\right]_0^\infty
=\frac{\lambda}{\lambda-t},
\qquad t<\lambda.
$$

#### Transforming continuous random variables · February 24, 2015

To find the distribution of $Y=g(X)$, first write its CDF as $F_Y(y)=P(Y\leq y)=P(g(X)\leq y)$. For the increasing invertible case in the notes, this is $F_X(g^{-1}(y))$ on the range of $g$. Then differentiate to obtain $f_Y(y)=dF_Y(y)/dy$ where the density applies.

The example compares two methods of catching speeders. In the first, an officer measures a car's speed at a point and allows speeds up to a threshold.

![[Kyle Kabasares - Probability and Statistics - Spot measurement of car speed.png|**Fig. 49** A vehicle passes a roadside speed measurement point.]]

In the second, time the car between checkpoints A and B. If it covers the segment in less than a specified time, the driver receives a ticket.

![[Kyle Kabasares - Probability and Statistics - Timing a car between checkpoints.png|**Fig. 50** Two points define a segment over which the car's travel time is measured.]]

### PDF page 41

The notes say the spot measurement in method 1 results in more tickets and refer to Swenson's slides for the comparison.

#### Reciprocal of a Cauchy variable

Let $X$ have the standard Cauchy density $f_X(x)=1/[\pi(1+x^2)]$. Find the distribution of $Y=1/X$.

![[Kyle Kabasares - Probability and Statistics - Cauchy and Gaussian density comparison.png|**Fig. 51** The sketch compares a Cauchy density with a Gaussian density.]]

Integrating the Cauchy density gives

$$
F_X(x)=\frac{1}{\pi}\left[\arctan t\right]_{-\infty}^{x}
=\frac12+\frac{1}{\pi}\arctan x.
$$

The handwritten calculation uses $1-F_X(1/y)$ for the CDF of $Y$. This applies for $y<0$. For $y>0$ the event also includes every negative value of $X$. Since $P(X<0)=1/2$,

$$
F_Y(y)=
\begin{cases}
1-F_X(1/y),&y<0,\\
1/2,&y=0,\\
1/2+1-F_X(1/y),&y>0.
\end{cases}
$$

Differentiating either nonzero branch gives the density in the handwritten result.

$$
f_Y(y)=\frac{1}{\pi[1+(1/y)^2]}\frac{1}{y^2}
=\frac{1}{\pi(1+y^2)}.
$$

The density extends to $y=0$ by continuity. The reciprocal is also standard Cauchy.

#### Logarithm of a uniform variable

Let $X\sim U(0,1)$ and $Y=-\ln X$. Find the distribution of $Y$ using the uniform CDF.

![[Kyle Kabasares - Probability and Statistics - Unit uniform CDF for logarithmic transformation.png|**Fig. 52** The CDF of $X$ equals $x$ between 0 and 1.]]

### PDF page 42

For $Y=-\ln X$ with $X\sim U(0,1)$, taking the negative reverses the inequality.

$$
F_Y(y)=P(-\ln X\leq y)=P(X\geq e^{-y})=1-F_X(e^{-y}).
$$

The cutoff $e^{-y}$ lies in $(0,1]$ for $y\geq0$, so $F_Y(y)=1-e^{-y}$ there and zero for $y<0$. Differentiating gives $f_Y(y)=e^{-y}$ on the nonnegative half-line. Thus $Y\sim\operatorname{Exp}(1)$.

![[Kyle Kabasares - Probability and Statistics - Exponential density from a logarithm.png|**Fig. 53** The negative logarithm of a unit uniform variable has a unit-rate exponential density.]]

#### Exponential to Pareto transformation

Let $X\sim\operatorname{Exp}(\lambda)$ and $Y=e^X$. The exponential CDF is $F_X(x)=1-e^{-\lambda x}$ for $x\geq0$ and zero otherwise.

![[Kyle Kabasares - Probability and Statistics - Exponential CDF before exponentiation.png|**Fig. 54** The exponential CDF increases toward 1.]]

For $y\geq1$,

$$
F_Y(y)=P(e^X\leq y)=P(X\leq\ln y)=F_X(\ln y)
=1-e^{-\lambda\ln y}=1-y^{-\lambda}.
$$

The CDF is zero below 1, and $Y\sim\operatorname{Par}(\lambda)$. The last line of the handwritten calculation uses a different symbol for the cutoff. The logarithm condition just above it gives $y\geq1$.

### PDF page 43

#### Joint distributions and independence

For discrete random variables $X$ and $Y$, their joint probability mass function is

$$
p(x,y)=P(X=x,Y=y)=P(\{X=x\}\cap\{Y=y\}).
$$

The Math 32 survey example cross-tabulates two scores from 1 to 5. One of the statements is “Lecture examples help my learning.” The table gives the joint counts for the 60 respondents, with marginal counts at the edges.

| $Y$ \ $X$ | 1 | 2 | 3 | 4 | 5 | Total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| 2 | 0 | 0 | 1 | 0 | 0 | 1 |
| 3 | 0 | 1 | 2 | 1 | 1 | 5 |
| 4 | 2 | 2 | 4 | 3 | 2 | 13 |
| 5 | 0 | 5 | 6 | 17 | 13 | 41 |
| Total | 2 | 8 | 13 | 21 | 16 | 60 |

Divide each count by 60 to get the probability for a student selected uniformly from the respondents. For example, $p(4,5)=17/60$, $p_X(4)=21/60$, and $p_Y(5)=41/60$. The probabilities sum to one. In general, sum over the other variable to get a marginal PMF.

$$
p_X(x)=\sum_y p(x,y),\qquad p_Y(y)=\sum_x p(x,y).
$$

#### Joint continuous distributions

A joint density $f(x,y)$ is nonnegative and integrates to one over the plane. The joint cumulative distribution function is

$$
F(x,y)=P(X\leq x,Y\leq y)
=\int_{-\infty}^x\int_{-\infty}^y f(a,b)\,db\,da.
$$

### PDF page 44

#### Joint distributions and independence · February 26, 2015

The survey compares whether lecture examples or discussions help students learn. The marginal distributions on page 43 give

$$
E[X]=\sum_{k=1}^5 kP(X=k)\simeq3.68,\qquad
E[Y]=\sum_{k=1}^5 kP(Y=k)\simeq4.57.
$$

#### Covariance

To study $\operatorname{Var}(X+Y)$, first write the mean of the sum using the joint PMF. For the discrete values $j,k$,

$$
\begin{aligned}
E[X+Y]
&=\sum_j\sum_k (j+k)P(X=j,Y=k)\\
&=\sum_j j\sum_k P(X=j,Y=k)+\sum_k k\sum_j P(X=j,Y=k)\\
&=\sum_j jP(X=j)+\sum_k kP(Y=k)=E[X]+E[Y].
\end{aligned}
$$

This derivation uses the marginal sums and applies even when $X$ and $Y$ are dependent. Recall $\operatorname{Var}(Z)=E[(Z-E[Z])^2]=E[Z^2]-(E[Z])^2$. For the sum, linearity gives

$$
\operatorname{Var}(X+Y)=E\bigl[((X-E[X])+(Y-E[Y]))^2\bigr].
$$

### PDF page 45

Expanding the squared sum gives

$$
\begin{aligned}
\operatorname{Var}(X+Y)
&=E[(X-E[X])^2]+E[(Y-E[Y])^2]+2E[(X-E[X])(Y-E[Y])] \\
&=\operatorname{Var}(X)+\operatorname{Var}(Y)+2\operatorname{Cov}(X,Y),
\end{aligned}
$$

where $\operatorname{Cov}(X,Y)=E[(X-E[X])(Y-E[Y])]$.

Positive covariance describes a tendency for deviations from the means to have the same sign. With negative covariance, the deviations tend to have opposite signs.

![[Kyle Kabasares - Probability and Statistics - Positive and negative covariance.png|**Fig. 55** Positive and negative covariance sketched around the point $(E[X],E[Y])$.]]

Covariance is symmetric, $\operatorname{Cov}(X,Y)=\operatorname{Cov}(Y,X)$, and its magnitude can change with a change of units, for example when replacing $X$ with $rX+s$. We therefore often work with the correlation coefficient

$$
\rho(X,Y)=\frac{\operatorname{Cov}(X,Y)}{\operatorname{sd}(X)\operatorname{sd}(Y)},
\qquad -1\le \rho(X,Y)\le 1.
$$

The notes distinguish association from causation. In the counterfactual description, $X$ causes $Y$ if $Y$ would not have happened without $X$. Randomization in an experiment can support a causal interpretation of an observed association.

An alternate expression for covariance is

$$
\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y].
$$

### PDF page 46

#### Joint continuous distributions

If $X$ and $Y$ have a joint probability density function $f(x,y)$, then $f(x,y)\ge 0$ and

$$
\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}f(x,y)\,dx\,dy=1.
$$

The joint distribution function is

$$
F(x,y)=\int_{-\infty}^{x}\int_{-\infty}^{y}f(a,b)\,db\,da
=P(X\le x,Y\le y).
$$

The marginal densities are

$$
f_X(x)=\int_{-\infty}^{\infty} f(x,y)\,dy,
\qquad
f_Y(y)=\int_{-\infty}^{\infty} f(x,y)\,dx.
$$

For a made-up example with simple integrals, take

$$
f(x,y)=\begin{cases}
x+y & 0\le x\le 1,\ 0\le y\le 1,\\
0 & \text{elsewhere}.
\end{cases}
$$

For $0\le x\le 1$,

$$
f_X(x)=\int_0^1(x+y)\,dy
=\left[xy+\frac{y^2}{2}\right]_0^1=x+\frac12.
$$

Similarly, $f_Y(y)=y+\tfrac12$ for $0\le y\le 1$. Each marginal density is zero outside $[0,1]$.

![[Kyle Kabasares - Probability and Statistics - Linear marginal density.png|**Fig. 56** The marginal density rises from $1/2$ at $0$ to $3/2$ at $1$.]]

To compute $\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y]$, start with

$$
\begin{aligned}
E[XY]
&=\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}xyf(x,y)\,dx\,dy \\
&=\int_0^1\int_0^1 xy(x+y)\,dx\,dy
=\int_0^1\int_0^1(x^2y+xy^2)\,dx\,dy \\
&=\int_0^1\left[\frac{x^3y}{3}+\frac{x^2y^2}{2}\right]_{x=0}^{x=1}dy
=\int_0^1\left(\frac y3+\frac{y^2}{2}\right)dy.
\end{aligned}
$$

### PDF page 47

#### Joint distributions and covariance (March 3, 2015)

Consider the joint density proportional to $e^{-\sqrt{x^2+y^2}/\tau}$, where $\tau>0$ is a parameter. To find the normalization constant, switch to polar coordinates and then substitute $w=r/\tau$, so that $r=\tau w$ and $dr=\tau\,dw$.

$$
\begin{aligned}
\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}
e^{-\sqrt{x^2+y^2}/\tau}\,dx\,dy
&=\int_0^{2\pi}\int_0^\infty e^{-r/\tau}r\,dr\,d\theta \\
&=2\pi\tau^2\int_0^\infty w e^{-w}\,dw \\
&=2\pi\tau^2.
\end{aligned}
$$

For the last integral, use integration by parts with $u=w$, $du=dw$, $dv=e^{-w}\,dw$, and $v=-e^{-w}$.

### PDF page 48

Integration by parts, $\int u\,dv=uv-\int v\,du$, completes the normalization calculation.

$$
\begin{aligned}
2\pi\tau^2\int_0^\infty we^{-w}\,dw
&=2\pi\tau^2\left(\left[-we^{-w}\right]_0^\infty
-\int_0^\infty -e^{-w}\,dw\right) \\
&=2\pi\tau^2(0-(-1))=2\pi\tau^2.
\end{aligned}
$$

Thus the joint density is

$$
f(x,y)=\frac{1}{2\pi\tau^2}e^{-\sqrt{x^2+y^2}/\tau}.
$$

#### Gaussian model

The Gaussian normalization integral separates as

$$
\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}
e^{-x^2/(2\sigma^2)}e^{-y^2/(2\sigma^2)}\,dx\,dy
=\left(\int_{-\infty}^{\infty} e^{-x^2/(2\sigma^2)}\,dx\right)
 \left(\int_{-\infty}^{\infty} e^{-y^2/(2\sigma^2)}\,dy\right).
$$

The joint density factors into the marginal densities.

$$
f(x,y)=
\underbrace{\frac{e^{-x^2/(2\sigma^2)}}{\sqrt{2\pi}\sigma}}_{f_X(x)}
\underbrace{\frac{e^{-y^2/(2\sigma^2)}}{\sqrt{2\pi}\sigma}}_{f_Y(y)}.
$$

Here $X$ and $Y$ are independent. The square root in the earlier model prevents this factorization. In that model $X$ and $Y$ are dependent and $\operatorname{Cov}(X,Y)=0$.

#### Power-law and exponential relationships

A power-law relationship becomes linear when plotting $\ln(y)$ against $\ln(x)$.

$$
y=\alpha x^\beta
\quad\Longrightarrow\quad
\ln(y)=\ln(\alpha x^\beta)=\ln(\alpha)+\beta\ln(x).
$$

For an exponential relationship, plotting $\ln(y)$ against $x$ gives a straight line.

$$
y=\alpha e^{\beta x}
\quad\Longrightarrow\quad
\ln(y)=\ln(\alpha e^{\beta x})=\ln(\alpha)+\beta x.
$$

### PDF page 49

#### Independence

For continuous random variables with joint density $f$, independence means the joint density factors as $f(x,y)=f_X(x)f_Y(y)$. For discrete random variables, independence means

$$
P(X=x,Y=y)=P(X=x)P(Y=y)
$$

for every $x$ and $y$. For example, if $X\sim\operatorname{Ber}(1/3)$ and $Y\sim\operatorname{Ber}(1/4)$ are independent, their joint probabilities are the products of the individual Bernoulli probabilities.

The notes return to the survey data.

| Response | $X=1$ | $X=2$ | $X=3$ | $X=4$ | $X=5$ | Total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| $Y=1$ | 0 | 0 | 0 | 0 | 0 | 0 |
| $Y=2$ | 0 | 0 | $1/60$ | 0 | 0 | $1/60$ |
| $Y=3$ | 0 | $1/60$ | $2/60$ | $1/60$ | $1/60$ | $5/60$ |
| $Y=4$ | $2/60$ | $2/60$ | $4/60$ | $3/60$ | $2/60$ | $13/60$ |
| $Y=5$ | 0 | $5/60$ | $6/60$ | $17/60$ | $13/60$ | $41/60$ |
| Total | $2/60$ | $8/60$ | $13/60$ | $21/60$ | $16/60$ | 1 |

#### Lecture of March 5, 2015

If $X$ and $Y$ are dependent, information about $X$ helps predict $Y$, and vice versa.

#### Law of large numbers and central limit theorem

In the sampling model used here, the population is usually treated as effectively infinite.

### PDF page 50

#### Sample size and confidence intervals

How large is a large enough sample? The notes address this by approximating the population standard deviation $\sigma$ with the sample standard deviation $s$.

| Statistic | Population | Sample |
| --- | --- | --- |
| Mean | $\mu$ | $\bar x$ |
| Standard deviation | $\sigma$ | $s$ |

What is a confidence interval for $\mu$? For example, suppose $(2.5,3.0)$ is a $95\%$ confidence interval for $\mu$. Over repeated samples, $95\%$ of the intervals produced by the procedure will contain $\mu$. The notes introduce two common methods for constructing such intervals.

#### Preliminary results for the sample mean

Suppose $X_1,\ldots,X_n$ are independent and identically distributed with $E[X_i]=\mu$ and $\operatorname{sd}(X_i)=\sqrt{\operatorname{Var}(X_i)}=\sigma$. Define $\bar X_n=(X_1+\cdots+X_n)/n$. By linearity of expectation,

$$
E[\bar X_n]=\frac1n\bigl(E[X_1]+\cdots+E[X_n]\bigr)
=\frac1n(\mu+\cdots+\mu)=\mu.
$$

By independence,

$$
\begin{aligned}
\operatorname{Var}(\bar X_n)
&=\frac{1}{n^2}\operatorname{Var}(X_1+\cdots+X_n) \\
&=\frac{1}{n^2}\bigl(\operatorname{Var}(X_1)+\cdots+\operatorname{Var}(X_n)\bigr)\\
&=\frac{n\sigma^2}{n^2}=\frac{\sigma^2}{n}.
\end{aligned}
$$

Thus $E[\bar X_n]=\mu$ and $\operatorname{sd}(\bar X_n)=\sigma/\sqrt n$.

### PDF page 51

#### Midterm review. Binomial distribution

There are $n$ independent trials with identical success probability. Each trial has two outcomes, success with probability $p$ and failure with probability $q=1-p$. The probability of exactly $x$ successes is

$$
P(X=x)=\binom{n}{x}p^xq^{n-x},
\qquad
\binom{n}{x}=\frac{n!}{(n-x)!\,x!}.
$$

Suppose a multiple-choice test has 10 questions and five choices for each question. With independent random guessing, $p=1/5$ and $q=4/5$. The probability of getting exactly four questions right is

$$
P(X=4)=\binom{10}{4}\left(\frac15\right)^4
\left(\frac45\right)^6\approx 0.08808,
$$

or about $9\%$.

#### Quiz review (March 6, 2015)

**1a.** Let $X\sim\operatorname{Exp}(1)$, so $f_X(x)=e^{-x}$ and $F_X(x)=1-e^{-x}$ for $x\ge 0$. For $Y=X/2$ and $y\ge 0$,

$$
F_Y(y)=P(Y\le y)=P(X/2\le y)=P(X\le 2y)=1-e^{-2y}.
$$

Thus $Y\sim\operatorname{Exp}(2)$.

**1b.** Let $X\sim\operatorname{Exp}(\lambda)$ with density $\lambda e^{-\lambda x}$ for $x\ge 0$. For $Y=\lambda X$ and $y\ge 0$,

$$
F_Y(y)=P(\lambda X\le y)
=P\left(X\le \frac y\lambda\right)
=1-e^{-\lambda(y/\lambda)}=1-e^{-y}.
$$

Thus $Y\sim\operatorname{Exp}(1)$. Both transformed CDFs are zero for $y<0$.

### PDF page 52

**2.** Let $X\sim\operatorname{Exp}(1)$ and $W=X^{1/\alpha}/\lambda$, with $\alpha,\lambda>0$. For $w\ge 0$,

$$
\begin{aligned}
F_W(w)&=P(W\le w)=P(X^{1/\alpha}\le \lambda w)\\
&=P(X\le (\lambda w)^\alpha)=1-e^{-(\lambda w)^\alpha}.
\end{aligned}
$$

**4.** Let $X\sim\operatorname{Par}(\alpha)$ with density $\alpha/x^{\alpha+1}$ for $x\ge 1$. The corrected Pareto CDF written in the margin is $F_X(x)=1-x^{-\alpha}$ for $x\ge 1$. Using this CDF for $Y=\ln(X)$ gives

$$
F_Y(y)=P(\ln(X)\le y)=P(X\le e^y)=1-e^{-\alpha y}
\qquad (y\ge 0).
$$

The CDF is zero for $y<0$, so $Y\sim\operatorname{Exp}(\alpha)$.

#### Midterm review. Poisson distribution

Under a Poisson model with an expected $\lambda$ occurrences in the specified interval, the probability of exactly $x$ occurrences is

$$
f(x;\lambda)=\frac{\lambda^x e^{-\lambda}}{x!}.
$$

A fast-food restaurant expects two customers every three minutes on average. The mean count in nine minutes is $\lambda=6$. The probability of four or fewer customers arriving in nine minutes is

$$
P(X\le 4)=\sum_{x=0}^4 P(X=x)
=\frac{6^0e^{-6}}{0!}+\frac{6^1e^{-6}}{1!}+\frac{6^2e^{-6}}{2!}
+\frac{6^3e^{-6}}{3!}+\frac{6^4e^{-6}}{4!}
\approx 0.2851.
$$

### PDF page 53

#### Expected value

If the outcomes $x_1,\ldots,x_n$ have probabilities $p_1,\ldots,p_n$, then

$$
E[X]=x_1p_1+x_2p_2+\cdots+x_np_n.
$$

Consider a spinner game that costs one dollar to play.

| Prize (dollars) | 0 | 2 | 1 | 10 |
| --- | ---: | ---: | ---: | ---: |
| Probability | $1/2$ | $1/4$ | $1/8$ | $1/8$ |

![[Kyle Kabasares - Probability and Statistics - Expected payoff spinner.png|**Fig. 57** The spinner's sectors encode the probabilities of the four prizes.]]

Subtract the entry fee from the expected prize to get the expected net winnings.

$$
E[X]=-1+0\left(\frac12\right)+1\left(\frac18\right)
+2\left(\frac14\right)+10\left(\frac18\right)
=\frac{-8+1+4+10}{8}=\frac78.
$$

The average net winnings are 0.875 dollars per game.

#### Continuous random variables and probability density functions

A continuous random variable can take values across an interval. For a variable $X$ with probability density $f$, the interval probability is $P(a\le X\le b)=\int_a^b f(x)\,dx$. The density satisfies $f(x)\ge 0$ everywhere and $\int_{-\infty}^{\infty} f(x)\,dx=1$.

For example, let the call-center waiting time $T$ be exponential with mean $\quantity{6}{min}$. With $t$ measured in minutes,

$$
f_T(t)=\begin{cases}
0 & t<0,\\
\frac16 e^{-t/6} & t\ge 0.
\end{cases}
$$

The probability that the call is answered in the first two minutes is

$$
P(0\le T\le 2)=\int_0^2\frac16 e^{-t/6}\,dt
=\left[-e^{-t/6}\right]_0^2=1-e^{-1/3}.
$$

### PDF page 54

The probability of waiting at least two minutes in the call-center example is

$$
P(T\ge 2)=\int_2^\infty \frac16 e^{-t/6}\,dt
=1-\int_0^2\frac16 e^{-t/6}\,dt=e^{-1/3}\approx 71.65\%.
$$

#### The exponential distribution

The exponential distribution models a continuous waiting time until an event. In this model, conditional on the event not having occurred yet, the probability of occurrence in a short interval is approximately proportional to the length of that interval.

The density with rate parameter $\lambda$ is

$$
f(x;\lambda)=\begin{cases}
\lambda e^{-\lambda x} & x\ge 0,\\
0 & x<0.
\end{cases}
$$

The expected duration is $\mu=1/\lambda$, so $\lambda=1/\mu$. If the expected duration is $\quantity{5}{min}$, for example, then the rate is $\quantity{0.2}{min^{-1}}$.

The cumulative distribution function gives the probability of a lifetime at most $x$.

$$
F(x;\lambda)=P(X\le x)=\begin{cases}
1-e^{-\lambda x} & x\ge 0,\\
0 & x<0.
\end{cases}
$$

### PDF page 55

For $\lambda=0.3$ and $x=10$, the exponential CDF gives $P(X\le 10)=1-e^{-(0.3)(10)}=1-e^{-3}$. The mean and variance are

$$
E[X]=\frac1\lambda=\mu,
\qquad
\operatorname{Var}(X)=\frac1{\lambda^2}=\mu^2=(E[X])^2.
$$

#### Phone-booth example

A phone call lasts an exponentially distributed number of minutes, with rate $\lambda=1/10$ per minute. Someone starts a call just before you arrive. Find the probabilities of waiting less than five minutes, more than five minutes, and between five and ten minutes. Also find the expected waiting time and its variance.

**a.** The probability of a wait under five minutes is $P(X\le 5)=1-e^{-5/10}\approx 0.3935$.

**b.** The question asks about five minutes, while the handwritten calculation uses ten. The survival formula gives both values.

$$
P(X>5)=e^{-5/10}\approx 0.6065,
\qquad
P(X\ge 10)=1-P(X\le 10)=e^{-10/10}=\frac1e\approx 0.3679.
$$

**c.** The event of being inside the interval is the complement of being below or above it. The two outside events are disjoint.

$$
P(5<X<10)=1-[P(X\le 5)+P(X\ge 10)]
=e^{-1/2}-e^{-1}\approx 0.2387.
$$

The notes report $0.2388$ after rounding the two outside probabilities before subtracting. The mean wait is $\quantity{10}{min}$ and the variance is $\quantity{100}{min^2}$.

### PDF page 56

The phone-booth interval probability can also be found directly by integrating the density.

$$
P(5<X<10)=\int_5^{10}\frac1{10}e^{-x/10}\,dx
=\left[-e^{-x/10}\right]_5^{10}
=-e^{-1}+e^{-1/2}\approx 0.2387.
$$

#### Discrete and continuous random variables

The notes use two examples. A fire department with a weight requirement of 150 to 250 pounds can model a firefighter's weight as continuous across that interval. The number of heads in $n$ coin flips is discrete, taking only integer values from $0$ to $n$.

#### Lecture of March 10, 2015

For an independent and identically distributed sample, recall

$$
\bar X_n=\frac1n(X_1+X_2+\cdots+X_n),
\qquad E[\bar X_n]=E[X_i]=\mu,
$$

$$
\operatorname{Var}(\bar X_n)=\frac{\sigma^2}{n},
\qquad
\operatorname{sd}(\bar X_n)=\frac{\sigma}{\sqrt n}.
$$

The histogram of sample means becomes more bell-shaped as $n$ grows. Can we compute a confidence interval for $\mu$ without resampling? The notes list Chebyshev's inequality, which gives conservative confidence intervals, and the central limit theorem, which gives large-sample confidence intervals. They give $n\ge 30$ as a rule of thumb.

To cut the standard deviation of the mean in half, choose a new sample size $n^*$ such that

$$
\frac{\operatorname{sd}(\bar X_{n^*})}{\operatorname{sd}(\bar X_n)}
=\frac{\sigma/\sqrt{n^*}}{\sigma/\sqrt n}=\frac12.
$$

Squaring gives $n/n^*=1/4$, so $n^*=4n$.

### PDF page 57

#### Chebyshev's inequality

For a random variable $Y$ with finite variance and any $a>0$, Chebyshev's inequality bounds the probability that the distance from $Y$ to its mean is at least $a$.

$$
P(\lvert Y-E[Y]\rvert\ge a)\le \frac{\operatorname{Var}(Y)}{a^2}.
$$

For $Y=\bar X_n$, this gives $P(\lvert\bar X_n-\mu\rvert\ge a)\le\sigma^2/(na^2)$.

How large can $\sigma^2$ be on a five-point scale? The largest value, $4$, occurs when half of the probability is at each endpoint, $1$ and $5$. In that case $\mu=3$ and

$$
\operatorname{Var}(X)=E[(X-3)^2]
=\frac12(1-3)^2+\frac12(5-3)^2=4.
$$

Thus for a five-point scale, $P(\lvert\bar X_n-\mu\rvert\ge a)\le 4/(na^2)$.

#### Central limit theorem

For independent and identically distributed $X_1,\ldots,X_n$ with finite mean and finite positive variance, the sum $S_n=X_1+\cdots+X_n$ and mean $\bar X_n=S_n/n$ are approximately normally distributed for large $n$. The standardized distributions approach the standard normal as $n\to\infty$.

For $Y\sim N(\mu,\sigma^2)$, the notes give the following rounded central areas under the normal curve.

| Range | Area in the notes |
| --- | ---: |
| $\mu\pm\sigma$ | $68\%$ |
| $\mu\pm2\sigma$ | $95\%$ |
| $\mu\pm3\sigma$ | $99\%$ |

![[Kyle Kabasares - Probability and Statistics - Normal areas for the empirical rule.png|**Fig. 58** Shaded areas within one, two, and three standard deviations of the normal mean. The notes round the three-standard-deviation area to 99%.]]

### PDF page 58

For $Y=\bar X_n$, the mean is $E[Y]=\mu$ and the standard deviation is $\sigma/\sqrt n$. Using two standard deviations for the approximate $95\%$ normal interval gives

$$
\left(\bar x-\frac{2\sigma}{\sqrt n},\ \bar x+\frac{2\sigma}{\sqrt n}\right).
$$

In practice, the notes replace $\sigma$ with the sample standard deviation $s$ and use

$$
\left(\bar x-\frac{2s}{\sqrt n},\ \bar x+\frac{2s}{\sqrt n}\right).
$$

For the data, $n=14$, $\bar x_{14}\approx 3.07$, and $s_{14}\approx 1.38$. The approximate $95\%$ confidence interval calculated by this method is

$$
\left(3.07-\frac{2(1.38)}{\sqrt{14}},\ 3.07+\frac{2(1.38)}{\sqrt{14}}\right)
\approx(2.33,3.81).
$$

### PDF page 59

#### Law of large numbers (March 17, 2015)

Apply Chebyshev's inequality to $Y=\bar X_n$. If $\sigma^2=\operatorname{Var}(X_i)$ is finite, then for each $\varepsilon>0$,

$$
P(\lvert\bar X_n-\mu\rvert>\varepsilon)
=P(\lvert\bar X_n-E[\bar X_n]\rvert>\varepsilon)
\le \frac{\operatorname{Var}(\bar X_n)}{\varepsilon^2}
=\frac{\sigma^2}{n\varepsilon^2}\longrightarrow 0
\qquad(n\to\infty).
$$

The notes illustrate this weak law of large numbers with two sampling distributions. In the first, $\bar X_n$ is within $\varepsilon$ of $\mu$ most of the time. As $n$ grows, this probability approaches one.

![[Kyle Kabasares - Probability and Statistics - Sample mean with a modest sample size.png|**Fig. 59** Sampling distribution of the mean for a modest sample size, with the interval from $\mu-\varepsilon$ to $\mu+\varepsilon$ shaded.]]

![[Kyle Kabasares - Probability and Statistics - Sample mean with a large sample size.png|**Fig. 60** For a larger sample size the distribution concentrates more of its probability in the same interval.]]

#### Coin flips or a yes/no survey

Let $X_1,\ldots,X_n$ be independent Bernoulli variables with parameter $p$. Then $E[X_i]=p$ and $\operatorname{Var}(X_i)=p(1-p)$. If $p=1/2$, for what values of $n$ will $P(0.4\le\bar X_n\le 0.6)\ge 0.7$?

$$
P(0.4\le\bar X_n\le 0.6)=P(\lvert\bar X_n-\mu\rvert\le 0.1)
=1-P(\lvert\bar X_n-\mu\rvert>0.1).
$$

### PDF page 60

Apply Chebyshev's inequality to the coin-flip sample mean. For $p=1/2$,

$$
P(\lvert\bar X_n-\mu\rvert>0.1)
\le \frac{\operatorname{Var}(\bar X_n)}{0.1^2}
=\frac{100p(1-p)}{n}=\frac{25}{n}.
$$

The probability of being within $0.1$ of the mean is therefore at least $1-25/n$. To make this lower bound at least $0.7$, solve $1-25/n\ge 0.7$, or $n\ge 25/0.3$. The sufficient integer sample size is $84$.

For $0\le p\le 1$, the Bernoulli variance $p(1-p)$ is greatest at $p=1/2$, where it equals $1/4$.

![[Kyle Kabasares - Probability and Statistics - Bernoulli variance by success probability.png|**Fig. 61** Bernoulli variance vanishes at $p=0$ and $p=1$ and peaks at $p=1/2$.]]

#### Central limit theorem

For a large independent and identically distributed sample, $\bar X_n$ has approximate distribution $N(\mu,\sigma^2/n)$. Equivalently, $S_n=X_1+\cdots+X_n$ has approximate distribution $N(n\mu,n\sigma^2)$. Linearity of expectation and independence give

$$
\begin{aligned}
E[S_n]&=E[X_1]+\cdots+E[X_n]=n\mu,\\
\operatorname{Var}(S_n)&=\operatorname{Var}(X_1)+\cdots+\operatorname{Var}(X_n)=n\sigma^2.
\end{aligned}
$$

### PDF page 61

#### Applying the central limit theorem

Standardize the statistic and its threshold, then use the standard normal table (Table B.1 in the notes). With $Z\sim N(0,1)$,

$$
\begin{aligned}
P(\bar X_n>a)
&=P\left(\frac{\bar X_n-E[\bar X_n]}{\operatorname{sd}(\bar X_n)}
>\frac{a-E[\bar X_n]}{\operatorname{sd}(\bar X_n)}\right)\\
&=P\left(\frac{\bar X_n-\mu}{\sigma/\sqrt n}
>\frac{a-\mu}{\sigma/\sqrt n}\right)
\approx P\left(Z>\frac{\sqrt n(a-\mu)}{\sigma}\right).
\end{aligned}
$$

The same method for the sum gives

$$
\begin{aligned}
P(S_n>a)
&=P\left(\frac{S_n-E[S_n]}{\operatorname{sd}(S_n)}
>\frac{a-E[S_n]}{\operatorname{sd}(S_n)}\right)\\
&=P\left(\frac{S_n-n\mu}{\sigma\sqrt n}
>\frac{a-n\mu}{\sigma\sqrt n}\right)
\approx P\left(Z>\frac{a-n\mu}{\sigma\sqrt n}\right).
\end{aligned}
$$

#### Normal approximation to the binomial

If $X\sim\operatorname{Bin}(n,p)$, represent it as $X=R_1+\cdots+R_n$ with independent $R_i\sim\operatorname{Ber}(p)$. The mean and variance are

$$
\begin{aligned}
E[X]&=E[R_1]+\cdots+E[R_n]=np,\\
\operatorname{Var}(X)&=\operatorname{Var}(R_1)+\cdots+\operatorname{Var}(R_n)=np(1-p).
\end{aligned}
$$

The central limit theorem gives the normal approximation $N(np,np(1-p))$.

### PDF page 62

#### Roulette example

A roulette wheel has 38 slots, labeled $0$, $00$, and $1$ through $36$. A one-unit bet on a specified number wins 35 units net if that number comes up and loses one unit otherwise. What is the probability of being ahead after 34, 1,000, or 100,000 bets?

Let $X_i$ be the net winnings from bet $i$ and let $S_n=X_1+\cdots+X_n$. Then $P(X_i=35)=1/38$ and $P(X_i=-1)=37/38$. The first two moments and the variance are

$$
\begin{aligned}
E[X_i]&=(-1)\frac{37}{38}+35\frac1{38}=-\frac1{19},\\
E[X_i^2]&=(-1)^2\frac{37}{38}+35^2\frac1{38}
=\frac{1262}{38}=\frac{631}{19},\\
\operatorname{Var}(X_i)&=\frac{631}{19}-\left(-\frac1{19}\right)^2\approx 33.2.
\end{aligned}
$$

#### Lecture of March 19, 2015

Continue with the independent payoffs $X_i$. The questions are to approximate $P(S_{34}>0)$, $P(S_{1000}>0)$, and $P(S_{100000}>0)$. Start with the mean of the sum.

$$
E[S_n]=E[X_1+\cdots+X_n]=E[X_1]+\cdots+E[X_n]
=nE[X_i]=-\frac n{19}.
$$

### PDF page 63

By independence, $\operatorname{Var}(S_n)=\sum_{i=1}^n\operatorname{Var}(X_i)=n\operatorname{Var}(X_i)\approx 33.208n$. The lecture uses the normal approximation and computes the upper tail at zero with `1 - pnorm(0, mean = -n/19, sd = sqrt(33.208*n))` in R.

| Bets $n$ | Normal approximation to $P(S_n>0)$ |
| ---: | ---: |
| 34 | $0.48$ |
| 1,000 | $0.39$ |
| 100,000 | $0.002$ |

#### Rounding error example

An accountant rounds amounts to the nearest dollar. Both 99.53 dollars and 100.46 dollars round to 100 dollars. What is the cumulative effect over 100 amounts?

Model the rounding errors $X_1,\ldots,X_{100}$ in dollars as independent $U(-1/2,1/2)$ variables. Use the central limit theorem to approximate the probability that the total error exceeds ten dollars in either direction.

![[Kyle Kabasares - Probability and Statistics - Uniform density of a rounding error.png|**Fig. 62** An individual rounding error is modeled as uniform from minus one-half to plus one-half dollar.]]

Writing $S_{100}=X_1+\cdots+X_{100}$, the two tails are equal by symmetry. If $p=P(S_{100}>10)$, then

$$
P(\lvert S_{100}\rvert>10)
=P(S_{100}<-10)+P(S_{100}>10)=2p.
$$

### PDF page 64

For the rounding errors, each $E[X_i]=0$ and $\operatorname{Var}(X_i)=(1/2-(-1/2))^2/12=1/12$. By linearity of expectation and independence,

$$
E[S_{100}]=0+\cdots+0=0,
\qquad
\operatorname{Var}(S_{100})=\sum_{i=1}^{100}\operatorname{Var}(X_i)=\frac{100}{12}.
$$

Thus the central limit theorem gives

$$
p=P(S_{100}>10)
=P\left(\frac{S_{100}-E[S_{100}]}{\sqrt{\operatorname{Var}(S_{100})}}
>\frac{10-0}{\sqrt{100/12}}\right)
\approx P(Z>3.46)\approx 0.0003.
$$

The two-sided probability is approximately $2p\approx 0.0006$ with the notes' rounding.

#### Approximating binomial probabilities

Write $X\sim\operatorname{Bin}(n,p)$ as a sum of independent $\operatorname{Ber}(p)$ variables. Since $E[X]=np$ and $\operatorname{Var}(X)=np(1-p)$, the standardized variable $(X-np)/\sqrt{np(1-p)}$ is approximately standard normal for large $n$.

The examples ask for $P(X\ge 21)$ when $X\sim\operatorname{Bin}(41,0.55)$, and $P(X\ge 201)$ when $X\sim\operatorname{Bin}(401,0.55)$. For the continuity correction, approximate the mass at integer $i$ by the normal probability from $i-\tfrac12$ to $i+\tfrac12$. Let $Y$ be normal with the same mean and variance as $X$. For the first example,

$$
\begin{aligned}
P(X\ge 21)&\approx P(Y\ge 20.5) \\
&=P\left(Z\ge \frac{20.5-41(0.55)}{\sqrt{41(0.55)(1-0.55)}}\right)
\approx P(Z\ge -0.64).
\end{aligned}
$$

### PDF page 65

With the continuity correction, the normal table gives $P(Z\ge-0.64)=1-0.2611=0.7389$. The exact binomial probability is approximately $0.740812$.

The notes record $0.7881$ for the approximation without a continuity correction. This corresponds to placing the normal threshold at $20$. Placing it at $21$ instead gives $P(Z\ge (21-22.55)/\sqrt{41(0.55)(0.45)})\approx 0.687$.

### PDF page 66

#### Part II. Statistics (March 31, 2015)

The two goals of statistics are description and inference. Descriptive statistics include the sample mean. Tools for inference include point estimates, confidence intervals, and hypothesis tests. The lecture emphasizes point estimates and confidence intervals, with a note that statistics instructors often devote too much time to hypothesis testing.

A statistic is a function of a set of random variables and is itself a random variable. Examples include the sample mean, sample variance, and sample maximum.

$$
\bar X_n=\frac1n(X_1+\cdots+X_n),
\qquad
s_n^2=\frac1{n-1}\sum_{i=1}^n(X_i-\bar X_n)^2,
\qquad
M_n=\max\{X_1,\ldots,X_n\}.
$$

The notes describe inference as the process of figuring something out from the data.

#### Exploratory data analysis

A histogram is a binned representation of the data. Its vertical axis shows density or frequency, its breaks mark the boundaries of the bins, and its local peaks are modes. The bin width acts as a smoothing parameter.

![[Kyle Kabasares - Probability and Statistics - Histogram bins breaks and mode.png|**Fig. 63** The sketch identifies the histogram's density or frequency axis, bins, breaks, and a local maximum.]]

### PDF page 67

#### Kernel density estimates

A kernel density estimate is a continuous graphical representation of the data. It places a mound of probability density at each data point, which the notes describe as convolution. The two choices are the kernel and the bandwidth, with the bandwidth acting as the smoothing parameter.

#### Empirical CDF (April 2, 2015)

For a dataset of size $n$, the empirical cumulative distribution function is

$$
F_n(x)=\frac{\text{number of data points at most }x}{n}.
$$

For the data $4,3,9,1,7$, the page lists the following evaluations.

| $x$ | $F_5(x)$ |
| ---: | ---: |
| $0$ | $0/5=0$ |
| $1/2$ | $0/5=0$ |
| $1$ | $1/5=0.2$ |
| $3$ | $2/5=0.4$ |
| $4$ | $3/5=0.6$ |
| $7$ | $4/5=0.8$ |
| $9$ | $5/5=1$ |
| $42$ | $5/5=1$ |

The last row is left as a calculation in the handwriting. All five observations are at most $42$.

#### Scatter plots

Scatter plots visualize bivariate, or two-dimensional, data.

### PDF page 68

#### Numerical summaries of data

The sample mean is $\bar X_n=(X_1+\cdots+X_n)/n$. The capital-letter statistic $\bar X_n$ is a random variable, while $\bar x_n$ is the numerical mean of the observed data. By the law of large numbers, $\bar X_n$ estimates $\mu=E[X_1]$.

The hourly temperature observations in degrees Celsius are

$$
43,\ 43,\ 41,\ 41,\ 41,\ 42,\ 43,\ 58,\ 58,\ 41,\ 41.
$$

The sample mean is $\thermal{\bar x}_{11}\approx\quantity{44.7}{{}^\circ C}$. The median is the middle observation after sorting, or the average of the two middle observations for an even sample size. The median is more robust to outliers than the mean. The notes ask what defines an outlier.

#### Measures of variability

The sample variance and sample standard deviation are

$$
s_n^2=\frac1{n-1}\sum_{i=1}^n(x_i-\bar x_n)^2,
\qquad s_n=\sqrt{s_n^2}.
$$

Other measures of variability, such as the median absolute deviation, are more robust to outliers. The population variance is $\sigma^2=\operatorname{Var}(X)=E[(X-\mu)^2]$, with $\mu=E[X]$. The law of large numbers motivates the approximation $\sigma^2\approx n^{-1}\sum_{i=1}^n(X_i-\bar X_n)^2$.

### PDF page 69

#### Unbiased sample variance

For an independent and identically distributed sample, the sample variance with denominator $n-1$ is unbiased for $\sigma^2$.

$$
E[s_n^2]=E\left[\frac1{n-1}\sum_{i=1}^n(X_i-\bar X_n)^2\right]=\sigma^2.
$$

![[Kyle Kabasares - Probability and Statistics - Targets illustrating estimator bias.png|**Fig. 64** The first and third targets show estimates centered on the true value with different spreads. The middle target shows estimates shifted away from the true value.]]

When centering at the population mean, dividing by $n$ gives $E[n^{-1}\sum_{i=1}^n(X_i-\mu)^2]=\sigma^2$. When centering at the sample mean, $E[n^{-1}\sum_{i=1}^n(X_i-\bar X_n)^2]$ differs from $\sigma^2$ in general.

#### Degrees of freedom

Degrees of freedom correspond here to linear dimensionality. Three unconstrained numbers have three degrees of freedom. Fixing the mean of $x,y,z$ at $5$ constrains the triple to the plane $x+y+z=15$, leaving two degrees of freedom. The handwritten equation places $1/3$ on the left with $15$ on the right. The fixed mean gives $(x+y+z)/3=5$.

The lecture gives the rule that degrees of freedom equal the number of data points minus the number of estimated parameters in this setting.

#### Five-number summary

The five-number summary comprises the minimum, lower quartile (25th percentile), median, upper quartile (75th percentile), and maximum. The notes point to the `summary` command in R.

### PDF page 70

The interquartile range is $\operatorname{IQR}=Q_3-Q_1$, the upper quartile minus the lower quartile.

#### Practice exam 2 (April 3, 2015)

**1a.** Compute the expected product using the joint probabilities.

$$
\begin{aligned}
E[XY]
&=(0)(-1)\tfrac16+(1)(-1)\tfrac16+(2)(-1)\tfrac16\\
&\quad +(0)(1)(0)+(1)(1)\tfrac12+(2)(1)(0)\\
&=-\tfrac16-\tfrac26+\tfrac12=0.
\end{aligned}
$$

**1b.** Independence would require the joint probability to equal the product of the marginals. Here $P(X=1)P(Y=1)=(2/3)(1/2)=1/3$, whereas $P(X=1,Y=1)=1/2$. Thus $X$ and $Y$ are dependent.

**1c.** Compute the marginal expectations.

$$
E[X]=0\cdot\tfrac16+1\cdot\tfrac23+2\cdot\tfrac16=1,
\qquad E[Y]=(-1)\tfrac12+1\cdot\tfrac12=0.
$$

Hence $\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y]=0-(1)(0)=0$. The variables are uncorrelated.

**2.** Find $P(X<15)$ for the count of defective items when $n=100$ and the defect probability is $p=1/5$. The expected number of defects is $np=20$. The page recalls Chebyshev's inequality, $P(\lvert X-E[X]\rvert\ge a)\le\operatorname{Var}(X)/a^2$, and represents the count by $S_{100}=X_1+\cdots+X_{100}$. For a sum $S_n$ of independent identically distributed variables, the mean is $n\mu$ and the variance is $n\sigma^2$.

### PDF page 71

**3.** A score $X$ has mean $\mu=75$ and variance $\sigma^2=25$. Find a bound for $P(55\le X\le 95)$. Both endpoints are $20$ points from the mean. Chebyshev's inequality gives

$$
P(\lvert X-75\rvert\ge 20)\le \frac{25}{20^2}=\frac1{16}.
$$

Taking the complement gives $P(55<X<95)\ge 15/16$, so the inclusive interval also has probability at least $15/16$. The handwriting simplifies $25/400$ to $1/8$ and keeps the original inequality direction when taking the complement. The fraction and direction above follow from the stated variance and cutoff.

### PDF page 72

#### Exam 2 review (April 6, 2015)

The topics are joint distributions, covariance, the law of large numbers, and the central limit theorem.

Chebyshev's inequality bounds the chance that $X$ differs from its mean $\mu$ by at least $a$ by the variance divided by $a^2$. To prove it, start from Markov's inequality, $P(U\ge b)\le E[U]/b$ for $U\ge 0$ and $b>0$. Applied to $U=\lvert X-\mu\rvert$ at $b=a$, this gives the bound $E[\lvert X-\mu\rvert]/a$. To obtain Chebyshev's bound, use $U=(X-\mu)^2$ and $b=a^2$. These choices describe the same event.

$$
P(\lvert X-\mu\rvert\ge a)=P((X-\mu)^2\ge a^2)
\le \frac{E[(X-\mu)^2]}{a^2}=\frac{\operatorname{Var}(X)}{a^2}.
$$

The weak law of large numbers states that $\lim_{n\to\infty}P(\lvert\bar X_n-\mu\rvert>\varepsilon)=0$ for every $\varepsilon>0$. As the sample size grows, it becomes less likely that the sample mean differs from the population mean by more than a fixed positive amount.

![[Kyle Kabasares - Probability and Statistics - Population and sample mean convergence.png|**Fig. 65** A sample comes from a population, and its mean converges in probability to the population mean as the sample size grows.]]

For independent observations of common variance $\sigma^2$,

$$
\bar X_n=\frac1n\sum_{i=1}^n X_i,
\qquad
\operatorname{Var}(\bar X_n)
=\frac1{n^2}\sum_{i=1}^n\operatorname{Var}(X_i)
=\frac{n\sigma^2}{n^2}=\frac{\sigma^2}{n}.
$$

Chebyshev's inequality bounds $P(\lvert\bar X_n-\mu\rvert>\varepsilon)$ by $\operatorname{Var}(\bar X_n)/\varepsilon^2=\sigma^2/(n\varepsilon^2)$, which tends to zero.

### PDF page 73

The preceding bound $\sigma^2/(n\varepsilon^2)$ tends to zero as $n\to\infty$.

#### Central limit theorem

Imagine repeatedly drawing samples from the population and recording a mean for each sample. The sampling distribution of those means is centered at the population mean $\mu$ and becomes approximately normal for large samples.

![[Kyle Kabasares - Probability and Statistics - Repeated samples from a population.png|**Fig. 66** Repeated samples from the same population yield separate sample means.]]

For a uniform population with $E[X]=0.5$, there are many more ways to obtain an average near $0.5$ than near $0.1$ or $0.9$ as the number of observations per sample increases.

![[Kyle Kabasares - Probability and Statistics - Uniform population in the central limit theorem example.png|**Fig. 67** The population distribution is drawn with a flat density and mean $0.5$.]]

![[Kyle Kabasares - Probability and Statistics - Bell shaped distribution of sample means.png|**Fig. 68** The sampling distribution of the mean is drawn as a bell curve centered at $\mu$.]]

#### Review of the mean and variance of an average

For independent and identically distributed variables, the average of the first $n$ is $\bar X_n=(X_1+\cdots+X_n)/n$. If the variables have common mean $\mu$ and variance $\sigma^2$, then

$$
E[\bar X_n]=\frac1n E[X_1+\cdots+X_n]
=\frac1n(\mu+\cdots+\mu)=\mu,
$$

$$
\operatorname{Var}(\bar X_n)
=\frac1{n^2}\operatorname{Var}(X_1+\cdots+X_n)
=\frac1{n^2}(\sigma^2+\cdots+\sigma^2)
=\frac{\sigma^2}{n}.
$$

The variance calculation uses independence and a common variance, and the mean calculation uses a common expectation.

### PDF page 74

#### Chebyshev's inequality in standard deviations

Let $Y$ have mean $\mu$ and variance $\sigma^2>0$. Set $a=k\sigma$ for $k>0$ in Chebyshev's inequality. Then

$$
P(\lvert Y-\mu\rvert\ge k\sigma)
\le \frac{\operatorname{Var}(Y)}{(k\sigma)^2}=\frac1{k^2}.
$$

Taking the complement yields

$$
P(\lvert Y-\mu\rvert<k\sigma)
=1-P(\lvert Y-\mu\rvert\ge k\sigma)\ge 1-\frac1{k^2}.
$$

As a rough rule, most probability mass lies within a few standard deviations of the expectation.

#### Law of large numbers example

Let $X_i$ be the outcome of the $i$th independent coin toss, coded as $1$ for heads and $0$ for tails. Then $p=P(X_i=1)=E[X_i]$, and $\bar X_n$ is the fraction of heads after $n$ tosses. With $p=1/2$, how large should $n$ be for $P(0.4\le\bar X_n\le0.6)\ge0.7$?

Here $\mu=0.5$ and $\operatorname{Var}(\bar X_n)=p(1-p)/n=1/(4n)$. By Chebyshev's inequality,

$$
\begin{aligned}
P(0.4\le\bar X_n\le0.6)
&=1-P(\lvert\bar X_n-\mu\rvert>0.1)\\
&\ge 1-\frac{\operatorname{Var}(\bar X_n)}{(0.1)^2}
=1-\frac{25}{n}.
\end{aligned}
$$

Require $1-25/n\ge0.7$, giving $n\ge25/0.3=83.\overline{3}$. Thus $84$ tosses suffice by this bound.

### PDF page 75

#### Worksheet 8

For the Bernoulli sample mean, $E[\bar X_n]=p$ and $\operatorname{Var}(\bar X_n)=p(1-p)/n\le 1/(4n)$ for every $p\in[0,1]$. The maximum occurs at $p=1/2$. Thus, writing $\mu=p$,

$$
P(\lvert\bar X_n-\mu\rvert<a)
=1-P(\lvert\bar X_n-\mu\rvert\ge a)
\ge 1-\frac{\operatorname{Var}(\bar X_n)}{a^2}
\ge 1-\frac1{4na^2}.
$$

**1a.** For error less than $0.2$ with probability at least $0.9$, require $1-6.25/n\ge 0.9$. This gives $n\ge 6.25/0.1=62.5$, so $n\ge 63$ suffices.

**1b.** For error at most $0.1$ with probability at least $0.9$, the same bound gives $1-25/n\ge0.9$. This holds for $n\ge250$.

**1c.** For error at most $0.2$ with probability at least $0.95$, the bound gives $1-6.25/n\ge0.95$. This holds for $n\ge125$.

### PDF page 76

#### Joint distributions and independence

The joint distribution of two discrete random variables $X$ and $Y$ defined on the same sample space $\Omega$ specifies probabilities for every pair of values. The joint probability mass function $p:\mathbb R^2\to[0,1]$ is $p(a,b)=P(X=a,Y=b)$.

For two independent throws of a fair die, let $S$ be the sum and $M$ the maximum. Then $p(a,b)=P(S=a,M=b)$. For example, $S=7$ and $M=4$ can occur only as the ordered pairs $(3,4)$ and $(4,3)$. Therefore $P(S=7,M=4)=2/36$.

| $S$ | $M=1$ | $M=2$ | $M=3$ | $M=4$ | $M=5$ | $M=6$ | $P(S=a)$ |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 2 | $1/36$ | 0 | 0 | 0 | 0 | 0 | $1/36$ |
| 3 | 0 | $2/36$ | 0 | 0 | 0 | 0 | $2/36$ |
| 4 | 0 | $1/36$ | $2/36$ | 0 | 0 | 0 | $3/36$ |
| 5 | 0 | 0 | $2/36$ | $2/36$ | 0 | 0 | $4/36$ |
| 6 | 0 | 0 | $1/36$ | $2/36$ | $2/36$ | 0 | $5/36$ |
| 7 | 0 | 0 | 0 | $2/36$ | $2/36$ | $2/36$ | $6/36$ |
| 8 | 0 | 0 | 0 | $1/36$ | $2/36$ | $2/36$ | $5/36$ |
| 9 | 0 | 0 | 0 | 0 | $2/36$ | $2/36$ | $4/36$ |
| 10 | 0 | 0 | 0 | 0 | $1/36$ | $2/36$ | $3/36$ |
| 11 | 0 | 0 | 0 | 0 | 0 | $2/36$ | $2/36$ |
| 12 | 0 | 0 | 0 | 0 | 0 | $1/36$ | $1/36$ |
| $P(M=b)$ | $1/36$ | $3/36$ | $5/36$ | $7/36$ | $9/36$ | $11/36$ | 1 |

The right column gives the marginal probabilities for the sum, and the bottom row gives those for the maximum.

### PDF page 77

For a joint continuous distribution with density $f$, the probability of a rectangle is

$$
P(a_1\le X\le b_1,\ a_2\le Y\le b_2)
=\int_{a_2}^{b_2}\int_{a_1}^{b_1}f(x,y)\,dx\,dy,
$$

where $a_1\le b_1$ and $a_2\le b_2$. Integrating the joint density over all of $\mathbb R^2$ gives $1$. The joint distribution function and its relation to the density are

$$
F(a,b)=\int_{-\infty}^b\int_{-\infty}^a f(x,y)\,dx\,dy,
\qquad
f(x,y)=\frac{\partial^2 F(x,y)}{\partial x\,\partial y}
$$

where the mixed derivative recovers the density at points of continuity.

Suppose $f(x,y)=\frac{2}{75}(2x^2y+xy^2)$ on $0\le x\le 3$, $1\le y\le 2$, and zero elsewhere. Compute the probability of $1<X\le 2$ and $4/3\le Y\le 5/3$.

$$
\begin{aligned}
P\left(1<X\le 2,\ \tfrac43\le Y\le \tfrac53\right)
&=\frac{2}{75}\int_{4/3}^{5/3}\int_1^2(2x^2y+xy^2)\,dx\,dy\\
&=\frac{2}{75}\int_{4/3}^{5/3}
\left[\frac23 x^3y+\frac12x^2y^2\right]_{x=1}^{x=2}dy\\
&=\frac{2}{75}\int_{4/3}^{5/3}\left(\frac{14}{3}y+\frac32 y^2\right)dy\\
&=\frac{2}{75}\left[\frac{14}{6}y^2+\frac12y^3\right]_{4/3}^{5/3}\\
&=\frac{2}{75}\left(\frac{14}{6}+\frac{61}{54}\right)=\frac{187}{2025}.
\end{aligned}
$$

The handwriting boxes $15/6$ after omitting the prefactor $2/75$ and dropping the cube when substituting into the antiderivative. The calculation above retains both.

### PDF page 78

#### Bootstrap confidence intervals (April 7, 2015)

Homework 5 is due April 24, 2015. A $95\%$ confidence procedure produces intervals that contain the true parameter in $95\%$ of repeated samples. For a large sample, with $n\ge 30$ given as a rule of thumb, the notes illustrate a normal approximation for the population mean with standard normal critical values $\pm1.96$.

![[Kyle Kabasares - Probability and Statistics - Central ninety five percent of the standard normal.png|**Fig. 69** The shaded central area between $-1.96$ and $1.96$ is $0.95$, with $0.025$ in each tail.]]

To construct a bootstrap confidence interval for a parameter $T$, start with a dataset of size $n$.

1. Resample the dataset with replacement to obtain a new dataset of size $n$.
2. Compute the estimate of $T$ on the resampled dataset.
3. Repeat the first two steps many times, for example 1,000 or 10,000 times.

This process is called bootstrapping. A $95\%$ percentile bootstrap confidence interval is bounded by the 2.5th and 97.5th percentiles of the bootstrap estimates, leaving the middle $95\%$.

#### Midterm review. Covariance and expectation

$$
\operatorname{Var}(X+Y)=E[(X+Y-E[X+Y])^2]
=\operatorname{Var}(X)+\operatorname{Var}(Y)+2\operatorname{Cov}(X,Y).
$$

The page begins a reminder about positive covariance. For discrete $X$ and $Y$ with possible values $a_i$ and $b_j$,

$$
E[g(X,Y)]=\sum_i\sum_j g(a_i,b_j)P(X=a_i,Y=b_j).
$$

For a joint continuous density $f$,

$$
E[g(X,Y)]=\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}
g(x,y)f(x,y)\,dx\,dy.
$$

### PDF page 79

For the discrete example, the joint probabilities are

| $b\backslash a$ | $0$ | $1$ | $2$ |
| ---: | ---: | ---: | ---: |
| $0$ | $0$ | $1/4$ | $0$ |
| $1$ | $1/4$ | $0$ | $1/4$ |
| $2$ | $0$ | $1/4$ | $0$ |

Only the pairs $(1,2)$ and $(2,1)$ have both a nonzero product and a nonzero probability. Thus $E[XY]=1\cdot2\cdot(1/4)+2\cdot1\cdot(1/4)=1$.

#### Expectation, covariance, and variance

Expectation is linear, so $E[X+Y]=E[X]+E[Y]$ and $E[rX+sY+t]=rE[X]+sE[Y]+t$. With $\mu_X=E[X]$ and $\mu_Y=E[Y]$,

$$
\operatorname{Cov}(X,Y)=E[(X-\mu_X)(Y-\mu_Y)]
=E[XY]-E[X]E[Y].
$$

If $\operatorname{Cov}(X,Y)=0$, the variables are uncorrelated. Independence implies zero covariance when the moments exist. Dependent variables can also be uncorrelated.

$$
\operatorname{Var}(X+Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)+2\operatorname{Cov}(X,Y).
$$

For uncorrelated $X,Y$ this simplifies to $\operatorname{Var}(X+Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)$. For pairwise uncorrelated variables $X_1,\ldots,X_n$,

$$
\operatorname{Var}(X_1+\cdots+X_n)=
\operatorname{Var}(X_1)+\cdots+\operatorname{Var}(X_n).
$$

For $X\sim\operatorname{Bin}(n,p)$, the expectation and variance are $E[X]=np$ and $\operatorname{Var}(X)=np(1-p)$.

### PDF page 80

Under affine transformations, $\operatorname{Cov}(rX+s,tY+u)=rt\operatorname{Cov}(X,Y)$. The correlation coefficient standardizes covariance to give a dimensionless measure of linear association.

$$
\rho(X,Y)=\frac{\operatorname{Cov}(X,Y)}
{\sqrt{\operatorname{Var}(X)\operatorname{Var}(Y)}}
$$

when both variances are positive. The lecture notes adopt the convention $\rho=0$ when either variance is zero. Changing units with positive scale factors preserves correlation. For $rt\ne0$,

$$
\rho(rX+s,tY+u)=\begin{cases}
-\rho(X,Y) & rt<0,\\
\rho(X,Y) & rt>0.
\end{cases}
$$

#### Statement of the central limit theorem

Let $X_1,X_2,\ldots$ be independent and identically distributed with mean $\mu$ and finite positive variance $\sigma^2$. The distribution of $\bar X_n=\frac1n\sum_{i=1}^n X_i$ is approximately normal with mean $\mu$ and variance $\sigma^2/n$ for large $n$. More precisely, for $n\ge1$ let

$$
Z_n=\sqrt n\left(\frac{\bar X_n-\mu}{\sigma}\right).
$$

Then for every real $a$,

$$
\lim_{n\to\infty}F_{Z_n}(a)=\Phi(a),
$$

where $\Phi$ is the CDF of the standard normal distribution $N(0,1)$. The page labels this section a proof and ends after stating the convergence.

### PDF page 81

The standardized mean can also be written as a standardized sum.

$$
Z_n=\frac{\bar X_n-E[\bar X_n]}{\sqrt{\operatorname{Var}(\bar X_n)}}
=\frac{X_1+\cdots+X_n-n\mu}{\sigma\sqrt n}.
$$

#### Central limit theorem example. Computer lifetimes

Suppose several computers of the same type have independent failure times $X_i\sim\operatorname{Exp}(1/2)$, measured in years. The average lifetime is two years. Use one computer at a time and replace it with an unused one when it fails. The time until $n$ computers have failed is $T_n=X_1+\cdots+X_n$. The central limit theorem gives the normal approximation

$$
N(n\mu,n\sigma^2)=N\left(\frac n\lambda,\frac n{\lambda^2}\right)=N(2n,4n).
$$

To approximate $P(T_5\ge12)$, use $\mu=1/\lambda=2$ and $\sigma^2=1/\lambda^2=4$. For $Y\sim N(10,20)$ and $Z\sim N(0,1)$,

$$
P(T_5\ge12)\approx P(Y\ge12)
=P\left(Z\ge\frac{12-10}{\sqrt{20}}\right)
\approx 0.3274.
$$

The handwritten substitution uses $N(10,40)$ and reports $0.3745$. The stated variance and the formula $n\sigma^2$ give $5\cdot4=20$.

### PDF page 82

#### Practice midterm 1

**1a.** The joint probabilities used in the expected-product calculation are

| $Y\backslash X$ | $0$ | $1$ | $2$ |
| ---: | ---: | ---: | ---: |
| $0$ | $1/6$ | $1/6$ | $1/6$ |
| $1$ | $1/4$ | $0$ | $1/4$ |

All terms vanish except the one for $(X,Y)=(2,1)$, so $E[XY]=2\cdot1\cdot(1/4)=1/2$.

**1b.** Independence would give $P(X=a,Y=b)=P(X=a)P(Y=b)$. Here $P(X=2,Y=1)=1/4$, whereas $P(X=2)P(Y=1)=(5/12)(1/2)=5/24$. Therefore $X$ and $Y$ are dependent.

**1c.** The marginal expectations and covariance are

$$
\begin{aligned}
E[X]&=0\cdot\tfrac5{12}+1\cdot\tfrac16+2\cdot\tfrac5{12}=1,\\
E[Y]&=0\cdot\tfrac12+1\cdot\tfrac12=\tfrac12,\\
\operatorname{Cov}(X,Y)&=E[XY]-E[X]E[Y]=\tfrac12-1\cdot\tfrac12=0.
\end{aligned}
$$

Thus the variables are uncorrelated.

**1d.** Calculate the variances using second moments.

$$
\begin{aligned}
E[X^2]&=0^2\cdot\tfrac5{12}+1^2\cdot\tfrac16+2^2\cdot\tfrac5{12}=\tfrac{11}6,\\
\operatorname{Var}(X)&=\tfrac{11}6-1^2=\tfrac56,\\
E[Y^2]&=0^2\cdot\tfrac12+1^2\cdot\tfrac12=\tfrac12,\\
\operatorname{Var}(Y)&=\tfrac12-(\tfrac12)^2=\tfrac14.
\end{aligned}
$$

The covariance term is zero, so $\operatorname{Var}(X+Y)=5/6+1/4=13/12$.

### PDF page 83

**1e.** Since $\operatorname{Var}(rY+s)=r^2\operatorname{Var}(Y)$ and $\operatorname{Cov}(X,-Y)=-\operatorname{Cov}(X,Y)=0$ for this example,

$$
\begin{aligned}
\operatorname{Var}(X-Y)
&=\operatorname{Var}(X)+\operatorname{Var}(-Y)+2\operatorname{Cov}(X,-Y)\\
&=\operatorname{Var}(X)+\operatorname{Var}(Y)=\frac{13}{12}.
\end{aligned}
$$

**2a.** The joint CDF for $x\ge1,\ y\ge1$ is $F(x,y)=1-1/x-1/y^2+1/(xy^2)$, and it is zero if either coordinate is below one. The mixed derivative gives the joint density on the support.

$$
f(x,y)=\frac{\partial^2 F(x,y)}{\partial x\,\partial y}
=\frac{d(x^{-1})}{dx}\frac{d(y^{-2})}{dy}
=(-x^{-2})(-2y^{-3})=\frac{2}{x^2y^3}.
$$

**2b.** Integrate over the other coordinate to find each marginal.

$$
\begin{aligned}
f_X(x)&=\int_1^\infty\frac{2}{x^2y^3}\,dy
=\frac{2}{x^2}\left[-\frac1{2y^2}\right]_1^\infty
=\frac1{x^2}\qquad(x\ge1),\\
f_Y(y)&=\int_1^\infty\frac{2}{x^2y^3}\,dx
=\frac{2}{y^3}\left[-\frac1x\right]_1^\infty
=\frac{2}{y^3}\qquad(y\ge1).
\end{aligned}
$$

Each marginal is zero below one.

### PDF page 84

**2c.** Integrating the marginal densities gives

$$
\begin{aligned}
F_X(x)&=\int_1^x a^{-2}\,da=\left[-a^{-1}\right]_1^x=1-\frac1x
\qquad(x\ge1),\\
F_Y(y)&=\int_1^y 2a^{-3}\,da=\left[-a^{-2}\right]_1^y=1-\frac1{y^2}
\qquad(y\ge1).
\end{aligned}
$$

Both CDFs are zero below one.

**2d.** Since $f_X(x)f_Y(y)=f(x,y)$ everywhere, $X$ and $Y$ are independent.

**3a.** For the joint density $f(x,y)=12x(1-x)y$ on $[0,1]^2$ and zero elsewhere, the notes set up the moment integrals.

$$
\begin{aligned}
E[XY]&=\int_0^1\int_0^1 xy[12x(1-x)y]\,dx\,dy,\\
E[X]&=\int_{-\infty}^{\infty}\int_{-\infty}^{\infty} x f(x,y)\,dx\,dy,\\
E[Y]&=\int_{-\infty}^{\infty}\int_{-\infty}^{\infty} y f(x,y)\,dx\,dy.
\end{aligned}
$$

The integrals are left unevaluated on the page.

**4.** Each chip has probability $1/5$ of being defective. Set $X_i=1$ if chip $i$ is defective and $X_i=0$ otherwise. Then

$$
\begin{aligned}
E[X_i]&=0(1-\tfrac15)+1(\tfrac15)=\tfrac15,\\
E[X_i^2]&=0^2(1-\tfrac15)+1^2(\tfrac15)=\tfrac15,\\
\operatorname{Var}(X_i)&=E[X_i^2]-(E[X_i])^2=\tfrac15-\tfrac1{25}=\tfrac4{25}.
\end{aligned}
$$

### PDF page 85

To approximate the probability of fewer than 15 defective chips, let $S=X_1+\cdots+X_{100}$. Linearity and independence give

$$
E[S]=100\cdot\tfrac15=20,
\qquad \operatorname{Var}(S)=100\cdot\tfrac4{25}=16.
$$

Using the normal approximation with the cutoff at 15, the calculation is

$$
P(S<15)=P\left(\frac{S-20}{\sqrt{16}}<\frac{15-20}{\sqrt{16}}\right)
\approx P(Z<-5/4)=P(Z>5/4)\approx 0.1056.
$$

#### Practice midterm 2

**1a.** For $Y=-1$, each of $X=0,1,2$ has joint mass $1/6$. For $Y=1$, the corresponding masses are $0$, $1/2$, and $0$. The product expectation is

$$
E[XY]=(0)(-1)\tfrac16+(1)(-1)\tfrac16+(2)(-1)\tfrac16
+(0)(1)(0)+(1)(1)\tfrac12+(2)(1)(0)=0.
$$

**1b.** Here $P(X=1,Y=1)=1/2$, while $P(X=1)P(Y=1)=(2/3)(1/2)=1/3$. Since the joint probability differs from the product, the variables are dependent.

**1c.** The marginal expectations are $E[X]=0\cdot(1/6)+1\cdot(2/3)+2\cdot(1/6)=1$ and $E[Y]=(-1)(1/2)+1(1/2)=0$. Hence $\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y]=0-(1)(0)=0$.

### PDF page 86

**2.** Let $X_i=1$ for a defective chip and $X_i=0$ otherwise. For $S=X_1+\cdots+X_{100}$, approximate $P(S<15)$. From $P(X_i=1)=1/5$ and $P(X_i=0)=4/5$,

$$
\begin{aligned}
E[X_i]&=1\cdot\tfrac15+0\cdot\tfrac45=\tfrac15,\\
E[S]&=100E[X_i]=20,\\
\operatorname{Var}(X_i)&=0^2\cdot\tfrac45+1^2\cdot\tfrac15-(\tfrac15)^2
=\tfrac4{25},\\
\operatorname{Var}(S)&=100\operatorname{Var}(X_i)=16.
\end{aligned}
$$

The normal approximation with the cutoff at 15 gives

$$
P(S<15)\approx P\left(Z<\frac{15-20}{\sqrt{16}}\right)
=P(Z>1.25)\approx 0.1056.
$$

**3.** For a score $X$ with $E[X]=75$ and $\operatorname{Var}(X)=25$, use Chebyshev's inequality for the interval from $55$ to $95$.

$$
P(\lvert X-75\rvert\ge20)\le \frac{25}{20^2}=\frac1{16}.
$$

Taking the complement yields $P(55<X<95)=P(\lvert X-75\rvert<20)\ge15/16$.

### PDF page 87

Let $Y_n=X_1^2+\cdots+X_n^2$ for independent $X_i\sim N(0,1)$.

**a.** Since $\operatorname{Var}(X_i)=E[X_i^2]-(E[X_i])^2=1$ and $E[X_i]=0$, we have $E[X_i^2]=1$.

**b.** The standard normal fourth moment is $E[X_i^4]=3$. Therefore $\operatorname{Var}(X_i^2)=E[X_i^4]-(E[X_i^2])^2=3-1^2=2$.

**c.** To approximate $P(Y_{50}>60)$, use $E[Y_{50}]=50E[X_i^2]=50$ and $\operatorname{Var}(Y_{50})=50\operatorname{Var}(X_i^2)=100$. By the central limit theorem,

$$
P(Y_{50}>60)
=P\left(\frac{Y_{50}-50}{\sqrt{100}}>\frac{60-50}{10}\right)
\approx P(Z>1)\approx 0.1587.
$$

#### Point estimation

Estimate a parameter $\theta$, which may be a scalar or a vector, by a statistic $\hat\theta_n$. The statistics indexed by $n$ are random variables. For example, $\bar X_n$ estimates $\mu$.

For a scalar parameter, a common measure of error is the mean squared error.

$$
\operatorname{MSE}(\hat\theta_n)=E[(\hat\theta_n-\theta)^2].
$$

### PDF page 88

#### Bias–variance decomposition

The mean squared error decomposes as

$$
\operatorname{MSE}(\hat\theta_n)=\operatorname{Var}(\hat\theta_n)
+\bigl(\operatorname{bias}(\hat\theta_n)\bigr)^2,
\qquad
\operatorname{bias}(\hat\theta_n)=E[\hat\theta_n]-\theta.
$$

If $\operatorname{bias}(\hat\theta_n)=0$, the estimator is unbiased for $\theta$.

![[Kyle Kabasares - Probability and Statistics - Bias variance and mean squared error targets.png|**Fig. 70** Four targets compare the effect of bias and spread on mean squared error. The sketches show low variance with zero, slight, or moderate bias, and high variance with zero bias.]]

#### Estimating an exponential mean

Suppose $X_1,\ldots,X_n$ are independent $\operatorname{Exp}(\lambda)$ variables with mean $\mu=1/\lambda$ and variance $\sigma^2=1/\lambda^2$. Consider estimating $\mu$ with $\hat\mu=c(X_1+\cdots+X_n)$ and choose $c$ to minimize $\operatorname{MSE}(\hat\mu)$.

By linearity, $E[\hat\mu]=cn\mu=cn/\lambda$. Substituting into the decomposition gives

$$
\begin{aligned}
\operatorname{MSE}(\hat\mu)
&=E[(\hat\mu-E[\hat\mu])^2]+(E[\hat\mu]-\mu)^2\\
&=E\left[\left(c(X_1+\cdots+X_n)-\frac{cn}{\lambda}\right)^2\right]
+\left(\frac{cn}{\lambda}-\frac1\lambda\right)^2.
\end{aligned}
$$

### PDF page 89

The sum $X_1+\cdots+X_n$ has mean $n/\lambda$. Using independence, the mean squared error simplifies to

$$
\begin{aligned}
\operatorname{MSE}(\hat\mu)
&=c^2\operatorname{Var}(X_1+\cdots+X_n)
+\frac{(cn-1)^2}{\lambda^2}\\
&=c^2\bigl(\operatorname{Var}(X_1)+\cdots+\operatorname{Var}(X_n)\bigr)
+\frac{(cn-1)^2}{\lambda^2}\\
&=\frac{c^2n+(cn-1)^2}{\lambda^2}.
\end{aligned}
$$

To minimize this quadratic, set its derivative with respect to $c$ to zero.

$$
\frac{2cn}{\lambda^2}+\frac{2n(cn-1)}{\lambda^2}=0
\quad\Longrightarrow\quad cn+cn^2-n=0
\quad\Longrightarrow\quad c=\frac{1}{n+1}.
$$

Thus the estimator and its bias are

$$
\hat\mu=\frac{X_1+\cdots+X_n}{n+1}
=\frac{n}{n+1}\bar X_n,
\qquad
\operatorname{bias}(\hat\mu)=\frac{n}{n+1}\mu-\mu=-\frac{\mu}{n+1}.
$$

### PDF page 90

#### Confidence intervals and standard error

The standard error of an estimator $\hat\theta_n$ is its sampling standard deviation.

$$
\operatorname{se}(\hat\theta_n)=\operatorname{sd}(\hat\theta_n)
=\sqrt{\operatorname{Var}(\hat\theta_n)}.
$$

For independent $X_i\sim\operatorname{Ber}(p)$, set $\hat p_n=\bar X_n$. The standard error is $\sqrt{p(1-p)/n}$. Since $p$ is unknown, estimate it by

$$
\widehat{\operatorname{se}}=\sqrt{\frac{\hat p_n(1-\hat p_n)}n}.
$$

The central limit theorem gives an approximate normal sampling distribution centered at $p$ for large $n$. Using the estimated standard error, an approximate $(1-\alpha)$ confidence interval for $p$ is

$$
\hat p_n\pm z_{\alpha/2}\widehat{\operatorname{se}}
=\hat p_n\pm z_{\alpha/2}\sqrt{\frac{\hat p_n(1-\hat p_n)}n},
$$

where $z_{\alpha/2}$ is the standard normal critical value with upper-tail probability $\alpha/2$.

#### Grade forecasting survey

Of 45 students, 35 said yes when asked whether grade forecasting should be offered in future semesters of Math 32. Thus $\hat p_{45}=\bar x_{45}=35/45$, and

$$
\widehat{\operatorname{se}}
=\sqrt{\frac{(35/45)(10/45)}{45}}\approx0.06.
$$

![[Kyle Kabasares - Probability and Statistics - Normal critical values for the grade forecasting survey.png|**Fig. 71** The shaded central $95\%$ of the standard normal distribution extends from $-1.96$ to $1.96$.]]

Using the rounded standard error gives the approximate $95\%$ confidence interval

$$
\left(\frac{35}{45}-1.96(0.06),\ \frac{35}{45}+1.96(0.06)\right)
\approx(0.66,0.90).
$$

### PDF page 91

#### Introduction to hypothesis testing

Start with a default theory, the null hypothesis $H_0$, and assess whether the observed data are compatible with it. Reject $H_0$ when the data provide sufficient evidence against it. The alternative hypothesis is denoted $H_1$.

| True hypothesis | Retain $H_0$ | Reject $H_0$ |
| --- | --- | --- |
| $H_0$ | Correct decision | Type I error |
| $H_1$ | Type II error | Correct decision |

To test whether a coin is fair, let $X_1,\ldots,X_n$ be independent $\operatorname{Ber}(p)$ variables. Test $H_0:p=1/2$ against $H_1:p\ne1/2$.

#### Maximum likelihood estimation (April 16, 2015)

The lecture records counts by number of menstrual cycles.

| Group | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | More than 12 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Smokers | 29 | 16 | 17 | 4 | 3 | 9 | 4 | 5 | 1 | 1 | 1 | 3 | 7 |
| Nonsmokers | 198 | 107 | 55 | 38 | 18 | 22 | 7 | 9 | 5 | 3 | 6 | 6 | 12 |

Model the counts of cycles to the event as $X\sim\operatorname{Geo}(p_{\mathrm{smokers}})$ and $Y\sim\operatorname{Geo}(p_{\mathrm{nonsmokers}})$.

### PDF page 92

#### Two estimates of the geometric parameter

If $W\sim\operatorname{Geo}(p)$ counts trials starting at one, then $p=P(W=1)$. Using the first-cycle proportions gives

$$
\hat p_{\mathrm{smokers}}=\frac{29}{100}=0.29,
\qquad
\hat p_{\mathrm{nonsmokers}}=\frac{198}{486}\approx0.41.
$$

A second idea uses $E[W]=1/p$, so $p=1/E[W]$. If the waiting times are observed in full, replacing $E[W]$ with the sample mean gives $\hat p=1/\bar W_n$.

#### Maximum likelihood principle

Given a dataset, choose the parameter $\theta$ that maximizes the likelihood of the observed data under the model, written $P(\text{data}\mid\theta)$ for discrete data.

For example, consider two chip batches. The first has defect probability $p=1/2$ and the second $p=1/10$. Under either model, the ten inspected chips are modeled as independent Bernoulli observations with that batch's $p$.

![[Kyle Kabasares - Probability and Statistics - Two chip batches for the likelihood example.png|**Fig. 72** The two batches have defect probabilities of 50% and 10%.]]

If only the second chip is defective, the likelihood is $p(1-p)^9$. For batch 1 it is $(1/2)(1/2)^9\approx 0.00098$. For batch 2 it is $(1/10)(9/10)^9\approx 0.039$.

### PDF page 93

Bayes' rule relates the posterior to the likelihood and prior.

$$
P(\theta\mid\text{data})
=\frac{\underbrace{P(\text{data}\mid\theta)}_{\text{likelihood}}\,P(\theta)}
{P(\text{data})}.
$$

#### Log likelihood

The log likelihood is $\ell(\theta)=\ln L(\theta)$. The logarithm is strictly increasing and preserves local maxima where the likelihood is positive.

For a sequence of $n$ Bernoulli observations with $k$ successes,

$$
L(p)=p^k(1-p)^{n-k},
\qquad
\ell(p)=k\ln p+(n-k)\ln(1-p).
$$

For $0<k<n$, set $\ell'(p)=k/p-(n-k)/(1-p)=0$. Clearing the denominators gives $k(1-p)-(n-k)p=k-np=0$, so the maximum likelihood estimate is $\hat p=k/n$.

#### Maximum likelihood for continuous distributions (April 21, 2015)

Suppose the observed data $x_1,\ldots,x_n$ come from an independent sample of $\operatorname{Exp}(\lambda)$ random variables. Find the maximum likelihood estimator of $\lambda$. The exponential density is

$$
f(x)=\begin{cases}
\lambda e^{-\lambda x} & x\ge0,\\
0 & x<0.
\end{cases}
$$

### PDF page 94

For independent observations from the exponential distribution, the likelihood and log likelihood are

$$
\begin{aligned}
L(\lambda)&=f(x_1)\cdots f(x_n)
=\lambda^n e^{-\lambda(x_1+\cdots+x_n)},\\
\ell(\lambda)&=n\ln\lambda-\lambda(x_1+\cdots+x_n).
\end{aligned}
$$

Setting $\ell'(\lambda)=n/\lambda-(x_1+\cdots+x_n)=0$ gives

$$
\hat\lambda=\frac{n}{x_1+\cdots+x_n}=\frac1{\bar x_n}.
$$

#### Maximum at a boundary

Suppose the observations $x_1=0.98$, $x_2=1.57$, and $x_3=0.31$ come from a uniform distribution on $[0,\theta]$. Find the maximum likelihood estimate of $\theta$. The density is $1/\theta$ on $[0,\theta]$ and zero elsewhere.

![[Kyle Kabasares - Probability and Statistics - Uniform density with an unknown upper endpoint.png|**Fig. 73** The uniform density has height $1/\theta$ and width $\theta$.]]

The likelihood is

$$
L(\theta)=f(x_1)f(x_2)f(x_3)=\begin{cases}
\theta^{-3} & \theta\ge\max\{x_1,x_2,x_3\}=1.57,\\
0 & \text{otherwise}.
\end{cases}
$$

Since $\theta^{-3}$ decreases on the positive part of the likelihood, the maximum occurs at the boundary $\hat\theta=\max\{x_1,x_2,x_3\}=1.57$.

![[Kyle Kabasares - Probability and Statistics - Likelihood for the uniform upper endpoint.png|**Fig. 74** The likelihood is zero below the largest observation, reaches its maximum there, and then decreases.]]

### PDF page 95

#### Maximum likelihood for a normal sample

Suppose $x_1,\ldots,x_n$ are independent observations from $N(\mu,\sigma^2)$. Find the maximum likelihood estimates of $\mu$ and $\sigma$. The density and its logarithm are

$$
\begin{aligned}
f(x)&=\frac1{\sigma\sqrt{2\pi}}\exp\left[-\frac12\left(\frac{x-\mu}{\sigma}\right)^2\right],\\
\ln f(x)&=-\tfrac12\ln(2\pi)-\ln\sigma-\tfrac12\left(\frac{x-\mu}{\sigma}\right)^2.
\end{aligned}
$$

![[Kyle Kabasares - Probability and Statistics - Normal density centered at mu.png|**Fig. 75** The normal curve is centered at $\mu$, with distances of one standard deviation marked on either side.]]

By independence, the joint likelihood is the product of the densities. Taking the logarithm gives

$$
\ell(\mu,\sigma)=\sum_{i=1}^n\ln f(x_i)
=-\frac n2\ln(2\pi)-n\ln\sigma-\frac12\sum_{i=1}^n\left(\frac{x_i-\mu}{\sigma}\right)^2.
$$

For fixed $\sigma>0$, setting the derivative with respect to $\mu$ to zero yields

$$
\frac{\partial\ell}{\partial\mu}=\frac1{\sigma^2}\sum_{i=1}^n(x_i-\mu)=0
\quad\Longrightarrow\quad
\hat\mu=\frac1n\sum_{i=1}^n x_i=\bar x_n.
$$

### PDF page 96

Since $\frac{d}{d\sigma}(1/(2\sigma^2))=-1/\sigma^3$, the stationarity equation for $\sigma$ is

$$
\frac{\partial\ell}{\partial\sigma}
=-\frac n\sigma+\frac1{\sigma^3}\sum_{i=1}^n(x_i-\mu)^2=0.
$$

Multiplying by $\sigma^3$ and substituting $\hat\mu=\bar x_n$ gives

$$
\hat\sigma=\sqrt{\frac1n\sum_{i=1}^n(x_i-\hat\mu)^2}.
$$

#### Properties of maximum likelihood estimators

The notes introduce the following properties under suitable regularity conditions.

1. **Invariance.** If $T$ is a maximum likelihood estimator of $\theta$, then $g(T)$ estimates $g(\theta)$ by maximum likelihood. For the normal sample the resulting variance estimate is $\widehat{\sigma^2}=(\hat\sigma)^2=n^{-1}\sum_{i=1}^n(x_i-\bar x_n)^2$.
2. **Asymptotic unbiasedness.** For the sequence $T_n$ of maximum likelihood estimators, the notes state $\lim_{n\to\infty}E[T_n]=\theta$.
3. **Asymptotic minimum variance.** The notes compare the variance of the maximum likelihood estimator $T$ with that of an unbiased estimator $U$, writing $\operatorname{Var}(T)\le\operatorname{Var}(U)$ as shorthand for the asymptotic comparison.

### PDF page 97

**4. Asymptotic normality.** As $n\to\infty$, the standardized maximum likelihood estimator $(\hat\theta_n-\theta)/\widehat{\operatorname{se}}$ converges in distribution to $N(0,1)$ under the regularity conditions.

#### Pregnancy data

The geometric-model estimates quoted here are $\hat p_{\mathrm{smokers}}=0.224$ and $\hat p_{\mathrm{nonsmokers}}=0.33$. For the geometric maximum likelihood estimator, the asymptotic standard error and its estimate are

$$
\operatorname{se}=\sqrt{\frac{p^2(1-p)}n},
\qquad
\widehat{\operatorname{se}}=\sqrt{\frac{\hat p^2(1-\hat p)}n}.
$$

Asymptotic normality gives the approximate $95\%$ confidence interval

$$
\left(\hat p-1.96\sqrt{\frac{\hat p^2(1-\hat p)}n},\
\hat p+1.96\sqrt{\frac{\hat p^2(1-\hat p)}n}\right).
$$

The notes report $(0.19,0.26)$ for smokers and $(0.31,0.35)$ for nonsmokers.

#### Confidence intervals with known variance (April 23, 2015)

For an independent sample from $N(\mu,\sigma^2)$ with known $\sigma^2$, the normal-theory $95\%$ interval for $\mu$ is

$$
\left(\bar x-1.96\frac{\sigma}{\sqrt n},\
\bar x+1.96\frac{\sigma}{\sqrt n}\right).
$$

The normal calculation is exact when using the unrounded normal critical value. The page marks this material for Homework 6.

#### Gross calorific content of coal

The page starts listing measurements in $\unit{MJ/kg}$ for a particular shipment of coal.

| | | | |
| ---: | ---: | ---: | ---: |
| 23.870 | 23.730 | 23.712 | 23.760 |
| 23.640 | 23.850 | 23.840 | 23.860 |
| 23.940 | 23.830 | 23.877 | 23.700 |

### PDF page 98

The remaining measurements in $\unit{MJ/kg}$ are

| | | | |
| ---: | ---: | ---: | ---: |
| 23.796 | 23.727 | 23.778 | 23.740 |
| 23.890 | 23.890 | 23.678 | 23.771 |
| 23.860 | 23.690 | 23.800 | |

The notes give $n=23$ and use the reported mean $\energy{\bar x}=\quantity{23.788}{MJ/kg}$. The values as transcribed average to about $\quantity{23.793}{MJ/kg}$. The measurement process is approximately normal with a standard deviation of about $\quantity{0.1}{MJ/kg}$. Using the reported mean, the $95\%$ confidence interval for the true mean calorific content $\energy{\mu}$ of the shipment is

$$
\left(\energy{\bar x}-1.96\frac{0.1}{\sqrt{23}},\
\energy{\bar x}+1.96\frac{0.1}{\sqrt{23}}\right)
\approx\quantity{(23.747,23.829)}{MJ/kg}.
$$

#### Confidence intervals with unknown variance

For an independent sample from $N(\mu,\sigma^2)$ with unknown $\sigma^2$, the notes give an interval of the form $(\bar x-2.080\,s/\sqrt n,\ \bar x+2.080\,s/\sqrt n)$ as an example. The critical value changes with the degrees of freedom. The statistic

$$
\frac{\sqrt n(\bar X_n-\mu)}{s_n}
$$

has Student's $t$ distribution with $n-1$ degrees of freedom. It resembles the standard normal distribution and has one parameter, the number of degrees of freedom. Using the corresponding upper $2.5\%$ critical value gives the exact normal-sample $95\%$ confidence interval for $\mu$.

### PDF page 99

The notes point to the `t.test` function in R.

#### Linear least-squares regression

The regression function is $g(x)=E[Y\mid X=x]$, where $x$ can be vector-valued. For example, $g(71)=E[Y\mid X=71]$.

For the simple linear model,

$$
Y_i=\alpha+\beta x_i+U_i.
$$

Here $Y_i$ is the dependent variable, $\alpha$ is the intercept, $\beta$ is the slope, $x_i$ is the observed feature or independent variable, and $U_i$ is the noise term. The model assumes that $U_1,\ldots,U_n$ are independent, that $E[U_i]=0$, and that $\operatorname{Var}(U_i)=\sigma^2$ for every $i$. The notes ask whether those assumptions hold in an application.

To estimate $\alpha$ and $\beta$, minimize the residual sum of squares,

$$
S(\alpha,\beta)=\sum_{i=1}^n(y_i-\alpha-\beta x_i)^2.
$$

Under independent normal responses $Y_i\sim N(\alpha+\beta x_i,\sigma^2)$ at the observed $x_i$, least squares gives the maximum likelihood estimates of $\alpha$ and $\beta$.

### PDF page 100

#### Least squares continued (April 28, 2015)

Minimize $S(\alpha,\beta)=\sum_{i=1}^n(y_i-(\alpha+\beta x_i))^2$ to estimate $\alpha$ and $\beta$. This is equivalent to maximum likelihood under the Gaussian error model $Y_i\sim N(\alpha+\beta x_i,\sigma^2)$ with independent errors.

![[Kyle Kabasares - Probability and Statistics - Vertical residuals around a fitted line.png|**Fig. 76** Vertical deviations from the line $y=\alpha+\beta x$ are the residuals whose squares are summed.]]

Setting $\partial S/\partial\alpha=0$ and $\partial S/\partial\beta=0$ yields a system of linear equations. After fitting the line, estimate the error standard deviation by

$$
\hat\sigma=\sqrt{\frac1{n-2}\sum_{i=1}^n(y_i-(\hat\alpha+\hat\beta x_i))^2}.
$$

The residual degrees of freedom are $n-2$, the number of observations minus the two fitted regression parameters. The lecture proposes minimizing cross-validation error to choose a model and address overfitting and underfitting.

### PDF page 101

#### Validation

Fit the model's parameters on a training set and evaluate prediction error on a held-out test or validation set. The held-out error estimates the generalization error. Training error can be optimistic because the model was fitted to those observations. A single split holds back some of the data from fitting.

For $k$-fold cross-validation,

1. Divide the data into $k$ partitions or folds. A common choice is $k=10$.
2. Hold out one fold as the test set, train on the other folds, and compute the validation error, such as the mean squared error.
3. Repeat for each fold and average the validation errors.

Setting $k=n$ gives leave-one-out cross-validation.

#### Hypothesis testing (April 30, 2015)

Consider a road with a speed limit of $\quantity{70}{mph}$. The lecture asks how to calibrate an automated speed trap. The page phrases the target as at most $5\%$ of ticketed drivers being within the speed limit. The test calculation treats $5\%$ as the maximum probability of a ticket for a driver within the limit.

Let $\mechanical{S}$ be the actual speed and $\mechanical{M}$ the measured speed, both in miles per hour. Given actual speed $\mechanical{S}=s$, the numerical measurement has normal distribution $N(s,2^2)$. The sketch shows what happens at $s=70$ if the device tickets at a measured speed of $70$ or higher.

![[Kyle Kabasares - Probability and Statistics - Measured speeds at the speed limit.png|**Fig. 77** At an actual speed of 70 miles per hour, measurement noise gives a symmetric distribution about 70. A threshold at 70 puts half the probability in the shaded upper tail.]]

### PDF page 102

Ticket a driver if the measured speed $\mechanical{M}$ exceeds a cutoff $\mechanical{a}$. Among actual speeds at or below 70 miles per hour, the ticket probability is greatest at the boundary $\mechanical{S}=70$ when speeds are expressed in miles per hour.

$$
P(\mechanical{M}>\mechanical{a}\mid\mechanical{S}\le70)
\le P(\mechanical{M}>\mechanical{a}\mid\mechanical{S}=70).
$$

![[Kyle Kabasares - Probability and Statistics - Speed trap threshold and shaded upper tail.png|**Fig. 78** At the null boundary of 70 miles per hour, choose the cutoff $a$ so the shaded upper tail has probability $0.05$.]]

At that boundary, standardizing the normal measurement gives

$$
P(\mechanical{M}>\mechanical{a}\mid\mechanical{S}=70)
=P\left(Z>\frac{\mechanical{a}-70}{2}\right).
$$

The standard normal upper $5\%$ point is about $1.645$, so the cutoff is $\mechanical{a}=70+2(1.645)\approx\quantity{73.3}{mph}$.

| Decision | Driver exceeds the limit | Driver is within the limit |
| --- | --- | --- |
| Ticket | Correct decision | Type I error, with probability at most $0.05$ at each null speed |
| No ticket | Type II error | Correct decision |

A Type I error is rejection of a true null hypothesis, or a false positive. A Type II error is failure to reject when the alternative is true, or a false negative.

The page ends with a heading on goodness-of-fit testing.

### PDF page 103

The page begins with item 2, a regression model through the origin, $Y_i=\beta x_i+U_i$, with $E[U_i]=0$ and $\operatorname{Var}(U_i)=\sigma^2$.

#### Statistics review. Confidence intervals

Many inference problems fall into one of three categories, point estimation, confidence intervals, and hypothesis testing.

A $(1-\alpha)$ confidence interval for $\theta$ has the form $C_n=(a,b)$, where $a=a(X_1,\ldots,X_n)$ and $b=b(X_1,\ldots,X_n)$ depend on the data. Its coverage satisfies $P_\theta(\theta\in C_n)\ge 1-\alpha$ for every $\theta\in\Theta$. For a procedure with exact $95\%$ coverage, $95\%$ of intervals constructed in repeated experiments contain the parameter.

#### Normal-based confidence intervals

Suppose the sampling distribution of $\hat\theta_n$ is approximately normal, centered at $\theta$, and use $\widehat{\operatorname{se}}$ for its standard error. Let $\Phi$ be the standard normal CDF, and let $z_{\alpha/2}$ have upper-tail probability $\alpha/2$. For $Z\sim N(0,1)$,

$$
\Phi(z_{\alpha/2})=1-\alpha/2,
\qquad P(-z_{\alpha/2}<Z<z_{\alpha/2})=1-\alpha.
$$

Set

$$
C_n=\left(\hat\theta_n-z_{\alpha/2}\widehat{\operatorname{se}},\
\hat\theta_n+z_{\alpha/2}\widehat{\operatorname{se}}\right).
$$

If $Z_n=(\hat\theta_n-\theta)/\widehat{\operatorname{se}}$ converges in distribution to $Z$, then the probability that $Z_n$ falls between the two critical values converges to $1-\alpha$. This is the probability that $C_n$ covers $\theta$. For $95\%$ confidence, $\alpha=0.05$ and Table B.1 gives $z_{\alpha/2}\approx1.96$.

### PDF page 104

For independent $X_1,\ldots,X_n\sim N(\mu,\sigma^2)$ with known $\sigma^2$, the estimator $\hat\mu_n=\bar X_n=n^{-1}\sum_{i=1}^n X_i$ is normal with mean $\mu$ and variance $\sigma^2/n$. The standard error is $\sigma/\sqrt n$, and $\sqrt n(\bar X_n-\mu)/\sigma$ has the standard normal distribution. Therefore

$$
P\left(-z_{\alpha/2}<\frac{\sqrt n(\bar X_n-\mu)}{\sigma}
<z_{\alpha/2}\right)=1-\alpha.
$$

Equivalently,

$$
P\left(\bar X_n-z_{\alpha/2}\frac{\sigma}{\sqrt n}<\mu<
\bar X_n+z_{\alpha/2}\frac{\sigma}{\sqrt n}\right)=1-\alpha.
$$

Substituting the observed mean $\bar x$ gives the exact $(1-\alpha)$ confidence interval $\bar x\pm z_{\alpha/2}\sigma/\sqrt n$. For a $95\%$ interval, use $\alpha=0.05$ and $z_{\alpha/2}\approx1.96$.

![[Kyle Kabasares - Probability and Statistics - Normal tails for a two sided confidence interval.png|**Fig. 79** The critical values leave probability $\alpha/2$ in each tail of the standard normal distribution.]]

#### Point estimation

Point estimation gives a single best guess for a quantity of interest. The target can be a parameter in a parametric model, a CDF $F$, a density $f$, a regression function $r$, or a future value $Y$ of a random variable.

Write the estimator of $\theta$ as $\hat\theta$ or $\hat\theta_n$. The parameter is fixed and unknown, and the estimator is random because it depends on the data. Formally, if $X_1,\ldots,X_n$ are independent and identically distributed from $F$, a point estimator is a function $\hat\theta_n=g(X_1,\ldots,X_n)$ of those observations.

### PDF page 105

The bias of $\hat\theta_n$ is $E[\hat\theta_n]-\theta$. It is unbiased if $E[\hat\theta_n]=\theta$, equivalently if its bias is zero. The distribution of the estimator is its sampling distribution, and its standard deviation is the standard error $\operatorname{se}(\hat\theta_n)=\sqrt{\operatorname{Var}(\hat\theta_n)}$. This can depend on the unknown distribution $F$. The notes use $\widehat{\operatorname{se}}$ for an estimate of the standard error.

For independent $X_1,\ldots,X_n\sim\operatorname{Ber}(p)$, the estimator $\hat p_n=n^{-1}\sum_{i=1}^n X_i$ has expectation $n^{-1}\sum_{i=1}^nE[X_i]=p$ and is unbiased. Its standard error and estimated standard error are

$$
\operatorname{se}=\sqrt{\frac{p(1-p)}n},
\qquad
\widehat{\operatorname{se}}=\sqrt{\frac{\hat p_n(1-\hat p_n)}n}.
$$

The mean squared error measures the quality of a point estimator.

$$
\operatorname{MSE}=E[(\hat\theta_n-\theta)^2]
=\bigl(\operatorname{bias}(\hat\theta_n)\bigr)^2+\operatorname{Var}(\hat\theta_n).
$$

An estimator is asymptotically normal in the sense used here if the distribution of $(\hat\theta_n-\theta)/\operatorname{se}$ converges to $N(0,1)$.

#### Multinomial distribution (May 5, 2015)

Let $\boldsymbol X\sim\operatorname{Mult}(n,\boldsymbol p)$ with $\boldsymbol p=(p_1,\ldots,p_k)$ and $\sum_{i=1}^k p_i=1$. The expected count vector is

$$
E[\boldsymbol X]=
\begin{pmatrix}
E[X_1]\\
\vdots\\
E[X_k]
\end{pmatrix}
=
\begin{pmatrix}
np_1\\
\vdots\\
np_k
\end{pmatrix}.
$$

### PDF page 106

#### Pearson's chi-square test for multinomial data

The notes attribute the statistic to Karl Pearson and describe it as an approximation to the likelihood-ratio test statistic. For observed category counts $x_j$ and expected counts $E_j=E[X_j]=np_j$,

$$
T=\sum_{j=1}^k\frac{(x_j-np_j)^2}{np_j}
=\sum_{j=1}^k\frac{(x_j-E_j)^2}{E_j}.
$$

Under a multinomial null with $k$ specified category probabilities, the large-sample reference distribution is approximately $\chi^2_{k-1}$, where $k-1$ is the number of degrees of freedom.

#### Traffic accidents

| Accident count $x$ | Frequency |
| ---: | ---: |
| 0 | 32 |
| 1 | 12 |
| 2 | 6 |
| 3 | 0 |

Under $H_0$, the accident counts follow a $\operatorname{Pois}(\mu)$ distribution. The maximum likelihood estimate of $\mu$ is the sample mean, here $\hat\mu=24/50=0.48$. For $X\sim\operatorname{Pois}(\mu)$, $P(X=k)=\mu^ke^{-\mu}/k!$ for $k=0,1,2,\ldots$.

Using the fitted mean, the probabilities for the grouped categories are

$$
\begin{aligned}
p_1&=P(X=0)=e^{-\hat\mu}\approx0.619,\\
p_2&=P(X=1)=\hat\mu e^{-\hat\mu}\approx0.297,\\
p_3&=P(X\ge2)=1-e^{-\hat\mu}-\hat\mu e^{-\hat\mu}\approx0.084.
\end{aligned}
$$

The third formula pools all counts of two or more.

### PDF page 107

Under the fitted Poisson null model, multiplying the rounded probabilities by $n=50$ gives the expected category frequencies

$$
E_1=n\hat p_1=30.95,\qquad E_2=n\hat p_2=14.85,\qquad E_3=n\hat p_3=4.20.
$$

The $p$-value is the upper-tail probability for the observed goodness-of-fit statistic under the null reference distribution.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\thermal{F}$ | $\unit{{}^\circ F}$ | Fahrenheit temperature | Temperature expressed in degrees Fahrenheit in the conversion example. |
| $\thermal{C}$ | $\unit{{}^\circ C}$ | Celsius temperature | Temperature expressed in degrees Celsius in the conversion example. |
| $\thermal{\bar x}_{11}$ | $\unit{{}^\circ C}$ | Mean temperature | Sample mean of eleven hourly temperature readings. |
| $\energy{\bar x}$ | $\unit{MJ/kg}$ | Sample mean calorific content | Mean of the measured gross calorific content per unit mass in the coal example. |
| $\energy{\mu}$ | $\unit{MJ/kg}$ | Population mean calorific content | True mean gross calorific content per unit mass of the coal shipment. |
| $\mechanical{S}$ | $\unit{mph}$ | Actual speed | True speed of the car in the speed-trap example. |
| $\mechanical{M}$ | $\unit{mph}$ | Measured speed | Speed recorded by the automated device. |
| $\mechanical{a}$ | $\unit{mph}$ | Ticket threshold | Measured speed above which the automated device issues a ticket. |
