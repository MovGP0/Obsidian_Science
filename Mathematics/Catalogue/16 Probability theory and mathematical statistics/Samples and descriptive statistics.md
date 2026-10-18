---
title: "Samples and descriptive statistics"
catalogue_ids:
  - "16.3"
  - "16.3.1"
  - "16.3.1.1"
  - "16.3.1.2"
  - "16.3.2"
  - "16.3.2.1"
  - "16.3.2.2"
---

> [!TLDR]
> Descriptive statistics records observations and summarizes their centre, spread, shape, and selection method.

## Population, sample, and random vector

A population is the collection or distribution that a question concerns. A sample is the set of observations obtained by a specified selection method. Before sampling, $(X_1,\ldots,X_n)$ is a random vector. After sampling, $(x_1,\ldots,x_n)$ is the observed data. A statistic is a numerical function of the sample, such as its mean or maximum, that does not require an unknown population parameter as an input.

Mathematical statistics studies how these functions behave across repeated samples. Descriptive statistics summarizes the particular data in hand. It needs no population-normality assumption to calculate a mean or median. Inference from the summaries to a wider population needs a sampling model. Independent random sampling from a distribution is one common model. A finite sample without replacement is generally dependent, although it can still support valid design-based inference.

First identify the population, sampling frame, selection mechanism, variable definition, missing values, and any repeated observations of the same item. Ten measurements of one selected item are not automatically ten independent items. A large convenience sample can be less representative than a smaller carefully randomized sample.

## Record observations before reducing them

Keep the original values and their order, identifiers, rounding precision, and exclusions. A frequency table groups repeated values. For numerical intervals, choose nonoverlapping bins with an explicit endpoint rule, such as $[a,b)$. In a histogram with unequal bin widths, use frequency density: height equals relative frequency divided by bin width. Then each bar's area is its relative frequency. A bar chart for categories instead uses separate categories; their positions need not represent numerical intervals.

An empirical CDF records the fraction at or below $x$:

$$
F_n(x)=\frac1n\sum_{i=1}^n\mathbf1_{\{x_i\le x\}}.
$$

The indicator $\mathbf1$ is one when its condition is true and zero otherwise. This gives a nondecreasing step function without a bin-width choice. It is a description of the sample distribution, not an exact copy of the population CDF.

## Statistical parameters and summaries

The arithmetic mean and sample variance are

$$
\bar x=\frac1n\sum_i x_i,\qquad
s^2=\frac1{n-1}\sum_i(x_i-\bar x)^2,\qquad n\ge2.
$$

The sample standard deviation is $s=\sqrt{s^2}$. Dividing by $n-1$ makes $S^2$ unbiased for the population variance under iid sampling with finite variance. A brief reason is the identity

$$
\sum_i(X_i-\bar X)^2=\sum_i(X_i-\mu)^2-n(\bar X-\mu)^2.
$$

The two right-hand expectations are $n\sigma^2$ and $\sigma^2$. Their difference is $(n-1)\sigma^2$. Unbiasedness is a repeated-sampling property, not a promise that one observed $s^2$ equals $\sigma^2$. If the values constitute the entire finite population being described, its descriptive variance often uses divisor $n$ instead. State the convention.

The median is the middle ordered value, or the average of the two central values for an even sample. It resists a single extreme observation more than the mean. The mode is a most frequent value and need not be unique. The range is maximum minus minimum. Quantiles divide the ordered data into stated proportions. Several finite-sample quantile conventions exist; specify the software rule when exact reproduction matters. The interquartile range is the third quartile minus the first.

## Worked example: record and summarize

Consider the sample $2,2,3,5,8$. Its frequency table is:

| Value | Count | Relative frequency |
| --- | --- | --- |
| 2 | 2 | $2/5$ |
| 3 | 1 | $1/5$ |
| 5 | 1 | $1/5$ |
| 8 | 1 | $1/5$ |

The total is five and the mean is $20/5=4$. The median is three, the mode is two, and the range is $8-2=6$. Squared deviations from four are $4,4,1,1,16$, with sum 26. Hence $s^2=26/4=6.5$ and $s\approx2.550$. At $x=4$, three observations lie at or below four, so $F_n(4)=3/5$.

If eight is replaced by 80, the mean becomes $92/5=18.4$ while the median remains three. This does not make either summary wrong; they answer different questions about the centre. Always inspect the full pattern before selecting one number.

## Mistakes and limitations

Do not remove an unusual observation merely because it is inconvenient. Investigate whether it is an entry error, an instrument failure, a different population, or a valid rare value. Record the decision and compare results when appropriate. Rounding raw values too early can change variance and quantiles. Report enough information for another reader to reconstruct the calculation.

[[Confidence intervals and hypothesis tests]] uses these summaries for inference. Its assumptions add conditions that descriptive arithmetic alone does not establish.

## Practice

1. Calculate the mean, median, and sample variance of $1,3,3,5$.
2. A histogram bin from two to five contains relative frequency $0.3$. What height makes area represent relative frequency?

> [!example]- Worked answers
> 1. The mean and median are both three. Squared deviations sum to $4+0+0+4=8$, so $s^2=8/3$. Using divisor four instead would describe the variance of these four values as a complete finite population.
> 2. The bin width is three. Its height must be $0.3/3=0.1$, so width times height equals $0.3$.
