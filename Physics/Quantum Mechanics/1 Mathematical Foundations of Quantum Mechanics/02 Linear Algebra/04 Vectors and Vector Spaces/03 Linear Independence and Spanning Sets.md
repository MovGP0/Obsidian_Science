---
title: "Linear Independence and Spanning Sets"
---

> [!TLDR]
> The span of a set contains all its linear combinations. The vectors are linearly independent when only zero coefficients give the zero vector.

> [!definition] Definition 4.3 — Linear combination and spanning set
> A **linear combination** of $v_1,\ldots,v_k\in V$ is a vector
>
> $$
> w=\alpha_1v_1+\cdots+\alpha_kv_k,\qquad\alpha_i\in\mathbb{C}.
> $$
>
> The source calls the set of all linear combinations the **spanning set**, or **linear span**, of $\{v_1,\ldots,v_k\}$:
>
> $$
> \operatorname{span}(v_1,\ldots,v_k)
> =\left\{\sum_{i=1}^{k}\alpha_iv_i:\alpha_i\in\mathbb{C}\right\}.
> $$

> [!note]
> The set of all linear combinations is the **span**. A **spanning set for $V$** is a family of vectors whose span is $V$. These are distinct terms; the source uses them as if they were the same.

> [!definition] Definition 4.4 — Linear independence
> The vectors $v_1,\ldots,v_k$ are **linearly independent** if
>
> $$
> \alpha_1v_1+\cdots+\alpha_kv_k=0
> \quad\Longrightarrow\quad\alpha_1=\cdots=\alpha_k=0.
> $$
>
> They are **linearly dependent** if at least one can be written as a linear combination of the others.

## Example — Test linear independence

Let $v_1=(1,0,1)^T$, $v_2=(0,1,1)^T$, and $v_3=(1,1,0)^T$ in $\mathbb{C}^3$.

Write $\alpha_1v_1+\alpha_2v_2+\alpha_3v_3=0$:

$$
\begin{pmatrix}
\alpha_1+\alpha_3\\
\alpha_2+\alpha_3\\
\alpha_1+\alpha_2
\end{pmatrix}
=\begin{pmatrix}0\\0\\0\end{pmatrix}.
$$

The system gives $\alpha_1=-\alpha_3$, $\alpha_2=-\alpha_3$, and $\alpha_1+\alpha_2=0$. Thus, $-2\alpha_3=0$, so $\alpha_3=0$. Therefore $\alpha_1=\alpha_2=\alpha_3=0$: the vectors are **linearly independent**.
