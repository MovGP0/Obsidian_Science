# Bipolar Coefficient Element

<!-- page-import:0585:start -->
548 5. Operationsverstärker

**Abb. 5.56.** Operationsverstärker mit symmetrischen Ausgängen. Prinzip der Gleichtaktregelung am Ausgang.

Die Ausgangsspannungen ändern sich symmetrisch: Wenn die eine Ausgangsspannung steigt, sinkt die andere um denselben Betrag. Die überlagerte Gleichspannung, $U_{Gla} = (U_{a1} + U_{a2})/2$, die als Gleichtaktspannung am Ausgang bezeichnet wird, steht jedoch nicht fest. Aus diesem Grund ist eine zusätzliche Gleichtaktspannungsregelung erforderlich, die wir noch beschreiben werden.

Wenn man einen Operationsverstärker mit symmetrischen Ausgängen benötigt, setzt man aber nicht zwei separate Verstärker ein, sondern einen Verstärker mit symmetrischen Ausgängen wie in Abb. 5.55b. Die Schaltung ist eng verwandt mit dem normalen Subtrahierer in Abb. 10.3 auf Seite 741 mit dem Unterschied, dass hier nicht die Subtraktion der Eingangsspannungen im Vordergrund steht, sondern die Erzeugung von symmetrischen Ausgangsspannungen. Man erkennt hier auch, dass die Schaltung symmetrisch ist: Die Funktionsweise ändert sich nicht, wenn man die Eingänge und Ausgänge gleichzeitig vertauscht.

Der Aufbau von Verstärkern mit symmetrischen Ausgängen ist naheliegend, wenn man bedenkt, daß der Differenzverstärker am Eingang von Operationsverstärkern immer symmetrische Signale erzeugt. Man muss lediglich beide Ausgangssignale des Differenzverstärkers in Abb. 5.14 an getrennte Ausgänge weiterleiten, wie Abb. 5.56 zeigt. Hier haben wir zusätzlich die erforderliche Gleichtaktregelung eingezeichnet, die man benötigt, um definierte Ausgangsspannungen zu erhalten. Die beiden Widerstände $R_1$ bilden das arithmetische Mittel der Ausgangsspannungen. Der zusätzliche Verstärker $OP1$ zur Gleichtaktregelung am Ausgang stellt die Stromquellen $I_1$ so ein, dass der Mittelwert gleich dem von außen angelegten Wert $U_{Gla} = (U_{a1} + U_{a2})/2$ wird. Wenn beide Ausgangsspannungen ansteigen, erhöht $OP1$ die Ströme $I_1$ und senkt damit beide Ausgangsspannungen wieder. Zusammen mit (5.30) lassen sich damit die Ausgangsspannungen angeben:

$$
U_{a1} = U_{Gla} - \frac{R_N}{2R_1}(U_{e1} - U_{e2}) \quad \text{und} \quad U_{a2} = U_{Gla} + \frac{R_N}{2R_1}(U_{e1} - U_{e2})
$$

(5.31)

Man sieht, dass die resultierenden Ausgangsspannungen der gegengekoppelten Schaltung mit Gleichtaktregelung in (5.31) symmetrisch zu $U_{Gla}$ sind.

Abbildung 5.57 zeigt ein Beispiel für die Ausführung der Gleichtaktregelung am Ausgang. Der Differenzverstärker $T_{10}, T_{11}$ vergleicht die vorgegebene Gleichtaktspannung $U_{Gla}$ mit dem arithmetischen Mittel der Ausgangsspannungen und regelt die Ströme $I_1$ in der Stromquellenbank $T_7$ bis $T_9$.
<!-- page-import:0585:end -->

<!-- page-import:0780:start -->
10.3 Bipolares Koeffizientenglied 743

Mit $V_N = V_P$ und der zusätzlichen Voraussetzung

$$
\sum_{i=1}^{m} \alpha_i = \sum_{i=1}^{n} \alpha_i'
$$

folgt durch Subtraktion der beiden Gleichungen:

$$
U_a = \sum_{i=1}^{n} \alpha_i' U_i' - \sum_{i=1}^{m} \alpha_i U_i
$$

(10.7)

Für $n = m = 1$ geht der Mehrfach-Subtrahierer in die Grundschaltung in Abb. 10.3 über.

Die Eingänge der Rechenschaltungen belasten die Signalspannungsquellen. Wenn dadurch keine Rechenfehler entstehen sollen, müssen deren Ausgangswiderstände hinreichend niederohmig sein. Sind die Quellen ihrerseits gegengekoppelte Operationsverstärkerschaltungen, ist diese Bedingung im allgemeinen gut erfüllt. Bei anderen Signalquellen ist es meist notwendig, Impedanzwandler in Form von Elektrometerverstärker vor die Eingänge zu schalten. Die sich dabei ergebenden Subtrahierer werden als Elektrometer-Subtrahierer (Instrumentation Amplifier) bezeichnet und hauptsächlich in der Meßtechnik eingesetzt. Deshalb werden sie noch ausführlich im Kapitel 18.1.2 behandelt.

## 10.3 Bipolares Koeffizientenglied

Die Schaltung in Abb. 10.5 gestattet die Multiplikation einer Eingangsspannung mit einem konstanten Faktor, der mit dem Potentiometer $R_2$ zwischen $\pm n$ einstellbar ist. Steht das Potentiometer am rechten Anschlag, ist $q = 0$, und die Schaltung arbeitet als invertierender Verstärker mit der Verstärkung $A = -n$. Der Widerstand $R_1/(n - 1)$ ist in diesem Fall wirkungslos, da an ihm keine Spannung abfällt.

Für $q = 1$ liegt die volle Eingangsspannung $U_e$ am P-Eingang. Dadurch wird der Spannungsabfall an dem Widerstand $R_1/n$ gleich Null, und die Schaltung arbeitet als nicht-invertierender Verstärker mit der Verstärkung:

$$
A = 1 + \frac{R_1}{R_1/(n - 1)} = +n
$$

Für Zwischenstellungen beträgt die Verstärkung:

$$
A = n(2q - 1)
$$

Sie ist also linear von $q$ abhängig und kann deshalb gut mit Hilfe eines geeichten Wendelpotentiometers eingestellt werden. Der Faktor $n$ bestimmt den Koeffizientenbereich. Der kleinste Wert ist $n = 1$; in diesem Fall entfällt der Widerstand $R_1/(n - 1)$.

**Abb. 10.5.**  
Bipolares Koeffizientenglied

Ausgangsspannung: $U_a = n\,(2q - 1)\,U_e$
<!-- page-import:0780:end -->
