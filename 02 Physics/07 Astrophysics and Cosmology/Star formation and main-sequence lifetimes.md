---
title: "Star formation and main-sequence lifetimes"
---

> [!TLDR]
> Follow protostars, young stellar objects, main-sequence stars, and brown dwarfs, and relate their properties to mass and lifetime.

## Worked lecture material

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

##### Stellar evolution

1. Write the differential equations that describe the stellar interior.
2. Include thermonuclear reactions, radiative transport, convection, conduction where applicable, and an equation of state.
3. Choose the boundary conditions.
4. Integrate numerically to obtain $\mechanical{M}$, $\energy{L}$, $\mechanical{R}$, and $\thermal{T}$.
5. Compare the results with observations. The notes indicate that the results correlate with age and composition.

##### Young stellar objects

The notes use YSO for *young stellar object*. As a protostar becomes a star, thermonuclear fusion becomes the dominant energy source over gravitational contraction.

The classification list gives classes 0, 1, and 2. The notes mark class 0 as still contracting and classes 1 and 2 as “stars” with nuclear burning. The sketch for class 0 shows arrows pointing into a cloud. The two sketches below it show a star with bipolar outflow and a star with arrows pointing outward in several directions.

An inset labeled DSNB shows a rate, read here as $\mathrm{d}n/\mathrm{d}t$, against redshift $z$. The curve rises, levels off, and falls. An adjacent arrow points from “neutrons” to “Gd.”

##### Signatures of the YSO phase

1. Visible light varies over hours or days. The notes link this to temperature and density irregularities.
2. Emission lines can come from the disk, surfaces, or outflow.
3. YSOs have more infrared luminosity than older stars of the same mass $\mechanical{M}$ and radius $\mechanical{R}$.
4. High activity includes flows, starspots, and coronal emission. The notes link rapid rotation to more convection and magnetic fields $\magnetic{\vec{B}}$.

##### Zero-age main sequence

The notes say that most stars are on the main sequence in an “honest sample.” Both sketches plot absolute visual magnitude $M_V$ against color index $B-V$.

![[Kyle Kabasares - Stellar Astrophysics - HR diagram for 101 brightest stars.png|**Fig. 6** Color–magnitude sketch of the 101 brightest stars, with Rigel, Sirius A, Betelgeuse, and the red giants labeled]]

![[Kyle Kabasares - Stellar Astrophysics - HR diagram for nearest stars.png|**Fig. 7** Color–magnitude sketch of the nearest stars, with the main sequence and the white dwarf group labeled]]

The nearest-star sketch marks $M_V=0$ near the top and $B-V=0.0$ near $\quantity{10^4}{K}$. Effective temperature increases toward the left. The handwriting marks the upper main sequence with $\quantity{10^3}{yr}$ and “O stars,” and the lower main sequence with $\quantity{10^{12}}{yr}$. The upper arrow ends near the Sirius A label.

The page opens with an aside about discussing better books.

##### Life on the main sequence

Mass is the primary factor. Composition is secondary. Mass sets the radius, luminosity, and effective temperature. It also affects the types of nuclear reactions and whether the material moves by convection.

On the main sequence, hydrogen becomes helium through the proton–proton chains or the CNO cycle. The notes give $1.5\mechanical{M}_\odot$ as the dividing mass in this lecture. CNO burning is more effective at high temperatures.

1. CNO reactions generate energy in a smaller region, which leads to a convective center.
2. The notes say that at $\mechanical{M}\geq1.5\mechanical{M}_\odot$ there is more neutral hydrogen in the stellar envelope. They connect higher opacity to a redder star and weaker ultraviolet emission.

Convection occurs in part of the star. The notes use the absence of nuclear products at the surface as evidence that convection does not mix the whole star.

The comparison continues with points 3 and 4.

3. Near $1.5\mechanical{M}_\odot$, rotation is more prevalent.
4. The notes attribute most of the opacity to metals, represented by $Z$. More metals hide more of the stellar interior and make the star redder. Metal-poor stars are bluer. For clusters and galaxies, this leads to an age–metallicity degeneracy.

The lecture mentions the lithium problem in Big Bang nucleosynthesis, then graduate-student stories from Kev. The margin remarks include “90s were a wild time lol,” “$Y_p$ → 3rd decimal place crisis,” and “MOND … stop talking to them.” A separate quotation reads “MOND people are the flat-Earthers of astronomy.”

5. The correlations of luminosity, temperature, radius, and age with mass follow the trends from homology.

The sketch shows four protons and four electrons before hydrogen burning. After the arrow, the helium nucleus has two protons and two neutrons, with two electrons outside it. Below the sketch is the ideal-gas relation $\mechanical{P}=n\thermal{k}\thermal{T}$, with downward arrows under pressure and particle number density and an upward arrow under temperature.

The notes compare the Sun $\quantity{4.6}{Gyr}$ ago with the Sun today. They give “25% fainter” and “20 K lower.” The next line gives a $\quantity{6}{K}$ change from the ice age to the present.

##### 2.2.2 Brown dwarfs

Brown dwarfs have too little mass to reach the temperatures and energies needed for significant hydrogen fusion. The notes give the hydrogen-burning mass threshold as $0.085\mechanical{M}_\odot$, or $89\mechanical{M}_J$, for solar composition and $0.1\mechanical{M}_\odot$ for metal-poor composition.

Deuterium burning occurs at about $\quantity{10^6}{K}$. The deuterium-to-hydrogen abundance ratio is $\mathrm{D}/\mathrm{H}\approx10^{-5}$. The burning can slow cooling. The notes give a lifetime below $\quantity{10^9}{yr}$ on what they call the brown dwarf main sequence.

The page puts “70%” beside stars and brown dwarfs with masses $\lesssim0.1\mechanical{M}_\odot$. The population to which the percentage applies is unclear.

The notes list T dwarfs, L dwarfs, and Y dwarfs. Arrows identify L and Y as new brown dwarf categories. They record the discovery of six Y dwarfs by WISE at UCLA in 2011 and a 2014 temperature of about $\quantity{250}{K}$.

The question “dwarf or planet?” is followed by “IAU → no D burning” and a reference to $13\mechanical{M}_J$. The final line reads “D doesn't burn.”

## Source

Kyle Kabasares, *Stellar Astrophysics (Physics 241B, UC Irvine 2019)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{M}_\odot$ | $\unit{kg}$ | Solar mass | The mass of the Sun. |
| $\mechanical{M}$ | $\unit{g}$ | Mass | The enclosed mass in the expression beside the force sketch. |
| $\mechanical{P}$ | $\unit{dyn\,cm^{-2}}$ | Pressure | The local force per unit area exerted by the stellar material. |
| $\mechanical{M}$ | $\unit{g}$ | Total stellar mass | The upper limit of the integral over the stellar mass. |
| $\mechanical{R}$ | $\unit{cm}$ | Stellar radius | The radius of the star used in the energy scale. |
| $\thermal{T}$ | $\unit{K}$ | Temperature | The local thermodynamic temperature. |
| $t$ | $\unit{s}$ | Time | The independent variable in the virial calculation. |
| $\energy{L}$ | $\unit{erg\,s^{-1}}$ | Stellar luminosity | The rate of energy loss from the contracting star. |
| $n$ | $\unit{cm^{-3}}$ | Particle number density | The number of gas particles per unit volume. |
| $\thermal{k}$ | $\unit{erg\,K^{-1}}$ | Boltzmann constant | The conversion factor between temperature and energy per particle. |
| $X$ | 1 | Hydrogen mass fraction | The fraction of stellar mass in hydrogen. |
| $Y$ | 1 | Helium mass fraction | The fraction of stellar mass in helium. |
| $Z$ | 1 | Metallicity | The fraction of stellar mass in elements heavier than helium. |
| $Y_p$ | 1 | Primordial helium mass fraction | The helium mass fraction produced after the Big Bang. |
| $D$ | $\unit{cm^2\,s^{-1}}$ | Radiative diffusion coefficient | The proportionality factor between energy flux and the radiation energy density gradient. |
| $a$ | $\unit{erg\,cm^{-3}\,K^{-4}}$ | Radiation constant | The constant in the radiation energy density $a\thermal{T}^4$. |
| $\delta_X$ | 1 | Fractional energy loss | The fraction of the nuclear production rate removed by the parameterized loss. |
| $\tau$ | $\unit{yr}$ | Stellar time scale | The time scale whose fractional change is estimated from the additional loss. |
| $Y_{\mathrm{initial}}$, $Y_{\mathrm{init}}$ | 1 | Initial solar helium mass fraction | The helium mass fraction at the start of the solar model. |
| $Y_{\mathrm{primordial}}$ | 1 | Primordial helium mass fraction | The helium mass fraction compared with the initial solar value. |
| $\mathrm{d}n/\mathrm{d}t$ | — | Event rate | The rate sketched against redshift. The source gives no normalization. |
| $z$ | 1 | Redshift | The horizontal coordinate of the DSNB sketch. |
| $\magnetic{\vec{B}}$ | $\unit{G}$ | Magnetic flux density | The magnetic field associated with stellar activity. |
| $M_V$ | 1 | Absolute visual magnitude | The magnitude plotted on the vertical axes of the color–magnitude diagrams. |
| $B-V$ | 1 | Color index | The difference between the blue and visual magnitudes. |
| $\mechanical{M}_J$ | $\unit{kg}$ | Jupiter mass | The mass of Jupiter, used as a unit for brown dwarfs. |
| $\mathrm{D}/\mathrm{H}$ | 1 | Deuterium-to-hydrogen abundance ratio | The abundance of deuterium relative to hydrogen. |
| $V$ | 1 | Visual magnitude | The vertical coordinate in the Hertzsprung-gap sketch. |
| $Z$ | 1 | Proton number | The number of protons in the nucleus in the neutron-drip diagram. |
| $\tau$ | $\unit{s}$ | Total lifetime | The reciprocal of the sum of the channel rates. |
| $\mechanical{R}$ | $\unit{m}$ | Nuclear radius scale | The length scale given with the nuclear density. |
| $s$ | $\unit{m}$ | Impact parameter | The transverse offset of the incoming trajectory from the target. |
| $a$ | $\unit{m}$ | Confinement length | The characteristic electron spacing estimated from position uncertainty. |
| $K$ | $\unit{dyn\,cm^3\,g^{-5/3}}$ | Polytropic constant | The coefficient of the density power law for the nonrelativistic gas. |
| $n$ | $\unit{cm^{-3}}$ | Nucleus number density | The nucleus count per volume in the compact-object composition formula. |
| $n$ | 1 | Polytropic index | The index that determines the density profile and the equation-of-state exponent. |
| $a$ | $\unit{m}$ | Polytropic length scale | The factor that converts the normalized coordinate to radius. |
