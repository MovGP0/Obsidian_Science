## Electromagnetic Field

The *Electric Field* $\mathbf{E}$ and *Magnetic Field* $\mathbf{B}$ form a **transverse** wave. This means that the electromagnetic wave travelling in an direction $\vec{z}$ can oscillate around the perpendicular (XY) plane, but not in the $\vec{z}$ direction.

The **Polarization** is the geometric orientation of the of the electric field $\mathbf{E}$.

- If a vertical polarized electromagnetic wave is rotated by 90°, it becomes a horizontal polarized wave. 
- If a vertical polarized electromagnetic wave is rotated by 180°, it stays vertically polarized, but becomes phase shifted by $\frac{1}{2}$ cycle.

The field is represented as a *Vector Field*, i.e. the field strength $\mathbf{E}$ in every location $\mathbf{x}$ is represented by an vector at that location:
$$\vec{E}(x) = E^x e_{x} + E^y e_{y} + E^z e_{z} = \begin{bmatrix}
E^x \\
E^y \\
E^z
\end{bmatrix}$$
In an vertically polarized field $\mathbf{E}$ travelling in the z direction, the x-components (horizontal wave component) and z-components (non-transverse oscillation) of the vectors are zero.

## Travelling Wave

The vector $\vec{E_{z}}(t, \mathbf{x})$, at location $(t,\mathbf{x})$ travelling in the $\vec{z}$ direction, is then given by:

$$E^y(t, z) = A \cos(ω t - k z + φ)$$
where 
- $ω$ is the *Angular Frequency*
- $z$ is the *Location* of the vector on the z-axis
- $k$ is the *Angular Wavenumber*
- $φ$ is the *Phase*, which represents the starting value at position $(t, z) = (0, 0)$.
- $A$ is the *Amplitude* of the wave.

> [!note]
> - The *frequency* of the wave is $f = \frac{ω}{2π}$.
> - The *inverse wavelength* (spatial frequency) of the wave is $\frac{1}{λ} = \frac{k}{2π}$.

## Phase Shift

The *phase* $φ$ will shift the wave along the travelling direction

A phase of $φ = -\frac{π}{2}$ shifts the wave by $\frac{1}{4}$ of a cycle, which is the equivalent of transforming the cosine-wave into a sine-wave:
$$\sin(θ) = \cos\left(θ - \frac{π}{2}\right)$$

## Complex Representation of the Electric Field

While the electric field only has real components, we can extend it to a complex field. The added imaginary part has no physical meaning. The physical field is the real part $\mathrm{Re}\,E$:
$$E = A \cos(ω t - k z + φ) + iA \sin(ω t - k z + φ)$$

[[Euler's Formula]] allows us to represent the wave in a simplified manner:
$$E = A e^{i(ω t - k z + φ)}$$
$$E = A e^{i(ω t - k z) + i φ}$$
$$E = A e^{i(ω t - k z)} e^{i φ}$$

where
-  $A$ is the *Amplitude* of the wave
- $e^{i φ}$ represents the *Phase* of the wave
- $e^{i(ω t - k z)}$ represents the actual travelling wave

With this we can represent Polarization as:

**Vertical Polarization** (oscillation in y-direction)
$$E = \begin{bmatrix} 0 \\ A_y e^{i φ_y} e^{i(ω t - k z)} \\ 0 \end{bmatrix}$$

**Horizontal Polarization** (oscillation in x-direction)
$$E = \begin{bmatrix} A_x e^{i φ_x} e^{i(ω t - k z)} \\ 0 \\ 0 \end{bmatrix}$$

When we superimpose (add) a vertically polarized wave and a horizontally polarized wave together, we get:

$$E = \begin{bmatrix}
A_x\,e^{i φ_x}\,e^{i(ω t - k z)} \\
A_y\,e^{i φ_y}\,e^{i(ω t - k z)} \\
0 \\
\end{bmatrix} = \begin{bmatrix}
A_x\,e^{i φ_x} \\
A_y\,e^{i φ_y} \\
0 \\
\end{bmatrix}\,e^{i(ω t - k z)}$$

## Jones Vector

When we choose coordinates, such that the third component of this vector is 0, we get the **Jones Vector** $J$, which represents the „polarization information” of the given wave:
$$J = \begin{bmatrix}
A_x\,e^{i φ_x} \\
A_y\,e^{i φ_y}
\end{bmatrix}$$

We can re-write this as the linear combination of the *Horizontal Polarization* $H$ and *Vertical Polarization* $V$:
$$J = 
A_x\,e^{i φ_x} \begin{bmatrix} 1\\0 \end{bmatrix} +
A_y\,e^{i φ_y} \begin{bmatrix} 0\\1 \end{bmatrix}$$

$$\left|J\right> = A_x\,e^{i φ_x} \left|H\right> + A_y\,e^{i φ_y} \left|V\right>$$

### Diagonal Polarization

With Amplitudes of $A_x = A_y = 1$, and phases $φ_x = φ_y = 0$  with $e^{i\,0} = 1$, we get the diagonal polarization $D$.
Note that since the diagonal has a length of $\sqrt{2}$, we normalize the diagonal polarization to a length of 1:

$$\left|D\right> = \frac{1}{\sqrt{2}} \left|H\right> + \frac{1}{\sqrt{2}} \left|V\right>$$
$$\left|D\right> = \frac{1}{\sqrt{2}} \begin{bmatrix}
1 \\ 1
\end{bmatrix}$$

> [!note]
> The expression $\frac{1}{\sqrt{2}}$ is needed for normalization, such that the amplitude is 1.

### Antidiagonal Polarization

With Amplitudes of $A_x = 1$, $A_y = -1$, and phases $φ_x = φ_y = 0$  with $e^{i\,0} = 1$, we get the anti-diagonal polarization $A$.

$$\left|A\right> = \frac{1}{\sqrt{2}} \left|H\right> - \frac{1}{\sqrt{2}} \left|V\right>$$

$$\left|A\right> = \frac{1}{\sqrt{2}} \begin{bmatrix}
1 \\ -1
\end{bmatrix}$$

### Left-Circular Polarization

With Amplitudes of $A_x = A_y = 1$, and phases $φ_x = 0$, $φ_y = \frac{π}{2}$ we get:

$$\left|L\right> = \frac{1}{\sqrt{2}} \left|H\right> + e^{i \frac{π}{2}} \frac{1}{\sqrt{2}} \left|V\right>$$
$$\left|L\right> = \frac{1}{\sqrt{2}} \left|H\right> + i \frac{1}{\sqrt{2}} \left|V\right>$$
$$\left|L\right> = \frac{1}{\sqrt{2}} \begin{bmatrix} 1 \\ i \end{bmatrix}$$

which represents a *clockwise* or *left-handed* rotation.

> [!note]
> The expression $e^{i \frac{π}{2}}$ represents a quarter rotation, which we can simply write as $i$.

> [!check]
> Switching to column notation and adding the travelling wave:
> $$ \begin{bmatrix} 1 \\ e^{i(π)/(2)} \end{bmatrix} e^{i(ω t - kz)} $$
> Assuming position z = 0 and angular frequency ω = 1 we get:
> $$ \begin{bmatrix} 1 \\ e^{i(π)/(2)} \end{bmatrix} e^{it} = \begin{bmatrix} e^{it} \\ e^{i(t+π/2)} \end{bmatrix}$$
> Using Euler's formula we get
> $$\begin{bmatrix} \cos(t) + i \sin(t) \\ \cos(t+π/2) + i \sin(t+π/2) \end{bmatrix}$$
> Using only the real part of the field we get
> $$\begin{bmatrix} \cos(t) \\ \cos(t+π/2) \end{bmatrix}$$
> which is equivalent to
> $$ \begin{bmatrix} \cos(t) \\ -\sin(t) \end{bmatrix} $$
> 
> When we calculate the values for this matrix at different times, we get:
> $$t = 0; t = 2π \Rightarrow \begin{bmatrix}1 \\ 0 \end{bmatrix}$$
> $$t = \frac{π}{2} \Rightarrow \begin{bmatrix}0 \\ -1 \end{bmatrix}$$
> $$t = π \Rightarrow \begin{bmatrix}-1 \\ 0 \end{bmatrix}$$
> $$t = \frac{3π}{2} \Rightarrow \begin{bmatrix}0 \\ 1 \end{bmatrix}$$

### Right-Circular Polarization

With Amplitudes of $A_x = A_y = 1$, and phases $φ_x = 0$, $φ_y = \frac{-π}{2}$ we get:

$$\left|R\right> = \frac{1}{\sqrt{2}} \left|H\right> + e^{i \frac{-π}{2}} \frac{1}{\sqrt{2}} \left|V\right>$$
$$\left|R\right> = \frac{1}{\sqrt{2}} \left|H\right> - i \frac{1}{\sqrt{2}} \left|V\right>$$
$$\left|R\right> = \frac{1}{\sqrt{2}} \begin{bmatrix} 1 \\ -i \end{bmatrix}$$

which represents an *anti-clockwise* or *right-handed* rotation.

## Additional Notes

### Conventions

We use here the phase convention $e^{i(ω t - k z)}$, with the handedness defined as above, resulting in:
$$L = \begin{bmatrix} 1 \\ +i \end{bmatrix} \ \ R = \begin{bmatrix} 1 \\ -i \end{bmatrix}$$

Other texts use the phase convention $e^{i(k z - ω t)}$, or define the handedness from the opposite viewpoint (source or receiver). Then the signs are the other way around:
$$L = \begin{bmatrix} 1 \\ -i \end{bmatrix} \ \ R = \begin{bmatrix} 1 \\ +i \end{bmatrix}$$

### $SU(2)$ Rotation

Note that a full Rotation in Polarization Space ($V \rightarrow D \rightarrow H \rightarrow A \rightarrow V$) is only half a rotation in physical space (with phase-shift).

### Jones Matrices

Polarizers (filter linear polarization) and Waveplates (lossless retarders that change the phase difference between the components) can be represented as **Jones Matrices**:

**Polarizers**
$$\begin{bmatrix}
1 & 0 \\ 0 & 0
\end{bmatrix}$$
$$\begin{bmatrix}
0 & 0 \\ 0 & 1
\end{bmatrix}$$

**[[Waveplates]]**
$$\begin{bmatrix}
1 & 0 \\ 0 & i
\end{bmatrix}$$
$$\frac{1}{\sqrt{2}} \begin{bmatrix}
1 & i \\ i & 1
\end{bmatrix}$$
