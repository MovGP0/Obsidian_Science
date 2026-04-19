# Multiplexing and Channel Grouping

<!-- page-import:1187:start -->
1150 21. Grundlagen

![Abb. 21.5](image)

**Abb. 21.5.** Vorlaufende (oben) und rücklaufende (unten) Welle auf einer Leitung zu einem Zeitpunkt $t_0$ und eine Viertel-Periodendauer später

Wellen. Die *Wellenlänge* $\lambda$ entspricht dem Abstand von zwei benachbarten Maxima; dazu muss der ortsabhängige Teil des Arguments der Cosinus-Funktion den Bereich $2\pi$ durchlaufen:

$$
\beta_L \lambda = 2\pi \;\Rightarrow\; \lambda = \frac{2\pi}{\beta_L} = \frac{1}{f\sqrt{L'C'}} = \frac{v}{f}
$$

(21.10)

Zur Berechnung des Stroms $I$ auf der Leitung lösen wir (21.3) nach $I$ auf und setzen $U$ aus (21.6) ein:

$$
I = -\frac{1}{R' + j\omega L'} \frac{dU}{dz}
= -\frac{1}{R' + j\omega L'}\left(-\gamma_L U_f e^{-\gamma_L z} + \gamma_L U_r e^{\gamma_L z}\right)
$$

$$
= \sqrt{\frac{G' + j\omega C'}{R' + j\omega L'}} \left(U_f e^{-\gamma_L z} - U_r e^{\gamma_L z}\right)
$$

Mit dem *Leitungswellenwiderstand*

$$
Z_W = \sqrt{\frac{R' + j\omega L'}{G' + j\omega C'}}
$$

(21.11)

gilt:

$$
I = \frac{U_f}{Z_W} e^{-\gamma_L z} - \frac{U_r}{Z_W} e^{\gamma_L z}
= I_f e^{-\gamma_L z} - I_r e^{\gamma_L z}
$$

(21.12)
<!-- page-import:1187:end -->

<!-- page-import:1259:start -->
1222  21. Grundlagen

ist das modulierte Trägersignal $s_T(t)$ ohne die durch das Filter verursachte Verzögerung dargestellt, um den Zusammenhang mit dem Strom $I_M$ zu verdeutlichen.

Obwohl alle Punkte des QPSK-Konstellationsdiagramms denselben Betrag haben, erhält man neben einer Phasen- auch eine Amplitudenmodulation; letztere wird durch die Cosinus-Rolloff-Filterung verursacht. Ein diagonaler Übergang im Konstellationsdiagramm verläuft durch den Ursprung; in diesem Fall geht die Amplitude kurzzeitig bis auf Null zurück.

## 21.5 Mehrfachnutzung und Gruppierung von Kanälen

Zur drahtlosen Übertragung von Signalen steht ein zweidimensionaler Raum zur Verfügung, der durch die Frequenz- und die Zeitachse aufgespannt wird. In diesem Raum müssen die Übertragungskanäle sämtlicher nachrichtentechnischer Systeme untergebracht werden, d.h. der Raum wird mehrfach genutzt. Die Verfahren zur Aufteilung dieses Raumes werden *Multiplex-Verfahren* genannt.

Die Übertragung zwischen zwei Kommunikationspartnern kann uni- oder bidirektional erfolgen. Bei unidirektionaler Übertragung agiert einer der Partner als Nachrichten-Sender, der andere als Nachrichten-Empfänger; typische Beispiele sind Rundfunk und Fernsehen. Unidirektionale Systeme haben meist einen Verteil-Charakter, d.h. ein Sender versorgt viele Empfänger mit ein und derselben Nachricht; deshalb werden derartige Systeme als *Verteilungssysteme (broadcast systems)* und das Verteilen selbst als *broadcasting* bezeichnet. Bei bidirektionaler Übertragung agieren beide Partner als Nachrichten-Sender und -Empfänger. Sie können dabei abwechselnd einen Kanal oder getrennte Kanäle für die beiden Übertragungsrichtungen verwenden. Im ersten Fall spricht man von *Halbduplex*-, im zweiten von *Duplex-* oder *Vollduplex-Betrieb*. Ein Beispiel für Halbduplex-Betrieb ist der CB-Sprechfunk, bei dem jeweils nur einer der Partner sprechen kann und die Übergabe der Sprecherlaubnis durch ein spezielles Übergabesignal erfolgt (*Over!*). Bei modernen Systemen wie schnurlosen oder Mobiltelefonen erfolgt die Übertragung im Duplexbetrieb; dazu müssen für eine Verbindung zwei Kanäle gruppiert werden. Die Verfahren zur Gruppierung werden *Duplex-Verfahren* genannt.

### 21.5.1 Multiplex-Verfahren

#### 21.5.1.1 Frequenzmultiplex

Das wichtigste Verfahren zur Aufteilung des Übertragungsraums ist der *Frequenzmultiplex (frequency division multiple access, FDMA)*; dabei wird jedem Übertragungskanal ein bestimmter Frequenzbereich dauerhaft zugeteilt. Alle Kanäle einer bestimmten Anwendung belegen zusammen den für die Anwendung zur Verfügung stehenden Frequenzbereich; einige Beispiele haben wir in den Abbildungen 21.21 und 21.22 auf Seite 1162f. angegeben. Alle nachrichtentechnischen Systeme verwenden auf der obersten Ebene einen Frequenzmultiplex; es gibt kein System, das den gesamten zur Verfügung stehenden Frequenzbereich benutzt. Abbildung 21.84a veranschaulicht die Aufteilung des Übertragungsraums bei Frequenzmultiplex. Die Kanäle werden in diesem Zusammenhang auch als *Frequenzkanäle (frequency channels)* bezeichnet. Zwischen den Kanälen verbleibt eine Frequenzlücke, die als Übergangsbereich für die Filter im Empfänger benötigt wird; deshalb ist der Kanalabstand $K$ etwas größer als die Bandbreite $B$ der Signale.

Beim Frequenzmultiplex ist keine Koordination zwischen den Systemen in benachbarten Kanälen notwendig. Jedes System kann den ihm zur Verfügung gestellten Kanal ohne Einschränkung nutzen.
<!-- page-import:1259:end -->

<!-- page-import:1260:start -->
21.5 Mehrfachnutzung und Gruppierung von Kanälen 1223

Zeit  
$t$

Frequenzkanal 1

Frequenzkanal 2

Frequenzkanal 3

$K$

$K$

$B$

$B$

$B$

Frequenz $f$

a Frequenzmultiplex

Zeit  
$t$

Frequenzkanal 1 / Zeitschlitz 3

Frequenzkanal 2 / Zeitschlitz 3

Frequenzkanal 3 / Zeitschlitz 3

Frequenzkanal 1 / Zeitschlitz 2

Frequenzkanal 2 / Zeitschlitz 2

Frequenzkanal 3 / Zeitschlitz 2

Frequenzkanal 1 / Zeitschlitz 1

Frequenzkanal 2 / Zeitschlitz 1

Frequenzkanal 3 / Zeitschlitz 1

$T_K$

$T_S$

Frequenz $f$

b Frequenz- und Zeitmultiplex

**Abb. 21.84.** Multiplex-Verfahren

#### 21.5.1.2 Zeitmultiplex

Die Einteilung der Übertragungszeit der einzelnen Frequenzkanäle in *Zeitschlitze* (*time slots*) wird *Zeitmultiplex (time division multiple access, TDMA)* genannt. Abbildung 21.84b zeigt dies für den Fall, dass alle Frequenzkanäle dasselbe Zeitraster verwenden. Dies ist bei vielen Anwendungen der Fall, im allgemeinen aber nicht notwendig.

Man muss zwischen *Zeitmultiplex auf der Datenebene* und *Zeitmultiplex auf der Senderebene* unterscheiden. Beim Zeitmultiplex auf der Datenebene werden mehrere Datenströme zu einem Datenstrom zusammengefasst und mit *einem* Sender gesendet; entsprechend wird das gesendete Signal mit einem Empfänger empfangen und der resultierende Datenstrom in die ursprünglichen Datenströme aufgeteilt. Ein Beispiel dafür ist die Richtfunkübertragung von Telefongesprächen; dabei werden z.B. 30 digitalisierte Sprachsignale mit einer Datenrate von jeweils 64 kBits/s zu einem Datenstrom mit 1,92 MBit/s zusammengefasst und gemeinsam gesendet. Die Einteilung der Übertragungszeit in Zeitschlitze bezieht sich in diesem Fall nur auf die Anordnung der Daten; auf den Sender und das Sendesignal hat dies keinen Einfluss $^{11}$.

Beim Zeitmultiplex auf der Senderebene werden die Zeitschlitze von *verschiedenen* Sendern genutzt; dazu ist eine Koordination der Sender erforderlich, damit sich die Sendezeiten nicht überschneiden. Für die Umschaltung von einem Sender auf einen anderen wird eine Zeitlücke zwischen den Zeitschlitzen benötigt; deshalb ist der Abstand $T_K$ zwischen dem Beginn zweier aufeinanderfolgender Zeitschlitze etwas größer als die Dauer $T_S$ eines Zeitschlitzes, siehe Abb. 21.84b.

Die Zeitschlitze werden zyklisch durchnummeriert und zu *Rahmen (frames)* zusammengefasst; dabei bilden alle Zeitschlitze mit derselben Nummer einen *Zeitkanal (time channel)*. Abbildung 21.85 zeigt dies für ein Beispiel mit vier Zeitkanälen. Man kann die Zeitkanäle weiter aufteilen, indem sich $m$ Sender einen Zeitkanal dadurch teilen, dass

---

$^{11}$ Wir verwenden den Begriff *Sender* hier wieder im engeren Sinne und bezeichnen damit nur die Komponenten vom Modulator bis zur Antenne; deshalb gehören die Komponenten zum Zusammenfassen der Datenströme zu einem Datenstrom nicht zum Sender.
<!-- page-import:1260:end -->

<!-- page-import:1261:start -->
1224  21. Grundlagen

Abb. 21.85. Rahmen und Zeitkanäle bei Zeitmultiplex mit vier Kanälen

jeder Sender nur in jedem $m$-ten Rahmen einen Zeitschlitz belegt. Davon wird z.B. beim GSM-Mobilfunk Gebrauch gemacht.

Zeitmultiplex wird bei Kommunikationssystemen immer dann verwendet, wenn mehrere Teilnehmer mit einer gemeinsamen Basisstation (*base station, BS* bzw. *base transceiver station, BTS*) kommunizieren. Bei Frequenzmultiplex müsste die Basisstation für jeden Teilnehmer einen Sender und einen Empfänger bereitstellen; dagegen können bei Zeitmultiplex mit einem Sender und einem Empfänger mehrere Teilnehmer bedient werden. Beim GSM-Mobilfunk wird ein Zeitmultiplex mit acht Zeitschlitzen verwendet; dadurch kann eine GSM-Basisstation mit sechs Sende-Empfangs-Einheiten maximal $6 \times 8 = 48$ Teilnehmer bedienen. Bei schnurlosen Telefonen nach dem DECT-Standard wird ein Zeitmultiplex mit 24 Zeitschlitzen verwendet, von denen jeweils 12 für die beiden Übertragungsrichtungen vorgesehen sind; dadurch kann eine DECT-Basisstation mit einer Sende-Empfangs-Einheit maximal 12 Telefone bedienen. Daraus folgt, dass die Anzahl der Zeitschlitze mit Blick auf die Verbindungskapazität möglichst groß gewählt werden muss; dem steht allerdings der höhere Koordinationsaufwand und die geringere Effizienz aufgrund des ungünstigeren Verhältnisses aus Zeitschlitzlänge und Zeitlücke zwischen den Zeitschlitzen entgegen.

## 21.5.1.3 Codemultiplex

Das *Codemultiplex-Verfahren (code division multiple access, CDMA)* ist ein Verfahren zur Mehrfachnutzung eines Frequenzkanals durch mehrere Sender ohne Aufteilung der Sendezeit. Die Datenströme der Sender werden mit *orthogonalen Codeworten* codiert und ohne weitere Koordination mit digitalen Sendern zeitgleich mit derselben Sendefrequenz gesendet. Jeder Empfänger empfängt die Summe aller gesendeten Signale und kann daraus mit Hilfe des Codes des zugehörigen Senders die für ihn bestimmten Daten extrahieren. Dieses Verfahren wird auch *Direktsequenz-Verfahren (direct sequence CDMA, DS-CDMA)* genannt. Abbildung 21.86 zeigt das Grundprinzip. Die Sender- und Empfänger-Komponenten enthalten in dieser Darstellung keinen speziellen Modulator bzw. Demodulator.

Neben dem Direktsequenz-Verfahren gibt es noch weitere Codemultiplex-Verfahren, z.B. das Frequenzsprung-Verfahren (*frequency hopping CDMA, FH-CDMA*), bei dem die Sendefrequenz entsprechend einem Codemuster verändert wird; wir gehen darauf nicht näher ein und verweisen auf die Literatur [21.7]. Da bei Codemultiplex für jede Verbindung ein Code benötigt wird, entspricht die Verbindungskapazität der Anzahl der orthogonalen Codeworte. Sie ist bei Verwendung entsprechender Codes erheblich höher als die Verbindungskapazität bei Zeitmultiplex.

### 21.5.1.3.1 Prinzip des Direktsequenz-Verfahrens

Beim Direktsequenz-Verfahren wird jedes Bit des zu sendenden Datenstroms mit einem binären Codewort exklusiv-oder-verknüpft; Abb. 21.87 zeigt dies am Beispiel einer Codie-
<!-- page-import:1261:end -->

<!-- page-import:1262:start -->
21.5 Mehrfachnutzung und Gruppierung von Kanälen 1225

rung mit Walsh-Codes der Länge 8 (Sender 6: $s_6(t)=d_6(t)\oplus c_6(t)$). Durch die Codierung nimmt die Bitrate entsprechend der Länge des Codeworts zu. Dadurch nimmt auch die zur Übertragung benötigte Bandbreite zu. Deshalb wird die Codierung auch als Spreizung (spreading), die Länge der Codeworte als Spreizfaktor (spreading factor, SF) und das Codemultiplex-Verfahren als spektrales Spreizverfahren (spread spectrum modulation) bezeichnet. Aus der Bitdauer $T_B$ des uncodierten Datenstroms und der Bitdauer $T_C$ des Codeworts erhält man den Spreizfaktor:

$$
SF=\frac{T_B}{T_C}
$$

(21.90)

In Abb. 21.87 gilt $SF=8$. Die Bits des codierten Datenstroms und des Codeworts werden zur Unterscheidung von den Bits des uncodierten Datenstroms als Chips bezeichnet; demnach ist $T_B$ die Bitdauer und $T_C$ die Chip-Dauer.

In den Empfängern wird das Empfangssignal mit den Codeworten exklusiv-oder-verknüpft und über eine Bitdauer integriert; diesen Decodier-Vorgang nennt man Entspreizung (despreading). Aufgrund der Orthogonalität$^{12}$ der Codeworte liefert die Integration nur bei dem Empfänger einen Anteil ungleich Null, der dasselbe Codewort verwendet wie der Sender. Abbildung 21.87 zeigt dies für den Fall, dass das Empfangssignal $e(t)$ gleich dem Sendesignal $s_6(t)$ des Senders 6 ist. Da die Spreizung, die Addition der Sendesignale und die Entspreizung lineare Operationen sind, funktioniert die Trennung bei einem aus mehreren Sendesignalen zusammengesetzten Empfangssignal in gleicher Weise.

#### 21.5.1.3.2 Praktische Ausführung

In Abb. 21.86 und Abb. 21.87 haben wir das Grundprinzip des Codemultiplex ohne die Verwendung eines speziellen Modulationsverfahrens dargestellt. In der Praxis wird der Codemultiplex jedoch immer in Verbindung mit einem der bekannten Modulationsverfahren eingesetzt; üblich sind QPSK und DQPSK. Abbildung 21.88 zeigt die Integration der Komponenten für den Codemultiplex in ein System mit QPSK-Modulation. Die Spreizung erfolgt nach der Modulation, jedoch vor der Rolloff-Filterung; die Entspreizung erfolgt vor der Demodulation. Die ZF- und HF-Komponenten des Senders und des Empfängers sind in Abb. 21.88 nicht dargestellt. Als Sender wird meist der in Abb. 22.6c auf Seite 1239 gezeigte Sender mit digitalem I/Q-Mischer verwendet. Die Komponenten des Modulators arbeiten in diesem Fall ebenfalls digital und werden mit einem digitalen Signalprozessor (DSP) realisiert. Als Empfänger wird bevorzugt der Empfänger mit ZF-Abtastung nach Abb. 22.25c auf Seite 1266 oder der direktumsetzende Empfänger nach Abb. 22.35 auf Seite 1278 eingesetzt; dabei werden die Komponenten des Demodulators ebenfalls mit einem DSP realisiert.

Bei der Planung eines Übertragungssystems mit Codemultiplex müssen noch einige weitere Aspekte berücksichtigt werden, die wir im folgenden nur kurz diskutieren. Wir betrachten dazu ein Mobilkommunikationssystem, bei dem mehrere Mobilgeräte mit einer gemeinsamen Basisstation kommunizieren, siehe Abb. 21.89; dabei werden alle downlink-Kanäle (Basisstation $\rightarrow$ Mobilgerät) synchron über den Sender der Basisstation gesendet, während die uplink-Kanäle (Mobilgerät $\rightarrow$ Basisstation) asynchron, d.h. ohne Koordination zwischen den Sendern der Mobilgeräte, arbeiten.

12 Signale der Länge $T$ ($t\in[0,T]$) sind orthogonal, wenn gilt:

$$
\int_0^T c_i(t)\,c_j(t)\,dt=
\begin{cases}
k\neq 0 & \text{für } i=j\\
0 & \text{für } i\neq j
\end{cases}
$$
<!-- page-import:1262:end -->

<!-- page-import:1263:start -->
1226  21. Grundlagen

Spreizung  
(Codierung)

$d_1(t)$  
$c_1(t)$  
$=1$  
$s_1(t)$  
Sender 1

$d_2(t)$  
$c_2(t)$  
$=1$  
$s_2(t)$  
Sender 2

$\vdots$

$d_m(t)$  
$c_m(t)$  
$=1$  
$s_m(t)$  
Sender $m$

Frequenz-  
kanal

Empfänger  
1

Entspreizung  
(Decodierung)

$e(t)$  
$c_1(t)$  
$=1$  
$e_1(t)$  
$\int_0^{T_B}$  
$d_1(t)$

Empfänger  
2

$e(t)$  
$c_2(t)$  
$=1$  
$e_2(t)$  
$\int_0^{T_B}$  
$d_2(t)$

$\vdots$

Empfänger  
$m$

$e(t)$  
$c_m(t)$  
$=1$  
$e_m(t)$  
$\int_0^{T_B}$  
$d_m(t)$

**Abb. 21.86.** Codemultiplex nach dem Direktsequenz-Verfahren (*direct sequence CDMA, DS-CDMA*)

– Die Walsh-Codes, die wir in Abb. 21.87 verwendet haben, sind nur bei synchronem Betrieb orthogonal; bei einer zeitlichen Verschiebung der Codeworte ist eine korrekte Trennung der Kanäle nicht mehr möglich. Deshalb kann man die Walsh-Codes nur für die *downlink*-Kanäle verwenden. Für die *uplink*-Kanäle werden Codeworte benötigt, die
<!-- page-import:1263:end -->

<!-- page-import:1264:start -->
21.5 Mehrfachnutzung und Gruppierung von Kanälen 1227

Sender 6

$d_6(t)$

0 1 0 0 1 0 1 1 1

$T_B = 8T_C$

$T_C$

$c_6(t)$

$s_6(t)$

$e(t)=s_6(t)$

Walsh-Codes der Länge 8

$c_1 =$ 00000000

$c_2 =$ 00001111

$c_3 =$ 00111100

$c_4 =$ 00110011

$c_5 =$ 01100110

$c_6 =$ 01101001

$c_7 =$ 01010101

$c_8 =$ 01011010

Beachte: "0" entspricht $-1$ im Zeitsignal  
"1" entspricht $+1$ im Zeitsignal

Empfangssignal

$e(t)$

Empfänger 1

$c_1(t)$

$e_1(t)$

$$\int_0^{T_B} e_1(t)\,dt = 0$$

kein Beitrag

Empfänger 5

$c_5(t)$

$e_5(t)$

$$\int_0^{T_B} e_5(t)\,dt = 0$$

kein Beitrag

Empfänger 6

$c_6(t)$

$e_6(t)$

$$\int_0^{T_B} e_6(t)\,dt = T_B$$

"1" erkannt  
("0" ergibt $\int \ldots = -T_B$)

Empfänger 7

$c_7(t)$

$e_7(t)$

$$\int_0^{T_B} e_7(t)\,dt = 0$$

kein Beitrag

**Abb. 21.87.** Spreizung und Entspreizung mit Walsh-Codes der Länge 8

auch bei einer zeitlichen Verschiebung näherungsweise orthogonal sind. Ein Maß hierfür ist die Kreuzkorrelationsfunktion, mit der die Ähnlichkeit von Signalen in Abhängigkeit von der zeitlichen Verschiebung gemessen wird. $^{13}$ Ihr Betrag muss für alle Codeworte und alle zeitlichen Verschiebungen möglichst klein sein. In der Praxis wird meist ein Satz von binären Zufallsfolgen (*pseudo noise*, *PN* bzw. *pseudo random binary sequence*, *PRBS*) verwendet [21.7]. Dabei denkt man sich das zeitlich verschobene Signal $c_j(t+\tau)$ periodisch fortgesetzt, indem das Argument $t+\tau$ modulo $T$ betrachtet wird, so dass es immer in $[0,T]$ liegt. Die Kreuzkorrelationsfunktion ist in diesem Fall ebenfalls mit $T$ periodisch, d.h. man muss nur den Bereich $\tau \in [0,T]$ betrachten.

13 Die Kreuzkorrelationsfunktion für zwei Signale der Länge $T$ ($t \in [0,T]$) lautet:

$$
R_{ij}(\tau)=\int_0^T c_i(t)\,c_j((t+\tau)\bmod T)\,dt
$$
<!-- page-import:1264:end -->

<!-- page-import:1265:start -->
1228  21. Grundlagen

Abb. 21.88. Codemultiplex in Verbindung mit QPSK-Modulation: Modulator (oben) und Demodulator (unten)

– Die Codeworte werden zur Trennung der Kanäle und zur spektralen Spreizung des Sendesignals verwendet. Dabei ergibt sich häufig das Problem, dass Codeworte mit geringer Kreuzkorrelation eine ungünstige spektrale Verteilung der Sendeleistung bewirken. Eine Möglichkeit zur Abhilfe besteht darin, die Eigenschaften bezüglich Kanaltrennung und spektraler Spreizung dadurch zu entkoppeln, dass zwei Codierungen vorgenommen werden: zunächst erfolgt die Kanaltrennung durch eine Codierung mit langen Codeworten (long codes) und anschließend die spektrale Spreizung mit kurzen Codeworten (short codes). Beide Codeworte haben meist dieselbe Chip-Dauer, wobei die Länge der kurzen Codeworte der Bitdauer des uncodierten Datenstroms entspricht, während sich die langen Codeworte über mehrere Bits des uncodierten Datenstroms erstrecken [21.7].

– Da die in der Praxis verwendeten Codeworte nicht exakt orthogonal sind, verursacht jedes Sendesignal in allen nicht zugehörigen Empfängern ein rauschartiges Störsignal; dadurch nehmen die Signal-Geräusch-Abstände in den Empfängern ab. Die Verbindungskapazität des Systems ist erschöpft, wenn die Anzahl der Sendesignale so stark zugenommen hat, dass die Signal-Geräusch-Abstände auf den für eine korrekte Demodulation benötigten Wert abgenommen haben. In diesem Fall liegt die Anzahl der Sendesignale im allgemeinen noch deutlich unter der Anzahl der Codeworte; deshalb ist die Verbindungskapazität eines praktischen Systems nicht durch die Anzahl der Codeworte, sondern durch die Pegel der Störsignale begrenzt, die ihrerseits von der Verteilung der Mobilgeräte abhängen. Die Verbindungskapazität ist demnach variabel.

– Die Verbindungskapazität wird maximal, wenn jeder Empfänger das für ihn bestimmte Sendesignal mit einem höheren Pegel empfängt als alle anderen Sendesignale oder
<!-- page-import:1265:end -->

<!-- page-import:1266:start -->
21.5 Mehrfachnutzung und Gruppierung von Kanälen 1229

Mobilgerät 1

$d_{u,1}(t)$  
$c_{u,1}(t)$

QPSK/CDMA-Modulator

Sender

Antenne

DUP

$d_{d,1}(t)$  
$c_{d,1}(t)$

QPSK/CDMA-Demodulator

Empfänger

Duplexer

Basissstation

Antenne

DUP

Duplexer

Sender

Empfänger

QPSK/CDMA-Modulator

$d_{d,1}(t)$  
$c_{d,1}(t)$

QPSK/CDMA-Demodulator

$d_{u,1}(t)$  
$c_{u,1}(t)$

⋮

QPSK/CDMA-Modulator

$d_{d,m}(t)$  
$c_{d,m}(t)$

QPSK/CDMA-Demodulator

$d_{u,m}(t)$  
$c_{u,m}(t)$

Mobilgerät $m$

$d_{u,m}(t)$  
$c_{u,m}(t)$

QPSK/CDMA-Modulator

Sender

Antenne

DUP

$d_{d,m}(t)$  
$c_{d,m}(t)$

QPSK/CDMA-Demodulator

Empfänger

Duplexer

**Abb. 21.89.** Mobilkommunikationssystem mit QPSK-Modulation und Codemultiplex mit separaten Codeworten für *uplink* (Mobilgerät $\to$ Basisstation, Index $u$) und *downlink* (Basisstation $\to$ Mobilgerät, Index $d$)

wenn die Pegel aller empfangenen Sendesignale gleich sind. Zur Einhaltung dieser Bedingung muss eine Leistungsregelung verwendet werden. Die Sendeleistung der Mobilgeräte muss so eingestellt werden, dass alle *uplink*-Kanäle mit gleichem Pegel an der Basisstation eintreffen; dann ist der Signal-Geräusch-Abstand in allen Kanälen gleich.
<!-- page-import:1266:end -->

<!-- page-import:1267:start -->
1230  21. Grundlagen

*uplink*-Band  
Duplex-Bandlücke  
*downlink*-Band

Duplexabstand

$f_{uplink}$  
$f_{downlink}$  
$f$

**Abb. 21.90.** Gruppierung der Kanäle bei Frequenzduplex

Die Leistung der *downlink*-Kanäle muss so klein sein, dass ein korrekter Empfang in den zugehörigen Mobilgeräten gerade noch möglich ist; dadurch werden die Störsignale in den Empfängern der anderen Mobilgeräte verringert.

Trotz dieser Anforderungen und dem damit verbundenen Realisierungsaufwand ist ein System mit Codemultiplex einem System mit Zeitmultiplex überlegen; deshalb werden die bestehenden Systeme mit Zeitmultiplex (GSM, DECT) sukzessive durch Systeme mit Codemultiplex (UMTS, IS-95) abgelöst.

## 21.5.2 Duplex-Verfahren

Wir betrachten die Duplex-Verfahren am Beispiel eines Mobilkommunikationssystems und bezeichnen deshalb die Kanäle für die beiden Übertragungsrichtungen als *uplink*- (Mobilgerät $\rightarrow$ Basisstation) und *downlink*-Kanäle (Basisstation $\rightarrow$ Mobilgerät).

### 21.5.2.1 Frequenzduplex

Beim Frequenzduplex (*frequency division duplex, FDD*) werden für den *uplink*- und den *downlink*-Kanal einer Verbindung getrennte Frequenzkanäle verwendet; dabei bilden alle *uplink*-Kanäle das *uplink*-Band und alle *downlink*-Kanäle das *downlink*-Band. Jedem *uplink*-Kanal wird ein *downlink*-Kanal fest zugeordnet, siehe Abb. 21.90. Der Frequenzabstand zwischen den beiden Kanälen wird *Duplexabstand* genannt. In den Mobilgeräten und den Basisstationen werden die Bänder mit einem *Duplexer* getrennt, siehe Abb. 21.15b auf Seite 1158 und Abb. 21.89 auf Seite 1229; dazu wird zwischen dem *uplink*- und dem *downlink*-Band eine *Duplex-Bandlücke* eingefügt, die als Übergangsbereich für die Filter des Duplexers dient.

Bei Frequenzduplex werden die Sender und die Empfänger gleichzeitig betrieben; dabei muss die Dämpfung der Filter des Duplexers ausreichend hoch sein, damit das Sendesignal nicht mit zu hohem Pegel in den Empfänger gelangt und den HF-Vorverstärker blockiert. Darüber hinaus wird eine gute Abschirmung zwischen Sender und Empfänger benötigt, damit das Übersprechen auf ein unkritisches Maß beschränkt wird.

### 21.5.2.2 Zeitduplex

Beim Zeitduplex (*time division duplex, TDD*) werden für den *uplink*- und den *downlink*-Kanal einer Verbindung verschiedene Zeitschlitze eines Frequenzkanals mit Zeitmultiplex verwendet; in diesem Fall arbeiten die Sender und die Empfänger nur für die Dauer des jeweiligen Zeitschlitzes und die Antenne kann mit einem Antennenumschalter zwischen Sender und Empfänger umgeschaltet werden, siehe Abb. 21.15a auf Seite 1158.

Da der Sender und der Empfänger eines Geräts bei Zeitduplex nicht gleichzeitig betrieben werden, wird keine Abschirmung zwischen Sender und Empfänger benötigt. Auch der
<!-- page-import:1267:end -->

<!-- page-import:1268:start -->
21.5 Mehrfachnutzung und Gruppierung von Kanälen 1231

benötigte Antennenumschalter ist einfacher, billiger und erheblich kleiner als der bei Frequenzduplex benötigte Duplexer. Deshalb wird die Kombination Zeitmultiplex/Zeitduplex vor allem bei einfachen Systemen mit wenigen Zeitschlitzen eingesetzt; in diesem Fall fallen die genannten Vorteile stärker ins Gewicht als die Nachteile aufgrund der erforderlichen Koordination beim Zugriff auf die einzelnen Zeitschlitze.
<!-- page-import:1268:end -->

<!-- page-import:1269:start -->
[unclear]
<!-- page-import:1269:end -->
