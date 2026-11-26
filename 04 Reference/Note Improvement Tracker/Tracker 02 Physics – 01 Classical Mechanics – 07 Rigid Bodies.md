---
title: "Note Improvement Tracker – 02 Physics/01 Classical Mechanics/07 Rigid Bodies"
---

> [!TLDR]
> This note tracks the review of the 17 notes in `02 Physics/01 Classical Mechanics/07 Rigid Bodies`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 1 possible errors or notation conflicts. 1 of them are verified (1 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N0947|N0947]] 07.15 Rigid-Body Exercises: In exercise 15, add that the rigid-Earth prediction (Euler period of about 305 days) differs from the observed Chandler wobble (about 433 days) because Earth is not rigid, so the identification is only approximate. **Fixed:** Added two sentences stating the ~305 d rigid prediction, the ~433 d observed period due to Earth's non-rigidity, and that the identification is approximate.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N0932 | [[07.00 Rigid Bodies\|07.00 Rigid Bodies]] | Analyzed | low | no | no | [[#N0932\|View]] |
| N0933 | [[07.01 Rigid-Body Approximation\|07.01 Rigid-Body Approximation]] | Analyzed | low | no | no | [[#N0933\|View]] |
| N0934 | [[07.02 Rigid-Body Kinematics\|07.02 Rigid-Body Kinematics]] | Analyzed | medium | yes | yes | [[#N0934\|View]] |
| N0935 | [[07.03 Center of Mass and Moment of Inertia\|07.03 Center of Mass and Moment of Inertia]] | Analyzed | medium | no | no | [[#N0935\|View]] |
| N0936 | [[07.04 Parallel-Axis Theorem (Huygens–Steiner Theorem)\|07.04 Parallel-Axis Theorem (Huygens–Steiner Theorem)]] | Analyzed | low | yes | no | [[#N0936\|View]] |
| N0937 | [[07.05 Rotation About a Fixed Axis\|07.05 Rotation About a Fixed Axis]] | Analyzed | medium | yes | yes | [[#N0937\|View]] |
| N0938 | [[07.06 Inertia Tensor and Principal Axes\|07.06 Inertia Tensor and Principal Axes]] | Analyzed | high | yes | yes | [[#N0938\|View]] |
| N0939 | [[07.07 Worked Examples of Rotational Motion\|07.07 Worked Examples of Rotational Motion]] | Analyzed | medium | no | yes | [[#N0939\|View]] |
| N0940 | [[07.08 Euler's Equations\|07.08 Euler's Equations]] | Analyzed | high | yes | yes | [[#N0940\|View]] |
| N0941 | [[07.09 Calculation of Moments of Inertia by Integration\|07.09 Calculation of Moments of Inertia by Integration]] | Analyzed | medium | no | no | [[#N0941\|View]] |
| N0942 | [[07.10 Symmetric Top and Precession\|07.10 Symmetric Top and Precession]] | Analyzed | high | no | yes | [[#N0942\|View]] |
| N0943 | [[07.11 Rolling Without Slipping\|07.11 Rolling Without Slipping]] | Analyzed | medium | yes | yes | [[#N0943\|View]] |
| N0944 | [[07.12 Angular Momentum of a Rigid Body\|07.12 Angular Momentum of a Rigid Body]] | Analyzed | medium | no | no | [[#N0944\|View]] |
| N0945 | [[07.13 Moments of Inertia of Common Solids\|07.13 Moments of Inertia of Common Solids]] | Analyzed | low | yes | no | [[#N0945\|View]] |
| N0946 | [[07.14 Examples of Inertia Tensors\|07.14 Examples of Inertia Tensors]] | Analyzed | medium | yes | yes | [[#N0946\|View]] |
| N0947 | [[07.15 Rigid-Body Exercises\|07.15 Rigid-Body Exercises]] | Analyzed | low | no | no | [[#N0947\|View]] |
| N0948 | [[Rigid-body rotation, torque, and equilibrium problems\|Rigid-body rotation, torque, and equilibrium problems]] | Analyzed | high | no | no | [[#N0948\|View]] |

## Suggestions

### N0932

Note: [[07.00 Rigid Bodies|07.00 Rigid Bodies]]  
Priority: low · Graph: no · Manim: no

This is a clear chapter hub with correct summary formulas.

- [Links] Add the chapter notes missing from the summary list (07.01, 07.07, 07.09, 07.11, 07.12, 07.13, 07.14) so the hub indexes the whole chapter.

### N0933

Note: [[07.01 Rigid-Body Approximation|07.01 Rigid-Body Approximation]]  
Priority: low · Graph: no · Manim: no

The conceptual note is clear; a short estimate would make "negligible deformation" concrete.

- [Example] Add an order-of-magnitude check: the strain $\sigma/E$ of a steel part under ordinary load is around $10^{-4}$, and the approximation fails for impacts shorter than the sound transit time $\mechanical{L}/\signal{c}_s$.
- [Intuition] Explain why six degrees of freedom remain: three non-collinear points have 9 coordinates, and 3 fixed mutual distances remove 3 of them.

### N0934

Note: [[07.02 Rigid-Body Kinematics|07.02 Rigid-Body Kinematics]]  
Priority: medium · Graph: yes · Manim: yes

The note is correct but abstract; it lacks a derivation of the velocity formula and a concrete example such as a rolling wheel.

- [Simplify] Derive the formula from rigidity: $\lvert\mechanical{\vec r}_P-\mechanical{\vec r}_O\rvert$ is constant, so the relative vector can only rotate, which gives $d(\mechanical{\vec r}_P-\mechanical{\vec r}_O)/dt=\mechanical{\vec\omega}\times(\mechanical{\vec r}_P-\mechanical{\vec r}_O)$.
- [Simplify] Justify "the same $\mechanical{\vec\omega}$ for every choice of $O$" in one line by changing the reference point and comparing the two expressions.
- [Example] Add the rolling wheel: with $O$ at the centre and $\mechanical{v}_O=\mechanical{\omega}\mechanical{R}$, the contact point has zero velocity and the top point has $2\mechanical{v}_O$ (instantaneous axis of rotation).
- [Graph] Plot velocity arrows at 12 rim points and at the centre of a rolling wheel ($\mechanical{R}=1$, $\mechanical{v}_O=1$), showing that each arrow is perpendicular to the line from the contact point and proportional to its length.
- [Manim] Animate a rolling wheel, first decomposing each rim point's velocity into a translation arrow and a rotation arrow, then showing the vector sum and the instantaneous rotation about the contact point.

### N0935

Note: [[07.03 Center of Mass and Moment of Inertia|07.03 Center of Mass and Moment of Inertia]]  
Priority: medium · Graph: no · Manim: no

The definitions and examples are correct, but the note introduces the moment of inertia without motivating it from kinetic energy and gives no intuition about mass placement.

- [Intuition] Motivate $\mechanical{I}$ from $\energy{K}=\sum\tfrac12\mechanical{m}_i(\mechanical{\omega}\mechanical{d}_{\perp,i})^2=\tfrac12\mechanical{I}\mechanical{\omega}^2$ before the definition, so the $\mechanical{d}_\perp^2$ weighting is explained.
- [Intuition] Comment on the examples: at equal $\mechanical{M}$ and $\mechanical{R}$, the shell exceeds the disk, which exceeds the sphere, because more mass lies far from the axis; define the radius of gyration through $\mechanical{I}=\mechanical{M}\mechanical{k}^2$.
- [Example] Add a center-of-mass example (e.g. a solid hemisphere, CM at $3\mechanical{R}/8$ from the flat face), since the CM formula currently has none.
- [Structure] In the disk integral, the upper limit $R$ is uncoloured while $\mechanical{R}$ is coloured elsewhere; use $\mechanical{R}$ consistently and add a sentence that $\mechanical{r}\,dr\,d\phi$ is the polar area element.

### N0936

Note: [[07.04 Parallel-Axis Theorem (Huygens–Steiner Theorem)|07.04 Parallel-Axis Theorem (Huygens–Steiner Theorem)]]  
Priority: low · Graph: yes · Manim: no

The statement, proof, and example are clean; only a consequence and a visual are missing.

- [Intuition] State the consequence explicitly: among all parallel axes, the axis through the CM has the smallest moment of inertia, and the formula requires one of the two axes to pass through the CM.
- [Graph] Plot $\mechanical{I}(\mechanical{d})/(\mechanical{M}\mechanical{L}^2)=1/12+(\mechanical{d}/\mechanical{L})^2$ for a rod with $\mechanical{d}/\mechanical{L}\in[-0.5,0.5]$, marking the centre value $1/12$ and the end value $1/3$.
- [Example] Add the common pitfall: shifting between two axes that both miss the CM requires passing through the CM, $\mechanical{I}_2=\mechanical{I}_1-\mechanical{M}\mechanical{d}_1^2+\mechanical{M}\mechanical{d}_2^2$.

### N0937

Note: [[07.05 Rotation About a Fixed Axis|07.05 Rotation About a Fixed Axis]]  
Priority: medium · Graph: yes · Manim: yes

The note is correct, but it states the rotational–translational analogy and the small-angle step instead of developing them.

- [Structure] Add a small analogy table: $\mechanical{x}\leftrightarrow\mechanical{\theta}$, $\mechanical{m}\leftrightarrow\mechanical{I}$, $\mechanical{F}\leftrightarrow\mechanical{\tau}$, $\mechanical{p}\leftrightarrow\mechanical{L}_z$, $\tfrac12\mechanical{m}\mechanical{v}^2\leftrightarrow\tfrac12\mechanical{I}\mechanical{\omega}^2$, and $\mechanical{F}\Delta\mechanical{x}\leftrightarrow\mechanical{\tau}\Delta\mechanical{\theta}$.
- [Simplify] In the physical pendulum, show $\sin\mechanical{\theta}\approx\mechanical{\theta}$ and the resulting $\mechanical{\ddot\theta}+(\mechanical{M}\mechanical{g}\mechanical{d}/\mechanical{I})\mechanical{\theta}=0$ before quoting $\signal{T}$; introduce the equivalent simple-pendulum length $\mechanical{I}/(\mechanical{M}\mechanical{d})$, which is $2\mechanical{L}/3$ for the rod.
- [Example] Add numbers: a $\quantity{1}{m}$ rod pivoted at one end has $\signal{T}\approx\quantity{1.64}{s}$, while a $\quantity{1}{m}$ simple pendulum has $\quantity{2.01}{s}$.
- [Graph] Plot the small-angle $\mechanical{\theta}(t)$ of the rod pendulum (identical to a simple pendulum of length $2\mechanical{L}/3$) against a simple pendulum of length $\mechanical{L}$ for $t\in[0,4]\,\unit{s}$.
- [Manim] Animate a swinging rod beside a point-mass pendulum of length $2\mechanical{L}/3$ that stays in step, then beside one of length $\mechanical{L}$ that drifts out of phase.

### N0938

Note: [[07.06 Inertia Tensor and Principal Axes|07.06 Inertia Tensor and Principal Axes]]  
Priority: high · Graph: yes · Manim: yes

The note is correct but dense: the tensor appears without the vector-identity step, and it never states the key consequence that $\mechanical{\vec L}$ need not be parallel to $\mechanical{\vec\omega}$.

- [Simplify] Show the BAC–CAB step $\mechanical{\vec r}\times(\mechanical{\vec\omega}\times\mechanical{\vec r})=\mechanical{r}^2\mechanical{\vec\omega}-(\mechanical{\vec r}\cdot\mechanical{\vec\omega})\mechanical{\vec r}$, then read off $\mechanical{I}_{ij}$ component by component.
- [Intuition] State explicitly that $\mechanical{\vec L}\parallel\mechanical{\vec\omega}$ only when $\mechanical{\vec\omega}$ lies along a principal axis; otherwise the bearings must supply a torque (unbalanced wheels), with a link to \[\[07.14 Examples of Inertia Tensors\]\].
- [Example] Work one small example: two equal point masses at $(a,0,a)$ and $(-a,0,-a)$ (a dumbbell tilted at $45^\circ$); compute $\mechanical{\mathbf I}$ and find its principal axes by diagonalization.
- [Graph] graph3d of the inertia ellipsoid $\mechanical{I}_1x^2+\mechanical{I}_2y^2+\mechanical{I}_3z^2=1$ for $\mechanical{I}_1:\mechanical{I}_2:\mechanical{I}_3=1:2:3$ with the principal axes drawn.
- [Manim] Animate the tilted dumbbell rotating about a fixed vertical axis, with $\mechanical{\vec\omega}$ fixed and $\mechanical{\vec L}$ (perpendicular to the dumbbell) sweeping a cone, to show why a torque is needed.

### N0939

Note: [[07.07 Worked Examples of Rotational Motion|07.07 Worked Examples of Rotational Motion]]  
Priority: medium · Graph: no · Manim: yes

The examples are numerically correct, but the precession example states a period without any rigid-body calculation and the skater example could explain where the work goes.

- [Intuition] In the skater example, explain the energy source: the arms are pulled inward against the outward tendency in the rotating frame, so the muscles do positive work $\Delta\energy{K}=\tfrac12\mechanical{L}_z^2(1/\mechanical{I}_2-1/\mechanical{I}_1)$.
- [Example] For the stellar collapse, add the check $\mechanical{v}_{\mathrm{eq}}=\mechanical{\omega}'\mechanical{R}'\approx2.4\times10^8\,\unit{m\,s^{-1}}$, close to $c$ and far above breakup speed, which shows that the uniform-rotation model fails before the end state.
- [Structure] The precession section claims that $\signal{\Omega}_{\mathrm{prec}}$ "can be calculated from rigid-body theory" but shows nothing; either sketch the torque on the equatorial bulge or move the section to \[\[07.10 Symmetric Top and Precession\]\] with a pointer.
- [Manim] Animate Earth's tilted spin axis tracing a cone around the ecliptic normal while an arrow shows the tidal torque on the equatorial bulge.

### N0940

Note: [[07.08 Euler's Equations|07.08 Euler's Equations]]  
Priority: high · Graph: yes · Manim: yes

The equations are correct, but the note does not derive them from $d\mechanical{\vec L}/dt$ in a rotating frame, and it asserts the intermediate-axis instability without the perturbation argument.

- [Simplify] Derive the equations from $(d\mechanical{\vec L}/dt)_{\mathrm{space}}=(d\mechanical{\vec L}/dt)_{\mathrm{body}}+\mechanical{\vec\omega}\times\mechanical{\vec L}$ with $\mechanical{\vec L}=(\mechanical{I}_1\mechanical{\omega}_1,\mechanical{I}_2\mechanical{\omega}_2,\mechanical{I}_3\mechanical{\omega}_3)$, showing one component explicitly.
- [Simplify] Add the linear stability argument: perturb rotation about axis 2 to get $\ddot{\mechanical{\omega}}_1=[(\mechanical{I}_2-\mechanical{I}_3)(\mechanical{I}_1-\mechanical{I}_2)/(\mechanical{I}_1\mechanical{I}_3)]\mechanical{\omega}_2^2\mechanical{\omega}_1$, and note that the coefficient is positive (exponential growth) only for the intermediate axis.
- [Structure] Clarify the terminology: "free precession" usually refers to the symmetric case $\mechanical{I}_1=\mechanical{I}_2$ (exercise 15 of \[\[07.15 Rigid-Body Exercises\]\]); with three distinct moments the motion is a general tumbling in which the $\mechanical{\omega}_i(t)$ are periodic.
- [Graph] Plot numerically integrated $\mechanical{\omega}_1,\mechanical{\omega}_2,\mechanical{\omega}_3$ against $t$ for $\mechanical{I}=(1,2,3)$, starting near the intermediate axis at $\mechanical{\vec\omega}=(0.01,1,0.01)$, to show the periodic sign flips of $\mechanical{\omega}_2$.
- [Manim] Animate the tennis-racket (Dzhanibekov) effect: a box spinning about its intermediate axis flips by $180^\circ$ periodically, while spins about the largest and smallest axes stay steady.

### N0941

Note: [[07.09 Calculation of Moments of Inertia by Integration|07.09 Calculation of Moments of Inertia by Integration]]  
Priority: medium · Graph: no · Manim: no

The results are correct, but the cone integral skips its only nontrivial step, and the torus and hole results are stated without any integration.

- [Simplify] Complete the cone step: $\int_0^{\mechanical{H}}\mechanical{R}^4(1-\mechanical{z}/\mechanical{H})^4\,dz=\mechanical{R}^4\mechanical{H}/5$, then substitute $\mechanical{\rho}$ to get $\tfrac3{10}\mechanical{M}\mechanical{R}^2$.
- [Simplify] Show the disk-with-hole subtraction: $\mechanical{I}=\tfrac12\mechanical{\sigma}\pi(\mechanical{R}^4-\mechanical{r}^4)$ with $\mechanical{M}=\mechanical{\sigma}\pi(\mechanical{R}^2-\mechanical{r}^2)$, which factors to $\tfrac12\mechanical{M}(\mechanical{R}^2+\mechanical{r}^2)$; note the limits $\mechanical{r}\to0$ (disk) and $\mechanical{r}\to\mechanical{R}$ (ring).
- [Intuition] For the torus, give the integral setup or a slicing argument, and explain the $\tfrac34\mechanical{r}^2$ term as the contribution from the spread of the cross-section about its centre.
- [Structure] Add a short strategy paragraph at the top (choose slices such as disks, shells or rings whose own moment is known, then integrate) and link the table in \[\[07.13 Moments of Inertia of Common Solids\]\].

### N0942

Note: [[07.10 Symmetric Top and Precession|07.10 Symmetric Top and Precession]]  
Priority: high · Graph: no · Manim: yes

The result and example are correct, but the derivation hides the $\sin\mechanical{\theta}$ cancellation behind an undefined $\mechanical{L}_\perp$ and gives no picture of the vector geometry.

- [Simplify] Define $\mechanical{L}_\perp$ as the horizontal component $\mechanical{I}_3\mechanical{\omega}_s\sin\mechanical{\theta}$ and show $\lvert\mechanical{\vec\tau}\rvert=\mechanical{M}\mechanical{g}\mechanical{d}\sin\mechanical{\theta}$, so that $\signal{\Omega}=\mechanical{\tau}/\mechanical{L}_\perp$ makes the independence from $\mechanical{\theta}$ explicit.
- [Intuition] Explain the gyroscopic approximation: $\mechanical{\vec L}\approx\mechanical{I}_3\mechanical{\omega}_s\hat e_3$ because spin dominates, and the torque changes the direction of $\mechanical{\vec L}$ but not its magnitude; mention nutation when the approximation is relaxed.
- [Example] Add a sanity check to the example: $\signal{\Omega}=2\pi/\signal{T}_p\approx\quantity{0.49}{rad\,s^{-1}}\ll\mechanical{\omega}_s=\quantity{1000}{rad\,s^{-1}}$, which confirms the fast-top condition.
- [Manim] Animate a tilted spinning top whose axis precesses about the vertical, with the horizontal torque vector and $d\mechanical{\vec L}$ drawn tangent to the circle traced by the tip of $\mechanical{\vec L}$.

### N0943

Note: [[07.11 Rolling Without Slipping|07.11 Rolling Without Slipping]]  
Priority: medium · Graph: yes · Manim: yes

The note is correct and well organised, but it explains the rolling constraint and the role of friction only verbally, and the example has no force-based treatment.

- [Simplify] Justify $\mechanical{v}=\mechanical{\omega}\mechanical{R}$ from the kinematics formula: the contact-point velocity is $\mechanical{v}-\mechanical{\omega}\mechanical{R}=0$; link to \[\[07.02 Rigid-Body Kinematics\]\].
- [Example] Add the force approach for the incline: $\mechanical{a}=\mechanical{g}\sin\mechanical{\theta}/(1+\beta)$ and static friction $\beta\mechanical{M}\mechanical{g}\sin\mechanical{\theta}/(1+\beta)$, which gives the no-slip condition $\mu_s\ge\beta\tan\mechanical{\theta}/(1+\beta)$.
- [Structure] Merge the "Source wording" callout and the final "Friction" paragraph, which repeat the same point.
- [Graph] Plot the cycloid traced by a rim point, $(\mechanical{R}(\phi-\sin\phi),\mechanical{R}(1-\cos\phi))$ for $\phi\in[0,4\pi]$, showing the cusps where the point is momentarily at rest.
- [Manim] Animate a sphere, a disk and a ring released together on the same incline, each with its own acceleration, with a velocity readout showing the finishing order sphere, disk, ring.

### N0944

Note: [[07.12 Angular Momentum of a Rigid Body|07.12 Angular Momentum of a Rigid Body]]  
Priority: medium · Graph: no · Manim: no

The note is correct, but it states the decomposition without proof and mentions the restriction on the reference point only in passing.

- [Simplify] Prove the decomposition by writing $\mechanical{\vec r}_i=\mechanical{\vec R}+\mechanical{\vec r}_i'$ and noting that the cross terms vanish because $\sum\mechanical{m}_i\mechanical{\vec r}_i'=\vec 0$.
- [Intuition] Explain why the torque equation holds about the CM even when it accelerates, but not about an arbitrary moving point, where an extra term $\mechanical{M}\mechanical{\vec v}_O\times\mechanical{\vec V}_G$ appears.
- [Example] Add an example: for a wheel rolling without slipping, compute $\mechanical{L}$ about the contact point as $\mechanical{I}_G\mechanical{\omega}+\mechanical{M}\mechanical{R}\mechanical{v}$ and compare it with $(\mechanical{I}_G+\mechanical{M}\mechanical{R}^2)\mechanical{\omega}$ from the parallel-axis theorem.

### N0945

Note: [[07.13 Moments of Inertia of Common Solids|07.13 Moments of Inertia of Common Solids]]  
Priority: low · Graph: yes · Manim: no

The reference table is correct and the compound-pendulum example is good.

- [Graph] Plot $\signal{T}(\mechanical{d})/(2\pi\sqrt{\mechanical{L}/\mechanical{g}})=\sqrt{(1/12+(\mechanical{d}/\mechanical{L})^2)/(\mechanical{d}/\mechanical{L})}$ for $\mechanical{d}/\mechanical{L}\in[0.05,0.5]$, marking the minimum at $1/\sqrt{12}$ to show the flat region that the text describes.
- [Simplify] Show the minimization step $d(\signal{T}^2)/d\mechanical{d}=0\Rightarrow\mechanical{d}^2=\mechanical{L}^2/12$ in one line.

### N0946

Note: [[07.14 Examples of Inertia Tensors|07.14 Examples of Inertia Tensors]]  
Priority: medium · Graph: yes · Manim: yes

The listed tensors are correct, but the tilted-rod example, the only nondiagonal case, gives no actual matrix.

- [Example] Compute the tilted-rod tensor explicitly: for a rod in the $xz$ plane at $45^\circ$ to $\hat z$, $\mechanical{\mathbf I}=(\mechanical{M}\mechanical{L}^2/12)\begin{pmatrix}1/2&0&-1/2\\0&1&0\\-1/2&0&1/2\end{pmatrix}$, so $\mechanical{\mathbf I}\mechanical{\omega}\hat z$ has $x$ and $z$ components.
- [Simplify] Show the rotation rule $\mechanical{\mathbf I}'=\mathbf R\mechanical{\mathbf I}\mathbf R^{\mathsf T}$ that produces the nonzero products of inertia.
- [Intuition] Explain why a cube has the same rotational inertia as a sphere about every axis through its centre despite not being round: cubic symmetry forces an isotropic tensor.
- [Graph] graph3d showing the tilted rod, $\mechanical{\vec\omega}$ along $\hat z$, and $\mechanical{\vec L}$ perpendicular to the rod.
- [Manim] Animate the tilted rod rotating about $\hat z$ with $\mechanical{\vec L}$ co-rotating around a cone, then show the required torque $d\mechanical{\vec L}/dt$ as a horizontal arrow.

### N0947

Note: [[07.15 Rigid-Body Exercises|07.15 Rigid-Body Exercises]]  
Priority: low · Graph: no · Manim: no

The exercise set is clear and the results are numerically correct (spot-checked, including the rod–ball collision).

- [Structure] Exercise 7 asks only for the CM velocity, but the result also gives $\mechanical{\omega}$ and $\mechanical{v}'$; ask for all three, and add hints for proof exercises 5, 9, 10 and 15.
- [Correctness] In exercise 15, add that the rigid-Earth prediction (Euler period of about 305 days) differs from the observed Chandler wobble (about 433 days) because Earth is not rigid, so the identification is only approximate.

### N0948

Note: [[Rigid-body rotation, torque, and equilibrium problems|Rigid-body rotation, torque, and equilibrium problems]]  
Priority: high · Graph: no · Manim: no

The calculations are correct, but the transcription has broken headings, duplicated sections, unfinished derivations, and almost no semantic macros, which makes it hard to use alongside the 07.xx notes.

- [Structure] Fix the three malformed headings that begin with ") — " (Moment of inertia of extended objects, Rolling and energy, Angular momentum and rotation), merge the duplicated "Clay dropped onto a potter's wheel" and "Potter's wheel" sections and the two clay-and-rod sections, and update the inbound link in 08.02 that targets the broken heading form.
- [Structure] Apply semantic macros consistently: most symbols ($m$, $r$, $I$, $\tau$, $T$, $a$, $K$) are bare while a few equations use \mechanical{}; colour them according to AGENTS.md.
- [Example] Complete the unfinished items: "Moment of inertia of a disk" stops before $\int_0^R r^2\sigma\,2\pi r\,dr=\tfrac12MR^2$; the potter's wheel needs $I_b=mR^2$ and $\omega_f=\omega_iM/(M+2m)$; the "Practice problem" and the incline–pulley problem (Tipping item 2) give no final acceleration.
- [Structure] Group the long note into topic sections (moment of inertia, rolling and energy, torque and dynamics, statics, angular momentum) and link each to the corresponding 07.xx theory note.
- [Simplify] Remove the editorial remarks about the handwritten source ("The handwritten expansion reverses the factors", "The boxed force equation in the notes drops the minus sign") or collect them in one source callout.
