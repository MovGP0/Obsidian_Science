---
title: "Electric potential on the axis of a charged disk"
---

> [!TLDR]
> Integrate over concentric rings to find the disk’s axial potential, then differentiate it to obtain the axial electric field.

A thin disk of radius $\mechanical{R}$ in the plane $z=0$ has uniform surface charge density $\electric{\sigma}$ and is surrounded by vacuum. Use zero potential at infinity. Treat each ring of radius $\mechanical{r}$ and width $d\mechanical{r}$ as a collection of source points at the same distance $\sqrt{\mechanical{r}^2+\mechanical{z}^2}$ from the axial observation point at height $\mechanical{z}$. Its charge is $d\electric{Q}=2\pi\electric{\sigma}\mechanical{r}\,d\mechanical{r}$, so Coulomb’s potential gives

$$
\electric{\varphi}(\mechanical{z})
=\frac{\electric{\sigma}}{2\electric{\varepsilon}_0}
  \int_0^{\mechanical{R}}\frac{\mechanical{r}\,d\mechanical{r}}{\sqrt{\mechanical{r}^2+\mechanical{z}^2}}
=\frac{\electric{\sigma}}{2\electric{\varepsilon}_0}
  \bigl(\sqrt{\mechanical{R}^2+\mechanical{z}^2}-|\mechanical{z}|\bigr).
$$

The absolute value comes from evaluating the square root at zero radius. The transverse field components cancel by rotation symmetry. On the positive axis, $\electric{E}_z=-d\electric{\varphi}/d\mechanical{z}$, so

$$
\electric{E}_z(\mechanical{z})
=\frac{\electric{\sigma}}{2\electric{\varepsilon}_0}\left(1-\frac{\mechanical{z}}{\sqrt{\mechanical{R}^2+\mechanical{z}^2}}\right),
\qquad \mechanical{z}>0.
$$

For positive charge the field points away from the disk. The potential is even in height and the field is odd. Just above the center the field approaches $\electric{\sigma}/(2\electric{\varepsilon}_0)$, the value for an infinite charged sheet. At distances large compared with the radius, expand the square root to obtain $\electric{\varphi}\simeq\electric{Q}/(4\pi\electric{\varepsilon}_0|\mechanical{z}|)$, with $\electric{Q}=\pi\mechanical{R}^2\electric{\sigma}$. An axial measurement can distinguish the two regimes by comparing how rapidly the field changes with height.

## Sources

Source material from Kyle Kabasares’s UC Merced notes. [[Superposition, electric flux, and Gauss’s law problems#Dipole in an electric field|Physics 9H]], [[Field superposition and Gauss-law review#Concave mirror|Physics 9H]].

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{R},\mechanical{r},\mechanical{z}$ | $\unit{m}$ | Lengths | Disk radius, ring radius, and signed axial height. |
| $\electric{\sigma}$ | $\unit{C\,m^{-2}}$ | Surface charge density | Uniform charge per unit area. |
| $d\electric{Q},\electric{Q}$ | $\unit{C}$ | Charge | Charge of a ring element and of the disk. |
| $\electric{\varepsilon}_0$ | $\unit{F\,m^{-1}}$ | Vacuum permittivity | Constant in Coulomb’s law. |
| $\electric{\varphi}$ | $\unit{V}$ | Electric potential | Potential relative to infinity on the disk axis. |
| $\electric{E}_z$ | $\unit{V\,m^{-1}}$ | Electric field component | Signed field along the axis. |
