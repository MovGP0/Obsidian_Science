---
title: "Time-dependent transition rates and the golden rule"
---

> [!TLDR]
> Calculate first-order transitions, account for the density of final states, and distinguish harmonic and finite-time driving.

## Worked lecture material

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

The notes record that the February 9 discussion is canceled. For an initial eigenstate $\lvert i\rangle$, expand the interaction-picture state as $\sum_k c_k(\mechanical{t})\lvert k\rangle$, with $c_k^{(0)}=\delta_{ki}$. The first-order transition amplitude to $k\ne i$ is
$$
c_k^{(1)}=-\frac{i}{\hbar}\int_0^{\mechanical{t}}
e^{i\signal{\omega}_{ki}\mechanical{t}'}\langle k\vert V(\mechanical{t}')\vert i\rangle\,d\mechanical{t}',
\qquad
\signal{\omega}_{ki}=(\energy{E}_k^{(0)}-\energy{E}_i^{(0)})/\hbar.
$$
At second order, the earlier perturbation at $\mechanical{t}''$ takes $\lvert i\rangle$ to an intermediate $\lvert m\rangle$, and the later perturbation at $\mechanical{t}'$ takes $\lvert m\rangle$ to $\lvert k\rangle$. Sum over $m$ and integrate over $0\leq\mechanical{t}''\leq\mechanical{t}'\leq\mechanical{t}$ with the coefficient $(-i/\hbar)^2$.

The second-order amplitude in terms of Schrödinger-picture matrix elements is
$$
c_k^{(2)}
=\left(-\frac{i}{\hbar}\right)^2
\int_0^{\mechanical{t}}d\mechanical{t}'\int_0^{\mechanical{t}'}d\mechanical{t}''
\sum_m e^{i\signal{\omega}_{km}\mechanical{t}'}e^{i\signal{\omega}_{mi}\mechanical{t}''}
\energy{V}_{km}(\mechanical{t}')\energy{V}_{mi}(\mechanical{t}'').
$$

##### First-order transitions and Fermi's golden rule

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

##### Particle in a three-dimensional box

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

For decay from $\lvert i\rangle$ into a residual state $\lvert f\rangle$ and an emitted particle with momentum $\hbar\signal{\mathbf k}$, the golden-rule angular rate in box normalization is
$$
\frac{d\Gamma}{d\Omega}
=\frac{2\pi}{\hbar}\frac{\mechanical{L}^3}{(2\pi)^3}
\int_0^\infty \signal{k}^2\,d\signal{k}\,
|\langle f,\hbar\signal{\mathbf k}\vert V\vert i\rangle|^2
\delta\bigl(\energy{E}_i-\energy{E}_f-\energy{E}(\signal{\mathbf k})\bigr).
$$
The delta enforces energy conservation for the combined final state.

##### Harmonic perturbation

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

For the rectangular force pulse, evolve the initial state in the shifted basis until the pulse ends:
$$
\lvert\psi(\mechanical{T})\rangle
=\sum_k c_k e^{-i\energy{\widetilde E}_k\mechanical{T}/\hbar}\lvert\widetilde k\rangle.
$$
The shifted ground state and first excited state acquire a relative phase $e^{-i\signal{\omega}\mechanical{T}}$. To first order in the force, $c_0\simeq1$ and $\lvert\widetilde0\rangle\simeq\lvert0\rangle-c_1\lvert1\rangle$, while $\lvert\widetilde1\rangle\simeq\lvert1\rangle$ for the term already multiplied by $c_1$. Thus the amplitude to be in the original first excited state at switch-off is proportional to $e^{-i\signal{\omega}\mechanical{T}}-1$. Its squared modulus gives $4\sin^2(\signal{\omega}\mechanical{T}/2)$. The handwritten line gives a plus sign and a squared cosine. The relative minus sign comes from the inverse shift, and the amplitude must vanish for a zero-duration pulse.

##### Baym problem 12-2

Find the ionization rate as a function of the frequency of a sinusoidal electric field. Treat the relative motion in the central potential as that of a particle with the reduced mass. If the proton is allowed to move, the field acts on both charges. Writing the signed perturbation as $-\mathcal E\mechanical{x}_e+\mathcal E\mechanical{x}_p=-\mathcal E(\mechanical{x}_e-\mechanical{x}_p)$ shows that it depends on the relative coordinate. Here $\mathcal E$ includes the charge. The sketch indicates the plane-wave form used for the outgoing state.

![[Kyle Kabasares - Quantum Mechanics II - Ionization in a central potential.png|**Fig. 11** The sketch pairs an attractive central potential with the plane-wave form used for the continuum.]]

The notes revisit the continuum rate with a direct and a second-order amplitude through intermediate states. In practice, sum or integrate over the states available at the final energy.

For slow switch-on from the distant past, a positive parameter $\eta$ in $V(\mechanical{t})e^{\eta\mechanical{t}}$ suppresses the perturbation at early times. Another switching function, $\tfrac12[1+\tanh(\eta\mechanical{t})]$, tends to zero in the distant past and one in the distant future. Compare these to an abrupt step.

![[Kyle Kabasares - Quantum Mechanics II - Abrupt switching reference.png|**Fig. 12** The step is the abrupt limit against which the smooth switch-on is compared.]]

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

## Source

Kyle Kabasares, *Quantum Mechanics II (Physics 215B, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{E}_i^{(0)}$ | $\unit{J}$ | Unperturbed energy | Energy eigenvalue of state $i$ before adding the perturbation. |
| $\hbar$ | $\unit{J\,s}$ | Reduced Planck constant | Planck constant divided by $2\pi$. |
| $\signal{\omega}$, $\signal{\omega}_j$ | $\unit{rad\,s^{-1}}$ | Angular frequencies | Common unperturbed frequency and frequencies of the new oscillator modes. |
| $\mechanical{t}$, $\mechanical{t}_0$, $\Delta\mechanical{t}$ | $\unit{s}$ | Time | Observation time, initial or switching time, and elapsed time. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Particle mass. |
| $\mechanical{x}$ | $\unit{m}$ | Position | Displacement along the oscillator axis. |
| $\mechanical{p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | Momentum along the oscillator axis. |
| $\energy{E}$, $\energy{E}_0$ | $\unit{J}$ | Energy eigenvalue | Energy of an eigenstate, including the common energy of a degenerate subspace. |
| $\mechanical{F}$, $\mechanical{F}_0$ | $\unit{N}$ | Linear driving coefficient | Coefficient of displacement in the driving potential, equal to the negative of the applied force. |
| $\mechanical{x}_0$ | $\unit{m}$ | Shifted equilibrium position | Minimum of the oscillator potential after adding the linear term. |
| $\mechanical{z}$, $\mechanical{r}$ | $\unit{m}$ | Vertical position and radius | Position along the drive direction and distance from the origin. |
| $E$ | $\unit{N}$ | Linear perturbation coefficient | Electric field strength multiplied by the signed charge, with the sign set by the potential convention. |
| $\rho(\energy{E})$ | $\unit{J^{-1}}$ | Density of states | Number of states per unit energy in the set of final states. |
| $\Gamma$ | $\unit{s^{-1}}$ | Transition rate | Leading probability per unit time for transition into the continuum. |
| $\Delta\energy{E}$, $\delta\energy{E}$ | $\unit{J}$ | Energy scales | Width over which the continuum factors change and spacing of individual final levels. |
| $\Omega$ | $\unit{sr}$ | Solid angle | Angular measure for the direction of a final momentum. |
| $\mechanical{L}$ | $\unit{m}$ | Box side length | Periodic normalization length in each coordinate. |
| $\signal{\mathbf k}$, $\signal{k}_j$ | $\unit{m^{-1}}$ | Wave vector and components | Spatial frequencies of the momentum eigenfunction. |
| $\mechanical{\mathbf p}$, $\mechanical{\mathbf p}'$ | $\unit{kg\,m\,s^{-1}}$ | Momentum vectors | Momentum before and after scattering. |
| $d\Gamma/d\Omega$ | $\unit{s^{-1}\,sr^{-1}}$ | Differential transition rate | Transition rate per unit outgoing solid angle. |
| $j_{\mathrm{in}}$ | $\unit{m^{-2}\,s^{-1}}$ | Incident particle flux | Number of incident particles passing through unit area per unit time. |
| $d\sigma/d\Omega$ | $\unit{m^2\,sr^{-1}}$ | Differential cross section | Scattering rate per unit solid angle divided by the incident flux. |
| $\mechanical{T}$ | $\unit{s}$ | Pulse duration | Time between switching the force on and off. |
| $\energy{\widetilde E}_k$ | $\unit{J}$ | Shifted oscillator energy | Energy eigenvalue while the constant force acts. |
| $\mathcal E$ | $\unit{N}$ | Electric driving coefficient | Charge-weighted field strength with the sign convention used in the ionization example. |
| $\eta$ | $\unit{s^{-1}}$ | Switching rate | Parameter setting the speed of the smooth switch-on. |
| $c$ | $\unit{m\,s^{-1}}$ | Speed of light | Vacuum light speed used in the time coordinate and Maxwell equations. |
| $\energy{V}_0$, $\energy{V}$ | $\unit{J}$ | Well depth and potential energy | Positive depth and the signed binding potential as a function of radius. |
| $A$, $B$ | $\unit{s^{-1}}$ | Mode emission and absorption coefficients | Spontaneous rate and induced transition rate per photon for a single resonant mode. |
| $d\energy{P}_{\mathrm{rad}}/d\Omega$ | $\unit{W\,sr^{-1}}$ | Angular radiated power | Radiated power per solid angle into the specified polarization. |
