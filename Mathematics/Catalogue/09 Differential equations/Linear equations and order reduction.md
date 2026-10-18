---
title: "Linear equations and order reduction"
catalogue_ids:
  - "9.1.2"
  - "9.1.2.1"
  - "9.1.2.2"
  - "9.1.2.3"
  - "9.1.2.6"
---

> [!TLDR]
> A regular linear equation of order n has n independent homogeneous solutions; reduction of order and variation of parameters build solutions from known ones.

## Higher derivatives and first-order systems

Read [[07.06 Higher derivatives]], [[First-order solution methods]], and [[14.06 Linear systems]]. An order-$n$ ODE involves $y^{(n)}$, the $n$th derivative. For a normalized equation $y^{(n)}=F(x,y,y',\ldots,y^{(n-1)})$, introduce $z_1=y$, $z_2=y'$, and so on up to $z_n=y^{(n-1)}$. The equation becomes

$$
z_1'=z_2,\quad z_2'=z_3,\quad\ldots,\quad
z_n'=F(x,z_1,\ldots,z_n).
$$

Thus one higher-order equation is a system of first-order equations. Initial data must specify all $n$ values $z_j(x_0)$. Local existence and uniqueness follow from the corresponding continuity and local Lipschitz assumptions for the vector right side. If the leading coefficient of the original equation vanishes, normalization can fail and this theorem may not apply there.

## The general linear equation

A regular normalized linear equation is

$$
L[y]=y^{(n)}+a_{n-1}(x)y^{(n-1)}+\cdots+a_0(x)y=g(x),
$$

with continuous coefficients and $g$ on a common interval. Linearity means $L[au+bv]=aL[u]+bL[v]$. Homogeneous solutions satisfy $L[y]=0$. If $y_p$ solves the inhomogeneous equation, every solution is $y_p+y_h$, because $L[y-y_p]=0$.

The homogeneous solution space has dimension $n$: assigning the $n$ initial values identifies one solution, and this assignment is linear and invertible. This explains the number of independent constants. It is not a reason to add $n$ arbitrary functions or to count constants in an unverified formula.

## Second-order equations and the Wronskian

For $y''+p(x)y'+q(x)y=g(x)$, two homogeneous solutions $y_1,y_2$ form a fundamental pair when they are linearly independent. The **Wronskian** is

$$
W=y_1y_2'-y_1'y_2.
$$

For homogeneous solutions, differentiation and substitution give $W'=-pW$. Hence $W(x)=W(x_0)\exp(-\int_{x_0}^x p(s)ds)$. On a regular connected interval it is either nowhere zero or identically zero. This special conclusion uses the fact that both functions solve the same linear ODE; it is false as a general test for arbitrary differentiable functions.

For $y_1=\cos x$ and $y_2=\sin x$, $W=1$. Therefore all solutions of $y''+y=0$ are $A\cos x+B\sin x$. The initial data $y(0)=a$, $y'(0)=b$ give $A=a$ and $B=b$.

## Reduction of order from a known solution

Suppose $y_1$ is a nonzero homogeneous solution on a subinterval. Set $y=v y_1$. Substitute the product derivatives into $y''+py'+qy=0$. The terms with $v$ vanish because $y_1$ solves the equation, leaving

$$
y_1v''+(2y_1'+p y_1)v'=0.
$$

Set $w=v'$ and solve a first-order linear equation. A useful resulting second solution is

$$
y_2=y_1\int\frac{e^{-\int p(x)dx}}{y_1^2}\,dx.
$$

This formula is used where $y_1\ne0$; an original equation can be regular even where this particular formula is inconvenient.

For $x^2y''-2y=0$ on $x>0$, $y_1=x^2$ works. Normalization gives $p=0$, so $y_2=x^2\int x^{-4}dx=-1/(3x)$. A nonzero constant scale is irrelevant; choose $y_2=1/x$. Thus $y=Ax^2+B/x$. This is not a formula across $x=0$, where the normalized coefficient is undefined.

Other missing-variable cases also reduce order. If an equation contains no $y$, set $v=y'$ and lower the order by one. If an autonomous second-order equation has no explicit $x$, set $v(y)=y'$ on a monotone branch and use $y''=v\,dv/dy$. For $y''=2y$, this gives $v\,dv/dy=2y$, hence $v^2=2y^2+C$. A turning point where $y'=0$ requires care because $y$ may cease to be a valid local independent variable.

## Variation of parameters

For a fundamental pair, seek $y_p=u_1y_1+u_2y_2$ and impose $u_1'y_1+u_2'y_2=0$. Substitution gives a second equation $u_1'y_1'+u_2'y_2'=g$. Solving these two linear equations yields

$$
u_1'=-\frac{y_2g}{W},\qquad u_2'=\frac{y_1g}{W}.
$$

For $y''+y=\sec x$ on $(-\pi/2,\pi/2)$, take the cosine-sine pair. Then $u_1'=-\tan x$ and $u_2'=1$. Choose $u_1=\log(\cos x)$ and $u_2=x$, giving

$$
y_p=\cos x\log(\cos x)+x\sin x.
$$

The logarithm is real on this interval. Its derivatives give $y_p''+y_p=\cos x+\sin^2x/\cos x=\sec x$. Add $A\cos x+B\sin x$ for the general solution. Integration constants in $u_1,u_2$ only reproduce homogeneous terms; they do not supply two additional independent constants.

## A missing dependent variable

For $y''+2y'=x$, the unknown $y$ does not occur without a derivative. Put $v=y'$ to obtain $v'+2v=x$. A linear integrating factor gives $v=x/2-1/4+Ce^{-2x}$. One more integration gives

$$
y=\frac{x^2}{4}-\frac x4-\frac C2e^{-2x}+D.
$$

There are two independent constants, as expected for the regular second-order equation. Differentiating once recovers $v$, and substituting $v'+2v$ gives $x$. The reduction solved only for the derivative at first; omitting the final constant $D$ would lose solutions with different vertical offsets. This case needs no monotonicity assumption because the independent input remains $x$ throughout.

## Practice

1. Rewrite $y^{(3)}+y'-y=x$ as a first-order system and list the initial values it needs.
2. Use $y_1=x$ to find a second solution of $y''=0$ on $x>0$ by reduction of order.

## Worked answers

1. Put $z_1=y$, $z_2=y'$, $z_3=y''$. Then $z_1'=z_2$, $z_2'=z_3$, $z_3'=x-z_2+z_1$. Specify $z_1(x_0),z_2(x_0),z_3(x_0)$, equivalently $y,y',y''$ at one input.
2. Here $p=0$ and $y_2=x\int x^{-2}dx=-1$. Thus the independent solutions can be $x$ and $1$. Their combination $Ax+B$ is the full family. Although the formula used $x>0$, these functions solve the original regular equation on all real $x$.
