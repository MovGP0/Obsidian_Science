---
title: "Fitting combined exponential models"
catalogue_ids:
  - "2.16.2.10"
  - "2.16.2.11"
  - "2.16.2.12"
---

> [!TLDR]
> A product of a power and an exponential becomes a linear parameter problem; a sum of two exponentials gives a recurrence.

## Products of powers and exponentials

Read [[Empirical powers and exponential models]] first. Sometimes a pure power and a pure exponential both fail to match a table. A useful combined model is

$$
y=ax^b e^{cx},\qquad x>0,\quad a>0.
$$

Here $a,b,c$ are fixed real parameters. Take natural logarithms:

$$
Y=A+b\ln x+cx,\qquad Y=\ln y,\quad A=\ln a.
$$

The expression is linear in the unknowns $A,b,c$. Three suitable pairs give three simultaneous linear equations. There are two known columns, $\ln x$ and $x$; this is not generally one straight-line plot against $x$. A graph may rise and then fall when a positive power competes with a decreasing exponential. Its shape alone does not determine the three constants.

For exact positive data at $x=1,2,4$, write their logarithms as $Y_1,Y_2,Y_4$. Subtraction eliminates $A$:

$$
Y_2-Y_1=b\ln2+c,\qquad
Y_4-Y_2=b\ln2+2c.
$$

Subtract these equations to obtain $c=Y_4-2Y_2+Y_1$. Then $b=(Y_2-Y_1-c)/\ln2$ and $A=Y_1-c$. This elimination uses only school algebra.

For a concrete product fit, take outputs $2e^{-1}$, $8e^{-2}$, and $32e^{-4}$ at inputs $1,2,4$. Their logarithms are $Y_1=\ln2-1$, $Y_2=\ln8-2$, and $Y_4=\ln32-4$. The elimination formula gives

$$
c=(\ln32-4)-2(\ln8-2)+(\ln2-1)=-1.
$$

The logarithm terms cancel because $32\cdot2=8^2$. Next $Y_2-Y_1=\ln4-1$, so $b=(\ln4-1+1)/\ln2=2$. Finally $A=Y_1-c=\ln2$, giving $a=2$. Thus the fitted model is $y=2x^2e^{-x}$. At the new input $x=3$ it predicts $18e^{-3}\approx0.89617$. This example shows why all three transformed terms are needed: neither the power term nor the exponential term vanishes.

## Sums of two exponentials

Another family is $y=ae^{bx}+ce^{dx}$. Do not take $\ln y$ and split the sum: $\ln(u+v)$ is not $\ln u+\ln v$. The letters here name a different four-parameter family from the previous section.

At equally spaced inputs $x_n=x_0+nh$, set $y_n=y(x_n)$, $r=e^{bh}$, and $s=e^{dh}$. Absorb the starting input into amplitudes $A=ae^{bx_0}$, $C=ce^{dx_0}$. Then

$$
y_n=Ar^n+Cs^n.
$$

Since $r$ and $s$ solve $t^2-(r+s)t+rs=0$, multiply this identity by $Ar^n$ and $Cs^n$ and add. The result is

$$
y_{n+2}=S y_{n+1}-P y_n,\qquad S=r+s,\quad P=rs.
$$

Four observations supply two linear equations for $S,P$. Then solve $t^2-St+P=0$ for $r,s$. For real exponential rates and real spacing, both roots must be positive. Recover $b=\ln(r)/h$ and $d=\ln(s)/h$. Finally two observations determine $A,C$ by linear equations. Interchanging the two exponential terms gives the same model.

The source's exponential-sum entry uses this equally spaced recurrence. This derivation checks the identity directly; see [Bronshtein and coauthors, section 2.16.2.11](https://djvu.online/file/GdI2fptBUdLpJ).

## Fully worked example

Suppose the outputs at $x=0,1,2,3$ are $3,7,17,43$. The spacing is $h=1$. The recurrence equations are

$$
17=7S-3P,\qquad43=17S-7P.
$$

Multiply the first by $7$ and the second by $3$ to obtain $119=49S-21P$ and $129=51S-21P$. Subtract: $10=2S$, so $S=5$. The first equation then gives $P=6$. Solve $t^2-5t+6=(t-2)(t-3)=0$. Choose $r=2,s=3$.

At $x=0$, $A+C=3$; at $x=1$, $2A+3C=7$. Subtract twice the first from the second: $C=1$, and then $A=2$. Since $x_0=0$, no amplitude adjustment remains. Thus

$$
y=2\cdot2^x+3^x.
$$

Check the unused next prediction: at $x=4$ it is $2(16)+81=113$. The recurrence also gives $5(43)-6(17)=113$. Two independent calculations agree. A fifth recorded output would test the two-exponential assumption.

## Degenerate and unreliable cases

If both rates are equal, the two terms combine into one exponential and the four parameters cannot be identified separately. A zero amplitude has the same problem. Nearly equal rates make separation sensitive to rounding. A negative discriminant or a nonpositive root indicates that this real exponential model is not obtained by the method; do not take a real logarithm of such a root.

For noisy data the recurrence may amplify errors, especially when outputs almost satisfy a single exponential. Use more observations and compare residuals in the original outputs. Exact interpolation is a teaching example, not a general claim about reliable parameter estimation.

The recurrence requires equal input spacing, not merely ordered observations. If inputs are irregular, the multipliers between consecutive terms change. Use the original model equations or a numerical fit instead of applying the constant-coefficient recurrence to consecutive rows of such a table.

## Practice

1. For the product model, logarithmic outputs at inputs $1,2,4$ are $2$, $2+\ln2$, and $2+2\ln2$. Find $a,b,c$.
2. Show that $y_n=3(4^n)+2$ satisfies a second-order recurrence and find $y_3$.

## Worked answers

1. The formula above gives $c=(2+2\ln2)-2(2+\ln2)+2=0$. Then $b=1$, $A=2$, so $a=e^2$. The model reduces to $e^2x$.
2. The bases are $r=4,s=1$, so $S=5$, $P=4$. Thus $y_{n+2}=5y_{n+1}-4y_n$. Directly $y_3=3(64)+2=194$. The outputs $y_1=14,y_2=50$ give the same result $5(50)-4(14)=194$.
