---
title: "Overview"
catalogue_ids:
  - "4"
---

> [!TLDR]
> Linear algebra studies vectors, linear maps, and the equations that relate their coordinates.

## A route from school algebra

You already use linear algebra when you solve two simultaneous equations. For example, $x+y=5$ and $x-y=1$ together give $x=3$, $y=2$. This chapter extends that idea to many unknowns. It also explains what the coefficients mean as a map of a plane or a higher-dimensional space.

Begin with [[Matrices and linear maps]]. It introduces coordinate columns, rectangular arrays, and the order of matrix multiplication. You need only addition, multiplication, and the rule for substituting one expression into another. [[05.03 Components and bases]] gives a second geometric introduction. A **basis** is a list of independent directions from which every vector can be made in exactly one way. Coordinates are the coefficients in that list.

The next route is [[Determinants and oriented area]], then [[Linear systems and pivot exchange]]. A determinant tells you whether a square map loses a direction. Elimination tells you how to solve equations, including cases with no solution or many solutions. Neither the number of equations nor the appearance of a square array alone guarantees a unique answer.

Read [[Vector and matrix norms]] before [[Least squares and numerical stability]]. A norm measures size. Least squares uses that size to choose a best approximate answer when exact equations disagree. The numerical discussion explains why a mathematically valid formula can still be a poor computer algorithm.

After these lessons, [[Eigenvalues and principal axes]] studies directions which a map does not turn. [[Singular value decomposition]] gives a related description that works for rectangular matrices as well. It explains the geometry of stretching, the number of independent directions, and a controlled way to discard small details.

## Coordinates are a description

Suppose a vector has ordinary coordinates $(3,2)$. In the basis $f_1=(1,0)$, $f_2=(1,1)$ it has coordinates $(1,2)$, because $1f_1+2f_2=(3,2)$. The vector did not move. Its description changed. This distinction is central to [[Tensor coordinates and invariants]] and [[Curvilinear tensor calculations]].

Those lessons start with coordinate columns and then introduce covectors, which are linear rules that return numbers. [[18.01 Dual spaces]] develops this idea further. A tensor combines such vector and covector inputs in a rule that remains meaningful after a basis change. An arbitrary table of numbers is not automatically a tensor with a specified type. The transformation rule is part of the description.

[[Pseudotensors and reflections]] adds orientation: a mirror reflection reverses the handedness of a basis. A cross product depends on that handedness. This is a useful test of the difference between a vector and an axial vector.

## Rotations as an optional second route

For the rotation route, read [[Quaternion algebra]], then [[Rotation conventions and quaternions]]. A quaternion has four real components, but a unit quaternion has one constraint. Two opposite unit quaternions describe the same three-dimensional rotation. Four stored numbers therefore do not mean four independent spatial directions.

[[Quaternion interpolation and applications]] uses these tools to build smooth paths between orientations and to describe coordinate frames. [[Dual quaternions and rigid transformations]] then combines a rotation with a translation. It introduces its extra algebra explicitly; ordinary complex numbers and dual numbers have different multiplication rules.

## A worked orientation example

Consider $T(x,y)=(2x+y,y)$. The images of the coordinate directions are $T(1,0)=(2,0)$ and $T(0,1)=(1,1)$. Put them in the columns of a matrix:

$$
A=\begin{pmatrix}2&1\\0&1\end{pmatrix}.
$$

The input $(1,3)$ gives output $(5,3)$. The determinant is $2$, so this map doubles signed area and loses no direction. The vector $(1,0)$ keeps its direction and doubles, so it is an eigenvector with eigenvalue $2$. These three descriptions concern the same map: coordinates, area, and a preserved direction. Each has a different purpose.

## How to use the lessons

Work through each numerical example before reading its final line. Then do the practice questions. Check a linear-system answer by substitution, an inverse by multiplication, and an eigenpair by $Av=\lambda v$. These checks often expose an incorrect order or sign immediately. Do not learn a formula without its conditions: an inverse requires an invertible square matrix, and a nonzero eigenvector is required in an eigenvalue equation.

The existing [[Linear algebra - Overview]] and [[Tensor algebra - Overview]] offer further routes. They are extensions of this chapter, not assumed school knowledge.

## Practice

1. In the basis $f_1=(1,0)$, $f_2=(1,1)$, find the coordinates of $(5,3)$.
2. For the map $T$ above, check whether $(1,1)$ is an eigenvector.

## Worked answers

1. Write $(5,3)=a(1,0)+b(1,1)=(a+b,b)$. Thus $b=3$ and $a=2$. The new coordinate column is $(2,3)^T$.
2. $T(1,1)=(3,1)$. If this were $\lambda(1,1)$, both coordinates would equal $\lambda$. Since $3\ne1$, the vector is not an eigenvector.

<!-- catalogue-complete-lesson-index:start -->
## Complete lesson index

Read the prerequisite route above before the advanced lessons. The source topic links are in [[Planned Topics#4. Linear algebra|the detailed catalogue]].

- [[Matrices and linear maps|Matrices and linear maps]] — 4.1, 4.1.1, 4.1.2, 4.1.3, 4.1.4, 4.1.5.
- [[Vector and matrix norms|Vector and matrix norms]] — 4.1.6, 4.1.6.1, 4.1.6.2.
- [[Determinants and oriented area|Determinants and oriented area]] — 4.2, 4.2.1, 4.2.2, 4.2.3.
- [[Tensor coordinates and invariants|Tensor coordinates and invariants]] — 4.3, 4.3.1, 4.3.2, 4.3.3, 4.3.3.1, 4.3.3.2.
- [[Curvilinear tensor calculations|Curvilinear tensor calculations]] — 4.3.4, 4.3.4.1, 4.3.4.2, 4.3.4.3, 4.3.4.4.
- [[Pseudotensors and reflections|Pseudotensors and reflections]] — 4.3.5, 4.3.5.1, 4.3.5.2.
- [[Quaternion algebra|Quaternion algebra]] — 4.4, 4.4.1, 4.4.1.1, 4.4.1.2, 4.4.1.3.
- [[Rotation conventions and quaternions|Rotation conventions and quaternions]] — 4.4.2, 4.4.2.1, 4.4.2.2, 4.4.2.3, 4.4.2.4, 4.4.2.5, 4.4.2.6, 4.4.2.7.
- [[Quaternion interpolation and applications|Quaternion interpolation and applications]] — 4.4.3, 4.4.3.1, 4.4.3.2, 4.4.3.3, 4.4.3.4, 4.4.3.5.
- [[Dual quaternions and rigid transformations|Dual quaternions and rigid transformations]] — 4.4.3.6.
- [[Linear systems and pivot exchange|Linear systems and pivot exchange]] — 4.5, 4.5.1, 4.5.1.1, 4.5.1.2, 4.5.1.3, 4.5.1.4, 4.5.2, 4.5.2.1, 4.5.2.2, 4.5.2.3, 4.5.2.4.
- [[Least squares and numerical stability|Least squares and numerical stability]] — 4.5.3, 4.5.3.1, 4.5.3.2.
- [[Eigenvalues and principal axes|Eigenvalues and principal axes]] — 4.6, 4.6.1, 4.6.2, 4.6.2.1, 4.6.2.2, 4.6.2.3, 4.6.2.4.
- [[Singular value decomposition|Singular value decomposition]] — 4.6.3.
<!-- catalogue-complete-lesson-index:end -->
