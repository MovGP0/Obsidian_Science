# Transmission of Sensor Signals

<!-- page-import:1146:start -->
19.5 Übertragung von Sensorsignalen 1109

**Abb. 19.53.**  
Drehgeber mit Asolutwerterfassung  
der Position

**Abb. 19.54.**  
Gray-Code für 3 bit

| $P$ | $p_2$ | $p_1$ | $p_0$ |
|---|---:|---:|---:|
| 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 |
| 2 | 0 | 1 | 1 |
| 3 | 0 | 1 | 0 |
| 4 | 1 | 1 | 0 |
| 5 | 1 | 1 | 1 |
| 6 | 1 | 0 | 1 |
| 7 | 1 | 0 | 0 |

die Marken auf den Spuren im Prinzip dual kodieren; zur Erhöhung der Störsicherheit verwendet man aber meist den in Abb. 19.54 dargestellten Gray-Code. Hier ändert sich beim Übergang zur nächsten Zahl jeweils nur ein einziges Bit.

## 19.5 Übertragung von Sensorsignalen

Zwischen dem Sensor und dem Ort, an dem die Signale ausgewertet werden, liegen häufig große Entfernungen und Umgebungen mit hohen Störpegeln. Deshalb sind in solchen Fällen besondere Maßnahmen erforderlich, damit die Messwerte nicht durch äußere Einflüsse verfälscht werden. Je nach Anwendungsbereich und der erforderlichen Sicherheitsklasse unterscheidet man zwischen einer galvanischen Signalübertragung und der aufwendigeren Technik mit galvanischer Trennung.

### 19.5.1 Galvanisch gekoppelte Signalübertragung

Bei großen Leitungslängen lässt sich der ohmsche Leitungswiderstand $R_L$ nicht vernachlässigen. Selbst kleine, zum Betrieb des Sensors erforderliche Ströme führen dann zu so hohen Spannungsabfällen, dass sie den Messwert untragbar verfälschen. Dieses Problem lässt sich dadurch lösen, dass man das Messsignal über zwei zusätzliche Leitungen zur Auswertung führt, über die kein Strom fließt. Zur Gewinnung der Messgröße setzt man dann in der Auswertung einen Elektrometer-Subtrahierer wie in Abb. 19.55 ein. Der

**Abb. 19.55.** Vierdrahtmessung am Beispiel eines Widerstand-Temperaturfühlers

$U_a = I_0 R_S = U_S \qquad\qquad U_{Gl} = I_0 R_L$
<!-- page-import:1146:end -->

<!-- page-import:1147:start -->
1110  19. Sensorik

$V_1 = I_0(R_S + R_L)\qquad V_2 = I_0(R_S + 2R_L)\qquad U_a = 2V_1 - V_2 = I_0R_S = U_S$

**Abb. 19.56.** Dreidrahtmessung am Beispiel eines Widerstands-Temperaturfühlers

Spannungsabfall im Messstromkreis bewirkt hier lediglich eine Gleichtaktaussteuerung $U_{Gl} = I_0R_L$, die nach der Subtraktion herausfällt.

Man kann eine Leitung einsparen, wenn man voraussetzt, dass der Widerstand in allen Leitungen gleich groß ist, und kommt so zur Dreileitermethode in Abb. 19.56. Hier lässt sich der Spannungsabfall an $R_L$ herausrechnen, indem man den Ausdruck

$$
U_2 = 2V_1 - V_2 = 2U_S + 2I_0R_L - U_S - 2I_0R_L = U_S
$$

bildet. Wenn die Sensorsignale klein sind, wie z.B. bei Druckaufnehmern oder Thermoelementen, muss man sie in unmittelbarer Nachbarschaft des Sensors vorverstärken, bevor man sie über eine längere Leitung überträgt. Abbildung 19.57 zeigt dieses Prinzip. Das Ausgangssignal wird hier allerdings durch Spannungsabfall an $R_L$ verfälscht. Wenn man jedoch die Verstärkung $A$ groß genug wählt, spielt dieser Fehler keine große Rolle. Er lässt sich ganz vermeiden, wenn man auch hier zusätzlich die Vierleitertechnik von Abb. 19.55 einsetzt. Allerdings benötigt man dann auf der Empfängerseite einen zusätzlichen Subtrahierer.

Einfacher ist es, in diesem Fall das Sensorsignal in einen dazu proportionalen Strom umzuwandeln. Ein Strom wird durch die Leitungswiderstände nicht verfälscht. Das Prinzip ist in Abb. 19.58 dargestellt. Die spannungsgesteuerte Stromquelle setzt die Sensorspannung $U_S$ in einen Strom $I_S = SU_S$ um. Er bewirkt an dem Arbeitswiderstand einen Spannungsabfall $U_a = SR_1U_S$. Wählt man $R_1 = 1/S$, ergibt sich wieder das Sensorsignal. Man kann aber die Anordnung gleichzeitig zur Verstärkung der Sensorspannung verwenden, indem man $A = SR_1 \gg 1$ macht.

Eine weitere Vereinfachung der Signalübertragung ist dadurch möglich, dass man dafür sorgt, dass die Stromaufnahme des Sensors und der spannungsgesteuerten Stromquelle konstant sind. In diesem Fall kann man den Signalstrom $I_S$ und den Verbraucherstrom $I_V$ über dieselbe Leitung übertragen. Man benötigt dann nur noch zwei Leitungen, wie man in

**Abb. 19.57.** Vorverstärker beim Sensor reduziert Fehler bei der Signalübertragung
<!-- page-import:1147:end -->

<!-- page-import:1148:start -->
19.5 Übertragung von Sensorsignalen 1111

$U_a = I_S R_1 = SU_S R_1 = AU_S$

**Abb. 19.58.** Vorverstärker mit Stromausgang beim Sensor eliminiert Fehler bei der Signalübertragung. Beispiel für eine integrierte spannungsgesteuerte Stromquelle: XTR 105 von Texas Instruments

Abb. 19.59 erkennt. Sie dienen sowohl zur Versorgung des Sensors und der Betriebsschaltung als auch zur Übertragung des Messsignals. Wenn man am Messwiderstand den Strom $I_V$ bzw. die daraus resultierende Spannung $R_1 I_V$ subtrahiert, bleibt das Sensorsignal übrig. Wie bei der Stromübertragung in Abb. 19.58 beeinträchtigen die Leitungswiderstände $R_L$ das Messergebnis nicht. Voraussetzung ist allerdings, dass die Betriebsspannung $U_b$ so groß ist, dass trotz aller im Stromkreis auftretenden Spannungsabfälle die Stromquellen nicht in die Sättigung gehen.

Die Ströme $I_V + I_S$ einer Stromschleife (Current loop) sind genormt. Sie liegen zwischen 4 mA und 20 mA. Dabei entspricht 4 mA dem unteren Bereichsende und 20 mA dem oberen. Bei unipolaren Signalen legt man den Nullpunkt auf 4 mA. Bei bipolaren Signalen legt man ihn auf 12 mA und erhält dann einen Aussteuerbereich von ± 8 mA. Wenn man, wie üblich, $R_1 = 250\,\Omega$ wählt, ergeben sich auf der Empfängerseite in beiden Fällen Spannungen von $U_a = 1 \dots 5$ V. Ein integrierter Stromschleifen-Empfänger, der zusätzlich eine Referenzspannungsquelle zur Wiederherstellung des Nullpunkts besitzt, ist der Current Loop Receiver RCV 420 von Texas Instruments.

Der innere Aufbau einer Sensor-Betriebsschaltung mit Stromschleifenausgang ist in Abb. 19.60 dargestellt. Das Kernstück der Schaltung ist eine Transistor-

$U_a = (I_V + I_S)R_1 = R_1 I_V + R_1 SU_S$

**Abb. 19.59.** Zweidraht-Stromschleife zur Sensorsignalübertragung. Current Loop Transmitter: XTR 105 von Texas Instruments bzw. AD 693 von Analog Devices
<!-- page-import:1148:end -->

<!-- page-import:1149:start -->
1112  19. Sensorik

$U_1=\left(1+\frac{2R_2}{R_1}\right)U_S$

$I_a=I_N+I_S=\frac{R_3}{R_4}\frac{U_{ref}}{R_I}+\frac{R_3}{R_5}\frac{U_1}{R_I}$

**Abb. 19.60.** Innerer Aufbau eines Current Loop-Transmitters am Beispiel des AD 693 von Analog Devices bzw. XTR 105 von Texas Instruments. Als Beispiel wurde hier ein Drucksensor angeschlossen.

Präzisionsstromquelle, bestehend aus dem Transistor T, dem Operationsverstärker OV 1 und dem Strommesswiderstand $R_1$. Der Strom $I_a$ stellt sich so ein, dass die Eingangsspannungsdifferenz von OV 1 Null wird. Wenn man zur Vereinfachung $R_4$ einmal weglässt, ist dies der Fall, wenn der Spannungsabfall $I_aR_1=U_1$ ist. Der Widerstand $R_4$ dient lediglich dazu, den Stromnullpunkt von $I_N=4\,\mathrm{mA}$ bzw. $12\,\mathrm{mA}$ zu addieren. Das Sensorsignal wird mit dem Elektrometer-Subtrahierer aufbereitet und steuert dann die Stromquelle. Der Kunstgriff bei der Anordnung in Abb. 19.60 besteht darin, dass die Verbraucherströme für die vier Operationsverstärker, die Referenzspannungsquelle und angeschlossene Sensoren ebenfalls durch den Strommesswiderstand $R_1$ fließen. Ihre Summe wird also bei der Strommessung mit berücksichtigt. Durch den Transistor T fließt dann nur noch der Strom, der an dem Soll-Ausgangsstrom fehlt. Damit das auch beim kleinsten Schleifenstrom von $I_a=4\,\mathrm{mA}$ funktioniert, muss die Summe aller Verbraucherströme $I_V<4\,\mathrm{mA}$ sein. Bei den handelsüblichen integrierten Schaltungen liegt die interne Stromaufnahme unter $1\,\mathrm{mA}$, so dass noch bis zu $3\,\mathrm{mA}$ für den Betrieb des Sensors zur Verfügung stehen.

Ein positiver Nebeneffekt des beschriebenen Verfahrens besteht darin, dass man Störungen leicht erkennen kann: Ist der Schleifenstrom kleiner als $4\,\mathrm{mA}$, liegt eine Störung vor, z.B. ein Nebenschluss oder eine Unterbrechung.

## 19.5.2 Galvanisch getrennte Signalübertragung

Bei Signalübertragung über größerer Entfernungen muss man davon ausgehen, dass zwischen den Nullleitern nennenswerte Potentialdifferenzen bestehen, die nicht nur zu hohen Ausgleichsströmen in der Masseleitung führen und das Messsignal verfälschen, sondern auch die Schaltungen beschädigen können. In diesem Fall ist die Signalübertragung mit Potentialtrennung nützlich. Als Bauelemente sind hier Optokoppler und Transformatoren gebräuchlich. Beide erfordern allerdings auf der Senderseite einen Modulator und einen Demodulator im Empfänger, da eine direkte Übertragung eines Sensorsignals nicht mög-
<!-- page-import:1149:end -->

<!-- page-import:1150:start -->
1113

## 19.5 Übertragung von Sensorsignalen

Abb. 19.61. Prinzip der optischen Übertragung von Sensorsignalen mit Lichtleitern

lich ist. Die sicherste Möglichkeit zur Signalübertragung stellen Lichtleiter dar, die man als Optokoppler mit einem ausgedehnten Lichtweg betrachten kann. Sie werden weder von elektrostatischen noch von elektromagnetischen Feldern beeinträchtigt und können nahezu beliebig große Potentialdifferenzen überbrücken. Abbildung 19.61 zeigt das Prinzip zur optischen Übertragung von Sensorsignalen.

Eine Übertragung von Analogsignalen ist jedoch mit Lichtleitern ungebraüchlich, weil die Dämpfung der optischen Übertragungsstrecke schlecht definiert ist, und auch Temperaturschwankungen und Alterung unterworfen ist. Deshalb wandelt man das Sensorsignal im Sender in ein serielles digitales Signal. Dazu gibt es verschiedene Möglichkeiten. Bei der Spannungs-Frequenz-Umsetzung ist die Frequenz eine lineare Funktion der Spannung; das Tastverhältnis des Ausgangssignals ist konstant $1 : 1$. Bei der Spannungs-Tastverhältnis-Umsetzung ist die Frequenz konstant, dafür aber das Tastverhältnis eine lineare Funktion der Spannung. Abbildung 19.62 zeigt das Prinzip der beiden Verfahren. Sie sind besonders dann vorteilhaft, wenn man auf der Empfängerseite ein Analogsignal zurückgewinnen möchte.

Man kann die Signale auch digital weiterverarbeiten, indem man die Frequenz bzw. das Tastverhältnis digital misst. Wenn man jedoch hohe Genauigkeit benötigt, ist es besser, die Digitalisierung mit einem handelsüblichen AD-Umsetzer auf der Sensorseite vorzunehmen und das Ergebnis seriell zu übertragen.

$U_S$

oberes Bereichsende

unteres Bereichsende

$t$

$U_f$

1

0

$U_n$

1

0

Oben: Analoges Sensorsignal  
Mitte: Spannungs-Frequenz-Umsetzung  
Unten: Spannungs-Tastverhältnis-Umsetzung

Abb. 19.62. Digitale Modulationsverfahren
<!-- page-import:1150:end -->
