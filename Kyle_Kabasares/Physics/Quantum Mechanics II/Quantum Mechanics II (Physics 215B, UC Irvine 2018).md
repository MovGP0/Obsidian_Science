---
title: "Quantum Mechanics II (Physics 215B, UC Irvine 2018)"
---

> [!TLDR]
> These lectures cover degenerate and time-dependent perturbation theory, light–matter interactions, gauge invariance, and angular momentum. They apply these ideas to spin coupling and Zeeman splitting and derive the WKB quantization condition.

Source notes by Kyle Kabasares. [[Quantum Mechanics II (Physics 215B, UC Irvine 2018).pdf|Original PDF]].

Transcribed PDF pages 1–84 of 84.

### PDF page 1

#### Lecture, January 8, 2018

Quantum Mechanics II with Y. Shirman. Homework is graded for completeness and counts for about 10%. The midterm is around week 6. The notes flag February 7 and 9 as possible instructor absences. The final is weighted about 1.5–2 times as much as the midterm. The textbooks are Baym and Sakurai, and lecture notes will be distributed. Office questions are welcome on a walk-in basis in FRH 3123.

Topics listed are the variational method, which is important for the cumulative exam, possible coverage of perturbation theory, the WKB approximation, and angular momentum.

#### Degenerate perturbation theory review

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

### PDF page 2

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

### PDF page 3

#### Two-dimensional harmonic oscillator

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

#### Time-dependent perturbation theory

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

### PDF page 4

#### Lecture, January 10, 2018

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

### PDF page 5

For $H=H_0+V(\mechanical{t})$, factor out the evolution generated by $H_0$. If the system starts in an unperturbed eigenstate, for example state 0, then $c_n(\mechanical{t}_0)=\delta_{n0}$. Write
$$
\lvert\alpha,\mechanical{t}\rangle_S
=\sum_n c_n(\mechanical{t})e^{-i\energy{E}_n^{(0)}(\mechanical{t}-\mechanical{t}_0)/\hbar}
\lvert n,\mechanical{t}_0\rangle_S.
$$
The phase factors describe the unperturbed evolution. The changing coefficients account for the perturbation. Substitute the expansion into the Schrödinger equation. Differentiation of the phase gives a term that cancels $H_0$ acting on each eigenstate, leaving
$$
i\hbar\sum_n \dot c_n e^{-i\energy{E}_n^{(0)}(\mechanical{t}-\mechanical{t}_0)/\hbar}\lvert n,\mechanical{t}_0\rangle_S
=V(\mechanical{t})\sum_n c_n e^{-i\energy{E}_n^{(0)}(\mechanical{t}-\mechanical{t}_0)/\hbar}\lvert n,\mechanical{t}_0\rangle_S.
$$
Project onto state $k$ and remove its phase:
$$
i\hbar\dot c_k
=\sum_n \energy{V}_{kn}(\mechanical{t})c_n(\mechanical{t})
e^{i(\energy{E}_k^{(0)}-\energy{E}_n^{(0)})(\mechanical{t}-\mechanical{t}_0)/\hbar}.
$$
The notes refer to Landau and Lifshitz for perturbation theory.

#### Heisenberg picture

The state $\lvert\alpha\rangle_H=U^\dagger\lvert\alpha,\mechanical{t}\rangle_S=\lvert\alpha,\mechanical{t}_0\rangle_S$ is fixed. The operator evolves as $O_H=U^\dagger O_S U$, with inverse relation $O_S=UO_HU^\dagger$. The expectation value is the same in both pictures:
$$
{}_S\langle\alpha,\mechanical{t}\vert O_S\vert\alpha,\mechanical{t}\rangle_S
={}_H\langle\alpha\vert O_H\vert\alpha\rangle_H.
$$
Differentiate $U^\dagger O_S U$ and use the equation for $U$. With $H_H=U^\dagger H U$, the result is
$$
\frac{dO_H}{d\mechanical{t}}
=\frac{i}{\hbar}[H_H,O_H]+U^\dagger\frac{\partial O_S}{\partial\mechanical{t}}U.
$$
The second term is zero when $O_S$ has no explicit time dependence.

### PDF page 6

#### Interaction picture

The Heisenberg picture transforms $O_S$ by the full evolution operator. The interaction picture instead uses the unperturbed evolution. Set $\mechanical{t}_0=0$ and write $U_0=e^{-iH_0\mechanical{t}/\hbar}$. The transformed operator and perturbation are
$$
O_I=U_0^\dagger O_S U_0,\qquad
V_I(\mechanical{t})=U_0^\dagger V(\mechanical{t})U_0.
$$
The equation for an interaction-picture operator is
$$
\frac{dO_I}{d\mechanical{t}}
=U_0^\dagger\frac{\partial O_S}{\partial\mechanical{t}}U_0
+\frac{i}{\hbar}[H_0,O_I].
$$
In particular, the time derivative of $V_I$ contains the transformed explicit derivative of $V$ and the commutator $(i/\hbar)[H_0,V_I]$.

The interaction-picture state is $\lvert\alpha,\mechanical{t}\rangle_I=U_0^\dagger\lvert\alpha,\mechanical{t}\rangle_S$. The inverse relation is $\lvert\alpha,\mechanical{t}\rangle_S=U_0\lvert\alpha,\mechanical{t}\rangle_I$. In the Schrödinger picture $H_0+V$ generates the evolution, and in the Heisenberg picture the state is fixed. In the interaction picture the product rule gives
$$
\begin{aligned}
i\hbar\frac{d}{d\mechanical{t}}\lvert\alpha,\mechanical{t}\rangle_I
&=-H_0U_0^\dagger\lvert\alpha,\mechanical{t}\rangle_S
+U_0^\dagger(H_0+V)\lvert\alpha,\mechanical{t}\rangle_S\\
&=U_0^\dagger V\lvert\alpha,\mechanical{t}\rangle_S.
\end{aligned}
$$
The two $H_0$ terms cancel because $H_0$ commutes with $U_0^\dagger$. Substitute the inverse state transformation on the right to obtain $i\hbar\,d\lvert\alpha,\mechanical{t}\rangle_I/d\mechanical{t}=V_I\lvert\alpha,\mechanical{t}\rangle_I$.

### PDF page 7

The interaction-picture state satisfies a Schrödinger-type equation with $V_I$ as the generator:
$$
i\hbar\frac{d}{d\mechanical{t}}\lvert\alpha,\mechanical{t}\rangle_I=V_I(\mechanical{t})\lvert\alpha,\mechanical{t}\rangle_I.
$$
Expand it as $\sum_n c_n(\mechanical{t})\lvert n\rangle$ in the time-independent basis of $H_0$. Projection onto $\langle m\rvert$ gives
$$
i\hbar\dot c_m=\sum_n (\energy{V}_I)_{mn}c_n,\qquad
(\energy{V}_I)_{mn}
=\langle m\vert U_0^\dagger VU_0\vert n\rangle
=e^{i\signal{\omega}_{mn}\mechanical{t}}\energy{V}_{mn},
\qquad
\signal{\omega}_{mn}=\frac{\energy{E}_m^{(0)}-\energy{E}_n^{(0)}}{\hbar}.
$$

#### Discussion, January 12, 2018

Three driven oscillator examples, associated with chapter 5 of Sakurai, use a sinusoidal drive $\mechanical{F}_0\mechanical{x}\cos(\signal{\omega}\mechanical{t})$, a step $\mechanical{F}_0\mechanical{x}\Theta(\mechanical{t})$, or a pulse $\mechanical{F}_0\mechanical{x}[\Theta(\mechanical{t})-\Theta(\mechanical{t}-\mechanical{t}_0)]$ of duration $\mechanical{t}_0>0$.

![[Kyle Kabasares - Quantum Mechanics II - Force step at time zero.png|**Fig. 2** The linear perturbation is zero before switching and constant afterward.]]

With a constant term $\mechanical{F}\mechanical{x}$, complete the square in the oscillator potential:
$$
\frac{\mechanical{m}\signal{\omega}^2\mechanical{x}^2}{2}+\mechanical{F}\mechanical{x}
=\frac{\mechanical{m}\signal{\omega}^2}{2}(\mechanical{x}-\mechanical{x}_0)^2
-\frac{\mechanical{F}^2}{2\mechanical{m}\signal{\omega}^2},\qquad
\mechanical{x}_0=-\frac{\mechanical{F}}{\mechanical{m}\signal{\omega}^2}.
$$
The ground-state spatial wavefunction is a Gaussian. In scaled coordinates the notes write $e^{-x^2}$ before the shift and $e^{-(x-x_0)^2}$ for the new ground state, omitting normalization. An eigenstate has a phase $e^{-i\signal{\omega}_n(\mechanical{t}-\mechanical{t}_i)}$ with $\signal{\omega}_n=\energy{E}_n/\hbar$. The two normalized ground-state wavefunctions have an overlap $\int(\psi_0^{\mathrm{unpert}})^*\psi_0^{\mathrm{pert}}\,d\mechanical{x}$ less than one for a nonzero shift. Thus immediately after a sudden switch, the original ground state is not entirely in the new ground state.

### PDF page 8

During the force pulse, expand the original ground state in the shifted eigenfunctions. For real oscillator eigenfunctions the first two coefficients are
$$
c_0=\int\psi_0(\mechanical{x})\psi_0(\mechanical{x}-\mechanical{x}_0)\,d\mechanical{x},
\qquad
c_1=\int\psi_0(\mechanical{x})\psi_1(\mechanical{x}-\mechanical{x}_0)\,d\mechanical{x}.
$$
For $0<\mechanical{t}<\mechanical{t}_0$, the state evolves as
$$
\psi(\mechanical{x},\mechanical{t})
=\sum_n c_n e^{-i\signal{\omega}_n^{\mathrm{pert}}\mechanical{t}}\,
\psi_n(\mechanical{x}-\mechanical{x}_0).
$$
When the force switches off at $\mechanical{t}_0$, project the evolved state onto the original basis. In particular,
$$
\widetilde c_0=\int\psi_0^*(\mechanical{x})\psi(\mechanical{x},\mechanical{t}_0)\,d\mechanical{x}
=\sum_n |c_n|^2 e^{-i\signal{\omega}_n^{\mathrm{pert}}\mechanical{t}_0}.
$$
The squared overlaps weight the terms in this return amplitude. The coefficients for excited states after the pulse require projection onto their own unperturbed eigenfunctions.

For a sinusoidal drive, let $V(\mechanical{t})=\mechanical{F}\mechanical{x}\cos(\signal{\omega}\mechanical{t})$. The unperturbed stationary states solve $H_0\psi_n=\energy{E}_n^{(0)}\psi_n$ and have zero mean position by parity. Starting in state $i$, the interaction-picture equation at first order uses only the unperturbed initial state on its right:
$$
\dot c_n^{(1)}=-\frac{i}{\hbar}e^{i\signal{\omega}_{ni}\mechanical{t}}\energy{V}_{ni}(\mechanical{t}),
\qquad
c_n^{(1)}(\mechanical{t})=-\frac{i}{\hbar}\int_0^{\mechanical{t}}
\energy{V}_{ni}(\mechanical{t}')e^{i\signal{\omega}_{ni}\mechanical{t}'}\,d\mechanical{t}'.
$$
Here $\energy{V}_{ni}=\mechanical{F}\cos(\signal{\omega}\mechanical{t})\langle n\vert\mechanical{x}\vert i\rangle$. For oscillator frequency $\signal{\omega}_0$,
$$
\mechanical{x}=\sqrt{\frac{\hbar}{2\mechanical{m}\signal{\omega}_0}}(a+a^\dagger).
$$
From the ground state, only the first excited state couples at first order, so $\lvert\alpha,\mechanical{t}\rangle_I=\lvert0\rangle+c_1^{(1)}(\mechanical{t})\lvert1\rangle$ to this order.

### PDF page 9

For the oscillator initially in state $i$, the matrix element of the sinusoidal perturbation is
$$
\energy{V}_{ni}(\mechanical{t})
=\mechanical{F}_0\cos(\signal{\omega}\mechanical{t})\sqrt{\frac{\hbar}{2\mechanical{m}\signal{\omega}_0}}
\left(\sqrt{i+1}\,\delta_{n,i+1}+\sqrt i\,\delta_{n,i-1}\right).
$$
The interaction-picture state is $\lvert i\rangle+c_{i+1}^{(1)}\lvert i+1\rangle+c_{i-1}^{(1)}\lvert i-1\rangle$ to first order. To write the two integrals together, let $g(\nu)=(e^{i\nu\mechanical{t}}-1)/\nu$, using its limit at $\nu=0$. Then
$$
\begin{aligned}
c_{i+1}^{(1)}&=-\frac{\mechanical{F}_0\sqrt{i+1}}{2\sqrt{2\hbar\mechanical{m}\signal{\omega}_0}}
\left[g(\signal{\omega}_0+\signal{\omega})+g(\signal{\omega}_0-\signal{\omega})\right],\\
c_{i-1}^{(1)}&=-\frac{\mechanical{F}_0\sqrt i}{2\sqrt{2\hbar\mechanical{m}\signal{\omega}_0}}
\left[g(-\signal{\omega}_0+\signal{\omega})+g(-\signal{\omega}_0-\signal{\omega})\right].
\end{aligned}
$$

From the ground state the second coefficient is zero. Use $\lvert\alpha,\mechanical{t}\rangle_S=U_0\lvert\alpha,\mechanical{t}\rangle_I$, which attaches phases $e^{-i\signal{\omega}_0\mechanical{t}/2}$ and $e^{-3i\signal{\omega}_0\mechanical{t}/2}$ to $\lvert0\rangle$ and $\lvert1\rangle$. The matrix element of $a+a^\dagger$ between these states is one. Both the bra and ket cross terms contribute, giving
$$
\begin{aligned}
\langle\mechanical{x}(\mechanical{t})\rangle
&=2\sqrt{\frac{\hbar}{2\mechanical{m}\signal{\omega}_0}}\,
\operatorname{Re}\!\left[c_1^{(1)}e^{-i\signal{\omega}_0\mechanical{t}}\right]\\
&=-\frac{\mechanical{F}_0}{\mechanical{m}(\signal{\omega}_0^2-\signal{\omega}^2)}
\bigl[\cos(\signal{\omega}\mechanical{t})-\cos(\signal{\omega}_0\mechanical{t})\bigr].
\end{aligned}
$$
The handwritten result retains an extra factor of $1/2$. The expression here includes both cross terms.

#### Lecture, January 17, 2018

The evolution operator satisfies $i\hbar\,\partial U/\partial\mechanical{t}=HU$. For the constant $H_0$, it is the power-series exponential $e^{-iH_0(\mechanical{t}-\mechanical{t}_0)/\hbar}$. For a generally noncommuting time-dependent $H$, neither the constant-Hamiltonian expression nor the exponential of the integral alone gives the propagator. Over an infinitesimal interval $\Delta\mechanical{t}$, $e^{-iH(\mechanical{t})\Delta\mechanical{t}/\hbar}$ is a good approximation.

### PDF page 10

The short-step expansion of $e^{-iH\Delta\mechanical{t}/\hbar}$ is $I-iH\Delta\mechanical{t}/\hbar-H^2(\Delta\mechanical{t})^2/(2\hbar^2)+\cdots$. For a continuous $H$, the commutator of Hamiltonians at two nearby times vanishes as the time separation tends to zero. Finite steps must still be composed in order.

Define the interaction-picture propagator by $\lvert\alpha,\mechanical{t}\rangle_I=U_I(\mechanical{t},\mechanical{t}_0)\lvert\alpha,\mechanical{t}_0\rangle_I$. Applying the picture transformations at both endpoints gives
$$
U_I(\mechanical{t},\mechanical{t}_0)
=e^{iH_0\mechanical{t}/\hbar}U(\mechanical{t},\mechanical{t}_0)e^{-iH_0\mechanical{t}_0/\hbar}.
$$
It satisfies $i\hbar\,\partial U_I/\partial\mechanical{t}=V_I(\mechanical{t})U_I$, with $U_I(\mechanical{t}_0,\mechanical{t}_0)=I$. Integrate this equation to obtain
$$
U_I(\mechanical{t},\mechanical{t}_0)
=I-\frac{i}{\hbar}\int_{\mechanical{t}_0}^{\mechanical{t}}
V_I(\mechanical{t}')U_I(\mechanical{t}',\mechanical{t}_0)\,d\mechanical{t}'.
$$
Assume $V=O(\epsilon)$ so that $U_I=I+O(\epsilon)$. The first iteration replaces the propagator inside the integral with $I$:
$$
U_I^{[1]}(\mechanical{t},\mechanical{t}_0)
=I-\frac{i}{\hbar}\int_{\mechanical{t}_0}^{\mechanical{t}}V_I(\mechanical{t}')\,d\mechanical{t}'.
$$
The second iteration substitutes that result into the same integral:
$$
U_I^{[2]}=I-\frac{i}{\hbar}
\int_{\mechanical{t}_0}^{\mechanical{t}}V_I(\mechanical{t}')
\left[I-\frac{i}{\hbar}\int_{\mechanical{t}_0}^{\mechanical{t}'}
V_I(\mechanical{t}'')\,d\mechanical{t}''\right]d\mechanical{t}'.
$$

### PDF page 11

Iteration gives the Dyson series. Its term of order $n$ is
$$
\left(-\frac{i}{\hbar}\right)^n
\int_{\mechanical{t}_0}^{\mechanical{t}}d\mechanical{t}_1
\int_{\mechanical{t}_0}^{\mechanical{t}_1}d\mechanical{t}_2\cdots
\int_{\mechanical{t}_0}^{\mechanical{t}_{n-1}}d\mechanical{t}_n\,
V_I(\mechanical{t}_1)V_I(\mechanical{t}_2)\cdots V_I(\mechanical{t}_n).
$$
The zeroth term is $I$. The nested integration orders the times from latest to earliest, with the latest operator on the left.

At second order, the integration region is one triangle of the square $[\mechanical{t}_0,\mechanical{t}]^2$. Exchange the two time labels to write the same contribution over the other triangle with the operator factors reversed. Averaging the two equivalent expressions gives one half of an integral over the square:
$$
\begin{aligned}
&\int_{\mechanical{t}_0}^{\mechanical{t}}d\mechanical{t}'
\int_{\mechanical{t}_0}^{\mechanical{t}'}d\mechanical{t}''\,
V_I(\mechanical{t}')V_I(\mechanical{t}'')\\
&\qquad=\frac12\int_{\mechanical{t}_0}^{\mechanical{t}}d\mechanical{t}'
\int_{\mechanical{t}_0}^{\mechanical{t}}d\mechanical{t}''\,
\mathcal T[V_I(\mechanical{t}')V_I(\mechanical{t}'')].
\end{aligned}
$$

![[Kyle Kabasares - Quantum Mechanics II - Time ordering integration square.png|**Fig. 3** The diagonal separates the two orderings of the integration times.]]

The time-ordering operation is
$$
\begin{aligned}
\mathcal T[V_I(\mechanical{t}')V_I(\mechanical{t}'')]
={}&\Theta(\mechanical{t}'-\mechanical{t}'')V_I(\mechanical{t}')V_I(\mechanical{t}'')\\
&+\Theta(\mechanical{t}''-\mechanical{t}')V_I(\mechanical{t}'')V_I(\mechanical{t}').
\end{aligned}
$$
For three factors the operation similarly sorts all three times. In a time-ordered product of fermionic operators, exchanging two fermionic factors adds a minus sign. The terms above use the usual time ordering for perturbation Hamiltonians.

If $V_I$ commutes with itself at all pairs of times, the second-order integral before its coefficient is $\tfrac12[\int V_I\,d\mechanical{t}']^2$. All orders then sum to the ordinary exponential of $-(i/\hbar)\int V_I\,d\mechanical{t}'$. For noncommuting operators the ordering must be retained.

### PDF page 12

To evaluate the time-ordered second-order term, split the square into two regions, one with $\mechanical{t}'\geq\mechanical{t}''$ and one with $\mechanical{t}''\geq\mechanical{t}'$. With $\mathcal T$ applied, the result is
$$
\begin{aligned}
\frac12\Bigg[
&\int_{\mechanical{t}_0}^{\mechanical{t}}d\mechanical{t}'\int_{\mechanical{t}_0}^{\mechanical{t}'}d\mechanical{t}''\,V_I(\mechanical{t}')V_I(\mechanical{t}'')\\
+&\int_{\mechanical{t}_0}^{\mechanical{t}}d\mechanical{t}''\int_{\mechanical{t}_0}^{\mechanical{t}''}d\mechanical{t}'\,V_I(\mechanical{t}'')V_I(\mechanical{t}')
\Bigg].
\end{aligned}
$$
The second integral becomes identical to the first after exchanging the dummy time labels. The same procedure at order $n$ gives a factor $1/n!$ multiplying the time-ordered integral over the full time cube. The resulting series is
$$
U_I(\mechanical{t},\mechanical{t}_0)
=\mathcal T\sum_{n=0}^\infty \frac1{n!}
\left[-\frac{i}{\hbar}\int_{\mechanical{t}_0}^{\mechanical{t}}V_I(\mechanical{t}')\,d\mechanical{t}'\right]^n
=\mathcal T\exp\left[-\frac{i}{\hbar}\int_{\mechanical{t}_0}^{\mechanical{t}}V_I(\mechanical{t}')\,d\mechanical{t}'\right].
$$

For an initial eigenstate $\lvert i\rangle$ of $H_0$ at time zero, $\lvert\alpha,\mechanical{t}\rangle_I=U_I(\mechanical{t},0)\lvert i\rangle$. The Schrödinger-picture state follows by applying $e^{-iH_0\mechanical{t}/\hbar}$. The probability of measuring the unperturbed eigenstate $\lvert n\rangle$ is
$$
P_{i\to n}(\mechanical{t})=|\langle n\vert\alpha,\mechanical{t}\rangle_I|^2
=|\langle n\vert U_I(\mechanical{t},0)\vert i\rangle|^2,
$$
since the transformation back to the Schrödinger picture multiplies the component along $\lvert n\rangle$ by a phase.

### PDF page 13

From $\lvert\alpha,\mechanical{t}\rangle_I=\sum_n c_n(\mechanical{t})\lvert n\rangle$, projection onto $\langle k\rvert$ gives $c_k(\mechanical{t})=\langle k\vert U_I(\mechanical{t},0)\vert i\rangle$ for an initial state $\lvert i\rangle$. Expanding the propagator and inserting a complete set of states at second order gives
$$
\begin{aligned}
c_{ki}^{(0)}&=\delta_{ki},\\
c_{ki}^{(1)}&=-\frac{i}{\hbar}\int_0^{\mechanical{t}}
\langle k\vert V_I(\mechanical{t}')\vert i\rangle\,d\mechanical{t}',\\
c_{ki}^{(2)}&=\left(-\frac{i}{\hbar}\right)^2
\int_0^{\mechanical{t}}d\mechanical{t}'\int_0^{\mechanical{t}'}d\mechanical{t}''
\sum_m\langle k\vert V_I(\mechanical{t}')\vert m\rangle
\langle m\vert V_I(\mechanical{t}'')\vert i\rangle.
\end{aligned}
$$

#### Discussion, January 19, 2018

For homework problem 5.28, use selection rules for the linear perturbation written $V=E\mechanical{z}f(\mechanical{t})=E\mechanical{r}\cos\theta f(\mechanical{t})$, with the charge absorbed in the coefficient $E$. To find the allowed transitions from $\lvert100\rangle$, evaluate the angular part of $\langle n\ell m\vert V\vert100\rangle$. Since $\cos\theta$ is proportional to $Y_{10}$ and $Y_{00}$ is constant, orthogonality of the spherical harmonics selects $\ell=1$ and $m=0$. The radial integral then sets the strength of each allowed transition.

A second homework example uses a quadratic oscillator perturbation. Write the Hamiltonian with the mass factor explicit:
$$
H(\mechanical{t})=\frac{\mechanical{p}^2}{2\mechanical{m}}
+\frac{\mechanical{m}}2\left[\signal{\omega}_0^2+\signal{\lambda}_{\mathrm{q}}f(\mechanical{t})\right]\mechanical{x}^2.
$$
Possible envelopes include $e^{-\mechanical{t}/\mechanical{\tau}}$ for $\mechanical{t}>0$, a constant for $0<\mechanical{t}<\mechanical{t}_{\max}$, and $\sin(\signal{\omega}\mechanical{t})$ for $\mechanical{t}>0$. For a constant $f=1$, the new squared frequency is $\signal{\omega}_0^2+\signal{\lambda}_{\mathrm{q}}$. For a time-dependent envelope and initial eigenstate $\lvert i\rangle$, the first-order amplitude is
$$
\langle n\vert U_I(\mechanical{t},0)\vert i\rangle
\simeq \delta_{ni}-\frac{i}{\hbar}\int_0^{\mechanical{t}}
\langle n\vert V_I(\mechanical{t}')\vert i\rangle\,d\mechanical{t}'.
$$

### PDF page 14

For the quadratic drive, write $V(\mechanical{t})=(\energy{\kappa}/2)\mechanical{x}^2 f(\mechanical{t})$, with $\energy{\kappa}=\mechanical{m}\signal{\lambda}_{\mathrm q}$. Substitute $\mechanical{x}=\sqrt{\hbar/(2\mechanical{m}\signal{\omega}_0)}(a+a^\dagger)$. The two products $aa^\dagger$ and $a^\dagger a$ preserve the oscillator state. For transitions to a different state the matrix element is
$$
\energy{V}_{ni}(\mechanical{t})=
\frac{\energy{\kappa}\hbar f(\mechanical{t})}{4\mechanical{m}\signal{\omega}_0}
\left[\sqrt{(i+1)(i+2)}\,\delta_{n,i+2}
+\sqrt{i(i-1)}\,\delta_{n,i-2}\right].
$$
The terms come from $(a^\dagger)^2$ and $a^2$, respectively. Only $n=2$ contributes to a transition out of the ground state at first order.

Since $\langle n\vert V_I(\mechanical{t}')\vert i\rangle=e^{i\signal{\omega}_{ni}\mechanical{t}'}\energy{V}_{ni}(\mechanical{t}')$, the amplitude including the zeroth-order term is
$$
\langle n\vert U_I\vert i\rangle\simeq\delta_{ni}
-\frac{i}{\hbar}\int_0^{\mechanical{t}}
e^{i\signal{\omega}_{ni}\mechanical{t}'}\energy{V}_{ni}(\mechanical{t}')\,d\mechanical{t}'.
$$
The homework evaluates the integral for exponential decay, a finite step pulse $\Theta(\mechanical{t}')-\Theta(\mechanical{t}'-\mechanical{t}_{\max})$, and a sinusoid. With constant matrix element $\energy{V}_{nm}$ during the integration interval, the integral without $-i/\hbar$ is
$$
\int_0^{\mechanical{t}} e^{i\signal{\omega}_{nm}\mechanical{t}'}\energy{V}_{nm}\,d\mechanical{t}'
=\energy{V}_{nm}\frac{e^{i\signal{\omega}_{nm}\mechanical{t}}-1}{i\signal{\omega}_{nm}}.
$$

### PDF page 15

For a constant coupling, the integral on the previous page can be written
$$
\energy{V}_{nm}\frac{e^{i\signal{\omega}_{nm}\mechanical{t}}-1}{i\signal{\omega}_{nm}}
=\frac{2\energy{V}_{nm}}{\signal{\omega}_{nm}}
e^{i\signal{\omega}_{nm}\mechanical{t}/2}
\sin(\signal{\omega}_{nm}\mechanical{t}/2).
$$
The upward and downward matrix elements of the quadratic drive generally differ.

For $f(\mechanical{t}')=\sin(\signal{\omega}\mechanical{t}')$, expand the sine into the two exponentials with coefficient $1/(2i)$. Write $\energy{V}_{ni}$ for the time-independent factor of the matrix element and $\nu_\pm=\signal{\omega}_{ni}\pm\signal{\omega}$. For $n=i\pm2$ this gives
$$
c_n^{(1)}=-\frac{\energy{V}_{ni}}{2\hbar}
\left[\frac{e^{i\nu_+\mechanical{t}}-1}{i\nu_+}
-\frac{e^{i\nu_-\mechanical{t}}-1}{i\nu_-}\right].
$$
When taking the squared modulus, each term yields a squared sine and the cross terms have phases $e^{\pm i\signal{\omega}\mechanical{t}}$. In terms of $s_\pm=\sin(\nu_\pm\mechanical{t}/2)/\nu_\pm$,
$$
|c_n^{(1)}|^2=\frac{|\energy{V}_{ni}|^2}{\hbar^2}
\bigl[s_+^2+s_-^2-2s_+s_-\cos(\signal{\omega}\mechanical{t})\bigr].
$$

#### Lecture, January 22, 2018

The notes record that the February 9 discussion is canceled. For an initial eigenstate $\lvert i\rangle$, expand the interaction-picture state as $\sum_k c_k(\mechanical{t})\lvert k\rangle$, with $c_k^{(0)}=\delta_{ki}$. The first-order transition amplitude to $k\ne i$ is
$$
c_k^{(1)}=-\frac{i}{\hbar}\int_0^{\mechanical{t}}
e^{i\signal{\omega}_{ki}\mechanical{t}'}\langle k\vert V(\mechanical{t}')\vert i\rangle\,d\mechanical{t}',
\qquad
\signal{\omega}_{ki}=(\energy{E}_k^{(0)}-\energy{E}_i^{(0)})/\hbar.
$$
At second order, the earlier perturbation at $\mechanical{t}''$ takes $\lvert i\rangle$ to an intermediate $\lvert m\rangle$, and the later perturbation at $\mechanical{t}'$ takes $\lvert m\rangle$ to $\lvert k\rangle$. Sum over $m$ and integrate over $0\leq\mechanical{t}''\leq\mechanical{t}'\leq\mechanical{t}$ with the coefficient $(-i/\hbar)^2$.

### PDF page 16

The second-order amplitude in terms of Schrödinger-picture matrix elements is
$$
c_k^{(2)}
=\left(-\frac{i}{\hbar}\right)^2
\int_0^{\mechanical{t}}d\mechanical{t}'\int_0^{\mechanical{t}'}d\mechanical{t}''
\sum_m e^{i\signal{\omega}_{km}\mechanical{t}'}e^{i\signal{\omega}_{mi}\mechanical{t}''}
\energy{V}_{km}(\mechanical{t}')\energy{V}_{mi}(\mechanical{t}'').
$$

#### First-order transitions and Fermi's golden rule

For an initial state $\lvert0\rangle$ and final state $\lvert n\rangle$, $n\ne0$, the zeroth-order overlap vanishes. In the Schrödinger picture the amplitude is $e^{-i\energy{E}_n^{(0)}\mechanical{t}/\hbar}$ times the interaction-picture amplitude. This phase drops out of the probability:
$$
P_{0\to n}(\mechanical{t})
\simeq\frac1{\hbar^2}
\left|\int_0^{\mechanical{t}}e^{i\signal{\omega}_{n0}\mechanical{t}'}\energy{V}_{n0}(\mechanical{t}')\,d\mechanical{t}'\right|^2.
$$

For $V(\mechanical{t})=V(\mechanical{\mathbf x})\Theta(\mechanical{t}-\mechanical{t}_0)$, set the time origin at switch-on. The matrix element after that is constant. With $\Delta\energy{E}=\energy{E}_n^{(0)}-\energy{E}_0^{(0)}$,
$$
P_{0\to n}(\mechanical{t})
\simeq|\energy{V}_{n0}|^2
\left[\frac{2\sin(\Delta\energy{E}\mechanical{t}/2\hbar)}{\Delta\energy{E}}\right]^2.
$$
For $|\Delta\energy{E}|\mechanical{t}/(2\hbar)\ll1$, the probability grows as $\mechanical{t}^2$. At fixed nonzero energy separation, the leading-order probability oscillates in time. At fixed time, the dependence on energy separation has a squared-sinc profile with a $1/(\Delta\energy{E})^2$ envelope.

![[Kyle Kabasares - Quantum Mechanics II - Transition probability versus energy.png|**Fig. 4** The red curve sketches the decaying side lobes of the transition probability as the final energy moves away from the initial energy.]]

### PDF page 17

For the fixed-time probability profile, use the dimensionless variable $x=(\energy{E}_n^{(0)}-\energy{E}_0^{(0)})\mechanical{t}/(2\hbar)$. In units with $\hbar=1$, a snapshot at $\mechanical{t}=10$ gives $\energy{E}_n^{(0)}-\energy{E}_0^{(0)}=x/5$.

![[Kyle Kabasares - Quantum Mechanics II - Squared sinc profile.png|**Fig. 5** At a fixed time, the squared sinc has a central peak and successively smaller side lobes.]]

For a set of continuum states, replace the discrete sum by an integral:
$$
\sum_n P_{0\to n}(\mechanical{t})
\ \longrightarrow\
\int d\energy{E}\,\rho(\energy{E})P_{0\to[\energy{E}]}(\mechanical{t}).
$$
The density of states $\rho(\energy{E})$ counts states per unit energy. This form uses a probability per state at a given energy, which can be an average over all other labels. Matrix elements generally depend on more than the energy. For example, hydrogen states have labels $(n,\ell,m)$ but their unperturbed energies depend only on $n$, with binding energy proportional to $1/n^2$. A radial perturbation $V(\mechanical{r})$ preserves $\ell$ and $m$, so from $(1,0,0)$ the $n=2$ contribution comes from $(2,0,0)$.

If the matrix element can be treated as a function of the final energy, the probability for a group of states is
$$
\int_{\text{group}}d\energy{E}\,\rho(\energy{E})
|\energy{V}_{\energy{E},0}|^2
\left[\frac{2\sin((\energy{E}-\energy{E}_0^{(0)})\mechanical{t}/2\hbar)}{\energy{E}-\energy{E}_0^{(0)}}\right]^2.
$$
To evaluate the integral, determine the density of states over the group.

### PDF page 18

Assume that $|\energy{V}_{\energy{E},0}|^2$ and $\rho(\energy{E})$ vary slowly near $\energy{E}_0^{(0)}$. The probability kernel is concentrated within an energy range of order $\hbar/\mechanical{t}$ on either side of that energy. If the continuum spans both sides of the peak, evaluate the smooth factors at $\energy{E}_0^{(0)}$ and extend the kernel integral to the whole line:
$$
\int_{-\infty}^{\infty}
\left[\frac{2\sin((\energy{E}-\energy{E}_0^{(0)})\mechanical{t}/2\hbar)}{\energy{E}-\energy{E}_0^{(0)}}\right]^2
d\energy{E}=\frac{2\pi\mechanical{t}}{\hbar}.
$$
With $u=(\energy{E}-\energy{E}_0^{(0)})\mechanical{t}/(2\hbar)$, the integral reduces to $(2\mechanical{t}/\hbar)\int_{\mathbb R}(\sin u/u)^2\,du$, and the dimensionless integral is $\pi$. Equivalently, the kernel divided by $\mechanical{t}$ tends in the distributional sense to $(2\pi/\hbar)\delta(\energy{E}-\energy{E}_0^{(0)})$. The first line of the handwritten approximation shows a lower bound at the peak. The subsequent whole-line integral and the stated rate use the two-sided continuum approximation.

The resulting transition probability into the continuum is approximately $\Gamma\mechanical{t}$, with the golden-rule rate
$$
\Gamma=\frac{2\pi}{\hbar}
\left[|\energy{V}_{\energy{E},0}|^2\rho(\energy{E})\right]_{\energy{E}=\energy{E}_0^{(0)}}.
$$
The time must be long enough that the peak is narrow on the energy scale $\Delta\energy{E}$ of the smooth factors, yet short enough that the peak samples many levels of spacing $\delta\energy{E}$. The notes give the window $2\pi\hbar/\Delta\energy{E}\ll\mechanical{t}\ll 2\pi\hbar/\delta\energy{E}$. The perturbative probability must also be small.

### PDF page 19

#### Lecture, January 24, 2018

The total probability is $\sum_n P_{0\to n}\simeq\Gamma\mechanical{t}$. The rate can be split into partial rates $\Gamma=\sum_i\Gamma_i$, where $i$ labels subgroups of final states. A form that resolves the energy explicitly is
$$
\Gamma=\frac{2\pi}{\hbar}\sum_n |\langle n\vert V\vert0\rangle|^2
\delta(\energy{E}_n-\energy{E}_0).
$$
The Dirac delta has unit integral and selects energy-conserving final states.

For free final states labeled by momentum, $\energy{E}=\mechanical{p}^2/(2\mechanical{m})$ and $d\energy{E}=(\mechanical{p}/\mechanical{m})\,d\mechanical{p}$. The momentum-space measure becomes
$$
d^3\mechanical{\mathbf p}=\mechanical{p}^2\,d\mechanical{p}\,d\Omega
=\mechanical{m}\sqrt{2\mechanical{m}\energy{E}}\,d\energy{E}\,d\Omega.
$$
If the matrix element is independent of direction, integration over the sphere contributes $4\pi$. Otherwise retain the angular integral. The rate follows by integrating the squared matrix element and energy delta with the corresponding continuum normalization.

For the golden-rule window, $\mechanical{t}\gg2\pi\hbar/\Delta\energy{E}$ resolves the energy range being measured, while $\mechanical{t}\ll2\pi\hbar/\delta\energy{E}$ keeps the individual levels unresolved.

![[Kyle Kabasares - Quantum Mechanics II - Continuum energy window.png|**Fig. 6** The sketch compares two widths of the probability peak with an energy interval extending from $\energy{E}_0$ to $\energy{E}_0+\Delta\energy{E}$.]]

### PDF page 20

#### Particle in a three-dimensional box

The notes start with a standing-wave product proportional to $\sin(k_x x)\sin(k_y y)\sin(k_z z)$ and then use a periodic box for momentum states. For a cube of side $\mechanical{L}$ with periodic boundary conditions, $\signal{k}_j=2\pi n_j/\mechanical{L}$, and
$$
\energy{E}=\frac{\lVert\mechanical{\mathbf p}\rVert^2}{2\mechanical{m}}
=\frac{\hbar^2}{2\mechanical{m}}\left(\frac{2\pi}{\mechanical{L}}\right)^2(n_x^2+n_y^2+n_z^2).
$$
For hard-wall standing waves on an interval of length $\mechanical{L}$, the corresponding component wave numbers are $\pi n_j/\mechanical{L}$.

![[Kyle Kabasares - Quantum Mechanics II - Localized potential in a box.png|**Fig. 7** The box sketch shows a localized profile away from the walls.]]

With plane waves $\langle\mechanical{\mathbf r}\vert\mechanical{\mathbf p}\rangle=\mechanical{L}^{-3/2}e^{i\mechanical{\mathbf p}\cdot\mechanical{\mathbf r}/\hbar}$, the perturbation matrix element is a Fourier transform at the wave-vector transfer:
$$
\langle\mechanical{\mathbf p}'\vert V\vert\mechanical{\mathbf p}\rangle
=\frac1{\mechanical{L}^3}\int d^3\mechanical{\mathbf r}\,
e^{-i(\mechanical{\mathbf p}'-\mechanical{\mathbf p})\cdot\mechanical{\mathbf r}/\hbar}V(\mechanical{\mathbf r}).
$$
The energy delta $\delta(\energy{E}(\mechanical{\mathbf p}')-\energy{E}(\mechanical{\mathbf p}))$ enforces equality of the initial and final momentum magnitudes for elastic scattering.

![[Kyle Kabasares - Quantum Mechanics II - Scattering into a solid angle.png|**Fig. 8** The cone of outgoing directions defines a small solid angle for the scattered particle.]]

To find the rate into a small solid angle, keep the direction of $\mechanical{\mathbf p}'$ fixed and integrate over its magnitude $\mechanical{p}'$. In periodic box normalization the continuum replacement for the sum contributes $\mechanical{L}^3/(2\pi\hbar)^3$:
$$
\frac{d\Gamma}{d\Omega}=\frac{2\pi}{\hbar}\frac{\mechanical{L}^3}{(2\pi\hbar)^3}
\int_0^\infty d\mechanical{p}'\,(\mechanical{p}')^2
|\langle\mechanical{\mathbf p}'\vert V\vert\mechanical{\mathbf p}\rangle|^2
\delta\bigl(\energy{E}(\mechanical{\mathbf p}')-\energy{E}(\mechanical{\mathbf p})\bigr).
$$
The matrix element may depend on the outgoing direction. Integrate $d\Gamma/d\Omega$ over all solid angles for the total rate.

### PDF page 21

For the periodic cube, let $n=\sqrt{n_x^2+n_y^2+n_z^2}$. Each lattice point represents one momentum state, so a thin spherical shell contains approximately $dN=4\pi n^2\,dn$ states. From
$$
\energy{E}=\frac{1}{2\mechanical{m}}\left(\frac{2\pi\hbar}{\mechanical{L}}\right)^2n^2,
\qquad
d\energy{E}=\frac{1}{\mechanical{m}}\left(\frac{2\pi\hbar}{\mechanical{L}}\right)^2n\,dn,
$$
the density for one spin species is
$$
\rho(\energy{E})=\frac{dN}{d\energy{E}}
=4\pi n\mechanical{m}\left(\frac{\mechanical{L}}{2\pi\hbar}\right)^2
=\frac{\mechanical{L}^3\mechanical{m}^{3/2}\sqrt{\energy{E}}}{\sqrt2\,\pi^2\hbar^3}.
$$

![[Kyle Kabasares - Quantum Mechanics II - Shell of momentum states.png|**Fig. 9** Counting states between momentum radii $\mechanical{p}$ and $\mechanical{p}+d\mechanical{p}$ gives the density of states.]]

Use the angle-integrated density directly when the matrix element is independent of direction. For a particular direction, use $d\rho/d\Omega=\rho/(4\pi)$ and the matrix element for that direction. With $\widetilde V$ the spatial Fourier transform and $\mechanical{\mathbf p}=\hbar\signal{\mathbf k}$, this gives
$$
\frac{d\Gamma}{d\Omega}
=\frac{\mechanical{m}\signal{k}}{4\pi^2\hbar^3\mechanical{L}^3}
|\widetilde V(\signal{\mathbf k}'-\signal{\mathbf k})|^2.
$$
The incident plane wave has density $1/\mechanical{L}^3$ and speed $\mechanical{p}/\mechanical{m}=\hbar\signal{k}/\mechanical{m}$. The incident flux is $j_{\mathrm{in}}=\hbar\signal{k}/(\mechanical{m}\mechanical{L}^3)$. Dividing the rate per solid angle by this flux gives the differential cross section $d\sigma/d\Omega$.

### PDF page 22

For decay from $\lvert i\rangle$ into a residual state $\lvert f\rangle$ and an emitted particle with momentum $\hbar\signal{\mathbf k}$, the golden-rule angular rate in box normalization is
$$
\frac{d\Gamma}{d\Omega}
=\frac{2\pi}{\hbar}\frac{\mechanical{L}^3}{(2\pi)^3}
\int_0^\infty \signal{k}^2\,d\signal{k}\,
|\langle f,\hbar\signal{\mathbf k}\vert V\vert i\rangle|^2
\delta\bigl(\energy{E}_i-\energy{E}_f-\energy{E}(\signal{\mathbf k})\bigr).
$$
The delta enforces energy conservation for the combined final state.

#### Harmonic perturbation

For $V(\mechanical{t})=Ve^{i\signal{\omega}\mechanical{t}}+V^\dagger e^{-i\signal{\omega}\mechanical{t}}$, the first-order amplitude is
$$
c_n^{(1)}=\frac1\hbar
\left[
\energy{V}_{ni}\frac{1-e^{i(\signal{\omega}_{ni}+\signal{\omega})\mechanical{t}}}{\signal{\omega}_{ni}+\signal{\omega}}
+\langle n\vert V^\dagger\vert i\rangle
\frac{1-e^{i(\signal{\omega}_{ni}-\signal{\omega})\mechanical{t}}}{\signal{\omega}_{ni}-\signal{\omega}}
\right].
$$
The transition probability is $|c_n^{(1)}|^2$. The two contributions have sinc-like peaks. In the long-time continuum limit the peaks enforce $\energy{E}_n-\energy{E}_i+\hbar\signal{\omega}=0$ and $\energy{E}_n-\energy{E}_i-\hbar\signal{\omega}=0$, respectively.

If first order is small, the page returns to a constant perturbation and includes intermediate states. Using $\signal{\omega}_{nm}+\signal{\omega}_{mi}=\signal{\omega}_{ni}$ gives
$$
c_n^{(2)}
=\frac{i}{\hbar}\sum_m
\frac{\energy{V}_{nm}\energy{V}_{mi}}{\energy{E}_m-\energy{E}_i}
\int_0^{\mechanical{t}}\left(e^{i\signal{\omega}_{ni}\mechanical{t}'}-e^{i\signal{\omega}_{nm}\mechanical{t}'}\right)d\mechanical{t}'.
$$
For off-resonant intermediate states, the part resonant at $\energy{E}_n=\energy{E}_i$ combines with first order into the effective matrix element
$$
\energy{V}_{ni}+\sum_m\frac{\energy{V}_{nm}\energy{V}_{mi}}{\energy{E}_i-\energy{E}_m}.
$$
The corresponding rate for a group of continuum states is $2\pi/\hbar$ times the squared modulus of this expression times the density of final states, evaluated at the resonant energy. The sign of the denominator here follows from combining the second-order integral with the first-order factor $-i/\hbar$.

### PDF page 23

#### Discussion, January 26, 2018

Consider a harmonic oscillator in an electric field switched on at time zero, with
$$
H=\frac{\mechanical{p}^2}{2\mechanical{m}}+\frac{\mechanical{m}\signal{\omega}^2\mechanical{x}^2}{2}
-\mechanical{F}\mechanical{x}\Theta(\mechanical{t}).
$$
For a rectangular pulse of duration $\mechanical{T}$, multiply the force term by $\Theta(\mechanical{t})-\Theta(\mechanical{t}-\mechanical{T})$ instead. From the unperturbed ground state, the first-order amplitude to the first excited state after the pulse contains the integral of $e^{i\signal{\omega}\mechanical{t}'}$ from zero to $\mechanical{T}$ and the factor $(-i/\hbar)(-\mechanical{F})\langle1\vert\mechanical{x}\vert0\rangle$. Use
$$
e^{i\signal{\omega}\mechanical{T}}-1
=2i e^{i\signal{\omega}\mechanical{T}/2}\sin(\signal{\omega}\mechanical{T}/2).
$$

![[Kyle Kabasares - Quantum Mechanics II - Rectangular force pulse.png|**Fig. 10** A constant driving force is applied for a finite time and then switched off.]]

For an exact treatment while the field is on, complete the square:
$$
H=\frac{\mechanical{p}^2}{2\mechanical{m}}+
\frac{\mechanical{m}\signal{\omega}^2}{2}(\mechanical{x}-\mechanical{x}_0)^2
-\frac{\mechanical{F}^2}{2\mechanical{m}\signal{\omega}^2},
\qquad
\mechanical{x}_0=\frac{\mechanical{F}}{\mechanical{m}\signal{\omega}^2}.
$$
The final term is a scalar energy offset. If $\psi_k$ is an eigenfunction of $H_0$, then $\widetilde\psi_k(\mechanical{x})=\psi_k(\mechanical{x}-\mechanical{x}_0)$ is an eigenfunction of the shifted oscillator. Expand the initial state as $\lvert0\rangle=\sum_k c_k\lvert\widetilde k\rangle$, with $c_k=\int\widetilde\psi_k^*(\mechanical{x})\psi_0(\mechanical{x})\,d\mechanical{x}$. For $k=0$ this is a product of two Gaussians. For $k=1$ the shifted wavefunction can be obtained by differentiating a Gaussian in the scaled coordinate $\xi=\sqrt{\mechanical{m}\signal{\omega}/\hbar}(\mechanical{x}-\mechanical{x}_0)$.

The squared overlaps $|\langle\widetilde0\vert0\rangle|^2$ and $|\langle\widetilde1\vert0\rangle|^2$ give probabilities in the shifted basis. For comparison with the perturbative pulse result, evolve each coefficient with its shifted energy during the pulse and project back onto the unperturbed basis when the force switches off. Compare probabilities in the same basis.

### PDF page 24

For the rectangular force pulse, evolve the initial state in the shifted basis until the pulse ends:
$$
\lvert\psi(\mechanical{T})\rangle
=\sum_k c_k e^{-i\energy{\widetilde E}_k\mechanical{T}/\hbar}\lvert\widetilde k\rangle.
$$
The shifted ground state and first excited state acquire a relative phase $e^{-i\signal{\omega}\mechanical{T}}$. To first order in the force, $c_0\simeq1$ and $\lvert\widetilde0\rangle\simeq\lvert0\rangle-c_1\lvert1\rangle$, while $\lvert\widetilde1\rangle\simeq\lvert1\rangle$ for the term already multiplied by $c_1$. Thus the amplitude to be in the original first excited state at switch-off is proportional to $e^{-i\signal{\omega}\mechanical{T}}-1$. Its squared modulus gives $4\sin^2(\signal{\omega}\mechanical{T}/2)$. The handwritten line gives a plus sign and a squared cosine. The relative minus sign comes from the inverse shift, and the amplitude must vanish for a zero-duration pulse.

#### Baym problem 12-2

Find the ionization rate as a function of the frequency of a sinusoidal electric field. Treat the relative motion in the central potential as that of a particle with the reduced mass. If the proton is allowed to move, the field acts on both charges. Writing the signed perturbation as $-\mathcal E\mechanical{x}_e+\mathcal E\mechanical{x}_p=-\mathcal E(\mechanical{x}_e-\mechanical{x}_p)$ shows that it depends on the relative coordinate. Here $\mathcal E$ includes the charge. The sketch indicates the plane-wave form used for the outgoing state.

![[Kyle Kabasares - Quantum Mechanics II - Ionization in a central potential.png|**Fig. 11** The sketch pairs an attractive central potential with the plane-wave form used for the continuum.]]

#### Lecture, January 29, 2018

The notes revisit the continuum rate with a direct and a second-order amplitude through intermediate states. In practice, sum or integrate over the states available at the final energy.

For slow switch-on from the distant past, a positive parameter $\eta$ in $V(\mechanical{t})e^{\eta\mechanical{t}}$ suppresses the perturbation at early times. Another switching function, $\tfrac12[1+\tanh(\eta\mechanical{t})]$, tends to zero in the distant past and one in the distant future. Compare these to an abrupt step.

![[Kyle Kabasares - Quantum Mechanics II - Abrupt switching reference.png|**Fig. 12** The step is the abrupt limit against which the smooth switch-on is compared.]]

### PDF page 25

The exponential switch $e^{\eta\mechanical{t}}$ vanishes in the distant past for $\eta>0$ and grows without bound in the distant future. Use it up to a finite observation time, then take $\eta\to0^+$. For a constant spatial perturbation, the first-order amplitude is
$$
\begin{aligned}
c_n^{(1)}
&=-\frac{i}{\hbar}\energy{V}_{ni}\int_{-\infty}^{\mechanical{t}}
e^{(\eta+i\signal{\omega}_{ni})\mechanical{t}'}\,d\mechanical{t}'\\
&=\frac{\energy{V}_{ni}e^{(\eta+i\signal{\omega}_{ni})\mechanical{t}}}
{\energy{E}_i-\energy{E}_n+i\hbar\eta}.
\end{aligned}
$$
The lower boundary gives zero. The units of angular frequency, energy, and $\hbar$ are $\unit{s^{-1}}$, $\unit{J}$, and $\unit{J\,s}$, respectively.

For a general time-dependent perturbation with Fourier representation $V(\mechanical{t})=(2\pi)^{-1}\int d\signal{\omega}\,V(\signal{\omega})e^{-i\signal{\omega}\mechanical{t}}$, the same integration gives
$$
c_n^{(1)}=\frac1{2\pi}\int d\signal{\omega}\,
\frac{\energy{V}_{ni}(\signal{\omega})e^{[\eta+i(\signal{\omega}_{ni}-\signal{\omega})]\mechanical{t}}}
{\energy{E}_i-\energy{E}_n+\hbar\signal{\omega}+i\hbar\eta}.
$$
For the constant perturbation, the transition rate to a final state is
$$
\frac{d|c_n^{(1)}|^2}{d\mechanical{t}}
=\frac{2\eta|\energy{V}_{ni}|^2 e^{2\eta\mechanical{t}}}
{(\energy{E}_i-\energy{E}_n)^2+\eta^2\hbar^2}.
$$
As $\eta\to0^+$ at fixed time, the kernel is zero away from $\energy{E}_n=\energy{E}_i$ and grows at equality. Its integral over energy is $2\pi/\hbar$, so it tends to $(2\pi/\hbar)\delta(\energy{E}_n-\energy{E}_i)$. The notes point to this method for the Baym problems.

At second order the system goes from $i$ to $m$ at the earlier time and from $m$ to $n$ at the later time:
$$
c_n^{(2)}=\left(-\frac{i}{\hbar}\right)^2\sum_m\energy{V}_{nm}\energy{V}_{mi}
\int_{-\infty}^{\mechanical{t}} e^{(\eta+i\signal{\omega}_{nm})\mechanical{t}'}\,d\mechanical{t}'
\int_{-\infty}^{\mechanical{t}'}e^{(\eta+i\signal{\omega}_{mi})\mechanical{t}''}\,d\mechanical{t}''.
$$
The inner integral gives $e^{(\eta+i\signal{\omega}_{mi})\mechanical{t}'}/(\eta+i\signal{\omega}_{mi})$.

![[Kyle Kabasares - Quantum Mechanics II - Intermediate state transition.png|**Fig. 13** Two successive matrix elements connect the initial state $i$ to $n$ through the intermediate state $m$.]]

### PDF page 26

Completing the second-order time integral with exponential switch-on gives
$$
c_n^{(2)}
=\frac{e^{(2\eta+i\signal{\omega}_{ni})\mechanical{t}}}{\energy{E}_i-\energy{E}_n+2i\hbar\eta}
\sum_m\frac{\energy{V}_{nm}\energy{V}_{mi}}{\energy{E}_i-\energy{E}_m+i\hbar\eta}.
$$
For the rate, the squared outer factor yields the energy delta in the slow-switching limit. The intermediate denominator keeps the $+i0$ prescription:
$$
\Gamma_{i\to n}
=\frac{2\pi}{\hbar}
\left|\sum_m\frac{\energy{V}_{nm}\energy{V}_{mi}}{\energy{E}_i-\energy{E}_m+i0}\right|^2
\delta(\energy{E}_i-\energy{E}_n).
$$
When the intermediate sum becomes an energy integral, the pole as a function of $\energy{E}_m$ is at $\energy{E}_i+i\hbar\eta$. The positive imaginary displacement specifies which side of the pole the real-axis integral passes.

![[Kyle Kabasares - Quantum Mechanics II - Pole in intermediate energy.png|**Fig. 14** The contour sketch marks the pole prescription for the intermediate energy integral.]]

#### Interaction of matter with light

Use the scalar potential $\electric{\phi}$ and vector potential $\magnetic{\mathbf A}$. In four-dimensional notation,
$$
A^\mu=(\electric{\phi}/c,\magnetic{\mathbf A}),\qquad
J^\mu=(c\electric{\rho}_q,\electric{\mathbf J}),\qquad
x^0=c\mechanical{t}.
$$
With metric $g=\operatorname{diag}(1,-1,-1,-1)$, lower indices by $A_\mu=g_{\mu\nu}A^\nu$. The field tensor is $F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu$, for $\mu,\nu=0,1,2,3$. With this metric and definition, its contravariant components in SI are $F^{0i}=-\electric{E}^i/c$ and $F^{ij}=-\varepsilon^{ijk}\magnetic{B}^k$ with $\varepsilon^{123}=1$. The handwritten component signs use a different convention.

The sourced Maxwell equations are $\partial_\mu F^{\mu\nu}=\magnetic{\mu}_0 J^\nu$. In terms of the potentials they give
$$
\begin{aligned}
\nabla^2\electric{\phi}+\partial_{\mechanical{t}}(\nabla\cdot\magnetic{\mathbf A})
&=-\electric{\rho}_q/\electric{\varepsilon}_0,\\
\Box\magnetic{\mathbf A}
+\nabla\left(\nabla\cdot\magnetic{\mathbf A}
+\frac{1}{c^2}\partial_{\mechanical{t}}\electric{\phi}\right)&=\magnetic{\mu}_0\electric{\mathbf J},
\qquad
\Box=c^{-2}\partial_{\mechanical{t}}^2-\nabla^2.
\end{aligned}
$$
For four-vectors $C^\mu$ and $D^\mu$, the contraction $C_\mu D^\mu=g_{\mu\nu}C^\mu D^\nu=C^\mu D_\mu$ is invariant. A gauge transformation $A_\mu\mapsto A_\mu-\partial_\mu\alpha$ for a smooth scalar $\alpha$ also leaves $F_{\mu\nu}$ invariant. The extra terms are $-\partial_\mu\partial_\nu\alpha+\partial_\nu\partial_\mu\alpha=0$.

### PDF page 27

The particle Hamiltonian on this page uses the Gaussian-unit coupling, with $\electric{q}$ the signed charge (written $e$ in the notes):
$$
H=\frac{1}{2\mechanical{m}}\left(\mechanical{\widehat{\mathbf p}}-\frac{\electric{q}}{c}\magnetic{\mathbf A}\right)^2
+\electric{q}\electric{\phi}+V(\mechanical{\mathbf r}).
$$
Here $V$ is any additional potential and $\mechanical{\widehat{\mathbf p}}=-i\hbar\nabla$. In this convention the four-potential components are $(\electric{\phi},\magnetic{\mathbf A})$. The SI normalization of the preceding page instead uses $\electric{\phi}/c$ in its time component and omits $1/c$ in the momentum coupling.

Under $A_\mu'=A_\mu-\partial_\mu\alpha$, the Gaussian-unit potentials and the state transform as
$$
\magnetic{\mathbf A}'=\magnetic{\mathbf A}+\nabla\alpha,\qquad
\electric{\phi}'=\electric{\phi}-c^{-1}\partial_{\mechanical{t}}\alpha,\qquad
\psi'=e^{i\electric{q}\alpha/(\hbar c)}\psi.
$$
In the transformed Schrödinger equation, the gradient acting on the phase generates $(\electric{q}/c)\nabla\alpha$, which cancels the extra term from $\magnetic{\mathbf A}'$ in the kinetic momentum. The time derivative of the phase gives $-(\electric{q}/c)\partial_{\mechanical{t}}\alpha$, which matches the shift of $\electric{q}\electric{\phi}$.

The ordinary spatial gradient of $\electric{\phi}$ has components $\partial\electric{\phi}/\partial x^i$ along the Cartesian basis vectors. Lowering the spatial coordinates with the metric $(+,-,-,-)$ gives $\partial/\partial x_i=-\partial/\partial x^i$. The canonical momentum by itself is gauge-dependent, because
$$
e^{-i\electric{q}\alpha/(\hbar c)}\mechanical{\widehat{\mathbf p}}\,
e^{i\electric{q}\alpha/(\hbar c)}
=\mechanical{\widehat{\mathbf p}}+\frac{\electric{q}}{c}\nabla\alpha.
$$
The kinetic momentum includes the vector potential, and its matrix elements are invariant under the simultaneous transformations.

### PDF page 28

#### Lecture, January 31, 2018 — Electromagnetic interactions

The gauge transformation of the wavefunction changes the canonical momentum matrix element because the derivative acts on the phase as well as on the state. With $\psi'_j=e^{i\electric{q}\alpha/(\hbar c)}\psi_j$, the matrix elements change by
$$
\begin{aligned}
\langle f'\vert\mechanical{\widehat{\mathbf p}}\vert i'\rangle
&=\langle f\vert\mechanical{\widehat{\mathbf p}}\vert i\rangle
+\frac{\electric{q}}c\langle f\vert\nabla\alpha\vert i\rangle,\\
\langle f'\vert\magnetic{\mathbf A}'\vert i'\rangle
&=\langle f\vert\magnetic{\mathbf A}\vert i\rangle+\langle f\vert\nabla\alpha\vert i\rangle.
\end{aligned}
$$
The extra terms cancel in the matrix element of the kinetic momentum $\mechanical{\boldsymbol\pi}=\mechanical{\widehat{\mathbf p}}-(\electric{q}/c)\magnetic{\mathbf A}$. This combination represents $\mechanical{m}\,d\mechanical{\mathbf r}/d\mechanical{t}$.

To see the relation in the Heisenberg picture, compute $d\mechanical{\mathbf r}_H/d\mechanical{t}=(1/i\hbar)[\mechanical{\mathbf r}_H,H_H]$. The terms $\electric{q}\electric{\phi}$ and $V$ are functions of position and commute with it. In the kinetic term, $[\mechanical{r}_j,\mechanical{\pi}_k]=i\hbar\delta_{jk}$, so $[\mechanical{r}_j,\mechanical{\boldsymbol\pi}^2/(2\mechanical{m})]=i\hbar\mechanical{\pi}_j/\mechanical{m}$. Transforming the operators to the Heisenberg picture gives the velocity relation.

### PDF page 29

The momentum obtained from the velocity is $\langle\mechanical{m}\dot{\mechanical{\mathbf r}}\rangle=\langle\mechanical{\widehat{\mathbf p}}-(\electric{q}/c)\magnetic{\mathbf A}\rangle$. Split the one-particle Hamiltonian into $H_0=\mechanical{\widehat{\mathbf p}}^2/(2\mechanical{m})+V$ and
$$
H_{\mathrm{int}}
=-\frac{\electric{q}}{2\mechanical{m}c}
\bigl(\mechanical{\widehat{\mathbf p}}\cdot\magnetic{\mathbf A}+\magnetic{\mathbf A}\cdot\mechanical{\widehat{\mathbf p}}\bigr)
+\frac{\electric{q}^2}{2\mechanical{m}c^2}\magnetic{\mathbf A}^2+\electric{q}\electric{\phi}.
$$
The product rule gives $\mechanical{\widehat{\mathbf p}}\cdot\magnetic{\mathbf A}=\magnetic{\mathbf A}\cdot\mechanical{\widehat{\mathbf p}}-i\hbar\nabla\cdot\magnetic{\mathbf A}$. For the transverse radiation field, choose a gauge with $\nabla\cdot\magnetic{\mathbf A}'=0$ and $\electric{\phi}'=0$.

#### Hamiltonian for multiple particles

For particles at $\mechanical{\mathbf r}_j$ with masses $\mechanical{m}_j$ and charges $\electric{q}_j$, use
$$
H=\sum_j \frac{\left[\mechanical{\widehat{\mathbf p}}_j-(\electric{q}_j/c)\magnetic{\mathbf A}(\mechanical{\mathbf r}_j,\mechanical{t})\right]^2}{2\mechanical{m}_j}
+\sum_j\electric{q}_j\electric{\phi}(\mechanical{\mathbf r}_j,\mechanical{t})
+V(\{\mechanical{\mathbf r}_j\}).
$$
The unperturbed terms are the sum of the ordinary kinetic energies and $V$. A plane-wave dependence for an external potential has the form $e^{-i(\signal{\omega}\mechanical{t}-\signal{\mathbf k}\cdot\mechanical{\mathbf r})}$.

To express the coupling in terms of densities, introduce the charge-density operator
$$
\electric{\rho}_q(\mechanical{\mathbf r})=\sum_j\electric{q}_j\delta^{(3)}(\mechanical{\mathbf r}-\mechanical{\mathbf r}_j).
$$
Its integral is the total charge $\sum_j\electric{q}_j$. The number of particles would result from the corresponding unweighted sum. The scalar part of the interaction becomes
$$
\sum_j\electric{q}_j\electric{\phi}(\mechanical{\mathbf r}_j,\mechanical{t})
=\int d^3\mechanical{\mathbf r}\,\electric{\rho}_q(\mechanical{\mathbf r})\electric{\phi}(\mechanical{\mathbf r},\mechanical{t}).
$$
The vector part linear in $\magnetic{\mathbf A}$ is the sum of the symmetrized momentum couplings. It will be written in terms of a current density.

### PDF page 30

For identical particles of mass $\mechanical{m}$ and charge $\electric{q}$, define the symmetrized canonical number current
$$
\mathbf j(\mechanical{\mathbf r})
=\frac{1}{2\mechanical{m}}\sum_i
\bigl[\mechanical{\widehat{\mathbf p}}_i\delta^{(3)}(\mechanical{\mathbf r}-\mechanical{\mathbf r}_i)
+\delta^{(3)}(\mechanical{\mathbf r}-\mechanical{\mathbf r}_i)\mechanical{\widehat{\mathbf p}}_i\bigr].
$$
With number density $n(\mechanical{\mathbf r})=\sum_i\delta^{(3)}(\mechanical{\mathbf r}-\mechanical{\mathbf r}_i)$, the kinetic number current is $\mathbf j-(\electric{q}/\mechanical{m}c)n\magnetic{\mathbf A}$. Multiplication by the charge gives the electric current. The part of the Hamiltonian linear in the potentials is
$$
H_{\mathrm{int}}^{(1)}=\int d^3\mechanical{\mathbf r}\,
\left[\electric{\rho}_q\electric{\phi}-\frac{\electric{q}}c\mathbf j\cdot\magnetic{\mathbf A}\right].
$$
Here the densities are operators on the particle coordinates. For the transverse field, $\electric{\phi}=0$. The term quadratic in $\magnetic{\mathbf A}$ is separate from the linear interaction used below.

#### Absorption of light

Expand the vector potential in Fourier modes of polarization $\boldsymbol\epsilon_s$:
$$
\magnetic{\mathbf A}(\mechanical{\mathbf r},\mechanical{t})
=\int d^3\signal{\mathbf k}\sum_s
\left[A(\signal{\mathbf k},s)\boldsymbol\epsilon_s
e^{i(\signal{\mathbf k}\cdot\mechanical{\mathbf r}-\signal{\omega}\mechanical{t})}
+\mathrm{h.c.}\right].
$$
The Hermitian conjugate supplies the negative-frequency partner. Fourier transformation of the current yields
$$
\begin{aligned}
\mathbf j(\signal{\mathbf k})
&=\int d^3\mechanical{\mathbf r}\,e^{-i\signal{\mathbf k}\cdot\mechanical{\mathbf r}}\mathbf j(\mechanical{\mathbf r})\\
&=\frac1{2\mechanical{m}}\sum_i
\left[\mechanical{\widehat{\mathbf p}}_i e^{-i\signal{\mathbf k}\cdot\mechanical{\mathbf r}_i}
+e^{-i\signal{\mathbf k}\cdot\mechanical{\mathbf r}_i}\mechanical{\widehat{\mathbf p}}_i\right].
\end{aligned}
$$
In the product of the Fourier representations, the position integral sets the two wave vectors to opposite values. Thus
$$
H_{\mathrm{int}}^{(1)}
=-\frac{\electric{q}}c\int d^3\signal{\mathbf k}\sum_s
\left[A(\signal{\mathbf k},s)\boldsymbol\epsilon_s\cdot\mathbf j(-\signal{\mathbf k})
e^{-i\signal{\omega}\mechanical{t}}+\mathrm{h.c.}\right].
$$

### PDF page 31

#### Lecture and discussion, February 2, 2018

For the midterm, review the interaction of matter and light in Sakurai chapter 5 or Baym chapter 12. Be prepared to write the Hamiltonian and derive gauge invariance.

For Baym problem 12.1, find the ground-state wavefunction and the excited or continuum wavefunctions, then calculate the perturbation matrix elements. The binding potential is a spherical well of radius $\mechanical{R}$ and depth $\energy{V}_0$.

![[Kyle Kabasares - Quantum Mechanics II - Finite radial well.png|**Fig. 15** The radial well has potential $-\energy{V}_0$ inside $\mechanical{R}$ and zero outside.]]

A uniform oscillating electric field can be taken along the $z$-axis because the unperturbed well is spherically symmetric. With signed charge $\electric{q}$ and field amplitude $\electric{\mathcal E}$, the force is $\electric{q}\electric{\mathcal E}\cos(\signal{\omega}\mechanical{t})$ along that axis. The perturbing potential energy is
$$
-\electric{q}\electric{\mathcal E}\mechanical{z}\cos(\signal{\omega}\mechanical{t})
=-\electric{q}\electric{\mathcal E}\mechanical{r}\cos\theta\cos(\signal{\omega}\mechanical{t}).
$$
The angular factor is proportional to $Y_{10}=\sqrt{3/(4\pi)}\cos\theta$.

The ground state is radial, with an angular factor constant over the sphere. Its energy satisfies $-\energy{V}_0<\energy{E}_0<0$ and its radial function obeys
$$
-\frac{\hbar^2}{2\mechanical{m}\mechanical{r}^2}
\frac{d}{d\mechanical{r}}\left(\mechanical{r}^2\frac{dR_0}{d\mechanical{r}}\right)
+\energy{V}(\mechanical{r})R_0=\energy{E}_0 R_0.
$$
Match both the wavefunction and its first radial derivative at the finite wall. A continuum spherical wave has the form $R_{k\ell}(\mechanical{r})Y_{\ell m}(\theta,\phi)$. Outside the well the radial solutions are spherical Bessel combinations and have a sinusoidal large-radius behavior divided by $\mechanical{r}$, with a phase that depends on the partial wave. The continuum energy is $\hbar^2\signal{k}^2/(2\mechanical{m})$. Angular momentum adds a centrifugal term to the radial equation. The continuum can be labeled by $\signal{k},\ell,m$ or by Cartesian wave-vector components.

![[Kyle Kabasares - Quantum Mechanics II - Wave vector shell.png|**Fig. 16** Continuum states in a thin shell have wave numbers from $\signal{k}$ to $\signal{k}+d\signal{k}$.]]

### PDF page 32

A plane wave can be expanded in spherical waves:
$$
e^{i\signal{\mathbf k}\cdot\mechanical{\mathbf r}}
=4\pi\sum_{\ell,m} i^\ell j_\ell(\signal{k}\mechanical{r})
Y_{\ell m}^*(\theta_k,\phi_k)Y_{\ell m}(\theta,\phi).
$$
Here $(\theta_k,\phi_k)$ are the wave-vector angles and $(\theta,\phi)$ are the position angles.

With initial angular factor $Y_{00}=1/\sqrt{4\pi}$, the angular integral for the dipole perturbation is
$$
\int d\Omega\,Y_{\ell m}^*(\theta,\phi)\cos\theta\,Y_{00}
=\frac{1}{\sqrt3}\delta_{\ell1}\delta_{m0}.
$$
The radial factor is $\int_0^\infty \mechanical{r}^3 R_{k\ell}^*(\mechanical{r})R_0(\mechanical{r})\,d\mechanical{r}$. It is multiplied by the field and charge factors. Only the partial wave $\ell=1,m=0$ contributes.

The absorption rate to a continuum state contains
$$
\frac{2\pi}{\hbar}|\energy{V}_{k,0}^{(-)}|^2
\delta\!\left(\energy{E}(\signal{k})-\energy{E}_0-\hbar\signal{\omega}\right),
$$
where $\energy{V}_{k,0}^{(-)}$ is the coefficient of $e^{-i\signal{\omega}\mechanical{t}}$. In a radial basis normalized with respect to $d\signal{k}$, integrate this expression over $\signal{k}$. The delta contributes $1/|d\energy{E}/d\signal{k}|$ at $\energy{E}=\energy{E}_0+\hbar\signal{\omega}$ when this energy is in the continuum. The speed is $\mechanical{v}=\hbar\signal{k}/\mechanical{m}$. A region of size $\mechanical{\ell}$ has crossing time $\mechanical{\ell}/\mechanical{v}=\mechanical{m}\mechanical{\ell}/(\hbar\signal{k})$.

For a two-body hydrogen model, the Gaussian-unit Hamiltonian includes the proton and electron kinetic energies and the Coulomb attraction $-\electric{e}^2/\lVert\mechanical{\mathbf r}_e-\mechanical{\mathbf r}_p\rVert$, where $\electric{e}$ is the positive charge magnitude. In a uniform field the external term is $-\electric{q}_e\electric{\mathcal E}(\mechanical{z}_e-\mechanical{z}_p)\cos(\signal{\omega}\mechanical{t})$ for signed electron charge $\electric{q}_e$. The projection $\mechanical{z}_e-\mechanical{z}_p=\mechanical{r}\cos\theta$ uses the relative vector from proton to electron. Reversing the relative vector reverses the projection.

### PDF page 33

Let the relative coordinate be $\mechanical{\mathbf r}=\mechanical{\mathbf r}_e-\mechanical{\mathbf r}_p$. Its vertical component is $\mechanical{\mathbf r}\cdot\widehat{\mathbf z}=\mechanical{r}\cos\theta$. The center-of-mass transformation separates the Hamiltonian as
$$
H=\frac{\mechanical{\mathbf p}_{\mathrm{rel}}^2}{2\mechanical{\mu}}
+\frac{\mechanical{\mathbf P}^2}{2\mechanical{M}}
-\frac{\electric{e}^2}{\mechanical{r}}
-\electric{q}_e\electric{\mathcal E}\cos(\signal{\omega}\mechanical{t})\,\mechanical{r}\cos\theta,
$$
where $\mechanical{M}=\mechanical{m}_e+\mechanical{m}_p$ and $\mechanical{\mu}=\mechanical{m}_e\mechanical{m}_p/\mechanical{M}$.

![[Kyle Kabasares - Quantum Mechanics II - Electron proton relative position.png|**Fig. 17** The displacement from the proton to the electron is the difference of their position vectors.]]

The wave number $\signal{k}$ labels the effective particle of reduced mass. In the center-of-mass frame, $\mechanical{\mathbf p}_e=-\mechanical{\mathbf p}_p$, and the momentum conjugate to $\mechanical{\mathbf r}$ is $\mechanical{\mathbf p}_{\mathrm{rel}}=\mechanical{\mathbf p}_e=\hbar\signal{\mathbf k}$. The momentum difference $\mechanical{\mathbf p}_e-\mechanical{\mathbf p}_p$ is twice this value in that frame. The corresponding relative kinetic energy satisfies
$$
\frac{\hbar^2\signal{k}^2}{2\mechanical{\mu}}
=\frac{\hbar^2\signal{k}^2}{2\mechanical{m}_e}
+\frac{\hbar^2\signal{k}^2}{2\mechanical{m}_p}.
$$

#### Lecture notes, February 5, 2018

For absorption of light, the linear coupling is $-(\electric{q}/c)\int d^3\mechanical{\mathbf r}\,\mathbf j\cdot\magnetic{\mathbf A}$. The symmetrized current contains both orders of the momentum operator and the position delta function. Its Fourier coefficient has the same two orders with each delta replaced by $e^{-i\signal{\mathbf k}\cdot\mechanical{\mathbf r}_i}$. The real vector potential is expanded in polarized plane waves and their Hermitian conjugates. The Fourier coefficients and the polarization vectors can be complex even when the field is real.

Multiplying the current and field expansions and integrating over position gives a delta proportional to $\delta^{(3)}(\signal{\mathbf k}+\signal{\mathbf k}')$. After evaluating one wave-vector integral, the absorption term is proportional to
$$
-\frac{\electric{q}}c\int d^3\signal{\mathbf k}\sum_s
A(\signal{\mathbf k},s)\boldsymbol\epsilon_s\cdot\mathbf j(-\signal{\mathbf k})
e^{-i\signal{\omega}\mechanical{t}},
$$
with its Hermitian conjugate completing the Hamiltonian. The matrix element of this term determines the transition from state $i$ to state $n$ with absorption at wave vector $\signal{\mathbf k}$.

### PDF page 34

For one incident mode, the absorption rate from $\lvert i\rangle$ to $\lvert n\rangle$ is proportional to
$$
\frac{2\pi}{\hbar}\,
\delta(\energy{E}_n-\energy{E}_i-\hbar\signal{\omega})\,
\frac{\electric{q}^2}{c^2}
|A(\signal{\mathbf k},s)|^2
|\langle n\vert\boldsymbol\epsilon_s\cdot\mathbf j(-\signal{\mathbf k})\vert i\rangle|^2.
$$
For a wave packet, integrate over $d^3\signal{\mathbf k}/(2\pi)^3$ in the notes' Fourier convention and sum over polarizations. Since $\signal{k}=\signal{\omega}/c$, the measure is
$$
d^3\signal{\mathbf k}=\signal{k}^2\,d\signal{k}\,d\Omega
=\frac{\signal{\omega}^2}{c^3}\,d\signal{\omega}\,d\Omega.
$$
The delta evaluates the integrand at $\signal{\omega}=(\energy{E}_n-\energy{E}_i)/\hbar$ and adds a factor $1/\hbar$. The time-averaged energy density and Poynting magnitude of a Gaussian-unit plane wave with vector potential amplitude $A$ and its conjugate are $\energy{u}=\signal{\omega}^2|A|^2/(2\pi c^2)$ and $\energy{S}=c\energy{u}$.

Expressing the mode strength in terms of the spectral intensity $\energy{I}(\signal{\omega})$, the notes give the absorption rate for the specified direction and polarization as
$$
\Gamma_{i\to n}^{\mathrm{abs}}
=\frac{4\pi^2\electric{q}^2}{\hbar^2 c\signal{\omega}^2}
\energy{I}(\signal{\omega})
|\langle n\vert\boldsymbol\epsilon_s\cdot\mathbf j(-\signal{\mathbf k})\vert i\rangle|^2.
$$

#### Induced emission

For the reverse transition, the matrix element is $\langle i\vert\boldsymbol\epsilon_s^*\cdot\mathbf j(\signal{\mathbf k})\vert n\rangle$. It is the complex conjugate of the absorption matrix element because $\mathbf j(\signal{\mathbf k})^\dagger=\mathbf j(-\signal{\mathbf k})$. Hence the induced emission and absorption rates are equal for the same incident field and the same pair of states.

In a box at fixed temperature, a photon mode has mean occupation
$$
\overline N(\signal{k})
=\frac{\sum_{N=0}^\infty N e^{-N\hbar c\signal{k}/(k_B\thermal{T})}}
{\sum_{N=0}^\infty e^{-N\hbar c\signal{k}/(k_B\thermal{T})}}
=\frac1{e^{\hbar c\signal{k}/(k_B\thermal{T})}-1}.
$$
For two individual atomic states, their equilibrium probability ratio is $P_n/P_i=e^{-(\energy{E}_n-\energy{E}_i)/(k_B\thermal{T})}$.

### PDF page 35

At thermal equilibrium the mean photon occupation is constant. For a pair of atomic levels $i,n$ and one resonant mode, absorption removes photons at rate $B\overline N P_i$, induced emission adds them at rate $B\overline N P_n$, and spontaneous emission adds them at rate $AP_n$. Here $B$ is the induced transition rate per photon in that mode. The balance condition is
$$
-B\overline N P_i+B\overline N P_n+AP_n=0,
\qquad
A=B\overline N\left(\frac{P_i}{P_n}-1\right).
$$
At resonance, $\energy{E}_n-\energy{E}_i=\hbar\signal{\omega}$. The equilibrium ratio $P_i/P_n=e^{\hbar\signal{\omega}/(k_B\thermal{T})}$ and the mean occupation $\overline N=[e^{\hbar\signal{\omega}/(k_B\thermal{T})}-1]^{-1}$ give $A=B$ in this per-mode normalization.

#### Lecture, February 12, 2018

For the midterm, evaluate the time integrals. Matrix elements may be left in integral form. The emphasis is on the treatment of time-dependent perturbations.

For the thermal photon occupation, $\hbar\signal{\omega}=\hbar c\signal{k}$ and the notes set $k_B=1$. With $\alpha=\hbar c\signal{k}/(k_B\thermal{T})$, the denominator is the geometric series $\sum_{N\geq0}e^{-N\alpha}=1/(1-e^{-\alpha})$. The numerator follows from $Ne^{-N\alpha}=-d(e^{-N\alpha})/d\alpha$. Taking the ratio gives $\overline N=1/(e^\alpha-1)$.

### PDF page 36

The February 12 lecture revisits the photon balance for a lower atomic state $0$ and an upper state $n$. Their occupation probabilities satisfy $P_n/P_0=\exp[-(\energy{E}_n-\energy{E}_0)/(k_B\thermal{T})]$. For a field with $N(\signal{k})$ photons, the three contributions to the photon-number derivative are
$$
\left.\frac{dN}{d\mechanical{t}}\right|_{\mathrm{abs}}=-BN(\signal{k})P_0,\qquad
\left.\frac{dN}{d\mechanical{t}}\right|_{\mathrm{ind}}=BN(\signal{k})P_n,\qquad
\left.\frac{dN}{d\mechanical{t}}\right|_{\mathrm{sp}}=AP_n.
$$
The rates linear in the photon number can be averaged using $\overline N(\signal{k})$. Setting their sum to zero gives
$$
(A+B\overline N)P_n=B\overline N P_0,\qquad
A=B\frac{\exp[(\energy{E}_n-\energy{E}_0)/(k_B\thermal{T})]-1}
{\exp[\hbar c\signal{k}/(k_B\thermal{T})]-1}.
$$
At resonance the two exponential factors match. The induced emission rate is proportional to the spectral intensity $\energy{I}(\signal{\omega})$ times $|\langle 0\vert\mathbf j(\signal{\mathbf k})\cdot\boldsymbol\epsilon_s^*\vert n\rangle|^2$, with the same prefactor as for absorption on page 34. At fixed frequency, the intensity is proportional to the squared magnitude of the radiation amplitude.

### PDF page 37

Equating the Gaussian-unit energy of a mode to $N\hbar\signal{\omega}$ gives the notes' continuum mode-strength normalization
$$
|A(\signal{\mathbf k},s)|^2
=\frac{2\pi\hbar c^2}{\signal{\omega}}N(\signal{\mathbf k},s).
$$
For a single discrete plane wave with one-photon energy distributed over a box, the squared field amplitude has an additional inverse-volume factor. In the continuum convention the induced emission rate is
$$
\Gamma_{n\to i}^{\mathrm{ind}}
=\frac{2\pi\electric{q}^2\signal{\omega}^2}{\hbar^2 c^2(2\pi c)^3}
\int d\Omega\sum_s |A(\signal{\mathbf k},s)|^2
|\langle i\vert\mathbf j(\signal{\mathbf k})\cdot\boldsymbol\epsilon_s^*\vert n\rangle|^2,
$$
evaluated at $\energy{E}_n-\energy{E}_i=\hbar c\signal{k}$. This suggests treating the electromagnetic field as a collection of harmonic oscillators and quantizing its modes.

A scalar-field analogy starts with a Lagrangian density proportional to $(\partial_{\mechanical{t}}\varphi)^2-(\nabla\varphi)^2$ in units with $c=1$. Discretize space into sites. With spacing absorbed into the units, the expression becomes a sum of $\dot\varphi_i^2-(\varphi_{i+1}-\varphi_i)^2$. The squared differences couple neighboring sites, and a normal-mode transformation gives independent oscillators.

#### Electric dipole radiation

Put the origin at the atom's center. If the wavelength is much larger than the atom, then $|\signal{\mathbf k}\cdot\mechanical{\mathbf r}|\ll1$ where the current matrix element is appreciable. Expand
$$
e^{-i\signal{\mathbf k}\cdot\mechanical{\mathbf r}}
=1-i\signal{\mathbf k}\cdot\mechanical{\mathbf r}
+O((\signal{\mathbf k}\cdot\mechanical{\mathbf r})^2).
$$
The leading term in $\langle0\vert\mathbf j(\signal{\mathbf k})\vert n\rangle$ is the spatial integral of $\langle0\vert\mathbf j(\mechanical{\mathbf r})\vert n\rangle$. For identical particles, the integrated number current is
$$
\mathbf j_0=\sum_i\frac{\mechanical{\widehat{\mathbf p}}_i}{\mechanical{m}}
=\frac1{i\hbar}[\mechanical{\mathbf R},H_0],
\qquad
\mechanical{\mathbf R}=\sum_i\mechanical{\mathbf r}_i.
$$
The terms with additional powers of $\signal{\mathbf k}\cdot\mechanical{\mathbf r}$ are dropped in the electric dipole approximation.

### PDF page 38

For $H_0\lvert n\rangle=\energy{E}_n\lvert n\rangle$,
$$
\langle0\vert\mathbf j_0\vert n\rangle
=\frac{\energy{E}_n-\energy{E}_0}{i\hbar}\langle0\vert\mechanical{\mathbf R}\vert n\rangle
=-i\signal{\omega}\,\mathbf d_{0n},
\qquad
\mathbf d_{0n}=\langle0\vert\mechanical{\mathbf R}\vert n\rangle.
$$
The notes factor out the charge from $\mathbf d_{0n}$, so the electric transition dipole is $\electric{q}\mathbf d_{0n}$. The diagonal matrix element $\electric{q}\langle n\vert\mechanical{\mathbf R}\vert n\rangle$ is the expectation value of the electric dipole in state $n$. The off-diagonal matrix element governs radiation. The Gaussian-unit power into a polarization and direction is
$$
\frac{d\energy{P}_{\mathrm{rad}}}{d\Omega}
=\frac{\signal{\omega}^4\electric{q}^2}{2\pi c^3}
|\mathbf d_{0n}\cdot\boldsymbol\epsilon_s^*|^2.
$$
Write $\mathbf d_{0n}=\mathbf d_{0n,\perp}+(\mathbf d_{0n}\cdot\widehat{\mathbf k})\widehat{\mathbf k}$. Only the transverse part enters the dot product with $\boldsymbol\epsilon_s$.

For a rotationally invariant $H_0$, the initial and final atomic states can be chosen as eigenstates of $\mechanical{\mathbf L}^2$ and $\mechanical{L}_z$, with labels $n,\ell,m$. The orbital angular momentum is $\mechanical{\mathbf L}=\sum_i\mechanical{\mathbf r}_i\times\mechanical{\widehat{\mathbf p}}_i$. Its $z$ component commutes with the $z$ components of position and momentum. The perturbation can change the angular momentum quantum numbers subject to selection rules.

### PDF page 39

For the dipole matrix element $\langle n'\ell'm'\vert\mechanical{\mathbf R}\vert n\ell m\rangle$, the $z$ component obeys a selection rule. Since $[\mechanical{L}_z,\mechanical{R}_z]=0$, take its matrix element between angular momentum eigenstates:
$$
0=\langle n'\ell'm'\vert[\mechanical{L}_z,\mechanical{R}_z]\vert n\ell m\rangle
=\hbar(m'-m)\langle n'\ell'm'\vert\mechanical{R}_z\vert n\ell m\rangle.
$$
Thus the $z$-component matrix element is zero when $m'\ne m$. If $m'=m$, this commutator gives no constraint on its magnitude.

#### Lecture, February 14, 2018

The notes remark that Yuri chooses exam problems to teach something. The lecture reviews the electric dipole power and the transverse projection. With $\widehat{\mathbf k}\cdot\boldsymbol\epsilon_s=0$,
$$
\mathbf d_{0n,\perp}=\mathbf d_{0n}-(\mathbf d_{0n}\cdot\widehat{\mathbf k})\widehat{\mathbf k},
\qquad
\mathbf d_{0n,\perp}\cdot\boldsymbol\epsilon_s
=\mathbf d_{0n}\cdot\boldsymbol\epsilon_s.
$$
The angular power is proportional to $\signal{\omega}^4|\mathbf d_{0n}\cdot\boldsymbol\epsilon_s^*|^2$. The notes repeat the derivation of $[\mechanical{L}_z,\mechanical{R}_z]=0$ using $\mechanical{\mathbf L}=\mechanical{\mathbf r}\times\mechanical{\mathbf p}$, and then consider a dipole along the $z$-axis to study its radiation pattern.

### PDF page 40

For $m'=m$, the dipole lies along the $z$ direction if it is nonzero. Viewed in a direction $\widehat{\mathbf k}$ at angle $\theta$ from that axis, its squared transverse projection is $|\mathbf d_{0n}|^2\sin^2\theta$.

![[Kyle Kabasares - Quantum Mechanics II - Dipole observation angle.png|**Fig. 18** The angle between the dipole axis and the observation direction sets the transverse projection.]]

For the transverse components, use
$$
[\mechanical{L}_z,\mechanical{R}_x]=i\hbar\mechanical{R}_y,\qquad
[\mechanical{L}_z,\mechanical{R}_y]=-i\hbar\mechanical{R}_x.
$$
Write $X=\langle\ell'm'\vert\mechanical{R}_x\vert\ell m\rangle$ and $Y=\langle\ell'm'\vert\mechanical{R}_y\vert\ell m\rangle$. Acting with $\mechanical{L}_z$ on the bra and ket gives $(m'-m)X=iY$ and $(m'-m)Y=-iX$. Therefore $[(m'-m)^2-1]X=0$, so a nonzero transverse matrix element requires $m'-m=\pm1$. Its components are proportional to $(1,\mp i,0)$ for $m'-m=\pm1$.

For propagation along the positive $z$ direction, the two signs couple to opposite circular polarizations. The lecture calls the photon right circular for emission with $m'=m-1$ and left circular for $m'=m+1$. The decrease of the atomic $z$ projection in the first case is one unit of $\hbar$.

![[Kyle Kabasares - Quantum Mechanics II - Circular polarization geometry.png|**Fig. 19** The sketch relates the wave direction and circular polarization to the change of the atomic magnetic quantum number.]]

### PDF page 41

In the dipole limit $e^{-i\signal{\mathbf k}\cdot\mechanical{\mathbf r}}\simeq1-i\signal{\mathbf k}\cdot\mechanical{\mathbf r}$. The leading term gives the dipole projection transverse to the propagation direction.

![[Kyle Kabasares - Quantum Mechanics II - Dipole transverse component.png|**Fig. 20** The perpendicular projection of a vertical dipole has magnitude $|\mathbf d_{0n}|\sin\theta$.]]

For a single particle in a central potential, the notes derive the orbital selection rule from the position operator and the double commutator
$$
[\mechanical{\mathbf L}^2,[\mechanical{\mathbf L}^2,\mechanical{\mathbf r}]]
=2\hbar^2(\mechanical{\mathbf L}^2\mechanical{\mathbf r}+\mechanical{\mathbf r}\mechanical{\mathbf L}^2).
$$
On the left, the expanded terms are $(\mechanical{\mathbf L}^2)^2\mechanical{\mathbf r}-2\mechanical{\mathbf L}^2\mechanical{\mathbf r}\mechanical{\mathbf L}^2+\mechanical{\mathbf r}(\mechanical{\mathbf L}^2)^2$. Take the matrix element between states of orbital angular momentum $\ell'$ and $\ell$. After canceling $\hbar^4$ and factoring the resulting polynomial, one obtains
$$
(\ell+\ell')(\ell+\ell'+2)\bigl[(\ell'-\ell)^2-1\bigr]
\langle\ell'm'\vert\mechanical{\mathbf r}\vert\ell m\rangle=0.
$$
When both labels are zero, the vector matrix element vanishes by parity. Otherwise the first two factors are nonzero, so the dipole transition requires $\ell'=\ell\pm1$. Angular momentum is conserved for the combined atom and radiation system when their interaction is rotationally invariant.

#### Rotations and angular momentum

A plane coordinate rotation has the matrix
$$
O(\alpha)=\begin{pmatrix}\cos\alpha&\sin\alpha\\-\sin\alpha&\cos\alpha\end{pmatrix},
\qquad
\begin{pmatrix}x'\\y'\end{pmatrix}=O(\alpha)\begin{pmatrix}x\\y\end{pmatrix}.
$$
It belongs to $O(2)$ because $O^{\mathsf T}O=I$. For any orthogonal matrix, taking determinants of this identity gives $(\det O)^2=1$.

### PDF page 42

A real orthogonal matrix has determinant $+1$ or $-1$. The reflection $\operatorname{diag}(1,-1)$ has determinant $-1$ and squares to the identity. Orthogonal matrices form a group under multiplication, since the product of two is orthogonal and $O^{-1}=O^{\mathsf T}$. The special orthogonal group $SO(2)$ is the subgroup of real $2\times2$ orthogonal matrices with determinant $+1$.

Use the Hermitian generator
$$
T=\begin{pmatrix}0&i\\-i&0\end{pmatrix}.
$$
Its square is $I$, so its even powers equal $I$ and its odd powers equal $T$. Expanding the exponential gives
$$
\begin{aligned}
e^{-i\alpha T}
&=I-i\alpha T-\frac{\alpha^2}{2!}I+\frac{i\alpha^3}{3!}T+\cdots\\
&=I\cos\alpha-iT\sin\alpha
=\begin{pmatrix}\cos\alpha&\sin\alpha\\-\sin\alpha&\cos\alpha\end{pmatrix}.
\end{aligned}
$$
The real antisymmetric generator in the exponent is $-iT$. Every element of $SO(2)$ has this form for some $\alpha$.

### PDF page 43

An infinitesimal plane rotation is $I-i\epsilon T+O(\epsilon^2)$. In the one-dimensional complex representation, take the generator to be the number 1. The finite transformations are complex numbers of modulus one. Their multiplication adds angles, $e^{i\alpha_1}e^{i\alpha_2}=e^{i(\alpha_1+\alpha_2)}$, and their unitarity condition is $U^\dagger U=1$. Thus the plane rotation group $SO(2)$ is isomorphic to $U(1)$.

#### The three-dimensional rotation group

A real $3\times3$ matrix with $O^{\mathsf T}O=I_3$ belongs to $O(3)$ and has determinant $\pm1$. The subgroup $SO(3)$ consists of the proper rotations with determinant $+1$. For the coordinate rotation convention on the preceding pages,
$$
O_z(\phi)=
\begin{pmatrix}\cos\phi&\sin\phi&0\\-\sin\phi&\cos\phi&0\\0&0&1\end{pmatrix}.
$$
For small angle $\epsilon$, $O_z(\epsilon)=I_3-i\epsilon L_z+O(\epsilon^2)$. The dimensionless generators for this coordinate convention are
$$
L_x=\begin{pmatrix}0&0&0\\0&0&i\\0&-i&0\end{pmatrix},\qquad
L_y=\begin{pmatrix}0&0&-i\\0&0&0\\i&0&0\end{pmatrix},\qquad
L_z=\begin{pmatrix}0&i&0\\-i&0&0\\0&0&0\end{pmatrix}.
$$
Composing infinitesimal rotations gives the finite transformation $O_z(\phi)=e^{-i\phi L_z}$.

### PDF page 44

To first order, $O_j(\epsilon)=I_3-i\epsilon L_j$. In particular,
$$
O_z(\epsilon)=\begin{pmatrix}1&\epsilon&0\\-\epsilon&1&0\\0&0&1\end{pmatrix}
+O(\epsilon^2).
$$
Compare the two orders of the small $x$ and $y$ rotations. The linear terms cancel, and the leading difference is
$$
O_y(\epsilon)O_x(\epsilon)-O_x(\epsilon)O_y(\epsilon)
=\epsilon^2[L_x,L_y]+O(\epsilon^3)
=\begin{pmatrix}0&-\epsilon^2&0\\\epsilon^2&0&0\\0&0&0\end{pmatrix}
+O(\epsilon^3).
$$
This is $O_z(-\epsilon^2)-I_3$ to the displayed order. The matrices on page 43 obey $[L_i,L_j]=-i\varepsilon_{ijk}L_k$. The usual active generators are their negatives and obey the positive-sign convention $[J_i,J_j]=i\varepsilon_{ijk}J_k$. The source places the active algebra next to the passive coordinate matrices. The two orders of the rotations give different results, as in the composition of Euler rotations.

For a rotation about $\widehat{\mathbf n}$, set $\boldsymbol\omega=\phi\widehat{\mathbf n}$ for the angle-axis parameter. The rotation $e^{-i\boldsymbol\omega\cdot\mathbf L}$ acts on the components of a vector, such as $\magnetic{\mathbf A}$. Its expansion is
$$
e^{-i\phi\,\widehat{\mathbf n}\cdot\mathbf L}
=I_3-i\phi\,\widehat{\mathbf n}\cdot\mathbf L
-\frac{\phi^2}{2}(\widehat{\mathbf n}\cdot\mathbf L)^2+O(\phi^3).
$$
The notes record that the following week's discussion is canceled.

### PDF page 45

#### Lecture, February 16, 2018 — General rotations

Write an angle-axis rotation as $R(\phi,\widehat{\mathbf n})=e^{-i\phi\widehat{\mathbf n}\cdot\mathbf L}$, with $\phi\widehat{\mathbf n}$ the rotation parameter. The term of order $\phi^2$ in the expansion is $-\phi^2(\widehat{\mathbf n}\cdot\mathbf L)^2/2$. The square contains $n_x^2L_x^2+n_y^2L_y^2+n_z^2L_z^2$ and cross terms such as $n_xn_y(L_xL_y+L_yL_x)$.

Here the notes switch to the active convention, with $L_z=\begin{pmatrix}0&-i&0\\i&0&0\\0&0&0\end{pmatrix}$ and $L_z^2=\operatorname{diag}(1,1,0)$. Using $[L_x,L_y]=iL_z$ gives $L_xL_y+L_yL_x=2L_xL_y-iL_z$.

For quantum states, a linear combination of basis functions $\psi_{n\ell m}$ gives a vector in Hilbert space. For the hydrogen bound states, fixing $n$ leaves a subspace with $0\leq\ell\leq n-1$ and $-\ell\leq m\leq\ell$, of dimension $\sum_{\ell=0}^{n-1}(2\ell+1)=n^2$ when spin is ignored. Fixing both $n$ and $\ell$ leaves a $(2\ell+1)$-dimensional subspace. For example, when $\ell=1$ its vectors have the form
$$
C_1\lvert n,1,1\rangle+C_0\lvert n,1,0\rangle+C_{-1}\lvert n,1,-1\rangle.
$$

### PDF page 46

The quantization axis may be changed by rotating the coordinate axes. For $\ell=1$, the three basis states labeled by $m=1,0,-1$ span a three-dimensional space. Rotations mix the three components within that space. The associated matrices give a representation of the rotation group.

![[Kyle Kabasares - Quantum Mechanics II - Angular momentum basis axes.png|**Fig. 21** Rotating the axes changes the basis used to label the magnetic quantum number.]]

For fixed $n,\ell$, a state $\lvert\alpha\rangle$ is specified by its $2\ell+1$ coefficients. For $\ell=2$, for instance, it is $\sum_{m=-2}^{2} C_m\lvert n,2,m\rangle$. Write the rotated state as $\lvert\alpha(R)\rangle=D(R)\lvert\alpha\rangle$. Applying $R_1$ followed by $R_2$ gives
$$
D(R_2R_1)=D(R_2)D(R_1).
$$
The operators are unitary, with $D(R)^\dagger=D(R^{-1})$ and $D(R)^\dagger D(R)=I$. Thus $\langle\alpha\vert D(R)^\dagger D(R)\vert\alpha\rangle=\langle\alpha\vert\alpha\rangle$.

### PDF page 47

In the active convention, the difference between two orders of infinitesimal rotations is
$$
O_x(\epsilon_x)O_y(\epsilon_y)-O_y(\epsilon_y)O_x(\epsilon_x)
=-\epsilon_x\epsilon_y[L_x,L_y]+\text{higher orders}.
$$
Since $[L_x,L_y]=iL_z$, the leading term is $-i\epsilon_x\epsilon_y L_z=O_z(\epsilon_x\epsilon_y)-I$ to this order. The representation matrices $D(R)$ must reproduce the same composition law. For a fixed-$\ell$ space their generators $T_a$ are $(2\ell+1)\times(2\ell+1)$ matrices, and
$$
D(R)=e^{-i\phi^a T_a},\qquad [T_a,T_b]=i\varepsilon_{abc}T_c
$$
in the active convention. For example, $\ell=2$ gives five-dimensional matrices. The dimensionful quantum angular momenta $\mechanical{L}_a$ obey $[\mechanical{L}_a,\mechanical{L}_b]=i\hbar\varepsilon_{abc}\mechanical{L}_c$, so division by $\hbar$ gives dimensionless generators.

#### Lecture, February 21, 2018

The instructor advised against placing too much weight on a score difference such as 23 versus 27 out of 30. The qualifying exam is intended to be comprehensive, including perturbation theory and early fall-quarter material.

The rotation review contrasts the Cartesian vector representation, which acts on $(v_x,v_y,v_z)$, with the representation acting on the three spherical components for $\ell=1$. In Cartesian coordinates a rotation uses the matrix exponential with the angle-axis parameter $\boldsymbol\omega=\phi\widehat{\mathbf n}$.

### PDF page 48

For $\ell=2$, the five basis functions have $m=2,1,0,-1,-2$. Different representations use different matrices, but their generators obey the same rotation algebra. For the active Cartesian generators, $[L_x,L_y]=iL_z$ and $[L_y,L_x]=-iL_z$. The quantum rotation operator corresponding to $e^{-i\boldsymbol\omega\cdot\mathbf L}$ in the Cartesian representation is $e^{-i\boldsymbol\omega\cdot\mechanical{\widehat{\mathbf L}}/\hbar}$. The dimensionless matrices $J_i$ on the fixed-$\ell$ space obey $[J_i,J_j]=i\varepsilon_{ijk}J_k$.

The outer product $T=VW^{\mathsf T}$ of two three-component vectors is a $3\times3$ matrix or rank-two tensor. Under $O=e^{-i\boldsymbol\omega\cdot\mathbf L}$, it transforms as $T\mapsto OTO^{\mathsf T}$. The notes start to separate the trace and symmetric traceless parts. Including the antisymmetric part gives the complete decomposition:
$$
T=\frac{\operatorname{tr}T}{3}I_3
+\left[\frac{T+T^{\mathsf T}}2-\frac{\operatorname{tr}T}{3}I_3\right]
+\frac{T-T^{\mathsf T}}2.
$$
Each part transforms separately under rotations.

### PDF page 49

The outer product $T^i{}_j=V^iW_j$ splits into its trace part, symmetric traceless part $S$, and antisymmetric part $A$. The parts have dimensions $1$, $5$, and $3$, respectively. Under a rotation,
$$
T'=OTO^{\mathsf T}=\tfrac13(\operatorname{tr}T)I_3+OSO^{\mathsf T}+OAO^{\mathsf T}.
$$
The trace is invariant because $\operatorname{tr}(OTO^{\mathsf T})=\operatorname{tr}(O^{\mathsf T}OT)=\operatorname{tr}T$. Also $(OSO^{\mathsf T})^{\mathsf T}=OSO^{\mathsf T}$ and $(OAO^{\mathsf T})^{\mathsf T}=-OAO^{\mathsf T}$, so the symmetric and antisymmetric spaces are preserved. The Cartesian generator matrices are antisymmetric under transpose, as seen in $O=I-i\boldsymbol\omega\cdot\mathbf L+\cdots$.

An antisymmetric three-dimensional tensor can be represented by an axial vector. For example, $\mechanical{\mathbf L}=\mechanical{\mathbf r}\times\mechanical{\mathbf p}$ transforms under an orthogonal matrix $O$ with the extra factor $\det O$. It is invariant under spatial inversion.

A product state is written $\lvert n_1,\ell_1,m_1\rangle\otimes\lvert n_2,\ell_2,m_2\rangle$. The notes consider coupling a vector to a symmetric traceless tensor, corresponding to $\ell_1=1$ and $\ell_2=2$. Their product gives $\ell_{\mathrm{tot}}=3,2,1$, with dimensions $7,5,3$ adding to $15$.

### PDF page 50

#### Unitary rotations and the Pauli matrices

The rotation algebra has a two-dimensional spinor representation. This is a representation of $SU(2)$, which is locally isomorphic to $SO(3)$ and double-covers it. The notes introduce it by considering the group $U(2)$ of $2\times2$ matrices with $U^\dagger U=I$. Taking determinants yields $|\det U|^2=1$, so $\det U=e^{i\alpha}$ for real $\alpha$. Restricting to determinant one gives the special unitary group $SU(2)$.

Use the Hermitian, traceless Pauli matrices. In the convention with $[\sigma_x,\sigma_y]=2i\sigma_z$, they are
$$
\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad
\sigma_y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\qquad
\sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.
$$
The handwritten $\sigma_y$ has the opposite sign. The matrices above use the sign consistent with the stated commutator convention. Let $\boldsymbol\omega=\phi\widehat{\mathbf n}$ as before. Then
$$
g=e^{-i\boldsymbol\omega\cdot\boldsymbol\sigma/2}
=I-\frac i2\boldsymbol\omega\cdot\boldsymbol\sigma
-\frac18(\boldsymbol\omega\cdot\boldsymbol\sigma)^2+\cdots.
$$
Hermiticity gives $g^\dagger g=I$. The determinant of $g$ is one because the determinant of a matrix exponential is the exponential of its trace and the Pauli matrices are traceless.

The generators $T_i=\sigma_i/2$ obey $[T_i,T_j]=i\varepsilon_{ijk}T_k$, the same algebra as the active rotation generators on three-component vectors. The two groups have the same local rotation parameters, and $g$ and $-g$ induce the same spatial rotation.

### PDF page 51

#### Lecture, February 26, 2018

An infinitesimal coordinate rotation acts on Cartesian components $(V_x,V_y,V_z)$ as $(I_3-i\epsilon L_z)\mathbf V$ for the passive generator on page 43. In the $\ell=1$ spherical basis ordered by $m=1,0,-1$, the dimensionless quantum generator $\mechanical{L}_z/\hbar$ is $\operatorname{diag}(1,0,-1)$. The dimensionful operators satisfy $[\mechanical{L}_i,\mechanical{L}_j]=i\hbar\varepsilon_{ijk}\mechanical{L}_k$.

For two systems with $\ell_1=\ell_2=1$, there are nine product states labeled by $(m_1,m_2)$, each label taking the values $1,0,-1$. The extreme states of the $\ell=2$ multiplet are $\lvert1,1\rangle$ and $\lvert-1,-1\rangle$ in the product basis. The next two are
$$
\begin{aligned}
\lvert\ell=2,m=1\rangle&=\frac{\lvert1,0\rangle+\lvert0,1\rangle}{\sqrt2},\\
\lvert\ell=2,m=-1\rangle&=\frac{\lvert-1,0\rangle+\lvert0,-1\rangle}{\sqrt2}.
\end{aligned}
$$
In the usual ladder-operator phase convention the normalized singlet is
$$
\lvert\ell=0,m=0\rangle=\frac{\lvert1,-1\rangle-\lvert0,0\rangle+\lvert-1,1\rangle}{\sqrt3}.
$$
The middle coefficient has a minus sign so that total raising and lowering annihilate the singlet.

### PDF page 52

For two $\ell=1$ systems, the antisymmetric triplet has the coupled states
$$
\begin{aligned}
\lvert\ell=1,m=1\rangle&=\frac{\lvert1,0\rangle-\lvert0,1\rangle}{\sqrt2},\\
\lvert\ell=1,m=0\rangle&=\frac{\lvert1,-1\rangle-\lvert-1,1\rangle}{\sqrt2},\\
\lvert\ell=1,m=-1\rangle&=\frac{\lvert0,-1\rangle-\lvert-1,0\rangle}{\sqrt2}.
\end{aligned}
$$
The $m=0$ quintet state is
$$
\lvert\ell=2,m=0\rangle=\frac{\lvert1,-1\rangle+2\lvert0,0\rangle+\lvert-1,1\rangle}{\sqrt6}.
$$
These signs follow by applying the total lowering operator to the states with $m=1$. The triplet has no $\lvert0,0\rangle$ term, and the quintet is orthogonal to the singlet on the preceding page.

#### Spinor rotation

The matrices $\sigma_i/2$ generate rotations on the spin components of a two-component wavefunction:
$$
\begin{pmatrix}\psi_\uparrow(\mechanical{\mathbf x})\\\psi_\downarrow(\mechanical{\mathbf x})\end{pmatrix}
=\psi_\uparrow(\mechanical{\mathbf x})\begin{pmatrix}1\\0\end{pmatrix}
+\psi_\downarrow(\mechanical{\mathbf x})\begin{pmatrix}0\\1\end{pmatrix}.
$$
For a spin rotation by $\phi$ about $\widehat{\mathbf n}$, the infinitesimal matrix is $I-i\phi\boldsymbol\sigma\cdot\widehat{\mathbf n}/2$, and the finite matrix is its corresponding exponential. About $z$, even and odd powers of $\sigma_z$ give
$$
e^{-i\phi\sigma_z/2}=\cos(\phi/2)I-i\sin(\phi/2)\sigma_z.
$$
At $\phi=2\pi$ the spinor is multiplied by $-1$. The state ray is the same, but the spinor has acquired a phase of $\pi$.

### PDF page 53

The spin-up and spin-down basis states are $\lvert\uparrow\rangle$ and $\lvert\downarrow\rangle$. A general one-particle spinor is $\psi_\uparrow\lvert\uparrow\rangle+\psi_\downarrow\lvert\downarrow\rangle$, with each spatial component expandable in $\lvert n,\ell,m\rangle$. In occupation-number notation, $\lvert\uparrow\rangle=a_\uparrow^\dagger\lvert0\rangle$ and $\lvert\downarrow\rangle=a_\downarrow^\dagger\lvert0\rangle$, where $\lvert0\rangle$ is the vacuum. Bosonic creation and annihilation operators obey canonical commutation relations. Fermionic operators obey the corresponding anticommutation relations. Quantizing the electromagnetic field gives photons with spin 1 and two transverse helicities.

The operators $\mechanical{\mathbf L}_1$ and $\mechanical{\mathbf L}_2$ act on different particle spaces, so all components of one commute with those of the other. Their sum $\mechanical{\mathbf L}$ satisfies
$$
\mechanical{\mathbf L}^2=\mechanical{\mathbf L}_1^2+2\mechanical{\mathbf L}_1\cdot\mechanical{\mathbf L}_2+\mechanical{\mathbf L}_2^2.
$$
This square commutes with $\mechanical{\mathbf L}_1^2$, $\mechanical{\mathbf L}_2^2$, and $\mechanical{L}_z=\mechanical{L}_{1z}+\mechanical{L}_{2z}$. In general it does not commute with the separate projections $\mechanical{L}_{1z}$ and $\mechanical{L}_{2z}$. The mutually commuting set $\{\mechanical{\mathbf L}^2,\mechanical{L}_z,\mechanical{\mathbf L}_1^2,\mechanical{\mathbf L}_2^2\}$ labels the coupled basis. The separate squares and separate projections label the product basis.

### PDF page 54

The product basis diagonalizes $\{\mechanical{\mathbf L}_1^2,\mechanical{\mathbf L}_2^2,\mechanical{L}_{1z},\mechanical{L}_{2z}\}$. For a two-particle orbital system, define $\mechanical{\mathbf J}=\mechanical{\mathbf L}_1+\mechanical{\mathbf L}_2$. For one particle with orbital motion and spin, define $\mechanical{\mathbf J}=\mechanical{\mathbf L}+\mechanical{\mathbf S}$. The components of each angular momentum obey the same algebra:
$$
[\mechanical{L}_i,\mechanical{L}_j]=i\hbar\varepsilon_{ijk}\mechanical{L}_k,\qquad
[\mechanical{S}_i,\mechanical{S}_j]=i\hbar\varepsilon_{ijk}\mechanical{S}_k,\qquad
[\mechanical{J}_i,\mechanical{J}_j]=i\hbar\varepsilon_{ijk}\mechanical{J}_k.
$$
For spin $1/2$, $\mechanical{S}_i=\hbar\sigma_i/2$. In a spinor wavefunction, $\mechanical{\mathbf L}$ acts on the spatial functions and $\mechanical{\mathbf S}$ acts on the spin components. Their sum acts on the full state.

Two spin-$1/2$ particles have a symmetric triplet and an antisymmetric singlet:
$$
\begin{aligned}
\lvert j=1,m=1\rangle&=\lvert\uparrow\uparrow\rangle,\\
\lvert j=1,m=0\rangle&=(\lvert\uparrow\downarrow\rangle+\lvert\downarrow\uparrow\rangle)/\sqrt2,\\
\lvert j=1,m=-1\rangle&=\lvert\downarrow\downarrow\rangle,\\
\lvert j=0,m=0\rangle&=(\lvert\uparrow\downarrow\rangle-\lvert\downarrow\uparrow\rangle)/\sqrt2.
\end{aligned}
$$
The triplet has the same three projection labels as the orbital $\ell=1$ representation.

### PDF page 55

A real three-vector $\mathbf r=(x,y,z)$ corresponds to the traceless Hermitian matrix
$$
\mathbf r\cdot\boldsymbol\sigma=
\begin{pmatrix}z&x-iy\\x+iy&-z\end{pmatrix}.
$$
With $g=e^{-i\phi\widehat{\mathbf n}\cdot\boldsymbol\sigma/2}$, the transformation $g^\dagger(\mathbf r\cdot\boldsymbol\sigma)g$ gives the components of the passively rotated vector. For rotation about $z$ these are $x'=x\cos\phi+y\sin\phi$, $y'=-x\sin\phi+y\cos\phi$, and $z'=z$. A spinor column times a spinor row gives another example of a $2\times2$ matrix.

#### Lecture, February 28, 2018

A scalar is invariant under rotation. A Cartesian vector transforms as $\mathbf A\mapsto O\mathbf A$, where $O=e^{-i\phi\widehat{\mathbf n}\cdot\mathbf L}$ for the chosen Cartesian generators. A two-component spinor transforms under $g$. These are different representations of rotations.

The hydrogen ground-state spatial wavefunction is radial. The excited multiplet $n=2,\ell=1$ has three basis states labeled by $m=1,0,-1$. At fixed $n,\ell=1$, a state is $\psi=C_1\psi_{n,1,1}+C_0\psi_{n,1,0}+C_{-1}\psi_{n,1,-1}$, and the coefficient column represents it in this basis. Each basis wavefunction is normalized. Spin can be included by combining the orbital states with the spinor basis columns.

### PDF page 56

A spatial ground-state function depending only on radius is invariant under spatial rotation. It can multiply an arbitrary spinor $c_1\lvert\downarrow\rangle+c_2\lvert\uparrow\rangle$. If both coefficients are nonzero, the state has no definite spin projection on the $z$-axis. The notation $\lvert n\ell m,\uparrow\rangle$ or $\lvert n\ell m,\downarrow\rangle$ specifies both the orbital state and the spin projection.

#### Quantum angular momentum and spin operators

The position-space orbital operator and the spin-$1/2$ operator are
$$
\mechanical{\widehat{\mathbf L}}=-i\hbar\mechanical{\mathbf r}\times\nabla,\qquad
\mechanical{\widehat{\mathbf S}}=\frac{\hbar}{2}\boldsymbol\sigma.
$$
Dividing by $\hbar$ gives the generators of the orbital and spin rotations, respectively. Acting on the spin basis, $\mechanical{\widehat S}_z\lvert\uparrow\rangle=(\hbar/2)\lvert\uparrow\rangle$ and $\mechanical{\widehat S}_z\lvert\downarrow\rangle=-(\hbar/2)\lvert\downarrow\rangle$. Since each Pauli matrix squares to the identity, $\mechanical{\widehat{\mathbf S}}^2=(\hbar^2/4)(\sigma_x^2+\sigma_y^2+\sigma_z^2)=3\hbar^2 I/4$. Both basis states have the same spin magnitude.

### PDF page 57

The orbital eigenvalues of $\mechanical{\mathbf L}^2$ and $\mechanical{L}_z$ are $\hbar^2\ell(\ell+1)$ and $\hbar m$, respectively, with $m=-\ell,\ldots,\ell$. Spin has squared magnitude $\hbar^2s(s+1)$ and projections $\hbar m_s$, where $m_s=\pm1/2$ for $s=1/2$.

For the total angular momentum define $\mechanical{J}_\pm=\mechanical{J}_x\pm i\mechanical{J}_y$. The cross terms cancel when the two products are added:
$$
\mechanical{\mathbf J}^2=\frac12(\mechanical{J}_+\mechanical{J}_-+\mechanical{J}_-\mechanical{J}_+)+\mechanical{J}_z^2.
$$
The ladder actions in the orbital and total bases are
$$
\begin{aligned}
\mechanical{L}_\pm\lvert n,\ell,m\rangle&=\hbar\sqrt{\ell(\ell+1)-m(m\pm1)}\,\lvert n,\ell,m\pm1\rangle,\\
\mechanical{J}_\pm\lvert j,m_j\rangle&=\hbar\sqrt{j(j+1)-m_j(m_j\pm1)}\,\lvert j,m_j\pm1\rangle.
\end{aligned}
$$
For a spin-$1/2$ particle,
$$
\mechanical{S}_+=\frac{\hbar}{2}(\sigma_x+i\sigma_y)
=\hbar\begin{pmatrix}0&1\\0&0\end{pmatrix},
\qquad
\mechanical{S}_+\lvert\downarrow\rangle=\hbar\lvert\uparrow\rangle.
$$
The ladder formula gives the same result since the square root at $s=1/2$, $m_s=-1/2$ is one. In the handwritten matrix sum the upper-right entry is reduced to one too early, leaving an extra factor of $1/2$.

### PDF page 58

#### Addition of two spins

The two-particle spin basis contains $\lvert\uparrow\uparrow\rangle$, $\lvert\uparrow\downarrow\rangle$, $\lvert\downarrow\uparrow\rangle$, and $\lvert\downarrow\downarrow\rangle$. In the coupled basis the four states have $j=1$ with $m=1,0,-1$, or $j=0$ with $m=0$.

With $\mechanical{\mathbf J}=\mechanical{\mathbf S}_1+\mechanical{\mathbf S}_2$, both single-spin projections contribute $\hbar/2$ to $\mechanical{J}_z\lvert\uparrow\uparrow\rangle$. To determine the squared magnitude, use
$$
\mechanical{\mathbf S}_1\cdot\mechanical{\mathbf S}_2
=\mechanical{S}_{1z}\mechanical{S}_{2z}
+\frac12(\mechanical{S}_{1+}\mechanical{S}_{2-}+\mechanical{S}_{1-}\mechanical{S}_{2+}).
$$
The ladder terms annihilate $\lvert\uparrow\uparrow\rangle$. The projection product gives $\hbar^2/4$, while each individual spin square contributes $3\hbar^2/4$. Hence $\mechanical{\mathbf J}^2\lvert\uparrow\uparrow\rangle=2\hbar^2\lvert\uparrow\uparrow\rangle$, which identifies $\lvert\uparrow\uparrow\rangle=\lvert j=1,m=1\rangle$. The state $\lvert\downarrow\downarrow\rangle$ likewise has $j=1$ and $m=-1$. Both states are symmetric under particle exchange. The mixed product states are exchanged with each other.

### PDF page 59

In the $m=0$ subspace, the symmetric combination of the mixed spin states is the triplet state and the antisymmetric combination is the singlet. Their overlap is $(1-1)/2=0$ because the two product states are orthonormal.

For general $j_1,j_2$, the total projection is $\mechanical{J}_z=\mechanical{J}_{1z}+\mechanical{J}_{2z}$ and $m=m_1+m_2$. The total angular momentum labels range from $|j_1-j_2|$ to $j_1+j_2$ in unit steps. The product basis and coupled basis have equal dimension:
$$
(2j_1+1)(2j_2+1)=\sum_{j=|j_1-j_2|}^{j_1+j_2}(2j+1).
$$
The product of the two highest-projection states, $\lvert j_1,j_1;j_2,j_2\rangle$, has $\mechanical{J}_z$ eigenvalue $\hbar(j_1+j_2)$ and is annihilated by the total raising operator. Its squared total angular momentum eigenvalue is $\hbar^2(j_1+j_2)(j_1+j_2+1)$. Thus it is the highest state of the multiplet $j=j_1+j_2$.

Insert the resolution of the identity in the product basis to express a coupled state:
$$
\lvert j,m;j_1,j_2\rangle
=\sum_{m_1,m_2}\lvert j_1,m_1;j_2,m_2\rangle
\langle j_1,m_1;j_2,m_2\vert j,m;j_1,j_2\rangle.
$$
The overlaps are Clebsch–Gordan coefficients.

### PDF page 60

Let $j=j_1+j_2$ and start with the highest state $\lvert j,j\rangle=\lvert j_1,j_1;j_2,j_2\rangle$. Applying $\mechanical{J}_-$ in the coupled basis yields $\hbar\sqrt{2j}\lvert j,j-1\rangle$. Applying $\mechanical{J}_{1-}+\mechanical{J}_{2-}$ to the same state in the product basis lowers one of the two projections. Equating the results gives
$$
\lvert j,j-1\rangle=
\sqrt{\frac{j_1}{j}}\lvert j_1,j_1-1;j_2,j_2\rangle
+\sqrt{\frac{j_2}{j}}\lvert j_1,j_1;j_2,j_2-1\rangle
$$
for $j>0$, with terms absent when the corresponding spin is zero. Projection onto either product state reads off its Clebsch–Gordan coefficient.

#### Discussion, March 2, 2018

For a two-component spinor $\chi=(\chi_1,\chi_2)^{\mathsf T}$, the antisymmetric tensor
$$
\varepsilon=\begin{pmatrix}0&1\\-1&0\end{pmatrix}=i\sigma_y
$$
maps its components to $(\chi_2,-\chi_1)^{\mathsf T}$. Equivalently, the row with these entries is $\chi^{\mathsf T}\varepsilon^{\mathsf T}$. This is the spinor dual constructed with $\varepsilon$. If $\chi'=g\chi$, then $\varepsilon\chi'=\varepsilon g\chi$ with
$$
g=e^{-i\phi\widehat{\mathbf n}\cdot\boldsymbol\sigma/2}
=I\cos(\phi/2)-i(\widehat{\mathbf n}\cdot\boldsymbol\sigma)\sin(\phi/2).
$$
Invariance of $\varepsilon$ under $SU(2)$, $g^{\mathsf T}\varepsilon g=\varepsilon$, makes the dual row transform by right multiplication with $g^{-1}$.

### PDF page 61

The raised spinor index is $\chi'^a=\varepsilon^{ab}\chi'_b$. The notes refer to volume 4 of the Landau series for an introduction to spinors.

#### Coupling orbital angular momentum and spin one-half

The highest projection of $\mechanical{J}_z=\mechanical{L}_z+\mechanical{S}_z$ is $\hbar(\ell+1/2)$. Consequently the highest coupled state is
$$
\lvert j=\ell+\tfrac12,m_j=\ell+\tfrac12\rangle=\lvert\ell,\ell\rangle\lvert\uparrow\rangle.
$$
To lower it use $\mechanical{J}_-=\mechanical{L}_-+\mechanical{S}_-$. The spin ladder matrices are
$$
\mechanical{S}_+=\hbar\begin{pmatrix}0&1\\0&0\end{pmatrix},\qquad
\mechanical{S}_-=\hbar\begin{pmatrix}0&0\\1&0\end{pmatrix}.
$$
The factors of two in the Pauli matrix sums correct the earlier spin-raising calculation. Acting on the highest state with $\mechanical{J}_-$ gives $\hbar\sqrt{2\ell}\lvert\ell,\ell-1\rangle\lvert\uparrow\rangle+\hbar\lvert\ell,\ell\rangle\lvert\downarrow\rangle$ in the product basis. In the coupled basis the result is $\hbar\sqrt{2\ell+1}\lvert\ell+\tfrac12,\ell-\tfrac12\rangle$. Dividing yields the two Clebsch–Gordan coefficients, $\sqrt{2\ell/(2\ell+1)}$ and $1/\sqrt{2\ell+1}$.

### PDF page 62

In the product basis the projection onto $\lvert\ell,\ell-1;\tfrac12,\tfrac12\rangle$ is the ratio of the orbital and total lowering factors:
$$
\frac{\sqrt{\ell(\ell+1)-\ell(\ell-1)}}
{\sqrt{(\ell+\tfrac12)(\ell+\tfrac32)-(\ell+\tfrac12)(\ell-\tfrac12)}}
=\sqrt{\frac{2\ell}{2\ell+1}}.
$$
The spin-lowered term has numerator one, so the state is
$$
\lvert\ell+\tfrac12,\ell-\tfrac12\rangle
=\sqrt{\frac{2\ell}{2\ell+1}}\lvert\ell,\ell-1\rangle\lvert\uparrow\rangle
+\frac{1}{\sqrt{2\ell+1}}\lvert\ell,\ell\rangle\lvert\downarrow\rangle.
$$
Applying $\mechanical{J}_-$ again gives the state with $m_j=\ell-3/2$ in the same multiplet when that projection exists. Its coupled-basis lowering factor is $\hbar\sqrt{(\ell+\tfrac12)(\ell+\tfrac32)-(\ell-\tfrac12)(\ell-\tfrac32)}$.

#### Lecture, March 5, 2018

The lecture turns to interactions of spin with electromagnetic radiation. A two-component spinor has entries $\chi^1,\chi^2$. For a massive electron, spin up and down can be defined relative to a chosen axis. Helicity uses the momentum direction as the spin quantization axis. The notes distinguish electrons from positrons and refer to positive and negative helicity in the massless limit.

### PDF page 63

A spinor transforms as $\chi'^\alpha=g^\alpha{}_\beta\chi^\beta$ with $g=e^{-i\phi\widehat{\mathbf n}\cdot\boldsymbol\sigma/2}$. Lower its index by $\chi_\alpha=\varepsilon_{\alpha\beta}\chi^\beta$, where
$$
(\varepsilon_{\alpha\beta})=\begin{pmatrix}0&1\\-1&0\end{pmatrix}.
$$
The notes compare this operation with lowering a four-vector using $g_{\mu\nu}=\operatorname{diag}(1,-1,-1,-1)$. The spatial components change sign, and the invariant contraction is $V_\mu V^\mu=(V^0)^2-(V^1)^2-(V^2)^2-(V^3)^2$. Raising again returns $V^\mu$ because $g^{\mu\nu}g_{\nu\rho}=\delta^\mu{}_\rho$. The inverse antisymmetric tensor similarly satisfies $\varepsilon^{\alpha\beta}\varepsilon_{\beta\gamma}=\delta^\alpha{}_\gamma$.

With the displayed lowering convention, the spinor contraction is $\chi_\alpha\chi^\alpha=\chi^2\chi^1-\chi^1\chi^2$. It vanishes for commuting components, but equals $2\chi^2\chi^1$ for anticommuting components. In the latter case $(\chi^1)^2=(\chi^2)^2=0$. In the product of two spinor columns and dual rows, the antisymmetric combination of the two spin components gives the scalar contraction. For two distinct spinors this is proportional to $\chi_1^1\chi_2^2-\chi_1^2\chi_2^1$, with the subscripts distinguishing the particles.

### PDF page 64

For two independent spinors, take the outer product of the first spinor with the lowered second spinor:

$$
\chi_1^a\chi_{2b}
=
\begin{pmatrix}
\chi_1^1\chi_2^2 & -\chi_1^1\chi_2^1\\
\chi_1^2\chi_2^2 & -\chi_1^2\chi_2^1
\end{pmatrix}.
$$

Here $1$ and $2$ in the subscripts label the particles. The three symmetric combinations form the spin-$1$ triplet and transform as the components of a vector:

$$
\chi_1^1\chi_2^1,\qquad
\frac{\chi_1^1\chi_2^2+\chi_1^2\chi_2^1}{\sqrt{2}},\qquad
\chi_1^2\chi_2^2.
$$

The antisymmetric combination $(\chi_1^1\chi_2^2-\chi_1^2\chi_2^1)/\sqrt{2}$ is the spin-$0$ singlet and transforms as a scalar.

A creation operator acting on the vacuum gives a one-particle state:

$$
a^\dagger(n,\ell,m,\chi)\lvert 0\rangle
=
\lvert n\ell m,\chi\rangle.
$$

Its wavefunction is $c_1\psi_{n\ell m,1/2}+c_2\psi_{n\ell m,-1/2}$, with $\lvert c_1\rvert^2+\lvert c_2\rvert^2=1$. For a pair of identical particles, exchange both spatial and spin labels. The complete two-particle wavefunction obeys

$$
\Psi(1,2)=\pm\Psi(2,1),
$$

with the plus sign for bosons and the minus sign for fermions.

### PDF page 65

Before imposing exchange symmetry, the two-particle state is a product of one-particle spatial and spin states:

$$
\left(\lvert n\ell m\rangle\otimes\lvert s\rangle\right)_1
\otimes
\left(\lvert n'\ell'm'\rangle\otimes\lvert s'\rangle\right)_2.
$$

For identical fermions, the complete state must be antisymmetric. If it separates into spatial and spin factors, there are two possibilities:

| Spatial factor | Spin factor |
| --- | --- |
| Symmetric under exchange | Antisymmetric under exchange |
| Antisymmetric under exchange | Symmetric under exchange |

The antisymmetric spin state is the singlet with total spin quantum number $0$:

$$
\frac{\lvert\uparrow\downarrow\rangle-\lvert\downarrow\uparrow\rangle}{\sqrt{2}}.
$$

The symmetric spin states are the triplet with total spin quantum number $1$:

$$
\lvert\uparrow\uparrow\rangle,\qquad
\frac{\lvert\uparrow\downarrow\rangle+\lvert\downarrow\uparrow\rangle}{\sqrt{2}},\qquad
\lvert\downarrow\downarrow\rangle.
$$

For two electrons in helium, consider the matrix element of the Coulomb repulsion $\electric{e}^2/\mechanical{r}_{12}$ in Gaussian units:

$$
\left\langle n\ell m s,n'\ell'm's'
\left\lvert\frac{\electric{e}^2}{\mechanical{r}_{12}}\right\rvert
n\ell m s,n'\ell'm's'\right\rangle.
$$

### PDF page 66

The symmetric spatial factor for two electrons is proportional to

$$
\psi_{n\ell m}(\mechanical{\mathbf r}_1)\psi_{n'\ell'm'}(\mechanical{\mathbf r}_2)
+
\psi_{n\ell m}(\mechanical{\mathbf r}_2)\psi_{n'\ell'm'}(\mechanical{\mathbf r}_1).
$$

Both the orbital angular momentum and the spin of a charged particle contribute to its magnetic dipole moment. For a particle with signed charge $\electric{q}$, in Gaussian units,

$$
\magnetic{\boldsymbol{\mu}}
=
\frac{\electric{q}}{2\mechanical{m}\mechanical{c}}
\left(\mechanical{\mathbf L}+g\mechanical{\mathbf S}\right).
$$

Here $g$ is the spin $g$-factor. For an electron, $\electric{q}=-\electric{e}$ and $g\approx2$. The notes mention that the electron's magnetic moment has been measured to about ten significant figures. The handwritten estimate for $g-2$ is $(\alpha/4\pi)^2$. The leading correction is $g-2=\alpha/\pi+O(\alpha^2)$, where $\alpha$ is the fine-structure constant. [Schwinger's original calculation](https://journals.aps.org/pr/abstract/10.1103/PhysRev.73.416)

#### March 7, 2018

The magnetic interaction is

$$
H_{\mathrm{mag}}
=
-\magnetic{\boldsymbol{\mu}}\cdot\magnetic{\mathbf B}
=
-\frac{\electric{q}}{2\mechanical{m}\mechanical{c}}
\left(\mechanical{\mathbf L}+g\mechanical{\mathbf S}\right)\cdot\magnetic{\mathbf B}.
$$

For hydrogen in a uniform external magnetic field, choose $\magnetic{\mathbf A}=-\mechanical{\mathbf r}\times\magnetic{\mathbf B}/2$ and $\electric{\phi}_{\mathrm{ext}}=0$. With $g=2$,

$$
H=
\frac{1}{2\mechanical{m}}
\left(\mechanical{\mathbf p}-\frac{\electric{q}}{\mechanical{c}}\magnetic{\mathbf A}\right)^2
-\frac{\electric{e}^2}{\mechanical{r}}
-\frac{\electric{q}}{\mechanical{m}\mechanical{c}}
\mechanical{\mathbf S}\cdot\magnetic{\mathbf B}.
$$

Expanding about the field-free Hamiltonian $H_0$ gives

$$
H=H_0
-\frac{\electric{q}}{2\mechanical{m}\mechanical{c}}
\left(\mechanical{\mathbf p}\cdot\magnetic{\mathbf A}+\magnetic{\mathbf A}\cdot\mechanical{\mathbf p}\right)
-\frac{\electric{q}}{\mechanical{m}\mechanical{c}}\mechanical{\mathbf S}\cdot\magnetic{\mathbf B}
+O(\magnetic{\mathbf A}^2).
$$

To simplify the linear orbital term, cyclically permute the scalar triple products:

$$
\begin{aligned}
\mechanical{\mathbf p}\cdot\magnetic{\mathbf A}+\magnetic{\mathbf A}\cdot\mechanical{\mathbf p}
&=-\frac12\left[
\mechanical{\mathbf p}\cdot(\mechanical{\mathbf r}\times\magnetic{\mathbf B})
+(\mechanical{\mathbf r}\times\magnetic{\mathbf B})\cdot\mechanical{\mathbf p}\right]\\
&=-\frac12\left[
(\mechanical{\mathbf p}\times\mechanical{\mathbf r})\cdot\magnetic{\mathbf B}
-(\magnetic{\mathbf B}\times\mechanical{\mathbf r})\cdot\mechanical{\mathbf p}\right].
\end{aligned}
$$

### PDF page 67

The momentum operator obeys $[\mechanical{\mathbf p},f(\mechanical{\mathbf r})]=-i\hbar\nabla f$. In particular, it commutes with a uniform $\magnetic{\mathbf B}$. Also, $\mechanical{\mathbf p}\times\mechanical{\mathbf r}=-\mechanical{\mathbf r}\times\mechanical{\mathbf p}$ because the only nonzero Cartesian commutators have matching indices and drop out of the cross product. Therefore,

$$
\begin{aligned}
\mechanical{\mathbf p}\cdot\magnetic{\mathbf A}+\magnetic{\mathbf A}\cdot\mechanical{\mathbf p}
&=-\frac12\left[(\mechanical{\mathbf p}\times\mechanical{\mathbf r})\cdot\magnetic{\mathbf B}
-\magnetic{\mathbf B}\cdot(\mechanical{\mathbf r}\times\mechanical{\mathbf p})\right]\\
&=\magnetic{\mathbf B}\cdot\mechanical{\mathbf L}.
\end{aligned}
$$

The first-order perturbation is thus

$$
H'=-\frac{\electric{q}}{2\mechanical{m}_e\mechanical{c}}\magnetic{\mathbf B}\cdot
\left(\mechanical{\mathbf L}+g\mechanical{\mathbf S}\right).
$$

For a given $\ell$ the field-free energy has $2\ell+1$ orbital states. At fixed $n$, the allowed $\ell$ run from $0$ to $n-1$, giving $\sum_{\ell=0}^{n-1}(2\ell+1)=n^2$ orbital states and a further factor of two for electron spin. The source's count $2(n-1)+1$ applies to the highest $\ell$ alone.

Ignore spin first and choose the $z$-axis along $\magnetic{\mathbf B}$. For an electron $\electric{q}=-\electric{e}$, so

$$
H'=\frac{\electric{e}\magnetic{B}}{2\mechanical{m}_e\mechanical{c}}\mechanical{L}_z.
$$

The perturbation matrix is diagonal in the orbital basis:

$$
\left\langle n'\ell'm'\left\lvert H'\right\rvert n\ell m\right\rangle
=
\magnetic{\mu}_B m\magnetic{B}\,\delta_{nn'}\delta_{\ell\ell'}\delta_{mm'},
\qquad
\magnetic{\mu}_B=\frac{\electric{e}\hbar}{2\mechanical{m}_e\mechanical{c}}.
$$

Here $m$ is the magnetic quantum number and $\magnetic{\mu}_B$ is the Bohr magneton in Gaussian units.

### PDF page 68

For fixed $n=2$ and $\ell=1$, the orbital Zeeman shifts are $\magnetic{\mu}_B\magnetic{B}m$, with $m=-1,0,1$. Including electron spin with $g=2$ gives

$$
\begin{aligned}
\left\langle n'\ell'm',m_s'\left\lvert H'\right\rvert n\ell m,m_s\right\rangle
&=\frac{\electric{e}\magnetic{B}}{2\mechanical{m}_e\mechanical{c}}
\left\langle n'\ell'm',m_s'\left\lvert\mechanical{L}_z+2\mechanical{S}_z\right\rvert n\ell m,m_s\right\rangle,\\
\Delta\energy{E}^{(1)}
&=\magnetic{\mu}_B\magnetic{B}(m+2m_s),\qquad m_s=\pm\tfrac12.
\end{aligned}
$$

![[Kyle Kabasares - Quantum Mechanics II - Zeeman splitting of the 2p level.png|**Fig. 22** Zeeman shifts for the 2p level, with and without the electron spin contribution.]]

The six spin-orbital states occupy five levels with shifts proportional to $-2,-1,0,1,2$. The level at zero contains $(m,m_s)=(1,-1/2)$ and $(-1,1/2)$. The shift proportional to $-1$ corresponds to $(0,-1/2)$, which resolves the duplicate label in the sketch. A margin note mentions nuclear spin, while the calculation uses the electron's $\mechanical{S}_z$.

In the hydrogen ground state, $n=1$ and $\ell=m=0$. The two spin projections split by $2\magnetic{\mu}_B\magnetic{B}$.

![[Kyle Kabasares - Quantum Mechanics II - Ground-state Zeeman doublet.png|**Fig. 23** Splitting of the hydrogen ground state by the electron spin interaction.]]

A boost mixes electric and magnetic fields. For a particle moving with velocity $\mechanical{\mathbf v}$ in a laboratory electric field with $\magnetic{\mathbf B}=0$, the magnetic field in the instantaneous particle rest frame is $\magnetic{\mathbf B}'\simeq-\mechanical{\mathbf v}\times\electric{\mathbf E}/\mechanical{c}$ in Gaussian units. The dipole coupling $-\magnetic{\boldsymbol{\mu}}_{\mathrm{spin}}\cdot\magnetic{\mathbf B}'$ can also be written as an electric dipole coupling $-\electric{\mathbf d}\cdot\electric{\mathbf E}$, with

$$
\electric{\mathbf d}
=
\frac{\mechanical{\mathbf v}\times\magnetic{\boldsymbol{\mu}}_{\mathrm{spin}}}{\mechanical{c}},
\qquad
\magnetic{\boldsymbol{\mu}}_{\mathrm{spin}}
=\frac{\electric{q}}{\mechanical{m}_e\mechanical{c}}\mechanical{\mathbf S}
\quad(g=2).
$$

### PDF page 69

For an electron in a central potential energy $V(\mechanical{r})$,

$$
\mechanical{\mathbf F}=-\electric{e}\electric{\mathbf E}=-\nabla V,
\qquad
\electric{e}\electric{\mathbf E}
=\frac{\mechanical{\mathbf r}}{\mechanical{r}}\frac{dV}{d\mechanical{r}}.
$$

Combining the spin coupling to the transformed magnetic field with the Thomas factor of $1/2$ gives the spin–orbit term. Replace $\mechanical{\mathbf v}$ by $\mechanical{\mathbf p}/\mechanical{m}$ at this order:

$$
\begin{aligned}
\Delta H
&=-\frac{1}{2\mechanical{m}^2\mechanical{c}^2}
\mechanical{\mathbf S}\cdot(\mechanical{\mathbf p}\times\nabla V)\\
&=\frac{1}{2\mechanical{m}^2\mechanical{c}^2}
(\nabla V\times\mechanical{\mathbf p})\cdot\mechanical{\mathbf S}\\
&=\frac{1}{2\mechanical{m}^2\mechanical{c}^2}
\frac{1}{\mechanical{r}}\frac{dV}{d\mechanical{r}}\,
\mechanical{\mathbf L}\cdot\mechanical{\mathbf S}.
\end{aligned}
$$

The cross product can be reversed with a minus sign because the curl of $\nabla V$ vanishes.

#### March 9, 2018 discussion

Homework problem 3(b) decomposes a product of two spinors into spin $0$ and spin $1$. Lower the index on $\chi^\beta$ with

$$
\chi_\alpha=\epsilon_{\alpha\beta}\chi^\beta,\qquad
(\epsilon_{\alpha\beta})=\begin{pmatrix}0&1\\-1&0\end{pmatrix},
$$

and form the matrix $\Psi^\alpha{}_\beta=\eta^\alpha\chi_\beta$:

$$
\begin{aligned}
\Psi
&=
\begin{pmatrix}\eta^1\\\eta^2\end{pmatrix}
\begin{pmatrix}\chi^2&-\chi^1\end{pmatrix}\\
&=\frac12(\eta^1\chi^2-\eta^2\chi^1)I_2+
\begin{pmatrix}
\tfrac12(\eta^1\chi^2+\eta^2\chi^1)&-\eta^1\chi^1\\
\eta^2\chi^2&-\tfrac12(\eta^1\chi^2+\eta^2\chi^1)
\end{pmatrix}.
\end{aligned}
$$

The identity part is invariant under rotations and has spin $0$. The traceless part contains the three spin-$1$ components.

### PDF page 70

The Pauli matrices identify an ordinary vector with a traceless matrix. For a position vector, this gives

$$
\mechanical{\mathbf r}\cdot\boldsymbol{\sigma}
=\begin{pmatrix}
\mechanical{z}&\mechanical{x}-i\mechanical{y}\\
\mechanical{x}+i\mechanical{y}&-\mechanical{z}
\end{pmatrix}.
$$

For a general vector $\mathbf V$,

$$
\mathbf V\cdot\boldsymbol{\sigma}
=\begin{pmatrix}
V_z&V_x-iV_y\\
V_x+iV_y&-V_z
\end{pmatrix}.
$$

Under a rotation by $\mechanical{\varphi}$ about $\hat{\mathbf n}$, the vector components transform by $R=\exp(-i\mechanical{\varphi}\hat{\mathbf n}\cdot\mathbf L)$, with dimensionless spin-$1$ generators $\mathbf L$. The corresponding spinor rotation is $U=\exp(-i\mechanical{\varphi}\hat{\mathbf n}\cdot\boldsymbol{\sigma}/2)$.

The upper-index spinor column transforms as $\chi'=U\chi$. The lower-index row transforms by the inverse rotation:

$$
\begin{pmatrix}\chi'_1&\chi'_2\end{pmatrix}
=
\begin{pmatrix}\chi^2&-\chi^1\end{pmatrix}U^{-1}.
$$

Consequently the matrix $\Psi$ on the preceding page transforms as $\Psi'=U\Psi U^{-1}$, and $(R\mathbf V)\cdot\boldsymbol{\sigma}=U(\mathbf V\cdot\boldsymbol{\sigma})U^{-1}$.

#### Brief review

- Material from the first quarter.
- Perturbation theory, including the treatment of degenerate levels.
- Absorption of light.
- Rotations.
- Coupling of spin and orbital angular momentum.
- Double degeneracy associated with spin when the Hamiltonian is independent of a single electron's spin.

### PDF page 71

The in-class final is scheduled for Wednesday, March 21, from 1:30 to 3:30 p.m.

#### Practice problem on coupled spins

Consider two spin-$1/2$ particles with spin coupling $A$ and a magnetic field evaluated at their respective positions:

$$
H=A\mechanical{\mathbf S}_1\cdot\mechanical{\mathbf S}_2
-\frac{\electric{q}}{\mechanical{m}\mechanical{c}}
\left[\magnetic{\mathbf B}(\mechanical{\mathbf r}_1)\cdot\mechanical{\mathbf S}_1
+\magnetic{\mathbf B}(\mechanical{\mathbf r}_2)\cdot\mechanical{\mathbf S}_2\right].
$$

One choice is to use the spin–spin coupling as $H_0$ and the field terms as the perturbation. One can also start from $H_0=0$ and diagonalize the full matrix in the four-dimensional spin space. A uniform field allows an exact solution using the coupled basis.

The product basis ordered by the individual spin projections is

$$
\lvert\uparrow\uparrow\rangle,\quad
\lvert\uparrow\downarrow\rangle,\quad
\lvert\downarrow\uparrow\rangle,\quad
\lvert\downarrow\downarrow\rangle.
$$

Alternatively, use the triplet and singlet basis:

$$
\lvert\uparrow\uparrow\rangle,\quad
\lvert\downarrow\downarrow\rangle,\quad
\frac{\lvert\uparrow\downarrow\rangle+\lvert\downarrow\uparrow\rangle}{\sqrt{2}},\quad
\frac{\lvert\uparrow\downarrow\rangle-\lvert\downarrow\uparrow\rangle}{\sqrt{2}}.
$$

In the product basis, $\mechanical{S}_{i1}=(\hbar/2)(\sigma_i\otimes I_2)$ and $\mechanical{S}_{i2}=(\hbar/2)(I_2\otimes\sigma_i)$. The coupling is the sum of the three component products:

$$
\mechanical{\mathbf S}_1\cdot\mechanical{\mathbf S}_2
=\mechanical{S}_{x1}\mechanical{S}_{x2}
+\mechanical{S}_{y1}\mechanical{S}_{y2}
+\mechanical{S}_{z1}\mechanical{S}_{z2}.
$$

For either one-particle factor, the $x$ and $y$ components are

$$
\mechanical{S}_x=\frac{\hbar}{2}\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad
\mechanical{S}_y=\frac{\hbar}{2}\begin{pmatrix}0&-i\\i&0\end{pmatrix}.
$$

### PDF page 72

Write the spin coupling in terms of ladder operators or in terms of the total spin $\mechanical{\mathbf S}_T=\mechanical{\mathbf S}_1+\mechanical{\mathbf S}_2$:

$$
\begin{aligned}
\mechanical{\mathbf S}_1\cdot\mechanical{\mathbf S}_2
&=\tfrac12(\mechanical{S}_{+1}\mechanical{S}_{-2}+\mechanical{S}_{-1}\mechanical{S}_{+2})
+\mechanical{S}_{z1}\mechanical{S}_{z2}\\
&=\tfrac12(\mechanical{\mathbf S}_T^2-\mechanical{\mathbf S}_1^2-\mechanical{\mathbf S}_2^2).
\end{aligned}
$$

The triplet therefore has spin-coupling energy $a=A\hbar^2/4$, and the singlet has $\tilde a=-3A\hbar^2/4$. For fields $\magnetic{B}_i\hat{\mathbf z}$, set $b_i=-\electric{q}\hbar\magnetic{B}_i/(\mechanical{m}\mechanical{c})$. In the ordered basis $\lvert1,1\rangle,\lvert1,0\rangle,\lvert1,-1\rangle,\lvert0,0\rangle$ the Hamiltonian is

$$
H=
\begin{pmatrix}
a+(b_1+b_2)/2&0&0&0\\
0&a&0&(b_1-b_2)/2\\
0&0&a-(b_1+b_2)/2&0\\
0&(b_1-b_2)/2&0&\tilde a
\end{pmatrix}.
$$

This places the field-difference term between the two $m_s=0$ states, using the sign of the singlet on the preceding page. It vanishes for a uniform field.

#### March 12, 2018

For the homework, start from the symmetric gauge $\magnetic{\mathbf A}=\tfrac12\magnetic{\mathbf B}\times\mechanical{\mathbf r}$. For $\magnetic{\mathbf B}=\magnetic{B}\hat{\mathbf z}$, use the gauge function $\chi=-\magnetic{B}\mechanical{x}\mechanical{y}/2$ to obtain

$$
\magnetic{\mathbf A}'=\magnetic{\mathbf A}+\nabla\chi
=\frac{\magnetic{B}}{2}(-\mechanical{y},\mechanical{x},0)
+\frac{\magnetic{B}}{2}(-\mechanical{y},-\mechanical{x},0)
=(-\magnetic{B}\mechanical{y},0,0).
$$

Adding the two vectors resolves the factor of two in the handwritten result. The wavefunction transforms as $\psi'=\exp(i\electric{q}\chi/(\hbar\mechanical{c}))\psi$. For an electron, this is $\psi'=\exp(i\electric{e}\magnetic{B}\mechanical{x}\mechanical{y}/(2\hbar\mechanical{c}))\psi$.

### PDF page 73

#### Spin-$1/2$ particle in a magnetic field

Write the state as a spinor wavefunction with up and down components. A superposition of normalized orthogonal spin states has coefficients $c_1,c_2$ with $\lvert c_1\rvert^2+\lvert c_2\rvert^2=1$. With the coefficients absorbed into the components, the Schrödinger equation is

$$
i\hbar\frac{\partial}{\partial\mechanical{t}}
\begin{pmatrix}\psi_\uparrow\\\psi_\downarrow\end{pmatrix}
=
\left\{
\left[\frac{1}{2\mechanical{m}}\left(-i\hbar\nabla-\frac{\electric{q}}{\mechanical{c}}\magnetic{\mathbf A}\right)^2
+V(\mechanical{\mathbf r},\mechanical{t})\right]I_2
-\frac{g\electric{q}\hbar}{4\mechanical{m}\mechanical{c}}\boldsymbol{\sigma}\cdot\magnetic{\mathbf B}
\right\}
\begin{pmatrix}\psi_\uparrow\\\psi_\downarrow\end{pmatrix}.
$$

The three Pauli matrices give

$$
\boldsymbol{\sigma}\cdot\magnetic{\mathbf B}=
\begin{pmatrix}
\magnetic{B}_z&\magnetic{B}_x-i\magnetic{B}_y\\
\magnetic{B}_x+i\magnetic{B}_y&-\magnetic{B}_z
\end{pmatrix}.
$$

Neglect the orbital motion and retain $H_{\mathrm{sp}}=-g\electric{q}\mechanical{\mathbf S}\cdot\magnetic{\mathbf B}/(2\mechanical{m}\mechanical{c})$. A spin-independent energy eigenvalue $\energy{E}_n$ contributes a common phase $e^{-i\energy{E}_n\mechanical{t}/\hbar}$. The spin operator evolved under $H_{\mathrm{sp}}$ obeys

$$
i\hbar\frac{d\mechanical{S}_i}{d\mechanical{t}}
=[\mechanical{S}_i,H_{\mathrm{sp}}]
=-\frac{g\electric{q}}{2\mechanical{m}\mechanical{c}}
[\mechanical{S}_i,\mechanical{S}_j]\magnetic{B}_j.
$$

Using $[\mechanical{S}_i,\mechanical{S}_j]=i\hbar\epsilon_{ijk}\mechanical{S}_k$ gives

$$
\frac{d\mechanical{S}_i}{d\mechanical{t}}
=-\frac{g\electric{q}}{2\mechanical{m}\mechanical{c}}
\epsilon_{ijk}\magnetic{B}_j\mechanical{S}_k.
$$

The $i\hbar$ from the commutator cancels the $i\hbar$ on the left.

### PDF page 74

In vector form the spin precession equation is the torque equation:

$$
\frac{d\mechanical{\mathbf S}}{d\mechanical{t}}
=\frac{g\electric{q}}{2\mechanical{m}\mechanical{c}}\mechanical{\mathbf S}\times\magnetic{\mathbf B}
=\magnetic{\boldsymbol{\mu}}_{\mathrm{spin}}\times\magnetic{\mathbf B}.
$$

#### Zeeman effect in atoms

For several electrons, sum the orbital and spin angular momenta over all electrons:

$$
\mechanical{\mathbf L}=\sum_i\mechanical{\boldsymbol{\ell}}_i,\qquad
\mechanical{\mathbf S}=\sum_i\mechanical{\mathbf S}_i.
$$

In a uniform field and with $g=2$, expanding the minimal-coupling kinetic energy and adding the spin term gives

$$
H=H_0+
\frac{\magnetic{\mu}_B}{\hbar}\left(\mechanical{\mathbf L}+2\mechanical{\mathbf S}\right)\cdot\magnetic{\mathbf B}
+\frac{\electric{e}^2}{8\mechanical{m}_e\mechanical{c}^2}\sum_i
\lvert\magnetic{\mathbf B}\times\mechanical{\mathbf r}_i\rvert^2.
$$

Here $H_0$ contains the kinetic energy and the field-free interactions. The factors of $1/\hbar$ convert the dimensionful angular momenta into the dimensionless convention implicit in the handwritten Zeeman term. In a weak field along $z$, the linear shift is

$$
\Delta\energy{E}^{(1)}=
\frac{\magnetic{\mu}_B\magnetic{B}}{\hbar}
\left(\langle\mechanical{L}_z\rangle+2\langle\mechanical{S}_z\rangle\right)
=
\frac{\magnetic{\mu}_B\magnetic{B}}{\hbar}
\left(\langle\mechanical{J}_z\rangle+\langle\mechanical{S}_z\rangle\right).
$$

Use simultaneous eigenstates of $\mechanical{\mathbf J}^2,\mechanical{J}_z,\mechanical{\mathbf L}^2,\mechanical{\mathbf S}^2$ for the unperturbed atom with spin–orbit coupling in the angular-momentum coupling scheme considered here. The axial symmetry preserves $\mechanical{J}_z$, so $\langle\mechanical{J}_z\rangle=\hbar m_j$. The remaining task is to calculate $\langle\mechanical{S}_z\rangle$. Within a fixed total-angular-momentum multiplet, the expectation of $\mechanical{\mathbf S}$ is parallel or antiparallel to that of $\mechanical{\mathbf J}$.

### PDF page 75

Within a fixed $(\ell,s,j)$ multiplet with $j>0$, the projection of the spin operator onto that multiplet is proportional to $\mechanical{\mathbf J}$. Write $\langle\mechanical{S}_z\rangle=\alpha\langle\mechanical{J}_z\rangle=\alpha\hbar m_j$. To determine $\alpha$, use

$$
\mechanical{\mathbf S}\cdot\mechanical{\mathbf J}
=\mechanical{\mathbf S}^2+\mechanical{\mathbf S}\cdot\mechanical{\mathbf L}
=\tfrac12\left(\mechanical{\mathbf J}^2+\mechanical{\mathbf S}^2-\mechanical{\mathbf L}^2\right).
$$

Taking the expectation in the multiplet gives

$$
\alpha\hbar^2j(j+1)
=\frac{\hbar^2}{2}\left[j(j+1)+s(s+1)-\ell(\ell+1)\right].
$$

The linear shift for a field along $z$ is therefore

$$
\Delta\energy{E}^{(1)}=\magnetic{\mu}_B g_J m_j\magnetic{B},
\qquad
g_J=1+\frac{j(j+1)+s(s+1)-\ell(\ell+1)}{2j(j+1)}.
$$

The quantity $g_J$ is the Landé factor for orbital and spin factors $1$ and $2$. Equivalently, the magnetic moment projected onto the multiplet is $-\magnetic{\mu}_B g_J\mechanical{\mathbf J}/\hbar$, so the shift is the expectation of $-\magnetic{\boldsymbol{\mu}}\cdot\magnetic{\mathbf B}$.

#### Final exam topics

The notes distinguish the final exam from the qualifying exam and list these topics for the final:

- Time-dependent perturbation theory.
- Interaction of matter with light.
- Gauge invariance.
- Rotations and addition of spins.
- Spin–spin interactions.
- Spin interactions with electric and magnetic fields.

### PDF page 76

The exam review advises expecting new problems.

#### Hydrogen radial wavefunction

In SI units, the radial Schrödinger equation is

$$
\left[
-\frac{\hbar^2}{2\mechanical{m}_e\mechanical{r}^2}
\frac{d}{d\mechanical{r}}\left(\mechanical{r}^2\frac{d}{d\mechanical{r}}\right)
+\frac{\ell(\ell+1)\hbar^2}{2\mechanical{m}_e\mechanical{r}^2}
-\frac{\electric{e}^2}{4\pi\electric{\epsilon}_0\mechanical{r}}
\right]R(\mechanical{r})=\energy{E}R(\mechanical{r}).
$$

The first term is the radial kinetic energy. The second is the angular kinetic energy and acts as a centrifugal barrier. The characteristic atomic size is of order $10^{-10}\,\unit{m}$. The $10^{-15}\,\unit{m}$ scale written beside it is the nuclear scale.

The bound-state radial function decays exponentially at large $\mechanical{r}$ and behaves as $B\mechanical{r}^{\ell}$ near the origin. For $\ell=0,1,2$, the respective leading behaviors are $B$, $B\mechanical{r}$, and $B\mechanical{r}^2$. The full radial function is

$$
R_{n\ell}(\mechanical{r})=Ae^{-\signal{k}\mechanical{r}}\mechanical{r}^{\ell}v_n^\ell(\mechanical{r}),
\qquad
j_{\max}=n-\ell-1,
$$

where $v_n^\ell$ is a polynomial of degree $j_{\max}$. The radial normalization is

$$
\int_0^\infty \lvert R_{n\ell}(\mechanical{r})\rvert^2\mechanical{r}^2\,d\mechanical{r}=1.
$$

#### Real gases and phase transitions

At high pressure and low temperature a gas can condense to a liquid. The van der Waals equation is

$$
\left[\mechanical{P}+a\left(\frac{n}{\mechanical{V}}\right)^2\right](\mechanical{V}-nb)=nR\thermal{T}.
$$

The constant $a$ accounts for intermolecular attraction and $b$ for the excluded volume per mole.

### PDF page 77

The van der Waals pressure correction $\mechanical{P}\mapsto\mechanical{P}+a(n/\mechanical{V})^2$ adds back the reduction in pressure due to attractive intermolecular forces. The available volume is $\mechanical{V}-nb$, with $nb$ representing the volume excluded by finite molecular size.

For hard spheres of radius $\mechanical{r}$, the minimum distance between centers is $2\mechanical{r}$. The sphere excluded to the center of a second particle has eight times the volume of one molecule. In the dilute hard-sphere model each pair is counted once, so the excluded-volume contribution per molecule to the second virial coefficient is four times the molecular volume.

![[Kyle Kabasares - Quantum Mechanics II - Hard-sphere contact.png|**Fig. 24** The centers of two touching hard spheres are separated by one diameter.]]

At low molar density $n/\mechanical{V}\to0$, the equation approaches the ideal gas law. Defining the molar volume $\mechanical{v}=\mechanical{V}/n$ gives

$$
\left(\mechanical{P}+\frac{a}{\mechanical{v}^2}\right)(\mechanical{v}-b)=R\thermal{T}.
$$

#### Boyle temperature and virial expansion

At high temperature the isotherms resemble the rectangular hyperbolae of Boyle's law. Expand the equation of state in the molar density $1/\mechanical{v}$:

$$
\mechanical{P}\mechanical{v}
=R\thermal{T}
\left[1+\frac{A(\thermal{T})}{\mechanical{v}}+
\frac{B(\thermal{T})}{\mechanical{v}^2}+\cdots\right].
$$

This is the virial equation of state. The Boyle temperature is where the leading correction $A(\thermal{T})$ vanishes.

### PDF page 78

The pressure–volume sketch compares the Boyle-temperature isotherm, the critical isotherm, and a subcritical van der Waals curve. The dotted boundary marks the liquid–vapor coexistence region.

![[Kyle Kabasares - Quantum Mechanics II - Boyle and critical isotherms.png|**Fig. 25** Handwritten pressure–volume sketch with the Boyle and critical isotherms and a subcritical loop.]]

At the Boyle temperature $\thermal{T}_B$, the leading virial correction is zero, $A(\thermal{T}_B)=0$. To find it, rearrange the van der Waals equation and expand for $\mechanical{v}\gg b$:

$$
\begin{aligned}
\mechanical{P}\mechanical{v}
&=R\thermal{T}\left(1-\frac{b}{\mechanical{v}}\right)^{-1}-\frac{a}{\mechanical{v}}\\
&=R\thermal{T}\left[1+\frac{b}{\mechanical{v}}+O(\mechanical{v}^{-2})\right]-\frac{a}{\mechanical{v}}\\
&=R\thermal{T}+\frac{bR\thermal{T}-a}{\mechanical{v}}+O(\mechanical{v}^{-2}).
\end{aligned}
$$

The coefficient of $\mechanical{v}^{-1}$ vanishes when $bR\thermal{T}_B=a$, so

$$
\thermal{T}_B=\frac{a}{Rb}.
$$

At that temperature, the first deviation from the ideal gas law is of order $\mechanical{v}^{-2}$.

### PDF page 79

#### March 16, 2018

In one dimension, the stationary Schrödinger equation and the local classical momentum are

$$
\frac{\hbar^2}{2\mechanical{m}}\frac{d^2\psi}{d\mechanical{x}^2}
+[\energy{E}-U(\mechanical{x})]\psi(\mechanical{x})=0,
\qquad
\mechanical{p}(\mechanical{x})
=\sqrt{2\mechanical{m}[\energy{E}-U(\mechanical{x})]}.
$$

In the classically allowed region the WKB approximation is

$$
\psi(\mechanical{x})\simeq
\frac{C_1}{\sqrt{\mechanical{p}(\mechanical{x})}}
e^{\frac{i}{\hbar}\int_{\mechanical{x}_0}^{\mechanical{x}}\mechanical{p}(\mechanical{x}')\,d\mechanical{x}'}
+
\frac{C_2}{\sqrt{\mechanical{p}(\mechanical{x})}}
e^{-\frac{i}{\hbar}\int_{\mechanical{x}_0}^{\mechanical{x}}\mechanical{p}(\mechanical{x}')\,d\mechanical{x}'}.
$$

For a simple turning point at $\mechanical{x}=\mechanical{a}$ with $U$ increasing, take the decaying solution on the right. Its exponential is $\exp[-\hbar^{-1}\int_{\mechanical{a}}^{\mechanical{x}}\lvert\mechanical{p}\rvert\,d\mechanical{x}']$ because the momentum is imaginary there. Analytically continue to the left by taking $\psi(\mechanical{x})\to\psi(z)$ with $z=\mechanical{x}+i\mechanical{y}$ and $\partial\psi/\partial z^*=0$. The coordinate identities are $\mechanical{x}=(z+z^*)/2$ and $\mechanical{y}=(z-z^*)/(2i)$. The continued equation is

$$
\frac{\hbar^2}{2\mechanical{m}}\frac{d^2\psi}{dz^2}+[\energy{E}-U(z)]\psi(z)=0.
$$

![[Kyle Kabasares - Quantum Mechanics II - Continuation around a turning point.png|**Fig. 26** A simple turning point and a contour that passes above it in the complex plane.]]

Linearize the potential as $U(z)\simeq \energy{E}-\mechanical{F}(z-\mechanical{a})$, where $\mechanical{F}=-U'(\mechanical{a})$. The magnitude of the real-axis momentum scales as $\lvert\mechanical{x}-\mechanical{a}\rvert^{1/2}$. Writing $z-\mechanical{a}=\mechanical{\rho} e^{i\mechanical{\varphi}}$, the WKB prefactor continued from the right is proportional to

$$
(z-\mechanical{a})^{-1/4}
=\mechanical{\rho}^{-1/4}e^{-i\mechanical{\varphi}/4}.
$$

### PDF page 80

Along the semicircle $z=\mechanical{a}+\mechanical{\rho} e^{i\mechanical{\varphi}}$, with fixed $\mechanical{\rho}$,

$$
dz=i\mechanical{\rho}e^{i\mechanical{\varphi}}\,d\mechanical{\varphi}.
$$

The continuation of the right-hand decay integrand, $\sqrt{2\mechanical{m}\lvert\mechanical{F}\rvert(z-\mechanical{a})}\,dz$, is proportional to $e^{3i\mechanical{\varphi}/2}\,d\mechanical{\varphi}$. The prefactor gains $e^{-i\pi/4}$ as $\mechanical{\varphi}$ goes from $0$ to $\pi$. On the allowed side, the action produces oscillatory phases. Combining the two conjugate oscillatory factors uses $\cos\alpha=(e^{i\alpha}+e^{-i\alpha})/2$.

With $C_R=C/2$ as noted in the margin, the connection formula for the decaying right-hand solution reads

$$
\psi(\mechanical{x})\simeq
\begin{cases}
\displaystyle \frac{C}{\sqrt{\mechanical{p}(\mechanical{x})}}
\cos\left[\frac{1}{\hbar}\int_{\mechanical{x}}^{\mechanical{a}}\mechanical{p}(\mechanical{x}')\,d\mechanical{x}'-\frac{\pi}{4}\right],
& \mechanical{x}<\mechanical{a},\\[8pt]
\displaystyle\frac{C/2}{\sqrt{\lvert\mechanical{p}(\mechanical{x})\rvert}}
\exp\left[-\frac{1}{\hbar}\int_{\mechanical{a}}^{\mechanical{x}}\lvert\mechanical{p}(\mechanical{x}')\rvert\,d\mechanical{x}'\right],
& \mechanical{x}>\mechanical{a}.
\end{cases}
$$

The phase $\pi/4$ is dimensionless and stays outside the action divided by $\hbar$. The two WKB forms apply away from the immediate vicinity of the turning point.

### PDF page 81

A bound state in a smooth well has two turning points. Denote the left and right turning points by $\mechanical{b}$ and $\mechanical{a}$, respectively. In the symmetric sketch $\mechanical{b}=-\mechanical{a}$.

![[Kyle Kabasares - Quantum Mechanics II - Two turning points in a well.png|**Fig. 27** A horizontal energy line intersects the potential at the two classical turning points.]]

Matching the two continuations in the allowed region requires

$$
\frac{C}{\sqrt{\mechanical{p}(\mechanical{x})}}
\cos\left[\frac{1}{\hbar}\int_{\mechanical{x}}^{\mechanical{a}}\mechanical{p}(\mechanical{x}')\,d\mechanical{x}'-\frac{\pi}{4}\right]
=
\frac{C'}{\sqrt{\mechanical{p}(\mechanical{x})}}
\cos\left[\frac{1}{\hbar}\int_{\mechanical{b}}^{\mechanical{x}}\mechanical{p}(\mechanical{x}')\,d\mechanical{x}'-\frac{\pi}{4}\right].
$$

The amplitudes satisfy $\lvert C\rvert=\lvert C'\rvert$. The two phases vary oppositely with $\mechanical{x}$, so their sum must be an integer multiple of $\pi$, with the sign of $C'/C$ accounting for odd multiples. This gives the WKB quantization condition

$$
\int_{\mechanical{b}}^{\mechanical{a}}\mechanical{p}(\mechanical{x})\,d\mechanical{x}
=\pi\hbar\left(n+\frac12\right),
\qquad n=0,1,2,\ldots.
$$

The final handwritten line suppresses the $\hbar$ carried by the action integral.

### PDF page 82

#### Additional quantum mechanics notes on unitarity

A state evolves as $\lvert\Psi(\mechanical{t})\rangle=U(\mechanical{t})\lvert\Psi(0)\rangle$, and its dual is $\langle\Psi(\mechanical{t})\rvert=\langle\Psi(0)\rvert U^\dagger(\mechanical{t})$. If two states are orthogonal initially, unitary evolution preserves their zero overlap:

$$
\langle\Psi(\mechanical{t})\mid\Phi(\mechanical{t})\rangle
=\langle\Psi(0)\lvert U^\dagger(\mechanical{t})U(\mechanical{t})\rvert\Phi(0)\rangle
=0.
$$

More generally, if evolution preserves both the orthogonality and normalization of a complete orthonormal basis, then

$$
\langle i\lvert U^\dagger(\mechanical{t})U(\mechanical{t})\rvert j\rangle
=\delta_{ij},
\qquad
U^\dagger(\mechanical{t})U(\mechanical{t})=I.
$$

**Example 4.1.** For arbitrary states $\lvert A\rangle$ and $\lvert B\rangle$, the inner product of their evolved states is

$$
\langle A\lvert U^\dagger U\rvert B\rangle
=\langle A\lvert I\rvert B\rangle
=\langle A\mid B\rangle.
$$

Interchanging $A$ and $B$ gives the conjugate overlap, which is preserved as well. The notes call this conservation of overlaps.

### PDF page 83

Let $U(\mechanical{\epsilon})$ be the evolution over a short time $\mechanical{\epsilon}$, with $U(0)=I$. Expanding a differentiable evolution to first order gives

$$
U(\mechanical{\epsilon})=I-\frac{i\mechanical{\epsilon}}{\hbar}H+O(\mechanical{\epsilon}^2),
\qquad
U^\dagger(\mechanical{\epsilon})=I+\frac{i\mechanical{\epsilon}}{\hbar}H^\dagger+O(\mechanical{\epsilon}^2).
$$

Therefore,

$$
U^\dagger(\mechanical{\epsilon})U(\mechanical{\epsilon})
=I+\frac{i\mechanical{\epsilon}}{\hbar}(H^\dagger-H)+O(\mechanical{\epsilon}^2).
$$

Unitarity of $U$ requires the coefficient of $\mechanical{\epsilon}$ to vanish. The resulting condition is $H^\dagger=H$, so the generator $H$ is Hermitian. The box in the handwriting assigns both properties to $H$. The two conditions in the calculation apply to $U$ and $H$, respectively.

Using the same expansion on a state yields

$$
\lim_{\mechanical{\epsilon}\to0}
\frac{\lvert\Psi(\mechanical{t}+\mechanical{\epsilon})\rangle-\lvert\Psi(\mechanical{t})\rangle}{\mechanical{\epsilon}}
=-\frac{i}{\hbar}H\lvert\Psi(\mechanical{t})\rangle.
$$

This is the time-dependent Schrödinger equation:

$$
i\hbar\frac{d}{d\mechanical{t}}\lvert\Psi(\mechanical{t})\rangle
=H\lvert\Psi(\mechanical{t})\rangle.
$$

### PDF page 84

#### Expectation values

Expand a normalized state $\lvert A\rangle$ in an orthonormal eigenbasis of an observable $L$:

$$
\lvert A\rangle=\sum_i\alpha_i\lvert\lambda_i\rangle,
\qquad
L\lvert\lambda_i\rangle=\lambda_i\lvert\lambda_i\rangle.
$$

Then $L\lvert A\rangle=\sum_i\alpha_i\lambda_i\lvert\lambda_i\rangle$. Taking the inner product with $\langle A\rvert$ and using orthonormality gives

$$
\begin{aligned}
\langle A\lvert L\rvert A\rangle
&=\sum_{i,j}\alpha_j^*\alpha_i\lambda_i\langle\lambda_j\mid\lambda_i\rangle\\
&=\sum_i\lambda_i\lvert\alpha_i\rvert^2
=\langle L\rangle.
\end{aligned}
$$

The weight $\lvert\alpha_i\rvert^2$ is the probability associated with the $i$th eigenvector. For a degenerate outcome, sum these weights over all eigenvectors with that eigenvalue. The expectation value is the matrix element of the observable between the bra and ket of the state.

A global phase $e^{i\theta}$ leaves the physical state unchanged. It multiplies the ket and its complex conjugate multiplies the bra, so the factors cancel in the expectation value.

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
| $\signal{\omega}_{mn}$, $\signal{\omega}_n$ | $\unit{rad\,s^{-1}}$ | Energy-related angular frequencies | Frequency associated with an energy difference or an eigenstate phase. |
| $\mechanical{F}$, $\mechanical{F}_0$ | $\unit{N}$ | Linear driving coefficient | Coefficient of displacement in the driving potential, equal to the negative of the applied force. |
| $\mechanical{x}_0$ | $\unit{m}$ | Shifted equilibrium position | Minimum of the oscillator potential after adding the linear term. |
| $\psi_0^{\mathrm{unpert}}$, $\psi_0^{\mathrm{pert}}$ | $\unit{m^{-1/2}}$ | Ground-state wavefunctions | Normalized position-space amplitudes before and after the shift. |
| $P_{i\to n}$ | 1 | Transition probability | Probability of measuring state $n$ after starting in state $i$. |
| $\mechanical{z}$, $\mechanical{r}$ | $\unit{m}$ | Vertical position and radius | Position along the drive direction and distance from the origin. |
| $E$ | $\unit{N}$ | Linear perturbation coefficient | Electric field strength multiplied by the signed charge, with the sign set by the potential convention. |
| $\signal{\lambda}_{\mathrm{q}}$ | $\unit{s^{-2}}$ | Squared frequency shift | Change of the oscillator's squared angular frequency at unit envelope. |
| $\mechanical{\tau}$, $\mechanical{t}_{\max}$ | $\unit{s}$ | Drive timescales | Decay time of the exponential or ending time of the constant pulse. |
| $\energy{\kappa}$ | $\unit{J\,m^{-2}}$ | Quadratic coupling | Coefficient of the quadratic driving potential, equal to mass times the squared frequency shift. |
| $\rho(\energy{E})$ | $\unit{J^{-1}}$ | Density of states | Number of states per unit energy in the set of final states. |
| $\Gamma$ | $\unit{s^{-1}}$ | Transition rate | Leading probability per unit time for transition into the continuum. |
| $\Delta\energy{E}$, $\delta\energy{E}$ | $\unit{J}$ | Energy scales | Width over which the continuum factors change and spacing of individual final levels. |
| $\Omega$ | $\unit{sr}$ | Solid angle | Angular measure for the direction of a final momentum. |
| $\mechanical{L}$ | $\unit{m}$ | Box side length | Periodic normalization length in each coordinate. |
| $\signal{\mathbf k}$, $\signal{k}_j$ | $\unit{m^{-1}}$ | Wave vector and components | Spatial frequencies of the momentum eigenfunction. |
| $\mechanical{\mathbf p}$, $\mechanical{\mathbf p}'$ | $\unit{kg\,m\,s^{-1}}$ | Momentum vectors | Momentum before and after scattering. |
| $d\Gamma/d\Omega$ | $\unit{s^{-1}\,sr^{-1}}$ | Differential transition rate | Transition rate per unit outgoing solid angle. |
| $N$ | 1 | Number of states | Count of momentum states in the box. |
| $j_{\mathrm{in}}$ | $\unit{m^{-2}\,s^{-1}}$ | Incident particle flux | Number of incident particles passing through unit area per unit time. |
| $d\sigma/d\Omega$ | $\unit{m^2\,sr^{-1}}$ | Differential cross section | Scattering rate per unit solid angle divided by the incident flux. |
| $\mechanical{T}$ | $\unit{s}$ | Pulse duration | Time between switching the force on and off. |
| $\energy{\widetilde E}_k$ | $\unit{J}$ | Shifted oscillator energy | Energy eigenvalue while the constant force acts. |
| $\mathcal E$ | $\unit{N}$ | Electric driving coefficient | Charge-weighted field strength with the sign convention used in the ionization example. |
| $\eta$ | $\unit{s^{-1}}$ | Switching rate | Parameter setting the speed of the smooth switch-on. |
| $\electric{\phi}$ | $\unit{V}$ | Scalar electric potential | Time component of the four-potential multiplied by the speed of light. |
| $\magnetic{\mathbf A}$ | $\unit{T\,m}$ | Magnetic vector potential | Spatial part of the electromagnetic four-potential. |
| $c$ | $\unit{m\,s^{-1}}$ | Speed of light | Vacuum light speed used in the time coordinate and Maxwell equations. |
| $\electric{\rho}_q$ | $\unit{C\,m^{-3}}$ | Charge density | Charge per unit volume. |
| $\electric{\mathbf J}$ | $\unit{A\,m^{-2}}$ | Current density | Charge flow per unit area. |
| $\electric{E}^i$ | $\unit{V\,m^{-1}}$ | Electric field component | Component of the electric field in the field tensor. |
| $\magnetic{B}^k$ | $\unit{T}$ | Magnetic field component | Component of the magnetic flux density in the field tensor. |
| $\electric{\varepsilon}_0$ | $\unit{F\,m^{-1}}$ | Vacuum permittivity | Constant relating charge density to the divergence of the electric field. |
| $\magnetic{\mu}_0$ | $\unit{H\,m^{-1}}$ | Vacuum permeability | Constant multiplying the four-current in the sourced field equations. |
| $\electric{q}$ | $\unit{C}$ | Electric charge | Signed charge of the particle, with the value expressed in the unit system used for the potentials. |
| $\mechanical{\widehat{\mathbf p}}$ | $\unit{kg\,m\,s^{-1}}$ | Canonical momentum | Generator of spatial translations in the position representation. |
| $\mechanical{\boldsymbol\pi}$ | $\unit{kg\,m\,s^{-1}}$ | Kinetic momentum | Mass times velocity, with gauge-invariant matrix elements. |
| $n(\mechanical{\mathbf r})$ | $\unit{m^{-3}}$ | Number density | Particle count per unit volume. |
| $\mathbf j(\mechanical{\mathbf r})$ | $\unit{m^{-2}\,s^{-1}}$ | Canonical number current | Symmetrized momentum density divided by mass. |
| $\boldsymbol\epsilon_s$ | 1 | Polarization vector | Unit vector specifying the polarization of a transverse wave mode. |
| $\mechanical{R}$ | $\unit{m}$ | Well radius | Radius at which the finite binding potential changes. |
| $\energy{V}_0$, $\energy{V}$ | $\unit{J}$ | Well depth and potential energy | Positive depth and the signed binding potential as a function of radius. |
| $\electric{\mathcal E}$ | $\unit{V\,m^{-1}}$ | Electric field amplitude | Amplitude of the uniform oscillating field. |
| $R_0$, $R_{k\ell}$ | — | Radial wavefunctions | Radial factors for the ground state and partial-wave continuum states. |
| $\mechanical{v}$ | $\unit{m\,s^{-1}}$ | Particle speed | Speed associated with the continuum wave number. |
| $\mechanical{\ell}$ | $\unit{m}$ | Crossing length | Size of the region used to estimate a transit time. |
| $\electric{e}$ | $\unit{C}$ | Elementary charge magnitude | Positive magnitude of the proton or electron charge. |
| $\mechanical{\mu}$, $\mechanical{M}$ | $\unit{kg}$ | Reduced and total mass | Mass in the relative-motion and center-of-mass kinetic terms. |
| $\mechanical{\mathbf p}_{\mathrm{rel}}$, $\mechanical{\mathbf P}$ | $\unit{kg\,m\,s^{-1}}$ | Relative and total momentum | Momenta conjugate to the relative and center-of-mass coordinates. |
| $\energy{u}$ | $\unit{J\,m^{-3}}$ | Radiation energy density | Time-averaged energy per unit volume. |
| $\energy{S}$ | $\unit{W\,m^{-2}}$ | Poynting magnitude | Time-averaged energy flux of the plane wave. |
| $\energy{I}(\signal{\omega})$ | $\unit{W\,m^{-2}\,(\mathrm{rad\,s^{-1}})^{-1}}$ | Spectral intensity | Radiation intensity per unit angular frequency. |
| $\overline N(\signal{k})$ | 1 | Mean mode occupation | Thermal average of the photon number in one mode. |
| $\thermal{T}$ | $\unit{K}$ | Temperature | Temperature of the equilibrium radiation and atom. |
| $k_B$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | Converts temperature to the thermal energy scale. |
| $A$, $B$ | $\unit{s^{-1}}$ | Mode emission and absorption coefficients | Spontaneous rate and induced transition rate per photon for a single resonant mode. |
| $\mechanical{\mathbf R}$ | $\unit{m}$ | Sum of position vectors | Coordinate sum proportional to the dipole moment for equal charges. |
| $\mathbf j_0$ | $\unit{m\,s^{-1}}$ | Integrated number current | Sum of velocities when the vector potential is absent. |
| $\mathbf d_{0n}$ | $\unit{m}$ | Transition position matrix element | Electric dipole matrix element with the common charge factored out. |
| $\electric{q}\mathbf d_{0n}$ | $\unit{C\,m}$ | Transition electric dipole moment | Off-diagonal matrix element of the electric dipole. |
| $d\energy{P}_{\mathrm{rad}}/d\Omega$ | $\unit{W\,sr^{-1}}$ | Angular radiated power | Radiated power per solid angle into the specified polarization. |
| $\mechanical{\mathbf L}$, $\mechanical{L}_z$ | $\unit{J\,s}$ | Orbital angular momentum | Total orbital angular momentum and its projection on the $z$-axis. |
| $\mechanical{\mathbf S}$, $\mechanical{S}_i$ | $\unit{J\,s}$ | Spin angular momentum | Intrinsic angular momentum and its Cartesian components. |
| $\mechanical{\mathbf J}$, $\mechanical{J}_i$ | $\unit{J\,s}$ | Total angular momentum | Sum of orbital and spin angular momentum or of two subsystems' angular momenta. |
| $\magnetic{\boldsymbol{\mu}},\magnetic{\mu}_B$ | $\unit{erg/G}$ | Magnetic dipole moment and Bohr magneton | The orbital and spin contributions couple to a magnetic field. |
| $\electric{\mathbf d}$ | $\unit{statC}\cdot\unit{cm}$ | Electric dipole moment | Effective electric moment of a moving magnetic dipole in Gaussian units. |
| $\mechanical{P},\mechanical{V}$ | $\unit{Pa}$, $\unit{m^3}$ | Gas pressure and volume | State variables of the van der Waals equation. |
| $n,R$ | $\unit{mol}$, $\unit{J\,mol^{-1}\,K^{-1}}$ | Amount of substance and molar gas constant | The factors multiplying absolute temperature on the right-hand side. |
| $a,b$ | $\unit{Pa\,m^6\,mol^{-2}}$, $\unit{m^3\,mol^{-1}}$ | van der Waals parameters | Set the attractive pressure correction and the excluded volume per mole. |
| $\mechanical{v}$ | $\unit{m^3\,mol^{-1}}$ | Molar volume | Container volume per mole in the gas equations. |
| $A(\thermal{T}),B(\thermal{T})$ | $\unit{m^3\,mol^{-1}}$, $\unit{m^6\,mol^{-2}}$ | Virial coefficients | First two corrections to the ideal-gas compressibility factor in powers of molar density. |
| $\thermal{T}_B,\thermal{T}_c$ | $\unit{K}$ | Boyle and critical temperatures | Temperature at which the second virial coefficient vanishes and temperature at the liquid–vapor critical point. |
