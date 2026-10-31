# Physics exposition: structures and reusable patterns

Use this file for writing an article or planning a chapter. The structure operationalizes physics education principles; no single chapter sequence has been established as universally optimal.

## A. Standard physics article/chapter architecture

1. **Question or observation:** present a real phenomenon, thought experiment, contradiction between models, or puzzle. State what cannot yet be explained.
2. **Prediction before formula:** ask what should happen qualitatively and which variables matter. Surface the novice's possible competing models.
3. **System and assumption ledger:** define system boundaries, interactions, frames, idealizations, constitutive relationships, and experimental conditions. Use an explicit "assumed / observed / derived" distinction when appropriate.
4. **Representations:** draw or describe geometry, forces, flows, energy transfers, fields, graphs, or state diagrams. Name symbols and connect each representation to physical features.
5. **Law and modeling choice:** identify the governing principle and justify its applicability (e.g., Newton's second law, Maxwell's equations, conservation, symmetry, variational principle, thermodynamic approximation).
6. **Mathematical development:** derive expressions in purposeful steps, with sign conventions, units, boundary/initial conditions, approximations, and important non-obvious decisions.
7. **Interpretive checkpoint:** translate each central term and final expression into qualitative behavior, characteristic scales, and measurable predictions.
8. **Tests and uncertainty:** compare with observed data if available; otherwise specify a feasible discriminating experiment or simulation. Distinguish measured results from hypothetical illustrations. Account for uncertainty where relevant.
9. **Failure and refinement:** specify the regime where assumptions fail; show what would be observed differently and what additional physics a refined model needs.
10. **Transfer and summary:** connect to an analogous system, provide a new problem, and summarize assumptions + main prediction + valid regime in a compact reference panel.

Do not force each step into a separate heading. For shorter articles, combine stages. For experimental tutorials, stages 3 and 8 expand; for mathematical physics, stages 5 and 6 expand.

## B. Choose the opening by subject

| Subject | A strong entry question | Useful representation | Essential validity check |
|---|---|---|---|
| Mechanics | What determines the motion? | Free-body diagram, phase portrait | Forces, dimensions, limiting cases |
| Electromagnetism | How are charges/fields/circuits related? | Field lines, flux surface, circuit topology | Sign/orientation, boundary conditions, conservation |
| Thermodynamics | Which macroscopic changes are possible? | Control volume, state diagram | Closed/open system, equilibrium, entropy, units |
| Waves/oscillations | Which patterns or modes propagate? | Time series, dispersion graph, phasor | Linearization and boundary conditions |
| Relativity | Which apparent contradiction requires a new invariant? | Spacetime diagram, observer frames | Invariants, coordinate independence, Newtonian limit |
| Quantum mechanics | What observation contradicts a classical model? | State/basis diagram, probability plot | State normalization, operators, approximations |
| Statistical physics | How does microscopic probability produce macroscopic behavior? | Distribution, sample space, ensemble | Ensemble assumptions, thermodynamic limit |

For advanced theoretical physics, sometimes **assumptions → mathematical consequences → experimental signature** is the right opening. Do not pretend all laws were deduced directly from the opening experiment.

## C. Assumption ledger: minimum fields

- **System:** objects and interactions included, surroundings, boundaries.
- **Reference frame and coordinates:** origin, axes, orientation, and whether the frame is inertial.
- **Empirical input:** laws or measured properties accepted as given.
- **Idealization:** what is omitted (friction, elasticity, radiation, quantum effects, finite size, etc.).
- **Mathematical approximation:** e.g., small angle, linear response, far-field, perturbation expansion, continuum limit, mean field.
- **Validity conditions:** parameter range, initial conditions, timescale, temperature regime, wavelength range, uncertainty.
- **Falsifiable output:** what observation could contradict the model.

Use a table when this many distinctions otherwise become hard to follow. Do not demand explicit uncertainty bars where no experimental data are given.

## D. Equation interpretation pattern

For each governing equation, explain:
- Source: law, definition, postulate, fit, constitutive relation, or theorem?
- Meaning of terms and their SI dimensions.
- Direction/sign/reference frame.
- Why each term is retained or neglected.
- What initial or boundary data are required for a solution.
- One limit, symmetry, or conserved quantity for a sanity check.
- What could be directly observed or measured.

## E. Exercise ladder

1. **Prediction prompt:** choose between qualitative outcomes before seeing algebra.
2. **Worked physical example:** justify selecting the law and model, not just insert numbers.
3. **Assumption perturbation:** include resistance, larger amplitude, finite size, or a changed boundary.
4. **Representation transfer:** translate a plot or verbal observation into an equation and back.
5. **Interleaved choice:** mix previously studied principles; require selecting one and explaining why others do not apply.

Give answers or hints for independent reading. Use increasingly sparse worked steps as readers gain proficiency.

## F. Distinguish diagrams from evidence

A diagram is a representation; it is not a measurement. A simulation is a calculation using a model; it is not independent empirical confirmation of that model. A thought experiment is a test of conceptual implications; it is not observational evidence. Label each honestly.
