
| Symbol                                                  | Name                           | Description                                                                                                                                                                                                                   |
| :------------------------------------------------------ | :----------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $\mathcal{L}_{\text{SM}}$                               | Standard Model Lagrangian      | The master formula describing all known elementary particles and their interactions (except gravity).<br>Every term corresponds to a physical effect or interaction.                                                          |
| $SU(3)_C \times SU(2)_L \times U(1)_Y$                  | Gauge symmetry group           | The three "forces" described by the SM: <br>- strong (color), <br>- weak, <br>- and hypercharge (which becomes electromagnetism after mixing).<br>Each part corresponds to one type of gauge boson field.                     |
| $G_\mu^a$                                               | Gluon field                    | The eight force carriers of the **strong interaction** between quarks.<br>Each has a color index $a = 1,…,8$.                                                                                                                 |
| $W_\mu^i$                                               | Weak field                     | The three gauge fields responsible for the **weak interaction**, which causes radioactive decay.                                                                                                                              |
| $B_\mu$                                                 | Hypercharge field              | The gauge field that mixes with the $W^3_\mu$ field to form the **photon** and the **Z boson**.                                                                                                                               |
| $G_{\mu\nu}^a$, $W_{\mu\nu}^i$, $B_{\mu\nu}$            | Field strength tensors         | These describe how the gauge fields change in space and time — in other words, the “electric” and “magnetic” parts of each force field.                                                                                       |
| $g_s, g, g'$                                            | Coupling constants             | Numbers that measure how strongly each force acts: <br>- $g_s$ for strong, <br>- $g$ for weak, <br>- $g'$ for hypercharge.                                                                                                    |
| $\psi$                                                  | Fermion field                  | A general name for a matter particle: quarks and leptons (electrons, neutrinos, etc.) are all fermions.<br>Each $\psi$ represents a quantum field whose excitations are particles.                                            |
| $\bar{\psi}$                                            | Dirac adjoint                  | The mathematical partner of $\psi$, needed to write physical quantities like energy and current densities.                                                                                                                    |
| $Q_L = \begin{pmatrix} u_L \\ d_L \end{pmatrix}$        | Left-handed quark doublet      | Contains the two quarks of one generation that feel the weak force (up- and down-type). <br>“Left-handed” means only one spin orientation participates in the weak force.                                                     |
| $L_L = \begin{pmatrix} \nu_L \\ e_L \end{pmatrix}$      | Left-handed lepton doublet     | Contains the neutrino and charged lepton (like the electron) that feel the weak force.                                                                                                                                        |
| $u_R, d_R, e_R$                                         | Right-handed singlets          | Right-handed versions of quarks and leptons, which do **not** feel the weak force directly.                                                                                                                                   |
| $D_\mu$                                                 | Covariant derivative           | A special derivative that includes the gauge fields.<br>It ensures that the equations stay consistent under the symmetry transformations.<br>When expanded, it produces all **interactions between matter and force fields**. |
| $\gamma^\mu$                                            | Dirac matrices                 | Mathematical objects that connect the spin of fermions to space and time directions — part of relativistic quantum mechanics.                                                                                                 |
| $\phi = \begin{pmatrix} \phi^+ \\ \phi^0 \end{pmatrix}$ | Higgs field                    | A field that fills all space; when it gains a nonzero value, it gives masses to other particles through their interactions with it.                                                                                           |
| $\tilde{\phi} = i\tau_2 \phi^*$                         | Conjugate Higgs field          | A transformed version of the Higgs field used for coupling to up-type quarks.                                                                                                                                                 |
| $(D_\mu \phi)^\dagger (D^\mu \phi)$                     | Higgs kinetic term             | Describes how the Higgs field changes in space and time, and how it interacts with gauge bosons ($W$, $Z$, photon).                                                                                                           |
| $\mu^2$                                                 | Higgs mass parameter           | Determines whether the Higgs field prefers a value of zero or a nonzero “vacuum” value. <br>Negative $\mu^2$ makes the symmetry break spontaneously.                                                                          |
| $\lambda$                                               | Higgs self-coupling            | Sets the strength of the Higgs field’s self-interaction and controls the shape of its potential energy curve.                                                                                                                 |
| $\phi^\dagger \phi$                                     | Higgs potential term           | The magnitude of the Higgs field squared; it decides the energy stored in the Higgs field.                                                                                                                                    |
| $v$                                                     | Vacuum expectation value (VEV) | The constant value the Higgs field takes everywhere after symmetry breaking.<br>It’s about 246 GeV, and gives mass to particles.                                                                                              |
| $\mathcal{L}_{\text{gauge}}$                            | Gauge field term               | Describes the self-interactions and energy of the force fields (gluons, weak bosons, photon)                                                                                                                                  |

The **Lagrangian of the Standard Model (SM)** is the central object from which all equations of motion and interaction rules for fundamental particles follow.
It encodes both the **gauge symmetries** and the **field content** of the model.

### Structure Overview

The SM Lagrangian is typically decomposed as:

$$\mathcal{L}_{\text{SM}} =
\mathcal{L}_{\text{gauge}} +
\mathcal{L}_{\text{fermion}} +
\mathcal{L}_{\text{Higgs}} +
\mathcal{L}_{\text{Yukawa}}$$

Each term has a clear physical meaning:

| Term                           | Meaning                                     | Contains                                                 |
| ------------------------------ | ------------------------------------------- | -------------------------------------------------------- |
| $\mathcal{L}_{\text{gauge}}$   | Dynamics of gauge fields                    | Field strength tensors $F_{\mu\nu}$ for SU(3)×SU(2)×U(1) |
| $\mathcal{L}_{\text{fermion}}$ | Kinetic terms of quarks and leptons         | Covariant derivatives coupling them to gauge bosons      |
| $\mathcal{L}_{\text{Higgs}}$   | Scalar field dynamics and symmetry breaking | Higgs potential and kinetic term                         |
| $\mathcal{L}_{\text{Yukawa}}$  | Fermion mass and mixing terms               | Couplings between fermions and Higgs field               |

### Gauge Symmetry

The Standard Model gauge group is:  
$$SU(3)_C \times SU(2)_L \times U(1)_Y$$ 
with corresponding gauge fields:

| Group | Gauge Field | Field Strength | Coupling Constant |
| ----- | ----------- | -------------- | ----------------- |
| SU(3) | $G_\mu^a$   | $G_{\mu\nu}^a$ | $g_s$             |
| SU(2) | $W_\mu^i$   | $W_{\mu\nu}^i$ | $g$               |
| U(1)  | $B_\mu$     | $B_{\mu\nu}$   | $g'$              |

## Gauge Field Terms

$$\mathcal{L}_{\text{gauge}} =
- \frac{1}{4} G_{\mu\nu}^a G^{a\mu\nu}
- \frac{1}{4} W_{\mu\nu}^i W^{i\mu\nu}
- \frac{1}{4} B_{\mu\nu} B^{\mu\nu}$$
with
$$\begin{aligned}  
G_{\mu\nu}^a &= \partial_\mu G_\nu^a - \partial_\nu G_\mu^a + g_s f^{abc} G_\mu^b G_\nu^c \\
W_{\mu\nu}^i &= \partial_\mu W_\nu^i - \partial_\nu W_\mu^i + g \epsilon^{ijk} W_\mu^j W_\nu^k \\
B_{\mu\nu} &= \partial_\mu B_\nu - \partial_\nu B_\mu
\end{aligned}$$

### Fermion Kinetic Terms and Gauge Interactions

Fermions fall into left- and right-handed multiplets:

**Quarks:**  
$$Q_L = \begin{pmatrix} u_L \ d_L \end{pmatrix}, \quad u_R, d_R$$    

**Leptons:**
$$L_L = \begin{pmatrix} \nu_L \ e_L \end{pmatrix}, \quad  e_R$$

Each couples to the gauge fields via the **covariant derivative**:  
$$D_\mu = \partial_\mu
- i g_s T^a G_\mu^a
- i g \tau^i W_\mu^i
- i g' Y B_\mu$$

Then:
$$\mathcal{L}_{\text{fermion}} = \sum_{fermions} \bar{ψ} i γ^μ D_μ ψ$$

This term includes **all gauge–fermion interactions** (photon, W, Z, gluon couplings).

### Higgs Sector

The Higgs field is an $SU(2)_L$ doublet with hypercharge ($Y = +\frac{1}{2}$):
$$\phi = \begin{pmatrix} \phi⁺ \\ ϕ⁰ \end{pmatrix}$$

$$\mathcal{L}_{\text{Higgs}} =
(D_\mu \phi)^\dagger (D^\mu \phi)
- \mu^2 \phi^\dagger \phi
- \lambda (\phi^\dagger \phi)^2$$

When $\phi$ acquires a vacuum expectation value (VEV)  
$$\langle \phi \rangle = \frac{1}{\sqrt{2}}\begin{pmatrix} 0 \ v \end{pmatrix},\quad v = \sqrt{\frac{\mu^2}{\lambda}} \approx 246\ \text{GeV}$$
the **electroweak symmetry breaks**:  
$$SU(2)_L \times U(1)_Y \to U(1)_{\text{EM}}$$ 
giving masses to ($W^\pm$), ($Z^0$), and fermions.

### Yukawa Couplings

Fermion–Higgs interactions responsible for mass generation:  
$$\mathcal{L}_{\text{Yukawa}} =
- \bar{Q}_L Y_d \phi d_R
- \bar{Q}_L Y_u \tilde{\phi} u_R
- \bar{L}_L Y_e \phi e_R
- \text{h.c.}$$
where ($\tilde{\phi} = i \tau_2 \phi^*$) and ($Y_u$, $Y_d$, $Y_e$) are Yukawa matrices.

After spontaneous symmetry breaking, these terms yield:  
$$m_f = \frac{Y_f v}{\sqrt{2}}$$

### Compact Form

Putting it together:

$$\begin{aligned}  
\mathcal{L}_{\text{SM}} &=
- \frac{1}{4} G_{\mu\nu}^a G^{a\mu\nu}  
- \frac{1}{4} W_{\mu\nu}^i W^{i\mu\nu}
- \frac{1}{4} B_{\mu\nu} B^{\mu\nu} \\ 
    &+ \sum_{\text{fermions}} \bar{\psi} i \gamma^\mu D_\mu \psi \\
    &+ (D_\mu \phi)^\dagger (D^\mu \phi)
- \mu^2 \phi^\dagger \phi
- \lambda (\phi^\dagger \phi)^2 \\
 &- \left(  
    \bar{Q}_L Y_d \phi d_R
- \bar{Q}_L Y_u \tilde{\phi} u_R
- \bar{L}_L Y_e \phi e_R
- \text{h.c.}  
\right)  
\end{aligned}$$

### After Symmetry Breaking

After the Higgs gets a VEV, the Lagrangian automatically generates:

**Mass terms:**
- $m_W = \tfrac{1}{2} g v$
- $m_Z = \tfrac{1}{2}\sqrt{g^2 + g'^2},v$
- $m_f = Y_f v/\sqrt{2}$

**Interaction vertices:**
- $W^\pm$ and $Z^0$ couplings to fermions
- Higgs couplings to fermions and gauge bosons
- Photon–fermion electromagnetic interactions

### Remarks

- **No explicit mass terms** appear before symmetry breaking — gauge invariance forbids them.
- **Neutrinos** are massless in the minimal SM (no right-handed neutrinos); extensions (e.g., see-saw mechanism) add terms to $\mathcal{L}_{\text{Yukawa}}$.
- The total Lagrangian is **renormalizable** and **Lorentz invariant**.
- Interactions arise directly from expanding the covariant derivatives and Yukawa terms.
