---
title: "Vacuum electromagnetic waves and optical boundaries"
---

> [!TLDR]
> Maxwell’s equations fix the speed and field orientation of a vacuum wave, while phase matching explains refraction and interference.

## From the curl equations to a wave

In vacuum without charges or currents, the electric and magnetic fields have zero divergence. Taking the curl of Faraday’s law and using the vacuum Ampère–Maxwell law gives $\nabla^2\electric{\mathbf E}=\electric{\varepsilon}_0\magnetic{\mu}_0\partial_t^2\electric{\mathbf E}$. Here $\electric{\varepsilon}_0$ and $\magnetic{\mu}_0$ are the vacuum permittivity and permeability. The propagation speed is $\signal{c}=1/\sqrt{\electric{\varepsilon}_0\magnetic{\mu}_0}$. For a plane wave traveling along $+\hat{\mathbf x}$ with electric field along $\hat{\mathbf y}$, Faraday’s law sets the magnetic field along $\hat{\mathbf z}$ and its magnitude to $\electric{E}/\signal{c}$. The Poynting vector $\energy{\mathbf S}=\electric{\mathbf E}\times\magnetic{\mathbf B}/\magnetic{\mu}_0$ then points along the direction of propagation. Its units are power per area.

## Refraction, interference, and imaging

At an interface between transparent, isotropic media at rest, phase matching along the interface requires equal tangential wave numbers. The frequency is common on both sides and the magnitude of the wave number is proportional to the refractive index. Therefore $n_1\sin\theta_1=n_2\sin\theta_2$, with angles measured from the normal. For $n_1>n_2$, transmitted propagation is possible up to the critical angle $\arcsin(n_2/n_1)$. Beyond this angle the field across the interface is evanescent in a semi-infinite second medium.

For two narrow coherent slits separated by $\mechanical{d}$, the far-field path difference at angle $\theta$ is $\mechanical{d}\sin\theta$. Bright fringes occur at integer multiples of the wavelength $\signal{\lambda}$ when the fields start in phase. With screen distance $\mechanical{D}\gg\mechanical{d}$ and small viewing angles, the neighboring fringes are spaced by $\mechanical{D}\signal{\lambda}/\mechanical{d}$. Doubling the slit separation halves the spacing in this regime. A finite slit width also supplies a diffraction envelope.

A thin lens uses refraction to redirect rays. In a uniform surrounding medium and at small angles, the signed object and image distances $\mechanical{s},\mechanical{s}'$ obey $1/\mechanical{s}+1/\mechanical{s}'=1/\mechanical{f}$ for focal length $\mechanical{f}$. With a real object at twice the positive focal length, an ideal converging lens makes an inverted image of the same size at twice that distance on the other side. Measure the screen position while varying the object distance to test the paraxial model.

## Sources

Source material from Kyle Kabasares’s UC Merced notes. [[AC impedance, Maxwell waves, and energy flux#Induced fields|Physics 9H]], [[Pulse reflection, wavefronts, and refraction problems#Wavefronts and boundary effects|Physics 122]].

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\electric{\mathbf E},\electric{E}$ | $\unit{V\,m^{-1}}$ | Electric field | Vacuum wave field and its magnitude. |
| $\magnetic{\mathbf B}$ | $\unit{T}$ | Magnetic flux density | Magnetic field of the vacuum wave. |
| $\electric{\varepsilon}_0$ | $\unit{F\,m^{-1}}$ | Vacuum permittivity | Electric constant in Maxwell’s equations. |
| $\magnetic{\mu}_0$ | $\unit{H\,m^{-1}}$ | Vacuum permeability | Magnetic constant in Maxwell’s equations. |
| $\signal{c}$ | $\unit{m\,s^{-1}}$ | Speed of light | Wave speed in vacuum. |
| $\energy{\mathbf S}$ | $\unit{W\,m^{-2}}$ | Energy flux density | Electromagnetic power per area. |
| $n_1,n_2$ | 1 | Refractive indices | Indices of the first and second media. |
| $\theta_1,\theta_2,\theta$ | $\unit{rad}$ | Angles | Incidence angle, refraction angle, and viewing angle. |
| $\mechanical{d},\mechanical{D}$ | $\unit{m}$ | Slit separation and screen distance | Distances used in the two-slit approximation. |
| $\signal{\lambda}$ | $\unit{m}$ | Wavelength | Wavelength in the slit and screen medium. |
| $\mechanical{s},\mechanical{s}',\mechanical{f}$ | $\unit{m}$ | Lens distances | Object distance, image distance, and focal length. |
