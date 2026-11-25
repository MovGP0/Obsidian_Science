---
title: "Note Improvement Tracker – 02 Physics/01 Classical Mechanics/20 Rotational Motion"
---

> [!TLDR]
> This note tracks the review of the 35 notes in `02 Physics/01 Classical Mechanics/20 Rotational Motion`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 23 possible errors or notation conflicts. 23 of them are verified (19 fixed, 3 partly, 1 rejected); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N1149|N1149]] 01 Preliminary Definitions: Rotational-motion bullet: Earth "spinning about its own axis every 24 hours, on average" conflates the mean solar day with the rotation period; the sidereal rotation period is about $23\,\unit{h}\,56\,\unit{min}$, so say "one rotation per sidereal day (about 23 h 56 min)" or "one solar day of 24 h". **Fixed:** Changed to "once per sidereal day (about 23 h 56 min)"
- [[#N1149|N1149]] 01 Preliminary Definitions: Physical quantities table and Fig. 1.1a caption use bare $r_A, r_B$; radii are mechanical quantities and should be $\mechanical{r}_A,\mechanical{r}_B$, and the figure itself does not label the radii the caption mentions. **Partly:** Applied \mechanical{r}_A, \mechanical{r}_B in caption and table; figure labels left unchanged (caption describes radii, adding plot labels is out of scope)
- [[#N1150|N1150]] 02 Rotational Motion with Constant Speed: Before Eq. (1.14) the text says "The angular velocity vector can be defined as: $\vec v=\vec\omega\times\vec r$", but $\vec\omega$ was already defined by Eq. (1.12); reword to "The linear velocity of a point is related to the angular velocity by"; also the Physical quantities table lists angular position as $\vec\theta$ and arc length as $\vec S$, contradicting the section's own conclusion that finite $\theta$ is not a vector, and Eq. (1.17) switches to lowercase $ds$ while the rest of the note uses $S$ (keep $dS$, drop the separate "Path length $s$" row; the unused $y$ row can also go). **Fixed:** Lead-in now "The linear velocity of the point is related to the angular velocity by"; table lists θ with dθ⃗ and S with dS⃗; Eq. 1.17 and text use dS; removed "Path length s" and unused y rows
- [[#N1151|N1151]] 03 Acceleration in Rotational Motion: Before Eq. (1.31) the text says "from the definition of linear acceleration that $a=\frac{dv}{dt}$"; in circular motion the acceleration magnitude is not the derivative of speed (that is only the tangential component), so write "the tangential acceleration is the rate of change of speed, $a_t=dv/dt$"; also below Eq. (1.33) "as we mentioned in Section 3.2" should reference Section 1.3.2, and the callout after Eq. (1.30) ("The second line of Equation (1.30) uses the angular velocity...") is an editorial artifact to delete. **Fixed:** Text now "the tangential acceleration is the rate of change of speed, a_t = dv/dt"; "Section 3.2" to "Section 1.3.2"; removed the editorial callout after Eq. 1.30
- [[#N1151|N1151]] 03 Acceleration in Rotational Motion: Eq. (1.33) reuses $\theta$ (angular position elsewhere in the chapter) for the angle between $\vec a_c$ and $\vec a_{tot}$; rename it (e.g. $\beta$) in the equation, Fig. 1.12 and the table, and remove the unused $d$ row from the Physical quantities table. **Fixed:** Renamed to β in Eq. 1.33, Fig. 1.12 label and table; removed the unused d row
- [[#N1152|N1152]] 04 Rotational versus Linear Motion - Analogies: Eq. (1.43) reuses $\mechanical{\theta}$ (the angular position from Table 1.1 and Eq. 1.35) for the direction of the total acceleration; use a different symbol such as $\beta$, and state that it is measured from the centripetal (inward radial) direction toward the tangential direction. **Fixed:** Renamed to β in Eq. 1.43 and stated it is measured from the centripetal (inward radial) direction toward the tangential direction; added β row to table
- [[#N1152|N1152]] 04 Rotational versus Linear Motion - Analogies: Eq. (1.42) gives $162.15\,\unit{m/s^2}$ from two-significant-figure data; report $1.6\times10^2\,\unit{m/s^2}$ (or $162\,\unit{m/s^2}$) and note that $a_c\gg a_t$ so the total acceleration is almost purely centripetal; similarly Eq. (1.43) should read $\approx 0.043\,\unit{rad}\approx 2.5^\circ$. **Fixed:** Eq. 1.42 now ≈ 1.6×10² m/s² with note a_c ≫ a_t (almost purely centripetal); Eq. 1.43 now β ≈ 0.043 rad ≈ 2.5° (checked: sqrt(26293) = 162.15, atan(0.0432) = 0.0432 rad = 2.47°)
- [[#N1152|N1152]] 04 Rotational versus Linear Motion - Analogies: Table 1.1 lists angular position as scalar $\mechanical{\theta}$ but the Physical quantities table lists $\mechanical{\vec\theta}$ as "Angular position"; angular position is not a vector (only $\Delta\mechanical{\vec\theta}$ for fixed-axis rotation is treated as one), so make the table consistent with Table 1.1. **Fixed:** Table row now scalar θ, with note that Δθ⃗ is treated as a vector for fixed-axis rotation (matches Table 1.1)
- [[#N1153|N1153]] 01 Torque: Example 3 gives the tangential force magnitude $F(\theta)=2.0-\sin\theta$ in N "at all points" and then replaces $\sum_i F_i$ by $\int_0^{2\pi}F\,d\theta$ (Eq. 2.18), which has units N rad and would diverge for a genuine force at every point; restate the load as a force per unit rim length $\lambda(\theta)=2.0-\sin\theta\,\unit{N/m}$, so $dF=\lambda R\,d\theta$ and $\tau=R^2\int_0^{2\pi}\lambda\,d\theta=4\pi\,\unit{N\,m}$ for $R=1.0\,\unit{m}$. **Fixed:** Restated load as force per unit rim length λ(θ)=2.0−sinθ N/m, added dF=λR dθ, Eq. 2.18 now R²∫λ dθ = (1.0 m)²(4π) N/m = 4π N m; added λ to table
- [[#N1153|N1153]] 01 Torque: Example 2 coordinates $x=x_0+\cos(\omega_1 t)$, $y=y_0+\sin(\omega_2 t)$ add a dimensionless cosine to a length; insert an amplitude $A$ (or state "in metres"), which carries through Eqs. (2.10)-(2.16) as $\vec\tau(0)=mAy_0\omega_1^2\hat k$; also "previous section (Section 1.1)" before Eq. (2.5) should be Section 2.1.1, and "$\mechanical{x}\mechanical{y}$ plane" in note (iii) and after Eq. (2.16) colors a plane label, which should stay uncolored like $xy$ elsewhere. **Fixed:** Inserted amplitude A (m) in coordinates and Eqs. 2.10-2.16, result τ(0)=mAy₀ω₁²k̂; "Section 1.1" -> "Section 2.1.1"; uncolored $xy$ plane in note (iii) and after Eq. 2.16; added A to table
- [[#N1154|N1154]] 02 Static Equilibrium of a Rigid Body: In the "reaction force from a supporting surface" bullet, the general rule that $\mechanical{\vec n}$ acts "at the point of contact that is below the object's CM" is only true when no other force exerts a torque. In Fig. 2.10a, $\mechanical{\vec F}$ applied at height together with $\mechanical{\vec f}_s$ at the floor forms a couple that nothing balances when $\mechanical{\vec n}$ and $\mechanical{\vec F}_g$ are collinear, so the box drawn this way is not in rotational equilibrium. State that the effective point of application of $\mechanical{\vec n}$ moves toward the leading edge, by $\mechanical h\mechanical F/\mechanical n$ for push height $\mechanical h$, and that it reaches the edge at the tipping threshold. Redraw Fig. 2.10a to match. The book-on-wall case (Fig. 2.9c) is the same kind of idealization and needs a caveat. **Partly:** Physics confirmed (offset x=hF/n about the point below CM); added the restriction, the hF/n shift toward the leading edge and tipping threshold, a caveat for Fig. 2.9c, and an h table row; Fig. 2.10a graph NOT redrawn (n arrow still drawn under the CM)
- [[#N1154|N1154]] 02 Static Equilibrium of a Rigid Body: The Fig. 2.8 caption credits $\mechanical{\vec F}_{T1}=-\mechanical{\vec F}'_{T1}$ to Newton's third law. Those two forces act on different bodies at the two ends of rope 1, and they are equal and opposite because the rope is massless, not because they form a third-law pair. Also, $\Sigma\mechanical{\vec F}_x=0$ in Eq. (2.19) and Eqs. (2.24)-(2.25) should be the scalar components $\Sigma\mechanical F_x=0$ rather than vectors. $n_{br}$ (below Eq. 2.24) and $n_A+n_B$ (after Eq. 2.28) are missing the \mechanical macro. **Fixed:** Caption now says the equal and opposite end forces follow from the massless rope and are not third-law pairs; Σ\vec F_x/y/z -> scalar ΣF_x/y/z in Eqs. 2.19, 2.24, 2.25, 2.29, 2.30 and the z-sentence; wrapped n_br and n_A+n_B in \mechanical
- [[#N1155|N1155]] 03 Some Cool Theorems: Note 1 under Eq. (2.36) says the points of application do not matter "as long as the distance $\mechanical d$ between them does not change". The torque of a couple depends on the perpendicular distance between the lines of action (and on the force directions), not on the distance between the points of application. Reword it that way. **Fixed:** Note 1 now says force directions and perpendicular distance d between the lines of action must not change
- [[#N1155|N1155]] 03 Some Cool Theorems: Exercise (v) and the quantity table use $\mechanical{\alpha}$ for the wheel radius (in m). This clashes with $\mechanical\alpha$ as angular acceleration across the vault and is probably a transcription of $a$. Use $\mechanical a$ or $\mechanical R$. Also remove the table rows for $\mechanical x,\mechanical y,\mechanical z$ that only name axes, keeping $\mechanical x$ for the CM distance in Exercise (iii). **Fixed:** Wheel radius renamed to $\mechanical{a}$ in Exercise (v), Fig. 2.21 caption and table; removed y and z rows, kept x with a specific description
- [[#N1156|N1156]] 01 Newton's Second Law for Rotational Motion: Eq. (3.5) $\Sigma\mechanical{\vec\tau}=\mechanical I\mechanical{\vec\alpha}$ is derived only for a point mass in a plane perpendicular to a fixed axis. For a general rigid body about a fixed axis, only the axial component holds, $\Sigma\mechanical\tau_z=\mechanical I_z\mechanical\alpha_z$, and the bearings can supply off-axis torque. Write Eq. (3.5) in axial form, matching note (iv) and the TLDR, and keep the tensor footnote. Also, in Example 1 (b), "$\sum\mechanical{\tau}=\mechanical r\sum\mechanical F\sin\mechanical\phi$" should be $\mechanical\tau_F=\mechanical R\mechanical F\sin\mechanical\phi$. **Fixed:** Kept Eq. 3.5 (valid for the derived point-mass case) but added that only the axial form Στ_z=I_zα_z holds for a general rigid body because bearings supply off-axis torque; (b) now τ_F=R F sinφ
- [[#N1157|N1157]] 02 Systems of Objects Combining Translational and Rotational Motion: $\mechanical R$ denotes the axle reaction force in Eqs. (3.33)/(3.45) and an outer pulley radius in Exercises (ii)-(iv) and the Physical quantities table; rename the axle force (e.g. $\mechanical{\vec F}_{\text{axle}}$ or $\mechanical{\vec N}$) to avoid confusing a force with a length. **Fixed:** Renamed axle reaction to $\mechanical{\vec F}_{\text{axle}}$ in text, Eqs. 3.33 and 3.45 and the table; Fig. 3.6 SVG (path-only labels) could not be checked and may still label the force R
- [[#N1158|N1158]] 01 Moment of Inertia of Systems of Discrete Masses and Continuous Rigid Bodies: In Eq. (4.13) and (4.14) the upper limit is written as plain `R` (`\int_{0}^{R}`) while Eq. (4.17)-(4.21) color the limits (`\mechanical L/2`); wrap it as $\mechanical R$ for consistent macro use. **Fixed:** Wrapped the three upper limits as \mechanical{R}
- [[#N1163|N1163]] 03 Angular Momentum of Systems of Discrete Masses and Continuous Rigid Bodies: Eq. (5.9) equates $\mechanical{\vec L}_{\mathrm{tot},\parallel}$ with $\sum\mechanical{\vec r}_i\times\mechanical{\vec p}_i$, which holds only because $\mechanical{\vec r}_i$ here is the perpendicular vector from the axis; label it $\mechanical{\vec r}_{i\perp}$ (and update the Physical quantities entry "Displacement from the specified reference point") so the equation is not read as the full angular momentum about an origin. **Partly:** The text right above Eq. 5.9 already defines r_i as the perpendicular vector from the axis, so the equation is correct; only updated the table description to "Perpendicular displacement from the rotation axis to the mass element"
- [[#N1166|N1166]] 06 Notes on Angular Momentum and Newton's Second Law: Example 2, Eqs. (5.24)-(5.28): $\mechanical x=\mechanical x_0+\cos(\signal\omega_1 t)$ adds a length to a dimensionless cosine, so $\mechanical{\vec v}(0)=\signal\omega_2\hat j$ in Eq. (5.27) has units $\unit{rad\,s^{-1}}$ not $\unit{m\,s^{-1}}$; introduce an amplitude $A$ (in $\unit m$), giving $\mechanical{\vec L}(0)=\mechanical m A\signal\omega_2(\mechanical x_0+A)\hat k$. **Fixed:** Inserted amplitude A (m) in Eqs. 5.24-5.28; result L(0)=mAω₂(x₀+A)k̂; sign sentence updated; added A and x,y,x₀,y₀ rows to table
- [[#N1166|N1166]] 06 Notes on Angular Momentum and Newton's Second Law: Eqs. (5.24)-(5.27) use $\hat i,\hat j$ while Eq. (5.28) uses $\hat\imath,\hat\jmath,\hat k$; Eq. (5.21) mixes $\mechanical I_1,\mechanical I_2$ with the $\mechanical I_z$ given in the problem and drops the $z$ subscript used in Eq. (5.22); unify the notation and set "position r(t) and velocity v(t)" in math. **Fixed:** Unified hats to \hat{\imath},\hat{\jmath}; Eq. 5.21 now ΔL_z (kept I₁, I₂ as valid general step before setting both to I_z); put x, y, r(t), v(t), t=0 in math
- [[#N1174|N1174]] 01 General Motion of a Rigid Body - Chasles' Theorem: Chasles' theorem proper says any rigid displacement is a screw motion (translation along an axis plus rotation about that same axis); say the decomposition used here is the elementary version, valid for any reference point, and that the CM is chosen because its motion obeys $\sum\mechanical{\vec F}_{\mathrm{ext}}=\mechanical M\mechanical{\vec a}_{\mathrm{cm}}$. **Rejected:** Many standard texts (e.g. Goldstein) name the translation-of-a-point-plus-rotation decomposition Chasles' theorem; the note states it correctly for a chosen point, no physics error
- [[#N1175|N1175]] 02 The Kinematics of Rolling Motion: Eq. (7.12) $\mechanical v_A=\mechanical v_{\mathrm{cm}}(\cos\mechanical\phi+\mechanical r/\mechanical R)$ assumes the rope leaves the top of the groove, but 7.3.2 uses "the spool of Fig. 7.6" with a counterclockwise pull torque and gets $\mechanical a_{\mathrm{cm}}\propto(\cos\mechanical\phi-\mechanical r/\mechanical R)$; the power balance $\mechanical F\mechanical v_A=d\energy{KE}/dt$ matches Eq. (7.20) only if $\mechanical v_A=\mechanical v_{\mathrm{cm}}(\cos\mechanical\phi-\mechanical r/\mechanical R)$; make the geometry consistent across 7.2.3, Eq. (7.15) (unwinding vs. winding) and 7.3.2, and check Fig. 7.6. **Fixed:** Fig. 7.6 shows rope leaving the groove below-right of O with clockwise ω, so the pull torque is counterclockwise and the rope winds up; changed Eqs. 7.12-7.14 to (cosφ − r/R), rotational term −ωr, Eq. 7.15 text "winds up", dx_A = dS cosφ − dl, caption "leaves the bottom of the groove"; consistent with Eq. 7.20 by power balance; the ωr arrow in the Fig. 7.6 SVG still points along +rope and was not redrawn; 7.3.2 says "unwinds" but is not in scope
- [[#N1178|N1178]] 01 Gyroscopic Precession: Section "Angular impulse and precession": "The center of mass also moves around the rope and has orbital angular momentum along $+z$. The spin axis therefore changes orientation even while the precession axis stays fixed." The "therefore" does not follow; moreover, since the gravitational torque has no $z$ component and the wheel starts with $\mechanical L_z=0$, the $+z$ orbital part must be balanced by a slight downward tilt of the spin axis (initial dip/nutation). Rewrite these sentences accordingly. **Fixed:** Replaced the sentence: torque has no z component, L_z=0 initially, so the axle dips slightly and the −z spin component balances the orbital +z part, starting the nutation

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N1147 | [[00 Contents\|00 Contents]] | Analyzed | low | no | no | [[#N1147\|View]] |
| N1148 | [[00 Preface\|00 Preface]] | Analyzed | low | no | no | [[#N1148\|View]] |
| N1149 | [[01 Preliminary Definitions\|01 Rotational Kinematics/01 Preliminary Definitions]] | Analyzed | low | yes | yes | [[#N1149\|View]] |
| N1150 | [[02 Rotational Motion with Constant Speed\|01 Rotational Kinematics/02 Rotational Motion with Constant Speed]] | Analyzed | medium | yes | yes | [[#N1150\|View]] |
| N1151 | [[03 Acceleration in Rotational Motion\|01 Rotational Kinematics/03 Acceleration in Rotational Motion]] | Analyzed | medium | yes | yes | [[#N1151\|View]] |
| N1152 | [[04 Rotational versus Linear Motion - Analogies\|01 Rotational Kinematics/04 Rotational versus Linear Motion - Analogies]] | Analyzed | medium | yes | yes | [[#N1152\|View]] |
| N1153 | [[01 Torque\|02 Torque and Static Equilibrium/01 Torque]] | Analyzed | medium | yes | yes | [[#N1153\|View]] |
| N1154 | [[02 Static Equilibrium of a Rigid Body\|02 Torque and Static Equilibrium/02 Static Equilibrium of a Rigid Body]] | Analyzed | medium | yes | no | [[#N1154\|View]] |
| N1155 | [[03 Some Cool Theorems\|02 Torque and Static Equilibrium/03 Some Cool Theorems]] | Analyzed | medium | yes | yes | [[#N1155\|View]] |
| N1156 | [[01 Newton's Second Law for Rotational Motion\|03 Rotational Dynamics/01 Newton's Second Law for Rotational Motion]] | Analyzed | medium | yes | yes | [[#N1156\|View]] |
| N1157 | [[02 Systems of Objects Combining Translational and Rotational Motion\|03 Rotational Dynamics/02 Systems of Objects Combining Translational and Rotational Motion]] | Analyzed | medium | yes | no | [[#N1157\|View]] |
| N1158 | [[01 Moment of Inertia of Systems of Discrete Masses and Continuous Rigid Bodies\|04 Moment of Inertia/01 Moment of Inertia of Systems of Discrete Masses and Continuous Rigid Bodies]] | Analyzed | low | yes | no | [[#N1158\|View]] |
| N1159 | [[02 Some More Cool Theorems\|04 Moment of Inertia/02 Some More Cool Theorems]] | Analyzed | medium | yes | no | [[#N1159\|View]] |
| N1160 | [[03 Moment of Inertia of Composite Areas\|04 Moment of Inertia/03 Moment of Inertia of Composite Areas]] | Analyzed | low | no | no | [[#N1160\|View]] |
| N1161 | [[01 Review - Linear Momentum\|05 Angular Momentum/01 Review - Linear Momentum]] | Analyzed | low | no | no | [[#N1161\|View]] |
| N1162 | [[02 Definition of Angular Momentum\|05 Angular Momentum/02 Definition of Angular Momentum]] | Analyzed | medium | yes | yes | [[#N1162\|View]] |
| N1163 | [[03 Angular Momentum of Systems of Discrete Masses and Continuous Rigid Bodies\|05 Angular Momentum/03 Angular Momentum of Systems of Discrete Masses and Continuous Rigid Bodies]] | Analyzed | medium | no | yes | [[#N1163\|View]] |
| N1164 | [[04 Change in Angular Momentum due to External Torques\|05 Angular Momentum/04 Change in Angular Momentum due to External Torques]] | Analyzed | medium | no | yes | [[#N1164\|View]] |
| N1165 | [[05 Newton's Second Law for Rotational Motion with Constant Moment of Inertia\|05 Angular Momentum/05 Newton's Second Law for Rotational Motion with Constant Moment of Inertia]] | Analyzed | low | no | no | [[#N1165\|View]] |
| N1166 | [[06 Notes on Angular Momentum and Newton's Second Law\|05 Angular Momentum/06 Notes on Angular Momentum and Newton's Second Law]] | Analyzed | medium | yes | yes | [[#N1166\|View]] |
| N1167 | [[07 Conservation of Angular Momentum\|05 Angular Momentum/07 Conservation of Angular Momentum]] | Analyzed | medium | yes | yes | [[#N1167\|View]] |
| N1168 | [[01 Review - Work due to a Force\|06 Work and Energy/01 Review - Work due to a Force]] | Analyzed | low | yes | no | [[#N1168\|View]] |
| N1169 | [[02 Work due to a Torque\|06 Work and Energy/02 Work due to a Torque]] | Analyzed | low | no | yes | [[#N1169\|View]] |
| N1170 | [[03 Work-Kinetic Energy Theorem for Rotational Motion\|06 Work and Energy/03 Work-Kinetic Energy Theorem for Rotational Motion]] | Analyzed | low | no | no | [[#N1170\|View]] |
| N1171 | [[04 Rotational Kinetic Energy of Systems of Discrete Masses and Continuous Rigid Bodies\|06 Work and Energy/04 Rotational Kinetic Energy of Systems of Discrete Masses and Continuous Rigid Bodies]] | Analyzed | low | yes | no | [[#N1171\|View]] |
| N1172 | [[05 Power due to a Force or a Torque\|06 Work and Energy/05 Power due to a Force or a Torque]] | Analyzed | low | yes | no | [[#N1172\|View]] |
| N1173 | [[06 Conservation of Energy and Conservation of Mechanical Energy\|06 Work and Energy/06 Conservation of Energy and Conservation of Mechanical Energy]] | Analyzed | low | yes | yes | [[#N1173\|View]] |
| N1174 | [[01 General Motion of a Rigid Body - Chasles' Theorem\|07 Combining Translation and Rotation - A First Look/01 General Motion of a Rigid Body - Chasles' Theorem]] | Analyzed | medium | no | yes | [[#N1174\|View]] |
| N1175 | [[02 The Kinematics of Rolling Motion\|07 Combining Translation and Rotation - A First Look/02 The Kinematics of Rolling Motion]] | Analyzed | medium | yes | yes | [[#N1175\|View]] |
| N1176 | [[03 The Dynamics of Rolling Motion\|07 Combining Translation and Rotation - A First Look/03 The Dynamics of Rolling Motion]] | Analyzed | medium | yes | yes | [[#N1176\|View]] |
| N1177 | [[04 Energy of Objects Executing both Translational and Rotational Motion\|07 Combining Translation and Rotation - A First Look/04 Energy of Objects Executing both Translational and Rotational Motion]] | Analyzed | low | yes | yes | [[#N1177\|View]] |
| N1178 | [[01 Gyroscopic Precession\|08 Garden of Delights/01 Gyroscopic Precession]] | Analyzed | high | yes | yes | [[#N1178\|View]] |
| N1179 | [[02 Angular Momentum Revisited\|08 Garden of Delights/02 Angular Momentum Revisited]] | Analyzed | medium | yes | yes | [[#N1179\|View]] |
| N1180 | [[03 Rotation Matrices\|08 Garden of Delights/03 Rotation Matrices]] | Analyzed | medium | yes | yes | [[#N1180\|View]] |
| N1181 | [[09 Further Reading\|09 Further Reading]] | Analyzed | low | no | no | [[#N1181\|View]] |

## Suggestions

### N1147

Note: [[00 Contents|00 Contents]]  
Priority: low · Graph: no · Manim: no

A clean, complete table of contents for the rotational-motion notes.

- [Structure] Remove or link the dangling plain-text "Index" line at the end (there is no Index note); otherwise no change needed.

### N1148

Note: [[00 Preface|00 Preface]]  
Priority: low · Graph: no · Manim: no

A clear motivational preface that states scope (fixed axes, inertial observer) and prerequisites.

- [Links] No change needed; optionally link the stated prerequisites (vectors, scalar and vector products, linear momentum and energy) to the existing vault notes on vectors and linear mechanics.

### N1149

Note: [[01 Preliminary Definitions|01 Preliminary Definitions]]  
Priority: low · Graph: yes · Manim: yes

Clear vocabulary note with good 3D figures, but the frequency definition is worded awkwardly and the axis-choice discussion is a long unbroken paragraph.

- [Simplify] Reword the Frequency bullet before Eq. (1.1): "the fraction given by the number of repetitions ... divided by the time interval" says "divided" twice; state simply "frequency is the number of repetitions per unit time, $\signal{f}=N/\Delta t$".
- [Correctness] Rotational-motion bullet: Earth "spinning about its own axis every 24 hours, on average" conflates the mean solar day with the rotation period; the sidereal rotation period is about $23\,\unit{h}\,56\,\unit{min}$, so say "one rotation per sidereal day (about 23 h 56 min)" or "one solar day of 24 h".
- [Correctness] Physical quantities table and Fig. 1.1a caption use bare $r_A, r_B$; radii are mechanical quantities and should be $\mechanical{r}_A,\mechanical{r}_B$, and the figure itself does not label the radii the caption mentions.
- [Structure] Split the paragraph after the definitions list into "Choosing the axis for spin" and "Choosing the axis for orbital motion", each with its one-line rule (axis through the fixed points vs. axis at the centre of the circular path) stated first.
- [Graph] Add a 2D plot of the projection $x(t)=R\cos(2\pi \signal{f} t)$ of a rim point for $\signal{f}=0.5$ and $1\,\unit{Hz}$, $R=1$, $t\in[0,4]\,\unit{s}$, with the period $\signal{T}=1/\signal{f}$ marked, to make Eq. (1.2) visual.
- [Manim] Animate the Fig. 1.1a disk spinning: points A and B sweep the same angle in the same time but trace arcs of different length, illustrating that all points of a rigid body share the same period while their speeds differ.

### N1150

Note: [[02 Rotational Motion with Constant Speed|02 Rotational Motion with Constant Speed]]  
Priority: medium · Graph: yes · Manim: yes

Correct and well illustrated, but long-winded: the core idea (rigid body means one $\theta$ and one $\omega$ for all points, $v=\omega r$) is buried in repetitive prose and a dense vector-subtlety digression.

- [Correctness] Before Eq. (1.14) the text says "The angular velocity vector can be defined as: $\vec v=\vec\omega\times\vec r$", but $\vec\omega$ was already defined by Eq. (1.12); reword to "The linear velocity of a point is related to the angular velocity by"; also the Physical quantities table lists angular position as $\vec\theta$ and arc length as $\vec S$, contradicting the section's own conclusion that finite $\theta$ is not a vector, and Eq. (1.17) switches to lowercase $ds$ while the rest of the note uses $S$ (keep $dS$, drop the separate "Path length $s$" row; the unused $y$ row can also go).
- [Simplify] Compress the "Why Is Angular Velocity a Vector?" section to three steps: finite rotations do not commute (Fig. 1.7), infinitesimal ones commute to first order in $d\theta$, hence $d\vec\theta$ and $\vec\omega=d\vec\theta/dt$ are vectors; replace the vague claim "the rotation is almost planar" with that first-order argument and move the 2D-to-1D motivation paragraphs into one short callout.
- [Structure] Lead with a 3-line summary of the result ($\Delta\theta$ and $\omega$ are the same for every point of a rigid body; $v=\omega r=2\pi r f$; $\omega=2\pi f=2\pi/T$), replace "transcribes" with "traces", and cut duplicate restatements around Eqs. (1.4)-(1.5); give the scalar payoff Eq. (1.16) right after Eq. (1.10) instead of 120 lines later.
- [Graph] Add a 2D `graph` of $v(r)=\omega r$ for $r\in[0,0.5]\,\unit{m}$ with three lines $\omega=2,4,6\,\unit{rad/s}$ (x-axis $r$ in m, y-axis $v$ in m/s), marking points A and B of Fig. 1.3 on one line to show "same $\omega$, larger $r$, larger $v$", plus optionally $\theta(t)=\theta_0+\omega t$ for $t\in[0,2]\,\unit{s}$ as the angular analogue of $x=x_0+vt$.
- [Manim] Animate the disk of Fig. 1.3 rotating at constant $\omega$: points A and B sweep the same $\Delta\theta$ while their arcs $S_A$, $S_B$ trace out with lengths in ratio $OA:OB$, and their tangent velocity arrows rotate with lengths proportional to $r$ while the $\vec\omega$ arrow on the axis stays fixed.
- [Example] Extend Example 1 to the speed, $v=\omega r=10\pi\cdot20\approx628\,\unit{m/s}$, and write $T=0.20\,\unit{s}$ with consistent significant figures; this exercises Eq. (1.16) and makes the r-dependence concrete.

### N1151

Note: [[03 Acceleration in Rotational Motion|03 Acceleration in Rotational Motion]]  
Priority: medium · Graph: yes · Manim: yes

The centripetal derivation and figures are clear, but the note omits the $\omega^2 r$ form, has no worked example, contains a stale editorial callout and a wrong cross-reference, and states $a=dv/dt$ loosely.

- [Correctness] Before Eq. (1.31) the text says "from the definition of linear acceleration that $a=\frac{dv}{dt}$"; in circular motion the acceleration magnitude is not the derivative of speed (that is only the tangential component), so write "the tangential acceleration is the rate of change of speed, $a_t=dv/dt$"; also below Eq. (1.33) "as we mentioned in Section 3.2" should reference Section 1.3.2, and the callout after Eq. (1.30) ("The second line of Equation (1.30) uses the angular velocity...") is an editorial artifact to delete.
- [Simplify] After Eq. (1.25) add $a_c=v^2/r=\omega^2 r=v\omega$ using Eq. (1.16), and state the two limiting views: at fixed $\omega$ (rigid body) $a_c$ grows linearly with $r$, at fixed $v$ (car on a curve) it grows as $1/r$; this resolves the common "does $a_c$ increase or decrease with $r$?" confusion.
- [Correctness] Eq. (1.33) reuses $\theta$ (angular position elsewhere in the chapter) for the angle between $\vec a_c$ and $\vec a_{tot}$; rename it (e.g. $\beta$) in the equation, Fig. 1.12 and the table, and remove the unused $d$ row from the Physical quantities table.
- [Example] Add a worked example for Section 1.3.3: a disk starts from rest with $\alpha=2.0\,\unit{rad/s^2}$; for a point at $r=0.50\,\unit{m}$ at $t=3.0\,\unit{s}$ find $a_t=\alpha r=1.0\,\unit{m/s^2}$, $\omega=6.0\,\unit{rad/s}$, $a_c=\omega^2 r=18\,\unit{m/s^2}$, $a_{tot}\approx18\,\unit{m/s^2}$ and $\tan\beta=1/18$, showing that $a_c$ quickly dominates.
- [Graph] Add a 2D `graph` for constant $\alpha$ from rest: $a_t(t)=\alpha r$ (constant) and $a_c(t)=\alpha^2 r t^2$ for $t\in[0,3]\,\unit{s}$ with $\alpha=2\,\unit{rad/s^2}$, $r=0.5\,\unit{m}$ (y-axis acceleration in m/s^2), plus $a_{tot}=\sqrt{a_t^2+a_c^2}$, marking the crossover at $t=1/\sqrt{\alpha}$ where $a_c=a_t$.
- [Manim] Animate a particle spinning up on a circle with constant $\alpha$: show the constant tangential arrow, the growing inward $a_c$ arrow and their resultant swinging from tangent toward the center with a live readout of $\omega$ and $\beta$; a second short scene can shrink $\Delta t$ in Fig. 1.10 so $\Delta\vec v$ visibly turns into the radial direction.

### N1152

Note: [[04 Rotational versus Linear Motion - Analogies|04 Rotational versus Linear Motion - Analogies]]  
Priority: medium · Graph: yes · Manim: yes

The analogy table and worked example are correct and easy to follow, but there are notation clashes (angle $\mechanical\theta$ reused, vector angular position) and the final result is over-reported.

- [Correctness] Eq. (1.43) reuses $\mechanical{\theta}$ (the angular position from Table 1.1 and Eq. 1.35) for the direction of the total acceleration; use a different symbol such as $\beta$, and state that it is measured from the centripetal (inward radial) direction toward the tangential direction.
- [Correctness] Eq. (1.42) gives $162.15\,\unit{m/s^2}$ from two-significant-figure data; report $1.6\times10^2\,\unit{m/s^2}$ (or $162\,\unit{m/s^2}$) and note that $a_c\gg a_t$ so the total acceleration is almost purely centripetal; similarly Eq. (1.43) should read $\approx 0.043\,\unit{rad}\approx 2.5^\circ$.
- [Correctness] Table 1.1 lists angular position as scalar $\mechanical{\theta}$ but the Physical quantities table lists $\mechanical{\vec\theta}$ as "Angular position"; angular position is not a vector (only $\Delta\mechanical{\vec\theta}$ for fixed-axis rotation is treated as one), so make the table consistent with Table 1.1.
- [Simplify] Eq. (1.35) writes $\Delta t^2$ while Table 1.1 writes $(\Delta t)^2$; use $(\Delta t)^2$ throughout, and fix the missing thin spaces in the linear analogue ("$3.5 \unit{m/s}^2$", "$2.0 \unit{m/s}$").
- [Graph] Add a 2D plot for Example 2 of $\mechanical{\theta}(t)=2.0\,t+1.75\,t^2$ and $\mechanical{\omega}(t)=2.0+3.5\,t$ for $t\in[0,2]\,\unit{s}$ (two curves, shared time axis), marking $11\,\unit{rad}$ and $9.0\,\unit{rad/s}$ at $t=2\,\unit{s}$; this also addresses Exercise 1 ("same form as linear graphs").
- [Manim] Animate the speeding-up wheel with a rim point carrying its $\mechanical{\vec a}_t$ (constant length) and $\mechanical{\vec a}_c$ (growing as $\mechanical{\omega}^2$) arrows from $t=0$ to $2\,\unit{s}$, showing why the total acceleration tilts toward the centre over time.

### N1153

Note: [[01 Torque|01 Torque]]  
Priority: medium · Graph: yes · Manim: yes

Good intuition and correct Examples 1 and 2 numerically, but Example 3 is dimensionally ill-posed, the seven numbered notes are dense, and a few cross-references and macro uses are off.

- [Correctness] Example 3 gives the tangential force magnitude $F(\theta)=2.0-\sin\theta$ in N "at all points" and then replaces $\sum_i F_i$ by $\int_0^{2\pi}F\,d\theta$ (Eq. 2.18), which has units N rad and would diverge for a genuine force at every point; restate the load as a force per unit rim length $\lambda(\theta)=2.0-\sin\theta\,\unit{N/m}$, so $dF=\lambda R\,d\theta$ and $\tau=R^2\int_0^{2\pi}\lambda\,d\theta=4\pi\,\unit{N\,m}$ for $R=1.0\,\unit{m}$.
- [Correctness] Example 2 coordinates $x=x_0+\cos(\omega_1 t)$, $y=y_0+\sin(\omega_2 t)$ add a dimensionless cosine to a length; insert an amplitude $A$ (or state "in metres"), which carries through Eqs. (2.10)-(2.16) as $\vec\tau(0)=mAy_0\omega_1^2\hat k$; also "previous section (Section 1.1)" before Eq. (2.5) should be Section 2.1.1, and "$\mechanical{x}\mechanical{y}$ plane" in note (iii) and after Eq. (2.16) colors a plane label, which should stay uncolored like $xy$ elsewhere.
- [Simplify] Turn notes (i)-(vii) into a short checklist (choose the axis; drop the axial component $F_z$; sign by cw/ccw with $0\le\phi\le\pi$; sliding along the line of action keeps $\tau$; $\tau=0$ if the line of action meets or is parallel to the axis; torques of components add) and simplify Eq. (2.6) to $\sum\tau_z=\sum_{\text{ccw}}F_id_i-\sum_{\text{cw}}F_id_i$, since the current index split ($\tau_3$ and $\tau_{n-2}$ appear then vanish) and mixing magnitudes with signed $\tau_{i,z}$ is confusing.
- [Graph] Add a 2D `graph` of $\tau(\phi)=rF\sin\phi$ for $\phi\in[0,\pi]$ with $r=0.8\,\unit{m}$, $F=10\,\unit{N}$ (x-axis $\phi$ in rad, y-axis $\tau$ in N m), marking $\phi=0,\pi$ (zero torque, Fig. 2.1) and $\pi/2$ (maximum, door-handle case); for Example 3 add a plot of $\lambda(\theta)=2-\sin\theta$ on $[0,2\pi]$ with the shaded area $4\pi$ representing the integral.
- [Manim] Animate the rod of Fig. 2.2: a force of fixed magnitude sweeps its angle $\phi$ from 0 to $\pi$ while the $F_\parallel$ and $F_\perp$ components and a torque bar update, then the same force slides along its line of action with the moment arm $d$ drawn constant (note v), making $\tau=Fd$ visibly unchanged.
- [Intuition] In Section 2.1.2 add a limiting-case sentence and a concrete number: doubling the lever arm halves the force needed (wrench extension), e.g. $20\,\unit{N\,m}$ needs $100\,\unit{N}$ at $0.20\,\unit{m}$ but $50\,\unit{N}$ at $0.40\,\unit{m}$, and note that any vector from the axis to the line of action gives the same $\tau$, which is why $\tau=Fd$ is usually the fastest route.

### N1154

Note: [[02 Static Equilibrium of a Rigid Body|02 Static Equilibrium of a Rigid Body]]  
Priority: medium · Graph: yes · Manim: no

The worked examples are correct and carefully explained, but the force-drawing section states a misleading rule for where the normal force acts, the "any axis works" claim is asserted without its reason, and the long prose paragraphs bury the procedure.

- [Correctness] In the "reaction force from a supporting surface" bullet, the general rule that $\mechanical{\vec n}$ acts "at the point of contact that is below the object's CM" is only true when no other force exerts a torque. In Fig. 2.10a, $\mechanical{\vec F}$ applied at height together with $\mechanical{\vec f}_s$ at the floor forms a couple that nothing balances when $\mechanical{\vec n}$ and $\mechanical{\vec F}_g$ are collinear, so the box drawn this way is not in rotational equilibrium. State that the effective point of application of $\mechanical{\vec n}$ moves toward the leading edge, by $\mechanical h\mechanical F/\mechanical n$ for push height $\mechanical h$, and that it reaches the edge at the tipping threshold. Redraw Fig. 2.10a to match. The book-on-wall case (Fig. 2.9c) is the same kind of idealization and needs a caveat.
- [Correctness] The Fig. 2.8 caption credits $\mechanical{\vec F}_{T1}=-\mechanical{\vec F}'_{T1}$ to Newton's third law. Those two forces act on different bodies at the two ends of rope 1, and they are equal and opposite because the rope is massless, not because they form a third-law pair. Also, $\Sigma\mechanical{\vec F}_x=0$ in Eq. (2.19) and Eqs. (2.24)-(2.25) should be the scalar components $\Sigma\mechanical F_x=0$ rather than vectors. $n_{br}$ (below Eq. 2.24) and $n_A+n_B$ (after Eq. 2.28) are missing the \mechanical macro.
- [Intuition] Before 2.2.1, add the one-line reason why the axis can be chosen freely: $\Sigma\mechanical{\vec\tau}_P=\Sigma\mechanical{\vec\tau}_O+(\mechanical{\vec r}_O-\mechanical{\vec r}_P)\times\Sigma\mechanical{\vec F}$, so once $\Sigma\mechanical{\vec F}=0$, zero torque about one point means zero torque about every point. This replaces the current circular argument ("if the net torque were not zero about even one axis...").
- [Structure] Turn the end of 2.2.1 ("Now we are ready to do examples...") into a short numbered recipe: free-body diagram per object, assume positive components for unknowns, pivot through an unknown, count equations against unknowns. In Example 4, split Fig. 2.12b into separate free-body diagrams for the ball and the rod. At the moment, the ball weight and $\mechanical{\vec n}_{br}$ arrows overlap at $x=1.22$.
- [Graph] After Example 4, add a 2D plot of $\mechanical n_A(\mechanical L_1)=(\mechanical m+\mechanical M)\mechanical g-\mechanical n_B$ and $\mechanical n_B(\mechanical L_1)=(\mechanical L_1\mechanical m\mechanical g+\tfrac{\mechanical L}{2}\mechanical M\mechanical g)/\mechanical L$ for ball position $\mechanical L_1\in[0,8]\,\unit{m}$, with $\mechanical M=100\,\unit{kg}$, $\mechanical m=20\,\unit{kg}$ and $\mechanical g=10\,\unit{m/s^2}$. The two lines cross at the midpoint, the sum stays at $1200\,\unit{N}$, and the case $\mechanical L_1=2\,\unit{m}$ gives the worked values $650$ and $550\,\unit{N}$.
- [Example] In Example 5, add a limiting-case check. Generalize Eq. (2.31) to rope angle $\mechanical\phi$, giving $\mechanical F_T=\mechanical M\mechanical g/(2\sin\mechanical\phi)$ and $\mechanical R_y=\mechanical M\mechanical g/2$ for every angle. Note that $\mechanical F_T\to\infty$ as $\mechanical\phi\to0$ (a flat rope cannot hold the rod), and optionally plot $\mechanical F_T$, $\mechanical R_x$ and $\mechanical R$ against $\mechanical\phi\in[10^\circ,90^\circ]$. The solved case has $\mechanical R=\mechanical F_T$ only because of the 60-degree geometry.

### N1155

Note: [[03 Some Cool Theorems|03 Some Cool Theorems]]  
Priority: medium · Graph: yes · Manim: yes

The three theorems are short and mostly clear, but Note 1 misstates which distance matters for a couple, the wheel radius is written with the angular-acceleration symbol, and the 3D drag figures add little for purely planar ideas.

- [Correctness] Note 1 under Eq. (2.36) says the points of application do not matter "as long as the distance $\mechanical d$ between them does not change". The torque of a couple depends on the perpendicular distance between the lines of action (and on the force directions), not on the distance between the points of application. Reword it that way.
- [Correctness] Exercise (v) and the quantity table use $\mechanical{\alpha}$ for the wheel radius (in m). This clashes with $\mechanical\alpha$ as angular acceleration across the vault and is probably a transcription of $a$. Use $\mechanical a$ or $\mechanical R$. Also remove the table rows for $\mechanical x,\mechanical y,\mechanical z$ that only name axes, keeping $\mechanical x$ for the CM distance in Exercise (iii).
- [Simplify] In the "But, why are these theorems cool?" paragraph, the sentence "If an object is in translational equilibrium, then all the forces exerted on it can be grouped into a force couple" is too loose. Replace it with "any set of forces with zero sum has the same torque about every point, just like a couple", which is what Note 1 actually proves. Then move this paragraph to the top of the note as motivation, before Theorem 1.
- [Graph] Under Theorem 1, add a 2D plot of the torques about a pivot at position $\mechanical x_0$ on the line joining the two forces: $\mechanical\tau_1=\mechanical F(\mechanical x_1-\mechanical x_0)$, $\mechanical\tau_2=\mechanical F(\mechanical x_0-\mechanical x_2)$ and the sum $\mechanical F\mechanical d$, for $\mechanical x_0\in[-2\mechanical d,2\mechanical d]$ with $\mechanical F=1$, $\mechanical x_1=0.95$ and $\mechanical x_2=-0.85$. The two individual lines slope in opposite directions while the sum stays flat, which shows Note 1 directly. Replace the 3D Fig. 2.16 for Theorem 3 with a simple 2D figure, since everything lies in one plane.
- [Intuition] For Theorem 3, add one sentence showing why it fails without equilibrium or for parallel forces. If the $n-1$ lines are parallel there is no point $P$, and Theorem 2 covers that case. Also give Exercise (v)(c) a pointer to Fig. 2.17 as the worked model.
- [Manim] For Exercise (ii) (Fig. 2.18), animate the rod tilting by a small angle about a support below and above its CM. Show the weight vector at the CM and its lever arm, which turns into a toppling torque in case (a) and a restoring torque in case (b), with the rod falling or swinging back.

### N1156

Note: [[01 Newton's Second Law for Rotational Motion|01 Newton's Second Law for Rotational Motion]]  
Priority: medium · Graph: yes · Manim: yes

The derivation and three examples are numerically correct and well motivated, but the vector form of Eq. (3.5) claims more than is shown, some explanations sit after the equations they justify, and Example 2's slip condition would be much clearer with a graph.

- [Correctness] Eq. (3.5) $\Sigma\mechanical{\vec\tau}=\mechanical I\mechanical{\vec\alpha}$ is derived only for a point mass in a plane perpendicular to a fixed axis. For a general rigid body about a fixed axis, only the axial component holds, $\Sigma\mechanical\tau_z=\mechanical I_z\mechanical\alpha_z$, and the bearings can supply off-axis torque. Write Eq. (3.5) in axial form, matching note (iv) and the TLDR, and keep the tensor footnote. Also, in Example 1 (b), "$\sum\mechanical{\tau}=\mechanical r\sum\mechanical F\sin\mechanical\phi$" should be $\mechanical\tau_F=\mechanical R\mechanical F\sin\mechanical\phi$.
- [Structure] In Example 3, move the sentence "The relation $\mechanical\beta+\mechanical\theta=\pi/2$ ... gives $\sin\mechanical\theta=\cos\mechanical\beta$" from after Fig. 3.5 to before Eq. (3.28), and show $\mechanical\tau=\mechanical r\mechanical F_g\sin\mechanical\theta=\mechanical r\mechanical F_g\cos\mechanical\beta$ explicitly. In the Fig. 3.5 caption, wrap $\beta$ in \mechanical. Also note the symbol clash in the quantity table between $\mechanical{\vec L}$ (angular momentum) and $\mechanical L$ (rod length).
- [Graph] For Example 2 (b), plot the friction needed, $\mechanical f_s(t)=\mechanical m\mechanical r\sqrt{\mechanical\alpha^2+(\mechanical\omega_0+\mechanical\alpha t)^4}$, against $t\in[0,1.5]\,\unit{s}$ with $\mechanical m=1$, $\mechanical r=1$, $\mechanical\alpha=2$ and $\mechanical\omega_0=1$, together with the horizontal line $\mechanical\mu_s\mechanical m\mechanical g=8\,\unit{N}$. The curves intersect at $t\approx0.89\,\unit{s}$, which matches Eq. (3.27) and shows the radial term $\mechanical\omega^4$ taking over.
- [Graph] For Example 3, add $\mechanical\omega(\mechanical\beta)=\sqrt{2\cdot13.8\sin\mechanical\beta}\,\unit{rad/s}$ (from energy, flagged as a preview) to Fig. 3.5 or a second plot over $\mechanical\beta\in[0,\pi/2]$. Optionally also add $\mechanical R_x(\mechanical\beta)$ from the formula in part (b). This makes the contrast clear: $\mechanical\alpha$ is largest at release, $\mechanical\omega$ is largest at the vertical, and $\mechanical R_x$ is zero at both ends.
- [Manim] Animate Example 2. The disk spins up with constant $\mechanical\alpha$ while the friction vector on the mass is drawn as a tangential part $\mechanical m\mechanical\alpha\mechanical r$ (constant) plus a radial part $\mechanical m\mechanical\omega^2\mechanical r$ (growing). The resultant grows and swings toward the centre until it touches a circle of radius $\mechanical\mu_s\mechanical m\mechanical g$, and at that moment the mass slides off tangentially.
- [Intuition] In note (ii), add a one-line limiting case with numbers. The same mass moved from $\mechanical r$ to $2\mechanical r$ needs four times the torque for the same $\mechanical\alpha$, because $\mechanical I=\mechanical m\mechanical r^2$. Mention the door handle placed far from the hinge as the everyday example.

### N1157

Note: [[02 Systems of Objects Combining Translational and Rotational Motion|02 Systems of Objects Combining Translational and Rotational Motion]]  
Priority: medium · Graph: yes · Manim: no

The mass-pulley derivation is correct and step-by-step, but answers are solved out of order, final results are never simplified or sanity-checked with limiting cases, and the symbol $\mechanical R$ is overloaded.

- [Simplify] Eq. (3.42): simplify the final tension to $\mechanical F_T=\mechanical m\mechanical g\mechanical I/(\mechanical I+\mechanical m\mechanical r^2)$ and use the same form in Eq. (3.45); the nested fraction hides the structure that Eqs. (3.43)-(3.44) already show.
- [Intuition] After Eq. (3.44) add limiting cases: $\mechanical I\to0$ gives $\mechanical a=\mechanical g$, $\mechanical F_T=0$ (free fall); $\mechanical I\to\infty$ gives $\mechanical a\to0$, $\mechanical F_T\to\mechanical m\mechanical g$; and for the stated uniform pulley $\mechanical I=\tfrac12\mechanical M\mechanical r^2$ gives $\mechanical a=\mechanical m\mechanical g/(\mechanical m+\mechanical M/2)$, i.e. the pulley acts like an extra half-mass of inertia.
- [Structure] Answers are derived in the order (c), (a), (b), (d), (e), (f); add one sentence before Eq. (3.42) explaining why tension is solved first (it is the only unknown linking Eqs. 3.34 and 3.37), or collect the final answers in a short summary list (a)-(f).
- [Correctness] $\mechanical R$ denotes the axle reaction force in Eqs. (3.33)/(3.45) and an outer pulley radius in Exercises (ii)-(iv) and the Physical quantities table; rename the axle force (e.g. $\mechanical{\vec F}_{\text{axle}}$ or $\mechanical{\vec N}$) to avoid confusing a force with a length.
- [Graph] Add a 2D plot of $\mechanical a/\mechanical g=1/(1+\kappa)$ and $\mechanical F_T/(\mechanical m\mechanical g)=\kappa/(1+\kappa)$ versus $\kappa=\mechanical I/(\mechanical m\mechanical r^2)\in[0,5]$, marking the uniform-disk case $\kappa=\mechanical M/(2\mechanical m)$, e.g. $\kappa=0.5$ for $\mechanical M=\mechanical m$.
- [Example] Give a short numerical instance (e.g. $\mechanical m=1\,\unit{kg}$, $\mechanical M=2\,\unit{kg}$, $\mechanical r=0.1\,\unit m$, $\mechanical g=9.8\,\unit{m\,s^{-2}}$) after Eq. (3.48) so the reader sees $\mechanical a=\mechanical g/2$, $\mechanical F_T=\mechanical m\mechanical g/2$ and the size of the axle force.

### N1158

Note: [[01 Moment of Inertia of Systems of Discrete Masses and Continuous Rigid Bodies|01 Moment of Inertia of Systems of Discrete Masses and Continuous Rigid Bodies]]  
Priority: low · Graph: yes · Manim: no

Clear, well-paced derivation with four correct worked examples; only small gaps in steps and notation consistency remain.

- [Correctness] In Eq. (4.13) and (4.14) the upper limit is written as plain `R` (`\int_{0}^{R}`) while Eq. (4.17)-(4.21) color the limits (`\mechanical L/2`); wrap it as $\mechanical R$ for consistent macro use.
- [Simplify] Eq. (4.21) jumps from the bracket to $\mechanical\lambda\mechanical L^3/3$; show the three evaluated terms $\mechanical L^3/4+0+\mechanical L^3/12$ so the cancellation of the odd term $\mechanical L\mechanical x^2/2$ is visible (and say why odd terms vanish on a symmetric interval).
- [Intuition] Before Eq. (4.1) add one sentence that the torque on each element includes internal forces, whose torques cancel in pairs, so only the external torque survives in $\sum\mechanical{\vec\tau}_z$; currently the step "each mass has a torque $\mechanical{\vec\tau}_1=\mechanical I_1\mechanical{\vec\alpha}_1$" hides this.
- [Graph] After Example 3, add a 2D graph of the cumulative fraction $\mechanical I(\mechanical r)/\mechanical I_{\text{disk}}=(\mechanical r/\mechanical R)^4$ and mass fraction $(\mechanical r/\mechanical R)^2$ for $\mechanical r/\mechanical R\in[0,1]$, plus the ring as a step at 1, to show that the outer annuli dominate $\mechanical I$ (the outer half of the radius gives 15/16 of $\mechanical I$).
- [Example] After Eq. (4.22) add a forward pointer: $\mechanical I_A-\mechanical I_O=\mechanical M(\mechanical L/2)^2$, which previews the parallel-axis theorem in note 4.2 and gives a quick consistency check.
- [Structure] Example 1(b) says "start with Equation (4.3)" but repeats the form of Eq. (4.5); state additivity $\mechanical I=\sum\mechanical I_{\text{parts}}$ once before the examples instead of Eq. (4.5)/(4.8).

### N1159

Note: [[02 Some More Cool Theorems|02 Some More Cool Theorems]]  
Priority: medium · Graph: yes · Manim: no

Correct and readable proofs, but the motivation undersells the theorems and the promised rod application and scope warnings are missing.

- [Intuition] The opening claims these theorems "are not needed to solve problems"; replace with motivation: they turn one known integral into many results without new integration (rod end, disk diameter, shell), which is how tables are used in practice.
- [Example] After Eq. (4.27) carry out the rod case instead of joking about it: $\mechanical I_A=\tfrac1{12}\mechanical M\mechanical L^2+\mechanical M(\mechanical L/2)^2=\tfrac13\mechanical M\mechanical L^2$, matching Eq. (4.22) of note 4.1; also warn that one leg of the shift must be the CM axis (you cannot go from axis $A$ to another off-CM axis by adding $\mechanical M\mechanical d^2$ directly).
- [Graph] Add a 2D graph of $\mechanical I_{z'}/(\mechanical M\mechanical L^2)=1/12+(\mechanical d/\mechanical L)^2$ for $\mechanical d/\mechanical L\in[-1,1]$ for the uniform rod, marking the minimum $1/12$ at $\mechanical d=0$ and the end-axis value $1/3$ at $\mechanical d/\mechanical L=\pm1/2$; optionally a slider for $\mechanical d$.
- [Intuition] In the proof after Eq. (4.26), add one line explaining why $\int\mechanical{\vec r}\,d\mechanical m=\vec0$: it equals $\mechanical M$ times the transverse position of the CM measured from an axis that passes through the CM; this is the step readers usually miss.
- [Structure] State explicitly that Eq. (4.28) holds only for planar (lamina) bodies with $\mechanical z=0$; for a 3D body (cube, sphere) $\mechanical I_z\neq\mechanical I_x+\mechanical I_y$, and Eq. (4.33)-(4.34) is where planarity is used; warn against the common misuse.
- [Example] After Eq. (4.36) add a sanity check: the shell $\tfrac23\mechanical M\mechanical R^2$ is smaller than the ring $\mechanical M\mechanical R^2$ because the shell has mass near the poles, close to the axis.

### N1160

Note: [[03 Moment of Inertia of Composite Areas|03 Moment of Inertia of Composite Areas]]  
Priority: low · Graph: no · Manim: no

A short, correct note with one clean worked example; it states the cutout (subtraction) rule but never demonstrates it.

- [Example] Work one cutout case in the text (e.g. Exercise (vi) or a disk with an off-centre hole) using areal density $\sigma$: assign the removed piece mass $\sigma A_{\mathrm{hole}}$, compute its moment about the common axis with the parallel-axis theorem, and subtract; stress that the remaining mass is $M_{\mathrm{full}}-m_{\mathrm{hole}}$, which is the step students usually get wrong.
- [Intuition] After Eq. (4.39), point out that the vertex disks dominate through the $\mechanical m\mechanical d^2$ term ($\mechanical m\mechanical L^2$ versus $\tfrac32\mechanical m\mechanical R^2$), giving the "mass far from the axis counts most" message, and check the limit $\mechanical m\to0$.
- [Simplify] Say why the square's central moment is $\tfrac16\mechanical M\mechanical L^2$ (perpendicular-axis theorem with $\tfrac1{12}\mechanical M\mechanical L^2$ about each in-plane axis) and link to 4.2 rather than quoting it as given; also note the title says "areas" but the method works with masses.

### N1161

Note: [[01 Review - Linear Momentum|01 Review - Linear Momentum]]  
Priority: low · Graph: no · Manim: no

A short, clear review of linear momentum that motivates angular momentum well.

- [Simplify] State the impulse form $\Delta\mechanical{\vec p}=\int\Sigma\mechanical{\vec F}\,dt$ right after Eq. (5.1), since the window example is really an impulse argument (the force estimate needs the contact time) and this sets up the angular-impulse analogue later.
- [Links] Link "Newton's Laws" and the Impulse/Momentum glossary notes, and forward-link the tennis-ball spin question to 5.2 Definition of Angular Momentum.

### N1162

Note: [[02 Definition of Angular Momentum|02 Definition of Angular Momentum]]  
Priority: medium · Graph: yes · Manim: yes

The derivation of $\mechanical{\vec L}=\mechanical{\vec r}\times\mechanical{\vec p}$ is correct and compact, but it opens with Eq. (5.2) before $\mechanical{\vec L}$ exists and raises the straight-line car example without ever resolving it.

- [Structure] Eq. (5.2) is stated as a law before $\mechanical{\vec L}$ is defined, which reads as circular; reframe it as the goal ("we look for a quantity $\mechanical{\vec L}$ whose rate of change equals the net torque") and present Eq. (5.6) as the answer found in Eq. (5.5).
- [Intuition] The car-passing example in the paragraph before Fig. 5.1 is never completed; add that for straight-line motion $\mechanical r\sin\mechanical\phi=\mechanical d$ (perpendicular distance to the line) stays constant, so $|\mechanical{\vec L}|=\mechanical m\mechanical v\mechanical d$ is constant even though $\mechanical r$ and $\mechanical\phi$ both change, consistent with zero torque.
- [Simplify] Eq. (5.5): add one line noting the product rule $\frac{d}{dt}(\vec A\times\vec B)=\dot{\vec A}\times\vec B+\vec A\times\dot{\vec B}$ keeps factor order, and that the inserted term is exactly Eq. (5.4), so readers see why adding zero works.
- [Example] Add a numerical example after Eq. (5.8), e.g. a $0.2\,\unit{kg}$ ball on a $0.5\,\unit m$ string at $3\,\unit{m/s}$ ($\mechanical L=0.3\,\unit{kg\,m^2\,s^{-1}}$), plus the same ball moving in a straight line passing $0.5\,\unit m$ from the origin, to show both cases give the same $\mechanical L$.
- [Graph] 2D plot for a particle on the line $y=\mechanical d=1$ moving at $\mechanical v=1$: plot $\mechanical r(t)=\sqrt{\mechanical d^2+t^2}$, $\sin\mechanical\phi(t)=\mechanical d/\mechanical r$ and their product $\mechanical r\sin\mechanical\phi=\mechanical d$ for $t\in[-4,4]$, showing the constant moment arm.
- [Manim] Animate the car from the intro moving along a straight line past the origin with its $\mechanical{\vec r}$ arrow sweeping and the perpendicular distance $\mechanical d$ drawn, while a readout shows $\mechanical r$ and $\mechanical\phi$ changing and $\mechanical m\mechanical v\mechanical r\sin\mechanical\phi$ staying fixed.

### N1163

Note: [[03 Angular Momentum of Systems of Discrete Masses and Continuous Rigid Bodies|03 Angular Momentum of Systems of Discrete Masses and Continuous Rigid Bodies]]  
Priority: medium · Graph: no · Manim: yes

The algebra from Eq. (5.9) to $\mechanical{\vec L}_\parallel=\mechanical I\mechanical{\vec\omega}$ is correct, but the axial-projection argument is asserted rather than shown and the per-element $\mechanical{\vec\omega}_i$ notation contradicts the opening statement.

- [Structure] The intro says "every element has the same angular velocity", yet Eqs. (5.10)-(5.12) carry $\mechanical{\vec\omega}_i$ and only set $\mechanical{\vec\omega}_i=\mechanical{\vec\omega}$ at Eq. (5.13); either use $\mechanical{\vec\omega}$ from the start (shorter) or explain that Eq. (5.12) is the general system result before specialising to a rigid body.
- [Intuition] The paragraph before Eq. (5.9) claims the $z$ component of a position vector "contributes nothing" to $\mechanical L_\parallel$ without justification; add the one-line reason: $(z\hat z)\times\mechanical{\vec p}_i$ is perpendicular to $\hat z$ because it is a cross product with $\hat z$, so only the perpendicular part of $\mechanical{\vec r}_i$ survives in the axial component.
- [Correctness] Eq. (5.9) equates $\mechanical{\vec L}_{\mathrm{tot},\parallel}$ with $\sum\mechanical{\vec r}_i\times\mechanical{\vec p}_i$, which holds only because $\mechanical{\vec r}_i$ here is the perpendicular vector from the axis; label it $\mechanical{\vec r}_{i\perp}$ (and update the Physical quantities entry "Displacement from the specified reference point") so the equation is not read as the full angular momentum about an origin.
- [Example] Add a worked example after Eq. (5.14): two $1\,\unit{kg}$ masses on a massless rod at $0.5\,\unit m$ from the axis at $\mechanical\omega=4\,\unit{rad\,s^{-1}}$ ($\mechanical L=2\,\unit{kg\,m^2\,s^{-1}}$), then a uniform disk via $\int\mechanical r^2\,d\mechanical m=\tfrac12\mechanical M\mechanical R^2$.
- [Manim] Animate a single mass at height $z\neq0$ above the origin orbiting the $z$ axis: show $\mechanical{\vec L}=\mechanical{\vec r}\times\mechanical{\vec p}$ about the origin tilted and sweeping a cone while its $z$ component stays fixed at $\mechanical m\mechanical r_\perp^2\mechanical\omega$, then add a mirror mass at $-z$ to show the horizontal parts cancel (the principal-axis case mentioned after Eq. 5.14).

### N1164

Note: [[04 Change in Angular Momentum due to External Torques|04 Change in Angular Momentum due to External Torques]]  
Priority: medium · Graph: no · Manim: yes

Correct and concise, but the key step (why internal torques cancel) is stated tersely and the note has no figure or example.

- [Intuition] After Eq. (5.16), say in words why the strong form of Newton's third law matters: if the pair were equal and opposite but not collinear, it would form a couple and spin the system up from nothing, violating conservation of angular momentum.
- [Simplify] Show the short derivation of Eq. (5.17): $d\mechanical{\vec L}_{\mathrm{tot}}/dt=\sum_i\mechanical{\vec r}_i\times\mechanical{\vec F}_i$ (the $\mechanical{\vec v}_i\times\mechanical m_i\mechanical{\vec v}_i$ terms vanish), then split $\mechanical{\vec F}_i$ into external and pairwise internal parts; currently the reader must take it on trust.
- [Manim] Animate two particles linked by a central (collinear) force pair moving about a fixed point, with their torque vectors drawn and summing to zero, then switch to a non-collinear pair to show the uncancelled couple.
- [Example] Add a minimal example such as two skaters pulling on a rope: the internal tension changes each skater's $\mechanical{\vec L}$ but not the total.

### N1165

Note: [[05 Newton's Second Law for Rotational Motion with Constant Moment of Inertia|05 Newton's Second Law for Rotational Motion with Constant Moment of Inertia]]  
Priority: low · Graph: no · Manim: no

A brief, correct derivation of $\sum\tau_z=I_z\alpha_z$ from $dL_z/dt$ that is clear but gives no feel for the $dI_z/dt$ term it drops.

- [Intuition] Add one sentence and an example for the dropped term $\frac{d\mechanical I_z}{dt}\mechanical\omega_z$ in Eq. (5.18): a skater pulling in her arms feels zero torque, so $\mechanical I_z\mechanical\alpha_z=-\dot{\mechanical I}_z\mechanical\omega_z$ and she speeds up; link to 5.7.
- [Simplify] Clarify the last sentence: the vector form $\sum\mechanical{\vec\tau}=\mechanical I\mechanical{\vec\alpha}$ holds only when $\mechanical{\vec L}$ is parallel to $\mechanical{\vec\omega}$ (rotation about a principal axis); otherwise only the axial-component equation holds (cf. 8.2 Angular Momentum Revisited).

### N1166

Note: [[06 Notes on Angular Momentum and Newton's Second Law|06 Notes on Angular Momentum and Newton's Second Law]]  
Priority: medium · Graph: yes · Manim: yes

The three remarks are terse and loosely connected, Example 1 is correct, but Example 2 has a dimensionally inconsistent trajectory and inconsistent unit-vector notation.

- [Correctness] Example 2, Eqs. (5.24)-(5.28): $\mechanical x=\mechanical x_0+\cos(\signal\omega_1 t)$ adds a length to a dimensionless cosine, so $\mechanical{\vec v}(0)=\signal\omega_2\hat j$ in Eq. (5.27) has units $\unit{rad\,s^{-1}}$ not $\unit{m\,s^{-1}}$; introduce an amplitude $A$ (in $\unit m$), giving $\mechanical{\vec L}(0)=\mechanical m A\signal\omega_2(\mechanical x_0+A)\hat k$.
- [Correctness] Eqs. (5.24)-(5.27) use $\hat i,\hat j$ while Eq. (5.28) uses $\hat\imath,\hat\jmath,\hat k$; Eq. (5.21) mixes $\mechanical I_1,\mechanical I_2$ with the $\mechanical I_z$ given in the problem and drops the $z$ subscript used in Eq. (5.22); unify the notation and set "position r(t) and velocity v(t)" in math.
- [Structure] Remark (i) is a general calculus fact stated before any context; merge it with Example 1 part (b) where it is actually used, and give remark (ii) a concrete case (e.g. a skater pulling in her arms: $\mechanical I$ changes so $\sum\mechanical\tau=\mechanical I\mechanical\alpha$ fails but $d\mechanical{\vec L}/dt$ still works).
- [Intuition] Example 1: add a sentence that the disk must pass through $\mechanical\omega=0$, and that $|\Delta\mechanical L_z|=\mechanical I_z(\mechanical\omega_1+\mechanical\omega_2)$ is larger than either $|\mechanical{\vec L}|$ because the initial and final directions are opposite.
- [Graph] Add a 2D plot for Example 2 with $A=1$, $\mechanical x_0=2$, $\mechanical y_0=0$, $\signal\omega_1=1$, $\signal\omega_2=2$, $\mechanical m=1$: (a) the Lissajous trajectory $(\mechanical x,\mechanical y)$ for $t\in[0,2\pi]$ and (b) $\mechanical L_z(t)=\mechanical m(\mechanical x\mechanical v_y-\mechanical y\mechanical v_x)$ on the same interval, showing that $\mechanical L_z$ is not conserved for this non-central motion.
- [Manim] Animate the Example 2 particle tracing its Lissajous path with its $\mechanical{\vec r}$ and $\mechanical{\vec v}$ arrows and an $\mechanical L_z$ arrow along $z$ that grows, shrinks and flips sign as the motion proceeds.

### N1167

Note: [[07 Conservation of Angular Momentum|07 Conservation of Angular Momentum]]  
Priority: medium · Graph: yes · Manim: yes

The parallel linear/angular derivation is correct and tidy, but the examples stop at the formula without energy checks, numbers, or a physical account of where extra kinetic energy comes from.

- [Intuition] Example 3 and Example 4: add the energy consequence $\mechanical K_f/\mechanical K_i=\mechanical I_i/\mechanical I_f$ (for Example 4, $(\mechanical R_1/\mechanical R_2)^2$) and explain that the skater's muscles or the pull $\mechanical F$ does positive work; readers otherwise assume kinetic energy is conserved too.
- [Intuition] Example 5 after Eq. (5.47): note that kinetic energy drops by the factor $\mechanical I_d/(\mechanical I_d+\mechanical m\mechanical r^2)$ because the sticking is perfectly inelastic, contrasting with Example 4 where it rises.
- [Graph] Add a 2D graph for Example 4 with $x=\mechanical R_2/\mechanical R_1\in[0.2,1]$: plot $\mechanical v_2/\mechanical v_1=1/x$ and $\mechanical K_2/\mechanical K_1=1/x^2$ on the same axes to show speed and energy growing faster than linearly as the string is pulled in.
- [Manim] Animate Example 4: the mass spirals inward as the string is pulled, with a fixed-length $\mechanical L_z$ arrow at the hole and a velocity arrow that lengthens as $\mechanical R$ shrinks; optionally show the swept-area rate staying constant.
- [Example] Add one numerical skater case (e.g. $\mechanical I_i=3.5\,\unit{kg\,m^2}$, $\mechanical I_f=1.0\,\unit{kg\,m^2}$, $\mechanical\omega_i=2\,\unit{rad\,s^{-1}}$) so Eq. (5.41) yields a concrete $\mechanical\omega_f=7\,\unit{rad\,s^{-1}}$ and energy ratio 3.5.
- [Simplify] The introduction abbreviates Conservation of Momentum as "COM", which collides with the standard abbreviation for center of mass (CM/COM) used elsewhere; drop the abbreviation and cut the opening paragraph to one motivating sentence.

### N1168

Note: [[01 Review - Work due to a Force|01 Review - Work due to a Force]]  
Priority: low · Graph: yes · Manim: no

A short, correct review of the work integral that is clear but entirely abstract.

- [Graph] Add a simple 2D figure: a curved path with a force vector at one point, its tangent $d\mechanical{\vec S}$, the angle $\mechanical\phi$, and the tangential component $\mechanical F\cos\mechanical\phi$ highlighted, so "only the component along the displacement" is visual.
- [Simplify] The limits $\mechanical S_i,\mechanical S_f$ on a vector line integral in Eq. (6.1) are ambiguous; say the integral runs along the path from position $i$ to $f$, and add a one-line example (constant force at $60^\circ$ over $2\,\unit m$).

### N1169

Note: [[02 Work due to a Torque|02 Work due to a Torque]]  
Priority: low · Graph: no · Manim: yes

A clean, step-by-step derivation of $dW=\vec\tau\cdot d\vec\theta$ via the triple product, with a good figure.

- [Intuition] Add the scalar shortcut: only the tangential force component $\mechanical F_t$ does work, and it moves through arc $\mechanical r\,d\mechanical\theta$, so $d\energy W=\mechanical F_t\mechanical r\,d\mechanical\theta=\mechanical\tau\,d\mechanical\theta$; this is the intuition behind the algebra of Eqs. (6.2)–(6.3).
- [Manim] Animate Fig. 6.1: the body turns by a small $d\mechanical\theta$, $P$ moves to $P'$, and the force splits into a radial part (no work) and a tangential part (work) as the arc is traced.
- [Example] Add a quick numerical example, e.g. a wrench with constant $\mechanical\tau=20\,\unit{N\,m}$ turned through a quarter turn gives $\energy W=10\pi\,\unit J$, to anchor the radian-is-dimensionless remark.

### N1170

Note: [[03 Work-Kinetic Energy Theorem for Rotational Motion|03 Work-Kinetic Energy Theorem for Rotational Motion]]  
Priority: low · Graph: no · Manim: no

A careful, parallel derivation of the translational and rotational work–kinetic energy theorems that is clear and correct.

- [Simplify] Eq. (6.15) is easy to misread as counting a force's work twice; state that $\energy W_{\mathrm{net,force}}$ means the net force times the center-of-mass displacement and $\energy W_{\mathrm{net,rot}}$ uses torques about the CM, and forward-link to 7.4 where this split is used.
- [Example] Add a short example (a constant torque spins up a flywheel from rest through $N$ revolutions; find $\mechanical\omega_f$) before 6.3.1; the note currently has no numbers.
- [Intuition] In 6.3.1, illustrate the remark that internal torques can do net work with a concrete case (a clutch engaging two spinning disks), since the subtlety is otherwise abstract.

### N1171

Note: [[04 Rotational Kinetic Energy of Systems of Discrete Masses and Continuous Rigid Bodies|04 Rotational Kinetic Energy of Systems of Discrete Masses and Continuous Rigid Bodies]]  
Priority: low · Graph: yes · Manim: no

A clear derivation of $KE_{rot}=\tfrac12 I\omega^2$ from summing particle energies, with a working 3D figure.

- [Graph] Add a small 2D bar plot of $\energy{KE}_{\mathrm{rot}}/(\tfrac12\mechanical M\mechanical R^2\mechanical\omega^2)$ for ring (1), disk (1/2) and solid sphere (2/5) at equal $\mechanical M,\mechanical R,\mechanical\omega$, showing that mass far from the axis stores more energy.
- [Example] Add a short flywheel example (e.g. $\mechanical I=0.5\,\unit{kg\,m^2}$ at $3000$ rpm gives about $25\,\unit{kJ}$) for a feel of the magnitudes and of why flywheels concentrate mass at the rim.
- [Simplify] Eqs. (6.19)–(6.20) use $\mechanical\omega^2$ but Eq. (6.21) uses $\mechanical\omega_z^2$; note once that they are equal for fixed-axis rotation.

### N1172

Note: [[05 Power due to a Force or a Torque|05 Power due to a Force or a Torque]]  
Priority: low · Graph: yes · Manim: no

Clear definitions of power with two well-worked examples; the derivation of $P_{net}=dKE/dt$ is slightly roundabout.

- [Simplify] Replace the "hold the initial state fixed and vary the final time" step in Eqs. (6.24)/(6.28) with the direct derivation $d\energy{KE}/dt=\mechanical m\mechanical{\vec v}\cdot d\mechanical{\vec v}/dt=(\sum\mechanical{\vec F})\cdot\mechanical{\vec v}$ and $d\energy{KE}_{\mathrm{rot}}/dt=\mechanical I\mechanical\omega\mechanical\alpha=\mechanical\tau\mechanical\omega$.
- [Intuition] Add the engineering reading of $\energy{\mathcal P}=\mechanical\tau\mechanical\omega$ (gears trade torque for speed at fixed power) and connect it to Example 1, where gear 2 spins twice as fast as gear 1.
- [Graph] Plot a constant-power torque–speed curve: for $\energy{\mathcal P}=1\,\unit{kW}$, $\mechanical\tau=\energy{\mathcal P}/\mechanical\omega$ for $\mechanical\omega$ from 10 to 300 rad/s.
- [Intuition] In Example 1, say explicitly that the energy method answers the question without knowing the couple's torque or the time $t_1$, which is the point of using work and energy here.

### N1173

Note: [[06 Conservation of Energy and Conservation of Mechanical Energy|06 Conservation of Energy and Conservation of Mechanical Energy]]  
Priority: low · Graph: yes · Manim: yes

A methodical, correct treatment with a fully worked pulley example; the body-by-body bookkeeping is long and could be preceded by a system view.

- [Simplify] In Example 3, show the short system-level route first (loss of potential energy $(\mechanical m_2-\mechanical m_1)\mechanical g\mechanical h/2$ equals total kinetic energy $\tfrac12(\mechanical m_1+\mechanical m_2+\tfrac12\mechanical M)\mechanical v^2$), then present Eqs. (6.54)–(6.58) as the check that internal tension work cancels.
- [Intuition] Interpret $\mechanical m_1+\mechanical m_2+\tfrac12\mechanical M$ in Eq. (6.60) as an effective inertia, and give the limits $\mechanical M\to0$ (ideal Atwood result) and $\mechanical m_2=\mechanical m_1$ ($\mechanical v=0$).
- [Graph] Plot energies versus descent $y\in[0,1]\,\unit m$ for the example values: total $\energy U(y)$, translational $\energy{KE}(y)$, rotational $\energy{KE}_{\mathrm{rot}}(y)$, and their constant sum.
- [Manim] Animate the Atwood machine with a massive pulley: masses move, the pulley turns, and live energy bars (potential, translational, rotational) exchange while the total stays fixed.

### N1174

Note: [[01 General Motion of a Rigid Body - Chasles' Theorem|01 General Motion of a Rigid Body - Chasles' Theorem]]  
Priority: medium · Graph: no · Manim: yes

A very short note that states the decomposition idea but neither states Chasles' theorem precisely nor explains why the CM is the convenient reference point.

- [Correctness] Chasles' theorem proper says any rigid displacement is a screw motion (translation along an axis plus rotation about that same axis); say the decomposition used here is the elementary version, valid for any reference point, and that the CM is chosen because its motion obeys $\sum\mechanical{\vec F}_{\mathrm{ext}}=\mechanical M\mechanical{\vec a}_{\mathrm{cm}}$.
- [Manim] Animate Fig. 7.1: a thrown rod spins while its CM traces a parabola; then replay with the camera following the CM so only pure rotation remains, and finally view it from one end of the rod (messier motion) to show why the CM is chosen.
- [Simplify] Add the velocity formula $\mechanical{\vec v}_P=\mechanical{\vec v}_{\mathrm{cm}}+\mechanical{\vec\omega}\times\mechanical{\vec r}_{P/\mathrm{cm}}$ as the one equation that 7.2 builds on.

### N1175

Note: [[02 The Kinematics of Rolling Motion|02 The Kinematics of Rolling Motion]]  
Priority: medium · Graph: yes · Manim: yes

A clear account of rolling without slipping, but the spool kinematics appears inconsistent with the spool dynamics in 7.3 and the cycloid picture is missing.

- [Correctness] Eq. (7.12) $\mechanical v_A=\mechanical v_{\mathrm{cm}}(\cos\mechanical\phi+\mechanical r/\mechanical R)$ assumes the rope leaves the top of the groove, but 7.3.2 uses "the spool of Fig. 7.6" with a counterclockwise pull torque and gets $\mechanical a_{\mathrm{cm}}\propto(\cos\mechanical\phi-\mechanical r/\mechanical R)$; the power balance $\mechanical F\mechanical v_A=d\energy{KE}/dt$ matches Eq. (7.20) only if $\mechanical v_A=\mechanical v_{\mathrm{cm}}(\cos\mechanical\phi-\mechanical r/\mechanical R)$; make the geometry consistent across 7.2.3, Eq. (7.15) (unwinding vs. winding) and 7.3.2, and check Fig. 7.6.
- [Graph] Plot the cycloid traced by a rim point, $x=\mechanical R(\mechanical\theta-\sin\mechanical\theta)$, $y=\mechanical R(1-\cos\mechanical\theta)$ for $\mechanical\theta\in[0,4\pi]$ with $\mechanical R=1$, plus a curtate cycloid for an interior point at $\mechanical r=0.5$, with velocity arrows at the top, bottom and sides.
- [Manim] Animate a wheel rolling without slipping: show the translation and rotation velocity fields separately, then their sum, with the instantaneous rest point $B$ and $2\mechanical v_{\mathrm{cm}}$ at the top, while a rim point traces the cycloid.
- [Intuition] After Eq. (7.9), note that the contact point has zero velocity but a nonzero upward acceleration $\mechanical\omega^2\mechanical R$, and present the instantaneous-axis view ($\mechanical v=\mechanical\omega d_B$, with $d_B$ the distance from $B$) as a quick route to $\sqrt2\,\mechanical v_{\mathrm{cm}}$ at $C$ and $D$.

### N1176

Note: [[03 The Dynamics of Rolling Motion|03 The Dynamics of Rolling Motion]]  
Priority: medium · Graph: yes · Manim: yes

Correct force–torque analysis with a fully checked sphere example; the spool section is dense and the five-case table conflicts with the rolling constraint without saying so.

- [Simplify] The five-case table lists "constant net force, zero torque" and "zero net force, nonzero torque"; add that for rolling without slipping these rows are impossible because Eq. (7.5) ties $\mechanical a_{\mathrm{cm}}$ to $\mechanical\alpha$, so they apply to free or slipping bodies only.
- [Graph] Plot $\mechanical a_{\mathrm{cm}}/(\mechanical F/\mechanical M)$ from Eq. (7.20) versus $\mechanical\phi\in[0,\pi/2]$ for a uniform disk ($\mechanical I=\tfrac12\mechanical M\mechanical R^2$) with $\mechanical r/\mechanical R=0.5$, marking the sign change at $\cos\mechanical\phi=0.5$, and overlay $\mechanical f_s/\mechanical F$ from Eq. (7.17).
- [Manim] Animate the pulled spool: slowly tilt the pull from horizontal toward vertical while its line of action sweeps past the contact point $B$, and show the spool reverse its rolling direction at the critical angle.
- [Intuition] In Example 1, add the general result $\mechanical a_{\mathrm{cm}}=\mechanical g\sin\mechanical\phi/(1+\mechanical I/\mechanical M\mechanical R^2)$ to compare sphere, cylinder and ring, and note $\mechanical\mu_{s,\min}=\tfrac27\tan\mechanical\phi$, so steeper ramps need more friction.
- [Simplify] The note reuses $\mechanical\phi$ for the pull angle (7.3.2) and the ramp angle (Example 1); rename the ramp angle to avoid confusion.

### N1177

Note: [[04 Energy of Objects Executing both Translational and Rotational Motion|04 Energy of Objects Executing both Translational and Rotational Motion]]  
Priority: low · Graph: yes · Manim: yes

Clear and correct energy bookkeeping for rolling with a well-chosen example showing that static friction does no net work.

- [Graph] Plot the translational fraction $\energy{KE}_{\mathrm{cm}}/\energy{KE}_{\mathrm{tot}}=1/(1+k)$ versus $k=\mechanical I/(\mechanical M\mechanical R^2)\in[0,1]$, marking ring, shell, cylinder and solid sphere from Eqs. (7.41)–(7.44).
- [Manim] Animate a rolling race down an incline (ring, cylinder, solid sphere released together) with energy bars showing that the body with the larger rotational share arrives last.
- [Intuition] In Example 2, explain why the answer exceeds the naive $\mechanical F\Delta\mechanical x_{\mathrm{cm}}$: the string end at the top moves $2\Delta\mechanical x_{\mathrm{cm}}$, so the pull does $30\,\unit J$; this ties Eq. (7.37) to "work at the actual point of application".
- [Simplify] Compress the gravity and normal-force bookkeeping of Eq. (7.46) to one sentence, and give the translation/rotation percentages for every shape after Eq. (7.44), not only the shell.

### N1178

Note: [[01 Gyroscopic Precession|01 Gyroscopic Precession]]  
Priority: high · Graph: yes · Manim: yes

Qualitative and directionally correct, but it never derives the precession rate, contains a non sequitur about orbital angular momentum, and relies on static figures for an inherently dynamic effect.

- [Correctness] Section "Angular impulse and precession": "The center of mass also moves around the rope and has orbital angular momentum along $+z$. The spin axis therefore changes orientation even while the precession axis stays fixed." The "therefore" does not follow; moreover, since the gravitational torque has no $z$ component and the wheel starts with $\mechanical L_z=0$, the $+z$ orbital part must be balanced by a slight downward tilt of the spin axis (initial dip/nutation). Rewrite these sentences accordingly.
- [Simplify] Derive the missing quantitative result from Eq. (8.2): $|d\mechanical{\vec L}|=\mechanical\tau\,dt=\mechanical L\,d\mechanical\phi$ gives $\mechanical\omega_P=\mechanical\tau/\mechanical L=\mechanical m\mechanical g\mechanical r/(\mechanical I\mechanical\omega)$, which justifies the stated inverse proportionality and the fast-spin condition $\mechanical\omega_P\ll\mechanical\omega$.
- [Example] Add a worked bicycle-wheel number set (e.g. $\mechanical m=2\,\unit{kg}$, $\mechanical r=0.15\,\unit m$, $\mechanical I=0.1\,\unit{kg\,m^2}$, $\mechanical\omega=40\,\unit{rad\,s^{-1}}$ giving $\mechanical\omega_P\approx0.74\,\unit{rad\,s^{-1}}$) and check $\mechanical\omega_P\ll\mechanical\omega$.
- [Graph] Add a 2D graph of $\mechanical\omega_P=\mechanical m\mechanical g\mechanical r/(\mechanical I\mechanical\omega)$ versus $\mechanical\omega\in[5,100]\,\unit{rad\,s^{-1}}$ for the example wheel, with the line $\mechanical\omega_P=\mechanical\omega$ shown to mark where the fast-spin approximation breaks down.
- [Manim] Animate the top view: $\mechanical{\vec L}$ along the axle, $\mechanical{\vec\tau}$ perpendicular to it, a small $\Delta\mechanical{\vec L}=\mechanical{\vec\tau}\,\Delta t$ added head-to-tail each step, so the axle and $\mechanical{\vec L}$ sweep a horizontal circle while the torque turns with it; place it beside the non-spinning wheel that simply swings down.
- [Links] Link the angular impulse-momentum theorem before Eq. (8.2) to note 5.7 (Eq. 5.39), the linear analogy before Eq. (8.1) to Eq. (5.33), and the centripetal-force statement to the uniform-circular-motion note.

### N1179

Note: [[02 Angular Momentum Revisited|02 Angular Momentum Revisited]]  
Priority: medium · Graph: yes · Manim: yes

The reference-point calculation (Eqs. 8.3-8.9) is correct and clean, but the TLDR does not match the content and the closing paragraph on principal axes and the inertia tensor is too compressed to be understood.

- [Structure] The TLDR says the angular momentum "can depend on the direction as well as the rate of rotation", but the note actually shows that $\mechanical{\vec L}$ depends on the reference point while its axial component does not; rewrite the TLDR to state that.
- [Simplify] Eqs. (8.5)-(8.8) derive the components geometrically and Eq. (8.9) re-derives them by cross product; lead with Eq. (8.9) (two lines) and keep the triangle argument as a short check, which removes the extra angle $\mechanical\phi$.
- [Intuition] After Eq. (8.9) explain the consequence: as the mass orbits, the $\mechanical z_A\mechanical p$ component rotates with it, so $\mechanical{\vec L}_A$ sweeps a cone and changes in time even at constant speed; the required torque about $A$ comes from the centripetal force, which does not pass through $A$, whereas about $O$ it does and $\mechanical{\vec L}_O$ is constant.
- [Example] The last paragraph asserts non-parallel $\mechanical{\vec L}$ and $\mechanical{\vec\omega}$ for rigid bodies with no illustration; add the tilted dumbbell (two masses on a rod at an angle to the spin axis through its centre) showing $\mechanical{\vec L}$ not along $\mechanical{\vec\omega}$, and contrast it with a symmetric pair of masses at opposite points of the circle, where the $y$ components from Eq. (8.9) cancel.
- [Graph] 2D plot of the components normalised by $\mechanical r\mechanical p$ versus $\mechanical z_A/\mechanical r\in[-2,2]$: $\mechanical L_{A,z}=1$ (flat), $\mechanical L_{A,y}=\mechanical z_A/\mechanical r$ (line), $|\mechanical{\vec L}_A|=\sqrt{1+(\mechanical z_A/\mechanical r)^2}$, showing which part is invariant under the shift.
- [Manim] Animate the mass orbiting in the $xy$ plane with $\mechanical{\vec L}_A$ drawn from $A$: its tip traces a horizontal circle (cone) while its $z$ projection stays fixed, contrasted with the stationary $\mechanical{\vec L}_O$.

### N1180

Note: [[03 Rotation Matrices|03 Rotation Matrices]]  
Priority: medium · Graph: yes · Manim: yes

The 2D derivation is correct and easy to follow, but the 3D part is a bare list of matrices with no worked example or properties, and non-commutativity is asserted rather than shown.

- [Example] After the composition equation, add the concrete check with $\mechanical{\vec r}_i=(1,0,0)^{\mathsf T}$ and $90^\circ$ turns: $R_y R_x\mechanical{\vec r}_i=(0,0,-1)^{\mathsf T}$ but $R_x R_y\mechanical{\vec r}_i=(0,1,0)^{\mathsf T}$, which proves the products differ.
- [Manim] Animate a labelled box (or book) rotated $90^\circ$ about $x$ then $y$ next to an identical box rotated about $y$ then $x$, ending in visibly different orientations, with the matrix product written under each.
- [Graph] Add an interactive 2D graph with a slider for $\mechanical\beta\in[0,2\pi]$ showing $\mechanical{\vec r}_i$, $\mechanical{\vec r}_f=R(\mechanical\beta)\mechanical{\vec r}_i$ and the circle of radius $\mechanical r$, plus the rotated unit vectors, so readers see Eq. (8.13) and that the columns of $R$ are the images of $\hat x$ and $\hat y$.
- [Intuition] After Eq. (8.14) state and explain the key properties: columns are rotated unit vectors, $R^{\mathsf T}R=\mathbb 1$ (lengths preserved, so $R^{-1}=R^{\mathsf T}$), $\det R=+1$, and in the plane $R(\alpha)R(\beta)=R(\alpha+\beta)$ commutes, contrasting with 3D.
- [Intuition] Explain the apparent sign flip in $R_y$ of Eq. (8.15): with the cyclic order $z\to x$ for rotations about $y$, the $+\sin$ sits in the $(x,z)$ entry; otherwise readers suspect a typo.
- [Structure] Number the unnumbered composition equation (e.g. 8.16), move Fig. 8.5 below the "Rotation in the plane" text that explains active versus passive rotation, and drop the unneeded time framing ($t_i$, "moving counterclockwise") since only the geometric rotation matters.

### N1181

Note: [[09 Further Reading|09 Further Reading]]  
Priority: low · Graph: no · Manim: no

A tidy bibliography that serves its purpose.

- [Structure] No change needed; optionally add one line per entry on what it is useful for (e.g. Mungan for the pulled spool in 7.3.2, Carnero et al. for friction work in rolling in 7.4).
