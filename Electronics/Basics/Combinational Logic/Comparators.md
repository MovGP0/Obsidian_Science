# Comparators

<!-- page-import:0698:start -->
7.6 Komparatoren 661

**Abb. 7.19.** Einsatz von Paritätsgeneratoren zu Kontrolle von Übertragungsfehlern für Daten mit 8 bit Wortbreite als Beispiel

fehler erkennen. Um Mehrfachfehler zu erkennen und gegebenenfalls auch zu korrigieren, sind mehrere Paritätsbits erforderlich (siehe Kapitel 9.3 auf Seite 730).

## 7.6 Komparatoren

Komparatoren sind Schaltungen, die zwei Zahlen miteinander vergleichen. Die wichtigsten Vergleichskriterien sind $A = B$, $A > B$ und $A < B$. Zunächst wollen wir Komparatoren behandeln, die die Gleichheit zweier Binärzahlen feststellen. Das Kriterium für die Gleichheit zweier Zahlen ist, dass sie in allen Bits übereinstimmen. Der Komparator soll am Ausgang eine logische Eins liefern, wenn die beiden Zahlen gleich sind, sonst eine Null. Der einfachste Fall ist der, dass die zu vergleichenden Zahlen nur aus einem einzigen Bit bestehen. Dann können wir als Komparator die Äquivalenz-Schaltung (Exklusiv-NOR-Gatter) verwenden. Zwei $N$-stellige Zahlen vergleicht man Bit für Bit mit je einer Äquivalenz-Schaltung und bildet die UND-Verknüpfung ihrer Ausgänge, wie es in Abb. 7.20 dargestellt ist.

Universellere Komparatoren sind solche, die außer der Gleichheit zweier Zahlen feststellen können, welche der beiden größer ist. Solche Schaltungen werden als Größen-Komparatoren (Magnitude Comparator) bezeichnet. Um einen Größenvergleich durchführen zu können, muss man wissen, in welchem Code die Zahlen verschlüsselt sind. Im folgenden wollen wir davon ausgehen, dass die Zahlen im Dual-Code vorliegen, also gilt:

$$
A = a_{N-1} \cdot 2^{N-1} + a_{N-2} \cdot 2^{N-2} + \ldots + a_1 \cdot 2^1 + a_0 \cdot 2^0
$$

Die einfachste Aufgabe ist wieder die, zwei einstellige Dualzahlen miteinander zu vergleichen. Zur Aufstellung der logischen Funktionen gehen wir von der Wahrheitstafel in Abb. 7.22 aus. Daraus erhalten wir unmittelbar die Schaltung in Abb. 7.21.

**Abb. 7.20.** Identitätskomparator für zwei $N$-stellige Zahlen. Die logischen Funktionen sind in Abb. 6.13 zusammengestellt.
<!-- page-import:0698:end -->
