---
title: "Superposition, electric flux, and Gauss’s law problems"
---

> [!TLDR]
> Build electric fields from point charges and continuous distributions, then apply Gauss’s law when symmetry fixes the field.

## Worked lecture material

The schedule entry reads Tuesday, 2:30–4:30 p.m.

##### Order of material

1. Electrostatics
2. Direct-current electricity
3. Magnetism
4. Electromagnetism
5. Alternating-current electricity
6. Maxwell's equations
7. Wave optics and geometric optics

##### Electrostatics

The opening diagram places force and potential energy above electric field and electric potential, respectively. The arrows link the four quantities. For point charges, the notes give

$$
\begin{aligned}
\mechanical{\vec F}
 &=\frac{\electric{k}\electric{q}_1\electric{q}_2}{\mechanical{r}^2}\hat r,
&\energy{U}
 &=\frac{\electric{k}\electric{q}_1\electric{q}_2}{\mechanical{r}},\\
\electric{\vec E}
 &=\frac{\electric{k}\electric{q}_1}{\mechanical{r}^2}\hat r,
&\electric{V}
 &=\frac{\electric{k}\electric{q}_1}{\mechanical{r}}.
\end{aligned}
$$

$$
\mechanical{\vec F}=\electric{q}\,\electric{\vec E},
\qquad
\mechanical{F}_x=-\frac{\mathrm{d}\energy{U}}{\mathrm{d}\mechanical{x}},
\qquad
\electric{E}_x=-\frac{\mathrm{d}\electric{V}}{\mathrm{d}\mechanical{x}}.
$$

The vector expression on this line is written with positive derivatives.

$$
\mechanical{\vec F}=
\frac{\partial\energy{U}}{\partial\mechanical{x}}\hat{\imath}
+\frac{\partial\energy{U}}{\partial\mechanical{y}}\hat{\jmath}
+\frac{\partial\energy{U}}{\partial\mechanical{z}}\hat{k}.
$$

> [!note]
> The preceding one-dimensional relation has a minus sign. The corresponding force vector is the negative gradient of the potential energy.

The charge of an electron is $-1.60\times10^{-19}\,\unit{C}$ and the charge of a proton is $+1.60\times10^{-19}\,\unit{C}$. The electron mass is of order $10^{-31}\,\unit{kg}$.

The two-charge sketch shows $\mechanical{\vec F}_{2,1}$ pointing left from charge $\electric{q}_1$ and $\mechanical{\vec F}_{1,2}$ pointing right from charge $\electric{q}_2$. The vector $\hat r_{1,2}$ points from charge 1 toward charge 2.

$$
\mechanical{\vec F}_{1,2}
=\frac{\electric{k}\electric{q}_1\electric{q}_2}{\mechanical{r}^2}\hat r_{1,2},
\qquad
\electric{k}=9\times10^9\,\unit{N\,m^2\,C^{-2}}
=\frac1{4\pi\electric{\varepsilon}_0}.
$$

The notes identify $\electric{\varepsilon}_0$ as the permittivity of free space and point out the parallel with gravity.

##### Electric and gravitational forces between protons

For two protons separated by $\mechanical{d}$, the notes compare

$$
\begin{aligned}
\mechanical{F}_{\mathrm{el}}
&=\frac{(1.6\times10^{-19}\,\unit{C})^2(9\times10^9\,\unit{N\,m^2\,C^{-2}})}
        {\mechanical{d}^2},\\
\mechanical{F}_g
&=\frac{(1.7\times10^{-27}\,\unit{kg})^2
        (6.7\times10^{-11}\,\unit{N\,m^2\,kg^{-2}})}
        {\mechanical{d}^2}.
\end{aligned}
$$

The ratio $\mechanical{F}_{\mathrm{el}}/\mechanical{F}_g$ is of order $10^{36}$. The corresponding proton accelerations are $\mechanical{a}_{pe}=\mechanical{F}_{\mathrm{el}}/\mechanical{m}_p$ and $\mechanical{a}_{pg}=\mechanical{F}_g/\mechanical{m}_p$.

> [!note]
> The handwritten acceleration ratio appears to say $10^{26}$. The proton mass cancels, so the acceleration ratio equals the force ratio.

##### Force on charge 2 due to charge 1

$$
\mechanical{\vec F}_{12}
=\frac{\electric{k}\electric{q}_1\electric{q}_2}{\mechanical{r}_{12}^2}\hat r_{12}.
$$

The direction is $+\hat r_{12}$ for charges of the same sign and $-\hat r_{12}$ for opposite signs. Alternatively, calculate the absolute value of the scalar coefficient and state the direction separately.

$$
\electric{k}=8.99\times10^9\,\unit{N\,m^2\,C^{-2}}
=\frac1{4\pi\electric{\varepsilon}_0},
\qquad
\electric{\varepsilon}_0=8.85\times10^{-12}\,\unit{C^2\,N^{-1}\,m^{-2}}.
$$

##### Example with three charges

Charges $\electric{q}_A=\electric{q}_B=\quantity{2.0}{nC}$ are at the bottom vertices of an equilateral triangle. Charge $\electric{q}_C=\quantity{1.0}{nC}$ is at the top. Each side is $\quantity{1}{cm}$. The forces $\mechanical{\vec F}_{AC}$ and $\mechanical{\vec F}_{BC}$ on $C$ point up and away from the other charges. Their horizontal components cancel. The vertical components are equal, with $\mechanical{F}_{AC,y}=\mechanical{F}_{AC}\sin 60^\circ$.

$$
\mechanical{\vec F}_{C,\mathrm{net}}
=2\left|\frac{\electric{k}\electric{q}_A\electric{q}_C}{\mechanical{r}_{AC}^2}\right|
  \sin 60^\circ\,\hat{\jmath}
=3.11\times10^{-4}\,\unit{N}\,\hat{\jmath}.
$$

The result uses $\electric{k}=8.99\times10^9\,\unit{N\,m^2\,C^{-2}}$. The numerical substitution appears to have a stray minus sign in the exponent on $\electric{k}$.

The net vertical electric force from the triangle example is $3.11\times10^{-4}\,\unit{N}$ upward. The note “$\mechanical{F}_g=$ ? $=$ the same” leads to the question of how much mass the force can support.

$$
3.11\times10^{-4}\,\unit{N}-\mechanical{m}\mechanical{g}=0,
\qquad
\mechanical{m}
=\frac{3.11\times10^{-4}\,\unit{N}}{9.8\,\unit{m\,s^{-2}}}
=3.17\times10^{-5}\,\unit{kg}.
$$

The notes compare $\quantity{1.0}{nC}=10^{-9}\,\unit{C}$ with the electron charge $-\electric{e}=-1.60\times10^{-19}\,\unit{C}$. They mark the difference as ten orders of magnitude.

Two objects, each of mass $\quantity{0.120}{kg}$, hang from a common point on $\quantity{30}{cm}$ strings. The first sketch shows the neutral objects hanging together. After charging, the strings each make $10^\circ$ with the vertical. Each horizontal displacement is $0.30\cos80^\circ\,\unit{m}\simeq0.052\,\unit{m}$, and the separation is $\mechanical{r}=\quantity{10.4}{cm}$.

The two repulsive forces have equal magnitude and point away from one another. On the left object, the tension points along the string at $80^\circ$ above the horizontal, the electric force points left, and gravity points down.

$$
\begin{aligned}
\sum\mechanical{F}_x&=\mechanical{T}\cos80^\circ-\mechanical{F}_{21}=0,\\
\sum\mechanical{F}_y&=\mechanical{T}\sin80^\circ-\mechanical{m}\mechanical{g}=0.
\end{aligned}
$$

$$
\mechanical{T}=\frac{\mechanical{m}\mechanical{g}}{\sin80^\circ}
=\quantity{1.2}{N}.
$$

$$
\mechanical{T}\cos80^\circ
=\left|\frac{\electric{k}\electric{q}_2\electric{q}_1}{\mechanical{r}^2}\right|
=\frac{\electric{k}\electric{q}^2}{\mechanical{r}^2},
\qquad \electric{q}_1=\electric{q}_2=\electric{q}.
$$

The suspended-charge example continues with

$$
\electric{q}=\sqrt{\frac{\mechanical{T}\cos80^\circ\,\mechanical{r}^2}{\electric{k}}},
\qquad
2\electric{q}=2\sqrt{\frac{\mechanical{T}\cos80^\circ\,\mechanical{r}^2}{\electric{k}}}.
$$

The faint numerical entry reads about $5.00\times10^{-7}\,\unit{C}$. The preceding data give this value for each charge, so the pair has about $1.00\times10^{-6}\,\unit{C}$.

**Problem 2**

The sketch marks a $15^\circ$ incline, radius $\mechanical{r}=\quantity{0.1}{m}$, mass $\mechanical{m}=\quantity{0.025}{kg}$, and charge $\electric{q}=\quantity{800}{\mu C}=8\times10^{-4}\,\unit{C}$. The force diagram resolves the normal force and the weight into components using $15^\circ$.

A second sketch shows the contributions from two slices of a semicircular charge distribution. With total arc charge $\electric{Q}$,

$$
\electric{\lambda}=\frac{\electric{Q}}{\pi\mechanical{r}},
\qquad
\mathrm{d}\electric{q}=\electric{\lambda}\mechanical{r}\,\mathrm{d}\theta,
\qquad
\mathrm{d}\electric{E}=\frac{\electric{k}\,\mathrm{d}\electric{q}}{\mechanical{r}^2}.
$$

The components are $\mathrm{d}\electric{E}_x=\mathrm{d}\electric{E}\cos\theta$ and $\mathrm{d}\electric{E}_y=\mathrm{d}\electric{E}\sin\theta$. Using the slice charge in the integrals gives

$$
\begin{aligned}
\electric{E}_x
&=\frac{\electric{k}\electric{\lambda}}{\mechanical{r}}
  \int_0^\pi\cos\theta\,\mathrm{d}\theta=0,\\
\electric{E}_y
&=\frac{\electric{k}\electric{\lambda}}{\mechanical{r}}
  \int_0^\pi\sin\theta\,\mathrm{d}\theta
 =\frac{2\electric{k}\electric{\lambda}}{\mechanical{r}}.
\end{aligned}
$$

The intermediate handwriting uses $\electric{k}\electric{Q}/\mechanical{r}^2$ as the coefficient in both integrals. The slice relation gives $\electric{k}\electric{\lambda}/\mechanical{r}$, consistent with the checked result. The final instruction begins “multiply” and “and set.”

The example places charge $\electric{Q}_1=-2\electric{e}$ at the origin and $\electric{Q}_2=+2\electric{e}$ to its right. The unit vector $\hat r_{21}$ points from charge 2 to charge 1, so $\hat r_{21}=-\hat{\imath}$.

$$
\mechanical{\vec F}_{21}
=\frac{\electric{k}(-2\electric{e})(+2\electric{e})}
       {\mechanical{r}_{21}^2}(-\hat{\imath}).
$$

The negative signs cancel. The force on charge 1 points toward charge 2. The sketch labels the separation $\quantity{4}{cm}$, although the written substitution uses $(0.4\,\unit{m})^2$.

If the direction is clear from the charge signs, calculate the magnitude from $\mechanical{F}=|\electric{k}\electric{q}_1\electric{q}_2/\mechanical{r}^2|$ and state the direction separately.

##### Order of magnitude of a distant electric field

$$
\electric{\vec E}=\frac{\electric{k}\electric{q}}{\mechanical{r}^2}\hat r
=\frac{1}{4\pi\electric{\varepsilon}_0}\frac{\electric{q}}{\mechanical{r}^2}\hat r.
$$

For a charge of magnitude $1.6\times10^{-19}\,\unit{C}$ at $\mechanical{r}=\quantity{10}{m}$, the field is of order $10^{-11}\,\unit{N\,C^{-1}}$. The handwritten numerator appears to use $10^{-9}$, while the reported result agrees with $10^{-19}$.

The field is radially inward for a negative source and outward for a positive source. To find the direction, ask which way the force on a proton would point. The sketches show lines radiating from positive charges. Field lines do not cross. Use superposition to combine fields.

$$
\electric{\vec E}_{\mathrm{net}}
=\electric{\vec E}_1+\electric{\vec E}_2+\cdots.
$$

The field-line sketch shows a positive charge above a negative charge. The arrows leave the upper charge and curve downward toward the lower part of the drawing.

Excess charge on a conductor is on the surface. A positive charge has $\mechanical{\vec F}=+\electric{q}\electric{\vec E}$, along the field. A negative charge has $\mechanical{\vec F}=-\electric{q}\electric{\vec E}$, opposite the field.

The projectile-motion sketch shows $\mathrm{Na}^+$ and $\mathrm{K}^+$ curving downward in a uniform downward electric field. Both ions have the same charge. Potassium has more mass and therefore less acceleration in the field.

$$
\mechanical{F}=\mechanical{m}\mechanical{a},
\qquad
\mechanical{a}=\frac{\mechanical{F}}{\mechanical{m}}.
$$

The notes compare $\mechanical{m}\mechanical{g}=\mechanical{m}\mechanical{a}$ for gravity with $\electric{q}\electric{E}=\mechanical{m}\mechanical{a}$ for an electric field.

##### Calculating the electric field

The observation point is the top left corner of a rectangle, $\quantity{4}{cm}$ wide and $\quantity{3}{cm}$ high. Charges at the bottom left, top right, and bottom right corners are $\electric{q}_1=-5\,\unit{nC}$, $\electric{q}_2=+10\,\unit{nC}$, and $\electric{q}_3=+10\,\unit{nC}$, respectively.

$$
\begin{aligned}
\electric{\vec E}_1
&=\frac{\electric{k}(5\times10^{-9}\,\unit{C})}{(0.03\,\unit{m})^2}(-\hat{\jmath}),\\
\electric{\vec E}_2
&=\frac{\electric{k}(10\times10^{-9}\,\unit{C})}{(0.04\,\unit{m})^2}(-\hat{\imath}),\\
\electric{\vec E}_3
&=\frac{\electric{k}(10\times10^{-9}\,\unit{C})}{(0.05\,\unit{m})^2}
  \left[\frac{0.04}{0.05}(-\hat{\imath})+\frac{0.03}{0.05}\hat{\jmath}\right].
\end{aligned}
$$

The electric field is tangent to its field lines. Fig. 1 shows a $+3.0\,\unit{nC}$ charge above a $-3.0\,\unit{nC}$ charge, each $\quantity{5}{cm}$ from the midpoint. The arrow at the marked point is tangent to the curved line. Fig. 2 shows two positive charges with a rightward net field at a point on the perpendicular bisector.

![[Kyle Kabasares - Electricity and Magnetism - opposite charges and field tangent.png|**Fig. 1** Field lines of opposite charges and the tangent field direction at a marked point]]

![[Kyle Kabasares - Electricity and Magnetism - field of two positive charges.png|**Fig. 2** Field direction on the perpendicular bisector of two positive charges]]

A dipole consists of equal and opposite charges separated by a distance $\mechanical{s}$. The dipole moment $\electric{\vec p}$ points from the negative charge to the positive charge and has magnitude $\electric{p}=\electric{q}\mechanical{s}$.

##### Electric field of a dipole

The sketch puts the charges at $y=\pm s/2$, with the positive charge above the origin. For a point on the positive axis above both charges,

$$
\begin{aligned}
\electric{\vec E}_{\mathrm{net}}
&=\electric{k}\electric{q}\left[
\frac1{(\mechanical{y}-\mechanical{s}/2)^2}
-\frac1{(\mechanical{y}+\mechanical{s}/2)^2}\right]\hat{\jmath}\\
&=\frac{2\electric{k}\electric{q}\mechanical{y}\mechanical{s}}
 {(\mechanical{y}+\mechanical{s}/2)^2(\mechanical{y}-\mechanical{s}/2)^2}
 \hat{\jmath}.
\end{aligned}
$$

For $\mechanical{y}\gg\mechanical{s}$, the denominator is approximately $\mechanical{y}^4$, so

$$
\electric{\vec E}_{\mathrm{net}}\simeq
\frac{2\electric{k}\electric{q}\mechanical{s}}{\mechanical{y}^3}\hat{\jmath}
=\frac{2\electric{k}\electric{\vec p}}{\mechanical{y}^3}.
$$

The handwritten line omits $\electric{k}$ in the first form of the final approximation and includes it in the dipole-moment form. A second observation point on the perpendicular bisector has opposing horizontal components and a downward net field. The page ends by recalling $\electric{\vec E}=\electric{k}\electric{q}\hat r/\mechanical{r}^2$ for a point charge.

At a point on the perpendicular bisector of the dipole, the two vertical field components add and point down. For one component,

$$
|\electric{E}_y|
=\electric{E}\sin\theta
=\frac{\electric{k}\electric{q}}{\mechanical{x}^2+(\mechanical{s}/2)^2}
 \frac{\mechanical{s}/2}{\sqrt{\mechanical{x}^2+(\mechanical{s}/2)^2}}.
$$

Multiplying by two gives the net magnitude. With $\mechanical{x}\gg\mechanical{s}$, the notes box

$$
\boxed{\electric{\vec E}_{\mathrm{net}}\simeq
-\frac{\electric{k}\electric{\vec p}}{\mechanical{x}^3}}.
$$

##### Dipole in an electric field

The notes state that an electric field exerts a torque on a dipole. The sketch shows the aligned orientation, with the negative charge on the left, the positive charge on the right, and both $\electric{\vec p}$ and $\electric{\vec E}$ pointing right.

##### Electric fields of charge distributions

Divide the distribution into elements and add their field contributions.

$$
\electric{\vec E}_{\mathrm{net}}
=\sum_i\frac{\electric{k}\Delta\electric{q}_i}{\mechanical{r}_i^2}\hat r_i
\quad\longrightarrow\quad
\int\frac{\electric{k}\,\mathrm{d}\electric{q}}{\mechanical{r}^2}\hat r.
$$

##### Charge density

| Distribution | Density | Element |
| --- | --- | --- |
| Line | $\electric{\lambda}=\electric{Q}/\mechanical{L}=\mathrm{d}\electric{Q}/\mathrm{d}\mechanical{L}$ | $\mathrm{d}\electric{q}=(\electric{Q}/\mechanical{L})\,\mathrm{d}\mechanical{L}$ |
| Surface | $\electric{\eta}=\electric{Q}/\mechanical{A}=\mathrm{d}\electric{Q}/\mathrm{d}\mechanical{A}$ | $\mathrm{d}\mechanical{A}=\mathrm{d}\mechanical{x}\,\mathrm{d}\mechanical{y}$ in Cartesian coordinates |
| Volume | $\electric{\rho}=\electric{Q}/\mechanical{V}=\mathrm{d}\electric{q}/\mathrm{d}\mechanical{V}$ | $\mathrm{d}\mechanical{V}=\mathrm{d}\mechanical{x}\,\mathrm{d}\mechanical{y}\,\mathrm{d}\mechanical{z}$ |

The ratios using total charge apply to uniform distributions. The volume sketch labels the three sides of a small rectangular element.

A line of length $\mechanical{L}$ and total charge $\electric{Q}$ lies along the $y$ axis from $-\mechanical{L}/2$ to $+\mechanical{L}/2$. The field is evaluated at a point a fixed distance $\mechanical{x}$ to the right of its midpoint. For a line element at $\mechanical{y}$,

$$
\mechanical{r}^2=\mechanical{x}^2+\mechanical{y}^2,\qquad
\cos\theta=\frac{\mechanical{x}}{\sqrt{\mechanical{x}^2+\mechanical{y}^2}},
\qquad
\mathrm{d}\mechanical{L}=\mathrm{d}\mechanical{y}.
$$

The $y$ components cancel by symmetry. The notes box

$$
\electric{E}_x
=\frac{\electric{k}\electric{Q}\mechanical{x}}{\mechanical{L}}
 \int_{-\mechanical{L}/2}^{+\mechanical{L}/2}
 \frac{\mathrm{d}\mechanical{y}}{(\mechanical{x}^2+\mechanical{y}^2)^{3/2}}.
$$

The integral review starts with the small line element $\mathrm{d}\electric{q}$ and its field.

$$
\mathrm{d}\electric{\vec E}
=\frac{\electric{k}\,\mathrm{d}\electric{q}}{\mechanical{r}^2}\hat r
=\frac{\electric{k}\,\mathrm{d}\electric{q}}{\mechanical{x}^2+\mechanical{y}^2}\hat r.
$$

Use the definition of linear charge density to replace $\mathrm{d}\electric{q}$.

$$
\electric{\lambda}=\frac{\electric{Q}}{\mechanical{L}}
=\frac{\mathrm{d}\electric{q}}{\mathrm{d}\mechanical{y}},
\qquad
\mathrm{d}\electric{q}=\frac{\electric{Q}}{\mechanical{L}}\mathrm{d}\mechanical{y}.
$$

The surviving component and its integrated magnitude are

$$
\begin{aligned}
\mathrm{d}\electric{E}_x
 &=\frac{\electric{k}(\electric{Q}/\mechanical{L})\mechanical{x}\,\mathrm{d}\mechanical{y}}
        {(\mechanical{x}^2+\mechanical{y}^2)^{3/2}},\\
|\electric{E}_x|
 &=\frac{\electric{k}|\electric{Q}|}
        {|\mechanical{x}|\sqrt{(\mechanical{L}/2)^2+\mechanical{x}^2}}.
\end{aligned}
$$

The boxed form is shown for $\mechanical{x}>0$. Choose the direction according to the sign of the line charge and the side of the line.

##### A plane of charge

The perspective and edge views show arrows normal to a positively charged plane and pointing away on both sides.

$$
(\electric{E}_{\mathrm{plane}})_z=
\begin{cases}
+\electric{\eta}/(2\electric{\varepsilon}_0),&\mechanical{z}>0,\\
-\electric{\eta}/(2\electric{\varepsilon}_0),&\mechanical{z}<0.
\end{cases}
$$

The parallel-plate capacitor sketch shows field arrows from the positive plate to the negative plate.

##### Gauss's law

Gauss's law is one of Maxwell's equations. It relates electric field to charge and gives another way to calculate the field. Flux measures how much field passes through a surface. For a flat area in a uniform field,

$$
\electric{\Phi}
=\electric{E}_\perp\mechanical{A}
=\electric{\vec E}\cdot\mechanical{\vec A}
=\electric{E}\mechanical{A}\cos\theta.
$$

The area vector is normal to the surface. For a completely closed surface,

$$
\electric{\Phi}_{E,\mathrm{net}}
=\oint\electric{\vec E}\cdot\mathrm{d}\mechanical{\vec A}
=\oint\electric{E}_\perp\,\mathrm{d}\mechanical{A}
=\frac{\electric{Q}_{\mathrm{inside}}}{\electric{\varepsilon}_0}.
$$

The notes list the area of a cube as $6\mechanical{L}^2$, of a sphere as $4\pi\mechanical{r}^2$, and of the curved side of a cylinder as $2\pi\mechanical{r}\mechanical{H}$.

Gauss's law uses a closed imaginary surface called a Gaussian surface. Choose a surface on which the normal field component is constant, if the symmetry permits.

$$
\frac{\electric{Q}_{\mathrm{enc}}}{\electric{\varepsilon}_0}
=\oint\electric{\vec E}\cdot\mathrm{d}\mechanical{\vec A}
=\oint\electric{E}_\perp\,\mathrm{d}\mechanical{A}
=\electric{E}_\perp\oint\mathrm{d}\mechanical{A}
$$

The last equality assumes the same normal component on the part under consideration.

##### Infinite line of charge

Use a cylinder of radius $\mechanical{r}$ and length $\mechanical{H}$ around the line. The end view shows radial field arrows crossing the curved surface at right angles. The flux through the ends is zero because the field is parallel to those surfaces.

$$
\oint\electric{\vec E}\cdot\mathrm{d}\mechanical{\vec A}
=\underbrace{\int_{\mathrm{ends}}\electric{\vec E}\cdot\mathrm{d}\mechanical{\vec A}}_{0}
+\int_{\mathrm{side}}\electric{\vec E}\cdot\mathrm{d}\mechanical{\vec A}.
$$

For constant $\electric{\lambda}$, the cylinder encloses $\electric{Q}_{\mathrm{enc}}=\electric{\lambda}\mechanical{H}$.

$$
\frac{\mechanical{H}\electric{\lambda}}{\electric{\varepsilon}_0}
=\electric{E}_\perp(2\pi\mechanical{r}\mechanical{H}),
\qquad
\electric{\vec E}=\frac{\electric{\lambda}}{2\pi\electric{\varepsilon}_0\mechanical{r}}\hat r.
$$

##### Uniformly charged sphere

The sphere has radius $\mechanical{R}$ and total charge $\electric{Q}$. The sketch shows a concentric Gaussian surface of radius $\mechanical{r}<\mechanical{R}$. For a uniform volume charge density, the enclosed charge is the fraction of total charge given by the ratio of volumes.

$$
\electric{Q}_{\mathrm{enc}}
=\electric{Q}\frac{(4/3)\pi\mechanical{r}^3}{(4/3)\pi\mechanical{R}^3}
=\electric{Q}\frac{\mechanical{r}^3}{\mechanical{R}^3},
\qquad
\frac{\electric{Q}_{\mathrm{enc}}}{\electric{\varepsilon}_0}
=\oint\electric{E}_\perp\,\mathrm{d}\mechanical{A}.
$$

Apply Gauss's law to the concentric sphere. The radial field has the same value over the entire Gaussian surface.

$$
\frac{\electric{Q}_{\mathrm{tot}}}{\electric{\varepsilon}_0}
 \frac{\mechanical{r}^3}{\mechanical{R}^3}
=\electric{E}\oint\mathrm{d}\mechanical{A}
=\electric{E}(4\pi\mechanical{r}^2).
$$

$$
\electric{E}=
\frac{\electric{Q}_{\mathrm{tot}}}{4\pi\electric{\varepsilon}_0\mechanical{R}^3}\mechanical{r},
\qquad \mechanical{r}<\mechanical{R}.
$$

The sketch rises linearly from the origin to $\mechanical{R}$ with slope $\electric{k}\electric{Q}_{\mathrm{tot}}/\mechanical{R}^3$. The falling part outside the sphere is labeled “$\electric{E}$ of a point charge.” The plotted fall is schematic.

The electric field points perpendicular to the surface in the spherical example. The notes recall Coulomb's force and potential energy.

$$
\mechanical{\vec F}
=\frac{\electric{k}\electric{q}_1\electric{q}_2}{\mechanical{r}^2}\hat r,
\qquad
\energy{U}=\frac{\electric{k}\electric{q}_1\electric{q}_2}{\mechanical{r}}.
$$

For a conservative force, the work is the negative change in potential energy.

$$
\energy{W}=-\Delta\energy{U}
=\int \mechanical{\vec F}\cdot\mathrm{d}\mechanical{\vec r}.
$$

For constant force and angle, the dot product gives $\mechanical{F}\,\Delta\mechanical{r}\cos\theta$. Gravity does positive work when $\theta=0^\circ$ and negative work when $\theta=180^\circ$. The sketch with points A and B shows two different paths with the same work. The notes say that energy put into the system can be recovered without loss in this conservative case.

$$
\mechanical{F}_x=-\frac{\partial\energy{U}}{\partial\mechanical{x}},
\qquad
\mechanical{F}_y=-\frac{\partial\energy{U}}{\partial\mechanical{y}}.
$$

For point charges, the reference at which the electric potential energy is zero is infinity.

The opening diagram connects three charges by the distances $\mechanical{r}_1$, $\mechanical{r}_2$, and $\mechanical{r}_{12}$. The total force and field are vector sums. The total potential energy is a sum over distinct pairs.

$$
\mechanical{\vec F}_{\mathrm{net}}=\sum_i\mechanical{\vec F}_i,\qquad
\electric{\vec E}_{\mathrm{net}}=\sum_i\electric{\vec E}_i,\qquad
\energy{U}_{\mathrm{net}}=\sum_{i<j}\energy{U}_{ij}.
$$

##### Kirchhoff's laws

The net change in potential around a loop is zero, $\Delta\electric{V}_{\mathrm{loop}}=0$. At a junction, $\electric{I}_{\mathrm{in}}=\electric{I}_{\mathrm{out}}$.

![[Kyle Kabasares - Electricity and Magnetism - six-resistor bridge sketch.png|**Fig. 3** Source and six-resistor bridge with branch currents and loop directions labeled]]

The handwritten junction relations are

$$
\electric{I}=\electric{I}_2+\electric{I}_3,\qquad
\electric{I}_2=\electric{I}_4+\electric{I}_5,\qquad
\electric{I}_3=\electric{I}_4+\electric{I}_6.
$$

The loop relations are written as

$$
\begin{aligned}
\electric{V}_0&=\electric{I}\circuit{R}_1-\electric{I}_2\circuit{R}_2-\electric{I}_5\circuit{R}_5=0,\\
0&=\electric{I}_3\circuit{R}_3-\electric{I}_4\circuit{R}_4-\electric{I}_2\circuit{R}_2,\\
0&=\electric{I}_5\circuit{R}_5-\electric{I}_4\circuit{R}_4-\electric{I}_6\circuit{R}_6.
\end{aligned}
$$

The first line appears to have an equals sign where the loop sum would use a minus sign after $\electric{V}_0$. The two junction equations also use $\electric{I}_4$ as an outgoing current at both ends of the same branch.

##### Hollow sphere

The exercise gives inner and outer radii of $\quantity{6}{cm}$ and $\quantity{10}{cm}$. It prescribes surface charge densities of $-100\,\unit{nC\,m^{-2}}$ on the inner sphere and $+100\,\unit{nC\,m^{-2}}$ on the outer sphere. Point A lies inside the cavity, B between the two surfaces, and C outside. The page labels the surface density with $\electric{\rho}$ here, although it gives units per area.

The inner surface charge is

$$
\electric{Q}_{\mathrm{inner}}
=(-100\,\unit{nC\,m^{-2}})\,4\pi(0.06\,\unit{m})^2
=-4.52\,\unit{nC}.
$$

The first attempt uses that whole charge at point A, at $\mechanical{r}=\quantity{4}{cm}$, and obtains the magnitude

$$
\frac{4.52\,\unit{nC}}{\electric{\varepsilon}_0\,4\pi(0.04\,\unit{m})^2}
=2.54\times10^4\,\unit{N\,C^{-1}}.
$$

The inner surface lies outside the Gaussian surface for A. This calculation does not give the field in the cavity.

## Source

Kyle Kabasares, *Electricity and Magnetism (Physics 9H, UC Merced 2014)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\vec F}$ | $\unit{N}$ | Force | The force on a charge. |
| $\energy{U}$ | $\unit{J}$ | Electric potential energy | The interaction energy of the two charges. |
| $\electric{\vec E}$ | $\unit{V\,m^{-1}}$ | Electric field | The electric force per unit test charge. |
| $\electric{V}$ | $\unit{V}$ | Electric potential | The potential energy per unit test charge. |
| $\electric{q}$, $\electric{q}_1$, $\electric{q}_2$ | $\unit{C}$ | Electric charge | The test or source charge in the electrostatic relations. |
| $\mechanical{r}$ | $\unit{m}$ | Radial distance | The distance from a source, axis, or center. |
| $\mechanical{x}$, $\mechanical{y}$, $\mechanical{z}$ | $\unit{m}$ | Position coordinates | The coordinates in the spatial derivatives. |
| $\electric{k}$ | $\unit{N\,m^2\,C^{-2}}$ | Coulomb constant | The coefficient in the inverse-square force law. |
| $\electric{\varepsilon}_0$ | $\unit{F\,m^{-1}}$ | Vacuum permittivity | The constant that sets the strength of the electric interaction in vacuum. |
| $\mechanical{d}$ | $\unit{m}$ | Separation or diameter | The separation of charges, plates, or slits, or the wire diameter. |
| $\mechanical{m}_p$ | $\unit{kg}$ | Proton mass | The mass in the gravitational force and acceleration estimates. |
| $\mechanical{a}_{pe}$, $\mechanical{a}_{pg}$ | $\unit{m\,s^{-2}}$ | Proton accelerations | The accelerations due to the electric and gravitational forces. |
| $\mechanical{\vec F}_{C,\mathrm{net}}$ | $\unit{N}$ | Net force on charge C | The sum of the forces due to charges A and B. |
| $\mechanical{m}$ | $\unit{kg}$ | Object mass | The mass supported by the electric force or suspended by the string. |
| $\mechanical{g}$ | $\unit{m\,s^{-2}}$ | Gravitational acceleration | The acceleration used for weight and gravitational potential energy. |
| $\electric{e}$ | $\unit{C}$ | Elementary charge | The magnitude of the charge of an electron or proton. |
| $\mechanical{T}$ | $\unit{N}$ | String tension | The force exerted by the string on each suspended object. |
| $\electric{Q}$ | $\unit{C}$ | Total charge | The charge distributed along the semicircular arc. |
| $\electric{\lambda}$ | $\unit{C\,m^{-1}}$ | Linear charge density | The electric charge per unit length of the arc. |
| $\theta$, $\mechanical{\theta}$ | $\unit{rad}$ | Angle | A geometric angle used in projections, polarization, and ray diagrams. |
| $\mechanical{a}$ | $\unit{m\,s^{-2}}$ | Acceleration | The force per unit mass of the ion or test object. |
| $\electric{\vec p}$ | $\unit{C\,m}$ | Electric dipole moment | The product of the positive charge magnitude and the displacement from the negative to the positive charge. |
| $\mechanical{s}$ | $\unit{m}$ | Dipole separation | The distance between the two charges of the dipole. |
| $\mechanical{L}$ | $\unit{m}$ | Length | The length of a charge distribution or pendulum, or the distance to the screen. |
| $\mechanical{A}$ | $\unit{m^2}$ | Area | The area over which the surface charge is distributed. |
| $\mechanical{V}$ | $\unit{m^3}$ | Volume | The volume over which the charge is distributed. |
| $\electric{\eta}$, $\electric{\sigma}$ | $\unit{C\,m^{-2}}$ | Surface charge density | The charge per unit area. |
| $\electric{\rho}$ | $\unit{C\,m^{-3}}$ | Volume charge density | The charge per unit volume. |
| $\electric{\Phi}$, $\electric{\Phi}_{E,\mathrm{net}}$ | $\unit{N\,m^2\,C^{-1}}$ | Electric flux | The surface integral of the normal electric field. |
| $\mechanical{\vec A}$ | $\unit{m^2}$ | Area vector | A vector normal to the surface with magnitude equal to the area. |
| $\electric{Q}_{\mathrm{inside}}$ | $\unit{C}$ | Enclosed charge | The net charge within the closed surface. |
| $\mechanical{H}$ | $\unit{m}$ | Cylinder height | The axial length in the formula for the curved surface area. |
| $\mechanical{R}$ | $\unit{m}$ | Radius | The radius of a sphere, disk, wire, or coil, or the radius of curvature of a mirror. |
| $\energy{W}$ | $\unit{J}$ | Work | The integral of force along the displacement. |
| $\mechanical{\vec r}$ | $\unit{m}$ | Position vector | Its differential gives the displacement along the work path. |
| $\electric{I}$, $\electric{I}_2$–$\electric{I}_6$ | $\unit{A}$ | Circuit currents | The current in the feed and each bridge branch. |
| $\circuit{R}_1$–$\circuit{R}_6$ | $\unit{\Omega}$ | Resistances | The resistances of the six elements in the bridge. |
| $\electric{V}_0$ | $\unit{V}$ | Source potential difference | The voltage across the source in the bridge sketch. |
| $\electric{\varepsilon}$ | $\unit{F\,m^{-1}}$ | Permittivity | The electric response parameter of a dielectric or transparent medium. |
| $N$ | 1 | Turn count | The number of loops contributing to the coil field. |
| $\electric{q}_C$ | $\unit{C}$ | Capacitor charge | The instantaneous charge on the selected plate. |
| $\Delta\mechanical{r}$ | $\unit{m}$ | Path length difference | Difference in distance traveled by the two interfering waves. |
| $\mechanical{s}$, $\mechanical{o}$, $\mechanical{s}_o$ | $\unit{m}$ | Object distance | Signed distance from the lens to the object. |
| $\mechanical{N}$ | $\unit{N}$ | Normal force | The force exerted by the incline perpendicular to its surface. |
| $\electric{e}/\mechanical{m}$ | $\unit{C\,kg^{-1}}$ | Electron charge-to-mass ratio | The magnitude of the electron charge divided by its mass. |
| $N\magnetic{\Phi}_B$ | $\unit{Wb}$ | Magnetic flux linkage | The sum of the fluxes linked by the turns of the solenoid. |
| $\electric{V}_{\mathrm{in}}$, $\electric{V}_{\mathrm{out}}$ | $\unit{V}$ | Input and output voltages | The applied voltage and the voltage across the filter output. |
| $\mechanical{D}_i$ | $\unit{m}$ | Wave displacement | Displacement of wave $i$ in the superposition example. |
| $\mechanical{D}_{0i}$ | $\unit{m}$ | Displacement amplitude | Peak displacement of wave $i$. |
