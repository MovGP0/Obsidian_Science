---
name: math-expository-writing
description: Write, revise, or assess rigorous but understandable expository mathematics articles, tutorials, lecture notes, and textbook chapters. Use for explaining definitions, theorems, proofs, derivations, and mathematical ideas to a specified audience, especially when intuition, proof strategy, examples, or conceptual connections are missing. Not for reporting new mathematical research in journal-paper format.
metadata:
  version: "1.0.0"
---

# Mathematical expository writing

## Goal

Produce **mathematically correct, independently reconstructible explanations**. Readers should understand not only whether each step is valid but also why the result is interesting, why the proof method was chosen, and how to use or adapt it. Optimize the learning path without weakening rigor.

## When to activate

Use when asked to create, improve, explain, audit, or outline an expository mathematics article, tutorial, proof explanation, or textbook chapter. For original research manuscripts, prioritize the user's target journal and research-reporting requirements instead; use this skill only for their exposition sections.

## Working procedure

1. **Set the reader contract.** Infer or obtain the topic, intended reader, assumed prerequisites, desired level of rigor, length, format, and purpose. If absent, make sensible assumptions and disclose them briefly rather than blocking. Adapt detail for novice vs expert readers.
2. **Identify the conceptual spine.** State the central question, one high-level idea, the result to establish, and prerequisites that actually enter the argument. Differentiate a motivating analogy from a logically valid argument.
3. **Design the proof map before prose.** For each main result list assumptions, key lemmas, proof strategy, the non-obvious moves, and how the argument closes. Check for circular reasoning and hidden hypotheses.
4. **Draft in two complementary layers.** An accessible path explains motivation, meaning of notation, examples, and the strategy; a formal path gives precise statements and justified mathematics. Keep the layers adjacent or clearly cross-referenced rather than separated into disconnected essays.
5. **Put the missing lecture information into text.** Explicitly explain why a substitution, lemma, coordinate system, factorization, comparison, or contradiction is useful. Annotate surprising steps, not routine arithmetic. Give a small example before abstraction when it genuinely helps.
6. **Pressure-test the result.** Include a test case, edge case, limiting case, or counterexample to a tempting overgeneralization. Explain the exact role of each important assumption. For proofs, write at least one self-explanation prompt or transfer question where appropriate.
7. **Audit rigor and teachability.** Verify every quantified claim, domain, dimension, logical implication, boundary condition, and equation. Assess whether a reader could summarize the proof in 3 sentences without copying it; tighten excess scaffolding for experts.
8. **Deliver the requested artifact.** Write the article itself unless the user asks only for an outline/critique. Keep publication references separate from the reasoning; cite factual research/history claims using checked sources, never invented bibliographic data.

## Default article pattern

Use the adaptable pattern in [structure-and-patterns](references/structure-and-patterns.md):

**Question → intuition/example → formal objects & assumptions → precise result → proof roadmap → proof → interpretation & counterexample → application/transfer → compact summary.**

For short or highly technical articles, combine stages instead of mechanically producing all headings. For advanced readers, lead with the theorem and provide optional intuition nearby. Do not introduce formal notation before defining it.

## Required quality rules

- **Proof is not the same as intuition:** identify intuitive illustrations as such; never use a diagram, numerical example, or physical analogy as proof of a universal claim.
- **No hand-waved algebra:** explain nontrivial equivalences, signs, side of multiplication, existence assumptions, and exceptional cases; explicitly say when an explanation is only a sketch.
- **State scope:** hypotheses, quantifiers, domains, regularity, conventions, and whether a proposition has a converse. Do not silently exchange necessary and sufficient conditions.
- **Make technique selection learnable:** explain why a particular proof technique is advantageous compared with at least one obvious alternative when that choice is non-obvious.
- **Make representations cohere:** if adding figures, tables, examples, or code, link each to the corresponding symbols and tell the reader what to notice. Do not insert decorative diagrams.
- **Use productive questions:** ask for reconstruction, local justification, or application; avoid questions answerable by copying the prior sentence.
- **Correctness outranks fluency:** if a statement cannot be proved or checked with available information, flag the gap or narrow the claim; do not fabricate proof steps or citations.
- **Follow the user's style, language, and output constraints**, including LaTeX and accessibility requirements.

## Supporting material (read on demand)

- [references/structure-and-patterns.md](references/structure-and-patterns.md): full outline variants, mathematical explanation techniques, and problem design. Read when planning an article/chapter.
- [references/examples.md](references/examples.md): two original before/after and worked article examples. Read when a concrete style model is helpful.
- [references/research.md](references/research.md): verified education research, implications, and limits. Read when explaining the rationale or citing evidence.
- [references/quality-checklist.md](references/quality-checklist.md): rigorous final review rubric and common failure modes. Read when revising or checking a draft.

## Completion standard

Before finishing, be able to answer: **What is the central idea? Why does the proof work? What do the assumptions prevent? Can the reader recognize and reuse the method?** If an answer is missing, revise the artifact.
