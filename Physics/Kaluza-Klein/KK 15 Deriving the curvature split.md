---
title: "Deriving the curvature split"
document_type: "Self-contained study chapter"
---

> [!TLDR]
> The nonclosure of the shifted circular one-form generates field strength, and its contribution to higher-dimensional scalar curvature is the Maxwell quadratic term.

%% source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"; video_chapter: "A Miraculous Curvature Formula"; video_start: "02:49:03"; video_end: "03:11:47" %%

<!-- visual-source:start -->
## Geometric and field equations

Use natural units: the speed of light and reduced Planck constant are one. Greek indices run from 0 to 3; capital Latin indices run from 0 to 4. For spacetime calculations in this first section, use a mostly-minus metric: one positive time direction and four negative spatial directions. Euclidean distance examples are identified separately. The compact angle is dimensionless and has period two pi. Its physical radius has units of length. The scalar with subscript ang is the physical radius squared; it is not a dimensionless radion. The parameter xi is a dimensionless normalization of the mixed vector.

### The six electromagnetic components %% Video 02:49:20–02:53:20 %%

Define field strength as the antisymmetric derivative of the four-potential. Its independent components are

$$
\electric{F}_{\mu\nu}=\partial_\mu\electric{A}_\nu-\partial_\nu\electric{A}_\mu
=\begin{pmatrix}
0&\electric{E}_x&\electric{E}_y&\electric{E}_z\\
-\electric{E}_x&0&-\magnetic{B}_z&\magnetic{B}_y\\
-\electric{E}_y&\magnetic{B}_z&0&-\magnetic{B}_x\\
-\electric{E}_z&-\magnetic{B}_y&\magnetic{B}_x&0
\end{pmatrix}.
$$

Every independent derivative entry is

$$
\begin{aligned}
\electric{F}_{01}&=\partial_0\electric{A}_1-\partial_1\electric{A}_0=\electric{E}_x,\\
\electric{F}_{02}&=\partial_0\electric{A}_2-\partial_2\electric{A}_0=\electric{E}_y,\\
\electric{F}_{03}&=\partial_0\electric{A}_3-\partial_3\electric{A}_0=\electric{E}_z,\\
\electric{F}_{12}&=\partial_1\electric{A}_2-\partial_2\electric{A}_1=-\magnetic{B}_z,\\
\electric{F}_{13}&=\partial_1\electric{A}_3-\partial_3\electric{A}_1=\magnetic{B}_y,\\
\electric{F}_{23}&=\partial_2\electric{A}_3-\partial_3\electric{A}_2=-\magnetic{B}_x.
\end{aligned}
$$

The other entries follow from $\electric{F}_{\nu\mu}=-\electric{F}_{\mu\nu}$ and $\electric{F}_{\mu\mu}=0$ with no sum in the latter expression. The three electric entries and three magnetic entries form one spacetime tensor. This magnetic field is distinct from the earlier geometric mixed vector with the same letter. Raising both indices with the four-dimensional metric gives

$$
\begin{aligned}
\electric{F}_{\mu\nu}\electric{F}^{\mu\nu}
&=g^{\mu\alpha}g^{\nu\beta}\electric{F}_{\mu\nu}\electric{F}_{\alpha\beta}\\
&=2\left(|\magnetic{\mathbf B}|^2-|\electric{\mathbf E}|^2\right).
\end{aligned}
$$

in a local inertial frame. This is a Lorentz scalar: different inertial observers can disagree on the separate electric and magnetic fields while agreeing on this contraction. The component matrix identifies the mostly-minus potential convention; other potential conventions can arrange its signs differently while preserving the same physical invariant.

### From Riemann curvature to a scalar %% Video 02:54:00–02:58:20 %%

The rank-four Riemann tensor measures curvature. Contracting it gives the rank-two Ricci tensor, and contracting again gives scalar curvature. With the derivative order indicated by the semicolon notation,

$$
V^\mu{}_{;\alpha\beta}-V^\mu{}_{;\beta\alpha}
=-R^\mu{}_{\nu\alpha\beta}V^\nu.
$$

The derivative order in this semicolon notation must be kept when comparing conventions. The next contractions are

$$
R_{\alpha\beta}=R^\mu{}_{\alpha\mu\beta}
=\sum_{\mu=0}^{3}R^\mu{}_{\alpha\mu\beta},
\qquad
R=g^{\alpha\beta}R_{\alpha\beta}=R^\alpha{}_\alpha.
$$

The explicit four-dimensional contractions are

$$
\begin{aligned}
R_{\alpha\beta}&=R^0{}_{\alpha0\beta}+R^1{}_{\alpha1\beta}
+R^2{}_{\alpha2\beta}+R^3{}_{\alpha3\beta},\\
R&=R^0{}_0+R^1{}_1+R^2{}_2+R^3{}_3.
\end{aligned}
$$ Ricci curvature is symmetric in this setting, with ten independent four-dimensional components. Scalar curvature gives one number and carries no remaining directional index. The comparison with Einstein's equation is

$$
R_{\alpha\beta}-\frac12Rg_{\alpha\beta}
=8\pi\mechanical{G}\energy{T}_{\alpha\beta}.
$$

The complete Riemann tensor contains more information than the scalar used in the action. A contraction can vanish even when some curvature components do not.

### Constrain the possible vector contribution %% Video 02:59:00–03:06:20 %%

With the potential set to zero, the product metric gives $\widetilde R=R$. Three tasks remain: establish the field-strength form of the extra term, calculate its coefficient, and exclude mixed higher-derivative terms.

The gauge-invariance check is written out:

$$
\begin{aligned}
\electric{F}'_{\mu\nu}
&=\partial_\mu(\electric{A}_\nu+\partial_\nu\varepsilon)
-\partial_\nu(\electric{A}_\mu+\partial_\mu\varepsilon)\\
&=\electric{F}_{\mu\nu}
+\partial_\mu\partial_\nu\varepsilon-\partial_\nu\partial_\mu\varepsilon
=\electric{F}_{\mu\nu}.
\end{aligned}
$$

The scalar curvature has two derivatives in total: either one second derivative or a product of two first derivatives. In the derivative-counting argument, a squared field-strength contraction has the required order, but higher powers do not. The epsilon-tensor contraction of two field strengths is parity odd, while scalar curvature is parity even. A product of base curvature and field-strength squared would have too many derivatives for the Einstein–Hilbert expression. These considerations motivate the form; they do not by themselves determine the numerical coefficient.

### Calculate the coefficient at a simple point %% Video 03:06:40–03:11:40 %%

The connection and scalar-curvature formulas needed for the calculation are

$$
\widetilde\Gamma^A{}_{BC}
=\frac12\widetilde g^{AD}
\left(\partial_B\widetilde g_{DC}
+\partial_C\widetilde g_{DB}
-\partial_D\widetilde g_{BC}\right),
$$

$$
\begin{aligned}
\widetilde R=\widetilde g^{BC}\big(&
\partial_A\widetilde\Gamma^A{}_{BC}
-\partial_C\widetilde\Gamma^A{}_{BA}\\
&+\widetilde\Gamma^A{}_{AD}\widetilde\Gamma^D{}_{BC}
-\widetilde\Gamma^A{}_{CD}\widetilde\Gamma^D{}_{BA}\big).
\end{aligned}
$$

The connection has no torsion, so its two lower indices can be interchanged. To determine the field-strength coefficient, choose a flat base and constant field strength, with potential

$$
g_{\mu\nu}=\eta_{\mu\nu},
\qquad
\electric{A}_\mu=-\frac12\electric{F}_{\mu\nu}\mechanical{x}^\nu.
$$

At the origin the potential vanishes, while its first derivatives remain. Reconstructing the small index positions consistently with this definition gives

$$
\partial_\rho\widetilde g_{\mu\nu}=0,
\qquad
\partial_\rho\widetilde g_{44}=0,
\qquad
\partial_\rho\widetilde g_{\mu4}
=-\frac12\mechanical{\xi}\mechanical{\Phi}_{\mathrm{ang}}\electric{F}_{\mu\rho}.
$$

The mixed connection component is

$$
\widetilde\Gamma^\mu{}_{\nu4}
=\frac{\mechanical{\xi}\mechanical{\Phi}_{\mathrm{ang}}}{2}\electric{F}_\nu{}^\mu
=-\frac{\mechanical{\xi}\mechanical{\Phi}_{\mathrm{ang}}}{2}\electric{F}^\mu{}_\nu.
$$

The second derivatives of the potential-product part of the metric are still needed; vanishing first derivatives at the origin do not make the full metric flat. The local scalar calculation gives

$$
\widetilde R(0)=\frac{\mechanical{\xi}^{\,2}\mechanical{\Phi}_{\mathrm{ang}}}{4}
\electric{F}_{\mu\nu}\electric{F}^{\mu\nu},
\qquad
\widetilde R=R+\frac{\mechanical{\xi}^{\,2}\mechanical{\Phi}_{\mathrm{ang}}}{4}
\electric{F}_{\mu\nu}\electric{F}^{\mu\nu}.
$$

The result can also be derived by solving the torsion-free connection equations. The worked derivation below supplies the connection, expands its curvature, and performs the contractions explicitly.

![[kk-curvature-contractions.svg|**Fig. 15.1** The connection gives Riemann curvature; contractions give the Ricci tensor and scalar.]]

<!-- visual-source:end -->

## Length-coordinate convention for the worked derivation

The following worked derivation uses a length coordinate y with period two pi times the reference radius and the mostly-plus metric. To translate the angular calculation above at fixed radius: set y equal to radius times angle, reverse the sign of the full metric, and reverse the sign of the potential. The length-valued coupling kappa equals radius times xi. The field-strength tensor reverses sign with the potential. The dimensionless radion Phi is the physical radius divided by the reference radius; the earlier squared-radius scalar equals reference radius squared times Phi squared. In this later notation, an index labeled 5 denotes the same compact direction labeled 4 in the first calculation; it does not add another coordinate. The algebra below defines its own variables before using them.

## Why the calculation is not a coincidence

The mixed metric sector describes a rule for moving around the circle while moving along the base. If that rule cannot be removed on a neighborhood by changing the circular origin, it has curvature. The electromagnetic field strength measures this failure.

For a fixed radius, take an orthonormal base coframe $e^a$ and define the fifth one-form

$$
e^5=\mathrm d\mechanical{y}+\mechanical{\kappa}\electric{A},
\qquad
\electric{A}=\electric{A}_\mu\,\mathrm d\mechanical{x}^\mu.
$$

The four-dimensional one-form $\electric{A}$ is dimensionless in the natural-unit convention. Each orthonormal coframe element has units of length. Lowercase Latin indices label an orthonormal frame, including one timelike base direction.

## Read the differential-form notation

A one-form assigns a linear number to a tangent displacement. A coframe is a basis of one-forms; its dual vector basis satisfies $e^A(E_B)=\delta^A{}_B$. The metric in this orthonormal basis is the diagonal Minkowski matrix, even when the coordinate components vary.

The wedge is an antisymmetric product: $e^a\wedge e^b=-e^b\wedge e^a$, so the wedge of one basis element with itself vanishes. For a scalar f, its exterior derivative is the one-form $\mathrm df=(\partial_\mu f)\mathrm dx^\mu$. Applying the exterior derivative twice gives zero because mixed partial derivatives commute while the wedge changes sign. For a one-form with coefficient functions, differentiate the coefficients and antisymmetrize:

$$
\mathrm d\electric{A}
=\partial_\mu\electric{A}_\nu\,\mathrm d\mechanical{x}^\mu\wedge\mathrm d\mechanical{x}^\nu
=\frac12\left(\partial_\mu\electric{A}_\nu-\partial_\nu\electric{A}_\mu\right)
\mathrm d\mechanical{x}^\mu\wedge\mathrm d\mechanical{x}^\nu.
$$

The factor one half removes the duplicate pair of index orders. The connection one-forms record how the frame changes between neighboring points. Cartan's first equation is the condition that parallel transport has no torsion; its second equation defines the curvature of that connection. These definitions supply the operations used in the calculation below.

## Differentiate the circular one-form

The exterior derivative satisfies the product rule and gives

$$
\mathrm de^5=\mechanical{\kappa}\,\mathrm d\electric{A}
=\frac{\mechanical{\kappa}}2\electric{F}_{ab}e^a\wedge e^b.
\tag{15.1}
$$

The wedge product is antisymmetric. This is why only the antisymmetric derivative of the potential appears. A pure gauge has vanishing exterior derivative and does not create this contribution.

## Solve the torsion-free connection equations

Let $\overline\omega^a{}_b$ be the base connection. The full connection obeys Cartan’s first equation,

$$
\mathrm de^A+\omega^A{}_B\wedge e^B=0.
$$

For constant radius, a compatible solution is

$$
\begin{aligned}
\omega^a{}_b&=\overline\omega^a{}_b
-\frac{\mechanical{\kappa}}2\electric{F}^a{}_be^5,\\
\omega^5{}_a&=\frac{\mechanical{\kappa}}2\electric{F}_{ab}e^b,\\
\omega^a{}_5&=-\frac{\mechanical{\kappa}}2\electric{F}^a{}_be^b.
\end{aligned}
\tag{15.2}
$$

You can check the fifth equation directly: the second connection term cancels equation (15.1). In the base equations, the two new terms containing a fifth one-form cancel each other. The remaining terms are exactly the base torsion-free equations.

These are orthonormal-frame connection one-forms. Their matrix indices are not new physical coordinates. For the coordinate version of a connection, see [[1.2 Covariant differentiation]].

## Contract the curvature

Cartan’s second equation is

$$
\Omega^A{}_B=\mathrm d\omega^A{}_B
+\omega^A{}_C\wedge\omega^C{}_B.
$$

The expansion and contractions are written out in the section “Expand the curvature before contracting.” Their result is

$$
\widetilde R_{ab}
=R_{ab}-\frac{\mechanical{\kappa}^{\,2}}2
\electric{F}_{ac}\electric{F}_b{}^c,
\qquad
\widetilde R_{55}
=\frac{\mechanical{\kappa}^{\,2}}4
\electric{F}_{ab}\electric{F}^{ab}.
\tag{15.3}
$$

Here the fifth frame direction is spacelike. Contract the first expression with the base frame metric and add the fifth component. The two quadratic coefficients combine as minus one half plus one quarter:

$$
R_5=R_4-\frac{\mechanical{\kappa}^{\,2}}4
\electric{F}_{ab}\electric{F}^{ab}.
\tag{15.4}
$$

This uses the Riemann-sign convention compatible with the action in [[KK 14 Reducing the Einstein-Hilbert action]]. Reversing the definition of the Riemann tensor reverses the curvature conventions too; signs must be compared as a whole.

## A complementary loop interpretation

A horizontal lift of a base path satisfies

$$
\mathrm d\mechanical{y}=-\mechanical{\kappa}\electric{A}.
$$

Around a small closed base loop, the net circular shift is

$$
\Delta\mechanical{y}
=-\mechanical{\kappa}\oint\electric{A}
=-\mechanical{\kappa}\int\mathrm d\electric{A}.
\tag{15.5}
$$

Stokes’ theorem relates the loop integral to field strength over the enclosed surface. The shift is defined modulo the circumference. The effect is the geometric counterpart of gauge holonomy. It is not a claim that every nonzero gauge field curves the base metric in the same way.

## Expand the curvature before contracting

Define the mathematical abbreviation $b_0=\mechanical{\kappa}/2$ only for this calculation. The symbol b₀ is a constant coefficient, not a new field. Let $\overline\nabla$ and $\overline\Omega^a{}_b$ be the derivative and curvature of the four-dimensional base. Frame indices use the base Minkowski metric to raise and lower indices.

The exterior derivative of the shifted circular one-form and the product of the two mixed connections supply separate quadratic terms. Substitution into Cartan's second equation gives

$$
\begin{aligned}
\Omega^a{}_b={}&\overline\Omega^a{}_b
-b_0\left(\overline\nabla_c\electric{F}^a{}_b\right)e^c\wedge e^5\\
&-b_0^2\electric{F}^a{}_b\electric{F}_{cd}e^c\wedge e^d
-b_0^2\electric{F}^a{}_c\electric{F}_{bd}e^c\wedge e^d,\\
\Omega^a{}_5={}&-b_0\left(\overline\nabla_c\electric{F}^a{}_b\right)e^c\wedge e^b
+b_0^2\electric{F}^a{}_c\electric{F}^c{}_b e^5\wedge e^b.
\end{aligned}
$$

In the first line, the derivative terms that involve the base connection combine into the covariant derivative of field strength. In the second line, the first quadratic term comes from differentiating the circular one-form, and the second comes from multiplying mixed connections. This keeps the two contributions separate until their coefficients are fixed.

Read the coefficients with $\Omega^A{}_B=\tfrac12\widetilde R^A{}_{BCD}e^C\wedge e^D$. Antisymmetry of the wedge supplies

$$
\begin{aligned}
\widetilde R^a{}_{bcd}
={}&R^a{}_{bcd}
-2b_0^2\electric{F}^a{}_b\electric{F}_{cd}\\
&-b_0^2\left(\electric{F}^a{}_c\electric{F}_{bd}
-\electric{F}^a{}_d\electric{F}_{bc}\right),\\
\widetilde R^a{}_{5b5}
={}&b_0^2\electric{F}^a{}_c\electric{F}_b{}^c.
\end{aligned}
$$

For the second equation, moving the fifth one-form to the right changes its sign, and antisymmetry gives $\electric{F}^c{}_b=-\electric{F}_b{}^c$. Contract the first and third indices. The base-index part contributes minus three copies of the quadratic contraction, and the fifth-index part restores one copy:

$$
\begin{aligned}
\widetilde R_{ab}
&=\widetilde R^c{}_{acb}+\widetilde R^5{}_{a5b}\\
&=R_{ab}-3b_0^2\electric{F}_{ac}\electric{F}_b{}^c
+b_0^2\electric{F}_{ac}\electric{F}_b{}^c\\
&=R_{ab}-2b_0^2\electric{F}_{ac}\electric{F}_b{}^c,\\
\widetilde R_{55}
&=\widetilde R^a{}_{5a5}=b_0^2\electric{F}_{ab}\electric{F}^{ab}.
\end{aligned}
$$

The mixed Ricci components involve a divergence of field strength. They do not enter the scalar contraction in the orthonormal frame because its base–fifth inverse-metric entries vanish. The scalar is therefore

$$
\begin{aligned}
R_5&=\eta^{ab}\widetilde R_{ab}+\widetilde R_{55}\\
&=R_4-2b_0^2\electric{F}_{ab}\electric{F}^{ab}
+b_0^2\electric{F}_{ab}\electric{F}^{ab}\\
&=R_4-\frac{\mechanical{\kappa}^{\,2}}4
\electric{F}_{ab}\electric{F}^{ab}.
\end{aligned}
$$

This calculation determines the coefficient rather than inferring it from symmetry or dimensional analysis. It also shows where the fixed-radius assumption is used: a variable radius adds another term to the derivative of the fifth coframe element, hence more connection and curvature terms.

%% Verification reference: C. N. Pope, Useful Formulae in Differential Geometry, eqs. 61–65, https://people.it.tamu.edu/~c-pope/formulae.pdf. The expansion here specializes to one Abelian circle and the stated mostly-plus convention. %%

## Self-check

1. Why does a pure gradient not contribute to equation (15.1)?
2. Check the scalar coefficient by contracting equation (15.3).
3. Why was a fixed radius important?

### Answers

1. The exterior derivative of an exact one-form vanishes: mixed derivatives cancel.
2. The base contraction contributes minus one half of the quadratic field strength and the fifth component contributes plus one quarter, leaving minus one quarter.
3. A varying radion adds derivatives of the radius field to both the connection and the scalar curvature. Those terms cannot be dropped in the unrestricted theory.

For curvature and its contractions, see [[1.9 Curvature]].

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}^\mu,\;\mechanical{y}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{\kappa}$ | $\unit{GeV^{-1}}$ | Metric coupling scale | Scale between the canonical electromagnetic potential and the metric shift. |
| $\electric{A}_\mu$ | $\unit{GeV}$ | Potential components | Canonically normalized electromagnetic potential components. |
| $\electric{A}$ | $1$ | Potential one-form | Potential components contracted with coordinate differentials. |
| $\electric{F}_{ab},\;\electric{F}^a{}_b,\;\electric{F}_{ac},\;\electric{F}_b{}^c$ | $\unit{GeV^2}$ | Electromagnetic field strength | Antisymmetric derivative of the gauge potential, in coordinate or frame components. |
| $R_4,\;R_5,\;R_{ab},\;\widetilde R_{ab},\;\widetilde R_{55}$ | $\unit{GeV^2}$ | Curvature fields | Ricci scalar, Ricci tensor, or Einstein tensor as indicated by the symbol. |
| $e^a,\;e^5,\;e^A$ | $\unit{GeV^{-1}}$ | Orthonormal coframe | Length-valued one-forms used to express the metric and connection. |
| $\omega^A{}_B,\;\overline\omega^a{}_b,\;\omega^a{}_b,\;\omega^5{}_a,\;\omega^a{}_5$ | $1$ | Connection one-forms | Torsion-free frame connection forms. |
| $\Omega^A{}_B$ | $1$ | Curvature two-form | Frame curvature form before contraction into curvature components. |
| $\mechanical{\Phi}_{\mathrm{ang}}$ | $\unit{GeV^{-2}}$ | Angular squared radius | Squared physical radius; distinct from the dimensionless radius ratio in the length-coordinate formulation. |
| $\electric{F}_{\mu\nu}$ | $\unit{GeV^2}$ | Field strength | Antisymmetric derivative of the angular potential. |
| $\electric{E}_x,\electric{E}_y,\electric{E}_z,\electric{\mathbf E}$ | $\unit{GeV^2}$ | Electric field | Electric entries of the field-strength matrix in a local inertial frame. |
| $\magnetic{B}_x,\magnetic{B}_y,\magnetic{B}_z,\magnetic{\mathbf B}$ | $\unit{GeV^2}$ | Magnetic field | Magnetic entries of the field-strength matrix; distinct from the geometric mixed vector. |
| $\mechanical{\xi}$ | $1$ | Angular normalization | Dimensionless factor relating the mixed vector to the four-potential. |
| $\mechanical{G}$ | $\unit{GeV^{-2}}$ | Gravitational constant | Four-dimensional Newton coupling in the reduced action. |
| $\energy{T}_{\alpha\beta}$ | $\unit{GeV^4}$ | Stress-energy tensor | Matter stress-energy in the angular formulation’s four-dimensional Einstein equation. |
| $\widetilde g_{AB}$ | — | Five-dimensional metric | Component units depend on the length-valued base coordinates and dimensionless angular coordinate. |
| $g_{\mu\nu},g_{ab}$ | $1$ | Angular base metric | Four-dimensional metric or positive spatial example, as identified beside the equation. |
| $R,\widetilde R$ | $\unit{GeV^2}$ | Scalar curvature | Four- and five-dimensional scalar curvatures in the angular convention. |
| $\widetilde\Gamma^A{}_{BC}$ | — | Angular connection | Coordinate connection; component units depend on whether each index denotes a length coordinate or the dimensionless circle angle. |
| $R^a{}_{bcd},\widetilde R^a{}_{bcd},\widetilde R^a{}_{5b5}$ | $\unit{GeV^2}$ | Riemann curvature components | Base and full-space frame components before Ricci contraction. |
