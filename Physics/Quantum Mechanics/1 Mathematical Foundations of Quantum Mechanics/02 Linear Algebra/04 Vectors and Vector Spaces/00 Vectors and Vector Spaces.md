---
title: "Vectors and Vector Spaces"
---

> [!TLDR]
> A vector is an object that can be added to other vectors and multiplied by scalars under fixed rules. This abstract definition includes quantum wavefunctions.

In everyday language, a **vector** is an arrow with a direction and orientation. This operational definition is sufficient for classical physics. But it is not sufficient for quantum mechanics or much of modern linear algebra.

The abstract definition is different. A vector is any object that can be added to other objects of the same kind and multiplied by a scalar, under the usual rules. Wavefunctions are vectors in this sense. They can be added and multiplied by complex scalars, and the result is another wavefunction.

## How to use this chapter

The main question is how to describe a quantum state without tying it to one coordinate system. Start with addition and scalar multiplication, then use subspaces to describe restricted sets of states. Independence removes redundant vectors; a basis then gives unique coordinates. An inner product adds lengths and overlaps, which a vector space alone does not supply.

For a simple check, the vectors $(1,0)^T$ and $(0,1)^T$ span $\mathbb{C}^2$, but the unit vectors alone do not form a vector space: their sum has norm $\sqrt{2}$. Quantum state calculations use the whole vector space before normalization. The normalized representatives are a subset of that space.

Most coordinate arguments below are finite-dimensional. The later Hilbert-space chapter adds completeness and convergence, which are necessary when an expansion has infinitely many terms.

## Chapter sections

- [[01 Vector Spaces over C|Vector spaces over ℂ]]
- [[02 Subspaces|Subspaces]]
- [[03 Linear Independence and Spanning Sets|Linear independence and spanning sets]]
- [[04 Basis and Dimension|Basis and dimension]]
- [[05 Inner Product|Inner product]]
- [[06 Orthogonality and Orthonormal Bases|Orthogonality and orthonormal bases]]
- [[04 Vectors and Vector Spaces/07 Common Errors|Common errors]]
- [[04 Vectors and Vector Spaces/08 Chapter Summary|Chapter summary]]
- [[04 Vectors and Vector Spaces/09 Exercises|Exercises]]
