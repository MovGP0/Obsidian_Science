## Default EDF files

| EDF file name             | Description / Purpose                                                                                                                      |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `electrostatics.xml`      | Solves the **Electrostatic potential** $-∇·(ε∇φ) = ρ$. Used for electric fields and capacitance computations.                          |
| `heatequation.xml`        | Solves **heat conduction** (steady or transient). Handles isotropic/anisotropic conductivity, sources, convection/radiation boundaries.    |
| `helmholtz.xml`           | Generic **scalar Helmholtz** equation $(∇² + k²)u = f$; often used for acoustic or scalar wave problems.                               |
| `linearelasticity.xml`    | Linear **mechanical stress–strain** equations (Hooke’s law, small deformation). Supports isotropic and orthotropic materials.              |
| `meshdeform.xml`          | Solves Laplace-type equations to **deform mesh** smoothly (for moving boundaries, ALE or FSI problems).                                    |
| `navier-stokes.xml`       | Incompressible **fluid dynamics** equations for laminar or turbulent flow. May be steady or transient, with optional temperature coupling. |
| `resultoutput.xml`        | Utility solver for **writing result files** (VTK, ElmerPost, Paraview) or additional fields at chosen intervals.                           |
| `advection-diffusion.xml` | Generic **transport equation** $∂u/∂t + \mathbf{v}·∇u = ∇·(D∇u) + R$. Common for pollutant or scalar field transport.                  |

### Additional EDF files

| EDF file name             | Description / Purpose                                                                                                                              |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `advection-reaction.xml`  | Simplified version solving **advection–reaction** systems without diffusion terms.                                                                 |
| `coilsolver.xml`          | Computes **current density distributions** and inductance in conducting coils; used with magnetodynamic solvers.                                   |
| `divergencesolver.xml`    | Solver to **enforce or correct divergence-free** conditions (e.g., for magnetic vector potentials).                                                |
| `elasticplate.xml`        | Thin-plate **bending and vibration** solver (Kirchhoff–Love formulation). For planar plate structures.                                             |
| `fluxsolver.xml`          | Utility to compute **flux integrals** (e.g., heat flux, current flux) over selected boundaries or domains.                                         |
| `freesurface.xml`         | Tracks **free liquid surfaces** using kinematic boundary conditions in CFD or casting simulations.                                                 |
| `k-epsilon.xml`           | **Turbulence model** (standard k–ε) coupled with Navier–Stokes; solves for turbulent kinetic energy and dissipation.                               |
| `magnetodynamics.xml`     | Full 3-D **time-harmonic or transient magnetic field** solver using A–V formulation. Includes induced currents and eddy effects.                   |
| `magnetodynamics2d.xml`   | 2-D version of magnetodynamics solver (A–V formulation restricted to plane problems).                                                              |
| `model-pde.xml`           | General **user-defined PDE** solver; configurable for arbitrary scalar equations via SIF coefficients (diffusion, convection, source).             |
| `nonlinearelasticity.xml` | **Finite-strain elasticity** solver for large deformations and nonlinear material laws (hyperelastic, Neo-Hookean, etc.).                          |
| `poissonboltzmann.xml`    | Solves **Poisson–Boltzmann** equation for electrochemical or biomolecular potential in ionic media.                                                |
| `reynolds.xml`            | **Reynolds lubrication equation** solver; models thin-film hydrodynamics between surfaces.                                                         |
| `richards.xml`            | **Richards’ equation** for unsaturated flow in porous media (variably saturated groundwater or soil).                                              |
| `saveline.xml`            | Utility to **export field values along lines** or profiles (post-processing tool).                                                                 |
| `savematerials.xml`       | Exports **material property fields** (e.g., conductivity, density) to results.                                                                     |
| `savescalars.xml`         | Utility to output **integral or scalar quantities** (mean temperature, total current, etc.).                                                       |
| `shellsolver.xml`         | **Shell / plate** structural solver (membrane + bending, Mindlin–Reissner formulation). For thin 2-D surfaces.                                     |
| `sst-k-omega.xml`         | **SST k–ω turbulence model** (Shear Stress Transport), more accurate near walls than k–ε.                                                          |
| `statcurrent.xml`         | **Static current conduction** solver $-∇·(σ∇V)=0$; includes Joule heat output; used for DC electric conduction.                                |
| `vorticitysolver.xml`     | **Vorticity–velocity formulation** for fluid flow; alternative to standard pressure–velocity Navier–Stokes.                                        |
| `vectorhelmholtz.xml`     | **Vector (Maxwell) Helmholtz** solver for **electromagnetic waves** (time-harmonic Maxwell equations). Handles impedance and absorbing boundaries. |
