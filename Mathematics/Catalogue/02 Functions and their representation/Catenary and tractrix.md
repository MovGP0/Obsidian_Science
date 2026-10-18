---
title: "Catenary and tractrix"
catalogue_ids:
  - "2.15"
  - "2.15.1"
  - "2.15.2"
---

> [!TLDR]
> The catenary is a hyperbolic-cosine curve; the tractrix has a constant-length tangent segment to its asymptote.

## Prerequisite route

Read [[Hyperbolic functions]] and [[Inverse hyperbolic functions]]. The distance formula and elementary coordinate geometry are sufficient for the main calculations. Derivatives are used only to verify a tangent property, and the needed rules are stated where used. The parameter $a>0$ sets the scale in each formula. The two uses of $a$ need not have the same value when separate curves are compared.

## Two curves defined in different ways

A curve can be introduced by a function formula, by a geometric construction, or by a condition on its tangents. These descriptions are useful only when their domains and branches are specified. The two curves in this lesson are not cubic or quartic algebraic curves: their standard descriptions use exponentials, logarithms, or hyperbolic functions. They are examples of **transcendental** plane curves.

## Catenary and catenoid

The standard **catenary** is

$$
y=a\cosh(x/a),\qquad x\in\mathbb R.
$$

The graph is even, has minimum $(0,a)$, and has range $[a,\infty)$. A simple parametrization is $x=at$, $y=a\cosh t$, $t\in\mathbb R$. Translating the vertex to $(h,v)$ gives $y=v+a[\cosh((x-h)/a)-1]$. This form is convenient when a problem gives the vertex directly.

The standard curve resembles a parabola close to its vertex, but the two are not identical. For small $u$, the exponential expansion gives $\cosh u=1+u^2/2+u^4/24+\cdots$. Thus near $x=0$,

$$
a\cosh(x/a)=a+\frac{x^2}{2a}+\frac{x^4}{24a^3}+\cdots.
$$

The first quadratic terms explain the resemblance. The nonzero higher terms explain the difference. For example, with $a=1$ at $x=2$, the matching quadratic gives $3$, but $\cosh2=(e^2+e^{-2})/2\approx3.7622$. The approximation loses accuracy away from the vertex. The series is an optional explanation; direct evaluation already proves the functions differ.

The catalogue phrase “catenary or catenoid” needs a distinction. A **catenoid is a surface**, obtained by rotating a catenary about an axis, not another name for the plane curve. Rotating the profile $\rho=a\cosh(z/a)$ about the $z$-axis gives the parametrization

$$
(X,Y,Z)=\left(a\cosh v\cos u,\ a\cosh v\sin u,\ av\right),
\quad 0\leq u<2\pi,\ v\in\mathbb R.
$$

At fixed $v$ this is a circle of radius $a\cosh v$ and height $av$. At fixed $u$ it follows a catenary profile. The narrowest circular section has radius $a$ at $v=0$. This supplies a concrete surface interpretation without requiring surface calculus. See the curve and revolution distinction in [MacTutor's catenary entry](https://mathshistory.st-andrews.ac.uk/Curves/Catenary/).

## Tractrix

A **tractrix** has a fixed tangent-segment length: from each point on a smooth branch, follow the tangent to its intersection with a specified straight asymptote. The segment between the point and that intersection has length $a$. Choose the horizontal axis as the asymptote. The right upper branch has parametrization

$$
x=a(t-\tanh t),\qquad
y=a\operatorname{sech}t=\frac a{\cosh t},\qquad t>0.
$$

Its endpoint limit at $t=0$ is $(0,a)$. As $t\to\infty$, $x$ increases without bound while $y\to0$, so the horizontal axis is an asymptote. Reflecting this branch across the vertical axis gives a left branch. One formula with $t\in\mathbb R$ gives both branches and their common endpoint, but the parametrization is not regular at zero: both coordinate derivatives vanish there. The common endpoint is a cusp of the full reflected trace.

To verify the tangent condition, use $(\tanh t)'=\operatorname{sech}^2t$ and $(\operatorname{sech}t)'=-\operatorname{sech}t\tanh t$. Thus for $t>0$,

$$
\frac{dx}{dt}=a\tanh^2t,\qquad
\frac{dy}{dt}=-a\operatorname{sech}t\tanh t,\qquad
m=\frac{dy}{dx}=-\frac{\operatorname{sech}t}{\tanh t}.
$$

The tangent reaches $y=0$ after a positive horizontal increment $-y/m=a\tanh t$. Its segment length is therefore

$$
\sqrt{(a\tanh t)^2+(a\operatorname{sech}t)^2}=a,
$$

because $\tanh^2t+\operatorname{sech}^2t=1$. This proves the defining property, rather than merely identifying a familiar-looking graph. It also explains why the right branch descends while moving right. An equivalent tangent construction is illustrated in the author-maintained [Virtual Math Museum tractrix lesson](https://virtualmathmuseum.org/Curves/tractrix/tractrix.html).

Eliminating $t$ gives a graph form on the right branch:

$$
x=a\ln\frac{a+\sqrt{a^2-y^2}}{y}-\sqrt{a^2-y^2},\qquad 0<y\leq a.
$$

To obtain it, $\cosh t=a/y$ gives $t=\operatorname{arcosh}(a/y)$, while $a\tanh t=\sqrt{a^2-y^2}$. Substitute the logarithmic inverse-cosine formula. The square root uses its nonnegative value because this is the $t\geq0$ branch. Extending $y$ beyond $a$ would make the square root nonreal.

![[catalogue-ch02b-tractrix.svg|**Fig. C.ch02b.7** The catenary rises from a minimum. The right tractrix descends towards its asymptote, with a constant-length tangent segment.]]

## Worked example: check a tractrix tangent

Let $a=5$ and choose $t=\ln2$. The exact values are $\cosh t=5/4$, $\tanh t=3/5$, and $\operatorname{sech}t=4/5$. The point is $P=(5\ln2-3,4)$. Its tangent slope is $m=-(4/5)/(3/5)=-4/3$. Starting from $P$, move right by $3$ and down by $4$ to reach $Q=(5\ln2,0)$. The segment length is $\sqrt{3^2+4^2}=5$, exactly the prescribed $a$. Notice that the point's height is $4$, while the fixed tangent length is $5$; they are different quantities.

## Practice

1. For the catenary $y=2\cosh(x/2)$, find both horizontal coordinates where $y=5/2$.
2. On a right tractrix with $a=13$, a point has height $y=5$. Find the positive horizontal distance from the point to the tangent's intersection with the horizontal axis, and find the tangent slope.

## Worked answers

1. The equation is $\cosh(x/2)=5/4$. Since $\cosh(\ln2)=5/4$, $x/2=\pm\ln2$. Hence $x=\pm2\ln2$. The two answers follow from the catenary's symmetry.
2. The tangent segment has length $13$, so its horizontal leg is $\sqrt{13^2-5^2}=12$. On the right branch the line descends as $x$ increases, so its slope is $-5/12$. The positive square root is required for the forward intersection.
