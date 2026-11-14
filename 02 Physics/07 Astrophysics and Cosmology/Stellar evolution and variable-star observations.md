---
title: "Stellar evolution and variable-star observations"
---

> [!TLDR]
> Follow different stellar masses through fusion, post-main-sequence evolution, and remnants, and connect variability and supernovae to these stages.

## Worked lecture material

##### Stellar evolution

Give a 15-minute overview of the paper that explains its goal, methods, and implications. The stellar evolution reading is in Binney and Merrifield and the OpenStax astronomy book.

- A star’s position on the main sequence depends on its mass. Metallicity also shifts the main sequence.
- Stars go through a series of evolutionary stages. Nuclear reactions occur in the core during the main-sequence phase. The notes list the core, radiative zone, and convective zone.
- Stars form from molecular clouds. A dense core becomes self-gravitating and attracts more material.
- The zero-age main sequence is the stage when sustained nuclear burning begins in the core.
- The notes also flag pre-main-sequence evolutionary tracks and the burning of lithium and deuterium in the core.

Stars with initial masses below $8\mechanical{M}_{\odot}$ follow similar evolutionary paths.

##### Proton–proton chain

The proton–proton chain dominates energy production in main-sequence stars below about $1.2\mechanical{M}_{\odot}$. The first two reactions are

$$
\begin{aligned}
p+p&\longrightarrow\mathrm D+e^++\nu_e,\\
\mathrm D+p&\longrightarrow{}^{3}\mathrm{He}+\gamma.
\end{aligned}
$$

One branch ends with

$$
{}^{3}\mathrm{He}+{}^{3}\mathrm{He}
\longrightarrow{}^{4}\mathrm{He}+p+p.
$$

Another branch proceeds through beryllium and lithium.

$$
\begin{aligned}
{}^{3}\mathrm{He}+{}^{4}\mathrm{He}&\longrightarrow{}^{7}\mathrm{Be}+\gamma,\\
{}^{7}\mathrm{Be}+e^-&\longrightarrow{}^{7}\mathrm{Li}+\nu_e,\\
{}^{7}\mathrm{Li}+p&\longrightarrow{}^{4}\mathrm{He}+{}^{4}\mathrm{He}.
\end{aligned}
$$

> [!note]
> The source writes $\gamma$ for the beryllium electron-capture product. Electron capture emits an electron neutrino.

The notes give about $\quantity{25.7}{MeV}$ per helium-4 nucleus produced and mention photons, protons, and neutrinos in the reactions.

##### CNO cycle

The CNO cycle dominates over the proton–proton chain at core temperatures above about $\quantity{17\times10^6}{K}$, corresponding here to main-sequence stars above about $1.2\mechanical{M}_{\odot}$.

##### Main-sequence lifetime

A star’s main-sequence lifetime scales as the amount of fuel divided by the rate at which it burns. Available fuel scales with stellar mass, and the burn rate scales with luminosity. The notes use $\energy{L}\propto\mechanical{M}^{3.5}$ as an average scaling over the main sequence.

The Sun’s main-sequence lifetime is about $\quantity{10}{Gyr}$. Stars below about $0.8\mechanical{M}_{\odot}$ have main-sequence lifetimes longer than the current age of the universe.

##### Post-main-sequence evolution

When the star exhausts hydrogen in its core, the core contracts. In the low-mass case described here, electron degeneracy pressure supports the core. Hydrogen burns rapidly in a surrounding shell. The star’s envelope expands into a red giant with a deep convective envelope surrounding the core.

The star leaves the main sequence and enters the subgiant phase.

##### After the red giant branch

At a core temperature of about $\quantity{10^8}{K}$, helium begins to fuse in the core. In the low-mass case this begins with a helium flash. The source says about half the helium in the core is burned quickly. The star moves down to the horizontal branch on the luminosity–temperature diagram.

![[Kyle Kabasares - Intro to Astrophysics - Horizontal branch evolutionary track.png|**Fig. 51** A luminosity–temperature diagram with the main sequence in black and the giant and horizontal branch path in red.]]

##### Helium burning

The reactions shown in the lecture are

$$
\begin{aligned}
{}^{4}\mathrm{He}+{}^{4}\mathrm{He}&\longrightarrow{}^{8}\mathrm{Be}
&&\text{(highly unstable)},\\
{}^{4}\mathrm{He}+{}^{8}\mathrm{Be}&\longrightarrow{}^{12}\mathrm C,\\
{}^{12}\mathrm C+{}^{4}\mathrm{He}&\longrightarrow{}^{16}\mathrm O.
\end{aligned}
$$

##### Final stages of a one-solar-mass star

When the core runs out of helium, the star moves back toward the upper giant region of the diagram. It enters the asymptotic giant branch (AGB).

An asymptotic giant branch star has a degenerate carbon–oxygen core. It ejects its envelope to form a planetary nebula. The notes give this phase a duration of about $\quantity{10^5}{yr}$. The remnant becomes a white dwarf and gradually radiates away its energy.

The sequence summarized in the notes is main sequence, red giant, helium fusion, and then giant again.

##### White dwarfs

Electron degeneracy pressure supports a white dwarf against gravity. It gradually cools and fades, moving downward along the white-dwarf cooling track in the Hertzsprung–Russell diagram.

A typical white dwarf has a mass of about $0.6\mechanical{M}_{\odot}$, a radius of about $\quantity{10^4}{km}$, and a density on the order of one metric ton per cubic centimeter.

White-dwarf spectral classification uses atmospheric absorption lines.

- DA white dwarfs have strong hydrogen Balmer absorption lines.
- DB white dwarfs have helium-rich atmospheres with strong He I lines.
- Other classes include carbon-rich and metal-rich types.

##### Brown dwarfs

Brown dwarfs form like low-mass stars. Their core temperatures stay below the level needed to sustain the proton–proton chain. The lecture gives a threshold near $0.08\mechanical{M}_{\odot}$.

##### Higher-mass stars

The table begins with about 7 million years of hydrogen burning and 0.5 million years of helium burning. It continues below.

The higher-mass star table continues with progressively shorter burning stages.

| Burning stage | Timescale |
| --- | --- |
| Carbon | 600 years |
| Neon | 1 year |
| Oxygen | 6 months |
| Silicon | 1 day |

##### Late evolution of very massive stars

Luminous blue variables are unstable, very high-mass supergiants that undergo occasional large outbursts. The notes give initial masses of about $30$–$100\mechanical{M}_{\odot}$ and describe their spectra as typically B type.

Wolf–Rayet stars are a late stage of massive stars, above about $20\mechanical{M}_{\odot}$ in the notes. The lecture flags P Cygni line profiles.

The notes refer to the binding-energy curve for atomic nuclei and sketch neutron capture starting from iron-56 as a route to heavier nuclei such as uranium-235.

##### Core collapse

The iron core loses pressure support and implodes.

During core collapse, at $\thermal{T}>\quantity{5\times10^9}{K}$ in the lecture estimate, photons can dissociate iron nuclei into protons and neutrons. At high density, electron capture produces neutrons and electron neutrinos.

$$
p+e^-\longrightarrow n+\nu_e.
$$

In the neutron-star outcome described here, neutron degeneracy pressure halts the collapse. Infalling matter rebounds from the core and launches an outward shock. In a successful explosion, the outer layers are ejected in a supernova.

Neutrinos were detected from SN 1987A. The Crab pulsar has a period of about $\quantity{33}{ms}$.

##### X-ray binaries

An X-ray binary is a mass-transfer binary containing a black hole or neutron star and a stellar companion on the main sequence or giant branch. The lecture estimates a maximum neutron-star mass of about $2$–$3\mechanical{M}_{\odot}$.

##### Evolutionary synthesis

Evolutionary synthesis models how stellar populations change with time. Calculate stellar evolution models over a range of initial masses and examine the Hertzsprung–Russell diagram of the full coeval population at successive ages. Combine stellar structure models with model atmospheres to place the stars on the diagram. The synthesis model can then predict how the population’s color changes with time.

##### Instability strip and variable stars

The instability strip of the Hertzsprung–Russell diagram contains pulsating stars. The lecture attributes the pulsations to cyclic ionization from $\mathrm{He}^{+}$ to $\mathrm{He}^{2+}$ and recombination to $\mathrm{He}^{+}$ in a layer inside the star. This transition has a large effective heat capacity.

RR Lyrae stars are horizontal-branch stars in the instability strip.

Other variable-star classes in the lecture include classical Cepheids (supergiants in the instability strip), W Virginis stars (low-mass, metal-poor stars that have evolved past the horizontal branch), Mira variables (luminous AGB stars), and $\delta$ Scuti stars (main-sequence stars in the instability strip).

##### Cepheids and RR Lyrae stars

Classical Cepheids are supergiants in the instability strip with initial masses above about $3\mechanical{M}_{\odot}$. Henrietta Leavitt discovered their period–luminosity relation.

RR Lyrae stars are distance indicators within the Local Group. The lecture gives masses near $0.8\mechanical{M}_{\odot}$, periods near $\quantity{0.5}{day}$, and $M_V\sim0.6\,\unit{mag}$ with some dependence on metallicity.

##### Supernova classification

The notes attribute the original classification to Fritz Zwicky. Type I spectra lack hydrogen lines. Type Ia has a strong characteristic silicon feature. Types Ib and Ic were distinguished later, in the 1980s and 1990s. Type II spectra show hydrogen lines. The notes also list historical Types III–IV.

## Source

Kyle Kabasares, *Intro to Astrophysics (Physics 240A, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{M}_{\odot}$ | $\unit{\mathrm{g}}$ | Solar mass | Mass of the Sun. |
| $\energy{L}$ | $\unit{erg\cdot s^{-1}}$ | Luminosity | Total radiant power. |
| $A$ | 1 | Extinction | Increase in apparent magnitude caused by attenuation. |
| $n$ | $\unit{cm^{-3}}$ | Grain number density | Number of dust grains per unit volume. |
| $\delta$ | $\unit{deg}$ | Declination | Angular distance north or south of the celestial equator. |
| $\mechanical{M}$ | $\unit{g}$ | Stellar mass | Mass in the main-sequence scaling relations. |
| $P$ | 1 | Geometric transit probability | Probability that a randomly oriented orbit produces a transit. |
| $e$ | 1 | Orbital eccentricity | Deviation of the orbit from a circle. |
| $X$ | 1 | Airmass | Relative path length through the atmosphere. |
| — | $\unit{Gyr}$ | Main-sequence lifetime | Time spent burning hydrogen in the stellar core. |
| — | $\unit{g\cdot cm^{-3}}$ | White-dwarf density | Mass per unit volume of the compact remnant. |
| $n$ | $\unit{pc^{-3}}$ | Stellar number density | Number of stars per unit volume. |
| $A$ | $\unit{km\cdot s^{-1}\cdot kpc^{-1}}$ | First Oort constant | Local rotational shear inferred from the longitude dependence of radial velocities. |
| $B$ | $\unit{km\cdot s^{-1}\cdot kpc^{-1}}$ | Second Oort constant | Offset in the nearby tangential velocity per unit distance. |
| $p$ | 1 | Metal yield | Newly synthesized metal mass returned to the gas per unit mass locked into stars and remnants. |
