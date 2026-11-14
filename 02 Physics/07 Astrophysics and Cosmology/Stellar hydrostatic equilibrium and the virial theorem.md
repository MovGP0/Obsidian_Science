---
title: "Stellar hydrostatic equilibrium and the virial theorem"
---

> [!TLDR]
> Use spherical stellar models to relate pressure, gravity, internal energy, and the timescales of stellar equilibrium.

Physics 241B, Stellar Astrophysics with Prof. Kev.

## 1.1 Stellar interiors

## Worked lecture material

Stars are essentially *spherical cows*. In this model, the star is:

- Nonmagnetic
- Nonrotating
- Single

The local gravity at spherical radius $\mechanical{r}$ is

$$
\mechanical{g}(\mechanical{r})
= \frac{\mechanical{G}\mechanical{M}_r}{\mechanical{r}^2}
= 2.74 \times 10^4
  \left(\frac{\mechanical{M}_r}{\mechanical{M}_\odot}\right)
  \left(\frac{\mechanical{r}}{\mechanical{R}_\odot}\right)^{-2}
  \,\unit{cm\,s^{-2}}.
$$

$$
\begin{aligned}
\mechanical{M}_\odot &= 1.9891 \times 10^{30}\,\unit{kg},\\
\energy{L}_\odot &= 3.847 \times 10^{26}\,\unit{W}
                 = 3.847 \times 10^{33}\,\unit{erg\,s^{-1}},\\
10^{-7}\,\unit{J} &= 1\,\unit{erg},\\
\mechanical{R}_\odot &= 6.96 \times 10^7\,\unit{km}.
\end{aligned}
$$

> [!note]
> The source writes the solar radius with an exponent of $7$. The surface gravity on this page and the gravitational energy scale on [[#Internal energy|the section on Internal energy]] give about $7.0 \times 10^5\,\unit{km}$ when combined.

$$
\begin{aligned}
\mechanical{R}_\oplus &= 6371\,\unit{km},\\
\mechanical{M}_\oplus &= 5.97 \times 10^{24}\,\unit{kg}.
\end{aligned}
$$

For a thin spherical shell,

$$
\mechanical{M}_{r+\mathrm{d}r}-\mechanical{M}_r
= \mathrm{d}\mechanical{M}_r
= \mechanical{\rho}(\mechanical{r})\,4\pi\mechanical{r}^{2}\,\mathrm{d}\mechanical{r},
$$

so

$$
\mechanical{M}_r
= \int_0^{\mechanical{r}}4\pi\mechanical{r}'^{\,2}\mechanical{\rho}\,\mathrm{d}\mechanical{r}'.
$$

Consider a $\quantity{1}{cm^2}$ patch on the surface of the shell. The sketch shows the patch on the sphere and labels its area.

$$
\begin{aligned}
\mathrm{d}\mechanical{F}
&= \mathrm{d}\mechanical{M}_r\,\mechanical{a}
 = \mechanical{\rho}\,\mathrm{d}\mechanical{V}\,\mechanical{g}
 = \mechanical{A}\mechanical{\rho}\mechanical{g}\,\mathrm{d}\mechanical{r},\\
\mathrm{d}\mechanical{F}
&= \mechanical{A}\mechanical{\rho}
   \frac{\mechanical{G}\mechanical{M}_r}{\mechanical{r}^{2}}
   \,\mathrm{d}\mechanical{r},
\qquad
\mathrm{d}\mechanical{V} = \mechanical{A}\,\mathrm{d}\mechanical{r}.
\end{aligned}
$$

Here $\mathrm{d}\mechanical{M}_r$ in the force calculation is the mass of the patch. The gravitational force acts on the patch, but the pressure difference holds it in place. The sketch shows the pressure force $\Delta\mechanical{P}\,\mechanical{A}$ acting up and the weight $\mechanical{g}\,\mathrm{d}\mechanical{M}_r$ acting down. Beside the sketch, the weight per unit area is

$$
\mechanical{\rho}\mechanical{g}\,\mathrm{d}\mechanical{r}
= \mechanical{\rho}\frac{\mechanical{G}\mechanical{M}}{\mechanical{r}^2}\,\mathrm{d}\mechanical{r}.
$$

##### Pressure differential

$$
\mechanical{P}(\mechanical{r}) - \mechanical{P}(\mechanical{r}+\mathrm{d}\mechanical{r})
= -\frac{\mathrm{d}\mechanical{P}}{\mathrm{d}\mechanical{r}}\,\mathrm{d}\mechanical{r}.
$$

The radial equation of motion for the patch, per unit area, is

$$
\mechanical{\rho}\ddot{\mechanical{r}}\,\mathrm{d}\mechanical{r}
= -\frac{\mechanical{G}\mechanical{M}_r}{\mechanical{r}^2}\,
    \mechanical{\rho}\,\mathrm{d}\mechanical{r}
  -\frac{\mathrm{d}\mechanical{P}}{\mathrm{d}\mechanical{r}}\,\mathrm{d}\mechanical{r}.
$$

Cancel $\mathrm{d}\mechanical{r}$ and set $\ddot{\mechanical{r}}=0$ to obtain the **equation of hydrostatic equilibrium**.

$$
\boxed{\frac{\mathrm{d}\mechanical{P}}{\mathrm{d}\mechanical{r}}
= -\frac{\mechanical{G}\mechanical{M}_r\mechanical{\rho}}{\mechanical{r}^2}
= -\mechanical{g}\mechanical{\rho}}
$$

For $\mechanical{g}>0$ and positive density $\mechanical{\rho}$, the pressure decreases outward, so $\mathrm{d}\mechanical{P}/\mathrm{d}\mechanical{r}<0$.

##### Equilibrium of the whole star

The notes describe an integral quantity for the star that is minimized over a family of configurations. The gravitational potential energy $\energy{\Omega}$ is the energy associated with assembling the star.

Consider adding a mass element $\mathrm{d}\mechanical{M}_r$ to $\mechanical{M}_r$. At a distance $\mechanical{r}'$, the gravitational force has magnitude $(\mechanical{G}\mechanical{M}_r/\mechanical{r}'^{\,2})\,\mathrm{d}\mechanical{M}_r$. Over the displacement from $\mechanical{r}'$ to $\mechanical{r}'+\mathrm{d}\mechanical{r}'$, use $\energy{W}=\mechanical{F}\mechanical{d}$ with $\mechanical{F}=\mechanical{m}\mechanical{a}$.

$$
\begin{aligned}
\mathrm{d}\energy{\Omega}
&= -\int_{\mechanical{r}}^\infty
     \frac{\mechanical{G}\mechanical{M}_r}{\mechanical{r}'^{\,2}}\,
     \mathrm{d}\mechanical{M}_r\,\mathrm{d}\mechanical{r}'\\
&= -\mechanical{G}\mechanical{M}_r\,\mathrm{d}\mechanical{M}_r
     \left[-\frac{1}{\mechanical{r}'}\right]_{\mechanical{r}'=\mechanical{r}}^{\mechanical{r}'=\infty}\\
&= \mechanical{G}\mechanical{M}_r\,\mathrm{d}\mechanical{M}_r
     \left[\frac{1}{\infty}-\frac{1}{\mechanical{r}}\right]\\
&= -\frac{\mechanical{G}\mechanical{M}_r\,\mathrm{d}\mechanical{M}_r}{\mechanical{r}}.
\end{aligned}
$$

$$
\energy{\Omega}
= \int\mathrm{d}\energy{\Omega}
= -\int_0^{\mechanical{M}}\frac{\mechanical{G}\mechanical{M}_r}{\mechanical{r}}\,
  \mathrm{d}\mechanical{M}_r.
$$

To evaluate this integral, we need the mass profile $\mechanical{M}(\mechanical{r})$. By dimensional analysis,

$$
[\energy{\Omega}]=\left[\frac{\mechanical{G}\mechanical{M}^{2}}{\mechanical{R}}\right].
$$

The notes give the scale as $\energy{\Omega}=q\mechanical{G}\mechanical{M}^2/\mechanical{R}$, with $q$ a constant. For uniform density, $q=3/5$. For a star whose density is highest at the center and decreases outward, $q>3/5$.

> [!note]
> The positive expression for $\energy{\Omega}$ on this line gives its magnitude. The integral above gives the signed energy.

For the Sun,

$$
\frac{\mechanical{G}\mechanical{M}_\odot^{2}}{\mechanical{R}_\odot}
\approx 3.8\times 10^{48}\,\unit{erg}.
$$

Divide by the solar luminosity to obtain a time scale.

$$
\frac{\mechanical{G}\mechanical{M}_\odot^{2}/\mechanical{R}_\odot}{\energy{L}_\odot}
\approx 3\times10^{7}\,\unit{yr}.
$$

##### Internal energy

The specific energy $\energy{E}$ is the internal energy per unit mass. The total energy is the internal energy plus the gravitational potential energy.

$$
\energy{W}
= \int_{\mechanical{M}}\energy{E}\,\mathrm{d}\mechanical{M}_r+\energy{\Omega}
= \energy{U}+\energy{\Omega}.
$$

For an adiabatic variation at equilibrium,

$$
(\delta\energy{W})_{\mathrm{adiabatic}}
= 0
= (\delta\energy{U})_{\mathrm{adiabatic}}
+ (\delta\energy{\Omega})_{\mathrm{adiabatic}}.
$$

In the Lagrangian description, the mass coordinate $\mechanical{M}_r$ remains fixed while quantities such as density $\mechanical{\rho}$ and temperature $\thermal{T}$ can change.

$$
\energy{U}
\longrightarrow \energy{U}+\delta\energy{U}
= \energy{U}+\delta\int_{\mechanical{M}}\energy{E}\,\mathrm{d}\mechanical{M}_r
= \energy{U}+\int_{\mechanical{M}}\delta\energy{E}\,\mathrm{d}\mechanical{M}_r.
$$

For an infinitesimal reversible adiabatic variation, $\delta\thermal{S}=0$. The first law per unit mass is

$$
\mathrm{d}\thermal{Q}
= \mathrm{d}\energy{E}+\mechanical{P}\,\mathrm{d}\mechanical{V}_\rho
= \thermal{T}\,\mathrm{d}\thermal{S}.
$$

Here $\thermal{Q}$ denotes specific heat transfer, $\energy{E}$ specific energy, and $\thermal{S}$ specific entropy. The specific volume $\mechanical{V}_\rho$ is volume per unit mass and has the units of $1/\mechanical{\rho}$, namely $\unit{cm^3\,g^{-1}}$.

$$
\begin{aligned}
\delta\thermal{Q}
&= \delta\energy{E}+\mechanical{P}\,\delta\mechanical{V}_\rho
 = \thermal{T}\,\delta\thermal{S}=0,\\
(\delta\energy{E})_{\mathrm{ad}}
&= -\mechanical{P}\,\delta\mechanical{V}_\rho,\\
\delta\energy{U}_{\mathrm{ad}}
&= -\int \mechanical{P}\,\delta\mechanical{V}_\rho\,\mathrm{d}\mechanical{M}_r.
\end{aligned}
$$

$$
\mechanical{V}_\rho
= \frac{\mathrm{d}\bigl(\tfrac43\pi\mechanical{r}^3\bigr)}{\mathrm{d}\mechanical{M}_r}
= \frac{4\pi\mechanical{r}^2\,\mathrm{d}\mechanical{r}}{\mathrm{d}\mechanical{M}_r}.
$$

Under the radial displacement $\delta\mechanical{r}$,

$$
\mechanical{V}_\rho
\longrightarrow
\mechanical{V}_\rho+\delta\mechanical{V}_\rho
= \frac{\mathrm{d}\left[\tfrac43\pi(\mechanical{r}+\delta\mechanical{r})^3\right]}{\mathrm{d}\mechanical{M}_r}.
$$

Expand the displaced radius in the volume formula.

$$
\begin{aligned}
(\mechanical{r}+\delta\mechanical{r})^3
&= \mechanical{r}^3+3\mechanical{r}^2\delta\mechanical{r}
   +3\mechanical{r}(\delta\mechanical{r})^2+(\delta\mechanical{r})^3\\
&\approx \mechanical{r}^3+3\mechanical{r}^2\delta\mechanical{r}.
\end{aligned}
$$

The first-order change in specific volume is

$$
\delta\mechanical{V}_\rho
= \frac{\mathrm{d}(4\pi\mechanical{r}^2\delta\mechanical{r})}{\mathrm{d}\mechanical{M}_r}.
$$

The notes review the first law with all extensive quantities expressed per unit mass.

$$
\begin{aligned}
\mathrm{d}\thermal{Q}
&= \mathrm{d}\energy{E}+\mechanical{P}\,\mathrm{d}\mechanical{V}_\rho
 = \thermal{T}\,\mathrm{d}\thermal{S},\\
\delta\thermal{Q}
&= 0 = \thermal{T}\,\delta\thermal{S}
 = \delta\energy{E}+\mechanical{P}\,\delta\mechanical{V}_\rho.
\end{aligned}
$$

$$
\mechanical{V}_\rho\longrightarrow
\mechanical{V}_\rho+\delta\mechanical{V}_\rho
=\mechanical{V}_\rho+
\frac{\mathrm{d}(4\pi\mechanical{r}^{2}\delta\mechanical{r})}{\mathrm{d}\mechanical{M}_r}.
$$

The adiabatic change in internal energy is

$$
\delta\energy{U}_{\mathrm{adiabatic}}
= -\int_{\mechanical{M}}\mechanical{P}\,\delta\mechanical{V}_\rho\,\mathrm{d}\mechanical{M}_r
= -\int_0^{\mechanical{M}}\mechanical{P}\,
  \frac{\mathrm{d}(4\pi\mechanical{r}^{2}\delta\mechanical{r})}
       {\mathrm{d}\mechanical{M}_r}\,\mathrm{d}\mechanical{M}_r.
$$

The surface pressure is $\mechanical{P}_s=\mechanical{P}(\mechanical{M}_r=\mechanical{M})=0$. The displacement at the center is $\delta\mechanical{r}(\mechanical{M}_r=0)=0$.

##### Integration by parts

$$
\int uv\,\mathrm{d}x
= u\int v\,\mathrm{d}x - \int\left(u'\int v\,\mathrm{d}x\right)\mathrm{d}x.
$$

$$
\begin{aligned}
\int_0^{\mechanical{M}}\mechanical{P}\,
   \frac{\mathrm{d}(4\pi\mechanical{r}^{2}\delta\mechanical{r})}
        {\mathrm{d}\mechanical{M}_r}\,\mathrm{d}\mechanical{M}_r
={}& \left[\mechanical{P}\,4\pi\mechanical{r}^2\delta\mechanical{r}\right]_0^{\mechanical{M}}\\
&-\int_0^{\mechanical{M}}
   \frac{\mathrm{d}\mechanical{P}}{\mathrm{d}\mechanical{M}_r}
   \,4\pi\mechanical{r}^{2}\delta\mechanical{r}\,\mathrm{d}\mechanical{M}_r.
\end{aligned}
$$

The boundary term vanishes. The remaining integral is the term used to compute the change in the star's total internal energy.

The page begins with the adiabatic variation of the internal energy.

$$
(\delta\energy{U})_{\mathrm{ad}}
= -\int_{\mechanical{M}}\frac{\mathrm{d}\mechanical{P}}{\mathrm{d}\mechanical{M}_r}\,
  4\pi\mechanical{r}^2\delta\mechanical{r}\,\mathrm{d}\mechanical{M}_r.
$$

> [!note]
> The source writes a minus sign here. The minus sign before the integral on [[#Integration by parts|the section on Integration by parts]] and the minus sign from integration by parts give a plus sign, as used in the stability equation below.

For the gravitational energy, expand to first order in the radial displacement.

$$
\begin{aligned}
\energy{\Omega}+\delta\energy{\Omega}
&= -\int_{\mechanical{M}}\frac{\mechanical{G}\mechanical{M}_r}
                  {\mechanical{r}+\delta\mechanical{r}}\,\mathrm{d}\mechanical{M}_r\\
&\approx \energy{\Omega}+\int_{\mechanical{M}}\frac{\mechanical{G}\mechanical{M}_r}
                  {\mechanical{r}^2}\,\delta\mechanical{r}\,\mathrm{d}\mechanical{M}_r.
\end{aligned}
$$

The source repeats the last expression once with the subscript on $\mechanical{M}_r$ omitted.

##### Stability

$$
0 = (\delta\energy{W})_{\mathrm{adiabatic}}
= \int_{\mechanical{M}}\left[
    \frac{\mathrm{d}\mechanical{P}}{\mathrm{d}\mechanical{M}_r}4\pi\mechanical{r}^2
    +\frac{\mechanical{G}\mechanical{M}_r}{\mechanical{r}^2}
  \right]\delta\mechanical{r}\,\mathrm{d}\mechanical{M}_r.
$$

This gives the Lagrangian form of the equation of hydrostatic equilibrium.

$$
\boxed{
\frac{\mathrm{d}\mechanical{P}}{\mathrm{d}\mechanical{M}_r}
= -\frac{\mechanical{G}\mechanical{M}_r}{4\pi\mechanical{r}^4}
}
$$

With $\mathrm{d}\mechanical{M}_r=4\pi\mechanical{r}^2\mechanical{\rho}(\mechanical{r})\,\mathrm{d}\mechanical{r}$,

$$
\frac{\mathrm{d}\mechanical{P}}
 {4\pi\mechanical{r}^2\mechanical{\rho}(\mechanical{r})\,\mathrm{d}\mechanical{r}}
= -\frac{\mechanical{G}\mechanical{M}_r}{4\pi\mechanical{r}^4}.
$$

Cancel the common factors to recover the radial form.

$$
\boxed{
\frac{\mathrm{d}\mechanical{P}}{\mathrm{d}\mechanical{r}}
= -\frac{\mechanical{G}\mechanical{M}_r}{\mechanical{r}^2}\mechanical{\rho}(\mechanical{r})
}
$$

##### Virial theorem

$$
\begin{aligned}
\frac{\mathrm{d}}{\mathrm{d}t}\sum_i \mechanical{\vec{p}}_i\cdot\mechanical{\vec{r}}_i
&= \frac{\mathrm{d}}{\mathrm{d}t}\sum_i \mechanical{m}_i\,\dot{\mechanical{\vec{r}}}_i\cdot\mechanical{\vec{r}}_i\\
&= \frac12\frac{\mathrm{d}}{\mathrm{d}t}\sum_i\frac{\mathrm{d}}{\mathrm{d}t}
   \bigl(\mechanical{m}_i\mechanical{r}_i^2\bigr)\\
&= \frac12\frac{\mathrm{d}^2\mechanical{I}}{\mathrm{d}t^2}.
\end{aligned}
$$

Another way to do the derivation is to apply the product rule directly.

$$
\frac{\mathrm{d}}{\mathrm{d}t}\sum_i \mechanical{\vec{p}}_i\cdot\mechanical{\vec{r}}_i
= \sum_i \underbrace{\frac{\mathrm{d}\mechanical{\vec{p}}_i}{\mathrm{d}t}}_{\mechanical{\vec{F}}_i}
       \cdot\mechanical{\vec{r}}_i
 +\sum_i \mechanical{\vec{p}}_i\cdot\frac{\mathrm{d}\mechanical{\vec{r}}_i}{\mathrm{d}t}.
$$

The second sum is $\sum_i\mechanical{m}_i\mechanical{v}_i^2=2\energy{K}$. Thus

$$
\frac12\frac{\mathrm{d}^2\mechanical{I}}{\mathrm{d}t^2}
=2\energy{K}+
  \underbrace{\sum_i\mechanical{\vec{F}}_i\cdot\mechanical{\vec{r}}_i}_
             {\text{virial of Clausius}}.
$$

The handwritten aside next to Clausius reads “no idea who this is.”

$$
\sum_i\mechanical{\vec{F}}_i\cdot\mechanical{\vec{r}}_i
=\sum_{i<j}\bigl(
 \mechanical{\vec{F}}_{ij}\cdot\mechanical{\vec{r}}_i+
 \mechanical{\vec{F}}_{ji}\cdot\mechanical{\vec{r}}_j\bigr).
$$

The forces in each pair are equal and opposite, $\mechanical{\vec{F}}_{ij}=-\mechanical{\vec{F}}_{ji}$. The sketch shows three particles at the vertices of a triangle, with one arrow from each particle toward each of the other two. Each arrow is labeled by its ordered pair of particle indices.

> [!note]
> The source repeats the subscript $ij$ on both sides of the force relation. The pair sum and the sketch indicate $ji$ on the right.

$$
\mechanical{\vec{F}}_{ij}
=-\frac{\mechanical{G}\mechanical{m}_i\mechanical{m}_j}{\mechanical{r}_{ij}^3}
 \bigl(\mechanical{\vec{r}}_i-\mechanical{\vec{r}}_j\bigr),
\qquad
\mechanical{r}_{ij}=\left|\mechanical{\vec{r}}_i-\mechanical{\vec{r}}_j\right|.
$$

$$
\begin{aligned}
\sum_{i<j}\mechanical{\vec{F}}_{ij}\cdot
 \bigl(\mechanical{\vec{r}}_i-\mechanical{\vec{r}}_j\bigr)
={}&\sum_{i<j}\left[-\frac{\mechanical{G}\mechanical{m}_i\mechanical{m}_j}
                            {\mechanical{r}_{ij}^{3}}\right]\\
&{}\quad\times
 \underbrace{\bigl(\mechanical{\vec{r}}_i-\mechanical{\vec{r}}_j\bigr)\cdot
             \bigl(\mechanical{\vec{r}}_i-\mechanical{\vec{r}}_j\bigr)}_{\mechanical{r}_{ij}^{2}}.
\end{aligned}
$$

The bracket on the right is empty in the source. The expression in it follows from the preceding force law.

The pair sum reduces to the virial, which here is also the mutual gravitational potential energy.

$$
\sum_{i<j}\mechanical{\vec{F}}_{ij}\cdot
  \bigl(\mechanical{\vec{r}}_i-\mechanical{\vec{r}}_j\bigr)
= -\sum_{i<j}\frac{\mechanical{G}\mechanical{m}_i\mechanical{m}_j}{\mechanical{r}_{ij}}
= \energy{\Omega}.
$$

##### The virial theorem

$$
\boxed{\frac12\frac{\mathrm{d}^2\mechanical{I}}{\mathrm{d}t^2}=2\energy{K}+\energy{\Omega}}
$$

When the left-hand side is zero, the common form is $\boxed{\energy{K}=-\tfrac12\energy{\Omega}}$.

The notes ask whether internal energy $\energy{U}$ equals kinetic energy $\energy{K}$.

$$
2\energy{K}=\sum_i\mechanical{m}_i\mechanical{v}_i^2
=\sum_i\mechanical{\vec{p}}_i\cdot\mechanical{\vec{v}}_i.
$$

The last sum is labeled “momentum transfer.” The pressure is

$$
\mechanical{P}
=\frac13\int n(\mechanical{\vec{p}})\,
  \mechanical{\vec{p}}\cdot\mechanical{\vec{v}}\,\mathrm{d}^3\mechanical{\vec{p}}.
$$

$$
2\energy{K}=3\int_{\mechanical{V}}\mechanical{P}\,\mathrm{d}\mechanical{V}.
$$

Use $\mathrm{d}\mechanical{M}_r=\mechanical{\rho}\,\mathrm{d}\mechanical{V}=\mechanical{\rho}\,\mathrm{d}(\tfrac43\pi\mechanical{r}^3)$ to change the integration variable.

$$
2\energy{K}=3\int_{\mechanical{M}}\frac{\mechanical{P}}{\mechanical{\rho}}\,
  \mathrm{d}\mechanical{M}_r.
$$

$$
\boxed{\frac12\frac{\mathrm{d}^2\mechanical{I}}{\mathrm{d}t^2}
=\int_{\mechanical{M}}\frac{3\mechanical{P}}{\mechanical{\rho}}\,
   \mathrm{d}\mechanical{M}_r+\energy{\Omega}}
$$

##### Applications of the virial theorem

$$
\mechanical{P}=(\thermal{\gamma}-1)\underbrace{\mechanical{\rho}\energy{E}}_{\text{energy density}},
\qquad
\mechanical{P}=w\energy{\varepsilon}.
$$

Here $\energy{E}$ is the specific energy. For a monatomic gas, $\thermal{\gamma}=5/3$ and $\mechanical{P}=\tfrac23\mechanical{\rho}\energy{E}$. For a relativistic gas, $\thermal{\gamma}=4/3$ and $\mechanical{P}=\tfrac13\mechanical{\rho}\energy{E}$.

The source writes

$$
\energy{K}=\frac23(\thermal{\gamma}-1)\energy{U},
\qquad
\energy{U}=\int_{\mechanical{M}}\energy{E}\,\mathrm{d}\mechanical{M}_r.
$$

It then gives $\energy{K}=\energy{U}$ for $\thermal{\gamma}=5/3$.

> [!note]
> The preceding pressure integral gives the coefficient $3/2$ in place of $2/3$. This agrees with $\energy{K}=\energy{U}$ for $\thermal{\gamma}=5/3$.

$$
\begin{aligned}
\frac12\frac{\mathrm{d}^2\mechanical{I}}{\mathrm{d}t^2}
&=3(\thermal{\gamma}-1)\energy{U}+\energy{\Omega}\\
&=3(\thermal{\gamma}-1)\energy{W}-(3\thermal{\gamma}-4)\energy{\Omega},
\qquad \energy{W}=\energy{U}+\energy{\Omega}.
\end{aligned}
$$

When $\mathrm{d}^2\mechanical{I}/\mathrm{d}t^2=0$,

$$
\energy{W}=\frac{3\thermal{\gamma}-4}{3(\thermal{\gamma}-1)}\energy{\Omega}.
$$

The notes give the condition $\thermal{\gamma}>4/3$ and summarize it with the aside “relativistic stars are bad.”

##### 1.3.2 Kelvin–Helmholtz time scale

$$
\Delta\energy{W}
= \frac{3\thermal{\gamma}-4}{3(\thermal{\gamma}-1)}\Delta\energy{\Omega}
= \frac12\Delta\energy{\Omega}
\qquad \text{for } \thermal{\gamma}=\frac53.
$$

The line ends with $=\Delta\energy{U}$ in the source. The sign of $\Delta\energy{U}$ is given separately below.

Recall $\energy{\Omega}=-q\mechanical{G}\mechanical{M}^2/\mechanical{R}$. At fixed mass and $q$, the total energy change for $\thermal{\gamma}=5/3$ is

$$
\Delta\energy{W}=\frac{\Delta\energy{\Omega}}2
=+\frac{q}{2}\frac{\mechanical{G}\mechanical{M}^2}{\mechanical{R}^2}\,\Delta\mechanical{R}.
$$

The internal energy increases during contraction.

$$
\Delta\energy{U}
=-\frac{1}{3(\thermal{\gamma}-1)}\Delta\energy{\Omega}>0.
$$

$$
\begin{aligned}
\thermal{\gamma}=\frac53
&\implies \Delta\energy{U}=-\frac{\Delta\energy{\Omega}}{2},\\
\thermal{\gamma}=\frac43
&\implies \Delta\energy{U}=-\Delta\energy{\Omega}.
\end{aligned}
$$

The luminosity from contraction is

$$
\boxed{\energy{L}=-\frac{\mathrm{d}\energy{W}}{\mathrm{d}t}
=-\frac{q}{2}\frac{\mechanical{G}\mechanical{M}^2}{\mechanical{R}^2}
          \frac{\mathrm{d}\mechanical{R}}{\mathrm{d}t}}
$$

$$
t_{\mathrm{KH}}
\approx \frac{q}{2}\frac{\mechanical{G}\mechanical{M}^2}{\energy{L}\mechanical{R}}
\approx 2\times10^7\,\unit{yr}
  \left(\frac{\mechanical{M}}{\mechanical{M}_\odot}\right)^2
  \left(\frac{\energy{L}}{\energy{L}_\odot}\right)^{-1}
  \left(\frac{\mechanical{R}}{\mechanical{R}_\odot}\right)^{-1}.
$$

For the Sun, $t_{\mathrm{KH}}\approx 2\times10^7\,\unit{yr}$.

## Source

Kyle Kabasares, *Stellar Astrophysics (Physics 241B, UC Irvine 2019)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{g}$ | $\unit{cm\,s^{-2}}$ | Gravitational acceleration | The local acceleration due to the star's gravity. |
| $\mechanical{r}$ | $\unit{cm}$ | Radial distance | The distance from the center of the star. |
| $\mechanical{G}$ | $\unit{m^3\,kg^{-1}\,s^{-2}}$ | Gravitational constant | The proportionality constant in Newton's law of gravitation. |
| $\mechanical{M}_r$ | $\unit{kg}$ | Enclosed mass | The stellar mass within radius $\mechanical{r}$. |
| $\mechanical{M}_\odot$ | $\unit{kg}$ | Solar mass | The mass of the Sun. |
| $\energy{L}_\odot$ | $\unit{W}$ | Solar luminosity | The power radiated by the Sun. |
| $\mechanical{R}_\odot$ | $\unit{km}$ | Solar radius | The radius of the Sun. |
| $\mechanical{R}_\oplus$ | $\unit{km}$ | Earth radius | The radius of Earth. |
| $\mechanical{M}_\oplus$ | $\unit{kg}$ | Earth mass | The mass of Earth. |
| $\mechanical{\rho}$ | $\unit{g\,cm^{-3}}$ | Mass density | The mass per unit volume at the given radius. |
| $\mathrm{d}\mechanical{M}_r$ | $\unit{g}$ | Mass element | The mass of the thin shell or the patch, according to context. |
| $\mechanical{F}$ | $\unit{dyn}$ | Force | The gravitational force on the patch. |
| $\mechanical{a}$ | $\unit{cm\,s^{-2}}$ | Acceleration | The acceleration due to gravity in the force calculation. |
| $\mechanical{V}$ | $\unit{cm^3}$ | Volume | The volume occupied by the shell or patch. |
| $\mechanical{A}$ | $\unit{cm^2}$ | Area | The surface area of the patch. |
| $\mechanical{M}$ | $\unit{g}$ | Mass | The enclosed mass in the expression beside the force sketch. |
| $\mechanical{P}$ | $\unit{dyn\,cm^{-2}}$ | Pressure | The local force per unit area exerted by the stellar material. |
| $\Delta\mechanical{P}$ | $\unit{dyn\,cm^{-2}}$ | Pressure difference | The pressure difference between the two faces of the patch. |
| $\ddot{\mechanical{r}}$ | $\unit{cm\,s^{-2}}$ | Radial acceleration | The acceleration of the patch in the outward radial coordinate. |
| $\energy{\Omega}$ | $\unit{erg}$ | Gravitational potential energy | The potential energy of the assembled star. |
| $\energy{W}$ | $\unit{erg}$ | Work | The energy transferred by a force acting through a displacement. |
| $\mechanical{d}$ | $\unit{cm}$ | Displacement | The distance through which the force acts in the work calculation. |
| $\mechanical{m}$ | $\unit{g}$ | Mass | The mass acted on by the force. |
| $\mechanical{M}$ | $\unit{g}$ | Total stellar mass | The upper limit of the integral over the stellar mass. |
| $\mechanical{R}$ | $\unit{cm}$ | Stellar radius | The radius of the star used in the energy scale. |
| $q$ | 1 | Gravitational energy coefficient | The factor that depends on the stellar density profile. |
| — | $\unit{yr}$ | Gravitational time scale | The energy scale divided by the luminosity. |
| $\energy{E}$ | $\unit{erg\,g^{-1}}$ | Specific internal energy | The internal energy per unit mass. |
| $\energy{U}$ | $\unit{erg}$ | Internal energy | The integral of specific internal energy over stellar mass. |
| $\energy{W}$ | $\unit{erg}$ | Total energy | The sum of internal and gravitational potential energy. |
| $\thermal{T}$ | $\unit{K}$ | Temperature | The local thermodynamic temperature. |
| $\thermal{Q}$ | $\unit{erg\,g^{-1}}$ | Specific heat transfer | The heat transferred per unit mass. |
| $\thermal{S}$ | $\unit{erg\,g^{-1}\,K^{-1}}$ | Specific entropy | The entropy per unit mass. |
| $\mechanical{V}_\rho$ | $\unit{cm^3\,g^{-1}}$ | Specific volume | The volume per unit mass. |
| $\delta\mechanical{r}$ | $\unit{cm}$ | Radial displacement | The change in the radius of a fixed mass shell. |
| $\mechanical{P}_s$ | $\unit{dyn\,cm^{-2}}$ | Surface pressure | The pressure at the outer boundary of the star. |
| $t$ | $\unit{s}$ | Time | The independent variable in the virial calculation. |
| $\mechanical{\vec{p}}_i$ | $\unit{g\,cm\,s^{-1}}$ | Particle momentum | The momentum of particle $i$. |
| $\mechanical{\vec{r}}_i$, $\mechanical{r}_i$ | $\unit{cm}$ | Particle position and radial distance | The position of particle $i$ and its magnitude. |
| $\dot{\mechanical{\vec{r}}}_i$ | $\unit{cm\,s^{-1}}$ | Particle velocity | The rate of change of the position of particle $i$. |
| $\mechanical{I}$ | $\unit{g\,cm^2}$ | Scalar moment of inertia | The sum of particle masses times their squared distances from the origin. |
| $\mechanical{v}_i$ | $\unit{cm\,s^{-1}}$ | Particle speed | The magnitude of the velocity of particle $i$. |
| $\energy{K}$ | $\unit{erg}$ | Kinetic energy | The total kinetic energy of the particles. |
| $\mechanical{\vec{F}}_i$ | $\unit{dyn}$ | Net force | The net force on particle $i$. |
| $\mechanical{\vec{F}}_{ij}$ | $\unit{dyn}$ | Pair force | The force on particle $i$ due to particle $j$. |
| $\mechanical{r}_{ij}$ | $\unit{cm}$ | Particle separation | The distance between particles $i$ and $j$. |
| $\mechanical{\vec{p}}$ | $\unit{g\,cm\,s^{-1}}$ | Momentum | The momentum variable in the pressure integral. |
| $\mechanical{\vec{v}}_i$, $\mechanical{\vec{v}}$ | $\unit{cm\,s^{-1}}$ | Particle velocity | The velocity associated with the particle momentum. |
| $n(\mechanical{\vec{p}})$ | $\unit{cm^{-3}(g\,cm\,s^{-1})^{-3}}$ | Momentum distribution | The number density per unit volume in momentum space. |
| $\thermal{\gamma}$ | 1 | Adiabatic index | The index that relates pressure and energy density in the gas model. |
| $\energy{\varepsilon}$ | $\unit{erg\,cm^{-3}}$ | Energy density | The product of mass density and specific internal energy. |
| $w$ | 1 | Equation-of-state parameter | The ratio of pressure to energy density. |
| $\energy{L}$ | $\unit{erg\,s^{-1}}$ | Stellar luminosity | The rate of energy loss from the contracting star. |
| $t_{\mathrm{KH}}$ | $\unit{yr}$ | Kelvin–Helmholtz time scale | The time over which contraction can supply the luminosity. |
| $\energy{E}$ | $\unit{erg\,cm^{-3}}$ | Thermal energy density | The gas energy per unit volume in the temperature estimate. |
| $n$ | $\unit{cm^{-3}}$ | Particle number density | The number of gas particles per unit volume. |
| — | $\unit{erg\,g^{-1}}$ | Energy released per mass of hydrogen | The energy yield of the conversion from hydrogen to helium. |
| $a$ | $\unit{erg\,cm^{-3}\,K^{-4}}$ | Radiation constant | The constant in the radiation energy density $a\thermal{T}^4$. |
| $\mechanical{v}$ | $\unit{cm\,s^{-1}}$ | Streaming speed | The speed used in the free-streaming distance integral. |
| $V$ | 1 | Visual magnitude | The vertical coordinate in the Hertzsprung-gap sketch. |
| $\mathrm{C}/\mathrm{O}$ | 1 | Carbon-to-oxygen ratio | The composition ratio identified as a source of uncertainty in the cooling calculation. |
| — | $\unit{MeV}$ | Binding energy per nucleon | The energy per nucleon sketched against nuclear mass number. |
| $\energy{E}$ | $\unit{MeV}$ | Electron energy | The energy plotted in the collapse sketch. |
| $\mechanical{R}$ | $\unit{m}$ | Nuclear radius scale | The length scale given with the nuclear density. |
| $\mechanical{v}$ | $\unit{cm\,s^{-1}}$ | Projectile speed | The speed entering the incident flux and rate. |
| $\mechanical{m}$ | $\unit{kg}$ | Reduced mass | The reduced mass of the projectile–target pair. |
| $s$ | $\unit{m}$ | Impact parameter | The transverse offset of the incoming trajectory from the target. |
| $a$ | $\unit{m}$ | Confinement length | The characteristic electron spacing estimated from position uncertainty. |
| $K$ | $\unit{dyn\,cm^3\,g^{-5/3}}$ | Polytropic constant | The coefficient of the density power law for the nonrelativistic gas. |
| $n$ | $\unit{cm^{-3}}$ | Nucleus number density | The nucleus count per volume in the compact-object composition formula. |
| $n$ | 1 | Polytropic index | The index that determines the density profile and the equation-of-state exponent. |
| $a$ | $\unit{m}$ | Polytropic length scale | The factor that converts the normalized coordinate to radius. |
| $2\mechanical{G}\mechanical{M}/(\mechanical{R}c^2)$ | 1 | Relativistic compactness | The Schwarzschild radius expressed as a fraction of the object's radius. |
