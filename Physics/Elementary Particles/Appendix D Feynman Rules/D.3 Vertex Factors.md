---
title: "Vertex Factors"
---

> [!TLDR]
> Vertex factors specify the electromagnetic, strong, weak, and mixed boson interactions.

<!-- PDF page 388; printed page 380 -->

## QED

![[elementary-particles-appendix-d-qed.svg|QED fermion–photon vertex with Lorentz index μ.]]

$$
i\electric{g}_e\gamma^\mu
\qquad(\electric{g}_e=\sqrt{4\pi\electric{\alpha}})
$$

<!-- PDF page 389; printed page 381 -->

## QCD

![[elementary-particles-appendix-d-qcd-quark.svg|QCD quark–gluon vertex with color index α and Lorentz index μ.]]

$$
\frac{-ig_s}{2}\lambda^\alpha\gamma^\mu
$$

![[elementary-particles-appendix-d-qcd-three-gluon.svg|Three-gluon vertex. All three momenta enter the vertex.]]

$$
-g_s f^{\alpha\beta\gamma}
\left[
g_{\mu\nu}(\mechanical{q}_1-\mechanical{q}_2)_\lambda
+g_{\nu\lambda}(\mechanical{q}_2-\mechanical{q}_3)_\mu
+g_{\lambda\mu}(\mechanical{q}_3-\mechanical{q}_1)_\nu
\right]
$$

![[elementary-particles-appendix-d-qcd-four-gluon.svg|Four-gluon vertex with its color and Lorentz indices.]]

$$
\begin{aligned}
-ig_s^2\big[&
f^{\alpha\beta\eta}f^{\gamma\delta\eta}(g_{\mu\lambda}g_{\nu\rho}-g_{\mu\rho}g_{\nu\lambda})\\
&+f^{\alpha\delta\eta}f^{\beta\gamma\eta}(g_{\mu\nu}g_{\lambda\rho}-g_{\mu\lambda}g_{\nu\rho})\\
&+f^{\alpha\gamma\eta}f^{\delta\beta\eta}(g_{\mu\rho}g_{\nu\lambda}-g_{\mu\nu}g_{\lambda\rho})\big]
\end{aligned}
$$

## GWS

![[elementary-particles-appendix-d-weak-lepton.svg|Charged weak lepton vertex with a W⁻ boson.]]

$$
\frac{-ig_w}{2\sqrt2}\gamma^\mu(1-\gamma^5)
$$

(Here $l$ is any lepton, and $\nu_l$ the corresponding neutrino.)

![[elementary-particles-appendix-d-weak-quark.svg|Charged weak quark vertex with a W⁻ boson.]]

$$
\frac{-ig_w}{2\sqrt2}\gamma^\mu(1-\gamma^5)U_{ij}
$$

(Here $i=u,c$, or $t$, and $j=d,s$, or $b$; $U$ is the Kobayashi–Maskawa matrix.)

![[elementary-particles-appendix-d-weak-neutral.svg|Neutral weak fermion vertex with a Z⁰ boson.]]

$$
\frac{-ig_z}{2}\gamma^\mu(c_V^f-c_A^f\gamma^5)
$$

(Here $f$ is any quark or lepton.)

| $f$ | $c_V$ | $c_A$ |
| --- | --- | --- |
| $\nu_e,\nu_\mu,\nu_\tau$ | $\tfrac12$ | $\tfrac12$ |
| $e^-,\mu^-,\tau^-$ | $-\tfrac12+2\sin^2\mechanical{\theta}_w$ | $-\tfrac12$ |
| $u,c,t$ | $\tfrac12-\tfrac43\sin^2\mechanical{\theta}_w$ | $\tfrac12$ |
| $d,s,b$ | $-\tfrac12+\tfrac23\sin^2\mechanical{\theta}_w$ | $-\tfrac12$ |

<!-- PDF page 390; printed page 382 -->

![[elementary-particles-appendix-d-zww.svg|Z⁰W⁺W⁻ vertex. The three indicated momenta enter the vertex.]]

$$
ig_w\cos\mechanical{\theta}_w
\left[
g_{\nu\lambda}(\mechanical{q}_1-\mechanical{q}_2)_\mu
+g_{\lambda\mu}(\mechanical{q}_2-\mechanical{q}_3)_\nu
+g_{\mu\nu}(\mechanical{q}_3-\mechanical{q}_1)_\lambda
\right]
$$

![[elementary-particles-appendix-d-zzww.svg|Z⁰Z⁰W⁺W⁻ vertex with Lorentz indices.]]

$$
-ig_w^2\cos^2\mechanical{\theta}_w
(2g_{\mu\nu}g_{\lambda\sigma}-g_{\mu\lambda}g_{\nu\sigma}-g_{\mu\sigma}g_{\nu\lambda})
$$

![[elementary-particles-appendix-d-wwww.svg|W⁺W⁻W⁺W⁻ vertex with Lorentz indices.]]

$$
ig_w^2(2g_{\mu\lambda}g_{\nu\sigma}-g_{\mu\nu}g_{\lambda\sigma}-g_{\mu\sigma}g_{\nu\lambda})
$$

The weak coupling constants are related to the electromagnetic coupling constant:

$$
g_w=\frac{\electric{g}_e}{\sin\mechanical{\theta}_w};
\qquad
g_z=\frac{\electric{g}_e}{\sin\mechanical{\theta}_w\cos\mechanical{\theta}_w}.
$$

There are also “mixed” couplings of the photon to the $W$ and $Z$:

![[elementary-particles-appendix-d-photon-ww.svg|Photon–W⁺–W⁻ vertex. The three indicated momenta enter the vertex.]]

$$
i\electric{g}_e
\left[
g_{\nu\lambda}(\mechanical{q}_1-\mechanical{q}_2)_\mu
+g_{\lambda\mu}(\mechanical{q}_2-\mechanical{q}_3)_\nu
+g_{\mu\nu}(\mechanical{q}_3-\mechanical{q}_1)_\lambda
\right]
$$

![[elementary-particles-appendix-d-photon-photon-ww.svg|Two-photon–W⁺–W⁻ vertex with Lorentz indices.]]

$$
-i\electric{g}_e^2
(2g_{\mu\nu}g_{\lambda\sigma}-g_{\mu\lambda}g_{\nu\sigma}-g_{\mu\sigma}g_{\nu\lambda})
$$

<!-- PDF page 391; printed page 383 -->

![[elementary-particles-appendix-d-photon-z-ww.svg|Photon–Z⁰–W⁺–W⁻ vertex with Lorentz indices.]]

$$
-i\electric{g}_e g_w\cos\mechanical{\theta}_w
(2g_{\mu\nu}g_{\lambda\sigma}-g_{\mu\lambda}g_{\nu\sigma}-g_{\mu\sigma}g_{\nu\lambda})
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\electric{g}_e$ | $1$ | Electromagnetic coupling | The coupling at the fermion–photon and mixed photon vertices. |
| $\electric{\alpha}$ | $1$ | Fine-structure constant | The electromagnetic strength that defines the photon coupling. |
| $g_s$ | $1$ | Strong coupling | The coupling at the quark and gluon vertices. |
| $\mechanical{q}_i$ | $\unit{\mathrm{g\,cm/s}}$ | Four-momentum | The momentum on a boson leg that enters a three-boson vertex. |
| $g_w$ | $1$ | Charged weak coupling | The coupling at charged weak and weak-boson vertices. |
| $g_z$ | $1$ | Neutral weak coupling | The coupling at the neutral fermion vertex. |
| $U,U_{ij}$ | $1$ | Quark mixing matrix | The matrix and element that mix quark flavors at a charged vertex. |
| $c_V,c_V^f$ | $1$ | Vector coupling | The vector part of the neutral weak fermion coupling. |
| $c_A,c_A^f$ | $1$ | Axial coupling | The axial part of the neutral weak fermion coupling. |
| $\mechanical{\theta}_w$ | $\unit{\mathrm{rad}}$ | Weak mixing angle | The angle that relates the weak and electromagnetic couplings. |
