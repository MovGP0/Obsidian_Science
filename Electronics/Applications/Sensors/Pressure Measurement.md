# Pressure Measurement

<!-- page-import:1134:start -->
19.2 Druckmessung 1097

**Abb. 19.31.** Einsatz integrierter Thermoelement-Verstärker

$$U_{\vartheta}=51{,}7\frac{\mu V}{^\circ C}\cdot \vartheta_V \cdot 193 = 10\frac{mV}{^\circ C}\vartheta_V$$

Die Schaltung arbeitet dann also als Transistor-Temperatursensor mit Celsius-Nullpunkt.

## 19.2 Druckmessung

Der Druck ist definiert als Kraft pro Fläche:

$$p = F/A$$

Die Einheit des Drucks ist:

1 Pascal = $\dfrac{1\ \mathrm{Newton}}{1\ \mathrm{Quadratmeter}}$;  
1 Pa = $\dfrac{1\ \mathrm{N}}{1\ \mathrm{m}^2}$

Daneben ist auch noch die Einheit bar gebräuchlich. Es gilt der Zusammenhang:

1 bar $=$ 100 kPa  bzw. 1 mbar $=$ 1 hPa

Mitunter wird der Druck auch als Höhe einer Wasser- bzw. Quecksilbersäule angegeben.  
Die Zusammenhänge sind:

1 cm H$_2$O $=$ 98,1 Pa $=$ 0,981 mbar  
1 mm Hg $=$ 133 Pa $=$ 1,33 mbar

In englischen Datenblättern wird der Druck meist in

psi $=$ pounds per square inch

| Druckbereich | Anwendung |
|---|---|
| < 40 mbar | Füllstand in Wasch-, Geschirrspülmaschine |
| 100 mbar | Staubsauger, Filterüberwachung, Durchflussmessung |
| 200 mbar | Blutdruckmessung |
| 1 bar | Barometer, Kfz (Korrektur für Zündung und Einspritzung) |
| 2 bar | Kfz (Reifendruck) |
| 10 bar | Kfz (Öldruck, Pressluft für Bremsen), Kühlmaschinen |
| 50 bar | Pneumatik, Industrieroboter |
| 500 bar | Hydraulik, Baumaschinen |
| 2000 bar | Automotor mit Benzineinspritzung |

**Abb. 19.32.** Praktisch auftretende Drücke
<!-- page-import:1134:end -->

<!-- page-import:1135:start -->
1098 19. Sensorik

a Differenzdruck-Sensor  b Absolutdruck-Sensor

Abb. 19.33. Drucksensoren

angegeben. Hier lautet die Umrechnung:

1 psi $= 6{,}89\,\mathrm{kPa} = 68{,}9\,\mathrm{mbar}$ bzw. $15\,\mathrm{psi} \approx 1\,\mathrm{bar}$

Abb. 19.32 gibt ein paar Beispiele für die Größenordnung von praktisch auftretenden Drücken. Drucksensoren lassen sich sehr universell einsetzen. Man kann mit ihnen über Druckdifferenzen auch Durchflussgeschwindigkeiten und Durchflussmengen bestimmen.

## 19.2.1 Aufbau von Drucksensoren

Drucksensoren registrieren die durch den Druck bedingte Biegung einer Membran. Dazu bringt man auf der Membran eine Brücke von Dehnungsmessstreifen an. Sie verändern ihren Widerstand aufgrund des piezoresistiven Effekts bei Biegung, Druck oder Zug. Früher waren sie meist aus aufgedampften Konstantan- oder Platin-Iridium-Schichten aufgebaut. Heutzutage verwendet man meist in Silizium implantierte Widerstände. Dabei dient das Silizium-Substrat gleichzeitig als Membran. Ihr Vorteil ist eine billigere Herstellung und eine um mehr als den Faktor 10 höhere Empfindlichkeit. Nachteilig ist hier jedoch ein höherer Temperaturkoeffizient.

Der Aufbau eines Drucksensors ist in Abb. 19.33 schematisch dargestellt. Beim Differenzdruck-Sensor in Abb. 19.33 a herrscht auf der einen Seite der Membran der Druck $p_1$, auf der anderen $p_2$. Für die Auslenkung der Membran ist daher nur die Druckdifferenz $p_1 - p_2$ maßgebend. Beim Absolutdruck-Sensor in Abb. 19.33 b bildet man die eine Seite der Membran als Vakuum-Kammer aus.

Ein Beispiel für die Anordnung der Dehnungsmessstreifen auf der Membran ist in Abb. 19.34 dargestellt. Die linke Abbildung zeigt, dass sich bei der Durchbiegung der Membran Zonen ergeben, die gedehnt bzw. gestaucht werden. In diesen Bereichen – siehe rechte Abbildung – ordnet man die vier Brückenwiderstände an. Sie werden so miteinander verbunden, dass sich die Widerstände in den Brückenzweigen gegensinnig ändern. Durch diese Anordnung ergibt sich, wie man in Abb. 19.35 erkennt, ein besonders großes Ausgangssignal, während sich gleichsinnige Effekte, wie der Absolutwert der Widerstände und ihr Temperaturkoeffizient, kompensieren. Wegen der geringen Widerstandsänderungen $\Delta R$ ist das Ausgangssignal trotzdem niedrig. Es liegt bei Maximaldruck je nach Sensor zwischen 25 und 250 mV bei einer Betriebsspannung von $U_{ref} = 5\ \mathrm{V}$. Die relative Widerstandsänderung liegt also zwischen 0,5 und 5%.

Das Ausgangssignal eines realen Drucksensors setzt sich aus einem druckproportionalen Anteil und einem unerwünschten Offset-Anteil zusammen:
<!-- page-import:1135:end -->

<!-- page-import:1136:start -->
19.2 Druckmessung 1099

a Dehnung und Stauchung der Membran

b Anordnung der Dehnungsmessstreifen auf der Membran

**Abb. 19.34.** Membran bei Drucksensoren

$$
U_D = S \cdot p \cdot U_{ref} + O \cdot U_{ref} = U_p + U_O
\qquad\qquad (19.12)
$$

Darin ist

$$
S = \frac{\Delta U_D}{\Delta p \, U_{ref}} = \frac{\Delta R}{\Delta p \cdot R}
$$

die Empfindlichkeit und O der Offset. Beide Anteile liefern einen Beitrag, der proportional zur Referenzspannung ist. Um nicht zu kleine Signale zu erhalten, verwendet man möglichst große Referenzspannungen. Dem sind jedoch durch die Eigenerwärmung des Sensors Grenzen gesetzt. Daher verwendet man Referenzspannungen zwischen 2 und 12 V.

## 19.2.2 Betrieb temperaturkompensierter Drucksensoren

Drucksensoren auf Silizium-Basis besitzen so hohe Temperaturkoeffizienten, dass man auf eine Temperaturkompensation meist nicht verzichten kann. Am einfachsten ist für den Anwender der Einsatz von Drucksensoren, die schon vom Hersteller temperaturkompensiert sind. Es kann jedoch der Fall eintreten, dass man aus Kostengründen die Temperaturkompensation selbst realisieren muss. Wie man dabei vorgehen kann, wird im nächsten Abschnitt gezeigt.

Es gibt ein paar grundsätzliche Gesichtspunkte bei der Aufbereitung von Drucksensor-Signalen:

$$
\frac{U_D}{U_{ref}} = \frac{R + \Delta R}{2R} - \frac{R - \Delta R}{2R} = \frac{\Delta R}{R}
$$

**Abb. 19.35.** Messbrücke eines Drucksensors
<!-- page-import:1136:end -->

<!-- page-import:1137:start -->
1100 19. Sensorik

$U_a=\left(1+\frac{2R_2}{R_1}\right)U_D+V_N$

**Abb. 19.36.** Betriebsschaltung für Drucksensoren. Realisierung mit einem Instrumentation Amplifier.

1) Die vier Brückenwiderstände in Abb. 19.35 sind zwar untereinander gut gepaart, ihr Absolutwert besitzt jedoch eine große Toleranz und ist darüber hinaus stark temperaturabhängig. Aus diesem Grund sollte man die Ausgangssignale nicht belasten: man setzt daher meist einen Elektrometer-Subtrahierer zur Verstärkung ein.

2) Drucksensoren besitzen meist einen Nullpunktfehler, der absolut gesehen zwar klein ist (z.B. ± 50 mV); der Vergleich mit dem Nutzsignal zeigt jedoch, dass er meist in der Größenordnung des Messbereichs liegt. Daher ist ein Nullpunkteinsteller erforderlich, der den ganzen Messbereich überstreicht.

3) Auch die Empfindlichkeit eines Drucksensors weist meist beträchtliche Toleranzen auf (z.B. ± 30%), so dass auch ein Verstärkungs-Abgleich erforderlich ist.

4) Der Abgleich von Nullpunkt und Verstärkung sollte iterationsfrei möglich sein.

5) Da die Nutzsignale eines Drucksensors klein sind, ist meist eine hohe Nachverstärkung erforderlich. Dadurch ergibt sich ein nennenswertes Verstärkerrauschen, und auch der Drucksensor selbst besitzt ein nicht zu vernachlässigendes Widerstandsrauschen. Daher sollte man die Bandbreite am Ausgang des Verstärkers auf den Frequenzbereich der Druckschwankungen begrenzen.

6) Häufig möchte man die Druckmessschaltung ausschließlich aus einer positiven Betriebsspannung betreiben und ohne eine zusätzliche negative Betriebsspannung auskommen.

Die übliche Schaltung zur Aufbereitung von Drucksensorsignalen ist ein Subtrahierer (Instrumentation Amplifier). In Abb. 19.36 wird der Subtrahierer von Abb. 18.4 auf S. 1051 eingesetzt. Die Verstärkung lässt sich mit dem Widerstand $R_1$ abgleichen. Zur Nullpunkteinstellung wurde der Fußpunkt des Spannungsteilers $R_3$ nicht an Masse, sondern über den Impedanzwandler OV4 an einem Nullpunkteinsteller angeschlossen. Dadurch wird die Spannung $V_N$ zur Ausgangsspannung addiert.

Ein Beispiel soll die Dimensionierung der Schaltung erläutern. Ein Luftdruckmesser soll eine Ausgangsspannung von 5 mV/hPa liefern. Als Druckmesser soll der KPY 63 AK eingesetzt werden. Er liefert bei einer Betriebsspannung von $U_{ref}=5$ V ein Signal von
<!-- page-import:1137:end -->

<!-- page-import:1138:start -->
19.2 Druckmessung 1101

$$
U_a=\left(1+\frac{R_2}{R_1}\right)(U_D+V_n)=A(U_D-U_O)
$$

**Abb. 19.37.** Übertragung des Nutzsignals auf den rechten Brückenzweig

50…150 $\mu$V/hPa; sein Nullpunktfehler kann bis zu $\pm 25$ mV betragen. Die Verstärkung muss demnach zwischen 33 und 100 liegen. Wenn man $R_2 = 100\,\mathrm{k}\Omega$ vorgibt, folgt daraus der Einstellbereich $R_1 = 1{,}4\,\mathrm{k}\Omega$...$6{,}25\,\mathrm{k}\Omega$. Wenn man die Schaltung aus einer einzigen Spannung betreiben möchte, kann man mit dem Nullpunkteinsteller ½ $U_{ref}$ der Ausgangsspannung überlagern.

Die Schaltung zur Aufbereitung der Sensorsignale lässt sich nennenswert vereinfachen, wenn eine negative Betriebsspannung zur Verfügung steht oder wenn man sie mit einem Spannungswandler erzeugt. Bei der Schaltung in Abb. 19.37 liegt ein Brückenzweig des Drucksensors in der Gegenkopplung des Verstärkers OV1. Macht man in Gedanken $V_n = 0$, stellt sich die Ausgangsspannung von OV1 so ein, dass $V_2 = 0$ wird. Dadurch wird also das ganze Brückensignal $U_D$ auf den rechten Ausgang der Brücke übertragen, und eine Subtraktion ist nicht mehr erforderlich. Deshalb benötigt man hier nur den einfachen Elektrometerverstärker OV2 zur Verstärkung. Zum Nullpunktabgleich legt man an OV1 die Spannung $V_n$ an. Dann wird $V_2 = V_n$ und:

$$
V_1 = U_D + V_n = U_P + U_O + V_n
$$

Der Nullpunkt ist also für $V_n = -U_O$ abgeglichen.

Mit dem Kondensator $C$ lässt sich auf einfache Weise ein Tiefpass realisieren, der die Rauschbandbreite der Schaltung begrenzt. Man kann sogar einen Tiefpass 2. Ordnung realisieren, indem man einen zweiten Kondensator direkt am Brückenausgang nach Masse anschließt.

## 19.2.3 Temperaturkompensation von Drucksensoren

Naturgemäß sind die dotierten Silizium-Widerstände eines Drucksensors temperaturabhängig. Sie werden ja sogar zur Temperaturmessung eingesetzt (siehe Abschnitt 19.1.1). Der typische Verlauf des Widerstandes ist in Abb. 19.38 dargestellt. Sein Temperaturkoeffizient beträgt bei Raumtemperatur:

$$
TK_R=\frac{\Delta R}{R\cdot \Delta \vartheta}\approx 1350\,\frac{\mathrm{ppm}}{\mathrm{K}}=0{,}135\,\frac{\%}{\mathrm{K}}
$$
<!-- page-import:1138:end -->
