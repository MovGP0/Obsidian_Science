---
title: "Note Improvement Tracker – 01 Mathematics/04 Single-Variable Calculus"
---

> [!TLDR]
> This note tracks the review of the 72 notes in `01 Mathematics/04 Single-Variable Calculus`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 13 possible errors or notation conflicts. 13 of them are verified (12 fixed, 1 partly); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N0215|N0215]] Differential calculus - Catalogue Guide: The link `\[\[Planned Topics#6. Differential calculus|the detailed catalogue\]\]` is broken: no `Planned Topics.md` exists in the vault (only a backup under the hidden `.temp/` folder, which Obsidian does not index); point it to an existing catalogue note or remove it. **Fixed:** Planned Topics.md exists only in a .temp backup; removed the sentence with the broken link (same approach as other batches); also removed BOM and converted CRLF to LF
- [[#N0229|N0229]] 08.08 Checks and approximations: Symbol clash: $M$ is the upper bound in $m\le f\le M$ and also names the midpoint sum $M_n$ in the same note; rename the bounds (e.g. $f_{\min}\le f\le f_{\max}$) or the midpoint sum. **Fixed:** Renamed the bounds m,M to f_min,f_max in the bound statement and inequality; also removed BOM and converted CRLF to LF
- [[#N0236|N0236]] Integral calculus - Catalogue Guide: In "Complete lesson index", `\[\[Planned Topics#8. Integral calculus|the detailed catalogue\]\]` is broken: no `Planned Topics.md` exists outside `.temp/` backups; retarget it to \[\[Mathematics Catalogue Source Guide\]\] (heading "Complete chapter index") or remove it. **Fixed:** Removed the sentence with the broken link; also removed BOM and converted CRLF to LF
- [[#N0238|N0238]] Integral of a Derivative: The first integrand $\int_{t=0}^{n}\frac{F(t)}{dt}\,dt$ lacks the differential in the numerator; it must be $\int_0^n\frac{dF}{dt}\,dt$ (or $\int_0^n\dot F(t)\,dt$). **Fixed:** Changed \frac{F(t)}{dt} to \frac{dF}{dt}
- [[#N0238|N0238]] Integral of a Derivative: The final equation $\int_0^n\dot f g\,dt=-\int_0^n f\dot g\,dt$ drops the boundary term; the correct statement is $\int_0^n\dot f g\,dt=\bigl[fg\bigr]_0^n-\int_0^n f\dot g\,dt$ (the pure sign swap holds only when $fg$ takes equal values at both endpoints). **Fixed:** _0^n to the right side and changed the text to say the sign changes and the boundary term is added
- [[#N0238|N0238]] Integral of a Derivative: The "expansion" $(F(1)-F(0))+\dots+(F(n)-F(n-1))$ is a unit-step telescoping sum, not an expansion of the integral; present it as $\sum F'(\xi_i)\Delta t=\sum[F(t_i)-F(t_{i-1})]$ (mean value theorem) with $\Delta t\to0$, replace "the forces cancel" by "the intermediate terms cancel", and close the missing parenthesis in $(F(n)-F(n-1))$. **Partly:** Replaced "expand" by a unit-step split where each step integral is the change of F; changed "forces" to "intermediate terms"; closed the parenthesis; did not add a mean-value-theorem derivation (unit-step split is exact by itself)
- [[#N0238|N0238]] Integral of a Derivative: In "Notation in Textbooks" the delimiters are swapped: use `\Bigl[ F(t) \Bigr]`, not "`\Bigr[` and `\Bigl]`"; also the product rule is a consequence, not the definition, of the derivative of $fg$. **Fixed:** Changed to \Bigl[ and \Bigr]; changed "is defined as" to "is given by the product rule"; also converted CRLF to LF
- [[#N0239|N0239]] Integration by parts and trigonometric substitutions: Under Fig. 4 the text says the substitution angle "is complementary to the angle labeled $\theta$ in the sketch", so $\theta$ names two different angles; relabel the sketch angle (e.g. $\varphi=\pi/2-\theta$) or replace the figure so it matches $x=a\sin\theta$. **Fixed:** Figure kept (sketch angle is from the x-axis, x=a cos); text now names the sketch angle varphi=pi/2-theta and says the sketch writes it as theta
- [[#N0241|N0241]] Partial fractions and improper integral problems: Under "Exponential substitution and partial fractions", the link to "#Example with a repeated linear factor" points to the $(x+2)/[x(x+1)^2]$ example, but the identity being expanded is $1=A(u-2)(u^2+1)+B(u+2)(u^2+1)+(Cu+D)(u+2)(u-2)$ from the $e^x$ example just above; move that heading before the $e^x$ example and drop or retarget the link. **Fixed:** Replaced the link with a reference to the e^x example above; note: the "Example with a repeated linear factor" section itself ends with an integral of a different example (x+5, x-5 terms), which needs a separate check
- [[#N0245|N0245]] Substitution and work integrals: The strip width is written `\mechanical{\Delta x}` in the Fig. 1 caption and the physical-quantities table, coloring the operator $\Delta$; per the macro rules write $\Delta\mechanical{x}$. **Fixed:** Changed both uses (Fig. 1 caption and table) to \Delta\mechanical{x}
- [[#N0253|N0253]] 09.07 Remainders and error: Worked answer 1: $(0.1)^5/5!=1/12000000\approx8.33\times10^{-8}$, not "about $8.34\times10^{-8}$". **Fixed:** Changed 8.34 to 8.33 (python: 8.3333e-08)
- [[#N0256|N0256]] Arithmetic series: "Common mistakes": "Negative terms can cancel positive terms, so its total need not lie between the first and last term" implies totals otherwise lie between the first and last term, which is false (e.g. $1+\cdots+5=15$); what holds is that the mean $(a+\ell)/2$ lies between them and the total is $n$ times that mean. **Fixed:** Replaced the sentence: the mean lies between the first and last term, the total is n times the mean so it need not; also converted CRLF to LF
- [[#N0273|N0273]] Taylor and Maclaurin series problems: The "Physical quantities" table lists cable weight per length ($\unit{lbf/ft}$), coal weight ($\unit{lbf}$), and water loss per lift ($\unit{kg/m}$). None of these appear in this note, which is pure mathematics; it seems to be copied from a work-integral note. Delete the table. **Fixed:** Confirmed no cable, coal, or water content in the note; deleted the three-row Physical quantities section

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N0205 | [[07.01 Limits\|01 Limits and Continuity/07.01 Limits]] | Analyzed | low | yes | yes | [[#N0205\|View]] |
| N0206 | [[07.02 Continuity\|01 Limits and Continuity/07.02 Continuity]] | Analyzed | low | yes | no | [[#N0206\|View]] |
| N0207 | [[Continuity and its consequences\|01 Limits and Continuity/Continuity and its consequences]] | Analyzed | low | yes | no | [[#N0207\|View]] |
| N0208 | [[One-sided infinite limits and growth\|01 Limits and Continuity/One-sided infinite limits and growth]] | Analyzed | low | yes | no | [[#N0208\|View]] |
| N0209 | [[07.03 The derivative\|02 Differential Calculus/07.03 The derivative]] | Analyzed | low | yes | yes | [[#N0209\|View]] |
| N0210 | [[07.04 Differentiation rules\|02 Differential Calculus/07.04 Differentiation rules]] | Analyzed | low | no | no | [[#N0210\|View]] |
| N0211 | [[07.05 Elementary derivatives\|02 Differential Calculus/07.05 Elementary derivatives]] | Analyzed | low | yes | no | [[#N0211\|View]] |
| N0212 | [[07.06 Higher derivatives\|02 Differential Calculus/07.06 Higher derivatives]] | Analyzed | medium | yes | no | [[#N0212\|View]] |
| N0213 | [[07.07 Implicit and inverse differentiation\|02 Differential Calculus/07.07 Implicit and inverse differentiation]] | Analyzed | low | yes | no | [[#N0213\|View]] |
| N0214 | [[07.08 Linear approximation\|02 Differential Calculus/07.08 Linear approximation]] | Analyzed | low | yes | no | [[#N0214\|View]] |
| N0215 | [[Differential calculus - Catalogue Guide\|02 Differential Calculus/Differential calculus - Catalogue Guide]] | Analyzed | low | no | no | [[#N0215\|View]] |
| N0216 | [[Differential calculus - Overview\|02 Differential Calculus/Differential calculus - Overview]] | Analyzed | low | no | no | [[#N0216\|View]] |
| N0217 | [[Elementary derivative methods\|02 Differential Calculus/Elementary derivative methods]] | Analyzed | low | no | no | [[#N0217\|View]] |
| N0218 | [[Extrema and inflection points\|02 Differential Calculus/Extrema and inflection points]] | Analyzed | low | yes | no | [[#N0218\|View]] |
| N0219 | [[Mean value theorems and monotonicity\|02 Differential Calculus/Mean value theorems and monotonicity]] | Analyzed | low | yes | yes | [[#N0219\|View]] |
| N0220 | [[Repeated differentiation\|02 Differential Calculus/Repeated differentiation]] | Analyzed | low | yes | no | [[#N0220\|View]] |
| N0221 | [[Tangents and the derivative\|02 Differential Calculus/Tangents and the derivative]] | Analyzed | low | no | no | [[#N0221\|View]] |
| N0222 | [[08.01 Definite integrals\|03 Integral Calculus/08.01 Definite integrals]] | Analyzed | low | yes | yes | [[#N0222\|View]] |
| N0223 | [[08.02 Antiderivatives\|03 Integral Calculus/08.02 Antiderivatives]] | Analyzed | low | yes | no | [[#N0223\|View]] |
| N0224 | [[08.03 The fundamental theorem\|03 Integral Calculus/08.03 The fundamental theorem]] | Analyzed | low | yes | yes | [[#N0224\|View]] |
| N0225 | [[08.04 Substitution\|03 Integral Calculus/08.04 Substitution]] | Analyzed | low | no | no | [[#N0225\|View]] |
| N0226 | [[08.05 Integration by parts\|03 Integral Calculus/08.05 Integration by parts]] | Analyzed | low | no | no | [[#N0226\|View]] |
| N0227 | [[08.06 Elementary methods\|03 Integral Calculus/08.06 Elementary methods]] | Analyzed | medium | no | no | [[#N0227\|View]] |
| N0228 | [[08.07 Improper integrals\|03 Integral Calculus/08.07 Improper integrals]] | Analyzed | low | yes | no | [[#N0228\|View]] |
| N0229 | [[08.08 Checks and approximations\|03 Integral Calculus/08.08 Checks and approximations]] | Analyzed | low | yes | no | [[#N0229\|View]] |
| N0230 | [[Antiderivatives and integration rules\|03 Integral Calculus/Antiderivatives and integration rules]] | Analyzed | low | yes | no | [[#N0230\|View]] |
| N0231 | [[Definite integrals and accumulation\|03 Integral Calculus/Definite integrals and accumulation]] | Analyzed | low | yes | yes | [[#N0231\|View]] |
| N0232 | [[Elliptic integrals\|03 Integral Calculus/Elliptic integrals]] | Analyzed | low | yes | no | [[#N0232\|View]] |
| N0233 | [[Exponential hyperbolic and nonelementary integrals\|03 Integral Calculus/Exponential hyperbolic and nonelementary integrals]] | Analyzed | low | yes | no | [[#N0233\|View]] |
| N0234 | [[Improper Stieltjes and Lebesgue integrals\|03 Integral Calculus/Improper Stieltjes and Lebesgue integrals]] | Analyzed | medium | yes | no | [[#N0234\|View]] |
| N0235 | [[Integral applications\|03 Integral Calculus/Integral applications]] | Analyzed | low | yes | yes | [[#N0235\|View]] |
| N0236 | [[Integral calculus - Catalogue Guide\|03 Integral Calculus/Integral calculus - Catalogue Guide]] | Analyzed | low | no | no | [[#N0236\|View]] |
| N0237 | [[Integral calculus - Overview\|03 Integral Calculus/Integral calculus - Overview]] | Analyzed | low | no | no | [[#N0237\|View]] |
| N0238 | [[Integral of a Derivative\|03 Integral Calculus/Integral of a Derivative]] | Analyzed | high | no | yes | [[#N0238\|View]] |
| N0239 | [[Integration by parts and trigonometric substitutions\|03 Integral Calculus/Integration by parts and trigonometric substitutions]] | Analyzed | medium | yes | no | [[#N0239\|View]] |
| N0240 | [[Parameter integrals and series\|03 Integral Calculus/Parameter integrals and series]] | Analyzed | low | yes | no | [[#N0240\|View]] |
| N0241 | [[Partial fractions and improper integral problems\|03 Integral Calculus/Partial fractions and improper integral problems]] | Analyzed | medium | yes | no | [[#N0241\|View]] |
| N0242 | [[Partial fractions\|03 Integral Calculus/Partial fractions]] | Analyzed | low | yes | no | [[#N0242\|View]] |
| N0243 | [[Radical substitutions and binomial integrals\|03 Integral Calculus/Radical substitutions and binomial integrals]] | Analyzed | low | no | no | [[#N0243\|View]] |
| N0244 | [[Rational integrands and partial fractions\|03 Integral Calculus/Rational integrands and partial fractions]] | Analyzed | low | no | no | [[#N0244\|View]] |
| N0245 | [[Substitution and work integrals\|03 Integral Calculus/Substitution and work integrals]] | Analyzed | medium | yes | no | [[#N0245\|View]] |
| N0246 | [[Trigonometric integration\|03 Integral Calculus/Trigonometric integration]] | Analyzed | low | yes | no | [[#N0246\|View]] |
| N0247 | [[09.01 Sequences\|04 Sequences, Series, and Taylor Expansions/09.01 Sequences]] | Analyzed | low | yes | no | [[#N0247\|View]] |
| N0248 | [[09.02 Infinite series\|04 Sequences, Series, and Taylor Expansions/09.02 Infinite series]] | Analyzed | low | no | no | [[#N0248\|View]] |
| N0249 | [[09.03 Convergence tests\|04 Sequences, Series, and Taylor Expansions/09.03 Convergence tests]] | Analyzed | low | yes | no | [[#N0249\|View]] |
| N0250 | [[09.04 Absolute and conditional convergence\|04 Sequences, Series, and Taylor Expansions/09.04 Absolute and conditional convergence]] | Analyzed | low | yes | yes | [[#N0250\|View]] |
| N0251 | [[09.05 Power series\|04 Sequences, Series, and Taylor Expansions/09.05 Power series]] | Analyzed | low | yes | yes | [[#N0251\|View]] |
| N0252 | [[09.06 Taylor and Maclaurin expansions\|04 Sequences, Series, and Taylor Expansions/09.06 Taylor and Maclaurin expansions]] | Analyzed | low | yes | yes | [[#N0252\|View]] |
| N0253 | [[09.07 Remainders and error\|04 Sequences, Series, and Taylor Expansions/09.07 Remainders and error]] | Analyzed | low | no | no | [[#N0253\|View]] |
| N0254 | [[09.08 Asymptotic notation\|04 Sequences, Series, and Taylor Expansions/09.08 Asymptotic notation]] | Analyzed | low | yes | no | [[#N0254\|View]] |
| N0255 | [[Absolute convergence and alternating sums\|04 Sequences, Series, and Taylor Expansions/Absolute convergence and alternating sums]] | Analyzed | low | yes | no | [[#N0255\|View]] |
| N0256 | [[Arithmetic series\|04 Sequences, Series, and Taylor Expansions/Arithmetic series]] | Analyzed | low | no | yes | [[#N0256\|View]] |
| N0257 | [[Asymptotic expansions\|04 Sequences, Series, and Taylor Expansions/Asymptotic expansions]] | Analyzed | low | yes | no | [[#N0257\|View]] |
| N0258 | [[Convergence tests in worked series problems\|04 Sequences, Series, and Taylor Expansions/Convergence tests in worked series problems]] | Analyzed | high | yes | no | [[#N0258\|View]] |
| N0259 | [[Finite limits and convergence tests\|04 Sequences, Series, and Taylor Expansions/Finite limits and convergence tests]] | Analyzed | medium | no | yes | [[#N0259\|View]] |
| N0260 | [[Finite sums and products\|04 Sequences, Series, and Taylor Expansions/Finite sums and products]] | Analyzed | low | no | no | [[#N0260\|View]] |
| N0261 | [[Finite sums and series\|04 Sequences, Series, and Taylor Expansions/Finite sums and series]] | Analyzed | low | no | no | [[#N0261\|View]] |
| N0262 | [[Geometric series\|04 Sequences, Series, and Taylor Expansions/Geometric series]] | Analyzed | low | no | yes | [[#N0262\|View]] |
| N0263 | [[Infinite series - Catalogue Guide\|04 Sequences, Series, and Taylor Expansions/Infinite series - Catalogue Guide]] | Analyzed | low | no | no | [[#N0263\|View]] |
| N0264 | [[Infinite sums and convergence\|04 Sequences, Series, and Taylor Expansions/Infinite sums and convergence]] | Analyzed | low | no | no | [[#N0264\|View]] |
| N0265 | [[Power series and Taylor approximations\|04 Sequences, Series, and Taylor Expansions/Power series and Taylor approximations]] | Analyzed | low | yes | no | [[#N0265\|View]] |
| N0266 | [[Power-series intervals and convergence practice\|04 Sequences, Series, and Taylor Expansions/Power-series intervals and convergence practice]] | Analyzed | medium | no | no | [[#N0266\|View]] |
| N0267 | [[Remainder bounds for infinite sums\|04 Sequences, Series, and Taylor Expansions/Remainder bounds for infinite sums]] | Analyzed | low | yes | no | [[#N0267\|View]] |
| N0268 | [[Sequences and series - Overview\|04 Sequences, Series, and Taylor Expansions/Sequences and series - Overview]] | Analyzed | low | no | no | [[#N0268\|View]] |
| N0269 | [[Sequences and their limits\|04 Sequences, Series, and Taylor Expansions/Sequences and their limits]] | Analyzed | low | yes | no | [[#N0269\|View]] |
| N0270 | [[Sequences, series tests, and power-series review\|04 Sequences, Series, and Taylor Expansions/Sequences, series tests, and power-series review]] | Analyzed | medium | yes | no | [[#N0270\|View]] |
| N0271 | [[Special finite series\|04 Sequences, Series, and Taylor Expansions/Special finite series]] | Analyzed | low | no | yes | [[#N0271\|View]] |
| N0272 | [[Special sums and Bernoulli and Euler numbers\|04 Sequences, Series, and Taylor Expansions/Special sums and Bernoulli and Euler numbers]] | Analyzed | low | yes | no | [[#N0272\|View]] |
| N0273 | [[Taylor and Maclaurin series problems\|04 Sequences, Series, and Taylor Expansions/Taylor and Maclaurin series problems]] | Analyzed | high | yes | yes | [[#N0273\|View]] |
| N0274 | [[Taylor polynomials with error control\|04 Sequences, Series, and Taylor Expansions/Taylor polynomials with error control]] | Analyzed | low | yes | no | [[#N0274\|View]] |
| N0275 | [[Tests for positive series\|04 Sequences, Series, and Taylor Expansions/Tests for positive series]] | Analyzed | low | yes | no | [[#N0275\|View]] |
| N0276 | [[Uniform convergence and operations on series\|04 Sequences, Series, and Taylor Expansions/Uniform convergence and operations on series]] | Analyzed | medium | yes | yes | [[#N0276\|View]] |

## Suggestions

### N0205

Note: [[07.01 Limits|07.01 Limits]]  
Priority: low · Graph: yes · Manim: yes

Correct, well-scoped introduction with a proved epsilon-delta example and worked answers; it lacks any picture of the epsilon band and delta window.

- [Graph] Under the epsilon-delta definition, add a 2D plot of $f(x)=3x+1$ on $[1,3]$ with the horizontal band $7\pm\varepsilon$ ($\varepsilon=0.6$) and the vertical strip $2\pm\delta$ ($\delta=0.2$) shaded, so the choice $\delta=\varepsilon/3$ is visible.
- [Graph] In "Left and right limits", plot $|x|/x$ on $[-2,2]$ with open circles at $(0,\pm1)$ next to $1/(x-3)$ on $[0,6]$ (y clipped to $[-10,10]$) from Practice 2 to contrast a jump with an infinite one-sided limit.
- [Manim] Animate $\varepsilon$ shrinking from 1 to 0.1 for $f(x)=3x+1$ at $a=2$ while the admissible window $\delta=\varepsilon/3$ narrows, showing that "for every $\varepsilon$" is a game against an arbitrary tolerance.
- [Example] Add one short non-example in the epsilon-delta section (e.g. $|x|/x$ at 0 with $\varepsilon=1/2$: no $\delta$ works for any candidate $L$) so the negation of the definition is seen once.
- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; normalise to UTF-8 without BOM and LF as required by AGENTS.md.

### N0206

Note: [[07.02 Continuity|07.02 Continuity]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; the removable/jump/oscillation distinction and the piecewise worked example are well explained but entirely verbal.

- [Graph] In "Continuous extension", add a 2D plot of $(x^2-1)/(x-1)$ on $[-1,3]$ drawn as $y=x+1$ with an open circle at $(1,2)$, beside $\sin(1/x)$ on $[-0.5,0.5]$ (high sample count) to show why no single value repairs the oscillation.
- [Graph] For the worked example "join two formulas", plot $F$ with $k=1$, $c=3$ and, dashed, a wrong choice such as $k=0.5$ to make the jump at $x=2$ visible.
- [Intuition] In "What continuity permits", add a one-line picture of the intermediate value theorem (a continuous graph going from below $y=v$ to above must cross it) before the formal statement, and mention bisection as its constructive use.
- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; normalise to UTF-8 without BOM and LF.

### N0207

Note: [[Continuity and its consequences|Continuity and its consequences]]  
Priority: low · Graph: yes · Manim: no

Correct and compact; the classification of discontinuities is good but substantially duplicates 07.02 Continuity and relies on words where a four-panel figure would be clearer.

- [Graph] In "Classify a failure", add a four-panel 2D figure: removable $(x^2-1)/(x-1)$ on $[-1,3]$, jump $\operatorname{sgn}x$ on $[-2,2]$, infinite $1/x^2$ on $[-2,2]$ (y clipped to $[0,20]$), oscillatory $\sin(1/x)$ on $[-0.5,0.5]$.
- [Graph] In the worked example, plot $p(x)=x^3+x-2$ on $[0,2]$ with the sign change marked at $p(0)=-2$, $p(2)=8$ and the root at $x=1$.
- [Structure] "Theorems that need an interval" and the worked example closely repeat 07.02 Continuity (same IVT/EVT statements and an almost identical cubic uniqueness proof); cross-link explicitly and let one note carry the full proof.
- [Simplify] The paragraph on a "removable singularity" at a point outside the domain is subtle; add one sentence stating that "discontinuous at $a$" requires $a\in D$, so $(x^2-1)/(x-1)$ is continuous on its whole domain.

### N0208

Note: [[One-sided infinite limits and growth|One-sided infinite limits and growth]]  
Priority: low · Graph: yes · Manim: no

Correct and precise, including the Landau-symbol section and the leading-term example; growth comparisons would benefit from a log-scale plot.

- [Graph] In "Landau symbols and order of growth", add a 2D plot on $x\in[1,30]$ with logarithmic y-axis of $\ln x$, $x^2$, $x^5$ and $e^x$, so the eventual dominance of $e^{x}$ over $x^5$ (crossing near $x\approx12.7$) is visible.
- [Graph] For the worked example, plot $r(x)=(2x^2+3)/(x^2-1)$ on $[-5,5]$ (y clipped to $[-15,15]$) with the asymptotes $y=2$ and $x=\pm1$ dashed.
- [Example] After the $\infty-\infty$ examples, add $\sqrt{x^2+x}-x\to1/2$ with the conjugate step, a typical case that cannot be read off from the separate terms.
- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; normalise to UTF-8 without BOM and LF.

### N0209

Note: [[07.03 The derivative|07.03 The derivative]]  
Priority: low · Graph: yes · Manim: yes

Clear, correct derivation of the derivative from secant slopes with a matching static figure and good failure cases.

- [Manim] Animate the secant of $y=x^2$ through $(1,1)$ and $(1+h,(1+h)^2)$ as $h$ runs from $0.8$ to $-0.8$ (skipping $h=0$), with a live readout of the slope $2+h$ converging to the tangent slope 2; this motion is what Fig. 07.1 freezes in two frames.
- [Graph] In "When the derivative fails", add a two-panel plot of $|x|$ and $\sqrt[3]{x}$ on $[-1,1]$, showing the corner and the vertical tangent at zero.
- [Intuition] In "The local approximation behind the definition", add a sentence that zooming into a differentiable graph makes it look straight, whereas $|x|$ keeps its corner at every zoom level.
- [Structure] The note substantially duplicates "Tangents and the derivative" (same $x^2$ example and tangent $y=2x-1$); cross-link and differentiate roles, e.g. keep the $o(h)$ remainder here and the differential there.
- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; normalise to UTF-8 without BOM and LF.

### N0210

Note: [[07.04 Differentiation rules|07.04 Differentiation rules]]  
Priority: low · Graph: no · Manim: no

Correct rules with derivations (including a chain-rule argument that handles $g'(x)=0$) and a worked quotient example whose algebra checks out.

- [Intuition] Before the product-rule derivation, add the rectangle picture: area $uv$ grows by $u\,\Delta v+v\,\Delta u+\Delta u\,\Delta v$, and the last term is second order, which explains the two terms.
- [Simplify] The chain-rule paragraph jumps from $k=O(h)$ to "the remainder is also $o(h)$"; spell out $o(k)/h=(o(k)/k)(k/h)$ when $k\ne0$ (and zero remainder when $k=0$), so the claim that no division by a possibly zero increment is needed becomes visible.
- [Example] Add a numeric check of the worked example, e.g. $F'(3)=100\cdot8/1=800$, against a symmetric difference quotient, to model the verification habit the note recommends.
- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; normalise to UTF-8 without BOM and LF.

### N0211

Note: [[07.05 Elementary derivatives|07.05 Elementary derivatives]]  
Priority: low · Graph: yes · Manim: no

Correct, domain-conscious derivations of power, exponential, logarithm and trigonometric derivatives; well structured.

- [Graph] Next to $(\sin x)'=\cos x$, plot $\sin x$ and $\cos x$ on $[-2\pi,2\pi]$ with tangent segments to sine at $x=0,\pi/2,\pi$ to show that the slope of sine equals the height of cosine.
- [Graph] In "Exponentials and logarithms", plot $(b^h-1)/h$ against $h\in[-1,1]$ for $b=2,e,3$; only $b=e$ tends to 1 as $h\to0$, illustrating the characterisation of $e$.
- [Intuition] The limit $\lim_{h\to0}\sin h/h=1$ is called "geometric" without justification; add a one-line pointer to the sector-area squeeze $\cos h\le\sin h/h\le1$ or a link to where it is proved.
- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; normalise to UTF-8 without BOM and LF.

### N0212

Note: [[07.06 Higher derivatives|07.06 Higher derivatives]]  
Priority: medium · Graph: yes · Manim: no

Correct and complete (monotonicity, convexity, first and second derivative tests, worked quartic), but dense for a first encounter and it overlaps strongly with "Extrema and inflection points".

- [Graph] For the worked example, add a stacked 2D plot of $f(x)=x^4-2x^2$, $f'(x)=4x^3-4x$ and $f''(x)=12x^2-4$ on $[-1.6,1.6]$ with vertical guides at $x=0,\pm1$ and $x=\pm1/\sqrt3$, so sign changes of $f'$ and $f''$ line up with extrema and inflections.
- [Simplify] The single paragraph on the first and second derivative tests packs four conditions; split it into two short subsections, each with one example ($x^4-2x^2$ at $\pm1$, and $x^4$ as the inconclusive case).
- [Intuition] Add a sentence that $f''$ measures how fast the tangent slope turns (position, velocity, acceleration), before the formal convexity definition.
- [Structure] The classification content duplicates "Extrema and inflection points" (same $x^4$, $-x^4$, $x^3$ trio and the $x^4-2x^2$ example); cross-link and avoid two parallel full treatments.
- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; normalise to UTF-8 without BOM and LF.

### N0213

Note: [[07.07 Implicit and inverse differentiation|07.07 Implicit and inverse differentiation]]  
Priority: low · Graph: yes · Manim: no

Correct implicit and inverse differentiation with checked circle and cubic examples; the vertical-tangent discussion is good but would benefit from a figure.

- [Graph] In "Worked example: a circular relation", plot the circle $x^2+y^2=25$ with the tangent $y-4=-\tfrac34(x-3)$ at $(3,4)$ and the vertical tangent $x=5$ at $(5,0)$ marked.
- [Graph] In "Derivative of an inverse", plot $f(x)=x^3+x$ and its inverse (the reflected curve $x=y^3+y$) on $[-2,2]$ with the line $y=x$, marking the paired points $(1,2)$ and $(2,1)$ with tangent slopes $4$ and $1/4$.
- [Example] Practice 1 could also ask for the tangent line, $y-2=-\tfrac25(x-1)$, completing the pattern of the circle example.
- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; normalise to UTF-8 without BOM and LF.

### N0214

Note: [[07.08 Linear approximation|07.08 Linear approximation]]  
Priority: low · Graph: yes · Manim: no

Correct and careful; all numbers ($2.02484567$, error $0.00015433$, bound $0.00015625$, radius $0.229$) recompute correctly and the figure supports the text.

- [Graph] Optionally complement Fig. 07.2 with a native plot of the error $L(x)-\sqrt x$ together with the bound $(1/64)(x-4)^2$ on $[4,4.5]$, showing how tightly the quadratic bound follows the actual error.
- [Example] Add a relative-error example to "Limitations" (e.g. the estimate $0.02$ for $\ln(1.02)\approx0.019803$ has relative error about $1\%$), since the section names relative error but never computes one.
- [Simplify] In the "useful interval" paragraph, state explicitly $M=1/(4\cdot3.5^{3/2})\approx0.0382$ before computing $\sqrt{2(0.001)/M}$, so the reader can follow the number.
- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; normalise to UTF-8 without BOM and LF.

### N0215

Note: [[Differential calculus - Catalogue Guide|Differential calculus - Catalogue Guide]]  
Priority: low · Graph: no · Manim: no

Clear learning-route hub with a correct worked example; one link points to a note that does not exist in the vault.

- [Correctness] The link `\[\[Planned Topics#6. Differential calculus|the detailed catalogue\]\]` is broken: no `Planned Topics.md` exists in the vault (only a backup under the hidden `.temp/` folder, which Obsidian does not index); point it to an existing catalogue note or remove it.
- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; normalise to UTF-8 without BOM and LF.

### N0216

Note: [[Differential calculus - Overview|Differential calculus - Overview]]  
Priority: low · Graph: no · Manim: no

Concise topic hub; all links resolve and the list matches the 07.xx notes.

- [Structure] No content change needed; normalise the file from UTF-8 with BOM and CRLF to UTF-8 without BOM and LF.

### N0217

Note: [[Elementary derivative methods|Elementary derivative methods]]  
Priority: low · Graph: no · Manim: no

Correct compact reference of derivative rules with a useful domain table and checked worked examples.

- [Simplify] In the derivative table, the row for $a^x$ gives "$a>0$" in the column "Region for the stated formula"; write "all real $x$ (base $a>0$)" so the column consistently describes inputs.
- [Example] Add a one-line derivation of the $\arcsin$ derivative from the inverse rule ($1/\cos(\arcsin x)=1/\sqrt{1-x^2}$), since the table lists inverse trigonometric derivatives without justification.
- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; normalise to UTF-8 without BOM and LF.

### N0218

Note: [[Extrema and inflection points|Extrema and inflection points]]  
Priority: low · Graph: yes · Manim: no

Correct and well organised; the candidate-list strategy, the implicit $y''$ formula and the circle and ellipse examples all check out.

- [Graph] For the worked example $f(x)=x^3-3x$ on $[-2,3]$, plot the function with the four candidates marked ($f(-2)=-2$, $f(-1)=2$, $f(1)=-2$, $f(3)=18$) and the inflection at $(0,0)$, highlighting that the local maximum is not global.
- [Simplify] "No sign change means this test gives no extremum" is too terse; say "if $f'$ has the same strict sign on both sides, there is no extremum".
- [Structure] The note overlaps strongly with 07.06 Higher derivatives (same test statements, same $x^4,-x^4,x^3$ trio); link it as the extended version.
- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; normalise to UTF-8 without BOM and LF.

### N0219

Note: [[Mean value theorems and monotonicity|Mean value theorems and monotonicity]]  
Priority: low · Graph: yes · Manim: yes

Correct statements and proofs of Fermat, Rolle, MVT and Cauchy MVT with checked examples; geometrically abstract without a picture.

- [Graph] In "The mean value theorem", plot $f(x)=x^2$ on $[1,3]$ with the secant through $(1,1),(3,9)$ (slope 4) and the parallel tangent at $c=2$.
- [Manim] Animate a line of slope $m=4$ sliding parallel to the secant of $f(x)=x^3$ on $[0,2]$ until it touches the curve at $c=2/\sqrt3$, then morph to $H(x)=f(x)-f(0)-mx$ to show the Rolle picture with equal endpoint values.
- [Intuition] Add the driving interpretation (an average speed of 80 km/h over a trip means the speedometer read 80 km/h at some moment) before the formal theorem.
- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; normalise to UTF-8 without BOM and LF.

### N0220

Note: [[Repeated differentiation|Repeated differentiation]]  
Priority: low · Graph: yes · Manim: no

Correct throughout (Leibniz example, parametric second derivative, inverse-function derivatives including $g'''$, and practice answers all verified); dense but well checked.

- [Graph] In "Curves given by a parameter", plot the curve $x=t^2$, $y=t^3$ for $t\in[-1.5,1.5]$, showing the cusp at $t=0$ where $x'(t)=0$ and the formula fails.
- [Simplify] In the parametric section, show the intermediate step $\frac{\mathrm d}{\mathrm dt}(y'/x')=(y''x'-y'x'')/(x')^2$ before dividing by $x'$, so the cube in the denominator is not a jump.
- [Structure] The topic overlaps with 07.06 Higher derivatives; add a link stating that this note is the extended version (parametric and inverse derivatives).
- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; normalise to UTF-8 without BOM and LF.

### N0221

Note: [[Tangents and the derivative|Tangents and the derivative]]  
Priority: low · Graph: no · Manim: no

Clear and correct; it parallels 07.03 The derivative almost section by section.

- [Example] The text cites secant slopes for $h=0.5$ and $h=0.1$, while Fig. C.ch06.1 uses $h=0.7$; also quote the figure's value (slope 2.7) so text and figure match.
- [Structure] Most content (definition, $x^2$ example, $|x|$ corner, differentiability implies continuity) repeats 07.03 The derivative; cross-link both ways and keep the differential and error emphasis distinct here.
- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; normalise to UTF-8 without BOM and LF.

### N0222

Note: [[08.01 Definite integrals|08.01 Definite integrals]]  
Priority: low · Graph: yes · Manim: yes

Correct definition of the Riemann integral with a verified exact sum and signed-area example; good, but the convergence of sums is only described.

- [Manim] Animate right-endpoint rectangles under $y=x^2$ on $[0,1]$ for $n=4,8,16,32$ with a live readout of $S_n=1/3+1/(2n)+1/(6n^2)$ approaching $1/3$.
- [Graph] Add a native 2D plot of $S_n$ against $n=1,\dots,30$ with the horizontal line $1/3$, to show the $1/(2n)$ decay quantitatively.
- [Intuition] In "From a partition to an integral", add a sentence that integrability means upper and lower rectangle totals squeeze together, and name the Dirichlet function as the standard bounded non-integrable example behind the closing sentence.
- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; normalise to UTF-8 without BOM and LF.

### N0223

Note: [[08.02 Antiderivatives|08.02 Antiderivatives]]  
Priority: low · Graph: yes · Manim: no

Clear and correct treatment of antiderivatives, the role of $C$, and disconnected domains.

- [Graph] In "Worked example: determine the constant", plot the family $2x^3-2x^2+3x+C$ for $C=-2,0,2,4$ on $[-1,2]$, highlighting the curve through $(1,5)$.
- [Graph] Under the $\ln|x|$ rule, plot an antiderivative with different constants $C_-=1$ and $C_+=-1$ on the two half-lines to make the independent constants visible.
- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; normalise to UTF-8 without BOM and LF.

### N0224

Note: [[08.03 The fundamental theorem|08.03 The fundamental theorem]]  
Priority: low · Graph: yes · Manim: yes

Correct proof sketch and evaluation rule with a verified variable-bounds example; the key idea (accumulated area grows at rate $f(x)$) would gain from motion.

- [Manim] Animate the shaded region under $f(t)$ from $a$ to a moving $x$, with a thin strip of width $h$ at the right edge whose area is about $f(x)h$, while a second panel traces $A(x)$; this shows $A'(x)=f(x)$ directly.
- [Graph] Plot $f(t)=\cos t$ and $A(x)=\int_0^x\cos t\,dt=\sin x$ on $[0,2\pi]$ together, marking that $A$ decreases exactly where $f<0$.
- [Simplify] In "Differentiate accumulation", name the hypothesis that makes the supremum tend to zero (continuity of $f$ at $x$) in the same sentence, instead of the general "because all these points approach $x$".
- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; normalise to UTF-8 without BOM and LF.

### N0225

Note: [[08.04 Substitution|08.04 Substitution]]  
Priority: low · Graph: no · Manim: no

Correct and careful with bounds, orientation and branches; examples check out.

- [Example] The claim that $g$ need not be one-to-one is stated but not shown; add a short example such as $\int_{-1}^{2}2x\cos(x^2)\,dx=\int_1^4\cos u\,du=\sin4-\sin1$, where $u=x^2$ folds back.
- [Simplify] In "Choosing a substitution", give the logarithmic-derivative pattern explicitly, $\int g'(x)/g(x)\,dx=\ln|g(x)|+C$, since Practice 1 uses it.
- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; normalise to UTF-8 without BOM and LF.

### N0226

Note: [[08.05 Integration by parts|08.05 Integration by parts]]  
Priority: low · Graph: no · Manim: no

Correct derivation and well-chosen examples, including the returning integral; clear as is.

- [Intuition] Add the area picture of $\int u\,dv+\int v\,du=[uv]$ (the rectangle $uv$ split by the parametric curve $(v(t),u(t))$) as a one-paragraph geometric explanation of the boundary term.
- [Simplify] In "Repeated integration", show the intermediate result of the second step, $-2(xe^x-e^x)$, before combining to $e^x(x^2-2x+2)$.
- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; normalise to UTF-8 without BOM and LF.

### N0227

Note: [[08.06 Elementary methods|08.06 Elementary methods]]  
Priority: medium · Graph: no · Manim: no

Correct patterns and partial-fraction examples (all coefficients verified), but the section order is awkward because "Divide before using partial fractions" comes after the closing checklist.

- [Structure] Move "Divide before using partial fractions" directly after "Worked example: partial fractions", and keep "A reliable sequence" as the closing checklist before Practice.
- [Simplify] In "Worked example: partial fractions", show the cover-up evaluation ($x=-1$ gives $A=2$, $x=-2$ gives $B=1$) alongside the coefficient comparison, since the later section uses that method without introducing it.
- [Example] The note mentions completing the square but does not do it; add $\int dx/(x^2+2x+5)=\tfrac12\arctan((x+1)/2)+C$ as a one-line example.

### N0228

Note: [[08.07 Improper integrals|08.07 Improper integrals]]  
Priority: low · Graph: yes · Manim: no

Correct definitions, power tests and principal-value warning; the $1/(e^x-1)$ example is right but compressed.

- [Graph] In "Worked example: two power tests", plot $x^{-1/2}$, $x^{-1}$ and $x^{-2}$ on $(0,4]$ (y clipped to $[0,6]$) with $x=1$ marked, to show which tails and which spikes have finite area.
- [Simplify] In "A singularity inside the interval", state the truncated values: $\int_{-1}^{-\epsilon}=\ln(e^{\epsilon}-1)-\ln(e-1)\to-\infty$ and $\int_{\epsilon}^{1}=\ln(1-e^{-1})-\ln(1-e^{-\epsilon})\to+\infty$; optionally give the principal value $-1$.
- [Simplify] In "Comparison and absolute convergence", "both are integrable on finite intervals in question" is garbled; rephrase as "both are integrable on every bounded subinterval".
- [Example] Add one conditionally convergent example, e.g. $\int_1^\infty \sin x/x\,dx$, to support the claim that oscillation can give convergence without absolute convergence.

### N0229

Note: [[08.08 Checks and approximations|08.08 Checks and approximations]]  
Priority: low · Graph: yes · Manim: no

Correct and practical; all estimates ($7/32$, $15/32$, $11/32$, $21/64$) and the attained error bounds ($1/96$, $1/192$) recompute correctly.

- [Correctness] Symbol clash: $M$ is the upper bound in $m\le f\le M$ and also names the midpoint sum $M_n$ in the same note; rename the bounds (e.g. $f_{\min}\le f\le f_{\max}$) or the midpoint sum.
- [Graph] Add a native plot of the absolute errors $|I-L_n|$, $|I-T_n|$, $|I-M_n|$ for $f(x)=x^2$ on $[0,1]$ against $n=1,\dots,64$ on log-log axes, showing slopes $-1$ and $-2$.
- [Intuition] In the convexity explanation, add that the midpoint and trapezoidal errors have opposite signs with ratio about $1:2$, which motivates Simpson's rule $(2M_n+T_n)/3$ (exact for $x^2$ here).
- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; normalise to UTF-8 without BOM and LF.

### N0230

Note: [[Antiderivatives and integration rules|Antiderivatives and integration rules]]  
Priority: low · Graph: yes · Manim: no

Clear, correct and well checked introduction to antiderivatives, substitution and parts; all examples and practice answers verify by differentiation.

- [Graph] In "Antiderivatives and elementary functions", plot the family $F(x)=x^3/3+C$ for $C\in\{-2,-1,0,1,2\}$ on $x\in[-2,2]$ with a vertical marker at $x=1$ showing all curves have the same slope $1$ there, to make "one constant on an interval" visual.
- [Intuition] In the $1/x$ remark, add a sentence or small plot with $\ln|x|+C_1$ for $x<0$ and $\ln|x|+C_2$ for $x>0$ with $C_1\ne C_2$, showing a legitimate antiderivative that is not "$\ln|x|+C$" with one $C$.
- [Example] In "Integration by parts", add a short example where the "wrong" choice ($u=e^x$, $v'=x$) visibly makes the remaining integral $\int x^2e^x/2\,dx$ harder, to back the sentence about changing the choice.

### N0231

Note: [[Definite integrals and accumulation|Definite integrals and accumulation]]  
Priority: low · Graph: yes · Manim: yes

Rigorous yet readable treatment of Riemann sums, properties and the FTC; definitions, the $\int_0^1x^2$ limit and both practice answers are correct.

- [Graph] In "A limit of elementary sums", plot $y=x^2$ on $[0,1]$ with the $n=5$ right-endpoint rectangles shaded and $S_5=0.44$ annotated against the exact $1/3$.
- [Manim] Animate the right-endpoint Riemann sum for $x^2$ on $[0,1]$ as $n$ goes $4\to8\to16\to64$, with a running readout of $S_n=(1+1/n)(2+1/n)/6$ converging to $1/3$.
- [Graph] In the paragraph on exchanging limits and integrals, plot $f_n(x)=n\,\mathbf 1_{(0,1/n)}(x)$ for $n=1,2,4,8$ on $[0,1]$ so the reader sees the area staying $1$ while the spike moves to $0$.
- [Intuition] In "Limits and the fundamental theorem", write the squeeze $\min_{[x,x+h]}f\le[A(x+h)-A(x)]/h\le\max_{[x,x+h]}f$ explicitly instead of only describing it.

### N0232

Note: [[Elliptic integrals|Elliptic integrals]]  
Priority: low · Graph: yes · Manim: no

Accurate and careful introduction to Legendre forms with a correct perimeter series (series 11.744, quadrature 11.7397 verified) and correct practice answers.

- [Graph] In "Legendre's three forms", plot $K(k)$ and $E(k)$ for $k\in[0,0.99]$ on one axis, marking $\pi/2$ at $k=0$, $E\to1$ and $K\to\infty$ as $k\to1^-$, to illustrate the limit statements.
- [Graph] In "Approximate an ellipse without a black box", plot $L/a=4E(\sqrt{1-(b/a)^2})$ against $b/a\in[0,1]$ together with the truncated series $2\pi(1-k^2/4-3k^4/64)$ to show where truncation fails as $b/a\to0$.
- [Simplify] In worked answer 1, the bounds $8<L<6\pi$ are valid but weak; the inscribed-rhombus bound $4\sqrt{a^2+b^2}\approx14.42<L<2\pi a$ (true $L\approx15.87$) is a far more convincing check.
- [Intuition] Before defining $F$, mention one physical motivation (exact pendulum period $T=4\sqrt{\ell/g}\,K(\sin(\theta_0/2))$) so the first kind is not motivated only algebraically.

### N0233

Note: [[Exponential hyperbolic and nonelementary integrals|Exponential hyperbolic and nonelementary integrals]]  
Priority: low · Graph: yes · Manim: no

Concise, correct coverage of exponential substitutions, hyperbolic integrals, parts for inverse functions, and special-function definitions.

- [Graph] In "Transcendental integrands without elementary primitives", plot $e^{-x^2}$ and $\operatorname{erf}x$ on $x\in[-3,3]$ on one axis so erf is seen as normalized accumulated area approaching $\pm1$.
- [Structure] "Derive the returning-integral calculation" repeats the $e^{ax}\cos bx$ case of the previous section; place it directly after the general formula as its worked derivation and note that $a=b=1$ reproduces $e^x(\cos x+\sin x)/2$.
- [Intuition] In "Hyperbolic functions", add that $(\cosh t,\sinh t)$ parametrizes the hyperbola $x^2-y^2=1$, which explains why $x=\sinh t$ removes $\sqrt{1+x^2}$ just as $x=\sin t$ removes $\sqrt{1-x^2}$.

### N0234

Note: [[Improper Stieltjes and Lebesgue integrals|Improper Stieltjes and Lebesgue integrals]]  
Priority: medium · Graph: yes · Manim: no

Correct and well organized, but the Lebesgue section is dense for the stated audience and lacks a picture of range-slicing versus domain-slicing.

- [Graph] In "Unbounded integrands", plot $x^{-1/2}$ and $x^{-2}$ on $(0,4]$ with $x=1$ marked, shading $[0,1]$ under the first and $[1,4]$ under the second, to visualize the reversed thresholds of the $p$-test.
- [Intuition] In "Lebesgue integration", contrast Riemann (vertical strips over the domain) with Lebesgue (horizontal levels, measuring $\{f>y\}$), e.g. via the layer-cake formula $\int f=\int_0^\infty\mu(\{f>y\})\,dy$ for $f\ge0$.
- [Example] Give a concrete example for the last claim: $\int_1^\infty(\sin x)/x\,dx$ converges as an improper integral but $\int_1^\infty|\sin x|/x\,dx=\infty$, so it is not a finite Lebesgue integral.
- [Graph] In "Stieltjes integration", plot the step integrator of practice 2 (jump $3$ at $x=1$ on $[0,2]$) next to $f(x)=1+x$ to show that only $f(1)$ is sampled.

### N0235

Note: [[Integral applications|Integral applications]]  
Priority: low · Graph: yes · Manim: yes

Correct and well structured small-piece approach with verified examples (area $1/6$, volume $8\pi/3$ by disks and shells, arc length, centroid, displacement, work).

- [Graph] In "Geometry: area, volume, and arc length", plot $y=x$ and $y=x^2$ on $[0,1]$ with the enclosed region shaded and one representative vertical strip of width $\Delta x$.
- [Manim] Animate the solid of revolution of $y=x$ on $[0,2]$: sweep a disk slice along the axis, then rebuild the same solid from cylindrical shells of radius $y$ and length $2-y$, ending with both formulas giving $8\pi/3$ (3D scene).
- [Graph] In "Mechanics and physics", plot $\mechanical{v}(\mechanical{t})=\mechanical{a}(\mechanical{t}-\mechanical{T})$ on $[0,2\mechanical{T}]$ with the negative and positive triangles shaded differently, labelled "displacement $=0$" and "distance $=\quantity{2}{m}$".
- [Simplify] The letter $a$ is both the lower limit in $\int_a^b$ and the acceleration $\mechanical{a}$; consider renaming the velocity slope (e.g. $\mechanical{a}_0$) or using $x_0,x_1$ as limits to spare beginners the double use.

### N0236

Note: [[Integral calculus - Catalogue Guide|Integral calculus - Catalogue Guide]]  
Priority: low · Graph: no · Manim: no

A clear learning-route hub with correct worked answers; one index link points to a note that no longer exists in the vault.

- [Correctness] In "Complete lesson index", `\[\[Planned Topics#8. Integral calculus|the detailed catalogue\]\]` is broken: no `Planned Topics.md` exists outside `.temp/` backups; retarget it to \[\[Mathematics Catalogue Source Guide\]\] (heading "Complete chapter index") or remove it.

### N0237

Note: [[Integral calculus - Overview|Integral calculus - Overview]]  
Priority: low · Graph: no · Manim: no

Short, accurate topic overview with valid links to the 08.xx foundation notes; no change needed.

- [Links] Optionally add a link to \[\[Integral calculus - Catalogue Guide\]\] so readers of the 08.xx route can find the deeper method notes in the same folder.

### N0238

Note: [[Integral of a Derivative|Integral of a Derivative]]  
Priority: high · Graph: no · Manim: yes

An informal fragment without frontmatter or TLDR that contains several mathematical errors and duplicates the FTC and integration-by-parts notes.

- [Correctness] The first integrand $\int_{t=0}^{n}\frac{F(t)}{dt}\,dt$ lacks the differential in the numerator; it must be $\int_0^n\frac{dF}{dt}\,dt$ (or $\int_0^n\dot F(t)\,dt$).
- [Correctness] The final equation $\int_0^n\dot f g\,dt=-\int_0^n f\dot g\,dt$ drops the boundary term; the correct statement is $\int_0^n\dot f g\,dt=\bigl[fg\bigr]_0^n-\int_0^n f\dot g\,dt$ (the pure sign swap holds only when $fg$ takes equal values at both endpoints).
- [Correctness] The "expansion" $(F(1)-F(0))+\dots+(F(n)-F(n-1))$ is a unit-step telescoping sum, not an expansion of the integral; present it as $\sum F'(\xi_i)\Delta t=\sum[F(t_i)-F(t_{i-1})]$ (mean value theorem) with $\Delta t\to0$, replace "the forces cancel" by "the intermediate terms cancel", and close the missing parenthesis in $(F(n)-F(n-1))$.
- [Correctness] In "Notation in Textbooks" the delimiters are swapped: use `\Bigl[ F(t) \Bigr]`, not "`\Bigr[` and `\Bigl]`"; also the product rule is a consequence, not the definition, of the derivative of $fg$.
- [Structure] Add a quoted frontmatter title and TLDR, replace the ad hoc `\color{brown}`/`\color{blue}` with uncolored math, and merge this note into \[\[08.03 The fundamental theorem\]\] and \[\[08.05 Integration by parts\]\] or at least link them.
- [Manim] Animate the telescoping idea: on a graph of $F$ over $[0,n]$, the rises $F(t_i)-F(t_{i-1})$ stack vertically into $F(n)-F(0)$ while $\Delta t$ shrinks.

### N0239

Note: [[Integration by parts and trigonometric substitutions|Integration by parts and trigonometric substitutions]]  
Priority: medium · Graph: yes · Manim: no

A long transcription of worked examples whose mathematics checks out throughout, but which is cluttered by transcription commentary, restarted numbering, and little guiding explanation.

- [Structure] Remove the meta-remarks about the source ("The handwritten final lines drop the reciprocal…", "The handwritten 'if odd' is read as…", "The transcription uses the angular limit $\pi/2$…", "The handwritten evaluation carries $1/3$…", "as in the following line of the handwritten derivation"); they do not help the reader.
- [Structure] Example numbering restarts several times (Example 1–3, then 1, 2, then "1. Repeated integration by parts", 2.); renumber consecutively or give each example a descriptive heading.
- [Simplify] In "Integrals of tangent and secant", "If both $m$ and $n$ are even and $n\ge2$, separate $\sec^2x$" is needlessly restrictive; the standard rule needs only $n$ even, for any $m$ (e.g. $\tan^3x\sec^4x$ works the same way).
- [Correctness] Under Fig. 4 the text says the substitution angle "is complementary to the angle labeled $\theta$ in the sketch", so $\theta$ names two different angles; relabel the sketch angle (e.g. $\varphi=\pi/2-\theta$) or replace the figure so it matches $x=a\sin\theta$.
- [Graph] For "Area of a circle by trigonometric substitution", a native plot of $y=\sqrt{1-x^2}$ on $[0,1]$ with the quarter-disk shaded and the point $(\sin\theta,\cos\theta)$ marked would replace the mismatched sketch.
- [Intuition] Add a short opening paragraph on how to choose $u$ in parts (derivative simplifies, $dv$ integrable) and why trigonometric substitutions use a right triangle to return to $x$.

### N0240

Note: [[Parameter integrals and series|Parameter integrals and series]]  
Priority: low · Graph: yes · Manim: no

Precise and correct treatment of differentiation and integration under the integral sign and of series integration; all numbers (0.74749, error bound 0.000758, 443/960) verify.

- [Graph] In "A function defined by integration", plot $I(a)=(e^a-1)/a$ for $a\in[-3,3]$ with the removable point $(0,1)$ marked, and optionally $I'(a)$ through $(0,1/2)$.
- [Graph] In "Series integration and special functions", plot $\int_0^xe^{-t^2}dt$ with its partial sums through $n=1,2,4$ on $x\in[0,2]$ to show good agreement near $0$ and slower convergence for larger $x$.
- [Example] Add a classic payoff of differentiating under the integral sign, e.g. $\int_0^1\frac{x^a-1}{\ln x}\,dx=\ln(1+a)$ for $a>-1$, so the reader sees why the hypotheses are worth checking.

### N0241

Note: [[Partial fractions and improper integral problems|Partial fractions and improper integral problems]]  
Priority: medium · Graph: yes · Manim: no

Correct worked transcriptions of long division, partial fractions and improper integrals, but the heading structure is broken in places and one cross-reference points to the wrong example.

- [Correctness] Under "Exponential substitution and partial fractions", the link to "#Example with a repeated linear factor" points to the $(x+2)/[x(x+1)^2]$ example, but the identity being expanded is $1=A(u-2)(u^2+1)+B(u+2)(u^2+1)+(Cu+D)(u+2)(u-2)$ from the $e^x$ example just above; move that heading before the $e^x$ example and drop or retarget the link.
- [Structure] "##### Improper integrals" is followed immediately by "##### Infinite upper limit" at the same level (likewise "Partial fraction decomposition" vs "Polynomial long division"); raise the parent headings so subsections nest.
- [Structure] Remove the transcription meta-remarks ("The handwritten box changes the sign…", "The transcription writes the denominator…", "The transcription includes the $C$ term…", "The transcription cancels the opposite $2Cu^2$…", "The transcription retains the negative sign…").
- [Simplify] In "Determining coefficients by matching powers", the chain $0=2A+1-A\Rightarrow A=2A+1\Rightarrow-A=1$ is valid but roundabout; write $0=A+1\Rightarrow A=-1$.
- [Graph] In "Infinite upper and lower limits", plot $x^2e^{-x^3}$ on $x\in[-1.5,3]$ to show the finite area for $x>0$ and the explosive growth for $x<0$ that causes divergence.

### N0242

Note: [[Partial fractions|Partial fractions]]  
Priority: low · Graph: yes · Manim: no

Clear and correct algebraic introduction to partial fractions with verified decompositions and practice answers.

- [Graph] In "Distinct linear factors", plot $(3x+5)/[(x+1)(x+2)]$ with $2/(x+1)$ and $1/(x+2)$ on $x\in[-4,2]$ to show that near each pole the matching simple fraction dominates.
- [Intuition] Name the cover-up shortcut explicitly: $A=\left.\frac{3x+5}{x+2}\right|_{x=-1}=2$, which is exactly the substitution step the note performs.
- [Structure] The note carries algebra catalogue id 1.1.7.3 but lives in the Integral Calculus folder and overlaps \[\[Rational integrands and partial fractions\]\]; consider moving it next to \[\[Rational expressions and polynomial division\]\] or adding a forward link to the integration note.

### N0243

Note: [[Radical substitutions and binomial integrals|Radical substitutions and binomial integrals]]  
Priority: low · Graph: no · Manim: no

Correct, branch-aware coverage of power, trigonometric, hyperbolic and Euler substitutions and Chebyshev's criterion; the Euler worked integral checks out.

- [Simplify] In the Euler-substitution example, show the intermediate integrand $\sqrt{x^2+1}\,\frac{dx}{dt}=-\frac{(1+t^2)^2}{4t^3}$ before expanding to $-\tfrac14(t^{-3}+2t^{-1}+t)$, the step readers are most likely to lose.
- [Example] In "Binomial integrands", add a worked case for the $p+q$ integer branch (e.g. $\int x^{-2}(1+x^2)^{-3/2}dx$ with $q=-1/2$, $p+q=-2$), since only the $q$-integer case is demonstrated.

### N0244

Note: [[Rational integrands and partial fractions|Rational integrands and partial fractions]]  
Priority: low · Graph: no · Manim: no

Compact and correct; the four factor cases, the $q'$-plus-constant split, the $J_m$ reduction formula and the worked examples all verify.

- [Example] In "Repeated quadratic factors", give the one-line derivation of the reduction (differentiate $u/(u^2+a^2)^{m-1}$ and write $u^2=(u^2+a^2)-a^2$), since the formula is currently stated without justification.
- [Intuition] In "A practical check", illustrate the pole warning with $\int_{-1}^{1}dx/x^2$, where naive endpoint subtraction of $-1/x$ gives $-2$ for a positive divergent integral.

### N0245

Note: [[Substitution and work integrals|Substitution and work integrals]]  
Priority: medium · Graph: yes · Manim: no

Correct worked transcriptions (650000 ft lbf, 3292.8 J, 277.78 N/m, 1.04 J all verify) but cluttered by transcription remarks and restarted numbering, with one misused macro.

- [Correctness] The strip width is written `\mechanical{\Delta x}` in the Fig. 1 caption and the physical-quantities table, coloring the operator $\Delta$; per the macro rules write $\Delta\mechanical{x}$.
- [Structure] Remove or recast the source-commentary sentences ("The handwritten evaluation substitutes the integrand at the endpoints and gives $12$…", "The handwritten calculation keeps the $x$ limits… and obtains $1/2$") as "common mistake" callouts instead of remarks about the notes.
- [Structure] Substitution examples are numbered 1, 2, 3, 1, 2, 3; renumber consecutively or give the second group its own heading.
- [Graph] For the coal example, plot $\mechanical{F}(\mechanical{y})=1800-2\mechanical{y}$ (lbf) on $\mechanical{y}\in[0,500]$ ft with the trapezoid shaded and labelled $650000$ ft lbf, mirroring Fig. 1 with real data.
- [Links] Link \[\[08.03 The fundamental theorem\]\] and \[\[08.04 Substitution\]\] from the FTC and substitution sections and \[\[Integral applications\]\] from the work section, so this worked-example note connects to the explanatory lessons.

### N0246

Note: [[Trigonometric integration|Trigonometric integration]]  
Priority: low · Graph: yes · Manim: no

Clear and correct guide to trigonometric integrals, including a well-explained half-angle chart-boundary pitfall; all results verify.

- [Graph] In "Check a definite integral across a parameter boundary", plot the local antiderivative $\frac2{\sqrt3}\arctan(\tan(x/2)/\sqrt3)$ on $[0,2\pi]$ showing its jump at $x=\pi$, together with the continuous version that adds $2\pi/\sqrt3$ for $x>\pi$.
- [Intuition] In "Products and tangent powers", add one line on why $\sec^2x$ is reserved for an even secant power (the rest converts to $\tan$ via $1+\tan^2x$) and $\sec x\tan x$ for an odd tangent power (the remaining even tangent power converts to $\sec$).

### N0247

Note: [[09.01 Sequences|09.01 Sequences]]  
Priority: low · Graph: yes · Manim: no

Clear, rigorous introduction to sequence limits with a correct recurrence example; all checked statements (including $a_n=2-2^{2-n}$) are right.

- [Intuition] In the paragraph after Fig. 9.1, state the plotted rule $a_n=1+1/n$ (it is only in the SVG legend) so the reader can verify that $n=10$ gives $a_{10}=1.1$ on the band boundary.
- [Graph] In the recurrence example, add a native cobweb plot of $y=(x+2)/2$ and $y=x$ on $0\le x\le2.2$ with the iterates $a_1=0,a_2=1,a_3=1.5,\ldots$, showing monotone approach to the fixed point $2$.
- [Example] In "Divergence and common errors", plot or tabulate $\sqrt n$ beside its shrinking gaps $1/(\sqrt{n+1}+\sqrt n)$ to make the "small gaps do not imply convergence" warning concrete.
- [Structure] File is committed with a UTF-8 BOM and CRLF line endings; resave as UTF-8 without BOM with LF per the vault rules.

### N0248

Note: [[09.02 Infinite series|09.02 Infinite series]]  
Priority: low · Graph: no · Manim: no

Concise and correct treatment of partial sums, the term test, geometric and telescoping series; the existing Fig. 9.2 already covers the key contrast.

- [Intuition] In "Geometric series", the letter $a$ (initial term) sits beside the general term $a_n$ of the first section; add one sentence saying that here $a_n=ar^n$, so the two uses are not confused.
- [Simplify] In the harmonic block argument, show the first two blocks explicitly ($\tfrac13+\tfrac14\ge\tfrac12$, $\tfrac15+\dots+\tfrac18\ge\tfrac12$) before the general $2^{k-1}$-term statement.
- [Structure] File is committed with a UTF-8 BOM and CRLF line endings; resave as UTF-8 without BOM with LF per the vault rules.

### N0249

Note: [[09.03 Convergence tests|09.03 Convergence tests]]  
Priority: low · Graph: yes · Manim: no

Correct and compact survey of comparison, limit comparison, ratio and integral tests; the integral-test rectangle bounds are stated but not pictured.

- [Graph] In "The integral test", add a native 2D plot of $f(x)=1/x^2$ on $1\le x\le8$ with left-endpoint and right-endpoint unit rectangles, so the two inequalities $\int_1^{N+1}f\le\sum_{n=1}^N f(n)\le f(1)+\int_1^N f$ can be read off the picture.
- [Simplify] In "The ratio test", show the geometric tail bound explicitly: $|a_{N+k}|\le q^k|a_N|$, hence $\sum_{k\ge0}|a_{N+k}|\le|a_N|/(1-q)$.
- [Example] Add a short root-test example (e.g. $\sum(n/(2n+1))^n$) or a link to where the root test is treated, since other notes in the folder use it.
- [Structure] File is committed with a UTF-8 BOM and CRLF line endings; resave as UTF-8 without BOM with LF per the vault rules.

### N0250

Note: [[09.04 Absolute and conditional convergence|09.04 Absolute and conditional convergence]]  
Priority: low · Graph: yes · Manim: yes

Rigorous and well-motivated; the rearrangement calculation $T_{3m}=S_{4m}+\tfrac12S_{2m}$ checks out, but the alternating enclosure and the Riemann rearrangement would benefit from visuals.

- [Graph] In "Alternating series", add a native plot of the partial sums $S_N$ of $\sum(-1)^{n+1}/n$ for $N=1..30$ with a horizontal line at $\log2$, showing odd sums above and even sums below.
- [Manim] In "Why the order can matter", animate the greedy rearrangement toward a target such as $T=1.5$: positive terms push the running sum above $T$, negative terms pull it below, with overshoots visibly shrinking.
- [Simplify] In "Alternating series", say explicitly why $S_{2m}\le S_{2k+1}$ for all $m,k$ (nested intervals), rather than only "every later odd partial sum".
- [Structure] File is committed with a UTF-8 BOM and CRLF line endings; resave as UTF-8 without BOM with LF per the vault rules.

### N0251

Note: [[09.05 Power series|09.05 Power series]]  
Priority: low · Graph: yes · Manim: yes

Correct and clear account of radius, endpoint checks and term-by-term operations; the endpoint example and practice answers all verify.

- [Graph] Add a native plot of partial sums $\sum_{n=1}^{N}x^n/n$ for $N=2,5,10,20$ against $-\log(1-x)$ on $-1\le x\le0.95$, showing good agreement inside the radius and the blow-up toward $x=1$.
- [Manim] Animate partial sums of $1/(1-x)=\sum x^n$ adding one term at a time on $-1.5\le x\le1.5$, so the reader sees convergence on $|x|<1$ and divergence outside.
- [Simplify] In "Centre and radius", add the $L=0\Rightarrow R=\infty$ and $L=\infty\Rightarrow R=0$ cases of the ratio formula, since later notes use them.
- [Structure] File is committed with a UTF-8 BOM and CRLF line endings; resave as UTF-8 without BOM with LF per the vault rules.

### N0252

Note: [[09.06 Taylor and Maclaurin expansions|09.06 Taylor and Maclaurin expansions]]  
Priority: low · Graph: yes · Manim: yes

Accurate derivation of Taylor coefficients and standard expansions; the $\log x$ worked example and both practice answers verify numerically.

- [Graph] Add a native plot of $\sin x$ with Maclaurin polynomials $P_1,P_3,P_5,P_7$ on $-2\pi\le x\le2\pi$, $-2\le y\le2$, to show local agreement growing with degree.
- [Manim] Animate successive Taylor polynomials of $\log(1+x)$ appearing on $-1<x\le2$, making visible that they converge only up to $x=1$ although $\log(1+x)$ exists beyond.
- [Simplify] In "Match derivatives at a point", show one explicit instance, e.g. $\frac{d^3}{dx^3}(x-a)^3=3!$, before the general $P_m^{(k)}(a)=k!c_k$ claim.
- [Structure] File is committed with a UTF-8 BOM and CRLF line endings; resave as UTF-8 without BOM with LF per the vault rules.

### N0253

Note: [[09.07 Remainders and error|09.07 Remainders and error]]  
Priority: low · Graph: no · Manim: no

Clear and rigorous remainder note with correct worked numbers ($P_4(0.2)=1.2214$, $1/46080$, $1/(2^7 7!)$), one small rounding slip and a misplaced source line.

- [Correctness] Worked answer 1: $(0.1)^5/5!=1/12000000\approx8.33\times10^{-8}$, not "about $8.34\times10^{-8}$".
- [Structure] The line "Source material from Kyle Kabasares’s UC Merced notes. \[\[Taylor and Maclaurin series problems#Taylor and Maclaurin series|Math 22\]\]" sits between the $\sin(1/2)$ section and Practice; move it to the end or into a "Source" section.
- [Simplify] In "Taylor remainder bounds", add one line deriving the integral form for $m=1$ by integrating by parts once, so the "repeated integration" claim is concrete.
- [Intuition] In the $\sin(1/2)$ section, state the general lesson: when the next coefficient vanishes ($P_{2k+1}=P_{2k+2}$ for sine), use the higher order to get a sharper Lagrange bound for free.

### N0254

Note: [[09.08 Asymptotic notation|09.08 Asymptotic notation]]  
Priority: low · Graph: yes · Manim: no

Precise and well-explained introduction to $O$, $o$ and $\sim$, with a correct division example and a careful proof for the flat function $e^{-1/x^2}$.

- [Graph] In "Smooth does not mean equal to a Taylor series", add a native plot of $e^{-1/x^2}$ on $-3\le x\le3$, with a second plot on $-0.5\le x\le0.5$ ($y$ up to $0.02$) to show its extreme flatness at $0$.
- [Graph] In "Worked example: division of expansions", plot the error $|e^h/(1+h)-1-h^2/2|$ against $|h|^3$ on $-0.5\le h\le0.5$ to visualise the $O(h^3)$ claim.
- [Structure] File is committed with a UTF-8 BOM and CRLF line endings; resave as UTF-8 without BOM with LF per the vault rules.

### N0255

Note: [[Absolute convergence and alternating sums|Absolute convergence and alternating sums]]  
Priority: low · Graph: yes · Manim: no

Correct and well-structured; the rearrangement to $3A/2$ and both worked answers verify, but it largely duplicates 09.04 without cross-linking it.

- [Links] Link to \[\[09.04 Absolute and conditional convergence\]\], which proves the same rearrangement and alternating results, and state which note is primary to avoid parallel drift.
- [Graph] Add a native plot of the partial sums of $1-\tfrac12+\tfrac13-\cdots$ and of the rearranged series $1+\tfrac13-\tfrac12+\tfrac15+\tfrac17-\tfrac14+\cdots$ for up to 60 terms, with horizontal lines at $\log2$ and $\tfrac32\log2$.
- [Simplify] In "Properties of absolutely convergent series", show the first three coefficients of the geometric Cauchy product ($1$, $2r$, $3r^2$) before stating $(n+1)r^n$.
- [Structure] File is committed with a UTF-8 BOM and CRLF line endings; resave as UTF-8 without BOM with LF per the vault rules.

### N0256

Note: [[Arithmetic series|Arithmetic series]]  
Priority: low · Graph: no · Manim: yes

Clear, school-level derivation by pairing with good worked examples; one misleading sentence in "Common mistakes".

- [Correctness] "Common mistakes": "Negative terms can cancel positive terms, so its total need not lie between the first and last term" implies totals otherwise lie between the first and last term, which is false (e.g. $1+\cdots+5=15$); what holds is that the mean $(a+\ell)/2$ lies between them and the total is $n$ times that mean.
- [Manim] Animate Fig. A.series_means.1: a staircase $1..5$, a copy rotated by $180^\circ$ sliding into place to form the $5\times6$ rectangle, then halving it.
- [Structure] File uses CRLF line endings; resave with LF per the vault rules.

### N0257

Note: [[Asymptotic expansions|Asymptotic expansions]]  
Priority: low · Graph: yes · Manim: no

Rigorous and accessible; the divergent-expansion example has correct remainder bounds and numerics ($0.95425<F(20)<0.95440$, $0.914\le F(10)\le0.92$).

- [Graph] In "When to stop and what not to infer", plot the term magnitudes $n!/x^n$ (log scale) versus $n=0..30$ for $x=5,10,20$, showing the minimum near $n\approx x$ and the optimal truncation point.
- [Example] Add the numerically computed values $F(20)\approx0.954371$ and $F(10)\approx0.915633$ so the reader sees that each certified interval contains the true value.
- [Intuition] Mention that $F(x)=xe^xE_1(x)$ (exponential integral), connecting the example to a named function.
- [Structure] File is committed with a UTF-8 BOM and CRLF line endings; resave as UTF-8 without BOM with LF per the vault rules.

### N0258

Note: [[Convergence tests in worked series problems|Convergence tests in worked series problems]]  
Priority: high · Graph: yes · Manim: no

Correct worked calculations transcribed from lecture notes, but it reads as a loose transcript with stray fragments and repeated editorial "the transcription..." remarks rather than an explanation.

- [Structure] Under "11.1 Sequences", the line "Monotonic sequence theorem." is a bare fragment followed by unrelated Maclaurin series of $\cos$, $\sin$, $e^x$; state the theorem (or link \[\[09.01 Sequences\]\]) and move the Taylor series to a Taylor note.
- [Simplify] Remove editor-facing sentences ("The transcription gives the partial sum a finite upper index...", "The denominator in this example is written with a plus sign", "The handwritten example continues on the next page", "Both bounds can be attained, so the transcription uses non-strict inequalities", "The transcription takes the limit of the magnitude...") and keep only the mathematical reason where needed.
- [Example] The limit-comparison example with $n^3/(n^4+1)$ never states the tested series or $b_n=1/n$ before the computation; open it with "Test $\sum n^3/(n^4+1)$ against $\sum1/n$".
- [Links] For $\sum ne^{-n^2}$ ("leave the remaining steps blank"), link to the completed solution in \[\[Power-series intervals and convergence practice#Integral test for series\]\].
- [Graph] Supplement the scanned Fig. 47 with a native plot of $f(x)=6/x^2$ on $n\le x\le n+6$ with right-endpoint rectangles, matching the $\pi^2$ error-estimate example.
- [Structure] Turn the "11.7 Testing series" checklist into a decision table (term test; $p$/geometric comparison; alternating; factorials or exponentials to ratio; $(b_n)^n$ to root; easy integral to integral test).

### N0259

Note: [[Finite limits and convergence tests|Finite limits and convergence tests]]  
Priority: medium · Graph: no · Manim: yes

Rigorous and clear note on function limits with sequential and Cauchy criteria, but its title and folder suggest series convergence tests that it does not cover.

- [Structure] The note is about limits of functions (catalogue 2.1.4), not series tests; move it to the limits folder or rename it (e.g. "Finite limits: sequential and Cauchy criteria") so it is not confused with the series convergence-test notes here.
- [Manim] Animate the $\varepsilon$–$\delta$ game for $f(x)=3x-2$ at $a=1$: the output band shrinks and the input interval $\delta=\varepsilon/3$ shrinks with it.
- [Simplify] In "Cauchy's convergence criterion", specify $x_n\in D\setminus\{a\}$ in the reverse direction and add one sentence on why the limit $L$ does not depend on the chosen sequence.
- [Structure] File is committed with a UTF-8 BOM and CRLF line endings; resave as UTF-8 without BOM with LF per the vault rules.

### N0260

Note: [[Finite sums and products|Finite sums and products]]  
Priority: low · Graph: no · Manim: no

Clear, correct beginner note on sigma and pi notation; all worked values verify.

- [Links] Overlaps with \[\[Finite sums and series\]\] (same linearity rules and the same example $\sum_{k=2}^5(2k-1)=24$); cross-link the two and use a different example in one of them.
- [Structure] File is committed with a UTF-8 BOM and CRLF line endings; resave as UTF-8 without BOM with LF per the vault rules.

### N0261

Note: [[Finite sums and series|Finite sums and series]]  
Priority: low · Graph: no · Manim: no

Clear, correct beginner note on finite series and sigma notation; worked values verify.

- [Links] Cross-link \[\[Finite sums and products\]\], which repeats the worked example $\sum_{k=2}^5(2k-1)=24$ and the same linearity rules.
- [Structure] File is committed with a UTF-8 BOM and CRLF line endings; resave as UTF-8 without BOM with LF per the vault rules.

### N0262

Note: [[Geometric series|Geometric series]]  
Priority: low · Graph: no · Manim: yes

Clear, correct derivation of the finite geometric sum with good sign and index checks; all worked answers verify.

- [Manim] Animate the "subtract a shifted copy" step: $S_n$ and $rS_n$ shown as two rows, the copy slides one place right, and all middle terms cancel leaving $a-ar^n$.
- [Structure] File is committed with a UTF-8 BOM and CRLF line endings; resave as UTF-8 without BOM with LF per the vault rules.

### N0263

Note: [[Infinite series - Catalogue Guide|Infinite series - Catalogue Guide]]  
Priority: low · Graph: no · Manim: no

Useful hub and learning route with valid links and correct small examples; no content change needed.

- [Structure] File is committed with a UTF-8 BOM and CRLF line endings; resave as UTF-8 without BOM with LF per the vault rules.

### N0264

Note: [[Infinite sums and convergence|Infinite sums and convergence]]  
Priority: low · Graph: no · Manim: no

Correct and concise; it largely parallels 09.02 (same harmonic and telescoping examples) without linking it.

- [Links] Link to \[\[09.02 Infinite series\]\], which covers the same partial-sum definition, harmonic blocks and telescoping example, and decide which note is primary.
- [Simplify] In "General convergence theorems", add one line showing that the term test is the special case $p=q$ of the Cauchy criterion.
- [Structure] File is committed with a UTF-8 BOM and CRLF line endings; resave as UTF-8 without BOM with LF per the vault rules.

### N0265

Note: [[Power series and Taylor approximations|Power series and Taylor approximations]]  
Priority: low · Graph: yes · Manim: no

Correct and compact synthesis of radius, operations and Taylor remainders; the endpoint $\log 2$ argument and all numerics ($143/1500$, $1/375000$) verify.

- [Graph] In "Approximation formulas with stated errors", plot $|e^h-(1+h+h^2/2)|$ against the bound $e^{1/2}|h|^3/6$ on $-0.5\le h\le0.5$.
- [Example] In "Definition and radius of convergence", give one coefficient sequence where the ratio limit fails but the root formula works (e.g. $a_n=2^{-n}$ for even $n$, $3^{-n}$ for odd $n$, giving $R=2$).
- [Links] Link to \[\[09.05 Power series\]\] and \[\[09.06 Taylor and Maclaurin expansions\]\], which repeat the same $(x-2)^n/(n3^n)$ example and expansions.
- [Structure] File is committed with a UTF-8 BOM and CRLF line endings; resave as UTF-8 without BOM with LF per the vault rules.

### N0266

Note: [[Power-series intervals and convergence practice|Power-series intervals and convergence practice]]  
Priority: medium · Graph: no · Manim: no

Correct worked interval-of-convergence and series-representation problems, but presented as a loose lecture transcript with an orphan fragment, duplicate labels and editorial remarks.

- [Structure] After Example 2 the line "Using the cubic Maclaurin polynomial of $e^x$, $e^{0.3}\approx\ldots$" is an orphan with no value; finish it ($1.3495$, true $1.34986$, Lagrange bound $e^{0.3}(0.3)^4/4!<2(0.3)^4/24=6.75\times10^{-4}$) or move it to the Taylor section.
- [Structure] Two different problems are both labelled "Example 1" (the $(4x+1)^n/n^2$ and $2^n(4x-8)^n/n$ series); renumber, and state the centre $2$ and radius $1/8$ for the second.
- [Simplify] Remove editor-facing remarks ("The transcription keeps $x^n$ in the denominator", "The transcription includes the $0.1$ term", "The transcription uses the sign convention", "The transcription retains the factor $|x-5|$").
- [Simplify] At $x=-1$ for $\sum(x+2)^n/(n+3)$, drop the inconclusive comparison $1/(n+3)<1/n$ (an upper bound by a divergent series proves nothing) and keep only the harmonic-tail reindexing.
- [Links] The opening "Example 1" ($\cos(2n)/(2+3^n)$) duplicates the last example of \[\[Convergence tests in worked series problems\]\]; remove it here or link to it.

### N0267

Note: [[Remainder bounds for infinite sums|Remainder bounds for infinite sums]]  
Priority: low · Graph: yes · Manim: no

Clear and correct remainder-estimate note; the factorial tail $1/4410$, midpoint bounds and practice answers verify.

- [Graph] In "Integral bounds for positive decreasing terms", plot the true tail $R_N=\pi^2/6-S_N$ with $1/(N+1)$ and $1/N$ for $N=1..50$ (log–log), showing the enclosure and the midpoint estimate.
- [Simplify] Because $f$ is strictly decreasing the upper bound is strict, so $N=1000$ already gives error strictly below $0.001$; the switch to $N=1001$ is unnecessary and can confuse.
- [Structure] File is committed with a UTF-8 BOM and CRLF line endings; resave as UTF-8 without BOM with LF per the vault rules.

### N0268

Note: [[Sequences and series - Overview|Sequences and series - Overview]]  
Priority: low · Graph: no · Manim: no

Short, correct hub that lists the 09.xx foundation lessons, but it does not point to the parallel catalogue lessons and problem collections in the same folder.

- [Links] All links resolve, but the hub does not mention \[\[Infinite series - Catalogue Guide\]\] or the worked-problem notes in this folder (for example \[\[Sequences, series tests, and power-series review\]\] and \[\[Taylor and Maclaurin series problems\]\]). Add one line that points readers to them as the extended and practice route.
- [Structure] The file starts with a UTF-8 BOM, which breaks the vault's "UTF-8 without BOM" rule. Run the formatter to remove it.

### N0269

Note: [[Sequences and their limits|Sequences and their limits]]  
Priority: low · Graph: yes · Manim: no

Clear, correct lesson with a good worked recurrence and exact error formula; only a few wording slips and a missing picture of the $\varepsilon$–$N$ definition.

- [Simplify] In "Monotonic sequences", the text says "To test positive explicit terms, a ratio can help" but then uses the difference $a_{n+1}-a_n$ for $n/(n+1)$. Either show the ratio $a_{n+1}/a_n=(n+1)^2/[n(n+2)]>1$ or drop the ratio sentence.
- [Graph] For the limit definition, plot $a_n=n/(n+1)$ as points for $n=1..20$, with the horizontal band $1\pm\varepsilon$ for $\varepsilon=0.1$ shaded and a vertical line at $N=10$, so the reader can see that every term after $N$ stays in the band.
- [Graph] In the recurrence example, plot $a_n$ from $a_1=2$, $a_{n+1}=(a_n+3)/2$ for $n=1..10$ together with the line $y=3$, plus a second series showing $3-a_n=2^{1-n}$ on a log axis to make the halving error visible.
- [Intuition] Add one sentence to the uniqueness argument that names the step: $d=|L_1-L_2|\le|a_n-L_1|+|a_n-L_2|<2d/3$ for large $n$, so readers can see where the triangle inequality enters.
- [Structure] The file starts with a UTF-8 BOM; remove it to meet the vault's encoding rule.

### N0270

Note: [[Sequences, series tests, and power-series review|Sequences, series tests, and power-series review]]  
Priority: medium · Graph: yes · Manim: no

The worked problems are mathematically correct (all counts, sums, and intervals check out), but transcription meta-comments and a mixed-up ratio-test example make the long note harder to follow than necessary.

- [Simplify] Remove or rewrite the transcription meta-comments that address the handwritten source instead of the reader, for example "The boxed formula in the notes gives a minus sign for the fourth term" (first example), "The transcription uses $\ln t$ as the transformed upper limit", "The transcription includes the square on $k$…", and "The notes give $R_{10}\le1/\ln10$…". State the mathematics directly.
- [Structure] "Ratio test example" covers two different series: $\sum1/(n+3^n)$ and the handwritten $\sum1/(n3^n)$. Split it into two clearly labelled examples, or keep one, and add a note that $\sum1/(n+3^n)$ is more simply handled by comparison with $\sum(1/3)^n$.
- [Structure] The two headings "Error estimation" and "Remainder estimate for the integral test" are consecutive and both level 5, with the first one empty. Make "Error estimation" the parent heading (level 4) or delete it. Also add a short "how to choose a test" decision list before the long run of examples.
- [Graph] For the integral-test remainder bound, plot $f(x)=6/x^2$ on $[1,8]$ with unit-width rectangles of heights $f(n)$, shading the tail beyond $n=4$ and the areas $\int_4^\infty$ and $\int_5^\infty$, to show why $\int_{n+1}^\infty f\le R_n\le\int_n^\infty f$.
- [Graph] For the alternating-series estimate, plot the partial sums $S_n$ of $\sum(-1)^{n-1}4/(2n-1)$ for $n=1..30$ against the line $y=\pi$, showing that $S_n$ alternate around $\pi$ and stay within $b_{n+1}$.
- [Example] In the interval-of-convergence examples, add a short endpoint summary table (endpoint, resulting series, test used, verdict) for $\sum x^n/\sqrt n$ and $\sum(-3)^nx^n/\sqrt{n+1}$ to show the reusable pattern.

### N0271

Note: [[Special finite series|Special finite series]]  
Priority: low · Graph: no · Manim: yes

Well-structured and correct derivations (all formulas, the worked example, and the answers check out) with good warnings against common confusions.

- [Manim] Animate the odd-number square picture: start with one unit square, then add L-shaped borders of $3,5,7,\ldots$ squares in a different colour so a $4\times4$ square builds up while a counter shows $1+3+5+7=16$.
- [Intuition] In "Sum of cubes", add one line that ties $T_k^2-T_{k-1}^2=k^3$ to the familiar result $1^3+\cdots+n^3=(1+\cdots+n)^2$ with a numeric check at $n=4$ ($100=10^2$), so the telescoping step looks less like a trick.
- [Simplify] In "Telescoping sums", the sentence "The square and cube derivations above also use this type of cancellation, with the subtraction in the opposite direction" is vague. Write it out explicitly: $\sum_{k=1}^n[(k+1)^3-k^3]=(n+1)^3-1$ is the pattern with $b_k=-k^3$.
- [Structure] The file starts with a UTF-8 BOM; remove it to meet the vault's encoding rule.

### N0272

Note: [[Special sums and Bernoulli and Euler numbers|Special sums and Bernoulli and Euler numbers]]  
Priority: low · Graph: yes · Manim: no

Correct and carefully convention-aware (the Bernoulli and Euler values, recurrences, DLMF equivalence, and the $1/\cosh(1/5)$ example all check out), though dense for a first encounter with generating functions.

- [Simplify] In the $m=5$ Bernoulli recurrence, "$1-5/2+10/6+5B_4=0$" silently drops the $\binom53B_3=10B_3$ term. Write $1-5/2+10/6+10B_3+5B_4=0$ and then use $B_3=0$, so readers can follow the recurrence as stated.
- [Graph] Plot $1/\cosh x$ and its Maclaurin polynomials of degree 2, 4, 6 (using $E_2=-1$, $E_4=5$, $E_6=-61$) on $[-2.5,2.5]$, with vertical lines at $\pm\pi/2$, to show that the polynomials agree well near zero and diverge beyond the radius of convergence.
- [Example] The worked example warns that the value "alone is not an error guarantee" but stops there. Add the actual error, $1/\cosh(0.2)-2941/3000\approx-5.3\times10^{-6}$, and compare it with the next term $E_6(0.2)^6/720\approx-5.4\times10^{-6}$ to show what the truncation order means.
- [Intuition] Explain in one sentence why the radii are $2\pi$ and $\pi/2$: they are the distances to the nearest complex zeros of $e^z-1$ ($z=\pm2\pi i$) and of $\cosh z$ ($z=\pm i\pi/2$).
- [Structure] The file starts with a UTF-8 BOM; remove it to meet the vault's encoding rule.

### N0273

Note: [[Taylor and Maclaurin series problems|Taylor and Maclaurin series problems]]  
Priority: high · Graph: yes · Manim: yes

The mathematics that is present is correct, but the note has a wrong physical-quantities table, unfinished exercises, many transcription meta-comments, and a title that does not match its mixed content of convergence tests and Taylor series.

- [Correctness] The "Physical quantities" table lists cable weight per length ($\unit{lbf/ft}$), coal weight ($\unit{lbf}$), and water loss per lift ($\unit{kg/m}$). None of these appear in this note, which is pure mathematics; it seems to be copied from a work-integral note. Delete the table.
- [Structure] More than half the note covers comparison, limit comparison, alternating, absolute-convergence, and root tests ("Example 2", "Example 3", the $(-10)^n/n!$ and $n^n/3^{1+3n}$ examples) and has nothing to do with Taylor series. Either move these examples to \[\[Sequences, series tests, and power-series review\]\] or retitle the note. Also number the examples consistently (currently "Example", "Example 2", "Example 3", "Example").
- [Example] Several items are posed but never finished: the exercise $\sum_{n\ge2}9^n/[(-2)^{n+1}n]$ (diverges because $|a_n|=(9/2)^n/(2n)\to\infty$), the "Challenge problem" $\ln3=-\ln(1/3)$ (give the series $\ln3=\sum_{n\ge1}(2/3)^n/n$ and note that it converges slowly), the $\cos^2x$ series (finish $\cos^2x=1+\sum_{n\ge1}(-1)^n2^{2n-1}x^{2n}/(2n)!$), and the bullet tasks for $\cos x$ and $\ln(1-x)$. Add brief worked answers.
- [Simplify] Remove the meta-comments about the transcription versus the handwritten source ("The transcription retains the factorials…", "The handwritten calculation uses $12000$…", "The transcription uses the plus sign…", "The transcription retains the fifth power…", "The notes first consider $\sin(0.5)$…"). They distract from the mathematics.
- [Graph] For "How good is the partial sum?", add a native plot of $\sin x$ with $T_1$, $T_3$, $T_5$ on $[-2\pi,2\pi]$ (y clipped to $[-3,3]$), and a second plot of $|e^x-T_4(x)|$ on $[-0.5,0.5]$ against the Taylor-inequality bound $e^{0.5}|x|^5/120$.
- [Manim] Animate successive Maclaurin polynomials $T_1,T_3,\ldots,T_{15}$ of $\sin x$ wrapping onto the sine curve, so the reader sees the region of good agreement grow with the degree.

### N0274

Note: [[Taylor polynomials with error control|Taylor polynomials with error control]]  
Priority: low · Graph: yes · Manim: no

A clear and correct lesson with a well-chosen signed-error example; it needs only a picture and a remark on the sharper sine bound.

- [Graph] Plot $\ln(1+x)$ with $P_1,P_2,P_3$ on $[-0.5,1]$, plus a second panel showing $\ln(1+x)-P_3(x)$ on $[0,0.1]$ against the bound $-x^4/4$, so readers can see that the actual error is negative and below the bound.
- [Example] In worked answer 2, add that for sine $P_3=P_4$, so the degree-four remainder with $|\cos|\le1$ gives the sharper bound $0.2^5/120\approx2.7\times10^{-6}$. This is a standard and instructive trick that the note already hints at ("A sharper bound is possible").
- [Simplify] The sentence "The full repeated-Rolle proof can follow the theorem's use; the error bound must still accompany a numerical claim" is unclear. Either sketch the auxiliary function $g(t)=f(t)-P_n(t)-K(t-a)^{n+1}$ in two lines or link to the proof.
- [Intuition] In the stationary-point paragraph about $x^4$, state that the third derivative also vanishes and the first nonzero derivative has even order $4$ and is positive. That is the general rule the example illustrates.
- [Structure] The file starts with a UTF-8 BOM; remove it to meet the vault's encoding rule.

### N0275

Note: [[Tests for positive series|Tests for positive series]]  
Priority: low · Graph: yes · Manim: no

Concise, correct overview of the comparison, ratio, root, and integral tests, with good proof ideas and a well-chosen boundary example.

- [Simplify] In "Comparison test", "Conversely, if $\sum a_n$ diverges, the larger series $\sum b_n$ diverges" is the contrapositive, not the converse. Write "Equivalently (contrapositive)" so readers do not learn the wrong logical term.
- [Graph] For the integral test, plot $f(x)=1/x^2$ on $[1,6]$ with left-endpoint rectangles (heights $f(n)$ on $[n,n+1]$) and right-endpoint rectangles on the same axes, illustrating the two inequalities $\int_1^{N+1}f\le\sum_1^Nf(n)\le f(1)+\int_1^Nf$.
- [Example] Add a short example where limit comparison gives $c=0$ and the one-sided version is needed, for example $\sum\ln n/n^2$ against $\sum1/n^{3/2}$, since the text mentions the case but does not show it.
- [Structure] The file starts with a UTF-8 BOM; remove it to meet the vault's encoding rule.

### N0276

Note: [[Uniform convergence and operations on series|Uniform convergence and operations on series]]  
Priority: medium · Graph: yes · Manim: yes

Correct and carefully scoped (the geometric-series remainder, M-test, interchange theorems, and $\log2$ example all check out), but the core difference between pointwise and uniform convergence would be much clearer with a picture.

- [Graph] Plot the remainder $x^{N+1}/(1-x)$ on $[0,0.99]$ for $N=1,5,20$ (y clipped to $[0,5]$), with the band $y\le\varepsilon=0.5$ shaded and a vertical line at $r=0.8$, to show that no single $N$ works near $1$ but one does on $[0,r]$.
- [Manim] Animate the partial sums $S_N(x)=\sum_{n=0}^Nx^n$ approaching $1/(1-x)$ on $[0,1)$ as $N$ increases, with an $\varepsilon$-tube around the limit, showing that the graph enters the tube everywhere on $[0,0.8]$ but never near $x=1$.
- [Example] In the M-test section, finish the warning about $\sum\sin(nx)/n^2$ with a concrete failure: the differentiated series $\sum\cos(nx)/n$ diverges at $x=0$ (harmonic series), so termwise differentiation is not allowed without the derivative hypothesis.
- [Example] Add a classical counterexample that shows uniform convergence alone does not allow differentiation: partial sums $S_N(x)=\sin(N^2x)/N$ tend uniformly to $0$, while their derivatives $N\cos(N^2x)$ do not converge.
- [Structure] The file starts with a UTF-8 BOM; remove it to meet the vault's encoding rule.
