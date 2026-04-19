# Flip-Flops

<!-- page-import:0716:start -->
# Kapitel 8:
# Schaltwerke (Sequentielle Logik)

Ein Schaltwerk besteht aus einem Schaltnetz und einem zusätzlichen Speicher, in dem der aktuelle Zustand des Systems gespeichert wird. Abbildung 8.1 zeigt den schematischen Aufbau. Zusätzlich zum Schaltnetz erkennt man hier die Zustandsvariablen $Z$ und den Zustandsvariablen Speicher, der für die Zustandsvariablen $n$ Flip-Flops als Speicher enthält. Der Ausgangszustand $Y$ hängt hier im Unterschied zum Schaltnetz nicht nur von den Eingangsvariablen $X$ ab, sondern zusätzlich auch von dem aktuellen Zustand des Systems $Z$. Deshalb behandeln wir in den nächsten Abschnitten zunächst den Aufbau und die Wirkungsweise von Flip-Flops.

**Abb. 8.1.**  
Blockschaltbild eines Schaltwerks

## 8.1 Flip-Flops

Es gibt verschiedene Arten von Flip-Flops, die sich in ihrem Aufbau und der Funktionsweise grundlegend unterscheiden. In Abb. 8.2 sind die verschiedenen Varianten zusammengestellt. Bei den transparenten Flip-Flops gibt es einen Zustand, bei dem der Ausgang dem Eingangszustand folgt; daher kommt der Name "transparent". Bei Flip-Flops mit Zwischenspeicherung wird der Eingangszustand bei einer Taktflanke an den Ausgang übertragen; es gibt jedoch keinen Zustand, bei dem der Ausgang dem Eingang momentan folgt. In der untersten Zeile von Abb. 8.2 sind die verschiedenen Eingangskonfigurationen zusammengestellt, nach denen die Flip-Flops benannt werden. Man sieht, dass es bei den Flip-Flops mit D-Eingang Verwechslungsmöglichkeiten gibt. Deshalb ist es zweckmäßig, bei einem D-Flip-Flop immer anzugeben, ob man ein D-Latch oder D-Master-Slave Flip-Flop meint.

**Abb. 8.2.**  
Ausführungsformen von Flip-Flops

© Springer-Verlag GmbH Deutschland, ein Teil von Springer Nature 2019  
U. Tietze et al., *Halbleiter-Schaltungstechnik*
<!-- page-import:0716:end -->

<!-- page-import:0717:start -->
680  8. Schaltwerke (Sequentielle Logik)

Verstärker mit Mitkopplung

RS - Flip-Flop

**Abb. 8.3.** Mitgekoppelter Verstärker als Flip-Flop

## 8.1.1 Transparente Flip-Flops

### 8.1.1.1 Flip-Flop Grundschaltung

Abbildung 8.3 zeigt einen zweistufigen Verstärker. Da die beiden Verstärkerstufen in Emitterschaltung arbeiten und invertieren, ist die ganze Schaltung ein nicht-invertierender Verstärker. Daher ergibt sich bei der hier eingezeichneten Rückkopplung eine Mitkopplung; sie führt zu einem bistabilen Verhalten der Schaltung. Entweder ist der Transistor $T_1$ gesperrt und $T_2$ leitet oder umgekehrt. Dieser Zustand bleibt erhalten bis der zur Zeit gesperrte Transistor von außen über den $R$- oder $S$-Eingang leitend gemacht wird. Diese Eigenschaft verleiht der Schaltung bistabiles Verhalten, das man zur Speicherung eines Bits nutzt. Man erkennt die Symmetrie der Schaltung besser, wenn man sie in der für Flip-Flops üblichen Darstellung auf der rechten Seite von Abb. 8.3 zeichnet.

Man sieht, dass jeder Transistor mit den an seiner Basis angeschlossenen Widerständen ein NOR-Gatter bildet: Der Transistor $T_1$ wird leitend, wenn man an $R_1$ oder $R_2$ oder an beide eine positive Spannung anlegt. Mit dieser Erkenntnis kann man die Schaltung in eine Darstellung mit 2 Gattern umzeichnen und gelangt dann zu der Schaltung in Abb. 8.4. Dadurch ergibt sich der große Vorteil, dass man von der schaltungstechnischen Realisierung der Gatter unabhängig wird. Wenn man also zwei NOR-Gatter wie in Abb. 8.4 rückkoppelt, erhält man ein Flip-Flop. Es besitzt die komplementären Ausgänge $Q$ und $\overline{Q}$ und die beiden Eingänge $S$ (Set) und $R$ (Reset). Legt man den komplementären Eingangszustand $S = 1$ und $R = 0$ an, wird:

$$
\overline{Q} = \overline{S + Q} = \overline{1 + Q} = 0 \ , \quad Q = \overline{R + \overline{Q}} = \overline{0 + 0} = 1
$$

Die beiden Ausgänge nehmen also tatsächlich komplementäre Zustände an. Analog erhalten wir für $R = 1$ und $S = 0$ den umgekehrten Ausgangszustand. Macht man $R = S = 0$, bleibt der alte Ausgangszustand erhalten. Darauf beruht die Anwendung des $RS$-Flip-Flops

**Abb. 8.4.**  
$RS$-Flip-Flop aus NOR-Gattern

**Abb. 8.5.**  
Wahrheitstafel eines $RS$-Flip-Flops aus NOR-Gattern

| $S$ | $R$ | $Q$ | $\overline{Q}$ |
|---|---|---|---|
| 0 | 0 | $Q_{-1}$ | $\overline{Q}_{-1}$ |
| 0 | 1 | 0 | 1 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | (0) | (0) |
<!-- page-import:0717:end -->

<!-- page-import:0718:start -->
8.1 Flip-Flops 681

**Abb. 8.6.**  
$RS$-Flip-Flop aus NAND-Gattern

**Abb. 8.7.**  
Wahrheitstafel eines $RS$-Flip-Flops aus NAND-Gattern

| $\overline{S}$ | $\overline{R}$ | $Q$ | $\overline{Q}$ |
|---|---|---|---|
| 0 | 0 | (1) | (1) |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 1 |
| 1 | 1 | $Q_{-1}$ | $\overline{Q}_{-1}$ |

als Speicher. Für $R = S = 1$ werden beide Ausgänge gleichzeitig Null; der Ausgangszustand ist jedoch nicht mehr definiert, wenn $R$ und $S$ anschließend gleichzeitig Null werden. Deshalb ist der Eingangszustand $R = S = 1$ in der Regel nicht zulässig. Eine Übersicht über die Schaltzustände gibt die Wahrheitstafel in Abb. 8.5.

Im Abschnitt 6.2 haben wir gezeigt, dass sich eine logische Gleichung nicht ändert, wenn man alle Variablen negiert und die Rechenoperationen $(+)$ und $(\cdot)$ vertauscht. Wenn wir diese Regel hier anwenden, gelangen wir zu dem $RS$-Flip-Flop aus NAND-Gattern in Abb. 8.6, das dieselbe Wahrheitstafel wie in Abb. 8.5 besitzt. Man muss jedoch beachten, dass nun die Eingangsvariablen $\overline{R}$ und $\overline{S}$ auftreten. Da wir im folgenden das $RS$-Flip-Flop aus NAND-Gattern noch häufig einsetzen werden, haben wir seine Wahrheitstafel für die Eingangsvariablen $\overline{R}$ und $\overline{S}$ in Abb. 8.7 zusammengestellt.

### 8.1.1.2 Taktzustandgesteuerte RS-Flip-Flops

Häufig benötigt man ein $RS$-Flip-Flop, das nur zu einer bestimmten Zeit auf den Eingangszustand reagiert. Diese Zeit soll durch eine zusätzliche Taktvariable $C$ bestimmt werden. Abb. 8.8 zeigt ein solches statisch getaktetes $RS$-Flip-Flop. Für $C = 0$ ist $\overline{R} = \overline{S} = 1$. In diesem Fall speichert das Flip-Flop den alten Zustand. Für $C = 1$ wird:

$$
R = R' \quad \text{und} \quad S = S'
$$

Das Flip-Flop verhält sich dann wie ein normales $RS$-Flip-Flop.

### 8.1.1.3 Taktzustandgesteuerte D-Flip-Flops

Häufig möchte man ein Datenbit $D$ speichern. Um dazu das Flip-Flop in Abb. 8.8 zu benutzen, muss man komplementäre Eingangssignale $S, \overline{R}$ bilden. Dazu dient der Inverter $G_5$ in Abb. 8.9. Bei der so entstehenden Speicherzelle (Data Latch) wird $Q = D$, solange der Takt $C = 1$ ist. Dies erkennt man auch an der Wahrheitstafel in Abb. 8.10. Wegen dieser

**Abb. 8.8.** Transparantes $RS$-Flip-Flop mit Taktsteuerung, Schaltsymbol
<!-- page-import:0718:end -->

<!-- page-import:0719:start -->
682  8. Schaltwerke (Sequentielle Logik)

**Abb. 8.9.**  
Transparentes $D$-Flip-Flop ($D$-Latch)

| $C$ | $D$ | $Q$ |
|---|---|---|
| 0 | 0 | $Q_{-1}$ |
| 0 | 1 | $Q_{-1}$ |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

**Abb. 8.10.**  
Wahrheitstafel des transparenten $D$-Flip-Flops

Prinzip

Realisierung

**Abb. 8.11.** Neue Realisierung eines D-Latch

Eigenschaft wird die taktzustandgesteuerte Speicherzelle als transparentes $D$-Flip-Flop bezeichnet. Macht man $C = 0$, bleibt der gerade bestehende Ausgangszustand gespeichert.

Neuerdings gibt es eine ganz andere Realisierungsmöglichkeit für ein D-Latch: Der Ausgang eines D-Latch soll doch dem Dateneingang folgen solange der Takt $C = 1$ ist und sonst im alten Zustand verharren. Das ist aber die typische Anwendung für einen Multiplexer, wie er in Abb. 8.11 dargestellt ist. Dabei kommt die Speicherung des alten Zustands dadurch zustande, dass der Ausgang rückgekoppelt wird. Für die Realisierung des Multiplexers verwendet man in CMOS-Schaltungen meist ein Transmission-Gate wie es Abb. 8.11 zeigt. Da das Transmission-Gate keine Verstärkung besitzt, ist ein zusätzlicher Verstärker erforderlich, um das bistabile Verhalten eines Flip-Flops zu realisieren. Wenn man das nicht-invertierende Gatter mit 2 Invertern realisiert, ist eine Verwandtschaft zum konventionellen Flip-Flop gegeben. Das in Abb. 8.12 dargestellte Schaltsymbol eines D-Latch ist aber unabhängig von dem inneren Aufbau.

## 8.1.2 Flip-Flops mit Zwischenspeicherung

Für viele Anwendungen, wie z.B. Zähler und Schieberegister, sind die transparenten Flip-Flops ungeeignet. Für diese Anwendungen benötigt man Flip-Flops, die den Eingangszustand zwischenspeichern und ihn erst an den Ausgang übertragen, wenn die Eingänge bereits wieder verriegelt sind. Sie bestehen daher aus zwei Flip-Flops: dem „Master“-Flip-Flop am Eingang und dem „Slave“-Flip-Flop am Ausgang.

**Abb. 8.12.**  
Schaltsymbol eines $D$-Latch
<!-- page-import:0719:end -->

<!-- page-import:0720:start -->
8.1 Flip-Flops 683

**Abb. 8.13.**  
RS-Master-Slave-Flip-Flop

### 8.1.2.1 JK Master-Slave Flip-Flops

Abbildung 8.13 zeigt ein solches Master-Slave-Flip-Flop. Es ist aus zwei statisch getakteten $RS$-Flip-Flops gemäß Abb. 8.8 aufgebaut. Die beiden Flip-Flops werden durch den Takt $C$ komplementär zueinander verriegelt. Zur Invertierung des Taktes dient das NICHT-Gatter. Solange der Takt $C = 1$ ist, wird die Eingangsinformation in den Master eingelesen. Der Ausgangszustand bleibt dabei unverändert, da der Slave mit $\overline{C} = 0$ blockiert ist.

Wenn sich der Takt im Zustand $C = 0$ befindet, wird der Master blockiert. Auf diese Weise wird der Zustand eingefroren, der unmittelbar vor der negativen Taktflanke angelegen hat. Gleichzeitig wird der Slave freigegeben und damit der Zustand des Masters an den Ausgang übertragen. Die Datenübertragung findet also bei der negativen Taktflanke statt; es gibt jedoch keinen Taktzustand, bei dem sich die Eingangsdaten unmittelbar auf den Ausgang auswirken, wie es bei den transparenten Flip-Flops der Fall ist, da die beiden Latches mit komplementären Takten angesteuert werden.

Die Eingangskombination $R = S = 1$ führt auch hier zu einem undefinierten Verhalten. Um sie sinnvoll zu nutzen, legt man in diesem Fall die komplementären Ausgangsdaten an die Eingänge. Dazu dienen die in Abb. 8.14 dick eingezeichnete Rückkopplung über die Gatter $G_1$ und $G_2$. Die äußeren Eingänge werden dann als $J$- bzw. $K$-Eingang bezeichnet.

Wegen der Rückkopplung muss für den Betrieb des $JK$-Flip-Flops jedoch eine wichtige *einschränkende Voraussetzung* gemacht werden: Die Wahrheitstafel in Abb. 8.16 gilt nur dann, wenn sich der Zustand an den $JK$-Eingängen nicht ändert, solange der Takt $C = 1$ ist. Im Unterschied zum $RS$-Master-Slave-Flip-Flop in Abb. 8.13 kann das Master-Flip-Flop hier nur einmal umkippen und nicht mehr zurück, da eines der beiden Eingangs-UND-Gatter immer über die Rückkopplung blockiert ist. Bei der negativen Taktflanke wird in jedem Fall der Zustand des Master-Flip-Flops an den Slave übertragen, den es vor der negativen Taktflanke hatte. Das ist aber nicht der Zustand gemäß der Wahrheitstafel in Abb. 8.16, falls sich die JK-Eingänge ändern während der Takt $C = 1$ ist. Um dies zu vermeiden, dürfen sich die $JK$-Eingänge in dieser Zeit nicht ändern. Dann werden

**Abb. 8.14.** $JK$-Master-Slave-Flip-Flop
<!-- page-import:0720:end -->

<!-- page-import:0721:start -->
684  8. Schaltwerke (Sequentielle Logik)

**Abb. 8.15.**  
Schaltsymbol eines $J\ K$-Master-Slave-Flip-Flops

**Abb. 8.16.**  
Ausgangszustand eines $J\ K$-Master-Slave-Flip-Flops nach einem (010) Taktzyklus

| $J$ | $K$ | $Q$ |
|---|---|---|
| 0 | 0 | $Q_{-1}$ (unverändert) |
| 0 | 1 | 0 |
| 1 | 0 | 1 |
| 1 | 1 | $\overline{Q}_{-1}$ (invertiert) |

$(Q = J)$

die Daten bei der negativen Taktflanke an den Ausgang übertragen, die vor der positiven Taktflanke am Eingang angelegen haben. Diese Verzögerung kennzeichnet man häufig im Schaltsymbol in Abb. 8.15 mit Verzögerungszeichen an den Ausgängen.

### 8.1.2.2 D Master-Slave Flip-Flops

Flip-Flops mit Zwischenspeicherung lassen sich auch dadurch realisieren, dass man zwei transparente $D$-Flip-Flops (Abb. 8.12 auf S. 682) in Reihe schaltet und sie mit komplementärem Takt ansteuert. Dadurch gelangt man zu der Schaltung in Abb. 8.17. Solange der Takt $C = 0$ ist, folgt der Master dem Eingangssignal, und es wird $Q_1 = D$. Der Slave speichert währenddessen den alten Zustand. Wenn der Takt auf 1 geht, wird die in diesem Augenblick anliegende Information $D$ im Master eingefroren und an den Slave und damit an den $Q$-Ausgang übertragen. In der übrigen Zeit ist der Zustand des $D$-Eingangs ohne Einfluss.

Man sieht, dass die Zwischenspeicherung beim $J\ K$- und $D$-Master-Slave-Flip-Flop dadurch erreicht wird, dass entweder der Master oder der Slave mit einem invertierten Takt angesteuert werden. Dadurch wird sicher gestellt, dass die Master-Slave Flip-Flops in keinem Taktzustand transparent sind. Ein Unterschied besteht lediglich darin, dass beim $J\ K$ Flip-Flop der Takt für den Slave invertiert wird, beim $D$-Flip-Flop dagegen für den Master. Die Konsequenz ist, dass der Ausgang des $J\ K$-Flip-Flops sich bei der negativen Flanke ändert, der des $D$-Flip-Flops bei der positiven.

**Abb. 8.17.**  
Flankengesteigertes $D$-Flip-Flop

**Abb. 8.18.**  
Schaltsymbol des $D$-Master-Slave-Flip-Flop

**Abb. 8.19.**  
Ausgangszustand eines $D$-Master-Slave-Flip-Flops nach einer positiven Taktflanke

| $D$ | $Q$ |
|---|---|
| 0 | 0 |
| 1 | 1 |
<!-- page-import:0721:end -->

<!-- page-import:0722:start -->
8.1 Flip-Flops 685

**Abb. 8.20.**  
Erweiterung eines D-Flip-Flops zum JK-Flip-Flop

| $J$ | $K$ | $D$ |
|---|---|---|
| 0 | 0 | $Q$ |
| 0 | 1 | 0 |
| 1 | 0 | 1 |
| 1 | 1 | $\overline{Q}$ |

**Abb. 8.21.**  
Wahrheitstafel des virtuellen JK-Flip-Flops

## 8.1.3 Zeitverhalten von Flip-Flops

### 8.1.3.1 Vergleich JK- und D-Flip-Flops

In Abb. 8.22 ist der zeitliche Verlauf der Eingangs- und Ausgangssignale von D- und JK-Flip-Flops gegenübergestellt. Bei den D-Flip-Flops werden die Daten an den Ausgang übertragen, die während der positiven Taktflanke am Eingang angelegen haben. Beim JK-Flip-Flop erscheinen die neuen Daten bei der negativen Taktflanke am Ausgang, müssen aber bereits vor der positiven Taktflanke den stationären Wert angenommen haben, da sie sich nicht ändern dürfen solange der Takt $C = 1$ ist. Man erkennt, dass für die Bildung der neuen Eingangssignale beim JK-Flip-Flop nur die Zeit zur Verfügung steht, in der der Takt $C = 0$ ist, während bei D-Flip-Flops fast die ganze Taktperiodendauer zur Verfügung steht. Aus diesem Grund werden JK-Flip-Flops, die nach Abb. 8.14 aufgebaut sind, nicht mehr eingesetzt.

Wenn man heute Flip-Flops mit JK-Eingängen benötigt, simuliert man sie mit D-Flip-Flops. Diese Möglichkeit ist in Abb. 8.20 dargestellt. Die Funktionsweise kann man anhand der Wahrheitstafel in Abb. 8.21 verstehen:

- Für $J = K = 0$ wird $Q$ rückgekoppelt, der Zustand bleibt also unverändert
- Für komplementäre Eingangszustände wird $D$ auf 0 bzw. 1 gesetzt
- Für $J = K = 1$ wird $\overline{Q}$ rückgekoppelt, das Flip-Flop toggelt also

In der Hardware von PLDs und FPGAs sind durchweg nur D-Master-Slave Flip-Flops realisiert. Die "Device Fitter", die einen Entwurf in das PLD oder FPGA umsetzen, simlie-

**Abb. 8.22.** Zeitverhalten von JK- und D-Flip-Flops
<!-- page-import:0722:end -->

<!-- page-import:0723:start -->
686 8. Schaltwerke (Sequentielle Logik)

ren JK-Flip-Flops nach der gezeigten Methode bei Bedarf. Der Vorteil der JK-Flip-Flops, die auf D-Flip-Flops basieren ist, dass sich ihre JK-Eingänge auch ändern dürfen während $C = 1$ ist und genauso viel Verarbeitungszeit bieten wie D-Flip-Flops.

### 8.1.3.2 Metastabilität

Im Prinzip überträgt ein D-Master-Slave Flip-Flop die Daten an den Ausgang, die bei der positiven Taktflanke angelegen haben. Der sonstige Signalverlauf des D-Eingangs ist gleichgültig. Damit das Flip-Flop richtig arbeitet, muss das D-Signal allerdings kurz vor und nach der positiven Taktflanke konstant sein. Dies ist in Abb. 8.22 angedeutet und in Abb. 8.23 genauer dargestellt. Die Zeit vor der positiven Taktflanke heißt setup time, die danach hold time. Bei einem synchronen Schaltwerk gemäß Abb. 8.1 folgt daraus, dass die Ausgangssignale des Schaltnetzes bis zum Beginn der setup time einen stationären Wert liefern müssen. Für das Schaltnetz steht also die Verarbeitungszeit

$$
t_{Netz} = T - t_{setup} - t_{delay} = T - t_{setup} - t_{prop} - t_{meta}
$$

zur Verfügung. Komplizierter sind die Verhältnisse, wenn asynchrone Daten wie in Abb. 8.24 an den D-Eingang angelegt werden. Dann ist es unvermeidbar, dass die setup- und hold-time gelegentlich verletzt werden. Wenn sich sich die Daten während dieser Zeiten ändern, gibt es zwei Probleme:

- Der Zustand, den das Flip-Flop annimmt ist ungewiss. Das ist auch nicht anders zu erwarten, da es unvorhersehbar ist, ob noch die alten oder schon die neuen Daten übernommen werden. Die neuen Daten werden aber spätestens beim nächsten Takt übernommen.
- Die Einschwingzeit des Flip-Flops vergrößert sich: Das Flip-Flop geht vorübergehend in einen metastabilen Zustand, aus dem es unter Umständen erst nach längerer Zeit zurückkehrt. Dann vergrößert sich die reguläre Einschwingzeit $t_{prop}$ um die Metastabilitätsdauer $t_{meta}$ auf den Wert:

$$
t_{delay} = t_{prop} + t_{meta}
$$

Abb. 8.23. Metastabilität als Folge der Verletzung von Setup- und Holdzeit
<!-- page-import:0723:end -->

<!-- page-import:0724:start -->
8.1 Flip-Flops 687

Wie stark sich die Delay-Zeit eines Flip-Flops verlängert, hängt davon ab, wie schwerwiegend die Verletzung der Setup- oder Hold-Zeit ist. Das erkennt man in dem Diagramm über die Metastabilitätsdauer in Abb. 8.23. Der ungünstigste Fall, der gestrichelt eingezeichnet ist, tritt ein, wenn sich die Daten während der positiven Taktflanke ändern. Während der metastabilen Phase geht der Ausgang des Flip-Flops auf einen Pegel, der ungefähr in der Mitte zwischen dem High- und Low-Pegel liegt.

Man kann den metastabilen Zustand im Energiemodell des Flip-Flops in Abb. 8.23 veranschaulichen: Während der metastabilen Phase befindet sich der Zustand des Flip-Flops energetisch auf einer Bergspitze zwischen dem High- und Low-Zustand in einem labilen Gleichgewicht. Wie lange es dauert bis das Flip-Flop in einen oder anderen stabilen Grundzustand übergeht, hängt davon ab, wie spitz der Berg ist. Das wird von der Transitfrequenz der Gatter bestimmt, die das Flip-Flop bilden. Je größer die Transitfrequenz ist, desto spitzer wird der Berg und desto geringer wird die Dauer der Metastabilität. Wenn sich die Daten nicht im ungünstigsten Augenblick, also bei der positiven Taktflanke, ändern, wird der Zustand des Flip-Flops im Energiemodell nicht auf die Spitze des Bergs gesetzt, sondern auf eine Flanke, aus der es schneller und definiert in einen stabilen Zustand übergeht. Alle getakteten Flip-Flops besitzen das Metastabilitäts-Problem; nicht nur die D-Master-Slave Flip-Flops, bei denen diese Effekt hier erklärt wurde.

Das Problem der Metastabilität ist deshalb so ernst zu nehmen, weil nicht nur das Flip-Flop spinnt, das von der Metastabilität betroffen ist, sondern auch die nachfolgenden Schaltungen, die den unerwarteten Ausgangspegel, der im undefinierten Bereich zwischen High und Low liegt, nicht interpretieren können. Man erkennt in Abb. 8.23, dass sich die Verarbeitungszeit durch die Metastabilität verkürzt. Aus (8.1) lässt sich die maximale Metastabilitätsdauer berechnen:

$$
t_{meta,max} = T - t_{setup} - t_{prop} - t_{Netz}
$$

Wenn die Dauer der Metastabilität diesen Wert überschreitet, muss mit einer Fehlfunktion des Geräts gerechnet werden. Die Zeitdauer zwischen zwei durch Metastabilität bedingten Fehlfunktionen wird als $MTBF$ (Mean Time Between Failures) bezeichnet. Sie lässt sich berechnen gemäß:

$$
MTBF = \frac{1}{f_D f_C T_0} e^{t_{meta,max}/\tau}
$$

Darin sind $T_0$ und $\tau$ Parameter des verwendeten Flip-Flops; die bei dem 74ALS74 den Wert $T_0 = 8{,}7\ \mu s$ und $\tau = 1\ ns$ besitzen. Die Taktfrequenz des Systems ist $f_C$, die Frequenz der asynchronen Daten ist $f_D$. Man strebt an, dass ein Fehler im Mittel höchstens einmal während der Lebensdauer des Geräts auftritt, also $MTBF \geq 10$ Jahre. Da man in der Regel die Parameter der verwendeten Flip-Flops nicht kennt, kann man die Größe von $MTBF$ nicht ausrechnen. Die Gleichung zeigt aber, dass die $MTBF$ mit zunehmender Frequenz des Takts und Daten abnimmt. Das ist auch offensichtlich, da eine Verletzung der Setup- und Holdzeit mit zunehmender Frequenz wahrscheinlicher wird. Aus diesem Grund ist es zweckmäßig, die Flip-Flops zur Synchronisation nicht mit der vollen Taktfrequenz des synchronen Schaltwerks zu betreiben, sondern – wie in Abb. 8.24 dargestellt – über einen Taktteiler mit einer niedrigeren Frequenz.

Verbessern lässt sich die $MTBF$ durch die ebenfalls in Abb. 8.24 gezeigte Doppel-Pufferung. Hier fällt die Verarbeitungszeit zwischen dem Flip-Flop $F\ F_2$ und $F\ F_3$ weg und die maximal zulässige Metastabilitätsdauer $t_{meta,max}$ ist fast gleich der Taktdauer
<!-- page-import:0724:end -->

<!-- page-import:0725:start -->
688 8. Schaltwerke (Sequentielle Logik)

**Abb. 8.24.** Synchronisation asynchroner Daten: Einfach-Pufferung (oben), Doppel-Pufferung (unten)

$T = 1/f_C$. Durch die Doppelpufferung werden die externen Daten zwar um zwei Takte der $f_C$-Clock verzögert, das ist aber normalerweise kein Problem.

## 8.1.4 Flip-Flops für Zähler

Man erkennt an der Wahrheitstafel in Abb. 8.16, dass sich der Ausgangszustand eines JK-Master-Slave Flip-Flops für $J = K = 1$ bei jedem Takt invertiert. Das ist gleichbedeutend mit einer Frequenzteilung durch zwei, wie Abb. 8.25 zeigt. Sie ermöglichen einen besonders einfachen Aufbau von Zählern. Deshalb wurden Zähler früher überwiegend aus diesen Flip-Flops aufgebaut.

Einflankengesteiggerte $D$-Flip-Flops lassen sich ebenfalls als Toggle-Flip-Flops betreiben. Dazu macht man wie in Abb. 8.26 $D = \overline{Q}$. Dann invertiert sich der Ausgangszustand bei jeder positiven Taktflanke. Dies veranschaulicht Abb. 8.26. Beim Einsatz transparenter $D$-Flip-Flops würde man statt der Frequenzteilung eine Dauerschwingung erhalten, solange der Takt $C = 1$ ist, da dann wegen des unverriegelten Signaldurchlaufs jeweils nach Ablauf einer Durchlaufzeit eine Invertierung erfolgen würde.

Häufig benötigt man Flip-Flops, die nicht bei jedem Takt toggeln, sondern nur in Abhängigkeit von einer Toggle-Variablen. Dazu kann man beim D-Flip-Flop wahlweise

**Abb. 8.25.** $J\ K$-Master-Slave-Flip-Flop als Frequenzteiler

**Abb. 8.26.** $D$-Flip-Flop als Frequenzteiler
<!-- page-import:0725:end -->

<!-- page-import:0726:start -->
8.1 Flip-Flops 689

**Abb. 8.27.**  
Toggle-Flip-Flop

**Abb. 8.28.**  
Wahrheitstafel

| T | Q |
|---|---|
| 0 | $Q_{-1}$ |
| 1 | $\overline{Q}_{-1}$ |

das $\overline{Q}$ bzw. $Q$ auf den $D$-Eingang rückkoppeln wie in Abb. 8.27 zeigt. Gesteuert wird der Multiplexer vom Toggle-Eingang $T$; die Funktionsweise ist in der Wahrheitstafel in Abb. 8.28 zusammengefasst.

Noch universellere Flip-Flops ergeben sich, wenn man zusätzlich die Möglichkeit zur synchronen Dateneingabe schafft. Dazu kann man dem Multiplexer vor dem $D$-Eingang einen weiteren Eingang geben, der wie in Abb. 8.29 über den Load-Eingang $L$ angewählt wird. Für $L = 1$ wird $y = D$ und damit nach dem nächsten Takt $Q = D$. Für $L = 0$ arbeitet die Schaltung genauso wie die in Abb. 8.27. Die Funktionsweise dieses Multifunktions-Flip-Flops ist in Abb. 8.30 zusammengestellt.

Das Schaltsymbol in Abb. 8.29 zeigt die Funktionsweise des Multifunktions-Flip-Flops in der Abhängigkeitsnotation gemäß DIN 40900 Teil 12. Man unterscheidet 2 Bereiche: Den Steuerkopf und den damit gesteuerten Körper. Die Zahlen hinter den Symbolen $L, C$ sind beliebige Referenzen; sie zeigen auf die Eingänge, die von ihnen gesteuert werden. Bei den Eingängen stehen die Ziffern der steuernden Signale davor. Im Betrieb Load $L = 1$ werden die Daten eingelesen. Die Bezeichnung 1,2D zeigt an, dass die Daten mit Taktsteuerung, also taktsynchron übernommen werden; das Komma bedeutet also eine UND-Verknüpfung. Wenn die Load-Variable $L = 0$ ist, also $\overline{2}$ wahr ist, wird der Toggle-Eingang freigegeben: In dieser Betriebsart toggelt das Flip-Flop, wenn die Toggle-

**Abb. 8.29.** Realisierung von Multifunktions-Flip-Flops

**Abb. 8.30.**  
Funktionstabelle eines Multifunktions-Flip-Flops

| L | T | Q |
|---|---|---|
| 0 | 0 | $Q_{-1}$ |
| 0 | 1 | $\overline{Q}_{-1}$ |
| 1 | 0 | $D$ |
| 1 | 1 | $D$ |
<!-- page-import:0726:end -->
