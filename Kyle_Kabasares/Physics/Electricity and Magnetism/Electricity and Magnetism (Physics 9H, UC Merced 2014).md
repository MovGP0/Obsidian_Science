---
title: "Electricity and Magnetism (Physics 9H, UC Merced 2014)"
---

> [!TLDR]
> These Physics 9 Honors notes follow electric force and potential into circuits, magnetism, electromagnetism, and optics.

Source notes by Kyle Kabasares. [[Electricity and Magnetism (Physics 9H, UC Merced 2014).pdf|Original PDF]].

Transcribed PDF pages 1–61 of 61.

### PDF page 1

#### 22 January 2014

The schedule entry reads Tuesday, 2:30–4:30 p.m.

**Order of material**

1. Electrostatics
2. Direct-current electricity
3. Magnetism
4. Electromagnetism
5. Alternating-current electricity
6. Maxwell's equations
7. Wave optics and geometric optics

**Electrostatics**

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

#### 24 January 2014

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

### PDF page 2

#### Electric and gravitational forces between protons

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

**Force on charge 2 due to charge 1**

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

**Example with three charges**

Charges $\electric{q}_A=\electric{q}_B=\quantity{2.0}{nC}$ are at the bottom vertices of an equilateral triangle. Charge $\electric{q}_C=\quantity{1.0}{nC}$ is at the top. Each side is $\quantity{1}{cm}$. The forces $\mechanical{\vec F}_{AC}$ and $\mechanical{\vec F}_{BC}$ on $C$ point up and away from the other charges. Their horizontal components cancel. The vertical components are equal, with $\mechanical{F}_{AC,y}=\mechanical{F}_{AC}\sin 60^\circ$.

$$
\mechanical{\vec F}_{C,\mathrm{net}}
=2\left|\frac{\electric{k}\electric{q}_A\electric{q}_C}{\mechanical{r}_{AC}^2}\right|
  \sin 60^\circ\,\hat{\jmath}
=3.11\times10^{-4}\,\unit{N}\,\hat{\jmath}.
$$

The result uses $\electric{k}=8.99\times10^9\,\unit{N\,m^2\,C^{-2}}$. The numerical substitution appears to have a stray minus sign in the exponent on $\electric{k}$.

### PDF page 3

The net vertical electric force from the triangle example is $3.11\times10^{-4}\,\unit{N}$ upward. The note “$\mechanical{F}_g=$ ? $=$ the same” leads to the question of how much mass the force can support.

$$
3.11\times10^{-4}\,\unit{N}-\mechanical{m}\mechanical{g}=0,
\qquad
\mechanical{m}
=\frac{3.11\times10^{-4}\,\unit{N}}{9.8\,\unit{m\,s^{-2}}}
=3.17\times10^{-5}\,\unit{kg}.
$$

The notes compare $\quantity{1.0}{nC}=10^{-9}\,\unit{C}$ with the electron charge $-\electric{e}=-1.60\times10^{-19}\,\unit{C}$. They mark the difference as ten orders of magnitude.

#### Discussion on 27 January 2014

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

### PDF page 4

The suspended-charge example continues with

$$
\electric{q}=\sqrt{\frac{\mechanical{T}\cos80^\circ\,\mechanical{r}^2}{\electric{k}}},
\qquad
2\electric{q}=2\sqrt{\frac{\mechanical{T}\cos80^\circ\,\mechanical{r}^2}{\electric{k}}}.
$$

The faint numerical entry reads about $5.00\times10^{-7}\,\unit{C}$. The preceding data give this value for each charge, so the pair has about $1.00\times10^{-6}\,\unit{C}$.

#### Problem 2

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

### PDF page 5

#### 29 January 2014

The example places charge $\electric{Q}_1=-2\electric{e}$ at the origin and $\electric{Q}_2=+2\electric{e}$ to its right. The unit vector $\hat r_{21}$ points from charge 2 to charge 1, so $\hat r_{21}=-\hat{\imath}$.

$$
\mechanical{\vec F}_{21}
=\frac{\electric{k}(-2\electric{e})(+2\electric{e})}
       {\mechanical{r}_{21}^2}(-\hat{\imath}).
$$

The negative signs cancel. The force on charge 1 points toward charge 2. The sketch labels the separation $\quantity{4}{cm}$, although the written substitution uses $(0.4\,\unit{m})^2$.

If the direction is clear from the charge signs, calculate the magnitude from $\mechanical{F}=|\electric{k}\electric{q}_1\electric{q}_2/\mechanical{r}^2|$ and state the direction separately.

**Order of magnitude of a distant electric field**

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

### PDF page 6

The field-line sketch shows a positive charge above a negative charge. The arrows leave the upper charge and curve downward toward the lower part of the drawing.

#### 30 January 2014

Excess charge on a conductor is on the surface. A positive charge has $\mechanical{\vec F}=+\electric{q}\electric{\vec E}$, along the field. A negative charge has $\mechanical{\vec F}=-\electric{q}\electric{\vec E}$, opposite the field.

The projectile-motion sketch shows $\mathrm{Na}^+$ and $\mathrm{K}^+$ curving downward in a uniform downward electric field. Both ions have the same charge. Potassium has more mass and therefore less acceleration in the field.

$$
\mechanical{F}=\mechanical{m}\mechanical{a},
\qquad
\mechanical{a}=\frac{\mechanical{F}}{\mechanical{m}}.
$$

The notes compare $\mechanical{m}\mechanical{g}=\mechanical{m}\mechanical{a}$ for gravity with $\electric{q}\electric{E}=\mechanical{m}\mechanical{a}$ for an electric field.

**Calculating the electric field**

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

### PDF page 7

The electric field is tangent to its field lines. Fig. 1 shows a $+3.0\,\unit{nC}$ charge above a $-3.0\,\unit{nC}$ charge, each $\quantity{5}{cm}$ from the midpoint. The arrow at the marked point is tangent to the curved line. Fig. 2 shows two positive charges with a rightward net field at a point on the perpendicular bisector.

![[Kyle Kabasares - Electricity and Magnetism - opposite charges and field tangent.png|**Fig. 1** Field lines of opposite charges and the tangent field direction at a marked point]]

![[Kyle Kabasares - Electricity and Magnetism - field of two positive charges.png|**Fig. 2** Field direction on the perpendicular bisector of two positive charges]]

#### 3 February 2014

A dipole consists of equal and opposite charges separated by a distance $\mechanical{s}$. The dipole moment $\electric{\vec p}$ points from the negative charge to the positive charge and has magnitude $\electric{p}=\electric{q}\mechanical{s}$.

**Electric field of a dipole**

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

### PDF page 8

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

#### Dipole in an electric field

The notes state that an electric field exerts a torque on a dipole. The sketch shows the aligned orientation, with the negative charge on the left, the positive charge on the right, and both $\electric{\vec p}$ and $\electric{\vec E}$ pointing right.

#### Electric fields of charge distributions

Divide the distribution into elements and add their field contributions.

$$
\electric{\vec E}_{\mathrm{net}}
=\sum_i\frac{\electric{k}\Delta\electric{q}_i}{\mechanical{r}_i^2}\hat r_i
\quad\longrightarrow\quad
\int\frac{\electric{k}\,\mathrm{d}\electric{q}}{\mechanical{r}^2}\hat r.
$$

**Charge density**

| Distribution | Density | Element |
| --- | --- | --- |
| Line | $\electric{\lambda}=\electric{Q}/\mechanical{L}=\mathrm{d}\electric{Q}/\mathrm{d}\mechanical{L}$ | $\mathrm{d}\electric{q}=(\electric{Q}/\mechanical{L})\,\mathrm{d}\mechanical{L}$ |
| Surface | $\electric{\eta}=\electric{Q}/\mechanical{A}=\mathrm{d}\electric{Q}/\mathrm{d}\mechanical{A}$ | $\mathrm{d}\mechanical{A}=\mathrm{d}\mechanical{x}\,\mathrm{d}\mechanical{y}$ in Cartesian coordinates |
| Volume | $\electric{\rho}=\electric{Q}/\mechanical{V}=\mathrm{d}\electric{q}/\mathrm{d}\mechanical{V}$ | $\mathrm{d}\mechanical{V}=\mathrm{d}\mechanical{x}\,\mathrm{d}\mechanical{y}\,\mathrm{d}\mechanical{z}$ |

The ratios using total charge apply to uniform distributions. The volume sketch labels the three sides of a small rectangular element.

### PDF page 9

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

#### Lecture on 7 February 2014

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

### PDF page 10

#### Lecture on 10 February 2014

**A plane of charge**

The perspective and edge views show arrows normal to a positively charged plane and pointing away on both sides.

$$
(\electric{E}_{\mathrm{plane}})_z=
\begin{cases}
+\electric{\eta}/(2\electric{\varepsilon}_0),&\mechanical{z}>0,\\
-\electric{\eta}/(2\electric{\varepsilon}_0),&\mechanical{z}<0.
\end{cases}
$$

The parallel-plate capacitor sketch shows field arrows from the positive plate to the negative plate.

**Gauss's law**

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

### PDF page 11

Gauss's law uses a closed imaginary surface called a Gaussian surface. Choose a surface on which the normal field component is constant, if the symmetry permits.

$$
\frac{\electric{Q}_{\mathrm{enc}}}{\electric{\varepsilon}_0}
=\oint\electric{\vec E}\cdot\mathrm{d}\mechanical{\vec A}
=\oint\electric{E}_\perp\,\mathrm{d}\mechanical{A}
=\electric{E}_\perp\oint\mathrm{d}\mechanical{A}
$$

The last equality assumes the same normal component on the part under consideration.

**Infinite line of charge**

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

**Uniformly charged sphere**

The sphere has radius $\mechanical{R}$ and total charge $\electric{Q}$. The sketch shows a concentric Gaussian surface of radius $\mechanical{r}<\mechanical{R}$. For a uniform volume charge density, the enclosed charge is the fraction of total charge given by the ratio of volumes.

$$
\electric{Q}_{\mathrm{enc}}
=\electric{Q}\frac{(4/3)\pi\mechanical{r}^3}{(4/3)\pi\mechanical{R}^3}
=\electric{Q}\frac{\mechanical{r}^3}{\mechanical{R}^3},
\qquad
\frac{\electric{Q}_{\mathrm{enc}}}{\electric{\varepsilon}_0}
=\oint\electric{E}_\perp\,\mathrm{d}\mechanical{A}.
$$

### PDF page 12

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

#### Lecture on 12 February 2014

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

### PDF page 13

The opening diagram connects three charges by the distances $\mechanical{r}_1$, $\mechanical{r}_2$, and $\mechanical{r}_{12}$. The total force and field are vector sums. The total potential energy is a sum over distinct pairs.

$$
\mechanical{\vec F}_{\mathrm{net}}=\sum_i\mechanical{\vec F}_i,\qquad
\electric{\vec E}_{\mathrm{net}}=\sum_i\electric{\vec E}_i,\qquad
\energy{U}_{\mathrm{net}}=\sum_{i<j}\energy{U}_{ij}.
$$

#### Discussion on 12 February 2014

**Kirchhoff's laws**

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

**Hollow sphere**

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

### PDF page 14

The top margin contains decorative STEM lettering.

#### Lecture dated 14 February 2013 in the notes

The year is written as 2013, between surrounding lectures dated 2014. The first question asks how to show that something oscillates. The mathematical test is

$$
\frac{\mathrm{d}^2 f}{\mathrm{d}x^2}=-C f
$$

for a positive constant $C$ related to the frequency. The margin suggests that the variable could be $\theta$ or another coordinate. The conceptual test starts with a stable equilibrium and a small displacement from it. The handwritten line ends after “will result in.”

**Electric potential**

With the reference at infinity,

$$
\Delta\energy{U}=\frac{\electric{k}\electric{q}_1\electric{q}_2}{\mechanical{r}},
\qquad
\electric{V}=\frac{\electric{k}\electric{q}}{\mechanical{r}}.
$$

Electric potential is $\electric{V}=\energy{U}_{\mathrm{source}}/\electric{q}$, measured in volts. A charge moving through a potential difference changes its potential energy by $\Delta\energy{U}=\electric{q}\,\Delta\electric{V}$. To integrate over a distribution, express $\mathrm{d}\electric{q}$ in terms of a line, area, or volume element.

The bottom sketch shows the electric field pointing from high potential to low potential, with a positive charge in the field. The first line says that a positive charge moves toward lower potential. The second line repeats that direction for a negative charge.

> [!note]
> The electric force on a negative charge is opposite the field, so the force points toward higher potential.

### PDF page 15

#### Potential on the axis of a charged disk

The sketch shows a disk of radius $\mechanical{R}$ with total charge $\electric{Q}$. Point P is at axial coordinate $\mechanical{z}$. A ring of radius $\mechanical{r}$ and thickness $\mathrm{d}\mechanical{r}$ has area $2\pi\mechanical{r}\,\mathrm{d}\mechanical{r}$. Its distance to P is $\sqrt{\mechanical{r}^2+\mechanical{z}^2}$.

$$
\electric{\eta}=\frac{\electric{Q}}{\pi\mechanical{R}^2}
=\frac{\mathrm{d}\electric{q}}{2\pi\mechanical{r}\,\mathrm{d}\mechanical{r}},
\qquad
\mathrm{d}\electric{q}=\frac{2\electric{Q}}{\mechanical{R}^2}
 \mechanical{r}\,\mathrm{d}\mechanical{r}.
$$

$$
\electric{V}=\int\mathrm{d}\electric{V}
=\frac{2\electric{k}\electric{Q}}{\mechanical{R}^2}
 \int_0^{\mechanical{R}}
 \frac{\mechanical{r}\,\mathrm{d}\mechanical{r}}
      {\sqrt{\mechanical{r}^2+\mechanical{z}^2}}.
$$

Use substitution to obtain

$$
\boxed{\electric{V}=\frac{2\electric{k}\electric{Q}}{\mechanical{R}^2}
\left(\sqrt{\mechanical{R}^2+\mechanical{z}^2}-|\mechanical{z}|\right)}.
$$

#### Lecture on 19 February 2014

The electric field points from a positive charge toward a negative one. The point-charge example starts with $\electric{E}=\electric{k}\electric{q}/\mechanical{r}^2$. Its radial antiderivative is $-\electric{k}\electric{q}/\mechanical{r}$. The faint substitution appears to show bounds $-1$ and $1$. The point-charge expression is singular at zero, so these bounds cannot be used across the origin in that integral.

The notes give $\Delta\electric{V}_{ab}=0$ and conclude that $\Delta\electric{V}_{bc}=\Delta\electric{V}_{ac}$ because $\electric{V}_a=\electric{V}_b$. When the final potential is lower than the initial potential, the change is negative.

### PDF page 16

#### Field and potential

The electric field is perpendicular to equipotentials and points in the direction of steepest decrease of potential. The sketch uses hills and valleys with a downhill arrow labeled “tuck & roll.” The handwriting appears to label both positive and negative charges “hills.” In the point-charge potential of page 14, positive charges give hills and negative charges give wells.

In one dimension, $\electric{E}_x=-\mathrm{d}\electric{V}/\mathrm{d}\mechanical{x}$. The page labels the minus sign “downhill” and the derivative “steepest.” In three dimensions,

$$
\begin{aligned}
\electric{\vec E}&=\electric{E}_x\hat{\imath}
 +\electric{E}_y\hat{\jmath}+\electric{E}_z\hat{k},\\
\electric{E}_x&=-\frac{\partial\electric{V}(\mechanical{x},\mechanical{y},\mechanical{z})}{\partial\mechanical{x}},\\
\electric{E}_y&=-\frac{\partial\electric{V}(\mechanical{x},\mechanical{y},\mechanical{z})}{\partial\mechanical{y}},\\
\nabla&=\hat{\imath}\frac{\partial}{\partial\mechanical{x}}
       +\hat{\jmath}\frac{\partial}{\partial\mechanical{y}}
       +\hat{k}\frac{\partial}{\partial\mechanical{z}},\\
\electric{\vec E}&=-\nabla\electric{V}.
\end{aligned}
$$

Hold the other two coordinates constant in each partial derivative. The margin reads “It's so beautiful.”

The worked line-integral example writes $\electric{\vec E}=(500\mechanical{x}\mechanical{y}^2\hat{\imath}+30\hat{\jmath})\,\unit{V\,m^{-1}}$ and gives the example displacement $\mathrm{d}\mechanical{\vec s}=5\,\mathrm{d}\mechanical{x}\,\hat{\imath}+3\,\mathrm{d}\mechanical{y}\,\hat{\jmath}+\mathrm{d}\mechanical{z}\,\hat{k}$. The dot product gives the two terms $2500\mechanical{x}\mechanical{y}^2\,\mathrm{d}\mechanical{x}$ and $90\,\mathrm{d}\mechanical{y}$. The final line treats $\mechanical{y}$ as fixed during the $x$ integral and uses

$$
\Delta\electric{V}
=-2500\mechanical{y}^2\int_{x_i}^{x_f}\mechanical{x}\,\mathrm{d}\mechanical{x}
-90\int_{y_i}^{y_f}\mathrm{d}\mechanical{y}.
$$

The intermediate handwriting gives a positive line integral for $\Delta\electric{V}$. The last line uses the minus sign consistent with $\electric{\vec E}=-\nabla\electric{V}$. The notes say to determine the additive constant from the initial conditions. It cancels in $\Delta\electric{V}=\electric{V}(x_f)-\electric{V}(x_i)$.

### PDF page 17

#### Lecture on 21 February 2014

**Charge separation and a parallel-plate capacitor**

The opening sketches show separate charges and then two plates connected to a source. The left plate is at zero potential and the right is at $+\electric{V}$. The electric field points left, from the positive plate to the negative plate. A plate and its connected source terminal are at the same potential.

For a displacement along the uniform field between the plates,

$$
\Delta\electric{V}
=-\int\electric{E}_x\,\mathrm{d}\mechanical{x}
=-\electric{E}_x\Delta\mechanical{x}
=-\frac{\electric{Q}}{\mechanical{A}\electric{\varepsilon}_0}\mechanical{d},
$$

where $\mechanical{d}$ is the plate separation. The notes call capacitance a positive quantity.

$$
\circuit{C}=\frac{\electric{Q}}{|\Delta\electric{V}|},
\qquad
\circuit{C}=\frac{\electric{\varepsilon}_0\mechanical{A}}{\mechanical{d}}
\quad\text{for parallel plates}.
$$

Capacitance depends on the size, shape, and geometric arrangement. The notes also distinguish series and parallel connections.

The potential difference at an intermediate charge $\electric{q}$ during charging is $\electric{q}/\circuit{C}$. The change in stored energy is

$$
\Delta\energy{U}
=\int_0^{\electric{Q}}\frac{\electric{q}}{\circuit{C}}\,\mathrm{d}\electric{q}
=\frac{\electric{Q}^2}{2\circuit{C}}
=\frac12\circuit{C}\electric{V}^2
=\frac12\electric{Q}\electric{V}.
$$

For the parallel-plate capacitor, use the voltage magnitude $\electric{V}=\electric{E}\mechanical{d}$.

$$
\Delta\energy{U}
=\frac12\frac{\electric{\varepsilon}_0\mechanical{A}}{\mechanical{d}}
     (\electric{E}\mechanical{d})^2
=\frac{\electric{\varepsilon}_0\electric{E}^2}{2}
     (\mechanical{A}\mechanical{d}).
$$

The last factor is the volume between the plates.

### PDF page 18

#### Lecture on 24 February 2014

**Dielectrics**

A dielectric is a nonconducting material with dielectric constant $\electric{K}$ and permittivity $\electric{\varepsilon}=\electric{K}\electric{\varepsilon}_0$. The notes give $\electric{E}>3\times10^5\,\unit{V\,m^{-1}}$ as the air breakdown threshold. They describe ionization and conduction during breakdown, and say that dielectric materials can withstand a stronger field before they break down.

**Molecular view**

1. Connect an empty capacitor to a battery for a long time.
2. Disconnect the battery.
3. Insert a dielectric between the plates.
4. Determine whether the field changes.

The free plate charge stays constant after disconnection. The field in the capacitor becomes smaller. The sketch shows leftward field arrows from the positive plate on the right to the negative plate on the left. The molecule diagram shows dipole moments aligned left, with positive bound charge on the left dielectric face and negative bound charge on the right.

The field without the dielectric is written $\electric{E}_0=\electric{\eta}/\electric{\varepsilon}_0$. The separate entry for the induced field is written $\electric{E}_{\mathrm{induced}}=\electric{\eta}_{\mathrm{induced}}/\electric{\varepsilon}$. The arrows point $\electric{\vec E}_0$ left and $\electric{\vec E}_{\mathrm{induced}}$ right.

$$
\electric{\vec E}_{\mathrm{net}}
=\electric{\vec E}_0+\electric{\vec E}_{\mathrm{induced}}.
$$

The notes use the capacitor energy in the form

$$
\energy{U}=\tfrac12\circuit{C}\electric{V}^2
=\tfrac12\circuit{C}(\electric{E}\mechanical{d})^2.
$$

The comparison is $\energy{U}_0=\tfrac12\circuit{C}\electric{E}_0^2\mechanical{d}^2$ before insertion and $\energy{U}_{\mathrm{now}}=\tfrac12\circuit{C}\electric{E}_{\mathrm{net}}^2\mechanical{d}^2$ afterward. The source uses the same capacitance symbol in both lines. Each energy uses the capacitance of its respective configuration.

### PDF page 19

#### Capacitors in series and parallel

The series sketch places $\circuit{C}_1$ and $\circuit{C}_2$ in one loop with the battery. The notes identify equal charge magnitudes, $\electric{Q}_1=\electric{Q}_2=\electric{Q}$. The voltage differences add.

$$
\Delta\electric{V}_{\mathrm{bat}}
=\Delta\electric{V}_1+\Delta\electric{V}_2
=\frac{\electric{Q}_1}{\circuit{C}_1}+\frac{\electric{Q}_2}{\circuit{C}_2}
=\electric{Q}\left(\frac1{\circuit{C}_1}+\frac1{\circuit{C}_2}\right).
$$

$$
\frac1{\circuit{C}_{\mathrm{eq}}}
=\frac1{\circuit{C}_1}+\frac1{\circuit{C}_2}.
$$

One intermediate line equates the battery voltage to $1/\circuit{C}_{\mathrm{eq}}$. The underbrace identifies that reciprocal with the parenthesized factor alone.

For a parallel connection,

$$
\electric{Q}_{\mathrm{tot}}=\electric{Q}_1+\electric{Q}_2+\cdots,
\qquad
\circuit{C}_{\mathrm{eq}}=\circuit{C}_1+\circuit{C}_2+\cdots.
$$

The parallel entry also copies the series voltage sum. Each parallel capacitor is connected across the same two nodes and has the battery's voltage.

#### Lecture on 26 February 2014

**Current and conductivity. Example problem**

The sketch shows two capacitors in parallel across a battery. The notes give an air-gap capacitor and a dielectric constant $\electric{K}_E=\electric{\varepsilon}/\electric{\varepsilon}_0=2.50$. The calculation uses $\electric{V}=\quantity{12}{V}$ and $\circuit{C}=\quantity{2}{\mu F}$ for one capacitor.

$$
\electric{Q}=\electric{V}\circuit{C}
=(12\,\unit{V})(2\,\unit{\mu F})=\quantity{24}{\mu C}.
$$

For two such capacitors,

$$
\energy{U}=2\left(\tfrac12\circuit{C}\electric{V}^2\right)
=\circuit{C}\electric{V}^2=\quantity{288}{\mu J}.
$$

The example is marked “To be cont.”

**Electrostatic equilibrium and current**

The equilibrium sketch shows excess charge on the conductor's surface and a dashed Gaussian surface inside it. The conductor model shows fixed ionic cores and valence electrons that can move.

The wire sketch marks high potential on the left and low potential on the right. The field and conventional current point right. Electrons drift left. The notes distinguish the microscopic picture from the macroscopic description of current.

### PDF page 20

#### Drift speed and current

The notes give an electron drift speed of order $10^{-2}\,\unit{mm\,s^{-1}}=10^{-5}\,\unit{m\,s^{-1}}$ through a wire. Conventional current is measured in amperes, with $1\,\unit{A}=1\,\unit{C\,s^{-1}}$.

The notes use $\electric{i}_e$ for the number of electrons crossing a section per second. If $N_e$ electrons occupy volume $\mechanical{V}$, the electron number density is $n_e=N_e/\mechanical{V}$.

$$
\electric{i}_e
=\frac{n_e\mechanical{V}}{\Delta t}
=\frac{n_e\mechanical{A}\Delta\mechanical{x}}{\Delta t}
=n_e\mechanical{A}\mechanical{v}_d.
$$

Electrons drift opposite the direction of conventional current. Conventional current follows positive charge flow, so $\electric{I}=\electric{Q}/\Delta t$ and $\electric{Q}=\electric{I}\Delta t$ for steady current.

**Current density**

$$
\electric{J}=n_e\electric{e}\mechanical{v}_d
=\electric{\sigma}\electric{E}
=\frac{\electric{I}}{\mechanical{A}}.
$$

These are scalar magnitudes in the notes. The three forms use the drift speed, the field and conductivity, or the current and cross-sectional area.

### PDF page 21

#### Lecture on 10 March 2014

Current $\electric{I}$ is measured in amperes, or coulombs per second. The electron flow rate is labeled $\electric{i}_e$.

**Macroscopic circuits**

The component list includes wires, resistors, capacitors, batteries, and inductors. The sketch groups the first four under DC and includes inductors in the AC grouping.

**Ohm's law and power**

A potential difference across a resistive element drives a current. For an ohmic material,

$$
\Delta\electric{V}=\electric{I}\circuit{R},
\qquad
\energy{P}=\electric{I}\electric{V}
=\electric{I}^2\circuit{R}
=\frac{\electric{V}^2}{\circuit{R}}.
$$

**Adding resistors**

$$
\circuit{R}_{\mathrm{eq}}=\circuit{R}_1+\circuit{R}_2+\circuit{R}_3+\cdots
\qquad\text{in series}.
$$

The source gives the reciprocal sum $1/\circuit{R}_1+1/\circuit{R}_2+1/\circuit{R}_3+\cdots$ for parallel resistors. The handwritten equality puts $\circuit{R}_{\mathrm{eq}}$ on the left. The sum is $1/\circuit{R}_{\mathrm{eq}}$.

**Kirchhoff's rules**

The “Doc Physics” sketch shows one loop with two batteries and two resistors. The batteries are drawn with their positive terminals at the top.

- Junction rule. $\sum\electric{I}=0$, with entering current positive and leaving current negative. This is conservation of charge.
- Loop rule. $\sum\Delta\electric{V}=0$. This is conservation of energy, with $\electric{q}\Delta\electric{V}=\Delta\energy{U}$.

The loop sketch shows a $\quantity{12}{V}$ source, one resistor on the upper wire, and two return branches with a resistor in each. The top left node is marked $\quantity{12}{V}$ and the bottom node $\quantity{0}{V}$. The notes label the drop across a resistor $\electric{I}\circuit{R}$.

### PDF page 22

#### Kirchhoff's rules. Worked example

The circuit has two junctions, A and B, sources of $\quantity{12}{V}$ and $\quantity{15}{V}$, and three $\quantity{22}{\Omega}$ resistors. The indicated current $\electric{I}_1$ enters A from the left. Currents $\electric{I}_2$ and $\electric{I}_3$ leave A through the right branch and middle branch.

![[Kyle Kabasares - Electricity and Magnetism - Kirchhoff two-battery example.png|**Fig. 4** Two-battery Kirchhoff example with three branch currents and loop directions]]

$$
\electric{I}_1-\electric{I}_2-\electric{I}_3=0. \tag{1}
$$

The equation at B is the negative of equation (1). For the two interior loops,

$$
12\,\unit{V}-\electric{I}_3\circuit{R}-\electric{I}_1\circuit{R}=0, \tag{2}
$$

$$
\electric{I}_3\circuit{R}-15\,\unit{V}-\electric{I}_2\circuit{R}=0. \tag{3}
$$

The outer loop gives $12\,\unit{V}-15\,\unit{V}-\electric{I}_2\circuit{R}-\electric{I}_1\circuit{R}=0$. It is the sum of the two interior loop equations.

$$
\electric{I}_3=\electric{I}_1-\electric{I}_2,\qquad
\electric{I}_1=\frac{12\,\unit{V}-\electric{I}_3\circuit{R}}{\circuit{R}},\qquad
\electric{I}_2=\frac{\electric{I}_3\circuit{R}-15\,\unit{V}}{\circuit{R}}.
$$

$$
\electric{I}_3=\frac{27\,\unit{V}-2\electric{I}_3\circuit{R}}{\circuit{R}},
\qquad
3\electric{I}_3=\frac{27\,\unit{V}}{\circuit{R}},
\qquad
\electric{I}_3=\frac{9\,\unit{V}}{\circuit{R}}.
$$

The handwritten boxes give $\electric{I}_3=\quantity{0.40}{A}$, $\electric{I}_1=\quantity{0.145}{A}$, and $\electric{I}_2=-0.28\,\unit{A}$. Keeping the exact ratios until the end gives about $\quantity{0.409}{A}$, $\quantity{0.136}{A}$, and $-0.273\,\unit{A}$, respectively.

### PDF page 23

#### Lecture on 14 March 2014

**Discharging a capacitor**

Initially $\electric{Q}_0=\electric{Q}_{\max}$ and $\Delta\electric{V}_0=\Delta\electric{V}_{\max}$. Closing the switch connects the charged capacitor across the resistor. The sketch labels the upper capacitor plate positive and the lower plate negative.

$$
\Delta\electric{V}_C+\Delta\electric{V}_R=0,
\qquad
\frac{\electric{Q}}{\circuit{C}}=-\electric{I}\circuit{R}
=-\circuit{R}\frac{\mathrm{d}\electric{Q}}{\mathrm{d}t}.
$$

$$
-\int_0^t\frac{\mathrm{d}t'}{\circuit{C}\circuit{R}}
=\int_{\electric{Q}_{\max}}^{\electric{Q}(t)}\frac{\mathrm{d}\electric{Q}'}{\electric{Q}'},
\qquad
-\frac{t}{\circuit{C}\circuit{R}}
=\ln\left(\frac{\electric{Q}(t)}{\electric{Q}_{\max}}\right).
$$

With $\signal{\tau}=\circuit{R}\circuit{C}$,

$$
\electric{Q}(t)=\electric{Q}_{\max}\mathrm{e}^{-t/\signal{\tau}},
\qquad
\electric{I}(t)
=-\frac{\electric{Q}_{\max}}{\signal{\tau}}\mathrm{e}^{-t/\signal{\tau}}
=-\electric{I}_{\max}\mathrm{e}^{-t/\signal{\tau}}.
$$

The current is opposite to the charging direction.

**Charging a capacitor**

The lower circuit sketch puts an emf source, switch, resistor, and capacitor in series. The charging loop gives $\electric{\mathcal{E}}-\electric{I}\circuit{R}-\electric{V}_C=0$. Differentiate at constant emf and use $\electric{I}=\mathrm{d}\electric{Q}/\mathrm{d}t$.

$$
-\circuit{R}\frac{\mathrm{d}\electric{I}}{\mathrm{d}t}
=\frac{\electric{I}}{\circuit{C}},
\qquad
\int\frac{\mathrm{d}\electric{I}}{\electric{I}}=-\int\frac{\mathrm{d}t}{\signal{\tau}}.
$$

$$
\ln\left(\frac{\electric{I}}{\electric{I}_0}\right)=-\frac{t}{\signal{\tau}},
\qquad
\electric{I}(t)=\electric{I}_0\mathrm{e}^{-t/\signal{\tau}}.
$$

The margin uses $\electric{V}_C=\electric{\mathcal{E}}-\electric{I}_{\max}\circuit{R}\mathrm{e}^{-t/\signal{\tau}}$. For an initially empty capacitor, $\electric{I}_{\max}\circuit{R}=\electric{\mathcal{E}}$, so $\electric{Q}=\circuit{C}\electric{V}_C=\circuit{C}\electric{\mathcal{E}}(1-\mathrm{e}^{-t/\signal{\tau}})$. The first term in that handwritten charge relation looks like $\electric{Q}/\circuit{C}$, which is a voltage.

### PDF page 24

#### Magnetism, 17 March 2014

The notes introduce permanent and induced magnetism, then compare magnetic and electric fields. Magnetic poles attract or repel. The bar magnet has north and south poles and closed field-line loops. Electric charges attract or repel, and the electric sketches show lines leaving a positive point charge and entering a negative point charge. Electric sources can be individual charges or dipoles. In the classical model used here, magnetic sources have no isolated poles.

The electric fields add by superposition, $\electric{\vec E}=\electric{\vec E}_1+\electric{\vec E}_2+\electric{\vec E}_3+\cdots$. The notes compare the two Gauss laws.

$$
\electric{\Phi}_E=\oint\electric{\vec E}\cdot\mathrm{d}\mechanical{\vec A}
=\frac{\electric{Q}_{\mathrm{enc}}}{\electric{\varepsilon}_0},
\qquad
\magnetic{\Phi}_B=\oint\magnetic{\vec B}\cdot\mathrm{d}\mechanical{\vec A}=0.
$$

In the magnet sketch, every field line entering a closed surface also leaves it. The notes relate zero net magnetic flux to the absence of magnetic monopoles in classical electromagnetism. Magnetic fields also obey superposition.

$$
\magnetic{\vec B}=\magnetic{\vec B}_1+\magnetic{\vec B}_2+\magnetic{\vec B}_3+\cdots.
$$

The bottom sketch shows a circulating electron, an upward arrow labeled magnetic dipole moment, and closed magnetic field lines.

### PDF page 25

A moving charge creates a magnetic field. The field is a vector with magnitude $\magnetic{B}$ and a direction given by the right-hand rule in a cross product. The SI unit is the tesla, $1\,\unit{T}=1\,\unit{N\,A^{-1}\,m^{-1}}$. The CGS unit is the gauss, written G or Gs.

The magnetic dipole moment of a current loop is $\magnetic{\vec\mu}=\electric{I}\mechanical{\vec A}$. The sketch shows the moment normal to the loop, pointing from the south pole to the north pole.

**Drawing magnetic field directions**

Use arrows for right, left, up, and down. A circled cross $\otimes$ points into the board and a circled dot $\odot$ points out of the board. The arrow sketch compares these symbols with the tail and tip of an arrow.

#### Discussion on 17 March 2014

For a wire perpendicular to the field, the magnetic force balances the weight.

$$
\mechanical{\vec F}_m
=\electric{I}\mechanical{\vec\ell}\times\magnetic{\vec B},
\qquad
\mechanical{F}_m-\mechanical{F}_g=0,
\qquad
\electric{I}\mechanical{\ell}\magnetic{B}=\mechanical{m}\mechanical{g}.
$$

$$
\electric{I}
=\frac{\mechanical{m}\mechanical{g}}{\mechanical{\ell}\magnetic{B}}.
$$

The numerical line uses $\mechanical{m}=\quantity{0.010}{kg}$, $\mechanical{g}=\quantity{9.8}{m\,s^{-2}}$, and $\magnetic{B}=0.5\times10^{-4}\,\unit{T}$ and gives $\electric{I}=\quantity{1960}{A}$. The value implies $\mechanical{\ell}=\quantity{1}{m}$, which is not written in the substitution.

For a particle moving perpendicular to the field, the margin gives $\electric{q}\mechanical{v}\magnetic{B}=\mechanical{m}\mechanical{v}^2/\mechanical{r}$.

### PDF page 26

#### Problem 3(a). Velocity selector

The sketch shows a positive particle moving right, an electric field pointing up, and a magnetic field pointing out of the page. The magnetic and electric forces balance when

$$
\electric{q}\mechanical{v}\magnetic{B}=\electric{q}\electric{E},
\qquad
\boxed{\mechanical{v}=\frac{\electric{E}}{\magnetic{B}}}
\simeq1.64\times10^6\,\unit{m\,s^{-1}}.
$$

The handwritten speed has a small superscript $6$ after $1.64$. The following kinetic energies confirm the power-of-ten reading. Using $\energy{K}=\mechanical{m}\mechanical{v}^2/2$, the notes obtain $\quantity{14}{keV}$ for a proton and $\quantity{7.7}{eV}$ for an electron.

#### Problem 4(a). Circular motion after acceleration

$$
\electric{q}\mechanical{v}\magnetic{B}=\frac{\mechanical{m}\mechanical{v}^2}{\mechanical{r}},
\qquad
\electric{q}\Delta\electric{V}=\frac12\mechanical{m}\mechanical{v}^2.
$$

$$
\mechanical{v}=\sqrt{\frac{2\electric{q}\Delta\electric{V}}{\mechanical{m}}},
\qquad
\mechanical{r}=\sqrt{\frac{2\mechanical{m}\Delta\electric{V}}{\electric{q}\magnetic{B}^2}}
=\quantity{63.3}{cm}.
$$

The radius difference is $\Delta\mechanical{r}=\mechanical{r}_{26}-\mechanical{r}_{24}=\quantity{2.58}{cm}$.

### PDF page 27

The margin reads “Look up TNA.”

#### Extra lecture on 20 March 2014

For a moving point charge,

$$
\magnetic{\vec B}_{\mathrm{point}}
=\frac{\magnetic{\mu}_0}{4\pi}
 \frac{\electric{q}\,\mechanical{\vec v}\times\hat r}{\mechanical{r}^2},
\qquad
\magnetic{\mu}_0=4\pi\times10^{-7}\,\unit{T\,m\,A^{-1}}.
$$

In the snapshot at $t=0$, a positive charge moves to the right. The field at the marked point above and to its right points out of the page.

**Slide 7 example**

The electron moves along $+\hat{k}$ at $2.0\times10^7\,\unit{m\,s^{-1}}$. The observation point is $\quantity{0.01}{m}$ along $+\hat{\imath}$. The sketch labels the point $(1,0,0)$, consistent with coordinates in centimeters.

$$
\magnetic{\vec B}
=\frac{\magnetic{\mu}_0}{4\pi}
\frac{(-\electric{e})(2.0\times10^7\,\unit{m\,s^{-1}})}
     {(0.01\,\unit{m})^2}
     (\hat{k}\times\hat{\imath})
=-(3.2\times10^{-15}\,\unit{T})\hat{\jmath}.
$$

The box gives the magnitude $3.2\times10^{-15}\,\unit{T}$.

To pass from a moving charge to a small current element, the notes use $\electric{I}=\mathrm{d}\electric{q}/\mathrm{d}t$ and replace $\electric{q}\mechanical{\vec v}$ by $(\Delta\electric{q}/\Delta t)\Delta\mechanical{\vec x}=\electric{I}\Delta\mechanical{\vec x}$. The field contribution is

$$
\Delta\magnetic{\vec B}
=\frac{\magnetic{\mu}_0}{4\pi}
\frac{\electric{I}\Delta\mechanical{\vec s}\times\hat r}{\mechanical{r}^2}.
$$

The distance $\mechanical{r}$ runs from the current element to the point where the field is evaluated.

### PDF page 28

#### Field of a very long straight wire

The observation point is a perpendicular distance $\mechanical{d}$ from the wire. A current element $\electric{I}\Delta\mechanical{x}$ a distance $\mechanical{x}$ along the wire is at distance $\sqrt{\mechanical{x}^2+\mechanical{d}^2}$ from that point. The sine factor is $\sin\theta=\mechanical{d}/\sqrt{\mechanical{x}^2+\mechanical{d}^2}$.

$$
\Delta\magnetic{B}
=\frac{\magnetic{\mu}_0}{4\pi}
 \frac{\electric{I}\Delta\mechanical{x}\,\mechanical{d}}
      {(\mechanical{x}^2+\mechanical{d}^2)^{3/2}}.
$$

$$
\magnetic{B}
=\frac{\magnetic{\mu}_0\electric{I}\mechanical{d}}{4\pi}
 \int_{-\infty}^{\infty}
 \frac{\mathrm{d}\mechanical{x}}{(\mechanical{x}^2+\mechanical{d}^2)^{3/2}}
=\frac{\magnetic{\mu}_0\electric{I}}{2\pi\mechanical{d}}.
$$

Use the right-hand rule for direction. With current to the right, the sketch shows dots above the wire and crosses below it.

#### Field on the axis of a circular loop

The loop of radius $\mechanical{R}$ lies in the $xy$ plane. The axis is $z$. A current element is perpendicular to the unit vector from the element to the observation point, so the cross-product sine is one.

$$
\mathrm{d}\magnetic{\vec B}
=\frac{\magnetic{\mu}_0}{4\pi}
 \frac{\electric{I}\,\mathrm{d}\mechanical{\vec\ell}\times\hat r}{\mechanical{r}^2}.
$$

For the projection onto the $z$ axis, the sketch gives a sine factor of $\mechanical{R}/\sqrt{\mechanical{R}^2+\mechanical{z}^2}$. The transverse parts cancel around the loop. Integrating the axial component gives

$$
\magnetic{B}_z
=\frac{\magnetic{\mu}_0\electric{I}\mechanical{R}}{4\pi(\mechanical{R}^2+\mechanical{z}^2)^{3/2}}
 \oint\mathrm{d}\mechanical{\ell}
=\frac{\magnetic{\mu}_0\electric{I}\mechanical{R}^2}
 {2(\mechanical{R}^2+\mechanical{z}^2)^{3/2}}.
$$

At the center, $\magnetic{B}=\magnetic{\mu}_0\electric{I}/(2\mechanical{R})$. For $N$ coincident turns, multiply both results by $N$.

### PDF page 29

#### Lecture on 21 March 2014

The notes compare summing field contributions with using a law based on symmetry.

| Electric field | Magnetic field |
| --- | --- |
| $\electric{\vec E}=\int\mathrm{d}\electric{\vec E}$ | $\magnetic{\vec B}=\int\mathrm{d}\magnetic{\vec B}$ |
| Gauss's law gives $\oint\electric{\vec E}\cdot\mathrm{d}\mechanical{\vec A}=\electric{Q}_{\mathrm{enc}}/\electric{\varepsilon}_0$. | Ampère's law for steady current gives $\oint\magnetic{\vec B}\cdot\mathrm{d}\mechanical{\vec\ell}=\magnetic{\mu}_0\electric{I}_{\mathrm{enc}}$. |

**Solenoids and coils**

The notes compare the solenoid to the parallel-plate capacitor because it produces a uniform field in its ideal interior. A real solenoid has finite length and fringe fields. An ideal solenoid has infinite length and zero field outside.

In the terminology of these problems, a solenoid has turns along its length with no overlap, and the wire diameter may be given. A coil of wire has turns wound on top of one another, with wire treated as infinitely thin. The handwritten warning says that “coil” can also refer to a solenoid and to use the winding information to distinguish the cases.

For coincident turns, the notes repeat

$$
\magnetic{B}_{\mathrm{coil,center}}=\frac{\magnetic{\mu}_0N\electric{I}}{2\mechanical{R}},
\qquad
\magnetic{B}_{\mathrm{coil,axis}}
=\frac{\magnetic{\mu}_0\electric{I}\mechanical{R}^2N}
 {2(\mechanical{z}^2+\mechanical{R}^2)^{3/2}}.
$$

The direction follows the right-hand rule. The final sketch shows a pair of Helmholtz coils for the electron charge-to-mass ratio lab.

### PDF page 30

#### Ampère's law

The sketch labels the contour $C$ and the surface $S$ that it bounds. Current passes through $S$. The tangent field and directed line element follow $C$.

$$
\oint_C\magnetic{\vec B}\cdot\mathrm{d}\mechanical{\vec\ell}
=\magnetic{\mu}_0\electric{I}_{\mathrm{enc}}.
$$

**Example**

The clockwise contour has line integral $3.77\times10^{-6}\,\unit{T\,m}$. Current $\electric{I}_1=\quantity{6.0}{A}$ is into the page, $\electric{I}_2=\quantity{4.0}{A}$ is out, and $\electric{I}_3$ is marked into the page. The clockwise orientation counts inward currents positive.

$$
\frac{3.77\times10^{-6}\,\unit{T\,m}}{4\pi\times10^{-7}\,\unit{T\,m\,A^{-1}}}
=6.0\,\unit{A}-4.0\,\unit{A}+\electric{I}_3.
$$

The left side is $\quantity{3.0}{A}$, so $\electric{I}_3=\quantity{1.0}{A}$ into the page.

**Field inside a wire**

The notes suggest choosing an Amperian loop with simple field contributions, for example zero field, field perpendicular to the line element, or field tangent to the loop. The round wire sketch shows a cross section of radius $\mechanical{R}$ and a concentric loop of radius $\mechanical{r}$. The field is tangent to the loop. For uniform current density,

$$
\electric{I}_{\mathrm{enc}}
=\electric{I}_{\mathrm{tot}}\frac{\mechanical{r}^2}{\mechanical{R}^2},
\qquad
\magnetic{B}(2\pi\mechanical{r})
=\magnetic{\mu}_0\electric{I}_{\mathrm{tot}}\frac{\mechanical{r}^2}{\mechanical{R}^2}.
$$

$$
\boxed{\magnetic{B}
=\frac{\magnetic{\mu}_0\electric{I}_{\mathrm{tot}}\mechanical{r}}
 {2\pi\mechanical{R}^2}},\qquad 0\leq\mechanical{r}\leq\mechanical{R}.
$$

### PDF page 31

Outside the wire, the Amperian loop encloses all the current.

$$
\magnetic{B}\oint\mathrm{d}\mechanical{\ell}
=\magnetic{B}(2\pi\mechanical{r})
=\magnetic{\mu}_0\electric{I},
\qquad
\magnetic{B}=\frac{\magnetic{\mu}_0\electric{I}}{2\pi\mechanical{r}}.
$$

The sketch shows the field rising linearly inside the wire, reaching $\magnetic{\mu}_0\electric{I}/(2\pi\mechanical{R})$ at the surface, and falling as $1/\mechanical{r}$ outside.

#### Magnetic flux and Faraday's law

The notes give $\magnetic{\Phi}_B=\int\magnetic{\vec B}\cdot\mathrm{d}\mechanical{\vec A}$ and recall the corresponding electric flux integral. A changing magnetic flux produces emf.

$$
\electric{\mathcal{E}}=-\frac{\mathrm{d}\magnetic{\Phi}_B}{\mathrm{d}t}.
$$

**Solenoid example**

The solenoid has $N=400$ turns, length $\mechanical{L}=\quantity{0.25}{m}$, radius $\mechanical{r}=\quantity{1.0}{cm}$, and current $\electric{I}=\quantity{3.0}{A}$.

$$
\magnetic{B}_{\mathrm{sol}}=\frac{N\magnetic{\mu}_0\electric{I}}{\mechanical{L}}.
$$

The notes use $\cos\theta=1$ and multiply the flux per turn by $N$. Their $\magnetic{\Phi}_B$ in this example is the flux linkage.

$$
N\magnetic{B}_{\mathrm{sol}}\,\pi\mechanical{r}^2
=758\times10^{-6}\,\unit{Wb}.
$$

For one flat loop, $\magnetic{\Phi}_B=\magnetic{\vec B}\cdot\mechanical{\vec A}=\magnetic{B}\mechanical{A}\cos\theta$. Its time derivative can contain changes in field, area, and angle.

$$
\frac{\mathrm{d}\magnetic{\Phi}_B}{\mathrm{d}t}
=\frac{\mathrm{d}\magnetic{B}}{\mathrm{d}t}\mechanical{A}\cos\theta
+\magnetic{B}\frac{\mathrm{d}\mechanical{A}}{\mathrm{d}t}\cos\theta
+\magnetic{B}\mechanical{A}\frac{\mathrm{d}(\cos\theta)}{\mathrm{d}t}.
$$

The induced emf is in volts and obeys $\electric{\mathcal{E}}_{\mathrm{ind}}=\electric{I}_{\mathrm{ind}}\circuit{R}$ in the resistive loop.

### PDF page 32

#### Lecture on 4 April 2014

**Faraday's law, Lenz's law, LR circuits, and inductors**

$$
\electric{\mathcal{E}}_{\mathrm{ind}}
=-\frac{\mathrm{d}\magnetic{\Phi}_B}{\mathrm{d}t},
\qquad
\mechanical{\vec F}_{\mathrm{wire}}
=\electric{I}_{\mathrm{ind}}\mechanical{\vec\ell}\times\magnetic{\vec B}_{\mathrm{ext}}.
$$

The sketch shows part of a rectangular loop in an into-the-page field. The horizontal sides have opposing vertical force components that cancel. The force arrow on the side within the field points right.

**Induced-current problem**

Coil 1 makes the external field and therefore the flux linked by coil 2. The notes use $\magnetic{\Phi}_B=\magnetic{B}\mechanical{A}\cos\theta$ and $\electric{\mathcal{E}}_{\mathrm{ind}}=\electric{I}_{\mathrm{ind}}\circuit{R}$. With adjacent turns of wire diameter $\mechanical{d}$, the length of coil 1 is $\mechanical{d}N_1$, so

$$
\magnetic{B}_1=\frac{\magnetic{\mu}_0N_1\electric{I}_1}{\mechanical{d}N_1}
=\frac{\magnetic{\mu}_0\electric{I}_1}{\mechanical{d}}.
$$

| Time interval in seconds | Current and field of coil 1 | Response of coil 2 |
| --- | --- | --- |
| $0<t<0.1$ | Constant negative current and constant leftward field. | No change in flux. Induced emf is zero. |
| $0.1<t<0.3$ | Current increases linearly, so the field and linked flux increase. | Constant negative emf and nonzero induced current. Use the winding direction of coil 2 to determine the current direction. |
| $0.3<t<0.4$ | Constant positive current and constant rightward field. | Induced emf and current are zero. |

The normal of coil 2 is aligned with the field reference direction, so $\cos0^\circ=1$. For the middle interval, the page gives

$$
\begin{aligned}
\electric{\mathcal{E}}_2
&=-\frac{\mathrm{d}\magnetic{B}_1}{\mathrm{d}t}
    (\mechanical{A}_2N_2\cos0^\circ)\\
&=-\frac{\magnetic{\mu}_0\pi\mechanical{r}_2^2N_2}{\mechanical{d}}
   \frac{\mathrm{d}\electric{I}_1}{\mathrm{d}t}
=-\frac{\magnetic{\mu}_0\pi\mechanical{r}_2^2N_2}{\mechanical{d}}
   (20\,\unit{A\,s^{-1}}).
\end{aligned}
$$

Here $\mechanical{r}_2$ is the radius of coil 2 and $\mechanical{d}$ is the diameter of the wire used for the adjacent turns in coil 1.

### PDF page 33

#### Lecture on 7 April 2014

**LR and LC circuits and inductors**

The upper margin lists $\circuit{C}_1\simeq\quantity{0.0060}{\mu F}$ and $\circuit{C}_2\simeq\quantity{1.47}{\mu F}$. The second entry includes a crossed-out value.

Inductance is the flux linkage per unit current. The page uses $\magnetic{\Phi}_B$ for the linkage.

$$
\circuit{L}=\frac{\magnetic{\Phi}_B}{\electric{I}},
\qquad
1\,\unit{H}=1\,\unit{T\,m^2\,A^{-1}}.
$$

In self-inductance, the magnetic field from a current loop links the same loop. A change in current induces an emf that opposes the change. The solenoid sketch shows the field due to current pointing right and the field induced by an increase in current pointing left.

$$
\frac{\mathrm{d}\magnetic{\Phi}_B}{\mathrm{d}t}
=\circuit{L}\frac{\mathrm{d}\electric{I}}{\mathrm{d}t},
\qquad
\boxed{\electric{\mathcal{E}}_{\mathrm{ind}}
=-\circuit{L}\frac{\mathrm{d}\electric{I}}{\mathrm{d}t}
=-\frac{\mathrm{d}\magnetic{\Phi}_B}{\mathrm{d}t}
=\Delta\electric{V}_L}.
$$

The comparison sketches show current downward through a resistor and an inductor. Following the current through the resistor gives $\Delta\electric{V}_R=-\electric{I}\circuit{R}$, so the potential decreases. Following the current through the inductor gives $\Delta\electric{V}_L=-\circuit{L}\,\mathrm{d}\electric{I}/\mathrm{d}t$. The potential decreases for increasing current and increases for decreasing current.

### PDF page 34

#### Switching an LR circuit

The top sketch shows a battery, switch, resistor, and inductor in series. The inductor is drawn as an emf source with a negative upper terminal and positive lower terminal when current decreases. When current increases, the upper terminal is positive and the lower terminal is negative. The notes call the latter a back emf opposing the rise in current.

A long time after closing the circuit, the rate of change of the current and the inductor emf approach zero. The notes replace the ideal inductor with a wire and label its emf $\electric{\mathcal{E}}_L=0$.

A second sketch shows a switch with positions $a$ and $b$. In position $a$ the battery drives the series resistor and inductor. In the steady state,

$$
\electric{I}_0=\frac{\electric{V}_{\mathrm{bat}}}{\circuit{R}}.
$$

At $t=0$ the switch moves to $b$. The last sketch shows a closed loop with only $\circuit{R}$ and $\circuit{L}$.

### PDF page 35

With the source removed, use Kirchhoff's loop rule around the resistor and inductor.

$$
\Delta\electric{V}_R+\Delta\electric{V}_L
=-\electric{I}\circuit{R}-\circuit{L}\frac{\mathrm{d}\electric{I}}{\mathrm{d}t}=0.
$$

$$
\int_{\electric{I}_0}^{\electric{I}}\frac{\mathrm{d}\electric{I}'}{\electric{I}'}
=-\int_0^t\frac{\mathrm{d}t'}{\circuit{L}/\circuit{R}},
\qquad
\boxed{\electric{I}=\electric{I}_0\mathrm{e}^{-t/\signal{\tau}}},
\qquad \signal{\tau}=\frac{\circuit{L}}{\circuit{R}}.
$$

**Transient comparison**

| Circuit | Increasing quantity | Decreasing quantity |
| --- | --- | --- |
| RC | $\electric{Q}=\electric{Q}_0(1-\mathrm{e}^{-t/(\circuit{R}\circuit{C})})$ while charging | $\electric{Q}=\electric{Q}_0\mathrm{e}^{-t/(\circuit{R}\circuit{C})}$ while discharging |
| LR | $\electric{I}_L=\electric{I}_0(1-\mathrm{e}^{-t/(\circuit{L}/\circuit{R})})$ after starting from zero | $\electric{I}_L=\electric{I}_0\mathrm{e}^{-t/(\circuit{L}/\circuit{R})}$ after starting at $\electric{I}_0$ |

The RC current magnitude is $\electric{I}_0\mathrm{e}^{-t/(\circuit{R}\circuit{C})}$ and $\electric{V}_C=\electric{Q}/\circuit{C}$. The LR inductor emf magnitude decreases exponentially from $\electric{\mathcal{E}}_0$. The increasing-current entry appears to copy the RC denominator. The LR derivation on the same page uses $\circuit{L}/\circuit{R}$.

#### Lecture on 9 April 2014

Current through an ideal inductor cannot change instantaneously. After a long time in a steady DC circuit, the inductor acts as a wire. A sketch of decreasing downward current marks the upper terminal negative and the lower terminal positive.

The battery–resistor–inductor loop gives $\electric{\mathcal{E}}_0-\electric{I}\circuit{R}-\circuit{L}\,\mathrm{d}\electric{I}/\mathrm{d}t=0$. Multiply by current to get

$$
\underbrace{\electric{I}\electric{\mathcal{E}}_0}_{\text{battery power}}
-\underbrace{\electric{I}^2\circuit{R}}_{\text{resistor dissipation}}
-\underbrace{\circuit{L}\electric{I}\frac{\mathrm{d}\electric{I}}{\mathrm{d}t}}_{\text{rate of energy storage in the magnetic field}}
=0.
$$

### PDF page 36

#### Energy in fields

| Electric field | Magnetic field |
| --- | --- |
| Capacitor energy $\energy{U}_C=\tfrac12\circuit{C}(\Delta\electric{V})^2$ | Inductor energy $\energy{U}_L=\tfrac12\circuit{L}\electric{I}^2$ |
| Energy density $\energy{u}_E=\electric{\varepsilon}_0\electric{E}^2/2$ | Energy density $\energy{u}_B=\magnetic{B}^2/(2\magnetic{\mu}_0)$ |

**LC example**

A $\quantity{2.0}{\mu F}$ capacitor is charged to $\quantity{20}{V}$ and connected across a $\quantity{6.0}{\mu H}$ inductor.

$$
\signal{f}=\frac{\signal{\omega}}{2\pi}
=\frac{1}{2\pi\sqrt{\circuit{L}\circuit{C}}}
=\frac{10^6}{2\pi\sqrt{12}}\,\unit{Hz}
\simeq\quantity{46}{kHz}.
$$

The handwritten box omits the factor of $10^6$ from converting micro-units. The next handwritten line includes it.

The sketch shows the capacitor initially charged. Choose the loop current opposite the direction used to charge it, so $\electric{I}=-\mathrm{d}\electric{Q}/\mathrm{d}t$. Then

$$
\Delta\electric{V}_C+\Delta\electric{V}_L
=\frac{\electric{Q}}{\circuit{C}}-\circuit{L}\frac{\mathrm{d}\electric{I}}{\mathrm{d}t}=0,
$$

$$
\boxed{\frac{\mathrm{d}^2\electric{Q}}{\mathrm{d}t^2}
=-\frac{\electric{Q}}{\circuit{L}\circuit{C}}}.
$$

$$
\electric{Q}_C=\electric{Q}_{\max}\cos(\signal{\omega}t),
\qquad
\electric{I}_L=\electric{I}_{\max}\sin(\signal{\omega}t),
\qquad
\electric{I}_{\max}=\electric{Q}_{\max}\signal{\omega}
=\frac{\electric{Q}_{\max}}{\sqrt{\circuit{L}\circuit{C}}}.
$$

### PDF page 37

#### Passive RC low-pass filters

Filters change the frequency content of signals. The sketch shows a series resistor between input and output, with a capacitor from the output node to ground. The output is taken across the capacitor. Its voltage cannot change instantaneously, so a rapidly varying input gives a smaller output in the sketch.

The example heading gives $\circuit{C}=\quantity{10}{nF}$ and $\circuit{R}=\quantity{10}{k\Omega}$. The cutoff calculation is

$$
\signal{f}_{\mathrm{cutoff}}
=\frac{1}{2\pi\circuit{R}\circuit{C}}
\simeq\quantity{1592}{Hz}
\simeq\quantity{1600}{Hz}.
$$

The diagram and substitution use $\quantity{1}{nF}$. That value gives about $\quantity{15.9}{kHz}$. The written result agrees with the $\quantity{10}{nF}$ in the heading.

The red note says that frequencies below $\quantity{1600}{Hz}$ pass unchanged. The oscilloscope sketch distinguishes the input and output traces near cutoff and marks their phase shift.

![[Kyle Kabasares - Electricity and Magnetism - low-pass filter oscilloscope traces.png|**Fig. 5** Input and output traces of the RC low-pass filter near cutoff]]

### PDF page 38

#### Ideal and realistic low-pass responses

The left sketch is labeled “impossibly ideal” and shows a $\quantity{10}{V}$ passband with an abrupt drop at $\quantity{1.6}{kHz}$. The frequency scale marks $\quantity{10}{Hz}$, $\quantity{100}{Hz}$, $\quantity{1}{kHz}$, and $\quantity{10}{kHz}$. The right sketch shows the more gradual roll-off of a real filter. It marks the cutoff where the amplitude has fallen by $\quantity{3}{dB}$.

![[Kyle Kabasares - Electricity and Magnetism - ideal and real low-pass responses.png|**Fig. 6** Ideal step response in frequency and realistic roll-off for a 1.6 kHz low-pass filter]]

#### Passive high-pass filter

Swap the positions of the resistor and capacitor in the low-pass circuit. The sketch now shows a small low-frequency output that rises toward the $\quantity{10}{V}$ passband at high frequency. The cutoff remains $\quantity{1.6}{kHz}$ for the same components.

![[Kyle Kabasares - Electricity and Magnetism - high-pass response.png|**Fig. 7** High-pass response with the 1.6 kHz cutoff marked]]

### PDF page 39

#### Multimeter tutorial

**DC voltage**

The meter is set to DC volts. The red lead runs from the V socket to the positive battery terminal. The black lead runs from COM to the negative terminal. The display reads $\quantity{8.68}{V}$. Reversing the probes gives a negative reading.

![[Kyle Kabasares - Electricity and Magnetism - multimeter DC voltage.png|**Fig. 8** DC voltage measurement across a battery with the V and COM sockets]]

**Current**

The red lead is in the mA socket and the black lead is in COM. The meter is in series between the battery pack and the load. The display reads $\quantity{60}{mA}$.

![[Kyle Kabasares - Electricity and Magnetism - multimeter current measurement.png|**Fig. 9** Current measurement with the multimeter inserted in series]]

### PDF page 40

#### Oscilloscope tutorial

An oscilloscope shows how voltage changes over time. Connect the probe to the desired channel. The sketch labels two parts.

- The ground clip connects to the circuit ground.
- The probe tip touches the circuit point to observe.

Adjust volts per division to change the vertical scale and seconds per division to change the horizontal scale. The notes use DC coupling for most of the basic circuits in the course.

### PDF page 41

The function generator entry gives $\quantity{2}{Hz}$ and $\quantity{8}{V}$.

#### Filter lab. RC low-pass design

The upper schematic shows six $\quantity{10}{\Omega}$ resistors in series feeding a $\quantity{0.47}{\mu F}$ capacitor. The lower schematic replaces the six resistors with $\circuit{R}=\quantity{60}{\Omega}$. The notes mark the function generator reading as peak to peak.

$$
\signal{f}_{\mathrm{cutoff}}
=\frac{1}{2\pi\circuit{R}\circuit{C}}
=\frac{1}{2\pi(60\,\unit{\Omega})(0.47\times10^{-6}\,\unit{F})}
=\quantity{5643.8}{Hz}\simeq\quantity{5600}{Hz}.
$$

Replacing the capacitor with $\quantity{0.1}{\mu F}$ gives an entry of “26” with no unit. The formula gives about $\quantity{26.5}{kHz}$. Replacing the resistance with $\quantity{330}{\Omega}$ gives the recorded cutoff of $\quantity{4822}{Hz}$ with that capacitor.

The last entries are a range of $\quantity{130}{Hz}$ to $\quantity{488}{Hz}$ and a peak-to-peak voltage of $\quantity{7.80}{V}$.

### PDF page 42

#### Low-pass and high-pass sections in series

The low-pass section uses a series $\quantity{330}{\Omega}$ resistor and a $\quantity{0.1}{\mu F}$ capacitor across its output. The high-pass section uses a series $\quantity{0.47}{\mu F}$ capacitor and a $\quantity{100}{\Omega}$ resistor across the final output.

For the high-pass section, the notes use $\signal{f}_{\mathrm{cutoff}}=1/(2\pi\circuit{R}\circuit{C})\simeq\quantity{3400}{Hz}$. The response sketch marks the high-pass cutoff at $\quantity{3400}{Hz}$ and the low-pass cutoff at $\quantity{4800}{Hz}$. The sketched passband lies between them.

![[Kyle Kabasares - Electricity and Magnetism - cascaded low-pass and high-pass sections.png|**Fig. 10** Cascaded filter circuit and the sketched passband between the two cutoff frequencies]]

| Frequency (Hz) | Peak-to-peak voltage (V) |
| --- | --- |
| 47 | 1.08 |
| 3,5400 | 1.08 |
| 9,730 | 1.00 |

The middle frequency is reproduced as written. It may mean $3540\,\unit{Hz}$, near the marked high-pass cutoff.

### PDF page 43

#### Lecture on 11 April 2014

**AC circuits and a sinusoidal voltage source**

The sketches show the sine-wave symbol for an AC voltage source and the plate symbol for a DC battery.

**Phasors**

The time plot starts at $+\electric{\mathcal{E}}_0$, oscillates between $\pm\electric{\mathcal{E}}_0$, and marks one and two periods. The companion sketch shows a rotating phasor of length $\electric{\mathcal{E}}_0$ at angle $\signal{\omega}t$. Its projection onto the $x$ axis gives the instantaneous voltage in the convention used here.

$$
\signal{T}=\frac1{\signal{f}}=\frac{2\pi}{\signal{\omega}}.
$$

**Resistor circuit**

The source drives a single resistor with $\electric{V}_{\mathrm{source}}\cos(\signal{\omega}t)$. Lowercase letters give instantaneous values. Capital letters give maxima.

$$
\electric{v}_R=\electric{i}_R\circuit{R},\qquad
\electric{v}_R=\electric{V}_R\cos(\signal{\omega}t),\qquad
\electric{i}_R=\electric{I}_R\cos(\signal{\omega}t),\qquad
\electric{V}_R=\electric{I}_R\circuit{R}.
$$

The voltage and current of the resistor are in phase.

### PDF page 44

#### Capacitor in an AC circuit

The sketch connects a sinusoidal source across a capacitor. Current brings charge to the capacitor. For the instantaneous charge and voltage, $\electric{q}_C=\circuit{C}\electric{v}_C$. If $\electric{v}_C=\electric{V}_{C,\max}\cos(\signal{\omega}t)$, then

$$
\begin{aligned}
\electric{i}_C
&=\frac{\mathrm{d}\electric{q}_C}{\mathrm{d}t}
=\frac{\mathrm{d}}{\mathrm{d}t}\bigl(\circuit{C}\electric{V}_{C,\max}
 \cos(\signal{\omega}t)\bigr)\\
&=-\signal{\omega}\circuit{C}\electric{V}_{C,\max}\sin(\signal{\omega}t)
=\electric{I}_{C,\max}\cos(\signal{\omega}t+\pi/2).
\end{aligned}
$$

The current leads the voltage by a phase angle $\signal{\phi}=\pi/2$. In the sketch the current phasor is ahead of the voltage phasor by that angle, with their horizontal projections marked $\electric{i}_C$ and $\electric{v}_C$.

The capacitive reactance is

$$
\circuit{X}_C=\frac1{\signal{\omega}\circuit{C}},
\qquad
\electric{V}_{C,\max}=\electric{I}_{C,\max}\circuit{X}_C.
$$

> [!note]
> The handwritten reactance box uses the lowercase instantaneous values. The preceding phase relation shows that the scalar reactance relation applies to the amplitudes.

### PDF page 45

#### Inductor in an AC circuit

The sketch connects a sinusoidal source across an inductor. The induced emf is $\electric{\mathcal{E}}_L=-\circuit{L}\,\mathrm{d}\electric{I}/\mathrm{d}t$. For the voltage across the element and its current,

$$
\begin{aligned}
\electric{v}_L&=\electric{V}_L\cos(\signal{\omega}t),\\
\electric{i}_L&=\electric{I}_{L,\max}\sin(\signal{\omega}t)
=\frac{\electric{V}_L}{\signal{\omega}\circuit{L}}
 \cos(\signal{\omega}t-\pi/2).
\end{aligned}
$$

The voltage leads the current by $90^\circ$. The inductive reactance is $\circuit{X}_L=\signal{\omega}\circuit{L}$. As in the capacitor example, the scalar relation between voltage and current through reactance uses their amplitudes.

| Element | Peak current | Phase relation |
| --- | --- | --- |
| Resistor | $\electric{I}_p=\electric{V}_p/\circuit{R}$ | In phase |
| Capacitor | $\electric{I}_p=\electric{V}_p/\circuit{X}_C$ | Current leads voltage by $90^\circ=\pi/2$ radians. |
| Inductor | $\electric{I}_p=\electric{V}_p/\circuit{X}_L$ | Voltage leads current by $90^\circ=\pi/2$ radians. |

### PDF page 46

#### Lecture, April 18, 2014

Know Maxwell’s equations for the exam. Faraday’s law gives the emf around a closed curve.

$$
\electric{\mathcal{E}}
=\oint\electric{\vec E}\cdot\mathrm d\mechanical{\vec s}
=-\frac{\mathrm d\magnetic{\Phi}_{\mathrm m}}{\mathrm d\signal{t}}.
$$

The electric field and emf exist along the closed curve bounding the surface through which the magnetic flux changes, even if there is no wire along that curve.

#### Induced fields

The minus sign in Faraday’s law expresses Lenz’s law. The induced electric circulation drives a current, if a conducting loop is present, whose magnetic field opposes the change in magnetic flux. The term for a changing electric flux in the Ampère–Maxwell law has a plus sign.

$$
\oint\magnetic{\vec B}\cdot\mathrm d\mechanical{\vec s}
=\magnetic{\mu}_0\electric{\varepsilon}_0
\frac{\mathrm d\electric{\Phi}_{\mathrm E}}{\mathrm d\signal{t}}
\qquad \text{when no conduction current crosses the surface.}
$$

#### Maxwell’s equations

Gauss’s law for electricity

$$
\oint\electric{\vec E}\cdot\mathrm d\mechanical{\vec A}
=\frac{\electric{Q}_{\mathrm{enc}}}{\electric{\varepsilon}_0},
\qquad
\nabla\cdot\electric{\vec E}=\frac{\electric{\rho}}{\electric{\varepsilon}_0}.
$$

Gauss’s law for magnetism

$$
\oint\magnetic{\vec B}\cdot\mathrm d\mechanical{\vec A}=0,
\qquad
\nabla\cdot\magnetic{\vec B}=0.
$$

Faraday’s law

$$
\oint\electric{\vec E}\cdot\mathrm d\mechanical{\vec s}
=-\frac{\mathrm d\magnetic{\Phi}_{\mathrm m}}{\mathrm d\signal{t}},
\qquad
\nabla\times\electric{\vec E}=-\frac{\partial\magnetic{\vec B}}{\partial\signal{t}}.
$$

Ampère–Maxwell law

$$
\begin{aligned}
\oint\magnetic{\vec B}\cdot\mathrm d\mechanical{\vec s}
&=\magnetic{\mu}_0\left(\electric{I}_{\mathrm{through}}+
\electric{\varepsilon}_0\frac{\mathrm d\electric{\Phi}_{\mathrm E}}{\mathrm d\signal{t}}\right),\\
\nabla\times\magnetic{\vec B}
&=\magnetic{\mu}_0\electric{\vec J}
+\magnetic{\mu}_0\electric{\varepsilon}_0
\frac{\partial\electric{\vec E}}{\partial\signal{t}}.
\end{aligned}
$$

Here $\electric{\rho}$ is the charge density and $\electric{\vec J}$ is the current density. Divergence measures the local source or sink strength of a vector field $\vec A$.

$$
\nabla\cdot\vec A
=\left(\hat{\imath}\frac{\partial}{\partial x}
+\hat{\jmath}\frac{\partial}{\partial y}
+\hat{k}\frac{\partial}{\partial z}\right)\cdot\vec A.
$$

### PDF page 47

#### Maxwell’s equations in a source-free region

With no charge or conduction current in vacuum, Maxwell’s equations become

$$
\begin{aligned}
\nabla\cdot\electric{\vec E}&=0,&
\nabla\cdot\magnetic{\vec B}&=0,\\
\nabla\times\electric{\vec E}&=-\frac{\partial\magnetic{\vec B}}{\partial\signal{t}},&
\nabla\times\magnetic{\vec B}&=\magnetic{\mu}_0\electric{\varepsilon}_0
\frac{\partial\electric{\vec E}}{\partial\signal{t}}.
\end{aligned}
$$

#### Wave equation and sinusoidal solution

For a wave traveling along the $x$ axis, the electric field obeys

$$
\frac{\partial^2\electric{E}}{\partial x^2}
=\frac{1}{\mechanical{v}^2}\frac{\partial^2\electric{E}}{\partial\signal{t}^2}.
$$

A sinusoidal wave traveling in the positive $x$ direction has the form

$$
\electric{\vec E}
=\electric{\vec E}_0\sin(\signal{k}x-\signal{\omega}\signal{t}+\signal{\phi}).
$$

The angular frequency $\signal{\omega}$ is related to the frequency $\signal{f}$, and the wave number $\signal{k}$ to the wavelength $\signal{\lambda}$.

Differentiate Faraday’s law with respect to time and substitute $\partial\electric{\vec E}/\partial\signal{t}$ from the Ampère–Maxwell law.

$$
\begin{aligned}
\nabla\times\frac{\partial\electric{\vec E}}{\partial\signal{t}}
&=-\frac{\partial^2\magnetic{\vec B}}{\partial\signal{t}^2},\\
\frac{1}{\magnetic{\mu}_0\electric{\varepsilon}_0}
\nabla\times(\nabla\times\magnetic{\vec B})
&=-\frac{\partial^2\magnetic{\vec B}}{\partial\signal{t}^2}.
\end{aligned}
$$

The notes give the vector triple-product identity to prepare for simplifying the double curl.

$$
\vec A\times(\vec B\times\vec C)
=\vec B(\vec A\cdot\vec C)-\vec C(\vec A\cdot\vec B).
$$

### PDF page 48

#### Electromagnetic wave speed

Apply the vector identity for the double curl and use $\nabla\cdot\magnetic{\vec B}=0$.

$$
\begin{aligned}
\frac{1}{\magnetic{\mu}_0\electric{\varepsilon}_0}
\left[\nabla(\nabla\cdot\magnetic{\vec B})-\nabla^2\magnetic{\vec B}\right]
&=-\frac{\partial^2\magnetic{\vec B}}{\partial\signal{t}^2},\\
\nabla^2\magnetic{\vec B}
&=\magnetic{\mu}_0\electric{\varepsilon}_0
\frac{\partial^2\magnetic{\vec B}}{\partial\signal{t}^2}.
\end{aligned}
$$

Comparing with the wave equation gives the speed of light in vacuum.

$$
\begin{aligned}
\frac{1}{\mechanical{v}^2}&=\magnetic{\mu}_0\electric{\varepsilon}_0,\\
\mechanical{v}
&=\frac{1}{\sqrt{\magnetic{\mu}_0\electric{\varepsilon}_0}}
=\frac{1}{\sqrt{(4\pi\times10^{-7}\,\unit{T\,m\,A^{-1}})
(8.854\times10^{-12}\,\unit{C^2\,N^{-1}\,m^{-2}})}}
\approx 2.99\times10^8\,\unit{m\,s^{-1}}.
\end{aligned}
$$

For the electric field, differentiate the source-free Ampère–Maxwell law with respect to time, substitute Faraday’s law, and use the double-curl identity together with Gauss’s law at $\electric{\rho}=0$. The result is

$$
\nabla^2\electric{\vec E}
=\magnetic{\mu}_0\electric{\varepsilon}_0
\frac{\partial^2\electric{\vec E}}{\partial\signal{t}^2}.
$$

#### Fields that vary along one axis

Let the field components depend on $x$ and $\signal{t}$. Gauss’s law gives $\partial\electric{E}_x/\partial x=0$, so the longitudinal electric component can depend only on time at this stage of the derivation. The determinant for the curl simplifies because the $y$ and $z$ derivatives vanish.

$$
\begin{aligned}
\nabla\times\electric{\vec E}
&=\begin{vmatrix}
\hat{\imath}&\hat{\jmath}&\hat{k}\\
\partial/\partial x&\partial/\partial y&\partial/\partial z\\
\electric{E}_x&\electric{E}_y&\electric{E}_z
\end{vmatrix}\\
&=\left(0,-\frac{\partial\electric{E}_z}{\partial x},
\frac{\partial\electric{E}_y}{\partial x}\right)
=-\frac{\partial\magnetic{\vec B}}{\partial\signal{t}}.
\end{aligned}
$$

The $x$ component therefore gives $\partial\magnetic{B}_x/\partial\signal{t}=0$. The source-free magnetic divergence also makes $\magnetic{B}_x$ independent of $x$ for this geometry.

### PDF page 49

For $\magnetic{\vec B}$ depending on $x$ and $\signal{t}$ only,

$$
\nabla\times\magnetic{\vec B}
=\left(0,-\frac{\partial\magnetic{B}_z}{\partial x},
\frac{\partial\magnetic{B}_y}{\partial x}\right)
=\magnetic{\mu}_0\electric{\varepsilon}_0
\frac{\partial\electric{\vec E}}{\partial\signal{t}}.
$$

Thus $\electric{E}_x$ is also constant.

#### Lecture, April 21, 2014. Traveling waves

Light is an oscillation of the electromagnetic field. The right-hand rule gives the direction of propagation from $\electric{\vec E}\times\magnetic{\vec B}$. The speed and field magnitudes satisfy

$$
\begin{aligned}
\mechanical{c}&=\frac{1}{\sqrt{\electric{\varepsilon}_0\magnetic{\mu}_0}},
&\electric{E}&=\mechanical{c}\magnetic{B}
&&\text{in vacuum},\\
\mechanical{v}&=\frac{1}{\sqrt{\magnetic{\mu}\electric{\varepsilon}}},
&\electric{E}&=\mechanical{v}\magnetic{B}
&&\text{in the transparent medium considered here}.
\end{aligned}
$$

For a wave traveling in the positive $x$ direction, the fields may be polarized along $y$ and $z$, respectively.

$$
\begin{aligned}
\electric{\vec E}(x,\signal{t})&=\electric{E}_0\sin(\signal{k}x-\signal{\omega}\signal{t}+\signal{\phi}_0)\,\hat{\jmath},\\
\magnetic{\vec B}(x,\signal{t})&=\magnetic{B}_0\sin(\signal{k}x-\signal{\omega}\signal{t}+\signal{\phi}_0)\,\hat{k}.
\end{aligned}
$$

The wave number and angular frequency set the spatial and temporal periods. The phase constant $\signal{\phi}_0$ encodes the initial conditions. Both $\signal{k}x$ and $\signal{\omega}\signal{t}$ are measured in radians.

$$
\begin{aligned}
\signal{k}&=\frac{2\pi}{\signal{\lambda}},&
\signal{k}x&=2\pi\frac{x}{\signal{\lambda}},\\
\signal{\omega}&=\frac{2\pi}{\signal{T}}=2\pi\signal{f},&
\mechanical{v}&=\frac{\signal{\omega}}{\signal{k}}=\signal{\lambda}\signal{f}.
\end{aligned}
$$

The units are $\unit{rad\,m^{-1}}$ for $\signal{k}$, $\unit{rad\,s^{-1}}$ for $\signal{\omega}$, $\unit{Hz}=\unit{s^{-1}}$ for $\signal{f}$, and $\unit{m\,s^{-1}}$ for $\mechanical{v}$. The handwritten radio example reads “KNBR 680 MHz.”

### PDF page 50

To find the phase constant, set $x=0$ and $\signal{t}=0$, then read the initial field component from the graph.

$$
\electric{E}(0,0)=\electric{E}_0\sin\signal{\phi}_0.
$$

#### Lecture, April 23, 2014. The Poynting vector

Electromagnetic waves carry energy and momentum. The magnitude of the Poynting vector measures the rate of energy transfer per area. For a plane wave in vacuum, $\electric{E}=\mechanical{c}\magnetic{B}$ and

$$
\begin{aligned}
\energy{\vec S}&=\frac{1}{\magnetic{\mu}_0}\electric{\vec E}\times\magnetic{\vec B},\\
\energy{S}&=\frac{\electric{E}\magnetic{B}}{\magnetic{\mu}_0}
=\frac{\electric{E}^2}{\mechanical{c}\magnetic{\mu}_0}.
\end{aligned}
$$

Intensity is the average power per area. For a sinusoidal plane wave, or for an isotropic source observed at radius $\mechanical{r}$, respectively,

$$
\energy{I}=\energy{S}_{\mathrm{avg}}
=\frac{\electric{E}_0\magnetic{B}_0}{2\magnetic{\mu}_0},
\qquad
\energy{I}=\frac{\energy{P}}{4\pi\mechanical{r}^2}.
$$

#### Radiation pressure

At normal incidence, fully absorbed light transfers momentum $\Delta\mechanical{p}=\energy{E}_{\mathrm{abs}}/\mechanical{c}$. Force is momentum transferred per time, so pressure is

$$
\mechanical{p}_{\mathrm{rad}}
=\frac{\mechanical{F}}{\mechanical{A}}
=\frac{\Delta\mechanical{p}}{\Delta\signal{t}\,\mechanical{A}}
=\frac{\energy{E}_{\mathrm{abs}}}{\mechanical{c}\Delta\signal{t}\,\mechanical{A}}
=\frac{\energy{I}}{\mechanical{c}}.
$$

If the light is fully reflected straight back, the momentum transfer and radiation pressure are twice as large.

### PDF page 51

Accelerating charges produce electromagnetic radiation.

#### Lecture, April 28, 2014. Polarizers

Intensity is proportional to the square of the electric-field amplitude. An ideal first polarizer transmits half the intensity of unpolarized light. A second polarizer at angle $\mechanical{\theta}$ to the first obeys Malus’s law.

$$
\energy{I}_1=\frac{\energy{I}_0}{2},
\qquad
\energy{I}_2=\energy{I}_{\mathrm{transmitted}}
=\energy{I}_1\cos^2\mechanical{\theta}.
$$

#### Superposition and interference

The wave sketch labels a maximum as a crest and a minimum as a trough. The principle of superposition applies to the displacements of the two waves.

$$
\begin{aligned}
\mechanical{D}_1&=\mechanical{D}_{01}\sin(\signal{k}x-\signal{\omega}\signal{t}+\signal{\phi}_1),\\
\mechanical{D}_2&=\mechanical{D}_{02}\sin(\signal{k}x-\signal{\omega}\signal{t}+\signal{\phi}_2).
\end{aligned}
$$

When crests line up with troughs, equal-amplitude waves cancel completely by destructive interference. When crests line up with crests and troughs line up with troughs, the waves undergo constructive interference.

### PDF page 52

#### Path and phase differences

Interference depends on the path length difference and on the initial phase difference $\Delta\signal{\phi}=\signal{\phi}_1-\signal{\phi}_2$.

![[Kyle Kabasares - Electricity and Magnetism - Double-slit path difference.png|**Fig. 11** The two paths to the screen differ by the projection of the slit separation along the direction of observation.]]

For slit separation $\mechanical{d}$, screen distance $\mechanical{L}$, and displacement $y$ along the screen, the far-screen geometry gives

$$
\Delta\mechanical{r}\simeq\mechanical{d}\sin\mechanical{\theta},
\qquad
\tan\mechanical{\theta}=\frac{y}{\mechanical{L}}.
$$

For waves emitted in phase, a bright fringe occurs where $\Delta\mechanical{r}=m\signal{\lambda}$ for integer order $m$. At small angles, $\cos\mechanical{\theta}\simeq1$, so

$$
\sin\mechanical{\theta}\simeq\tan\mechanical{\theta}
=\frac{y}{\mechanical{L}}
\simeq\frac{m\signal{\lambda}}{\mechanical{d}}.
$$

#### Physics discussion, question 4

In part (a), the notes use $\energy{I}=\electric{E}_0\magnetic{B}_0/(2\magnetic{\mu}_0)$, $\electric{E}_0=\mechanical{c}\magnetic{B}_0$, and $\energy{I}=\energy{P}/\mechanical{A}$. For an absorbing object, radiation pressure and Newton’s second law give

$$
\mechanical{p}_{\mathrm{rad}}=\frac{\energy{I}}{\mechanical{c}},
\qquad
\mechanical{F}_{\mathrm{rad}}=\frac{\energy{I}\mechanical{A}}{\mechanical{c}}
=\mechanical{m}\mechanical{a},
\qquad
\mechanical{a}=\frac{\energy{I}\mechanical{\ell}^2}{\mechanical{m}\mechanical{c}},
$$

where the last expression reads the unclear squared length in the notes as the side length of a square cross section.

In part (b), the initial speed is estimated from the root-mean-square thermal speed. With constant acceleration, the stopping time comes from

$$
\mechanical{v}_{\mathrm{rms}}
=\sqrt{\frac{3\thermal{k}_{\mathrm B}\thermal{T}}{\mechanical{m}}},
\qquad
\mechanical{a}=\frac{\mechanical{v}_f-\mechanical{v}_i}{\Delta\signal{t}},
\qquad
\Delta\signal{t}=\frac{0-\mechanical{v}_i}{\mechanical{a}}.
$$

The mass conversion starts with $85\,\unit{g\,mol^{-1}}$ and divides by $6.02\times10^{23}$ atoms per mole. The handwritten exponent appears to have a minus sign. The positive exponent is required for the number of atoms per mole.

### PDF page 53

#### Discussion, question 5. Field from intensity

For $\energy{I}=100\,\unit{W\,m^{-2}}$, the notes find the root-mean-square electric and magnetic fields.

$$
\electric{E}_{\mathrm{rms}}=\sqrt{\energy{I}\mechanical{c}\magnetic{\mu}_0}
\approx194\,\unit{V\,m^{-1}},
\qquad
\magnetic{B}_{\mathrm{rms}}=\frac{\electric{E}_{\mathrm{rms}}}{\mechanical{c}}
\approx647\,\unit{nT}.
$$

#### Discussion, question 6. Light pulse and pendulum

The sketch shows a pendulum of length $\mechanical{L}$ moving from the vertical to angle $\mechanical{\theta}$, where its vertical projection is $\mechanical{L}\cos\mechanical{\theta}$. A pulse of power $\energy{P}$ and duration $\Delta\signal{t}$ transfers momentum $\mechanical{p}=\energy{P}\Delta\signal{t}/\mechanical{c}$ when absorbed. The pendulum rises until its initial kinetic energy is converted to gravitational potential energy.

$$
\begin{aligned}
\energy{K}&=\tfrac12\mechanical{m}\mechanical{v}^2
=\frac{\mechanical{p}^2}{2\mechanical{m}},\\
\frac{\mechanical{p}^2}{2\mechanical{m}}
&=\mechanical{m}\mechanical{g}\mechanical{L}(1-\cos\mechanical{\theta}),\\
\mechanical{\theta}
&=\arccos\left(1-\frac{(\energy{P}\Delta\signal{t}/\mechanical{c})^2}
{2\mechanical{m}^2\mechanical{g}\mechanical{L}}\right).
\end{aligned}
$$

The numerical substitution uses $\energy{P}=1000\times10^6\,\unit{W}$, $\Delta\signal{t}=200\times10^{-9}\,\unit{s}$, $\mechanical{m}=10\times10^{-3}\,\unit{kg}$, $\mechanical{g}=9.8\,\unit{m\,s^{-2}}$, and $\mechanical{L}=0.04\,\unit{m}$. The first handwritten angle equation has the negative sign carried here. The sign appears to be omitted in the later substitution.

#### Discussion, questions 8 and 9

For question 8, the notes record $\Delta\signal{t}=\lvert(\mechanical{d}_a-\mechanical{d}_p)/\mechanical{c}\rvert/10=0.0143\,\unit{s}$ without the preceding problem statement.

In question 9, unpolarized light passes through three ideal polarizers whose axes are at $0^\circ$, $\mechanical{\theta}$, and $90^\circ$. The first transmits half the initial intensity. Apply Malus’s law to each of the next two.

$$
\begin{aligned}
\energy{I}_3
&=\tfrac12\energy{I}_0\cos^2\mechanical{\theta}\cos^2(90^\circ-\mechanical{\theta})\\
&=\tfrac12\energy{I}_0\cos^2\mechanical{\theta}\sin^2\mechanical{\theta}
=\tfrac18\energy{I}_0\sin^2(2\mechanical{\theta}).
\end{aligned}
$$

The last form uses $2\cos\mechanical{\theta}\sin\mechanical{\theta}=\sin(2\mechanical{\theta})$.

### PDF page 54

#### Lecture, April 30, 2014. Wave optics

Diffraction is the bending or spreading of waves. The notes compare double-slit interference fringes with the bright central maximum and weaker side fringes of single-slit diffraction.

![[Kyle Kabasares - Electricity and Magnetism - Double-slit and single-slit patterns.png|**Fig. 12** Sketches of the double-slit fringe pattern and the single-slit central maximum and side maxima.]]

For small angles, adjacent double-slit fringes have spacing

$$
\Delta y=y_{m+1}-y_m=\frac{\signal{\lambda}\mechanical{L}}{\mechanical{d}}.
$$

The example gives $1.0\,\unit{cm}$ from order $m=0$ to order $m=2$, a slit separation of $0.2\,\unit{mm}$, and a wavelength of $600\,\unit{nm}$. The notes leave $\mechanical{L}$ to be found. The two fringe spacings give $\Delta y=0.50\,\unit{cm}$ and hence $\mechanical{L}\simeq1.7\,\unit{m}$.

#### Lecture, May 2, 2014. Reflection, refraction, and Snell’s law

In the ray model, light follows a straight path in a uniform medium until an interaction with matter changes its direction. The mirror sketch extends the reflected rays behind the mirror to the virtual image $P_1$ of point $P$.

![[Kyle Kabasares - Electricity and Magnetism - Plane mirror virtual image.png|**Fig. 13** Backward extensions of reflected rays meet at the virtual image behind a plane mirror.]]

![[Kyle Kabasares - Electricity and Magnetism - Mirror and law of reflection.png|**Fig. 14** The incident and reflected angles are measured from the surface normal.]]

### PDF page 55

#### Speed and refraction

The source sets the frequency $\signal{f}$, which stays fixed across a stationary interface. The material sets the speed, so the wavelength changes with the speed.

$$
\mechanical{v}=\signal{\lambda}\signal{f}=\frac{\mechanical{c}}{\signal{n}}.
$$

The arrow in the handwriting appears to place “does not change” under $\signal{\lambda}$. The statement about the source and the speed relation indicate that it is $\signal{f}$ that stays fixed.

Snell’s law relates the angles of incidence and refraction measured from the surface normal.

$$
\signal{n}_1\sin\mechanical{\theta}_1=\signal{n}_2\sin\mechanical{\theta}_2.
$$

For $\signal{n}_2>\signal{n}_1$, the refracted ray bends toward the normal, so $\mechanical{\theta}_2<\mechanical{\theta}_1$ at oblique incidence.

![[Kyle Kabasares - Electricity and Magnetism - Refraction at an interface.png|**Fig. 15** Incident, weakly reflected, and refracted rays at an interface where the second medium has the higher refractive index.]]

The worked Snell’s law problem records $\signal{n}_2=\signal{n}_1\sin\mechanical{\theta}_1/\sin\mechanical{\theta}_2=1.37$. The law of reflection gives $\mechanical{\theta}_i=\mechanical{\theta}_r$.

### PDF page 56

#### Lecture, May 5, 2014. Lenses and images

In the sign convention used here, real object and image distances are positive and virtual distances are negative. A converging lens is thicker in the middle and has positive focal length. A diverging lens is thinner in the middle and has negative focal length.

![[Kyle Kabasares - Electricity and Magnetism - Converging lens real image.png|**Fig. 16** A converging lens brings rays from the real object to a real, inverted image on the other side.]]

![[Kyle Kabasares - Electricity and Magnetism - Diverging lens virtual image.png|**Fig. 17** The backward extensions of the refracted rays meet at the upright virtual image on the object side. The separate “Real image” label on the right conflicts with the ray construction.]]

A real image forms where the actual light rays meet. For a virtual image, trace the refracted rays backward to where they appear to originate.

The notes use $\mechanical{s}$, $\mechanical{o}$, and $\mechanical{s}_o$ for the object distance, and $\mechanical{s}'$, $\mechanical{i}$, and $\mechanical{s}_i$ for the image distance. The object height is $\mechanical{h}=\mechanical{y}_o$ and the image height is $\mechanical{h}'=\mechanical{y}_i$.

### PDF page 57

#### Thin-lens equations

The notes refer to the optics summary on textbook page 687. Similar triangles give the relation between the signed heights and distances.

$$
\frac{\mechanical{h}'}{\mechanical{s}'}
=-\frac{\mechanical{h}}{\mechanical{s}},
\qquad
\mechanical{M}
=\frac{\mechanical{h}'}{\mechanical{h}}
=-\frac{\mechanical{s}'}{\mechanical{s}}.
$$

The sign determines orientation. If $\mechanical{M}<0$, the image is inverted. If $\mechanical{M}>0$, it is upright. The size ratio is $\lvert\mechanical{M}\rvert=\lvert\mechanical{h}'/\mechanical{h}\rvert$.

The thin-lens equation and the lensmaker’s equation in air are

$$
\frac{1}{\mechanical{f}}=\frac{1}{\mechanical{s}}+\frac{1}{\mechanical{s}'},
\qquad
\frac{1}{\mechanical{f}}=(\signal{n}-1)
\left(\frac{1}{\mechanical{R}_1}-\frac{1}{\mechanical{R}_2}\right).
$$

The notes mark the first radius positive and the second negative for the illustrated sign choice. With light traveling left to right, each radius is positive if its center of curvature lies to the right of the corresponding surface.

#### Lecture, May 7, 2014. Reflection

For a plane mirror, the object acts as the source of the rays. The angles of incidence and reflection are equal and are measured from the normal. For a curved mirror, use the normal to the local tangent at the point of incidence.

![[Kyle Kabasares - Electricity and Magnetism - Reflection at a curved mirror.png|**Fig. 18** The reflection law applies at the point where the incident ray meets the curved surface.]]

### PDF page 58

#### Concave mirror

The sketch shows a concave mirror forming a real, inverted image for the object position shown. The law of reflection and the magnification relation are $\mechanical{\theta}_i=\mechanical{\theta}_r$ and $\mechanical{M}=-\mechanical{s}_i/\mechanical{s}_o$.

![[Kyle Kabasares - Electricity and Magnetism - Concave mirror ray diagram.png|**Fig. 19** Reflected rays converge in front of the concave mirror. The focal length and radius of curvature are marked on the optical axis.]]

#### Lecture, May 9, 2014

The Lorentz force gives the interaction of a moving charge with electric and magnetic fields.

$$
\mechanical{\vec F}
=\electric{q}(\electric{\vec E}+\mechanical{\vec v}\times\magnetic{\vec B}).
$$

The notes connect this interaction with Maxwell’s equations. They also review Malus’s law, $\energy{I}_2=\energy{I}_1\cos^2\mechanical{\theta}$, where $\mechanical{\theta}$ is the angular difference between the polarization axes.

#### Supplemental Physics 9 notes, July 26, 2015. Walter Lewin

Electric charge comes in two signs, positive and negative. The sketches show a positively charged rod distorting the electron cloud of an atom toward the rod. A second sketch shows charges in a neutral piece of matter redistributing in the presence of the rod. Friction can transfer electric charge. The electrostatic force depends on both charges and their separation.

For a source charge $\electric{Q}$ and a positive test charge $\electric{q}$ at point $P$, $\hat r$ points from the source toward $P$.

$$
\mechanical{\vec F}=\frac{\electric{k}\electric{q}\electric{Q}}{\mechanical{r}^2}\hat r,
\qquad
\electric{\vec E}(P)=\frac{\mechanical{\vec F}}{\electric{q}}
=\frac{\electric{k}\electric{Q}}{\mechanical{r}^2}\hat r.
$$

The electric field points in the direction of the force on a positive test charge and is measured in $\unit{N\,C^{-1}}$. The field sketches show arrows pointing out of a positive charge and into a negative charge.

### PDF page 59

#### Field superposition and field lines

The first sketch adds three field vectors at point $P$. The electric field is the vector sum of the contributions, and the force on a test charge is

$$
\electric{\vec E}(P)
=\electric{\vec E}_1+\electric{\vec E}_2+\electric{\vec E}_3
=\sum_{n=1}^3\electric{\vec E}_n,
\qquad
\mechanical{\vec F}=\electric{q}\electric{\vec E}.
$$

The force lies along the tangent to the electric field line. The notes compare a positive charge to an air source and a negative charge to an air sink to indicate the direction of the field lines.

#### Gauss’s law for a point charge

For a point charge $\electric{Q}$ at the center of a sphere of radius $\mechanical{R}$, the electric field is radial and has constant magnitude on the surface. The outward area element is also radial, so the flux uses the radial component $\electric{E}_r$.

$$
\electric{\Phi}_{\mathrm E}=4\pi\mechanical{R}^2\electric{E}_r
=(4\pi\mechanical{R}^2)
\frac{\electric{Q}}{4\pi\electric{\varepsilon}_0\mechanical{R}^2}
=\frac{\electric{Q}}{\electric{\varepsilon}_0}.
$$

In general, Gauss’s law gives the electric flux through a closed surface from the total enclosed charge.

$$
\electric{\Phi}_{\mathrm E}
=\oint\electric{\vec E}\cdot\mathrm d\mechanical{\vec A}
=\frac{\electric{Q}_{\mathrm{enc}}}{\electric{\varepsilon}_0}.
$$

#### Spherical symmetry. Uniform thin shell

The notes list spherical, cylindrical, and planar symmetry. For a hollow, uniformly charged thin shell, choose concentric spherical Gaussian surfaces through the two points of interest. Symmetry gives a radial electric field with constant magnitude on each Gaussian surface.

For the inner radius $\mechanical{r}_1<\mechanical{R}$, the Gaussian sphere encloses no charge. Thus $4\pi\mechanical{r}_1^2\electric{E}_r=0$, giving $\electric{E}_r=0$ inside. For $\mechanical{r}_2>\mechanical{R}$, the sphere encloses the full shell charge $\electric{Q}$.

$$
4\pi\mechanical{r}_2^2\electric{E}_r
=\frac{\electric{Q}}{\electric{\varepsilon}_0},
\qquad
\electric{E}_r
=\frac{\electric{Q}}{4\pi\electric{\varepsilon}_0\mechanical{r}_2^2}.
$$

### PDF page 60

#### Planar symmetry. Uniform infinite sheet

The surface charge density is $\electric{\sigma}=\electric{Q}/\mechanical{A}$ in $\unit{C\,m^{-2}}$. To find the field a distance $\mechanical{d}$ from the sheet, choose a cylindrical Gaussian surface with two flat, parallel end caps parallel to the sheet. Its axis is perpendicular to the sheet, and the two caps are at equal distances $\mechanical{d}$ on opposite sides.

![[Kyle Kabasares - Electricity and Magnetism - Gaussian pillbox through a charged plane.png|**Fig. 20** The charged sheet cuts the pillbox halfway between its two end caps. The field is perpendicular to the sheet and tangent to the cylindrical wall.]]

The flux element is $\mathrm d\electric{\Phi}_{\mathrm E}=\electric{\vec E}\cdot\mathrm d\mechanical{\vec A}=\electric{E}\,\mathrm d\mechanical{A}\cos\mechanical{\theta}$. At the curved wall, $\mechanical{\theta}=90^\circ$ and this term vanishes. The two end caps contribute equally by symmetry.

Let $\mechanical{A}_1$, $\mechanical{A}_2$, and $\mechanical{A}_3$ be the areas of the top cap, the cross section in the sheet, and the bottom cap. All three equal $\mechanical{A}$. The enclosed charge is $\electric{\sigma}\mechanical{A}_2$. Using the signed outward field component $\electric{E}_{\perp}$ at either cap,

$$
\begin{aligned}
\frac{\electric{Q}_{\mathrm{enc}}}{\electric{\varepsilon}_0}
&=\oint\electric{\vec E}\cdot\mathrm d\mechanical{\vec A},\\
\frac{\electric{\sigma}\mechanical{A}_2}{\electric{\varepsilon}_0}
&=\electric{E}_{\perp}(\mechanical{A}_1+\mechanical{A}_3)
=2\electric{E}_{\perp}\mechanical{A},\\
\electric{E}_{\perp}&=\frac{\electric{\sigma}}{2\electric{\varepsilon}_0}.
\end{aligned}
$$

### PDF page 61

#### Two oppositely charged plates

Two parallel infinite sheets carry surface charge densities $+\electric{\sigma}$ and $-\electric{\sigma}$ and are separated by $\mechanical{d}$. The sketch adds the fields of the two sheets. Each has magnitude $\electric{\sigma}/(2\electric{\varepsilon}_0)$. Outside the pair the fields cancel. Between the sheets they point from the positive sheet toward the negative sheet and add to $\electric{E}=\electric{\sigma}/\electric{\varepsilon}_0$. The two interior arrows in the sketch support this sum, though the adjacent handwritten expression appears to give only the single-sheet value.

#### Electrostatic potential energy

The diagram shows two positive charges. To move $\electric{q}_2$ slowly from infinity to a distance $\mechanical{R}$ from $\electric{q}_1$, the external force balances the electric force. With the potential energy set to zero at infinity, the external work gives

$$
\begin{aligned}
\energy{U}
&=\energy{W}_{\mathrm{ext}}
=\int_{\infty}^{\mechanical{R}}\mechanical{\vec F}_{\mathrm{ext}}\cdot\mathrm d\mechanical{\vec r}
=\int_{\mechanical{R}}^{\infty}\mechanical{\vec F}_{\mathrm{el}}\cdot\mathrm d\mechanical{\vec r}\\
&=\frac{\electric{q}_1\electric{q}_2}{4\pi\electric{\varepsilon}_0}
\int_{\mechanical{R}}^\infty\frac{\mathrm d\mechanical{r}}{\mechanical{r}^2}
=\frac{\electric{q}_1\electric{q}_2}{4\pi\electric{\varepsilon}_0\mechanical{R}}.
\end{aligned}
$$

Bringing like charges together takes positive external work. The electrostatic force is conservative, so this work depends on the endpoints.

#### Electric potential

The electric potential is the external work per unit charge to bring a test charge from infinity to the point of interest. With $\electric{V}_\infty=0$, the potential due to a point charge $\electric{Q}$ at distance $\mechanical{r}$ is

$$
\electric{V}(P)=\frac{\energy{U}}{\electric{q}}
=\int_{\mechanical{r}}^\infty
\frac{\mechanical{\vec F}_{\mathrm{el}}}{\electric{q}}\cdot\mathrm d\mechanical{\vec r}
=\int_{\mechanical{r}}^\infty\electric{\vec E}\cdot\mathrm d\mechanical{\vec r}
=\frac{\electric{Q}}{4\pi\electric{\varepsilon}_0\mechanical{r}}.
$$

The unit is the volt, $\unit{V}=\unit{J\,C^{-1}}$. The final sketch uses a sphere with $\mechanical{R}=0.3\,\unit{m}$ and a charge read as $+10\,\unit{nC}$. Outside the sphere, for $\mechanical{r}>\mechanical{R}$, the potential falls as $1/\mechanical{r}$.

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
| — | $\unit{C}$ | Electron and proton charges | The signed charges of the electron and proton. |
| — | $\unit{kg}$ | Electron mass | The mass scale given for the electron. |
| $\mechanical{d}$ | $\unit{m}$ | Separation or diameter | The separation of charges, plates, or slits, or the wire diameter. |
| $\mechanical{m}_p$ | $\unit{kg}$ | Proton mass | The mass in the gravitational force and acceleration estimates. |
| $\mechanical{a}_{pe}$, $\mechanical{a}_{pg}$ | $\unit{m\,s^{-2}}$ | Proton accelerations | The accelerations due to the electric and gravitational forces. |
| $\mechanical{\vec F}_{C,\mathrm{net}}$ | $\unit{N}$ | Net force on charge C | The sum of the forces due to charges A and B. |
| $\mechanical{m}$ | $\unit{kg}$ | Object mass | The mass supported by the electric force or suspended by the string. |
| $\mechanical{g}$ | $\unit{m\,s^{-2}}$ | Gravitational acceleration | The acceleration used for weight and gravitational potential energy. |
| $\electric{e}$ | $\unit{C}$ | Elementary charge | The magnitude of the charge of an electron or proton. |
| $\mechanical{T}$ | $\unit{N}$ | String tension | The force exerted by the string on each suspended object. |
| $\mechanical{N}$ | $\unit{N}$ | Normal force | The force exerted by the incline perpendicular to its surface. |
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
| $\mathrm{d}\mechanical{\vec s}$ | $\unit{m}$ | Path displacement | The directed displacement element in the field integral. |
| $\circuit{C}$ | $\unit{F}$ | Capacitance | The charge magnitude per unit voltage across a capacitor. |
| $\electric{K}$ | 1 | Dielectric constant | The permittivity of the dielectric relative to vacuum. |
| $\electric{\varepsilon}$ | $\unit{F\,m^{-1}}$ | Permittivity | The electric response parameter of a dielectric or transparent medium. |
| $\electric{\eta}_{\mathrm{induced}}$ | $\unit{C\,m^{-2}}$ | Induced surface charge density | The bound charge per area on a dielectric face. |
| $\circuit{C}_{\mathrm{eq}}$ | $\unit{F}$ | Equivalent capacitance | The capacitance of a single element that gives the same terminal charge–voltage relation. |
| $\mechanical{v}_d$ | $\unit{m\,s^{-1}}$ | Drift speed | The mean directed speed of the charge carriers along the wire. |
| $\electric{i}_e$ | $\unit{s^{-1}}$ | Electron flow rate | The number of electrons crossing a section per second. |
| $N_e$ | 1 | Electron count | The number of electrons in the specified volume. |
| $n_e$ | $\unit{m^{-3}}$ | Electron number density | The number of mobile electrons per unit volume. |
| $t$, $\signal{t}$, $\Delta\signal{t}$ | $\unit{s}$ | Time and elapsed time | The time coordinate or the duration of a process. |
| $\electric{J}$ | $\unit{A\,m^{-2}}$ | Current density | The conventional current per unit cross-sectional area. |
| $\electric{\sigma}$ | $\unit{S\,m^{-1}}$ | Electrical conductivity | The proportionality constant between current density and electric field. |
| $\energy{P}$ | $\unit{W}$ | Electrical power | The rate of electrical energy transfer in the resistive element. |
| $\circuit{R}_{\mathrm{eq}}$ | $\unit{\Omega}$ | Equivalent resistance | The single resistance with the same terminal relation as the resistor network. |
| $\signal{\tau}$ | $\unit{s}$ | Circuit time constant | The exponential time scale, equal to $\circuit{R}\circuit{C}$ or $\circuit{L}/\circuit{R}$. |
| $\electric{\mathcal{E}}$ | $\unit{V}$ | Electromotive force | The source voltage in the charging loop. |
| $\electric{V}_C$ | $\unit{V}$ | Capacitor voltage | The potential difference across the capacitor. |
| $\magnetic{\vec B}$ | $\unit{T}$ | Magnetic flux density | The magnetic field that determines the flux through a surface. |
| $\magnetic{\Phi}_B$ | $\unit{Wb}$ | Magnetic flux | The integral of the normal magnetic field over the surface. |
| $\magnetic{\vec\mu}$ | $\unit{A\,m^2}$ | Magnetic dipole moment | The current times the oriented area of the loop. |
| $\mechanical{\vec\ell}$ | $\unit{m}$ | Wire length vector | The directed length of the wire segment carrying current. |
| $\mechanical{v}$ | $\unit{m\,s^{-1}}$ | Speed | The speed of a particle or of a wave in the medium. |
| $\energy{K}$ | $\unit{J}$ | Kinetic energy | The energy of a particle moving at the selected speed. |
| $\magnetic{\mu}_0$ | $\unit{T\,m\,A^{-1}}$ | Vacuum permeability | The magnetic constant in the current-element and moving-charge formulas. |
| $N$ | 1 | Turn count | The number of loops contributing to the coil field. |
| $\electric{I}_{\mathrm{enc}}$ | $\unit{A}$ | Enclosed current | The net current through a surface bounded by the Amperian loop. |
| $\electric{e}/\mechanical{m}$ | $\unit{C\,kg^{-1}}$ | Electron charge-to-mass ratio | The magnitude of the electron charge divided by its mass. |
| $N\magnetic{\Phi}_B$ | $\unit{Wb}$ | Magnetic flux linkage | The sum of the fluxes linked by the turns of the solenoid. |
| $\electric{I}_{\mathrm{ind}}$ | $\unit{A}$ | Induced current | The current driven by the induced emf. |
| $\circuit{L}$ | $\unit{H}$ | Inductance | The linked magnetic flux per unit current. |
| $\Delta\electric{V}_R$, $\Delta\electric{V}_L$ | $\unit{V}$ | Element potential changes | The signed potential changes across the resistor and inductor along the loop. |
| $\energy{U}_C$, $\energy{U}_L$ | $\unit{J}$ | Stored capacitor and inductor energies | The energies stored by the respective circuit elements. |
| $\energy{u}_E$, $\energy{u}_B$ | $\unit{J\,m^{-3}}$ | Electric and magnetic energy densities | The energy per unit volume in the respective fields. |
| $\signal{f}$ | $\unit{Hz}$ | Oscillation frequency | The number of cycles per second in a circuit or wave. |
| $\signal{\omega}$ | $\unit{rad\,s^{-1}}$ | Angular frequency | The phase advance per second in an oscillation. |
| $\signal{f}_{\mathrm{cutoff}}$ | $\unit{Hz}$ | Cutoff frequency | The characteristic frequency set by the resistor and capacitor. |
| $\electric{V}_{\mathrm{in}}$, $\electric{V}_{\mathrm{out}}$ | $\unit{V}$ | Input and output voltages | The applied voltage and the voltage across the filter output. |
| $\signal{T}$ | $\unit{s}$ | Period | The time for one complete cycle of the sinusoidal signal. |
| $\electric{v}_R$, $\electric{V}_R$ | $\unit{V}$ | Resistor voltage | The instantaneous resistor voltage and its amplitude. |
| $\electric{i}_R$, $\electric{I}_R$ | $\unit{A}$ | Resistor current | The instantaneous resistor current and its amplitude. |
| $\electric{q}_C$ | $\unit{C}$ | Capacitor charge | The instantaneous charge on the selected plate. |
| $\electric{v}_C$, $\electric{V}_{C,\max}$ | $\unit{V}$ | Capacitor voltage | The instantaneous voltage across the capacitor and its amplitude. |
| $\electric{i}_C$, $\electric{I}_{C,\max}$ | $\unit{A}$ | Capacitor current | The instantaneous capacitor current and its amplitude. |
| $\signal{\phi}$ | $\unit{rad}$ | Phase | The phase offset of a sinusoid or the phase difference between two oscillations. |
| $\circuit{X}_C$ | $\unit{\Omega}$ | Capacitive reactance | The ratio of voltage amplitude to current amplitude for the capacitor. |
| $\electric{v}_L$, $\electric{V}_L$ | $\unit{V}$ | Inductor voltage | The instantaneous voltage across the inductor and its amplitude. |
| $\electric{i}_L$, $\electric{I}_{L,\max}$ | $\unit{A}$ | Inductor current | The instantaneous current through the inductor and its amplitude. |
| $\circuit{X}_L$ | $\unit{\Omega}$ | Inductive reactance | The ratio of voltage amplitude to current amplitude for the inductor. |
| $\electric{I}_p$ | $\unit{A}$ | Peak current | Current amplitude in the AC comparison table. |
| $\electric{V}_p$ | $\unit{V}$ | Peak voltage | Voltage amplitude in the AC comparison table. |
| $\signal{k}$ | $\unit{rad\,m^{-1}}$ | Wave number | Spatial rate of change of phase. |
| $\signal{\lambda}$ | $\unit{m}$ | Wavelength | Spatial period of the wave. |
| $\electric{E}_0$, $\electric{\vec E}_0$ | $\unit{V\,m^{-1}}$ | Electric-field amplitude | Scalar or vector amplitude in the sinusoidal wave solution. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Speed of light in vacuum | Propagation speed obtained from Maxwell’s equations. |
| $\magnetic{\mu}$ | $\unit{T\,m\,A^{-1}}$ | Permeability | Magnetic response parameter for the medium. |
| $\magnetic{B}_0$ | $\unit{T}$ | Magnetic-field amplitude | Peak magnetic field of the traveling wave. |
| $\signal{\phi}_0$ | $\unit{rad}$ | Phase constant | Phase of the traveling wave at the reference position and time. |
| $\energy{\vec S}$ | $\unit{W\,m^{-2}}$ | Poynting vector | Energy flux of the electromagnetic field. |
| $\energy{I}$ | $\unit{W\,m^{-2}}$ | Intensity | Time-averaged energy flux magnitude. |
| $\mechanical{p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | Radiation transfers momentum when absorbed or reflected. |
| $\mechanical{p}_{\mathrm{rad}}$ | $\unit{Pa}$ | Radiation pressure | Force per unit area exerted by incident light. |
| $\energy{E}_{\mathrm{abs}}$ | $\unit{J}$ | Absorbed energy | Energy transferred to the surface by the incident light. |
| $\mechanical{D}_i$ | $\unit{m}$ | Wave displacement | Displacement of wave $i$ in the superposition example. |
| $\mechanical{D}_{0i}$ | $\unit{m}$ | Displacement amplitude | Peak displacement of wave $i$. |
| $\Delta\mechanical{r}$ | $\unit{m}$ | Path length difference | Difference in distance traveled by the two interfering waves. |
| $\mechanical{v}_{\mathrm{rms}}$ | $\unit{m\,s^{-1}}$ | Root-mean-square speed | Thermal speed used to estimate the atom’s initial speed. |
| $\thermal{T}$ | $\unit{K}$ | Absolute temperature | Temperature in the thermal speed estimate. |
| $\thermal{k}_{\mathrm B}$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | Relates temperature to energy per particle. |
| $\electric{E}_{\mathrm{rms}}$ | $\unit{V\,m^{-1}}$ | Root-mean-square electric field | Field inferred from the time-averaged intensity. |
| $\magnetic{B}_{\mathrm{rms}}$ | $\unit{T}$ | Root-mean-square magnetic field | Magnetic counterpart of the electric RMS field. |
| $\signal{n}$ | 1 | Refractive index | Ratio of the speed of light in vacuum to its phase speed in the medium. |
| $\mechanical{f}$ | $\unit{m}$ | Focal length | Signed distance to the focus of the lens. |
| $\mechanical{s}$, $\mechanical{o}$, $\mechanical{s}_o$ | $\unit{m}$ | Object distance | Signed distance from the lens to the object. |
| $\mechanical{s}'$, $\mechanical{i}$, $\mechanical{s}_i$ | $\unit{m}$ | Image distance | Signed distance from the lens to the image. |
| $\mechanical{h}$, $\mechanical{y}_o$ | $\unit{m}$ | Object height | Height of the object above the optical axis. |
| $\mechanical{h}'$, $\mechanical{y}_i$ | $\unit{m}$ | Image height | Signed height of the image relative to the optical axis. |
| $\mechanical{M}$ | 1 | Transverse magnification | Signed ratio of image height to object height. |
| $\mechanical{R}_1$, $\mechanical{R}_2$ | $\unit{m}$ | Lens surface radii of curvature | Signed radii in the lensmaker’s equation. |
