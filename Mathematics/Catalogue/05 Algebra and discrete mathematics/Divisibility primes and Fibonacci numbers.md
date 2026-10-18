---
title: "Divisibility, primes, and Fibonacci numbers"
catalogue_ids:
  - "5.4"
  - "5.4.1"
  - "5.4.1.1"
  - "5.4.1.2"
  - "5.4.1.3"
  - "5.4.1.4"
  - "5.4.1.5"
---

> [!TLDR]
> Divisibility, prime factors, and the Euclidean algorithm organize integer calculations; recurrences such as the Fibonacci rule supply useful examples.

## Divisibility and division with remainder

For integers $a,b$, write $a\mid b$ when $b=ak$ for some integer $k$. The statement $3\mid12$ is true because $12=3\cdot4$. Every nonzero integer divides zero. Zero divides only zero under this definition, but division by zero remains undefined. Usually divisors used in algorithms are positive.

For an integer $a$ and positive $b$, division with remainder gives unique integers $q,r$ such that $a=bq+r$ and $0\le r<b$. For example, $-17=5(-4)+3$, so the nonnegative remainder is $3$, not $-2$. If $d$ divides both $a$ and $b$, it divides every integer combination $ma+nb$. This follows by substituting $a=du$, $b=dv$ and factoring out $d$.

## Prime numbers and factorization

A **prime** is an integer greater than one with no positive divisors except one and itself. A composite integer greater than one has a nontrivial factorization. The integer one is neither prime nor composite. Every integer greater than one has a prime factorization, unique apart from the order of factors. Existence follows by repeatedly factoring composite factors until smaller positive factors cannot be split further. Uniqueness uses Euclid's lemma: if a prime divides a product, it divides at least one factor.

There are infinitely many primes. If a finite list $p_1,\ldots,p_k$ contained them all, the integer $N=p_1\cdots p_k+1>1$ would have a prime divisor. That divisor cannot be on the list, since division by any listed prime leaves remainder one. This argument does not say that $N$ itself must be prime.

To test a modest integer $n>1$ by trial division, check prime divisors up to $\sqrt n$. If $n=ab$ with $a,b>1$ and both exceeded $\sqrt n$, their product would exceed $n$. Thus a composite number always has a small enough divisor. To test $97$, check $2,3,5,7$; none divides it, and the next prime $11$ exceeds $\sqrt{97}$. Therefore $97$ is prime.

## Divisibility criteria from decimal notation

Write a positive decimal integer as $n=d_0+10d_1+100d_2+\cdots$, with digits $0\le d_i\le9$. Since $10$ leaves remainder one modulo $3$ and $9$, every power of $10$ does too. Hence $n$ and its digit sum have the same remainder modulo $3$ or $9$. Thus $753$ is divisible by $3$, since $7+5+3=15$, but not by $9$.

Since $10$ leaves remainder $-1$ modulo $11$, the alternating digit sum determines divisibility by $11$. For $2728$, calculate $8-2+7-2=11$, so it is divisible by $11$. The last digit tests divisibility by $2$ or $5$ because $10$ is divisible by each. The last two digits test divisibility by $4$; the last three test divisibility by $8$. These rules follow from place value, rather than separate unexplained tricks.

## Greatest common divisor and least common multiple

For nonzero positive integers $a,b$, the **greatest common divisor** $\gcd(a,b)$ is their largest common positive divisor. The **least common multiple** $\operatorname{lcm}(a,b)$ is their smallest common positive multiple. Prime factorization gives the gcd by taking minimum exponents and the lcm by taking maximum exponents. Consequently

$$
\gcd(a,b)\operatorname{lcm}(a,b)=ab.
$$

The Euclidean algorithm avoids full factorization. If $a=bq+r$, a divisor common to $a,b$ is common to $b,r$, and conversely, since $r=a-bq$. Therefore $\gcd(a,b)=\gcd(b,r)$. Repeat until the remainder is zero; the last nonzero remainder is the gcd.

## Worked example: gcd, lcm, and an integer combination

For $252$ and $198$, divide successively:

$$
252=198+54,\quad198=3\cdot54+36,\quad54=36+18,\quad36=2\cdot18.
$$

Thus the gcd is $18$ and the lcm is $252\cdot198/18=2772$. Work backward to express the gcd using the inputs:

$$
18=54-36=54-(198-3\cdot54)=4\cdot54-198
=4\cdot252-5\cdot198.
$$

This is a Bézout identity. The same back-substitution method solves the equations in [[Diophantine equations and modular arithmetic]].

## Fibonacci numbers

Define $F_0=0$, $F_1=1$, and $F_{n+2}=F_{n+1}+F_n$. This recurrence gives $0,1,1,2,3,5,8,13,\ldots$. It defines each term from previous terms, so no advanced formula is needed to calculate it.

Consecutive Fibonacci numbers are relatively prime. Apply the Euclidean step:

$$
\gcd(F_{n+1},F_n)=\gcd(F_n,F_{n+1}-F_n)
=\gcd(F_n,F_{n-1}).
$$

Repeating reaches $\gcd(F_2,F_1)=1$. These pairs also produce long Euclidean chains, because successive quotients are mostly one. This connects a simple recurrence with algorithm behavior. It does not mean that every Fibonacci number is prime: $F_6=8$ is composite.

## Practice

1. Find the gcd and lcm of $84$ and $30$, and a Bézout identity for their gcd.
2. Decide whether $9185$ is divisible by $3$, $5$, or $11$. Then calculate $F_8$ and $F_9$.

### Worked answers

1. Division gives $84=2\cdot30+24$, $30=24+6$, and $24=4\cdot6$. Thus gcd $=6$ and lcm $=84\cdot30/6=420$. Back-substitution gives $6=30-24=3\cdot30-84$.
2. The digit sum $23$ excludes divisibility by $3$. The final digit $5$ gives divisibility by $5$. The alternating sum $5-8+1-9=-11$ gives divisibility by $11$. Continuing the recurrence gives $F_8=21$ and $F_9=34$, whose gcd is one.
