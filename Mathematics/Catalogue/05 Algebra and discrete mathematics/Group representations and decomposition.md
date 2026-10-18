---
title: "Group representations and decomposition"
catalogue_ids:
  - "5.3.4"
  - "5.3.4.1"
  - "5.3.4.2"
  - "5.3.4.3"
  - "5.3.4.4"
  - "5.3.4.5"
  - "5.3.4.6"
  - "5.3.4.7"
  - "5.3.4.8"
---

> [!TLDR]
> A representation converts group elements into invertible linear maps; invariant subspaces reveal simpler parts of the action.

## Matrices that preserve a group law

Read [[Operations semigroups and groups]], then [[10.01 Vector spaces]] and [[10.03 Matrices]]. A matrix acts on a column vector by forming weighted sums of its entries. A **representation** of $G$ on a finite-dimensional vector space $V$ is a map $\rho:G\to GL(V)$ with $\rho(gh)=\rho(g)\rho(h)$. Here $GL(V)$ means invertible linear maps $V\to V$. The identity must act as the identity matrix. State the scalar field: real and complex representations can behave differently.

Different elements may have the same matrix. A representation is **faithful** if this never occurs. A basis change replaces every matrix by $T\rho(g)T^{-1}$ for one fixed invertible $T$; the resulting representation is equivalent. Changing basis does not change the group law, dimension, or invariant structure.

## Special representations

The **trivial representation** sends every element to $1$ on a one-dimensional space. A permutation representation sends basis vector $e_i$ to $e_{g(i)}$. The matrix has one $1$ per row and column. Applying two permutations gives the product of their matrices. The **regular representation** uses one basis vector $e_h$ for every element $h$ of a finite group, with $g:e_h\mapsto e_{gh}$. It is faithful and has dimension $|G|$.

For the two-element group $C_2=\{e,s\}$, a one-dimensional nontrivial representation sends $s$ to $-1$. This is a sign action: applying it twice gives $1$. More generally, the sign of a permutation is $+1$ for an even number of swaps and $-1$ for an odd number. Parity is well-defined even when a permutation has several descriptions as swaps.

## Direct sums and products

The **direct sum** $V\oplus W$ contains pairs $(v,w)$. Act separately by $\rho(g)$ and $\sigma(g)$. Its matrix is block diagonal and its dimension is $\dim V+\dim W$.

A tensor product $V\otimes W$ instead has basis $e_i\otimes f_j$, one for every pair of basis elements. The symbol is bilinear: $(v+v')\otimes w=v\otimes w+v'\otimes w$, and scalars can move between factors. Its dimension is $\dim V\,\dim W$. Define

$$
(\rho\otimes\sigma)(g)(v\otimes w)=\rho(g)v\otimes\sigma(g)w.
$$

This is often called the direct product of representations. It is not a direct sum. For a single group, the same $g$ acts in both factors. For two groups, the external product uses $(g,h)$ and acts as $\rho(g)\otimes\sigma(h)$. Keeping the domain explicit prevents confusion.

## Reducibility and a worked decomposition

A subspace is **invariant** if every group element sends it into itself. A nonzero representation is irreducible if only $0$ and the full space are invariant. Consider the swap action on $\mathbb R^2$:

$$
\rho(s)=\begin{pmatrix}0&1\\1&0\end{pmatrix}.
$$

It fixes $u=(1,1)$ and negates $v=(1,-1)$. Every $(a,b)$ equals $\tfrac{a+b}{2}u+\tfrac{a-b}{2}v$. Hence the representation splits into a trivial line and a sign line. In this basis the swap matrix is $\operatorname{diag}(1,-1)$. For $(3,1)$, the two components are $2u+v$; after swapping they are $2u-v=(1,3)$.

![[catalogue-ch05a-invariant-lines.svg|**Fig. C.05a.3** Swapping coordinates fixes the diagonal line and reverses the other diagonal; these two lines give a direct-sum decomposition.]]

Fig. C.05a.3 shows the original vector and its swapped image. Their component along the fixed diagonal stays the same. Their component along the other diagonal changes sign. A basis adapted to these invariant lines reveals a simpler action than the original coordinate basis.

For a finite group over $\mathbb C$, every finite-dimensional representation is a direct sum of irreducibles. This is Maschke's theorem. It remains valid over a field whose characteristic does not divide the group order, but it can fail when that hypothesis fails. “Reducible” alone does not guarantee an invariant complementary subspace in arbitrary settings.

## Schur's first lemma

An **intertwiner** $T:V\to W$ satisfies $T\rho(g)=\sigma(g)T$ for every $g$. Its kernel and image are invariant. Thus, between irreducible representations, a nonzero intertwiner is an isomorphism: the kernel cannot be the full domain or a proper nonzero subspace, and the image cannot be zero or proper.

For a finite-dimensional irreducible complex representation, every intertwiner from it to itself is a scalar multiple of the identity. Indeed $T$ has a complex eigenvalue $\lambda$; then $T-\lambda I$ has a nonzero kernel and is an intertwiner, so it must be zero. Over the real numbers this scalar conclusion can fail. The real plane action of all rotations commutes with a $90^\circ$ rotation, which is not a real scalar matrix. The kernel-image statement is the basic Schur lemma; its scalar form needs the extra field assumption. See [Etingof and collaborators, Chapters 2 and 4](https://math.mit.edu/~etingof/reprbook.pdf).

## Clebsch–Gordan decompositions

A **Clebsch–Gordan series** decomposes a tensor product into irreducibles. For a simple example take the complex characters $\chi_+(s)=1$ and $\chi_-(s)=-1$ of $C_2$. Multiplying their scalar actions gives $\chi_-\otimes\chi_-=\chi_+$ and $\chi_+\otimes\chi_-=\chi_-$. Consequently $(\chi_+\oplus\chi_-)\otimes\chi_-$ contains one copy of each character, with the roles exchanged.

For the continuous group $SU(2)$, its irreducible complex representations are labeled $j=0,\tfrac12,1,\ldots$, with dimension $2j+1$. The rule is $V_{j_1}\otimes V_{j_2}\cong\bigoplus_{j=|j_1-j_2|}^{j_1+j_2}V_j$, in steps of one. For instance $2\times2=3+1$ dimensions: the symmetric tensors from two two-dimensional factors give a three-dimensional part, and antisymmetric tensors give a one-dimensional part. This is a classification theorem; its full proof is beyond this introductory article.

## Irreducible representations of Sₙ

The symmetric group $S_n$ permutes $n$ objects. Over $\mathbb C$, its irreducible representations are indexed by **partitions** of $n$, such as $3=3=2+1=1+1+1$. A partition is drawn as left-aligned rows of boxes of those lengths. The associated Specht construction produces the irreducible representation. Its dimension is the number of ways to fill the boxes with $1,\ldots,n$ in increasing order across each row and down each column. This classification is stated here without its general proof; modular fields require different rules. See [Etingof and collaborators, Section 5.12](https://math.mit.edu/~etingof/reprbook.pdf).

For $S_3$ the partitions give dimensions $1,2,1$. The first action is trivial, the last is sign. The middle is concrete: permute the coordinates of $(x,y,z)$ in the plane $x+y+z=0$. The plane has dimension two and is invariant. It has no invariant complex line: the swap of the first two coordinates has possible eigenlines generated by $(1,-1,0)$ and $(1,1,-2)$, but the swap of the last two preserves neither. Thus it is irreducible. The permutation action on $\mathbb C^3$ splits into the fixed line $(a,a,a)$ plus this plane. Representation theory finds simpler parts without changing the underlying permutations.

## Practice

1. Decompose the action $s(x,y,z)=(y,x,z)$ of $C_2$ into invariant lines.
2. What is the dimension of $V_{1}\otimes V_{1/2}$ for $SU(2)$? Check the decomposition rule.

### Worked answers

1. The independent vectors $(1,1,0)$, $(1,-1,0)$, and $(0,0,1)$ are eigenvectors with eigenvalues $1,-1,1$. They span the space. The representation is therefore two trivial lines and one sign line.
2. The factors have dimensions $3$ and $2$, so the product has dimension $6$. The permitted labels are $j=1/2,3/2$, whose dimensions are $2$ and $4$. Their sum is $6$, as required.
