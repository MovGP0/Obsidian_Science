---
title: "Algebras and compatible quotients"
catalogue_ids:
  - "5.6"
  - "5.6.1"
  - "5.6.2"
  - "5.6.3"
  - "5.6.4"
---

> [!TLDR]
> An algebra is a set with operations; compatible equivalence classes allow those operations to pass to a quotient.

## Sets with named operations

The word **algebra** here describes a mathematical structure, not the school activity of solving equations. Start with [[01.01 Numbers and sets]] and [[01.03 Functions and relations]]. An operation of arity $n$ takes $n$ inputs from a set $A$ and returns an element of $A$. Addition of integers is binary, because it has two inputs. Negation is unary. A named constant, such as zero, is an operation of arity zero.

A **signature** lists operation symbols and their arities. An algebra of that signature supplies a nonempty underlying set and an actual operation for each symbol. For example, $(\mathbb Z,+,-,0)$ has binary addition, unary negation, and constant zero. The same signature can describe arithmetic modulo $4$. Identities such as associativity are additional properties; they do not follow merely from listing the symbols.

Universal algebra asks which constructions work for many signatures at once. It treats a group, a lattice, and a Boolean algebra with the same general language. A relation such as $<$ is not an operation in this basic framework: it gives a truth value about inputs rather than an element of the underlying set.

## Homomorphisms preserve every operation

For two algebras $A,B$ of the same signature, a **homomorphism** $h:A\to B$ satisfies, for each $n$-ary operation symbol $f$,

$$
h(f_A(a_1,\ldots,a_n))=f_B(h(a_1),\ldots,h(a_n)).
$$

The subscripts identify the two interpretations of the symbol. Constants must also be preserved. A map that preserves addition but sends the named zero to the wrong element is not a homomorphism of the displayed signature.

The remainder map $h:\mathbb Z\to\mathbb Z/4\mathbb Z$ sends an integer to its remainder class modulo $4$. Since the remainder of a sum depends only on the input remainders, $h(a+b)=h(a)+h(b)$. It also preserves negation and zero. An **isomorphism** is a bijective homomorphism. Its inverse preserves the operations as well, so it identifies two structures that differ only in the names of their elements.

## Congruence and quotient algebra

An equivalence relation $\sim$ is reflexive, symmetric, and transitive. It groups elements into disjoint classes. To use those classes as a new algebra, we need more: a **congruence relation** is an equivalence relation compatible with every operation. Compatibility means that $a_i\sim b_i$ for all inputs implies

$$
f_A(a_1,\ldots,a_n)\sim f_A(b_1,\ldots,b_n).
$$

Define the quotient operations on classes by

$$
f_{A/\sim}([a_1],\ldots,[a_n])=[f_A(a_1,\ldots,a_n)].
$$

Compatibility says this output does not depend on the chosen representatives. This is the essential well-definedness check. Without it, the same input class can give two different answers.

For integers, $a\sim b$ when $4$ divides $a-b$ is a congruence for addition and negation. If $a-b=4r$ and $c-d=4s$, then $(a+c)-(b+d)=4(r+s)$. Thus changing representatives does not change the sum class. The quotient has four elements $[0],[1],[2],[3]$, and $[3]+[2]=[5]=[1]$.

![[catalogue-ch05b-quotient.svg|**Fig. C.ch05b.1** The remainder map groups integers into four classes. Adding 3 and 2 before or after grouping gives the same class.]]

The two routes in Fig. C.ch05b.1 give the same result. That equality is exactly what the homomorphism and quotient definitions require.

An arbitrary partition need not work. Partition $\mathbb Z$ into negative integers, zero, and positive integers. Two positive representatives can have differences of different signs: $2-1=1$ but $1-2=-1$. Thus this sign partition is not compatible with subtraction. It cannot define a quotient algebra with subtraction inherited from the integers.

## Homomorphism theorems

The **kernel congruence** of a homomorphism is the relation $a\sim_h b$ when $h(a)=h(b)$. It is compatible because equal images of inputs give equal images after every operation. The **first isomorphism theorem** states

$$
A/\sim_h\ \cong h(A).
$$

The isomorphism sends $[a]$ to $h(a)$. It is well defined by the kernel definition, injective because equal images mean equal classes, and onto the image by definition. It preserves operations by the homomorphism equation. In our example, quotienting integers by equal remainders produces exactly the four-element remainder algebra.

Two related results organize repeated constructions. If congruences $\theta\subseteq\phi$ are nested, then **quotienting twice** gives $(A/\theta)/(\phi/\theta)\cong A/\phi$, where $[a]_\theta$ and $[b]_\theta$ are related by $\phi/\theta$ exactly when $a\mathrel\phi b$. For instance, start modulo $4$, then identify remainders of the same parity; the result is arithmetic modulo $2$.

The **correspondence theorem** says that congruences on $A/\theta$ correspond exactly to congruences on $A$ containing $\theta$. Take the preimage of a quotient relation for one direction; relate quotient classes using the larger relation for the other. These are inverse operations. A **subalgebra image theorem** gives another useful form: for a subalgebra $B\subseteq A$, restricting the quotient map yields $B/(\theta\cap B^2)\cong q(B)$, where $q:A\to A/\theta$. This follows directly from the first theorem applied to the restriction.

## Practice

1. For $h:\mathbb Z\to\mathbb Z/3\mathbb Z$, identify the kernel classes and calculate the image of $[7]+[8]$.
2. On $\mathbb Z$, define $a\sim b$ when $a$ and $b$ have the same parity. Is this compatible with multiplication? Show the reasoning.

> [!example]- Worked answers
> 1. There are three kernel classes, distinguished by remainders $0,1,2$. The class of $7$ is $[1]$ and that of $8$ is $[2]$, so their sum is $[3]=[0]$. Directly, $7+8=15$ also has remainder zero.
> 2. If $a-b=2r$ and $c-d=2s$, then $ac-bd=(a-b)c+b(c-d)=2(rc+bs)$. The product difference is even, so the relation is compatible. Negation and addition are compatible too, giving the usual two-element quotient ring.

For formal definitions and the general isomorphism theorems, see Burris and Sankappanavar's original [A Course in Universal Algebra](https://www.math.uwaterloo.ca/~snburris/htdocs/UALG/univ-algebra.pdf), Chapter II.
