---
title: "Note Improvement Tracker – 02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra"
---

> [!TLDR]
> This note tracks the review of the 93 notes in `02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 4 possible errors or notation conflicts. 4 of them are verified (4 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N1771|N1771]] 03 Linear Independence and Spanning Sets: Definition 4.3 says the set of all linear combinations is called the "spanning set, or linear span"; the set of all linear combinations is the span, while a spanning set is a family whose span is $V$. Fix the definition and delete the "the source uses them as if they were the same" note. **Fixed:** Definition now calls it the span (linear span) and defines a spanning set for V as a family whose span is V; removed the note about the source
- [[#N1809|N1809]] 02 Singular Value Decomposition: Remove the sentence "The source states that eigenvectors exist only for square, diagonalizable matrices."; it asserts a false claim (non-diagonalizable square matrices have eigenvectors), which the following note then has to contradict; keep only the corrected statement. **Fixed:** Removed the sentence; kept the correcting note
- [[#N1815|N1815]] 08 Density Matrices: Remove the stray text3d label '50' at $(0.34,0.16,0.82)$ in Fig. 6.2 together with the note that apologises for it; it has no meaning and suggests an angle that is not defined. **Fixed:** Removed the text3d element and the two note sentences about it (not yet checked in Obsidian reading mode)
- [[#N1836|N1836]] 01 Exercise 1: Symbol clash: in (a) $v_2$ and $v_4$ denote the normalized eigenvectors for $\lambda=2,4$, while the same section writes "the first row gives $v_1+v_2=0$" and (b) uses "$(1-i)v_2=\lambda v_1$" with $v_1,v_2$ as components; rename the eigenvectors (e.g. $u_2,u_4$) and keep $v_1,v_2$ for components. **Fixed:** Renamed the normalized eigenvectors in (a) to u_2,u_4 (definitions, checks, orthogonality); components stay v_1,v_2

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N1768 | [[00 Vectors and Vector Spaces\|04 Vectors and Vector Spaces/00 Vectors and Vector Spaces]] | Analyzed | low | no | no | [[#N1768\|View]] |
| N1769 | [[01 Vector Spaces over C\|04 Vectors and Vector Spaces/01 Vector Spaces over C]] | Analyzed | low | no | no | [[#N1769\|View]] |
| N1770 | [[02 Subspaces\|04 Vectors and Vector Spaces/02 Subspaces]] | Analyzed | low | yes | no | [[#N1770\|View]] |
| N1771 | [[03 Linear Independence and Spanning Sets\|04 Vectors and Vector Spaces/03 Linear Independence and Spanning Sets]] | Analyzed | medium | no | no | [[#N1771\|View]] |
| N1772 | [[04 Basis and Dimension\|04 Vectors and Vector Spaces/04 Basis and Dimension]] | Analyzed | low | no | no | [[#N1772\|View]] |
| N1773 | [[05 Inner Product\|04 Vectors and Vector Spaces/05 Inner Product]] | Analyzed | low | no | no | [[#N1773\|View]] |
| N1774 | [[06 Orthogonality and Orthonormal Bases\|04 Vectors and Vector Spaces/06 Orthogonality and Orthonormal Bases]] | Analyzed | low | no | yes | [[#N1774\|View]] |
| N1775 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/04 Vectors and Vector Spaces/07 Common Errors\|04 Vectors and Vector Spaces/07 Common Errors]] | Analyzed | low | no | no | [[#N1775\|View]] |
| N1776 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/04 Vectors and Vector Spaces/08 Chapter Summary\|04 Vectors and Vector Spaces/08 Chapter Summary]] | Analyzed | low | no | no | [[#N1776\|View]] |
| N1777 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/04 Vectors and Vector Spaces/09 Exercises\|04 Vectors and Vector Spaces/09 Exercises]] | Analyzed | low | no | no | [[#N1777\|View]] |
| N1778 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/04 Vectors and Vector Spaces/99 Exercises/01 Exercise 1\|04 Vectors and Vector Spaces/99 Exercises/01 Exercise 1]] | Analyzed | low | no | no | [[#N1778\|View]] |
| N1779 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/04 Vectors and Vector Spaces/99 Exercises/02 Exercise 2\|04 Vectors and Vector Spaces/99 Exercises/02 Exercise 2]] | Analyzed | low | no | no | [[#N1779\|View]] |
| N1780 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/04 Vectors and Vector Spaces/99 Exercises/03 Exercise 3\|04 Vectors and Vector Spaces/99 Exercises/03 Exercise 3]] | Analyzed | low | no | no | [[#N1780\|View]] |
| N1781 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/04 Vectors and Vector Spaces/99 Exercises/04 Exercise 4\|04 Vectors and Vector Spaces/99 Exercises/04 Exercise 4]] | Analyzed | low | no | no | [[#N1781\|View]] |
| N1782 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/04 Vectors and Vector Spaces/99 Exercises/05 Exercise 5\|04 Vectors and Vector Spaces/99 Exercises/05 Exercise 5]] | Analyzed | low | yes | no | [[#N1782\|View]] |
| N1783 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/04 Vectors and Vector Spaces/99 Exercises/06 Exercise 6\|04 Vectors and Vector Spaces/99 Exercises/06 Exercise 6]] | Analyzed | low | no | no | [[#N1783\|View]] |
| N1784 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/04 Vectors and Vector Spaces/99 Exercises/07 Exercise 7\|04 Vectors and Vector Spaces/99 Exercises/07 Exercise 7]] | Analyzed | low | no | no | [[#N1784\|View]] |
| N1785 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/04 Vectors and Vector Spaces/99 Exercises/08 Exercise 8\|04 Vectors and Vector Spaces/99 Exercises/08 Exercise 8]] | Analyzed | low | yes | no | [[#N1785\|View]] |
| N1786 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/04 Vectors and Vector Spaces/99 Exercises/09 Exercise 9\|04 Vectors and Vector Spaces/99 Exercises/09 Exercise 9]] | Analyzed | low | no | no | [[#N1786\|View]] |
| N1787 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/04 Vectors and Vector Spaces/99 Exercises/10 Exercise 10\|04 Vectors and Vector Spaces/99 Exercises/10 Exercise 10]] | Analyzed | low | no | no | [[#N1787\|View]] |
| N1788 | [[00 Matrices and Linear Operators\|05 Matrices and Linear Operators/00 Matrices and Linear Operators]] | Analyzed | low | no | no | [[#N1788\|View]] |
| N1789 | [[01 Linear Operators and Matrices\|05 Matrices and Linear Operators/01 Linear Operators and Matrices]] | Analyzed | low | yes | yes | [[#N1789\|View]] |
| N1790 | [[02 Matrix Operations\|05 Matrices and Linear Operators/02 Matrix Operations]] | Analyzed | low | no | no | [[#N1790\|View]] |
| N1791 | [[03 Hermitian Matrices\|05 Matrices and Linear Operators/03 Hermitian Matrices]] | Analyzed | low | no | no | [[#N1791\|View]] |
| N1792 | [[04 Unitary Matrices\|05 Matrices and Linear Operators/04 Unitary Matrices]] | Analyzed | low | yes | yes | [[#N1792\|View]] |
| N1793 | [[05 Change of Basis\|05 Matrices and Linear Operators/05 Change of Basis]] | Analyzed | low | no | yes | [[#N1793\|View]] |
| N1794 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/05 Matrices and Linear Operators/06 Common Errors\|05 Matrices and Linear Operators/06 Common Errors]] | Analyzed | low | no | no | [[#N1794\|View]] |
| N1795 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/05 Matrices and Linear Operators/07 Chapter Summary\|05 Matrices and Linear Operators/07 Chapter Summary]] | Analyzed | low | no | no | [[#N1795\|View]] |
| N1796 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/05 Matrices and Linear Operators/08 Exercises\|05 Matrices and Linear Operators/08 Exercises]] | Analyzed | low | no | no | [[#N1796\|View]] |
| N1797 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/05 Matrices and Linear Operators/99 Exercises/01 Exercise 1\|05 Matrices and Linear Operators/99 Exercises/01 Exercise 1]] | Analyzed | low | no | no | [[#N1797\|View]] |
| N1798 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/05 Matrices and Linear Operators/99 Exercises/02 Exercise 2\|05 Matrices and Linear Operators/99 Exercises/02 Exercise 2]] | Analyzed | medium | no | no | [[#N1798\|View]] |
| N1799 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/05 Matrices and Linear Operators/99 Exercises/03 Exercise 3\|05 Matrices and Linear Operators/99 Exercises/03 Exercise 3]] | Analyzed | low | no | no | [[#N1799\|View]] |
| N1800 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/05 Matrices and Linear Operators/99 Exercises/04 Exercise 4\|05 Matrices and Linear Operators/99 Exercises/04 Exercise 4]] | Analyzed | low | no | no | [[#N1800\|View]] |
| N1801 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/05 Matrices and Linear Operators/99 Exercises/05 Exercise 5\|05 Matrices and Linear Operators/99 Exercises/05 Exercise 5]] | Analyzed | low | no | no | [[#N1801\|View]] |
| N1802 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/05 Matrices and Linear Operators/99 Exercises/06 Exercise 6\|05 Matrices and Linear Operators/99 Exercises/06 Exercise 6]] | Analyzed | low | no | yes | [[#N1802\|View]] |
| N1803 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/05 Matrices and Linear Operators/99 Exercises/07 Exercise 7\|05 Matrices and Linear Operators/99 Exercises/07 Exercise 7]] | Analyzed | low | yes | no | [[#N1803\|View]] |
| N1804 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/05 Matrices and Linear Operators/99 Exercises/08 Exercise 8\|05 Matrices and Linear Operators/99 Exercises/08 Exercise 8]] | Analyzed | low | no | no | [[#N1804\|View]] |
| N1805 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/05 Matrices and Linear Operators/99 Exercises/09 Exercise 9\|05 Matrices and Linear Operators/99 Exercises/09 Exercise 9]] | Analyzed | low | no | no | [[#N1805\|View]] |
| N1806 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/05 Matrices and Linear Operators/99 Exercises/10 Exercise 10\|05 Matrices and Linear Operators/99 Exercises/10 Exercise 10]] | Analyzed | low | no | no | [[#N1806\|View]] |
| N1807 | [[00 Special Matrices\|06 Special Matrices/00 Special Matrices]] | Analyzed | low | no | no | [[#N1807\|View]] |
| N1808 | [[01 Orthogonal Projectors\|06 Special Matrices/01 Orthogonal Projectors]] | Analyzed | low | yes | no | [[#N1808\|View]] |
| N1809 | [[02 Singular Value Decomposition\|06 Special Matrices/02 Singular Value Decomposition]] | Analyzed | medium | yes | yes | [[#N1809\|View]] |
| N1810 | [[03 Polar Decomposition\|06 Special Matrices/03 Polar Decomposition]] | Analyzed | low | no | no | [[#N1810\|View]] |
| N1811 | [[04 Rank, Kernel and Image\|06 Special Matrices/04 Rank, Kernel and Image]] | Analyzed | low | no | no | [[#N1811\|View]] |
| N1812 | [[05 Determinant, Trace and Invariants\|06 Special Matrices/05 Determinant, Trace and Invariants]] | Analyzed | medium | yes | no | [[#N1812\|View]] |
| N1813 | [[06 Condition Number\|06 Special Matrices/06 Condition Number]] | Analyzed | low | no | no | [[#N1813\|View]] |
| N1814 | [[07 Gell-Mann Matrices\|06 Special Matrices/07 Gell-Mann Matrices]] | Analyzed | medium | no | no | [[#N1814\|View]] |
| N1815 | [[08 Density Matrices\|06 Special Matrices/08 Density Matrices]] | Analyzed | medium | yes | yes | [[#N1815\|View]] |
| N1816 | [[09 Common Errors\|06 Special Matrices/09 Common Errors]] | Analyzed | low | no | no | [[#N1816\|View]] |
| N1817 | [[10 Chapter Summary\|06 Special Matrices/10 Chapter Summary]] | Analyzed | low | no | no | [[#N1817\|View]] |
| N1818 | [[11 Exercises\|06 Special Matrices/11 Exercises]] | Analyzed | low | no | no | [[#N1818\|View]] |
| N1819 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/06 Special Matrices/99 Exercises/01 Exercise 1\|06 Special Matrices/99 Exercises/01 Exercise 1]] | Analyzed | low | no | no | [[#N1819\|View]] |
| N1820 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/06 Special Matrices/99 Exercises/02 Exercise 2\|06 Special Matrices/99 Exercises/02 Exercise 2]] | Analyzed | low | no | no | [[#N1820\|View]] |
| N1821 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/06 Special Matrices/99 Exercises/03 Exercise 3\|06 Special Matrices/99 Exercises/03 Exercise 3]] | Analyzed | low | no | no | [[#N1821\|View]] |
| N1822 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/06 Special Matrices/99 Exercises/04 Exercise 4\|06 Special Matrices/99 Exercises/04 Exercise 4]] | Analyzed | low | no | no | [[#N1822\|View]] |
| N1823 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/06 Special Matrices/99 Exercises/05 Exercise 5\|06 Special Matrices/99 Exercises/05 Exercise 5]] | Analyzed | low | no | no | [[#N1823\|View]] |
| N1824 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/06 Special Matrices/99 Exercises/06 Exercise 6\|06 Special Matrices/99 Exercises/06 Exercise 6]] | Analyzed | low | no | no | [[#N1824\|View]] |
| N1825 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/06 Special Matrices/99 Exercises/07 Exercise 7\|06 Special Matrices/99 Exercises/07 Exercise 7]] | Analyzed | low | no | no | [[#N1825\|View]] |
| N1826 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/06 Special Matrices/99 Exercises/08 Exercise 8\|06 Special Matrices/99 Exercises/08 Exercise 8]] | Analyzed | low | no | no | [[#N1826\|View]] |
| N1827 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/06 Special Matrices/99 Exercises/09 Exercise 9\|06 Special Matrices/99 Exercises/09 Exercise 9]] | Analyzed | low | no | no | [[#N1827\|View]] |
| N1828 | [[00 Eigenvalues and Eigenvectors\|07 Eigenvalues and Eigenvectors/00 Eigenvalues and Eigenvectors]] | Analyzed | low | no | no | [[#N1828\|View]] |
| N1829 | [[01 Definition and Calculation\|07 Eigenvalues and Eigenvectors/01 Definition and Calculation]] | Analyzed | medium | no | yes | [[#N1829\|View]] |
| N1830 | [[02 Properties of Hermitian Operators\|07 Eigenvalues and Eigenvectors/02 Properties of Hermitian Operators]] | Analyzed | low | no | no | [[#N1830\|View]] |
| N1831 | [[03 The Spectral Theorem\|07 Eigenvalues and Eigenvectors/03 The Spectral Theorem]] | Analyzed | medium | no | no | [[#N1831\|View]] |
| N1832 | [[04 Diagonalization Methods\|07 Eigenvalues and Eigenvectors/04 Diagonalization Methods]] | Analyzed | medium | yes | no | [[#N1832\|View]] |
| N1833 | [[05 Common Errors\|07 Eigenvalues and Eigenvectors/05 Common Errors]] | Analyzed | medium | no | no | [[#N1833\|View]] |
| N1834 | [[06 Chapter Summary\|07 Eigenvalues and Eigenvectors/06 Chapter Summary]] | Analyzed | low | no | no | [[#N1834\|View]] |
| N1835 | [[07 Exercises\|07 Eigenvalues and Eigenvectors/07 Exercises]] | Analyzed | low | no | no | [[#N1835\|View]] |
| N1836 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/07 Eigenvalues and Eigenvectors/99 Exercises/01 Exercise 1\|07 Eigenvalues and Eigenvectors/99 Exercises/01 Exercise 1]] | Analyzed | medium | no | no | [[#N1836\|View]] |
| N1837 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/07 Eigenvalues and Eigenvectors/99 Exercises/02 Exercise 2\|07 Eigenvalues and Eigenvectors/99 Exercises/02 Exercise 2]] | Analyzed | low | no | no | [[#N1837\|View]] |
| N1838 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/07 Eigenvalues and Eigenvectors/99 Exercises/03 Exercise 3\|07 Eigenvalues and Eigenvectors/99 Exercises/03 Exercise 3]] | Analyzed | low | no | no | [[#N1838\|View]] |
| N1839 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/07 Eigenvalues and Eigenvectors/99 Exercises/04 Exercise 4\|07 Eigenvalues and Eigenvectors/99 Exercises/04 Exercise 4]] | Analyzed | low | yes | no | [[#N1839\|View]] |
| N1840 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/07 Eigenvalues and Eigenvectors/99 Exercises/05 Exercise 5\|07 Eigenvalues and Eigenvectors/99 Exercises/05 Exercise 5]] | Analyzed | low | yes | no | [[#N1840\|View]] |
| N1841 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/07 Eigenvalues and Eigenvectors/99 Exercises/06 Exercise 6\|07 Eigenvalues and Eigenvectors/99 Exercises/06 Exercise 6]] | Analyzed | low | yes | yes | [[#N1841\|View]] |
| N1842 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/07 Eigenvalues and Eigenvectors/99 Exercises/07 Exercise 7\|07 Eigenvalues and Eigenvectors/99 Exercises/07 Exercise 7]] | Analyzed | medium | yes | no | [[#N1842\|View]] |
| N1843 | [[00 Hilbert Space\|08 Hilbert Space/00 Hilbert Space]] | Analyzed | low | no | no | [[#N1843\|View]] |
| N1844 | [[01 The Space L2(R)\|08 Hilbert Space/01 The Space L2(R)]] | Analyzed | medium | yes | no | [[#N1844\|View]] |
| N1845 | [[02 Completeness and Hilbert Space\|08 Hilbert Space/02 Completeness and Hilbert Space]] | Analyzed | medium | yes | no | [[#N1845\|View]] |
| N1846 | [[03 Orthonormal Bases\|08 Hilbert Space/03 Orthonormal Bases]] | Analyzed | medium | yes | no | [[#N1846\|View]] |
| N1847 | [[04 The Completeness Relation\|08 Hilbert Space/04 The Completeness Relation]] | Analyzed | medium | yes | no | [[#N1847\|View]] |
| N1848 | [[05 Continuous Bases\|08 Hilbert Space/05 Continuous Bases]] | Analyzed | medium | yes | no | [[#N1848\|View]] |
| N1849 | [[06 Finite-Dimensional Systems\|08 Hilbert Space/06 Finite-Dimensional Systems]] | Analyzed | low | no | no | [[#N1849\|View]] |
| N1850 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/08 Hilbert Space/07 Common Errors\|08 Hilbert Space/07 Common Errors]] | Analyzed | medium | no | no | [[#N1850\|View]] |
| N1851 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/08 Hilbert Space/08 Chapter Summary\|08 Hilbert Space/08 Chapter Summary]] | Analyzed | low | no | no | [[#N1851\|View]] |
| N1852 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/08 Hilbert Space/09 Exercises\|08 Hilbert Space/09 Exercises]] | Analyzed | low | no | no | [[#N1852\|View]] |
| N1853 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/08 Hilbert Space/99 Exercises/01 Exercise 1\|08 Hilbert Space/99 Exercises/01 Exercise 1]] | Analyzed | low | yes | no | [[#N1853\|View]] |
| N1854 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/08 Hilbert Space/99 Exercises/02 Exercise 2\|08 Hilbert Space/99 Exercises/02 Exercise 2]] | Analyzed | low | no | no | [[#N1854\|View]] |
| N1855 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/08 Hilbert Space/99 Exercises/03 Exercise 3\|08 Hilbert Space/99 Exercises/03 Exercise 3]] | Analyzed | low | no | no | [[#N1855\|View]] |
| N1856 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/08 Hilbert Space/99 Exercises/04 Exercise 4\|08 Hilbert Space/99 Exercises/04 Exercise 4]] | Analyzed | low | yes | yes | [[#N1856\|View]] |
| N1857 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/08 Hilbert Space/99 Exercises/05 Exercise 5\|08 Hilbert Space/99 Exercises/05 Exercise 5]] | Analyzed | low | no | no | [[#N1857\|View]] |
| N1858 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/08 Hilbert Space/99 Exercises/06 Exercise 6\|08 Hilbert Space/99 Exercises/06 Exercise 6]] | Analyzed | low | yes | no | [[#N1858\|View]] |
| N1859 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/08 Hilbert Space/99 Exercises/07 Exercise 7\|08 Hilbert Space/99 Exercises/07 Exercise 7]] | Analyzed | low | yes | yes | [[#N1859\|View]] |
| N1860 | [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/08 Hilbert Space/99 Exercises/08 Exercise 8\|08 Hilbert Space/99 Exercises/08 Exercise 8]] | Analyzed | low | no | no | [[#N1860\|View]] |

## Suggestions

### N1768

Note: [[00 Vectors and Vector Spaces|00 Vectors and Vector Spaces]]  
Priority: low · Graph: no · Manim: no

Clear hub that motivates the abstract vector definition and gives a sensible reading route; links resolve.

- [Simplify] "an arrow with a direction and orientation" is redundant; say "an arrow with a length and a direction", which is the contrast the abstract definition needs.

### N1769

Note: [[01 Vector Spaces over C|01 Vector Spaces over C]]  
Priority: low · Graph: no · Manim: no

Correct axioms and examples; the examples are listed without showing why each satisfies closure.

- [Example] For the $L^2(\mathbb{R})$ example, add the one-line closure argument $|f+g|^2\le2|f|^2+2|g|^2$, since closure under addition is the non-obvious axiom there.
- [Example] Add a non-example (e.g. polynomials of degree exactly $n$, or the set of normalized vectors) so the axioms are seen to exclude something.

### N1770

Note: [[02 Subspaces|02 Subspaces]]  
Priority: low · Graph: yes · Manim: no

Correct and compact with good examples; the geometric picture of a subspace as a plane through the origin is not shown.

- [Graph] A 3D plot (real analogue $\mathbb{R}^3$) showing the plane $z=0$ through the origin versus the shifted affine plane/line $\{(1,t,0)\}$ that misses the origin, illustrating $W_1$ versus $W_2$.
- [Simplify] In the eigenspace bullet, add the one-line closure proof $A(u+v)=\lambda(u+v)$ so it is not merely asserted.

### N1771

Note: [[03 Linear Independence and Spanning Sets|03 Linear Independence and Spanning Sets]]  
Priority: medium · Graph: no · Manim: no

Clear explanation of span versus independence, but Definition 4.3 states a wrong term and then corrects itself in a following note.

- [Correctness] Definition 4.3 says the set of all linear combinations is called the "spanning set, or linear span"; the set of all linear combinations is the span, while a spanning set is a family whose span is $V$. Fix the definition and delete the "the source uses them as if they were the same" note.
- [Example] After the independence example, add a dependent case (e.g. $v_3=v_1+v_2$) and show the nontrivial solution $(1,1,-1)$, so both outcomes of the test are demonstrated.

### N1772

Note: [[04 Basis and Dimension|04 Basis and Dimension]]  
Priority: low · Graph: no · Manim: no

Correct with a clear existence/uniqueness explanation and an appropriate orthonormality caveat.

- [Example] Add a non-standard basis example, e.g. coordinates of $(1,3)^T$ in $\{(1,1)^T,(1,-1)^T\}$ are $(2,-1)$, to show that coordinates depend on the basis while the vector does not.

### N1773

Note: [[05 Inner Product|05 Inner Product]]  
Priority: low · Graph: no · Manim: no

Correct definition and worked example with a clear reason for conjugation.

- [Intuition] State explicitly that this note uses the physics convention (antilinear in the first slot) and that many mathematics texts use the opposite slot, linking to \[\[07 Notation Comparison/01 The Inner Product|the notation comparison\]\].
- [Example] Add the norms $\|u\|=\sqrt6$, $\|v\|=\sqrt{10}$ to the $\mathbb{C}^2$ example and check $|3-\mathrm{i}|^2=10\le60$ as a first Cauchy–Schwarz preview.

### N1774

Note: [[06 Orthogonality and Orthonormal Bases|06 Orthogonality and Orthonormal Bases]]  
Priority: low · Graph: no · Manim: yes

Correct Gram–Schmidt procedure with an accurate native figure and a fully verified 3D example.

- [Manim] Animate Fig. 4.1: project $v_2$ onto $e_1$, slide the projection off to leave $u_2$, then rescale $u_2$ to unit length; repeat in 3D for the $\mathbb{R}^3$ example to show $u_3$ standing perpendicular to the $e_1$–$e_2$ plane.
- [Example] The worked example ends with orthogonality checks only; add the expansion of one vector, e.g. $v_3=\frac1{\sqrt2}e_1+\frac1{\sqrt6}e_2+\frac2{\sqrt3}e_3$, and verify $\|v_3\|^2=2$ via $\sum|c_i|^2$.

### N1775

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/04 Vectors and Vector Spaces/07 Common Errors|07 Common Errors]]  
Priority: low · Graph: no · Manim: no

Useful errors and a correct QM box; Error 3 about eigenvectors belongs to a later chapter.

- [Structure] Error 3 (zero vector as eigenvector) concerns eigenvalues, which this chapter has not introduced; move it to the Eigenvalues and Eigenvectors chapter or replace it with a vector-space error (e.g. treating the normalized states as a subspace).
- [Simplify] In the QM box, replace "a normalized combination $\alpha|\psi_1\rangle+\beta|\psi_2\rangle$" with an explicit statement that the combination must be nonzero and is then normalized, merging the trailing note into the box.

### N1776

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/04 Vectors and Vector Spaces/08 Chapter Summary|08 Chapter Summary]]  
Priority: low · Graph: no · Manim: no

Concise and correct summary with a good reconstruction check.

- [Structure] No change needed.

### N1777

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/04 Vectors and Vector Spaces/09 Exercises|09 Exercises]]  
Priority: low · Graph: no · Manim: no

Clear exercise index with a helpful practice route; links resolve.

- [Structure] No change needed; optionally drop "The exercise numbers and anchors match the original question page", which is transcription meta-text.

### N1778

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/04 Vectors and Vector Spaces/99 Exercises/01 Exercise 1|01 Exercise 1]]  
Priority: low · Graph: no · Manim: no

Correct subspace tests with good counterexamples and a dimension check.

- [Structure] No change needed.

### N1779

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/04 Vectors and Vector Spaces/99 Exercises/02 Exercise 2|02 Exercise 2]]  
Priority: low · Graph: no · Manim: no

Correct calculations and checks.

- [Simplify] The solution writes conjugates as $\overline{u_j}$ while the chapter notes use $u_j^*$; use one notation across the chapter.

### N1780

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/04 Vectors and Vector Spaces/99 Exercises/03 Exercise 3|03 Exercise 3]]  
Priority: low · Graph: no · Manim: no

Correct and clear; the closing Gram–Schmidt step is a nice touch.

- [Structure] No change needed.

### N1781

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/04 Vectors and Vector Spaces/99 Exercises/04 Exercise 4|04 Exercise 4]]  
Priority: low · Graph: no · Manim: no

Correct normalization and Born-rule probabilities with a good phase caveat.

- [Structure] No change needed.

### N1782

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/04 Vectors and Vector Spaces/99 Exercises/05 Exercise 5|05 Exercise 5]]  
Priority: low · Graph: yes · Manim: no

Correct Gram–Schmidt calculation with clear checks.

- [Graph] Plot (real plane) $v_1=(1,1)$, $v_2=(0,1)$, the projection $\frac12(1,1)$, $u_2=(-\frac12,\frac12)$ and the unit vectors $e_1,e_2$, mirroring Fig. 4.1 with these concrete numbers.

### N1783

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/04 Vectors and Vector Spaces/99 Exercises/06 Exercise 6|06 Exercise 6]]  
Priority: low · Graph: no · Manim: no

Correct and carefully explained projection proof of Cauchy–Schwarz.

- [Intuition] Add one sentence that in real space the inequality is $|\cos\vartheta|\le1$ for the angle between $u$ and $v$, which is what the projection residual expresses.

### N1784

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/04 Vectors and Vector Spaces/99 Exercises/07 Exercise 7|07 Exercise 7]]  
Priority: low · Graph: no · Manim: no

Correct proof with a careful equality analysis.

- [Structure] No change needed.

### N1785

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/04 Vectors and Vector Spaces/99 Exercises/08 Exercise 8|08 Exercise 8]]  
Priority: low · Graph: yes · Manim: no

Correct derivation of $\langle\sigma_z\rangle$ with good limiting cases; a source-meta note remains.

- [Structure] Remove the note "The source uses $\sigma_z$ for the Pauli matrix in this exercise"; the dimensionless-eigenvalue remark can stay as one sentence in the solution.
- [Graph] Plot $\langle\sigma_z\rangle=2|\alpha|^2-1$ against $|\alpha|^2\in[0,1]$ to show the linear map from up-probability to mean.

### N1786

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/04 Vectors and Vector Spaces/99 Exercises/09 Exercise 9|09 Exercise 9]]  
Priority: low · Graph: no · Manim: no

Correct proof with a good counterexample for an incomplete orthonormal family.

- [Structure] No change needed.

### N1787

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/04 Vectors and Vector Spaces/99 Exercises/10 Exercise 10|10 Exercise 10]]  
Priority: low · Graph: no · Manim: no

Correct and thorough demonstration of why conjugation is needed.

- [Structure] No change needed.

### N1788

Note: [[00 Matrices and Linear Operators|00 Matrices and Linear Operators]]  
Priority: low · Graph: no · Manim: no

Clear hub with a useful Hermitian-versus-unitary check; links resolve.

- [Structure] No change needed.

### N1789

Note: [[01 Linear Operators and Matrices|01 Linear Operators and Matrices]]  
Priority: low · Graph: yes · Manim: yes

Correct definition and example; the geometric action of a matrix on the plane is not shown.

- [Manim] Animate a real $2\times2$ matrix (e.g. the example's $A$ restricted to real inputs) acting on the unit grid and the basis vectors $e_1,e_2$, landing on the columns $(1,3)^T$ and $(2,-1)^T$, to show "columns are images of basis vectors".
- [Example] Add a non-example (e.g. $z\mapsto z^*$ componentwise, which is additive but not complex-linear) to show what linearity over $\mathbb{C}$ excludes.

### N1790

Note: [[02 Matrix Operations|02 Matrix Operations]]  
Priority: low · Graph: no · Manim: no

Correct and concise; adjoint rules are stated without justification.

- [Simplify] Derive (5.2) in one line from the defining relation $\langle u,ABv\rangle=\langle A^\dagger u,Bv\rangle=\langle B^\dagger A^\dagger u,v\rangle$ instead of only listing it.
- [Example] Add a short numerical adjoint example (e.g. $A=\begin{pmatrix}1&\mathrm{i}\\2&3\end{pmatrix}$, $A^\dagger=\begin{pmatrix}1&2\\-\mathrm{i}&3\end{pmatrix}$) before the property list.

### N1791

Note: [[03 Hermitian Matrices|03 Hermitian Matrices]]  
Priority: low · Graph: no · Manim: no

Correct Pauli-matrix example and helpful finite/unbounded caveat; the quantity table has an empty-symbol row.

- [Structure] Remove the table row with symbol "—" for "Spin quantum number"; the note never uses a symbol for it.
- [Example] Show $\sigma_z^\dagger=\sigma_z$ too (trivial) and verify one more product, e.g. $\sigma_y\sigma_z=\mathrm{i}\sigma_x$, or state that the cyclic pattern follows from the first.

### N1792

Note: [[04 Unitary Matrices|04 Unitary Matrices]]  
Priority: low · Graph: yes · Manim: yes

Correct definition, converse argument, and Hadamard example.

- [Manim] Animate a real unitary (rotation by $\theta$) and the Hadamard reflection acting on the unit circle and two orthogonal vectors, showing lengths and the right angle preserved.
- [Simplify] Call $\{|+\rangle,|-\rangle\}$ the "$x$ basis" or "Hadamard basis" with "Fourier basis" as an aside; the Fourier name is only meaningful after the QFT is introduced.

### N1793

Note: [[05 Change of Basis|05 Change of Basis]]  
Priority: low · Graph: no · Manim: yes

Correct derivation of $A'=U^\dagger AU$ and a well-chosen $\sigma_z$ example.

- [Manim] Animate the passive view: the vector stays fixed while the axes rotate from $\{e_1,e_2\}$ to $\{f_1,f_2\}$ and the coordinate readouts change accordingly.
- [Example] Add a coordinate check: $|\uparrow\rangle=(1,0)^T$ has new coordinates $c'=H^\dagger c=(1,1)^T/\sqrt2$, and $\sigma_z'c'$ reproduces the transformed $\sigma_z|\uparrow\rangle$.

### N1794

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/05 Matrices and Linear Operators/06 Common Errors|06 Common Errors]]  
Priority: low · Graph: no · Manim: no

Correct error list with a good trace test and a careful QM box.

- [Example] In Error 4, give the actual nonorthonormal formula ($A=G^{-1}\tilde A$ with $G_{ij}=\langle e_i,e_j\rangle$, $\tilde A_{ij}=\langle e_i,\hat Ae_j\rangle$) instead of only mentioning the Gram matrix.

### N1795

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/05 Matrices and Linear Operators/07 Chapter Summary|07 Chapter Summary]]  
Priority: low · Graph: no · Manim: no

Concise, correct summary with a good unifying calculation.

- [Structure] No change needed.

### N1796

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/05 Matrices and Linear Operators/08 Exercises|08 Exercises]]  
Priority: low · Graph: no · Manim: no

Clear exercise index with a useful route; links resolve.

- [Structure] No change needed.

### N1797

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/05 Matrices and Linear Operators/99 Exercises/01 Exercise 1|01 Exercise 1]]  
Priority: low · Graph: no · Manim: no

Correct products and adjoints with an independent composition check.

- [Structure] No change needed.

### N1798

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/05 Matrices and Linear Operators/99 Exercises/02 Exercise 2|02 Exercise 2]]  
Priority: medium · Graph: no · Manim: no

Correct classification, but two "source discrepancy/correction" callouts about a screenshot and an answer key clutter the solution.

- [Structure] Remove the "Source discrepancy — Matrix in part (b)" and "Source correction — Unitary condition" callouts and the matching sentences in the interpretation and answer; if the unitary-but-not-Hermitian case is wanted, add it as an explicit extra part (e) with $C=\begin{pmatrix}0&-\mathrm{i}\\1&0\end{pmatrix}$.
- [Simplify] In (a), point out that $\det M_a=4\ne\pm1$ in modulus already rules out unitarity before squaring.

### N1799

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/05 Matrices and Linear Operators/99 Exercises/03 Exercise 3|03 Exercise 3]]  
Priority: low · Graph: no · Manim: no

Correct and clear, with a useful note on what the trace hides.

- [Simplify] The TLDR says "the two Pauli products have the same trace, although their signs are opposite"; say "although the products themselves differ by a sign" to avoid implying the traces have opposite signs.

### N1800

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/05 Matrices and Linear Operators/99 Exercises/04 Exercise 4|04 Exercise 4]]  
Priority: low · Graph: no · Manim: no

Correct with a good counterexample showing $M^2=I$ does not imply Hermiticity.

- [Structure] No change needed.

### N1801

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/05 Matrices and Linear Operators/99 Exercises/05 Exercise 5|05 Exercise 5]]  
Priority: low · Graph: no · Manim: no

Correct two-direction proof with apt examples.

- [Structure] No change needed.

### N1802

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/05 Matrices and Linear Operators/99 Exercises/06 Exercise 6|06 Exercise 6]]  
Priority: low · Graph: no · Manim: yes

Correct series derivation with good checks.

- [Manim] On the Bloch sphere, animate $\mathrm{e}^{\mathrm{i}\theta\sigma_z}$ acting on $|+\rangle$ as $\theta$ increases: the state precesses about the $z$ axis (by angle $-2\theta$) while its up/down probabilities stay fixed.

### N1803

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/05 Matrices and Linear Operators/99 Exercises/07 Exercise 7|07 Exercise 7]]  
Priority: low · Graph: yes · Manim: no

Correct expectation values and a clear phase-sign check.

- [Graph] 3D plot of the unit Bloch sphere with the equator curve $(\cos\phi,\sin\phi,0)$, $\phi\in[0,2\pi)$, and points marked at $\phi=0,\pi/2$ to show the family of states in this exercise.

### N1804

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/05 Matrices and Linear Operators/99 Exercises/08 Exercise 8|08 Exercise 8]]  
Priority: low · Graph: no · Manim: no

Correct proof with a useful non-unitary similarity counterexample.

- [Structure] No change needed.

### N1805

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/05 Matrices and Linear Operators/99 Exercises/09 Exercise 9|09 Exercise 9]]  
Priority: low · Graph: no · Manim: no

Correct and complete proof, including the $\alpha=0$ limit and an ODE check.

- [Structure] Drop the "The source permits $\alpha=0$..." phrasing in the note; state the $\alpha=0$ interpretation directly as part of the question.

### N1806

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/05 Matrices and Linear Operators/99 Exercises/10 Exercise 10|10 Exercise 10]]  
Priority: low · Graph: no · Manim: no

Correct matrix block and a valuable truncation warning; the mass/index clash is fixed only midway through.

- [Simplify] Rename the mass to $\mechanical{M}$ (or the indices to $j,k$) already in the question, instead of introducing $\mechanical{m}$ for mass and switching to $\mechanical{M}$ in the solution with an explanatory note.
- [Simplify] $\hbar$ is written $\mechanical{\hbar}$ here but $\energy{\hbar}$ in \[\[03 Hermitian Matrices\]\] and \[\[05 Matrices and Linear Operators/06 Common Errors\]\]; use one semantic group consistently.

### N1807

Note: [[00 Special Matrices|00 Special Matrices]]  
Priority: low · Graph: no · Manim: no

Clear chapter hub with a correct family table and a useful nilpotent boundary example.

- [Structure] No change needed beyond adding one sentence after the table that Hermitian, anti-Hermitian, unitary, and projector rows are all special cases of the Normal row, so the reader sees the table as a hierarchy rather than a flat list.

### N1808

Note: [[01 Orthogonal Projectors|01 Orthogonal Projectors]]  
Priority: low · Graph: yes · Manim: no

Correct and compact, with a well-chosen oblique-projector counterexample and a verified ℂ³ example.

- [Graph] Add a 2D plot contrasting the two projectors in the text: for $u=(1,1)$ draw the orthogonal projection onto the $x$ axis (dropped perpendicular to $(1,0)$) and the oblique projector $\begin{pmatrix}1&1\\0&0\end{pmatrix}$ (which sends $u$ to $(2,0)$ along the direction $(1,-1)$), with the residual vectors shown so the reader sees which one is perpendicular.
- [Intuition] In the paragraph on the two conditions, state the Pythagoras result explicitly, $\|u\|^2=\|Pu\|^2+\|(I-P)u\|^2$, and check it on the ℂ³ example: $5=3+2$.

### N1809

Note: [[02 Singular Value Decomposition|02 Singular Value Decomposition]]  
Priority: medium · Graph: yes · Manim: yes

The construction and the sign example are good, but the note contains a contradictory "source" sentence and the figure shows three identical circles instead of the actual geometric action.

- [Correctness] Remove the sentence "The source states that eigenvectors exist only for square, diagonalizable matrices."; it asserts a false claim (non-diagonalizable square matrices have eigenvectors), which the following note then has to contradict; keep only the corrected statement.
- [Graph] Replace Fig. 6.1 (three equal circles with labels) by a real three-panel plot for one concrete matrix, e.g. $A=\begin{pmatrix}3&1\\1&-1\end{pmatrix}$ or $\begin{pmatrix}2&1\\0&1\end{pmatrix}$: unit circle with $v_1,v_2$; the circle after $V^\dagger$ (same circle, rotated axes); after $\Sigma$ (axis-aligned ellipse with semi-axes $\sigma_1,\sigma_2$); after $U$ (the final ellipse with $\sigma_1u_1,\sigma_2u_2$ drawn).
- [Manim] Animate the unit circle being transformed by $V^\dagger$, then $\Sigma$, then $U$ in sequence for the same $2\times2$ matrix, ending on the image ellipse; the time ordering makes "rotate, stretch, rotate" concrete in a way a static picture does not.
- [Example] Add a worked low-rank example under "Compression": for a $2\times2$ matrix with $\sigma_1\gg\sigma_2$, show $A_1=\sigma_1u_1v_1^\dagger$ and state the Eckart–Young error $\|A-A_1\|_2=\sigma_2$.
- [Simplify] Move the sentence on squared singular values summing to one (bipartite coefficients) into the "Entanglement" bullet, where the Schmidt context is introduced; in its current place it appears before any state has been defined.

### N1810

Note: [[03 Polar Decomposition|03 Polar Decomposition]]  
Priority: low · Graph: no · Manim: no

Correct, with a clear construction proof and diagonal example; the quantum application is nearly tautological.

- [Intuition] Replace the diagonal example by a non-commuting one, e.g. $A=\begin{pmatrix}1&1\\0&1\end{pmatrix}$, and show $P=\sqrt{A^\dagger A}$ is not diagonal and $UP\ne PU$, so the warning "U and P do not commute" is demonstrated, not only stated.
- [Simplify] Rewrite the application paragraph: "It is the unitary factor in the polar decomposition of the propagator" is circular; say instead that any unitary $A$ has $A^\dagger A=I$, hence $P=I$, and that a nontrivial $P$ would signal norm loss or gain (for example a non-Hermitian effective Hamiltonian with decay).
- [Structure] Drop the meta phrase "as the source states" in the left-polar note; state the invertibility assumption directly and mention that non-invertible matrices still have a polar form with unique $P$ but non-unique $U$.

### N1811

Note: [[04 Rank, Kernel and Image|04 Rank, Kernel and Image]]  
Priority: low · Graph: no · Manim: no

Correct and concise, with a proof sketch and a useful nilpotent counterexample.

- [Simplify] In the nilpotent paragraph, "Thus the later eigenvalue counting rule uses Hermiticity" refers to the rule stated in the preceding paragraph, not a later one; change "later" to "preceding" (or "the rank equals the number of nonzero eigenvalues rule above").
- [Example] Add a physical one-liner: for $\sigma_z+I=\operatorname{diag}(2,0)$ the kernel is spanned by $|\downarrow\rangle$ and the rank is one, linking kernel to "states the operator annihilates".

### N1812

Note: [[05 Determinant, Trace and Invariants|05 Determinant, Trace and Invariants]]  
Priority: medium · Graph: yes · Manim: no

The invariant formulas are correct, but the convergence paragraph comes before the example it refers to and the thermal example never defines $Z$ or $\thermal{\beta}$ in formulas.

- [Structure] Move the paragraph "In the thermal example below, the sum must define a normalizable state..." to after the thermal-state equation, and replace the closing note's "The source uses these symbols without defining them" by explicit definitions $Z=\sum_n\mathrm{e}^{-\thermal{\beta}\energy{E}_n}$ and $\thermal{\beta}=1/(k_\mathrm{B}T)$.
- [Example] Finish the thermal example with a two-level system ($\energy{E}_0=0$, $\energy{E}_1=\Delta$): $\langle\hat H\rangle=\Delta/(\mathrm{e}^{\thermal{\beta}\Delta}+1)$, with limits $0$ for $T\to0$ and $\Delta/2$ for $T\to\infty$.
- [Graph] Plot $\langle\hat H\rangle/\Delta=1/(\mathrm{e}^{1/\tau}+1)$ against reduced temperature $\tau=k_\mathrm{B}T/\Delta$ for $\tau\in[0,5]$, with a dashed asymptote at $1/2$.
- [Intuition] Add one sentence that $\det A$ is the volume scaling factor and $\operatorname{Tr}A$ is the first-order rate of volume change, $\det(\mathrm{e}^{tA})=\mathrm{e}^{t\operatorname{Tr}A}$, which explains why unitary evolution with Hermitian $H$ has $\lvert\det\rvert=1$.

### N1813

Note: [[06 Condition Number|06 Condition Number]]  
Priority: low · Graph: no · Manim: no

Correct derivation of the worst-case bound with a clear diagonal example.

- [Intuition] Add the geometric picture: $A$ maps the unit sphere to an ellipsoid whose longest and shortest semi-axes are $\sigma_{\max}$ and $\sigma_{\min}$, so $\kappa$ is the eccentricity ratio; link to Fig. 6.1 in \[\[02 Singular Value Decomposition\]\].
- [Example] Add a rule of thumb: with double precision ($\approx10^{-16}$ relative error) and $\kappa\approx10^{k}$, about $k$ significant digits can be lost; illustrate with $\varepsilon=10^{-8}$ in the existing example.

### N1814

Note: [[07 Gell-Mann Matrices|07 Gell-Mann Matrices]]  
Priority: medium · Graph: no · Manim: no

The listed properties are correct, but the note never displays the eight Gell-Mann matrices or any structure constants, so the reader cannot check the claims.

- [Example] Display all eight matrices $\lambda_1,\ldots,\lambda_8$ explicitly (including $\lambda_8=\operatorname{diag}(1,1,-2)/\sqrt3$) and point out that $\lambda_1,\lambda_2,\lambda_3$ are the Pauli matrices embedded in the upper-left block.
- [Example] List the nonzero independent structure constants, $f_{123}=1$, $f_{147}=f_{246}=f_{257}=f_{345}=f_{516}=f_{637}=1/2$, $f_{458}=f_{678}=\sqrt3/2$, and verify one commutator, e.g. $[\lambda_1,\lambda_2]=2\mathrm{i}\lambda_3$.
- [Simplify] The closing note refers to "the final expression" with summation over $k$; say instead that $[\sigma_i,\sigma_j]=2\mathrm{i}\varepsilon_{ijk}\sigma_k$ uses the summation convention, or write the sum explicitly as in the $SU(3)$ formula.

### N1815

Note: [[08 Density Matrices|08 Density Matrices]]  
Priority: medium · Graph: yes · Manim: yes

The definition, properties, and mixture-versus-superposition contrast are correct and clear, but the Bloch figure carries an unexplained label and the note omits the Bloch-vector formula it plots.

- [Correctness] Remove the stray text3d label '50' at $(0.34,0.16,0.82)$ in Fig. 6.2 together with the note that apologises for it; it has no meaning and suggests an angle that is not defined.
- [Structure] The physical-quantity table row "— | 1 | Spin quantum number" lists no symbol used in the note; delete it or replace it with the Bloch vector $\mathbf r$ if the formula below is added.
- [Intuition] State the Bloch parametrisation $\rho=\tfrac12(I+\mathbf r\cdot\boldsymbol\sigma)$ with $\operatorname{Tr}\rho^2=\tfrac12(1+|\mathbf r|^2)$ next to Fig. 6.2 and link \[\[06 Special Matrices/99 Exercises/07 Exercise 7|Exercise 7\]\], so the axis labels and the surface/interior claim are derived rather than asserted; label the red marker with its purity ($\mathbf r=(0.22,0.08,0.12)$ gives $\operatorname{Tr}\rho^2\approx0.53$).
- [Intuition] Add that the decomposition into $p_i,|\psi_i\rangle$ is not unique: $I/2$ is both the up/down mixture and the $\pm x$ mixture, so only $\rho$ (not the ensemble) is physically meaningful.
- [Manim] Animate pure dephasing of $|+x\rangle$: the Bloch vector shrinks along the $x$ axis toward the centre while the matrix display shows the off-diagonal entries decaying as $\mathrm{e}^{-t/T_2}$ and the purity dropping from 1 to 1/2.

### N1816

Note: [[09 Common Errors|09 Common Errors]]  
Priority: low · Graph: no · Manim: no

The listed errors and the purity proof are correct, but the note opens with proof material before the error list and calls the coefficient matrix both $C_{ij}$ and $\signal{c}_{ij}$.

- [Structure] Move the two opening paragraphs (purity proof via eigenvalues $q_i$ and the $\operatorname{diag}(-1,0)$ test) under "Error 3", which they belong to; the note should start with the error list.
- [Structure] In the Schmidt callout, write "the coefficient matrix $C=(\signal{c}_{ij})$" instead of "$C_{ij}$" so one symbol is used, and drop the "In the source" phrasing in favour of a direct statement with the $V^*$ caveat merged into it.
- [Simplify] In "Error 2", add a one-line counterexample: $\det(I+I)=4\ne\det I+\det I=2$ for $2\times2$.

### N1817

Note: [[10 Chapter Summary|10 Chapter Summary]]  
Priority: low · Graph: no · Manim: no

Accurate and well-scoped summary with a good diag(1,0) versus I/2 comparison.

- [Structure] No change needed; optionally add the condition-number bullet $\kappa=\sigma_{\max}/\sigma_{\min}$ and the Gell-Mann bullet, which are the only chapter sections not summarised.

### N1818

Note: [[11 Exercises|11 Exercises]]  
Priority: low · Graph: no · Manim: no

Clear exercise index with helpful study guidance; links resolve.

- [Structure] No change needed.

### N1819

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/06 Special Matrices/99 Exercises/01 Exercise 1|01 Exercise 1]]  
Priority: low · Graph: no · Manim: no

Correct, fully worked, with good orthogonal-complement and normalisation checks.

- [Intuition] Mention that $v=(1,\mathrm{i})/\sqrt2$ is the $\sigma_y$ eigenstate $|+y\rangle$ and that $P=\tfrac12(I+\sigma_y)$, connecting the result to the Bloch picture in \[\[08 Density Matrices\]\].

### N1820

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/06 Special Matrices/99 Exercises/02 Exercise 2|02 Exercise 2]]  
Priority: low · Graph: no · Manim: no

Correct and clear, with a useful transfer check to the singular case.

- [Structure] No change needed.

### N1821

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/06 Special Matrices/99 Exercises/03 Exercise 3|03 Exercise 3]]  
Priority: low · Graph: no · Manim: no

Correct, with a good coherence-versus-population discussion and an explicit $\sigma_x$ prediction.

- [Structure] No change needed; optionally note that $\rho=\tfrac12(I+\sigma_x)$, i.e. Bloch vector $(1,0,0)$, to tie it to Exercise 7.

### N1822

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/06 Special Matrices/99 Exercises/04 Exercise 4|04 Exercise 4]]  
Priority: low · Graph: no · Manim: no

Correct, with a good proof of the minimum purity and a clear warning that a zero mean is not a purity test.

- [Structure] No change needed.

### N1823

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/06 Special Matrices/99 Exercises/05 Exercise 5|05 Exercise 5]]  
Priority: low · Graph: no · Manim: no

Correct full SVD with clear dimension bookkeeping and a good distinction between unused output directions and zero singular values.

- [Simplify] The note uses $s_k$ for singular values while the chapter uses $\sigma_i$; use $\sigma_k$ here for consistency (no clash with Pauli matrices arises in this exercise).

### N1824

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/06 Special Matrices/99 Exercises/06 Exercise 6|06 Exercise 6]]  
Priority: low · Graph: no · Manim: no

Correct proof with a useful converse counterexample and SU(n) remark.

- [Structure] No change needed.

### N1825

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/06 Special Matrices/99 Exercises/07 Exercise 7|07 Exercise 7]]  
Priority: low · Graph: no · Manim: no

Correct derivation (eigenvalues, purity, boundary tests check out), but the question text and a note dwell on the source's ambiguous "when does equality hold".

- [Structure] Reword part (b) of the question to "When is $\operatorname{Tr}(\rho^2)=1$, and when is it $1/2$?" and delete the note about the unspecified equality and the sentence "resolves the source's unspecified equality question"; the solution then reads directly.
- [Intuition] Add one sentence that the eigenvalues $\tfrac12(1\pm|\mathbf r|)$ mean the Bloch length directly measures how far the state is from maximally mixed, linking to Fig. 6.2 in \[\[08 Density Matrices\]\].

### N1826

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/06 Special Matrices/99 Exercises/08 Exercise 8|08 Exercise 8]]  
Priority: low · Graph: no · Manim: no

Correct Kronecker product, energies, and sign discussion with appropriate degeneracy comments.

- [Structure] Replace the note "which the source does not specify" with the direct statement that $\energy{J}$ is introduced below; the worked solution already handles this.

### N1827

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/06 Special Matrices/99 Exercises/09 Exercise 9|09 Exercise 9]]  
Priority: low · Graph: no · Manim: no

Correct and carefully checked Schmidt decomposition (singular values, vectors, reconstruction, and reduced purity 7/9 all verify numerically).

- [Simplify] Shorten part (b) by noting first that $C$ is real symmetric with eigenvalues $\varphi/\sqrt3$ and $-1/(\varphi\sqrt3)$, where $\varphi=(1+\sqrt5)/2$, so $s_+=\varphi/\sqrt3$ and $s_-=1/(\varphi\sqrt3)$; the golden ratio makes the numbers memorable and explains $\beta/\alpha=1/\varphi$.
- [Example] Add the entanglement entropy $S=-\sum\lambda_\pm\log_2\lambda_\pm\approx0.55$ bit as a quantitative follow-up to "entangled but not maximally entangled".

### N1828

Note: [[00 Eigenvalues and Eigenvectors|00 Eigenvalues and Eigenvectors]]  
Priority: low · Graph: no · Manim: no

Clear chapter hub with a good motivating question and a useful defective-matrix warning; the closing paragraph is slightly dense.

- [Simplify] Split the paragraph that starts "For example, $\begin{pmatrix}0&1\\0&0\end{pmatrix}$" into two: one sentence on the defective matrix (state that $(1,0)^T$ is its only eigendirection) and a separate sentence on continuous spectra with a forward link to the Hilbert Space note \[\[05 Continuous Bases\]\].

### N1829

Note: [[01 Definition and Calculation|01 Definition and Calculation]]  
Priority: medium · Graph: no · Manim: yes

Correct and compact procedure with a well-checked σ_y example, but the geometric meaning of eigenvectors and the algebraic-versus-geometric multiplicity distinction are only stated in words.

- [Manim] Animate the real symmetric map $A=\begin{pmatrix}3&1\\1&3\end{pmatrix}$ acting on a ring of unit vectors: most vectors turn, while the vectors along $(1,1)$ and $(1,-1)$ only stretch by 4 and 2; this makes "preserved direction" concrete before the determinant method.
- [Example] Add a short worked degenerate case next to the sentence "A repeated root does not by itself give several independent eigenvectors", e.g. compare $\operatorname{diag}(2,2)$ (kernel dimension 2) with $\begin{pmatrix}2&1\\0&2\end{pmatrix}$ (kernel dimension 1), both with the double root $\lambda=2$.
- [Simplify] Rewrite the zero-eigenvalue paragraph: "Its normalized length is one" and "prevents discarding a physical zero-level state merely because its measurement value vanishes" are hard to parse; state simply that $\lambda=0$ is allowed while $v=0$ is excluded because $A0=\lambda0$ holds for every $\lambda$.
- [Links] Turn "Chapter 6 uses $\det(\lambda I-A)$" in the note callout into a wiki link to the relevant Chapter 6 (Special Matrices) note.

### N1830

Note: [[02 Properties of Hermitian Operators|02 Properties of Hermitian Operators]]  
Priority: low · Graph: no · Manim: no

Both proofs are correct and short; the introductory paragraph refers to "both proofs" before the reader has seen them.

- [Structure] Move the opening paragraph ("Both proofs compare the same inner product in two orders...") after Theorem 7.2 as a remark, or reduce it to one sentence of motivation, so the note starts with Theorem 7.1.
- [Intuition] Add a non-Hermitian counterexample, e.g. the rotation $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ with eigenvalues $\pm i$, to show that the real-eigenvalue result really needs $\hat A^\dagger=\hat A$.
- [Example] In the $A=I$ example, write the Gram–Schmidt result explicitly: $(1,1)^T-(1,0)^T=(0,1)^T$, so the reader sees the orthonormal pair.

### N1831

Note: [[03 The Spectral Theorem|03 The Spectral Theorem]]  
Priority: medium · Graph: no · Manim: no

Correct statement and good projector discussion, but the proof roadmap and the diag(2,2,5) check appear before the spectral decomposition they refer to, and no worked 2×2 decomposition is given.

- [Structure] Reorder: theorem, then the boxed spectral decomposition and degenerate projector $\hat P_a$, then the $\operatorname{diag}(2,2,5)$ check (which uses $P_2$, $P_5$ before they are defined), then the proof roadmap.
- [Simplify] In the proof roadmap, say why "A complex finite matrix has an eigenvector": the characteristic polynomial has a root in $\mathbb C$ by the fundamental theorem of algebra.
- [Example] Add a short worked decomposition, e.g. $\sigma_y=|+y\rangle\langle+y|-|-y\rangle\langle-y|$ using the vectors from \[\[01 Definition and Calculation\]\], with the explicit outer-product matrices.

### N1832

Note: [[04 Diagonalization Methods|04 Diagonalization Methods]]  
Priority: medium · Graph: yes · Manim: no

The five-step recipe, σ_x example, and matrix-function example are correct and well checked; the level diagram is useful, but the dependence of the energies on the coupling is not plotted.

- [Graph] Add a 2D plot of $E_\pm=E_0\pm\Delta$ versus $\Delta$ (set $E_0=0$, $\Delta\in[-2,2]$ in units of a reference energy): two straight lines crossing at $\Delta=0$, showing the gap $2|\Delta|$ and the label exchange for negative $\Delta$ that the note callout describes.
- [Simplify] In the $e^{i\theta\sigma_x}$ example, show the intermediate product $H\operatorname{diag}(e^{i\theta},e^{-i\theta})H$ (entries $(e^{i\theta}\pm e^{-i\theta})/2$) and then state the compact form $\cos\theta\,I+i\sin\theta\,\sigma_x$, linking to Exercise 6 where the same identity is derived by power series.
- [Intuition] Fig. 7.1 labels the uncoupled states as spin states $|\uparrow\rangle,|\downarrow\rangle$ with "Same energy, different spin", but the model is generic (Exercise 4 applies it to NH₃ and a double well); add one sentence that the Hamiltonian is $E_0I+\Delta\sigma_x$ and that the labels denote any two basis states.

### N1833

Note: [[05 Common Errors|05 Common Errors]]  
Priority: medium · Graph: no · Manim: no

The content is correct, including the degenerate-measurement caveat, but two introductory paragraphs refer to "the first error" and rules "below" before they are introduced, and the measurement section has no numerical example.

- [Structure] Move the residual-check paragraph ("A residual check makes the first error concrete...") into Error 1, and move the postulate-caveat paragraph into the measurement-principle section, so the note opens directly with the error list.
- [Simplify] Mark the error headings as misconceptions (e.g. "Error 1 — Misconception: normalize before finding the direction"); as written, "Normalize before finding the direction" reads like advice to follow.
- [Example] Add a numerical measurement example, e.g. $|\psi\rangle=(\sqrt3|\uparrow\rangle+|\downarrow\rangle)/2$ for $\sigma_z$: $P(+1)=3/4$, $P(-1)=1/4$, $\langle\sigma_z\rangle=1/2$, which also shows that the mean need not be an eigenvalue.

### N1834

Note: [[06 Chapter Summary|06 Chapter Summary]]  
Priority: low · Graph: no · Manim: no

Accurate summary with a useful reconstruction exercise.

- [Links] The equal-superposition question ("Explain why the mean can lie between the allowed outcomes") is answered in Exercise 5; add a link to \[\[07 Eigenvalues and Eigenvectors/99 Exercises/05 Exercise 5|Exercise 5\]\].

### N1835

Note: [[07 Exercises|07 Exercises]]  
Priority: low · Graph: no · Manim: no

Clear exercise index with useful guidance; no change needed.

- [Structure] No change needed.

### N1836

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/07 Eigenvalues and Eigenvectors/99 Exercises/01 Exercise 1|01 Exercise 1]]  
Priority: medium · Graph: no · Manim: no

Correct and carefully verified solutions, but the eigenvector labels in part (a) clash with the component symbols used in parts (a) and (b).

- [Correctness] Symbol clash: in (a) $v_2$ and $v_4$ denote the normalized eigenvectors for $\lambda=2,4$, while the same section writes "the first row gives $v_1+v_2=0$" and (b) uses "$(1-i)v_2=\lambda v_1$" with $v_1,v_2$ as components; rename the eigenvectors (e.g. $u_2,u_4$) and keep $v_1,v_2$ for components.
- [Simplify] In (b), show the two component equations $(1-i)v_2=\lambda v_1$ and $(1+i)v_1=\lambda v_2$ as a displayed system before the choice $v_1=1-i$, $v_2=\lambda$.

### N1837

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/07 Eigenvalues and Eigenvectors/99 Exercises/02 Exercise 2|02 Exercise 2]]  
Priority: low · Graph: no · Manim: no

Correct, clear verification with useful extra checks.

- [Simplify] In "A reconstruction by action", show the one-line product $|+x\rangle\langle+x|-x\rangle\langle-x|=0$ explicitly, since the argument depends on it.

### N1838

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/07 Eigenvalues and Eigenvectors/99 Exercises/03 Exercise 3|03 Exercise 3]]  
Priority: low · Graph: no · Manim: no

Correct and clear; the non-Hermitian counterexample is a good addition.

- [Intuition] Add the general 2×2 identity $\det(A-\lambda I)=\lambda^2-(\operatorname{Tr}A)\lambda+\det A$, which shows directly why trace and determinant fix the eigenvalues in two dimensions.

### N1839

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/07 Eigenvalues and Eigenvectors/99 Exercises/04 Exercise 4|04 Exercise 4]]  
Priority: low · Graph: yes · Manim: no

Correct diagonalization with good checks and a clear explanation of the symmetric and antisymmetric states.

- [Intuition] The basis kets are written $|\uparrow\rangle,|\downarrow\rangle$, but for the NH₃ molecule and the double well named in the question they are position configurations; rename them $|L\rangle,|R\rangle$ or state that the arrows label any two basis states.
- [Graph] Plot $E_\pm(\Delta)=E_0\pm\Delta$ for $\Delta\in[-2,2]$ (with $E_0=0$), marking the degenerate point $\Delta=0$ and the swap of which state is higher, matching the paragraph on the labels $+$ and $-$.

### N1840

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/07 Eigenvalues and Eigenvectors/99 Exercises/05 Exercise 5|05 Exercise 5]]  
Priority: low · Graph: yes · Manim: no

Correct and well-explained solution with a good probability-only cross-check.

- [Graph] Plot $P_+=\cos^2(\theta/2)$, $P_-=\sin^2(\theta/2)$ and $\Delta S_z/(\hbar/2)=|\sin\theta|$ for $\theta\in[0,\pi]$ on one 2D axis; the crossing of the probabilities at $\theta=\pi/2$ coincides with the maximum uncertainty.
- [Intuition] Add one sentence that $\theta$ is the polar angle of the spin on the Bloch sphere, so $\theta=\pi/2$ is the spin along $+x$, perpendicular to the measurement axis.

### N1841

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/07 Eigenvalues and Eigenvectors/99 Exercises/06 Exercise 6|06 Exercise 6]]  
Priority: low · Graph: yes · Manim: yes

Correct derivation with a justified Rabi-frequency correction and a good spectral explanation; a time plot would show the oscillation immediately.

- [Graph] Plot $P_\uparrow(t)=\cos^2(\Delta t/\hbar)$ and $P_\downarrow(t)=\sin^2(\Delta t/\hbar)$ versus $\Delta t/\hbar\in[0,2\pi]$, marking the full-transfer time $t=\pi\hbar/(2|\Delta|)$ and the period $T=\pi\hbar/|\Delta|$.
- [Manim] Animate the Bloch vector rotating about the $x$ axis from the north pole ($|\uparrow\rangle$) to the south pole and back, with two population bars beside it; the motion shows why the population angular frequency is $2|\Delta|/\hbar$.

### N1842

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/07 Eigenvalues and Eigenvectors/99 Exercises/07 Exercise 7|07 Exercise 7]]  
Priority: medium · Graph: yes · Manim: no

Rigorous and correct ladder-operator proof with careful positivity and domain arguments, but it is long and one physical statement about the zero-point energy is vague.

- [Simplify] Replace "The oscillator cannot have both exactly zero position and exactly zero momentum uncertainty" with the quantitative statement that the vacuum has $\Delta x\,\Delta p=\hbar/2$ (from the computed $\langle x^2\rangle_0$ and $\langle p^2\rangle_0$), the minimum allowed by the Heisenberg relation.
- [Graph] Plot the potential $V/(\hbar\omega)=\tfrac12\xi^2$ versus $\xi=x/\sqrt{\hbar/(m\omega)}\in[-3.5,3.5]$ with horizontal level lines at $E_n/(\hbar\omega)=n+\tfrac12$ for $n=0,\ldots,4$; this shows the equal spacing and the nonzero ground level.
- [Structure] Part (b) mixes the nonexistence proof (fractional values) with the existence construction (raising from $|0\rangle$); split it into two subheadings, "No fractional or negative eigenvalues" and "Every nonnegative integer occurs".
- [Simplify] The question writes $[\hat a,\hat a^\dagger]=1$ and the solution writes $=I$; use one form throughout.

### N1843

Note: [[00 Hilbert Space|00 Hilbert Space]]  
Priority: low · Graph: no · Manim: no

Good motivating hub with a clear comparison table; the last two paragraphs are dense for an overview.

- [Simplify] Shorten the paragraphs "Use the chapter in two stages..." and "For a quick convergence test..." to two sentences each, or move the $1/n$ versus constant-coefficient test into \[\[02 Completeness and Hilbert Space\]\] where completeness is defined.

### N1844

Note: [[01 The Space L2(R)|01 The Space L2(R)]]  
Priority: medium · Graph: yes · Manim: no

Correct examples with checked integrals and a good membership-versus-normalization section; visual intuition for finite versus infinite area is missing.

- [Graph] Plot $|f(x)|^2$ for $e^{-|x|}$, the normalized Gaussian with $\sigma=1$, and the plane wave ($|e^{ikx}|^2=1$) on $x\in[-5,5]$, shading the area under each; the plane-wave area clearly grows without bound as the range widens.
- [Example] Add one example showing that an unbounded function can still be in $L^2$ (e.g. $x^{-1/3}$ on $[0,1]$), with a link to \[\[08 Hilbert Space/99 Exercises/01 Exercise 1|Exercise 1\]\], to correct the intuition that membership requires boundedness.
- [Intuition] In the equivalence-class note, give a concrete case: the function equal to $e^{-|x|}$ except $f(0)=5$ is the same $L^2$ element as $e^{-|x|}$.

### N1845

Note: [[02 Completeness and Hilbert Space|02 Completeness and Hilbert Space]]  
Priority: medium · Graph: yes · Manim: no

Correct definition with a good sequence-space counterexample, but the incompleteness example is abstract and no function-space example is shown.

- [Example] Add the standard function-space counterexample: continuous functions on $[0,1]$ with the $L^2$ norm are incomplete, since $f_n(x)=\tfrac12+\tfrac12\tanh(n(x-\tfrac12))$ is Cauchy and converges in norm to a step function that is not continuous.
- [Graph] Plot that sequence $f_n$ for $n=2,5,20,100$ on $[0,1]$ together with the limiting step, to show a Cauchy sequence whose limit leaves the space.
- [Simplify] The paragraph "In state expansions, the same tail argument..." is abstract; replace it with one concrete sentence pointing to \[\[08 Hilbert Space/99 Exercises/08 Exercise 8|Exercise 8\]\], where this proof is carried out.

### N1846

Note: [[03 Orthonormal Bases|03 Orthonormal Bases]]  
Priority: medium · Graph: yes · Manim: no

Correct definition, Parseval proof, and Fourier orthonormality check; convergence in norm is stated but never visualized, and the chapter references are not linked.

- [Graph] Plot the partial sine sums of $f(x)=1$ on $[0,1]$, $\tfrac4\pi\sum_{k=0}^{K}\sin((2k+1)\pi x)/(2k+1)$ for $K=0,2,10$, to show norm convergence with a persistent overshoot near the endpoints (Gibbs).
- [Structure] Definition 8.3 indexes the basis by $n=0,1,\ldots$, while the Fourier example uses $n\in\mathbb Z$ and the box example uses $n\ge1$; add one sentence that any countable index set is allowed.
- [Links] Link "studied in detail in Chapter 12" to the Fourier Series chapter hub and "verified in Chapter 2" to \[\[05 The Inner Product as an Integral\]\], where the box sine orthogonality is shown.
- [Simplify] Replace "probability of finding the system in its $n$th stationary state" with "probability that an energy measurement gives $E_n$", which is the operational statement.

### N1847

Note: [[04 The Completeness Relation|04 The Completeness Relation]]  
Priority: medium · Graph: yes · Manim: no

Correct and careful about strong versus operator-norm convergence, but the position-space kernel identity has no picture and no finite-dimensional warm-up.

- [Example] Start with the finite case $|\uparrow\rangle\langle\uparrow|+|\downarrow\rangle\langle\downarrow|=I$ in $\mathbb C^2$, written as matrices, before the infinite-dimensional statement.
- [Graph] Plot the partial kernel $K_N(x,\tfrac12)=2\sum_{n=1}^N\sin(n\pi x)\sin(n\pi/2)$ on $[0,1]$ for $N=5,20,60$, showing the peak at $x=1/2$ that becomes narrower and taller (cross-link to Exercise 7).
- [Links] Link "introduced in Chapter 13" to the note "03 The Dirac Delta Distribution" in the Fourier Transform chapter.

### N1848

Note: [[05 Continuous Bases|05 Continuous Bases]]  
Priority: medium · Graph: yes · Manim: no

Correct and appropriately cautious about generalized states, but the discrete-to-continuous correspondence is not shown side by side and only the position basis is treated.

- [Intuition] Add a small table of correspondences: $\delta_{mn}\leftrightarrow\delta(x-x')$, $\sum_n\leftrightarrow\int dx$, $c_n\leftrightarrow\psi(x)$, $|c_n|^2\leftrightarrow|\psi(x)|^2dx$.
- [Graph] Plot unit-area Gaussians $\delta_\varepsilon(x)=e^{-x^2/(2\varepsilon^2)}/(\varepsilon\sqrt{2\pi})$ for $\varepsilon=1,0.3,0.1$ on $[-3,3]$: the area stays 1 while the peak grows, which shows why $\langle x_0|x_0\rangle$ is not a finite norm.
- [Example] Add the momentum basis $\langle x|p\rangle=e^{ipx/\hbar}/\sqrt{2\pi\hbar}$ as a second continuous basis, linking to the plane-wave example in \[\[01 The Space L2(R)\]\].

### N1849

Note: [[06 Finite-Dimensional Systems|06 Finite-Dimensional Systems]]  
Priority: low · Graph: no · Manim: no

Correct and concise; the truncation caveat is valuable.

- [Links] Illustrate the truncation paragraph with a link to the two-level Hamiltonian in \[\[07 Eigenvalues and Eigenvectors/99 Exercises/04 Exercise 4|Chapter 7 Exercise 4\]\], which is exactly such an effective model.

### N1850

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/08 Hilbert Space/07 Common Errors|07 Common Errors]]  
Priority: medium · Graph: no · Manim: no

Correct content, but the note opens with an example of "Error 4" before any error is listed, and Error 1 has no concrete example.

- [Structure] Move the two opening paragraphs (the $(1+x^2)^{-1/2}$ domain example and the three checks) into the Error 4 section, which they illustrate.
- [Example] Give a concrete case for Error 1: the sine series of $f=1$ on $[0,L]$ converges in $L^2$ but equals zero at both endpoints (see \[\[08 Hilbert Space/99 Exercises/04 Exercise 4|Exercise 4\]\]), or the shrinking moving-indicator ("typewriter") sequence, which tends to zero in norm but converges at no point.
- [Simplify] In Error 4, give the domain of $\hat x$ explicitly, $\{\psi\in L^2:\int x^2|\psi|^2dx<\infty\}$, so the opening example has a definition to refer to.

### N1851

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/08 Hilbert Space/08 Chapter Summary|08 Chapter Summary]]  
Priority: low · Graph: no · Manim: no

Accurate summary; the section separating the two meanings of completeness is helpful.

- [Structure] No change needed.

### N1852

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/08 Hilbert Space/09 Exercises|09 Exercises]]  
Priority: low · Graph: no · Manim: no

Clear exercise index with useful guidance; no change needed.

- [Structure] No change needed.

### N1853

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/08 Hilbert Space/99 Exercises/01 Exercise 1|01 Exercise 1]]  
Priority: low · Graph: yes · Manim: no

All integrals are correct (3, divergent, π/2, 1/8, 2L verified) and the endpoint generalization is a good addition.

- [Graph] Plot the squared integrands $x^{-2/3}$ and $x^{-4/3}$ on $(0,1]$ (y clipped at about 50) to show that both blow up at zero but only the first has finite area, matching the threshold $a<1/2$.

### N1854

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/08 Hilbert Space/99 Exercises/02 Exercise 2|02 Exercise 2]]  
Priority: low · Graph: no · Manim: no

Correct and clear; the remark that this check does not prove completeness is well placed.

- [Structure] No change needed.

### N1855

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/08 Hilbert Space/99 Exercises/03 Exercise 3|03 Exercise 3]]  
Priority: low · Graph: no · Manim: no

Correct and clear, with good caveats on degeneracy and phases.

- [Structure] No change needed.

### N1856

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/08 Hilbert Space/99 Exercises/04 Exercise 4|04 Exercise 4]]  
Priority: low · Graph: yes · Manim: yes

Correct coefficients, symmetry argument, and Parseval derivation of π²/8, with a useful truncation estimate.

- [Graph] Plot the partial sums $\tfrac4\pi\sum_{k=0}^{K}\sin((2k+1)\pi x/L)/(2k+1)$ with $L=1$ for $K=0,1,4,20$ together with $f=1$; this shows the first-mode fraction $8/\pi^2\approx0.81$, the endpoint zeros, and the Gibbs overshoot.
- [Manim] Animate adding odd sine modes one by one to approach $f=1$, with a running bar for $\sum|c_n|^2/L$ approaching 1; the motion shows norm convergence while the endpoint values stay zero.

### N1857

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/08 Hilbert Space/99 Exercises/05 Exercise 5|05 Exercise 5]]  
Priority: low · Graph: no · Manim: no

Correct derivation with a proper domain note and a useful units check.

- [Structure] No change needed.

### N1858

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/08 Hilbert Space/99 Exercises/06 Exercise 6|06 Exercise 6]]  
Priority: low · Graph: yes · Manim: no

Correct normalization, coefficients, and numerical sum (0.999999048 and the norm error 9.76e-4 confirmed), with a good distinction between probability error and norm error.

- [Graph] Plot $\psi(x)=\sqrt{30}\,x(1-x)$ and its one-term approximation $c_1\phi_1(x)=\tfrac{8\sqrt{30}}{\pi^3}\sin(\pi x)$ on $[0,1]$ (with $L=1$), plus their difference scaled up, to show why the first mode carries 99.86 % of the probability.
- [Simplify] The note and its physical-quantity table write the box functions as $\signal{\phi_n}$, while \[\[03 Orthonormal Bases\]\] writes the same functions uncolored; use one convention across the chapter.

### N1859

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/08 Hilbert Space/99 Exercises/07 Exercise 7|07 Exercise 7]]  
Priority: low · Graph: yes · Manim: yes

Correct and rigorous kernel analysis (Dirichlet form and diagonal growth both verified); the formation of the delta peak would benefit from a picture.

- [Graph] Plot $K_N(x,x')$ with $L=1$ and $x'=0.3$ for $N=5,20,60$ on $x\in[0,1]$, showing the peak of height about $N$ at $x'$ and the oscillating tails.
- [Manim] Animate $K_N(x,0.3)$ as $N$ increases from 1 to 60 while the shaded area under the central peak stays near 1, illustrating that the kernel concentrates but is defined by its integral action.

### N1860

Note: [[02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/02 Linear Algebra/08 Hilbert Space/99 Exercises/08 Exercise 8|08 Exercise 8]]  
Priority: low · Graph: no · Manim: no

Correct and complete proof of Riesz–Fischer with a good constructive example and clear physical interpretation.

- [Structure] No change needed.
