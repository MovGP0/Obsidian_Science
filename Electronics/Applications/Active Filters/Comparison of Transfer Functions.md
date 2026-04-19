# Comparison of Transfer Functions

<!-- page-import:0839:start -->
802  12. Active Filter

| Welligkeit | 0,1 dB | 0,5 dB | 1 dB | 3 dB |
|---|---:|---:|---:|---:|
| $A_{\max}/A_{\min}$ | 1,012 | 1,059 | 1,122 | 1,413 |
| $k$ | 1,023 | 1,122 | 1,259 | 1,995 |
| $\varepsilon$ | 0,153 | 0,349 | 0,509 | 0,998 |

**Abb. 12.14.**  
Parameter, die sich aus der Welligkeit von Tschebyscheff-Filtern ergeben

$$
A_{\max} = A_0\sqrt{1+\varepsilon^2}
$$

$$
A_{\min} = A_0
\qquad\text{bei gerader Ordnung}
$$

und

$$
A_{\max} = A_0
$$

$$
A_{\min} = \frac{A_0}{\sqrt{1+\varepsilon^2}}
\qquad\text{bei ungerader Ordnung}
$$

In Abb. 12.14 haben wir die auftretenden Größen für verschiedene Welligkeiten angegeben. Im Prinzip könnte man aus dem Betrag der Verstärkung die komplexe Verstärkung berechnen und daraus die Koeffizienten der faktorisierten Form bestimmen. Es ist jedoch einfacher, die Pole der Übertragungsfunktion explizit aus denen der Butterworth-Filter zu berechnen, indem man den Kreis, auf dem die Butterworth-Pole liegen, zu einer Ellipse umformt, wie in den Abbildungen 12.10 und 12.11 angedeutet. Daraus ergeben sich die Koeffizienten $a_i$ und $b_i$:1

Ordnung $N$ gerade:

$$
b_i'=\frac{1}{\cosh^2\gamma-\cos^2\frac{(2i-1)\pi}{2N}}
\qquad\text{für } i=1\ldots\frac{N}{2}
$$

$$
a_i'=2b_i'\cdot\sinh\gamma\cdot\cos\frac{(2i-1)\pi}{2N}
$$

Ordnung $N$ ungerade:

$$
b_1'=0
$$

$$
a_1'=\frac{1}{\sinh\gamma}
$$

$$
b_i'=\frac{1}{\cosh^2\gamma-\cos^2\frac{(i-1)\pi}{N}}
\qquad\text{für } i=2\ldots\frac{N+1}{2}
$$

$$
a_i'=2b_i'\cdot\sinh\gamma\cdot\cos\frac{(i-1)\pi}{N}
$$

Darin ist

$$
\gamma=\frac{1}{N}\operatorname{arsinh}\frac{1}{\varepsilon}.
$$

Setzt man die so erhaltenen Koeffizienten $a_i'$ und $b_i'$ anstelle von $a_i$ und $b_i$ in (12.20) ein, ergeben sich Tschebyscheff-Filter, bei denen $s_n$ nicht auf die 3 dB-Grenzfrequenz $\omega_g$

1 $\sinh x = \frac{1}{2}(e^x-e^{-x})$  
$\cosh x = \frac{1}{2}(e^x+e^{-x})$  
$\operatorname{arsinh}x=\ln\left(x+\sqrt{x^2+1}\right)$
<!-- page-import:0839:end -->

<!-- page-import:0897:start -->
860 12. Aktive Filter

Wie man sieht, bestimmt das Kapazitätsverhältnis $C/C_S$ zusammen mit der Schaltfrequenz $f_S$ die Integrationszeitkonstante. Ein wesentlicher Vorteil einer integrierten Realisierung ist, dass Kapazitätsverhältnisse mit 0,1% Toleranz hergestellt werden können. Man erreicht daher gut reproduzierbare Genauigkeiten mit monolithischen SC-Filtern. Gut reproduzierbare Zeitkonstanten, die sonst in integrierter Technik nur schwer und aufwendig realisierbar sind, können in SC-Technik einfach erreicht werden. Dazu muss nur das Verhältnis der beiden Kapazitäten entsprechend gewählt werden.

Bei den SC-Filtern handelt es sich um Abtastsysteme. Verletzt man das Abtasttheorem, muss man in jedem Falle mit unerwünschten Mischprodukten im Basisband rechnen. Deshalb darf das Eingangssignal keine Frequenzanteile oberhalb der halben Schaltfrequenz $\frac{1}{2}f_S$ enthalten. Falls die Spektralanteile des Eingangssignals bei dieser Frequenz nicht bereits aus eine genügend hohe Dämpfung (ca. 70...90 dB) besitzen, ist ein analoges Vorfilter erforderlich. Da die typische Abtastfrequenz integrierter SC-Filter gleich dem 50...200-fachen der Grenzfrequenz ist, reicht zu diesem Zweck normalerweise ein einfacher analoger Tiefpass als sogenanntes Anti-Aliasing-Filter aus.

Das Ausgangssignal eines SC-Filters hat immer einen treppenförmigen Verlauf, da sich die Ausgangsspannung nur im Schaltaugenblick ändert. Es enthält also Spektralanteile, die von der Schaltfrequenz herrühren. Je nach Anwendung ist daher auch am Ausgang ein analoges Glättungsfilter erforderlich. Ein Problem mit analogen Anti-Aliasing-Filtern am Eingang und Ausgang von SC-Filter besteht darin, dass man sie für eine feste Frequenz dimensionieren muss.

## 12.14 Vergleich der Übertragungsfunktionen

Die verschiedenen Filter, die in diesem Kapitel behandelt wurden, sollen hier gegenübergestellt werden, um die Gemeinsamkeiten und Unterschiede zu erkennen.

- Tiefpass

$$
A(s_n) = \frac{A_0}{1 + a_1 s_n + b_1 s_n^2}
\qquad
\left. |A| \right|_{s_n=j} = \frac{A_0}{\sqrt{2}}
\qquad
\lim_{s_n \to \infty} A = 0
$$

- Hochpass

$$
A(s_n) = \frac{A_\infty\, s_n^2}{b_i + a_i s_n + s_n^2}
\qquad
\left. |A| \right|_{s_n=j} = \frac{A_\infty}{\sqrt{2}}
\qquad
\lim_{s_n \to \infty} A = A_\infty
$$

- Bandpass

$$
A(s_n) = \frac{(A_r/Q)s_n}{1 + \frac{1}{Q}s_n + s_n^2}
\qquad
\left. |A| \right|_{s_n=j} = A_r
\qquad
\lim_{s_n \to \infty} A = 0
$$

- Bandsperre

$$
A(s_n) = \frac{A_0(1 + s_n^2)}{1 + \frac{1}{Q}s_n + s_n^2}
\qquad
\left. |A| \right|_{s_n=j} = 0
\qquad
\lim_{s_n \to \infty} A = A_0
$$

- Allpass

$$
A(s_n) = \frac{1 - a_1 s_n + b_1 s_n^2}{1 + a_1 s_n + b_1 s_n^2}
\qquad
\left. |A| \right|_{s_n=j} = 1
\qquad
\lim_{s_n \to \infty} A = 1
$$
<!-- page-import:0897:end -->

<!-- page-import:0898:start -->
## 12.14 Vergleich der Übertragungsfunktionen

861

Dazu werden hier Filter 2. Ordnung miteinander verglichen, die auch die Bestandteile für Filter höherer Ordnung darstellen. Gegenüber gestellt werden hier die Übertragungsfunktionen, die Verstärkungen bei der Resonanz- bzw Grenzfrequenz ($s_n = j$) und das Verhalten für hohe Frequenzen ($s_n \rightarrow \infty$). Der Vergleich zeigt, dass die Nenner der Übertragungsfunktionen in ihrer Struktur übereinstimmen. Die entscheidenden Unterschiede bestehen in den Zählern. Daraus erklärt sich auch das unterschiedliche Verhalten für hohe Frequenzen.
<!-- page-import:0898:end -->

<!-- page-import:0899:start -->
[unclear]
<!-- page-import:0899:end -->
