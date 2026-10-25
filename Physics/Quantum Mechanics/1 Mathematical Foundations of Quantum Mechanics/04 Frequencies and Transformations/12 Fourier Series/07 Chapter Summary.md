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

> [!note]
> The source summary writes $c_n=\langle\phi_n,f\rangle$ while retaining the complex-series convention from the first bullet. That omits a factor of $1/\sqrt{2L}$. The symbols $c_n$ and $d_n$ above distinguish the two normalizations.
