# Mathematics article review checklist

Use to evaluate or revise a draft. Score each axis 0 = absent/incorrect, 1 = partial, 2 = satisfactory. A score is an editorial heuristic, not a validated educational metric.

| Axis | Score 2 means… | Critical failure |
|---|---|---|
| Mathematical correctness | Definitions, conditions, transformations, and conclusion are true and justified | Circular proof, false claim, undefined operation |
| Reader orientation | Question, prerequisites, notation, and scope are explicit | Reader cannot tell what result answers |
| Conceptual understanding | Meaning, proof architecture, and strategic choices are explained | Only symbols and transformations are presented |
| Examples and boundaries | A useful concrete case and limitation/counterexample are shown | Example is mistakenly offered as universal proof |
| Transfer and retention | Reader practices a reasoned application or self-explanation | Exercises only repeat identical calculation |
| Economy and accessibility | Notation and explanation match the audience without redundancy | Dense unmotivated notation or excessive scaffolding |

## Exact proof audit

- All variables and operators defined? All domains, quantifiers, and hypotheses explicit?
- Any limit/series/integral interchange requiring justification? Hidden differentiability, compactness, convergence, invertibility, nonzero denominator, or regularity requirements?
- All uses of equality versus approximation vs implication correct? Any accidental reversal of implication?
- Are matrix and operator multiplications ordered correctly? Are transposes, adjoints, norms, and inner products used consistently?
- Any degenerate or zero-dimensional case? What happens at boundaries and under a failed hypothesis?
- Is a claimed "if and only if" proved in both directions?
- Does the narrative overstate what a numerical illustration establishes?

## Reader reconstruction audit

Ask a hypothetical reader to answer, without looking at the proof:
1. What is the result about, in one sentence?
2. Why are the assumptions important?
3. What is the main proof idea?
4. Which step is hardest to invent and why?
5. Can I adapt this idea to a nearby problem?

If these questions would fail, supply orientation or a prompt, not necessarily more line-by-line algebra.

## Red flags and repairs

- "Obviously", "trivially", "after simplification" at a nontrivial step → show the missing reason.
- Long chains of equations without prose → insert strategic commentary and explanatory labels.
- New symbol used before definition → define at first occurrence.
- Only one special example → add a contrasting example or a warning about generalization.
- Dense proof on first encounter → add a 2–5 sentence roadmap.
- Simplified intuition stated as universal truth → qualify or remove it.
- Exercise immediately followed by full solution → preserve an opportunity for retrieval or reasoning.
