# Control of Nonlinear Systems

<!-- page-import:0909:start -->
872 13. Regler

**Abb. 13.14.** Vergleich der Anstiegszeiten von P-, PI- und PID-Regler mit vergrößerter Zeitauflösung

Der Vorteil ist hier besonders groß, weil die Beispielstrecke gutmütig ist. Wenn es Rauschen im Regelkreis gibt, wird es durch den D-Zusatz häufig untragbar verstärkt. Dann muss man sich mit einer geringeren Verstärkungsanhebung durch den D-Zusatz begnügen. Ein anderes Problem besteht darin, dass der D-Zusatz wegen der hohen Verstärkung – im Beispiel ist $A_D = 200$ – große Ausgangsamplituden aufweist, die leicht zu Übersteuerungen führen. Eine Begrenzung des D-Signals durch Übersteuerung darf nicht auftreten, weil der Regler sonst nichtlinear arbeitet. Um das zu verhindern, sollte man dafür sorgen, dass keine großen Sprünge in der Führungsgröße (dem Sollwert) auftreten. Dazu kann man die Anstiegsgeschwindigkeit mit einem Slewrate-Limiter begrenzen, der in Abschnitt 13.3.2 beschrieben wird.

Wenn man einen PID-Regler experimentell optimieren möchte, hat man das Problem, dass man die drei Parameter für P-, I- und D-Teil gleichzeitig ändern muss. In diesem Fall ist es günstiger, einen Verstärker hinter den PID-Regler zu schalten, mit dessen Verstärkung die 3 Parameter gleichzeitig geändert werden. Diese Variante ist in Abb. 13.15 dargestellt. Der hier gezeigte Regler besitzt genau dieselben Daten wie der in Abb. 13.11. Hier lässt

$A_D = \dfrac{0{,}1\,s_n}{1 + 0{,}01\,s_n}$

$A_I = \dfrac{1}{s_n}$

$A_P = 1$

$A_{PID}$

20

$A_S = \dfrac{1}{1 + s_n}\ \dfrac{1}{1 + 0{,}1\,s_n}\ \dfrac{1}{1 + 0{,}01\,s_n}$

Sollwert

$W$

$E$

PID-Regler

Verstärker

Beispielstrecke

Istwert

$Y$

$U$

$$A_{Regler} = \frac{U}{E} = A_{PID}\left(1 + \frac{1}{\tau_n s_n} + \frac{\tau_v s_n}{1 + t_b s_n}\right) = 20\left(1 + \frac{1}{s_n} + \frac{0{,}1\,s_n}{1 + 0{,}01\,s_n}\right)$$

**Abb. 13.15.** Gemeinsame Modifikation aller Regler-Einstellungen mit $A_{PID}$.
$\tau_n =$ Nachstellzeit, $\tau_v =$ Vorhaltezeit, $t_b =$ Begrenzungszeit
<!-- page-import:0909:end -->

<!-- page-import:0915:start -->
878 13. Regler

$$
A(s_n)=\frac{U_a}{U_e}=\frac{d_0+d_1\tau\omega_{g1}s_n+d_2\tau^2\omega_{g1}^2 s_n^2}{c_0+c_1\tau\omega_{g1}s_n+c_2\tau^2\omega_{g1}^2 s_n^2}
\qquad \text{mit} \qquad \tau = RC
$$

**Abb. 13.25.** Kompensator-Realisierung als Universalfilter 2. Ordnung mit unabhängig einstellbaren Koeffizienten. Das Dimensionierungsbeispiel realisiert (13.9).

$$
c_0=d_0=1 \qquad \Rightarrow \qquad R/c_0=R/d_0=100\,\text{k}\Omega
$$

$$
d_1\tau \omega_g = 0{,}003 \qquad \Rightarrow \qquad R/d_1=330\,\text{k}\Omega
$$

$$
c_1\tau \omega_g = 0{,}02 \qquad \Rightarrow \qquad R/c_1=50\,\text{k}\Omega
$$

$$
d_2\tau \omega_g = 0{,}001 \qquad \Rightarrow \qquad R/d_2=10\,\text{k}\Omega
$$

$$
c_2\tau \omega_g = 0{,}0001 \qquad \Rightarrow \qquad R/c_2=100\,\text{k}\Omega
$$

Dieses Filter besitzt genau den Frequenzgang von (13.9), der in Abb. 13.20 dargestellt ist.

## 13.3 Regelung nichtlinearer Strecken

### 13.3.1 Statische Nichtlinearität

Bisher sind wir davon ausgegangen, dass die Streckengleichung

$$
Y = A_S U
$$

lautet, d.h., dass die Regelstrecke linear ist. Bei vielen Strecken ist diese Bedingung jedoch nicht erfüllt. Abb. 13.26 zeigt ein Beispiel für eine derartige Strecke. Es gilt demnach allgemein:

$$
Y = f(U)
$$

Für kleine Aussteuerung um einen gegebenen Arbeitspunkt $U_0$ kann man jedoch jede Strecke als linear betrachten, wenn ihre Kennlinie in der Umgebung dieses Arbeitspunktes stetig und differenzierbar ist. In diesem Fall verwendet man die differentielle Größe:

$$
A_S = \frac{\mathrm{d}Y}{\mathrm{d}U}
$$

Für einen festen Arbeitspunkt kann man den Regler wie beschrieben optimieren. Wenn jedoch größere Änderungen der Führungsgröße $W$ zugelassen werden, treten Schwierigkeiten auf: Da die differentielle Streckenverstärkung $A_S$ vom Arbeitspunkt abhängig ist,
<!-- page-import:0915:end -->

<!-- page-import:0916:start -->
13.3 Regelung nichtlinearer Strecken 879

Abb. 13.26.  
Vergleich einer nichtlinearen mit einer linearen Strecke.  
Beispiel: $Y = 1\,\mathrm{V}\,\left(e^{U/1\,\mathrm{V}} - 1\right)$

ändert sich die Schleifenverstärkung und damit auch das Einschwingverhalten in Abhängigkeit vom Arbeitspunkt. Dies erkennt man deutlich an der Sprungantwort in Abb. 13.27. Wenn man den Regler für einen Arbeitspunkt richtig dimensioniert, muss man in anderen Arbeitspunkten eine starke Verschlechterung des Einschwingverhaltens in Kauf nehmen.

Dieses Problem lässt sich dadurch beseitigen, dass man die Linearität des Regelkreises durch ein Funktionsnetzwerkes mit der inversen Funktion im Regler herstellt. Das entsprechende Blockschaltbild zeigt Abb. 13.28. Wenn man mit dem Funktionsnetzwerk die Funktion $U = f^{-1}(E)$ bildet, lässt sich die Nichtlinearität der Strecke annullieren und man erhält einen linearen Regelkreis:

$$
Y = f(U) = f[f^{-1}(U')] = U'
$$

Bei dem Beispiel einer Regelstrecke mit exponentiellem Verlauf in Abb. 13.26

$$
Y = 1\,\mathrm{V}\,\left(e^{U/1\,\mathrm{V}} - 1\right)
$$

benötigt man als Funktionsnetzwerk zur Linearisierung einen Logarithmierer, der den Ausdruck

$$
U = 1\,\mathrm{V}\,\ln\left(\frac{U'}{1\,\mathrm{V}} + 1\right)
$$

bildet. Auf diese Weise wird die Schleifenverstärkung im Regelkreis konstant gehalten und die Regelstrecke lässt sich in jedem Arbeitspunkt optimal regeln.

Abb. 13.27. Abhängigkeit der Sprungantwort von der Verstärkung der Strecke bei verschiedenen Arbeitspunkten. Links: Optimiert für $A_S = 1$; Rechts: Optimiert für $A_S = 3$
<!-- page-import:0916:end -->

<!-- page-import:0917:start -->
880 13. Regler

**Abb. 13.28.** Linearisierung einer nichtlinearen Strecke

## 13.3.2 Dynamische Nichtlinearität

Eine andere Form der Nichtlinearität ergibt sich in einem Regelkreis leicht durch Übersteuerung. Die Ursache dafür ist die hohe Verstärkung im Regler. In dem Beispiel in Abb. 13.15 besitzt der Verstärker eine Verstärkung von $A_{PID} = 20$, die zusätzliche Verstärkung des D-Anteils beträgt für hohe Frequenzen 10. Die Konsequenz ist, dass die Stellgröße bei einem Sprung der Führungsgröße von 1 V auf 200 V springt. Dies erkennt man an der Stellgröße $U$ in Abb. 13.29. Normale Verstärker werden dadurch extrem übersteuert, die Sprungantwort der Regelstrecke wird dadurch stark beeinträchtigt.

Das Problem lässt sich dadurch beseitigen, dass man schnelle Änderung der Führungsgröße verhindert. In Abb. 13.29 ist zum Vergleich der Fall für eine Anstiegsgeschwindigkeit von 5 V/sec dargestellt. Man sieht, dass die Stellgröße in diesem Fall $U = 10\,\mathrm{V}$ nicht überschreitet.

Zur Begrenzung der Anstiegsgeschwindigkeit könnte man im Prinzip einen Tiefpass verwenden. Dadurch würde sie jedoch von abhängig von der Amplitude des Sprungs. Eine bessere Möglichkeit zeigt der Slewrate Limiter in Abb. 13.30. Wenn man hier einen Spannungssprung auf den Eingang gibt, geht der Verstärker OV 1 an die Aussteuerungsgrenze $U_{\max}$. Dadurch steigt die Ausgangsspannung von OV 2 mit der Geschwindigkeit

$$
\frac{\mathrm{d}U_a}{\mathrm{d}t}=\frac{U_{\max}}{RC}=\frac{10\,\mathrm{V}}{2\,\mathrm{sec}}=\frac{5\,\mathrm{V}}{\mathrm{sec}}
$$

**Abb. 13.29.** Auswirkung der Führungsgröße auf die Signale im Regelkreis. Stellgröße $U$, Regelgröße $Y$ bei Anstiegsgeschwindigkeit der Führungsgröße $W$ von $1\,\mathrm{V}/\mu\mathrm{sec}$ links und $5\,\mathrm{V}/\mathrm{sec}$ rechts
<!-- page-import:0917:end -->

<!-- page-import:0918:start -->
13.3 Regelung nichtlinearer Strecken 881

Stationäre Ausgangsspannung:
$U_a = -U_e$

Maximale Anstiegsgeschwindigkeit:
$\dfrac{\mathrm{d}U_a}{\mathrm{d}t} = \dfrac{U_{max}}{RC} = \dfrac{5\ \mathrm{V}}{\mathrm{sec}}$

**Abb. 13.30.** Schaltung zur Begrenzung der Anstiegsgeschwindigkeit (slewrate limiter.)

an, bis sie den durch die Über-alles-Gegenkopplung bestimmten Wert $-U_e$ erreicht. Eine Rechteck-Spannung wird also in die gewünschte Trapezspannung verwandelt. Ist die Anstiegsgeschwindigkeit der Eingangsspannung kleiner als der eingestellte Grenzwert, wird das Signal unverändert übertragen. Die Kleinsignalbandbreite wird also im Gegensatz zum Tiefpass nicht beeinflusst. Die Widerstände $R_2$ und $R_3$ begrenzen die Verstärkung von OV1, um die Stabilität der Schaltung zu gewährleisten.
<!-- page-import:0918:end -->

<!-- page-import:0919:start -->
[unclear]
<!-- page-import:0919:end -->
