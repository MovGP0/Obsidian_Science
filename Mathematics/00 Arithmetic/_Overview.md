---
title: "Arithmetic — learning guide"
document_type: "Mathematics learning guide"
catalogue_ids:
  - "1"
  - "1.1"
---

> [!TLDR]
> Arithmetic develops reliable calculation with numbers, expressions, sums, and equations. This collection builds from secondary-school knowledge to the complete Arithmetic topic list.
## Elementary rules of calculation

An arithmetic expression combines numbers and operations. An equation states that two expressions have the same value. For example, $3(2+4)$ is an expression, while $3(2+4)=18$ is a true equation. A variable stands for a number in a stated domain, such as the real numbers. Changing an expression and solving an equation are different tasks.

For real numbers, addition and multiplication are commutative and associative:

$$
a+b=b+a,\qquad ab=ba,
$$

$$
(a+b)+c=a+(b+c),\qquad (ab)c=a(bc).
$$

These laws permit reordering and regrouping within a sum or product. Subtraction and division do not have the same freedom: $8-3=5$, but $3-8=-5$. Also, $(12/3)/2=2$, while $12/(3/2)=8$.

The distributive law connects multiplication and addition:

$$
a(b+c)=ab+ac.
$$

Reading this equation from left to right expands the product. Reading it from right to left factors out $a$. Both directions preserve the value. A factor multiplies a whole expression; a term is one part of a sum. This distinction explains why common factors can cancel in a fraction, while isolated terms cannot.

Subtraction is addition of an opposite: $a-b=a+(-b)$. Division by a nonzero number is multiplication by its reciprocal: $a/b=a(1/b)$ when $b\ne0$. Division by zero is undefined. If a denominator depends on a variable, record its excluded values before you cancel or rearrange anything.

Evaluate brackets first, then powers and roots, then multiplication and division, and finally addition and subtraction. At a shared level, work from left to right. A fraction bar groups the full numerator and denominator. Write brackets whenever a line could be read in more than one way. In particular, $-3^2=-9$, whereas $(-3)^2=9$.

These rules are developed further in [[02.01 Arithmetic rules]]. The new lessons below explain the number sets, proof methods, and symbolic operations that make the rules useful in less familiar problems.

## Worked example: preserve the structure

Calculate

$$
3-\frac{\frac23-\frac56}{(-\frac12)^2}+\sqrt{36}.
$$

First use a common denominator inside the numerator and evaluate the squared denominator:

$$
\frac23-\frac56=\frac46-\frac56=-\frac16,
\qquad
\left(-\frac12\right)^2=\frac14.
$$

The denominator is nonzero, so the fraction is defined. Dividing by $1/4$ multiplies by $4$:

$$
\frac{-1/6}{1/4}=-\frac16\cdot4=-\frac23.
$$

The principal square root of $36$ is $6$. The outer subtraction changes the sign of the negative quotient. Therefore

$$
3-\left(-\frac23\right)+6
=9+\frac23=\frac{29}{3}.
$$

A decimal check gives approximately $9.667$. This supports the arithmetic, but the exact fraction retains all the information. Keeping the entire quotient in brackets prevents a sign error.

## How to study the lessons

Start with number sets and the elementary operations. Then study expressions, finite sums, and equation solving. Proof methods explain why a rule works for every allowed input. Inequalities develop comparisons and bounds. Complex numbers extend the number system when a real solution does not exist. Financial mathematics applies percentages and geometric sums to explicitly stated accounting models.

Do not infer the teaching order from a source ID alone. A handbook groups related formulas for reference; a learner may need a different order. For example, revisit powers and roots before complex roots, and geometric sums before annuity formulas. Advanced inequalities can wait until you are comfortable with sums, powers, and means.

The existing [[Algebra - Overview]], [[Functions - Overview]], [[Complex numbers - Overview]], and [[Mathematical notation and reasoning - Overview]] offer routes to further study. The new Arithmetic lessons supply their own central arguments, so these links are support rather than a requirement to study an entire university course first.

## Lessons by topic

### Numbers and proof methods

- [[Number sets and the real line|Number sets and the real line]].
- [[Irrational and transcendental numbers|Irrational and transcendental numbers]].
- [[Continued fractions|Continued fractions]].
- [[Commensurability|Commensurability]].
- [[Direct and constructive proofs|Direct and constructive proofs]].
- [[Proof by contradiction|Proof by contradiction]].
- [[Mathematical induction|Mathematical induction]].

### Sums, products, powers, roots, and logarithms

- [[Finite sums and products|Finite sums and products]].
- [[Powers and exponent rules|Powers and exponent rules]].
- [[Roots and principal values|Roots and principal values]].
- [[Logarithms and their bases|Logarithms and their bases]].
- [[Algebraic expressions and their types|Algebraic expressions and their types]].

### Polynomial, rational, and radical expressions

- [[Polynomials and identities|Polynomials and identities]].
- [[Factoring polynomials|Factoring polynomials]].
- [[The binomial theorem|The binomial theorem]].
- [[Greatest common divisors of polynomials|Greatest common divisors of polynomials]].
- [[Rational expressions and polynomial division|Rational expressions and polynomial division]].
- [[Partial fractions|Partial fractions]].
- [[Ratios and transformations of proportions|Ratios and transformations of proportions]].
- [[Radical expressions|Radical expressions]].

### Finite series and means

- [[Finite sums and series|Finite sums and series]].
- [[Arithmetic series|Arithmetic series]].
- [[Geometric series|Geometric series]].
- [[Special finite series|Special finite series]].
- [[Arithmetic geometric harmonic and quadratic means|Arithmetic geometric harmonic and quadratic means]].
- [[Comparing means of two positive numbers|Comparing means of two positive numbers]].

### Financial mathematics

- [[Percentages|Percentages]].
- [[Compound interest|Compound interest]].
- [[Loan repayment|Loan repayment]].
- [[Annuities|Annuities]].
- [[Depreciation|Depreciation]].

### Inequalities

- [[Inequality definitions and rules|Inequality definitions and rules]].
- [[Absolute values and triangle bounds|Absolute values and triangle bounds]].
- [[Inequalities between means|Inequalities between means]].
- [[Bernoulli and binomial inequalities|Bernoulli and binomial inequalities]].
- [[Cauchy-Schwarz inequality|Cauchy-Schwarz inequality]].
- [[Chebyshev sum inequalities|Chebyshev sum inequalities]].
- [[Holder and Minkowski inequalities|Holder and Minkowski inequalities]].
- [[Solving linear and quadratic inequalities|Solving linear and quadratic inequalities]].

### Complex numbers

- [[Complex numbers and the plane|Complex numbers and the plane]].
- [[Polar form of complex numbers|Polar form of complex numbers]].
- [[Exponential form of complex numbers|Exponential form of complex numbers]].
- [[Complex arithmetic and conjugates|Complex arithmetic and conjugates]].
- [[Integer powers of complex numbers|Integer powers of complex numbers]].
- [[All roots of complex numbers|All roots of complex numbers]].

### Algebraic and transcendental equations

- [[Equation forms and safe transformations|Equation forms and safe transformations]].
- [[Linear and quadratic equations|Linear and quadratic equations]].
- [[Cubic equations|Cubic equations]].
- [[Quartic equations|Quartic equations]].
- [[Polynomial roots and higher degrees|Polynomial roots and higher degrees]].
- [[Exponential and logarithmic equations|Exponential and logarithmic equations]].
- [[Trigonometric equations|Trigonometric equations]].
- [[Hyperbolic equations|Hyperbolic equations]].

## Practice

1. Evaluate $12/3\times2$ and $12/(3\times2)$. Explain why the answers differ.
2. A learner writes $(x+6)/x=1+6$ for every real $x$. Identify both the invalid cancellation and the missing restriction. Evaluate the original expression at $x=3$.

## Worked answers

1. Multiplication and division have equal priority, so the first expression is $(12/3)\times2=4\times2=8$. Brackets give the second expression a denominator of $6$, so its value is $2$. The two expressions have different grouping.
2. The original denominator requires $x\ne0$. The numerator is a sum, so $x$ is not a factor of the whole numerator. The valid split is $(x+6)/x=x/x+6/x=1+6/x$, still with $x\ne0$. At $x=3$, the value is $9/3=3$, and the valid split gives $1+2=3$.
