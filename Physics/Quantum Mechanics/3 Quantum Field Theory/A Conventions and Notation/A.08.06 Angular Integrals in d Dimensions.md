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

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{k}_E$ | $\unit{GeV}$ | Euclidean momentum | The integration vector on the left and its radial magnitude on the right. |
