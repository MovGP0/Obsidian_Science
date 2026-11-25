---
title: "Note Improvement Tracker – 01 Mathematics/10 Numerical Methods and Optimization"
---

> [!TLDR]
> This note tracks the review of the 52 notes in `01 Mathematics/10 Numerical Methods and Optimization`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 15 possible errors or notation conflicts. 15 of them are verified (14 fixed, 1 partly); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N0505|N0505]] Bisection, fixed-point, Newton, and secant iterations: Symbol clashes: $\ell$ is the order exponent in "Rates of convergence" ($e_h=O(h^\ell)$), the multiplier function in $g(x)=x-\ell(x)f(x)$, and the contraction constant in "Fixed-point theorem" (whose proof then switches to $q$); $\alpha$ is the limit in $\alpha_n\to\alpha$, the order in Definition 2.7, and the Homework 4 step $\alpha=1/100$; "Introduction to simple fixed-point iteration" redefines $g(x)=x$ as the identity after $g$ was the iteration map. Use one letter per meaning (e.g. $q$ contraction, $\alpha$ order only, $\omega(x)$ multiplier, $\mathrm{id}$ or $y=x$ for the line). **Partly:** Confirmed for the multiplier, contraction constant, Homework step and identity map: renamed multiplier ell(x) to omega(x), theorem constant ell to q (matches proof), Homework step alpha to mu, identity g(x)=x to id(x) and line y=x; kept alpha_n to alpha in the Definition 1.18 section (separate textbook section, alpha is not reused there)
- [[#N0505|N0505]] Bisection, fixed-point, Newton, and secant iterations: The Physical quantities table lists $x$ as time in seconds from a "particle example" that does not exist in this note; the note defines no physical quantities, so remove the section. **Fixed:** Removed the Physical quantities section (note defines no physical quantities)
- [[#N0510|N0510]] Taylor error bounds and finite-digit arithmetic: "Choosing a degree for sine": $(\pi/4)^{n+1}/(n+1)!$ equals $3.59\times10^{-6}$ at $n=7$, $3.13\times10^{-7}$ at $n=8$ and $2.46\times10^{-8}$ at $n=9$, i.e. orders $10^{-6},10^{-7},10^{-8}$, not $10^{-5},10^{-6},10^{-7}$ as stated; the conclusion $n=8$ is right. **Fixed:** Changed orders to 10^-6, 10^-7, 10^-8 at n=7,8,9 (python: 3.59e-6, 3.13e-7, 2.46e-8)
- [[#N0510|N0510]] Taylor error bounds and finite-digit arithmetic: "Example 3 on [[#Discretization error in a derivative|...]]" links to the forward-difference section, which does not contain the $\sin x$ about $\pi/2$ example; remove the link (and the duplicate "Example 3" label used again for $\cos x$). **Fixed:** Replaced the linked Example 3 label with plain text One example; kept Example 3 for the cosine example
- [[#N0510|N0510]] Taylor error bounds and finite-digit arithmetic: The Physical quantities table (time, velocity, height, weight with \mechanical{}) describes nothing in this note; remove the section. **Fixed:** Removed the Physical quantities section
- [[#N0510|N0510]] Taylor error bounds and finite-digit arithmetic: In the forward-difference table, recomputation in IEEE double gives $4.62\times10^{-8}$ at $h=10^{-7}$; $4.66\times10^{-8}$ is the predicted truncation error $0.466h$, not the observed value. **Fixed:** Changed table value to 4.62e-8 (python check); also corrected h=1e-10 row from 1.66e-7 to 1.67e-7 (computed 1.6697e-7)
- [[#N0513|N0513]] Chebyshev nodes and least-squares approximation: The Physical quantities table lists $x$ as time in seconds from a nonexistent particle example; remove the section. **Fixed:** Removed the Physical quantities section
- [[#N0518|N0518]] Finite differences and Richardson calculations: Symbol clash: $\mechanical{f}$ is a particle position in "Approximating derivatives" (and the table gives $x$ as time in s while saying it has no unit), but $f$ is a generic function in the rest of the note; drop the particle framing and the Physical quantities table, or confine both to that paragraph. **Fixed:** Confined the particle framing to its paragraph: position is now s(t) at times t, the backward-difference remark says f=s, and the table rows are t and s(t)
- [[#N0521|N0521]] Least-squares and numerical calculus review problems: The Physical quantities table lists only $x$ as time in seconds, while the note uses $\mechanical{x},\mechanical{y}$ for height and weight and $x$ elsewhere as a plain variable; remove the section or describe the regression variables correctly. **Fixed:** Replaced the time row with height x (m) and weight y, y-hat (N) rows for the regression example, noting the data give no units
- [[#N0524|N0524]] Polynomial and spline interpolation problems: The Physical quantities table lists $x$ as time in seconds from a nonexistent particle example; remove the section. **Fixed:** Removed the Physical quantities section
- [[#N0528|N0528]] Trapezoidal, Simpson, and Gaussian quadrature: The Physical quantities table lists $x$ as time in seconds from a nonexistent particle example; remove the section. **Fixed:** Removed the Physical quantities section
- [[#N0537|N0537]] A product-mix simplex tableau: The Physical quantities table includes $x,y$ (ounces of soup) and $s$ (protein surplus), which do not occur here; keep only $s_1,s_2$ (and add the component counts $x_i$ if desired). **Fixed:** Removed the x, y and s rows; kept s1, s2 (component counts are dimensionless, not added)
- [[#N0539|N0539]] Constrained estimation and model fitting: The Physical quantities table (Lyapunov exponent, ounces of soup, protein surplus) describes nothing in this note, where $\lambda$ is a Lagrange multiplier; remove the section. **Fixed:** Removed the Physical quantities section (lambda is a Lagrange multiplier)
- [[#N0545|N0545]] Linear programming and gradient-search problems: The Physical quantities table describes population models (population $R$, total population $\tau$, sampling period $T$, Lyapunov exponent $\lambda$), but here $R$ is the search-disk radius, $\tau$ a step length, $T$ the search horizon and $\lambda$ the convex-combination parameter; remove or rewrite it. **Fixed:** Rewrote the table: soup amounts x, y, surpluses u, w, search time t, center position x(t), y(t), radius R, radial distance r, density p, horizon T
- [[#N0545|N0545]] Linear programming and gradient-search problems: Symbol clashes: $t$ is the iron surplus in the soup example, the third slack in the simplex example and time in the spiral search; $s$ is a surplus in the soup example and a slack in the simplex example. Rename per example. **Fixed:** Renamed soup surpluses s, t to u, w and simplex slacks r, s, t to s1, s2, s3; t now means time only in the examples

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N0505 | [[Bisection, fixed-point, Newton, and secant iterations\|01 Error, Floating Point, and Root Finding/Bisection, fixed-point, Newton, and secant iterations]] | Analyzed | high | yes | yes | [[#N0505\|View]] |
| N0506 | [[Floating-point arithmetic and error\|01 Error, Floating Point, and Root Finding/Floating-point arithmetic and error]] | Analyzed | low | yes | no | [[#N0506\|View]] |
| N0507 | [[Numerical mathematics - Catalogue Guide\|01 Error, Floating Point, and Root Finding/Numerical mathematics - Catalogue Guide]] | Analyzed | low | no | no | [[#N0507\|View]] |
| N0508 | [[Polynomial root algorithms\|01 Error, Floating Point, and Root Finding/Polynomial root algorithms]] | Analyzed | low | yes | no | [[#N0508\|View]] |
| N0509 | [[Scalar root finding\|01 Error, Floating Point, and Root Finding/Scalar root finding]] | Analyzed | low | yes | yes | [[#N0509\|View]] |
| N0510 | [[Taylor error bounds and finite-digit arithmetic\|01 Error, Floating Point, and Root Finding/Taylor error bounds and finite-digit arithmetic]] | Analyzed | high | yes | no | [[#N0510\|View]] |
| N0511 | [[Bezier curves and surfaces\|02 Interpolation, Approximation, and Quadrature/Bezier curves and surfaces]] | Analyzed | low | yes | yes | [[#N0511\|View]] |
| N0512 | [[Bicubic spline algorithms\|02 Interpolation, Approximation, and Quadrature/Bicubic spline algorithms]] | Analyzed | low | yes | no | [[#N0512\|View]] |
| N0513 | [[Chebyshev nodes and least-squares approximation\|02 Interpolation, Approximation, and Quadrature/Chebyshev nodes and least-squares approximation]] | Analyzed | high | yes | no | [[#N0513\|View]] |
| N0514 | [[Choosing and rectifying empirical curves\|02 Interpolation, Approximation, and Quadrature/Choosing and rectifying empirical curves]] | Analyzed | low | yes | no | [[#N0514\|View]] |
| N0515 | [[Cubic spline algorithms\|02 Interpolation, Approximation, and Quadrature/Cubic spline algorithms]] | Analyzed | low | yes | no | [[#N0515\|View]] |
| N0516 | [[Empirical powers and exponential models\|02 Interpolation, Approximation, and Quadrature/Empirical powers and exponential models]] | Analyzed | low | yes | no | [[#N0516\|View]] |
| N0517 | [[Exponential sums and power products\|02 Interpolation, Approximation, and Quadrature/Exponential sums and power products]] | Analyzed | low | yes | no | [[#N0517\|View]] |
| N0518 | [[Finite differences and Richardson calculations\|02 Interpolation, Approximation, and Quadrature/Finite differences and Richardson calculations]] | Analyzed | high | yes | no | [[#N0518\|View]] |
| N0519 | [[Fitting combined exponential models\|02 Interpolation, Approximation, and Quadrature/Fitting combined exponential models]] | Analyzed | low | yes | no | [[#N0519\|View]] |
| N0520 | [[Gaussian and Romberg quadrature\|02 Interpolation, Approximation, and Quadrature/Gaussian and Romberg quadrature]] | Analyzed | low | yes | no | [[#N0520\|View]] |
| N0521 | [[Least-squares and numerical calculus review problems\|02 Interpolation, Approximation, and Quadrature/Least-squares and numerical calculus review problems]] | Analyzed | high | yes | no | [[#N0521\|View]] |
| N0522 | [[Minimax approximation\|02 Interpolation, Approximation, and Quadrature/Minimax approximation]] | Analyzed | low | yes | yes | [[#N0522\|View]] |
| N0523 | [[Numerical derivatives and extrapolation\|02 Interpolation, Approximation, and Quadrature/Numerical derivatives and extrapolation]] | Analyzed | medium | yes | no | [[#N0523\|View]] |
| N0524 | [[Polynomial and spline interpolation problems\|02 Interpolation, Approximation, and Quadrature/Polynomial and spline interpolation problems]] | Analyzed | high | yes | no | [[#N0524\|View]] |
| N0525 | [[Polynomial interpolation algorithms\|02 Interpolation, Approximation, and Quadrature/Polynomial interpolation algorithms]] | Analyzed | low | yes | yes | [[#N0525\|View]] |
| N0526 | [[Quadratic and reciprocal empirical models\|02 Interpolation, Approximation, and Quadrature/Quadratic and reciprocal empirical models]] | Analyzed | low | yes | no | [[#N0526\|View]] |
| N0527 | [[Quadrature from interpolation\|02 Interpolation, Approximation, and Quadrature/Quadrature from interpolation]] | Analyzed | low | yes | no | [[#N0527\|View]] |
| N0528 | [[Trapezoidal, Simpson, and Gaussian quadrature\|02 Interpolation, Approximation, and Quadrature/Trapezoidal, Simpson, and Gaussian quadrature]] | Analyzed | high | yes | no | [[#N0528\|View]] |
| N0529 | [[Trigonometric interpolation and FFT\|02 Interpolation, Approximation, and Quadrature/Trigonometric interpolation and FFT]] | Analyzed | low | yes | no | [[#N0529\|View]] |
| N0530 | [[Boundary value algorithms\|03 Numerical Linear Algebra and Differential Equations/Boundary value algorithms]] | Analyzed | low | yes | yes | [[#N0530\|View]] |
| N0531 | [[Direct linear system methods\|03 Numerical Linear Algebra and Differential Equations/Direct linear system methods]] | Analyzed | low | yes | no | [[#N0531\|View]] |
| N0532 | [[Initial value algorithms\|03 Numerical Linear Algebra and Differential Equations/Initial value algorithms]] | Analyzed | low | yes | yes | [[#N0532\|View]] |
| N0533 | [[Iterative system methods\|03 Numerical Linear Algebra and Differential Equations/Iterative system methods]] | Analyzed | low | yes | no | [[#N0533\|View]] |
| N0534 | [[Least-squares algorithms\|03 Numerical Linear Algebra and Differential Equations/Least-squares algorithms]] | Analyzed | low | yes | no | [[#N0534\|View]] |
| N0535 | [[Numerical solution of initial value problems\|03 Numerical Linear Algebra and Differential Equations/Numerical solution of initial value problems]] | Analyzed | low | yes | no | [[#N0535\|View]] |
| N0536 | [[Partial differential equation algorithms\|03 Numerical Linear Algebra and Differential Equations/Partial differential equation algorithms]] | Analyzed | low | yes | yes | [[#N0536\|View]] |
| N0537 | [[A product-mix simplex tableau\|04 Linear, Nonlinear, and Discrete Optimization/A product-mix simplex tableau]] | Analyzed | medium | no | no | [[#N0537\|View]] |
| N0538 | [[Bases and simplex tableaux\|04 Linear, Nonlinear, and Discrete Optimization/Bases and simplex tableaux]] | Analyzed | low | yes | yes | [[#N0538\|View]] |
| N0539 | [[Constrained estimation and model fitting\|04 Linear, Nonlinear, and Discrete Optimization/Constrained estimation and model fitting]] | Analyzed | high | yes | no | [[#N0539\|View]] |
| N0540 | [[Direct search and unconstrained descent\|04 Linear, Nonlinear, and Discrete Optimization/Direct search and unconstrained descent]] | Analyzed | low | yes | yes | [[#N0540\|View]] |
| N0541 | [[Dynamic decisions and Bellman equations\|04 Linear, Nonlinear, and Discrete Optimization/Dynamic decisions and Bellman equations]] | Analyzed | low | no | no | [[#N0541\|View]] |
| N0542 | [[Evolution strategies\|04 Linear, Nonlinear, and Discrete Optimization/Evolution strategies]] | Analyzed | low | no | yes | [[#N0542\|View]] |
| N0543 | [[Feasible directions and projected gradients\|04 Linear, Nonlinear, and Discrete Optimization/Feasible directions and projected gradients]] | Analyzed | low | no | no | [[#N0543\|View]] |
| N0544 | [[Linear models and graphical solutions\|04 Linear, Nonlinear, and Discrete Optimization/Linear models and graphical solutions]] | Analyzed | low | no | no | [[#N0544\|View]] |
| N0545 | [[Linear programming and gradient-search problems\|04 Linear, Nonlinear, and Discrete Optimization/Linear programming and gradient-search problems]] | Analyzed | high | yes | no | [[#N0545\|View]] |
| N0546 | [[Nonlinear derivatives and Newton iteration\|04 Linear, Nonlinear, and Discrete Optimization/Nonlinear derivatives and Newton iteration]] | Analyzed | low | yes | no | [[#N0546\|View]] |
| N0547 | [[Nonlinear optimality and convexity\|04 Linear, Nonlinear, and Discrete Optimization/Nonlinear optimality and convexity]] | Analyzed | low | yes | no | [[#N0547\|View]] |
| N0548 | [[Numerical variational methods\|04 Linear, Nonlinear, and Discrete Optimization/Numerical variational methods]] | Analyzed | low | yes | no | [[#N0548\|View]] |
| N0549 | [[Optimization - Catalogue Guide\|04 Linear, Nonlinear, and Discrete Optimization/Optimization - Catalogue Guide]] | Analyzed | low | no | no | [[#N0549\|View]] |
| N0550 | [[Penalties barriers and cutting planes\|04 Linear, Nonlinear, and Discrete Optimization/Penalties barriers and cutting planes]] | Analyzed | low | yes | yes | [[#N0550\|View]] |
| N0551 | [[Purchasing and knapsack policies\|04 Linear, Nonlinear, and Discrete Optimization/Purchasing and knapsack policies]] | Analyzed | low | no | no | [[#N0551\|View]] |
| N0552 | [[Quadratic programs and complementarity methods\|04 Linear, Nonlinear, and Discrete Optimization/Quadratic programs and complementarity methods]] | Analyzed | low | yes | no | [[#N0552\|View]] |
| N0553 | [[Revised simplex and linear duality\|04 Linear, Nonlinear, and Discrete Optimization/Revised simplex and linear duality]] | Analyzed | low | yes | no | [[#N0553\|View]] |
| N0554 | [[Tours and sequencing\|04 Linear, Nonlinear, and Discrete Optimization/Tours and sequencing]] | Analyzed | low | no | no | [[#N0554\|View]] |
| N0555 | [[Transport assignment and allocation\|04 Linear, Nonlinear, and Discrete Optimization/Transport assignment and allocation]] | Analyzed | low | no | no | [[#N0555\|View]] |
| N0556 | [[Vector spaces affine sets and convexity\|04 Linear, Nonlinear, and Discrete Optimization/Vector spaces affine sets and convexity]] | Analyzed | low | yes | no | [[#N0556\|View]] |

## Suggestions

### N0505

Note: [[Bisection, fixed-point, Newton, and secant iterations|Bisection, fixed-point, Newton, and secant iterations]]  
Priority: high · Graph: yes · Manim: yes

Mathematically sound transcription (Newton and secant error constants check out), but it reads as a lecture log with symbol reuse, empty headings, and misplaced Taylor material.

- [Correctness] Symbol clashes: $\ell$ is the order exponent in "Rates of convergence" ($e_h=O(h^\ell)$), the multiplier function in $g(x)=x-\ell(x)f(x)$, and the contraction constant in "Fixed-point theorem" (whose proof then switches to $q$); $\alpha$ is the limit in $\alpha_n\to\alpha$, the order in Definition 2.7, and the Homework 4 step $\alpha=1/100$; "Introduction to simple fixed-point iteration" redefines $g(x)=x$ as the identity after $g$ was the iteration map. Use one letter per meaning (e.g. $q$ contraction, $\alpha$ order only, $\omega(x)$ multiplier, $\mathrm{id}$ or $y=x$ for the line).
- [Correctness] The Physical quantities table lists $x$ as time in seconds from a "particle example" that does not exist in this note; the note defines no physical quantities, so remove the section.
- [Structure] Move the Taylor-remainder examples ($R_2$ bound, $e^x$ about $a=1$, $e^\xi/5!$ bound), "Root-finding comparisons" (actually a chapter review list) and "Taylor polynomial example 1" to the Taylor note; fill or remove the empty headings "Fixed-point iteration" and "Proof of the fixed-point theorem" and the stray "2.3" numbering.
- [Simplify] Name the function behind $|R_2|=|x^3e^\xi(\cos\xi-\sin\xi)/3|$ ($f=e^x\sin x$, $f'''=2e^x(\cos x-\sin x)$), and finish the $g(x)=x^2+3/16$ example: fixed points $1/4$ and $3/4$, with $g'(1/4)=1/2$ (attracting) and $g'(3/4)=3/2$ (repelling).
- [Graph] Cobweb plot of $y=e^{-x}$ and $y=x$ on $[0,1.2]$ with iterates from $x_0=1$, plus a semilog plot of $|x_k-x^*|$ against $k$ for bisection, fixed point, Newton and secant on $x^3+4x^2-10$ starting from $[1,2]$.
- [Manim] Animate successive Newton tangents and secant lines on $x^3+4x^2-10$, with the error digits shown doubling (Newton) versus growing by about 1.6 (secant).

### N0506

Note: [[Floating-point arithmetic and error|Floating-point arithmetic and error]]  
Priority: low · Graph: yes · Manim: no

Clear, correct introduction to representation, error types, conditioning and stability with good worked cancellation examples.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF, as required by the vault skill.
- [Intuition] In "Conditioning versus stability" give a number for $f(x)=x-1$, e.g. $\kappa=|x/(x-1)|=1001$ at $x=1.001$, and tie it to the $\sqrt{10001}-100$ cancellation example.
- [Example] Add a binary64 illustration: $0.1+0.2\ne0.3$ and $1+2^{-53}$ rounding back to $1$ (ties to even) to make the difference between unit roundoff $2^{-53}$ and the gap $2^{-52}$ concrete.
- [Graph] Plot the relative rounding error $(\mathrm{fl}(x)-x)/x$ of the 3-digit decimal teaching format for $x\in[1,1000]$ on a log axis, showing the sawtooth bounded by $u=\tfrac12 10^{-2}$.

### N0507

Note: [[Numerical mathematics - Catalogue Guide|Numerical mathematics - Catalogue Guide]]  
Priority: low · Graph: no · Manim: no

Well-organized hub with a sound bracket example and error-budget practice.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.
- [Links] The guide never links the worked lecture notes in this folder (Bisection, fixed-point, Newton, and secant iterations; Taylor error bounds and finite-digit arithmetic; Chebyshev nodes and least-squares approximation; Finite differences and Richardson calculations; Trapezoidal, Simpson, and Gaussian quadrature; Polynomial and spline interpolation problems; Least-squares and numerical calculus review problems; Numerical derivatives and extrapolation; Numerical solution of initial value problems); add them to the learning order or a "worked lecture notes" list.

### N0508

Note: [[Polynomial root algorithms|Polynomial root algorithms]]  
Priority: low · Graph: yes · Manim: no

Concise and correct; Horner, Cauchy bound, deflation and root conditioning are all verified by the worked numbers.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.
- [Example] Illustrate the repeated-root remark numerically: changing $a_0$ of $(x-1)^2$ by $-10^{-8}$ moves the roots to $1\pm10^{-4}$, a perturbation $10^4$ times larger than the coefficient change.
- [Graph] Plot $p(t)=t^3-2t-2$ on $[-1,3]$ with the tangent at $t=2$ hitting the axis at $1.8$, and mark the Cauchy bound $|t|\le3$.

### N0509

Note: [[Scalar root finding|Scalar root finding]]  
Priority: low · Graph: yes · Manim: yes

Clear and correct; residual versus error, false position, contraction and Newton are well motivated with checked examples.

- [Simplify] The double-root section switches from $r$ to $\alpha$ for the root, and the "Source material ... Math 130" sentence sits mid-note; use $r$ throughout and move the source line to a Sources section.
- [Example] Add the numbers for the double-root case: Newton on $(x-1)^2$ from $x_0=2$ gives $1.5, 1.25, 1.125$, and the multiplicity-corrected step gives $1$ at once.
- [Graph] Plot $x^2-2$ on $[1,2]$ with the two false-position secants (zeros $4/3$ and $7/5$) and the first bisection midpoints, showing the fixed right endpoint.
- [Manim] Animate regula falsi with its stuck endpoint against bisection on the same bracket, with the bracket widths shown side by side.

### N0510

Note: [[Taylor error bounds and finite-digit arithmetic|Taylor error bounds and finite-digit arithmetic]]  
Priority: high · Graph: yes · Manim: no

Most derivations are correct, but the note mixes course logistics with content, misquotes a bound, carries a wrong internal link, and has a meaningless physical-quantities table.

- [Correctness] "Choosing a degree for sine": $(\pi/4)^{n+1}/(n+1)!$ equals $3.59\times10^{-6}$ at $n=7$, $3.13\times10^{-7}$ at $n=8$ and $2.46\times10^{-8}$ at $n=9$, i.e. orders $10^{-6},10^{-7},10^{-8}$, not $10^{-5},10^{-6},10^{-7}$ as stated; the conclusion $n=8$ is right.
- [Correctness] "Example 3 on [[#Discretization error in a derivative|...]]" links to the forward-difference section, which does not contain the $\sin x$ about $\pi/2$ example; remove the link (and the duplicate "Example 3" label used again for $\cos x$).
- [Correctness] The Physical quantities table (time, velocity, height, weight with \mechanical{}) describes nothing in this note; remove the section.
- [Correctness] In the forward-difference table, recomputation in IEEE double gives $4.62\times10^{-8}$ at $h=10^{-7}$; $4.66\times10^{-8}$ is the predicted truncation error $0.466h$, not the observed value.
- [Simplify] Remove grading percentages, the midterm date, "previous page" references and the repeated decimal-machine-number paragraph; move the nonlinear-equation examples and stopping tests to the root-finding notes.
- [Graph] Log-log plot of forward-difference error for $\sin$ at $1.2$ for $h\in[10^{-12},10^{-1}]$: truncation line $0.466h$, roundoff curve $\approx\varepsilon/h$ with $\varepsilon=2^{-52}$, their sum, and the table values as points; optionally $e^x$ with $P_1,\ldots,P_4$ on $[-1,1]$.

### N0511

Note: [[Bezier curves and surfaces|Bezier curves and surfaces]]  
Priority: low · Graph: yes · Manim: yes

Clear and correct treatment of Bernstein bases, de Casteljau and tensor-product patches with verified examples.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.
- [Example] Write out the subdivision at $t=1/2$ for the quadratic: left control points $(0,0),(1/2,1),(1,1)$ and right $(1,1),(3/2,1),(2,0)$.
- [Graph] Plot the practice cubic with control polygon $(0,0),(1,0),(1,1),(2,1)$ and its endpoint tangent vectors $(3,0)$.
- [Manim] Animate de Casteljau for the cubic as $t$ sweeps $0\to1$: the intermediate points slide along the polygon edges and the final point traces the curve.

### N0512

Note: [[Bicubic spline algorithms|Bicubic spline algorithms]]  
Priority: low · Graph: yes · Manim: no

Correct and careful; tensor products, the Hermite patch, scaling and the plane fit are all verified.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.
- [Graph] 3D surface plot of the fitted plane $-1/4+3x/2+3y/2$ over $[0,1]^2$ with the corner observations $0,1,1,3$ and residual sticks; optionally a Hermite patch with nonzero corner slopes.

### N0513

Note: [[Chebyshev nodes and least-squares approximation|Chebyshev nodes and least-squares approximation]]  
Priority: high · Graph: yes · Manim: no

The calculations are correct (both cubic interpolants reproduce), but headings are mislabelled, the comparison is never concluded, and lecture logistics clutter the note.

- [Correctness] The Physical quantities table lists $x$ as time in seconds from a nonexistent particle example; remove the section.
- [Structure] The heading "Least-squares approximations" actually covers Chebyshev nodes on $[a,b]$ and the $xe^x$ comparison; rename it and move the review bullets, textbook page list and exercise table out of the content (another note links to this heading, so update that link).
- [Simplify] Replace "the weight on the preceding page" by $w(x)=1/\sqrt{1-x^2}$ and state $\alpha_0=\pi$, $\alpha_j=\pi/2$ ($j\ge1$); avoid reusing $\alpha,\beta$ in the cosine identity.
- [Example] Conclude the comparison: max error on $[0,1.5]$ is about $0.031$ for equally spaced nodes and $0.021$ for mapped Chebyshev nodes, within the scaled bound $(0.75)^4\,5.5e^{1.5}/(2^3\,4!)\approx0.041$; also give the mapped nodes accurately ($1.443, 1.037, 0.463, 0.057$).
- [Graph] Plot $f-P_3$ and $f-\widetilde P_3$ on $[0,1.5]$ to show equioscillation, and $T_0,\ldots,T_4$ on $[-1,1]$.

### N0514

Note: [[Choosing and rectifying empirical curves|Choosing and rectifying empirical curves]]  
Priority: low · Graph: yes · Manim: no

Clear, correct and well paced introduction to model choice and rectification.

- [Structure] The file is stored with CRLF line endings; save with LF.
- [Example] Add a noisy three-point example where fitting $\ln y$ and fitting $y$ give visibly different parameters, to support the relative-versus-absolute error remark.
- [Graph] Native plot of $(1,3),(2,12),(4,48)$ and $y=3x^2$ on linear axes next to log-log axes, complementing the static SVG.

### N0515

Note: [[Cubic spline algorithms|Cubic spline algorithms]]  
Priority: low · Graph: yes · Manim: no

Correct and compact; the second-derivative formulation and worked natural spline check out.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.
- [Intuition] Connect "natural" to minimal bending energy $\int s''^2$ (the drafting-spline picture) when introducing the end conditions, rather than only in the smoothing section.
- [Graph] Plot the natural spline through $(0,0),(1,1),(2,0)$ against the interpolating parabola $2x-x^2$ (value $3/4$ versus $11/16$ at $x=1/2$) and a clamped spline with zero end slopes.

### N0516

Note: [[Empirical powers and exponential models|Empirical powers and exponential models]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; completing the square and all worked fits verify.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.
- [Links] The Bronshtein citation points to a djvu.online file-sharing copy; cite the published Handbook of Mathematics (Bronshtein, Semendyayev et al., Springer) instead.
- [Graph] Plot $y=3e^{-x^2}$ with its three data points and $ae^{bx+cx^2}$ for $c=-1$ and $c=+0.3$ on $[-3,3]$, plus the same data on a semilog axis showing the parabola.

### N0517

Note: [[Exponential sums and power products|Exponential sums and power products]]  
Priority: low · Graph: yes · Manim: no

Correct and readable; the derivative-free peak argument is neat and verified.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.
- [Graph] Plot $x^pe^{-x}$ for $p=1,2,3$ on $[0,8]$ with peaks at $x=p$, and $2e^{3x}+5e^x$ against $2e^{3x}$ and $5e^x$ on $[-3,1]$ with a log $y$ axis to show which term dominates at each end.

### N0518

Note: [[Finite differences and Richardson calculations|Finite differences and Richardson calculations]]  
Priority: high · Graph: yes · Manim: no

The derivations and coefficients are correct, but quadrature fragments, handwritten-value commentary, and three separate Richardson derivations make it hard to follow.

- [Correctness] Symbol clash: $\mechanical{f}$ is a particle position in "Approximating derivatives" (and the table gives $x$ as time in s while saying it has no unit), but $f$ is a generic function in the rest of the note; drop the particle framing and the Physical quantities table, or confine both to that paragraph.
- [Structure] The opening Gaussian-quadrature fragment ($\int_2^7x\cos x$) and the closing trapezoid/closed Newton–Cotes fragments belong in the quadrature notes; remove "next page" and "preceding page" artifacts.
- [Intuition] State that the tabulated data are $f(x)=e^{1.5x}$, so $f'(1.2)=1.5e^{1.8}\approx9.07447$; this makes the quoted errors $0.17229$ and $0.00892$ checkable. Add the missing results: $(2N(-h/2)+N(h))/3\approx9.0918$ (error $0.017$) and the three-step value $\approx9.0731$ (error $0.0014$).
- [Simplify] Replace the three separate Richardson derivations with one rule for first-order methods, $M\approx(rN(h/r)-N(h))/(r-1)$, where $r=4$ and $r=-2$ give the two cases in the note.
- [Graph] Log-log plot of the error against $h$ for the forward difference, the centered difference and first-order Richardson for $e^{1.5x}$ at $1.2$, with reference slopes 1 and 2.

### N0519

Note: [[Fitting combined exponential models|Fitting combined exponential models]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; the elimination formulas and the recurrence example verify, including the prediction check.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.
- [Links] The Bronshtein citation points to a djvu.online file-sharing copy; cite the published handbook instead.
- [Graph] Plot $y=2x^2e^{-x}$ on $[0,8]$ with the data at $x=1,2,4$ and the prediction at $3$, and $2\cdot2^x+3^x$ on a log axis showing the slope changing from $\ln2$ to $\ln3$.

### N0520

Note: [[Gaussian and Romberg quadrature|Gaussian and Romberg quadrature]]  
Priority: low · Graph: yes · Manim: no

Correct and efficient; the two-node derivation, Lobatto rule and the Romberg table all verify.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.
- [Example] Add a Romberg table for a non-polynomial integrand (e.g. $\int_0^1e^x\,dx$) so that convergence is visible rather than finite termination.
- [Graph] Semilog plot of absolute error against the number of function evaluations for Gauss–Legendre and composite trapezoid on $\int_{-1}^1e^x\,dx$, plus $P_2,P_3$ on $[-1,1]$ with their Gauss nodes marked.

### N0521

Note: [[Least-squares and numerical calculus review problems|Least-squares and numerical calculus review problems]]  
Priority: high · Graph: yes · Manim: no

A review page that duplicates other notes, leaves its main examples unfinished, and carries a wrong physical-quantities table.

- [Correctness] The Physical quantities table lists only $x$ as time in seconds, while the note uses $\mechanical{x},\mechanical{y}$ for height and weight and $x$ elsewhere as a plain variable; remove the section or describe the regression variables correctly.
- [Structure] The $(0,6),(1,0),(2,0)$ least-squares example duplicates the Chebyshev note, and the Richardson tables and derivations duplicate the Finite differences note; consolidate and link instead.
- [Example] Finish the open examples: the height–weight data give $\bar x=65.125$, $\bar y=120$, $b_1\approx4.706$, $b_0\approx-186.47$; the continuous fit of $e^x$ on $[-1,1]$ gives $a_0=\sinh1\approx1.1752$ and $a_1=3/e\approx1.1036$.
- [Simplify] Once correct values are given, drop the "PatrickJMT", "this page" and handwritten-value commentary (e.g. $7.08286876$, $9.06552213$); in "Trapezoid rule from the Lagrange interpolant" give the linear formula before the quadratic one.
- [Graph] Scatter plot of the height–weight data with the fitted line and vertical residual segments; $e^x$ with its least-squares line on $[-1,1]$.

### N0522

Note: [[Minimax approximation|Minimax approximation]]  
Priority: low · Graph: yes · Manim: yes

Clear and correct; alternation, Chebyshev extremality and a hand-sized Remez exchange are well explained.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.
- [Example] Add a nonconstant best line: for $e^x$ on $[0,1]$, $p(x)=(e-1)x+\tfrac12(e-(e-1)\ln(e-1))\approx1.718x+0.894$, with error $\approx0.106$ alternating at $0,\ln(e-1),1$.
- [Graph] Plot the error $x^2-1/2$ on $[-1,1]$ with the $\pm1/2$ band and the three alternation points, and $2^{1-k}T_k$ for $k=1,\ldots,4$.
- [Manim] Animate the Remez exchange for $x^2$ by a constant: the reference moves from $\{-1,1/2\}$ to $\{-1,0\}$ while the error curve and level $E$ update.

### N0523

Note: [[Numerical derivatives and extrapolation|Numerical derivatives and extrapolation]]  
Priority: medium · Graph: yes · Manim: no

A correct but very short summary with only a trivial example.

- [Example] Add a numeric case: for $e^x$ at $0$, $D_{0.1}\approx1.0016675$, $D_{0.05}\approx1.0004167$, and the extrapolation gives $0.99999979$, an error reduction from $10^{-3}$ to $2\times10^{-7}$.
- [Intuition] Explain why the factor is $4$: the centered difference has only even powers $h^2,h^4,\ldots$, whereas a one-sided difference would need $(2D_{h/2}-D_h)$.
- [Graph] Log-log plot of $|D_h-f'(0)|$ and the extrapolated error against $h\in[10^{-8},1]$ for $e^x$, showing slopes 2 and 4 and the roundoff upturn at small $h$.
- [Links] The Sources line has two links both labelled "Math 130"; label them by target note.

### N0524

Note: [[Polynomial and spline interpolation problems|Polynomial and spline interpolation problems]]  
Priority: high · Graph: yes · Manim: no

Long lecture log with correct core derivations, but it contains off-topic openings, an admittedly wrong divided-difference table, unfinished examples, and a wrong physical-quantities table.

- [Correctness] The Physical quantities table lists $x$ as time in seconds from a nonexistent particle example; remove the section.
- [Structure] The opening Taylor $P_4$ and bisection examples belong to other notes; remove "Midterm scheduled for November 1", "October 7 example" and the empty heading "Interpolation error".
- [Simplify] Replace the partial Newton table, whose entries "do not match $e^{x_i}$", with a correct worked table (e.g. $e^x$ at $0,0.5,1,1.5,2$).
- [Example] Finish the open examples: for $1/x$ at $x=3$ the actual error is $1/264\approx0.0038$ against the bound $9/256\approx0.035$; the natural spline system for $(1,1),(2,1/2),(3,1/3),(4,1/4)$ gives $M_2=1/2$, $M_3=0$, and $s(2.5)\approx0.3854$ versus $0.4$.
- [Graph] Plot $1/x$ and $P_2$ on $[2,4]$ with the error $f-P_2$ and the envelope $|k(x)|/16$, and the natural spline through the four $1/x$ points.

### N0525

Note: [[Polynomial interpolation algorithms|Polynomial interpolation algorithms]]  
Priority: low · Graph: yes · Manim: yes

Clear, correct comparison of Lagrange, Newton and Neville with good error and conditioning remarks.

- [Example] Quantify the conditioning bound: for 11 nodes on $[-1,1]$, $\max\sum_i|\ell_i|\approx29.9$ for equally spaced nodes versus $\approx2.49$ for Chebyshev nodes.
- [Graph] Plot the Runge function $1/(1+25x^2)$ on $[-1,1]$ with its degree-10 interpolants on equally spaced and Chebyshev nodes.
- [Manim] Animate the degree rising from 4 to 16 for equally spaced versus Chebyshev nodes, showing the endpoint oscillations growing in one case and shrinking in the other.

### N0526

Note: [[Quadratic and reciprocal empirical models|Quadratic and reciprocal empirical models]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; each transformed family has a verified worked fit and a domain check.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.
- [Links] The Bronshtein citation points to a djvu.online file-sharing copy; cite the published handbook instead.
- [Graph] Plot $1/(x^2+1)$, $x/(x^2+1)$ and $3+2/x+1/x^2$ with their data, and $1/(x^2-1)$ through $x=0,2$ showing the hidden pole at $x=1$.

### N0527

Note: [[Quadrature from interpolation|Quadrature from interpolation]]  
Priority: low · Graph: yes · Manim: no

Correct and well structured; the error constants (Simpson $1/2880$, corrected trapezoid $1/720$) are right.

- [Example] The only worked integrand $x^2$ makes Simpson and Hermite exact by degree; add $\int_0^1e^x\,dx=1.71828$ with midpoint $1.64872$, trapezoid $1.85914$ and Simpson $1.71886$.
- [Graph] Log-log plot of error against $N$ for composite midpoint, trapezoid and Simpson on $\int_0^1e^x\,dx$ (slopes 2, 2, 4) and on $\int_0^1\sqrt x\,dx$ to show the order loss.

### N0528

Note: [[Trapezoidal, Simpson, and Gaussian quadrature|Trapezoidal, Simpson, and Gaussian quadrature]]  
Priority: high · Graph: yes · Manim: no

The derivations and numbers are correct, but the note is a lecture transcript that overlaps two other quadrature notes and has a wrong physical-quantities table.

- [Correctness] The Physical quantities table lists $x$ as time in seconds from a nonexistent particle example; remove the section.
- [Simplify] Remove lecturer headings ("Dr. Kim", "Dr. Tokman"), "Tuesday" and "page" remarks; if "Dr. Kim. Numerical integration" is renamed, update the link from Quadrature from interpolation. Merge "Step 3"–"Step 6" headings and the two list items into one numbered construction.
- [Simplify] Write the single-panel trapezoid error as $-(b-a)^3f''(\mu)/12$ rather than $-h^2(b-a)f''(\mu)/12$ with $h=b-a$, which suggests the composite form.
- [Structure] Content overlaps Quadrature from interpolation and Gaussian and Romberg quadrature; keep the derivations here and link to those notes for the summaries.
- [Graph] Plot $x\cos3x-\cos x$ on $[-1,1]$ with the 2-point and 3-point Gauss nodes and the Simpson nodes, and the monic Legendre polynomials $P_1,\ldots,P_4$.

### N0529

Note: [[Trigonometric interpolation and FFT|Trigonometric interpolation and FFT]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; DFT conventions, the inverse proof and the FFT split are verified.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.
- [Example] Show the even-$N$ real interpolant for $y=(1,2,3,4)$: $p(\theta)=5/2-\cos\theta-\sin\theta-\tfrac12\cos2\theta$, which reproduces all four samples.
- [Graph] Plot $\cos5\theta$ and $\cos\theta$ on $[0,2\pi]$ with the four common sample points, and an $N=16$ interpolant of a square wave showing the oscillation near the jump.

### N0530

Note: [[Boundary value algorithms|Boundary value algorithms]]  
Priority: low · Graph: yes · Manim: yes

Clear comparison of finite differences, Galerkin and shooting on one checked model problem.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.
- [Example] The model problem is reproduced exactly by every method; add $-u''=\pi^2\sin\pi x$ (exact $\sin\pi x$) to show a nonzero finite-difference error falling by about 4 when $h$ is halved.
- [Graph] Plot $u=x(1-x)/2$ with the $N=4$ grid values, and the shooting trajectories $u(x;s)=sx-x^2/2$ for $s=0,1/2,1$.
- [Manim] Animate shooting: the trajectory sweeps as $s$ varies, the endpoint miss $F(s)$ is plotted alongside, and the secant step lands on $s=1/2$.

### N0531

Note: [[Direct linear system methods|Direct linear system methods]]  
Priority: low · Graph: yes · Manim: no

Clear and correct overview of LU, Cholesky and QR with small verified examples.

- [Example] Show why pivoting matters: for $\begin{pmatrix}10^{-20}&1\\1&1\end{pmatrix}x=(1,2)^T$, elimination without pivoting in binary64 gives $x_1=0$ instead of about $1$.
- [Graph] Plot the two lines of a nearly singular $2\times2$ system and of a slightly perturbed right side, showing a large move of the intersection (ill-conditioning).

### N0532

Note: [[Initial value algorithms|Initial value algorithms]]  
Priority: low · Graph: yes · Manim: yes

Clear and correct; consistency, zero-stability and absolute stability are distinguished well.

- [Structure] Euler, RK4 and the stability test overlap almost fully with Numerical solution of initial value problems; link the two and separate their scope.
- [Graph] Plot Euler, midpoint and RK4 with $h=0.1$ against $e^t$ on $[0,1]$, and Euler for $y'=-100y$ with $h=0.01,0.019,0.021$.
- [Manim] Animate the Euler polygon on the slope field of $y'=y$, then halve $h$ and redraw to show the global error halving.

### N0533

Note: [[Iterative system methods|Iterative system methods]]  
Priority: low · Graph: yes · Manim: no

Correct and well organized; Jacobi, Gauss–Seidel, contraction and Newton examples all verify.

- [Intuition] Give the iteration-matrix spectral radii for the worked system: Jacobi $\sqrt{1/12}\approx0.289$, Gauss–Seidel $1/12\approx0.083$, explaining the faster Gauss–Seidel progress.
- [Simplify] Put the advanced "Residual interpolation without a supplied Jacobian" (DFO-GN) subsection in a collapsible callout.
- [Graph] Plot the lines $4x+y=1$ and $x+3y=2$ with the Jacobi and Gauss–Seidel iterates converging to $(1/11,7/11)$, and the circle and line of the Newton example with its iterates.

### N0534

Note: [[Least-squares algorithms|Least-squares algorithms]]  
Priority: low · Graph: yes · Manim: no

Correct and well paced; normal equations, Householder and QR examples verify.

- [Simplify] The residual is defined as model minus target, opposite to the $y_i-f(x_i)$ convention in the empirical-curve notes; state the convention explicitly or align with the vault.
- [Simplify] Replace "lecture matrix" with a neutral phrase and move the mid-note source line to a Sources section.
- [Graph] Plot the data $(0,1),(1,2),(2,2)$ with the fit $7/6+x/2$ and vertical residual segments.

### N0535

Note: [[Numerical solution of initial value problems|Numerical solution of initial value problems]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; Euler, Heun and RK4 are worked on the same test equation.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF. Link to Initial value algorithms, which repeats most of this content.
- [Graph] Plot Euler with $h=1/2$ and $h=1/4$ and Heun with $h=1/2$ against $e^x$ on $[0,1]$, and the amplification $|1-ah|$ against $ah\in[0,3]$ with the stability limit at $2$.

### N0536

Note: [[Partial differential equation algorithms|Partial differential equation algorithms]]  
Priority: low · Graph: yes · Manim: yes

Clear and correct; the five-point stencil, heat-equation stability and Galerkin examples verify.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.
- [Graph] 3D surface of $\tfrac54x(1-x)y(1-y)$ on the unit square, with its centre value $5/64\approx0.078$ compared with the grid value $1/16$ and the true value $\approx0.0737$.
- [Manim] Animate the explicit heat scheme from a spike with $r=1/4$ (smoothing) and $r=0.6$ (growing sawtooth).

### N0537

Note: [[A product-mix simplex tableau|A product-mix simplex tableau]]  
Priority: medium · Graph: no · Manim: no

The setup is correct but the note stops after the first scaling, so the simplex method is never completed.

- [Correctness] The Physical quantities table includes $x,y$ (ounces of soup) and $s$ (protein surplus), which do not occur here; keep only $s_1,s_2$ (and add the component counts $x_i$ if desired).
- [Example] Complete the iterations: after the $x_3$ pivot the rows are $(1,2,0,1,-1\,|\,200)$, $(1/2,1/2,1,0,1/2\,|\,400)$, $P$ row $(-2,-3,0,0,5\,|\,4000)$; further pivots end at $x_1=200$, $x_2=0$, $x_3=300$, $P=4400$ with both slacks zero.
- [Simplify] Drop "The next page sets up the tableau" and link to Bases and simplex tableaux for the method.

### N0538

Note: [[Bases and simplex tableaux|Bases and simplex tableaux]]  
Priority: low · Graph: yes · Manim: yes

Clear and correct; the tableau sequence ends in a self-certifying objective row.

- [Graph] Plot the feasible polygon of $x+y\le4$, $x\le2$ with level lines of $3x+2y$ and the simplex path $(0,0)\to(2,0)\to(2,2)$.
- [Manim] Animate the vertex-to-vertex pivot path on the polygon alongside the changing tableau.

### N0539

Note: [[Constrained estimation and model fitting|Constrained estimation and model fitting]]  
Priority: high · Graph: yes · Manim: no

The corrected calculations are right (the score-equation root $0.94161$ verifies), but the note is a lecture log with unfinished conclusions and a meaningless physical-quantities table.

- [Correctness] The Physical quantities table (Lyapunov exponent, ounces of soup, protein surplus) describes nothing in this note, where $\lambda$ is a Lagrange multiplier; remove the section.
- [Example] State the conclusions: on the unit circle $x^2-2y^2$ has maximum $1$ at $(\pm1,0)$ and minimum $-2$ at $(0,\pm1)$; the two-team model gives $p_1=w_1/(w_1+w_2)$.
- [Simplify] Remove "The page marks this lecture as missed" and the handwritten-error commentary once the correct values are given.
- [Graph] Contour plot of $x^2-2y^2$ with the unit circle and the four candidates, and the Dream Team log-likelihood against $p\in[0.2,3]$ with its maximum at $0.9416$.

### N0540

Note: [[Direct search and unconstrained descent|Direct search and unconstrained descent]]  
Priority: low · Graph: yes · Manim: yes

Clear and correct; the steepest descent, Newton, CG and DFP examples on one quadratic all verify.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.
- [Links] The link text "authors' quasi-Newton appendix" names no authors; cite Martins and Ning, Engineering Design Optimization.
- [Graph] Contour plot of $\tfrac12(x^2+2y^2)-(x+y)$ with the steepest-descent zigzag, the two CG steps and the single Newton step from the origin to $(1,1/2)$.
- [Manim] Animate golden-section search on $(t-2)^2$ over $[0,5]$, with the bracket shrinking by $0.618$ each step and one interior point reused.

### N0541

Note: [[Dynamic decisions and Bellman equations|Dynamic decisions and Bellman equations]]  
Priority: low · Graph: no · Manim: no

Clear, correct explanation of Bellman recursion with a minimal counter-greedy example.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.
- [Example] Add a three-stage grid with two or three states per stage so that table reuse (several histories reaching one state) is visible.

### N0542

Note: [[Evolution strategies|Evolution strategies]]  
Priority: low · Graph: no · Manim: yes

Clear and correct, with an honest scope; the worked mutation trace and selection examples verify.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.
- [Intuition] Give one concrete step-size rule, such as Rechenberg's 1/5 success rule, instead of only "adjust mutation parameters".
- [Manim] Animate a (1+1)-ES on the contours of a 2D quadratic: offspring samples appear, accepted ones move the parent, and $\sigma$ adapts.

### N0543

Note: [[Feasible directions and projected gradients|Feasible directions and projected gradients]]  
Priority: low · Graph: no · Manim: no

Clear and correct; the triangle example, projection and descent lemma all verify.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.
- [Example] Illustrate the vertex case mentioned at the end of "Projected gradient method": projecting $(3,-1/2)$ onto the line gives $(2.75,-0.75)$, outside the triangle, while the true projection is the vertex $(2,0)$.

### N0544

Note: [[Linear models and graphical solutions|Linear models and graphical solutions]]  
Priority: low · Graph: no · Manim: no

Clear, correct entry lesson with an algebraic optimality certificate; no content change needed.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.

### N0545

Note: [[Linear programming and gradient-search problems|Linear programming and gradient-search problems]]  
Priority: high · Graph: yes · Manim: no

Very long lecture log mixing gradient search, LP modeling, simplex and search-path modeling; the checked calculations are right, but examples are unfinished and the physical-quantities table is unrelated.

- [Correctness] The Physical quantities table describes population models (population $R$, total population $\tau$, sampling period $T$, Lyapunov exponent $\lambda$), but here $R$ is the search-disk radius, $\tau$ a step length, $T$ the search horizon and $\lambda$ the convex-combination parameter; remove or rewrite it.
- [Correctness] Symbol clashes: $t$ is the iron surplus in the soup example, the third slack in the simplex example and time in the spiral search; $s$ is a surplus in the soup example and a slack in the simplex example. Rename per example.
- [Example] Finish the open examples: jewelry optimum $(10,5)$ with value $250$; sofa/chair optimum $(18,10)$ with value $2250$; the simplex example $\max x+y$ ends at $(16,6)$ with value $22$. Also state the chicken-stock content (7 g protein, 4 iron units per ounce) in the soup problem statement.
- [Structure] Split into separate notes (convexity and projected gradient ascent; LP formulation and standard form; simplex start; search-path probability; line search and Newton), remove the logistics (10% deduction, meetings with Terese, the 2016 date remark), and fix the numbered list that starts at "2." and the orphan "**3.**".
- [Graph] Native plots of the bakery polygon with revenue contours and optimum $(5/3,10/3)$, and of the five-corner region of the simplex example with optimum $(16,6)$.

### N0546

Note: [[Nonlinear derivatives and Newton iteration|Nonlinear derivatives and Newton iteration]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; the Fréchet derivatives and the $\sqrt2$ Newton sequence verify.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.
- [Example] Add a genuine function-space Newton step, e.g. solving $u(t)^2=1+t$ in $C[0,1]$ from $u_0=1$, to show the operator update $u_1=(u_0+(1+t)/u_0)/2$ acting pointwise.
- [Graph] Plot $u^2-2$ on $[0.5,2]$ with tangents at $u_0=1$ and $u_1=3/2$ meeting the axis at $3/2$ and $17/12$.

### N0547

Note: [[Nonlinear optimality and convexity|Nonlinear optimality and convexity]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; KKT, constraint qualification and duality are illustrated by one consistent example.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.
- [Graph] Plot $(x-2)^2$ with the feasible region $x\le1$ shaded, and the dual function $q(\lambda)=\lambda-\lambda^2/4$ on $[0,4]$, both reaching the value $1$.

### N0548

Note: [[Numerical variational methods|Numerical variational methods]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; the Ritz example, the energy-error identity and the hat-function practice all verify.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.
- [Example] Add the two-term family $c_1x(1-x)+c_2x^2(1-x)$, which contains the exact cubic $x(1-x)(1+x)/6$, so the Ritz method returns $c_1=c_2=1/6$ and the energy gap closes.
- [Graph] Plot the exact $(x-x^3)/6$, the one-term Ritz $x(1-x)/4$ and a four-element hat-function approximation on $[0,1]$.

### N0549

Note: [[Optimization - Catalogue Guide|Optimization - Catalogue Guide]]  
Priority: low · Graph: no · Manim: no

Well-structured hub with a correct certificate example.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF. The frontmatter title "Overview" is generic; use e.g. "Optimization learning guide" to match the numerical guide.
- [Links] The lesson index omits notes in this folder: A product-mix simplex tableau, Constrained estimation and model fitting, Linear programming and gradient-search problems, Nonlinear derivatives and Newton iteration, Numerical variational methods, and Vector spaces affine sets and convexity.

### N0550

Note: [[Penalties barriers and cutting planes|Penalties barriers and cutting planes]]  
Priority: low · Graph: yes · Manim: yes

Clear and correct; the penalty, barrier and cutting-plane examples on one problem verify.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.
- [Graph] Plot $x_\rho=1+1/(1+\rho)$ and $x_\mu=1-(\sqrt{1+2\mu}-1)/2$ against the parameter on a log axis, approaching $1$ from outside and inside.
- [Manim] Animate the cutting-plane iterations for $x^2$ on $[-1,2]$: tangents are added, the max-of-lines model rises, and the lower and upper bounds close.

### N0551

Note: [[Purchasing and knapsack policies|Purchasing and knapsack policies]]  
Priority: low · Graph: no · Manim: no

Clear and correct; the purchasing and knapsack tables verify and the greedy counterexample is apt.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.

### N0552

Note: [[Quadratic programs and complementarity methods|Quadratic programs and complementarity methods]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; the KKT, complementary pivot and Hildreth update examples verify.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.
- [Example] Add a two-constraint Hildreth sweep in which an intermediate primal iterate violates a row, to back the remark that the method is dual coordinate ascent.
- [Graph] Contours of $\tfrac12(x^2+y^2)$ with the line $x+y=2$, the minimizer $(1,1)$ and the parallel gradient and constraint normal.

### N0553

Note: [[Revised simplex and linear duality|Revised simplex and linear duality]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; the reduced costs, dual certificate and sensitivity range all verify.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.
- [Graph] Plot the dual feasible region $u_1+u_2\ge3$, $u_1\ge2$, $u\ge0$ with level lines of $4u_1+2u_2$ and the optimum $(2,1)$, next to the primal polygon.

### N0554

Note: [[Tours and sequencing|Tours and sequencing]]  
Priority: low · Graph: no · Manim: no

Clear and correct; the tour enumeration, subtour cut and exchange argument verify.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.
- [Intuition] Add the count $(n-1)!/2$ of undirected tours (3 for $n=4$, 181440 for $n=10$) to show why enumeration fails.

### N0555

Note: [[Transport assignment and allocation|Transport assignment and allocation]]  
Priority: low · Graph: no · Manim: no

Clear and correct; the transport reduction, Hungarian row step and allocation rule verify.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.
- [Example] Add a $3\times3$ transportation example with one closed-cycle pivot, since the cycle rule is described only abstractly.

### N0556

Note: [[Vector spaces affine sets and convexity|Vector spaces affine sets and convexity]]  
Priority: low · Graph: yes · Manim: no

Clear and correct distinction of linear, affine, convex and conical combinations.

- [Structure] The file is stored with a UTF-8 BOM and CRLF line endings; save as UTF-8 without BOM with LF.
- [Graph] Plot for $A=(1,0)$, $B=(0,1)$: the whole plane (span), the line $x+y=1$ (affine hull), the segment (convex hull) and the shaded first quadrant (conical hull).
