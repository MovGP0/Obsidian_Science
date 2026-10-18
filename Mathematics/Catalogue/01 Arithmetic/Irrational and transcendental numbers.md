---
title: "Irrational and transcendental numbers"
catalogue_ids:
  - "1.1.1.2"
---

> [!TLDR]
> An irrational number is not a ratio of integers; a transcendental number satisfies no nonzero polynomial equation with integer coefficients.

## Two different classifications

Start with the number sets in [[Number sets and the real line]]. A real number is **rational** if it can be written $p/q$ with integers $p,q$ and $q\ne0$. A real number is **irrational** if it cannot. Thus a real number is in exactly one of these two classes.

Examples of irrational numbers include $\sqrt2$ and $\pi$. Here $\pi$ is the ratio of a circle's circumference to its diameter in Euclidean geometry. The fraction $22/7$ is a useful approximation to $\pi$, but it is not equal to $\pi$. Rounding an irrational number gives a rational approximation; it does not change the type of the original number.

The words **algebraic** and **transcendental** make a second distinction. To understand them, first define a polynomial.

## Polynomial equations and algebraic numbers

A **polynomial in $x$ with integer coefficients** is a finite sum of terms such as

$$
3x^4-2x^2+7x-5.
$$

Each power of $x$ is a nonnegative integer, and each coefficient is an integer. The **zero polynomial** has every coefficient zero. We exclude it because $0=0$ holds for every possible number and provides no restriction.

A real number $a$ is **algebraic** if some nonzero polynomial with integer coefficients becomes zero at $x=a$. For example,

$$
(\sqrt2)^2-2=0.
$$

So $\sqrt2$ is algebraic, although it is irrational. A rational number $p/q$ is always algebraic: it solves $qx-p=0$. This is a nonzero polynomial because $q\ne0$. The definition permits polynomials of any finite degree, not only linear or quadratic equations.

A real number is **transcendental** if it is not algebraic. Thus no nonzero polynomial with integer coefficients has it as a root. This is a much stronger condition than irrationality. Failure to solve a number with the quadratic formula does not prove that the number is transcendental: the relevant polynomial could have higher degree.

## How the classes fit together

For real numbers, the possibilities are:

| Example | Rational or irrational? | Algebraic or transcendental? | Reason |
| --- | --- | --- | --- |
| $3/5$ | Rational | Algebraic | It solves $5x-3=0$. |
| $\sqrt2$ | Irrational | Algebraic | It solves $x^2-2=0$. |
| $\pi$ | Irrational | Transcendental | Its transcendence is a theorem. |

Every real transcendental number is irrational. If it were rational, the linear equation above would make it algebraic, a contradiction. The converse fails because $\sqrt2$ is an irrational algebraic number. These statements concern real numbers; the broader definitions also apply to complex numbers, which are not needed here.

The proof that $\pi$ is transcendental uses mathematics beyond this lesson. We use that theorem as a stated result, not as something established by its decimal digits. For an advanced reference, Bernard, Bertot, Rideau, and Strub give a computer-checked proof in [Formal Proofs of Transcendence for e and π](https://arxiv.org/abs/1512.02791). Reading that paper is not a prerequisite for the examples here.

## Decimals do not settle every question

A real number is rational exactly when its decimal expansion terminates or eventually repeats a fixed finite block. “Eventually” permits a finite part before the repetition. For example, $0.1666\ldots=1/6$. To avoid ambiguity, choose the terminating representation when one exists; $0.4999\ldots$ and $0.5$ name the same number.

An irrational decimal does not eventually repeat. This fact distinguishes rationals from irrationals, but it does not distinguish algebraic irrationals from transcendental numbers. A calculator shows only finitely many digits. Those digits cannot prove that no repeating block will ever begin, or that no polynomial equation exists.

## Worked example: classify a transformed square root

Let $a=1+\sqrt2$. We will prove that $a$ is irrational and algebraic.

1. If $a$ were rational, subtracting the rational number $1$ would make $\sqrt2=a-1$ rational. This conflicts with the irrationality of $\sqrt2$, proved in [[Proof by contradiction]]. Thus $a$ is irrational.
2. From $a-1=\sqrt2$, square both sides: $(a-1)^2=2$.
3. Expand and collect terms: $a^2-2a-1=0$.
4. The polynomial $x^2-2x-1$ is nonzero and has integer coefficients. Thus $a$ is algebraic and is not transcendental.

Finding one suitable polynomial proves algebraicity. To prove transcendence, one must rule out every nonzero integer polynomial. The two tasks have very different difficulty.

## Practice

1. Classify $\sqrt{49}$ and $\sqrt3$ as rational or irrational and as algebraic or transcendental. For $\sqrt3$, you may use the established fact that the square root of a nonsquare positive integer is irrational.
2. Assume the theorem that $\pi$ is transcendental. Prove that $\pi+1$ is irrational. Does this argument alone prove transcendence?

> [!example]- Worked answers
> 1. Since $\sqrt{49}=7=7/1$, it is rational and algebraic, for example as a root of $x-7$. The number $\sqrt3$ is irrational under the stated result and algebraic because it solves $x^2-3=0$. It is therefore not transcendental.
>
> 2. If $\pi+1$ were rational, subtraction of $1$ would make $\pi$ rational. Every rational is algebraic, which conflicts with the given theorem. Thus $\pi+1$ is irrational. This argument alone rules out rationality, not every possible polynomial equation; an additional polynomial argument would be needed to establish transcendence.
