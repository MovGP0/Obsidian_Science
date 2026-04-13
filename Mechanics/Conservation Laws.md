## Overview

| Conservation Law | Symmetry type                | Noether Current                      | Conserved in flat-space QFT?      | What fails in generic GR?            | Exact or approximate?                         |
| ---------------- | ---------------------------- | ------------------------------------ | --------------------------------- | ------------------------------------ | --------------------------------------------- |
| Energy           | time translations            | $T^{\mu\nu}$ with timelike $\xi^\mu$ | ✅                                 | no global timelike Killing vector    | conditional                                   |
| Linear momentum  | spatial translations         | $T^{\mu\nu}$ with spatial $\xi^\mu$  | ✅                                 | no global spatial Killing vectors    | conditional                                   |
| Angular momentum | rotations / Lorentz          | $J^{\lambda\mu\nu}$                  | ✅                                 | no global rotational Killing vectors | conditional                                   |
| Electric charge  | $U(1)_{\rm em}$ gauge        | $j^\mu_{\rm em}$                     | ✅                                 | nothing essential                    | exact, as known                               |
| Color charge     | $SU(3)_c$ gauge              | Yang-Mills color current             | ✅                                 | nothing essential                    | exact, as known                               |
| Baryon number    | global $U(1)_B$ (accidental) | $j_B^\mu$                            | ✅ (classically)                   | GR not the main issue                | not exact                                     |
| Lepton number    | global $U(1)_L$ / flavors    | $j_L^\mu$                            | flavor: no once neutrinos mix     | GR not the main issue                | not exact                                     |
| Isospin          | approximate flavor $SU(2)$   | $J_a^\mu$                            | approximately                     | GR not the main issue                | approximate                                   |
| Parity           | discrete                     | no Noether current                   | weak interaction violates it      | GR not the issue                     | not exact                                     |
| CPT              | discrete                     | no Noether current                   | ✅ (under CPT theorem assumptions) | GR per se not the issue              | exact in standard local Lorentz-invariant QFT |
## Fundamental conservation laws

These are **not broken** in any known experiment.

| Conservation Law                                    | Quantity Conserved | Remarks                                                                                                            |
| --------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------ |
| Conservation of Electric Charge                     | Electric Charge    | Charges can't be created or destroyed, only separated or combined.                                                 |
| Conservation of Color Charge                        | Color Charge       | Relevant in quantum chromodynamics (QCD), the study of strong interactions among quarks and gluons.                |
| Conservation of CPT (Charge, Parity, Time reversal) | CPT                | Stems from quantum field theory.<br>Every known physical process is invariant under the combined operation of CPT. |
## Conditionally conserved quantities

These are conserved only if the corresponding symmetry exists.

| Conservation Law                    | Quantity Conserved | Violations                                                                                                                                                            | Remarks                                                                                                                          |
| ----------------------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [[Conservation of Energy]]          | Energy             | Requires spacetime to be time-translation invariant. Broken in<br>- expanding universe (FRW metric)<br>*Example:* photon redshift → energy decreases without transfer | Derived from time translational symmetry.<br>There are situations where it's useful to divide energy into potential and kinetic. |
| [[Conservation of Linear Momentum]] | Linear Momentum    | Requires spatial translation symmetry. Broken in<br>- curved spacetime<br>- systems with external potentials                                                          | Derived from spatial translational symmetry.<br>Holds in the absence of external forces.                                         |
| Conservation of Angular Momentum    | Angular Momentum   | Requires rotational symmetry. Broken in<br>- anisotropic background<br>- external torques / fields<br>                                                                | Derived from rotational symmetry.<br>Holds in the absence of external torques.                                                   |
## Approximate or emergently conserved quantities

These are **not fundamental symmetries**

| Conservation Law              | Quantity Conserved | Violations                                                                                                                       | Remarks                                                                                                                                                                                                                      |
| ----------------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Conservation of Baryon Number | Baryon Number      | - electroweak sphaleron processes<br>- many GUT models                                                                           | - Baryons (like protons and neutrons) have a baryon number of +1. Anti-baryons have -1.<br>- This number is conserved in known reactions.<br>- Not yet observed experimentally at low energy (proton decay still unobserved) |
| Conservation of Lepton Number | Lepton Number      | - Violated if neutrinos are Majorana particles (very likely)<br>- Neutrino oscillations already violate **flavor lepton number** | Leptons (like electrons, muons, and neutrinos) have a lepton number of +1. Anti-leptons have -1.<br>This number is conserved separately for each lepton flavor (electron, muon, tau) in the Standard Model.                  |
| Conservation of Isospin       | Isospin            | - quark mass differences<br>- electromagnetic interaction<br>                                                                    | Approximate symmetry of QCD<br>Used in the study of the strong interactions.<br>Less exact than some of the other conservation laws.                                                                                         |
## Explicitly violated conservation laws

| Conservation Law       | Quantity Conserved | Violations                             | Remarks                                                                                                                                                                                              |
| ---------------------- | ------------------ | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Conservation of Parity | Parity             | Parity is violated in weak interaction | Parity describes the transformation that inverts the spatial coordinates (reflection).<br>Conserved in electromagnetic, strong, and gravitational interactions but not in certain weak interactions. |
