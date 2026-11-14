---
title: "Counting, conditional probability, and Bayes problems"
---

> [!TLDR]
> Construct sample spaces, count events, and use conditional probabilities and total probability to update beliefs.

## Worked lecture material

##### Introduction to probability

Math 32 with Swenson. The opening heading calls this “Boring Math Time,” also known as introduction to probability.

A **sample space** is a set whose elements describe the outcomes of an experiment. The notes use $\Omega$ to denote it.

- A coin toss has the finite sample space $\Omega=\{\mathrm H,\mathrm T\}$.
- A birth month has the finite sample space $\Omega=\{\text{Jan},\text{Feb},\text{Mar},\text{Apr},\text{May},\text{Jun},\text{Jul},\text{Aug},\text{Sep},\text{Oct},\text{Nov},\text{Dec}\}$.
- The failure load of a bridge is modeled by $\Omega=(0,\infty)$, an uncountable or continuous set.

![[Kyle Kabasares - Probability and Statistics - Continuous bridge failure load number line.png|**Fig. 1** Positive real values on the failure-load number line.]]

If you flip a coin until heads first appears, record the number of flips. The positive integers $\Omega=\{1,2,3,4,\ldots\}$ form a countable or discrete set.

##### Arranging envelopes

![[Kyle Kabasares - Probability and Statistics - Three envelopes to arrange.png|**Fig. 2** Three distinct envelopes labeled A, B, and C.]]

There are $3\cdot2\cdot1=3!=6$ arrangements of three envelopes. Four envelopes have $4\cdot6=4!=24$ arrangements.

##### Factorials, combinations, and permutations

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

For four objects, $\binom42=4!/(2!2!)=6$, $\binom43=4!/(3!1!)=4$, $\binom40=\binom44=1$, and $\binom41=\binom43=4$. Here $n$ counts the objects and $k$ counts the selected objects, or successes. Interchanging $k$ and $n-k$ interchanges the two factors in the denominator.

$$
\binom n{n-k}=\frac{n!}{(n-k)![n-(n-k)]!}
=\frac{n!}{(n-k)!k!}=\binom nk.
$$

##### Events and set operations

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

##### Probability axioms

A probability function assigns numbers in $[0,1]$ to events. The handwritten domain is $\Omega$, but the arguments below are events in the sample space. The page gives the following properties.

1. $P(A)\geq0$ for every event $A$.
2. $P(\Omega)=1$.
3. $P(A\cup B)=P(A)+P(B)$ for disjoint events $A$ and $B$.

For pairwise disjoint events $A,B,C$, the union $A\cup B$ is disjoint from $C$. Apply additivity twice to obtain $P(A\cup B\cup C)=P(A\cup B)+P(C)=P(A)+P(B)+P(C)$.

![[Kyle Kabasares - Probability and Statistics - Three pairwise disjoint events.png|**Fig. 10** Three disjoint events in the same sample space.]]

##### Probability rules and odds

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

The second interpretation of the Super Bowl probability is the Bayesian viewpoint. The probability expresses a subjective degree of belief that the Patriots will win.

##### Products of sample spaces and independence

For five coin flips, use the Cartesian product $\Omega=\{0,1\}^5$. Its outcomes are ordered five-tuples such as $(0,0,0,0,0)$ and $(1,1,1,1,1)$. Let $P(1)=p$ and $P(0)=1-p$. For independent flips, the probability of five zeros is $(1-p)^5$.

For two independent fair flips, each of the four joint outcomes has probability $(1/2)(1/2)=1/4$.

| Flip 2 \ Flip 1 | Heads | Tails |
| --- | ---: | ---: |
| Heads | $1/4$ | $1/4$ |
| Tails | $1/4$ | $1/4$ |

Two events $A$ and $B$ are **independent** if $P(A\cap B)=P(A)P(B)$.

In five independent flips, exactly one head has probability $5p(1-p)^4$. Exactly two heads have probability $\binom52p^2(1-p)^3=10p^2(1-p)^3$, since $\binom52=5!/(3!2!)=20/2=10$.

##### An infinite sample space

Flip until the first head. The probabilities of finishing on flips 1, 2, and 3 are $p$, $p(1-p)$, and $p(1-p)^2$. In general, $P(\text{first head on flip }k)=p(1-p)^{k-1}$. Check normalization with the geometric series $1+x+x^2+\cdots=1/(1-x)$ for $\lvert x\rvert<1$.

$$
\sum_{k=1}^{\infty}p(1-p)^{k-1}
=p\bigl[1+(1-p)+(1-p)^2+\cdots\bigr]
=\frac{p}{1-(1-p)}=1
$$

for $0<p\leq1$.

##### Conditional probability

Return to the birth-month example and assign probability $1/12$ to each month. Then $P(L)=7/12$ and $P(R)=8/12$. Given that the person was born in a long month, the possible months are restricted to $L$. Four of its seven months are in $R\cap L=\{\text{Jan},\text{Mar},\text{Oct},\text{Dec}\}$.

![[Kyle Kabasares - Probability and Statistics - Overlap for conditional birth month probability.png|**Fig. 11** Within the long-month event, the shaded overlap contains the months whose names have the letter r.]]

$$
P(R\mid L)=\frac{P(R\cap L)}{P(L)}=\frac{4/12}{7/12}=\frac47.
$$

For $P(B)>0$, define the probability of $A$ given $B$ as $P(A\mid B)=P(A\cap B)/P(B)$. In rearranged form, $P(A\cap B)=P(A\mid B)P(B)$ is the multiplication rule, also called the product rule.

##### Birthday problem

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

##### Bayes' rule

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

##### Bayes' theorem and an imperfect test

In this hypothetical example about bovine spongiform encephalopathy (BSE), let $B$ be the event that a cow has the disease and $T$ the event that its test is positive. Find $P(B\mid T)$ and $P(B\mid T^c)$.

![[Kyle Kabasares - Probability and Statistics - Sketch of a BSE test.png|**Fig. 12** Handwritten sketch introducing the test example.]]

The example uses $P(T\mid B)=0.70$, false-positive probability $P(T\mid B^c)=0.10$, and prevalence $P(B)=0.02$. Bayes' rule gives $P(B\mid T)=(0.70)(0.02)/P(T)$.

##### Law of total probability

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

For a negative test, $P(T)=0.112$ from the total-probability calculation, and

$$
P(B\mid T^c)=\frac{(1-0.70)(0.02)}{1-0.112}\simeq0.00676.
$$

The boxed value in the handwriting is $0.00675$.

##### Independence and conditional independence

Recall that $P(A\cap B)=P(A)P(B)$ for independent events. The multiplication rule gives $P(A\cap B)=P(A\mid B)P(B)$. If $P(B)>0$, these are equivalent to $P(A\mid B)=P(A)$. If $P(A)>0$, independence is likewise equivalent to $P(B\mid A)=P(B)$. Learning the occurrence of one event leaves the probability of the other the same. Independence also holds when either or both events are replaced by their complements.

For conditional independence of $A$ and $B$ given $C$, the notes use $P(A\mid B\cap C)=P(A\mid C)$ when both conditional probabilities are defined. The multiplication rule within $C$ then gives

$$
P(A\cap B\mid C)=P(A\mid B\cap C)P(B\mid C)=P(A\mid C)P(B\mid C).
$$

##### Two radios from the same factory

Factory A produces defective radios with probability $0.05$, and factory B with probability $0.01$. You buy two radios made at the same factory, with either factory initially equally likely. If the first radio is defective, what is the probability that the second is defective?

Let $A$ and $B$ denote the events that both radios came from the respective factories. Let $D_1$ and $D_2$ denote defects in the first and second radios. The quantity to compute is $P(D_2\mid D_1)$.

## Source

Kyle Kabasares, *Probability and Statistics (Math 32, UC Merced 2015)*.
