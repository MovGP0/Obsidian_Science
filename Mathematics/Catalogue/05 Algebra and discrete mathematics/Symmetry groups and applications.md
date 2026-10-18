---
title: "Symmetry groups and applications"
catalogue_ids:
  - "5.3.5"
  - "5.3.5.1"
  - "5.3.5.2"
  - "5.3.5.3"
  - "5.3.5.4"
  - "5.3.5.5"
  - "5.3.5.6"
---

> [!TLDR]
> A symmetry preserves a chosen structure; its group organizes geometric transformations and the objects on which they act.

## Operations and symmetry elements

Start with [[Operations semigroups and groups]]. A **symmetry operation** is an invertible transformation that preserves the specified object and its relevant properties. A **symmetry element** is a geometric feature used to describe an operation: a rotation axis, reflection plane, or inversion center. An axis is not an operation; rotating through a specified angle about it is.

Always specify what must remain unchanged. A square has eight distance-preserving planar symmetries if all vertices have the same status. Marking one vertex removes most of them. Labeling every vertex differently leaves only the identity. A drawing's visual shape therefore does not determine its symmetry group without the labels and rules.

The identity preserves the object. Composing preserving transformations still preserves it, and reversing one also preserves it. Associativity comes from function composition. Thus the allowed transformations form a group. A **point group** fixes a common point. Translations do not fix a point and belong to a different kind of symmetry group.

## Worked example: the square group

Place a square at vertices $(1,1),(-1,1),(-1,-1),(1,-1)$. Let $r(x,y)=(-y,x)$ be a quarter-turn and $s(x,y)=(x,-y)$ a reflection. Each symmetry is $r^k$ or $r^ks$ with $k=0,1,2,3$. The relations are

$$
r^4=e,\qquad s^2=e,\qquad sr=r^{-1}s.
$$

To simplify $sr^2s$, move the first $s$ through the rotations: $sr^2=r^{-2}s$. Thus $sr^2s=r^{-2}=r^2$. In contrast, $sr=r^{-1}s\ne rs$. The order of operations matters. This eight-element group is commonly called $D_4$; some books call it $D_8$ to show its order. State the convention.

## Molecular symmetry as labeled geometry

The catalogue also asks about symmetry operations in molecules. Their mathematical core is a finite set of points with labels for atom type. A permitted rigid transformation must map every point to a point with the same label. The transformations describe an idealized configuration, rather than asserting that each atom is motionless.

For an abstract bent three-point configuration, put one distinguished point at $(0,0,0)$ and two equally labeled points at $(a,b,0)$ and $(-a,b,0)$, with $a,b\ne0$. A half-turn about the $y$-axis swaps the two equal points. Reflections in the $yz$- and $xy$-planes also preserve the labeled set. Along with identity these give the group conventionally named $C_{2v}$. A bent water configuration is a familiar realization. A linear configuration would have more symmetry, so the assumption $b\ne0$ matters.

For displacements, a symmetry permutes point labels and rotates or reflects coordinate triples. This gives a linear representation. Decomposing it into invariant parts separates displacement patterns that transform differently. This statement uses the algebra of representations; actual vibration frequencies need further data and are outside this geometry lesson.

## Crystallographic groups

A **lattice** in a plane consists of integer combinations $m a+n b$ of two independent vectors. Translation by a lattice vector preserves it. A **space group** of an ideal periodic pattern includes its translations and point operations, and may contain glide reflections or screw operations in three dimensions. Point groups describe the rotational/reflection part; they are not the whole space group.

A simple derivation limits planar lattice rotations. In a lattice basis, a preserving rotation is an invertible integer matrix $A$. Its trace is an integer. The real rotation through $\theta$ has trace $2\cos\theta$, unchanged by basis change. Since this integer lies between $-2$ and $2$, finite rotation orders are $1,2,3,4,6$. A fivefold rotation cannot preserve a two-dimensional translation lattice. This restriction concerns periodic lattices, not every finite figure or every nonperiodic arrangement. An isolated regular pentagon still has fivefold symmetry.

## Symmetry in quantum mathematics

Quantum theory uses vectors with complex components. A symmetry acts on these vectors by maps that preserve transition probabilities; continuous rotations are described by unitary representations or their projective versions. A **unitary** matrix satisfies $U^*U=I$, where $U^*$ is the conjugate transpose. This condition preserves squared lengths $v^*v$.

The essential algebraic use can be taught without physical quantities. Suppose a linear operator $A$ commutes with every symmetry matrix: $AU(g)=U(g)A$. If $Av=\lambda v$, then $A(U(g)v)=\lambda U(g)v$. Thus the eigenspace for $\lambda$ is invariant. If the whole representation on that eigenspace is irreducible, commuting operators are strongly restricted by Schur's lemma. In quantum mechanics this organizes state classification and degeneracy. It does not determine numerical eigenvalues on its own. The group-to-state connection is developed in [Peter Woit's university course](https://www.math.columbia.edu/~woit/QM/).

## Further uses and limits

Translations act on functions by $T_a f(x)=f(x-a)$. Applying two gives $T_aT_b=T_{a+b}$. For a complex exponential $f(x)=e^{ikx}$ with a fixed real parameter $k$, substitution gives $T_a f=e^{-ika}f$. Its one-dimensional span is therefore invariant: translation changes its scalar coefficient but not its shape. This is the group mechanism behind the use of Fourier modes for translation-invariant equations in physics. Boundary conditions can remove that symmetry; fixing the endpoints of an interval does not permit arbitrary translations.

Permutations provide another example. For a function of two variables, the exchange operator $P$ gives $(Pf)(x,y)=f(y,x)$ and satisfies $P^2=I$. Every function splits as $f=f_++f_-$ with $f_+(x,y)=[f(x,y)+f(y,x)]/2$ and $f_-(x,y)=[f(x,y)-f(y,x)]/2$. The first part is fixed by exchange, and the second changes sign. This decomposition is the mathematical starting point for symmetric and antisymmetric state functions in quantum theory; physical rules decide which class applies. Thus an application must specify the object, preserved structure, and actual group action. A symmetry of a diagram need not be a symmetry of its equations or boundary conditions.

## Practice

1. Find the symmetry group of a non-square rectangle with identical vertices. Why is a quarter-turn excluded?
2. If $Av=\lambda v$ and $AU=UA$, show directly that $Uv$ is an eigenvector with the same eigenvalue when $U$ is invertible.

### Worked answers

1. The identity, half-turn, and the two reflections in the midlines preserve it. A quarter-turn exchanges unequal side lengths and fails. The four operations form $C_2\times C_2$; each nonidentity element squares to the identity.
2. Compute $A(Uv)=U(Av)=U(\lambda v)=\lambda Uv$. Invertibility ensures $Uv\ne0$ when $v\ne0$, so this is an eigenvector, not merely the zero vector.
