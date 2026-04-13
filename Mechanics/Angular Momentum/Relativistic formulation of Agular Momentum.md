---
title: Relativistic formulation
---
In relativity, space and time are treated together. Because of that, momentum and angular momentum are also written in a more unified way than in ordinary classical mechanics.

## 4-momentum

Instead of using only the three-dimensional momentum $\mathbf{p}$, relativity uses the 4-momentum

$$
P^\mu = (E/c, \mathbf{p})
$$

This combines:

- the energy $E$
- the ordinary momentum $\mathbf{p}$

So energy and momentum are understood as parts of one spacetime object.

## Angular momentum tensor

In relativity, angular momentum is also written in a unified spacetime form:

$$
M^{\mu\nu} = x^\mu P^\nu - x^\nu P^\mu
$$

This looks similar to the classical idea of "position times momentum", but now it is written for spacetime.

The tensor $M^{\mu\nu}$ contains two kinds of information:

- the purely spatial part gives the usual angular momentum
- the mixed time-space part describes boosts, which are changes between moving reference frames

## Splitting it into familiar parts

The usual spatial angular momentum is

$$
L^i = \epsilon^{ijk} x^j p^k
$$

This is the relativistic version of the familiar classical expression $\mathbf{L} = \mathbf{r} \times \mathbf{p}$.

Another part is

$$
K^i = x^i E/c - t p^i
$$

This quantity is related to the motion of the center of mass and to Lorentz boosts.

For a first understanding, it is enough to remember:

- $L^i$ describes ordinary rotation
- $K^i$ describes how space and time mix when we change to a moving observer

## Main idea

> [!note]
> In relativity, linear momentum and angular momentum are more tightly connected than they appear in elementary classical mechanics.

They are not completely separate concepts. They are parts of one spacetime structure:

$$
M^{\mu\nu}
$$

### Example

Consider a particle that moves in the $x$-direction, but does not pass through the origin.

Suppose that at one moment its momentum is

$$
\mathbf{p} = (p, 0, 0)
$$

and its position is

$$
\mathbf{r} = (0, b, 0)
$$

This means that the particle is moving straight ahead, but its path is offset by a distance $b$ from the origin.

In ordinary classical mechanics, its angular momentum relative to the origin is

$$
\mathbf{L} = \mathbf{r} \times \mathbf{p}
$$

so we get

$$
\mathbf{L} = (0, b, 0) \times (p, 0, 0) = (0, 0, -bp)
$$

This is important because the particle has ordinary linear momentum, but at the same time it also has angular momentum relative to the origin.

In relativity, both ideas are brought together in

$$
M^{\mu\nu} = x^\mu P^\nu - x^\nu P^\mu
$$

So the relativistic description does not treat linear momentum and angular momentum as completely unrelated objects. They are different aspects of one larger spacetime quantity.

## Conservation law

The conservation law is written as

$$
\partial_\alpha M^{\mu\nu\alpha} = 0
$$

This compact formula means that the total spacetime angular momentum is conserved.

In more familiar language, it includes:

- conservation of ordinary angular momentum
- conservation laws related to the motion of the center of mass

## What "conversion" means here

In a relativistic description, what we call

- "linear to angular"
- "angular to linear"

is often better understood as a redistribution between different parts of the same spacetime quantity.

Instead of thinking of two completely different things being transformed into each other, relativity says that we are looking at different components of one larger object.

## Example

Suppose a force acts in a direction that is not simply along the motion.

Then:

- the 4-momentum $P^\mu$ changes
- the angular momentum tensor $M^{\mu\nu}$ changes as well

Even so, for an isolated total system the correct overall conservation law still holds.

So the relativistic point of view gives a broader interpretation: linear momentum and angular momentum are two aspects of one unified spacetime description.
