# Shift Registers

<!-- page-import:0735:start -->
698  8. Schaltwerke (Sequentielle Logik)

**Abb. 8.48.**  
Einfachste Ausführung eines 4 bit Schieberegisters

*DI* = Data Input  
*DO* = Data Output  
*CLK* = Clock

generiert (s. Abb. 8.40 auf S. 694), den man dazu verwenden kann, den Zähler wieder neu zu laden.

## 8.5 Schieberegister

Schieberegister sind Ketten von Flip-Flops, die es ermöglichen, eine am Eingang angelegte Information mit jedem Takt um ein Flip-Flop weiter zu schieben. Nach dem Durchlaufen der Kette steht sie am Ausgang verzögert, aber sonst unverändert zur Verfügung.

### 8.5.1 Grundschaltung

Das Prinzip ist in Abb. 8.48 dargestellt. Mit dem ersten Takt wird die am Eingang anliegende Information $D_1$ in das Flip-Flop $F_1$ eingelesen. Mit dem zweiten Takt wird sie an das Flip-Flop $F_2$ weiter gegeben; gleichzeitig wird in das Flip-Flop $F_1$ eine neue Information $D_2$ eingelesen. Abbildung 8.49 verdeutlicht die Funktionsweise für das Beispiel eines Schieberegisters mit 4 bit Länge. Man erkennt, dass das Schieberegister nach vier Takten mit den seriell eingegebenen Daten gefüllt ist. Sie stehen dann an den vier Flip-Flop-Ausgängen $Q_1$ bis $Q_4$ parallel zur Verfügung, oder sie lassen sich mit weiteren Takten wieder seriell am Ausgang $Q_4$ entnehmen. Als Flip-Flops eignen sich alle Typen mit Zwischenspeicher. Transparente Flip-Flops sind ungeeignet, weil die am Eingang angelegte Information sonst sofort bis zum letzten Flip-Flop durchlaufen würde, wenn der Takt Eins wird.

### 8.5.2 Schieberegister mit Paralleleingabe

Wenn man wie in Abb. 8.50 vor jeden $D$-Eingang einen Multiplexer schaltet, kann man über den *LOAD*-Eingang auf Parallel-Eingabe umschalten. Mit dem nächsten Takt werden dann die Daten $d_1 \dots d_4$ parallel geladen und erscheinen an den Ausgängen $Q_1 \dots Q_4$. Auf diese Weise ist nicht nur eine Serien-Parallel-Wandlung sondern auch eine Parallel-Serien-Wandlung möglich.

| CLK | $Q_1$ | $Q_2$ | $Q_3$ | $Q_4$ |
|---|---|---|---|---|
| 1 | $D_1$ | – | – | – |
| 2 | $D_2$ | $D_1$ | – | – |
| 3 | $D_3$ | $D_2$ | $D_1$ | – |
| 4 | $D_4$ | $D_3$ | $D_2$ | $D_1$ |
| 5 | $D_5$ | $D_4$ | $D_3$ | $D_2$ |
| 6 | $D_6$ | $D_5$ | $D_4$ | $D_3$ |
| 7 | $D_7$ | $D_6$ | $D_5$ | $D_4$ |

**Abb. 8.49.**  
Funktionstabelle eines 4 bit-Schieberegisters
<!-- page-import:0735:end -->

<!-- page-import:0736:start -->
8.5 Schieberegister 699

**Abb. 8.50.** Schieberegister mit parallelen Ladeeingängen

**Abb. 8.51.** Schieberegister mit umschaltbarer Schieberichtung

$DIR$ = Data Input rechts  
$DIL$ = Data Input links  
$L/\overline{R}$ = Umschaltung links/rechts

$DOR$ = Data Output rechts  
$DOL$ = Data Output links

Ein Schieberegister mit parallelen Ladeeingängen lässt sich auch als Vorwärts-Rückwärts-Schieberegister betreiben. Dazu schließt man wie in Abb. 8.51 die parallelen Ladeeingänge jeweils am Ausgang des rechten benachbarten Flip-Flops an. Dann ergibt sich für $L/\overline{R} = 1$ eine Datenverschiebung von rechts nach links.

Bei einem normalen Schieberegister werden die Daten am Eingang eingegeben und durch das Register hindurch geschoben; danach sind sie weg oder durch neue ersetzt. Man kann jedoch die im Schieberegister vorhandenen Daten wieder am Eingang einlesen und

**Abb. 8.52.** Schieberegister als Umlaufspeicher
<!-- page-import:0736:end -->

<!-- page-import:0737:start -->
700  8. Schaltwerke (Sequentielle Logik)

**Abb. 8.53.** Pseudozufallsgenerator, Grundschaltung für 4 bit

auf diese Weise zirkulieren lassen. Dazu dient der Multiplexer in Abb. 8.52. Wenn der Eingang Ring = 1 ist, wird $Q_4$ rückgekoppelt und die Daten im Schieberegister werden vorne wieder eingelesen.

## 8.5.3 Erzeugung von Pseudozufallsfolgen

Man kann ein Schieberegister auch so rückkoppeln, dass es selber Daten erzeugt. Dazu verwendet man das EXOR-Gatter in Abb. 8.53. Wenn man davon ausgeht, dass zu Beginn nur $Q_1 = 1$ ist, durchläuft das Schieberegister die in Abb. 8.55 dargestellten Zustände; das kann man leicht verifizieren, wenn man die Wahrheitstafel des EXOR-Gatters in Abb. 6.13 berücksichtigt. Man sieht, dass die Schaltung nach 15 Takten wieder im Anfangszustand angekommen ist. Bei den 15 Takten treten alle möglichen Zahlenkombinationen auf, nur die Null nicht. Sie muss verhindert werden, weil das Schieberegister sonst in diesem Zustand verharren würde. Um das sicher zu stellen, dekodiert man die Null mit der zusätzlichen Logik in Abb. 8.54 und schreibt in diesem Fall eine 1 in das erste Flip-Flop. Im Normalbetrieb ist diese Zusatzlogik jedoch unwirksam, da die Null bei der regulären Folge nie auftritt.

In den Abbildungen 8.55 und 8.56 erkennt man, dass die Folge der Zustände

$$
Z = Q_4 \cdot 2^3 + Q_3 \cdot 2^2 + Q_2 \cdot 2^1 + Q_1 \cdot 2^0
$$

zufällig erscheint und nicht wie bei einem Zähler von einer Zahl zur nachfolgenden geht. Es handelt sich aber um keine echte Zufallsfolge, weil sie sich hier nach 15 Takten wiederholt; deshalb spricht man von einer Pseudozufallsfolge. Da alle Zahlen - bis auf die Null - genau einmal auftreten, handelt es sich hier um einen Maximallängen-Generator. An welchem

**Abb. 8.54.** Pseudozufallsgenerator mit Startschaltung
<!-- page-import:0737:end -->

<!-- page-import:0738:start -->
8.5 Schieberegister 701

| CLK | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Q1 | 1 | 0 | 0 | 1 | 1 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 1 |
| Q2 | 0 | 1 | 0 | 0 | 1 | 1 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | 0 | 0 | 0 |
| Q3 | 0 | 0 | 1 | 0 | 0 | 1 | 1 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | 0 | 0 |
| Q4 | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 1 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | 0 |
| DI | 0 | 0 | 1 | 1 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 1 | 0 |
| Z | 1 | 2 | 4 | 9 | 3 | 6 | 13 | 10 | 5 | 11 | 7 | 15 | 14 | 12 | 8 | 1 |

**Abb. 8.55.** Zustandstabelle des Pseudozufallsgenerators

Ausgang man die Pseudozufallsfolge abnimmt, ist gleichgültig, da an jedem Ausgang dieselbe Folge – lediglich zeitlich verschoben – auftritt.

Um größere Periodenlängen zu erhalten, muss man entsprechend längere Schieberegister verwenden. Bei einem Schieberegister mit 10 Stufen beträgt die Periodenlänge 1023 Taktimpulse, bei 20 Stufen 1048575. Um die maximale Periodenlänge von $n = 2^N - 1$ wirklich zu erreichen, muss man die Rückkopplungslogik an ganz bestimmten Ausgängen anschließen. Auf jeden Fall benötigt man den letzten Ausgang. Welche Ausgänge außerdem durch die Rückkopplungslogik verknüpft werden müssen, ist in Abb. 8.57 zusammengestellt. Man sieht, dass in den meisten Fällen 2 Rückkopplungspunkte ausreichen, bei bestimmten Register-Längen aber auch 4 Rückkopplungspunkte erforderlich sind. Neben den hier angegebenen Punkten gibt es jeweils noch eine symmetrische Lösung mit den

**Abb. 8.56.** Signalverlauf im Pseudozufallsgenerator
<!-- page-import:0738:end -->
