---
title: "Operations, semigroups, and groups"
catalogue_ids:
  - "5.3"
  - "5.3.1"
  - "5.3.2"
  - "5.3.3"
  - "5.3.3.1"
  - "5.3.3.2"
  - "5.3.3.3"
---

> [!TLDR]
> A group is a set with an associative operation, an identity, and inverses; its rules describe reversible calculations and transformations.

## Operations and closure

Read [[Sets relations and cardinality]] first. A **binary operation** on $S$ is a function $S\times S\to S$. It accepts two members and returns one member of the same set. This last requirement is **closure**. Addition is an operation on integers. Division is not: $1/2$ is not an integer, and division by zero is undefined. A rule that sometimes fails to return an allowed result is not a binary operation on that whole set.

An operation $*$ is associative if $(a*b)*c=a*(b*c)$ for all inputs. It is commutative if $a*b=b*a$. These are different properties. Function composition is associative but need not be commutative. Subtraction is neither: $(8-3)-2=3$, while $8-(3-2)=7$.

An associative operation on a nonempty set makes a **semigroup**. Positive integers under addition form a semigroup without an additive identity in that set. A **monoid** is a semigroup with an identity $e$ such that $e*a=a*e=a$. Natural numbers including zero under addition form a monoid; positive integers under multiplication form another. An identity is unique: if $e$ and $f$ are identities, $e=e*f=f$.

## Groups and their basic properties

A **group** is a monoid where every $a$ has an inverse $a^{-1}$ satisfying $a*a^{-1}=a^{-1}*a=e$. Integers under addition form a group: the identity is $0$, and the inverse of $a$ is $-a$. Nonzero rational numbers under multiplication form a group. All rational numbers under multiplication do not, because zero has no multiplicative inverse.

An inverse is unique. If $b$ and $c$ are both inverses of $a$, associativity gives $b=b*(a*c)=(b*a)*c=c$. Groups also permit cancellation: from $a*b=a*c$, apply $a^{-1}$ on the left to obtain $b=c$. In a noncommutative group, the side matters. The solution of $a*x=b$ is $x=a^{-1}*b$, whereas $x*a=b$ gives $x=b*a^{-1}$.

An **abelian group** has a commutative operation. Group size is its **order**. The order of an element is the least positive $k$ with $a^k=e$, if such a $k$ exists. These two uses of order are related but are not identical.

## Worked example: four rotations

Let $r$ rotate a square counterclockwise by $90^\circ$. The set $C_4=\{e,r,r^2,r^3\}$ is a group under composition. Adding angles means adding exponents modulo $4$: $r^3r^2=r^5=r$. Composition is associative, $e=r^0$ is the identity, and $r^{-1}=r^3$. The element $r$ has order $4$, while $r^2$ has order $2$. All rotations commute, so this group is abelian.

The full square symmetry group also includes reflections. If $s$ reflects across the horizontal axis, $sr$ and $rs$ differ. Apply them to the upper-right corner: rotating then reflecting reaches the lower-left corner, whereas reflecting then rotating returns to the upper-right corner. Thus the larger group is noncommutative.

## Subgroups and direct products

A **subgroup** $H$ uses the same operation as its parent group $G$ and is a group itself. A nonempty subset is a subgroup if it is closed under products and inverses. In $C_4$, $H=\{e,r^2\}$ qualifies. The subset $\{e,r\}$ fails because $r^2$ is missing. Closure under the group operation does not imply closure under taking roots, solving arbitrary polynomial equations, or limits.

The direct product $G\times H$ uses componentwise operations: $(g,h)(g',h')=(gg',hh')$. Its identity is $(e_G,e_H)$ and its inverse operation is componentwise. Two independent binary flips give $C_2\times C_2$, with four elements. It is not $C_4$: every nonidentity element in the product has order $2$, while $C_4$ has an element of order $4$.

## Mappings between groups

A **homomorphism** $f:G\to H$ preserves the operation: $f(ab)=f(a)f(b)$. It therefore preserves identity and inverses. The **kernel** consists of elements sent to the identity; the image consists of values reached. The map is injective exactly when its kernel contains only the identity. A bijective homomorphism is an **isomorphism**, which identifies two descriptions of the same group structure.

For example, $f:\mathbb Z\to C_4$, $f(n)=r^n$, is a homomorphism because exponent addition matches integer addition. Its kernel is $4\mathbb Z$, the multiples of $4$. It is onto but not one-to-one. The remainders modulo $4$ record exactly which integers have the same image. Continue with [[25.02 Subgroups and homomorphisms]] for quotient groups.

## Practice

1. Do even integers form a group under addition? Under multiplication?
2. Determine the kernel and image of $f:C_4\to C_4$, $f(r^k)=r^{2k}$.

### Worked answers

1. Under addition, sums stay even, $0$ is present, and $-2k$ is even, so this is a group. Under multiplication, $1$ is missing. More directly, zero has no multiplicative inverse, so the group axioms fail.
2. Images are $e,r^2,e,r^2$ as $k=0,1,2,3$. The kernel is $\{e,r^2\}$ and the image is $\{e,r^2\}$. The map preserves multiplication because doubling a sum of exponents equals the sum of their doubles, modulo $4$.
