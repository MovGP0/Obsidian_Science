# Original mathematical exposition examples

These examples are authored for this skill. They demonstrate a writing technique; they are not empirical evidence that a particular outline is universally optimal.

## Example 1 — Inverse-matrix derivative: complete miniature article

### Unhelpful but correct short version

> For an invertible matrix function \(A(t)\), differentiating \(AA^{-1}=I\) gives \(A'A^{-1}+A(A^{-1})'=0\). Therefore \((A^{-1})'=-A^{-1}A'A^{-1}\).

Why it is weak as teaching material: it does not explain why the inverse identity is the right starting point, why multiplication happens on the left, or what would go wrong if matrices were treated as scalars.

### How does an inverse transformation change with time?

Suppose \(A(t)\) describes a time-varying linear transformation. The inverse \(A(t)^{-1}\) must change to keep undoing the transformation. Can we determine this change without explicitly calculating all entries of the inverse?

**Key observation.** The matrix and its inverse always cancel:

\[
A(t)A(t)^{-1}=I.
\]

If \(A\) varies differentiably and remains invertible on an interval, the inverse is differentiable too. The product is constant, so its derivative must vanish.

**Result.** For a differentiable map \(A:I\to GL_n(\mathbb R)\),

\[
\boxed{\frac{d}{dt}A(t)^{-1}=-A(t)^{-1}A'(t)A(t)^{-1}.}
\]

**Proof strategy.** Differentiate the identity instead of differentiating an explicit inverse formula. Then isolate \((A^{-1})'\). The placement of matrix factors matters because multiplication is generally noncommutative.

Differentiate with the product rule:

\[
A'A^{-1}+A(A^{-1})'=0.
\]

Multiply **on the left** by \(A^{-1}\), so that \(A^{-1}A=I\):

\[
A^{-1}A'A^{-1}+(A^{-1})'=0.
\]

Rearrange to obtain the claimed formula. \(\square\)

**Interpretation.** The minus sign encodes the compensating change needed to keep the product equal to \(I\). However, it does **not** permit rearranging the factors to \(-A^{-2}A'\) unless the relevant factors commute.

**Sanity check.** For a scalar nonzero function \(a(t)\), the formula reduces to

\[
\frac{d}{dt}\frac1{a(t)}=-\frac{a'(t)}{a(t)^2}.
\]

**Counterexample to a tempting simplification.** Let

\[
A(t)=\begin{pmatrix}t&1\\0&2\end{pmatrix},\qquad t\ne0.
\]

Then

\[
A(t)^{-1}=\begin{pmatrix}1/t&-1/(2t)\\0&1/2\end{pmatrix},
\qquad
(A^{-1})'=\begin{pmatrix}-1/t^2&1/(2t^2)\\0&0\end{pmatrix}.
\]

At \(t=1\), the incorrect shortcut \(-A^{-2}A'\) has upper-right entry \(0\), but the actual derivative has upper-right entry \(1/2\).

**Now reconstruct the idea.** Without looking back, which fixed product would you differentiate to obtain the derivative of a matrix inverse? Why must you preserve the order of the factors?

**Transfer question.** How does the argument change when \(A\) depends on several variables? (Hint: use the differential identity \(d(A^{-1})=-A^{-1}(dA)A^{-1}\).)

**Compact reference.** Differentiable invertible matrix functions satisfy \((A^{-1})'=-A^{-1}A'A^{-1}\). The proof trick is to differentiate \(AA^{-1}=I\); the order of factors is essential.

## Example 2 — Small example before an abstract proof

**Topic:** The sum of the first \(n\) odd positive integers is \(n^2\).

**Poor opening:** "By induction, \(\sum_{k=1}^n(2k-1)=n^2\). Base case is immediate; proceed inductively."

**Improved opening:** Imagine an \(n\times n\) square of unit cells. To enlarge it to an \((n+1)\times(n+1)\) square, add one new row of \(n+1\) cells and one new column of \(n\) cells (avoiding double-counting the corner). Exactly \(2n+1\) cells are added. Thus each odd number describes the next square's growth.

This geometric explanation suggests the identity, but a formal induction proves it:

- Base: \(1=1^2\).
- Induction: if \(\sum_{k=1}^n(2k-1)=n^2\), then
  \(\sum_{k=1}^{n+1}(2k-1)=n^2+(2n+1)=(n+1)^2\).

**Transfer prompt:** Can you similarly interpret \(1+2+\cdots+n\) geometrically? What changes in the argument?
