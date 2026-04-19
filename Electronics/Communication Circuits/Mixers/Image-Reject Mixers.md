# Image-Reject Mixers

<!-- page-import:1534:start -->
25.7 Mischer mit Spiegelfrequenz-Unterdrückung 1497

a Schaltbild

b RC-Phasenschieber

Abb. 25.97. Abwärtsmischer mit Spiegelfrequenz-Unterdrückung und $\pm45^\circ$-RC-Phasenschiebern. Die Grenzfrequenz $f_g$ muss mit der jeweiligen Signalfrequenz übereinstimmen: $f_g = f_{LO}$ im LO-Kreis und $f_g = f_{ZF}$ im ZF-Kreis.

## 25.7.1 Phasenschieber

Praktische Phasenschieber werden in der Regel nicht als $90^\circ$-Phasenschieber in einem Pfad ausgeführt; man verwendet statt dessen zwei Phasenschieber, deren Phase sich um $90^\circ$ unterscheidet. Da die Spiegelfrequenz-Unterdrückung auf einer Auslöschung gleich großer Anteile beruht, muss man nicht nur die relative Phasenverschiebung von $90^\circ$ einhalten, sondern auch sicherstellen, dass die Amplituden gleich sind.

### 25.7.1.1 RC-Phasenschieber

Abbildung 25.97 zeigt die einfachste Ausführung mit $\pm45^\circ$-RC-Phasenschiebern, deren Grenzfrequenz

$$
f_g = \frac{1}{2\pi\,RC}
$$

mit der jeweiligen Signalfrequenz übereinstimmen muss: $f_g = f_{LO}$ im LO-Kreis und $f_g = f_{ZF}$ im ZF-Kreis. Die Phasenschieber arbeiten in dieser Form jedoch nur korrekt, wenn sie mit einer niederohmigen Signalquelle ($Z_g \approx 0$) und einer hochohmigen Last ($Z_L \approx \infty$) betrieben werden; dazu muss man vor und nach den Phasenschiebern Impedanzwandler einsetzen. Alternativ kann man die Phasenschieber so dimensionieren, dass man unter Berücksichtigung der Quellenimpedanz $Z_g$ und der Lastimpedanz $Z_L$ eine relative Phasenverschiebung von $90^\circ$ und gleiche Amplituden erhält. Im LO-Kreis sind die Eingänge der Phasenschieber verbunden; dadurch sind die Eingangssignale unabhängig von der Quellenimpedanz $Z_g$ (= Quellenimpedanz der LO-Signalquelle) identisch und man muss nur die Lastimpedanz $Z_L$ (= Eingangsimpedanz der Mischer am LO-Eingang) berücksichtigen.

### 25.7.1.2 RC-Polyphasen-Filter

In integrierten Schaltungen werden anstelle der RC-Phasenschieber häufig RC-Polyphasen-Filter eingesetzt. Abbildung 25.98 zeigt eine einstufige Ausführung für die Frequenz:

$$
f_1 = \frac{1}{2\pi\,R_1C_1}
$$

Bei Ansteuerung mit der Spannungsquelle $U_{g1}$ haben die Ausgangsspannungen die in der linken Spalte gezeigten Phasen. Die Lastimpedanz $Z_L$ wirkt sich nur auf die Grundphase $\varphi_0$ aus und hat keinen Einfluss auf die Phasenverschiebungen zwischen den Ausgängen.
<!-- page-import:1534:end -->

<!-- page-import:1535:start -->
1498  25. Mischer

| $\angle U_n/U_{g1}$ | $\angle U_n/U_{g2}$ |
|---|---|
| $\varphi_0$ | $\varphi_0 + 270^\circ$ |
| $\varphi_0 + 90^\circ$ | $\varphi_0$ |
| $\varphi_0 + 180^\circ$ | $\varphi_0 + 90^\circ$ |
| $\varphi_0 + 270^\circ$ | $\varphi_0 + 180^\circ$ |

**Abb. 25.98.** Einstufiges RC-Polyphasen-Filter

Bei Ansteuerung mit der Spannungsquelle $U_{g2}$ erhält man die Phasen in der rechten Spalte. Die Grundphase $\varphi_0$ hängt zwar von der Frequenz ab, die Phasenverschiebungen zwischen den Ausgängen sind jedoch frequenzunabhängig, d.h. bezüglich der Phasenverhältnisse ist das Filter grundsätzlich breitbandig. Die Amplituden an den Ausgängen 1 und 3 sowie 2 und 4 sind ebenfalls für alle Frequenzen gleich; die für den Mischer mit Spiegelfrequenz-Unterdrückung wichtige Übereinstimmung aller Amplituden ist aber nur bei der Frequenz $f_1$ gegeben. Aufgrund der Phasenverschiebung von $90^\circ$ zwischen den Anteilen der beiden Spannungsquellen kann man das Filter nicht nur zur Phasenverschiebung, sondern auch zur Addition der beiden Quellensignale verwenden.

Man kann die Bandbreite des Filters erhöhen, indem man mehrere Stufen mit verschiedenen Frequenzen in Reihe schaltet, siehe Abb. 25.99. Die Phasenverschiebungen zwischen den Ausgängen sind auch hier frequenzunabhängig, so dass man die Frequenzen der einzelnen Stufen nur mit Hinblick auf die Amplitudenverhältnisse optimieren muss.

Abbildung 25.100 zeigt einen Abwärtsmischer mit Spiegelfrequenz-Unterdrückung mit zwei aktiven Doppel-Gegentaktmischern (Gilbert-Mischer) und zwei einstufigen RC-Polyphasen-Filtern. Die Ausgangsströme der beiden Gilbert-Mischer werden über das ZF-

**Abb. 25.99.** Mehrstufiges RC-Polyphasen-Filter
<!-- page-import:1535:end -->

<!-- page-import:1536:start -->
25.7 Mischer mit Spiegelfrequenz-Unterdrückung 1499

LO-Poly-
phasen-
Filter

$f_{LO}=\dfrac{1}{2\pi R_2 C_2}$

$U_{LO}$

Buffer

$R_2$

$C_2$

$u_{HF}$

$R_1$

ZF-Polyphasen-Filter

$f_{ZF}=\dfrac{1}{2\pi R_1 C_1}$

$C_1$

Puffer

$u_{ZF}$

Gilbert-
Mischer 1

Band-Um-
schaltung

Gilbert-
Mischer 2

**Abb. 25.100.** Abwärtsmischer mit Spiegelfrequenz-Unterdrückung mit zwei aktiven Doppel-Gegentaktmischern (Gilbert-Mischer) und zwei einstufigen RC-Polyphasen-Filtern. Mit der Band-Umschaltung wird zwischen dem Oberband und dem Unterband umgeschaltet.

Polyphasen-Filter $R_1, C_1$ addiert. Der rechte Gilbert-Mischer verfügt über zwei schaltbare HF-Eingangsstufen, mit denen die Polarität des HF-Signals umgeschaltet werden kann; dadurch erfolgt eine Band-Umschaltung zwischen dem Oberband ($f_{HF}=f_{LO}+f_{ZF}$) und dem Unterband ($f_{HF}=f_{LO}-f_{ZF}$). Das LO-Polyphasen-Filter erzeugt die phasenverschobenen LO-Signale für die beiden Gilbert-Mischer. Als Puffer werden Impedanzwandler mit Kollektorschaltungen verwendet.

### 25.7.1.3 Hybride als Phasenschieber

Zur Phasenverschiebung kann man auch die im Abschnitt 23.4.2 beschriebenen 90°-Hybride mit LC-Elementen oder Streifenleitungen einsetzen; Abb. 25.101 zeigt eine typische Ausführung mit diskreten Komponenten. Alle Komponenten sind allseitig an den Wellenwiderstand $Z_W$ der Leitungen angepasst; dazu muss die Aufteilung des HF-Signals auf die beiden Mischer mit einem Leistungsteiler erfolgen, z.B. mit dem in Abb. 23.34 auf
<!-- page-import:1536:end -->

<!-- page-import:1537:start -->
1500  25. Mischer

Abb. 25.101. Abwärtsmischer mit Spiegelfrequenz-Unterdrückung mit zwei passiven Mischern und zwei 90°-Hybriden

Seite 1316 gezeigten Wilkinson-Teiler. Man kann den LO- und den HF-Eingang vertauschen, ohne dass sich die Funktion ändert, siehe Abb. 25.96.

## 25.7.2 Spiegelfrequenz-Unterdrückung

Durch Unsymmetrien in den Amplituden und Phasen der beiden Pfade und durch die Frequenzabhängigkeit der Amplituden ist die *Spiegelfrequenz-Unterdrückung* (*image-rejection ratio, IRR*) in der Praxis begrenzt; es gilt:

$$
IRR \;=\; \frac{\text{Leistung des ZF-Anteils aus dem HF-Band}}{\text{Leistung des ZF-Anteils aus dem Spiegelfrequenzband}}
$$

Beide Leistungen werden an dem Ausgang gemessen, an dem der ZF-Anteil aus dem HF-Band entnommen wird. Innerhalb integrierter Schaltungen wird manchmal auch das Verhältnis der Amplituden verwendet; dann erhält man wegen $P \sim U^2$ den Wert $IRR' = \sqrt{IRR}$. In Dezibel sind die Werte identisch:

$$
IRR\,[\mathrm{dB}] \;=\; 10\,\log IRR \;=\; 20\,\log IRR'
$$

Man kann die Spiegelfrequenz-Unterdrückung aus dem Amplituden- und den Phasenfehler der beiden Pfade berechnen. Wir kürzen die Berechnung durch eine einfache Überlegung ab: bei der Subtraktion bzw. Addition der Pfade addieren sich die Anteile aus dem HF-Band gemäß $1/2 + 1/2 = 1$, während sich die Anteile aus dem Spiegelfrequenzband gemäß $1/2 - 1/2 = 0$ auslöschen. Nimmt man nun an, dass die Pfade die Betragsverstärkungen $1$ und $k \neq 1$ besitzen und zwischen beiden Pfaden ein Phasenfehler $\varphi$ auftritt, erhält man statt dessen

$$
a \;=\; \frac{1}{2} + \frac{1}{2}\,k e^{j\varphi}
,\qquad
b \;=\; \frac{1}{2} - \frac{1}{2}\,k e^{j\varphi}
$$

und daraus die Spiegelfrequenz-Unterdrückung:

$$
IRR \;=\; \frac{|a|^2}{|b|^2}
\;=\;
\left|\frac{1 + k e^{j\varphi}}{1 - k e^{j\varphi}}\right|^2
\;=\;
\frac{1 + k^2 + 2k\cos\varphi}{1 + k^2 - 2k\cos\varphi}
$$

Wegen $\cos\varphi = \cos(-\varphi)$ ist das Vorzeichen des Phasenfehlers nicht relevant. Der Wert ändert sich auch nicht, wenn man anstelle von $k$ den Kehrwert $1/k$ einsetzt. Für $k = 1$ und
<!-- page-import:1537:end -->

<!-- page-import:1538:start -->
25.7 Mischer mit Spiegelfrequenz-Unterdrückung 1501

Abb. 25.102.  
Spiegelfrequenz-Unterdrückung $IRR$ in Abhängigkeit vom Amplitudenfehler $k$ und vom Phasenfehler $\varphi$

$\varphi = 0$ erhält man die ideale Spiegelfrequenz-Unterdrückung $IRR = \infty$. Abbildung 25.102 zeigt die Abhängigkeit der Spiegelfrequenz-Unterdrückung von den beiden Fehlergrößen; dabei ist der Amplitudenfehler in Dezibel angegeben:

$$
k\ [\mathrm{dB}] \;=\; 20 \log k
$$

Wegen der Symmetrie-Eigenschaften muss nur der Bereich $k > 1 = 0\,\mathrm{dB}$ und $\varphi > 0$ dargestellt werden.

Man erkennt, dass eine hohe Spiegelfrequenz-Unterdrückung nur mit hochgenauen Amplituden- und Phasenbeziehungen erreicht werden kann. Bei einem Phasenfehler von nur einem Grad kann man nur noch $IRR \approx 40\,\mathrm{dB}$ erzielen; deshalb ist in den meisten Fällen ein Abgleich erforderlich. Aber auch mit Abgleich sind Mischer mit Spiegelfrequenz-Unterdrückung kein Ersatz für die Spiegelfrequenz-Filter in Empfängern, sondern können nur die Anforderungen an diese Filter reduzieren.
<!-- page-import:1538:end -->

<!-- page-import:1539:start -->
[This page appears to be blank.]
<!-- page-import:1539:end -->
