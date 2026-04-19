# Temperature Measurement

<!-- page-import:1118:start -->
# Kapitel 19:
Sensorik

In diesem Kapitel sollen Schaltungen behandelt werden, die es ermöglichen, nicht-elektrische Größen zu messen. Dazu müssen diese zunächst von einem Sensor erfasst werden, der nach Möglichkeit nur auf die gewünschte Messgröße anspricht. Mit der Betriebsschaltung für den Sensor in Abb. 19.1 wird eine Spannung erzeugt, die dann nach Kalibrierung sichtbar angezeigt oder zur Regelung verwendet wird. In modernen Messgeräten mit einem Mikrocontroller führt man die Kalibrierung meist nach der AD-Umsetzung digital durch, weil sie damit einfacher, genauer und iterationsfrei möglich ist. In Abschnitt 19.6.2 gibt es ein Beispiel dafür.

Die einzelnen Schritte werden am Beispiel eines Feuchte-Sensors in Abb. 19.2 konkretisiert. Der Sensor besitzt hier eine von der relativen Luftfeuchtigkeit abhängige Kapazität. Um sie zu messen, muss der Sensor in eine Kapazitäts-Messschaltung einbezogen werden. Sie liefert am Ausgang eine Spannung, die proportional zur Kapazität, aber sicher nicht proportional zur Feuchte ist. Man benötigt also noch eine Schaltung zur Linearisierung und Kalibrierung des Sensors. Es gibt eine große Mannigfaltigkeit von Sensoren für die verschiedensten Messgrößen und Messbereiche. Eine Übersicht ist in Abb. 19.3 zusammengestellt.

## 19.1 Temperaturmessung

Bei uns ist es üblich, Temperaturen in Grad Celsius anzugeben. Daneben ist im technischen Bereich die Angabe in Kelvin, die absolute Temperatur, gebräuchlich. In USA wird die Temperatur meist in Grad Fahrenheit angegeben. Diese verschiedene Temperaturskalen sind in Abb. 19.4 gegenübergestellt.

Nachfolgend sollen verschiedene Methoden zur Temperaturmessung beschrieben werden. Man erkennt in der Übersicht in Abb. 19.3, dass die metallischen Sensoren, wie Thermoelement und Platin-PTC, sich in einem sehr großen Temperaturbereich einsetzen lassen. Die Temperaturfühler auf Halbleiterbasis (Kaltleiter, Heißleiter, Transistor) sind für universellen Einsatz gut geeignet. Da die Transistor-Sensoren als integrierte Schaltun-

**Abb. 19.1.** Umwandlung einer physikalischen Größe $G$ in ein kalibriertes elektrisches Signal

**Abb. 19.2.** Messwert-Gewinnung am Beispiel eines Feuchtesensors

© Springer-Verlag GmbH Deutschland, ein Teil von Springer Nature 2019  
U. Tietze et al., *Halbleiter-Schaltungstechnik*
<!-- page-import:1118:end -->

<!-- page-import:1120:start -->
19.1 Temperaturmessung 1083

| Messgröße | Sensor | Messbereich | Prinzip |
|---|---|---|---|
| Kraft | Dehnungs-messstreifen | $10^{-2}\dots10^7\mathrm{N}$ | Kraft bewirkt elastische Dehnung eines Dünnfilmwiderstandes, dessen elektrischer Widerstand dadurch steigt |
| Druck | Dehnungs-messstreifen | $10^{-3}\dots10^3$ bar | Brückenschaltung von Dehnungsmesstreifen auf Membran wird durch Druck verstimmt |
| Beschleunigung | Dehnungs-messstreifen | $1\dots5000$ g | Dehnungsmessstreifen-brücke wird verstimmt durch Beschleunigungskraft auf mit Masse beschwerte Membran |
| Weg linear | Weggeber potentio-metrisch | $\mu$m$\dots$m | Abgriff eines Potentiometers wird verschoben |
|  | Weggeber induktiv | $\mu$m$\dots$dm | Induktive Brücke wird verstimmt durch Verschiebung eines Ferritkerns |
|  | Schrittweggeber optisch | $\mu$m$\dots$m | Strichmuster wird abgetastet Anzahl ergibt Weg |
| Winkel | Schrittwinkelgeber optisch | $1\dots20\,000$/Umdr. | Strichmuster wird abgetastet Anzahl ergibt Drehwinkel |
|  | Schrittwinkelgeber magnetisch | $1\dots1000$/Umdr. | Magnetische Abtastung eines zahnradförmigen Gebers |
|  | Schrittwinkelgeber kapazitiv | $1\dots1000$/Umdr. | Kapazitive Abtastung eines zahnradförmigen Gebers |
| Strömungsge-schwindigkeit | Flügelrad |  | Drehzahl nimmt mit Strömungsgeschwindigkeit zu |
|  | Hitzdraht-Anemometer |  | Abkühlung nimmt mit Strömungsgeschwindigkeit zu |
|  | UltraschallSender/Empfänger |  | Doppler-Verschiebung nimmt mit Strömungsgeschwindigkeit zu |
| Gaskonzentration | Keramik-widerstand |  | Widerstand ändert sich bei Adsorption des nachzuweisenden Stoffes |
|  | Mosfet |  | Änderung der Schwellen-spannung bei Adsorption des nachzuweisenden Stoffes unter dem Gate |
|  | Absorptions-spektrum |  | Absorptionslinien charakteris-tisch für jedes Gas |
| Feuchte | Kondensator | $1\dots100\%$ | Dielektrizitätskonstante nimmt durch Wasseraufnahme mit der relativen Feuchte zu |
|  | Widerstand | $5\dots95\%$ | Widerstand nimmt durch Was-seraufnahme mit der relativen Feuchte ab |

**Abb. 19.3.** Übersicht über Sensoren, Teil 2
<!-- page-import:1120:end -->

<!-- page-import:1121:start -->
1084  19. Sensorik

$\vartheta_{Celsius} = \frac{5}{9}(\vartheta_{Fahrenheit} - 32^{\circ}) \qquad \vartheta_{Celsius} = T_{Kelvin} - 273^{\circ}$

**Abb. 19.4.** Temperaturskalen

gen hergestellt werden, lässt sich dort die Betriebsschaltung mit integrieren, sodass die aufbereiteten Messwerte als Analog- oder Digitalsignal unmittelbar zur Verfügung stehen. Die höchste Genauigkeit lässt sich mit Platin-Sensoren erreichen, die allerdings teuer sind.

### 19.1.1 Kaltleiter auf Silizium-Basis, PTC-Sensoren

Der Widerstand von homogen dotiertem Silizium nimmt mit der Temperatur zu. Seine Gleichung lautet:

$$
R_{\vartheta} = R_{25}\left[1 + 7{,}95 \cdot 10^{-3}\,\Delta\vartheta/{}^{\circ}\mathrm{C} + 1{,}95 \cdot 10^{-5}\,(\Delta\vartheta/{}^{\circ}\mathrm{C})^2\right]
$$

(19.1)

Darin ist $R_{25}$ der Nennwiderstand bei 25°C. Er liegt meist zwischen 1…2 k$\Omega$. $\Delta\vartheta$ ist die Differenz zwischen der aktuellen Temperatur und der Nenntemperatur: $\Delta\vartheta = \vartheta - 25^{\circ}\mathrm{C}$. Der nutzbare Temperaturbereich liegt hier zwischen 50°C und +150°C.

Bei den hier beschriebenen Widerstandstemperaturfühlern (RTD = Resistive Temperature Detector) ist der Widerstand eine Funktion der Temperatur; der Zusammenhang wird durch die jeweiligen Gleichungen $R = f(\vartheta)$ beschrieben. Wie stark der Widerstand sich mit der Temperatur ändert, wird durch den Temperaturkoeffizienten angegeben, der sich aus (19.1) berechnen lässt:

$$
TK = \frac{1}{R}\cdot\frac{dR}{d\vartheta} = 7{,}95 \cdot 10^{-3}\,\frac{1}{^{\circ}\mathrm{C}} + \ldots \approx 0{,}8\,\frac{\%}{^{\circ}\mathrm{C}}
$$

(19.2)

Der Temperaturkoeffizient beträgt hier also 0,8%/°C. Der Widerstand verdoppelt sich demnach ungefähr bei 100 K Temperaturerhöhung. Daraus lässt sich die aus der Widerstandstoleranz resultierende Temperaturtoleranz berechnen:

$$
\Delta\vartheta = \frac{1}{TK}\,\frac{\Delta R}{R} = \frac{^{\circ}\mathrm{C}}{0{,}8\,\%}\cdot 1\,\% = 1{,}25^{\circ}\mathrm{C}
$$

(19.3)

Temperaturtoleranz                    Widerstandstoleranz

Je größer der Temperaturkoeffizient ist, desto kleiner wird die Temperaturtoleranz bei gegebener Widerstandstoleranz.

Zur Messung des Widerstandes von Widerstandstemperaturfühlern kann man durch den Sensor einen konstanten Strom fließen lassen. Er sollte so klein sein, dass sich dadurch keine nennenswerte Eigenerwärmung ergibt. Als Richtwert sollte man anstreben, die Verlustleistung unter 1 mW zu halten.

Man erhält eine Spannung am Sensor, die proportional zu seinem Widerstand ist. Die Spannung $U_{\vartheta}$ ist zwar proportional zum Widerstand, aber wegen der nichtlinearen Kennlinien des Sensors keine lineare Funktion der Temperatur. Wenn man die Messwerte
<!-- page-import:1121:end -->

<!-- page-import:1122:start -->
19.1 Temperaturmessung 1085

**Abb. 19.5.**  
Grundschaltung zum Betrieb von Widerstands-Temperatursensoren

$$U_{\vartheta} = I_{ref}\,R_{\vartheta}$$

ohnehin digitalisiert, lässt sich die zugehörige Temperatur dadurch ermitteln, dass man die entsprechende Kennliniengleichung nach $\vartheta$ auflöst und die Temperatur gemäß der Gleichung berechnet.

Für die meisten Anwendungen ist jedoch eine Linearisierung ausreichend, die sich dadurch ergibt, dass man wie in Abb. 19.6 einen geeigneten Festwiderstand $R_{lin}$ zu dem Sensor parallel schaltet. Abbildung 19.8 zeigt die Wirkung von $R_{lin}$ am Beispiel eines Silizium-Kaltleiters. Mit zunehmendem Wert von $R_{\vartheta}$ steigt der Wert der Parallelschaltung wegen des Linearisierungswiderstandes langsamer an. Dadurch lässt sich der quadratische Term in den Kennlinien weitgehend kompensieren. Die Qualität der Linearisierung hängt wesentlich davon ab, dass man den Linearisierungswiderstand für den geforderten Messbereich optimiert. Im einfachsten Fall entnimmt man diesen Wert dem Datenblatt.

Die Frage ist jedoch, wie man vorgehen muss, wenn man für den gewünschten Messbereich keine Angaben findet. Meist fordert man im ganzen Messbereich eine möglichst niedrige, konstante Fehlergrenze. Mit dem Linearisierungswiderstand lässt sich der Fehler bei drei Temperaturen $(\vartheta_U, \vartheta_M, \vartheta_O)$ zu Null machen. Man verschiebt nun diese drei Temperaturen solange und wählt $R_{lin}$ so, dass der maximale Fehler dazwischen und an den Bereichsenden gleich groß wird. Abbildung 19.8 veranschaulicht dieses Vorgehen.

Einen einfachen Näherungswert für $R_{lin}$ erhält man dadurch, dass man die Temperaturen $\vartheta_U$ und $\vartheta_O$ auf die Messbereichsgrenzen legt und $\vartheta_M$ in die Mitte. Dieser Fall ist in Abb. 19.9 eingezeichnet. Die Linearisierungsbedingung ergibt sich dann aus der Forderung, dass die Widerstandsänderung der Parallelschaltung $(R_{\vartheta} \parallel R_{lin})$ in der unteren Hälfte des Messbereichs genauso groß sein soll wie in der oberen. Für $R_{lin}$ ergibt sich daraus:

$$
R_{lin} = \frac{R_{\vartheta M}(R_{\vartheta U} + R_{\vartheta O}) - 2R_{\vartheta U}\cdot R_{\vartheta O}}{R_{\vartheta U} + R_{\vartheta O} - 2R_{\vartheta M}}
\qquad (19.4)
$$

Darin sind $R_{\vartheta U}$, $R_{\vartheta M}$ bzw. $R_{\vartheta O}$ die Widerstandswerte des Sensors bei der unteren $(\vartheta_U)$, mittleren $(\vartheta_M)$ bzw. oberen $(\vartheta_O)$ Temperatur. Man erkennt, dass der Linearisierungswiderstand unendlich wird, also entfällt, wenn $R_{\vartheta M}$ in der Mitte zwischen $R_{\vartheta U}$ und $R_{\vartheta O}$ liegt, denn dann ist der Sensor selbst linear. Liegt $R_{\vartheta M}$ oberhalb der Mitte, wird $R_{lin}$

**Abb. 19.6.**  
Stromquelle mit Parallelwiderstand zur Li-  
nearisierung einer PTC-Kennlinie

$$U_{\vartheta} = I_{ref}\,R_{lin}\,\frac{R_{\vartheta}}{R_{\vartheta} + R_{lin}}$$

**Abb. 19.7.**  
Äquivalente Schaltung aus Spannungsquel-  
le mit Serienwiderstand

$$U_{\vartheta} = U_{ref}\,\frac{R_{\vartheta}}{R_{\vartheta} + R_{lin}}$$
<!-- page-import:1122:end -->

<!-- page-import:1124:start -->
19.1 Temperaturmessung 1087

$U_{mess} = 20\,\mathrm{mV}\,\vartheta/^\circ\mathrm{C}\qquad \text{für } 0^\circ\mathrm{C} \leq \vartheta \leq 100^\circ\mathrm{C}$

**Abb. 19.10.** Linearisierung, Nullpunktverschiebung und Verstärkung für einen Silizium-Kaltleiter (PTC). Nach diesem Prinzip arbeitet der AD22100

| $\vartheta$ | $R_\vartheta$ | $U_\vartheta$ | $U_{mess}$ |
|---|---:|---:|---:|
| $\vartheta_U = 0^\circ\mathrm{C}$ | $R_{\vartheta U} = 813\,\Omega$ | $U_{\vartheta U} = 0{,}555\,\mathrm{V}$ | $U_{mess\,U} = 0{,}00\,\mathrm{V}$ |
| $\vartheta_M = 50^\circ\mathrm{C}$ | $R_{\vartheta M} = 1211\,\Omega$ | $U_{\vartheta M} = 0{,}745\,\mathrm{V}$ | $U_{mess\,M} = 1{,}00\,\mathrm{V}$ |
| $\vartheta_O = 100^\circ\mathrm{C}$ | $R_{\vartheta O} = 1706\,\Omega$ | $U_{\vartheta O} = 0{,}935\,\mathrm{V}$ | $U_{mess\,O} = 2{,}00\,\mathrm{V}$ |

**Abb. 19.11.** Spannungen in der Meßschaltung in Abb. 19.10

$$
U_{\vartheta U} = \frac{R_1 \parallel R_3}{(R_1 \parallel R_3) + R_2} U_{ref}
$$

Aus diesen beiden Bestimmungsgleichungen folgt:

$$
R_1 = 1076\,\Omega \quad \text{und} \quad R_3 = 3331\,\Omega
$$

Zur Realisierung der Schaltung wählt man die nächstliegenden Normwerte aus der E 96-Reihe (s. Kap. 28.4 auf S. 1745). Ein Abgleich der Schaltung erübrigt sich dann in den meisten Fällen, wenn man eine eng tolerierte Referenzspannungsquelle einsetzt. Die Funktionsweise der Schaltung kann man anhand von Abb. 19.11 verifizieren.

Bei hohen Anforderungen an die Genauigkeit kann man den Nullpunkt mit $R_1$ und die Verstärkung mit $R_3$ abgleichen. Um dabei keinen iterativen Abgleich durchlaufen zu müssen, gleicht man zunächst den Nullpunkt bei einer Temperatur ab, bei der die Spannung an $R_3$ Null ist. Dann lässt sich $R_1$ unabhängig von der Größe von $R_3$ abgleichen. In unserem Beispiel ist

$$
U_{mess} = U_\vartheta = 0{,}685\,\mathrm{V}
$$

für $R_\vartheta = 1076\,\Omega$ bzw. $\vartheta = 34{,}3^\circ\mathrm{C}$. Die Verstärkung lässt sich dann bei einer beliebigen anderen Temperatur (also z.B. $0^\circ\mathrm{C}$ oder $100^\circ\mathrm{C}$) an $R_3$ abgleichen, ohne dadurch den Nullpunktabgleich wieder zu verfälschen. Die allgemeine Vorgehensweise beim Abgleich von Sensorschaltungen folgt in Abschnitt 19.6.

Wenn man einen rail-to-rail Operationsverstärker wählt, dessen Gleichtakt- und Ausgangsaussteuerbarkeit bis an die negative Betriebsspannung reicht, lässt sich die Schaltung aus einer einzigen Betriebsspannungsquelle von 2,5 oder 3,3 V betreiben.
<!-- page-import:1124:end -->

<!-- page-import:1125:start -->
1088 19. Sensorik

**Abb. 19.12.**  
Prinzip zum linearisierten Betrieb  
von Pt 1000-Sensoren

**Abb. 19.13.**  
Realisierung der Stromquelle mit negativem Ausgangswiderstand

| $\vartheta$ | $R_\vartheta$ | $I_{lin}$ | $U_\vartheta$ |
|---|---:|---:|---:|
| $\vartheta_U = 0^\circ\mathrm{C}$ | $R_{\vartheta U} = 1000{,}00\,\Omega$ | $I_{lin\,U} = 1{,}000\,\mathrm{mA}$ | $U_{\vartheta\,U} = 1{,}000\,\mathrm{V}$ |
| $\vartheta_M = 200^\circ\mathrm{C}$ | $R_{\vartheta M} = 1758{,}40\,\Omega$ | $I_{lin\,M} = 1{,}033\,\mathrm{mA}$ | $U_{\vartheta\,M} = 1{,}816\,\mathrm{V}$ |
| $\vartheta_O = 400^\circ\mathrm{C}$ | $R_{\vartheta O} = 2470{,}38\,\Omega$ | $I_{lin\,O} = 1{,}065\,\mathrm{mA}$ | $U_{\vartheta\,O} = 2{,}632\,\mathrm{V}$ |

**Abb. 19.14.** Spannungen in der Meßschaltung in Abb. 19.13

## 19.1.2 Metalle als Kaltleiter, PTC-Sensoren

Der Widerstand von Metallen steigt mit zunehmender Temperatur; sie besitzen also einen positiven Temperaturkoeffizienten. Das gebräuchlichsten Metalle zur Temperaturmessung ist Platin. In erster Näherung steigt der Widerstand linear mit der Temperatur um ca. 0,4% je Grad. Bei 100 K Temperaturerhöhung ergibt sich also der 1,4fache Widerstand.

Bei den *Platin-Temperaturfühlern* spezifiziert man den Widerstand $R_0$ bei $0^\circ\mathrm{C}$. Üblich ist ein Wert von $100\,\Omega$ (Pt 100), daneben auch $200\,\Omega$ (Pt 200), $500\,\Omega$ (Pt 500) und $1000\,\Omega$ (Pt 1000). Der Widerstand folgt hier im Temperaturbereich $0^\circ\mathrm{C} \leq \vartheta \leq 850^\circ\mathrm{C}$ der Gleichung (DIN 43760 und EN 60571):

$$
R_\vartheta = R_0 \left[ 1 + 3{,}90802 \cdot 10^{-3}\,\vartheta/^\circ\mathrm{C} - 0{,}580195 \cdot 10^{-6}\,(\vartheta/^\circ\mathrm{C})^2 \right]
\qquad (19.5)
$$

und im Bereich $-200^\circ\mathrm{C} \leq \vartheta \leq 0^\circ\mathrm{C}$ der Gleichung:

$$
R_\vartheta = R_0 \left[ 1 + 3{,}90802 \cdot 10^{-3}\,\vartheta/^\circ\mathrm{C} - 0{,}580195 \cdot 10^{-6}\,(\vartheta/^\circ\mathrm{C})^2 \right.
$$

$$
\left. + 0{,}42735 \cdot 10^{-9}\,(\vartheta/^\circ\mathrm{C})^3 - 4{,}2735 \cdot 10^{-12}\,(\vartheta/^\circ\mathrm{C})^4 \right]
\qquad (19.6)
$$

Daraus ergibt sich ein Temperaturkoeffizient von

$$
TK = \frac{1}{R}\cdot\frac{dR}{d\vartheta} = 3{,}91 \cdot 10^{-3}\,\frac{1}{^\circ\mathrm{C}} + \ldots \approx 0{,}4\,\frac{\%}{^\circ\mathrm{C}}
\qquad (19.7)
$$

Der nutzbare Temperaturbereich ist mit $-200^\circ\mathrm{C}$ bis $+850^\circ\mathrm{C}$ sehr groß und wird bei hohen Temperaturen nur durch die Thermoelemente (s. Abschnitt 19.1.5) übertroffen. Die Nichtlinearität der Gleichung ist relativ klein. Aus diesem Grund kann man in einem begrenzten Temperaturbereich häufig auf eine Linearisierung verzichten.

Bei einem großen Temperaturbereich kann man zur Linearisierung den Linearisierungswiderstand gemäß (19.4) berechnen. Für einen Pt 1000-Sensor ergibt sich bei einem Temperaturbereich von $0^\circ\mathrm{C}$ bis $400^\circ\mathrm{C}$ ein Widerstand $R_{lin} = -25\,\mathrm{k}\Omega$. Man erkennt, dass
<!-- page-import:1125:end -->

<!-- page-import:1126:start -->
19.1 Temperaturmessung 1089

nur eine schwache Linearisierung erforderlich ist, da der Linearisierungswiderstand betragsmäßig hochohmig gegenüber dem Widerstand des Sensors ist. Man muss hier zur Linearisierung eine Stromquelle mit negativem Innenwiderstand einsetzen. In Abb. 19.12 ist das Ersatzschaltbild dargestellt. Zur Realisierung ist die Stromquelle nach Abb. 11.14 auf S. 774 besonders gut geeignet. Zu der in Abb. 19.13 eingetragenen Dimensionierung gelangt man, wenn man $R_2$ vorgibt und dann (11.11) zur Berechnung von $R_1$ und $R_3$ heranziehen. Die Funktionsweise der Schaltung kann man anhand von Abb. 19.14 verifizieren.

### 19.1.3 Heißleiter, NTC-Sensoren

Heißleiter sind temperaturabhängige Widerstände mit einem negativen Temperaturkoeffizienten. Sie werden aus Metalloxid-Keramik hergestellt. Ihr Temperaturkoeffizient ist sehr groß; er liegt zwischen $-3 \dots -5\%$ je Grad. *Leistungsheißleiter* werden zur Einschaltstrom-Begrenzung eingesetzt. Bei ihnen ist eine Erhitzung durch den fließenden Strom erwünscht. Sie müssen einen niedrigen Heißwiderstand und eine hohe Strombelastbarkeit besitzen. Im Gegensatz dazu hält man die Eigenerwärmung bei den *Messheißleitern* möglichst gering. Hier kommt es auf einen möglichst genau spezifizierten Widerstandsverlauf an. Die Temperaturabhängigkeit des Widerstandes lässt sich durch die Beziehung

$$
R_T = R_N \cdot \exp \left[ B \left( \frac{1}{T} - \frac{1}{T_N} \right) \right]
$$

(19.8)

approximieren, wenn die interessierende Temperatur $T$ in der Nähe der Nenntemperatur $T_N$ liegt, die meist mit $25^{\circ}\mathrm{C}$, also $298\,\mathrm{K}$ angegeben wird. Dabei müssen die Temperaturen in Kelvin $(T = \vartheta + 273^{\circ})$ eingesetzt werden. Die Konstante $B$ liegt je nach Typ zwischen $B = 1500 \dots 7000\,\mathrm{K}$. Um auch bei großen Temperaturdifferenzen den Widerstandsverlauf besser zu beschreiben, ist die Gleichung

$$
\frac{1}{T} = \frac{1}{T_N} + \frac{1}{B} \ln \frac{R_T}{R_N} + \frac{1}{C} \left( \ln \frac{R_T}{R_N} \right)^3
$$

(19.9)

vorzuziehen. Zusätzlich ist hier der Term mit dem Koeffizienten $1/C$ eingefügt.

In einem beschränkten Temperaturbereich und bei nicht zu hohen Genauigkeitsanforderungen lässt sich auch der Widerstandsverlauf eines Heißleiters mit einem Parallelwiderstand linearisieren wie Abb. 19.15 zeigt. Zum Betrieb wurde in Abb. 19.16 wieder statt

Abb. 19.15.  
Linearisierung eines Heißleiters (NTC) mit einem Parallelwiderstand

Abb. 19.16.  
Betriebsschaltung zur Linearisierung, Nullpunktverschiebung und Verstärkung für Heißleiter
<!-- page-import:1126:end -->

<!-- page-import:1127:start -->
1090 19. Sensorik

der Stromquelle eine Spannungsquelle mit Serienwiderstand eingesetzt. Die beste Linearisierung ergibt sich auch hier, wenn man den Wendepunkt von $R_{lin} \parallel R_T$ in die Mitte $T_M$ des gewünschten Temperaturbereichs legt. Daraus folgt für den Linearisierungswiderstand:

$$
R_{lin}=\frac{B-T_M}{B+2T_M}R_{TM}\sim R_{TM}
$$

$B$ ist hier der $B$-Wert des Heißleiters aus der Kennliniengleichung. Man kann auch hier den Temperatursensor mit demselben Linearisierungswiderstand $R_{lin}$ in Reihe schalten und erhält dann einen linearisierten Spannungsverlauf. Um eine mit der Temperatur steigende Spannung zu erhalten, ist es hier zweckmäßig, die Spannung am Linearisierungswiderstand abzugreifen. Dies ist in Abb. 19.16 dargestellt. Die Schaltung und ihre Dimensionierung entspricht im übrigen ganz der Betriebsschaltung für Kaltleiter in Abb. 19.10.

## 19.1.4 Transistor als Temperatursensor

Aufgrund des inneren Aufbaus ist ein Bipolartransistor ein stark temperaturabhängiges Bauelement. Sein Sperrstrom verdoppelt sich bei ca. $10\,^\circ\mathrm{C}$ Temperaturerhöhung, und seine Basis-Emitter-Spannung sinkt um ca. $2\,\mathrm{mV}/^\circ\mathrm{C}$ (siehe (2.21) auf S. 56). Diese sonst unerwünschten Nebeneffekte lassen sich zur Temperaturmessung ausnutzen. In Abb. 19.17 wird ein als Diode geschalteter Transistor mit einem konstanten Strom betrieben. Dann ergibt sich der in Abb. 19.18 dargestellte Temperaturverlauf der Basis-Emitter-Spannung. Sie hat bei Zimmertemperatur den üblichen Wert von ca. $600\,\mathrm{mV}$. Bei einer Temperaturerhöhung von $100\,^\circ\mathrm{C}$ sinkt sie um $200\,\mathrm{mV}$; entsprechend steigt sie bei einer Temperaturabnahme. Der Temperaturkoeffizient beträgt also:

$$
TK=\frac{1}{U}\cdot\frac{\Delta U}{\Delta\vartheta}=\frac{1}{600\,\mathrm{mV}}\cdot\frac{200\,\mathrm{mV}}{100\,^\circ\mathrm{C}}\approx0{,}3\,\frac{\%}{^\circ\mathrm{C}}
\qquad(19.10)
$$

Leider ist jedoch die Streuung der Durchlassspannung und des Temperaturkoeffizienten recht groß. Aus diesem Grund verwendet man einzelne Transistoren zur Temperaturmessung heutzutage nur noch bei geringen Anforderungen an die Messgenauigkeit. Besser kalibrieren lassen sich Schaltungen, die auf der Differenz der Basis-Emitter-Spannungen von zwei bei verschiedenen Stromdichten betriebenen Bipolartransistoren beruhen. Das Prinzip ist in Abb. 19.19 dargestellt. Es handelt sich hier um eine Bandabstands-Referenz, wie sie schon in Kapitel 16.32 auf S. 946 beschrieben wurde. Die Differenz der Basis-Emitter-Spannungen beträgt hier:

**Abb. 19.17.**  
Nutzung der Basis-Emitter-Spannung zur Temperaturmessung

**Abb. 19.18.**  
Temperaturabhängigkeit der Basis-Emitter-Spannung (typischer Verlauf)
<!-- page-import:1127:end -->

<!-- page-import:1128:start -->
19.1 Temperaturmessung 1091

$U_{BG} = 1{,}23\,\mathrm{V}\qquad U_{Temp} = 2\,\frac{\mathrm{mV}}{\mathrm{K}}\,T\qquad U_{mess} = 5U_{Temp} - 2{,}2U_{BG} = 10\,\frac{\mathrm{mV}}{{}^\circ\mathrm{C}}\,\vartheta$

**Abb. 19.19.** Bandgap-Referenz zur Temperaturmessung mit einem Zusatz für einen Celsius-Nullpunkt; Beispiel ADR06

$$
\Delta U_{BE} = U_T \ln \frac{I_{C2}}{I_{C0}A_2} - U_T \ln \frac{I_{C1}}{I_{C0}A_1}
= U_T \ln \frac{I_{C2}A_1}{I_{C1}A_2}
$$

Da die beiden Kollektorströme hier gleich groß sind und das Flächenverhältnis der Transistoren in diesem Beispiel $A_1/A_2 = 10$ beträgt, folgt:

$$
\Delta U_{BE} = \frac{kT}{e}\ln 10 = 200\,\frac{\mu\mathrm{V}}{\mathrm{K}}\cdot T
$$

Zur Realisierung einer Bandgap-Referenz verstärkt man diese Spannung mit $R_2$ so, dass sich eine Spannung

$$
U_{Temp} = 2\,\frac{\mathrm{mV}}{\mathrm{K}}\,T
\qquad\qquad (19.11)
$$

ergibt, die den Temperaturkoeffizienten von $T_2$ kompensiert (s. Abschnitt 16.4.2 auf S. 945). Die Spannung $U_{Temp}$ lässt sich direkt zur Temperaturmessung verwenden: sie ist proportional zur absoluten Temperatur $T$ („PTAT“ = Proportional To Absolute Temperature). Bei $\vartheta = 0^\circ\mathrm{C}$ ist:

$$
U_{Temp} = 2\,\frac{\mathrm{mV}}{\mathrm{K}}\cdot 273\,\mathrm{K} = 546\,\mathrm{mV}
$$

Um einen Celsius-Nullpunkt zu erhalten, kann man eine konstante Spannung dieser Größe von $U_{Temp}$ subtrahieren. Dazu benutzt der Subtrahierer in Abb. 19.19 die entsprechend gewichtete Spannung $U_{BG}$.

Das Prinzip von Abb. 19.19 lässt sich in einen Zweipol abändern, der eine Spannung oder einen Strom liefert, der proportional zur absoluten Temperatur ist. Bei der Schaltung in Abb. 19.20 stellt sich die Ausgangsspannung des Operationsverstärkers so ein, dass die beiden Kollektorströme gleich groß werden. Dabei ergibt sich derselbe Wert für $\Delta U_{BE}$, hier jedoch zwischen den Basisanschlüssen. Die Spannung an $R_1$ ist also proportional zu $T$
<!-- page-import:1128:end -->

<!-- page-import:1129:start -->
1092  19. Sensorik

**Abb. 19.20.**  
Bandgap-Zweipol zur Temperaturmessung mit  
Spannungsausgang (z.B. LM335)

**Abb. 19.21.**  
Bandgap Zweipol zur Temperaturmes-  
sung mit Stromausgang (z.B. AD592)

(„PTAT“). Sie lässt sich durch Reihenschaltung mit weiteren Widerständen auf beliebige Werte erhöhen. Bei dem Beispiel in Abb. 19.20 wird sie auf das 50-fache verstärkt:

$$
U_{Temp} = 50\Delta U_{BE} = 10 \frac{\mathrm{mV}}{\mathrm{K}} \cdot T
$$

Bei Zimmertemperatur $(T \approx 300\,\mathrm{K})$ ergibt sich also eine Spannung von $U_{Temp} \approx 3\,\mathrm{V}$. Diese Spannung ist gleichzeitig die Betriebsspannung und die Ausgangsspannung des Operationsverstärkers. Die Schaltung verhält sich demnach wie eine Z-Diode mit einem definierten, großen Temperaturkoeffizienten.

Die temperaturproportionale Spannung $\Delta U_{BE}$ lässt sich auch dazu nutzen, einen Strom zu erzeugen, der zur absoluten Temperatur proportional ist. Bei den Schaltungen in Abb. 19.19 und 19.20 ist der Kollektorstrom $I_C$ proportional zu $T$. Um den gewünschten Strom zu erhalten, braucht man also nur den Operationsverstärker durch den Stromspiegel $T_3, T_4$ in Abb. 19.21 zu ersetzen. Dann ist die Bedingung $I_{C1} = I_{C2}$ weiterhin erfüllt. Die Spannung

$$
\Delta U_{BE} = U_T \ln \frac{A_1}{A_2} = \frac{k}{e} \ln \frac{A_1}{A_2} \cdot T = 86 \frac{\mu\mathrm{V}}{\mathrm{K}} \ln \frac{A_1}{A_2} \cdot T
$$

bedingt dann einen Strom:

$$
I_{mess} = 2I_C = 2\Delta U_{BE}/R_1
$$

Bei einem Flächenverhältnis von $A_1/A_2 = 8$ und einem Widerstand $R_1 = 358\,\Omega$ ergibt sich dann ein Strom:

$$
I_{mess} = T \cdot 1\,\mu\mathrm{A}/\mathrm{K}
$$

Die Schaltung hat viel Ähnlichkeit mit der Referenzstromquelle in Abb. 4.115 auf Seite 412 und benötigt wie diese einen Startzusatz, um zu verhindern, dass alle Transistoren nach dem Einschalten gesperrt bleiben.
<!-- page-import:1129:end -->

<!-- page-import:1130:start -->
19.1 Temperaturmessung 1093

Abb. 19.22.  
Prinzip der Temperaturmessung mit Thermoelementen am Beispiel eines Kupfer-Konstantan-Thermoelements

## 19.1.5 Das Thermoelement

An der Kontaktstelle von zwei verschiedenen Metallen oder Legierungen ergibt sich aufgrund des Seebeck-Effekts eine Spannung im Millivolt-Bereich, die man als Thermospannung bezeichnet. An dem Prinzip der Temperaturmessung in Abb. 19.22 erkennt man, dass selbst dann, wenn eines der beiden Metalle Kupfer ist, immer zwei Thermoelemente entstehen, die entgegengesetzt gepolt sind. Bei gleichen Temperaturen $\vartheta_M = \vartheta_V$ kompensieren sich daher ihre Thermospannungen. Messen lässt sich also nur die Temperaturdifferenz $\Delta \vartheta = \vartheta_M - \vartheta_V$. Man benötigt also zur Messung von Einzeltemperaturen eine Vergleichsstelle mit der Vergleichstemperatur $\vartheta_V$. Besonders einfache Verhältnisse ergeben sich für $\vartheta_V = 0^{\circ}\mathrm{C}$. Dies lässt sich dadurch realisieren, dass man einen Schenkel des Thermopaars in Eiswasser legt. Dann geben die Messwerte an, um wie viel Grad $\vartheta_M$ über $0^{\circ}\mathrm{C}$ liegt.

Natürlich ist diese Erzeugung der Vergleichstemperatur nur ein einfaches Denkmodell, das sich schlecht realisieren lässt. Einfacher ist es, einen Ofen zu bauen, der auf eine konstante Temperatur von z.B. $60^{\circ}\mathrm{C}$ geregelt wird, und dies als Vergleichstemperatur zu verwenden. In diesem Fall ist der Messwert dann auf $60^{\circ}\mathrm{C}$ bezogen. Um ihn auf $0^{\circ}\mathrm{C}$ umzurechnen, kann man einfach eine konstante Spannung addieren, die der Vergleichstemperatur von $60^{\circ}\mathrm{C}$ entspricht.

Noch einfacher ist es aber, die Temperatur der Vergleichsstelle sich selbst zu überlassen. Sie wird dann in der Nähe der Umgebungstemperatur liegen. Wenn man sie nicht berücksichtigt, entsteht jedoch leicht ein Fehler von $20 \ldots 50^{\circ}\mathrm{C}$, der für die meisten Anwendungen zu groß ist. Wenn man ihre Größe jedoch misst (das ist z.B. mit einem Transistor-Thermometer-IC ganz einfach), kann man die zugehörige Spannung in den Messstromkreis addieren. Dieses Verfahren ist schematisch in Abb. 19.23 dargestellt. Gleichzeitig ist hier der Fall gezeigt, dass keines der Thermoelement-Metalle Kupfer ist. In diesem Fall entsteht ein zusätzliches unbeabsichtigtes Thermopaar beim Übergang auf eine Kupferleitung zur Auswertung. Damit sich diese beiden Thermospannungen kompensieren, müssen beide Zusatzelemente dieselbe Temperatur besitzen.

Die Anordnung in Abb. 19.23 lässt sich vereinfachen, wenn man die beiden isothermen Blöcke zu einem einzigen mit der Temperatur $\vartheta_V$ zusammenfasst und dann die Länge des

Abb. 19.23.  
Kompensation der Vergleichsstelltemperatur $\vartheta_V$
<!-- page-import:1130:end -->

<!-- page-import:1131:start -->
1094  19. Sensorik

**Abb. 19.24.**  
Praktische Ausführung eines Thermoelement-Systems

Verbindungsmetalls (hier Eisen) zu Null macht. Dann entsteht die gebräuchliche Anordnung in Abb. 19.24, die nur noch einen isothermen Block benötigt.

Es gibt verschiedene Kombinationen von Metallen bzw. Legierungen für Thermoelemente, die bei IEC 584 und DIN 43710 genormt sind. Sie sind in Abb. 19.26 zusammengestellt. Man erkennt, dass die maximale Verwendungstemperatur sehr unterschiedlich ist, und dass die Edelmetall-Thermoelemente deutlich kleinere Temperaturkoeffizienten besitzen. Der Verlauf der Thermospannung ist in Abb. 19.25 aufgetragen. Man sieht, dass keine der Kurven exakt linear verläuft. Die Typen T, J, E, K besitzen aber eine ordentliche Linearität und liefern daneben relativ hohe Spannungen. Deshalb werden sie bevorzugt, wenn der Temperaturbereich es zulässt. Bei den übrigen Typen ist bei der Auswertung eine Linearisierung erforderlich, wenn man sich nicht auf einen kleinen Temperaturbereich beschränken kann.

Zur Auswertung der Thermospannung muss man gemäß Abb. 19.24 eine Spannung addieren, die der Vergleichstemperatur $\vartheta_V$ entspricht, um die Anzeige auf den „Eispunkt“, also $0^\circ\mathrm{C}$, umzurechnen. Diese Korrektur kann entweder auf Thermoelement-Pegeln oder nach der Verstärkung erfolgen. In Abb. 19.27 ist der zweite Fall schematisch dargestellt. Als Beispiel wurde hier ein Eisen-Konstantan-Element eingesetzt. Um seine Spannung auf $10\,\mathrm{mV/K}$ zu verstärken, ist nach Abb. 19.26 eine Verstärkung von

**Abb. 19.25.** Temperaturabhängigkeit der Thermospannung bei einer Vergleichstemperatur von $0^\circ\mathrm{C}$
<!-- page-import:1131:end -->

<!-- page-import:1132:start -->
19.1 Temperaturmessung 1095

| Typ | Metall 1 Pluspol | Metall 2 Minuspol | Temp. Koeff. Mittelwert | Verwendungsbereich |
|---|---|---|---|---|
| T | Kupfer | Konstantan | 42,8 $\mu$V/$^\circ$C | $-200 \dots +400^\circ$C |
| J | **Eisen** | **Konstantan** | 51,7 $\mu$V/$^\circ$C | $-200 \dots +700^\circ$C |
| E | Chromel | Konstantan | 60,9 $\mu$V/$^\circ$C | $-200 \dots +1000^\circ$C |
| K | **Chromel** | **Alumel** | 40,5 $\mu$V/$^\circ$C | $-200 \dots +1300^\circ$C |
| S | Platin | Platin – 10% Rhodium | 6,4 $\mu$V/$^\circ$C | $0 \dots +1500^\circ$C |
| R | Platin | Platin – 13% Rhodium | 6,4 $\mu$V/$^\circ$C | $0 \dots +1600^\circ$C |
| B | Platin – 6% Rhodium | Platin – 30% Rhodium |  | $0 \dots +1800^\circ$C |
| G | Wolfram | Wolfram – 26% Rhenium |  | $0 \dots +2800^\circ$C |
| C | Wolfram – 5% Rhenium | Wolfram–26% Rhenium | 15 $\mu$V/$^\circ$C | $0 \dots +2800^\circ$C |

Konstantan = Kupfer-Nickel, Chromel = Chrom-Nickel, Alumel = Aluminium-Nickel

**Abb. 19.26.** Übersicht über Thermoelemente. Fett gedruckt sind die gebräuchlichsten Typen J und K. Die Typen B und G sind so nichtlinear, dass sich ein mittlerer Temperaturkoeffizient nicht angeben lässt.

**Abb. 19.27.** Verstärkung und Vergleichsstellenkompensation für Thermoelemente am Beispiel von Eisen-Konstantan

$$
A=\frac{10\,\mathrm{mV/K}}{51{,}7\,\mu\mathrm{V/K}}=193
$$

erforderlich. Dann muss die Vergleichsstelltemperatur mit derselben Empfindlichkeit, also auch 10 mV/K, addiert werden. In Abb. 19.28 ist eine Realisierungsmöglichkeit dieses Prinzips dargestellt. Da die Thermospannungen im $\mu$V-Bereich liegen, ist ein driftarmer Operationsverstärker erforderlich. Um bei der hohen Spannungsverstärkung von 193 noch ausreichende Schleifenverstärkung zu erhalten, muss er außerdem eine hohe Differenzverstärkung $A_D$ besitzen. Die Messung der Vergleichsstelltemperatur wird besonders

**Abb. 19.28.** Praktische Ausführung der Betriebsschaltung für Thermoelemente am Beispiel von Eisen-Konstantan
<!-- page-import:1132:end -->

<!-- page-import:1133:start -->
1096 19. Sensorik

Abb. 19.29. Vergleichsstellenkompensation vor der Verstärkung von Thermoelement-Signalen am Beispiel von Eisen-Konstantan

einfach, wenn man einen fertigen Temperatursensor mit Celsius-Nullpunkt einsetzt wie z.B. den LM 35 von National oder den LT 1025 von Linear Technology. Man kann aber natürlich auch jede andere Schaltung aus diesem Kapitel verwenden, die ein Ausgangssignal von 10 mV/K liefert.

In Abb. 19.29 ist als Alternative das Prinzip dargestellt, dass man zu der Spannung des Thermoelements die Eispunktkorrektur addiert und dann erst verstärkt. Dazu ist beim Eisen-Konstantan-Element eine Spannung von 51,7 $\mu$V/K zu addieren. Besonders einfach wird die Schaltung, wenn man von der Tatsache Gebrauch macht, dass das Thermoelement erdfrei ist. Dann kann man das Thermoelement wie in Abb. 19.30 einfach mit der Korrekturspannungsquelle in Reihe schalten.

Die einfachste Realisierung ergibt sich, wenn man spezielle ICs für den Betrieb von Thermoelementen einsetzt wie z.B. die Serie AD 594...597 von Analog Devices. Dabei sind die Typen AD 594 und 596 für den Betrieb von Eisen-Konstantan-Elementen (Typ J) kalibriert, und die Typen AD 595 und 597 für Chromel-Alumel (Typ K). Die Drähte des Thermoelements werden hier direkt, wie Abb. 19.31 zeigt, an die integrierte Schaltung angeschlossen. Sie stellt den isothermen Block mit der Vergleichstemperatur $\vartheta_V$ dar. Dabei geht man davon aus, dass der Silizium-Kristall dieselbe Temperatur wie die Anschluss-Beine besitzt. Die Eispunkt-Korrektur wird für die Chip-Temperatur gebildet, zur Thermospannung addiert und verstärkt. Dabei sind Nullpunkt und Verstärkung intern auf 1°C genau abgeglichen erhältlich. Schließt man die Eingänge kurz und lässt das Thermoelement weg, ergibt sich am Ausgang lediglich die Eispunkt-Korrekturspannung von:

Abb. 19.30. Praktische Ausführung für die Vergleichsstellenkompensation vor der Verstärkung am Beispiel von Eisen-Konstantan-Thermoelementen
<!-- page-import:1133:end -->

<!-- page-import:1139:start -->
1102  19. Sensorik

$$TK_R=\frac{\Delta R}{R\Delta\vartheta}\approx +1350\,\frac{\mathrm{ppm}}{\mathrm{K}},\qquad TK_S=\frac{\Delta S}{S\Delta\vartheta}\approx -2350\,\frac{\mathrm{ppm}}{\mathrm{K}}$$

**Abb. 19.38.** Temperaturabhängigkeit des Widerstandes und der Empfindlichkeit von Silizium-Drucksensoren

In einer Brückenanordnung, wie sie in Drucksensoren eingesetzt wird, ist diese temperaturbedingte Widerstandsänderung nicht störend, wenn sie in allen Widerständen gleich ist und das Ausgangssignal nicht belastet wird. Ein Problem entsteht jedoch dadurch, dass auch die Druckempfindlichkeit des Sensors temperaturabhängig ist: ihr Temperaturkoeffizient beträgt:

$$TK_S=\frac{\Delta S}{S\cdot\Delta\vartheta}\approx -2350\,\frac{\mathrm{ppm}}{\mathrm{K}}=-0{,}235\,\frac{\%}{\mathrm{K}}$$

Bei $40^{\circ}$ Temperaturerhöhung ist sie also bereits um $10\%$ gesunken, wie man auch in Abb. 19.38 erkennt. Damit die Messung dadurch nicht verfälscht wird, muss die Verstärkung entsprechend mit der Temperatur erhöht werden. Dabei darf natürlich nicht die Temperatur des Verstärkers zugrunde gelegt werden, sondern die des Drucksensors. Der Temperaturfühler muss also in den Drucksensor mit eingebaut werden. Aus diesem Grund liegt die Überlegung nahe, den Drucksensor selbst als Temperatursensor einzusetzen. Dazu kann man die Referenzspannung $U_{ref}$ so mit der Temperatur erhöhen, dass die Empfindlichkeitsabnahme gerade kompensiert wird:

$$U_D=S\cdot P\cdot U_{ref}+0\cdot U_{ref}=U_P+U_O$$

Wenn man die Brücke statt mit einer konstanten Spannung $U_{ref}$ mit einem konstanten Strom $I_{ref}$ betreibt, steigt die Spannung an der Brücke mit der Temperatur in demselben Maß wie ihr Widerstand. Leider reicht jedoch die Spannungszunahme von $TK_R=1350\,\mathrm{ppm}/\mathrm{K}$ nicht aus, um die Empfindlichkeitsabnahme von $TK_S=-2350\,\mathrm{ppm}/\mathrm{K}$ zu kompensieren. Gibt man der Stromquelle in Abb. 19.39 jedoch einen negativen Innenwiderstand, steigt der Strom $I_B$ mit zunehmender Spannung. Die Forderung, dass die Brückenspannung $U_B$ um den Faktor $|TK_S/TK_R|$ schneller steigt als bei konstantem Strom, liefert die Bedingung:

$$U_B=|TK_S/TK_R|\,R_B\,I_k=(R_i\parallel R_B)\,I_k$$

Daraus folgt für die Dimensionierung von $R_i$:

$$R_i=\frac{|TK_S|}{TK_R-|TK_S|}R_B=-2{,}35\,R_B$$
<!-- page-import:1139:end -->

<!-- page-import:1145:start -->
1108  19. Sensorik

Abb. 19.52. Signalauswertung bei Drehgebern mit Richtungserfassung

LED  
Schlitzscheibe  
Foto-empfänger  
Verstärker  
Schmitt-trigger  
Richtungs-erfassung  
Positions-zähler

A  
B  
Q  
1D  
C1  
down/up  
C  
[1]  
[2]  
[4]  
[8]  
$p_0$  
$p_1$  
$p_2$  
$p_3$

Eine einfache Möglichkeit zur Auswertung der Fotodetektor-Signale ist in Abb. 19.52 dargestellt. Die Signale werden verstärkt und mit Schmitt-Triggern in Rechtecksignale umgewandelt. Mit den nachfolgenden Flip-Flop wird dann bei jeder positiven Flanke im Kanal A der Zustand von Kanal B abgefragt und gespeichert. Ist er Null, bewegt sich die Scheibe vorwärts, also rechts herum. Bei der digitalen Auswertung sind Signale mit steilen Flanken unerlässlich, weil die Taktsteuerung von Flip-Flops sonst nicht funktioniert. Deshalb sind die Schmitt-Trigger hier unerlässlich. Um die Position zu gewinnen, werden die Zählimpulse mit dem anschließenden Zähler aufsummiert: Bei Bewegung nach rechts bzw. im Uhrzeigersinn wird aufwärts gezählt, sonst abwärts. Meist verwendet man zur Auswertung der Schmitt-Trigger-Signale jedoch nicht die hier eingezeichnete Hardware, sondern den ohnehin im Gerät vorhandenen Mikrocontroller.

Man kann auch die Analogsignale der Fotoempfänger nach den Verstärkern direkt auswerten. Ihr Verlauf in Abb. 19.51 hängt von der Breite der Schlitze und Zwischenräume ab. Die Kurven b und c zeigen mögliche Signalverläufe im Vergleich zum Rechtecksignal der Schmitt-Trigger. Besonders interessant ist die Signalform c, weil man hier die Position der Scheibe zwischen zwei Schlitzen aufgrund der Amplitude interpolieren kann. Dadurch lässt sich die Auflösung der Drehwinkelerkennung bei gutem Signal-Rauschabstand um den Faktor 10 steigern. Zur Auswertung setzt man auch hier vorteilhaft einen Mikrocontroller ein, und digitalisiert das Analogsignal an den Ausgängen der Verstärker in Abb. 19.52.

Bei den behandelten Verfahren zur Drehwinkelmessung wird ein Zähler bei jeder Marke aufwärts- oder abwärts gezählt. Aus diesem Grund handelt es sich um eine inkrementelle Bestimmung des Drehwinkels. Die absolute Position der Drehung lässt sich auf diese Weise jedoch nicht bestimmen. Das ist bei der Einstellung der Lautstärke auch nicht erforderlich, denn man möchte sie lediglich erhöhen oder erniedrigen. Wenn man die absolute Winkelposition erfassen möchte, kann man eine Index-Marke anbringen, die in der Stellung 0 ein besonderes Signal liefert. Dazu kann man einem Schlitz die doppelte Breite geben oder eine zusätzliche Indexspur vorsehen. Solange die Index-Marke nicht durchlaufen wird, ist die absolute Bestimmung des Drehwinkels auf diese Weise aber nicht möglich. Zur Bestimmung des absoluten Drehwinkels bringt man auf der Schlitz- oder Reflektorscheibe mehrere konzentrisch angeordnete Spuren an, deren Marken die Position mit einem digitalen Wort parallel angeben. Dabei wird jede Spur mit einem separaten Fotosensor abgetastet. In dem Beispiel in Abb. 19.53 sind 3 Spuren dargestellt. Mit 3 Fotoempfängern erhält man hier einen absoluten Code für die Position mit 3 bit Genauigkeit. Bei höheren Anforderungen an die Genauigkeit verwendet man entsprechend mehr Spuren. Man kann
<!-- page-import:1145:end -->

<!-- page-import:1157:start -->
1120  19. Sensorik

|  | $\vartheta_1 = 25^\circ$C | $\vartheta_2 = 50^\circ$C |
|---|---:|---:|
| $p_1 = 900\,\mathrm{mbar}$ | $Z_{11} = 3061$ | $Z_{12} = 2837$ |
| $p_2 = 1035\,\mathrm{mbar}$ | $Z_{21} = 3720$ | $Z_{22} = 3456$ |

**Abb. 19.70.**  
Beispiel für Druckkalibrierung

$$
a = -1375 \qquad b = 5{,}18\,\frac{1}{\mathrm{mbar}}
$$

$$
c = 1{,}71\,\frac{1}{^\circ\mathrm{C}} \qquad d = -0{,}0119\,\frac{1}{\mathrm{mbar}\cdot^\circ\mathrm{C}}
$$

Diese Kalibrierung ist sehr genau, da sie nicht nur Nullpunkt und Verstärkung abgleicht, sondern darüber hinaus auch den Temperaturkoeffizienten der Empfindlichkeit und des Nullpunkts berücksichtigt. Auf diese Weise lassen sich mit billigen, unkalibrierten Drucksensoren Präzisionsmessungen durchführen.

Zur Druckmessung verwendet man Gl. (19.25). Wenn man z.B. bei einer Temperatur von $\vartheta = 15^\circ$C einen Messwert $Z = 3351$ erhält, ergibt dies einen Druck von:

$$
p = \frac{Z-a-c\vartheta}{b+d\vartheta}
= \frac{3351 + 1375 - 1{,}71\cdot 15}{5{,}18 - 0{,}0119\cdot 15}\,\mathrm{mbar}
= 940\,\mathrm{mbar}
$$

Eine kalibrierte Temperaturmessung ist natürlich erforderlich, um den Temperatureinfluss richtig berücksichtigen zu können. Die Temperaturmessung wird in diesem Fall natürlich auch, wie beschrieben, rechnerisch kalibriert. Damit ergibt sich das Blockschaltbild in Abb. 19.71. Die von den Betriebsschaltungen aufbereiteten Signale des Temperatur- bzw. Drucksensors gelangen auf einen Analog-Digital-Umsetzer mit eingebautem Multiplexer. Der Mikrocomputer erhält die Messwerte $Z$ und berechnet daraus während der Kalibrierung die Abgleichkoeffizienten und dann im Normalbetrieb die Messgrößen. Damit dies mit ausreichender Genauigkeit möglich ist, muss der AD-Umsetzer eine Genauigkeit von mindestens 12 bit besitzen. So genaue AD-Umsetzer sind in Ein-Chip-Mikrocomputern nicht erhältlich. Man muss daher in der Regel separate AD-Umsetzer einsetzen wie z.B. den AD 7582 von Analog Devices, der auch einen Eingangsmultiplexer enthält.

Speziell auf die Auswertung von Sensorsignalen zugeschnitten ist die Sensor-Signalprozessor-Familie MSP430 von Texas Instruments, die eine besonders niedrige Stromaufnahme besitzt. Sie enthält neben einem hochauflösenden AD-Umsetzer mit Multiplexer auch einen Treiber für Flüssigkristallanzeigen.

**Abb. 19.71.** Anordnung zur rechnerischen Temperatur- und Druckkalibrierung und -Messung
<!-- page-import:1157:end -->
