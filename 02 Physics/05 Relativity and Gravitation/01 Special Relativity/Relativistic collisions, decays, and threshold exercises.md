---
title: "Relativistic collisions, decays, and threshold exercises"
---

> [!TLDR]
> Choose an inertial or center-of-momentum frame to solve worked boost, scattering, decay, and particle-production problems.

## Worked lecture material

### Chapter 8 sample problems

##### 1. Laser pulse in two frames

A primed frame moves at $\mechanical{v}=(3/5)\mechanical{c}$ along the common $x$ axis. The origins coincide when the clocks at the two origins read zero. In our frame, a laser emits a pulse at $(\mechanical{x},\mechanical{y},\mechanical{z})=(40.0\;\unit{m},0,0)$ at $t=2.0\times10^{-7}\;\unit{s}$. Find the place and time of emission in the primed frame.

The transverse coordinates stay zero and $\mechanical{\gamma}=5/4$. Using $\mechanical{c}\approx3.0\times10^8\;\unit{m\,s^{-1}}$,

$$
\begin{aligned}
\mechanical{x}'
&=\mechanical{\gamma}(\mechanical{x}-\mechanical{v}t)
=\frac54(40.0\;\unit{m}-36.0\;\unit{m})
=5\;\unit{m},\\
t'
&=\mechanical{\gamma}\left(t-\frac{\mechanical{v}\mechanical{x}}{\mechanical{c}^2}\right)
=\frac54\left(2.0\times10^{-7}\;\unit{s}-\frac35\frac{40.0\;\unit{m}}{\mechanical{c}}\right)
=1.5\times10^{-7}\;\unit{s}.
\end{aligned}
$$

##### 2. Bus and patrol cars

A bus of rest length $15.0\;\unit{m}$ drives along the interstate at $\mechanical{v}=(4/5)\mechanical{c}$. The driver's watch at the front and a passenger's watch at the rear are synchronized in the bus frame. Parked highway patrol cars have clocks synchronized in the road frame. When the rear of the bus passes the first patrol car, both the passenger's watch and that car's clock read noon.

At noon on its own clock, a second patrol car is adjacent to the front of the bus. (a) How far apart are the two patrol cars? (b) What does the driver’s watch read at the encounter with the second car?

![[Kyle Kabasares - Special Relativity - Bus and synchronized patrol clocks.png|**Fig. 15** The bus endpoints line up with the patrol cars at the same time in the road frame.]]

(a) Take the encounter at the rear to be the common origin with $t=t'=0$. At the front encounter $t=0$ in the road frame and $\mechanical{x}'=15.0\;\unit{m}$ in the bus frame. Then $\mechanical{\gamma}=5/3$ and

$$
\mechanical{x}'=\mechanical{\gamma}(\mechanical{x}-\mechanical{v}t)
=\mechanical{\gamma}\mechanical{x},\qquad
\mechanical{x}=\frac{15.0\;\unit{m}}{5/3}=9.0\;\unit{m}.
$$

(b) The leading watch reads earlier at simultaneous road-frame events. The inverse time transformation at the front encounter gives

$$
0=t=\mechanical{\gamma}\left(t'+\frac{\mechanical{v}\mechanical{x}'}{\mechanical{c}^2}\right)
=\frac53\left(t'+\frac{(4/5)\mechanical{c}(15.0\;\unit{m})}{\mechanical{c}^2}\right).
$$

Solving for the driver's watch reading in part (b),

$$
t'=-\frac{\mechanical{v}\mechanical{x}'}{\mechanical{c}^2}
=-\frac{12\;\unit{m}}{\mechanical{c}}
\approx-4.0\times10^{-8}\;\unit{s}.
$$

The watch reads $4.0\times10^{-8}\;\unit{s}$ before noon.

##### 3. Running passenger

The passenger at the back of the bus starts running forward at $(3/5)\mechanical{c}$ relative to the bus. How fast does the passenger move in the frame of the parked patrol cars? Use the inverse velocity transformation from the bus frame to the road frame.

$$
\mechanical{V}_x
=\frac{\mechanical{V}_x'+\mechanical{v}}{1+\mechanical{v}\mechanical{V}_x'/\mechanical{c}^2}
=\frac{(3/5)\mechanical{c}+(4/5)\mechanical{c}}{1+12/25}
=\frac{35}{37}\mechanical{c}.
$$

### Chapter 10 sample problems

##### 1. Momentum at fixed speed

A particle of mass $\mechanical{m}$ moves at speed $(3/5)\mechanical{c}$. Find the momentum for motion (a) along $x$ and (b) at $45^\circ$ to both the $x$ and $y$ axes.

(a) For motion along $x$, $\mechanical{\gamma}=5/4$ gives

$$
\mechanical{\vec p}
=(\mechanical{\gamma}\mechanical{m}\mechanical{v}_x,0,0)
=\left(\frac34\mechanical{m}\mechanical{c},0,0\right).
$$

This is $5/4$ times the classical momentum $\mechanical{m}\mechanical{\vec v}$.

(b) For motion at $45^\circ$ to the two axes, the Lorentz factor is unchanged and $\mechanical{v}_x=\mechanical{v}_y=\mechanical{v}/\sqrt2$.

For part (b) of the momentum problem,

$$
\mechanical{\vec p}
=\left(\frac54\mechanical{m}\frac{3\mechanical{c}}{5\sqrt2},
\frac54\mechanical{m}\frac{3\mechanical{c}}{5\sqrt2},0\right)
=\left(\frac{3\mechanical{m}\mechanical{c}}{4\sqrt2},
\frac{3\mechanical{m}\mechanical{c}}{4\sqrt2},0\right).
$$

##### 2. Mass ratio from a decay at rest

A particle at rest decays into a particle of mass $\mechanical{m}$ moving at $(12/13)\mechanical{c}$ and a particle of mass $\mechanical{M}$ moving at $(5/13)\mechanical{c}$. Find $\mechanical{m}/\mechanical{M}$.

The total momentum initially vanishes, so the fragments move in opposite directions with equal momentum magnitudes. The sketch puts $\mechanical{M}$ on the left and $\mechanical{m}$ on the right.

$$
\begin{aligned}
\mechanical{p}_m
&=\frac{\mechanical{m}(12/13)\mechanical{c}}{\sqrt{1-(12/13)^2}}
=\frac{12}{5}\mechanical{m}\mechanical{c},\\
\mechanical{p}_M
&=\frac{\mechanical{M}(5/13)\mechanical{c}}{\sqrt{1-(5/13)^2}}
=\frac{5}{12}\mechanical{M}\mechanical{c}.
\end{aligned}
$$

Equating the magnitudes gives $\mechanical{m}/\mechanical{M}=25/144$.

##### 3. Torpedo approaching HMS Pinafore

An alien ship approaches HMS Pinafore at $(3/5)\mechanical{c}$ in Pinafore's frame. The aliens launch a torpedo of mass $1000\;\unit{kg}$ toward Pinafore at $(3/5)\mechanical{c}$ relative to their own ship. Pinafore's shield stops a projectile only if its momentum magnitude is below $6.0\times10^{11}\;\unit{kg\,m\,s^{-1}}$ in its frame.

Find (a) the torpedo four-momentum in the alien ship's rest frame, (b) the four-momentum in Pinafore's frame, (c) whether the shield stops it, and (d) the torpedo velocity relative to Pinafore.

(a) Take positive $x$ to point from the alien ship toward Pinafore. The alien ship's frame is $S'$ and Pinafore's frame is $S$. In $S'$ the torpedo moves along $x$ at $(3/5)\mechanical{c}$, giving its four-momentum

$$
\mechanical{p}_{\mu}'
=\left(\frac54\mechanical{m}\mechanical{c},\frac34\mechanical{m}\mechanical{c},0,0\right),
\qquad
\mechanical{m}\mechanical{c}=3.0\times10^{11}\;\unit{kg\,m\,s^{-1}}.
$$

(b) The alien ship moves at $\mechanical{v}=(3/5)\mechanical{c}$ in $S$, so the inverse boost has $\mechanical{\gamma}=5/4$.

$$
\begin{aligned}
\mechanical{p}_0&=\mechanical{\gamma}\left(\mechanical{p}_0'
+\frac{\mechanical{v}}{\mechanical{c}}\mechanical{p}_x'\right)
=\frac{17}{8}\mechanical{m}\mechanical{c},\\
\mechanical{p}_x&=\mechanical{\gamma}\left(\mechanical{p}_x'
+\frac{\mechanical{v}}{\mechanical{c}}\mechanical{p}_0'\right)
=\frac{15}{8}\mechanical{m}\mechanical{c},\\
\mechanical{p}_y&=\mechanical{p}_y'=0,\qquad
\mechanical{p}_z=\mechanical{p}_z'=0.
\end{aligned}
$$

Altogether $\mechanical{p}_{\mu}=(17\mechanical{m}\mechanical{c}/8,15\mechanical{m}\mechanical{c}/8,0,0)$.

(c) The torpedo has momentum magnitude $(15/8)\mechanical{m}\mechanical{c}\approx5.6\times10^{11}\;\unit{kg\,m\,s^{-1}}$, below the threshold. The shield stops it.

(d) Let $\mechanical{u}$ be the torpedo's velocity in $S$. Dividing its momentum by its rest mass gives

$$
\frac{\mechanical{u}}{\sqrt{1-\mechanical{u}^2/\mechanical{c}^2}}
=\frac{15}{8}\mechanical{c}.
$$

Squaring and rearranging,

$$
8^2\frac{\mechanical{u}^2}{\mechanical{c}^2}
=15^2\left(1-\frac{\mechanical{u}^2}{\mechanical{c}^2}\right),\qquad
\frac{\mechanical{u}^2}{\mechanical{c}^2}=\frac{15^2}{15^2+8^2}=\frac{15^2}{17^2}.
$$

### Chapter 11 sample problems

##### 1. Mass increase of a heated kettle

A sealed kettle of mass $1.0\;\unit{kg}$ contains two liters of water of mass $2.0\;\unit{kg}$. Heating the water from $20\;\unit{^\circ C}$ to $100\;\unit{^\circ C}$ requires $\Delta\energy{E}=6.7\times10^5\;\unit{J}$. Find the fractional mass increase of the kettle and water together.

$$
\begin{aligned}
\Delta\mechanical{m}
&=\frac{\Delta\energy{E}}{\mechanical{c}^2}
=\frac{6.7\times10^5\;\unit{J}}{(3.0\times10^8\;\unit{m\,s^{-1}})^2}
\approx7.44\times10^{-12}\;\unit{kg},\\
\frac{\Delta\mechanical{m}}{\mechanical{m}}
&=\frac{7.44\times10^{-12}\;\unit{kg}}{3.0\;\unit{kg}}\approx2.5\times10^{-12}.
\end{aligned}
$$

The first handwritten substitution places the speed factor next to the energy. The formula and numerical result use it as a denominator.

##### 2. Distance traveled by a tau lepton

A tau lepton of mass $1777\;\unit{MeV}/\mechanical{c}^2$ decays after a rest-frame time $\tau=3.0\times10^{-13}\;\unit{s}$. Its lab energy is $100\mechanical{m}\mechanical{c}^2$. Since $\energy{E}=\mechanical{\gamma}\mechanical{m}\mechanical{c}^2$, its Lorentz factor is $100$, and the lab time to decay is $t=\mechanical{\gamma}\tau=3.0\times10^{-11}\;\unit{s}$. Its speed is close to $\mechanical{c}$, so the lab distance is

$$
\mechanical{d}=\mechanical{v}t\approx\mechanical{c}t
=(3.0\times10^8\;\unit{m\,s^{-1}})(3.0\times10^{-11}\;\unit{s})
=9.0\;\unit{mm}.
$$

##### 3. Photon absorbed by a stationary particle

A photon of energy $12.0\;\unit{TeV}$ strikes a stationary particle of mass $\mechanical{M}_0$. The only final particle has mass $\mechanical{M}$ and moves at $(12/13)\mechanical{c}$ in the incident photon's direction, as shown in the sketch. Using MeV-based units, find (a) the final momentum, (b) $\mechanical{M}$, and (c) $\mechanical{M}_0$. The notes give $1\;\unit{TeV}=10^{12}\;\unit{eV}$.

Conserve energy and momentum in the photon absorption problem. The target is initially at rest, so its initial momentum is zero.

$$
\energy{E}_{\gamma}+\mechanical{M}_0\mechanical{c}^2=\energy{E}_{\mathrm f},\qquad
\mechanical{p}_{\gamma}=\mechanical{p}_{\mathrm f},\qquad
\mechanical{\gamma}=\frac{1}{\sqrt{1-(12/13)^2}}=\frac{13}{5}.
$$

(a) The final momentum equals the incident photon momentum.

$$
\mechanical{p}_{\mathrm f}=\frac{\energy{E}_\gamma}{\mechanical{c}}
=\frac{12.0\;\unit{TeV}}{\mechanical{c}}
=\frac{1.20\times10^7\;\unit{MeV}}{\mechanical{c}}.
$$

(b) With $\mechanical{p}_{\mathrm f}=\mechanical{\gamma}\mechanical{M}\mechanical{v}$,

$$
\mechanical{M}
=\frac{12.0\;\unit{TeV}/\mechanical{c}}{(13/5)(12/13)\mechanical{c}}
=\frac{5.0\;\unit{TeV}}{\mechanical{c}^2}
=\frac{5.0\times10^6\;\unit{MeV}}{\mechanical{c}^2}.
$$

(c) Energy conservation gives

$$
\mechanical{M}_0\mechanical{c}^2
=\mechanical{\gamma}\mechanical{M}\mechanical{c}^2-\energy{E}_\gamma
=\frac{13}{5}(5.0\;\unit{TeV})-12.0\;\unit{TeV}=1.0\;\unit{TeV}.
$$

Thus $\mechanical{M}_0=1.0\;\unit{TeV}/\mechanical{c}^2=1.0\times10^6\;\unit{MeV}/\mechanical{c}^2$. The handwritten solutions give their final values in TeV-based units.

##### 4. Proton beam and a fleeing ship

Ship $A$ fires a forward proton beam at speed $\mechanical{v}=(4/5)\mechanical{c}$ in its own frame. Ship $B$ flees in the same direction at speed $\mechanical{V}=(3/5)\mechanical{c}$ relative to $A$. Find the beam velocity $\mechanical{v}'$ in $B$'s frame by transforming the energy–momentum four-vector using equations 11.15.

Choose $A$ at rest in $S$ and $B$ at rest in $S'$. This method distinguishes three Lorentz factors, one for each beam speed and one for the relative speed of the frames.

For a proton of mass $\mechanical{m}$, the two frames assign

$$
\begin{aligned}
\energy{E}&=\mechanical{\gamma}_m\mechanical{m}\mechanical{c}^2,&
\mechanical{p}_x&=\mechanical{\gamma}_m\mechanical{m}\mechanical{v},\\
\energy{E}'&=\mechanical{\gamma}_m'\mechanical{m}\mechanical{c}^2,&
\mechanical{p}_x'&=\mechanical{\gamma}_m'\mechanical{m}\mechanical{v}'.
\end{aligned}
$$

Here $\mechanical{\gamma}_m=(1-\mechanical{v}^2/\mechanical{c}^2)^{-1/2}$ and $\mechanical{\gamma}_m'=(1-\mechanical{v}'^{\,2}/\mechanical{c}^2)^{-1/2}$ refer to the particle. The boost uses $\mechanical{\gamma}=(1-\mechanical{V}^2/\mechanical{c}^2)^{-1/2}$. In $S$, $\mechanical{\gamma}_m=5/3$, so $\mechanical{p}_0=\energy{E}/\mechanical{c}=(5/3)\mechanical{m}\mechanical{c}$ and $\mechanical{p}_x=(4/3)\mechanical{m}\mechanical{c}$. Boost with $\mechanical{\gamma}=5/4$.

$$
\mechanical{p}_0'
=\mechanical{\gamma}\left(\mechanical{p}_0-\frac{\mechanical{V}}{\mechanical{c}}\mechanical{p}_x\right)
=\frac54\left(\frac53-\frac35\frac43\right)\mechanical{m}\mechanical{c}
=\frac{13}{12}\mechanical{m}\mechanical{c}.
$$

Since $\mechanical{p}_0'=\mechanical{\gamma}_m'\mechanical{m}\mechanical{c}$, the particle's Lorentz factor in $S'$ is $13/12$. The beam still moves forward because it overtakes $B$. Its velocity is $\mechanical{v}'=(5/13)\mechanical{c}$.

### Chapter 12 sample problems

##### 1. Symmetric fission of uranium-238

Suppose a uranium-238 nucleus at the far right of the binding-energy curve spontaneously splits into two identical nuclei. Use the curve in Fig. 12.2 to estimate the kinetic energy released. Each fragment contains $92/2=46$ protons and $238/2=119$ nucleons, so it is palladium-119. The curve gives a binding energy per nucleon of about $7.5\;\unit{MeV}$ for uranium-238 and $8.5\;\unit{MeV}$ for palladium-119.

For symmetric uranium fission, the binding energy increases by about $1\;\unit{MeV}$ per nucleon. The combined rest energy of the fragments is therefore lower by about $(238)(1\;\unit{MeV})$, giving roughly $200\;\unit{MeV}$ of kinetic energy per fission at the precision of the estimate. The handwritten solution calls this a reduction in binding energy. Its values on the previous page correspond to an increase in the positive binding energy and a decrease in rest energy.

##### 2. Sigma-minus decay

The problem gives a half-life of $1.5\times10^{-10}\;\unit{s}$ for the decay $\Sigma^-\longrightarrow n+\pi^-$. Find the ratio $\energy{K}_{\pi^-}/\energy{K}_n$ in the rest frame of $\Sigma^-$. The stated rest energies are $1197.4\;\unit{MeV}$ for $\Sigma^-$, $939.6\;\unit{MeV}$ for the neutron, and $139.6\;\unit{MeV}$ for $\pi^-$. The neutron and pion move in opposite directions in this frame.

Equation 12.13 gives the total pion energy. Subtract the pion rest energy to get its kinetic energy.

$$
\begin{aligned}
\energy{E}_{\pi^-}
&=\frac{\mechanical{m}_{\Sigma^-}^2+\mechanical{m}_{\pi^-}^2-\mechanical{m}_n^2}
{2\mechanical{m}_{\Sigma^-}}\mechanical{c}^2,\\
\energy{K}_{\pi^-}
&=\energy{E}_{\pi^-}-\mechanical{m}_{\pi^-}\mechanical{c}^2
=\frac{(\mechanical{m}_{\Sigma^-}-\mechanical{m}_{\pi^-})^2-\mechanical{m}_n^2}
{2\mechanical{m}_{\Sigma^-}}\mechanical{c}^2.
\end{aligned}
$$

Exchange the neutron and pion labels for $\energy{K}_n$. The common factors cancel, so the rest energies in MeV can be used directly in the numerical ratio.

$$
\frac{\energy{K}_{\pi^-}}{\energy{K}_n}
=\frac{(\mechanical{m}_{\Sigma^-}-\mechanical{m}_{\pi^-})^2-\mechanical{m}_n^2}
{(\mechanical{m}_{\Sigma^-}-\mechanical{m}_n)^2-\mechanical{m}_{\pi^-}^2}
=\frac{(1197.4-139.6)^2-939.6^2}{(1197.4-939.6)^2-139.6^2}
\approx5.026.
$$

##### 3. Pion photoproduction

A photon strikes a stationary proton in the reaction $\gamma+p\longrightarrow p+\pi^0$. Can the proton remain at rest? The sketch tests a final state in which only the pion carries momentum.

If the proton is at rest before and after the reaction, its rest energy cancels from energy conservation. Then $\energy{E}_{\gamma}=\energy{E}_{\pi^0}$. Squaring and applying the energy–momentum relation to the photon and pion gives

$$
\mechanical{p}_{\gamma}^2\mechanical{c}^2
=\mechanical{p}_{\pi^0}^2\mechanical{c}^2+\mechanical{m}_{\pi^0}^2\mechanical{c}^4.
$$

Momentum conservation under the same assumption gives $\mechanical{p}_{\gamma}=\mechanical{p}_{\pi^0}$. This would require $\mechanical{m}_{\pi^0}^2\mechanical{c}^4=0$. The pion is massive, so the proton must recoil.

##### 4. Photon rocket to Arcturus

Arcturus is $36\;\unit{ly}$ from the Sun in the rest frame used in the problem. At its final speed, the photon rocket measures the Sun–Arcturus distance as $12\;\unit{ly}$. What fraction of its initial mass remains?

The distance contracts by a factor $1/3$, so $\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}=1/3$ and $\mechanical{\gamma}=3$. Equation 12.32 gives

$$
1+\left(\frac{\mechanical{M}}{\mechanical{M}_0}\right)^2
=6\frac{\mechanical{M}}{\mechanical{M}_0}.
$$

Solving the quadratic gives $\mechanical{M}/\mechanical{M}_0=(6\pm\sqrt{36-4})/2=3\pm\sqrt8$. The rocket loses mass, so take the root below one.

$$
\frac{\mechanical{M}}{\mechanical{M}_0}=3-\sqrt8=3-2\sqrt2\approx0.1716.
$$

About $17\%$ of the initial mass remains.

### Chapter 13 sample problems

##### 1. Photon torpedo

The starship Endeavor has one photon torpedo after a surprise attack. The torpedo carries $1\;\unit{GJ}$ of energy as $1\;\unit{MeV}$ photons in Endeavor's frame. The alien ship approaches head-on at $(12/13)\mechanical{c}$. It is disabled if the torpedo strikes with at least $4\;\unit{GJ}$ in the aliens' frame. Find (a) the photon count, (b) the photon frequency in each frame, and (c) whether the strike disables the alien ship.

(a) The notes use $1\;\unit{eV}=1.60\times10^{-19}\;\unit{J}$. Each photon carries $1.60\times10^{-13}\;\unit{J}$ in Endeavor's frame, so the count is

$$
N=\frac{10^9\;\unit{J}}{1.60\times10^{-13}\;\unit{J}}
=6.25\times10^{21}.
$$

(b) The aliens move to the left in our frame, so choose their frame as $S$ and ours as $S'$. The frequency on Endeavor is

$$
\signal{\nu}'=\frac{\energy{E}'}{\energy{h}}
=\frac{1.60\times10^{-13}\;\unit{J}}{6.63\times10^{-34}\;\unit{J\,s}}
\approx2.41\times10^{20}\;\unit{Hz}.
$$

The approaching geometry gives the blueshift

$$
\signal{\nu}
=\signal{\nu}'\sqrt{\frac{1+\mechanical{v}/\mechanical{c}}{1-\mechanical{v}/\mechanical{c}}}
=\signal{\nu}'\sqrt{\frac{1+12/13}{1-12/13}}
=5\signal{\nu}'.
$$

(c) The photon count is the same in both frames. In the aliens' frame each photon has five times the energy it has in Endeavor's frame, so the total is $5\;\unit{GJ}$. This exceeds the required $4\;\unit{GJ}$ and disables the ship.

The same result follows by transforming the torpedo's total energy and momentum. In Endeavor's frame $\energy{E}'=10^9\;\unit{J}$ and $\mechanical{p}_x'=\energy{E}'/\mechanical{c}$. In the alien frame,

$$
\energy{E}=\mechanical{\gamma}(\energy{E}'+\mechanical{v}\mechanical{p}_x')
=\frac{13}{5}\left(1+\frac{12}{13}\right)10^9\;\unit{J}
=5\times10^9\;\unit{J}.
$$

##### 2. Threshold for neutral pion production

A synchrotron accelerates protons and directs them at stationary protons in liquid hydrogen. Find the threshold incident proton energy for $p+p\longrightarrow p+p+\pi^0$. Use $\mechanical{m}_p\mechanical{c}^2=938.3\;\unit{MeV}$ and $\mechanical{m}_{\pi^0}\mechanical{c}^2=135.0\;\unit{MeV}$.

Equation 13.25 gives the threshold total energy of incident particle $1$ against stationary particle $2$.

$$
(\energy{E}_1)_{\mathrm{th}}
=\frac{\left(\sum_{i\,\mathrm{final}}\mechanical{m}_i\mechanical{c}^2\right)^2
-(\mechanical{m}_1^2+\mechanical{m}_2^2)\mechanical{c}^4}
{2\mechanical{m}_2\mechanical{c}^2}.
$$

For the proton beam,

$$
\begin{aligned}
(\energy{E}_1)_{\mathrm{th}}
&=\frac{[(2\mechanical{m}_p+\mechanical{m}_{\pi^0})\mechanical{c}^2]^2
-2\mechanical{m}_p^2\mechanical{c}^4}{2\mechanical{m}_p\mechanical{c}^2}\\
&=\frac{(2\cdot938.3+135.0)^2-2(938.3)^2}{2\cdot938.3}\;\unit{MeV}
\approx1218\;\unit{MeV}.
\end{aligned}
$$

Subtract the incident proton's rest energy to get the threshold kinetic energy. With the rounded total energy in the notebook, this is $(1218.0-938.3)\;\unit{MeV}=279.7\;\unit{MeV}$.

For a center-of-momentum frame $S'$ moving right at speed $\mechanical{V}$ relative to the lab $S$, the boost is

$$
\energy{E}'=\mechanical{\gamma}(\energy{E}-\mechanical{V}\mechanical{p}_x),\qquad
\mechanical{p}_x'=\mechanical{\gamma}\left(\mechanical{p}_x-\frac{\mechanical{V}\energy{E}}{\mechanical{c}^2}\right).
$$

**Problem 13-1**

(a) An electron with rest energy $0.511\;\unit{MeV}$ moves right at $\mechanical{v}=(3/5)\mechanical{c}$ in $S$. Its Lorentz factor is $5/4$, so

$$
\energy{E}=\frac54(0.511\;\unit{MeV})\approx0.639\;\unit{MeV},
\qquad
\mechanical{p}_x=\frac54\frac35\frac{0.511\;\unit{MeV}}{\mechanical{c}}
\approx\frac{0.383\;\unit{MeV}}{\mechanical{c}}.
$$

(b) Boost to $S'$ moving at $\mechanical{V}=(4/5)\mechanical{c}$. The boost factor is $5/3$.

$$
\begin{aligned}
\energy{E}'&\approx\frac53\left[0.639-\frac45(0.383)\right]\unit{MeV}
\approx0.554\;\unit{MeV},\\
\mechanical{p}_x'&\approx\frac53\left[0.383-\frac45(0.639)\right]\frac{\unit{MeV}}{\mechanical{c}}
\approx-\frac{0.214\;\unit{MeV}}{\mechanical{c}}.
\end{aligned}
$$

The boxed energy in the notebook is labeled in momentum units. Here the equation for $\energy{E}'$ gives MeV.

**Problem 13-3**

(a) A neutron of mass $939.6\;\unit{MeV}/\mechanical{c}^2$ moves along positive $y$ at $(3/5)\mechanical{c}$. Its Lorentz factor is $5/4$, so $\mechanical{p}_x=0$, $\mechanical{p}_y=704.7\;\unit{MeV}/\mechanical{c}$, and $\energy{E}=1174.5\;\unit{MeV}$.

(b) Boost along positive $x$ with $\mechanical{V}=(3/5)\mechanical{c}$. The transverse component is unchanged.

$$
\begin{aligned}
\mechanical{p}_x'
&=-\frac54\frac35\frac{1174.5\;\unit{MeV}}{\mechanical{c}}
\approx-\frac{880.9\;\unit{MeV}}{\mechanical{c}},\\
\mechanical{p}_y'&=\mechanical{p}_y=\frac{704.7\;\unit{MeV}}{\mechanical{c}},\\
\energy{E}'&=\frac54(1174.5\;\unit{MeV})\approx1468\;\unit{MeV}.
\end{aligned}
$$

The notebook rounds the longitudinal momentum to $-880.8\;\unit{MeV}/\mechanical{c}$.

## Source

Kyle Kabasares, *Special Relativity (Physics 126, UC Merced 2015)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{v}$ | $\unit{m\,s^{-1}}$ | Relative speed | Speed of one inertial frame relative to another. |
| $\mechanical{x}$, $\mechanical{y}$, $\mechanical{z}$ and primed forms | $\unit{m}$ | Spatial coordinates | Location of an event in an inertial frame. |
| $t$, $t'$ | $\unit{s}$ | Coordinate times | Time assigned to an event in the two frames. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Inertial mass of the particle. |
| $\mechanical{v}_x$, $\mechanical{v}_y$, $\mechanical{v}_z$ and primed forms | $\unit{m\,s^{-1}}$ | Particle velocity components | Coordinate rates of change in the two frames. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Speed of light in vacuum | The light propagation speed. |
| $\Delta t_{\mathrm{rest}}$, $\Delta t_0$, $\tau$ | $\unit{s}$ | Proper time interval | Time recorded by the clock present at both events. |
| $\mechanical{\gamma}$ | 1 | Lorentz factor | Factor relating the coordinate interval to the proper interval for inertial motion. |
| $\tau_0$, $\tau$ | $\unit{s}$ | Rest and laboratory lifetimes | Muon lifetime measured in its rest frame and in the laboratory. |
| $\mechanical{d}$, $\mechanical{L}$ | $\unit{m}$ | Distance | Distance traveled in the laboratory or separation of the departure and arrival points. |
| $\mechanical{V}_x$, $\mechanical{V}_y$, $\mechanical{V}_z$ and primed forms | $\unit{m\,s^{-1}}$ | Object velocity components | Velocity of an object along the coordinate axes. |
| $\mechanical{\vec p}$, $\mechanical{p}_{\mathrm{tot}}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | Momentum of a particle and the sum over particles. |
| $\mechanical{p}_{\mu}$ | $\unit{kg\,m\,s^{-1}}$ | Four-momentum | Product of the mass and four-velocity. |
| $\energy{h}$ | $\unit{J\,s}$ | Planck constant | Relates photon energy to frequency. |
| $\signal{\nu}$, $\signal{\nu}'$ | $\unit{Hz}$ | Photon frequencies | Frequencies before and after scattering. |
| $\mechanical{m}_{K^0}$, $\mechanical{m}_{\pi^0}$ | $\unit{kg}$ or $\unit{MeV}/\mechanical{c}^2$ | Particle masses | Rest masses of the neutral kaon and neutral pion. |
| $\energy{E}$, $\energy{E}'$, $\energy{E}_{\mathrm{tot}}$ | $\unit{J}$ or $\unit{eV}$ | Energy | Time component of four-momentum multiplied by the speed of light. |
| $\energy{K}$ | $\unit{J}$ or $\unit{eV}$ | Kinetic energy | Difference between total energy and rest energy. |
| $\mechanical{m}_p$ | $\unit{kg}$ or $\unit{MeV}/\mechanical{c}^2$ | Proton mass | Rest mass of the proton. |
| $\mechanical{m}_n$ | $\unit{kg}$ or $\unit{MeV}/\mechanical{c}^2$ | Neutron mass | Rest mass of the neutron. |
| $\mechanical{m}_{\Sigma^-}$, $\mechanical{m}_{\pi^-}$ | $\unit{kg}$ or $\unit{MeV}/\mechanical{c}^2$ | Decay particle masses | Rest masses of the sigma-minus particle and negative pion. |
| $\mechanical{M}_0$, $\mechanical{M}$ | $\unit{kg}$ or $\unit{MeV}/\mechanical{c}^2$ | Initial and final masses | Invariant masses before and after photon absorption or rocket acceleration. |
| $N$ | 1 | Photon count | Number of photons carried by the photon torpedo. |
