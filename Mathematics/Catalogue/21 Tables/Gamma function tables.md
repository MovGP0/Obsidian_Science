---
title: "Gamma function tables and factorials"
catalogue_ids:
  - "21.10"
---

> [!TLDR]
> The gamma function extends the factorial through an integral, with Γ(n + 1) = n!; its argument is one greater than the matching factorial index.

## Define the function first

For a positive real number $x$, define

$$
\Gamma(x)=\int_0^\infty t^{x-1}e^{-t}\,dt.
$$

The variable $t$ is a mathematical integration variable. Near zero the power is integrable because $x-1>-1$. At infinity, exponential decay makes the integral converge. No elementary antiderivative is required for this definition. Review [[08.07 Improper integrals]] before using the endpoint limits. This real-positive definition follows [NIST DLMF §5.2](https://dlmf.nist.gov/5.2).

The capital Greek letter $\Gamma$ denotes a function. It differs from Euler's constant $\gamma$ and from the factorial symbol. The factorial is initially defined only at nonnegative integers, while this integral accepts every positive real input.

## Derive the recurrence

Integration by parts with $u=t^x$ and $dv=e^{-t}dt$ gives

$$
\Gamma(x+1)=[-t^xe^{-t}]_0^\infty+x\int_0^\infty t^{x-1}e^{-t}dt
=x\Gamma(x),\qquad x>0.
$$

The boundary product vanishes. Also $\Gamma(1)=\int_0^\infty e^{-t}dt=1$. Therefore $\Gamma(2)=1$, $\Gamma(3)=2$, and in general $\Gamma(n+1)=n!$. The shift by one is a common source of wrong table readings. The recurrence is stated more generally in [DLMF §5.5](https://dlmf.nist.gov/5.5), but its elementary proof here uses only positive real $x$.

To find $\Gamma(1/2)$, put $t=u^2$. Then $dt=2u\,du$ and $t^{-1/2}dt=2du$, so $\Gamma(1/2)=2\int_0^\infty e^{-u^2}du=\sqrt\pi$. One proof of the Gaussian integral squares the whole-line integral and changes the resulting plane integral to polar coordinates: $\int_0^{2\pi}\int_0^\infty e^{-r^2}r\,dr\,d\theta=\pi$. The positive square root gives the stated value. The change of variables is justified because the integrands are nonnegative and the integral is finite.

## A small exact table

| $x$ | Exact $\Gamma(x)$ | Rounded value |
| --- | --- | --- |
| $1/2$ | $\sqrt\pi$ | 1.772454 |
| $1$ | $1$ | 1.000000 |
| $3/2$ | $\sqrt\pi/2$ | 0.886227 |
| $2$ | $1$ | 1.000000 |
| $5/2$ | $3\sqrt\pi/4$ | 1.329340 |
| $3$ | $2$ | 2.000000 |
| $7/2$ | $15\sqrt\pi/8$ | 3.323351 |
| $4$ | $6$ | 6.000000 |
| $5$ | $24$ | 24.000000 |

The function is not increasing on the whole positive axis: the table itself shows a decrease from $x=1/2$ to $x=3/2$. Never infer monotonicity just from the factorial sequence at integers. Linear interpolation between integer rows can be poor and gives no exact factorial extension.

## Worked example: recognize a scaled gamma integral

Evaluate $I=\int_0^\infty\sqrt{x}e^{-3x}\,dx$. Let $u=3x$. Then $dx=du/3$ and $\sqrt{x}=\sqrt{u}/\sqrt3$, so

$$
I=3^{-3/2}\int_0^\infty u^{1/2}e^{-u}du
=3^{-3/2}\Gamma(3/2)
=\frac{\sqrt\pi}{6\sqrt3}.
$$

The exponent is $x-1$ in the definition, so a power $u^{1/2}$ requires argument $3/2$. A common mistake is to use $\Gamma(1/2)$ and miss both the index shift and the scaling factor. More generally, for $a>0$ and $p>-1$,

$$
\int_0^\infty x^pe^{-ax}dx=\frac{\Gamma(p+1)}{a^{p+1}}.
$$

This unifies several rows in [[Definite integral tables]].

## Extension and numerical limitations

The recurrence can define values at negative noninteger arguments by moving toward positive arguments. For instance, $\Gamma(1/2)=(-1/2)\Gamma(-1/2)$ gives $\Gamma(-1/2)=-2\sqrt\pi$. This is an extension, not evaluation of the original divergent integral at $x=-1/2$. The extended function has poles at $0,-1,-2,\ldots$. Complex continuation requires further theory and is outside this introductory lesson.

For large arguments, factorial and gamma values grow rapidly. Numerical software often returns $\log\Gamma(x)$ to avoid overflow. Exponentiating that value can still overflow, so keep logarithms when you only need ratios. Recurrence products can also accumulate rounding error.

## Practice

1. Find $\Gamma(9/2)$ exactly from the table.
2. Evaluate $\int_0^\infty x^3e^{-2x}dx$.

> [!example]- Worked answers
> 1. Apply the recurrence once: $\Gamma(9/2)=(7/2)\Gamma(7/2)=105\sqrt\pi/16$.
> 2. The exponent is 3, so the gamma argument is 4. The value is $\Gamma(4)/2^4=6/16=3/8$.
