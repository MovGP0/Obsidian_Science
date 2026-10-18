---
title: "Gaussian bell shapes"
catalogue_ids:
  - "2.6.3"
  - "2.6.5"
---

> [!TLDR]
> A Gaussian bell is an exponential of a negative square; completing a quadratic exponent reveals its centre, peak, and width.

## A square inside an exponential

Use [[Exponential and logarithmic graphs]] and [[Polynomial graph shapes]] first. The basic function $f(x)=e^{-x^2}$ is defined and positive for every real input. It is even because replacing $x$ by $-x$ does not change the square. Since $-x^2\le0$, the output is at most one, with equality only at zero. As $|x|\to\infty$, the exponent tends to $-\infty$, so $f(x)\to0$. Zero is an asymptotic value and is never attained.

For $0\le u<v$, we have $-u^2>-v^2$, so $f(u)>f(v)$. Thus the graph decreases to the right of its centre and increases toward its centre from the left. Its range is $(0,1]$: every $y$ there gives $x=\pm\sqrt{-\ln y}$, with both signs agreeing at $y=1$.

The word “Gaussian” describes this exponential-square shape. A positive bell-shaped function does not automatically define a probability density. A density requires its total area to be one. That extra normalization belongs to probability theory, not to the graph definition here.

## Separate centre, height, and width

A convenient family is

$$
f(x)=H\exp\left(-\frac{(x-\mu)^2}{2s^2}\right),
\qquad H>0,\quad s>0.
$$

The peak is $(\mu,H)$ and the symmetry line is $x=\mu$. The parameter $s$ controls horizontal spread: at distance $s$ from the centre, the output is $H e^{-1/2}$. At distance $2s$, it is $H e^{-2}$. Larger $s$ spreads the same peak over a wider input interval. Increasing $H$ stretches outputs without changing those relative-height distances.

To find the half-height points, solve $f(x)=H/2$. Divide by $H$ and take a logarithm:

$$
-\frac{(x-\mu)^2}{2s^2}=-\ln2,
\qquad |x-\mu|=s\sqrt{2\ln2}.
$$

The distance between the two points is the full width at half maximum, $2s\sqrt{2\ln2}$. It measures a graph feature, not the entire support. The function remains positive arbitrarily far outside that width.

## The catalogue's generalized Gaussian

The source catalogue uses a quadratic exponent, $g(x)=A e^{Bx+Cx^2}$. It does not refer here to the different generalized-normal family involving $|x|^p$. The source identification follows section 2.6.5 of [Bronshtein and coauthors' handbook](https://www.alnasiry.net/Book-Exa/Handbook%20of%20Mathematics.pdf). To study its shape, derive a completed-square form. For $C\ne0$,

$$
Bx+Cx^2=C\left(x+\frac B{2C}\right)^2-\frac{B^2}{4C}.
$$

If $A>0$ and $C<0$, this is a bell with

$$
\mu=-\frac B{2C},\qquad
H=Ae^{-B^2/(4C)},\qquad s=\frac1{\sqrt{-2C}}.
$$

If $A>0$ and $C>0$, the function has a positive minimum instead of a bell peak and grows at both infinite ends. If $C=0$, it reduces to an ordinary exponential or a constant. A negative $A$ reflects all outputs across the horizontal axis. The sign of the quadratic coefficient must therefore be checked before using the word “bell”.

## Recognize a bell from logarithmic output

For positive outputs, taking the logarithm of a Gaussian gives a downward-opening quadratic:

$$
\ln f(x)=\ln H-\frac{(x-\mu)^2}{2s^2}.
$$

Consequently, equal distances from the centre give equal logged outputs as well as equal original outputs. A polynomial fit to logged data can suggest Gaussian parameters, but a positive data table alone does not prove that the underlying rule is Gaussian. Errors and offsets change the interpretation. In particular, adding a positive constant background to a Gaussian prevents its logarithm from being exactly quadratic unless that background is removed first. A graph with a flat-looking top can resemble a bell while belonging to a different family. The defining quadratic exponent is the mathematical test used in this lesson.

## Worked example: decode a quadratic exponent

Let $g(x)=3e^{4x-2x^2}$. Complete the exponent:

$$
4x-2x^2=-2(x^2-2x)=-2(x-1)^2+2.
$$

Hence $g(x)=3e^2 e^{-2(x-1)^2}$. Its centre is one, its peak height is $3e^2$, and comparison with $-(x-\mu)^2/(2s^2)$ gives $s=1/2$. Its half-height inputs are $1\pm\sqrt{\ln2/2}$. At $x=0$, the output is three; by symmetry the output at two is also three. The horizontal asymptote at either infinite end is zero.

Notice that $A=3$ in the original form is its value at zero, not its peak. The linear term moves the centre, changing the peak height after completing the square. This is a common reason for a wrong graph scale.

## Practice

1. Find the peak location, height, and half-height width of $f(x)=5e^{-(x+2)^2/8}$.
2. Decide whether $g(x)=2e^{x^2-6x}$ is a bell. Find its extreme value.

## Worked answers

1. Here $\mu=-2$, $H=5$, and $2s^2=8$, so $s=2$. The peak is $(-2,5)$ and the full half-height width is $4\sqrt{2\ln2}$. The two half-height inputs are $-2\pm2\sqrt{2\ln2}$.
2. The exponent is $(x-3)^2-9$. Its positive quadratic coefficient gives a minimum, not a bell maximum. Thus $g(x)\ge2e^{-9}$, with equality at $x=3$, and the function grows without bound toward both infinite ends.
