---
title: "Fuzzy systems and interpolation"
catalogue_ids:
  - "5.9.6"
  - "5.9.6.1"
  - "5.9.6.2"
  - "5.9.6.3"
  - "5.9.6.4"
---

> [!TLDR]
> A fuzzy rule system maps numerical inputs to outputs through membership functions, rule strengths, and a declared output calculation.

## A knowledge base that can be calculated

Read [[Fuzzy sets and aggregation]] and [[Fuzzy relations and inference]] first. A **knowledge-based fuzzy system** contains a defined input domain, membership functions for named input categories, an if–then rule base, and a method that converts the rule results into an output. “Knowledge-based” means that chosen categories and rules encode a model of the problem. It does not imply that those rules are correct, learned automatically, or probabilistic.

Use a purely numerical example. An input $x\in[0,1]$ has two memberships, $\mu_L(x)=1-x$ for “low” and $\mu_H(x)=x$ for “high.” Their sum is one. Define rules that map low inputs toward low outputs and high inputs toward high outputs. A middle input activates both rules; the system combines them rather than choosing only one category.

## Mamdani method

A Mamdani rule has a fuzzy set as its conclusion. Choose output universe $Y=\{0,5,10\}$. Let the low-output memberships be $(1,0.5,0)$ and the high-output memberships be $(0,0.5,1)$. Use minimum to clip each conclusion at its firing strength, maximum to combine the clipped sets, and the discrete centroid for the final output. These are explicit method choices; alternative operators produce different systems.

At $x=0.4$, the low rule fires with $0.6$ and the high rule with $0.4$. Their clipped outputs are $(0.6,0.5,0)$ and $(0,0.4,0.4)$. Taking coordinatewise maxima gives $(0.6,0.5,0.4)$. Thus

$$
y_M=\frac{0(0.6)+5(0.5)+10(0.4)}{0.6+0.5+0.4}=\frac{13}{3}.
$$

The output depends on the full shapes of the conclusion sets, not only their names. If a continuous output universe replaces these three values, a centroid integral replaces the sum and may produce a different answer. Do not use the continuous formula while retaining only three samples without explaining the numerical approximation.

## Sugeno method

A zero-order Sugeno rule has a constant numerical conclusion $z_i$. A first-order rule has an affine function of the inputs, such as $z_i=a_ix+b_i$. Its usual normalized output is

$$
y_S=\frac{\sum_i\alpha_i z_i(x)}{\sum_i\alpha_i},
$$

where the nonnegative firing strengths $\alpha_i$ come from the antecedents and their chosen conjunction. The denominator must be positive. This calculation combines rule values directly and does not first build a Mamdani output area.

With conclusions $z_L=2,z_H=8$ and the same memberships, $x=0.4$ gives $y_S=(0.6(2)+0.4(8))/(0.6+0.4)=4.4$. It is different from $13/3$ because the rule conclusions and output calculations are different. For a first-order example, take $z_L(x)=x$ and $z_H(x)=2x+1$. At $x=0.4$, the rule values are $0.4,1.8$, giving $0.6(0.4)+0.4(1.8)=0.96$.

If the firing strengths and rule functions are continuous and the denominator stays positive, the normalized output is continuous. The result follows from continuity of sums, products, and division by a nonzero denominator. Continuity does not follow just from the word “Sugeno” if discontinuous memberships or uncovered inputs are permitted.

## Regular systems

The catalogue uses the title “Regular systems.” The corresponding §5.9.6.3 in the English [Handbook of Mathematics, sixth edition](https://link.springer.com/book/10.1007/978-3-662-46221-8), pp. 428–430, is titled “Cognitive Systems” and applies Mamdani rules in a feedback controller. The wording differs, so this heading preserves the catalogue label while teaching that feedback process. It does not identify “regular” with a regularly spaced interpolation grid.

In a **feedback loop**, observe the current state, compare it with a target, calculate an action, apply that action, and observe again. The controller uses both the **error** and its change to distinguish a state moving toward the target from one moving away. Fuzzification converts these two observed numbers into membership grades. Rule inference combines the grades and conclusions. Defuzzification returns one ordinary action. The next observation closes the loop.

Consider an abstract numerical state $s_k$ at step $k$, with target zero. Define error $e_k=-s_k$ and change $d_k=e_k-e_{k-1}$. Suppose the update rule is $s_{k+1}=s_k+u_k$, where $u_k$ is the action. These are dimensionless mathematical variables, not a model of the source's physical apparatus. For each input $v\in[-1,1]$, define negative, zero, and positive memberships by

$$
N(v)=\max(0,-v),\qquad Z(v)=1-|v|,\qquad P(v)=\max(0,v).
$$

Choose three possible actions $-0.5,0,0.5$, named decrease, hold, and increase. Each conclusion is a fuzzy singleton on this finite action universe: its membership is one at the named action and zero at the other two. Specify all nine rules by this table. Rows describe error and columns describe change.

| Error category | Negative change | Zero change | Positive change |
| --- | --- | --- | --- |
| Negative | Decrease | Decrease | Hold |
| Zero | Decrease | Hold | Increase |
| Positive | Hold | Increase | Increase |

Each cell means “if error has this row category AND change has this column category, then use this conclusion.” Use minimum for AND and conclusion clipping, maximum for aggregation, and the discrete centroid. A positive error means the state is below target, so an increase tends to correct it. A change showing that the error is already improving can call for holding rather than another correction. The table encodes this chosen policy; its behavior must still be checked against the state update.

For a complete step, let $s_k=0.6$ and $e_{k-1}=-0.4$. Then $e_k=-0.6$ and $d_k=-0.2$. Error memberships are $(N,Z,P)=(0.6,0.4,0)$, while change memberships are $(0.2,0.8,0)$. The four active rules have strengths $0.2$ for negative/negative, $0.6$ for negative/zero, $0.2$ for zero/negative, and $0.4$ for zero/zero. The first three conclude decrease; their maximum is $0.6$. The last concludes hold with degree $0.4$. The aggregated action memberships at $(-0.5,0,0.5)$ are therefore $(0.6,0.4,0)$, giving

$$
u_k=\frac{-0.5(0.6)+0(0.4)+0.5(0)}{0.6+0.4+0}=-0.3,
\qquad s_{k+1}=0.6-0.3=0.3.
$$

The next error is $-0.3$, and its change from $-0.6$ is $0.3$. Recompute memberships from those new inputs; do not repeat the old action without observation. This step reduced the error magnitude, but one successful step is not a proof that every trajectory converges. A stability claim requires an analysis of the complete update map, input coverage, action limits, and any disturbances. Also define a policy for observations outside $[-1,1]$; the formulas above specify a controller only on that domain.

## Knowledge-based interpolation

Interpolation is a separate use of a fuzzy rule system: it constructs values between stated nodes rather than requiring a repeated feedback update. For one input, choose ordered nodes $x_0<\cdots<x_r$. Give each node a triangular hat membership: one at that node, zero at neighboring nodes, and linear between them. Use endpoint shoulders on the finite input domain. Between consecutive nodes, at most two hats are positive and they sum to one. With one constant-output rule $z_i$ for every node, Sugeno normalization becomes

$$
y(x)=\frac{x_{i+1}-x}{x_{i+1}-x_i}z_i+
\frac{x-x_i}{x_{i+1}-x_i}z_{i+1}
\quad(x_i\le x\le x_{i+1}).
$$

The denominator is nonzero because nodes are distinct. Every input in the stated domain activates a rule. At a node, only its own rule has membership one, so $y(x_i)=z_i$. This completeness and partition property avoids an undefined zero denominator. Equal node spacing is not required.

For nodes $0,1$ and target values $2,8$, the formula gives $y(x)=2(1-x)+8x=2+6x$. At $x=0.3$, it gives $3.8$. Thus the two linguistic rules implement ordinary linear interpolation under these specified memberships and conclusions. Arbitrary fuzzy systems need not reproduce supplied node values; that property follows from our hat functions and full rule table.

For two inputs $x,u\in[0,1]$, take low/high memberships on each and use product conjunction. The four rule weights are $(1-x)(1-u)$, $x(1-u)$, $(1-x)u$, and $xu$. They sum to one by factoring. With corner conclusions $z_{00},z_{10},z_{01},z_{11}$, the output is their weighted sum, called bilinear interpolation. For corner values $0,2,4,6$, evaluate at $(x,u)=(0.25,0.5)$. Weights are $0.375,0.125,0.375,0.125$, giving $0+0.25+1.5+0.75=2.5$.

For a full grid with $r$ categories per input and $d$ inputs, the full rule table has $r^d$ entries. This rapid growth limits simple grid designs. Sparse rule interpolation requires further assumptions and is not guaranteed by the elementary full-grid formula. Extrapolation outside the stated input domain also needs a separate policy; a finite-domain membership partition does not define it automatically.

## Practice

1. In the zero-order Sugeno example, evaluate $x=0.75$ and show that the result lies between $2$ and $8$.
2. For nodes $0,2,5$ with outputs $1,3,9$, use hat memberships to calculate the output at $x=3$.
3. In the feedback example, calculate the rule output from the next observed pair $e_{k+1}=-0.3,d_{k+1}=0.3$. Does the state change at that step?

> [!example]- Worked answers
> 1. The strengths are $0.25,0.75$, so the output is $0.25(2)+0.75(8)=6.5$. Nonnegative weights summing to one make it a convex combination, which must lie between the two conclusions.
> 2. The active interval is $[2,5]$. The weights are $(5-3)/(5-2)=2/3$ and $(3-2)/(5-2)=1/3$. The output is $(2/3)3+(1/3)9=5$. The rule at node $0$ has weight zero.
> 3. Error memberships are $(0.3,0.7,0)$ and change memberships are $(0,0.7,0.3)$. Active strengths are $0.3$ for negative/zero (decrease), $0.3$ for negative/positive (hold), $0.7$ for zero/zero (hold), and $0.3$ for zero/positive (increase). Aggregation gives $(0.3,0.7,0.3)$, whose centroid is $(-0.15+0+0.15)/1.3=0$. Thus this action leaves the state at $0.3$. The following observation has change zero, so its rule calculation will differ again. Holding at one step does not establish permanent equilibrium.

The Mamdani/Sugeno distinction is documented in MathWorks' official [inference-system reference](https://www.mathworks.com/help/fuzzy/types-of-fuzzy-inference-systems.html). The feedback rule table and calculations above are original elementary examples. The interpolation formulas follow directly from the explicitly defined hat functions and product weights.
