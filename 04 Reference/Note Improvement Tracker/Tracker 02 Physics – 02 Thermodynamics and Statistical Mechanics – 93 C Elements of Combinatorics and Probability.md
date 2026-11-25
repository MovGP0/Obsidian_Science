---
title: "Note Improvement Tracker – 02 Physics/02 Thermodynamics and Statistical Mechanics/93 C Elements of Combinatorics and Probability"
---

> [!TLDR]
> This note tracks the review of the 20 notes in `02 Physics/02 Thermodynamics and Statistical Mechanics/93 C Elements of Combinatorics and Probability`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 1 possible errors or notation conflicts. 1 of them are verified (1 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N1710|N1710]] C.05.03 Random Walk in d Dimensions and Polymers: $\mechanical{\tau}$ means the random-walk step interval in "Step-length conventions" but imaginary time in Remark C.2, and $\mechanical{t}$ is used in both roles; the table concedes this. Rename the imaginary time (for example $\mechanical{t}_{\mathrm E}$). **Fixed:** Renamed the imaginary time in Remark C.2 to \mechanical{τ}_{\mathrm E} (Wick rotation and kernel) and split the table row into t, τ, τ_E; t is real time in both uses, so it was kept.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N1693 | [[C.00 Elements of Combinatorics and Probability\|C.00 Elements of Combinatorics and Probability]] | Analyzed | low | no | no | [[#N1693\|View]] |
| N1694 | [[C.01 Permutations, Combinations, and Multinomial Coefficients\|C.01 Permutations, Combinations, and Multinomial Coefficients]] | Analyzed | low | no | no | [[#N1694\|View]] |
| N1695 | [[C.01.01 Permutations\|C.01.01 Permutations]] | Analyzed | low | no | no | [[#N1695\|View]] |
| N1696 | [[C.01.02 Combinations\|C.01.02 Combinations]] | Analyzed | low | yes | no | [[#N1696\|View]] |
| N1697 | [[C.01.03 Multinomial Coefficients in Statistical Mechanics\|C.01.03 Multinomial Coefficients in Statistical Mechanics]] | Analyzed | low | yes | no | [[#N1697\|View]] |
| N1698 | [[C.02 Stirling Formula - Forms and Approximations\|C.02 Stirling Formula - Forms and Approximations]] | Analyzed | low | yes | no | [[#N1698\|View]] |
| N1699 | [[C.03 Basic Probability Distributions\|C.03 Basic Probability Distributions]] | Analyzed | low | no | no | [[#N1699\|View]] |
| N1700 | [[C.03.01 Binomial Distribution\|C.03.01 Binomial Distribution]] | Analyzed | low | yes | no | [[#N1700\|View]] |
| N1701 | [[C.03.02 Poisson Distribution\|C.03.02 Poisson Distribution]] | Analyzed | low | yes | no | [[#N1701\|View]] |
| N1702 | [[C.03.03 Gaussian Limit and the Central Limit Theorem\|C.03.03 Gaussian Limit and the Central Limit Theorem]] | Analyzed | low | yes | yes | [[#N1702\|View]] |
| N1703 | [[C.04 Information Entropy and Statistical Mechanics\|C.04 Information Entropy and Statistical Mechanics]] | Analyzed | low | no | no | [[#N1703\|View]] |
| N1704 | [[C.04.01 Shannon Entropy\|C.04.01 Shannon Entropy]] | Analyzed | low | yes | no | [[#N1704\|View]] |
| N1705 | [[C.04.02 Connection to Statistical Mechanics\|C.04.02 Connection to Statistical Mechanics]] | Analyzed | low | no | no | [[#N1705\|View]] |
| N1706 | [[C.04.03 Relative Entropy - Kullback–Leibler Divergence\|C.04.03 Relative Entropy - Kullback–Leibler Divergence]] | Analyzed | low | yes | no | [[#N1706\|View]] |
| N1707 | [[C.05 Random Walk and Diffusion\|C.05 Random Walk and Diffusion]] | Analyzed | low | no | no | [[#N1707\|View]] |
| N1708 | [[C.05.01 Random Walk in One Dimension\|C.05.01 Random Walk in One Dimension]] | Analyzed | low | yes | yes | [[#N1708\|View]] |
| N1709 | [[C.05.02 Diffusion Equation\|C.05.02 Diffusion Equation]] | Analyzed | low | yes | no | [[#N1709\|View]] |
| N1710 | [[C.05.03 Random Walk in d Dimensions and Polymers\|C.05.03 Random Walk in d Dimensions and Polymers]] | Analyzed | low | yes | no | [[#N1710\|View]] |
| N1711 | [[C.05.04 Fluctuation–Dissipation Theorem\|C.05.04 Fluctuation–Dissipation Theorem]] | Analyzed | low | no | no | [[#N1711\|View]] |
| N1712 | [[C.06 Summary\|C.06 Summary]] | Analyzed | low | no | no | [[#N1712\|View]] |

## Suggestions

### N1693

Note: [[C.00 Elements of Combinatorics and Probability|C.00 Elements of Combinatorics and Probability]]  
Priority: low · Graph: no · Manim: no

Clear hub that frames sample space, limits, and entropy uses well; the links resolve.

- [Structure] No change needed.

### N1694

Note: [[C.01 Permutations, Combinations, and Multinomial Coefficients|C.01 Permutations, Combinations, and Multinomial Coefficients]]  
Priority: low · Graph: no · Manim: no

Short, clear hub with a good three-object example; the links resolve.

- [Structure] No change needed.

### N1695

Note: [[C.01.01 Permutations|C.01.01 Permutations]]  
Priority: low · Graph: no · Manim: no

Clear and correct, with a good labelling argument and the AAB example.

- [Structure] No change needed.

### N1696

Note: [[C.01.02 Combinations|C.01.02 Combinations]]  
Priority: low · Graph: yes · Manim: no

Clear and correct, with good combinatorial proofs of Pascal's relation and the binomial theorem.

- [Graph] Plot $\binom nk/2^n$ against $k/n$ for $n=10,50,200$ (points), to show the growing concentration near $k=n/2$ that C.02 and C.03.03 use.

### N1697

Note: [[C.01.03 Multinomial Coefficients in Statistical Mechanics|C.01.03 Multinomial Coefficients in Statistical Mechanics]]  
Priority: low · Graph: yes · Manim: no

Correct, with good small-$N$ checks of the Shannon limit.

- [Graph] For two categories, plot the exact $N^{-1}\ln\binom N{Np}$ for $N=10,100,1000$ against $p\in[0,1]$, together with $-p\ln p-(1-p)\ln(1-p)$, to show the convergence and the $O(\ln N/N)$ gap.
- [Simplify] Write out the Stirling step in one display, $\ln W\approx N\ln N-\sum_in_i\ln n_i=-N\sum_ip_i\ln p_i$, instead of describing the cancellations only in words.

### N1698

Note: [[C.02 Stirling Formula - Forms and Approximations|C.02 Stirling Formula - Forms and Approximations]]  
Priority: low · Graph: yes · Manim: no

Correct (the entropy $Nk_B\ln2\approx0.957\,\unit{J\,K^{-1}}$ and the central-binomial asymptotics verify) and well caveated.

- [Intuition] In Example C.1, give the number: for $N=10^{23}$, $\sqrt{2/(\pi N)}\approx2.5\times10^{-12}$. Exact balance is very unlikely, although typical relative imbalances are only of order $N^{-1/2}\approx3\times10^{-12}$.
- [Graph] Plot $N^{-1}\ln\binom Nk$ against $k/N$ for $N=20$ and $200$, with the binary entropy $H(p)$, so that the form-4 approximation and its edge failure near $k=0,N$ are visible.

### N1699

Note: [[C.03 Basic Probability Distributions|C.03 Basic Probability Distributions]]  
Priority: low · Graph: no · Manim: no

Clear hub with a useful warning about Gaussian approximations near a count boundary.

- [Structure] No change needed.

### N1700

Note: [[C.03.01 Binomial Distribution|C.03.01 Binomial Distribution]]  
Priority: low · Graph: yes · Manim: no

Correct and clear; the indicator argument and the constraint caveat for the paramagnet are good.

- [Graph] Bar plot of $P_B(k;20,p)$ for $p=0.1,0.5,0.8$, showing how the mean $Np$ moves and the variance $Np(1-p)$ peaks at $p=1/2$.
- [Example] Make the paramagnet concrete: $N$ spin-1/2 moments in field $B$ have $p=e^{x}/(e^{x}+e^{-x})$ with $x=\mu_BB/k_BT$, so $\langle k\rangle$ gives the mean magnetization $N\mu_B\tanh x$.

### N1701

Note: [[C.03.02 Poisson Distribution|C.03.02 Poisson Distribution]]  
Priority: low · Graph: yes · Manim: no

Correct derivation and moments, with careful physical caveats.

- [Graph] Bar plot comparing the binomial $P_B(k;N,3/N)$ for $N=6,30,300$ with the Poisson $P_P(k;3)$ for $k=0,\dots,10$, to show the rare-event limit converging.

### N1702

Note: [[C.03.03 Gaussian Limit and the Central Limit Theorem|C.03.03 Gaussian Limit and the Central Limit Theorem]]  
Priority: low · Graph: yes · Manim: yes

Correct and rigorous statement with a clear characteristic-function sketch; it lacks a visual of the convergence.

- [Graph] Overlay the binomial $P_B(k;N,0.3)$ (bars) with the Gaussian approximation for $N=10$ and $100$, to show the skew at small $N$ and the agreement near the centre at large $N$.
- [Manim] Animate the density of the normalized sum $Z_N$ of $N$ exponential (skewed) variables for $N=1,2,3,5,10,30$, morphing towards the standard normal curve while the skewness counter falls as $2/\sqrt N$.

### N1703

Note: [[C.04 Information Entropy and Statistical Mechanics|C.04 Information Entropy and Statistical Mechanics]]  
Priority: low · Graph: no · Manim: no

Clear hub that separates Shannon, Gibbs, and relative entropy; the links resolve.

- [Structure] No change needed.

### N1704

Note: [[C.04.01 Shannon Entropy|C.04.01 Shannon Entropy]]  
Priority: low · Graph: yes · Manim: no

Correct, but the proof section is out of order.

- [Structure] In "Proof", the concavity and boundary paragraph comes before the sentence "Normalization gives $p_i=1/n$. Concavity ... makes this ... the maximum", and stray blank lines separate them. Put the normalization sentence directly after the Lagrange step, then the concavity and boundary argument.
- [Graph] Plot the binary entropy $H(p)$ in nats on $[0,1]$ with its maximum $\ln2$ at $p=1/2$. Optionally add a 3D surface or contour of $H$ over the three-outcome simplex.

### N1705

Note: [[C.04.02 Connection to Statistical Mechanics|C.04.02 Connection to Statistical Mechanics]]  
Priority: low · Graph: no · Manim: no

Correct derivation of the canonical distribution, with clear interpretation of the multipliers.

- [Example] Add a two-level system with energies $0$ and $\energy{\varepsilon}$: fixing $U$ gives $U=\varepsilon/(e^{\beta\varepsilon}+1)$. Then $U<\varepsilon/2$ needs $\beta>0$, while $U>\varepsilon/2$ needs $\beta<0$, which illustrates the finite-spectrum multiplier remark.

### N1706

Note: [[C.04.03 Relative Entropy - Kullback–Leibler Divergence|C.04.03 Relative Entropy - Kullback–Leibler Divergence]]  
Priority: low · Graph: yes · Manim: no

Correct (the Jensen-type proof and the identity $F[p]-F[q]=k_BT\,D_{\mathrm{KL}}$ verify) and concise.

- [Graph] Plot $D_{\mathrm{KL}}(\mathrm{Bern}(p)\Vert\mathrm{Bern}(1/2))$ and the reverse $D_{\mathrm{KL}}(\mathrm{Bern}(1/2)\Vert\mathrm{Bern}(p))$ against $p\in(0,1)$, showing the asymmetry and the divergence of the reverse order as $p\to0,1$.

### N1707

Note: [[C.05 Random Walk and Diffusion|C.05 Random Walk and Diffusion]]  
Priority: low · Graph: no · Manim: no

Clear hub that states the modelling assumptions; the links resolve.

- [Structure] No change needed; the final sentence listing uses could move above the route paragraph as motivation.

### N1708

Note: [[C.05.01 Random Walk in One Dimension|C.05.01 Random Walk in One Dimension]]  
Priority: low · Graph: yes · Manim: yes

Correct (mean, variance $4Npq\ell^2$ and the lattice factor $2\ell$ verify), with good small-$N$ checks.

- [Graph] For $N=10$ and $p=1/2$, plot the exact lattice probabilities at $x=-10\ell,\dots,10\ell$ as bars, overlaid with $2\ell$ times the Gaussian density, to show the parity structure and the $2\ell$ factor from the callout.
- [Manim] Animate 200 independent walkers taking symmetric steps, with a histogram of positions building up beneath them and a $\pm\sqrt N\ell$ envelope widening. Then switch on a bias $p=0.6$ to show drift plus spreading.

### N1709

Note: [[C.05.02 Diffusion Equation|C.05.02 Diffusion Equation]]  
Priority: low · Graph: yes · Manim: no

Correct ($D=\ell^2/2\tau$, the heat kernel, $2Dt$ and $6Dt$ verify), with one awkward sentence in the lattice update.

- [Simplify] "The probability at a site after one more step is half the probability at each neighbouring site before that step" reads as a single factor; say "is the average of the probabilities at its two neighbours", which matches the displayed equation.
- [Graph] Plot $P(x,t)$ against $x\in[-5,5]$ for $Dt=0.05,0.25,1,4$, with the $\pm\sqrt{2Dt}$ widths marked, to show the spreading and the constant area.

### N1710

Note: [[C.05.03 Random Walk in d Dimensions and Polymers|C.05.03 Random Walk in d Dimensions and Polymers]]  
Priority: low · Graph: yes · Manim: no

Correct (step conventions, $\kappa=3k_BT/(N\ell^2)$ and the restoring-force sign verify) and well caveated, with one symbol clash.

- [Correctness] $\mechanical{\tau}$ means the random-walk step interval in "Step-length conventions" but imaginary time in Remark C.2, and $\mechanical{t}$ is used in both roles; the table concedes this. Rename the imaginary time (for example $\mechanical{t}_{\mathrm E}$).
- [Graph] Plot the vector density $P(\mathbf r)$ and the radial density $4\pi r^2P(\mathbf r)$ against $r/(\sqrt N\ell)\in[0,3]$. The first peaks at zero and the second at $r=\sqrt{2/3}\sqrt N\ell$, which supports the volume-versus-radial paragraph.
- [Example] Add a number for the spring constant: $N=1000$ links of $\ell=0.5\,\unit{nm}$ at 300 K give $\kappa\approx5\times10^{-5}\,\unit{N\,m^{-1}}$, so a 10 nm extension needs about 0.5 pN.

### N1711

Note: [[C.05.04 Fluctuation–Dissipation Theorem|C.05.04 Fluctuation–Dissipation Theorem]]  
Priority: low · Graph: no · Manim: no

Correct and clear; the zero-current derivation and the unit check verify.

- [Example] Add Stokes mobility $\mu_{\mathrm m}=1/(6\pi\eta a)$, which gives the Stokes–Einstein $D=k_BT/(6\pi\eta a)$. A sphere of radius 0.5 µm in water at 293 K has $D\approx0.43\,\mu\unit{m^2\,s^{-1}}$.

### N1712

Note: [[C.06 Summary|C.06 Summary]]  
Priority: low · Graph: no · Manim: no

Clear summary with a good two-object reconstruction check.

- [Structure] No change needed.
