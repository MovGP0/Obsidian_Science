---
title: "Note Improvement Tracker – 02 Physics/05 Relativity and Gravitation/03 Relativists Toolkit"
---

> [!TLDR]
> This note tracks the review of the 187 notes in `02 Physics/05 Relativity and Gravitation/03 Relativists Toolkit`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 55 possible errors or notation conflicts. 55 of them are verified (53 fixed, 2 partly); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N3296|N3296]] 2.1 Energy conditions: Table 2.1, weak row: "$\rho+p_i>0$" should be $\rho+p_i\ge0$ (a cosmological constant with $\rho=-p>0$ satisfies the WEC with $\rho+p=0$). **Fixed:** Changed to rho+p_i>=0 (book typo; Lambda vacuum has rho+p=0); also converted note to LF without BOM.
- [[#N3298|N3298]] 2.1.2 Weak energy condition: "$0\le\rho+a^2p_1<\rho+p_1$" holds only for $p_1>0$; the correct argument lets $a^2\to1$ and gives $\rho+p_1\ge0$, so Eq. (2.7) should read $\rho\ge0$, $\rho+p_i\ge0$ (not $>0$). **Fixed:** Replaced argument with the limit a^2 to 1 giving rho+p_1>=0 and changed Eq. 2.7 to rho+p_i>=0.
- [[#N3302|N3302]] 2.1.6 Violations of the energy conditions: "recent work suggests" and "Its status in curved spacetimes is not yet fully settled ... as of 1994" are outdated: the ANEC has since been proven in flat spacetime for general unitary Lorentz-invariant QFTs (Faulkner, Leigh, Parrikar, Wang 2016; Hartman, Kundu, Tajdini 2017); add a dated update note. **Fixed:** Added a dated note callout on the flat-spacetime ANEC proofs (Faulkner et al. 2016; Hartman et al. 2017) and kept the book text.
- [[#N3302|N3302]] 2.1.6 Violations of the energy conditions: $\energy{\hbar}$ is coloured as an energy, but $\hbar$ is an action (J s, or m$^2$ in geometrized units); use the appropriate macro group or leave it uncoloured. **Fixed:** Removed the energy macro from hbar in the equation and table (action has no macro group).
- [[#N3304|N3304]] 2.2.1 Two-dimensional medium: The physical-quantity table lists $\mechanical{B}_{ab}$, $\mechanical{r}_1$, and $\mechanical{\phi}'$, which this note never uses; trim the table to the symbols in the note. **Fixed:** Removed B_ab, r_1 and phi' from the table rows.
- [[#N3305|N3305]] 2.2.2 Expansion: The table lists $\mechanical{B}_{ab}$ and $\mechanical{\phi}'$, which this note does not use; remove them. **Fixed:** Removed B_ab and phi' from the table rows.
- [[#N3306|N3306]] 2.2.3 Shear: The table lists $\mechanical{B}_{ab}$, $\mechanical{\sigma}_{ab}$, and $\mechanical{\phi}'$, which this note does not use; remove them. **Fixed:** Removed B_ab, sigma_ab and phi' from the table rows.
- [[#N3307|N3307]] 2.2.4 Rotation: The table lists $\mechanical{B}_{ab}$, $\mechanical{r}_1$, and $\mechanical{\omega}_{ab}$, which this note does not use; remove them. **Fixed:** Removed B_ab, r_1 and omega_ab from the table rows.
- [[#N3313|N3313]] 2.3.3 Frobenius' theorem: "$\omega_{\alpha\beta}=-\Phi_{[\alpha}\mu_{,\beta]}$" is missing a comma; it should be $-\Phi_{,[\alpha}\mu_{,\beta]}$. **Fixed:** Wrote -Phi_{,[alpha} mu_{,beta]}.
- [[#N3314|N3314]] 2.3.4 Raychaudhuri's equation: The physical-quantity table lists $\mechanical{\theta}_0$, $\mechanical{u}^t$, $\mechanical{u}^r$, $\mechanical{u}^\theta$, $\mechanical{u}^\phi$, and $\mechanical{u}_t$, none of which appear in this note; trim it. **Fixed:** Removed theta_0, u^t, u^r, u^theta, u^phi, u_t from the table.
- [[#N3315|N3315]] 2.3.5 Focusing theorem: The physical-quantity table lists $\mechanical{u}^t$, $\mechanical{u}^r$, $\mechanical{u}^\theta$, $\mechanical{u}^\phi$, and $\mechanical{u}_t$, which this note never uses; trim it. **Fixed:** Removed u^t, u^r, u^theta, u^phi, u_t from the table.
- [[#N3316|N3316]] 2.3.6 Example: The table lists $\mechanical{u}^r$, $\mechanical{u}^\theta$, $\mechanical{u}^\phi$, $\mechanical{u}_t$, $\mechanical{\theta}_0$, and $\mechanical{B}^{\alpha\beta}$, none of which appear in this note; trim it. **Fixed:** Removed them (and the also unused u^t) from the table.
- [[#N3317|N3317]] 2.3.7 Another example: Symbol clash: $\mechanical{\theta}$ is both the polar angle in $\mathrm d\Omega^2$ and the expansion scalar, and the table lists both meanings; rename the angle (for example $\vartheta$) or add an explicit warning. **Fixed:** Renamed the polar angle to vartheta in dOmega^2, u^vartheta and the table.
- [[#N3318|N3318]] 2.3.8 Interpretation of θ: Eq. (2.21) is written with $\mathrm d/\mathrm d\mechanical{t}$, but the note (and Eq. 2.27) uses proper time; write $\theta=\delta V^{-1}\,\mathrm d\delta V/\mathrm d\tau$ and drop $\mechanical{t}$ from the table. **Fixed:** Wrote d/dtau in Eq. 2.21 and removed t from the table row.
- [[#N3319|N3319]] 2.4 Congruence of null geodesics: The table lists $\mechanical{\tilde\xi}^\alpha$ and $h'_{\alpha\beta}$, which appear only in later notes; trim it to the symbols used here. **Fixed:** Removed tilde xi^alpha and h'_alpha beta from the table.
- [[#N3323|N3323]] 2.4.4 Raychaudhuri's equation: The table lists $\mechanical{\theta}_0$ and the $\mechanical{k}^{\rm out}$, $\mechanical{k}^{\rm in}$ variants, none of which appear in this note; trim it. **Fixed:** Removed theta_0 and the k^out, k^in variants from the table.
- [[#N3324|N3324]] 2.4.5 Focusing theorem: The table lists the $\mechanical{k}^{\rm out}$, $\mechanical{k}^{\rm in}$ variants, which this note never uses; trim it. **Fixed:** Removed the k^out, k^in variants from the table.
- [[#N3325|N3325]] 2.4.6 Example: Symbol clash: $\mechanical{\theta}$ is the polar angle in $h_{\alpha\beta}=\operatorname{diag}(0,0,r^2,r^2\sin^2\theta)$ and also the expansion $\theta=2/r$, and the table lists both; rename the angle or add a warning. **Fixed:** Renamed the polar angle to vartheta in the geodesic relations, h_alpha beta, B_alpha beta, N_alpha and the table.
- [[#N3326|N3326]] 2.4.7 Another example: Symbol clash: the table lists $\mechanical{\theta}$ both as a sphere angle and as the expansion; the index placement also switches between $k^{\rm out}_\alpha$ and $k_{\rm out}^\alpha$; make both consistent. **Partly:** Renamed the sphere angle to vartheta; the k index placement follows the book convention (label on the side opposite the vector index) and was kept.
- [[#N3336|N3336]] 3.10 Slowly rotating shell: Symbol clash: $\mechanical{\Omega}$ is the frame angular velocity (3.72-3.73) while $\mathrm d\Omega^2$ in (3.71) is the solid-angle element; write the angular part explicitly or call the frame rate $\mechanical{\Omega_{\mathrm{in}}}$ from the start. **Fixed:** Wrote the angular part explicitly as d theta^2 + sin^2 theta d phi^2 in Eq. 3.71 and the induced metric.
- [[#N3339|N3339]] 3.11.2 Surface stress-energy tensor: Symbol clash: $\gamma_{\alpha\beta}$ (the jump tensor of Eq. 3.94) appears in the same equations as the free index $\gamma$ (for example $[g_{\alpha\beta,\gamma}]=-\gamma_{\alpha\beta}\mechanical{k}_\gamma$ and $[\Gamma^\alpha_{\beta\gamma}]$ in 3.95); relabel the free index or note the clash explicitly. **Fixed:** Added an explicit sentence after Eq. 3.94 that the tensor gamma_alpha beta is not related to the index gamma (book notation kept).
- [[#N3339|N3339]] 3.11.2 Surface stress-energy tensor: Missing semantic macro: $k^\beta$ is written bare in (3.98) ($\gamma_{\alpha\beta}e^\alpha_Ak^\beta$) and (3.99) ($e^\alpha_Ak^\beta$); use $\mechanical{k}^\beta$ as everywhere else. **Fixed:** Wrapped both k^beta in the mechanical macro.
- [[#N3340|N3340]] 3.11.3 Intrinsic formulation: Index typo in the jump calculation: $[C_{ab}]=[N_{\alpha;\beta}]e^\alpha_ae^\alpha_b$ (repeated in all three lines) should read $e^\alpha_ae^\beta_b$. **Fixed:** Changed e^\alpha_ae^\alpha_b to e^\alpha_ae^\beta_b in all three lines
- [[#N3340|N3340]] 3.11.3 Intrinsic formulation: Missing semantic macro: $k^\beta$ is bare in $[C_{A\mechanical{\lambda}}]=\frac12\gamma_{\alpha\beta}e^\alpha_Ak^\beta$; use $\mechanical{k}^\beta$. **Fixed:** Wrapped it as \mechanical{k}^\beta
- [[#N3341|N3341]] 3.11.4 Summary: Missing semantic macro: $e^\alpha_Ak^\beta$ in the $\energy{S^{\alpha\beta}}$ formula should use $\mechanical{k}^\beta$. **Fixed:** Wrapped it as \mechanical{k}^\beta
- [[#N3342|N3342]] 3.11.5 Parameterization of the null generators: The observer factor is mis-transformed: "$(-\bar{\mechanical{k}}_\mu\mechanical{u}^\mu)^{-1}=e^\beta(-\mechanical{k}_\mu\mechanical{u}^\mu)$" should be $e^\beta(-\mechanical{k}_\mu\mechanical{u}^\mu)^{-1}$, since $\bar{\mechanical{k}}^\alpha=e^{-\beta}\mechanical{k}^\alpha$; only then is $(-\mechanical{k}_\mu\mechanical{u}^\mu)^{-1}\energy{S^{\alpha\beta}}$ invariant. **Fixed:** Since bar k = e^{-beta} k, changed the right side to e^\beta(-k_\mu u^\mu)^{-1}; the invariance statement now holds
- [[#N3342|N3342]] 3.11.5 Parameterization of the null generators: Symbol clashes: $e^\beta$ (exponential of the reparameterization function $\beta$) sits next to basis vectors $e^\alpha_A$ and the index $\beta$; $\mechanical{\sigma}_{\alpha\beta}$ (shear) and $\sqrt\sigma$ (determinant) clash with the two-metric $\sigma_{AB}$; $\mechanical{\theta}$ (expansion) clashes with $\theta^A$; use an upright $\mathrm e^{\beta}$ (or a named factor) and a distinct shear symbol. **Partly:** The exponential e^\beta looks like the basis vectors e^\beta_b; changed all reparameterization exponentials to upright \mathrm e (basis vectors unchanged); kept shear sigma_{\alpha\beta} vs sigma_{AB} and expansion theta vs theta^A because they are standard notation, differ by index type and macro color
- [[#N3344|N3344]] 3.11.7 Accreting black hole: "$\mechanical{\Omega_{\mathrm{relative}}}=\mechanical{j^\psi}/\energy{\mu}=3\mechanical{M}\mechanical{a}f/(2\mechanical{m}\mechanical{r}^2)$" is inconsistent: $\mechanical{j^\psi}/\energy{\mu}=3\mechanical{M}\mechanical{a}/(2\mechanical{m}\mechanical{r}^2)$ without $f$; since $\mathrm d\mechanical{\phi}/\mathrm d\mechanical{t}=\mechanical{\ell}^\phi/\mechanical{\ell}^t=f\mechanical{\ell}^\phi$, the correct statement is $\mechanical{\Omega_{\mathrm{relative}}}=f\,\mechanical{j^\psi}/\energy{\mu}$. **Fixed:** j^psi/mu = 3Ma/(2mr^2) and Omega = f l^phi; changed the middle term to f\,j^psi/mu
- [[#N3345|N3345]] 3.11.8 Cosmological phase transition: Index typo: $\energy{S^{\alpha\beta}}=\mechanical{p}\sigma^{AB}e^\alpha_Ae^\alpha_B$ should be $\mechanical{p}\sigma^{AB}e^\alpha_Ae^\beta_B$. **Fixed:** Changed to e^\alpha_Ae^\beta_B
- [[#N3347|N3347]] 3.13 Problems: Problem 9 quotes "the general relation $\mechanical{p}\mechanical{\theta}=[\energy{T_{\alpha\beta}}\mechanical{k^\alpha}\mechanical{k^\beta}]$", but Eqs. (3.102)-(3.104) give $-\mechanical{p}\mechanical{\theta}=[\energy{T_{\alpha\beta}}\mechanical{k}^\alpha\mechanical{k}^\beta]$ (as also used in 3.11.8); fix the sign. **Fixed:** Eqs. (3.102)-(3.103) give -p theta = [T kk]; added the minus sign
- [[#N3347|N3347]] 3.13 Problems: Problem 8 says "Derive the relations (3.109)", but 3.11.5 assigns Problem 8 the derivation of the surface-quantity transformations (3.110); check against the source and make the two notes agree. **Fixed:** (3.109) is a choice of N, while 3.11.5 assigns Problem 8 the surface-quantity transformations; changed to (3.110) (source PDF could not be rendered to confirm)
- [[#N3349|N3349]] 3.2.1 Surface element (non-null case): The physical-quantities table lists $\theta^A$, $\mechanical{u}$, $d\Sigma_t$ and $d\Sigma_x$, which this note never uses (only $d\Sigma_\mu$ with $\delta_\mu^t$, $\delta_\mu^x$ appears); remove them. **Fixed:** Removed these symbols from the table rows and dropped 'or null' from the coordinate description
- [[#N3350|N3350]] 3.2.2 Surface element (null case): In the inverse-metric matrix, the $\Phi\lambda$ entries should be $-1$, not $+1$: with $k_\Phi\stackrel{*}{=}-1$, $k^\lambda\stackrel{*}{=}1$ and $N^\Phi\stackrel{*}{=}1$, Eq. (3.13) gives $g^{\Phi\lambda}=-N^\Phi k^\lambda=-1$ (equivalently $k^\lambda=g^{\lambda\Phi}k_\Phi=1$). The determinant result $\det\mathbf g^{-1}=-\det[\sigma^{AB}]$ is unaffected. **Fixed:** k^lambda = g^{lambda Phi}k_Phi = 1 with k_Phi = -1 gives g^{Phi lambda} = -1; changed both entries
- [[#N3351|N3351]] 3.2.3 Element of two-surface: The physical-quantities table lists $dS_{tx},dS_{xt}$ and $n^\Phi$, which this note never uses; remove them. **Fixed:** Removed them from the table
- [[#N3357|N3357]] 3.4.1 Tangent tensor fields: The physical-quantities table lists $h_{\alpha\beta}$, which the note never uses (only $h^{\alpha\beta}$ and $h^\alpha{}_\mu$ appear); replace it with $h^\alpha{}_\mu$ or drop it. **Fixed:** Replaced it with h^\alpha{}_\mu
- [[#N3369|N3369]] 3.6.5 Spherical space, moment of time symmetry: Symbol clash: a prime means $d/dr$ in $m'$, but $r'$ in the integral is a dummy integration variable. Rename the dummy variable (for example $\bar r$) so that $r'$ is not read as a derivative. **Fixed:** Renamed the integration variable to \bar r (three places)
- [[#N3379|N3379]] 3.8 Oppenheimer-Snyder collapse: Symbol clash: $\mechanical{a}$ is the scale factor and $\mechanical{a^\alpha}$ is the four-acceleration in the same note (for example $K_{\tau\tau}=-a^\alpha n_\alpha$ next to $K^\theta{}_\theta=a^{-1}\cot\chi_0$). Rename the acceleration (for example $\alpha^\alpha$ or $\dot u^\alpha$) and update the table. **Fixed:** Renamed the four-acceleration to \dot u^\alpha (text, a^\alpha_+, and table)
- [[#N3389|N3389]] 4.1.7 Nondynamical term: Symbol clash: $R$ is the Ricci scalar ("Then $R=0$") and $\mechanical{R}$ is the cylinder radius ("$r=R$", "$R\to\infty$") in the same note; rename the radius (e.g. $r_0$) and update the table. **Fixed:** Renamed the cylinder radius \mechanical{R} to \mechanical{r_0} everywhere including the table
- [[#N3397|N3397]] 4.2.6 Gravitational Hamiltonian: The table describes $\mathcal H_G$ as "The gravitational energy density"; this is misleading because the volume part $N(K^{ab}K_{ab}-K^2-{}^3R)-2N_a(K^{ab}-Kh^{ab})_{|b}$ is a combination of the constraints and vanishes for vacuum solutions (4.2.8–4.2.9); describe it as the volume (constraint) part of the Hamiltonian density. **Fixed:** Changed the table description to say that, apart from a divergence, it is a combination of the constraints
- [[#N3398|N3398]] 4.2.7 Variation of the Hamiltonian: The "three-dimensional version of Eq. (4.17)" and $\delta k=\tfrac12h^{ab}\delta h_{ab,c}r^c$ should use the projector onto $S_t$, $\sigma^{ab}=\sigma^{AB}e^a_Ae^b_B$, not the full $h^{ab}=r^ar^b+\sigma^{ab}$ (the $r^ar^br^c\delta h_{ab,c}$ piece does not vanish in general, exactly as $h^{\alpha\beta}$ in Eq. (4.17) is the boundary projector); the cancellation between $\delta_h\hat H_\Sigma$ and $\delta_h\hat H_S$ is unaffected because both terms change the same way. **Fixed:** Replaced h^{ab} by \sigma^{ab} in the five boundary-term occurrences, defined sigma^{ab} after the Eq. (4.17) reference, and added a table row; the cancellation is unchanged
- [[#N3403|N3403]] 4.3.2 Mass and angular momentum for stationary, axially symmetric spacetimes: The table calls $K_{\phi r}$ a "mixed coordinate component"; it is a fully covariant off-diagonal component ("mixed" normally means one upper and one lower index). Reword to "off-diagonal covariant component". **Fixed:** Reworded to off-diagonal covariant component
- [[#N3406|N3406]] 4.3.5 Distinction between ADM and Bondi-Sachs masses -  Vaidya spacetime: Symbol clash for $t$: in $u=t-r-2M\ln(r/2M-1)$ it is the Schwarzschild time, but later $t\equiv u+r$ defines the slicing time, which differs from it by $2M\ln(r/2M-1)$; rename one (e.g. $t_s$ for Schwarzschild time) and note the difference. **Fixed:** Renamed the Schwarzschild time in the definition of u to t_S, said what it is, and noted in the table that t = u + r differs from t_S
- [[#N3406|N3406]] 4.3.5 Distinction between ADM and Bondi-Sachs masses -  Vaidya spacetime: Symbol clash for $M$: it denotes the constant Schwarzschild mass in the definition of $u$ and also the surface functional $M(S)$, while the table lists only "original mass"; rename $M(S)$ (e.g. $\mathcal M(S)$) or add it to the table. **Fixed:** Renamed M(S) to \mathcal M(S) and added a table row
- [[#N3407|N3407]] 4.3.6 Transfer of mass and angular momentum: In $\varepsilon^\alpha{}_{;\alpha}=-T^{\alpha\beta}{}_{;\alpha}\xi_{(t)\beta}+T^{\alpha\beta}\xi_{(t)\beta;\alpha}$ the second term must carry a minus sign, $-T^{\alpha\beta}\xi_{(t)\beta;\alpha}$ (both terms vanish, so the conclusion is unchanged). **Fixed:** With epsilon^alpha = -T^alpha_beta xi^beta, changed +T xi_{;alpha} to -T xi_{;alpha}
- [[#N3416|N3416]] 5.1.4 Painlevé-Gullstrand coordinates: "an alternative coordinate system is produced that covers regions **VI** and **I**" — there is no region VI; it should be regions **IV** and **I** (the white-hole and exterior regions), as in \[\[5.1.3 Eddington-Finkelstein coordinates\]\]. **Fixed:** Changed regions VI and I to IV and I
- [[#N3419|N3419]] 5.1.7 Apparent horizon: Symbol clash: $\theta$ is both the expansion ($\theta=k^\alpha{}_{;\alpha}$) and the polar angle in $|g|^{1/2}=|g_{UV}|r^2\sin\theta$; the table lists both. Rename the angle locally (for example $\vartheta$) or write the expansion as $\Theta$. **Fixed:** Renamed the polar angle to \vartheta in the determinant and in the table
- [[#N3421|N3421]] 5.1.9 Killing horizon: "$g_{\alpha\beta}t^\alpha t^\beta=1-\frac{2M}{r}$" has the wrong sign: $g_{\alpha\beta}t^\alpha t^\beta=g_{tt}=-(1-2M/r)$, negative (timelike) outside and positive (spacelike) inside, as the preceding sentence says. **Fixed:** Changed to g_{\alpha\beta}t^\alpha t^\beta = -(1-2M/r), timelike outside and spacelike inside
- [[#N3424|N3424]] 5.2.2 Kruskal coordinates: With Eq. (5.26) as written ($U_-=\mp e^{\kappa_-u}$, $V_-=e^{-\kappa_-v}$), $U_-V_-=-\kappa_-(r-r_-)$, so $f\simeq+2U_-V_-$ and $\mathrm ds^2\simeq+\frac{2}{\kappa_-^2}\mathrm dU_-\mathrm dV_-$, not "$f\simeq-2U_-V_-$" and "$-\frac{2}{\kappa_-^2}$". Fix the sign convention, for example $V_-=-e^{-\kappa_-v}$, after checking the source. **Fixed:** Verified U_-V_- = -kappa(r-r_-) as written; changed Eq. (5.26) to V_- = -e^{-kappa_- v}, which makes f = -2U_-V_- and the -2/kappa^2 metric correct (matches the Kerr Eq. 5.75)
- [[#N3435|N3435]] 5.3.4 Event horizon -  stationary observers: "where $\omega=-g_{t\phi}/g_{tt}$" is wrong; the frame-dragging rate is $\omega=-g_{t\phi}/g_{\phi\phi}$ (Eq. 5.45). Only this form makes the last line of the $\gamma^{-2}$ derivation correct. **Fixed:** Factoring g_phiphi from the norm gives omega = -g_tphi/g_phiphi; corrected
- [[#N3440|N3440]] 5.3.9 Maximal extension of the Kerr spacetime: Eq. (5.75) reads "$U_-=\mp e^{\kappa_-u},\ V_+=-e^{-\kappa_-v}$"; the second coordinate must be $V_-=-e^{-\kappa_-v}$ (the metric is then written in terms of $\mathrm dU_-\,\mathrm dV_-$). **Fixed:** Changed V_+ to V_-
- [[#N3446|N3446]] 5.5.1 Preliminaries: "$\xi_\alpha e^\alpha_A=0=\xi^\alpha e^A_\alpha$": the object $e^A_\alpha$ is never defined; the conditions needed for the completeness relation are $\xi_\alpha e^\alpha_A=0$, $N_\alpha e^\alpha_A=0$, $N_\alpha N^\alpha=0$ and $N_\alpha\xi^\alpha=-1$ (and $\xi_\alpha\xi^\alpha=0$); state these explicitly after introducing $N^\alpha$. **Fixed:** Replaced the condition with xi_a xi^a=0=xi_a e^a_A and added N_a N^a=0, N_a xi^a=-1, N_a e^a_A=0 for N^alpha
- [[#N3446|N3446]] 5.5.1 Preliminaries: Symbol clash: $\theta^A$ labels the generators while $\theta$ (mechanical colour) is the expansion in Eq. (5.97); rename the generator labels (e.g. $\vartheta^A$ or $y^A$) or add an explicit warning. **Fixed:** Added one sentence that the generator labels theta^A are not the expansion theta of Eq. (5.97) (kept book notation)
- [[#N3451|N3451]] 5.5.6 Third law: The weak energy condition is $T_{\alpha\beta}u^\alpha u^\beta\ge0$, not "$>0$"; correspondingly it requires $\rho\ge0$, so Eq. (5.115) should read $\ge0$ and the conclusion becomes $m(v_0)\dot\Delta(v_0)\ge0$; note that the argument is heuristic (Israel's theorem needs more than this). **Fixed:** Changed WEC, rho condition, Eq. (5.115) and m Delta-dot to >=0; "positive" to "never negative/non-negative"; conclusion now "cannot be decreasing" (text already calls the argument an illustration)
- [[#N3454|N3454]] 5.7 Problems: Problem 7(a) enumerates the properties as "(i) … (ii) … (iii) … and (vi)"; the last item should be (iv). **Fixed:** Changed (vi) to (iv)
- [[#N3454|N3454]] 5.7 Problems: Problem 3(b) calls $l_\alpha=-\partial_\alpha v$ "the four-velocity"; it is a null tangent vector, not a (timelike, normalized) four-velocity. **Fixed:** Changed "the four-velocity" to "the null tangent vector"

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N3271 | [[Notation and conventions\|00 Front matter/Notation and conventions]] | Analyzed | low | no | no | [[#N3271\|View]] |
| N3272 | [[02 Physics/05 Relativity and Gravitation/03 Relativists Toolkit/00 Front matter/Preface\|00 Front matter/Preface]] | Analyzed | low | no | no | [[#N3272\|View]] |
| N3273 | [[02 Physics/05 Relativity and Gravitation/03 Relativists Toolkit/00 Front matter/Title and Publication Details\|00 Front matter/Title and Publication Details]] | Analyzed | low | no | no | [[#N3273\|View]] |
| N3274 | [[02 Physics/05 Relativity and Gravitation/03 Relativists Toolkit/01 Fundamentals/1.0 Chapter introduction\|01 Fundamentals/1.0 Chapter introduction]] | Analyzed | low | no | no | [[#N3274\|View]] |
| N3275 | [[1.1 Vectors, dual vectors, and tensors\|01 Fundamentals/1.1 Vectors, dual vectors, and tensors]] | Analyzed | low | no | no | [[#N3275\|View]] |
| N3276 | [[1.10 Geodesic deviation\|01 Fundamentals/1.10 Geodesic deviation]] | Analyzed | medium | yes | yes | [[#N3276\|View]] |
| N3277 | [[1.11 Fermi normal coordinates\|01 Fundamentals/1.11 Fermi normal coordinates]] | Analyzed | low | no | no | [[#N3277\|View]] |
| N3278 | [[1.11.1 Geometric construction\|01 Fundamentals/1.11.1 Geometric construction]] | Analyzed | low | no | no | [[#N3278\|View]] |
| N3279 | [[1.11.2 Coordinate transformation\|01 Fundamentals/1.11.2 Coordinate transformation]] | Analyzed | low | no | no | [[#N3279\|View]] |
| N3280 | [[1.11.3 Deviation vectors\|01 Fundamentals/1.11.3 Deviation vectors]] | Analyzed | low | no | no | [[#N3280\|View]] |
| N3281 | [[1.11.4 Metric on γ\|01 Fundamentals/1.11.4 Metric on γ]] | Analyzed | low | no | no | [[#N3281\|View]] |
| N3282 | [[1.11.5 First derivatives of the metric on γ\|01 Fundamentals/1.11.5 First derivatives of the metric on γ]] | Analyzed | low | no | no | [[#N3282\|View]] |
| N3283 | [[1.11.6 Second derivatives of the metric on γ\|01 Fundamentals/1.11.6 Second derivatives of the metric on γ]] | Analyzed | low | no | no | [[#N3283\|View]] |
| N3284 | [[1.11.7 Riemann tensor in Fermi normal coordinates\|01 Fundamentals/1.11.7 Riemann tensor in Fermi normal coordinates]] | Analyzed | low | no | no | [[#N3284\|View]] |
| N3285 | [[1.12 Bibliographical notes\|01 Fundamentals/1.12 Bibliographical notes]] | Analyzed | low | no | no | [[#N3285\|View]] |
| N3286 | [[1.13 Problems\|01 Fundamentals/1.13 Problems]] | Analyzed | low | no | no | [[#N3286\|View]] |
| N3287 | [[1.2 Covariant differentiation\|01 Fundamentals/1.2 Covariant differentiation]] | Analyzed | low | no | no | [[#N3287\|View]] |
| N3288 | [[1.3 Geodesics\|01 Fundamentals/1.3 Geodesics]] | Analyzed | low | no | no | [[#N3288\|View]] |
| N3289 | [[1.4 Lie differentiation\|01 Fundamentals/1.4 Lie differentiation]] | Analyzed | medium | no | yes | [[#N3289\|View]] |
| N3290 | [[1.5 Killing vectors\|01 Fundamentals/1.5 Killing vectors]] | Analyzed | low | no | no | [[#N3290\|View]] |
| N3291 | [[1.6 Local flatness\|01 Fundamentals/1.6 Local flatness]] | Analyzed | low | no | no | [[#N3291\|View]] |
| N3292 | [[1.7 Metric determinant\|01 Fundamentals/1.7 Metric determinant]] | Analyzed | low | no | no | [[#N3292\|View]] |
| N3293 | [[1.8 Levi-Civita tensor\|01 Fundamentals/1.8 Levi-Civita tensor]] | Analyzed | low | no | no | [[#N3293\|View]] |
| N3294 | [[1.9 Curvature\|01 Fundamentals/1.9 Curvature]] | Analyzed | low | no | no | [[#N3294\|View]] |
| N3295 | [[02 Physics/05 Relativity and Gravitation/03 Relativists Toolkit/02 Geodesic congruences/2.0 Chapter introduction\|02 Geodesic congruences/2.0 Chapter introduction]] | Analyzed | low | no | no | [[#N3295\|View]] |
| N3296 | [[2.1 Energy conditions\|02 Geodesic congruences/2.1 Energy conditions]] | Analyzed | medium | yes | no | [[#N3296\|View]] |
| N3297 | [[2.1.1 Introduction and summary\|02 Geodesic congruences/2.1.1 Introduction and summary]] | Analyzed | low | no | no | [[#N3297\|View]] |
| N3298 | [[2.1.2 Weak energy condition\|02 Geodesic congruences/2.1.2 Weak energy condition]] | Analyzed | medium | no | no | [[#N3298\|View]] |
| N3299 | [[2.1.3 Null energy condition\|02 Geodesic congruences/2.1.3 Null energy condition]] | Analyzed | low | no | no | [[#N3299\|View]] |
| N3300 | [[2.1.4 Strong energy condition\|02 Geodesic congruences/2.1.4 Strong energy condition]] | Analyzed | low | no | no | [[#N3300\|View]] |
| N3301 | [[2.1.5 Dominant energy condition\|02 Geodesic congruences/2.1.5 Dominant energy condition]] | Analyzed | low | no | no | [[#N3301\|View]] |
| N3302 | [[2.1.6 Violations of the energy conditions\|02 Geodesic congruences/2.1.6 Violations of the energy conditions]] | Analyzed | medium | no | no | [[#N3302\|View]] |
| N3303 | [[2.2 Kinematics of a deformable medium\|02 Geodesic congruences/2.2 Kinematics of a deformable medium]] | Analyzed | low | no | no | [[#N3303\|View]] |
| N3304 | [[2.2.1 Two-dimensional medium\|02 Geodesic congruences/2.2.1 Two-dimensional medium]] | Analyzed | low | no | no | [[#N3304\|View]] |
| N3305 | [[2.2.2 Expansion\|02 Geodesic congruences/2.2.2 Expansion]] | Analyzed | low | no | no | [[#N3305\|View]] |
| N3306 | [[2.2.3 Shear\|02 Geodesic congruences/2.2.3 Shear]] | Analyzed | low | no | yes | [[#N3306\|View]] |
| N3307 | [[2.2.4 Rotation\|02 Geodesic congruences/2.2.4 Rotation]] | Analyzed | low | no | no | [[#N3307\|View]] |
| N3308 | [[2.2.5 General case\|02 Geodesic congruences/2.2.5 General case]] | Analyzed | medium | no | yes | [[#N3308\|View]] |
| N3309 | [[2.2.6 Three-dimensional medium\|02 Geodesic congruences/2.2.6 Three-dimensional medium]] | Analyzed | low | no | no | [[#N3309\|View]] |
| N3310 | [[2.3 Congruence of timelike geodesics\|02 Geodesic congruences/2.3 Congruence of timelike geodesics]] | Analyzed | low | no | no | [[#N3310\|View]] |
| N3311 | [[2.3.1 Transverse metric\|02 Geodesic congruences/2.3.1 Transverse metric]] | Analyzed | low | no | no | [[#N3311\|View]] |
| N3312 | [[2.3.2 Kinematics\|02 Geodesic congruences/2.3.2 Kinematics]] | Analyzed | low | no | no | [[#N3312\|View]] |
| N3313 | [[2.3.3 Frobenius' theorem\|02 Geodesic congruences/2.3.3 Frobenius' theorem]] | Analyzed | low | no | no | [[#N3313\|View]] |
| N3314 | [[2.3.4 Raychaudhuri's equation\|02 Geodesic congruences/2.3.4 Raychaudhuri's equation]] | Analyzed | low | no | no | [[#N3314\|View]] |
| N3315 | [[2.3.5 Focusing theorem\|02 Geodesic congruences/2.3.5 Focusing theorem]] | Analyzed | medium | yes | no | [[#N3315\|View]] |
| N3316 | [[2.3.6 Example\|02 Geodesic congruences/2.3.6 Example]] | Analyzed | low | yes | no | [[#N3316\|View]] |
| N3317 | [[2.3.7 Another example\|02 Geodesic congruences/2.3.7 Another example]] | Analyzed | medium | yes | no | [[#N3317\|View]] |
| N3318 | [[2.3.8 Interpretation of θ\|02 Geodesic congruences/2.3.8 Interpretation of θ]] | Analyzed | low | no | no | [[#N3318\|View]] |
| N3319 | [[2.4 Congruence of null geodesics\|02 Geodesic congruences/2.4 Congruence of null geodesics]] | Analyzed | low | no | no | [[#N3319\|View]] |
| N3320 | [[2.4.1 Transverse metric\|02 Geodesic congruences/2.4.1 Transverse metric]] | Analyzed | low | no | no | [[#N3320\|View]] |
| N3321 | [[2.4.2 Kinematics\|02 Geodesic congruences/2.4.2 Kinematics]] | Analyzed | low | no | no | [[#N3321\|View]] |
| N3322 | [[2.4.3 Frobenius' theorem\|02 Geodesic congruences/2.4.3 Frobenius' theorem]] | Analyzed | low | no | no | [[#N3322\|View]] |
| N3323 | [[2.4.4 Raychaudhuri's equation\|02 Geodesic congruences/2.4.4 Raychaudhuri's equation]] | Analyzed | low | no | no | [[#N3323\|View]] |
| N3324 | [[2.4.5 Focusing theorem\|02 Geodesic congruences/2.4.5 Focusing theorem]] | Analyzed | low | yes | no | [[#N3324\|View]] |
| N3325 | [[2.4.6 Example\|02 Geodesic congruences/2.4.6 Example]] | Analyzed | low | no | no | [[#N3325\|View]] |
| N3326 | [[2.4.7 Another example\|02 Geodesic congruences/2.4.7 Another example]] | Analyzed | low | yes | no | [[#N3326\|View]] |
| N3327 | [[2.4.8 Interpretation of θ\|02 Geodesic congruences/2.4.8 Interpretation of θ]] | Analyzed | low | no | no | [[#N3327\|View]] |
| N3328 | [[2.5 Bibliographical notes\|02 Geodesic congruences/2.5 Bibliographical notes]] | Analyzed | low | no | no | [[#N3328\|View]] |
| N3329 | [[2.6 Problems\|02 Geodesic congruences/2.6 Problems]] | Analyzed | low | no | no | [[#N3329\|View]] |
| N3330 | [[3.0 Chapter introduction\|03 Hypersurfaces/3.0 Chapter introduction]] | Analyzed | low | no | no | [[#N3330\|View]] |
| N3331 | [[3.1 Description of hypersurfaces\|03 Hypersurfaces/3.1 Description of hypersurfaces]] | Analyzed | low | no | no | [[#N3331\|View]] |
| N3332 | [[3.1.1 Defining equations\|03 Hypersurfaces/3.1.1 Defining equations]] | Analyzed | low | no | no | [[#N3332\|View]] |
| N3333 | [[3.1.2 Normal vector\|03 Hypersurfaces/3.1.2 Normal vector]] | Analyzed | medium | yes | no | [[#N3333\|View]] |
| N3334 | [[3.1.3 Induced metric\|03 Hypersurfaces/3.1.3 Induced metric]] | Analyzed | low | no | no | [[#N3334\|View]] |
| N3335 | [[3.1.4 Light cone in flat spacetime\|03 Hypersurfaces/3.1.4 Light cone in flat spacetime]] | Analyzed | low | yes | no | [[#N3335\|View]] |
| N3336 | [[3.10 Slowly rotating shell\|03 Hypersurfaces/3.10 Slowly rotating shell]] | Analyzed | medium | yes | yes | [[#N3336\|View]] |
| N3337 | [[3.11 Null shells\|03 Hypersurfaces/3.11 Null shells]] | Analyzed | low | no | no | [[#N3337\|View]] |
| N3338 | [[3.11.1 Geometry\|03 Hypersurfaces/3.11.1 Geometry]] | Analyzed | medium | no | yes | [[#N3338\|View]] |
| N3339 | [[3.11.2 Surface stress-energy tensor\|03 Hypersurfaces/3.11.2 Surface stress-energy tensor]] | Analyzed | medium | no | no | [[#N3339\|View]] |
| N3340 | [[3.11.3 Intrinsic formulation\|03 Hypersurfaces/3.11.3 Intrinsic formulation]] | Analyzed | low | no | no | [[#N3340\|View]] |
| N3341 | [[3.11.4 Summary\|03 Hypersurfaces/3.11.4 Summary]] | Analyzed | low | no | no | [[#N3341\|View]] |
| N3342 | [[3.11.5 Parameterization of the null generators\|03 Hypersurfaces/3.11.5 Parameterization of the null generators]] | Analyzed | medium | no | no | [[#N3342\|View]] |
| N3343 | [[3.11.6 Imploding spherical shell\|03 Hypersurfaces/3.11.6 Imploding spherical shell]] | Analyzed | medium | yes | yes | [[#N3343\|View]] |
| N3344 | [[3.11.7 Accreting black hole\|03 Hypersurfaces/3.11.7 Accreting black hole]] | Analyzed | medium | yes | yes | [[#N3344\|View]] |
| N3345 | [[3.11.8 Cosmological phase transition\|03 Hypersurfaces/3.11.8 Cosmological phase transition]] | Analyzed | low | yes | no | [[#N3345\|View]] |
| N3346 | [[3.12 Bibliographical notes\|03 Hypersurfaces/3.12 Bibliographical notes]] | Analyzed | low | no | no | [[#N3346\|View]] |
| N3347 | [[3.13 Problems\|03 Hypersurfaces/3.13 Problems]] | Analyzed | low | no | no | [[#N3347\|View]] |
| N3348 | [[3.2 Integration over hypersurfaces\|03 Hypersurfaces/3.2 Integration over hypersurfaces]] | Analyzed | low | no | no | [[#N3348\|View]] |
| N3349 | [[3.2.1 Surface element (non-null case)\|03 Hypersurfaces/3.2.1 Surface element (non-null case)]] | Analyzed | medium | no | no | [[#N3349\|View]] |
| N3350 | [[3.2.2 Surface element (null case)\|03 Hypersurfaces/3.2.2 Surface element (null case)]] | Analyzed | medium | no | no | [[#N3350\|View]] |
| N3351 | [[3.2.3 Element of two-surface\|03 Hypersurfaces/3.2.3 Element of two-surface]] | Analyzed | low | no | no | [[#N3351\|View]] |
| N3352 | [[3.3 Gauss-Stokes theorem\|03 Hypersurfaces/3.3 Gauss-Stokes theorem]] | Analyzed | low | no | no | [[#N3352\|View]] |
| N3353 | [[3.3.1 First version\|03 Hypersurfaces/3.3.1 First version]] | Analyzed | low | no | no | [[#N3353\|View]] |
| N3354 | [[3.3.2 Conservation\|03 Hypersurfaces/3.3.2 Conservation]] | Analyzed | low | no | no | [[#N3354\|View]] |
| N3355 | [[3.3.3 Second version\|03 Hypersurfaces/3.3.3 Second version]] | Analyzed | low | no | no | [[#N3355\|View]] |
| N3356 | [[3.4 Differentiation of tangent vector fields\|03 Hypersurfaces/3.4 Differentiation of tangent vector fields]] | Analyzed | low | no | no | [[#N3356\|View]] |
| N3357 | [[3.4.1 Tangent tensor fields\|03 Hypersurfaces/3.4.1 Tangent tensor fields]] | Analyzed | low | no | no | [[#N3357\|View]] |
| N3358 | [[3.4.2 Intrinsic covariant derivative\|03 Hypersurfaces/3.4.2 Intrinsic covariant derivative]] | Analyzed | medium | no | no | [[#N3358\|View]] |
| N3359 | [[3.4.3 Extrinsic curvature\|03 Hypersurfaces/3.4.3 Extrinsic curvature]] | Analyzed | medium | yes | no | [[#N3359\|View]] |
| N3360 | [[3.5 Gauss-Codazzi equations\|03 Hypersurfaces/3.5 Gauss-Codazzi equations]] | Analyzed | low | no | no | [[#N3360\|View]] |
| N3361 | [[3.5.1 General form\|03 Hypersurfaces/3.5.1 General form]] | Analyzed | medium | no | no | [[#N3361\|View]] |
| N3362 | [[3.5.2 Contracted form\|03 Hypersurfaces/3.5.2 Contracted form]] | Analyzed | medium | no | no | [[#N3362\|View]] |
| N3363 | [[3.5.3 Ricci scalar\|03 Hypersurfaces/3.5.3 Ricci scalar]] | Analyzed | low | no | no | [[#N3363\|View]] |
| N3364 | [[3.6 Initial-value problem\|03 Hypersurfaces/3.6 Initial-value problem]] | Analyzed | low | no | no | [[#N3364\|View]] |
| N3365 | [[3.6.1 Constraints\|03 Hypersurfaces/3.6.1 Constraints]] | Analyzed | medium | no | no | [[#N3365\|View]] |
| N3366 | [[3.6.2 Cosmological initial values\|03 Hypersurfaces/3.6.2 Cosmological initial values]] | Analyzed | low | no | no | [[#N3366\|View]] |
| N3367 | [[3.6.3 Moment of time symmetry\|03 Hypersurfaces/3.6.3 Moment of time symmetry]] | Analyzed | low | yes | no | [[#N3367\|View]] |
| N3368 | [[3.6.4 Stationary and static spacetimes\|03 Hypersurfaces/3.6.4 Stationary and static spacetimes]] | Analyzed | low | no | no | [[#N3368\|View]] |
| N3369 | [[3.6.5 Spherical space, moment of time symmetry\|03 Hypersurfaces/3.6.5 Spherical space, moment of time symmetry]] | Analyzed | low | no | no | [[#N3369\|View]] |
| N3370 | [[3.6.6 Spherical space, empty and flat\|03 Hypersurfaces/3.6.6 Spherical space, empty and flat]] | Analyzed | medium | no | no | [[#N3370\|View]] |
| N3371 | [[3.6.7 Conformally-flat space\|03 Hypersurfaces/3.6.7 Conformally-flat space]] | Analyzed | low | yes | no | [[#N3371\|View]] |
| N3372 | [[3.7 Junction conditions and thin shells\|03 Hypersurfaces/3.7 Junction conditions and thin shells]] | Analyzed | low | no | no | [[#N3372\|View]] |
| N3373 | [[3.7.1 Notation and assumptions\|03 Hypersurfaces/3.7.1 Notation and assumptions]] | Analyzed | low | yes | no | [[#N3373\|View]] |
| N3374 | [[3.7.2 First junction condition\|03 Hypersurfaces/3.7.2 First junction condition]] | Analyzed | low | no | no | [[#N3374\|View]] |
| N3375 | [[3.7.3 Riemann tensor\|03 Hypersurfaces/3.7.3 Riemann tensor]] | Analyzed | low | no | no | [[#N3375\|View]] |
| N3376 | [[3.7.4 Surface stress-energy tensor\|03 Hypersurfaces/3.7.4 Surface stress-energy tensor]] | Analyzed | medium | no | no | [[#N3376\|View]] |
| N3377 | [[3.7.5 Second junction condition\|03 Hypersurfaces/3.7.5 Second junction condition]] | Analyzed | medium | no | no | [[#N3377\|View]] |
| N3378 | [[3.7.6 Summary\|03 Hypersurfaces/3.7.6 Summary]] | Analyzed | low | no | no | [[#N3378\|View]] |
| N3379 | [[3.8 Oppenheimer-Snyder collapse\|03 Hypersurfaces/3.8 Oppenheimer-Snyder collapse]] | Analyzed | medium | yes | yes | [[#N3379\|View]] |
| N3380 | [[3.9 Thin-shell collapse\|03 Hypersurfaces/3.9 Thin-shell collapse]] | Analyzed | medium | yes | no | [[#N3380\|View]] |
| N3381 | [[4.0 Chapter introduction\|04 Lagrangian and Hamiltonian formulations of general relativity/4.0 Chapter introduction]] | Analyzed | low | no | no | [[#N3381\|View]] |
| N3382 | [[4.1 Lagrangian formulation\|04 Lagrangian and Hamiltonian formulations of general relativity/4.1 Lagrangian formulation]] | Analyzed | low | no | no | [[#N3382\|View]] |
| N3383 | [[4.1.1 Mechanics\|04 Lagrangian and Hamiltonian formulations of general relativity/4.1.1 Mechanics]] | Analyzed | low | yes | yes | [[#N3383\|View]] |
| N3384 | [[4.1.2 Field theory\|04 Lagrangian and Hamiltonian formulations of general relativity/4.1.2 Field theory]] | Analyzed | low | no | no | [[#N3384\|View]] |
| N3385 | [[4.1.3 General relativity\|04 Lagrangian and Hamiltonian formulations of general relativity/4.1.3 General relativity]] | Analyzed | low | no | no | [[#N3385\|View]] |
| N3386 | [[4.1.4 Variation of the Hilbert term\|04 Lagrangian and Hamiltonian formulations of general relativity/4.1.4 Variation of the Hilbert term]] | Analyzed | medium | no | no | [[#N3386\|View]] |
| N3387 | [[4.1.5 Variation of the boundary term\|04 Lagrangian and Hamiltonian formulations of general relativity/4.1.5 Variation of the boundary term]] | Analyzed | low | no | no | [[#N3387\|View]] |
| N3388 | [[4.1.6 Variation of the matter action\|04 Lagrangian and Hamiltonian formulations of general relativity/4.1.6 Variation of the matter action]] | Analyzed | low | no | no | [[#N3388\|View]] |
| N3389 | [[4.1.7 Nondynamical term\|04 Lagrangian and Hamiltonian formulations of general relativity/4.1.7 Nondynamical term]] | Analyzed | medium | yes | no | [[#N3389\|View]] |
| N3390 | [[4.1.8 Bianchi identities\|04 Lagrangian and Hamiltonian formulations of general relativity/4.1.8 Bianchi identities]] | Analyzed | low | no | no | [[#N3390\|View]] |
| N3391 | [[4.2 Hamiltonian formulation\|04 Lagrangian and Hamiltonian formulations of general relativity/4.2 Hamiltonian formulation]] | Analyzed | low | no | no | [[#N3391\|View]] |
| N3392 | [[4.2.1 Mechanics\|04 Lagrangian and Hamiltonian formulations of general relativity/4.2.1 Mechanics]] | Analyzed | low | yes | no | [[#N3392\|View]] |
| N3393 | [[4.2.2 3 + 1 decomposition\|04 Lagrangian and Hamiltonian formulations of general relativity/4.2.2 3 + 1 decomposition]] | Analyzed | medium | no | yes | [[#N3393\|View]] |
| N3394 | [[4.2.3 Field theory\|04 Lagrangian and Hamiltonian formulations of general relativity/4.2.3 Field theory]] | Analyzed | medium | no | no | [[#N3394\|View]] |
| N3395 | [[4.2.4 Foliation of the boundary\|04 Lagrangian and Hamiltonian formulations of general relativity/4.2.4 Foliation of the boundary]] | Analyzed | low | no | no | [[#N3395\|View]] |
| N3396 | [[4.2.5 Gravitational action\|04 Lagrangian and Hamiltonian formulations of general relativity/4.2.5 Gravitational action]] | Analyzed | medium | no | no | [[#N3396\|View]] |
| N3397 | [[4.2.6 Gravitational Hamiltonian\|04 Lagrangian and Hamiltonian formulations of general relativity/4.2.6 Gravitational Hamiltonian]] | Analyzed | medium | no | no | [[#N3397\|View]] |
| N3398 | [[4.2.7 Variation of the Hamiltonian\|04 Lagrangian and Hamiltonian formulations of general relativity/4.2.7 Variation of the Hamiltonian]] | Analyzed | high | no | no | [[#N3398\|View]] |
| N3399 | [[4.2.8 Hamilton's equations\|04 Lagrangian and Hamiltonian formulations of general relativity/4.2.8 Hamilton's equations]] | Analyzed | medium | no | no | [[#N3399\|View]] |
| N3400 | [[4.2.9 Value of the Hamiltonian for solutions\|04 Lagrangian and Hamiltonian formulations of general relativity/4.2.9 Value of the Hamiltonian for solutions]] | Analyzed | low | no | no | [[#N3400\|View]] |
| N3401 | [[4.3 Mass and angular momentum\|04 Lagrangian and Hamiltonian formulations of general relativity/4.3 Mass and angular momentum]] | Analyzed | low | no | no | [[#N3401\|View]] |
| N3402 | [[4.3.1 Hamiltonian definitions\|04 Lagrangian and Hamiltonian formulations of general relativity/4.3.1 Hamiltonian definitions]] | Analyzed | medium | no | no | [[#N3402\|View]] |
| N3403 | [[4.3.2 Mass and angular momentum for stationary, axially symmetric spacetimes\|04 Lagrangian and Hamiltonian formulations of general relativity/4.3.2 Mass and angular momentum for stationary, axially symmetric spacetimes]] | Analyzed | medium | no | no | [[#N3403\|View]] |
| N3404 | [[4.3.3 Komar formulae\|04 Lagrangian and Hamiltonian formulations of general relativity/4.3.3 Komar formulae]] | Analyzed | medium | no | no | [[#N3404\|View]] |
| N3405 | [[4.3.4 Bondi-Sachs mass\|04 Lagrangian and Hamiltonian formulations of general relativity/4.3.4 Bondi-Sachs mass]] | Analyzed | medium | no | yes | [[#N3405\|View]] |
| N3406 | [[4.3.5 Distinction between ADM and Bondi-Sachs masses -  Vaidya spacetime\|04 Lagrangian and Hamiltonian formulations of general relativity/4.3.5 Distinction between ADM and Bondi-Sachs masses -  Vaidya spacetime]] | Analyzed | medium | yes | yes | [[#N3406\|View]] |
| N3407 | [[4.3.6 Transfer of mass and angular momentum\|04 Lagrangian and Hamiltonian formulations of general relativity/4.3.6 Transfer of mass and angular momentum]] | Analyzed | low | no | no | [[#N3407\|View]] |
| N3408 | [[4.4 Bibliographical notes\|04 Lagrangian and Hamiltonian formulations of general relativity/4.4 Bibliographical notes]] | Analyzed | low | no | no | [[#N3408\|View]] |
| N3409 | [[4.5 Problems\|04 Lagrangian and Hamiltonian formulations of general relativity/4.5 Problems]] | Analyzed | low | no | no | [[#N3409\|View]] |
| N3410 | [[02 Physics/05 Relativity and Gravitation/03 Relativists Toolkit/05 Black holes/5.0 Chapter introduction\|05 Black holes/5.0 Chapter introduction]] | Analyzed | low | no | no | [[#N3410\|View]] |
| N3411 | [[5.1 Schwarzschild black hole\|05 Black holes/5.1 Schwarzschild black hole]] | Analyzed | low | no | no | [[#N3411\|View]] |
| N3412 | [[5.1.1 Birkhoff's theorem\|05 Black holes/5.1.1 Birkhoff's theorem]] | Analyzed | medium | no | no | [[#N3412\|View]] |
| N3413 | [[5.1.10 Bifurcation two-sphere\|05 Black holes/5.1.10 Bifurcation two-sphere]] | Analyzed | low | yes | no | [[#N3413\|View]] |
| N3414 | [[5.1.2 Kruskal coordinates\|05 Black holes/5.1.2 Kruskal coordinates]] | Analyzed | medium | no | yes | [[#N3414\|View]] |
| N3415 | [[5.1.3 Eddington-Finkelstein coordinates\|05 Black holes/5.1.3 Eddington-Finkelstein coordinates]] | Analyzed | medium | no | yes | [[#N3415\|View]] |
| N3416 | [[5.1.4 Painlevé-Gullstrand coordinates\|05 Black holes/5.1.4 Painlevé-Gullstrand coordinates]] | Analyzed | medium | yes | no | [[#N3416\|View]] |
| N3417 | [[5.1.5 Penrose-Carter diagram\|05 Black holes/5.1.5 Penrose-Carter diagram]] | Analyzed | low | no | yes | [[#N3417\|View]] |
| N3418 | [[5.1.6 Event horizon\|05 Black holes/5.1.6 Event horizon]] | Analyzed | low | no | no | [[#N3418\|View]] |
| N3419 | [[5.1.7 Apparent horizon\|05 Black holes/5.1.7 Apparent horizon]] | Analyzed | medium | yes | no | [[#N3419\|View]] |
| N3420 | [[5.1.8 Distinction between event and apparent horizons -  Vaidya spacetime\|05 Black holes/5.1.8 Distinction between event and apparent horizons -  Vaidya spacetime]] | Analyzed | medium | yes | yes | [[#N3420\|View]] |
| N3421 | [[5.1.9 Killing horizon\|05 Black holes/5.1.9 Killing horizon]] | Analyzed | medium | no | no | [[#N3421\|View]] |
| N3422 | [[5.2 Reissner-Nordström black hole\|05 Black holes/5.2 Reissner-Nordström black hole]] | Analyzed | low | no | no | [[#N3422\|View]] |
| N3423 | [[5.2.1 Derivation of the Reissner-Nordström solution\|05 Black holes/5.2.1 Derivation of the Reissner-Nordström solution]] | Analyzed | low | yes | no | [[#N3423\|View]] |
| N3424 | [[5.2.2 Kruskal coordinates\|05 Black holes/5.2.2 Kruskal coordinates]] | Analyzed | medium | yes | no | [[#N3424\|View]] |
| N3425 | [[5.2.3 Radial observers in Reissner-Nordström spacetime\|05 Black holes/5.2.3 Radial observers in Reissner-Nordström spacetime]] | Analyzed | low | yes | yes | [[#N3425\|View]] |
| N3426 | [[5.2.4 Surface gravity\|05 Black holes/5.2.4 Surface gravity]] | Analyzed | low | yes | no | [[#N3426\|View]] |
| N3427 | [[5.3 Kerr black hole\|05 Black holes/5.3 Kerr black hole]] | Analyzed | low | no | no | [[#N3427\|View]] |
| N3428 | [[5.3.1 The Kerr metric\|05 Black holes/5.3.1 The Kerr metric]] | Analyzed | low | yes | no | [[#N3428\|View]] |
| N3429 | [[5.3.10 Surface gravity\|05 Black holes/5.3.10 Surface gravity]] | Analyzed | low | yes | no | [[#N3429\|View]] |
| N3430 | [[5.3.11 Bifurcation two-sphere\|05 Black holes/5.3.11 Bifurcation two-sphere]] | Analyzed | low | no | no | [[#N3430\|View]] |
| N3431 | [[5.3.12 Smarr's formula\|05 Black holes/5.3.12 Smarr's formula]] | Analyzed | low | no | no | [[#N3431\|View]] |
| N3432 | [[5.3.13 Variation law\|05 Black holes/5.3.13 Variation law]] | Analyzed | low | no | no | [[#N3432\|View]] |
| N3433 | [[5.3.2 Dragging of inertial frames -  ZAMOs\|05 Black holes/5.3.2 Dragging of inertial frames -  ZAMOs]] | Analyzed | low | yes | yes | [[#N3433\|View]] |
| N3434 | [[5.3.3 Static limit -  static observers\|05 Black holes/5.3.3 Static limit -  static observers]] | Analyzed | low | no | no | [[#N3434\|View]] |
| N3435 | [[5.3.4 Event horizon -  stationary observers\|05 Black holes/5.3.4 Event horizon -  stationary observers]] | Analyzed | medium | yes | no | [[#N3435\|View]] |
| N3436 | [[5.3.5 The Penrose process\|05 Black holes/5.3.5 The Penrose process]] | Analyzed | low | no | yes | [[#N3436\|View]] |
| N3437 | [[5.3.6 Principal null congruences\|05 Black holes/5.3.6 Principal null congruences]] | Analyzed | low | no | no | [[#N3437\|View]] |
| N3438 | [[5.3.7 Kerr-Schild coordinates\|05 Black holes/5.3.7 Kerr-Schild coordinates]] | Analyzed | low | yes | no | [[#N3438\|View]] |
| N3439 | [[5.3.8 The nature of the singularity\|05 Black holes/5.3.8 The nature of the singularity]] | Analyzed | low | yes | yes | [[#N3439\|View]] |
| N3440 | [[5.3.9 Maximal extension of the Kerr spacetime\|05 Black holes/5.3.9 Maximal extension of the Kerr spacetime]] | Analyzed | medium | no | no | [[#N3440\|View]] |
| N3441 | [[5.4 General properties of black holes\|05 Black holes/5.4 General properties of black holes]] | Analyzed | low | no | no | [[#N3441\|View]] |
| N3442 | [[5.4.1 General black holes\|05 Black holes/5.4.1 General black holes]] | Analyzed | medium | no | yes | [[#N3442\|View]] |
| N3443 | [[5.4.2 Stationary black holes\|05 Black holes/5.4.2 Stationary black holes]] | Analyzed | medium | no | no | [[#N3443\|View]] |
| N3444 | [[5.4.3 Stationary black holes in vacuum\|05 Black holes/5.4.3 Stationary black holes in vacuum]] | Analyzed | low | no | no | [[#N3444\|View]] |
| N3445 | [[5.5 The laws of black-hole mechanics\|05 Black holes/5.5 The laws of black-hole mechanics]] | Analyzed | low | no | no | [[#N3445\|View]] |
| N3446 | [[5.5.1 Preliminaries\|05 Black holes/5.5.1 Preliminaries]] | Analyzed | medium | no | no | [[#N3446\|View]] |
| N3447 | [[5.5.2 Zeroth law\|05 Black holes/5.5.2 Zeroth law]] | Analyzed | medium | no | no | [[#N3447\|View]] |
| N3448 | [[5.5.3 Generalized Smarr formula\|05 Black holes/5.5.3 Generalized Smarr formula]] | Analyzed | medium | no | no | [[#N3448\|View]] |
| N3449 | [[5.5.4 First law\|05 Black holes/5.5.4 First law]] | Analyzed | medium | yes | no | [[#N3449\|View]] |
| N3450 | [[5.5.5 Second law\|05 Black holes/5.5.5 Second law]] | Analyzed | low | no | no | [[#N3450\|View]] |
| N3451 | [[5.5.6 Third law\|05 Black holes/5.5.6 Third law]] | Analyzed | medium | no | no | [[#N3451\|View]] |
| N3452 | [[5.5.7 Black-hole thermodynamics\|05 Black holes/5.5.7 Black-hole thermodynamics]] | Analyzed | medium | yes | no | [[#N3452\|View]] |
| N3453 | [[5.6 Bibliographical notes\|05 Black holes/5.6 Bibliographical notes]] | Analyzed | low | no | no | [[#N3453\|View]] |
| N3454 | [[5.7 Problems\|05 Black holes/5.7 Problems]] | Analyzed | low | yes | no | [[#N3454\|View]] |
| N3455 | [[02 Physics/05 Relativity and Gravitation/03 Relativists Toolkit/99 Back matter/Index\|99 Back matter/Index]] | Analyzed | low | no | no | [[#N3455\|View]] |
| N3456 | [[References\|99 Back matter/References]] | Analyzed | low | no | no | [[#N3456\|View]] |
| N3457 | [[Relativists Toolkit - Contents\|Relativists Toolkit - Contents]] | Analyzed | low | no | no | [[#N3457\|View]] |

## Suggestions

### N3271

Note: [[Notation and conventions|Notation and conventions]]  
Priority: low · Graph: no · Manim: no

Accurate transcription of the book's sign conventions and symbol list; usable as a reference.

- [Structure] Add a one-line warning that $\mechanical{\theta}$ denotes both the expansion scalar and the polar angle (both rows appear in the table), and that $\sigma$ denotes both the shear tensor $\sigma_{\alpha\beta}$ and the two-surface metric $\sigma_{AB}$; this clash recurs in Chapters 2 and 3.
- [Simplify] In the Physical quantities table, describe $\mathrm d\mechanical{\Omega}^2$ as the solid-angle line element on the unit sphere rather than an "Angular distance" $\mechanical{\Omega}$ in rad.

### N3272

Note: [[02 Physics/05 Relativity and Gravitation/03 Relativists Toolkit/00 Front matter/Preface|Preface]]  
Priority: low · Graph: no · Manim: no

Faithful transcription of the author's preface; no technical content to correct.

- [Links] Turn the chapter references (Chapter 2 congruences, Chapter 3 hypersurfaces, Chapter 5 black holes) into wiki links to \[\[2.0 Chapter introduction\]\], \[\[3.0 Chapter introduction\]\], and \[\[5.0 Chapter introduction\]\]; note that the GRTensorII URL is historical.

### N3273

Note: [[02 Physics/05 Relativity and Gravitation/03 Relativists Toolkit/00 Front matter/Title and Publication Details|Title and Publication Details]]  
Priority: low · Graph: no · Manim: no

Bibliographic front matter; no content changes needed.

- [Structure] Consider dropping the "Source Access Footer" section and image (a library download stamp), which carries no content for the vault.

### N3274

Note: [[02 Physics/05 Relativity and Gravitation/03 Relativists Toolkit/01 Fundamentals/1.0 Chapter introduction|1.0 Chapter introduction]]  
Priority: low · Graph: no · Manim: no

Clear chapter overview; no change needed beyond navigation.

- [Links] Turn the section numbers (1.1 to 1.11) mentioned in the text into wiki links to the corresponding notes so the overview works as a hub.

### N3275

Note: [[1.1 Vectors, dual vectors, and tensors|1.1 Vectors, dual vectors, and tensors]]  
Priority: low · Graph: no · Manim: no

Correct and concise transcription of the transformation-law definition of tensors.

- [Example] Add a short worked example in plane polar coordinates: transform the vector $A^\alpha=(1,0)$ (Cartesian) and the gradient of $f=x$, and check that $A^\alpha f_{,\alpha}$ is invariant; this makes Eqs. (1.1)–(1.2) concrete.
- [Intuition] Before Eq. (1.3), add one sentence on why upper and lower indices transform oppositely (a vector scales like $\mathrm dx$, a gradient like $1/\mathrm dx$).

### N3276

Note: [[1.10 Geodesic deviation|1.10 Geodesic deviation]]  
Priority: medium · Graph: yes · Manim: yes

Correct derivation of the geodesic deviation equation, but it is purely formal and gives no example of the relative acceleration it predicts.

- [Example] Add the sphere example: for neighbouring great circles $D^2\xi/\mathrm ds^2=-\xi/R^2$, so $\xi=\xi_0\sin(s/R)$ and meridians reconverge at the opposite pole; also add the Newtonian tidal limit $\ddot\xi^a=-R^a{}_{0b0}\xi^b=-\partial_a\partial_b\Phi\,\xi^b$.
- [Graph] Plot $\xi(s)/\xi_0$ for the sphere, $\sin(s/R)$, against the flat-space line $s/R$ for $s/R\in[0,\pi]$, so the reader sees curvature bend an initially linear separation.
- [Manim] Animate two meridians leaving the equator in parallel on a sphere and converging at the pole, with the deviation vector drawn between them.
- [Structure] The file starts with a UTF-8 BOM (also in the committed version); save it without BOM as the vault rules require. The same applies to all BOM files in Sections 1.6–1.13, 2.x and 3.x of this batch.

### N3277

Note: [[1.11 Fermi normal coordinates|1.11 Fermi normal coordinates]]  
Priority: low · Graph: no · Manim: no

Correct statement of the Fermi-normal-coordinate metric (Eq. 1.47) with a clear hub of derivation notes.

- [Intuition] Add one paragraph on the physical meaning of Eq. (1.47): the correction $-R_{tatb}x^ax^b$ in $g_{tt}$ is twice the Newtonian tidal potential felt in a freely falling laboratory.

### N3278

Note: [[1.11.1 Geometric construction|1.11.1 Geometric construction]]  
Priority: low · Graph: no · Manim: no

Correct and readable description of the Fermi construction, supported by Fig. 1.4.

- [Simplify] Say explicitly that $x^0$ in Eq. (1.51) is the same coordinate as $t$ in Eq. (1.47), since the table and text use both names.

### N3279

Note: [[1.11.2 Coordinate transformation|1.11.2 Coordinate transformation]]  
Priority: low · Graph: no · Manim: no

Correct derivation of $\partial x^{\alpha'}/\partial x^\mu|_\gamma=\hat e^{\alpha'}_\mu$; compact but complete.

- [Simplify] The rescaling constant is called $c$, which collides with the speed of light used elsewhere in the vault; rename it (for example $\kappa$) or remark that it is a pure number here.

### N3280

Note: [[1.11.3 Deviation vectors|1.11.3 Deviation vectors]]  
Priority: low · Graph: no · Manim: no

Short, correct definition of the four deviation vectors.

- [Links] Link "Section 1.10" and "Eq. (1.46)" to \[\[1.10 Geodesic deviation\]\].

### N3281

Note: [[1.11.4 Metric on γ|1.11.4 Metric on γ]]  
Priority: low · Graph: no · Manim: no

Short, correct one-step result; no change needed.

- [Links] Link Eqs. (1.49), (1.54) and (1.55) to \[\[1.11.1 Geometric construction\]\] and \[\[1.11.2 Coordinate transformation\]\].

### N3282

Note: [[1.11.5 First derivatives of the metric on γ|1.11.5 First derivatives of the metric on γ]]  
Priority: low · Graph: no · Manim: no

Correct argument that all Christoffel symbols vanish on $\gamma$.

- [Simplify] Add one sentence that $\Gamma^\alpha_{bc}\Omega^b\Omega^c=0$ for all unit $\Omega^a$ implies $\Gamma^\alpha_{bc}=0$ only because $\Gamma^\alpha_{bc}$ is symmetric in $b,c$; readers usually miss this step.

### N3283

Note: [[1.11.6 Second derivatives of the metric on γ|1.11.6 Second derivatives of the metric on γ]]  
Priority: low · Graph: no · Manim: no

Correct derivation (Eqs. 1.62 and 1.63 check out and reproduce Eq. 1.47), but "a little algebra" hides the key symmetrization step.

- [Simplify] Show the "little algebra": from $3(\Gamma^\alpha_{ab,d}+\Gamma^\alpha_{ad,b})=-(R^\alpha{}_{bad}+R^\alpha{}_{dab})$, verify that $\Gamma^\alpha_{ab,c}=-\tfrac13(R^\alpha{}_{abc}+R^\alpha{}_{bac})$ satisfies it using $R^\alpha{}_{abd}=-R^\alpha{}_{adb}$, and note that this solution is unique.
- [Simplify] Show how Eq. (1.63) follows from Eqs. (1.60)–(1.62) with one explicit line, for example $g_{tt,ab}=2\Gamma_{tta,b}$ on $\gamma$ (because $g_{\alpha\beta,\gamma}=\Gamma_{\alpha\beta\gamma}+\Gamma_{\beta\alpha\gamma}$).

### N3284

Note: [[1.11.7 Riemann tensor in Fermi normal coordinates|1.11.7 Riemann tensor in Fermi normal coordinates]]  
Priority: low · Graph: no · Manim: no

Short, correct remark on how to obtain Fermi-frame curvature components.

- [Example] Add the simplest case: for a radially falling observer in Schwarzschild, $R_{\hat t\hat r\hat t\hat r}=-2M/r^3$ and $R_{\hat t\hat\theta\hat t\hat\theta}=R_{\hat t\hat\phi\hat t\hat\phi}=M/r^3$, which give radial stretching and transverse squeezing (this also prepares Problem 10).

### N3285

Note: [[1.12 Bibliographical notes|1.12 Bibliographical notes]]  
Priority: low · Graph: no · Manim: no

Bibliography transcription; no change needed.

- [Structure] No change needed.

### N3286

Note: [[1.13 Problems|1.13 Problems]]  
Priority: low · Graph: no · Manim: no

Correct exercise list (Problems 3, 6, 9 and 12 checked); it works as a problem set.

- [Links] Link the cross-references (Section 1.5 in Problem 5, the Weyl tensor of Problem 8, Section 1.11 in Problem 10) to \[\[1.5 Killing vectors\]\], \[\[1.9 Curvature\]\], and \[\[1.11 Fermi normal coordinates\]\].

### N3287

Note: [[1.2 Covariant differentiation|1.2 Covariant differentiation]]  
Priority: low · Graph: no · Manim: no

Correct transcription of the connection transformation law and Christoffel formula; dense but standard.

- [Example] Add plane polar Christoffel symbols ($\Gamma^r_{\phi\phi}=-r$, $\Gamma^\phi_{r\phi}=1/r$) and show that $A^\alpha{}_{;\beta}=0$ for the constant Cartesian field $\partial_x$ even though its polar components vary.
- [Simplify] Add the two-line derivation of Eq. (1.11) (cyclic sum of $g_{\alpha\beta;\gamma}=0$ plus symmetry), which the text calls "easy to show".

### N3288

Note: [[1.3 Geodesics|1.3 Geodesics]]  
Priority: low · Graph: no · Manim: no

Correct and compact derivation of the geodesic equation with arbitrary and affine parameters.

- [Example] Illustrate the practical method mentioned after Eq. (1.14): apply Euler–Lagrange to $L'=\tfrac12g_{\alpha\beta}\dot x^\alpha\dot x^\beta$ for the 2-sphere and read off $\Gamma^\theta_{\phi\phi}=-\sin\theta\cos\theta$, $\Gamma^\phi_{\theta\phi}=\cot\theta$.
- [Simplify] Expand "A straightforward calculation shows" before Eq. (1.13) with the intermediate step $\frac{\mathrm d}{\mathrm d\lambda}(g_{\alpha\beta}\dot x^\beta/L)-\frac{1}{2L}g_{\beta\gamma,\alpha}\dot x^\beta\dot x^\gamma=0$, which shows where $\kappa=\mathrm d\ln L/\mathrm d\lambda$ comes from.

### N3289

Note: [[1.4 Lie differentiation|1.4 Lie differentiation]]  
Priority: medium · Graph: no · Manim: yes

Correct derivation of the Lie derivative, but the geometric difference from the covariant derivative is only implied.

- [Manim] Animate the rotation flow $u=\partial_\phi$ in the plane dragging a vector along it, next to a parallel-transported copy of the same vector; the Lie-dragged vector turns with the flow and the parallel-transported one does not.
- [Example] Compute $\mathcal L_uA$ for $u=-y\partial_x+x\partial_y$ and $A=\partial_x$ with Eq. (1.16), giving $\mathcal L_uA=[u,A]=-\partial_y$, to make the definition concrete.
- [Links] The text cites Fig. 1.2, which is embedded only in \[\[1.2 Covariant differentiation\]\]; link or re-embed it.

### N3290

Note: [[1.5 Killing vectors|1.5 Killing vectors]]  
Priority: low · Graph: no · Manim: no

Correct and concise introduction; the two extra rotation Killing vectors are correct (overall sign is a convention).

- [Links] Link to the expanded \[\[Killing Vector\]\] note in 02 General Relativity, which already has the sphere figure and the Killing-tensor extension.
- [Example] Add the Schwarzschild case $A=1/B=1-2M/r$, where $\widetilde E=(1-2M/r)\,\mathrm dt/\mathrm d\tau$ and $\widetilde L=r^2\sin^2\theta\,\mathrm d\phi/\mathrm d\tau$, so the conserved quantities become familiar.

### N3291

Note: [[1.6 Local flatness|1.6 Local flatness]]  
Priority: low · Graph: no · Manim: no

Correct counting proof of local flatness, though the claim that second derivatives cannot be removed is not justified.

- [Simplify] Add the third-order count behind "not possible to also set the derivatives of the connection to zero": the coefficients $\partial^3x^{\alpha'}/\partial x^\beta\partial x^\gamma\partial x^\delta$ give $4\times20=80$ free values, while $g_{\alpha\beta,\gamma\delta}$ has $10\times10=100$ components; the 20 left over are the independent Riemann components.

### N3292

Note: [[1.7 Metric determinant|1.7 Metric determinant]]  
Priority: low · Graph: no · Manim: no

Correct derivations of the invariant volume element and divergence formula.

- [Example] Add the divergence formula in spherical coordinates, $A^\alpha{}_{;\alpha}=r^{-2}\partial_r(r^2A^r)+\dots$, which is used directly in \[\[2.3.7 Another example\]\] and \[\[2.4.7 Another example\]\].

### N3293

Note: [[1.8 Levi-Civita tensor|1.8 Levi-Civita tensor]]  
Priority: low · Graph: no · Manim: no

Correct transcription; the proof is complete and the sign of Eq. (1.30) is correctly emphasized.

- [Intuition] Add one sentence that the minus sign in Eq. (1.30) comes from $g<0$ in Lorentzian signature (raising all four indices multiplies by $1/g$).

### N3294

Note: [[1.9 Curvature|1.9 Curvature]]  
Priority: low · Graph: no · Manim: no

Correct summary of the Riemann, Ricci and Einstein tensors and the field equations, with MTW signs that match Eq. (1.31).

- [Example] Add the 2-sphere of radius $a$ as a quick check: $R_{\theta\phi\theta\phi}=a^2\sin^2\theta$ and Ricci scalar $2/a^2$, so the reader can verify Eq. (1.32) and the sign conventions.
- [Links] Link the geometric interpretation of the Riemann tensor to \[\[1.10 Geodesic deviation\]\].

### N3295

Note: [[02 Physics/05 Relativity and Gravitation/03 Relativists Toolkit/02 Geodesic congruences/2.0 Chapter introduction|2.0 Chapter introduction]]  
Priority: low · Graph: no · Manim: no

Clear chapter overview; no change needed.

- [Links] Link the section numbers 2.1–2.4 to their hub notes.

### N3296

Note: [[2.1 Energy conditions|2.1 Energy conditions]]  
Priority: medium · Graph: yes · Manim: no

Useful summary table, but the weak-energy row repeats a strict inequality that is wrong.

- [Correctness] Table 2.1, weak row: "$\rho+p_i>0$" should be $\rho+p_i\ge0$ (a cosmological constant with $\rho=-p>0$ satisfies the WEC with $\rho+p=0$).
- [Graph] Plot the allowed region of each condition for a perfect fluid in the $(\rho,p)$ plane, $\rho\in[-1,2]$, $p\in[-2,2]$: NEC $\rho+p\ge0$; WEC adds $\rho\ge0$; SEC is NEC plus $\rho+3p\ge0$; DEC $\rho\ge|p|$; mark dust, radiation ($p=\rho/3$), and dark energy ($p=-\rho$).

### N3297

Note: [[2.1.1 Introduction and summary|2.1.1 Introduction and summary]]  
Priority: low · Graph: no · Manim: no

Correct setup of the eigenvalue decomposition and observer vectors.

- [Intuition] Add one sentence that Eq. (2.1) is not fully general (some stress-energy tensors, for example null dust, have no timelike eigenvector), so the derived inequalities apply to the common "type I" case.

### N3298

Note: [[2.1.2 Weak energy condition|2.1.2 Weak energy condition]]  
Priority: medium · Graph: no · Manim: no

The argument is clear but ends with a wrong strict inequality caused by an invalid step.

- [Correctness] "$0\le\rho+a^2p_1<\rho+p_1$" holds only for $p_1>0$; the correct argument lets $a^2\to1$ and gives $\rho+p_1\ge0$, so Eq. (2.7) should read $\rho\ge0$, $\rho+p_i\ge0$ (not $>0$).
- [Example] Add a quick check: dust ($p=0$) and radiation ($p=\rho/3$) satisfy the WEC, while the negative-energy Casimir region of \[\[2.1.6 Violations of the energy conditions\]\] does not.

### N3299

Note: [[2.1.3 Null energy condition|2.1.3 Null energy condition]]  
Priority: low · Graph: no · Manim: no

Correct and short.

- [Intuition] Add that the NEC is the condition used in the null focusing theorem (\[\[2.4.5 Focusing theorem\]\]) and in the horizon area theorem, which explains why the weakest condition is also the most important one.

### N3300

Note: [[2.1.4 Strong energy condition|2.1.4 Strong energy condition]]  
Priority: low · Graph: no · Manim: no

Correct derivation (algebra checked), but the remark that the SEC does not imply the WEC lacks an example.

- [Example] Give the counterexample: a negative cosmological constant ($\rho<0$, $p=-\rho$) satisfies the SEC but violates the WEC; conversely, dark energy with $p=-\rho$, $\rho>0$ violates the SEC, which is why it drives cosmic acceleration.
- [Simplify] Show the "simple algebra" step: multiply by $1-a^2$ and collect terms to get $\rho+\sum_ip_i\ge a^2(p_2+p_3-\rho-p_1)$.

### N3301

Note: [[2.1.5 Dominant energy condition|2.1.5 Dominant energy condition]]  
Priority: low · Graph: no · Manim: no

Correct derivation of $\rho\ge|p_i|$.

- [Intuition] Add that $-T^\alpha{}_\beta v^\beta$ is the energy-momentum current (four-momentum density) seen by the observer, and that for a perfect fluid the DEC is simply $|p|\le\rho$.

### N3302

Note: [[2.1.6 Violations of the energy conditions|2.1.6 Violations of the energy conditions]]  
Priority: medium · Graph: no · Manim: no

Correct Casimir formula, but the status of the averaged null energy condition is reported as of 1994 and is outdated.

- [Correctness] "recent work suggests" and "Its status in curved spacetimes is not yet fully settled ... as of 1994" are outdated: the ANEC has since been proven in flat spacetime for general unitary Lorentz-invariant QFTs (Faulkner, Leigh, Parrikar, Wang 2016; Hartman, Kundu, Tajdini 2017); add a dated update note.
- [Correctness] $\energy{\hbar}$ is coloured as an energy, but $\hbar$ is an action (J s, or m$^2$ in geometrized units); use the appropriate macro group or leave it uncoloured.
- [Example] Add the SI form $\rho=-\pi^2\hbar c/(720d^4)$ and a number: for $d=1\,\mu$m, $\rho\approx-4.3\times10^{-4}$ J/m$^3$.

### N3303

Note: [[2.2 Kinematics of a deformable medium|2.2 Kinematics of a deformable medium]]  
Priority: low · Graph: no · Manim: no

Hub page; no change needed.

- [Structure] Add one sentence stating the section's result: $B^a{}_b$ splits into expansion, shear, and rotation.

### N3304

Note: [[2.2.1 Two-dimensional medium|2.2.1 Two-dimensional medium]]  
Priority: low · Graph: no · Manim: no

Clear Newtonian warm-up.

- [Correctness] The physical-quantity table lists $\mechanical{B}_{ab}$, $\mechanical{r}_1$, and $\mechanical{\phi}'$, which this note never uses; trim the table to the symbols in the note.
- [Intuition] Add that $B^a{}_b=\partial v^a/\partial x^b$ is the velocity gradient of the medium, linking it to familiar fluid kinematics.

### N3305

Note: [[2.2.2 Expansion|2.2.2 Expansion]]  
Priority: low · Graph: no · Manim: no

Correct and simple; the table contains unused symbols.

- [Correctness] The table lists $\mechanical{B}_{ab}$ and $\mechanical{\phi}'$, which this note does not use; remove them.
- [Simplify] State that $\Delta A=\pi r_0^2\theta\Delta t$ holds to first order in $\Delta t$ (the exact area is $\pi r_0^2(1+\tfrac12\theta\Delta t)^2$).

### N3306

Note: [[2.2.3 Shear|2.2.3 Shear]]  
Priority: low · Graph: no · Manim: yes

Correct shear algebra with an accurate, area-preserving ellipse figure.

- [Correctness] The table lists $\mechanical{B}_{ab}$, $\mechanical{\sigma}_{ab}$, and $\mechanical{\phi}'$, which this note does not use; remove them.
- [Manim] Animate the circle deforming under $\sigma_+$ and then under $\sigma_\times$, with tracer points, showing that the area stays constant while the axes stretch and squeeze.

### N3307

Note: [[2.2.4 Rotation|2.2.4 Rotation]]  
Priority: low · Graph: no · Manim: no

Correct; the rotation sense is not stated.

- [Correctness] The table lists $\mechanical{B}_{ab}$, $\mechanical{r}_1$, and $\mechanical{\omega}_{ab}$, which this note does not use; remove them.
- [Intuition] Note that with this sign convention $\phi'=\phi-\omega\Delta t$, so positive $\omega$ rotates the figure clockwise.

### N3308

Note: [[2.2.5 General case|2.2.5 General case]]  
Priority: medium · Graph: no · Manim: yes

Correct decomposition, but the combined action is only stated in words.

- [Manim] Animate a circle of tracer points under a general $B^a{}_b$ (for example $\theta=0.4$, $\sigma_+=0.3$, $\omega=0.5$), then split the motion into its three parts side by side.
- [Example] Decompose one numerical matrix, for example $B=\begin{pmatrix}1&2\\0&0\end{pmatrix}$, into $\theta=1$, $\sigma_+=\tfrac12$, $\sigma_\times=1$, $\omega=1$.

### N3309

Note: [[2.2.6 Three-dimensional medium|2.2.6 Three-dimensional medium]]  
Priority: low · Graph: no · Manim: no

Correct Jacobian argument for the volume interpretation.

- [Simplify] State that $\det(1+B\Delta t)=1+\operatorname{Tr}B\,\Delta t$ holds to first order in $\Delta t$, so shear and rotation change the volume only at order $\Delta t^2$.

### N3310

Note: [[2.3 Congruence of timelike geodesics|2.3 Congruence of timelike geodesics]]  
Priority: low · Graph: no · Manim: no

Clear setup note.

- [Links] Link "Section 1.10" to \[\[1.10 Geodesic deviation\]\] and add links to the subsection notes 2.3.1–2.3.8 so the note also works as a hub.

### N3311

Note: [[2.3.1 Transverse metric|2.3.1 Transverse metric]]  
Priority: low · Graph: no · Manim: no

Correct and short.

- [Intuition] Add that $h^\alpha{}_\beta$ projects onto the comoving observer's local rest space, so $h^\alpha{}_\beta A^\beta$ is the spatial part of $A$ seen by that observer.

### N3312

Note: [[2.3.2 Kinematics|2.3.2 Kinematics]]  
Priority: low · Graph: no · Manim: no

Correct; clearly links back to the Newtonian decomposition.

- [Links] Link "the first equation of Section 2.2" to \[\[2.2.1 Two-dimensional medium\]\].

### N3313

Note: [[2.3.3 Frobenius' theorem|2.3.3 Frobenius' theorem]]  
Priority: low · Graph: no · Manim: no

Correct proof, though long and with one notational typo.

- [Correctness] "$\omega_{\alpha\beta}=-\Phi_{[\alpha}\mu_{,\beta]}$" is missing a comma; it should be $-\Phi_{,[\alpha}\mu_{,\beta]}$.
- [Example] Add a counterexample: rigidly rotating observers $u\propto\partial_t+\Omega\partial_\phi$ in flat spacetime have $\omega_{\alpha\beta}\neq0$ and no orthogonal hypersurfaces, which shows what the theorem rules out.

### N3314

Note: [[2.3.4 Raychaudhuri's equation|2.3.4 Raychaudhuri's equation]]  
Priority: low · Graph: no · Manim: no

Correct derivation (Ricci-identity sign checked), but the identity for $B^{\alpha\beta}B_{\beta\alpha}$ is skipped.

- [Correctness] The physical-quantity table lists $\mechanical{\theta}_0$, $\mechanical{u}^t$, $\mechanical{u}^r$, $\mechanical{u}^\theta$, $\mechanical{u}^\phi$, and $\mechanical{u}_t$, none of which appear in this note; trim it.
- [Simplify] Show the check $B^{\alpha\beta}B_{\beta\alpha}=\tfrac13\theta^2+\sigma^{\alpha\beta}\sigma_{\alpha\beta}-\omega^{\alpha\beta}\omega_{\alpha\beta}$: cross terms vanish because $\sigma$ is tracefree and symmetric while $\omega$ is antisymmetric, and $\omega^{\alpha\beta}\omega_{\beta\alpha}=-\omega^{\alpha\beta}\omega_{\alpha\beta}$.

### N3315

Note: [[2.3.5 Focusing theorem|2.3.5 Focusing theorem]]  
Priority: medium · Graph: yes · Manim: no

Correct statement and integration, but the blow-up of $\theta$ is described only in words.

- [Graph] Plot the bounding solution $\theta(\tau)=1/(1/\theta_0+\tau/3)$ for $\theta_0=+1,-1,-2$ (inverse length units), $\tau\in[0,4]$, with vertical asymptotes at $\tau=3/|\theta_0|$ for the converging cases.
- [Correctness] The physical-quantity table lists $\mechanical{u}^t$, $\mechanical{u}^r$, $\mechanical{u}^\theta$, $\mechanical{u}^\phi$, and $\mechanical{u}_t$, which this note never uses; trim it.
- [Intuition] Add that rotation enters Eq. (2.20) with a plus sign and can prevent focusing (a centrifugal effect), which is why hypersurface orthogonality is assumed.

### N3316

Note: [[2.3.6 Example|2.3.6 Example]]  
Priority: low · Graph: yes · Manim: no

Correct FRW example; the table is copied from other notes.

- [Correctness] The table lists $\mechanical{u}^r$, $\mechanical{u}^\theta$, $\mechanical{u}^\phi$, $\mechanical{u}_t$, $\mechanical{\theta}_0$, and $\mechanical{B}^{\alpha\beta}$, none of which appear in this note; trim it.
- [Graph] Plot $\theta(t)=3\dot a/a$ for matter ($a\propto t^{2/3}$, $\theta=2/t$) and radiation ($a\propto t^{1/2}$, $\theta=3/(2t)$) for $t\in[0.1,5]$, so the decreasing expansion predicted by the focusing theorem is visible.

### N3317

Note: [[2.3.7 Another example|2.3.7 Another example]]  
Priority: medium · Graph: yes · Manim: no

Correct calculations ($\Phi$, $\theta$, and $\mathrm d\theta/\mathrm d\tau$ verified), but $\theta$ means two things in the same note.

- [Correctness] Symbol clash: $\mechanical{\theta}$ is both the polar angle in $\mathrm d\Omega^2$ and the expansion scalar, and the table lists both meanings; rename the angle (for example $\vartheta$) or add an explicit warning.
- [Intuition] Add the Raychaudhuri check: with $R_{\alpha\beta}=0$ and $\omega=0$, $\sigma^{\alpha\beta}\sigma_{\alpha\beta}=9M/(2r^3)-\theta^2/3=3M/r^3\neq0$, so the focusing here comes entirely from tidal shear.
- [Graph] Plot $\theta(r)=-\tfrac32\sqrt{2M/r^3}$ and $\mathrm d\theta/\mathrm d\tau=-9M/(2r^3)$ for ingoing geodesics against $r/M\in[1,20]$, marking the horizon $r=2M$, where nothing is singular.

### N3318

Note: [[2.3.8 Interpretation of θ|2.3.8 Interpretation of θ]]  
Priority: low · Graph: no · Manim: no

Correct and careful proof, with the wrong derivative variable in the headline equation.

- [Correctness] Eq. (2.21) is written with $\mathrm d/\mathrm d\mechanical{t}$, but the note (and Eq. 2.27) uses proper time; write $\theta=\delta V^{-1}\,\mathrm d\delta V/\mathrm d\tau$ and drop $\mechanical{t}$ from the table.
- [Links] Link Eqs. (2.16) and (2.17) to \[\[2.3.2 Kinematics\]\] and the determinant-variation step to \[\[1.7 Metric determinant\]\].

### N3319

Note: [[2.4 Congruence of null geodesics|2.4 Congruence of null geodesics]]  
Priority: low · Graph: no · Manim: no

Clear setup note for the null case.

- [Correctness] The table lists $\mechanical{\tilde\xi}^\alpha$ and $h'_{\alpha\beta}$, which appear only in later notes; trim it to the symbols used here.
- [Links] Add links to the subsection notes 2.4.1–2.4.8 so the note works as a hub.

### N3320

Note: [[2.4.1 Transverse metric|2.4.1 Transverse metric]]  
Priority: low · Graph: no · Manim: no

Correct construction (normalization $k^\alpha N_\alpha=-1$ checked in the null coordinates).

- [Intuition] Add one sentence that $N^\alpha$ is the light ray travelling opposite to $k^\alpha$, so $h_{\alpha\beta}$ is the metric of the wave-front 2-surface seen by both rays.

### N3321

Note: [[2.4.2 Kinematics|2.4.2 Kinematics]]  
Priority: low · Graph: no · Manim: no

Correct derivation of $\tilde B_{\alpha\beta}$ and $\theta=k^\alpha{}_{;\alpha}$; long but complete.

- [Simplify] Add a short summary at the top: only the transverse projection $\tilde B$ matters, $\theta$ is independent of $N^\alpha$, and $\sigma$, $\omega$ change only by terms along $k^\alpha$ (Problem 6 of \[\[2.6 Problems\]\]).

### N3322

Note: [[2.4.3 Frobenius' theorem|2.4.3 Frobenius' theorem]]  
Priority: low · Graph: no · Manim: no

Correct algebra, but the opening sentence announces the converse of what is proved.

- [Simplify] The note opens with "if $\omega_{\alpha\beta}=0$, then the congruence is hypersurface orthogonal", but Eq. (2.38) proves the opposite direction; add the one-line converse (if $\tilde B_{[\alpha\beta]}=0$, then $B_{[\alpha\beta]}$ has only terms along $k_\alpha$ or $k_\beta$, so $k_{[\alpha;\beta}k_{\gamma]}=0$) or reword the opening.
- [Links] Link "Section 2.3.3" to \[\[2.3.3 Frobenius' theorem\]\] and "Problem 6" to \[\[2.6 Problems\]\].

### N3323

Note: [[2.4.4 Raychaudhuri's equation|2.4.4 Raychaudhuri's equation]]  
Priority: low · Graph: no · Manim: no

Correct; relies on the timelike derivation.

- [Correctness] The table lists $\mechanical{\theta}_0$ and the $\mechanical{k}^{\rm out}$, $\mechanical{k}^{\rm in}$ variants, none of which appear in this note; trim it.
- [Simplify] Explain why $B^{\alpha\beta}B_{\beta\alpha}=\tilde B^{\alpha\beta}\tilde B_{\beta\alpha}$: the extra terms of Eq. (2.35) are proportional to $k_\alpha$ or $k_\beta$ and drop out because $B$ is orthogonal to $k$.

### N3324

Note: [[2.4.5 Focusing theorem|2.4.5 Focusing theorem]]  
Priority: low · Graph: yes · Manim: no

Correct null analogue of the focusing theorem.

- [Correctness] The table lists the $\mechanical{k}^{\rm out}$, $\mechanical{k}^{\rm in}$ variants, which this note never uses; trim it.
- [Graph] Plot $\theta(\lambda)=1/(1/\theta_0+\lambda/2)$ for $\theta_0=-1$ together with the timelike bound $1/(1/\theta_0+\tau/3)$, showing the earlier caustic for the null case ($\lambda=2$ versus $\tau=3$).

### N3325

Note: [[2.4.6 Example|2.4.6 Example]]  
Priority: low · Graph: no · Manim: no

Correct light-cone example ($B_{\alpha\beta}$, $\theta=2/r$, and the alternative null $N_\alpha$ verified), but $\theta$ is overloaded.

- [Correctness] Symbol clash: $\mechanical{\theta}$ is the polar angle in $h_{\alpha\beta}=\operatorname{diag}(0,0,r^2,r^2\sin^2\theta)$ and also the expansion $\theta=2/r$, and the table lists both; rename the angle or add a warning.
- [Simplify] Show the "straightforward calculation" in one line: $B_{\theta\theta}=-\Gamma^r_{\theta\theta}k_r=r$ and $B_{\phi\phi}=-\Gamma^r_{\phi\phi}k_r=r\sin^2\theta$.

### N3326

Note: [[2.4.7 Another example|2.4.7 Another example]]  
Priority: low · Graph: yes · Manim: no

Correct results ($\theta=\pm2/r$ and $\mathrm d\theta/\mathrm d\lambda=-2/r^2$ verified), but the notation is inconsistent.

- [Correctness] Symbol clash: the table lists $\mechanical{\theta}$ both as a sphere angle and as the expansion; the index placement also switches between $k^{\rm out}_\alpha$ and $k_{\rm out}^\alpha$; make both consistent.
- [Graph] Plot outgoing and ingoing $\theta=\pm2/r$ against $r/M\in[2,20]$, and add a $t$ versus $r^*$ diagram with lines of constant $u$ and constant $v$.

### N3327

Note: [[2.4.8 Interpretation of θ|2.4.8 Interpretation of θ]]  
Priority: low · Graph: no · Manim: no

Correct outline of the area interpretation; it reuses symbols in a confusing way.

- [Simplify] Warn that $\sigma_{AB}$ (two-metric) differs from the shear $\sigma_{\alpha\beta}$, that the coordinates $\theta^A$ differ from the expansion $\theta$, and that the auxiliary parameter $\mu$ is unrelated to the factor $\mu$ in Frobenius' theorem.

### N3328

Note: [[2.5 Bibliographical notes|2.5 Bibliographical notes]]  
Priority: low · Graph: no · Manim: no

Bibliography transcription; no change needed.

- [Structure] No change needed.

### N3329

Note: [[2.6 Problems|2.6 Problems]]  
Priority: low · Graph: no · Manim: no

Correct problem list; the stated result of Problem 3(c) was verified symbolically.

- [Links] Link the references "Section 1.13, Problem 8" in Problems 4 and 7 to \[\[1.13 Problems\]\] and the auxiliary-vector discussion in Problem 6 to \[\[2.4.1 Transverse metric\]\].

### N3330

Note: [[3.0 Chapter introduction|3.0 Chapter introduction]]  
Priority: low · Graph: no · Manim: no

Clear chapter overview; no change needed.

- [Links] Link the section ranges (3.1–3.3, 3.4–3.6, 3.7–3.11) to their hub notes.

### N3331

Note: [[3.1 Description of hypersurfaces|3.1 Description of hypersurfaces]]  
Priority: low · Graph: no · Manim: no

Hub page; no change needed.

- [Structure] Add one sentence that summarizes the section (defining equations, normal vector, induced metric, light-cone example).

### N3332

Note: [[3.1.1 Defining equations|3.1.1 Defining equations]]  
Priority: low · Graph: no · Manim: no

Correct and simple.

- [Example] Add spacetime examples before the null case, for example the spacelike slice $\Phi=t$ and the timelike cylinder $\Phi=r-R$ in flat spacetime.

### N3333

Note: [[3.1.2 Normal vector|3.1.2 Normal vector]]  
Priority: medium · Graph: yes · Manim: no

Correct (Eq. 3.4 sign convention and the null-geodesic argument check out), but the three cases are hard to picture.

- [Graph] Draw a 1+1 Minkowski diagram ($x$ horizontal, $t$ vertical, range $[-2,2]$) with a spacelike line $t=0.3x$, a timelike line $x=0.3t$, and a null line $t=x$, each with its normal vector; for the null line the normal lies along the line itself.
- [Simplify] Show the one-line check of Eq. (3.4), $n^\alpha n_\alpha=\varepsilon^2\Phi^{,\alpha}\Phi_{,\alpha}/|\Phi^{,\mu}\Phi_{,\mu}|=\varepsilon$.

### N3334

Note: [[3.1.3 Induced metric|3.1.3 Induced metric]]  
Priority: low · Graph: no · Manim: no

Correct and clear description of the induced metric and the completeness relations.

- [Example] Add the induced metric of the timelike cylinder $r=R$ in flat spacetime, $\mathrm ds^2_\Sigma=-\mathrm dt^2+R^2\mathrm d\Omega^2$, as a non-null counterpart to \[\[3.1.4 Light cone in flat spacetime\]\].

### N3335

Note: [[3.1.4 Light cone in flat spacetime|3.1.4 Light cone in flat spacetime]]  
Priority: low · Graph: yes · Manim: no

Correct worked example (tangent vectors, $\sigma_{AB}$, and $N^\alpha$ verified).

- [Graph] Add a graph3d of the future light cone $t=\sqrt{x^2+y^2}$ (one spatial dimension suppressed) for $t\in[0,2]$ with 8 generators ($\phi=k\pi/4$) and the cross-section circle at $\lambda=1.5$, whose circumference grows linearly with $\lambda$ (area $4\pi\lambda^2$ in 3+1).

### N3336

Note: [[3.10 Slowly rotating shell|3.10 Slowly rotating shell]]  
Priority: medium · Graph: yes · Manim: yes

Faithful and numerically correct (Eqs. 3.79-3.83 and the large-R limits re-derive), but the long stretch from $K^a{}_b$ to the perfect-fluid form is algebra-heavy with little physical narration.

- [Correctness] Symbol clash: $\mechanical{\Omega}$ is the frame angular velocity (3.72-3.73) while $\mathrm d\Omega^2$ in (3.71) is the solid-angle element; write the angular part explicitly or call the frame rate $\mechanical{\Omega_{\mathrm{in}}}$ from the start.
- [Simplify] Show the two intermediate steps the note skips: the eigenvalue equation $\energy{S^\psi{}_t}+\energy{S^\psi{}_\psi}\mechanical{\omega}=-\energy{\sigma}\mechanical{\omega}$ that yields $\mechanical{\omega}=-\energy{S^\psi{}_t}/(\energy{\sigma}+\energy{S^\psi{}_\psi})$, and the identity $8\pi\mechanical{R}\sqrt f(\energy{\sigma}+\mechanical{p})=(1-\sqrt f)(1+3\sqrt f)/2$ that produces (3.79).
- [Intuition] Before the algebra, state the physical picture in one paragraph: inside the shell spacetime is flat but its natural nonrotating frame turns at $\mechanical{\Omega_{\mathrm{in}}}$ relative to the stars, which is why the interior metric (3.75) is written in the rotating coordinate $\mechanical{\psi}$.
- [Graph] Plot $\mechanical{\Omega_{\mathrm{in}}}/\mechanical{\Omega_{\mathrm{shell}}}=(1-\sqrt{1-2x})(1+3\sqrt{1-2x})/(1+2\sqrt{1-2x})$ with $x=\mechanical{M}/\mechanical{R}$ against $\mechanical{R}/\mechanical{M}$ from 2 to 30, overlaying the weak-field approximation $4\mechanical{M}/(3\mechanical{R})$, to show the approach to corotation at $\mechanical{R}\to2\mechanical{M}$.
- [Graph] Second plot: dimensionless $4\pi\mechanical{R}\energy{\sigma}$ and $8\pi\mechanical{R}\mechanical{p}$ from (3.80)-(3.81) against $\mechanical{R}/\mechanical{M}$ in $[2,20]$, showing the pressure diverging as $\mechanical{R}\to2\mechanical{M}$.
- [Manim] Top-down view of a rotating shell with a nonrotating frame (gyroscope cross) inside, animating the interior frame being dragged at $\mechanical{\Omega_{\mathrm{in}}}$ while the shell turns at $\mechanical{\Omega_{\mathrm{shell}}}$, with $\mechanical{R}/\mechanical{M}$ decreased toward 2 to show corotation.

### N3337

Note: [[3.11 Null shells|3.11 Null shells]]  
Priority: low · Graph: no · Manim: no

Short section hub with a clear motivation paragraph and correct child links.

- [Structure] No change needed; optionally add one sentence on why null shells (matter moving at the speed of light, for example an impulsive burst of radiation) are physically relevant.

### N3338

Note: [[3.11.1 Geometry|3.11.1 Geometry]]  
Priority: medium · Graph: no · Manim: yes

Correct and careful setup, but the many basis vectors and the arbitrary observer congruence are introduced without a picture, which makes the construction hard to follow.

- [Intuition] Add a short paragraph or figure explaining why the normal of a null surface is also tangent to it (so "orthogonal crossing" fails to pick a congruence), contrasting with the timelike or spacelike case of Section 3.7.
- [Simplify] Add a small table of the basis $(\mechanical{k}^\alpha,e^\alpha_A,N^\alpha)$ with all inner products ($\mechanical{k}\cdot\mechanical{k}=0$, $\mechanical{k}\cdot e_A=0$, $N\cdot N=0$, $N\cdot\mechanical{k}=-1$, $N\cdot e_A=0$, $e_A\cdot e_B=\sigma_{AB}$) before the completeness relation (3.89).
- [Example] Illustrate the basis with the simplest case, the light cone $\mechanical{t}=\mechanical{r}$ in Minkowski space with $\mechanical{\lambda}=\mechanical{r}$, giving explicit $\mechanical{k}^\alpha$, $N_\alpha$ and $\sigma_{AB}=\mechanical{r}^2\Omega_{AB}$.
- [Simplify] Spell out the one-line check of (3.92): contracting with $\mechanical{u}^\alpha$ and using $\mechanical{u}^\alpha\partial_\alpha\mechanical{\tau}=1$ returns $\mechanical{k}_\alpha\mechanical{u}^\alpha$.
- [Manim] Spacetime diagram of a null surface at 45 degrees with timelike observer worldlines crossing it at different tilts, showing that each family is equally valid and that $\mechanical{\tau}=0$ marks the crossing.

### N3339

Note: [[3.11.2 Surface stress-energy tensor|3.11.2 Surface stress-energy tensor]]  
Priority: medium · Graph: no · Manim: no

Accurate distributional derivation of the null-shell stress-energy tensor, but dense and with a notational clash between the jump tensor and spacetime indices.

- [Correctness] Symbol clash: $\gamma_{\alpha\beta}$ (the jump tensor of Eq. 3.94) appears in the same equations as the free index $\gamma$ (for example $[g_{\alpha\beta,\gamma}]=-\gamma_{\alpha\beta}\mechanical{k}_\gamma$ and $[\Gamma^\alpha_{\beta\gamma}]$ in 3.95); relabel the free index or note the clash explicitly.
- [Correctness] Missing semantic macro: $k^\beta$ is written bare in (3.98) ($\gamma_{\alpha\beta}e^\alpha_Ak^\beta$) and (3.99) ($e^\alpha_Ak^\beta$); use $\mechanical{k}^\beta$ as everywhere else.
- [Simplify] Show the short step from (3.95) to (3.96), and state up front that only the transverse derivative $g_{\alpha\beta,\gamma}N^\gamma$ can jump because tangential derivatives of a continuous metric are continuous.
- [Intuition] After (3.99), interpret the three terms: $\energy{\mu}$ is energy flowing along the generators, $\mechanical{j^A}$ a flow across generators, $\mechanical{p}$ an isotropic transverse stress; mention that the factor $(-\mechanical{k}_\mu\mechanical{u}^\mu)^{-1}$ encodes the observer dependence.

### N3340

Note: [[3.11.3 Intrinsic formulation|3.11.3 Intrinsic formulation]]  
Priority: low · Graph: no · Manim: no

Clear explanation of why the extrinsic curvature is useless for null surfaces and how the transverse curvature replaces it; one index typo.

- [Correctness] Index typo in the jump calculation: $[C_{ab}]=[N_{\alpha;\beta}]e^\alpha_ae^\alpha_b$ (repeated in all three lines) should read $e^\alpha_ae^\beta_b$.
- [Correctness] Missing semantic macro: $k^\beta$ is bare in $[C_{A\mechanical{\lambda}}]=\frac12\gamma_{\alpha\beta}e^\alpha_Ak^\beta$; use $\mechanical{k}^\beta$.
- [Simplify] In the second line of the jump calculation, explain why $[N_{\alpha;\beta}]=-[\Gamma^\gamma_{\alpha\beta}]N_\gamma$ (the partial derivatives of $N_\alpha$ are continuous in the continuous coordinates) and show the contraction $\mechanical{k}^\gamma N_\gamma=-1$ that produces the $+\frac12$.
- [Structure] Add a short side-by-side comparison of the timelike formula $\energy{S_{ab}}=-\frac{\varepsilon}{8\pi}([K_{ab}]-[K]h_{ab})$ with (3.101) to make the analogy explicit.

### N3341

Note: [[3.11.4 Summary|3.11.4 Summary]]  
Priority: low · Graph: no · Manim: no

Compact, correct summary of the null-shell formalism.

- [Correctness] Missing semantic macro: $e^\alpha_Ak^\beta$ in the $\energy{S^{\alpha\beta}}$ formula should use $\mechanical{k}^\beta$.
- [Links] Link the summarized equations to \[\[3.11.2 Surface stress-energy tensor\]\] and \[\[3.11.3 Intrinsic formulation\]\], and note that $-\mechanical{k}_\mu\mechanical{u}^\mu=1$ for the observers used in \[\[3.11.6 Imploding spherical shell\]\] and \[\[3.11.8 Cosmological phase transition\]\].

### N3342

Note: [[3.11.5 Parameterization of the null generators|3.11.5 Parameterization of the null generators]]  
Priority: medium · Graph: no · Manim: no

Mostly correct and the work-energy interpretation of (3.104) is valuable, but there is a missing inverse and the notation overloads $e$, $\sigma$ and $\theta$.

- [Correctness] The observer factor is mis-transformed: "$(-\bar{\mechanical{k}}_\mu\mechanical{u}^\mu)^{-1}=e^\beta(-\mechanical{k}_\mu\mechanical{u}^\mu)$" should be $e^\beta(-\mechanical{k}_\mu\mechanical{u}^\mu)^{-1}$, since $\bar{\mechanical{k}}^\alpha=e^{-\beta}\mechanical{k}^\alpha$; only then is $(-\mechanical{k}_\mu\mechanical{u}^\mu)^{-1}\energy{S^{\alpha\beta}}$ invariant.
- [Correctness] Symbol clashes: $e^\beta$ (exponential of the reparameterization function $\beta$) sits next to basis vectors $e^\alpha_A$ and the index $\beta$; $\mechanical{\sigma}_{\alpha\beta}$ (shear) and $\sqrt\sigma$ (determinant) clash with the two-metric $\sigma_{AB}$; $\mechanical{\theta}$ (expansion) clashes with $\theta^A$; use an upright $\mathrm e^{\beta}$ (or a named factor) and a distinct shear symbol.
- [Simplify] Add the one-line derivation of (3.104): $-8\pi\mechanical{p}\mechanical{\theta}=8\pi[\energy{T_{\alpha\beta}}\mechanical{k}^\alpha\mechanical{k}^\beta]$ together with $\mechanical{\theta}\,\mathrm d\mechanical{S}=\mathrm d(\mathrm d\mechanical{S})/\mathrm d\mechanical{\lambda}$, so the sign of $-\mechanical{p}\mechanical{\theta}=[\energy{T_{\alpha\beta}}\mechanical{k}^\alpha\mechanical{k}^\beta]$ is explicit.
- [Example] Point to \[\[3.11.8 Cosmological phase transition\]\] as the worked case with $[\mechanical{\kappa}]\ne0$ and to \[\[3.11.6 Imploding spherical shell\]\] where both sides are affine.

### N3343

Note: [[3.11.6 Imploding spherical shell|3.11.6 Imploding spherical shell]]  
Priority: medium · Graph: yes · Manim: yes

Correct and physical example ($C^\pm_{AB}$, $\energy{\mu}=\mechanical{M}/(4\pi\mechanical{r}^2)$ and $\energy{\tilde E}=1-\mechanical{M}/\mechanical{r_\Sigma}$ all re-derive), but the transverse curvatures and the observer kick are only asserted.

- [Simplify] Show the short computation $C_{AB}=-N_\alpha\Gamma^\alpha_{AB}=-N_r\Gamma^r_{\theta\theta}$ with $\Gamma^r_{\theta\theta}=-\mechanical{r}$ (inside) or $-\mechanical{r}f$ (outside), which gives $C^\mp_{AB}$ in two lines.
- [Example] Expand the "simple calculation, based on Eq. (3.91)": with $\mechanical{u}_t=-\energy{\tilde E}$ and $-\mechanical{k}_\alpha\mechanical{u}^\alpha=1$ one gets $\energy{\tilde E}-(\energy{\tilde E}^2-f)^{1/2}=f$, hence $\energy{\tilde E}=(1+f)/2=1-\mechanical{M}/\mechanical{r_\Sigma}$.
- [Simplify] Write $N_\alpha\mathrm dx^\alpha$ with explicit side labels ($\mathrm d\mechanical{t_-}$, $\mathrm d\mechanical{t_+}$) instead of the unlabelled $\mathrm d\mechanical{t}$.
- [Graph] Plot the post-crossing infall speed $|\mathrm d\mechanical{r}/\mathrm d\mechanical{\tau}|=\sqrt{\energy{\tilde E}^2-f}$ against $\mechanical{r}/\mechanical{M}$ for crossing radii $\mechanical{r_\Sigma}/\mechanical{M}=4,10,50$, showing larger kicks for observers crossing closer to the centre.
- [Manim] Spacetime animation of the null shell imploding at $45^\circ$ while initially static observers stay vertical until crossing and then tilt inward, with the horizon $\mechanical{r}=2\mechanical{M}$ appearing behind the shell.

### N3344

Note: [[3.11.7 Accreting black hole|3.11.7 Accreting black hole]]  
Priority: medium · Graph: yes · Manim: yes

Rich example whose key quantities ($\mechanical{k}^\alpha$, $\mechanical{\psi}$, $\energy{\mu}$, $\mechanical{j^\psi}$, $\mechanical{\Omega_{\mathrm{fluid}}}$) check out, but the stated relation between $\mechanical{\Omega_{\mathrm{relative}}}$ and $\mechanical{j^\psi}/\energy{\mu}$ drops a factor $f$.

- [Correctness] "$\mechanical{\Omega_{\mathrm{relative}}}=\mechanical{j^\psi}/\energy{\mu}=3\mechanical{M}\mechanical{a}f/(2\mechanical{m}\mechanical{r}^2)$" is inconsistent: $\mechanical{j^\psi}/\energy{\mu}=3\mechanical{M}\mechanical{a}/(2\mechanical{m}\mechanical{r}^2)$ without $f$; since $\mathrm d\mechanical{\phi}/\mathrm d\mechanical{t}=\mechanical{\ell}^\phi/\mechanical{\ell}^t=f\mechanical{\ell}^\phi$, the correct statement is $\mechanical{\Omega_{\mathrm{relative}}}=f\,\mechanical{j^\psi}/\energy{\mu}$.
- [Simplify] Show the check that $\mechanical{\psi}$ is constant on generators: $\mathrm d/\mathrm d\mechanical{r}\,[(\mechanical{a}/\mechanical{r})(1+(\mechanical{r}/2\mechanical{M})\ln f)]=2\mechanical{M}\mechanical{a}/(\mechanical{r}^3f)$.
- [Intuition] Explain why $\mechanical{j^\psi}$ appears: the accreted matter carries angular momentum, so it must move across the generators, which are only dragged; the jump $[C_{\mechanical{\lambda}\psi}]$ is the angular-momentum analogue of the mass jump $[C_{AB}]$.
- [Graph] Plot $\mechanical{\Omega_{\mathrm{generators}}}$, $\mechanical{\Omega_{\mathrm{fluid}}}$ and $\mechanical{\Omega_{\mathrm{relative}}}$ (in units of $\mechanical{a}/\mechanical{M}^2$) against $\mechanical{r}/\mechanical{M}$ from 2 to 10 for $\mechanical{m}/\mechanical{M}=0.1$, showing $\mechanical{\Omega_{\mathrm{relative}}}\to0$ at the horizon.
- [Manim] Top-down view of the infalling shell with generator lines spiralling in at $\mechanical{\Omega_{\mathrm{generators}}}$ and fluid elements spiralling faster, the two rates merging as the shell reaches $\mechanical{r}=2\mechanical{M}$.

### N3345

Note: [[3.11.8 Cosmological phase transition|3.11.8 Cosmological phase transition]]  
Priority: low · Graph: yes · Manim: no

Clear, fully checkable example (densities, $C^\pm_{ab}$, $\mechanical{\kappa_+}=1/(2\mechanical{t})$, $\mechanical{p}=-1/(16\pi\mechanical{t})$ and the energy balance all re-derive) with one index typo.

- [Correctness] Index typo: $\energy{S^{\alpha\beta}}=\mechanical{p}\sigma^{AB}e^\alpha_Ae^\alpha_B$ should be $\mechanical{p}\sigma^{AB}e^\alpha_Ae^\beta_B$.
- [Simplify] Add the short derivation of $\energy{\rho_-}=\mechanical{p_-}=1/(32\pi\mechanical{t}^2)$ from $G_{tt}=(\dot{\mechanical{a}}/\mechanical{a})^2$ and $G_{zz}=-(2\ddot{\mechanical{a}}/\mechanical{a}+\dot{\mechanical{a}}^2/\mechanical{a}^2)$ with $\mechanical{a}\propto\mechanical{t}^{1/2}$, and of $\mechanical{\kappa_+}=\Gamma^t_{zz}(\mechanical{k}^z)^2=\dot{\mechanical{a}}/\mechanical{a}$.
- [Intuition] State explicitly that the shell is a tension sheet doing work on the fluid: the factor-3 jump in $\energy{\rho}$ is supplied by $-\mechanical{p}\mechanical{\theta}$, making this the cleanest illustration of Eq. (3.104).
- [Graph] Plot the scale factors along $x$ and along $z$ against $\mechanical{t}$ for a fixed comoving point before and after the shell passes (constant in $z$, then $\propto\mechanical{t}^{1/2}$), together with $32\pi\mechanical{t}^2\energy{\rho}$ jumping from 1 to 3.

### N3346

Note: [[3.12 Bibliographical notes|3.12 Bibliographical notes]]  
Priority: low · Graph: no · Manim: no

Faithful bibliographic note from the source; adequate as is.

- [Links] Turn the section references (3.1-3.11) into wiki links to the corresponding notes, and optionally remark that the 2000 Cook Living Reviews article on initial data has since been complemented by newer reviews.

### N3347

Note: [[3.13 Problems|3.13 Problems]]  
Priority: low · Graph: no · Manim: no

Clean problem list with correct setups (Painlevé-Gullstrand form, de Sitter embedding, time-symmetric data), but two cross-references are inconsistent with the chapter notes.

- [Correctness] Problem 9 quotes "the general relation $\mechanical{p}\mechanical{\theta}=[\energy{T_{\alpha\beta}}\mechanical{k^\alpha}\mechanical{k^\beta}]$", but Eqs. (3.102)-(3.104) give $-\mechanical{p}\mechanical{\theta}=[\energy{T_{\alpha\beta}}\mechanical{k}^\alpha\mechanical{k}^\beta]$ (as also used in 3.11.8); fix the sign.
- [Correctness] Problem 8 says "Derive the relations (3.109)", but 3.11.5 assigns Problem 8 the derivation of the surface-quantity transformations (3.110); check against the source and make the two notes agree.
- [Links] Link the referenced sections (3.6.5, 3.6.6, 3.7.5, 3.11.5, 2.3.7) to their notes, for example \[\[3.11.5 Parameterization of the null generators\]\].
- [Simplify] In Problem 2(c), "constant Ricci curvature" undersells the result; the given $R_{\alpha\beta\gamma\delta}$ means a maximally symmetric spacetime of constant curvature (de Sitter).

### N3348

Note: [[3.2 Integration over hypersurfaces|3.2 Integration over hypersurfaces]]  
Priority: low · Graph: no · Manim: no

Short hub note with a correct TLDR and working links to its three subsections.

- [Structure] No change needed; optionally add one sentence saying which element (non-null $d\Sigma=|h|^{1/2}d^3y$, null $-k_\alpha\sqrt\sigma\,d^2\theta\,d\lambda$, two-surface $dS_{\alpha\beta}$) each subnote covers.

### N3349

Note: [[3.2.1 Surface element (non-null case)|3.2.1 Surface element (non-null case)]]  
Priority: medium · Graph: no · Manim: no

Faithful and correct transcription (both Minkowski examples and the cofactor proof check out), but dense, with the orientation convention and the $\varepsilon$ sign trap stated only in passing.

- [Correctness] The physical-quantities table lists $\theta^A$, $\mechanical{u}$, $d\Sigma_t$ and $d\Sigma_x$, which this note never uses (only $d\Sigma_\mu$ with $\delta_\mu^t$, $\delta_\mu^x$ appears); remove them.
- [Intuition] Before Eq. (3.15), say in one line why the Levi-Civita contraction gives a volume: $\epsilon_{\mu\alpha\beta\gamma}e_1^\alpha e_2^\beta e_3^\gamma$ is the 4D analogue of the cross product $\mathbf a\times\mathbf b$, giving a covector orthogonal to all three edges whose size is the parallelepiped volume.
- [Simplify] Put the sign convention ($f>0$, so $n^\alpha d\Sigma_\alpha=d\Sigma>0$) and its consequence for spacelike $\Sigma$ ($d\Sigma_\alpha=-n_\alpha d\Sigma$ is past-directed) in a short callout, because 3.3.2 depends on exactly this sign.
- [Simplify] In the derivation, state explicitly that $g^{\Phi\Phi}$ has the sign $\varepsilon$, which is why $n^\Phi=g^{\Phi\Phi}n_\Phi=|g^{\Phi\Phi}|^{1/2}$ comes out positive.

### N3350

Note: [[3.2.2 Surface element (null case)|3.2.2 Surface element (null case)]]  
Priority: medium · Graph: no · Manim: no

Correct overall, and the $u=t-x$ example checks out ($f=1$, $d\Sigma_t=-d\Sigma_x$), but the inverse-metric matrix has a sign inconsistency and the derivation is compressed.

- [Correctness] In the inverse-metric matrix, the $\Phi\lambda$ entries should be $-1$, not $+1$: with $k_\Phi\stackrel{*}{=}-1$, $k^\lambda\stackrel{*}{=}1$ and $N^\Phi\stackrel{*}{=}1$, Eq. (3.13) gives $g^{\Phi\lambda}=-N^\Phi k^\lambda=-1$ (equivalently $k^\lambda=g^{\lambda\Phi}k_\Phi=1$). The determinant result $\det\mathbf g^{-1}=-\det[\sigma^{AB}]$ is unaffected.
- [Simplify] Label the matrix's block rows and columns $(\Phi,\lambda,A)$ and say that it is a 4x4 matrix written in $1+1+2$ blocks; as printed it looks like a 3x3 matrix.
- [Intuition] After Eq. (3.20), add a sentence that the minus sign is the null analogue of the $\varepsilon=-1$ in Eq. (3.16): for a future-directed null normal, $d\Sigma_\alpha$ again points to the past.
- [Example] For the light-cone example, show $\det\mathbf E$ explicitly, or at least the four basis vectors $N,k,e_\theta,e_\phi$ from 3.1.4, so the reader can verify $f=\lambda^2\sin\theta$.

### N3351

Note: [[3.2.3 Element of two-surface|3.2.3 Element of two-surface]]  
Priority: low · Graph: no · Manim: no

Correct and well structured (the $f^2=g\,g^{\Phi\Phi}g^{\Psi\Psi}$ step and the null-normal rewrite into Eq. (3.19) both check out); only the final cofactor step is left to the reader.

- [Correctness] The physical-quantities table lists $dS_{tx},dS_{xt}$ and $n^\Phi$, which this note never uses; remove them.
- [Simplify] Show the last step to $f=\sqrt\sigma$: Jacobi's complementary-minor identity gives $\operatorname{cof}(g_{\Phi\Phi})\operatorname{cof}(g_{\Psi\Psi})-\operatorname{cof}(g_{\Phi\Psi})^2=g\,\sigma$, so with $\operatorname{cof}(g_{\Phi\Psi})=0$ one gets $f^2=\sigma$.
- [Simplify] Show the two-line check that substituting $k^\alpha=(n^\alpha+r^\alpha)/\sqrt2$ and $N^\alpha=(n^\alpha-r^\alpha)/\sqrt2$ turns $2k_{[\alpha}N_{\beta]}$ into $-2n_{[\alpha}r_{\beta]}$, and that $k\cdot N=-1$.

### N3352

Note: [[3.3 Gauss-Stokes theorem|3.3 Gauss-Stokes theorem]]  
Priority: low · Graph: no · Manim: no

Hub note with a correct TLDR and links.

- [Structure] No change needed.

### N3353

Note: [[3.3.1 First version|3.3.1 First version]]  
Priority: low · Graph: no · Manim: no

Clear and correct proof by onion coordinates; the claim that the angular-divergence term vanishes is left as an exercise.

- [Simplify] Give the hinted 3D example explicitly in one or two lines: in flat spherical coordinates, $\oint\partial_\theta(\ldots)d\theta\,d\phi$ and $\oint\partial_\phi(\ldots)d\theta\,d\phi$ vanish because the integrand is periodic in $\phi$ and the $\sin\theta$ in $\sqrt{-g}$ vanishes at the poles.
- [Intuition] Add a one-line reminder that this is the 4D version of the flat-space divergence theorem $\int\nabla\cdot\mathbf A\,dV=\oint\mathbf A\cdot d\mathbf S$, with the caveat that on spacelike pieces of $\partial\mathcal V$, "outward" $d\Sigma_\alpha$ follows the $\varepsilon$ convention of 3.2.1.

### N3354

Note: [[3.3.2 Conservation|3.3.2 Conservation]]  
Priority: low · Graph: no · Manim: no

Correct and short; the sign bookkeeping with outward and future-directed normals is the only tricky point and is handled correctly.

- [Intuition] Note that with future-directed $n_\alpha$, the physical charge is $Q=-\int j^\alpha n_\alpha\,d\Sigma$; for example $j^\alpha=\rho_0u^\alpha$ gives $-j^\alpha n_\alpha=\rho_0\gamma>0$. The sign does not affect conservation, but readers will meet $Q=-\int j\cdot n\,d\Sigma$ elsewhere.
- [Simplify] Spell out the sign step: on $\Sigma_2$ the outward normal is $+n_2$, so the contribution is $-\int j\cdot n_2\sqrt h\,d^3y$; on $\Sigma_1$ it is $-n_1$, giving $+\int j\cdot n_1\sqrt h\,d^3y$; the sum vanishes.

### N3355

Note: [[3.3.3 Second version|3.3.3 Second version]]  
Priority: low · Graph: no · Manim: no

Correct proof that parallels 3.3.1; the factor 1/2 and the $B^{01}-B^{10}$ step are explained.

- [Intuition] Add one sentence connecting this to Maxwell theory: with $B^{\alpha\beta}=F^{\alpha\beta}$, Eq. (3.24) is Gauss's law (charge inside $\Sigma$ equals electric flux through $\partial\Sigma$). This motivates why antisymmetric tensors give conserved surface integrals, and links ahead to Komar-type mass integrals.

### N3356

Note: [[3.4 Differentiation of tangent vector fields|3.4 Differentiation of tangent vector fields]]  
Priority: low · Graph: no · Manim: no

Hub note with the non-null assumption stated and correct links.

- [Links] Consider linking "Section 3.11" to \[\[3.11 Null shells\]\].

### N3357

Note: [[3.4.1 Tangent tensor fields|3.4.1 Tangent tensor fields]]  
Priority: low · Graph: no · Manim: no

Short, correct statement of the tangent-tensor correspondence and the projector.

- [Correctness] The physical-quantities table lists $h_{\alpha\beta}$, which the note never uses (only $h^{\alpha\beta}$ and $h^\alpha{}_\mu$ appear); replace it with $h^\alpha{}_\mu$ or drop it.
- [Intuition] Add one line checking the projector: $h^\alpha{}_\mu n^\mu=0$ and $h^\alpha{}_\mu e_a^\mu=e_a^\alpha$, so it removes the normal part and keeps tangent vectors unchanged.

### N3358

Note: [[3.4.2 Intrinsic covariant derivative|3.4.2 Intrinsic covariant derivative]]  
Priority: medium · Graph: no · Manim: no

Correct derivation, but the proof that Eq. (3.28) equals the Christoffel form (3.30) silently needs the symmetry of $\Gamma_{cab}$ in $ab$ as well as metric compatibility.

- [Simplify] State that metric compatibility ($h_{ab|c}=0$) and symmetry $\Gamma^c_{ab}=\Gamma^c_{ba}$ together fix Eq. (3.30), and note that symmetry follows from $e^\alpha_{a;\beta}e_b^\beta=e^\alpha_{b;\beta}e_a^\beta$, which 3.4.3 proves later (or move that line here).
- [Simplify] In the second line of the derivation, add the intermediate step $A_\alpha=h_{\alpha\gamma}A^\gamma=A^ce_{c\alpha}$, which is what turns $A_\alpha e^\alpha_{a;\beta}$ into $A^ce_c^\gamma e_{a\gamma;\beta}$.
- [Intuition] Give the 2D example of a sphere of radius $R$ in flat $\mathbb R^3$: projecting the flat derivative onto the sphere reproduces the sphere's Christoffel symbols (for example $\Gamma^\theta_{\phi\phi}=-\sin\theta\cos\theta$).

### N3359

Note: [[3.4.3 Extrinsic curvature|3.4.3 Extrinsic curvature]]  
Priority: medium · Graph: yes · Manim: no

Correct and complete (Eqs. 3.32–3.36 check out), but $K_{ab}$ stays abstract with no worked example, and the convex/concave statement lacks a picture.

- [Example] Add a worked example: a sphere $r=R$ in flat space with outward $n_\alpha=\partial_\alpha r$ gives $K_{ab}=h_{ab}/R$ and $K=2/R>0$; a $t$ = const slice of FRW gives $K=3\dot a/a$ (used in 3.6.2).
- [Graph] Plot a 2D curve such as a circle or the parabola $y=x^2/2$ with its unit normal field drawn at several points, to show that $K$ measures how fast the normals spread ($K=1/R$ for a circle).
- [Simplify] In the line that uses $K=n^\alpha{}_{;\alpha}$, note that it needs $n^\alpha n_{\alpha;\beta}=0$, which holds because $n^\alpha$ is extended off $\Sigma$ as a unit field.
- [Intuition] Say in words that $K_{ab}$ is the projection of $\tfrac12\mathcal L_ng_{\alpha\beta}$, "half the rate of change of the spatial metric as you move along the normal". This is the reason 3.6.1 uses $K_{ab}$ as the "velocity" initial data.

### N3360

Note: [[3.5 Gauss-Codazzi equations|3.5 Gauss-Codazzi equations]]  
Priority: low · Graph: no · Manim: no

Hub note with correct links.

- [Structure] No change needed.

### N3361

Note: [[3.5.1 General form|3.5.1 General form]]  
Priority: medium · Graph: no · Manim: no

Equations (3.39) and (3.40) and the intermediate expression are correct, but the key step ("after some algebra") hides the antisymmetrization, and there is no example.

- [Simplify] Show the antisymmetrization step: write LHS minus the same expression with $b\leftrightarrow c$, note that the $\Gamma^d_{bc}$ and $K_{bc}$ terms cancel by symmetry, and identify $\Gamma^d_{ab,c}-\Gamma^d_{ac,b}+\Gamma\Gamma-\Gamma\Gamma$ with the intrinsic Riemann tensor via Eq. (3.38).
- [Example] Add the sphere check: for a 2-sphere of radius $R$ in flat $\mathbb R^3$ ($\varepsilon=+1$, $K_{ab}=h_{ab}/R$), Eq. (3.39) gives $R_{abcd}=(h_{ac}h_{bd}-h_{ad}h_{bc})/R^2$, the familiar constant curvature $1/R^2$.
- [Intuition] Note that Eq. (3.39) generalizes Gauss's Theorema Egregium: ambient curvature equals intrinsic curvature plus a term quadratic in $K_{ab}$.

### N3362

Note: [[3.5.2 Contracted form|3.5.2 Contracted form]]  
Priority: medium · Graph: no · Manim: no

Correct results, but "a little algebra" skips the whole derivation of Eqs. (3.41) and (3.42).

- [Simplify] Show the steps for Eq. (3.41): $G_{\alpha\beta}n^\alpha n^\beta=R_{\alpha\beta}n^\alpha n^\beta-\tfrac12\varepsilon R$; insert the expression for $R$ so that the $R_{\mu\alpha\nu\beta}n^\mu e^\alpha_an^\nu e^\beta_b$ terms cancel, leaving $-\tfrac12\varepsilon h^{ab}h^{mn}R_{\mu\alpha\nu\beta}e^\mu_me^\alpha_ae^\nu_ne^\beta_b$, which is evaluated with the contracted Eq. (3.39).
- [Simplify] For Eq. (3.42), note that $g_{\alpha\beta}e^\alpha_an^\beta=0$, so only $R_{\alpha\beta}e^\alpha_an^\beta=h^{bc}R_{\mu\alpha\nu\beta}e^\mu_be^\alpha_ae^\nu_cn^\beta$ survives; contracting the Codazzi equation (3.40) gives the result.
- [Intuition] Add one line saying that these are exactly the components of Einstein's equations that contain no second normal derivatives, which is why they become constraints in 3.6.1.

### N3363

Note: [[3.5.3 Ricci scalar|3.5.3 Ricci scalar]]  
Priority: low · Graph: no · Manim: no

Correct and well explained (Ricci identity, total-derivative split, and the $K^{ab}K_{ab}$ computation all check out).

- [Intuition] Add a closing sentence on why Eq. (3.43) matters: the divergence term becomes a boundary term in the Einstein–Hilbert action, which motivates the Gibbons–Hawking boundary term and the ADM Lagrangian in Chapter 4 (link the relevant Chapter 4 note).
- [Simplify] Show the contraction of the Ricci identity explicitly: $n^\alpha{}_{;\beta\alpha}-n^\alpha{}_{;\alpha\beta}=R_{\mu\beta}n^\mu$ under the book's sign convention.

### N3364

Note: [[3.6 Initial-value problem|3.6 Initial-value problem]]  
Priority: low · Graph: no · Manim: no

Hub note with correct TLDR and links.

- [Structure] No change needed.

### N3365

Note: [[3.6.1 Constraints|3.6.1 Constraints]]  
Priority: medium · Graph: no · Manim: no

Correct constraints (Eq. 3.44 follows from 3.41 with $\varepsilon=-1$) with good motivation; the sign meaning of $j_a$ and the counting of degrees of freedom could be clearer.

- [Intuition] Note that with future-directed $n^\beta$, $T_{\alpha\beta}e^\alpha_an^\beta$ is minus the momentum density measured by normal observers (for dust it equals $-\rho\gamma u_a$). Either say so or point out that it is the book's sign convention.
- [Intuition] Add the Maxwell analogy: just as $\nabla\cdot\mathbf E=4\pi\rho$ and $\nabla\cdot\mathbf B=0$ restrict the initial $(\mathbf E,\mathbf B)$, Eqs. (3.44) and (3.45) are 4 conditions on the 12 numbers $(h_{ab},K_{ab})$.
- [Simplify] In the table, give $\mechanical{j_a}$ the same unit as $\energy{\rho}$ ($\mathrm{m^{-2}}$ in geometrized units) and use consistent semantic macros for the two projections of $T_{\alpha\beta}$; currently one uses \energy and the other \mechanical.

### N3366

Note: [[3.6.2 Cosmological initial values|3.6.2 Cosmological initial values]]  
Priority: low · Graph: no · Manim: no

Correct and short worked example; all steps check ($K^2-K^{ab}K_{ab}=\tfrac23K^2$, $K=3\dot a/a$, Friedmann equation).

- [Simplify] Show the one-line computation $K=n^\alpha{}_{;\alpha}=(-g)^{-1/2}\partial_t\sqrt{-g}=\partial_t(a^3)/a^3=3\dot a/a$, and state $^3R=0$ for the flat slice explicitly.
- [Structure] The spatial coordinates $x,y,z$ are uncolored while $\mechanical{t}$ is colored; apply the macros consistently.

### N3367

Note: [[3.6.3 Moment of time symmetry|3.6.3 Moment of time symmetry]]  
Priority: low · Graph: yes · Manim: no

Clear and correct short note.

- [Graph] Plot the closed-FRW cycloid $a(\eta)=\tfrac12a_{\max}(1-\cos\eta)$, $\tau=\tfrac12a_{\max}(\eta-\sin\eta)$ for $\eta\in[0,2\pi]$, and mark the turning point $t_0$ where $K=3\dot a/a=0$, showing the time symmetry visually.

### N3368

Note: [[3.6.4 Stationary and static spacetimes|3.6.4 Stationary and static spacetimes]]  
Priority: low · Graph: no · Manim: no

Correct and concise; the argument that $n_{(\alpha;\beta)}=t_{(\alpha}\mu_{,\beta)}$ projects to zero is right.

- [Example] Add the Schwarzschild example: $g_{ta}=0$ and the $t$ = const slices have $K_{ab}=0$, whereas Kerr is stationary with $g_{t\phi}\neq0$ and is not static.
- [Simplify] State the projection explicitly: $t_{(\alpha}\mu_{,\beta)}e^\alpha_ae^\beta_b=0$ because $t_\alpha e^\alpha_a=0$.

### N3369

Note: [[3.6.5 Spherical space, moment of time symmetry|3.6.5 Spherical space, moment of time symmetry]]  
Priority: low · Graph: no · Manim: no

Correct and clear ($^3R=4m'/r^2$ gives $m'=4\pi r^2\rho$).

- [Correctness] Symbol clash: a prime means $d/dr$ in $m'$, but $r'$ in the integral is a dummy integration variable. Rename the dummy variable (for example $\bar r$) so that $r'$ is not read as a derivative.
- [Intuition] Note that outside the matter $m(r)=M$, so the slice is exactly a $t$ = const slice of Schwarzschild. Also note that $\int\rho\,4\pi r^2dr$ is not the proper-volume integral (which has the extra factor $(1-2m/r)^{-1/2}$), so $m$ includes the gravitational binding energy.

### N3370

Note: [[3.6.6 Spherical space, empty and flat|3.6.6 Spherical space, empty and flat]]  
Priority: medium · Graph: no · Manim: no

The algebra is correct ($2K_2(2K_1+K_2)=0$, the momentum constraint gives $2rK'+3K=0$), but the radial unit vector reuses the letter of the spacetime normal and the physical meaning is deferred.

- [Simplify] Rename the radial unit vector $n_a=\partial_ar$ (for example $r_a$, as in 3.2.3), because $n$ denotes the hypersurface normal that defines $K_{ab}$ throughout the chapter.
- [Simplify] Show the intermediate steps: $K^2-K^{ab}K_{ab}=(K_1+2K_2)^2-K_1^2-2K_2^2=2K_2(2K_1+K_2)$, and in the momentum constraint $(\tfrac13+1)K'+2K/r=0$.
- [Links] Link "Section 3.13, Problem 1" to \[\[3.13 Problems\]\] and hint at the answer: a flat slice with $K\propto r^{-3/2}$ is the Painlevé–Gullstrand slicing of Schwarzschild, with $K_0r_0^{3/2}$ fixed by $M$.

### N3371

Note: [[3.6.7 Conformally-flat space|3.6.7 Conformally-flat space]]  
Priority: low · Graph: yes · Manim: no

Correct (the effective-density formula follows from $^3R=-8\psi^{-5}\nabla^2\psi$), but there is no concrete solution.

- [Example] Give the simplest solution: $\psi=1+M/(2r)$ is the $t$ = const slice of Schwarzschild in isotropic coordinates, and the Brill–Lindquist form $\psi=1+\sum_iM_i/(2|\mathbf x-\mathbf x_i|)$ gives multiple black holes.
- [Graph] Plot $\psi(x,0,0)$ on $x\in[-8,8]$ for two Brill–Lindquist holes (for example $M_1=M_2=1$ at $x=\pm3$) and for the single-hole case, showing the punctures and $\psi\to1$ at infinity.

### N3372

Note: [[3.7 Junction conditions and thin shells|3.7 Junction conditions and thin shells]]  
Priority: low · Graph: no · Manim: no

Clear hub with a good motivating paragraph and correct links.

- [Links] The text cites Fig. 3.5, which is embedded in 3.7.1; add "see \[\[3.7.1 Notation and assumptions\]\]" or move the embed here, and link "Section 3.11" to \[\[3.11 Null shells\]\].

### N3373

Note: [[3.7.1 Notation and assumptions|3.7.1 Notation and assumptions]]  
Priority: low · Graph: yes · Manim: no

Correct and clear setup of signed normal distance, the Heaviside and delta distributions, and jumps.

- [Graph] Plot $\Theta(\ell)$, a smoothed $\delta(\ell)$, and a sample continuous metric component with a kink at $\ell=0$ on $\ell\in[-2,2]$, to preview why $[g]=0$ is needed while $[\partial g]\neq0$ is allowed.
- [Simplify] Add the one-line check behind Eq. (3.46): $n^\alpha\partial_\alpha\ell=1$ and $n^\alpha n_\alpha=\varepsilon$ force $n_\alpha=\varepsilon\partial_\alpha\ell$.

### N3374

Note: [[3.7.2 First junction condition|3.7.2 First junction condition]]  
Priority: low · Graph: no · Manim: no

Correct and clear; the derivative $\partial_\gamma\Theta(\pm\ell)=\pm\varepsilon\delta(\ell)n_\gamma$ is right.

- [Intuition] Add one sentence of physical meaning: if $[h_{ab}]\neq0$, observers on the two sides would measure different proper lengths and times for the same curve on $\Sigma$, so the surface would have no single geometry.

### N3375

Note: [[3.7.3 Riemann tensor|3.7.3 Riemann tensor]]  
Priority: low · Graph: no · Manim: no

Correct short derivation of the $\delta$-function part of the Riemann tensor, Eq. (3.51).

- [Simplify] Say which terms of $R^\alpha{}_{\beta\gamma\delta}=\Gamma^\alpha_{\beta\delta,\gamma}-\Gamma^\alpha_{\beta\gamma,\delta}+\Gamma\Gamma-\Gamma\Gamma$ give the $\delta$ term, and that the $\Gamma\Gamma$ products contain only $\Theta^2=\Theta$ and $\Theta(\ell)\Theta(-\ell)=0$, so they are well defined.

### N3376

Note: [[3.7.4 Surface stress-energy tensor|3.7.4 Surface stress-energy tensor]]  
Priority: medium · Graph: no · Manim: no

All expressions check out ($[\Gamma]$, $A^\alpha{}_{\beta\gamma\delta}$, $A_{\alpha\beta}$, $A$), but the note is a chain of formulas with little guidance.

- [Simplify] Add the intermediate substitution for $A^\alpha{}_{\beta\gamma\delta}$ (insert $[\Gamma^\alpha_{\beta\delta}]n_\gamma$ and $[\Gamma^\alpha_{\beta\gamma}]n_\delta$, and note that the $\kappa^\alpha{}_\beta n_\gamma n_\delta$ terms cancel) so readers can follow without redoing it.
- [Intuition] Add an analogy: a surface charge makes $\mathbf E$ jump and $\nabla\cdot\mathbf E$ contain a $\delta$; similarly a thin shell makes $\partial g$ jump and the curvature contain a $\delta(\ell)$, whose coefficient is $S_{\alpha\beta}$.
- [Structure] Add $\kappa_{\alpha\beta}$, $\kappa$, $A^\alpha{}_{\beta\gamma\delta}$, $A_{\alpha\beta}$ and $A$ to the physical-quantities table, because these are the note's main symbols.

### N3377

Note: [[3.7.5 Second junction condition|3.7.5 Second junction condition]]  
Priority: medium · Graph: no · Manim: no

Correct derivation of the Lanczos–Israel relation (3.56), with all algebra checking out, but there is no example of the formula in use.

- [Example] Add a one-paragraph example: a static shell of radius $R$ between a flat interior and a Schwarzschild exterior has $[K^\theta{}_\theta]=(\sqrt{1-2M/R}-1)/R$, giving $\sigma=(1-\sqrt{1-2M/R})/(4\pi R)\approx M/(4\pi R^2)$ for $R\gg M$. Alternatively, point forward to \[\[3.9 Thin-shell collapse\]\].
- [Simplify] Mention that the first line, $[n_{\alpha;\beta}]=-[\Gamma^\gamma_{\alpha\beta}]n_\gamma$, uses $[n_{\alpha,\beta}]=0$, which follows from $n_\alpha=\varepsilon\partial_\alpha\ell$ with $\ell$ smooth.
- [Links] Link "Section 3.13, Problem 4" to \[\[3.13 Problems\]\].

### N3378

Note: [[3.7.6 Summary|3.7.6 Summary]]  
Priority: low · Graph: no · Manim: no

Accurate summary of the Darmois–Israel conditions and the Lanczos equation.

- [Links] Link "Eq. (3.57)" to \[\[3.7.5 Second junction condition\]\] and "Section 3.11" to \[\[3.11 Null shells\]\].

### N3379

Note: [[3.8 Oppenheimer-Snyder collapse|3.8 Oppenheimer-Snyder collapse]]  
Priority: medium · Graph: yes · Manim: yes

Physics and math are correct (the cycloid solves (3.59)–(3.60), and $\tilde E=\cos\chi_0$ leads to $M=\tfrac43\pi\rho R^3$), but one letter is reused for two quantities and the final step and the collapse picture are left implicit.

- [Correctness] Symbol clash: $\mechanical{a}$ is the scale factor and $\mechanical{a^\alpha}$ is the four-acceleration in the same note (for example $K_{\tau\tau}=-a^\alpha n_\alpha$ next to $K^\theta{}_\theta=a^{-1}\cot\chi_0$). Rename the acceleration (for example $\alpha^\alpha$ or $\dot u^\alpha$) and update the table.
- [Simplify] Show the final step to Eq. (3.67): $\cos^2\chi_0=\dot a^2\sin^2\chi_0+1-2M/R$, so $2M/R=\sin^2\chi_0(1+\dot a^2)=\tfrac{8\pi}{3}\rho a^2\sin^2\chi_0$. Also add the compact result $M=\tfrac12a_{\max}\sin^3\chi_0$.
- [Graph] Plot $R(\tau)/M$ for the cycloid with $a_{\max}$ and $\chi_0$ chosen to give, say, $R_{\max}=10M$, together with the horizon line $R=2M$. Overlay the exterior time $T(\tau)$ from Eq. (3.63) to show $T\to\infty$ as $R\to2M$ while $\tau$ stays finite.
- [Manim] Animate a shrinking dust ball in an Eddington–Finkelstein diagram: the surface worldline $R(\tau)$ crosses $r=2M$, the event horizon grows from the centre, and outgoing light rays from the surface become trapped.

### N3380

Note: [[3.9 Thin-shell collapse|3.9 Thin-shell collapse]]  
Priority: medium · Graph: yes · Manim: no

Correct (the components of $S^a{}_b$, the integration to constant $m$, Eq. (3.70) and $R_{\max}$ all check out), with a good physical interpretation; the bound and unbound behaviour would be clearer with a plot.

- [Graph] Plot $\dot R^2=\left(\frac{M}{m}+\frac{m}{2R}\right)^2-1$ against $R/m$ for $M/m=0.8,1,1.2$ on $R/m\in[0.2,10]$, marking $R_{\max}=m^2/[2(m-M)]$ for the bound case and $R=2M$.
- [Simplify] Show the squaring step: $\beta_+=\beta_--m/R$, so $1+\dot R^2-2M/R=1+\dot R^2-2m\sqrt{1+\dot R^2}/R+m^2/R^2$, which gives Eq. (3.70).
- [Intuition] State that taking $\beta_\pm>0$ assumes both sides are "normal" regions in which $r$ increases outward. Also note that $-m^2/(2R)$ is the Newtonian self-energy of a shell (with $G=1$), so Eq. (3.70) reduces to $M\approx m+\tfrac12m\dot R^2-m^2/(2R)$ for slow, weak-field motion.

### N3381

Note: [[4.0 Chapter introduction|4.0 Chapter introduction]]  
Priority: low · Graph: no · Manim: no

Clear, faithful chapter overview; it only lacks navigation links to the sections it describes.

- [Links] The prose names "Section 4.1", "Section 4.2" and "Section 4.3" as plain text; link them as \[\[4.1 Lagrangian formulation\]\], \[\[4.2 Hamiltonian formulation\]\] and \[\[4.3 Mass and angular momentum\]\] so the overview works as a roadmap.
- [Intuition] Add one sentence explaining why a boundary term is needed (the Hilbert Lagrangian $R$ contains second derivatives of $g_{\alpha\beta}$), so the reader knows what to look for in 4.1.4 and 4.1.5.
- [Structure] The file starts with a UTF-8 BOM (EF BB BF); save it as UTF-8 without BOM as the Obsidian skill requires.

### N3382

Note: [[4.1 Lagrangian formulation|4.1 Lagrangian formulation]]  
Priority: low · Graph: no · Manim: no

Section hub with a correct list of links; no content change needed.

- [Structure] No content change needed; only remove the leading UTF-8 BOM so the file is UTF-8 without BOM.

### N3383

Note: [[4.1.1 Mechanics|4.1.1 Mechanics]]  
Priority: low · Graph: yes · Manim: yes

Correct and compact derivation of the Euler–Lagrange equation; a worked example and a picture of varied paths would make the fixed-endpoint condition (4.2) concrete.

- [Example] After Eq. (4.3), add a one-line example, e.g. the harmonic oscillator $L=\tfrac12\dot q^2-\tfrac12\omega^2q^2$ giving $\ddot q+\omega^2q=0$, so the reader sees the abstract equation produce a familiar result.
- [Graph] Plot, for the free particle $L=\tfrac12\dot q^2$ on $t\in[0,1]$ with $q(0)=0$, $q(1)=1$, the true path $q=t$ and varied paths $q=t+\epsilon\sin(\pi t)$ for $\epsilon=\pm0.2,\pm0.4$; add a second panel of $S(\epsilon)=\tfrac12+\tfrac{\pi^2}{4}\epsilon^2$ showing the stationary point at $\epsilon=0$.
- [Manim] Animate a path whose interior wiggles while the endpoints stay pinned at $t_1$ and $t_2$, with a live readout of $S$ that is smallest on the true path; this shows directly why the boundary term $\partial L/\partial\dot q\,\delta q|_{t_1}^{t_2}$ vanishes.
- [Structure] The file starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3384

Note: [[4.1.2 Field theory|4.1.2 Field theory]]  
Priority: low · Graph: no · Manim: no

Correct field-theory generalization with a correct Klein–Gordon example; mainly needs a link and one intermediate step.

- [Links] "Gauss’ theorem (Section 3.3)" is plain text; link it to \[\[3.3 Gauss-Stokes theorem\]\] (the target exists in 03 Hypersurfaces).
- [Simplify] In the second line of the $\delta S$ derivation, state explicitly that $\mathcal L^\alpha\delta q_{,\alpha}=(\mathcal L^\alpha\delta q)_{;\alpha}-\mathcal L^\alpha{}_{;\alpha}\delta q$ is the covariant product rule (valid because $\delta q_{,\alpha}=\delta q_{;\alpha}$ for a scalar), the field analogue of the integration by parts in 4.1.1.
- [Example] Add the flat-spacetime limit of the final Klein–Gordon equation, $-\partial_t^2\psi+\nabla^2\psi-m^2\psi=0$, so the reader recognizes the curved-spacetime result.
- [Structure] The file starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3385

Note: [[4.1.3 General relativity|4.1.3 General relativity]]  
Priority: low · Graph: no · Manim: no

Accurate statement of the full gravitational plus matter action; the role of each term is announced but not motivated.

- [Intuition] Add a short sentence or table explaining the job of each term in Eq. (4.12): $S_H$ gives $G_{\alpha\beta}$, $S_B$ cancels the normal-derivative boundary term from $S_H$ (4.1.4–4.1.5), $S_0$ only renormalizes the value (4.1.7), $S_M$ gives $T_{\alpha\beta}$ (4.1.6), with wiki links to those notes.
- [Simplify] The notation switches between $S[g;\phi]$ in Eq. (4.12) and $S[g,\phi]$ in the next paragraph; use one form.
- [Intuition] Explain the sign factor $\varepsilon$ in Eq. (4.9) with the concrete boundary of Fig. 4.1 (two spacelike slices with $\varepsilon=-1$ and a timelike cylinder with $\varepsilon=+1$).
- [Structure] The file starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3386

Note: [[4.1.4 Variation of the Hilbert term|4.1.4 Variation of the Hilbert term]]  
Priority: medium · Graph: no · Manim: no

The derivation checks out step by step, but it is dense and one cross-reference points to the wrong section.

- [Links] "completeness relations $g^{\alpha\beta}=\varepsilon n^\alpha n^\beta+h^{\alpha\beta}$ ... (see Section 3.1.1)" points to the wrong note: in this vault 3.1.1 is "Defining equations", and the completeness relations are in \[\[3.1.3 Induced metric\]\]; also link "Section 1.7" to \[\[1.7 Metric determinant\]\] and "Section 1.2" to \[\[1.2 Covariant differentiation\]\].
- [Simplify] Before Eq. (4.16), show the one-line contraction $g^{\alpha\beta}[(\delta\Gamma^\mu_{\alpha\beta})_{;\mu}-(\delta\Gamma^\mu_{\alpha\mu})_{;\beta}]=(g^{\alpha\beta}\delta\Gamma^\mu_{\alpha\beta}-g^{\alpha\mu}\delta\Gamma^\beta_{\alpha\beta})_{;\mu}$ (metric compatibility), and the intermediate steps leading to $\not\!\delta v_\mu=g^{\alpha\beta}(\delta g_{\mu\beta,\alpha}-\delta g_{\alpha\beta,\mu})$, which the text currently only asserts.
- [Intuition] Add a mechanics analogue for why second derivatives force a boundary term: $L=-\tfrac12q\ddot q$ differs from $\tfrac12\dot q^2$ by the total derivative $-\tfrac12\mathrm d(q\dot q)/\mathrm dt$, so its variation leaves a $\delta\dot q$ endpoint term that fixing $q$ alone cannot remove; this is exactly the role of the $\delta g_{\alpha\beta,\mu}n^\mu$ term in Eq. (4.18).
- [Simplify] The phrase "covariant differentiation is defined with respect to the reference metric $g_{\alpha\beta}$" can be confused with the flat reference behind $K_0$; say "the unvaried (background) metric".
- [Structure] The file starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3387

Note: [[4.1.5 Variation of the boundary term|4.1.5 Variation of the boundary term]]  
Priority: low · Graph: no · Manim: no

Correct and short; one step in the variation of $K$ is skipped without justification.

- [Simplify] In $\delta K=-h^{\alpha\beta}\delta\Gamma^\gamma_{\alpha\beta}n_\gamma$, explain why $h^{\alpha\beta}\delta n_{\alpha,\beta}$ drops: $\delta n_\alpha\propto n_\alpha n^\mu n^\nu\delta g_{\mu\nu}$ vanishes on $\partial\mathcal V$, so its tangential derivatives vanish too; also note that $\delta h^{\alpha\beta}=0$ there.
- [Simplify] State in one sentence that the first two terms in the second line of $\delta K$ vanish because they are tangential derivatives ($h^{\alpha\beta}\delta g_{\mu\alpha,\beta}$ contains only $e^\beta_b\partial_\beta$), mirroring the argument already given in 4.1.4.
- [Links] Link "Section 3.4" to \[\[3.4.3 Extrinsic curvature\]\] and "Eq. (4.18)" to \[\[4.1.4 Variation of the Hilbert term\]\].
- [Structure] The file starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3388

Note: [[4.1.6 Variation of the matter action|4.1.6 Variation of the matter action]]  
Priority: low · Graph: no · Manim: no

Correct derivation of $T_{\alpha\beta}$ and of the Einstein equations; the Klein–Gordon checks are left to the reader.

- [Example] Show the short computation behind "It is easy to check": $\partial\mathcal L/\partial g^{\alpha\beta}=-\tfrac12\psi_{,\alpha}\psi_{,\beta}$, so Eq. (4.21) gives the stated $T_{\alpha\beta}$.
- [Example] Add the flat-space energy density $T_{00}=\tfrac12(\dot\psi^2+|\nabla\psi|^2+m^2\psi^2)\ge0$ as evidence that the sign convention in Eq. (4.21) is physically sensible.
- [Example] Carry out the suggested consistency check in one line: $T^{\alpha\beta}{}_{;\beta}=(g^{\mu\nu}\psi_{;\mu\nu}-m^2\psi)\psi^{,\alpha}$, so conservation implies the Klein–Gordon equation wherever $\psi^{,\alpha}\neq0$.
- [Simplify] Before Eq. (4.23), write the combined integrand $(G_{\alpha\beta}/16\pi-T_{\alpha\beta}/2)\delta g^{\alpha\beta}$ so the origin of the factor $8\pi$ is visible.
- [Structure] The file starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3389

Note: [[4.1.7 Nondynamical term|4.1.7 Nondynamical term]]  
Priority: medium · Graph: yes · Manim: no

The flat-space divergence $8\pi R(t_2-t_1)$ is correct, but the note uses $R$ for two quantities and the subtraction is only described, not demonstrated.

- [Correctness] Symbol clash: $R$ is the Ricci scalar ("Then $R=0$") and $\mechanical{R}$ is the cylinder radius ("$r=R$", "$R\to\infty$") in the same note; rename the radius (e.g. $r_0$) and update the table.
- [Simplify] "Because $S_0$ depends only on the induced metric $h_{ab}$ (through the factor $|h|^{1/2}$ in the integrand)" is incomplete: $K_0$ also depends on $h_{ab}$, because it is fixed by embedding the boundary geometry in flat spacetime; say so, because that is why $\delta S_0=0$ when $h_{ab}$ is held fixed.
- [Simplify] Show the two-line check $K=n^\alpha{}_{;\alpha}=r^{-2}\partial_r(r^2)=2/r$ and the integral $\int\mathrm dt\oint(2/R)R^2\sin\theta\,\mathrm d\theta\,\mathrm d\phi=8\pi R\,\Delta t$.
- [Example] Add a Schwarzschild boundary example: on the cylinder $r=R$, $K=2\sqrt f/R+M/(R^2\sqrt f)$ with $f=1-2M/R$, $|h|^{1/2}=\sqrt f R^2\sin\theta$ and $K_0=2/R$, so the boundary contribution $(S_B-S_0)/\Delta t=\tfrac12(2Rf+M-2R\sqrt f)\to-M/2$ stays finite while $S_B$ alone grows like $R$.
- [Graph] Plot the boundary contribution per unit time versus $R/M\in[3,50]$ with $M=1$: unsubtracted $S_B/\Delta t=(2R-3M)/2$ (diverges) and subtracted $(S_B-S_0)/\Delta t=\tfrac12(2R-3M-2R\sqrt{1-2M/R})$ (approaches $-M/2$).
- [Structure] The file starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3390

Note: [[4.1.8 Bianchi identities|4.1.8 Bianchi identities]]  
Priority: low · Graph: no · Manim: no

Correct derivation of the contracted Bianchi identities, but the key logical point (an identity, not a field equation) is not spelled out.

- [Intuition] Explain that here $\delta S_G=0$ holds for every metric because a coordinate change cannot change the value of a scalar integral; therefore $G^{\alpha\beta}{}_{;\beta}=0$ is an identity, not a consequence of the field equations, and it is what forces $T^{\alpha\beta}{}_{;\beta}=0$ on the matter side.
- [Simplify] Between Eq. (4.27) and the next display, note that $G_{\alpha\beta}(\epsilon^{\alpha;\beta}+\epsilon^{\beta;\alpha})=2G^{\alpha\beta}\epsilon_{\alpha;\beta}$ by the symmetry of $G$, which is why the prefactor changes from $16\pi$ to $8\pi$.
- [Structure] Add $\epsilon^\alpha$ (infinitesimal displacement field) to the physical-quantities table and remove the leading UTF-8 BOM.

### N3391

Note: [[4.2 Hamiltonian formulation|4.2 Hamiltonian formulation]]  
Priority: low · Graph: no · Manim: no

Section hub with a correct list of links; no content change needed.

- [Structure] No content change needed; only remove the leading UTF-8 BOM so the file is UTF-8 without BOM.

### N3392

Note: [[4.2.1 Mechanics|4.2.1 Mechanics]]  
Priority: low · Graph: yes · Manim: no

Correct and clear derivation of Hamilton's equations; a phase-space example would help.

- [Example] Add the harmonic oscillator: $p=\dot q$, $H=\tfrac12p^2+\tfrac12\omega^2q^2$, giving $\dot q=p$, $\dot p=-\omega^2q$, and point out that the endpoint values of $p$ are not fixed, which is why only $\delta q$ vanishes at $t_1,t_2$.
- [Graph] Plot the phase portrait of the oscillator in the $(q,p)$ plane: ellipses $\tfrac12p^2+\tfrac12q^2=E$ for $E=0.5,1,2$ with $\omega=1$, plus the vector field $(p,-q)$, to show Hamilton's equations as flow along curves of constant $H$.
- [Structure] The file starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3393

Note: [[4.2.2 3 + 1 decomposition|4.2.2 3 + 1 decomposition]]  
Priority: medium · Graph: no · Manim: yes

The 3+1 results (4.36)–(4.38) are correct, but lapse and shift remain abstract and the "easy to check" steps are skipped.

- [Intuition] State the physical meaning: $N\,\mathrm dt$ is the proper time elapsed along the normal between $\Sigma_t$ and $\Sigma_{t+\mathrm dt}$, and $N^a\mathrm dt$ is how far the spatial coordinates drift sideways relative to the normal observers.
- [Simplify] Spell out the two "easy to check" claims: $t^\alpha\partial_\alpha t=1$ follows from $t^\alpha=(\partial x^\alpha/\partial t)_y$, and (4.36) is compatible with (4.31) because $t^\alpha\partial_\alpha t=Nn^\alpha(-n_\alpha/N)+N^ae^\alpha_a\partial_\alpha t=1+0$.
- [Example] Add a concrete metric: Schwarzschild in Painlevé–Gullstrand coordinates, $\mathrm ds^2=-\mathrm dt^2+(\mathrm dr+\sqrt{2M/r}\,\mathrm dt)^2+r^2\mathrm d\Omega^2$, has $N=1$, $N^r=\sqrt{2M/r}$ and flat $h_{ab}$, in contrast with the static slicing $N=\sqrt{1-2M/r}$, $N^a=0$.
- [Manim] Animate a stack of slices $\Sigma_t$ with a congruence curve crossing them; at each step decompose the tangent $t^\alpha$ into the normal piece $Nn^\alpha$ and the sideways shift $N^ae^\alpha_a$, showing that changing $N$ and $N^a$ changes the slicing and coordinates but not the spacetime.
- [Structure] The file starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3394

Note: [[4.2.3 Field theory|4.2.3 Field theory]]  
Priority: medium · Graph: no · Manim: no

The field Hamilton equations and the Klein–Gordon example check out, but the example is left in an opaque form with $g^{tt}$ and $\sqrt{-g}$.

- [Simplify] In the Klein–Gordon example use $g^{tt}=-1/N^2$ and $\sqrt{-g}=N\sqrt h$ to write $p=\sqrt h\,\dot\psi/N$ and $\mathcal H=N\left[\frac{p^2}{2\sqrt h}+\frac{\sqrt h}{2}(h^{ab}\psi_{,a}\psi_{,b}+m^2\psi^2)\right]$, which makes positivity and the role of the lapse obvious.
- [Example] Add the flat-space check ($N=1$, $h_{ab}=\delta_{ab}$): $\dot\psi=p$, $\dot p=\nabla^2\psi-m^2\psi$, hence $\ddot\psi=\nabla^2\psi-m^2\psi$, replacing "It is easy to check".
- [Intuition] Explain why $\mathcal H$ is kept as a density: it integrates with plain $\mathrm d^3y$ in Eq. (4.42), and it carries the factor $N$, so the Hamiltonian depends on the chosen time flow.
- [Links] Link "Gauss’ theorem" to \[\[3.3 Gauss-Stokes theorem\]\] and the foliated region of Fig. 4.4 forward to \[\[4.2.4 Foliation of the boundary\]\], where $S_t$ and $\mathcal B$ are described in detail.
- [Structure] The file starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3395

Note: [[4.2.4 Foliation of the boundary|4.2.4 Foliation of the boundary]]  
Priority: low · Graph: no · Manim: no

Correct geometric bookkeeping with a helpful Table 4.1; it would benefit from a concrete example and a corrected cross-reference.

- [Links] "The three-dimensional completeness relations ... (see Section 3.1.1)": in this vault the completeness relations are in \[\[3.1.3 Induced metric\]\], not 3.1.1 "Defining equations"; fix the reference and link it.
- [Structure] Move Table 4.1 to the start of the note (or repeat it there) so the reader has the $\Sigma_t/S_t/\mathcal B$ dictionary before the derivations.
- [Example] Add the flat-space example: $\Sigma_t$ the $t=$ const slices, $S_t$ the sphere $r=R$, $\theta^A=(\theta,\phi)$, $\sigma_{AB}=R^2\mathrm{diag}(1,\sin^2\theta)$, $r_a=\partial_ar$, $k=2/R$, $N=1$, $\sqrt{-\gamma}=R^2\sin\theta$.
- [Simplify] State explicitly the assumption $n_\alpha r^\alpha=0$ on $\mathcal B$ (the slices meet the boundary orthogonally), which is what allows the curves $\beta$ to have tangent $n^\alpha$ and gives Eq. (4.53).
- [Structure] The file starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3396

Note: [[4.2.5 Gravitational action|4.2.5 Gravitational action]]  
Priority: medium · Graph: no · Manim: no

Signs and cancellations in the 3+1 split of the action are correct, but the reuse of $n^\alpha$, $h_{ab}$, $y^a$ for both $\partial\mathcal V$ and $\Sigma_t$ makes the first part hard to follow.

- [Simplify] The opening equation uses $n^\alpha$, $h_{ab}$, $K$, $y^a$ for the boundary $\partial\mathcal V$, and the note then redefines them for $\Sigma_t$; give the generic boundary quantities distinct temporary names (or write the three pieces $\Sigma_{t_2}$, $\Sigma_{t_1}$, $\mathcal B$ directly) to avoid the clash the text itself warns about.
- [Simplify] Explain the sign bookkeeping on $\Sigma_{t_1}$ and $\Sigma_{t_2}$ explicitly: $\varepsilon=-1$ on both, and the outward normal is $+n$ on $\Sigma_{t_2}$ but $-n$ on $\Sigma_{t_1}$, giving $-2\int_{\Sigma_{t_2}}K\sqrt h$ and $+2\int_{\Sigma_{t_1}}K\sqrt h$.
- [Intuition] Point out the meaning of $r_{\alpha;\beta}n^\alpha n^\beta=-r_\alpha a^\alpha$ with $a^\alpha=n^\beta\nabla_\beta n^\alpha$ the acceleration of the normal observers, so $\mathcal K+r_{\alpha;\beta}n^\alpha n^\beta=k$ reads "boundary curvature minus the acceleration term equals the two-surface curvature".
- [Example] Add the flat-space check of Eq. (4.55): with $t=$ const slices and $S_t$ a sphere of radius $R$, ${}^3R=K_{ab}=0$, $N=1$ and $k=k_0=2/R$, so $S_G=0$ exactly, as claimed.
- [Links] Link "Section 3.5.3" to \[\[3.5.3 Ricci scalar\]\] and "Eq. (4.12)" to \[\[4.1.3 General relativity\]\].
- [Structure] The file starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3397

Note: [[4.2.6 Gravitational Hamiltonian|4.2.6 Gravitational Hamiltonian]]  
Priority: medium · Graph: no · Manim: no

Eqs. (4.57), (4.59), (4.61) and (4.62) check out, but the table mislabels the Hamiltonian density and the constraint structure is not made visible.

- [Correctness] The table describes $\mathcal H_G$ as "The gravitational energy density"; this is misleading because the volume part $N(K^{ab}K_{ab}-K^2-{}^3R)-2N_a(K^{ab}-Kh^{ab})_{|b}$ is a combination of the constraints and vanishes for vacuum solutions (4.2.8–4.2.9); describe it as the volume (constraint) part of the Hamiltonian density.
- [Simplify] Show the inversion leading to Eq. (4.62): the trace of (4.59) gives $16\pi p=-2\sqrt h\,K$, hence $\sqrt h\,K^{ab}=16\pi(p^{ab}-\tfrac12ph^{ab})$.
- [Intuition] After Eq. (4.61), note that the bulk integrand is $-N\hat{\mathcal C}-2N^a\hat{\mathcal C}_a$ with the constraints defined in 4.2.7, so the lapse and shift act as Lagrange multipliers and on solutions only the boundary term survives.
- [Example] Preview the payoff: for Schwarzschild with static slicing ($N=\sqrt f$, $f=1-2M/R$, $N^a=0$, $k=2\sqrt f/R$, $k_0=2/R$, $\sqrt\sigma=R^2\sin\theta$) the boundary term gives $H_G=-R(f-\sqrt f)\to M$ as $R\to\infty$, linking forward to \[\[4.2.9 Value of the Hamiltonian for solutions\]\].
- [Structure] The file starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3398

Note: [[4.2.7 Variation of the Hamiltonian|4.2.7 Variation of the Hamiltonian]]  
Priority: high · Graph: no · Manim: no

The long variation is essentially correct (key steps re-derived), but it is very dense, the $S_t$ boundary terms use $h^{ab}$ where the two-surface projector is meant, and the constraint index notation is inconsistent.

- [Correctness] The "three-dimensional version of Eq. (4.17)" and $\delta k=\tfrac12h^{ab}\delta h_{ab,c}r^c$ should use the projector onto $S_t$, $\sigma^{ab}=\sigma^{AB}e^a_Ae^b_B$, not the full $h^{ab}=r^ar^b+\sigma^{ab}$ (the $r^ar^br^c\delta h_{ab,c}$ piece does not vanish in general, exactly as $h^{\alpha\beta}$ in Eq. (4.17) is the boundary projector); the cancellation between $\delta_h\hat H_\Sigma$ and $\delta_h\hat H_S$ is unaffected because both terms change the same way.
- [Structure] The closing sentence defines "$\mathcal C^a\equiv\hat{\mathcal C}^a/(16\pi)$" but Eqs. (4.65) and (4.73) use the covector $\hat{\mathcal C}_a$, $\mathcal C_a$; use $\mathcal C_a$ consistently.
- [Simplify] Write the three-dimensional curvature as ${}^3R^{ab}$ and ${}^3G^{ab}$ instead of $R^{ab}$ and $G^{ab}$, since this chapter already uses $R_{\alpha\beta}$ and $G_{\alpha\beta}$ for the four-dimensional tensors.
- [Structure] Add a short roadmap at the top (vary $N,N^a$ → constraints; vary $p^{ab}$ → $\mathcal H_{ab}$; vary $h_{ab}$ → $\mathcal P^{ab}$; boundary terms cancel because $\delta h_{ab}=\delta N=\delta N^a=0$ on $S_t$) and fold the long $\delta_h$ algebra into collapsible callouts, keeping (4.64) and (4.69)–(4.73) visible.
- [Intuition] State after Eq. (4.70) that $\mathcal H_{ab}=2NK_{ab}+2N_{(a|b)}$ by Eq. (4.62), so the Hamilton equation $\dot h_{ab}=\mathcal H_{ab}$ reproduces Eq. (4.57); this shows at once that the Hamiltonian is consistent with the Lagrangian definition of $K_{ab}$.
- [Structure] The file starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3399

Note: [[4.2.8 Hamilton's equations|4.2.8 Hamilton's equations]]  
Priority: medium · Graph: no · Manim: no

Faithful and correct transcription (Eqs. 4.74-4.79 check out for Poisson's sign convention $K_{ab}=n_{\alpha;\beta}e^\alpha_ae^\beta_b$), but it reads as a terse derivation with many references to equations that live in other notes.

- [Structure] Add a short numbered "3+1 recipe" box after Eq. (4.76): (1) choose $N$, $N^a$; (2) solve the constraints (4.77) for initial $h_{ab}$, $K_{ab}$; (3) evolve with (4.78)-(4.79); and state that the evolution preserves the constraints (Bianchi identities), which explains why only the initial data are constrained.
- [Intuition] After Eq. (4.75), explain why $N$ and $N^a$ have no evolution equations: they appear without time derivatives, so they act as Lagrange multipliers whose variation yields the constraints $\mathcal C=0$, $\mathcal C_a=0$ (the gauge freedom of choosing the foliation).
- [Links] Link the cited material: Eq. (4.73) to \[\[4.2.7 Variation of the Hamiltonian\]\], Eqs. (4.57)/(4.62) to \[\[4.2.5 Gravitational action\]\]/\[\[4.2.6 Gravitational Hamiltonian\]\], Eq. (4.37) to \[\[4.2.2 3 + 1 decomposition\]\], and "Section 4.5, Problem 4" to \[\[4.5 Problems#Problem 4\]\].
- [Simplify] Note in one sentence that Eq. (4.78) is the definition of $K_{ab}$ rearranged ($K_{ab}=\frac{1}{2N}(\dot h_{ab}-N_{a|b}-N_{b|a})$), and that this $K_{ab}$ has the opposite sign to the MTW/numerical-relativity convention, so readers comparing with ADM codes are not confused by the signs in (4.79).
- [Structure] The physical-quantities table omits $\mathcal C$, $\mathcal C_a$, $\mathcal H_{ab}$, $\mathcal P^{ab}$ and $\mathcal L_N$, which carry the main equations; add them (and fix the typo "constraints equations" to "constraint equations").

### N3400

Note: [[4.2.9 Value of the Hamiltonian for solutions|4.2.9 Value of the Hamiltonian for solutions]]  
Priority: low · Graph: no · Manim: no

Short, correct note; Eq. (4.80) is consistent with the later ADM and angular-momentum definitions, but it does not show why the volume term drops out.

- [Simplify] Add one line showing the mechanism: the volume part of $H_G$ is lapse and shift multiplied by the constraint densities $\mathcal C$, $\mathcal C_a$, so it vanishes on solutions of (4.77), leaving only the $S_t$ term.
- [Intuition] Add a sentence that this is the general-relativity analogue of Gauss's law: the energy of a solution is read off from the fields on the boundary, which is exactly what \[\[4.3.1 Hamiltonian definitions\]\] exploits.
- [Structure] The table lists $\theta^A$ but not $\sigma$ (determinant of $\sigma_{AB}$) or the surface $S_t$; add them, and link Eq. (4.61) to \[\[4.2.6 Gravitational Hamiltonian\]\].

### N3401

Note: [[4.3 Mass and angular momentum|4.3 Mass and angular momentum]]  
Priority: low · Graph: no · Manim: no

Hub note with correct links to all six subsections.

- [Structure] No change needed; optionally add a few words after each link (e.g. "ADM: spatial infinity", "Bondi-Sachs: null infinity").

### N3402

Note: [[4.3.1 Hamiltonian definitions|4.3.1 Hamiltonian definitions]]  
Priority: medium · Graph: no · Manim: no

Correct and well structured, but the key idea (mass = Hamiltonian for asymptotic time translations, angular momentum = minus the Hamiltonian for rotations) is buried in long paragraphs.

- [Structure] Put the two definitions side by side in a small table or callout: generator, $(N,N^a)$ choice, resulting formula (4.81) vs (4.82), and the sign convention, so the parallel with Noether charges (energy for $\partial_t$, angular momentum for $\partial_\phi$) is visible.
- [Intuition] Explain why the subtraction $k_0$ is needed: in flat space $k=2/R$ and $\oint k\sqrt\sigma\,\mathrm d^2\theta=8\pi R$ diverges as $R\to\infty$, so subtracting the flat embedding makes $M=0$ for Minkowski and finite otherwise.
- [Example] Point forward to \[\[4.3.2 Mass and angular momentum for stationary, axially symmetric spacetimes\]\] with the one-line Schwarzschild check ($k-k_0\approx-2m/R^2$ times $4\pi R^2$ gives $M=m$).
- [Structure] The table gives $\energy{H_G^{\mathrm{solution}}}$ unit "—" while 4.2.9 gives $\unit{\mathrm m}$; state that its dimension depends on the generator (m for translations, m$^2$ for rotations), and add $\phi^a$ and $\sqrt{\sigma}$, which the formulas use.

### N3403

Note: [[4.3.2 Mass and angular momentum for stationary, axially symmetric spacetimes|4.3.2 Mass and angular momentum for stationary, axially symmetric spacetimes]]  
Priority: medium · Graph: no · Manim: no

All intermediate results verified ($k=2(1-2m/R)/R$, $k-k_0=-2m/R^2$, $g^{t\phi}=-2j/r^3$, $\Gamma^t_{\phi r}=-3j\sin^2\theta/r^2$, $J=j$), but the "brief calculations" are skipped.

- [Correctness] The table calls $K_{\phi r}$ a "mixed coordinate component"; it is a fully covariant off-diagonal component ("mixed" normally means one upper and one lower index). Reword to "off-diagonal covariant component".
- [Simplify] Show the "brief calculation" of $k$: $k=\frac{1}{\sqrt h}\partial_r(\sqrt h\,r^r)$ with $\sqrt h\approx(1+3m/r)r^2\sin\theta$ and $r^r\approx1-m/r$, so $\sqrt h\,r^r=(r^2+2mr)\sin\theta$ and $k=\frac{2}{r}(1-\frac{2m}{r})$.
- [Simplify] Show the two contributions $\Gamma^t_{\phi r}=\frac12(g^{tt}\partial_rg_{t\phi}+g^{t\phi}\partial_rg_{\phi\phi})=-\frac{j\sin^2\theta}{r^2}-\frac{2j\sin^2\theta}{r^2}$ and the final integral $\frac{3j}{4}\int_0^\pi\sin^3\theta\,\mathrm d\theta=\frac{3j}{4}\cdot\frac43=j$, so the factor 3 can be followed.
- [Intuition] Add that Eq. (4.83) is the large-$r$ limit of the Kerr metric with $m=M$, $j=Ma$ (link the Kerr note if one exists), so the result $J=j$ has an obvious physical anchor.

### N3404

Note: [[4.3.3 Komar formulae|4.3.3 Komar formulae]]  
Priority: medium · Graph: no · Manim: no

Derivations verified (including $\Gamma^t_{rt}=m(1+2m/r)/r^2$ and the factors in Eqs. 4.89-4.90), but the chain from surface to volume integral is dense and lacks a physical example.

- [Example] Add a worked check of Eq. (4.89) for static dust ($T=-\rho$, $n\cdot\xi_{(t)}\approx-1$): $(T_{\alpha\beta}-\frac12Tg_{\alpha\beta})n^\alpha\xi^\beta_{(t)}=\rho/2$, so $M=\int\rho\sqrt h\,\mathrm d^3y$; then mention \[\[4.5 Problems#Problem 6\]\] ($\rho+3p$: pressure gravitates).
- [Intuition] Explain why $J$ carries $1/16\pi$ while $M$ carries $-1/8\pi$ (the well-known Komar factor-of-2 mismatch), and that the normalizations are fixed here by matching to $k-k_0$ and $K_{ab}\phi^ar^b$.
- [Intuition] Sharpen the closing claim that only stationary, axially symmetric spacetimes allow hypersurface integrals: the Komar mass needs only the timelike Killing vector (stationarity), and $J$ only the axial Killing vector.
- [Simplify] In the first derivation state why $\xi^\alpha_{(t);\beta}=\Gamma^\alpha_{\beta t}$ (the components of $\xi_{(t)}=\partial_t$ are constant) and that the $g^{t\phi}$ contribution to $\Gamma^t_{rt}$ is $O(j^2)$ and dropped.
- [Links] Link "Section 3.2.3", "Section 3.3.3" and "Section 1.13, Problem 9" to the corresponding notes of this book, and "Section 5.5.3" to the black-hole mechanics note.

### N3405

Note: [[4.3.4 Bondi-Sachs mass|4.3.4 Bondi-Sachs mass]]  
Priority: medium · Graph: no · Manim: yes

Correct but very short; the difference between the "spatial infinity" and "null infinity" limits is stated rather than shown.

- [Manim] Animate on a $(r,t)$ diagram the spheres $S(t,r)$ moving to large $r$ along a horizontal line $t=$ const (spatial infinity, $u\to-\infty$) and along a $45^\circ$ line $u=$ const (null infinity), with an outgoing radiation shell, to show which limit crosses the radiation.
- [Intuition] Add that $M_{\mathrm{ADM}}(t)$ is in fact independent of $t$ (shown in the Vaidya note), whereas $M_{\mathrm{BS}}(u)$ genuinely depends on $u$; the notation of Eqs. (4.91)-(4.92) otherwise suggests both evolve.
- [Simplify] State that $u=t-r$ is the flat-space form and that in curved spacetime one uses $t-r^*$ (as in \[\[4.3.5 Distinction between ADM and Bondi-Sachs masses -  Vaidya spacetime\]\]).
- [Example] Give a concrete scale for Eq. (4.93): GW150914 radiated about $3\,M_\odot$ of Bondi mass within a fraction of a second, while the ADM mass stayed at the initial total of about $65\,M_\odot$.

### N3406

Note: [[4.3.5 Distinction between ADM and Bondi-Sachs masses -  Vaidya spacetime|4.3.5 Distinction between ADM and Bondi-Sachs masses -  Vaidya spacetime]]  
Priority: medium · Graph: yes · Manim: yes

Calculations verified ($G_{uu}$, $n_\alpha$, $h_{ab}$, exact $k=2/(R\sqrt{1+2m/R})$, $T_{uu}=-T_u{}^r$) and the paradox discussion is good, but two symbols are reused with different meanings.

- [Correctness] Symbol clash for $t$: in $u=t-r-2M\ln(r/2M-1)$ it is the Schwarzschild time, but later $t\equiv u+r$ defines the slicing time, which differs from it by $2M\ln(r/2M-1)$; rename one (e.g. $t_s$ for Schwarzschild time) and note the difference.
- [Correctness] Symbol clash for $M$: it denotes the constant Schwarzschild mass in the definition of $u$ and also the surface functional $M(S)$, while the table lists only "original mass"; rename $M(S)$ (e.g. $\mathcal M(S)$) or add it to the table.
- [Graph] Plot a model mass function $m(u)=m_0-\frac{\Delta m}{2}[1+\tanh(u/\tau)]$ ($m_0=1$, $\Delta m=0.3$, $\tau=1$, $u\in[-6,6]$) together with the constant $M_{\mathrm{ADM}}=m(-\infty)=m_0$ and $M_{\mathrm{BS}}(u)=m(u)$.
- [Manim] Animate outgoing null shells on a $(r,t)$ diagram with a constant-$t$ slice and a constant-$u$ null cone: the $t$-slice crosses all emitted radiation (ADM constant), the $u$-cone misses earlier radiation (Bondi mass decreasing); this complements Fig. 4.5.
- [Intuition] Note that $\ell^\alpha$ is null, so it is not a normalized four-velocity; the "energy density" $\rho$ is defined relative to the chosen normalization $\ell_\alpha=-\partial_\alpha u$.

### N3407

Note: [[4.3.6 Transfer of mass and angular momentum|4.3.6 Transfer of mass and angular momentum]]  
Priority: low · Graph: no · Manim: no

Clear dust example and correct final results for $\Delta M$ and $\Delta J$, with one sign slip in the divergence identity.

- [Correctness] In $\varepsilon^\alpha{}_{;\alpha}=-T^{\alpha\beta}{}_{;\alpha}\xi_{(t)\beta}+T^{\alpha\beta}\xi_{(t)\beta;\alpha}$ the second term must carry a minus sign, $-T^{\alpha\beta}\xi_{(t)\beta;\alpha}$ (both terms vanish, so the conclusion is unchanged).
- [Simplify] State that the second term vanishes because $T^{\alpha\beta}$ is symmetric while $\xi_{\beta;\alpha}$ is antisymmetric; the text mentions only the antisymmetry.
- [Example] Add a one-line test-particle check: a single particle of mass $m$ crossing $\Sigma$ transfers $\Delta M=m\tilde E$ and $\Delta J=m\tilde L$, connecting to the geodesic constants of motion (link the Schwarzschild/Kerr geodesic notes if present).

### N3408

Note: [[4.4 Bibliographical notes|4.4 Bibliographical notes]]  
Priority: low · Graph: no · Manim: no

Reference list, transcribed faithfully.

- [Links] Link the in-text references "Section 4.2.4", "Section 4.2.8", "Sections 4.3.3 and 4.3.5", "Section 4.3.4" and "Problem 7" to \[\[4.2.4 Foliation of the boundary\]\], \[\[4.2.8 Hamilton's equations\]\], \[\[4.3.3 Komar formulae\]\], \[\[4.3.5 Distinction between ADM and Bondi-Sachs masses -  Vaidya spacetime\]\], \[\[4.3.4 Bondi-Sachs mass\]\] and \[\[4.5 Problems#Problem 7\]\].

### N3409

Note: [[4.5 Problems|4.5 Problems]]  
Priority: low · Graph: no · Manim: no

Exercise list; the checked statements (Problem 5 result, Problem 6(b) $\rho+3p$ factor, Problem 8(c) energy and angular-momentum fluxes) are consistent.

- [Structure] Letters are reused across problems ($\rho$ = inner radius in P3, fluid density in P6, scalar source in P8; $\ell$ = proper distance in P7, multipole index in P8; $m$ = mass and azimuthal index); add a short remark or per-problem quantity notes so the single table is not ambiguous, and give $\lambda$ the unit "arbitrary" rather than m.

### N3410

Note: [[02 Physics/05 Relativity and Gravitation/03 Relativists Toolkit/05 Black holes/5.0 Chapter introduction|5.0 Chapter introduction]]  
Priority: low · Graph: no · Manim: no

Clear chapter overview that maps the sections and links them to earlier chapters.

- [Links] Turn the plain-text references (Sections 5.1–5.5, Chapters 2–4) into wiki links to \[\[5.1 Schwarzschild black hole\]\], \[\[5.2 Reissner-Nordström black hole\]\], \[\[5.3 Kerr black hole\]\], \[\[5.4 General properties of black holes\]\], \[\[5.5 The laws of black-hole mechanics\]\] and the relevant chapter hubs.
- [Structure] The file starts with a UTF-8 BOM, as do almost all notes in this folder (all of this batch except 5.1.1 and 5.1.3); strip the BOMs to meet the vault's UTF-8 without BOM rule.

### N3411

Note: [[5.1 Schwarzschild black hole|5.1 Schwarzschild black hole]]  
Priority: low · Graph: no · Manim: no

Hub note with a complete and correct list of the ten subsection links.

- [Structure] No change needed apart from removing the UTF-8 BOM. Optionally add one line saying the Kruskal (5.1.2), Eddington–Finkelstein (5.1.3), Painlevé–Gullstrand (5.1.4) and Penrose–Carter (5.1.5) notes are four charts of one spacetime.

### N3412

Note: [[5.1.1 Birkhoff's theorem|5.1.1 Birkhoff's theorem]]  
Priority: medium · Graph: no · Manim: no

Correct but compressed proof sketch that states Eq. (5.4) without saying where it comes from and moves quickly past the step that removes $\psi(t)$.

- [Simplify] After "The third gives $\psi'=0$", explain that $\psi$ can still depend on $t$, and that the rescaling $\mathrm d\bar t=e^{\psi(t)}\mathrm dt$ absorbs it. That step is what makes the exterior static.
- [Intuition] Add a short physical paragraph: in vacuum, $\partial_t m=0$ means no energy flux, so a pulsating spherical star cannot radiate gravitational waves; its exterior field is as unaware of the pulsation as the Newtonian field outside a spherical shell.
- [Links] Link the "time-dependent mass distribution" statement to the Vaidya example (\[\[5.1.8 Distinction between event and apparent horizons -  Vaidya spacetime\]\]) as a non-vacuum counterexample in which $m$ does change.

### N3413

Note: [[5.1.10 Bifurcation two-sphere|5.1.10 Bifurcation two-sphere]]  
Priority: low · Graph: yes · Manim: no

Short and correct; Eq. (5.19) checks out, but the claim that $t_\alpha\propto-\partial_\alpha U$ is stated without the one line of algebra behind it.

- [Simplify] Show the lowering explicitly: $t_U=g_{UV}t^V=-\frac{16M^3}{r}e^{-r/2M}\frac{V}{4M}$ on $U=0$, so $t_\alpha=-\frac{4M^2V}{r}e^{-r/2M}\partial_\alpha U$ (with $V>0$ on the future horizon).
- [Graph] Kruskal $U$–$V$ diagram with the Killing flow: draw arrows of $(t^U,t^V)=(-U,V)/4M$ on a grid in $[-2,2]^2$ to show hyperbolic "boost" flow lines that vanish at the origin (the bifurcation sphere) and run along the horizons.
- [Links] Link "Eqs. (5.5)–(5.8)" to \[\[5.1.2 Kruskal coordinates\]\] and point to the Kerr analogue \[\[5.3.11 Bifurcation two-sphere\]\].

### N3414

Note: [[5.1.2 Kruskal coordinates|5.1.2 Kruskal coordinates]]  
Priority: medium · Graph: no · Manim: yes

Correct derivation (Eq. 5.9 and $UV=1$ at $r=0$ check out) with good figures, but it uses $f$ without defining it and does not explain why each of the four regions is what it is.

- [Simplify] The symbol $f$ in "$f\simeq\pm e^{(v-u)/4M}$" is never defined in this note; state $f=1-2M/r$ when it first appears.
- [Simplify] Add the one-line check of Eq. (5.9): $\mathrm dU\,\mathrm dV=\pm\frac{1}{16M^2}e^{(v-u)/4M}\mathrm du\,\mathrm dv$ together with $e^{(v-u)/4M}=e^{r/2M}|r/2M-1|$ gives the prefactor $32M^3e^{-r/2M}/r$.
- [Structure] Add a small table of the four regions with the signs of $U,V$ (I: $U<0,V>0$; II: $U>0,V>0$; III: $U>0,V<0$; IV: $U<0,V<0$) and their meaning (exterior, black hole, second exterior, white hole).
- [Manim] Animate how the $(t,r)$ grid of region I maps into the Kruskal quadrant: lines of constant $t$ turn into rays through the origin and lines of constant $r$ into hyperbolas $UV=\text{const}$, with $t\to\pm\infty$ collapsing onto the horizons.

### N3415

Note: [[5.1.3 Eddington-Finkelstein coordinates|5.1.3 Eddington-Finkelstein coordinates]]  
Priority: medium · Graph: no · Manim: yes

Correct and brief (Eqs. 5.10–5.11 and the outgoing slope $2/f$ check out), but the key physical point, that light cones tip over at $r=2M$, is left to the figure.

- [Intuition] Spell out the outgoing slope: $\mathrm dv/\mathrm dr=2/f$ is positive outside, infinite at $r=2M$ (the outgoing ray stays at $r=2M$) and negative inside (outgoing rays move to smaller $r$). This is why nothing escapes.
- [Simplify] Introduce $\tilde t=v-r$ and say that Fig. 5.3 plots $\tilde t$ against $r$, so ingoing rays sit at 45°. Readers otherwise cannot see why the ingoing lines are straight.
- [Manim] Move a light cone along $r$ from $4M$ to $0.5M$ in the $(r,\tilde t)$ plane, with the outgoing edge rotating from 45° to vertical at $r=2M$ and then tipping inward.
- [Links] Link "regions I and II / IV and I" to the region figure in \[\[5.1.2 Kruskal coordinates\]\].

### N3416

Note: [[5.1.4 Painlevé-Gullstrand coordinates|5.1.4 Painlevé-Gullstrand coordinates]]  
Priority: medium · Graph: yes · Manim: no

Clear and correct metric derivation (Eq. 5.12 checks out), with one region-label typo.

- [Correctness] "an alternative coordinate system is produced that covers regions **VI** and **I**" — there is no region VI; it should be regions **IV** and **I** (the white-hole and exterior regions), as in \[\[5.1.3 Eddington-Finkelstein coordinates\]\].
- [Simplify] Write out the substitution $\mathrm dt=\mathrm dT-f^{-1}\sqrt{2M/r}\,\mathrm dr$ and the two-line expansion that gives Eq. (5.12). Also note that $\mathrm dT=\mathrm d\tau$ holds only along the infalling worldlines, not as a general identity.
- [Intuition] Add the "river model" reading: space flows inward at the Newtonian escape speed $\sqrt{2M/r}$, which reaches the speed of light exactly at $r=2M$.
- [Graph] Plot the inflow speed $\sqrt{2M/r}$ against $r/M\in[0.5,6]$ with a horizontal line at 1, marking $r=2M$.

### N3417

Note: [[5.1.5 Penrose-Carter diagram|5.1.5 Penrose-Carter diagram]]  
Priority: low · Graph: no · Manim: yes

Clear and correct (the singularity at $\tilde U+\tilde V=\pm\pi/2$ follows from $\tan\tilde U\tan\tilde V=1$), with good figures and a helpful boundary table.

- [Simplify] Add the one-line reason that $UV=1$ maps to $\tilde U+\tilde V=\pm\pi/2$: $\tan\tilde U\tan\tilde V=1\Leftrightarrow\cos(\tilde U+\tilde V)=0$.
- [Manim] Animate the compactification: start with the Kruskal diagram including its hyperbolas, apply $\arctan$ to both null coordinates continuously, and show infinity shrinking to the diamond edges $\mathscr I^\pm$ and the points $i^0,i^\pm$.
- [Example] Trace three worldlines on Fig. 5.5 (an observer staying outside who ends at $i^+$, an infalling observer who ends at $r=0$, and an outgoing light ray that ends on $\mathscr I^+$) to show how to read the diagram.

### N3418

Note: [[5.1.6 Event horizon|5.1.6 Event horizon]]  
Priority: low · Graph: no · Manim: no

Short qualitative note that is correct and readable.

- [Simplify] Add a sentence saying why the observer cannot avoid $r=0$: in region II, $r$ is a timelike coordinate and every future-directed worldline has $\mathrm dr<0$.
- [Links] Link "Fig. 5.2" to \[\[5.1.2 Kruskal coordinates\]\] and the region labels to the Penrose diagram in \[\[5.1.5 Penrose-Carter diagram\]\].

### N3419

Note: [[5.1.7 Apparent horizon|5.1.7 Apparent horizon]]  
Priority: medium · Graph: yes · Manim: no

Correct calculation (Eq. 5.15 re-derived from Eq. 5.8), but one symbol has two meanings and the intermediate steps are compressed.

- [Correctness] Symbol clash: $\theta$ is both the expansion ($\theta=k^\alpha{}_{;\alpha}$) and the polar angle in $|g|^{1/2}=|g_{UV}|r^2\sin\theta$; the table lists both. Rename the angle locally (for example $\vartheta$) or write the expansion as $\Theta$.
- [Simplify] Show the intermediate step: differentiating Eq. (5.8) with respect to $V$ gives $r_{,V}=-4M^2Ue^{-r/2M}/r$; with $|g_{UV}|=16M^3e^{-r/2M}/r$ this yields Eq. (5.15).
- [Graph] Plot $\theta=-U/(2Mr)$ along a slice $V=1$ against $U\in[-2,0.9]$ (using $r(UV)$ from Eq. 5.8), showing the sign change at $U=0$.

### N3420

Note: [[5.1.8 Distinction between event and apparent horizons -  Vaidya spacetime|5.1.8 Distinction between event and apparent horizons -  Vaidya spacetime]]  
Priority: medium · Graph: yes · Manim: yes

Correct and well argued (I re-derived $\kappa=2m/r^2$, $k^\alpha{}_{;\alpha}=2(r-m)/r^2$ and $g^{\alpha\beta}\Phi_{,\alpha}\Phi_{,\beta}=-4\,\mathrm dm/\mathrm dv$), but the teleological point would land better with an explicit example.

- [Simplify] Give $k^\alpha=(k^v,k^r)=(2,f)$ explicitly and show that $k_\alpha k^\alpha=0$; readers can then check $\kappa=f_{,r}=2m/r^2$ and the divergence themselves.
- [Example] Work a concrete linear accretion $m(v)=m_1+(m_2-m_1)(v-v_1)/(v_2-v_1)$, integrate the outgoing null equation $\mathrm dr/\mathrm dv=f/2$ backward from $r=2m_2$ at $v_2$, and show that the event horizon starts growing before $v_1$ (see Problem 2 in \[\[5.7 Problems\]\]).
- [Graph] For $m_1=1$, $m_2=1.5$, $v_1=0$, $v_2=5$: plot the apparent horizon $r=2m(v)$ and the numerically integrated event horizon $r(v)$ on axes $v\in[-10,15]$, $r\in[1.5,3.5]$.
- [Manim] Animate the shell of null dust falling in while the event horizon (already growing in anticipation) and the apparent horizon (jumping only when the dust arrives) evolve over $v$, to show the teleological behaviour.

### N3421

Note: [[5.1.9 Killing horizon|5.1.9 Killing horizon]]  
Priority: medium · Graph: no · Manim: no

Very short note whose only equation has the wrong sign.

- [Correctness] "$g_{\alpha\beta}t^\alpha t^\beta=1-\frac{2M}{r}$" has the wrong sign: $g_{\alpha\beta}t^\alpha t^\beta=g_{tt}=-(1-2M/r)$, negative (timelike) outside and positive (spacelike) inside, as the preceding sentence says.
- [Intuition] Add that a Killing vector generates a symmetry flow, and that on a Killing horizon this flow moves points along the null generators. Link to \[\[5.1.10 Bifurcation two-sphere\]\], where it is shown that $t^\alpha$ is tangent to the generators.

### N3422

Note: [[5.2 Reissner-Nordström black hole|5.2 Reissner-Nordström black hole]]  
Priority: low · Graph: no · Manim: no

Hub note with correct links to the four subsections.

- [Structure] No change needed apart from removing the UTF-8 BOM.

### N3423

Note: [[5.2.1 Derivation of the Reissner-Nordström solution|5.2.1 Derivation of the Reissner-Nordström solution]]  
Priority: low · Graph: yes · Manim: no

Correct and compact derivation ($m'=Q^2/2r^2$ follows from Eq. 5.20 and Eq. 5.4), with the stress-tensor algebra left to the reader.

- [Simplify] Show the "few steps of algebra" for Eq. (5.20): with $F^{tr}=Q/r^2$, $F^{\mu\nu}F_{\mu\nu}=-2Q^2/r^4$, so $T^t{}_t=T^r{}_r=\frac{1}{4\pi}(-\frac{Q^2}{r^4}+\frac{Q^2}{2r^4})=-\frac{Q^2}{8\pi r^4}$.
- [Links] Link "Eq. (5.2)" and "Eqs. (5.4)" to \[\[5.1.1 Birkhoff's theorem\]\], and "Stokes’ theorem (Section 3.5.3)" and "Section 4.3" to the corresponding notes.
- [Graph] Plot $m(r)/M=1-Q^2/(2Mr)$ and $f(r)$ against $r/M\in[0.2,5]$ for $Q/M=0.8$, marking $r_\pm$ and the radius $Q^2/2M$ where $m$ turns negative.

### N3424

Note: [[5.2.2 Kruskal coordinates|5.2.2 Kruskal coordinates]]  
Priority: medium · Graph: yes · Manim: no

The outer-patch construction is correct, but the inner-patch Kruskal definitions are inconsistent in sign, and the physical-quantity table omits the Kruskal coordinates.

- [Correctness] With Eq. (5.26) as written ($U_-=\mp e^{\kappa_-u}$, $V_-=e^{-\kappa_-v}$), $U_-V_-=-\kappa_-(r-r_-)$, so $f\simeq+2U_-V_-$ and $\mathrm ds^2\simeq+\frac{2}{\kappa_-^2}\mathrm dU_-\mathrm dV_-$, not "$f\simeq-2U_-V_-$" and "$-\frac{2}{\kappa_-^2}$". Fix the sign convention, for example $V_-=-e^{-\kappa_-v}$, after checking the source.
- [Structure] Typo: "the outer horizon in an event horizon" should read "is an event horizon". Add $U_\pm,V_\pm$ (dimensionless) to the physical-quantity table and wrap them in the same macro as the other coordinates.
- [Simplify] Show the check "$f\simeq-2U_+V_+$": $U_+V_+=\mp e^{2\kappa_+r^*}=-\kappa_+(r-r_+)$ near $r_+$.
- [Graph] Plot $f(r)=1-2/r+q^2/r^2$ (with $M=1$) for $q=0,0.6,0.9,1$ on $r\in[0.2,4]$, showing the two roots merging in the extreme case and $\kappa_\pm=\frac12|f'(r_\pm)|$ as the slopes there.

### N3425

Note: [[5.2.3 Radial observers in Reissner-Nordström spacetime|5.2.3 Radial observers in Reissner-Nordström spacetime]]  
Priority: low · Graph: yes · Manim: yes

Clear and correct (Eqs. 5.28–5.32 and their $f\to0$ limits re-derived); the potential diagram and the patch figure support the argument well.

- [Example] Give a numeric case: $M=1$, $Q=0.8$, $\tilde E=1$ gives $r_\pm=1.6,0.4$ and $r_{\min}=Q^2/2M=0.32$ (from $f=1$). Point out that $r_{\min}$ coincides with the radius where $m(r)=0$, which ties the turning point to the negative-mass argument.
- [Simplify] Prove the closing claim "this always occurs within the inner horizon" in one line: $r_-=Q^2/r_+>Q^2/2M$ because $r_+<2M$.
- [Manim] Animate the observer on the Penrose diagram of Fig. 5.9 together with the potential of Fig. 5.10: a dot falling through $r_+$ and $r_-$, bouncing at $r_{\min}$ and leaving through a new $r_-$ and $r_+$ into the next universe.
- [Graph] Plot $\dot r^2=\tilde E^2-f(r)$ against $r$ for $\tilde E=1$ and $Q/M=0.8$ to make the forbidden region $r<r_{\min}$ explicit.

### N3426

Note: [[5.2.4 Surface gravity|5.2.4 Surface gravity]]  
Priority: low · Graph: yes · Manim: no

Correct and well motivated (Eqs. 5.34, 5.37–5.43 re-derived, including the Frobenius contraction signs), and the redshift argument gives good intuition.

- [Simplify] In the Frobenius step, show that $t^{\alpha;\beta}t_\alpha=-\kappa t^\beta$ (Killing antisymmetry). This is the only non-obvious sign in the chain to $-2\kappa^2t_\gamma$.
- [Graph] For $Q/M=0,0.6,0.9$, plot the local acceleration $a(r)=\frac12f^{-1/2}f'$ and the redshifted $a_\infty(r)=\frac12f'$ against $r/M$ from $r_+$ to $6$, showing $a$ diverging while $a_\infty\to\kappa$.
- [Links] Link "Section 5.1.9" to \[\[5.1.9 Killing horizon\]\] and "Section 5.2.2" to \[\[5.2.2 Kruskal coordinates\]\].

### N3427

Note: [[5.3 Kerr black hole|5.3 Kerr black hole]]  
Priority: low · Graph: no · Manim: no

Hub note with correct links to all thirteen subsections.

- [Structure] No change needed apart from removing the UTF-8 BOM.

### N3428

Note: [[5.3.1 The Kerr metric|5.3.1 The Kerr metric]]  
Priority: low · Graph: yes · Manim: no

Correct reference note (metric, inverse, and the Kretschmann scalar 5.47 verified) that would benefit from limiting cases.

- [Intuition] Add the limits: $a=0$ recovers Schwarzschild, and $M=0$ gives flat space in oblate spheroidal coordinates. Note that for $r\gg M$, the $g_{t\phi}$ term reduces to the Lense–Thirring term $-4J\sin^2\theta/r\,\mathrm dt\,\mathrm d\phi$.
- [Simplify] Say explicitly where $\rho^2=0$ is: $r=0$ and $\theta=\pi/2$, which is a ring rather than a point. Link to \[\[5.3.8 The nature of the singularity\]\].
- [Graph] Plot $M^4R_{\alpha\beta\gamma\delta}R^{\alpha\beta\gamma\delta}$ from Eq. (5.47) for $a/M=0.9$ against $r/M\in[0.05,3]$ at $\theta=\pi/2$ and $\theta=0$, showing the divergence only in the equatorial plane at $r\to0$.

### N3429

Note: [[5.3.10 Surface gravity|5.3.10 Surface gravity]]  
Priority: low · Graph: yes · Manim: no

Correct result (Eq. 5.80 verified using $1-a\Omega_H\sin^2\theta=\rho^2/(r_+^2+a^2)$), but it does not say which coordinates the covector $\xi_\alpha\propto\partial_\alpha r$ is written in, and one cross-reference points to the wrong note.

- [Links] "We shall return to this remarkable property in Section 5.5.1": in this vault the uniformity of $\kappa$ is proved in \[\[5.5.2 Zeroth law\]\], not \[\[5.5.1 Preliminaries\]\].
- [Simplify] State that $\xi_\alpha=(1-a\Omega_H\sin^2\theta)\partial_\alpha r$ holds in the ingoing coordinates $(v,r,\theta,\psi)$ of Eq. (5.65); in Boyer–Lindquist coordinates $\xi_\alpha$ vanishes at $\Delta=0$. Also add the identity $1-a\Omega_H\sin^2\theta=\rho^2/(r_+^2+a^2)$, which makes the $\theta$-independence visible.
- [Graph] Plot $M\kappa$ against $a/M\in[0,1]$, falling from $1/4$ to 0, alongside $M\Omega_H$ rising to $1/2$.

### N3430

Note: [[5.3.11 Bifurcation two-sphere|5.3.11 Bifurcation two-sphere]]  
Priority: low · Graph: no · Manim: no

Correct and concise; the relation to the old $k^\alpha$ is stated without explaining why it is finite on the horizon.

- [Simplify] In the bracketed remark, note that $k^\alpha_{\mathrm{old}}$ from Eq. (5.60) has components proportional to $1/\Delta$, so $\Delta k^\alpha_{\mathrm{old}}$ stays finite at $r_+$; otherwise "evaluated on the horizon" reads as zero.
- [Links] Link "Eq. (5.78)" to \[\[5.3.10 Surface gravity\]\], "Section 5.3.6" to \[\[5.3.6 Principal null congruences\]\], and add a pointer to the Schwarzschild case \[\[5.1.10 Bifurcation two-sphere\]\].

### N3431

Note: [[5.3.12 Smarr's formula|5.3.12 Smarr's formula]]  
Priority: low · Graph: no · Manim: no

Correct (Smarr's formula verified symbolically via $r_+^2+a^2=2Mr_+$), but it skips the algebra and has one wrong cross-reference.

- [Links] "We will generalize Smarr’s formula ... in Section 5.5.2": in this vault the generalization is \[\[5.5.3 Generalized Smarr formula\]\]; \[\[5.5.2 Zeroth law\]\] is the wrong target.
- [Simplify] Show the three-line check: $2\Omega_HJ=2Ma^2/(r_+^2+a^2)=a^2/r_+$ and $\kappa A/4\pi=r_+-M$, so the sum is $(a^2+r_+^2)/r_+-M=2M-M=M$.
- [Intuition] Add a scaling remark: $M$ has degree 1 and $A$, $J$ have degree 2, so Euler's theorem for homogeneous functions gives $M=2\Omega_HJ+2\frac{\kappa}{8\pi}A$ directly from the variation law.

### N3432

Note: [[5.3.13 Variation law|5.3.13 Variation law]]  
Priority: low · Graph: no · Manim: no

Correct derivation outline, but the final substitution is left to the reader, the sign claim is slightly overstated, and one cross-reference is wrong.

- [Links] "to which we shall return in Section 5.5.4": the second law is \[\[5.5.5 Second law\]\] in this vault; \[\[5.5.4 First law\]\] is the wrong target.
- [Simplify] Write out the collection step: $\frac{\delta A}{8\pi}=\frac{r_+(r_+\delta M-a\delta a)}{r_+-M}+a\delta a=\frac{r_+^2\delta M-Ma\delta a}{r_+-M}$, then use $M\delta a=\delta J-a\delta M$ and $r_+^2+a^2=2Mr_+$ to reach Eq. (5.85).
- [Simplify] \[\[5.3.5 The Penrose process\]\] gives $\delta M-\Omega_H\delta J>0$ only for particles that cross the horizon along timelike worldlines; for null particles it is $\ge0$. "Always increases" should therefore read "never decreases".

### N3433

Note: [[5.3.2 Dragging of inertial frames -  ZAMOs|5.3.2 Dragging of inertial frames -  ZAMOs]]  
Priority: low · Graph: yes · Manim: yes

Short, correct note ($\omega\simeq2J/r^3$ checks out) that would gain from a picture of how $\omega$ grows toward the horizon.

- [Graph] Plot $M\omega=2M^2ar/\Sigma$ in the equatorial plane against $r/M$ from $r_+$ to 10 for $a/M=0.5,0.9,0.998$, with the far-field curve $2J/r^3$ overlaid.
- [Manim] Show a ring of ZAMOs at several radii in the equatorial plane, each moving at $\omega(r)$, with the inner rings visibly whirling faster in the hole's sense of rotation.
- [Links] Link "Section 3.10" (frame dragging) to its note in Chapter 3.

### N3434

Note: [[5.3.3 Static limit -  static observers|5.3.3 Static limit -  static observers]]  
Priority: low · Graph: no · Manim: no

Clear and correct (Eq. 5.50 follows from $g_{tt}=0$), with a good figure of the ergosphere.

- [Simplify] Show the step $g_{tt}=-(1-2Mr/\rho^2)=0\Rightarrow r^2-2Mr+a^2\cos^2\theta=0$, and note that $r_{\mathrm{sl}}=2M$ at the equator and $r_{\mathrm{sl}}=r_+$ at the poles.
- [Intuition] Add the "faster than light" analogy: inside $r_{\mathrm{sl}}$, staying at fixed $\phi$ would require moving against the frame-dragging flow faster than light.
- [Structure] State in the figure caption which value of $a/M$ Fig. 5.12 uses.

### N3435

Note: [[5.3.4 Event horizon -  stationary observers|5.3.4 Event horizon -  stationary observers]]  
Priority: medium · Graph: yes · Manim: no

Generally clear derivation of the allowed angular velocities and the horizon, but it contains a wrong definition of $\omega$.

- [Correctness] "where $\omega=-g_{t\phi}/g_{tt}$" is wrong; the frame-dragging rate is $\omega=-g_{t\phi}/g_{\phi\phi}$ (Eq. 5.45). Only this form makes the last line of the $\gamma^{-2}$ derivation correct.
- [Simplify] Show the reduction to Eq. (5.53): $\omega^2-g_{tt}/g_{\phi\phi}=\rho^2\Delta/(\Sigma g_{\phi\phi})=\rho^4\Delta/(\Sigma^2\sin^2\theta)$.
- [Graph] For $a/M=0.9$, $\theta=\pi/2$: plot $M\Omega_+$, $M\Omega_-$ and $M\omega$ against $r/M\in[r_+,6]$, showing $\Omega_-$ crossing zero at $r_{\mathrm{sl}}=2M$ and all three meeting at $\Omega_H$ at $r_+$.

### N3436

Note: [[5.3.5 The Penrose process|5.3.5 The Penrose process]]  
Priority: low · Graph: no · Manim: yes

Clear qualitative explanation that is correct; the scenario would benefit from numbers and a visual.

- [Example] Add the maximal extractable energy: $M-M_{\mathrm{irr}}$, with $M_{\mathrm{irr}}=\sqrt{A/16\pi}$, which is about 29% of $M$ for $a=M$. This makes "self-limiting" quantitative.
- [Manim] Animate a particle entering the ergosphere (top view with $r_+$ and $r_{\mathrm{sl}}$ circles), splitting into a negative-energy fragment that falls through $r_+$ and a positive-energy fragment that escapes. Show the hole's $J$ and $M$ counters decreasing.
- [Links] Link "static limit" and "ergosphere" to \[\[5.3.3 Static limit -  static observers\]\] and the final inequality to \[\[5.3.13 Variation law\]\].

### N3437

Note: [[5.3.6 Principal null congruences|5.3.6 Principal null congruences]]  
Priority: low · Graph: no · Manim: no

Correct (the choices making $\Theta=0$, $P=\tilde E\rho^2$, Eqs. 5.62–5.63 and the ingoing metric 5.65 all verified), but it does not explain why these choices are made.

- [Intuition] Explain the choice $\tilde L=a\tilde E\sin^2\theta$: it is the unique choice that keeps $\theta$ constant and makes $R$ a perfect square. These rays are the Kerr analogue of purely radial light rays.
- [Simplify] Add $r^\sharp$, $P$, $R$ and $\Theta$ to the physical-quantity table, and wrap $r^\sharp$ in the same macro as $r^*$.
- [Links] Link "Section 5.7, Problem 4" to \[\[5.7 Problems\]\] and "Section 5.3.9" to \[\[5.3.9 Maximal extension of the Kerr spacetime\]\].

### N3438

Note: [[5.3.7 Kerr-Schild coordinates|5.3.7 Kerr-Schild coordinates]]  
Priority: low · Graph: yes · Manim: no

Correct (I verified the split of Eq. 5.65, $-l_\alpha$ in Eq. 5.70 and the quartic 5.71), and the presentation is clear.

- [Simplify] Show how Eq. (5.70) follows: $\sin\theta\,e^{i\psi}=(x+iy)(r-ia)/(r^2+a^2)$, so the real and imaginary parts give the $\mathrm dx$ and $\mathrm dy$ coefficients.
- [Graph] Plot surfaces of constant $r$ in the $x$–$z$ plane ($y=0$) for $a=1$: the ellipses $x^2/(r^2+a^2)+z^2/r^2=1$ for $r=0.25,0.5,1,2$, which degenerate to the disk $r=0$ bounded by the ring $x^2+y^2=a^2$.
- [Links] Link "Section 5.7, Problem 5" to \[\[5.7 Problems\]\] and "Eq. (5.65)" to \[\[5.3.6 Principal null congruences\]\].

### N3439

Note: [[5.3.8 The nature of the singularity|5.3.8 The nature of the singularity]]  
Priority: low · Graph: yes · Manim: yes

Short and correct transcription of the ring-singularity argument, but the oblate-spheroidal geometry behind "the point r = 0 is a disk" is left for the reader to picture.

- [Graph] Add a 2D plot in the $x$–$z$ half-plane ($\phi=0$) of the Kerr–Schild coordinate lines: ellipses $r=\text{const}$ ($x=\sqrt{r^2+a^2}\sin\theta$, $z=r\cos\theta$) for $r/a\in\{0,0.25,0.5,1,2\}$ and hyperbolae $\theta=\text{const}$, with the disk $r=0$, $|x|\le a$ as a thick segment and the ring at $x=\pm a$ marked; this shows directly why $r=0$ is a disk and why only its rim is singular.
- [Intuition] After "corresponds to the entire disk", add one sentence explaining that $r$ is not a radius here: surfaces of constant $r$ are confocal oblate spheroids that degenerate to the disk as $r\to0$, and $\rho^2=r^2+a^2\cos^2\theta$ vanishes only where both $r=0$ and $\cos\theta=0$.
- [Manim] Animate an observer moving down the symmetry axis ($\theta=0$) through the disk centre: show $\rho^2=r^2+a^2$ staying positive, the observer passing through the ring, and the coordinate $r$ continuing to negative values (link forward to \[\[5.3.9 Maximal extension of the Kerr spacetime\]\]).
- [Structure] File starts with a UTF-8 BOM; save as UTF-8 without BOM per the vault rules.

### N3440

Note: [[5.3.9 Maximal extension of the Kerr spacetime|5.3.9 Maximal extension of the Kerr spacetime]]  
Priority: medium · Graph: no · Manim: no

Faithful but terse transcription with two good native figures; one coordinate typo and unexplained figure labels make the inner-horizon patch harder to follow.

- [Correctness] Eq. (5.75) reads "$U_-=\mp e^{\kappa_-u},\ V_+=-e^{-\kappa_-v}$"; the second coordinate must be $V_-=-e^{-\kappa_-v}$ (the metric is then written in terms of $\mathrm dU_-\,\mathrm dV_-$).
- [Structure] Fig. 5.13 labels the dashed curves "r = r₁" without explanation; state in the caption or text what $r_1$ is (presumably the curve where one Kruskal patch is matched to the next) or relabel it if it is a transcription artefact.
- [Simplify] Show the one-line check that $-f\,\mathrm du\,\mathrm dv=-2\kappa_+^{-2}\mathrm dU_+\mathrm dV_+$: $\mathrm dU_+\mathrm dV_+=\pm\kappa_+^2e^{\kappa_+(v-u)}\mathrm du\,\mathrm dv$ and $f\simeq\pm2e^{\kappa_+(v-u)}$, so the signs cancel; the reader currently has to reconstruct this.
- [Intuition] Explain in one sentence why the $\theta=0$ section loses generality (the axis misses the ring singularity, so it sees $r=0$ as regular) and that this is exactly why the extension to $r<0$ is possible there.
- [Links] Turn the plain references "Section 5.2.2", "Section 5.2.3", "Section 5.3.6" and "Section 5.7, Problem 3" into wiki links (\[\[5.2.2 Kruskal coordinates\]\], \[\[5.2.3 Radial observers in Reissner-Nordström spacetime\]\], \[\[5.3.6 Principal null congruences\]\], \[\[5.7 Problems#Problem 3\]\]).
- [Structure] File starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3441

Note: [[5.4 General properties of black holes|5.4 General properties of black holes]]  
Priority: low · Graph: no · Manim: no

Clear section hub with a short motivation and correct subchapter links.

- [Structure] No content change needed; save without the UTF-8 BOM.

### N3442

Note: [[5.4.1 General black holes|5.4.1 General black holes]]  
Priority: medium · Graph: no · Manim: yes

Correct, compact definitions of black-hole region, event horizon, trapped surfaces and apparent horizon, but abstract and without a worked picture tying the definitions together.

- [Intuition] Before Eq. (5.86), add a two-sentence plain-language version: "an event is inside the black hole if no signal sent from it can ever reach distant observers"; then state the formal set definition.
- [Example] Add a short worked example using Schwarzschild in Eddington–Finkelstein coordinates: outgoing null rays $\mathrm dr/\mathrm dv=\tfrac12(1-2M/r)$ never reach $\mathscr I^+$ for $r<2M$, so $B=\{r<2M\}$ and $H=\{r=2M\}$; and point to \[\[5.1.8 Distinction between event and apparent horizons -  Vaidya spacetime\]\] for the dynamical case.
- [Manim] Animate Vaidya-type collapse in a $(v,r)$ diagram: a null shell falling in, the event horizon (traced backwards from late times) starting to grow before the shell arrives, and the apparent horizon jumping out only when the shell crosses it; this makes the teleological nature of $H$ and the statement "the apparent horizon lies within the black-hole region" visible.
- [Simplify] The four Penrose properties (i)–(iv) would read better as a bulleted list with one-line physical meaning each (e.g. (ii) "nothing that falls in can climb back out along the horizon").
- [Structure] File starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3443

Note: [[5.4.2 Stationary black holes|5.4.2 Stationary black holes]]  
Priority: medium · Graph: no · Manim: no

Correct summary of rigidity, Killing horizon, surface gravity and the Raychaudhuri consequences, but it states results without the short reasoning that would make them convincing.

- [Simplify] Show the one-line derivation behind Eq. (5.90): with $\lambda=V/\kappa$ and $V=e^{\kappa v}$, $\mathrm d\lambda/\mathrm dv=V$, so $k^\alpha=\mathrm dx^\alpha/\mathrm d\lambda=V^{-1}\xi^\alpha$ and the nonaffine term $\kappa\xi^\alpha$ is removed.
- [Intuition] After Eq. (5.92) add the argument explicitly: with $\theta=0$ and $\mathrm d\theta/\mathrm d\lambda=0$, Eq. (5.91) gives $\sigma^{\alpha\beta}\sigma_{\alpha\beta}+8\pi T_{\alpha\beta}k^\alpha k^\beta=0$; both terms are nonnegative (spatial shear, null energy condition), so each must vanish, giving (5.92) and (5.93) at once.
- [Example] Give the Kerr values as a concrete check: $\Omega_H=a/(r_+^2+a^2)$ and $\kappa=(r_+-M)/(r_+^2+a^2)$, linking \[\[5.3.10 Surface gravity\]\].
- [Links] Make "Section 5.3.10", "Section 5.5.2" and "Section 2.4.4" wiki links (\[\[5.3.10 Surface gravity\]\], \[\[5.5.2 Zeroth law\]\], \[\[2.4.4 Raychaudhuri's equation\]\]).
- [Structure] File starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3444

Note: [[5.4.3 Stationary black holes in vacuum|5.4.3 Stationary black holes in vacuum]]  
Priority: low · Graph: no · Manim: no

Clear historical summary of the uniqueness theorems; the long 1987 quotation contains an observational statement that is now outdated.

- [Structure] Add a short editorial callout after the Chandrasekhar quote noting that observed black-hole masses now range from about 5 to over $10^{10}$ solar masses (stellar-mass LIGO/Virgo sources up to supermassive quasar hosts), and that LIGO–Virgo ringdowns and EHT images of M87* and Sgr A* are consistent with Kerr.
- [Simplify] Shorten the quotation (copyright and focus) to its key sentence and paraphrase the rest; the note's point is "three parameters $M$, $J$, $Q$ determine an isolated stationary hole".
- [Intuition] Add one sentence on the main assumptions of the theorems (asymptotic flatness, regular horizon, electrovacuum exterior, and originally analyticity) so the "no hair" statement is not read as unconditional.
- [Structure] File starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3445

Note: [[5.5 The laws of black-hole mechanics|5.5 The laws of black-hole mechanics]]  
Priority: low · Graph: no · Manim: no

Good motivating hub for the four laws with correct links.

- [Structure] Add a four-row table pairing each law with its thermodynamic analogue ($\kappa\leftrightarrow T$, $A/4\leftrightarrow S$, $M\leftrightarrow E$, zeroth to third law) linking to the subchapters; also save without the UTF-8 BOM.

### N3446

Note: [[5.5.1 Preliminaries|5.5.1 Preliminaries]]  
Priority: medium · Graph: no · Manim: no

Correct collection of horizon basis, surface elements and the nonaffine Raychaudhuri equation, but dense and with one undefined object and one symbol clash.

- [Correctness] "$\xi_\alpha e^\alpha_A=0=\xi^\alpha e^A_\alpha$": the object $e^A_\alpha$ is never defined; the conditions needed for the completeness relation are $\xi_\alpha e^\alpha_A=0$, $N_\alpha e^\alpha_A=0$, $N_\alpha N^\alpha=0$ and $N_\alpha\xi^\alpha=-1$ (and $\xi_\alpha\xi^\alpha=0$); state these explicitly after introducing $N^\alpha$.
- [Correctness] Symbol clash: $\theta^A$ labels the generators while $\theta$ (mechanical colour) is the expansion in Eq. (5.97); rename the generator labels (e.g. $\vartheta^A$ or $y^A$) or add an explicit warning.
- [Intuition] Explain the extra $\kappa\theta$ term in Eq. (5.97): $v$ is not affine, and rescaling $\theta_v=V\theta_\lambda$ with $V=e^{\kappa v}$ turns the affine Raychaudhuri equation into this form; one line makes the term less mysterious.
- [Links] Link "Section 3.1", "Section 3.2" and "Section 2.6, Problem 8" to \[\[3.1 Description of hypersurfaces\]\], \[\[3.2 Integration over hypersurfaces\]\] and \[\[2.6 Problems\]\].
- [Structure] File starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3447

Note: [[5.5.2 Zeroth law|5.5.2 Zeroth law]]  
Priority: medium · Graph: no · Manim: no

Correct and well-structured proof sketch; a few steps are compressed and the dependence on $\kappa\neq0$ is implicit.

- [Simplify] Between (5.100) and (5.101) state the step: contracting with $\xi^\alpha$ gives $R_{\mu\nu\alpha\beta}\xi^\alpha\xi^\beta=0$ by antisymmetry in $\alpha\beta$, hence $\kappa\,\kappa_{,\alpha}\xi^\alpha=0$, so (5.101) follows only where $\kappa\ne0$; say that this assumption is being made.
- [Simplify] Show the differentiation of Eq. (5.98) explicitly: $2\kappa\kappa_{,\gamma}=-\xi^{\alpha;\beta}\xi_{\alpha;\beta\gamma}$, then insert (5.99).
- [Intuition] Add the physical meaning up front: the zeroth law says the black hole has a single "temperature" over its whole surface, just as a body in equilibrium does; mention that for Kerr $\kappa=(r_+-M)/(r_+^2+a^2)$ is visibly independent of $\theta$.
- [Links] Link "Section 5.3.10", "Section 5.2.4", "Section 1.13, Problem 9" and "Section 5.7, Problems 6 and 7" to the corresponding notes and \[\[5.7 Problems#Problem 6\]\] / \[\[5.7 Problems#Problem 7\]\].
- [Structure] File starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3448

Note: [[5.5.3 Generalized Smarr formula|5.5.3 Generalized Smarr formula]]  
Priority: medium · Graph: no · Manim: no

Correct derivation (I re-derived each line of the Smarr chain), but the key antisymmetry step is skipped and there is no concrete check.

- [Simplify] In the third line of the Smarr chain, insert the step $\nabla^\alpha\xi^\beta\,\mathrm dS_{\alpha\beta}=\nabla^\alpha\xi^\beta(\xi_\alpha N_\beta-\xi_\beta N_\alpha)\mathrm dS=2\xi^{\beta;\alpha}\xi_\alpha N_\beta\,\mathrm dS$, which uses antisymmetry of $\nabla^\alpha\xi^\beta$ (Killing equation).
- [Example] Add a Kerr check: with $\Omega_H=a/(r_+^2+a^2)$, $\kappa=(r_+-M)/(r_+^2+a^2)$, $A=4\pi(r_+^2+a^2)$, $J=aM$, show $2\Omega_HJ+\kappa A/4\pi=M$; for $a=0$ this reduces to $M=\kappa A/4\pi$ with $\kappa=1/4M$, $A=16\pi M^2$.
- [Intuition] Explain the signs in (5.102)–(5.103): for dust at rest $(T_{\alpha\beta}-\tfrac12Tg_{\alpha\beta})n^\alpha t^\beta=\tfrac12\rho$ (Tolman mass density), and $J$ carries a minus sign because $T_{\alpha\beta}n^\alpha\phi^\beta$ is minus the angular-momentum density.
- [Structure] Fig. 5.17 labels null infinity as "ℐ₊" and "ℐ₋" (subscripts) while the text uses $\mathscr I^\pm$ (superscripts); make them consistent.
- [Structure] File starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3449

Note: [[5.5.4 First law|5.5.4 First law]]  
Priority: medium · Graph: yes · Manim: no

Correct and complete derivation (checked term by term), but it hides the surprising teleological behaviour of the horizon expansion that the integration relies on.

- [Graph] Plot an example solution of the linearised equation $\mathrm d\theta/\mathrm dv=\kappa\theta-8\pi\mathcal F(v)$ with a Gaussian flux $\mathcal F(v)=\mathcal F_0e^{-v^2/2w^2}$ and the boundary condition $\theta(+\infty)=0$, i.e. $\theta(v)=8\pi\int_v^\infty e^{-\kappa(v'-v)}\mathcal F(v')\,\mathrm dv'$, for $\kappa w=0.5$ and $2$ on $v/w\in[-6,6]$, together with $\mathcal F$; it shows the horizon expanding before matter arrives.
- [Intuition] Add a sentence explaining why $\theta(v=+\infty)=0$ (and not $\theta(-\infty)=0$ alone) is the physical boundary condition: the event horizon is defined by the future, so the solution growing like $e^{\kappa v}$ must be excluded.
- [Simplify] Note that the first-order treatment of $\mathrm d(\mathrm dS)/\mathrm dv$ inside $\oint\theta\,\mathrm dS$ uses the unperturbed area element, consistent with keeping $\mathrm d\Sigma_\alpha$ unperturbed.
- [Example] Close with a numeric illustration: dropping mass $\delta M$ with zero angular momentum into a Schwarzschild hole gives $\delta A=32\pi M\,\delta M$, matching $A=16\pi M^2$.
- [Structure] File starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3450

Note: [[5.5.5 Second law|5.5.5 Second law]]  
Priority: low · Graph: no · Manim: no

Clear heuristic proof of the area theorem; brief but adequate.

- [Simplify] Quote the focusing statement explicitly: if $\theta(\lambda_0)=\theta_0<0$ then $\theta\to-\infty$ within affine parameter $\lambda-\lambda_0\le2/|\theta_0|$ (from $\mathrm d\theta/\mathrm d\lambda\le-\tfrac12\theta^2$); this makes the contradiction concrete.
- [Example] Add the classic application: two Schwarzschild holes of mass $M$ merging can radiate at most $2M-\sqrt2M\approx0.29\,(2M)$ of their mass, since $A_f\ge2\cdot16\pi M^2$.
- [Links] Link "Section 2.4.5" to \[\[2.4.5 Focusing theorem\]\] and add a forward link to \[\[5.5.7 Black-hole thermodynamics\]\] where Hawking radiation violates the null energy condition.
- [Structure] File starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3451

Note: [[5.5.6 Third law|5.5.6 Third law]]  
Priority: medium · Graph: no · Manim: no

Good illustrative argument with correct algebra in Eq. (5.115), but the energy-condition statement is slightly misstated and the logic of the contradiction is compressed.

- [Correctness] The weak energy condition is $T_{\alpha\beta}u^\alpha u^\beta\ge0$, not "$>0$"; correspondingly it requires $\rho\ge0$, so Eq. (5.115) should read $\ge0$ and the conclusion becomes $m(v_0)\dot\Delta(v_0)\ge0$; note that the argument is heuristic (Israel's theorem needs more than this).
- [Simplify] Show the substitution leading to (5.115): $\rho(r_+)=\frac{1}{4\pi r_+^2}(\dot m-q\dot q/r_+)$ and $r_+=m+\sqrt{m^2-q^2}$, so $4\pi r_+^3\rho=r_+\dot m-q\dot q$; and at $v_0$ ($m=q>0$) it reduces to $m(\dot m-\dot q)$.
- [Intuition] Explain why $\rho$ at the apparent horizon is the relevant quantity: adding charge to a nearly extremal hole requires so much electrostatic energy that the mass grows faster than the charge, the physical content of the third law.
- [Structure] Note that the argument assumes $q>0$; for $q<0$ replace $q$ by $|q|$ in $\Delta=m-|q|$.
- [Structure] File starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3452

Note: [[5.5.7 Black-hole thermodynamics|5.5.7 Black-hole thermodynamics]]  
Priority: medium · Graph: yes · Manim: no

Correct and readable, but purely qualitative; SI numbers would make the tiny Hawking temperature and huge entropy concrete.

- [Example] Restore constants, $T_H=\hbar c^3/(8\pi GMk_B)$ and $S=k_Bc^3A/(4G\hbar)$, and give solar-mass values: $T_H\approx6.2\times10^{-8}\,\mathrm K$ (far below the 2.7 K CMB) and $S/k_B\approx1.0\times10^{77}$.
- [Graph] Log–log plot of $T_H$ (K) versus $M/M_\odot$ on $[10^{-19},10^{10}]$ with a horizontal line at the CMB temperature 2.725 K, marking where holes currently absorb more than they emit (crossing near $M\approx4.5\times10^{22}\,\mathrm{kg}\approx2\times10^{-8}M_\odot$).
- [Intuition] Explain the negative heat capacity: $T\propto1/M$, so a radiating hole heats up as it loses mass, which is why evaporation runs away and why the generalized second law is needed.
- [Links] Link the zeroth, first and second laws in the text to \[\[5.5.2 Zeroth law\]\], \[\[5.5.4 First law\]\] and \[\[5.5.5 Second law\]\].
- [Structure] File starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3453

Note: [[5.6 Bibliographical notes|5.6 Bibliographical notes]]  
Priority: low · Graph: no · Manim: no

Accurate transcription of the bibliographic notes; the "recent" developments it cites date from 2001–2002.

- [Structure] Add an editorial note that the isolated/dynamical-horizon programme is reviewed in Ashtekar and Krishnan, Living Rev. Relativ. 7 (2004) 10, and turn the section references (5.1.7, 5.2.4, 5.3.10, 5.4.1–5.4.3, 5.5) into wiki links; save without the UTF-8 BOM.

### N3454

Note: [[5.7 Problems|5.7 Problems]]  
Priority: low · Graph: yes · Manim: no

Accurate problem set (I verified the Problem 2 ray solution, the Problem 8 basis vectors, the Kerr–Newman $M_H$, $J_H$ Smarr checks and the Hawking–Hartle formula numerically), with a few transcription typos.

- [Correctness] Problem 7(a) enumerates the properties as "(i) … (ii) … (iii) … and (vi)"; the last item should be (iv).
- [Correctness] Problem 3(b) calls $l_\alpha=-\partial_\alpha v$ "the four-velocity"; it is a null tangent vector, not a (timelike, normalized) four-velocity.
- [Structure] Fix the typos "This relations holds" (7d) and "Find an expression for $A_\alpha$ is this coordinate system" (8c).
- [Graph] Optional solution aid for Problem 2(a): plot the outgoing rays $r=c\lambda e^{-\lambda}$, $v=4c(1+\lambda)e^{-\lambda}$ for $c\in\{\pm0.5,\pm1,\pm2\}$, the special ray $v=4r$, and the apparent horizon $r=2m(v)=v/8$ in the $(r,v)$ plane for $0<v<v_0$; place it in a collapsed callout so it does not spoil the exercise.
- [Structure] File starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3455

Note: [[02 Physics/05 Relativity and Gravitation/03 Relativists Toolkit/99 Back matter/Index|Index]]  
Priority: low · Graph: no · Manim: no

Faithful index transcription with printed page numbers only.

- [Links] Optional: link the main entries (e.g. "Black-hole mechanics, first law" to \[\[5.5.4 First law\]\]) so the index is navigable in the vault; also save without the UTF-8 BOM.

### N3456

Note: [[References|References]]  
Priority: low · Graph: no · Manim: no

Faithful bibliography transcription with section back-references.

- [Links] Turn the bracketed section references into wiki links and note that the Living Reviews URL (livingreviews.org/lrr-2000-5) now resolves via link.springer.com; save without the UTF-8 BOM.

### N3457

Note: [[Relativists Toolkit - Contents|Relativists Toolkit - Contents]]  
Priority: low · Graph: no · Manim: no

Complete contents hub; all wiki links resolve.

- [Structure] No change needed.
