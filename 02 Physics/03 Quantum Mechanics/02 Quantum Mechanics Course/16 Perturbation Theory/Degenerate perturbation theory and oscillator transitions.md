---
title: "Degenerate perturbation theory and oscillator transitions"
---

> [!TLDR]
> Diagonalize perturbations within degenerate subspaces and follow the response of an oscillator to a force.

## Worked lecture material

Quantum Mechanics II with Y. Shirman. Homework is graded for completeness and counts for about 10%. The midterm is around week 6. The notes flag February 7 and 9 as possible instructor absences. The final is weighted about 1.5–2 times as much as the midterm. The textbooks are Baym and Sakurai, and lecture notes will be distributed. Office questions are welcome on a walk-in basis in FRH 3123.

Topics listed are the variational method, which is important for the cumulative exam, possible coverage of perturbation theory, the WKB approximation, and angular momentum.

##### Degenerate perturbation theory review

Write the perturbed Hamiltonian as $H=H_0+V$ and expand the state in the unperturbed basis:
$$
\lvert i\rangle=\sum_{i'} C_{ii'}\lvert i'\rangle_0,\qquad
C_{ii'}^{(0)}=\delta_{ii'},\qquad
C_{ii'}^{(1)}=O(\epsilon)\quad(i'\ne i).
$$
There is no need to compute the first-order diagonal coefficient directly. The norm of $\lvert i\rangle$ is one, so
$$
1=|C_{ii}|^2+\sum_{i'\ne i}|C_{ii'}|^2.
$$
The sum is of order $\epsilon^2$. With the phase chosen so that the diagonal coefficient is real and positive, $C_{ii}=1+O(\epsilon^2)$. Hence $C_{ii}^{(1)}=0$ and the second-order correction is $O(\epsilon^2)$.

The nondegenerate mixing formula contains the ratio
$$
\frac{\energy{V}_{ji}^{(0)}}{\energy{E}_i^{(0)}-\energy{E}_j^{(0)}}.
$$
It breaks down when the energy separation tends to zero with a nonzero numerator. If two unperturbed eigenstates have equal energies, any nonzero linear combination is also an eigenstate at that energy. Choose a basis within the degenerate subspace that diagonalizes the perturbation matrix. For two states and a real symmetric matrix, a rotation has the form
$$
\begin{aligned}
\lvert\widetilde 1\rangle&=\cos\alpha\lvert1\rangle+\sin\alpha\lvert2\rangle,\\
\lvert\widetilde 2\rangle&=-\sin\alpha\lvert1\rangle+\cos\alpha\lvert2\rangle.
\end{aligned}
$$

For $H=H_0+V$, the perturbation matrix elements are $\energy{V}_{ij}=\langle i\vert V\vert j\rangle$ in the original basis and $\energy{V}_{\widetilde i\widetilde j}=\langle\widetilde i\vert V\vert\widetilde j\rangle$ in the rotated basis. In nondegenerate perturbation theory, the first-order energy shift is $\Delta\energy{E}_i=\energy{V}_{ii}$, and the first-order admixture of $j$ into $i$ is $\energy{V}_{ji}/(\energy{E}_i^{(0)}-\energy{E}_j^{(0)})$.

For degenerate states, choose the rotation so that the off-diagonal matrix element is zero:
$$
\begin{aligned}
\energy{V}_{\widetilde i\widetilde j}
&=(\cos\alpha\langle i\rvert+\sin\alpha\langle j\rvert)
V(-\sin\alpha\lvert i\rangle+\cos\alpha\lvert j\rangle)\\
&=-\cos\alpha\sin\alpha\,\energy{V}_{ii}
-\sin^2\alpha\,\energy{V}_{ji}
+\cos^2\alpha\,\energy{V}_{ij}
+\sin\alpha\cos\alpha\,\energy{V}_{jj}=0.
\end{aligned}
$$
In the two-dimensional subspace the transformation diagonalizes the matrix:
$$
\begin{pmatrix}\energy{V}_{11}&\energy{V}_{12}\\\energy{V}_{21}&\energy{V}_{22}\end{pmatrix}
\longrightarrow
\begin{pmatrix}
\energy{V}_{\widetilde 1\widetilde 1}&0\\
0&\energy{V}_{\widetilde 2\widetilde 2}
\end{pmatrix}.
$$
The normalized eigenvectors are the rotated states on the previous page. The restriction of $H_0$ to this subspace is $\energy{E}_0 I$, so both states remain eigenstates of $H_0$. The projected perturbed Hamiltonian has the energies
$$
\energy{E}_{\widetilde 1}=\energy{E}_0+\energy{V}_{\widetilde 1\widetilde 1},\qquad
\energy{E}_{\widetilde 2}=\energy{E}_0+\energy{V}_{\widetilde 2\widetilde 2}.
$$
These are the first-order energies for the full system. At the bottom of the page, the notes set up the next order with products $\langle i\vert V\vert k\rangle_0\,{}_0\langle k\vert V\vert j\rangle$ summed over intermediate states. Those products form the numerator of the second-order correction. The page sketches the Hamiltonian as the common unperturbed energy times the identity plus perturbative corrections.

##### Two-dimensional harmonic oscillator

For a two-dimensional oscillator with common angular frequency $\signal{\omega}$, the unperturbed Hamiltonian and the quadratic perturbation are
$$
H_0=\hbar\signal{\omega}(a_x^\dagger a_x+a_y^\dagger a_y+1),\qquad
V=\hbar\signal{\delta}
\begin{pmatrix}a_x^\dagger&a_y^\dagger\end{pmatrix}
\begin{pmatrix}C_{11}&C_{12}\\C_{21}&C_{22}\end{pmatrix}
\begin{pmatrix}a_x\\a_y\end{pmatrix}.
$$
Diagonalizing the quadratic form gives new ladder operators $\widetilde a_1,\widetilde a_2$ and angular frequencies $\signal{\omega}_j=\signal{\omega}+\signal{\lambda}_j$, with $\signal{\lambda}_j$ the eigenvalues of $\signal{\delta} C$. The notes write the result in the standard oscillator form with a half quantum of energy per mode. For the displayed $V$, this form differs from $H_0+V$ by the additive constant $\hbar(\signal{\lambda}_1+\signal{\lambda}_2)/2$.
$$
H=\hbar\signal{\omega}_1(\widetilde a_1^\dagger\widetilde a_1+1/2)
+\hbar\signal{\omega}_2(\widetilde a_2^\dagger\widetilde a_2+1/2).
$$

##### Time-dependent perturbation theory

Assume the perturbation $V(\mechanical{t})$ is small and seek an approximate solution. For an oscillator with
$$
H_0=\frac{\mechanical{p}^2}{2\mechanical{m}}+\frac{\mechanical{m}\signal{\omega}^2\mechanical{x}^2}{2},
$$
one example is a quartic term switched on at $\mechanical{t}_0$:
$$
V(\mechanical{t})=\frac{\energy{\lambda}}4\mechanical{x}^4\,\Theta(\mechanical{t}-\mechanical{t}_0).
$$
An initial unperturbed state $\lvert i\rangle_0$ can be expanded in eigenstates of the new Hamiltonian. The overlap coefficients give the amplitudes to find the system in those states after switching.

![[Kyle Kabasares - Quantum Mechanics II - Sudden switching of a perturbation.png|**Fig. 1** The perturbation changes abruptly at the switching time.]]

In the Schrödinger picture, the states evolve, while operators without explicit time dependence are fixed. Expand the initial state as $\lvert\alpha,\mechanical{t}_0\rangle_S=\sum_n c_n\lvert n,\mechanical{t}_0\rangle$. Under the time-independent $H_0$,
$$
\begin{aligned}
i\hbar\frac{\partial}{\partial\mechanical{t}}\lvert\alpha,\mechanical{t}\rangle_S
&=H_0\lvert\alpha,\mechanical{t}\rangle_S,\\
\lvert\alpha,\mechanical{t}\rangle_S
&=e^{-iH_0(\mechanical{t}-\mechanical{t}_0)/\hbar}\lvert\alpha,\mechanical{t}_0\rangle_S\\
&=\sum_n c_n e^{-i\energy{E}_n^{(0)}(\mechanical{t}-\mechanical{t}_0)/\hbar}\lvert n,\mechanical{t}_0\rangle.
\end{aligned}
$$
The exponential is the evolution operator. With $\Delta\mechanical{t}=\mechanical{t}-\mechanical{t}_0$, its power series begins
$$
e^{-iH_0\Delta\mechanical{t}/\hbar}
=I-\frac{iH_0\Delta\mechanical{t}}{\hbar}
-\frac{H_0^2(\Delta\mechanical{t})^2}{2\hbar^2}
+\frac{iH_0^3(\Delta\mechanical{t})^3}{3!\hbar^3}+\cdots.
$$

Define the Schrödinger-picture evolution operator by
$$
\lvert\alpha,\mechanical{t}\rangle_S=U(\mechanical{t},\mechanical{t}_0)\lvert\alpha,\mechanical{t}_0\rangle_S,\qquad
i\hbar\frac{\partial U}{\partial\mechanical{t}}=H(\mechanical{t})U.
$$
For time-independent $H$, $U(\mechanical{t},\mechanical{t}_0)=e^{-iH(\mechanical{t}-\mechanical{t}_0)/\hbar}$. If the initial state is an eigenstate of $H$ with energy $\energy{E}$, its evolution is multiplication by the corresponding scalar phase. The operator exponential can be expanded as the identity plus the first power of $-iH(\mechanical{t}-\mechanical{t}_0)/\hbar$, half its square, and higher powers.

If $H$ were a scalar function, the solution would be $\exp[-(i/\hbar)\int_{\mechanical{t}_0}^{\mechanical{t}}H(\mechanical{t}')\,d\mechanical{t}']$. For operators, $H$ at different times generally fails to commute. For example, take
$$
H(\mechanical{t})=\frac{\mechanical{p}^2}{2\mechanical{m}}
+\frac{\mechanical{m}\signal{\omega}^2\mechanical{x}^2}{2}
+\energy{\lambda}_n\mechanical{x}^n f(\mechanical{t}).
$$
The position-dependent terms commute with each other. Using $[\mechanical{x},\mechanical{p}]=i\hbar$, the remaining commutator is
$$
[H(\mechanical{t}),H(\mechanical{t}')]
=\frac{in\hbar\energy{\lambda}_n}{2\mechanical{m}}
\bigl(\mechanical{x}^{n-1}\mechanical{p}+\mechanical{p}\mechanical{x}^{n-1}\bigr)
\bigl(f(\mechanical{t})-f(\mechanical{t}')\bigr).
$$

The factorization $e^{A+B}=e^Ae^B$ is valid when $A$ and $B$ commute. For small $\epsilon$, the leading noncommuting correction is
$$
e^{\epsilon(A+B)}=e^{\epsilon A}e^{\epsilon B}
e^{-\epsilon^2[A,B]/2+O(\epsilon^3)}.
$$
Split the time interval into short steps and compose the propagators in chronological order, with the latest factor on the left:
$$
U(\mechanical{t},\mechanical{t}_0)=
U(\mechanical{t},\mechanical{t}-\Delta\mechanical{t})
U(\mechanical{t}-\Delta\mechanical{t},\mechanical{t}-2\Delta\mechanical{t})
\cdots U(\mechanical{t}_0+\Delta\mechanical{t},\mechanical{t}_0).
$$
The time-ordering operator $\mathcal T$ expresses the limit as
$$
U(\mechanical{t},\mechanical{t}_0)=
\mathcal T\exp\left[-\frac{i}{\hbar}
\int_{\mechanical{t}_0}^{\mechanical{t}}H(\mechanical{t}')\,d\mechanical{t}'\right].
$$

## Source

Kyle Kabasares, *Quantum Mechanics II (Physics 215B, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{E}_i^{(0)}$ | $\unit{J}$ | Unperturbed energy | Energy eigenvalue of state $i$ before adding the perturbation. |
| $\energy{V}_{ji}^{(0)}$ | $\unit{J}$ | Perturbation matrix element | Matrix element of $V$ between unperturbed states. |
| $\Delta\energy{E}_i$, $\energy{E}_{\widetilde i}$ | $\unit{J}$ | Energy shift and perturbed energy | First-order shift and energy of a state selected by diagonalization. |
| $\energy{V}_{ij}$, $\energy{V}_{\widetilde i\widetilde j}$ | $\unit{J}$ | Perturbation matrix elements | Entries in the original and rotated bases. |
| $\hbar$ | $\unit{J\,s}$ | Reduced Planck constant | Planck constant divided by $2\pi$. |
| $\signal{\omega}$, $\signal{\omega}_j$ | $\unit{rad\,s^{-1}}$ | Angular frequencies | Common unperturbed frequency and frequencies of the new oscillator modes. |
| $\signal{\delta}$, $\signal{\lambda}_j$ | $\unit{rad\,s^{-1}}$ | Frequency parameters | Perturbation scale and resulting shifts of the mode frequencies. |
| $\mechanical{t}$, $\mechanical{t}_0$, $\Delta\mechanical{t}$ | $\unit{s}$ | Time | Observation time, initial or switching time, and elapsed time. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Particle mass. |
| $\mechanical{x}$ | $\unit{m}$ | Position | Displacement along the oscillator axis. |
| $\mechanical{p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | Momentum along the oscillator axis. |
| $\energy{\lambda}$ | $\unit{J\,m^{-4}}$ | Quartic coupling | Coefficient controlling the strength of the quartic potential. |
| $\energy{E}$, $\energy{E}_0$ | $\unit{J}$ | Energy eigenvalue | Energy of an eigenstate, including the common energy of a degenerate subspace. |
| $\energy{\lambda}_n$ | $\unit{J\,m^{-n}}$ | Power-law coupling | Coefficient of the perturbation proportional to the $n$th power of displacement. |
| $E$ | $\unit{N}$ | Linear perturbation coefficient | Electric field strength multiplied by the signed charge, with the sign set by the potential convention. |
| $\Delta\energy{E}$, $\delta\energy{E}$ | $\unit{J}$ | Energy scales | Width over which the continuum factors change and spacing of individual final levels. |
| $c$ | $\unit{m\,s^{-1}}$ | Speed of light | Vacuum light speed used in the time coordinate and Maxwell equations. |
| $\energy{V}_0$, $\energy{V}$ | $\unit{J}$ | Well depth and potential energy | Positive depth and the signed binding potential as a function of radius. |
| $A$, $B$ | $\unit{s^{-1}}$ | Mode emission and absorption coefficients | Spontaneous rate and induced transition rate per photon for a single resonant mode. |
