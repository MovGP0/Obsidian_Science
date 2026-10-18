---
title: "Solve difference equations with Z-transforms"
catalogue_ids:
  - "15.4.2"
  - "15.4.2.1"
  - "15.4.2.2"
  - "15.4.2.3"
---

> [!TLDR]
> Unilateral Z-transforms encode initial sequence values, while boundary-value recurrences require data at separate indices.

## General linear difference equations

Read [[Z-transform rules and inversion]] first. A **difference equation**, or recurrence, relates values of a sequence at different integer indices. A constant-coefficient linear equation has the form

$$
a_py[n+p]+a_{p-1}y[n+p-1]+\cdots+a_0y[n]=r[n],\qquad n\geq0.
$$

The order is $p$ when $a_p\ne0$. Initial values $y[0],\ldots,y[p-1]$ determine each following value by ordinary arithmetic. The unilateral Z-transform reorganizes this recursion into algebra. For the $j$-step shift,

$$
\mathcal Z_+\{y[n+j]\}
=z^jY(z)-\sum_{m=0}^{j-1}y[m]z^{j-m}.
$$

Derive it by substituting $q=n+j$ and removing the $j$ missing initial terms. Apply it to each recurrence term, solve for $Y$, and invert using a right-sided expansion. If the forcing grows at most exponentially, the recursively defined solution also has at most exponential growth, so the transform exists outside a sufficiently large circle.

Variable coefficients such as $ny[n]$ usually produce derivatives of $Y(z)$ through the rule $ny[n]\leftrightarrow-zY'(z)$. As with variable-coefficient differential equations, transformation need not reduce the problem to algebra.

## Worked first-order example

Solve $y[n+1]-ay[n]=1$ with $y[0]=0$. Transformation gives $zY-aY=z/(z-1)$ and therefore

$$
Y(z)=\frac z{(z-1)(z-a)}.
$$

For $a\ne1$, partial fractions give $y[n]=(1-a^n)/(1-a)$. You can also obtain this by summing $1+a+\cdots+a^{n-1}$. At $n=0$, the empty sum is zero. For $a=1$, the original recurrence adds $1$ at each step, so $y[n]=n$; take that case separately rather than divide by zero. The right-sided ROC of the nondegenerate rational expression is outside all its uncancelled poles.

## Second-order initial-value problem

Solve

$$
y[n+2]-3y[n+1]+2y[n]=0,\qquad y[0]=1,\quad y[1]=0.
$$

Use both shift rules:

$$
(z^2Y-z^2)-3(zY-z)+2Y=0.
$$

Thus $(z^2-3z+2)Y=z^2-3z$. Seek $Y=Az/(z-1)+Bz/(z-2)$. After combining numerators, compare coefficients:

$$
A+B=1,\qquad 2A+B=3.
$$

Hence $A=2$, $B=-1$, and $y[n]=2-2^n$. Check $y[0]=1$, $y[1]=0$, and $y[2]=-2$. Substitution gives $-2-3(0)+2(1)=0$ at the first step. The ROC is $|z|>2$.

The associated characteristic polynomial is $(\lambda-1)(\lambda-2)$. Its roots explain the two modes $1^n$ and $2^n$. A repeated root $a$ produces both $a^n$ and $na^n$. Partial fractions then include a repeated denominator, so forgetting repeated poles loses a solution mode.

For example, $y[n+2]-2y[n+1]+y[n]=0$ with $y[0]=2$, $y[1]=5$ has characteristic polynomial $(\lambda-1)^2$. The solution must have the form $A+Bn$. The data give $A=2$ and $B=3$, hence $y[n]=2+3n$. Its transform is $2z/(z-1)+3z/(z-1)^2$. The repeated pole represents the linear term. Check by subtraction: consecutive differences are all $3$, so the second difference is zero. Keeping only a constant mode could never meet both initial values.

## Second-order boundary-value problem

Initial values are not the same as boundary values. Consider

$$
y[n+1]-2y[n]+y[n-1]=0,\qquad 1\leq n\leq N-1,
$$
$$
y[0]=A,\qquad y[N]=B,\qquad N\geq1.
$$

Treat the unknown initial value as $y[1]=C$. Put $m=n-1$ to get $y[m+2]-2y[m+1]+y[m]=0$. Extend this recurrence temporarily to all $m\geq0$ so that a unilateral transform is available. It gives

$$
(z-1)^2Y=z^2A+z(C-2A).
$$

Rewrite its inverse as $y[n]=A+(C-A)n$. The endpoint $y[N]=B$ then gives $C-A=(B-A)/N$. Consequently

$$
y[n]=A+\frac{B-A}{N}n,\qquad 0\leq n\leq N.
$$

The extension was a calculation device. The requested answer is its restriction to the finite interval. One can avoid transforms here: the recurrence says successive first differences are equal, so the sequence is linear. This direct check also proves uniqueness.

![[catalogue-ch15-boundary-recurrence.svg|**Fig. C.ch15.1** Equal first differences join the two endpoint values in the boundary-value example.]]

For $N=4$, $A=1$, and $B=5$, the values are $1,2,3,4,5$. Each interior value is the average of its two neighbours. If the recurrence instead has modes that vanish at both endpoints, a boundary-value problem can have multiple solutions or no solution. Solving the endpoint equations is essential; the number of supplied values alone does not guarantee uniqueness.

## Practical checks

Keep the index range in every statement. A formula valid for $n\geq0$ can fail for negative indices. Check the initial values and at least one recurrence step independently. For boundary data, substitute both endpoints. A recurrence's long-run behaviour follows from its modes: a term $a^n$ decays for $|a|<1$, stays bounded for $|a|=1$ unless a polynomial factor occurs, and grows for $|a|>1$ when its coefficient is nonzero. This is a statement about the mathematical sequence, not about the transform's convergence at every $z$.

## Practice

1. Solve $y[n+1]=2y[n]$, $y[0]=3$, and state the ROC.
2. Solve the boundary recurrence above for $N=3$, $A=2$, and $B=-1$.

> [!example]- Worked answers
> 1. The transform equation is $zY-3z=2Y$, hence $Y=3z/(z-2)$. Right-sided inversion gives $y[n]=3\cdot2^n$ and ROC $|z|>2$.
> 2. The common difference is $(-1-2)/3=-1$, so $y[n]=2-n$ on $0\leq n\leq3$. The list is $2,1,0,-1$. For example, $0-2(1)+2=0$, and both endpoint values agree.
