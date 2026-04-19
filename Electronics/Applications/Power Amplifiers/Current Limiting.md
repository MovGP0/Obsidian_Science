# Current Limiting

<!-- page-import:0946:start -->
15.6 Strombegrenzung 909

$I_{a\ \max}=\pm 1{,}4\,\mathrm{V}/R_{1,2}$

**Abb. 15.16.**  
Strombegrenzung mit Dioden

$I_{a\ \max}=\pm 0{,}7\,\mathrm{V}/R_{1,2}$

**Abb. 15.17.**  
Strombegrenzung mit Transistoren

Drain-Ausgang, der hier vorliegt, aber ein niedriger. Eine weitere Verringerung des Ausgangswiderstands lässt sich erreichen, indem man einen Operationsverstärker vorschaltet und eine zusätzliche über-alles-Gegenkopplung vorsieht.

## 15.6 Strombegrenzung

Leistungsverstärker können infolge ihres niedrigen Ausgangswiderstandes leicht überlastet und damit zerstört werden. Schmelzsicherungen kommen nicht in Betracht, weil sie zu langsam sind; die Transistoren brennen schneller durch. Deshalb ist es sinnvoll, den Ausgangsstrom elektronisch auf einen bestimmten Maximalwert zu begrenzen. Die verschiedenen Möglichkeiten sollen am Beispiel der einfachen komplementären Emitterfolger von Abb. 15.9 erläutert werden. Eine besonders einfache Schaltung ist in Abb. 15.16 dargestellt. Die Begrenzung setzt ein, wenn die Mehrfachdiode $D_3$ bzw. $D_4$ leitend wird, denn in diesem Fall kann der Spannungsabfall an $R_1$ bzw. $R_2$ nicht weiter zunehmen. Der maximale Ausgangsstrom beträgt damit:

$$
I_{a\,\max}^{+}=\frac{U_{D3}-U_{BE1}}{R_1}=\frac{0{,}7\,\mathrm{V}}{R_1}(n_3-1),
$$

$$
I_{a\,\max}^{-}=-\frac{U_{D4}-|U_{BE2}|}{R_2}=-\frac{0{,}7\,\mathrm{V}}{R_2}(n_4-1).
$$

Dabei ist $n_3$ bzw. $n_4$ die Anzahl der für $D_3$ bzw. $D_4$ eingesetzten Dioden.

Eine bessere Möglichkeit zur Strombegrenzung zeigt Abb. 15.17. Überschreitet der Spannungsabfall an $R_1$ bzw. $R_2$ einen Wert von ca. $0{,}7\,\mathrm{V}$, wird der Transistor $T_3$ bzw. $T_4$ leitend. Dadurch wird ein weiteres Ansteigen des Basisstroms von $T_1$ bzw. $T_2$ verhindert. Durch diese Regelung wird der Ausgangsstrom auf den Maximalwert

$$
I_{a\,\max}^{+}\approx\frac{0{,}7\,\mathrm{V}}{R_1}
\qquad\text{bzw.}\qquad
I_{a\,\max}^{-}\approx\frac{0{,}7\,\mathrm{V}}{R_2}
$$

begrenzt. Vorteilhaf ist, dass hier nicht die unbekannte Basis-Emitter-Spannung der Leistungstransistoren eingeht, sondern nur die Basis-Emitter-Spannung der Begrenzer-
<!-- page-import:0946:end -->

<!-- page-import:0947:start -->
910 15. Leistungsverstärker

$|I_{a\ \max}| = \dfrac{0{,}7\,\mathrm{V}}{R_{1,2}} + \dfrac{R_{3,4}}{R_{5,6}} \cdot \dfrac{U_a}{R_{1,2}}$

**Abb. 15.18.**  
Spannungsabhängige Strombegrenzung

**Abb. 15.19.**  
Verlauf der Stromgrenzen und des  
Ausgangsstroms bei ohmscher Last

Transistoren. Die Widerstände $R_3$ und $R_4$ dienen zum Schutz dieser Transistoren vor zu hohen Basisstromspitzen.

Im Kurzschlussfall fließt der Strom $I_{a\ \max}$ bei positiven Eingangsspannungen durch $T_1$ bei negativen durch $T_2$. Die Verlustleistung in den Endstufentransistoren beträgt damit:

$$
P_{T1} = P_{T2} \approx \frac{1}{2} V_b I_{a\ \max}
$$

Wie der Vergleich mit Abschnitt 15.2 zeigt, ist dies das Fünffache der Verlustleistung des Normalbetriebs. Dafür muss man aber die Leistungstransistoren und die Kühlkörper dimensionieren, um die Schaltungen in Abb. 15.16 und 15.17 wirklich kurzschlussfest zu machen.

#### 15.6.0.1 Spannungsabhängige Strombegrenzung

Die für den Kurzschlussschutz erforderliche Überdimensionierung der Endstufe lässt sich dann umgehen, wenn nur ohmsche Verbraucher mit einem definierten Widerstand $R_L$ zugelassen werden. Dann kann man davon ausgehen, dass bei kleinen Ausgangsspannungen auch nur kleine Ausgangsströme fließen. Die Strombegrenzung muss dann nicht auf den Maximalstrom $I_{a\ \max} = U_{a\ \max}/R_L$ eingestellt werden, sondern kann den Ausgangsstrom auf den Wert $I_a = U_a/R_L$ begrenzen, also abhängig von der Ausgangsspannung. Der Maximalstrom im Kurzschlussfall ($U_a = 0$) kann dann entsprechend klein gewählt werden.

Um die Stromgrenze von der Ausgangsspannung abhängig zu machen, gibt man den Transistoren $T_3$ und $T_4$ in Abb. 15.18 eine Vorspannung, die mit zunehmender Ausgangsspannung größer wird. Dazu dienen die Widerstände $R_5$ und $R_6$, die groß gegenüber $R_3$ und [unclear]
<!-- page-import:0947:end -->
