# Priority Decoders

<!-- page-import:0696:start -->
7.3 Prioritätsdecoder 659

**Abb. 7.14.** Erweiterung eines kombinatorischen Schieberegisters

**Abb. 7.15.**  
Kombinatorisches Ring-Schieberegister

## 7.3 Prioritätsdecoder

Ein Prioritätsdecoder liefert am Ausgang eine Dualzahl, die dem Stellenwert der höchstwertigen 1 am Eingang entspricht. Die Wahrheitstafel in Abb. 7.16 zeigt diese Funktion. Die 1 am höchstwertigen Eingang bestimmt das Ergebnis; der Wert der niedrigeren Eingänge ist wirkt sich nicht auf das Ergebnis aus. Deshalb stehen in der Wahrheitstafel x-Symbole als dont-care Zeichen. Weil das höchste Bit, das 1 ist, das Ergebnis bestimmt und alle niedrigeren Bits belanglos sind, heißt die Schaltung Prioritätsdecoder. Man kann die Schaltung dazu einsetzen, einen 1-aus-$n$ Code in den Dualcode zu verwandeln, aber auch einen Summencode, bei dem alle niederwertigen Bits 1 sind. Wegen der x-Symbole in der Wahrheitstafel macht das keinen Unterschied. Diese Funktion wird bei AD-Umsetzern nach dem Parallelverfahren in Kapitel 17.3.1 auf S. 1025 eingesetzt.

| J | $x_7$ | $x_6$ | $x_5$ | $x_4$ | $x_3$ | $x_2$ | $x_1$ | $x_0$ | $y_3$ | $y_2$ | $y_1$ | $y_0$ |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 1 |
| 2 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | x | 0 | 0 | 1 | 0 |
| 3 | 0 | 0 | 0 | 0 | 0 | 1 | x | x | 0 | 0 | 1 | 1 |
| 4 | 0 | 0 | 0 | 0 | 1 | x | x | x | 0 | 1 | 0 | 0 |
| 5 | 0 | 0 | 0 | 1 | x | x | x | x | 0 | 1 | 0 | 1 |
| 6 | 0 | 0 | 1 | x | x | x | x | x | 0 | 1 | 1 | 0 |
| 7 | 0 | 1 | x | x | x | x | x | x | 0 | 1 | 1 | 1 |
| 8 | 1 | x | x | x | x | x | x | x | 1 | 0 | 0 | 0 |

**Abb. 7.16.** Wahrheitstafel eines Prioritätsdecoders. $x \hat{=} $ beliebig
<!-- page-import:0696:end -->
