---
title: "Numerical constants and rounding"
catalogue_ids:
  - "21.1"
---

> [!TLDR]
> Use the definition of a numerical constant for exact work, and control rounding when you use a decimal table.

## Definitions before decimals

A mathematical constant is fixed by a mathematical definition. Its decimal expansion can be infinite even when the definition is exact. The following small table is a working reference, not a claim that the decimals are exact. All displayed decimal values are rounded to ten places.

| Constant | Definition or meaning | Rounded value |
| --- | --- | --- |
| $\pi$ | Circumference divided by diameter of a Euclidean circle | 3.1415926536 |
| $e$ | $\sum_{n=0}^{\infty}1/n!$ | 2.7182818285 |
| $\sqrt2$ | Positive number whose square is 2 | 1.4142135624 |
| $\sqrt3$ | Positive number whose square is 3 | 1.7320508076 |
| $\ln2$ | Integral $\int_1^2 dx/x$ | 0.6931471806 |
| $\ln10$ | Integral $\int_1^{10} dx/x$ | 2.3025850930 |
| $\log_{10}e$ | $1/\ln10$ | 0.4342944819 |
| $\gamma$ | Limit of $1+1/2+\cdots+1/n-\ln n$ | 0.5772156649 |

The factorial $n!$ is the product $1\cdot2\cdots n$, with $0!=1$. The symbol $\gamma$ here means the Euler–Mascheroni constant. It is different from the gamma function $\Gamma(x)$ in [[Gamma function tables]]. The logarithms have explicitly stated bases. See [[Logarithms and their bases]] for the change-of-base rule.

## Decimal places and significant figures

Decimal places count digits after the decimal point. Significant figures start at the first nonzero digit. Thus 0.00420 has five decimal places and three significant figures. Writing 0.0042 records fewer digits even though it denotes the same exact real number when read without measurement context.

If a number is rounded to $d$ decimal places, its absolute rounding error is at most $\tfrac12 10^{-d}$ under rounding to nearest. The absolute error is $|x-\widetilde x|$. The relative error is $|x-\widetilde x|/|x|$ for $x\ne0$. Relative error is useful when two values have different sizes; absolute error is necessary near zero.

For $\sqrt2\approx1.4142$, the absolute rounding error is at most 0.00005. Squaring the decimal gives 1.99996164 rather than 2. This does not disprove the definition of $\sqrt2$. It shows why the exact symbol is useful.

## Worked example: a constant inside a formula

Let $A=\pi r^2$ be a purely mathematical area with $r=2$. The exact answer is $4\pi$. Using $\pi\approx3.1416$ gives $A\approx12.5664$. Since the error in this approximation to $\pi$ is at most 0.00005, multiplication by 4 gives an error bound of 0.0002 for the area number.

Now suppose $r\approx2.00$ is itself rounded to the nearest 0.01. Then $1.995\le r\le2.005$, so the area lies between $\pi(1.995)^2$ and $\pi(2.005)^2$. This interval is much wider than the error from the four-place value of $\pi$. More digits of a constant cannot repair uncertain input. In physical work, attach the relevant units as explained in [[Physical constants and SI units]].

## Produce and check entries

To estimate $e$, sum $1+1+1/2+1/6+1/24+1/120=2.716666\ldots$. The missing terms are positive, so this is a lower bound. Successive later terms shrink by factors of at most $1/7$. Their total is at most $(1/720)/(1-1/7)=7/4320$. This bounds the error without trusting a printed decimal.

A different check for $\ln2$ uses the alternating sum $1-1/2+1/3-\cdots$. Its error is at most the next term, although convergence is slow. A table may use faster algorithms, but an independent bound remains useful. Do not treat an apparent match of a few digits as proof of an identity.

Avoid early rounding in a chain of operations. Keep guard digits, then round the final result. Subtracting nearly equal numbers can expose rounding error: 1.4142 minus 1.4141 is 0.0001, so a small input error can be a large fraction of the difference.

## Practice

1. Use $\ln2\approx0.69315$ to estimate $\ln32$ and bound the error caused only by this rounded constant.
2. A value 0.012346 is rounded to four significant figures. Give the result and the maximum error implied by its last place.

> [!example]- Worked answers
> 1. Since $32=2^5$, the estimate is $5(0.69315)=3.46575$. The constant has error at most 0.000005, so this result has error at most 0.000025.
> 2. The first four significant digits are 1, 2, 3, 4; the next digit is 6. Round to 0.01235. Its last place is $10^{-5}$, so rounding to nearest gives an error bound of $0.5\times10^{-5}$.

## Reference

The definitions, notation, and further values can be checked in [NIST DLMF §3.12: mathematical constants](https://dlmf.nist.gov/3.12). The decimal entries here can also be regenerated from the defining formulas; they are not physical measurements.
