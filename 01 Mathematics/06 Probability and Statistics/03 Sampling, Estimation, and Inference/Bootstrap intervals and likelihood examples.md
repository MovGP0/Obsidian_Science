---
title: "Bootstrap intervals and likelihood examples"
---

> [!TLDR]
> Build sampling intervals with bootstrap resampling or model assumptions and estimate parameters with likelihood.

## Worked lecture material

##### )

Homework 5 is due April 24, 2015. A $95\%$ confidence procedure produces intervals that contain the true parameter in $95\%$ of repeated samples. For a large sample, with $n\ge 30$ given as a rule of thumb, the notes illustrate a normal approximation for the population mean with standard normal critical values $\pm1.96$.

![[Kyle Kabasares - Probability and Statistics - Central ninety five percent of the standard normal.png|**Fig. 69** The shaded central area between $-1.96$ and $1.96$ is $0.95$, with $0.025$ in each tail.]]

To construct a bootstrap confidence interval for a parameter $T$, start with a dataset of size $n$.

1. Resample the dataset with replacement to obtain a new dataset of size $n$.
2. Compute the estimate of $T$ on the resampled dataset.
3. Repeat the first two steps many times, for example 1,000 or 10,000 times.

This process is called bootstrapping. A $95\%$ percentile bootstrap confidence interval is bounded by the 2.5th and 97.5th percentiles of the bootstrap estimates, leaving the middle $95\%$.

##### Covariance and expectation

$$
\operatorname{Var}(X+Y)=E[(X+Y-E[X+Y])^2]
=\operatorname{Var}(X)+\operatorname{Var}(Y)+2\operatorname{Cov}(X,Y).
$$

The page begins a reminder about positive covariance. For discrete $X$ and $Y$ with possible values $a_i$ and $b_j$,

$$
E[g(X,Y)]=\sum_i\sum_j g(a_i,b_j)P(X=a_i,Y=b_j).
$$

For a joint continuous density $f$,

$$
E[g(X,Y)]=\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}
g(x,y)f(x,y)\,dx\,dy.
$$

For the discrete example, the joint probabilities are

| $b\backslash a$ | $0$ | $1$ | $2$ |
| ---: | ---: | ---: | ---: |
| $0$ | $0$ | $1/4$ | $0$ |
| $1$ | $1/4$ | $0$ | $1/4$ |
| $2$ | $0$ | $1/4$ | $0$ |

Only the pairs $(1,2)$ and $(2,1)$ have both a nonzero product and a nonzero probability. Thus $E[XY]=1\cdot2\cdot(1/4)+2\cdot1\cdot(1/4)=1$.

##### Expectation, covariance, and variance

Expectation is linear, so $E[X+Y]=E[X]+E[Y]$ and $E[rX+sY+t]=rE[X]+sE[Y]+t$. With $\mu_X=E[X]$ and $\mu_Y=E[Y]$,

$$
\operatorname{Cov}(X,Y)=E[(X-\mu_X)(Y-\mu_Y)]
=E[XY]-E[X]E[Y].
$$

If $\operatorname{Cov}(X,Y)=0$, the variables are uncorrelated. Independence implies zero covariance when the moments exist. Dependent variables can also be uncorrelated.

$$
\operatorname{Var}(X+Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)+2\operatorname{Cov}(X,Y).
$$

For uncorrelated $X,Y$ this simplifies to $\operatorname{Var}(X+Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)$. For pairwise uncorrelated variables $X_1,\ldots,X_n$,

$$
\operatorname{Var}(X_1+\cdots+X_n)=
\operatorname{Var}(X_1)+\cdots+\operatorname{Var}(X_n).
$$

For $X\sim\operatorname{Bin}(n,p)$, the expectation and variance are $E[X]=np$ and $\operatorname{Var}(X)=np(1-p)$.

Under affine transformations, $\operatorname{Cov}(rX+s,tY+u)=rt\operatorname{Cov}(X,Y)$. The correlation coefficient standardizes covariance to give a dimensionless measure of linear association.

$$
\rho(X,Y)=\frac{\operatorname{Cov}(X,Y)}
{\sqrt{\operatorname{Var}(X)\operatorname{Var}(Y)}}
$$

when both variances are positive. The lecture notes adopt the convention $\rho=0$ when either variance is zero. Changing units with positive scale factors preserves correlation. For $rt\ne0$,

$$
\rho(rX+s,tY+u)=\begin{cases}
-\rho(X,Y) & rt<0,\\
\rho(X,Y) & rt>0.
\end{cases}
$$

##### Statement of the central limit theorem

Let $X_1,X_2,\ldots$ be independent and identically distributed with mean $\mu$ and finite positive variance $\sigma^2$. The distribution of $\bar X_n=\frac1n\sum_{i=1}^n X_i$ is approximately normal with mean $\mu$ and variance $\sigma^2/n$ for large $n$. More precisely, for $n\ge1$ let

$$
Z_n=\sqrt n\left(\frac{\bar X_n-\mu}{\sigma}\right).
$$

Then for every real $a$,

$$
\lim_{n\to\infty}F_{Z_n}(a)=\Phi(a),
$$

where $\Phi$ is the CDF of the standard normal distribution $N(0,1)$. The page labels this section a proof and ends after stating the convergence.

The standardized mean can also be written as a standardized sum.

$$
Z_n=\frac{\bar X_n-E[\bar X_n]}{\sqrt{\operatorname{Var}(\bar X_n)}}
=\frac{X_1+\cdots+X_n-n\mu}{\sigma\sqrt n}.
$$

##### Central limit theorem example. Computer lifetimes

Suppose several computers of the same type have independent failure times $X_i\sim\operatorname{Exp}(1/2)$, measured in years. The average lifetime is two years. Use one computer at a time and replace it with an unused one when it fails. The time until $n$ computers have failed is $T_n=X_1+\cdots+X_n$. The central limit theorem gives the normal approximation

$$
N(n\mu,n\sigma^2)=N\left(\frac n\lambda,\frac n{\lambda^2}\right)=N(2n,4n).
$$

To approximate $P(T_5\ge12)$, use $\mu=1/\lambda=2$ and $\sigma^2=1/\lambda^2=4$. For $Y\sim N(10,20)$ and $Z\sim N(0,1)$,

$$
P(T_5\ge12)\approx P(Y\ge12)
=P\left(Z\ge\frac{12-10}{\sqrt{20}}\right)
\approx 0.3274.
$$

The handwritten substitution uses $N(10,40)$ and reports $0.3745$. The stated variance and the formula $n\sigma^2$ give $5\cdot4=20$.

##### Practice midterm 1

**1a.** The joint probabilities used in the expected-product calculation are

| $Y\backslash X$ | $0$ | $1$ | $2$ |
| ---: | ---: | ---: | ---: |
| $0$ | $1/6$ | $1/6$ | $1/6$ |
| $1$ | $1/4$ | $0$ | $1/4$ |

All terms vanish except the one for $(X,Y)=(2,1)$, so $E[XY]=2\cdot1\cdot(1/4)=1/2$.

**1b.** Independence would give $P(X=a,Y=b)=P(X=a)P(Y=b)$. Here $P(X=2,Y=1)=1/4$, whereas $P(X=2)P(Y=1)=(5/12)(1/2)=5/24$. Therefore $X$ and $Y$ are dependent.

**1c.** The marginal expectations and covariance are

$$
\begin{aligned}
E[X]&=0\cdot\tfrac5{12}+1\cdot\tfrac16+2\cdot\tfrac5{12}=1,\\
E[Y]&=0\cdot\tfrac12+1\cdot\tfrac12=\tfrac12,\\
\operatorname{Cov}(X,Y)&=E[XY]-E[X]E[Y]=\tfrac12-1\cdot\tfrac12=0.
\end{aligned}
$$

Thus the variables are uncorrelated.

**1d.** Calculate the variances using second moments.

$$
\begin{aligned}
E[X^2]&=0^2\cdot\tfrac5{12}+1^2\cdot\tfrac16+2^2\cdot\tfrac5{12}=\tfrac{11}6,\\
\operatorname{Var}(X)&=\tfrac{11}6-1^2=\tfrac56,\\
E[Y^2]&=0^2\cdot\tfrac12+1^2\cdot\tfrac12=\tfrac12,\\
\operatorname{Var}(Y)&=\tfrac12-(\tfrac12)^2=\tfrac14.
\end{aligned}
$$

The covariance term is zero, so $\operatorname{Var}(X+Y)=5/6+1/4=13/12$.

**1e.** Since $\operatorname{Var}(rY+s)=r^2\operatorname{Var}(Y)$ and $\operatorname{Cov}(X,-Y)=-\operatorname{Cov}(X,Y)=0$ for this example,

$$
\begin{aligned}
\operatorname{Var}(X-Y)
&=\operatorname{Var}(X)+\operatorname{Var}(-Y)+2\operatorname{Cov}(X,-Y)\\
&=\operatorname{Var}(X)+\operatorname{Var}(Y)=\frac{13}{12}.
\end{aligned}
$$

**2a.** The joint CDF for $x\ge1,\ y\ge1$ is $F(x,y)=1-1/x-1/y^2+1/(xy^2)$, and it is zero if either coordinate is below one. The mixed derivative gives the joint density on the support.

$$
f(x,y)=\frac{\partial^2 F(x,y)}{\partial x\,\partial y}
=\frac{d(x^{-1})}{dx}\frac{d(y^{-2})}{dy}
=(-x^{-2})(-2y^{-3})=\frac{2}{x^2y^3}.
$$

**2b.** Integrate over the other coordinate to find each marginal.

$$
\begin{aligned}
f_X(x)&=\int_1^\infty\frac{2}{x^2y^3}\,dy
=\frac{2}{x^2}\left[-\frac1{2y^2}\right]_1^\infty
=\frac1{x^2}\qquad(x\ge1),\\
f_Y(y)&=\int_1^\infty\frac{2}{x^2y^3}\,dx
=\frac{2}{y^3}\left[-\frac1x\right]_1^\infty
=\frac{2}{y^3}\qquad(y\ge1).
\end{aligned}
$$

Each marginal is zero below one.

**2c.** Integrating the marginal densities gives

$$
\begin{aligned}
F_X(x)&=\int_1^x a^{-2}\,da=\left[-a^{-1}\right]_1^x=1-\frac1x
\qquad(x\ge1),\\
F_Y(y)&=\int_1^y 2a^{-3}\,da=\left[-a^{-2}\right]_1^y=1-\frac1{y^2}
\qquad(y\ge1).
\end{aligned}
$$

Both CDFs are zero below one.

**2d.** Since $f_X(x)f_Y(y)=f(x,y)$ everywhere, $X$ and $Y$ are independent.

**3a.** For the joint density $f(x,y)=12x(1-x)y$ on $[0,1]^2$ and zero elsewhere, the notes set up the moment integrals.

$$
\begin{aligned}
E[XY]&=\int_0^1\int_0^1 xy[12x(1-x)y]\,dx\,dy,\\
E[X]&=\int_{-\infty}^{\infty}\int_{-\infty}^{\infty} x f(x,y)\,dx\,dy,\\
E[Y]&=\int_{-\infty}^{\infty}\int_{-\infty}^{\infty} y f(x,y)\,dx\,dy.
\end{aligned}
$$

The integrals are left unevaluated on the page.

**4.** Each chip has probability $1/5$ of being defective. Set $X_i=1$ if chip $i$ is defective and $X_i=0$ otherwise. Then

$$
\begin{aligned}
E[X_i]&=0(1-\tfrac15)+1(\tfrac15)=\tfrac15,\\
E[X_i^2]&=0^2(1-\tfrac15)+1^2(\tfrac15)=\tfrac15,\\
\operatorname{Var}(X_i)&=E[X_i^2]-(E[X_i])^2=\tfrac15-\tfrac1{25}=\tfrac4{25}.
\end{aligned}
$$

To approximate the probability of fewer than 15 defective chips, let $S=X_1+\cdots+X_{100}$. Linearity and independence give

$$
E[S]=100\cdot\tfrac15=20,
\qquad \operatorname{Var}(S)=100\cdot\tfrac4{25}=16.
$$

Using the normal approximation with the cutoff at 15, the calculation is

$$
P(S<15)=P\left(\frac{S-20}{\sqrt{16}}<\frac{15-20}{\sqrt{16}}\right)
\approx P(Z<-5/4)=P(Z>5/4)\approx 0.1056.
$$

##### Practice midterm 2

**1a.** For $Y=-1$, each of $X=0,1,2$ has joint mass $1/6$. For $Y=1$, the corresponding masses are $0$, $1/2$, and $0$. The product expectation is

$$
E[XY]=(0)(-1)\tfrac16+(1)(-1)\tfrac16+(2)(-1)\tfrac16
+(0)(1)(0)+(1)(1)\tfrac12+(2)(1)(0)=0.
$$

**1b.** Here $P(X=1,Y=1)=1/2$, while $P(X=1)P(Y=1)=(2/3)(1/2)=1/3$. Since the joint probability differs from the product, the variables are dependent.

**1c.** The marginal expectations are $E[X]=0\cdot(1/6)+1\cdot(2/3)+2\cdot(1/6)=1$ and $E[Y]=(-1)(1/2)+1(1/2)=0$. Hence $\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y]=0-(1)(0)=0$.

**2.** Let $X_i=1$ for a defective chip and $X_i=0$ otherwise. For $S=X_1+\cdots+X_{100}$, approximate $P(S<15)$. From $P(X_i=1)=1/5$ and $P(X_i=0)=4/5$,

$$
\begin{aligned}
E[X_i]&=1\cdot\tfrac15+0\cdot\tfrac45=\tfrac15,\\
E[S]&=100E[X_i]=20,\\
\operatorname{Var}(X_i)&=0^2\cdot\tfrac45+1^2\cdot\tfrac15-(\tfrac15)^2
=\tfrac4{25},\\
\operatorname{Var}(S)&=100\operatorname{Var}(X_i)=16.
\end{aligned}
$$

The normal approximation with the cutoff at 15 gives

$$
P(S<15)\approx P\left(Z<\frac{15-20}{\sqrt{16}}\right)
=P(Z>1.25)\approx 0.1056.
$$

**3.** For a score $X$ with $E[X]=75$ and $\operatorname{Var}(X)=25$, use Chebyshev's inequality for the interval from $55$ to $95$.

$$
P(\lvert X-75\rvert\ge20)\le \frac{25}{20^2}=\frac1{16}.
$$

Taking the complement yields $P(55<X<95)=P(\lvert X-75\rvert<20)\ge15/16$.

Let $Y_n=X_1^2+\cdots+X_n^2$ for independent $X_i\sim N(0,1)$.

##### A

Since $\operatorname{Var}(X_i)=E[X_i^2]-(E[X_i])^2=1$ and $E[X_i]=0$, we have $E[X_i^2]=1$.

##### B

The standard normal fourth moment is $E[X_i^4]=3$. Therefore $\operatorname{Var}(X_i^2)=E[X_i^4]-(E[X_i^2])^2=3-1^2=2$.

##### C

To approximate $P(Y_{50}>60)$, use $E[Y_{50}]=50E[X_i^2]=50$ and $\operatorname{Var}(Y_{50})=50\operatorname{Var}(X_i^2)=100$. By the central limit theorem,

$$
P(Y_{50}>60)
=P\left(\frac{Y_{50}-50}{\sqrt{100}}>\frac{60-50}{10}\right)
\approx P(Z>1)\approx 0.1587.
$$

##### Point estimation

Estimate a parameter $\theta$, which may be a scalar or a vector, by a statistic $\hat\theta_n$. The statistics indexed by $n$ are random variables. For example, $\bar X_n$ estimates $\mu$.

For a scalar parameter, a common measure of error is the mean squared error.

$$
\operatorname{MSE}(\hat\theta_n)=E[(\hat\theta_n-\theta)^2].
$$

##### Bias–variance decomposition

The mean squared error decomposes as

$$
\operatorname{MSE}(\hat\theta_n)=\operatorname{Var}(\hat\theta_n)
+\bigl(\operatorname{bias}(\hat\theta_n)\bigr)^2,
\qquad
\operatorname{bias}(\hat\theta_n)=E[\hat\theta_n]-\theta.
$$

If $\operatorname{bias}(\hat\theta_n)=0$, the estimator is unbiased for $\theta$.

![[Kyle Kabasares - Probability and Statistics - Bias variance and mean squared error targets.png|**Fig. 70** Four targets compare the effect of bias and spread on mean squared error. The sketches show low variance with zero, slight, or moderate bias, and high variance with zero bias.]]

##### Estimating an exponential mean

Suppose $X_1,\ldots,X_n$ are independent $\operatorname{Exp}(\lambda)$ variables with mean $\mu=1/\lambda$ and variance $\sigma^2=1/\lambda^2$. Consider estimating $\mu$ with $\hat\mu=c(X_1+\cdots+X_n)$ and choose $c$ to minimize $\operatorname{MSE}(\hat\mu)$.

By linearity, $E[\hat\mu]=cn\mu=cn/\lambda$. Substituting into the decomposition gives

$$
\begin{aligned}
\operatorname{MSE}(\hat\mu)
&=E[(\hat\mu-E[\hat\mu])^2]+(E[\hat\mu]-\mu)^2\\
&=E\left[\left(c(X_1+\cdots+X_n)-\frac{cn}{\lambda}\right)^2\right]
+\left(\frac{cn}{\lambda}-\frac1\lambda\right)^2.
\end{aligned}
$$

The sum $X_1+\cdots+X_n$ has mean $n/\lambda$. Using independence, the mean squared error simplifies to

$$
\begin{aligned}
\operatorname{MSE}(\hat\mu)
&=c^2\operatorname{Var}(X_1+\cdots+X_n)
+\frac{(cn-1)^2}{\lambda^2}\\
&=c^2\bigl(\operatorname{Var}(X_1)+\cdots+\operatorname{Var}(X_n)\bigr)
+\frac{(cn-1)^2}{\lambda^2}\\
&=\frac{c^2n+(cn-1)^2}{\lambda^2}.
\end{aligned}
$$

To minimize this quadratic, set its derivative with respect to $c$ to zero.

$$
\frac{2cn}{\lambda^2}+\frac{2n(cn-1)}{\lambda^2}=0
\quad\Longrightarrow\quad cn+cn^2-n=0
\quad\Longrightarrow\quad c=\frac{1}{n+1}.
$$

Thus the estimator and its bias are

$$
\hat\mu=\frac{X_1+\cdots+X_n}{n+1}
=\frac{n}{n+1}\bar X_n,
\qquad
\operatorname{bias}(\hat\mu)=\frac{n}{n+1}\mu-\mu=-\frac{\mu}{n+1}.
$$

##### Confidence intervals and standard error

The standard error of an estimator $\hat\theta_n$ is its sampling standard deviation.

$$
\operatorname{se}(\hat\theta_n)=\operatorname{sd}(\hat\theta_n)
=\sqrt{\operatorname{Var}(\hat\theta_n)}.
$$

For independent $X_i\sim\operatorname{Ber}(p)$, set $\hat p_n=\bar X_n$. The standard error is $\sqrt{p(1-p)/n}$. Since $p$ is unknown, estimate it by

$$
\widehat{\operatorname{se}}=\sqrt{\frac{\hat p_n(1-\hat p_n)}n}.
$$

The central limit theorem gives an approximate normal sampling distribution centered at $p$ for large $n$. Using the estimated standard error, an approximate $(1-\alpha)$ confidence interval for $p$ is

$$
\hat p_n\pm z_{\alpha/2}\widehat{\operatorname{se}}
=\hat p_n\pm z_{\alpha/2}\sqrt{\frac{\hat p_n(1-\hat p_n)}n},
$$

where $z_{\alpha/2}$ is the standard normal critical value with upper-tail probability $\alpha/2$.

##### Grade forecasting survey

Of 45 students, 35 said yes when asked whether grade forecasting should be offered in future semesters of Math 32. Thus $\hat p_{45}=\bar x_{45}=35/45$, and

$$
\widehat{\operatorname{se}}
=\sqrt{\frac{(35/45)(10/45)}{45}}\approx0.06.
$$

![[Kyle Kabasares - Probability and Statistics - Normal critical values for the grade forecasting survey.png|**Fig. 71** The shaded central $95\%$ of the standard normal distribution extends from $-1.96$ to $1.96$.]]

Using the rounded standard error gives the approximate $95\%$ confidence interval

$$
\left(\frac{35}{45}-1.96(0.06),\ \frac{35}{45}+1.96(0.06)\right)
\approx(0.66,0.90).
$$

##### Introduction to hypothesis testing

Start with a default theory, the null hypothesis $H_0$, and assess whether the observed data are compatible with it. Reject $H_0$ when the data provide sufficient evidence against it. The alternative hypothesis is denoted $H_1$.

| True hypothesis | Retain $H_0$ | Reject $H_0$ |
| --- | --- | --- |
| $H_0$ | Correct decision | Type I error |
| $H_1$ | Type II error | Correct decision |

To test whether a coin is fair, let $X_1,\ldots,X_n$ be independent $\operatorname{Ber}(p)$ variables. Test $H_0:p=1/2$ against $H_1:p\ne1/2$.

**)**

The lecture records counts by number of menstrual cycles.

| Group | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | More than 12 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Smokers | 29 | 16 | 17 | 4 | 3 | 9 | 4 | 5 | 1 | 1 | 1 | 3 | 7 |
| Nonsmokers | 198 | 107 | 55 | 38 | 18 | 22 | 7 | 9 | 5 | 3 | 6 | 6 | 12 |

Model the counts of cycles to the event as $X\sim\operatorname{Geo}(p_{\mathrm{smokers}})$ and $Y\sim\operatorname{Geo}(p_{\mathrm{nonsmokers}})$.

##### Two estimates of the geometric parameter

If $W\sim\operatorname{Geo}(p)$ counts trials starting at one, then $p=P(W=1)$. Using the first-cycle proportions gives

$$
\hat p_{\mathrm{smokers}}=\frac{29}{100}=0.29,
\qquad
\hat p_{\mathrm{nonsmokers}}=\frac{198}{486}\approx0.41.
$$

A second idea uses $E[W]=1/p$, so $p=1/E[W]$. If the waiting times are observed in full, replacing $E[W]$ with the sample mean gives $\hat p=1/\bar W_n$.

##### Maximum likelihood principle

Given a dataset, choose the parameter $\theta$ that maximizes the likelihood of the observed data under the model, written $P(\text{data}\mid\theta)$ for discrete data.

For example, consider two chip batches. The first has defect probability $p=1/2$ and the second $p=1/10$. Under either model, the ten inspected chips are modeled as independent Bernoulli observations with that batch's $p$.

![[Kyle Kabasares - Probability and Statistics - Two chip batches for the likelihood example.png|**Fig. 72** The two batches have defect probabilities of 50% and 10%.]]

If only the second chip is defective, the likelihood is $p(1-p)^9$. For batch 1 it is $(1/2)(1/2)^9\approx 0.00098$. For batch 2 it is $(1/10)(9/10)^9\approx 0.039$.

Bayes' rule relates the posterior to the likelihood and prior.

$$
P(\theta\mid\text{data})
=\frac{\underbrace{P(\text{data}\mid\theta)}_{\text{likelihood}}\,P(\theta)}
{P(\text{data})}.
$$

##### Log likelihood

The log likelihood is $\ell(\theta)=\ln L(\theta)$. The logarithm is strictly increasing and preserves local maxima where the likelihood is positive.

For a sequence of $n$ Bernoulli observations with $k$ successes,

$$
L(p)=p^k(1-p)^{n-k},
\qquad
\ell(p)=k\ln p+(n-k)\ln(1-p).
$$

For $0<k<n$, set $\ell'(p)=k/p-(n-k)/(1-p)=0$. Clearing the denominators gives $k(1-p)-(n-k)p=k-np=0$, so the maximum likelihood estimate is $\hat p=k/n$.

**)**

Suppose the observed data $x_1,\ldots,x_n$ come from an independent sample of $\operatorname{Exp}(\lambda)$ random variables. Find the maximum likelihood estimator of $\lambda$. The exponential density is

$$
f(x)=\begin{cases}
\lambda e^{-\lambda x} & x\ge0,\\
0 & x<0.
\end{cases}
$$

For independent observations from the exponential distribution, the likelihood and log likelihood are

$$
\begin{aligned}
L(\lambda)&=f(x_1)\cdots f(x_n)
=\lambda^n e^{-\lambda(x_1+\cdots+x_n)},\\
\ell(\lambda)&=n\ln\lambda-\lambda(x_1+\cdots+x_n).
\end{aligned}
$$

Setting $\ell'(\lambda)=n/\lambda-(x_1+\cdots+x_n)=0$ gives

$$
\hat\lambda=\frac{n}{x_1+\cdots+x_n}=\frac1{\bar x_n}.
$$

##### Maximum at a boundary

Suppose the observations $x_1=0.98$, $x_2=1.57$, and $x_3=0.31$ come from a uniform distribution on $[0,\theta]$. Find the maximum likelihood estimate of $\theta$. The density is $1/\theta$ on $[0,\theta]$ and zero elsewhere.

![[Kyle Kabasares - Probability and Statistics - Uniform density with an unknown upper endpoint.png|**Fig. 73** The uniform density has height $1/\theta$ and width $\theta$.]]

The likelihood is

$$
L(\theta)=f(x_1)f(x_2)f(x_3)=\begin{cases}
\theta^{-3} & \theta\ge\max\{x_1,x_2,x_3\}=1.57,\\
0 & \text{otherwise}.
\end{cases}
$$

Since $\theta^{-3}$ decreases on the positive part of the likelihood, the maximum occurs at the boundary $\hat\theta=\max\{x_1,x_2,x_3\}=1.57$.

![[Kyle Kabasares - Probability and Statistics - Likelihood for the uniform upper endpoint.png|**Fig. 74** The likelihood is zero below the largest observation, reaches its maximum there, and then decreases.]]

##### Maximum likelihood for a normal sample

Suppose $x_1,\ldots,x_n$ are independent observations from $N(\mu,\sigma^2)$. Find the maximum likelihood estimates of $\mu$ and $\sigma$. The density and its logarithm are

$$
\begin{aligned}
f(x)&=\frac1{\sigma\sqrt{2\pi}}\exp\left[-\frac12\left(\frac{x-\mu}{\sigma}\right)^2\right],\\
\ln f(x)&=-\tfrac12\ln(2\pi)-\ln\sigma-\tfrac12\left(\frac{x-\mu}{\sigma}\right)^2.
\end{aligned}
$$

![[Kyle Kabasares - Probability and Statistics - Normal density centered at mu.png|**Fig. 75** The normal curve is centered at $\mu$, with distances of one standard deviation marked on either side.]]

By independence, the joint likelihood is the product of the densities. Taking the logarithm gives

$$
\ell(\mu,\sigma)=\sum_{i=1}^n\ln f(x_i)
=-\frac n2\ln(2\pi)-n\ln\sigma-\frac12\sum_{i=1}^n\left(\frac{x_i-\mu}{\sigma}\right)^2.
$$

For fixed $\sigma>0$, setting the derivative with respect to $\mu$ to zero yields

$$
\frac{\partial\ell}{\partial\mu}=\frac1{\sigma^2}\sum_{i=1}^n(x_i-\mu)=0
\quad\Longrightarrow\quad
\hat\mu=\frac1n\sum_{i=1}^n x_i=\bar x_n.
$$

Since $\frac{d}{d\sigma}(1/(2\sigma^2))=-1/\sigma^3$, the stationarity equation for $\sigma$ is

$$
\frac{\partial\ell}{\partial\sigma}
=-\frac n\sigma+\frac1{\sigma^3}\sum_{i=1}^n(x_i-\mu)^2=0.
$$

Multiplying by $\sigma^3$ and substituting $\hat\mu=\bar x_n$ gives

$$
\hat\sigma=\sqrt{\frac1n\sum_{i=1}^n(x_i-\hat\mu)^2}.
$$

##### Properties of maximum likelihood estimators

The notes introduce the following properties under suitable regularity conditions.

1. **Invariance.** If $T$ is a maximum likelihood estimator of $\theta$, then $g(T)$ estimates $g(\theta)$ by maximum likelihood. For the normal sample the resulting variance estimate is $\widehat{\sigma^2}=(\hat\sigma)^2=n^{-1}\sum_{i=1}^n(x_i-\bar x_n)^2$.
2. **Asymptotic unbiasedness.** For the sequence $T_n$ of maximum likelihood estimators, the notes state $\lim_{n\to\infty}E[T_n]=\theta$.
3. **Asymptotic minimum variance.** The notes compare the variance of the maximum likelihood estimator $T$ with that of an unbiased estimator $U$, writing $\operatorname{Var}(T)\le\operatorname{Var}(U)$ as shorthand for the asymptotic comparison.

**4. Asymptotic normality.** As $n\to\infty$, the standardized maximum likelihood estimator $(\hat\theta_n-\theta)/\widehat{\operatorname{se}}$ converges in distribution to $N(0,1)$ under the regularity conditions.

##### Pregnancy data

The geometric-model estimates quoted here are $\hat p_{\mathrm{smokers}}=0.224$ and $\hat p_{\mathrm{nonsmokers}}=0.33$. For the geometric maximum likelihood estimator, the asymptotic standard error and its estimate are

$$
\operatorname{se}=\sqrt{\frac{p^2(1-p)}n},
\qquad
\widehat{\operatorname{se}}=\sqrt{\frac{\hat p^2(1-\hat p)}n}.
$$

Asymptotic normality gives the approximate $95\%$ confidence interval

$$
\left(\hat p-1.96\sqrt{\frac{\hat p^2(1-\hat p)}n},\
\hat p+1.96\sqrt{\frac{\hat p^2(1-\hat p)}n}\right).
$$

The notes report $(0.19,0.26)$ for smokers and $(0.31,0.35)$ for nonsmokers.

**)**

For an independent sample from $N(\mu,\sigma^2)$ with known $\sigma^2$, the normal-theory $95\%$ interval for $\mu$ is

$$
\left(\bar x-1.96\frac{\sigma}{\sqrt n},\
\bar x+1.96\frac{\sigma}{\sqrt n}\right).
$$

The normal calculation is exact when using the unrounded normal critical value. The page marks this material for Homework 6.

##### Gross calorific content of coal

The page starts listing measurements in $\unit{MJ/kg}$ for a particular shipment of coal.

| | | | |
| ---: | ---: | ---: | ---: |
| 23.870 | 23.730 | 23.712 | 23.760 |
| 23.640 | 23.850 | 23.840 | 23.860 |
| 23.940 | 23.830 | 23.877 | 23.700 |

The remaining measurements in $\unit{MJ/kg}$ are

| | | | |
| ---: | ---: | ---: | ---: |
| 23.796 | 23.727 | 23.778 | 23.740 |
| 23.890 | 23.890 | 23.678 | 23.771 |
| 23.860 | 23.690 | 23.800 | |

The notes give $n=23$ and use the reported mean $\energy{\bar x}=\quantity{23.788}{MJ/kg}$. The values as transcribed average to about $\quantity{23.793}{MJ/kg}$. The measurement process is approximately normal with a standard deviation of about $\quantity{0.1}{MJ/kg}$. Using the reported mean, the $95\%$ confidence interval for the true mean calorific content $\energy{\mu}$ of the shipment is

$$
\left(\energy{\bar x}-1.96\frac{0.1}{\sqrt{23}},\
\energy{\bar x}+1.96\frac{0.1}{\sqrt{23}}\right)
\approx\quantity{(23.747,23.829)}{MJ/kg}.
$$

##### Confidence intervals with unknown variance

For an independent sample from $N(\mu,\sigma^2)$ with unknown $\sigma^2$, the notes give an interval of the form $(\bar x-2.080\,s/\sqrt n,\ \bar x+2.080\,s/\sqrt n)$ as an example. The critical value changes with the degrees of freedom. The statistic

$$
\frac{\sqrt n(\bar X_n-\mu)}{s_n}
$$

has Student's $t$ distribution with $n-1$ degrees of freedom. It resembles the standard normal distribution and has one parameter, the number of degrees of freedom. Using the corresponding upper $2.5\%$ critical value gives the exact normal-sample $95\%$ confidence interval for $\mu$.

## Source

Kyle Kabasares, *Probability and Statistics (Math 32, UC Merced 2015)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{\bar x}$ | $\unit{MJ/kg}$ | Sample mean calorific content | Mean of the measured gross calorific content per unit mass in the coal example. |
| $\energy{\mu}$ | $\unit{MJ/kg}$ | Population mean calorific content | True mean gross calorific content per unit mass of the coal shipment. |
