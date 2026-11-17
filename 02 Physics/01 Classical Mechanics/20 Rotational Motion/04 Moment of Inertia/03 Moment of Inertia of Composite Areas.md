---
title: "4.3 Moment of Inertia of Composite Areas"
---

> [!TLDR]
> Add the moments of inertia of the parts about a common axis, subtracting any cutout contributions.

For a composite body made from simple shapes, find the moment of inertia of each piece about the same axis and add the results. Use the parallel-axis or perpendicular-axis theorem to transfer a known moment to the chosen axis. For a cutout, subtract the contribution the missing material would have made.

**Example 5. Moment of inertia of a composite object.** A uniform thin square of side $\mechanical L$ and mass $\mechanical M$ supports three uniform thin disks, each of radius $\mechanical R$ and mass $\mechanical m$. One disk is centered at the square’s center $O$. The other two are centered at consecutive vertices. Find the moment of inertia about the axis through $O$ perpendicular to the plane. The moments about the corresponding axes through the square and disk centers are $\mechanical I_{\mathrm{CM,square}}=\tfrac16\mechanical M\mechanical L^2$ and $\mechanical I_{\mathrm{CM,disk}}=\tfrac12\mechanical m\mechanical R^2$.

![[rotational-motion-fig-4-11.svg|**Fig. 4.11** A composite area consisting of a uniform thin square of side length L and three uniform thin disks of radius R. One disk is placed at the center of the square O, and the other two are placed such that their centers coincide with two consecutive vertices.|370]]

The moment of inertia is the sum of the contributions about the common axis through $O$.

$$
\mechanical I_O=\mechanical I_{\mathrm{square}}+\mechanical I_{\mathrm{center\ disk}}
+\mechanical I_{\mathrm{vertex\ 1}}+\mechanical I_{\mathrm{vertex\ 2}}. \tag{4.37}
$$

The distance from $O$ to each of the two occupied vertices is $\mechanical d=\sqrt{(\mechanical L/2)^2+(\mechanical L/2)^2}=\mechanical L/\sqrt2$. Use the parallel-axis theorem for each disk centered on a vertex.

$$
\mechanical I_{\mathrm{vertex\ 1}}=\mechanical I_{\mathrm{vertex\ 2}}
=\mechanical I_{\mathrm{CM,disk}}+\mechanical m\mechanical d^2
=\tfrac12\mechanical m\mechanical R^2+\tfrac12\mechanical m\mechanical L^2. \tag{4.38}
$$

Substitute into Equation (4.37).

$$
\begin{aligned}
\mechanical I_O
&=\tfrac16\mechanical M\mechanical L^2+\tfrac12\mechanical m\mechanical R^2
+2\left(\tfrac12\mechanical m\mechanical R^2+\tfrac12\mechanical m\mechanical L^2\right) \\
&=\tfrac16\mechanical M\mechanical L^2+\tfrac32\mechanical m\mechanical R^2
+\mechanical m\mechanical L^2.
\end{aligned} \tag{4.39}
$$

### Exercises

(i) Compute the moment of inertia of (a) a thin uniform cylindrical shell and (b) a uniform solid cylinder, each with length $\mechanical L$, radius $\mechanical R$, and mass $\mechanical M$, about its central axis along its length. Compare the results with those for the thin ring and the uniform thin disk.

(ii) Revisit the uniform rod in Example 4. Compute its moment of inertia about the perpendicular axes through its midpoint and one end by integrating in terms of the distance $\mechanical r$ from the rotation axis.

(iii) A thin rod of length $10\,\unit m$ has linear density increasing from $2\,\unit{kg\,m^{-1}}$ to $22\,\unit{kg\,m^{-1}}$. Find (a) its mass $\mechanical M$, (b) its center-of-mass coordinate $\mechanical x_{\mathrm{CM}}$, (c) its moment of inertia about a perpendicular axis through the center of mass, and (d) its moment of inertia about a perpendicular axis through the heavy end.

(iv) Use $\mechanical I=\int\mechanical r^2\,d\mechanical m$ to compute the moment of inertia of the thin disk in Fig. 4.9 directly about either diameter. Compare with the result from symmetry and the perpendicular-axis theorem.

(v) Consider the uniform rectangular plate in Fig. 4.8. Let it have mass $\mechanical M$ and side lengths $\mechanical a$ along $x$ and $\mechanical b$ along $y$. The axes through the center are principal axes. Show that their principal moments of inertia are $\mechanical I_x=\tfrac{\mechanical M}{12}\mechanical b^2$, $\mechanical I_y=\tfrac{\mechanical M}{12}\mechanical a^2$, and $\mechanical I_z=\tfrac{\mechanical M}{12}(\mechanical a^2+\mechanical b^2)$. Find $\mechanical I_z$ by direct integration and then by applying the perpendicular-axis theorem after finding $\mechanical I_x$ and $\mechanical I_y$.

(vi) A thin square of side $2\mechanical l$ has a circular cutout of radius $\mechanical l$ inscribed in the square. Compute the moment of inertia about the axis through the center of the cutout perpendicular to the square.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{d}$ | $\unit{m}$ | Distance | Separation between the indicated points or axes. |
| $\mechanical{L}$ | $\unit{m}$ | Length | Length of the indicated body or part. |
| $\mechanical a,\mechanical b,\mechanical l$ | $\unit m$ | Lengths | Plate side lengths and cutout radius. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Mass of the indicated particle or body. |
| $\mechanical{M}$ | $\unit{kg}$ | Mass | Mass of the body or system. |
| $\mechanical{x}$ | $\unit{m}$ | Position coordinate | Position along the indicated axis. |
| $\mechanical{R}$ | $\unit{m}$ | Radius | Radius of the object or path. |
| $\mechanical I$ | $\unit{kg\,m^2}$ | Moment of inertia | Integral of squared perpendicular distance weighted by mass. |
