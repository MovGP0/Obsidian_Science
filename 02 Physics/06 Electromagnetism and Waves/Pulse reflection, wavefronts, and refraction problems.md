---
title: "Pulse reflection, wavefronts, and refraction problems"
---

> [!TLDR]
> Use matched pulses and wavefront geometry to predict reflection, refraction, and total internal reflection.

## Worked lecture material

##### Waves and wave pulses review

A fixed pulse profile has the form $f(\mechanical{x}-\mechanical{v}\mechanical{t})$ when moving left to right and $f(\mechanical{x}+\mechanical{v}\mechanical{t})$ when moving right to left. For the example

$$
\mechanical{y}(\mechanical{x},\mechanical{t})=
\frac{\mechanical{b}^3}{\mechanical{b}^2+(\mechanical{x}-\mechanical{v}\mechanical{t})^2},
$$

the maximum height $\mechanical{b}$ occurs when $\mechanical{x}-\mechanical{v}\mechanical{t}=0$, or at $\mechanical{t}=\mechanical{x}/\mechanical{v}$ for a fixed position.

At $\mechanical{t}=0$, the half-height condition $\mechanical{b}/2=\mechanical{b}^3/(\mechanical{b}^2+\mechanical{x}^2)$ gives $\mechanical{x}=\pm\mechanical{b}$. At a later time,

$$
\mechanical{b}^2+(\mechanical{x}-\mechanical{v}\mechanical{t})^2=2\mechanical{b}^2
\ \Longrightarrow\
\mechanical{x}=\mechanical{v}\mechanical{t}\pm\mechanical{b}.
$$

The handwritten box gives the arrival time $(\mechanical{x}-\mechanical{b})/\mechanical{v}$ of the leading half-height point. The trailing point arrives at $(\mechanical{x}+\mechanical{b})/\mechanical{v}$.

Using the quotient rule on the pulse gives

$$
\mechanical{v}_y(\mechanical{x},\mechanical{t})
=\frac{\partial\mechanical{y}}{\partial\mechanical{t}}
=\frac{2\mechanical{b}^3\mechanical{v}(\mechanical{x}-\mechanical{v}\mechanical{t})}
{[\mechanical{b}^2+(\mechanical{x}-\mechanical{v}\mechanical{t})^2]^2}.
$$

At $\mechanical{t}=0$, this reduces to $2\mechanical{b}^3\mechanical{v}\mechanical{x}/(\mechanical{b}^2+\mechanical{x}^2)^2$. For any differentiable right-moving profile, $\partial\mechanical{y}/\partial\mechanical{t}=-\mechanical{v}\,\partial\mechanical{y}/\partial\mechanical{x}$. Differentiating again gives $\partial^2\mechanical{y}/\partial\mechanical{t}^2=\mechanical{v}^2\partial^2\mechanical{y}/\partial\mechanical{x}^2$.

**Exercise 6-1(a)**

A uniform string is $2.5\,\unit{m}$ long, has a mass of $0.01\,\unit{kg}$, and is under $10\,\unit{N}$ of tension. Here the notes compute $\mechanical{\mu}=\mechanical{M}/\mechanical{L}=4\times10^{-3}\,\unit{kg\,m^{-1}}$ and obtain

$$
\signal{\omega}_1=\frac{\pi}{\mechanical{L}}\sqrt{\frac{\mechanical{T}}{\mechanical{\mu}}}
\simeq62.8\,\unit{rad\,s^{-1}},
\qquad
\signal{f}_1=\frac{\signal{\omega}_1}{2\pi}=10\,\unit{Hz}.
$$

**Exercise 6-1(b)**

The string is plucked and then touched $0.5\,\unit{m}$ from one end. Before touching, its modes occur at $10,20,30,\ldots\,\unit{Hz}$. A mode that survives must have a node at the touch point. The remaining $2.0\,\unit{m}$ span has a fundamental wavelength of $4.0\,\unit{m}$ and fundamental frequency

$$
\signal{f}=\frac{50\,\unit{m\,s^{-1}}}{4.0\,\unit{m}}=12.5\,\unit{Hz}.
$$

The lowest common harmonic of $10\,\unit{Hz}$ and $12.5\,\unit{Hz}$ is $50\,\unit{Hz}$. The original modes that persist have frequencies $50,100,150,\ldots\,\unit{Hz}$.

![[Kyle Kabasares - Vibrations and Waves - Fifth harmonic at the touch point.png|**Fig. 47** The touch point one fifth of the way along the string is a node of the fifth harmonic.]]

##### Wave reflection problem

Sketch the result for a pulse passing from a light rope to a heavy rope, from a heavy rope to a light rope, and from a rope to a very light thread. In the first case the incident pulse is partly transmitted upright and partly reflected upside down.

![[Kyle Kabasares - Vibrations and Waves - Reflection from a heavier rope.png|**Fig. 48** The light-to-heavy junction produces an inverted reflection and an upright transmission.]]

For a pulse incident from a heavy rope onto a light rope, the reflected pulse is upright. The transmitted profile is drawn taller than the incident one.

![[Kyle Kabasares - Vibrations and Waves - Reflection from a lighter rope.png|**Fig. 49** The heavy-to-light junction produces two upright pulses.]]

**Exercise 7-6**

A pulse takes $0.1\,\unit{s}$ to travel the length $\mechanical{L}$ of a string of mass $\mechanical{m}_s$. A mass $\mechanical{m}_b=100\mechanical{m}_s$ hangs over a pulley and supplies the tension $\mechanical{T}=\mechanical{m}_b\mechanical{g}$.

![[Kyle Kabasares - Vibrations and Waves - Hanging mass sets the tension.png|**Fig. 50** A hanging block supplies the tension in the horizontal string.]]

Use $\mechanical{v}=\mechanical{L}/(0.1\,\unit{s})$ and $\mechanical{v}^2=\mechanical{T}/\mechanical{\mu}$, with $\mechanical{\mu}=\mechanical{m}_s/\mechanical{L}$:

$$
\frac{\mechanical{L}^2}{(0.1\,\unit{s})^2}
=\frac{100\mechanical{m}_s\mechanical{g}\mechanical{L}}{\mechanical{m}_s},
\qquad
\mechanical{L}=100\mechanical{g}(0.1\,\unit{s})^2=9.8\,\unit{m}.
$$

For the third standing mode, $\signal{\omega}_3=3\pi\mechanical{v}/\mechanical{L}=30\pi\,\unit{rad\,s^{-1}}$, so the zero-phase solution is

$$
\mechanical{y}=\mechanical{A}\sin\left(\frac{3\pi\mechanical{x}}{\mechanical{L}}\right)
\cos[(30\pi\,\unit{s^{-1}})\mechanical{t}].
$$

**Homework 3, problem 2 revisited**

The time traces at $\mechanical{x}=0$ and $\mechanical{x}=1\,\unit{m}$ are proportional to $\sin(3\pi\mechanical{t})$ and $\sin(3\pi\mechanical{t}+\pi/8)$, respectively, with amplitude $0.2$ in the problem's units. The angular frequency is $3\pi\,\unit{rad\,s^{-1}}$, so $\signal{f}=3/2\,\unit{Hz}$.

For a right-moving wave, use $\mechanical{y}=\mechanical{A}\sin(\signal{\omega}\mechanical{t}-\signal{k}\mechanical{x}+\signal{\phi})$. Matching the first trace sets $\signal{\phi}=0$ modulo $2\pi$. Matching the second sets

$$
-\signal{k}(1\,\unit{m})+\signal{\phi}=\frac{\pi}{8}\pmod{2\pi},
\qquad
\frac{2\pi(1\,\unit{m})}{\signal{\lambda}}=2n\pi-\frac{\pi}{8}.
$$

The possible positive wavelengths are

$$
\signal{\lambda}=\frac{16}{16n-1}\,\unit{m},\qquad n=1,2,3,\ldots.
$$

This phase match includes the integer-cycle ambiguity left open in the earlier work on [[Wave pulses, interfaces, and dispersive propagation|the section on Homework 3, problem 2]].

**Exercise 7-9**

The sketch shows a triangular pulse moving right at $24\,\unit{m\,s^{-1}}$, with height marked $0.4\,\unit{m}$ and a position mark at $1.0$.

![[Kyle Kabasares - Vibrations and Waves - Right-moving triangular pulse.png|**Fig. 51** The initial triangular pulse and its direction of travel.]]

##### Wavefronts and boundary effects

This lecture introduces refraction and total internal reflection. Plane wavefronts appear as parallel lines in a two-dimensional section. Circular wavefronts expand radially from a source. The distance between successive equal-phase fronts is the wavelength $\signal{\lambda}$. A ray follows the local propagation direction and crosses the fronts at right angles.

![[Kyle Kabasares - Vibrations and Waves - Plane and circular wavefronts.png|**Fig. 52** Parallel fronts propagate in one direction and circular fronts propagate radially outward.]]

The Huygens–Fresnel construction treats every point on a wavefront as a secondary source. The new front is the envelope of the resulting wavelets after they propagate. The construction applies to both plane and circular waves.

![[Kyle Kabasares - Vibrations and Waves - Huygens wavelets.png|**Fig. 53** Secondary wavelets from a plane front reach the next plane front after traveling a distance ct.]]

##### Prelude to diffraction

The sketches apply the secondary-wavelet construction to a narrow opening. The outgoing fronts spread from the opening for both incident profiles shown.

![[Kyle Kabasares - Vibrations and Waves - Diffraction through an aperture.png|**Fig. 54** Wavefronts spread after passing through an opening in a barrier.]]

##### Refraction and Snell's law

When a wave crosses an interface, its frequency stays fixed. Its speed and wavelength can change. In one period $\signal{T}$, the wave travels $\mechanical{v}\signal{T}=\signal{\lambda}$ in the corresponding medium.

![[Kyle Kabasares - Vibrations and Waves - Secondary wavelets at a refracting boundary.png|**Fig. 55** The transmitted wavelets construct a new front with a different orientation.]]

Let $\mechanical{\theta}_i$ and $\mechanical{\theta}_r$ be the angles of incidence and refraction measured from the normal. The right triangles in the sketch share the distance $\mechanical{\ell}$ measured along the interface:

$$
\sin\mechanical{\theta}_i=\frac{\signal{\lambda}_1}{\mechanical{\ell}},
\qquad
\sin\mechanical{\theta}_r=\frac{\signal{\lambda}_2}{\mechanical{\ell}}.
$$

![[Kyle Kabasares - Vibrations and Waves - Geometry of Snells law.png|**Fig. 56** The wavelength and the common interface distance give the sine of each ray angle.]]

With $\signal{\lambda}_i=\mechanical{v}_i/\signal{f}$ and the optical index $n_i=\mechanical{c}/\mechanical{v}_i$, the ratios give

$$
\frac{\sin\mechanical{\theta}_i}{\sin\mechanical{\theta}_r}
=\frac{\signal{\lambda}_1}{\signal{\lambda}_2}
=\frac{\mechanical{v}_1}{\mechanical{v}_2}
=\frac{n_2}{n_1}.
$$

For light, $\mechanical{c}$ is the speed in vacuum. The notebook also mentions a relative index defined using the speed in air as a reference.

##### Refraction examples

A horizontal ray in the prism meets the slanted face with incidence angle $30^\circ$. The outgoing ray is deflected $22.6^\circ$ from horizontal, so its angle to the normal is $52.6^\circ$. Thus

$$
\frac{n_2}{n_1}=\frac{\sin30^\circ}{\sin52.6^\circ}\simeq0.63.
$$

Taking the exterior to have $n_2\simeq1$ gives $n_1\simeq1.59$.

![[Kyle Kabasares - Vibrations and Waves - Refraction at a prism face.png|**Fig. 57** The ray bends away from the normal when leaving the prism.]]

For three media with parallel interfaces, the example gives $n_1\sin20^\circ=n_2\sin30^\circ=n_3\sin10^\circ$. Eliminating the middle index gives $n_3=n_1\sin20^\circ/\sin10^\circ$.

##### Total internal reflection

For incidence from higher to lower index, $n_1>n_2$, the refracted angle increases to $90^\circ$ at the critical angle:

$$
\mechanical{\theta}_c=\arcsin\left(\frac{n_2}{n_1}\right).
$$

At the threshold the refracted ray is grazing. Above it the ray undergoes total internal reflection.

![[Kyle Kabasares - Vibrations and Waves - Critical incidence at an interface.png|**Fig. 58** The refracted direction approaches the interface as the angle of incidence approaches the critical value.]]

In the right-triangular prism example, the threshold is $\mechanical{\theta}_c\simeq42^\circ$. The interior angle $\mechanical{\alpha}$ at $C$ is complementary to the incidence angle on the slanted face, so the upper bound for $\mechanical{\alpha}$ is $48^\circ$.

![[Kyle Kabasares - Vibrations and Waves - Prism total internal reflection.png|**Fig. 59** A horizontal ray meets the slanted face of the prism at the critical angle in the limiting sketch.]]

## Source

Kyle Kabasares, *Vibrations and Waves (Physics 122, UC Merced 2015)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Inertial parameter in the equation of motion. |
| $\mechanical{t}$ | $\unit{s}$ | Time | Independent variable for the motion. |
| $\signal{\omega}$ | $\unit{rad\,s^{-1}}$ | Angular frequency | Rate of phase accumulation. |
| $\signal{\phi}$ | $\unit{rad}$ | Phase constant | Phase at the initial time. |
| $\mechanical{b}$ | $\unit{kg\,s^{-1}}$ | Damping coefficient | Proportionality constant between drag and velocity. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Wave speed | Product of wavelength and frequency. |
| $\signal{\lambda}$ | $\unit{m}$ | Wavelength | Spatial distance over one wave cycle. |
| $\mechanical{y}$ | $\unit{m}$ | Transverse displacement | Deflection of a string element from equilibrium. |
| $\mechanical{\mu}$ | $\unit{kg\,m^{-1}}$ | Linear mass density | Mass per unit length of the string. |
| $\mechanical{T}$ | $\unit{N}$ | String tension | Magnitude of the force along the string, distinct from the period $\signal{T}$. |
| $\mechanical{\theta}$ | $\unit{rad}$ | Local tangent angle | Angle between the string and the equilibrium direction. |
| $\mechanical{b}$ | $\unit{m}$ | Pulse height and half-width | Peak displacement and distance from the peak to a half-height point in this example. |
| $\signal{k}$ | $\unit{rad\,m^{-1}}$ | Angular wave number | Phase change per unit distance, equal to $2\pi/\signal{\lambda}$. |
| $\mechanical{M}$ | $\unit{kg}$ | Reduced mass | Effective mass for relative motion of the isolated pair. |
| $n_i$ | 1 | Refractive index | Ratio of the vacuum speed of light to the phase speed in medium $i$. |
| $\mechanical{\theta}_c$ | $\unit{rad}$ | Critical angle | Angle of incidence at which the refracted ray becomes grazing. |
