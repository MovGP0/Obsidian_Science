# Data Memories

<!-- page-import:0751:start -->
714  9. Halbleiterspeicher

UND - Matrix

ODER - Matrix

**Abb. 9.2.** Anordnung der UND-Matrix und ODER-Matrix in einem PLD.  
Die Kreuze geben die programmierbaren Verbindungen an.

**Abb. 9.3.** Abgekürzte Darstellung der UND-bzw. ODER-Verknüpfung. Die Kreuze geben an, welcher Eingang angeschlossen ist. Ein nicht angeschlossener Eingang bleibt wirkungslos, da er bei der UND-Verknüpfung als 1 bzw. bei der ODER-Verknüpfung als 0 wirkt

Daraus ergibt sich der in Abb. 9.2 dargestellte Aufbau eines PLDs fast zwangsläufig: Zuerst werden die Eingangssignale direkt und negiert bereitgestellt, dann folgen die programmierbaren UND-Verknüpfungen und dann die ODER-Verknüpfungen. Um diese Verknüpfungen übersichtlich darzustellen, verwendet man die vereinfachten Symbole von Abb. 9.3.

Wie die Verbindungen in einem PLD programmiert werden, soll an einem Beispiel gezeigt werden. Ausgehend von der Wahrheitstafel in Abb. 9.4 erhält man die logischen Funktionen, die man häufig noch vereinfachen kann. Dann stellt man in der Programmiertabelle des PLDs in Abb. 9.5 alle erforderlichen UND-Verknüpfungen bereit indem man die UND-Matrix programmiert. Danach programmiert man die ODER-Matrix gemäß der logischen Funktion.

| $x_2$ | $x_1$ | $x_0$ | $y_1$ | $y_0$ |
|---|---|---|---|---|
| 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 0 | 0 |
| 0 | 1 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 0 |
| 1 | 0 | 0 | 0 | 1 |
| 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 0 | 1 | 1 |
| 1 | 1 | 1 | 0 | 1 |

**Abb. 9.4.**  
Wahrheitstafel zum Beispiel in Abb. 9.5

$$y_0 = x_2 + \bar{x}_0 x_1$$

$$y_1 = \bar{x}_0 x_1 + \bar{x}_0 \bar{x}_2 + x_0 \bar{x}_1 x_2$$
<!-- page-import:0751:end -->

<!-- page-import:0756:start -->
9.2 Datenspeicher 719

Datenspeicher

RAM

statisch

dynamisch

RMM

Flash

ROM

RAM = Random Access Memory  
RMM = Read Mostly Memory  
ROM = Read Only Memory

**Abb. 9.11.** Formen von Tabellenspeichern

Bevor man den Entwurf in den Baustein programmiert, ist es zweckmäßig, die Funktionsweise mit einem *Simulator* zu überprüfen. Mit dem Simulator kann man alle Signale überwachen, auch die internen, die an den Pins nicht zur Verfügung stehen. Außerdem lassen sich erst nach dem Layout mit dem Device Fitter die Laufzeiten der Signale auf dem Chip mit einem *Timing-Simulator* ermitteln und überprüfen (*post layout simulation*). Bei FPGAs kann man angeben, welche Verbindungen zeitkritisch sind, da meist verschiedene schnelle Datenpfade zur Verfügung stehen und kurze Verbindungen schneller sind als solche, die über mehrere Kreuzungspunkte gehen.

Jeder Hersteller bietet ein Software-Paket an, um Schaltungen mit seinen PLDs und FPGAs zu entwerfen. Dabei berücksichtigt der Device Fitter die Architektur und die Ressourcen des betreffenden Bausteins. Häufig sind die Programme mit eingeschränktem Funktionsumfang kostenlos erhältlich. Damit lassen sich allerdings nur die kleineren Bausteine der jeweiligen Familie programmieren.

## 9.2 Datenspeicher

In der Computertechnik und bei der Signalverarbeitung muss man Daten speichern. Dabei kann man drei Arten unterscheiden, die in Abb. 9.11 zusammengestellt sind:

- Daten, die während der Verarbeitung vorübergehend anfallen. Sie werden in Schreib-Lesespeichern gespeichert; der für solche Speicher übliche Name ist Random Access Memory, RAM; eigentlich müssten solche Speicher aber Read-Write Memories heißen.
- Daten, die nach einmaligem Schreiben für immer gespeichert werden sollen. Sie werden in Read-Only Memories, ROMs gespeichert. Solche Daten sind Programme in Taschen-

A  
$a_2 \quad a_1 \quad a_0$

D  
$d_1 \quad d_0$

0  0 0 0  $d_{01}$  $d_{00}$  $D_0$  
1  0 0 1  $d_{11}$  $d_{10}$  $D_1$  
2  0 1 0  $d_{21}$  $d_{20}$  $D_2$  
3  0 1 1  $d_{31}$  $d_{30}$  $D_3$  
4  1 0 0  $d_{41}$  $d_{40}$  $D_4$  
5  1 0 1  $d_{51}$  $d_{50}$  $D_5$  
6  1 1 0  $d_{61}$  $d_{60}$  $D_6$  
7  1 1 1  $d_{71}$  $d_{70}$  $D_7$

**Abb. 9.12.**  
Anordnung einer Tabelle für einen Speicher mit einer Speicherkapazität von $2^N \cdot m = 2^3 \cdot 2\,\text{bit} = 16\,\text{bit}$

Adresswortbreite: $N = 3$  
Datenwortbreite: $m = 2$
<!-- page-import:0756:end -->

<!-- page-import:0757:start -->
720 9. Halbleiterspeicher

Schreib-Leseleitung

row address

Zeilen-Decoder

column address

Spalten - Decoder

Bus Interface

Schreib-
Leseverstärker

$D$

$CS$

$R/\overline{W}$

$a_3,\ a_2,\ a_1,\ a_0$

$y_0,\ y_1,\ y_2,\ y_3$

$x_0,\ x_1,\ x_2,\ x_3$

$S_{00}\ S_{01}\ S_{02}\ S_{03}$

$S_{10}\ S_{11}\ S_{12}\ S_{13}$

$S_{20}\ S_{21}\ S_{22}\ S_{23}$

$S_{30}\ S_{31}\ S_{32}\ S_{33}$

Abb. 9.13. Prinzipieller Aufbau eines Speichers

rechnern oder Mikroprogramme in einer CPU. Sie werden bei der Herstellung festgelegt und sind dann nicht mehr veränderlich.

– Eine Mittelstellung nehmen die Read Mostly Memories, RMMs ein, die meist gelesen und selten neu beschrieben werden. Diese Speicher sind in der letzten Zeit sehr populär geworden und finden Einsatz in USB-Sticks, SD-Cards und Solid State Disks (SSDs).

Ein Datenspeicher ist eine große Tabelle. Man verwendet eine Adresse, um die Speicherzellen zu unterscheiden. Wenn man wie in Abb. 9.12 eine Adresse angibt, kann man die dort gespeicherten Daten lesen oder gegebenenfalls auch schreiben. Meist ist unter einer Adresse nicht nur ein einziges Bit gespeichert, sondern ein ganzes Datenwort.

Der prinzipielle Aufbau eines Speichers dargestellt ist in Abb. 9.13. Die Speicherzellen werden dabei nicht in einer Reihe angeordnet, wie man aufgrund der Tabelle in Abb. 9.12 vermuten könnte, sondern in einer rechteckigen Matrix die wie in diesem Beispiel auch quadratisch sein kann. Entsprechend der Speichermatrix werden die Adressbits aufgeteilt in Zeilen- und Spaltenadressen. Bei dem hier eingetragenen Beispiel $A = 0110$ wird die markierte Speicherzelle $S_{12}$ ausgewählt. Über den Schreib-Leseverstärker kann jetzt das gespeicherte Bit gelesen oder ein neuer Inhalt in diese Speicherzelle geschrieben werden.

Das Bus-Interface übernimmt den bidirektionalen Datenaustausch, wobei die Richtung durch die Schreib-Leseumschaltung $R/\overline{W}$ bestimmt wird. Der Chip-Select $CS$ schaltet den ganzen Speicherchip auf Standby, solange er nicht gebraucht wird.

Nach dem Prinzip in Abb. 9.13 haben aber nur die Speicher der ersten Generation gearbeitet. Wenn man heute Milliarden von Speicherzellen auf einem Chip nach diesem
<!-- page-import:0757:end -->

<!-- page-import:0758:start -->
9.2 Datenspeicher 721

Abb. 9.14. Praktische Ausführung eines Speichers

Prinzip realisieren würde, würde die Leseleitung zu lang und ihre Kapazität zu groß. Aus diesem Grund gibt man heute jeder Spalte eine eigene Leseleitung mit dem zugehörigen Schreib-Leseverstärker. Die resultierende Anordnung ist in Abb. 9.14 dargestellt. Man benötigt dabei zwar Tausende von Schreib-Leseverstärkern. Man hält diese Schaltungen aber einfach; dadurch bleibt der Mehraufwand im Vergleich zum ganzen Chip erträglich. Dadurch ergibt sich aber der große Vorteil, dass alle Speicherzellen einer Zeile gleichzeitig ausgelesen und in das Input/Output Register übertragen werden. Daraus können mehrere Bits sehr schnell seriell oder parallel ausgegeben werden. Zur Adressierung der betreffenden Bits dient hier der Column Address Decoder. Natürlich kann man auf diese Weise auch ein ganzes Wort gleichzeitig lesen und schreiben.

Alle Speicher, die in Abb. 9.11 dargestellt sind, besitzen den hier gezeigten Aufbau. Sie unterscheiden sich hauptsächlich durch den Aufbau der Speicherzelle, der im Folgenden für die verschiedenen Speicher erklärt werden soll.
<!-- page-import:0758:end -->

<!-- page-import:0759:start -->
722 9. Halbleiterspeicher

Abb. 9.15.
Aufbau einer SRAM Speicherzelle als 6 Transistor Zelle

## 9.2.1 Statische RAMs

In einem statischen RAM werden die Daten in Flip-Flops gespeichert. Bei der in Abb. 9.15 dargestellten Speicherzelle wird dieses Flip-Flop aus den beiden rückgekoppelten Invertern $T_1, T_2$ und $T_3, T_4$ gebildet. Zum Lesen und Schreiben wird das Flip-Flop mit einem High-Signal auf der Wordline über die Koppeltransistoren $T_5$ und $T_6$ mit der Bitline verbunden. Um Störungen zu reduzieren, werden die Schreib- und Lesesignale über die Bitline symmetrisch zum Schreib-Leseverstärker übertragen. Zum Schreiben wird der Ausgang des Schreibverstärkers mit den Ausgängen des Flip-Flops in der Speicherzelle verbunden. Diese sonst streng verbotene Betriebsart funktioniert hier nur deshalb, weil man die Transistoren der Speicherzelle so klein wie möglich macht und den Schreibverstärker so leistungsfähig, dass er in jedem Fall dominiert. Dadurch ist es möglich, die Speicherzelle einfach zu halten und als 6-Transistor Zelle zu realisieren.

### 9.2.1.1 Zeitbedingungen

Um die einwandfreie Funktion eines Speichers zu gewährleisten, müssen einige zeitliche Randbedingungen eingehalten werden. Abbildung 9.16 zeigt den Ablauf eines Schreibvorganges. Um zu verhindern, dass die Daten in eine falsche Zelle geschrieben werden, darf der Schreibbefehl erst eine gewisse Wartezeit nach der Adresse angelegt werden. Diese Zeit heißt Address Setup Time $t_{AS}$. Die Dauer des Schreibimpulses darf den Minimalwert $t_{WP}$ (Write Pulse Width) nicht unterschreiten. Die Daten werden am Ende des Schreibimpulses eingelesen. Sie müssen eine bestimmte Mindestzeit vorher gültig, d.h. stabil

$t_{AS}$ = Address Setup Time  
$t_H$ = Hold Time  
$t_{WP}$ = Write Pulse Width  
$t_{DW}$ = Data Valid to End of Write Time

Abb. 9.16. Zeitlicher Ablauf eines Schreibvorganges
<!-- page-import:0759:end -->

<!-- page-import:0760:start -->
9.2 Datenspeicher 723

$t_{AA}$ = Address Access Time

**Abb. 9.17.** Zeitlicher Ablauf eines Lesevorganges

sein. Diese Zeit heißt $t_{DW}$ (Data Valid to End of Write). Bei vielen Speichern müssen die Daten bzw. Adressen noch eine gewisse Zeit $t_H$ nach dem Ende des Schreibimpulses anliegen (Hold Time). Wie man in Abb. 9.16 erkennt, ergibt sich für die Durchführung eines Schreibvorganges die Zeit:

$$
t_W = t_{AS} + t_{WP} + t_H
$$

Sie wird als Schreib-Zyklus-Zeit (Write Cycle Time) bezeichnet.

Der Lesevorgang ist in Abb. 9.17 dargestellt. Nach dem Anlegen der Adresse muss man die Zeit $t_{AA}$ abwarten, bis die Daten am Ausgang gültig sind. Diese Zeit heißt Lese-Zugriffszeit (Address Access Time) oder einfach Zugriffszeit.

## 9.2.2 Dynamische RAMs

Wenn man die Speicherkapazität auf einer gegebenen Siliziumfläche erhöhen möchte, muss man den Platzbedarf der Speicherzellen reduzieren. Das wird bei den dynamischen RAMs dadurch erreicht, dass man das Flip-Flop in Abb. 9.15 durch einen Kondensator als Speicher ersetzt, den man auflädt, um eine 1 zu speichern und entlädt für eine 0. Die in Abb. 9.18 dargestellte Speicherzelle enthält außer dem Speicherkondensator nur einen einzigen Transistor, der den Speicherkondensator mit der Bitline verbindet, wenn er über die Wordline eingeschaltet wird.

Die Information wird als Ladung gespeichert; allerdings bleibt sie wegen der Leckströme nur für kurze Zeit erhalten. Deshalb muss der Kondensator regelmäßig (ca. alle 50 ms) nachgeladen werden. Diesen Vorgang bezeichnet man als *Refresh* und die Speicher als *dynamische* RAMs oder kurz DRAMs . Diesem Nachteil stehen mehrere Vorteile gegenüber. Auf derselben Chip-Fläche lässt sich mit dynamischen Speichern ein Vielfaches an Speicherkapazität realisieren. Deshalb werden in der Computertechnik immer DRAMs als Arbeitsspeicher eingesetzt. SRAMs werden nur in den Cache-Speichern verwendet, weil es dort auf kürzeste Zugriffszeit ankommt und der Refresh stören würde.

**Abb. 9.18.**  
Eine DRAM Speicherzelle enthält lediglich 2 Bauelemente:  
den Speicherkondensator und den Auswahltransistor
<!-- page-import:0760:end -->

<!-- page-import:0761:start -->
724  9. Halbleiterspeicher

Abb. 9.19.  
Anschluss der Schreib-
Leseverstärker an die
Bitlines

Das Auslesen der in den Speicherkondensatoren vorhandenen Information erfolgt ebenfalls über die Koppeltransistoren. Damit wird der jeweilige Speicherkondensator in Abb. 9.19 mit der zugehörigen Bitline und dem daran angeschlossenen Schreib-Leseverstärker verbunden. Das Problem dabei ist, dass die Kapazität der Speicherkondensatoren aus Platzgründen sehr klein ist und lediglich ca. $50\,\mathrm{fF}$ beträgt. Im Vergleich dazu ist die parasitäre Kapazität der Bitline mit ca. $C_b = 1\,\mathrm{pF}$ groß, da sie an einigen 1000 Speicherzellen angeschlossen ist. Aus diesem Grund ist die Spannungsänderung an der Bitline lediglich $1/20$ so groß wie die des Speicherkondensators. Um dieses kleine Signal sicher auswerten zu können, erzeugt man ein Referenzsignal indem man jede 2. Speicherzelle einer Spalte an einer 2. Bitline anschließt. Wenn eine Wordline ausgewählt wird, ist also entweder die linke oder die rechte Bitline eines Bitline-Paars aktiv und die andere kann als Referenz dienen.

Als Leseverstärker setzt man einfache Flip-Flops ein, die in Abb. 9.19 eingezeichnet sind. Vor einem Lesevorgang werden alle Bitlines über eine (hier nicht eingezeichnete) Precharge-Schaltung auf die halbe Betriebsspannung aufgeladen. Dadurch werden alle Flip-Flops in den metastabilen Zustand versetzt, der in Abb. 9.20 schematisch dargestellt ist. Wenn die Koppeltransistoren einer Wordline eingeschaltet werden, reicht ein kleiner Impuls aus, um die Flip-Flops vom metastabilen in einen stabilen Zustand zu kippen, in Abhängigkeit von der Spannung der Speicherkondensatoren. Man kann zwei Fälle unterscheiden, die in Abb. 9.20 ebenfalls eingezeichnet sind:

- Die Spannung ist größer als $½U_b$: Dann kippt das Flip-Flop auf 1 und lädt den Speicherkondensator voll auf.
<!-- page-import:0761:end -->

<!-- page-import:0762:start -->
## 9.2 Datenspeicher

725

Abb. 9.20. Spannungsverlauf an einem Speicherkondensator bei einem Lese- bzw. Refresh-Zyklus. Man erkennt die Selbstentladung des Speicherkondensators und die Regenerierung der Ladung beim Refresh.

- Die Spannung ist kleiner als $½U_b$: Dann kippt das Flip-Flop auf 0 und entlädt den Speicherkondensator.

Nach dem Refresh ist der Speicherkondensator wieder sich selbst überlassen und seine Spannung bewegt sich wieder in Richtung $½U_b$. Der nächste Refresh muss erfolgen solange die Spannung am Speicherkondensator groß bzw. klein genug ist, um das Flip-Flop definiert auf 1 oder 0 zu kippen.

Mit dem Lesevorgang wird der betreffende Speicherkondensator nachgeladen, da er an dem als Leseverstärker arbeitenden Flip-Flop angeschlossen ist. Durch die Aktivierung einer Wordline werden also alle daran angeschlossenen Speicherzellen gleichzeitig ausgelesen und regeneriert. Zum Refresh ist es also lediglich erforderlich, in 50 ms jede Wordline einmal zu adressieren, aber nicht jede Speicherzelle einzeln. Es wäre möglich, bessere Schreib-Leseverstärker zu bauen, aber sicher nicht einfacher. Das spielt hier eine wichtige Rolle, da es Tausende von Bitlines gibt, von denen jede einen Schreib-Leseverstärker benötigt.

Bei DRAMs wird die Adresse in zwei Schritten eingegeben wie Abb. 9.21 zeigt: Im ersten Schritt wird die Wort-Adresse im Row Address Latch gespeichert; dabei wird mit den obersten Adressbits auch eine Speicherebene ausgewählt, die man als Bank bezeichnet. Im zweiten Schritt wird die Bit-Adresse im Column Address Latch gespeichert. Beide Teile der Adresse werden über dieselben Anschlüsse eingegeben, um Pins zu sparen. Bei einem 1Gbit RAM, das 30 Adressbits benötigt, sind demnach bei gleicher Aufteilung $m = n = 15$ Adressleitungen erforderlich.

Um den Refresh durchzuführen, ist es erforderlich, alle Wordlines der Speichermatrix in ca 50 ms einmal zu adressieren. Dieser Refresh-Vorgang erfolgt normalerweise von außen durch anlegen der entsprechenden Row-Adressen, in PCs üblicherweise durch den Chipsatz. Neuere DRAMS kann man aber auch in einer stromsparenden Standby Modus versetzen. Dann wird der interne Refresh-Controller aktiv, der bei neueren DRAMs auf dem Chip integriert ist. Er besteht aus dem Refresh-Counter, dem Refresh-Multiplexer und einer hier nicht dargestellten Refresh-State-Machine. Der Refresh-Counter ist ein Dualzähler, der alle Row-Adressen (= Wordlines) in ca. 50 ms durchzählt und über den Refresh-Multiplexer statt der externen Adresse an die Speichermatrix anlegt. Dabei nutzt man die Tatsache nicht aus, das bei Schreib- oder Lesevorgängen die beteiligten Speicherzellen bereits einem Refresh unterzogen wurden. Nur bei Speichern, die sicher regelmäßig ausgelesen werden, kann man auf einen zusätzlichen Refresh verzichten. Derartige Speicher sind z.B. Bildspeicher, die mit mindestens 20 Hz ausgelesen werden.
<!-- page-import:0762:end -->

<!-- page-import:0763:start -->
726  9. Halbleiterspeicher

RAS = Row Address Strobe  
CAS = Column Address Strobe  
WE = Write Enable  
CS = Chip Select

**Abb. 9.21.** Steuerung eines DRAMs

Ein Schreib- oder Lesevorgang wird immer für alle Speicherzellen, die an einer Wordline angeschlossen sind, gleichzeitig ausgeführt. Daher können alle Bits einer Wordline schnell geschrieben und gelesen werden. Für die Daten Ein- und Ausgabe besitze ein DRAM ein Schaltwerk, das vom einem Command-Wort (und einem Mode-Register) gesteuert wird. Das Command-Wort besteht aus 4 Steuervariablen, die es auch beim SRAM gibt. Die wichtigsten Kombinationen sind in Abb. 9.22 zusammengestellt.

| Command | CS Chip Select | RAS Row Address Strobe | CAS Column Address Strobe | W E Write Enable | A Address Bus |
|---|---:|---:|---:|---:|---|
| Standby | 0 | x | x | x | x |
| Selected | 1 | 0 | 0 | 0 | x |
| Active | 1 | 1 | 0 | 0 | Row |
| Read | 1 | 0 | 1 | 0 | Column |
| Write | 1 | 0 | 1 | 1 | Column |
| Precharge | 1 | 1 | 0 | 1 | Code |
| Auto refresh | 1 | 1 | 1 | 0 | x |
| Mode Register | 1 | 1 | 1 | 1 | Code |

**Abb. 9.22.** Die wichtigsten Commands eines DRAMs. x = beliebig
<!-- page-import:0763:end -->

<!-- page-import:0764:start -->
9.2 Datenspeicher 727

Abb. 9.23. Zeitlicher Ablauf eine Lesevorgangs bei einem DDR-RAM

Abb. 9.24. Zeitlicher Ablauf eine Schreibvorgangs bei einem DDR-RAM

Die Steuerung eines DRAMs erfolgt taktsynchron; deshalb werden die DRAMs genauer als Synchrone DRAMs, SDRAMs bezeichnet. Die Taktfrequenz beträgt $100 \dots 200\,\mathrm{MHz}$; das entspricht einer Periodendauer von $10 \dots 5\,\mathrm{ns}$. Im Gegensatz zum SRAM benötigt ein Schreib- bzw. Lesevorgang beim DRAM mehrere Taktperioden. Zunächst wird der Speicher in beiden Fällen aktiviert und der obere Teil der Adresse eingegeben, im Row Address Latch gespeichert und damit eine Wordline ausgewählt.

Bei einem Lesevorgang der in Abb. 9.23 dargestellt ist, wird danach der untere Teil der Adresse zusammen mit dem Lesekommando eingegeben und im Column Address Latch gespeichert. Bei einem Lesezugriff wird aber nicht nur das Bit ausgegeben, auf das die Adresse zeigt, sondern ein Burst mit 4 oder 8 bit. Sie werden ohne neue Adressierung nacheinander ausgegeben. Das kann sehr schnell erfolgen, da alle Bits der adressierten Wordlines im I/O-Register zur Verfügung stehen. Um die Bits bei gegebener Taktfrequenz möglichst schnell auszugeben, überträgt man die Daten nicht nur bei der positiven Taktflanke, sondern auch bei der negativen, wie man in Abb. 9.23 erkennt. Die Datenausgabe erfolgt daher mit der doppelten Taktfrequenz; die Speicher werden deshalb als Double Date Rate RAMS, kurz DDR-RAMs bezeichnet.

Der in Abb. 9.24 dargestellte Schreibzyklus läuft fast genauso ab wie der beschriebene Lesezyklus. Der einzige Unterschied besteht darin, dass hier das Kommando Write $R/\overline{W} = 0$ ausgegeben wird. Danach wird auch hier nicht nur ein einziges Bit, sondern ein Burst von 4 oder 8bit gespeichert.

Für die Latenzzeiten in einem Schreib- oder Lesezyklus werden 4 verschiedene Werte angegeben, die in Abb. 9.25 zusammengestellt sind. Die Zeiten werden aber nicht in ns angegeben, sondern durch die Anzahl der Takte, dem CL-Wert (CLock). Die Angabe der Zeiten erfolgt in einer genormten Reihenfolge:

$$
DDR2 - f_{CLK}\quad t_{CAS} - t_{RCD} - t_{RP} - t_{RAS}
$$
<!-- page-import:0764:end -->

<!-- page-import:0765:start -->
728  9. Halbleiterspeicher

| $t_{CAS}$ | CAS-Latency | Zeit, um Daten bereitzustellen nach der Column-Address-Eingabe |
| $t_{RCD}$ | RAS to CAS delay | Zeit zwischen RAS- und CAS Eingabe |
| $t_{RP}$ | Precharde time | Precharge Dauer |
| $t_{RAS}$ | Active to Precharge Delay | Zeit zwischen Precharge und RAS Eingabe |

**Abb. 9.25.** Die Latenzzeiten eines DRAMs

So bedeutet die Angabe DDR2-667 4-4-4-12, dass es sich um ein DDR-RAM handelt mit einer effektiven Taktfrequenz von $f_{CLK} = 667\,\mathrm{MHz}$ und den Latenzzeiten von 4-4-4-12 Takten. Die Zeiten kann man dann aus der Taktfrequenz berechnen hier am Beispiel von $CL = 4$:

$$
t \;=\; \frac{2\,CL}{f_{CLK}} \;=\; \frac{2 \cdot 4}{667\,\mathrm{MHz}} \;=\; 12\,\mathrm{ns}
$$

Dabei berücksichtigt der Faktor 2, dass die angegebene Taktfrequenz die Datenrate darstellt, die bei DDR-RAMs doppelt so hoch ist wie die Taktfrequenz. Die Latenzzeiten nehmen mit steigender Taktfrequenz ab. Die Timing-Werte für hochgetaktete Speicher sind jedoch meist entsprechend höher; daher besitzt der Chip DDR2-1066 6-6-6-19 fast dieselben Latenzzeiten wie das obige Beispiel.

Ein neues Schreib- oder Lesekommando kann nicht erst dann erfolgen, wenn die Datenübertragung des vorhergehenden abgeschlossen ist, sondern gleich nach dem ersten. Dadurch wird es möglich, dass sich die Daten des zweiten Zugriffs lückenlos an den ersten anschließen. In diesem optimalen Fall spielen die Latenzzeiten lediglich beim ersten Zugriff eine Rolle; danach werden die Daten zwar um die Latenz verzögert, aber praktisch lückenlos mit der doppelten Taktfrequenz übertragen. Aus diesem Grund bieten Speicher mit höherer Taktfrequenz bei gleicher Latenzzeit einen Vorteil wegen der höheren Datenübertragungsrate.

## 9.2.3 Flash Speicher

Die Speicherzelle eines Flash-Speichers in Abb. 9.26 ist sehr verwandt mit der DRAM-Speicherzelle in Abb. 9.18. Der Unterschied besteht lediglich darin, dass hier Ladungen auf dem Floating-Gate eines Mosfets gespeichert werden und nicht in einem Kondensator wie beim DRAM. In beiden Fällen sind die gespeicherten Ladungen sehr klein: Man kann die Elektronen fast abzählen! Der Vorteil des floating Gates besteht jedoch darin, dass es - wie man im Aufbau erkennt - rings herum mit Gateoxid isoliert ist. Diese Isolation besitzt deutlich kleinere Sperrströme als die Sperrschicht-Isolation des Schalttransistors

bitline

wordline

G

D

S

floating Gate

Speicherzelle

S

G

D

Gate Oxid

floating Gate

n

Tunnel Oxid

n

p-Substrat

Aufbau

$I_D$

ge-
löscht

pro-
gram-
miert

$U_{th1}$

$U_{th2}$

$U_{GS}$

Kennlinien

**Abb. 9.26.** Flash Speicherzelle
<!-- page-import:0765:end -->

<!-- page-import:0766:start -->
9.2 Datenspeicher 729

Lesen

Programmieren

Löschen

**Abb. 9.27.** Spannungen an einer Flash-Speicherzelle beim Lesen, Programmieren und Löschen. Die angegebenen Spannungen sind lediglich Beispiele.

in einem DRAM. Deshalb lassen sich hier Speicherzeiten von über 10 Jahren erreichen im Vergleich zu 50 ms beim DRAM.

Durch Ladungen auf dem floating Gate lässt sich die Schwellenspannung des Transistors verändern wie man an den Kennlinien in Abb. 9.26 erkennt. Wenn sich keine Ladungen auf dem floating Gate befinden besitzt der Transistor die Schwellenspannung $U_{th1}$, wenn man Elektronen auf das floating Gate bringt, steigt die Schwellenspannung auf den Wert $U_{th2}$. Zum Auslesen der Speicherzelle legt man dann die Spannung $U_{th2}$ an die Wordline an. Wird der Transistor dann leitend, ist die Speicherzelle unprogrammiert, also gelöscht; bleibt der Transistor gesperrt, ist die Speicherzelle programmiert. Beispiele für die Potentiale am Speichertransistor beim Lesen, Schreiben und Löschen sind in Abb. 9.27 eingetragen.

Es ist natürlich eine Kunst, Elektronen auf das floating Gate zu bringen, da es allseits isoliert ist. Es wird dadurch ermöglicht, dass man das Oxid unter dem floating Gate sehr dünn macht. Dann können Elektronen bei ausreichender Feldstärke den Isolator durchtunneln; dieser Vorgang wird als Fowler-Northeim-Tunneleffekt bezeichnet und eine derart dünne Schicht als Tunnel-Oxid. Um die Elektronen dazu zu bringen, von der Source auf das floating Gate zu tunneln, legt man an die Wordline eine hohe positive Programmierspannung $V_{PP}$ an. Das Tunnel-Oxid muss so dick sein, dass der Tunneleffekt bei normalen Lesesignalen nicht eintritt, sondern nur beim Anlegen der Programmierspannung. Aus diesem Grund muss die Programmierspannung deutlich höher sein als die Betriebsspannung. Früher musste man die Programmierspannung extern zuführen; heute befindet sich ein Spannungswandler auf dem Chip. Beispiele für die Potentiale am Speichertransistor beim Programmieren sind ebenfalls in Abb. 9.27 eingetragen.

Zum Löschen polt man die Programmierspannung um, indem man die Source auf die Programmierspannung $V_{PP}$ legt und die Wordline auf 0 V. Dadurch fließen die Elektronen vom Floating Gate wieder ab zum Kanal. Diese Potentialverteilung ist ebenfalls in Abb. 9.27 eingetragen. Um dies zu ermöglichen, kann man die Source-Elektrode nicht fest an Masse anschließen, sondern man muss sie schaltbar machen. Das macht man aber nicht für jede Speicherzelle einzeln, sondern für eine Page von einigen 1000 Speicherzellen gemeinsam, um den Aufwand klein zu halten¹. Die Folge ist jedoch, dass man die ganze Page nur auf einen Schlag löschen kann; daher kommt die Bezeichnung Flash-Memory.

---

¹ Bei den klassischen EEPROMs kann man die Speicherzellen auch bitweise löschen; da dann mehrere Transistoren je Speicherzelle erforderlich sind, gibt es hier nur geringe Speicherkapazitäten
<!-- page-import:0766:end -->
