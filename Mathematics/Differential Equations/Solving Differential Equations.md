## Approaches

- [[#Substitution]]
- [[#Energy Conservation]]
- [[#Series Expansion]]
- [[#Laplace Transform]]
- [[#Hamiltonian Flow]]

**Example:** Simple Harmonic Oscillator

$F = m \frac{\mathrm{d}^2\,x}{\mathrm{d}\,t^2} = -k\,x$

## Substitution

The idea is to guess the function and substitute.

> [!Example]
> [Substitution example](Substitution%20Example.md)
## Energy Conservation

The Idea is to use the constant total energy to recover the amplitude and phase.

$$E = \frac{1}{2} m \left( \frac{\mathrm{d}\,x}{\mathrm{d}\,t} \right)^2 + \frac{1}{2} k\,x^2$$
> [!example]
> [Energy conservation example](Energy%20Conservation%20Example.md)
## Series Expansion

The idea is to derive the recurrence for Taylor coefficients and re-sum to the standard solution.
$$x(t) = \sum_{n=0}^\infty a_n\,t^n$$
> [!example]
> - [Series expansion example](Series%20Expansion%20Example.md)
## Laplace Transform

The idea is to incorporate the initial conditions via Laplace transforms and invert to time domain.
$$\hat{x}(s) = \int_0^\infty \mathrm{d}\,t\,e^{-s\,t}\, x(t)$$

> [!example]
> [Laplace transform example](Laplace%20Transform%20Example.md)

## Hamiltonian Flow

The idea is to evolve the canonical vector with the matrix exponential and read off $x(t)$.
$$\frac{\mathrm{d}}{\mathrm{d}\,t} \begin{pmatrix} x \\ p \end{pmatrix} = \begin{pmatrix} p\, m^{-1} \\ -k\,x \end{pmatrix}$$

> [!example]
> [[Hamiltonian Flow Example]]

## Sources

- YouTube: [Physics with Elliot](https://www.youtube.com/@PhysicswithElliot): [Physics Students Need to Know These 5 Methods for Differential Equations](https://www.youtube.com/watch?v=0kY3Wpvutfs)
