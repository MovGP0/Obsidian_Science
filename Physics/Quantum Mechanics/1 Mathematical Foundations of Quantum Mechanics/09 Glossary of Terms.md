---
title: "Glossary of Terms"
---

> [!TLDR]
> This glossary gives the book's main definitions and formulas in English alphabetical order. Each entry links to the relevant chapters for further detail.

> [!note] Scope of the definitions
> Brief qualifications state the conditions for normalized states, degenerate outcomes, time-independent Hamiltonians, and operator domains where the compact source formulas require them.

## Adjoint

The operator $\hat A^{\dagger}$ defined by

$$
\langle\hat A^{\dagger}u,v\rangle
=\langle u,\hat A v\rangle
$$

for the applicable vectors $u$ and $v$. For matrices in an orthonormal basis,

$$
(A^{\dagger})_{ij}=A_{ji}^*.
$$

Thus the adjoint matrix is the conjugate transpose. A synonym is **Hermitian-conjugate operator**. For unbounded operators, the domains are part of the definition.

See [[00 Matrices and Linear Operators|Chapter 5]].

## Bloch vector

The real vector

$$
\mathbf r=(\langle\sigma_x\rangle,\langle\sigma_y\rangle,
\langle\sigma_z\rangle)
$$

that describes a two-level density matrix through

$$
\rho=\frac12(\hat I+\mathbf r\cdot\boldsymbol\sigma).
$$

Pure states have $|\mathbf r|=1$. Mixed states have $|\mathbf r|<1$.

See [[00 Special Matrices|Chapter 6]].

## Born rule

The rule that connects probability amplitudes to measurement probabilities:

$$
P(a_n)=|\langle a_n|\psi\rangle|^2.
$$

This form assumes a normalized state and a nondegenerate discrete measurement outcome. For a degenerate outcome, use the projector onto its full eigenspace.

See [[00 Dirac Notation|Chapter 9]] and [[00 Probability and Distributions|Chapter 14]].

## Bra

The linear functional $\langle\psi|$ associated with a ket $|\psi\rangle$ by the inner product. It acts on $|\phi\rangle$ to give $\langle\psi|\phi\rangle$ and belongs to the continuous dual space $\mathcal H^*$.

See [[00 Dirac Notation|Chapter 9]].

## Canonical commutation relation

The basic position–momentum relation

$$
[\hat x,\hat p]=i\mechanical{\hbar}\hat I.
$$

It implies the Heisenberg position–momentum uncertainty relation on states with the required moments and domains.

See [[00 Commutators and Operator Algebra|Chapter 10]].

## Cauchy–Schwarz inequality

$$
|\langle u,v\rangle|\leq\lVert u\rVert\,\lVert v\rVert.
$$

This inequality is a basic step in the proof of the uncertainty principle.

See [[00 Vectors and Vector Spaces|Chapter 4]].

## Collapse

The ideal projective-measurement update after an outcome $a_n$:

$$
|\psi\rangle\longmapsto
\frac{\hat P_{a_n}|\psi\rangle}
{\lVert\hat P_{a_n}|\psi\rangle\rVert}.
$$

The outcome must have nonzero probability. For a nondegenerate outcome, the resulting state is the normalized eigenstate $|a_n\rangle$, up to a global phase. A degenerate outcome gives a normalized vector in its eigenspace. This conditional, discontinuous update is generally nonunitary, unlike Schrödinger time evolution.

See [[00 Dirac Notation|Chapter 9]].

## Commutator

$$
[\hat A,\hat B]=\hat A\hat B-\hat B\hat A.
$$

For finite-dimensional Hermitian operators, $[\hat A,\hat B]=0$ is equivalent to the existence of a common orthonormal eigenbasis. For general self-adjoint operators, the corresponding compatibility condition concerns their spectral projections.

See [[00 Commutators and Operator Algebra|Chapter 10]].

## Completeness

Two related uses of the word must be distinguished:

1. **Completeness of a space:** every Cauchy sequence converges to an element of that space.
2. **Completeness of a basis:** every vector can be expanded in that basis. In an infinite-dimensional Hilbert space, the expansion converges in norm.

See [[00 Hilbert Space|Chapter 8]].

## Completeness relation

$$
\sum_n|n\rangle\langle n|=\hat I.
$$

The sum of the projectors onto a complete orthonormal basis is the identity operator. In infinite dimension, the partial sums converge strongly to the identity. Inserting this relation is a basic calculation tool in quantum mechanics.

See [[00 Hilbert Space|Chapter 8]] and [[00 Dirac Notation|Chapter 9]].

## Complex conjugate

For $z=a+ib$, the conjugate is

$$
z^*=a-ib.
$$

It satisfies $zz^*=|z|^2$.

See [[00 Complex Numbers|Chapter 1]].

## Complex number

A number of the form

$$
z=a+ib,
\qquad a,b\in\mathbb R,
\qquad i^2=-1.
$$

The complex numbers form the field $\mathbb C$, over which quantum-mechanical Hilbert spaces are defined.

See [[00 Complex Numbers|Chapter 1]].

## Density matrix

An operator $\rho$ with

$$
\rho^{\dagger}=\rho,
\qquad\operatorname{Tr}(\rho)=1,
\qquad\rho\geq0.
$$

For a pure state,

$$
\rho=|\psi\rangle\langle\psi|,
\qquad\operatorname{Tr}(\rho^2)=1.
$$

A statistical mixture has the form

$$
\rho=\sum_i p_i|\psi_i\rangle\langle\psi_i|,
\qquad p_i\geq0,
\qquad\sum_i p_i=1.
$$

For a genuinely mixed state, $\operatorname{Tr}(\rho^2)<1$. The observable expectation is

$$
\langle\hat A\rangle=\operatorname{Tr}(\rho\hat A).
$$

See [[00 Special Matrices|Chapter 6]].

## Dirac delta

The distribution $\delta(x)$ defined by its action on suitable test functions:

$$
\int_{-\infty}^{+\infty}\delta(x)f(x)\,dx=f(0).
$$

It is a distribution rather than an ordinary function. In particular, it is not an element of $L^2(\mathbb R)$.

See [[00 Fourier Transform|Chapter 13]].

## Ehrenfest's theorem

$$
\frac{d\langle\hat A\rangle}{d\signal{t}}
=\frac{i}{\mechanical{\hbar}}\langle[\hat H,\hat A]\rangle
+\left\langle\frac{\partial\hat A}{\partial\signal{t}}\right\rangle.
$$

The second term vanishes for an observable with no explicit time dependence. For potentials of at most quadratic degree,

$$
\energy{V}(\mechanical{x})
=\energy{a}+\mechanical{b}\mechanical{x}
+\mechanical{c}\mechanical{x}^2,
$$

the position and momentum expectations satisfy closed classical Newton equations. Here, $\energy{a}$, $\mechanical{b}$, and $\mechanical{c}$ are polynomial coefficients. In general, the mean force differs from the force evaluated at the mean position.

See [[00 Commutators and Operator Algebra|Chapter 10]] and [[00 Expectation Value and Uncertainty|Chapter 15]].

## Eigenfunction

A nonzero function $\psi$ that solves

$$
\hat L\psi=\lambda\psi.
$$

This is the term for an eigenvector when the underlying vector space is a function space.

See [[00 Ordinary Differential Equations|Chapter 3]].

## Eigenvalue

A value $\lambda\in\mathbb C$ for which

$$
\hat A v=\lambda v
$$

has a nonzero solution $v$. Eigenvalues of Hermitian operators are real.

See [[00 Eigenvalues and Eigenvectors|Chapter 7]].

## Eigenvector

A vector $v\ne0$ that satisfies $\hat A v=\lambda v$. It need not be normalized. Every nonzero scalar multiple of an eigenvector is also an eigenvector with the same eigenvalue.

See [[00 Eigenvalues and Eigenvectors|Chapter 7]].

## Entanglement

A pure state $|\psi\rangle\in\mathcal H_A\otimes\mathcal H_B$ is entangled if it cannot be written as a product

$$
|\psi\rangle=|\phi_A\rangle\otimes|\chi_B\rangle.
$$

For a pure bipartite state, the **Schmidt rank** is the number of nonzero singular values in its Schmidt decomposition. Rank $1$ means the state is separable; rank greater than $1$ means it is entangled. This rank criterion applies to pure composite states; mixed-state entanglement requires a different criterion.

See [[00 Special Matrices|Chapter 6]].

## Expectation value

For a normalized state,

$$
\langle\hat A\rangle
=\langle\psi|\hat A|\psi\rangle
=\sum_n a_nP(a_n).
$$

It is the mean of the eigenvalues weighted by their measurement probabilities. The sum is the discrete-spectrum form.

See [[00 Expectation Value and Uncertainty|Chapter 15]].

## Fourier transform

In the symmetric convention,

$$
\hat f(\signal{k})
=\frac1{\sqrt{2\pi}}
\int_{-\infty}^{+\infty}
f(\mechanical{x})e^{-i\signal{k}\mechanical{x}}\,d\mechanical{x}.
$$

The transform connects coordinate and wave-number descriptions. In quantum mechanics, $\mechanical{p}=\mechanical{\hbar}\signal{k}$ connects wave number to momentum. Differentiation becomes multiplication in the transformed representation.

See [[00 Fourier Transform|Chapter 13]].

## Hamiltonian

The operator $\hat H$ that represents the total energy of a system. For a particle of mass $\mechanical{m}$ in a potential energy $\energy{V}$,

$$
\hat H=\frac{\hat p^2}{2\mechanical{m}}+\energy{V}(\hat x).
$$

Its energy eigenvalues $\energy{E_n}$ are possible energy measurement results. For a time-independent Hamiltonian, its eigenstates give stationary states, and it generates time evolution through

$$
\hat U(\signal{t})
=e^{-i\hat H\signal{t}/\mechanical{\hbar}}.
$$

See [[00 Ordinary Differential Equations|Chapter 3]], [[00 Dirac Notation|Chapter 9]], and [[00 Unitary Operators|Chapter 11]].

## Heisenberg uncertainty relation

$$
\mechanical{\Delta x}\,\mechanical{\Delta p}
\geq\frac{\mechanical{\hbar}}2.
$$

This is the position–momentum case of the Robertson inequality, obtained from $[\hat x,\hat p]=i\mechanical{\hbar}\hat I$.

See [[00 Commutators and Operator Algebra|Chapter 10]].

## Hermitian

An operator $\hat A$ is Hermitian when $\hat A^{\dagger}=\hat A$, with the appropriate domains in infinite dimension. Its eigenvalues are real. In finite dimension, it is unitarily diagonalizable.

Two finite-dimensional Hermitian operators commute exactly when they have a common orthonormal eigenbasis. Quantum observables are represented by self-adjoint operators; the distinction between formal Hermiticity and self-adjointness matters for unbounded operators.

See [[00 Matrices and Linear Operators|Chapter 5]] and [[00 Eigenvalues and Eigenvectors|Chapter 7]].

## Hilbert space

A vector space over $\mathbb C$ with an inner product that is complete in the induced norm. It is the space used for quantum states.

See [[00 Hilbert Space|Chapter 8]].

## Inner product

A positive-definite sesquilinear map

$$
\langle\cdot,\cdot\rangle:
\mathcal H\times\mathcal H\longrightarrow\mathbb C.
$$

In the physics convention, it is linear in the second argument and antilinear in the first, with

$$
\langle u,v\rangle=\langle v,u\rangle^*,
\qquad\langle v,v\rangle\geq0,
$$

and equality in the second relation only when $v=0$. In the position representation,

$$
\langle\psi|\phi\rangle
=\int_{-\infty}^{+\infty}
\signal{\psi}^*(\mechanical{x})\signal{\phi}(\mechanical{x})
\,d\mechanical{x}.
$$

In $\mathbb C^n$, $\langle u,v\rangle=u^{\dagger}v$.

See [[00 Vectors and Vector Spaces|Chapter 4]].

## Ket

A vector $|\psi\rangle\in\mathcal H$. A normalized ket represents a pure quantum state of the system, with physically equivalent kets differing by a global phase.

See [[00 Dirac Notation|Chapter 9]].

## L²(ℝ)

The space of functions with

$$
\int_{-\infty}^{+\infty}|f(x)|^2\,dx<\infty,
$$

where functions equal almost everywhere are identified. It is a Hilbert space and contains the normalizable one-dimensional position wavefunctions.

See [[00 Hilbert Space|Chapter 8]].

## Linear independence

The vectors $v_1,\ldots,v_n$ are linearly independent when

$$
\sum_i\alpha_i v_i=0
\quad\Longrightarrow\quad
\alpha_i=0\text{ for every }i.
$$

See [[00 Vectors and Vector Spaces|Chapter 4]].

## Linear operator

A map $\hat A:V\to V$ that satisfies

$$
\hat A(\alpha u+\beta v)
=\alpha\hat A u+\beta\hat A v.
$$

See [[00 Matrices and Linear Operators|Chapter 5]].

## Momentum

The observable associated with spatial translations and, when the system is translation-invariant, with the corresponding conserved quantity. In the position representation,

$$
\hat p=-i\mechanical{\hbar}\frac{d}{d\mechanical{x}}.
$$

In the momentum representation, the operator acts by multiplication by $\mechanical{p}$. Momentum generates spatial translations:

$$
\hat T(\mechanical{a})
=e^{-i\mechanical{a}\hat p/\mechanical{\hbar}}.
$$

See [[00 Functions, Derivatives and Integrals|Chapter 2]] and [[00 Unitary Operators|Chapter 11]].

## Norm

$$
\lVert v\rVert=\sqrt{\langle v,v\rangle}.
$$

The norm generalizes length. A physical pure state is represented by a wavefunction of norm $1$; this is the normalization condition.

See [[00 Vectors and Vector Spaces|Chapter 4]].

## Observable

A physically measurable quantity represented by a self-adjoint operator. Its spectral values are the possible measurement results. Examples are $\hat x$, $\hat p$, $\hat H$, and $\hat S_z$.

See [[00 Matrices and Linear Operators|Chapter 5]] and [[00 Dirac Notation|Chapter 9]].

## Orthogonality

Vectors $u$ and $v$ are orthogonal when

$$
\langle u,v\rangle=0.
$$

Eigenvectors of a Hermitian operator with different eigenvalues are orthogonal.

See [[00 Vectors and Vector Spaces|Chapter 4]] and [[00 Eigenvalues and Eigenvectors|Chapter 7]].

## Orthonormal basis

A complete set $\{e_i\}$ with

$$
\langle e_i,e_j\rangle=\delta_{ij}.
$$

Every vector can be expanded in this basis. An infinite expansion is understood to converge in norm.

See [[00 Vectors and Vector Spaces|Chapter 4]] and [[00 Hilbert Space|Chapter 8]].

## Parseval's identity

For an orthonormal basis $\{e_n\}$ and coefficients $c_n=\langle e_n,f\rangle$,

$$
\lVert f\rVert^2=\sum_n|c_n|^2.
$$

For a normalized quantum state, $\sum_n|c_n|^2=1$: the basis-state measurement probabilities sum to $1$.

See [[00 Hilbert Space|Chapter 8]].

## Position

The observable $\hat x$, which acts in the position representation by multiplication:

$$
\hat x\signal{\psi}(\mechanical{x})
=\mechanical{x}\signal{\psi}(\mechanical{x}).
$$

Its generalized eigenstates $|\mechanical{x_0}\rangle$ are distributional objects, rather than vectors in $L^2(\mathbb R)$.

See [[00 Matrices and Linear Operators|Chapter 5]] and [[00 Fourier Transform|Chapter 13]].

## Probability amplitude

The complex coefficient

$$
c_n=\langle a_n|\psi\rangle.
$$

For a nondegenerate discrete outcome, $|c_n|^2$ is the probability of measuring $a_n$. The amplitude is not the probability itself.

See [[00 Dirac Notation|Chapter 9]].

## Projector

For a normalized nondegenerate eigenstate,

$$
\hat P_n=|n\rangle\langle n|.
$$

For a degenerate eigenvalue $a$, the projector onto its eigenspace is

$$
\hat P_a=\sum_{k:\,a_k=a}|a_k\rangle\langle a_k|,
$$

where the eigenvectors in the sum are orthonormal. An orthogonal projector is Hermitian and idempotent:

$$
\hat P^{\dagger}=\hat P,
\qquad\hat P^2=\hat P.
$$

See [[00 Dirac Notation|Chapter 9]].

## Pure and mixed states

A pure state can be represented by one normalized ket $|\psi\rangle$. Equivalently,

$$
\rho=|\psi\rangle\langle\psi|,
\qquad\operatorname{Tr}(\rho^2)=1.
$$

A mixed state is a statistical mixture of pure states:

$$
\rho=\sum_i p_i|\psi_i\rangle\langle\psi_i|,
\qquad\operatorname{Tr}(\rho^2)<1.
$$

The component states are normalized, $p_i\geq0$, and $\sum_i p_i=1$.

See [[00 Special Matrices|Chapter 6]].

## Schrödinger equation

The state-evolution equation

$$
i\mechanical{\hbar}\frac{\partial}{\partial\signal{t}}|\psi\rangle
=\hat H|\psi\rangle.
$$

Its stationary energy-eigenvalue form is

$$
\hat H\signal{\psi}=\energy{E}\signal{\psi}.
$$

See [[00 Ordinary Differential Equations|Chapter 3]] and [[00 Dirac Notation|Chapter 9]].

## Separation of variables

A technique for differential equations in which the solution is sought in a factored form, such as

$$
f(x,y)=X(x)Y(y).
$$

For a separable first-order ordinary differential equation, the same name refers to moving the dependent and independent variables to opposite sides before integration.

See [[00 Ordinary Differential Equations|Chapter 3]].

## Spectral decomposition

For a Hermitian operator with a complete discrete eigenbasis,

$$
\hat A=\sum_n a_n|a_n\rangle\langle a_n|.
$$

This writes the operator as a sum of projectors weighted by their eigenvalues. Degenerate eigenvalues can be grouped with their full eigenspace projectors.

See [[00 Eigenvalues and Eigenvectors|Chapter 7]].

## Spectral theorem

Every finite-dimensional Hermitian operator has an orthonormal eigenbasis and is unitarily diagonalizable. This theorem is the mathematical basis of the measurement postulate.

In infinite dimension, a self-adjoint operator has a general spectral representation by a projection-valued measure. Its spectrum can contain continuous parts, so a basis of ordinary eigenvectors is not always available.

See [[00 Eigenvalues and Eigenvectors|Chapter 7]].

## Superposition

A state expressed as a linear combination of basis states:

$$
|\psi\rangle=\sum_n c_n|n\rangle.
$$

A nontrivial superposition has more than one nonzero component in the chosen basis. For an energy eigenbasis, a measurement of $\hat H$ gives $\energy{E_n}$ with probability $|c_n|^2$, with probabilities summed over a degenerate eigenspace when needed.

The superposition principle states that a nonzero linear combination of allowed state vectors, after normalization, is also an allowed pure state. Whether a state is a superposition depends on the basis.

See [[00 Hilbert Space|Chapter 8]] and [[00 Dirac Notation|Chapter 9]].

## Symmetry

A transformation that leaves the Hamiltonian invariant. For a unitary symmetry $\hat U$,

$$
\hat U\hat H\hat U^{\dagger}=\hat H,
\qquad[\hat H,\hat U]=0.
$$

For a continuous one-parameter group written as $\hat U(\signal{\theta})=e^{i\signal{\theta}\hat G}$, the Hermitian generator $\hat G$ gives a conserved observable when it has no explicit time dependence. For a discrete unitary symmetry, the symmetry operator itself is conserved. Quantum theory also admits antiunitary symmetries, such as time reversal.

See [[00 Unitary Operators|Chapter 11]].

## Tensor product

The construction $\mathcal H_A\otimes\mathcal H_B$ combines two Hilbert spaces into the state space of a composite system. In coordinates, the matrix tensor product is the Kronecker product:

$$
(A\otimes B)_{(ik)(jl)}=A_{ij}B_{kl}.
$$

Tensor products are the basis for describing composite states and entanglement.

See [[00 Special Matrices|Chapter 6]].

## Trace

For a square matrix,

$$
\operatorname{Tr}(A)=\sum_i A_{ii}.
$$

The trace is invariant under unitary changes of basis. It is used to calculate probabilities and expectation values for mixed states. In infinite dimension, an operator must satisfy the corresponding trace-class conditions for its trace to be defined in this way.

See [[00 Matrices and Linear Operators|Chapter 5]].

## Uncertainty

The standard deviation of an observable's measurement-result distribution:

$$
\Delta A=\sqrt{\langle\hat A^2\rangle-\langle\hat A\rangle^2}.
$$

For a normalized pure state with finite second moment, it is zero exactly when $|\psi\rangle$ is an eigenstate of $\hat A$.

See [[00 Expectation Value and Uncertainty|Chapter 15]].

## Unitary matrix or operator

A matrix or operator satisfying

$$
U^{\dagger}U=UU^{\dagger}=I.
$$

It preserves norms and inner products. Unitary operators implement changes of basis, unitary symmetries, and the time evolution of closed quantum systems.

See [[00 Matrices and Linear Operators|Chapter 5]] and [[00 Unitary Operators|Chapter 11]].

## Wavefunction

The function

$$
\signal{\psi}(\mechanical{x})=\langle\mechanical{x}|\psi\rangle
$$

that describes a quantum state in the position representation. By the Born rule,

$$
\signal{\rho}(\mechanical{x})
=|\signal{\psi}(\mechanical{x})|^2
$$

is the probability density for finding the particle at $\mechanical{x}$. A physical one-dimensional position wavefunction belongs to $L^2(\mathbb R)$ and is normalized:

$$
\int_{-\infty}^{+\infty}|\signal{\psi}(\mechanical{x})|^2
\,d\mechanical{x}=1.
$$

See [[00 Complex Numbers|Chapter 1]] and [[00 Hilbert Space|Chapter 8]].

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale in evolution, momentum, and uncertainty. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The particle mass in the Hamiltonian. |
| $\mechanical{x}$, $\mechanical{x_0}$, $\mechanical{a}$, $\mechanical{\Delta x}$ | $\unit{m}$ | Position and displacement | The position coordinate, specified position, translation, and position spread. |
| $\mechanical{p}$, $\mechanical{\Delta p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | The momentum coordinate and its standard deviation. |
| $\energy{V}$, $\energy{E}$, $\energy{E_n}$ | $\unit{J}$ | Energy | The potential energy and measured energy eigenvalues. |
| $\energy{a}$ | $\unit{J}$ | Potential offset | The constant term of the quadratic potential. |
| $\mechanical{b}$ | $\unit{N}$ | Linear potential coefficient | The coefficient of position in the potential energy. |
| $\mechanical{c}$ | $\unit{N\,m^{-1}}$ | Quadratic potential coefficient | The coefficient of squared position in the potential energy. |
| $\signal{t}$ | $\unit{s}$ | Time | The parameter of Schrödinger evolution. |
| $\signal{k}$ | $\unit{m^{-1}}$ | Wave number | The spatial frequency related to momentum by $\mechanical{p}=\mechanical{\hbar}\signal{k}$. |
| $\signal{\psi}$, $\signal{\phi}$ | $\unit{m^{-1/2}}$ | Wavefunction | One-dimensional position probability amplitudes. |
| $\signal{\rho}(\mechanical{x})$ | $\unit{m^{-1}}$ | Probability density | The probability per unit position. |
| $\mathbf r$, $\langle\sigma_i\rangle$ | $\unit{1}$ | Bloch vector | The dimensionless vector of Pauli expectations and its components for a two-level state. |
| $\signal{\theta}$ | $\unit{1}$ | Group parameter | The dimensionless parameter in the stated unitary-group convention. |
| $a_n$, $a_k$, $a$, $\langle\hat A\rangle$, $\Delta A$ | — | Observable outcomes and statistics | The eigenvalues, mean, and spread, with units set by the observable. |
| $c_n$ | $\unit{1}$ | Probability amplitude | An eigenbasis expansion coefficient. |
| $P(a_n)$, $p_i$ | $\unit{1}$ | Probability | Measurement probabilities and statistical mixture weights. |
