---
title: "Spacetime Coordinate"
---

> [!TLDR]
> In natural units, a spacetime four-vector contains time and the three spatial coordinates. Lowering its index changes the spatial signs.

The contravariant coordinate is
$$
\mechanical{x}^\mu=(\mechanical{x}^0,\mechanical{x}^1,\mechanical{x}^2,\mechanical{x}^3)
=(\mechanical{t},\mechanical{x},\mechanical{y},\mechanical{z})
=(\mechanical{t},\mechanical{\mathbf x}).
\tag{A.5}
$$
Its covariant components are
$$
\mechanical{x}_\mu=(\mechanical{t},-\mechanical{\mathbf x}).
$$

These are coordinates in an inertial Cartesian frame. The temporal component is time because the speed of light is set to one; with explicit units it is the speed of light times time. A coordinate tuple depends on the selected origin, whereas the difference between two event coordinates transforms as a four-vector under translations as well as Lorentz transformations.

For a displacement, the metric gives the squared interval as the squared time separation minus the squared spatial separation. Light propagation has zero interval. This checks both the natural-unit conversion and the spatial minus signs: zero interval does not imply coincident events. Lowering the coordinate index changes components used in contractions; it does not move the event or reverse the physical displacement.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}^\mu,\mechanical{x}_\mu$ | $\unit{GeV^{-1}}$ | Spacetime coordinate | The upper-index and lower-index components of the coordinate four-vector. |
| $\mechanical{t}$ | $\unit{GeV^{-1}}$ | Time coordinate | The temporal component with the speed of light set to one. |
| $\mechanical{\mathbf x},\mechanical{x},\mechanical{y},\mechanical{z}$ | $\unit{GeV^{-1}}$ | Spatial coordinates | The position vector and its three Cartesian components. |
