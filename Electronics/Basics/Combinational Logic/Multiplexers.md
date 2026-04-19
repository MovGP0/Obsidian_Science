# Multiplexers

<!-- page-import:0690:start -->
# Kapitel 7:
# Schaltnetze (Kombinatorische Logik)

Unter einem Schaltnetz versteht man eine Anordnung von Digital-Schaltungen ohne Variablenspeicher. Die Ausgangsvariablen $y_j$ werden gemäß dem Blockschaltbild in Abb. 7.1 eindeutig durch die Eingangsvariablen $x_i$ bestimmt. Bei Schaltwerken, die im folgenden Kapitel beschrieben werden, hingegen hängen die Ausgangsvariablen zusätzlich vom jeweiligen Zustand des Systems und damit von der Vorgeschichte ab.

Die Beschreibung eines Schaltnetzes – also die Zuordnung der Ausgangsvariablen zu den Eingangsvariablen – erfolgt mit Wahrheitstafeln oder Booleschen Funktionen. Zur Realisierung von Schaltnetzen denkt man primär an den Einsatz von Gattern. Dies ist aber nicht die einzige und meist auch nicht die beste Möglichkeit, wie Abb. 7.2 zeigt. Wenn die Nullen und Einsen in der Wahrheitstafel statistisch verteilt sind, wie z.B. bei einem Programmcode, würden die logischen Funktionen sehr umfangreich. In diesem Fall speichert man die Wahrheitstafeln vorteilhaft als Tabelle in einem ROM (s. Kap. 9.2 auf S. 719).

Wenn in der Wahrheitstafel wenige Einsen stehen, ergeben sich entsprechend wenige Produktterme in den logischen Funktionen. Sie können aber auch bei vielen Einsen einfach sein, wenn die zugrunde liegende Gesetzmäßigkeit hoch ist, wie z.B. bei der Funktion $y_j = \overline{x_i}$. Aus diesem Grund lohnt es sich immer, zu testen, ob sich die logischen Funktionen vereinfachen lassen. Das ist von Hand sowohl mit der Booleschen Algebra als auch mit dem Karnaugh-Diagramm mühsam. Deshalb setzt man im Zeitalter des computergestützten Schaltungsentwurf einen Simplifier für diese Aufgabe ein. Nur wenn sich dann wenige sehr einfache Funktionen ergeben, ist die Realisierung mit einzelnen Gattern z.B. aus der 7400-Familie zweckmäßig.

Wenn man viele z.T. komplizierte Funktionen realisieren muss, ergibt sich beim Einsatz von Gattern schnell das berüchtigte TTL-Grab. In diesem Fall ist der Einsatz von programmierbaren logischen Schaltungen (Programmable Logic Devices, PLD) ein großer Vorteil, weil sich dabei alle noch so komplizierten Funktionen mit einem einzigen Chip realisieren lassen, denn es gibt Bausteine mit über 100 Millionen Gattern. Im Prinzip werden die logischen Funktionen in PLDs genauso realisiert wie beim Einsatz von diskreten Gattern. Der Unterschied besteht lediglich darin, dass sich alle benötigten Gatter auf einem Chip befinden und durch die Programmierung die erforderlichen Verbindungen auf dem Chip hergestellt werden (s. Kap. 9.1 auf S. 713).

Darstellung mit Signalen

Darstellung mit Vektoren

**Abb. 7.1.** Blockschaltbild eines Schaltnetzes

© Springer-Verlag GmbH Deutschland, ein Teil von Springer Nature 2019  
U. Tietze et al., *Halbleiter-Schaltungstechnik*
<!-- page-import:0690:end -->

<!-- page-import:0692:start -->
7.1 Multiplexer 655

| A | $a_1$ | $a_0$ | $y_3$ | $y_2$ | $y_1$ | $y_0$ |
|---|---:|---:|---:|---:|---:|---:|
| 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 | 0 | 1 | 0 |
| 2 | 1 | 0 | 0 | 1 | 0 | 0 |
| 3 | 1 | 1 | 1 | 0 | 0 | 0 |

**Abb. 7.3.**  
Wahrheitstafel eines 1-aus-4-Decoders

$y_0 = \overline{a_0}\overline{a_1}$ , $y_1 = a_0\overline{a_1}$  
$y_2 = \overline{a_0}a_1$ , $y_3 = a_0a_1$

Schaltung

Schaltsymbol

**Abb. 7.4.** 1-aus-4-Decoder. Das Symbol $G$ steht für UND-Verknüpfung

## 7.1.1 1-aus-n-Decoder

Ein 1-aus-$n$-Decoder ist eine Schaltung mit $n$ Ausgängen und $\operatorname{ld} n$ Eingängen. Die Ausgänge $y_j$ sind von 0 bis $(n-1)$ nummeriert. Es geht derjenige Ausgang auf 1, dessen Index der eingegebenen Dualzahl $A$ entspricht. Abbildung 7.3 zeigt die Wahrheitstafel für einen 1-aus-4-Decoder. Die Variablen $a_0$ und $a_1$ stellen den Dualcode der Zahl $A$ dar. Daraus lässt sich unmittelbar die disjunktive Normalform der Umkodierungsfunktionen ablesen. Abb. 7.4 zeigt die entsprechende Realisierung.

## 7.1.2 Demultiplexer

Mit einem Demultiplexer kann man eine Eingangsinformation $d$ an verschiedene Ausgänge verteilen. Er stellt eine Erweiterung des 1-aus-$n$-Decoders dar. Der adressierte Ausgang

**Abb. 7.5.**  
Prinzipielle Wirkungsweise eine Demultiplexers mit 4 Ausgängen

| A | $a_1$ | $a_0$ | $y_3$ | $y_2$ | $y_1$ | $y_0$ |
|---|---:|---:|---:|---:|---:|---:|
| 0 | 0 | 0 | 0 | 0 | 0 | d |
| 1 | 0 | 1 | 0 | 0 | d | 0 |
| 2 | 1 | 0 | 0 | d | 0 | 0 |
| 3 | 1 | 1 | d | 0 | 0 | 0 |

$y_0 = \overline{a_0}\overline{a_1}d$ , $y_1 = a_0\overline{a_1}d$  
$y_2 = \overline{a_0}a_1d$ , $y_3 = a_0a_1d$

**Abb. 7.6.**  
Wahrheitstafel eines Demultiplexers
<!-- page-import:0692:end -->

<!-- page-import:0693:start -->
656  7. Schaltnetze (Kombinatorische Logik)

Schaltung

Schaltsymbol

**Abb. 7.7.** Schaltung eines Demultiplexers. Das & - Zeichen im Schaltsymbol steht für die UND - Verknüpfung von $d$ mit der Adresse.

geht nicht auf Eins, sondern nimmt den Wert der Eingangsvariable $d$ an. Abb. 7.5 zeigt das Prinzip anhand von Schaltern, Abb. 7.7 die Realisierung mit Gattern. Macht man $d = \mathrm{const} = 1$, arbeitet der Demultiplexer als 1-aus-$n$-Decoder.

## 7.1.3 Multiplexer

Die Umkehrung des Demultiplexers heißt Multiplexer. Ausgehend vom Demultiplexer in Abb. 7.5 kann man ihn dadurch realisieren, dass man die Ausgänge mit dem Eingang vertauscht. Dadurch entsteht die Prinzipschaltung in Abb. 7.8. Daran lässt sich die Funktion besonders einfach erläutern: Ein 1-aus-$n$-Decoder wählt von $n$ Eingängen denjenigen aus, dessen Nummer mit der eingegebenen Zahl übereinstimmt, und schaltet ihn auf den Ausgang durch. Die entsprechende Realisierung mit Gattern ist in Abb. 7.10 dargestellt.

In CMOS-Technik kann man Multiplexer sowohl mit Gattern als auch mit Analogschaltern (Transmission Gates) realisieren. Bei Verwendung von Analogschaltern ist die Signalübertragung bidirektional. Deshalb ist in diesem Fall der Multiplexer identisch mit

**Abb. 7.8.**  
Prinzipielle Wirkungsweise eine Multiplexers mit 4 Eingängen

**Abb. 7.9.**  
Wahrheitstafel eines Demultiplexers

| A | $a_1$ | $a_0$ | $y$ |
|---|---|---|---|
| 0 | 0 | 0 | $d_0$ |
| 1 | 0 | 1 | $d_1$ |
| 2 | 1 | 0 | $d_2$ |
| 3 | 1 | 1 | $d_3$ |

$$
y = \overline{a_0}\overline{a_1}d_0 + a_0\overline{a_1}d_1
$$

$$
+ \overline{a_0}a_1d_2 + a_0a_1d_3
$$
<!-- page-import:0693:end -->

<!-- page-import:0694:start -->
657

# 7.1 Multiplexer

Schaltung

Schaltsymbol

**Abb. 7.10.** Schaltung eines Multiplexers

dem Demultiplexer, wie der Vergleich von Abb. 7.5 mit 7.8 zeigt. Man bezeichnet die Schaltung in diesem Fall als Analog-Multiplexer/Demultiplexer.

Die in Multiplexern erforderliche ODER-Verknüpfung lässt sich auch mit einer Wired-OR-Verbindung realisieren. Diese Möglichkeit ist für Open-Collector-Ausgänge in Abb. 7.11 dargestellt. Da sich dabei in positiver Logik eine UND-Verknüpfung ergibt, muss man – wie in Abb. 7.11 – auf die negierten Signale übergehen, um die gewünschte ODER - Verknüpfung zu realisieren .

Möchte man den mit Open-Collector-Ausgängen verbundenen Nachteil der größeren Anstiegszeit umgehen, kann man Tristate-Ausgänge parallelschalten, von denen jeweils nur einer eingeschaltet wird. Diese Alternative ist ebenfalls in Abb. 7.11 dargestellt.

Die in Abb. 7.11 dargestellten Möglichkeiten zur Realisierung der ODER-Verknüpfung werden in integrierten Multiplexern nicht angewendet. Tristate Verknüpfungen sind aber dann von Bedeutung, wenn die Signalquellen des Multiplexers räumlich verteilt sind. Solche Anordnungen ergeben sich bei Bussystemen, wie sie in Computern üblich sind.

Mit Open-Collector Gattern

Mit Tristate Gattern

**Abb. 7.11.** Realisierungsvarianten der ODER-Verknüpfung in Multiplexern
<!-- page-import:0694:end -->

<!-- page-import:0695:start -->
658

# 7. Schaltnetze (Kombinatorische Logik)

**Abb. 7.12.** Kombinatorisches Schieberegister, aufgebaut aus Multiplexern

## 7.2 Schiebelogik (Barrel Shifter)

Bei vielen Rechenoperationen muss man ein Bitmuster um eine oder mehrere Stellen verschieben. Diese Operation wird üblicherweise mit einem Schieberegister durchgeführt, wie es in Kapitel 8.5 beschrieben wird. Dabei ergibt sich pro Takt eine Verschiebung um eine Stelle. Nachteilig ist, dass man eine Ablaufsteuerung benötigt, um das Schieberegister zunächst mit dem Bitmuster zu laden und anschließend die Verschiebung um eine vorwählbare Stellenzahl vorzunehmen.

Dieselbe Operation lässt sich ohne getaktete Ablaufsteuerung durchführen, indem man wie in Abb. 7.12 ein entsprechendes Schaltnetz mit Multiplexern aufbaut. Aus diesem Grund bezeichnet man die ungetakteten Schieberegister auch als kombinatorische oder asynchrone Schieberegister. Legt man in Abb. 7.12 die Adresse $A = 0$ an, wird $y_3 = x_3$, $y_2 = x_2$ usw. Legt man die Adresse $A = 1$ an, wird entsprechend der Verdrahtung $y_3 = x_2$, $y_2 = x_1$, $y_1 = x_0$ und $y_0 = x_{-1}$. Das Bitmuster $X$ erscheint also um eine Stelle nach links verschoben am Ausgang. Dabei geht wie bei einem normalen Schieberegister das höchste Bit verloren. Verwendet man Multiplexer mit $N$ Eingängen, kann man eine Verschiebung um $0, 1, 2 \ldots (N - 1)$ Stellen vornehmen. Bei dem Beispiel in Abb. 7.12 ist $N = 4$. Damit ergibt sich die Wahrheitstafel in Abb. 7.13.

Möchte man verhindern, dass die höheren Bits verloren gehen, kann man das Register wie in Abb. 7.14 durch Anreihen identischer Schaltungen verlängern. Bei dem gewählten Beispiel $N = 4$ kann man auf diese Weise eine 5 bit Zahl $X$ ohne Informationsverlust um maximal 3 Stellen verschieben. Sie erscheint dann in dem Bereich von $y_3$ bis $y_7$.

Man kann die Schaltung in Abb. 7.12 auch als Ring-Schieberegister betreiben, indem man die Erweiterungseingänge $x_{-1}$ bis $x_{-3}$ wie in Abb. 7.15 mit den Eingängen $x_1$ bis $x_3$ verbindet.

| $a_1$ | $a_0$ | $y_3$ | $y_2$ | $y_1$ | $y_0$ |
|---|---|---|---|---|---|
| 0 | 0 | $x_3$ | $x_2$ | $x_1$ | $x_0$ |
| 0 | 1 | $x_2$ | $x_1$ | $x_0$ | $x_{-1}$ |
| 1 | 0 | $x_1$ | $x_0$ | $x_{-1}$ | $x_{-2}$ |
| 1 | 1 | $x_0$ | $x_{-1}$ | $x_{-2}$ | $x_{-3}$ |

**Abb. 7.13.** Wahrheitstafel des kombinatorischen Schieberegisters
<!-- page-import:0695:end -->

<!-- page-import:0699:start -->
662  7. Schaltnetze (Kombinatorische Logik)

**Abb. 7.21.**  
1 bit-Komparator mit  
Größenvergleich

**Abb. 7.22.**  
Wahrheitstafel eines 1 bit-Komparators  
mit Größenvergleich

| a | b | $y_{a>b}$ | $y_{a=b}$ | $y_{a<b}$ |
|---|---|---|---|---|
| 0 | 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 | 0 |
| 1 | 1 | 0 | 1 | 0 |

Für den Vergleich mehrstelliger Dualzahlen ergibt sich folgender Algorithmus: Man vergleicht zunächst die Bits in der höchsten Stelle. Sind sie verschieden, bestimmt allein diese Stelle das Ergebnis. Sind sie gleich, muss man die Bits in der nächst niedrigeren Stelle vergleichen usw. Bezeichnet man die Identitätsvariable der Stelle $i$ wie in Abb. 7.20 mit $g_i$, ergibt sich für den Größenvergleich einer $N$-stelligen Zahl die allgemeine Beziehung:

$$
y_{A>B} = a_{N-1}\cdot \overline{b}_{N-1} + g_{N-1}\cdot a_{N-2}\cdot \overline{b}_{N-2} + \ldots
$$

$$
+ g_{N-1}\cdot g_{N-2}\cdot \ldots \cdot g_1 \cdot a_0 \cdot \overline{b}_0
$$

Die Schaltungen lassen sich seriell und parallel kaskadieren. Abbildung 7.23 zeigt die serielle Methode. Wenn die höchsten 3 Bits gleich sind, bestimmen die Ausgänge des Komparators $K_1$ das Ergebnis, da sie an den LSB-Eingängen des Komparators $K_2$

MSB  $b_6\ a_6\ b_5\ a_5\ b_4\ a_4$                     $b_3\ a_3\ b_2\ a_2\ b_1\ a_1\ b_0\ a_0$  LSB

**Abb. 7.23.** Serielle Erweiterung von Komparatoren mit Größenvergleich.  
MSB = most significant bit, LSB = least significant bit

**Abb. 7.24.** Parallele Erweiterung von Komparatoren mit Größenvergleich
<!-- page-import:0699:end -->

<!-- page-import:0713:start -->
676

# 7. Schaltnetze (Kombinatorische Logik)

**Abb. 7.40.** Multiplizierer für zwei 4 bit Zahlen. Eingetragen ist das Beispiel 13·11 = 143. Ergebnis:
$P = X \cdot Y + K$

Die Berechnung ist deshalb besonders einfach, weil nur Multiplikationen mit Eins und Null auftreten. Das Produkt erhält man dann dadurch, dass man den Multiplikanden um jeweils eine Stelle nach links verschiebt und addiert oder nicht addiert, je nachdem, ob der Multiplikator der entsprechenden Stelle Eins oder Null ist. Die einzelnen Ziffern des Multiplikators werden also der Reihe nach verarbeitet. Daher wird diese Methode als serielle Multiplikation bezeichnet.

Man kann sie mit Hilfe eines Schieberegisters und eines Addierers realisieren. Allerdings benötigt man für eine solche Schaltwerk-Realisierung eine Ablaufsteuerung. Man kann einen Schiebeoperation im einfachsten Fall auch durch Verdrahtung durchführen, indem man $N$ Addierer entsprechend versetzt anschließt. Dabei benötigt man zwar viele Addierer, spart jedoch eine Ablaufsteuerung ein.

Abbildung 7.40 zeigt eine geeignete Anordnung für eine kombinatorische 4 × 4 bit Multiplikation. Zum Addieren werden hier 4 bit Addierer eingesetzt, bei denen sich die Addition von $B$ über die Steuervariable $m$ ein- und ausschalten lässt. Es wird:

$$
S =
\begin{cases}
A + 0 & \text{für } m = 0 \\
A + B & \text{für } m = 1
\end{cases}
$$

Der Multiplikator wird Bit für Bit an die Steuereingänge $m$ angeschlossen. Der Multiplikand gelangt parallel an die vier Additionseingänge $b_0$ bis $b_3$. Zunächst gehen wir einmal davon aus, dass die Zusatzzahl $K = 0$ ist. Dann entsteht am Ausgang des ersten Rechenbausteines der Ausdruck:
<!-- page-import:0713:end -->

<!-- page-import:0715:start -->
678

7. Schaltnetze (Kombinatorische Logik)

Überlauf in der Mantisse auftreten. Das Ergebnis lässt sich wieder normieren, indem man die Mantisse um eine Stelle nach rechts schiebt und den Exponenten um Eins erhöht. Eine Entnormierung wie beim Gleitkomma-Addierer in Abb. 7.39 ist hier nicht erforderlich; hier steckt der Aufwand im Multiplizierer. Gleitkomma-Rechenwerke befinden sich heutzutage in den meisten Prozessoren von Rechnern, insbesondere auch von PCs. Besonders energiesparend sind die Rechenwerke von Signalprozessoren.
<!-- page-import:0715:end -->
