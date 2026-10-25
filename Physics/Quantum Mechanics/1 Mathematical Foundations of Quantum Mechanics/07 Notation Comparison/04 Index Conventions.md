---
title: "Index Conventions"
---

> [!TLDR]
> Modern matrix notation places the row index first and the column index second. Matrix–vector multiplication sums over the column index.

Some notation in linear algebra can be ambiguous. This book uses the following conventions:

| Object | Standard convention | Alternatives |
| --- | --- | --- |
| Column vector | $v_i$ is the $i$th component | No alternative is used here. |
| Matrix | $A_{ij}$ is the entry in row $i$, column $j$ | Some historical texts reverse the index order. |
| Matrix action on a vector | $v_i\mapsto\sum_jA_{ij}v_j$ | No alternative is used here. |
| Component of $Av$ | $(Av)_i=\sum_jA_{ij}v_j$ | No alternative is used here. |

The index $j$ is summed. The free index $i$ identifies the resulting vector component.
