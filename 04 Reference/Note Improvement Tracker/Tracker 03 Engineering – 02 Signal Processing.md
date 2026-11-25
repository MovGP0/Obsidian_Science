---
title: "Note Improvement Tracker – 03 Engineering/02 Signal Processing"
---

> [!TLDR]
> This note tracks the review of the 13 notes in `03 Engineering/02 Signal Processing`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 22 possible errors or notation conflicts. 22 of them are verified (22 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N3835|N3835]] Fourier Transformation: In the formula table the QDWT note uses "\( x[n] \)", which Obsidian does not render; use $x[n]$. The DWT row comes after QDWT and has empty formula cells; give $c_{j,k}=\langle x,\varphi_{j,k}\rangle$, $d_{j,k}=\langle x,\psi_{j,k}\rangle$ or link to [[Wavelet Transformation]]. **Fixed:** Changed to $x[n]$; moved DWT row before QDWT and filled it with $c_{j,k}=\langle x,\varphi_{j,k}\rangle$, $d_{j,k}=\langle x,\psi_{j,k}\rangle$, the orthogonal inverse, and a link to [[Wavelet Transformation]]
- [[#N3835|N3835]] Fourier Transformation: The STFT inverse uses $C_w$ and the CWT inverse uses $C_\psi$ without defining them; add $C_w=\int|w(t)|^2dt$ and $C_\psi=\int|\hat\psi(\omega)|^2/|\omega|\,d\omega$ (the latter in the $\omega$ convention, matching integration over both signs of $a$). **Fixed:** Added $C_w=\int w(t)^2dt$ (real window, matches the note's synthesis with $w$) and $C_\psi$ = integral of the squared spectrum magnitude over abs(omega) with the omega FT convention; also added the missing 1/sqrt(abs(a)) factor in the CWT inverse (required for the inversion to hold)
- [[#N3836|N3836]] Biorthogonal Wavelets: The dual filters are written $\tilde h,\tilde g$ in the text and "(ĥ, ĝ)" in the callout; use one notation (tilde), since a hat elsewhere means a Fourier transform. **Fixed:** Callout now uses $(\tilde h, \tilde g)$; text uses $(\tilde h, \tilde g)$ with parentheses
- [[#N3837|N3837]] Coiflet (Coif N): "Coif N" is ambiguous: "Coif6, Coif12" use the filter length $6L$, whereas PyWavelets `coifN` (and the pictured coiflet5) use $L$ with $6N$ taps; state which convention the note uses and give the vanishing moments precisely ($2L$ for $\psi$, $2L-1$ for $\varphi$ beyond $\int\varphi=1$) instead of "equal". **Fixed:** Stated PyWavelets/MATLAB convention coifL with N=6L taps (N kept as filter length used in g_k), psi 2L and phi 2L-1 vanishing moments plus int phi=1; callout now names coif1/coif2 (6/12 taps) and mentions length naming; removed zero-width spaces
- [[#N3838|N3838]] Daubechies‑20 (Db20): The naming convention (20 taps = 10 vanishing moments, i.e. D20) clashes with the [[Haar Wavelet (Db1)]] note title (vanishing-moment convention, where Haar = db1) and with MATLAB/PyWavelets `db20` (40 taps, 20 vanishing moments); state the convention explicitly and use it consistently across the wavelet notes. **Fixed:** Added a naming-convention callout (Db20 = 20 taps = D20 = PyWavelets db10; db20 has 40 taps; Haar note uses db1 convention); file names not changed
- [[#N3838|N3838]] Daubechies‑20 (Db20): The polynomial $a(Z)$ uses the normalization $a(1)=2$ (so $\sum a_k=2$), but the refinement equations use $h_n$ with $\sqrt2$, which needs $\sum h_n=\sqrt2$; state $h_n=a_n/\sqrt2$ and define $a(Z)=\sum_n a_nZ^n$, $p(Z)$, and its degree $A-1$. **Fixed:** Defined $a(Z)=\sum_n a_nZ^n$ with $a(1)=2$, $p(Z)$ of degree $A-1$ with $p(1)=1$, and $h_n=a_n/\sqrt2$ ($\sum h_n=\sqrt2$)
- [[#N3839|N3839]] Daubechies‑4 (Db4): This 4-tap filter with 2 vanishing moments is `db2` in MATLAB/PyWavelets (where `db4` has 8 taps), and the Haar note calls Haar "Db1" in that vanishing-moment convention; either rename to "D4 (db2)" or add a callout explaining the two naming conventions. **Fixed:** Added a naming-convention callout (Db4 = 4 taps = D4 = PyWavelets db2; db4 has 8 taps); converted CRLF to LF; file name not changed
- [[#N3842|N3842]] Mexican Hat (Ricker - Marr): "$-\frac{d^2}{dt^2}[e^{-t^2/2}] = \frac{2}{\sqrt3\pi^{1/4}}(1-t^2)e^{-t^2/2}$" is false; the left side is $(1-t^2)e^{-t^2/2}$, so write $\psi(t)=\frac{2}{\sqrt3\pi^{1/4}}\bigl(-\frac{d^2}{dt^2}e^{-t^2/2}\bigr)$. **Fixed:** Moved the normalization factor in front of the negative second derivative
- [[#N3842|N3842]] Mexican Hat (Ricker - Marr): With the stated convention $\hat f(\omega)=\int f e^{-i\omega t}dt$ and the given $\hat\psi$, $C_\psi=\int_0^\infty|\hat\psi|^2/\omega\,d\omega=\frac{8\sqrt\pi}{3}\cdot\frac12=\frac{4\sqrt\pi}{3}\approx2.363$, and this is the constant the stated inversion formula needs; $0.3761$ is $2.363/(2\pi)$, which belongs to a different convention. **Fixed:** Verified numerically (2.3633); replaced with $C_\psi=4\sqrt\pi/3\approx2.363$
- [[#N3842|N3842]] Mexican Hat (Ricker - Marr): The table's "Main lobe FWHM ≈2.3548 in time; ≈1.177 in frequency" uses Gaussian values ($2\sqrt{2\ln2}$, $\sqrt{2\ln2}$); for $(1-t^2)e^{-t^2/2}$ the central-lobe FWHM is ≈1.252, and the FWHM of the $|\hat\psi(\omega)|$ peak is ≈1.633. **Fixed:** Verified numerically; replaced with 1.252 (central lobe, time) and 1.633 (peak of the spectrum magnitude)
- [[#N3842|N3842]] Mexican Hat (Ricker - Marr): Pasted text is garbled: "zero at ω=0\omega=0", "large ∣ω∣|\omega|" and "Derivative-of-Gaussian (DoG n_n)"; also `scipy.signal.ricker` was deprecated in SciPy 1.12 and removed in 1.15, so point to PyWavelets `mexh` instead. **Fixed:** Fixed "$\omega=0$", abs(omega) in math, "DoG$_n$"; noted that signal.ricker was deprecated in SciPy 1.12 and removed in 1.15 (PyWavelets mexh already named)
- [[#N3843|N3843]] Shannon (Sinc‑based) Wavelet: The section "Mother wavelet $\psi(\omega)$" gives a frequency-domain expression and then calls it "this time-domain form"; the same expression is repeated as $\Psi(\omega)$ later, so $\psi$ means two different things in one note. Keep one frequency-domain block, labelled $\hat\psi(\omega)$ or $\Psi(\omega)$. **Fixed:** Section now "Mother wavelet $\psi(t)$" with the time-domain formula; the only frequency-domain block is $\Psi(\omega)$
- [[#N3843|N3843]] Shannon (Sinc‑based) Wavelet: With the phase factor $e^{-i\omega}$, the inverse transform is the shifted function $\psi(t)=2\,\mathrm{sinc}(2(t-1))-\mathrm{sinc}(t-1)$, not $2\,\mathrm{sinc}(2t)-\mathrm{sinc}(t)$; either drop $e^{-i\omega}$ (then the unshifted form holds and is still orthonormal) or shift the time-domain formula. Also state the Fourier convention that makes the $\frac{1}{2\pi}$ prefactor consistent. **Fixed:** Verified the inverse; time-domain form now $2\,\mathrm{sinc}(2(t-1))-\mathrm{sinc}(t-1)$ in both places; added the 1/(2pi) forward convention and a sentence about the unshifted alternative
- [[#N3844|N3844]] Father and Mother Wavelets: From $g_k=(-1)^kh_{N-1-k}$ it follows that $G(z)=(-1)^{N-1}z^{-(N-1)}H(-z^{-1})=-z^{-(N-1)}H(-z^{-1})$ for even $N$; check with Haar: $z^{-1}H(-z^{-1})=(z^{-1}-1)/\sqrt2=-G(z)$. On the unit circle it is $G(\omega)=-e^{-i\omega(N-1)}\overline{H(\omega+\pi)}$ (conjugate missing, sign missing). **Fixed:** Now $G(z)=(-1)^{N-1}z^{-(N-1)}H(-z^{-1})=-z^{-(N-1)}H(-z^{-1})$ (N even) and $G(\omega)=-e^{-i\omega(N-1)}\overline{H(\omega+\pi)}$; intuition callout mentions the conjugate
- [[#N3844|N3844]] Father and Mother Wavelets: The inverse relation "$h_k=(-1)^kg_{N-1-k}$" has the wrong sign for even $N$: inverting gives $h_k=-(-1)^kg_{N-1-k}$; with the Haar $g=[1,-1]/\sqrt2$ the note's formula gives $h_0=-1/\sqrt2$. **Fixed:** Now $h_k=-(-1)^kg_{N-1-k}$ (N even); checked with Haar
- [[#N3844|N3844]] Father and Mother Wavelets: The heading "High-pass filter coefficients $g_k$ ↔ low-pass filter transfer function $G(z)$" should say high-pass; "Derivation" uses $g_k=(-1)^kh_{1-k}$ while the later section uses $g_k=(-1)^kh_{N-1-k}$ without saying that these are two index conventions (shift by $N-2$); also remove the zero-width spaces (U+200B) after "$h_{k}$" and inside the display "$$g_k=(−1)^k h_{1−k}$$". **Fixed:** Heading now says high-pass; added sentence that the 1-k and N-1-k conventions differ by a shift of N-2; removed U+200B characters
- [[#N3844|N3844]] Father and Mother Wavelets: The alternating-flip relation $g_k=(-1)^kh_{N-1-k}$ is the conjugate quadrature filter (CQF, Smith–Barnwell) condition; the classic QMF is $g_k=(-1)^kh_k$, which does not give orthogonal wavelets for $N>2$; rename accordingly. **Fixed:** Renamed to conjugate quadrature filter (CQF, Smith-Barnwell) and noted that the classic QMF $g_k=(-1)^kh_k$ does not give orthogonal wavelets for N>2
- [[#N3845|N3845]] Wavelet Functions: Shannon has a closed form $\psi(t)=2\,\mathrm{sinc}(2t)-\mathrm{sinc}(t)$, so its "Closed-form ψ(t)?" cell should be ✅, not blank. **Fixed:** Set to ✅ with $\psi(t)=2\,\mathrm{sinc}(2t)-\mathrm{sinc}(t)$
- [[#N3845|N3845]] Wavelet Functions: Biorthogonal "Adjustable (e.g. 3/5, 9/7 designs)" gives filter lengths, not vanishing moments (CDF 5/3 has 2/2, CDF 9/7 has 4/4); Gaussian "Nth derivative structure (e.g. cgau family)" should be "$p$" (cgau is the separate complex Gaussian family), and "Approximate; non-orthogonal" should just be "non-orthogonal". **Fixed:** Biorthogonal now "CDF 5/3: 2/2, CDF 9/7: 4/4"; Gaussian vanishing moments now "$p$ (p-th derivative)"; orthogonality now "Non-orthogonal"
- [[#N3845|N3845]] Wavelet Functions: The Daubechies naming is mixed: Haar is "Db1" (vanishing-moment convention), while "Db4" = 4 taps and "Db20" = 20 taps (tap convention); in PyWavelets these would be db2 and db10. Add a note and make the names consistent. **Fixed:** Added alternative names D4/db2 and D20/db10 in the table and a "Daubechies naming" callout explaining both conventions
- [[#N3846|N3846]] Wavelet Transformation: The CWT formula lacks the complex conjugate: it should be $\psi^*\!\left(\frac{t-b}{a}\right)$ (as in [[Fourier Transformation]]), which matters for complex wavelets such as Morlet. **Fixed:** Changed to $\psi^*((t-b)/a)$ and explained $\psi^*$ in the symbol list
- [[#N3847|N3847]] Signal Processing: "FIR (Finite Impulse Response) – always stable, linear phase" and "FIR Filters – linear phase, stable": FIR filters are always stable, but have linear phase only when the coefficients are symmetric or antisymmetric; write "can have exactly linear phase". **Fixed:** Both places now say FIR filters are always stable and can have exactly linear phase (symmetric or antisymmetric coefficients)

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N3835 | [[Fourier Transformation\|01 Fourier Transformation/Fourier Transformation]] | Analyzed | high | yes | yes | [[#N3835\|View]] |
| N3836 | [[Biorthogonal Wavelets\|02 Wavelet Transformation/01 Wavelets/Biorthogonal Wavelets]] | Analyzed | medium | no | no | [[#N3836\|View]] |
| N3837 | [[Coiflet (Coif N)\|02 Wavelet Transformation/01 Wavelets/Coiflet (Coif N)]] | Analyzed | medium | no | no | [[#N3837\|View]] |
| N3838 | [[Daubechies‑20 (Db20)\|02 Wavelet Transformation/01 Wavelets/Daubechies‑20 (Db20)]] | Analyzed | medium | no | no | [[#N3838\|View]] |
| N3839 | [[Daubechies‑4 (Db4)\|02 Wavelet Transformation/01 Wavelets/Daubechies‑4 (Db4)]] | Analyzed | medium | yes | yes | [[#N3839\|View]] |
| N3840 | [[Gaussian wavelets (p‑th derivative of Gaussian)\|02 Wavelet Transformation/01 Wavelets/Gaussian wavelets (p‑th derivative of Gaussian)]] | Analyzed | low | yes | no | [[#N3840\|View]] |
| N3841 | [[Haar Wavelet (Db1)\|02 Wavelet Transformation/01 Wavelets/Haar Wavelet (Db1)]] | Analyzed | low | yes | no | [[#N3841\|View]] |
| N3842 | [[Mexican Hat (Ricker - Marr)\|02 Wavelet Transformation/01 Wavelets/Mexican Hat (Ricker - Marr)]] | Analyzed | medium | yes | no | [[#N3842\|View]] |
| N3843 | [[Shannon (Sinc‑based) Wavelet\|02 Wavelet Transformation/01 Wavelets/Shannon (Sinc‑based) Wavelet]] | Analyzed | high | yes | no | [[#N3843\|View]] |
| N3844 | [[Father and Mother Wavelets\|02 Wavelet Transformation/Father and Mother Wavelets]] | Analyzed | high | yes | no | [[#N3844\|View]] |
| N3845 | [[Wavelet Functions\|02 Wavelet Transformation/Wavelet Functions]] | Analyzed | medium | no | no | [[#N3845\|View]] |
| N3846 | [[Wavelet Transformation\|02 Wavelet Transformation/Wavelet Transformation]] | Analyzed | medium | yes | yes | [[#N3846\|View]] |
| N3847 | [[Signal Processing\|Signal Processing]] | Analyzed | medium | no | no | [[#N3847\|View]] |

## Suggestions

### N3835

Note: [[Fourier Transformation|Fourier Transformation]]  
Priority: high · Graph: yes · Manim: yes

Two formula tables with no prose, intuition, or worked example, and with some row and notation problems.

- [Correctness] In the formula table the QDWT note uses "\( x[n] \)", which Obsidian does not render; use $x[n]$. The DWT row comes after QDWT and has empty formula cells; give $c_{j,k}=\langle x,\varphi_{j,k}\rangle$, $d_{j,k}=\langle x,\psi_{j,k}\rangle$ or link to [[Wavelet Transformation]].
- [Correctness] The STFT inverse uses $C_w$ and the CWT inverse uses $C_\psi$ without defining them; add $C_w=\int|w(t)|^2dt$ and $C_\psi=\int|\hat\psi(\omega)|^2/|\omega|\,d\omega$ (the latter in the $\omega$ convention, matching integration over both signs of $a$).
- [Structure] Add a TLDR and a short prose section explaining the transform as "correlate the signal with $e^{i2\pi ft}$ for each $f$", and explain that "Quantized DFT/DWT" are not standard transform names but DFT/DWT applied to quantized samples.
- [Graph] Plot a rectangular pulse of width $T=1$ and its spectrum $|X(f)|=|T\,\mathrm{sinc}(fT)|$ for $f\in[-5,5]$, and a second panel with a Gaussian ↔ Gaussian pair, to show the time–bandwidth trade-off.
- [Manim] Animate the "winding" picture: $x(t)e^{-i2\pi ft}$ traced in the complex plane while $f$ sweeps, with the center of mass jumping when $f$ matches a signal frequency.

### N3836

Note: [[Biorthogonal Wavelets|Biorthogonal Wavelets]]  
Priority: medium · Graph: no · Manim: no

A compact formula stub with inconsistent dual notation and no statement of what biorthogonality actually is.

- [Correctness] The dual filters are written $\tilde h,\tilde g$ in the text and "(ĥ, ĝ)" in the callout; use one notation (tilde), since a hat elsewhere means a Fourier transform.
- [Structure] State the defining biorthogonality relations $\langle\varphi(\cdot-k),\tilde\varphi(\cdot-l)\rangle=\delta_{kl}$, $\langle\psi_{j,k},\tilde\psi_{j',k'}\rangle=\delta_{jj'}\delta_{kk'}$ and the reconstruction $x=\sum\langle x,\tilde\psi_{j,k}\rangle\psi_{j,k}$; "dual moment-vanishing constraints" is not explained.
- [Intuition] Explain why the method exists: orthogonal compactly supported wavelets cannot be symmetric (except Haar), and giving up orthogonality allows symmetric linear-phase FIR filters.
- [Example] Name the pictured bior4.4 as the CDF 9/7 pair used in lossy JPEG 2000 (analysis 9 taps, synthesis 7 taps, 4 vanishing moments each), and mention LeGall 5/3 for lossless JPEG 2000.

### N3837

Note: [[Coiflet (Coif N)|Coiflet (Coif N)]]  
Priority: medium · Graph: no · Manim: no

A short stub whose index convention and normalization are vague and which contains invisible characters inside math.

- [Structure] Zero-width spaces (U+200B) follow "$\frac{1}{\sqrt{2}}$" and sit inside "$C_k$"; remove them so the math renders cleanly.
- [Simplify] "Normalization factor $\frac{1}{\sqrt2}$ applies" is unclear; state the convention explicitly (for example $\sum_k C_k=\sqrt2$ with $h_k=C_k$, or $\sum_k C_k=2$ with $h_k=C_k/\sqrt2$) so it matches the refinement equation with the $\sqrt2$ prefactor.
- [Correctness] "Coif N" is ambiguous: "Coif6, Coif12" use the filter length $6L$, whereas PyWavelets `coifN` (and the pictured coiflet5) use $L$ with $6N$ taps; state which convention the note uses and give the vanishing moments precisely ($2L$ for $\psi$, $2L-1$ for $\varphi$ beyond $\int\varphi=1$) instead of "equal".
- [Intuition] Explain why the scaling-function moments matter: they make $\langle f,\varphi_{j,k}\rangle\approx 2^{-j/2}f(2^{-j}k)$, so the coefficients are close to samples of the signal.

### N3838

Note: [[Daubechies‑20 (Db20)|Daubechies‑20 (Db20)]]  
Priority: medium · Graph: no · Manim: no

The construction is sketched with a convention that is not linked to the refinement equations, and content is duplicated.

- [Correctness] The naming convention (20 taps = 10 vanishing moments, i.e. D20) clashes with the [[Haar Wavelet (Db1)]] note title (vanishing-moment convention, where Haar = db1) and with MATLAB/PyWavelets `db20` (40 taps, 20 vanishing moments); state the convention explicitly and use it consistently across the wavelet notes.
- [Correctness] The polynomial $a(Z)$ uses the normalization $a(1)=2$ (so $\sum a_k=2$), but the refinement equations use $h_n$ with $\sqrt2$, which needs $\sum h_n=\sqrt2$; state $h_n=a_n/\sqrt2$ and define $a(Z)=\sum_n a_nZ^n$, $p(Z)$, and its degree $A-1$.
- [Structure] Lines 9 and 13 both say "spectral factorization yields filter taps"; merge them into one paragraph and give $g_n=(-1)^n h_{19-n}$ explicitly.

### N3839

Note: [[Daubechies‑4 (Db4)|Daubechies‑4 (Db4)]]  
Priority: medium · Graph: yes · Manim: yes

Correct coefficients and refinement equations but no intuition, and a name that conflicts with the common library convention.

- [Correctness] This 4-tap filter with 2 vanishing moments is `db2` in MATLAB/PyWavelets (where `db4` has 8 taps), and the Haar note calls Haar "Db1" in that vanishing-moment convention; either rename to "D4 (db2)" or add a callout explaining the two naming conventions.
- [Example] Add a check that the coefficients satisfy $\sum h_n=\sqrt2$, $\sum h_n^2=1$, $h_0h_2+h_1h_3=0$, and that $\sum(-1)^n n\,h_n=0$ gives the second vanishing moment; this shows where the numbers come from.
- [Graph] Plot $\varphi$ and $\psi$ obtained by the cascade algorithm on $[0,3]$ (support length 3) to replace or supplement the pasted image.
- [Manim] Animate the cascade algorithm: start from a box function and repeatedly apply $\varphi\leftarrow\sqrt2\sum h_n\varphi(2t-n)$, showing convergence to the jagged Db4 scaling function.

### N3840

Note: [[Gaussian wavelets (p‑th derivative of Gaussian)|Gaussian wavelets (p‑th derivative of Gaussian)]]  
Priority: low · Graph: yes · Manim: no

Correct and compact, but with duplicated bullets, mixed $i/j$ notation, and no normalization.

- [Simplify] The callout repeats the frequency-domain formula with $j$ instead of $i$ and states "p vanishing moments" twice; keep one bullet each and use $i$ consistently.
- [Intuition] Add that $p\ge1$ is needed (the Gaussian itself is not admissible), that $p=2$ is the negative of the [[Mexican Hat (Ricker - Marr)]] wavelet up to normalization, and that the spectrum peaks at $|\omega|=\sqrt p$.
- [Graph] Plot $\psi_p(t)$ for $p=1,2,3,4$ on $t\in[-5,5]$, each normalized to unit $L^2$ norm, with a second panel of $|\hat\psi_p(\omega)|$ on $\omega\in[0,6]$ showing the peak moving to $\sqrt p$.

### N3841

Note: [[Haar Wavelet (Db1)|Haar Wavelet (Db1)]]  
Priority: low · Graph: yes · Manim: no

Correct definitions but no explanation of how $\varphi$ and $\psi$ are related or how the transform works.

- [Intuition] Add the two-scale relations $\varphi(t)=\varphi(2t)+\varphi(2t-1)$ and $\psi(t)=\varphi(2t)-\varphi(2t-1)$, i.e. $h=[1,1]/\sqrt2$, $g=[1,-1]/\sqrt2$, linking to [[Father and Mother Wavelets]].
- [Example] Work one step of the Haar DWT on $x=[4,6,10,12]$: averages $[10,22]/\sqrt2$ and details $[-2,-2]/\sqrt2$.
- [Graph] Plot $\psi_{n,k}$ for $(n,k)=(0,0),(1,0),(1,1),(2,1)$ on $t\in[0,1]$ to show how scale and shift tile the interval.

### N3842

Note: [[Mexican Hat (Ricker - Marr)|Mexican Hat (Ricker - Marr)]]  
Priority: medium · Graph: yes · Manim: no

The most complete wavelet note, with correct Fourier transform and moments, but a wrong first equality, a wrong admissibility constant, wrong FWHM values, and garbled text.

- [Correctness] "$-\frac{d^2}{dt^2}[e^{-t^2/2}] = \frac{2}{\sqrt3\pi^{1/4}}(1-t^2)e^{-t^2/2}$" is false; the left side is $(1-t^2)e^{-t^2/2}$, so write $\psi(t)=\frac{2}{\sqrt3\pi^{1/4}}\bigl(-\frac{d^2}{dt^2}e^{-t^2/2}\bigr)$.
- [Correctness] With the stated convention $\hat f(\omega)=\int f e^{-i\omega t}dt$ and the given $\hat\psi$, $C_\psi=\int_0^\infty|\hat\psi|^2/\omega\,d\omega=\frac{8\sqrt\pi}{3}\cdot\frac12=\frac{4\sqrt\pi}{3}\approx2.363$, and this is the constant the stated inversion formula needs; $0.3761$ is $2.363/(2\pi)$, which belongs to a different convention.
- [Correctness] The table's "Main lobe FWHM ≈2.3548 in time; ≈1.177 in frequency" uses Gaussian values ($2\sqrt{2\ln2}$, $\sqrt{2\ln2}$); for $(1-t^2)e^{-t^2/2}$ the central-lobe FWHM is ≈1.252, and the FWHM of the $|\hat\psi(\omega)|$ peak is ≈1.633.
- [Correctness] Pasted text is garbled: "zero at ω=0\omega=0", "large ∣ω∣|\omega|" and "Derivative-of-Gaussian (DoG n_n)"; also `scipy.signal.ricker` was deprecated in SciPy 1.12 and removed in 1.15, so point to PyWavelets `mexh` instead.
- [Graph] Plot $\psi(t)$ on $t\in[-5,5]$ and $|\hat\psi(\omega)|$ on $\omega\in[0,6]$ with the peak at $\omega=\sqrt2$ marked, plus $\psi_{a,0}$ for $a=0.5,1,2$ to show dilation.

### N3843

Note: [[Shannon (Sinc‑based) Wavelet|Shannon (Sinc‑based) Wavelet]]  
Priority: high · Graph: yes · Manim: no

The note gives the frequency-domain wavelet twice under two symbols, calls it time-domain, and its stated time-domain result does not match the phase factor.

- [Correctness] The section "Mother wavelet $\psi(\omega)$" gives a frequency-domain expression and then calls it "this time-domain form"; the same expression is repeated as $\Psi(\omega)$ later, so $\psi$ means two different things in one note. Keep one frequency-domain block, labelled $\hat\psi(\omega)$ or $\Psi(\omega)$.
- [Correctness] With the phase factor $e^{-i\omega}$, the inverse transform is the shifted function $\psi(t)=2\,\mathrm{sinc}(2(t-1))-\mathrm{sinc}(t-1)$, not $2\,\mathrm{sinc}(2t)-\mathrm{sinc}(t)$; either drop $e^{-i\omega}$ (then the unshifted form holds and is still orthonormal) or shift the time-domain formula. Also state the Fourier convention that makes the $\frac{1}{2\pi}$ prefactor consistent.
- [Intuition] Explain the bands directly: $\hat\varphi$ is the indicator of $|\omega|\le\pi$, $\hat\psi$ the indicator of $\pi\le|\omega|\le2\pi$, so $\psi$ = (low-pass with cutoff $2\pi$) − (low-pass with cutoff $\pi$), which is exactly $2\,\mathrm{sinc}(2t)-\mathrm{sinc}(t)$.
- [Graph] Plot $\psi(t)=2\,\mathrm{sinc}(2t)-\mathrm{sinc}(t)$ on $t\in[-8,8]$ beside $|\hat\psi(\omega)|$ (two boxes on $\pi\le|\omega|\le2\pi$) to show the ideal frequency localization versus slow $1/t$ decay in time.

### N3844

Note: [[Father and Mother Wavelets|Father and Mother Wavelets]]  
Priority: high · Graph: yes · Manim: no

A useful intuition callout, but the transfer-function relations contain sign and conjugation errors and a mislabelled heading.

- [Correctness] From $g_k=(-1)^kh_{N-1-k}$ it follows that $G(z)=(-1)^{N-1}z^{-(N-1)}H(-z^{-1})=-z^{-(N-1)}H(-z^{-1})$ for even $N$; check with Haar: $z^{-1}H(-z^{-1})=(z^{-1}-1)/\sqrt2=-G(z)$. On the unit circle it is $G(\omega)=-e^{-i\omega(N-1)}\overline{H(\omega+\pi)}$ (conjugate missing, sign missing).
- [Correctness] The inverse relation "$h_k=(-1)^kg_{N-1-k}$" has the wrong sign for even $N$: inverting gives $h_k=-(-1)^kg_{N-1-k}$; with the Haar $g=[1,-1]/\sqrt2$ the note's formula gives $h_0=-1/\sqrt2$.
- [Correctness] The heading "High-pass filter coefficients $g_k$ ↔ low-pass filter transfer function $G(z)$" should say high-pass; "Derivation" uses $g_k=(-1)^kh_{1-k}$ while the later section uses $g_k=(-1)^kh_{N-1-k}$ without saying that these are two index conventions (shift by $N-2$); also remove the zero-width spaces (U+200B) after "$h_{k}$" and inside the display "$$g_k=(−1)^k h_{1−k}$$".
- [Correctness] The alternating-flip relation $g_k=(-1)^kh_{N-1-k}$ is the conjugate quadrature filter (CQF, Smith–Barnwell) condition; the classic QMF is $g_k=(-1)^kh_k$, which does not give orthogonal wavelets for $N>2$; rename accordingly.
- [Graph] Plot $|H(\omega)|$ and $|G(\omega)|$ for Haar and Db4 on $\omega\in[0,\pi]$ to show the mirror symmetry about $\pi/2$ and $|H|^2+|G|^2=2$.

### N3845

Note: [[Wavelet Functions|Wavelet Functions]]  
Priority: medium · Graph: no · Manim: no

A helpful overview table, but several cells are wrong or inconsistent with the individual wavelet notes, and the source link is broken.

- [Correctness] Shannon has a closed form $\psi(t)=2\,\mathrm{sinc}(2t)-\mathrm{sinc}(t)$, so its "Closed-form ψ(t)?" cell should be ✅, not blank.
- [Correctness] Biorthogonal "Adjustable (e.g. 3/5, 9/7 designs)" gives filter lengths, not vanishing moments (CDF 5/3 has 2/2, CDF 9/7 has 4/4); Gaussian "Nth derivative structure (e.g. cgau family)" should be "$p$" (cgau is the separate complex Gaussian family), and "Approximate; non-orthogonal" should just be "non-orthogonal".
- [Correctness] The Daubechies naming is mixed: Haar is "Db1" (vanishing-moment convention), while "Db4" = 4 taps and "Db20" = 20 taps (tap convention); in PyWavelets these would be db2 and db10. Add a note and make the names consistent.
- [Links] The YouTube source ID "jnxqHcObNK" has 10 characters (IDs have 11), so the link is broken; fix or remove it.
- [Structure] The empty H2 "Father and Mother Wavelets" should instead be a link to [[Father and Mother Wavelets]] with a one-line description.

### N3846

Note: [[Wavelet Transformation|Wavelet Transformation]]  
Priority: medium · Graph: yes · Manim: yes

A clear STFT-vs-wavelet motivation that stops before the inverse, admissibility, or discrete transform.

- [Correctness] The CWT formula lacks the complex conjugate: it should be $\psi^*\!\left(\frac{t-b}{a}\right)$ (as in [[Fourier Transformation]]), which matters for complex wavelets such as Morlet.
- [Intuition] Quantify the trade-off with the Heisenberg box: $\Delta t\,\Delta\omega\ge\frac12$ for any window, with STFT boxes of fixed shape and wavelet boxes scaling as $a\Delta t\times\Delta\omega/a$, and relate scale to frequency ($\omega\approx\omega_0/a$).
- [Structure] Add short sections on admissibility/inverse and on the dyadic DWT ($a=2^{-j}$, $b=k2^{-j}$) with links to [[Father and Mother Wavelets]] and [[Wavelet Functions]].
- [Graph] Draw the time–frequency tiling: equal rectangles for the STFT next to dyadic rectangles (wide in time at low frequency, narrow at high frequency) for the wavelet transform.
- [Manim] Animate a Mexican-hat wavelet sliding over a chirp $x(t)=\sin(2\pi(1+2t)t)$ at three scales while the scalogram $|W(a,b)|$ fills in row by row.

### N3847

Note: [[Signal Processing|Signal Processing]]  
Priority: medium · Graph: no · Manim: no

A broad topic hub with heavily duplicated sections, one wrong claim about FIR filters, and no links to the existing signal processing notes.

- [Correctness] "FIR (Finite Impulse Response) – always stable, linear phase" and "FIR Filters – linear phase, stable": FIR filters are always stable, but have linear phase only when the coefficients are symmetric or antisymmetric; write "can have exactly linear phase".
- [Structure] Merge the duplicated sections: "Basic Filters", "Filtering & Signal Shaping" and "Advanced Filters & Estimation" repeat Kalman, Wiener, matched, adaptive and notch filters; "Spectral Analysis" and "Spectral Analysis & Estimation" repeat each other; "Synchronization" repeats the carrier and timing recovery items; "Special DSP Tools" and "Other Useful DSP Techniques" overlap; "Oversampling" appears twice under Sampling with mixed tab and space indentation.
- [Links] Link the existing notes [[Fourier Transformation]], [[Wavelet Transformation]] and [[Wavelet Functions]] from the "Transforms" list.
- [Simplify] Small fixes: "Hanning" → Hann; "Band-stop / Notch filter – rejects a narrow band" (band-stop rejects a band, notch a narrow one); "Fractional resampling – rational factor" (rational vs arbitrary/fractional are different cases).
