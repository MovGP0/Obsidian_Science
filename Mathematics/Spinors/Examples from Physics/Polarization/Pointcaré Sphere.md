Assuming we have [[Waveplates]], which are represented by matrices $Q$, that change the polarization state $J$, which are represented by the [[Jones Vectors]] $J = \{H, V, D, A, R, L \}$.

The matrix $Q = \begin{bmatrix} 1 & 0 \\ 0 & i \end{bmatrix}$ rotates between the polarization states $D \Rightarrow L \Rightarrow A \Rightarrow R \Rightarrow D$, 
and $Q' = {\color{lightgrey} e^{i \frac{π}{4}}} \frac{1}{\sqrt{2}} \begin{bmatrix}1 & i \\ i & 1 \end{bmatrix}$ rotates between the polarization states $H \Rightarrow L \Rightarrow V \Rightarrow R \Rightarrow H$.

We can arrange those polarization states in a sphere that represents the polarization state space:

![400](PolarizationSpaces.svg)
We can now construct a new matrix $Q''$ that rotates between the polarizations $H \Rightarrow A \Rightarrow V \Rightarrow D \Rightarrow H$. 

From the general form
$$\begin{bmatrix}
\cos θ & \sin θ \\
-\sin θ & \cos θ
\end{bmatrix}$$
we can derive
$$Q'' = \frac{1}{2} \begin{bmatrix} 1 & 1 \\ -1 & 1 \end{bmatrix}$$
>[!note] 
> The matrices
> 
> $\begin{bmatrix} 1 & 0 \\ 0 & i \end{bmatrix}$, ${\color{grey} e^{i \frac{\pi}{4}}} {\color{blue} \frac{1}{√{2}} } \begin{bmatrix} 1 & i \\ i & 1 \end{bmatrix}$, and ${\color{blue} \frac{1}{√{2}} } \begin{bmatrix} 1 & 1 \\ -1 & 1 \end{bmatrix}$, 
> 
> are all examples of Unitary 2⨯2 Matrices and are thus part of the $U(2)$ group. 

Those matrices represent rotations on the *Pointcaré Sphere*, <u>without changing the length</u> of the [[Jones Vectors]].

> [!note]
> Rotations in 3D space $\mathbb{R}^3$ are done by rotation matrices R that satisfy $R^T R = 1$, which means that applying their inverse is returning the same value and they are not changing the length of the rotated 3D vector.
> Those rotation are therefore part of the 3D orthogonal group $O(3)$. The $O(3)$ group contains **rotations** and **reflections** in 3D space, which **don't change the length of the vector**.

## References

- [YouTube: Polarizations and SU(2) Matrices](https://www.youtube.com/watch?v=qICXIY5Dynk)
- [Wikipdia: Pointcaré Kugel](https://de.wikipedia.org/wiki/Poincar%C3%A9-Kugel)
