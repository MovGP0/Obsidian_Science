---
title: "Stellar structure equations, homology, and energy transport"
---

> [!TLDR]
> Compare constant-density and homologous stellar models and use energy generation and transport to understand stellar interiors.

## Worked lecture material

##### Dynamical times

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

##### Temperature estimates

Here $\energy{E}$ denotes energy per unit volume.

$$
\energy{E}=\frac32 n\thermal{k}\thermal{T}
=\frac32\frac{\mechanical{\rho}N_A\thermal{k}\thermal{T}}{\mu}
\qquad (\unit{erg\,cm^{-3}}).
$$

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

##### Sound waves

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

For $\thermal{\Gamma}_1\sim 1$, the notes estimate

$$
\signal{\Pi}\approx
\frac{\sqrt{12}}{\sqrt{\mechanical{G}\langle\mechanical{\rho}\rangle}}
\approx \frac{0.04\,\unit{day}}
{\left(\langle\mechanical{\rho}\rangle/\langle\mechanical{\rho}_\odot\rangle\right)^{1/2}}.
$$

The notes add a factor $(3\thermal{\Gamma}_1-4)^{1/2}$ in the denominator if the star is relativistic.

##### Constant-density star

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

The aim is to cover Chapter 1 and part of Chapter 2.

##### Molecular weights

$$
\mu=\left[\sum_i\frac{X_i}{A_i}\right]^{-1},
\qquad
\frac{\mu n_I}{N_A}=\mechanical{\rho}_I.
$$

Here the notes again use $\mu$ for the ion mean.

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

For the fully ionized, low-metallicity mixture,

$$
\mu_I\approx\frac4{1+3X},
\qquad
\mu\approx\frac4{3+5X},
$$

where the numerical values are in $\unit{g\,mol^{-1}}$.

##### Zero-age main-sequence stars

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

##### Temperature distribution

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

##### Energy transport

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

##### Homologous stars

Choose a reference star labeled $0$. The label is an index. The radial coordinate scales as

$$
\mechanical{r}=\frac{\mechanical{R}}{\mechanical{R}_0}\mechanical{r}_0,
\qquad
\mathrm{d}\mechanical{r}=\frac{\mechanical{R}}{\mechanical{R}_0}\,\mathrm{d}\mechanical{r}_0.
$$

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

The diffusion equation at the top of the page is written

$$
\energy{L}_r
=-\frac{(4\pi\mechanical{r}^2)^2c}{3\kappa}
  \frac{\mathrm{d}(a\thermal{T}^4)}{\mathrm{d}\mechanical{r}}.
$$

> [!note]
> The squared area factor and the absence of $\mechanical{\rho}$ in the denominator follow from changing the derivative on [[#Homologous stars|the section on Homologous stars]] to $\mathrm{d}/\mathrm{d}\mechanical{M}_r$. The handwriting still shows $\mathrm{d}/\mathrm{d}\mechanical{r}$.

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

The photographed textbook figure, labeled Fig. 1.3 in the source, plots $\log(\energy{L}/\energy{L}_\odot)$ and $\log(\mechanical{R}/\mechanical{R}_\odot)$ against $\log(\mechanical{M}/\mechanical{M}_\odot)$. The annotations give $\alpha_L=3.5$ for the luminosity relation and $\alpha_R=0.78$ for the radius relation.

![[Kyle Kabasares - Stellar Astrophysics - main-sequence mass luminosity and radius.png|**Fig. 3** Luminosity and radius versus mass for main-sequence stars, in solar units]]

For low-mass stars, the two values written in the notes are $\alpha'_L=3.9$ and $\alpha_L=5.0$.

Reading for this lecture is Chapter 2 in Hansen and Chapter 1 in Raffelt.

##### Hertzsprung–Russell diagram

The horizontal axis shows color or $\log\thermal{T}_{\mathrm{eff}}$, with higher temperatures on the left. The vertical axis is logarithmic. The left annotation gives $\energy{L}/\mechanical{M}$ for a theorist's version of the diagram. The red dashed curve marks the main sequence, and the green lines mark radii of $10^{-2}\mechanical{R}_\odot$, $\mechanical{R}_\odot$, and $100\mechanical{R}_\odot$. The points label Sirius B, Vega, Sirius A, Alpha Centauri A, the Sun, Alpha Centauri B, and Betelgeuse.

![[Kyle Kabasares - Stellar Astrophysics - Hertzsprung-Russell diagram.png|**Fig. 4** Hertzsprung–Russell diagram with the main sequence, constant-radius lines, and labeled stars]]

$$
\energy{L}=4\pi\mechanical{R}^2\thermal{\sigma}\thermal{T}_{\mathrm{eff}}^4,
\qquad
\thermal{T}_{\mathrm{eff},\odot}=\quantity{5780}{K}.
$$

The luminosity in solar units is

$$
\frac{\energy{L}}{\energy{L}_\odot}
=8.97\times10^{-16}
 \left(\frac{\mechanical{R}}{\mechanical{R}_\odot}\right)^2
 \left(\frac{\thermal{T}_{\mathrm{eff}}}{\unit{K}}\right)^4.
$$

##### Raffelt, section 1.3

$$
\energy{\epsilon}_{\mathrm{nuc}}\propto\mechanical{\rho}^\lambda\thermal{T}^\nu.
$$

For the proton–proton chains, $\nu$ ranges from $4$ to $6$ and $\lambda=1$. The notes give Kramers' law with $n=1$ and $s=3.5$.

$$
\kappa\propto\mechanical{\rho}^{n}\thermal{T}^{-s}.
$$

The density superscript resembles $4$ in the handwriting. The parameter list and [[#Homologous stars|the section on Homologous stars]] indicate $n$.

##### Axions and neutrino magnetic moments

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

The power spectrum sketch plots $P(\signal{k})$ against wavenumber $\signal{k}$. The blue curve is labeled “CMB predicts this.” Near the point marked $\quantity{8}{Mpc}$, the red curve branches from the falling spectrum. The notes associate this scale with the start of nonlinear behavior.

![[Kyle Kabasares - Stellar Astrophysics - matter power spectrum sketch.png|**Fig. 5** Matter power spectrum sketch with the CMB prediction and the scale marked 8 Mpc]]

The notes describe $P(\signal{k})$ as the two-point correlation in wavenumber space.

##### Warm dark matter streaming

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

The factor $c$ appears in the radiative transport equation on [[#Homologous stars|the section on Homologous stars]]. The rescaled radiative luminosity in these notes is

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

## Source

Kyle Kabasares, *Stellar Astrophysics (Physics 241B, UC Irvine 2019)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{r}$ | $\unit{cm}$ | Radial distance | The distance from the center of the star. |
| $\mechanical{G}$ | $\unit{m^3\,kg^{-1}\,s^{-2}}$ | Gravitational constant | The proportionality constant in Newton's law of gravitation. |
| $\mechanical{M}_r$ | $\unit{kg}$ | Enclosed mass | The stellar mass within radius $\mechanical{r}$. |
| $\mechanical{M}_\odot$ | $\unit{kg}$ | Solar mass | The mass of the Sun. |
| $\energy{L}_\odot$ | $\unit{W}$ | Solar luminosity | The power radiated by the Sun. |
| $\mechanical{R}_\odot$ | $\unit{km}$ | Solar radius | The radius of the Sun. |
| $\mechanical{\rho}$ | $\unit{g\,cm^{-3}}$ | Mass density | The mass per unit volume at the given radius. |
| $\mathrm{d}\mechanical{M}_r$ | $\unit{g}$ | Mass element | The mass of the thin shell or the patch, according to context. |
| $\mechanical{V}$ | $\unit{cm^3}$ | Volume | The volume occupied by the shell or patch. |
| $\mechanical{M}$ | $\unit{g}$ | Mass | The enclosed mass in the expression beside the force sketch. |
| $\mechanical{P}$ | $\unit{dyn\,cm^{-2}}$ | Pressure | The local force per unit area exerted by the stellar material. |
| $\energy{\Omega}$ | $\unit{erg}$ | Gravitational potential energy | The potential energy of the assembled star. |
| $\energy{W}$ | $\unit{erg}$ | Work | The energy transferred by a force acting through a displacement. |
| $\mechanical{m}$ | $\unit{g}$ | Mass | The mass acted on by the force. |
| $\mechanical{M}$ | $\unit{g}$ | Total stellar mass | The upper limit of the integral over the stellar mass. |
| $\mechanical{R}$ | $\unit{cm}$ | Stellar radius | The radius of the star used in the energy scale. |
| $\energy{E}$ | $\unit{erg\,g^{-1}}$ | Specific internal energy | The internal energy per unit mass. |
| $\energy{U}$ | $\unit{erg}$ | Internal energy | The integral of specific internal energy over stellar mass. |
| $\energy{W}$ | $\unit{erg}$ | Total energy | The sum of internal and gravitational potential energy. |
| $\thermal{T}$ | $\unit{K}$ | Temperature | The local thermodynamic temperature. |
| $t$ | $\unit{s}$ | Time | The independent variable in the virial calculation. |
| $\mechanical{I}$ | $\unit{g\,cm^2}$ | Scalar moment of inertia | The sum of particle masses times their squared distances from the origin. |
| $\thermal{\gamma}$ | 1 | Adiabatic index | The index that relates pressure and energy density in the gas model. |
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
| — | $\unit{yr}$ | Age of the universe | The approximate comparison time given in the lecture. |
| $V$ | 1 | Visual magnitude | The vertical coordinate in the Hertzsprung-gap sketch. |
| — | 1 | Number of stars in a globular cluster | The range of star counts given alongside the Hertzsprung-gap sketch. |
| $N$ | 1 | Particle count | The number of particles in the gas volume. |
| $\energy{E}$ | $\unit{MeV}$ | Electron energy | The energy plotted in the collapse sketch. |
| $f$ | — | Electron distribution | The distribution sketched against electron energy, with no stated normalization. |
| $Z$ | 1 | Proton number | The number of protons in the nucleus in the neutron-drip diagram. |
| $N$ | 1 | Neutron number | The number of neutrons in the nucleus in the neutron-drip diagram. |
| $\mechanical{P}_0$ | $\unit{dyn\,cm^{-2}}$ | Reference stellar pressure | The pressure of the initial model used in the homologous ratio. |
| $\tau$ | $\unit{s}$ | Total lifetime | The reciprocal of the sum of the channel rates. |
| $\mechanical{R}$ | $\unit{m}$ | Nuclear radius scale | The length scale given with the nuclear density. |
| $\mechanical{v}$ | $\unit{cm\,s^{-1}}$ | Projectile speed | The speed entering the incident flux and rate. |
| $\energy{\epsilon}$ | $\unit{MeV}$ | Collision energy | The integration variable in the reaction rate average. |
| $\mechanical{m}$ | $\unit{kg}$ | Reduced mass | The reduced mass of the projectile–target pair. |
| $\mu$ | 1 | Reduced mass in atomic mass units | The numerical mass in the cross-section conversion to barns. |
| $s$ | $\unit{m}$ | Impact parameter | The transverse offset of the incoming trajectory from the target. |
| $h$ | $\unit{J\,s}$ | Planck constant | The action constant written in the equilibrium prefactor. |
| $\energy{\epsilon}_0$ | $\unit{keV}$ | Characteristic collision energy | The energy scale written in keV on the second line of the helium-burning estimate. |
| — | $\unit{day}$ | Neutrino emission time | The two-day duration written beside the luminosity. |
| $a$ | $\unit{m}$ | Confinement length | The characteristic electron spacing estimated from position uncertainty. |
| $K$ | $\unit{dyn\,cm^3\,g^{-5/3}}$ | Polytropic constant | The coefficient of the density power law for the nonrelativistic gas. |
| $\mu$, $\mu_0$, $\mu_e$ | 1 | Mass per particle, nucleus, or electron in atomic mass units | The numerical mass factors in the three equivalent density expressions. |
| $n$ | $\unit{cm^{-3}}$ | Nucleus number density | The nucleus count per volume in the compact-object composition formula. |
| $\mu$ | $\unit{kg}$ | Particle mass scale | The mass in the speed condition on [[Advanced stellar burning, polytropes, and compact stars#Relativistic stars\|the section on Relativistic stars]]. |
| $n$ | 1 | Polytropic index | The index that determines the density profile and the equation-of-state exponent. |
| $a$ | $\unit{m}$ | Polytropic length scale | The factor that converts the normalized coordinate to radius. |
