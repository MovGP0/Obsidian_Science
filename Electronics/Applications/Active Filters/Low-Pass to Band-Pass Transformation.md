# Low-Pass to Band-Pass Transformation

<!-- page-import:0863:start -->
826  12. Aktive Filter

**Abb. 12.48.** Veranschaulichung der Tiefpass-Bandpass-Transformation

## 12.7 Tiefpass-Bandpass-Transformation

Im Abschnitt 12.3 haben wir gezeigt, wie man durch Transformation der Frequenzvariablen einen gegebenen Tiefpass-Frequenzgang in den entsprechenden Hochpass-Frequenzgang übersetzen kann. Durch eine ganz ähnliche Transformation kann man auch den Frequenzgang eines Bandpasses erzeugen, indem man in der Tiefpass-Übertragungsfunktion die Frequenzvariable $s_n$ durch den Ausdruck

$$
s_n \quad \Rightarrow \quad \frac{1}{\Delta\omega_n}\left(s_n + \frac{1}{s_n}\right)
$$

ersetzt. Durch diese Transformation wird die Amplitudencharakteristik des Tiefpasses vom Bereich $0 \leq \omega_n \leq 1$ in den Durchlassbereich eines Bandpasses zwischen der Mittenfrequenz $\omega_n = 1$ und der oberen Grenzfrequenz $\omega_{n,\max}$ abgebildet. Außerdem erscheint sie im logarithmischen Frequenzmaßstab an der Mittenfrequenz gespiegelt mit der unteren Grenzfrequenz $\omega_{n,\min} = 1/\omega_{n,\max}$. Die Gleichspannungsverstärkung $A_0$ geht dabei in die Verstärkung bei der Mitten- bzw Resonanzfrequenzfrequenz $A_r$ über. Abbildung 12.48 veranschaulicht diese Verhältnisse.

Die normierte Bandbreite $\Delta\omega_n = \omega_{n,\max} - \omega_{n,\min}$ ist frei wählbar. Aus der angegebenen Abbildungs-Eigenschaft ergibt sich, dass der Bandpass bei $\omega_{n,\min}$ und $\omega_{n,\max}$ dieselbe Verstärkung besitzt wie der entsprechende Tiefpass bei $\omega_n = 1$. Ist der Tiefpass wie in unseren Filtertabellen in Abb. 12.18 bis 12.30 auf die 3 dB-Grenzfrequenz normiert, stellt $\Delta\omega_n$ die normierte 3 dB-Bandbreite des Bandpasses dar. Mit

$$
\Delta\omega_n = \omega_{n,\max} - \omega_{n,\min}
\qquad \text{und} \qquad
\omega_{n,\max}\cdot\omega_{n,\min} = 1
$$

erhalten wir die normierten 3 dB-Grenzfrequenzen:

$$
\omega_{n,\max/\min} =
\sqrt{1 + \frac{\Delta\omega_n^2}{4}} \pm \frac{1}{2}\Delta\omega_n
=
\sqrt{1 + \frac{1}{4Q^2}} \pm \frac{1}{2}\Delta\omega_n
\qquad (12.45)
$$

Das Ergebnis lässt sich noch umformen, wenn man die Normierung aufhebt:

$$
\omega_n = \frac{\omega}{\omega_r} = \frac{f}{f_r}
\qquad \text{und} \qquad
\Delta\omega_n = \frac{\Delta\omega}{\omega_r} = \frac{\Delta f}{f_r} = \frac{B}{f_r} = \frac{1}{Q}
\qquad (12.46)
$$
<!-- page-import:0863:end -->

<!-- page-import:0864:start -->
12.7 Tiefpass-Bandpass-Transformation 827

Darin ist $Q = 1/\Delta\omega_n$ die Güte des Bandpasses und $B = \Delta f = f_{\max} - f_{\min}$ die Bandbreite. Dann folgt für die Grenzfrequenzen mit $f_r = 1\,\text{kHz}$ und $Q = 10$ als Beispiel:

$$
f_{\max/\min} = f_r \sqrt{1 + \frac{1}{4Q^2}} \pm \frac{B}{2} = 1001\,\text{Hz} \pm 50\,\text{Hz}
$$

(12.47)

## 12.7.1 Bandpassfilter 2. Ordnung

Den einfachsten Bandpass erhält man, wenn man die Transformation (12.43) auf einen Tiefpass 1. Ordnung mit

$$
A(s_n) = \frac{A_0}{1 + s_n}
$$

anwendet. Damit ergibt sich für den Bandpass die Übertragungsfunktion 2. Ordnung:

$$
A(s_n) = \frac{A_0}{1 + \frac{1}{\Delta\omega_n}\left(s_n + \frac{1}{s_n}\right)} = \frac{A_0\Delta\omega_n s_n}{1 + \Delta\omega_n s_n + s_n^2}
$$

(12.48)

Bei Bandpässen interessiert man sich für die Verstärkung $A_r$ bei der Resonanzfrequenz und die Güte $Q$. Aus den angegebenen Transformationseigenschaften ergibt sich unmittelbar $A_r = A_0$. Dies kann man leicht verifizieren, indem man in (12.48) $\omega_n = 1$, d.h. $s_n = j$ setzt. Da sich für $A_r$ ein reeller Wert ergibt, ist die Phasenverschiebung bei der Resonanzfrequenz gleich Null.

In Analogie zum Schwingkreis definiert man die Güte als das Verhältnis von Resonanzfrequenz $f_r$ zu Bandbreite $B$. Es gilt also:

$$
Q = \frac{f_r}{B} = \frac{f_r}{f_{\max} - f_{\min}} = \frac{1}{\omega_{n,\max} - \omega_{n,\min}} = \frac{1}{\Delta\omega_n}
$$

(12.49)

Durch Einsetzen in (12.48) erhält man die Übertragungsfunktion:

$$
A(s_n) = \frac{(A_r/Q)s_n}{1 + \frac{1}{Q}s_n + s_n^2}
$$

(12.50)

Diese Gleichung ermöglicht es, direkt aus der Übertragungsfunktion eines Bandpasses 2. Ordnung alle interessierenden Größen abzulesen und einen Bandpass zu entwerfen.

Aus (12.50) erhalten wir mit $s_n = j\omega_n$ den Betrag der Verstärkung, die Phasenverschiebung und die Gruppenlaufzeit:

$$
|A| = \frac{(A_r/Q)\omega_n}{\sqrt{1 + \omega_n^2\left(\frac{1}{Q^2} - 2\right) + \omega_n^4}}
$$

(12.51)

$$
\varphi = \arctan \frac{Q(1 - \omega_n^2)}{\omega_n}
$$

(12.52)

$$
T_{gr} = \frac{(1 + \omega_n^2)Q}{Q^2 + (1 - 2Q^2)\omega_n^2 + Q^2\omega_n^4}
$$

(12.53)

Diese Funktionen sind in Abb. 12.49 für die Güten 1 und 10 dargestellt.
<!-- page-import:0864:end -->

<!-- page-import:0865:start -->
828 12. Aktive Filter

\[
\frac{|A|}{\mathrm{dB}}
\]

10

0

-10

-20

-30

-40

0,1 0,2 0,5 1 2 5 10 $\omega_n$

$Q = 1$

$Q = 10$

Frequenzgang der Verstärkung

90°

$\varphi$

45°

0°

-45°

-90°

0,1 0,2 0,5 1 2 5 10 $\omega_n$

$Q = 10$

$Q = 1$

Frequenzgang der Phasenverschiebung

$T_{gr}$

15

10

5

0

0,1 0,2 0,5 1 2 5 10 $\omega_n$

$Q = 10$

$Q = 1$

Frequenzgang der Gruppenlaufzeit

**Abb. 12.49.** Bandpassfilter 2. Ordnung. Frequenzgang der Amplitude, der Phasenverschiebung und der Gruppenlaufzeit mit der Güte $Q = 1$ und $Q = 10$
<!-- page-import:0865:end -->

<!-- page-import:0866:start -->
12.7 Tiefpass-Bandpass-Transformation 829

Abb. 12.50. Bandpassfilter 4. Ordnung mit Güten von $Q = 1$ und 10 basierend auf 0,5 dB Tschebyscheff Tiefpässen. Gestrichelt: Bandpässe 2. Ordnung zum Vergleich.

## 12.7.2 Bandpassfilter 4. Ordnung

Bei Bandpassfiltern 2. Ordnung wird der Amplitudenfrequenzgang umso spitzer, je größer man die Güte wählt. Es gibt jedoch Anwendungsfälle, bei denen man in der Umgebung der Resonanzfrequenz einen möglichst flachen Verlauf fordern muss und trotzdem einen steilen Übergang in den Sperrbereich benötigt. Dies lässt sich mit Bandpassfiltern höherer Ordnung lösen. Dann hat man die Möglichkeit, außer der Güte auch die gewünschte Filtercharakteristik im Durchlassbereich zu wählen.

Von besonderer Bedeutung ist die Anwendung der Tiefpass-Bandpass-Transformation auf Tiefpässe 2. Ordnung. Sie führt auf Bandpässe 4. Ordnung, die wir im Folgenden näher untersuchen wollen. Durch Einsetzen der Transformationsgleichung (12.43) in die Tiefpassgleichung 2. Ordnung (12.39) erhalten wir die Bandpass-Übertragungsfunktion:

$$
A(s_n)=\frac{\frac{A_r}{b_1Q^2}s_n^2}{1+\frac{a_1}{b_1Q}s_n+\left[2+\frac{1}{b_1Q^2}\right]s_n^2+\frac{a_1}{b_1Q}s_n^3+s_n^4}
\qquad (12.54)
$$

Man erkennt, dass der Amplitudenfrequenzgang bei tiefen und hohen Frequenzen eine Asymptotensteigung von $\pm 40\,\mathrm{dB}/\mathrm{Dekade}$ besitzt, weil die Übertragungsfunktion bei tiefen Frequenzen mit $s_n^2$ ansteigt und bei hohen Frequenzen mit $s_n^{-2}$ abfällt. Bei der Resonanzfrequenz $\omega_n = 1$ d.h. $s_n = j$ wird die Verstärkung reell und besitzt den Wert $A_r$.

In Abb. 12.50 haben wir Beispiele für Bandpässe 4. Ordnung aufgezeichnet und zum Vergleich Bandpässe 2. Ordnung mit derselben Güte. Man erkennt, dass die Bandpässe 4. Ordnung eine bessere Sperrdämpfung besitzen und in der Umgebung der Resonanzfrequenz eine konstante Verstärkung besitzen. Sie approximieren daher einen rechteckförmigen Verlauf der Verstärkung besser.

Zur Realisierung ist es auch hier nützlich, die Übertragungsfunktion (12.54) in zwei Faktoren zweiten Grades zerlegen. Je nach Zerlegung des Zählers erhält man zwei verschiedene Realisierungsmöglichkeiten:
<!-- page-import:0866:end -->

<!-- page-import:0867:start -->
830 12. Aktive Filter

**Abb. 12.51.** Bandpass 4. Ordnung mit Güte $Q = 1$ realisiert aus einem 0,5 dB Tschbscheff Tiefpass und dem komplementären Hochpass

– Die Aufspaltung in einen Hochpass, der $s_n^2$ im Zähler enthält, und einen Tiefpass mit einer Konstanten im Zähler. Diese Realisierung ist bei niedriger Güte vorteilhaft.  
– Bei hoher Güte $Q > 1$ verwendet man besser die Reihenschaltung zweier Bandpässe 2. Ordnung, die etwas gegeneinander verstimmt sind.

Zur Realisierung eines Bandpassfilters 4. Ordnung mit einem Hoch- und Tiefpass 2. Ordnung verwendet man einen Tiefpass und einen symmetrischen Hochpass:

$$
A(s_n)=\frac{A_x}{1+a_x\,s_n+b_x\,s_n^2}\cdot\frac{A_x\,s_n^2}{b_x+a_x\,s_n+s_n^2}
$$

(12.55)

Nach dem Ausmultiplizieren liefert der Koeffizientenvergleich mit (12.54) das Gleichungssystem:

$$
\frac{a_x b_x+a_x}{b_x}=\frac{a_1}{b_1 Q}, \qquad \frac{a_x^2+b_x^2+1}{b_x}=2+\frac{1}{b_1 Q^2}
$$

(12.56)

Es lässt sich nach Vorgabe von $a_1$, $b_1$ und $Q$ mit einem Mathematikprogramm numerisch nach $a_x$ und $b_x$ auflösen. Danach kann man noch die Verstärkung der Teilfilter berechnen:

$$
A_x=\frac{1}{Q}\sqrt{\frac{b_x A_r}{b_1}}
$$

(12.57)

Die Vorgehensweise soll an dem Beispiel in Abb. 12.51 gezeigt werden. Realisiert werden soll ein Bandpass 4. Ordnung mit der Güte $Q = 1$ und der Verstärkung $A_r = 1$. Er soll 0,5 dB-Tschebyscheff Charakteristik besitzen; dafür erhalten wir aus Abb. 12.26 die Werte $a_1 = 1{,}3614$ und $b_1 = 1{,}3827$. Aus (12.56) ergibt sich dann $a_x = 0{,}3270$ und $b_x = 0{,}4973$ und aus (12.57) die Verstärkung $A_x = 0{,}5997$. In Abb. 12.51 ist der resultierende Bandpass dargestellt. Man sieht dabei, wie sich der Bandpass aus dem Zusammenwirken des Hoch- und Tiefpasses ergibt.

Als Alternative zur Realisierung eines Bandpasses 4. Ordnung wollen wir jetzt 2 Bandpassfilter 2. Ordnung einsetzen, die um einen Faktor $\alpha$ gegenüber der Resonanzfrequenz verstimmt sind:
<!-- page-import:0867:end -->

<!-- page-import:0868:start -->
12.7 Tiefpass-Bandpass-Transformation 831

**Abb. 12.52.** Bandpassfilter 4. Ordnung mit Güte $Q = 10$ realisiert aus 2 symmetrischen Bandpässen. Zur besseren Darstellung wurde hier die Frequenzachse stark gedehnt.

$$
A(s_n) =
\frac{\dfrac{A_x}{Q_x}(\alpha s_n)}{1 + \dfrac{1}{Q_x}(\alpha s_n) + (\alpha s_n)^2}
\cdot
\frac{\dfrac{A_x}{Q_x}\left(\dfrac{s_n}{\alpha}\right)}{1 + \dfrac{1}{Q_x}\left(\dfrac{s_n}{\alpha}\right) + \left(\dfrac{s_n}{\alpha}\right)^2}
\qquad (12.58)
$$

Durch Ausmultiplizieren und Koeffizientenvergleich mit (12.54) erhalten wir für $\alpha$ die Bestimmungsgleichung:

$$
\alpha^2 + \left[\frac{a_1}{b_1\,Q(1+\alpha^2)}\right]^2 + \frac{1}{\alpha^2} - 2 - \frac{1}{b_1Q^2} = 0
\qquad (12.59)
$$

Nach Vorgabe von $a_1$, $b_1$ und $Q$ kann man $\alpha$ numerisch mit einem Mathematikprogramm berechnen. Danach erhält man die Polgüte $Q_x$ und die Verstärkung $A_x$ der Teilfilter zu:

$$
Q_x = \frac{b_1}{a_1}\,\frac{1+\alpha^2}{\alpha}\,Q
\qquad \text{und} \qquad
A_x = \frac{Q_x}{Q}\sqrt{\frac{A_r}{b_1}}
\qquad (12.60)
$$

Zur Realisierung muss man 2 getrennte Bandpässe dimensionieren, die in Güte und Verstärkung übereinstimmen, aber verschiedene Resonanzfrequenzen besitzen:

$$
f_{r1} = f_r/\alpha
\qquad \text{und} \qquad
f_{r2} = f_r \cdot \alpha
$$

Die Dimensionierung der Teilfilter sei noch an einem Zahlenbeispiel erläutert: Gesucht ist ein 0,5 dB Tschebyscheff Bandpass mit einer Resonanzfrequenz von $f_r = 1\,\text{kHz}$ und einer Bandbreite von $B = 100\,\text{Hz}$. Die Güte beträgt also $Q = f_r/B = 10$. Die Verstärkung bei der Resonanzfrequenz soll $A_r = 1$ betragen. Mit den Filterkoeffizienten $a_1 = 1{,}3614$ und $b_1 = 1{,}3827$ erhalten wir aus (12.59) $\alpha = 1{,}0353$. Aus (12.60) ergibt sich dann die Güte der Teilfilter $Q_x = 20{,}33$ und ihre Verstärkung $A_x = 1{,}729$. Die Resonanzfrequenzen der Teilfilter sind $f_{r1} = 966\,\text{Hz}$ und $f_{r2} = 1035\,\text{Hz}$.

In Abb. 12.52 ist der Frequenzgang der beiden Bandpässe 2. Ordnung und der des resultierenden Bandpasses 4. Ordnung aufgezeichnet. Man sieht auch hier, wie die beiden Teilfilter zusammen den gewünschten Bandpass ergeben.
<!-- page-import:0868:end -->
