# Calibration of Sensor Signals

<!-- page-import:1123:start -->
1086  19. Sensorik

**Abb. 19.8.**  
Optimaler Fehlerausgleich bei einem  
Dreipunkt-Abgleich

**Abb. 19.9.**  
Vereinfachte Methode zur Berechnung des  
Linearisierungswiderstandes für PTCs

negativ. Dieser Fall tritt auf, wenn der quadratische Term der Sensorkennlinie negativ ist, wie z.B. bei den Platin-Sensoren.

Die beschriebene Linearisierung ergibt sich auch, wenn man die Stromquelle in Abb. 19.6 mit dem Linearisierungswiderstand zusammenfasst und in eine äquivalente Spannungsquelle wie in Abb. 19.7 umrechnet. Der Linearisierungswiderstand $R_{lin}$ ist in beiden Fällen derselbe. Abbildung 19.10 zeigt die resultierende Messschaltung. Die Spannung $U_{\vartheta}$ ist hier die linearisierte Funktion der Temperatur. Um sie nicht durch Belastung zu verfälschen, legt man sie an den nichtinvertierenden Eingang eines Elektrometerverstärkers. Durch die Beschaltung mit $R_1$, $R_2$ und $R_3$ kann er gleichzeitig die gewünschte Verstärkung und Nullpunktverschiebung bewirken. Man erkennt in Abb. 19.10, dass sich die resultierende Schaltung auch als Messbrücke interpretieren lässt.

An einem Beispiel soll die Dimensionierung der Schaltung erklärt werden. Die Schaltung soll eine Temperatur im Bereich von 0°C bis 100°C messen und Ausgangsspannungen zwischen 0 V und 2 V liefern. Die Referenzspannung soll 2,5 V betragen. Als Sensor wird ein Silizium-Kaltleiter gewählt, hier der Typ TSP 102 F. Die Linearisierung soll für diesen Bereich berechnet werden. Dazu entnimmt man aus dem Datenblatt die Widerstandswerte an den Bereichsenden und in der Bereichsmitte gemäß Abb. 19.11. Nach Gl. (19.4) folgt daraus ein Linearisierungswiderstand $R_{lin} = 2851\ \Omega$. Der Linearisierungsfehler ist in der Mitte zwischen den Stützstellen, also hier bei 25°C und 75°C, am größten. Er beträgt aber lediglich 0,2 K! An dem Spannungsteiler $R_{\vartheta}$, $R_{lin}$ ergeben sich dann die in Abb. 19.11 eingetragenen Werte für $U_{\vartheta}$. Man erkennt, dass die Differenzen zur Bereichsmitte tatsächlich gleich groß werden.

Zur Berechnung der Widerstände $R_1$, $R_2$ und $R_3$ kann man einen der Werte vorgeben. Wir wählen $R_2 = R_{lin} = 2851\ \Omega$. Die Widerstände $R_1$ und $R_3$ bestimmen die Verstärkung und den Nullpunkt. Die Verstärkung der Schaltung ergibt sich einerseits aus der geforderten Ausgangsspannung

$$
A = \frac{U_{mess\,O} - U_{mess\,U}}{U_{\vartheta O} - U_{\vartheta U}} = \frac{2{,}00\ \mathrm{V}}{380\ \mathrm{mV}} = 5{,}263
$$

und andererseits aus der Verstärkung für den nicht invertierenden Verstärker:

$$
A = 1 + R_3/(R_1 \parallel R_2)
$$

Bei dem gewünschten Nullpunkt $U_{mess\,U} = 0\ \mathrm{V}$ sind die Widerstände $R_1$ und $R_3$ virtuell parallel geschaltet. Daran muss dann die Spannung $U_{\vartheta}$ abfallen:
<!-- page-import:1123:end -->

<!-- page-import:1151:start -->
1114  19. Sensorik

Abb. 19.63. Prinzipielle Anordnung zur Kalibrierung von Sensorsignalen durch Abgleich des Nullpunkts $U_N$ und der Verstärkung $A$

## 19.6 Kalibrierung von Sensorsignalen

Manche Sensoren sind so eng toleriert, dass eine Kalibrierung nicht erforderlich ist, wenn man auch in der Betriebsschaltung ausreichend eng tolerierte Bauelemente einsetzt. In diesem Fall lässt sich der Sensor sogar ohne neuen Abgleich austauschen. In einer derart glücklichen Situation befindet man sich jedoch nur bei einigen Temperatursensoren. Im allgemeinen Fall ist bei einem Sensorwechsel immer eine neue Kalibrierung erforderlich. Bei hohen Genauigkeits-Anforderungen kann sogar eine regelmäßige Kalibrierung notwendig sein.

### 19.6.1 Kalibrierung des Analogsignals

Um den Vorgang der Kalibrierung unabhängig von den speziellen Eigenschaften des Sensors erklären zu können, soll die Abgleichschaltung wie in Abb. 19.63 ganz von der Betriebsschaltung des Sensors getrennt werden. Wir wollen einmal davon ausgehen, dass das Sensorsignal linear von der physikalischen Größe $G$ abhängt bzw. von der Betriebsschaltung linearisiert wird. Dann lässt sich die Eingangsspannung der Kalibrierungsschaltung in der Form

$$
U_e = a' + m'G
$$

darstellen. Das kalibrierte Signal soll in der Regel proportional zur Messgröße sein gemäß der Gleichung:

$$
U_a = mG
$$

Abbildung 19.64 zeigt den Verlauf der Spannungen am Beispiel einer Temperaturmessung. Die Abgleichschaltung muss also eine Nullpunkt- und eine Verstärkungskorrektur ermöglichen. Eine wichtige Randbedingung ist, dass die Kalibrierung iterationsfrei erfolgen kann, d.h., es soll eine Prozedur geben, bei der die eine Einstellung die andere nicht beeinflusst. Dies ist bei der Anordnung in Abb. 19.63 möglich. Ihre Ausgangsspannung beträgt:

$$
U_a = A(U_e + U_N)
$$

Setzt man die Gleichungen (19.16) ein, ergeben sich durch Koeffizientenvergleich die Abgleichbedingungen:

Nullpunkt: $U_N = -a'$

Verstärkung: $A = m/m'$

Zum Nullpunktabgleich legt man an den Sensor die zum Messwert $U_a = 0$ gehörige physikalische Größe $G = G_0$ an. Dann gleicht man mit $U_N$ die Ausgangsspannung auf

(19.16)

(19.17)

(19.18)
<!-- page-import:1151:end -->

<!-- page-import:1152:start -->
19.6 Kalibrierung von Sensorsignalen 1115

**Abb. 19.64.**  
Veranschaulichung eines Abgleichvorgangs: zuerst Nullpunktabgleich, dann Verstärkungsabgleich.  
Beispiel: Fieberthermometer

$U_a = 0$ ab. Dieser Abgleich ist von der zufälligen Einstellung der Verstärkung $A$ unabhängig; man muss lediglich sicherstellen, dass $A \neq 0$ ist. In Abb. 19.64 erfolgt durch den Nullpunktabgleich eine Parallelverschiebung der Eingangskennlinie durch den Nullpunkt.

Zum Verstärkungsabgleich legt man die physikalische Größe $G_1$ an und kalibriert die Verstärkung $A$ so, dass sich der Sollwert der Ausgangsspannung $U_{a1} = mG_1$ ergibt. In Abb. 19.64 entspricht dies einer Drehung der verschobenen Eingangskennlinie, bis sie mit der gewünschten Funktion zusammenfällt. Der Nullpunktabgleich wird dadurch nicht beeinträchtigt, weil bei der Verstärkungseinstellung lediglich der Faktor $A$ in Gl. (19.18) verändert wird.

Man erkennt, dass die umgekehrte Reihenfolge nicht zu einem iterationsfreien Abgleich führt. Es ist demnach zwingend erforderlich, dass der Nullpunkteinsteller vor dem Verstärkungseinsteller im Signalpfad liegt. Die Schaltung in Abb. 19.63 kann also nicht anders angeordnet werden.

Die Kalibrierung soll noch an dem Beispiel des Fieberthermometers in Abb. 19.64 erläutert werden. Zur Nullpunkteinstellung bringt man den Sensor auf die Temperatur $\vartheta = 0^{\circ}\mathrm{C}$ und gleicht mit $U_N$ die Ausgangsspannung auf $U_a = 0$ ab. Dies ist bei der Spannung

$$
U_N = -a' = +0{,}5\,\mathrm{V}
$$

der Fall. Zur Kalibrierung der Verstärkung legt man an den Sensor den zweiten Abgleichpunkt an, z.B. $G_1 = \vartheta_1 = 40^{\circ}\mathrm{C}$, und gleicht die Verstärkung $A$ ab, bis sich auch hier der Sollwert der Ausgangsspannung

$$
U_{a1} = mG_1 = \frac{100\,\mathrm{mV}}{^{\circ}\mathrm{C}} \cdot 40^{\circ}\mathrm{C} = 4\,\mathrm{V}
$$

ergibt. Die Verstärkung hat dann den Wert:

$$
A = \frac{m}{m'} = \frac{100\,\mathrm{mV}/^{\circ}\mathrm{C}}{50\,\mathrm{mV}/^{\circ}\mathrm{C}} = 2
$$

Der beschriebene Abgleich setzt voraus, dass man zunächst den Nullpunkt $U_a = 0$ bei $G = 0$ abgleicht. Es kann jedoch der Fall eintreten, dass sich die physikalische Größe $G = 0$ nicht oder nicht mit der gewünschten Genauigkeit realisieren lässt. Es kann auch der Wunsch bestehen, beide Abgleichpunkte in die Nähe des interessierenden Messbereichs zu legen; bei dem Beispiel des Fieberthermometers in Abb. 19.64 also z.B. auf $G_1 = 40^{\circ}\mathrm{C}$ und $G_2 = 30^{\circ}\mathrm{C}$. Dadurch lassen sich Fehler, die aus Nichtlinearitäten resultieren, in diesem Bereich klein halten. Um auch in diesem Fall zu einem iterationsfreie Abgleich zu
<!-- page-import:1152:end -->

<!-- page-import:1153:start -->
1116 19. Sensorik

Abb. 19.65. Iterationsfreier Abgleichvorgang bei zwei von Null verschiedenen Abgleichpunkten $G_1, G_2$

kommen, kann man den Nullpunkt der Eingangskennlinie wie in Abb. 19.65 auf einen dieser Abgleichpunkte verschieben und am Ausgang eine entsprechende Spannung addieren. Dazu dient die zusätzliche Spannung $U_V$ in Abb. 19.66. Man dimensioniert sie vorzugsweise für den kleineren der beiden Abgleichpunkte:

$$
U_V = U_{a2} = mG_2
$$

Zum Nullpunktabgleich legt man die physikalische Größe $G_2$ an und gleicht mit $U_N$ die Spannung $U_e + U_N$ bzw. $A(U_e + U_N)$ auf Null ab. Dazu muss man nicht in die Schaltung hineinmessen, sondern man verfolgt den Abgleich am Ausgang. Hier muss sich dann der Abgleichwert $U_{a2} = U_V$ ergeben. Da die Ausgangsspannung des Verstärkers nach dem Abgleich gerade Null ist, ist er unabhängig von der Größe von $A$.

Anschließend legt man den anderen Abgleichwert an und gleicht die Verstärkung $A$ wie bisher ab. Dabei dreht sich die verschobene Eingangskennlinie in Abb. 19.65, bis sie die richtige Steigung besitzt. Durch die ausgangsseitige Spannungsaddition gelangt man dann zu dem kalibrierten Ausgangssignal.

Ein Beispiel für die praktische Realisierung einer Abgleichschaltung ist in Abb. 19.67 dargestellt. Die Eingangsspannung und die Spannung des Nullpunkteinstellers werden am Summationspunkt von OV 1 addiert. Die Verstärkung wird an dem Gegenkopplungswiderstand eingestellt. Der Festwiderstand dient zur Begrenzung des Einstellbereichs; er verhindert gleichzeitig, dass sich die Verstärkung auf Null stellen lässt. Der Verstärker OV 2 bewirkt die ausgangsseitige Nullpunktverschiebung für den ersten Abgleichpunkt. Da ihre

Abb. 19.66. Anordnung zum iterationsfreien Abgleich von Sensorsignalen, bei zwei von Null verschiedenen Abgleichpunkten
<!-- page-import:1153:end -->

<!-- page-import:1154:start -->
19.6 Kalibrierung von Sensorsignalen 1117

$$
U_a=\underbrace{\frac{R_1}{R_3}}_{U_V}U_{ref}+\underbrace{\frac{R_2}{R_1}}_{A}(U_e+U_N)
$$

**Abb. 19.67.** Praktische Ausführung einer Abgleichschaltung

Größe vorgegeben wird, lässt sie sich durch die Wahl von $R_3$ festlegen. Ein Abgleich ist hier nicht erforderlich.

Die Vorgehensweise beim Abgleich soll noch am Beispiel des Fieberthermometers erläutert werden. Gegeben seien die Eingangs- und Ausgangskennlinien

$$
U_e=-0{,}5\,\mathrm{V}+\frac{50\,\mathrm{mV}}{{}^\circ\mathrm{C}}\vartheta
\qquad
U_a=\frac{100\,\mathrm{mV}}{{}^\circ\mathrm{C}}\vartheta
$$

und die Abgleichpunkte:

$$
(\vartheta_2=30{}^\circ\mathrm{C},\,U_{a2}=3\,\mathrm{V})
\qquad
(\vartheta_1=40{}^\circ\mathrm{C},\,U_{a1}=4\,\mathrm{V})
$$

Daraus folgt die ausgangsseitige Nullpunktverschiebung $U_V=U_{a2}=3\,\mathrm{V}$. Gibt man $R_1=10\,\mathrm{k}\Omega$ vor, folgt bei einer Referenzspannung von $-5\,\mathrm{V}$ der Widerstand $R_3=16{,}7\,\mathrm{k}\Omega$. Zum Nullpunktabgleich legt man an den Sensor eine Temperatur von $\vartheta_2=30^\circ$ an und gleicht die Ausgangsspannung auf $U_{a2}=3\,\mathrm{V}$ ab. Die dazu erforderliche Spannung beträgt:

$$
U_N=-U_{e1}=+0{,}5\,\mathrm{V}-\frac{50\,\mathrm{mV}}{{}^\circ\mathrm{C}}\cdot 30^\circ=-1\,\mathrm{V}
$$

Die Ausgangsspannung von OV 1 ist dann Null, und der zufällig eingestellte Wert von $A$ beeinflusst den Nullpunktabgleich nicht. Um die Verstärkung zu kalibrieren, gibt man den anderen Abgleichpunkt $\vartheta_1=40^\circ\mathrm{C}$ vor und gleicht die Ausgangsspannung auf $U_{a1}=4\,\mathrm{V}$ ab. Das ist bei einer Verstärkung von

$$
A=\frac{m}{m'}=\frac{100\,\mathrm{mV}/{}^\circ\mathrm{C}}{50\,\mathrm{mV}/{}^\circ\mathrm{C}}=2
$$

der Fall. Mit $R_1=10\,\mathrm{k}\Omega$ folgt daraus im abgeglichenen Zustand ein Wert von $R_2=20\,\mathrm{k}\Omega$.

## 19.6.2 Computer-gestützte Kalibrierung

Wenn man beabsichtigt, ein Sensorsignal mit einem Mikrocomputer weiterzuverarbeiten, ist es vorteilhaft, auch die Kalibrierung mit dem Mikrocomputer vorzunehmen. Wie man
<!-- page-import:1154:end -->

<!-- page-import:1155:start -->
1118  19. Sensorik

Abb. 19.68. Anordnung zur Computer-gestützten Kalibrierung von Sensorsignalen

in Abb. 19.68 erkennt, spart man in diesem Fall nicht nur die analoge Abgleichschaltung, sondern die Kalibrierung lässt sich auch einfacher durchführen, und ihre Genauigkeit und Stabilität sind besser. Zur Kalibrierung gehen wir davon aus, dass die Zahl $Z$ am Ausgang des AD-Umsetzers wie in Abb. 19.69 eine lineare Funktion der Messgröße $G$ ist:

$$
Z = a + bG
$$

(19.19)

Die Abgleichkoeffizienten $a$ und $b$ bestimmt man aus zwei Abgleichpunkten:

$(G_1, Z_1)$ und $(G_2, Z_2)$

indem man die Bestimmungsgleichungen

$$
Z_1 = a + bG_1 \quad \text{und} \quad Z_2 = a + bG_2
$$

nach $a$ und $b$ auflöst:

$$
b = \frac{Z_2 - Z_1}{G_2 - G_1}
$$

(19.20)

bzw.

$$
a = Z_1 - bG_1
$$

(19.21)

Um aus einem Messwert $Z$ die zugehörige physikalische Größe zu berechnen, muss man Gl. (19.19) nach $G$ auflösen:

$$
G = (Z - a)/b
$$

(19.22)

Zur praktischen Durchführung der Kalibrierung speichert man die beabsichtigten Abgleichwerte z.B. $G_1 = 30^\circ\mathrm{C}$ und $G_2 = 40^\circ\mathrm{C}$ in einer Tabelle. Dann legt man sie nacheinander an den Sensor an und gibt dem Mikrocomputer z.B. über Drucktasten den Befehl, die zugehörigen Messwerte z.B. $Z_1 = 1000$ und $Z_2 = 3000$ einzulesen und zusätzlich in der Tabelle abzulegen. Daraus kann ein Programm des Mikrocomputers die Abgleichwerte gemäß Gl. (19.20/10) berechnen und auch in der Tabelle speichern:

$$
b = 200/^\circ\mathrm{C} \quad \text{bzw.} \quad a = -5000
$$

Abb. 19.69.  
Numerische Kalibrierung eines  
Sensors mit den Abgleichpunkten  
$(G_1, Z_1)$ und $(G_2, Z_2)$
<!-- page-import:1155:end -->

<!-- page-import:1156:start -->
19.6 Kalibrierung von Sensorsignalen 1119

Damit ist die Kalibrierung abgeschlossen. Das Auswerteprogramm kann dann gemäß Gl. (19.22) die Größen $G_i$ berechnen. Zu einem Messwert von $Z = 2360$ ergibt sich in dem Beispiel eine Temperatur von:

$$
G \;=\; \frac{Z-a}{b} \;=\; \frac{2360+5000}{200/{}^\circ\mathrm{C}} \;=\; 36{,}8^\circ\mathrm{C}
$$

Bei der rechnerischen Kalibrierung nimmt man also die Kennlinie der Hardware (Abb. 19.69) als gegeben, man stellt ihre Gleichung auf und verwendet sie dann dazu, Messwerte $Z_i$ auf physikalische Größen $G_i$ abzubilden. Man muss hier also keine Kennlinien verschieben oder drehen wie bei der analogen Kalibrierung. Die Wahl der Abgleichpunkte ist hier beliebig; der Abgleich ist grundsätzlich iterationsfrei, da die Abgleichwerte durch Lösung eines Gleichungssystems ermittelt werden.

Ein besonders schwieriges Problem besteht darin, Sensoren zu kalibrieren, deren Signal nicht nur von der gesuchten Größe, sondern zusätzlich auch von einer zweiten Größe abhängt. Die verbreitetste Form solcher unerwünschter Doppelabhängigkeiten besteht in der Temperaturabhängigkeit von Sensorsignalen. Ein Beispiel dafür sind die Drucksensoren. Daran soll hier die Vorgehensweise erklärt werden. Der Messwert $Z$ setzt sich hier aus vier Anteilen zusammen:

$$
Z \;=\; a + bp + c\vartheta + d\vartheta p
$$
(19.23)

Darin bedeutet  
$p$  Druck,  
$\vartheta$  Temperatur,  
$a$  Nullpunktfehler,  
$b$  Druckempfindlichkeit,  
$c$  Temperaturkoeffizient des Nullpunkts,  
$d$  Temperaturkoeffizient der Empfindlichkeit.

Zur Bestimmung der vier Koeffizienten $a$, $b$, $c$ und $d$ macht man vier Abgleichmessungen, die sich jeweils in einer Größe unterscheiden:

$$
Z_{11} \;=\; a + bp_1 + c\vartheta_1 + dp_1\vartheta_1
\qquad
Z_{21} \;=\; a + bp_2 + c\vartheta_1 + dp_2\vartheta_1
$$

$$
Z_{12} \;=\; a + bp_1 + c\vartheta_2 + dp_1\vartheta_2
\qquad
Z_{22} \;=\; a + bp_2 + c\vartheta_2 + dp_2\vartheta_2
$$

und erhält daraus:

$$
d \;=\; \frac{Z_{22}+Z_{11}-Z_{12}-Z_{21}}{(p_2-p_1)(\vartheta_2-\vartheta_1)}
\qquad
b \;=\; \frac{Z_{22}-Z_{12}}{(p_2-p_1)} - d\vartheta_2
$$

$$
c \;=\; \frac{Z_{22}-Z_{21}}{\vartheta_2-\vartheta_1} - dp_2
\qquad
a \;=\; Z_{22} - bp_2 - c\vartheta_2 - dp_2\vartheta_2
$$
(19.24)

Damit ist die Kalibrierung abgeschlossen, und der Druck lässt sich aus Gl. (19.23) berechnen:

$$
p \;=\; \frac{Z-a-c\vartheta}{b+d\vartheta}
$$
(19.25)

Die Durchführung der Kalibrierung soll noch an einem Beispiel erklärt werden. Die vier erforderlichen Abgleichwerte sollen bei einem Druck von $p_1 = 900$ mbar und $p_2 = 1035$ mbar gewonnen werden, und zwar jeweils bei einer Temperatur $\vartheta_1 = 25^\circ\mathrm{C}$ und $\vartheta_2 = 50^\circ\mathrm{C}$. Dabei ergeben sich die Messwerte in Abb. 19.70. Mit Gl. (19.24) erhält man daraus die Abgleichkoeffizienten:
<!-- page-import:1156:end -->
