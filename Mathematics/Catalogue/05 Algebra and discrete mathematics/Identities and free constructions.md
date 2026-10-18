---
title: "Identities and free constructions"
catalogue_ids:
  - "5.6.5"
  - "5.6.6"
---

> [!TLDR]
> Identities specify classes of algebras, and free algebras contain only the relations forced by those identities.

## An equation that must hold everywhere

Read [[Algebras and compatible quotients]] first. A **term** is an expression built from variables and the operation symbols of a fixed signature. In the signature of monoids, which has a binary product and a constant $1$, the expression $(x\cdot y)\cdot1$ is a term. A term is a syntactic object until we assign its variables to elements of a particular algebra.

An **identity** is a pair of terms declared equal for every assignment of their variables. Associativity, $(x\cdot y)\cdot z=x\cdot(y\cdot z)$, is an identity. The equation $x+2=5$ is usually a problem to solve for selected $x$, not an identity of integer arithmetic. This distinction between universal validity and a particular solution is essential.

A **variety** is the class of all algebras of a given finitary signature satisfying a specified set of identities. Finitary means every operation has a finite number of inputs. For example, monoids satisfy associativity and $1x=x1=x$. Groups become a variety when the signature includes product, inverse, and identity, and the equations include $xx^{-1}=x^{-1}x=1$. Requiring every nonzero element of a ring to have an inverse is conditional and does not, by itself, give an equational definition of fields as a variety of rings.

## Why identities survive constructions

Three constructions preserve identities. A **subalgebra** is a subset closed under the named operations and containing the named constants; evaluating a term stays inside it. A **direct product** performs operations coordinate by coordinate, so an identity valid in every coordinate is valid in the product. A **homomorphic image** preserves term evaluations, so applying a surjective homomorphism to both sides preserves their equality.

The **Birkhoff variety theorem** gives a converse: a nonempty class of algebras of a fixed finitary signature, considered up to isomorphism, is definable by identities exactly when it is closed under homomorphic images, subalgebras, and arbitrary direct products. This is called the HSP theorem. The forward direction has just been explained. The converse needs a free-algebra construction and a longer proof; it is not proved here. The hypotheses matter: closure under finite products alone is a different condition.

For a concrete closure example, consider groups satisfying $x^2=1$. The product of two such groups again has $(g,h)^2=(g^2,h^2)=(1,1)$. A subgroup also satisfies the equation, and a quotient satisfies it because $[g]^2=[g^2]=[1]$. These checks use the equation itself, not a list of all possible groups.

## Term algebra before imposing identities

Take variables $X=\{a,b\}$ and one binary symbol $*$. The **term algebra** contains the formal expressions $a,b,a*a,a*b,(a*b)*a,a*(b*a),\ldots$. Its operation takes two expressions and joins them under a new pair of brackets. In this algebra, $(a*b)*a$ and $a*(b*a)$ are different objects: no associativity has been imposed.

Given any algebra $A$ with one binary operation and chosen values for $a,b$, evaluate each term recursively. Evaluate the variables first, then evaluate each operation after its two inputs. This produces a unique homomorphism from the term algebra to $A$ with those chosen variable values. Existence follows from evaluation; uniqueness follows because every term is built from the variables. This is the **universal mapping property** of the term algebra.

## Free monoid: a complete construction

To impose the monoid identities, identify terms that become equal using associativity and the identity laws. The result can be represented by finite words in the letters $a,b$, including the empty word $\varepsilon$. Multiplication is concatenation. Thus $(ab)a=a(ba)=aba$, and $\varepsilon ab=ab\varepsilon=ab$. The resulting monoid is the **free monoid** on $\{a,b\}$.

The adjective free does not mean that the identities can be ignored. It means there are no additional relations beyond those forced by the monoid laws. For example, $ab\ne ba$ in this free monoid. Requiring them to be equal would impose commutativity and produce a different free object in a smaller variety.

Work through the mapping property. Choose the target monoid $(\mathbb N_0,+,0)$ and assign $a\mapsto2,b\mapsto5$. The unique homomorphism sends $aba$ to $2+5+2=9$ and $\varepsilon$ to $0$. It sends a word with $r$ copies of $a$ and $s$ copies of $b$ to $2r+5s$. This map identifies some distinct words: $ab$ and $ba$ both go to $7$. A free source can have many noninjective maps into other algebras.

More generally, a free algebra $F(X)$ in a variety has generators corresponding to $X$. Every assignment of those generators to elements of any algebra in that variety extends uniquely to a homomorphism. The target restriction is part of the definition. The free commutative monoid on $a,b$, for example, can be represented by pairs $(r,s)$ of nonnegative integers, with coordinatewise addition. The word order has disappeared, but multiplicities remain.

## Common mistakes

Do not confuse a set of symbols with an algebra: operations must be specified. Do not confuse a term with its value: the same term can have different values under different assignments. An identity is not one tested example. Finally, a free algebra depends on the signature and the permitted identities; there is no single object called “the free algebra” without those choices.

## Practice

1. In the free monoid on $a,b$, are $a(bb)$ and $(ab)b$ equal? Are $ab$ and $ba$ equal?
2. Map the free commutative monoid on $a,b$ to $(\mathbb N_0,+,0)$ with generator images $3$ and $4$. Evaluate $(2,3)$ and explain uniqueness.

> [!example]- Worked answers
> 1. The first pair both represents the word $abb$, so they are equal by associativity. The words $ab$ and $ba$ differ; the monoid axioms do not permit swapping letters.
> 2. The pair $(2,3)$ means two copies of $a$ and three copies of $b$. Preservation of addition forces the value $2(3)+3(4)=18$. Every pair is a sum of generator pairs $(1,0)$ and $(0,1)$, so the two assigned images determine every value uniquely.

The formal free-algebra construction and HSP theorem are treated in Burris and Sankappanavar's [textbook](https://www.math.uwaterloo.ca/~snburris/htdocs/UALG/univ-algebra.pdf), Chapter II, and in [William DeMeo's formal universal algebra library](https://ualib.gitlab.io/Varieties.FreeAlgebras.html).
