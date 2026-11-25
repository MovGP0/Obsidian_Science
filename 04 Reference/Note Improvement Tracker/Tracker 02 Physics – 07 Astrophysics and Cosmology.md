---
title: "Note Improvement Tracker – 02 Physics/07 Astrophysics and Cosmology"
---

> [!TLDR]
> This note tracks the review of the 47 notes in `02 Physics/07 Astrophysics and Cosmology`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 95 possible errors or notation conflicts. 95 of them are verified (79 fixed, 15 partly, 1 unsure); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N3779|N3779]] Advanced stellar burning, polytropes, and compact stars: In the Gamow-energy line, "$\energy{\epsilon}_0=1.22(Z_\alpha Z_X\mu\thermal{T}_6^2)^{1/3}\,\unit{keV}$" needs squared charges: $E_0=1.22\,(Z_\alpha^2Z_X^2\mu\,T_6^2)^{1/3}\,\mathrm{keV}$. **Fixed:** Changed to E_0=1.22(Z_alpha^2 Z_X^2 mu T_6^2)^(1/3) keV and renamed the symbol from epsilon_0 to E_0 (prose says the notes use epsilon_0).
- [[#N3779|N3779]] Advanced stellar burning, polytropes, and compact stars: Composition table, row "Iron, as written": for fully ionized ${}^{56}$Fe the values are $\mu=56/27\approx2.07$, $\mu_0=56$ and $\mu_e=56/26\approx2.15$. The listed $56/29$, $28$ and $2$ are wrong. In the note's density relation $\rho=n\mu_0m_u$, $\mu_0$ has to be 56. **Fixed:** Row now reads fully ionized iron-56 with mu=56/27~2.07, mu_0=56, mu_e=56/26~2.15.
- [[#N3779|N3779]] Advanced stellar burning, polytropes, and compact stars: In the Fermi–Dirac pressure block, state the correct form once instead of only listing the variants: $P=\frac{(3\pi^2)^{2/3}}{5}\frac{\hbar^2}{m_e}\left(\frac{\rho}{\mu_em_u}\right)^{5/3}$. The displayed "$\thermal{T}/\mechanical{\rho}_{\mathrm{cr}}^{3/2}$" should be $T/\rho_{\mathrm{cr}}^{2/3}$. With that form the $2.38\times10^{-5}$ coefficient checks out: recomputed 2.385e-5 kg m^-3 K^-3/2. For He at $10^9$ K it gives $\rho_{\mathrm{cr}}\approx2.8\times10^9$ kg m^-3. **Fixed:** All three pressure lines now use (3pi^2)^(2/3) hbar^2/m_e and T/rho_cr^(2/3); callout updated; added that the 2.38e-5 formula gives ~2.8e9 kg m^-3 for He at 1e9 K (recomputed 2.385e-5).
- [[#N3779|N3779]] Advanced stellar burning, polytropes, and compact stars: Chandrasekhar mass: the correct coefficient is $\sqrt{3\pi}/2$, not $(3\pi)^{3/2}/2$. The composition factor is $(2/\mu_e)^2$, giving $M_{\mathrm{Ch}}=1.457\,(2/\mu_e)^2M_\odot$ (recomputed 1.456). For $\mu_e=1$ this is $5.83M_\odot$, not the quoted $5.73M_\odot$. Replace the hedging callout with this result. **Fixed:** Coefficient sqrt(3pi)/2 and factor (2/mu_e)^2 (recomputed 1.456); callout rewritten; added that mu_e=1 gives 5.83 M_sun.
- [[#N3779|N3779]] Advanced stellar burning, polytropes, and compact stars: The physical-quantity table is a merged list from other notes. Examples: $z$ is listed as "Redshift … DSNB sketch" but is used as the Lane–Emden coordinate. $a$ appears three times, as radiation constant, confinement length and polytropic length. $\mu$ has three different units. $D$ is a diffusion coefficient but is used as a speed. There are neutron-drip, impact-parameter and DSNB entries the note never uses. Rebuild the table from symbols actually present and resolve the $a$, $n$, $\mu$ and $E$ clashes. **Fixed:** Rebuilt table from symbols in the note; resolved clashes by renaming nucleus density to n_nuc, polytropic length a to ell, and the speed-condition mass mu to m.
- [[#N3780|N3780]] Astronomical fluxes, magnitudes, and extinction: The physical-quantity table lists many symbols the note never uses, and several clash with symbols that are used. Orbital period $\signal{T}$ clashes with transmission $\signal{T}(\signal{\lambda})$. Oort $A,B$ clash with extinction $A$ and the $B$ band. Binary separation is listed for $\mechanical{a}$, which the note uses for atmospheric path length. Right ascension and parallax are both $\alpha$. Also listed are noise terms, a star-formation time and others. Prune the table to this note's symbols. **Fixed:** Removed rows from other notes (RA, parallax, Oort A and B, binary a and T, noise terms, t_0, sky mu_B and mu_K, and others); added atmospheric path a, a_0 and A_lambda, A_V, A_B.
- [[#N3781|N3781]] Atomic oscillators and line absorption cross sections: The physical-quantity table defines $\alpha$ as the fine-structure constant, but the note uses $\signal{\alpha}_{\signal{\nu}}$ for the absorption coefficient. $\energy{E}$ is listed as "radiant energy" but appears only as level energies $E_u,E_\ell$. The Doppler parameter $b$ is unused. Missing are $\sigma$, $B_{\ell\to u}$, $A_{u\to\ell}$, $g_\ell$, $g_u$, $\omega_0$, $\electric{E}_0$ and $\electric{\boldsymbol d}$. **Fixed:** Rebuilt table: alpha_nu absorption coefficient, level energies E_l and E_u, removed b and fine-structure alpha, added sigma, B, A, g, omega_0, E_0, d and others.
- [[#N3782|N3782]] Baryon–photon coupling and growth of matter perturbations: The physical-quantity table gives $\Psi,\Phi$ units of $\unit{m^2\,s^{-2}}$, but in this note's metric ($g^{00}=-(1+2\Psi)^{-1}$) they are dimensionless. The table also lists unused symbols ($\gamma$, curvature radius $A$, $\Lambda$, $\sigma$, scalar field $\phi$, $C_\ell$, $\theta$) and omits $N_\ell$, $\Theta_\ell$, $n_e$, $\rho_{\mathrm b}$, $q^{ij}$, $u^i$ and $y$. **Fixed:** Rebuilt table with Psi and Phi dimensionless; removed gamma, A, curvature k, Lambda, sigma, scalar phi, C_l, spherical angles; added N_l, Theta_l, n_e, rho_b, q^ij, u^i, y and others.
- [[#N3783|N3783]] Celestial coordinates, astrometry, and stellar binaries: The "practical parallax range" of about $200$ pc and the Gaia line "about $10^9$ stars" with no precision are outdated. Gaia DR3 has about $1.8\times10^9$ sources, with parallax precision of about 0.02–0.03 mas at $G<15$, which reaches 10% distances out to several kpc. Update the catalog table and the Fig. 33 discussion. **Fixed:** Added a note after the 200 pc statement (before Fig. 33) with Gaia DR3 parallax precision 0.02-0.03 mas at G<15 and kpc reach; Gaia row now gives DR3 ~1.8e9 sources and its precision.
- [[#N3783|N3783]] Celestial coordinates, astrometry, and stellar binaries: The physical-quantity table lists the Boltzmann constant $k$ (unused) but not the velocity amplitudes $\mechanical{k}_1,\mechanical{k}_2$. It lists "argument of periastron $\omega$", which clashes with the orbital angular speed $\mechanical{\omega}$, plus extinction $A$, Oort $A,B$, scattering angle $\alpha$ (clashing with RA and parallax $\alpha$) and an "emitter radius" for $\mechanical{r}$, which here means orbital radii $r_1,r_2$. Rebuild it from the note's symbols. **Fixed:** Rebuilt table from note symbols (k_1, k_2, M_1, M_2, r_1, r_2, v_1, v_2, mass-luminosity exponent); removed Boltzmann k, argument of periastron, extinction, Oort A and B, scattering angle, emitter radius. RA and parallax both use alpha in the body and figure, so they stay as separate rows.
- [[#N3784|N3784]] Comptonization and the Sunyaev–Zeldovich effect: The physical-quantity table lists the fine-structure constant $\alpha$, which is never used; the note's $\alpha$ is the $T$–$M$ scaling exponent. It omits $\tau$, $n_e$, $T_e$, $\Theta$, $D$, $d_A$, $f_{\mathrm{gas}}$ and $M_{\mathrm{tot}}$. $\energy{E}$ is listed as "radiant energy" but is used as photon energy $E_\gamma$. **Fixed:** Rebuilt table: alpha as T-M scaling exponent, E_gamma photon energy; added tau, n_e, T_e, Theta, D, d_A, f_gas, M_tot and others; removed fine-structure alpha and the generic y row.
- [[#N3785|N3785]] Cosmic Background Microwave Radiation: "$2.72584\pm0.00057$ K" has two digits transposed. The Fixsen (2009) value is $T_0=2.72548\pm0.00057$ K, which also matches the quoted $-270.425\,^\circ$C (2.72548 − 273.15 = −270.4245). **Fixed:** Changed to 2.72548 +- 0.00057 K (Fixsen 2009), consistent with -270.425 C.
- [[#N3786|N3786]] Cosmic energy components and thermal equilibrium: "approximate upper-limit range of $0.2$–$1$ eV for $\sum m_\nu c^2$" is outdated. Planck 2018 gives $\sum m_\nu<0.12$ eV, DESI 2024 combined with the CMB gives about $<0.07$ eV, and KATRIN (2024) gives $m_\beta<0.45$ eV. Oscillations require $\sum m_\nu\gtrsim0.06$ eV. **Fixed:** Kept the lecture value and added current bounds: Planck 2018 <0.12 eV, DESI 2024 with CMB ~0.07 eV, oscillation lower bound ~0.06 eV.
- [[#N3786|N3786]] Cosmic energy components and thermal equilibrium: In "Beyond equilibrium", "Big Bang nucleosynthesis at 1–10 MeV" is too hot. Weak freeze-out of $n/p$ happens near 0.8 MeV, and nucleosynthesis proper happens near 0.07–0.1 MeV, as in the companion note [[Expansion histories and primordial element abundances]]. The earlier "$k_BT_{\mathrm{BBN}}\simeq1$ MeV" estimate of $a_{\mathrm{BBN}}$ should also say it is the onset. **Fixed:** List item now states n/p freeze-out near 0.8 MeV and nucleus formation near 0.07-0.1 MeV with a link to the companion note; the a_BBN sentence now says onset of BBN at weak freeze-out.
- [[#N3786|N3786]] Cosmic energy components and thermal equilibrium: The physical-quantity table gives $k$ units of $\unit{m^{-2}}$, but in this note's Friedmann equation $k\in\{0,\pm1\}$ is dimensionless with $R_0$ explicit. The table lists $\mu$ as a "direction cosine", which clashes with the chemical potential $\thermal{\mu}$ used here. It also has unused rows ($\tau$, $\gamma$, $\vec v$, $\mechanical{F},\mechanical{m},\mechanical{a}$, $A$, $\vec k$, $\delta$). Pressure $\thermal{p}$ and momentum $\mechanical{p}$ share a letter in the same integral; consider $P$ for pressure. **Partly:** Set k dimensionless (curvature index with explicit R_0); removed direction-cosine mu and unused tau, gamma, v, F m a, A, vec k, delta, rho rows; did not rename pressure to P because P^mu is the four-momentum in this note (macros already differ).
- [[#N3787|N3787]] Cosmological geodesics and photon redshift: The physical-quantity table lists $z$, which is never defined in the body. It also lists the scalar field $\phi$ (GeV), clashing with the azimuth $\phi$ used here, and proper volume $V$, clashing with the vector $\vec V$. Further unused rows are $\sigma$, $\mu$, $\delta$, $A$ and $\mechanical{F},\mechanical{m},\mechanical{a}$. The affine parameter $\lambda$, $\Gamma^\mu_{\alpha\beta}$ and $g_{\mu\nu}$ are missing. **Fixed:** Rebuilt table from note symbols; added affine parameter lambda, Christoffel symbols, metric, proper time, position vector s.
- [[#N3788|N3788]] Cosmological horizons, photon multipoles, and density spectra: The physical-quantity table describes $\chi$ as a "hyperspherical radial angle" in rad, but this note uses $\chi$ as the comoving radial distance in $D_A=\chi/(1+z)$. It gives $\Psi,\Phi$ units of $\unit{m^2\,s^{-2}}$ while the photon equation treats them as dimensionless. It lists $k$ as a curvature parameter in m^-2 next to wavenumber $k$. There are unused rows ($\gamma$, $\mechanical F$, $\Lambda$, $\sigma$, $n$, $T_\nu$, $V$, $A$). **Fixed:** chi is now comoving radial distance in m (added D_A); Psi and Phi dimensionless; removed curvature k, gamma, F m a, Lambda, sigma, A; replaced n, T_nu, V, theta-phi, v rows with n_e, T_e, V_eff, subtended angle, bulk velocity; added m_e and scattering momenta.
- [[#N3789|N3789]] Curvature, stress-energy conservation, and Friedmann equations: The physical-quantity table gives $k$ units of $\unit{m^{-2}}$, but the note normalizes $k\in\{0,\pm1\}$ with an explicit $R_0$. It lists $\ell,C_\ell$ as an angular multipole, while the note uses $\ell$ for transverse length in $\ell=a S_k\,d\theta$. It lists the scalar field $\phi$, clashing with the azimuth $\phi$. Several rows are unused ($\gamma$, $\mechanical F$, $\sigma$, $\vec k$, $\mu$, $\delta$, $E$). **Fixed:** k is a dimensionless curvature index; ell is transverse proper length; removed scalar phi, sigma, vec k, mu, delta; gamma row is now the spatial metric, F m a row is now mass m, v row is now particle speed (A, chi, Lambda, E are used and kept).
- [[#N3790|N3790]] Cyclotron and single-particle synchrotron emission: Pulse width: the beam sweeps past the observer while the velocity turns through the full cone width $\Delta\theta\approx2/\gamma$, so $L\approx2r_g/\gamma$. Rybicki and Lightman eq. 6.16 then gives $\Delta t_{\mathrm{pulse}}\approx1/(\gamma^3\omega_B^{\mathrm{rel}}\sin\alpha)$, not $1/(2\gamma^3\omega_B^{\mathrm{rel}}\sin\alpha)$. Fix "$\mechanical{L}=2\mechanical{r}_g\sin(\theta/2)\simeq\mechanical{r}_g/\gamma$" and the bandwidth estimate. **Fixed:** L ~ 2 r_g/gamma, L/v ~ 2/omega_B, Delta t_pulse ~ 1/(gamma^3 omega_B^rel sin alpha) (R and L eq. 6.16), bandwidth ~ gamma^3 omega_B^rel sin alpha.
- [[#N3790|N3790]] Cyclotron and single-particle synchrotron emission: The physical-quantity table defines $\alpha$ as the fine-structure constant, but the note uses $\alpha$ for pitch angle. $L$ is used for luminosity, emission-arc chord length and (in the first paragraph) source length. $\theta$ is both the aberration angle and the dipole-pattern angle (Fig. 61 uses $\theta$ while the text uses $\phi$). Rename the chord, for example to $\ell_{AB}$, and add $r_g$, $\gamma$, $v_\perp$ and $\omega_B^{\mathrm{rel}}$ to the table. **Partly:** Rebuilt table (pitch angle alpha, r_g, gamma, v_perp, omega_B^rel and others); did not rename chord L or change theta in the Fig. 61 caption because the figure images carry those labels.
- [[#N3791|N3791]] Electromagnetic units and Compton scattering: The physical-quantity table lists the Compton parameter $y$, which is never used. It lists $\energy{E}$ as "radiant energy" while the note uses photon energies $E_\gamma^{i,f}$. It omits $k$ (Coulomb constant), $\gamma$, $x$ and the scattering angle $\Theta$. **Fixed:** Rebuilt table: removed y; added Coulomb constant k, gamma, x (coordinate and dimensionless energy), Theta, photon energies E_gamma^i and E_gamma^f, and the EM-unit symbols.
- [[#N3792|N3792]] Epicyclic orbits, asymmetric drift, and Galactic phase space: The physical-quantity table contains rows from other notes that clash with this note's symbols. The Stefan–Boltzmann $\sigma$ clashes with velocity dispersion $\mechanical\sigma$, apparent magnitude $m$ with mass $\mechanical m$, airmass $X$ with epicycle amplitude $\mechanical X$, and dust path length $\mechanical x$ with epicycle displacement $\mechanical x$. Extinction $A$ clashes with Oort $A$, and grain density $n$ with stellar density $n$. Binary-star, transit, luminosity-function and metallicity rows are also included. Prune it to the epicycle, CBE and Jeans symbols. **Fixed:** Rebuilt table with escape, epicycle, Lindblad, CBE and Jeans symbols; removed Stefan-Boltzmann sigma, magnitudes, airmass, dust path, extinction, Oort A and B, binary and transit rows.
- [[#N3792|N3792]] Epicyclic orbits, asymmetric drift, and Galactic phase space: In "Collisionless Boltzmann equation", "The derivation assumes a time-independent potential" is not needed. The phase-space continuity argument with $\dot{\mathbf v}=-\nabla\Phi(\mathbf x,t)$ holds for time-dependent potentials. What is required is a smooth potential and negligible encounters. **Fixed:** Sentence now says the derivation conserves star number and requires a smooth potential, and that the potential can depend on time.
- [[#N3793|N3793]] Expansion histories and primordial element abundances: "$\energy{B}_{{}^4\mathrm{He}}=22$ MeV" is wrong as a binding energy. The ${}^4$He binding energy is 28.3 MeV; the nearby value 23.8 MeV is the $Q$ of $D+D\to{}^4\mathrm{He}+\gamma$. Either correct it or label the reaction. **Fixed:** Added that the 4He binding energy is 28.3 MeV and that 23.8 MeV is the energy released in D+D->4He+gamma; kept the manuscript value as quoted.
- [[#N3794|N3794]] Galactic chemical evolution and the closed-box model: Physical quantities table lists $Z$ as zenith angle, $X$ as airmass, $A$ as extinction and Oort constant, $h$, the Stefan–Boltzmann $\sigma$ and a grain density $n$, none of which this note uses; $Z$ and $X$ clash with the metallicity and hydrogen mass fraction used in the text, while $X$, $Y$, $N_{\mathrm O}$, $N_{\mathrm{Fe}}$, $M_{\mathrm g}$, $M_{\mathrm h}$, $M_\star$ are missing. **Fixed:** Rebuilt table from the note symbols.
- [[#N3794|N3794]] Galactic chemical evolution and the closed-box model: $Z_\odot=0.02$ and $X=0.76$, $Y=0.24$ are old values; modern solar metallicity is $Z_\odot\approx0.013$–$0.014$ (Asplund et al. 2009) and primordial $Y_p\approx0.245$; label 0.02 as the classical value used in the G-dwarf example. **Partly:** Added that 0.02 is the classical value used in the G-dwarf example, modern Z_sun ~0.013-0.014 (Asplund 2009) and Y_p ~0.245; X=0.76 and Y=0.24 are close to primordial values, so not changed.
- [[#N3795|N3795]] Galactic potential models, virial balance, and relaxation: Physical quantities table is mostly from other notes: $m$ as apparent magnitude (here mass), $b$ as softening constant (here impact parameter), $\alpha$ as right ascension/parallax (here line-of-sight angle and scattering angle), $\tau$ as optical depth (here averaging time), $R$ as stellar radius in km (here system size), $p$ metal yield unused; replace with the note's actual symbols ($N$, $t_c$, $t_r$, $f(v)$, $\eta$, …). **Fixed:** Rebuilt table: m as mass, b as impact parameter, alpha as line-of-sight and scattering angles, tau as averaging time, R as system size; added N, t_c, t_r, f(E), eta, k, T and others; removed metal yield p and other unused rows.
- [[#N3795|N3795]] Galactic potential models, virial balance, and relaxation: Globular-cluster Coulomb logarithm: $r_s\simeq2\,\mathrm{AU}\simeq9.7\times10^{-6}\,\mathrm{pc}\approx10^{-5}\,\mathrm{pc}$, so $\Lambda=R/r_s\approx10^5$ ($\ln\Lambda\approx11.5$), not $\ln[1/(2\times10^{-5})]=\ln(5\times10^4)$; the following sentence about the Galactic disk is a non sequitur after a globular-cluster example. **Partly:** Added that 2 AU ~ 9.7e-6 pc gives Lambda ~ 1e5 and ln Lambda ~ 11.5; the Galactic-disk sentence is correct physics and only got a transition (In the solar neighborhood, relaxation is also too slow).
- [[#N3796|N3796]] Galactic virial balance, rotational support, and anisotropy: Physical quantities table lists $r_{\mathrm g}$ twice (gravitational radius and "Gyroradius"), $V$ as both gas volume and potential energy while the note uses $V_{jk}$ for the external term, $K$ as a "virial scaling coefficient" clashing with kinetic energy $K$, and unused Sérsic $n$, number density $n$, fundamental-plane $a,b$ and $R,R_{\mathrm e}$; prune to the note's symbols. **Partly:** Most claims right but R_e is used in the Wolf et al. estimator; removed gas volume V, potential energy V, both n rows, a/b, K and gyroradius rows; reduced the R/R_e row to R_e with a matching description
- [[#N3797|N3797]] Galaxy morphology, surface brightness, and halo models: Physical quantities table lists $\mu$ twice (surface brightness and mean particle mass) and many symbols the note never uses ($h$, $q,\epsilon,e$, $N$, $n$, $r_0$, $a,b$, $M_{\mathrm b}$, $M_{\mathrm d}$, $M_*$); prune to the symbols actually used. **Partly:** Right except r_0 (used as reference radius of the log potential) and Sérsic n (used in text); removed h, q/epsilon/e, N, number density n, mean-particle-mass mu, a/b rows; reduced the mass row to M_tot; re-described r_0 as the reference radius
- [[#N3798|N3798]] Galaxy scaling laws, Sérsic profiles, and luminosity functions: Symbol clashes: $\alpha$ is the Tully–Fisher slope, the baryonic TF exponent and the Schechter slope; $b$ is the semiminor axis, the BTF exponent, the Fourier sine coefficients $b_n$ and the Sérsic $b_n$; $n$ is both Sérsic index and Fourier order; rename (e.g. Fourier $A_n,B_n$, BTF exponent $\beta$). **Fixed:** TF slope renamed alpha_TF; BTF exponent b and alpha renamed beta (same exponent, since M_d is proportional to M_tot); Fourier coefficients and order renamed A_m, B_m, m (incl. A_4); Prugniel-Simien b written as the Sérsic b_n; table updated, a/b row now the semiaxes, unused n, mu, K rows removed
- [[#N3798|N3798]] Galaxy scaling laws, Sérsic profiles, and luminosity functions: In the boxy/disky section $\theta$ is the eccentric-anomaly parameter ($x=a\cos\theta$, $y=b\sin\theta$), not the polar angle, so $R_{\mathrm{iso}}(\theta)$ and $R_{\mathrm{ell}}(\theta)$ are not "along the same direction"; define $\theta$ as the polar angle from the major axis (standard convention) or state the parametric convention consistently. **Fixed:** Stated that theta is the ellipse parameter (eccentric anomaly) and defined R_ell and R_iso along the ray through the ellipse point with parameter theta
- [[#N3798|N3798]] Galaxy scaling laws, Sérsic profiles, and luminosity functions: The MBW/2dF Schechter table gives $\phi_*$ in $h^3\,\mathrm{Mpc^{-3}}$, so the characteristic magnitudes are $M^*-5\log_{10}h$, not $M^*$; add the $-5\log_{10}h$. **Fixed:** Changed the table header to M*-5log10 h and noted this in the M* table row
- [[#N3799|N3799]] General relativity and the expanding-universe metric: Outdated values: $h=0.72\pm0.08$ is the 2001 HST Key Project result (Planck 2018: $h=0.674\pm0.005$; SH0ES ≈0.73, the Hubble tension), and the CMB is released at ≈380,000 yr, not ≈300,000 yr. **Fixed:** Kept the lecture values as quoted and added Planck 2018 h = 0.674 +- 0.005, distance-ladder h about 0.73 (Hubble tension) and CMB release at about 380,000 yr
- [[#N3799|N3799]] General relativity and the expanding-universe metric: Physical quantities table lists $A$ as "comoving curvature radius" and $k$ as "spatial curvature parameter", but here $A,B$ are inhomogeneous metric coefficients (and $B$ multiplies $d\Omega^2$, so the text "radial metric coefficients" is wrong for $B$) and $k$ is the constant in $a=kt^{2/3}$; also $\phi$ (scalar field) clashes with the azimuth, $\eta$ (conformal time) with $\eta_{\mu\nu}$, and $V$, $\ell$, $C_\ell$, $\vec k$, $\mu$, $\delta$, $F,m,a$ are unused; rename $k$ in $a=kt^{2/3}$ and remove the course-grading paragraph. **Partly:** Renamed k in a = k t^(2/3) to C; fixed the text so A is the radial and B the angular coefficient; table now has A,B and C rows; removed unused V, scalar phi, eta, l/C_l, wavevector k, mu, delta rows; kept F, m, a (used in F = ma); did not remove the grading paragraph (course-admin text, not a correctness error; brief forbids deletions)
- [[#N3800|N3800]] Gravitational encounters and collisionless galactic dynamics: Physical quantities table includes many unused symbols from other notes (gas volume $V$, $R_{\mathrm e}$, Sérsic $n$, $\Delta$, $c$, two different $\alpha$, $p$, $C$, isothermal $\sigma$, $\delta$, $a,b$) while $m$, $v$, $\theta$ and $x$ are missing; prune it. **Partly:** Schechter alpha is used (line 12) and kept with a new description; removed Sérsic n, Delta, c, TF alpha, p, C, sigma, delta, a/b rows; replaced gas V with galaxy volume, R/R_e with galaxy radius, r with stellar separation; added M, m, v, x, theta rows
- [[#N3801|N3801]] Interstellar gas and X-ray scaling in elliptical galaxies: Gyroradius normalization: with $v=\sqrt{3kT/m}$, an electron at $T=10^7$ K has $r_{\mathrm g}\approx3.9\times10^{-11}$ pc for $B=1\,\mu$G, so the formula should read $(B/1\,\mu\mathrm G)^{-1}$, or the coefficient should be ≈$2.0\times10^{-11}$ pc for $(B/2\,\mu\mathrm G)^{-1}$. **Fixed:** Recomputed r = m v/(Z e B) with v = sqrt(3kT/m): 3.9e-11 pc at 1 microgauss; changed coefficient to 2.0e-11 pc for the (B/2 microgauss)^-1 normalization
- [[#N3801|N3801]] Interstellar gas and X-ray scaling in elliptical galaxies: Symbol clashes: $r_{\mathrm g}$ is the gyroradius in the plasma section and the gravitational radius in the scaling section (the table lists both), and $\mu$ is listed as surface brightness and mean particle mass; rename the gyroradius $r_{\mathrm L}$ and prune unused table entries (Sérsic $n$, both $\alpha$, $C$, $q,\epsilon,e$, $p$, $a,b$, $K$). **Fixed:** Renamed the gyroradius r_L in the equation and table; removed surface-brightness mu, Sérsic n, both alpha, C, q/epsilon/e, p, N, number density n, a/b, K, scalar I and K,W rows; fixed V, R, M, h (Planck constant here), K_R rows; added m, m_e and charge number Z rows
- [[#N3802|N3802]] Inverse Compton scattering and photon energy exchange: Physical quantities table describes $n$ as the number density of absorbers, but here $n(E)$ is the photon number density per unit energy; it also lists unused $y$ (Compton parameter) and $b$ (Doppler parameter) and omits $x$, $\gamma$, $\beta$, $\theta$, $E_\gamma$, $U_\gamma$ and $L_{\mathrm{IC}}$. **Fixed:** n(E) row now photon number density per unit energy; removed y and b rows; added x, gamma/beta, theta, E_gamma, U_gamma and L_IC rows
- [[#N3803|N3803]] Metric Tensor of the Universe: $1/H\approx14.787\times10^{12}$ yr is wrong by a factor of 1000; for $H=70\,\mathrm{km\,s^{-1}\,Mpc^{-1}}$, $1/H\approx13.97\times10^9$ yr (14.787 Gyr corresponds to $H\approx66$). **Fixed:** For H = 70 km/s/Mpc, 1/H = 13.97 Gyr; changed 14.787 x 10^12 yrs to 13.97 x 10^9 yrs
- [[#N3803|N3803]] Metric Tensor of the Universe: The displayed matrix has spatial entries $a(t)$, but $g_{ij}=a(t)^2\delta_{ij}$ requires $a(t)^2$ on the diagonal. **Fixed:** Changed the three spatial diagonal entries to a(t)^2
- [[#N3803|N3803]] Metric Tensor of the Universe: $a(t)=1+Ht$ is only the first-order Taylor expansion about today (with $t$ measured from now and $H=H_0$), not the expansion law; say so, and call $H_0$ the present Hubble parameter, not a constant. **Fixed:** Called a(t) the scale factor, marked 1 + Ht as the first-order Taylor expansion about today with t measured from now, and called H = H_0 the present Hubble parameter
- [[#N3804|N3804]] Milky Way populations, clusters, and rotation: Physical quantities table gives $\omega$ as both orbital angular speed and argument of periastron, $\alpha$ as right ascension, parallax and scattering angle (here a triangle angle), $b$ as softening constant (here Galactic latitude), $A$ as extinction and Oort constant, $\theta$ as position angle (here cylindrical azimuth), $R$ as stellar radius in km (here Galactocentric radius); $\beta$ is missing. Prune to the note's symbols. **Fixed:** Removed h, Stefan-Boltzmann sigma, b, extinction A, grain n, profile r, both alpha (RA, parallax), angular-resolution theta, lambda, i, periastron omega, magnitude sigma rows; re-described d, r, theta (azimuth), M, R/z, n; added h_R/h_z, alpha/beta triangle angles, v/v_r/v_t rows
- [[#N3804|N3804]] Milky Way populations, clusters, and rotation: Outdated values: star formation rate ≈3 $M_\odot\,\mathrm{yr^{-1}}$ (modern ≈1.6–2, Licquia and Newman 2015), thin-disk scale length ≈4 kpc (modern ≈2.5–3 kpc, Bland-Hawthorn and Gerhard 2016), $R_0=8$–8.3 kpc (GRAVITY 2019: 8.18 kpc); $A\simeq15$, $B\simeq-12$ remain consistent with Bovy (2017). **Fixed:** Kept lecture values and added modern values: SFR about 1.6-2 Msun/yr (Licquia and Newman 2015), scale length about 2.5-3 kpc (Bland-Hawthorn and Gerhard 2016), R_0 about 8.18 kpc (GRAVITY 2019)
- [[#N3805|N3805]] Natural and Doppler broadening and the Voigt profile: Microturbulence is defined by turbulent cells small compared with the photon mean free path (the unit-optical-depth length), not the collisional mean free path. **Fixed:** Changed collisional mean free path to photon mean free path (length for unit optical depth)
- [[#N3805|N3805]] Natural and Doppler broadening and the Voigt profile: ICM example: for an oxygen line at 0.65 keV (O VIII Lyα, $A\approx2.6\times10^{12}\,\mathrm{s^{-1}}$) the natural width is $\Delta\nu/\nu\sim10^{-5}$ or less, so a Doppler width $\sim10^{-3}$ is ~$10^2$ times the natural width, not "about ten times"; recompute. **Fixed:** Checked: b/c about 1e-3 for O at 8 keV, natural width about 1e-5 or less for O VIII Ly-alpha (A about 2.6e12 s^-1); replaced about ten times with about 10^2 times or more and gave the values
- [[#N3805|N3805]] Natural and Doppler broadening and the Voigt profile: Symbol clashes: $A$ is both the Einstein coefficient and the atomic weight; the table lists $\alpha$ as fine-structure constant (here $\alpha_\nu$ is the absorption coefficient), $y$ as Compton parameter (here an integration variable) and $T$ as brightness temperature (here kinetic temperature). **Fixed:** Renamed atomic weight A_r in the equation, text and Fe example; table: alpha row now absorption coefficient alpha_nu, removed y, T is kinetic temperature, added A (Einstein coefficient) and A_r rows
- [[#N3806|N3806]] Perturbed metrics and the cosmological Boltzmann equation: The electromagnetic gauge analogy should be $A_\mu\to A_\mu+\partial_\mu\chi$; a constant shift $A_\mu\to A_\mu+C_\mu$ is a trivial special case and misrepresents gauge freedom. **Fixed:** Replaced the constant-shift analogy with A_mu -> A_mu + partial_mu chi and noted a constant shift is a trivial special case
- [[#N3806|N3806]] Perturbed metrics and the cosmological Boltzmann equation: Fig. 22 caption: the first acoustic peak at $\ell\approx220$ corresponds to about 1° ($\theta\approx180^\circ/\ell\approx0.8^\circ$), not half a degree, and diffusion damping sets in from $\ell\gtrsim1000$. **Partly:** The sketch itself labels 0.5 degrees, so the caption describes it correctly; added that theta about 180 deg/l gives about one degree at the first peak and that diffusion damping sets in from l above 1000
- [[#N3806|N3806]] Perturbed metrics and the cosmological Boltzmann equation: Physical quantities table lists $\phi$ as a scalar field, clashing with the azimuth in the line element, plus unused $F,m,a$, $A$, $\sigma$, $\eta$, radial speed $v$, $\gamma$, $\delta$ and $h$; prune. **Partly:** Right for scalar phi, A, sigma, eta, gamma, delta, F, a; but m (mass shell), v (coordinate speed) and h_mu_nu are used; removed unused rows, replaced F/m/a with m, h with h_mu_nu, re-described v, T and n
- [[#N3807|N3807]] Post-main-sequence evolution, mass loss, and shell burning: The helium flash occurs for stars up to ≈2 $M_\odot$ (1.8–2.2 depending on composition), not 1.5 $M_\odot$ as in the text and the ignition table. **Fixed:** Kept the notes' table and added that current models place the helium-flash upper mass limit near 2 Msun (about 1.8-2.2)
- [[#N3807|N3807]] Post-main-sequence evolution, mass loss, and shell burning: Mass loss: the modified wind momentum $\dot M v_\infty R^{1/2}$ scales as $L^{1/\alpha_{\mathrm{eff}}}$ with exponent ≈1.5–2 (Kudritzki and Puls 2000), not linearly in $L$. **Fixed:** Changed both proportionalities to L^(1/alpha_eff), defined alpha_eff and gave exponent about 1.5-2 (Kudritzki and Puls 2000), noting the notes write a linear law
- [[#N3807|N3807]] Post-main-sequence evolution, mass loss, and shell burning: $t_{\mathrm{MS}}=M/\dot M=4\times10^6$ yr is a mass-loss timescale, not a main-sequence lifetime, so rename it (e.g. $\tau_{\dot M}$); the adjacent $t_{\mathrm{nuc}}\simeq2\times10^5$ yr for an $80M_\odot$ star is unexplained (its main-sequence lifetime is ≈3–4 Myr). **Fixed:** Renamed t_MS to tau_Mdot, wrote the displayed fraction as M/Mdot (handwritten inversion already flagged), noted the 80 Msun main-sequence lifetime of about 3-4 Myr and that t_nuc is unexplained in the notes; did not change the t_nuc value
- [[#N3807|N3807]] Post-main-sequence evolution, mass loss, and shell burning: Physical quantities table lists $\mu$ five times, $n$ three times, $Z$ as metallicity and proton number, two $\tau$, $a$, $K$, $s$ and others from other notes, including a link to a different note; reduce it to the symbols this note uses. **Fixed:** Removed 27 rows from other notes (duplicate M, m, t, a, c, v, tau, f, Z proton number, N neutron number, mu variants, n variants, s, p, K, link row and three dash rows); fixed V, M, R, mu descriptions; added tau_Mdot, alpha_eff and t_nuc rows
- [[#N3808|N3808]] Radiative absorption, recombination, and Thomson scattering: Symbol clashes: $n$ is both number density and principal quantum number, and $\alpha$ is both the absorption coefficient and the fine-structure constant; also the dimensionless optical depth $\tau_\nu$ and $\alpha_\nu$ are colored with \energy{}, which misuses the semantic macro. **Partly:** Macro misuse confirmed: tau_nu now uncolored (dimensionless) and alpha_nu uses signal macro as in the other radiative-transfer notes; the n and alpha clashes are visually distinct (colored vs plain, subscripted) so no rename; added separate table rows for principal quantum number n and atomic number Z and a note distinguishing alpha_nu from the fine-structure constant
- [[#N3809|N3809]] Specific intensity and the radiative-transfer equation: Scattering term: the integral over incoming directions $\int\alpha^{\mathrm{scat}}(\Omega,\Omega')I_\nu(\Omega')\,d\Omega'/4\pi$ is the scattering-in gain and enters with a plus sign; the loss is $-\alpha^{\mathrm{scat}}_\nu I_\nu(\Omega)$, so isotropic scattering gives $dI_\nu/ds=-\alpha^{\mathrm{scat}}_\nu(I_\nu-J_\nu)$, not $-\alpha^{\mathrm{scat}}_\nu J_\nu$. **Fixed:** Rewrote the scattering term as -alpha_scat I(Omega) + integral (gain) and the isotropic result as -alpha_scat (I_nu - J_nu); updated the lead-in sentence.
- [[#N3809|N3809]] Specific intensity and the radiative-transfer equation: Physical quantities table lists the fine-structure constant $\alpha$, which the note never uses, and omits $D$, $d$, $\theta_c$, $\Omega_{\mathrm{obs}}$ and $N$. **Fixed:** Removed the alpha row; added rows for alpha_scat, nu, R, D, d, A, s, V, theta_c, Omega_obs and N.
- [[#N3810|N3810]] Spectral lines and Einstein transition coefficients: The Physical quantities table lists symbols the note never uses ($\alpha$ fine-structure constant, $\energy{S}$ incident flux, $\energy{I}$ frequency-integrated intensity, $\energy{U}$ radiation energy density, while the note uses $\energy{U}_{B,\mathrm{tot}}$ in erg). It also calls $\thermal{T}$ "brightness temperature", but here it is the excitation temperature of the Boltzmann populations, and calls $\energy{E}$ "radiant energy", but here it is the level energies $E_u,E_\ell$. Replace these with $\magnetic{B}$, $\mechanical{R}$, $N_u$, $N_\ell$, $g_u$, $g_\ell$ and $\nu_{u\ell}$. **Fixed:** Removed alpha, S, I and U rows; added U_B,tot (erg), B, R, nu_ul, N_u/N_l, g_u/g_l, n_u/n_l; T is now excitation temperature and E the level/radiated energy.
- [[#N3810|N3810]] Spectral lines and Einstein transition coefficients: In "Line emission and photoabsorption coefficients", $n_u$ is "the number of electrons in the upper state per unit volume". It should be the number of atoms or ions in the upper level per unit volume. The subscript also switches between $\nu_{u\ell}$ (Spontaneous emission) and $\nu_{\ell u}$ (later sections); use one form throughout. **Fixed:** n_u is now the number of atoms or ions in the upper level per unit volume; replaced every nu_{l u} with nu_{u l} (equations and Fig. 82 caption).
- [[#N3811|N3811]] Star formation and main-sequence lifetimes: In "Young stellar objects", classes 1 and 2 are called "stars with nuclear burning". Class I/II YSOs (protostars, classical T Tauri stars) are pre-main-sequence objects powered by accretion and contraction, plus some deuterium burning. Hydrogen fusion starts only at the ZAMS. **Fixed:** Added that class I/II objects are pre-main-sequence, powered by accretion and contraction with some deuterium burning, and hydrogen fusion starts at the ZAMS.
- [[#N3811|N3811]] Star formation and main-sequence lifetimes: In "Zero-age main sequence", the upper main sequence (O stars) is labelled $10^3$ yr. O-star main-sequence lifetimes are a few Myr ($\sim3$–$10\times10^6$ yr); state the correct value next to the transcription. **Fixed:** Added the correct O-star main-sequence lifetime (3e6 to 1e7 yr) next to the transcription.
- [[#N3811|N3811]] Star formation and main-sequence lifetimes: Point 2 of "Life on the main sequence" is reversed. Stars below about 1.3–1.5 $M_\odot$ have cool envelopes with high H⁻/neutral-H opacity and therefore convective envelopes; more massive stars have radiative envelopes. Also, $Y_{\mathrm{primordial}}=0.23$ is outdated (BBN and Planck give $Y_p\approx0.245$), and the relation should read $Y_{\mathrm{primordial}}<Y_{\mathrm{init}}$. **Fixed:** Point 2 now says stars below about 1.3-1.5 Msun have cool, high-opacity convective envelopes and massive stars radiative ones; text gives Y_primordial about 0.245 and Y_primordial < Y_init, callout keeps the handwritten values.
- [[#N3811|N3811]] Star formation and main-sequence lifetimes: The Physical quantities table lists many symbols the note does not use ($D$, $a$, $K$, polytropic $n$, impact parameter $s$, nuclear radius, total lifetime $\tau$, $V$). It also repeats $\mechanical{M}$, $\tau$, $Z$ and $n$ with conflicting meanings. Rebuild it from the symbols actually used. **Fixed:** Rebuilt the table from symbols used in the note (removed D, a, K, polytropic n, impact parameter, nuclear R, total lifetime tau, V, duplicate M/Z/n; added nu exponent).
- [[#N3812|N3812]] Stellar evolution and variable-star observations: "After the red giant branch" says that about half the core helium burns quickly in the helium flash. Only a few percent burns in the flash; the rest burns quiescently on the horizontal branch over about $10^8$ yr. **Fixed:** Added that only a few percent burns in the flash and the rest burns quiescently on the horizontal branch over about 1e8 yr.
- [[#N3812|N3812]] Stellar evolution and variable-star observations: In "Supernova classification", the Type I/II split is due to Minkowski (1941), not Zwicky. Zwicky later added Types III–V. **Fixed:** Added that Minkowski introduced the Type I/II split in 1941 and Zwicky later added Types III-V.
- [[#N3812|N3812]] Stellar evolution and variable-star observations: The Physical quantities table lists extinction $A$, grain density $n$, declination $\delta$, transit probability $P$, eccentricity $e$, airmass $X$, the Oort constants and the metal yield, none of which appear in the note. Replace them with the symbols the note uses ($\thermal{T}$, $M_V$, pulsation period). **Fixed:** Rebuilt the table with the used quantities (M, Msun, L, T, M_V, energy, lifetimes, density, radius, periods).
- [[#N3813|N3813]] Stellar hydrostatic equilibrium and the virial theorem: The displayed solar radius $R_\odot=6.96\times10^7$ km is wrong by a factor of 100; it should be $6.96\times10^5$ km $=6.96\times10^{10}$ cm. Fix the equation instead of only noting the error. The callout also links to "Internal energy", but the $GM^2/R$ scale it refers to is in "Equilibrium of the whole star". **Fixed:** Equation now gives 6.96e5 km = 6.96e10 cm (consistent with g = 2.74e4 cm/s^2); callout now links to "Equilibrium of the whole star".
- [[#N3813|N3813]] Stellar hydrostatic equilibrium and the virial theorem: The $(\delta U)_{\mathrm{ad}}$ equation after "Integration by parts" still has a minus sign. The correct result is $(\delta U)_{\mathrm{ad}}=+\int(dP/dM_r)\,4\pi r^2\delta r\,dM_r$, as the callout admits; correct the displayed equation. **Fixed:** Displayed equation now has +; callout updated to explain the sign.
- [[#N3813|N3813]] Stellar hydrostatic equilibrium and the virial theorem: In "Applications of the virial theorem", the displayed $K=\tfrac23(\gamma-1)U$ is wrong. From $2K=3\int P/\rho\,dM_r=3(\gamma-1)U$ it follows that $K=\tfrac32(\gamma-1)U$; write the correct form instead of keeping the wrong one with a callout. **Fixed:** Displayed K = 3/2 (gamma-1) U with its derivation from 2K = 3(gamma-1)U; callout records the source coefficient.
- [[#N3813|N3813]] Stellar hydrostatic equilibrium and the virial theorem: Symbol clashes: $\energy{W}$ means both work ($W=Fd$) and total energy, and $\mathrm{d}M_r$ means both the shell mass and the patch mass. The table defines $\energy{E}$ three ways, lists many unused symbols ($a$, $V$, C/O, $K$, impact parameter, polytropic $n$), and gives SI units for $G$ and $M_r$ in a CGS note. **Fixed:** Renamed work to W_F and patch mass to dm; rebuilt table (single E meaning, removed unused a, V, C/O, K, s, polytropic n, nuclear R etc., CGS units for G, M_r, Msun, Lsun, Rsun).
- [[#N3814|N3814]] Stellar luminosity functions, star counts, and selection bias: The Physical quantities table uses $\sigma$ for both the Stefan–Boltzmann constant and the magnitude dispersion, and $A$ for extinction and an Oort constant while the note uses $A(m)$ for star counts. It lists $\alpha$ three times, gives $\mechanical{d}$ in cm although the note uses pc, and includes unused entries (grain density, optical depth, right ascension, parallax, scattering angle, count rate). Rebuild it. **Fixed:** Rebuilt the table: single sigma (magnitude dispersion), A only as A(m), alpha only as Kroupa slope, d in pc, removed grain density, optical depth, RA, parallax, scattering angle, count rate, Oort constants; added M, nu(x), V, N_Omega, N_tot, M_tot etc.
- [[#N3815|N3815]] Stellar pressure balance and degenerate matter: The table lists unrelated entries (amount $n$ in mol, Landé $g$, internal degeneracy $g$, molecular mass $M$, $P_{\mathrm{int}}$ and $P_{\mathrm{ext}}$, Boltzmann-weight $E$) and omits $m_N$, $m_e$, $N_e$ and $E_{\mathrm{tot}}$. $\mechanical{V}$ (volume) and $\energy{V}_g$ (gravitational energy) also clash; rename $V_g$ to $E_{\mathrm{grav}}$, which later sections already use. **Fixed:** Renamed V_g to E_grav in all equations; rebuilt table without n (mol), Lande g, internal g, molecular M, P_int/P_ext, Boltzmann E; added m_N, m_e, N_e, E_tot, E_Fermi, rho, r, dm, R_eq, epsilon.
- [[#N3816|N3816]] Stellar remnants and neutron-capture nucleosynthesis: The second heading, "Late stages below the 6–10 solar mass range", covers carbon, neon, oxygen and silicon burning and iron-core collapse, which happen only in stars above about 8–10 $M_\odot$. Rename it "Late stages above the 6–10 solar mass range". **Fixed:** Renamed heading to "Late stages above the 6-10 solar mass range" (no incoming links found).
- [[#N3816|N3816]] Stellar remnants and neutron-capture nucleosynthesis: The step $^{56}$Ni → $^{56}$Fe is labelled "double beta decay". It is two successive electron-capture/β⁺ decays: $^{56}$Ni → $^{56}$Co ($t_{1/2}=6.1$ d), then $^{56}$Co → $^{56}$Fe (77 d). These decays power supernova light curves. **Fixed:** Added that it is two successive EC/beta+ decays, Ni-56 to Co-56 (6.1 d) then Co-56 to Fe-56 (77 d), which power supernova light curves.
- [[#N3816|N3816]] Stellar remnants and neutron-capture nucleosynthesis: Forbidden lines in planetary nebulae are excited by collisions with free electrons, not "collisions between atoms". In the abundance table, "17 C" and "18 C" are almost certainly $^{17}$O and $^{18}$O, which the CNO cycle produces alongside $^{13}$C, $^{14}$N and $^{19}$F. **Fixed:** Added electron-collision excitation; table row and following sentence now identify O-17 and O-18 (and F-19).
- [[#N3816|N3816]] Stellar remnants and neutron-capture nucleosynthesis: The quantities table is mostly copied from other notes (force-sketch $M$, virial $t$, $D$, $a$, $c$, $K$, polytropic $n$, impact parameter, nuclear radius, reduced mass). Keep only the symbols used here: $\tau_{\mathrm{dyn}}$, $\rho_c$, $T_c$, $X_i$, $\Phi$, $Z$, $N$, $\delta m_{np}$, $S_\gamma$. Also give $\tau_{\mathrm{dyn}}$ a number: $1/\sqrt{G\rho}\approx0.04$–0.1 s for $\rho\sim10^9$–$10^{10}$ g cm⁻³. **Fixed:** Rebuilt the table from used symbols; added tau_dyn about 0.04-0.1 s for rho 1e9-1e10 g/cm^3 (checked numerically).
- [[#N3817|N3817]] Stellar spectroscopy and exoplanet detection: "Stellar spectra" puts the Balmer jump near 3800 Å and blames neutral hydrogen in cooler stars. The jump is at the Balmer limit, 3646 Å, and comes from bound–free absorption out of the $n=2$ level of hydrogen. It is strongest in A stars (about $10^4$ K), not in cooler stars; the roughly 4000 Å break of cool stars is a different feature, caused by metal lines and Ca H&K. **Fixed:** Added the correct position, cause and A-star maximum, and that the 4000 A break of cool stars is a separate metal-line and Ca II H and K feature.
- [[#N3817|N3817]] Stellar spectroscopy and exoplanet detection: Symbol clashes: $X$ is both the hydrogen mass fraction and the airmass, and $P$ is both the transit probability and the period (Fig. 47). In the table, $\mechanical{D}$ is both the aperture and a "distance in pc", $\lambda$ is both wavelength and a convergent-point angle, and $\sigma$ is both the Stefan–Boltzmann constant and a noise term. The table also lists unused symbols ($b$ softening, zenith angle $Z$, RA and Dec, proper motion, Oort $A$, scattering angle, crossing time, metal yield) and calls $\mechanical{a}$ a "binary separation" instead of the planet's semimajor axis. **Fixed:** Renamed airmass to X_air and transit probability to P_tr; rebuilt table (a is planet semimajor axis, P is period, removed b, zenith Z, RA, Dec, proper motion, Oort A, scattering angle, crossing time, metal yield).
- [[#N3818|N3818]] Stellar structure equations, homology, and energy transport: "Sound waves": from $\Pi=(12R^3/(\Gamma_1GM))^{1/2}$ and $R^3/GM=3/(4\pi G\bar\rho)$ one gets $\Pi=(9/(\pi\Gamma_1G\bar\rho))^{1/2}\approx1.69/\sqrt{\Gamma_1G\bar\rho}$, not $\sqrt{12}/\sqrt{G\bar\rho}$. For the Sun this is about 0.064 d; the quoted 0.04 d corresponds to a coefficient of 1. **Fixed:** Replaced the display with (9/(pi Gamma_1 G rho))^(1/2) = 1.69/sqrt(...) = 0.064 d (checked numerically); callout records the source sqrt(12) and 0.04 d.
- [[#N3818|N3818]] Stellar structure equations, homology, and energy transport: $\sigma_8^2=\int P(k)W^2\,dk$ is dimensionally wrong; it should be $\sigma_8^2=\frac{1}{2\pi^2}\int P(k)W^2(kR)\,k^2\,dk$ with $R=8\,h^{-1}$ Mpc. Also, the "Diffusion equation" display under "Homologous stars" still uses $d/dr$. With the $(4\pi r^2)^2$ factor and no $\rho$, the derivative must be $d/dM_r$; fix the equation, not just the callout. **Fixed:** sigma_8^2 now = 1/(2 pi^2) integral P W^2(k R_8) k^2 dk with R_8 = 8/h Mpc plus a sentence on the source omission; diffusion display now uses d/dM_r and callout updated.
- [[#N3818|N3818]] Stellar structure equations, homology, and energy transport: Table clashes: $\energy{W}$ is listed as both work and total energy; $\energy{E}$ as specific energy, as energy density (its meaning here) and as electron energy; $\energy{\epsilon}$ also as collision energy; and $\mu$ with four meanings. The table also carries many unused entries (nuclear radius, impact parameter, $h$, polytropic $K$ and $n$, neutrino emission time); prune it. **Fixed:** Rebuilt the table from symbols used (single W, E, epsilon and mu meanings; removed nuclear radius, impact parameter, polytropic K and n, neutrino emission time etc.; CGS units).
- [[#N3819|N3819]] Synchrotron populations, self-absorption, and equipartition: Symbol clash: $C$ is the normalization in $n(E)=CE^{-p}$ and also the band constant in $U_e=CL_{\mathrm{sync}}^{\mathrm{tot}}B^{-3/2}$; rename the second one, e.g. $C_{12}$. The table lists $\alpha$ fine-structure constant, $\energy{S}$ incident flux, $\energy{U}$ radiation energy density and brightness $T$, defines $\energy{E}$ as radiant energy (here it is electron energy), and omits $p$, $k$, $V$, $\epsilon(\omega)$, $n(E)$ and the pitch angle $\alpha$. **Fixed:** Renamed the band constant to C_12 in all equations and text; rebuilt the table (removed fine-structure alpha, S, U, brightness T; E is electron energy; added p, k, V, epsilon(omega), n(E), pitch angle alpha and others).
- [[#N3819|N3819]] Synchrotron populations, self-absorption, and equipartition: In the cluster-field table, a Coma "Faraday rotation" value of about 0.2 μG matches the inverse-Compton (hard X-ray) estimate. Faraday rotation gives several μG, about 5 μG in the centre (Bonafede et al. 2010). Relabel the column or the values, and check "A366" against the source, as it looks like a misread cluster name. **Partly:** Coma part confirmed: added a callout that 0.2 uG matches the IC estimate and Faraday rotation gives about 5 uG (Bonafede et al. 2010); table values kept; A366 not verified without the source.
- [[#N3820|N3820]] The collisionless Boltzmann equation and Jeans moments: The Physical quantities table conflicts with the note. It uses $\mu$ for both surface brightness and mean particle mass, $n$ for both Sérsic index and number density, and $\beta$ for both the velocity anisotropy and an "isothermal beta-model exponent". It describes $\rho_0$ as a deprojection normalization and lists unused $V$, $q$, $\epsilon$, $e$, $p$, $\delta$, $a$ and $b$. Prune it. **Fixed:** Removed the surface-brightness mu, Sérsic n, duplicate stellar n, beta-model beta, gas volume V, q/epsilon/e, p, delta and a/b rows; rho_0 is now the central density of the isothermal sphere; T description corrected; added m, M, Phi_0 and E rows that the note uses
- [[#N3821|N3821]] The fundamental plane of elliptical galaxies: The $D_n$–σ normalization is missing a factor: Schneider eq. 3.35 reads $D_n/(h^{-1}\,\mathrm{kpc})=2.05\,(\sigma_0/100\,\mathrm{km\,s^{-1}})^{1.33}$. Restore the $h^{-1}$. **Unsure:** A kpc diameter normalization depends on the Hubble constant, but I cannot confirm whether Schneider writes h^-1 or h_75^-1 kpc, so I did not edit
- [[#N3821|N3821]] The fundamental plane of elliptical galaxies: With $1/\gamma\approx0.83$ and $b$ between $-0.85$ and $-0.75$, the residual exponent $b+1/\gamma$ lies between $-0.02$ and $+0.08$, not between $\pm0.05$. In the table, $r_g$ is listed both as gravitational radius and as gyroradius, and $V$, $n$, $q$/$\epsilon$/$e$ and $p$ are unused. **Partly:** Range confirmed: changed 1/gamma to about 0.83 and the range to -0.02 to +0.08; removed the gyroradius r_g, gas volume V, number density n and p rows; epsilon and Sérsic n are used, so the q/epsilon/e row became an epsilon-only row and Sérsic n stays
- [[#N3822|N3822]] Thermal bremsstrahlung and cluster hydrostatic equilibrium: In "Free–free cooling function and Gaunt factor", matching the impulse-approximation result to R&L eq. 5.14a leaves a factor of $\sqrt3/4\approx0.43$, not $3\pi/(2\sqrt3)\approx2.72$. Check: $32\pi^3(2\pi)^{-3/2}m_e^{-3/2}\big/\left[32\pi m_e^{-1}(2\pi/(3m_e))^{1/2}\right]=\sqrt3/4$. Correct the bracketed factor. **Fixed:** Re-derived the ratio as sqrt(3)/4 and replaced the bracketed factor
- [[#N3822|N3822]] Thermal bremsstrahlung and cluster hydrostatic equilibrium: The Physical quantities table lists $b$ as the Doppler parameter, but the note uses $b$ as the impact parameter. The Compton $y$, $\energy{U}$ radiation energy density and "brightness" $T$ are unused or wrong here. Add $n_e$, $n_i$, $Z$, $v_0$, $\ell_e$, $r_g$, $t_{\mathrm{eq}}$, $P$, $\rho$, $\Phi$, $\mu$, $m_a$ and $\bar g_{\mathrm{ff}}$. **Fixed:** Removed the Doppler b, Compton y, U and generic n rows; T is now the plasma temperature; added impact parameter b, v_0/v, m_e, nu, n_e/n_i, Z, g_ff, l_e, B, r_g, t_eq, P, rho, Phi, mu and m_a
- [[#N3823|N3823]] Thermal source functions and optically thick spectra: The table lists $\alpha$ fine-structure constant, $\energy{S}$ incident flux and $\energy{I}$, which are unused, and calls $\thermal{T}$ brightness temperature, though here it is the wall or plasma temperature. It omits $L$ (path length), $Z$, $n_e$, $n_i$, $\bar g_{\mathrm{ff}}$, $\delta Q$ and the entropy $\thermal{S}$, which also visually clashes with the source function $\energy{S}_\nu$; rename the entropy (e.g. $S_{\mathrm{ent}}$). **Partly:** Removed the alpha, incident-flux S and integrated I rows; T is now the wall, material or plasma temperature; added s/L, n_e/n_i, Z, g_ff, delta Q and the entropy rows; did not rename the entropy because the thermal and energy macros already tell it apart from S_nu, and the new entropy row says so
- [[#N3824|N3824]] Thermonuclear rates and hydrogen-burning chains: In "CNO cycles", the fourth reaction must be $^{14}$N + p → $^{15}$O + γ. The cycle then needs $^{15}$O → $^{15}$N + e⁺ + ν and $^{15}$N + p → $^{12}$C + α to close; write out the full chain. **Fixed:** Corrected the product to 15O, added 15O -> 15N + e+ + nu and 15N + p -> 12C + 4He, and updated the sentence about the handwriting
- [[#N3824|N3824]] Thermonuclear rates and hydrogen-burning chains: Nonresonant rate prefactor: $(8/\pi m)^{1/2}(kT)^{-3/2}$, with $S$ in MeV b and energies in MeV, gives $1.6\times10^{-15}\,\mathrm{cm^3\,s^{-1}}\,S/[\mu^{1/2}(kT)^{3/2}]$. The power is $\mu^{1/2}$, not $\mu$, and $S$ (taken as constant) must multiply the integral. **Fixed:** Checked numerically (1.57e-15 cm^3/s); changed mu to mu^{1/2}, added S, and replaced the no-convention sentence with the unit conventions and a note on the handwritten form
- [[#N3824|N3824]] Thermonuclear rates and hydrogen-burning chains: $r_{\alpha\beta}=n_\alpha n_\beta\langle\sigma v\rangle_{\alpha\beta}$ should use the target density $n_X$, as in the line before it, because $\beta$ labels the outgoing particle. **Fixed:** Changed n_beta to n_X and removed n_beta from the table
- [[#N3824|N3824]] Thermonuclear rates and hydrogen-burning chains: Symbol clashes: $\energy{\epsilon}$ is the energy-generation rate at the top and the collision energy later; $\Gamma$ denotes both the adiabatic exponents and the resonance widths; $\mu$ is both mean molar mass and reduced mass in amu; $P_i$ sits next to pressure $P$. Rename, for example collision energy $E$. The table also carries many unused entries ($a$, $c$, streaming $v$, neutron-drip $Z$/$N$, polytropic $K$/$n$). **Partly:** Renamed collision energy epsilon to E everywhere in the reaction-rate sections (E_r, E^*) and renamed the specific internal energy to u to avoid a new clash; rebuilt the table with only the quantities that the note uses (mu is now only the reduced mass in amu); kept thermal Gamma_1..3 against energy Gamma and P_i against P because the macros and subscripts tell them apart
- [[#N3825|N3825]] Variable stars and stellar pulsation: The table gives Mira periods as 100–300 days. Mira variables span about 80–1000 d, and Mira itself has $P\approx332$ d, so the opening "one to two years" for Mira is also too long. **Fixed:** The Mira bullet now gives a period of about 332 days; the table row keeps the notes' 100-300 d and adds the 80-1000 d range
- [[#N3825|N3825]] Variable stars and stellar pulsation: β Cephei stars pulsate mainly in low-order p (and mixed) modes driven by the iron-opacity κ mechanism; only γ Doradus stars are g-mode pulsators. ZZ Ceti stars are specifically hydrogen-atmosphere (DAV) white dwarfs; helium- and C/O-atmosphere pulsators are the DBV (V777 Her) and GW Vir classes. **Fixed:** Added to the table that only gamma Dor stars are high-order g-mode pulsators and that beta Cep stars are driven by the iron-bump kappa mechanism; ZZ Ceti row now says DAV and names DBV (V777 Her) and GW Vir for the helium and C/O atmospheres

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N3779 | [[Advanced stellar burning, polytropes, and compact stars\|Advanced stellar burning, polytropes, and compact stars]] | Analyzed | high | yes | no | [[#N3779\|View]] |
| N3780 | [[Astronomical fluxes, magnitudes, and extinction\|Astronomical fluxes, magnitudes, and extinction]] | Analyzed | medium | yes | no | [[#N3780\|View]] |
| N3781 | [[Atomic oscillators and line absorption cross sections\|Atomic oscillators and line absorption cross sections]] | Analyzed | medium | yes | yes | [[#N3781\|View]] |
| N3782 | [[Baryon–photon coupling and growth of matter perturbations\|Baryon–photon coupling and growth of matter perturbations]] | Analyzed | medium | yes | yes | [[#N3782\|View]] |
| N3783 | [[Celestial coordinates, astrometry, and stellar binaries\|Celestial coordinates, astrometry, and stellar binaries]] | Analyzed | medium | yes | yes | [[#N3783\|View]] |
| N3784 | [[Comptonization and the Sunyaev–Zeldovich effect\|Comptonization and the Sunyaev–Zeldovich effect]] | Analyzed | medium | yes | no | [[#N3784\|View]] |
| N3785 | [[Cosmic Background Microwave Radiation\|Cosmic Background Microwave Radiation]] | Analyzed | high | yes | no | [[#N3785\|View]] |
| N3786 | [[Cosmic energy components and thermal equilibrium\|Cosmic energy components and thermal equilibrium]] | Analyzed | medium | yes | no | [[#N3786\|View]] |
| N3787 | [[Cosmological geodesics and photon redshift\|Cosmological geodesics and photon redshift]] | Analyzed | medium | no | yes | [[#N3787\|View]] |
| N3788 | [[Cosmological horizons, photon multipoles, and density spectra\|Cosmological horizons, photon multipoles, and density spectra]] | Analyzed | medium | yes | yes | [[#N3788\|View]] |
| N3789 | [[Curvature, stress-energy conservation, and Friedmann equations\|Curvature, stress-energy conservation, and Friedmann equations]] | Analyzed | medium | yes | yes | [[#N3789\|View]] |
| N3790 | [[Cyclotron and single-particle synchrotron emission\|Cyclotron and single-particle synchrotron emission]] | Analyzed | medium | yes | yes | [[#N3790\|View]] |
| N3791 | [[Electromagnetic units and Compton scattering\|Electromagnetic units and Compton scattering]] | Analyzed | low | yes | no | [[#N3791\|View]] |
| N3792 | [[Epicyclic orbits, asymmetric drift, and Galactic phase space\|Epicyclic orbits, asymmetric drift, and Galactic phase space]] | Analyzed | medium | yes | yes | [[#N3792\|View]] |
| N3793 | [[Expansion histories and primordial element abundances\|Expansion histories and primordial element abundances]] | Analyzed | medium | yes | no | [[#N3793\|View]] |
| N3794 | [[Galactic chemical evolution and the closed-box model\|Galactic chemical evolution and the closed-box model]] | Analyzed | medium | yes | no | [[#N3794\|View]] |
| N3795 | [[Galactic potential models, virial balance, and relaxation\|Galactic potential models, virial balance, and relaxation]] | Analyzed | medium | yes | yes | [[#N3795\|View]] |
| N3796 | [[Galactic virial balance, rotational support, and anisotropy\|Galactic virial balance, rotational support, and anisotropy]] | Analyzed | medium | yes | no | [[#N3796\|View]] |
| N3797 | [[Galaxy morphology, surface brightness, and halo models\|Galaxy morphology, surface brightness, and halo models]] | Analyzed | medium | yes | no | [[#N3797\|View]] |
| N3798 | [[Galaxy scaling laws, Sérsic profiles, and luminosity functions\|Galaxy scaling laws, Sérsic profiles, and luminosity functions]] | Analyzed | medium | yes | no | [[#N3798\|View]] |
| N3799 | [[General relativity and the expanding-universe metric\|General relativity and the expanding-universe metric]] | Analyzed | medium | yes | yes | [[#N3799\|View]] |
| N3800 | [[Gravitational encounters and collisionless galactic dynamics\|Gravitational encounters and collisionless galactic dynamics]] | Analyzed | low | yes | yes | [[#N3800\|View]] |
| N3801 | [[Interstellar gas and X-ray scaling in elliptical galaxies\|Interstellar gas and X-ray scaling in elliptical galaxies]] | Analyzed | medium | yes | no | [[#N3801\|View]] |
| N3802 | [[Inverse Compton scattering and photon energy exchange\|Inverse Compton scattering and photon energy exchange]] | Analyzed | medium | yes | yes | [[#N3802\|View]] |
| N3803 | [[Metric Tensor of the Universe\|Metric Tensor of the Universe]] | Analyzed | high | no | no | [[#N3803\|View]] |
| N3804 | [[Milky Way populations, clusters, and rotation\|Milky Way populations, clusters, and rotation]] | Analyzed | medium | yes | yes | [[#N3804\|View]] |
| N3805 | [[Natural and Doppler broadening and the Voigt profile\|Natural and Doppler broadening and the Voigt profile]] | Analyzed | medium | yes | yes | [[#N3805\|View]] |
| N3806 | [[Perturbed metrics and the cosmological Boltzmann equation\|Perturbed metrics and the cosmological Boltzmann equation]] | Analyzed | medium | no | no | [[#N3806\|View]] |
| N3807 | [[Post-main-sequence evolution, mass loss, and shell burning\|Post-main-sequence evolution, mass loss, and shell burning]] | Analyzed | high | no | yes | [[#N3807\|View]] |
| N3808 | [[Radiative absorption, recombination, and Thomson scattering\|Radiative absorption, recombination, and Thomson scattering]] | Analyzed | medium | yes | yes | [[#N3808\|View]] |
| N3809 | [[Specific intensity and the radiative-transfer equation\|Specific intensity and the radiative-transfer equation]] | Analyzed | low | yes | yes | [[#N3809\|View]] |
| N3810 | [[Spectral lines and Einstein transition coefficients\|Spectral lines and Einstein transition coefficients]] | Analyzed | medium | yes | no | [[#N3810\|View]] |
| N3811 | [[Star formation and main-sequence lifetimes\|Star formation and main-sequence lifetimes]] | Analyzed | high | yes | no | [[#N3811\|View]] |
| N3812 | [[Stellar evolution and variable-star observations\|Stellar evolution and variable-star observations]] | Analyzed | medium | yes | yes | [[#N3812\|View]] |
| N3813 | [[Stellar hydrostatic equilibrium and the virial theorem\|Stellar hydrostatic equilibrium and the virial theorem]] | Analyzed | medium | yes | no | [[#N3813\|View]] |
| N3814 | [[Stellar luminosity functions, star counts, and selection bias\|Stellar luminosity functions, star counts, and selection bias]] | Analyzed | medium | yes | no | [[#N3814\|View]] |
| N3815 | [[Stellar pressure balance and degenerate matter\|Stellar pressure balance and degenerate matter]] | Analyzed | medium | yes | no | [[#N3815\|View]] |
| N3816 | [[Stellar remnants and neutron-capture nucleosynthesis\|Stellar remnants and neutron-capture nucleosynthesis]] | Analyzed | high | yes | yes | [[#N3816\|View]] |
| N3817 | [[Stellar spectroscopy and exoplanet detection\|Stellar spectroscopy and exoplanet detection]] | Analyzed | medium | yes | yes | [[#N3817\|View]] |
| N3818 | [[Stellar structure equations, homology, and energy transport\|Stellar structure equations, homology, and energy transport]] | Analyzed | high | yes | no | [[#N3818\|View]] |
| N3819 | [[Synchrotron populations, self-absorption, and equipartition\|Synchrotron populations, self-absorption, and equipartition]] | Analyzed | medium | yes | yes | [[#N3819\|View]] |
| N3820 | [[The collisionless Boltzmann equation and Jeans moments\|The collisionless Boltzmann equation and Jeans moments]] | Analyzed | low | yes | yes | [[#N3820\|View]] |
| N3821 | [[The fundamental plane of elliptical galaxies\|The fundamental plane of elliptical galaxies]] | Analyzed | medium | yes | yes | [[#N3821\|View]] |
| N3822 | [[Thermal bremsstrahlung and cluster hydrostatic equilibrium\|Thermal bremsstrahlung and cluster hydrostatic equilibrium]] | Analyzed | medium | yes | yes | [[#N3822\|View]] |
| N3823 | [[Thermal source functions and optically thick spectra\|Thermal source functions and optically thick spectra]] | Analyzed | low | yes | no | [[#N3823\|View]] |
| N3824 | [[Thermonuclear rates and hydrogen-burning chains\|Thermonuclear rates and hydrogen-burning chains]] | Analyzed | high | yes | no | [[#N3824\|View]] |
| N3825 | [[Variable stars and stellar pulsation\|Variable stars and stellar pulsation]] | Analyzed | high | yes | yes | [[#N3825\|View]] |

## Suggestions

### N3779

Note: [[Advanced stellar burning, polytropes, and compact stars|Advanced stellar burning, polytropes, and compact stars]]  
Priority: high · Graph: yes · Manim: no

A page-by-page transcription that keeps many handwritten errors, flags some of them in callouts, and has no clear line of argument from burning stages through degeneracy to the Chandrasekhar mass.

- [Correctness] In the Gamow-energy line, "$\energy{\epsilon}_0=1.22(Z_\alpha Z_X\mu\thermal{T}_6^2)^{1/3}\,\unit{keV}$" needs squared charges: $E_0=1.22\,(Z_\alpha^2Z_X^2\mu\,T_6^2)^{1/3}\,\mathrm{keV}$.
- [Correctness] Composition table, row "Iron, as written": for fully ionized ${}^{56}$Fe the values are $\mu=56/27\approx2.07$, $\mu_0=56$ and $\mu_e=56/26\approx2.15$. The listed $56/29$, $28$ and $2$ are wrong. In the note's density relation $\rho=n\mu_0m_u$, $\mu_0$ has to be 56.
- [Correctness] In the Fermi–Dirac pressure block, state the correct form once instead of only listing the variants: $P=\frac{(3\pi^2)^{2/3}}{5}\frac{\hbar^2}{m_e}\left(\frac{\rho}{\mu_em_u}\right)^{5/3}$. The displayed "$\thermal{T}/\mechanical{\rho}_{\mathrm{cr}}^{3/2}$" should be $T/\rho_{\mathrm{cr}}^{2/3}$. With that form the $2.38\times10^{-5}$ coefficient checks out: recomputed 2.385e-5 kg m^-3 K^-3/2. For He at $10^9$ K it gives $\rho_{\mathrm{cr}}\approx2.8\times10^9$ kg m^-3.
- [Correctness] Chandrasekhar mass: the correct coefficient is $\sqrt{3\pi}/2$, not $(3\pi)^{3/2}/2$. The composition factor is $(2/\mu_e)^2$, giving $M_{\mathrm{Ch}}=1.457\,(2/\mu_e)^2M_\odot$ (recomputed 1.456). For $\mu_e=1$ this is $5.83M_\odot$, not the quoted $5.73M_\odot$. Replace the hedging callout with this result.
- [Correctness] The physical-quantity table is a merged list from other notes. Examples: $z$ is listed as "Redshift … DSNB sketch" but is used as the Lane–Emden coordinate. $a$ appears three times, as radiation constant, confinement length and polytropic length. $\mu$ has three different units. $D$ is a diffusion coefficient but is used as a speed. There are neutron-drip, impact-parameter and DSNB entries the note never uses. Rebuild the table from symbols actually present and resolve the $a$, $n$, $\mu$ and $E$ clashes.
- [Graph] Plot Lane–Emden solutions $\omega(z)$ for $n=0,1,1.5,3,5$ on $0\le z\le10$, marking $z_{3/2}=3.65$ and $z_3=6.90$, to replace the hand sketch in Fig. 24. Optionally add a log-log plot of the white-dwarf mass–radius relation $M\propto R^{-3}$ approaching the Chandrasekhar limit.

### N3780

Note: [[Astronomical fluxes, magnitudes, and extinction|Astronomical fluxes, magnitudes, and extinction]]  
Priority: medium · Graph: yes · Manim: no

The note is accurate and readable on fluxes, magnitudes and extinction, but it is cluttered with course logistics, and its quantity table belongs to several other notes.

- [Correctness] The physical-quantity table lists many symbols the note never uses, and several clash with symbols that are used. Orbital period $\signal{T}$ clashes with transmission $\signal{T}(\signal{\lambda})$. Oort $A,B$ clash with extinction $A$ and the $B$ band. Binary separation is listed for $\mechanical{a}$, which the note uses for atmospheric path length. Right ascension and parallax are both $\alpha$. Also listed are noise terms, a star-formation time and others. Prune the table to this note's symbols.
- [Simplify] Remove the course logistics: homework dates, Wikipedia sign-up, "Birthday lecture!", reading lists and the "3±5 counts" fragment. Replace them with one sentence on what a magnitude is and why it is logarithmic.
- [Example] After the distance-modulus box, add a worked example. For instance, a star with $m_V=10$ at $d=1$ kpc with $A_V=1$ has $M_V=10-5\log_{10}(1000)+5-1=-1$. Include the sign convention for $A$ explicitly ($m-M=5\log_{10}d-5+A$).
- [Intuition] In the extinction section, mention that $A_B=A_V+E(B-V)\approx4.1E(B-V)$ follows directly from $R_V=3.1$. This makes the quoted "4.0" a derived value rather than a separate fact. Also explain why scattering by small grains reddens light.
- [Graph] Plot Planck spectra $B_\lambda(T)$ for $T=3000,5800,10^4$ K over 100–3000 nm on log axes, with the U, B, V, R, I band centres marked. This shows Wien's law and why color indices measure temperature.

### N3781

Note: [[Atomic oscillators and line absorption cross sections|Atomic oscillators and line absorption cross sections]]  
Priority: medium · Graph: yes · Manim: yes

The classical oscillator derivation is correct and fairly complete, but the order is confusing (the line integral comes before the cross section it uses), and the quantity table is wrong.

- [Correctness] The physical-quantity table defines $\alpha$ as the fine-structure constant, but the note uses $\signal{\alpha}_{\signal{\nu}}$ for the absorption coefficient. $\energy{E}$ is listed as "radiant energy" but appears only as level energies $E_u,E_\ell$. The Doppler parameter $b$ is unused. Missing are $\sigma$, $B_{\ell\to u}$, $A_{u\to\ell}$, $g_\ell$, $g_u$, $\omega_0$, $\electric{E}_0$ and $\electric{\boldsymbol d}$.
- [Structure] Move "Cross section near resonance" after the derivation of $\sigma(\omega)=\langle L\rangle/\langle S\rangle$. Currently the frequency integral with $x=4\pi(\nu-\nu_0)/\Gamma$ appears before the Lorentzian it integrates. Also delete the duplicated sentence "The next step integrates the right side by parts. Integration by parts gives".
- [Simplify] Remove the exam and evaluation logistics in the cross-section and oscillator-strength sections. The paragraph beginning "For the strongest transitions the integrated dipole cross section is a general result" should name the Thomas–Reiche–Kuhn sum rule ($\sum f=1$ per electron), which is what it is gesturing at.
- [Example] Add a numerical check for H$\alpha$. Use $f_{2\to3}=0.641$, $g_2=8$, $g_3=18$ in $A_{u\to\ell}=\frac{8\pi^2e^2\nu^2}{m_ec^3}\frac{g_\ell}{g_u}f$ to recover $A_{32}\approx4.4\times10^7\,\mathrm{s^{-1}}$. This connects to the classical $\Gamma\approx5\times10^7\,\mathrm{s^{-1}}$ quoted earlier.
- [Graph] Plot $\sigma(\omega)/\sigma_T=\omega^4/[(\omega^2-\omega_0^2)^2+\Gamma^2\omega^2]$ on log-log axes for $0.01\le\omega/\omega_0\le100$ with an exaggerated $\Gamma/\omega_0=10^{-2}$. It shows the Rayleigh $\omega^4$ regime, the Lorentzian resonance and the Thomson plateau.
- [Manim] Animate the driven oscillator as the drive frequency sweeps through $\omega_0$. Show the amplitude peaking and the phase lag going from 0 to $\pi$, next to the growing $\sigma(\omega)$ curve.

### N3782

Note: [[Baryon–photon coupling and growth of matter perturbations|Baryon–photon coupling and growth of matter perturbations]]  
Priority: medium · Graph: yes · Manim: yes

The Dodelson-style derivations check out, including the Christoffel contraction, moments, Einstein equations and the $\Phi(y)$ solution. The note is fragmented, though, with repeated continuity derivations and empty headings.

- [Correctness] The physical-quantity table gives $\Psi,\Phi$ units of $\unit{m^2\,s^{-2}}$, but in this note's metric ($g^{00}=-(1+2\Psi)^{-1}$) they are dimensionless. The table also lists unused symbols ($\gamma$, curvature radius $A$, $\Lambda$, $\sigma$, scalar field $\phi$, $C_\ell$, $\theta$) and omits $N_\ell$, $\Theta_\ell$, $n_e$, $\rho_{\mathrm b}$, $q^{ij}$, $u^i$ and $y$.
- [Structure] The continuity equation $\partial_t\delta+\nabla\cdot\vec v/a+3\partial_t\Phi=0$ is derived twice (in "Continuity and velocity moments" and again right after). The heading "Horizon entry and perturbation growth" is empty and is immediately followed by "Early universe". Merge the duplicate and give the sections a clear order: Boltzmann equation, moments, drag, Einstein equations, superhorizon evolution, subhorizon evolution.
- [Intuition] Before the $\eta\Phi''+4\Phi'=0$ box, explain physically why superhorizon potentials stay constant in a single-fluid era and drop by exactly $9/10$ across equality. The change in the equation of state changes the relation between $\Phi$ and the conserved curvature perturbation.
- [Graph] Plot $\Phi(y)/\Phi(0)=\frac{1}{10y^3}[16\sqrt{1+y}+9y^3+2y^2-8y-16]$ for $10^{-2}\le y\le10^2$ on a log $y$ axis, with $y=1$ marked and the asymptote $0.9$. This replaces the sketch in Fig. 24. Optionally add the conformal time $\eta(a)$ from the closed-form expression.
- [Manim] Animate a fixed comoving scale $k^{-1}$ against a shrinking-then-growing comoving Hubble radius $(aH)^{-1}$ through inflation, radiation and matter eras. Show horizon exit and re-entry, matching Fig. 23.

### N3783

Note: [[Celestial coordinates, astrometry, and stellar binaries|Celestial coordinates, astrometry, and stellar binaries]]  
Priority: medium · Graph: yes · Manim: yes

The coordinates, parallax and binary-mass derivations are correct and accessible, but the astrometry values are pre-Gaia, and the quantity table mixes in symbols from other notes.

- [Correctness] The "practical parallax range" of about $200$ pc and the Gaia line "about $10^9$ stars" with no precision are outdated. Gaia DR3 has about $1.8\times10^9$ sources, with parallax precision of about 0.02–0.03 mas at $G<15$, which reaches 10% distances out to several kpc. Update the catalog table and the Fig. 33 discussion.
- [Correctness] The physical-quantity table lists the Boltzmann constant $k$ (unused) but not the velocity amplitudes $\mechanical{k}_1,\mechanical{k}_2$. It lists "argument of periastron $\omega$", which clashes with the orbital angular speed $\mechanical{\omega}$, plus extinction $A$, Oort $A,B$, scattering angle $\alpha$ (clashing with RA and parallax $\alpha$) and an "emitter radius" for $\mechanical{r}$, which here means orbital radii $r_1,r_2$. Rebuild it from the note's symbols.
- [Example] After the box $(M_1+M_2)\sin^3i=T(k_1+k_2)^3/(2\pi G)$, add a worked SB2 example, for instance $T=10$ d, $k_1=50$ km/s, $k_2=100$ km/s, giving $M\sin^3i$ and the individual $M_i\sin^3i$. Remove the "find a Wikipedia article" logistics.
- [Graph] Plot the two radial-velocity curves $v_{r,1}(t)=\gamma+k_1\sin(2\pi t/T)$ and $v_{r,2}=\gamma-k_2\sin(2\pi t/T)$ over two periods. Also plot the sky track of a nearby star combining a 1-yr parallax ellipse with linear proper motion (Fig. 32).
- [Manim] Animate two stars orbiting their center of mass with radii $r_1/r_2=M_2/M_1$, while the radial-velocity curves trace out in sync. Optionally show the parallax ellipse traced as Earth orbits.

### N3784

Note: [[Comptonization and the Sunyaev–Zeldovich effect|Comptonization and the Sunyaev–Zeldovich effect]]  
Priority: medium · Graph: yes · Manim: no

The physics is correct and reasonably clear, with a correct $F_X$–$\Delta T$ distance scaling and a historically accurate $H_0$. It starts mid-derivation, though, and lacks the full SZ spectral shape.

- [Correctness] The physical-quantity table lists the fine-structure constant $\alpha$, which is never used; the note's $\alpha$ is the $T$–$M$ scaling exponent. It omits $\tau$, $n_e$, $T_e$, $\Theta$, $D$, $d_A$, $f_{\mathrm{gas}}$ and $M_{\mathrm{tot}}$. $\energy{E}$ is listed as "radiant energy" but is used as photon energy $E_\gamma$.
- [Structure] The opening sentence ("Dividing the two power equations…") depends on the previous note. Add a one-line link to [[Inverse Compton scattering and photon energy exchange]] and a sentence stating the setup. Remove the makeup-lecture logistics.
- [Intuition] In "Sunyaev–Zeldovich distortion", state that the thermal SZ effect conserves photon number and only shifts photons up in frequency. This is why it gives a decrement below about 217 GHz and an increment above. Also note that the SZ surface brightness is independent of redshift, which is why SZ selection is nearly $z$-independent.
- [Graph] Plot the thermal SZ distortion $\Delta I_\nu/(I_0y)=\frac{x^4e^x}{(e^x-1)^2}\left[x\coth(x/2)-4\right]$ with $x=h\nu/kT_{\mathrm{CMB}}$, for $\nu=0$–600 GHz, with the null at 217 GHz marked. Overlay the undistorted Planck curve scaled for reference.
- [Example] Add an order-of-magnitude check of "$\Delta T\sim-1$ mK". With $n_e\sim10^{-3}\,\mathrm{cm^{-3}}$, $kT_e\sim10$ keV and path $\sim1$ Mpc, $y\approx\sigma_Tn_eL\,kT_e/m_ec^2\approx4\times10^{-5}$, so $\Delta T\approx-2yT\approx-0.2$ mK. Then show which parameters push it toward 1 mK.

### N3785

Note: [[Cosmic Background Microwave Radiation|Cosmic Background Microwave Radiation]]  
Priority: high · Graph: yes · Manim: no

A two-line stub without frontmatter or TLDR, with a mis-ordered title and a transposed temperature value.

- [Correctness] "$2.72584\pm0.00057$ K" has two digits transposed. The Fixsen (2009) value is $T_0=2.72548\pm0.00057$ K, which also matches the quoted $-270.425\,^\circ$C (2.72548 − 273.15 = −270.4245).
- [Structure] Rename to "Cosmic microwave background" (standard word order), add quoted frontmatter title, TLDR and quantity table, and use `\thermal{T}` with `\unit{K}`. Update the incoming links in "05 Cosmic Relativity/00 Acronyms.md" and "04 Reference/Note Improvement Tracker.md". Alternatively, turn it into a short hub that links to [[Cosmic energy components and thermal equilibrium]], [[Cosmological horizons, photon multipoles, and density spectra]] and [[Comptonization and the Sunyaev–Zeldovich effect]].
- [Graph] If expanded, add the blackbody $B_\nu(T_0)$ for 1–1000 GHz with its peak at 160.2 GHz. It could also show the $T\propto1+z$ scaling.

### N3786

Note: [[Cosmic energy components and thermal equilibrium|Cosmic energy components and thermal equilibrium]]  
Priority: medium · Graph: yes · Manim: no

The thermodynamics is correct, including the equilibrium integrals, mean energies and $T_\nu/T_\gamma=(4/11)^{1/3}$. However, the neutrino-mass bound is outdated, the BBN temperature is misplaced, and the table has many clashes.

- [Correctness] "approximate upper-limit range of $0.2$–$1$ eV for $\sum m_\nu c^2$" is outdated. Planck 2018 gives $\sum m_\nu<0.12$ eV, DESI 2024 combined with the CMB gives about $<0.07$ eV, and KATRIN (2024) gives $m_\beta<0.45$ eV. Oscillations require $\sum m_\nu\gtrsim0.06$ eV.
- [Correctness] In "Beyond equilibrium", "Big Bang nucleosynthesis at 1–10 MeV" is too hot. Weak freeze-out of $n/p$ happens near 0.8 MeV, and nucleosynthesis proper happens near 0.07–0.1 MeV, as in the companion note [[Expansion histories and primordial element abundances]]. The earlier "$k_BT_{\mathrm{BBN}}\simeq1$ MeV" estimate of $a_{\mathrm{BBN}}$ should also say it is the onset.
- [Correctness] The physical-quantity table gives $k$ units of $\unit{m^{-2}}$, but in this note's Friedmann equation $k\in\{0,\pm1\}$ is dimensionless with $R_0$ explicit. The table lists $\mu$ as a "direction cosine", which clashes with the chemical potential $\thermal{\mu}$ used here. It also has unused rows ($\tau$, $\gamma$, $\vec v$, $\mechanical{F},\mechanical{m},\mechanical{a}$, $A$, $\vec k$, $\delta$). Pressure $\thermal{p}$ and momentum $\mechanical{p}$ share a letter in the same integral; consider $P$ for pressure.
- [Structure] Remove the midterm note and merge the empty heading "Neutrino temperature after electron–positron annihilation" with its subheading. The section "Momentum in the flat FRW metric" duplicates [[Cosmological geodesics and photon redshift]]; replace it with a link.
- [Graph] Plot $\rho_i(a)/\rho_{\mathrm{cr},0}$ for radiation, matter and $\Lambda$ on log-log axes for $10^{-10}\le a\le10$, with $a_{\mathrm{eq}}\approx3\times10^{-4}$, $a_{m\Lambda}\approx0.75$, BBN and CMB release marked. A second panel could show $T_\gamma$ and $T_\nu$ through $e^\pm$ annihilation (Fig. 17).

### N3787

Note: [[Cosmological geodesics and photon redshift|Cosmological geodesics and photon redshift]]  
Priority: medium · Graph: no · Manim: yes

The tensor and Christoffel computations are correct, but the note derives $E\propto1/a$ twice and never actually defines redshift, despite its title.

- [Structure] The opening block derives $d E/dt+(\dot a/a)E=0$, and the section "Energy of light along a geodesic" derives it again. Reorder as: vector and tensor transformation, Christoffel symbols, FRW Christoffels, photon geodesic, redshift. Drop the opening duplicate.
- [Intuition] Add the redshift definition the title promises: $1+z=\lambda_{\mathrm{obs}}/\lambda_{\mathrm{em}}=a(t_{\mathrm{obs}})/a(t_{\mathrm{em}})$, from $E\propto a^{-1}$. Add one example ($z=1100$ for the CMB gives $a\approx9\times10^{-4}$). Also add the massive-particle result $p\propto a^{-1}$, so peculiar velocities decay.
- [Correctness] The physical-quantity table lists $z$, which is never defined in the body. It also lists the scalar field $\phi$ (GeV), clashing with the azimuth $\phi$ used here, and proper volume $V$, clashing with the vector $\vec V$. Further unused rows are $\sigma$, $\mu$, $\delta$, $A$ and $\mechanical{F},\mechanical{m},\mechanical{a}$. The affine parameter $\lambda$, $\Gamma^\mu_{\alpha\beta}$ and $g_{\mu\nu}$ are missing.
- [Manim] Animate a wave packet travelling across an expanding comoving grid, with its wavelength stretching in proportion to $a(t)$ and the energy readout falling as $1/a$. Optionally animate parallel transport around a closed loop on a sphere (Figs. 5–6), showing the vector's net rotation.

### N3788

Note: [[Cosmological horizons, photon multipoles, and density spectra|Cosmological horizons, photon multipoles, and density spectra]]  
Priority: medium · Graph: yes · Manim: yes

The derivations and numbers check out, including the Mészáros solution, the dipole–velocity relation, $k_{\mathrm{eq}}\approx0.011$ Mpc^-1 and $D_A\approx13$ Mpc. Readability suffers from transcribed scratch work and a mixed table.

- [Correctness] The physical-quantity table describes $\chi$ as a "hyperspherical radial angle" in rad, but this note uses $\chi$ as the comoving radial distance in $D_A=\chi/(1+z)$. It gives $\Psi,\Phi$ units of $\unit{m^2\,s^{-2}}$ while the photon equation treats them as dimensionless. It lists $k$ as a curvature parameter in m^-2 next to wavenumber $k$. There are unused rows ($\gamma$, $\mechanical F$, $\Lambda$, $\sigma$, $n$, $T_\nu$, $V$, $A$).
- [Simplify] Delete the scratch-work paragraphs in "Mode crossing at equality": "$124.5$ Mpc/150 … $5/6$ Mpc?", "$10^{-5.5}$ … True answer $0.01$ Mpc", and the attribution to Manoj. The clean $k_{\mathrm{eq}}=0.073\,\Omega_mh^2$ Mpc$^{-1}$ derivation already gives the result.
- [Intuition] In "Photon scattering and energy transfer", note that the radiation term $\Omega_ra^{-4}\approx8\times10^7$ is about 28% of the matter term at $a=10^{-3}$, so "keeps only matter" is a rough approximation. Also state the conclusion of the energy-transfer estimate: the fractional energy change per scattering, $\sim\sqrt{T/m_e}\sim10^{-3}$, justifies treating Thomson scattering as elastic.
- [Graph] Plot the physical Hubble length $D_H(a)$ and proper mode sizes $a/k$ for $k=10^{-3},10^{-2},10^{-1}$ Mpc$^{-1}$ on log-log axes for $10^{-6}\le a\le1$ (Fig. 27). Plot the Mészáros growth $\delta_m\propto y+2/3$ for $10^{-3}\le y\le10^2$, showing the stagnation before equality.
- [Manim] Animate three modes ($k\ll k_{\mathrm{eq}}$, $k\sim k_{\mathrm{eq}}$, $k\gg k_{\mathrm{eq}}$) entering the horizon. Show their $\Phi$ amplitudes freezing, dropping to 9/10 or decaying as in Fig. 31.

### N3789

Note: [[Curvature, stress-energy conservation, and Friedmann equations|Curvature, stress-energy conservation, and Friedmann equations]]  
Priority: medium · Graph: yes · Manim: yes

The GR results are correct: $R_{00}$, $R$, $G_{00}=3H^2$, the shell volume, $D_A$, the flux law and the continuity equation. It has a broken internal reference, conflicting conventions for $r$, and a table with symbol clashes.

- [Links] After the $R_{00}$ computation, "the Ricci scalar from [[#Conservation of energy and momentum|…]]" points to the wrong section. $R=6(\ddot a/a+\dot a^2/a^2)$ is computed in "Riemann tensor", so link to [[#Riemann tensor]].
- [Correctness] The physical-quantity table gives $k$ units of $\unit{m^{-2}}$, but the note normalizes $k\in\{0,\pm1\}$ with an explicit $R_0$. It lists $\ell,C_\ell$ as an angular multipole, while the note uses $\ell$ for transverse length in $\ell=a S_k\,d\theta$. It lists the scalar field $\phi$, clashing with the azimuth $\phi$. Several rows are unused ($\gamma$, $\mechanical F$, $\sigma$, $\vec k$, $\mu$, $\delta$, $E$).
- [Simplify] Pick one radial convention. The note uses dimensionless $r$ in $dr^2/(1-kr^2)$ and comoving length $r$ in $S_k(r)=R_0\sin(r/R_0)$, plus an embedding radius $A=R$ and "unit-radius normalization". State the mapping once, or use $\chi$ for comoving distance. Drop "$ds^2=-c^2dt^2+d\Omega^2$", which mixes dimensions.
- [Example] After $D_A=S_k/(1+z)$, give one flat-ΛCDM number ($\Omega_m=0.3$, $h=0.7$: $D_A$ peaks at about 1.75 Gpc near $z\approx1.6$). Explain why objects beyond that redshift look larger.
- [Graph] Plot comoving distance $r(z)$, $D_A(z)$ and $D_L(z)=(1+z)r$ for flat ΛCDM with $0\le z\le10$. Optionally redraw Fig. 13 as $\log\rho$ versus $\log a$ for radiation, matter and $\Lambda$.
- [Manim] Animate parallel transport of a tangent vector around a geodesic triangle on a sphere, showing that the net rotation angle equals the enclosed area times curvature. This motivates the Riemann-tensor definition.

### N3790

Note: [[Cyclotron and single-particle synchrotron emission|Cyclotron and single-particle synchrotron emission]]  
Priority: medium · Graph: yes · Manim: yes

A clear progression from cyclotron motion to the synchrotron power and beaming, with correct power formulas. It has a factor-2 slip in the pulse duration, letter clashes, and stray material from the previous lecture.

- [Correctness] Pulse width: the beam sweeps past the observer while the velocity turns through the full cone width $\Delta\theta\approx2/\gamma$, so $L\approx2r_g/\gamma$. Rybicki and Lightman eq. 6.16 then gives $\Delta t_{\mathrm{pulse}}\approx1/(\gamma^3\omega_B^{\mathrm{rel}}\sin\alpha)$, not $1/(2\gamma^3\omega_B^{\mathrm{rel}}\sin\alpha)$. Fix "$\mechanical{L}=2\mechanical{r}_g\sin(\theta/2)\simeq\mechanical{r}_g/\gamma$" and the bandwidth estimate.
- [Correctness] The physical-quantity table defines $\alpha$ as the fine-structure constant, but the note uses $\alpha$ for pitch angle. $L$ is used for luminosity, emission-arc chord length and (in the first paragraph) source length. $\theta$ is both the aberration angle and the dipole-pattern angle (Fig. 61 uses $\theta$ while the text uses $\phi$). Rename the chord, for example to $\ell_{AB}$, and add $r_g$, $\gamma$, $v_\perp$ and $\omega_B^{\mathrm{rel}}$ to the table.
- [Structure] Move the opening paragraph on planetary-nebula temperatures and densities, and the problem-set and makeup logistics, to the free–free note or delete them. Start with the Synchrotron radiation section.
- [Example] Add a numerical example: for $B=10\,\mu$G and $\gamma=10^4$, $\nu_c=\frac{3}{4\pi}\gamma^2\frac{eB}{m_ec}\approx4\times10^9$ Hz, so GHz radio emission comes from GeV electrons. The current example uses an unmotivated $\omega_B^{\mathrm{rel}}\sim10^{10}$ Hz.
- [Graph] Plot the single-electron synchrotron function $F(x)=x\int_x^\infty K_{5/3}(\xi)\,d\xi$ for $10^{-3}\le x\le10$ on log-log axes. Mark the peak at $x\approx0.29$ and overlay the asymptotes $2.15x^{1/3}$ and $1.25x^{1/2}e^{-x}$ (Fig. 69).
- [Manim] Animate an electron on a circular orbit with a narrow forward beam of half-angle $1/\gamma$ sweeping past a distant observer. Below it, draw the received pulse train with narrow pulses separated by $2\pi/\omega_B^{\mathrm{rel}}$, showing why the spectrum extends to $\gamma^3\omega_B^{\mathrm{rel}}$.

### N3791

Note: [[Electromagnetic units and Compton scattering|Electromagnetic units and Compton scattering]]  
Priority: low · Graph: yes · Manim: no

The unit comparison and four-vector Compton derivation are correct and clear. The note opens mid-derivation and lacks a numerical example.

- [Structure] The first paragraph and the $\sigma_T$ box continue the Thomson derivation from the previous note. Either add a one-line lead-in with a link to [[Radiative absorption, recombination, and Thomson scattering#Radiated power and Thomson cross section]], or move the block there.
- [Correctness] The physical-quantity table lists the Compton parameter $y$, which is never used. It lists $\energy{E}$ as "radiant energy" while the note uses photon energies $E_\gamma^{i,f}$. It omits $k$ (Coulomb constant), $\gamma$, $x$ and the scattering angle $\Theta$.
- [Example] After the Compton formula, add worked numbers. The maximum shift is $2\lambda_C=4.85$ pm. A 511 keV photon scattered by $90^\circ$ leaves with $255.5$ keV, while a 10 keV X-ray loses only about 2%. This shows when recoil matters.
- [Graph] Plot the full Klein–Nishina total cross section $\sigma_{\mathrm{KN}}/\sigma_T$ versus $x=E_\gamma/m_ec^2$ for $10^{-3}\le x\le10^3$ (log axes). Overlay the low-energy series $1-2x+26x^2/5$ and the high-energy asymptote $\frac{3}{8x}(\ln2x+\tfrac12)$.

### N3792

Note: [[Epicyclic orbits, asymmetric drift, and Galactic phase space|Epicyclic orbits, asymmetric drift, and Galactic phase space]]  
Priority: medium · Graph: yes · Manim: yes

The epicycle derivation is correct ($\kappa^2=-4B\Omega$, $\sigma_y^2/\sigma_x^2=-B/(A-B)$, periods of 170 and 220 Myr), as are the CBE, moment and Jeans derivations. However, "Asymmetric drift" never derives asymmetric drift, and the quantity table is badly polluted.

- [Correctness] The physical-quantity table contains rows from other notes that clash with this note's symbols. The Stefan–Boltzmann $\sigma$ clashes with velocity dispersion $\mechanical\sigma$, apparent magnitude $m$ with mass $\mechanical m$, airmass $X$ with epicycle amplitude $\mechanical X$, and dust path length $\mechanical x$ with epicycle displacement $\mechanical x$. Extinction $A$ clashes with Oort $A$, and grain density $n$ with stellar density $n$. Binary-star, transit, luminosity-function and metallicity rows are also included. Prune it to the epicycle, CBE and Jeans symbols.
- [Correctness] In "Collisionless Boltzmann equation", "The derivation assumes a time-independent potential" is not needed. The phase-space continuity argument with $\dot{\mathbf v}=-\nabla\Phi(\mathbf x,t)$ holds for time-dependent potentials. What is required is a smooth potential and negligible encounters.
- [Structure] "Asymmetric drift" only gives the heuristic $M\sim R(v_{\mathrm{rot}}^2+\sigma^2)/G$. Either derive the radial Jeans equation result $v_c^2-\bar v_\phi^2=\sigma_R^2\left[\sigma_\phi^2/\sigma_R^2-1-\partial\ln(\nu\sigma_R^2)/\partial\ln R\right]$, or rename the section. Move the opening paragraph on cluster evaporation (the $1/136$ fraction) to the cluster note.
- [Graph] Plot $\Omega(R)$, $\Omega\pm\kappa/2$ and $\Omega-\kappa/4$ for a flat rotation curve ($v_c=220$ km/s, $\kappa=\sqrt2\Omega$) on $0.5$–$15$ kpc. Add a horizontal bar pattern speed (for example 40 km/s/kpc) to locate the ILR, corotation and OLR. Also plot an epicycle in the guiding-centre frame, an ellipse with axis ratio $2\Omega/\kappa=\sqrt2$.
- [Manim] Animate a star on an epicyclic orbit in the inertial frame alongside the same motion in the frame co-rotating with the guiding centre. Show the retrograde ellipse with axis ratio $2\Omega/\kappa$.

### N3793

Note: [[Expansion histories and primordial element abundances|Expansion histories and primordial element abundances]]  
Priority: medium · Graph: yes · Manim: no

The Saha-type deuterium derivation, the $w$-scaling and the helium estimate are correct. The section titles do not match their content, and a few quoted constants are off.

- [Correctness] "$\energy{B}_{{}^4\mathrm{He}}=22$ MeV" is wrong as a binding energy. The ${}^4$He binding energy is 28.3 MeV; the nearby value 23.8 MeV is the $Q$ of $D+D\to{}^4\mathrm{He}+\gamma$. Either correct it or label the reaction.
- [Example] The rough $H\simeq(1\,\mathrm{s^{-1}})(T/\mathrm{MeV})^2$ gives $t\simeq100$ s at 0.07 MeV, but the quoted Dodelson formula gives $t\simeq270$ s at the same temperature. State this explicitly. Explain that neutron decay over that time ($\tau_n=878$ s, not "of order 1000 s") lowers $X_n$ from about 0.15 to 0.11. Compare the simple $Y_p\approx0.22$ with the observed $Y_p\approx0.245$.
- [Structure] "Expansion with different equations of state" begins with the deuterium abundance and $\eta_B$, and the deuterium equilibrium is derived three times (first section, start of the second, and "Reaction freeze-out"). Consolidate into one BBN section and one equation-of-state section. Remove the logistics ("class leaves Chapter 3 midway").
- [Example] In "Galaxy counts in a redshift shell", the stated $15\ \mathrm{Gpc^3}$ is high. For flat ΛCDM ($\Omega_m=0.3$, $h=0.7$), $V(0.5)-V(0.4)\approx12.6$ Gpc$^3$. Use the computed value, and note that the full sky is $4.125\times10^4$ deg$^2=1.485\times10^8$ arcmin$^2$.
- [Graph] Plot the equilibrium deuterium fraction $n_D/n_N$ from the boxed Saha relation versus $k_BT$ from 1 to 0.03 MeV for $\eta_B=6.1\times10^{-10}$, showing the abrupt turn-on near 0.07 MeV (deuterium bottleneck). Add a second plot of $a(t)\propto t^{2/[3(1+w)]}$ for $w=1,1/3,0$.

### N3794

Note: [[Galactic chemical evolution and the closed-box model|Galactic chemical evolution and the closed-box model]]  
Priority: medium · Graph: yes · Manim: no

The closed-box derivation and G-dwarf numbers are correct (p≈0.74 Z⊙, fraction ≈0.39), but the note opens with unrelated disk-dynamics material and carries a physical-quantities table copied from other notes.

- [Correctness] Physical quantities table lists $Z$ as zenith angle, $X$ as airmass, $A$ as extinction and Oort constant, $h$, the Stefan–Boltzmann $\sigma$ and a grain density $n$, none of which this note uses; $Z$ and $X$ clash with the metallicity and hydrogen mass fraction used in the text, while $X$, $Y$, $N_{\mathrm O}$, $N_{\mathrm{Fe}}$, $M_{\mathrm g}$, $M_{\mathrm h}$, $M_\star$ are missing.
- [Correctness] $Z_\odot=0.02$ and $X=0.76$, $Y=0.24$ are old values; modern solar metallicity is $Z_\odot\approx0.013$–$0.014$ (Asplund et al. 2009) and primordial $Y_p\approx0.245$; label 0.02 as the classical value used in the G-dwarf example.
- [Structure] The opening vertical Jeans–Poisson result $2\pi G\Sigma(<z)=-n^{-1}\partial(n\sigma_z^2)/\partial z$ and the K-dwarf surface-density table belong to a disk-dynamics note; move them or give them their own heading with a one-line derivation from the Jeans and Poisson equations.
- [Simplify] Remove transcription asides ("The notes append an extra Z", "handwritten exponent", "Gluon exchange mediates the strong interaction") and state the closed-box assumptions and result in one clean pass, defining the yield $p$ before using it.
- [Graph] Plot the closed-box cumulative metallicity distribution $M_\star(<Z)/M_\star(<Z_\odot)=(1-e^{-Z/p})/(1-e^{-Z_\odot/p})$ for $Z/Z_\odot\in[0,1]$ with $p=0.74Z_\odot$, mark $Z_\odot/4$ (≈0.39) and the observed ≲1% point, and overlay a pre-enriched curve with $Z_0=0.1Z_\odot$.
- [Intuition] End with the standard resolutions of the G-dwarf problem (pre-enrichment $Z_0>0$, gas infall/accreting box) so the reader sees why the closed box fails and what fixes it.

### N3795

Note: [[Galactic potential models, virial balance, and relaxation|Galactic potential models, virial balance, and relaxation]]  
Priority: medium · Graph: yes · Manim: yes

Derivations of the virial theorem, Plummer mass estimate, strong/weak encounters and relaxation times are correct and the numbers check out, but the note mixes topics and has a garbled symmetrization step and a foreign quantities table.

- [Correctness] Physical quantities table is mostly from other notes: $m$ as apparent magnitude (here mass), $b$ as softening constant (here impact parameter), $\alpha$ as right ascension/parallax (here line-of-sight angle and scattering angle), $\tau$ as optical depth (here averaging time), $R$ as stellar radius in km (here system size), $p$ metal yield unused; replace with the note's actual symbols ($N$, $t_c$, $t_r$, $f(v)$, $\eta$, …).
- [Correctness] Globular-cluster Coulomb logarithm: $r_s\simeq2\,\mathrm{AU}\simeq9.7\times10^{-6}\,\mathrm{pc}\approx10^{-5}\,\mathrm{pc}$, so $\Lambda=R/r_s\approx10^5$ ($\ln\Lambda\approx11.5$), not $\ln[1/(2\times10^{-5})]=\ln(5\times10^4)$; the following sentence about the Galactic disk is a non sequitur after a globular-cluster example.
- [Simplify] Replace "The contribution from the first term before the sum is symmetrized changes when α and β are exchanged" with an explicit statement that the pair sum is rewritten by swapping α↔β and averaging; also move the opening tangent-point section (Figs. 70–72) to [[Milky Way populations, clusters, and rotation#Rotation kinematics of the Milky Way disk]].
- [Links] Link the weak-encounter section to [[Gravitational encounters and collisionless galactic dynamics]], which gets $t_r/t_c\simeq N/(8\ln N)$ instead of $N/(6\ln(N/2))$, and explain that the prefactor differs only because one uses volume density $n=3N/4\pi R^3$ and the other projected density $N/\pi R^2$.
- [Graph] Plot $v_c(r)$ for Plummer ($a_{\mathrm p}=1$), NFW ($a_{\mathrm N}=1$) and the singular isothermal sphere for $r/a\in[0,10]$; separately plot $t_r/t_c=N/(6\ln(N/2))$ on log-log axes for $N=10^2$–$10^{12}$ with the open cluster, globular cluster and elliptical from the table as markers.
- [Manim] Animate a weak encounter: a star on a straight line past a field star with the transverse kick $\int F_\perp dt$ building up, then many random kicks producing a random walk with $\langle v_\perp^2\rangle\propto t$.

### N3796

Note: [[Galactic virial balance, rotational support, and anisotropy|Galactic virial balance, rotational support, and anisotropy]]  
Priority: medium · Graph: yes · Manim: no

The tensor virial derivation and the oblate-spheroid $W_{xx}/W_{zz}$ result are correct (ratio →1 in the spherical limit), but the note starts mid-topic and its table contains duplicated and foreign symbols.

- [Correctness] Physical quantities table lists $r_{\mathrm g}$ twice (gravitational radius and "Gyroradius"), $V$ as both gas volume and potential energy while the note uses $V_{jk}$ for the external term, $K$ as a "virial scaling coefficient" clashing with kinetic energy $K$, and unused Sérsic $n$, number density $n$, fundamental-plane $a,b$ and $R,R_{\mathrm e}$; prune to the note's symbols.
- [Structure] The note opens with the King approximation and SIS without defining $r_0$ or the nonsingular isothermal sphere; add a short lead-in ($r_0=\sqrt{9\sigma^2/4\pi G\rho_0}$) or move this paragraph to the note that solves the isothermal sphere.
- [Simplify] Collapse the scattered remarks on "handwritten" index order and the signed surface term into one convention statement at the start of the virial section, noting once that $W_{jk}$ is symmetric for self-gravity.
- [Graph] Plot the $v_0/\sigma_0$–$\epsilon$ diagram $v_0/\sigma_0=\sqrt{2[(1-\delta)W_{xx}/W_{zz}-1]}$ using the oblate formula for $\epsilon\in[0,0.7]$ and $\delta=0,0.1,0.2,0.3$; this is the classic diagnostic of rotational versus anisotropic flattening.
- [Example] Work one case: an E4 galaxy ($\epsilon=0.4$) has $W_{xx}/W_{zz}\approx1.53$, so an isotropic oblate rotator needs $v_0/\sigma_0\approx1.03$; compare with the low $v/\sigma$ of giant ellipticals to show they must be anisotropic.

### N3797

Note: [[Galaxy morphology, surface brightness, and halo models|Galaxy morphology, surface brightness, and halo models]]  
Priority: medium · Graph: yes · Manim: no

The surface-brightness definitions, Sérsic/exponential constants (7.669, 8.327, 7.215π, 1.67) and NFW normalization are correct, but the structure is fragmented with empty or misnumbered headings, admin text and an inaccurate table.

- [Correctness] Physical quantities table lists $\mu$ twice (surface brightness and mean particle mass) and many symbols the note never uses ($h$, $q,\epsilon,e$, $N$, $n$, $r_0$, $a,b$, $M_{\mathrm b}$, $M_{\mathrm d}$, $M_*$); prune to the symbols actually used.
- [Structure] Remove the empty heading "Galaxy interactions and morphology", the midterm/Professor Buote remark and the Zwicky personality aside; rename "Case 2" and "Part 2. Case 3" (there is no Case 1) or add Case 1 = point mass/Keplerian explicitly.
- [Simplify] The cooling argument asserts $R_{\mathrm{crit}}\simeq75$ kpc and $M_{\mathrm{crit}}\sim10^{12}M_\odot$ without steps; show $t_{\mathrm{cool}}=t_{\mathrm{ff}}$ with a bremsstrahlung $\Lambda\propto T^{1/2}$ and virial $T$ to obtain them, and rewrite the unclear sentence "Above $M_{\mathrm{crit}}$, fragmentation requires $R<R_{\mathrm{crit}}$".
- [Graph] Plot a rotation-curve decomposition for $R=0$–40 kpc: exponential disk ($h_R=3$ kpc, $M_{\mathrm d}=5\times10^{10}M_\odot$), NFW halo ($c=10$, $M_{200}=10^{12}M_\odot$), their quadrature sum, and the Keplerian fall-off of the disk alone.
- [Graph] Plot $\mu(R)-\mu_{\mathrm e}$ for the de Vaucouleurs law and an exponential disk with the same $R_{\mathrm e}$ ($R/R_{\mathrm e}\in[0,5]$) to show the steeper core and shallower wings of the $R^{1/4}$ law.

### N3798

Note: [[Galaxy scaling laws, Sérsic profiles, and luminosity functions|Galaxy scaling laws, Sérsic profiles, and luminosity functions]]  
Priority: medium · Graph: yes · Manim: no

Tully–Fisher, Sérsic, Schechter and isophote material is mostly correct, but a wrong internal link, heavy symbol reuse and an angle-convention slip in the boxy/disky section hurt clarity.

- [Links] "The exponent 1/n follows from the intensity form on [[#Normal elliptical galaxies]]" points to the ellipse section; the Sérsic intensity is in [[#Sérsic profile]].
- [Correctness] Symbol clashes: $\alpha$ is the Tully–Fisher slope, the baryonic TF exponent and the Schechter slope; $b$ is the semiminor axis, the BTF exponent, the Fourier sine coefficients $b_n$ and the Sérsic $b_n$; $n$ is both Sérsic index and Fourier order; rename (e.g. Fourier $A_n,B_n$, BTF exponent $\beta$).
- [Correctness] In the boxy/disky section $\theta$ is the eccentric-anomaly parameter ($x=a\cos\theta$, $y=b\sin\theta$), not the polar angle, so $R_{\mathrm{iso}}(\theta)$ and $R_{\mathrm{ell}}(\theta)$ are not "along the same direction"; define $\theta$ as the polar angle from the major axis (standard convention) or state the parametric convention consistently.
- [Correctness] The MBW/2dF Schechter table gives $\phi_*$ in $h^3\,\mathrm{Mpc^{-3}}$, so the characteristic magnitudes are $M^*-5\log_{10}h$, not $M^*$; add the $-5\log_{10}h$.
- [Structure] Remove the midterm remark, and fix mislabelled headings: "Projected shapes and light profiles" contains the BTF normalization and "Galaxy luminosity functions" (duplicated with "Galaxy luminosity function") contains the $a_4$ statement.
- [Graph] Plot Sérsic $\mu(R)-\mu_{\mathrm e}=1.086\,b_n[(R/R_{\mathrm e})^{1/n}-1]$ for $n=0.5,1,2,4,8$ over $R/R_{\mathrm e}\in[0,5]$; a Schechter $\log\phi$ versus $\log(L/L_*)$ for $\alpha=-0.7,-1.0,-1.2,-1.5$; and a polar plot of an isophote with $a_4/a=\pm0.03$ to show disky versus boxy.

### N3799

Note: [[General relativity and the expanding-universe metric|General relativity and the expanding-universe metric]]  
Priority: medium · Graph: yes · Manim: yes

The tensor transformation, geodesic and FRW Christoffel derivations are correct and clear, but the note opens with course logistics, quotes outdated cosmological values and has a misleading quantities table.

- [Correctness] Outdated values: $h=0.72\pm0.08$ is the 2001 HST Key Project result (Planck 2018: $h=0.674\pm0.005$; SH0ES ≈0.73, the Hubble tension), and the CMB is released at ≈380,000 yr, not ≈300,000 yr.
- [Correctness] Physical quantities table lists $A$ as "comoving curvature radius" and $k$ as "spatial curvature parameter", but here $A,B$ are inhomogeneous metric coefficients (and $B$ multiplies $d\Omega^2$, so the text "radial metric coefficients" is wrong for $B$) and $k$ is the constant in $a=kt^{2/3}$; also $\phi$ (scalar field) clashes with the azimuth, $\eta$ (conformal time) with $\eta_{\mu\nu}$, and $V$, $\ell$, $C_\ell$, $\vec k$, $\mu$, $\delta$, $F,m,a$ are unused; rename $k$ in $a=kt^{2/3}$ and remove the course-grading paragraph.
- [Intuition] In the local-inertial-frame section give the counting argument: 100 second derivatives $\partial^2g_{\mu\nu}$ versus 80 free third derivatives of the coordinate transformation leaves 20 that cannot be removed, the independent Riemann components; this makes "curvature persists" concrete.
- [Example] The geodesic section sets up but never computes Christoffel symbols; add the polar example ($\Gamma^r_{\theta\theta}=-r$, $\Gamma^\theta_{r\theta}=1/r$) and the flat FRW results $\Gamma^0_{ij}=a\dot a\,\delta_{ij}$, $\Gamma^i_{0j}=(\dot a/a)\delta^i_j$.
- [Graph] Plot $a(t)/a(t_0)$ for radiation ($t^{1/2}$), matter ($t^{2/3}$) and a cosmological constant ($e^{H t}$), all normalized to 1 today, with $H(t)=2/(3t)$ for matter as a second panel.
- [Manim] Animate a comoving grid stretching with $a(t)$ while galaxies keep fixed comoving coordinates, showing the physical separation $a(t)(x_2-x_1)$ grow (Fig. 3 in motion).

### N3800

Note: [[Gravitational encounters and collisionless galactic dynamics|Gravitational encounters and collisionless galactic dynamics]]  
Priority: low · Graph: yes · Manim: yes

A clean, correct derivation of the direct-collision time (≈10^21 yr checks out), the impulse approximation and the relaxation time $t_{\mathrm{relax}}\simeq0.1N/\ln N\,t_{\mathrm{cross}}$, but it opens with leftover luminosity-function text and has a foreign quantities table.

- [Correctness] Physical quantities table includes many unused symbols from other notes (gas volume $V$, $R_{\mathrm e}$, Sérsic $n$, $\Delta$, $c$, two different $\alpha$, $p$, $C$, isothermal $\sigma$, $\delta$, $a,b$) while $m$, $v$, $\theta$ and $x$ are missing; prune it.
- [Structure] Move the opening Schechter-model paragraph to the end of [[Galaxy scaling laws, Sérsic profiles, and luminosity functions]], where the Press–Schechter discussion stops.
- [Links] Cross-link [[Galactic potential models, virial balance, and relaxation#Weak encounters]], which derives the same impulse but gets $N/(6\ln(N/2))$; note the different prefactor comes from volume versus projected stellar density.
- [Example] Make the last paragraph explicit: $N=10^{11}$ gives $t_{\mathrm{relax}}\approx4\times10^8\,t_{\mathrm{cross}}$, and with $t_{\mathrm{cross}}\approx50$ Myr this is ~$10^{16}$ yr; contrast a globular cluster ($N=10^5$, $t_{\mathrm{relax}}\sim10^3\,t_{\mathrm{cross}}\sim10^8$–$10^9$ yr) where relaxation matters.
- [Graph] Plot $F_\perp/(Gm^2/b^2)=[1+(vt/b)^2]^{-3/2}$ for $vt/b\in[-5,5]$ with a rectangle of height 1 and width 2 of equal area, showing the effective encounter duration $2b/v$.
- [Manim] Show a star crossing the galaxy on a nearly straight path, receiving many small randomly oriented kicks whose squared sum grows linearly with the number of crossings until $\Delta v^2\sim v^2$.

### N3801

Note: [[Interstellar gas and X-ray scaling in elliptical galaxies|Interstellar gas and X-ray scaling in elliptical galaxies]]  
Priority: medium · Graph: yes · Manim: no

The hot-gas plasma estimates, beta-model derivation and self-similar scalings are mostly correct (sound speed, crossing time, $P_{\mathrm{mag}}/P_{\mathrm{th}}$, $L_X\propto T^2$ check out), but there is a gyroradius normalization error, a symbol clash and leftover admin text.

- [Correctness] Gyroradius normalization: with $v=\sqrt{3kT/m}$, an electron at $T=10^7$ K has $r_{\mathrm g}\approx3.9\times10^{-11}$ pc for $B=1\,\mu$G, so the formula should read $(B/1\,\mu\mathrm G)^{-1}$, or the coefficient should be ≈$2.0\times10^{-11}$ pc for $(B/2\,\mu\mathrm G)^{-1}$.
- [Correctness] Symbol clashes: $r_{\mathrm g}$ is the gyroradius in the plasma section and the gravitational radius in the scaling section (the table lists both), and $\mu$ is listed as surface brightness and mean particle mass; rename the gyroradius $r_{\mathrm L}$ and prune unused table entries (Sérsic $n$, both $\alpha$, $C$, $q,\epsilon,e$, $p$, $a,b$, $K$).
- [Structure] Remove the opening fundamental-plane fragment and the course-evaluation/final-exam paragraph, and replace "For problem 2/3" with a statement of what is being computed (potential of an NFW halo, tensor virial theorem with external potential).
- [Example] Add a worked beta value: for $\sigma=250\,\mathrm{km\,s^{-1}}$ and $kT=0.8$ keV ($\mu=0.62$), $\beta=\mu m_{\mathrm u}\sigma^2/kT\approx0.5$, which explains why fitted $\beta\lesssim0.5$ and why extrapolated luminosities depend on the outer radius.
- [Graph] Plot $I_X(R)/I_{X,0}=(1+R^2/r_c^2)^{-3\beta+1/2}$ on log-log axes for $R/r_c\in[0.1,100]$ and $\beta=0.4,0.5,0.67$; separately plot $L_X\propto T^2$ (self-similar) against the observed $\sim T^3$ (clusters) and $\sim T^5$ (galaxies) slopes.

### N3802

Note: [[Inverse Compton scattering and photon energy exchange|Inverse Compton scattering and photon energy exchange]]  
Priority: medium · Graph: yes · Manim: yes

The Lorentz-transformation steps, the $4\gamma^2$ maximum and the net power $\tfrac43\sigma_{\mathrm T}c\gamma^2\beta^2U_\gamma$ are correct and the numerical examples check out, but the opening fragment is undefined and the derivation stops before the promised mean energy boost.

- [Correctness] Physical quantities table describes $n$ as the number density of absorbers, but here $n(E)$ is the photon number density per unit energy; it also lists unused $y$ (Compton parameter) and $b$ (Doppler parameter) and omits $x$, $\gamma$, $\beta$, $\theta$, $E_\gamma$, $U_\gamma$ and $L_{\mathrm{IC}}$.
- [Structure] The opening Klein–Nishina formula uses $x$ without definition; define $x=h\nu'/(m_ec^2)$ in the electron rest frame and move this limit after the Thomson-condition discussion where it is needed.
- [Simplify] Finish the "Mean photon energy boost" section: dividing the two lines gives $\langle E_f-E_i\rangle/\langle E_i\rangle=\tfrac43\gamma^2\beta^2$, so $\langle E_f\rangle\simeq\tfrac43\gamma^2\langle E_i\rangle$ for $\gamma\gg1$, the angle-averaged result promised earlier.
- [Simplify] Replace the phase-space paragraph (four-volume and the homework claim that $dt'/E'$ is invariant) with the standard argument that $d^3p/E$ is invariant, so $n(E)\,dE\,d\Omega/E$ is invariant.
- [Graph] Plot $\sigma_{\mathrm{KN}}/\sigma_{\mathrm T}$ versus $x\in[10^{-3},10^3]$ on log-log axes with the Thomson limit 1 and the asymptote $\tfrac{3}{8x}(\ln2x+\tfrac12)$; add $E_f/E_i$ versus $\theta_i$ for $\beta=0.9$ and $\hat k_f'\cdot\hat k_e=1$.
- [Manim] Animate aberration: isotropic lab-frame photons appear concentrated head-on in the electron rest frame as $\beta$ grows, scatter there, and are beamed forward into a cone of half-angle $\sim1/\gamma$ on return to the lab frame.

### N3803

Note: [[Metric Tensor of the Universe|Metric Tensor of the Universe]]  
Priority: high · Graph: no · Manim: no

A short stub with three factual errors that duplicates the FRW metric section of another note and lacks the vault's required frontmatter, TLDR and quantities table.

- [Correctness] $1/H\approx14.787\times10^{12}$ yr is wrong by a factor of 1000; for $H=70\,\mathrm{km\,s^{-1}\,Mpc^{-1}}$, $1/H\approx13.97\times10^9$ yr (14.787 Gyr corresponds to $H\approx66$).
- [Correctness] The displayed matrix has spatial entries $a(t)$, but $g_{ij}=a(t)^2\delta_{ij}$ requires $a(t)^2$ on the diagonal.
- [Correctness] $a(t)=1+Ht$ is only the first-order Taylor expansion about today (with $t$ measured from now and $H=H_0$), not the expansion law; say so, and call $H_0$ the present Hubble parameter, not a constant.
- [Structure] Add the quoted frontmatter title, TLDR, Source and Physical quantities table, and either merge into or link to [[General relativity and the expanding-universe metric#Metric of the expanding universe]]; use one time convention ($x^0=t$ with $g_{00}=-c^2$, or $x^0=ct$ with $g_{00}=-1$) consistently.

### N3804

Note: [[Milky Way populations, clusters, and rotation|Milky Way populations, clusters, and rotation]]  
Priority: medium · Graph: yes · Manim: yes

The Oort-constant derivation is correct and well structured, but the descriptive part is list-like, some values are outdated, and the quantities table is full of conflicting entries.

- [Correctness] Physical quantities table gives $\omega$ as both orbital angular speed and argument of periastron, $\alpha$ as right ascension, parallax and scattering angle (here a triangle angle), $b$ as softening constant (here Galactic latitude), $A$ as extinction and Oort constant, $\theta$ as position angle (here cylindrical azimuth), $R$ as stellar radius in km (here Galactocentric radius); $\beta$ is missing. Prune to the note's symbols.
- [Correctness] Outdated values: star formation rate ≈3 $M_\odot\,\mathrm{yr^{-1}}$ (modern ≈1.6–2, Licquia and Newman 2015), thin-disk scale length ≈4 kpc (modern ≈2.5–3 kpc, Bland-Hawthorn and Gerhard 2016), $R_0=8$–8.3 kpc (GRAVITY 2019: 8.18 kpc); $A\simeq15$, $B\simeq-12$ remain consistent with Bovy (2017).
- [Simplify] Show the skipped step from $v_t\simeq v\sin\alpha-v_0\cos\ell$ to $v_t\simeq d[A\cos2\ell+B]$, and remove the figure-tick commentary callout.
- [Example] Close the final sentence numerically: $\omega_0=A-B\approx27\,\mathrm{km\,s^{-1}\,kpc^{-1}}$, so $v_0=\omega_0R_0\approx220\,\mathrm{km\,s^{-1}}$ for $R_0\approx8.2$ kpc, matching the quoted thin-disk speed.
- [Graph] Plot $v_r/d=A\sin2\ell$ and $v_t/d=A\cos2\ell+B$ for $\ell\in[0^\circ,360^\circ]$ with $A=15$, $B=-12\,\mathrm{km\,s^{-1}\,kpc^{-1}}$, and a second panel comparing Keplerian, solid-body and flat rotation curves.
- [Manim] Animate differential rotation in the Sun's frame: stars on circular orbits with a flat rotation curve, relative-velocity arrows around the Sun forming the quadrupole $\sin2\ell$ pattern that defines $A$.

### N3805

Note: [[Natural and Doppler broadening and the Voigt profile|Natural and Doppler broadening and the Voigt profile]]  
Priority: medium · Graph: yes · Manim: yes

The Lorentzian, Doppler and Voigt derivations and the main numbers (classical width 1.2×10^-4 Å, line-center 1.16×10^-14 cm²) are correct, but there are a few physics slips, symbol clashes and leftover course logistics.

- [Correctness] Microturbulence is defined by turbulent cells small compared with the photon mean free path (the unit-optical-depth length), not the collisional mean free path.
- [Correctness] ICM example: for an oxygen line at 0.65 keV (O VIII Lyα, $A\approx2.6\times10^{12}\,\mathrm{s^{-1}}$) the natural width is $\Delta\nu/\nu\sim10^{-5}$ or less, so a Doppler width $\sim10^{-3}$ is ~$10^2$ times the natural width, not "about ten times"; recompute.
- [Correctness] Symbol clashes: $A$ is both the Einstein coefficient and the atomic weight; the table lists $\alpha$ as fine-structure constant (here $\alpha_\nu$ is the absorption coefficient), $y$ as Compton parameter (here an integration variable) and $T$ as brightness temperature (here kinetic temperature).
- [Structure] Remove the final-exam and office-hours bullets and the duplicated Doppler-geometry figure; rename "Natural line broadening" (it holds oscillator strengths) and say the asymptotic formula is for Lyman lines while the table gives Balmer lines.
- [Graph] Plot area-normalized Gaussian, Lorentzian and Voigt $H(a,u)/\sqrt\pi$ for $a=0.01,0.1,1$ over $u\in[-10,10]$ on a logarithmic $y$ axis, showing the Doppler core and the $1/u^2$ damping wings.
- [Manim] Animate the convolution: a Gaussian slides along the Lorentzian and the overlap integral traces out the Voigt profile point by point.

### N3806

Note: [[Perturbed metrics and the cosmological Boltzmann equation|Perturbed metrics and the cosmological Boltzmann equation]]  
Priority: medium · Graph: no · Manim: no

The perturbed-geodesic and first-order Boltzmann equations match Dodelson and are carefully expanded, but there are two momentum variables, a weak gauge analogy, an inaccurate figure caption and an unfinished final section.

- [Correctness] The electromagnetic gauge analogy should be $A_\mu\to A_\mu+\partial_\mu\chi$; a constant shift $A_\mu\to A_\mu+C_\mu$ is a trivial special case and misrepresents gauge freedom.
- [Correctness] Fig. 22 caption: the first acoustic peak at $\ell\approx220$ corresponds to about 1° ($\theta\approx180^\circ/\ell\approx0.8^\circ$), not half a degree, and diffusion damping sets in from $\ell\gtrsim1000$.
- [Correctness] Physical quantities table lists $\phi$ as a scalar field, clashing with the azimuth in the line element, plus unused $F,m,a$, $A$, $\sigma$, $\eta$, radial speed $v$, $\gamma$, $\delta$ and $h$; prune.
- [Structure] The last section stops at the general $\Gamma^0_{\mu\nu}$; compute $\Gamma^0_{00}=\partial_t\Psi$, $\Gamma^0_{0i}=\partial_i\Psi$, $\Gamma^0_{ij}=\delta_{ij}a^2[H+2H(\Phi-\Psi)+\partial_t\Phi]$ and finish $dE/dt$ for massive particles, or cut the section.
- [Simplify] Use one momentum variable: the page switches from physical $p$ to $q=a\sqrt{\delta_{ij}P^iP^j}$ "written as $p$"; also retitle "Ionization and the Boltzmann equation", which mostly restates the metric.

### N3807

Note: [[Post-main-sequence evolution, mass loss, and shell burning|Post-main-sequence evolution, mass loss, and shell burning]]  
Priority: high · Graph: no · Manim: yes

Largely a transcription of sketches and margin remarks rather than an explanation, with several questionable physics statements and a quantities table merged from many unrelated notes.

- [Correctness] The helium flash occurs for stars up to ≈2 $M_\odot$ (1.8–2.2 depending on composition), not 1.5 $M_\odot$ as in the text and the ignition table.
- [Correctness] Mass loss: the modified wind momentum $\dot M v_\infty R^{1/2}$ scales as $L^{1/\alpha_{\mathrm{eff}}}$ with exponent ≈1.5–2 (Kudritzki and Puls 2000), not linearly in $L$.
- [Correctness] $t_{\mathrm{MS}}=M/\dot M=4\times10^6$ yr is a mass-loss timescale, not a main-sequence lifetime, so rename it (e.g. $\tau_{\dot M}$); the adjacent $t_{\mathrm{nuc}}\simeq2\times10^5$ yr for an $80M_\odot$ star is unexplained (its main-sequence lifetime is ≈3–4 Myr).
- [Correctness] Physical quantities table lists $\mu$ five times, $n$ three times, $Z$ as metallicity and proton number, two $\tau$, $a$, $K$, $s$ and others from other notes, including a link to a different note; reduce it to the symbols this note uses.
- [Structure] Remove the MACHO anecdote, "BS!" and tick-mark descriptions and rewrite as a narrative (core contraction, mirror principle, shell burning, helium ignition); state the assumed $L$ ratio of 10 in the Earth example (at the RGB tip $L\sim2000L_\odot$ gives ~1900 K) and note later HD 140283 ages (~12–13.7 Gyr) that remove the tension with 13.8 Gyr.
- [Manim] Move a point along a $1M_\odot$ track on the HR diagram with an inset cross-section showing core contraction, hydrogen shell burning, envelope expansion, the helium flash and the horizontal branch.

### N3808

Note: [[Radiative absorption, recombination, and Thomson scattering|Radiative absorption, recombination, and Thomson scattering]]  
Priority: medium · Graph: yes · Manim: yes

Optical depth, photoelectric scaling ($Z^4n^{-5}\omega^{-3}$, $\tau\simeq1$ at 1 keV for $5\times10^{21}\,\mathrm{cm^{-2}}$) and the Thomson setup are correct, but the Thomson derivation stops before its result and there are symbol clashes and admin remnants.

- [Correctness] Symbol clashes: $n$ is both number density and principal quantum number, and $\alpha$ is both the absorption coefficient and the fine-structure constant; also the dimensionless optical depth $\tau_\nu$ and $\alpha_\nu$ are colored with \energy{}, which misuses the semantic macro.
- [Structure] Finish the Thomson derivation: $\sigma_{\mathrm T}=L/S=\tfrac{8\pi}{3}(e^2/m_ec^2)^2\approx6.65\times10^{-25}\,\mathrm{cm^2}$ with $d\sigma/d\Omega=r_e^2\sin^2\Theta$; the "Homework. Prove the result for the general case" line refers to a result never stated.
- [Simplify] Remove "Problem set 2 is due April 30", the stray repeated $I=I_0e^{-\tau}$ equation after the K-edge paragraph, and the $n^{-3}$ versus $n^{-5}$ remark (Kramers gives $n^{-5}$).
- [Graph] Plot transmission $e^{-\tau}$ versus photon energy 0.1–10 keV using $\tau=2\times10^{-22}(E/\mathrm{keV})^{-8/3}N_{\mathrm H}$ for $N_{\mathrm H}=10^{20},10^{21},10^{22},10^{23}\,\mathrm{cm^{-2}}$ on log axes, a native version of Figs. 15 and 17.
- [Manim] Animate an electron driven along $x$ by a linearly polarized wave and radiating a dipole pattern $\propto\sin^2\Theta$, with no emission along the polarization axis.

### N3809

Note: [[Specific intensity and the radiative-transfer equation|Specific intensity and the radiative-transfer equation]]  
Priority: low · Graph: yes · Manim: yes

A clear, correct development of flux, specific intensity, its constancy along rays and the transfer equation, except for a sign error in the scattering term and leftover course logistics.

- [Correctness] Scattering term: the integral over incoming directions $\int\alpha^{\mathrm{scat}}(\Omega,\Omega')I_\nu(\Omega')\,d\Omega'/4\pi$ is the scattering-in gain and enters with a plus sign; the loss is $-\alpha^{\mathrm{scat}}_\nu I_\nu(\Omega)$, so isotropic scattering gives $dI_\nu/ds=-\alpha^{\mathrm{scat}}_\nu(I_\nu-J_\nu)$, not $-\alpha^{\mathrm{scat}}_\nu J_\nu$.
- [Correctness] Physical quantities table lists the fine-structure constant $\alpha$, which the note never uses, and omits $D$, $d$, $\theta_c$, $\Omega_{\mathrm{obs}}$ and $N$.
- [Structure] Remove the opening course-logistics section (office hours, due dates, slides policy) and the dangling "The notes mention plane-parallel and cylindrical symmetry".
- [Simplify] Add the source function $S_\nu=j_\nu/\alpha_\nu$, the form $dI_\nu/d\tau_\nu=-I_\nu+S_\nu$ and the constant-$S$ solution $I_\nu=I_\nu(0)e^{-\tau}+S_\nu(1-e^{-\tau})$ with its optically thin and thick limits.
- [Graph] Plot $I_\nu(\tau)/S_\nu$ for $\tau\in[0,5]$ with $I_\nu(0)/S_\nu=0,0.5,2$, showing relaxation to the source function.
- [Manim] Show an observer receding from a uniformly bright sphere: the cone of rays narrows so the flux falls as $(R/D)^2$ while the intensity along each ray stays constant.

### N3810

Note: [[Spectral lines and Einstein transition coefficients|Spectral lines and Einstein transition coefficients]]  
Priority: medium · Graph: yes · Manim: no

The Einstein-coefficient derivation, the line coefficients and the source function are correct and reasonably clear, but an off-topic opening, duplicated equations, meta-comments about the handwriting and a wrong quantities table get in the way.

- [Correctness] The Physical quantities table lists symbols the note never uses ($\alpha$ fine-structure constant, $\energy{S}$ incident flux, $\energy{I}$ frequency-integrated intensity, $\energy{U}$ radiation energy density, while the note uses $\energy{U}_{B,\mathrm{tot}}$ in erg). It also calls $\thermal{T}$ "brightness temperature", but here it is the excitation temperature of the Boltzmann populations, and calls $\energy{E}$ "radiant energy", but here it is the level energies $E_u,E_\ell$. Replace these with $\magnetic{B}$, $\mechanical{R}$, $N_u$, $N_\ell$, $g_u$, $g_\ell$ and $\nu_{u\ell}$.
- [Correctness] In "Line emission and photoabsorption coefficients", $n_u$ is "the number of electrons in the upper state per unit volume". It should be the number of atoms or ions in the upper level per unit volume. The subscript also switches between $\nu_{u\ell}$ (Spontaneous emission) and $\nu_{\ell u}$ (later sections); use one form throughout.
- [Structure] The opening Cygnus A lobe-energy paragraph belongs in the synchrotron/equipartition note, so move it there and start with "Formation of spectral lines". Its value checks out: $B^2/8\pi\cdot\tfrac43\pi R^3\approx1.3\times10^{60}$ erg. Also, the spontaneous-emission relations appear twice (around lines 31–48 and 54–62); merge them.
- [Simplify] Delete the remarks that "the handwritten line reverses the arrow/sign/omits $n_\ell$/uses $h$" (Spontaneous emission, Einstein relations, Fermi golden rule, thermal source function), or collapse them into one footnote. The displayed equations are already correct.
- [Intuition] After the Einstein relations, add the stimulated-to-spontaneous ratio in a blackbody field, $B_{u\ell}B_\nu/A_{u\ell}=1/(e^{h\nu/kT}-1)$. It explains why stimulated emission and the factor $1-e^{-h\nu/kT}$ in $\alpha_\nu$ dominate in the radio but are negligible for optical lines.
- [Graph] Plot $1/(e^{x}-1)$ and $1-e^{-x}$ against $x=h\nu/(k_BT)$ on log axes for $x\in[10^{-3},10]$. Mark the 21 cm line at $T=100$ K and Hα at $T=6000$ K.

### N3811

Note: [[Star formation and main-sequence lifetimes|Star formation and main-sequence lifetimes]]  
Priority: high · Graph: yes · Manim: no

The note is a fragmentary transcription with stray fragments and margin jokes, several wrong or outdated physics statements, a table copied from other notes, and no lifetime formula despite its title.

- [Correctness] In "Young stellar objects", classes 1 and 2 are called "stars with nuclear burning". Class I/II YSOs (protostars, classical T Tauri stars) are pre-main-sequence objects powered by accretion and contraction, plus some deuterium burning. Hydrogen fusion starts only at the ZAMS.
- [Correctness] In "Zero-age main sequence", the upper main sequence (O stars) is labelled $10^3$ yr. O-star main-sequence lifetimes are a few Myr ($\sim3$–$10\times10^6$ yr); state the correct value next to the transcription.
- [Correctness] Point 2 of "Life on the main sequence" is reversed. Stars below about 1.3–1.5 $M_\odot$ have cool envelopes with high H⁻/neutral-H opacity and therefore convective envelopes; more massive stars have radiative envelopes. Also, $Y_{\mathrm{primordial}}=0.23$ is outdated (BBN and Planck give $Y_p\approx0.245$), and the relation should read $Y_{\mathrm{primordial}}<Y_{\mathrm{init}}$.
- [Correctness] The Physical quantities table lists many symbols the note does not use ($D$, $a$, $K$, polytropic $n$, impact parameter $s$, nuclear radius, total lifetime $\tau$, $V$). It also repeats $\mechanical{M}$, $\tau$, $Z$ and $n$ with conflicting meanings. Rebuild it from the symbols actually used.
- [Structure] The note opens with leftover fragments: the $\delta_X$ scalings, an axion diagram and a DSNB inset. Move the $\delta_X$ result to the homology note and drop the rest. Despite the title, the note never gives a lifetime formula; add $t_{\mathrm{MS}}\approx10\,\mathrm{Gyr}\,(M/M_\odot)^{-2.5}$ from $t\propto M/L$ with $L\propto M^{3.5}$.
- [Graph] Make a log–log plot of $t_{\mathrm{MS}}=10\,\mathrm{Gyr}\,(M/M_\odot)^{-2.5}$ for $M=0.08$–$60\,M_\odot$, with a horizontal line at 13.8 Gyr and the 0.08 $M_\odot$ hydrogen-burning limit marked. Also clarify that "20 K lower" refers to Earth's equilibrium temperature: $T\propto L^{1/4}$ and $0.75^{1/4}\approx0.93$.

### N3812

Note: [[Stellar evolution and variable-star observations|Stellar evolution and variable-star observations]]  
Priority: medium · Graph: yes · Manim: yes

A readable survey of stellar evolution with mostly correct numbers (the burning-stage timescales, white dwarf, Crab, RR Lyrae and pp/CNO thresholds all check), but it has a few factual errors, misordered phases and an unrelated quantities table.

- [Correctness] "After the red giant branch" says that about half the core helium burns quickly in the helium flash. Only a few percent burns in the flash; the rest burns quiescently on the horizontal branch over about $10^8$ yr.
- [Correctness] In "Supernova classification", the Type I/II split is due to Minkowski (1941), not Zwicky. Zwicky later added Types III–V.
- [Correctness] The Physical quantities table lists extinction $A$, grain density $n$, declination $\delta$, transit probability $P$, eccentricity $e$, airmass $X$, the Oort constants and the metal yield, none of which appear in the note. Replace them with the symbols the note uses ($\thermal{T}$, $M_V$, pulsation period).
- [Structure] "Post-main-sequence evolution" describes the red giant before the sentence "enters the subgiant phase". Reorder to main sequence → subgiant → red giant branch, and remove the stray assignment line "Give a 15-minute overview of the paper".
- [Graph] Add $t_{\mathrm{MS}}\approx10\,\mathrm{Gyr}\,(M/M_\odot)^{-2.5}$ to "Main-sequence lifetime" and plot it log–log for $0.1$–$60\,M_\odot$ with a line at 13.8 Gyr. The crossing near $0.85\,M_\odot$ shows the "below about 0.8 $M_\odot$" claim directly.
- [Manim] Animate a 1 $M_\odot$ star moving along its HR-diagram track (MS → subgiant → RGB → helium flash → HB → AGB → planetary nebula → white-dwarf cooling), with a counter showing how long each phase lasts.

### N3813

Note: [[Stellar hydrostatic equilibrium and the virial theorem|Stellar hydrostatic equilibrium and the virial theorem]]  
Priority: medium · Graph: yes · Manim: no

The derivations of hydrostatic equilibrium, its variational form and the virial theorem are sound and the numbers check, but several displayed equations are still wrong, with the fix given only in a callout, and the variational section repeats itself.

- [Correctness] The displayed solar radius $R_\odot=6.96\times10^7$ km is wrong by a factor of 100; it should be $6.96\times10^5$ km $=6.96\times10^{10}$ cm. Fix the equation instead of only noting the error. The callout also links to "Internal energy", but the $GM^2/R$ scale it refers to is in "Equilibrium of the whole star".
- [Correctness] The $(\delta U)_{\mathrm{ad}}$ equation after "Integration by parts" still has a minus sign. The correct result is $(\delta U)_{\mathrm{ad}}=+\int(dP/dM_r)\,4\pi r^2\delta r\,dM_r$, as the callout admits; correct the displayed equation.
- [Correctness] In "Applications of the virial theorem", the displayed $K=\tfrac23(\gamma-1)U$ is wrong. From $2K=3\int P/\rho\,dM_r=3(\gamma-1)U$ it follows that $K=\tfrac32(\gamma-1)U$; write the correct form instead of keeping the wrong one with a callout.
- [Correctness] Symbol clashes: $\energy{W}$ means both work ($W=Fd$) and total energy, and $\mathrm{d}M_r$ means both the shell mass and the patch mass. The table defines $\energy{E}$ three ways, lists many unused symbols ($a$, $V$, C/O, $K$, impact parameter, polytropic $n$), and gives SI units for $G$ and $M_r$ in a CGS note.
- [Simplify] The first law and $\delta V_\rho$ are stated twice in "Internal energy"; keep one version. In the Kelvin–Helmholtz section, say which $q$ gives $t_{\mathrm{KH}}\approx2\times10^7$ yr: $(q/2)\times3.1\times10^7$ yr needs $q\approx1.3$, while uniform density ($q=3/5$) gives about $10^7$ yr.
- [Graph] Plot the coefficient $(3\gamma-4)/(3(\gamma-1))$ in $W=(\ldots)\Omega$ against $\gamma\in[1.1,2]$. Mark $\gamma=4/3$ (zero, marginally bound) and $\gamma=5/3$ (1/2) to show why "relativistic stars are bad".

### N3814

Note: [[Stellar luminosity functions, star counts, and selection bias|Stellar luminosity functions, star counts, and selection bias]]  
Priority: medium · Graph: yes · Manim: no

The star-count, Malmquist-bias, luminosity-function and IMF derivations are correct and clearly laid out (the 0.6 slope, the Gaussian bias box and Kroupa slopes check), but the quantities table is badly polluted and the note lacks a worked number.

- [Correctness] The Physical quantities table uses $\sigma$ for both the Stefan–Boltzmann constant and the magnitude dispersion, and $A$ for extinction and an Oort constant while the note uses $A(m)$ for star counts. It lists $\alpha$ three times, gives $\mechanical{d}$ in cm although the note uses pc, and includes unused entries (grain density, optical depth, right ascension, parallax, scattering angle, count rate). Rebuild it.
- [Example] After the Malmquist box, work the uniform-density case: $d\ln A/dm=0.6\ln10\approx1.38$, so $\langle M\rangle_m-M_0\approx-1.38\sigma^2$. For example, $\sigma=0.5$ mag gives a 0.35 mag bias toward brighter stars.
- [Intuition] Link the slope of 0.6 to the radio source-count figure: in flux units the same Euclidean result is $N(>S)\propto S^{-3/2}$. Add that departures from this slope reveal evolution or the edges of the population.
- [Structure] The opening supernova-progenitor paragraph and Fig. 52 (a luminosity–temperature curve) have nothing to do with luminosity functions; move or drop them. Fig. 61 (exponential star formation history) has no accompanying text.
- [Example] In the IMF section, compute an example: a Salpeter IMF over 0.1–100 $M_\odot$ gives about 0.0074 core-collapse progenitors (above 8 $M_\odot$) per solar mass formed, i.e. one per roughly 135 $M_\odot$.
- [Graph] Plot the Gaussian $\Phi(M)$ ($M_0=0.6$, $\sigma=0.5$) together with the magnitude-limited sample distribution $\propto\Phi(M)\,10^{-0.6M}$, which is shifted by $-1.38\sigma^2$. In a second panel, plot the Salpeter and Kroupa IMFs log–log over 0.01–100 $M_\odot$.

### N3815

Note: [[Stellar pressure balance and degenerate matter|Stellar pressure balance and degenerate matter]]  
Priority: medium · Graph: yes · Manim: no

The degenerate-star pressure balance is correct; I re-derived $R_{\mathrm{eq}}$, the $(81\pi^2/512)^{1/3}$ factor, the neutron-star radius and the ultrarelativistic $E_F$. However, an unrelated fusion block breaks the derivation, and the instability argument lacks numbers.

- [Structure] The section "Stellar fusion and pressure balance" (pp-chain and triple-alpha energies, which are correct) interrupts the derivation between setting up $P_g$ and $P_{\mathrm{deg}}$ and solving for $R$. Move it to the end or to a burning note.
- [Correctness] The table lists unrelated entries (amount $n$ in mol, Landé $g$, internal degeneracy $g$, molecular mass $M$, $P_{\mathrm{int}}$ and $P_{\mathrm{ext}}$, Boltzmann-weight $E$) and omits $m_N$, $m_e$, $N_e$ and $E_{\mathrm{tot}}$. $\mechanical{V}$ (volume) and $\energy{V}_g$ (gravitational energy) also clash; rename $V_g$ to $E_{\mathrm{grav}}$, which later sections already use.
- [Example] Give the numbers: $R_{\mathrm{eq}}\approx7.6\times10^3$ km for $N=10^{57}$ and $Y_e=1/2$, and $R_{\mathrm{NS}}\approx13$ km. Point out the mass–radius law $R\propto N^{-1/3}\propto M^{-1/3}$: heavier white dwarfs are smaller.
- [Intuition] In "Instability at small radius", spell out the argument. Nonrelativistically $E_F\propto R^{-2}$, which beats gravity at small $R$ and gives an energy minimum. Ultrarelativistically $E_F\propto R^{-1}$, the same as gravity, so above the threshold $N$ there is no minimum. Quote $M_{\mathrm{Ch}}\approx1.44\,(2/\mu_e)^2M_\odot$ instead of the loose "1.26, revised 1.44".
- [Simplify] Replace the handwritten $G^{-1}\sim(10^{18}\,\mathrm{GeV})^2$ remark with $G^{-1/2}=M_{\mathrm{Pl}}=1.22\times10^{19}$ GeV, which gives $N\sim(M_{\mathrm{Pl}}/m_N)^3\approx2\times10^{57}$.
- [Graph] Plot $E_{\mathrm{tot}}(R)=aN^{5/3}/R^2-bN^2/R$ in units of the minimum for three values of $N$, showing that the equilibrium radius shrinks as $N^{-1/3}$. Overlay the ultrarelativistic case $E_{\mathrm{tot}}\propto(cN^{4/3}-bN^2)/R$, which has no minimum.

### N3816

Note: [[Stellar remnants and neutron-capture nucleosynthesis|Stellar remnants and neutron-capture nucleosynthesis]]  
Priority: high · Graph: yes · Manim: yes

The note is a loose transcription full of personal asides and sketch descriptions. Its numbers mostly check (the $10^{53}$ erg TNT comparisons, the α-ladder and the s-process neutron sources), but it has a mislabelled heading, several physics slips and a copied quantities table.

- [Correctness] The second heading, "Late stages below the 6–10 solar mass range", covers carbon, neon, oxygen and silicon burning and iron-core collapse, which happen only in stars above about 8–10 $M_\odot$. Rename it "Late stages above the 6–10 solar mass range".
- [Correctness] The step $^{56}$Ni → $^{56}$Fe is labelled "double beta decay". It is two successive electron-capture/β⁺ decays: $^{56}$Ni → $^{56}$Co ($t_{1/2}=6.1$ d), then $^{56}$Co → $^{56}$Fe (77 d). These decays power supernova light curves.
- [Correctness] Forbidden lines in planetary nebulae are excited by collisions with free electrons, not "collisions between atoms". In the abundance table, "17 C" and "18 C" are almost certainly $^{17}$O and $^{18}$O, which the CNO cycle produces alongside $^{13}$C, $^{14}$N and $^{19}$F.
- [Correctness] The quantities table is mostly copied from other notes (force-sketch $M$, virial $t$, $D$, $a$, $c$, $K$, polytropic $n$, impact parameter, nuclear radius, reduced mass). Keep only the symbols used here: $\tau_{\mathrm{dyn}}$, $\rho_c$, $T_c$, $X_i$, $\Phi$, $Z$, $N$, $\delta m_{np}$, $S_\gamma$. Also give $\tau_{\mathrm{dyn}}$ a number: $1/\sqrt{G\rho}\approx0.04$–0.1 s for $\rho\sim10^9$–$10^{10}$ g cm⁻³.
- [Graph] Plot the binding energy per nucleon $B/A$ from the semi-empirical mass formula for $A=1$–240, marking the peak near $^{56}$Fe/$^{62}$Ni (about 8.8 MeV) and $^{238}$U. The handwritten sketch has no vertical scale.
- [Manim] Animate the r-process path on an $N$–$Z$ chart: rapid neutron captures push nuclei right to the drip line, waiting points stall at magic $N$, and β⁻ decays then carry the nuclei diagonally back to stability, building the abundance peaks.

### N3817

Note: [[Stellar spectroscopy and exoplanet detection|Stellar spectroscopy and exoplanet detection]]  
Priority: medium · Graph: yes · Manim: yes

A clear observational survey whose exoplanet numbers check (Proxima b 37 mas, Keck 50 mas, transit probabilities and depths, the $K$ formula and RV table), with one physics error about the Balmer jump, symbol clashes and a polluted table.

- [Correctness] "Stellar spectra" puts the Balmer jump near 3800 Å and blames neutral hydrogen in cooler stars. The jump is at the Balmer limit, 3646 Å, and comes from bound–free absorption out of the $n=2$ level of hydrogen. It is strongest in A stars (about $10^4$ K), not in cooler stars; the roughly 4000 Å break of cool stars is a different feature, caused by metal lines and Ca H&K.
- [Correctness] Symbol clashes: $X$ is both the hydrogen mass fraction and the airmass, and $P$ is both the transit probability and the period (Fig. 47). In the table, $\mechanical{D}$ is both the aperture and a "distance in pc", $\lambda$ is both wavelength and a convergent-point angle, and $\sigma$ is both the Stefan–Boltzmann constant and a noise term. The table also lists unused symbols ($b$ softening, zenith angle $Z$, RA and Dec, proper motion, Oort $A$, scattering angle, crossing time, metal yield) and calls $\mechanical{a}$ a "binary separation" instead of the planet's semimajor axis.
- [Simplify] In "Line broadening", name pressure (collisional) broadening as the reason dwarfs have broader lines, and give the thermal Doppler width $\Delta\nu/\nu_0=\sqrt{2kT/(mc^2)}$ instead of the generic $v_r/c$. Add Hδ at 4102 Å to the Balmer table.
- [Simplify] In "Differential photometry", write the photon-limited result as $\sigma_{\mathrm{rel}}/F_{\mathrm{rel}}\simeq1/\sqrt{F_T}$; it is numerically equal to the current $1/N_T$ but clearer. Also clarify the "inherent radial velocity stability of about 1 km/s": stellar jitter is about 1 m/s, while about 1 km/s is the per-pixel or resolution-element scale.
- [Graph] Plot $K=28.4\,\mathrm{m\,s^{-1}}\,(m\sin i/M_J)\,(P/1\,\mathrm{yr})^{-1/3}(M_\star/M_\odot)^{-2/3}$ against orbital period from 1 d to $10^4$ d for Earth, Neptune and Jupiter masses, with a horizontal line at 1 m/s. The curves reproduce the radial-velocity table (Jupiter analog 12.5 m/s, Earth analog 0.09 m/s).
- [Manim] Show a planet orbiting its star while the transit light curve and the star's radial-velocity curve are drawn in sync. This makes clear that the transit happens at a zero crossing of the radial velocity and that edge-on orbits are needed.

### N3818

Note: [[Stellar structure equations, homology, and energy transport|Stellar structure equations, homology, and energy transport]]  
Priority: high · Graph: yes · Manim: no

The core results are correct (uniform-density $T$, $P_c$, $T_c$, $\mu$ formulas, the homology matrix and its determinant, the $\delta_X$ scalings), but the very long note has a wrong sound-crossing coefficient, a dimensionally wrong $\sigma_8$ formula, unrelated cosmology sections and a bloated table.

- [Correctness] "Sound waves": from $\Pi=(12R^3/(\Gamma_1GM))^{1/2}$ and $R^3/GM=3/(4\pi G\bar\rho)$ one gets $\Pi=(9/(\pi\Gamma_1G\bar\rho))^{1/2}\approx1.69/\sqrt{\Gamma_1G\bar\rho}$, not $\sqrt{12}/\sqrt{G\bar\rho}$. For the Sun this is about 0.064 d; the quoted 0.04 d corresponds to a coefficient of 1.
- [Correctness] $\sigma_8^2=\int P(k)W^2\,dk$ is dimensionally wrong; it should be $\sigma_8^2=\frac{1}{2\pi^2}\int P(k)W^2(kR)\,k^2\,dk$ with $R=8\,h^{-1}$ Mpc. Also, the "Diffusion equation" display under "Homologous stars" still uses $d/dr$. With the $(4\pi r^2)^2$ factor and no $\rho$, the derivative must be $d/dM_r$; fix the equation, not just the callout.
- [Correctness] Table clashes: $\energy{W}$ is listed as both work and total energy; $\energy{E}$ as specific energy, as energy density (its meaning here) and as electron energy; $\energy{\epsilon}$ also as collision energy; and $\mu$ with four meanings. The table also carries many unused entries (nuclear radius, impact parameter, $h$, polytropic $K$ and $n$, neutrino emission time); prune it.
- [Intuition] In the homology matrix, state which inputs give the example exponents. $\chi_\rho=\chi_T=\lambda=1$ with Thomson opacity ($n=s=0$) and CNO burning ($\nu=15$) gives $(\alpha_R,\alpha_\rho,\alpha_L,\alpha_T)=(7/9,-4/3,3,2/9)$. Kramers opacity with pp burning ($\nu=4$) gives $\alpha_L\approx5.5$, matching the low-mass value of 5.0. Also note that the $\delta_X$ result $L'\propto y^{-1/2}$ assumes Kramers opacity.
- [Structure] Move "Axions and neutrino magnetic moments", the $\sigma_8$ and power-spectrum material and "Warm dark matter streaming" to a cosmology or particle note. Replace the opening "Dynamical times" display ($W=\Omega/2\approx-GM^2/R$, which mixes $\gamma=4/3$ and $5/3$) with a clean derivation of $\tau_{\mathrm{dyn}}\sim(G\bar\rho)^{-1/2}\approx0.5$–1 h.
- [Graph] Plot the constant-density profiles $M_r/M=x^3$, $P/P_c=1-x^2$ and $T/T_c=1-x^2$ against $x=r/R$. In a second panel, plot log–log homology lines $L\propto M^{3}$, $L\propto M^{5.5}$ and $R\propto M^{0.78}$ over 0.1–50 $M_\odot$.

### N3819

Note: [[Synchrotron populations, self-absorption, and equipartition|Synchrotron populations, self-absorption, and equipartition]]  
Priority: medium · Graph: yes · Manim: yes

The synchrotron population, polarization, self-absorption and equipartition derivations are correct (spectral index, $\Pi=72\%$, $\nu^{5/2}$, $B^{2/7}$ and the 3/4 and 7/4 energy ratios all check), but one symbol is reused, a table entry is doubtful, and a homework digression interrupts the note.

- [Correctness] Symbol clash: $C$ is the normalization in $n(E)=CE^{-p}$ and also the band constant in $U_e=CL_{\mathrm{sync}}^{\mathrm{tot}}B^{-3/2}$; rename the second one, e.g. $C_{12}$. The table lists $\alpha$ fine-structure constant, $\energy{S}$ incident flux, $\energy{U}$ radiation energy density and brightness $T$, defines $\energy{E}$ as radiant energy (here it is electron energy), and omits $p$, $k$, $V$, $\epsilon(\omega)$, $n(E)$ and the pitch angle $\alpha$.
- [Correctness] In the cluster-field table, a Coma "Faraday rotation" value of about 0.2 μG matches the inverse-Compton (hard X-ray) estimate. Faraday rotation gives several μG, about 5 μG in the centre (Bonafede et al. 2010). Relabel the column or the values, and check "A366" against the source, as it looks like a misread cluster name.
- [Structure] "Review of homework problem 3" (cluster X-ray $h$-scalings, which check out) is unrelated to synchrotron emission; move it to the bremsstrahlung/cluster note. The definition of $\epsilon(\omega)$ is also stated twice in the first section.
- [Example] Finish the equipartition section with a numerical case, moving in the Cygnus A estimate that now sits in the spectral-lines note: $B_{\mathrm{eq}}\sim100\,\mu$G in lobes of radius 30 kpc gives $U_B\sim10^{60}$ erg, so $U_{\mathrm{tot}}\approx\tfrac73U_B$.
- [Graph] Make a log–log plot of a homogeneous self-absorbed source, $I_\nu\propto(\nu/\nu_1)^{5/2}\left[1-\exp(-(\nu/\nu_1)^{-(p+4)/2})\right]$ with $p=2.5$ and $\nu/\nu_1$ from 0.01 to 100. Mark the slopes $+5/2$ and $-0.75$.
- [Manim] Animate an electron gyrating with $\gamma\gg1$ whose $1/\gamma$ beaming cone sweeps past an observer, producing a short pulse of width $\sim1/(\gamma^2\omega_B)$. This shows directly why $\omega_c\propto\gamma^2$.

### N3820

Note: [[The collisionless Boltzmann equation and Jeans moments|The collisionless Boltzmann equation and Jeans moments]]  
Priority: low · Graph: yes · Manim: yes

A careful, correct derivation of the Vlasov equation, the continuity and Jeans equations, the spherical Jeans mass and the isothermal sphere, with good explanations; the main defect is a quantities table copied from other notes.

- [Correctness] The Physical quantities table conflicts with the note. It uses $\mu$ for both surface brightness and mean particle mass, $n$ for both Sérsic index and number density, and $\beta$ for both the velocity anisotropy and an "isothermal beta-model exponent". It describes $\rho_0$ as a deprojection normalization and lists unused $V$, $q$, $\epsilon$, $e$, $p$, $\delta$, $a$ and $b$. Prune it.
- [Simplify] In "The isothermal sphere", state that $\Phi_0=\Phi(0)$, so $\Psi(0)=0$ and $\rho(0)=\rho_0$. Give the dimensionless form in $\rho/\rho_0$ and $r/r_0$, and mention the singular solution $\rho=\sigma^2/(2\pi Gr^2)$ as the large-$r$ asymptote, which gives a flat rotation curve with $v_c=\sqrt2\,\sigma$.
- [Example] After the spherical Jeans mass formula, work an example: a tracer with $\nu\propto r^{-3}$ and constant $\overline{v_r^2}=\sigma^2$ gives $M(<r)=\sigma^2r(3-2\beta)/G$. Changing $\beta$ from 0 to 0.5 then lowers the inferred mass by 33%, which makes the mass–anisotropy degeneracy concrete.
- [Graph] Plot the numerical isothermal-sphere solution $\log(\rho/\rho_0)$ against $\log(r/r_0)$ for $r/r_0$ from 0.01 to 1000, together with the singular $r^{-2}$ asymptote, showing the core and the damped oscillations about it.
- [Manim] Animate a blob of points in $(x,v)$ phase space evolving in an anharmonic potential. It shears into a thin filament while its area stays constant, which illustrates $df/dt=0$ and phase mixing.

### N3821

Note: [[The fundamental plane of elliptical galaxies|The fundamental plane of elliptical galaxies]]  
Priority: medium · Graph: yes · Manim: yes

The virial derivation of the fundamental plane, the $D_n$ aperture algebra and the $M/L$ tilt exponents are correct (I reproduced 0.37/0.11 and 0.16/−0.14), but the note starts mid-topic, includes exam logistics, and has a missing $h^{-1}$ and a misstated exponent range.

- [Correctness] The $D_n$–σ normalization is missing a factor: Schneider eq. 3.35 reads $D_n/(h^{-1}\,\mathrm{kpc})=2.05\,(\sigma_0/100\,\mathrm{km\,s^{-1}})^{1.33}$. Restore the $h^{-1}$.
- [Correctness] With $1/\gamma\approx0.83$ and $b$ between $-0.85$ and $-0.75$, the residual exponent $b+1/\gamma$ lies between $-0.02$ and $+0.08$, not between $\pm0.05$. In the table, $r_g$ is listed both as gravitational radius and as gyroradius, and $V$, $n$, $q$/$\epsilon$/$e$ and $p$ are unused.
- [Structure] The note opens mid-derivation, replacing $\sigma_0$ and $v_0$ and using an undefined $\delta$; move that paragraph to the elliptical-kinematics note or define the quantities. Remove the "Oral final exam" block, and fix the duplicated link text "the [[#The fundamental plane|the section on …]]".
- [Intuition] Quantify the tilt: the virial theorem predicts $(a,b)=(2,-1)$, while observations give about $(1.5,-0.75)$. This implies $M/L\propto L^{0.16\text{–}0.37}$, so $M/L$ rises by a factor of about 2–5 over two decades in $L$, which shows why stellar populations alone are debated as the explanation.
- [Graph] Make a 3D plot of the observed plane $\log R_e=1.49\log\sigma_0-0.75\log I_e+c$ and the virial plane $\log R_e=2\log\sigma_0-\log I_e+c'$, for $\sigma_0=100$–400 km/s and two decades in $I_e$, to show the tilt.
- [Manim] Rotate a 3D cloud of galaxies scattered about the plane from face-on to edge-on. This shows that the scatter is thin only in one projection and that $D_n$–σ is a nearly edge-on view.

### N3822

Note: [[Thermal bremsstrahlung and cluster hydrostatic equilibrium|Thermal bremsstrahlung and cluster hydrostatic equilibrium]]  
Priority: medium · Graph: yes · Manim: yes

A clear derivation of free–free emission in the impulse approximation and of cluster hydrostatic equilibrium, with correct ICM scales (mean free path, gyroradius, pressures, sound-crossing time), but one wrong correction factor and a nearly empty, mislabelled quantities table.

- [Correctness] In "Free–free cooling function and Gaunt factor", matching the impulse-approximation result to R&L eq. 5.14a leaves a factor of $\sqrt3/4\approx0.43$, not $3\pi/(2\sqrt3)\approx2.72$. Check: $32\pi^3(2\pi)^{-3/2}m_e^{-3/2}\big/\left[32\pi m_e^{-1}(2\pi/(3m_e))^{1/2}\right]=\sqrt3/4$. Correct the bracketed factor.
- [Correctness] The Physical quantities table lists $b$ as the Doppler parameter, but the note uses $b$ as the impact parameter. The Compton $y$, $\energy{U}$ radiation energy density and "brightness" $T$ are unused or wrong here. Add $n_e$, $n_i$, $Z$, $v_0$, $\ell_e$, $r_g$, $t_{\mathrm{eq}}$, $P$, $\rho$, $\Phi$, $\mu$, $m_a$ and $\bar g_{\mathrm{ff}}$.
- [Intuition] Explain why the spectrum is flat: a pulse of duration $b/v_0$ has a flat Fourier spectrum up to $\nu\sim v_0/(2\pi b)$. The exact classical integral over $b$ gives $\ln(b_{\max}/b_{\min})$, and the Gaunt factor replaces this log; this makes "close to the quantum result" concrete.
- [Example] Add an ICM luminosity estimate: $n_e\approx n_i=10^{-3}$ cm⁻³, $T=10^8$ K and $\bar g=1.2$ give $\epsilon_{\mathrm{ff}}\approx1.7\times10^{-29}$ erg s⁻¹ cm⁻³, so a uniform sphere of radius 1 Mpc emits about $2\times10^{45}$ erg/s. Also note that the 20% ICM mass share is on the high side; typical values are 12–15%.
- [Graph] Plot $\epsilon_\nu\propto T^{-1/2}e^{-h\nu/kT}$ against $h\nu$ for $kT=2$, 5 and 10 keV on log–log axes from 0.1 to 50 keV, at fixed $n_en_i$, showing the flat part and the exponential cutoff.
- [Manim] Animate an electron passing an ion on a straight line, while plotting its acceleration pulse against time and the Fourier spectrum of that pulse, which is flat up to $v_0/b$ and then cut off.

### N3823

Note: [[Thermal source functions and optically thick spectra|Thermal source functions and optically thick spectra]]  
Priority: low · Graph: yes · Manim: no

A correct, readable treatment of the formal solution, the cavity argument, Kirchhoff's law and the free–free radio turnover; the $\alpha_\nu^{\mathrm{ff}}$ formula and the scalings check, and only the table and some framing need work.

- [Correctness] The table lists $\alpha$ fine-structure constant, $\energy{S}$ incident flux and $\energy{I}$, which are unused, and calls $\thermal{T}$ brightness temperature, though here it is the wall or plasma temperature. It omits $L$ (path length), $Z$, $n_e$, $n_i$, $\bar g_{\mathrm{ff}}$, $\delta Q$ and the entropy $\thermal{S}$, which also visually clashes with the source function $\energy{S}_\nu$; rename the entropy (e.g. $S_{\mathrm{ent}}$).
- [Structure] The opening Perseus nonthermal-pressure sentence and Figs. 50–51 belong in the cluster/bremsstrahlung note. The heading "Thermal bremsstrahlung absorption" introduces general source-function material; rename it to something like "Source function and formal solution".
- [Simplify] Remove the remarks "The source writes $\nu^3$ … / $T^{1/2}$ …"; the displayed equations are already correct.
- [Example] Add the turnover frequency: setting $\tau_\nu=1$ gives $\nu_t\propto T^{-0.64}\,\mathrm{EM}^{0.48}$. For an HII region with $T=10^4$ K and $\mathrm{EM}=10^6$ pc cm⁻⁶, $\nu_t\approx0.6$ GHz.
- [Graph] Plot $I_\nu=B_\nu(T)(1-e^{-\tau_\nu})$ with $\tau_\nu=(\nu/\nu_t)^{-2.1}$ and $\nu_t=0.6$ GHz, log–log over 0.05–50 GHz, showing the $\nu^2$ rise and the flat optically thin part. In a second panel, plot $I(\tau)$ for $I_0=0$, $S/2$ and $2S$ relaxing to $S$.

### N3824

Note: [[Thermonuclear rates and hydrogen-burning chains|Thermonuclear rates and hydrogen-burning chains]]  
Priority: high · Graph: yes · Manim: no

The core nuclear-rate physics is right ($\pi\bar\lambda^2=0.657$ b/($\mu\epsilon$), $\eta=0.1574\ldots$, the partial-wave annulus, $\epsilon_{\mathrm{grav}}$, a Gamow peak of about 30 keV), but the CNO chain is wrong, the rate prefactor has the wrong mass power, symbols clash, and many personal asides clutter the note.

- [Correctness] In "CNO cycles", the fourth reaction must be $^{14}$N + p → $^{15}$O + γ. The cycle then needs $^{15}$O → $^{15}$N + e⁺ + ν and $^{15}$N + p → $^{12}$C + α to close; write out the full chain.
- [Correctness] Nonresonant rate prefactor: $(8/\pi m)^{1/2}(kT)^{-3/2}$, with $S$ in MeV b and energies in MeV, gives $1.6\times10^{-15}\,\mathrm{cm^3\,s^{-1}}\,S/[\mu^{1/2}(kT)^{3/2}]$. The power is $\mu^{1/2}$, not $\mu$, and $S$ (taken as constant) must multiply the integral.
- [Correctness] $r_{\alpha\beta}=n_\alpha n_\beta\langle\sigma v\rangle_{\alpha\beta}$ should use the target density $n_X$, as in the line before it, because $\beta$ labels the outgoing particle.
- [Correctness] Symbol clashes: $\energy{\epsilon}$ is the energy-generation rate at the top and the collision energy later; $\Gamma$ denotes both the adiabatic exponents and the resonance widths; $\mu$ is both mean molar mass and reduced mass in amu; $P_i$ sits next to pressure $P$. Rename, for example collision energy $E$. The table also carries many unused entries ($a$, $c$, streaming $v$, neutron-drip $Z$/$N$, polytropic $K$/$n$).
- [Structure] Remove the margin asides ("Texas accent", "Communism", "Monster salary", EM drive and others). Clarify that $Q_{\mathrm{eff,pp}}\approx13$ MeV is per pp reaction, i.e. half of the 26.2 MeV released per $^4$He.
- [Graph] Plot the Gamow peak: $e^{-E/kT}$, $e^{-b/\sqrt E}$ with $b=31.28\,Z_1Z_2\,\mu^{1/2}\,\mathrm{keV^{1/2}}$, and their product for $^{12}$C + p at $T_6=20$ and 22, over $E=0$–100 keV. The peak sits near 29 keV, and comparing the two areas shows the $T^{\sim16}$ sensitivity.

### N3825

Note: [[Variable stars and stellar pulsation|Variable stars and stellar pulsation]]  
Priority: high · Graph: yes · Manim: yes

Mostly a list of class names, sketch descriptions and margin remarks with almost no physics, plus several factual slips in the class table.

- [Correctness] The table gives Mira periods as 100–300 days. Mira variables span about 80–1000 d, and Mira itself has $P\approx332$ d, so the opening "one to two years" for Mira is also too long.
- [Correctness] β Cephei stars pulsate mainly in low-order p (and mixed) modes driven by the iron-opacity κ mechanism; only γ Doradus stars are g-mode pulsators. ZZ Ceti stars are specifically hydrogen-atmosphere (DAV) white dwarfs; helium- and C/O-atmosphere pulsators are the DBV (V777 Her) and GW Vir classes.
- [Structure] The opening Kr/Rb neutron-capture sketch and "Murdered by Burbidge" belong in the nucleosynthesis note. The quantities table lists unrelated symbols ($a$ twice, $K$, $h$, neutron-drip $Z$ and $N$, total lifetime $\tau$).
- [Intuition] Add the physics the note lacks: the κ mechanism, in which the He II ionization zone traps heat on compression and acts as a valve, and the period–mean-density relation $\Pi\sqrt{\bar\rho/\bar\rho_\odot}\approx Q$ with $Q\approx0.03$–0.04 d for Cepheids.
- [Graph] Plot the Leavitt law $M_V=-2.43(\log P-1)-4.05$ for classical Cepheids with $P=1$–100 d. Add Type II Cepheids about 1.5 mag fainter and RR Lyrae at $M_V\approx0.6$, $P\approx0.5$ d.
- [Manim] Animate a radially pulsating star whose ionization layer changes opacity, together with synchronized radius and light curves, to show the driving and the phase lag between maximum light and minimum radius.
