# Sample-and-Hold Circuits

<!-- page-import:1081:start -->
1044  17. DA- und AD-Umsetzer

**Abb. 17.59.** Schematische Anordnung eines Abtast-Halte-Gliedes

## 17.4 Abtast-Halte-Glieder

### 17.4.1 Grundlagen

Abtast-Halte-Glieder dienen dazu den Augenblickswert einer Spannung zu speichern. Sie werden hauptsächlich bei AD-Umsetzern eingesetzt, um die Eingangsspannung während der Umsetzdauer konstant zu halten, weil sonst schwerwiegende Fehler bei der Umsetzung auftreten können. Gleichzeitig gewährleisten sie definierte und äquidistante Abtastaugenblicke, das ist eine wichtige Voraussetzung für eine Digitalisierung ohne Informationsverlust. In der Literatur werden die Abtast-Halteglieder meist als Sample-and-Hold (S&H) oder Track-and-Hold Schaltungen bezeichnet.

Das Kernstück eines Abtast-Haltegliedes ist der Speicherkondensator $C$ in Abb. 17.59. Zur Speicherung des Eingangssignals wird der Analogschalter $S$ geschlossen; dann lädt sich der Kondensator auf die Eingangsspannung auf und folgt ihr bis der Schalter geöffnet wird. Dieser Augenblick ist der Abtastzeitpunkt. Der Impedanzwandler am Eingang liefert den erforderlichen Ladestrom und verhindert eine kapazitive Belastung der Eingangsspannungsquelle. Bei Abtast-Haltegliedern für hohe Frequenzen, bei denen die Speicherkapazität nur wenige Pikofarad beträgt, verzichtet man meist auf diesen Impedanzwandler, weil dann Signalquellen mit einem Innenwiderstand von $50\ \Omega$ vorliegen, die durch derart kleine Kapazitäten nicht nennenswert beeinflusst werden. Ein Impedanzwandler am Ausgang ist aber in jedem Fall erforderlich damit der Speicherkondensator in der Hold-Phase nicht durch die Last entladen wird.

Die wichtigsten nichtidealen Eigenschaften eines Abtast-Halte-Gliedes sind in Abb. 17.60 eingezeichnet. Wenn der Schalter bei dem Kommando *Folgen* geschlossen wird, steigt die Ausgangsspannung nicht momentan auf den Wert der Eingangsspannung an, sondern nur mit einer bestimmten maximalen *Anstiegsgeschwindigkeit* (Slew Rate). Sie wird primär durch den maximalen Strom des Impedanzwandlers am Eingang und die Größe des Speicherkondensators bestimmt. Dann folgt ein Einschwingvorgang, dessen Dauer durch die Dämpfung des Impedanzwandlers und den Ein-Widerstand des Schalters bestimmt wird. Man definiert eine Einstellzeit $t_E$ (*Acquisition Time*) als die Zeit, die nach dem Übergang in den Folgebetrieb vergeht, bis die Ausgangsspannung mit vorgegebener Toleranz gleich der Eingangsspannung ist. Wenn die Aufladung des Speicherkondensators ausschließlich durch den Ein-Widerstand des Schalters $R_S$ bestimmt wird, lässt sich die Einstellzeit aus der Aufladefunktion eines $RC$-Gliedes und der geforderten Einstellgenauigkeit berechnen, und man erhält:

$$
t_E = R_S C \cdot
\begin{cases}
4{,}6 & \text{für } 1\% \\
6{,}9 & \text{für } 0{,}1\%
\end{cases}
$$

Sie wird also um so kürzer, je kleiner man $C$ wählt; aus diesem Grund wählt man bei hohen Frequenzen Speicherkondensatoren von nur wenigen Pikofarad.

Wenn der Schalter bei dem Kommando *Halten* geöffnet wird, dauert es einen Augenblick bis sich der Schalter öffnet. Diese Zeit wird als *Apertur-Zeit* $t_A$ (*Aperture Delay*)
<!-- page-import:1081:end -->

<!-- page-import:1082:start -->
17.4 Abtast-Halte-Glieder 1045

**Abb. 17.60.** Definition der Kenndaten eines Abtast-Halte-Gliedes. Eingetragen sind als Beispiel die typischen Daten des LF398 bei einem Haltekondensator von 1 nF.

bezeichnet. Sie ist meist nicht konstant, sondern schwankt etwas; häufig in Abhängigkeit vom jeweiligen Wert der Eingangsspannung. Diese Schwankungen werden als Apertur-Jitter $\Delta t_A$ bezeichnet.

Anschließend bleibt die Ausgangsspannung meist nicht auf dem gespeicherten Wert stehen, sondern es gibt einen kleinen Spannungssprung $\Delta U_a$ (Hold Step) mit nachfolgendem Einschwingvorgang. Er kommt daher, dass beim Ausschalten eine kleine Ladung über die Kapazität des Schalters $C_S$ vom Ansteuersignal in den Speicherkondensator $C$ gekoppelt wird. Der dabei auftretende Spannungssprung beträgt:

$$
\Delta U_a = \frac{C_S}{C}\,\Delta U_S
$$

Darin ist $\Delta U_S$ die Amplitude des Ansteuersignals. Die Störung wird also um so kleiner, je größer man $C$ wählt.

Eine weitere nichtideale Eigenschaft ist der Durchgriff (Feedthrough). Er kommt dadurch zustande, dass trotz geöffnetem Schalter die Eingangsspannung auf den Ausgang wirkt. Dieser Effekt wird hauptsächlich durch den kapazitiven Spannungsteiler verursacht, den die Kapazität des geöffneten Schalters mit dem Speicherkondensator bildet.

Die wichtigste Größe im Speicherzustand ist die Haltedrift (Droop). Sie wird hauptsächlich durch den Eingangsstrom des Impedanzwandlers am Ausgang und durch den Sperrstrom des Schalters bestimmt. Bei einem Entladestrom $I_L$ ergibt sich:

$$
\frac{\Delta U_a}{\Delta t} = \frac{I_L}{C}
$$

Um den Entladestrom klein zu halten, verwendet man für OV 2 einen Verstärker mit Feldeffekttransistoren.

Man sieht, dass alle Kenndaten im Haltezustand um so besser werden, je größer man $C$ wählt, während im Folgebetrieb kleine Werte von $C$ günstiger sind. Daher muss man je nach Anwendung einen Kompromiss schließen.
<!-- page-import:1082:end -->

<!-- page-import:1083:start -->
1046  17. DA- und AD-Umsetzer

**Abb. 17.61.** Abtast-Halteglied mit Transmission-Gate als Schalter

## 17.4.2 Transmission-Gate als Schalter

In CMOS-Schaltungen realisiert man Analogschalter vorzugsweise als Transmission-Gate (Abb. 6.34 auf S. 637). Sie eignen sich auch für den Einsatz in einem Abtast-Halteglied wie in Abb. 17.61 dargestellt. Wenn die Steuerspannung $U_{ST} = U_b$ ist, sind die Mos-Schalter leitend und der Kondensator wird auf die Eingangsspannung aufgeladen. In diesem Betriebszustand folgt die Ausgangsspannung der Eingangsspannung. Wenn man $U_{ST} = 0$ macht, sperren beide Mosfets und die Ladung auf dem Speicherkondensator wird gespeichert. In dieser Phase bleibt die Ausgangsspannung konstant auf dem Wert, den die Eingangsspannung zum Ausschaltzeitpunkt hatte.

Ein Problem stellt die Ladung dar, die beim Ausschalten vom Steuerstromkreis über die Gatekapazität auf den Speicherkondensator übertragen wird. Sie kann zu einem ausgeprägten Hold-Step führen, der in Abb. 17.59 eingezeichnet ist.

## 17.4.3 Dioden-Brücke als Schalter

Als schnelle Schalter im Nanosekunden-Bereich sind Diodenbrücken besonders gut geeignet. Wenn die beiden Schalter in Abb. 17.62 offen sind, werden die 4 Dioden der Brücke leitend und sie verbinden den Eingang mit dem Ausgang. Da durch jede Diode der Strom $\frac{1}{2} I$ fließt, beträgt ihr differentieller Widerstand

**Abb. 17.62.** Abtast-Halteglied mit Schottky-Dioden Brücke als Schalter  
für Eingangssignale $-2{,}5\ \mathrm{V} \leq U_e \leq +2{,}5\ \mathrm{V}$
<!-- page-import:1083:end -->

<!-- page-import:1084:start -->
17.4 Abtast-Halte-Glieder 1047

$$
r_D = \frac{U_T}{\frac{1}{2}I}\Big|_{I=1\,\mathrm{mA}} = \frac{25\,\mathrm{mV}}{\frac{1}{2}\cdot 1\,\mathrm{mA}} = 50\,\Omega
$$

Diesen Widerstand besitzt auch die leitende Brücke, da jeweils 2 Dioden in Reihe geschaltet sind und der obere und der untere Brückenzweig parallel liegen. Wenn die Dioden gleich sind, tritt dabei kein Potentialversatz zwischen Eingang und Ausgang auf; es wird also $U_a = U_e$. Aus diesem Grund verwendet man ein Schottky-Dioden Quartett.

Wenn man die beiden Schalter schließt, liegen die Anoden der oberen Dioden auf $-2{,}5$ V und die Kathoden der unteren auf $+2{,}5$ V. Dadurch sperren die 4 Dioden. In dieser Phase ist es wichtig, dass die oberen Anoden und die unteren Kathoden auf einem konstanten Potential liegen, um eine kapazitive Kopplung über die Dioden vom Eingang zum Ausgang zu vermeiden. Wenn man die Ströme einfach abschalten würde, läge die Diodenkapazität in Reihe mit der Speicherkapazität. Bei einer Sperrschichtkapazität von 1 pF und einer Speicherkapazität von 10 pF würde sonst in der Sperrphase 1/10 des Eingangssignals an den Ausgang übertragen; das ergäbe einen Feedthrough von lediglich $-20$ dB. Bei Schaltungen für hohe Frequenzen verzichtet man häufig auf den Impedanzwandler OV1 am Eingang, um die Bandbreite nicht zu beschränken. Wenn das Eingangssignal aus einer 50 $\Omega$-Quelle stammt, stört die Belastung durch einen Speicherkondensator von z.B. $C = 10$ pF auch nicht.
<!-- page-import:1084:end -->

<!-- page-import:1085:start -->
[unclear]
<!-- page-import:1085:end -->
