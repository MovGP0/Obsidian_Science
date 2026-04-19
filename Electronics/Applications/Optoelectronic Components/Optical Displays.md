# Optical Displays

<!-- page-import:1167:start -->
1130  20. Optoelektronische Bauelemente

Fotodiode

Fotozelle

Fototransistor

Darlingtontransistor

**Abb. 20.21.** Optokoppler mit verschiedenen Empfängern

| Empfänger | Übersetzungs- verhältnis $\alpha = I_a/I_e$ | Grenz- frequenz |
|---|---:|---:|
| Fotodiode | ca. 0,1% | 10 MHz |
| Fotozelle | ca. 1% |  |
| Fototransistor | 10…100% | 300 kHz |
| Foto-Darlington-Transistor | 100…1000% | 30 kHz |

**Abb. 20.22.** Gegenüberstellung von Optokopplern

ger kommen je nach Anwendung verschiedene Ausführungsformen zum Einsatz die in Abb. 20.21 gegenüber gestellt sind:

- Bei einer Fotodiode als Empfänge ergibt sich die größte Bandbreite, aber der kleinste Ausgangsstrom.
- Mitunter wird der Fotoempfänger auch als Fotozelle zur Energiegewinnung ausgeführt. Damit lässt sich etwas Energie erzeugen, um eine Schaltung auf hochliegendem Potential zu betreiben. Ein Beispiel ist der VO1263 von Vishay der ca. 1 mW liefert.
- Fototransistoren erreichen als Empfänger ein Stromübersetzungsverhältnis bis zu 100%; d.h. der Strom durch den Fototransistor ist genauso groß wie der durch die Fotodiode.
- Darlingtontransistoren liefern das größte Übersetzungsverhältnis, aber auch die geringste Bandbreite.

Ein wichtiges Merkmal eines Optokopplers ist das Übersetzungsverhältnis $\alpha = I_a/I_e$. Es wird im wesentlichen von den Eigenschaften des Empfängers bestimmt. Typische Werte sind in Abb. 20.22 zusammengestellt. Optokoppler eignen sich sowohl zur Übertragung digitaler als auch analoger Signale. Für die Anwendung als Sensoren werden Optokoppler auch als Gabellichtschranken bzw. Reflexionslichtschranken ausgeführt (siehe Kapitel 19.4 auf Seite 1106).

## 20.6 Optische Anzeige

### 20.6.1 Flüssigkristallanzeigen

Neben den bereits in Abschnitt 20.2 beschriebenen Leuchtdioden werden Flüssigkristallanzeigen (Liquid Cristal Display LCD) zur optischen Anzeige verwendet. Sie werden in Bildschirmen von Handys, Computern und Fernsehgeräten eingesetzt. Der Aufbau einer LCD-Zelle ist in Abb. 20.23 schematisch dargestellt. Das Kernstück ist eine ca. $10\,\mu\mathrm{m}$ dicke Flüssigkristall-Schicht, die zwischen zwei transparenten Elektroden liegt. Wenn man keine Spannung anlegt, $U_F = 0$ dreht die Flüssigkristall-Schicht die Polarisationsebene des durchtretenden Lichts um 90°. Wenn man eine Wechselspannung anlegt, wird sie nicht gedreht. Dieser Effekt lässt sich als Schalter für Licht einsetzen, indem man zwei senkrecht stehende Polarisationsfilter verwendet. Das Licht kann nur dann durchtreten, wenn es von dem Flüssigkristall um 90° gedreht wird.
<!-- page-import:1167:end -->

<!-- page-import:1168:start -->
20.6 Optische Anzeige 1131

**Abb. 20.23.**  
Funktionsweise von Flüssigkristallanzeigen. Links: Polarisations­ebene wird gedreht. Rechts: Polarisations­ebene wird nicht gedreht

Im Unterschied zu den Leuchtdioden erzeugen LCDs selbst kein Licht, sondern sind auf Fremdbeleuchtung angewiesen. Bei der transmissiven Betriebsweise in Abb. 20.23 wird die Anzeige von hinten beleuchtet z.B. mit Leuchtdioden. Bei der reflektiven Betriebsweise wird Tageslicht, das von oben kommt an einer Reflektorfolie auf der Rückseite reflektiert.

Eine LCD-Zelle verhält sich wie ein Kondensator. Zur Ansteuerung verwendet man Wechselspannungen mit einer Frequenz, die so hoch ist, dass kein Flimmern auftritt. Andererseits wählt man die Frequenz nicht unnötig hoch, damit der durch den Kondensator fließende Wechselstrom klein bleibt. Praktische Werte liegen zwischen 30 und 100 Hz. Der ansteuernden Wechselspannung darf keine Gleichspannung überlagert sein, da schon bei 50 mV elektrolytische Vorgänge einsetzen, die die Lebensdauer reduzieren. Da die Kapazität eines Flüssigkristallelements nur ca. 1 nF/cm$^2$ beträgt, liegen die zur Ansteuerung erforderlichen Ströme deutlich unter 1 $\mu$A. Dieser extrem niedrige Stromverbrauch stellt bei Beleuchtung mit Tageslicht einen Vorteil gegenüber Leuchtdioden dar.

Wie der Kontrast von dem Effektivwert der angelegten Wechselspannungsamplitude abhängt, ist in Abb. 20.24 dargestellt. Bei Wechselspannungen unter $U_{\mathrm{aus\ eff}} \approx 1{,}5\,\mathrm{V}$ ist die Anzeige praktisch unsichtbar; bei Spannungen über $U_{\mathrm{ein\ eff}} \approx 2{,}5\,\mathrm{V}$ ergibt sich maximaler Kontrast.

## 20.6.2 Binär-Anzeige

Leuchtdioden benötigen bei Tageslicht zur guten Sichtbarkeit einen Durchlassstrom von 1...10 mA. Diese Ströme lassen sich am einfachsten mit Gattern wie in Abb. 20.25 und 20.26 bereitstellen. In Abb. 20.25 leuchtet die Leuchtdiode, wenn am Gatterausgang ein H-Pegel auftritt, am Eingang also ein L-Pegel anliegt. In Abb. 20.26 ist es umgekehrt. Die Strombegrenzung erfolgt jeweils über die gatterinternen Widerstände. Wegen der relativ hohen Belastung durch die Leuchtdioden besitzen die Gatterausgänge keine spezifizierten

**Abb. 20.24.**  
Abhängigkeit des Kontrastes vom Effektivwert der angelegten Wechselspannung. Werte als Beispiel.
<!-- page-import:1168:end -->

<!-- page-import:1169:start -->
1132  20. Optoelektronische Bauelemente

**Abb. 20.25.**  
Anzeige mit LED an Masse

**Abb. 20.26.**  
Anzeige mit LED an der Betriebsspannung

**Abb. 20.27.**  
Prinzip einer gleichspannungsfreien Ansteuerung

**Abb. 20.28.**  
Praktische Realisierung der LCD-Ansteuerung

Spannungspegel und dürfen daher nicht als Logiksignale weiterverwendet werden. Im Schaltplan wird dies durch das Kreuz am Gatterausgang angedeutet.

Zur Steuerung der Intensität kann man auch den PWM-Eingang verwenden, an den man eine rechteckförmige Wechselspannung anlegt. Mit deren Tastverhältnis lässt sich dann der mittlere Diodenstrom bis auf Null reduzieren. Damit dabei kein Flimmern sichtbar wird, sollte die Frequenz mindestens 100 Hz betragen.

Zur Ansteuerung von LCD-Anzeigen muss man eine Wechselspannung erzeugen, deren Effektivwert ausreichend hoch ist, und deren Mittelwert Null ist. Dafür steht in der Regel lediglich eine positive Betriebsspannung zur Verfügung. Diese Forderungen lassen sich am einfachsten dadurch realisieren, dass man die Anzeige wie in Abb. 20.27 zwischen zwei Schaltern anschließt, die entweder gleichphasig oder gegenphasig zwischen Masse und Betriebsspannung $V^+$ hin und her geschaltet werden. Bei gleichphasigem Betrieb ist $U_F = 0$, bei gegenphasigem Betrieb ist $U_{F\ \mathrm{eff}} = V^+$. Dies wird durch das Zeitdiagramm in Abb. 20.29 veranschaulicht.

Die praktische Realisierung ist in Abb. 20.28 dargestellt. Wenn die Steuervariable $x_1 = 0$ ist, arbeitet das EXOR-Gatter nichtinvertierend; dann sind $V_1$ und $V_2$ gleichphasig im Takt des Taktgenerators und die Spannung an der LCD-Zelle ist Null. Wenn $x_1 = 1$ ist,

**Abb. 20.29.** Spannungsverlauf bei ein- bzw. ausgeschalteter Flüssigkristallanzeige
<!-- page-import:1169:end -->

<!-- page-import:1170:start -->
20.6 Optische Anzeige 1133

**Abb. 20.30.**  
Leuchtpunkt (oben) und  
Leuchtband (unten)

invertiert das EXOR-Gatter dann erhält die Anzeige gegenphasige Signale. CMOS-Gatter sind hier am besten geeignet, da ihre Ausgangspegel bei der rein kapazitiven Belastung nur wenige Millivolt von der Betriebsspannung bzw. dem Nullpotential abweichen. Außerdem kommt nur bei dem Einsatz von CMOS-Gattern der niedrige Stromverbrauch der Flüssigkristallanzeigen zur Geltung. Der Effektivwert der Spannung an der Anzeige ist gleich der Betriebsspannung, da $U_F = \pm U_b$ beträgt.

## 20.6.3 Analog-Anzeige

Eine quasi-analoge Anzeige lässt sich dadurch erreichen, dass man eine Vielzahl von Anzeigeelementen in einer Reihe anordnet. Dabei ergibt sich eine *Leuchtpunkt*-Anzeige, wenn man jeweils nur das Element einschaltet, das dem Anzeigewert zugeordnet ist. Eine *Leuchtband*-Anzeige erhält man, wenn man auch alle niedrigeren Anzeigeelemente einschaltet. In Abb. 20.30 sind diese beiden Alternativen gegenübergestellt.

Als Anzeige-Treiber setzt man heutzutage keine primitiven Schaltungen wie 1-aus-n-Decoder mehr ein sondern Mikrocontroller. Das stellt nicht nur die flexibelste Lösung dar, sondern meist auch die kostengünstigste. Ein Beispiel für eine Leuchtpunkt-Leuchtbandanzeige ist in Abb. 20.31 dargestellt. Die Leuchtdioden werden an einem Port angeschlossen, die analogen oder digitalen Eingangssignale an einem weiteren Port. Mit einem weiteren Eingang könnte man z.B. zwischen Leuchtpunkt- und Leuchtbandanzeige umschalten. Geeignet sind alle einfachen 8 bit Mikrocontroller wie sie von Microchip, Atmel und vielen weiteren Herstellern angeboten werden. Ob man Widerstände zur Strombegrenzung benötigt, hängt von der Betriebsspannung und der Belastbarkeit der Port-Ausgänge ab.

Bei dem Leuchtband in Abb. 20.30 benötigt man für jede Leuchtdiode einen Port-Pin des Mikrocontrollers. Die erforderliche Anzahl der Pins lässt sich durch Zeitmultiplex reduzieren. Besonders effizient ist das *Charlieplexing* (= Cross-Plexing), eine Methode, die nach dem Erfinder, Charlie Allen, benannt wird. Sie beruht darauf, dass man 2 Leuchtdioden über zwei Leitungen getrennt voneinander ansteuern kann, wenn man sie - wie

**Abb. 20.31.**  
Mikrocontroller zu Ansteuerung  
von Leuchtpunkt und Leuchtband
<!-- page-import:1170:end -->

<!-- page-import:1171:start -->
1134  20. Optoelektronische Bauelemente

**Abb. 20.32.**  
Charlieplexing Prinzip

| pins $p$ | ohne $n = p$ | Multiplex $n$ | Charlieplex $n = p(p - 1)$ |
|---|---:|---:|---:|
| 2 | 2 | 1 | 2 |
| 3 | 3 | 2 | 6 |
| 4 | 4 | 4 | 12 |
| 5 | 5 | 6 | 20 |

**Abb. 20.33.**  
Zahl der benötigten Port-Anschlüsse $p$  
Zahl der Leuchtdioden $n$

in Abb. 20.32 dargestellt - antiparallel schaltet. Wenn man pin1 = 1 und pin2 = 0 macht, leuchtet D1, bei umgekehrter Polung D2. Wenn man einen pin hochohmig macht, indem man ihn auf Eingang oder auf hochohmig schaltet, leuchtet keine Leuchtdiode.

Dieses Prinzip lässt sich auf mehrere pins erweitern. In Abb. 20.33 ist angegeben, wie viele Leuchtdioden sich jeweils anschließen lassen im Vergleich zum konventionellen Multiplex-Verfahren. Man sieht, dass das Multiplexverfahren bei geringen Leuchtdiodenzahlen keinen Vorteil gegenüber dem direkten Anschluss in Abb. 20.31 besitzt. Charlieplexing bietet dagegen eine beachtliche Einsparung von pins.

Das Beispiel in Abb. 20.34 zeigt wie man mit 3 Pins 6 LEDs ansteuern kann. Das Prinzip besteht darin, dass an jedem Pin ein LED-Paar gemäß Abb. 20.32 angeschlossen wird, das zu allen anderen Pins führt. Zur Ansteuerung wird jeweils nur eine einzige Diode ausgewählt indem man an ihre Anode eine 1 (Betriebsspannung) und an ihre Katode eine 0 (Masse) anlegt. Die übrigen Pins werden auf Z (hochohmig = Tri-State oder Eingang) geschaltet. Die resultierende Wahrheitstafel in Abb. 20.35 lässt sich direkt an der Schaltung verifizieren.

Die Funktionsweise von Charlieplexing setzt voraus, dass man jedem Pin eines Mikrocontroller-Ports 3 Zustände zuweisen kann: high, low und hochohmig. Das ist zwar bei den meisten Mikrocontrollern möglich, jedoch nicht wenn man externe Treiber benötigt. Da der Strom eines Port-Anschlusses meist 20 mA nicht übersteigen darf, kann man bei 20 LEDs lediglich einen mittleren Strom von 1 mA erreichen.

## 20.6.4 Numerische Anzeige

Die einfachste Möglichkeit zur Darstellung der Zahlen von 0 … 9 besteht darin, sieben Anzeigeelemente wie in Abb. 20.36 zu einer Siebensegment-Anzeige zusammenzufügen. Je nachdem, welche Kombination der Segmente a … g eingeschaltet wird, lassen sich damit alle Ziffern darstellen und zusätzlich noch die Buchstaben A … F. Allerdings müssen die

**Abb. 20.34.**  
Charlieplexing für 6 LEDs

| LED | pin1 | pin2 | pin3 |
|---|---:|---:|---:|
| D1 | 1 | 0 | Z |
| D2 | 0 | 1 | Z |
| D3 | Z | 1 | 0 |
| D4 | Z | 0 | 1 |
| D5 | 1 | Z | 0 |
| D6 | 0 | Z | 1 |

**Abb. 20.35.**  
Wahrheitstafel für Charlieplexing.  
Z = hochohmig
<!-- page-import:1171:end -->

<!-- page-import:1172:start -->
20.6 Optische Anzeige 1135

**Abb. 20.36.** Symbole der Siebensegment-Anzeige

| Ziffer | BCD-Eingang |  |  |  | Sieben-Segment-Ausgang |  |  |  |  |  |  |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Z | $2^3$ | $2^2$ | $2^1$ | $2^0$ | a | b | c | d | e | f | g |
| 0  | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 0 |
| 1  | 0 | 0 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 |
| 2  | 0 | 0 | 1 | 0 | 1 | 1 | 0 | 1 | 1 | 0 | 1 |
| 3  | 0 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 1 |
| 4  | 0 | 1 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 1 | 1 |
| 5  | 0 | 1 | 0 | 1 | 1 | 0 | 1 | 1 | 0 | 1 | 1 |
| 6  | 0 | 1 | 1 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | 1 |
| 7  | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 |
| 8  | 1 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 9  | 1 | 0 | 0 | 1 | 1 | 1 | 1 | 1 | 0 | 1 | 1 |
| 10 | 1 | 0 | 1 | 0 | 1 | 1 | 1 | 0 | 1 | 1 | 1 |
| 11 | 1 | 0 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 1 | 1 |
| 12 | 1 | 1 | 0 | 0 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |
| 13 | 1 | 1 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | 0 | 1 |
| 14 | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 1 | 1 | 1 | 1 |
| 15 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1 |

**Abb. 20.37.** Wahrheitstafel für einen BCD-Siebensegment-Decoder  
und Erweiterung zum Hexadezimal-Decoder

Zahlen 11 bzw. 13 als Kleinbuchstaben b bzw. d dargestellt werden, weil man sie sonst nicht von der 8 bzw. 0 unterscheiden könnte. Abbildung 20.37 zeigt die Wahrheitstafel.

Zur Ansteuerung einer Siebensegment-Anzeige muss man bei jeder Ziffer, die üblicherweise dual kodiert vorliegt (Binär Codiert Dezimal BCD), die zugehörige Kombination von Segmenten einschalten. Dafür hat man früher spezielle Siebensegment-Decoder eingesetzt gemäß Abb. 20.38 bzw. 20.39. Heute schließt an die Anzeigen an dem Port eines

**Abb. 20.38.**  
Anschluss einer LED-Anzeige an einem  
Siebensegment-Decoder

**Abb. 20.39.**  
Anschluss einer Flüssigkristallanzeige an einem  
Siebensegment-Decoder
<!-- page-import:1172:end -->

<!-- page-import:1173:start -->
1136  20. Optoelektronische Bauelemente

Abb. 20.40. Anschluss einer 8stelligen Multiplexanzeige an einen Mikrocontroller für Anzeigen mit gemeinsamer Anode

Mikrocontrollers an und realisiert den Decoder per Software. Dabei bildet man nicht eine Schaltung mit Gattern nach, sondern speichert die Wahrheitstafel und kopiert die jeweils benötigte Zeile in das Portregister.

## 20.6.5 Multiplex Anzeige

Bei der numerischen Anzeige benötigt man in der Regel mehrere Ziffern. Um die Zahl der benötigten Treiber und Leitungen klein zu halten, ist es jedoch bei mehrstelligen Anzeigen zweckmäßig, sie als Matrix zu verbinden und im Zeitmultiplex zu betreiben. Eine 8-stelligen 7-Segment-LED-Multiplexanzeige ist in Abb. 20.40 als Beispiel dargestellt. Die entsprechenden Segmente aller Anzeigen werden parallel geschaltet. Damit nicht die gleichen Segmente aller Stellen gleichzeitig leuchten, schaltet man jeweils nur eine Stelle ein und wählt im Zeitmultiplex eine Stelle nach der anderen aus. Dann kann man über einen zweiten Port des Mikrocontrollers jeweils die benötigten Segmente der betreffenden Stelle einschalten. Zum Betrieb einer 8stelligen 7-Segment-Anzeige benötigt man also lediglich 15 Leitungen. Für die Dateneingabe wurde hier ein weiterer Port des Mikrocontrollers vorgesehen.

Durch eine Multiplexanzeige wird der Strombedarf der ganzen LED-Anzeige nicht verändert. Der erforderliche Strom muss jedoch in diesem Fall von einer reduzierten Anzahl von Port-Anschlüssen bereitgestellt werden. Deshalb muss man die Vorwiderstände entsprechend dimensionieren und die Belastbarkeit der Ports im Auge behalten. Ein Beispiel soll dieses Problem verdeutlichen. Der Strom durch ein Segment soll bei kontinuierlichem Stromfluss 2 mA betragen. Da eine Stelle der Anzeige nur für 1/8 der Zeit eingeschaltet ist, muss hier der 8-fache Strom fließen, also 16 mA, um dieselbe Intensität wie bei kontinuierlichem Betrieb zu erhalten. Wenn alle Segmente einer Stelle angezeigt werden sollen, fließt in der gemeinsamen Anodenleitung der 7-fache Segmentstrom; das sind 112 mA. Derart große Ströme kann ein Port eines Mikrocontrollers nicht liefern. Deshalb benötigt man zusätzliche Anodentreiber. Die einfachste Realisierung besteht im Einsatz von
<!-- page-import:1173:end -->

<!-- page-import:1174:start -->
20.6 Optische Anzeige 1137

Abb. 20.41.  
Zeitverlauf der Anoden- und Segmentsignale

p-Kanal Mosfets wie in Abb. 20.40. Wegen der niedrigen Betriebsspannung benötigt man Mosfets mit geringer Schwellenspannung, die als logic-level-Mosfets bezeichnet werden.

Der Multiplex-Betrieb wird vom Mikrocontroller durchgeführt. Dazu aktiviert man eine Stelle nach der anderen und schaltet die zugehörigen Segmente ein. Der zeitliche Verlauf ist in Abb. 20.41 dargestellt. Zuerst werden die Segmente Stelle $S_0$ aktiviert indem man an die Segmente $a \dots g$, die leuchten sollen, über Port2 eine 0 ausgibt. Dann wird die zugehörige Anode auf high-Potential gelegt indem man an dem pin0 von Port1 (wegen der invertierenden Anodentreiber) eine 0 ausgibt. Diese Ausgabe wird für die übrigen Stelle wiederholt. Damit sich eine flimmerfreie Anzeige ergibt, sollte der ganze Anzeigezyklus mindestens 100 mal in der Sekunde durchlaufen werden. Wenn der Mikrocontroller längere Zeit für andere Aufgaben benötigt wird kann die Anzeige flackern. Um das zu verhindern, kann man mit einem Timer periodisch einen Interrupt für die das Anzeigeprogramm auslösen.

## 20.6.6 Alpha-Nummerische Anzeige

Mit Siebensegment-Anzeigen lassen sich außer Zahlen nur wenige Buchstaben darstellen. Zur Anzeige des ganzen Alphabets benötigt man eine größere Auflösung. Sie lässt sich durch den Einsatz von 16-Segment-Anzeigen bzw. 35-Punkt-Matrizen erzielen.

### 20.6.6.1 16-Segment-Anzeigen

Die Anordnung der Segmente einer 16-Segment-Anzeige ist in Abb. 20.42 dargestellt. Gegenüber der Siebensegment-Anzeige in Abb. 20.36 sind die Segmente a, d und g in zwei Teile aufgeteilt und die Segmente h bis m hinzugefügt. Damit lässt sich der in Abb. 20.43 dargestellte Zeichensatz erzeugen. Man beschränkt sich meist auf 64 Zeichen, die die Großbuchstaben, die Ziffern und die wichtigsten Sonderzeichen enthalten.

Abb. 20.42.  
16-Segment-Anzeige. Die beiden zusätzlichen Punkte werden nicht als Segmente gezählt.
<!-- page-import:1174:end -->

<!-- page-import:1175:start -->
1138  20. Optoelektronische Bauelemente

**Abb. 20.43.** Gebräuchlicher Zeichensatz einer 16-Segment-Anzeige. Beispiel K $\widehat{=}$ 4B$_{\mathrm{Hex}}$ = 75$_{\mathrm{Dez}}$

## 20.6.6.2 35-Punktmatrix-Anzeigen

Eine bessere Auflösung als mit 16 Segmenten erhält man, wenn man eine Punktmatrix mit 5 × 7 Punkten verwendet, wie sie in Abb. 20.44 dargestellt ist. Damit lassen sich praktisch alle denkbaren Zeichen approximieren. So lassen sich – wie Abb. 20.46 zeigt – alle 96 ASCII-Zeichen und 32 weitere Sonderzeichen darstellen.

Wegen der Vielzahl der entstehenden Leitungen wird jedoch bei den Matrix-Anzeigen nicht von jedem Element ein Anschluss herausgeführt, sondern sie werden auch elektrisch als Matrix verbunden. Dies ist in Abb. 20.45 am Beispiel von Leuchtdioden dargestellt. Dadurch ergeben sich nur 12 äußere Anschlüsse. Allerdings ist es dadurch unmöglich, alle erforderlichen Elemente gleichzeitig einzuschalten. Man betreibt die Anzeige deshalb im Zeitmultiplex, indem man Zeile für Zeile (Zeile = row = r) selektiert und dabei jeweils die gewünschte Kombination von Anzeigeelementen (Spalte = column = c) einschaltet. Wenn man die Weiterschaltung genügend schnell vornimmt, bekommt der Betrachter den Eindruck, dass alle angesteuerten Punkte gleichzeitig aktiv sind. Bei einer Zyklusfrequenz über 100 Hz ist die Anzeige für das menschliche Auge praktisch flimmerfrei.

**Abb. 20.44.**  
Anordnung der Punkte in einer 35-Punkt-Matrix in 7 Zeilen zu je 5 Spalten

**Abb. 20.45.**  
Matrixförmige Verbindung der Anzeigeelemente am Beispiel von Leuchtdioden
<!-- page-import:1175:end -->

<!-- page-import:1176:start -->
20.6 Optische Anzeige 1139

Abb. 20.46. Beispiel für einen ASCII-Zeichengenerator . Beispiel K $\hat{=}$ 4B$_{\mathrm{Hex}}$ = 75$_{\mathrm{Dez}}$

Zur Ansteuerung von 35-Punkt-Matrizen setzt man auch hier einen Mikrocontroller ein. In dem Beispiel in Abb. 20.47 wird über Port1 jeweils eine Zeile aktiviert und gleichzeitig über Port2 die zugehörigen Spalten. Die ASCII-Zeichen-Tabelle in Abb. 20.46 wird im Mikrocontroller gespeichert und mit dem gewünschten Symbol und der gerade ausgewählten Zeile adressiert. Daraus lässt sich dann das benötigte Muster für die entsprechende

Abb. 20.47. Multiplexanzeige für Leuchtdioden-Matrizen mit 5 × 7 Elementen

Mikrocontroller  
z B. PIC16F628

Port1

Port2

Port3

ASCII-Daten

Anoden-Treiber

Katoden-Treiber

$r_1$

$r_7$

$c_1$

$c_5$
<!-- page-import:1176:end -->
