# Analog-to-Digital Converters

<!-- page-import:1049:start -->
1012  17. DA- und AD-Umsetzer

Tief-
pass

Eingangs-
Spektrum

Tiefpass Eingang

$U_e'(t)$

$f_{max}$  $\frac{1}{2}f_a$  $f_a$  $f$

bandbegrenztes
Signal

$U_e(t)$

$f$

Abtast-
Halte-
glied

Abtastung

Abtastung

$U_e(t)$

$f$

Ausgangs-
Tiefpass

Tiefpass Ausgang

$U_a(t_\mu)=U_e(t_\mu)$

$f$

Tief-
pass

Ausgangs-
Spektrum

$U_a(t)$

$f_{max}$  $\frac{1}{2}f_a$  $f_a$  $f$

**Abb. 17.10.** Rekonstruktion des Eingangsspektrums in einem digitalen System gemäß Abb. 17.1 für $y(t_\mu)=x(t_\mu)$. Der AD- und DA-Umsetzer treten hier nicht auf, weil sie die Spektren nicht verändern, sondern lediglich Quantisierungsrauschen hinzufügen.

Man kann die dafür erforderliche Entzerrung entweder im Frequenzgang des digitalen Systems berücksichtigen oder im Ausgangs-Tiefpass durchführen. Die letztere Möglichkeit ist in Abb. 17.10 eingezeichnet. Die Hauptaufgabe des Ausgangsfilters besteht aber darin, das Basisband $0 \leq f \leq \frac{1}{2}f_a$ aus dem Spektrum herausfiltern: Bei der Frequenz $f_{max}$ muss es noch voll durchlässig sein, während es bei der unter Umständen nur knapp darüber liegenden Frequenz $\frac{1}{2}f_a$ schon vollständig sperren soll. Man sieht, dass es hier bezüglich der Filtersteilheit dieselbe Problematik gibt wie beim Eingangsfilter. Um das Filter realisieren zu können, muss also auch hier ein ausreichender Abstand zwischen $f_{max}$ und $\frac{1}{2}f_a$ bestehen.

Die Problematik, das Eingangs- bzw. Ausgangsfilter zu realisieren, lässt sich entschärfen, wenn man eine deutlich höhere Abtastfrequenz verwendet, also z.B. den doppelten oder vierfachen Wert. Durch diese Überabtastung (oversampling) (s. Abschnitt 17.3.5)
<!-- page-import:1049:end -->

<!-- page-import:1062:start -->
17.3 Analog-Digital Umsetzer 1025

## 17.3 Analog-Digital Umsetzer

Die Aufgabe eines AD-Umsetzers (AD-Converter, ADC) besteht darin, eine Eingangsspannung in eine dazu proportionale Zahl umzuwandeln. Man kann auch hier drei prinzipiell verschiedene Verfahren unterscheiden:

- das Parallelverfahren (word at a time)
- das Wägeverfahren (digit at a time)
- das Zählverfahren (level at a time)

### 17.3.1 Parallelverfahren

Beim Parallelverfahren vergleicht man die Eingangsspannung gleichzeitig mit $n = 2^N$ Referenzspannungen und stellt fest, mit welcher sie am besten übereinstimmt. Auf diese Weise erhält man die vollständige Zahl in einem Schritt. Allerdings ist der Aufwand sehr hoch, da man für jede mögliche Zahl einen Komparator benötigt. Für einen Messbereich von 0 bis 256 in Schritten von Eins benötigt man also $n = 2^N = 256$ Komparatoren.

Abbildung 17.28 zeigt eine Realisierung des Parallelverfahrens für 3 bit-Zahlen. Mit einer 3 bit-Zahl kann man 8 verschiedene Zahlen einschließlich der Null darstellen. Man benötigt demnach 7 Komparatoren. Die zugehörigen sieben äquidistanten Referenzspannungen werden mit Hilfe eines Spannungsteilers erzeugt.

Legt man nun eine Eingangsspannung an, die beispielsweise zwischen $\frac{5}{2} U_{LSB}$ und $\frac{7}{2} U_{LSB}$ liegt, liefern die Komparatoren 1 bis 3 eine Eins und die Komparatoren 4 bis 7 eine Null. Man benötigt nun eine Logik, die diese Komparatorzustände in die Zahl 3 übersetzt. In Abb. 17.29 haben wir den Zusammenhang zwischen den Komparatorzuständen und der zugehörigen Dualzahl aufgestellt. Wie der Vergleich mit Abb. 7.16 auf S. 659 zeigt, kann man die erforderliche Umwandlung mit einem Prioritätsdecoder vornehmen.

Man darf jedoch den Prioritätsdecoder nicht unmittelbar an den Ausgängen der Komparatoren anschließen. Wenn die Eingangsspannung nicht konstant ist, können im Dualcode vorübergehend völlig falsche Zahlenwerte auftreten. Nehmen wir als Beispiel den Übergang von drei auf vier, also im Dualcode von 011 auf 100. Wenn sich die höchste Stelle infolge kürzerer Laufzeiten früher ändert als die beiden anderen, entsteht vorübergehend die Zahl 111, also sieben. Das entspricht einem Fehler des halben Messbereiches. Da man in der Regel das Ergebnis der AD-Umsetzung in einen Speicher übernimmt, besteht also eine gewisse Wahrscheinlichkeit, diesen völlig falschen Wert zu erwischen. Abhilfe kann man z.B. dadurch schaffen, dass man eine Änderung der Eingangsspannung während der Messzeit mit Hilfe eines Abtast-Halte-Gliedes verhindert. Man benötigt dazu allerdings sehr schnelle Abtast-Halte-Glieder, um die Bandbreite eines AD-Umsetzers nach dem Parallelverfahren nicht zu beeinträchtigen. Außerdem ist damit noch nicht sichergestellt, dass sich die Ausgangszustände der Komparatoren nicht doch ändern, weil schnelle Abtast-Halte-Glieder eine beachtliche Drift besitzen.

Diese Probleme lassen sich jedoch vermeiden, wenn man nicht den Analogwert vor den Komparatoren, sondern den Digitalwert dahinter speichert. Dazu dienen die Flip-Flops in Abb. 17.28 hinter jedem Komparator. Auf diese Weise wird sichergestellt, dass der Prioritätsdecoder für eine ganze Taktperiode konstante Eingangssignale erhält. Vor dem Eintreffen der nächsten Triggerflanke stehen dann am Ausgang des Prioritätsdecoders stationäre Daten zur Verfügung. Die Möglichkeit, ein digitales Abtast-Halte-Glied einzusetzen, ist ein besonderer Vorzug des Parallelverfahrens. Es bietet die Voraussetzung für eine Hochgeschwindigkeits-AD-Umsetzung.
<!-- page-import:1062:end -->

<!-- page-import:1063:start -->
1026 17. DA- und AD-Umsetzer

$U_{ref}$

$\dfrac{7}{2}U_{LSB}$

$\dfrac{1}{2}R$

$U_e$

$3U_{LSB}$

$\dfrac{13}{2}U_{LSB}$

$R$

$\dfrac{11}{2}U_{LSB}$

$R$

$\dfrac{9}{2}U_{LSB}$

$R$

$\dfrac{7}{2}U_{LSB}$

$R$

$\dfrac{5}{2}U_{LSB}$

$R$

$\dfrac{3}{2}U_{LSB}$

$R$

$\dfrac{1}{2}U_{LSB}$

$\dfrac{1}{2}R$

$k_7,\ k_6,\ k_5,\ k_4,\ k_3,\ k_2,\ k_1$

$Q$

$x_7,\ x_6,\ x_5,\ x_4,\ x_3,\ x_2,\ x_1$

Prioritätsdecoder

$z_2,\ z_1,\ z_0$

Komparatoren Speicher Decoder

CLK

$$
Z=\frac{U_e}{U_{LSB}}=7\frac{U_e}{U_{ref}}=Z_{max}\frac{U_e}{U_{ref}}
$$

**Abb. 17.28.** AD-Umsetzer nach dem Parallelverfahren mit 3 bit und Beispiel für $U_e=3U_{LSB}$

| Eingangsspannung | Komparatorzustände |  |  |  |  |  |  | Dualzahl |  |  | Dezimaläquivalent |
|---|---|---|---|---|---|---|---|---|---|---|---|
| $U_e/U_{LSB}$ | $k_7$ | $k_6$ | $k_5$ | $k_4$ | $k_3$ | $k_2$ | $k_1$ | $z_2$ | $z_1$ | $z_0$ | $Z$ |
| 7 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 7 |
| 6 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 6 |
| 5 | 0 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 1 | 5 |
| 4 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 4 |
| 3 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 1 | 1 | 3 |
| 2 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 0 | 2 |
| 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 1 |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

**Abb. 17.29.** Variablenzustände im parallelen AD-Umsetzer in Abhängigkeit von der Eingangsspannung
<!-- page-import:1063:end -->

<!-- page-import:1064:start -->
17.3 Analog-Digital Umsetzer 1027

**Abb. 17.30.** Einsatz eines CML-Flip-Flops als Komparator mit integriertem Flip-Flop.  
Hier ergibt $C = 1$ transparentes Verhalten.

Der Abtastaugenblick wird durch die Triggerflanke des Taktes bestimmt. Er liegt um die Komparatorlaufzeit vor dieser Flanke. Die Laufzeitdifferenzen bestimmen demnach den *Apertur-Jitter*. Um die im vorhergehenden Abschnitt geforderten niedrigen Werte erreichen zu können, hält man die Signallaufzeit vom Analogeingang bis zu den Speichern so klein wie möglich. Aus diesem Grund wird bei den meisten Ausführungen der Speicher in den Komparator mit einbezogen und unmittelbar hinter den Analogeingang verlegt. Dazu eignet sich besonders gut das in Kap. 6.49 auf S. 643 beschriebene CML-Flip-Flop, das in Abb. 17.30 für diesen Einsatz modifiziert wurde.

Wenn der Takt wie in dem eingezeichneten Beispiel $C = 1$ ist, arbeitet der Differenzverstärker $T_1, T_2$ als Komparator; da die Eingangsspannungsdifferenz positiv ist, wird $Q = 1$. Wenn der Takt auf $C = 0$ geht, wird das RS-Flip-Flop $T'_1, T'_2$ eingeschaltet und speichert den aktuellen Zustand. Dazu ist es nicht einmal erforderlich, dass der Komparator schon voll umgeschaltet hat. Da das Flip-Flop ebenfalls als Differenzverstärker aufgebaut ist, entscheiden Differenzen von wenigen Millivolt darüber, ob das Flip-Flop in den einen oder den anderen Zustand kippt. Auf diese Weise lässt sich der *Apertur-Jitter* auf Pikosekunden reduzieren.

## 17.3.2 Pipelineumsetzer

Ein Nachteil des Parallelverfahrens besteht darin, dass die Zahl der Komparatoren exponentiell mit der Wortbreite ansteigt. Für einen 10 bit-Umsetzer benötigt man beispielsweise bereits 1023 Komparatoren. Man kann diesen Aufwand wesentlich reduzieren, indem man die Umsetzung in 2 Schritte aufteilt und zuerst die oberen Bits codiert und danach die unteren. Einen 10 bit-Umsetzer realisiert man nach diesem *Kaskadenverfahren* dadurch, dass man in einem ersten Schritt die oberen 5 bit parallel umwandelt, wie es in dem Blockschaltbild in Abb. 17.31 dargestellt ist. Das Ergebnis stellt den grob quantisierten Wert der Eingangsspannung dar. Mit einem DA-Umsetzer bildet man die zugehörige Analogspannung und subtrahiert diese von der Eingangsspannung. Der verbleibende Rest wird mit einem zweiten 5 bit-AD-Umsetzer digitalisiert.

Wenn man die Differenz zwischen Grobwert und Eingangsspannung mit dem Faktor 32 verstärkt, kann man zwei AD-Umsetzer mit demselben Eingangsspannungsbereich
<!-- page-import:1064:end -->

<!-- page-import:1065:start -->
1028 17. DA- und AD-Umsetzer

**Abb. 17.31.**  
Kaskaden-Umsetzer mit 2  
Stufen. Beispiel für einen  
10 bit Umsetzer

verwenden. Ein Unterschied zwischen den beiden Umsetzern besteht allerdings in der Genauigkeitsanforderung: Sie muss bei dem ersten 5 bit-AD-Umsetzer so gut sein wie bei einem 10bit-Umsetzer, da sonst die gebildete Differenz irrelevant ist.

Parallele AD-Umsetzer mit einer derart hohen Linearität sind aber nicht erhältlich und für höhere Signalfrequenzen auch nicht realisierbar. Die Folge davon ist, dass das Differenzsignal aus dem Feinbereich herausläuft und den zweiten AD-Umsetzer übersteuert. Dadurch treten im Ausgangssignal schwerwiegende Fehler (Missing Codes) auf. Dieses Problem lässt sich beseitigen, indem man die Verstärkung des Differenzsignals auf 16 halbiert wie Abb. 17.32 zeigt. Dadurch wird dann das Bit $z_5$ sowohl vom Grob- als auch vom Feinquantisierer gebildet. Läuft nun das Feinsignal wegen Linearitätsfehlern des Grobquantisierers aus dem vorgesehenen Bereich heraus, lässt sich der Grobwert mittels $z'_5$ um Eins erhöhen bzw. verringern. Auf diese Weise lassen sich Linearitätsfehler des Grobquantisierers bis auf $\pm \frac{1}{2}$ LSB korrigieren. Seine Linearität braucht bei der Schaltung in Abb. 17.32 im Unterschied zur vorhergehenden nicht besser zu sein als die Auflösung. Lediglich der DA-Umsetzer muss die volle 10bit-Genauigkeit besitzen. Für die Fehlerkorrektur müssen der Grob- und Feinbereich um mindestens 1 bit überlappen. Um die Auflösung des ganzen Umsetzers dadurch nicht zu reduzieren, besitzt der Feinquantisierer hier ein zusätzliches Bit.

Grob- und Feinwerte müssen natürlich jeweils von derselben Eingangsspannung $U_e(t_j)$ gebildet werden. Dazu muss die Eingangsspannung mit einem Abtast-Halteglied konstant gehalten werden bis das Signal alle Stufen durchlaufen hat. Das ist also in diesem Fall der AD- und DA-Umsetzer der 1. Stufe, der Subtrahierer, der Verstärker und der AD-Umsetzer der 2. Stufe. Um das Verfahren zu beschleunigen, speichert man die Spannung für die Feinquantisierung in einem 2. Abtast-Halteglied. Dadurch steht der Grobquantisierer in Abb. 17.33 schon zur Codierung des nächsten Abtastwerts zur Verfügung, während der Feinquantisierer den vorhergehenden Abtastwert codiert. Das Merkmal dieses Pipelineverfahrens besteht darin, dass gleichzeitig aufeinanderfolgende Abtastwerte codiert werden.

**Abb. 17.32.**  
Überlappung der Bereiche  
zur Fehlerkorrektur
<!-- page-import:1065:end -->

<!-- page-import:1066:start -->
17.3 Analog-Digital Umsetzer 1029

**Abb. 17.33.** Pipeline-Umsetzer mit 2 Stufen mit einem Abtast-Halteglied vor jeder Stufe

Mit dem Pipeline-Verfahren ist es möglich, die Anzahl der Codierungsschritte zu erhöhen, ohne dadurch die Abtastfrequenz zu reduzieren. In Abb. 17.34 ist ein Umsetzer mit einer 3-stufigen Pipeline dargestellt. Hier werden in jedem Schritt 5 bit codiert und in jeder Stufe wird 1 bit zur Fehlerkorrektur reserviert. Wenn man die AD-Umsetzer in jeder Stufe mit dem Parallelverfahren realisiert, benötigt man lediglich $3 \times 32 = 96$ Komparatoren für einen 12 bit Umsetzer. Abbildung 17.35 zeigt, wie das Eingangssignal die Stufen der Pipeline durchläuft. Man sieht, dass 3 Abtasttakte erforderlich sind, bis ein Abtastwert alle Schritte durchlaufen hat und das 1. Ergebnis vorliegt. Gleichzeitig erkennt man, dass während der Codierung des 1. Abtastwerts im 2. und 3. Schritt bereits die nächsten Abtastwerte im 1. Schritt codiert werden.

Die Zahl der erforderlichen Komparatoren lässt sich weiter reduzieren, indem man in jeder Pipeline-Stufe, also in jedem Schritt nur ein einziges Bit codiert; diese Möglichkeit ist in Abb. 17.36 dargestellt. Hier wird für jeden Schritt nur ein einziger Komparator im AD-Umsetzer benötigt, für den ganzen $N$ bit-Umsetzer also nur $N$ Komparatoren. Im 1. Schritt wird hier das MSB, $z_{N-1}$ codiert; ist es Null, wird die Eingangsspannung mit dem Faktor 2 verstärkt an die nächste Stufe übergeben. Wenn es 1 ist, wird der entsprechende Betrag

**Abb. 17.34.** Pipeline-Umsetzer mit 3 Kodierungsschritten. Die Abtast-Halteglieder werden synchron mit der Abtastfrequenz getaktet.

| Abtast- wert | Schritt 1 | Schritt 2 | Schritt 3 |
|---|---|---|---|
| 1 | $U_{e1}$ |  |  |
| 2 | $U_{e2}$ | $U_{e1}$ |  |
| 3 | $U_{e3}$ | $U_{e2}$ | $U_{e1}$ |
| 4 | $U_{e4}$ | $U_{e3}$ | $U_{e2}$ |

**Abb. 17.35.**  
Die Codierung von 4 Abtastwerten  
$U_{e1}, U_{e2}, U_{e3}, U_{e4}$, in einem 3-stufigen  
Pipeline-Umsetzer
<!-- page-import:1066:end -->

<!-- page-import:1067:start -->
1030  17. DA- und AD-Umsetzer

**Abb. 17.36.** Pipeline-Umsetzer zur Codierung von nur einem einzigen Bit in jedem Schritt

von der Eingangsspannung subtrahiert und dann verstärkt an die 2. Stufe weitergegeben. Zur Codierung einer $N$-stelligen Dualzahl sind hier demnach $N$ Schritte erforderlich. Für die Codierung des ersten Werts sind also $N$ Abtasttakte erforderlich; danach steht aber bei jedem weiteren Abtasttakt eine vollständige neue Umsetzung zur Verfügung. Die Abtastfrequenz wird also auch hier nur durch die Laufzeit in einem Schritt bestimmt. Allerdings tritt eine Signalverzögerung von $N$ Takten auf zwischen der erstmaligen Abtastung der Eingangsspannung in der 1. Stufe und der Ausgabe der vollständig codierten Zahl am Ausgang. Diese Zeit bezeichnet man als *Latenzzeit*.

## 17.3.3 Wägeverfahren

Beim Wägeverfahren wird wie bei dem Pipeline-Verfahren in Abb. 17.36 in einem Schritt nur ein Bit des Ergebnisses ermittelt. Allerdings ist die Hardware für einen Schritt hier nur einmal vorhanden; sie muss daher die Codierung für jedes Bit nacheinander $N$ mal durchführen bevor der nächste Abtastwert bearbeitet werden kann. Dabei beginnt man mit dem höchsten Bit und stellt fest, ob es 1 oder 0 ist. Danach werden der Reihe nach die niedrigeren Bits gewogen, um ihren Wert zu ermitteln. Dazu sind bei einer $N$-stelligen Zahl $N$ Wägeschritte erforderlich.

Der prinzipielle Aufbau eines AD-Umsetzers nach dem Wägeverfahren ist in Abb. 17.37 dargestellt. Der Komparator vergleicht den gespeicherten Messwert mit der Ausgangsspannung des DA-Umsetzers. Beim Messbeginn wird nur das höchste Bit (MSB) auf Eins gesetzt und geprüft, ob die Eingangsspannung größer als $U(Z)$ ist. Ist das der Fall, bleibt es gesetzt. Andernfalls wird es wieder gelöscht. Damit ist das höchste Bit *gewogen*. Dieser Wägevorgang wird anschließend für jedes weitere Bit wiederholt,

$$
Z = (Z_{max} + 1)\,\frac{U_e}{U_{ref}}
$$

**Abb. 17.37.** AD-Umsetzer nach dem Wägeverfahren
<!-- page-import:1067:end -->

<!-- page-import:1068:start -->
17.3 Analog-Digital Umsetzer 1031

Abb. 17.38. Flussdiagramm für den Ablauf des Wägeverfahrens. Beispiel $Z = 5$

Abb. 17.39. Zeitlicher Verlauf des Analogsignals und der digitalen Signale bei der Umsetzung von 3 bit mit dem Wägeverfahren gemäß dem Beispiel in Abb. 17.38

bis zum Schluss auch das niedrigste Bit (LSB) feststeht. Auf diese Weise entsteht in dem Register eine Zahl, die nach der Umsetzung durch den DAU eine Spannung ergibt, die innerhalb der Auflösung $U_{LSB}$ mit $U_e$ übereinstimmt. Damit wird:

$$
U(Z)=U_{ref}\frac{Z}{Z_{max}+1}=U_e \;\Rightarrow\; Z=(Z_{max}+1)\frac{U_e}{U_{ref}}
$$
(17.21)

Das Flussdiagramm für die ersten drei Wägeschritte ist in Abb. 17.38 dargestellt. Man erkennt, dass in jedem Schritt ein Bit versuchsweise gesetzt wird. Wenn dadurch die Eingangsspannung überschritten wird, wird es gleich wieder zurückgesetzt. Abbildung 17.39 zeigt den zugehörigen Zeitverlauf der Spannung $U(Z)$ und der Zahl $Z$. Der zeitliche Verlauf wird von einem Schaltwerk, dem Successive Approximation Register, SAR gesteuert.

## 17.3.4 Zählverfahren

### 17.3.4.1 Modifiziertes Wägeverfahren

Die AD-Umsetzung nach dem Zählverfahren erfordert den geringsten Schaltungsaufwand. Allerdings ist die Umsetzdauer wesentlich größer als bei den anderen Verfahren, denn hier wird das Ergebnis in Einerschritten abgezählt. Sie liegt in der Regel zwischen 1 ms und 1 s. Das genügt jedoch bei langsam veränderlichen Signalen, wie sie z.B. bei der Tempera-
<!-- page-import:1068:end -->

<!-- page-import:1069:start -->
1032  17. DA- und AD-Umsetzer

**Abb. 17.40.** AD-Umsetzer nach dem Zählverfahren durch Modifikation des Wägeverfahrens

turmessung auftreten. Auch in Digitalvoltmetern benötigt man keine größere Geschwindigkeit, weil man das Ergebnis doch nicht schneller ablesen kann.

Der Unterschied zum Wägeverfahren wird besonders deutlich, wenn man das Successive Approximation Register (SAR) im Abb. 17.37 durch einen Dualzähler ersetzt. Diese Variante ist in Abb. 17.40 dargestellt. Der Dualzähler zählt von Null aufwärts bis die Kompensationsspannung $U(Z)$ die Eingangsspannung erreicht. Dann stoppt der Komparator den Zählvorgang mit $D = 0$ und es gilt:

$$
U(Z) = \frac{Z}{Z_{max} + 1} U_{ref} = U_e
$$

Am Ende des Zählverfahrens liegen also dieselben Verhältnisse vor wie beim Wägeverfahren. Der Unterschied besteht nur darin, dass hier die Zahl $Z$ lediglich in LSB-Schritten erhöht wird. An dem Zeitverlauf in Abb. 17.41 sieht man, dass für die Umsetzung $2^Z \leq 2^N$ Schritte erforderlich sind. Da der Aufbau eines Dualzählers nur wenig einfacher ist als der eines SA-Registers, hat diese Schaltung keine praktische Bedeutung.

**Abb. 17.41.** Zeitlicher Verlauf beim Zählverfahren durch Modifikation des Wägeverfahrens
<!-- page-import:1069:end -->

<!-- page-import:1070:start -->
17.3 Analog-Digital Umsetzer 1033

$Z = (Z_{max} + 1)\,\dfrac{U_e}{U_{ref}}$

**Abb. 17.42.** AD-Umsetzer nach dem Dual-Slope-Verfahren

## 17.3.4.2 Dual-Slope-Verfahren

Beim Dual-Slope-Verfahren in Abb. 17.42 teilt sich die Umsetzung in 2 Phasen: Zunächst wird die Eingangsspannung für eine feste Zeit integriert, danach die Referenzspannung mit entgegengesetzter Polarität bis die Ausgangsspannung des Integrators wieder auf Null ist. Bei Messbeginn wird der Zähler gelöscht, der Schalter $S_3$ geöffnet, und $S_1$ geschlossen und die Eingangsspannung $U_e$ wird integriert. Wenn sie positiv ist, läuft der Integrator-Ausgang nach Minus wie man in Abb. 17.43 erkennt. Dadurch gibt der Komparator den Taktgenerator frei. Das Ende der ersten Integrationsphase $t_1$ ist erreicht, wenn der Zähler nach $Z_{max} + 1$ Takten überläuft (mit Ripple-Carry-Output = 1) und damit wieder auf Null steht. Anschließend wird die Referenzspannung integriert; dazu wird der Schalter $S_1$ geöffnet und der $S_2$ geschlossen. Da sie negativ ist, steigt die Ausgangsspannung des Integrators jetzt wieder an. Die zweite Integrationsphase ist beendet, wenn $U_I$ bis auf Null angestiegen ist. Dann geht der Komparator auf Null und stoppt damit den Zähler. Der Zählerstand ist gleich der Zahl der Taktimpulse während der Zeit $t_2$ und damit proportional zur Eingangsspannung.

Der Zusammenhang zwischen der Eingangsspannung $U_e$ und dem Ergebnis $Z$ lässt sich direkt angeben, wenn man die Integration ausrechnet und berücksichtigt, dass die Integration bei 0 V beginnt und bei 0 V endet. Aus

$$
U_I = -\frac{1}{RC}\int_0^{t_1} U_e\,dt - \frac{1}{RC}\int_0^{t_2} U_{ref}\,dt = 0
$$

folgt, wenn man $U_e$ als konstant annimmt:

$$
-\frac{1}{RC}U_e\,t_1 - \frac{1}{RC}U_{ref}\,t_2 = 0
$$

Mit

$$
t_1 = (Z_{max} + 1)\,T \quad \text{und} \quad t_2 = ZT
$$

folgt:

$$
-\frac{1}{RC}U_e\,(Z_{max} + 1)\,T - \frac{1}{RC}U_{ref}\,ZT = 0
$$

(17.22)

(17.23)
<!-- page-import:1070:end -->

<!-- page-import:1071:start -->
1034  17. DA- und AD-Umsetzer

Abb. 17.43. Zeitlicher Verlauf der Integrator-Ausgangsspannung für verschiedene Eingangsspannungen

Man sieht, dass sich die Zeitkonstante $RC$ und die Taktdauer $T$ aus der Gleichung herauskürzen. Damit erhält man:

$$
U_e\,(Z_{max}+1)\,T + U_{ref}\,Z\,T = 0
$$

Auflösen nach $Z$ liefert das Ergebnis:

$$
Z = -\frac{U_e}{U_{ref}}\,(Z_{max}+1)
$$

(17.24)

Nach dieser Gleichung besteht das hervorstechende Merkmal des Dual-Slope-Verfahrens darin, dass weder die Taktfrequenz $1/T$ noch die Integrationszeitkonstante $\tau = RC$ in das Ergebnis eingehen. Man muss lediglich fordern, dass die Taktfrequenz während der Zeit $t_1 + t_2$ konstant ist. Diese Kurzzeitkonstanz lässt sich mit einfachen Taktgeneratoren erreichen. Aus diesen Gründen kann man mit diesem Verfahren selbst mit billigen Bauelementen hohe Genauigkeiten erreichen.

Wie wir bei der Herleitung gesehen haben, geht nicht der Momentanwert der Messspannung in das Ergebnis ein, sondern nur ihr Mittelwert über die Messzeit $t_1$. Daher werden Wechselspannungen um so stärker abgeschwächt, je höher ihre Frequenz ist. Wechselspannungen, deren Frequenz gleich einem ganzzahligen Vielfachen von $1/t_1$ ist, werden vollständig unterdrückt. Es ist daher günstig, die Frequenz des Taktgenerators so zu wählen, dass $t_1$ gleich der Schwingungsdauer der Netzwechselspannung oder einem Vielfachen davon wird. Dann werden alle Brummstörungen eliminiert.

Da man mit dem Dual-Slope-Verfahren mit wenig Aufwand hohe Genauigkeit und Störunterdrückung erzielen kann, wird es bevorzugt in Digitalvoltmetern eingesetzt. Dort stört die relativ große Umsetzdauer nicht. Der Zähler in Abb. 17.42 muss nicht unbedingt ein Dualzähler sein. Es ergibt sich dieselbe Funktionsweise, wenn man einen BCD-Zähler einsetzt. Von dieser Möglichkeit macht man in Digitalvoltmetern Gebrauch, weil man dann den Messwert nicht dual/dezimal wandeln muss.

## 17.3.5 Überabtastung

Die Auflösung eines AD-Umsetzers lässt sich erhöhen indem man eine höhere Abtastfrequenz verwendet als es das Abtasttheorem $f_a \geq 2f_{max}$ (siehe Abschnitt 17.1.1.1) verlangt und danach mit einem digitalen Tiefpassfilter wieder reduziert. Das Prinzip ist in Abb. 17.44 dargestellt. Die Ursache für die Erhöhung der Auflösung besteht darin, dass sich durch diese Maßnahme das Quantisierungsrauschen reduzieren lässt. Gemäß (17.13) ist das aber gleichbedeutend mit einer Erhöhung der Auflösung, also der effektiven Bitzahl. Wenn man die Taktfrequenz eines AD-Umsetzers verdoppelt, bleibt die Leistung des
<!-- page-import:1071:end -->

<!-- page-import:1072:start -->
17.3 Analog-Digital Umsetzer 1035

Abb. 17.44. Prinzip der Überabtastung zur Erhöhung der Genauigkeit  
$f_a =$ Abtastfrequenz, $f_{OS} =$ Überabtastfrequenz

Quantisierungsrauschens konstant, erstreckt sich aber auf den doppelten Frequenzbereich wie man in Abb. 17.45 erkennt. Dadurch halbiert sich die Rauschleistung im Nutzfrequenzbereich bzw. die Rauschspannung sinkt um den Faktor $1/\sqrt{2}$. Bei einem Überabtastfaktor (OverSampling Ratio)

$$
OSR = \frac{f_{OS}}{f_a} = \frac{f_{OS}}{2f_{max}}
$$

(17.25)

reduziert sich die Rauschspannung im Nutzfrequenzbereich allgemein um den Faktor $1/\sqrt{OSR}$, gemäß (17.9) also auf den Wert:

$$
U_{r\,eff} = \frac{U_{LSB}}{\sqrt{12}} \frac{1}{\sqrt{OSR}}
$$

(17.26)

Dadurch erhöht sich der Signal-Rausch-Abstand mit (17.10) um einen Faktor $\sqrt{OSR}$ und man erhält mit den Definitionen $\lg x = \log_{10} x,\ \operatorname{ld} x = \log_2 x,\ \lg x = \lg 2 \cdot \operatorname{ld} x$:

$$
SNR_{dB} = 20\,\mathrm{dB} \cdot \lg \frac{U_{s\,eff}}{U_{r\,eff}} = 20\,\mathrm{dB}\left(\lg \sqrt{1{,}5} + \lg 2^N + \lg \sqrt{OSR}\right)
$$

$$
= 1{,}8\,\mathrm{dB} + 6\,\mathrm{dB}\cdot N + 6\,\mathrm{dB}\cdot \operatorname{ld}\sqrt{OSR} \approx 6\,\mathrm{dB}\left(N + \frac{1}{2}\operatorname{ld} OSR\right)
$$

(17.27)

Wenn man eine Auflösung von $N + x$ bit ansetzt, ergibt sich für die durch Überabtastung zusätzlich gewonnene Stellenzahl $x$:

$$
x = \frac{1}{2}\operatorname{ld} OSR
$$

(17.28)

Bei der in Abb. 17.45 als Beispiel dargestellten Überabtastung mit $OSR = 2$ erhält man demnach lediglich ein halbes Bit an zusätzlicher Auflösung; um 1 bit zu gewinnen, wäre die 4-fache Abtastfrequenz erforderlich. Aus diesem Grund lohnt sich der Aufwand für einen schnelleren AD-Umsetzer und das zusätzlich erforderliche Digitalfilter nicht.

keine Überabtastung

2 fache Überabtastung

Dunkelgrau: Quantisierungsrauschen im Nutzsignalband  
Hellgrau: Quantisierungsrauschen oberhalb des Signalbands

Abb. 17.45. Wirkung der Überabtastung auf das Quantisierungsrauschen,  
hier für $OSR = f_{OS}/f_a = 2$
<!-- page-import:1072:end -->

<!-- page-import:1073:start -->
1036  17. DA- und AD-Umsetzer

Abb. 17.46. Aufbau eines Delta-Sigma-Umsetzers $f_{OS} = OSR \cdot f_a$

## 17.3.6 Delta-Sigma-Verfahren

Der Gewinn durch Überabtastung lässt sich deutlich erhöhen, wenn man dafür sorgt, dass das Quantisierungsrauschen in Abb. 17.45 nicht gleichmäßig über den Frequenzbereich verteilt wird, sondern zu hohen Frequenzen hin verschoben wird, die durch das digitale Tiefpassfilter unterdrückt werden. Von einer solchen Methode zur Rauschformung (noise shaping) macht man beim Delta-Sigma-Verfahren Gebrauch.

Das Blockschaltbild eines Delta-Sigma-Umsetzers in Abb. 17.46 entspricht dem des Oversampling-ADC mit dem Unterschied, dass hier ein $\Delta\Sigma$ Modulator eingesetzt wird, der neben der Überabtastung auch die Rauschformung durchführt. Der $\Delta\Sigma$-Modulator liefert Abtastwerte mit der Oversampling-Frequenz $f_{OS} = OSR \cdot f_a$ und der Wortbreite $N$. Das Tiefpassfilter begrenzt das Spektrum auf die Bandbreite des Eingangssignals $f_{max}$. Es liefert am Ausgang Werte mit einer um $x$ vergrößerten Wortbreite und der Frequenz $f_a = 2f_{max}$.

Die Reduzierung des Rauschens durch Rauschformung ist in Abb. 17.47 dargestellt. Während das Quantisierungsrauschen ohne Rauschformung gleichmäßig verteilt ist, wird es durch die Rauschformung zu hohen Frequenzen verschoben, die oberhalb des Durchlassbereichs des digitalen Filters liegen. Dadurch wird der Signal-Rausch-Abstand erhöht und gemäß (17.13) damit auch die effektive Bitzahl. Die Rauschformung lässt sich nicht nur in erster Ordnung anwenden, sondern auch in höherer Ordnung. Dadurch wird die Effektivität der Rauschformung verbessert. Man sieht in Abb. 17.47, dass mit zunehmender Ordnung immer mehr Rauschen aus dem Basisband verdrängt wird. Es verschwindet dadurch nicht, wird aber zu höheren Frequenzen verlagert, die sich durch das digitale Tiefpassfilter unterdrückt lassen.

Der kombinierte Gewinn an Auflösung durch Überabtastung und Rauschformung lässt sich angeben:

$$
x = (NSO + \tfrac{1}{2}) \,\mathrm{ld}\, OSR
$$

(17.29)

Darin ist $NSO$ die Noise Shaping Order, also die Ordnung der Rauschformung und $OSR = f_{OS}/f_a$ die Oversampling Ratio, also das Verhältnis von Überabtastfrequenz zu

Abb. 17.47. Rauschen im Durchlassbereich des Digitalfilters für verschiedene Ordnungen der Rauschformung
<!-- page-import:1073:end -->

<!-- page-import:1074:start -->
17.3 Analog-Digital Umsetzer 1037

**Abb. 17.48.** Zunahme der Wortbreite in Abhängigkeit von der Überabtastrate (OverSampling Ratio) $OSR = f_{OS}/f_a = f_{OS}/(2f_{max})$ und der Ordnung der Rauschformung (Noise Shaping Order) $NSO$

Abtastfrequenz. Dieser Zusammenhang ist in Abb. 17.48 graphisch dargestellt. Hier sind folgend Fälle dargestellt:

- Ohne Rauschformung $(NSO = 0)$ ergibt $x = \frac{1}{2}\,\mathrm{ld}\,OSR$ in Übereinstimmung mit (17.28) eine Erhöhung der Auflösung um 1 bit bei Vervierfachung der Abtastfrequenz.
- Bei Rauschformung 1. Ordnung ergibt sich aus (17.29) $x = \frac{3}{2}\,\mathrm{ld}\,OSR$, also bereits 3 Bits zusätzlich bei Vervierfachung der Abtastfrequenz.
- Bei Rauschformung 2. Ordnung ergibt sich $x = \frac{5}{2}\,\mathrm{ld}\,OSR$, also bereits 5 Bits bei vierfacher Abtastfrequenz.
- Bei Rauschformung 3. Ordnung erhält man $x = \frac{7}{2}\,\mathrm{ld}\,OSR$, also sogar 7 zusätzliche Bits bei vierfacher Abtastfrequenz.

Der Aufbau eines Delta-Sigma-Umsetzers mit Rauschformung 1. Ordnung ist in Abb. 17.49 dargestellt. Hier wird die Eingangsspannung nicht direkt digitalisiert, sondern die integrierte Differenz zwischen der Eingangsspannung und dem rückgewandelten Digitalwert. Durch diesen Regelkreis wird sichergestellt, dass die Spannungsdifferenz $U_e - U_Y$ im Mittel zu Null wird.

**Abb. 17.49.** Schaltung eines Delta-Sigma-Umsetzers mit Rauschformung in 1. Ordnung
<!-- page-import:1074:end -->

<!-- page-import:1075:start -->
1038  17. DA- und AD-Umsetzer

**Abb. 17.50.**  
Modell für einen Delta-Sigma-Umsetzer 1. Ordnung zu Berechnung der Übertragungsfunktionen

Zur Berechnung des Rauschverhaltens verwenden wir das Modell in Abb. 17.50. Bei der Modellierung des AD- und DA-Umsetzers kann man davon ausgehen, dass sie nichts anderes bewirken als dem Signal $U_I$ Rauschen zuzusetzen; hier ist es unerheblich, dass das Signal außerdem noch digitalisiert wird. Deshalb wird ihre Funktion in dem Modell durch einen Summierer repräsentiert, der das Quantisierungsrauschen $U_r$ zusetzt. Die Übertragungsfunktion für das Eingangssignal besitzt Tiefpassverhalten

$$
\frac{U_Y}{U_e} = -\frac{1}{1+\tau s}
$$

mit der Grenzfrequenz $f_g = 1/(2\pi\tau)$. Für die Rauschübertragungsfunktion erhält man

$$
\frac{U_Y}{U_r} = \frac{\tau s}{1+\tau s} \approx \tau s \qquad \text{für } \tau s \ll 1
$$

Das ist die in Abb. 17.47 dargestellte Hochpasscharakteristik für die erste Ordnung der Rauschformung. Man erkennt den nahezu proportional zur Frequenz verlaufenden Betrag.

Um bei der Überabtastung einen noch besseren Gewinn an Auflösung zu erreichen, setzt man meist eine Rauschformung höherer Ordnung ein. Die durch die Überabtastung zusätzlich gewonnene Wortbreite $x$ ist dann so groß, dass man die Auflösung des AD- und DA-Umsetzers auf $N = 1$ reduzieren kann, um den schaltungstechnischen Aufwand möglichst gering zu halten. Ein derartiger Umsetzer mit Rauschformung 2. Ordnung ist in Abb. 17.51 dargestellt. Die zusätzliche Rauschformung wird hier durch einen 2. Integrator und Summierer erreicht.

Zur Berechnung der Rauschübertragungsfunktion gemäß Abb. 17.52 wurde das Modell ebenfalls um einen Integrator und Summierer erweitert. Daraus ergibt sich:

$$
\frac{U_Y}{U_r} = \frac{\tau^2 s^2}{1+\tau s+\tau^2 s^2} \approx \tau^2 s^2 \qquad \text{für } \tau s \ll 1
$$

**Abb. 17.51.** Delta-Sigma-Umsetzer mit Rauschformung 2. Ordnung; hier mit 1Bit Umsetzern als Beispiel
<!-- page-import:1075:end -->

<!-- page-import:1076:start -->
17.3 Analog-Digital Umsetzer 1039

**Abb. 17.52.** Modell zur Berechnung der Rauschübertragungsfunktion bei einem Delta-Sigma-Umsetzer 2. Ordnung

also ein Hochpass 2. Ordnung, dessen Verstärkung bei niedrigen Frequenzen quadratisch ansteigt. Man erkennt in Abb. 17.47, dass dadurch deutlich weniger Rauschen im Basisband verbleibt.

Nach dem gezeigten Prinzip lässt sich die Ordnung der Rauschformung durch den Einsatz weiterer Integratoren und Summierer erhöhen und der Gewinn an Auflösung weiter verbessern. Man setzt Rauschformung bis zur 4. Ordnung ein. Ein Problem dabei ist jedoch, dass die entstehende Kette von Integratoren zur Instabilität neigt.

Durch den Einsatz von AD- und DA-Umsetzern mit einer Auflösung von nur einem einzigen Bit wird die schaltungstechnische Realisierung besonders einfach. Das zeigt das Beispiel in Abb. 17.53. Hier wird der AD-Umsetzer durch einen Komparator realisiert und der DA-Umsetzer durch einen Analogschalter. Mit dem Flip-Flop wird der Abtasttakt auf $f_{OS}$ festgelegt. Wenn die Ausgangsspannung des Integrators $U_I$ negativ ist, wird das Flip-Flop gesetzt $(Q = 1)$ und die Referenzspannung wird über den DAC an den Integrator gelegt. Da sie negativ ist, läuft der Integrator dadurch in positive Richtung. Der zeitliche Verlauf ist in Abb. 17.54 dargestellt. Um die Eingangsspannung zu messen, werden Referenz-Impulse angelegt, sodass der Integrator Ausgang möglichst nahe bei Null bleibt. Aus der Anzahl der Taktimpulse, die erforderlich sind, um das Eingangssignal zu kompensieren, lässt sich der Messwert berechnen. Der Strom durch den Eingangswiderstand muss genauso groß sein wie der mittlere Strom von der Referenzquelle:

$$
\frac{U_e}{R} = \frac{U_{ref}}{R}\frac{Z}{Z_{max}}
$$

(17.30)

Daraus ergibt sich das Ergebnis:

**Abb. 17.53.** Ausführungsbeispiel für einen Delta-Sigma-Umsetzer mit Rauschformung 1. Ordnung
<!-- page-import:1076:end -->

<!-- page-import:1077:start -->
1040  17. DA- und AD-Umsetzer

**Abb. 17.54.** Funktionsweise des $\Delta\Sigma$ Modulators in Abb. 17.53. Beispiel für konstante Eingangsspannung $U_e=\frac{5}{8}U_{ref}$. Das Flip-Flop wird für eine Taktperiode gesetzt, wenn $U_I$ bei der triggernden Taktflanke negativ ist.

$$
Z=\frac{U_e}{U_{ref}}\,Z_{max}
\qquad\qquad (17.31)
$$

Die einfachste Möglichkeit zur Realisierung des digitalen Tiefpassfilters ist ein Zähler, der die Anzahl der erforderlichen Kompensationsimpulse $Z$ zählt bei $Z_{max}$ Takten. Bei einer Eingangsspannung von $U_e=\frac{5}{8}U_{ref}$ in dem Beispiel von Abb. 17.54 sind 5 Kompensationsimpulse während 8 Takten erforderlich. Die Auflösung des Umsetzers wird also durch die Dauer der Mittelwertbildung bestimmt; hier ist $N=\mathrm{ld}\,Z_{max}=\mathrm{ld}\,8=3$.

Man erkennt bei dem Delta-Sigma-Umsetzer in Abb. 17.53 viel Ähnlichkeit mit dem Dual-Slope-Verfahren in Abb. 17.42. Bei beiden Verfahren wird die Eingangsspannung mittels eines Integrators mit einer Referenzspannung verglichen und die Taktimpulse zur Kompensation werden gezählt. Der Unterschied beim Delta-Sigma-Verfahren besteht darin, dass hier viele kurze Kompensationsimpulse eingesetzt werden, während beim Dual-Slope-Verfahren nur eine einziger Kompensationsvorgang angewendet wird, der sich über viele Takte erstreckt. Die Vorteile des Delta-Sigma-Verfahrens sind:

- Am Eingang wird nur ein einfaches Tiefpassfilter benötigt wegen der hohen Überabtastfrequenz. Überabtastraten von $OSR=f_{OS}/f_a=256$ sind üblich.
- Hoher Gewinn an Auflösung durch Rauschformung.
- Hohe Genauigkeit.
- Einfacher Aufbau bei Einsatz von AD- und DA-Umsetzern mit 1 bit Auflösung.
- Lässt sich leicht in integrierten Schaltungen realisieren.

## 17.3.7 Genauigkeit von AD-Umsetzern

### 17.3.7.1 Statische Fehler

Neben dem systematischen Quantisierungsrauschen treten mehr oder weniger große schaltungsbedingte Fehler auf. Wenn man bei der idealen Übertragungskennlinie in Abb. 17.55 die Stufenmitten verbindet, erhält man, wie dünn eingezeichnet, eine Gerade durch den Ursprung mit der Steigung 1. Bei einem realen AD-Umsetzer geht diese Gerade nicht durch Null (Offsetfehler) und ihre Steigung weicht von Eins ab (Verstärkungsfehler). Der Verstärkungsfehler verursacht eine über den Aussteuerungsbereich konstante relative Abweichung der Ausgangsgröße vom Sollwert, der Offsetfehler dagegen eine konstante absolute Abweichung. Diese beiden Fehler lassen sich in der Regel durch Abgleich von
<!-- page-import:1077:end -->

<!-- page-import:1078:start -->
17.3 Analog-Digital Umsetzer 1041

Abb. 17.55.  
Übertragungsverhalten eines AD-Umsetzers mit Linearitätsfehler

Nullpunkt und Vollausschlag beseitigen. Dann verbleiben nur noch die Abweichungen infolge Drift und Nichtlinearität.

Eine über den systematischen Quantisierungsfehler hinausgehende Nichtlinearität entsteht immer dann, wenn die Stufen nicht gleich breit sind. Zur Bestimmung des Linearitätsfehlers gleicht man zunächst Nullpunkt und Verstärkung ab und ermittelt die maximale Abweichung der Eingangsspannung von der idealen Geraden. Dieser Wert abzüglich des systematischen Quantisierungsfehlers von $\frac{1}{2}\,U_{LSB}$ stellt die totale Nichtlinearität dar. Sie wird in der Regel in Bruchteilen der LSB-Einheit angegeben. Bei dem Beispiel in Abb. 17.55 beträgt sie $\pm \frac{1}{2}\,U_{LSB}$.

Ein weiteres Maß für den Linearitätsfehler ist die differentielle Nichtlinearität. Sie gibt an, um welchen Betrag die Breite der einzelnen Stufen vom Sollwert $U_{LSB}$ abweicht. Ist dieser Fehler größer als $U_{LSB}$, werden einzelne Zahlen übersprungen (Missing Code). Bei noch größeren Abweichungen kann die Zahl $Z$ bei Vergrößerung der Eingangsspannung sogar abnehmen (Monotoniefehler).

## 17.3.7.2 Dynamische Fehler

Bei der Anwendung von AD-Umsetzern kann man zwei Bereiche unterscheiden, nämlich einerseits den Einsatz in Digitalvoltmetern und andererseits den Einsatz in der Signalverarbeitung. Bei Digitalvoltmetern geht man davon aus, dass die Eingangsspannung während der Umsetzdauer konstant ist. Bei der Signalverarbeitung hingegen ändert sich die Eingangsspannung fortwährend. Zur digitalen Verarbeitung entnimmt man aus dieser Wechselspannung Proben in äquidistanten Zeitabständen mit Hilfe eines Abtast-Halte-Gliedes. Diese Proben werden mit einem AD-Umsetzer digitalisiert. Gemäß dem im Abschnitt 17.1.1.1 behandelten Abtasttheorem muss Abtastfrequenz $f_a$ mindestens doppelt so groß sein wie die höchste Signalfrequenz $f_{max}$. Daraus ergibt sich die Forderung, dass die Umsetzdauer des AD-Umsetzers und die Einstellzeit des Abtast-Halte-Gliedes, das in dem Abschnitt 17.4 behandelt wird, zusammen kleiner als $1/(2f_{max})$ sein muss. Um diese Forderung mit erträglichem Aufwand realisieren zu können, begrenzt man die Bandbreite des Signals auf den unbedingt erforderlichen Wert. Deshalb schaltet man meist ein Tiefpassfilter vor.
<!-- page-import:1078:end -->

<!-- page-import:1079:start -->
1042 17. DA- und AD-Umsetzer

Abb. 17.56.
Wirkung des Apertur-Jitters

Zur Beurteilung der Genauigkeit muss man deshalb die Eigenschaften von AD-Umsetzer und Abtast-Halte-Glied gemeinsam betrachten. Es gibt z.B. keinen Sinn, einen 12 bit-AD-Umsetzer mit einem Abtast-Halte-Glied zu betreiben, das sich innerhalb der zur Verfügung stehenden Zeit nicht auf 1/4096 ≈ 0,025% des Aussteuerbereichs einstellt.

Ein zusätzlicher dynamischer Fehler wird durch die Unsicherheit des Abtast-Augenblickes (Apertur-Jitter) verursacht. Wegen der Aperturzeit $t_A$ des Abtast-Halte-Gliedes wird der Messwert erst verspätet entnommen. Wenn die Aperturzeit konstant ist, wird aber jeder Messwert um dieselbe Zeit verzögert. Deshalb ist eine äquidistante Abtastung trotzdem gewährleistet. Wenn die Aperturzeit aber wie in Abb. 17.56 um den Apertur-Jitter $\Delta t_A$ schwankt, entsteht ein Messfehler, der gleich der Spannungsänderung $\Delta U$ in dieser Zeit ist. Zur Berechnung des maximalen Fehlers $\Delta U$ denken wir uns als Eingangssignal eine Sinusschwingung mit der maximal vorgesehenen Frequenz $f_{max}$. Die größte Steigung tritt im Nulldurchgang auf:

$$\left.\frac{dU}{dt}\right|_{t=0} = \hat{U}\,\omega_{max}$$

Daraus erhalten wir den Amplitudenfehler:

$$\Delta U = \hat{U}\,\omega_{max}\,\Delta t_A$$

Wenn er kleiner sein soll als die Quantisierungsstufe $U_{LSB}$ des AD-Umsetzers, ergibt sich daraus für den Apertur-Jitter die Bedingung

$$\Delta t_A < \frac{U_{LSB}}{\hat{U}\,\omega_{max}} = \frac{U_{LSB}}{\frac{1}{2}\,U_{max}\,\omega_{max}} \qquad (17.32)$$

Bei hohen Signalfrequenzen ist diese Forderung sehr schwer zu erfüllen, wie folgendes Zahlenbeispiel zeigt: Bei einem 12 bit-Umsetzer ist $U_{LSB}/U_{max} = 1/4096$. Wenn die maximale Signalfrequenz 100 MHz beträgt, muss nach (17.32) der Apertur-Jitter kleiner als 0,78 ps sein.

### 17.3.7.3 Vergleich der Verfahren

Die verschiedenen Verfahren zur AD-Umsetzung werden in Abb. 17.57 bezüglich Aufwand, Abtastrate und Genauigkeit miteinander verglichen. Dabei zeigt sich, dass das Parallelverfahren das schnellste, aber auch das aufwendigste ist. Das Pipeline-Verfahren ist bei deutlich geringerem Aufwand nur wenig langsamer. Auch hier erhält man bei jedem
<!-- page-import:1079:end -->

<!-- page-import:1080:start -->
17.3 Analog-Digital Umsetzer 1043

| Verfahren | Umsetzdauer Takte | Latenzzeit Takte | Aufwand | Geschwindigkeit | Genauigkeit |
|---|---:|---:|---|---|---|
| Parallelverfahren | 1 | 1 | hoch | sehr schnell | gering |
| Pipeline Verfahren | 1 | N | mäßig | schnell | gut |
| Wägeverfahren | N | N | gering | langsam | gut |
| Dual-Slope-Verfahren | $2^N$ | $2^N$ | sehr gering | sehr langsam | hoch |
| Delta-Sigma-Verfahren | $OSR$ | $OSR$ | mäßig | mäßig | hoch |

**Abb. 17.57.** Vergleich der Verfahren zur AD-Umsetzung

Takt einen neuen Abtastwert. Allerdings besteht zwischen der Abtastung des Analogsignals und der Ausgabe der digitalisierten Werte eine Verzögerung von $N$ Takten. Dies wird durch die Latenzzeit zum Ausdruck gebracht. Das Wägeverfahren benötigt für jedes Bit einen Taktschritt; daher ist es relativ langsam; trotzdem ist auch hier ein DA-Umsetzer erforderlich. Das Dual-Slope-Verfahren ist das einfachste Verfahren und bietet selbst mit billigen Bauteilen eine hohe Genauigkeit. Allerdings ist es besonders langsam. Mit dem Delta-Sigma-Verfahren erreicht man eine genauso hohe Genauigkeit, aber man benötigt hier zusätzlich ein digitales Tiefpassfilter für die digitalisierten Werte. Die praktikablen Abtastfrequenzen und Auflösungen der beschriebenen Verfahren sind in Abb. 17.58 gegenübergestellt.

Abb. 17.58. Abtastfrequenzen und Auflösung von AD-Umsetzern
<!-- page-import:1080:end -->
