---
title: "Stellar Astrophysics (Physics 241B, UC Irvine 2019)"
---

> [!TLDR]
> These notes use hydrostatic equilibrium, energy transport, and composition to describe stellar interiors and estimate how stars evolve.

Source notes by Kyle Kabasares. [[Stellar Astrophysics (Physics 241B, UC Irvine 2019).pdf|Original PDF]].

Transcribed PDF pages 1–78 of 78.

Physics 241B, Stellar Astrophysics with Prof. Kev.

## 1.1 Stellar interiors

### PDF page 1

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
> The source writes the solar radius with an exponent of $7$. The surface gravity on this page and the gravitational energy scale on page 4 give about $7.0 \times 10^5\,\unit{km}$ when combined.

### PDF page 2

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

**Pressure differential**

$$
\mechanical{P}(\mechanical{r}) - \mechanical{P}(\mechanical{r}+\mathrm{d}\mechanical{r})
= -\frac{\mathrm{d}\mechanical{P}}{\mathrm{d}\mechanical{r}}\,\mathrm{d}\mechanical{r}.
$$

### PDF page 3

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

#### Equilibrium of the whole star

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

### PDF page 4

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

**Internal energy**

The specific energy $\energy{E}$ is the internal energy per unit mass. The total energy is the internal energy plus the gravitational potential energy.

$$
\energy{W}
= \int_{\mechanical{M}}\energy{E}\,\mathrm{d}\mechanical{M}_r+\energy{\Omega}
= \energy{U}+\energy{\Omega}.
$$

### PDF page 5

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

### PDF page 6

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

#### Lecture on 2 October 2019

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

**Integration by parts**

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

### PDF page 7

The page begins with the adiabatic variation of the internal energy.

$$
(\delta\energy{U})_{\mathrm{ad}}
= -\int_{\mechanical{M}}\frac{\mathrm{d}\mechanical{P}}{\mathrm{d}\mechanical{M}_r}\,
  4\pi\mechanical{r}^2\delta\mechanical{r}\,\mathrm{d}\mechanical{M}_r.
$$

> [!note]
> The source writes a minus sign here. The minus sign before the integral on page 6 and the minus sign from integration by parts give a plus sign, as used in the stability equation below.

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

**Stability**

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

#### Virial theorem

$$
\begin{aligned}
\frac{\mathrm{d}}{\mathrm{d}t}\sum_i \mechanical{\vec{p}}_i\cdot\mechanical{\vec{r}}_i
&= \frac{\mathrm{d}}{\mathrm{d}t}\sum_i \mechanical{m}_i\,\dot{\mechanical{\vec{r}}}_i\cdot\mechanical{\vec{r}}_i\\
&= \frac12\frac{\mathrm{d}}{\mathrm{d}t}\sum_i\frac{\mathrm{d}}{\mathrm{d}t}
   \bigl(\mechanical{m}_i\mechanical{r}_i^2\bigr)\\
&= \frac12\frac{\mathrm{d}^2\mechanical{I}}{\mathrm{d}t^2}.
\end{aligned}
$$

### PDF page 8

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

### PDF page 9

The pair sum reduces to the virial, which here is also the mutual gravitational potential energy.

$$
\sum_{i<j}\mechanical{\vec{F}}_{ij}\cdot
  \bigl(\mechanical{\vec{r}}_i-\mechanical{\vec{r}}_j\bigr)
= -\sum_{i<j}\frac{\mechanical{G}\mechanical{m}_i\mechanical{m}_j}{\mechanical{r}_{ij}}
= \energy{\Omega}.
$$

**The virial theorem**

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

### PDF page 10

#### Applications of the virial theorem

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

### PDF page 11

#### 1.3.2 Kelvin–Helmholtz time scale

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

### PDF page 12

#### Lecture on 7 October 2019

**Dynamical times**

$$
\energy{W}=\frac{\energy{\Omega}}2\approx
-\frac{\mechanical{G}\mechanical{M}^2}{\mechanical{R}},
\qquad
\energy{W}=\frac{3\thermal{\gamma}-4}{3(\thermal{\gamma}-1)}\energy{\Omega}.
$$

The notes write $\thermal{\gamma}=4/3$ above the following steps.

$$
\frac12\frac{\mathrm{d}^2\mechanical{I}}{\mathrm{d}t^2}
=3(\thermal{\gamma}-1)\energy{U}+\energy{\Omega}
=\energy{W}
=\frac{\energy{\Omega}}{2}.
$$

> [!note]
> These lines combine two cases. The first equality to $\energy{W}$ applies when $\thermal{\gamma}=4/3$. The relation $\energy{W}=\energy{\Omega}/2$ follows from the equilibrium formula for $\thermal{\gamma}=5/3$. The following time-scale estimate uses the magnitude of the energy scale.

$$
\frac{\mathrm{d}^2\mechanical{I}}{\mathrm{d}t^2}
\sim -\frac{\mechanical{G}\mechanical{M}^2}{\mechanical{R}},
\qquad
\mechanical{I}\sim\mechanical{M}\mechanical{R}^2.
$$

$$
\frac{\mechanical{I}}{\tau_{\mathrm{dyn}}^2}
\sim\frac{\mechanical{M}\mechanical{R}^2}{\tau_{\mathrm{dyn}}^2}
\sim\frac{\mechanical{G}\mechanical{M}^2}{\mechanical{R}},
$$

which gives

$$
\tau_{\mathrm{dyn}}
\approx \left(\frac{\mechanical{R}^3}{\mechanical{G}\mechanical{M}}\right)^{1/2}
\approx \left(\frac{1}{\mechanical{G}\langle\mechanical{\rho}\rangle}\right)^{1/2}.
$$

The solar dynamical time scale is approximately $\quantity{1}{h}$, much shorter than $t_{\mathrm{KH}}\approx 2\times10^7\,\unit{yr}$.

**Temperature estimates**

Here $\energy{E}$ denotes energy per unit volume.

$$
\energy{E}=\frac32 n\thermal{k}\thermal{T}
=\frac32\frac{\mechanical{\rho}N_A\thermal{k}\thermal{T}}{\mu}
\qquad (\unit{erg\,cm^{-3}}).
$$

### PDF page 13

The relation between mass density and particle number density gives the ideal-gas pressure.

$$
\mechanical{\rho}=\frac{\mu n}{N_A},
\qquad
\mechanical{P}=n\thermal{k}\thermal{T}
=\frac{\mechanical{\rho}N_A\thermal{k}\thermal{T}}{\mu}.
$$

In the uniform model, $\mechanical{\rho}\mechanical{V}=\mechanical{M}$, so

$$
\energy{E}\mechanical{V}=\energy{U}=-\frac{\energy{\Omega}}{2},
\qquad
\energy{U}=\frac32\frac{\mechanical{M}N_A\thermal{k}\thermal{T}}{\mu}.
$$

For a gas with $\thermal{\gamma}=5/3$ and uniform density,

$$
\energy{\Omega}=-\frac35\frac{\mechanical{G}\mechanical{M}^2}{\mechanical{R}},
\qquad
\energy{U}=+\frac3{10}\frac{\mechanical{G}\mechanical{M}^2}{\mechanical{R}}
=\frac32\frac{\mechanical{M}N_A\thermal{k}\thermal{T}}{\mu}.
$$

Then

$$
\thermal{T}
=\frac{\mechanical{G}\mechanical{M}}{5\mechanical{R}}
 \frac{\mu}{N_A\thermal{k}}
=4.09\times10^6
  \left(\frac{\mu}{\unit{g\,mol^{-1}}}\right)
  \left(\frac{\mechanical{M}}{\mechanical{M}_\odot}\right)^{2/3}
  \left(\frac{\mechanical{\rho}}{\unit{g\,cm^{-3}}}\right)^{1/3}\,\unit{K}.
$$

The source uses numerical CGS values for $\mu$ and $\mechanical{\rho}$ in the last form. The sketch below plots $\log\thermal{T}$ against $\log\mechanical{\rho}$. The upper curve represents $5\mechanical{M}_\odot$ and the lower curve represents $1\mechanical{M}_\odot$. The dashed line separates the regions labeled “pressure supported” and “degeneracy supported.” The red annotations label relativistic regimes.

![[Kyle Kabasares - Stellar Astrophysics - temperature-density regimes.png|**Fig. 1** Stellar temperature and density for one and five solar masses, with pressure-supported, degeneracy-supported, and relativistic regions]]

### PDF page 14

#### Sound waves

The period for one traversal of the star is $\signal{\Pi}=2\mechanical{R}/\signal{v}_s$. The sound speed and the first adiabatic exponent satisfy

$$
\signal{v}_s^2=\left(\frac{\mathrm{d}\mechanical{P}}{\mathrm{d}\mechanical{\rho}}\right)_{\mathrm{ad}}
=\thermal{\Gamma}_1\frac{\mechanical{P}}{\mechanical{\rho}},
$$

$$
\thermal{\Gamma}_1
=\left(\frac{\mathrm{d}\ln\mechanical{P}}{\mathrm{d}\ln\mechanical{\rho}}\right)_{\mathrm{ad}}
=\frac{\mechanical{\rho}}{\mechanical{P}}
 \left(\frac{\mathrm{d}\mechanical{P}}{\mathrm{d}\mechanical{\rho}}\right)_{\mathrm{ad}}.
$$

The notes give $\signal{v}_s\propto\sqrt{\thermal{T}}$, $\mechanical{P}\propto\thermal{T}^4$, and $\mechanical{\rho}\propto\thermal{T}^3$.

Apply the equilibrium virial relation and replace the integrand with a representative value.

$$
-\energy{\Omega}
=3\int_{\mechanical{M}}\frac{\mechanical{P}}{\mechanical{\rho}}\,\mathrm{d}\mechanical{M}_r
=3\int_{\mechanical{M}}\frac{\signal{v}_s^2}{\thermal{\Gamma}_1}\,\mathrm{d}\mechanical{M}_r
\approx\frac{3\signal{v}_s^2}{\thermal{\Gamma}_1}\mechanical{M}.
$$

Using $\lvert\energy{\Omega}\rvert\approx\mechanical{G}\mechanical{M}^2/\mechanical{R}$ gives

$$
\signal{v}_s\approx
\left(\frac{\thermal{\Gamma}_1\mechanical{G}\mechanical{M}}{3\mechanical{R}}\right)^{1/2},
\qquad
\signal{\Pi}=\frac{2\mechanical{R}}{\signal{v}_s}
\approx\left(\frac{12\mechanical{R}^3}{\thermal{\Gamma}_1\mechanical{G}\mechanical{M}}\right)^{1/2}.
$$

### PDF page 15

For $\thermal{\Gamma}_1\sim 1$, the notes estimate

$$
\signal{\Pi}\approx
\frac{\sqrt{12}}{\sqrt{\mechanical{G}\langle\mechanical{\rho}\rangle}}
\approx \frac{0.04\,\unit{day}}
{\left(\langle\mechanical{\rho}\rangle/\langle\mechanical{\rho}_\odot\rangle\right)^{1/2}}.
$$

The notes add a factor $(3\thermal{\Gamma}_1-4)^{1/2}$ in the denominator if the star is relativistic.

#### Constant-density star

Set $\mechanical{\rho}=\mechanical{\rho}_c$. At the surface, $\mechanical{M}_r=\mechanical{M}$ for $\mechanical{r}=\mechanical{R}$.

$$
\mechanical{M}_r
=\frac{4\pi\mechanical{r}^3}{3}\mechanical{\rho}_c
=\frac{\mechanical{r}^3}{\mechanical{R}^3}\mechanical{M}.
$$

$$
\frac{\mathrm{d}\mechanical{P}}{\mathrm{d}\mechanical{M}_r}
=-\frac{\mechanical{G}\mechanical{M}_r}{4\pi\mechanical{r}^4}
=-\frac{\mechanical{G}\mechanical{M}}{4\pi\mechanical{R}^4}
 \left(\frac{\mechanical{M}_r}{\mechanical{M}}\right)^{-1/3}.
$$

Integrate with zero pressure at the surface.

$$
\begin{aligned}
\mechanical{P}
&=\frac{\mechanical{G}\mechanical{M}^{4/3}}{4\pi\mechanical{R}^4}
  \int_{\mechanical{M}_r}^{\mechanical{M}}
       (\mechanical{M}'_r)^{-1/3}\,\mathrm{d}\mechanical{M}'_r\\
&=\underbrace{\frac{3\mechanical{G}\mechanical{M}^2}{8\pi\mechanical{R}^4}}_{\mechanical{P}_c}
  \left[1-\left(\frac{\mechanical{M}_r}{\mechanical{M}}\right)^{2/3}\right].
\end{aligned}
$$

> [!note]
> In the handwriting, the middle expression for the pressure derivative drops $\pi$, and the integral has a minus sign with its limits in outward order. The evaluated pressure confirms the factor and sign used here.

The central pressure is

$$
\mechanical{P}_c=1.34\times10^{15}
\left(\frac{\mechanical{M}}{\mechanical{M}_\odot}\right)^2
\left(\frac{\mechanical{R}}{\mechanical{R}_\odot}\right)^{-4}
\,\unit{dyn\,cm^{-2}}.
$$

### PDF page 16

In terms of radius, the constant-density pressure profile is

$$
\mechanical{P}=\mechanical{P}_c
\left[1-\left(\frac{\mechanical{r}}{\mechanical{R}}\right)^2\right].
$$

The ideal-gas law is $\mechanical{P}=n\thermal{k}\thermal{T}$. To obtain the number density from the mass density, determine the mean molar mass $\mu$.

- $Z_i$ is the nuclear charge number of species $i$. For helium-4, $Z=2$.
- $A_i$ is the atomic mass number. For helium-4, $A=4$.
- $X_i$ is the fraction of species $i$, with $\sum_i X_i=1$. The notes call it a fraction of particles, but use it as a mass fraction in the calculation.

$$
n_i=\frac{\text{mass per unit volume of species }i}{\text{mass of one ion of species }i}
=\frac{\mechanical{\rho}X_iN_A}{A_i}.
$$

For the ion contribution,

$$
n_{\mathrm{ions}}=\sum_i n_i
=\mechanical{\rho}N_A\sum_i\frac{X_i}{A_i},
\qquad
n_I=\frac{\mechanical{\rho}N_A}{\mu_I}.
$$

The corresponding mean is

$$
\mu_I=\left[\sum_i\frac{X_i}{A_i}\right]^{-1}.
$$

The handwritten equations use each $A_i$ as the numerical molar mass in $\unit{g\,mol^{-1}}$. The reciprocal sum is labeled $\mu$ on this line and $\mu_I$ in the expression for $n_I$.

The electron contribution of species $i$ is $n_{e,i}=y_iZ_i n_i$.

### PDF page 17

For total ionization, $y_i=1$. For neutral material, $y_i=0$.

$$
n_e=\sum_i y_iZ_i n_i
=\mechanical{\rho}N_A\sum_i y_iZ_i\frac{X_i}{A_i},
\qquad
\mu_e=\left[\sum_i\frac{Z_iX_i y_i}{A_i}\right]^{-1}.
$$

> [!note]
> The source writes both $n_i$ and its expanded expression in the first sum. The next line uses the expanded expression alone. The boxed sum is the reciprocal of $\mu_e$, as shown by the definition below it.

Add the ion and electron number densities.

$$
n=n_I+n_e
=\frac{\mechanical{\rho}N_A}{\mu_I}
+\frac{\mechanical{\rho}N_A}{\mu_e}
=\mechanical{\rho}N_A\left[\frac1{\mu_I}+\frac1{\mu_e}\right].
$$

#### Lecture on 9 October 2019

The aim is to cover Chapter 1 and part of Chapter 2.

**Molecular weights**

$$
\mu=\left[\sum_i\frac{X_i}{A_i}\right]^{-1},
\qquad
\frac{\mu n_I}{N_A}=\mechanical{\rho}_I.
$$

Here the notes again use $\mu$ for the ion mean.

### PDF page 18

For the electron contribution,

$$
\frac{\mu_e n_e}{N_A}=\mechanical{\rho}_e,
\qquad
\mu_e=\left[\sum_i\frac{Z_i X_i y_i}{A_i}\right]^{-1}.
$$

The source writes $\mu$ without a subscript in this repeated definition of the electron mean.

$$
\begin{aligned}
n &= n_I+n_e\\
  &= \frac{\mechanical{\rho}N_A}{\mu_I}
      +\frac{\mechanical{\rho}N_A}{\mu_e}\\
  &= \mechanical{\rho}N_A\left(\frac1{\mu_I}+\frac1{\mu_e}\right)
   = \frac{\mechanical{\rho}N_A}{\mu}.
\end{aligned}
$$

For stellar composition, $X+Y+Z=1$. Here $X$ is hydrogen, $Y$ is helium, and $Z$ is all other elements, called *metals*. The note beside $Z$ appears to refer to carbon, nitrogen, and oxygen in the Sun.

The primordial helium fraction $Y_p$ after the Big Bang is approximately $24\%$. The sketch shows data with error bars near $Y_p$ at low metallicity. The points rise above $Y_p$ as metallicity increases.

![[Kyle Kabasares - Stellar Astrophysics - helium fraction and metallicity.png|**Fig. 2** Helium mass fraction versus metallicity, with the primordial fraction shown as a horizontal line]]

In the stellar interior, $y_i=1$. For $Z\ll1$,

$$
\mu_e\approx\frac{2}{1+X}.
$$

### PDF page 19

For the fully ionized, low-metallicity mixture,

$$
\mu_I\approx\frac4{1+3X},
\qquad
\mu\approx\frac4{3+5X},
$$

where the numerical values are in $\unit{g\,mol^{-1}}$.

#### Zero-age main-sequence stars

The notes abbreviate “zero-age main sequence” as ZAMS. They give the following approximate composition and molecular weights.

$$
\begin{aligned}
X&=0.7, & Y&=0.3, & Z&=0.03,\\
\mu_e&=\quantity{1.2}{g\,mol^{-1}}, &
\mu_I&=\quantity{1.3}{g\,mol^{-1}}, &
\mu&=\quantity{0.6}{g\,mol^{-1}}.
\end{aligned}
$$

> [!note]
> The three composition values are reproduced as written. Their sum is $1.03$.

#### Temperature distribution

$$
\mechanical{P}=\frac{\mechanical{\rho}N_A\thermal{k}\thermal{T}}{\mu},
\qquad
\thermal{T}_c=\frac{\mu\mechanical{P}_c}{\mechanical{\rho}N_A\thermal{k}},
\qquad
\mechanical{P}_c=\frac{3}{8\pi}\frac{\mechanical{G}\mechanical{M}^2}{\mechanical{R}^4}.
$$

The subscript on the temperature resembles $e$. The use of central pressure and the next page's calculation indicate $c$.

For the uniform model,

$$
\boxed{\mechanical{\rho}=\text{constant}
=\frac{\mechanical{M}}{\tfrac43\pi\mechanical{R}^3}}
$$

### PDF page 20

The central temperature in the uniform model is

$$
\thermal{T}_c
=\frac12\frac{\mechanical{G}\mechanical{M}}{\mechanical{R}}\frac{\mu}{N_A\thermal{k}}
=1.15\times10^7
 \left(\frac{\mu}{\unit{g\,mol^{-1}}}\right)
 \left(\frac{\mechanical{M}}{\mechanical{M}_\odot}\right)
 \left(\frac{\mechanical{R}}{\mechanical{R}_\odot}\right)^{-1}
 \,\unit{K}.
$$

#### Energy transport

The page introduces energy transport away from equilibrium with a sketch of a small box and the reaction $\mathrm{H}\to\mathrm{He}$. The boxed estimate gives $\quantity{6\times10^{18}}{erg\,g^{-1}}$ of hydrogen and a time of $\quantity{10^{11}}{yr}$ to burn all the hydrogen.

For thermal balance, consider a spherical shell with mass $\mathrm{d}\mechanical{M}_r$ and thickness $\mathrm{d}\mechanical{r}$. The sketch shows the energy production inside the shell and the luminosity crossing each face.

$$
\begin{aligned}
\energy{L}_r
&=4\pi\mechanical{r}^2\energy{F}(\mechanical{r}),\\
\energy{L}_{r+\mathrm{d}r}
&=4\pi\mechanical{r}^2\energy{F}(\mechanical{r}+\mathrm{d}\mechanical{r}).
\end{aligned}
$$

The notes use $\mechanical{r}^2$ as the common shell area factor in this infinitesimal-shell sketch. Let $\energy{\epsilon}$ be the energy production rate per unit mass. The luminosity increase across the shell is

$$
\energy{L}_{r+\mathrm{d}r}-\energy{L}_r
=\mathrm{d}\energy{L}_r
=4\pi\mechanical{r}^2\mechanical{\rho}\energy{\epsilon}\,\mathrm{d}\mechanical{r}.
$$

$$
\frac{\mathrm{d}\energy{L}_r}{\mathrm{d}\mechanical{r}}
=4\pi\mechanical{r}^2\mechanical{\rho}\energy{\epsilon}.
$$

In the Lagrangian form,

$$
\frac{\mathrm{d}\energy{L}_r}{\mathrm{d}\mechanical{M}_r}=\energy{\epsilon}.
$$

> [!note]
> The sketch labels $\energy{\epsilon}$ as energy per unit mass. The luminosity equation gives it the units of energy per unit mass per unit time.

### PDF page 21

The notes approximate the nuclear energy production rate with a power law.

$$
\energy{\epsilon}
=\energy{\epsilon}_0\mechanical{\rho}^{\lambda}\thermal{T}^{\nu}.
$$

- At masses up to about $1\mechanical{M}_\odot$, the proton–proton chains give $\nu\approx4$ and $\lambda=1$.
- At masses of about $1\mechanical{M}_\odot$ or more, the CNO cycles give $\nu\approx15$ and $\lambda\approx1$.

Radiation, convection, and conduction can carry luminosity. The notes discuss radiative transport in the outermost layer of the Sun.

$$
\energy{F}(\mechanical{r})
=-D\,\frac{\mathrm{d}(a\thermal{T}^4)}{\mathrm{d}\mechanical{r}},
\qquad
D\propto\frac1{\kappa},
$$

where $\kappa$ is the opacity. The radiative luminosity is

$$
\energy{L}_r
=-\frac{4\pi\mechanical{r}^2 c}{3\kappa\mechanical{\rho}}
  \frac{\mathrm{d}(a\thermal{T}^4)}{\mathrm{d}\mechanical{r}}.
$$

The opacity law has the form

$$
\kappa(\mechanical{r})=\kappa_0\mechanical{\rho}^{n}\thermal{T}^{-s}
\qquad (\unit{cm^2\,g^{-1}}).
$$

- Thomson scattering has $n=s=0$.
- The entry labeled “atomic matter” has $n=1$ and $s=3.5$.

#### Homologous stars

Choose a reference star labeled $0$. The label is an index. The radial coordinate scales as

$$
\mechanical{r}=\frac{\mechanical{R}}{\mechanical{R}_0}\mechanical{r}_0,
\qquad
\mathrm{d}\mechanical{r}=\frac{\mechanical{R}}{\mechanical{R}_0}\,\mathrm{d}\mechanical{r}_0.
$$

### PDF page 22

The enclosed mass scales as

$$
\mechanical{M}_r=\frac{\mechanical{M}}{\mechanical{M}_0}\mechanical{M}_{r,0},
\qquad
\mathrm{d}\mechanical{M}_r
=\frac{\mechanical{M}}{\mechanical{M}_0}\,\mathrm{d}\mechanical{M}_{r,0}.
$$

With $\mathrm{d}\mechanical{M}_r=4\pi\mechanical{r}^2\mechanical{\rho}\,\mathrm{d}\mechanical{r}$,

$$
\mechanical{\rho}
=\mechanical{\rho}_0
 \frac{\mathrm{d}\mechanical{M}_r}{\mathrm{d}\mechanical{M}_{r,0}}
 \frac{\mathrm{d}\mechanical{r}_0}{\mathrm{d}\mechanical{r}}
 \left(\frac{\mechanical{r}}{\mechanical{r}_0}\right)^{-2}
=\mechanical{\rho}_0\left(\frac{\mechanical{M}}{\mechanical{M}_0}\right)
 \left(\frac{\mechanical{R}}{\mechanical{R}_0}\right)^{-3}.
$$

Hydrostatic equilibrium gives the pressure scaling.

$$
\frac{\mathrm{d}\mechanical{P}}{\mathrm{d}\mechanical{M}_r}
=-\frac{\mechanical{G}\mechanical{M}_r}{4\pi\mechanical{r}^4},
\qquad
\mechanical{P}\propto\frac{\mechanical{M}^2}{\mechanical{R}^4}.
$$

$$
\mathrm{d}\ln\mechanical{P}=2\,\mathrm{d}\ln\mechanical{M}-4\,\mathrm{d}\ln\mechanical{R}.
$$

For a power-law equation of state,

$$
\mechanical{P}=\mechanical{P}_0\mechanical{\rho}^{\chi_\rho}\thermal{T}^{\chi_T},
\qquad
\mathrm{d}\ln\mechanical{P}=\chi_\rho\,\mathrm{d}\ln\mechanical{\rho}
+\chi_T\,\mathrm{d}\ln\thermal{T}.
$$

Combining the two expressions gives

$$
4\,\mathrm{d}\ln\mechanical{R}+\chi_\rho\,\mathrm{d}\ln\mechanical{\rho}
+\chi_T\,\mathrm{d}\ln\thermal{T}=2\,\mathrm{d}\ln\mechanical{M}.
$$

The red annotations substitute $\alpha\,\mathrm{d}\ln\mechanical{M}$, $\alpha_\rho\,\mathrm{d}\ln\mechanical{M}$, and $\alpha_T\,\mathrm{d}\ln\mechanical{M}$ for the radius, density, and temperature differentials, respectively.

For the luminosity and its source term,

$$
\mathrm{d}\energy{L}_r=4\pi\mechanical{r}^2\mechanical{\rho}\energy{\epsilon}\,\mathrm{d}\mechanical{r},
\qquad
\energy{\epsilon}=\energy{\epsilon}_0\mechanical{\rho}^\lambda\thermal{T}^\nu.
$$

The page ends with the heading “Diffusion equation.”

### PDF page 23

The diffusion equation at the top of the page is written

$$
\energy{L}_r
=-\frac{(4\pi\mechanical{r}^2)^2c}{3\kappa}
  \frac{\mathrm{d}(a\thermal{T}^4)}{\mathrm{d}\mechanical{r}}.
$$

> [!note]
> The squared area factor and the absence of $\mechanical{\rho}$ in the denominator follow from changing the derivative on page 21 to $\mathrm{d}/\mathrm{d}\mechanical{M}_r$. The handwriting still shows $\mathrm{d}/\mathrm{d}\mechanical{r}$.

The notes write the scaling exponents and their example values as follows.

| Scaling | Logarithmic form | Example exponent |
| --- | --- | --- |
| $\mechanical{R}\propto\mechanical{M}^{\alpha_R}$ | $\mathrm{d}\ln\mechanical{R}=\alpha_R\,\mathrm{d}\ln\mechanical{M}$ | $\alpha_R=0.78$ |
| $\mechanical{\rho}\propto\mechanical{M}^{\alpha_\rho}$ | $\mathrm{d}\ln\mechanical{\rho}=\alpha_\rho\,\mathrm{d}\ln\mechanical{M}$ | $\alpha_\rho=-1.33$ |
| $\thermal{T}\propto\mechanical{M}^{\alpha_T}$ | $\mathrm{d}\ln\thermal{T}=\alpha_T\,\mathrm{d}\ln\mechanical{M}$ | $\alpha_T=0.22$ |
| $\energy{L}\propto\mechanical{M}^{\alpha_L}$ | $\mathrm{d}\ln\energy{L}=\alpha_L\,\mathrm{d}\ln\mechanical{M}$ | $\alpha_L=3.0$ |

$$
\begin{pmatrix}
3 & 1 & 0 & 0\\
4 & \chi_\rho & 0 & \chi_T\\
0 & \lambda & -1 & \nu\\
4 & -n & -1 & 4+s
\end{pmatrix}
\begin{pmatrix}
\alpha_R\\
\alpha_\rho\\
\alpha_L\\
\alpha_T
\end{pmatrix}
=
\begin{pmatrix}
1\\
2\\
-1\\
1
\end{pmatrix}.
$$

The determinant is

$$
\det=(3\chi_\rho-4)(\nu-s-4)-\chi_T(3\lambda+3n+4).
$$

The four scaling exponents depend on the input exponents.

$$
\begin{aligned}
\alpha_R &= f(\chi_\rho,\chi_T,\lambda,n,s),\\
\alpha_\rho &= g(\chi_\rho,\chi_T,\lambda,n,s),\\
\alpha_L &= h(\chi_\rho,\chi_T,\lambda,n,s),\\
\alpha_T &= k(\chi_\rho,\chi_T,\lambda,n,s).
\end{aligned}
$$

Assuming convection leads to a different set of equations.

### PDF page 24

The photographed textbook figure, labeled Fig. 1.3 in the source, plots $\log(\energy{L}/\energy{L}_\odot)$ and $\log(\mechanical{R}/\mechanical{R}_\odot)$ against $\log(\mechanical{M}/\mechanical{M}_\odot)$. The annotations give $\alpha_L=3.5$ for the luminosity relation and $\alpha_R=0.78$ for the radius relation.

![[Kyle Kabasares - Stellar Astrophysics - main-sequence mass luminosity and radius.png|**Fig. 3** Luminosity and radius versus mass for main-sequence stars, in solar units]]

For low-mass stars, the two values written in the notes are $\alpha'_L=3.9$ and $\alpha_L=5.0$.

#### Lecture on 14 October 2019

Reading for this lecture is Chapter 2 in Hansen and Chapter 1 in Raffelt.

**Hertzsprung–Russell diagram**

The horizontal axis shows color or $\log\thermal{T}_{\mathrm{eff}}$, with higher temperatures on the left. The vertical axis is logarithmic. The left annotation gives $\energy{L}/\mechanical{M}$ for a theorist's version of the diagram. The red dashed curve marks the main sequence, and the green lines mark radii of $10^{-2}\mechanical{R}_\odot$, $\mechanical{R}_\odot$, and $100\mechanical{R}_\odot$. The points label Sirius B, Vega, Sirius A, Alpha Centauri A, the Sun, Alpha Centauri B, and Betelgeuse.

![[Kyle Kabasares - Stellar Astrophysics - Hertzsprung-Russell diagram.png|**Fig. 4** Hertzsprung–Russell diagram with the main sequence, constant-radius lines, and labeled stars]]

$$
\energy{L}=4\pi\mechanical{R}^2\thermal{\sigma}\thermal{T}_{\mathrm{eff}}^4,
\qquad
\thermal{T}_{\mathrm{eff},\odot}=\quantity{5780}{K}.
$$

### PDF page 25

The luminosity in solar units is

$$
\frac{\energy{L}}{\energy{L}_\odot}
=8.97\times10^{-16}
 \left(\frac{\mechanical{R}}{\mechanical{R}_\odot}\right)^2
 \left(\frac{\thermal{T}_{\mathrm{eff}}}{\unit{K}}\right)^4.
$$

**Raffelt, section 1.3**

$$
\energy{\epsilon}_{\mathrm{nuc}}\propto\mechanical{\rho}^\lambda\thermal{T}^\nu.
$$

For the proton–proton chains, $\nu$ ranges from $4$ to $6$ and $\lambda=1$. The notes give Kramers' law with $n=1$ and $s=3.5$.

$$
\kappa\propto\mechanical{\rho}^{n}\thermal{T}^{-s}.
$$

The density superscript resembles $4$ in the handwriting. The parameter list and page 21 indicate $n$.

**Axions and neutrino magnetic moments**

The interaction sketch shows a neutrino line from $\nu_2$ to $\nu_1$, a loop labeled $\ell^{-/+}$ and $\mathrm{W}^{+/-}$, and a photon $\gamma$ attached to the loop.

$$
\energy{E}_\gamma=\frac{\mechanical{m}_s}{2},
\qquad
\mechanical{m}_{\mathrm{sterile}}=\quantity{60}{eV}\text{–}\quantity{100}{eV}.
$$

The mass and photon energy relation uses units with $c=1$. Beside the reference to the $\sigma_8$ problem, the notes list $\sin^2(2\theta)=10^{-7}$ and $10^{-8}$.

They also list a UV wavelength range of $\quantity{25}{nm}$ to $\quantity{40}{nm}$ and mention the diffuse He I and He II spectrum.

The notes associate $\sigma_8$ with a scale of $\quantity{8}{Mpc}$ and write

$$
\sigma_8^2=\int P(\signal{k})\,W^2(\signal{k}_r)\,\mathrm{d}\signal{k},
\qquad
\sum\mechanical{m}_\nu=\quantity{0.3}{eV}.
$$

The sketch below the integral shows a smooth bump on a fluctuating curve. Vertical ticks mark the ends of the interval. A rectangular window beneath the curve is labeled $\quantity{8}{Mpc}$.

### PDF page 26

The power spectrum sketch plots $P(\signal{k})$ against wavenumber $\signal{k}$. The blue curve is labeled “CMB predicts this.” Near the point marked $\quantity{8}{Mpc}$, the red curve branches from the falling spectrum. The notes associate this scale with the start of nonlinear behavior.

![[Kyle Kabasares - Stellar Astrophysics - matter power spectrum sketch.png|**Fig. 5** Matter power spectrum sketch with the CMB prediction and the scale marked 8 Mpc]]

The notes describe $P(\signal{k})$ as the two-point correlation in wavenumber space.

**Warm dark matter streaming**

$$
\signal{\lambda}_{\mathrm{fs}}
=\int_0^{t_{\mathrm{nr}}}\mechanical{v}\,\mathrm{d}t.
$$

The notes call this the mean free-streaming scale. The subscript on $\signal{\lambda}$ is read as $\mathrm{fs}$ from that label.

The notes also mention the two-photon interaction of axions. The net energy production term is

$$
\energy{\epsilon}=\energy{\epsilon}_{\mathrm{nuc}}+\energy{\epsilon}_{\mathrm{grav}}
-\energy{\epsilon}_\nu-\energy{\epsilon}_X.
$$

The page parameterizes the net production as

$$
\energy{\epsilon}=(1-\delta_X)\energy{\epsilon}_{\mathrm{nuc}},
\qquad
\delta_X<1.
$$

For the rescaled model, the notes write

$$
\mechanical{R}'=y\mechanical{R},\qquad
\mechanical{r}'=y\mechanical{r},\qquad
\mechanical{M}'_r=\mechanical{M}_r y^3,\qquad
\mechanical{\rho}'(\mechanical{r})=y^{-3}\mechanical{\rho}(\mechanical{r}).
$$

### PDF page 27

The pressure scales as $\mechanical{P}'(\mechanical{r}')=y^{-4}\mechanical{P}(\mechanical{r})$. The pressure is proportional to $\mechanical{\rho}\thermal{T}/\mu$, so at fixed $\mu$,

$$
\thermal{T}'(\mechanical{r}')=y^{-1}\thermal{T}(\mechanical{r}),
\qquad
\frac{\mathrm{d}\thermal{T}'(\mechanical{r}')}{\mathrm{d}\mechanical{r}'}
=y^{-2}\frac{\mathrm{d}\thermal{T}(\mechanical{r})}{\mathrm{d}\mechanical{r}}.
$$

> [!note]
> The pressure and density scalings here correspond to fixed enclosed mass. The preceding page writes an additional factor of $y^3$ in the enclosed mass, which conflicts with those scalings.

The radiative transport line is written

$$
\energy{L}_r=-\frac{4\pi\mechanical{r}^2}{3\kappa\mechanical{\rho}}\,
4a\thermal{T}^3\frac{\mathrm{d}\thermal{T}}{\mathrm{d}\mechanical{r}}.
$$

The factor $c$ appears in the radiative transport equation on page 21. The rescaled radiative luminosity in these notes is

$$
\energy{L}'(\mechanical{r}')=y^{-1/2}\energy{L}(\mechanical{r}).
$$

For the nuclear energy source,

$$
\frac{\mathrm{d}\energy{L}}{\mathrm{d}\mechanical{r}}
=4\pi\energy{\epsilon}\mechanical{\rho}\mechanical{r}^2,
\qquad
\energy{\epsilon}=(1-\delta_X)\energy{\epsilon}_{\mathrm{nuc}}.
$$

This gives the second luminosity scaling.

$$
\energy{L}'(\mechanical{r}')=y^{-(3+\nu)}(1-\delta_X)\energy{L}(\mechanical{r}).
$$

Equating the two luminosity expressions gives

$$
y=(1-\delta_X)^{2/(2\nu+5)}.
$$

The first-order fractional changes are

$$
\frac{\delta\mechanical{R}}{\mechanical{R}}=-\frac{2\delta_X}{2\nu+5},
\qquad
\frac{\mathrm{d}\energy{L}}{\energy{L}}=\frac{\delta_X}{2\nu+5}.
$$

### PDF page 28

The fractional changes in temperature and time scale are

$$
\frac{\delta\thermal{T}}{\thermal{T}}=\frac{2\delta_X}{2\nu+5},
\qquad
\frac{\delta\tau}{\tau}\approx\delta_X.
$$

The notes put a boxed “1987” next to the time-scale relation and give $\delta_X\lesssim1/2$.

The initial helium abundance in the Sun is $Y_{\mathrm{initial}}=0.274$. The next line gives $Y_{\mathrm{primordial}}=0.23$ and writes $Y_{\mathrm{primordial}}\geq Y_{\mathrm{init}}$, followed by $\delta_X<1/2$.

> [!note]
> The inequality between the helium abundances is reproduced as written. The numerical values on the page give the reverse ordering.

The next sketch shows two photons meeting at one vertex, a dashed axion line $a$ connecting the vertices, and two photons leaving the second vertex. Each photon line is labeled $\gamma$.

#### Stellar evolution

1. Write the differential equations that describe the stellar interior.
2. Include thermonuclear reactions, radiative transport, convection, conduction where applicable, and an equation of state.
3. Choose the boundary conditions.
4. Integrate numerically to obtain $\mechanical{M}$, $\energy{L}$, $\mechanical{R}$, and $\thermal{T}$.
5. Compare the results with observations. The notes indicate that the results correlate with age and composition.

### PDF page 29

#### Young stellar objects

The notes use YSO for *young stellar object*. As a protostar becomes a star, thermonuclear fusion becomes the dominant energy source over gravitational contraction.

The classification list gives classes 0, 1, and 2. The notes mark class 0 as still contracting and classes 1 and 2 as “stars” with nuclear burning. The sketch for class 0 shows arrows pointing into a cloud. The two sketches below it show a star with bipolar outflow and a star with arrows pointing outward in several directions.

An inset labeled DSNB shows a rate, read here as $\mathrm{d}n/\mathrm{d}t$, against redshift $z$. The curve rises, levels off, and falls. An adjacent arrow points from “neutrons” to “Gd.”

**Signatures of the YSO phase**

1. Visible light varies over hours or days. The notes link this to temperature and density irregularities.
2. Emission lines can come from the disk, surfaces, or outflow.
3. YSOs have more infrared luminosity than older stars of the same mass $\mechanical{M}$ and radius $\mechanical{R}$.
4. High activity includes flows, starspots, and coronal emission. The notes link rapid rotation to more convection and magnetic fields $\magnetic{\vec{B}}$.

### PDF page 30

#### Lecture on 21 October 2019

**Zero-age main sequence**

The notes say that most stars are on the main sequence in an “honest sample.” Both sketches plot absolute visual magnitude $M_V$ against color index $B-V$.

![[Kyle Kabasares - Stellar Astrophysics - HR diagram for 101 brightest stars.png|**Fig. 6** Color–magnitude sketch of the 101 brightest stars, with Rigel, Sirius A, Betelgeuse, and the red giants labeled]]

![[Kyle Kabasares - Stellar Astrophysics - HR diagram for nearest stars.png|**Fig. 7** Color–magnitude sketch of the nearest stars, with the main sequence and the white dwarf group labeled]]

The nearest-star sketch marks $M_V=0$ near the top and $B-V=0.0$ near $\quantity{10^4}{K}$. Effective temperature increases toward the left. The handwriting marks the upper main sequence with $\quantity{10^3}{yr}$ and “O stars,” and the lower main sequence with $\quantity{10^{12}}{yr}$. The upper arrow ends near the Sirius A label.

### PDF page 31

The page opens with an aside about discussing better books.

#### Life on the main sequence

Mass is the primary factor. Composition is secondary. Mass sets the radius, luminosity, and effective temperature. It also affects the types of nuclear reactions and whether the material moves by convection.

On the main sequence, hydrogen becomes helium through the proton–proton chains or the CNO cycle. The notes give $1.5\mechanical{M}_\odot$ as the dividing mass in this lecture. CNO burning is more effective at high temperatures.

1. CNO reactions generate energy in a smaller region, which leads to a convective center.
2. The notes say that at $\mechanical{M}\geq1.5\mechanical{M}_\odot$ there is more neutral hydrogen in the stellar envelope. They connect higher opacity to a redder star and weaker ultraviolet emission.

Convection occurs in part of the star. The notes use the absence of nuclear products at the surface as evidence that convection does not mix the whole star.

### PDF page 32

The comparison continues with points 3 and 4.

3. Near $1.5\mechanical{M}_\odot$, rotation is more prevalent.
4. The notes attribute most of the opacity to metals, represented by $Z$. More metals hide more of the stellar interior and make the star redder. Metal-poor stars are bluer. For clusters and galaxies, this leads to an age–metallicity degeneracy.

The lecture mentions the lithium problem in Big Bang nucleosynthesis, then graduate-student stories from Kev. The margin remarks include “90s were a wild time lol,” “$Y_p$ → 3rd decimal place crisis,” and “MOND … stop talking to them.” A separate quotation reads “MOND people are the flat-Earthers of astronomy.”

5. The correlations of luminosity, temperature, radius, and age with mass follow the trends from homology.

The sketch shows four protons and four electrons before hydrogen burning. After the arrow, the helium nucleus has two protons and two neutrons, with two electrons outside it. Below the sketch is the ideal-gas relation $\mechanical{P}=n\thermal{k}\thermal{T}$, with downward arrows under pressure and particle number density and an upward arrow under temperature.

### PDF page 33

The notes compare the Sun $\quantity{4.6}{Gyr}$ ago with the Sun today. They give “25% fainter” and “20 K lower.” The next line gives a $\quantity{6}{K}$ change from the ice age to the present.

#### 2.2.2 Brown dwarfs

Brown dwarfs have too little mass to reach the temperatures and energies needed for significant hydrogen fusion. The notes give the hydrogen-burning mass threshold as $0.085\mechanical{M}_\odot$, or $89\mechanical{M}_J$, for solar composition and $0.1\mechanical{M}_\odot$ for metal-poor composition.

Deuterium burning occurs at about $\quantity{10^6}{K}$. The deuterium-to-hydrogen abundance ratio is $\mathrm{D}/\mathrm{H}\approx10^{-5}$. The burning can slow cooling. The notes give a lifetime below $\quantity{10^9}{yr}$ on what they call the brown dwarf main sequence.

The page puts “70%” beside stars and brown dwarfs with masses $\lesssim0.1\mechanical{M}_\odot$. The population to which the percentage applies is unclear.

The notes list T dwarfs, L dwarfs, and Y dwarfs. Arrows identify L and Y as new brown dwarf categories. They record the discovery of six Y dwarfs by WISE at UCLA in 2011 and a 2014 temperature of about $\quantity{250}{K}$.

The question “dwarf or planet?” is followed by “IAU → no D burning” and a reference to $13\mechanical{M}_J$. The final line reads “D doesn't burn.”

### PDF page 34

#### 2.3 Leaving the main sequence

Stars with $\mechanical{M}<0.3\mechanical{M}_\odot$ are fully convective. Mixing supplies fresh hydrogen for burning. The notes estimate a nuclear time scale $\tau_{\mathrm{nuc}}\sim10^{12}\,\unit{yr}$ and compare it with an age of the universe of about $\quantity{10^{10}}{yr}$.

A graduate-school story concerns massive compact halo objects, abbreviated MACHOs. The sketch shows a sharp peak in a signal plotted against time, with the annotation $\mechanical{M}\simeq0.5\mechanical{M}_\odot$. The handwritten aside reads “Jeff was right! (sort of).”

A star with $\mechanical{M}>0.3\mechanical{M}_\odot$ uses up the available hydrogen. The notes mark $\mechanical{P}$, $n$, and $\thermal{T}$ with upward arrows in $\mechanical{P}=n\thermal{k}\thermal{T}$ and add “grav. potential depends.”

#### Lecture on 23 October 2019

The lecture repeats that stars below $0.3\mechanical{M}_\odot$ are fully convective. Hydrogen mixes throughout the star, and $\tau_{\mathrm{nuc}}\sim10^{12}\,\unit{yr}$.

Above $0.3\mechanical{M}_\odot$, the star runs out of available hydrogen. It continues to radiate, cool, and lose energy.

### PDF page 35

The core cannot cool in the way the outer layers do. Contraction raises the core temperature and pressure. The notes summarize the two outcomes as “$\mechanical{\rho}$ wins,” leading to a degenerate core, and “$\thermal{T}$ wins,” leading to helium ignition.

For $\mechanical{M}\geq1.5\mechanical{M}_\odot$, the notes label the first red giant phase as occurring before helium burning. An annotation shows $\mu$ decreasing and $\mechanical{r}$ increasing, with expansion in the outer layers.

For $\mechanical{M}<1.5\mechanical{M}_\odot$, the outer layers expand rapidly and the inner core contracts rapidly. The notes compare

$$
t_{\mathrm{KH}}\sim10^7\,\unit{yr},\qquad
\tau_{\mathrm{nuc}}\sim10^{10}\,\unit{yr},\qquad
\frac{t_{\mathrm{KH}}}{\tau_{\mathrm{nuc}}}\sim10^{-3}\sim0.1\%.
$$

**Hertzsprung gap**

The notes give spectral classes A5–G0 and magnitudes from $+1$ to $-3$. A globular cluster contains $10^4$ to $10^6$ stars. The sketch plots $V$ against $B-V$. A dotted transition joins the lower curved track to the steep segment labeled RGB, or red giant branch.

### PDF page 36

#### Age indicators

- Main-sequence turnoff point (T.O.P.).
- Location of the red giant branch (RGB).
- Location of the asymptotic giant branch (AGB).

The notes mark stars with $\mechanical{M}<5.0\mechanical{M}_\odot$ with “make clump” or “A and B stars.” The next line marks the opposite mass range with “don't.”

![[Kyle Kabasares - Stellar Astrophysics - stellar evolutionary tracks.png|**Fig. 8** Stellar evolutionary tracks in log luminosity and log effective temperature, with the burning stages and helium flash marked]]

The tracks carry mass labels of $0.5$, $1$, $1.25$, $1.5$, $2.25$, $3$, $5$, $9$, and $15$ solar masses. The dotted $0.5\mechanical{M}_\odot$ track is separate from the solid tracks. The annotations mark hydrogen burning, core contracts, contraction, hydrogen shell burning, the RGB, the helium flash, the horizontal branch (HB), and the AGB.

### PDF page 37

#### Sampling of time

The cluster sketch plots visual magnitude $V$ against $B-V$. Its marked ranges are $2$ to $20$ in $V$ and $-0.2$ to $1.8$ in $B-V$. It compares the Pleiades (M45) with M5 and M67 and labels the subgiant branch (SGB), red giant branch, horizontal branch, and asymptotic giant branch.

![[Kyle Kabasares - Stellar Astrophysics - cluster color-magnitude sequences.png|**Fig. 9** Color–magnitude sequences for the Pleiades, M5, and M67]]

The aside “BS!” refers to blue stragglers.

**Globular cluster ages in the 1990s**

The notes compare globular cluster ages of $\quantity{10}{Gyr}$ to $\quantity{18}{Gyr}$ with an estimated universe age $t_{\mathrm{univ}}<10\,\unit{Gyr}$.

1. Dark energy changed the universe age estimate to $t_{\mathrm{univ}}=\quantity{14}{Gyr}$.
2. Hipparcos increased the estimated distance to globular clusters by $10\%$. The inferred luminosities increased.
3. Calculations of stellar atmospheres changed.

For HD 140283, the “Methuselah Star,” the notes give an age of $(14.5\pm0.8)\,\unit{Gyr}$.

### PDF page 38

The notes give $t_{\mathrm{univ}}=\quantity{13.8}{Gyr}$ and cite H. Bond et al. (2013) after the discussion of HD 140283.

#### Mass loss

The notes identify luminosity, terminal wind speed $\mechanical{v}_\infty$, and metallicity $Z$ as relevant to mass loss.

$$
\dot{\mechanical{M}}\propto
\frac{\energy{L}}{\mechanical{v}_\infty\mechanical{R}^{1/2}},
\qquad
\dot{\mechanical{M}}\,\mechanical{v}_\infty\mechanical{R}^{1/2}
\propto\energy{L}.
$$

The sketch shows data scattered around a rising straight line. The axes are unmarked.

For an $80\mechanical{M}_\odot$ star, the notes give $\dot{\mechanical{M}}\sim2\times10^{-5}\mechanical{M}_\odot\,\unit{yr^{-1}}$ and write

$$
t_{\mathrm{MS}}=\frac{\dot{\mechanical{M}}}{\mechanical{M}}
=\quantity{4\times10^6}{yr},
\qquad
t_{\mathrm{nuc}}\simeq\quantity{2\times10^5}{yr}.
$$

> [!note]
> The numerical value and the units of $t_{\mathrm{MS}}$ use $\mechanical{M}/\dot{\mechanical{M}}$. The handwritten fraction is inverted.

An arrow marks a decrease in central temperature.

### PDF page 39

#### Lecture on 30 October 2019

The upper diagram plots luminosity in solar units against temperature in kelvins. Its luminosity marks run from $10^{-4}$ to $10^6$, and its temperature decreases to the right from $\quantity{50000}{K}$ to $\quantity{3000}{K}$. The black main sequence carries mass labels of $120$, $60$, $30$, $15$, $9$, $5$, $3$, $2$, $1$, $0.4$, and $0.1$ solar masses. Red tracks extend away from the main sequence. The $1\mechanical{M}_\odot$ point is circled.

![[Kyle Kabasares - Stellar Astrophysics - main sequence and post-main-sequence tracks.png|**Fig. 10** Main sequence with mass labels and red tracks that show evolution away from it]]

The lower diagram repeats the cluster sequences in [[#PDF page 37|Fig. 9]], including the Pleiades, M5, M67, and the labeled evolutionary branches.

### PDF page 40

As hydrogen becomes helium, the helium core grows. The notes mark increases in central density $\mechanical{\rho}_c$ and temperature $\thermal{T}$. The arrows form a cycle from core heating to nuclear burning, fuel exhaustion, and core contraction, then back to core heating.

When the Sun becomes a red giant, the notes estimate Earth's temperature from its dependence on solar luminosity.

$$
\frac{\thermal{T}_{\mathrm{Earth,future}}}{\thermal{T}_{\mathrm{Earth,now}}}
=\left(\frac{\energy{L}_{\odot,f}}{\energy{L}_{\odot,n}}\right)^{1/4}
=10^{1/4}\approx1.78.
$$

The result is $\thermal{T}_\oplus\colon\quantity{290}{K}\to\quantity{517}{K}$. The line introducing the proportionality uses a solar subscript on $\thermal{T}$, while the ratio and numerical estimate refer to Earth.

**Red giant branch**

Hydrogen shell burning proceeds through the CNO cycle. The page writes the uncertainty scale as $\Delta\mechanical{x}\,\Delta\mechanical{p}=\hbar/2$.

If central density “wins,” electron degeneracy occurs and central density stops increasing in the account given here. The notes associate $\mechanical{M}<0.4\mechanical{M}_\odot$ with a helium white dwarf and add that helium white dwarfs occur only in binaries. If temperature “wins,” the notes mark thermonuclear ignition of helium.

### PDF page 41

| Mass range in the notes | Helium ignition | Central conditions |
| --- | --- | --- |
| $\mechanical{M}>1.5\mechanical{M}_\odot$ | Slow ignition | $\thermal{T}_c\sim10^8\,\unit{K}$ and $\mechanical{\rho}_c<10^6\,\unit{g\,cm^{-3}}$ |
| $0.4\mechanical{M}_\odot\leq\mechanical{M}\leq1.5\mechanical{M}_\odot$ | Helium flash | $\thermal{T}_c\sim10^8\,\unit{K}$ and $\mechanical{\rho}\sim10^6\,\unit{g\,cm^{-3}}$ |

The notes describe partially degenerate helium, for which $\mechanical{P}\mechanical{V}\ne N\thermal{k}\thermal{T}$, and mark a temperature runaway.

The notes estimate that the Sun will leave a $0.6\mechanical{M}_\odot$ white dwarf. Burning helium produces carbon-12 and then oxygen-16 by further helium capture. The result is a carbon–oxygen white dwarf.

**Triple-alpha process**

The sketch shows a third helium nucleus approaching two helium nuclei. The notes give $\quantity{10^{-16}}{s}$ for the two helium nuclei to be in contact.

For roughly $1.5\mechanical{M}_\odot\leq\mechanical{M}\lesssim6\mechanical{M}_\odot$, the notes say that more massive stars make more oxygen-16. They write the helium capture reaction

$$
{}^{12}\mathrm{C}({}^{4}\mathrm{He},\gamma){}^{16}\mathrm{O}.
$$

The source crosses out the corresponding oxygen-16 capture reaction leading to neon-20 and adds “Ne doesn't have the right structure.” The page ends with “Double shell-burning.”

### PDF page 42

#### Double shell burning

A carbon–oxygen core is surrounded by an inner helium-burning shell and an outer hydrogen-burning shell. The notes give the duration as less than $1\%$ of the main-sequence lifetime.

![[Kyle Kabasares - Stellar Astrophysics - double-shell burning.png|**Fig. 11** Carbon–oxygen core with helium burning in the inner shell and hydrogen burning in the outer shell]]

The second diagram is for a $5\mechanical{M}_\odot$ Population I star. It plots the fractional mass coordinate $\mechanical{m}/\mechanical{M}$ against time in units of $\quantity{10^7}{yr}$. It marks stages A, B, C, F, and G. The red boundaries mark the convective outer layer and regions labeled H–He, He–C, and C.O. The late convective boundary rises steeply near the right side of the diagram.

![[Kyle Kabasares - Stellar Astrophysics - five-solar-mass burning and convection history.png|**Fig. 12** Burning and convection regions over time in a five-solar-mass Population I star]]

### PDF page 43

#### Lecture on 4 November 2019

The page opens with the aside “No!! Fight for Votes.”

**Late stages of stars below the 6–10 solar mass range**

The notes identify metallicity, rotation, and initial mass as relevant to the late stages. The range $6$ to $10$ solar masses refers to initial masses. Dust obscuration leads to infrared emission.

The notes mention OH maser formation, then the aside “Outreach! Prevent Google!” The next points describe the exposed surface and its spectrum.

- Material blowing off the star exposes a hotter surface.
- The surface temperature given is $\quantity{50000}{K}$.
- Emission lines appear in the stellar spectrum.
- The notes identify forbidden lines of oxygen, nitrogen, and carbon, and distinguish them from ordinary allowed atomic transitions.

The oxygen sketch marks three groups read as $^3\mathrm{P}$, $^1\mathrm{S}$, and $^1\mathrm{D}$, from left to right. The lines drop into and rise out of the marked groups. The notes attribute the population of these states to collisions between atoms.

### PDF page 44

The notes give a white dwarf remnant mass of $0.55$ to $1.3\mechanical{M}_\odot$ and describe electron degeneracy. The listed compositions are helium in binaries, carbon–oxygen, and oxygen–neon–magnesium.

| Spectral type | Lines noted in the source | Mean mass given |
| --- | --- | --- |
| DA | Hydrogen only | $(0.593\pm0.016)\mechanical{M}_\odot$ |
| DB | Helium only | $(0.711\pm0.009)\mechanical{M}_\odot$ |

The source labels these lines “emission.” It writes a textbook value as “0.6 ± 1” solar masses, which may be an abbreviated range. It also gives $\mechanical{R}\sim10^{-2}\mechanical{R}_\odot$ and $\mechanical{\rho}\sim10^6\,\unit{g\,cm^{-3}}$.

![[Kyle Kabasares - Stellar Astrophysics - white dwarf cooling sequence.png|**Fig. 13** White dwarf cooling sequence in absolute visual magnitude and color index, with the direction toward dimmer, colder, and older white dwarfs marked]]

The second diagram shows the logarithm of the luminosity function $\Phi$ per cubic parsec per bolometric magnitude, against $\log(\energy{L}/\energy{L}_\odot)$. Points carry error bars. The annotations give $\thermal{T}\sim4600\,\unit{K}$, a luminosity read as $\energy{L}\sim10^{-4.4}\energy{L}_\odot$, and an age of $\quantity{8.5}{Gyr}$ to $\quantity{11}{Gyr}$. The notes attribute the uncertainty to microphysics and the carbon-to-oxygen ratio and refer to Chapter 10.

![[Kyle Kabasares - Stellar Astrophysics - white dwarf luminosity function.png|**Fig. 14** White dwarf luminosity function with error bars and age estimates]]

### PDF page 45

The page lists SDSS and Kalirai (2012), with Keck observations, then points to the globular cluster M4. The halo white dwarf mass is approximately $(0.551\pm0.005)\mechanical{M}_\odot$. The SDSS disk value is $(0.613\pm0.126)\mechanical{M}_\odot$, with solar masses inferred from the preceding line.

The sketch compares initial and final mass. It marks M4 near a final mass of $0.52$ and a halo sample near $0.56$, with error bars in both directions. The age scale on the right aligns M4 with $\quantity{12.3}{Gyr}$ and the halo point with $\quantity{11.4}{Gyr}$.

![[Kyle Kabasares - Stellar Astrophysics - initial and final white dwarf masses.png|**Fig. 15** Initial and final white dwarf masses for M4 and the halo sample, with age marks]]

**Late stages below the 6–10 solar mass range, continued**

The two shorthand lines read “90% H → He” and “H → Fe.”

### PDF page 46

The binding energy per nucleon rises rapidly with mass number, peaks near the iron-56 label at $A=56$, and then falls gradually toward the mark at $A=240$. The plot has no numbered vertical scale.

The reaction sketch starts with $3\alpha$ leading to carbon-12. The next arrow from two carbon-12 nuclei to magnesium-24 is crossed out and annotated “Parity not conserved.” The two carbon burning channels given below it are

$$
\begin{aligned}
{}^{12}\mathrm{C}+{}^{12}\mathrm{C}
&\longrightarrow {}^{20}\mathrm{Ne}+{}^{4}_{2}\alpha,\\
{}^{12}\mathrm{C}+{}^{12}\mathrm{C}
&\longrightarrow {}^{23}\mathrm{Na}+p.
\end{aligned}
$$

The notes label the following as nuclear physicists' notation.

$$
{}^{23}\mathrm{Na}(p,\alpha){}^{20}\mathrm{Ne},
\qquad
{}^{23}\mathrm{Na}(p,\gamma){}^{24}\mathrm{Mg}.
$$

The next line reads “carbon-12, all the way to Zn, Ga.” The bottleneck line shows two silicon-28 nuclei leading to nickel-56 and then to iron-56, with the second arrow labeled “double beta decay.” The source strikes out the first arrow and adds “Doesn't happen.”

### PDF page 47

The notes attribute the bottleneck to the Coulomb force. They give an alpha-capture sequence starting from silicon-28 and helium-4.

$$
{}^{28}\mathrm{Si}+{}^{4}\mathrm{He}
\longrightarrow
{}^{32}\mathrm{S},\quad
{}^{36}\mathrm{Ar},\quad
{}^{40}\mathrm{Ca},\quad
{}^{44}\mathrm{Ti},\quad
{}^{48}\mathrm{Cr},\quad
{}^{52}\mathrm{Fe},\quad
{}^{56}\mathrm{Ni}.
$$

The list is labeled “$\alpha$ nuclei.” The notes put “$n+p$ → nearby nuclei” beside nuclear statistical equilibrium, also labeled the “e process.”

Once burning reaches iron-56, the notes describe energy loss through electron capture onto iron-56 and the onset of electron degeneracy.

The diagram attributed to Arnett (1966) plots mass fractions $X_i$ against enclosed mass $\mechanical{M}_r/\mechanical{M}_\odot$. Iron dominates the inner region. A narrow silicon layer is followed by the oxygen, neon, magnesium, and carbon profiles. The dashed helium profile rises farther out.

![[Kyle Kabasares - Stellar Astrophysics - pre-collapse composition by enclosed mass.png|**Fig. 16** Stellar composition profiles against enclosed mass, with the elements and the Arnett attribution labeled]]

### PDF page 48

#### Lecture on 6 November 2019

The notes record an aside about postdocs at Fermilab, announce that there is no class next Monday, and assign Chapters 2.8 and 2.9 for this lecture.

**Pre-supernova structure**

The shell diagram gives the following order from the outside toward the collapsing iron–nickel core.

1. Hydrogen burns to helium.
2. Helium burns to carbon-12 and oxygen-16.
3. Carbon-12 burns to neon-20.
4. Neon-20 burns to oxygen-16.
5. Oxygen-16 burns to silicon-28.
6. Silicon-28 burns to nickel-56.

The outer sequence carries the annotation “$s$ isotopes” near oxygen-16.

The notes list two triggers for collapse.

1. Photodisintegration, written $\gamma+{}^{56}\mathrm{Fe}\to X+Y$, removes energy and thermal pressure.
2. Increasing density forces electrons to higher momentum $\mechanical{\vec{p}}$ and energy $\energy{E}$.

The bottom sketch plots an occupation or distribution $f$ against $\energy{E}$. The curve stays nearly level at low energy, then falls to zero. An arrow points to the right near a marked energy difference, read here as $\delta\mechanical{m}_{np}$.

### PDF page 49

**Neutronization**

$$
e^-+p\longrightarrow n+\nu_e.
$$

The proton in the sketch is part of a nucleus. Electron capture depletes the electrons that supply degeneracy pressure.

The gravitational potential energy released is about $\quantity{10^{53}}{erg}$ or $\quantity{10^{46}}{J}$. The notes compare it with $2\times10^{36}$ tons of TNT, $2\times10^{32}$ Hiroshima bombs, and $5\times10^{28}$ hydrogen bombs.

The Arnett (1966) plot follows the stellar core in $\log_{10}\thermal{T}$ and $\log_{10}\mechanical{\rho}$, with the numerical temperature in kelvins and density in $\unit{g\,cm^{-3}}$. The track marks helium, carbon, neon, oxygen, and silicon burning. The dashed entropy contours are labeled $\thermal{S}_\gamma/\thermal{k}=1.0$, $0.1$, and $0.01$.

![[Kyle Kabasares - Stellar Astrophysics - core temperature and density during burning.png|**Fig. 17** Core temperature and density during successive burning stages, with entropy contours]]

The notes give $\mechanical{\rho}_c\simeq6\times10^9\,\unit{g\,cm^{-3}}$, $\thermal{T}_c\simeq8\times10^9\,\unit{K}$, and a neutron star density of about $\quantity{10^{15}}{g\,cm^{-3}}$.

$$
\tau_{\mathrm{dyn}}
\simeq\frac1{(\mechanical{G}\langle\mechanical{\rho}\rangle)^{1/2}}
\sim\text{seconds}.
$$

This is the time scale for core collapse in the notes. They give a Chandrasekhar mass of $1.4\mechanical{M}_\odot$ and put $5$ to $6$ solar masses beside “$n$-degeneracy” and $\mechanical{m}_e\to\mechanical{m}_n$. The next line emphasizes general relativity. The final estimate converts the equivalent of $0.1\mechanical{M}_\odot$ into energy.

### PDF page 50

A note headed “Black hole question answer” includes $e^-\to\text{BH phase}$. The accompanying plot shows flux against time. Four points with error bars lie on the early plateau and the start of the decline. An arrow labeled “Black hole forming” points to the steep drop toward zero.

#### Rapid neutron capture

The $r$ in $r$-process stands for “rapid.”

| Supernova type | Notes on hydrogen |
| --- | --- |
| II | A hydrogen line is detected. |
| Ia | No hydrogen line. The notes add that Type Ia supernovae were used to discover the acceleration of the universe. |
| Ib/Ic | The progenitor has lost its hydrogen envelope. |

The notes describe neutron star mergers as “gold-mining.” Iron-56, neutrons, and energy lead into a discussion of neutron drip. The notes explain it as a nucleus with so many neutrons that additional ones “drip” off.

The sketch plots proton number $Z$ against neutron number $N$. Two rising lines are offset horizontally. An arrow from the left line to the right line shows an increase in neutron number at nearly fixed proton number.

### PDF page 51

The sketch for elements with $Z\geq30$ plots abundance relative to hydrogen against proton number $Z$. It shows a steep decline after the first peak, a second peak, and smaller peaks on a gradually declining tail.

| Species in the notes | Origin or process |
| --- | --- |
| Hydrogen and helium | Big Bang nucleosynthesis |
| Lithium, beryllium, and boron | Cosmic-ray spallation. Lithium-7 is also boxed and labeled BBN. |
| Carbon-12 and oxygen-16 | Helium burning |
| Carbon-13, nitrogen-14, the nuclei labeled “17 C” and “18 C,” and fluorine | CNO cycle and its high-temperature extension |
| Neon through the iron peak | Carbon, neon, oxygen, and silicon burning |
| $Z\geq30$ | The $s$-, $p$-, and $r$-processes |

A brace on the right links the cosmic-ray note to C, N, and O. The two handwritten labels read as carbon-17 and carbon-18. The surrounding CNO context leaves the element letter uncertain.

#### Slow neutron capture

The notes cite B²FH (1957), with “Burbidge² at UCSD” beside the citation. The neutron-source reactions shown are

$$
\begin{aligned}
{}^{12}\mathrm{C}(p,\gamma){}^{13}\mathrm{N}
  (e^+,\nu){}^{13}\mathrm{C}(\alpha,n){}^{16}\mathrm{O},\\
{}^{22}\mathrm{Ne}(\alpha,n){}^{25}\mathrm{Mg}.
\end{aligned}
$$

### PDF page 52

The proton-number versus neutron-number sketch labels Kr and Rb. The path zigzags near Kr, proceeds to the right at fixed $Z$, then turns upward and to the left near Rb.

![[Kyle Kabasares - Stellar Astrophysics - neutron capture near krypton and rubidium.png|**Fig. 18** Neutron-capture path sketched near krypton and rubidium in the $N$–$Z$ plane]]

The next two lines read “Murdered by Burbidge” and “Except for some dinosaurs!”

#### Variable stars

- Mira ($o$ Ceti) varies on a time scale of one to two years. The notes give “wonderful” as the Latin meaning of Mira.
- Algol varies on a time scale of days. The notes give “demon” as the Arabic meaning of Algol.

The notes compare $\tau_{\mathrm{dyn}}\sim1\,\unit{h}$ and $\tau_{\mathrm{nuc}}\sim10^{10}\,\unit{yr}$. They list at least 70 classes of variable stars, including T Tauri, Cepheid ($\delta$ Cephei), FK Comae, Mira, and U Geminorum.

### PDF page 53

The upper margin shows a stick-figure demonstration of “what the star does according to Kev.” The figure changes from arms and legs held close to arms and legs spread.

The notes list eclipsing and ellipsoidal variables, and spotted, rotating variables. The accompanying sketch shows a point on an ellipse that passes in front of a circle.

#### Lecture on 13 November 2019

The notes give “Rod Luger (Cat and Dog Stars)” and repeat the ellipse-and-circle sketch. The page then lists these topics.

- Spotted variability in spectral classes G, K, and M.
- T Tauri stars.
- FU Orionis stars (FUORs).
- Luminous blue variables.

### PDF page 54

The notes mention a last helium flash after the asymptotic giant branch and count “3–4 stars.” The example “FG Sag.” is accompanied by a curve that stays nearly level before dropping sharply. The date “1900” is written next to the curve. RCB variables are listed below it.

#### Pulsating variables

The notes link the period $\signal{\Pi}$ to luminosity $\energy{L}$ and identify Type I variables as classical Cepheids, with a reference to section 8.2.3. The scaling at the right is written $\signal{\Pi}\simeq1/(\mechanical{G}\langle\mechanical{\rho}\rangle)$.

> [!note]
> The handwritten density factor has no exponent. The time scale on page 14 uses the inverse square root of $\mechanical{G}\langle\mechanical{\rho}\rangle$.

One sketch shows inward and outward radial arrows between a central region and the stellar surface. The other shows bands and alternating regions on a sphere. The text says that the Sun has millions of modes.

The bottom diagram shows luminosity increasing upward. Two near-vertical lines mark the Cepheid instability strip. A diagonal labeled ZAMS crosses the diagram.

### PDF page 55

| Variable class | Notes |
| --- | --- |
| W Virginis | Type II Cepheids. Metal-poor and lower mass. |
| RR Lyrae | On the horizontal branch. Spectral types A2–F2 and periods from hours to days. |
| $\beta$ Cephei and $\gamma$ Doradus | The notes distinguish nonradial modes from the radial dynamical time and add “$g$-mode-driven.” |
| $\delta$ Scuti | A–F stars with periods from $\quantity{30}{min}$ to $\quantity{8}{h}$. |
| SX Phoenicis | Described as blue stragglers found in globular clusters. |
| ZZ Ceti | Pulsating white dwarfs. The notes list hydrogen, helium, and CNO atmospheres in this part of the page. |
| Mira | Periods from $\quantity{100}{day}$ to $\quantity{300}{day}$. |
| roAp | Periods of about $\quantity{10}{min}$. |

The margin remarks are “deltascuti.net in Vienna!” and “Ames, Iowa” beside the white dwarf entry.

### PDF page 56

#### Lecture on 18 November 2019

**Stellar energy sources**

$$
\frac{\partial\energy{L}_r}{\partial\mechanical{M}_r}=\energy{\epsilon}.
$$

The shell sketch gives $\energy{\epsilon}\,\Delta\mechanical{M}_r=\Delta\energy{L}_r$. The time-dependent energy balance is

$$
\frac{\mathrm{d}\thermal{Q}}{\mathrm{d}t}
=\frac{\partial\energy{E}}{\partial t}
+\mechanical{P}\frac{\partial}{\partial t}\left(\frac1{\mechanical{\rho}}\right)
=\energy{\epsilon}-\frac{\partial\energy{L}_r}{\partial\mechanical{M}_r}.
$$

The source brackets the two terms in the middle and labels them $\energy{\epsilon}_{\mathrm{grav}}$. The last formula on the page uses the opposite sign for that contribution.

The three adiabatic exponents are defined by

$$
\begin{aligned}
\thermal{\Gamma}_1
&=\left(\frac{\partial\ln\mechanical{P}}{\partial\ln\mechanical{\rho}}\right)_{\mathrm{ad}}
=-\left(\frac{\partial\ln\mechanical{P}}{\partial\ln(1/\mechanical{\rho})}\right)_{\mathrm{ad}},\\
\frac{\thermal{\Gamma}_2}{\thermal{\Gamma}_2-1}
&=\left(\frac{\partial\ln\mechanical{P}}{\partial\ln\thermal{T}}\right)_{\mathrm{ad}},\\
\thermal{\Gamma}_3-1
&=\left(\frac{\partial\ln\thermal{T}}{\partial\ln\mechanical{\rho}}\right)_{\mathrm{ad}}.
\end{aligned}
$$

For a relativistic gas, the notes set $\thermal{\Gamma}_1=\thermal{\Gamma}_2=\thermal{\Gamma}_3=4/3$. The gravitational energy term is written

$$
\energy{\epsilon}_{\mathrm{grav}}
=-\frac{\mechanical{P}}{\mechanical{\rho}(\thermal{\Gamma}_3-1)}
\left[
\frac{\partial\ln\mechanical{P}}{\partial t}
-\thermal{\Gamma}_1\frac{\partial\ln\mechanical{\rho}}{\partial t}
\right].
$$

### PDF page 57

For an adiabatic change, $\mechanical{P}\propto\mechanical{\rho}^{\thermal{\Gamma}_1}$. The notes write a modified scaling $\mechanical{P}\propto\mechanical{\rho}^{\thermal{\Gamma}_1-\delta}$ and obtain

$$
\energy{\epsilon}_{\mathrm{grav}}
=\frac{\delta\mechanical{P}}{\mechanical{\rho}(\thermal{\Gamma}_3-1)}
\frac{\partial\ln\mechanical{\rho}}{\partial t}>0.
$$

Here $\delta\mechanical{P}$ in the numerator is the product of the exponent shift $\delta$ and the pressure $\mechanical{P}$. The homologous ratios are

$$
\frac{\mechanical{\rho}}{\mechanical{\rho}_0}
=\left(\frac{\mechanical{R}}{\mechanical{R}_0}\right)^{-3},
\qquad
\frac{\mechanical{P}}{\mechanical{P}_0}
=\left(\frac{\mechanical{R}}{\mechanical{R}_0}\right)^{-4}.
$$

$$
\energy{L}(t)
=-\int_{\mechanical{M}}
 \frac{\mechanical{P}_0}{\mechanical{\rho}_0}
 \frac{\mechanical{R}_0}{\mechanical{R}^{2}(t)}
 \frac{\mathrm{d}\mechanical{R}}{\mathrm{d}t}
 \left(\frac{3\thermal{\Gamma}_1-4}{\thermal{\Gamma}_3-1}\right)
 \mathrm{d}\mechanical{M}_r.
$$

If $\thermal{\Gamma}_1=4/3$, then $\energy{L}(t)=0$ in this model.

#### 6.2 Thermonuclear energy sources

The references listed are Clayton (1968), Arnett (1996), and Goodstein's *States of Matter*. The notes say that Clayton can be used to learn thermodynamics and statistical mechanics.

**Nuclear reactions**

$$
\alpha+X\longrightarrow Z^*\longrightarrow Y+B.
$$

The intermediate $Z^*$ is an excited compound nucleus.

### PDF page 58

The example begins with proton capture on boron-11.

$$
p+{}^{11}\mathrm{B}\longrightarrow{}^{12}\mathrm{C}^{*}.
$$

The notes list possible outcomes for the excited carbon-12 nucleus.

$$
{}^{12}\mathrm{C}^{*}\longrightarrow
\begin{cases}
{}^{12}\mathrm{C}^{**}+\gamma,\\
{}^{11}\mathrm{B}+p,\\
{}^{11}\mathrm{C}+n,\\
{}^{12}\mathrm{N}+e^-+\bar{\nu}_e,\\
{}^{8}\mathrm{Be}+\alpha,\\
\text{other channels.}
\end{cases}
$$

The energy-level sketch shows several bound levels and a dashed level near the top of a potential well. It marks intervals of $\quantity{8}{MeV}$ and $\quantity{25}{MeV}$ and labels neutrons and protons near the bottom.

For a reaction channel $i$,

$$
\energy{\Gamma}_i\tau_i=\hbar,
\qquad
P_i=\frac{1/\tau_i}{\sum_j(1/\tau_j)}
=\frac{\tau}{\tau_i}=\frac{\energy{\Gamma}_i}{\energy{\Gamma}}.
$$

The lower binding-energy sketch marks iron-56 near the peak and uranium-238 on the descending side. The vertical axis runs from about $6$ to $9$ on the nuclear binding energy per nucleon scale. The fusion arrow points toward the peak from the light nuclei. The fission arrow points back toward it from the heavy nuclei. The unit annotation appears to read “BeV,” while the values fit the MeV scale for binding energy per nucleon.

### PDF page 59

The binding energy is the mass difference multiplied by $c^2$.

$$
\energy{B}_e
=\bigl(\text{sum of constituent masses}-\text{mass of nucleus}\bigr)c^2.
$$

The notes give the following nuclear scales.

$$
\begin{aligned}
\mechanical{R}&\simeq1.4\times10^{-15}\,\unit{m},\\
\mechanical{\rho}_{\mathrm{nuc}}&\simeq1.5\times10^{14}\,\unit{g\,cm^{-3}},\\
\mechanical{M}_n&\sim\mechanical{M}_p\sim940\,\unit{MeV\,c^{-2}}.
\end{aligned}
$$

#### Nuclear reaction rates

The cross section $\sigma_{\alpha\beta}(\mechanical{v})$ is the number of reactions per unit time per target $X$, divided by the incident flux of monoenergetic projectiles $\alpha$. Its unit is $\unit{cm^2}$.

$$
{}^{12}\mathrm{C}(p,\gamma){}^{13}\mathrm{N},
\qquad
{}^{12}\mathrm{C}+p\longrightarrow{}^{13}\mathrm{N}^{*}
\longrightarrow{}^{13}\mathrm{N}^{**}+\gamma.
$$

For projectile number density $n_\alpha$, the incident flux is $n_\alpha\mechanical{v}$. For target density $n_X$,

$$
r_{\alpha\beta}(\mechanical{v})
=n_\alpha n_X\sigma_{\alpha\beta}(\mechanical{v})\,\mechanical{v}.
$$

Averaging over the energies gives

$$
r_{\alpha\beta}=n_\alpha n_\beta\langle\sigma\mechanical{v}\rangle_{\alpha\beta}
\qquad (\unit{cm^{-3}\,s^{-1}}).
$$

The handwritten aside beside the unit reads “DON'T NEED UNITS??”

$$
\langle\sigma\mechanical{v}\rangle_{\alpha\beta}
=\frac{\displaystyle\int_0^\infty\psi(\energy{\epsilon})\,
   \sigma_{\alpha\beta}\mechanical{v}\,\mathrm{d}\energy{\epsilon}}
{\displaystyle\int_0^\infty\psi(\energy{\epsilon})\,\mathrm{d}\energy{\epsilon}}.
$$

### PDF page 60

The thermal average of the rate coefficient is

$$
\langle\sigma\mechanical{v}\rangle_{\alpha\beta}
=\left(\frac8{\pi\mechanical{m}}\right)^{1/2}
(\thermal{k}\thermal{T})^{-3/2}
\int_0^\infty
\sigma_{\alpha\beta}(\energy{\epsilon})\,
e^{-\energy{\epsilon}/(\thermal{k}\thermal{T})}\,
\energy{\epsilon}\,\mathrm{d}\energy{\epsilon},
\qquad
\mechanical{m}=\frac{\mechanical{m}_\alpha\mechanical{m}_X}
{\mechanical{m}_\alpha+\mechanical{m}_X}.
$$

The notes write the cross section as

$$
\sigma_{\alpha\beta}(\energy{\epsilon})
=\pi\signal{\bar{\lambda}}^{\,2}g(2\ell+1)
\frac{\energy{\Gamma}_\alpha\energy{\Gamma}_\beta}{\energy{\Gamma}^2}
f(\energy{\epsilon}).
$$

They mark the ratio of widths as a joint probability and call $f(\energy{\epsilon})$ the shape factor. The vector $\mechanical{\vec{L}}$ is the entrance-channel angular momentum.

$$
\pi\signal{\bar{\lambda}}^{\,2}
=\frac{\pi\hbar^2}{2\energy{\epsilon}\mechanical{m}}
=\frac{0.657}{[\energy{\epsilon}/\unit{MeV}]\mu}\,\unit{barn},
\qquad
1\,\unit{barn}=10^{-24}\,\unit{cm^2}.
$$

The sketch shows projectile $\alpha$ approaching along a line offset from the target $X$. The offset $s$ is labeled the “impact factor.” The angular momentum relation is $s\mechanical{p}=\ell\hbar$.

### PDF page 61

The impact parameter for angular momentum index $\ell$ is $s_\ell=\ell\hbar/\mechanical{p}$. The cross section of the corresponding annulus is

$$
\sigma_{\ell,\ell+1}
=\pi(s_{\ell+1}^2-s_\ell^2)
=\pi\signal{\bar{\lambda}}^{\,2}(2\ell+1).
$$

The notes say that $f(\energy{\epsilon})$ accounts for the other physics. Near a resonance,

$$
f(\energy{\epsilon})
=\frac{\energy{\Gamma}^2}
 {(\energy{\epsilon}-\energy{\epsilon}_r)^2+(\energy{\Gamma}/2)^2}.
$$

The square on the energy difference follows the Breit–Wigner formula farther down the page. It is omitted in the first handwritten denominator. The resonance energy satisfies

$$
\mechanical{m}_{Z^*}c^2+\energy{\epsilon}^*
=\mechanical{m}_\alpha c^2+\mechanical{m}_Xc^2+\energy{\epsilon}_r.
$$

**Breit–Wigner cross section**

$$
\sigma_{\alpha\beta}
=\pi\signal{\bar{\lambda}}^{\,2}g(2\ell+1)
\frac{\energy{\Gamma}_\alpha\energy{\Gamma}_\beta}
 {(\energy{\epsilon}-\energy{\epsilon}_r)^2+(\energy{\Gamma}/2)^2}.
$$

The handwritten $(2\ell+1)$ sits above the baseline beside $g$. The product follows the expression on page 60. The next line reads “Texas accent lol.”

**Nonresonant stellar energy sources**

Far from resonance, $f(\energy{\epsilon})$ is constant or varies slowly. The example is $p+p$.

### PDF page 62

The barrier penetration probability is proportional to $\mathrm{e}^{-2\pi\eta}$. In the source's electrostatic unit convention,

$$
\eta
=\frac{Z_\alpha Z_X\electric{e}^2}{\hbar\mechanical{v}}
=0.1574\,Z_\alpha Z_X
 \left(\frac{\mu}{\energy{\epsilon}/\unit{MeV}}\right)^{1/2}.
$$

The nonresonant cross section is

$$
\sigma_{\alpha\beta}(\energy{\epsilon})
=\frac{S(\energy{\epsilon})}{\energy{\epsilon}}\,
  \mathrm{e}^{-2\pi\eta}.
$$

#### Lecture on 20 November 2019

The notes repeat the thermal average, reaction rate, and channel formula.

$$
\begin{aligned}
\langle\sigma\mechanical{v}\rangle_{\alpha\beta}
&=\left(\frac8{\pi\mechanical{m}}\right)^{1/2}
(\thermal{k}\thermal{T})^{-3/2}
\int\sigma_{\alpha\beta}(\energy{\epsilon})
  \mathrm{e}^{-\energy{\epsilon}/(\thermal{k}\thermal{T})}
  \energy{\epsilon}\,\mathrm{d}\energy{\epsilon},\\
r_{\alpha\beta}&=n_\alpha n_X\langle\sigma\mechanical{v}\rangle_{\alpha\beta},\\
\sigma_{\alpha\beta}(\energy{\epsilon})
&=\pi\signal{\bar{\lambda}}^{\,2}g(2\ell+1)
  \frac{\energy{\Gamma}_\alpha\energy{\Gamma}_\beta}{\energy{\Gamma}^2}
  f(\energy{\epsilon}).
\end{aligned}
$$

The exponential factor in the nonresonant formula is labeled “Gamow penetrability.” The next line is written

$$
\langle\sigma\mechanical{v}\rangle_{\alpha\beta}
=\frac{1.6\times10^{-15}\,\unit{cm^3\,s^{-1}}}
 {\mu(\thermal{k}\thermal{T})^{3/2}}
\int_0^\infty
 \mathrm{e}^{-\left(\energy{\epsilon}/(\thermal{k}\thermal{T})+
                    b/\energy{\epsilon}^{1/2}\right)}
 \,\mathrm{d}\energy{\epsilon}.
$$

The handwritten numerical prefactor has no stated convention for the units of the energies or $S(\energy{\epsilon})$. The example is carbon-12 proton capture to nitrogen-13. The sketch shows a larger integrand peak for $\thermal{T}_6=22$ and a smaller peak for $\thermal{T}_6=20$, with a reference line near the larger peak. The subscript is read as $6$ from the stellar temperature scale. The notes give $\energy{\epsilon}\simeq30\,\unit{keV}$ and $\langle\sigma\mechanical{v}\rangle\sim\thermal{T}^{17}$.

### PDF page 63

The margin asks why nuclear physics is “dying” if funding is adequate, answers “It's sociological!”, and adds “Californium” and “Communism.”

The resonant cross section follows the energy dependence

$$
\sigma_{\alpha\beta}\sim
\left[(\energy{\epsilon}-\energy{\epsilon}_r)^2+
      (\energy{\Gamma}/2)^2\right]^{-1}.
$$

The upper plot gives $\sigma_{\alpha\beta}$ against laboratory proton energy $\energy{E}_p$. It marks the peak with $\quantity{0.460}{MeV}$ and shows cross-section scale marks of $10^{-12}$ and $10^{-4}$.

![[Kyle Kabasares - Stellar Astrophysics - proton cross section at the resonance.png|**Fig. 19** Laboratory proton cross section with a resonance near 0.460 MeV]]

The lower plot gives $N_A\langle\sigma\mechanical{v}\rangle$ against a temperature variable read as $\thermal{T}_9$. The temperature marks are $10^{-2}$ and $10^1$. The rate marks are $10^{-8}$ and $10^4$. The curve flattens briefly and then rises into the region marked “resonance.”

![[Kyle Kabasares - Stellar Astrophysics - temperature dependence of the reaction rate.png|**Fig. 20** Temperature dependence of the molar reaction rate, with a resonance contribution marked]]

### PDF page 64

The notes announce two numerical homework problems and add “emails everyday!”

$$
\alpha+X\longrightarrow Y^*\longrightarrow Y+\beta.
$$

For $A>60$, the notes emphasize neutron capture. The helium-burning neutron source is carbon-13 alpha capture to oxygen-16, with an arrow from the emitted neutron to capture in the $s$-process.

$$
\frac{\mathrm{d}n_A}{\mathrm{d}t}
=-n_n n_A\langle\sigma\mechanical{v}\rangle_A
+n_n n_{A-1}\langle\sigma\mechanical{v}\rangle_{A-1}.
$$

The first term removes nuclei of mass number $A$. The second adds nuclei through capture on mass number $A-1$. The sketch of $n_A$ versus $A$ shows three levels that decrease in steps.

#### Weak interactions

$$
\begin{aligned}
{}^{13}\mathrm{N}&\longrightarrow{}^{13}\mathrm{C}+e^++\nu_e,\\
e^-+{}^{7}\mathrm{Be}&\longrightarrow{}^{7}\mathrm{Li}+\nu_e,\\
e^-+X&\longrightarrow Y+\nu_e.
\end{aligned}
$$

The last reaction is marked “important at high $\mechanical{P}$.”

### PDF page 65

The top of the page reads “Fuller + '82 + '83” and mentions a story about Kev's PhD advisor and a film degree. The next lines mention Livermore and Los Alamos, quote “Its mission is not science,” and say “DM is not lethal.” A crossed-out line about NASA funding “ZERO-POINT ENERGY” points to *Scientific American*. “Inertial Thrust/EM Drive” and “Quack Science” appear below it.

#### Proton–proton chains

**pp I**

$$
\begin{aligned}
{}^{1}\mathrm{H}+{}^{1}\mathrm{H}&\longrightarrow{}^{2}\mathrm{H}+e^++\nu_e,\\
{}^{2}\mathrm{H}+{}^{1}\mathrm{H}&\longrightarrow{}^{3}\mathrm{He}+\gamma,\\
{}^{3}\mathrm{He}+{}^{3}\mathrm{He}&\longrightarrow{}^{4}\mathrm{He}
  +{}^{1}\mathrm{H}+{}^{1}\mathrm{H}.
\end{aligned}
$$

**pp II**

$$
\begin{aligned}
{}^{3}\mathrm{He}+{}^{4}\mathrm{He}&\longrightarrow{}^{7}\mathrm{Be}+\gamma,\\
{}^{7}\mathrm{Be}+e^-&\longrightarrow{}^{7}\mathrm{Li}+\nu_e\;(+\gamma),\\
{}^{7}\mathrm{Li}+{}^{1}\mathrm{H}&\longrightarrow{}^{4}\mathrm{He}+{}^{4}\mathrm{He}.
\end{aligned}
$$

The second helium superscript on the last handwritten line is faint. Conservation of mass number gives $4$.

The line between the branches reads “GF in Chicago Story.”

**pp III**

$$
\begin{aligned}
{}^{7}\mathrm{Be}+{}^{1}\mathrm{H}&\longrightarrow{}^{8}\mathrm{B}+\gamma,\\
{}^{8}\mathrm{B}&\longrightarrow{}^{8}\mathrm{Be}+e^++\nu_e,\\
{}^{8}\mathrm{Be}&\longrightarrow{}^{4}\mathrm{He}+{}^{4}\mathrm{He}.
\end{aligned}
$$

The last handwritten line abbreviates the parent as “8 B.” The product on the preceding line indicates beryllium-8.

### PDF page 66

The opening asides read “Monster salary,” “Everyone I know is gone now,” and “Yuri Shi man.”

The isotope chart plots proton number $Z$ against mass number $A=1,\ldots,8$. Rows are labeled H, He, Li, Be, and B. The paths for pp I, pp II, and pp III are blue, red, and green.

![[Kyle Kabasares - Stellar Astrophysics - proton-proton chain isotope paths.png|**Fig. 21** Isotope paths of the three proton–proton branches]]

The effective pp energy in the notes is $\energy{Q}_{\mathrm{eff,pp}}\simeq13\,\unit{MeV}$.

#### CNO cycles

Arrows link C and N in both directions and N and O in both directions. The notes call the three-element diagram a “tricycle” or “tri-cycle,” and the C–N part a “bicycle” or “bi-cycle.”

$$
\begin{aligned}
{}^{12}\mathrm{C}+{}^{1}\mathrm{H}
&\longrightarrow{}^{13}\mathrm{N}+\gamma,\\
{}^{13}\mathrm{N}
&\longrightarrow{}^{13}\mathrm{C}+e^++\nu_e,\\
{}^{13}\mathrm{C}+{}^{1}\mathrm{H}
&\longrightarrow{}^{14}\mathrm{N}+\gamma,\\
{}^{14}\mathrm{N}+{}^{1}\mathrm{H}
&\longrightarrow{}^{14}\mathrm{N}+\gamma.
\end{aligned}
$$

The last line repeats nitrogen-14 as the product in the handwriting.

### PDF page 67

The boxed reaction gives oxygen-15 as the product of proton capture on nitrogen-14. It supplies the corrected product for the last line on page 66.

$$
\begin{aligned}
{}^{14}\mathrm{N}+{}^{1}\mathrm{H}
&\longrightarrow{}^{15}\mathrm{O}+\gamma,\\
{}^{15}\mathrm{O}
&\longrightarrow{}^{15}\mathrm{N}+e^++\nu_e,\\
{}^{15}\mathrm{N}+{}^{1}\mathrm{H}
&\longrightarrow{}^{12}\mathrm{C}+{}^{4}\mathrm{He}.
\end{aligned}
$$

The arrow labeled “go back” returns to the start of the cycle.

The plot compares the normalized CNO and pp energy production rates against $\thermal{T}_6$. The pp denominator is $\mechanical{\rho}X^2$. The CNO denominator appears to be $\mechanical{\rho}XX_{\mathrm{CNO}}$. The CNO curve rises more steeply and crosses the pp curve above the solar mark near $\thermal{T}_6=15$. The margin says $\energy{\epsilon}_{\mathrm{pp}}\simeq10\energy{\epsilon}_{\mathrm{CNO}}$ in the Sun.

![[Kyle Kabasares - Stellar Astrophysics - CNO and proton-proton energy production.png|**Fig. 22** Normalized CNO and pp energy production rates versus temperature, with the solar point marked]]

$$
\energy{\epsilon}=\energy{\epsilon}_0\mechanical{\rho}^{\lambda}\thermal{T}^{\nu},
\qquad
\nu_{\mathrm{CNO}}=\frac{50.8}{\thermal{T}_6^{1/3}}-\frac23.
$$

#### Helium burning

$$
\alpha+\alpha\longrightarrow{}^{8}\mathrm{Be}
  (\alpha,\gamma){}^{12}\mathrm{C}
  (\alpha,\gamma){}^{16}\mathrm{O}.
$$

The first step is endothermic, with $\energy{Q}=-92\,\unit{keV}$. The temperature estimate is $\thermal{T}\sim1.2\times10^8\,\unit{K}$. The parenthetical note near the last capture reads “Unknown ~ 2.”

$$
\frac{n_X^2}{n({}^{8}\mathrm{Be})}
=\frac{\pi\mechanical{m}_\alpha\thermal{k}\thermal{T}}{h}
 \mathrm{e}^{-\energy{Q}/(\thermal{k}\thermal{T})}.
$$

The prefactor is reproduced as written. Its dimensions do not give the number density on the left.

### PDF page 68

The opening line gives $\energy{Q}=\quantity{7.4}{MeV}$.

#### Lecture dated 25 November 2018 in the notes

The handwritten year is 2018, although nearby lectures are dated 2019. The opening aside mentions a paper with Tajima and “frustrating conservation.”

**Helium burning**

Two alpha particles form beryllium-8. Further captures give carbon-12 and oxygen-16. The beryllium-8 state is labeled excited, with an arrow pointing back toward the two-alpha state and a lifetime of about $\quantity{10^{-16}}{s}$. Forming beryllium-8 is endothermic and takes about $\quantity{92}{keV}$.

The power-law expression for energy generation is repeated. The next line also uses $\energy{\epsilon}_0$, this time for an energy in keV.

$$
\begin{aligned}
\energy{\epsilon}&=\energy{\epsilon}_0\mechanical{\rho}^{\lambda}\thermal{T}^{\nu},\\
\energy{\epsilon}_0&=1.22\left(Z_\alpha Z_X\mu\thermal{T}_6^2\right)^{1/3}\,\unit{keV}.
\end{aligned}
$$

The notes give $Z_\alpha=2$, $\mu=2$, and a temperature of about $\quantity{1.2\times10^8}{K}$. The temperature subscript on that last value resembles $6$. The value is written in kelvins.

$$
\frac{n_\alpha^2}{n({}^{8}\mathrm{Be})}
=\left(\frac{\pi\mechanical{m}_\alpha\thermal{k}\thermal{T}}{h^2}\right)^{3/2}
\mathrm{e}^{-\energy{Q}/(\thermal{k}\thermal{T})}.
$$

The final line gives $\quantity{7.367}{MeV}$ for beryllium-8 alpha capture to carbon-12 and marks the excited carbon-12 state as unstable.

### PDF page 69

The notes mark a $30\%$ uncertainty for carbon-12 alpha capture to oxygen-16. They also list oxygen-16 alpha capture to neon-20.

#### Carbon, neon, and oxygen burning

| Reaction | Energy or note |
| --- | --- |
| ${}^{12}\mathrm{C}({}^{12}\mathrm{C},\alpha){}^{20}\mathrm{Ne}$ | $\quantity{4.6}{MeV}$ |
| ${}^{20}\mathrm{Ne}(\gamma,\alpha){}^{16}\mathrm{O}$ | Endothermic |
| ${}^{12}\mathrm{C}({}^{12}\mathrm{C},p){}^{23}\mathrm{Na}$ | $\quantity{2.24}{MeV}$ |
| ${}^{16}\mathrm{O}({}^{16}\mathrm{O},\alpha){}^{28}\mathrm{Si}$ | $\quantity{9.593}{MeV}$. Silicon-28 is circled. |
| ${}^{16}\mathrm{O}({}^{16}\mathrm{O},p){}^{31}\mathrm{P}$ | $\quantity{7.68}{MeV}$ |
| ${}^{16}\mathrm{O}({}^{16}\mathrm{O},n){}^{31}\mathrm{S}$ | $\quantity{1.5}{MeV}$ |

#### Silicon burning

The notes give $\thermal{T}>3\times10^9\,\unit{K}$ and label iron-56 the “most bound nucleus.” The reaction shorthand is $X(\gamma,Y)Z$, with $n$ and $p$ circled beneath the outgoing particle label.

### PDF page 70

#### Neutrino emission

The first process is labeled “positron decay” in the notes. It shows electron–positron annihilation.

$$
e^++e^-\longrightarrow\nu_e+\bar{\nu}_e.
$$

The notes say that it is appreciable at $\thermal{k}\thermal{T}\simeq2\mechanical{m}_ec^2$ and write

$$
\gamma+\gamma\rightleftharpoons e^++e^-
\rightleftharpoons\nu_e+\bar{\nu}_e.
$$

**Photoneutrinos**

$$
e^-+\gamma\longrightarrow e^-+\nu_e+\bar{\nu}_e.
$$

The next line is labeled “axions.”

$$
\gamma+\gamma\rightleftharpoons a+\bar{a}.
$$

**Bremsstrahlung**

The process on this line is written

$$
\gamma+e^-\longrightarrow e^-+\bar{\nu}_e+\nu_e+\gamma.
$$

The notes give a neutrino luminosity $\energy{L}_\nu\simeq5\times10^{12}\energy{L}_\odot$ and point from it to an underlined duration of two days.

### PDF page 71

#### Polytropes and compact objects

The notes connect loss of heat with contraction. Electron capture is written

$$
e^-+{}^{56}\mathrm{Fe}\longrightarrow{}^{56}Y+\nu_e,
$$

where the underlined $Y$ stands for the product nucleus. The notes give $\mechanical{M}\leq10.5\mechanical{M}_\odot$ and compare this value with $9\mechanical{M}_\odot$ in Hansen.

The page gives the Heisenberg uncertainty relation, with an aside marked “Joke,” and then uses an order-of-magnitude estimate.

$$
\Delta\mechanical{x}\,\Delta\mechanical{p}\geq\frac{\hbar}{2},
\qquad
\Delta\mechanical{x}\,\Delta\mechanical{p}\simeq\hbar.
$$

$$
\begin{aligned}
\langle\Delta\mechanical{x}\rangle
&\simeq\frac{\hbar}{\Delta\mechanical{p}}
 =\frac{\hbar}{(3\mechanical{m}\thermal{k}\thermal{T})^{1/2}},\\
\frac12\mechanical{m}\langle\mechanical{v}^2\rangle
&=\frac32\thermal{k}\thermal{T},\\
\mechanical{p}&=\mechanical{m}_e\mechanical{v}
 \simeq(3\mechanical{m}\thermal{k}\thermal{T})^{1/2}.
\end{aligned}
$$

$$
\mechanical{\rho}
=\frac{\mechanical{m}_p}{(\Delta\mechanical{x})^3}
=\mechanical{m}_p
 \left(\frac{3\mechanical{m}\thermal{k}\thermal{T}}{\hbar^2}\right)^{3/2}.
$$

With $a\simeq\Delta\mechanical{x}$, the electron kinetic energy is

$$
\energy{E}_e
=\frac12\mechanical{m}_e\mechanical{v}^2
=\frac{\mechanical{p}^2}{2\mechanical{m}_e}
=\frac{\hbar^2}{2\mechanical{m}_ea^2}.
$$

### PDF page 72

The electron energy per volume is

$$
\energy{\varepsilon}
=\frac{\energy{E}_e}{a^3}
\simeq\frac{\hbar^2}{2\mechanical{m}_ea^5}.
$$

Since $\mechanical{\rho}=\mechanical{m}_p/a^3$, the notes obtain $\mechanical{\rho}\propto\energy{\varepsilon}^{3/5}$. They write $\mechanical{P}\propto\energy{\varepsilon}$ and $\mechanical{P}=w\energy{\varepsilon}$ with $w=\thermal{\gamma}-1$. For the $\thermal{\gamma}=5/3$ polytrope,

$$
\boxed{\mechanical{P}=K\mechanical{\rho}^{5/3}}.
$$

The notes call $\thermal{\gamma}$ the “polytrope index.” They then write

$$
\mechanical{P}=(\thermal{\gamma}-1)\energy{\varepsilon}
=\frac23\energy{\varepsilon}
=\frac{\hbar^2}{3\mechanical{m}_ea^5}.
$$

The last boxed expression in the source is

$$
\boxed{\mechanical{P}
=\frac{\hbar^2}{2\mechanical{m}_e}
 \left(\frac{\mechanical{\rho}}{\mechanical{m}_p}\right)^{5/3}}.
$$

> [!note]
> The intermediate line in the source omits $\mechanical{\rho}$ from $a^{-3}=\mechanical{\rho}/\mechanical{m}_p$. The preceding pressure expression gives $3\mechanical{m}_e$ in the denominator, while the box gives $2\mechanical{m}_e$.

The margin reads “Worst time of year…” The notes then express the density in terms of particle, nucleus, and electron counts.

$$
\mechanical{\rho}
=(n+n_e)\mu\mechanical{m}_u
=n\mu_0\mechanical{m}_u
=n_e\mu_e\mechanical{m}_u.
$$

Here $n$ is the nucleus number density in this equation. The notes define $\mu$ as the mean mass per free particle in atomic mass units, and $\mu_0$ as the mean mass per free nucleus in the same units. The $\mu_e$ factor uses the mass per free electron.

### PDF page 73

The notes give $\mu_e$ as the mean mass in atomic mass units per free electron. The composition examples are as follows.

| Composition | $\mu$ | $\mu_0$ | $\mu_e$ |
| --- | --- | --- | --- |
| Ionized hydrogen | $0.5$ | $1$ | $1$ |
| Ionized helium | $1.33$ | $4$ | $2$ |
| Iron, as written | $56/29$ | $28$ | $2$ |

The first Fermi–Dirac pressure line is written

$$
\mechanical{P}
=\frac{(3\pi^2)^{2/3}}5\,\frac{\hbar}{\mechanical{m}_e}
 \left(\frac{\mechanical{\rho}}{\mu_e\mechanical{m}_u}\right)^{5/3}.
$$

The notes equate the ideal-gas and degeneracy pressures and write

$$
\begin{aligned}
\mechanical{P}
&=\frac{\mechanical{\rho}\thermal{k}\thermal{T}}{\mu\mechanical{m}_u}
 =\frac{(3\pi)^{2/3}}5\,\frac{\hbar}{\mechanical{m}_e}
 \left(\frac{\mechanical{\rho}}{\mu_e\mechanical{m}_u}\right)^{5/3},\\
\frac{\thermal{T}}{\mechanical{\rho}_{\mathrm{cr}}^{3/2}}
&=\frac{(2\pi^2)^{2/3}\hbar}
 {5\mechanical{m}_e\mechanical{m}_u^{2/3}\thermal{k}}\,
 \frac{\mu}{\mu_e^{5/3}}.
\end{aligned}
$$

> [!note]
> The pressure lines show $\hbar$ to the first power, while the energy scale on page 72 uses $\hbar^2$. The written coefficient also varies across the three lines. Equating the two density powers gives $\thermal{T}\propto\mechanical{\rho}_{\mathrm{cr}}^{2/3}$, which agrees with the power of temperature in the next line.

$$
\mechanical{\rho}_{\mathrm{cr}}
=2.38\times10^{-5}
 \left(\frac{\thermal{T}/\unit{K}}{\mu}\right)^{3/2}
 \mu_e^{5/2}\,\unit{kg\,m^{-3}}.
$$

For a helium white dwarf, the notes give $\thermal{T}=10^9\,\unit{K}$ and box $\mechanical{\rho}_{\mathrm{cr}}\simeq10^9\,\unit{kg\,m^{-3}}$.

### PDF page 74

#### Lecture dated 1 December 2019

The notes begin with a speed condition and normalized variables.

$$
\mechanical{D}^2\gg\frac{2\thermal{k}\thermal{T}_0}{\mu},
\qquad
x=\frac{\thermal{T}}{\thermal{T}_0},
\qquad
y=\frac{\mechanical{\rho}}{\mechanical{\rho}_0},
\qquad
d=\frac{\mechanical{D}^2\mu}{\thermal{k}\thermal{T}_0}.
$$

For the speed condition to be dimensionally consistent, $\mu$ is a particle mass in these lines. The two equations in the normalized variables are

$$
x+dy^2=y+dy,\qquad 5x+dy^2=5+d.
$$

**Relativistic stars**

The page reviews nonrelativistic degeneracy. It writes the critical density with $\mu$ in both places, and gives $\thermal{T}\sim10^9\,\unit{K}$.

$$
\mechanical{\rho}_{\mathrm{cr}}
=2.38\times10^{-5}\,\unit{kg\,m^{-3}}
 \left(\frac{\thermal{T}/\unit{K}}{\mu}\right)^{3/2}\mu^{5/2}.
$$

The corresponding last factor on page 73 is $\mu_e^{5/2}$.

The temperature diagram labels radiation pressure, classical gas, nonrelativistic electron degeneracy, relativistic electron degeneracy, and crystallization. A green track runs from envelope to interior to core. The blue boundary is labeled $\thermal{T}^{3/2}$ along its rising part. The vertical axis is $\log[\thermal{T}/\unit{K}]$. The horizontal scale runs from $-2$ to $12$ without a written axis title on this page.

![[Kyle Kabasares - Stellar Astrophysics - stellar matter regimes.png|**Fig. 23** Temperature diagram of stellar matter regimes, with radiation pressure, degeneracy, and crystallization boundaries marked]]

### PDF page 75

The notes estimate when the electrons become relativistic by setting $\mechanical{p}=\mechanical{m}_ec$ and $\Delta\mechanical{x}\,\Delta\mechanical{p}=\hbar$.

$$
\mechanical{\rho}
=\frac{\mechanical{m}_p}{(\Delta\mechanical{x})^3}
=\mechanical{m}_p\left(\frac{\mechanical{m}_ec}{\hbar}\right)^3
=3\times10^{10}\,\unit{kg\,m^{-3}}.
$$

The next estimate includes the electron composition factor.

$$
\mechanical{\rho}
=\frac{\mechanical{m}_u}{3\pi^2}\left(\frac{\mechanical{m}_ec}{\hbar}\right)^3\mu_e
\simeq9.74\times10^8\mu_e\,\unit{kg\,m^{-3}}.
$$

For the relativistic electron gas,

$$
\energy{E}=\mechanical{p}c=\frac{\hbar c}{a},
\qquad
\energy{\varepsilon}=\frac{\energy{E}}{a^3}=\frac{\hbar c}{a^4}.
$$

$$
\mechanical{\rho}\sim\frac{\mechanical{m}_p}{a^3},
\qquad
\mechanical{P}=\frac{\hbar c}{3a^4}
=(\thermal{\gamma}-1)\energy{\varepsilon},
\qquad
\thermal{\gamma}=\frac43.
$$

The shell sketch shows pressure force $\mechanical{F}_p$ upward and gravity $\mechanical{F}_g$ downward. In these equations, $\mechanical{M}$ denotes the enclosed mass.

$$
\frac{\mathrm{d}\mechanical{P}}{\mathrm{d}\mechanical{r}}
=-\frac{\mechanical{G}\mechanical{M}\mechanical{\rho}}{\mechanical{r}^2},
\qquad
\mathrm{d}\mechanical{M}=4\pi\mechanical{r}^2\mechanical{\rho}\,\mathrm{d}\mechanical{r}.
$$

$$
\frac{\mathrm{d}}{\mathrm{d}\mechanical{r}}
\left[-\frac{\mechanical{r}^2}{\mechanical{G}\mechanical{\rho}}\,
      \frac{\mathrm{d}\mechanical{P}}{\mathrm{d}\mechanical{r}}\right]
=\frac{\mathrm{d}\mechanical{M}}{\mathrm{d}\mechanical{r}}
=4\pi\mechanical{r}^2\mechanical{\rho}.
$$

For $\mechanical{P}=K\mechanical{\rho}^{\thermal{\gamma}}$, the notes give $\thermal{\gamma}=5/3$ in the nonrelativistic case and $\thermal{\gamma}=4/3$ in the relativistic case.

### PDF page 76

The polytropic exponent satisfies $\thermal{\gamma}=1+1/n$. Thus $n=3/2$ for $\thermal{\gamma}=5/3$ and $n=3$ for $\thermal{\gamma}=4/3$. With central density $\mechanical{\rho}_c$, define

$$
\mechanical{\rho}=\mechanical{\rho}_c\omega^n,
\qquad
\omega=\left(\frac{\mechanical{\rho}}{\mechanical{\rho}_c}\right)^{1/n}.
$$

The radial coordinate is

$$
\mechanical{r}=az,
\qquad
a=\left[\frac{(n+1)K\mechanical{\rho}_c^{1/n-1}}{4\pi\mechanical{G}}\right]^{1/2}.
$$

The Lane–Emden equation is

$$
\frac1{z^2}\frac{\mathrm{d}}{\mathrm{d}z}
 \left(z^2\frac{\mathrm{d}\omega}{\mathrm{d}z}\right)+\omega^n=0.
$$

The notes identify $n=0$, $1$, and $5$ as cases with known analytic solutions. For $n<5$, both $\omega$ and the density reach zero at a finite radius.

The sketch compares $n=3/2$ and $n=3$. It gives $z_{3/2}=3.7$ for the first zero of the steeper curve. The $n=3$ curve reaches zero near $7$.

![[Kyle Kabasares - Stellar Astrophysics - Lane-Emden solutions.png|**Fig. 24** Lane–Emden solution sketches for polytropic indices 3/2 and 3]]

### PDF page 77

The central density scales as

$$
\mechanical{\rho}_c\propto\mechanical{R}^{2n/(1-n)}.
$$

For $n=3/2$, this gives $\mechanical{\rho}_c\propto\mechanical{R}^{-6}$.

$$
\begin{aligned}
\mechanical{M}
&=\int_0^{\mechanical{R}}4\pi\mechanical{\rho}\mechanical{r}^2\,\mathrm{d}\mechanical{r}\\
&=4\pi\mechanical{\rho}_c\int_0^{\mechanical{R}}
       \omega^n\mechanical{r}^2\,\mathrm{d}\mechanical{r}\\
&=4\pi\mechanical{\rho}_c\left(\frac{\mechanical{R}}{z_n}\right)^3
  \int_0^{z_n}\omega^n z^2\,\mathrm{d}z.
\end{aligned}
$$

The dimensionless integral is $2.71$ for $n=3/2$ (nonrelativistic) and $2.02$ for $n=3$ (relativistic).

$$
\mechanical{M}\propto\mechanical{\rho}_c\mechanical{R}^3
\propto\mechanical{R}^{(3-n)/(1-n)}.
$$

Thus $\mechanical{M}\propto\mechanical{R}^{-3}$ for $n=3/2$. For $n=3$, the mass is constant. The notes write the limiting mass as follows.

$$
\mechanical{M}
=\frac{(3\pi)^{3/2}}{2}
 \left(\frac{\hbar c}{\mechanical{G}}\right)^{3/2}
 \frac{2.02}{(\mu_e\mechanical{m}_u)^2}
=1.457\left(\frac2{\mu_e}\right)\mechanical{M}_\odot.
$$

> [!note]
> The denominator under $\hbar c$ resembles $a$ in the handwriting. It is read as $\mechanical{G}$ from the mass dimensions. The written coefficient $(3\pi)^{3/2}/2$ and the final unsquared composition factor are kept as written. The preceding expression scales as $\mu_e^{-2}$.

The page labels C, O, and He with $\mu_e=2$ and remarks that something happens if the mass exceeds the limit. It gives $\mechanical{M}=5.73\mechanical{M}_\odot$ for $\mu_e=1$ and adds “GR is needed.”

### PDF page 78

The last page gives the compactness estimate

$$
\frac{2\mechanical{G}\mechanical{M}}{\mechanical{R}c^2}=0.15,
\qquad
\mechanical{M}=1\mechanical{M}_\odot,\qquad
\mechanical{R}=10\,\unit{km}.
$$

> [!note]
> With the mass and radius written on the page, $\mechanical{G}\mechanical{M}/(\mechanical{R}c^2)\approx0.15$. The expression with the factor of two is approximately $0.30$.

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
| $\tau_{\mathrm{dyn}}$ | $\unit{s}$ | Dynamical time scale | The characteristic time for a dynamical response to gravity. |
| $\langle\mechanical{\rho}\rangle$ | $\unit{g\,cm^{-3}}$ | Mean mass density | The mass of the star divided by its volume. |
| $\energy{E}$ | $\unit{erg\,cm^{-3}}$ | Thermal energy density | The gas energy per unit volume in the temperature estimate. |
| $n$ | $\unit{cm^{-3}}$ | Particle number density | The number of gas particles per unit volume. |
| $\thermal{k}$ | $\unit{erg\,K^{-1}}$ | Boltzmann constant | The conversion factor between temperature and energy per particle. |
| $N_A$ | $\unit{mol^{-1}}$ | Avogadro constant | The number of particles per mole. |
| $\mu$ | $\unit{g\,mol^{-1}}$ | Mean molar mass | The mass per mole of gas particles, as used in the density conversion. |
| $\signal{\Pi}$ | $\unit{s}$ | Sound crossing period | The time for a sound wave to cross the stellar diameter. |
| $\signal{v}_s$ | $\unit{cm\,s^{-1}}$ | Sound speed | The speed of an adiabatic pressure wave through the stellar gas. |
| $\thermal{\Gamma}_1$ | 1 | First adiabatic exponent | The logarithmic derivative of pressure with respect to density at constant entropy. |
| $\langle\mechanical{\rho}_\odot\rangle$ | $\unit{g\,cm^{-3}}$ | Mean solar density | The mean density of the Sun used to scale the sound crossing period. |
| $\mechanical{\rho}_c$ | $\unit{g\,cm^{-3}}$ | Central mass density | The density at the center, equal to the density throughout the uniform model. |
| $\mechanical{P}_c$ | $\unit{dyn\,cm^{-2}}$ | Central pressure | The pressure at the center of the star. |
| $Z_i$ | 1 | Nuclear charge number | The number of protons in a nucleus of species $i$. |
| $A_i$ | 1 | Mass number | The number of nucleons in a nucleus of species $i$. |
| $X_i$ | 1 | Mass fraction | The fraction of the gas mass contributed by species $i$. |
| $n_i$ | $\unit{cm^{-3}}$ | Species number density | The number of ions of species $i$ per unit volume. |
| $n_{\mathrm{ions}}$, $n_I$ | $\unit{cm^{-3}}$ | Ion number density | The total number of ions per unit volume. |
| $\mu_I$ | $\unit{g\,mol^{-1}}$ | Mean ion molar mass | The mass per mole of ions in the mixture. |
| $n_{e,i}$ | $\unit{cm^{-3}}$ | Electron number density from species $i$ | The number of free electrons per unit volume supplied by species $i$. |
| $y_i$ | 1 | Ionization fraction | The fraction of the $Z_i$ electrons that species $i$ supplies as free electrons. |
| $n_e$ | $\unit{cm^{-3}}$ | Electron number density | The number of free electrons per unit volume. |
| $\mu_e$ | $\unit{g\,mol^{-1}}$ | Mean mass per mole of electrons | The total gas mass divided by the amount of free electrons. |
| $\mechanical{\rho}_I$ | $\unit{g\,cm^{-3}}$ | Ion mass density | The mass of the ions per unit volume. |
| $\mechanical{\rho}_e$ | $\unit{g\,cm^{-3}}$ | Density associated with the electron contribution | The density denoted by $\mu_e n_e/N_A$ in the source. |
| $X$ | 1 | Hydrogen mass fraction | The fraction of stellar mass in hydrogen. |
| $Y$ | 1 | Helium mass fraction | The fraction of stellar mass in helium. |
| $Z$ | 1 | Metallicity | The fraction of stellar mass in elements heavier than helium. |
| $Y_p$ | 1 | Primordial helium mass fraction | The helium mass fraction produced after the Big Bang. |
| $\thermal{T}_c$ | $\unit{K}$ | Central temperature | The temperature corresponding to the central pressure and density. |
| — | $\unit{erg\,g^{-1}}$ | Energy released per mass of hydrogen | The energy yield of the conversion from hydrogen to helium. |
| — | $\unit{yr}$ | Hydrogen-burning time estimate | The time estimate for burning all the hydrogen in the model. |
| $\energy{L}_r$ | $\unit{erg\,s^{-1}}$ | Luminosity at radius $\mechanical{r}$ | The power that passes through the sphere of radius $\mechanical{r}$. |
| $\energy{F}$ | $\unit{erg\,cm^{-2}\,s^{-1}}$ | Energy flux | The power through a unit area normal to the outward direction. |
| $\energy{\epsilon}$ | $\unit{erg\,g^{-1}\,s^{-1}}$ | Specific energy production rate | The power generated per unit mass of stellar material. |
| $\energy{\epsilon}_0$ | — | Energy production coefficient | The coefficient of the density and temperature power law. Its units depend on the exponents. |
| $D$ | $\unit{cm^2\,s^{-1}}$ | Radiative diffusion coefficient | The proportionality factor between energy flux and the radiation energy density gradient. |
| $a$ | $\unit{erg\,cm^{-3}\,K^{-4}}$ | Radiation constant | The constant in the radiation energy density $a\thermal{T}^4$. |
| $\kappa$ | $\unit{cm^2\,g^{-1}}$ | Mass opacity | The attenuation cross section per unit mass in the radiative transport model. |
| $\kappa_0$ | — | Opacity coefficient | The coefficient of the opacity power law. Its units depend on the exponents. |
| $c$ | $\unit{cm\,s^{-1}}$ | Speed of light | The speed of light in the radiative diffusion relation. |
| $\mechanical{r}_0$ | $\unit{cm}$ | Reference radial distance | The radial coordinate in the reference star. |
| $\mechanical{R}_0$ | $\unit{cm}$ | Reference stellar radius | The radius of the reference star. |
| $\mechanical{M}_0$ | $\unit{g}$ | Reference stellar mass | The total mass of the reference star. |
| $\mechanical{M}_{r,0}$ | $\unit{g}$ | Reference enclosed mass | The mass enclosed within the corresponding radius of the reference star. |
| $\mechanical{\rho}_0$ | $\unit{g\,cm^{-3}}$ | Reference density | The density at the corresponding position in the reference star. |
| $\mechanical{P}_0$ | — | Pressure coefficient | The coefficient in the equation of state, with units that depend on the exponents. |
| $\thermal{T}_{\mathrm{eff}}$ | $\unit{K}$ | Effective temperature | The blackbody temperature that gives the star's radiated flux. |
| $\thermal{T}_{\mathrm{eff},\odot}$ | $\unit{K}$ | Effective solar temperature | The effective temperature of the Sun. |
| $\thermal{\sigma}$ | $\unit{W\,m^{-2}\,K^{-4}}$ | Stefan–Boltzmann constant | The factor relating blackbody flux to the fourth power of temperature. |
| $\energy{\epsilon}_{\mathrm{nuc}}$ | $\unit{erg\,g^{-1}\,s^{-1}}$ | Specific nuclear energy production rate | The energy released by nuclear reactions per unit mass per unit time. |
| $\energy{E}_\gamma$ | $\unit{eV}$ | Photon energy | The energy of the photon in the decay sketch. |
| $\mechanical{m}_s$, $\mechanical{m}_{\mathrm{sterile}}$ | $\unit{eV\,c^{-2}}$ | Sterile neutrino mass | The mass parameter in the photon energy relation. |
| $\theta$ | 1 | Mixing angle | The angle in the neutrino mixing expression. |
| — | $\unit{nm}$ | UV wavelength | The wavelength range listed for the ultraviolet spectrum. |
| $\sigma_8$ | 1 | Density fluctuation amplitude | The root-mean-square amplitude on the smoothing scale denoted by the subscript. |
| — | $\unit{Mpc}$ | Smoothing scale | The size of the window sketched next to the variance. |
| $\signal{k}$ | $\unit{Mpc^{-1}}$ | Wavenumber | The integration variable in the variance expression. |
| $P(\signal{k})$ | — | Power spectrum | The power as a function of wavenumber. Its units depend on the convention used for the integral. |
| $W(\signal{k}_r)$ | 1 | Window function | The smoothing function in the variance expression. |
| $\sum\mechanical{m}_\nu$ | $\unit{eV\,c^{-2}}$ | Sum of neutrino masses | The sum written next to the smoothing sketch. |
| $\signal{\lambda}_{\mathrm{fs}}$ | $\unit{Mpc}$ | Mean free-streaming scale | The distance scale given by the time integral of particle speed. |
| $t_{\mathrm{nr}}$ | $\unit{s}$ | Time at the nonrelativistic transition | The upper time limit in the streaming estimate. |
| $\mechanical{v}$ | $\unit{cm\,s^{-1}}$ | Streaming speed | The speed used in the free-streaming distance integral. |
| $\energy{\epsilon}_{\mathrm{grav}}$ | $\unit{erg\,g^{-1}\,s^{-1}}$ | Specific gravitational energy contribution | The contribution to net energy production from gravitational processes. |
| $\energy{\epsilon}_\nu$ | $\unit{erg\,g^{-1}\,s^{-1}}$ | Specific neutrino energy loss rate | The energy lost to neutrinos per unit mass per unit time. |
| $\energy{\epsilon}_X$ | $\unit{erg\,g^{-1}\,s^{-1}}$ | Additional specific energy loss rate | The extra loss term in the net energy equation. |
| $\delta_X$ | 1 | Fractional energy loss | The fraction of the nuclear production rate removed by the parameterized loss. |
| $y$ | 1 | Radius scale factor | The ratio of the rescaled radius to the original radius. |
| $\tau$ | $\unit{yr}$ | Stellar time scale | The time scale whose fractional change is estimated from the additional loss. |
| $Y_{\mathrm{initial}}$, $Y_{\mathrm{init}}$ | 1 | Initial solar helium mass fraction | The helium mass fraction at the start of the solar model. |
| $Y_{\mathrm{primordial}}$ | 1 | Primordial helium mass fraction | The helium mass fraction compared with the initial solar value. |
| $\mathrm{d}n/\mathrm{d}t$ | — | Event rate | The rate sketched against redshift. The source gives no normalization. |
| $z$ | 1 | Redshift | The horizontal coordinate of the DSNB sketch. |
| $\magnetic{\vec{B}}$ | $\unit{G}$ | Magnetic flux density | The magnetic field associated with stellar activity. |
| $M_V$ | 1 | Absolute visual magnitude | The magnitude plotted on the vertical axes of the color–magnitude diagrams. |
| $B-V$ | 1 | Color index | The difference between the blue and visual magnitudes. |
| — | $\unit{yr}$ | Main-sequence time estimates | The time values written near the upper and lower ends of the main sequence. |
| $\mechanical{M}_J$ | $\unit{kg}$ | Jupiter mass | The mass of Jupiter, used as a unit for brown dwarfs. |
| $\mathrm{D}/\mathrm{H}$ | 1 | Deuterium-to-hydrogen abundance ratio | The abundance of deuterium relative to hydrogen. |
| — | $\unit{yr}$ | Brown dwarf burning lifetime | The lifetime estimate written next to the deuterium-burning discussion. |
| $\tau_{\mathrm{nuc}}$ | $\unit{yr}$ | Nuclear time scale | The duration over which nuclear burning can supply the star's energy. |
| — | $\unit{yr}$ | Age of the universe | The approximate comparison time given in the lecture. |
| $V$ | 1 | Visual magnitude | The vertical coordinate in the Hertzsprung-gap sketch. |
| — | 1 | Number of stars in a globular cluster | The range of star counts given alongside the Hertzsprung-gap sketch. |
| $t_{\mathrm{univ}}$ | $\unit{Gyr}$ | Age of the universe | The cosmological age compared with estimates for globular clusters. |
| — | $\unit{Gyr}$ | Stellar and cluster ages | Age estimates for globular clusters and HD 140283. |
| $\dot{\mechanical{M}}$ | $\unit{kg\,s^{-1}}$ | Mass-loss rate | The rate at which the star loses mass, expressed as a positive magnitude. |
| $\mechanical{v}_\infty$ | $\unit{cm\,s^{-1}}$ | Terminal wind speed | The speed that the wind approaches far from the star. |
| $t_{\mathrm{MS}}$ | $\unit{yr}$ | Main-sequence time estimate | The time label used for the mass-loss estimate on this page. |
| $\thermal{T}_\oplus$, $\thermal{T}_{\mathrm{Earth,now}}$, $\thermal{T}_{\mathrm{Earth,future}}$ | $\unit{K}$ | Earth temperature | The present and estimated future temperatures in the red giant example. |
| $\energy{L}_{\odot,f}$, $\energy{L}_{\odot,n}$ | $\unit{W}$ | Future and present solar luminosity | The two luminosities used in the temperature ratio. |
| $\Delta\mechanical{x}$ | $\unit{m}$ | Position uncertainty | The spatial uncertainty of an electron in the degeneracy argument. |
| $\Delta\mechanical{p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum uncertainty | The momentum uncertainty in the degeneracy argument. |
| $\hbar$ | $\unit{J\,s}$ | Reduced Planck constant | The quantum of action in the uncertainty relation. |
| $N$ | 1 | Particle count | The number of particles in the gas volume. |
| — | $\unit{s}$ | Two-nucleus contact time | The time written beside the two helium nuclei in the triple-alpha sketch. |
| $\mechanical{m}/\mechanical{M}$ | 1 | Fractional mass coordinate | The enclosed mass as a fraction of the total stellar mass. |
| $\Phi$ | $\unit{pc^{-3}\,mag^{-1}}$ | White dwarf luminosity function | The number density of white dwarfs per bolometric magnitude. |
| $\mathrm{C}/\mathrm{O}$ | 1 | Carbon-to-oxygen ratio | The composition ratio identified as a source of uncertainty in the cooling calculation. |
| — | $\unit{MeV}$ | Binding energy per nucleon | The energy per nucleon sketched against nuclear mass number. |
| $\energy{E}$ | $\unit{MeV}$ | Electron energy | The energy plotted in the collapse sketch. |
| $f$ | — | Electron distribution | The distribution sketched against electron energy, with no stated normalization. |
| $\delta\mechanical{m}_{np}$ | $\unit{MeV\,c^{-2}}$ | Neutron–proton mass difference | The mass-difference scale marked near the end of the energy distribution. |
| $\thermal{S}_\gamma$ | $\unit{erg\,K^{-1}}$ | Radiation entropy | The entropy scale in the plot, expressed in units of the Boltzmann constant. |
| $\mechanical{m}_e$ | $\unit{kg}$ | Electron mass | The particle mass on the electron side of the degeneracy comparison. |
| $\mechanical{m}_n$, $\mechanical{M}_n$ | $\unit{kg}$ | Neutron mass | The particle mass on the neutron side of the degeneracy comparison. |
| — | $\unit{kg}$ | Chandrasekhar mass | The mass limit noted for electron degeneracy support. |
| $Z$ | 1 | Proton number | The number of protons in the nucleus in the neutron-drip diagram. |
| $N$ | 1 | Neutron number | The number of neutrons in the nucleus in the neutron-drip diagram. |
| $\thermal{\Gamma}_2$ | 1 | Second adiabatic exponent | The exponent defined through the pressure derivative with respect to temperature. |
| $\thermal{\Gamma}_3$ | 1 | Third adiabatic exponent | The exponent defined through the temperature derivative with respect to density. |
| $\mechanical{P}_0$ | $\unit{dyn\,cm^{-2}}$ | Reference stellar pressure | The pressure of the initial model used in the homologous ratio. |
| $\energy{\Gamma}_i$, $\energy{\Gamma}_\alpha$, $\energy{\Gamma}_\beta$ | $\unit{MeV}$ | Partial decay width | The energy width associated with decay through channel $i$. |
| $\energy{\Gamma}$ | $\unit{MeV}$ | Total decay width | The sum of the partial widths of the available channels. |
| $\tau_i$ | $\unit{s}$ | Partial lifetime | The reciprocal of the rate for channel $i$. |
| $\tau$ | $\unit{s}$ | Total lifetime | The reciprocal of the sum of the channel rates. |
| $P_i$ | 1 | Branching probability | The fraction of decays through channel $i$. |
| $\energy{B}_e$ | $\unit{MeV}$ | Nuclear binding energy | The energy corresponding to the mass defect of the nucleus. |
| $\mechanical{R}$ | $\unit{m}$ | Nuclear radius scale | The length scale given with the nuclear density. |
| $\mechanical{\rho}_{\mathrm{nuc}}$ | $\unit{g\,cm^{-3}}$ | Nuclear mass density | The mass per unit volume of nuclear matter. |
| $\mechanical{m}_p$, $\mechanical{M}_p$ | $\unit{MeV\,c^{-2}}$ | Proton mass | The proton mass in the nucleon-mass estimate. |
| $\sigma_{\alpha\beta}$ | $\unit{cm^2}$ | Reaction cross section | The effective area for the specified reaction. |
| $\mechanical{v}$ | $\unit{cm\,s^{-1}}$ | Projectile speed | The speed entering the incident flux and rate. |
| $n_\alpha$, $n_X$, $n_\beta$ | $\unit{cm^{-3}}$ | Projectile and target number densities | The number of particles per unit volume for the incident and target species. |
| $r_{\alpha\beta}$ | $\unit{cm^{-3}\,s^{-1}}$ | Reaction rate density | The number of reactions per unit volume per unit time. |
| $\langle\sigma\mechanical{v}\rangle_{\alpha\beta}$ | $\unit{cm^3\,s^{-1}}$ | Reaction rate coefficient | The energy-distribution average of cross section times speed. |
| $\energy{\epsilon}$ | $\unit{MeV}$ | Collision energy | The integration variable in the reaction rate average. |
| $\psi(\energy{\epsilon})$ | — | Energy distribution weight | The weight used to average over collision energies. |
| $\mechanical{m}$ | $\unit{kg}$ | Reduced mass | The reduced mass of the projectile–target pair. |
| $\mechanical{m}_\alpha$, $\mechanical{m}_X$ | $\unit{kg}$ | Projectile and target masses | The two masses used in the reduced mass. |
| $\signal{\bar{\lambda}}$ | $\unit{m}$ | Reduced de Broglie wavelength | The wavelength divided by $2\pi$ for the relative motion. |
| $\mu$ | 1 | Reduced mass in atomic mass units | The numerical mass in the cross-section conversion to barns. |
| $\mechanical{\vec{L}}$ | $\unit{J\,s}$ | Entrance-channel angular momentum | The orbital angular momentum of the incoming pair. |
| $s$ | $\unit{m}$ | Impact parameter | The transverse offset of the incoming trajectory from the target. |
| $\mechanical{p}$ | $\unit{kg\,m\,s^{-1}}$ | Relative momentum | The momentum used with the impact parameter to obtain the angular momentum. |
| $\sigma_{\ell,\ell+1}$ | $\unit{cm^2}$ | Partial cross section | The area between adjacent impact parameter values. |
| $\energy{\epsilon}_r$ | $\unit{MeV}$ | Resonance energy | The collision energy at the center of the resonance. |
| $\energy{\epsilon}^*$ | $\unit{MeV}$ | Excitation energy | The excitation term on the compound-nucleus side of the energy balance. |
| $\mechanical{m}_{Z^*}$ | $\unit{kg}$ | Compound nucleus mass | The mass term of the intermediate nucleus in the resonance condition. |
| $f(\energy{\epsilon})$ | 1 | Shape factor | The energy-dependent factor multiplying the reaction cross section. |
| $\eta$ | 1 | Coulomb penetration parameter | The parameter in the Gamow exponential. |
| $\electric{e}$ | $\unit{statC}$ | Elementary charge | The charge magnitude in the source's electrostatic unit convention. |
| $S(\energy{\epsilon})$ | $\unit{MeV\,barn}$ | Astrophysical S-factor | The factor remaining after separation of the leading energy dependence and barrier penetrability. |
| $b$ | $\unit{MeV^{1/2}}$ | Gamow exponent coefficient | The coefficient of inverse square root of energy in the exponential. |
| $\thermal{T}_6$ | 1 | Temperature in millions of kelvins | The numerical temperature that labels the integrand curves. |
| $\energy{E}_p$ | $\unit{MeV}$ | Laboratory proton energy | The energy of the incident proton measured in the laboratory frame. |
| $\thermal{T}_9$ | 1 | Temperature in billions of kelvins | The numerical temperature used for the rate plot. |
| $N_A\langle\sigma\mechanical{v}\rangle$ | $\unit{cm^3\,mol^{-1}\,s^{-1}}$ | Molar reaction rate coefficient | The thermal rate coefficient multiplied by the Avogadro constant. |
| $n_A$, $n_{A-1}$ | $\unit{cm^{-3}}$ | Nuclear number densities | The number densities at adjacent mass numbers in the neutron-capture chain. |
| $n_n$ | $\unit{cm^{-3}}$ | Neutron number density | The number of free neutrons per unit volume. |
| $\energy{Q}_{\mathrm{eff,pp}}$ | $\unit{MeV}$ | Effective pp energy | The energy scale given after the proton–proton branch chart. |
| $X_{\mathrm{CNO}}$ | 1 | CNO mass fraction | The combined abundance of carbon, nitrogen, and oxygen used in the normalization. |
| $\energy{\epsilon}_{\mathrm{pp}}$, $\energy{\epsilon}_{\mathrm{CNO}}$ | $\unit{erg\,g^{-1}\,s^{-1}}$ | Specific burning rates | The energy production rates per unit mass for pp and CNO burning. |
| $\energy{Q}$ | $\unit{keV}$ | Reaction energy | The energy change of the first helium-burning step. |
| $n({}^{8}\mathrm{Be})$ | $\unit{cm^{-3}}$ | Beryllium-8 number density | The density of the intermediate nucleus in the helium-burning relation. |
| $h$ | $\unit{J\,s}$ | Planck constant | The action constant written in the equilibrium prefactor. |
| $\energy{\epsilon}_0$ | $\unit{keV}$ | Characteristic collision energy | The energy scale written in keV on the second line of the helium-burning estimate. |
| $\energy{L}_\nu$ | $\unit{erg\,s^{-1}}$ | Neutrino luminosity | The power carried away by neutrinos. |
| — | $\unit{day}$ | Neutrino emission time | The two-day duration written beside the luminosity. |
| $\energy{E}_e$ | $\unit{J}$ | Electron kinetic energy | The nonrelativistic kinetic energy in the degeneracy estimate. |
| $a$ | $\unit{m}$ | Confinement length | The characteristic electron spacing estimated from position uncertainty. |
| $K$ | $\unit{dyn\,cm^3\,g^{-5/3}}$ | Polytropic constant | The coefficient of the density power law for the nonrelativistic gas. |
| $\mechanical{m}_u$ | $\unit{kg}$ | Atomic mass constant | The mass unit used in the composition formula. |
| $\mu$, $\mu_0$, $\mu_e$ | 1 | Mass per particle, nucleus, or electron in atomic mass units | The numerical mass factors in the three equivalent density expressions. |
| $n$ | $\unit{cm^{-3}}$ | Nucleus number density | The nucleus count per volume in the compact-object composition formula. |
| $\mechanical{\rho}_{\mathrm{cr}}$ | $\unit{kg\,m^{-3}}$ | Critical density | The density at which the ideal-gas and degeneracy pressures are equal in the estimate. |
| $\mechanical{D}$ | $\unit{m\,s^{-1}}$ | Speed scale | The speed inferred from the squared term in the opening condition. |
| $\thermal{T}_0$ | $\unit{K}$ | Reference temperature | The temperature used to normalize the thermal terms. |
| $\mu$ | $\unit{kg}$ | Particle mass scale | The mass in the speed condition on page 74. |
| $\mechanical{F}_p$ | $\unit{dyn}$ | Pressure force | The outward force due to the pressure difference across the shell. |
| $\mechanical{F}_g$ | $\unit{dyn}$ | Gravitational force | The inward gravitational force on the shell. |
| $n$ | 1 | Polytropic index | The index that determines the density profile and the equation-of-state exponent. |
| $a$ | $\unit{m}$ | Polytropic length scale | The factor that converts the normalized coordinate to radius. |
| $2\mechanical{G}\mechanical{M}/(\mechanical{R}c^2)$ | 1 | Relativistic compactness | The Schwarzschild radius expressed as a fraction of the object's radius. |
