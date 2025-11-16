We expand the harmonic oscillator solution as a power series
$$x(t) = \sum_{n=0}^\infty a_n t^n$$
and plug it into
$$\ddot{x} + \omega^2 x = 0.$$

**Step 1: Compute derivatives.**  
The first and second derivatives are
$$\dot{x}(t) = \sum_{n=1}^\infty n a_n t^{n-1},\qquad \ddot{x}(t) = \sum_{n=2}^\infty n(n-1) a_n t^{n-2}.$$

**Step 2: Align powers of $t$.**  
Rewrite $\ddot{x}$ index to match the $x$ series:
$$\ddot{x}(t) = \sum_{n=0}^\infty (n+2)(n+1)a_{n+2} t^{n}.$$
Substituting gives
$$\sum_{n=0}^\infty \left[(n+2)(n+1)a_{n+2} + \omega^2 a_n\right] t^{n} = 0.$$

**Step 3: Recurrence relation.**  
Because the series must vanish for every power of $t$, the coefficients satisfy
$$a_{n+2} = -\frac{\omega^2}{(n+2)(n+1)} a_n.$$

**Step 4: Determine the independent solutions.**  
Pick the two initial constants $a_0 = x_0$ and $a_1 = v_0$. The recurrence generates even and odd terms separately:
- Even terms ($n=0,2,4,\dots$) produce the cosine series,
  $$a_{2m} = (-1)^m\frac{\omega^{2m}}{(2m)!}x_0.$$
- Odd terms ($n=1,3,5,\dots$) generate the sine series,
  $$a_{2m+1} = (-1)^m\frac{\omega^{2m}}{(2m+1)!} v_0.$$

**Step 5: Resum to the familiar solution.**  

The series sum to
$$x(t) = x_0\cos(\omega t) + \frac{v_0}{\omega}\sin(\omega t),$$
matching the other methods and confirming that the recurrence produces the same analytic result.
