# Multipliers

<!-- page-import:0712:start -->
7.9 Multiplizierer 675

Abb. 7.39. Anordnung zur Addition bzw. Subtraktion der Gleitkomma-Zahlen $A$ und $B$

mit dem Übertrag $c_N$ aus der Vorzeichenstelle vergleicht. Ein Überlauf hat genau dann stattgefunden, wenn diese beiden Überträge verschieden sind. Dieser Fall wird mit der EXOR-Verknüpfung dekodiert.

## 7.8.6 Addition und Subtraktion von Gleitkomma-Zahlen

Bei der Bildung von Gleitkomma-Zahlen muss man die Mantisse und den Exponenten separat verarbeiten. Zur Addition muss man zunächst die Exponenten angleichen. Dazu bildet man die Differenz der Exponenten und verschiebt die Mantisse, die zu dem kleineren Exponenten gehört, um entsprechend viele Bits nach rechts. Dann besitzen beide Zahlen den gleichen, nämlich den größeren Exponenten. Er wird über den Multiplexer in Abb. 7.39 an den Ausgang weitergeleitet. Nun können die beiden Mantissen addiert bzw. subtrahiert werden. Dabei entsteht in der Regel ein nicht normiertes Ergebnis, d.h. die führende Eins in der Mantisse steht nicht an der vorgeschriebenen Stelle. Zur Normierung des Ergebnisses wird die höchste Eins in der Mantisse mit einem Prioritätsdecoder (siehe Abschnitt 7.3) lokalisiert. Dann wird die Mantisse um entsprechend viele Bits nach links geschoben und der Exponent entsprechend verringert.

## 7.9 Multiplizierer

Multiplizierer sollen das Produkt von zwei Zahlen bilden.

### 7.9.1 Multiplikation von Festkomma-Zahlen

Die Multiplikation im Dualsystem wollen wir zunächst an einem Zahlenbeispiel erläutern. Wir berechnen das Produkt $13 \cdot 11 = 143$ und erhalten:

$$
\begin{array}{rrrrr}
1&1&0&1 & \cdot \quad 1&0&1&1\\
\hline
&&&1&1&0&1\\
+&&1&1&0&1\\
+&&0&0&0&0\\
+&1&1&0&1\\
\hline
1&0&0&0&1&1&1&1
\end{array}
$$
<!-- page-import:0712:end -->

<!-- page-import:0714:start -->
677

# 7.9 Multiplizierer

Abb. 7.41. Multiplikation von Gleitkomma-Zahlen

$$
S_0 = X \cdot y_0
$$

Dieser Term entspricht der ersten Zeile im oben angeführten Multiplikationsschema. Das LSB von $S_0$ stellt das LSB des Produktes $P$ dar; es wird direkt an den Ausgang übertragen. Die nächst höheren Bits von $S_0$ werden in dem zweiten Rechenbaustein zu dem Ausdruck $X \cdot y_1$ addiert. Die dabei entstehende Summe stellt die Zwischensumme aus der ersten und zweiten Zeile des Multiplikationsschemas dar. Ihr LSB stellt die zweitniedrigste Stelle von $P$ dar; es wird also an die Stelle $p_1$ übertragen. Entsprechend verfährt man mit den nächst höheren Zwischensummen. Zum besseren Verständnis haben wir in Abb. 7.40 die Zahlenwerte für das eingangs angegebene Zahlenbeispiel eingetragen. Über die Zusatzeingänge $k_0$ bis $k_3$ kann man noch eine 4 bit Zahl $K$ zum Produkt addieren. Damit lautet die Beziehung für den Multiplizierer:

$$
P = X \cdot Y + K
$$

Die Erweiterung für breitere Zahlen ist unmittelbar einzusehen. Für jedes weitere Bit des Multiplikators $Y$ fügt man am unteren Ende der Schaltung einen weiteren Rechenbaustein an. Zur Erweiterung des Multiplikanden $X$ vergrößert man die Wortbreite durch Anreihen einer entsprechenden Anzahl von Rechenbausteinen in jeder Stufe.

Bei dem beschriebenen Multiplikationsverfahren wurde jeweils ein neuer Produktterm zur vorhergehenden Zwischensumme addiert. Dieses Verfahren erfordert den geringsten Aufwand und ergibt eine übersichtliche und leicht erweiterbare Verdrahtung. Die Rechenzeit lässt sich jedoch verkürzen, wenn man möglichst viele Summationen gleichzeitig durchführt und die einzelnen Zwischensummen am Schluss mit einem schnellen Addierer aufsummiert. Dafür gibt es verschiedene Verfahren, die sich lediglich in der Reihenfolge der Additionen unterscheiden (Wallace Tree).

Eine andere Möglichkeit, die Rechenzeit zu verkürzen, besteht im Booth-Algorithmus. Dabei werden die Bits des Multiplikators in Paaren zusammengefasst. Dadurch halbiert sich die Zahl der benötigten Addierer, und die Rechenzeit verkürzt sich entsprechend. Früher gab es eine Vielzahl von integrierten Multiplizierern. Sie sind heute in CPUs und Signalprozessoren enthalten.

## 7.9.2 Multiplikation von Gleitkomma-Zahlen

Zur Multiplikation von Gleitkomma-Zahlen muss man, wie in Abb. 7.41 dargestellt, die Mantissen der beiden Zahlen multiplizieren und ihre Exponenten addieren. Dabei kann ein
<!-- page-import:0714:end -->
