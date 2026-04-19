# Formulation of Logic Functions

<!-- page-import:0657:start -->
620 6. Digitaltechnik Grundlagen

| $x_1$ | $x_2$ | $y = x_1 \cdot x_2$ |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

**a** Konjunktion,  
UND-Verknüpfung

| $x_1$ | $x_2$ | $y = x_1 + x_2$ |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

**b** Disjunktion,  
ODER-Verknüpfung

| $x$ | $y = \overline{x}$ |
|---|---|
| 0 | 1 |
| 1 | 0 |

**c** Negation,  
NICHT-Operation

**Abb. 6.2.** Wahrheitstafel der logischen Grundverknüpfungen

Konjunktion, UND: $y = x_1 \wedge x_2 = x_1 \cdot x_2 = x_1 x_2$  
Disjunktion, ODER: $y = x_1 \vee x_2 = x_1 + x_2$  
Negation, NICHT: $y = \overline{x}$

Da die auftretenden Eingangs- und Ausgangssignale nur die Werte 0 oder 1 annehmen können, kann man alle möglichen Kombinationen in einer Tabelle darstellen. Eine solche Tabelle wird als Wahrheitstafel bezeichnet; für die 3 Grundverknüpfungen sind sie in Abb. 6.2 dargestellt. Man erkennt bei der Konjunktion, dass $y$ nur dann gleich 1 wird, wenn $x_1$ und $x_2$ gleich 1 sind. Aus diesem Grund wird die Konjunktion auch als UND-Verknüpfung bezeichnet. Bei der Disjunktion wird $y$ immer dann gleich 1, wenn $x_1$ oder $x_2$ gleich 1 ist. Daher wird die Disjunktion auch als ODER-Verknüpfung bezeichnet. Beide Verknüpfungen kann man entsprechend auf beliebig viele Variablen erweitern. Für diese Rechenoperationen gelten eine Reihe von Axiomen und davon abgeleiteten Theoremen, die in Abb. 6.2 zusammengestellt sind.

| Axiome | Duale Form |
|---|---|
| Operation mit 0 und 1: |  |
| $x \cdot 1 = x$ (6.1a) | $x + 0 = x$ (6.1b) |
| Gesetz für die Negation: |  |
| $x \cdot \overline{x} = 0$ (6.2a) | $x + \overline{x} = 1$ (6.2b) |
| Kommutatives Gesetz: |  |
| $x_1 \cdot x_2 = x_2 \cdot x_1$ (6.3a) | $x_1 + x_2 = x_2 + x_1$ (6.3b) |
| Distributives Gesetz: |  |
| $x_1 \cdot (x_2 + x_3) = x_1 \cdot x_2 + x_1 \cdot x_3$ (6.4a) | $x_1 + x_2 \cdot x_3 = (x_1 + x_2) \cdot (x_1 + x_3)$ (6.4b) |

| Theoreme | Duale Form |
|---|---|
| Assoziatives Gesetz: |  |
| $x_1 \cdot (x_2 \cdot x_3) = (x_1 \cdot x_2) \cdot x_3$ (6.5a) | $x_1 + (x_2 + x_3) = (x_1 + x_2) + x_3$ (6.5b) |
| De MorgansGesetz: |  |
| $\overline{x_1 \cdot x_2} = \overline{x_1} + \overline{x_2}$ (6.6a) | $\overline{x_1 + x_2} = \overline{x_1} \cdot \overline{x_2}$ (6.6b) |
| Absorptionsgesetz: |  |
| $x_1 \cdot (x_1 + x_2) = x_1$ (6.7a) | $x_1 + x_1 \cdot x_2 = x_1$ (6.7b) |
| Tautologie: |  |
| $x \cdot x = x$ (6.8a) | $x + x = x$ (6.8b) |
| Doppelte Negation: |  |
| $\overline{\overline{x}} = x$ (6.9a) |  |
| Operationen mit 0 und 1: |  |
| $x \cdot 0 = 0$ (6.10a) | $x + 1 = 1$ (6.10b) |
| $\overline{0} = 1$ (6.11a) | $\overline{1} = 0$ (6.11b) |

**Abb. 6.3.** Axiome und abgeleitete Gesetze der Schaltalgebra
<!-- page-import:0657:end -->

<!-- page-import:0658:start -->
6.2 Aufstellung logischer Funktionen 621

| $x_1$ | $x_2$ | $x_1 \cdot x_2$ | $y = x_1 + x_1 \cdot x_2$ |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 |
| 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 |

**Abb. 6.4.**  
Verifikation des Absorptionsgesetzes  
$x_1 + x_1 \cdot x_2 = x_1$

Viele dieser Gesetze sind schon aus der Zahlenalgebra bekannt. Jedoch gelten (6.4b), (6.7a, b), (6.8a, b) und (6.10b) nicht für Zahlen; außerdem existiert der Begriff der Negation bei Zahlen überhaupt nicht. Ausdrücke wie $2x$ und $x^2$ treten infolge der Tautologie in der Schaltalgebra nicht auf.

Vergleicht man jeweils die linken und die rechten Gleichungen, erkennt man das wichtige Prinzip der Dualität: Vertauscht man in irgendeiner Identität Konjunktion mit Disjunktion und 0 mit 1, erhält man wieder eine Identität.

Ein Beispiel soll zeigen, dass man die Theoreme in Abb. 6.2 mittels der 4 Axiome herleiten kann. Hier soll die Tautologie $x + x = x$ in (6.8b) bestätigt werden:

$$
x + x = (x + x)\cdot 1 \qquad \text{gemäß (6.1a)}
$$

$$
= (x + x)\cdot (x + \bar{x}) \qquad \text{gemäß (6.2b)}
$$

$$
= x \cdot (x \cdot \bar{x}) \qquad \text{gemäß (6.4b)}
$$

$$
= x + 0 \qquad \text{gemäß (6.2a)}
$$

$$
= x \qquad \text{gemäß (6.1b)}
$$

Mit Hilfe der Operationen mit 0 und 1 in Abb. 6.2 ist es möglich, die Konjunktion und die Disjunktion für alle möglichen Werte der Variablen $x_1$ und $x_2$ auszurechnen. Auf diese Weise kann man die Wahrheitstafeln in Abb. 6.2 bestätigen.

Auch die anderen Theoreme in Abb. 6.2 lassen sich mit Wahrheitstafeln leicht nachprüfen. Abbildung 6.4 zeigt ein Beispiel für das Absorptionsgesetz gemäß (6.7b). Man erkennt, dass der Term $x_1 \cdot x_2$ nur in der 4. Zeile eine 1 besitzt, in der $x_1$ ohnehin schon 1 ist. Deshalb ändert der Term $x_1 \cdot x_2$ das Ergebnis nicht.

Die logischen Grundfunktionen lassen sich durch entsprechende Schaltungen realisieren. Solche Schaltungen besitzen einen oder mehrere Eingänge und einen Ausgang. Sie werden als „Gatter“ bezeichnet. Es gibt eine Vielzahl verschiedener Möglichkeiten, Gatter schaltungstechnisch zu realisieren. Sie bestimmen die Spannungspegel im Low- und High-Zustand. Für den Entwurf digitaler Schaltungen sind die Spannungspegel aber unwichtig: sie müssen lediglich zu einander passen, was innerhalb einer Schaltungsfamilie natürlich gewährleistet ist. Deshalb hat man zur Beschreibung digitaler Schaltungen Gatter eingeführt, die lediglich die logische Funktion kennzeichnen und nichts über die Logikfamilie aussagen. Sie erleichtern das Verständnis digitaler Schaltungen, da sie von dem inneren Aufbau abstrahieren. Diese Schaltsymbole sind in Abb. 6.5 zusammengestellt. Die vollständige Norm ist in DIN 40 900 Teil 12 zu finden. Veraltete Schaltsymbole, sind in Abb. 6.6 zusammengestellt. Leider werden sie in manchen Entwurfsprogrammen für digitale Schaltungen auch heute noch verwendet.

# 6.2 Aufstellung logischer Funktionen

In der Digitaltechnik ist die Problemstellung im einfachsten Fall in Form einer Funktionstabelle gegeben, die auch als Wahrheitstafel bezeichnet wird. Die Aufgabe besteht dann zunächst darin, eine logische Funktion zu finden, die diese Wahrheitstafel erfüllt. Im nächs-
<!-- page-import:0658:end -->

<!-- page-import:0660:start -->
6.2 Aufstellung logischer Funktionen 623

Disjunktive Normalform

Vereinfachte Funktion

**Abb. 6.8.** Realisierung der logischen Funktion $y = \bar{x}_1x_2\bar{x}_3 + x_1\bar{x}_2\bar{x}_3 + x_1x_2\bar{x}_3 \;=\; (x_1 + x_2)\,\bar{x}_3$

Dies ist die disjunktive Normalform der gesuchten logischen Funktion. Aus der logischen Funktion ergibt sich unmittelbar die schaltungstechnische Realisierung, die in Abb. 6.8 dargestellt ist. Allerdings sollte man vor der Realisierung die Möglichkeiten zur Vereinfachung prüfen. Dazu wenden wir das distributive Gesetz in Gl. (6.4a) an und erhalten:

$$
y = [\bar{x}_1x_2 + x_1(\bar{x}_2 + x_2)]\,\bar{x}_3
$$

Die Gln. (6.2b) und (6.1a) liefern die Vereinfachung:

$$
y = (\bar{x}_1x_2 + x_1)\,\bar{x}_3
$$

Mit dem distributiven Gesetz Gl. (6.4b) folgt:

$$
y = (x_1 + x_2)(x_1 + \bar{x}_1)\,\bar{x}_3
$$

Durch nochmalige Anwendung der Gln. (6.2b) und (6.1a) erhalten wir schließlich das vereinfachte Ergebnis:

$$
y = (x_1 + x_2)\,\bar{x}_3
$$

In Abb. 6.8 erkennt man die starke Vereinfachung der Schaltung.

Wenn in der Wahrheitstafel bei der Ausgangsvariablen $y$ mehr Einsen als Nullen stehen, erhält man viele Produktterme. Man kann nun von vornherein eine Vereinfachung vornehmen, indem man statt $y$ die negierte Ausgangsvariable $\bar{y}$ betrachtet. Bei dieser negierten Variablen stehen dann sicher weniger Einsen als Nullen; man erhält bei der Aufstellung der logischen Funktion für die negierte Variable $\bar{y}$ demnach weniger Produktterme, also eine von vornherein einfachere Funktion. Man braucht sie zum Schluss nur zu negieren, um die gesuchte Funktion für $y$ zu erhalten. Dazu sind lediglich die Operationen $(+)$ und $(\cdot)$ zu vertauschen, sowie alle Variablen und Konstanten einzeln zu negieren.

## 6.2.1 Das Karnaugh-Diagramm

Ein wichtiges Hilfsmittel zur Gewinnung einer möglichst einfachen logischen Funktion ist das Karnaugh-Diagramm. Es ist nichts weiter als eine andere Anordnung der Wahrheitstafel. Die Werte der Eingangsvariablen werden dabei nicht einfach untereinander geschrieben, sondern an dem horizontalen und vertikalen Rand eines schachbrettartig unterteilten Feldes angeordnet. Bei einer geraden Anzahl von Eingangsvariablen schreibt man die Hälfte an den einen Rand und die andere Hälfte an den anderen. Bei einer ungeraden Anzahl von Variablen muss man an einem Rand eine Variable mehr anschreiben als an dem anderen.
<!-- page-import:0660:end -->

<!-- page-import:0661:start -->
624  6. Digitaltechnik Grundlagen

| $x_1$ | $x_2$ | $y$ |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

**Abb. 6.9.**  
Wahrheitstafel der UND-Funktion

**Abb. 6.10.**  
Karnaugh-Diagramm der UND-Funktion

Die Anordnung der verschiedenen Kombinationen der Eingangsfunktionswerte muss so vorgenommen werden, dass sich jeweils nur *eine* Variable ändert, wenn man von einem Feld zum Nachbarfeld übergeht. In die Felder selbst werden die Werte der Ausgangsvariablen $y$ eingetragen, die zu den an den Rändern stehenden Werten der Eingangsvariablen gehören. Abbildung 6.9 zeigt noch einmal die Wahrheitstafel der UND-Funktion für zwei Eingangsvariablen, Abb. 6.10 das zugehörige Karnaugh-Diagramm.

Da das Karnaugh-Diagramm nur eine vereinfachte Schreibweise der Wahrheitstafel ist, kann man aus ihm die disjunktive Normalform der zugehörigen logischen Funktion auf die schon beschriebene Weise gewinnen. Der Vorteil besteht darin, dass man mögliche Vereinfachungen leicht erkennen kann. Wir wollen dies anhand des Beispiels in Abb. 6.11 erläutern.

Zur Aufstellung der disjunktiven Normalform muss zunächst, wie oben beschrieben, für jedes Feld, in dem eine Eins steht, die Konjunktion aller Eingangsvariablen gebildet werden. Für das Feld in der linken oberen Ecke ergibt sich:

$$
K_1 = \overline{x}_1 \overline{x}_2 \overline{x}_3 \overline{x}_4
$$

Für das Feld rechts daneben folgt:

$$
K_2 = \overline{x}_1 x_2 \overline{x}_3 \overline{x}_4
$$

| $x_1$ | $x_2$ | $x_3$ | $x_4$ | $y$ |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 |
| 0 | 0 | 0 | 1 | 1 |
| 0 | 0 | 1 | 0 | 1 |
| 0 | 0 | 1 | 1 | 1 |
| 0 | 1 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 |

**Abb. 6.11.** Wahrheitstafel mit zugehörigem Karnaugh-Diagramm
<!-- page-import:0661:end -->

<!-- page-import:0662:start -->
6.2 Aufstellung logischer Funktionen 625

Bildet man zum Schluss die Disjunktion aller Konjunktionen, tritt unter anderem der Ausdruck

$$
K_1 + K_2 = \bar{x}_1 x_2 \bar{x}_3 \bar{x}_4 + \bar{x}_1 x_2 \bar{x}_3 \bar{x}_4
$$

auf. Er lässt sich vereinfachen zu:

$$
K_1 + K_2 = \bar{x}_1 \bar{x}_3 \bar{x}_4 (\bar{x}_2 + x_2) = \bar{x}_1 \bar{x}_3 \bar{x}_4
$$

Daran erkennt man die allgemeine Vereinfachungsregel für das Karnaugh-Diagramm:

*Wenn in einem Rechteck oder Quadrat mit 2,4,8,16, . . . Feldern überall Einsen stehen, kann man direkt die Konjunktion der ganzen Gruppe gewinnen, indem man nur die Eingangsvariablen berücksichtigt, die in allen Feldern der Gruppe den gleichen Wert (0 oder 1) besitzen.*

Danach erhält man in unserem Beispiel für die Zweiergruppe B die Konjunktion

$$
K_B = \bar{x}_1 \bar{x}_3 \bar{x}_4
$$

in Übereinstimmung mit der oben angegebenen Funktion. Für die Vierer-Reihe D in Abb. 6.11 ergibt sich:

$$
K_D = \bar{x}_1 \bar{x}_2
$$

Entsprechend erhalten wir für das Viererquadrat C die Konjunktion:

$$
K_C = x_1 x_3
$$

Nun bleibt noch die Eins in der rechten oberen Ecke. Sie lässt sich z.B. wie eingezeichnet mit der Eins am unteren Rand derselben Spalte zu einer Zweiergruppe $K_A$ verbinden. Eine andere Möglichkeit wäre die Zusammenfassung mit der Eins am linken Rand der ersten Zeile. Die einfachste Lösung erhält man jedoch, wenn man beachtet, dass sich in jeder Ecke des Karnaugh-Diagramms eine Eins befindet. Diese Einsen lassen sich zu einer Vierergruppe verbinden, und wir erhalten:

$$
K_A = \bar{x}_2 \bar{x}_4
$$

Daraus folgt: Zu einer Gruppe zusammenfassen lassen sich auch solche Felder, die sich am linken und rechten Rand einer Zeile bzw. am oberen und unteren Rand einer Spalte befinden. Für die disjunktive Normalform erhält man nun das schon stark vereinfachte Ergebnis:

$$
y = K_A + K_B + K_C + K_D,
$$

$$
y = \bar{x}_2 \bar{x}_4 + \bar{x}_1 \bar{x}_3 \bar{x}_4 + x_1 x_3 + \bar{x}_1 \bar{x}_2
$$

Heutzutage vereinfacht man logische Funktionen aber nicht mehr von Hand, sondern setzt dazu einen Minimizer der Entwurfssoftware ein, der die Funktion nicht unbedingt auf eine minimale Anzahl von Termen reduziert, sondern auf eine optimale Realisierung mit dem infrage kommenden PLD oder FPGA (device fitter).
<!-- page-import:0662:end -->
