---
aliases:
  - homotopic
---
## Homotopic

Two curves are **homotopic** if one can be continuously deformed into the other without cutting or cluing.

> [!Note]
> Two curves $\gamma_0,\gamma_1:[0,1]\to X$ in a space $X$ are called **homotopic** when a continuous map $H:[0,1]\times[0,1]\to X$ exists with $H(\cdot,0)=\gamma_0$ and $H(\cdot,1)=\gamma_1$. For curves, the endpoints stay fixed during the deformation. For loops, the deformation can also be free.

## Simple-Connectedness

A space is **simply-connected** if all loops living in the space can shrink down to a point whenever they want. No object/hole can be contained in the loops that prevent the loops from shrinking.

When the space forms a cylinder, a curve might wrap around the cylinder, preventing the loop from shrinking. The cylinder is topologically equivalent to a CD-shape, where the hole of the CD represents the inner volume of the cylinder. Thus, a cylinder shaped space is *not simply-connected*. 

## Homotopic classes

A **homotopic class** is a set of loops that are homotopic to each other. The classes of loops in a space $X$ form the fundamental group $\pi_1(X)$. For spaces with $\pi_1(X)=\mathbb Z$ (circle, annulus, cylinder), the class is defined by the **winding number**, which determines how often a loop is wrapped around a hole that prevents the loop from shrinking. Other spaces have other fundamental groups. For example, $\pi_1(SO(3))=\mathbb Z_2$ has only two classes.

| Winding Number | Example                                                    |
| -------------- | ---------------------------------------------------------- |
| 0              | No object contained in the loop                            |
| 1              | The loop contains an object and is wrapped once around it  |
| 2              | The loop contains an object and is wrapped twice around it |
- All loops with the same winding number are *homotopic*
- Loops with different winding numbers are *not homotopic*
