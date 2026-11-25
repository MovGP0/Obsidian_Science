A Category ($C$) is a structure consisting of:
- Objects
- Morphisms
- Compositions
- Identities

## Objects

Objects are abstract. They do not have to be sets, and they do not have to contain elements. The collection of all objects does not have to be a set (for example, all sets in $\mathbf{Set}$ do not form a set).

Examples:
- $\mathbf{Set}$: the objects are sets, and the morphisms are functions.
- $\mathbf{Grp}$: the objects are groups, and the morphisms are group homomorphisms.
- $\mathbf{Vect}$: the objects are vector spaces, and the morphisms are linear maps.
- A partially ordered set $(P, \le)$: the objects are the elements of $P$, and there is exactly one morphism $a \rightarrow b$ when $a \le b$.

## Morphisms

A morphism $f : A \rightarrow B$ is an arrow from an object $A$ to an object $B$. A morphism does not have to be a function between sets.
A morphism might be one-way.

Morphisms can be visualized using a **commutative diagram**:
- [Wolfram MathWorld: Commutative Diagram](https://mathworld.wolfram.com/CommutativeDiagram.html)
- [Wikipedia: Commutative Diagram](https://en.wikipedia.org/wiki/Commutative_diagram)
- [Math3ma: Commutative Diagrams Explained](https://www.math3ma.com/blog/commutative-diagrams-explained)

## Compositions

Morphisms can be combined.

If there is a morphism $f : A \rightarrow B$ and a morphism $g : B \rightarrow C$ then there must be a morphism $$h = g ∘ f$$ $$h : A \rightarrow C$$

## Identities

A identity is a morphism from one object to itself.
The Identity-Morphism is required.

## Rules

Identity morphisms must follow **Identity-Law**, such that composing a morphism $f : A \rightarrow B$ with an identity morphism returns the same morphism:

$$f ∘ \mathrm{id}_A = f = \mathrm{id}_B ∘ f$$

Morphisms must follow **Associativity-Law**:

$$(h∘g)∘f = h∘(g∘f) = h∘g∘f$$

If the identity law or the associativity law is not met, than the structure is not a category.