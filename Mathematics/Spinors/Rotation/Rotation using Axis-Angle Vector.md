An Rotation can be represented by some (one or more) axis and the angle an object is rotated around those axis.

An object can be rotated into any other orientation by rotating it by some amount around some axis.

> [!Note]
 > See [Euler's rotation theorem](https://en.wikipedia.org/wiki/Euler%27s_rotation_theorem) for a proof.

The axis angle vector $\vec{Θ}$ is defined by the angle $Θ$ and the axis $\hat{e}$:
$$\vec{Θ} = Θ\,\hat{e}$$
> [!Note]
> By convention, the (value of the) angle is assumed to be right-handed.

> [!Note]
> In Euclidean space, with 
> $$Θ ∈ S = [0,360°)$$
> the angle
> $$Θ = \tau = 2\pi = 360°$$
> is equivalent to
> $$Θ = 0°$$.

> [!Note]
> Rotations in 3 dimensions can't be properly represented by an 3d vector, since the orientation of the object might change during rotation along different axis.
> The representation with an "flag" (vector + twist) does represent the rotation properly, but this requires 4 dimensions.
> Similar issues arise in higher dimensions.

## Angular velocity

An **angular velocity** $ω$, in a given [[Reference Frame]] $s$, is defined by 
- the angular speed which the angle $θ$ changes $\frac{d}{dt} θ(t) = \dot{θ}$, and
- the axis-vector that represents the direction of the rotation $\hat{ω}_{s}$

$$ω_{s} = \hat{ω}_{s} \dot{θ}$$
The **linear velocity** is measured tangential to the current position of the rotated object.

I.e. the unit vectors of a reference frame $b$ that is rotated by $ω_{s}$ are defined by 
$$\dot{\hat{x}}_{b} = ω_{s} \times \hat{x}_{b}$$
$$\dot{\hat{y}}_{b} = ω_{s} \times \hat{y}_{b}$$
$$\dot{\hat{z}}_{b} = ω_{s} \times \hat{z}_{b}$$
