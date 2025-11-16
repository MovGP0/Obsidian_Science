We solve a harmonic oscillator, given by
$$m\,\ddot{x} = -k\,x\qquad\text{or}\qquad \ddot{x} + \omega^2 x = 0,\qquad \omega := \sqrt{\frac{k}{m}}.$$

using the conserved energy
$$E = \frac{1}{2}m\dot{x}^2 + \frac{1}{2}k x^2,\qquad \dot{E}=0.$$

**Step 1: Express the energy in terms of amplitude.**  
The solution oscillates between turning points $\pm A$, so the total energy equals the potential energy at $x=A$: $E=\tfrac{1}{2}kA^2$. Using $k=m\omega^2$, the constant energy becomes
$$E = \frac{1}{2}m\omega^2 A^2.$$

**Step 2: Solve for $\dot{x}$ as a function of $x$.**  
Rewriting energy gives
$$\dot{x}^2 = \omega^2(A^2 - x^2).$$
Taking the square root yields a separable equation,
$$\frac{\mathrm{d}x}{\sqrt{A^2 - x^2}} = \pm \omega\,\mathrm{d}t.$$

**Step 3: Integrate to recover $x(t)$.**  
Integrating both sides,
$$\arcsin\!\left(\frac{x}{A}\right) = \pm \omega t + \varphi_0,$$
where $\varphi_0$ is fixed by the initial position: $\varphi_0 = \arcsin(x_0/A)$. Solving for $x$ gives
$$x(t) = A\sin(\pm\omega t + \varphi_0).$$
Choosing the sign consistent with $\dot{x}(0) = v_0$ recovers the same form as the substitution method.

**Step 4: Express amplitude and phase via the initial data.**  
Matching energy at $t=0$ to the initial conditions yields
$$A = \sqrt{x_0^2 + \left(\frac{v_0}{\omega}\right)^2},\qquad \varphi_0 = \arctan\left(\frac{x_0 \omega}{v_0}\right)$$
(or solve directly from $x_0$ and $v_0$)

> [!note]
> The energy approach delivers a mechanical interpretation: 
> - the constant total energy fixes the amplitude, 
> - the separation of variables yields the familiar sinusoidal time dependence.
