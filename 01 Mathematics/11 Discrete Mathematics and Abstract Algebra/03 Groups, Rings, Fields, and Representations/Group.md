A group is a special set with additional rules.

Given the group $(G,\cdot)$, the operation $\cdot: G\times G\to G$ is a binary operation on $G$. Thus $a\cdot b\in G$ for all $a,b\in G$ (closure). The following rules must also be met:

1. Identity element:
$$\exists e \in G$$
$$e\cdot a = a\cdot e = a $$
$$\forall a \in G$$

2. Associativity rule:
$$a \cdot (b \cdot c) = (a \cdot b) \cdot c = a \cdot b \cdot c$$
$$\forall a,b,c \in G$$

3. Inverse element:
$$\forall a \in G$$
$$\exists a^{-1} \in G$$
$$a \cdot a^{-1} = a^{-1} \cdot a = e$$

### Group homomorphisms

A group homomorphism is a map between two groups that keeps the group operation.

I.e. a map $f:(G,\cdot)\to(H,\ast)$ is a homomorphism if:

$$f(a\cdot b) = f(a)\ast f(b)$$
$$\forall a,b \in G$$
