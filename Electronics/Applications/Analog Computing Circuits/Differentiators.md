# Differentiators

<!-- page-import:0788:start -->
10.5 Differentiatoren 751

**Abb. 10.16.**  
Differentiator

*Ausgangsspannung:* $U_a = -RC \dfrac{dU_e}{dt}$

dern bei einem konstanten Wert bleibt. In diesem Frequenzbereich sind Integratoren mit CC-Operationsverstärkern viel günstiger.

## 10.5 Differentiatoren

### 10.5.1 Prinzipschaltung

Vertauscht man bei dem Integrator in Abb. 10.6 Widerstand und Kondensator, erhält man den Differentiator in Abb. 10.16. Die Anwendung der Knotenregel auf den Summationspunkt liefert die Beziehung:

$$
C \frac{dU_e}{dt} + \frac{U_a}{R} = 0,
$$

$$
U_a = -RC \frac{dU_e}{dt}
$$

(10.11)

Für sinusförmige Wechselspannungen $u_e = \hat{U}_e \sin \omega t$ erhalten wir damit die Ausgangsspannung:

$$
u_a = -\omega RC\, \hat{U}_e \cos \omega t
$$

Für das Verhältnis der Amplituden folgt daraus:

$$
\frac{\hat{U}_a}{\hat{U}_e} = |A| = \omega RC
$$

(10.12)

Trägt man den Frequenzgang der Verstärkung doppelt-logarithmisch auf, erhält man eine Gerade mit der Steigung +6 dB/Oktave. Allgemein bezeichnet man eine Schaltung in dem Frequenzbereich als Differentiator, in dem ihre Frequenzgangkurve mit 6 dB/Oktave steigt.

Das Verhalten im Frequenzbereich lässt sich auch direkt mit Hilfe der komplexen Rechnung ermitteln:

$$
A = \frac{U_a}{U_e} = -\frac{R}{Z_C} = -s\,RC
$$

(10.13)

Daraus folgt

$$
|A| = \omega RC
$$

in Übereinstimmung mit Gl. (10.12).

### 10.5.2 Praktische Realisierung

Die praktische Realisierung der Differentiatorschaltung in Abb. 10.16 bereitet gewisse Schwierigkeiten, da eine große Schwingneigung besteht. Die Ursache liegt darin begründet, dass das Gegenkopplungsnetzwerk bei höheren Frequenzen eine Phasennacheilung von 90° verursacht:
<!-- page-import:0788:end -->

<!-- page-import:0789:start -->
752  10. Analogrechenschaltungen

**Abb. 10.17.**  
Praktische Ausführung eines Differentiators

*Ausgangsspannung:*

$$
U_a = -RC\,\frac{dU_e}{dt}
\qquad \text{für } f \ll \frac{1}{2\pi R_1 C}
$$

$$
k \doteq \frac{1}{1 + s\,RC}
\qquad\qquad\qquad\qquad\qquad\qquad\qquad (10.14)
$$

Sie addiert sich zur Phasennacheilung des Operationsverstärkers, die im günstigsten Fall selbst schon $90^\circ$ beträgt. Die verbleibende Phasenreserve ist Null, die Schaltung also instabil. Abhilfe lässt sich dadurch schaffen, dass man die Phasenverschiebung des Gegenkopplungsnetzwerkes bei hohen Frequenzen reduziert, indem man mit dem Differentiationskondensator wie in Abb. 10.17 einen Widerstand $R_1$ in Reihe schaltet. Dadurch muss sich der ausnutzbare Frequenzbereich nicht notwendigerweise reduzieren, da der Differentiator bei höheren Frequenzen wegen abnehmender Schleifenverstärkung ohnehin nicht mehr richtig arbeitet.

Als Grenzfrequenz $f_1$ für das RC-Glied $R_1\,C$ wählt man zweckmäßigerweise den Wert, bei dem die Schleifenverstärkung gleich Eins wird. Dabei geht man zunächst von einem universell korrigierten Verstärker aus, dessen Amplitudenfrequenzgang bei dem Beispiel in Abb. 10.18 gestrichelt eingezeichnet ist. Dann beträgt die Phasenreserve bei der Frequenz $f_1$ ca. $45^\circ$. Da der Verstärker in der Nähe dieser Frequenz nicht voll gegengekoppelt ist, kann man nun durch Verkleinerung der Korrekturkapazität $C_k$ eine Vergrößerung der Phasenreserve bis zum aperiodischen Grenzfall erzielen.

Zur experimentellen Optimierung der Korrektur-Kapazität gibt man eine Dreieckspannung in den Differentiator und reduziert $C_k$ soweit, bis die rechteckförmige Ausgangsspannung optimal gedämpft ist.

## 10.5.3 Differentiator mit hohem Eingangswiderstand

Die Tatsache, dass die Eingangsimpedanz des beschriebenen Differentiators kapazitives Verhalten aufweist, kann in manchen Fällen Schwierigkeiten bereiten. Wenn z.B. eine Ope-

*Grenzfrequenz:* $f_1 = \sqrt{f_T/2\pi\tau}$ mit $\tau = RC$

**Abb. 10.18.** Beispiel für den Frequenzgang der Schleifenverstärkung
<!-- page-import:0789:end -->
