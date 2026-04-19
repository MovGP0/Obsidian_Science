# Programmable Logic

<!-- page-import:0750:start -->
# Kapitel 9:
Halbleiterspeicher

## 9.1 Programmierbare Logik

Digitale Schaltungen, die aus Gattern und Flip-Flops bestehen, baut man nicht mehr aus Bausteinen der 7400-Serie auf, sondern man verwendet Schaltungen, die vom Anwender für die jeweilige Aufgabe programmiert werden können. Der Vorteil dieser Methode besteht darin, dass man statt einer Vielzahl von primitiven Schaltungen (TTL-Grab) nur noch eine einzige, hochintegrierte Schaltung benötigt. Dadurch ergeben sich weitere Vorteile:

- man kommt mit kleineren Leiterplatten aus und spart dadurch Platz und Geld,
- die Zuverlässigkeit steigt, da die Verbindungen auf den Chip sicherer sind als auf der Leiterplatte,
- Designänderungen lassen sich häufig einfach durch Umprogrammieren des Bausteins durchführen.

Eine Übersicht über Speicher für logische Funktionen zeigt Abb. 9.1.

- Bei den programmierbaren logischen Bausteinen (PLDs) werden die logischen Funktionen durch Programmierung von und- und oder-Funktionen realisiert und danach bei Bedarf einem Flip-Flop zugeführt. Für umfangreiche Schaltungen verwendet man die heute üblichen komplexen CPLDs, die mehrere PLDs enthalten.
- Bei den Gate-Arrays wird durch die Programmierung die Verbindung zwischen vielen einfachen Logikschaltungen (see of gates) hergestellt. Heute verwendet man ausschließlich die Anwender-programmierbaren FPGAs.

Bei beiden Schaltungsfamilien programmiert der Anwender die Schaltungen für die jeweilige Anwendung. Bei den PLDs wird die Konfiguration in Flash-Speichern auf dem Chip gespeichert, bei FPGAs erfolgt die Speicherung üblicherweise in einem SRAM auf dem Chip, das nach dem Einschalten geladen werden muss.

### 9.1.1 Programmierbare Logische Bauelemente (PLDs)

Jede logische Funktion lässt sich in disjunktiver Normalform als eine Summe von Produkten darstellen (siehe Kapitel 6.2 auf S. 621) also z.B.:

$$
y = \overline{x}_1 x_2 \overline{x}_3 + x_1 \overline{x}_2 \overline{x}_3 + x_1 x_2 \overline{x}_3
$$

Funktionsspeicher

PLD  
Programmable  
Logic Device

CPLD  
Complex PLD

GA  
Gate Array

FPGA  
Field Programmable  
Gate Array

**Abb. 9.1.**  
Formen von Funktionsspeichern

© Springer-Verlag GmbH Deutschland, ein Teil von Springer Nature 2019  
U. Tietze et al., *Halbleiter-Schaltungstechnik*
<!-- page-import:0750:end -->

<!-- page-import:0752:start -->
9.1 Programmierbare Logik 715

UND - Matrix

ODER Matrix

$y_0 \;=\; x_2 + \overline{x_0}x_1$

$y_1 \;=\; \overline{x_0}x_1 + \overline{x_0}\overline{x_2} + x_0\overline{x_1}x_2$

**Abb. 9.5.** Beispiel für die Programmierung eines PLDs

Es gibt PLDs, bei denen die ODER-Matrix fest programmiert ist. Damit in diesem Fall unbenutzte UND-Verknüpfungen nicht stören, schließt man sie an einer Variablen doppelt an, um sicherzustellen, dass sie definiert eine Null liefern. Dies ist in dem Beispiel in Abb. 9.5 ebenfalls eingezeichnet.

Natürlich möchte man mit PLDs nicht nur Schaltnetze, sondern auch Schaltwerke realisieren. Um dies ohne externe Flip-Flops zu ermöglichen, besitzen die PLDs an jedem Ausgang eine Makrozelle, die in Abb. 9.6 zusätzlich eingezeichnet ist. Sie enthält außer dem Flip-Flop einen Multiplexer, mit dem man zwischen einem kombinatorischen

UND - Matrix

ODER Matrix

interne Rückkopplung

Makrozelle

CLK

**Abb. 9.6.** PLD mit Makrozellen zur Realisierung von Schaltwerken. An jedem Ausgang befindet sich eine Makrozelle; hier ist aus Platzgründen lediglich ein einziger Ausgang dargestellt. Man beachte auch die interne Rückkopplung vom Flip-Flop in die UND-Matrix.
<!-- page-import:0752:end -->

<!-- page-import:0753:start -->
716  9. Halbleiterspeicher

I/O

PLD 1

PLD 2

programmierbare Verbindungsmatrix

PLD 3

PLD 4

I/O

I/O

I/O

**Abb. 9.7.**  
Aufbau eines CPLDs aus  
4 einfachen PLDs

Betrieb und dem sequentiellen Betrieb umschalten kann. Zusätzlich kann man noch eine Negation einschalten, um die Zahl der erforderlichen Produktterme gegebenenfalls zu reduzieren. Zur Auswahl der gewünschten Ausgangsfunktion lassen sich in jeder Makrozelle die beiden Funktionsbits $f_0$ und $f_1$ programmieren, die den betreffenden Eingang des Multiplexers auswählen.

Zum Aufbau eines Schaltwerks muss man - gemäß Abb. 8.1 auf Seite 679 - die Ausgangssignale des Registers zum Eingang des Schaltnetzes rückkoppeln. Um damit keine Eingänge des PLDs zu belegen, sind zusätzliche interne Eingänge in die UND-Matrix vorgesehen, die die Ausgangssignale der Register rückkoppeln. Auf diese Weise spart man sich auch die sonst erforderlichen externen Verbindungsleitungen von den Ausgängen zu den Eingängen und belegt mit den Rückkopplungsleitungen keine externen Eingänge.

Einfache PLDs besitzen 10 - 12 Eingänge und 8 - 10 Ausgänge. Für komplexere Anwendungen gibt es die CPLDs (Complex Programmable Logic Device), die aus einer Matrix von einfachen PLDs aufgebaut sind und deren Verbindungen untereinander ebenfalls auf dem Chip programmierbar ist. Bei dem Beispiel in Abb. 9.7 erkennt man 4 PLDs, die von außen zugänglich sind, die aber auch intern über eine programmierbare Verbindungsmatrix miteinander verbunden werden können. Für den Anwender erscheint ein CPLD wie ein einziges großes PLD. Der Device Fitter, der den Entwurf an die Hardware des Baustein anpasst, kümmert sich um die Aufteilung und die internen Verbindungen.

## 9.1.2 Anwender-programmierbare Gate-Arrays

Man sieht in Abb. 9.1, dass FPGAs die Alternative zu CPLDs zur Realisierung digitaler Schaltungen darstellen. Das Blockschaltbild eines Field Programmable Arrays ist in Abb. 9.8 dargestellt. Sie sind aus einer Matrix von konfigurierbaren logischen Blöcken (CLBs)aufgebaut, die über Zeilen- und Spalten- Verbindungskanäle miteinander verbunden werden. Diese Verbindungskanäle besitzen viele parallel laufende Leitungen, die an den Kreuzungspunkten miteinander verbunden werden können.

Die Konfigurierbaren Logikblöcke (CLBs) entsprechen in ihrem Aufbau der Makrozelle eines PLDs mit der dazugehörigen Logik zur Bildung einer logischen Funktion $f(X)$
<!-- page-import:0753:end -->

<!-- page-import:0754:start -->
9.1 Programmierbare Logik 717

row interconnect

I/O

I/O Block

CLB

CLB

CLB

I/O Block

I/O

CLB

CLB

CLB

I/O Block

CLB

CLB

CLB

column interconnect

I/O Block

I/O

**Abb. 9.8.** Struktur eines FPGA. Die Verdrahtungskanäle column interconnect und row interconnect bilden die routing matrix. CLB = Configurable Logic Block. Die Kreuze zeigen die programmierbaren Verbindungen

und $g(X)$. Der typische Aufbau ist in Abb. 9.9 dargestellt. Zunächst werden logisch Funktionen von Eingangsvariablen aus einem Verdrahtungskanal gebildet, die dann direkt oder über ein Register an einen anderen Verdrahtungskanal ausgegeben werden. Die Logischen Funktionen werden dabei nicht mit Gattern gebildet, sondern ihre Wahrheitstafel wird als Tabelle (Look Up Table, LUT) gespeichert, die ebenfalls vom Anwender programmiert werden kann.

$X$

von der Routing Matrix

LUT

$f(X)$

$g(X)$

1D

$CLK$

C1

zur Routing Matrix

1

1

**Abb. 9.9.** Innerer Aufbau eines Configurable Logic Block (CLB) im FPGA. LUT = Look Up Table
<!-- page-import:0754:end -->

<!-- page-import:0755:start -->
718  9. Halbleiterspeicher

Eingabe

Entwurf

Verifikation

VHDL

Logische  
Funktion  
Wahrheits-  
tafel  
Zustands-  
diagramm

Bibliothek

Eingabe  
File

Prüfung  
Log. Funktion  
Minimierung

Device  
Fitter

JEDEC  
File

Simulator

Program-  
mierung

Schaltplan

Bibliothek

Syntax Fehler  
Log. Funktion

**Abb. 9.10.** Ablauf des Computer-gestützten von Anwender-programmierbaren Schaltungen

## 9.1.3 Computer-gestützter PLD-Entwurf

Der Entwurfsvorgang ist in Abb. 9.10 dargestellt. Um die gewünschten Funktionen ein CPLD oder FPGA zu programmieren, muss man die Schaltung zunächst beschreiben. Dazu hat sich die Programmiersprache VHDL (Very High Speed Integrated Circuit Hardware Description Language) durchgesetzt. Sie hat Ähnlichkeit mit C++. Der Vorteil dieser hochstehenden Programmiersprache ist, dass sie dem Programmierer viel Arbeit abnimmt. Um einen 10 bit Zähler zu definieren, muss man lediglich angeben, dass sich der Zählerstand in einer Laufschleife bei jedem Takt um 1 erhöhen soll, bis die Zahl 1023 erreicht ist und dann auf 0 springt. Genau so einfach lässt sich auch mit einer Zeile ein Addierer oder ein Multiplizierer definieren. Dabei muss der Programmierer gar nicht wissen, wie man eine solche Schaltung aufbaut. Die VHDL-Eingabe beinhaltet auch die Eingabe von Wahrheitstafeln oder Zustandsdiagrammen.

Eine besonders transparente Eingabe-Methode ist die Schaltplan-Eingabe. Hier kann man sich auf eine Bibliothek stützen, in der die gängigsten TTL-Funktionen bereits als Makros definiert sind. Dort stehen einem meist neben Gattern und Flip-Flops auch Multiplexer und Demultiplexer, Addierer und Komparatoren, sowie Zähler und Schieberegister zur Verfügung. Dies ist nicht nur nützlich, um einen alten Entwurf mit TTL-Bausteinen in einen PLD-Entwurf umzusetzen, sondern vereinfacht auch den Entwurf neuer Schaltungen, bei dem die TTL-Bausteine nur als Makro dienen. Unterstützt wird die Eingabe hier durch einen grafischen Zeichen-Editor.

Nach der Eingabe, so verschieden sie auch sein mag, werden alle Daten in logische Funktionen umgewandelt und dabei gleichzeitig einer Syntax-Prüfung unterzogen. Danach werden die logischen Funktionen mit dem *Simplifier* vereinfacht. Damit passen sie aber noch nicht unbedingt in den in Frage kommenden Baustein; sie müssen noch an die spezifische Architektur angepasst werden; dazu dient der *Device-Fitter*. Er muss den Entwurf so abändern, dass die zur Verfügung stehenden Ressourcen optimal genutzt, und nicht überschritten werden. Dabei kann der Anwender bestimmen, ob der Device-Fitter den Platzbedarf oder die Geschwindigkeit optimieren soll. Bei der Optimierung der Geschwindigkeit ist meist ein größerer Baustein erforderlich. Es ist in jedem Fall ratsam, Platz für Erweiterungen zu lassen, um bei einem Redesign denselben Baustein weiter verwenden zu können. Zum Schluss werden die Programmierrdaten, in einem genormten Format, dem *JEDEC-File* abgelegt.
<!-- page-import:0755:end -->

<!-- page-import:0769:start -->
732  9. Halbleiterspeicher

| Paritäts-Bits | Daten-Bits $d_i$ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
|  | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
| $p_0$ | × | × | × | × |  |  |  |  |  |  | × | × | × |  | × |  |
| $p_1$ | × |  |  |  | × | × | × |  |  |  | × | × | × | × |  |  |
| $p_2$ |  | × |  |  | × |  |  | × | × |  | × |  |  | × | × | × |
| $p_3$ |  |  | × |  |  | × |  | × |  | × |  | × |  | × | × | × |
| $p_4$ |  |  | × | × | × |  | × |  | × | × |  |  | × |  |  | × |

**Abb. 9.30.** Beispiel für die Bildung der Paritätsbits nach Hamming für 16 bit Wortbreite

diesem Verfahren also ein 5 bit-Fehlerwort, das Syndromwort. Es kann 32 verschiedene Werte annehmen, die einen Rückschluss auf das fehlerhafte Bit zulassen. Man erkennt, dass der Rückschluss bei einem Einzelfehler genau dann eindeutig ist, wenn man für jede Stelle eine andere Anschlusskombination wählt. Ergibt sich ein Unterschied bei nur *einem* Paritätsbit, kann nur das betreffende Paritätsbit *selbst* fehlerhaft sein, denn nach dem gewählten Anschlussschema müssen bei einem fehlerhaften Datenbit mindestens *zwei* Paritätsbits differieren. Wenn alle Daten- und Paritätsbits fehlerfrei gelesen werden, stimmen die berechneten mit den gespeicherten Paritätsbits überein, und das Syndromwort wird $F = 0$.

Ein Beispiel für die Zuordnung der fünf Paritätsbits zu den einzelnen Datenbits ist in Abb. 9.30 dargestellt. Demnach wirkt z.B. das Datenbit $d_0$ auf die Paritätsbits $p_0$ und $p_1$, das Datenbit $d_1$ auf die Paritätsbits $p_0$ und $p_2$ usw. Man sieht, dass wie verlangt jedes Datenbit auf eine andere Kombination von Prüfbits wirkt. Zur Schaltungsvereinfachung haben wir die Kombinationen so verteilt, dass jeder Paritätsgenerator 8 Eingänge erhält.

Beim Lesen $(R/\overline{W} = 1)$ vergleicht der Syndrom-Generator in Abb. 9.31 das gespeicherte Paritätswort $P'$ mit dem aus den Daten $D'$ berechneten Paritätswort $P''$. Bei auftretenden Fehlern wird das Syndromwort $F = P' \oplus P'' \ne 0$. Der Syndrom-Decoder gibt dann an, welches Datenbit korrigiert werden muss, und veranlasst damit, dass das gestörte Datenbit im Daten-Korrektor invertiert wird.

**Abb. 9.31.** Datenspeicher mit Fehlerkorrektur für 16 bit-Datenworte
<!-- page-import:0769:end -->

<!-- page-import:0773:start -->
736 9. Halbleiterspeicher

Vorgang warten bis der andere abgeschlossen ist. Die Ablaufsteuerung übernimmt ein hier nicht eingezeichneter Arbiter.

Ein FIFO muss nicht zwangsläufig zusätzliche Hardware notwendig machen. Man kann ein FIFO auch als ein Programm auf einem ohnehin vorhandenen Mikrocontroller realisieren und die FIFO-Daten zusätzlich im Arbeitsspeicher ablegen. Das Programm kann dann ähnlich arbeiten wie der FIFO-RAM-Controller und über Interrupts aufgerufen werden. Ein derartiges Software-FIFO kann man auch dazu verwenden, um Daten zwischen verschiedenen Prozessen auszutauschen.
<!-- page-import:0773:end -->

<!-- page-import:0774:start -->
Teil II

Anwendungen
<!-- page-import:0774:end -->

<!-- page-import:0775:start -->
[unclear]
<!-- page-import:0775:end -->
