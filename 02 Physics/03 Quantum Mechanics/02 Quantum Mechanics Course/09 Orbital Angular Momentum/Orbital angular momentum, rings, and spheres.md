---
title: "Orbital angular momentum, rings, and spheres"
---

> [!TLDR]
> Find the allowed angular modes from periodicity and use commutators and ladder operators to work with angular momentum.

## Worked lecture material

For $\lambda=0$, solve $M\mathbf v=0$.

$$
\begin{aligned}
2v_1-2v_3&=0,\\
-2iv_1+iv_2+2iv_3&=0,\\
v_1-v_3&=0.
\end{aligned}
$$

Thus $v_1=v_3$ and $v_2=0$, so $\mathbf v=v_1(1,0,1)^{\mathsf T}$.

For $\lambda=1$,

$$
(M-I)\mathbf v
=\begin{pmatrix}1&0&-2\\-2i&i-1&2i\\1&0&-2\end{pmatrix}
\begin{pmatrix}v_1\\v_2\\v_3\end{pmatrix}
=0.
$$

The first and third rows give $v_1=2v_3$. The second row gives $-2i(2v_3)+(i-1)v_2+2iv_3=0$, hence $(i-1)v_2=2iv_3$. The resulting eigenvector is proportional to $(2,1-i,1)^{\mathsf T}$.

##### Particle on a ring or sphere

The lecture lists a particle on a ring, a particle on a sphere, and motion in a Coulomb field. Take $\energy{V}=0$ on the ring. The kinetic operator in the plane before restricting the radius is

$$
\hat H=-\frac{\hbar^2}{2m}\left(\frac{\partial^2}{\partial x^2}+\frac{\partial^2}{\partial y^2}\right).
$$

In polar coordinates, $x=r\cos\phi$, $y=r\sin\phi$, and $0\le\phi\le2\pi$. The Laplacian is

$$
\nabla^2=\frac{\partial^2}{\partial r^2}+\frac1r\frac{\partial}{\partial r}
+\frac{1}{r^2}\frac{\partial^2}{\partial\phi^2}.
$$

On a ring of fixed radius the wavefunction depends only on $\phi$. The third term remains, and the moment of inertia is $\mechanical{I}=mr^2$.

$$
\hat H=-\frac{\hbar^2}{2\mechanical{I}}\frac{d^2}{d\phi^2},
\qquad
\frac{d^2\Phi}{d\phi^2}
=-\frac{2\mechanical{I}\energy{E}}{\hbar^2}\Phi
=-m_\ell^2\Phi.
$$

The dimensionless parameter has magnitude $\lvert m_\ell\rvert=\sqrt{2\mechanical{I}\energy{E}}/\hbar$. For nonzero $m_\ell$, the general solution is $\Phi=Ae^{im_\ell\phi}+Be^{-im_\ell\phi}$.

##### Periodic boundary condition

$$
\Phi(\phi+2\pi)=\Phi(\phi).
$$

The factors $e^{\pm i2\pi m_\ell}=\cos(2\pi m_\ell)\pm i\sin(2\pi m_\ell)$ must equal one. Thus $m_\ell=0,\pm1,\pm2,\ldots$, with the $m_\ell=0$ periodic solution constant.

Classically, $\mechanical{\mathbf L}=\mathbf r\times\mechanical{\mathbf p}$. The lecture uses $\mechanical{\boldsymbol\ell}$ for orbital angular momentum to distinguish it from a later convention.

The orbital angular momentum is

$$
\mechanical{\boldsymbol\ell}=\mathbf r\times\mechanical{\mathbf p}
=\begin{vmatrix}
\hat{\mathbf i}&\hat{\mathbf j}&\hat{\mathbf k}\\
x&y&z\\
\mechanical{p_x}&\mechanical{p_y}&\mechanical{p_z}
\end{vmatrix},
\qquad
\mechanical{\ell_z}=x\mechanical{p_y}-y\mechanical{p_x}.
$$

Using the momentum operators gives the corresponding angular operator in Cartesian and polar forms.

$$
\hat\ell_z=x\frac{\hbar}{i}\frac{\partial}{\partial y}
-y\frac{\hbar}{i}\frac{\partial}{\partial x}
=\frac{\hbar}{i}\frac{\partial}{\partial\phi}.
$$

Compare a plane-wave momentum eigenstate, for which $\hat p_x\psi=\hbar\signal{k}\psi$. For the ring choose $B=0$ and apply $\hat\ell_z$.

$$
\hat\ell_z(Ae^{im_\ell\phi})
=\frac{\hbar}{i}\frac{d}{d\phi}(Ae^{im_\ell\phi})
=m_\ell\hbar Ae^{im_\ell\phi}.
$$

Positive and negative integers $m_\ell$ give the two signs of angular momentum. Zero gives zero angular momentum. The periodic boundary condition quantizes $m_\ell$ and, by $\lvert m_\ell\rvert=\sqrt{2\mechanical{I}\energy{E}}/\hbar$, quantizes the energy.

Normalize $\Phi=Ae^{im_\ell\phi}$ by integrating around the ring.

$$
1=\int_0^{2\pi}\Phi^*\Phi\,d\phi
=\lvert A\rvert^2\int_0^{2\pi}1\,d\phi
=2\pi\lvert A\rvert^2.
$$

The amplitude can have a complex phase. Choosing it real and positive gives $A=1/\sqrt{2\pi}$.

The normalized angular state is

$$
\Phi_{m_\ell}(\phi)=\frac{e^{im_\ell\phi}}{\sqrt{2\pi}}
=\frac{\cos(m_\ell\phi)+i\sin(m_\ell\phi)}{\sqrt{2\pi}}.
$$

It is complex for $m_\ell\ne0$. For every nonzero $\lvert m_\ell\rvert$ the two eigenfunctions with opposite $m_\ell$ have the same energy, so the level is doubly degenerate. The $m_\ell=0$ level is singly degenerate.

For periodic variables, the uncertainty relation can be written

$$
\Delta\mechanical{\ell_z}\,\Delta(\sin\phi)
\ge\frac{\hbar}{2}\lvert\langle\cos\phi\rangle\rvert.
$$

![[Kyle Kabasares - Quantum Mechanics - Real and Imaginary Parts on a Ring.png|**Fig. 43** A sketch of the real part on the ring and one period of the real and imaginary parts for $m_\ell=+1$.]]

##### Particle on a sphere

![[Kyle Kabasares - Quantum Mechanics - Particle on a Sphere.png|**Fig. 44** Spherical surface on which the particle is constrained to move.]]

With $\energy{V}=0$, start from $\hat H=-\hbar^2\nabla^2/(2m)$. In spherical coordinates the Laplacian has radial and angular parts.

$$
\nabla^2=\frac{1}{r}\frac{\partial^2}{\partial r^2}(r\,\cdot)
+\frac{1}{r^2}\Lambda^2
=\frac{1}{r^2}\frac{\partial}{\partial r}
\left(r^2\frac{\partial}{\partial r}\right)
+\frac{1}{r^2}\Lambda^2.
$$

$$
\Lambda^2
=\frac{1}{\sin^2\theta}\frac{\partial^2}{\partial\phi^2}
+\frac{1}{\sin\theta}\frac{\partial}{\partial\theta}
\left(\sin\theta\frac{\partial}{\partial\theta}\right).
$$

For fixed $r$ on the sphere, only the angular Laplacian contributes.

$$
\hat H=-\frac{\hbar^2}{2mr^2}\Lambda^2
=-\frac{\hbar^2}{2\mechanical{I}}\Lambda^2,
\qquad
\mechanical{I}=mr^2.
$$

The notes list three approaches.

1. Treat the sphere as a stack of rings and separate variables, $\psi(\theta,\phi)=\Phi(\phi)\Theta(\theta)$.
2. Use the angular momentum operators.
3. Recognize the known eigenvalue problem $\Lambda^2\psi=-(2\mechanical{I}\energy{E}/\hbar^2)\psi$.

Using the third approach gives the spherical harmonics $\psi=Y_{\ell m_\ell}(\theta,\phi)$.

$$
\Lambda^2Y_{\ell m_\ell}=-\ell(\ell+1)Y_{\ell m_\ell},
\qquad
\frac{2\mechanical{I}\energy{E}}{\hbar^2}=\ell(\ell+1).
$$

$\ell=0,1,2,\ldots$ and $m_\ell=-\ell,-\ell+1,\ldots,\ell$ are integers. The separated equation for $\theta$ gives associated Legendre functions. The free-particle equation $-\hbar^2\nabla^2\psi/(2m)=\energy{E}\psi$ on the sphere reduces to the angular eigenvalue equation above.

The separated spatial function has form $\psi=P(r)Y_{\ell m_\ell}$. For fixed radius,

$$
\energy{E_\ell}=\frac{\ell(\ell+1)\hbar^2}{2\mechanical{I}}.
$$

There are $2\ell+1$ choices of $m_\ell$ for each $\ell$, all at the same energy.

For $\ell=1$, $m_\ell=0$, write $Y_{10}=\frac12\sqrt{3/\pi}\cos\theta=N\cos\theta$. The azimuthal derivative vanishes, so

$$
\Lambda^2Y_{10}
=\frac{1}{\sin\theta}\frac{d}{d\theta}[-N\sin^2\theta]
=-2N\cos\theta=-2Y_{10}.
$$

The eigenvalue is $-\ell(\ell+1)=-2$. For $\ell=2$, $m_\ell=1$, take $Y_{21}=N\cos\theta\sin\theta\,e^{i\phi}$ with the phase absorbed into $N$. The polar derivative of $\cos\theta\sin\theta$ is $1-2\sin^2\theta$. The azimuthal second derivative gives $-e^{i\phi}$.

$$
\begin{aligned}
\Lambda^2Y_{21}
&=\frac{Ne^{i\phi}}{\sin\theta}
\frac{d}{d\theta}(\sin\theta-2\sin^3\theta)
-\frac{N\cos\theta\sin\theta}{\sin^2\theta}e^{i\phi}\\
&=\frac{Ne^{i\phi}}{\sin\theta}
(\cos\theta-6\sin^2\theta\cos\theta-\cos\theta)\\
&=-6Y_{21}.
\end{aligned}
$$

This agrees with $-\ell(\ell+1)=-2(3)=-6$.

##### Rotational kinetic energy and space quantization

Classically, $\mechanical{L}=\lvert\mathbf r\times\mechanical{\mathbf p}\rvert=\mechanical{I}\signal{\omega}$ for the rotor, so

$$
\energy{E}=\frac12\mechanical{I}\signal{\omega}^2
=\frac{\mechanical{L}^2}{2\mechanical{I}}.
$$

Comparing with the stationary energies on the sphere gives

$$
\mechanical{L}^2=\ell(\ell+1)\hbar^2,
\qquad
\mechanical{L}=\hbar\sqrt{\ell(\ell+1)}.
$$

The spherical-harmonic equation quantizes the magnitude through the orbital angular momentum quantum number $\ell=0,1,2,\ldots$.

The Cartesian component is $\mechanical{L_z}=x\mechanical{p_y}-y\mechanical{p_x}$. In angular coordinates, $\hat\ell_z=(\hbar/i)\partial/\partial\phi$. Using a signed $m_\ell$,

$$
\hat\ell_zY_{\ell m_\ell}
=\frac{\hbar}{i}\frac{\partial}{\partial\phi}
\left[N\Theta(\theta)e^{im_\ell\phi}\right]
=m_\ell\hbar Y_{\ell m_\ell}.
$$

The magnetic quantum number $m_\ell$ sets the $z$ projection in units of $\hbar$. For $\ell=2$, there are five allowed projections and the angular momentum magnitude is $\sqrt6\,\hbar$.

![[Kyle Kabasares - Quantum Mechanics - Five Angular Momentum Projections.png|**Fig. 45** Vector model of space quantization for $\ell=2$, with projections $-2\hbar$ through $2\hbar$ in steps of $\hbar$.]]

A ket describes the state of a system such as an atom, molecule, or superconductor. Its label gives the quantities characterizing the state. An oscillator with precisely three vibrational quanta is $\lvert3\rangle$. For the state $\lvert S\rangle$,

$$
\lvert S\rangle=\sum_{j=1}^{j_{\max}}c_j\lvert q_j\rangle,
$$

where $\lvert q_j\rangle$ is a state with the $j$th eigenvalue of an operator $\hat Q$. The overlap can be written in terms of wavefunctions or in bra-ket notation.

$$
\int\psi_A^*(x)\psi_B(x)\,d\tau
=\langle A\mid B\rangle
=\langle B\mid A\rangle^*.
$$

Consider the initial hydrogen wavefunction

$$
\psi(r,\theta,\phi)=\frac{A}{a_0^{3/2}}
\left(\frac{e^{-r/a_0}}{\sqrt{\pi}}
-\frac{1}{\sqrt{8\pi}}\frac{r}{a_0}e^{-r/(2a_0)}\cos\theta\right).
$$

1. Rewrite $\psi$ using radial functions and spherical harmonics. Determine $A$ and find $\Psi(r,\theta,\phi,t)$ given $\psi$ at $t=0$.
2. At $t=0$, find the possible outcomes, probabilities, and post-measurement states for measurements of energy, squared angular momentum, and its $z$ component.
3. At $t=0$, find the radial probability density $P(r)$ irrespective of $\theta$ and $\phi$.

Use $\psi_{n\ell m_\ell}=R_{n\ell}Y_{\ell m_\ell}$ and identify $n$ from $e^{-r/(na_0)}$. The first term has $n=1$, for which $\ell=m_\ell=0$. The second has $n=2$, $\ell=1$ from the first power of $\cos\theta$, and $m_\ell=0$ from the absence of azimuthal dependence.

$$
\psi=A(c_1R_{10}Y_{00}-c_2R_{21}Y_{10}),
\qquad
R_{10}Y_{00}=\frac{2}{a_0^{3/2}}e^{-r/a_0}
\frac{1}{\sqrt{4\pi}}
=\frac{e^{-r/a_0}}{a_0^{3/2}\sqrt{\pi}}.
$$

Matching the first term gives $c_1=1$.

For the second term,

$$
R_{21}Y_{10}
=\left(\frac{1}{2\sqrt{6a_0^3}}\frac{r}{a_0}e^{-r/(2a_0)}\right)
\sqrt{\frac{3}{4\pi}}\cos\theta
=\frac{1}{2\sqrt{8\pi a_0^3}}\frac{r}{a_0}e^{-r/(2a_0)}\cos\theta.
$$

Matching coefficients gives $c_2=2$, so $\psi=A(R_{10}Y_{00}-2R_{21}Y_{10})$. The cross term integrates to zero by orthogonality. Normalization requires $\lvert A\rvert^2(1+4)=1$, so choose $A=1/\sqrt5$.

$$
\Psi(r,\theta,\phi,t)
=\frac{1}{\sqrt5}\left(
R_{10}Y_{00}e^{-i\energy{E_1}t/\hbar}
-2R_{21}Y_{10}e^{-i\energy{E_2}t/\hbar}\right).
$$

The angular momentum operators give the eigenvalues $\hbar\sqrt{\ell(\ell+1)}$ for the magnitude, $\hbar^2\ell(\ell+1)$ for its square, and $m_\ell\hbar$ for the $z$ component. In particular,

$$
\hat L^2=-\hbar^2\left[
\frac{1}{\sin\theta}\frac{\partial}{\partial\theta}
\left(\sin\theta\frac{\partial}{\partial\theta}\right)
+\frac{1}{\sin^2\theta}\frac{\partial^2}{\partial\phi^2}\right].
$$

$\hat L^2\psi_{100}=0$ and $\hat L^2(2\psi_{210})=4\hbar^2\psi_{210}$. The eigenvalue in the latter expression is $2\hbar^2$, with the additional factor of two coming from the coefficient.

| Observable | Result | Probability | State after measurement at $t=0$ |
| --- | --- | --- | --- |
| Energy | $\energy{E_1}$ | $1/5$ | $\psi_{100}=R_{10}Y_{00}$ |
| Energy | $\energy{E_2}=\energy{E_1}/4$ | $4/5$ | $\psi_{210}=R_{21}Y_{10}$ |
| Squared angular momentum | $0$ | $1/5$ | $\psi_{100}$ |
| Squared angular momentum | $2\hbar^2$ | $4/5$ | $\psi_{210}$ |
| $z$ component of angular momentum | $0$ | $1$ | $(\psi_{100}-2\psi_{210})/\sqrt5$ |

The notes leave the $z$-component collapse as a question. Both components lie in the same zero-eigenvalue subspace, so an ideal measurement of that component alone projects onto the entire initial state.

For part (c), the notes try to form a radial-only amplitude $(R_{10}-2R_{21})/\sqrt5$. Its square gives $(R_{10}^2-4R_{10}R_{21}+4R_{21}^2)/5$, marked with a question. For the requested radial density, integrate the original $\lvert\psi\rvert^2$ over solid angle. Orthogonality of $Y_{00}$ and $Y_{10}$ removes the cross term, and the volume element contributes $r^2$.

$$
P(r)=r^2\int\lvert\psi(r,\theta,\phi)\rvert^2\,d\Omega
=\frac{r^2}{5}\left(\lvert R_{10}\rvert^2+4\lvert R_{21}\rvert^2\right).
$$

##### Bra-ket review

$$
\begin{aligned}
\langle\energy{E}\rangle&=\langle\psi\mid\hat H\mid\psi\rangle
=\int_{-\infty}^{+\infty}\psi^*\hat H\psi\,dx,\\
\langle x\rangle&=\langle\psi\mid x\mid\psi\rangle
=\int_{-\infty}^{+\infty}\psi^*x\psi\,dx.
\end{aligned}
$$

The ket is the column vector, or the wavefunction in position representation. The bra is its conjugate row vector. Their overlap is an integral. In an orthonormal basis, $\langle\psi_n\mid\psi_m\rangle=\int\psi_n^*\psi_m\,dx=\delta_{mn}$. A constant $a$ between a bra and ket factors out as $a\langle\psi_m\mid\psi_n\rangle$. A matrix adjoint is $T^\dagger=(T^{\mathsf T})^*$.

Operators can be represented as matrices or by operations such as multiplication and differentiation. Bras and kets are vectors. If $\hat H\lvert\psi\rangle=\energy{E}\lvert\psi\rangle$, then

$$
\langle\psi\mid\hat H\mid\psi\rangle
=\energy{E}\langle\psi\mid\psi\rangle=\energy{E}
$$

for normalized $\psi$. In general, $T\lvert\psi\rangle=\lvert\phi\rangle$ produces a new vector. The special case $T\lvert\psi\rangle=a\lvert\psi\rangle$ is the eigenvector equation.

The previous state is $\lvert\psi\rangle=A(\lvert\psi_{100}\rangle-2\lvert\psi_{210}\rangle)$. In a hydrogenic atom,

$$
\energy{E_n}
=-\frac{Z^2\mu\electric{e}^4}{32\pi^2\electric{\epsilon_0}^2\hbar^2n^2},
\qquad
\mu=\frac{m_e m_{\mathrm{nucleus}}}{m_e+m_{\mathrm{nucleus}}}.
$$

$Z$ is the nuclear charge number and $\mu$ the reduced mass. The notes distinguish $\mu$ from the vacuum permeability $\magnetic{\mu_0}$ and the Bohr magneton $\magnetic{\mu_B}$.

Measuring $\mechanical{L}^2$ gives $0$ with probability $1/5$ and state $\psi_{100}$, or $2\hbar^2$ with probability $4/5$ and state $\psi_{210}$. For any normalized $\psi_{n\ell m_\ell}$,

$$
\langle\psi_{n\ell m_\ell}\mid\hat L_z\mid\psi_{n\ell m_\ell}\rangle=m_\ell\hbar.
$$

Both components of this example have $m_\ell=0$, so the outcome is zero with certainty and the superposition is preserved. Likewise, $\psi=A(\psi_{311}+4i\psi_{210})$ has the same $\ell=1$ in both components, so a measurement of angular momentum magnitude preserves that superposition. Components sharing the quantum number relevant to the observable give the same outcome.

##### Hydrogen atom quantum numbers

The eigenfunctions separate as $\psi_{n\ell m_\ell}=R_{n\ell}Y_{\ell m_\ell}$. The radial function can be chosen real, and the spherical harmonics can be complex.

- The principal quantum number $n$ determines $\energy{E_n}$ and allows $\ell=0,\ldots,n-1$. There are $n^2$ orbitals for a given $n$. The radial and angular node counts sum to $n-1$.
- The orbital angular momentum quantum number $\ell$ gives $2\ell+1$ orbitals for fixed $n,\ell$. There are $\ell$ angular nodes and $n-\ell-1$ radial nodes.
- The magnetic quantum number $m_\ell$ determines $\mechanical{L_z}=m_\ell\hbar$ and specifies an individual orbital within a given $n,\ell$.

##### Probabilities and the radial wavefunction

The spherical volume element is $d\tau=r^2\sin\theta\,dr\,d\theta\,d\phi$. The probability of finding the electron in it is $\lvert\psi_{n\ell m_\ell}\rvert^2\,d\tau=\psi_{n\ell m_\ell}^*\psi_{n\ell m_\ell}\,d\tau$. Integrate over all angles to obtain the probability at radius $r$.

$$
d\Omega=\sin\theta\,d\theta\,d\phi,
\qquad
\int\lvert Y_{\ell m_\ell}(\theta,\phi)\rvert^2\,d\Omega=1.
$$

For a single orbital, the radial probability is $P(r)\,dr=r^2\lvert R_{n\ell}(r)\rvert^2\,dr$. The radial function is a polynomial factor times $e^{-r/(na_0)}$. For example, $R_{10}(r)\propto e^{-r/a_0}$.

##### Angular momentum operators

Quantize $\mechanical{\mathbf L}=\mathbf r\times\mechanical{\mathbf p}$ by replacing coordinates and momenta with operators. With $q$ and $q'$ denoting Cartesian coordinates,

$$
[\hat q,\hat p_{q'}]=i\hbar\delta_{qq'},
\qquad
[\hat x,\hat p_x]=i\hbar,
\qquad
[\hat y,\hat p_x]=0.
$$

Matrix products commute when $AB=BA$. The product rule for commutators is $[AB,C]=A[B,C]+[A,C]B$. The handwritten line has an equals sign between the two terms.

Expanding the cross product gives

$$
\begin{aligned}
\mechanical{\mathbf L}={}&
(y\mechanical{p_z}-z\mechanical{p_y})\hat{\mathbf i}
+(z\mechanical{p_x}-x\mechanical{p_z})\hat{\mathbf j}\\
&+(x\mechanical{p_y}-y\mechanical{p_x})\hat{\mathbf k}.
\end{aligned}
$$

Compare $\energy{E_{\mathrm{rot}}}=\mechanical{L}^2/(2\mechanical{I})$ with $\energy{E_{\mathrm{k}}}=\mechanical{p}^2/(2m)$.

A component satisfies $\lvert\mechanical{L_a}\rvert\le\mechanical{L}$. In position representation, $\hat p_x=(\hbar/i)\partial/\partial x$, and

$$
\hat L_x=\frac{\hbar}{i}
\left(y\frac{\partial}{\partial z}-z\frac{\partial}{\partial y}\right).
$$

The other two components follow by cyclic permutation. To form the commutators, use the canonical position–momentum relations.

$$
\begin{aligned}
[\hat L_x,\hat L_y]
&=[\hat y\hat p_z-\hat z\hat p_y,\hat z\hat p_x-\hat x\hat p_z]\\
&=[\hat y\hat p_z,\hat z\hat p_x]+[\hat z\hat p_y,\hat x\hat p_z]\\
&=\hat y\hat p_x[\hat p_z,\hat z]+\hat x\hat p_y[\hat z,\hat p_z]\\
&=i\hbar(\hat x\hat p_y-\hat y\hat p_x)
=i\hbar\hat L_z.
\end{aligned}
$$

The other two expanded terms vanish because their factors commute.

$$
[\hat L_y,\hat L_z]=i\hbar\hat L_x,
\qquad
[\hat L_z,\hat L_x]=i\hbar\hat L_y.
$$

For $\hat L^2=\hat L_x^2+\hat L_y^2+\hat L_z^2$, start with

$$
[\hat L^2,\hat L_z]=[\hat L_x^2,\hat L_z]+[\hat L_y^2,\hat L_z]+[\hat L_z^2,\hat L_z].
$$

The last term vanishes. Use $[AB,C]=A[B,C]+[A,C]B$ on the first two terms.

$$
\begin{aligned}
[\hat L^2,\hat L_z]={}&
\hat L_x[\hat L_x,\hat L_z]+[\hat L_x,\hat L_z]\hat L_x\\
&+\hat L_y[\hat L_y,\hat L_z]+[\hat L_y,\hat L_z]\hat L_y.
\end{aligned}
$$

Substituting $[\hat L_x,\hat L_z]=-i\hbar\hat L_y$ and $[\hat L_y,\hat L_z]=i\hbar\hat L_x$ gives

$$
[\hat L^2,\hat L_z]
=-i\hbar(\hat L_x\hat L_y+\hat L_y\hat L_x)
+i\hbar(\hat L_y\hat L_x+\hat L_x\hat L_y)=0.
$$

By cyclic symmetry $[\hat L^2,\hat L_q]=0$ for each component $q$.

![[Kyle Kabasares - Quantum Mechanics - Angular Momentum Cone.png|**Fig. 46** The vector model depicts fixed angular momentum magnitude and fixed $z$ projection on a cone.]]

Classically the cross product of a vector with itself vanishes. For operator components, the corresponding cross product gives $\hat{\mathbf L}\times\hat{\mathbf L}=i\hbar\hat{\mathbf L}$ because the components do not commute.

##### Angular momentum ladder operators

$$
\hat L_\pm=\hat L_x\pm i\hat L_y,
\qquad
\hat L_x=\frac{\hat L_++\hat L_-}{2},
\qquad
\hat L_y=\frac{\hat L_+-\hat L_-}{2i}.
$$

$$
\begin{aligned}
[\hat L_z,\hat L_\pm]
&=[\hat L_z,\hat L_x]\pm i[\hat L_z,\hat L_y]\\
&=i\hbar\hat L_y\pm i(-i\hbar\hat L_x)
=\pm\hbar\hat L_\pm.
\end{aligned}
$$

Also $[\hat L^2,\hat L_\pm]=0$. Expanding the commutator between the ladder operators, the two same-component terms vanish.

$$
[\hat L_+,\hat L_-]
=[\hat L_x+i\hat L_y,\hat L_x-i\hat L_y]
=-i[\hat L_x,\hat L_y]+i[\hat L_y,\hat L_x]
=2\hbar\hat L_z.
$$

For an orbital angular momentum eigenstate,

$$
\hat L_z\psi=m_\ell\hbar\psi,
\qquad
\hat L\psi=\hbar\sqrt{\ell(\ell+1)}\psi,
$$

where $\hat L$ here denotes the magnitude operator.

##### General angular momentum

The lecture reviews $\hat L^2=\hat L_x^2+\hat L_y^2+\hat L_z^2$, $\hat L_\pm=\hat L_x\pm i\hat L_y$, $[\hat L^2,\hat L_k]=0$ for $k=x,y,z$, and the cyclic relations beginning with $[\hat L_x,\hat L_y]=i\hbar\hat L_z$. Equivalently, $\hat{\mathbf L}\times\hat{\mathbf L}=i\hbar\hat{\mathbf L}$.

$\mechanical{\mathbf L}$ denotes orbital angular momentum, $\mechanical{\mathbf S}$ intrinsic spin, and $\mechanical{\mathbf J}$ generalized angular momentum, which can represent either or their combination. Commuting operators admit simultaneous eigenstates. To prepare for half-integer spin, start with general labels $\lvert\lambda,m\rangle$. As an example of ket notation, $\psi_{100}$ corresponds to $\lvert1,0,0\rangle=\lvert100\rangle$.

$$
\hat L_z\lvert\lambda,m\rangle=m\hbar\lvert\lambda,m\rangle,
\qquad
\hat L^2\lvert\lambda,m\rangle=\hbar^2 f(\lambda,m)\lvert\lambda,m\rangle.
$$

The units of $\hbar$ are $\unit{J\,s}=\unit{kg\,m^2/s}$. The orbital eigenvalue will turn out to have $f=\ell(\ell+1)$. For now, apply the identity

$$
(\hat L^2-\hat L_z^2)\lvert\lambda,m\rangle
=(\hat L_x^2+\hat L_y^2)\lvert\lambda,m\rangle
=\hbar^2[f(\lambda,m)-m^2]\lvert\lambda,m\rangle.
$$

The sum of squares of Hermitian operators has nonnegative expectation, so $f(\lambda,m)-m^2\ge0$.

The bound $f(\lambda,m)\ge m^2$ restricts the possible $m$ values. The raising operator $\hat L_+=\hat L_x+i\hat L_y$ is non-Hermitian and generates a new state. The component $\hat L_z$ does not commute with $\hat L_x$ or $\hat L_y$. Its eigenstates generally mix when acted on by those operators.

Since $\hat L^2$ commutes with $\hat L_+$,

$$
\hat L^2\hat L_+\lvert\lambda,m\rangle
=\hat L_+\hat L^2\lvert\lambda,m\rangle
=\hbar^2 f(\lambda,m)\hat L_+\lvert\lambda,m\rangle.
$$

For the $z$ projection,

$$
\begin{aligned}
\hat L_z\hat L_+\lvert\lambda,m\rangle
&=(\hat L_+\hat L_z+[\hat L_z,\hat L_+])\lvert\lambda,m\rangle\\
&=(\hat L_+\hat L_z+\hbar\hat L_+)\lvert\lambda,m\rangle\\
&=(m+1)\hbar\hat L_+\lvert\lambda,m\rangle.
\end{aligned}
$$

The new state, if nonzero, therefore has the same squared magnitude and the same projection as $\lvert\lambda,m+1\rangle$. In the ladder basis,

$$
\hat L_+\lvert\lambda,m\rangle=C^+_{\lambda m}\lvert\lambda,m+1\rangle,
\qquad
\hat L_-\lvert\lambda,m\rangle=C^-_{\lambda m}\lvert\lambda,m-1\rangle.
$$

At the top of the ladder $m=\ell$, since the allowed projections run from $-\ell$ to $\ell$. Hence $\hat L_+\lvert\lambda,\ell\rangle=0$ and $\hat L_-\hat L_+\lvert\lambda,\ell\rangle=0$.

Expand the product that annihilates the highest state.

$$
\begin{aligned}
\hat L_-\hat L_+
&=(\hat L_x-i\hat L_y)(\hat L_x+i\hat L_y)\\
&=\hat L_x^2+\hat L_y^2+i[\hat L_x,\hat L_y]\\
&=\hat L^2-\hat L_z^2-\hbar\hat L_z.
\end{aligned}
$$

Since $\hat L_+\lvert\lambda,\ell\rangle=0$ and $\hat L_z\lvert\lambda,\ell\rangle=\ell\hbar\lvert\lambda,\ell\rangle$,

$$
\hat L^2\lvert\lambda,\ell\rangle
=(\hat L_z^2+\hbar\hat L_z)\lvert\lambda,\ell\rangle
=\ell(\ell+1)\hbar^2\lvert\lambda,\ell\rangle.
$$

With $[\hat L^2,\hat L_z]=0$, choose simultaneous eigenstates $\lvert\ell,m\rangle$.

$$
\begin{aligned}
\hat L^2\lvert\ell,m\rangle&=\ell(\ell+1)\hbar^2\lvert\ell,m\rangle,\\
\hat L_z\lvert\ell,m\rangle&=m\hbar\lvert\ell,m\rangle,\\
\hat L_\pm\lvert\ell,m\rangle&=C^\pm_{\ell m}\lvert\ell,m\pm1\rangle,\\
\langle\ell,m\mid\ell',m'\rangle&=\delta_{\ell\ell'}\delta_{mm'}.
\end{aligned}
$$

The ladder equations map between states with different $m$. Recall $\hat L_\pm=\hat L_x\pm i\hat L_y$ and $[\hat L_x,\hat L_y]=i\hbar\hat L_z$ with cyclic permutations. In the hydrogen state $\lvert n,\ell,m_\ell\rangle$, the function is $R_{n\ell}Y_{\ell m_\ell}$. For angular calculations keep $\lvert\ell,m\rangle$, so the angular part of $\lvert100\rangle$ is $\lvert00\rangle$.

The highest state satisfies $\hat L_-\hat L_+\lvert\ell,\ell\rangle=0$. Applying the lowering operator preserves $\ell$. The ladder also has a lower bound.

At the bottom of the ladder, $\hat L_-\lvert\lambda,k\rangle=0$ and $\hat L_+\hat L_-\lvert\lambda,k\rangle=0$. Expand the product.

$$
\begin{aligned}
\hat L_+\hat L_-
&=(\hat L_x+i\hat L_y)(\hat L_x-i\hat L_y)\\
&=\hat L_x^2+\hat L_y^2-i[\hat L_x,\hat L_y]\\
&=\hat L^2-\hat L_z^2+\hbar\hat L_z.
\end{aligned}
$$

Therefore $\hat L^2\lvert\lambda,k\rangle=(\hat L_z^2-\hbar\hat L_z)\lvert\lambda,k\rangle=k(k-1)\hbar^2\lvert\lambda,k\rangle$. The squared magnitude stays fixed along the ladder, so

$$
\ell(\ell+1)=k(k-1),
\qquad
(k+\ell)(k-\ell-1)=0.
$$

The roots are $k=-\ell$ and $k=\ell+1$. The lower bound must be at or below $\ell$, so $k=-\ell$. Hence $f(\lambda,m)=\ell(\ell+1)$ for $m=-\ell,-\ell+1,\ldots,+\ell$.

![[Kyle Kabasares - Quantum Mechanics - Integer and Half-Integer Projections.png|**Fig. 47** Integer and half-integer ladders on a number line, each symmetric about zero.]]

The ladder algebra admits half-integer values as well. Use general angular momentum notation to include spin. For orbital angular momentum, $\ell$ is a nonnegative integer and $m$ increases from $-\ell$ to $+\ell$ in integer steps.

$$
\begin{aligned}
\hat J^2&=\hat J_x^2+\hat J_y^2+\hat J_z^2,\\
\hat J^2\lvert j,m_j\rangle&=j(j+1)\hbar^2\lvert j,m_j\rangle,\\
[\hat J_x,\hat J_y]&=i\hbar\hat J_z \quad\text{and cyclic permutations},\\
[\hat J^2,\hat J_z]&=0,\\
\langle j,m_j\mid j',m_j'\rangle&=\delta_{jj'}\delta_{m_jm_j'}.
\end{aligned}
$$

##### Matrix representation

In the basis $\lvert j,m_j\rangle$, the entry with row $m_j$ and column $m_j'$ is

$$
T_{m_jm_j'}=\langle j,m_j\mid\hat T\mid j,m_j'\rangle.
$$

If $\hat T$ acts by multiplication on each basis ket, its matrix is diagonal. For the ladder operators, the potentially nonzero entries connect adjacent $m_j$. The first sketch orders the basis as $-1,0,1$, placing the raising entries immediately below the diagonal and the lowering entries above it.

$$
J_+=\begin{pmatrix}
0&0&0\\
(J_+)_{0,-1}&0&0\\
0&(J_+)_{1,0}&0
\end{pmatrix}
\quad(j=1,\ \text{ascending }m_j).
$$

For instance, $\langle1,1\mid\hat J_+\mid1,-1\rangle=C^+_{1,-1}\langle1,1\mid1,0\rangle=0$. Raising the highest $j=1$ ket also gives zero.

The dimension is $2j+1$. For $j=1$ the matrix is $3\times3$, and for spin $j=1/2$ it is $2\times2$.

$$
\langle j,m_j\mid\hat J^2\mid j,m_j\rangle=j(j+1)\hbar^2,
\qquad
\hat J_z\lvert j,m_j\rangle=m_j\hbar\lvert j,m_j\rangle.
$$

##### Constructing the matrices

For fixed $j$, use bras for rows and kets for columns. Here the discussion uses descending order $+j,+j-1,\ldots,-j$. The first row starts with $\langle j,+j\mid\hat J_z\mid j,+j\rangle$ and $\langle j,+j\mid\hat J_z\mid j,+j-1\rangle$. The bottom-left entry is $\langle j,-j\mid\hat J_z\mid j,+j\rangle$.

##### Orbital angular momentum in spherical coordinates

In the position representation,

$$
\begin{aligned}
\hat L_x&=-\frac{\hbar}{i}\left(
\sin\phi\,\frac{\partial}{\partial\theta}
+\cot\theta\cos\phi\,\frac{\partial}{\partial\phi}\right),\\
\hat L_y&=\frac{\hbar}{i}\left(
\cos\phi\,\frac{\partial}{\partial\theta}
-\cot\theta\sin\phi\,\frac{\partial}{\partial\phi}\right),\\
\hat L_z&=\frac{\hbar}{i}\frac{\partial}{\partial\phi}.
\end{aligned}
$$

Using $\cos\phi\pm i\sin\phi=e^{\pm i\phi}$ in $\hat L_x\pm i\hat L_y$ gives

$$
\hat L_\pm=\pm\hbar e^{\pm i\phi}
\left(\frac{\partial}{\partial\theta}
\pm i\cot\theta\frac{\partial}{\partial\phi}\right).
$$

These signs and the absence of a factor $1/2$ agree with the earlier definition of $\hat L_\pm$. The handwritten intermediate lines use inconsistent signs and factors.

For the highest state, $\hat L_+\lvert\ell,\ell\rangle=0$. Separate $Y_{\ell\ell}(\theta,\phi)=\Theta(\theta)\Phi(\phi)$.

$$
\Theta'\Phi+i\cot\theta\,\Phi'\Theta=0,
\qquad
\tan\theta\frac{\Theta'}{\Theta}=-i\frac{\Phi'}{\Phi}=c.
$$

Thus $\Phi\propto e^{ic\phi}$ and $\Theta\propto\sin^c\theta$. Since $\hat L_z\lvert\ell,\ell\rangle=\ell\hbar\lvert\ell,\ell\rangle$, the separation constant is $c=\ell$. This gives $Y_{\ell\ell}=N\sin^\ell\theta\,e^{i\ell\phi}$.

![[Kyle Kabasares - Quantum Mechanics - Projections for Orbital Quantum Number Two.png|**Fig. 48** The five $z$ projections for $\ell=2$, with angular momentum magnitude $\sqrt6\,\hbar$.]]

Applying $\hat L_z$ to the separated highest state gives

$$
\hat L_z\left(Ne^{ic\phi}\sin^c\theta\right)
=\frac{\hbar}{i}(ic)Y_{\ell\ell}
=c\hbar Y_{\ell\ell}
=\ell\hbar Y_{\ell\ell},
$$

so $c=\ell$.

##### Commutators and measurements

The commutator is $[\hat A,\hat B]=\hat A\hat B-\hat B\hat A$. For example $[\hat x,\hat p_x]=i\hbar$. Commuting observables admit simultaneous eigenstates and compatible measurements.

$$
\langle x\rangle=\langle\psi\mid\hat x\mid\psi\rangle=\int\psi^*x\psi\,dx,
\qquad
\sigma_A\sigma_B\ge\frac12\lvert\langle[\hat A,\hat B]\rangle\rvert.
$$

The angular momentum component commutators are cyclic, starting with $[\hat L_x,\hat L_y]=i\hbar\hat L_z$. A definite $z$ projection generally leaves the transverse components uncertain. The squared magnitude commutes with each component, $[\hat L^2,\hat L_q]=0$.

![[Kyle Kabasares - Quantum Mechanics - Angular Momentum Measurement Sketch.png|**Fig. 49** A vector-model sketch of angular momentum directions and projections.]]

##### Wavefunction methods

The analytical approach solves differential equations. The algebraic approach uses operators such as $\hat L_\pm$ and $a_\pm$, linear algebra, and commutation relations. The spatial Schrödinger equation gives the orbital wavefunction, while spin requires additional degrees of freedom. Bound-state energies become quantized upon imposing boundary conditions.

Solutions can involve Hermite, Laguerre, or Legendre polynomials, or simple exponential functions for piecewise-constant potentials.

![[Kyle Kabasares - Quantum Mechanics - Model Potentials Review.png|**Fig. 50** Sketches of a ramp, barrier, wells, step, and box geometries discussed in the review.]]

##### Energies from quantum dots

For the transition $n=2\to n=1$, the photon energy is $\Delta\energy{E}=hc/\signal{\lambda}$. What size quantum dot would give photons with energies of about $\quantity{20}{eV}$ or more? An electron can tunnel through a finite confining barrier. Infinite walls impose zero amplitude outside.

![[Kyle Kabasares - Quantum Mechanics - Quantum Dot Transition and Confinement.png|**Fig. 51** Transition between two levels and the finite and infinite confinement sketches for a quantum dot.]]

For a qualitative answer, approximate the quantum dot by an infinite well of width $L$.

$$
\energy{E_n}=n^2\frac{\pi^2\hbar^2}{2m_eL^2}.
$$

The first few values of $n^2$ are $1,4,9,16,25,36,\ldots$. For $n=2\to1$, decreasing $L$ increases $\Delta\energy{E}$ and decreases the photon wavelength. Stronger confinement spaces the energy levels farther apart.

![[Kyle Kabasares - Quantum Mechanics - Quantum Dot Concentration.png|**Fig. 52** Closely spaced wells at high concentration and more widely spaced wells at low concentration.]]

##### Atkins problems 3.29 and 3.30

For 3.29, use the tables to find $\psi=R_{41}Y_{11}$, with $n=4$, $\ell=1$, and $m_\ell=1$. The energies are $\energy{E_n}=\energy{E_0}/n^2$, where $\energy{E_0}$ accounts for the helium nucleus with $Z=2$. The orbital and spin magnitudes are $\hbar\sqrt{\ell(\ell+1)}$ and $\hbar\sqrt{s(s+1)}$, with $s=1/2$. The total is $\mechanical{\mathbf J}=\mechanical{\mathbf L}+\mechanical{\mathbf S}$.

![[Kyle Kabasares - Quantum Mechanics - Adding Orbital and Spin Angular Momentum.png|**Fig. 53** Vector-model sketch of orbital, spin, and total angular momentum.]]

For 3.30 the initial expression is $\psi=N(\psi_++\tfrac34\psi_-)$.

##### Oscillator probability

The quantum probability density is $\psi^*\psi$. For the classical oscillator of amplitude $A$, $x(t)=A\sin(\signal{\omega}t\pm\phi)$ and $\energy{U}=\frac12\mechanical{k}x^2$. The classical probability density $P(x)$ satisfies $\int P(x)\,dx=1$. The notes sketch the interval from $x$ to $x+dx$ within $[-A,A]$ and ask about the density at the center.

![[Kyle Kabasares - Quantum Mechanics - Classical Oscillator Probability Sketches.png|**Fig. 54** A spring–mass oscillator and sketches of its position interval and classical density, which rises toward the turning points.]]

The quantum oscillator has discrete levels and tails in classically forbidden regions. The classical behavior emerges in the large-$n$ limit.

![[Kyle Kabasares - Quantum Mechanics - Oscillator Levels and Forbidden Regions.png|**Fig. 55** Three levels in the quadratic potential and the regions beyond the turning points.]]

For the classical spring–mass system, $x(t)$ ranges from $-A$ to $A$. If we look at a random time, how likely is it to be near a specified $x_0$? The notes use the endpoint $x_0=A$ as an example of comparing the time spent near a position with the whole motion.

![[Kyle Kabasares - Quantum Mechanics - Spring Mass at its Turning Point.png|**Fig. 56** The spring–mass system drawn near $x=A$, with the origin and opposite turning point marked.]]

##### Double delta well

$$
\energy{V(x)}=-\alpha[\delta(x+a)+\delta(x-a)].
$$

![[Kyle Kabasares - Quantum Mechanics - Two Attractive Delta Potentials.png|**Fig. 57** Two attractive delta wells at $x=-a$ and $x=a$.]]

Questions to consider include the number of bound states, the wavefunctions in the three regions, scattering versus bound solutions, reflection and transmission, allowed energies, even and odd solutions, and the transcendental equations. Bound states have $\energy{E}<0$ and scattering states have $\energy{E}>0$. The bound energies take discrete values.

A symmetric potential admits even and odd states. The infinite-well examples illustrate the two parities.

![[Kyle Kabasares - Quantum Mechanics - Parity Review in a Symmetric Well.png|**Fig. 58** The $n=1$ state is even and the $n=2$ state is odd about the midpoint.]]

**Physics 137 — Midterm 2 review**

The Hilbert space for the specified interval consists of square-integrable functions, with functions that agree almost everywhere identified. Its inner product is

$$
\int_a^b\lvert f(x)\rvert^2\,dx<\infty,
\qquad
\langle f\mid g\rangle=\int_a^b f(x)^*g(x)\,dx.
$$

The integral exists for $f$ and $g$ in this Hilbert space. Conjugate symmetry follows from

$$
\langle g\mid f\rangle
=\int_a^b g(x)^*f(x)\,dx
=\left(\int_a^b f(x)^*g(x)\,dx\right)^*.
$$

Also $\langle f\mid f\rangle=\int_a^b\lvert f(x)\rvert^2\,dx$ is real and nonnegative.

- $f$ is normalized if $\langle f\mid f\rangle=1$.
- $f$ and $g$ are orthogonal if $\langle g\mid f\rangle=0$.
- A set $\{f_n\}$ is orthonormal if its elements are normalized and mutually orthogonal.
- An orthonormal set is complete if every function in the Hilbert space can be expanded as $f(x)=\sum_{n=1}^{\infty}c_nf_n(x)$, with convergence in the Hilbert-space norm.

**Problem 3.1**

1. Show that the set of square-integrable functions is a vector space.
2. Show that $\int_a^b f(x)^*g(x)\,dx$ satisfies the conditions for an inner product.

For part (a), start by checking closure under addition and scalar multiplication.

## Source

Kyle Kabasares, *Quantum Mechanics (Physics 137, UC Merced 2015)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\hbar$ | $\unit{J\,s}$ | Reduced Planck constant | Planck constant divided by $2\pi$. |
| $\energy{V}$ | $\unit{J}$ | Potential energy | Position-dependent energy term in the Hamiltonian. |
| $\energy{E}$ | $\unit{J}$ | Energy eigenvalue | Energy associated with a stationary state. |
| $\Psi$ | $\unit{m^{-3/2}}$ in three dimensions | Position-space wavefunction | Probability amplitude for one particle. Its squared magnitude is a probability density. |
| $\signal{\lambda}$ | $\unit{m}$ | Wavelength | Distance through which a sinusoidal wave repeats. |
| $\signal{k}$ | $\unit{m^{-1}}$ | Wave number | Spatial phase change per unit distance. |
| $\signal{\omega}$ | $\unit{rad/s}$ | Angular frequency | Temporal phase change per unit time. |
| $J_x$ | $\unit{s^{-1}}$ | Probability flux | Signed one-dimensional probability current. |
| $R$, $T$ | $1$ | Reflection and transmission coefficients | Ratios of reflected and transmitted flux magnitudes to the incident flux magnitude. |
| $\mechanical{k}$ | $\unit{N/m}$ | Spring constant | Proportionality between restoring force and displacement. |
| $\mechanical{I}$ | $\unit{kg\,m^2}$ | Moment of inertia | Equals $mr^2$ for the particle on a ring. |
| $\mechanical{\mathbf L}$, $\mechanical{\boldsymbol\ell}$ | $\unit{J\,s}$ | Angular momentum | Classical orbital value $\mathbf r\times\mechanical{\mathbf p}$. |
| $a_0$ | $\unit{m}$ | Bohr radius | Characteristic length in the hydrogen radial wavefunctions. |
| $\mu$ | $\unit{kg}$ | Reduced mass | Effective mass in the two-body hydrogenic problem. |
| $Z$ | $1$ | Atomic number | Nuclear charge in units of the elementary charge. |
