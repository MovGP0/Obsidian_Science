---
title: "Chapter Summary"
---

> [!TLDR]
> Fourier series are orthogonal mode expansions with convention-dependent coefficients. Parity, convergence conditions, and Parseval’s relation control how these expansions are calculated and interpreted.

- **Complex form:** $f(x)=\sum_n c_ne^{in\pi x/L}$, with $c_n=\tfrac1{2L}\int_{-L}^L f(x)e^{-in\pi x/L}\,dx$.
- **Inner-product coefficients:** For $\phi_n(x)=e^{in\pi x/L}/\sqrt{2L}$, the normalized-basis coefficient is $d_n=\langle\phi_n,f\rangle=\sqrt{2L}\,c_n$.
- **Real form:** Even functions use cosine coefficients $a_n$ and a constant term. Odd functions use sine coefficients $b_n$.
- **Convergence:** Under the stated Dirichlet conditions, the series approaches $f(x)$ at continuity points and the mean one-sided limit at a jump. The Gibbs overshoot approaches about 9% of the jump height.
- **Parseval:** $\tfrac1{2L}\int_{-L}^L|f|^2\,dx=\sum_n|c_n|^2$.
- **Quantum interpretation:** A box-state Fourier sine series expands the state in normalized energy eigenfunctions. Its coefficients are probability amplitudes; their squared magnitudes are energy probabilities.

## Reconstruct the argument

Start from orthogonality on one period. It fixes the coefficient prefactor, and pairing opposite labels gives the real form. Completeness then gives norm convergence and Parseval. Pointwise convergence needs an additional regularity theorem; it does not follow just from Parseval.

For a finite cutoff, the omitted squared coefficients give the mean-square error. This gives a practical stopping rule when integrated error is the required measure. It cannot certify a small maximum error near a jump.

Try this transfer check: change a function at one point, then translate the entire profile. The first operation leaves every coefficient unchanged. The second generally changes coefficient phases while preserving their magnitudes. Explain why Parseval cannot distinguish either change in the total squared norm.

> [!note]
> The source summary writes $c_n=\langle\phi_n,f\rangle$ while retaining the complex-series convention from the first bullet. That omits a factor of $1/\sqrt{2L}$. The symbols $c_n$ and $d_n$ above distinguish the two normalizations.
