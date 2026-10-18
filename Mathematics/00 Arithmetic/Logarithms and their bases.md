---
title: "Logarithms and their bases"
catalogue_ids:
  - "1.1.4.3"
  - "1.1.4.4"
---

> [!TLDR]
> A logarithm gives the exponent needed to reach a positive number from a chosen positive base other than one.

## Recover an exponent

Suppose $2^x=8$. The answer is $x=3$, because $2^3=8$. The notation $\log_2 8=3$ states the same relationship. Read this as “the logarithm of eight to base two is three”. In general,

$$
\log_b y=x\quad\Longleftrightarrow\quad b^x=y.
$$

The base must satisfy $b>0$ and $b\ne1$, and the **argument** $y$ must be positive. These conditions give exactly one real exponent for each positive argument. A base of $1$ would always give $1^x=1$, so it cannot recover an exponent. A zero or negative base does not give the usual real power for every real exponent. See [[Powers and exponent rules]] for these restrictions.

For example, $\log_3 81=4$, $\log_3 1=0$, and $\log_3(1/9)=-2$. A logarithm can be zero or negative even though its argument must be positive. There is no real value for $\log_3 0$ or $\log_3(-9)$.

![[arithmetic-operations-inverse-questions.svg|**Fig. A.operations.2** Power, root, and logarithm answer three different questions about 2³ = 8. The logarithm asks for the exponent.]]

Fig. A.operations.2 keeps the three roles separate. The cube root finds the base when the exponent is three. The base-two logarithm finds the exponent when the base is two. They are not interchangeable operations.

## Logarithm laws

For $u,v>0$ and a valid base $b$,

$$
\log_b(uv)=\log_bu+\log_bv,\qquad
\log_b(u/v)=\log_bu-\log_bv.
$$

To derive the product law, write $u=b^p$ and $v=b^q$. Then $uv=b^{p+q}$ by the power rule, so its logarithm is $p+q$. Division subtracts exponents and gives the quotient law in the same way.

For $u>0$ and any real $r$, the power rule is

$$
\log_b(u^r)=r\log_bu.
$$

It follows from $(b^p)^r=b^{pr}$ for a positive base. Also, $\log_b1=0$ and $\log_bb=1$. There is no corresponding sum rule: $\log_b(u+v)$ is generally not $\log_bu+\log_bv$. In base ten, $\log_{10}(10+10)=\log_{10}20$ differs from $1+1=2$, since $10^2=100$.

## Special logarithms

Three bases occur often. A **common logarithm** has base ten. A **natural logarithm**, written $\ln y$, has base $e\approx2.71828$. A **binary logarithm** has base two. Write the base explicitly when the context is unclear: the plain symbol “log” has different conventions in different subjects.

| Type | Explicit notation | Example |
| --- | --- | --- |
| Common | $\log_{10}y$ | $\log_{10}1000=3$ |
| Natural | $\ln y=\log_e y$ | $\ln e^2=2$ |
| Binary | $\log_2 y$ | $\log_2 32=5$ |

Base ten counts powers of ten in decimal scales. Base two counts doubling steps: going from $1$ to $32$ takes five doublings. The number $e$ is a particular irrational constant, not a variable. One elementary way to identify it is that $(1+1/n)^n$ approaches $e$ as the positive integer $n$ grows. For $n=10,100,1000$, these values are about $2.5937$, $2.7048$, and $2.7169$. This observation identifies the constant; a proof of convergence is not needed to use $\ln$ on a calculator.

The natural logarithm has the same laws and positive-argument restriction as other logarithms. There is no special rule that permits $\ln0$.

## Change of base

For valid bases $a,b$ and $y>0$, let $x=\log_a y$. Then $a^x=y$. Taking a base-$b$ logarithm and applying the power rule gives $x\log_b a=\log_b y$. Since $a\ne1$, the factor $\log_b a$ is nonzero. Divide to obtain

$$
\log_a y=\frac{\log_b y}{\log_b a}
=\frac{\ln y}{\ln a}.
$$

This lets a calculator with only “log” and “ln” evaluate other bases. For example, $\log_2 10=\ln10/\ln2\approx3.32193$. Check by calculating $2^{3.32193}\approx10$. A base between zero and one is also valid: $\log_{1/2}8=-3$, because $(1/2)^{-3}=8$.

## Worked example with restrictions

Solve $\log_2(x-1)+\log_2(x+1)=3$. First require both arguments to be positive: $x>1$. Combine the logarithms to obtain $\log_2((x-1)(x+1))=3$. Convert back to a power: $x^2-1=2^3=8$. Hence $x^2=9$, with candidates $x=3$ and $x=-3$. Only $3$ satisfies the original domain. Substitution gives $\log_2 2+\log_2 4=1+2=3$.

The separate argument restrictions remain necessary after combining logarithms. For graph-based development, continue with [[03.04 Exponential and logarithmic functions]].

## Practice

1. Find $\log_{10}(0.001)$, $\ln(e^4)$, and $\log_2(1/16)$.
2. Solve $3^x=20$ in exact logarithmic form and approximate $x$ to three decimal places.

## Worked answers

1. Since $10^{-3}=0.001$, the common logarithm is $-3$. Since the natural base is $e$, $\ln(e^4)=4$. Since $2^{-4}=1/16$, the binary logarithm is $-4$.
2. The definition gives $x=\log_3 20$. Change of base gives $x=\ln20/\ln3\approx2.727$. This is between $2$ and $3$, consistent with $3^2=9<20<27=3^3$.
