# Structure of a Diode

<!-- page-import:0050:start -->
1.2 Aufbau einer Diode 13

$$
dI_D \;=\; \frac{\partial I_D}{\partial U_D}\, dU_D + \frac{\partial I_D}{\partial T}\, dT \;=\; 0
$$

kann man die Temperaturänderung von \(U_D\) bei konstantem Strom bestimmen:

$$
\left.\frac{dU_D}{dT}\right|_{I_D=\mathrm{const.}}
=
\frac{U_D-U_G-3U_T}{T}
\;\;\overset{T=300\,\mathrm{K}}{U_D=0{,}7\,\mathrm{V}}\approx\;
-1{,}7\,\frac{\mathrm{mV}}{\mathrm{K}}
\qquad\qquad (1.5)
$$

Die Durchlassspannung nimmt demnach mit steigender Temperatur ab; eine Zunahme der Temperatur um 60 K führt zu einer Abnahme von \(U_D\) um etwa 100 mV. Dieser Effekt wird in integrierten Schaltungen zur Temperaturmessung verwendet.

Diese Ergebnisse gelten auch für Schottky-Dioden, wenn man \(x_{T,I}\approx 2\) einsetzt und die Bandabstandsspannung \(U_G\) durch die der Energiedifferenz zwischen den Austrittsenergien der n- und Metallzone entsprechenden Spannung \(U_{Mn}=(W_{Metall}-W_{n\text{-}Si})/q\) ersetzt; es gilt \(U_{Mn}\approx 0{,}7\ldots0{,}8\ \mathrm{V}\) [1.1].

# 1.2 Aufbau einer Diode

Die Herstellung von Dioden erfolgt in einem mehrstufigen Prozess auf einer Halbleiterscheibe (*wafer*), die anschließend durch Sägen in kleine Plättchen (*die*) aufgeteilt wird. Auf einem Plättchen befindet sich entweder eine einzelne Diode oder eine integrierte Schaltung (*integrated circuit, IC*) mit mehreren Bauteilen.

## 1.2.1 Einzeldiode

### 1.2.1.1 Innerer Aufbau

Einzelne Dioden werden überwiegend in Epitaxial-Planar-Technik hergestellt. Abb. 1.11 zeigt den Aufbau einer pn- und einer Schottky-Diode, wobei der aktive Bereich besonders hervorgehoben ist. Das \(n^+\)-Gebiet ist stark, das \(p\)-Gebiet mittel und das \(n^-\)-Gebiet schwach dotiert. Die spezielle Schichtung unterschiedlich stark dotierter Gebiete trägt zur Verminderung des Bahnwiderstands und zur Erhöhung der Durchbruchspannung bei. Fast alle pn-Dioden sind als *pin-Dioden* aufgebaut, d.h. sie besitzen eine schwach oder undotierte mittlere Zone, deren Dicke etwa proportional zur Durchbruchspannung ist; in Abb. 1.11a ist dies die \(n^-\)-Zone. In der Praxis wird eine Diode jedoch nur dann als *pin-Diode* bezeichnet, wenn die Lebensdauer der Ladungsträger in der mittleren Zone sehr hoch ist und dadurch ein besonderes Verhalten erzielt wird; darauf wird im Abschnitt 1.4.2 noch näher

a pn-Diode

b Schottky-Diode

**Abb. 1.11.** Aufbau eines Halbleiterplättchens mit einer Diode
<!-- page-import:0050:end -->

<!-- page-import:0051:start -->
14  1. Diode

DO-35

DO-41

DO-204

DO-220

D-PAK

SMA

MELF

SOT-23

**Abb. 1.12.** Gängige Gehäusebauformen bei Einzeldioden (Maße in mm)

eingegangen. Bei Schottky-Dioden wird die schwach dotierte \(n^-\)-Zone zur Bildung des Schottky-Kontakts benötigt, siehe Abb. 1.11b; ein Übergang von einem Metall zu einer mittel bzw. stark dotierten Zone zeigt dagegen ein schlechteres bzw. gar kein Diodenverhalten, sondern verhält sich wie ein Widerstand (*ohmscher Kontakt*).

### 1.2.1.2 Gehäuse

Der Einbau in ein Gehäuse erfolgt, indem die Unterseite durch Löten mit dem Anschlussbein für die Kathode oder einem metallischen Gehäuseteil verbunden wird. Der Anoden-Anschluss wird mit einem feinen Gold- oder Aluminiumdraht (*Bonddraht*) an das zugehörige Anschlussbein angeschlossen. Abschließend werden die Dioden mit Kunststoff vergossen oder in ein Metallgehäuse mit Schraubanschluss eingebaut.

Für die verschiedenen Baugrößen und Einsatzgebiete existiert eine Vielzahl von Gehäusebauformen, die sich in der maximal abführbaren Verlustleistung unterscheiden oder an spezielle geometrische Erfordernisse angepasst sind. Abbildung 1.12 zeigt eine Auswahl der gängigsten Bauformen. Bei Leistungsdioden ist das Gehäuse für die Montage auf einem Kühlkörper ausgelegt; dabei begünstigt eine möglichst große Kontaktfläche die Wärmeabfuhr. Gleichrichterdioden werden oft als *Brückengleichrichter* mit vier Dioden zur Vollweg-Gleichrichtung in Stromversorgungen ausgeführt, siehe Abschnitt 1.4.4; ebenfalls vier Dioden enthält der *Mischer* nach Abschnitt 1.4.5. Bei Hochfrequenzdioden werden spezielle Gehäuse verwendet, da das elektrische Verhalten bei Frequenzen im GHz-Bereich von der Geometrie abhängt. Oft wird auf ein Gehäuse ganz verzichtet und das Dioden-Plättchen direkt in die Schaltung gelötet bzw. gebondet.

### 1.2.2 Integrierte Diode

Integrierte Dioden werden ebenfalls in Epitaxial-Planar-Technik hergestellt. Hier befinden sich alle Anschlüsse an der Oberseite des Plättchens und die Diode ist durch gesperrte pn-Übergänge von anderen Bauteilen elektrisch getrennt. Der aktive Bereich befindet sich in
<!-- page-import:0051:end -->
