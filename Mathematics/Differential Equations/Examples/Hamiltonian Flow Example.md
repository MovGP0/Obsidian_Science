Given the harmonic oscillator
$$m\,\ddot{x} = -k\,x\qquad\text{or}\qquad \ddot{x} + \omega^2 x = 0,\qquad \omega := \sqrt{\frac{k}{m}}.$$

we first recast the oscillator into the Hamiltonian system with canonical coordinates $x$ and $p := m\dot{x}$:
$$\dot{x} = \frac{p}{m},\qquad \dot{p} = -kx.$$

**Step 1: Write the vector form.**  
Define $\mathbf{u}(t)=\begin{pmatrix}x(t)\\p(t)\end{pmatrix}$. Then the system becomes
$$\dot{\mathbf{u}} = \underbrace{\begin{pmatrix}0 & m^{-1}\\ -k & 0\end{pmatrix}}_{A}\mathbf{u}.$$

**Step 2: Compute the matrix exponential.**  
The matrix $A$ satisfies $A^2 = -\omega^2 I$ where $\omega=\sqrt{k/m}$, so
$$\mathrm{e}^{At} = \begin{pmatrix}\cos(\omega t) & \frac{1}{m\omega}\sin(\omega t)\\ -m\omega\sin(\omega t) & \cos(\omega t)\end{pmatrix}.$$

**Step 3: Apply the flow to the initial conditions** $\mathbf{u}(0) = (x_0,\,p_0)^T$ with $p_0 = m v_0$:
$$\mathbf{u}(t) = \mathrm{e}^{At}\mathbf{u}(0).$$
Reading off $x(t)$ gives
$$x(t) = x_0\cos(\omega t) + \frac{v_0}{\omega}\sin(\omega t).$$

**Step 4: Interpret the phase-space trajectory.**  

Every solution satisfies $H = \tfrac{1}{2m}p^2 + \tfrac{1}{2}k x^2 = \text{const}$, so the orbit is an ellipse in $(x,p)$-space.

The flow matrix above rotates the vector $\mathbf{u}$ at frequency $\omega$, matching the physical intuition of a constant-energy rotation.
