---
title: "Note Improvement Tracker – 01 Mathematics/05 Multivariable and Vector Calculus"
---

> [!TLDR]
> This note tracks the review of the 48 notes in `01 Mathematics/05 Multivariable and Vector Calculus`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 9 possible errors or notation conflicts. 9 of them are verified (9 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N0291|N0291]] 12.07 Multiple integrals: The source link after "Set the spherical bounds before integrating" points to \[\[Multiple integrals and changes of variables#Fubini's theorem\]\]. The matching material (the cone $z=\sqrt3\,r$, $\phi\le\pi/6$) is under "#Mass inside a cone and a sphere" or "#15.9 Triple integrals in spherical coordinates", so retarget it. **Fixed:** Retargeted it to #Mass inside a cone and a sphere.
- [[#N0295|N0295]] Multiple integrals and changes of variables: Symbol clash: $\rho$ is the spherical radial coordinate from "15.9" onward and also the mass density $\mechanical{\rho}(x,y,z)$ (and the table row). In "Mass inside a cone and a sphere" the density is written $3-\rho^2/5$ with $\rho$ as the radius. Rename the density (e.g. $\mechanical{\mu}$ or $\delta$) and update the table. **Fixed:** Renamed the density to \mechanical{\delta} in the mass formula, the cone example (delta=3-rho^2/5), and the table.
- [[#N0296|N0296]] Partial derivatives and constrained extrema: The physical-quantities table describes $\mechanical{\theta}$ as the "Angle swept by the rolling circle", but this note has no rolling circle. It also lists symbols the note never uses ($\mechanical{a}$ scalar, $\mechanical{v}$, $\mechanical{v}_0$, $\mechanical{x}$, $\mechanical{y}$ as "marked point" coordinates). Trim the table to $\mathbf r,\mathbf v,\mathbf a,\theta,\phi,\mathbf v_0$ components and $x_0,y_0,z_0$. **Fixed:** Removed unused scalar a, v, v0, x, y rows; theta row now describes only the azimuth.
- [[#N0296|N0296]] Partial derivatives and constrained extrema: Symbol clash: in "Tangent planes and linear approximation" the tangent-plane function is named $\pi(x,y)$, but the note also uses the constant $\pi$ (angles $3\pi/4$, $\pi/4$). Rename it, e.g. $L(x,y)$. **Fixed:** Renamed it L(x,y) in both uses.
- [[#N0307|N0307]] Gradient: The opening line "Measures the change of density of a vector field" and the title "Gradient ∇F" are wrong. The gradient acts on a scalar field $f$ and gives a vector field, as the table itself states. Change them to "Direction and rate of steepest increase of a scalar field" and "Gradient ∇f". **Fixed:** Title now "Gradient ∇f" (quoted); opening line says it gives the direction and rate of steepest increase of a scalar field; converted file to LF.
- [[#N0307|N0307]] Gradient: "Electric field as the gradient of voltage" is missing the sign. In electrostatics $\mathbf E=-\nabla V$. **Fixed:** Example now says negative gradient of the potential, E=-grad V, with \electric macros.
- [[#N0310|N0310]] Vector analysis and field theory - Catalogue Guide: The link \[\[Planned Topics#13. Vector analysis and field theory|the detailed catalogue\]\] is broken. "Planned Topics.md" exists only under `.temp/` backups, not in the vault. Remove the link or point it at an existing catalogue note. **Fixed:** Removed the sentence with the broken link, as already done in other catalogue guides; converted file to LF without BOM.
- [[#N0315|N0315]] 13.07 Integral theorems: The source link \[\[Line integrals, work, and conservative fields#Line integrals|Math 23\]\] under "Turn circulation into an area integral" points to the line-integral section. The Green's-theorem example with $(-y,x)$ is in \[\[Green’s theorem, surface integrals, and flux#16.4 Green's theorem\]\], so retarget it. **Fixed:** Retargeted it to \[\[Green’s theorem, surface integrals, and flux#16.4 Green's theorem\]\].
- [[#N0320|N0320]] Line integrals, work, and conservative fields: Work is an energy quantity, but it is written $\mechanical{W}$ here, while the companion note \[\[Line integrals and scalar potentials\]\] uses $\energy{W}$. Use $\energy{W}$ in the text and the table. **Fixed:** Replaced all four uses (three equations and the table row) with \energy{W}.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N0277 | [[12.01 Functions of several variables\|01 Partial Derivatives and Local Approximation/12.01 Functions of several variables]] | Analyzed | low | yes | no | [[#N0277\|View]] |
| N0278 | [[12.02 Partial derivatives\|01 Partial Derivatives and Local Approximation/12.02 Partial derivatives]] | Analyzed | low | yes | no | [[#N0278\|View]] |
| N0279 | [[12.03 Total derivatives\|01 Partial Derivatives and Local Approximation/12.03 Total derivatives]] | Analyzed | low | yes | no | [[#N0279\|View]] |
| N0280 | [[12.04 Multivariable chain rules\|01 Partial Derivatives and Local Approximation/12.04 Multivariable chain rules]] | Analyzed | low | no | no | [[#N0280\|View]] |
| N0281 | [[12.05 Second derivatives\|01 Partial Derivatives and Local Approximation/12.05 Second derivatives]] | Analyzed | low | yes | no | [[#N0281\|View]] |
| N0282 | [[12.09 Local inversion\|01 Partial Derivatives and Local Approximation/12.09 Local inversion]] | Analyzed | low | yes | yes | [[#N0282\|View]] |
| N0283 | [[Composite functions and coordinate changes\|01 Partial Derivatives and Local Approximation/Composite functions and coordinate changes]] | Analyzed | low | no | no | [[#N0283\|View]] |
| N0284 | [[Continuous functions on regions\|01 Partial Derivatives and Local Approximation/Continuous functions on regions]] | Analyzed | low | yes | no | [[#N0284\|View]] |
| N0285 | [[Higher differentials and local approximation\|01 Partial Derivatives and Local Approximation/Higher differentials and local approximation]] | Analyzed | low | yes | no | [[#N0285\|View]] |
| N0286 | [[Limits and continuity in several variables\|01 Partial Derivatives and Local Approximation/Limits and continuity in several variables]] | Analyzed | low | yes | yes | [[#N0286\|View]] |
| N0287 | [[Multivariable calculus - Overview\|01 Partial Derivatives and Local Approximation/Multivariable calculus - Overview]] | Analyzed | low | no | no | [[#N0287\|View]] |
| N0288 | [[Multivariable functions and domains\|01 Partial Derivatives and Local Approximation/Multivariable functions and domains]] | Analyzed | low | yes | no | [[#N0288\|View]] |
| N0289 | [[Partial changes and total differentials\|01 Partial Derivatives and Local Approximation/Partial changes and total differentials]] | Analyzed | low | yes | no | [[#N0289\|View]] |
| N0290 | [[12.06 Gradients and extrema\|02 Constrained Extrema and Multiple Integrals/12.06 Gradients and extrema]] | Analyzed | low | yes | yes | [[#N0290\|View]] |
| N0291 | [[12.07 Multiple integrals\|02 Constrained Extrema and Multiple Integrals/12.07 Multiple integrals]] | Analyzed | low | yes | no | [[#N0291\|View]] |
| N0292 | [[12.08 Coordinate substitution\|02 Constrained Extrema and Multiple Integrals/12.08 Coordinate substitution]] | Analyzed | low | no | yes | [[#N0292\|View]] |
| N0293 | [[Double and triple integrals\|02 Constrained Extrema and Multiple Integrals/Double and triple integrals]] | Analyzed | low | yes | no | [[#N0293\|View]] |
| N0294 | [[Extrema in several variables\|02 Constrained Extrema and Multiple Integrals/Extrema in several variables]] | Analyzed | low | yes | no | [[#N0294\|View]] |
| N0295 | [[Multiple integrals and changes of variables\|02 Constrained Extrema and Multiple Integrals/Multiple integrals and changes of variables]] | Analyzed | high | yes | yes | [[#N0295\|View]] |
| N0296 | [[Partial derivatives and constrained extrema\|02 Constrained Extrema and Multiple Integrals/Partial derivatives and constrained extrema]] | Analyzed | high | yes | yes | [[#N0296\|View]] |
| N0297 | [[13.01 Fields and domains\|03 Vector Fields, Gradients, Divergence, and Curl/13.01 Fields and domains]] | Analyzed | low | yes | no | [[#N0297\|View]] |
| N0298 | [[13.02 Gradient\|03 Vector Fields, Gradients, Divergence, and Curl/13.02 Gradient]] | Analyzed | low | yes | no | [[#N0298\|View]] |
| N0299 | [[13.03 Divergence\|03 Vector Fields, Gradients, Divergence, and Curl/13.03 Divergence]] | Analyzed | low | yes | no | [[#N0299\|View]] |
| N0300 | [[13.04 Curl\|03 Vector Fields, Gradients, Divergence, and Curl/13.04 Curl]] | Analyzed | low | yes | yes | [[#N0300\|View]] |
| N0301 | [[13.09 Coordinate expressions\|03 Vector Fields, Gradients, Divergence, and Curl/13.09 Coordinate expressions]] | Analyzed | low | no | no | [[#N0301\|View]] |
| N0302 | [[Curl and local circulation\|03 Vector Fields, Gradients, Divergence, and Curl/Curl and local circulation]] | Analyzed | low | yes | no | [[#N0302\|View]] |
| N0303 | [[Curl\|03 Vector Fields, Gradients, Divergence, and Curl/Curl]] | Analyzed | medium | no | no | [[#N0303\|View]] |
| N0304 | [[Directional derivatives and gradients\|03 Vector Fields, Gradients, Divergence, and Curl/Directional derivatives and gradients]] | Analyzed | low | yes | no | [[#N0304\|View]] |
| N0305 | [[Divergence and local expansion\|03 Vector Fields, Gradients, Divergence, and Curl/Divergence and local expansion]] | Analyzed | low | yes | no | [[#N0305\|View]] |
| N0306 | [[Divergence\|03 Vector Fields, Gradients, Divergence, and Curl/Divergence]] | Analyzed | medium | no | no | [[#N0306\|View]] |
| N0307 | [[Gradient\|03 Vector Fields, Gradients, Divergence, and Curl/Gradient]] | Analyzed | medium | no | no | [[#N0307\|View]] |
| N0308 | [[Nabla identities and curvilinear coordinates\|03 Vector Fields, Gradients, Divergence, and Curl/Nabla identities and curvilinear coordinates]] | Analyzed | low | no | no | [[#N0308\|View]] |
| N0309 | [[Scalar and vector fields\|03 Vector Fields, Gradients, Divergence, and Curl/Scalar and vector fields]] | Analyzed | low | no | no | [[#N0309\|View]] |
| N0310 | [[Vector analysis and field theory - Catalogue Guide\|03 Vector Fields, Gradients, Divergence, and Curl/Vector analysis and field theory - Catalogue Guide]] | Analyzed | low | no | no | [[#N0310\|View]] |
| N0311 | [[Vector calculus - Overview\|03 Vector Fields, Gradients, Divergence, and Curl/Vector calculus - Overview]] | Analyzed | low | no | no | [[#N0311\|View]] |
| N0312 | [[Vector functions and curves\|03 Vector Fields, Gradients, Divergence, and Curl/Vector functions and curves]] | Analyzed | low | yes | yes | [[#N0312\|View]] |
| N0313 | [[13.05 Parameterized curves and surfaces\|04 Line Integrals, Surface Integrals, and Integral Theorems/13.05 Parameterized curves and surfaces]] | Analyzed | low | yes | no | [[#N0313\|View]] |
| N0314 | [[13.06 Line and surface integrals\|04 Line Integrals, Surface Integrals, and Integral Theorems/13.06 Line and surface integrals]] | Analyzed | low | yes | no | [[#N0314\|View]] |
| N0315 | [[13.07 Integral theorems\|04 Line Integrals, Surface Integrals, and Integral Theorems/13.07 Integral theorems]] | Analyzed | low | yes | yes | [[#N0315\|View]] |
| N0316 | [[13.08 Potentials and path independence\|04 Line Integrals, Surface Integrals, and Integral Theorems/13.08 Potentials and path independence]] | Analyzed | low | yes | no | [[#N0316\|View]] |
| N0317 | [[Green’s theorem, surface integrals, and flux\|04 Line Integrals, Surface Integrals, and Integral Theorems/Green’s theorem, surface integrals, and flux]] | Analyzed | high | yes | no | [[#N0317\|View]] |
| N0318 | [[Integral theorems and boundary identities\|04 Line Integrals, Surface Integrals, and Integral Theorems/Integral theorems and boundary identities]] | Analyzed | low | no | no | [[#N0318\|View]] |
| N0319 | [[Line integrals and scalar potentials\|04 Line Integrals, Surface Integrals, and Integral Theorems/Line integrals and scalar potentials]] | Analyzed | low | yes | no | [[#N0319\|View]] |
| N0320 | [[Line integrals, work, and conservative fields\|04 Line Integrals, Surface Integrals, and Integral Theorems/Line integrals, work, and conservative fields]] | Analyzed | medium | yes | no | [[#N0320\|View]] |
| N0321 | [[Potentials and path independence\|04 Line Integrals, Surface Integrals, and Integral Theorems/Potentials and path independence]] | Analyzed | low | no | no | [[#N0321\|View]] |
| N0322 | [[Scalar and directed line integrals\|04 Line Integrals, Surface Integrals, and Integral Theorems/Scalar and directed line integrals]] | Analyzed | low | no | no | [[#N0322\|View]] |
| N0323 | [[Scalar and oriented surface integrals\|04 Line Integrals, Surface Integrals, and Integral Theorems/Scalar and oriented surface integrals]] | Analyzed | low | yes | no | [[#N0323\|View]] |
| N0324 | [[Surface integrals and oriented flux\|04 Line Integrals, Surface Integrals, and Integral Theorems/Surface integrals and oriented flux]] | Analyzed | low | yes | no | [[#N0324\|View]] |

## Suggestions

### N0277

Note: [[12.01 Functions of several variables|12.01 Functions of several variables]]  
Priority: low · Graph: yes · Manim: no

Clear, correct introduction to domains, graphs, level sets and images; the worked examples check out.

- [Graph] Add a graph3d of the paraboloid $z=x^2+y^2$ over $[-2,2]^2$ with the horizontal slices $z=1,2,4$ drawn, so the reader sees that the level circles in Fig. 12.1 are projected slices of the graph.
- [Graph] Add a 2D plot of the domain of $f=\sqrt{9-x^2-y^2}/(y-x)$: the closed disk of radius 3 shaded, with the diameter $y=x$ dashed (excluded), to make the "neither open nor closed" remark visible.
- [Intuition] In "Worked example: a vector map and its image", say in one sentence that $F(s,t)=(s\cos t,s\sin t)$ is the polar-coordinate map, so readers connect it to 12.04 and 12.08 before they meet it there.

### N0278

Note: [[12.02 Partial derivatives|12.02 Partial derivatives]]  
Priority: low · Graph: yes · Manim: no

Precise and well-motivated; the counterexample and the dependency section are correct and clearly separated.

- [Graph] Add a graph3d of $u=xy/(x^2+y^2)$ on $[-1,1]^2$ (with the origin excluded) to show it is zero on both axes but equals $1/2$ along $y=x$, so the reader sees why the partial derivatives exist even though $u$ is discontinuous.
- [Example] In "Why partial derivatives alone are insufficient", add one line computing $u(t,t)=1/2$ against $u(t,0)=0$ as $t\to0$. This makes "not even continuous" a calculation rather than a claim.

### N0279

Note: [[12.03 Total derivatives|12.03 Total derivatives]]  
Priority: low · Graph: yes · Manim: no

Rigorous and well checked (Jacobian, explicit remainder, numerical check all verified); the uniqueness paragraph is dense.

- [Simplify] Rewrite the uniqueness paragraph under "The linear approximation criterion" with symbols: if $A$ and $B$ both work, then $\|(A-B)(t\mathbf v)\|/|t|=\|(A-B)\mathbf v\|\to0$, hence $(A-B)\mathbf v=0$. Right now the argument is spelled out in words only, which makes it harder to follow.
- [Graph] For the counterexample $g=x^3/(x^2+y^2)$, plot $D_{\mathbf v}g(0)=\cos^3\alpha$ against the angle $\alpha\in[0,2\pi]$ for $\mathbf v=(\cos\alpha,\sin\alpha)$, next to $\cos\alpha$ (what a linear map would give). The mismatch shows the failure of linearity directly.

### N0280

Note: [[12.04 Multivariable chain rules|12.04 Multivariable chain rules]]  
Priority: low · Graph: no · Manim: no

Correct and compact; the worked example checks every route by expansion.

- [Example] In the last paragraph of "Coordinate transformations", write out the formula it describes: $\frac{d^2}{dt^2}f(x(t),y(t))=f_{xx}x'^2+2f_{xy}x'y'+f_{yy}y'^2+f_xx''+f_yy''$. Then add a one-line check with $f=xy$, $x=t$, $y=t^2$.
- [Structure] Add a small dependency tree for $z=f(u,v)$, $u(s,t)$, $v(s,t)$ (a simple SVG or a Mermaid flowchart) at "Keep every route of dependence", since the text recommends drawing it.

### N0281

Note: [[12.05 Second derivatives|12.05 Second derivatives]]  
Priority: low · Graph: yes · Manim: no

Correct and careful about hypotheses; the order convention for mixed partials is stated and used consistently in the counterexample.

- [Graph] Add a graph3d of $e^x\cos y$ and its $T_2=1+x+(x^2-y^2)/2$ on $[-1,1]^2$ in two colors, showing agreement near the origin and divergence further out.
- [Example] In "Mixed derivatives can differ", show the one-line limit $u_x(0,y)=\lim_{h\to0}u(h,y)/h=-y$, so the reader can verify the key step.

### N0282

Note: [[12.09 Local inversion|12.09 Local inversion]]  
Priority: low · Graph: yes · Manim: yes

Correct statement and good local-versus-global discussion; the worked example (inverse matrix, exact estimate, explicit branch) checks out.

- [Graph] Plot the image of a square grid near $(1,2)$ under $F(x,y)=(x+y,xy)$ and also the fold curve $x=y$ (where $\det DF=x-y=0$), which maps onto the parabola $p=s^2/4$. This shows where local invertibility fails.
- [Manim] Animate a polar-type grid deforming under $G(u,v)=(e^u\cos v,e^u\sin v)$ as $v$ runs over $[0,4\pi]$, with the image wrapping around twice. This shows that each patch is invertible but the global map is not.
- [Intuition] In "Meaning of the condition", add that $\det DF(\mathbf a)$ equals the local area scale factor (link to 12.08), so a zero determinant means that small regions are flattened.

### N0283

Note: [[Composite functions and coordinate changes|Composite functions and coordinate changes]]  
Priority: low · Graph: no · Manim: no

Correct throughout (chain rule check, implicit sphere, x=e^u transform, polar Laplacian); the Laplacian derivation is only sketched.

- [Simplify] In "Two-variable differential expressions", show at least the $\partial_x\partial_x$ step explicitly: $\cos^2\theta F_{rr}-\frac{2\sin\theta\cos\theta}{r}F_{r\theta}+\frac{\sin^2\theta}{r^2}F_{\theta\theta}+\frac{\sin^2\theta}{r}F_r+\frac{2\sin\theta\cos\theta}{r^2}F_\theta$. Currently the cancellation is asserted, not shown.
- [Example] After the identity $x^2y_{xx}+xy_x=Y''$, add one sentence saying that this turns the Euler equation $x^2y''+xy'-y=0$ into $Y''-Y=0$. This motivates the substitution.

### N0284

Note: [[Continuous functions on regions|Continuous functions on regions]]  
Priority: low · Graph: yes · Manim: no

Accessible and correct; counterexamples for each hypothesis are well chosen.

- [Graph] For the Bolzano example, plot the unit square, the zero curve $y=1-x^2$ of $f=x^2+y-1$, and the diagonal path $y=x$. Mark the root $t=(\sqrt5-1)/2$ where the path crosses the zero set.
- [Intuition] In "Weierstrass maximum and minimum theorem", add a counterexample on an unbounded closed set where $f$ is bounded but no maximum is attained, e.g. $f(x)=x^2/(1+x^2)$ on $\mathbb R$.

### N0285

Note: [[Higher differentials and local approximation|Higher differentials and local approximation]]  
Priority: low · Graph: yes · Manim: no

Correct and well motivated; the worked example quantifies the effect of omitting the mixed term.

- [Graph] Add a graph3d of $f=x^2y$ with its tangent plane $2+4h+k$ and quadratic model $P_2$ near $(1,2)$, over $h,k\in[-0.5,0.5]$, to show the improvement of the quadratic model.
- [Simplify] In "Multivariable Taylor theorem", write out the $m=2$ case of the operator $(\sum_ih_i\partial_{x_i})^j$ for two variables, $(h\partial_x+k\partial_y)^2f=f_{xx}h^2+2f_{xy}hk+f_{yy}k^2$, to link it to the earlier $\mathrm d^2f$.

### N0286

Note: [[Limits and continuity in several variables|Limits and continuity in several variables]]  
Priority: low · Graph: yes · Manim: yes

Clear and correct; the path-test, bound, line-versus-curve and iterated-limit examples all check out.

- [Graph] Add a graph3d of $h=x^2y/(x^4+y^2)$ on $[-1,1]^2$, showing the ridge of height $1/2$ along $y=x^2$ that the straight-line tests miss.
- [Manim] Animate points moving toward the origin along $y=mx$ for several $m$ and along $y=x^2$, with a live readout of $h$. Along the lines the readout tends to 0, but along the parabola it stays at 1/2.
- [Intuition] In "The precise definition", add a sketch of the $\varepsilon$-band around $L$ and the $\delta$-disk around $(a,b)$ (an SVG is enough) to accompany the order-of-quantifiers remark.

### N0287

Note: [[Multivariable calculus - Overview|Multivariable calculus - Overview]]  
Priority: low · Graph: no · Manim: no

Concise hub that lists the 12.xx lessons correctly.

- [Links] The folder also contains parallel lessons (\[\[Partial changes and total differentials\]\], \[\[Higher differentials and local approximation\]\], \[\[Limits and continuity in several variables\]\], \[\[Extrema in several variables\]\] and others) that the overview never mentions. Add a short "Further lessons" list so they are reachable from the hub.

### N0288

Note: [[Multivariable functions and domains|Multivariable functions and domains]]  
Priority: low · Graph: yes · Manim: no

Broad, correct overview of representations, domains, connectivity and dependence; some headings read oddly.

- [Structure] Heading text lacks commas: "Tables formulas and rules" and "Explicit implicit and parametric forms" should read "Tables, formulas, and rules" and "Explicit, implicit, and parametric forms".
- [Graph] Plot the domain of $g=\sqrt{4-x^2-y^2}/y$: the shaded closed disk of radius 2 with the horizontal diameter dashed and open circles at $(\pm2,0)$.
- [Graph] Plot the annulus $1<x^2+y^2<4$ with a loop around the hole beside a disk with a contractible loop, to support the simple-connectedness paragraph.

### N0289

Note: [[Partial changes and total differentials|Partial changes and total differentials]]  
Priority: low · Graph: yes · Manim: no

Clear, correct development from slices to the total differential, with an exact remainder check; all numbers verified.

- [Graph] Add a graph3d of $z=x^2+xy$ over $[1,3]\times[0,2]$ with the two slice curves $y=1$ and $x=2$ through $(2,1,6)$ and the tangent plane $z=6+5(x-2)+2(y-1)$, to illustrate "Slices through a surface".
- [Intuition] In "Partial differentials", give the exact single-coordinate change at $(2,1)$ for $f=x^2+xy$: $f(2+h,1)-f(2,1)=5h+h^2$ against $\mathrm d_xf=5h$. This shows concretely why a partial differential is not the finite change.

### N0290

Note: [[12.06 Gradients and extrema|12.06 Gradients and extrema]]  
Priority: low · Graph: yes · Manim: yes

Correct and compact; the completed-square example and the non-Euclidean gradient practice are good.

- [Graph] Add a contour plot of $f=x^2+2xy+3y^2-4x-8y$ on $[-1,3]^2$ with the minimum at $(1,1)$ and a few gradient arrows, showing tilted elliptical levels.
- [Manim] Animate the level line $x+y=c$ sweeping across the unit circle until it becomes tangent at $(\pm1/\sqrt2,\pm1/\sqrt2)$, with $\nabla f$ and $\nabla g$ drawn there becoming parallel. This illustrates the Lagrange condition.

### N0291

Note: [[12.07 Multiple integrals|12.07 Multiple integrals]]  
Priority: low · Graph: yes · Manim: no

Correct worked integrals (3/20 both ways, simplex 1/6, cone volume, Jacobian example), but the two Kabasares source links point to mismatched headings.

- [Correctness] The source link after "Set the spherical bounds before integrating" points to \[\[Multiple integrals and changes of variables#Fubini's theorem\]\]. The matching material (the cone $z=\sqrt3\,r$, $\phi\le\pi/6$) is under "#Mass inside a cone and a sphere" or "#15.9 Triple integrals in spherical coordinates", so retarget it.
- [Links] The source link after "A Jacobian measures the local change of area" points to "#Mass inside a cone and a sphere". It only lands near the change-of-variables material because that material has no heading of its own in the source note. Give that material a heading (e.g. "Change of variables") and link to it.
- [Graph] Add a graph3d of the "ice-cream cone" solid: the sphere $\rho=2$ cut by the cone $\phi=\pi/6$. This helps readers check the spherical bounds visually.

### N0292

Note: [[12.08 Coordinate substitution|12.08 Coordinate substitution]]  
Priority: low · Graph: no · Manim: yes

Correct and clear; the area-scale meaning of the determinant is well explained and all examples check.

- [Manim] Animate the unit square deforming under $(u,v)\mapsto(2u+v,u+2v)$ into the parallelogram of area 3, then a polar rectangle $[r,r+\Delta r]\times[\theta,\theta+\Delta\theta]$ mapping to an annular sector whose area tends to $r\,\Delta r\,\Delta\theta$.
- [Intuition] In "Orientation and ordinary volume", show a small picture or sentence for $T(u,v)=(v,u)$: the square's edge order flips (a mirror image), which is what the negative sign records.

### N0293

Note: [[Double and triple integrals|Double and triple integrals]]  
Priority: low · Graph: yes · Manim: no

Correct and readable; the triangle, tetrahedron, centroid and spherical examples all check.

- [Simplify] The sentence "halfway between the radial-square extremes in this particular area distribution" (polar example) is obscure. State plainly that $x^2+y^2$ ranges from 0 to 4 on the disk and that its area-weighted mean is 2, because area grows like $r$.
- [Graph] Add a graph3d of the tetrahedron $x,y,z\ge0$, $x+y+z\le1$ with one vertical column $0\le z\le1-x-y$ drawn. This shows where the nested bounds come from.

### N0294

Note: [[Extrema in several variables|Extrema in several variables]]  
Priority: low · Graph: yes · Manim: no

Correct and well organized; the least-squares example (a=1/2, b=7/6, residual sum 1/6) checks out.

- [Graph] Plot the three data points $(0,1),(1,2),(2,2)$, the fitted line $s=t/2+7/6$, and vertical residual segments of lengths $1/6,1/3,1/6$.
- [Graph] Add a graph3d of the saddle $x^2-y^2$ next to $(x-1)^2+2(y+2)^2$ to accompany the Hessian test.

### N0295

Note: [[Multiple integrals and changes of variables|Multiple integrals and changes of variables]]  
Priority: high · Graph: yes · Manim: yes

Transcribed lecture notes with correct computations but a fragmentary structure, administrative noise, unfinished examples, and a symbol clash between density and the spherical radius.

- [Correctness] Symbol clash: $\rho$ is the spherical radial coordinate from "15.9" onward and also the mass density $\mechanical{\rho}(x,y,z)$ (and the table row). In "Mass inside a cone and a sphere" the density is written $3-\rho^2/5$ with $\rho$ as the radius. Rename the density (e.g. $\mechanical{\mu}$ or $\delta$) and update the table.
- [Structure] The note opens with "Checking the boundary of the study-time region", which continues the problem from \[\[Partial derivatives and constrained extrema\]\] without defining $f$ or the triangle $0\le x\le y\le24$. Move it to the end of that note, together with the interior candidate $f(1,2)=101.8\overline3$.
- [Structure] Remove the administrative lines ("Midterm 2 review material includes...", "Review problems 5 and 6...", "Using the four pieces from the previous page"). Also replace the skipped heading levels (`#####` directly under `##`) with `###`.
- [Example] Finish the open computations: the parallelogram integral $\frac23\int_{-1}^2\int_3^4\frac{4v-u}3\,dv\,du=9$; the Jacobian of $x=\sqrt{uv}$, $y=\sqrt{v/u}$, which is $J=1/(2u)$, giving area $\tfrac12\ln(8/3)$; the incomplete 1D example $\int x^2e^{x^2}dx$, which should be completed or deleted.
- [Graph] Add a polar plot of the petal $r=\cos2\theta$ for $-\pi/4\le\theta\le\pi/4$ with area $\pi/8$, and a graph3d of the cone $z=2r$ capped at $z=H$.
- [Manim] Animate a double Riemann sum over $[0,2]\times[1,3]$ for $f=x+2y+3$, with columns refining from $2\times2$ to $16\times16$ and the sum converging to 32.

### N0296

Note: [[Partial derivatives and constrained extrema|Partial derivatives and constrained extrema]]  
Priority: high · Graph: yes · Manim: yes

Transcribed lecture notes whose math checks out, but the order is jumbled, the physical-quantities table is wrong, and there is a symbol clash with $\pi$.

- [Correctness] The physical-quantities table describes $\mechanical{\theta}$ as the "Angle swept by the rolling circle", but this note has no rolling circle. It also lists symbols the note never uses ($\mechanical{a}$ scalar, $\mechanical{v}$, $\mechanical{v}_0$, $\mechanical{x}$, $\mechanical{y}$ as "marked point" coordinates). Trim the table to $\mathbf r,\mathbf v,\mathbf a,\theta,\phi,\mathbf v_0$ components and $x_0,y_0,z_0$.
- [Correctness] Symbol clash: in "Tangent planes and linear approximation" the tangent-plane function is named $\pi(x,y)$, but the note also uses the constant $\pi$ (angles $3\pi/4$, $\pi/4$). Rename it, e.g. $L(x,y)$.
- [Structure] The two projectile examples are scattered: one opens the note, and the second interrupts "Path tests and polar coordinates". Group them in one section (or move them to a kinematics note), and remove the administrative lines ("The midterm covers Chapters 12–14", "Math 122").
- [Structure] Many sentences comment on the handwritten source ("The handwritten expression repeats a term...", "appears to use $x-b$"). Keep only the corrected statement, and append the boundary check that currently opens \[\[Multiple integrals and changes of variables\]\] so the study-time problem is complete in one place.
- [Graph] Add a contour plot of the study-time function $f=x^3/3-5x^2/2+4x+100+(y-2)^2$ on the triangle $0\le x\le y\le24$ (or a zoom to $0\le x\le5$), marking the saddle $(1,2)$, the minimum $(3,3)$ and the corners.
- [Manim] Animate a unit vector $\mathbf u$ rotating around $(2,\pi/4)$ for $f=x\cos y$, with $D_{\mathbf u}f=\|\nabla f\|\cos\theta$ displayed. The value peaks along $\nabla f$ and is zero along the level curve.

### N0297

Note: [[13.01 Fields and domains|13.01 Fields and domains]]  
Priority: low · Graph: yes · Manim: no

Correct and clear about domains and excluded points; the circulation example sets up 13.08 well.

- [Graph] Add a 2D vector-field plot of $\mathbf G=(-y,x)/(x^2+y^2)$ on $[-2,2]^2$ (with the origin excluded), with the unit circle drawn. The arrows shrink like $1/r$ but stay tangent.
- [Intuition] In "Why state the domain?", add one sentence on why removing the origin from $\mathbb R^3$ does not trap loops: a loop can slide over the missing point. Contrast this with removing the whole $z$-axis.

### N0298

Note: [[13.02 Gradient|13.02 Gradient]]  
Priority: low · Graph: yes · Manim: no

Correct and well structured; the distinction between the differential and its representing vector is clear.

- [Graph] Fig. 13.1 uses $x^2+y^2$, while the worked example uses $f=x^2+3y^2$. Add a contour plot of $x^2+3y^2$ with the level ellipse $x^2+3y^2=4$, the gradient $(2,6)$ at $(1,1)$ and the tangent line $x+3y=4$. Then the figure matches the worked example.
- [Intuition] In "Dependence on the inner product", state geometrically that with $G=\operatorname{diag}(4,1)$, steepest ascent in the $G$-metric differs from the Euclidean direction. Compare $(1/4,1)$ and $(1,1)$ for $f=x+y$.

### N0299

Note: [[13.03 Divergence|13.03 Divergence]]  
Priority: low · Graph: yes · Manim: no

Correct and well derived; the box example verifies the theorem with the correct normal signs.

- [Graph] Add a 2D vector-field plot of $(x^2,y)$ on $[0,2]\times[0,2]$ with the box $[0,1]^2$ outlined. Arrows on the right face are longer than on the left, which shows the net outflow.
- [Intuition] Add a contrasting example of a field whose arrows point inward but whose divergence is positive, e.g. $(2x,-y,0)$. This guards against reading divergence as "arrows pointing out".

### N0300

Note: [[13.04 Curl|13.04 Curl]]  
Priority: low · Graph: yes · Manim: yes

Correct and clear; the orientation conventions are stated, and the practice with $(0,x,0)$ makes a good shear example.

- [Graph] Plot the shear field $(0,x)$ on $[-1,1]^2$ next to $(-y,x)$. Both have nonzero curl, though the shear's streamlines are straight lines.
- [Manim] Animate a small paddle wheel carried along the shear flow $(0,x,0)$ that spins at rate $\tfrac12\,\mathrm{curl}_z$. Show also that a wheel carried around a rigid rotation spins at the same rate as the flow.

### N0301

Note: [[13.09 Coordinate expressions|13.09 Coordinate expressions]]  
Priority: low · Graph: no · Manim: no

Correct and careful about orthonormal versus coordinate-basis components; all examples check.

- [Structure] This note uses spherical $(r,\theta,\phi)$ with $\theta$ the polar angle, while \[\[12.07 Multiple integrals\]\] and \[\[Double and triple integrals\]\] use $\phi$ as the polar angle. Add a one-line warning with links so readers do not mix the conventions.
- [Simplify] In "Gradient, divergence, and curl", sketch the face-flux step for the $q_1$ pair. It gives $[h_2h_3F_1]_{q_1}^{q_1+dq_1}dq_2dq_3\approx\partial_{q_1}(h_2h_3F_1)\,dq_1dq_2dq_3$, which shows why the scale factors sit inside the derivative.

### N0302

Note: [[Curl and local circulation|Curl and local circulation]]  
Priority: low · Graph: yes · Manim: no

Correct formulas (vector identities and curvilinear curl all verified) with a good cylindrical worked example.

- [Graph] Add a 2D vector-field plot of $\rho^2\mathbf e_\phi=\rho(-y,x)$ on $[-1,1]^2$ to accompany the worked example. The arrow speed grows like $\rho^2$, and curl is $3\rho$.
- [Example] Under "Calculation rules", add a one-line check of the product rule with $f=x$, $\mathbf F=(0,1,0)$: $\nabla\times(x\mathbf e_y)=(0,0,1)$ equals $\nabla x\times\mathbf e_y$.

### N0303

Note: [[Curl|Curl]]  
Priority: medium · Graph: no · Manim: no

Legacy property-table stub that duplicates \[\[13.04 Curl\]\] and \[\[Curl and local circulation\]\], gives no orientation conventions, and is not in the vault's note format.

- [Structure] Replace the table with a short definition note (title, TLDR) that links to \[\[13.04 Curl\]\] and \[\[Curl and local circulation\]\], or merge it there. In Stokes' theorem, state that $C$ must carry the orientation induced by the normal of $S$.
- [Simplify] "Magnitude of the curl is invariant under coordinate transformations" is too broad. Say "under rotations of the Cartesian axes; under a reflection the curl changes sign relative to the field (pseudovector)".

### N0304

Note: [[Directional derivatives and gradients|Directional derivatives and gradients]]  
Priority: low · Graph: yes · Manim: no

Correct and well organized, including the Jacobian convention and the volume-derivative formulas; all numbers check.

- [Graph] Add a contour plot of $x^2+2y^2$ (the $z$-independent part of the example) with $\nabla f(1,1)=(2,4)$ and the unit direction $(3,4)/5$ drawn. The angle between them shows why $22/5<\sqrt{20}$.
- [Intuition] In "Volume derivative or spatial derivative", add a sentence on the gradient formula: on a small sphere, $f\mathbf n$ is larger on the side where $f$ is larger, so the average of $f\mathbf n$ points uphill.

### N0305

Note: [[Divergence and local expansion|Divergence and local expansion]]  
Priority: low · Graph: yes · Manim: no

Correct and clear, with good warnings on central fields and on dimension dependence.

- [Graph] Add a 2D vector-field plot of $(2x,-y)$ on $[-1,1]^2$ to illustrate the claim that positive divergence does not mean every arrow points away.
- [Example] Add a line verifying the 2D radial formula: $\mathbf F=(x,y)=r\mathbf e_r$ gives $a'+a/r=2$, consistent with Cartesian $1+1$.

### N0306

Note: [[Divergence|Divergence]]  
Priority: medium · Graph: no · Manim: no

Legacy property-table stub that duplicates \[\[13.03 Divergence\]\] and \[\[Divergence and local expansion\]\]; its "density exits" wording is vague.

- [Structure] Replace it with a short definition note in vault format that links to \[\[13.03 Divergence\]\] and \[\[Divergence and local expansion\]\], or merge it there. State the outward normal and the $C^1$ hypothesis for the divergence theorem.
- [Simplify] Replace "Measures the rate at which 'density' exits a given region" with "net outward flux per unit volume in the limit of a shrinking region". The Gauss's-law example should name $\nabla\cdot\mathbf E=\rho/\varepsilon_0$ explicitly.

### N0307

Note: [[Gradient|Gradient]]  
Priority: medium · Graph: no · Manim: no

Legacy property-table stub with two factual errors and a misleading title; it duplicates \[\[13.02 Gradient\]\].

- [Correctness] The opening line "Measures the change of density of a vector field" and the title "Gradient ∇F" are wrong. The gradient acts on a scalar field $f$ and gives a vector field, as the table itself states. Change them to "Direction and rate of steepest increase of a scalar field" and "Gradient ∇f".
- [Correctness] "Electric field as the gradient of voltage" is missing the sign. In electrostatics $\mathbf E=-\nabla V$.
- [Structure] Convert to vault format or merge into \[\[13.02 Gradient\]\] and \[\[Directional derivatives and gradients\]\].

### N0308

Note: [[Nabla identities and curvilinear coordinates|Nabla identities and curvilinear coordinates]]  
Priority: low · Graph: no · Manim: no

Correct identities and scale-factor formulas, with good cross-checks of the Laplacian in three coordinate systems.

- [Example] Make the warning about the vector Laplacian in a rotating basis concrete. For $\mathbf F=\mathbf e_\phi=(-y,x,0)/\rho$, the naive component Laplacian of $F_\phi=1$ gives zero, but $\Delta\mathbf F=-\mathbf e_\phi/\rho^2$.
- [Intuition] Under "Repeated application", add one sentence on why $\nabla\times\nabla f=0$ and $\nabla\cdot\nabla\times\mathbf F=0$ are the same "boundary of a boundary" fact. Point to \[\[Differential forms - Overview\]\].

### N0309

Note: [[Scalar and vector fields|Scalar and vector fields]]  
Priority: low · Graph: no · Manim: no

Clear and correct; the basis-change formulas and the circular-field example are good, and an existing figure covers the main picture.

- [Example] In "Vector fields and their components", add a central field with non-constant magnitude, e.g. $\mathbf F=\mathbf r/r^3$, with its domain stated. This makes "radial does not mean constant magnitude" concrete.
- [Intuition] In the worked example, note that the field-line speed $R$ equals $\|\mathbf F\|=\rho$, which shows that the parameter $s$ in $\mathbf r'=\mathbf F$ is not arc length.

### N0310

Note: [[Vector analysis and field theory - Catalogue Guide|Vector analysis and field theory - Catalogue Guide]]  
Priority: low · Graph: no · Manim: no

Useful learning guide with a correct worked orientation example; one link is broken.

- [Correctness] The link \[\[Planned Topics#13. Vector analysis and field theory|the detailed catalogue\]\] is broken. "Planned Topics.md" exists only under `.temp/` backups, not in the vault. Remove the link or point it at an existing catalogue note.

### N0311

Note: [[Vector calculus - Overview|Vector calculus - Overview]]  
Priority: low · Graph: no · Manim: no

Concise hub listing the 13.xx lessons; no change needed beyond optional cross-linking.

- [Links] Add a link to \[\[Vector analysis and field theory - Catalogue Guide\]\], which lists the parallel, more detailed lessons in this folder.

### N0312

Note: [[Vector functions and curves|Vector functions and curves]]  
Priority: low · Graph: yes · Manim: yes

Clear and correct, with a numerically checked helix approximation.

- [Graph] Add a graph3d of the helix $(\cos t,\sin t,t)$ for $t\in[0,4\pi]$ with the tangent vector $(0,1,1)$ at $t=0$ and the quadratic approximation $(1-h^2/2,h,h)$ for $h\in[-1,1]$ overlaid.
- [Manim] Animate a point moving along the circle $(\cos t,\sin t)$ and then along $(\cos2t,\sin2t)$, with $\mathbf r'$ drawn. The traced curve is the same while the tangent vector doubles in length but keeps its direction.

### N0313

Note: [[13.05 Parameterized curves and surfaces|13.05 Parameterized curves and surfaces]]  
Priority: low · Graph: yes · Manim: no

Correct and well explained; the paraboloid area, the $x^{3/2}$ arc length and the practice answers check out.

- [Graph] Add a graph3d of the patch $z=u^2+v^2$ over the unit disk with several normals $(-2u,-2v,1)$ drawn, showing the upward orientation and the growing area factor toward the rim.
- [Example] State the numerical value of the $x^{3/2}$ arc length, $\approx7.63$, so the claim "exceeds the horizontal displacement of 3" can be checked at a glance.

### N0314

Note: [[13.06 Line and surface integrals|13.06 Line and surface integrals]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; the side-by-side comparison of scalar and oriented integrals on the same curve is effective.

- [Graph] Add a graph3d of the plane patch $z=x+y$ over $[0,1]^2$ with the field $(0,0,z)$ and the normal $(-1,-1,1)$ drawn at a few points.
- [Intuition] In practice answer 2, explain the cancellation geometrically: the flux of a constant vertical field depends only on the projected area $\pi$, so any graph over the disk gives $2\pi$.

### N0315

Note: [[13.07 Integral theorems|13.07 Integral theorems]]  
Priority: low · Graph: yes · Manim: yes

Correct statements with hypotheses and good verification examples; the Kabasares source link points to the wrong note.

- [Correctness] The source link \[\[Line integrals, work, and conservative fields#Line integrals|Math 23\]\] under "Turn circulation into an area integral" points to the line-integral section. The Green's-theorem example with $(-y,x)$ is in \[\[Green’s theorem, surface integrals, and flux#16.4 Green's theorem\]\], so retarget it.
- [Manim] Animate the subdivision of a disk into small squares, with each square's counterclockwise circulation drawn and interior edges cancelling in pairs, leaving only the outer boundary.
- [Graph] Add a graph3d of the paraboloid $z=1-x^2-y^2$ and the flat unit disk sharing the oriented boundary circle, for the Stokes example.

### N0316

Note: [[13.08 Potentials and path independence|13.08 Potentials and path independence]]  
Priority: low · Graph: yes · Manim: no

Correct and well argued; the hole counterexample and the slit domain are clearly presented with a figure.

- [Graph] Add a graph3d of the angle "potential" $\theta(x,y)$ over the annulus $0.3\le r\le1$ as a helicoid-like surface that does not close after one turn. This makes the $2\pi$ jump visible.
- [Links] This note duplicates the catalogue note \[\[Potentials and path independence\]\] (in the same folder, with the same title and a near-identical example). Cross-link the two or merge them.

### N0317

Note: [[Green’s theorem, surface integrals, and flux|Green’s theorem, surface integrals, and flux]]  
Priority: high · Graph: yes · Manim: no

Transcribed lecture notes with correct calculations, but with duplicated examples, administrative noise, several unfinished problems, and no headings for the divergence-theorem part.

- [Structure] The $(-y,x)$ circle and the semicircle $\langle-yx^2,y^2x\rangle$ examples each appear twice (Green's theorem first, then direct parametrization). Merge each into one example that shows both methods side by side.
- [Structure] Remove the administrative lines ("Review chapters 12–16...", "The final exam is listed for Friday, May 16..."). Add headings for "Divergence theorem", "Midterm review" and "Change of variables", and replace the `#####` levels under `##` with `###`.
- [Example] Finish the open problems. $\iint_S x^2\,dS$ on the radius-3 sphere is $\tfrac13\cdot9\cdot36\pi=108\pi$; $\iint_S z^2\,dS=4\pi R^4/3$; the worksheet integral has $x=(u-v)/5$, $y=(3u+2v)/5$, $|J|=1/5$, giving $\tfrac15\int_0^5\int_0^5vu^2\,dv\,du=625/6$.
- [Intuition] For the ellipsoid and sphere parametrizations, say explicitly that $\mathbf r_u\times\mathbf r_v$ (and $\mathbf r_\theta\times\mathbf r_\phi$) points inward. This explains why the solar-wind example switches to $\mathbf r_\phi\times\mathbf r_\theta$.
- [Graph] Add a graph3d of the hemisphere $x^2+y^2+z^2=9$, $y\le0$, closed by the disk in $y=0$, with outward normals drawn on both pieces.

### N0318

Note: [[Integral theorems and boundary identities|Integral theorems and boundary identities]]  
Priority: low · Graph: no · Manim: no

Correct and well organized; the hypotheses, orientations and Green identities are stated precisely, and the existing figure covers orientation.

- [Simplify] In "Green's plane theorem", the example "$P=x$, $Q=y$ gives $\oint(x\,dy-y\,dx)=2\pi$" uses the outward-flux form, but it directly follows the circulation form. Say "in the flux form" to avoid reading it as $\oint x\,dx+y\,dy$, which is zero.
- [Example] Add a short check of the Gauss formula $\iiint\nabla f\,dV=\iint f\mathbf n\,dS$ with $f=z$ on the unit ball (both sides equal $(0,0,4\pi/3)$).

### N0319

Note: [[Line integrals and scalar potentials|Line integrals and scalar potentials]]  
Priority: low · Graph: yes · Manim: no

Correct and clear, including the potential construction and the physics sign convention; all numbers check.

- [Links] "The punctured-plane example in \[\[Curl and local circulation\]\]" is inaccurate. That note uses space with the $z$-axis removed. The punctured-plane example is in \[\[13.08 Potentials and path independence\]\], so link there or reword.
- [Graph] For practice 1, plot the field $(y,0)$ on $[0,1]^2$ with the diagonal path and the L-shaped path. The diagonal picks up the horizontal arrows, while the axis path does not.

### N0320

Note: [[Line integrals, work, and conservative fields|Line integrals, work, and conservative fields]]  
Priority: medium · Graph: yes · Manim: no

Transcribed lecture notes whose math is correct, but several results are left unevaluated, the work macro is inconsistent, and the field statements in the conservative-test passage contradict each other.

- [Correctness] Work is an energy quantity, but it is written $\mechanical{W}$ here, while the companion note \[\[Line integrals and scalar potentials\]\] uses $\energy{W}$. Use $\energy{W}$ in the text and the table.
- [Example] Evaluate the open results. $\int_{-2}^2t\sqrt{1+4t^2}\,dt=0$ by odd symmetry; the fuel integral is $3(30\pi+9\pi)=117\pi\approx368$ gallons. The segment work is $-1/2$: the normalized field is $\nabla(1/r)$, so $W=1/2-1$ (checked numerically). This also explains the zero work on the semicircle.
- [Structure] The passage near the end gives two different fields for the same test ($\langle xy,z+z^2/2,z^2+xy\rangle$ and then $\langle xy,z+x^2/2,xy\rangle$), plus remarks about the handwriting. Keep one corrected field and delete the transcription commentary.
- [Links] The link \[\[#Line integrals of vector fields|the section on Line integrals of vector fields\]\] points to the section the reader is already in, and the worked field follows directly below. Replace it with "below".
- [Graph] Add 2D vector-field plots of $\langle x,y\rangle$ and $\langle-y,x\rangle$ side by side, with a closed loop drawn. They contrast a conservative field (zero circulation) with a rotational one.

### N0321

Note: [[Potentials and path independence|Potentials and path independence]]  
Priority: low · Graph: no · Manim: no

Correct and concise (potentials, 9 and 15, practice answers verified); it overlaps heavily with 13.08.

- [Links] This note shares its title and nearly its whole content with \[\[13.08 Potentials and path independence\]\] (same hole example, almost the same planar field). Cross-link them, or merge and keep one canonical lesson.
- [Intuition] In "Two-dimensional derivative test", add one sentence on why a convex domain suffices. The potential can be defined by integrating along the straight segment from a fixed point, so no choice of path arises.

### N0322

Note: [[Scalar and directed line integrals|Scalar and directed line integrals]]  
Priority: low · Graph: no · Manim: no

Clear, correct distinction between first-kind, second-kind and general line integrals, with a supporting figure.

- [Links] The Handbook of Mathematics citation links to a PDF on alnasiry.net, which looks like an unofficial copy of a copyrighted book. Replace it with a plain bibliographic citation (Bronshtein et al., Springer) or the publisher page.
- [Example] Add the reversed-path calculation for the segment example. With $\mathbf r(t)=(1-t,2-2t)$, $\int y\,dx=-1$ while $\int y\,ds=\sqrt5$ is unchanged.

### N0323

Note: [[Scalar and oriented surface integrals|Scalar and oriented surface integrals]]  
Priority: low · Graph: yes · Manim: no

Correct and careful about orientation and projections; the three projected integrals ($-1$, $1/2$, $1/2$) check out.

- [Links] The Handbook of Mathematics link points to a PDF on alnasiry.net, which looks like an unauthorized copy. Replace it with a plain citation or the publisher page.
- [Graph] Add a graph3d of the plane $z=2x-y$ over the unit square with the field $(x,y,z)$ drawn on it. The arrows lie in the plane, which is the geometric reason the flux is zero.

### N0324

Note: [[Surface integrals and oriented flux|Surface integrals and oriented flux]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; the sloping triangle includes an independent unit-normal check, and the sphere example is verified.

- [Graph] Add a graph3d of the triangle $z=2-x-y$ over $x,y\ge0$, $x+y\le1$ with the normal $(1,1,1)$ and a few field vectors $\mathbf r$, to accompany the worked example.
- [Example] Give a short closed-surface example for the cavity remark, e.g. the shell $1\le r\le2$ with $\mathbf F=\mathbf r$. The outer flux is $32\pi$ and the inner (into the cavity) $-4\pi$, totalling $28\pi=3\cdot\mathrm{vol}$.
