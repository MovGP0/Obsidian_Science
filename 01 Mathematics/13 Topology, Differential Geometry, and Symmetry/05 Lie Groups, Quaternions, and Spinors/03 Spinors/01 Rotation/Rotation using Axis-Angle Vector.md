A rotation of $ℝ^3$ can be represented by exactly one axis and the angle an object is rotated around this axis. The axis is unique unless the rotation is the identity.

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
> Every rotation in 3 dimensions is represented by a 3-parameter axis-angle vector, because $SO(3)$ is 3-dimensional. But axis-angle vectors do not compose by addition, and they do not record the homotopy class of the path of rotations.
> The representation with an "flag" (vector + twist), for example a unit quaternion on $S^3\subset ℝ^4$, records this class.
> Similar issues arise in higher dimensions.

## Angular velocity

An **angular velocity** $ω$, in a given [[Reference Frame]] $s$, is defined by 
- the angular speed which the angle $Θ$ changes $\frac{d}{dt} Θ(t) = \dot{Θ}$, and
- the axis-vector that represents the direction of the rotation $\hat{ω}_{s}$

$$ω_{s} = \hat{ω}_{s} \dot{Θ}$$
The **linear velocity** is measured tangential to the current position of the rotated object.

I.e. the unit vectors of a reference frame $b$ that is rotated by $ω_{s}$ are defined by the equations below. All vectors in these equations are expressed in frame $s$.
$$\dot{\hat{x}}_{b} = ω_{s} \times \hat{x}_{b}$$
$$\dot{\hat{y}}_{b} = ω_{s} \times \hat{y}_{b}$$
$$\dot{\hat{z}}_{b} = ω_{s} \times \hat{z}_{b}$$
