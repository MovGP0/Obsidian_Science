---
title: "Separation of variables on a circular membrane"
---

> [!TLDR]
> A fixed circular rim turns the radial equation into a Bessel eigenvalue problem, with mode frequencies set by zeros of the radial solution.

Consider the dimensionless wave equation $u_{tt}=\Delta u$ on the unit disk with $u(1,\theta,t)=0$. Assume regularity at the center and periodicity in the angle. A product solution $u=T(t)R(r)\Theta(\theta)$ gives $T''+\lambda T=0$ and the spatial equations

$$
\Theta''+m^2\Theta=0,\qquad
r^2R''+rR'+(\lambda r^2-m^2)R=0.
$$

Periodicity permits nonnegative integer $m$, with cosine and sine factors for $m>0$ and a constant for $m=0$. The spatial operator has positive eigenvalues. Multiplying $-\Delta v=\lambda v$ by a real spatial mode $v$ and integrating by parts gives $\lambda\int v^2=\int|\nabla v|^2$. Equality to zero would force $v$ constant and then zero at the rim.

Set $z=\sqrt{\lambda}\,r$ in the radial equation. This gives Bessel’s equation of order $m$. Regularity at zero excludes the second-kind solution $Y_m$, which diverges there. The first-kind solution $J_m$ must satisfy $J_m(\sqrt{\lambda})=0$ at the rim. Thus the eigenvalues are $j_{m,n}^2$, with $j_{m,n}$ the positive zeros of $J_m$. For a given angular order, project initial data onto the radial modes with inner product $\int_0^1 R_i(r)R_j(r)r\,dr$, where the factor $r$ comes from the polar area element. The two independent angular patterns for positive $m$ share a frequency because rotation leaves the boundary unchanged. See [[Boundary eigenvalue problems]].

## Sources

Source material from Kyle Kabasares’s UC Merced notes. [[The wave equation on a line and a finite string#Sturm–Liouville eigenvalue problems|Math 126]], [[Rectangular and circular membrane eigenmodes#Vibrating rectangular membrane|Math 126]].
