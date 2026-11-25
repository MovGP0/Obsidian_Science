---
title: "Note Improvement Tracker – 01 Mathematics/06 Probability and Statistics"
---

> [!TLDR]
> This note tracks the review of the 25 notes in `01 Mathematics/06 Probability and Statistics`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 11 possible errors or notation conflicts. 11 of them are verified (11 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N0326|N0326]] Counting, conditional probability, and Bayes problems: In "Products of sample spaces and independence", the step $\binom52=5!/(3!2!)=20/2=10$ has an invalid intermediate: $5!/(3!2!)=120/12$; write $=(5\cdot4)/2=10$. **Fixed:** Replaced with 5!/(3!\,2!)=(5\cdot4)/2=10.
- [[#N0330|N0330]] Discrete and continuous probability distributions: Symbol clash: $\lambda$ is first the roughness weight in $f(x)=\sum(x_{ij}-y_{ij})^2+\lambda R(x)$ and later the exponential rate in $\operatorname{Exp}(\lambda)$, and $f$ denotes both that cost function and a density; rename the smoothing weight (e.g. $\beta$) and the cost (e.g. $C(x)$). **Fixed:** Renamed the image-smoothing cost to J(x) and its roughness weight to \kappa (equation, following sentence, and g(x)\propto e^{-J(x)}).
- [[#N0333|N0333]] Moments and transformations of random variables: In "Reciprocal of a Cauchy variable", the branch $F_Y(y)=1-F_X(1/y)$ for $y<0$ is wrong: for $y<0$, $\{1/X\le y\}=\{1/y\le X<0\}$, so $F_Y(y)=\tfrac12-F_X(1/y)$ (check: $y=-1$ gives $1/4$; $y\to0^-$ gives $1/2$). The $y>0$ branch $\tfrac32-F_X(1/y)$ and the resulting density are correct; also fix the sentence claiming the handwritten $1-F_X(1/y)$ applies for $y<0$. **Fixed:** Verified {1/X<=y}={1/y<=X<0} for y<0; changed branch to 1/2-F_X(1/y) and rewrote the sentence that said the handwritten 1-F_X(1/y) applies for y<0.
- [[#N0333|N0333]] Moments and transformations of random variables: In the review "Pareto" section, "modeling earthquake magnitudes" is misleading: under Gutenberg–Richter, magnitudes are approximately exponential while seismic energies or moments are Pareto, consistent with this note's own exponential-to-Pareto transformation $Y=e^X$. **Fixed:** Added that under Gutenberg-Richter magnitudes are approximately exponential and released energies approximately Pareto, with a link to the Exponential to Pareto transformation section.
- [[#N0338|N0338]] Large numbers and normal approximation problems: In "Numerical summaries of data", the hourly temperatures $41$ to $58$ are labelled degrees Celsius; $58\,^\circ\mathrm C$ exceeds the world-record air temperature, so these are almost certainly degrees Fahrenheit. Check the source and fix the unit in the text and in the physical-quantities table ($\thermal{\bar x}_{11}\approx\quantity{44.7}{{}^\circ F}$). **Fixed:** Source not available; 58 degC exceeds the world-record air temperature and the source is a US course, so changed the unit to degrees Fahrenheit in text, quantity, and table (mean 44.7 checked).
- [[#N0346|N0346]] Likelihood estimation and Monte Carlo modeling problems: The "Physical quantities" table lists symbols with wrong meanings for this note: $M$ is the Monte Carlo hit count (not a carrying capacity), $K$ is the MSE constant in $K/N$ (not a koala population), $\lambda$ is the log-likelihood (not a Lyapunov exponent), and $y_i$, $x,y$, $s$ (age groups, ingredients, protein surplus) do not occur; replace it with a table for the quantities actually used (e.g. height $x_i$ in in) or remove it. **Fixed:** Replaced all rows with height x_i, mean mu, and standard deviation sigma in inches (the only physical quantities in the note).
- [[#N0346|N0346]] Likelihood estimation and Monte Carlo modeling problems: In "Trapezoidal rule", the sentence "The handwritten expectation omits the square, which is required by the calculation on [[#Trapezoidal rule|the section on Trapezoidal rule]]" links to its own section; the squared-error calculation is in "#Expected squared error", so retarget the link. **Fixed:** Retargeted the link to #Expected squared error.
- [[#N0347|N0347]] Markov models and population dynamics: The "Physical quantities" table lists $\tau$ as "total population" (here $\tau_{ij}$ are hitting times), $t$ as "iron surplus" (here $t$ is time), and $T$, $\lambda$, $x$, $y$, $s$ (sampling period, Lyapunov exponent, ingredients, protein) which never occur; remove these rows. **Fixed:** Removed these six rows (tau_ij are hitting-time counts, lambda is a matrix eigenvalue, T is a transpose).
- [[#N0347|N0347]] Markov models and population dynamics: Symbol clash: $\beta$ is the logistic crowding coefficient $\alpha/M$ (units s$^{-1}$) and also the predator-effect coefficient in $\alpha R(1-\beta W)$ (dimensionless), and both appear as separate rows in the table; rename one (e.g. $b$ for the predator effect). **Fixed:** Renamed the predator-effect coefficient to b in the predator-prey section and its table row.
- [[#N0349|N0349]] Regression, validation, and goodness of fit: In "Traffic accidents", the note states the $\chi^2_{k-1}$ reference for specified probabilities, but here $\mu$ is estimated from the data, so the reference is $\chi^2_{k-1-1}=\chi^2_1$; add this and finish the test: $T\approx1.34$, $p\approx0.25$, so the Poisson model is not rejected (also note that $E_3\approx4.2<5$). **Fixed:** Added that estimating mu gives chi^2_{k-1-1}=chi^2_1, computed T approx 1.35 and p approx 0.24 (recomputed with scipy), stated that the Poisson model is not rejected, and noted E_3=4.20<5.
- [[#N0349|N0349]] Regression, validation, and goodness of fit: Symbol clash: $\alpha$ is the regression intercept in $Y_i=\alpha+\beta x_i+U_i$ and also the significance level in the $(1-\alpha)$ intervals and $z_{\alpha/2}$; $a$ is both the speed-trap cutoff and an interval endpoint. Rename the intercept (e.g. $\beta_0$) or the endpoints. **Fixed:** Renamed the regression intercept to beta_0 in the regression sections and Fig. 76 caption; renamed the interval endpoints (a,b) to (ell,u).

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N0325 | [[Counting arrangements and selections\|01 Counting and Conditional Probability/Counting arrangements and selections]] | Analyzed | low | no | yes | [[#N0325\|View]] |
| N0326 | [[Counting, conditional probability, and Bayes problems\|01 Counting and Conditional Probability/Counting, conditional probability, and Bayes problems]] | Analyzed | medium | no | no | [[#N0326\|View]] |
| N0327 | [[Events and conditional probability\|01 Counting and Conditional Probability/Events and conditional probability]] | Analyzed | low | no | no | [[#N0327\|View]] |
| N0328 | [[Probability theory and mathematical statistics - Catalogue Guide\|01 Counting and Conditional Probability/Probability theory and mathematical statistics - Catalogue Guide]] | Analyzed | low | no | no | [[#N0328\|View]] |
| N0329 | [[Continuous probability models\|02 Random Variables and Distributions/Continuous probability models]] | Analyzed | low | yes | no | [[#N0329\|View]] |
| N0330 | [[Discrete and continuous probability distributions\|02 Random Variables and Distributions/Discrete and continuous probability distributions]] | Analyzed | medium | yes | no | [[#N0330\|View]] |
| N0331 | [[Discrete probability models\|02 Random Variables and Distributions/Discrete probability models]] | Analyzed | low | yes | no | [[#N0331\|View]] |
| N0332 | [[Gaussian bell shapes\|02 Random Variables and Distributions/Gaussian bell shapes]] | Analyzed | low | yes | yes | [[#N0332\|View]] |
| N0333 | [[Moments and transformations of random variables\|02 Random Variables and Distributions/Moments and transformations of random variables]] | Analyzed | high | yes | yes | [[#N0333\|View]] |
| N0334 | [[Random variables and joint distributions\|02 Random Variables and Distributions/Random variables and joint distributions]] | Analyzed | low | yes | no | [[#N0334\|View]] |
| N0335 | [[Bootstrap intervals and likelihood examples\|03 Sampling, Estimation, and Inference/Bootstrap intervals and likelihood examples]] | Analyzed | high | yes | yes | [[#N0335\|View]] |
| N0336 | [[Confidence intervals and hypothesis tests\|03 Sampling, Estimation, and Inference/Confidence intervals and hypothesis tests]] | Analyzed | low | yes | yes | [[#N0336\|View]] |
| N0337 | [[Joint distributions, covariance, and sampling\|03 Sampling, Estimation, and Inference/Joint distributions, covariance, and sampling]] | Analyzed | high | yes | no | [[#N0337\|View]] |
| N0338 | [[Large numbers and normal approximation problems\|03 Sampling, Estimation, and Inference/Large numbers and normal approximation problems]] | Analyzed | high | yes | yes | [[#N0338\|View]] |
| N0339 | [[Likelihood and validation\|03 Sampling, Estimation, and Inference/Likelihood and validation]] | Analyzed | low | yes | no | [[#N0339\|View]] |
| N0340 | [[Measurement uncertainty\|03 Sampling, Estimation, and Inference/Measurement uncertainty]] | Analyzed | low | yes | no | [[#N0340\|View]] |
| N0341 | [[Propagation and uncertainty budgets\|03 Sampling, Estimation, and Inference/Propagation and uncertainty budgets]] | Analyzed | low | yes | no | [[#N0341\|View]] |
| N0342 | [[Samples and descriptive statistics\|03 Sampling, Estimation, and Inference/Samples and descriptive statistics]] | Analyzed | low | yes | no | [[#N0342\|View]] |
| N0343 | [[Sampling distributions\|03 Sampling, Estimation, and Inference/Sampling distributions]] | Analyzed | low | yes | no | [[#N0343\|View]] |
| N0344 | [[Correlation and regression models\|04 Regression, Simulation, and Stochastic Models/Correlation and regression models]] | Analyzed | low | yes | no | [[#N0344\|View]] |
| N0345 | [[Large numbers and stochastic processes\|04 Regression, Simulation, and Stochastic Models/Large numbers and stochastic processes]] | Analyzed | low | yes | yes | [[#N0345\|View]] |
| N0346 | [[Likelihood estimation and Monte Carlo modeling problems\|04 Regression, Simulation, and Stochastic Models/Likelihood estimation and Monte Carlo modeling problems]] | Analyzed | high | yes | yes | [[#N0346\|View]] |
| N0347 | [[Markov models and population dynamics\|04 Regression, Simulation, and Stochastic Models/Markov models and population dynamics]] | Analyzed | high | yes | yes | [[#N0347\|View]] |
| N0348 | [[Monte Carlo simulation\|04 Regression, Simulation, and Stochastic Models/Monte Carlo simulation]] | Analyzed | low | yes | yes | [[#N0348\|View]] |
| N0349 | [[Regression, validation, and goodness of fit\|04 Regression, Simulation, and Stochastic Models/Regression, validation, and goodness of fit]] | Analyzed | medium | yes | no | [[#N0349\|View]] |

## Suggestions

### N0325

Note: [[Counting arrangements and selections|Counting arrangements and selections]]  
Priority: low · Graph: no · Manim: yes

Clear, correct, and well-structured counting lesson with good worked decisions; only small gaps in intuition remain.

- [Intuition] In "Permutations", the LEVEL argument would be easier to follow with a one-line list showing that the labelled orders $L_1EVEL_2$ and $L_2EVEL_1$ collapse to the same visible word before stating the $2!2!$ divisor.
- [Example] In "Combinations", add one more stars-and-bars encoding (for example *|*|** for $(1,1,2)$) and an edge case with an empty type (**||** for $(2,0,2)$) so readers see why separators may be adjacent.
- [Manim] Short animation for the stars-and-bars section: four stars and two bars slide between positions, and the counts $(a,b,c)$ update live, showing the bijection between arrangements and multisets.
- [Example] The circular-arrangement paragraph has no worked number; add e.g. five people around an unmarked table give $4!=24$, and $12$ if reflections are also identified.

### N0326

Note: [[Counting, conditional probability, and Bayes problems|Counting, conditional probability, and Bayes problems]]  
Priority: medium · Graph: no · Manim: no

Faithful lecture transcription with correct calculations, but it reads as a sequence of handwriting notes and ends on an unsolved problem whose solution lives in another note.

- [Structure] "Two radios from the same factory" stops after defining $P(D_2\mid D_1)$; the solution ($\approx0.0433$) sits at the top of "Discrete and continuous probability distributions". Move that derivation here (or link to it) so problem and answer are in the same note.
- [Simplify] Remove transcription meta-commentary that does not help the reader ("The handwritten date appears to end in 2014...", "The boxed value in the handwriting is $0.00675$", "Boring Math Time") or move it to a collapsed source callout.
- [Correctness] In "Products of sample spaces and independence", the step $\binom52=5!/(3!2!)=20/2=10$ has an invalid intermediate: $5!/(3!2!)=120/12$; write $=(5\cdot4)/2=10$.
- [Intuition] In "Products of sample spaces and independence", state explicitly that outcome 1 codes heads before computing "exactly one head" as $5p(1-p)^4$; the coding $P(1)=p$ is never tied to "head".
- [Example] In "Birthday problem", add the numerical value $P(B_{23})\approx0.4927$ (shared-birthday probability $\approx0.5073$) to justify the stated threshold $n\ge23$.

### N0327

Note: [[Events and conditional probability|Events and conditional probability]]  
Priority: low · Graph: no · Manim: no

Concise, correct, and well-motivated introduction to events, conditioning, independence, and Bayes with good worked examples.

- [Links] The source line links "Math 32" to [[Counting, conditional probability, and Bayes problems#Products of sample spaces and independence]]; the heading exists but is not the natural source for this lesson's Bayes material; link to "#Bayes' theorem and an imperfect test" instead.
- [Intuition] In "How prevalence changes a positive test result", add a limiting case: as prevalence tends to zero, $P(B\mid T)\to0$ for any fixed positive false-positive rate, which explains why the 12.5% figure is low.
- [Example] The pairwise-independence counterexample (two bits and their parity) would benefit from a four-row outcome table so readers can verify pairwise products and the failure of the triple product directly.

### N0328

Note: [[Probability theory and mathematical statistics - Catalogue Guide|Probability theory and mathematical statistics - Catalogue Guide]]  
Priority: low · Graph: no · Manim: no

Clear hub note with a sensible entry route, a correct worked example, and a complete catalogue lesson index.

- [Links] The entry route and lesson index omit the Kabasares lecture-note pages in this chapter (e.g. [[Counting, conditional probability, and Bayes problems]], [[Moments and transformations of random variables]], [[Markov models and population dynamics]], [[Regression, validation, and goodness of fit]]); add a short "Worked lecture notes" list so they are reachable from the hub.

### N0329

Note: [[Continuous probability models|Continuous probability models]]  
Priority: low · Graph: yes · Manim: no

Accurate and well-explained survey of normal, lognormal, exponential, and Weibull models with checked worked numbers.

- [Graph] Add a 2D plot of densities on $0\le x\le4$: exponential with $r=1$, Weibull with $a=1$ and $k=0.5,1,2$, and lognormal with $\mu=0,\sigma=0.5$, so the different supports, peaks, and tails cited in the final section are visible.
- [Graph] Add a plot of the Weibull hazard $(k/a)(x/a)^{k-1}$ for $a=1$, $k=0.5,1,2$ on $0<x\le3$ to show decreasing, constant, and increasing hazard.
- [Intuition] In "Lognormal distribution", explain right there why mean exceeds median (the long right tail pulls the mean) with the ratio $e^{\sigma^2/2}$, instead of leaving the first number to the worked comparison.

### N0330

Note: [[Discrete and continuous probability distributions|Discrete and continuous probability distributions]]  
Priority: medium · Graph: yes · Manim: no

Correct lecture transcription covering many distributions, but it starts mid-problem, mixes in transcription remarks, and relies on hand sketches where plots would help.

- [Structure] The note opens with the solution of the radio problem posed in "Counting, conditional probability, and Bayes problems"; move it back to that note (or add a one-line restatement and link) so this note starts with "Discrete random variables".
- [Correctness] Symbol clash: $\lambda$ is first the roughness weight in $f(x)=\sum(x_{ij}-y_{ij})^2+\lambda R(x)$ and later the exponential rate in $\operatorname{Exp}(\lambda)$, and $f$ denotes both that cost function and a density; rename the smoothing weight (e.g. $\beta$) and the cost (e.g. $C(x)$).
- [Graph] Add a 2D plot of the PMFs of $\operatorname{Bin}(3,1/4)$ and $\operatorname{Pois}(5)$ for $k=0..12$ using the tabulated values in this note.
- [Graph] Add a 2D plot comparing the Laplace density $e^{-|x|}/2$ with the standard normal on $-4\le x\le4$ (matching Fig. 26) and Pareto densities $\alpha x^{-\alpha-1}$ for $\alpha=1,2,3$ on $1\le x\le5$.
- [Example] In "Example with IQ scores", note that pnorm gives $0.9522$ while the table with $z=1.67$ gives $0.9525$, and explain that the difference comes from rounding $5/3$.

### N0331

Note: [[Discrete probability models|Discrete probability models]]  
Priority: low · Graph: yes · Manim: no

Clear, correct comparison of binomial, hypergeometric, and Poisson models with good emphasis on modelling assumptions.

- [Graph] In "Worked comparison", add a grouped bar plot of the $\operatorname{Bin}(3,0.4)$, hypergeometric $(N=10,K=4,n=3)$, and $\operatorname{Pois}(1.2)$ PMFs for $k=0..5$ so the smaller hypergeometric spread and the Poisson tail are visible.
- [Example] In "Poisson distribution", add a numeric illustration of the binomial-to-Poisson limit, e.g. $\operatorname{Bin}(100,0.02)$ versus $\operatorname{Pois}(2)$ at $k=2$: $0.2734$ versus $0.2707$.

### N0332

Note: [[Gaussian bell shapes|Gaussian bell shapes]]  
Priority: low · Graph: yes · Manim: yes

Clear, correct treatment of the Gaussian shape, completed squares, and FWHM, but it has no figure although it is entirely about a graph.

- [Graph] Add a 2D plot of $H\exp(-(x-\mu)^2/(2s^2))$ with $H=1,\mu=0$ and $s=0.5,1,2$ on $-5\le x\le5$, marking the half-height line $y=1/2$ and the FWHM segment for $s=1$.
- [Graph] For the worked example, plot $g(x)=3e^{4x-2x^2}$ on $-1\le x\le3$, marking the peak $(1,3e^2)$, the points $(0,3)$ and $(2,3)$, and the half-height inputs $1\pm\sqrt{\ln2/2}$.
- [Manim] Animate $H\exp(-(x-\mu)^2/(2s^2))$ while $\mu$, $H$, and $s$ change one at a time, showing shift, vertical stretch, and widening with a FWHM marker that follows.
- [Structure] The final "Worked answers" is a plain heading; make it a collapsed example callout like the other notes in this folder.

### N0333

Note: [[Moments and transformations of random variables|Moments and transformations of random variables]]  
Priority: high · Graph: yes · Manim: yes

Broad and mostly correct transcription of expectation, MGFs, and transformations, but it contains a wrong CDF branch for the Cauchy reciprocal and several confusing transcription remarks.

- [Correctness] In "Reciprocal of a Cauchy variable", the branch $F_Y(y)=1-F_X(1/y)$ for $y<0$ is wrong: for $y<0$, $\{1/X\le y\}=\{1/y\le X<0\}$, so $F_Y(y)=\tfrac12-F_X(1/y)$ (check: $y=-1$ gives $1/4$; $y\to0^-$ gives $1/2$). The $y>0$ branch $\tfrac32-F_X(1/y)$ and the resulting density are correct; also fix the sentence claiming the handwritten $1-F_X(1/y)$ applies for $y<0$.
- [Correctness] In the review "Pareto" section, "modeling earthquake magnitudes" is misleading: under Gutenberg–Richter, magnitudes are approximately exponential while seismic energies or moments are Pareto, consistent with this note's own exponential-to-Pareto transformation $Y=e^X$.
- [Links] In "Jensen's inequality", the sentence linking to [[#Jensen's inequality|the section on Jensen's inequality]] points to the section it is in; remove the self-link.
- [Simplify] The Pareto balance-point remark ("The $\alpha$ small label appears beside the near-end balance point") conflicts with the formula $\alpha/(\alpha-1)$; state plainly that smaller $\alpha$ moves the mean farther out, and say the handwritten label is reversed or drop it.
- [Graph] Add a 2D plot of the maximum and minimum densities $nx^{n-1}$ and $n(1-x)^{n-1}$ for $n=1,2,5$ on $[0,1]$ (supplementing Figs. 44–45), and a plot of the Bernoulli entropy $-p\ln p-(1-p)\ln(1-p)$ on $[0,1]$.
- [Manim] Animate $Y=-\ln X$: uniform samples on $(0,1)$ travel along the curve $y=-\ln x$ and pile up into an $\operatorname{Exp}(1)$ histogram, illustrating the CDF method in "Logarithm of a uniform variable".

### N0334

Note: [[Random variables and joint distributions|Random variables and joint distributions]]  
Priority: low · Graph: yes · Manim: no

Clear and correct introduction to PMFs, CDFs, moments, Chebyshev, and joint distributions with good counterexamples.

- [Links] The source line links "Math 32" to [[Moments and transformations of random variables#Gaussian or normal]], a section about normal and Poisson summaries, not this lesson's content; link to "#Distribution of the maximum", which matches this note's last section.
- [Graph] In "Worked CDF calculation", add a 2D step plot of the two-coin CDF on $-1\le x\le3$ with closed dots at $x=0,1,2$ and open dots at the left limits to show right-continuity.
- [Intuition] In "Worked example: dependence with zero covariance", replace "Zero covariance rules out linear association in this example, not all association" with the general statement that zero covariance excludes only linear association, not nonlinear dependence.

### N0335

Note: [[Bootstrap intervals and likelihood examples|Bootstrap intervals and likelihood examples]]  
Priority: high · Graph: yes · Manim: yes

Calculations are correct and several handwriting errors are already fixed, but the note is a loosely ordered lecture dump with broken headings, duplicated problems, and unexplained estimates.

- [Structure] Broken transcription headings "##### )" (first heading) and bare "**)**" lines before the menstrual-cycle table, the exponential MLE, and the known-variance interval; replace them with real headings (e.g. "Confidence intervals and the bootstrap", "Pregnancy data", "Exponential maximum likelihood") and rename "##### A/B/C" to descriptive subheadings.
- [Simplify] In "Pregnancy data", the estimates $0.224$ and $0.33$ appear without derivation and differ from the first-cycle estimates $0.29$ and $0.41$; explain that they are the censored geometric MLE $\hat p=(\text{uncensored count})/(\text{total observed cycles}+12\cdot\text{censored})$, which reproduces $0.2241$ and $0.3317$ from the table.
- [Example] In both chip problems ("Practice midterm 1" Q4 and "Practice midterm 2" Q2, which duplicate each other), $P(S<15)=P(S\le14)$ for an integer count; add the continuity-corrected value $P(Z<-1.375)\approx0.085$ and the exact binomial $0.0804$ to show that the uncorrected $0.1056$ is noticeably off, and keep only one copy of the problem.
- [Structure] "Introduction to hypothesis testing" sets up the fair-coin test $H_0:p=1/2$ but never completes it, and "3a" leaves its integrals unevaluated; either finish them (for 3a: $E[XY]=1/3$, $E[X]=1/2$, $E[Y]=2/3$, so $\operatorname{Cov}=0$, consistent with the factorized density) or remove the fragments.
- [Graph] Add a 2D plot of the uniform-endpoint likelihood $L(\theta)=\theta^{-3}$ for $\theta\ge1.57$ and $0$ below, on $0\le\theta\le4$, replacing the Fig. 74 sketch and showing the boundary maximum.
- [Manim] Animate bootstrap resampling for a small dataset: draw $n$ values with replacement, compute the mean, drop it into a growing histogram, and finally mark the 2.5th and 97.5th percentiles as the percentile interval.

### N0336

Note: [[Confidence intervals and hypothesis tests|Confidence intervals and hypothesis tests]]  
Priority: low · Graph: yes · Manim: yes

Precise, correct, and carefully hedged treatment of mean and variance intervals, tests, p-values, and normality checks with verified numbers.

- [Graph] Add a 2D plot of the $t_8$ density with the central 95% region between $\pm2.306$ shaded and the observed statistic $t=2$ marked, matching the worked test of $H_0:\mu=8$.
- [Manim] Animate coverage: draw repeated normal samples, add each 95% t interval as a horizontal bar against the fixed vertical line $\mu$, colour misses differently, and show the running coverage fraction approaching 0.95 (complementing the schematic Fig. C.ch16.3).
- [Intuition] In "Principle of statistical tests", add a short power example for the worked sample (e.g. the probability of rejecting $H_0:\mu=8$ when the true mean is 11) to make Type II error concrete.

### N0337

Note: [[Joint distributions, covariance, and sampling|Joint distributions, covariance, and sampling]]  
Priority: high · Graph: yes · Manim: no

Correct individual calculations, but the note jumps between unrelated topics, repeats definitions, leaves examples unfinished, and contains broken headings and a self-link.

- [Structure] Remove the broken heading "##### )" before the polar-normalization example and the bare "**)**" before the transformation exercises; give them descriptive headings, and note that the exercise numbering skips from 2 to 4.
- [Structure] "Joint continuous distributions" is defined twice (once under its own heading and again under the bold "Joint continuous distributions" paragraph); merge them, and remove the stray bold line "Joint distributions and independence ·" with its self-link to [[#Joint distributions and independence]].
- [Example] The $f(x,y)=x+y$ covariance calculation stops at $\int_0^1(y/3+y^2/2)\,dy$; finish it: $E[XY]=1/3$, $E[X]=E[Y]=7/12$, so $\operatorname{Cov}(X,Y)=1/3-49/144=-1/144$, a useful small negative example.
- [Example] In the transformation exercise 2, name the result: $W=X^{1/\alpha}/\lambda$ is Weibull with shape $\alpha$ and scale $1/\lambda$, linking to [[Continuous probability models#Weibull distribution]].
- [Graph] Add a 3D surface plot of the joint density $f(x,y)=x+y$ on $[0,1]^2$, and a 2D plot of its marginal $x+1/2$, so the "Linear marginal density" figure has a computed counterpart.
- [Structure] Units $\unit{min}$ appear in the call-center and phone-booth examples; add a physical-quantities table entry for $T$ and $X$ (waiting time, min) and $\lambda$ (rate, min$^{-1}$) per the vault convention.

### N0338

Note: [[Large numbers and normal approximation problems|Large numbers and normal approximation problems]]  
Priority: high · Graph: yes · Manim: yes

Mostly correct worked problems on Chebyshev, the LLN, and the CLT, but the note duplicates material from the bootstrap note, has broken headings, and likely mislabels a temperature unit.

- [Correctness] In "Numerical summaries of data", the hourly temperatures $41$ to $58$ are labelled degrees Celsius; $58\,^\circ\mathrm C$ exceeds the world-record air temperature, so these are almost certainly degrees Fahrenheit. Check the source and fix the unit in the text and in the physical-quantities table ($\thermal{\bar x}_{11}\approx\quantity{44.7}{{}^\circ F}$).
- [Example] In "Roulette example", note that for $n=34$ the exact probability of being ahead is $P(\text{at least one win})=1-(37/38)^{34}\approx0.596$, far from the normal value $0.48$; this shows that the CLT is unreliable for a skewed payoff with few trials.
- [Structure] Remove the broken "##### )" and bare "**)**" headings (five occurrences) and the duplicated sentence "The preceding bound $\sigma^2/(n\varepsilon^2)$ tends to zero" after the WLLN paragraph.
- [Structure] The practice-midterm items 1a–1c, 2, and 3 duplicate "Practice midterm 2" in [[Bootstrap intervals and likelihood examples]], and item 2 here has no solution; keep one copy and link to it.
- [Graph] Add a 2D plot comparing the $\operatorname{Bin}(41,0.55)$ PMF with the $N(22.55,10.1475)$ density on $10\le x\le35$, shading the region $x\ge20.5$, to illustrate the continuity correction in "Approximating binomial probabilities".
- [Manim] Animate the CLT with the uniform-population example: histograms of means of $n=1,2,5,30$ uniform draws morph into a bell centred at $0.5$ with width shrinking as $1/\sqrt{12n}$.

### N0339

Note: [[Likelihood and validation|Likelihood and validation]]  
Priority: low · Graph: yes · Manim: no

Short, correct bridging note on geometric likelihood and cross-validation that is clear but terse.

- [Graph] Add a 2D plot of the log likelihood $\ell(p)=3\ln p+3\ln(1-p)$ for the data $w=(1,2,3)$ on $0.05\le p\le0.95$, marking the maximum at $\hat p=1/2$ and the frequency estimate $1/3$.
- [Example] In "Inference and prediction", add a tiny 3-fold cross-validation table (fold, training fit, held-out error) to make the averaging rule concrete.

### N0340

Note: [[Measurement uncertainty|Measurement uncertainty]]  
Priority: low · Graph: yes · Manim: no

Clear, rigorous, and correctly computed introduction to error versus uncertainty, Type A/B evaluation, inverse-variance weighting, and expanded uncertainty.

- [Graph] In "Probability density of an error model", add a 2D plot of the uniform density on $[-a,a]$ with $a=1$ and a normal density with the same standard deviation $1/\sqrt3$, to show that equal standard uncertainty does not mean equal bounds.
- [Intuition] In "Direct observations of unequal accuracy", add one sentence noting that the combined uncertainty $0.894$ is smaller than the best single input uncertainty $1$, which is the payoff of weighting.

### N0341

Note: [[Propagation and uncertainty budgets|Propagation and uncertainty budgets]]  
Priority: low · Graph: yes · Manim: no

Correct and well-motivated treatment of first-order propagation, covariances, and limits, with a verified budget and exact check.

- [Graph] For the $Y=X^2$ failure case in "Error analysis and limitations", plot $y=x^2$ on $-2\le x\le2$ with the tangent line at $x=0$ (slope zero) and at $x=1$, showing why first-order propagation fails at a stationary point.
- [Example] Complete the $Y=X^2$, $x=0$ case with the exact result: if $X\sim N(0,u^2)$ then $\operatorname{Var}(X^2)=2u^4$, so the true standard uncertainty is $\sqrt2u^2$ although the first-order estimate is zero.

### N0342

Note: [[Samples and descriptive statistics|Samples and descriptive statistics]]  
Priority: low · Graph: yes · Manim: no

Clear, correct description of populations, samples, frequency tables, and summaries with a well-chosen worked example.

- [Graph] Add a 2D step plot of the empirical CDF $F_n$ for the worked sample $2,2,3,5,8$ on $0\le x\le10$, with jumps of $2/5$ at 2 and $1/5$ at 3, 5, and 8, marking $F_n(4)=3/5$.
- [Example] Add the first and third quartiles and IQR for the worked sample under one stated convention (e.g. R type 7: $Q_1=2$, $Q_3=5$, IQR $=3$) so the quantile paragraph has a number.

### N0343

Note: [[Sampling distributions|Sampling distributions]]  
Priority: low · Graph: yes · Manim: no

Correct, concise construction of chi-squared, t, and F distributions with good warnings about assumptions.

- [Graph] Add a 2D plot of $\chi^2_\nu$ densities for $\nu=1,3,8$ on $0\le x\le20$ and a second plot of $t_1$, $t_5$, and $N(0,1)$ densities on $-4\le x\le4$ to show skew and heavy tails.
- [Example] In "Worked example: identify the reference law", add the upper-tail probability of the observed statistic, $P(\chi^2_8\ge12)\approx0.151$, so the reader sees how the table comparison is concluded.

### N0344

Note: [[Correlation and regression models|Correlation and regression models]]  
Priority: low · Graph: yes · Manim: no

Clear, correct introduction to correlation and least squares with a fully checked worked example.

- [Graph] In "Worked example", plot the points $(0,1),(1,2),(2,2)$, the fitted line $\hat y=7/6+x/2$ on $-0.5\le x\le2.5$, the mean point $(1,5/3)$, and vertical residual segments.
- [Graph] Add a plot of the zero-correlation example $(-1,1),(0,0),(1,1)$ together with $y=x^2$ to make the curved-relationship warning visual.

### N0345

Note: [[Large numbers and stochastic processes|Large numbers and stochastic processes]]  
Priority: low · Graph: yes · Manim: yes

Clear, correct overview of the weak law, the CLT, Markov chains, and Poisson processes with sound caveats.

- [Graph] In "Worked example: two states", plot the A-probability of $v_n$ for $n=0..10$ ($1,0.8,0.7,0.65,\ldots$) converging to $0.6$; the deviation halves each step because the second eigenvalue is $0.5$.
- [Manim] Animate Bernoulli's law: several running relative-frequency paths $R_n$ for $p=1/2$ over $n=1..1000$ inside a shrinking band $1/2\pm1.96\sqrt{1/(4n)}$, showing concentration without monotone improvement.
- [Intuition] In "Worked example: two states", mention that the second eigenvalue $0.5$ gives the convergence rate $|v_n(A)-0.6|=0.4\cdot0.5^n$, which makes "approaches that vector" quantitative.

### N0346

Note: [[Likelihood estimation and Monte Carlo modeling problems|Likelihood estimation and Monte Carlo modeling problems]]  
Priority: high · Graph: yes · Manim: yes

The likelihood and Monte Carlo derivations are correct, but the physical-quantities table belongs to other notes, a section link points to the wrong place, and several fragments are unfinished.

- [Correctness] The "Physical quantities" table lists symbols with wrong meanings for this note: $M$ is the Monte Carlo hit count (not a carrying capacity), $K$ is the MSE constant in $K/N$ (not a koala population), $\lambda$ is the log-likelihood (not a Lyapunov exponent), and $y_i$, $x,y$, $s$ (age groups, ingredients, protein surplus) do not occur; replace it with a table for the quantities actually used (e.g. height $x_i$ in in) or remove it.
- [Correctness] In "Trapezoidal rule", the sentence "The handwritten expectation omits the square, which is required by the calculation on [[#Trapezoidal rule|the section on Trapezoidal rule]]" links to its own section; the squared-error calculation is in "#Expected squared error", so retarget the link.
- [Simplify] In the variance derivative, "$d\log((2\pi k)^{1/2})/dk=\pi/(2\pi k)$" is an odd intermediate; write $\tfrac12\cdot\tfrac{2\pi}{2\pi k}=\tfrac1{2k}$.
- [Structure] Remove or collapse transcription fragments that carry no content: the plotting code fragment, the crossed-out traffic list, the dangling distribution table (outcomes 1, 2, 3, 100), the margin Bayes rule, and "$N\ge m$ ... $N(n-1)/2$".
- [Example] "Pairwise team ratings" and "Lagrange multipliers" stop at the setup; finish the two-team case ($\hat p_1=w_1/(w_1+w_2)$ via a Lagrange multiplier on $p_1+p_2=1$) so the sections deliver a result.
- [Graph] Add a 2D log-log-style plot of error versus $N$ for Monte Carlo ($N^{-1/2}$) and trapezoidal rule in $d=1,2,4,8$ ($N^{-2/d}$), on $10\le N\le10^6$, illustrating the crossover at $d=4$.
- [Manim] Animate Monte Carlo estimation of $\pi$: random points fill the square of side 2, points inside the unit disk are coloured, and the running estimate $4m/N$ settles with fluctuations of order $N^{-1/2}$.

### N0347

Note: [[Markov models and population dynamics|Markov models and population dynamics]]  
Priority: high · Graph: yes · Manim: yes

The Markov, logistic, competition, and predator-prey calculations are correct, but the physical-quantities table includes many symbols from other notes and conflicts with the note's own symbols.

- [Correctness] The "Physical quantities" table lists $\tau$ as "total population" (here $\tau_{ij}$ are hitting times), $t$ as "iron surplus" (here $t$ is time), and $T$, $\lambda$, $x$, $y$, $s$ (sampling period, Lyapunov exponent, ingredients, protein) which never occur; remove these rows.
- [Correctness] Symbol clash: $\beta$ is the logistic crowding coefficient $\alpha/M$ (units s$^{-1}$) and also the predator-effect coefficient in $\alpha R(1-\beta W)$ (dimensionless), and both appear as separate rows in the table; rename one (e.g. $b$ for the predator effect).
- [Example] In "A six-state illness model", add the conclusion: state 6 (Dead) is absorbing and reachable from every state, so the unique stationary distribution is $(0,0,0,0,0,1)$; otherwise the section ends with only the equation.
- [Structure] Remove the stray "probability calculation at the top of the page" ($E(p_1)$ with uniform $p_1,p_2$) in the logistic section, and reduce the many "the handwritten line..." remarks to a single source callout.
- [Graph] Add a 2D plot of the logistic solution $M/(1+e^{-\alpha(t-t_0)})$ with $M=1,\alpha=1,t_0=0$ on $-6\le t\le6$, marking the inflection point $(t_0,M/2)$, and a vector-field phase-plane plot of the predator-prey system with $\alpha=\delta=1$, $\beta=\gamma=1$ on $0\le R,W\le3$ showing closed orbits around $(1,1)$.
- [Manim] Animate the predator-prey phase plane: a point traces a closed orbit around $(1/\gamma,1/\beta)$ while a linked time plot shows $R(t)$ and $W(t)$ oscillating with a phase lag.

### N0348

Note: [[Monte Carlo simulation|Monte Carlo simulation]]  
Priority: low · Graph: yes · Manim: yes

Clear, correct, and well-caveated introduction to Monte Carlo estimation, inverse-CDF sampling, and integration error.

- [Graph] In "Estimate an area and its sampling error together", plot the quarter unit circle $y=\sqrt{1-x^2}$ on $[0,1]$ inside the unit square, with a fixed set of illustrative sample points coloured by hit or miss.
- [Manim] Animate inverse-CDF sampling for the exponential: a uniform value $u$ on the vertical axis is mapped horizontally to the CDF $1-e^{-rx}$ and down to $x=-\ln(1-u)/r$, and the resulting points build an exponential histogram.

### N0349

Note: [[Regression, validation, and goodness of fit|Regression, validation, and goodness of fit]]  
Priority: medium · Graph: yes · Manim: no

Correct pieces on least squares, cross-validation, a speed-trap test, intervals, and Pearson's chi-square, but the order is fragmented and the chi-square example stops before the test.

- [Structure] Replace the broken "##### )" and bare "**)**" headings with descriptive ones, merge the duplicated least-squares paragraphs (the one under "Linear least-squares regression" and the one after the broken heading), and remove the orphan lines about t.test and "item 2, a regression model through the origin" or complete the latter with $\hat\beta=\sum x_iy_i/\sum x_i^2$.
- [Correctness] In "Traffic accidents", the note states the $\chi^2_{k-1}$ reference for specified probabilities, but here $\mu$ is estimated from the data, so the reference is $\chi^2_{k-1-1}=\chi^2_1$; add this and finish the test: $T\approx1.34$, $p\approx0.25$, so the Poisson model is not rejected (also note that $E_3\approx4.2<5$).
- [Correctness] Symbol clash: $\alpha$ is the regression intercept in $Y_i=\alpha+\beta x_i+U_i$ and also the significance level in the $(1-\alpha)$ intervals and $z_{\alpha/2}$; $a$ is both the speed-trap cutoff and an interval endpoint. Rename the intercept (e.g. $\beta_0$) or the endpoints.
- [Graph] For the speed trap, plot the measured-speed densities $N(70,4)$ and $N(75,4)$ on $62\le m\le82$ with the cutoff $a=73.3$, shading the Type I area $0.05$ under the first and the power $P(M>73.3\mid S=75)\approx0.80$ under the second.
