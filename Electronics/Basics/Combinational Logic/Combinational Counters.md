# Combinational Counters

<!-- page-import:0697:start -->
660  7. Schaltnetze (Kombinatorische Logik)

| Einsen | $x_7$ | $x_6$ | $x_5$ | $x_4$ | $x_3$ | $x_2$ | $x_1$ | $x_0$ | $y_3$ | $y_2$ | $y_1$ | $y_0$ |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 1 |
| 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 |
| 2 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| ⋮ |  |  |  | ⋮ |  |  |  |  |  | ⋮ |  |  |
| 6 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 0 |
| 7 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | 1 | 1 | 1 |
| 7 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 |
| 8 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 |

**Abb. 7.17.** Wahrheitstafel eines kombinatorischen Zählers

## 7.4 Kombinatorischer Zähler

Ein *kombinatorischer Zähler* ist eine Schaltung, die zählt, wie viele Eingänge 1 sind und am Ausgang die entsprechende Dualzahl liefert. Dabei sind alle Eingänge gleichberechtigt. In der Wahrheitstafel in Abb. 7.17 ist zusätzlich die Anzahl der Einsen dezimal angegeben. Die Wahrheitstafel eines kombinatorischen Zählers stimmt mit der des Prioritätsdecoders in den Zeilen überein, bei denen alle Bits unterhalb der höchsten 1 ebenfalls 1 sind.

## 7.5 Paritätsgenerator

Ein Paritätsgenerator bildet die Quersumme der Eingangsdaten und liefert am Ausgang das niedrigste Bit der Quersumme. Er bildet also eine modulo-2 Addition der Eingangsdaten. Deshalb ist stimmt seine Wahrheitstafel mit dem niedrigsten Bit $y_0$ des kombinatorischen Zählers in Abb. 7.17 überein. Ein Paritätsgenerator liefert also dann als Ergebnis eine 1, wenn die Anzahl der Einsen am Eingang ungerade ist.

Zur schaltungstechnischen Realisierung bieten sich EXOR-Gatter an, da sie eine modulo-2 Addition bilden wie in Abschnitt 7.8 gezeigt wird. Daraus ergibt sich die Schaltung in Abb. 7.18. Die Reihenfolge der exor-Verknüpfungen ist beliebig. Allerdings erfordert diese Anordnung viel Rechenzeit, da jedes EXOR-Gatter 3 Gatterlaufzeiten benötigt. Die direkte Realisierung einer Wahrheitstafel benötigt dagegen insgesamt nur 3 Gatterlaufzeiten (Negation, UND-Verknüpfung, ODER-Verknüpfung).

Zur Fehlererkennung überträgt man ein Paritätsbit zusammen mit den Datenbits. Dazu dient das $y_0$-Bit in Abb. 7.19. Wenn bei der Übertragung ein Fehler auftritt ergibt sich auf der Empfängerseite ein abweichendes Paritätsbit $y_0'$. Das EXOR Gatter markiert diesen Fehler mit $f = 1$. Allerdings lassen sich mit einem einzigen Paritätsbit lediglich Einzel-

**Abb. 7.18.**  
Paritätsgenerator für gerade Parität mit 8 Eingängen.  
Die logischen Funktionen sind in Abb. 6.13 zusammengestellt.

$$
y_0 = x_0 \oplus x_1 \oplus x_2 \oplus x_3 \oplus x_4 \oplus x_5 \oplus x_6 \oplus x_7
$$
<!-- page-import:0697:end -->
