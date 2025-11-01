A **Waveplate** rotates one polarization into another using a *phase delay*.

When a electromagnetic (light) wave passes through a medium, it travels at a slower speed than an electromagnetic wave in a vacuum, resulting in a phase-shift relative between the two waves.

In an **Birefringent Crystal** („Doppelbrechung”) the phase change is different in the horizontal and vertical directions.

## Quarter Waveplate

When the crystal introduces a *quarter phase change* in the vertical component, relative to the horizontal component, it will transform a diagonal polarization $\left|D\right>$ into ant left-circular polarization $\left|L\right>$. This can be represented by the Jones Matrix:

$$Q = \begin{bmatrix}
1 & 0 \\ 0 & i
\end{bmatrix}$$

When we apply this matrix to the diagonal polarization vector, the horizontal component will be unchanged:

$$Q D = L$$
$$\begin{bmatrix}
1 & 0 \\ 0 & i
\end{bmatrix} \frac{1}{\sqrt{2}} \begin{bmatrix}
1 \\ 1
\end{bmatrix} = \frac{1}{\sqrt{2}} \begin{bmatrix}
1 \\ i
\end{bmatrix}$$
When we apply this matrix again, we get the original polarization direction, but with a half cycle phase change:
$$Q L = A$$
$$\begin{bmatrix}
1 & 0 \\ 0 & i
\end{bmatrix} \frac{1}{\sqrt{2}} \begin{bmatrix}
1 \\ i
\end{bmatrix} = \frac{1}{\sqrt{2}} \begin{bmatrix}
1 \\ -1
\end{bmatrix}$$
And again will return the right-circular polarization:
$$Q A = R$$
$$\begin{bmatrix}
1 & 0 \\ 0 & i
\end{bmatrix} \frac{1}{\sqrt{2}} \begin{bmatrix}
1 \\ -1
\end{bmatrix} = \frac{1}{\sqrt{2}} \begin{bmatrix}
1 \\ -i
\end{bmatrix}$$
Applying the waveplate again, will return the original diagonally-polarized wave:
$$Q R = D$$
$$\begin{bmatrix}
1 & 0 \\ 0 & i
\end{bmatrix} \frac{1}{\sqrt{2}} \begin{bmatrix}
1 \\ -i
\end{bmatrix} = \frac{1}{\sqrt{2}} \begin{bmatrix}
1 \\ 1
\end{bmatrix}$$

## Elliptical Polarization

By adjusting the length of the birefringent crystal, we can change the amount of phase change $\phi$:

$$\begin{bmatrix}
1 & 0 \\ 0 & e^{i\phi}
\end{bmatrix}$$
we can create **Elliptical Polarization**. 

### Examples for Elliptical Polarization

Elliptical polarization between D and L:
$$\frac{1}{\sqrt{2}} \begin{bmatrix}
1 \\ e^{i\frac{π}{4}}
\end{bmatrix}$$
Elliptical polarization between L and A:
$$\frac{1}{\sqrt{2}} \begin{bmatrix}
1 \\ e^{i\frac{7π}{8}}
\end{bmatrix}$$
## Rotated Quarter Waveplate

Assuming we rotate the Quarter Waveplate by 45°, we need a transform matrix $G$ between our coordinate system and the coordinate system of the waveplate:

$$G = \begin{bmatrix}
\cos 45° & -\sin 45° \\
\sin 45° & \cos 45°
\end{bmatrix}
= \begin{bmatrix}
\cos \frac{π}{2} & -\sin \frac{π}{2} \\
\sin \frac{π}{2} & \cos \frac{π}{2}
\end{bmatrix}
= \begin{bmatrix} \frac{1}{√{2}} & -\frac{1}{√{2}}\\ \frac{1}{√{2}} & \frac{1}{√{2}} \end{bmatrix}
= \frac{1}{\sqrt{2}} \begin{bmatrix} 1 & -1 \\ 1 & 1 \end{bmatrix}$$
For rotating back into the original coordinate system, we need the inverse matrix, which rotates by -45° and is constructed in the same way:
$$G^{-1} = \frac{1}{\sqrt{2}} \begin{bmatrix} 1 & 1 \\ -1 & 1 \end{bmatrix}$$
Now we can apply the transformation by first, rotate into the coordinate system of the waveplate using $G$, apply the waveplate transformation $Q$, and rotate back to the original coordinate system using $G^T$:

$$Q' = G^{-1} {\color{purple} Q} {\color{brown} G}$$
$$=\frac{1}{\sqrt{2}} \begin{bmatrix} 1 & 1 \\ -1 & 1 \end{bmatrix}
{\color{purple} \begin{bmatrix} 1 & 0 \\ 0 & i \end{bmatrix}}
{\color{brown} \frac{1}{\sqrt{2}} \begin{bmatrix} 1 & -1 \\ 1 & 1 \end{bmatrix}}$$
$$= \frac{1}{2} \begin{bmatrix}
1+i & -1+i \\
-1+i & 1+i
\end{bmatrix}$$
$$= \frac{1}{\sqrt{2}} \begin{bmatrix}
1 & i \\ i & 1
\end{bmatrix} {\color{lightgrey} e^{i \frac{π}{4}}{4}}$$

This new equation now represents the Waveplate angled at 45°.

> [!note]
> The phase-shift factor $e^{i \frac{π}{4}}$ can be ignored for the polarization changes, since it changes the phase in the travel direction of the wave, but not the polarization.

Applying the 45° angled Waveplate to a horizontal polarized wave, we get a left-circular polarized wave:

$$Q' {\color{blue} H} = {\color{lightgrey} e^{i \frac{π}{4}}} \frac{1}{\sqrt{2}} \begin{bmatrix}
1 & i \\ i & 1
\end{bmatrix}  {\color{blue} \begin{bmatrix}
1 \\ 0
\end{bmatrix}} = {\color{lightgrey} e^{i \frac{π}{4}}} \frac{1}{\sqrt{2}} \begin{bmatrix}
1 \\ i
\end{bmatrix} = {\color{lightgrey} e^{i \frac{π}{4}}} L$$

Applying this waveplate repeatedly, we get the following transformations of the polarizations (when ignoring the phase-shift):
$$Q' H = L$$
$$Q' L = V$$
$$Q' V = R$$
$$Q' R = H$$

## Arbitrary rotations of the Waveplate

When rotating the Waveplate by an arbitrary angle $θ$, we can change how much we transform the wave in the polarization space:

$$Q' = G_{θ}^{-1} {\color{purple} Q} {\color{brown} G_{θ}}$$
$$= \begin{bmatrix}
\cos θ & \sin θ \\
-\sin θ & \cos θ
\end{bmatrix}
{\color{purple} \begin{bmatrix} 1 & 0 \\ 0 & i \end{bmatrix}}
{\color{brown} 
\begin{bmatrix}
\cos θ & -\sin θ \\
\sin θ & \cos θ
\end{bmatrix}}$$
$$= \begin{bmatrix}
(\cos{θ})^2 + i (\sin θ)^2 & (i-1) \cos{θ} \sin{θ} \\
(i-1) \cos{θ} \sin{θ} & (\sin{θ})^2 + i (\cos{θ})^2
\end{bmatrix}$$
