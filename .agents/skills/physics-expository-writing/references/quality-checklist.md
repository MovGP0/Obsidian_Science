# Physics article review checklist

Score each editorial axis 0 = absent/incorrect, 1 = partial, 2 = satisfactory. This is a quality-review heuristic, not a validated measure of learning.

| Axis | Score 2 means… | Critical failure |
|---|---|---|
| Physical accuracy | Laws, approximations, causal interpretation, and regimes are correct | Confuses assumptions with observations or violates a law |
| Model selection | Clearly defines system and justifies governing principle | Plugs into equations without explaining applicability |
| Mathematical correctness | Derivations, conditions, units, signs, and limits check out | Units mismatch, missing factors, wrong reference frame |
| Prediction and evidence | Testable consequences and an honest evidence status | Invented measurement or equating simulation with empirical verification |
| Conceptual integration | Verbal, mathematical, visual representations reinforce each other | Equations and figures are not interpreted |
| Boundaries and transfer | Readers can identify when the model fails and use it elsewhere | Presents approximation as universal |
| Engagement and accessibility | Prediction prompts and problems match the target reader | More explanation but no opportunity for active thinking |

## Technical audit

- Define the system and state whether it exchanges matter, energy, momentum, or charge with its surroundings.
- Choose a reference frame, axes, positive direction, and sign conventions; label all vectors.
- List constitutive models, approximation orders, neglected interactions, and assumptions.
- Check every equation for dimensions and all transformations for correct units.
- Check limits at \(t=0\), equilibrium, high/low frequency, high/low temperature, zero interaction, or infinite-size limits when relevant.
- Check conservation statements against actual boundaries and external work or fluxes.
- For ODE/PDE solutions, state initial/boundary conditions and confirm they are satisfied.
- Differentiate **observed data** from **simulated or illustrative curves**. Report uncertainty only when supported by measurements or a stated error model.
- Assess whether the prose confuses correlation with causation, a mathematical consequence with a physical postulate, or an approximation with an exact law.
- Verify that a proposed test could in principle distinguish the model from its alternatives.

## Learner reconstruction audit

Can a reader answer without copying?
1. Which observation or question prompted the model?
2. Which physical law was used and why does it apply?
3. Which assumptions are doing the work?
4. What can the model predict, with which units and signs?
5. What is the first regime where the model breaks?
6. What experiment or comparison could falsify it?

## Typical repairs

- Starting with a wall of equations → add the phenomenon, system, and law selection.
- Calling a small-angle formula "the period" → show its approximation range and nonlinear correction or warning.
- Quoting a graph without axes/units → repair labels and explain what to compare.
- Claiming experiment agrees perfectly → report actual data/uncertainty or replace with hypothetical predictions.
- Too many disconnected applications → emphasize the reusable structural principle and its conditions.
- Making every section exhaustive → compress routine details for advanced audiences; preserve assumptions and checks.
