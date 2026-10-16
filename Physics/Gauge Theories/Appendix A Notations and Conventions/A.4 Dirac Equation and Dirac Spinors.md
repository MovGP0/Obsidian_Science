---
title: "Dirac Equation and Dirac Spinors"
source_pdf: "D:\\GitHub\\books\\dokumen.pub_gauge-theories-of-the-strong-weak-and-electromagnetic-interactions-second-edition-secondnbsped-9781400848225.pdf"
source_page: "437"
pdf_page: 451
---

> [!TLDR]
> Dirac spinors describe free particles and antiparticles; their projection and conjugation rules simplify transition amplitudes.

<!-- PDF page 451; printed page 437 -->

A free spin-$\frac12$ particle of mass $\mechanical{m}$ with four-momentum $\mechanical{p}=(\sqrt{\mechanical{\mathbf p}^{\,2}+\mechanical{m}^{\,2}};\mechanical{\mathbf p})$ and spin $\mechanical{s}$ is described by the positive-energy spinor $u(\mechanical{p},\mechanical{s})$. The four-vector $\mechanical{s}$ satisfies $\mechanical{s}\cdot\mechanical{p}=0$, $\mechanical{s}^{\,2}=-1$. In the rest frame of the particle, it is the polarization vector

$$
\mechanical{s}^{\mu}=(0;\mechanical{\hat{\mathbf s}}),\qquad
\mechanical{\hat{\mathbf s}}\cdot\mechanical{\hat{\mathbf s}}=1. \tag{A.4.1}
$$

The positive-energy spinor satisfies the Dirac equation

$$
(\not{\mechanical{p}}-\mechanical{m})u(\mechanical{p},\mechanical{s})=0, \tag{A.4.2}
$$

whereas the adjoint spinor

$$
\bar u(\mechanical{p},\mechanical{s})\equiv
u^\dagger(\mechanical{p},\mechanical{s})\gamma^0 \tag{A.4.3}
$$

satisfies

$$
\bar u(\mechanical{p},\mechanical{s})(\not{\mechanical{p}}-\mechanical{m})=0. \tag{A.4.4}
$$

<!-- PDF page 452; printed page 438 -->

The negative-energy solutions $v(\mechanical{p},\mechanical{s})$ and $\bar v(\mechanical{p},\mechanical{s})\equiv v^\dagger(\mechanical{p},\mechanical{s})\gamma^0$ correspond to antiparticles. They satisfy the Dirac equations

$$
(\not{\mechanical{p}}+\mechanical{m})v(\mechanical{p},\mechanical{s})=0, \tag{A.4.5}
$$

$$
\bar v(\mechanical{p},\mechanical{s})(\not{\mechanical{p}}+\mechanical{m})=0. \tag{A.4.6}
$$

It is frequently a convenience to work in a helicity basis in which the spinors $u_\lambda(\mechanical{p})$ are eigenstates of the operator $\gamma_5\not{\mechanical{s}}$ (defined for convenience as twice the helicity), with eigenvalues $\lambda=\pm1$ for spin aligned parallel or antiparallel to the direction of motion. The spinors are normalized such that

$$
\bar u_\lambda(\mechanical{p})u_\mu(\mechanical{p})=2\mechanical{m}\delta_{\lambda,\mu}, \tag{A.4.7}
$$

$$
\bar v_\lambda(\mechanical{p})v_\mu(\mechanical{p})=-2\mechanical{m}\delta_{\lambda,\mu}, \tag{A.4.8}
$$

$$
\bar u_\lambda(\mechanical{p})v_\mu(\mechanical{p})=0=
\bar v_\lambda(\mechanical{p})u_\mu(\mechanical{p}). \tag{A.4.9}
$$

The projection operators $\Lambda$ that occur in the evaluation of matrix elements are then

$$
2\mechanical{m}\Lambda(\mechanical{p})\equiv
\sum_\lambda u_\lambda(\mechanical{p})\bar u_\lambda(\mechanical{p})
=\mechanical{m}+\not{\mechanical{p}}, \tag{A.4.10}
$$

$$
2\mechanical{m}\Lambda(-\mechanical{p})\equiv
-\sum_\lambda v_\lambda(\mechanical{p})\bar v_\lambda(\mechanical{p})
=\mechanical{m}-\not{\mechanical{p}}, \tag{A.4.11}
$$

$$
2\mechanical{m}\Lambda_\lambda(\mechanical{p})\equiv
u_\lambda(\mechanical{p})\bar u_\lambda(\mechanical{p})\ \text{not summed}
=\frac12(\mechanical{m}+\not{\mechanical{p}})(1+\lambda\gamma_5\not{\mechanical{s}}), \tag{A.4.12}
$$

$$
2\mechanical{m}\Lambda_\lambda(-\mechanical{p})\equiv
-v_\lambda(\mechanical{p})\bar v_\lambda(\mechanical{p})\ \text{not summed}
=\frac12(\mechanical{m}-\not{\mechanical{p}})(1-\lambda\gamma_5\not{\mechanical{s}}). \tag{A.4.13}
$$

These imply the completeness relation

$$
\Lambda(\mechanical{p})+\Lambda(-\mechanical{p})=\mathbb{I}. \tag{A.4.14}
$$

It is sometimes essential to have an explicit form for the spinor. The positive-energy spinor with momentum $\lvert\mechanical{\mathbf p}\rvert$ along the positive $z$-axis and helicity $\lambda/2$ is

$$
u_\lambda(\mechanical{p})=\sqrt{\energy{E}+\mechanical{m}}
\begin{pmatrix}
\chi_\lambda\\
\dfrac{\lambda\lvert\mechanical{\mathbf p}\rvert}{\energy{E}+\mechanical{m}}\chi_\lambda
\end{pmatrix}, \tag{A.4.15}
$$

where

$$
\chi_+=\begin{pmatrix}1\\0\end{pmatrix},\qquad
\chi_-=\begin{pmatrix}0\\1\end{pmatrix}. \tag{A.4.16}
$$

<!-- PDF page 453; printed page 439 -->

For the corresponding antiparticle spinor, it is convenient to substitute

$$
v_\lambda(\mechanical{p})=-\lambda\gamma_5u_{-\lambda}(\mechanical{p}). \tag{A.4.17}
$$

The spinor appropriate to a particle with momentum $\mechanical{\mathbf p}$ such that $\mechanical{\hat{\mathbf p}}\cdot\hat{\mathbf z}=\cos\mechanical{\theta}$ is obtained by a rotation about the $y$-axis:

$$
u_+(\mechanical{p})=\sqrt{\energy{E}+\mechanical{m}}
\begin{pmatrix}
\cos(\mechanical{\theta}/2)\\
\sin(\mechanical{\theta}/2)\\
\cos(\mechanical{\theta}/2)\lvert\mechanical{\mathbf p}\rvert/(\energy{E}+\mechanical{m})\\
\sin(\mechanical{\theta}/2)\lvert\mechanical{\mathbf p}\rvert/(\energy{E}+\mechanical{m})
\end{pmatrix}; \tag{A.4.18}
$$

$$
u_-(\mechanical{p})=\sqrt{\energy{E}+\mechanical{m}}
\begin{pmatrix}
-\sin(\mechanical{\theta}/2)\\
\cos(\mechanical{\theta}/2)\\
\sin(\mechanical{\theta}/2)\lvert\mechanical{\mathbf p}\rvert/(\energy{E}+\mechanical{m})\\
-\cos(\mechanical{\theta}/2)\lvert\mechanical{\mathbf p}\rvert/(\energy{E}+\mechanical{m})
\end{pmatrix}. \tag{A.4.19}
$$

The operators $\frac12(1\pm\gamma_5)$ are spin projection operators in the limit $\mechanical{m}\to0$. Thus, the equations

$$
\frac12(1\pm\gamma_5)u_\lambda(\mechanical{p})=
\frac12\left(1\pm\frac{\lambda\lvert\mechanical{\mathbf p}\rvert}{\energy{E}+\mechanical{m}}\right)
\sqrt{\energy{E}+\mechanical{m}}
\begin{pmatrix}\chi_\lambda\\\pm\chi_\lambda\end{pmatrix} \tag{A.4.20}
$$

become, for massless particles,

$$
\frac12(1+\gamma_5)u_\pm(\mechanical{p})=
\begin{cases}u_+(\mechanical{p}),\\0,\end{cases} \tag{A.4.21a}
$$

$$
\frac12(1-\gamma_5)u_\pm(\mechanical{p})=
\begin{cases}0,\\u_-(\mechanical{p}).\end{cases} \tag{A.4.21b}
$$

Hermitian conjugates of matrix elements are encountered routinely in calculations. They may be reexpressed as

$$
[\bar u(\mechanical{p}')\mathcal{O}u(\mechanical{p})]^\dagger=
\bar u(\mechanical{p})\overline{\mathcal{O}}u(\mechanical{p}'), \tag{A.4.22}
$$

where $\overline{\mathcal{O}}\equiv\gamma^0\mathcal{O}^\dagger\gamma^0$ is the Dirac conjugate of the operator $\mathcal{O}$. Simple and commonly occurring examples are

$$
\bar1=\gamma^0 1^\dagger\gamma^0=1, \tag{A.4.23}
$$

$$
\bar\gamma^\mu=\gamma^0\gamma^{\mu\dagger}\gamma^0=\gamma^\mu, \tag{A.4.24}
$$

<!-- PDF page 454; printed page 440 -->

from which

$$
\overline{\not{q}_1\not{q}_2\cdots\not{q}_n}
=\not{q}_n\not{q}_{n-1}\cdots\not{q}_1, \tag{A.4.25}
$$

$$
\bar\sigma^{\mu\nu}=\gamma^0\sigma^{\mu\nu\dagger}\gamma^0=\sigma^{\mu\nu}, \tag{A.4.26}
$$

$$
\bar\gamma^5=\gamma^0\gamma^{5\dagger}\gamma^0=-\gamma^5, \tag{A.4.27}
$$

and

$$
\overline{\gamma^\mu\gamma^5}=\gamma^0\gamma^{5\dagger}\gamma^{\mu\dagger}\gamma^0
=\gamma^\mu\gamma^5. \tag{A.4.28}
$$

The Fierz reordering transformation [4] is of value in computing amplitudes represented by a sum of Feynman graphs. In the operator basis defined by $\mathcal{O}_i=(1,\gamma_\mu,\sigma_{\mu\nu},i\gamma_\mu\gamma_5,\gamma_5)$, a transition among four arbitrary spinors $u_i$ may be expressed as

$$
\bar u_3\mathcal{O}_iu_2\bar u_1\mathcal{O}_iu_4
=\sum_{j=1}^5\lambda_{ij}\bar u_1\mathcal{O}_ju_2\bar u_3\mathcal{O}_ju_4, \tag{A.4.29}
$$

where

$$
\lambda_{ij}=\frac14
\begin{pmatrix}
1&1&1&1&1\\
4&-2&0&2&-4\\
6&0&-2&0&6\\
4&2&0&-2&-4\\
1&-1&1&-1&1
\end{pmatrix}. \tag{A.4.30}
$$

Because the spins are arbitrary, we may replace $u_4\to\gamma_5u_4$ and recover the same result for matrix elements of the form $\bar u_1\mathcal{O}_iu_2\bar u_3\mathcal{O}_i\gamma_5u_4$, and so on. Of particular utility is the result

$$
\bar u_3\gamma_\mu(1-\gamma_5)u_2\bar u_1\gamma^\mu(1-\gamma_5)u_4
=-\bar u_1\gamma_\mu(1-\gamma_5)u_2\bar u_3\gamma^\mu(1-\gamma_5)u_4. \tag{A.4.31}
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{m}$ | $\unit{\mathrm{GeV}}$ | Particle mass | The mass in the Dirac equation, with natural units. |
| $\mechanical{p},\mechanical{\mathbf p},\lvert\mechanical{\mathbf p}\rvert$ | $\unit{\mathrm{GeV}}$ | Momentum | The four-momentum, spatial momentum, and its magnitude. |
| $\energy{E}$ | $\unit{\mathrm{GeV}}$ | Particle energy | The positive energy used to normalize the spinors. |
| $\mechanical{s}$ | $1$ | Spin state | The spin state used to label a particle spinor. |
| $\mechanical{s}^{\mu},\mechanical{s},\mechanical{\hat{\mathbf s}}$ | $1$ | Polarization vector | The unit spin direction and its covariant four-vector. |
| $\lambda,\lambda/2$ | $1$ | Helicity | The helicity eigenvalue is twice the particle helicity. |
| $u,\bar u,v,\bar v$ | $\unit{\mathrm{GeV}^{1/2}}$ | Free-particle spinor | The particle and antiparticle spinors with the stated mass normalization. |
| $\chi_\lambda,\chi_\pm$ | $1$ | Spin wavefunction | The normalized two-component spin basis. |
| $\mechanical{\theta}$ | $\unit{\mathrm{rad}}$ | Momentum angle | The angle between the momentum direction and the positive z-axis. |
| $\mechanical{\hat{\mathbf p}}$ | $1$ | Momentum direction | The unit vector along the spatial momentum. |
