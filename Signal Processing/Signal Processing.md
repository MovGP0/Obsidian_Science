## Core Signal Concepts

- **Signal types**
    - Continuous-time vs. discrete-time
    - Periodic vs. aperiodic
    - Deterministic vs. stochastic
- **Key properties**
    - Amplitude, phase, frequency
    - RMS, peak, average
    - Bandwidth
- **Basic operations**
    - Time shift, scaling, reversal
    - Convolution (time-domain filtering)
    - Correlation (signal similarity)

## Sampling & Quantization

How to go from continuous to discrete signals.

- **Sampling**
	- Nyquist–Shannon theorem
	- Oversampling & undersampling
    - **Anti-aliasing filters** – low-pass before sampling
- **Oversampling** – higher sample rate to ease filtering
- **Quantization**
	- Uniform / non-uniform quantization (e.g., µ-law, A-law)    
	- Quantization noise & dithering
	- Sigma–delta modulation
- **Synchronization for sampling**
	- Clock recovery    
	- Jitter correction

## Basic Filters

- **Low-pass filter (LPF)** – passes low frequencies, attenuates highs
- **High-pass filter (HPF)** – passes highs, attenuates lows
- **Band-pass filter (BPF)** – passes a frequency band
- **Band-stop / Notch filter** – rejects a narrow band 
- **All-pass filter** – preserves amplitude, changes phase
- **Filter types**:
    - FIR (Finite Impulse Response) – always stable, linear phase
    - IIR (Infinite Impulse Response) – more efficient, may have nonlinear phase
- **Design methods**: windowing, bilinear transform, Parks–McClellan
- **Special cases**: CIC filters, moving average filters

## Filtering & Signal Shaping

- **FIR Filters** – linear phase, stable, designed by windowing or Parks–McClellan
- **IIR Filters** – efficient, but phase non-linear (Butterworth, Chebyshev, Elliptic)
- **Adaptive Filters** – LMS, NLMS, RLS for noise cancellation / echo suppression
- **Notch Filters** – for narrowband interference removal
- **Kalman & Extended Kalman Filters** – state estimation with noise
- **Wiener Filter** – optimal noise filtering with known statistics
- **Polyphase Filterbanks** – efficient channelization / sample-rate conversion
- **Matched Filters** – optimal detection of known signals

## Advanced Filters & Estimation

- **Kalman filter** – optimal estimation in noisy systems
- **Extended Kalman filter (EKF)** – nonlinear systems
- **Unscented Kalman filter (UKF)** – better for strong nonlinearities
- **Wiener filter** – minimum mean-square error filtering
- **Matched filter** – maximizes SNR for a known signal shape
- **Adaptive filters** – LMS, NLMS, RLS for changing environments

## Transforms

- **Fourier Transform (FT)** – converts time ↔ frequency domain.
- **Discrete Fourier Transform (DFT)** - sampled signal version of FT
- **Fast Fourier Transform (FFT)** – efficient DFT computation.
- **Short-Time Fourier Transform (STFT)** – time-frequency analysis
- **Wavelet Transform** – multi-resolution time-frequency; great for compression, denoising.
- **Discrete Cosine Transform (DCT)** – used in compression
- **Hilbert Transform** – analytic signals, instantaneous phase/frequency
- **Z-transform** – discrete-time system analysis
- **Chirp Z-Transform** – arbitrary frequency resolution zooming
- **Laplace transform** – continuous-time system analysis

For **audio** → STFT & wavelets.  
For **radar/sonar** → FFTs and ambiguity functions.  
For **control theory** → Z-transform and Laplace domain.

## Modulation & Multiplexing

**Analog Modulation:**
- Amplitude Modulation (AM)
	- DSB (double sideband)    
	- SSB (single sideband)    
	- VSB (vestigial sideband)
- Frequency Modulation (FM)
- Phase Modulation (PM)

**Digital Modulation:**
- ASK (Amplitude Shift Keying)
- FSK (Frequency Shift Keying)
- PSK (Phase Shift Keying)
	- BPSK
	- QPSK
	- 8-PSK
	- etc.
- QAM (Quadrature Amplitude Modulation)
- OFDM (Orthogonal Frequency Division Multiplexing)
	- multi-carrier modulation using FFT (Wi-Fi, LTE).
- Spread Spectrum
	- DSSS (Direct Sequence Spread Spectrum)
    - FHSS (Frequency Hopping Spread Spectrum)

**Multiplexing:**
- TDM (Time Division Multiplexing)
	- interleaving samples in time.
- FDM (Frequency Division Multiplexing)
	- separate carriers in frequency.
- CDMA (Code Division Multiple Access)
	- orthogonal codes in same spectrum.
- SDM (Space Division Multiplexing)
- WDM (Wavelength Division Multiplexing)

If in **telecom** → OFDM and adaptive modulation schemes.  
If in **embedded sensor networks** → TDM and FDM trade-offs.

## Demodulation & Phase Detection

- **Envelope detector** – simple AM demodulation
- **Coherent demodulation** – carrier recovery + mixing
- **Quadrature demodulation (I/Q)** – AM, QAM, PSK, I/Q detection
- **Frequency discriminator** – FM demodulation
- **Phase detection**:
    - Zero-crossing method
    - Arctangent demodulation (`atan2(Q,I)`)
    - Hilbert transform (for instantaneous phase)
    - Cross-correlation for phase offset measurement
- **Carrier recovery** – PLL, Costas loop
- **Symbol timing recovery** – Gardner, Mueller–Müller algorithms
- **Phase-Locked Loop (PLL)** – frequency/phase tracking
- **Costas Loop** – carrier phase recovery in PSK/QAM

## Synchronization

- **Carrier Recovery** – PLL, Costas Loop
- **Symbol Synchronization** – Gardner, early–late gate
- **Frame Synchronization** – correlation-based, preamble detection

## Spectral Analysis

- **Power Spectral Density (PSD)** – via FFT
- **Periodogram** – raw spectrum estimate
- **Welch’s method** – averaged PSD
- **Capon’s method** – improved resolution
- **MUSIC / ESPRIT** – high-resolution frequency/DOA estimation
- **Spectrograms** – visualizing frequency over time
- **Cepstrum analysis** – pitch, echo detection

## Resampling & Rate Conversion

- **Decimation** – reduce sample rate
- **Interpolation** – increase sample rate
- **Fractional resampling** – rational factor changes
- **Polyphase filtering** – efficient rate conversion
- **CIC filters** – hardware-friendly resampling filters

## Coding, Compression & Reconstruction

- **Channel coding** – Hamming, Reed–Solomon, convolutional codes
- **Error correction (EC)** and **Forward Error Correction (FEC)** – Turbo codes, LDPC
- **Predictive coding** – DPCM, ADPCM
- **Transform coding** – JPEG (DCT), JPEG2000 (wavelets)
- **Perceptual coding** – MP3 (MDCT), AAC (psychoacoustics)
- **Interleaving** – burst error resistance

If working with **machine vision** → learn DCT, wavelets.  
If doing **communications** → channel estimation & matched filters.

## Special DSP Tools

- **Window functions** – Hamming, Hanning, Blackman, Kaiser (reduce spectral leakage)
- **Envelope detection** – RMS and peak tracking
- **Dynamic range control** – compressors, expanders
- **Equalization** – frequency shaping
- **Noise gating** – suppressing low-level noise
- **Deconvolution** – inverse filtering to remove channel effects

## Spectral Analysis & Estimation

- **Periodogram** – raw PSD estimate
- **Welch’s Method** – averaged PSD
- **Capon’s Method** – high-resolution PSD
- **MUSIC / ESPRIT** – direction of arrival & frequency estimation
- **Cross-spectral density** – coherence analysis
- **Cepstrum analysis** – echo/reverb detection, pitch extraction

## Other Useful DSP Techniques

- **Resampling** – interpolation, decimation, CIC filters
- **Envelope Following** – RMS detectors, peak detectors
- **Window Functions** – Hamming, Blackman, Kaiser for spectral leakage control
- **Correlation & Cross-Correlation** – signal similarity, synchronization
- **Convolution & Fast Convolution** – via FFT
- **Deconvolution** – inverse filtering
- **Spectrograms** – visualizing frequency over time

## Topics by Application

| Domain                      | Must Know                                                               |
| --------------------------- | ----------------------------------------------------------------------- |
| **Basic electronics/audio** | LPF, HPF, BPF, FIR/IIR basics                                           |
| **Wireless/SDR**            | Modulation/demodulation, PLL, Costas loop, polyphase filterbanks        |
| **Control systems**         | Kalman filters, Z-transform, spectral estimation                        |
| **Data compression**        | DCT, wavelets, predictive coding                                        |
| **Measurement systems**     | Quantization, PSD estimation, anti-aliasing, FFT and FFT-based analysis |
| **Audio effects**           | FIR/IIR, STFT, FIR filters, convolution reverb, perceptual coding       |
| **Radar/Sonar**             | Matched filters, Doppler processing, CFAR detection                     |
| **Telecom**                 | OFDM, QAM, error correction, symbol timing recovery                     |
## Books

### Beginner

- **Understanding Digital Signal Processing** by Richard G. Lyons
- **The Scientist and Engineer’s Guide to Digital Signal Processing** by Steven W. Smith
- **Signals and Systems** by Alan V. Oppenheim, Alan S. Willsky

### Intermediate

- **Discrete-Time Signal Processing** by Alan V. Oppenheim, Ronald W. Schafer
- **Signal Processing and Linear Systems** by B.P. Lathi
- **Digital Signal Processing: Principles, Algorithms, and Applications** by John G. Proakis, Dimitris Manolakis
- **Wavelet Methods for Time Series Analysis** by Donald B. Percival, Andrew T. Walden

### Advanced

- **Fourier Analysis and Its Applications** by Gerald B. Folland
- **Time–Frequency Analysis** by Leon Cohen
- **Wavelets and Filter Banks** by Gilbert Strang, Truong Nguyen
- **Statistical Digital Signal Processing and Modeling** by Monson H. Hayes
- **Adaptive Signal Processing** by Bernard Widrow, Samuel D. Stearns
