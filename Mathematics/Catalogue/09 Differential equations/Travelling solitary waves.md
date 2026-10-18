---
title: "Travelling solitary waves"
catalogue_ids:
  - "9.2.5.2"
  - "9.2.5.3"
  - "9.2.5.4"
  - "9.2.5.5"
---

> [!TLDR]
> A travelling-wave substitution reduces several nonlinear PDEs to ODEs and produces explicit localized pulses or kinks for specific coefficient conventions.

## A shape that travels without changing

Read [[Nonlinear evolution patterns and chaos]], [[First-order solution methods]], and [[Schrödinger evolution and probability]]. Put $z=x-ct-x_0$ and try $u(x,t)=U(z)$, with constant $c,x_0$. Then $u_t=-cU'$, $u_x=U'$, and $u_{xxx}=U^{(3)}$. A **solitary wave** is localized relative to its far-field background. A **soliton** has the additional special interaction behavior associated with an integrable equation, such as re-emerging from collisions with the same shape and shifted location. One pulse formula alone does not prove that collision property.

All variables below are dimensionless. Coefficient signs and numerical factors are specified because changing them changes amplitudes, speeds, and sometimes the existence of a particular localized family. Define $\cosh z=(e^z+e^{-z})/2$, $\operatorname{sech}z=1/\cosh z$, and $\tanh z=(e^z-e^{-z})/(e^z+e^{-z})$. Their derivatives follow by quotient differentiation.

## Korteweg–de Vries equation

Use the convention

$$
u_t+6u u_x+u_{xxx}=0.
$$

The travelling substitution gives $-cU'+6UU'+U^{(3)}=0$. Integrate once to obtain $U''=cU-3U^2+A$. Multiplication by $2U'$ and another integration gives

$$
(U')^2=cU^2-2U^3+2AU+B.
$$

For a smooth localized pulse tending to zero with its derivatives as $z\to\pm\infty$, both constants vanish. Thus $(U')^2=U^2(c-2U)$. A positive peak has $U'=0$ and therefore peak value $c/2$; this family requires $c>0$.

The explicit pulse is

$$
U(z)=\frac c2\operatorname{sech}^2\left(\frac{\sqrt c}{2}z\right).
$$

To verify it without trusting a remembered formula, use the identity $(a\operatorname{sech}^2(kz))''=4k^2U-(6k^2/a)U^2$. With $a=c/2$ and $k=\sqrt c/2$, it becomes $U''=cU-3U^2$, exactly the integrated equation. Differentiate this identity to recover the PDE. Larger $c$ gives a taller, narrower pulse that travels faster in this convention.

For $c=4$, $x_0=0$, the full example is $u=2\operatorname{sech}^2(x-4t)$. Its peak is $2$ and occurs at $x=4t$. Nonzero constants $A,B$ can produce periodic travelling profiles when the cubic permits bounded oscillation between appropriate turning roots. The zero-background boundary condition selected the solitary family; it was not an arbitrary removal of integration constants.

## Focusing nonlinear Schrödinger equation

For complex $q$, take

$$
iq_t+q_{xx}+2|q|^2q=0.
$$

Set $q(x,t)=e^{i\eta^2t}Q(x)$ with $Q=\eta\operatorname{sech}(\eta x)$ and $\eta>0$. Since $Q''=\eta^2Q-2Q^3$, substitution gives $-\eta^2Q+Q''+2Q^3=0$. This is a stationary localized amplitude with a rotating phase. A moving family is

$$
q=\eta\operatorname{sech}[\eta(x-vt-x_0)]
\exp\left(i\left[\frac v2x+
\left(\eta^2-\frac{v^2}{4}\right)t+\theta_0\right]\right),
$$

with real $v,x_0,\theta_0$. Differentiate the translating argument and the phase separately: the first-derivative terms cancel because the phase gradient is $v/2$, leaving the same ODE for $Q$. The plus sign before $2|q|^2q$ is the focusing convention used here. Reversing that sign does not preserve this bright zero-background pulse; defocusing equations have different families, including nonzero-background dark profiles.

## Sine–Gordon equation

For real $u$, take

$$
u_{tt}-u_{xx}+\sin u=0.
$$

The static profile $U(z)=4\arctan e^z$ satisfies $U'=2\operatorname{sech}z$ and $U''=-2\operatorname{sech}z\tanh z=\sin U$. Its limits are $0$ and $2\pi$, so it is a **kink**, a transition between different constant backgrounds rather than a pulse returning to the same value.

For $|v|<1$, set $z=(x-vt-x_0)/\sqrt{1-v^2}$. Then $u_{tt}-u_{xx}=(v^2-1)U''/(1-v^2)=-U''$, so the same profile gives the moving kink. The condition $|v|<1$ keeps the scale real in this family. It is a condition on this formula, not a classification of every conceivable solution of the PDE. The antikink reverses the endpoint ordering, while other sine–Gordon solutions include localized temporal oscillations called breathers.

## Further equations: modified KdV and BBM

The focusing **modified KdV equation** is $u_t+6u^2u_x+u_{xxx}=0$. The same travelling reduction with zero far-field constants gives $U''=cU-2U^3$. For $c>0$,

$$
U=\sqrt c\operatorname{sech}(\sqrt c\,z)
$$

satisfies this identity. Its amplitude is $\sqrt c$, unlike the KdV value $c/2$, because its nonlinearity is cubic after integration rather than quadratic. Both signs of this modified KdV pulse also work.

The **Benjamin–Bona–Mahony equation** in one common convention is $u_t+u_x+u u_x-u_{xxt}=0$. The travelling ansatz gives $cU''=(c-1)U-U^2/2$ after one integration with zero far-field constant. For $c>1$, a positive solitary wave is

$$
U=3(c-1)\operatorname{sech}^2\left(
\frac12\sqrt{\frac{c-1}{c}}z\right).
$$

Substitute $a=3(c-1)$, $k^2=(c-1)/(4c)$ into the second-derivative identity above to check it. BBM supplies a useful solitary-wave example, but it is not generally assigned the same integrable soliton-collision structure as KdV. “Has a solitary wave” and “is an integrable soliton equation” are different claims.

## How far the substitution takes us

A travelling ansatz finds a restricted family. It does not solve arbitrary initial data, prove stability, or prove that colliding profiles simply add. Nonlinear superposition fails even for integrable equations: a multi-soliton solution has an interaction region and cannot be constructed by a plain sum of single pulses. Boundary conditions can also rule out a whole-line solitary formula on a finite interval. Use the exact original PDE, the coefficient convention, the domain, and the far-field conditions in every verification.

## Practice

1. For the KdV convention above, find the peak and speed of $u=8\operatorname{sech}^2[2(x-16t)]$.
2. Find the static sine–Gordon kink value at $x=x_0$ and its two far-field limits. Is it a zero-background pulse?

## Worked answers

1. Matching $c/2=8$ gives $c=16$, and $\sqrt c/2=2$ agrees with the width factor. The peak is $8$ at $x=16t$, so the speed parameter is $16$.
2. At the center, $4\arctan1=\pi$. As $x\to-\infty$, the exponential tends to zero and $u\to0$. As $x\to+\infty$, $\arctan e^{x-x_0}\to\pi/2$ and $u\to2\pi$. The endpoints differ, so it is a kink rather than a pulse on one zero background.

## Further reading

The Durham [Solitons lecture notes](https://www.maths.dur.ac.uk/users/stefano.cremonesi/pictures_animations_Solitons/Solitons_notes_2023_24.pdf) develop KdV and sine–Gordon travelling waves and distinguish single-wave formulas from integrable interactions. Peter Miller’s [focusing NLS research paper](https://dept.math.lsa.umich.edu/~millerpd/docs/J31.pdf) gives an advanced account of the NLS soliton family; its coefficient convention must be checked before comparing formulas.
