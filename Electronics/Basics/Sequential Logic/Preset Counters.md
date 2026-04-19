# Preset Counters

<!-- page-import:0733:start -->
696  8. Schaltwerke (Sequentielle Logik)

**Abb. 8.42.**  
Zeitlicher Verlauf der Ausgangszustände  
eines BCD-Zählers

**Abb. 8.43.**  
Zustandstabelle für den BCD-Code

| Z | $z_3$ $2^3$ | $z_2$ $2^2$ | $z_1$ $2^1$ | $z_0$ $2^0$ |
|---|---|---|---|---|
| 0  | 0 | 0 | 0 | 0 |
| 1  | 0 | 0 | 0 | 1 |
| 2  | 0 | 0 | 1 | 0 |
| 3  | 0 | 0 | 1 | 1 |
| 4  | 0 | 1 | 0 | 0 |
| 5  | 0 | 1 | 0 | 1 |
| 6  | 0 | 1 | 1 | 0 |
| 7  | 0 | 1 | 1 | 1 |
| 8  | 1 | 0 | 0 | 0 |
| 9  | 1 | 0 | 0 | 1 |
| 10 | 0 | 0 | 0 | 0 |

8421-Code zeigt Abb. 8.43. Sie muss definitionsgemäß bis zur Ziffer 9 mit Abb. 8.32 auf S. 690 übereinstimmen, während die Zahl Zehn wieder durch 0000 dargestellt wird. Der zugehörige zeitliche Verlauf der Ausgangsvariablen ist in Abb. 8.42 dargestellt.

Die synchrone Zähldekade in Abb. 8.44 entspricht in ihrer Schaltung weitgehend dem synchronen Dualzähler in Abb. 8.37 auf S. 693. Wie bei der asynchronen Zähldekade sind auch hier zwei Zusätze erforderlich, die beim Übergang von $9 = 1001_2$ auf $0 = 0000_2$ sicherstellen, dass das Flip-Flop F$_1$ nicht umkippt, dafür aber das Flip-Flop F$_3$. Die Blockierung von F$_1$ wird in Abb. 8.44 über die Rückkopplung von $\overline{Q}_3$ erreicht, das Umkippen von F$_3$ durch die zusätzliche Dekodierung der 9 am Toggle-Steuereingang.

## 8.4 Vorwahlzähler

Vorwahlzähler sind Schaltungen, die ein Ausgangssignal abgeben, wenn die Zahl der Eingangsimpulse gleich einer vorgewählten Zahl $M$ wird. Das Ausgangssignal kann man dazu verwenden, einen bestimmten Vorgang auszulösen. Gleichzeitig greift man damit in den Zählablauf ein, um den Zähler zu stoppen oder wieder in den Anfangszustand zu

**Abb. 8.44.** Synchroner BCD-Zähler
<!-- page-import:0733:end -->

<!-- page-import:0734:start -->
8.4 Vorwahlzähler 697

**Abb. 8.45.**  
Modulo $(M + 1)$-Zähler mit Komparator. $1CLR$ bedeutet, dass der Zähler taktsynchron gelöscht wird, wenn $CLR = 1$ ist.

versetzen. Lässt man ihn nach dem Rücksetzen weiterlaufen, erhält man einen Modulo-$m$-Zähler, dessen Zählzyklus durch die vorgewählte Zahl bestimmt wird.

Die nächstliegende Methode zur Realisierung eines Vorwahlzählers besteht wie in Abb. 8.45 darin, den Zählerstand $Z$ mit der Vorwahlzahl $M$ zu vergleichen. Dazu kann man einen Identitätskomparator verwenden, wie er in Kap. 7.6 beschrieben wird. Wenn nach $M$ Taktimpulsen $Z = M$ geworden ist, wird $y = 1$, und der Zähler wird gelöscht $(Z = 0)$. Das Gleichheitssignal $y$ tritt dabei für die Dauer des Löschvorganges auf. Bei einem asynchronen $CLR$-Eingang beträgt diese Zeit nur wenige Gatterlaufzeiten. Daher ist ein synchroner Löscheingang zu bevorzugen; dann erscheint das Gleichheitssignal genau eine Taktperiode lang. Der Zähler in Abb. 8.45 geht also nach $M + 1$ Taktimpulsen wieder auf Null. Er stellt also einen Modulo $(M + 1)$-Zähler dar.

Der Komparator in Abb. 8.45 lässt sich einsparen, wenn man die bei Synchronzählern meist vorhandenen parallelen Ladeeingänge in Abb. 8.29 benutzt. Von dieser Möglichkeit machen die Schaltungen in Abb. 8.46 und 8.47 Gebrauch. Den Zähler in Abb. 8.46 lädt man mit der Zahl $P = Z_{\max} - M$. Nach $M$ Taktimpulsen ist dann der maximale Zählerstand $Z_{\max}$ erreicht, der intern dekodiert wird und zu einem Übertrag $RCO = 1$ führt. Wenn man diesen Ausgang wie in Abb. 8.46 mit dem $LOAD$-Eingang verbindet, wird mit dem Takt $M + 1$ wieder die Vorwahlzahl $P$ geladen. Es ergibt sich also wieder ein Modulo-$(M + 1)$-Zähler. Die Vorwahlzahl $P$ lässt sich bei Dualzählern besonders leicht berechnen: sie ist gleich dem Einerkomplement von $M$ (s. Kap. 7.7.3 auf S. 664).

Der Zähler in Abb. 8.47 wird mit der Vorwahlzahl $M$ selbst geladen. Anschließend zählt er rückwärts bis auf Null. Bei Null wird beim Rückwärtszählen ein Übertrag $RCO$

**Abb. 8.46.**  
Modulo $(M + 1)$-Zähler mit paralleler Eingabe von $P = Z_{\max} - M$ bei $Z = 15$. Das $+$ Zeichen am $CLK$-Eingang steht für einen Vorwärtszähler. Der Schrägstrich bedeutet eine ODER-Verknüpfung.

**Abb. 8.47.**  
Modulo $(M + 1)$-Zähler mit paralleler Eingabe von $M$ bei $Z = 0$ unter Verwendung eines Rückwärtszählers. Das $-$ Zeichen am $CLK$-Eingang steht für einen Rückwärtszähler.
<!-- page-import:0734:end -->
