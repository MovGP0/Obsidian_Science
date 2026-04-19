# Sine-Wave Oscillations

<!-- page-import:0933:start -->
896 14. Signalgeneratoren

Abb. 14.28. Arbiträrgenerator (Arbitrary Waveform Generator AWG). Die angegebenen Wortbreiten sind lediglich Beispiele. Das RAM hat hier eine Größe von 2 MByte.

Zur Erzeugung hoher Frequenzen mit hoher Frequenzgenauigkeit, die man in der Nachrichtentechnik benötigt, setzt man ebenfalls Quarz-Oszillatoren ein zusammen mit einem Phase Locked Loop (PLL) zur Frequenzvervielfachung, siehe Kapitel 27.

## 14.4 Sinusschwingungen

Früher hat man niederfrequente Sinusschwingungen mit einem Funktionsgenerator erzeugt, indem man das Dreiecksignal an den Spitzen abgeflacht hat. Dazu hat man meist ein Diodennetzwerk eingesetzt. Die gebräuchlichste Schaltung war der MAX 038 von Maxim; damit konnte man Sinus-, Dreieck- und Rechtecksignale im Frequenzbereich von 1 Hz ... 1 MHz erzeugen bei Klirrfaktoren von 1%. Heutzutage generiert man die Sinusschwingung digital und erzeugt dann das Analogsignal mit einem DA-Umsetzer. Auf diese Weise lassen sich Sinusschwingungen mit hoher Qualität von beliebig niedrigen Frequenzen bis zu mehreren Gigahertz erzeugen.

### 14.4.1 Generator für beliebige Signale

Bei einem Generator für beliebige Signale (Arbitrary Waveform Generator AWG) wird die gewünschte Signalform - z.B. ein Sinus - von einem Microcontroller einmal berechnet und in ein RAM geschrieben. Danach wird der Inhalt des RAMs ausgegeben, indem ein Zähler den Adressraum periodisch hochzählt. Das Blockschaltbild in Abb. 14.28 zeigt das Prinzip. Der DA-Umsetzer erzeugt das analoge Ausgangssignal. Bei einer Wortbreite von 16 Bit erzielt man einen theoretischen Signal-Rausch-Abstand von 96 dB.

Die Frequenz des Ausgangssignals wird natürlich durch die Taktfrequenz $f_C$ bestimmt, mit der der Zähler hochzählt. Darüber hinaus hängt sie aber auch davon ab, wie viele Perioden der Sinusschwingung bei der Initialisierung in das RAM geschrieben wurden und ob das RAM ganz oder nur bis zu einer bestimmten Adresse hochgezählt wird, die kleiner als $2^n$ ist. Wichtig ist dabei in jedem Fall, dass der letzte ausgegebene Wert mit dem ersten ohne Stoßstelle aneinander anschließt. Die maximale Ausgangsfrequenz ergibt sich, wenn man im Wechsel den positiven und negativen Scheitelwert der Sinusschwingung ausgibt. In diesem Fall erhält man ein Rechtecksignal mit der Frequenz $f_C/2$.

Man muss das RAM natürlich nicht unbedingt mit einem Sinussignal beschreiben, sondern man kann z.B. auch ein Dreieck- oder Sägezahn-Signal abspeichern, um die von einem Funktionsgenerator gewohnten Signale zu erzeugen. Darüber hinaus kann man das RAM meist auch von außen mit beliebigen Testsignalen beschreiben, die man z.B. mit einem PC berechnet. Daher rührt der Name Arbiträrgenerator (Arbitrary Waveform Generator, AWG).
<!-- page-import:0933:end -->

<!-- page-import:0934:start -->
14.4 Sinusschwingungen 897

**Abb. 14.29.** Direkte Digitale Synthese, DDS. Die angegebenen Wortbreiten sind lediglich Beispiele. Das ROM hat hier eine Größe von 128 kByte

## 14.4.2 Direkte Digitale Synthese

Bei der Direkten Digitalen Synthese (DDS) in Abb. 14.29 wird die Sinusfunktion permanent in einem ROM gespeichert. Die Adresse stellt hier gleichzeitig die Phase der Sinusschwingung dar. Im Unterschied zum Arbiträrgenerator wird die Phase hier nicht mit einem Zähler erzeugt, sondern mit einem Akkumulator, der aus einem Register und einem Addierer besteht; dadurch wird die aktuelle Phase $\varphi$ bei jedem Takt um das Phaseninkrement $\Delta \varphi$ erhöht. Der Wert von $\Delta \varphi$ lässt sich von außen vorgeben; er bestimmt die Frequenz des Ausgangssignals:

$$
f \;=\; \frac{\Delta \varphi}{2^m}\, f_C
$$

(14.1)

Die niedrigste Frequenz erhält man für $\Delta \varphi = 1$; dann ist $f = f_C/2^m$. Die höchste Frequenz ergibt sich für $\Delta \varphi = 2^{m-1}$; dann ist $f = f_C/2$; am Ausgang erhält man dann ein Rechteck mit der halben Taktfrequenz. In diesem Fall werden also nicht alle Werte der Tabelle ausgegeben, sondern nur die beiden Scheitelwerte; alle dazwischen liegenden Werte werden übersprungen. Um eine hohe Frequenzgenauigkeit und -Stabilität zu erreichen, verwendet man einen Quarz-Oszillator mit fester Frequenz als Taktgenerator. Um die Frequenz trotzdem fein einstellen zu können, gibt man dem Phasenakkumulator eine Wortbreite, die deutlich größer ist als der Adressraum der Sinus-Tabelle. Für die Adressierung der Tabelle verwendet man nur die obersten Bits der Phase $\varphi$.

Um die Tabelle möglichst effizient zu gestalten, speichert man hier keine ganze Sinusschwingung, sondern lediglich einen Quadranten, also die Funktionswerte von $0 \dots 90^\circ$. Die übrigen Werte ergeben sich, indem man die Tabelle rückwärts ausliest oder das Vorzeichen invertiert.

Eine Frequenzmodulation ist bei dem DDS-Verfahren besonders einfach: man muss lediglich die Sprungweite $\Delta \varphi$ umschalten, wie man in (14.1) erkennt. Auch eine Phasenmodulation ist auf einfache Weise möglich; dazu schaltet man einen Addierer vor den Adresseingang der Tabelle, mit dem man beliebige Winkel addieren kann. Zur Amplitudenmodulation schaltet man einen Multiplizierer zwischen die Tabelle und den Digital-Analog-Umsetzer. Für einfache Anwendungen sind vollständige DDS-Generatoren als integrierte Schaltungen erhältlich, z.B. von Analog Devices. Im allgemeinen Fall realisiert man einen DDS-Generator in einem FPGA mit einem externen DA-Umsetzer.
<!-- page-import:0934:end -->

<!-- page-import:0935:start -->
[unclear]
<!-- page-import:0935:end -->
