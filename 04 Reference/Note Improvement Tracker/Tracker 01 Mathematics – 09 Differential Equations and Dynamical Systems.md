---
title: "Note Improvement Tracker – 01 Mathematics/09 Differential Equations and Dynamical Systems"
---

> [!TLDR]
> This note tracks the review of the 92 notes in `01 Mathematics/09 Differential Equations and Dynamical Systems`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 33 possible errors or notation conflicts. 33 of them are verified (29 fixed, 3 partly, 1 rejected); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N0413|N0413]] Energy Conservation Example: Step 4: $\varphi_0=\arctan(x_0\omega/v_0)$ gives the wrong phase for $v_0<0$ and is undefined for $v_0=0$; for $x=A\sin(\omega t+\varphi_0)$ use $\varphi_0=\operatorname{atan2}(x_0\omega,\,v_0)$ (equivalently $\sin\varphi_0=x_0/A$, $\cos\varphi_0=v_0/(\omega A)$); likewise Step 3's $\varphi_0=\arcsin(x_0/A)$ only covers $v_0\ge0$. **Partly:** Step 4 confirmed: replaced arctan(x0 omega/v0) with atan2(x0 omega, v0) and stated sin/cos conditions for x=A sin(omega t+phi0); Step 3 left unchanged because its explicit sign choice in A sin(+-omega t+phi0) already covers v0<0
- [[#N0414|N0414]] Hamiltonian Flow Example: Step 4: "The flow matrix above rotates the vector $\mathbf{u}$" is false unless $m\omega=1$; $\mathrm{e}^{At}$ is not orthogonal and moves $\mathbf{u}$ along an ellipse; it is a rotation only in the scaled coordinates $(x,\,p/(m\omega))$. **Fixed:** Rewrote Step 4 sentence: motion along the ellipse in (x,p); rotation by omega t only in scaled coordinates (x, p/(m omega))
- [[#N0417|N0417]] Substitution Example: Second section: the first derivative is written $\frac{\mathrm{d}x}{\mathrm{d}t^2}$ (should be $\frac{\mathrm{d}x}{\mathrm{d}t}$) and the last equation writes $\frac{\mathrm{d}^2x^2}{\mathrm{d}t^2}$ (should be $\frac{\mathrm{d}^2x}{\mathrm{d}t^2}$). **Fixed:** Corrected to dx/dt and d^2x/dt^2
- [[#N0417|N0417]] Substitution Example: Second section: the ansatz is stated as $x=A\cos(\Omega t)$ but then differentiated as $A\cos(\Omega t)+B\sin(\Omega t)$; the table omits $B$, calls $\Omega$ "Oscillation Frequency" (it is an angular frequency), and $\Omega$ duplicates the first section's $\omega$; the conclusion $\Omega^2=k/m$ is never stated. **Fixed:** Ansatz now A cos + B sin; added B row; Omega labelled angular frequency; added conclusion Omega^2=k/m so Omega=omega
- [[#N0418|N0418]] Algebraic Rules for Ordinary Differential Equations (ODE): Logarithmic derivatives: "$\frac{d}{dt}\ln f=f'/f$ applies whenever $f(t)$ stays away from zero" is wrong for $f<0$, where $\ln f$ is undefined; require $f>0$ or write $\frac{d}{dt}\ln|f|=f'/f$ for $f\neq0$ (matching the integral section's $\ln|f|$). **Fixed:** = f'/f for f(t) not 0, noting the absolute value can be dropped for f>0
- [[#N0420|N0420]] Types of Differentials: Exterior derivative: "$d\omega=\partial_\nu\omega_\mu\wedge dx^\nu\wedge dx^\mu$" wedges a function component; the correct form is $d\omega=\partial_\nu\omega_\mu\,dx^\nu\wedge dx^\mu$ (equivalently $\tfrac12(\partial_\nu\omega_\mu-\partial_\mu\omega_\nu)\,dx^\nu\wedge dx^\mu$). **Fixed:** Wrote d omega = partial_nu omega_mu dx^nu wedge dx^mu = 1/2(partial_nu omega_mu - partial_mu omega_nu) dx^nu wedge dx^mu
- [[#N0420|N0420]] Types of Differentials: Covariant derivative key point: it is not "the unique derivative operator"; uniqueness holds only for the Levi-Civita connection (torsion-free and metric-compatible), so state that condition. **Fixed:** Key point now says uniqueness holds only for the torsion-free metric-compatible Levi-Civita connection
- [[#N0420|N0420]] Types of Differentials: Laplacian: "measures how a scalar deviates from its average value" holds for the Riemannian Laplacian, not for the Lorentzian d'Alembertian $\Box$ that the same section names; separate $\nabla^2$ (elliptic) from $\Box$ (wave operator). **Fixed:** Meaning now separates elliptic Riemannian Laplacian from the Lorentzian d'Alembertian wave operator
- [[#N0420|N0420]] Types of Differentials: Table row for $u^\mu\nabla_\mu$ says a connection is required, but on scalars $u^\mu\nabla_\mu f=u^\mu\partial_\mu f=df/d\tau$ needs none; note that the connection enters only for tensors. The Lie derivative key point "captures changes due to coordinate motion" should read "changes relative to the flow of $v$". **Fixed:** Table cell now says connection needed only for tensors, added scalar identity u^mu nabla_mu f = df/dtau; Lie key point now says changes relative to the flow of v
- [[#N0442|N0442]] Linearization, phase portraits, and nonlinear maps: The Physical quantities table lists $\beta$ twice with conflicting meanings ("Crowding coefficient, $\unit{s^{-1}}$" and "Predator effect coefficient, 1"), gives $\lambda$ as a Lyapunov exponent although here $\lambda$ is always a Jacobian eigenvalue or recurrence root, and contains rows for symbols that never occur in this note ($T$ sampling period, $x,y$ ingredient amounts in oz, $s$ protein surplus, $t$ iron surplus); rebuild it from the symbols actually used. **Fixed:** Rebuilt table from symbols used (R, W, t, alpha, beta, gamma, delta, lambda as eigenvalue, bars, epsilon, x_i, h/Delta t, y, kappa, x_n, mu)
- [[#N0442|N0442]] Linearization, phase portraits, and nonlinear maps: Symbol clashes: $\beta$ is the predator-effect coefficient in $R'=\alpha R(1-\beta W)$ but also the logistic-map parameter $\beta=1+\alpha\Delta t$, and $\alpha$ is the rabbit growth rate, the multiplier in $y_n=\alpha y_{n-1}$, and the logistic rate; rename the map parameter (e.g. $r$) and the recurrence multiplier. **Fixed:** Renamed logistic-map parameter beta to mu and recurrence multiplier alpha to kappa; logistic rate alpha kept as a growth rate (same meaning as rabbit growth rate)
- [[#N0446|N0446]] Box central-field and oscillator eigenfunctions: "The adjective linear describes its dependence on the unknown function" is incorrect: "linear harmonic oscillator" refers to the one-dimensional oscillator with a restoring force linear in displacement (potential $\propto x^2$); every equation in this note is linear in $\phi$, so linearity in the unknown cannot be what the adjective distinguishes. **Fixed:** Sentence now says linear refers to the 1D oscillator with restoring force linear in displacement (potential quadratic); also removed BOM and converted CRLF to LF
- [[#N0447|N0447]] Endpoint eigenvalues and Fourier orthogonality: The Physical quantities table lists $\mechanical{c}$ twice (viscous damping coefficient and wave speed) and describes "a slice of the conducting rod" and "distance along the wave and heat models", none of which appear in this note; drop the wave-speed row and the heat/wave wording. **Fixed:** Removed wave-speed row; m, x and t descriptions now refer only to the forced oscillator
- [[#N0449|N0449]] Weighted eigenfunctions and Rayleigh bounds: The Physical quantities table lists $\mechanical{u}$ as "Pressure, Pa" (the note's $\mechanical{u}$ is string displacement) and has rows for thermal diffusivity $\thermal{k}$, membrane dimensions $L,H$, and radius $r,a$ that never occur; the $\mechanical{Q}$ row links to the "Theorems for regular Sturm–Liouville problems" section, but $\mechanical{Q}$ appears in the Exercise 4.4.2 part. **Partly:** Removed pressure, diffusivity, membrane and radius rows, added L string length and alpha rows, c row without unused v; Q link kept because Exercise 4.4.2 lies inside the Theorems for regular Sturm–Liouville problems section, description now names the exercise
- [[#N0449|N0449]] Weighted eigenfunctions and Rayleigh bounds: Symbol clash for $\alpha$: in the opening string equation and the heat-rod equation $q=\alpha$, but in Exercise 4.4.2 $\alpha=\alpha_{\mathrm{line}}/\mechanical{\rho}_0$ and $q=\mechanical{\rho}_0\alpha$; also plain $T(t)$ is the time factor next to the tension $\mechanical{T}_0$. Use one meaning (e.g. $q=\alpha_{\mathrm{line}}$) and call the time factor $h(t)$ as later in the note. **Fixed:** Exercise 4.4.2 now uses alpha for the load coefficient (q=alpha as in the opening) and writes the ratio alpha/rho0 explicitly; time factor T(t) renamed h(t) in the nonuniform-string section and the exercise
- [[#N0458|N0458]] Classification and heat-equation examples: The Physical quantities table lists $\mechanical{c}$ as "Viscous damping coefficient" ($\unit{N\,s\,m^{-1}}$) and $\mechanical{m}$, $\mechanical{x}$ as oscillator mass and displacement, none of which occur here; $\mechanical{c}$ is only the wave speed, so the damping row also creates a duplicate-symbol clash. Remove these oscillator rows. **Partly:** Damping-c row removed; m (rod slice mass) and x (spatial coordinate) do occur, so their rows were kept with descriptions corrected
- [[#N0458|N0458]] Classification and heat-equation examples: The $\thermal{y}$ row links to "#Changing the forcing at one point", but $\thermal{y}(\mechanical{x},\signal{t})$ is introduced in "Introduction to PDEs" (the $y$ in the forcing section is an ODE solution); also the same temperature is written $\thermal{y}$ there and $\thermal{u}$ from "Deriving the heat equation" on, so use one symbol. **Fixed:** Changed the Introduction to PDEs heat equation to use u and removed the y row with its wrong link
- [[#N0460|N0460]] Fourier extensions and forced heat modes: Under "Term-by-term differentiation of Fourier series and the method of eigenfunction expansion", the sentence "The time-differentiation rule on [[#Eigenfunction expansion for the heat equation]]" points to the wrong heading; the rule is in "Time differentiation of a Fourier series". **Fixed:** Link now targets #Time differentiation of a Fourier series
- [[#N0460|N0460]] Fourier extensions and forced heat modes: The Physical quantities table lists $\mechanical{u}$ as pressure "in the divergence-form example" (no such example here, and it clashes with $\mechanical{u}$ = wave displacement in the same table), plus rows that do not occur in this note: $\mechanical{\rho}$ in $\unit{kg/m^3}$, "$\mechanical{Q}$ in Exercise 4.4.2" with its link, $L,H$ membrane dimensions, and $r,a$. Rebuild the table from the symbols used. **Fixed:** Rebuilt table from used symbols; added L, F/m/a for Newton's law; kept c,v since v occurs in the vector wave equation
- [[#N0461|N0461]] Heat equation, boundary data, and separation: Symbol clash: $\thermal{\phi}$ is the heat flux ($\unit{W/m^2}$) in the derivation and the initial temperature in "Separation of variables" and "Separation of variables for the heat equation"; the table lists both. Rename the initial profile (e.g. $\thermal{f}$, already used later). **Fixed:** Renamed initial profile to psi (already the initial temperature symbol; f is taken by the source f(x,t) there); merged table rows
- [[#N0461|N0461]] Heat equation, boundary data, and separation: Symbol clash: $\thermal{k}$ is defined as diffusivity $\thermal{k}_0/(\thermal{c}\mechanical{\rho})$ in "The heat equation" but used for conductivity in Fourier's law $\thermal{\phi}=-\thermal{k}\,\partial\thermal{u}/\partial x$ in the next part; write $\thermal{k}_0$ there. **Fixed:** Fourier's law now uses k_0; replaced the explaining sentence
- [[#N0461|N0461]] Heat equation, boundary data, and separation: Two internal links point to unrelated sections: "Newton's law of cooling" refers to [[#The spatial eigenvalue problem]], and the steady-state remark cites the "source convention on [[#Newton's law of cooling and the initial condition]]", whereas the convention $-(\thermal{k}_0\thermal{u}')'=\thermal{Q}$ is in "Steady-state heat equation". Retarget or remove them. **Fixed:** Removed the Newton's-law link (no section holds it); retargeted the source-convention link to #Steady-state heat equation
- [[#N0461|N0461]] Heat equation, boundary data, and separation: The Physical quantities table has rows for symbols not in this note: wave speed $\mechanical{c},\mechanical{v}$; string density $\mechanical{\rho}(x),\mechanical{\rho}_{\min},\mechanical{\rho}_{\max}$ in $\unit{kg\,m^{-1}}$ (clashing with $\mechanical{\rho}$ in $\unit{kg/m^3}$); membrane $L,H$ (clashing with the heat-transfer coefficient $\thermal{H}$) and radius $a$. Remove them. **Fixed:** Removed them; added L rod length and r radial distance (used in Exercise 2.3.1 D)
- [[#N0462|N0462]] Insulated, periodic, and forced heat problems: The Physical quantities table lists $L$, $H$ (rectangular membrane dimensions) and $r$, $a$ (membrane radius), which this note never uses, and omits $g(x)$ and the rod-length meaning of $L$ (and $2L$ for the ring); replace with the symbols actually used. **Fixed:** Replaced with L (rod length and half ring length), g(x) and the endpoint temperatures A, B
- [[#N0464|N0464]] Model error, random walks, and continuum limits: The Physical quantities table lists many symbols this note never uses ($R$, $\alpha$, $M$, $\beta$ twice with different meanings, $t_0$, $K$, $\delta$, $y_i$, ingredient amounts $x,y$, surpluses $s,t$, $a_i$, $d\theta_i/dt$) and defines $\tau$ as "Total population" although here $\tau=t$ is the moving-frame time; rebuild it from $\Delta x,\Delta t,c,D,U,C,f,g,h,z$. **Fixed:** Rebuilt table from x,t, Delta x, Delta t, c, D, U, f, g, h, C, z, y, tau, mu, sigma, L, N
- [[#N0464|N0464]] Model error, random walks, and continuum limits: "The notes credit the model to Witten and give 1978 as the year of introduction": diffusion-limited aggregation was introduced by Witten and Sander in 1981 (Phys. Rev. Lett. 47, 1400); correct the attribution and year. **Fixed:** Kept the report of the notes and added that Witten and Sander introduced DLA in 1981
- [[#N0467|N0467]] Rectangular and circular membrane eigenmodes: The Physical quantities table defines $\mechanical{u}$ as "Pressure" in Pa (here it is membrane displacement in m), lists $\mechanical{\beta}$ both as a damping coefficient (unused here) and as initial velocity, and lists unused $\mechanical{v}$; fix the rows to match this note. **Fixed:** u row now membrane displacement in m; removed damping-beta row; c row without v
- [[#N0471|N0471]] The wave equation on a line and a finite string: The Physical quantities table lists $\mechanical{u}$ as "Pressure" in Pa alongside $\mechanical{u}$ as wave displacement, gives $\mechanical{\rho}$ twice with units kg/m³ and kg/m, and includes unused $\mechanical{A}$, $\mechanical{v}$, $\mechanical{\rho}_{\min}$, $\mechanical{\rho}_{\max}$, $L,H$ (membrane) and $r,a$; keep only symbols used here with one meaning each. **Fixed:** Rebuilt the table: removed u (Pa), A, v, rho_min/max, H, r, a, T(x,t); kept one rho (kg/m^3, rod) and rho_0 (kg/m); added L and omega_n'
- [[#N0471|N0471]] The wave equation on a line and a finite string: In "Fundamental mode and higher modes", the displayed factor $\sin(n\pi x/L)\sin(n\pi ct/L)e^{-\beta(n\pi/L)^2t}$ does not solve $u_{tt}=c^2u_{xx}-\beta u_t$; show the actual underdamped mode $\sin(n\pi x/L)e^{-\beta t/2}\sin(\omega_n't+\theta_n)$ with $\omega_n'=\sqrt{(n\pi c/L)^2-\beta^2/4}$ and drop the conflicting $e^{-n^2t}$ remark. **Fixed:** Replaced it with the underdamped mode sin(n pi x/L)e^{-beta t/2}sin(omega_n' t+theta_n), omega_n'=sqrt((n pi c/L)^2-beta^2/4); removed the e^{-n^2 t} remark and its self-link
- [[#N0490|N0490]] Physical action and equations of motion: Time $t$, duration $\tau$, and angular frequency $\omega$ are wrapped in `\signal{}` although this is a particle-mechanics context where the vault's mechanical group is the natural choice; use `\mechanical{}` (or leave the time variable uncolored) consistently with the other mechanics notes. **Rejected:** Macro choice, not an error; the vault Classical Mechanics notes (for example the 04 Oscillations notes) also use \signal{} for t and omega, and the note is consistent internally
- [[#N0492|N0492]] Variational modeling of paths and surfaces: The Physical quantities table lists symbols from other notes ($R$ population, $\epsilon$ as a "rate ratio" although here $\epsilon$ is the variation parameter, $x,y$ ingredient amounts, $s$ protein surplus, $t$ iron surplus although $t$ is the integration variable, $T$ sampling period); rebuild it for $f$, $\eta$, $\epsilon$, $g$, $C$, $C_2$, $\lambda$, $\theta_i$. **Fixed:** Rebuilt the table with t (elapsed time), epsilon (variation parameter), lambda (Lyapunov exponent), theta_1, theta_2; omitted pure mathematical symbols f, eta, g, C, C_2 per the skill table rules
- [[#N0499|N0499]] Logistic-map bifurcations and numerical dynamics: The Physical quantities table gives $\beta$ two unrelated meanings (crowding coefficient in $\mathrm{s^{-1}}$, predator coefficient) although here $\beta$ is the dimensionless logistic parameter and also the Lorenz parameter; it lists $\epsilon$ as a "rate ratio" (here it is the perturbation size), and unused ingredient amounts $x,y$, protein surplus $s$, and $t$ as iron surplus; rebuild it and rename the Lorenz parameter (e.g. $b$) to remove the $\beta$ clash. **Fixed:** Rebuilt the table (beta dimensionless logistic parameter, epsilon perturbation size, t_0 sampling phase, Lorenz sigma, rho, b); renamed the Lorenz beta to b and added a one-line note
- [[#N0499|N0499]] Logistic-map bifurcations and numerical dynamics: In "Introduction to chaos", the predator–prey near-axis example is presented as an illustration of chaos, but a two-dimensional autonomous flow cannot be chaotic (Poincaré–Bendixson); state that this shows only local sensitivity near a separatrix, and that chaos needs at least three dimensions for flows (e.g. Lorenz) or one dimension for noninvertible maps. **Fixed:** Added sentences: it shows only local sensitivity near a separatrix; 2D autonomous flows cannot be chaotic; chaos needs 3D flows (Lorenz) or 1D noninvertible maps

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N0413 | [[Energy Conservation Example\|01 Ordinary Differential Equations/01 Worked Differential Equations/01 Examples/Energy Conservation Example]] | Analyzed | medium | yes | no | [[#N0413\|View]] |
| N0414 | [[Hamiltonian Flow Example\|01 Ordinary Differential Equations/01 Worked Differential Equations/01 Examples/Hamiltonian Flow Example]] | Analyzed | medium | yes | yes | [[#N0414\|View]] |
| N0415 | [[Laplace Transform Example\|01 Ordinary Differential Equations/01 Worked Differential Equations/01 Examples/Laplace Transform Example]] | Analyzed | low | no | no | [[#N0415\|View]] |
| N0416 | [[Series Expansion Example\|01 Ordinary Differential Equations/01 Worked Differential Equations/01 Examples/Series Expansion Example]] | Analyzed | low | yes | no | [[#N0416\|View]] |
| N0417 | [[Substitution Example\|01 Ordinary Differential Equations/01 Worked Differential Equations/01 Examples/Substitution Example]] | Analyzed | medium | no | no | [[#N0417\|View]] |
| N0418 | [[Algebraic Rules for Ordinary Differential Equations (ODE)\|01 Ordinary Differential Equations/01 Worked Differential Equations/Algebraic Rules for Ordinary Differential Equations (ODE)]] | Analyzed | low | no | no | [[#N0418\|View]] |
| N0419 | [[Solving Differential Equations\|01 Ordinary Differential Equations/01 Worked Differential Equations/Solving Differential Equations]] | Analyzed | low | no | no | [[#N0419\|View]] |
| N0420 | [[Types of Differentials\|01 Ordinary Differential Equations/01 Worked Differential Equations/Types of Differentials]] | Analyzed | medium | no | no | [[#N0420\|View]] |
| N0421 | [[14.01 Equation types\|01 Ordinary Differential Equations/14.01 Equation types]] | Analyzed | low | no | no | [[#N0421\|View]] |
| N0422 | [[14.02 Solutions and data\|01 Ordinary Differential Equations/14.02 Solutions and data]] | Analyzed | low | yes | no | [[#N0422\|View]] |
| N0423 | [[14.03 First-order methods\|01 Ordinary Differential Equations/14.03 First-order methods]] | Analyzed | low | yes | no | [[#N0423\|View]] |
| N0424 | [[14.04 Constant-coefficient equations\|01 Ordinary Differential Equations/14.04 Constant-coefficient equations]] | Analyzed | low | yes | no | [[#N0424\|View]] |
| N0425 | [[14.05 Harmonic equations\|01 Ordinary Differential Equations/14.05 Harmonic equations]] | Analyzed | low | yes | yes | [[#N0425\|View]] |
| N0426 | [[14.08 Verification and approximation\|01 Ordinary Differential Equations/14.08 Verification and approximation]] | Analyzed | low | yes | no | [[#N0426\|View]] |
| N0427 | [[Differential equations - Catalogue Guide\|01 Ordinary Differential Equations/Differential equations - Catalogue Guide]] | Analyzed | low | no | no | [[#N0427\|View]] |
| N0428 | [[First-order initial value problems\|01 Ordinary Differential Equations/First-order initial value problems]] | Analyzed | low | yes | no | [[#N0428\|View]] |
| N0429 | [[First-order solution methods\|01 Ordinary Differential Equations/First-order solution methods]] | Analyzed | low | yes | no | [[#N0429\|View]] |
| N0430 | [[Higher-order equations and initial-value data\|01 Ordinary Differential Equations/Higher-order equations and initial-value data]] | Analyzed | high | no | no | [[#N0430\|View]] |
| N0431 | [[Implicit equations and singular solutions\|01 Ordinary Differential Equations/Implicit equations and singular solutions]] | Analyzed | low | yes | no | [[#N0431\|View]] |
| N0432 | [[Linear equations and order reduction\|01 Ordinary Differential Equations/Linear equations and order reduction]] | Analyzed | low | no | no | [[#N0432\|View]] |
| N0433 | [[Ordinary differential equations - Overview\|01 Ordinary Differential Equations/Ordinary differential equations - Overview]] | Analyzed | low | no | no | [[#N0433\|View]] |
| N0434 | [[Power-series solutions and forcing methods\|01 Ordinary Differential Equations/Power-series solutions and forcing methods]] | Analyzed | high | yes | no | [[#N0434\|View]] |
| N0435 | [[14.06 Linear systems\|02 Linear Systems, Stability, and Phase Portraits/14.06 Linear systems]] | Analyzed | low | yes | yes | [[#N0435\|View]] |
| N0436 | [[14.07 Equilibria and stability\|02 Linear Systems, Stability, and Phase Portraits/14.07 Equilibria and stability]] | Analyzed | low | yes | no | [[#N0436\|View]] |
| N0437 | [[Constant-coefficient equations and systems\|02 Linear Systems, Stability, and Phase Portraits/Constant-coefficient equations and systems]] | Analyzed | medium | yes | no | [[#N0437\|View]] |
| N0438 | [[Dynamical systems and chaos - Catalogue Guide\|02 Linear Systems, Stability, and Phase Portraits/Dynamical systems and chaos - Catalogue Guide]] | Analyzed | low | no | no | [[#N0438\|View]] |
| N0439 | [[Flows and linear stability\|02 Linear Systems, Stability, and Phase Portraits/Flows and linear stability]] | Analyzed | low | yes | yes | [[#N0439\|View]] |
| N0440 | [[Iteration and invariant sets\|02 Linear Systems, Stability, and Phase Portraits/Iteration and invariant sets]] | Analyzed | medium | yes | yes | [[#N0440\|View]] |
| N0441 | [[Linear systems and matrix exponential calculations\|02 Linear Systems, Stability, and Phase Portraits/Linear systems and matrix exponential calculations]] | Analyzed | high | yes | no | [[#N0441\|View]] |
| N0442 | [[Linearization, phase portraits, and nonlinear maps\|02 Linear Systems, Stability, and Phase Portraits/Linearization, phase portraits, and nonlinear maps]] | Analyzed | high | yes | yes | [[#N0442\|View]] |
| N0443 | [[15.05 Eigenvalue problems\|03 Boundary-Value Problems and Eigenfunctions/15.05 Eigenvalue problems]] | Analyzed | low | yes | no | [[#N0443\|View]] |
| N0444 | [[15.07 Orthogonality and coefficients\|03 Boundary-Value Problems and Eigenfunctions/15.07 Orthogonality and coefficients]] | Analyzed | low | yes | yes | [[#N0444\|View]] |
| N0445 | [[Boundary eigenvalue problems\|03 Boundary-Value Problems and Eigenfunctions/Boundary eigenvalue problems]] | Analyzed | medium | yes | no | [[#N0445\|View]] |
| N0446 | [[Box central-field and oscillator eigenfunctions\|03 Boundary-Value Problems and Eigenfunctions/Box central-field and oscillator eigenfunctions]] | Analyzed | medium | yes | no | [[#N0446\|View]] |
| N0447 | [[Endpoint eigenvalues and Fourier orthogonality\|03 Boundary-Value Problems and Eigenfunctions/Endpoint eigenvalues and Fourier orthogonality]] | Analyzed | high | yes | no | [[#N0447\|View]] |
| N0448 | [[Fourier convergence and Sturm–Liouville examples\|03 Boundary-Value Problems and Eigenfunctions/Fourier convergence and Sturm–Liouville examples]] | Analyzed | high | yes | yes | [[#N0448\|View]] |
| N0449 | [[Weighted eigenfunctions and Rayleigh bounds\|03 Boundary-Value Problems and Eigenfunctions/Weighted eigenfunctions and Rayleigh bounds]] | Analyzed | high | yes | no | [[#N0449\|View]] |
| N0450 | [[15.01 Basic language\|04 Partial Differential Equations/15.01 Basic language]] | Analyzed | low | no | no | [[#N0450\|View]] |
| N0451 | [[15.02 Model equations\|04 Partial Differential Equations/15.02 Model equations]] | Analyzed | low | yes | yes | [[#N0451\|View]] |
| N0452 | [[15.03 Initial and boundary data\|04 Partial Differential Equations/15.03 Initial and boundary data]] | Analyzed | low | yes | no | [[#N0452\|View]] |
| N0453 | [[15.04 Separation of variables\|04 Partial Differential Equations/15.04 Separation of variables]] | Analyzed | low | yes | yes | [[#N0453\|View]] |
| N0454 | [[15.06 Superposition\|04 Partial Differential Equations/15.06 Superposition]] | Analyzed | low | no | no | [[#N0454\|View]] |
| N0455 | [[15.08 Well-posedness\|04 Partial Differential Equations/15.08 Well-posedness]] | Analyzed | low | yes | no | [[#N0455\|View]] |
| N0456 | [[15.09 Checks\|04 Partial Differential Equations/15.09 Checks]] | Analyzed | low | no | no | [[#N0456\|View]] |
| N0457 | [[Characteristics for first-order PDEs\|04 Partial Differential Equations/Characteristics for first-order PDEs]] | Analyzed | medium | yes | yes | [[#N0457\|View]] |
| N0458 | [[Classification and heat-equation examples\|04 Partial Differential Equations/Classification and heat-equation examples]] | Analyzed | high | yes | no | [[#N0458\|View]] |
| N0459 | [[Classification of second-order PDEs\|04 Partial Differential Equations/Classification of second-order PDEs]] | Analyzed | low | yes | no | [[#N0459\|View]] |
| N0460 | [[Fourier extensions and forced heat modes\|04 Partial Differential Equations/Fourier extensions and forced heat modes]] | Analyzed | high | yes | yes | [[#N0460\|View]] |
| N0461 | [[Heat equation, boundary data, and separation\|04 Partial Differential Equations/Heat equation, boundary data, and separation]] | Analyzed | high | yes | yes | [[#N0461\|View]] |
| N0462 | [[Insulated, periodic, and forced heat problems\|04 Partial Differential Equations/Insulated, periodic, and forced heat problems]] | Analyzed | high | yes | yes | [[#N0462\|View]] |
| N0463 | [[Laplace and Poisson boundary problems\|04 Partial Differential Equations/Laplace and Poisson boundary problems]] | Analyzed | low | yes | no | [[#N0463\|View]] |
| N0464 | [[Model error, random walks, and continuum limits\|04 Partial Differential Equations/Model error, random walks, and continuum limits]] | Analyzed | high | yes | yes | [[#N0464\|View]] |
| N0465 | [[Partial differential equations - Overview\|04 Partial Differential Equations/Partial differential equations - Overview]] | Analyzed | low | no | no | [[#N0465\|View]] |
| N0466 | [[Point sources and superposition\|04 Partial Differential Equations/Point sources and superposition]] | Analyzed | low | yes | no | [[#N0466\|View]] |
| N0467 | [[Rectangular and circular membrane eigenmodes\|04 Partial Differential Equations/Rectangular and circular membrane eigenmodes]] | Analyzed | high | yes | yes | [[#N0467\|View]] |
| N0468 | [[Schrödinger evolution and probability\|04 Partial Differential Equations/Schrödinger evolution and probability]] | Analyzed | low | yes | yes | [[#N0468\|View]] |
| N0469 | [[Separation of variables on a circular membrane\|04 Partial Differential Equations/Separation of variables on a circular membrane]] | Analyzed | low | yes | no | [[#N0469\|View]] |
| N0470 | [[Source and vortex reconstruction\|04 Partial Differential Equations/Source and vortex reconstruction]] | Analyzed | low | yes | no | [[#N0470\|View]] |
| N0471 | [[The wave equation on a line and a finite string\|04 Partial Differential Equations/The wave equation on a line and a finite string]] | Analyzed | high | yes | yes | [[#N0471\|View]] |
| N0472 | [[Travelling solitary waves\|04 Partial Differential Equations/Travelling solitary waves]] | Analyzed | low | yes | yes | [[#N0472\|View]] |
| N0473 | [[Wave diffusion and potential equations\|04 Partial Differential Equations/Wave diffusion and potential equations]] | Analyzed | low | yes | yes | [[#N0473\|View]] |
| N0474 | [[17.01 Functions and functionals\|05 Calculus of Variations/17.01 Functions and functionals]] | Analyzed | low | no | no | [[#N0474\|View]] |
| N0475 | [[17.02 Admissible variations\|05 Calculus of Variations/17.02 Admissible variations]] | Analyzed | low | no | no | [[#N0475\|View]] |
| N0476 | [[17.03 First variation\|05 Calculus of Variations/17.03 First variation]] | Analyzed | low | yes | no | [[#N0476\|View]] |
| N0477 | [[17.04 Euler–Lagrange equations\|05 Calculus of Variations/17.04 Euler–Lagrange equations]] | Analyzed | low | yes | no | [[#N0477\|View]] |
| N0478 | [[17.05 Boundary terms\|05 Calculus of Variations/17.05 Boundary terms]] | Analyzed | low | yes | no | [[#N0478\|View]] |
| N0479 | [[17.06 Several variables and fields\|05 Calculus of Variations/17.06 Several variables and fields]] | Analyzed | low | yes | no | [[#N0479\|View]] |
| N0480 | [[17.07 Constraints\|05 Calculus of Variations/17.07 Constraints]] | Analyzed | low | no | no | [[#N0480\|View]] |
| N0481 | [[17.08 Second variation\|05 Calculus of Variations/17.08 Second variation]] | Analyzed | low | no | no | [[#N0481\|View]] |
| N0482 | [[17.09 Changing the problem\|05 Calculus of Variations/17.09 Changing the problem]] | Analyzed | low | no | no | [[#N0482\|View]] |
| N0483 | [[Calculus of variations - Catalogue Guide\|05 Calculus of Variations/Calculus of variations - Catalogue Guide]] | Analyzed | low | no | no | [[#N0483\|View]] |
| N0484 | [[Calculus of variations - Overview\|05 Calculus of Variations/Calculus of variations - Overview]] | Analyzed | low | no | no | [[#N0484\|View]] |
| N0485 | [[Classical curve problems\|05 Calculus of Variations/Classical curve problems]] | Analyzed | medium | yes | yes | [[#N0485\|View]] |
| N0486 | [[Constraints and free endpoints\|05 Calculus of Variations/Constraints and free endpoints]] | Analyzed | low | no | no | [[#N0486\|View]] |
| N0487 | [[Fields of several variables\|05 Calculus of Variations/Fields of several variables]] | Analyzed | low | yes | no | [[#N0487\|View]] |
| N0488 | [[Functionals and stationary curves\|05 Calculus of Variations/Functionals and stationary curves]] | Analyzed | low | no | no | [[#N0488\|View]] |
| N0489 | [[Higher derivatives and coupled curves\|05 Calculus of Variations/Higher derivatives and coupled curves]] | Analyzed | low | yes | no | [[#N0489\|View]] |
| N0490 | [[Physical action and equations of motion\|05 Calculus of Variations/Physical action and equations of motion]] | Analyzed | low | yes | no | [[#N0490\|View]] |
| N0491 | [[Tests with first and second variations\|05 Calculus of Variations/Tests with first and second variations]] | Analyzed | low | yes | no | [[#N0491\|View]] |
| N0492 | [[Variational modeling of paths and surfaces\|05 Calculus of Variations/Variational modeling of paths and surfaces]] | Analyzed | high | yes | no | [[#N0492\|View]] |
| N0493 | [[Chaos in interval maps\|06 Bifurcations and Chaos/Chaos in interval maps]] | Analyzed | low | yes | yes | [[#N0493\|View]] |
| N0494 | [[Conjugacy and structural stability\|06 Bifurcations and Chaos/Conjugacy and structural stability]] | Analyzed | low | yes | no | [[#N0494\|View]] |
| N0495 | [[Dimensions of attractors\|06 Bifurcations and Chaos/Dimensions of attractors]] | Analyzed | low | yes | no | [[#N0495\|View]] |
| N0496 | [[Entropy and Lyapunov exponents\|06 Bifurcations and Chaos/Entropy and Lyapunov exponents]] | Analyzed | low | yes | no | [[#N0496\|View]] |
| N0497 | [[Invariant measures and ergodic averages\|06 Bifurcations and Chaos/Invariant measures and ergodic averages]] | Analyzed | low | yes | no | [[#N0497\|View]] |
| N0498 | [[Local and global bifurcations\|06 Bifurcations and Chaos/Local and global bifurcations]] | Analyzed | medium | yes | yes | [[#N0498\|View]] |
| N0499 | [[Logistic-map bifurcations and numerical dynamics\|06 Bifurcations and Chaos/Logistic-map bifurcations and numerical dynamics]] | Analyzed | high | yes | yes | [[#N0499\|View]] |
| N0500 | [[Manifolds and return maps\|06 Bifurcations and Chaos/Manifolds and return maps]] | Analyzed | low | yes | yes | [[#N0500\|View]] |
| N0501 | [[Markov chains and the logistic map\|06 Bifurcations and Chaos/Markov chains and the logistic map]] | Analyzed | low | yes | no | [[#N0501\|View]] |
| N0502 | [[Nonlinear evolution patterns and chaos\|06 Bifurcations and Chaos/Nonlinear evolution patterns and chaos]] | Analyzed | low | yes | yes | [[#N0502\|View]] |
| N0503 | [[Reconstructing dynamics from observations\|06 Bifurcations and Chaos/Reconstructing dynamics from observations]] | Analyzed | low | yes | no | [[#N0503\|View]] |
| N0504 | [[Routes to chaos\|06 Bifurcations and Chaos/Routes to chaos]] | Analyzed | low | yes | yes | [[#N0504\|View]] |

## Suggestions

### N0413

Note: [[Energy Conservation Example|Energy Conservation Example]]  
Priority: medium · Graph: yes · Manim: no

Short and readable energy-method derivation, but the phase formulas are quadrant-ambiguous and the note lacks frontmatter, TLDR, and a quantity table.

- [Correctness] Step 4: $\varphi_0=\arctan(x_0\omega/v_0)$ gives the wrong phase for $v_0<0$ and is undefined for $v_0=0$; for $x=A\sin(\omega t+\varphi_0)$ use $\varphi_0=\operatorname{atan2}(x_0\omega,\,v_0)$ (equivalently $\sin\varphi_0=x_0/A$, $\cos\varphi_0=v_0/(\omega A)$); likewise Step 3's $\varphi_0=\arcsin(x_0/A)$ only covers $v_0\ge0$.
- [Simplify] Step 3: replace "$\pm\omega t$" and "choose the sign consistent with $v_0$" by the single statement that $\sin(-\omega t+\varphi_0)=\sin(\omega t+\pi-\varphi_0)$, so one sign plus a correct phase covers all data.
- [Structure] Add the quoted frontmatter title, a TLDR callout, and a physical-quantity table ($m$, $k$, $\omega$, $A$, $\varphi_0$, $x_0$, $v_0$, $E$) as required by the vault skill.
- [Graph] Plot the potential $U(x)=\tfrac12kx^2$ with a horizontal line at $E=\tfrac12kA^2$ ($k=1$, $A=1$, $x\in[-1.5,1.5]$) marking the turning points $\pm A$, so Step 1's argument is visible.

### N0414

Note: [[Hamiltonian Flow Example|Hamiltonian Flow Example]]  
Priority: medium · Graph: yes · Manim: yes

Correct and compact matrix-exponential solution, but it skips the series step and calls an elliptical flow a rotation.

- [Correctness] Step 4: "The flow matrix above rotates the vector $\mathbf{u}$" is false unless $m\omega=1$; $\mathrm{e}^{At}$ is not orthogonal and moves $\mathbf{u}$ along an ellipse; it is a rotation only in the scaled coordinates $(x,\,p/(m\omega))$.
- [Simplify] Step 2: show the one-line reason, $\mathrm{e}^{At}=\cos(\omega t)I+\omega^{-1}\sin(\omega t)A$, obtained by splitting the exponential series into even and odd powers using $A^2=-\omega^2I$.
- [Example] Step 3: also read off $p(t)=-m\omega x_0\sin(\omega t)+p_0\cos(\omega t)$ so the reader sees both rows used.
- [Graph] Plot phase-space ellipses $p^2/(2m)+kx^2/2=H$ for $m=1$, $k=4$, $H\in\{0.5,1,2\}$, with $x$ on the horizontal and $p$ on the vertical axis.
- [Manim] Animate a cloud of initial points in the $(x,p)$ plane flowing under $\mathrm{e}^{At}$: each point travels its ellipse and the cloud keeps its area (Liouville), illustrating what "flow" means.
- [Structure] Add frontmatter title, TLDR, and a quantity table ($x$, $p$, $m$, $k$, $\omega$, $H$).

### N0415

Note: [[Laplace Transform Example|Laplace Transform Example]]  
Priority: low · Graph: no · Manim: no

Correct and clear three-step Laplace solution; only notation and context are missing.

- [Simplify] Unify notation: the equation uses $x''$ while the data use $\dot{x}(0)$, and the hub writes the transform as $\hat{x}(s)$ while this note writes $X(s)$; pick one convention.
- [Example] Step 3: quote the two pairs used, $\mathcal{L}\{\cos\omega t\}=s/(s^2+\omega^2)$ and $\mathcal{L}\{\sin\omega t\}=\omega/(s^2+\omega^2)$, so the factor $1/\omega$ in front of $v_0$ is explained.
- [Structure] Add frontmatter title and TLDR; a short remark that the method pays off for forced or discontinuous inputs (step forcing) would motivate it.

### N0416

Note: [[Series Expansion Example|Series Expansion Example]]  
Priority: low · Graph: yes · Manim: no

Correct recurrence derivation and resummation, clearly laid out.

- [Simplify] Step 4: state explicitly why $a_0=x_0$ and $a_1=v_0$ (evaluate $x$ and $\dot x$ at $t=0$) and show one induction step from the recurrence to the closed form $a_{2m}$.
- [Graph] Plot $\cos t$ together with its partial sums $S_N(t)$ for $N=2,4,8$ on $t\in[0,3\pi]$ ($\omega=1$, $x_0=1$, $v_0=0$) to show how the truncated series departs at large $t$.
- [Structure] Add frontmatter title and TLDR.

### N0417

Note: [[Substitution Example|Substitution Example]]  
Priority: medium · Graph: no · Manim: no

The first half is a clean worked solution, but the appended second half duplicates it with typos, a clashing symbol, and an inconsistent ansatz.

- [Correctness] Second section: the first derivative is written $\frac{\mathrm{d}x}{\mathrm{d}t^2}$ (should be $\frac{\mathrm{d}x}{\mathrm{d}t}$) and the last equation writes $\frac{\mathrm{d}^2x^2}{\mathrm{d}t^2}$ (should be $\frac{\mathrm{d}^2x}{\mathrm{d}t^2}$).
- [Correctness] Second section: the ansatz is stated as $x=A\cos(\Omega t)$ but then differentiated as $A\cos(\Omega t)+B\sin(\Omega t)$; the table omits $B$, calls $\Omega$ "Oscillation Frequency" (it is an angular frequency), and $\Omega$ duplicates the first section's $\omega$; the conclusion $\Omega^2=k/m$ is never stated.
- [Structure] Delete or merge the second section into the first; keep a single symbol $\omega$ and a corrected quantity table (fix "Phyical"), and add frontmatter title and TLDR.
- [Intuition] Step 1: explain why sine and cosine are natural guesses (functions whose second derivative is a negative multiple of themselves) instead of only asserting the trial.

### N0418

Note: [[Algebraic Rules for Ordinary Differential Equations (ODE)|Algebraic Rules for Ordinary Differential Equations (ODE)]]  
Priority: low · Graph: no · Manim: no

A plain formula reference for calculus rules; correct apart from one domain statement, with some generic commentary.

- [Correctness] Logarithmic derivatives: "$\frac{d}{dt}\ln f=f'/f$ applies whenever $f(t)$ stays away from zero" is wrong for $f<0$, where $\ln f$ is undefined; require $f>0$ or write $\frac{d}{dt}\ln|f|=f'/f$ for $f\neq0$ (matching the integral section's $\ln|f|$).
- [Simplify] Several one-line remarks are vague or misleading (for example $\sec^2t$ "often appears alongside linear forcing terms in Riccati equations", cosine integration "allowing energy terms to be written as perfect derivatives"); replace them with a one-line ODE example per rule or drop them.
- [Structure] Add the quoted frontmatter title and a TLDR, and use upright $\mathrm{d}$ consistently with the sibling notes.

### N0419

Note: [[Solving Differential Equations|Solving Differential Equations]]  
Priority: low · Graph: no · Manim: no

A clear hub listing five methods with links to the worked examples.

- [Links] The Hamiltonian example is linked as a wiki link while the other four use Markdown links with encoded paths; use one link style for all five, and align the Laplace notation $\hat{x}(s)$ with $X(s)$ used in the example.

### N0420

Note: [[Types of Differentials|Types of Differentials]]  
Priority: medium · Graph: no · Manim: no

A useful overview table of derivative operators, but it contains a wrong exterior-derivative formula, overstated claims, and lacks frontmatter; it also sits oddly in the ODE worked-examples folder.

- [Correctness] Exterior derivative: "$d\omega=\partial_\nu\omega_\mu\wedge dx^\nu\wedge dx^\mu$" wedges a function component; the correct form is $d\omega=\partial_\nu\omega_\mu\,dx^\nu\wedge dx^\mu$ (equivalently $\tfrac12(\partial_\nu\omega_\mu-\partial_\mu\omega_\nu)\,dx^\nu\wedge dx^\mu$).
- [Correctness] Covariant derivative key point: it is not "the unique derivative operator"; uniqueness holds only for the Levi-Civita connection (torsion-free and metric-compatible), so state that condition.
- [Correctness] Laplacian: "measures how a scalar deviates from its average value" holds for the Riemannian Laplacian, not for the Lorentzian d'Alembertian $\Box$ that the same section names; separate $\nabla^2$ (elliptic) from $\Box$ (wave operator).
- [Correctness] Table row for $u^\mu\nabla_\mu$ says a connection is required, but on scalars $u^\mu\nabla_\mu f=u^\mu\partial_\mu f=df/d\tau$ needs none; note that the connection enters only for tensors. The Lie derivative key point "captures changes due to coordinate motion" should read "changes relative to the flow of $v$".
- [Structure] Add frontmatter title and TLDR, and consider moving the note to a differential-geometry or vector-calculus folder; most rows (covariant, Lie, exterior) are not ODE material.

### N0421

Note: [[14.01 Equation types|14.01 Equation types]]  
Priority: low · Graph: no · Manim: no

Clear, correct, and well-structured classification lesson with good worked examples.

- [Example] Add a compact decision table (order, linear?, homogeneous?, autonomous?) for four sample equations, e.g. $y''+ty'=\sin t$, $y'=y^2$, $y'=(y/t)^2$, $y''+3y'=t$, so the classification is visible at a glance.

### N0422

Note: [[14.02 Solutions and data|14.02 Solutions and data]]  
Priority: low · Graph: yes · Manim: no

Clear and correct treatment of intervals, data, and existence and uniqueness with good counterexamples.

- [Graph] Plot $y=1/(1-t)$ on $t\in[-2,3]$ with a vertical asymptote at $t=1$, highlighting the branch $(-\infty,1)$ that solves the IVP $y(0)=1$.
- [Graph] Plot the branching solutions $y_a(t)$ of $y'=2\sqrt{|y|}$ for $a\in\{0,0.5,1,1.5\}$ and $y=0$ on $t\in[-1,3]$, all passing through $(0,0)$, to make non-uniqueness visible.

### N0423

Note: [[14.03 First-order methods|14.03 First-order methods]]  
Priority: low · Graph: yes · Manim: no

Clear and correct lesson on separation and integrating factors with verified worked examples.

- [Graph] Plot the slope field of $y'=y(1-y)$ on $t\in[-3,6]$, $y\in[-0.5,1.5]$ with the equilibria $y=0,1$ and the solution $y=1/(1+3e^{-t})$ through $(0,1/4)$.
- [Intuition] After the integrating-factor formula, add one sentence that $\mu$ is chosen exactly so that $\mu y'+\mu py$ is a product-rule derivative, i.e. $\mu'=p\mu$ is the design requirement, not a coincidence.

### N0424

Note: [[14.04 Constant-coefficient equations|14.04 Constant-coefficient equations]]  
Priority: low · Graph: yes · Manim: no

Clear and correct lesson on characteristic roots, repeated roots, and real forms.

- [Graph] Plot the three root cases on one figure for $t\in[0,4]$: $(1-2t)e^{2t}$ (repeated root, scaled or clipped), $e^{-t}(\cos2t+\tfrac12\sin2t)$ (complex pair), and $\cosh t$ (real roots), with the envelope $\pm\sqrt{5}/2\,e^{-t}$ for the complex case.
- [Intuition] Add a small sketch or table relating root location in the complex plane (real part sign, imaginary part) to growth, decay, and oscillation.

### N0425

Note: [[14.05 Harmonic equations|14.05 Harmonic equations]]  
Priority: low · Graph: yes · Manim: yes

Clear and correct lesson on damping cases, steady forcing, and resonance with an existing figure.

- [Graph] Add an amplitude-response plot $R(\Omega)=F/\sqrt{(\omega_0^2-\Omega^2)^2+4\gamma^2\Omega^2}$ for $\omega_0=1$, $F=1$, $\gamma\in\{0.05,0.2,0.5\}$, $\Omega\in[0,2.5]$, which also shows the peak shifting below $\omega_0$ as stated in the text.
- [Manim] Animate the forced damped solution $y_h+y_p$ from rest, showing the transient dying out and the curve locking onto the steady oscillation with phase lag.

### N0426

Note: [[14.08 Verification and approximation|14.08 Verification and approximation]]  
Priority: low · Graph: yes · Manim: no

Clear and correct note on residuals, Euler's method, and step-size stability; numbers check out.

- [Graph] Plot $e^t$ on $[0,1]$ with the Euler polygons for $h=1/2$ and $h=1/4$, so the endpoint errors $-0.468$ and $-0.277$ are visible.
- [Graph] Plot Euler iterates for $y'=-ay$ with $a=1$ and $h\in\{0.5,1.5,2.5\}$ over 10 steps to show decay, oscillating decay, and growth.

### N0427

Note: [[Differential equations - Catalogue Guide|Differential equations - Catalogue Guide]]  
Priority: low · Graph: no · Manim: no

Clear learning-route hub with correct examples and valid links.

- [Structure] The file starts with a UTF-8 BOM before the frontmatter; the vault convention is UTF-8 without BOM, so re-save it (same for the other catalogue lessons in this folder).

### N0428

Note: [[First-order initial value problems|First-order initial value problems]]  
Priority: low · Graph: yes · Manim: no

Clear, correct lesson on direction fields, existence, uniqueness, and Picard iteration.

- [Graph] Plot the direction field of $y'=x-y$ on $x,y\in[-2,3]$ with the isocline $y=x$ and the solution $y=x-1+2e^{-x}$ through $(0,1)$.
- [Graph] Plot the Picard iterates $1$, $1+x$, $1+x+x^2/2$, $1+x+x^2/2+x^3/6$ against $e^x$ on $[-1,2]$ to show convergence near $x_0$ and divergence of truncations far away.
- [Structure] Remove the leading UTF-8 BOM.

### N0429

Note: [[First-order solution methods|First-order solution methods]]  
Priority: low · Graph: yes · Manim: no

Clear and correct survey of separation, integrating factors, exact equations, and substitutions; all worked examples check out.

- [Graph] For the exact equation $(2xy+1)\,dx+x^2\,dy=0$, plot level curves $x^2y+x=C$ for $C\in\{-2,-1,0,1,2\}$ on $x\in[-3,3]$ to show solutions as level sets and the excluded line $x=0$.
- [Simplify] The note uses $\log$ while the sibling lessons use $\ln$; use one symbol across the folder.
- [Structure] Remove the leading UTF-8 BOM.

### N0430

Note: [[Higher-order equations and initial-value data|Higher-order equations and initial-value data]]  
Priority: high · Graph: no · Manim: no

Mathematically mostly correct, but it reads as a raw lecture transcription with course logistics, source-commentary, empty headings, and an unfinished example.

- [Structure] Remove the course logistics (office hours, midterm dates) and all meta-commentary about the handwritten source ("The final boxed line in the source omits...", "The source uses 'independent' for that second condition...", "one handwritten heading", "The Math 24 review lists...").
- [Example] Variation of parameters for $x^2y''-3xy'+3y=4x^7$ stops after the first equation; finish it: $W=2x^3$, $v_1'=-2x^5$, $v_2'=2x^3$, $y_p=x^7/6$, $y=x^7/6+C_1x+C_2x^3$ (or link to the completed version in Power-series solutions and forcing methods).
- [Simplify] Boundary-value section: the two paragraphs on $y''+4y=0$ with endpoints $0$ and $2\pi$ contradict each other in their data ($y(0)=-2$ vs $2$, $y(2\pi)=-2$ vs $3$); keep one clean trio: unique ($y(\pi/4)=10$), infinitely many (equal endpoint values), none (unequal endpoint values).
- [Structure] Empty heading "Intervals of validity" and the heading "Systems and the matrix exponential" with no matrix exponential; also substantial overlap with Linear equations and order reduction; merge or cross-link.
- [Links] Add links to [[14.04 Constant-coefficient equations]] and [[Linear equations and order reduction]] where the characteristic-equation and Wronskian material repeats.

### N0431

Note: [[Implicit equations and singular solutions|Implicit equations and singular solutions]]  
Priority: low · Graph: yes · Manim: no

Clear and correct treatment of implicit ODEs, Clairaut envelopes, and singular points.

- [Graph] Plot the Clairaut line family $y=Cx+C^2$ for $C\in\{-2,-1.5,\dots,2\}$ on $x\in[-4,4]$ together with the envelope $y=-x^2/4$; the tangency at $x=-2C$ is the key idea of the section.
- [Graph] Plot $y=(x-a)^2/4$ for several $a$ and $y=0$ for $p^2=y$ to show solutions touching the singular locus.
- [Structure] Remove the leading UTF-8 BOM.

### N0432

Note: [[Linear equations and order reduction|Linear equations and order reduction]]  
Priority: low · Graph: no · Manim: no

Clear and correct lesson; the reduction-of-order, variation-of-parameters, and missing-variable examples all verify.

- [Simplify] Reduction of order: show the intermediate first-order solution $w=v'=C\,e^{-\int p}/y_1^2$ before stating the $y_2$ formula, so the formula is derived rather than asserted.
- [Structure] Remove the leading UTF-8 BOM.

### N0433

Note: [[Ordinary differential equations - Overview|Ordinary differential equations - Overview]]  
Priority: low · Graph: no · Manim: no

Concise topic overview with valid links; serves its purpose.

- [Structure] Remove the leading UTF-8 BOM; otherwise no change needed.

### N0434

Note: [[Power-series solutions and forcing methods|Power-series solutions and forcing methods]]  
Priority: high · Graph: yes · Manim: no

The worked calculations are correct (recurrences, undetermined coefficients, Airy series), but the note is a raw transcription with repeated sections and frequent commentary about the handwriting.

- [Structure] Remove all handwriting meta-commentary (e.g. "The second derivative mark beside $a_1(t)$...", "The exponent at the top of the page appears positive", "The handwritten sine and cosine labels appear reversed", "The last handwritten line appears to say $c_{k+1}$") and merge the two duplicate $y'+y=0$ series sections and the two Airy sections.
- [Simplify] Reorder as: power series and Taylor review, ordinary vs singular points, the radius theorem, examples ($y'+y=0$, $y''+y=0$, Airy), then undetermined coefficients and variation of parameters; the forcing methods and the system rewrite of $u''+11u'+24u=t^2$ do not belong between series sections.
- [Intuition] State the radius guarantee explicitly: the series about an ordinary point converges at least up to the distance to the nearest (possibly complex) singular point, and use example 3 ($x=\pm i$, radius at least $1$ about $0$) to illustrate why complex singularities matter.
- [Simplify] Undetermined coefficients is introduced for $y''+p(x)y'+q(x)y=g(x)$; say it is a constant-coefficient method with forcing of exponential, polynomial, or sinusoidal type.
- [Graph] Plot the Airy-type solutions $y_1,y_2$ of $y''+xy=0$ on $x\in[-6,6]$ (oscillatory for $x>0$, monotone for $x<0$), computed from partial sums or numerically.

### N0435

Note: [[14.06 Linear systems|14.06 Linear systems]]  
Priority: low · Graph: yes · Manim: yes

Clear and correct (worked example, defective case, and variation of constants all check out); it only lacks a phase-portrait picture of the modes.

- [Graph] Add a phase portrait of the worked example $A=\begin{pmatrix}-2&1\\1&-2\end{pmatrix}$ on $[-2,2]^2$ with the eigenlines $y=x$ (rate $-1$) and $y=-x$ (rate $-3$) and the trajectory from $(2,0)$, which visibly bends onto the slow line $y=x$ as the difference mode dies out.
- [Manim] Animate a cloud of initial points flowing under $e^{tA}$ for the worked example, decomposing one point into its two eigen-components that shrink at rates $e^{-t}$ and $e^{-3t}$, so the "difference mode decays faster" sentence becomes visible.
- [Example] For the defective matrix $I+N$, add one sentence checking $e^{tA}=e^t(I+tN)$ against the direct solve ($y'=y$, then $x'=x+y$), and describe the resulting degenerate-node shape (trajectories tangent to the single eigenline).

### N0436

Note: [[14.07 Equilibria and stability|14.07 Equilibria and stability]]  
Priority: low · Graph: yes · Manim: no

Correct, well-motivated treatment of Lyapunov stability and linearization with a good figure and honest discussion of the non-hyperbolic case.

- [Graph] Add a native phase portrait of the worked example $x'=x-x^2$, $y'=-2y$ on $[-0.5,1.5]\times[-1,1]$, marking the saddle $(0,0)$, the node $(1,0)$, and trajectories with $x_0<0$ that escape to $x\to-\infty$, which illustrates the "local only" warning.
- [Intuition] In the zero-eigenvalue section add the sign picture for $x'=\pm x^3$ (arrows on the line) and note that $x'=-x^3$ is asymptotically stable but not exponentially so ($x\sim1/\sqrt{2t}$), which shows what the linearization misses.
- [Example] Add the 2D trace-determinant summary (both real parts negative iff $\operatorname{tr}J<0$ and $\det J>0$; $\det J<0$ gives a saddle), which lets readers classify Practice 1 without computing roots.

### N0437

Note: [[Constant-coefficient equations and systems|Constant-coefficient equations and systems]]  
Priority: medium · Graph: yes · Manim: no

Correct throughout (resonance, defective system, and practice answers verified), but it switches the independent variable between $x$ and $t$ and reuses letters in a way that can confuse.

- [Structure] The independent variable is $x$ in most sections but $t$ in the last one, and $m$ means both root multiplicity and system dimension while scalar unknowns $u,v$ sit next to the eigenvector $\mathbf v$; use $t$ throughout for systems and different letters (e.g. $n$, $\mathbf w$) to avoid the clashes.
- [Graph] Plot the resonant particular solution $-x\cos x/2$ for $x\in[0,30]$ with the envelope lines $\pm x/2$ next to a non-resonant response (e.g. $y''+y=\sin(0.8x)$, $y_p=\sin(0.8x)/0.36$), to show what "resonance" means beyond the algebra.
- [Intuition] In the resonance section, explain why multiplying by $x$ works using the operator factorization already introduced: $(D-1)(D-2)[xe^x]=(D-2)[e^x]=-e^x$.
- [Example] Verify $-x\cos x/2$ in the text (two lines: $y''=\sin x+x\cos x/2$, so $y''+y=\sin x$) instead of only asking the reader to.

### N0438

Note: [[Dynamical systems and chaos - Catalogue Guide|Dynamical systems and chaos - Catalogue Guide]]  
Priority: low · Graph: no · Manim: no

Clear, well-paced chapter guide with a sensible reading order and correct small examples.

- [Intuition] In the worked comparison, give the tent map formula explicitly ($T(x)=2x$ for $x\le1/2$, $2-2x$ otherwise) so the third rule is as concrete as the first two.

### N0439

Note: [[Flows and linear stability|Flows and linear stability]]  
Priority: low · Graph: yes · Manim: yes

Correct and carefully qualified (existence, uniqueness, blow-up, Lyapunov certificate), with a good exact saddle figure.

- [Graph] Plot the two counterexamples: the blow-up solution $x=1/(1-t)$ on $t\in[0,0.95]$, and the non-unique family $x(t)=(t-a)^2/4$ for $t\ge a$ (zero before) with $a=0,0.5,1,1.5$ on $t\in[0,3]$, showing several futures leaving one initial state.
- [Manim] Animate the flow map $\phi_t$ of the saddle $u'=-u$, $v'=2v$ acting on a small disc of initial states, which squeezes along $u$ and stretches along $v$ into a thin ellipse; this makes "flow" and "saddle" concrete.
- [Intuition] In the Lyapunov example, add the idea in one sentence: $V$ is a squared distance that strictly decreases along every trajectory, like energy in a damped system, so no eigenvalue computation is needed.

### N0440

Note: [[Iteration and invariant sets|Iteration and invariant sets]]  
Priority: medium · Graph: yes · Manim: yes

Correct and precise, but entirely verbal; cobweb pictures would make orbits, fixed points, and cycles immediate.

- [Graph] Add cobweb diagrams on $[0,1]$: $f(x)=(x+2)/3$ with the diagonal and the staircase from $x_0=0$ converging to $1$, and $g(x)=1-x$ from $x_0=1/4$ showing the closed square of the two-cycle.
- [Manim] Animate the cobweb construction step by step (vertical to the graph, horizontal to the diagonal) for $f(x)=x^2$ from $x_0=0.9$ and from $x_0=1$, showing convergence to $0$ versus the fixed endpoint, matching Practice 1.
- [Simplify] Rephrase the compactness sentence ("sequences cannot escape without a convergent subsequence") as the standard statement: every sequence in $X$ has a subsequence converging to a point of $X$ (for subsets of $\mathbb R^n$: closed and bounded).
- [Example] In the basin paragraph, give a concrete periodic-attractor example (orbits that approach a two-cycle $\{p,q\}$ while alternating, without converging to either point) so "approach a set, not a point" is illustrated.

### N0441

Note: [[Linear systems and matrix exponential calculations|Linear systems and matrix exponential calculations]]  
Priority: high · Graph: yes · Manim: no

Calculations are correct (Ex. 14, eigenpairs, diagonalization, adjugate, variation of constants all verified), but the transcription is fragmentary, repeats the same diagonalization example three times, and drifts into unrelated topics.

- [Structure] "Example 3" names two different things (the third-order equation and later the variation-of-constants problem with $A=\operatorname{diag}(1,2)$), and "The lecture returns to Example 1" refers to an Example 1 that is never shown; renumber or state Example 1 explicitly.
- [Structure] Merge the three passes over $A=\begin{pmatrix}4&-2\\1&1\end{pmatrix}$ ("A nondiagonal coefficient matrix", "Solving a system by diagonalization", "Review of diagonalization") into one derivation, and move the off-topic fragments (forced second-order equations, Laplace transform, power-series ratio test) to their own notes or remove them.
- [Example] Complete Exercise 25 instead of leaving it: at $t=0$ the Wronskian is $\det\begin{pmatrix}6&-3&2\\-1&1&1\\-5&1&1\end{pmatrix}=20$, and since $\operatorname{tr}A=0$ Abel's formula gives $W(t)=20$ for all $t$, so the three solutions are independent.
- [Simplify] Delete the remarks about the handwriting ("The opening matrix on this page appears to have $-1$", the margin adjugate with $-1$, "The initial-value list uses $y(0)$ twice") once the equations are settled; they distract from the mathematics.
- [Graph] Plot the phase portrait of $x'=4x-2y$, $y'=x+y$ on $[-3,3]^2$ (unstable node, eigenlines $y=x$ for $\lambda=2$ and $y=x/2$ for $\lambda=3$) with the trajectory $(3e^{2t}-2e^{3t},3e^{2t}-e^{3t})$ from $(1,2)$.
- [Intuition] In the repeated-eigenvalue example $\begin{pmatrix}4&1\\-1&2\end{pmatrix}$, show $e^{At}=e^{3t}(I+t(A-3I))$ since $(A-3I)^2=0$, so the reader sees the exponential still works without diagonalization.

### N0442

Note: [[Linearization, phase portraits, and nonlinear maps|Linearization, phase portraits, and nonlinear maps]]  
Priority: high · Graph: yes · Manim: yes

The linearizations, Jacobians, nondimensionalization, and logistic-map algebra are correct, but the note is a loosely ordered transcription with many scanned sketches and a quantities table copied from unrelated notes.

- [Correctness] The Physical quantities table lists $\beta$ twice with conflicting meanings ("Crowding coefficient, $\unit{s^{-1}}$" and "Predator effect coefficient, 1"), gives $\lambda$ as a Lyapunov exponent although here $\lambda$ is always a Jacobian eigenvalue or recurrence root, and contains rows for symbols that never occur in this note ($T$ sampling period, $x,y$ ingredient amounts in oz, $s$ protein surplus, $t$ iron surplus); rebuild it from the symbols actually used.
- [Correctness] Symbol clashes: $\beta$ is the predator-effect coefficient in $R'=\alpha R(1-\beta W)$ but also the logistic-map parameter $\beta=1+\alpha\Delta t$, and $\alpha$ is the rabbit growth rate, the multiplier in $y_n=\alpha y_{n-1}$, and the logistic rate; rename the map parameter (e.g. $r$) and the recurrence multiplier.
- [Example] Finish the example $x'=2x-y-x^2$, $y'=x-2y+y^2$: the Jacobian $\begin{pmatrix}2&-1\\1&-2\end{pmatrix}$ has $\lambda^2-3=0$, so $\lambda=\pm\sqrt3$ and the origin is a saddle.
- [Graph] Replace the scanned case figures 63–70 with native phase portraits of canonical matrices (e.g. $\operatorname{diag}(-1,-2)$, $\operatorname{diag}(1,2)$, $\begin{pmatrix}-0.2&-1\\1&-0.2\end{pmatrix}$, $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$), and plot the dimensionless predator–prey orbits as level curves of the conserved quantity $H=\epsilon(\bar R-\ln\bar R)+(\bar W-\ln\bar W)$ for $\epsilon=0.5$ on $(0,3]^2$.
- [Manim] Animate a cobweb for the logistic map $x_n=\beta x_{n-1}(1-x_{n-1})$ at $\beta=1$ (slow decay to $0$, the note's example), then $\beta=2.5$ (fixed point $0.6$) and $\beta=3.2$ (two-cycle), to show why discrete Euler steps can behave unlike the continuous logistic curve.
- [Structure] Remove the unfinished fragments (age-group population model, "$dp_1/dt=\alpha p_1+\beta p_2-r\ldots$", Fibonacci reminder) and the sentences describing handwriting errors, and order the material as Jacobian linearization, linear 2D classification, predator–prey analysis, difference equations.

### N0443

Note: [[15.05 Eigenvalue problems|15.05 Eigenvalue problems]]  
Priority: low · Graph: yes · Manim: no

Clear, correct comparison of Dirichlet, Neumann, periodic, and mixed endpoint conditions with a good figure.

- [Graph] Add a companion plot for the mixed problem $X(0)=0$, $X'(1)=0$: $\sin((n+\tfrac12)\pi x)$ for $n=0,1,2$ on $[0,1]$, showing the zero slope at the right end next to the Dirichlet modes of Fig. 15.2.
- [Intuition] Give the physical picture for each condition (fixed string end = Dirichlet, free end or insulated rod end = Neumann, ring = periodic), which explains why the mixed case is a "quarter-wave" mode.

### N0444

Note: [[15.07 Orthogonality and coefficients|15.07 Orthogonality and coefficients]]  
Priority: low · Graph: yes · Manim: yes

Correct and rigorous (coefficient calculation and projection argument verified), with a well-chosen worked example.

- [Graph] Plot $f(x)=x(1-x)$ with the one-term and two-term sine approximations $b_1\sin(\pi x)$ and $b_1\sin(\pi x)+b_3\sin(3\pi x)$ ($b_1=8/\pi^3\approx0.258$, $b_3=8/(27\pi^3)\approx0.0096$) on $[0,1]$, showing how fast the odd coefficients converge.
- [Manim] Animate the heat solution $u(x,t)=\sum b_ne^{-\kappa n^2\pi^2t}\sin(n\pi x)$ for $f=x(1-x)$, with the $n=3,5$ components shrinking much faster than $n=1$ so the profile relaxes to a pure sine.
- [Simplify] Define $\kappa$ (diffusivity) where the heat solution appears; it is used without introduction in this note.

### N0445

Note: [[Boundary eigenvalue problems|Boundary eigenvalue problems]]  
Priority: medium · Graph: yes · Manim: no

Correct and careful about regular versus singular problems; the weight-finding section is compact but dense.

- [Graph] Plot the sine partial sums of $f(x)=x$ on $[0,1]$ for $N=1,5,20$ with $c_n=2(-1)^{n+1}/(n\pi)$, showing interior convergence, the forced zero at $x=1$, and the Gibbs overshoot near the right end.
- [Example] Work the weight check $x^2y''+xy'+\lambda y=0$ on $[1,e]$ to the end: with $s=\ln x$ the eigenpairs are $\lambda_n=n^2\pi^2$, $y_n=\sin(n\pi\ln x)$, orthogonal with weight $1/x$.
- [Simplify] In "Find the weight before projecting onto modes", show the one-line verification that multiplying by $\mu$ gives $\mu ay''+\mu by'=(\mu ay')'$, since the condition $(\mu a)'=\mu b$ is otherwise unmotivated.

### N0446

Note: [[Box central-field and oscillator eigenfunctions|Box central-field and oscillator eigenfunctions]]  
Priority: medium · Graph: yes · Manim: no

Mathematically sound (hydrogen ground state, Hermite recursion, and ladder identities verified), but one terminology claim is wrong and the note has no picture of the modes.

- [Correctness] "The adjective linear describes its dependence on the unknown function" is incorrect: "linear harmonic oscillator" refers to the one-dimensional oscillator with a restoring force linear in displacement (potential $\propto x^2$); every equation in this note is linear in $\phi$, so linearity in the unknown cannot be what the adjective distinguishes.
- [Graph] Plot the potential $V=x^2$ on $[-4,4]$ with horizontal lines at $\varepsilon_n=2n+1$ for $n=0,1,2,3$ and each $\phi_n$ drawn offset on its level, showing $n$ nodes and the decay beyond the turning points $x=\pm\sqrt{2n+1}$.
- [Intuition] For the unit-cube degeneracy, add that a box with unequal, incommensurate side lengths removes it, which shows concretely that the degeneracy comes from symmetry.
- [Example] For the central field, add the next $\ell=0$ state for $V=-2/r$, $R=(1-r/2)e^{-r/2}$ with $\varepsilon=-1/4$ and one radial node, to show the pattern rather than a single exponential.

### N0447

Note: [[Endpoint eigenvalues and Fourier orthogonality|Endpoint eigenvalues and Fourier orthogonality]]  
Priority: high · Graph: yes · Manim: no

The eigenvalue cases and Fourier coefficients are correct, but the transcription has unfinished fragments, an incomplete Neumann case, and a quantities table describing models that are not in the note.

- [Correctness] The Physical quantities table lists $\mechanical{c}$ twice (viscous damping coefficient and wave speed) and describes "a slice of the conducting rod" and "distance along the wave and heat models", none of which appear in this note; drop the wave-speed row and the heat/wave wording.
- [Example] Finish the opening comparison for $y''+25y=\cos t$: $y_p=\cos t/24$; the IVP gives $C_1=23/24$, $C_2=1$ uniquely, whereas the boundary data $y(\pi/2)=1$, $y'(0)=5$ give $C_2=1$ and leave $C_1$ arbitrary (infinitely many solutions), which is exactly the point of contrasting IVPs and BVPs.
- [Structure] Complete "Zero derivative at both endpoints" with the positive case ($\lambda_n=(n\pi/L)^2$, $y_n=\cos(n\pi x/L)$), and either solve "Review of systems" (eigenvalues $\pm4$ of $\begin{pmatrix}3&1\\7&-3\end{pmatrix}$) or remove it.
- [Graph] Plot $f(x)=x$ on $[-3,3]$ with its periodic extension and the Fourier partial sums for $N=2$ and $N=10$, showing convergence inside $(-1,1)$ and the midpoint value $0$ at $x=\pm1$; also replace the scanned Fig. 1 with a native plot of $\sin(\pi x/L)$.
- [Simplify] Remove the sentences about the handwriting ("The handwritten denominators still show $n\pi$", "The distinction between $m$ and $n$ is implicit...") and the forced-vibration paragraph, which is unrelated to the eigenvalue topic.

### N0448

Note: [[Fourier convergence and Sturm–Liouville examples|Fourier convergence and Sturm–Liouville examples]]  
Priority: high · Graph: yes · Manim: yes

All computed coefficients are correct (step, piecewise, $|x|$, Bessel and Cauchy–Euler forms verified), but several examples stop before the answer and the structure is fragmentary.

- [Example] Finish the Cauchy–Euler problem: with $t=\ln x\in[0,\pi]$ and $Y(0)=Y(\pi)=0$ the eigenpairs are $\lambda_n=n^2$, $y_n=\sin(n\ln x)$, $n\ge1$, orthogonal with weight $1/x$.
- [Example] Finish the even examples: for $f=5-|x|$ on $[-2,2]$, $a_0=8$ and $a_n=8/(n^2\pi^2)$ for odd $n$ (zero for even $n$); the $6-|x|$ case has the same $a_n$ and $a_0=10$.
- [Graph] Plot the step function's partial sums $\tfrac12+\sum_{n\le N}b_n\sin(nx)$ for $N=1,5,25$ on $[-\pi,\pi]$ with the midpoint $1/2$ marked, showing the Gibbs overshoot of about $9\%$ of the jump that does not shrink with $N$.
- [Manim] Animate the step-function series by adding odd harmonics one at a time, with the overshoot spike narrowing but keeping its height, to separate pointwise convergence from the Gibbs phenomenon.
- [Intuition] Point out that Legendre ($p=1-x^2$ on $[-1,1]$) and Bessel ($p=x$ at $x=0$) are singular Sturm–Liouville problems because $p$ vanishes at an endpoint, which is why boundedness replaces boundary values there.
- [Structure] Fix the heading "4 on Sturm–Liouville problems" (presumably "Section 11.4") and the property list that starts at "2."; merge the duplicated conversion formulas for $p,q,r$.

### N0449

Note: [[Weighted eigenfunctions and Rayleigh bounds|Weighted eigenfunctions and Rayleigh bounds]]  
Priority: high · Graph: yes · Manim: no

The Rayleigh-quotient derivations, trial values ($12$, $10$, $\pi^2$), and density bounds are correct, but the note repeats the Sturm–Liouville setup several times, leaves its applications unfinished, and has a corrupted quantities table.

- [Correctness] The Physical quantities table lists $\mechanical{u}$ as "Pressure, Pa" (the note's $\mechanical{u}$ is string displacement) and has rows for thermal diffusivity $\thermal{k}$, membrane dimensions $L,H$, and radius $r,a$ that never occur; the $\mechanical{Q}$ row links to the "Theorems for regular Sturm–Liouville problems" section, but $\mechanical{Q}$ appears in the Exercise 4.4.2 part.
- [Correctness] Symbol clash for $\alpha$: in the opening string equation and the heat-rod equation $q=\alpha$, but in Exercise 4.4.2 $\alpha=\alpha_{\mathrm{line}}/\mechanical{\rho}_0$ and $q=\mechanical{\rho}_0\alpha$; also plain $T(t)$ is the time factor next to the tension $\mechanical{T}_0$. Use one meaning (e.g. $q=\alpha_{\mathrm{line}}$) and call the time factor $h(t)$ as later in the note.
- [Example] Finish the $\mechanical{c}^2(x)=1+4x^2(x-\tfrac12)^2$ exercise: on $[0,1]$, $1\le\mechanical{c}^2\le2$, so $\mechanical{\rho}=1/\mechanical{c}^2\in[1/2,1]$ and $\pi\le\sqrt{\lambda_1}\le\sqrt2\,\pi$, i.e. $3.14\le\omega_1\le4.44$.
- [Example] Note that the tent $u_{T1}=2u_{T2}$, so its quotient is also $12$ (the quotient is scale invariant), and finish the mixed example $\phi''+(\lambda-1)\phi=0$, $\phi(0)=\phi'(1)=0$: $\lambda_n=1+(n+\tfrac12)^2\pi^2$, so $\lambda_1=1+\pi^2/4\approx3.47$.
- [Graph] Plot the trial functions normalized to unit $L^2$ norm (tent, $x(1-x)$, $\sin\pi x$) on $[0,1]$ with their quotients $12$, $10$, $9.87$ in the legend, showing that trials closer to the true mode give tighter upper bounds.
- [Structure] Merge the three restatements of the regular Sturm–Liouville problem and Rayleigh quotient into one, fix the dangling "and 68" after the two wiki links, and make the property list start at 1.

### N0450

Note: [[15.01 Basic language|15.01 Basic language]]  
Priority: low · Graph: no · Manim: no

Clear, correct introduction to order, linearity, and homogeneity with a verified worked example and practice answers.

- [Example] In "Order and linearity", add one quasilinear example (e.g. $u_t+uu_x=0$ is nonlinear but first order and linear in its highest derivative) and link to [[Characteristics for first-order PDEs]], so the linear/quasilinear/fully nonlinear spectrum is visible early.
- [Structure] The file starts with a UTF-8 BOM; the vault rule is UTF-8 without BOM, so re-save it without the BOM (formatter).

### N0451

Note: [[15.02 Model equations|15.02 Model equations]]  
Priority: low · Graph: yes · Manim: yes

Correct and well paced comparison of Laplace, heat, and wave problems; all worked answers check out.

- [Graph] In "What the comparison explains", plot the mode amplitudes $e^{-\kappa n^2t}$ for $n=1,2,3$ ($\kappa=1$, $t\in[0,1.5]$) next to $\cos(cnt)$ for $n=1,2$ ($c=1$, $t\in[0,2\pi]$) to show decay versus oscillation.
- [Manim] Animate $u=e^{-\kappa t}\sin x$ and $u=(\cos ct+\tfrac2c\sin ct)\sin x$ side by side on $(0,\pi)$: the heat profile shrinks monotonically while the wave profile oscillates with constant amplitude.
- [Structure] The file starts with a UTF-8 BOM; re-save it without the BOM.

### N0452

Note: [[15.03 Initial and boundary data|15.03 Initial and boundary data]]  
Priority: low · Graph: yes · Manim: no

Precise and correct treatment of Dirichlet, Neumann, and periodic data, corner compatibility, and the Neumann integral condition.

- [Graph] Add a 2D plot for the compatibility check: $f(x)=x(1-x)$ and $\sin(\pi x)$ on $[0,1]$ with their second derivatives $-2$ and $-\pi^2\sin(\pi x)$, marking that only the latter vanishes at the endpoints.
- [Intuition] In "A Neumann integral condition", add the physical reading (in a steady state the total source must equal the net outward flux, otherwise the quantity accumulates forever), which makes the solvability condition memorable.
- [Structure] The file starts with a UTF-8 BOM; re-save it without the BOM.

### N0453

Note: [[15.04 Separation of variables|15.04 Separation of variables]]  
Priority: low · Graph: yes · Manim: yes

Correct, complete separation argument including all signs of $\lambda$, with a checked two-mode example.

- [Graph] Plot the worked solution $u(x,t)=3e^{-2\pi^2t}\sin(\pi x)-2e^{-18\pi^2t}\sin(3\pi x)$ on $[0,1]$ at $t=0,0.005,0.02,0.05$ to show the $n=3$ mode vanishing first.
- [Manim] Animate the same solution as the two mode components decay at different rates while their sum morphs into a pure $\sin(\pi x)$ shape.
- [Structure] The file starts with a UTF-8 BOM; re-save it without the BOM.

### N0454

Note: [[15.06 Superposition|15.06 Superposition]]  
Priority: low · Graph: no · Manim: no

Clear and correct; the inhomogeneous and nonlinear counterexamples are well chosen and verified.

- [Example] In "A prescribed source changes the solution set", finish the example by showing how to fix the boundary data: for $u_t-u_{xx}=1$ with zero endpoints on $(0,\pi)$, use the steady particular solution $u_p=x(\pi-x)/2$ instead of $u_p=t$, so $v=u-u_p$ has zero endpoint values.
- [Structure] The file starts with a UTF-8 BOM; re-save it without the BOM.

### N0455

Note: [[15.08 Well-posedness|15.08 Well-posedness]]  
Priority: low · Graph: yes · Manim: no

Rigorous and correct energy estimate and backward-heat counterexample; dense but appropriately so.

- [Graph] For "Failure of continuous dependence", plot $\|f_n\|_2=e^{-n^2T}\sqrt{\pi/2}$ and $\|u_n(T)\|_2=\sqrt{\pi/2}$ versus $n=1,\ldots,6$ (log scale, $T=0.1$) to make the amplification factor $e^{n^2T}$ visible.
- [Intuition] Add one sentence on why the backward heat equation is ill-posed (un-blurring: tiny high-frequency noise is amplified by $e^{n^2T}$), contrasting with forward smoothing.
- [Structure] The file starts with a UTF-8 BOM; re-save it without the BOM.

### N0456

Note: [[15.09 Checks|15.09 Checks]]  
Priority: low · Graph: no · Manim: no

Clear checklist with a correct complete verification and good counterexamples.

- [Structure] Turn the opening paragraphs of "What a full check contains" into a short numbered checklist (domain, residual, each boundary datum, initial data, initial velocity if any, corner regularity, uniqueness) that the worked example then follows step by step.
- [Structure] The file starts with a UTF-8 BOM; re-save it without the BOM.

### N0457

Note: [[Characteristics for first-order PDEs|Characteristics for first-order PDEs]]  
Priority: medium · Graph: yes · Manim: yes

Correct and compact, covering linear, quasilinear, and Hamilton–Jacobi characteristics, but the shock and inflow parts are terse and rely on one static figure.

- [Graph] Plot the characteristics $x=\xi+tg(\xi)$ for Burgers with $g(\xi)=-\tanh\xi$ for $\xi\in[-2,2]$, $t\in[0,1.5]$, marking the first crossing time $t_*=-1/\min g'=1$.
- [Manim] Animate the profile of $u_t+uu_x=0$ with smooth decreasing data steepening until the slope $g'/(1+tg')$ blows up at $t_*$, then show the shock moving with speed $(u_L+u_R)/2$.
- [Example] In "Quasilinear equations and characteristic crossing", add a Riemann example with numbers ($u_L=2$, $u_R=0$: shock speed $1$; reversed data: rarefaction $u=x/t$ for $0<x<2t$) so the shock/rarefaction sentences become concrete.
- [Graph] For "Pick the data where the characteristic starts", add a 2D $(x,t)$ diagram of the strip $0<x<1$ with the dividing line $x=ct$ separating the region fed by $g$ from the region fed by $h$.
- [Links] The source line links "Math 150" to "Model error, random walks, and continuum limits#Discrete walker rule"; say explicitly that this is the related discrete-walker derivation of transport, otherwise the link reads like a mislabeled citation.

### N0458

Note: [[Classification and heat-equation examples|Classification and heat-equation examples]]  
Priority: high · Graph: yes · Manim: no

A transcription that mixes Laplace-transform ODE material with PDE classification and the heat equation; the math is correct but several examples stop mid-calculation and the quantities table belongs to another note.

- [Correctness] The Physical quantities table lists $\mechanical{c}$ as "Viscous damping coefficient" ($\unit{N\,s\,m^{-1}}$) and $\mechanical{m}$, $\mechanical{x}$ as oscillator mass and displacement, none of which occur here; $\mechanical{c}$ is only the wave speed, so the damping row also creates a duplicate-symbol clash. Remove these oscillator rows.
- [Correctness] The $\thermal{y}$ row links to "#Changing the forcing at one point", but $\thermal{y}(\mechanical{x},\signal{t})$ is introduced in "Introduction to PDEs" (the $y$ in the forcing section is an ODE solution); also the same temperature is written $\thermal{y}$ there and $\thermal{u}$ from "Deriving the heat equation" on, so use one symbol.
- [Structure] Move the Laplace-transform sections ("Changing the forcing at one point", "Uniqueness of the inverse Laplace transform", "Laplace-transform practice. Example 1", "Practice problem 4") to the Laplace-transform notes, and delete the unheaded course-objectives list after Fig. 14; the title promises classification and heat examples only.
- [Example] Finish the stopped calculations: Example 1 gives $Y=1/(s-1)+3/(s-1)^3$, so $y=e^t(1+\tfrac32t^2)$; practice final problem 5 gives $A_n=(-1)^n\sin 4\cdot 2n\pi/(16-n^2\pi^2)$ ($A_1\approx0.776$, $A_2\approx0.405$, $A_3\approx-0.196$), hence $u=\sum A_ne^{-3(n\pi/4)^2t}\sin(n\pi x/4)$.
- [Graph] Plot the partial sums $\sum_{n=1}^{N}A_n\sin(n\pi x/4)$ for $N=1,3,10,40$ against $\sin x$ on $[0,4]$, showing interior convergence and the Gibbs overshoot near $x=4$ where $\sin4\ne0$.
- [Links] The PDE table here uses $B^2-4AC$ with mixed coefficient $B$, while [[Classification of second-order PDEs]] uses $2B$ and $B^2-AC$; add a one-line cross-reference noting the two conventions agree.

### N0459

Note: [[Classification of second-order PDEs|Classification of second-order PDEs]]  
Priority: low · Graph: yes · Manim: no

Correct and carefully caveated classification, with a clean rotation derivation of the discriminant test and a correct d'Alembert reduction.

- [Graph] Plot the type map of $yu_{xx}+u_{yy}=0$: shade $y>0$ elliptic and $y<0$ hyperbolic, and draw the real characteristics $x\pm\tfrac23(-y)^{3/2}=\text{const}$ in the hyperbolic half-plane.
- [Example] In "A coordinate change reveals the two directions", add a concrete case such as $b=2$, giving $3u_{\xi\xi}-u_{\eta\eta}=0$ (hyperbolic), and show its characteristic lines $\xi\pm\sqrt3\,\eta=\text{const}$.
- [Structure] The file starts with a UTF-8 BOM; re-save it without the BOM.

### N0460

Note: [[Fourier extensions and forced heat modes|Fourier extensions and forced heat modes]]  
Priority: high · Graph: yes · Manim: yes

Mathematically sound transcription (coefficients and integrations verified), but it is long, repetitive, full of handwriting remarks and malformed headings, and it has a wrong internal link and a foreign quantities table.

- [Correctness] Under "Term-by-term differentiation of Fourier series and the method of eigenfunction expansion", the sentence "The time-differentiation rule on [[#Eigenfunction expansion for the heat equation]]" points to the wrong heading; the rule is in "Time differentiation of a Fourier series".
- [Correctness] The Physical quantities table lists $\mechanical{u}$ as pressure "in the divergence-form example" (no such example here, and it clashes with $\mechanical{u}$ = wave displacement in the same table), plus rows that do not occur in this note: $\mechanical{\rho}$ in $\unit{kg/m^3}$, "$\mechanical{Q}$ in Exercise 4.4.2" with its link, $L,H$ membrane dimensions, and $r,a$. Rebuild the table from the symbols used.
- [Structure] Replace the malformed heading "##### )" and the two "**)**" lines with real section titles, delete the course-schedule table (March 7 to March 23), and merge the three repeated presentations of the Dirichlet sine-series heat solution and the two eigenfunction-expansion derivations into one each.
- [Simplify] The source term is written $\thermal{Q}'(x)$, which reads as a derivative of $\thermal{Q}$; rename it (e.g. $\thermal{q}(x)$), and finish the periodic step example with $a_0=\tfrac14$, $a_n=-\sin(n\pi/2)/(n\pi)$, $b_n=(\cos(n\pi/2)-\cos n\pi)/(n\pi)$.
- [Graph] Plot partial sums of the odd-extension series $\sum_{n\ \mathrm{odd}\le N}\frac{400}{n\pi}\sin(n\pi x/L)$ for $N=1,5,25$ on $[-L,2L]$ ($L=1$) with the square wave, showing the zero values at jumps and the Gibbs overshoot; beside it, the cosine series of $x$ (triangular wave) converging uniformly.
- [Manim] Animate the heat solution with $\thermal{f}=100$ on $(0,1)$: the square profile with its Gibbs ripples smooths quickly as high modes decay, leaving the $\frac{400}{\pi}e^{-\thermal{k}\pi^2t}\sin(\pi x)$ mode.

### N0461

Note: [[Heat equation, boundary data, and separation|Heat equation, boundary data, and separation]]  
Priority: high · Graph: yes · Manim: yes

Correct derivations and numbers (variable-conductivity profile and mode ratio $e^{-4}$ verified), but it is a loosely ordered transcription with symbol clashes, misdirected internal links, and a table copied from other notes.

- [Correctness] Symbol clash: $\thermal{\phi}$ is the heat flux ($\unit{W/m^2}$) in the derivation and the initial temperature in "Separation of variables" and "Separation of variables for the heat equation"; the table lists both. Rename the initial profile (e.g. $\thermal{f}$, already used later).
- [Correctness] Symbol clash: $\thermal{k}$ is defined as diffusivity $\thermal{k}_0/(\thermal{c}\mechanical{\rho})$ in "The heat equation" but used for conductivity in Fourier's law $\thermal{\phi}=-\thermal{k}\,\partial\thermal{u}/\partial x$ in the next part; write $\thermal{k}_0$ there.
- [Correctness] Two internal links point to unrelated sections: "Newton's law of cooling" refers to [[#The spatial eigenvalue problem]], and the steady-state remark cites the "source convention on [[#Newton's law of cooling and the initial condition]]", whereas the convention $-(\thermal{k}_0\thermal{u}')'=\thermal{Q}$ is in "Steady-state heat equation". Retarget or remove them.
- [Correctness] The Physical quantities table has rows for symbols not in this note: wave speed $\mechanical{c},\mechanical{v}$; string density $\mechanical{\rho}(x),\mechanical{\rho}_{\min},\mechanical{\rho}_{\max}$ in $\unit{kg\,m^{-1}}$ (clashing with $\mechanical{\rho}$ in $\unit{kg/m^3}$); membrane $L,H$ (clashing with the heat-transfer coefficient $\thermal{H}$) and radius $a$. Remove them.
- [Structure] Fix the headings "##### )", "##### B", "##### D" and the "**)**" fragments, drop course-admin lines ("Math 126" date, quantifier margin note), and rename "Steady-state temperatures", which actually redoes Dirichlet separation and never computes a steady state (it also says diffusivity is scaled to one but keeps $\thermal{k}$).
- [Graph] Plot the two steady profiles of the 100 cm rod, $20+x/10$ and $20+10\ln(1+x/600)/\ln(7/6)$, on $x\in[0,100]$, and in a second panel the partial sums of the $\thermal{u}(x,0)=100$ series at $\thermal{k}(\pi/L)^2t=0,0.05,0.5$.
- [Manim] Animate the uniform-initial-temperature solution decaying toward zero while a bar chart of the mode amplitudes $\frac{400}{n\pi}e^{-\thermal{k}(n\pi/L)^2t}$ ($n=1,3,5,7$) shrinks, showing why only the first mode matters once $\thermal{k}(\pi/L)^2t\gtrsim0.5$.

### N0462

Note: [[Insulated, periodic, and forced heat problems|Insulated, periodic, and forced heat problems]]  
Priority: high · Graph: yes · Manim: yes

The mathematics is correct, but the note is a page-by-page transcription with orphan headings, handwriting commentary, a course schedule, and the ring coefficients derived twice, which hides the three clean ideas (Neumann, periodic, subtract a profile).

- [Correctness] The Physical quantities table lists $L$, $H$ (rectangular membrane dimensions) and $r$, $a$ (membrane radius), which this note never uses, and omits $g(x)$ and the rod-length meaning of $L$ (and $2L$ for the ring); replace with the symbols actually used.
- [Structure] Remove the orphan headings `##### )` and the stray `**)**` lines, the February schedule table, and remarks such as "The handwriting labels..." and "The minus sign in the final handwritten margin..."; give each problem (Neumann rod, ring, periodic on $[0,L]$, nonhomogeneous Cases 1–3) its own heading.
- [Structure] The ring coefficients $a_0,a_m,b_m$ are derived twice ("Superposition on the ring" and again after the schedule); merge into one derivation, and state $a_m$ where only $b_m$ is currently given; the $f(x)=x$ example sits under the $[0,L]$ periodic paragraph but uses $[-L,L]$ modes, so move it to the ring section.
- [Intuition] Under "Zero eigenvalue" add that $A_0=\frac1L\int_0^L f\,dx$ is the conserved average temperature of an insulated rod (total heat cannot leave), so $u\to A_0$ as $t\to\infty$.
- [Graph] Plot the Neumann solution for $f(x)=x$ on $[0,1]$, $k=1$: $u=\tfrac12-\sum_{n\,\text{odd}}\frac{4}{n^2\pi^2}\cos(n\pi x)e^{-n^2\pi^2t}$ (20 terms) at $t=0,0.01,0.05,0.2$, relaxing to the mean $1/2$; overlay the Dirichlet case $A=0$, $B=1$ relaxing to the line $u_E=x$.
- [Manim] Animate the insulated rod profile flattening to its mean while the shaded area stays constant, then the Dirichlet rod relaxing to the equilibrium line $u_E(x)$, to contrast conserved heat with boundary-driven equilibrium.

### N0463

Note: [[Laplace and Poisson boundary problems|Laplace and Poisson boundary problems]]  
Priority: low · Graph: yes · Manim: no

Clear, carefully signed, and correct (compatibility condition, ball example, fundamental solution, and Green representation all check out); only small additions would help.

- [Graph] Plot the ball example $u(r)=\frac{s_0}{6}(a^2-r^2)$ for $a=1$, $s_0=6$ on $0\le r\le1$ next to the 1D answer $u=x(1-x)$ from Practice 1, showing source-induced curvature with zero boundary values.
- [Example] In "Harmonic functions and uniqueness", check the mean-value property for $u=x^2-y^2$ on a circle of radius $\rho$ about the origin (the average of $\rho^2\cos2\theta$ is $0=u(0)$), so the abstract statement gets a concrete instance.
- [Intuition] In "Fundamental solution and Green functions", interpret $G(\mathbf x,\mathbf y)$ as the response at $\mathbf x$ to a unit point source at $\mathbf y$ with a grounded boundary, and point to the method of images as the standard construction for a half-space or ball.

### N0464

Note: [[Model error, random walks, and continuum limits|Model error, random walks, and continuum limits]]  
Priority: high · Graph: yes · Manim: yes

The random-walk derivations of advection, diffusion, and advection–diffusion are correct, but the note mixes course logistics, a norms primer, and handwriting commentary, and its quantity table is copied from unrelated population and diet models.

- [Correctness] The Physical quantities table lists many symbols this note never uses ($R$, $\alpha$, $M$, $\beta$ twice with different meanings, $t_0$, $K$, $\delta$, $y_i$, ingredient amounts $x,y$, surpluses $s,t$, $a_i$, $d\theta_i/dt$) and defines $\tau$ as "Total population" although here $\tau=t$ is the moving-frame time; rebuild it from $\Delta x,\Delta t,c,D,U,C,f,g,h,z$.
- [Correctness] "The notes credit the model to Witten and give 1978 as the year of introduction": diffusion-limited aggregation was introduced by Witten and Sander in 1981 (Phys. Rev. Lett. 47, 1400); correct the attribution and year.
- [Structure] Remove office hours, homework-team notes, and handwriting remarks; split into "Measuring model error (metrics, norms, big-O fits)" and "Walkers to PDEs", or move the norms part to its own note, since the title promises continuum limits.
- [Structure] "Properties of the fundamental solution" starts its list at 2; make $f_t=(D/2)f_{xx}$ item 1. "Measuring dimension" stops before the result: add $d=\lim_{L\to0}\log N/\log(1/L)$ and the typical 2D DLA value $d\approx1.71$.
- [Graph] Plot the advection–diffusion kernel $C=e^{-(x-Ut)^2/(2Dt)}/\sqrt{2\pi Dt}$ for $U=1$, $D=1$ at $t=0.25,1,2$ on $-2\le x\le6$, and a log-log plot of $|s_n-3|$ for $s_n=(3n^2+2n)/(n^2+2)$, $n=1..1000$, with reference slope $-1$.
- [Manim] Animate a few hundred unbiased, then biased, walkers on a 1D grid with their histogram converging to the spreading (and drifting) Gaussian, showing where $D=(\Delta x)^2/\Delta t$ and $U=2Dz/\Delta x$ come from.

### N0465

Note: [[Partial differential equations - Overview|Partial differential equations - Overview]]  
Priority: low · Graph: no · Manim: no

A clear hub whose links all resolve, but it lists only the short 15.xx lessons and omits the longer worked notes in the same folder.

- [Links] Add a "Worked material" list linking the folder's long notes ([[Insulated, periodic, and forced heat problems]], [[The wave equation on a line and a finite string]], [[Rectangular and circular membrane eigenmodes]], [[Laplace and Poisson boundary problems]], [[Wave diffusion and potential equations]], [[Travelling solitary waves]], [[Schrödinger evolution and probability]], [[Model error, random walks, and continuum limits]]).

### N0466

Note: [[Point sources and superposition|Point sources and superposition]]  
Priority: low · Graph: yes · Manim: no

Correct and well organized (kernel, flux, and the two-source worked example all check); a field picture is the main missing piece.

- [Graph] Add a 2D streamline plot in the $xy$-plane for the worked example: equal strengths at $(\pm1,0)$, then strengths $+1$ and $-1$, on $[-3,3]^2$, showing the null point at the origin and the dipole pattern.
- [Intuition] In "Discrete and continuous source distributions", give the continuous potential $\phi=\frac1{4\pi}\iiint s(\mathbf y)/\|\mathbf x-\mathbf y\|\,dV_{\mathbf y}$ and note that superposing scalar potentials is easier than adding vectors.
- [Example] Add the far-field check for the opposite-strength pair: for $R\gg b$ the field decays like $R^{-3}$ (dipole), compared with $R^{-2}$ for a single source.

### N0467

Note: [[Rectangular and circular membrane eigenmodes|Rectangular and circular membrane eigenmodes]]  
Priority: high · Graph: yes · Manim: yes

The separation and Bessel material is correct, but the rectangular membrane is derived twice and the circular membrane three times, with handwriting remarks and inconsistent equation labels, so the single clean argument is hard to find.

- [Correctness] The Physical quantities table defines $\mechanical{u}$ as "Pressure" in Pa (here it is membrane displacement in m), lists $\mechanical{\beta}$ both as a damping coefficient (unused here) and as initial velocity, and lists unused $\mechanical{v}$; fix the rows to match this note.
- [Structure] Merge "Vibrating rectangular membrane", "Coefficients from the initial membrane velocity" and "Final exam study. Vibrating rectangular membrane" into one derivation, and the circular passes (incl. "Circular membrane review" and "Final exam study. Vibrating circular membrane") into one; drop the agenda table, the reused "Eq. (2)" labels, and handwriting remarks.
- [Simplify] Give the full circular coefficients once: $A_{0n}=\iint\alpha J_0\,dA/(2\pi\int_0^aJ_0^2r\,dr)$, $A_{mn}=\iint\alpha J_m\cos m\theta\,dA/(\pi\int_0^aJ_m^2r\,dr)$, $B_{mn}$ likewise with $\sin m\theta$, using $\int_0^aJ_m^2(z_{mn}r/a)r\,dr=\tfrac{a^2}{2}J_{m+1}^2(z_{mn})$; the note only shows the sine projection and never the $m=0$ factor $1/(2\pi)$.
- [Example] Finish "Quarter membrane": $g(0)=g(\pi/2)=0$ gives $g=\sin(2k\theta)$, $\mu=(2k)^2$, radial factor $J_{2k}(z_{2k,n}r/a)$; then compare disk frequency ratios $z_{mn}/z_{01}$ (1, 1.59, 2.14, 2.30, ...) with the string's integers to explain why drums sound inharmonic.
- [Graph] Plot $J_0,J_1,J_2$ on $0\le z\le15$ with zeros $z_{01}\approx2.405$, $z_{11}\approx3.832$, $z_{02}\approx5.520$ marked, plus 3D surfaces of disk modes $(0,1),(1,1),(0,2)$ and the square-membrane mode $(2,1)$ with $L=H=1$.
- [Manim] Animate disk modes $(0,1)$, $(1,1)$, $(0,2)$ as surfaces $J_m(z_{mn}r)\cos m\theta\cos(z_{mn}t)$ with nodal circles and diameters highlighted.

### N0468

Note: [[Schrödinger evolution and probability|Schrödinger evolution and probability]]  
Priority: low · Graph: yes · Manim: yes

Correct and careful (separation, real/imaginary system, current $J=2\operatorname{Im}(\bar\psi\psi_x)$, and two-mode interference all check); a visual of the interference term would add intuition.

- [Graph] Plot $|\psi|^2=\sin^2\pi x+\sin^22\pi x+2\sin\pi x\sin2\pi x\cos(3\pi^2t)$ on $[0,1]$ at $t=0$ and at the half period $t=1/(3\pi)$, showing the density moving from one half to the other while the area stays 1.
- [Manim] Animate the two-mode state: real and imaginary parts rotating at rates $\pi^2$ and $4\pi^2$ while $|\psi|^2$ sloshes between the halves with period $2/(3\pi)$, next to a single stationary mode with frozen density.
- [Intuition] In "Why the total squared integral is preserved", compute $J(1/2,t)$ for the two-mode state to show probability flowing across the midpoint at the interference frequency $3\pi^2$.

### N0469

Note: [[Separation of variables on a circular membrane|Separation of variables on a circular membrane]]  
Priority: low · Graph: yes · Manim: no

A compact, correct summary of the disk eigenproblem; a few numbers and a picture of the first zeros would make it concrete.

- [Example] Give $j_{0,1}\approx2.405$, $j_{1,1}\approx3.832$, $j_{2,1}\approx5.136$, $j_{0,2}\approx5.520$ and their ratios to $j_{0,1}$, so "frequencies set by zeros" becomes concrete.
- [Graph] Plot $J_0,J_1,J_2$ on $0\le z\le12$ with first zeros marked (shareable with [[Rectangular and circular membrane eigenmodes]]).
- [Links] Both source links use the alias "Math 126"; give them distinct descriptive aliases (e.g. "Sturm–Liouville problems", "Rectangular membrane").

### N0470

Note: [[Source and vortex reconstruction|Source and vortex reconstruction]]  
Priority: low · Graph: yes · Manim: no

Correct and clearly argued (Biot–Savart cross-product order, Coulomb gauge, and the worked decompositions check); a picture of the two parts would help.

- [Graph] Plot in the $z=0$ plane on $[-2,2]^2$ the field $(x-y,x+y)$ beside its source part $(x,y)$ and vortex part $(-y,x)$.
- [Example] Add a localized example where the integral formulas apply, e.g. a uniform vortex tube $\boldsymbol\omega=\omega_0\hat z$ for $r<a$, giving $\mathbf F_v=\tfrac{\omega_0}{2}(-y,x)$ inside and $\tfrac{\omega_0a^2}{2r^2}(-y,x)$ outside.
- [Intuition] In "Helmholtz decomposition and its limits", name the physical analogues (Coulomb's law for $-\nabla\phi$, Biot–Savart for $\nabla\times\mathbf A$) and link [[Point sources and superposition]].

### N0471

Note: [[The wave equation on a line and a finite string|The wave equation on a line and a finite string]]  
Priority: high · Graph: yes · Manim: yes

Correct core results (modal coefficients, amplitude–phase form, d'Alembert) are buried in a transcription that repeats the fixed-end solution four times, includes an unrelated forced-heat section, an inconsistent damping passage, and a stray link.

- [Correctness] The Physical quantities table lists $\mechanical{u}$ as "Pressure" in Pa alongside $\mechanical{u}$ as wave displacement, gives $\mechanical{\rho}$ twice with units kg/m³ and kg/m, and includes unused $\mechanical{A}$, $\mechanical{v}$, $\mechanical{\rho}_{\min}$, $\mechanical{\rho}_{\max}$, $L,H$ (membrane) and $r,a$; keep only symbols used here with one meaning each.
- [Links] "The notes mark Section 3.3.5 on [[Rectangular and circular membrane eigenmodes#Eigenvalue problem with Bessel functions|...]] as the start of the material for Midterm 2" links a Fourier-series section to an unrelated Bessel heading; remove the link and the midterm remark.
- [Correctness] In "Fundamental mode and higher modes", the displayed factor $\sin(n\pi x/L)\sin(n\pi ct/L)e^{-\beta(n\pi/L)^2t}$ does not solve $u_{tt}=c^2u_{xx}-\beta u_t$; show the actual underdamped mode $\sin(n\pi x/L)e^{-\beta t/2}\sin(\omega_n't+\theta_n)$ with $\omega_n'=\sqrt{(n\pi c/L)^2-\beta^2/4}$ and drop the conflicting $e^{-n^2t}$ remark.
- [Structure] Move "Modal equation for the forced heat problem" to [[Insulated, periodic, and forced heat problems]], and merge the repeated fixed-end derivations (first derivation, boxed restatement, two "Midterm study" sections) into one.
- [Graph] Plot the plucked string ($f$ a triangle peaked at $x=1/2$ with height 1, $g=0$, $L=c=1$, 30 terms) at $t=0,0.125,0.25,0.5$, plus the first three mode shapes $\sin(n\pi x)$.
- [Manim] Animate d'Alembert's solution: a Gaussian bump splitting into two half-height pulses, then the plucked string as two traveling halves reflecting (inverted) at the fixed ends.

### N0472

Note: [[Travelling solitary waves|Travelling solitary waves]]  
Priority: low · Graph: yes · Manim: yes

Clear and correct: every travelling-wave profile (KdV, focusing NLS, sine–Gordon kink, mKdV, BBM) verifies against its stated convention.

- [Graph] Plot KdV pulses $\tfrac c2\operatorname{sech}^2(\tfrac{\sqrt c}{2}z)$ for $c=1,4,9$ on $-10\le z\le10$ (taller is narrower), and the kink $4\arctan e^z$ with its derivative $2\operatorname{sech}z$.
- [Manim] Animate the exact KdV two-soliton solution ($c=4$ and $c=1$): the tall pulse overtakes the short one and both re-emerge with a phase shift, beside the naive sum of two single pulses, illustrating the solitary-wave versus soliton distinction.
- [Intuition] In "Korteweg–de Vries equation", add the particle analogy $(U')^2/2+V(U)=0$ with $V=U^3-cU^2/2$: the solitary wave is the homoclinic orbit leaving $U=0$ and turning at $U=c/2$.

### N0473

Note: [[Wave diffusion and potential equations|Wave diffusion and potential equations]]  
Priority: low · Graph: yes · Manim: yes

Well structured and correct; examples and checks are good, and only visuals and one contrast are missing.

- [Graph] Plot $e^{-\pi^2t}\sin\pi x+2e^{-4\pi^2t}\sin2\pi x$ at $t=0,0.01,0.05,0.1$ on $[0,1]$ (second mode dies first) and the heat kernel $e^{-x^2/(4t)}/\sqrt{4\pi t}$ at $t=0.05,0.2,1$.
- [Manim] Animate the same initial bump under the wave equation (splits into two half-height pulses) and the heat equation (spreads without splitting) side by side.
- [Intuition] In "Diffusion and the heat equation", contrast the heat kernel being positive everywhere for $t>0$ (infinite propagation speed) with the wave equation's finite domain of dependence $[x-ct,x+ct]$.

### N0474

Note: [[17.01 Functions and functionals|17.01 Functions and functionals]]  
Priority: low · Graph: no · Manim: no

Clear, correct, and well paced; the function-versus-functional distinction is made with good examples and checked practice answers.

- [Example] After "Worked example: same endpoint, different functionals", add the arc-length functional $\int_0^1\sqrt{1+y'^2}\,dx$ for $y_1=x$ ($\sqrt2$) and $y_2=x^2$ ($\approx1.479$) to show a geometric functional that the later chapters minimize.

### N0475

Note: [[17.02 Admissible variations|17.02 Admissible variations]]  
Priority: low · Graph: no · Manim: no

Clear and correct, with a useful figure and a careful treatment of linear versus nonlinear constraints.

- [Intuition] In "Constraints beyond endpoint data", add a one-line picture for the normalized family: on the "sphere" $\|y\|_2=1$ a straight line leaves the surface quadratically, just as a tangent line leaves a circle, which is why normalization is needed.

### N0476

Note: [[17.03 First variation|17.03 First variation]]  
Priority: low · Graph: yes · Manim: no

Correct and clear; the worked example (value $-1/4$ and exact expansion $11/12-\varepsilon/4+\varepsilon^2/6$) checks out.

- [Graph] Plot $j(\varepsilon)=J[x^2+\varepsilon x(1-x)]=\tfrac{11}{12}-\tfrac{\varepsilon}{4}+\tfrac{\varepsilon^2}{6}$ for $-1\le\varepsilon\le3$ with its tangent line at $\varepsilon=0$ (slope $-1/4$), so the first variation is visibly an ordinary derivative.
- [Example] Close the worked example by noting that the actual minimizer of this $J$ is $y=x^3/6+5x/6$ (from $y''=x$), so readers see where the descending direction leads.

### N0477

Note: [[17.04 Euler–Lagrange equations|17.04 Euler–Lagrange equations]]  
Priority: low · Graph: yes · Manim: no

Correct and well argued (fundamental lemma, total derivative warning, and the worked minimizer with $J=-1/24$ all check).

- [Graph] Plot $y_*=\tfrac12x(x-1)$ together with competitors $y_*+\varepsilon\sin(\pi x)$ for $\varepsilon=\pm0.1$ on $[0,1]$, annotated with their $J$ values, to show the stationary curve as the lowest member of a family.
- [Links] Add a pointer to the Beltrami identity in [[Functionals and stationary curves]] for $x$-independent integrands, since this note is the main Euler–Lagrange entry point of the 17.xx sequence.

### N0478

Note: [[17.05 Boundary terms|17.05 Boundary terms]]  
Priority: low · Graph: yes · Manim: no

Correct and clear, with a good separation of interior equation, natural condition, endpoint cost, and moving endpoints.

- [Graph] Plot the free-end minimizer $y=\tfrac12x^2-x$ beside the fixed-end minimizer $y=\tfrac12x(x-1)$ on $[0,1]$, showing the zero slope at $x=1$ that the natural condition produces.
- [Example] After the moving-endpoint formula, add the shortest-distance example (segment from a point to a line meets it at a right angle), as in [[Constraints and free endpoints]], so the transversality formula gets one concrete use here too.

### N0479

Note: [[17.06 Several variables and fields|17.06 Several variables and fields]]  
Priority: low · Graph: yes · Manim: no

Correct and clear (coupled pair, divergence-theorem step, and disk example all verify); it largely overlaps [[Fields of several variables]].

- [Graph] Plot the disk minimizer $u_*=1-x_1^2-x_2^2$ as a 3D surface over the unit disk (a paraboloid "membrane under uniform load").
- [Links] Cross-link [[Fields of several variables]] and [[Higher derivatives and coupled curves]], which cover the same material with different examples (minimal surfaces, weak form).

### N0480

Note: [[17.07 Constraints|17.07 Constraints]]  
Priority: low · Graph: no · Manim: no

Correct and clear; the fixed-integral example ($\lambda=-12$, $y_*=6x(1-x)$, $J=6$) and the circle multiplier $\lambda=-(u'^2+v'^2)$ check out.

- [Intuition] In "Pointwise constraints require local multipliers", add that $-\lambda=u'^2+v'^2$ is the squared speed, i.e. the multiplier is the centripetal "constraint force" needed to stay on the circle, which links to [[Physical action and equations of motion]].
- [Links] Cross-link [[Constraints and free endpoints]], which treats the same fixed-average example with the unhalved functional ($J=12M^2$), and say why the two values differ by a factor 2.

### N0481

Note: [[17.08 Second variation|17.08 Second variation]]  
Priority: low · Graph: no · Manim: no

Correct and clear, with a good saddle example, figure, and honest discussion of the non-sharp estimate.

- [Intuition] In "A sufficient estimate and its limits", state the sharp result: $\int_0^1\eta^2\le\pi^{-2}\int_0^1\eta'^2$ (Wirtinger), so zero is a strict minimum exactly for $c<\pi^2$ and the saddle example with $c=2\pi^2$ lies beyond this threshold; link [[Tests with first and second variations]] for the Jacobi-equation view.

### N0482

Note: [[17.09 Changing the problem|17.09 Changing the problem]]  
Priority: low · Graph: no · Manim: no

Clear and correct; the restricted-minimum example ($-\varepsilon/6+\varepsilon^2/6$) and the finite-dimensional analogue with figure make the point well.

- [Links] In "Valid reductions and approximation", link [[Numerical variational methods]] for the finite trial-family (Ritz/Galerkin) remark.

### N0483

Note: [[Calculus of variations - Catalogue Guide|Calculus of variations - Catalogue Guide]]  
Priority: low · Graph: no · Manim: no

A clear, correct entry guide with a good worked proof and nonexistence example; one link is broken.

- [Links] The index line links [[Planned Topics#10. Calculus of variations|the detailed catalogue]], but no note named "Planned Topics" exists in the vault (only a backup under `.temp`); remove or retarget the link.
- [Links] Mention that the 17.xx lessons and the catalogue lessons overlap pairwise (e.g. [[17.07 Constraints]] / [[Constraints and free endpoints]], [[17.08 Second variation]] / [[Tests with first and second variations]]) so readers do not work through both routes unknowingly.

### N0484

Note: [[Calculus of variations - Overview|Calculus of variations - Overview]]  
Priority: low · Graph: no · Manim: no

A concise hub; all links resolve.

- [Links] Add a short "Applications and further lessons" list linking [[Classical curve problems]], [[Physical action and equations of motion]], [[Variational modeling of paths and surfaces]], and [[Calculus of variations - Catalogue Guide]].

### N0485

Note: [[Classical curve problems|Classical curve problems]]  
Priority: medium · Graph: yes · Manim: yes

Correct throughout (Beltrami step, cycloid, $I=\sqrt2\pi$ versus $\sqrt{2\pi^2+8}$ for the chord), but the brachistochrone is presented entirely in reduced variables, so the physical meaning and a picture are missing.

- [Intuition] In "Brachistochrone as a weighted-length problem", state the physical origin in one line: from energy, $v=\sqrt{2gy}$, so $T=\int ds/v=\frac{1}{\sqrt{2g}}\int\sqrt{1+y'^2}/\sqrt y\,dx$, which is why $I$ differs from time by the constant $1/\sqrt{2g}$.
- [Graph] Plot the cycloid $X=\theta-\sin\theta$, $Y=1-\cos\theta$, $0\le\theta\le\pi$, the straight chord to $(\pi,2)$, and a circular arc through both points, with $Y$ pointing down, annotating $I=4.443$ and $5.267$.
- [Manim] Animate three beads released together at the origin sliding without friction along the chord, a circular arc, and the cycloid to $(\pi,2)$, with the cycloid bead arriving first; optionally add the tautochrone effect (beads started at different heights arrive at the bottom together).
- [Example] In "Isoperimetric problem", add a numerical comparison at $L=12$ for the equilateral triangle ($\approx6.93$), square ($9$), regular hexagon ($\approx10.39$), and circle ($\approx11.46$) to show polygons approaching the circle.

### N0486

Note: [[Constraints and free endpoints|Constraints and free endpoints]]  
Priority: low · Graph: no · Manim: no

Correct and clear (fixed-average example, natural condition, transversality, and the perpendicular-segment example all check), with a useful figure.

- [Links] Cross-link [[17.07 Constraints]] and [[17.05 Boundary terms]], which cover the same example and moving-endpoint formula with a halved functional, and note the resulting factor-2 difference in $J[y_*]$.

### N0487

Note: [[Fields of several variables|Fields of several variables]]  
Priority: low · Graph: yes · Manim: no

Correct and clear (square example with cost $4/3$, minimal-surface equation, weak form); a surface picture would help.

- [Graph] Plot the 3D saddle $u_*=x_1^2-x_2^2$ over the unit square as the Dirichlet-energy minimizer, and optionally a minimal surface such as Scherk's $u=\ln(\cos x_2/\cos x_1)$ on $|x_1|,|x_2|<1.2$ to contrast with the linear Laplace case.
- [Example] After the minimal-surface equation, add the catenoid as a non-graph minimal surface and link [[Variational modeling of paths and surfaces]], where it is derived as a surface of revolution.

### N0488

Note: [[Functionals and stationary curves|Functionals and stationary curves]]  
Priority: low · Graph: no · Manim: no

Clear and correct (worked minimizer with $J=-1/6$, Beltrami derivation, practice answers all check).

- [Example] After the Beltrami identity, add a one-line application (e.g. the shortest-path integrand $\sqrt{1+y'^2}$ gives $1/\sqrt{1+y'^2}=C$, hence straight lines) so the shortcut is used before it reappears in [[Classical curve problems]].

### N0489

Note: [[Higher derivatives and coupled curves|Higher derivatives and coupled curves]]  
Priority: low · Graph: yes · Manim: no

Correct and clear (cubic $3x^2-2x^3$ with $J=12$, coupled pair, parametric length all verify).

- [Graph] Plot $y_*=3x^2-2x^3$ and $y=x$ on $[0,1]$ to show how fixed zero end slopes force the smooth S-shaped bend (the "smoothstep" curve) versus the free-slope line.
- [Intuition] In "When the integrand uses curvature-like information", mention that $\int y''^2$ is the small-slope bending energy of an elastic beam (Euler–Bernoulli), giving the physical reason for clamped versus simply supported boundary conditions.

### N0490

Note: [[Physical action and equations of motion|Physical action and equations of motion]]  
Priority: low · Graph: yes · Manim: no

Correct and clear (oscillator, energy $0.04\,\mathrm J$, and the saddle threshold $\tau>\pi/\omega$ check); macro use for time is the only convention issue.

- [Correctness] Time $t$, duration $\tau$, and angular frequency $\omega$ are wrapped in `\signal{}` although this is a particle-mechanics context where the vault's mechanical group is the natural choice; use `\mechanical{}` (or leave the time variable uncolored) consistently with the other mechanics notes.
- [Graph] Plot $\delta^2S/(a^2)=\tfrac{\tau}{2}[m(n\pi/\tau)^2-k]$ against $\tau$ for $n=1,2$ with $m=2$, $k=8$ on $0.5\le\tau\le4$, marking the sign change of the $n=1$ curve at $\tau=\pi/2\approx1.571$ s.

### N0491

Note: [[Tests with first and second variations|Tests with first and second variations]]  
Priority: low · Graph: yes · Manim: no

Correct and clear, but its saddle example, Cauchy–Schwarz estimate, and fourth-order practice duplicate [[17.08 Second variation]] almost verbatim.

- [Graph] Plot the Jacobi solution $v=\sin(\sqrt c\,x)$ for $c=2\pi^2$ on $[0,1]$, marking its conjugate point $x=1/\sqrt2<1$, next to $c=\pi^2/2$ whose first zero $\sqrt2$ lies beyond the interval.
- [Intuition] Tie the two halves together: the Jacobi analysis shows zero is a strict minimum exactly when $\pi/\sqrt c>1$, i.e. $c<\pi^2$, which is the sharp version of the non-sharp estimate $c<2$.
- [Structure] Replace the duplicated material with a link to [[17.08 Second variation]] and keep this note's distinctive Legendre and Jacobi sections.

### N0492

Note: [[Variational modeling of paths and surfaces|Variational modeling of paths and surfaces]]  
Priority: high · Graph: yes · Manim: no

The Euler–Lagrange, straight-line, and catenary derivations are correct, but the note interleaves an unrelated Lyapunov-exponent project discussion, handwriting remarks, and a quantity table copied from population and diet models.

- [Correctness] The Physical quantities table lists symbols from other notes ($R$ population, $\epsilon$ as a "rate ratio" although here $\epsilon$ is the variation parameter, $x,y$ ingredient amounts, $s$ protein surplus, $t$ iron surplus although $t$ is the integration variable, $T$ sampling period); rebuild it for $f$, $\eta$, $\epsilon$, $g$, $C$, $C_2$, $\lambda$, $\theta_i$.
- [Structure] Move "Project meeting notes" (rover arm, finite-time Lyapunov estimate, MATLAB averaging) to the chaos material, e.g. [[Entropy and Lyapunov exponents]]; it does not belong under paths and surfaces, and remove grading and presentation remarks.
- [Example] Finish the symmetric catenoid: $2=C\cosh(1/C)$ has two roots, $C\approx1.697$ and $C\approx0.470$; the areas $2\pi C(1+\tfrac C2\sinh(2/C))$ are $\approx23.97$ and $\approx27.38$, versus $8\pi\approx25.13$ for two flat discs, so the shallow catenoid is the minimizer and the deep one is only stationary.
- [Intuition] Explain the $(0,0)$–$(1,1)$ failure and the existence threshold: $C\cosh(1/C)$ has minimum $\approx1.509$ (at $C\approx0.834$), so for half-separation 1 no catenoid exists if the end radius is below about $1.51$; the film then breaks into the Goldschmidt solution (two discs joined by an axis segment).
- [Graph] Plot the two catenary profiles $C\cosh(t/C)$ for $C=1.697$ and $C=0.470$ on $-1\le t\le1$ with end radius 2, and the function $C\cosh(1/C)$ against $C$ on $0.3\le C\le3$ with the horizontal line at 2 showing the two intersections.

### N0493

Note: [[Chaos in interval maps|Chaos in interval maps]]  
Priority: low · Graph: yes · Manim: yes

Rigorous and correct (Devaney properties for the tent map, the $2/5,4/5$ cycle, the conjugacy $h=\sin^2(\pi u/2)$, the logistic density, and the solenoid trapping all check), but it is abstract and has no picture of the dynamics.

- [Graph] Plot the tent map and $y=x$ on $[0,1]$ with the cobweb of the two-cycle $2/5\to4/5\to2/5$, and next to it $T^3$ (eight linear branches) to show how itinerary intervals of length $2^{-n}$ arise; add a histogram of 10^5 iterates of $4x(1-x)$ overlaid with $\rho(x)=1/(\pi\sqrt{x(1-x)})$.
- [Manim] Animate the stretch-and-fold action of the tent map on the interval (stretch to double length, fold at $1/2$) and two initially close points separating by a factor 2 per step until they are $O(1)$ apart.
- [Intuition] In "The tent map and symbolic histories", add the doubling-map analogy: in binary, $T$ acts essentially as a shift of digits (with a flip on $R$), so knowing $n$ more steps requires $n$ more bits of the initial condition; this makes sensitivity and the numerical-caution section immediate.

### N0494

Note: [[Conjugacy and structural stability|Conjugacy and structural stability]]  
Priority: low · Graph: yes · Manim: no

Correct and carefully qualified; the examples ($x/2$ vs $x/8$, $x'=x^2+\varepsilon$) are good, though the global theory paragraphs are dense.

- [Graph] Plot the phase lines of $x'=x^2+\varepsilon$ for $\varepsilon=-0.25,0,0.25$ (graphs of the right-hand side on $-1\le x\le1$ with equilibria marked) to show the non-robust change against the robust $x'=-x+\varepsilon x^2$.
- [Example] In "Robust flows", add a 2D contrast: the center $x'=y$, $y'=-x$ (not structurally stable, becomes a spiral under $x'=y+\varepsilon x$) versus the hyperbolic saddle, which is the classic picture of what structural stability rules out.

### N0495

Note: [[Dimensions of attractors|Dimensions of attractors]]  
Priority: low · Graph: yes · Manim: no

Correct and careful about box vs Hausdorff vs measure dimensions and about the Douady–Oesterlé bound; the Cantor-measure example nicely shows $D_1$ and $D_2$ depending on weights.

- [Graph] Plot $D_1(p)=H(p)/\log3$ and $D_2(p)=-\log(p^2+(1-p)^2)/\log3$ for $0<p<1$, with the box dimension $\log2/\log3$ as a horizontal line, showing $D_2\le D_1\le D_B$ with equality at $p=1/2$.
- [Example] Add a log-log box-counting plot of $\log N(\varepsilon)$ versus $\log(1/\varepsilon)$ for the Cantor set at $\varepsilon=3^{-n}$, $n=1..10$, with slope $0.6309$, to show how the definition is used in practice.

### N0496

Note: [[Entropy and Lyapunov exponents|Entropy and Lyapunov exponents]]  
Priority: low · Graph: yes · Manim: no

Correct and clearly separated (topological vs metric entropy, Lyapunov exponent definition and limits); an explicit nonuniform example would help.

- [Example] Add the logistic map at $r=4$: averaging $\log|4(1-2x)|$ against $\rho(x)=1/(\pi\sqrt{x(1-x)})$ gives $\lambda=\log2$, the same as the conjugate tent map, illustrating that the exponent survives a smooth-enough conjugacy.
- [Graph] Plot the Lyapunov exponent of the logistic map $x\mapsto rx(1-x)$ against $r$ on $2.8\le r\le4$ (1000 parameters, $10^4$ iterates after transients), with $\lambda=0$ marked, showing negative values in periodic windows and $\log2$ at $r=4$; link [[Routes to chaos]].

### N0497

Note: [[Invariant measures and ergodic averages|Invariant measures and ergodic averages]]  
Priority: low · Graph: yes · Manim: no

Clear and correct, with good finite examples contrasting ergodic and non-ergodic measures.

- [Graph] Plot the running time average $\overline a_N(x_0)$ of $a(x)=x$ for the doubling map (computed in exact rational or high precision, or via the logistic map at $r=4$ with $\int x\rho=1/2$) for $N=1..10^4$ and several $x_0$, converging to $1/2$, next to the two constant averages of the non-ergodic identity example.
- [Example] Add the logistic density $\rho(x)=1/(\pi\sqrt{x(1-x)})$ for $r=4$ as a continuous invariant measure that is not length, linking [[Chaos in interval maps]].

### N0498

Note: [[Local and global bifurcations|Local and global bifurcations]]  
Priority: medium · Graph: yes · Manim: yes

Correct normal forms and calculations (saddle-node, transcritical, pitchfork, Hopf, flip, homoclinic loop), but the note relies on prose where bifurcation diagrams and a phase portrait are the natural explanation.

- [Graph] Plot the three scalar bifurcation diagrams (equilibria vs $\mu$ on $-1\le\mu\le1$, solid for stable, dashed for unstable) for $\mu-x^2$, $\mu x-x^2$, and $\mu x-x^3$, and the Hopf diagram $r=\sqrt\mu$.
- [Graph] Plot the phase portrait of $u'=v$, $v'=u-u^3$ on $[-2,2]^2$ with the figure-eight homoclinic level $H=0$, and the same with $-0.2v$ damping to show the loops breaking.
- [Manim] Animate the Hopf bifurcation: phase portraits of $r'=\mu r-r^3$, $\theta'=1$ as $\mu$ goes from $-0.5$ to $0.5$, with the stable spiral turning into an unstable spiral surrounded by a growing limit cycle of radius $\sqrt\mu$.
- [Intuition] In "Local bifurcations of equilibria", add one sentence on how to recognize which normal form applies (conditions $f=f_x=0$ plus $f_\mu\ne0$, $f_{xx}\ne0$ for saddle-node; $f_\mu=0$, $f_{x\mu}\ne0$ for transcritical), so the zero-eigenvalue remark becomes operational.

### N0499

Note: [[Logistic-map bifurcations and numerical dynamics|Logistic-map bifurcations and numerical dynamics]]  
Priority: high · Graph: yes · Manim: yes

The logistic fixed-point and stability analysis is correct, but the note mixes it with course logistics, a birthday remark, an age-structured population model, Newton's method, Fibonacci, the Lorenz system, and gradient ascent, and its quantity table is copied from other models.

- [Correctness] The Physical quantities table gives $\beta$ two unrelated meanings (crowding coefficient in $\mathrm{s^{-1}}$, predator coefficient) although here $\beta$ is the dimensionless logistic parameter and also the Lorenz parameter; it lists $\epsilon$ as a "rate ratio" (here it is the perturbation size), and unused ingredient amounts $x,y$, protein surplus $s$, and $t$ as iron surplus; rebuild it and rename the Lorenz parameter (e.g. $b$) to remove the $\beta$ clash.
- [Correctness] In "Introduction to chaos", the predator–prey near-axis example is presented as an illustration of chaos, but a two-dimensional autonomous flow cannot be chaotic (Poincaré–Bendixson); state that this shows only local sensitivity near a separatrix, and that chaos needs at least three dimensions for flows (e.g. Lorenz) or one dimension for noninvertible maps.
- [Structure] Remove the schedule, birthday, and handwriting remarks, and move the age-structured model, Newton's method, Fibonacci, and gradient ascent to their own notes; keep logistic fixed points, cobwebs, the two-cycle, and the Lyapunov sampling idea.
- [Example] Under "Example with $\beta=3.2$", give the explicit two-cycle $x_\pm=(\beta+1\pm\sqrt{(\beta-3)(\beta+1)})/(2\beta)\approx0.5130,0.7995$, its multiplier $-\beta^2+2\beta+4=0.16$, and the next doubling at $1+\sqrt6\approx3.449$, linking [[Routes to chaos]] where these are derived; quote the accumulation point as $3.5699$.
- [Graph] Plot the logistic bifurcation diagram ($2.5\le\beta\le4$, 1000 parameter values, last 200 of 1000 iterates) and cobwebs for $\beta=0.5,2,3.2,3.9$ from $x_0=0.1$.
- [Manim] Animate the cobweb for $\beta$ sweeping from 2.8 to 3.6, showing the fixed point losing stability, the 2-cycle and then the 4-cycle appearing, synchronized with a marker moving along the bifurcation diagram.

### N0500

Note: [[Manifolds and return maps|Manifolds and return maps]]  
Priority: low · Graph: yes · Manim: yes

Correct and clear; the nonlinear stable-manifold example $v=-u^2/3$ and the radial return map are well chosen.

- [Graph] Plot the phase portrait of $u'=-u$, $v'=v+u^2$ on $[-2,2]^2$ with the stable manifold $v=-u^2/3$, its tangent eigenspace $v=0$, and the unstable manifold $u=0$ highlighted.
- [Manim] Animate trajectories of $r'=-(r-1)$, $\theta'=1$ spiralling onto the unit circle, with dots marking successive crossings of the section $\theta=0$ converging to $r=1$, so the return map is seen as a strobe of the flow.

### N0501

Note: [[Markov chains and the logistic map|Markov chains and the logistic map]]  
Priority: low · Graph: yes · Manim: no

A short, correct bridge note (stationary distribution $2/3$, logistic fixed-point stability); it pairs two loosely related topics.

- [Graph] Plot $a_n$ for the two-state chain from $a_0=1$ and $a_0=0$ converging geometrically (ratio $1/4$) to $2/3$, beside logistic iterates for $r=2.5$ (oscillating convergence) and $r=3.2$ (2-cycle).
- [Links] Give the two source links distinct aliases (e.g. "Markov chains", "Difference equations") instead of the repeated "Math 150".

### N0502

Note: [[Nonlinear evolution patterns and chaos|Nonlinear evolution patterns and chaos]]  
Priority: low · Graph: yes · Manim: yes

Correct and well structured (Swift–Hohenberg and Kuramoto–Sivashinsky dispersion relations, amplitude equation $A'=rA-\tfrac34A^3$ all check); visuals would make the pattern-selection argument much more vivid.

- [Graph] Plot the growth rates $\sigma(k)=r-(1-k^2)^2$ for $r=-0.1,0,0.1$ and $\sigma(k)=k^2-k^4$ on $0\le k\le1.5$, with the allowed wavenumbers $k=2\pi n/L$ for $L=2\pi$ and $L=4\pi$ marked as dots.
- [Manim] Animate a numerical Kuramoto–Sivashinsky solution on $L=32\pi$ as a space–time plot building up row by row, from small random data to cellular structure and then irregular dynamics, to show what "chaotic evolution" of a PDE looks like.
- [Example] In "What changes when the equation is nonlinear?", add the explicit Burgers shock time: for $u_t+uu_x=0$ with $u(x,0)=-\tanh x$ the gradient blows up at $t=1$ (characteristics $x=x_0-t\tanh x_0$ cross), linking [[Characteristics for first-order PDEs]].

### N0503

Note: [[Reconstructing dynamics from observations|Reconstructing dynamics from observations]]  
Priority: low · Graph: yes · Manim: no

Correct and careful about theorem hypotheses; the circle example is clear, but a chaotic example would show the method's real use.

- [Graph] Plot delay reconstructions $(x(t),x(t+\tau))$ of the Lorenz $x$-coordinate ($\sigma=10$, $\rho=28$, $b=8/3$) for a too-small, a good ($\tau\approx0.1$–$0.2$) and a too-large delay, next to the true $(x,z)$ projection.
- [Example] Add the circle case $\alpha=\pi/2$ versus $\alpha=0.05$ with observation noise of size $0.01$ to show numerically how the $1/\sin\alpha$ factor amplifies errors.

### N0504

Note: [[Routes to chaos|Routes to chaos]]  
Priority: low · Graph: yes · Manim: yes

Correct and well referenced (two-cycle formula, multiplier $-r^2+2r+4$, thresholds 3 and $1+\sqrt6$, bottleneck time $\pi/\sqrt\varepsilon$, Neimark–Sacker example), with an existing figure for the first doublings.

- [Graph] Add the full numerical logistic bifurcation diagram for $2.8\le r\le4$ with the period-3 window near $r\approx3.828$ marked, complementing the exact two-branch figure.
- [Manim] Animate type-I intermittency for the logistic map just below $r=1+\sqrt8\approx3.8284$: the time series shows long nearly period-3 laminar phases interrupted by bursts, with a cobweb of $f^3$ showing the narrow channel near the tangency.
- [Example] In "Period-doubling cascades", give the first thresholds $r_1=3$, $r_2\approx3.4495$, $r_3\approx3.5441$, $r_4\approx3.5644$ and the ratios of successive gaps ($\approx4.75$, $4.66$) to show convergence toward $4.6692$.
