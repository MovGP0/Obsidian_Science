# Adders

<!-- page-import:0707:start -->
670  7. Schaltnetze (Kombinatorische Logik)

NOR$_1$ = 3FE00000$_{\mathrm{Hex}}$ = 0  01111111,  1100...0  = $+1{,}75$

+  127      0,75

NOR$_2$ = BFB00000$_{\mathrm{Hex}}$ = 1  01111111,  0110...0  = $-1{,}375$

−  127      0,375

NOR$_3$ = 41200000$_{\mathrm{Hex}}$ = 0  10000010,  0100...0  = $+10$

+  130      0,25

NOR$_{\max}$ = 7F7FFFFF$_{\mathrm{Hex}}$ = 0  11111110,  1111...1  = $+2^{127}(2-2^{-23})$

+  254      $1-2^{-23}$

INF = 7F800000$_{\mathrm{Hex}}$ = 0  11111111,  0000...0  = $+\infty$

+  255      0

ZERO = 00000000$_{\mathrm{Hex}}$ = ×  00000000,  0000...0  = 0

0      0

**Abb. 7.29.** Beispiele für normierte Zahlen und Ausnahmen im 32 bit-Gleitkomma-Format

Die Exponenten 0 bzw. 255 sind für Ausnahmen reserviert. Der Exponent 255 wird in Verbindung mit der Mantisse 0 als $\pm\infty$ interpretiert, je nach Vorzeichen. Sind Exponent und Mantisse beide 0, wird die Zahl als $Z = 0$ gewertet. In diesem Fall spielt das Vorzeichen keine Rolle.

## 7.8 Addierer

Addierer sind Schaltungen zur Addition von zwei Zahlen. Im folgenden wollen wir Addierer für Dualzahlen behandeln. Die Subtraktion lässt sich auf die Addition zurückführen.

### 7.8.1 Halbaddierer

Die einfachste Aufgabe besteht darin, zwei einstellige Zahlen zu addieren; Schaltungen für diese Aufgabe nennt man Halbaddierer. Um ein Schaltnetz zu entwerfen, muss man zunächst die Wahrheitstafel aufstellen; daraus lässt sich dann die logische Funktion entnehmen. Wenn man zwei einstellige Zahlen $a_0$ und $b_0$ addieren will, können die in 7.31 dargestellten Kombinationen auftreten.

Sind $a_0$ und $b_0$ beide gleich Eins, tritt bei der Addition ein Übertrag in die nächst höhere Stelle auf. Der Addierer muss also zwei Ausgänge besitzen, nämlich einen für den Summenanteil in derselben Stelle und einen für den Übertrag in die nächst höhere

**Abb. 7.30.**  
Schaltung eines  
Halbaddierers

**Abb. 7.31.**  
Wahrheitstafel eines Halbaddierers

| $a_0$ | $b_0$ | $c_1$ | $s_0$ |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 0 |

$s_0 = \bar{a}_0 b_0 + a_0 \bar{b}_0 = a_0 \oplus b_0$

$c_1 = a_0 b_0$
<!-- page-import:0707:end -->

<!-- page-import:0708:start -->
7.8 Addierer 671

**Abb. 7.32.**  
Volladdierer

$s_i = a_i \oplus b_i \oplus c_i$  
$c_{i+1} = a_i b_i + a_i c_i + b_i c_i$

Stelle. Der Übertrag stellt also eine und-Verknüpfung dar, die Summe eine Antivalenz- bzw. eine exor-Verknüpfung. Eine Schaltung, die diese beiden Verknüpfungen realisiert, heißt Halbaddierer; sie ist in Abb. 7.30 aufgezeichnet.

## 7.8.2 Volladdierer

Will man zwei mehrstellige Dualzahlen addieren, kann man den Halbaddierer nur für die niedrigste Stelle verwenden. Bei allen anderen Stellen sind nämlich nicht zwei, sondern drei Bits zu addieren, weil der Übertrag von der nächst niedrigeren Stelle hinzu kommt. Im allgemeinen Fall benötigt man also für jedes Bit eine logische Schaltung mit den drei Eingängen $a_i$, $b_i$, $c_i$ und den beiden Ausgängen $s_i$ und $c_{i+1}$. Solche Schaltungen werden als Volladdierer bezeichnet. Sie lassen sich wie in Abb. 7.32 mit Hilfe von zwei Halbaddierern realisieren. Ihre Wahrheitstafel ist in Abb. 7.33 aufgestellt. Man kann sie aber auch direkt gemäß der Wahrheitstafel realisieren; dann erfordert die Bildung von Summe und Übertrag lediglich 3 Gatterlaufzeiten statt 5.

Um zwei mehrstellige Dualzahlen addieren zu können, benötigt man für jede Stelle einen Volladdierer. Bei der niedrigsten Stelle kommt man mit einem Halbaddierer aus. Eine Schaltung, die sich zur Addition zweier 4 bit-Zahlen $A$ und $B$ eignet, ist in Abb. 7.34 dargestellt.

## 7.8.3 Parallele Übertragslogik

Die Rechenzeit des Addierers in Abb. 7.34 ist wesentlich größer als die der Einzelstufen, denn der Übertrag $c_4$ kann erst dann einen gültigen Wert annehmen, wenn sich vorher $c_3$ auf einen gültigen Wert eingestellt hat. Dasselbe gilt für die vorhergehenden Überträge (Ripple Carry). Um die Rechenzeit bei der Addition von vielstelligen Dualzahlen zu verkürzen,

| Eingang |  |  | Intern |  |  | Ausgang |  | Dezimal |
|---|---|---|---|---|---|---|---|---|
| $a_i$ | $b_i$ | $c_i$ | $p_i$ | $g_i$ | $r_i$ | $s_i$ | $c_{i+1}$ | $\sum$ |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 0 | 0 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 1 | 0 | 0 | 1 | 2 |
| 0 | 0 | 1 | 0 | 0 | 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 1 | 0 | 1 | 0 | 1 | 2 |
| 1 | 0 | 1 | 1 | 0 | 1 | 0 | 1 | 2 |
| 1 | 1 | 1 | 0 | 1 | 0 | 1 | 1 | 3 |

**Abb. 7.33.** Wahrheitstafel eines Volladdierers
<!-- page-import:0708:end -->

<!-- page-import:0709:start -->
672  7. Schaltnetze (Kombinatorische Logik)

**Abb. 7.34.**  
4 bit-Addition mit seriellem Übertrag

kann man eine parallele Übertragungslogik (Carry look-ahead) verwenden. Bei dieser Methode werden alle Überträge direkt aus den Eingangsvariablen berechnet. Aus der Wahrheitstafel in Abb. 7.33 ergibt sich für den Übertrag aus der Stufe $i$ die allgemeine Beziehung:

$$
c_{i+1} = a_i b_i + (a_i \oplus b_i)\, c_i
$$

$g_i$ under $a_i b_i$, $p_i$ under $(a_i \oplus b_i)$

(7.14)

Die zur Abkürzung eingeführten Größen $g_i$ und $p_i$ treten bei dem Volladdierer in Abb. 7.32 als Zwischenergebnisse auf. Ihre Berechnung erfordert also keinen zusätzlichen Aufwand. Man kann diese Größen ganz anschaulich deuten: Die Größe $g_i$ gibt an, ob in der Stufe ein Übertrag aufgrund der Eingangskombination $a_i$, $b_i$ erzeugt wird. Man bezeichnet sie deshalb als Generate-Variable. Die Größe $p_i$ gibt an, ob aufgrund der Eingangskombination ein Übertrag, der von der nächst niedrigeren Stelle kommt, weitergegeben oder absorbiert wird. Sie wird deshalb als Propagate-Variable bezeichnet. Aus (7.14) erhalten wir sukzessive die einzelnen Überträge

$$
\begin{aligned}
c_1 &= g_0 + p_0 c_0, \\
c_2 &= g_1 + p_1 c_1 = g_1 + p_1 g_0 + p_1 p_0 c_0, \\
c_3 &= g_2 + p_2 c_2 = g_2 + p_2 g_1 + p_2 p_1 g_0 + p_2 p_1 p_0 c_0, \\
c_4 &= g_3 + p_3 c_3 = g_3 + p_3 g_2 + p_3 p_2 g_1 + p_3 p_2 p_1 g_0 + p_3 p_2 p_1 p_0 c_0
\end{aligned}
$$

(7.15)

$\vdots \qquad \vdots$

Man erkennt, dass die Ausdrücke zwar immer komplizierter werden, jedoch jeweils in zwei Gatterlaufzeiten aus den Hilfsvariablen berechnet werden können. Abbildung 7.35 zeigt das Blockschaltbild eines 4 bit-Addierers mit paralleler Übertragungslogik. In dem Übertragungsblock PCL sind die Gleichungen (7.15) realisiert.

Addierer mit mehr als 4 Stellen kann man durch Aneinanderreihen mehrerer 4 bit-Blöcke realisieren. Der Übertrag $c_4$ wäre dann als $c_0$ an dem nächst höheren Block an-

**Abb. 7.35.** 4 bit-Addition mit paralleler Übertragungslogik
<!-- page-import:0709:end -->

<!-- page-import:0710:start -->
673

## 7.8 Addierer

Abb. 7.36. 16 bit-Addition mit paralleler Übertragungslogik in zwei Ebenen

zuschließen. Dieses Verfahren ist jedoch insofern inkonsequent, als der Übertrag dann innerhalb der Blöcke zwar parallel, von Block zu Block jedoch seriell verarbeitet wird. Zur Erzielung möglichst kurzer Rechenzeiten muss man auch die Überträge von Block zu Block parallel verarbeiten. Dazu betrachten wir noch einmal die Beziehung für $c_4$ in Gl. (7.15):

$$
c_4 = \underbrace{g_3 + p_3 g_2 + p_3 p_2 g_1 + p_3 p_2 p_1 g_0}_{G} + \underbrace{p_3 p_2 p_1 p_0}_{P} c_0
\qquad (7.16)
$$

Zur Abkürzung führen wir die Block-Generate-Variable $G$ und die Block-Propagate-Variable $P$ ein und erhalten:

$$
c_4 = G + P c_0
$$

Diese Beziehung stimmt formal mit Gl. (7.14) überein. Man braucht in den einzelnen 4 bit-Additions-Blöcken also nur die zusätzlichen Hilfsvariablen $G$ und $P$ zu bilden und kann dann mit demselben Algorithmus, wie er in Gl. (7.15) für die Überträge von Stelle zu Stelle angegeben wurde, die Überträge von Block zu Block berechnen. Damit ergibt sich das in Abb. 7.36 angegebene Blockschaltbild für ein 16 bit-Addierwerk mit paralleler Übertragungslogik. Der Übertragungsblock PCL ist derselbe, wie er in dem 4 bit-Addierer in Abb. 7.35 enthalten ist.

## 7.8.4 Subtraktion

Die Subtraktion zweier Zahlen lässt sich auf eine Addition zurückführen, denn es gilt:

$$
D = A - B = A + (-B)
\qquad (7.17)
$$

Stellt man die Zahlen im Zweierkomplement dar, gilt für eine vorgegebene Wortbreite $N$ nach Gl. (7.8) die einfache Beziehung:

$$
-B_N = B_N^{(2)}
$$

Damit wird die Differenz:

$$
D_N = A_N + B_N^{(2)}
$$

Zur Berechnung der Differenz muss man also das Zweierkomplement von $B_N$ bilden und zu $A_N$ addieren. Nach Gl. (7.7) muss man dazu alle Stellen von $B_N$ negieren (Einerkomplement) und Eins addieren. Die Addition von $A_N$ und Eins kann man mit ein und demselben Addierer vornehmen, indem man den Übertragseingang ausnutzt. Damit ergibt sich die
<!-- page-import:0710:end -->

<!-- page-import:0711:start -->
674  7. Schaltnetze (Kombinatorische Logik)

**Abb. 7.37.**  
Subtraktion von  
Zweierkomplement-Zahlen  
$D = A - B$

in Abb. 7.37 dargestellte Schaltung für 4 bit. Damit die Differenz $D_N$ in der korrekten Zweierkomplementdarstellung erscheint, müssen $A_N$ und $B_N$ ebenfalls in diesem Format eingegeben werden, d.h. bei positiven Zahlen muss das höchste Bit 0 sein.

Die integrierten 4 bit Rechenwerke der 74181-Familie besitzen Steuereingänge, mit denen die Eingangszahlen komplementiert werden können. Sie sind demnach auch als Subtrahierer geeignet. Über weitere Steuereingänge kann auch auf logische Verknüpfung der Eingangsvariablen umgeschaltet werden. Man bezeichnet die Bausteine deshalb allgemein als arithmetisch-logische Einheiten (arithmetic logic unit, ALU).

## 7.8.5 Zweierkomplement-Überlauf

Wenn man zwei positive $N$-stellige Dualzahlen addiert, kann als Ergebnis eine $(N + 1)$-stellige Zahl entstehen. Ein solcher Überlauf ist daran zu erkennen, dass aus der höchsten Stelle ein Übertrag (Carry) entsteht.

Bei der Zweierkomplement-Darstellung ist die höchste Stelle für das Vorzeichen reserviert. Bei der Addition von zwei negativen Zahlen wird in die Überlaufstelle systematisch ein Übertrag erfolgen, da die Vorzeichenstelle bei beiden Zahlen Eins ist. Bei der Verarbeitung von Zweierkomplementzahlen mit beliebigem Vorzeichen bedeutet das Auftreten eines Übertrages in die Überlaufstelle demnach nicht notwendigerweise, dass ein Überlauf stattgefunden hat.

Ein Überlauf ist auf folgende Weise zu erkennen: Wenn man zwei positive Zahlen addiert, muss auch das Ergebnis positiv sein. Überschreitet die Summe den Zahlenbereich, findet ein Übertrag in die Vorzeichenstelle statt, d.h. das Ergebnis wird negativ. Daran erkennt man den positiven Überlauf. Entsprechend liegt ein negativer Überlauf vor, wenn bei der Addition von zwei negativen Zahlen ein positives Ergebnis entsteht. Bei der Addition einer positiven und einer negativen Zahl kann kein Überlauf entstehen, da der Betrag der Differenz dann kleiner ist als die eingegebenen Zahlen.

Das Auftreten eines Zweierkomplement-Überlaufes lässt sich auf einfache Weise dadurch erkennen, dass man wie in Abb. 7.38 den Übertrag $c_{N-1}$ in die Vorzeichenstelle

**Abb. 7.38.** Bildung des Zweierkomplement-Überlaufs OV
<!-- page-import:0711:end -->
