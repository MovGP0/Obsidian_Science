# Low-Pass to High-Pass Transformation

<!-- page-import:0852:start -->
12.3 Tiefpass-Hochpass-Transformation 815

Abb. 12.33. Tiefpass-Hochpass-Transformation  
Beispiel: Tschebyscheff-Filter 2. Ordnung mit 3 dB Welligkeit

## 12.3 Tiefpass-Hochpass-Transformation

In der logarithmischen Darstellung kommt man vom Tiefpass zum analogen Hochpass, indem man die Frequenzgangkurve der Verstärkung an der Grenzfrequenz spiegelt, d.h. $\omega_n$ durch $1/\omega_n$ bzw. $s_n$ durch $1/s_n$ ersetzt. Die Grenzfrequenz bleibt dabei erhalten und $A_0$ geht in $A_\infty$ über, wie man auch in Abb. 12.33 erkennt. Aus Gleichung (12.29) ergibt sich die Übertragungsfunktion für Hochpassfilter:

$$
A(s_n) = \frac{A_\infty}{\prod_i \left(1 + \frac{a_i}{s_n} + \frac{b_i}{s_n^2}\right)} = \frac{A_\infty s_n^N}{\prod_i (b_i + a_i s_n + s_n^2)}
$$

(12.35)

Der wesentliche Merkmal der Hochpassfilter besteht darin, dass im Zähler und im Nenner - wenn man alle Produkte ausmultipliziert - die höchste Potenz von $s_n$ steht, die gleich der Ordnung des Filters ist. Deshalb strebt die Verstärkung für hohe Frequenzen gegen $A_\infty$.

## 12.4 Realisierung von Tief- und Hochpassfiltern 1. Ordnung

Nach (12.29) lautet die Übertragungsfunktion eines Tiefpasses 1. Ordnung allgemein:

$$
A(s_n) = \frac{A_0}{1 + a_1 s_n}
$$

(12.36)

Sie lässt sich mit einem einfachen $RC$-Glied realisieren. Damit die Filtercharakteristik nicht durch die nachfolgende Schaltung verfälscht wird, fügt man meist wie in Abb. 12.34 einen Impedanzwandler hinzu, der bei Bedarf auch eine Verstärkung bewirken kann.

$$
A(s_n) = \frac{1 + R_2/R_3}{1 + s\,R_1 C_1} = \frac{1 + R_2/R_3}{1 + \omega_g R_1 C_1 s_n}
$$

Die Gleichspannungsverstärkung hat den Wert $A_0 = 1 + R_2/R_3$. Der Koeffizientenvergleich mit (12.36) liefert die Dimensionierung:

$$
R_1 C_1 = \frac{a_1}{2\pi f_g}
$$

(12.37)
<!-- page-import:0852:end -->
