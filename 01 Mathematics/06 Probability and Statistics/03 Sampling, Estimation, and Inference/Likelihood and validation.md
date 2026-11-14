---
title: "Likelihood and validation"
---

> [!TLDR]
> A likelihood compares parameter values under a model, and held-out data estimate how well a fitted model predicts new observations.

## Likelihood from waiting times

Let $W_i$ be independent observations of the number of trials up to and including the first success, with common success probability $p$. For observed positive integers $w_1,\ldots,w_n$ and $S=\sum_i w_i$, the likelihood is $L(p)=p^n(1-p)^{S-n}$. The $n$ factors of $p$ count the observed successes. The $S-n$ remaining trials count the observed failures. If $S>n$, the log likelihood is strictly concave on $(0,1)$, and solving

$$
\ell'(p)=\frac{n}{p}-\frac{S-n}{1-p}=0
$$

gives $\hat p=n/S=1/\bar w$. If every observation is one, the maximum is at the boundary $p=1$. For $w=(1,2,3)$, the fit is $1/2$. Estimating from the frequency of $W=1$ alone gives $1/3$ for these data, since that approach discards the waiting times for the other observations.

## Inference and prediction

With independent normal measurements of known standard deviation $\sigma$, the interval $\bar X\pm1.96\sigma/\sqrt n$ has approximately 95% coverage under repeated sampling. A test can instead compare a specified null mean with the sampling distribution of $\bar X$. The data-generating assumptions determine the validity of both procedures. See [[Confidence intervals and hypothesis tests]].

To compare two prediction rules, split the data into $k$ folds, fit on the other $k-1$ folds, and evaluate on the held-out fold. Average the held-out loss across observations, with unequal fold sizes weighted accordingly. Perform feature selection and scaling inside each training fold. Reusing the same folds repeatedly to choose models can bias the reported estimate, so reserve a separate test set or use an outer validation loop when assessing the selected model. See [[Correlation and regression models]] for fitting a straight line.

## Sources

Source material from Kyle Kabasares’s UC Merced notes. [[Bootstrap intervals and likelihood examples#Confidence intervals and standard error|Math 32]], [[Likelihood estimation and Monte Carlo modeling problems#Likelihood for a single height|Math 150]].
