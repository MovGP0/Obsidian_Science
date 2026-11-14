## Windowed Fourier Transform (WFT)

> [!note]
> The **Windowed Fourier Transform** (WFT) is also known as **Short Time Fourier Transform** (STFT)

The [[Fourier Transformation]] analyses signals in the **frequency domain**, but loses all time information.  
The **WFT** tries to fix this by applying a _window function_ $w(t)$ that is localized in time, then taking the Fourier transform within that window:

$$X(t,\omega) = \int_{-\infty}^{\infty} x(\tau)\, w(\tau - t)\, e^{-i \omega \tau}\, d\tau$$

- You **slide the window** along time ($t$).
- For each position, you compute the Fourier transform inside the window.

### Limitations

- The window size is fixed.
- So time resolution and frequency resolution are fixed across all frequencies.
    - A wide window = good frequency resolution, poor time resolution.
    - A narrow window = good time resolution, poor frequency resolution.

## Wavelet Transform (WT)

The **Wavelet Transform** replaces the fixed window with a **scalable, shifting function** (the wavelet).

$$W(a,b) = \frac{1}{\sqrt{|a|}} \int_{-\infty}^{\infty} x(t)\, \psi\!\left(\frac{t-b}{a}\right) dt$$

where:
- $a$ = scale (controls width of wavelet → frequency band).
- $b$ = shift (controls position in time).
- $\psi(t)$ = mother wavelet.

### Key differences

The **WT** uses **logarithmic tiling**.
- At **high frequencies** (small $a$), the wavelet is narrow → good time resolution, poor frequency resolution.    
- At **low frequencies** (large $a$), the wavelet is wide → good frequency resolution, poor time resolution.

> [!note] 
> Wavelets automatically adapt the resolution depending on the frequency.
 