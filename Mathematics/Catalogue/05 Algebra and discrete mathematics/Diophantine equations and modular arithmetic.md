---
title: "Diophantine equations and modular arithmetic"
catalogue_ids:
  - "5.4.2"
  - "5.4.3"
---

> [!TLDR]
> Integer equations and congruences are solved with greatest common divisors, Bézout identities, and consistent remainder arithmetic.

## Linear Diophantine equations

A **Diophantine equation** asks for integer solutions. The linear two-variable form is $ax+by=c$, with given integers $a,b,c$. Assume $a,b$ are not both zero, and put $d=\gcd(a,b)>0$. A solution exists exactly when $d\mid c$.

Necessity follows because $d$ divides $ax+by$ for every integer pair. For sufficiency, the extended Euclidean algorithm gives $au+bv=d$. If $c=dk$, then $(x,y)=(ku,kv)$ is a solution. Thus the gcd condition both tests solvability and supplies a construction. When $a=b=0$, the equation is separate: every pair solves it if $c=0$, and no pair solves it otherwise.

Given one solution $(x_0,y_0)$, all solutions are

$$
x=x_0+\frac{b}{d}t,\qquad
y=y_0-\frac{a}{d}t,\qquad t\in\mathbb Z.
$$

Substitution proves these pairs work. Conversely subtract the two equations to get $a(x-x_0)=-b(y-y_0)$. After dividing by $d$, the coefficients $a/d,b/d$ are relatively prime; Euclid's lemma implies that $b/d$ divides $x-x_0$. This gives the stated parameterization. It describes integer solutions, not only positive ones. Additional inequalities must be imposed afterward.

## Worked equation and positive solutions

Solve $18x+30y=42$. The gcd is $6$, which divides $42$. Divide the whole equation by $6$: $3x+5y=7$. Since $3(-1)+5(2)=7$, one solution is $(-1,2)$. All solutions are

$$
x=-1+5t,\qquad y=2-3t.
$$

For both variables nonnegative, $t\ge1$ from $x\ge0$, but $t\le0$ from $y\ge0$. No integer satisfies both conditions. There are infinitely many integer solutions and no nonnegative integer solutions. This difference is easy to miss if the original problem asks for counts rather than arbitrary integers.

## Congruences and residue classes

For positive modulus $m$, $a\equiv b\pmod m$ means $m\mid(a-b)$. Each class consists of all integers differing by multiples of $m$. The classes can be represented by $0,1,\ldots,m-1$. Addition and multiplication on representatives give consistent classes: replacing $a$ by $a+km$ changes sums and products only by multiples of $m$.

Use this to reduce calculations early. For example $27\cdot38\equiv2\cdot3=6\equiv1\pmod5$. Negative representatives are valid: $38\equiv-2\pmod5$ can be more convenient than $3$. A remainder is a chosen representative; a residue class is the entire set of equivalent integers.

Division needs care. An inverse of $a$ modulo $m$ exists exactly when $\gcd(a,m)=1$. Bézout gives $au+mv=1$, hence $au\equiv1\pmod m$. If an inverse existed with gcd greater than one, that gcd would divide both $au$ and $m$ and hence $1$, an impossibility. Cancellation of a noninvertible factor is invalid: $2\cdot1\equiv2\cdot4\pmod6$, but $1\not\equiv4\pmod6$.

## Solving linear congruences

The congruence $ax\equiv b\pmod m$ is equivalent to $ax+my=b$ for some integer $y$ after a possible sign change. Thus it is solvable exactly when $d=\gcd(a,m)$ divides $b$. If it is solvable, there are $d$ different solutions modulo $m$. Indeed the reduced congruence fixes one class modulo $m/d$. Adding $m/d$ repeatedly gives $d$ distinct representatives before the value changes by the full modulus $m$. This counts remainder classes, although each class contains infinitely many integer solutions.

For $6x\equiv8\pmod{14}$, the gcd is $2$. Divide the integers and modulus by $2$ to obtain $3x\equiv4\pmod7$. Since $3^{-1}\equiv5\pmod7$, multiply by $5$ to get $x\equiv20\equiv6\pmod7$. Within modulus $14$, this gives $x\equiv6$ or $13$. Direct checks give $36\equiv8$ and $78\equiv8\pmod{14}$.

## Combining independent remainder conditions

The Chinese remainder theorem says that if $m,n$ are relatively prime, any pair of congruences $x\equiv a\pmod m$, $x\equiv b\pmod n$ has a unique solution modulo $mn$.

For $x\equiv2\pmod3$ and $x\equiv3\pmod5$, write $x=2+3k$. The second condition becomes $3k\equiv1\pmod5$. Since the inverse of $3$ is $2$, $k\equiv2$, and $x\equiv8\pmod{15}$. If two solutions existed, their difference would be divisible by both $3$ and $5$, hence by $15$. This proves uniqueness of the class.

When the moduli are not relatively prime, compatibility matters. Conditions modulo $4$ and $6$ must agree modulo their gcd $2$. Thus $x\equiv1\pmod4$, $x\equiv0\pmod6$ has no solution. Conditions $x\equiv2\pmod4$, $x\equiv0\pmod6$ are compatible and give $x\equiv6\pmod{12}$, with modulus the lcm, not the product.

## Practice

1. Solve $14x+21y=35$ in integers.
2. Solve $4x\equiv2\pmod{10}$ and explain why ordinary division by $4$ is not appropriate.

### Worked answers

1. Divide by the gcd $7$ to get $2x+3y=5$. The pair $(1,1)$ works. All solutions are $x=1+3t$, $y=1-2t$, with integer $t$. Substitution gives $2+6t+3-6t=5$.
2. The gcd is $2$, so divide the congruence and its modulus by $2$: $2x\equiv1\pmod5$. Multiplication by inverse $3$ gives $x\equiv3\pmod5$. Hence $x\equiv3$ or $8\pmod{10}$. Four has no inverse modulo ten, so canceling it as in a field would lose the required remainder structure.
