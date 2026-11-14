---
title: "Buoyancy, continuity, and Bernoulli problems"
---

> [!TLDR]
> Use displaced fluid weight, mass conservation, and mechanical energy balance to predict buoyancy and flow.

## Worked lecture material

##### ) — Archimedes' principle

The buoyant force equals the weight of the displaced fluid. For a submerged cube of side $h$, take the top pressure as $P_0$. The bottom pressure is $P_0+\rho gh$ and each horizontal face has area $A=h^2$. Pressure is force per unit area.

![[Kyle Kabasares - Newtonian Mechanics - Buoyancy from Pressure Difference.png|**Fig. 202** The cube, fluid pressure at the top and bottom, and forces on the two faces.]]

$$
F_B=F_{\mathrm{bottom}}-F_{\mathrm{top}}
=(P_0+\rho gh)A-P_0A
=\rho gh^3.
$$

In general, $\mechanical{F}_B=\mechanical{\rho}_f\mechanical{V}_f\mechanical{g}$, with $V_f$ the displaced fluid volume and $\rho_f$ its density.

##### Floating steel ship

A ship contains air, and the displaced water provides the upward force that balances its weight. Use a ship of mass $m=2\times10^5\,\unit{kg}$ with rectangular footprint $w=15\,\unit{m}$ by $L=25\,\unit{m}$.

![[Kyle Kabasares - Newtonian Mechanics - Floating Ship and Displaced Volume.png|**Fig. 203** The waterline, buoyant force, and weight of the ship.]]

$$
F_B-mg=0,\qquad
mg=1.96\times10^6\,\unit{N},\qquad
F_B=\rho_wghwL.
$$

With $\rho_w=1{,}000\,\unit{kg/m^3}$, the ship floats with $h\approx0.53\,\unit{m}$ submerged.

##### Displacement and buoyancy

If a dense metal chunk is dropped from a ship and sinks, the water level goes down. On the ship it accounts for displacement equal to its weight in water. Once submerged it displaces only its own volume, and the lighter ship also floats higher.

##### Balloon carrying cargo

The example is titled “hot air balloon” and uses helium as the lifting gas. Find the maximum cargo mass $m_c$ for a spherical balloon of radius $r$ and envelope mass $m_b$.

![[Kyle Kabasares - Newtonian Mechanics - Balloon Carrying Cargo.png|**Fig. 204** Helium-filled balloon, payload, and upward buoyant force.]]

With displaced air volume equal to helium volume, $V=\tfrac43\pi r^3$,

$$
\sum F_y=\rho_{\mathrm{air}}Vg-\rho_{\mathrm{He}}Vg-m_bg-m_cg=0.
$$

Solve this equation for $m_c$.

##### Fluid dynamics

The simplifying assumptions are inviscid flow, steady flow with velocity at each point constant in time, incompressibility with constant density, and irrotational flow.

For steady incompressible flow in a pipe, mass conservation gives $A_1v_1=A_2v_2$. The volume flow rate is $R=Av$ in $\unit{m^3/s}$. A larger cross section means a smaller flow speed at fixed flow rate.

![[Kyle Kabasares - Newtonian Mechanics - Continuity in a Widening Pipe.png|**Fig. 205** Flow from a narrow to a wider section.]]

##### Bernoulli's equation

The quantity $P+\tfrac12\rho v^2+\rho gy$ is constant along a streamline for steady incompressible inviscid flow.

![[Kyle Kabasares - Newtonian Mechanics - Bernoulli Pipe at Two Heights.png|**Fig. 206** Two cross sections with different pressures, speeds, and elevations.]]

$$
P_1+\tfrac12\rho v_1^2+\rho gy_1=P_2+\tfrac12\rho v_2^2+\rho gy_2.
$$

The page labels the densities $\rho_1$ and $\rho_2$ and states that they are equal in the usual case considered here.

##### Flow through a rising pipe

Find the exit speed $v_2$ for the pipe on the preceding page. The pipe rises by $1\,\unit{m}$ and $A_1=A_2/2$. Take $y_1=0$, $P_1=P_2$ because both ends are open to air, and $\rho_1=\rho_2=\rho$.

Bernoulli's equation reduces to $\tfrac12v_1^2=\tfrac12v_2^2+gy_2$. Continuity gives $v_1=(A_2/A_1)v_2=2v_2$. Therefore

$$
\tfrac12(2v_2)^2-\tfrac12v_2^2=gy_2,\qquad
v_2=\sqrt{\tfrac23gy_2}.
$$

##### Torricelli's law

Find the initial efflux speed from a small hole of area $A_1$ at height $y_1$. The tank is open, with free surface at $y_2$ and surface area $A_2$.

![[Kyle Kabasares - Newtonian Mechanics - Torricelli Efflux from a Tank.png|**Fig. 207** Open tank, free surface, and outlet.]]

Both points are at atmospheric pressure $P_0$. Since $A_2\gg A_1$, continuity gives $v_2\approx0$. Bernoulli's equation reduces to

$$
\tfrac12\rho v_1^2+\rho gy_1=\rho gy_2,\qquad
v_1=\sqrt{2g(y_2-y_1)}.
$$

Continuity and Bernoulli's equation imply that, at the same elevation, pressure falls where flow speed increases.

##### Pressure in a narrowing pipe

The two sections are at the same height, so Bernoulli's height terms cancel. Continuity gives $A_1v_1=A_2v_2$, and $A_2<A_1$ implies $v_2>v_1$.

![[Kyle Kabasares - Newtonian Mechanics - Pressure Drop in a Narrowing Pipe.png|**Fig. 208** The pipe narrows from cross section A₁ to A₂.]]

$$
P_1+\tfrac12\rho v_1^2=P_2+\tfrac12\rho v_2^2,\qquad
P_2-P_1=\tfrac12\rho(v_1^2-v_2^2)<0.
$$

The notes call this the Bernoulli effect. In the wing sketch, the air moves faster above the wing, so lower pressure there contributes an upward force. In the chimney sketch, faster flow over the opening reduces pressure there and helps draw the smoke out.

![[Kyle Kabasares - Newtonian Mechanics - Pressure Above and Below a Wing.png|**Fig. 209** Wing section and airflow above and below it.]]
![[Kyle Kabasares - Newtonian Mechanics - Wind across a Chimney.png|**Fig. 210** Wind passing across the chimney opening.]]

##### Newton's law of universal gravitation

Every pair of particles attracts with a force proportional to the product of their masses and inversely proportional to the square of their separation.

$$
\mechanical{F}=\frac{\mechanical{G}\mechanical{m}_1\mechanical{m}_2}{\mechanical{r}^{\,2}}.
$$

##### Doppler effect

Use $+v_o$ and $-v_s$ for observer and source motion toward each other, and $-v_o$ and $+v_s$ for motion away. Set the corresponding speed to zero for a stationary observer or source.

A fire truck emits a $400\,\unit{Hz}$ tone and drives at $33.5\,\unit{m/s}$. An oncoming car drives at $24.6\,\unit{m/s}$. With sound speed $343\,\unit{m/s}$, the observed frequencies are

$$
\begin{aligned}
f'_{\mathrm{approach}}&=400\frac{343+24.6}{343-33.5}\,\unit{Hz}\approx475\,\unit{Hz},\\
f'_{\mathrm{recede}}&=400\frac{343-24.6}{343+33.5}\,\unit{Hz}\approx338\,\unit{Hz}.
\end{aligned}
$$

If the car is moving away while the truck moves toward it,

$$
f'=400\frac{343-24.6}{343-33.5}\,\unit{Hz}\approx412\,\unit{Hz}.
$$

##### Fluid statics

Pressure is force per unit area. For uniform pressure, $P=F/A$. Locally, $P=\mathrm{d}F_\perp/\mathrm{d}A$. A pascal is $\unit{N/m^2}$, and $1\,\unit{atm}\approx1.013\times10^5\,\unit{Pa}$. Density is $\rho=m/V$ in $\unit{kg/m^3}$, so $m=\rho V$.

A hammer exerts $500\,\unit{N}$ on a nail with tip area $1\,\unit{mm^2}=10^{-6}\,\unit{m^2}$. The pressure at the tip is

$$
P=\frac{500\,\unit{N}}{10^{-6}\,\unit{m^2}}
=5\times10^8\,\unit{Pa}\approx5{,}000\,\unit{atm}.
$$

## Source

Kyle Kabasares, *Newtonian Mechanics (Physics 8, UC Merced 2013)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{F}$ | $\unit{N}$ | Force | Interaction that changes momentum. |
| $\mechanical{g}$ | $\unit{m/s^2}$ | Gravitational acceleration | Local acceleration of free fall. |
| $\mechanical{\rho}$ | $\unit{kg/m^3}$ | Mass density | Mass per unit volume. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Proportionality between net force and acceleration. |
| $\mechanical{\rho}$ | $\unit{kg/m^3}$ | Fluid density | Mass per volume of the surrounding fluid. |
| $\mechanical{F}_B$ | $\unit{N}$ | Buoyant force | Upward force equal to the displaced fluid's weight. |
| $\mechanical{G}$ | $\unit{N\,m^2/kg^2}$ | Gravitational constant | Proportionality constant in Newton's law of gravitation. |
