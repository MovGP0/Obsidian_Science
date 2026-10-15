---
title: "B.3 Feynman Integrals"
source_pdf: "D:\\GitHub\\books\\dokumen.pub_gauge-theories-of-the-strong-weak-and-electromagnetic-interactions-second-edition-secondnbsped-9781400848225.pdf"
source_page: "450"
pdf_page: 464
bead: "Obsidian_Electronics-l4vx.109"
---

> [!TLDR]
> Auxiliary parameters and momentum shifts reduce Feynman loop integrals to symmetric or Gaussian integrals.

<!-- PDF page 464; printed page 450 -->

In general, the integral over an undetermined loop momentum $\mechanical{k}$ in a Feynman diagram takes the form

$$
\mathcal{I}=(2\pi)^{-4}\int
\frac{d^4\mechanical{k}\,F(\mechanical{k};\mechanical{p}_i;\mechanical{m}_j)}
{a_1a_2\cdots a_n}, \tag{B.3.1}
$$

where

$$
a_k=(\mechanical{k}-\mechanical{s}_k)^2-\mechanical{m}_k^{\,2}+i\epsilon, \tag{B.3.2}
$$

$\mechanical{s}_k$ is a linear combination of external momenta $\mechanical{p}_i$, $\mechanical{m}_j$ are (internal and external) masses in the problem, and the function $F$ is a polynomial in the components of $\mechanical{k}$. Convenient general methods for evaluating such integrals were devised by R. P. Feynman [1]. Careful elaborations appear in many textbooks (see in particular Jauch and Rohrlich [2]). The form of the $\mechanical{k}$-space integral may be simplified by the introduction of auxiliary parameters. This may be done in two ways, either of which may be advantageous in particular applications.

The first method relies upon the identity

$$
\xi_n=\frac{1}{a_1a_2\cdots a_n}
=(n-1)!\int_0^1dz_1\int_0^1dz_2\cdots\int_0^1dz_n
\frac{\delta(\sum_{i=1}^nz_i-1)}{[\sum_{i=1}^na_iz_i]^n} \tag{B.3.3}
$$

or the related forms

$$
\begin{aligned}
\xi_n&=(n-1)!\int_0^1dz_1\int_0^{z_1}dz_2\cdots
\int_0^{z_{n-2}}dz_{n-1}\\
&\quad\times[a_1+z_1(a_2-a_1)+\cdots+z_{n-1}(a_n-a_{n-1})]^{-n},
\end{aligned} \tag{B.3.4}
$$

and

$$
\begin{aligned}
\xi_n&=(n-1)!\int_0^1dz_1^{n-2}\int_0^1dz_2^{n-3}\cdots\int_0^1dz_{n-1}\\
&\quad\times[z_1z_2\cdots z_{n-1}(a_1-a_2)+z_1z_2\cdots z_{n-2}(a_2-a_3)+\cdots+a_n]^{-n}.
\end{aligned} \tag{B.3.5}
$$

Some other useful relationships of the same kind are

$$
\frac{1}{nA^nB}=\int_0^1
\frac{dx\,x^{n-1}}{[Ax+B(1-x)]^{n+1}}, \tag{B.3.6}
$$

<!-- PDF page 465; printed page 451 -->

$$
\frac{1}{A^n}-\frac{1}{B^n}
=-\int_0^1\frac{dx\,n(A-B)}{[(A-B)x+B]^{n+1}}. \tag{B.3.7}
$$

An integral characterized by (B.3.1) can always be brought to the schematic form

$$
\mathcal{I}=\underbrace{\int\cdots\int}_{\text{auxiliary parameters}}(2\pi)^{-4}
\int\frac{d^4\mechanical{k}\,F(\mechanical{k};\mechanical{p}_i;\mechanical{m}_j)}
{[(\mechanical{k}-\mechanical{R})^2-a^2]^n}, \tag{B.3.8}
$$

by such devices, the precise form depending on the identities employed. If the $\mechanical{k}$-space integral is at worst logarithmically divergent, a change of variable

$$
\mechanical{k}'=\mechanical{k}-\mechanical{R} \tag{B.3.9}
$$

will not affect the value of the integral (nor add any finite number to the logarithmic divergence). Hence the $\mechanical{k}$-space integral can be rewritten as

$$
(2\pi)^{-4}\int
\frac{d^4\mechanical{k}\,F(\mechanical{k}+\mechanical{R};\mechanical{p}_i;\mechanical{m}_j)}
{[\mechanical{k}^{\,2}-a^2]^n}. \tag{B.3.10}
$$

Because of the symmetry of the range of integration, the odd powers of $\mechanical{k}_\mu$ in $F$ do not contribute. Symmetric integration requires an average over the directions of $\mechanical{k}_\mu$, which amounts to the substitutions

$$
\mechanical{k}_\mu\mechanical{k}_\nu\to\frac14g_{\mu\nu}\mechanical{k}^{\,2}; \tag{B.3.11a}
$$

$$
\mechanical{k}_\mu\mechanical{k}_\nu\mechanical{k}_\rho\mechanical{k}_\sigma
\to\frac{1}{4!}(g_{\mu\nu}g_{\rho\sigma}+g_{\mu\rho}g_{\nu\sigma}
+g_{\mu\sigma}g_{\nu\rho})(\mechanical{k}^{\,2})^2, \tag{B.3.11b}
$$

and so on. Therefore, the general form to be evaluated is

$$
\mathcal{I}_{mn}=(2\pi)^{-4}\int
\frac{d^4\mechanical{k}\,(\mechanical{k}^{\,2})^{m-2}}
{(\mechanical{k}^{\,2}-a^2)^n}
=\frac{B(m,n-m)}{16\pi^2i(a^2)^{n-m}}, \tag{B.3.12}
$$

where the Euler beta function, $B(x,y)=\Gamma(x)\Gamma(y)/\Gamma(x+y)$, is finite provided $n>m>0$. It remains to perform the integrals over auxiliary parameters. In many calculations this last step accounts for the bulk of the labor, and an extensive calculus has been developed.

An alternative procedure for combining denominators is based upon the representation

$$
\frac{i}{\mechanical{q}^{\,2}-\mechanical{m}^{\,2}+i\epsilon}
=\int_0^\infty d\alpha\exp[i\alpha(\mechanical{q}^{\,2}-\mechanical{m}^{\,2}+i\epsilon)], \tag{B.3.13}
$$

<!-- PDF page 466; printed page 452 -->

which leads to

$$
\begin{aligned}
\xi_n=\frac{1}{a_1a_2\cdots a_n}
&=\prod_{j=1}^n\left[-i\int_0^\infty d\alpha_j\exp(i\alpha_ja_j)\right]\\
&=(-i)^n\int_0^\infty d\alpha_1\cdots\int_0^\infty d\alpha_n
\exp\left(i\sum_{j=1}^n\alpha_ja_j\right).
\end{aligned} \tag{B.3.14}
$$

By completing the square in the exponential, we may always bring the integral over loop momentum to the form

$$
(2\pi)^{-4}\int d^4\mechanical{k}\,
F(\mechanical{k}+\mechanical{R};\mechanical{p}_i;\mechanical{m}_j)
\exp(i\lambda\mechanical{k}^{\,2}), \tag{B.3.15}
$$

which may be evaluated using standard Gaussian integral techniques. (Simple illustrations of these manipulations are given in §8.2.1 and problem 8.7.) Note in particular that

$$
(2\pi)^{-4}\int d^4\mechanical{k}\,\exp(i\lambda\mechanical{k}^{\,2})
=\frac{1}{16\pi^2i\lambda^2}. \tag{B.3.16}
$$

Differentiation with respect to $\lambda$ then yields the general result

$$
(2\pi)^{-4}\int d^4\mechanical{k}\,(\mechanical{k}^{\,2})^m
\exp(i\lambda\mechanical{k}^{\,2})
=\frac{(m+1)!}{16\pi^2i\lambda^2(-i\lambda)^m}. \tag{B.3.17}
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{k},\mechanical{k}'$ | $\unit{\mathrm{GeV}}$ | Loop momentum | The original and shifted momentum integrated over a loop. |
| $\mechanical{p}_i$ | $\unit{\mathrm{GeV}}$ | External momentum | A momentum of an external particle. |
| $\mechanical{s}_k,\mechanical{R}$ | $\unit{\mathrm{GeV}}$ | Momentum shift | A linear combination of external momenta used to shift the integration variable. |
| $\mechanical{q}$ | $\unit{\mathrm{GeV}}$ | Propagator momentum | The four-momentum in the exponential propagator representation. |
| $\mechanical{m}_j,\mechanical{m}_k,\mechanical{m}$ | $\unit{\mathrm{GeV}}$ | Particle mass | The internal and external masses in the propagator denominators. |
