---
title: "Fuzzy relations and inference"
catalogue_ids:
  - "5.9.3"
  - "5.9.3.1"
  - "5.9.3.2"
  - "5.9.4"
  - "5.9.5"
---

> [!TLDR]
> Fuzzy relations connect objects by degrees, and inference combines those degrees before a stated rule selects one output.

## From a set to a relation

Read [[Fuzzy sets and aggregation]] for membership functions, min/max operations, and their interpretation. A crisp relation between sets $X,Y$ is a subset of $X\times Y$, the set of ordered pairs. A **fuzzy relation** replaces yes/no membership of a pair with a degree

$$
R:X\times Y\to[0,1].
$$

For finite $X,Y$, put these degrees in a matrix whose rows label elements of $X$ and columns label elements of $Y$. For example, $R(a,p)=0.8$ can mean that object $a$ matches description $p$ to degree $0.8$. It does not state a transition probability, and a row need not sum to one.

A relation on one set is reflexive when $R(x,x)=1$, symmetric when $R(x,y)=R(y,x)$, and max–min transitive when $R(x,z)\ge\min(R(x,y),R(y,z))$ for every $y$. A relation can have some of these properties without the others. A numerical table is not automatically a fuzzy equivalence relation.

## Max–min relation product

Suppose $R$ relates $X$ to $Y$, and $S$ relates $Y$ to $Z$. Define the following row-first product:

$$
(R\circ S)(x,z)=\max_{y\in Y}\min\{R(x,y),S(y,z)\}
$$

for finite nonempty $Y$. For infinite $Y$, use a supremum instead of a maximum. In this lesson, $R\circ S$ means first $R$, then $S$; function-composition notation in other texts may reverse the displayed order. Always check the formula. For each intermediate object, the minimum measures the weaker link; the maximum selects the strongest two-step route.

Take

$$
R=\begin{pmatrix}0.8&0.3\\0.4&0.9\end{pmatrix},\qquad
S=\begin{pmatrix}0.5&0.7\\1&0.2\end{pmatrix}.
$$

The top-left entry is $\max(\min(0.8,0.5),\min(0.3,1))=\max(0.5,0.3)=0.5$. Repeat for the other three positions:

$$
R\circ S=\begin{pmatrix}0.5&0.7\\0.9&0.4\end{pmatrix}.
$$

This resembles ordinary matrix multiplication, but replaces multiplication by minimum and addition by maximum. Do not use the ordinary product formula. With only $0$ and $1$ entries, the operation reduces to existence of a compatible intermediate object. It is associative because minimum distributes over maximum on a chain, so several relation steps can be grouped without changing the result.

## Infer with a fuzzy input

Let $A$ be a fuzzy input on $X$. A relation $R$ gives an output on $Y$ by

$$
\mu_B(y)=\max_{x\in X}\min\{\mu_A(x),R(x,y)\}.
$$

Using the matrix $R$ above and input memberships $(0.6,0.2)$, the first output is $\max(0.6,0.2)=0.6$, and the second is $\max(0.3,0.2)=0.3$. Thus $B=(0.6,0.3)$. Each output tests every possible input support and retains the strongest compatible support.

A rule “if $x$ is $A_i$, then $y$ is $B_i$” is often represented in a Mamdani calculation by $R_i(x,y)=\min(\mu_{A_i}(x),\mu_{B_i}(y))$. Multiple rules can be combined by pointwise maximum. For a crisp observed input $x_0$, each rule fires with strength $\alpha_i=\mu_{A_i}(x_0)$ and contributes $\min(\alpha_i,\mu_{B_i}(y))$. This is a specified inference mechanism. The minimum used here is not the same as every logical implication operator studied in mathematical fuzzy logic.

## Defuzzification methods

Inference can return a full fuzzy output. **Defuzzification** chooses one ordinary value from it. This is useful when a single numerical result is needed, but it discards information. Different methods answer different questions and can disagree.

On a finite output universe $y_1,\ldots,y_k$, the discrete centroid is

$$
y^*=\frac{\sum_j y_j\mu_B(y_j)}{\sum_j\mu_B(y_j)},
$$

provided the denominator is positive. It is a membership-weighted mean. It can lie between the listed output values. If the result must be one of the listed values, an additional selection rule is needed. For a continuous universe, replace sums by integrals, assuming a finite positive total area and a finite first moment. Those continuous formulas are a later extension; this lesson uses finite sums.

The smallest-of-maxima method chooses the smallest point where membership is maximal. Largest-of-maxima chooses the largest. Mean-of-maxima averages the maximizing points for a finite universe. For a continuous plateau, one must specify how the mean over that set is taken. The bisector-of-area method instead splits the membership area in half; it need not equal the centroid. If all memberships are zero, neither a unique preferred maximum nor a centroid follows from the rule base; define a fallback or report the uncovered input.

## Worked comparison

Let output values be $0,5,10$ with memberships $0.6,0.5,0.4$. The centroid is

$$
\frac{0(0.6)+5(0.5)+10(0.4)}{0.6+0.5+0.4}
=\frac{6.5}{1.5}=\frac{13}{3}.
$$

The unique maximum occurs at $0$, so all maxima-based methods return $0$. The centroid accounts for support at all three values, while maximum selection ignores the lower support elsewhere. Neither is “the probability that the output equals” anything. The membership scores have not become probabilities just because we normalized them for this calculation.

## Practice

1. Apply the matrix $R$ above to input memberships $(0.1,0.7)$ using max–min inference.
2. For outputs $2,4,8$ with memberships $0.5,0.5,0$, find the centroid and the smallest, largest, and mean of maxima.

> [!example]- Worked answers
> 1. The first result is $\max(\min(0.1,0.8),\min(0.7,0.4))=0.4$. The second is $\max(\min(0.1,0.3),\min(0.7,0.9))=0.7$. The output is $(0.4,0.7)$.
> 2. The centroid is $(2(0.5)+4(0.5)+8(0))/(0.5+0.5)=3$. The maximizing set is $\{2,4\}$, so smallest is $2$, largest is $4$, and its arithmetic mean is $3$.

For implementation conventions and visual comparisons, see MathWorks' official [fuzzy inference process](https://www.mathworks.com/help/fuzzy/fuzzy-inference-process.html) and [defuzzification methods](https://www.mathworks.com/help/fuzzy/defuzzification-methods.html).
