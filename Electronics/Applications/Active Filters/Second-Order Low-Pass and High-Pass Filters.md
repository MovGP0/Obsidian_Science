# Second-Order Low-Pass and High-Pass Filters

<!-- page-import:0854:start -->
12.5 Realisierung von Tief- und Hochpassfiltern 2. Ordnung

817

# 12.5 Realisierung von Tief- und Hochpassfiltern 2. Ordnung

Nach (12.29) lautet die Übertragungsfunktion eines Tiefpasses 2. Ordnung allgemein:

$$
A(s_n) = \frac{A_0}{1 + a_1 s_n + b_1 s_n^2}
$$

(12.39)

In den Tabellen der Filterkoeffizienten sieht man, dass die optimierten Übertragungsfunktionen zweiter und höherer Ordnung konjugiert komplexe Pole besitzen mit einer Polgüte $Q > 0{,}5$. Im Abschnitt 12.1.2 wurde gezeigt, dass solche Übertragungsfunktionen nicht mit passiven $RC$-Schaltungen realisierbar sind. Eine Realisierungsmöglichkeit besteht in der Verwendung von Induktivitäten, also $LRC$-Filtern. In den folgenden Beispielen soll ein Besselfilter mit einer Grenzfrequenz von $f_g = 1\,\mathrm{kHz}$ und einer Verstärkung $A_0 = 1$ realisiert werden. Die Übertragungsfunktion ergibt sich dann mit den Werten aus Abb.12.20:

$$
A = \frac{1}{1 + a_1 \cdot s_n + b_1 \cdot s_n^2}
= \frac{1}{1 + 1{,}3617 \cdot s_n + 0{,}6180 \cdot s_n^2}
$$

## 12.5.1 LRC-Filter

Die klassische Realisierung von Filtern 2. Ordnung besteht im Einsatz von $LRC$-Filtern wie in Abb. 12.37. Der Koeffizientenvergleich mit Gl. (12.39) liefert die Dimensionierung:

$$
R = \frac{b_1}{a_1}\frac{1}{2\pi f_g C}
\qquad \text{und} \qquad
L = \frac{b_1}{4\pi^2 f_g^2 C} = \frac{a_1 R}{2\pi f_g}
$$

Wenn man die Größe des Kondensators mit $C = 0{,}1\,\mu\mathrm{F}$ vorgibt, erhält man damit die Dimensionierung $R = 720\,\Omega$ und $L = 0{,}157\,\mathrm{H}$. Man erkennt, dass sich ein solches Filter wegen der Größe der Induktivität außerordentlich schlecht realisieren lässt. Die Verwendung von Induktivitäten lässt sich umgehen, indem man sie mit einer aktiven $RC$-Schaltung simuliert. Dazu kann man die Gyratorschaltung in Abb. 11.37 auf S.785 heranziehen. Der schaltungstechnische Aufwand ist jedoch beträchtlich. Die gewünschten Übertragungsfunktionen lassen sich wesentlich einfacher mit aktiven Filtern realisieren, bei denen statt der Induktivitäten Kondensatoren in mitgekoppelten Operationsverstärker-Schaltungen eingesetzt werden. Dabei ermöglicht die Mitkopplung auch ohne Induktivitäten Polgüten $Q > 0{,}5$.

## 12.5.2 Filter mit Mehrfachgegenkopplung

Ein aktiver $RC$-Tiefpass 2. Ordnung ist in Abb. 12.38 dargestellt. Durch Koeffizientenvergleich mit (12.39) erhalten wir die Beziehungen:

$$
A_0 = -R_2/R_1
$$

$$
a_1 = \omega_g C_1 \left( R_2 + R_3 + \frac{R_2 R_3}{R_1} \right)
$$

$$
b_1 = \omega_g^2 C_1 C_2 R_2 R_3
$$

**Abb. 12.37.**  
Passiver Tiefpass 2. Ordnung.  
Beispiel: Besselfilter $f_g = 1\,\mathrm{kHz}$

$$
A(s_n) = \frac{1}{1 + (L/R)\omega_g s_n + LC\,\omega_g^2 s_n^2}
$$
<!-- page-import:0854:end -->

<!-- page-import:0855:start -->
818  12. Aktive Filter

$$
A(s_n) = -\frac{R_2/R_1}{1 + \omega_g C_1 \left(R_2 + R_3 + \frac{R_2R_3}{R_1}\right)s_n + \omega_g^2 C_1 C_2 R_2 R_3 s_n^2}
$$

**Abb. 12.38.** Aktives Tiefpassfilter 2. Ordnung mit Mehrfachgegenkopplung.  
Beispiel für ein Besselfilter mit einer Grenzfrequenz von 1 kHz

Zur Dimensionierung kann man z.B. die Widerstände $R_1$ und $R_3$ vorgeben und aus den Dimensionierungsgleichungen $R_2$, $C_1$ und $C_2$ berechnen. Wie man sieht, ist eine Dimensionierung für alle positiven Werte von $a_1$ und $b_1$ möglich. Man kann also jeden gewünschten Filtertyp realisieren. Die Gleichspannungsverstärkung $A_0$ ist negativ. Das Filter bewirkt bei tiefen Frequenzen demnach eine Signalinvertierung.

Um wirklich die gewünschten Frequenzgänge zu erhalten, müssen die Bauelemente enge Toleranzen besitzen. Diese Forderung ist für Widerstände leicht zu erfüllen, da sie in der Normreihe E96 mit Toleranz von 1% lagermäßig geführt werden. Aber auch die Kondensatoren sollten einprozentige Toleranz besitzen; sie sind jedoch meist nur in der Normreihe E6 (Abb. 28.4.1 auf Seite 1745) erhältlich. Daher ist es vorteilhaft, bei der Dimensionierung von Filtern die Kondensatoren vorzugeben und die Widerstandswerte zu berechnen. Dazu lösen wir die Dimensionierungsgleichungen nach den Widerständen auf und erhalten:

$$
R_2 = \frac{a_1 C_2 - \sqrt{a_1^2 C_2^2 - 4C_1C_2b_1(1 - A_0)}}{4\pi f_g C_1 C_2}
$$

$$
R_1 = \frac{R_2}{-A_0}
$$

$$
R_3 = \frac{b_1}{4\pi^2 f_g^2 C_1 C_2 R_2}
$$

Damit sich für $R_2$ ein reeller Wert ergibt, muss die Bedingung

$$
\frac{C_2}{C_1} \ge \frac{4b_1(1 - A_0)}{a_1^2}
$$

erfüllt sein. Die günstigste Dimensionierung ergibt sich, wenn man $C_1$ vorgibt und für $C_2$ den nächst größeren Normwert wählt. Zur Erläuterung der Dimensionierung soll hier wieder das vorhergehende Beispiel, also ein Bessel-Tiefpass mit einer Grenzfrequenz von 1 kHz dienen, hier mit einer Verstärkung von $A_0 = -1$. Wir wählen $C_1 = 1\,\mathrm{nF}$ und erhalten mit der Bedingung $C_2 > 4\,\mathrm{nF}$ den Wert $C_2 = 4{,}7\,\mathrm{nF}$. Damit ergeben sich die Widerstände $R_1 = R_2 = 77{,}3\,\mathrm{k}\Omega$ und $R_3 = 43{,}0\,\mathrm{k}\Omega$. Im Vergleich zu dem LRC-Filter in Abb. 12.37 werden die Vorteile des aktiven Filters besonders deutlich.
<!-- page-import:0855:end -->

<!-- page-import:0856:start -->
12.5 Realisierung von Tief- und Hochpassfiltern 2. Ordnung 819

$$
A(s_n)=\frac{A_0}{1+\omega_g\left[C_1(R_1+R_2)+(1-A_0)R_1C_2\right]s_n+\omega_g^2R_1R_2C_1C_2s_n^2}
$$

**Abb. 12.39.** Aktives Tiefpassfilter 2. Ordnung mit Einfachmitkopplung „Sallen–Key“-Schaltung. Beispiel für ein Besselfilter mit einer Grenzfrequenz von 1 kHz.

## 12.5.3 Tiefpassfilter mit Einfachmitkopplung

Aktive Filter lassen sich auch mit nicht invertierenden Verstärkern realisieren. Allerdings muss dabei die Verstärkung durch eine interne Gegenkopplung auf einen genau definierten Wert festgelegt werden. Der Spannungsteiler $R_4,\ R_3$ in Abb. 12.39 bewirkt diese Gegenkopplung und stellt die innere Verstärkung auf den Wert $A_0=1+R_3/R_4$ ein. Die Mitkopplung erfolgt über den Kondensator $C_2$.

Die Dimensionierung lässt sich wesentlich vereinfachen, wenn man von vornherein gewisse Spezialisierungen vornimmt. Eine mögliche Spezialisierung ist, gleiche Widerstände und gleiche Kondensatoren einzusetzen, d.h. $R_1=R_2=R$ und $C_1=C_2=C$. Die Übertragungsfunktion lautet dann:

$$
A(s_n)=\frac{A_0}{1+\omega_gRC(3-A_0)s_n+(\omega_gRC)^2s_n^2}
$$

Durch Koeffizientenvergleich mit (12.39) erhalten wir die Dimensionierung:

$$
RC=\frac{\sqrt{b_1}}{2\pi f_g}, \qquad A_0=1+\frac{R_3}{R_4}=3-\frac{a_1}{\sqrt{b_1}}=3-\frac{1}{Q_1}
$$

Um wieder als Beispiel ein Besselfilter mit einer Grenzfrequenz von 1 kHz zu dimensionieren, wollen wir $C=1\ \mathrm{nF}$ und $R_4=100\,\mathrm{k}\Omega$ vorgeben und erhalten dann die in der Abb. 12.39 eingetragenen Werte.

Die Größe von $A_0$ bestimmt den Filtertyp. Wie man sieht, hängt sie nur von der Polgüte und nicht von der Grenzfrequenz $f_g$ ab. Setzt man die in den Koeffiziententabellen angegebenen Werte der Filter 2. Ordnung ein, erhält man die in Abb. 12.40 angegebenen Werte für $A_0$. Bei $A_0=3$ schwingt die Schaltung auf der Frequenz $f=1/(2\pi\ RC)$. Man erkennt, dass die Einstellung der inneren Verstärkung umso kritischer wird, je näher sie dem Wert $A_0=3$ kommt. Daher ist besonders beim Tschebyscheff-Filter eine genaue

|  | Kritisch | Bessel | Butterworth | 3 dB-Tschebyscheff | ungedämpft |
|---|---:|---:|---:|---:|---:|
| $Q_i$ | 0,5 | 0,58 | 0,71 | 1,3 | $\infty$ |
| $A_0$ | 1,000 | 1,268 | 1,586 | 2,234 | 3,000 |

**Abb. 12.40.** Innere Verstärkung bei Einfachmitkopplung für Filter 2. Ordnung
<!-- page-import:0856:end -->

<!-- page-import:0858:start -->
12.5 Realisierung von Tief- und Hochpassfiltern 2. Ordnung 821

$$
A(s_n) \;=\; \frac{(1 + R_3/R_4)\cdot s_n^2}{\frac{1}{R_1 R_2 C_1 C_2 \omega_g^2} + \frac{R_2(C_1 + C_2) + R_1 C_2(1 - A_\infty)}{R_1 R_2 C_1 C_2 \omega_g}\cdot s_n + s_n^2}
$$

**Abb. 12.42.** Aktives Hochpassfilter 2. Ordnung mit Einfachmitkopplung

## 12.5.4 Hochpassfilter mit Einfachmitkopplung

Zur Realisierung von Hochpassfiltern 2. Ordnung erhält man aus (12.35) die Übertragungsfunktion:

$$
A(s_n) \;=\; \frac{A_\infty\, s_n^2}{b_1 + a_1 s_n + s_n^2}
$$

(12.42)

Vertauscht man in Abb. 12.39 die Widerstände mit den Kondensatoren, erhält man das *Hochpassfilter* in Abb. 12.42. Zur Erleichterung der Dimensionierung wählen wir die Spezialisierung $A_\infty = (1 + R_3/R_4) = 1$ und $C_1 = C_2 = C$. Der Koeffizientenvergleich mit der Übertragungsfunktion (12.42) liefert in diesem Fall die Dimensionierung:

$$
R_1 = \frac{1}{\pi f_g C\, a_1}
\qquad
R_2 = \frac{a_1}{4\pi f_g C\, b_1}
$$

Eine Einschränkung für das Verhältnis der Kapazitäten gibt es hier nicht: Man erhält immer reelle Werte für die Widerstände. Als Beispiel soll ein Bessel-Hochpass mit einer Grenzfrequenz von $f_g = 1\,\mathrm{kHz}$ dimensioniert werden. Wenn man $C = 1\,\mathrm{nF}$ vorgibt, erhält man $R_1 = 234\,\mathrm{k\Omega}$ und $R_2 = 175\,\mathrm{k\Omega}$. Die resultierende Schaltung ist in Abb. 12.43 dargestellt.

Natürlich muss auch bei Hochpassfiltern innerhalb des genutzten Frequenzbereichs eine ausreichende Schleifenverstärkung vorliegen. Man kann dabei davon ausgehen, dass sich die Schaltungen für Frequenzen oberhalb der Grenzfrequenz wie Verstärker mit ohmscher Beschaltung verhalten und dieselbe obere Grenzfrequenz besitzen.

**Abb. 12.43.** Sallen-Key-Hochpass als Besselfilter für $f_g = 1\,\mathrm{kHz}$
<!-- page-import:0858:end -->
