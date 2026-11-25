Two categories $C$ and $D$ are equivalent ($C \simeq D$), when there are functors $F : C \rightarrow D$ and $G : D \rightarrow C$, such that the compositions of the functors are *naturally isomorphic* to the identity functors:

$$G∘F \cong 1_C$$
$$F∘G \cong 1_D$$

A natural transformation $\nu : F \Rightarrow G$ between two functors $F, G : C \rightarrow D$ is a family of morphisms $\nu_X : F(X) \rightarrow G(X)$, one for each object $X$ of $C$, such that for every morphism $f : X \rightarrow Y$:

$$G(f) ∘ \nu_X = \nu_Y ∘ F(f)$$

A natural transformation is a natural isomorphism, when every $\nu_X$ is invertible. Then the inverse is also a natural transformation:

$$\nu^{-1} : G \Rightarrow F$$

## See also

* [[Functor]]
* [[Isomorphism]]