---
title: "Casimir Operators"
---

> [!TLDR]
> The quadratic Casimir commutes with all generators and acts as a scalar in each irreducible representation. Its value is related to the Dynkin index by a trace.

The quadratic Casimir operator is
$$
C_2=T^aT^a.
\tag{B.45}
$$
It commutes with every generator.
In an irreducible representation $r$,
$$
\left.T^aT^a\right|_r=C_2(r)\mathbf1_{d_r},
\tag{B.46}
$$
where $d_r=\dim r$.

The relation to the Dynkin index is
$$
T(r)\dim\mathfrak g=C_2(r)d_r.
\tag{B.47}
$$

> [!note]
> The source states the scalar form for a representation without requiring irreducibility. In a reducible representation, the Casimir is scalar on each irreducible block, and different blocks can have different eigenvalues.

## Why the quadratic sum is central

The expression (B.45) assumes an orthonormal invariant form, as in the compact-group convention used here. In a general basis it requires the inverse invariant form to contract the two generator labels. It is not a basis-independent sum of arbitrary squared basis elements.

In the stated basis,
$$
[T^b,T^aT^a]
=if^{bac}(T^cT^a+T^aT^c)=0.
$$
The last step contracts an antisymmetric coefficient with a symmetric product. In a finite-dimensional irreducible complex representation, Schur's lemma then makes the operator scalar. Taking the trace of (B.46) gives (B.47), since the sum of $\delta^{aa}$ is $\dim\mathfrak g$.

For $SU(2)$ in the fundamental representation, $\sum_a(\sigma^a/2)^2=3\mathbf1/4$. Its trace is $3/2$, equal to $T(F)\dim\mathfrak{su}(2)=(1/2)3$. The reducible representation $\mathbf1\oplus\mathbf2$ instead has blocks with Casimirs zero and $3/4$. This tests the need for irreducibility in the scalar statement.

Apply the same trace method to the adjoint of $SU(2)$. Its dimension and Casimir are both known: $d_A=3$ and $C_2(A)=2$. Equation (B.47) gives $T(A)=2$. Identify why replacing $d_A$ by the fundamental dimension two would break this check.
