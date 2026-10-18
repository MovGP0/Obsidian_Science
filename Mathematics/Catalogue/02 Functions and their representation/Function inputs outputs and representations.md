---
title: "Function inputs outputs and representations"
catalogue_ids:
  - "2.1"
  - "2.1.1"
  - "2.1.1.1"
  - "2.1.1.2"
  - "2.1.1.3"
  - "2.1.1.4"
  - "2.1.1.5"
  - "2.1.1.6"
  - "2.1.1.7"
  - "2.1.2"
  - "2.1.2.1"
  - "2.1.2.2"
---

> [!TLDR]
> A function assigns one output to every permitted input; its input set, output set, and assignment must all be specified.

## What a function specifies

Read [[Number sets and the real line]] first if interval notation is new. A **function**, also called a **mapping**, is an assignment $f:A\to B$ that gives exactly one output $f(x)\in B$ for every input $x\in A$. The set $A$ is its domain. The set $B$ is its codomain. Its range is the subset of outputs that actually occur:

$$
f(A)=\{f(x):x\in A\}.
$$

The arrow $x\mapsto x^2$ describes an assignment; the expression $f(x)$ is a value. For $f:\mathbb R\to\mathbb R$, $f(x)=x^2$, the range is $[0,\infty)$, although the codomain is all of $\mathbb R$. A function can give the same output to different inputs. It cannot give two different outputs to one input.

![[catalogue-ch02a-function-mapping.svg|**Fig. C.ch02a.1** Two inputs can share an output; the codomain can also contain a value that no input reaches.]]

Fig. C.ch02a.1 separates the three sets. A missing output does not invalidate a function. A missing assignment for a proposed domain element does invalidate it. The graph of a function consists of ordered input-output pairs; it is not just the visible curve without its specified domain.

## Real, complex, and several-variable functions

A real function has real outputs. In elementary courses, “a real function of one real variable” means $f:D\subseteq\mathbb R\to\mathbb R$. A several-variable example is $g:\mathbb R^2\to\mathbb R$, $g(x,y)=x^2+y^2$. The single input is now an ordered pair. It still has exactly one output. For instance, $g(2,-1)=5$. Varying $x$ while fixing $y$ gives a one-variable slice.

A complex function can have complex inputs and outputs. With $i^2=-1$, the rule $h(z)=z^2$ maps $2+i$ to $(2+i)^2=3+4i$. See [[Complex numbers and the plane]] for this arithmetic. The same notation for functions therefore does not require the input to be a real number.

Other useful functions include a map from strings to their lengths, a map from a pair of integers to their sum, and a vector-valued map $v(t)=(t,t^2)$. An **operator** often maps functions to functions. For example, $T[u](x)=u(x)+1$ sends a real-valued function to another real-valued function on the same domain.

A **functional** takes a function as input and returns one scalar. An example that needs no calculus is $E[u]=u(0)+2u(1)$ on real functions defined at $0$ and $1$. For $u(x)=x^2$, the output is $E[u]=0+2=2$. For $v(x)=3x+1$, it is $E[v]=1+8=9$. The whole function is the input even when the rule uses only selected values. [[17.01 Functions and functionals]] later introduces integral examples.

## How to define and represent a function

A formula, a complete table on a finite domain, a graph with a precise interpretation, an algorithm, or a verbal rule can define a function. An experimental table with five inputs generally does not define values at every real input between them. Interpolation requires an additional choice.

An analytical representation uses expressions. An explicit rule such as $y=2x+1$ gives the output directly. A piecewise rule uses different expressions on different input sets. An implicit equation such as $x^2+y^2=1$ gives a relation. It does not define a single real function $y$ on $(-1,1)$ unless we select a branch, such as $y=\sqrt{1-x^2}$. A parameter representation, $x=\cos t$, $y=\sin t$, describes a circle but does not make the entire circle the graph of one function $y=f(x)$.

## Worked example: domain before evaluation

Let

$$
q(x)=\frac{\sqrt{4-x}}{x+1}.
$$

To keep the square root real, require $4-x\ge0$, or $x\le4$. To keep the denominator nonzero, require $x\ne-1$. Thus the natural real domain is $(-\infty,-1)\cup(-1,4]$. At $x=0$, use the rule to obtain $q(0)=\sqrt4/1=2$. At $x=4$, the value is $0$. The expression at $x=-1$ is undefined. Calling it infinity would confuse a limit with an assigned output.

Now define $r(x)=q(x)$ for $x\le4$, $x\ne-1$, and $r(x)=0$ for $x>4$. This is a different function: its domain has gained additional inputs. The formula on the old domain stays the same.

## Practice

1. Find the natural real domain of $p(x)=\sqrt{x+3}/(x-2)$, and calculate $p(1)$.
2. For $F[u]=u(-1)-u(2)$, calculate $F[u]$ when $u(x)=x^2+1$. Explain whether $F$ is a functional.

## Worked answers

1. The root requires $x\ge-3$, and the denominator excludes $2$. Hence the domain is $[-3,2)\cup(2,\infty)$. Substitution gives $p(1)=\sqrt4/(-1)=-2$.
2. We have $u(-1)=2$ and $u(2)=5$, so $F[u]=2-5=-3$. It is a functional because its input is a function and its output is one real number. This does not mean it is a function of the variable $x$ after evaluation.
