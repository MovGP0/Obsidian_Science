---
title: "Note Improvement Tracker – 03 Engineering/01 Robotics"
---

> [!TLDR]
> This note tracks the review of the 8 notes in `03 Engineering/01 Robotics`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 13 possible errors or notation conflicts. 13 of them are verified (13 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N3827|N3827]] Configuration Space: The opening bullet "Defines the number of possible configurations" is wrong: the C-space is the set (manifold) of all configurations, and its dimension equals the \[\[Degrees of Freedom\]\]; rewrite both bullets to say this. **Fixed:** Rewrote both bullets: C-space is the set (manifold) of all configurations and its dimension equals the DoF.
- [[#N3827|N3827]] Configuration Space: Torus row "$(φ₁, φ₂) ∈ S²$" and 3-torus row "$(φ₁, φ₂, φ₃) ∈ S³$" clash with the sphere row, where $S^2$ means the 2-sphere; write $S^1\times S^1 = T^2$ and $S^1\times S^1\times S^1=T^3$, and rename $S$ to $S^1$ throughout. **Fixed:** Renamed S to S^1 throughout the table and wrote the tori as S^1 × S^1 (T²) and S^1 × S^1 × S^1 (T³).
- [[#N3827|N3827]] Configuration Space: The callout "$S = [0,2π)$" gives an interval, which is not topologically a circle; state that $S^1$ is $[0,2\pi]$ with $0$ and $2\pi$ identified. The sphere row "$(θ, φ) ∈ [0,π)×S$" leaves out the pole at $θ=\pi$ and is only a chart, not the sphere itself; say $S^2$ is parametrized by $θ\in[0,\pi]$, $φ\in S^1$ with singular poles. **Fixed:** Callout now says S^1 = [0,2π] with 0 and 2π identified; sphere row now θ ∈ [0,π], φ ∈ S^1 with singular poles.
- [[#N3827|N3827]] Configuration Space: "Sphere Surface – Constant-radius orientation manifold" and "Helical Space $(x,y,z,φ)$ – Screw motion" are misleading: orientations of a rigid body form $SO(3)$, not $S^2$, and a screw (helical) joint has a 1-D C-space because translation is tied to rotation, while $(x,y,z,φ)$ is $\mathbb{R}^3\times S^1$; fix or remove these rows. **Fixed:** Sphere-surface row now says point on a sphere (implicit S²); helical row replaced by (x,y,z,φ) ∈ ℝ³ × S^1, 3D translation + rotation about one axis.
- [[#N3828|N3828]] Degrees of Freedom: "If geometric or kinematic dependencies exist ... Grübler’s result overestimates mobility" is backwards: dependent constraints are counted as if independent, so Grübler subtracts too many and gives a lower bound; actual DoF $\ge$ Grübler. **Fixed:** Changed to underestimate: Grübler subtracts too many and gives a lower bound, actual DoF ≥ Grübler.
- [[#N3828|N3828]] Degrees of Freedom: The second image under "Examples for dependence of constraints" has 5 bodies (ground, 3 parallel links, coupler) and 6 revolute joints, not "6 linkages"; Grübler gives $3(5-1-6)+6=0$, but it moves with 1 DoF because the third parallel link adds a redundant constraint. State this calculation explicitly, since it is the real dependence example. **Fixed:** Checked the image; bullet now gives N=5, J=6, 3(5-1-6)+6=0 but actual 1 DoF due to the redundant third parallel link.
- [[#N3828|N3828]] Degrees of Freedom: The four-bar is not an example of dependent constraints: $3(4-1-4)+4=1$ agrees with the actual mobility. Move it to a separate "worked Grübler example" subsection, and show the Stewart platform count $6(14-1-18)+(6\cdot2+6\cdot1+6\cdot3)=6$ for the third example. **Fixed:** Renamed heading to "Examples" (no new section), added four-bar count 3(4-1-4)+4=1 (independent) and Stewart count 6(14-1-18)+36=6.
- [[#N3828|N3828]] Degrees of Freedom: The definition "required to describe the stationary state of a system" is wrong: DoF is the minimum number of real coordinates needed to specify the configuration (velocities not included); "stationary" should go. Also fix the "Wikpedia" typo in See also. **Fixed:** Definition now says count of numbers needed to specify the configuration (velocities not included); fixed Wikipedia typo.
- [[#N3829|N3829]] Holonomic and Pfaffian constraints: The displayed matrix uses entries $\partial g_i/\partial\theta_j$, which is the Jacobian of position constraints $g(\theta)=0$, i.e. exactly an integrable (holonomic) constraint; the text then calls this "the defining feature of Pfaffian (non-integrable) constraints". Write the general form with arbitrary rows $A_{ij}(\theta)$ and present the Jacobian case as the holonomic special case. **Fixed:** Matrix now has general entries A_ij(θ), "constraint Jacobian" changed to "constraint matrix", added the Jacobian form as the holonomic special case.
- [[#N3829|N3829]] Holonomic and Pfaffian constraints: "Pfaffian (non-integrable)" and the closing bullet equate Pfaffian with nonholonomic; Pfaffian only means linear in velocities, $A(\theta)\dot\theta=0$, and it is holonomic iff integrable (Frobenius). Rewrite the note callout to say this. **Fixed:** Rewrote the note callout: Pfaffian means linear in velocities; holonomic if integrable (Frobenius), else nonholonomic; removed "(non-integrable)" from the closing bullet.
- [[#N3832|N3832]] Unicycle Model: The expansion under "Pfaffian Form" reads "$A(q)\dot{q} 0\cdot\dot\phi - \sin\phi , \dot x - \cos\phi , \dot y = 0$": it is missing "=", has the wrong sign on $\sin\phi\,\dot x$, and uses "," instead of "\,"; it should be $A(q)\dot q = 0\cdot\dot\phi + \sin\phi\,\dot x - \cos\phi\,\dot y = 0$. **Fixed:** Now A(q)q̇ = 0·φ̇ + sin φ \, ẋ − cos φ \, ẏ = 0.
- [[#N3832|N3832]] Unicycle Model: The column vector $\dot q$ uses "\ " instead of "\\" as row separators, so it renders as a single row; also line 91 "aligned with (\phi)" is not in math delimiters. **Fixed:** Replaced "\ " with "\\" row separators and wrote $\phi$.
- [[#N3832|N3832]] Unicycle Model: The unicycle has no steering angle: its inputs are $v$ and $\omega=\dot\phi$. Add the missing equation $\dot\phi=\omega$, and either restate "Relation to the Steering Angle" in terms of curvature $\kappa=\omega/v$ or link to the kinematic bicycle (car) model, where $\dot\phi=(v/L)\tan\delta$. Remove the references to "the paths on the right" and "the slide", which point to a figure that is not in the note. **Fixed:** Added φ̇ = ω and the inputs v, ω; renamed section to "Relation to the Path Curvature" with κ = ω/v and the bicycle-model relation φ̇ = (v/L)tan δ; removed the "on the right"/"slide" references.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N3827 | [[Configuration Space\|Configuration Space]] | Analyzed | high | yes | no | [[#N3827\|View]] |
| N3828 | [[Degrees of Freedom\|Degrees of Freedom]] | Analyzed | high | no | yes | [[#N3828\|View]] |
| N3829 | [[Holonomic and Pfaffian constraints\|Holonomic and Pfaffian constraints]] | Analyzed | high | no | no | [[#N3829\|View]] |
| N3830 | [[Reference Frame\|Reference Frame]] | Analyzed | low | no | no | [[#N3830\|View]] |
| N3831 | [[Task Space\|Task Space]] | Analyzed | low | no | no | [[#N3831\|View]] |
| N3832 | [[Unicycle Model\|Unicycle Model]] | Analyzed | high | yes | yes | [[#N3832\|View]] |
| N3833 | [[Unified Robot Description Format\|Unified Robot Description Format]] | Analyzed | low | no | no | [[#N3833\|View]] |
| N3834 | [[Work Space\|Work Space]] | Analyzed | low | yes | no | [[#N3834\|View]] |

## Suggestions

### N3827

Note: [[Configuration Space|Configuration Space]]  
Priority: high · Graph: yes · Manim: no

A terse list and topology table whose definition and set notation contain several errors that a reader would learn as fact.

- [Correctness] The opening bullet "Defines the number of possible configurations" is wrong: the C-space is the set (manifold) of all configurations, and its dimension equals the \[\[Degrees of Freedom\]\]; rewrite both bullets to say this.
- [Correctness] Torus row "$(φ₁, φ₂) ∈ S²$" and 3-torus row "$(φ₁, φ₂, φ₃) ∈ S³$" clash with the sphere row, where $S^2$ means the 2-sphere; write $S^1\times S^1 = T^2$ and $S^1\times S^1\times S^1=T^3$, and rename $S$ to $S^1$ throughout.
- [Correctness] The callout "$S = [0,2π)$" gives an interval, which is not topologically a circle; state that $S^1$ is $[0,2\pi]$ with $0$ and $2\pi$ identified. The sphere row "$(θ, φ) ∈ [0,π)×S$" leaves out the pole at $θ=\pi$ and is only a chart, not the sphere itself; say $S^2$ is parametrized by $θ\in[0,\pi]$, $φ\in S^1$ with singular poles.
- [Correctness] "Sphere Surface – Constant-radius orientation manifold" and "Helical Space $(x,y,z,φ)$ – Screw motion" are misleading: orientations of a rigid body form $SO(3)$, not $S^2$, and a screw (helical) joint has a 1-D C-space because translation is tied to rotation, while $(x,y,z,φ)$ is $\mathbb{R}^3\times S^1$; fix or remove these rows.
- [Intuition] In the explicit/implicit example, the pole singularity of $(θ,φ)$ is a coordinate singularity of the sphere chart; gimbal lock is the analogous effect for Euler angles on $SO(3)$, so say "analogous to gimbal lock" and add one sentence on why the poles are bad (longitude is undefined there).
- [Graph] Add a 3D plot of a torus parametrized by $(φ_1,φ_2)\in[0,2\pi)^2$ (radii $R=2$, $r=0.7$) with a sample 2R-arm path drawn on it next to the same path on the flat square with opposite edges identified.

### N3828

Note: [[Degrees of Freedom|Degrees of Freedom]]  
Priority: high · Graph: no · Manim: yes

The joint table and Grübler formula are right, but the definition and the dependent-constraint discussion state the opposite of the truth and the examples do not show what the heading claims.

- [Correctness] "If geometric or kinematic dependencies exist ... Grübler’s result overestimates mobility" is backwards: dependent constraints are counted as if independent, so Grübler subtracts too many and gives a lower bound; actual DoF $\ge$ Grübler.
- [Correctness] The second image under "Examples for dependence of constraints" has 5 bodies (ground, 3 parallel links, coupler) and 6 revolute joints, not "6 linkages"; Grübler gives $3(5-1-6)+6=0$, but it moves with 1 DoF because the third parallel link adds a redundant constraint. State this calculation explicitly, since it is the real dependence example.
- [Correctness] The four-bar is not an example of dependent constraints: $3(4-1-4)+4=1$ agrees with the actual mobility. Move it to a separate "worked Grübler example" subsection, and show the Stewart platform count $6(14-1-18)+(6\cdot2+6\cdot1+6\cdot3)=6$ for the third example.
- [Correctness] The definition "required to describe the stationary state of a system" is wrong: DoF is the minimum number of real coordinates needed to specify the configuration (velocities not included); "stationary" should go. Also fix the "Wikpedia" typo in See also.
- [Manim] Animate the parallelogram linkage of the second image: show it moving with 1 DoF while a counter displays the Grübler prediction 0, then remove the middle link and show that the count becomes 1.

### N3829

Note: [[Holonomic and Pfaffian constraints|Holonomic and Pfaffian constraints]]  
Priority: high · Graph: no · Manim: no

The intuitive car example is good, but the matrix form contradicts its own claim of non-integrability and the classification of Pfaffian vs nonholonomic is muddled.

- [Correctness] The displayed matrix uses entries $\partial g_i/\partial\theta_j$, which is the Jacobian of position constraints $g(\theta)=0$, i.e. exactly an integrable (holonomic) constraint; the text then calls this "the defining feature of Pfaffian (non-integrable) constraints". Write the general form with arbitrary rows $A_{ij}(\theta)$ and present the Jacobian case as the holonomic special case.
- [Correctness] "Pfaffian (non-integrable)" and the closing bullet equate Pfaffian with nonholonomic; Pfaffian only means linear in velocities, $A(\theta)\dot\theta=0$, and it is holonomic iff integrable (Frobenius). Rewrite the note callout to say this.
- [Example] Give one integrable and one non-integrable Pfaffian example side by side: a wheel rolling on a line, $\dot x - r\dot\theta=0$ (integrates to $x-r\theta=c$), versus the \[\[Unicycle Model\]\] constraint $\dot x\sin\phi-\dot y\cos\phi=0$.
- [Structure] The note starts at H3 with no definition of configuration $\theta$ or TLDR; add a short intro that defines $\theta\in\mathbb{R}^n$ and $k$ constraints, and fix the misaligned callout markers (" >-" lines 24–28) so the example renders as one callout.

### N3830

Note: [[Reference Frame|Reference Frame]]  
Priority: low · Graph: no · Manim: no

A short stub that mixes up coordinates and frames.

- [Simplify] Define a frame as an origin plus a set of orthonormal axes in which coordinates are measured (the coordinates do not "create" the frame), give the usual notation $\{s\}$ (space/fixed) and $\{b\}$ (body), and fix "it's" to "its" twice.

### N3831

Note: [[Task Space|Task Space]]  
Priority: low · Graph: no · Manim: no

A two-line placeholder.

- [Example] Add one concrete example contrasting it with \[\[Work Space\]\]: for a planar 2R arm drawing on paper the task space is $\mathbb{R}^2$ (pen position), while the workspace is the reachable annulus $|L_1-L_2|\le r\le L_1+L_2$.

### N3832

Note: [[Unicycle Model|Unicycle Model]]  
Priority: high · Graph: yes · Manim: yes

A clear verbal explanation, but the key matrix equations are broken, the model is confused with a steered car, and it references a slide figure that is not in the note.

- [Correctness] The expansion under "Pfaffian Form" reads "$A(q)\dot{q} 0\cdot\dot\phi - \sin\phi , \dot x - \cos\phi , \dot y = 0$": it is missing "=", has the wrong sign on $\sin\phi\,\dot x$, and uses "," instead of "\,"; it should be $A(q)\dot q = 0\cdot\dot\phi + \sin\phi\,\dot x - \cos\phi\,\dot y = 0$.
- [Correctness] The column vector $\dot q$ uses "\ " instead of "\\" as row separators, so it renders as a single row; also line 91 "aligned with (\phi)" is not in math delimiters.
- [Correctness] The unicycle has no steering angle: its inputs are $v$ and $\omega=\dot\phi$. Add the missing equation $\dot\phi=\omega$, and either restate "Relation to the Steering Angle" in terms of curvature $\kappa=\omega/v$ or link to the kinematic bicycle (car) model, where $\dot\phi=(v/L)\tan\delta$. Remove the references to "the paths on the right" and "the slide", which point to a figure that is not in the note.
- [Simplify] In "Eliminating the Speed" the division by $\cos\phi$ and $\sin\phi$ fails at $\phi=0,\pi/2$; derive the constraint directly as $\dot x\sin\phi-\dot y\cos\phi = v\cos\phi\sin\phi - v\sin\phi\cos\phi = 0$.
- [Intuition] "You can reach the same position with different orientations" is also true for a holonomic planar body; the real point is that only 2 velocity directions are allowed at each instant, yet every configuration in the 3-D space $(x,y,\phi)$ can be reached (Lie bracket of drive and turn gives sideways motion).
- [Manim] Animate a parallel-parking sequence (forward-left arc, backward-right arc, repeat) showing the heading arrow and forbidden lateral direction $\mathbf n$, ending with a net sideways displacement; add a static graph of trajectories for $v=1$ and $\omega\in\{0,\pm0.5,\pm1\}$ over $t\in[0,6]$.

### N3833

Note: [[Unified Robot Description Format|Unified Robot Description Format]]  
Priority: low · Graph: no · Manim: no

A link-only placeholder.

- [Structure] Add a TLDR and a minimal URDF snippet (one `<link>`, one revolute `<joint>` with `<origin>`, `<axis>`, `<limit>`) and link it to \[\[Reference Frame\]\] and \[\[Degrees of Freedom\]\].

### N3834

Note: [[Work Space|Work Space]]  
Priority: low · Graph: yes · Manim: no

A one-line placeholder.

- [Graph] Define the workspace as the set of end-effector positions reachable over the joint limits and add a 2D plot of a 2R arm’s workspace (annulus $|L_1-L_2|\le r\le L_1+L_2$ for $L_1=1$, $L_2=0.6$), linking it to \[\[Task Space\]\] and \[\[Configuration Space\]\].
