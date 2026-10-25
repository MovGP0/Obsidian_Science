---
title: "Riesz–Fischer and quantum probability amplitudes"
---

> [!TLDR]
> Every square-summable sequence defines a vector through a complete orthonormal basis, and a unit coefficient norm gives a normalized quantum state.

Chapter 8 — Hilbert Space · Exercise 8 · Challenge

Back to [[08 Hilbert Space/09 Exercises|Chapter 8 exercises]].

## Question

The Riesz–Fischer theorem states: if $\{\phi_n\}$ is an orthonormal basis of $L^2(\mathbb R)$ and

$$
\sum_n|c_n|^2<\infty,
$$

then there is a unique $f\in L^2(\mathbb R)$ such that $\langle\phi_n,f\rangle=c_n$.

In quantum mechanics, every sequence of amplitudes $c_n$ with $\sum_n|c_n|^2=1$ therefore specifies a normalized state vector in this basis. Discuss the physical meaning.

> [!note]
> Uniqueness in $L^2$ is uniqueness of the equivalence class, up to equality almost everywhere. State vectors that differ only by a global phase represent the same pure physical state.

## Worked solution

### Construct the vector from the coefficients

Form the partial sums $f_N=\sum_{n=1}^N c_n\phi_n$. Orthonormality turns the squared norm of a tail into a sum of squared coefficients. For $M>N$,

$$
\begin{aligned}
\lVert f_M-f_N\rVert^2
&=\left\lVert\sum_{n=N+1}^M c_n\phi_n\right\rVert^2\\
&=\sum_{m=N+1}^M\sum_{n=N+1}^M c_m^*c_n\langle\phi_m,\phi_n\rangle\\
&=\sum_{n=N+1}^M|c_n|^2.
\end{aligned}
$$

Square summability makes the last expression tend to zero as the tail moves to large indices. Thus $\{f_N\}$ is a Cauchy sequence. L² completeness supplies a limit $f$ in the same space, with $f_N\to f$ in norm.

For a fixed index $k$, the coefficient of $\phi_k$ in every partial sum with $N\geq k$ is $c_k$. The inner product is continuous because Cauchy–Schwarz gives

$$
|\langle\phi_k,f-f_N\rangle|
\leq\lVert\phi_k\rVert\,\lVert f-f_N\rVert
=\lVert f-f_N\rVert\longrightarrow0.
$$

Therefore $\langle\phi_k,f\rangle=c_k$, as required.

### Explain uniqueness and normalization

If $f$ and $g$ have the same coefficients, their difference is orthogonal to every basis vector. Completeness then requires $f-g=0$ in L². Equivalently, Parseval gives

$$
\lVert f-g\rVert^2=\sum_n|\langle\phi_n,f-g\rangle|^2=0.
$$

Zero norm means equality almost everywhere, not necessarily equality of chosen representatives at every point.

Continuity of the norm gives

$$
\lVert f\rVert^2=\lim_{N\to\infty}\lVert f_N\rVert^2
=\sum_{n=1}^{\infty}|c_n|^2.
$$

Thus a coefficient sum of one produces a normalized vector. In quantum notation,

$$
|\psi\rangle=\sum_{n=1}^{\infty}c_n|n\rangle,
\qquad
\langle\psi|\psi\rangle=\sum_{n=1}^{\infty}|c_n|^2=1.
$$

### Explain the physical meaning

For the fixed complete orthonormal basis, $c_n=\langle n|\psi\rangle$ is the amplitude of outcome $n$. Its squared magnitude $|c_n|^2$ is the Born probability. The unit sum means that the complete set of alternatives carries total probability one.

The theorem also ensures that a normalized assignment of amplitudes corresponds to an actual vector in the Hilbert space. It is not only a formal infinite list. The series converges in norm; it need not converge pointwise as a position wavefunction.

The complex amplitudes contain more information than the probabilities. Relative phases affect interference and measurements in other bases. For example, the two states

$$
|\psi_+\rangle=\frac{|1\rangle+|2\rangle}{\sqrt2},
\qquad
|\psi_-\rangle=\frac{|1\rangle-|2\rangle}{\sqrt2}
$$

give probabilities $1/2$ and $1/2$ in the original basis, but they are orthogonal and can be distinguished in the basis that contains $|\psi_+\rangle$ and $|\psi_-\rangle$. A common phase factor is different: $e^{i\alpha}|\psi\rangle$ has the same probabilities in every basis and represents the same pure physical state. The phase angle $\alpha$ is a dimensionless mathematical parameter here.

> [!note]
> Normalization does not guarantee that every unbounded observable has a finite expectation value, or that the vector is in its operator domain. Those questions require additional conditions on the coefficients and the observable. Riesz–Fischer supplies the Hilbert-space vector; it does not supply these additional moment conditions.

The coordinates $c_n$ also depend on the selected basis. The physical state does not depend on that choice. Without completeness, the coefficient list determines only the component in the closed span of the specified orthonormal set.

## Answer

Every sequence with $\sum_n|c_n|^2=1$ determines a unique unit vector for the specified complete orthonormal basis, with convergence in norm. The probabilities are $|c_n|^2$; relative phases contain interference information. L² representatives are unique almost everywhere, and a global phase does not change the physical pure state.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $c_n$ | $1$ | Probability amplitude | The complex coefficient of outcome $n$ in the chosen basis. |
| $\lvert c_n\rvert^2$ | $1$ | Probability | The probability of basis outcome $n$. |
| $\vert\psi\rangle$, $\vert\psi_+\rangle$, $\vert\psi_-\rangle$ | $1$ | State vector | The normalized quantum states in the abstract Hilbert space. |
