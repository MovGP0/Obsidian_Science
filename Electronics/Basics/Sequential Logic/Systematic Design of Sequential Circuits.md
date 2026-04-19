# Systematic Design of Sequential Circuits

<!-- page-import:0744:start -->
8.7 Systematischer Entwurf von Schaltwerken 707

**Abb. 8.66.**  
Blockschaltbild eines Schaltwerks

variablen eignen sich nur Master-Slave-Flip-Flops. Man setzt hier bevorzugt D-Flip-Flops ein, denn JK-Flip-Flops erfordern für jede Zustandsvariable zwei Signale für J, K und stellen gemäß Abb. 8.22 nur die halbe Verarbeitungszeit zur Verfügung. Im Prinzip kann man auch asynchrone Schaltwerke entwerfen indem man auf eine Taktsteuerung verzichtet und das Schaltnetz direkt rückkoppelt, um dadurch Zustände zu speichern 1. Diese Methode ist jedoch ungebräuchlich, weil der Entwurf schwieriger ist und die Gefahr besteht, dass das Ergebnis von Signallaufzeiten in der Schaltung abhängt. Man kann vier Gruppen von Signalen unterscheiden:

- die Eingangsvariablen $X$
- die Zustandsvariablen $Z$, die den aktuellen Zustand des Systems darstellen
- die Zustandsvariablen $Z'$, die den nächsten Zustand des Systems darstellen, der beim nächsten Takt in den Zustandsvariablen-Speicher übernommen wird
- die Ausgangsvariablen $Y$

Mit dem hier dargestellten Blockschaltbild lassen sich drei verschiedene Quellen für die Erzeugung der Ausgangssignale unterscheiden:

- Sie sind eine Funktion der Eingangs- und Zustandsvariablen $y = f(X, Z)$. Das ist der allgemeinste Fall, der hier dargestellt ist. Die Schaltung wird dann als Mealy-Automat bezeichnet. Die folgenden Varianten stellen eine Spezialisierung dar.
- Sie sind ausschließlich eine Funktion der Zustandsvariablen $y = f(Z)$. Die Schaltung wird dann als Moor-Automat bezeichnet
- Sie sind identisch mit den Zustandsvariablen $y = Z$. Die Schaltung wird dann als Medwedew-Automat bezeichnet. Diese Ausführung wird bei Zählern eingesetzt.

## 8.7.1 Zustandsdiagramm

Ein Schaltwerk wird durch ein Zustandsdiagramm beschrieben. In Abb. 8.67 ist ein Beispiel für ein Zustandsdiagramm dargestellt. Jeder Zustand $S_Z$ des Systems wird durch einen Kreis repräsentiert. Der Übergang von einem Zustand in einen anderen wird durch einen Pfeil gekennzeichnet. Die Bezeichnung des Pfeils gibt an, unter welcher Bedingung der Übergang stattfinden soll. Bei dem Beispiel in Abb. 8.67 folgt auf den Zustand $S_1$ der Zustand $S_2$, wenn $x_1 = 1$ ist. Bei $x_1 = 0$ hingegen geht das System vom Zustand $S_1$ in den Zustand $S_0$ zurück. Ein unbeschrifteter Pfeil bedeutet einen unbedingten Übergang.

Wenn sich das System in einem Zustand $S_Z$ (hier z.B. $S_2$) befindet und keine Übergangsbedingung wahr ist, die zu einem anderen Zustand führt, bleibt das System im Zustand $S_Z$. Diese an und für sich selbstverständliche Tatsache kann man in Einzelfällen

1 Rabinovich, R.: Transition maps guide successful asynchronous state-machine design. EDN May 12, 1994, 111-126
<!-- page-import:0744:end -->

<!-- page-import:0745:start -->
708 8. Schaltwerke (Sequentielle Logik)

$pon$

$S_0$ Anfangszustand  
$S_1$ Verzweigungszustand  
$S_2$ Wartezustand  
$S_3$ Übergangszustand

Zustandsdiagramm

Flussdiagramm

**Abb. 8.67.** Zustandsdiagramm und äquivalentes Flussdiagramm

noch besonders hervorheben, indem man einen Übergangspfeil in das Diagramm einträgt, der von $S_2$ nach $S_2$ zurück führt (Wartezustand). In Abb. 8.67 haben wir einen solchen Übergang als Beispiel bei dem Zustand $S_2$ eingezeichnet.

Nach dem Einschalten der Betriebsspannung muss ein Schaltwerk in einen definierten Anfangszustand gebracht werden. Dazu dient die Bedingung „pon“ (power on). Sie wird mit Hilfe einer besonderen Einschaltlogik für eine kurze Zeit nach dem Einschalten der Betriebsspannung auf Eins gesetzt und ist sonst Null. Mit diesem Signal löscht man in der Regel den Zustandsvariablen-Speicher, indem man es an den Reset-Eingängen der Flip-Flops anschließt.

Die Funktion eines Schaltwerkes lässt sich statt mit einem Zustandsdiagramm auch mit einem Flussdiagramm darstellen, wie das Beispiel in Abb. 8.67 zeigt. Diese Darstellung führt auf die Realisierung eines Schaltwerkes mit Hilfe eines Programms für einen Mikrocontroller.

## 8.7.2 Entwurfsbeispiel für einen Dualzähler

Dieses Beispiel soll den Entwurf eines Dualzählers als Schaltwerk zeigen. Bei einem Dualzähler ist das Zustandsdiagramm besonders einfach; es ist für einen 3bit-Zähler in Abb. 8.68 dargestellt. Nach dem Einschalten der Betriebsspannung müssen die Flip-Flops zunächst über einen Reset-Eingang auf Null gesetzt werden, um einen definierten Anfangszustand $S_0$ herzustellen. Dann muss der Zähler bei jedem Takt in den nächst höheren Zustand übergehen. Auf den Zustand $S_7$ folgt bei einem 3bit-Zähler der Zustand $S_0$. Zur Definition der Variablen ist in Abb. 8.70 das Blockschaltbild für ein Schaltwerk mit 3 Zustandsvariablen dargestellt.

Aus dem Zustandsdiagramm ergibt sich unmittelbar die zugehörige Wahrheitstafel in Abb. 8.69; man muss lediglich zu jedem Zustand $z_0$ $z_1$ $z_2$ den gewünschten Folgezustand $z_0'$ $z_1'$ $z_2'$ aus dem Flussdiagramm eintragen. Aus der Wahrheitstafel in Abb. 8.69 erhält
<!-- page-import:0745:end -->

<!-- page-import:0746:start -->
8.7 Systematischer Entwurf von Schaltwerken 709

Abb. 8.68.  
Zustandsdiagramm für einen 3 bit Dualzähler

| $z_2$ | $z_1$ | $z_0$ | $z_2'$ | $z_1'$ | $z_0'$ |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 1 |
| 0 | 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 | 1 | 1 |
| 0 | 1 | 1 | 1 | 0 | 0 |
| 1 | 0 | 0 | 1 | 0 | 1 |
| 1 | 0 | 1 | 1 | 1 | 0 |
| 1 | 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 1 | 0 | 0 | 0 |

Eingang                Ausgang

$z_0' = \bar{z}_0$

$z_1' = z_0 \bar{z}_1 + \bar{z}_0 z_1$

$z_2' = z_1 z_2 + \bar{z}_0 z_2 + z_0 z_1 \bar{z}_2$

Abb. 8.69.  
Wahrheitstafel zu dem Zustandsdiagramm in Abb. 8.68

man die logischen Funktionen zur Realisierung des Schaltnetzes. Man kann die Funktion $z_2'$ umformen:

$$
z_2' = z_2 \bar{z}_1 + z_2 \bar{z}_0 + \bar{z}_2 z_1 z_0
= z_2 (\bar{z}_1 + \bar{z}_2) + \bar{z}_2 z_1 z_0
= z_2 \overline{(z_1 z_0)} + \bar{z}_2 (z_1 z_0)
$$

und gelangt so zu der Schaltung in Abb. 8.71 Man erkennt, dass sich bei dem formalen Schaltwerk-Entwurf Toggle-Flip-Flops ergeben gemäß Abb. 8.27 und die in Abb. 8.35 eingezeichnete Kipplogik für Synchronzähler: Ein Flip-Flop darf nur toggeln, wenn alle Vorgänger im Zustand 1 sind.

### 8.7.3 Entwurfsbeispiel für einen umschaltbaren Zähler

Als zweites Beispiel wollen wir einen Zähler entwerfen, dessen Zählzyklus 0, 1, 2, 3 oder 0, 1, 2 durchläuft, je nachdem, ob die Steuervariable $x$ gleich Eins oder Null ist. Das entsprechende Zustandsdiagramm ist in Abb. 8.72 dargestellt. Da das System 4 Zustände annehmen kann, benötigt man 2 Flip-Flops zur Speicherung des Zustandsvektors $Z$ mit den Variablen $z_0$ und $z_1$. Da man an diesen Variablen unmittelbar den Zählerstand ablesen kann, dienen sie gleichzeitig als Ausgangsvariablen. Zusätzlich soll bei $Z_{\max}$ noch ein

Abb. 8.70.  
Blockschaltbild des 3 bit Dualzählers
<!-- page-import:0746:end -->

<!-- page-import:0747:start -->
710  8. Schaltwerke (Sequentielle Logik)

**Abb. 8.71.**  
Schaltung des 3 bit Dualzählers.  
Gestrichelt umrandet ist ein  
Toggle Flip-Flop

Übertrag $y$ ausgegeben werden, d.h. wenn im Fall $x = 1$ der Zählerstand $Z = 3$ oder im Fall $x = 0$ der Zählerstand $Z = 2$ ist.

Damit erhält man das Blockschaltbild in Abb. 8.74 mit der Wahrheitstafel in Abb. 8.73. Auf der linken Seite der Abbildung sind alle Wertekombinationen aufgeführt, die die Eingangs- und Zustandsvariablen annehmen können. Aus dem Zustandsdiagramm in Abb. 8.72 kann man für jede Kombination ablesen, welches der nächste Systemzustand ist. Er ist auf in der rechten Spalte in Abb.8.73 aufgeführt. Zusätzlich ist der jeweilige Wert der Übertragsvariablen $y$ eingetragen.

Realisiert man das Schaltnetz als ROM, kann man die Wahrheitstafel in Abb. 8.73 unmittelbar als Programmiertabelle verwenden. Dabei dienen die Zustands- und Eingangsvariablen als Adressenvariablen. Unter der jeweiligen Adresse speichert man den nachfolgenden Wert des Zustandsvektors $Z'$ und der Ausgangsvariablen $y$. Zur Realisierung des Zählerbeispieles benötigt man demnach ein ROM mit 8 Worten à 3 bit.

Zur Realisierung der Schaltung mit Gattern kann man aus der Wahrheitstafel in Abb. 8.73 die logischen Funktionen entnehmen:

$$
y = x z_0 z_1 + \overline{x}\,\overline{z_0} z_1,
$$

*pon* → 0

Zählzyklus $= \left\{\begin{array}{l} 3 \quad \text{für } x = 0 \\ 4 \quad \text{für } x = 1 \end{array}\right.$

**Abb. 8.72.**  
Zustandsdiagramm für einen Zähler mit umschaltbarem Zählzyklus

| $x$ | $z_1$ | $z_0$ | $z_1'$ | $z_0'$ | $y$ |
|---|---:|---:|---:|---:|---:|
| 0 | 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 1 | 0 | 0 |
| 0 | 1 | 0 | 0 | 0 | 1 |
| 0 | 1 | 1 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 1 | 0 | 0 |
| 1 | 1 | 0 | 1 | 1 | 0 |
| 1 | 1 | 1 | 0 | 0 | 1 |

Eingang

Ausgang

**Abb. 8.73.**  
Wahrheitstafel zu dem Zustandsdiagramm  
in Abb. 8.72
<!-- page-import:0747:end -->

<!-- page-import:0748:start -->
8.7 Systematischer Entwurf von Schaltwerken 711

**Abb. 8.74.**  
Schaltwerk zur Realisierung des umschaltbaren Zählers

$z_0' = x\overline{z_0} + \overline{z_0}\,\overline{z_1},$

$z_1' = x\overline{z_0}z_1 + z_0\overline{z_1}$

Damit ergibt sich die in Abb. 8.75 dargestellte Schaltung mit Gattern. Zur Realisierung verwendet man am besten ein PLD (Programmable Logic Array) oder bei sehr umfangreichen Schaltwerken ein FPGA (Field Programmable Gate Array). Da es diese Bausteine fast mit beliebig hoher Komplexität gibt, gelangt man dann immer zu einer 1-Chip-Lösung für das Schaltwerk. Diese Realisierung besitzt außerdem noch den entscheidenden Vorteil der Flexibilität: Man braucht lediglich den Baustein neu zu programmieren und erhält ohne zusätzliche Änderungen eine Schaltung mit neuen Eigenschaften. Man kann dadurch ein Schaltwerk, das Hardware darstellt, genauso einfach updaten wie Software.

**Abb. 8.75.** Umschaltbarer Zähler mit einem aus Gattern realisierten Schaltnetz. Der Schaltplan zeigt die Programmierung der UND-Matrix bei der Realisierung mit einem PLD.  
$y = xz_0z_1 + \overline{x}z_0z_1,\quad z_0' = x\overline{z_0} + \overline{z_0}\overline{z_1},\quad z_1' = x\overline{z_0}z_1 + z_0\overline{z_1}$
<!-- page-import:0748:end -->

<!-- page-import:0749:start -->
[unclear]
<!-- page-import:0749:end -->
