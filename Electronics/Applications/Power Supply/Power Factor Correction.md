# Power Factor Correction

<!-- page-import:1029:start -->
992  16. Stromversorgung

## 16.7 Leistungsfaktorkorrektur

Zum Betrieb elektronischer Geräte ist eine Gleichspannung erforderlich. Dazu muss die Netzwechselspannung gleichgerichtet werden, auch dann, wenn ein Gleichspannungswandler mit Potentialtrennung folgt. Ein Beispiel dafür ist in Abb. 16.67 gezeigt. Allerdings sind die Widerstände im Stromkreis bei direkter Netzgleichrichtung viel niedriger als bei Gleichrichtung der herunter transformierten Spannung gemäß Abb. 16.9. In Abb. 16.101 sieht man, dass dadurch sehr hohe Stromspitzen während der kurzen Phase auftreten, in der der Ladekondensator $C_L$ nachgeladen wird. Dabei ist die Ladung, die während der kurzen Ladephasen zugeführt wird gleich der Ladung, die über den Verbraucher abfließt:

$$
Q \;=\; \frac{1}{T}\int_0^T I_N(t)\,dt \;=\; I_L T \;=\; 2\bar{I}_N \Delta t
$$

Darin ist $\bar{I}_N$ der mittlere Strom während der Stromflussphasen $\Delta t$. Daraus folgt für den Laststrom:

$$
\bar{I}_N \;=\; \frac{T}{2\,\Delta t}\,I_L
$$

Er wird also umso größer je kürzer die Ladezeiten $\Delta t$ sind. Dabei sind die auftretenden Stromspitzen deutlich höher als dieser Mittelwert.

Der Leistungsfaktor $PF$ (s. Abschnitt 28.2 auf S. 1734 ) gibt an, wie groß der Anteil der Wirkleistung $P$ an der Scheinleistung $S$ ist:

$$
PF \;=\; \frac{P}{S} \;=\; \frac{P}{\sqrt{P^2 + Q^2}} \;=\; \frac{\int U_N\,I_N\,dt}{\sqrt{\int U_N^2\,dt \;\cdot\; \int I_N^2\,dt}}
$$

(16.50)

Für die Wirkleistung liefert nur die Grundwelle einen Beitrag; die Oberwellen liefern ausschließlich Blindleistung $Q$. Der Leistungsfaktor nimmt den größtmöglichen Wert $PF = 1$ an, wenn der Eingangsstrom $I_N$ sinusförmig ist, keine Oberwellen besitzt und die Phasenverschiebung zur Netzspannung Null ist. Seit dem Jahr 2001 ist nach DIN EN61000-3-2 vorgeschrieben, dass bei praktisch allen Elektrogeräten der Oberwellengehalt des Eingangsstroms bestimmte Höchstwerte nicht überschreiten darf. Bei der heutzutage üblichen

**Abb. 16.101.** Stromverlauf bei Scheitelwertgleichrichtung
<!-- page-import:1029:end -->

<!-- page-import:1030:start -->
993

## 16.7 Leistungsfaktorkorrektur

**Abb. 16.102.** Übliche Schaltung zur Leistungsfaktorkorrektur.  
L = Phase, N = Neutralleiter, PE = Schutzleiter = Protective Earth

direkten Netzgleichrichtung gemäß Abb. 16.101, bei der Oberwellen mit großer Amplitude entstehen, sind deshalb meist zusätzliche Maßnahmen zur Reduktion der Oberwellen erforderlich. Dazu setzt man heutzutage keine passiven LC-Filter ein, sondern aktive Schaltungen zur Leistungsfaktorkorrektur (*Power Factor Correction, PFC*), die auf Schaltreglern basieren.

Die übliche Schaltungsanordnung ist in Abb. 16.102 dargestellt. Sie soll dazu dienen, den in Abb. 16.101 gezeigten pulsierenden Stromverlauf $I_N$ in den sinusförmigen Strom $I_{soll}$ umzuwandeln. Die Schaltung beruht auf dem Aufwärtswandler in Abb. 16.54. Er besteht hier aus der Speicherdrossel $L$, dem Leistungsschalter $T$, der Diode $D$ und dem Speicherkondensator $C$. Der Speicherkondensator darf nicht direkt am Gleichrichter angeschlossen werden, denn sonst würde nach wie vor ein pulsierender Wechselstrom fließen. Den Aufwärtswandler kann man sich wie einen regelbaren Widerstand vorstellen, der periodisch so schwankt, dass sich ein sinusförmiger Eingangsstrom ergibt. Die Ausgangsspannung eines Aufwärtswandlers ist höher als seine Eingangsspannung; bei einem

**Abb. 16.103.** Approximation eines sinusförmigen Stromverlaufs für die Leistungsfaktorkorrektur (PFC) bei kontinuierlichem Stromfluß (CCM)
<!-- page-import:1030:end -->
