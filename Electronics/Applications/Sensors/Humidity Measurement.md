# Humidity Measurement

<!-- page-import:1119:start -->
1082  19. Sensorik

| Messgröße | Sensor | Messbereich | Prinzip |
|---|---|---|---|
| Temperatur | Metall-PTC | − 200 . . . + 800°C | pos. Temperaturkoeffizient des Widerstandes von Metallen, z.B. Platin |
|  | Kaltleiter-PTC | − 50 . . . + 150°C | pos. Temperaturkoeffizient des Widerstandes von Halbleitern, z.B. Silizium |
|  | Heißleiter-NTC | − 50 . . . + 150°C | neg. Temperaturkoeffizient des Widerstandes von Metalloxid-Keramik |
|  | Transistor | − 50 . . . + 150°C | neg. Temperaturkoeffizient der Basis-Emitter-Spannung eines Transistors |
|  | Thermoelement | − 200 . . . +2800°C | Thermospannung an der Kontaktstelle verschiedener Metalle |
|  | Schwingquarz | − 50 . . . + 300°C | Temperaturkoeffizient der Resonanzfrequenz bei speziell geschliffenen Quarzen |
| Temperatur über Wärmestrahlung | Pyrometer | − 100 . . . +3000°C | Spektrale Verteilung der Leuchtdichte ist temperaturabhängig |
|  | Pyroelement | − 50 . . . +2200°C | Temperaturerhöhung durch Wärmestrahlung erzeugt Polarisationsspannung |
| Lichtintensität | Fotodiode<br>Fototransistor | $10^{-2}$ . . . $10^{5}$lx | Strom steigt mit der Intensität durch optisch freigesetzte Ladungsträger |
|  | Fotowiderstand | $10^{-2}$ . . . $10^{5}$lx | Elektrischer Widerstand sinkt mit zunehmender Bestrahlung |
|  | Fotomultiplier | $10^{-6}$ . . . $10^{3}$lx | Licht setzt Elektronen aus einer Fotokatode frei, die mit nachfolgenden Dynoden vervielfacht werden |
| Schall | Dynamisches Mikrofon |  | Induktion einer Spannung durch Bewegung einer Spule im Magnetfeld |
|  | Kondensator-Mikrofon |  | Spannung eines geladenen Kondensators ändert sich mit dem Plattenabstand |
|  | Kristall-Mikrofon |  | Piezo-Effekt erzeugt Spannung |
| Magnetfeld | Induktions-Spule |  | Liefert Spannung, wenn sich das Magnetfeld ändert oder sich die Spule im Feld bewegt |
|  | Hall-Element | 0,1 mT . . .1 T | Spannung entsteht quer zum Halbleiter durch Ablenkung der Elektronen im Magnetfeld |
|  | Feldplatte | 0,1 T . . .1 T | Widerstand steigt im Halbleiter mit zunehmender Feldstärke |

**Abb. 19.3.** Übersicht über Sensoren, Teil 1
<!-- page-import:1119:end -->

<!-- page-import:1140:start -->
19.3 Feuchtemessung 1103

Abb. 19.39.  
Betrieb eines Drucksensors aus einer Stromquelle mit negativem Innenwiderstand

Abb. 19.40.  
Praktische Realisierung der Stromquelle

$ I_k = 1\,\mathrm{mA} \quad R_i = -7{,}05\,\mathrm{k}\Omega $

Zur Realisierung einer geeigneten Stromquelle ist auch hier die Schaltung von Abb. 11.13 auf S. 773 gut geeignet. Abb. 19.39 zeigt ihren Einsatz zur Temperaturkompensation eines Drucksensors mit einem Brückenwiderstand von $R_B = 3\,\mathrm{k}\Omega$. Wir wählen einen Kurzschlussstrom von $I_k = 1\,\mathrm{mA}$ und $R_2 = 40\,\mathrm{k}\Omega$. Dann erhält man gemäß (11.11) die in Abb. 19.40 eingetragenen Werte für $R_1$ und $R_3$.

## 19.3 Feuchtemessung

Die Feuchte gibt den Wassergehalt an. Besonders interessant ist der Wassergehalt der Luft. Man definiert eine absolute Feuchte $F_{abs}$ als Wassermenge, die in einem bestimmten Luftvolumen enthalten ist:

$$
F_{abs} = \frac{\text{Masse des Wassers}}{\text{Luftvolumen}}; \qquad [F_{abs}] = \frac{\mathrm{g}}{\mathrm{m}^3}
$$

(19.13)

Wie viel Wasser maximal in der Luft gelöst sein kann, gibt die Sättigungsfeuchte $F_{sat}$ an:

$$
F_{sat} = F_{abs\,\max} = f(\vartheta)
$$

(19.14)

Wie groß sie ist, hängt stark von der Temperatur ab, wie Abb. 19.41 zeigt. Beim Erreichen oder Überschreiten der Sättigungsfeuchte kondensiert Wasser: der Taupunkt ist erreicht. Aus der Ermittlung des Taupunkts lässt sich also mittels Abb. 19.41 direkt die absolute Feuchte angeben.

Die meisten von der Luftfeuchtigkeit ausgelösten Reaktionen, wie z.B. auch das körperliche Wohlbefinden, hängen von der relativen Luftfeuchte $F_{rel}$ ab:

$$
F_{rel} = \frac{F_{abs}}{F_{sat}}
$$

(19.15)

Sie gibt also an, zu welchem Prozentsatz die Sättigungsfeuchte erreicht ist. Wie groß die relative Luftfeuchtigkeit ist, lässt sich mit Hilfe von Abb. 19.41 bestimmen. Ermittelt man z.B. durch Abkühlen der Luft einen Taupunkt von $25^{\circ}\mathrm{C}$, beträgt die absolute Feuchte $F_{abs} = 20\,\mathrm{g}/\mathrm{m}^3$. Bei einer Temperatur von z.B. $55^{\circ}\mathrm{C}$ könnte die Luft aber $F_{sat} = 100\,\mathrm{g}/\mathrm{m}^3$ Wasser aufnehmen. Die relative Luftfeuchte beträgt also bei $55^{\circ}\mathrm{C}$:
<!-- page-import:1140:end -->

<!-- page-import:1141:start -->
1104  19. Sensorik

**Abb. 19.41.**  
Abhängigkeit der Sättigungsfeuchte von  
der Temperatur

**Abb. 19.42.**  
Abhängigkeit der Feuchte von der Temperatur.  
Parameter: relative Feuchte $F_{rel}$

$$
F_{rel} = \frac{F_{abs}}{F_{sat}} = \frac{20\,\mathrm{g}/\mathrm{m}^3}{100\,\mathrm{g}/\mathrm{m}^3} = 20\%
$$

Wie die relative Luftfeuchte von der Temperatur abhängt, lässt sich aus Abb. 19.42 direkt entnehmen. Für $F_{rel} = 100\%$ gehen beide Diagramme in Abb. 19.41 und Abb. 19.42 ineinander über.

## 19.3.1 Feuchtesensoren

Das oben genannte Beispiel zeigt, dass sich die relative Luftfeuchte durch Messung der Umgebungstemperatur und des Taupunkts bestimmen lässt. Die Messung des Taupunkts ist zwar genau und bedarf keiner weiteren Kalibrierung, die dazu erforderliche Kühlung ist jedoch aufwendig. Die gebräuchlichen Sensoren zur Bestimmung der Feuchte vereinfachen die Messung dadurch, dass sie einen Messwert liefern, der direkt von der – meist interessierenden – relativen Feuchte abhängt. Sie bestehen aus einem Kondensator mit einem Dielektrikum, dessen Dielektrizitätskonstante feuchtigkeitsabhängig ist.

Abb. 19.43 zeigt den schematischen Aufbau. Als Dielektrikum verwendet man Aluminiumoxid oder eine spezielle Kunststoffolie. Eine oder beide Elektroden bestehen aus einem für Wasserdampf durchlässigen Metall. Der Kapazitätsverlauf ist an einem Beispiel in Abb. 19.44 dargestellt. Man sieht, dass es naturgemäß eine bestimmte Grundkapazität $C_0$ gibt, und dass der Kapazitätsanstieg nichtlinear erfolgt. In einem beschränkten Messbereich lässt sich diese Nichtlinearität mit einem Serienkondensator weitgehend beseitigen.

## 19.3.2 Betriebsschaltungen für kapazitive Feuchtesensoren

Zur Bestimmung der Feuchte muss man die Kapazität des Feuchtesensors bestimmen. Daher kommen hier alle Schaltungen zur Kapazitätsmessung in Betracht. Man kann z.B. eine Wechselspannung an den Sensor anlegen und den fließenden Strom messen, wie Abb. 19.45 schematisch zeigt. Obwohl dieses Verfahren so einfach aussieht, ist es doch aufwendig, da es neben einem kalibrierten Wechselstrommesser eine Wechselspannungsquelle mit konstanter Amplitude und Frequenz erfordert.
<!-- page-import:1141:end -->

<!-- page-import:1142:start -->
19.3 Feuchtemessung 1105

Abb. 19.43.  
Schematischer Aufbau eines kapazitiven Feuchtesensors

poröse Elektrode

poröse Elektrode

wasseradsorbierendes Dielektrikum

Abb. 19.44.  
Abhängigkeit der Sensorkapazität von der relativen Feuchte.

$\dfrac{C_S}{C_0}=1+0{,}4\left(\dfrac{F_{rel}}{100\%}\right)^{1{,}4}$

Abb. 19.45.  
Kapazitätsmessung durch Messung des Scheinwiderstandes

$I_{eff}=2\pi\,U_{eff}\cdot f\cdot C_S$

Eine Schaltung, mit der sich eine sehr viel höhere Genauigkeit erreichen lässt, ist in Abb. 19.46 dargestellt. Hier bestimmt man die Kapazität des Feuchtesensors gemäß der Definition der Kapazität $C_S=Q/U$. Zunächst lädt man den Kondensator $C_S$ auf $U_{ref}$ auf und entlädt ihn anschließend über den Summationspunkt. Dabei fließt der mittlere Strom:

$$\overline{I_S}=U_{ref}\cdot f\cdot C_S$$

Darin ist $f$ die Frequenz, mit welcher der Schalter betätigt wird. Am Ausgang ergibt sich dann wegen der Mittelwertbildung durch $C_1$ eine Gleichspannung, die proportional zu $C_S$ ist.

Ein Schönheitsfehler der Schaltung Abb. 19.46 ist, dass die Taktfrequenz in das Ergebnis eingeht. Bei der Schaltung in Abb. 19.47 wurde daher der Widerstand $R$ durch den getakteten Kondensator $C_G$ ersetzt. Im Gegenkopplungszweig fließt über $C_G$ der mittlere Strom:

$$\overline{I_G}=U_a\cdot f\cdot C_G$$

Abb. 19.46.  
Prinzip der Feuchtemessung in Switched-Capacitor-Technik

$U_a=-U_{ref}\cdot R\cdot f\cdot C_S$
<!-- page-import:1142:end -->
