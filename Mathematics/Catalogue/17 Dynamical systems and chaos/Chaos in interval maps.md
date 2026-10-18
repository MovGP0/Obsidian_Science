---
title: "Chaos in interval maps"
catalogue_ids:
  - "17.2.5"
  - "17.2.6"
---

> [!TLDR]
> The tent map gives exact symbolic descriptions of chaotic orbits; irregular numerical values alone do not prove chaos or a strange attractor.

## Chaos, randomness, and strange attractors

A chaotic map is deterministic: one exact state fixes its future. A random process instead includes a probability rule for choosing outcomes. We can assign probabilities to unknown initial states of a deterministic map, but this does not add random forcing at every step.

There are several definitions of chaos. Here a continuous map on an invariant metric space is **Devaney chaotic** when it is topologically transitive, has dense periodic points, and has sensitive dependence on initial conditions. Transitive means that for any two nonempty open sets, some forward image of the first meets the second. Dense periodic points means every neighborhood contains a periodic point. Sensitive dependence means that a fixed positive separation can eventually occur between any state and some arbitrarily near state. These are properties of an invariant space and map together, not of a short finite list.

A **strange attractor** usually means an attracting invariant set with complicated, often fractal geometry. Definitions vary, so state the intended geometric and dynamical properties. A chaotic invariant set need not attract a neighborhood, and a fractal set need not carry chaotic dynamics. The interval example below makes this separation concrete.

## The tent map and symbolic histories

On $[0,1]$, define

$$
T(x)=\begin{cases}2x,&0\le x\le1/2,\\2-2x,&1/2\le x\le1.\end{cases}
$$

Each half maps onto the whole interval. Label an iterate by $L$ if it lies in the left half and $R$ if it lies in the right half, with a fixed convention at $1/2$. These labels describe an **itinerary**. The inverse branches are $b_L(y)=y/2$ and $b_R(y)=1-y/2$. Both shrink distances by one half.

To realize a finite itinerary $a_0\ldots a_{n-1}$, take the interval

$$
I_{a_0\ldots a_{n-1}}
=b_{a_0}\circ\cdots\circ b_{a_{n-1}}([0,1]).
$$

It has length $2^{-n}$. Nested itinerary intervals shrink to a unique point for an infinite branch sequence. At boundary points, branch labels need care and two descriptions may coincide. This is why the symbolic coding is not automatically a bijective conjugacy of the whole interval with a sequence space.

## Why these rules prove chaotic behavior

Every open interval contains an entire itinerary interval if we take sufficiently large $n$: the partition intervals have length $2^{-n}$ and form a uniform fine grid. The map $T^n$ sends that itinerary interval onto $[0,1]$. Therefore images of the open interval eventually meet every nonempty open target. This proves transitivity, in fact a stronger covering property.

Repeat a word of length $n$ indefinitely. The composed inverse branch $b_{a_0}\circ\cdots\circ b_{a_{n-1}}$ is a contraction mapping the interval to itself, so it has a unique fixed point. That point returns after $n$ steps under $T$, though its least period can divide $n$. Because every itinerary interval contains such a point and the intervals become arbitrarily short, periodic points are dense.

For sensitivity, any neighborhood of $x$ contains an itinerary interval whose image under some $T^n$ is the whole unit interval. At that time choose an image endpoint at least $1/2$ from $T^n(x)$, and take its preimage in the small interval. The resulting starting point is arbitrarily near $x$, yet later separates by at least $1/2$. These arguments prove all three stated properties. The branch and coding approach is developed further in [Smillie's interval-map lectures](https://warwick.ac.uk/fac/sci/maths/people/staff/john_smillie/maths_4240/ma424_notes_2013.pdf).

## Worked example: locate a prescribed two-cycle

Seek the repeated word $LRLR\ldots$. Solve the fixed-point equation for $b_L\circ b_R$:

$$
x=\frac{1-x/2}{2}=\frac12-\frac{x}{4},
\qquad x=\frac25.
$$

Its first image is $T(2/5)=4/5$, and its second is $T(4/5)=2/5$. These points lie in the specified left and right halves. Since they are distinct, their least period is two. This is an exact periodic orbit inside a chaotic map. “The map is chaotic” therefore does not mean “every orbit is nonperiodic.”

## Relation to the logistic map

For $f(x)=4x(1-x)$, set $h(u)=\sin^2(\pi u/2)$ on $[0,1]$. This is a continuous increasing bijection. The double-angle identity gives $f(h(u))=h(T(u))$ on both tent branches. Thus $f=h\circ T\circ h^{-1}$ is topologically conjugate to $T$ and has the same transitivity and periodic-orbit structure.

Uniform length $du$ is invariant for $T$. Transporting it through $x=h(u)$ gives the logistic density

$$
\rho(x)=\frac1{\pi\sqrt{x(1-x)}},\qquad 0<x<1.
$$

Indeed, differentiating the inverse $u=(2/\pi)\arcsin\sqrt{x}$ gives this expression. A uniform distribution in the tent coordinate is not uniform in the logistic coordinate. The endpoint singularities are integrable, and the total probability is one by the substitution $x=h(u)$.

## A concrete strange attractor

To see actual attraction with fractal transverse structure, take a solid torus $S=S^1\times D$, where an angle $\theta$ labels the circle and $D=\{(u,v):u^2+v^2\le1\}$ is a filled disk. Define

$$
F(\theta,u,v)=\left(2\theta\pmod{2\pi},\ \frac u{10}+\frac{\cos\theta}{2},\ \frac v{10}+\frac{\sin\theta}{2}\right).
$$

The disk part has distance at most $1/10+1/2=3/5$ from its center, so the image lies inside $S$. For each target angle there are two possible source angles separated by $\pi$. Their image disks have opposite centers separated by one and radius $1/10$, so they do not overlap. The angular doubling has not merged states: the disk coordinates retain the branch information.

The compact sets $S,F(S),F^2(S),\ldots$ are nested. Their intersection $K$ is a nonempty invariant attracting set. To understand attraction, all states in $S$ lie in $F^n(S)$ after $n$ steps; compact nested sets eventually lie in any neighborhood of their intersection. In each transverse disk, the successive stages retain $2^n$ small disks with radii $10^{-n}$. Their limit is Cantor-like. The angular coordinate expands while transverse displacements contract, so stretching coexists with attraction.

This is a **Smale–Williams solenoid**, a standard strange attractor. Its chaotic symbolic dynamics requires further analysis beyond the trapping calculation just given; [Climenhaga's lectures](https://www.math.uh.edu/~climenha/doc/fractals.pdf), in the solenoid section, give that analysis. The construction demonstrates why an attractor can draw nearby states inward overall while preserving a direction of expanding orbit uncertainty. It also separates a genuinely attracting construction from the invariant interval used earlier.

## Numerical caution

Binary floating-point arithmetic represents only finitely many states. A computed tent orbit therefore eventually repeats, and doubling can lose a stored binary digit at each step. With exact finite binary fractions, the orbit reaches zero after finitely many steps. This is an arithmetic artifact when used to approximate a generic real initial state. An irregular graph, a broad histogram, or a positive short-run exponent is useful evidence but does not replace the preceding proof.

## Practice

1. Find all fixed points of $T$ and determine which branch each belongs to.
2. Check the logistic orbit corresponding to the tent two-cycle $2/5,4/5$ by writing its two points using $h$.

## Worked answers

1. On the left, $x=2x$ gives zero. On the right, $x=2-2x$ gives $2/3$. Both lie in their required branches. There are no other branch solutions.
2. The points are $\sin^2(\pi/5)$ and $\sin^2(2\pi/5)$. The identity $f\circ h=h\circ T$ sends the first to the second and the second back to the first. Their distinctness establishes least period two without decimal approximations.
