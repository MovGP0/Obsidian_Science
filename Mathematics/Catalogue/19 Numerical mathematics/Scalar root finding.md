---
title: "Scalar root finding"
catalogue_ids:
  - "19.1"
  - "19.1.1"
  - "19.1.1.1"
  - "19.1.1.2"
  - "19.1.1.3"
---

> [!TLDR]
> A root algorithm improves an estimate of a zero; a bracket or a contraction gives a reason to trust the result.

## Prerequisites and the problem

Read [[03.01 Function definitions]], [[07.03 The derivative]], and [[07.08 Linear approximation]] if function notation or slopes are new. A root of $f(x)=0$ is an input $r$ for which the output is zero. We seek a number close to $r$, together with a useful error check. The **residual** is $f(x)$; the **error** is $x-r$. These are different quantities. A small residual can coexist with a large error when the graph is nearly flat.

For example, $f(x)=10^{-8}(x-100)$ has residual $10^{-6}$ at $x=0$, although the root error is $100$. If $|f'(x)|\ge m>0$ between $x$ and a known root $r$, the mean value theorem gives $|x-r|\le |f(x)|/m$. Without such information, a residual alone does not certify digits.

## Brackets and false position

A **bracket** is an interval $[a,b]$ where $f$ is continuous and $f(a)$ and $f(b)$ have opposite signs. The intermediate value theorem supplies at least one root. A discontinuity invalidates this argument: $1/x$ changes sign across zero but has no root.

Bisection takes $c=(a+b)/2$, evaluates $f(c)$, and retains a half with a sign change. After $n$ halvings the width is $(b-a)/2^n$. The midpoint of the current interval has error at most half its width from some root in that interval. This is a bound even when the root is unknown.

**Regula falsi**, or bracketed false position, replaces the midpoint by the zero of the secant line through the endpoints:

$$
c=\frac{a f(b)-b f(a)}{f(b)-f(a)}.
$$

Keep the endpoint with opposite sign to $f(c)$. This preserves the bracket in exact arithmetic. It often makes faster early progress than bisection, but one endpoint can remain fixed for many steps. Do not infer accuracy from the bracket shrinking rapidly: it may not. A safeguarded implementation takes a bisection step when false-position steps make too little progress. Here “regula falsi” means the bracketed algorithm; the unbracketed secant method instead retains the last two iterates and can leave the interval.

For $f(x)=x^2-2$ on $[1,2]$, false position gives $c=4/3$. Since $f(c)=-2/9$, the new bracket is $[4/3,2]$. Its next point is $7/5=1.4$, still below the root. The sign test, not a drawing, determines which endpoint to replace.

## Ordinary fixed-point iteration

Rewrite the equation as $x=g(x)$ and calculate $x_{k+1}=g(x_k)$. This is the **ordinary iteration method**. Rewriting is not enough to ensure convergence. A useful sufficient condition is that $g$ maps a closed interval $I$ into itself and $|g'(x)|\le q<1$ throughout $I$. Then there is exactly one fixed point in $I$, every start in $I$ converges to it, and

$$
|x_k-r|\le\frac{q}{1-q}|x_k-x_{k-1}|.
$$

The derivative bound means that each step contracts distances. For $x^2=2$, choose $g(x)=(x+2/x)/2$ on $[1,2]$. Its output lies in $[\sqrt2,1.5]$ and $|g'|=|1/2-1/x^2|\le1/2$. By contrast, $g(x)=2/x$ cycles between $1$ and $2$ from the start $1$. Algebraically equivalent equations can define very different algorithms.

## Newton's method and a worked iteration

The tangent approximation $f(x_k+s)\approx f(x_k)+f'(x_k)s$ predicts a zero at $s=-f(x_k)/f'(x_k)$. Thus

$$
x_{k+1}=x_k-\frac{f(x_k)}{f'(x_k)}.
$$

For $x^2-2=0$, start at $x_0=1.5$. Then $x_1=1.4166666667$, $x_2=1.4142156863$, and $x_3=1.4142135624$. Taylor's theorem explains the speed: near a simple root, if $f$ has a continuous second derivative and $f'(r)\ne0$, sufficiently close starts have an error bounded by a constant times the square of the previous error. This is **local quadratic convergence**. It is not a guarantee from arbitrary starts. A zero derivative stops the formula; multiple roots usually reduce its order; a large step can leave the function's domain.

![[catalogue-ch19-root-steps.svg|**Fig. C.ch19.1** A sign bracket controls location, while the tangent supplies a fast Newton estimate.]]

Fig. C.ch19.1 separates a certificate from a prediction. A practical solver can maintain a bracket, accept a Newton step inside it, and otherwise bisect. Stop on an error bound where available, and also impose a maximum step count and checks for invalid arithmetic.

## Practice

1. How many bisections reduce an initial width $2$ to at most $0.001$?
2. Take two Newton steps for $x^2-3=0$ from $x_0=2$.

> [!example]- Worked answers
> 1. Require $2/2^n\le0.001$, or $2^n\ge2000$. Since $2^{10}=1024$ and $2^{11}=2048$, use $11$ bisections. The final midpoint error is at most $0.0005$.
> 2. The update is $(x+3/x)/2$. It gives $x_1=7/4$ and $x_2=97/56\approx1.732142857$. The true positive root lies between $1.732$ and $1.733$, as squaring the endpoints confirms.

## Further reading

[NIST DLMF, nonlinear equations](https://dlmf.nist.gov/3.8) discusses root methods and local convergence. Its use of “regula falsi” includes the secant iteration, so check the endpoint policy when comparing descriptions.
