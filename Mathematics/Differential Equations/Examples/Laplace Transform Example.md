This example applies the Laplace transform to
$$x'' + \omega^2 x = 0,\qquad x(0) = x_0,\ \dot{x}(0) = v_0.$$

**Step 1: Transform each term.**  
Taking Laplace transforms,
$$\mathcal{L}\{x''\} = s^2 X(s) - s x_0 - v_0,\qquad \mathcal{L}\{x\} = X(s).$$
The transformed equation becomes
$$s^2 X(s) - s x_0 - v_0 + \omega^2 X(s) = 0.$$

**Step 2: Solve algebraically in $s$.**  
Collecting terms gives
$$X(s)\left(s^2 + \omega^2\right) = sx_0 + v_0.$$
Thus,
$$X(s) = \frac{s x_0 + v_0}{s^2 + \omega^2}.$$

**Step 3: Invert the transform.**  
Split the right-hand side:
$$X(s) = x_0 \frac{s}{s^2 + \omega^2} + \frac{v_0}{s^2 + \omega^2}.$$
Using standard Laplace pairs,
$$x(t) = x_0 \cos(\omega t) + \frac{v_0}{\omega} \sin(\omega t).$$

> [!note]
> The Laplace approach directly incorporates the initial conditions through the transform of derivatives and returns the same canonical solution.
