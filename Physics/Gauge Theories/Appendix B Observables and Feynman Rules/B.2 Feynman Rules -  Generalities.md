---
title: "Feynman Rules: Generalities"
source_pdf: "D:\\GitHub\\books\\dokumen.pub_gauge-theories-of-the-strong-weak-and-electromagnetic-interactions-second-edition-secondnbsped-9781400848225.pdf"
source_page: "448"
pdf_page: 462
---

> [!TLDR]
> Feynman amplitudes combine external-state factors, internal propagators, interaction vertices, and loop and statistical factors.

<!-- PDF page 462; printed page 448 -->

The invariant amplitude $-i\mathcal{M}$ that corresponds to a Feynman diagram is given as a product of factors associated with external lines (particles in the initial or final state), internal lines, and interactions. For lowest-order perturbational calculations, the essential elements are these:

## External lines

1. For each external spinless boson, a factor 1.
2. For absorption or emission of a spin-1 vector boson, a factor $\mechanical{\epsilon}_\mu(\mechanical{k},\lambda)$ or $\mechanical{\epsilon}_\mu(\mechanical{k},\lambda)^*$, where $\mechanical{\epsilon}$ is the polarization four-vector for a boson with momentum $\mechanical{k}$ and helicity $\lambda$. Only the transverse polarization states of massless vector bosons are populated. In the case of propagation along the $z$-direction, the polarization vectors are, thus, $\mechanical{\epsilon}_\mu(\mechanical{k},\pm1)=(0;1,\pm i,0)/\sqrt2$. A massive vector at rest is also permitted the longitudinal state of polarization specified by $\mechanical{\epsilon}_\mu(\mechanical{k},0)=(0;0,0,-1)$. All these polarization vectors satisfy $\mechanical{\epsilon}_\mu(\mechanical{k},\lambda)\mechanical{\epsilon}^{\mu}(\mechanical{k},\lambda')^*=-\delta_{\lambda\lambda'}$. For the massless case, $\mechanical{k}\cdot\mechanical{\epsilon}=0$ as well.
3. For a spin-$\frac12$ fermion with momentum $\mechanical{p}$ and helicity $\lambda/2$ in the initial state, a factor $u_\lambda(\mechanical{p})$ on the right; in the final state, a factor $\bar u_\lambda(\mechanical{p})$ on the left.

<!-- PDF page 463; printed page 449 -->

4. For a spin-$\frac12$ antifermion with momentum $\mechanical{p}$ and helicity $\lambda/2$ in the initial state, a factor $\bar v_\lambda(\mechanical{p})$ on the left; in the final state, a factor $v_\lambda(\mechanical{p})$ on the right.

## Internal lines

A propagator is associated with each internal line representing a particle with four-momentum $\mechanical{q}$ and mass $\mechanical{m}$. It is given by $i\times$ the inverse of the operator that multiplies the field in the free-particle equation of motion, expressed in momentum space.

1. For each internal spin-zero boson, a factor

   $$
   \frac{i}{\mechanical{q}^{\,2}-\mechanical{m}^{\,2}+i\epsilon}.
   $$

2. For each internal photon, a factor (in Feynman gauge)

   $$
   \frac{-ig_{\mu\nu}}{\mechanical{q}^{\,2}+i\epsilon}.
   $$

3. For each internal massive vector boson with mass $\mechanical{M}_V$, a factor (in unitary gauge)

   $$
   \frac{-i(g_{\mu\nu}-\mechanical{q}_\mu\mechanical{q}_\nu/\mechanical{M}_V^{\,2})}
   {\mechanical{q}^{\,2}-\mechanical{M}_V^{\,2}+i\epsilon}.
   $$

4. For each internal fermion line, a factor

   $$
   \frac{i(\not{\mechanical{q}}+\mechanical{m})}
   {\mechanical{q}^{\,2}-\mechanical{m}^{\,2}+i\epsilon}.
   $$

   An internal antifermion is regarded as a fermion of negative four-momentum $(-\mechanical{q})$.

## Loops and combinatorics

1. For each momentum $\mechanical{k}$ not fully determined by the requirement of momentum conservation at the vertices, a factor

   $$
   \int\frac{d^4\mechanical{k}}{(2\pi)^4},
   $$

   where the integral runs over all values of the loop momentum. Techniques for dealing with the resulting integrals are reviewed in section B.3.
2. For each closed loop of fermions, a factor $-1$.
3. A factor $1/n!$ for each closed loop containing $n$ identical boson lines.

<!-- PDF page 464; printed page 450 -->

## Vertex factors

Each vertex represents a factor given by $i\times$ the corresponding interaction term in the momentum-space Lagrangian, with all fields amputated. Four-momentum conservation is implied.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mathcal{M}$ | — | Invariant amplitude | The transition amplitude; its mass dimension depends on the process. |
| $\mechanical{\epsilon}_\mu,\mechanical{\epsilon}$ | $1$ | Polarization vector | The boson polarization four-vector. |
| $\mechanical{k},\mechanical{p},\mechanical{q}$ | $\unit{\mathrm{GeV}}$ | Momentum | The boson, fermion, and internal-line four-momenta. |
| $\lambda,\lambda/2$ | $1$ | Helicity | The boson helicity and the fermion helicity. |
| $u_\lambda,\bar u_\lambda,v_\lambda,\bar v_\lambda$ | $\unit{\mathrm{GeV}^{1/2}}$ | Free-particle spinor | The external particle and antiparticle spinors. |
| $\mechanical{m},\mechanical{M}_V$ | $\unit{\mathrm{GeV}}$ | Particle mass | The internal particle mass and massive vector boson mass. |
