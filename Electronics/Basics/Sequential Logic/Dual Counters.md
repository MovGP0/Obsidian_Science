# Dual Counters

<!-- page-import:0727:start -->
690 8. Schaltwerke (Sequentielle Logik)

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
| 10 | 1 | 0 | 1 | 0 |
| 11 | 1 | 0 | 1 | 1 |
| 12 | 1 | 1 | 0 | 0 |
| 13 | 1 | 1 | 0 | 1 |
| 14 | 1 | 1 | 1 | 0 |
| 15 | 1 | 1 | 1 | 1 |
| 16 | 0 | 0 | 0 | 0 |

**Abb. 8.31.**  
Zeitlicher Verlauf der Ausgangszustände eines dualen Vorwärtszählers

**Abb. 8.32.**  
Zustandstabelle eines Dualzählers

Variable $T = 1$ ist bei jedem Takt. Der Körper des Symbols könnte noch weitere D-Kanäle enthalten, die von denselben Variablen gesteuert werden.

## 8.2 Dualzähler

Eine wichtige Gruppe von Schaltwerken sind die Zähler. Als Zähler kann man jede Schaltung verwenden, bei der innerhalb gewisser Grenzen eine eindeutige Zuordnung zwischen der Zahl der eingegebenen Impulse und dem Zustand der Ausgangsvariablen besteht. Da jede Ausgangsvariable nur zwei Werte annehmen kann, gibt es bei $N$ Ausgängen $2^N$ mögliche Kombinationen. Oft wird aber nur ein Teil der möglichen Kombinationen ausgenutzt. Welche Zahl durch welche Kombination dargestellt werden soll, ist an und für sich beliebig. Zweckmäßigerweise wählt man jedoch im Zähler eine Zahlendarstellung, die sich leicht verarbeiten lässt. Zu den einfachsten Schaltungen gelangt man bei der reinen Dualdarstellung.

Abbildung 8.32 zeigt die entsprechende Zuordnung zwischen der Zahl der Eingangsimpulse $Z$ und den Werten der Ausgangsvariablen $z_i$ für einen 4 bit-Dualzähler. Liest man diese Abbildung von oben nach unten, kann man zwei Gesetzmäßigkeiten erkennen:

1) Eine Ausgangsvariable $z_i$ ändert dann ihren Wert, wenn die nächst niedrigere Variable $z_{i-1}$ von 1 auf 0 geht.

2) Eine Ausgangsvariable $z_i$ ändert immer dann ihren Wert, wenn alle niedrigeren Variablen $z_{i-1} \ldots z_0$ den Wert 1 besitzen und ein neuer Zählimpuls eintrifft.

Diese Gesetzmäßigkeiten kann man auch aus dem Zeitdiagramm in Abb. 8.31 ablesen. Die Gesetzmäßigkeit 1) führt auf die Realisierung eines Zählers nach dem Asynchron-Verfahren, die Gesetzmäßigkeit 2) führt auf das Synchron-Verfahren.
<!-- page-import:0727:end -->

<!-- page-import:0728:start -->
8.2 Dualzähler 691

**Abb. 8.33.** Asynchroner Dualzähler

Gelegentlich benötigt man Zähler, bei denen sich der Zählerstand mit jedem Zählimpuls um Eins verringert. Die Gesetzmäßigkeiten für einen solchen *Rückwärtszähler* kann man ebenfalls aus der Abb. 8.32 entnehmen, indem man sie von unten nach oben liest. Daraus ergibt sich:

1a) Eine Ausgangsvariable $z_i$ ändert beim Rückwärtszähler immer dann ihren Wert, wenn die nächst niedrigere Variable $z_{i-1}$ von 0 auf 1 geht.

2a) Eine Ausgangsvariable $z_i$ ändert beim Rückwärtszähler immer dann ihren Wert, wenn alle niedrigeren Variablen $z_{i-1}\dots z_0$ den Wert 0 besitzen und ein neuer Zählimpuls eintrifft.

## 8.2.1 Asynchroner Dualzähler

Ein asynchroner Dualzähler lässt sich gemäß der Zählbedingung 1) dadurch realisieren, dass man wie in Abb. 8.33 eine Kette von Flip-Flops aufbaut und deren Takteingang jeweils am Ausgang des vorhergehenden Flip-Flops anschließt. Wenn man dazu D-Flip-Flops am Q-Ausgang des vorhergehenden Flip-Flops anschließt, erhält man einen Rückwärtszähler, da sich der Ausgang jeweils ändert, wenn das vorhergehende Flip-Flop auf $Q = 1$ geht. Damit sich eine Vorwärts-Zählfunktion ergibt, müssen die Flip-Flops ihren Ausgangszustand ändern, wenn das vorhergehende Flip-Flop von 1 auf 0 geht. Deshalb muss man den Takt-Eingang der D-Flip-Flops am $\overline{Q}$-Ausgang des vorhergehenden Flip-Flops anschließen.

Bei Asynchronzählern gibt es jedoch ein Problem: Der Ausgang eines Flip-Flops ändert sich nicht momentan, sondern erst nach der Schaltzeit $t_{prop}$, die in Abb. 8.23 eingezeichnet ist. Das führt dazu, dass jedes Flip-Flop um diese Zeit gegenüber seinem Vorgänger verzögert umkippt und sich die Verzögerungen gegenüber dem Takteingang summieren. Das Umkippen der Flip-Flops entspricht dem von Domino-Steinen. In Abb. 8.34 sieht man, dass sich dadurch vorübergehend falsche Zählerstände ergeben. Wenn die Summe der Verzögerungszeiten größer ist als die Taktdauer, ändert das erste Flip-Flip seinen Zustand

**Abb. 8.34.** Auftreten unerwünschter Übergangszustände beim Asynchronzähler, die durch die Laufzeit in den Flip-Flops verursacht werden. Die unterste Zeile gibt den Zählerstand dezimal an.
<!-- page-import:0728:end -->

<!-- page-import:0729:start -->
692 8. Schaltwerke (Sequentielle Logik)

**Abb. 8.35.** Synchroner Dualzähler

bevor die vorherige Änderung durch die ganze Kette hindurchgelaufen ist. Dann kann man den Zählerstand nie ablesen. Aus diesem Grund verwendet man Asynchronzähler nur als Frequenzteiler wie z.B. in Quarzuhren, um die Frequenz des 32kHz-Quarzes auf 1Hz herunterzuteilen. Diese frequenzteilende Eigenschaft ist in Abb. 8.34 gut zu erkennen.

## 8.2.2 Synchrone Dualzähler

Bei den *synchronen* Zählern summieren sich die Schaltzeiten der Flip-Flops nicht, da hier alle Flip-Flops gleichzeitig mit dem Eingangstakt betrieben werden. Damit nicht bei jedem Takt alle Flip-Flops umkippen, verwendet man steuerbare Toggle-Flip-Flops nach Abb. 8.27 auf S. 689, die nur umkippen, wenn die Steuervariable $T = 1$ ist. Die Kippbedingung lautet nach Abb. 8.32: Ein Flip-Flop eines Dualzählers darf nur dann umkippen, wenn alle niederwertigeren Flip-Flops Eins sind. Um dies zu realisieren, macht man $T_0 = 1$, $T_1 = z_0$, $T_2 = z_0 \cdot z_1$ und $T_3 = z_0 \cdot z_1 \cdot z_2$. Die dazu erforderlichen UND-Verknüpfungen erkennt man in Abb. 8.35. In dem Zeitdiagramm in Abb. 8.36 sieht man, dass sich die Ausgänge aller Flip-Flops gleichzeitig ändern: Nämlich um eine Schaltzeit nach der positiven Taktflanke.

Zur Realisierung von Synchronzählern mit größerer Wortbreite kann man die in Abb. 8.35 gezeigte Schaltung nach dem gezeigten Prinzip beliebig erweitern. Häufig möchte man jedoch mit vordefinierten 4bit-Zählern arbeiten, die man häufig in einer Bibliothek findet. In diesem Fall muss der Zählerblock einen zusätzlichen Übertrags-Eingang und -Ausgang besitzen.

Bei der Schaltung in Abb. 8.37 blockiert der *ENT*-Eingang (ENable Toggle) alle Flip-Flops des Zählers mit einer Null an jedem Toggle Eingang. Es reicht hier nicht aus, lediglich das erste Flip-Flop zu sperren, denn wenn es den Zustand $Q = 1$ besitzt, könnte das nachfolgende Flip-Flop trotzdem toggeln. Die Übertragsvariable am Ausgang *RCO* (Ripple

**Abb. 8.36.** Zeitverlauf im Synchronzähler. Man beachte, dass sich alle Ausgänge gleichzeitig ändern, gegenüber dem Takt um die Laufzeit durch die Flip-Flops verzögert.
<!-- page-import:0729:end -->

<!-- page-import:0730:start -->
8.2 Dualzähler 693

*ENT* = Enable Toggle  *RCO* = Ripple Carry Output

**Abb. 8.37.** Zusätze für Synchronen Übertrag am Eingang und am Ausgang

Carry Output) darf nur dann 1 werden, wenn alle Flip-Flops des Zähler-Blocks 1 sind und alle vorhergehenden Flip-Flops, die durch den *ENT*-Eingang erfasst werden, ebenfalls 1 sind:

$$
RCO = ENT \cdot z_0 \cdot z_1 \cdot z_2 \cdot z_3
$$

Dieser Übertrag wird durch das UND-Gatter am Ausgang gebildet.

Die Übertragslogik lässt sich vereinfachen, wenn man die erforderliche UND-Verknüpfung gemäß Abb. 8.38 seriell durchführt. Dadurch spart man zwar Gatter-Eingänge, die Gatterlaufzeiten, die die Verarbeitungszeit in Abb. 8.22 bestimmen, addieren sich aber. Die maximale Taktfrequenz wird dadurch nennenswert eingeschränkt.

Vielstellige Zähler lassen sich durch Kaskadierung mehrerer Zählerblöcke realisieren. Abbildung 8.39 zeigt ein Beispiel für einen 16 bit Zähler, der aus vier 4bit Zählern besteht. Durch die Kopplung über die *RCO-ENT*-Leitung wird die Kippbedingung für Synchronzähler sicher gestellt: Ein Flip-Flop darf nur dann kippen, wenn alle Vorgänger im Zustand 1 sind.

Durch die kaskadierte UND-Verknüpfung summieren sich allerdings auch hier die Laufzeiten. Dadurch ergibt sich bei vielstelligen Zählern eine Reduzierung der maximal möglichen Zählfrequenz. Deshalb sollte man auch hier den Übertrag für die *ENT*-Eingänge parallel bilden.

**Abb. 8.38.** Vereinfachte Übertraglogik, bei stark vergrößerter Gatterlaufzeit
<!-- page-import:0730:end -->

<!-- page-import:0731:start -->
694  8. Schaltwerke (Sequentielle Logik)

**Abb. 8.39.** Kaskadierung von synchronen Zählstufen. $1CT = 15$ bedeutet, dass $RCO$ nur dann 1 wird, wenn $ENT = 1$ *und* der ConTents $CT = 15$ ist.

## 8.2.3 Vorwärts-Rückwärts-Zähler

Bei den Vorwärts-Rückwärts-Zählern unterscheidet man zwei Typen: Solche mit einem Takt-Eingang und einem zweiten Eingang, der die Zählrichtung bestimmt, und solche, die zwei Takt-Eingänge besitzen, von denen der eine den Zählerstand erhöht und der andere verringert.

### 8.2.3.1 Zähler mit umschaltbarer Zählrichtung

Die Kippbedingung für den Rückwärtszählbetrieb besagt nach Abb. 8.32, dass ein Flip-Flop dann umkippen muss, wenn alle niedrigeren Stellen Null sind. Um dies zu dekodieren, kann man die von Abb. 8.37 bekannte Logik zum Vorwärtszählen an den $\overline{Q}$-Ausgängen anschließen. Bei dem Zähler mit umschaltbarer Zählrichtung in Abb. 8.40 wird über die Vorwärts-Rückwärts-Umschaltung $\overline{U/D}$ entweder der obere Teil der Zähllogik zum Vorwärtszählen oder der untere Teil zum Rückwärtszählen freigegeben.

Ein Übertrag in die nächsthöhere Zählstufe kann in zwei Fällen auftreten, nämlich, wenn beim Vorwärtsbetrieb $(U/\overline{D} = 1)$ der Zählerstand 1111 ist, oder wenn beim Rück-

**Abb. 8.40.** Dualzähler mit Zählrichtungsumschaltung: $\overline{U/D} = UP/\overline{DOWN}$
<!-- page-import:0731:end -->
