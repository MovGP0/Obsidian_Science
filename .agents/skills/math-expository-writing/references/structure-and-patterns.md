# Mathematics exposition: structures and reusable patterns

This file elaborates the procedure in `../SKILL.md`. It is a **design recommendation**, not an experimentally proved universal chapter order. Preserve rigor and adapt to the reader.

## A. Standard standalone mathematical article

1. **Title and promise:** state the mathematical question, not merely a topic label. An optional subtitle tells the reader the required level.
2. **Motivating problem:** a concrete puzzle, limitation of an existing approach, or attractive consequence. Distinguish evidence from proof.
3. **Preliminary intuition:** an example, geometric model, or analogy; explain exactly where it helps and where it ceases to apply.
4. **Prerequisites and notation:** list only necessary prerequisites; define all symbols before first use. State whether scalars are real/complex, spaces finite/infinite-dimensional, and objects continuous, differentiable, etc.
5. **Formal statement:** assumptions, quantifiers, conclusion, exact role of exceptions. Consider a small non-example just before or after the theorem.
6. **Proof roadmap:** 2–5 sentences describing modules, key invariant or idea, and why the technique is chosen. Explicitly distinguish the strategy from the subsequent details.
7. **Formal proof:** rigorous sequence of justified transformations; isolate lemmas. Where a step seems magical, say why that direction is useful. Mark use of assumptions and discuss inequalities or side of multiplication.
8. **Interpretation:** translate the theorem into a conceptual statement. Explain what the formula says, not only how it is computed.
9. **Checks and boundaries:** at least one small test case, limit or counterexample; call out any failed converse or overgeneralization.
10. **Transfer:** a new worked example, independent problem, or request to adapt the proof. Prefer a question where the student chooses a method rather than merely reproduces a calculation.
11. **Reference summary:** compact definitions, theorem, conditions, central proof trick, and closely linked results.

For short articles: merge 1–3, 4–5, 7–8, and 9–11. For expert notes: put step 5 first, and keep 2–3 as optional commentary.

## B. Three alternate article patterns

### Proof-led advanced exposition

Theorem → sharp hypotheses → intuition in one paragraph → strategy/lemma map → complete proof → counterexample if hypothesis removed → corollaries → references. Use for advanced readers already fluent in the underlying notation.

### Concept-led introductory exposition

Concrete problem → numerical/geometric example → explanation of the pattern → definition → theorem → guided proof → contrasting examples → practice → summary. Use when novice readers need help forming a semantic model of symbols.

### Derivation/tutorial exposition

Practical question → choose representation → define objects → derive key equation with reasons for substitutions → check a simple case → interpret → explain where the method transfers. Useful for applied linear algebra, calculus, optimization, numerical analysis.

## C. Explain the strategy, not just the steps

Include short, targeted comments answering:
- What are we trying to show *at this point*?
- Which assumption makes this move legal?
- Why did we introduce this object or lemma?
- Why use induction, contradiction, compactness, eigenvalues, a coordinate change, or a symmetry argument here?
- What apparently plausible alternative would be less effective, and why?

Good: "We multiply **on the left** by the inverse because it cancels the leading matrix without changing the order of the remaining factors."

Weak: "After some algebra, it follows."

Not every arithmetic step needs narration. Highlight the transformations that organize the reasoning.

## D. Worked example and practice designs

Use a sequence that goes beyond recognition:
1. **Fully worked example**: every strategic decision annotated.
2. **Near transfer**: same technique with different coefficients/objects.
3. **Boundary example**: one hypothesis deliberately absent; ask which conclusion breaks.
4. **Far transfer**: different setting sharing the same structural idea.
5. **Self-explanation prompt**: "Why can this line be deduced from the previous line?" or "Which assumption is used in line 4?"

Include brief solutions or solution sketches to self-check questions when the article is meant for independent study. Make the learner attempt the question before revealing a complete solution when the medium supports it.

## E. Avoid two false extremes

- **Definition-first overload:** precise symbols appear before the reader knows what problem they solve. Remedy with a small example and an explicit purpose.
- **Analogy replacing proof:** intuition is treated as mathematical justification. Remedy with a clear boundary between illustration, conjecture, and deductive proof.

## F. Figures and accessible output

Use figures for relationships (e.g., nested sets, coordinate transforms, geometric area arguments), not decoration. Define axes and direction; describe the mathematical takeaway in adjacent text. The material must remain understandable in a text-only version. For LaTeX, introduce symbols in prose and use aligned equations for important multistep derivations.
