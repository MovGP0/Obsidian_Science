Assuming we have a [[Jones Vectors|Jones Vector]] $J \in \mathbb{C}^n$, where the entries of the vector are [[Complex Numbers]].

In this case we can't simply get the inverse of the vector using the transpose method:

$$\|J\|^2 \ne J^T J$$
Instead we need to use the complex conjungate of the transposed vector:

$$\|J\|^2 = \left(J^T\right)^* J$$
This operation is called the **Hermitian Conjungate**

$$J^{\dagger} = \left(J^T\right)^* = \left(J^*\right)^T$$

thus we can write
$$\|J\|^2 = J^{\dagger} J = J J^{\dagger}$$

## Examples

> [!example]
> Using the Jones Vector
> $$J_1 = \frac{1}{\sqrt{2}} \begin{bmatrix} 1 \\ -1 \end{bmatrix}$$
> we apply the *Hermitian Conjungate*
> $$J_1^\dagger = \frac{1}{\sqrt{2}} \begin{bmatrix} 1^* & (-1)^* \end{bmatrix} = \frac{1}{\sqrt{2}} \begin{bmatrix} 1 & -1 \end{bmatrix}$$
> by inserting
> $$J_1^\dagger J_1 = \frac{1}{2} (1^2 + (-1)^2) = \frac{1}{2}(1 + 1) = 1$$
> we get
> $$J_1^\dagger J_1 = 1$$
> ✅ The vector is normalized.

> [!example]
> Using the Jones Vector
> $$J_2 = \frac{1}{\sqrt{2}} \begin{bmatrix} 1 \\ i \end{bmatrix}$$
> we apply the *Hermitian Conjungate*
> $$J_2^\dagger = \frac{1}{\sqrt{2}} [1^*, i^*] = \frac{1}{\sqrt{2}} [1, -i].$$
> by inserting
> $$J_2^\dagger J_2 = \frac{1}{2} (1 \cdot 1 + (-i) \cdot i) = \frac{1}{2}(1 + 1) = 1$$
> we get
> $$J_2^\dagger J_2 = 1$$
> ✅ The vector is normalized.

> [!example]
> Using the Jones Vector
> $$J_3 = \begin{bmatrix} i \cos \theta \\ i \sin \theta \end{bmatrix}$$
> we apply the *Hermitian Conjungate*
> $$J_3^\dagger = [ (i \cos\theta)^*, (i \sin\theta)^* ] = [ (-i)\cos\theta, (-i)\sin\theta ]$$
> by inserting
> $$J_3^\dagger J_3 = (-i\cos\theta)(i\cos\theta) + (-i\sin\theta)(i\sin\theta) = (cos²θ + sin²θ) = 1$$
> we get $$J_3^\dagger J_3 = 1$$
> ✅ The vector is normalized.

> [!note]
> When the rotation vector is normalized, that the rotation does not change the vector lengths during the rotation.
