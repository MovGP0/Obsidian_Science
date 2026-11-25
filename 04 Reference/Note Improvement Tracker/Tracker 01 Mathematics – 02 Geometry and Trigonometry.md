---
title: "Note Improvement Tracker – 01 Mathematics/02 Geometry and Trigonometry"
---

> [!TLDR]
> This note tracks the review of the 54 notes in `01 Mathematics/02 Geometry and Trigonometry`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 5 possible errors or notation conflicts. 5 of them are verified (5 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N0088|N0088]] Geometry - Catalogue Guide: The link [[Planned Topics#3. Geometry|the detailed catalogue]] points to a note that exists only under `.temp/catalogue-authoring/.../backups/`, not in the vault proper, so it is broken; restore the note or remove the sentence (the same link appears in the other chapter catalogue guides). **Fixed:** Planned Topics.md was deleted in commit faabc61 and exists only in .temp backup; removed the sentence with the link (restoring the note is outside batch scope; Mathematics Study Guide and Catalogue Source Guide also still link to it)
- [[#N0108|N0108]] Solve spherical triangles: In "Spherical curves and distances from coordinates", "apply the spherical cosine rule to their polar triangle" misuses the term defined in [[Geometry on a sphere]]; it should say "to the triangle formed by the north pole and the two points", whose sides are the colatitudes $\pi/2-\varphi_1$, $\pi/2-\varphi_2$ with included angle $\Delta\lambda$. **Fixed:** Replaced with the triangle of the north pole and the two points, sides at the pole are colatitudes pi/2-phi1, pi/2-phi2, included angle Delta lambda
- [[#N0138|N0138]] Quadrics and motion along space curves: The physical-quantities table describes $\mechanical{\theta}$ also as "horizontal direction of the initial velocity measured from the positive $x$-axis", a meaning never used in the note; the cylindrical/spherical azimuth $\theta$ is written uncolored, so the row should describe only the rolling-circle rotation angle. **Fixed:** Row now describes only the rolling-circle rotation angle
- [[#N0138|N0138]] Quadrics and motion along space curves: Symbol clash: in "Arc length and kinematics" $s$ is the integration variable in $\int_0^{t}\mechanical{\mathbf v}(s)\,ds$, while the next section and the cycloid use $s$ as arc length; rename the dummy variable to $\tau$ as the arc-length section already does. **Fixed:** Renamed integration variable to tau in both kinematic integrals
- [[#N0138|N0138]] Quadrics and motion along space curves: Macro misuse: the helix example writes $\mechanical{\mathbf r}(t)=\langle\cos t,t,\sin t\rangle$ "in numerical coordinates" with an uncolored dimensionless $t$; either drop the mechanical macros there or give the example units and a colored time. **Fixed:** Removed mechanical macros from r, v, a in the numerical helix example

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N0087 | [[Circles sectors and annuli\|01 Plane and Solid Geometry/Circles sectors and annuli]] | Analyzed | low | yes | no | [[#N0087\|View]] |
| N0088 | [[Geometry - Catalogue Guide\|01 Plane and Solid Geometry/Geometry - Catalogue Guide]] | Analyzed | low | no | no | [[#N0088\|View]] |
| N0089 | [[Lines planes and solids\|01 Plane and Solid Geometry/Lines planes and solids]] | Analyzed | low | yes | no | [[#N0089\|View]] |
| N0090 | [[Points lines and angles\|01 Plane and Solid Geometry/Points lines and angles]] | Analyzed | low | no | no | [[#N0090\|View]] |
| N0091 | [[Polygons and regular figures\|01 Plane and Solid Geometry/Polygons and regular figures]] | Analyzed | low | yes | no | [[#N0091\|View]] |
| N0092 | [[Quadrilaterals\|01 Plane and Solid Geometry/Quadrilaterals]] | Analyzed | low | no | no | [[#N0092\|View]] |
| N0093 | [[Triangles and symmetry\|01 Plane and Solid Geometry/Triangles and symmetry]] | Analyzed | low | no | no | [[#N0093\|View]] |
| N0094 | [[03.05 Trigonometric functions\|02 Trigonometry/03.05 Trigonometric functions]] | Analyzed | low | yes | yes | [[#N0094\|View]] |
| N0095 | [[04.03 Triangles\|02 Trigonometry/04.03 Triangles]] | Analyzed | low | no | no | [[#N0095\|View]] |
| N0096 | [[04.04 Angular measure\|02 Trigonometry/04.04 Angular measure]] | Analyzed | low | yes | no | [[#N0096\|View]] |
| N0097 | [[04.05 The unit circle\|02 Trigonometry/04.05 The unit circle]] | Analyzed | low | no | yes | [[#N0097\|View]] |
| N0098 | [[04.06 Trigonometric identities\|02 Trigonometry/04.06 Trigonometric identities]] | Analyzed | low | no | yes | [[#N0098\|View]] |
| N0099 | [[Circular and hyperbolic geometry\|02 Trigonometry/Circular and hyperbolic geometry]] | Analyzed | low | yes | yes | [[#N0099\|View]] |
| N0100 | [[Geometry and trigonometry - Overview\|02 Trigonometry/Geometry and trigonometry - Overview]] | Analyzed | low | no | no | [[#N0100\|View]] |
| N0101 | [[Geometry on a sphere\|02 Trigonometry/Geometry on a sphere]] | Analyzed | low | yes | no | [[#N0101\|View]] |
| N0102 | [[Inverse trigonometric sum identities\|02 Trigonometry/Inverse trigonometric sum identities]] | Analyzed | medium | yes | no | [[#N0102\|View]] |
| N0103 | [[Kosinussatz\|02 Trigonometry/Kosinussatz]] | Analyzed | medium | no | no | [[#N0103\|View]] |
| N0104 | [[Principal inverse trigonometric values\|02 Trigonometry/Principal inverse trigonometric values]] | Analyzed | low | yes | no | [[#N0104\|View]] |
| N0105 | [[Sinusoidal sums and envelopes\|02 Trigonometry/Sinusoidal sums and envelopes]] | Analyzed | medium | yes | yes | [[#N0105\|View]] |
| N0106 | [[Sinussatz\|02 Trigonometry/Sinussatz]] | Analyzed | medium | no | no | [[#N0106\|View]] |
| N0107 | [[Solve plane triangles\|02 Trigonometry/Solve plane triangles]] | Analyzed | low | yes | no | [[#N0107\|View]] |
| N0108 | [[Solve spherical triangles\|02 Trigonometry/Solve spherical triangles]] | Analyzed | low | yes | no | [[#N0108\|View]] |
| N0109 | [[Spherical triangle identities\|02 Trigonometry/Spherical triangle identities]] | Analyzed | low | no | no | [[#N0109\|View]] |
| N0110 | [[Survey coordinates and angles\|02 Trigonometry/Survey coordinates and angles]] | Analyzed | low | yes | no | [[#N0110\|View]] |
| N0111 | [[Trigonometric addition and multiple angles\|02 Trigonometry/Trigonometric addition and multiple angles]] | Analyzed | low | yes | no | [[#N0111\|View]] |
| N0112 | [[Trigonometric equations\|02 Trigonometry/Trigonometric equations]] | Analyzed | low | yes | no | [[#N0112\|View]] |
| N0113 | [[Trigonometric products sums and powers\|02 Trigonometry/Trigonometric products sums and powers]] | Analyzed | low | yes | no | [[#N0113\|View]] |
| N0114 | [[Unit-circle function graphs\|02 Trigonometry/Unit-circle function graphs]] | Analyzed | low | yes | no | [[#N0114\|View]] |
| N0115 | [[04.01 Coordinates\|03 Coordinate Geometry and Conics/04.01 Coordinates]] | Analyzed | low | no | no | [[#N0115\|View]] |
| N0116 | [[04.02 Lines and planes\|03 Coordinate Geometry and Conics/04.02 Lines and planes]] | Analyzed | low | yes | no | [[#N0116\|View]] |
| N0117 | [[04.07 Projections\|03 Coordinate Geometry and Conics/04.07 Projections]] | Analyzed | low | no | no | [[#N0117\|View]] |
| N0118 | [[Affine transformations and homogeneous coordinates\|03 Coordinate Geometry and Conics/Affine transformations and homogeneous coordinates]] | Analyzed | low | yes | yes | [[#N0118\|View]] |
| N0119 | [[Cubic curves\|03 Coordinate Geometry and Conics/Cubic curves]] | Analyzed | low | yes | no | [[#N0119\|View]] |
| N0120 | [[Lines circles and conic sections\|03 Coordinate Geometry and Conics/Lines circles and conic sections]] | Analyzed | low | yes | no | [[#N0120\|View]] |
| N0121 | [[Lines planes and intersections in space\|03 Coordinate Geometry and Conics/Lines planes and intersections in space]] | Analyzed | low | yes | no | [[#N0121\|View]] |
| N0122 | [[Oblique bases and vector equations\|03 Coordinate Geometry and Conics/Oblique bases and vector equations]] | Analyzed | low | yes | no | [[#N0122\|View]] |
| N0123 | [[Parallel and perspective projections\|03 Coordinate Geometry and Conics/Parallel and perspective projections]] | Analyzed | low | yes | no | [[#N0123\|View]] |
| N0124 | [[Plane coordinates and point constructions\|03 Coordinate Geometry and Conics/Plane coordinates and point constructions]] | Analyzed | low | no | no | [[#N0124\|View]] |
| N0125 | [[Quadric surfaces and their classification\|03 Coordinate Geometry and Conics/Quadric surfaces and their classification]] | Analyzed | low | yes | no | [[#N0125\|View]] |
| N0126 | [[Space coordinates and rotation conventions\|03 Coordinate Geometry and Conics/Space coordinates and rotation conventions]] | Analyzed | low | yes | yes | [[#N0126\|View]] |
| N0127 | [[Third-degree rational curve families\|03 Coordinate Geometry and Conics/Third-degree rational curve families]] | Analyzed | low | yes | no | [[#N0127\|View]] |
| N0128 | [[04.08 Circular and cylindrical coordinates\|04 Polar and Parametric Curves/04.08 Circular and cylindrical coordinates]] | Analyzed | low | yes | no | [[#N0128\|View]] |
| N0129 | [[Arc length and parametric curves\|04 Polar and Parametric Curves/Arc length and parametric curves]] | Analyzed | medium | yes | yes | [[#N0129\|View]] |
| N0130 | [[Cassini ovals and the lemniscate\|04 Polar and Parametric Curves/Cassini ovals and the lemniscate]] | Analyzed | low | yes | yes | [[#N0130\|View]] |
| N0131 | [[Catenary and tractrix\|04 Polar and Parametric Curves/Catenary and tractrix]] | Analyzed | low | yes | yes | [[#N0131\|View]] |
| N0132 | [[Conchoids and limacons\|04 Polar and Parametric Curves/Conchoids and limacons]] | Analyzed | low | yes | yes | [[#N0132\|View]] |
| N0133 | [[Cycloids and trochoids\|04 Polar and Parametric Curves/Cycloids and trochoids]] | Analyzed | low | yes | yes | [[#N0133\|View]] |
| N0134 | [[Epicycloids and hypocycloids\|04 Polar and Parametric Curves/Epicycloids and hypocycloids]] | Analyzed | low | yes | yes | [[#N0134\|View]] |
| N0135 | [[Evolutes involutes and envelopes\|04 Polar and Parametric Curves/Evolutes involutes and envelopes]] | Analyzed | low | yes | yes | [[#N0135\|View]] |
| N0136 | [[Plane curves tangents and curvature\|04 Polar and Parametric Curves/Plane curves tangents and curvature]] | Analyzed | low | yes | no | [[#N0136\|View]] |
| N0137 | [[Polar curves and their areas\|04 Polar and Parametric Curves/Polar curves and their areas]] | Analyzed | medium | yes | no | [[#N0137\|View]] |
| N0138 | [[Quadrics and motion along space curves\|04 Polar and Parametric Curves/Quadrics and motion along space curves]] | Analyzed | high | yes | yes | [[#N0138\|View]] |
| N0139 | [[Space curves and moving frames\|04 Polar and Parametric Curves/Space curves and moving frames]] | Analyzed | low | yes | yes | [[#N0139\|View]] |
| N0140 | [[Spirals and involutes\|04 Polar and Parametric Curves/Spirals and involutes]] | Analyzed | low | yes | yes | [[#N0140\|View]] |

## Suggestions

### N0087

Note: [[Circles sectors and annuli|Circles sectors and annuli]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; formulas are derived rather than stated, and the worked example and answers check out numerically.

- [Graph] In "Circular segments", add a 2D plot of $K_{\mathrm{sector}}=\tfrac12\theta$, triangle area $\tfrac12\sin\theta$ and $K_{\mathrm{segment}}=\tfrac12(\theta-\sin\theta)$ for $r=1$, $\theta\in[0,2\pi]$, so the reader sees the triangle area turn negative past $\pi$ ("signed sine") and the segment equal the whole disk at $2\pi$.
- [Simplify] The inscribed-angle paragraph compresses three cases (center inside, on a side, outside) into one sentence; split it into a short case list with one sentence each, or point to a figure.
- [Intuition] In "Annuli", add the one-line picture that unrolling a thin annulus gives a strip of length about $2\pi\bar r$ and width $R-r$, so $\pi(R^2-r^2)=2\pi\bar r(R-r)$ with $\bar r=(R+r)/2$ is exact, which explains why $\pi(R-r)^2$ is wrong.

### N0088

Note: [[Geometry - Catalogue Guide|Geometry - Catalogue Guide]]  
Priority: low · Graph: no · Manim: no

Useful learning-route hub with a good worked problem-solving example; one link target is missing from the vault.

- [Correctness] The link [[Planned Topics#3. Geometry|the detailed catalogue]] points to a note that exists only under `.temp/catalogue-authoring/.../backups/`, not in the vault proper, so it is broken; restore the note or remove the sentence (the same link appears in the other chapter catalogue guides).
- [Links] The route skips several notes that sit in this geometry folder tree (for example [[Principal inverse trigonometric values]], [[Trigonometric equations]], [[Cycloids and trochoids]], [[Spirals and involutes]]); add a one-line pointer to the trigonometry and curves sub-folders or to [[Geometry and trigonometry - Overview]].

### N0089

Note: [[Lines planes and solids|Lines planes and solids]]  
Priority: low · Graph: yes · Manim: no

Dense but correct survey of solid geometry; all worked numbers (cone, frustum, cap, Euler) check out.

- [Simplify] In "Lines and planes in space", the sentence "Adjacent internal faces of a convex solid can use the supplementary angle to the acute angle between their planes" is hard to parse; replace it with "The interior dihedral angle of a convex solid at an edge may be obtuse; it is then $180^\circ$ minus the acute angle between the two planes (e.g. $109.47^\circ$ for a regular octahedron)."
- [Graph] Add a 3D plot of a sphere of radius $r=3$ cut by the plane $z=r-h$ with $h=2$, showing the cap, to accompany the cap formulas $2\pi rh$ and $\pi h^2(r-h/3)$.
- [Intuition] The cap-area sentence ("equal-area correspondence ... surrounding cylinder") is Archimedes' hat-box theorem stated in passing; give it one more sentence: a horizontal strip of height $dz$ has the same area $2\pi r\,dz$ on the sphere and on the circumscribed cylinder, because the slant lengthening exactly cancels the radius shrinking.
- [Example] The Euler-relation proof sketch is abstract; add a two-line check on a triangular prism ($V=6$, $E=9$, $F=5$) next to the cube.

### N0090

Note: [[Points lines and angles|Points lines and angles]]  
Priority: low · Graph: no · Manim: no

Clear, well-paced introduction; definitions, the vertical-angle proof, and the worked answers are correct.

- [Structure] "Parallel lines and a transversal" names corresponding, alternate and same-side angles only in words; add a labelled figure (two parallels, one transversal, eight angles numbered) because these pairs are almost impossible to learn from prose alone.
- [Intuition] State explicitly why the corresponding-angle property needs the parallel postulate (it fails on a sphere) and link forward to [[Geometry on a sphere]], matching the theme of the catalogue guide.

### N0091

Note: [[Polygons and regular figures|Polygons and regular figures]]  
Priority: low · Graph: yes · Manim: no

Correct and well-motivated; the apothem-versus-circumradius derivation and golden-ratio argument are explained well.

- [Graph] Plot $K_n/(\pi R^2)=\dfrac{n\sin(2\pi/n)}{2\pi}$ against $n=3,\dots,24$ (points) to show regular polygons approaching the circle; this connects the area formula to [[Circles sectors and annuli]].
- [Simplify] The pentagon diagonal derivation ("Equal angles give similar triangles whose corresponding lengths imply $d/s=s/(d-s)$") skips which triangles are similar; name them (e.g. the triangle formed by two diagonals and a side versus the small triangle at the crossing) or add a figure.
- [Intuition] In "Regular convex polygons", the remark that equal angles alone need not give equal sides should say it is for $n\ge4$ (a rectangle is the counterexample); for triangles equiangular does imply equilateral.

### N0092

Note: [[Quadrilaterals|Quadrilaterals]]  
Priority: low · Graph: no · Manim: no

Careful, correct classification with explicit conventions (inclusive trapezoid, cyclic versus tangential).

- [Structure] Add a small inclusion diagram or table (quadrilateral, trapezoid, parallelogram, rectangle, rhombus, square, kite) since the text repeatedly relies on "special case of" relations that are easier to read as a hierarchy.
- [Example] Brahmagupta's formula has no numerical check; add one, e.g. a $3\times4$ rectangle ($s=7$, $K=\sqrt{4\cdot3\cdot4\cdot3}=12$), and note that $d\to0$ recovers Heron's formula.
- [Simplify] The parallelogram diagonal-bisection argument ("the triangles made by their intersection have equal alternate angles and equal opposite sides") should name the congruence test used (ASA).

### N0093

Note: [[Triangles and symmetry|Triangles and symmetry]]  
Priority: low · Graph: no · Manim: no

Clear and correct; the centroid vector argument and Heron cross-check are good teaching devices.

- [Example] Heron's formula is stated without proof or pointer; add a link to where it is derived (e.g. from the cosine rule in [[Solve plane triangles]] or [[04.03 Triangles]]).
- [Simplify] The centroid sentence "the point $\tfrac13A+\tfrac23(B+C)/2$" is easy to misread; write it as $A+\tfrac23\bigl(\tfrac{B+C}2-A\bigr)=\tfrac{A+B+C}3$.
- [Structure] Add a figure showing the four centers (centroid, circumcenter, incenter, orthocenter) for one obtuse triangle, since the text claims the circumcenter and orthocenter can lie outside.

### N0094

Note: [[03.05 Trigonometric functions|03.05 Trigonometric functions]]  
Priority: low · Graph: yes · Manim: yes

Correct, compact treatment of amplitude, period and phase with a good worked table; it heavily overlaps [[Unit-circle function graphs]].

- [Structure] This note and [[Unit-circle function graphs]] cover the same family $A\sin(B(x-h))+D$ with nearly identical worked examples; decide which is the main note and make the other link to it rather than repeat.
- [Graph] Replace or supplement the static SVG with a native 2D plot of $g(x)=2\sin(3(x-\pi/6))-1$ over $x\in[0,4\pi/3]$ together with $\sin x$ dashed, so the reader sees the stretch, shift and midline relative to the parent.
- [Manim] Animate a point moving round the unit circle while its height is traced against the angle on an adjacent axis, to show how the sine graph is generated from circular motion.
- [Graph] Add a plot of $\tan x$ on $(-3\pi/2,3\pi/2)$ with vertical asymptotes, since tangent's period and unboundedness are only stated in words.

### N0095

Note: [[04.03 Triangles|04.03 Triangles]]  
Priority: low · Graph: no · Manim: no

Clear, correct derivations of Pythagoras, cosine rule and sine rule with a well-chosen worked example.

- [Structure] The cosine-rule and sine-rule derivations are repeated almost verbatim in [[Solve plane triangles]]; keep the derivation here and let that note link back.
- [Structure] Add a figure for the four-triangle Pythagoras proof; the prose description of the arrangement is hard to visualise.
- [Intuition] Add the circumradius interpretation $a/\sin A=2R$ in one sentence; it explains why the common ratio in the sine rule has geometric meaning.

### N0096

Note: [[04.04 Angular measure|04.04 Angular measure]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; the arc-versus-chord distinction is well made and the numbers check.

- [Graph] Plot arc length $r\alpha$ and chord $2r\sin(\alpha/2)$ for $r=1$, $\alpha\in[0,2\pi]$ on one 2D graph, showing they agree for small $\alpha$ and diverge (chord peaks at $2$ at $\alpha=\pi$).
- [Intuition] Add the small-angle remark that chord $\approx$ arc when $\alpha$ is small, linking to the $\sin x/x\to1$ argument in [[Unit-circle function graphs]].

### N0097

Note: [[04.05 The unit circle|04.05 The unit circle]]  
Priority: low · Graph: no · Manim: yes

Correct and well-structured unit-circle definition with signed coordinates and exact values.

- [Manim] Animate a point moving around the unit circle with its horizontal and vertical projections highlighted and their signs changing by quadrant; this conveys signs and periodicity better than the static figure.
- [Example] Add a short table of all sixteen standard angles ($k\pi/6$, $k\pi/4$) or a link to one, since students use this note as a reference for exact values.

### N0098

Note: [[04.06 Trigonometric identities|04.06 Trigonometric identities]]  
Priority: low · Graph: no · Manim: yes

Clean rotation-based derivation of the addition formulas; correct and well-checked.

- [Manim] Animate rotating the vector $(\cos\beta,\sin\beta)$ by $\alpha$, showing the rotated basis vectors $R_\alpha\mathbf e_x$, $R_\alpha\mathbf e_y$ and the decomposition, so the linearity step is visible.
- [Structure] This derivation duplicates the one in [[Trigonometric addition and multiple angles]]; keep one canonical derivation and link from the other.

### N0099

Note: [[Circular and hyperbolic geometry|Circular and hyperbolic geometry]]  
Priority: low · Graph: yes · Manim: yes

Good, correct parallel between circle and hyperbola via the sector-area parameter, with a useful numerical distinction between $u$ and the ray angle.

- [Graph] Add a native 2D plot of $x^2+y^2=1$ and the right branch of $x^2-y^2=1$ with the asymptotes $y=\pm x$, marking the points for $t=u=\ln2$ and shading both sectors, as a companion to the SVG.
- [Manim] Animate $u$ increasing from $0$ to $2$: the point $(\cosh u,\sinh u)$ moves along the hyperbola while the shaded sector grows, with a counter showing area $=u/2$, alongside the analogous circle motion.
- [Simplify] The calculus check "$dA=(x\,dy-y\,dx)/2$ ... gives $dA=du/2$" skips the one-line computation $\cosh^2u-\sinh^2u=1$; show it explicitly.

### N0100

Note: [[Geometry and trigonometry - Overview|Geometry and trigonometry - Overview]]  
Priority: low · Graph: no · Manim: no

Short topic overview that lists only the numbered 04.xx notes.

- [Links] The overview omits [[03.05 Trigonometric functions]] and all catalogue notes in this folder tree (spherical trigonometry, inverse functions, conics, curves); add a line linking [[Geometry - Catalogue Guide]] so the full chapter is reachable.

### N0101

Note: [[Geometry on a sphere|Geometry on a sphere]]  
Priority: low · Graph: yes · Manim: no

Careful, correct introduction to spherical geometry with explicit Eulerian conventions; slightly dense for a first reading.

- [Graph] Add a native 3D plot of a unit sphere with two great circles bounding a lune of angle $\alpha=\pi/3$ (and optionally the octant triangle) to support the area argument.
- [Simplify] The polar-triangle paragraph is abstract; add a concrete check using the octant (its polar triangle is itself, since $\pi-\pi/2=\pi/2$).
- [Intuition] Explain in one sentence why the triangle area must exceed zero only through the angle excess, foreshadowing Girard's theorem in [[Spherical triangle identities]].

### N0102

Note: [[Inverse trigonometric sum identities|Inverse trigonometric sum identities]]  
Priority: medium · Graph: yes · Manim: no

Correct and thorough branch analysis, but the many case formulas are hard to absorb without a picture.

- [Graph] Plot $\arctan x+\arctan y$ against the naive $\arctan\bigl((x+y)/(1-xy)\bigr)$ along the line $y=x$, $x\in[-4,4]$; the jump of $\pm\pi$ at $x=\pm1$ makes the branch correction obvious.
- [Graph] Add a 2D region plot in the $(x,y)$ square $[-1,1]^2$ shading where $C<0$ (i.e. $x^2+y^2>1$ with $xy>0$), showing where $\arcsin x+\arcsin y$ leaves $[-\pi/2,\pi/2]$.
- [Intuition] State the geometric reason for the $C<0$ condition: with $x,y$ of the same sign, $C<0$ is equivalent to $x^2+y^2>1$; this is easier to remember than the algebraic expression.
- [Simplify] The inverse-cosine difference rule is given only in words ("Its sign is positive when $y>x$"); write it as a displayed formula $\arccos x-\arccos y=\operatorname{sgn}(y-x)\arccos C_-$.

### N0103

Note: [[Kosinussatz|Kosinussatz]]  
Priority: medium · Graph: no · Manim: no

A one-line German-titled stub containing only the formula, with no frontmatter, TLDR, context, or backlinks.

- [Structure] Either delete this stub or turn it into a redirect to [[04.03 Triangles#The cosine rule]] / [[Solve plane triangles]]; it duplicates them, has no quoted title, TLDR or explanation, and uses $\gamma$ where the vault uses $C$ for the angle.

### N0104

Note: [[Principal inverse trigonometric values|Principal inverse trigonometric values]]  
Priority: low · Graph: yes · Manim: no

Correct, careful treatment of principal branches and folding; a graph would make the folding formulas immediate.

- [Graph] Plot $\arcsin(\sin t)$, $\arccos(\cos t)$ and $\arctan(\tan t)$ for $t\in[-3\pi,3\pi]$ (triangle wave, absolute-value wave, sawtooth); this visualises the piecewise reduction formula.
- [Graph] Plot $\sin x$ on $[-2\pi,2\pi]$ with the restricted piece on $[-\pi/2,\pi/2]$ highlighted and its reflection $y=\arcsin x$ across $y=x$.

### N0105

Note: [[Sinusoidal sums and envelopes|Sinusoidal sums and envelopes]]  
Priority: medium · Graph: yes · Manim: yes

Correct content, but the phase-vector convention is confusing because the figure uses the opposite sign to the worked example.

- [Structure] The section "Read a phase diagram consistently" exists only because Fig. C.ch02a.4 draws $(3,4)$ while the worked example needs $(3,-4)$ under the plus-phase convention; redraw the figure for the worked example (or switch the example to $3\cos kx-4\sin kx$) and drop the warning section.
- [Graph] Plot $\cos(10x)+\cos(11x)$ on $x\in[0,4\pi]$ with the envelope $\pm2|\cos(x/2)|$ dashed to illustrate beats.
- [Graph] Plot $5e^{-x/4}\cos(2x-\arctan(4/3))$ with envelopes $\pm5e^{-x/4}$ on $x\in[0,12]$ for the damping paragraph.
- [Manim] Animate two phasors of lengths $3$ and $4$ rotating at the same rate with their tip-to-tail sum, while the projection traces the resulting sinusoid; then repeat with unequal rates to show the resultant length oscillating (beats).

### N0106

Note: [[Sinussatz|Sinussatz]]  
Priority: medium · Graph: no · Manim: no

A one-line German-titled stub containing only the sine-rule formula, with no frontmatter, TLDR, context, or backlinks.

- [Structure] Either delete this stub or turn it into a redirect to [[04.03 Triangles#The sine rule]] / [[Solve plane triangles]]; it duplicates them and uses $\alpha,\beta,\gamma$ where the vault uses $A,B,C$.

### N0107

Note: [[Solve plane triangles|Solve plane triangles]]  
Priority: low · Graph: yes · Manim: no

Correct and practical; the SSA two-solution example is fully verified and paired with the side lengths.

- [Graph] Add a 2D construction plot for the SSA example: ray from $A$ at $30^\circ$, point $C$ with $b=10$, and the circle of radius $a=7$ about $C$ meeting the base line at the two positions of $B$ ($c\approx3.761$ and $13.559$); this shows the ambiguity geometrically.
- [Structure] The sine- and cosine-rule derivations repeat [[04.03 Triangles]]; link there and keep only the solution-route decision table here.
- [Simplify] Summarise the SSA cases (no, one, two triangles) as a short table in terms of $a$ versus $b\sin A$ and $b$.

### N0108

Note: [[Solve spherical triangles|Solve spherical triangles]]  
Priority: low · Graph: yes · Manim: no

Correct and well-checked worked examples; one terminology slip in the distance formula.

- [Correctness] In "Spherical curves and distances from coordinates", "apply the spherical cosine rule to their polar triangle" misuses the term defined in [[Geometry on a sphere]]; it should say "to the triangle formed by the north pole and the two points", whose sides are the colatitudes $\pi/2-\varphi_1$, $\pi/2-\varphi_2$ with included angle $\Delta\lambda$.
- [Graph] Add a 3D plot of a unit sphere with two points at latitude $60^\circ$ separated by $90^\circ$ longitude, drawing both the great-circle arc and the parallel arc, to support the $0.7227R$ versus $0.7854R$ comparison.
- [Simplify] Add a short decision table (data pattern, formula to use, number of solutions) at the start of "Inputs, outputs, and branches".

### N0109

Note: [[Spherical triangle identities|Spherical triangle identities]]  
Priority: low · Graph: no · Manim: no

Correct and complete derivations (coordinate cosine rule, symmetric sine-rule proof, Girard by lunes); dense but rigorous.

- [Structure] Add a figure for the Girard double-lune counting argument; the covering statement is hard to visualise from text alone.
- [Intuition] Add the small-triangle limit explicitly: expanding $\cos c=\cos a\cos b+\sin a\sin b\cos C$ to second order gives $c^2\approx a^2+b^2-2ab\cos C$, showing how the plane rule emerges.
- [Simplify] The sine-rule derivation says "subtract its square from 1 and simplify the numerator"; show the one intermediate line $(1-y^2)(1-z^2)-(x-yz)^2=1-x^2-y^2-z^2+2xyz$.

### N0110

Note: [[Survey coordinates and angles|Survey coordinates and angles]]  
Priority: low · Graph: yes · Manim: no

Correct, clearly scoped note distinguishing grid, sphere and ellipsoid models; the traverse example checks out.

- [Graph] Plot the worked traverse $P\to Q\to S$ in $(E,N)$ axes with north up and azimuth arcs, so the clockwise-from-north convention is visible.
- [Intuition] Add one sentence that azimuth $=\operatorname{atan2}(\Delta E,\Delta N)$ is the usual $\operatorname{atan2}(y,x)$ with the roles of the axes swapped, which is exactly the conversion $\theta=90^\circ-\alpha$.

### N0111

Note: [[Trigonometric addition and multiple angles|Trigonometric addition and multiple angles]]  
Priority: low · Graph: yes · Manim: no

Correct, well-explained derivations including the tangent half-angle substitution and its excluded point.

- [Structure] The rotation derivation duplicates [[04.06 Trigonometric identities]]; keep one and link.
- [Graph] Plot the rational parametrization $\bigl(\tfrac{1-t^2}{1+t^2},\tfrac{2t}{1+t^2}\bigr)$ for $t\in[-10,10]$, marking $t=0,\pm1,\pm3$, to show the circle traced except $(-1,0)$.
- [Example] Add a numerical check of the Chebyshev recurrence, e.g. $\cos3x=2\cos x\cos2x-\cos x$ reproducing $4\cos^3x-3\cos x$.

### N0112

Note: [[Trigonometric equations|Trigonometric equations]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; the worked examples and the lost-root warning are well chosen.

- [Graph] Plot $y=\sin x$ and $y=1/2$ on $[-2\pi,4\pi]$ marking the two solution families $\pi/6+2k\pi$ and $5\pi/6+2k\pi$ in different colors.
- [Example] Add an example where squaring introduces extraneous roots (e.g. $\sin x+\cos x=1$), since the note warns about square roots but never shows the failure.

### N0113

Note: [[Trigonometric products sums and powers|Trigonometric products sums and powers]]  
Priority: low · Graph: yes · Manim: no

Correct derivations with good sign checks; well organised.

- [Graph] Plot $\cos^2x$ with its midline $1/2$ and $\tfrac12\cos2x$ on $[0,2\pi]$ to illustrate the full-period-average remark.
- [Simplify] Give $\cos u\sin v=\tfrac12[\sin(u+v)-\sin(u-v)]$ explicitly instead of "exchange the roles of $u$ and $v$ carefully", since this is the formula students most often get wrong.

### N0114

Note: [[Unit-circle function graphs|Unit-circle function graphs]]  
Priority: low · Graph: yes · Manim: no

Correct and complete for the six circular functions; overlaps strongly with [[03.05 Trigonometric functions]].

- [Graph] Add native plots of $\sec x$ and $\csc x$ on $(-2\pi,2\pi)$ with $\cos x$, $\sin x$ dashed, showing how reciprocal gaps and poles arise.
- [Graph] Plot $\sin x/x$ near zero together with the squeeze bounds $\cos x$ and $1$ on $(-\pi/2,\pi/2)$ for the small-angle section.
- [Structure] The amplitude-period-shift section and worked example repeat [[03.05 Trigonometric functions]]; merge or cross-reference.

### N0115

Note: [[04.01 Coordinates|04.01 Coordinates]]  
Priority: low · Graph: no · Manim: no

Clear, correct, beginner-friendly introduction to displacement, distance and midpoints.

- [Example] Add a three-dimensional distance example (e.g. from $(1,2,3)$ to $(4,6,15)$, distance $13$), since the 3D formula is derived but never used.

### N0116

Note: [[04.02 Lines and planes|04.02 Lines and planes]]  
Priority: low · Graph: yes · Manim: no

Correct and well-organised; the spatial worked intersections are checked.

- [Graph] Add a 3D plot of the planes $x+y+z=6$ and $x-y+z=2$ with their intersection line $(4,2,0)+t(-1,0,1)$, for $x,y,z\in[-2,6]$.
- [Links] Link to [[Lines planes and intersections in space]] for distances and skew-line computations, which extend this note.

### N0117

Note: [[04.07 Projections|04.07 Projections]]  
Priority: low · Graph: no · Manim: no

Clear and correct; the nearest-point argument and the reference-angle warning are good.

- [Links] Link [[Lines planes and intersections in space]], whose point-to-plane foot formula is the same projection with a normal vector.

### N0118

Note: [[Affine transformations and homogeneous coordinates|Affine transformations and homogeneous coordinates]]  
Priority: low · Graph: yes · Manim: yes

Correct and clear; composition order is demonstrated with a concrete example.

- [Manim] Animate a unit grid and a unit square under the shear $\begin{pmatrix}1&2\\0&1\end{pmatrix}$, then a rotation, then a translation, showing that lines stay lines and areas scale by $|\det A|$.
- [Graph] Plot the image of the square grid under the deformation $F(x,y)=(x,y+x^2)$ for $x,y\in[-2,2]$ to show horizontal lines becoming parabolas.
- [Example] Add a numeric check of the rotate-about-$C$ formula in matrix form, using the practice answer: $C-RC$ for $R=R_\pi$ and $C=(1,1)$ gives translation $(2,2)$.

### N0119

Note: [[Cubic curves|Cubic curves]]  
Priority: low · Graph: yes · Manim: no

Correct and well-sourced; parametrizations are derived and the worked check is exact.

- [Graph] Replace or supplement the SVG with native 2D implicit plots for $a=1$: $y^2=x^3$, $y=1/(x^2+1)$, $x^3+y^3=3xy$ with asymptote $x+y=-1$, $y^2(2-x)=x^3$ with asymptote $x=2$, and $y^2=x^2(1-x)/(1+x)$ with asymptote $x=-1$.
- [Simplify] In the Witch section, the geometric construction is described only in words; add the two-line derivation (ray angle $\theta$: $M=(a\cot\theta,a)$, $L$ has height $a\sin^2\theta$, so $t=\cot\theta$) that the cissoid section already gives.

### N0120

Note: [[Lines circles and conic sections|Lines circles and conic sections]]  
Priority: low · Graph: yes · Manim: no

Correct and concise conic summary; the rotation condition and worked ellipse are verified.

- [Structure] The letters $a,b,c$ are reused: line coefficients in $ax+by+c=0$, then semi-axes and focal distance, and $C$ is also a quadratic coefficient; rename the line coefficients (e.g. $\alpha x+\beta y+\gamma=0$) or add a note that each section redefines them.
- [Graph] Add a 2D plot of the ellipse $(x-1)^2+(y+2)^2/4=1$ with its foci $(1,-2\pm\sqrt3)$, and the hyperbola $x^2/9-y^2/16=1$ with asymptotes $y=\pm4x/3$ and foci $(\pm5,0)$.
- [Intuition] Add the unified focus-directrix definition $|PF|=e\,\operatorname{dist}(P,\text{directrix})$ in one paragraph, which explains why eccentricity classifies all three conics.

### N0121

Note: [[Lines planes and intersections in space|Lines planes and intersections in space]]  
Priority: low · Graph: yes · Manim: no

Correct, compact treatment of distances and intersections; the worked numbers check.

- [Graph] Add a 3D plot of the plane $x+2y+2z=6$, the line $t(1,1,1)$, its intersection $(6/5,6/5,6/5)$ and the perpendicular foot $(2/3,4/3,4/3)$, showing why they differ.
- [Example] Add an angle example: for the worked line and plane, $\eta=\arcsin(5/(3\sqrt3))\approx74.2^\circ$.

### N0122

Note: [[Oblique bases and vector equations|Oblique bases and vector equations]]  
Priority: low · Graph: yes · Manim: no

Correct and well-motivated introduction to covariant and contravariant components with a clean numerical example.

- [Graph] Add a native 2D plot with $\mathbf b_1=(1,0)$, $\mathbf b_2=(1,2)$, $\mathbf v=(3,4)$, the parallelogram decomposition $1\mathbf b_1+2\mathbf b_2$, and the orthogonal projections onto each basis direction (lengths $3/1$ and $11/\sqrt5$), to show the two component types geometrically.
- [Intuition] Add one sentence that covariant components are (unnormalised) perpendicular projections, while contravariant components are parallel-to-the-other-axis projections.

### N0123

Note: [[Parallel and perspective projections|Parallel and perspective projections]]  
Priority: low · Graph: yes · Manim: no

Correct and clearly scoped; isometric and perspective formulas are derived and checked.

- [Graph] Add a 2D plot of the isometric image of the unit cube's edges using $(\xi,\eta)=((x-y)/\sqrt2,(x+y-2z)/\sqrt6)$, and next to it the cabinet projection $(x+z\cos45^\circ/2,y+z\sin45^\circ/2)$ of the same cube.
- [Example] Add a vanishing-point computation, e.g. lines $P+t(0,0,1)$ in view coordinates converge to image point $(0,0)$ and lines with direction $(1,0,1)$ converge to $(f_0,0)$.

### N0124

Note: [[Plane coordinates and point constructions|Plane coordinates and point constructions]]  
Priority: low · Graph: no · Manim: no

Correct and compact; triangle centers and the shoelace formula are explained and checked.

- [Example] Add a shoelace example for a non-triangle, e.g. the quadrilateral $(0,0),(4,0),(5,3),(1,4)$, to show the cyclic sum in use.
- [Simplify] The incenter formula is justified only by "The angle-bisector theorem gives this ratio"; add the one-step reasoning (the bisector from $A$ divides $BC$ in ratio $c:b$).

### N0125

Note: [[Quadric surfaces and their classification|Quadric surfaces and their classification]]  
Priority: low · Graph: yes · Manim: no

Correct, well-structured classification with a verified rotated-ellipsoid example.

- [Graph] Add native 3D surface plots for $a=b=c=1$: ellipsoid, one-sheet and two-sheet hyperboloids, cone, elliptic and hyperbolic paraboloids, ideally in one grid of panels.
- [Structure] Add a summary table (signs of eigenvalues, constant, linear term present?) mapping to the surface type.
- [Links] Link [[Quadrics and motion along space curves]], which treats the same surfaces by traces with worked sketches.

### N0126

Note: [[Space coordinates and rotation conventions|Space coordinates and rotation conventions]]  
Priority: low · Graph: yes · Manim: yes

Correct and careful about conventions; the non-commutation example is concrete.

- [Manim] Animate a labelled box rotated by $R_x(\pi/2)$ then $R_y(\pi/2)$, and in parallel by the reverse order, ending in visibly different orientations.
- [Graph] Add a 3D plot illustrating spherical coordinates for the point $(1,1,\sqrt2)$ with $\rho$, $\theta$ and $\phi$ marked.
- [Intuition] Add an example of gimbal lock: at $\beta=\pi/2$ show that $R_z(\gamma)R_y(\pi/2)R_x(\alpha)$ depends only on $\gamma-\alpha$.

### N0127

Note: [[Third-degree rational curve families|Third-degree rational curve families]]  
Priority: low · Graph: yes · Manim: no

Correct and well-argued analysis of the three handbook families; worked examples check.

- [Graph] Plot $f(x)=2-4/x+1/x^2$ with asymptote $y=2$ on $x\in[-4,4]$, and $g(x)=1/(x^2-4x+5)$, $h(x)=x/(x^2+1)$, $x/(x^2-1)$ for comparison.
- [Links] The handbook link points to a PDF copy on alnasiry.net, which is not an authorised source; cite the publisher edition (Bronshtein et al., Springer) instead.

### N0128

Note: [[04.08 Circular and cylindrical coordinates|04.08 Circular and cylindrical coordinates]]  
Priority: low · Graph: yes · Manim: no

Correct and clear; the line element and finite arc-versus-chord check are well explained.

- [Graph] Add a 2D polar grid plot showing the small curvilinear rectangle with sides $dr$ and $r\,d\theta$ at two radii, to make the scale factor $r$ visible.
- [Links] Link [[Space coordinates and rotation conventions]] for the spherical counterpart and [[Plane coordinates and point constructions]] for atan2 conversion.

### N0129

Note: [[Arc length and parametric curves|Arc length and parametric curves]]  
Priority: medium · Graph: yes · Manim: yes

A correct but raw lecture transcription with handwritten sketches, editorial notes about the handwriting, and h5 headings that do not form a clear structure.

- [Structure] Replace the "##### Point Q/R/P", empty "##### Parametric trajectory" and other h5 headings with a proper h2/h3 hierarchy, and move transcription remarks ("The handwritten statement has a plus sign", "The sketch labels its horizontal coordinate 4") into a single source-note callout.
- [Graph] Replace the handwritten parametric sketches (Figs. 13, 14, 25) with native 2D plots: $x=1+\sqrt t$, $y=t^2-4t$ on $[0,4]$; $x=\sqrt t$, $y=1-t$ on $[0,9]$; $x=t^2$, $y=t^3-3t$ on $[-2,2]$ with the two tangents $y=\pm\sqrt3(x-3)$.
- [Simplify] Simplify the boxed second derivative for $x=t^3+t$, $y=t^5+1$ to $\dfrac{10t^3(3t^2+2)}{(3t^2+1)^3}$.
- [Links] The internal link [[#Tangents at $(3,0)$|...]] targets a heading containing inline LaTeX; check it resolves in reading mode or rename the heading to plain text.
- [Manim] Animate a circle rolling along the axis tracing the cycloid arch while the area under it fills, ending with the $3\pi r^2$ result (three times the rolling disk).
- [Intuition] Before the arc-length formula, add the one-line derivation $\Delta s\approx\sqrt{\Delta x^2+\Delta y^2}=\sqrt{1+(\Delta y/\Delta x)^2}\,\Delta x$, which the figure suggests but the text omits.

### N0130

Note: [[Cassini ovals and the lemniscate|Cassini ovals and the lemniscate]]  
Priority: low · Graph: yes · Manim: yes

Correct and clear derivation and classification; the lemniscate parametrization is verified.

- [Intuition] "A single oval can still be indented" should give the threshold: for $a<b<\sqrt2a$ the oval is dented, and it becomes convex for $b\ge\sqrt2a$.
- [Graph] Add a native 2D implicit plot of $(x^2+y^2+1)^2-4x^2=b^4$ for $b=0.8,1,1.2,1.5$ (foci $(\pm1,0)$).
- [Manim] Animate $b$ increasing from $0.5$ to $2$ with $a=1$, showing two loops merge into the lemniscate at $b=1$, then a dented oval, then a convex oval at $b=\sqrt2$.

### N0131

Note: [[Catenary and tractrix|Catenary and tractrix]]  
Priority: low · Graph: yes · Manim: yes

Correct and well-motivated; the tractrix tangent property is proved and checked numerically.

- [Graph] Plot $y=\cosh x$ against the parabola $y=1+x^2/2$ for $x\in[-3,3]$ to illustrate the vertex-only agreement claimed in the text.
- [Manim] Animate the tractrix as a dragged object: the end of a rod of length $a$ moves along the $x$-axis while the other end follows, showing the constant tangent segment.
- [Intuition] Mention in one sentence the classical link that the tractrix is an involute of the catenary, connecting the two halves of the note and [[Evolutes involutes and envelopes]].

### N0132

Note: [[Conchoids and limacons|Conchoids and limacons]]  
Priority: low · Graph: yes · Manim: yes

Correct and careful about signed radii and spurious origins; worked examples check.

- [Graph] Add a native polar plot of $r=B+2\cos\theta$ for $B=1,2,3,4$ (inner loop, cardioid, dimpled, convex) on one figure.
- [Manim] Animate the conchoid construction: a ray through the pole sweeps, its intersection $Q$ with the base line moves, and the two points at distance $b$ from $Q$ trace both branches of Nicomedes' curve.
- [Simplify] In "Cardioid", "The equality $r\ge0$ holds" should read "The inequality $r\ge0$ holds".

### N0133

Note: [[Cycloids and trochoids|Cycloids and trochoids]]  
Priority: low · Graph: yes · Manim: yes

Clear and correct centre-plus-offset construction with good classification of curtate and prolate cases.

- [Manim] Animate the circle rolling along the baseline with three marked points ($d=a/2$, $d=a$, $d=3a/2$) tracing curtate, ordinary and prolate trochoids simultaneously.
- [Graph] Add a native 2D parametric plot of $x=t-d\sin t$, $y=1-d\cos t$ for $d=0.5,1,1.5$ and $t\in[0,4\pi]$.

### N0134

Note: [[Epicycloids and hypocycloids|Epicycloids and hypocycloids]]  
Priority: low · Graph: yes · Manim: yes

Correct and carefully derived; the extra-turn explanation and the astroid reduction are well done.

- [Manim] Animate a circle rolling outside ($R=3r$, three cusps) and inside ($R=4r$, astroid) a fixed circle, with the marked point tracing the curve; include the degenerate $R=2r$ case where the point moves on a diameter.
- [Graph] Add a native plot of the epitrochoid $x=3\cos t-d\cos3t$, $y=3\sin t-d\sin3t$ for $d=0.5,1,2$ to show curtate, cusped and looped cases.
- [Intuition] Expand the "one extra turn" remark with the coin-rotation example: a coin rolled once round an equal coin turns twice.

### N0135

Note: [[Evolutes involutes and envelopes|Evolutes involutes and envelopes]]  
Priority: low · Graph: yes · Manim: yes

Correct and concise; evolute, involute and envelope are each derived and checked.

- [Graph] Plot the parabola $y=x^2$ and its evolute $C(x)=(-4x^3,1/2+3x^2)$ for $x\in[-1,1]$, marking the cusp at $(0,1/2)$ and one normal line.
- [Manim] Animate a taut string unwinding from a circle of radius $1$, its free end tracing the involute $I(t)=(\cos t+t\sin t,\sin t-t\cos t)$.
- [Links] The circle involute is also derived in [[Spirals and involutes]]; cross-link the two.

### N0136

Note: [[Plane curves tangents and curvature|Plane curves tangents and curvature]]  
Priority: low · Graph: yes · Manim: no

Correct and well-organised introduction to tangent, normal, curvature and special points.

- [Graph] Plot $y=x^3-3x$ on $[-2.5,2.5]$ with the osculating circle at $(1,-2)$ (radius $1/6$, center $(1,-11/6)$) and the inflection tangent $y=-3x$.
- [Example] Add a curvature example where the parameter is not arc length and curvature varies, e.g. the ellipse $(2\cos t,\sin t)$ with $\kappa_s=2/(4\sin^2t+\cos^2t)^{3/2}$, maximal at the ends of the major axis.

### N0137

Note: [[Polar curves and their areas|Polar curves and their areas]]  
Priority: medium · Graph: yes · Manim: no

Correct worked lecture material (all areas and the tangent line verify), but it relies on handwritten sketches and lacks a derivation of the polar area formula and a clear structure.

- [Graph] Replace the handwritten rose and limacon sketches (Figs. 32–37, 39–46) with native polar plots: $r=3\cos2\theta$, $r=7\sin2\theta$, $r=6+4\sin\theta$, $r=2\cos4\theta$, and $r=\cos\theta$ with $r=\sin2\theta$ with the common region shaded.
- [Intuition] Under "Polar areas", explain the step from the sector area to the integral: a thin wedge of angle $d\theta$ has area $\tfrac12r^2d\theta$, and summing wedges gives $\int\tfrac12r^2d\theta$.
- [Simplify] In the $r=2\sin\theta$ example, note that the circle is traced twice on $[0,2\pi]$, so the five horizontal-tangent angles give only two distinct points, $(0,0)$ and $(0,2)$, and the four vertical-tangent angles give $(\pm1,1)$.
- [Structure] Replace the "##### " headings under "## Worked lecture material" with an h2/h3 hierarchy and add a TLDR-consistent introduction; link [[Conchoids and limacons]] for the limacon classification and [[04.08 Circular and cylindrical coordinates]] for coordinate conventions.

### N0138

Note: [[Quadrics and motion along space curves|Quadrics and motion along space curves]]  
Priority: high · Graph: yes · Manim: yes

A long, loosely structured lecture transcription mixing quadric traces, vector calculus, coordinates and kinematics, with about 48 handwritten images, editorial notes about the handwriting, and several symbol and table problems.

- [Correctness] The physical-quantities table describes $\mechanical{\theta}$ also as "horizontal direction of the initial velocity measured from the positive $x$-axis", a meaning never used in the note; the cylindrical/spherical azimuth $\theta$ is written uncolored, so the row should describe only the rolling-circle rotation angle.
- [Correctness] Symbol clash: in "Arc length and kinematics" $s$ is the integration variable in $\int_0^{t}\mechanical{\mathbf v}(s)\,ds$, while the next section and the cycloid use $s$ as arc length; rename the dummy variable to $\tau$ as the arc-length section already does.
- [Correctness] Macro misuse: the helix example writes $\mechanical{\mathbf r}(t)=\langle\cos t,t,\sin t\rangle$ "in numerical coordinates" with an uncolored dimensionless $t$; either drop the mechanical macros there or give the example units and a colored time.
- [Structure] Split the note: the quadric-traces half duplicates [[Quadric surfaces and their classification]] and the space-curve/coordinates half duplicates [[Space curves and moving frames]] and [[04.08 Circular and cylindrical coordinates]]; move each part next to its counterpart, use an h2/h3 hierarchy instead of "##### ", and gather all handwriting remarks into one source callout.
- [Graph] Replace the handwritten quadric sketches (Figs. 33–56) with native 3D plots: $z=x^2$, $x^2+z^2/4=1$, $x^2/4+y^2/9+z^2=1$, $z^2-x^2-y^2=\pm1$, $z^2=x^2+y^2$, $z=x^2+4y^2$, $z=x^2-4y^2$, each on $[-3,3]^2$; and plot the cone-plane intersection ellipse with the plane $z=(x-6)/3$.
- [Manim] Animate the left-rolling circle with the marked point $P$, drawing its velocity vector (length $R\omega\sqrt{2(1+\sin\theta)}$) so the reader sees it vanish at the bottom contact and reach $2R\omega$ at the top.

### N0139

Note: [[Space curves and moving frames|Space curves and moving frames]]  
Priority: low · Graph: yes · Manim: yes

Correct and clear; the Frenet derivation and the helix example (curvature, torsion, frame, osculating plane) all verify.

- [Manim] Animate the Frenet frame $(T,N,B)$ moving along the helix $(2\cos t,2\sin t,t)$, showing $N$ always pointing to the axis and $B$ tilting with constant torsion.
- [Graph] Add a 3D plot of the helix for $a=2$, $b=1$, $t\in[0,4\pi]$ with the frame vectors drawn at $t=0$.
- [Example] Add a curve with non-constant curvature and torsion, e.g. the twisted cubic $(t,t^2,t^3)$ at $t=0$ ($\kappa=2$, $\tau=3$), to show the general formulas at work.

### N0140

Note: [[Spirals and involutes|Spirals and involutes]]  
Priority: low · Graph: yes · Manim: yes

Correct and well-explained spirals, involute and clothoid, with a useful worked example contrasting growth rules.

- [Graph] Add native polar plots of $r=\theta/\pi$ (Archimedean), $r=1/\theta$ for $\theta\in[0.3,6\pi]$ with asymptote $y=1$, and $r=e^{0.15\theta}$, plus a parametric plot of the clothoid from Fresnel integrals for $s\in[-6,6]$ with $k=1/4$.
- [Manim] Animate a point travelling along the clothoid with its osculating circle shrinking linearly in $1/s$, to show curvature growing in proportion to arc length.
- [Links] The circle involute derivation duplicates [[Evolutes involutes and envelopes]]; cross-link the two.
