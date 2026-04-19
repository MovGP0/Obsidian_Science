# Increasing the Output Power of Integrated Operational Amplifiers

<!-- page-import:0954:start -->
15.10 Erhöhung der Ausgangsleistung integrierter Operationsverstärker 917

**Abb. 15.25.**  
Stromverstärkung mit komplementären Emitter-
folgern

**Abb. 15.26.**  
Stromverstärkung mit komplementären
Emitterschaltungen

## 15.10 Erhöhung der Ausgangsleistung integrierter Operationsverstärker

Der Ausgangsstrom integrierter Operationsverstärker ist normalerweise auf Werte von 20 mA begrenzt. Es gibt viele Anwendungsfälle, bei denen man ohne großen Aufwand den Ausgangsstrom auf den ungefähr 10fachen Wert vergrößern möchte. Dazu kann man die beschriebenen Leistungsendstufen verwenden. Bei niedrigen Signalfrequenzen lässt sich der Aufwand reduzieren, indem man Gegentakt-Emitterfolger im B-Betrieb einsetzt. Infolge der endlichen Slew-Rate des Operationsverstärkers treten jedoch auch bei Gegenkopplung noch wahrnehmbare Übernahmeverzerrungen auf. Sie lassen sich aber stark reduzieren, indem man wie in Abb. 15.25 einen Widerstand $R_1$ verwendet, der in Nullpunktnähe die Emitterfolger überbrückt. In diesem Fall reduziert sich die erforderliche Slew-Rate des Verstärkers von unendlich auf einen Wert, der um den Faktor $1 + R_1/R_L$ über der Anstiegsgeschwindigkeit der Ausgangsspannung liegt.

Die Schaltung in Abb. 15.26 besitzt dieselben Eigenschaften wie die vorhergehende. Die Ansteuerung der Endstufentransistoren erfolgt hier jedoch über die Betriebsspannungsanschlüsse. Dadurch entstehen zusammen mit den Ausgangstransistoren des Operationsverstärkers zwei Komplementär-Darlington-Schaltungen, wenn man $R_2 = 0$ macht.

Bei kleinen Ausgangsströmen sperren die beiden Endstufentransistoren $T_1$ und $T_2$. In diesem Fall liefert der Operationsverstärker den ganzen Ausgangsstrom. Bei größeren Ausgangsströmen werden die Transistoren $T_1$ bzw. $T_2$ leitend und liefern den größten Teil des Ausgangsstromes. Der Ausgangsstrom des Operationsverstärkers bleibt ungefähr auf den Wert $0{,}7\,\mathrm{V}/R_1$ begrenzt.

Ein gewisser Vorteil gegenüber der vorhergehenden Schaltung besteht darin, dass durch den Ruhestrom des Operationsverstärkers bereits eine Basis-Emitter-Vorspannung an den Endstufentransistoren entsteht. Man dimensioniert die Widerstände $R_1$ so, dass sie ca. $400\,\mathrm{mV}$ beträgt. Dadurch wird der Übernahmebereich bereits stark verkleinert, ohne dass in den Endstufentransistoren ein Ruhestrom fließt, für dessen Stabilisierung man zusätzliche Maßnahmen ergreifen müsste.

Mit dem Spannungsteiler $R_2$, $R_3$ kann man der Endstufe eine zusätzliche Spannungsverstärkung geben. Dadurch ist es möglich, die Ausgangsaussteuerbarkeit des Verstärkers zu erhöhen, die dann nur noch um die Sättigungsspannung von $T_1$ bzw. $T_2$ unter der Betriebsspannung liegt. Außerdem wird dadurch die Schwingneigung innerhalb der Komplementär-Darlington-Schaltungen reduziert.
<!-- page-import:0954:end -->
