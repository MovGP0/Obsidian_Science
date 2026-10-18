---
title: "Tangents and the derivative"
catalogue_ids:
  - "6.1"
  - "6.1.1"
---

> [!TLDR]
> The derivative is the limiting slope between nearby graph points and gives the best local linear approximation.

## From one input to one output

Let $f$ assign a real output $f(x)$ to each real input $x$ in its domain. The graph contains points $(x,f(x))$. Read [[03.01 Function definitions]] and [[07.01 Limits]] first if the notation is new. On a straight line, the slope is the output change divided by the input change. A curved graph generally has different slopes at different points.

Fix an interior input $a$. A second input $a+h$, with $h\ne0$, gives the **secant slope**

$$
\frac{f(a+h)-f(a)}{h}.
$$

Here $h$ is an ordinary nonzero real number. We let it approach zero through positive and negative values. We do not substitute zero into the fraction. The question is whether these slopes approach one finite value.

## Define the derivative

The function is **differentiable at $a$** if the following finite limit exists:

$$
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}h.
$$

Other notations are $Df(a)$ and $\left.\mathrm df/\mathrm dx\right|_{x=a}$. When this derivative exists at many inputs, $f'$ is itself a function. The notation $f'(a)$ is a number, whereas $f'(x)$ describes that derivative function at a variable input.

The tangent line at $(a,f(a))$ is

$$
y=f(a)+f'(a)(x-a).
$$

A tangent can cross the curve. It is defined by the limiting slope, not by a rule that it touches the graph at exactly one point. A vertical tangent can occur, but an unbounded slope is not a finite derivative in this definition.

## Worked example from the definition

For $f(x)=x^2$, expand before taking the limit:

$$
\frac{(a+h)^2-a^2}h
=\frac{2ah+h^2}h=2a+h\quad(h\ne0).
$$

The limit is $2a$, so $f'(x)=2x$. At $a=1$, the tangent is $y=1+2(x-1)=2x-1$. If $h=0.5$, the secant slope is $2.5$. If $h=0.1$, it is $2.1$. Negative $h$ gives slopes below $2$, but both sides approach $2$.

![[catalogue-ch06-tangent-linearization.svg|**Fig. C.ch06.1** A secant of y = x² approaches the tangent at (1, 1); the tangent predicts the linear part of the output change.]]

The vertical separation between the curve and the tangent in Fig. C.ch06.1 is the approximation error. Its exact value at $x=1+h$ is $h^2$. The tangent and curve agree in both value and slope at the base point.

## The differential and the error

The definition can be rearranged as

$$
f(a+h)=f(a)+f'(a)h+r(h),\qquad
\frac{r(h)}{|h|}\longrightarrow0.
$$

Write $\mathrm dx=h$ and $\mathrm df=f'(a)\,\mathrm dx$. The **differential** is the linear part of the output change. The exact change is $\Delta f=f(a+h)-f(a)$, so $\Delta f=\mathrm df+r(h)$. These two changes need not be equal. The notation $r(h)=o(|h|)$ means that the error divided by the input size tends to zero.

This also proves that differentiability implies continuity: $f'(a)h$ tends to zero and $r(h)$ tends to zero, so $f(a+h)\to f(a)$. The converse fails. Continuity alone does not guarantee one common limiting slope.

## Corners, endpoints, and domains

For $f(x)=|x|$ at zero, the difference quotient is $|h|/h$. It equals $1$ for $h>0$ and $-1$ for $h<0$. The function is continuous, but its derivative at zero does not exist. This corner is also a minimum, so a minimum need not have a derivative.

At an endpoint, only a one-sided derivative may be available. It should be named as such. For $\sqrt{x}$ at zero, the right difference quotient is $1/\sqrt h$ and has no finite limit. A gap in the domain also matters: differentiation at an interior point presumes the function is defined in a neighborhood. Simplifying a formula does not automatically fill a missing domain point.

## Practice

1. Use the definition to find the derivative of $f(x)=3x^2-2x$ at $a=2$. Write the tangent.
2. Use a differential to estimate $\sqrt{4.04}$ from $a=4$, and explain why the estimate is not an identity.

## Worked answers

1. Expansion gives $f(2+h)-f(2)=10h+3h^2$. Dividing by $h$ gives $10+3h$, whose limit is $10$. Since $f(2)=8$, the tangent is $y=8+10(x-2)$.
2. Rationalization gives $(\sqrt{4+h}-2)/h=1/(\sqrt{4+h}+2)$, with limit $1/4$. Thus $\sqrt{4.04}\approx2+(1/4)(0.04)=2.01$. The omitted nonlinear remainder makes the exact answer slightly smaller; $2.01^2=4.0401$, which is above $4.04$.
