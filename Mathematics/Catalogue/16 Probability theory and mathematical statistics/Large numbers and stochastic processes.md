---
title: "Large numbers and stochastic processes"
catalogue_ids:
  - "16.2.5"
  - "16.2.5.1"
  - "16.2.5.2"
  - "16.2.6"
  - "16.2.6.1"
  - "16.2.6.2"
---

> [!TLDR]
> Large-number laws describe sample averages, while stochastic processes describe linked random observations across a sequence.

## Bernoulli's law of large numbers

Let $I_1,I_2,\ldots$ be independent Bernoulli variables with the same success probability $p$. Their sample average $R_n=(I_1+\cdots+I_n)/n$ is the relative success frequency. Its mean is $p$ and its variance is $p(1-p)/n$. [[Random variables and joint distributions]] supplies the expectation and variance rules used here.

For any fixed $\varepsilon>0$, Chebyshev's inequality gives

$$
P(|R_n-p|\ge\varepsilon)\le\frac{p(1-p)}{n\varepsilon^2}\longrightarrow0.
$$

This is Bernoulli's weak law of large numbers. It says that the probability of a fixed-size frequency error tends to zero. It does not say that every extra observation improves the current average. It also does not promise exact equality at any finite sample size. The assumptions include independent trials and a stable success probability. See [MIT's limit-theorem lecture](https://live.ocw.mit.edu/courses/18-655-mathematical-statistics-spring-2016/6c41b4096a836ff41f8de46cf54b5b7c_MIT18_655S16_LecNote15.pdf).

## Lindeberg–Lévy central limit theorem

Suppose $X_1,X_2,\ldots$ are independent and identically distributed, abbreviated iid, with finite mean $\mu$ and finite positive variance $\sigma^2$. Then

$$
\frac{\sqrt n(\bar X_n-\mu)}{\sigma}\ \xrightarrow{\ d\ }\ N(0,1).
$$

The arrow means convergence in distribution: cumulative probabilities approach the standard-normal CDF at its continuity points. This is the Lindeberg–Lévy version of the central limit theorem. It is distinct from more general Lindeberg theorems for unequal distributions. A proof needs tools beyond this introduction; [MIT's probability lecture on the LLN and CLT](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/resources/mit6_436jf18_lec17/) provides the formal development.

The large-number law describes concentration of the unscaled average. The central limit theorem describes the shape of its remaining fluctuation after multiplying by $\sqrt n$. It does not make the individual observations normal. There is no universal sample size such as thirty that guarantees a good approximation. Strong skew, rare events, or heavy tails can require much larger samples. Infinite variance falls outside this theorem.

For a Bernoulli average, the approximate standard deviation is $\sqrt{p(1-p)/n}$. At $p=1/2,n=400$, it is $0.025$. The normal approximation puts roughly 95% of averages within $1.96(0.025)=0.049$ of $1/2$. This is an approximation for the frequency distribution, not a guarantee about a particular run.

## Stochastic processes and chains

A stochastic process is an indexed family of random variables, such as $X_0,X_1,\ldots$ for discrete steps or $N(t)$ for $t\ge0$. One realization is a path. A one-step distribution alone does not specify a whole process; the relationships between steps also matter.

A finite-state Markov chain assumes that the conditional distribution of the next state, given the full past and present, depends only on the present state. For a time-homogeneous chain, transition probabilities do not depend on the step. Collect them in a row-stochastic matrix $P$, with entries $P_{ij}=P(X_{n+1}=j\mid X_n=i)$ and row sums one. If $v_n$ is the row vector of state probabilities, then $v_{n+1}=v_nP$.

## Worked example: two states

For states A and B, use

$$
P=\begin{pmatrix}0.8&0.2\\0.3&0.7\end{pmatrix},\qquad v_0=(1,0).
$$

After one step, $v_1=(0.8,0.2)$. After two, the A probability is $0.8(0.8)+0.2(0.3)=0.70$, so $v_2=(0.70,0.30)$. The two terms represent the paths A → A → A and A → B → A from the initial state. A stationary vector satisfies $\pi P=\pi$. Solving $0.2\pi_A=0.3\pi_B$ and $\pi_A+\pi_B=1$ gives $(0.6,0.4)$. This positive two-state chain approaches that vector; general chains need extra conditions for convergence. The Markov property does not make successive states independent.

## Poisson processes

A homogeneous Poisson process with rate $r>0$ starts at $N(0)=0$, has independent increments over disjoint intervals, and has increment distribution

$$
N(t+h)-N(t)\sim\operatorname{Poisson}(rh),\qquad h\ge0.
$$

It counts events as the index increases. Its mean and variance at index $t$ are both $rt$. The waiting gaps between events are iid exponential variables with rate $r$. In particular, the first waiting value $T$ obeys $P(T>t)=P(N(t)=0)=e^{-rt}$. A constant mean rate without independent increments does not establish this process. The [MIT random-processes course](https://ocw.mit.edu/courses/res-6-012-introduction-to-probability-spring-2018/pages/part-iii-random-processes/) treats Markov chains and Poisson processes separately.

## Practice

1. For fair independent Bernoulli trials, use Chebyshev to bound the probability that the average of 1000 trials differs from $1/2$ by at least $0.1$.
2. A Poisson process has rate two. Find the probability of no events in an interval of length three.

> [!example]- Worked answers
> 1. The variance of the average is $0.25/1000$. Divide by $0.1^2$ to get the upper bound $0.025$. It is a conservative bound rather than a normal approximation.
> 2. The count has mean $2\cdot3=6$. Its zero probability is $e^{-6}\approx0.002479$. Counts in disjoint intervals are independent under the stated process model.
