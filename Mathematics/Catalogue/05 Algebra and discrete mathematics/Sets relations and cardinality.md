---
title: "Sets, relations, and cardinality"
catalogue_ids:
  - "5.2"
  - "5.2.1"
  - "5.2.2"
  - "5.2.3"
  - "5.2.4"
  - "5.2.5"
---

> [!TLDR]
> Sets collect objects, relations compare them, functions assign outputs, and cardinality compares the sizes of collections.

## Sets and special number sets

A **set** is a collection in which membership is definite. Write $a\in A$ when $a$ belongs to $A$, and $a\notin A$ otherwise. Order and repetition do not matter: $\{1,2,2\}=\{2,1\}$. The empty set $\varnothing$ has no members. A singleton such as $\{0\}$ has one member and is not empty.

The familiar number sets are the natural numbers $\mathbb N=\{0,1,2,\ldots\}$ in this article, integers $\mathbb Z$, rational numbers $\mathbb Q$, real numbers $\mathbb R$, and complex numbers $\mathbb C$. Some books start $\mathbb N$ at $1$; state the convention. Set-builder notation describes a condition: $\{n\in\mathbb Z:n^2<5\}=\{-2,-1,0,1,2\}$.

The inclusion $A\subseteq B$ means every member of $A$ belongs to $B$. Equality requires both inclusions. A set can be a member of another set, but membership and inclusion are different: $2\in\{1,2\}$, whereas $\{2\}\subseteq\{1,2\}$. The power set $\mathcal P(A)$ contains all subsets of $A$. If $A=\{a,b\}$, its power set is $\{\varnothing,\{a\},\{b\},\{a,b\}\}$.

## Set operations

The union $A\cup B$ contains objects in either set; the intersection $A\cap B$ contains objects in both. The difference $A\setminus B$ contains objects in $A$ but not $B$. A complement $A^c=U\setminus A$ needs a specified universe $U$. For $A=\{1,2,3\}$ and $B=\{3,4\}$, the union is $\{1,2,3,4\}$, intersection $\{3\}$, and difference $A\setminus B=\{1,2\}$.

![[catalogue-ch05a-set-regions.svg|**Fig. C.05a.1** Union includes all three set regions; intersection selects the shared region only.]]

Fig. C.05a.1 uses separate panels so that union and intersection cannot be confused. For finite sets, counting a union gives

$$
|A\cup B|=|A|+|B|-|A\cap B|.
$$

The subtraction removes the second count of each shared member. Here $3+2-1=4$. De Morgan's law $(A\cup B)^c=A^c\cap B^c$ follows by checking membership: an object outside the union is outside both sets.

## Relations and mappings

The Cartesian product $A\times B$ consists of ordered pairs $(a,b)$ with $a\in A$ and $b\in B$. A **relation** from $A$ to $B$ is a subset of this product. For instance, “$a$ divides $b$” defines a relation on positive integers.

A **function** $f:A\to B$ is a relation assigning exactly one output to each input in $A$. The domain is $A$, codomain $B$, and image $f(A)=\{f(a):a\in A\}$. The image need not fill the codomain. A function is injective if different inputs have different outputs; surjective if every codomain member is reached; bijective if both hold. Only a bijection has an inverse function on the whole codomain.

For $f:\mathbb R\to\mathbb R$, $f(x)=x^2$, the inputs $1$ and $-1$ collide and negative outputs are missing. Restrict the domain and codomain to $[0,\infty)$ and the same formula becomes a bijection, with inverse $\sqrt x$. Thus a formula alone does not specify a function completely.

## Equivalence and order

An **equivalence relation** is reflexive ($a\sim a$), symmetric ($a\sim b$ implies $b\sim a$), and transitive ($a\sim b$ and $b\sim c$ imply $a\sim c$). Equality of remainders modulo $3$ is an example. Its equivalence classes partition the integers into three disjoint sets represented by $0,1,2$. The class $[1]$ contains $\ldots,-5,-2,1,4,7,\ldots$.

A **partial order** is reflexive, antisymmetric, and transitive. Antisymmetric means that $a\preceq b$ and $b\preceq a$ force $a=b$; it does not mean that comparisons cannot be reversed. Subset inclusion is a partial order. Two subsets such as $\{1\}$ and $\{2\}$ are incomparable. In a total order every two elements are comparable. The usual order on integers is total; divisibility on positive integers is only partial.

## Cardinality and a worked infinite comparison

Finite cardinality $|A|$ counts members. For infinite sets, equal cardinality means the existence of a bijection. The even natural numbers and all natural numbers have equal cardinality: $n\mapsto2n$ is bijective onto the even numbers, with inverse $2n\mapsto n$. A proper subset can therefore have the same infinite cardinality as its parent set.

A set is **countably infinite** if its members can be listed as $a_0,a_1,\ldots$ without omissions or repetitions. The integers can be listed $0,1,-1,2,-2,\ldots$. Rational numbers can also be listed by scanning numerator-denominator pairs in diagonal order and skipping duplicates.

Not every infinite set is countable. If subsets $S_0,S_1,\ldots$ listed all subsets of $\mathbb N$, form $D=\{n:n\notin S_n\}$. For each $k$, $D$ differs from $S_k$ at membership of $k$. The proposed list misses $D$, a contradiction. This proves that $\mathcal P(\mathbb N)$ is uncountable without treating infinity as an ordinary integer.

## Practice

1. For $A=\{1,2,3\}$ and $B=\{2,4\}$, find $A\cap B$, $B\setminus A$, and $|\mathcal P(B)|$.
2. Is congruence modulo $5$ an equivalence relation? Explain why the class of $2$ is not just the number $2$.

### Worked answers

1. The shared member is $2$, so $A\cap B=\{2\}$. Only $4$ lies in $B$ and not $A$, so $B\setminus A=\{4\}$. Each of two members can be included or excluded, giving $2^2=4$ subsets.
2. Every integer differs from itself by a multiple of $5$. Reversing a difference changes only its sign. Adding two differences divisible by $5$ gives another such difference. These prove reflexivity, symmetry, and transitivity. The class $[2]=\{2+5k:k\in\mathbb Z\}$ is a set of integers, including $-3,2,7$, rather than a single integer.
