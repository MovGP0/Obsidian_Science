---
title: "Multivariable functions and domains"
catalogue_ids:
  - "2.18"
  - "2.18.1"
  - "2.18.1.1"
  - "2.18.1.2"
  - "2.18.2"
  - "2.18.2.1"
  - "2.18.2.2"
  - "2.18.2.3"
  - "2.18.2.4"
  - "2.18.2.5"
  - "2.18.2.6"
---

> [!TLDR]
> Several input coordinates can determine one output; domain restrictions and level sets describe where the function acts and what it does.

## More than one input

A function $f:D\to\mathbb R$ assigns exactly one real output to each permitted input in $D$. In this lesson an input is a pair $(x,y)$ or a tuple $(x_1,\ldots,x_n)$. For example, $f(x,y)=x+2y$ gives $f(3,4)=11$. The two coordinates are inputs; the output is a single number. No derivatives are needed. Review [[03.01 Function definitions]] if function notation is new.

## Definition and representation

The domain $D$ is part of the definition. The same formula on a disk and on the whole plane defines functions with different allowed inputs. The **image** is the set of outputs actually reached. For $f(x,y)=x^2+y^2$ on the whole plane, the image is $[0,\infty)$ because squares are nonnegative and every nonnegative output $c$ occurs at $(\sqrt c,0)$.

## Tables formulas and rules

A finite table can define a function on a finite domain. An algorithm can specify how to calculate an output. A formula may give a direct rule. A piecewise definition uses different rules on different subsets, such as $f(x,y)=x$ when $y\ge0$ and $f(x,y)=-x$ when $y<0$. Every allowed input must select one output. Overlapping cases must agree, or a priority rule must be explicit.

When values are specified on only a grid of input pairs, the table alone does not define values between grid points. Interpolation supplies an additional rule. Do not confuse missing entries with zero outputs.

## Graphs and level sets

The graph of $f(x,y)$ consists of points $(x,y,f(x,y))$ in three-dimensional space. A **level set** fixes the output $c$ and retains the input pairs satisfying $f(x,y)=c$. For $x^2+y^2$, positive levels are circles of radius $\sqrt c$, the zero level is one point, and negative levels are empty.

A slice instead fixes one input: $y=1$ leaves the one-variable function $f(x,1)=x^2+1$. Level sets and slices answer different questions. The existing [[12.01 Functions of several variables]] gives a matching geometric example and a level-set SVG.

## Describe a domain precisely

Set notation $\{(x,y):P(x,y)\}$ means all pairs for which condition $P$ is true. Combine formula restrictions with **and**, not **or**, when every operation must be permitted. A real square root requires a nonnegative radicand; a denominator must be nonzero; a logarithm requires a positive argument.

## Domains given as sets

For

$$
g(x,y)=\frac{\sqrt{4-x^2-y^2}}{y},
$$

the domain is $D=\{(x,y):x^2+y^2\le4,\ y\ne0\}$. This is a closed disk with its horizontal diameter removed. The circular boundary is allowed except at $(2,0)$ and $(-2,0)$. At $(0,1)$ the value is $\sqrt3$; at $(0,0)$ the function is undefined. Cancelling or simplifying a formula later cannot silently restore an excluded input.

## Two-dimensional regions

A point is **interior** to a set if a sufficiently small open disk about it stays in that set. A **boundary point** has both set points and points outside the set arbitrarily close. A set is open if all its points are interior. It is closed if it contains all its boundary points. These are not opposites: a set can be neither, and some sets are both.

The open disk $x^2+y^2<4$ omits its boundary; the closed disk uses $\le$. A set is bounded if it fits in a sufficiently large disk. A path-connected region allows two points to be joined by a continuous curve that remains inside. Some authors reserve **domain** for an open connected set; here it simply means the allowed input set unless a theorem states extra conditions.

A path-connected region is **simply connected** when every closed path can be continuously shrunk to a point without leaving the region. A disk has this property. An annulus $1<x^2+y^2<4$ does not: a loop around the omitted center cannot be shrunk through the hole. Older descriptions call an annulus doubly connected and a planar region with two separate holes triply connected. This counts planar holes, not disconnected pieces. The annulus itself is still one connected piece. [[27.04 Loops and homotopies]] develops the distinction.

## Three and higher dimensions

Replace disks by balls. A ball in $\mathbb R^n$ has a condition such as $\sum_{i=1}^n(x_i-a_i)^2<r^2$, where $a_i$ are center coordinates. A rectangular box uses one interval per coordinate. A function of three inputs has a graph in four coordinates, which cannot be drawn as one ordinary surface. Its level sets lie in three-dimensional input space and can often be drawn.

The loop definition of simple connectedness still applies in higher dimensions, but the planar hole count does not transfer directly. A region can have a three-dimensional cavity without trapping loops in the same way as a planar puncture. Use the definition rather than counting empty shapes in a drawing.

## Explicit implicit and parametric forms

An explicit form $z=f(x,y)$ isolates the output. An implicit equation such as $x^2+y^2+z^2=1$ need not define one output $z$ for every pair. For $x^2+y^2<1$, there are two choices, $z=\pm\sqrt{1-x^2-y^2}$. Selecting the upper half gives one function.

A parametric surface assigns coordinates from parameters, for example $(u,v,u+v)$. Each parameter pair gives one point in the plane $z=x+y$. Parameters need not be the coordinates named in an implicit equation. Eliminating them can also lose information about which part of a surface is covered.

A further useful form is a **homogeneous function** of degree $m$: it satisfies $f(\lambda x,\lambda y)=\lambda^m f(x,y)$ for positive $\lambda$ whenever these inputs are allowed. For example, $f=x^2+xy+y^2$ has degree two, because each term acquires a factor $\lambda^2$. The ratio $(x+y)/(x-y)$ has degree zero on $x\ne y$, because the numerator and denominator acquire the same factor. The shifted function $x^2+y^2+1$ is not homogeneous of degree two: the constant does not scale. Homogeneity describes uniform scaling of all inputs, not a claim that the formula contains only powers of one input.

## Dependence of functions

Two outputs $u(x,y)$ and $v(x,y)$ are functionally dependent when a nontrivial relation $F(u,v)=0$ constrains their joint values. If $u=x+y$ and $v=(x+y)^2$, then $v-u^2=0$: the pair of outputs lies on a parabola. In contrast $u=x,v=y$ ranges freely over the plane. This dependence is not the same as one input being absent from a formula. It also need not let us solve globally for either output as a single-valued function of the other.

For several outputs the same idea uses a relation $F(u_1,\ldots,u_k)=0$. For example, $u=x+y$, $v=x^2+y^2$, and $w=xy$ satisfy $u^2-v-2w=0$, since expansion of $(x+y)^2$ gives the identity. Thus three displayed outputs need not supply three independently variable numbers.

There is also a local derivative test, for later study after [[12.02 Partial derivatives]] and [[10.06 Determinants and trace]]. A partial derivative is the slope when one input changes and the others are held fixed. The subscript $u_x$ denotes the partial derivative of $u$ with respect to $x$. For continuously differentiable outputs on an open neighborhood, a nonzero determinant $u_xv_y-u_yv_x$ at a point ensures local independent variation of $(u,v)$ there. For $u=x+y$, $v=x-y$, it is $1(-1)-1(1)=-2$. If the determinant vanishes, this sufficient test gives no conclusion by itself about a global single-valued dependence. The algebraic examples above need no derivatives.

## Practice

1. Find the domain and the zero level of $h(x,y)=\ln(y-x^2)$.
2. Does $u=x^2+y^2$, $v=\sqrt{x^2+y^2}$ give dependent outputs? State a relation and the sign restriction.

## Worked answers

1. The logarithm requires $y>x^2$. Its value is zero exactly when its argument is one, so the zero level is $y=x^2+1$, entirely within that domain.
2. Yes. The relation is $u-v^2=0$, with $v\ge0$ and $u\ge0$. The signs matter: the algebraic relation alone also permits negative $v$, which the given square root never produces.
