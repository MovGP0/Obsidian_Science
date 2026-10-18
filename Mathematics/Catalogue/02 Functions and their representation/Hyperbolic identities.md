---
title: "Hyperbolic identities"
catalogue_ids:
  - "2.9.3"
  - "2.9.3.1"
  - "2.9.3.2"
  - "2.9.3.3"
  - "2.9.3.4"
  - "2.9.3.5"
  - "2.9.3.6"
  - "2.9.3.7"
  - "2.9.3.8"
  - "2.9.3.9"
---

> [!TLDR]
> Exponential laws give hyperbolic addition, multiple-angle, and half-angle identities with explicit sign restrictions.

## Prerequisite route

Start with [[Hyperbolic functions]]. Familiarity with ordinary sine and cosine from [[03.05 Trigonometric functions]] is useful for the final section. Everything before that section uses only real algebra and exponentials. Identities are equations valid for every input in the stated domain; they are not equations that determine a single unknown.

## Identities at one argument

The starting identity is $\cosh^2x-\sinh^2x=1$. Dividing it by $\cosh^2x$, which is positive, gives

$$
1-\tanh^2x=\operatorname{sech}^2x.
$$

Dividing instead by $\sinh^2x$ requires $x\ne0$ and gives

$$
\coth^2x-1=\operatorname{csch}^2x.
$$

Here $\cosh^2x$ means $(\cosh x)^2$, not $\cosh(x^2)$. Each denominator restriction remains part of the identity even if an algebraic rearrangement later hides it.

## Convert between functions

Since $\cosh x\geq1$ for real $x$,

$$
\cosh x=\sqrt{1+\sinh^2x},\qquad
\tanh x=\frac{\sinh x}{\sqrt{1+\sinh^2x}}.
$$

If $t=\tanh x$, then $|t|<1$ and

$$
\cosh x=\frac1{\sqrt{1-t^2}},\qquad
\sinh x=\frac{t}{\sqrt{1-t^2}}.
$$

In the reverse direction, $\sinh x$ cannot be recovered from $c=\cosh x$ without sign information: it is $\pm\sqrt{c^2-1}$. Use the positive sign for $x>0$, the negative sign for $x<0$, and zero for $x=0$. This is a branch issue rather than a failure of the square identity.

## Negative arguments

Substitute $-x$ into the exponential definitions and exchange $e^x$ with $e^{-x}$. It follows that

$$
\cosh(-x)=\cosh x,\quad
\sinh(-x)=-\sinh x,\quad
\tanh(-x)=-\tanh x,\quad
\coth(-x)=-\coth x.
$$

The last formula excludes zero on both sides. These rules can reduce calculations at negative inputs to calculations at positive inputs.

## Addition and subtraction

Write $e^{u+v}=e^ue^v$ and $e^{-(u+v)}=e^{-u}e^{-v}$, then add or subtract. Expansion gives

$$
\sinh(u\pm v)=\sinh u\cosh v\pm\cosh u\sinh v,
$$

$$
\cosh(u\pm v)=\cosh u\cosh v\pm\sinh u\sinh v.
$$

For example, expand the plus formula for cosine using its definitions. The terms $e^{u-v}$ and $e^{-u+v}$ cancel, leaving $(e^{u+v}+e^{-u-v})/2$, which is exactly $\cosh(u+v)$. Dividing the sine formula by the cosine formula yields

$$
\tanh(u\pm v)=\frac{\tanh u\pm\tanh v}{1\pm\tanh u\tanh v}.
$$

For finite real inputs the denominator here is positive: the product of the two tangent values has absolute value less than one. Do not copy the ordinary circular cosine addition formula: its plus case has a minus sign, whereas hyperbolic cosine's plus case has a plus sign.

## Double arguments

Set $v=u$ in the addition formulas:

$$
\sinh2u=2\sinh u\cosh u,
\quad \cosh2u=\cosh^2u+\sinh^2u
=2\cosh^2u-1=1+2\sinh^2u,
$$

$$
\tanh2u=\frac{2\tanh u}{1+\tanh^2u}.
$$

Choose the version that uses known data. If only $\sinh u$ is known, $\cosh2u=1+2\sinh^2u$ avoids an unnecessary square root and sign decision.

## The hyperbolic De Moivre formula

Since $\cosh u+\sinh u=e^u$, for an integer $n$,

$$
(\cosh u\pm\sinh u)^n=\cosh(nu)\pm\sinh(nu).
$$

For real $u$ these bases are positive, so the equality also holds for any real exponent when powers use the positive real definition. Expanding integer powers gives multiple-angle formulas. For instance, add the expansions of $(\cosh u+\sinh u)^3$ and $(\cosh u-\sinh u)^3$, then divide by two:

$$
\cosh3u=\cosh^3u+3\cosh u\sinh^2u=4\cosh^3u-3\cosh u.
$$

The term “hyperbolic De Moivre formula” also has an algebraic version: replace the circular symbol $i$, with $i^2=-1$, by a formal symbol $j$ satisfying $j^2=1$. Then $(\cosh u+j\sinh u)^n=\cosh(nu)+j\sinh(nu)$. The two real component identities are the same addition laws. This formal $j$ is not the imaginary unit.

## Half arguments

The double-angle identities give

$$
\cosh\frac u2=\sqrt{\frac{\cosh u+1}{2}},\qquad
\sinh^2\frac u2=\frac{\cosh u-1}{2}.
$$

For the sine itself, choose the sign of $u$. A sign-safe alternative is

$$
\tanh\frac u2=\frac{\sinh u}{\cosh u+1},\qquad
\sinh\frac u2=\frac{\sinh u}{\sqrt{2(\cosh u+1)}}.
$$

These denominators never vanish for real $u$.

## Sums and differences

Put $p=(u+v)/2$ and $q=(u-v)/2$ in the addition formulas, so $u=p+q$ and $v=p-q$. Adding and subtracting gives

$$
\sinh u+\sinh v=2\sinh p\cosh q,\quad
\sinh u-\sinh v=2\cosh p\sinh q,
$$

$$
\cosh u+\cosh v=2\cosh p\cosh q,\quad
\cosh u-\cosh v=2\sinh p\sinh q.
$$

This converts a sum into a product. It can expose zero factors or prevent repeated exponential expansions.

## Complex arguments

Using the complex exponential definitions of sine and cosine gives

$$
\cos(iu)=\cosh u,\quad \sin(iu)=i\sinh u,
\quad\cosh(iu)=\cos u,\quad\sinh(iu)=i\sin u.
$$

Here $i^2=-1$. For example, $\cos(iu)=(e^{-u}+e^u)/2$. This explains the sign difference between circular and hyperbolic identities. Quotient versions, such as $\tanh(iu)=i\tan u$, require nonzero denominators. See [[06.04 Polar representation]] for complex-number notation. The standard identities are collected in [NIST DLMF §4.35](https://dlmf.nist.gov/4.35).

## Worked example

Suppose $\tanh u=3/5$. Then $\cosh u=1/\sqrt{1-9/25}=5/4$ and $\sinh u=3/4$. Therefore $\cosh2u=1+2(9/16)=17/8$, $\sinh2u=2(3/4)(5/4)=15/8$, and $\tanh2u=15/17$. Check: $17^2-15^2=64$, so the squared difference is one after division by $8^2$.

## Practice

1. If $\sinh u=-3/4$, find $\cosh u$ and $\tanh(u/2)$.
2. Solve $\cosh(3x)-\cosh x=0$ for real $x$ using a product identity.

## Worked answers

1. Cosine is positive, so $\cosh u=\sqrt{1+9/16}=5/4$. Thus $\tanh(u/2)=(-3/4)/(5/4+1)=-1/3$. Taking a positive square root for the half-angle sine would have given the wrong sign.
2. The difference formula gives $2\sinh(2x)\sinh x=0$. Hyperbolic sine vanishes only at zero, so either factor gives $x=0$. Substitution gives $1-1=0$.
