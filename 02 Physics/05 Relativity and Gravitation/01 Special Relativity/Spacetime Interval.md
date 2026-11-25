The **Spacetime Interval** $ds^2$ is a measure of the separation between two events in spacetime.

$$ds^2 = -c^2\  dt^2 + {a(t)}^2\ \left( dx^2 + dy^2 + dz^2 \right)$$

Where $a(t)$ is the scale factor for the expansion (or contraction) of the universe.

### Interpretation of the Spacetime Interval

In General Relativity, the quantity $ds^2$ encodes the nature of the separation between two events in spacetime.

It's sign and magnitude indicate whether signals or matter can travel between these events and how they fit into each other’s causal structure:

- **Timelike Interval ($ds^2<0$)**:  
    The events are separated in such a way that one could be the cause of the other.
    A massive particle, traveling at less than the speed of light, can move from one event to the other.
    In a suitable reference frame, the two events can occur at the same spatial location, differing only in time.
 
- **Spacelike Interval ($ds^2>0$)**:  
    The events are so far apart in space and so close together in time that no signal, not even light, can travel from one to the other. They are causally disconnected.
    It is possible, by changing reference frames, to make these events occur simultaneously—though at different points in space.
 
- **Null (Lightlike) Interval ($ds^2=0$)**:  
    The events are connected by a path that a light ray could follow.
    They lie exactly on each other’s light cones.
    Light (or anything traveling at the speed of light) can move from one event to the other, but no slower-than-light particle can do so directly.

## Spacetime Interval with moving observer

The line describing the distance between two events for an observer 'at rest' is given by

$$ds^2 = -c^2\,dt^2 + {\color{brown} a(t)}^2\,\left( dx^2 + dy^2 + dz^2 \right)$$
$$ds^2 = -c^2\,dt^2 + {\color{brown} \left[1+H_0\,(t-t_0)\right]}^2\,\left( dx^2 + dy^2 + dz^2 \right)$$
Here the scale factor is expanded to first order about the present time $t_0$, $a(t)\approx a_0\left[1+H_0\,(t-t_0)\right]$, with $a_0=a(t_0)=1$ and the Hubble constant $H_0$.
For a observer that moves uniformly with the speed $v$, we need to apply the Galilean Transformation:

$$ x' = x-vt $$
$$t' = t$$

$$\begin{align*}
ds'^2 &= -c^2\,dt'^2 + \left[1 + H_0\,(t'-t_0)\right]^2\,dx'^2 \\
&\approx -c^2\,dt^2 + \left[1 + 2\,H_0\,(t-t_0)\right]\,dx'^2 \\
&= -c^2\,dt^2 + \left[1 + 2\,H_0\,(t-t_0)\right]\,(dx^2 + v^2\,dt^2 - 2\,v\,dx\,dt)
\end{align*}$$

### Generalization to 3 spatial dimensions

With
$$
\begin{align*}
\mathbf{x}^2 &= dx^2 + dy^2 + dz^2 \\
\mathbf{v} &= (v_x, v_y, v_z) \\
\mathbf{v} \cdot d\mathbf{x} &= v_x\,dx + v_y\,dy + v_z\,dz
\end{align*}$$
we get
$$
\begin{align*}
ds'^2 &= -c^2\,dt^2 + \left[1 + 2\,H_0\,(t-t_0)\right]\left(d\mathbf{x}^2 + v^2 dt^2 - 2(\mathbf{v}\cdot d\mathbf{x})\,dt\right) \\
&= -c^2 dt^2 + \left[1 + 2\,H_0\,(t-t_0)\right] \left( dx^2 + dy^2 + dz^2 + (\mathbf{v}\cdot\mathbf{v})\,dt^2 - 2(\mathbf{v}\cdot d\mathbf{x})\,dt \right)
\end{align*}$$
## Time Dilation

The term $H_0\,(t-t_0)$ can be ignored for human timescales, because of the relatively large age of the universe. Therefore we get:

$$ds'^2 = -c^2\,\left( 1-\frac{v^2}{c^2} \right)\,dt^2 - 2\,v\,dx\,dt + dx^2$$
The [[Metric Tensor of the Universe]] under **Galilean Transformation** $GT(v)$ represents **Time Dilation**:

$$g = \begin{pmatrix}
-c^2 & 0 \\
0 & 1 \\
\end{pmatrix}
\ \xrightarrow{GT(v)}\ 
g' = \begin{pmatrix}
-c^2\,\left( 1-\frac{v^2}{c^2} \right) & -v \\
-v & 1 \\
\end{pmatrix}
$$

This matrix uses the coordinates $(t, x)$. In the coordinates $(ct, x)$, the same metric has $g_{00} = -\left(1-\frac{v^2}{c^2}\right)$ and $g_{01} = g_{10} = -\frac{v}{c}$.

> [!note]
> This is a Galilean-coordinate exercise. A Galilean boost of the Minkowski metric does not give the special-relativistic time dilation between inertial frames. A Lorentz boost keeps the metric equal to $\eta$. In standard relativity, the off-diagonal term is an artifact of the non-Lorentz coordinates. Its interpretation as a gravitomagnetic potential below belongs to the Machian framework that this note follows.

- The metric factor $g_{00} = -\left(1-\frac{v^2}{c^2}\right)$ (in coordinates $(ct, x)$) determines the behavior of moving clocks.
- The **gravitomagnetic potential**, represented by the term $g_{10} = g_{01} = -\frac{v}{c}$ (in coordinates $(ct, x)$), represents the laws of motion, the origin of inertia, and the inertial forces, as well as effects involving the [[Spin Angular Momentum]].

In rotating frames, effects caused by the gravitomagnetic potential are determined by the curl of the relativistic potential, acting as a cosmic gravitomagnetic field:
$$B_{g_{U}} = -\nabla \times v = -2\Omega$$
Where $\Omega$ is the angular velocity of a reference frame, which rotates in the matter-filled universe.

**Note**: This is similar to the magnetic field in electro-magnetism, generated from a current, as the curl of the vector potential.

With
$$\nabla \times A_{g} = B_{g}$$
$$A_{g} = -\frac{v}{c}$$
we get
$$\nabla \times A_{g} = B_{g} = -\frac{2 \Omega}{c}$$
The [[Gravitational potential]] of the universe $\Phi_{U}$ changes to
$$\Phi_{U}' = \gamma\, \Phi_{U} = \frac{1}{\sqrt{1-\frac{v^2}{c^2}}} \, \Phi_{U}$$
in a moving frame. This relation belongs to the Machian framework that this note follows. It is not a standard result of special or general relativity, and this note gives no source for it.