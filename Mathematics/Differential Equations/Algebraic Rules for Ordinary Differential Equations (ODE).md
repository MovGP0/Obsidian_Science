## Differentiation rules

### Linearity

$$
\frac{d}{dt}(\alpha f + \beta g) = \alpha \frac{df}{dt} + \beta \frac{dg}{dt}
$$
Linearity lets you treat each term separately, which is vital when isolating particular solutions.

### Product rule

$$
\frac{d}{dt}(fg) = f' g + f g'
$$
Use this whenever two time-dependent factors multiply so derivatives do not drop hidden contributions.

### Quotient rule

$$
\frac{d}{dt}\left(\frac{f}{g}\right) = \frac{f' g - f g'}{g^2}
$$
The quotient rule tracks how both numerator and denominator change; ensure $g$ stays away from zero.

### Chain rule

$$
\frac{d}{dt}f(u(t)) = f'(u(t))\, u'(t)
$$
Nested arguments are common in substitution methods, and the chain rule ensures inner derivatives are included.

### Trigonometric derivatives

$$
\frac{d}{dt}\sin t = \cos t
$$
The sine wave shifts into the cosine when differentiating, so phase information is preserved.

$$
\frac{d}{dt}\cos t = -\sin t
$$
Cosine differentiation introduces a sign flip, which is essential for solving harmonic oscillators.

$$
\frac{d}{dt}\tan t = \sec^2 t
$$
The tangent derivative produces $\sec^2 t$, which often appears alongside linear forcing terms in Riccati equations.

Apply the chain rule when the trigonometric argument itself depends on $t$.

### Logarithmic derivatives

$$
\frac{d}{dt}\ln t = \frac{1}{t}
$$
Use this for positive arguments to turn multiplicative growth into additive rates.

$$
\frac{d}{dt}\ln f(t) = \frac{f'(t)}{f(t)}
$$
This more general form applies whenever $f(t)$ stays away from zero; it is the backbone of integrating factors.

### Higher derivatives

Apply the same rules iteratively when you differentiate twice or more; for example, $y'' = d^2y/dt^2$ keeps notation tidy in linear equations.

### Constants vanish

$$
\frac{d}{dt}C = 0
$$
Constants drop out, simplifying both sides of ODEs and letting you focus on dynamic terms.

## Integration rules

### Linearity of the integral

$$
\int (\alpha f + \beta g)\,dt = \alpha \int f\,dt + \beta \int g\,dt
$$
Breaking forcing terms apart makes particular integral evaluations more manageable.

### Substitution

$$
\int f'(u(t))\, u'(t)\,dt = \int f'(u)\,du
$$
Substitution turns composite integrands into simpler antiderivatives by relabeling the inner function.

### Integration by parts

$$
\int u\,dv = u v - \int v\,du
$$
Use this when the integrand is a product so you can peel off derivatives from one factor.

### Trigonometric integrals

$$
\int \sin t\,dt = -\cos t + C
$$
The integral of sine recovers the negative cosine, which is useful when reversing harmonic motion.

$$
\int \cos t\,dt = \sin t + C
$$
Cosine integrates to sine, allowing energy terms in ODEs to be written as perfect derivatives.

$$
\int \sec^2 t\,dt = \tan t + C
$$
This antiderivative frequently appears when solving differential equations involving tangent or slope fields.

Use substitution when the trigonometric argument carries additional dependence on $t$.

### Logarithmic integrals

$$
\int \frac{1}{t} \, dt = \ln |t| + C
$$
The integral of $1/t$ yields the logarithm, which captures multiplicative growth in separable equations.

$$
\int \frac{f'(t)}{f(t)} \, dt = \ln |f(t)| + C
$$
This form arises when integrating derivative-over-function combinations; it is particularly handy in exact equations and integrating factors.

### Definite integrals and initial values

Definite integrals pinned between $t_0$ and $t$ enforce $y(t_0)=y_0$ and remove arbitrary constants from the calculation.

### Inverse operations

Integration undoes differentiation provided smoothness; always add the constant $C$ for indefinite integrals until boundary conditions fix it.

## Notes

- Always check whether an ODE can be rewritten as the derivative of a product or composite function before integrating.
- Keep track of units or dimensions: improper application of linearity or constants can introduce inconsistencies.
- When a rule introduces a new constant (e.g., from integration), align it with boundary or initial conditions to fix its value.
