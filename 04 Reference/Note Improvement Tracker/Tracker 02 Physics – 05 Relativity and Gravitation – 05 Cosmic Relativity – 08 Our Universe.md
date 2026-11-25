---
title: "Note Improvement Tracker – 02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/08 Our Universe"
---

> [!TLDR]
> This note tracks the review of the 22 notes in `02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/08 Our Universe`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 38 possible errors or notation conflicts. 38 of them are verified (38 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N3584|N3584]] 08 References: Ref 12 (Sandage, ApJ 127, 513) is from 1958, not 1948 (08.02.03 itself says 1958); ref 9 (Eddington, MNRAS 90, 668) is from 1930, not 1931; ref 8 (Lemaître translation) is MNRAS 91, 483–490 (1931), not volume 90. **Fixed:** Ref 12 Sandage now 1958, ref 9 Eddington now 1930, ref 8 Lemaître translation now MNRAS 91.
- [[#N3586|N3586]] 08.01 Our Physical Universe Before 1930: Telescopes: the 100-inch Hooker telescope (1917) and the 60-inch (1908) were on Mt. Wilson, not Mt. Palomar (the 200-inch came to Palomar in 1948); Herschel's largest reflector (1789) had a 48-inch aperture. The disclaimer "The source states" does not fix the error; correct the facts. **Fixed:** Replaced the "source states" sentence with the correct facts and added that the 200-inch came to Palomar in 1948.
- [[#N3586|N3586]] 08.01 Our Physical Universe Before 1930: "adding a constant potential to Poisson's equation" is wrong; Einstein added a term $-\lambda\phi$, $\nabla^2\phi-\lambda\phi=4\pi G\rho$, as 08.03 states, which then admits a constant-potential solution. **Fixed:** Text now gives nabla^2 phi - lambda phi = 4 pi G rho with its constant-potential solution; added phi, lambda, G to the table.
- [[#N3586|N3586]] 08.01 Our Physical Universe Before 1930: "de Sitter soon showed that the Einstein Universe expands even without matter": de Sitter's 1917 solution is a different, empty model with $\Lambda$; it was originally presented in static coordinates and its expanding interpretation came later (Lemaître 1925, Robertson 1928). Also write (8.1) and the 1915 form with $\tfrac12g_{ik}R$ in the text instead of keeping the omission with a callout. **Fixed:** Rewrote de Sitter sentence (empty model with Lambda, static coordinates first, expanding interpretation by Lemaître 1925 and Robertson 1928); added 1/2 to both forms, removed the callout, and updated the checks sentence.
- [[#N3586|N3586]] 08.01 Our Physical Universe Before 1930: "$\Lambda=\kappa\rho/2=1/R^2$" with $\kappa=8\pi G/c^4$ and mass density needs $\kappa\rho c^2/2$ for units of $\mathrm{m^{-2}}$. **Fixed:** Changed to Lambda = kappa rho c^2/2 = 4 pi G rho/c^2 = 1/R^2; table now gives kappa in m/J and rho in kg/m^3.
- [[#N3587|N3587]] 08.02 The Universe as Observed: Over $5000\,\mathrm{yr}$ the scale factor changes by $H_0\Delta t\approx5000/(1.4\times10^{10})\approx3.6\times10^{-7}$, about one part in three million, not one part in ten million. **Fixed:** Changed to "about one part in three million".
- [[#N3588|N3588]] 08.02.01 The Large Scale Distribution of Matter: "below $10^{-27}\,\mathrm{kg/m^3}$, about one hydrogen atom per cubic metre": one H atom per $\mathrm{m^3}$ is $1.7\times10^{-27}\,\mathrm{kg/m^3}$, above the quoted bound; the Planck baryon density $\Omega_b\rho_c\approx4.2\times10^{-28}\,\mathrm{kg/m^3}$ corresponds to about 0.25 H atoms per $\mathrm{m^3}$. **Fixed:** Now gives about 4e-28 kg/m^3, about one hydrogen atom per four cubic metres.
- [[#N3589|N3589]] 08.02.02 The Expansion of the Universe: "the period was inversely related to the 'breathing' star's size": larger, more luminous Cepheids have longer periods (pulsation period $\propto(G\bar\rho)^{-1/2}$, lower mean density for larger stars), which is why period indicates luminosity. Also Leavitt's Cepheids were in the Small Magellanic Cloud, a fact that made them all lie at a common distance. **Fixed:** Text now says larger, more luminous, lower-density Cepheids have longer periods, and that Leavitt's sample in the Small Magellanic Cloud was at a common distance.
- [[#N3589|N3589]] 08.02.02 The Expansion of the Universe: Lemaître's result is $a_o/a_e=1+z$ with $z$ the redshift; $1+v/c$ holds only for $v\ll c$. Write $1+z$ and give the low-velocity Doppler limit separately, together with the fractional form $\delta\nu/\nu=-v/c$ in the text instead of the callout. **Fixed:** Text now gives delta nu/nu = -v/c for small v, a_o/a_e = 1+z, and 1+z ≈ 1+v/c only for v << c; removed the callout; added z to the table.
- [[#N3590|N3590]] 08.02.03 The Velocity-Distance Relation from Observations: "a new 200-inch telescope, described in the source as at Mt. Wilson of the Palomar observatory": the 200-inch Hale telescope is on Mt. Palomar (Palomar Observatory); correct the text. **Fixed:** Now "the 200-inch Hale telescope of the Palomar Observatory on Mt. Palomar".
- [[#N3590|N3590]] 08.02.03 The Velocity-Distance Relation from Observations: Modern values are outdated: SH0ES gives $73.0\pm1.0\,\mathrm{km/(s\,Mpc)}$ and Planck 2018 $67.4\pm0.5\,\mathrm{km/(s\,Mpc)}$; the quoted $\pm4$ and $\pm3$ hide the 5σ "Hubble tension" that this paragraph should mention. **Fixed:** Now SH0ES 73.0 ± 1.0 and Planck 2018 67.4 ± 0.5 km/(s Mpc), with a sentence on the about 5-sigma Hubble tension.
- [[#N3591|N3591]] 08.03 Einstein's Cosmological Constant: Eq. (8.6) mixes $\kappa=8\pi G/c^4$ with mass density $\rho$; in SI it should read $\lambda=\kappa\rho c^2/2=4\pi G\rho/c^2=1/R^2$, which also lets the reader evaluate $R$ for a given density. **Fixed:** Changed both parts to kappa rho c^2/2 and added = 4 pi G rho/c^2; table now gives kappa in m/J and adds c.
- [[#N3592|N3592]] 08.03.01 The Cosmological Principle and the Expansion: Eq. (8.8) prints $f^2(t)\,d\Sigma^2$; it must be $f^2(r)\,d\Sigma^2$ as the following sentence defines. Fix it in the text rather than with a callout, and use one metric signature for (8.7) and (8.2). **Fixed:** Changed to f^2(r), changed (8.7) to -c^2 dt^2 + a^2 dl^2, and removed the callout.
- [[#N3592|N3592]] 08.03.01 The Cosmological Principle and the Expansion: Eq. (8.9): $\ddot V/V=3\ddot a/a+6(\dot a/a)^2$ for $V\propto a^3$, so the identification $\ddot V/V=3\ddot a/a$ is false as written; state that the Baez–Bunn relation applies to a small ball of test particles initially at rest relative to each other, for which the result is $3\ddot a/a$. Also write $E=\rho Vc^2$ consistently with (8.10). **Fixed:** Text now states the Baez–Bunn ball of test particles initially at rest, gives the comoving-volume result with the 6(adot/a)^2 term, writes E = rho V c^2, removes the callout, and updates the checks paragraph.
- [[#N3592|N3592]] 08.03.01 The Cosmological Principle and the Expansion: Eqs. (8.15)–(8.16) drop the $\Lambda c^2/3$ terms that (8.12) and (8.14) contain; add them, otherwise the later dark-energy discussion (8.03.03) has no equation to refer to. **Fixed:** Added +Lambda c^2/3 to both equations.
- [[#N3592|N3592]] 08.03.01 The Cosmological Principle and the Expansion: "this model is not entirely excluded by observations": the empty Milne model ($\Omega_k=1$) is excluded by CMB and BAO data, which give $|\Omega_k|\lesssim0.002$; update the statement. **Fixed:** ≲ 0.002 versus Omega_k = 1); added Omega_k to the table.
- [[#N3593|N3593]] 08.03.02 The Concept of a Critical Density: Replace $\rho_c=H^2/(8\pi G)$ by $\rho_c=3H^2/(8\pi G)$ in both places; the quoted $9\times10^{-27}\,\mathrm{kg/m^3}$ is the value of the correct formula ($H_0=70$ gives $9.2\times10^{-27}$; the printed formula would give $3\times10^{-27}$), so the callout's "numerical estimate retained" should go. **Fixed:** Both places now use 3H^2/(8 pi G) (9.2e-27 kg/m^3 for H0 = 70 checked); removed the callout and updated the checks sentence.
- [[#N3593|N3593]] 08.03.02 The Concept of a Critical Density: "For $\rho>\rho_c$ the model ... eventually ... collapses" holds only for $\Lambda=0$; with the observed $\Lambda>0$ a closed model can expand forever. Add the condition in the text. **Fixed:** Added that recollapse needs Lambda = 0 and that with Lambda > 0 a closed model can expand forever; added Lambda to the table.
- [[#N3594|N3594]] 08.03.03 The Measurements of the Deceleration Parameter: Replace "$2\ddot a/a=8\pi G\rho/3=kc^2/a^2-H_0^2$" and "$q_0=1+kc^2/(H_0^2a^2)$" by the correct matter-only results $\ddot a/a=-4\pi G\rho/3$ and $q_0=\Omega_m/2=\tfrac12[1+kc^2/(H_0^2a^2)]$ in the text itself. **Fixed:** Text now gives addot/a = -4 pi G rho/3 and q0 = Omega_m/2 = (1/2)[1 + kc^2/(H0^2 a^2)], identifies q = 0 without matter as the k = -1 Milne Universe, and removes the callout.
- [[#N3594|N3594]] 08.03.03 The Measurements of the Deceleration Parameter: "Adding matter at half the critical density can give $q=0$, mimicking a flat matter-free Universe" is unclear: $q_0=\Omega_m/2-\Omega_\Lambda=0$ needs $\Omega_\Lambda=\Omega_m/2$ (e.g. $\Omega_m=0.5$, $\Omega_\Lambda=0.25$, not flat), and the "flat matter-free" model with $q=0$ does not exist ($k=0$ with $\rho=0$ and $\Lambda=0$ is static Minkowski); rephrase as "mimicking the empty Milne model". **Fixed:** Rephrased: q0 = Omega_m/2 - Omega_Lambda = 0 needs Omega_Lambda = Omega_m/2 (e.g. 0.5 and 0.25), which mimics the empty Milne model and is not flat; added rho_c, Omega_m, Omega_Lambda to the table.
- [[#N3595|N3595]] 08.04 The Reason Behind the Expansion of the Universe: Eq. (8.23) with $\Lambda>0$ (the sign Einstein and de Sitter used, and the sign in (8.3) and (8.21)) gives oscillating $\phi$, not exponential growth; the exponent $\sqrt{-\Lambda c^2}$ is real only for $\Lambda<0$. De Sitter's result is $H=\sqrt{\Lambda c^2/3}$ with $\Lambda>0$, so "$H=\sqrt{-\Lambda c^2}$" has both the wrong sign and a missing factor 3. **Fixed:** Stated that (8.23) oscillates for Lambda>0 and is exponential only for Lambda<0 in this convention; de Sitter H changed to c sqrt(Lambda/3) for Lambda>0.
- [[#N3595|N3595]] 08.04 The Reason Behind the Expansion of the Universe: Eq. (8.24) uses $\ddot a/a=\ddot\phi/\phi$, which is not derived anywhere (no relation between $a$ and $\phi$ is given), and writes $-\Lambda/(\sqrt\Lambda)^2$ although (8.23) gives $\ddot\phi/\phi=-\Lambda c^2$ and $H^2=-\Lambda c^2$; state the assumed relation $a\propto\phi$ or drop the equation. **Fixed:** Added the assumption a proportional to phi with H^2=-Lambda c^2 from (8.23); middle term now -(-Lambda c^2)/(-Lambda c^2)=-1.
- [[#N3595|N3595]] 08.04 The Reason Behind the Expansion of the Universe: Fix the printed expressions in the text instead of retaining them with callouts: the caption relations need $G$ ($F/m=-(4\pi G/3)\rho a$, $\ddot a/a=-4\pi G\rho/3$) and the static potential is $\phi=-4\pi G\rho/\Lambda$. **Fixed:** Text now gives F/m=-(4 pi G/3) rho a, a''/a=-4 pi G rho/3 and phi=-4 pi G rho/Lambda; removed the two retention callouts and updated the G table row.
- [[#N3596|N3596]] 08.05 The Cosmic Microwave Background Radiation: CMB energy density is $aT^4=7.566\times10^{-16}\times2.7255^4\approx4.2\times10^{-14}\,\mathrm{J/m^3}$, i.e. $4.6\times10^{-31}\,\mathrm{kg/m^3}$, not $5\times10^{-30}\,\mathrm{kg/m^3}$; it is comparable to the starlight value quoted in the first sentence, not larger. **Fixed:** Recomputed aT^4=4.17e-14 J/m^3 = 4.6e-31 kg/m^3; text now gives both values and says it is comparable to starlight.
- [[#N3596|N3596]] 08.05 The Cosmic Microwave Background Radiation: Write the dipole speed as $v=1.234\times10^{-3}c\approx370\,\mathrm{km/s}$ in the text itself instead of keeping "$370\,\mathrm{m/s}$" with a callout. **Fixed:** Text now gives v/c=1.234e-3 so v about 370 km/s; removed the callout.
- [[#N3596|N3596]] 08.05 The Cosmic Microwave Background Radiation: Fig. 8.6(b): CMB temperature anisotropies after dipole removal are not "below $50\,\mu\mathrm{K}$"; Planck maps span roughly $\pm300\,\mu\mathrm{K}$ with an rms near $100\,\mu\mathrm{K}$ ($\Delta T/T\sim10^{-5}$ on large scales); correct the band or label it as a typical large-scale amplitude. **Fixed:** Caption, plot label and table now call 50 uK a typical large-scale amplitude (not a bound) and note Planck maps span about +-300 uK with rms near 100 uK.
- [[#N3597|N3597]] 08.06 The Large Scale Distribution of Matter: "nearly isotropic and homogeneous on scales below ten per cent of the Universe's size" should be "on scales above about $100\,\mathrm{Mpc}$" (a few per cent of the Hubble radius); below that scale the distribution is filamentary, as 08.02.01 says. **Fixed:** Changed to scales above about 100 Mpc (a few per cent of the size), filamentary on smaller scales.
- [[#N3598|N3598]] 08.06.01 The Dark Matter: The 21 cm line comes from cold neutral atomic hydrogen, not "hot-gas radiation"; correct the sentence. **Fixed:** Sentence now attributes the 21 cm line to cold neutral atomic hydrogen.
- [[#N3598|N3598]] 08.06.01 The Dark Matter: "A galaxy typically has a central bulge containing most of its mass": in spirals the visible mass is often dominated by the disc, the total mass by the dark halo, and the example M33 is almost bulgeless; rephrase. **Fixed:** Rephrased: spiral has disc and bulge, visible mass concentrated towards centre, some galaxies such as M33 have almost no bulge.
- [[#N3600|N3600]] 08.06.03 The Dark Energy: Fix $p=\epsilon/(3c)$ to $p=\epsilon/3$ in the text, and write the dark-matter bound as $p_{\mathrm{dm}}<10^{-3}\rho_{\mathrm{dm}}c^2$, instead of retaining the printed forms with callouts. **Fixed:** Corrected both expressions in the text, removed both callouts and the interpretation sentence about the wrong units.
- [[#N3600|N3600]] 08.06.03 The Dark Energy: "The source gives the diagonal metric entries as $(-1,-1,-1,-1)$" is not a valid Lorentzian metric; the relevant signature is $(+1,-1,-1,-1)$ (or $(-1,1,1,1)$), and with $T_{\mu\nu}=\rho_\Lambda c^2\,\mathrm{diag}(1,-1,-1,-1)$ in the first convention one reads off $p=-\rho_\Lambda c^2$. **Fixed:** Replaced with signature (+1,-1,-1,-1) and T_munu=rho c^2 diag(1,-1,-1,-1) giving p=-rho c^2; added T_munu to the table.
- [[#N3601|N3601]] 08.06.04 The Dark Energy and the Quantum Vacuum: "Zero-point energy is quantum energy present even at zero kinetic energy" is wrong: the ground state of an oscillator has nonzero kinetic energy ($\langle T\rangle=\hbar\omega/4$); say "present even at zero temperature, in the lowest-energy state". Also write $p\approx-\rho c^2$ in the text instead of keeping the callout. **Fixed:** Changed to present at zero temperature in the lowest-energy state; equation of state now p approx -rho c^2; removed callout.
- [[#N3602|N3602]] 08.06.05 An Interpretation of the Critical Density: Write the energy balance as $\tfrac12m\dot r^2=\tfrac{4\pi}{3}Gm\rho r^2$ in the text instead of keeping the missing $m$ with a callout. **Fixed:** Text now reads m rdot^2/2=4 pi G m rho r^2/3; removed callout and the matching interpretation sentence.
- [[#N3602|N3602]] 08.06.05 An Interpretation of the Critical Density: The Newtonian estimate does not give exactly $\Phi_u=-c^2$: for a uniform sphere of critical density and radius $c/H_0$ the potential is $-\tfrac12c^2$ at the surface and $-\tfrac34c^2$ at the centre ($2\pi G\rho_cR^2$); state that $-c^2$ is an order-of-magnitude identification, or show the calculation that gives it exactly. **Fixed:** Verified; text now states these values and calls Phi_u=-c^2 an order-of-magnitude identification by the author.
- [[#N3603|N3603]] 08.07 The Interpretation of the Expansion of the Universe: Write $\delta\ll d$ (not $d\ll\delta$) and $\delta E=p\,\delta p/m=(1-a_e/a_r)p^2/m$ in the text instead of retaining the printed forms with callouts. **Fixed:** Corrected both in the text, removed both callouts and the interpretation clause about the printed inequality.
- [[#N3603|N3603]] 08.07 The Interpretation of the Expansion of the Universe: The dust-cloud collapse time is $t_{\mathrm{ff}}=\sqrt{3\pi/(32G\rho_0)}\approx0.54/\sqrt{G\rho_0}$ (Oppenheimer–Snyder), not $1/\sqrt{G\rho_0}$; call the latter an order-of-magnitude estimate or give the exact value. **Fixed:** T0 now called the order-of-magnitude time with the exact free-fall time 0.54 T0 added.
- [[#N3604|N3604]] 08.08 The Absolute Features of Our Universe: Item 3: neutrinos alone contribute at least about 0.1% of critical density ($\Omega_\nu\ge0.0013$ for the minimal mass sum $0.06\,\mathrm{eV}$, and up to about 0.5% allowed), so "Light and neutrinos contribute less than $0.1\%$" is wrong; photons contribute about 0.005%. **Fixed:** Item 3 now gives photons about 0.005% and neutrinos about 0.1% to 0.5%.
- [[#N3604|N3604]] 08.08 The Absolute Features of Our Universe: Item 4: write $q=-\ddot a/(aH_0^2)$ in the text instead of keeping the sign error with a callout; item 2: the Hubble law in frequency is $\delta\nu/\nu=-H d/c$ (or $z=Hd/c$). **Fixed:** Added the minus signs in items 2 and 4; removed the callout.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N3584 | [[08 References\|08 References]] | Analyzed | low | no | no | [[#N3584\|View]] |
| N3585 | [[08.00 Our Universe\|08.00 Our Universe]] | Analyzed | low | no | no | [[#N3585\|View]] |
| N3586 | [[08.01 Our Physical Universe Before 1930\|08.01 Our Physical Universe Before 1930]] | Analyzed | high | yes | no | [[#N3586\|View]] |
| N3587 | [[08.02 The Universe as Observed\|08.02 The Universe as Observed]] | Analyzed | low | no | no | [[#N3587\|View]] |
| N3588 | [[08.02.01 The Large Scale Distribution of Matter\|08.02.01 The Large Scale Distribution of Matter]] | Analyzed | low | yes | no | [[#N3588\|View]] |
| N3589 | [[08.02.02 The Expansion of the Universe\|08.02.02 The Expansion of the Universe]] | Analyzed | medium | no | yes | [[#N3589\|View]] |
| N3590 | [[08.02.03 The Velocity-Distance Relation from Observations\|08.02.03 The Velocity-Distance Relation from Observations]] | Analyzed | medium | yes | no | [[#N3590\|View]] |
| N3591 | [[08.03 Einstein's Cosmological Constant\|08.03 Einstein's Cosmological Constant]] | Analyzed | medium | yes | no | [[#N3591\|View]] |
| N3592 | [[08.03.01 The Cosmological Principle and the Expansion\|08.03.01 The Cosmological Principle and the Expansion]] | Analyzed | high | yes | yes | [[#N3592\|View]] |
| N3593 | [[08.03.02 The Concept of a Critical Density\|08.03.02 The Concept of a Critical Density]] | Analyzed | medium | no | no | [[#N3593\|View]] |
| N3594 | [[08.03.03 The Measurements of the Deceleration Parameter\|08.03.03 The Measurements of the Deceleration Parameter]] | Analyzed | medium | yes | no | [[#N3594\|View]] |
| N3595 | [[08.04 The Reason Behind the Expansion of the Universe\|08.04 The Reason Behind the Expansion of the Universe]] | Analyzed | high | no | no | [[#N3595\|View]] |
| N3596 | [[08.05 The Cosmic Microwave Background Radiation\|08.05 The Cosmic Microwave Background Radiation]] | Analyzed | medium | yes | no | [[#N3596\|View]] |
| N3597 | [[08.06 The Large Scale Distribution of Matter\|08.06 The Large Scale Distribution of Matter]] | Analyzed | low | no | no | [[#N3597\|View]] |
| N3598 | [[08.06.01 The Dark Matter\|08.06.01 The Dark Matter]] | Analyzed | medium | yes | no | [[#N3598\|View]] |
| N3599 | [[08.06.02 The Curvature of the Universe\|08.06.02 The Curvature of the Universe]] | Analyzed | low | yes | no | [[#N3599\|View]] |
| N3600 | [[08.06.03 The Dark Energy\|08.06.03 The Dark Energy]] | Analyzed | medium | yes | no | [[#N3600\|View]] |
| N3601 | [[08.06.04 The Dark Energy and the Quantum Vacuum\|08.06.04 The Dark Energy and the Quantum Vacuum]] | Analyzed | medium | no | no | [[#N3601\|View]] |
| N3602 | [[08.06.05 An Interpretation of the Critical Density\|08.06.05 An Interpretation of the Critical Density]] | Analyzed | medium | no | no | [[#N3602\|View]] |
| N3603 | [[08.07 The Interpretation of the Expansion of the Universe\|08.07 The Interpretation of the Expansion of the Universe]] | Analyzed | medium | no | yes | [[#N3603\|View]] |
| N3604 | [[08.08 The Absolute Features of Our Universe\|08.08 The Absolute Features of Our Universe]] | Analyzed | low | no | no | [[#N3604\|View]] |
| N3605 | [[08.09 Summary\|08.09 Summary]] | Analyzed | low | no | no | [[#N3605\|View]] |

## Suggestions

### N3584

Note: [[08 References|08 References]]  
Priority: low · Graph: no · Manim: no

Complete reference list, but three entries carry wrong years or volume numbers.

- [Correctness] Ref 12 (Sandage, ApJ 127, 513) is from 1958, not 1948 (08.02.03 itself says 1958); ref 9 (Eddington, MNRAS 90, 668) is from 1930, not 1931; ref 8 (Lemaître translation) is MNRAS 91, 483–490 (1931), not volume 90.

### N3585

Note: [[08.00 Our Universe|08.00 Our Universe]]  
Priority: low · Graph: no · Manim: no

Short chapter abstract; no change needed.

- [Links] Add a list of links to the chapter's sections (08.01–08.09) so the hub is navigable.

### N3586

Note: [[08.01 Our Physical Universe Before 1930|08.01 Our Physical Universe Before 1930]]  
Priority: high · Graph: yes · Manim: no

Engaging historical overview, but it contains several factual errors about telescopes, Einstein's modified Poisson equation and de Sitter's model, and keeps a field equation without its factor $1/2$.

- [Correctness] Telescopes: the 100-inch Hooker telescope (1917) and the 60-inch (1908) were on Mt. Wilson, not Mt. Palomar (the 200-inch came to Palomar in 1948); Herschel's largest reflector (1789) had a 48-inch aperture. The disclaimer "The source states" does not fix the error; correct the facts.
- [Correctness] "adding a constant potential to Poisson's equation" is wrong; Einstein added a term $-\lambda\phi$, $\nabla^2\phi-\lambda\phi=4\pi G\rho$, as 08.03 states, which then admits a constant-potential solution.
- [Correctness] "de Sitter soon showed that the Einstein Universe expands even without matter": de Sitter's 1917 solution is a different, empty model with $\Lambda$; it was originally presented in static coordinates and its expanding interpretation came later (Lemaître 1925, Robertson 1928). Also write (8.1) and the 1915 form with $\tfrac12g_{ik}R$ in the text instead of keeping the omission with a callout.
- [Correctness] "$\Lambda=\kappa\rho/2=1/R^2$" with $\kappa=8\pi G/c^4$ and mass density needs $\kappa\rho c^2/2$ for units of $\mathrm{m^{-2}}$.
- [Simplify] Update "present theoretical age 14 billion" to $13.8\times10^9$ yr (Planck 2018) and give the size ratio concretely (about $1\,\mathrm{Mpc}$ against a comoving horizon radius of about $14\,\mathrm{Gpc}$).
- [Graph] Plot $a(t)$ for the three Friedmann cases $k=+1,0,-1$ with matter only (parametric cycloid for $k=+1$, $t^{2/3}$ for $k=0$, open solution for $k=-1$), on common axes normalised to the same present $H_0$, to illustrate the finite and infinite Universes mentioned.

### N3587

Note: [[08.02 The Universe as Observed|08.02 The Universe as Observed]]  
Priority: low · Graph: no · Manim: no

Short and clear motivation, but the quoted fractional change over 5000 years is off by a factor of about three.

- [Correctness] Over $5000\,\mathrm{yr}$ the scale factor changes by $H_0\Delta t\approx5000/(1.4\times10^{10})\approx3.6\times10^{-7}$, about one part in three million, not one part in ten million.

### N3588

Note: [[08.02.01 The Large Scale Distribution of Matter|08.02.01 The Large Scale Distribution of Matter]]  
Priority: low · Graph: yes · Manim: no

Clear qualitative summary of the matter content, but the baryon density statement contradicts itself.

- [Correctness] "below $10^{-27}\,\mathrm{kg/m^3}$, about one hydrogen atom per cubic metre": one H atom per $\mathrm{m^3}$ is $1.7\times10^{-27}\,\mathrm{kg/m^3}$, above the quoted bound; the Planck baryon density $\Omega_b\rho_c\approx4.2\times10^{-28}\,\mathrm{kg/m^3}$ corresponds to about 0.25 H atoms per $\mathrm{m^3}$.
- [Example] Derive the numbers from $\rho_c=3H_0^2/(8\pi G)\approx8.5\times10^{-27}\,\mathrm{kg/m^3}$ ($H_0=67.4$) with $\Omega_b=0.049$, $\Omega_c=0.26$, giving $\rho_m\approx2.6\times10^{-27}\,\mathrm{kg/m^3}$, which supports the quoted "about $3\times10^{-27}$".
- [Graph] Add a simple bar or pie chart of the energy budget today (dark energy 69%, dark matter 26%, baryons 4.9%, neutrinos <0.3%, photons 0.005%), so the reader sees why photons and neutrinos are negligible.

### N3589

Note: [[08.02.02 The Expansion of the Universe|08.02.02 The Expansion of the Universe]]  
Priority: medium · Graph: no · Manim: yes

Good history of the discovery of expansion, but the Cepheid mechanism is stated backwards and Lemaître's redshift relation is given as an exact velocity relation.

- [Correctness] "the period was inversely related to the 'breathing' star's size": larger, more luminous Cepheids have longer periods (pulsation period $\propto(G\bar\rho)^{-1/2}$, lower mean density for larger stars), which is why period indicates luminosity. Also Leavitt's Cepheids were in the Small Magellanic Cloud, a fact that made them all lie at a common distance.
- [Correctness] Lemaître's result is $a_o/a_e=1+z$ with $z$ the redshift; $1+v/c$ holds only for $v\ll c$. Write $1+z$ and give the low-velocity Doppler limit separately, together with the fractional form $\delta\nu/\nu=-v/c$ in the text instead of the callout.
- [Simplify] "apparent luminosity $L=L_0/(4\pi d^2)$" is a flux (W/m²) and should not share the symbol and name of a luminosity (W); use $F$ for flux.
- [Manim] Animate a uniformly expanding grid of galaxies seen from two different galaxies, showing that each observer sees recession speed proportional to distance (Hubble's law with no centre).

### N3590

Note: [[08.02.03 The Velocity-Distance Relation from Observations|08.02.03 The Velocity-Distance Relation from Observations]]  
Priority: medium · Graph: yes · Manim: no

Clear historical account with useful reconstructed plots and a correct Hubble-time computation, but the Palomar location and the modern $H_0$ values are wrong or outdated.

- [Correctness] "a new 200-inch telescope, described in the source as at Mt. Wilson of the Palomar observatory": the 200-inch Hale telescope is on Mt. Palomar (Palomar Observatory); correct the text.
- [Correctness] Modern values are outdated: SH0ES gives $73.0\pm1.0\,\mathrm{km/(s\,Mpc)}$ and Planck 2018 $67.4\pm0.5\,\mathrm{km/(s\,Mpc)}$; the quoted $\pm4$ and $\pm3$ hide the 5σ "Hubble tension" that this paragraph should mention.
- [Simplify] "'standard flux' gravitational waves" should be "standard sirens", the established term; give the GW170817 value $H_0=70^{+12}_{-8}\,\mathrm{km/(s\,Mpc)}$.
- [Graph] Add a third panel: modern Hubble diagram schematic, $v=H_0d$ for $H_0=67.4$ and $73.0$ over $d=0$–$500\,\mathrm{Mpc}$, with Hubble's 1929 slope 530 for comparison, to show the factor of about 7 revision.

### N3591

Note: [[08.03 Einstein's Cosmological Constant|08.03 Einstein's Cosmological Constant]]  
Priority: medium · Graph: yes · Manim: no

Clear derivation of the static Einstein Universe from the modified Poisson equation; the formulas are right in Einstein's units but the SI factors and the stability argument are missing.

- [Correctness] Eq. (8.6) mixes $\kappa=8\pi G/c^4$ with mass density $\rho$; in SI it should read $\lambda=\kappa\rho c^2/2=4\pi G\rho/c^2=1/R^2$, which also lets the reader evaluate $R$ for a given density.
- [Example] Evaluate the Einstein radius for $\rho=3\times10^{-27}\,\mathrm{kg/m^3}$: $R=c/\sqrt{4\pi G\rho}\approx1.9\times10^{26}\,\mathrm{m}\approx6\,\mathrm{Gpc}$, showing that the static model needs a Universe of roughly observable size.
- [Intuition] Explain the instability Eddington found: with $\ddot a/a=-\tfrac{4\pi G}{3}\rho+\tfrac{\Lambda c^2}{3}$ and $\rho\propto a^{-3}$, a small increase of $a$ lowers $\rho$ and makes $\ddot a>0$, so the expansion runs away.
- [Graph] Plot the effective potential or the acceleration $\ddot a$ against $a/a_E$ for the Einstein static model ($a/a_E\in[0.5,2]$), showing the unstable equilibrium at $a=a_E$.

### N3592

Note: [[08.03.01 The Cosmological Principle and the Expansion|08.03.01 The Cosmological Principle and the Expansion]]  
Priority: high · Graph: yes · Manim: yes

The derivation (8.12)–(8.14) of the Friedmann equation is correct and nicely compact, but several printed equations are left wrong with callouts, the $\Lambda$ term disappears between (8.14) and (8.15), and the Milne-model statement is outdated.

- [Correctness] Eq. (8.8) prints $f^2(t)\,d\Sigma^2$; it must be $f^2(r)\,d\Sigma^2$ as the following sentence defines. Fix it in the text rather than with a callout, and use one metric signature for (8.7) and (8.2).
- [Correctness] Eq. (8.9): $\ddot V/V=3\ddot a/a+6(\dot a/a)^2$ for $V\propto a^3$, so the identification $\ddot V/V=3\ddot a/a$ is false as written; state that the Baez–Bunn relation applies to a small ball of test particles initially at rest relative to each other, for which the result is $3\ddot a/a$. Also write $E=\rho Vc^2$ consistently with (8.10).
- [Correctness] Eqs. (8.15)–(8.16) drop the $\Lambda c^2/3$ terms that (8.12) and (8.14) contain; add them, otherwise the later dark-energy discussion (8.03.03) has no equation to refer to.
- [Correctness] "this model is not entirely excluded by observations": the empty Milne model ($\Omega_k=1$) is excluded by CMB and BAO data, which give $|\Omega_k|\lesssim0.002$; update the statement.
- [Graph] Plot $H(t)$ or $a(t)$ for the Milne model ($a\propto t$), Einstein–de Sitter ($a\propto t^{2/3}$) and $\Lambda$CDM, all normalised to the same $H_0$, over $t=0$–$30\,\mathrm{Gyr}$, to show how the age $T_0=1/H_0$ of the Milne model compares with $\tfrac23H_0^{-1}$ and $0.95H_0^{-1}$.
- [Manim] Animate Fig. 8.3: a uniform grid of galaxies scaling by $a(t)$, with velocity arrows proportional to distance drawn from two different chosen galaxies, showing that $v=Hd$ holds from every point.

### N3593

Note: [[08.03.02 The Concept of a Critical Density|08.03.02 The Concept of a Critical Density]]  
Priority: medium · Graph: no · Manim: no

Short and clear in concept, but the critical-density formula is printed without its factor 3 although the quoted number already uses it.

- [Correctness] Replace $\rho_c=H^2/(8\pi G)$ by $\rho_c=3H^2/(8\pi G)$ in both places; the quoted $9\times10^{-27}\,\mathrm{kg/m^3}$ is the value of the correct formula ($H_0=70$ gives $9.2\times10^{-27}$; the printed formula would give $3\times10^{-27}$), so the callout's "numerical estimate retained" should go.
- [Correctness] "For $\rho>\rho_c$ the model ... eventually ... collapses" holds only for $\Lambda=0$; with the observed $\Lambda>0$ a closed model can expand forever. Add the condition in the text.
- [Example] Convert $\rho_c$ to particles: $9\times10^{-27}\,\mathrm{kg/m^3}\approx5$ hydrogen atoms per $\mathrm{m^3}$, a memorable scale.

### N3594

Note: [[08.03.03 The Measurements of the Deceleration Parameter|08.03.03 The Measurements of the Deceleration Parameter]]  
Priority: medium · Graph: yes · Manim: no

Useful overview of $q_0$ and its measurement; the numerical example is right, but the matter-only relations are printed wrong and patched only by a callout.

- [Correctness] Replace "$2\ddot a/a=8\pi G\rho/3=kc^2/a^2-H_0^2$" and "$q_0=1+kc^2/(H_0^2a^2)$" by the correct matter-only results $\ddot a/a=-4\pi G\rho/3$ and $q_0=\Omega_m/2=\tfrac12[1+kc^2/(H_0^2a^2)]$ in the text itself.
- [Correctness] "Adding matter at half the critical density can give $q=0$, mimicking a flat matter-free Universe" is unclear: $q_0=\Omega_m/2-\Omega_\Lambda=0$ needs $\Omega_\Lambda=\Omega_m/2$ (e.g. $\Omega_m=0.5$, $\Omega_\Lambda=0.25$, not flat), and the "flat matter-free" model with $q=0$ does not exist ($k=0$ with $\rho=0$ and $\Lambda=0$ is static Minkowski); rephrase as "mimicking the empty Milne model".
- [Simplify] Give the general formula $q_0=\tfrac12\sum_i\Omega_i(1+3w_i)$ once; the $70/30$ example ($q_0=-0.55$) and the $\Lambda$-only case ($q_0=-1$) then follow in one line each.
- [Graph] Plot $q(z)=\tfrac{\Omega_m(1+z)^3/2-\Omega_\Lambda}{\Omega_m(1+z)^3+\Omega_\Lambda}$ for $\Omega_m=0.31$, $\Omega_\Lambda=0.69$ over $z\in[0,3]$, marking the transition from deceleration to acceleration at $z\approx0.65$.

### N3595

Note: [[08.04 The Reason Behind the Expansion of the Universe|08.04 The Reason Behind the Expansion of the Universe]]  
Priority: high · Graph: no · Manim: no

The author's scalar-potential model of expansion is presented clearly, but the de Sitter limit has the wrong sign and factor, the scale factor is identified with the potential without justification, and printed formulas are left wrong with callouts.

- [Correctness] Eq. (8.23) with $\Lambda>0$ (the sign Einstein and de Sitter used, and the sign in (8.3) and (8.21)) gives oscillating $\phi$, not exponential growth; the exponent $\sqrt{-\Lambda c^2}$ is real only for $\Lambda<0$. De Sitter's result is $H=\sqrt{\Lambda c^2/3}$ with $\Lambda>0$, so "$H=\sqrt{-\Lambda c^2}$" has both the wrong sign and a missing factor 3.
- [Correctness] Eq. (8.24) uses $\ddot a/a=\ddot\phi/\phi$, which is not derived anywhere (no relation between $a$ and $\phi$ is given), and writes $-\Lambda/(\sqrt\Lambda)^2$ although (8.23) gives $\ddot\phi/\phi=-\Lambda c^2$ and $H^2=-\Lambda c^2$; state the assumed relation $a\propto\phi$ or drop the equation.
- [Correctness] Fix the printed expressions in the text instead of retaining them with callouts: the caption relations need $G$ ($F/m=-(4\pi G/3)\rho a$, $\ddot a/a=-4\pi G\rho/3$) and the static potential is $\phi=-4\pi G\rho/\Lambda$.
- [Intuition] Present the standard Newtonian explanation next to the author's view: for any comoving sphere of radius $r$, Birkhoff's theorem makes exterior matter irrelevant and gives $\ddot r=-GM(r)/r^2=-(4\pi G/3)\rho r$, which reproduces (8.16) for $p=0$; then state where the author disagrees, so readers can judge the claim "this is incorrect".

### N3596

Note: [[08.05 The Cosmic Microwave Background Radiation|08.05 The Cosmic Microwave Background Radiation]]  
Priority: medium · Graph: yes · Manim: no

Clear and short, with a useful dipole graph, but the CMB mass density is off by a factor of ten, the dipole speed is printed in the wrong unit, and the residual-fluctuation scale is understated.

- [Correctness] CMB energy density is $aT^4=7.566\times10^{-16}\times2.7255^4\approx4.2\times10^{-14}\,\mathrm{J/m^3}$, i.e. $4.6\times10^{-31}\,\mathrm{kg/m^3}$, not $5\times10^{-30}\,\mathrm{kg/m^3}$; it is comparable to the starlight value quoted in the first sentence, not larger.
- [Correctness] Write the dipole speed as $v=1.234\times10^{-3}c\approx370\,\mathrm{km/s}$ in the text itself instead of keeping "$370\,\mathrm{m/s}$" with a callout.
- [Correctness] Fig. 8.6(b): CMB temperature anisotropies after dipole removal are not "below $50\,\mu\mathrm{K}$"; Planck maps span roughly $\pm300\,\mu\mathrm{K}$ with an rms near $100\,\mu\mathrm{K}$ ($\Delta T/T\sim10^{-5}$ on large scales); correct the band or label it as a typical large-scale amplitude.
- [Example] Show the Wien computation $\lambda_{\max}=2.898\,\mathrm{mm\,K}/2.7255\,\mathrm{K}=1.06\,\mathrm{mm}$ (per-wavelength peak), and note that the per-frequency peak is at $160\,\mathrm{GHz}$ ($1.9\,\mathrm{mm}$), as the interpretation section hints.
- [Graph] Add a plot of the black-body spectrum $B_\nu(T)$ for $T=2.7255\,\mathrm{K}$ over $\nu=0$–$800\,\mathrm{GHz}$, marking the peak at $160\,\mathrm{GHz}$, to support the "black-body spectrum" statement.

### N3597

Note: [[08.06 The Large Scale Distribution of Matter|08.06 The Large Scale Distribution of Matter]]  
Priority: low · Graph: no · Manim: no

Short section with a good replacement figure, but the homogeneity scale is stated the wrong way round.

- [Correctness] "nearly isotropic and homogeneous on scales below ten per cent of the Universe's size" should be "on scales above about $100\,\mathrm{Mpc}$" (a few per cent of the Hubble radius); below that scale the distribution is filamentary, as 08.02.01 says.
- [Structure] This note shares its title with 08.02.01; rename one (e.g. "Gravitating Components of the Universe") to avoid ambiguous links.

### N3598

Note: [[08.06.01 The Dark Matter|08.06.01 The Dark Matter]]  
Priority: medium · Graph: yes · Manim: no

Good accessible account of rotation-curve and lensing evidence with a helpful M33 graph, but a few astrophysical statements are wrong.

- [Correctness] The 21 cm line comes from cold neutral atomic hydrogen, not "hot-gas radiation"; correct the sentence.
- [Correctness] "A galaxy typically has a central bulge containing most of its mass": in spirals the visible mass is often dominated by the disc, the total mass by the dark halo, and the example M33 is almost bulgeless; rephrase.
- [Simplify] "The gravitational potential ... increases through the matter-filled region, then falls as $GM/r$" should speak of the magnitude of the potential or, better, of enclosed mass: $v^2=GM(r)/r$ rises while $M(r)$ grows faster than $r$ and falls as $r^{-1/2}$ once $M$ is constant.
- [Example] Add the inference the interpretation section mentions: a flat curve $v=120\,\mathrm{km/s}$ out to $r=15\,\mathrm{kpc}$ requires $M(r)=v^2r/G\approx5\times10^{10}M_\odot$, several times the visible mass of M33.
- [Graph] Add a plot of $M(r)=v^2r/G$ for the flat curve versus the Keplerian enclosed visible mass (constant beyond the disc), $r=0$–$50$ thousand light years, matching the axes of Fig. 8.8.

### N3599

Note: [[08.06.02 The Curvature of the Universe|08.06.02 The Curvature of the Universe]]  
Priority: low · Graph: yes · Manim: no

Clear qualitative explanation of the standard-ruler curvature test; the flat-space $1/d$ picture should be qualified as the interpretation section says.

- [Simplify] Introduce the angular-diameter distance $d_A$ in one sentence ($\theta=l/d_A$, with $d_A=d_C/(1+z)$ for $k=0$) so that the cartoon $\theta=l/d$ is not read as exact at cosmological distances.
- [Graph] Plot $\theta(z)$ for a fixed ruler $l=150\,\mathrm{Mpc}$ (comoving sound horizon) in flat $\Lambda$CDM, an open model ($\Omega_k=0.3$) and a closed model ($\Omega_k=-0.3$), $z\in[0.1,1100]$ on a log axis, showing both the curvature effect and the turnover of $d_A$.

### N3600

Note: [[08.06.03 The Dark Energy|08.06.03 The Dark Energy]]  
Priority: medium · Graph: yes · Manim: no

Correct key physics ($w=-1$, constant density, exponential expansion, acceleration from $\rho+3p/c^2<0$), but printed formulas are kept wrong with callouts and one metric statement is garbled.

- [Correctness] Fix $p=\epsilon/(3c)$ to $p=\epsilon/3$ in the text, and write the dark-matter bound as $p_{\mathrm{dm}}<10^{-3}\rho_{\mathrm{dm}}c^2$, instead of retaining the printed forms with callouts.
- [Correctness] "The source gives the diagonal metric entries as $(-1,-1,-1,-1)$" is not a valid Lorentzian metric; the relevant signature is $(+1,-1,-1,-1)$ (or $(-1,1,1,1)$), and with $T_{\mu\nu}=\rho_\Lambda c^2\,\mathrm{diag}(1,-1,-1,-1)$ in the first convention one reads off $p=-\rho_\Lambda c^2$.
- [Simplify] Introduce the equation-of-state parameter $w=p/(\rho c^2)$ and the scaling $\rho\propto a^{-3(1+w)}$ from (8.11) once; matter ($w=0$), radiation ($w=1/3$) and dark energy ($w=-1$) then follow in one table.
- [Graph] Plot $\rho_i(a)/\rho_{c,0}$ for radiation ($\propto a^{-4}$), matter ($\propto a^{-3}$) and $\Lambda$ (constant) on log-log axes for $a\in[10^{-5},10]$, marking matter–radiation equality ($a\approx3\times10^{-4}$) and matter–$\Lambda$ equality ($a\approx0.77$).

### N3601

Note: [[08.06.04 The Dark Energy and the Quantum Vacuum|08.06.04 The Dark Energy and the Quantum Vacuum]]  
Priority: medium · Graph: no · Manim: no

Readable argument against vacuum energy as dark energy; one definition is wrong and the size of the discrepancy is never quantified.

- [Correctness] "Zero-point energy is quantum energy present even at zero kinetic energy" is wrong: the ground state of an oscillator has nonzero kinetic energy ($\langle T\rangle=\hbar\omega/4$); say "present even at zero temperature, in the lowest-energy state". Also write $p\approx-\rho c^2$ in the text instead of keeping the callout.
- [Example] Quantify "too large": a Planck-scale cutoff gives $\rho_{\mathrm{vac}}\sim10^{113}\,\mathrm{J/m^3}$ against the observed $\rho_\Lambda c^2\approx6\times10^{-10}\,\mathrm{J/m^3}$, the famous $\sim10^{120}$ mismatch (about $10^{55}$ even for an electroweak cutoff).
- [Example] Give the Casimir result $P=\pi^2\hbar c/(240d^4)$ and its size, $\approx1.3\times10^{-3}\,\mathrm{Pa}$ at $d=1\,\mu\mathrm{m}$, before discussing its interpretation.
- [Intuition] Mention that the equivalence of the vacuum-mode and atomic van der Waals (Lifshitz) calculations is standard (e.g. Jaffe 2005), so the "double counting" argument shows the two are alternative descriptions; the stronger conclusion that electromagnetic ZPE is absent should be marked as the author's position.

### N3602

Note: [[08.06.05 An Interpretation of the Critical Density|08.06.05 An Interpretation of the Critical Density]]  
Priority: medium · Graph: no · Manim: no

Clear Newtonian derivation of $\rho_c$, but a mass factor is dropped and the step to $\Phi_u=-c^2$ is asserted rather than computed.

- [Correctness] Write the energy balance as $\tfrac12m\dot r^2=\tfrac{4\pi}{3}Gm\rho r^2$ in the text instead of keeping the missing $m$ with a callout.
- [Correctness] The Newtonian estimate does not give exactly $\Phi_u=-c^2$: for a uniform sphere of critical density and radius $c/H_0$ the potential is $-\tfrac12c^2$ at the surface and $-\tfrac34c^2$ at the centre ($2\pi G\rho_cR^2$); state that $-c^2$ is an order-of-magnitude identification, or show the calculation that gives it exactly.
- [Intuition] Explain the shell argument with a short picture: a test galaxy at radius $r$ is like a stone thrown from a planet of mass $\tfrac43\pi r^3\rho$, and critical density corresponds to exactly the escape speed for every $r$.

### N3603

Note: [[08.07 The Interpretation of the Expansion of the Universe|08.07 The Interpretation of the Expansion of the Universe]]  
Priority: medium · Graph: no · Manim: yes

Thought-provoking discussion of "expanding space", with correct numbers for $c/H_0$ and the 0.7% stretch, but two printed inequalities and formulas are kept wrong and the collapse time is only an order of magnitude.

- [Correctness] Write $\delta\ll d$ (not $d\ll\delta$) and $\delta E=p\,\delta p/m=(1-a_e/a_r)p^2/m$ in the text instead of retaining the printed forms with callouts.
- [Correctness] The dust-cloud collapse time is $t_{\mathrm{ff}}=\sqrt{3\pi/(32G\rho_0)}\approx0.54/\sqrt{G\rho_0}$ (Oppenheimer–Snyder), not $1/\sqrt{G\rho_0}$; call the latter an order-of-magnitude estimate or give the exact value.
- [Intuition] "atoms ... do not expand, for reasons inadequately explained": add the standard explanation that bound systems are held at equilibrium sizes by their internal forces, with the cosmological correction of order $(Hr/v)^2$ or $\ddot a/a\cdot r$, negligible (e.g. $\sim10^{-30}$ of the Coulomb force in an atom).
- [Intuition] For the energy question, add that in GR there is no global energy conservation in a time-dependent spacetime without a timelike Killing vector; this is the standard answer to "Where did it go?", which the author may then dispute.
- [Manim] Animate the Milne-type explosion: particles with random velocities from a small region, showing the distance–velocity scatter tightening into $v=d/t$ as $t$ grows, viewed from two different particles.

### N3604

Note: [[08.08 The Absolute Features of Our Universe|08.08 The Absolute Features of Our Universe]]  
Priority: low · Graph: no · Manim: no

Useful list-style summary of cosmological facts, but the neutrino share is understated and two formulas carry sign issues.

- [Correctness] Item 3: neutrinos alone contribute at least about 0.1% of critical density ($\Omega_\nu\ge0.0013$ for the minimal mass sum $0.06\,\mathrm{eV}$, and up to about 0.5% allowed), so "Light and neutrinos contribute less than $0.1\%$" is wrong; photons contribute about 0.005%.
- [Correctness] Item 4: write $q=-\ddot a/(aH_0^2)$ in the text instead of keeping the sign error with a callout; item 2: the Hubble law in frequency is $\delta\nu/\nu=-H d/c$ (or $z=Hd/c$).
- [Structure] Update item 5 to the current values with the Hubble tension ($H_0=67.4\pm0.5$ from Planck, $73.0\pm1.0$ from SH0ES).

### N3605

Note: [[08.09 Summary|08.09 Summary]]  
Priority: low · Graph: no · Manim: no

Adequate chapter summary; no change needed beyond links.

- [Links] Add wiki links to the summarised notes (08.01, 08.03.01, 08.04, 08.06.05, 08.07) and to [[09.00 Time Dilation and the Twin-Paradox]] for "the next chapter".
