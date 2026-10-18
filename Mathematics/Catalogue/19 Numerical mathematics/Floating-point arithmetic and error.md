---
title: "Floating-point arithmetic and error"
catalogue_ids:
  - "19.8"
  - "19.8.1"
  - "19.8.1.1"
  - "19.8.1.2"
  - "19.8.2"
  - "19.8.2.1"
  - "19.8.2.2"
  - "19.8.2.3"
---

> [!TLDR]
> Finite number representations introduce rounding; conditioning measures input sensitivity, while stability measures how an algorithm handles errors.

## Numbers, bits, and characters

Read [[Number sets and the real line]] and [[Powers and exponent rules]]. A numeral in base $\beta$ represents a weighted sum of powers of $\beta$. For example, $101.1_2=1\cdot2^2+0\cdot2+1+1\cdot2^{-1}=5.5_{10}$. Repeated division by $2$ converts an integer to binary: $13=2(6)+1$, $6=2(3)+0$, $3=2(1)+1$, and $1=2(0)+1$, so read the remainders backwards to get $1101_2$.

Computers store bit patterns, but their meanings depend on an encoding and a data type. The text character `1`, encoded as a Unicode character, is not the same representation as an integer of value $1$ or a floating-point number of value $1$. Text such as `12.5` must be parsed according to rules for digits and separators before numerical arithmetic can occur. A byte sequence is not self-describing. This separates internal character representation from internal number representation.

Fixed-width integers have a finite range. Unsigned $b$-bit integers range from $0$ to $2^b-1$. A usual signed two's-complement representation ranges from $-2^{b-1}$ to $2^{b-1}-1$. Overflow behaviour depends on the language and operation; it must not be treated as ordinary integer algebra.

## Normalized floating-point numbers

A decimal teaching format with $p$ significant digits stores

$$
\pm d_0.d_1\cdots d_{p-1}\times10^e,\qquad d_0\ne0,
$$

within a finite exponent range. This is normalized form. Zero needs a separate representation. With $p=3$, $123.45$ rounds to $1.23\times10^2=123$, while $0.0012345$ rounds to $1.23\times10^{-3}$. The absolute errors differ, but their relative sizes are similar. Rounding to nearest gives relative error at most $u=\tfrac12\beta^{1-p}$ for normal results in base $\beta$, excluding overflow and underflow effects.

Binary floating point uses powers of two. A decimal fraction has a finite binary expansion only when its reduced denominator is a power of two. Thus $1/8=0.001_2$ is exact, whereas $1/10$ repeats. Standard binary64 has $53$ bits of significand precision for normal values, so its round-to-nearest unit roundoff is $2^{-53}$. The gap from $1$ to the next larger binary64 value is $2^{-52}$; do not confuse that gap with unit roundoff. Subnormal values extend the range near zero with reduced relative precision.

## Error types

**Input error** comes from supplied data. **Truncation or discretization error** comes from replacing an infinite process by a finite one, such as a derivative by a difference. **Iteration error** comes from stopping before an algorithm's limiting answer. **Rounding error** comes from finite arithmetic. These errors need different checks. More iterations can reduce iteration error while increasing accumulated rounding.

If the true value is $x$ and its estimate is $\widehat x$, absolute error is $|\widehat x-x|$. Relative error is $|\widehat x-x|/|x|$ when $x\ne0$. Near zero an absolute tolerance is essential. A practical comparison often uses $|a-b|\le\mathrm{atol}+\mathrm{rtol}\max(|a|,|b|)$ rather than exact equality.

## Conditioning versus stability

**Conditioning** concerns the mathematical problem: how much does its answer change under a small change of input? For a differentiable scalar function, a local relative condition number is $|xf'(x)/f(x)|$ where the denominator is nonzero. For $f(x)=\sqrt x$, $x>0$, it is $1/2$. For $f(x)=x-1$ near $x=1$, it is large. This sensitivity exists even with exact arithmetic.

**Stability** concerns an algorithm. A backward-stable algorithm returns the exact answer to a slightly perturbed input problem, with perturbation small on the relevant scale. Its forward error can still be large for an ill-conditioned problem. A well-conditioned problem can also be calculated poorly by an unstable formula. Precision, conditioning, and stability are distinct questions.

## Worked cancellation and a safer expression

Calculate $d=\sqrt{10001}-100$ in a five-significant-digit decimal model. The square root rounds to $100.00$, so direct subtraction gives $0$. Yet the exact difference is positive. Rationalize first:

$$
d=\frac{(\sqrt{10001}-100)(\sqrt{10001}+100)}{\sqrt{10001}+100}
=\frac1{\sqrt{10001}+100}\approx0.004999875.
$$

The denominator contains addition of positive numbers, so the rounded square root still gives a useful estimate $1/200=0.005$. The problem is not that subtraction always loses digits; subtracting exactly represented nearby values can be exact. The danger is exposing prior operand error when the desired difference is much smaller than either operand.

Associativity also fails. In three-significant-digit decimal arithmetic, $(1000+1)-1000$ gives $0$ after rounding the sum, whereas $1000+(1-1000)$ gives $1$ because $-999$ is representable. Reordering or compensated summation can help, but neither can recover missing input information. Scale variables, inspect residuals, compare refinements, and use higher precision when error analysis supports it. [Goldberg's original floating-point tutorial](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html) explains these representation and rounding issues in detail.

## Practice

1. Convert $0.625$ to binary and round $12345$ to three significant decimal digits.
2. Is a large forward error with a tiny backward error necessarily evidence of an unstable algorithm?

> [!example]- Worked answers
> 1. $0.625=1/2+1/8=0.101_2$. Three significant decimal digits give $1.23\times10^4=12300$, with absolute error $45$ and relative error $45/12345\approx0.003645$.
> 2. No. An ill-conditioned problem can amplify a tiny input perturbation into a large answer change. Inspect the problem's condition number as well as the backward error before judging the algorithm.
