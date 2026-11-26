---
title: "Note Improvement Tracker – 02 Physics/01 Classical Mechanics/19 Supplementary Notes"
---

> [!TLDR]
> This note tracks the review of the 41 notes in `02 Physics/01 Classical Mechanics/19 Supplementary Notes`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 41 possible errors or notation conflicts. 41 of them are verified (40 fixed, 1 partly); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N1107|N1107]] Brachistochrone vs Geodesic: Make the geodesic definition precise: a geodesic is a locally length-stationary (locally shortest) curve. A great circle covering more than half a circle is a geodesic but not the shortest path. **Fixed:** Now: curve with stationary length, locally shortest; long great-circle arc (> half circle) is a geodesic but not shortest
- [[#N1108|N1108]] Coordinate Systems and Configuration Space: Coordinates are scalars, not "time-dependent vectors along each axis". Rephrase as "the configuration is the point $(x,y,z)$; its motion is a curve $q(t)$ in configuration space". **Fixed:** Now scalar position components; configuration is the point (x,y,z), motion is a curve (x(t),y(t),z(t)) in configuration space
- [[#N1109|N1109]] Dynamic Systems: "Consider the motion of particles between boundary conditions, e.g. $t_1$ and $t_2$" conflates instants with conditions; say "between the instants $t_1$ and $t_2$, with the state fixed at $t_1$ (initial-value problem) or the positions fixed at both ends (boundary-value problem, as in the action principle)". **Fixed:** Now: motion between instants t1 and t2, with state fixed at t1 (initial-value problem) or positions fixed at both ends (boundary-value problem, action principle)
- [[#N1113|N1113]] Material Properties: Under Poisson's ratio, "Beschreibt die Längen-Verformung … $\epsilon_x=\Delta l_x/l_x$" is the definition of strain, not of $\nu$. Define $\nu=-\epsilon_{\mathrm{trans}}/\epsilon_{\mathrm{axial}}$ with the load direction stated explicitly; the label "$\nu_x=-\epsilon_x/\epsilon_y$" hides which axis carries the load. **Fixed:** First bullet now describes ν as transverse/axial strain ratio (strain formula kept as auxiliary); ν = −ε_quer/ε_axial = −ε_y/ε_x for load along x (kept in German, the note's language)
- [[#N1113|N1113]] Material Properties: The "allgemeines Hookesches Gesetz" $\epsilon_x=\sigma_x/E_x-\nu\sigma_y/E_y-\nu\sigma_z/E_z$ mixes direction-dependent $E_i$ with a single $\nu$. Either give the isotropic form $\epsilon_x=[\sigma_x-\nu(\sigma_y+\sigma_z)]/E$, or the orthotropic form with $\nu_{yx},\nu_{zx}$. Also write $\nu\in[-1,0.5]$ (not $\subset$) and say this range holds for isotropic materials. **Fixed:** Replaced with isotropic form ε_x=[σ_x−ν(σ_y+σ_z)]/E; range written ν ∈ [−1, 0.5] for isotropic materials
- [[#N1113|N1113]] Material Properties: "Höhere Elastizität in Elastomeren; gering in Keramik" sits under Young's modulus and reads as "$E$ is high for elastomers", which is backwards: elastomers have very low $E$ (~MPa) and ceramics very high $E$ (~100–400 GPa). Say so explicitly. **Fixed:** Now states elastomers have very small E (about 1–100 MPa) and ceramics very large E (about 100–400 GPa)
- [[#N1114|N1114]] Momentum: The step $\frac{d}{dt}\vec p=m\frac{d}{dt}\vec v$ silently assumes constant $m$; state it, and note that $\vec F=\dot{\vec p}$ is the more general statement used for systems of particles. **Fixed:** Added "and the mass m is constant"; added sentence that F = dp/dt is the more general statement, also for systems of particles
- [[#N1115|N1115]] Phase Space: "The state of a system of $n$ degrees of freedom is described by a volume in $2n$-dimensional phase space" contradicts the note's own "each point in phase space describes the state". A state is a point; a region describes an ensemble or uncertain initial conditions. Fix this, and the 1D "patch" paragraph, accordingly. **Fixed:** General case now says a state is a point and a region describes an ensemble or uncertain initial conditions; 1D paragraph now calls the whole x–p_x plane the phase plane, state is a point, patch is the range of possible states
- [[#N1115|N1115]] Phase Space: Typo "$p_x$ and $x_x$" should read "$p_x$ and $x$". **Fixed:** Changed to x
- [[#N1121|N1121]] Newton’s 2nd Law: "When the net force is zero, the system is in equilibrium" holds only for translational equilibrium of the center of mass, and the body may still move at constant velocity. Say "translational equilibrium (constant velocity)", and note that a net torque must also vanish for full equilibrium. **Fixed:** Replaced the last line: translational equilibrium (CM at rest or constant velocity); full equilibrium of an extended body also needs zero net torque.
- [[#N1121|N1121]] Newton’s 2nd Law: $F=\frac{d}{dt}(mv)$ for variable mass applies to closed systems; for a body gaining or losing mass (a rocket) you must account for the momentum flux. Add this caveat or link to the rocket equation. **Fixed:** Added one callout line: for a body that gains or loses mass, include the momentum of the added or ejected mass, with a link to \[\[05.08 Variable-Mass Systems and the Rocket Equation\]\].
- [[#N1122|N1122]] Newton’s 3rd Law: "The third law tells us to ignore forces that do not conserve total momentum" is wrong as stated. Rewrite as "the third law implies that internal forces cancel in pairs, so the total momentum of an isolated system is conserved", and link to Conservation of Linear Momentum. **Fixed:** Rewrote the line: internal forces cancel in pairs, so the total momentum of an isolated system is conserved; linked \[\[Conservation of Linear Momentum\]\].
- [[#N1123|N1123]] Verlet Integration: The final result "$r_x(t)=r_x(0)+\dot r_x(0)t+\tfrac12\ddot r_x t^2$" is the exact solution for constant force, not "the Verlet Integration Algorithm". Either retitle the note "Motion under a constant force", or add the actual scheme $x_{n+1}=2x_n-x_{n-1}+a(x_n)\Delta t^2$ (or velocity Verlet). Derive it by adding the Taylor expansions of $x(t\pm\Delta t)$ and show the $O(\Delta t^4)$ local error. **Fixed:** Reworded: the result is the exact constant-force solution; added the Verlet step x_{n+1}=2x_n-x_{n-1}+a(x_n)Δt²+O(Δt⁴) from the summed Taylor expansions, and noted that it reproduces the constant-force result exactly (no full derivation section added).
- [[#N1125|N1125]] N-body Problem: "$\vec F_{ji}=-\kappa_{ij}(\vec r_i-\vec r_j)/\lvert\vec r_i-\vec r_j\rvert^n$" is, by the vault's convention (System of Particles: $F_{ij}$ = force on $i$ due to $j$), the force on $i$ due to $j$, i.e. $\vec F_{ij}$. Fix the index, and state that $\kappa>0$ means attraction ($\kappa=\mechanical{G}m_im_j$, $n=3$ for gravity). **Fixed:** Changed F_ji to F_ij, added a sentence: F_ij is the force on i due to j, κ>0 means attraction, and gravity has κ=G m_i m_j, n=3.
- [[#N1125|N1125]] N-body Problem: The Principia link goes to https://en.wikipedia.org/wiki/Principia_Mathematica, which is Whitehead–Russell's work; Newton's book is "Philosophiæ Naturalis Principia Mathematica". Also, the "Jacobi integral" link concerns the restricted three-body problem; the two further reductions are Jacobi's elimination of the nodes. The non-existence of further algebraic integrals is due to Bruns (1887), extended by Poincaré. **Fixed:** Principia link now goes to Philosophiæ Naturalis Principia Mathematica; Jacobi line now says the elimination of the nodes (link to Jacobi's biography); non-existence of further integrals is now attributed to Bruns (1887, algebraic) and extended by Poincaré.
- [[#N1127|N1127]] System of Particles: "For $N$ identical particles with coordinates $\vec r_i$" contradicts the general $m_i$ in $\vec R=\sum m_i\vec r_i/M$; drop "identical". Also, the equation $\sum_i\sum_j\vec F_{ij}+\sum_i\vec F_i^{(e)}=\vec F^{(e)}_{\mathrm{total}}$ is written before the third law is used to cancel the double sum; reorder the two steps. **Fixed:** Removed "identical"; the summed equation now equals Σṗ_i, and after the third-law cancellation a new line gives ΣF_i^(e) = F_total^(e) = Σṗ_i (dropped the premature "Using the third law" wording).
- [[#N1127|N1127]] System of Particles: The closing claim "There is no other way in Newtonian mechanics to find conservation laws than brute calculations" is an overstatement; soften it to "Newtonian mechanics has no systematic procedure linking symmetries to conservation laws; Lagrangian mechanics (Noether) provides one". **Fixed:** Softened the callout: Newtonian mechanics has no systematic symmetry-to-conservation procedure; Lagrangian mechanics (Noether's theorem) provides one.
- [[#N1128|N1128]] Conservation Laws: "Violated if neutrinos are Majorana particles (very likely)" overstates the evidence; Majorana versus Dirac is experimentally open (neutrinoless double-beta decay is unobserved). Change it to "if neutrinos are Majorana particles (under active experimental test)". **Fixed:** Replaced "(very likely)" with "(not yet known; under active experimental test, e.g. neutrinoless double-beta decay)".
- [[#N1129|N1129]] Conservation of Angular Momentum: "There is no fundamental distinction between linear and angular momentum" is misleading: they are distinct conserved quantities tied to different symmetries (translations versus rotations), although both belong to the Euclidean/Poincaré algebra. Rephrase it, or link to the Hamiltonian formulation of Angular Momentum, which makes the intended point. **Fixed:** Rephrased: they are distinct conserved quantities (translation vs rotation symmetry) that are connected through one symmetry group; linked \[\[Hamiltonian formulation of Angular Momentum\]\].
- [[#N1130|N1130]] Conservation of Energy: "$T$ (for the latin *travail*; work)" is wrong: *travail* is French, not Latin. The claim that $V$ comes from voltage is unsupported; delete it or attribute it. **Partly:** Correct that travail is French, fixed it and hedged it as "often said to come from"; the note only gave voltage as an example of a potential, not as an etymology, but I removed "(like voltage)" to avoid that reading.
- [[#N1131|N1131]] Conservation of Linear Momentum: "$\vec F_{ij}=-\vec F_{ij}\ \forall i,j$" should be $\vec F_{ij}=-\vec F_{ji}$; as written it forces every force to zero. The LaTeX also contains invisible zero-width characters. **Fixed:** Rewrote the equation as \vec{F}_{ij} = -\vec{F}_{ji} \quad \forall i,j with ASCII minus and no U+200B characters.
- [[#N1131|N1131]] Conservation of Linear Momentum: "$\mathbf F=\partial\mathbf P/\partial t$" and "$F=\frac{\partial}{\partial t}p$" should use the total derivative $d/dt$; momentum along a trajectory is a function of $t$ alone. **Fixed:** Changed both equations to F = dP/dt and F = d/dt p.
- [[#N1132|N1132]] Hamiltonian formulation of Angular Momentum: "$(\boldsymbol\theta,\mathbf L)$" are not canonical pairs: the note's own bracket $\{L_i,L_j\}=\epsilon_{ijk}L_k\neq0$ shows that the components of $\mathbf L$ cannot be canonical momenta. Use Euler angles with their conjugate momenta $(p_\phi,p_\theta,p_\psi)$, or present $\mathbf L$ as non-canonical (Lie–Poisson) variables. **Fixed:** Added a note callout: only (R, P) is canonical; L components have {L_i,L_j}≠0 and are Lie–Poisson variables; canonical orientation pairs are Euler angles with p_φ, p_θ, p_ψ.
- [[#N1132|N1132]] Hamiltonian formulation of Angular Momentum: $\{L_i,P_j\}=\epsilon_{ijk}P_k$ holds for orbital or total angular momentum $\mathbf L=\mathbf R\times\mathbf P$, but in $H$ the term $\tfrac12\mathbf L^T\mathbf I^{-1}\mathbf L$ treats $\mathbf L$ as spin about the center of mass, which has $\{L^{\mathrm{spin}}_i,P_j\}=0$. State which $\mathbf L$ is meant, e.g. $\mathbf J=\mathbf R\times\mathbf P+\mathbf S$. **Fixed:** Added a note callout: the mixed bracket holds for J = R×P + S; the rotational term in H uses the spin S, with {S_i,P_j}=0.
- [[#N1133|N1133]] Lagrangian formulation of Angular Momentum: Writing "$\mathbf L=\partial L/\partial\boldsymbol\omega$" uses $L$ for both the Lagrangian and angular momentum in one equation. Rename the Lagrangian $\mathcal L$, and note that $\boldsymbol\omega$ is not the time derivative of any coordinate (it is a quasi-velocity), so the Euler–Lagrange equations in $\boldsymbol\omega$ need Euler angles or the Euler–Poincaré form. **Fixed:** Renamed the Lagrangian to \mathcal{L} in its three uses; added a note callout that ω is a quasi-velocity, so the equations of motion need Euler angles or the Euler–Poincaré form.
- [[#N1134|N1134]] Atwood machine: The constraint "$l=x_1+x_2\rightarrow\dot x_2=\dot x_1$" should give $\dot x_2=-\dot x_1$ (as used later). **Fixed:** Changed the constraint line to \dot{x}_2 = -\dot{x}_1.
- [[#N1134|N1134]] Atwood machine: With $V=m_igx_i$ (heights), $V=(m_1-m_2)gx_1+m_2gl$, so the "Rearranging" step "$-(m_2-m_1)gx_1$" should be $-(m_1-m_2)gx_1$. The result should then be $\ddot x_1=(m_2-m_1)g/(m_1+m_2)$; the note's $(m_1-m_2)g/(m_1+m_2)$ would make the heavier mass rise. The same error carries into the pulley-inertia result, which should read $\ddot x_1=(m_2-m_1)g/(m_1+m_2+I/r^2)$. **Fixed:** The rearranged L now has -(m_1-m_2)g x_1 (both cases), ∂L/∂x_1 = -(m_1-m_2)g, the EL equations have +(m_1-m_2)g, and the results are ẍ1=(m_2-m_1)g/(m_1+m_2) and ẍ1=(m_2-m_1)g/(m_1+m_2+I/r²).
- [[#N1134|N1134]] Atwood machine: Mislabels: "Lagrange equation: $L=T-V$" is the Lagrangian, not the equation, and "$\partial L/\partial\dot x_1$ (acceleration of $m_1$)" is the generalized momentum, not an acceleration. **Fixed:** Changed "Lagrange equation:" to "Lagrangian:" and "(acceleration of m_1)" to "(generalized momentum of m_1)".
- [[#N1135|N1135]] D'Alembert's principle: "A body is in dynamic equilibrium when the sum of the external forces … is zero if you include a fictitious inertial force ($F=ma$)" is muddled: the inertial force is $-m\vec a$, not $F=ma$. The principle proper is $\sum_i(\vec F_i^{(a)}-m_i\vec a_i)\cdot\delta\vec r_i=0$, with applied forces only, valid because ideal constraint forces do no virtual work. Write it this way, consistent with the Glossary entry. **Fixed:** Rewrote first sentence: inertial force F_I = -m a, added sum_i (F_i^(a) - m_i a_i)·δr_i = 0 and the statement that ideal constraint forces do no virtual work (no Glossary entry exists to align with)
- [[#N1136|N1136]] Double pendulum: $\partial L/\partial\dot\theta_1$ should be $(m_1+m_2)l_1^2\dot\theta_1+m_2l_1l_2\dot\theta_2\cos(\theta_1-\theta_2)$, not "$m_1l_1^2\dot\theta_1+m_2l_1\dot\theta_1$". $\partial L/\partial\theta_1$ should be $-m_2l_1l_2\dot\theta_1\dot\theta_2\sin(\theta_1-\theta_2)-(m_1+m_2)gl_1\sin\theta_1$, not "$m_2l_1l_2\dot\theta_2^2\sin(\theta_1-\theta_2)-\dots$". **Fixed:** Re-derived from L; set ∂L/∂θ̇1 = (m1+m2)l1²θ̇1 + m2 l1 l2 θ̇2 cos(θ1-θ2) and ∂L/∂θ1 = -m2 l1 l2 θ̇1θ̇2 sin(θ1-θ2) - (m1+m2) g l1 sinθ1; also corrected the dependent d/dt(∂L/∂θ̇1) entry
- [[#N1136|N1136]] Double pendulum: $\partial L/\partial\theta_2$ should be $+m_2l_1l_2\dot\theta_1\dot\theta_2\sin(\theta_1-\theta_2)-m_2gl_2\sin\theta_2$. $\frac{d}{dt}\partial L/\partial\dot\theta_2$ is missing $m_2l_1l_2\ddot\theta_1\cos(\theta_1-\theta_2)$ and should have $-m_2l_1l_2\dot\theta_1(\dot\theta_1-\dot\theta_2)\sin(\theta_1-\theta_2)$. The third row header reads $\partial L/\partial\dot\theta_1$ for both columns. **Fixed:** Set ∂L/∂θ2 = +m2 l1 l2 θ̇1θ̇2 sin(θ1-θ2) - m2 g l2 sinθ2; d/dt term now includes m2 l1 l2 θ̈1 cos(θ1-θ2) - m2 l1 l2 θ̇1(θ̇1-θ̇2) sin(θ1-θ2); row header changed to ∂L/∂θ̇_i
- [[#N1140|N1140]] Principle of Least Action: The "Examples for minimizing action" are not action examples: the beach-vs-water runner and refraction illustrate Fermat's principle of least time, and the catenary minimizes static potential energy. Present them as analogous variational principles, not as instances of $\delta S=0$. State that the action is stationary, not necessarily minimal. **Fixed:** Relabelled the list as analogous variational principles (Fermat least time, static potential energy for catenary) and added that the action is stationary, not necessarily minimal (file is CRLF; line endings preserved)
- [[#N1140|N1140]] Principle of Least Action: The claim that in physics the time axis of a plot is usually vertical is true only for spacetime diagrams. Remove it, or restrict it to that context. **Fixed:** Restricted the note to spacetime diagrams in physics
- [[#N1141|N1141]] Hamiltonian Equation: $H=T+V$ holds only when $T$ is quadratic in the velocities and the constraints and potential are time-independent. Define $H=\sum_kp_k\dot q_k-L$ and state $H=T+V$ as the special case. **Fixed:** Added H = sum_k p_k q̇_k - L as definition and stated H = T + V for T quadratic in velocities with time-independent constraints and potential
- [[#N1143|N1143]] Action: The EM field action "$S=-\frac{1}{4\mu_0}\int d^4x\,F_{\mu\nu}F^{\mu\nu}-\int d^4x\,j_\mu A^\mu$" has units of J·m if $d^4x=d(ct)\,d^3x$, which the Einstein–Hilbert row's $c^3/(16\pi G)$ prefactor implies. Add a factor $1/c$ (or state $d^4x=dt\,d^3x$) so that $[S]=$ J·s. **Fixed:** Added 1/c to both terms and the note d^4x = d(ct) d^3x so [S] = J s (consistent with Einstein–Hilbert row)
- [[#N1143|N1143]] Action: In the relativistic-particle row, "$ds$ is the proper-time element" should read "$ds=c\,d\tau$ is the line element ($d\tau$ the proper time)". **Fixed:** Changed to "ds = c dτ is the line element (dτ the proper time)"
- [[#N1144|N1144]] Energy: The "Work–energy theorem" row writes "$\Delta E = W = \int \mathbf{F}\cdot d\mathbf{x}$" and says it "Relates net work to change in mechanical energy"; net work equals the change in kinetic energy, so write $\Delta K = W_{\mathrm{net}}$ (mechanical energy changes only by non-conservative work). **Fixed:** Formula now ΔK = W_net = ∫F_net·dx, quantities and note updated (mechanical energy changes only by non-conservative work)
- [[#N1145|N1145]] Impulse: The "Radiation pressure impulse" row states "$\Delta p/A = \dfrac{2\,\mathcal{E}_{\text{inc}}}{c\,\Delta t\,A}$"; the right side is a pressure (force per area), not momentum per area; it should read $\Delta p/A = 2\mathcal E_{\text{inc}}/(cA)$, i.e. $J/A = 2\mathcal E_{\text{inc}}/(cA)$ (the current $J/A = 2\mathcal E_{\text{inc}}/c$ is also missing the $1/A$). **Fixed:** Formula now J/A = Δp/A = 2E_inc/(cA)
- [[#N1145|N1145]] Impulse: The "Quantum kick operator" $\hat U = \exp(-\tfrac{i}{\hbar}\Delta\mathbf p\cdot\hat{\mathbf x})$ shifts momentum by $-\Delta\mathbf p$; a kick of $+\Delta\mathbf p$ needs $\hat U = \exp(+\tfrac{i}{\hbar}\Delta\mathbf p\cdot\hat{\mathbf x})$ since $\hat U^\dagger\hat{\mathbf p}\hat U = \hat{\mathbf p}+\Delta\mathbf p$. **Fixed:** Changed to exp(+i Δp·x̂/ħ), since U†p̂U = p̂ + Δp
- [[#N1146|N1146]] Momentum: The "Radiation pressure (ideal reflector)" row writes "$p_{\perp} = \dfrac{2I}{c} \Delta t /A$", which is dimensionally wrong; the pressure is $2I/c$ and the momentum transferred is $\Delta\mathbf p = (2IA\,\Delta t/c)\,\hat{\mathbf n} = (2\mathcal E_{\text{inc}}/c)\,\hat{\mathbf n}$. **Fixed:** Now P_rad = 2I/c ⇒ Δp = (2IAΔt/c) n̂ = (2E_inc/c) n̂ (renamed pressure symbol to P_rad to avoid clash with momentum p)
- [[#N1146|N1146]] Momentum: The row "Fluid momentum equation (Euler form)" includes the viscous stress term $\nabla\cdot\boldsymbol\tau$; with that term it is the Cauchy momentum (Navier–Stokes) equation, while the Euler equation is the inviscid case $\boldsymbol\tau=0$; relabel or drop the term. **Fixed:** Relabelled to "Cauchy form" and added note that the Euler equation is the inviscid case τ = 0

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N1106 | [[Acceleration\|01 Basic Concepts/Acceleration]] | Analyzed | medium | yes | yes | [[#N1106\|View]] |
| N1107 | [[Brachistochrone vs Geodesic\|01 Basic Concepts/Brachistochrone vs Geodesic]] | Analyzed | high | yes | yes | [[#N1107\|View]] |
| N1108 | [[Coordinate Systems and Configuration Space\|01 Basic Concepts/Coordinate Systems and Configuration Space]] | Analyzed | medium | yes | no | [[#N1108\|View]] |
| N1109 | [[Dynamic Systems\|01 Basic Concepts/Dynamic Systems]] | Analyzed | medium | no | no | [[#N1109\|View]] |
| N1110 | [[Equations of Motion\|01 Basic Concepts/Equations of Motion]] | Analyzed | medium | yes | no | [[#N1110\|View]] |
| N1111 | [[Inertia and Mass\|01 Basic Concepts/Inertia and Mass]] | Analyzed | medium | no | no | [[#N1111\|View]] |
| N1112 | [[Inertial reference frame\|01 Basic Concepts/Inertial reference frame]] | Analyzed | high | no | yes | [[#N1112\|View]] |
| N1113 | [[Material Properties\|01 Basic Concepts/Material Properties]] | Analyzed | high | yes | no | [[#N1113\|View]] |
| N1114 | [[02 Physics/01 Classical Mechanics/19 Supplementary Notes/01 Basic Concepts/Momentum\|01 Basic Concepts/Momentum]] | Analyzed | medium | no | no | [[#N1114\|View]] |
| N1115 | [[Phase Space\|01 Basic Concepts/Phase Space]] | Analyzed | high | yes | yes | [[#N1115\|View]] |
| N1116 | [[Position\|01 Basic Concepts/Position]] | Analyzed | low | no | no | [[#N1116\|View]] |
| N1117 | [[Trajectory\|01 Basic Concepts/Trajectory]] | Analyzed | low | yes | no | [[#N1117\|View]] |
| N1118 | [[Velocity and Speed\|01 Basic Concepts/Velocity and Speed]] | Analyzed | low | yes | no | [[#N1118\|View]] |
| N1119 | [[Newton's 4th Law\|02 Newtonian Mechanics/01 Newton's Laws/Newton's 4th Law]] | Analyzed | medium | yes | no | [[#N1119\|View]] |
| N1120 | [[Newton’s 1st Law\|02 Newtonian Mechanics/01 Newton's Laws/Newton’s 1st Law]] | Analyzed | medium | no | no | [[#N1120\|View]] |
| N1121 | [[Newton’s 2nd Law\|02 Newtonian Mechanics/01 Newton's Laws/Newton’s 2nd Law]] | Analyzed | medium | no | no | [[#N1121\|View]] |
| N1122 | [[Newton’s 3rd Law\|02 Newtonian Mechanics/01 Newton's Laws/Newton’s 3rd Law]] | Analyzed | medium | no | no | [[#N1122\|View]] |
| N1123 | [[Verlet Integration\|02 Newtonian Mechanics/01 Newton's Laws/Verlet Integration]] | Analyzed | high | yes | yes | [[#N1123\|View]] |
| N1124 | [[Elementary Forces\|02 Newtonian Mechanics/Elementary Forces]] | Analyzed | low | no | no | [[#N1124\|View]] |
| N1125 | [[N-body Problem\|02 Newtonian Mechanics/N-body Problem]] | Analyzed | high | yes | yes | [[#N1125\|View]] |
| N1126 | [[Newton's Laws\|02 Newtonian Mechanics/Newton's Laws]] | Analyzed | low | no | no | [[#N1126\|View]] |
| N1127 | [[System of Particles\|02 Newtonian Mechanics/System of Particles]] | Analyzed | medium | yes | yes | [[#N1127\|View]] |
| N1128 | [[Conservation Laws\|03 Conservation Laws/Conservation Laws]] | Analyzed | low | no | no | [[#N1128\|View]] |
| N1129 | [[Conservation of Angular Momentum\|03 Conservation Laws/Conservation of Angular Momentum]] | Analyzed | high | yes | yes | [[#N1129\|View]] |
| N1130 | [[Conservation of Energy\|03 Conservation Laws/Conservation of Energy]] | Analyzed | medium | yes | yes | [[#N1130\|View]] |
| N1131 | [[Conservation of Linear Momentum\|03 Conservation Laws/Conservation of Linear Momentum]] | Analyzed | high | no | yes | [[#N1131\|View]] |
| N1132 | [[Hamiltonian formulation of Angular Momentum\|04 Angular Momentum/Hamiltonian formulation of Angular Momentum]] | Analyzed | high | no | yes | [[#N1132\|View]] |
| N1133 | [[Lagrangian formulation of Angular Momentum\|04 Angular Momentum/Lagrangian formulation of Angular Momentum]] | Analyzed | medium | no | yes | [[#N1133\|View]] |
| N1134 | [[Atwood machine\|05 Lagrangian Mechanics/Atwood machine]] | Analyzed | high | yes | yes | [[#N1134\|View]] |
| N1135 | [[D'Alembert's principle\|05 Lagrangian Mechanics/D'Alembert's principle]] | Analyzed | high | no | no | [[#N1135\|View]] |
| N1136 | [[Double pendulum\|05 Lagrangian Mechanics/Double pendulum]] | Analyzed | high | yes | yes | [[#N1136\|View]] |
| N1137 | [[Euler-Lagrange equation\|05 Lagrangian Mechanics/Euler-Lagrange equation]] | Analyzed | medium | no | no | [[#N1137\|View]] |
| N1138 | [[Lagrange Equation\|05 Lagrangian Mechanics/Lagrange Equation]] | Analyzed | medium | no | no | [[#N1138\|View]] |
| N1139 | [[Noethers Theorem\|05 Lagrangian Mechanics/Noethers Theorem]] | Analyzed | medium | no | no | [[#N1139\|View]] |
| N1140 | [[Principle of Least Action\|05 Lagrangian Mechanics/Principle of Least Action]] | Analyzed | high | yes | yes | [[#N1140\|View]] |
| N1141 | [[Hamiltonian Equation\|06 Hamiltonian Mechanics/Hamiltonian Equation]] | Analyzed | high | yes | no | [[#N1141\|View]] |
| N1142 | [[Legendre transformation\|06 Hamiltonian Mechanics/Legendre transformation]] | Analyzed | high | yes | yes | [[#N1142\|View]] |
| N1143 | [[Action\|07 Glossary/Action]] | Analyzed | low | no | no | [[#N1143\|View]] |
| N1144 | [[Energy\|07 Glossary/Energy]] | Analyzed | low | no | no | [[#N1144\|View]] |
| N1145 | [[Impulse\|07 Glossary/Impulse]] | Analyzed | low | no | no | [[#N1145\|View]] |
| N1146 | [[02 Physics/01 Classical Mechanics/19 Supplementary Notes/07 Glossary/Momentum\|07 Glossary/Momentum]] | Analyzed | low | no | no | [[#N1146\|View]] |

## Suggestions

### N1106

Note: [[Acceleration|Acceleration]]  
Priority: medium · Graph: yes · Manim: yes

A correct but very thin stub; it has no frontmatter title or TLDR, no semantic macros, and no formula for the circular-motion case it highlights.

- [Structure] Add a quoted title, a TLDR, and the vault's \mechanical{} macros; write $\mechanical{\vec a}=d\mechanical{\vec v}/dt=d^2\mechanical{\vec r}/dt^2$ before the Cartesian component form, and note that $(\ddot x,\ddot y,\ddot z)$ holds only in Cartesian coordinates.
- [Intuition] Split acceleration into tangential and normal parts, $\vec a=\dot v\,\hat t+(v^2/\rho)\hat n$, to explain the note's claim that a change of direction alone is an acceleration.
- [Example] Add uniform circular motion: $\vec r=R(\cos\omega t,\sin\omega t)$ gives $\vec a=-\omega^2\vec r$ and $\lvert\vec a\rvert=v^2/R$.
- [Manim] Animate a point on a circle with its velocity vector (tangent) and acceleration vector (pointing to the centre) drawn as arrows that rotate with it, and show the velocity arrows at nearby times placed tail to tail so the change $\Delta\vec v$ is visible pointing inward.

### N1107

Note: [[Brachistochrone vs Geodesic|Brachistochrone vs Geodesic]]  
Priority: high · Graph: yes · Manim: yes

A two-sentence stub that names the curves but does not explain or show either one, although the brachistochrone is one of the clearest variational examples there is.

- [Correctness] Make the geodesic definition precise: a geodesic is a locally length-stationary (locally shortest) curve. A great circle covering more than half a circle is a geodesic but not the shortest path.
- [Example] Give the brachistochrone solution, the cycloid $x=a(\varphi-\sin\varphi)$, $y=-a(1-\cos\varphi)$, from the time functional $T=\int ds/\sqrt{2gy}$. Point out that the cycloid is also the tautochrone.
- [Graph] Plot the straight line, a circular arc and the cycloid between the same two endpoints (e.g. $(0,0)$ to $(\pi,-2)$ with $a=1$), and label each curve with its descent time.
- [Manim] Animate three beads released together on the line, the arc and the cycloid, moving at the frictionless speed $v=\sqrt{2g\lvert y\rvert}$, so the reader sees the cycloid bead arrive first even though its path is longer.
- [Links] Link to Principle of Least Action and Euler-Lagrange equation, since both problems are solved with the same variational method.

### N1108

Note: [[Coordinate Systems and Configuration Space|Coordinate Systems and Configuration Space]]  
Priority: medium · Graph: yes · Manim: no

The idea is right, but the wording is muddled ("positions (time-dependent vectors) along each axis") and there are no examples beyond counting dimensions.

- [Correctness] Coordinates are scalars, not "time-dependent vectors along each axis". Rephrase as "the configuration is the point $(x,y,z)$; its motion is a curve $q(t)$ in configuration space".
- [Example] Add a constrained example showing that configuration space can be curved or lower-dimensional: a planar pendulum has a 1D circle $S^1$, and a double pendulum has a torus $T^2$ with coordinates $(\theta_1,\theta_2)$.
- [Graph] Show a pendulum's physical swing next to its configuration-space path on the $\theta$ axis, or draw a double-pendulum path as a curve on the $(\theta_1,\theta_2)$ square with periodic edges.
- [Structure] Add frontmatter title, TLDR, semantic macros, and capitalize the bullets; fix "an 3-dimensional cartesian" to "a 3-dimensional Cartesian".

### N1109

Note: [[Dynamic Systems|Dynamic Systems]]  
Priority: medium · Graph: no · Manim: no

A vague stub that misuses terms: times $t_1,t_2$ are called "boundary conditions", and determinism is only implied.

- [Correctness] "Consider the motion of particles between boundary conditions, e.g. $t_1$ and $t_2$" conflates instants with conditions; say "between the instants $t_1$ and $t_2$, with the state fixed at $t_1$ (initial-value problem) or the positions fixed at both ends (boundary-value problem, as in the action principle)".
- [Simplify] Define a dynamical system as a state space plus an evolution rule $\dot{\mathbf x}=\mathbf f(\mathbf x,t)$, and give the harmonic oscillator as the example.
- [Structure] Fix the typo "realitivistic", add frontmatter title and TLDR, and link to Equations of Motion and Phase Space.

### N1110

Note: [[Equations of Motion|Equations of Motion]]  
Priority: medium · Graph: yes · Manim: no

The determinism argument is sound but given only in words; the note never writes an equation of motion.

- [Example] Write a concrete equation of motion such as $m\ddot x=-kx$, and show that the two numbers $x(0)$, $\dot x(0)$ fix the solution $x(t)=x_0\cos\omega t+(v_0/\omega)\sin\omega t$. This makes the "$2n$ pieces of information" rule tangible.
- [Intuition] Explain why $2n$: Newton's law is second order in time, so each degree of freedom needs a position and a velocity.
- [Graph] Plot $x(t)$ for the oscillator with the same $x_0$ but three values of $v_0$, showing that position alone does not fix the future.
- [Structure] Use "$n$ degrees of freedom" instead of "a system of $n$ dimensions", and add frontmatter title, TLDR and semantic macros.

### N1111

Note: [[Inertia and Mass|Inertia and Mass]]  
Priority: medium · Graph: no · Manim: no

A correct but minimal definition with no equation, example, or distinction between inertial and gravitational mass.

- [Simplify] State the quantitative link $\lvert\vec a\rvert=\lvert\vec F\rvert/m$, and add a numeric example: the same 10 N gives 10 m/s² to 1 kg but 0.01 m/s² to 1000 kg.
- [Intuition] Add one sentence on inertial versus gravitational mass and their experimental equality (the equivalence principle), which explains why all bodies fall alike.
- [Structure] Add frontmatter title, TLDR and \mechanical{m}; link to Newton's 1st and 2nd Law notes.

### N1112

Note: [[Inertial reference frame|Inertial reference frame]]  
Priority: high · Graph: no · Manim: yes

A one-line, nearly circular stub ("one in which Newtonian physics is valid") that gives the reader no test or example.

- [Simplify] Give an operational definition: a frame in which a free body (zero net force) moves with constant velocity. Add that any frame moving at constant velocity relative to an inertial frame is also inertial (Galilean transformation $\vec r'=\vec r-\vec Vt$).
- [Example] Contrast an inertial frame with an accelerating car or a rotating carousel, where a free ball appears to accelerate, and name the fictitious forces $-m\vec A$ and the Coriolis/centrifugal terms.
- [Manim] Show a free puck sliding straight across a turntable as seen from the ground frame, then the same motion re-drawn in the rotating frame, where its path curves, illustrating why the rotating frame is non-inertial.
- [Links] Link to Newton’s 1st Law, which this note should complement, and to the glossary's Galilean transformation and Coriolis entries.

### N1113

Note: [[Material Properties|Material Properties]]  
Priority: high · Graph: yes · Manim: no

A German-language bullet list with no frontmatter or macros that mislabels a strain definition as Poisson's ratio and uses an inconsistent anisotropic Hooke's law.

- [Structure] Translate to English to match the vault, add frontmatter title, TLDR and a physical-quantities table ($\sigma$ in Pa, $\epsilon$ dimensionless, $E$ in Pa, $\nu$ dimensionless).
- [Correctness] Under Poisson's ratio, "Beschreibt die Längen-Verformung … $\epsilon_x=\Delta l_x/l_x$" is the definition of strain, not of $\nu$. Define $\nu=-\epsilon_{\mathrm{trans}}/\epsilon_{\mathrm{axial}}$ with the load direction stated explicitly; the label "$\nu_x=-\epsilon_x/\epsilon_y$" hides which axis carries the load.
- [Correctness] The "allgemeines Hookesches Gesetz" $\epsilon_x=\sigma_x/E_x-\nu\sigma_y/E_y-\nu\sigma_z/E_z$ mixes direction-dependent $E_i$ with a single $\nu$. Either give the isotropic form $\epsilon_x=[\sigma_x-\nu(\sigma_y+\sigma_z)]/E$, or the orthotropic form with $\nu_{yx},\nu_{zx}$. Also write $\nu\in[-1,0.5]$ (not $\subset$) and say this range holds for isotropic materials.
- [Correctness] "Höhere Elastizität in Elastomeren; gering in Keramik" sits under Young's modulus and reads as "$E$ is high for elastomers", which is backwards: elastomers have very low $E$ (~MPa) and ceramics very high $E$ (~100–400 GPa). Say so explicitly.
- [Graph] Add a schematic stress–strain curve $\sigma(\epsilon)$ showing the linear elastic region with slope $E$, the yield point and the plastic region, for two materials (e.g. steel vs rubber-like).

### N1114

Note: [[02 Physics/01 Classical Mechanics/19 Supplementary Notes/01 Basic Concepts/Momentum|Momentum]]  
Priority: medium · Graph: no · Manim: no

Correct for constant mass but repetitive; it links to itself and never states the constant-mass assumption it uses.

- [Correctness] The step $\frac{d}{dt}\vec p=m\frac{d}{dt}\vec v$ silently assumes constant $m$; state it, and note that $\vec F=\dot{\vec p}$ is the more general statement used for systems of particles.
- [Links] "\[\[01 Basic Concepts/Momentum\]\]" links the note to itself; link to Newton’s 2nd Law (and Conservation of Linear Momentum) instead.
- [Example] Add a short impulse example, $\Delta\vec p=\int\vec F\,dt$ (a ball bouncing off a wall), to give the momentum form of Newton's law a physical use.
- [Structure] Use the \mechanical{} macros, and merge the duplicate statements of $\vec p=m\vec v$ into one.

### N1115

Note: [[Phase Space|Phase Space]]  
Priority: high · Graph: yes · Manim: yes

A wordy explanation that confuses a state (a point) with a region, has a typo in a variable name, and has a missing image and a link to the wrong note.

- [Correctness] "The state of a system of $n$ degrees of freedom is described by a volume in $2n$-dimensional phase space" contradicts the note's own "each point in phase space describes the state". A state is a point; a region describes an ensemble or uncertain initial conditions. Fix this, and the 1D "patch" paragraph, accordingly.
- [Correctness] Typo "$p_x$ and $x_x$" should read "$p_x$ and $x$".
- [Links] The embedded "Pasted image 20260413201827.png" does not exist in the vault. "\[\[Configuration Space\]\]" resolves to "03 Engineering/01 Robotics/Configuration Space.md" instead of "Coordinate Systems and Configuration Space"; use an explicit path link.
- [Graph] Replace the vague patch description with a concrete phase portrait for the harmonic oscillator: ellipses $p^2/(2m)+\tfrac12kx^2=E$ for 3–4 energies, with $x$ on the horizontal axis and $p$ on the vertical axis. Optionally add the pendulum separatrix $p=\pm2m\ell\sqrt{g\ell}\cos(\theta/2)$.
- [Manim] Animate a cloud of initial points in a small square moving under oscillator (or pendulum) flow. The points rotate around the ellipses and the square shears, but its area stays constant, which shows Liouville's theorem and the point-vs-region distinction.

### N1116

Note: [[Position|Position]]  
Priority: low · Graph: no · Manim: no

A minimal, correct definition with slightly odd wording ("three vector components").

- [Simplify] Rephrase as "$\vec r=x\hat x+y\hat y+z\hat z$, with scalar components $x,y,z$ measured from a chosen origin". Add that position depends on the choice of origin, while displacement does not.
- [Structure] Add frontmatter title, TLDR and \mechanical{\vec r}; link to Velocity and Speed, Acceleration and Coordinate Systems.

### N1117

Note: [[Trajectory|Trajectory]]  
Priority: low · Graph: yes · Manim: no

A short definition that relies on a pasted image and calls the endpoints "positions" and the intermediate points "states" inconsistently.

- [Simplify] Say a trajectory is the map $t\mapsto\vec r(t)$, and distinguish it from the path (the set of points, without timing).
- [Graph] Replace or supplement the pasted image with a native graph of a projectile trajectory $y=x\tan\alpha-gx^2/(2v_0^2\cos^2\alpha)$, with markers at equal time steps so that the time parametrization is visible.
- [Structure] Add frontmatter title, TLDR and a caption for the figure.

### N1118

Note: [[Velocity and Speed|Velocity and Speed]]  
Priority: low · Graph: yes · Manim: no

A correct definition with formatting issues: two display equations are run together on one line, and there is no example contrasting velocity and speed.

- [Structure] Split "$$v_i = \dot{r}_i$$$$\vec{v} = (\dot{x}, \dot{y}, \dot{z})$$" into separate blocks, and add frontmatter title, TLDR and \mechanical{} macros.
- [Example] Contrast average speed and average velocity for one lap of a 400 m track in 80 s: speed is 5 m/s, average velocity is 0.
- [Graph] Optionally plot $x(t)$ for a back-and-forth motion together with its slope $v(t)$ and $\lvert v(t)\rvert$, to show velocity as a slope and speed as its magnitude.

### N1119

Note: [[Newton's 4th Law|Newton's 4th Law]]  
Priority: medium · Graph: yes · Manim: no

The physics is correct, but the title "Newton's 4th Law" is nonstandard naming, and the law is given only as a scalar magnitude.

- [Structure] Rename the note (or make the alias primary) to "Newton's Law of Universal Gravitation". It is not conventionally a "4th law", and readers searching for it will not find it under that name.
- [Simplify] Add the vector form $\vec F_{12}=-\mechanical{G}m_1m_2\,\hat r_{12}/r^2$, which makes the attraction explicit, and note that the "centers" statement holds exactly only for spherically symmetric bodies (shell theorem).
- [Example] Add a worked estimate: $g=\mechanical{G}M_T/R_T^2\approx9.8$ m/s², and the force between two 70 kg people 1 m apart ($\approx3\times10^{-7}$ N).
- [Graph] Plot $F(r)\propto1/r^2$ and the potential energy $U(r)=-\mechanical{G}m_1m_2/r$ on the same $r$ axis.

### N1120

Note: [[Newton’s 1st Law|Newton’s 1st Law]]  
Priority: medium · Graph: no · Manim: no

The content is reasonable, but the callout formatting is broken, the GR term "geodesic" is used without explanation, and the "special case of the 2nd law" argument is not reconciled with the law's real role.

- [Simplify] Replace "along a geodesic" with "in a straight line at constant speed". In Newtonian Euclidean space these are the same, and "geodesic" needs an explanation this note does not give.
- [Intuition] Reorder the ending: say first that the first law defines inertial frames (its non-trivial content), and only then that, within such a frame, it looks like the $\vec F=0$ case of the second law.
- [Structure] The Description callout is missing the leading "> " on its body, and the Alternate Description callout runs two different statements together; separate them. Add frontmatter title, TLDR and semantic macros.
- [Links] Link to Inertial reference frame and Inertia and Mass.

### N1121

Note: [[Newton’s 2nd Law|Newton’s 2nd Law]]  
Priority: medium · Graph: no · Manim: no

The statements are repetitive (F = ma appears three times), and "net force zero means equilibrium" lacks the needed qualification.

- [Correctness] "When the net force is zero, the system is in equilibrium" holds only for translational equilibrium of the center of mass, and the body may still move at constant velocity. Say "translational equilibrium (constant velocity)", and note that a net torque must also vanish for full equilibrium.
- [Correctness] $F=\frac{d}{dt}(mv)$ for variable mass applies to closed systems; for a body gaining or losing mass (a rocket) you must account for the momentum flux. Add this caveat or link to the rocket equation.
- [Simplify] Merge the two callouts into one statement $\vec F_{\mathrm{net}}=d\vec p/dt$, which reduces to $\vec F=m\vec a$ for constant $m$, using vector notation and \mechanical{} macros.
- [Example] Add a worked example, e.g. a 2 kg block pulled by 10 N against 4 N of kinetic friction gives $a=3$ m/s², with a free-body diagram.

### N1122

Note: [[Newton’s 3rd Law|Newton’s 3rd Law]]  
Priority: medium · Graph: no · Manim: no

Short and mostly fine, but its last sentence misstates what the third law implies.

- [Correctness] "The third law tells us to ignore forces that do not conserve total momentum" is wrong as stated. Rewrite as "the third law implies that internal forces cancel in pairs, so the total momentum of an isolated system is conserved", and link to Conservation of Linear Momentum.
- [Intuition] Stress that the pair forces act on different bodies, which is why they do not cancel for each body. Use the horse-and-cart or book-on-table example, and point out that weight and normal force are not a third-law pair.
- [Structure] Add the formula $\vec F_{AB}=-\vec F_{BA}$, the strong form (forces along the line joining the bodies, needed for angular-momentum conservation), frontmatter title and TLDR.

### N1123

Note: [[Verlet Integration|Verlet Integration]]  
Priority: high · Graph: yes · Manim: yes

The note derives constant-force kinematics, $x=x_0+v_0t+\tfrac12at^2$, and wrongly calls it the Verlet integration algorithm; it never shows the discrete Verlet scheme.

- [Correctness] The final result "$r_x(t)=r_x(0)+\dot r_x(0)t+\tfrac12\ddot r_x t^2$" is the exact solution for constant force, not "the Verlet Integration Algorithm". Either retitle the note "Motion under a constant force", or add the actual scheme $x_{n+1}=2x_n-x_{n-1}+a(x_n)\Delta t^2$ (or velocity Verlet). Derive it by adding the Taylor expansions of $x(t\pm\Delta t)$ and show the $O(\Delta t^4)$ local error.
- [Simplify] Drop the integration constant $c$ in the definite integrals; it cancels immediately. Fix "between the limits of $t$ and $0$" to "from $0$ to $t$", and use one symbol ($x$) instead of mixing $v_x$ and $r_x$.
- [Links] "[Newton’s second law](Newton’s Second Law)" is a broken Markdown link (no such file); use \[\[Newton’s 2nd Law\]\].
- [Graph] Plot the exact SHO solution $x=\cos t$ against explicit Euler and Verlet steps with $\Delta t=0.3$ for $t\in[0,30]$, plus the energy error of both. Euler's energy grows while Verlet's stays bounded.
- [Manim] Animate a mass on a spring updated step by step with Euler and Verlet side by side, with phase-space traces; the Euler orbit spirals outward while the Verlet orbit stays closed.

### N1124

Note: [[Elementary Forces|Elementary Forces]]  
Priority: low · Graph: no · Manim: no

A correct qualitative overview of the four interactions, but it has no frontmatter and no comparison of strengths or ranges, which is the main thing a mechanics reader needs.

- [Structure] Add frontmatter title, TLDR and a summary table: mediator, relative strength (strong 1, EM $\sim10^{-2}$, weak $\sim10^{-6}$, gravity $\sim10^{-38}$), and range (fm, ∞, $10^{-3}$ fm, ∞).
- [Intuition] Add one paragraph connecting to mechanics: everyday contact, friction, tension and normal forces are electromagnetic at the microscopic level, and weight is gravitational.

### N1125

Note: [[N-body Problem|N-body Problem]]  
Priority: high · Graph: yes · Manim: yes

An informative history, but the force law's index convention contradicts the vault's, the equation of motion is split confusingly, and several links point to the wrong page or nowhere.

- [Correctness] "$\vec F_{ji}=-\kappa_{ij}(\vec r_i-\vec r_j)/\lvert\vec r_i-\vec r_j\rvert^n$" is, by the vault's convention (System of Particles: $F_{ij}$ = force on $i$ due to $j$), the force on $i$ due to $j$, i.e. $\vec F_{ij}$. Fix the index, and state that $\kappa>0$ means attraction ($\kappa=\mechanical{G}m_im_j$, $n=3$ for gravity).
- [Simplify] Replace the three-term equation with an arbitrary extra index $k$ by the standard compact form $m_i\ddot{\vec r}_i=-\sum_{j\ne i}\kappa_{ij}(\vec r_i-\vec r_j)/r_{ij}^n$.
- [Correctness] The Principia link goes to https://en.wikipedia.org/wiki/Principia_Mathematica, which is Whitehead–Russell's work; Newton's book is "Philosophiæ Naturalis Principia Mathematica". Also, the "Jacobi integral" link concerns the restricted three-body problem; the two further reductions are Jacobi's elimination of the nodes. The non-existence of further algebraic integrals is due to Bruns (1887), extended by Poincaré.
- [Links] \[\[Linear momentum\]\] and \[\[Angular momentum\]\] do not resolve to any note; point them to Conservation of Linear Momentum and Conservation of Angular Momentum (or to the chapter notes 05.03 and 05.07). The "Liouville theorem $\rho(r,p,t)$" note should say that Liouville's theorem governs the phase-space density, rather than call it a distribution function.
- [Graph] Plot a few periods of the figure-eight three-body choreography (Chenciner–Montgomery) or a chaotic three-body run in the $xy$ plane, to show that bounded but non-closed orbits are possible.
- [Manim] Animate two runs of a planar three-body system from initial conditions that differ by $10^{-6}$, side by side; the orbits track each other at first and then diverge, showing sensitivity and why first integrals are not enough.

### N1126

Note: [[Newton's Laws|Newton's Laws]]  
Priority: low · Graph: no · Manim: no

An adequate hub that lists the three laws and links to the detail notes; it has one wrong external link.

- [Links] The Principia link (https://en.wikipedia.org/wiki/Principia_Mathematica) points to Whitehead and Russell's work; link to "Philosophiæ_Naturalis_Principia_Mathematica" instead. Label the "4th law" link as "Universal gravitation" to avoid implying a fourth law of motion.
- [Structure] Add frontmatter title and TLDR, and phrase the second law as "the net force equals the rate of change of momentum ($=m\vec a$ for constant mass)".

### N1127

Note: [[System of Particles|System of Particles]]  
Priority: medium · Graph: yes · Manim: yes

A long, mostly correct derivation of momentum conservation and center-of-mass motion. It is repetitive, uses an equation before justifying it, and has some misleading wording.

- [Correctness] "For $N$ identical particles with coordinates $\vec r_i$" contradicts the general $m_i$ in $\vec R=\sum m_i\vec r_i/M$; drop "identical". Also, the equation $\sum_i\sum_j\vec F_{ij}+\sum_i\vec F_i^{(e)}=\vec F^{(e)}_{\mathrm{total}}$ is written before the third law is used to cancel the double sum; reorder the two steps.
- [Correctness] The closing claim "There is no other way in Newtonian mechanics to find conservation laws than brute calculations" is an overstatement; soften it to "Newtonian mechanics has no systematic procedure linking symmetries to conservation laws; Lagrangian mechanics (Noether) provides one".
- [Simplify] Cut the repeated derivation of $\dot{\vec P}=\vec F^{(e)}$ (it appears twice). Use one clean chain: pair cancellation, then $\dot{\vec P}=\vec F^{(e)}_{\mathrm{tot}}$, then $\vec P=M\dot{\vec R}$, then $M\ddot{\vec R}=\vec F^{(e)}_{\mathrm{tot}}$. Clarify the confusing gas-in-a-box sentence about external forces.
- [Graph] Plot a thrown dumbbell (two masses joined by a rod): the two masses follow wobbly curves while the center of mass follows a clean parabola.
- [Manim] Animate an exploding projectile: the fragments fly apart while a marked center-of-mass dot continues on the original parabola, illustrating $M\ddot{\vec R}=\vec F^{(e)}$.
- [Structure] Add frontmatter title, TLDR and semantic macros, and replace "the weighted position of the mass all added up is equal to zero" with "$\sum_i m_i(\vec r_i-\vec R)=0$".

### N1128

Note: [[Conservation Laws|Conservation Laws]]  
Priority: low · Graph: no · Manim: no

A dense particle-physics and GR reference table that is broadly correct but goes beyond classical-mechanics level and repeats itself across five tables.

- [Structure] Add frontmatter title and TLDR, and an opening paragraph explaining that, for classical mechanics, the relevant rows are energy, momentum and angular momentum via Noether's theorem; link to Noethers Theorem.
- [Correctness] "Violated if neutrinos are Majorana particles (very likely)" overstates the evidence; Majorana versus Dirac is experimentally open (neutrinoless double-beta decay is unobserved). Change it to "if neutrinos are Majorana particles (under active experimental test)".
- [Structure] The Overview table and the four category tables carry the same information; keep the overview and fold the remarks into it, or keep the categories and drop the overview.

### N1129

Note: [[Conservation of Angular Momentum|Conservation of Angular Momentum]]  
Priority: high · Graph: yes · Manim: yes

A one-line stub whose only claim ("no fundamental distinction between linear and angular momentum") is misleading and is not explained.

- [Correctness] "There is no fundamental distinction between linear and angular momentum" is misleading: they are distinct conserved quantities tied to different symmetries (translations versus rotations), although both belong to the Euclidean/Poincaré algebra. Rephrase it, or link to the Hamiltonian formulation of Angular Momentum, which makes the intended point.
- [Simplify] Derive the law: $\vec L=\sum\vec r_i\times\vec p_i$ and $d\vec L/dt=\sum\vec r_i\times\vec F_i^{(e)}$, using internal forces that are central (strong third law). So $\vec L$ is constant when the external torque vanishes.
- [Example] Add the spinning skater ($I_1\omega_1=I_2\omega_2$) and Kepler's second law (equal areas from $\lvert\vec L\rvert=2m\,dA/dt$) as worked examples.
- [Graph] Plot an elliptic Kepler orbit with two shaded sectors swept in equal times, to show equal areas.
- [Manim] Animate a planet on an elliptical orbit sweeping out shaded sectors at equal time intervals, so the sectors are visibly equal in area while the planet speeds up near perihelion.

### N1130

Note: [[Conservation of Energy|Conservation of Energy]]  
Priority: medium · Graph: yes · Manim: yes

A clear, correct step-by-step proof with good limiting cases; the etymology note is wrong, and the note lacks a worked example and the vault's macros.

- [Correctness] "$T$ (for the latin *travail*; work)" is wrong: *travail* is French, not Latin. The claim that $V$ comes from voltage is unsupported; delete it or attribute it.
- [Example] Add a pendulum or roller-coaster example: $v=\sqrt{2gh}$ at the bottom from $mgh=\tfrac12mv^2$.
- [Graph] Plot $T(t)$, $V(t)$ and $E(t)$ for a harmonic oscillator over two periods. $T$ and $V$ oscillate out of phase and $E$ is a flat line. Add a damped case with $E(t)$ decaying, as the friction counterexample.
- [Manim] Animate a ball rolling in a potential well $V(x)$, with a horizontal total-energy line and live bars for $T$ and $V$ that trade off. A second run with friction shows the energy line sinking.
- [Structure] Add frontmatter title, TLDR and \energy{}/\mechanical{} macros, and state the friction case quantitatively: $dE/dt=\vec F_{\mathrm{nc}}\cdot\vec v<0$.

### N1131

Note: [[Conservation of Linear Momentum|Conservation of Linear Momentum]]  
Priority: high · Graph: no · Manim: yes

Fragmentary notes with a sign or index typo that makes the third law trivial, partial instead of total time derivatives, and an unexplained Lagrangian argument.

- [Correctness] "$\vec F_{ij}=-\vec F_{ij}\ \forall i,j$" should be $\vec F_{ij}=-\vec F_{ji}$; as written it forces every force to zero. The LaTeX also contains invisible zero-width characters.
- [Correctness] "$\mathbf F=\partial\mathbf P/\partial t$" and "$F=\frac{\partial}{\partial t}p$" should use the total derivative $d/dt$; momentum along a trajectory is a function of $t$ alone.
- [Simplify] Expand the Lagrangian part: if $\partial L/\partial x=0$ (x is a cyclic coordinate), the Euler–Lagrange equation gives $\frac{d}{dt}(\partial L/\partial\dot x)=0$, so $p_x$ is conserved. Link to Noethers Theorem and Euler-Lagrange equation.
- [Example] Add a 1D collision example (e.g. a perfectly inelastic collision $m_1v_1=(m_1+m_2)v_f$) to show the law in use.
- [Manim] Animate two carts colliding on a track, with a live readout of $p_1$, $p_2$ and $p_1+p_2$; the individual momenta jump while the total stays constant.
- [Structure] Add frontmatter title and TLDR, remove the stray "----" before the section, and fix "excert" and "on by particle $i$".

### N1132

Note: [[Hamiltonian formulation of Angular Momentum|Hamiltonian formulation of Angular Momentum]]  
Priority: high · Graph: no · Manim: yes

An accessible narrative, but it calls $(\boldsymbol\theta,\mathbf L)$ canonical pairs and uses an orbital Poisson bracket for what its Hamiltonian treats as spin about the center of mass.

- [Correctness] "$(\boldsymbol\theta,\mathbf L)$" are not canonical pairs: the note's own bracket $\{L_i,L_j\}=\epsilon_{ijk}L_k\neq0$ shows that the components of $\mathbf L$ cannot be canonical momenta. Use Euler angles with their conjugate momenta $(p_\phi,p_\theta,p_\psi)$, or present $\mathbf L$ as non-canonical (Lie–Poisson) variables.
- [Correctness] $\{L_i,P_j\}=\epsilon_{ijk}P_k$ holds for orbital or total angular momentum $\mathbf L=\mathbf R\times\mathbf P$, but in $H$ the term $\tfrac12\mathbf L^T\mathbf I^{-1}\mathbf L$ treats $\mathbf L$ as spin about the center of mass, which has $\{L^{\mathrm{spin}}_i,P_j\}=0$. State which $\mathbf L$ is meant, e.g. $\mathbf J=\mathbf R\times\mathbf P+\mathbf S$.
- [Example] Add a concrete coupling example: a dumbbell in a non-uniform gravitational field (gravity-gradient torque), with $\dot{\mathbf S}=-\partial V/\partial\boldsymbol\theta$-type torque, to show the "conversion" in a real case.
- [Manim] Animate an off-center impulse on a free rod: the center of mass moves off in a straight line while the rod starts spinning. Show the arrows for $\mathbf P$ and $\mathbf L$ appearing from the single impulse $\mathbf J$ and $\mathbf r\times\mathbf J$.
- [Structure] Use a quoted, more specific title (the current title "Hamiltonian formulation" collides with other notes), and add a TLDR and semantic macros.

### N1133

Note: [[Lagrangian formulation of Angular Momentum|Lagrangian formulation of Angular Momentum]]  
Priority: medium · Graph: no · Manim: yes

A readable, mostly correct account; it reuses $L$ for both the Lagrangian and angular momentum, and it treats $\boldsymbol\omega$ as a generalized velocity without comment.

- [Correctness] Writing "$\mathbf L=\partial L/\partial\boldsymbol\omega$" uses $L$ for both the Lagrangian and angular momentum in one equation. Rename the Lagrangian $\mathcal L$, and note that $\boldsymbol\omega$ is not the time derivative of any coordinate (it is a quasi-velocity), so the Euler–Lagrange equations in $\boldsymbol\omega$ need Euler angles or the Euler–Poincaré form.
- [Simplify] In the torque section, say "$\mathbf r$ is the position vector of the point of application relative to the center of mass" rather than "distance", and note that $d\mathbf L/dt=\mathbf r\times\mathbf F$ here is about the center of mass.
- [Example] Add a worked example: a rod of mass $M$ and length $\ell$ hit at its end by an impulse $J$ gives $v_{\mathrm{cm}}=J/M$ and $\omega=6J/(M\ell)$, showing linear and angular effects from one force.
- [Manim] Animate a rigid rod on a frictionless table receiving a push at the center (pure translation) and then at the end (translation plus rotation), with $\mathbf P$ and $\mathbf L$ arrows.
- [Structure] Use a quoted, specific title, and add TLDR and semantic macros.

### N1134

Note: [[Atwood machine|Atwood machine]]  
Priority: high · Graph: yes · Manim: yes

A clear step-by-step derivation, but a sign error in the potential term flips the final acceleration, and the constraint is first written with the wrong sign.

- [Correctness] The constraint "$l=x_1+x_2\rightarrow\dot x_2=\dot x_1$" should give $\dot x_2=-\dot x_1$ (as used later).
- [Correctness] With $V=m_igx_i$ (heights), $V=(m_1-m_2)gx_1+m_2gl$, so the "Rearranging" step "$-(m_2-m_1)gx_1$" should be $-(m_1-m_2)gx_1$. The result should then be $\ddot x_1=(m_2-m_1)g/(m_1+m_2)$; the note's $(m_1-m_2)g/(m_1+m_2)$ would make the heavier mass rise. The same error carries into the pulley-inertia result, which should read $\ddot x_1=(m_2-m_1)g/(m_1+m_2+I/r^2)$.
- [Correctness] Mislabels: "Lagrange equation: $L=T-V$" is the Lagrangian, not the equation, and "$\partial L/\partial\dot x_1$ (acceleration of $m_1$)" is the generalized momentum, not an acceleration.
- [Intuition] Add limiting cases: $m_1=m_2$ gives $\ddot x=0$; $m_2\gg m_1$ gives $\ddot x_1\to g$ (free fall); $I/r^2\gg m$ gives $\ddot x\to0$. Note that $I/r^2$ acts as extra inertial mass.
- [Graph] Plot $\ddot x_1/g=(m_2-m_1)/(m_1+m_2)$ against the mass ratio $m_2/m_1\in[0,5]$, with and without $I/r^2=m_1$.
- [Manim] Animate the two masses on a pulley, with the pulley rotating and a live acceleration readout; then repeat with a heavy pulley to show the slower motion.

### N1135

Note: [[D'Alembert's principle|D'Alembert's principle]]  
Priority: high · Graph: no · Manim: no

A short, imprecise description that misses the defining feature of d'Alembert's principle: the virtual work done by constraint forces vanishes.

- [Correctness] "A body is in dynamic equilibrium when the sum of the external forces … is zero if you include a fictitious inertial force ($F=ma$)" is muddled: the inertial force is $-m\vec a$, not $F=ma$. The principle proper is $\sum_i(\vec F_i^{(a)}-m_i\vec a_i)\cdot\delta\vec r_i=0$, with applied forces only, valid because ideal constraint forces do no virtual work. Write it this way, consistent with the Glossary entry.
- [Example] Work the Atwood machine or a bead on a rotating wire with d'Alembert's principle, showing that the tension or normal force never appears.
- [Links] Show the step from d'Alembert's principle to the Euler–Lagrange equations, linking Euler-Lagrange equation and Atwood machine. Add frontmatter title and TLDR.

### N1136

Note: [[Double pendulum|Double pendulum]]  
Priority: high · Graph: yes · Manim: yes

An unfinished derivation marked TODO; several partial derivatives in the table are wrong, and the equations of motion are never stated.

- [Correctness] $\partial L/\partial\dot\theta_1$ should be $(m_1+m_2)l_1^2\dot\theta_1+m_2l_1l_2\dot\theta_2\cos(\theta_1-\theta_2)$, not "$m_1l_1^2\dot\theta_1+m_2l_1\dot\theta_1$". $\partial L/\partial\theta_1$ should be $-m_2l_1l_2\dot\theta_1\dot\theta_2\sin(\theta_1-\theta_2)-(m_1+m_2)gl_1\sin\theta_1$, not "$m_2l_1l_2\dot\theta_2^2\sin(\theta_1-\theta_2)-\dots$".
- [Correctness] $\partial L/\partial\theta_2$ should be $+m_2l_1l_2\dot\theta_1\dot\theta_2\sin(\theta_1-\theta_2)-m_2gl_2\sin\theta_2$. $\frac{d}{dt}\partial L/\partial\dot\theta_2$ is missing $m_2l_1l_2\ddot\theta_1\cos(\theta_1-\theta_2)$ and should have $-m_2l_1l_2\dot\theta_1(\dot\theta_1-\dot\theta_2)\sin(\theta_1-\theta_2)$. The third row header reads $\partial L/\partial\dot\theta_1$ for both columns.
- [Simplify] Expand $T$ fully to $\tfrac12(m_1+m_2)l_1^2\dot\theta_1^2+\tfrac12m_2l_2^2\dot\theta_2^2+m_2l_1l_2\dot\theta_1\dot\theta_2\cos(\theta_1-\theta_2)$ instead of leaving it in mixed $\dot x,\dot\theta$ form. Then state the two coupled equations of motion and their small-angle normal-mode limit.
- [Graph] Plot $\theta_1(t)$ and $\theta_2(t)$ for small initial angles (regular, near-periodic) and for large angles (chaotic) with $l_1=l_2=1$ m, $m_1=m_2=1$ kg and $t\in[0,20]$ s, or plot the trajectory on the $(\theta_1,\theta_2)$ torus.
- [Manim] Animate two double pendulums released from angles that differ by 0.001 rad, side by side with fading traces of the lower bob; they move together at first and then diverge completely, which shows deterministic chaos.

### N1137

Note: [[Euler-Lagrange equation|Euler-Lagrange equation]]  
Priority: medium · Graph: no · Manim: no

A correct statement with a term-by-term legend, but it has no derivation, no example and no physical interpretation.

- [Intuition] Interpret the terms: $\partial L/\partial\dot q_i$ is the generalized momentum $p_i$ and $\partial L/\partial q_i$ is the generalized force, so the equation reads "$\dot p_i$ = generalized force".
- [Example] Apply it to $L=\tfrac12m\dot x^2-\tfrac12kx^2$ to recover $m\ddot x=-kx$; one line shows that it reproduces Newton.
- [Links] Link to Principle of Least Action (the derivation, currently unfinished there), Atwood machine, Double pendulum and Noethers Theorem. Add frontmatter title, TLDR and \energy{L}.

### N1138

Note: [[Lagrange Equation|Lagrange Equation]]  
Priority: medium · Graph: no · Manim: no

The title promises Lagrange's equation, but the note only defines the Lagrangian $L=T-V$ and explains $T$ and $V$ at an introductory level.

- [Structure] Rename the note "Lagrangian" (and update links), or merge it into Euler-Lagrange equation; the Atwood note's "\[\[Lagrange Equation\]\]" link reinforces the mislabel.
- [Intuition] Explain why $T-V$ rather than $T+V$: it is the combination whose stationary action reproduces $m\ddot x=-V'(x)$. Note that $L$ is a function of $(q,\dot q,t)$, not of $v$ alone.
- [Example] Give the Lagrangian of a simple pendulum, $L=\tfrac12m\ell^2\dot\theta^2+mg\ell\cos\theta$, to show generalized coordinates in use.

### N1139

Note: [[Noethers Theorem|Noethers Theorem]]  
Priority: medium · Graph: no · Manim: no

A correct overview table, but with no statement of the conserved quantity's formula and no example.

- [Simplify] Give the mechanics form: if $L$ is invariant under $q\to q+\epsilon K(q)$, then $Q=\sum_i(\partial L/\partial\dot q_i)K_i$ is conserved. Separately, if $\partial L/\partial t=0$, then $E=\sum_i p_i\dot q_i-L$ is conserved.
- [Example] Work out the planar central-force case $L=\tfrac12m(\dot r^2+r^2\dot\varphi^2)-V(r)$: $\varphi$ is cyclic, so $p_\varphi=mr^2\dot\varphi$ is conserved.
- [Structure] Note that the theorem was proved in 1915 and published in 1918. Add frontmatter title (and the apostrophe, "Noether's Theorem") and TLDR, and link the table rows to Conservation of Energy, Conservation of Linear Momentum and Conservation of Angular Momentum.

### N1140

Note: [[Principle of Least Action|Principle of Least Action]]  
Priority: high · Graph: yes · Manim: yes

An unfinished derivation that stops before the Euler–Lagrange equation, with examples that illustrate least time or least energy rather than least action.

- [Correctness] The "Examples for minimizing action" are not action examples: the beach-vs-water runner and refraction illustrate Fermat's principle of least time, and the catenary minimizes static potential energy. Present them as analogous variational principles, not as instances of $\delta S=0$. State that the action is stationary, not necessarily minimal.
- [Correctness] The claim that in physics the time axis of a plot is usually vertical is true only for spacetime diagrams. Remove it, or restrict it to that context.
- [Simplify] Finish the derivation. State the fixed-endpoint condition $f(t_1)=f(t_2)=0$, compute $dS/d\alpha|_{0}=\int(\partial\mathcal L/\partial g\,f+\partial\mathcal L/\partial\dot g\,\dot f)dt$, integrate by parts, and arrive at the Euler–Lagrange equation. Give $\int_{t_1}^{t_2}$ explicit limits.
- [Graph] For a ball thrown up ($\mathcal L=\tfrac12m\dot x^2-mgx$ with $x(0)=x(T)=0$), plot the true parabola and the varied paths $\hat g+\alpha\sin(\pi t/T)$ for several $\alpha$. In a second panel, plot $S(\alpha)$ as an upward parabola with its minimum at $\alpha=0$.
- [Manim] Animate the varied path $\hat g+\alpha f$ as $\alpha$ sweeps from $-1$ to $1$, with a live dot tracing $S(\alpha)$ in a side panel, so the reader sees the action bottom out exactly on the physical trajectory.

### N1141

Note: [[Hamiltonian Equation|Hamiltonian Equation]]  
Priority: high · Graph: yes · Manim: no

A two-line stub that states $H=T+V$ without its validity conditions and omits Hamilton's equations entirely.

- [Correctness] $H=T+V$ holds only when $T$ is quadratic in the velocities and the constraints and potential are time-independent. Define $H=\sum_kp_k\dot q_k-L$ and state $H=T+V$ as the special case.
- [Simplify] Add Hamilton's equations $\dot q_k=\partial H/\partial p_k$, $\dot p_k=-\partial H/\partial q_k$, and work the harmonic oscillator $H=p^2/(2m)+\tfrac12kx^2$.
- [Graph] Plot the oscillator's phase-space level sets $H=E$ (ellipses), with arrows of the Hamiltonian vector field $(\partial H/\partial p,-\partial H/\partial x)$.

### N1142

Note: [[Legendre transformation|Legendre transformation]]  
Priority: high · Graph: yes · Manim: yes

A one-sentence stub with no definition; the Glossary already says more than this note.

- [Simplify] Define $g(p)=\sup_x[px-f(x)]$, or $g(p)=px-f(x)$ with $p=f'(x)$, for convex $f$. Apply it to $L(\dot q)$ to get $H(p)=p\dot q-L$ with $p=\partial L/\partial\dot q$, and show that $L=\tfrac12m\dot q^2-V$ gives $H=p^2/2m+V$.
- [Graph] Plot a convex $f(x)=x^2/2$ with the tangent line of slope $p$; its intercept with the vertical axis is $-g(p)$. Plot $g(p)=p^2/2$ alongside.
- [Manim] Animate the tangent line rolling along the convex curve as its slope $p$ increases, with its intercept $-g(p)$ tracing out the transformed function in a second panel.

### N1143

Note: [[Action|Action]]  
Priority: low · Graph: no · Manim: no

A rich, mostly correct reference table of action-related relations that is appropriate as a glossary; one unit inconsistency and one terminology slip.

- [Correctness] The EM field action "$S=-\frac{1}{4\mu_0}\int d^4x\,F_{\mu\nu}F^{\mu\nu}-\int d^4x\,j_\mu A^\mu$" has units of J·m if $d^4x=d(ct)\,d^3x$, which the Einstein–Hilbert row's $c^3/(16\pi G)$ prefactor implies. Add a factor $1/c$ (or state $d^4x=dt\,d^3x$) so that $[S]=$ J·s.
- [Correctness] In the relativistic-particle row, "$ds$ is the proper-time element" should read "$ds=c\,d\tau$ is the line element ($d\tau$ the proper time)".
- [Structure] Add frontmatter title and TLDR, and order the rows from classical (definition, Hamilton's principle, Euler–Lagrange, Hamilton–Jacobi) to quantum and field theory, with a short heading for each group.

### N1144

Note: [[Energy|Energy]]  
Priority: low · Graph: no · Manim: no

A compact cross-domain formula table for energy that is useful as a reference but lacks the vault's frontmatter, TLDR, and semantic macros, and has one misstated relation.

- [Correctness] The "Work–energy theorem" row writes "$\Delta E = W = \int \mathbf{F}\cdot d\mathbf{x}$" and says it "Relates net work to change in mechanical energy"; net work equals the change in kinetic energy, so write $\Delta K = W_{\mathrm{net}}$ (mechanical energy changes only by non-conservative work).
- [Structure] Add the quoted Unicode frontmatter title and a one-line TLDR, and convert symbols to the semantic macros (\energy{} for $E,U,W,P$, \mechanical{} for $m,\mathbf F,\mathbf p$, \electric{}/\magnetic{} for field quantities) instead of plain \mathbf.
- [Simplify] The "EM field energy" row uses $E$ for both energy and electric field magnitude; rename the energy $U$ consistently or write $|\mathbf E|^2$ to avoid the clash.
- [Links] Link rows to the vault notes that derive them (work–kinetic energy theorem in Rotational Motion 6.3, Gravitational potential note, relativity notes) so the table works as a hub.

### N1145

Note: [[Impulse|Impulse]]  
Priority: low · Graph: no · Manim: no

A broad impulse formula table that is mostly correct and readable as a reference but contains two wrong formulas and a symbol clash.

- [Correctness] The "Radiation pressure impulse" row states "$\Delta p/A = \dfrac{2\,\mathcal{E}_{\text{inc}}}{c\,\Delta t\,A}$"; the right side is a pressure (force per area), not momentum per area; it should read $\Delta p/A = 2\mathcal E_{\text{inc}}/(cA)$, i.e. $J/A = 2\mathcal E_{\text{inc}}/(cA)$ (the current $J/A = 2\mathcal E_{\text{inc}}/c$ is also missing the $1/A$).
- [Correctness] The "Quantum kick operator" $\hat U = \exp(-\tfrac{i}{\hbar}\Delta\mathbf p\cdot\hat{\mathbf x})$ shifts momentum by $-\Delta\mathbf p$; a kick of $+\Delta\mathbf p$ needs $\hat U = \exp(+\tfrac{i}{\hbar}\Delta\mathbf p\cdot\hat{\mathbf x})$ since $\hat U^\dagger\hat{\mathbf p}\hat U = \hat{\mathbf p}+\Delta\mathbf p$.
- [Simplify] The "Rocket total impulse" row uses $T$ for both thrust and burn time ($\int_0^T T(t)\,dt$); rename the burn time $t_b$; also make the restitution row's left side a vector ($\mathbf J$) and state that $\mathbf v_{\text{rel}} = \mathbf v_1-\mathbf v_2$ and $\hat{\mathbf n}$ point from body 2 to body 1.
- [Structure] Add quoted frontmatter title, a TLDR, and semantic macros (\mechanical{} for $\mathbf J,\mathbf F,\mathbf p,m$; \energy{} for $K,E$), and link the impulse–momentum and angular-impulse rows to the Rotational Motion chapter 5 notes.

### N1146

Note: [[02 Physics/01 Classical Mechanics/19 Supplementary Notes/07 Glossary/Momentum|Momentum]]  
Priority: low · Graph: no · Manim: no

A wide-ranging momentum reference table that reads well but has one garbled formula, one mislabelled equation, and mixed unit conventions.

- [Correctness] The "Radiation pressure (ideal reflector)" row writes "$p_{\perp} = \dfrac{2I}{c} \Delta t /A$", which is dimensionally wrong; the pressure is $2I/c$ and the momentum transferred is $\Delta\mathbf p = (2IA\,\Delta t/c)\,\hat{\mathbf n} = (2\mathcal E_{\text{inc}}/c)\,\hat{\mathbf n}$.
- [Correctness] The row "Fluid momentum equation (Euler form)" includes the viscous stress term $\nabla\cdot\boldsymbol\tau$; with that term it is the Cauchy momentum (Navier–Stokes) equation, while the Euler equation is the inviscid case $\boldsymbol\tau=0$; relabel or drop the term.
- [Simplify] The perfect-fluid row $T^{\mu\nu}=(\rho c^{2}+p)u^{\mu}u^{\nu}+p\eta^{\mu\nu}$ mixes SI ($\rho c^2$) with $c=1$ four-velocity; write $(\rho + p/c^2)u^\mu u^\nu + p\eta^{\mu\nu}$ and state the metric signature.
- [Structure] Add quoted frontmatter title, TLDR, and semantic macros, and remove the `<br>` line breaks in the "Quantities Linked" column or apply them consistently with the Energy and Impulse glossary tables.
