---
title: "Angular Integrals in d Dimensions"
---

> [!TLDR]
> The surface area of the unit sphere supplies the angular factor that reduces rotationally invariant integrals to one radial integral.

In $d$ Euclidean dimensions, the surface area of the unit sphere is
$$
\Omega_d=\frac{2\pi^{d/2}}{\Gamma(d/2)}.
\tag{A.92}
$$
In particular,
$$
\Omega_2=2\pi,
\qquad
\Omega_3=4\pi,
\qquad
\Omega_4=2\pi^2.
$$
For a rotationally invariant momentum integral,
$$
\int d^d\mechanical{k}_E\,f(\mechanical{k}_E^2)
=\frac{2\pi^{d/2}}{\Gamma(d/2)}
\int_0^\infty d\mechanical{k}_E\,\mechanical{k}_E^{d-1}f(\mechanical{k}_E^2).
\tag{A.93}
$$
On the right, $\mechanical{k}_E$ denotes the radial momentum magnitude.

Here the subscript counts ambient Euclidean dimensions: the sphere itself has dimension $d-1$. Thus the three-dimensional angular factor is the area of a two-dimensional unit sphere. The unit sphere is dimensionless; momentum dimensions enter through the radial differential and its power.

To reconstruct (A.92), integrate a unit-width Gaussian in Cartesian coordinates, giving $\pi^{d/2}$, and in radial coordinates, giving $\Omega_d\Gamma(d/2)/2$. Equating the two results fixes the angular factor. For $d=1$ it gives two, the two directions on a line. The reduction in (A.93) requires a radial integrand; with a fixed external vector, directional dependence must first be treated explicitly. For noninteger dimension the gamma-function expression is an analytic continuation, not the literal surface of a noninteger-dimensional geometric sphere.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{k}_E$ | $\unit{GeV}$ | Euclidean momentum | The integration vector on the left and its radial magnitude on the right. |
