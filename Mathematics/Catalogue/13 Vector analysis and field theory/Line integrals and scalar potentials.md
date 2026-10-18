---
title: "Line integrals and scalar potentials"
catalogue_ids:
  - "13.3"
  - "13.3.1"
  - "13.3.1.1"
  - "13.3.1.2"
  - "13.3.1.3"
  - "13.3.1.4"
  - "13.3.1.5"
  - "13.3.1.6"
---

> [!TLDR]
> A vector line integral sums the tangent component along an oriented path; a scalar potential reduces it to an endpoint difference.

## Integration in vector fields

Read [[Vector functions and curves]], [[08.01 Definite integrals]], [[05.05 Dot products]], and [[Directional derivatives and gradients]]. Let a piecewise continuously differentiable curve $C$ run from $A$ to $B$, with parameterization $\mathbf r(t)$ for $a\le t\le b$. Let $\mathbf F$ be continuous on the curve. Define its oriented vector line integral by

$$
\int_C\mathbf F\cdot d\mathbf r
=\int_a^b\mathbf F(\mathbf r(t))\cdot\mathbf r'(t)\,dt.
$$

The field is evaluated on the curve before taking the dot product. On a regular portion, $d\mathbf r=\mathbf T\,ds$, where $\mathbf T$ is the unit tangent and $ds=\|\mathbf r'\|dt$. Thus the integral sums the signed tangent component, weighted by traveled length. It differs from the scalar arc-length integral $\int_C f\,ds$: reversing a path changes the vector line integral's sign, but does not change that scalar integral.

## Cartesian coordinates and properties

For $\mathbf F=(P,Q,R)$, the notation

$$
\int_C P\,dx+Q\,dy+R\,dz
$$

means exactly the parameterized expression above: use $dx=x'(t)dt$ and similarly for the other coordinates. There are not three unrelated paths. Linearity holds in the field. If a path is split into consecutive portions, their integrals add. Reversing direction multiplies the answer by minus one. A smooth increasing change of parameter leaves the answer unchanged, by ordinary substitution.

For a closed curve, write $\oint_C\mathbf F\cdot d\mathbf r$ and call it **circulation**. A closed path can have a nonzero integral even though its initial and final positions agree. It is the field's tangent alignment around the entire path that matters. For $\mathbf F=(-y,x,0)$ on the unit circle, $\mathbf r=(\cos t,\sin t,0)$ and $\mathbf r'=(-\sin t,\cos t,0)$. The integrand is one, so the counterclockwise circulation is $2\pi$.

## Conservative or potential fields

If $\mathbf F=\nabla f$ for a single-valued $C^1$ function $f$, the chain rule gives

$$
\mathbf F(\mathbf r(t))\cdot\mathbf r'(t)=\frac{d}{dt}f(\mathbf r(t)).
$$

The fundamental theorem of calculus therefore gives $\int_C\mathbf F\cdot d\mathbf r=f(B)-f(A)$. Such a field is **conservative**. Its integrals depend only on endpoints and every closed-path circulation is zero. Conversely, on a path-connected open domain, path independence allows construction of a potential: fix $A$, and define $f(p)$ by integrating from $A$ to $p$. The change along a short coordinate segment then proves $\partial_i f=F_i$ for a continuous field.

To find a potential in practice, integrate one component and retain an unknown function of the other coordinates. Differentiate the result to match the next component. A constant alone is not enough for the first integration because the other coordinates were held fixed.

If $\mathbf F$ is $C^1$ on its open domain and $\nabla\times\mathbf F=0$ there, the field is locally a gradient. For such a $C^1$ curl-free field, a simply connected open domain is a sufficient additional hypothesis for a global potential. The punctured-plane example in [[Curl and local circulation]] shows why the domain cannot be omitted.

## Worked example: build and check a potential

Let $\mathbf F=(2xy,x^2+2y,0)$ on all of $\mathbb R^3$. Integrating the first component with respect to $x$ gives $f=x^2y+g(y,z)$. Matching $f_y=x^2+g_y$ with the second component yields $g_y=2y$, so $g=y^2+h(z)$. The final component requires $h'=0$. Hence $f=x^2y+y^2+C$.

For any path from $(0,0,0)$ to $(1,2,0)$, the integral is $f(1,2,0)-f(0,0,0)=2+4=6$. Check along the straight path $\mathbf r(t)=(t,2t,0)$, $0\le t\le1$. The field there is $(4t^2,t^2+4t,0)$ and the derivative is $(1,2,0)$. Their dot product is $6t^2+8t$; its integral is $2+4=6$.

## Meaning of the line integral in mechanics

For a force field $\mechanical{\mathbf F}$ and displacement $d\mechanical{\mathbf r}$, the work is

$$
\energy{W}=\int_C\mechanical{\mathbf F}\cdot d\mechanical{\mathbf r}.
$$

Only the force component along displacement contributes. If a conservative force has potential energy $\energy{U}$, the physical sign convention is $\mechanical{\mathbf F}=-\nabla\energy{U}$, so $\energy{W}=\energy{U}(A)-\energy{U}(B)$. This sign convention differs from naming $f$ a mathematical potential of $\mathbf F=\nabla f$; then $f=-\energy{U}$ after suitable units are included. A force perpendicular to every path tangent does zero work along that path, even if its magnitude is large.

## Practice

1. Integrate $\mathbf G=(y,0)$ along the two paths from $(0,0)$ to $(1,1)$: first along the diagonal, then along the $x$-axis followed by a vertical segment.
2. Find a potential for $\mathbf H=(3x^2+z,2y,x)$ and its integral from $(0,0,0)$ to $(1,1,1)$.

## Worked answers

1. On $(t,t)$, the integrand is $t$, giving $1/2$. On the horizontal segment $y=0$, the integrand is zero. On the vertical segment $dx=0$, it is also zero. The second answer is zero, so the field is not conservative.
2. Integrating in $x$ gives $f=x^3+xz+g(y,z)$. Matching the other components gives $g=y^2+C$. The endpoint difference is $1+1+1=3$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\mathbf F}$ | $\unit{N}$ | Force | The force evaluated along the path in the mechanics section. |
| $\mechanical{\mathbf r}$ | $\unit{m}$ | Position | The position along the physical path. |
| $\energy{W}$ | $\unit{J}$ | Work | The line integral of force along displacement. |
| $\energy{U}$ | $\unit{J}$ | Potential energy | The energy whose negative gradient gives the conservative force. |
