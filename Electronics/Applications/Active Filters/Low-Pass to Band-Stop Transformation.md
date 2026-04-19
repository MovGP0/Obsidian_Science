# Low-Pass to Band-Stop Transformation

<!-- page-import:0872:start -->
12.9 Tiefpass-Bandsperren-Transformation 835

$$
A(s_n)=\frac{kRC\omega_r s_n}{1+RC\omega_r(3-k)s_n+R^2C^2\omega_r^2 s_n^2}
$$

Resonanzfrequenz: $f_r=\frac{1}{2\pi RC}$

Verstärkung: $A_r=\frac{k}{3-k}$

Güte: $Q=\frac{1}{3-k}$

**Abb. 12.56.** Bandpassfilter mit Einfachmitkopplung. Dimensionierungsbeispiel für einen Bandpass mit den Daten $Q = 10$ und $f_r = 1\,\text{kHz}$

## 12.9 Tiefpass-Bandsperren-Transformation

Zur selektiven Unterdrückung einer bestimmten Frequenz benötigt man ein Filter, dessen Verstärkung bei der Resonanzfrequenz Null ist und bei höheren und tieferen Frequenzen auf einen konstanten Wert ansteigt. Solche Filter nennt man *Sperrfilter* oder *Bandsperren*. Zur Charakterisierung der Selektivität definiert man eine *Unterdrückungsgüte* $Q = f_r/B$ in Analogie zur Güte bei Bandpässen. Darin ist $B$ die 3 dB-Bandbreite. Je größer die Güte des Filters ist, desto steiler fällt die Verstärkung in der Nähe der Resonanzfrequenz $f_r$ ab.

Wie beim Bandpass kann man auch bei der Bandsperre den Amplitudenfrequenzgang durch eine geeignete Frequenztransformation aus dem Frequenzgang eines Tiefpassfilters erzeugen. Dazu ersetzt man die Variable $s_n$ durch den Ausdruck:

$$
s_n \quad \Rightarrow \quad \frac{\Delta\omega_n}{s_n+\frac{1}{s_n}}
$$

(12.64)

Darin ist $\Delta\omega_n = 1/Q$ wieder die normierte 3 dB-Bandbreite. Durch diese Transformation wird die Amplitudencharakteristik des Tiefpasses vom Bereich $0 \leq \omega_n \leq 1$ in den Durchlassbereich der Bandsperre zwischen $0 \leq \omega_n \leq \omega_{n,g1}$ abgebildet. Außerdem erscheint sie im logarithmischen Maßstab an der Resonanzfrequenz gespiegelt. Bei Bandsperren 2. Ordnung besitzt die Übertragungsfunktion eine Nullstelle bei der Resonanzfrequenz $\omega_n = 1$ Wie beim Bandpass verdoppelt sich die Ordnung des Filters durch die Transformation. Besonders interessant ist die Anwendung der Transformation auf einen Tiefpass 1. Ordnung. Sie führt auf eine Bandsperre 2. Ordnung mit der Übertragungsfunktion:

$$
A(s_n)=\frac{A_0(1+s_n^2)}{1+\Delta\omega_n s_n+s_n^2}
=\frac{A_0(1+s_n^2)}{1+\frac{1}{Q}s_n+s_n^2}
$$

(12.65)
<!-- page-import:0872:end -->
