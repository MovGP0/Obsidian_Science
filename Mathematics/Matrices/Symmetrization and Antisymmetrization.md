- **Symmetrization** can be noted using *round* brackets in the indices of the matrix/tensor. 
- **Skew-symmetrization** or **Antisymmetrization** can be noted using *square* brackets in the indices of the matrix/tensor. 
## Matrix decomposition

A matrix $A_{ii}$ can be decomposed into a symmetric and an antisymmetric parts:

$$A_{ii}= A_{(ij)} + A_{[ij]}$$
## Symmetrization

**Rank 2 Tensor**
$$A_{(ij)} = \frac{1}{2} (A_{ij} + A_{ji})$$
**Rank 3 Tensor**
$$A_{(ijk)}=\frac{1}{3!}\left(
A_{ijk}
+A_{jik}
+A_{kij}
+A_{ikj}
+A_{jki}
+A_{kji}
\right)$$

**General Definition**
$$
A_{[i_1 i_2 \dots i_n]}
= \frac{1}{n!}
\sum_{\sigma\in S_n}
A_{i_{\sigma(1)},i_{\sigma(2)}\dots i_{\sigma(n)}}.
$$

## Antisymmetrization

**Rank 2 Tensor**
$$A_{[ij]} = \frac{1}{2} (A_{ij} - A_{ji})$$
> [!note]
> In the case of a matrix, the diagonal is all 0, because $A_{ii} - A_{ii} = 0$, while the opposing entries have a negative sign.

**Rank 3 Tensor**
$$A_{[ijk]} = \frac{1}{3!}\left(A_{ijk} + A_{jki} + A_{kij} - A_{jik} - A_{ikj} - A_{kji} \right)$$
**General Definition**
$$A_{[i_1 i_2 \dots i_n]} \equiv \frac{1}{n!}
\sum_{\sigma\in S_n}
{\color{brown} \operatorname{sgn}(\sigma)}
A_{i_{\sigma(1)}, i_{\sigma(2)}\dots i_{\sigma(n)}}$$
### Definition using the Levi–Civita tensor

Antisymmetrization can be expressed using the Levi–Civita tensor:
$$\omega_{ij} = \epsilon_{ijk},\omega^k.$$
## References

* [Wikipedia. skew-symmetric matrix](https://en.wikipedia.org/wiki/Skew-symmetric_matrix)
- [Wikipedia: Penrose Graphical Notation](https://de.wikipedia.org/wiki/Penrosesche_graphische_Notation)
