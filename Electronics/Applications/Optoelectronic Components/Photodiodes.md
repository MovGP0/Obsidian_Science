# Photodiodes

<!-- page-import:1163:start -->
1126  20. Optoelektronische Bauelemente

Abb. 20.10. Relative spektrale Empfindlichkeit von Si-Fotozellen. Menschliches Auge und Spektrum des Sonnenlichts zum Vergleich

## 20.3 Fotodiode

Fotodioden sind Dioden, die bei Beleuchtung Strom erzeugen. Diesen Effekt besitzen alle Dioden; bei Fotodioden wählt man den Aufbau so, dass möglichst viel Licht auf den pn-Übergang gelangt. Durch das einfallende Licht werden Elektronen aus dem Valenzband in das Leitungsband gehoben. Die meisten Halbleitermaterialien besitzen diesen Effekt; aus Kostengründen verwendet man aber meist Siliziumdioden. Da der Bandabstand bei ihnen $\Delta W = 1{,}1\,\mathrm{eV}$ beträgt, muss die Wellenlänge des Lichts gemäß (20.6) kleiner als $\lambda = 1127\,\mathrm{nm}$ sein. Das erkennt man an spektrale Empfindlichkeit von Silizium-Fotodioden in Abb. 20.10; die maximale Empfindlichkeit liegt hier im Infrarotbereich. Dies ist für das Auge zwar unsichtbar, der Lichtstrom der Sonne ist in diesem Bereich aber noch hoch.

Die Kennlinie einer Fotodiode in Abb. 20.12 lässt sich gut mit dem Modell in Abb. 20.11 beschreiben. Wenn kein Licht auf die Fotodiode fällt ist $I_P = 0$, und sie verhält sie sich wie eine normale Diode mit der Kennlinie:

$$
I_D = I_S\,e^{\frac{U_D}{U_T}}
$$

Bei Beleuchtung fließt der Fotostrom $I_P = S \cdot E$, der unabhängig von der Spannung an der Diode $U_D$ ist. Darin ist die Empfindlichkeit (Sensitivity)

$$
S \;=\; \frac{\text{Fotostrom}}{\text{Beleuchtungsstärke}} \;=\; \frac{I_P}{E}
\qquad
[S] \;=\; \frac{\mathrm{A}}{\mathrm{lx}}
\qquad (20.8)
$$

Sie ist proportional zur fotoempfindlichen Fläche der Fotodiode. Um große Fotoströme zu erhalten, benötigt man also eine große Diodenfläche. Bei Kurzschluss $U_D = 0$ wird $I_{ges} = -I_P$; dann ist der ganze Fotostrom von außen messbar. Bei offenen Anschlüssen fließt der Fotostrom ganz durch die Diode und bewirkt die Spannung:

**Abb. 20.11.**  
Schaltsymbol und Modell einer Fotodiode
<!-- page-import:1163:end -->

<!-- page-import:1164:start -->
20.3 Fotodiode 1127

Abb. 20.12. Kennlinie einer Si-Fotodiode für verschiedene Beleuchtungsstärken

$$
U_D = U_T \ln \frac{I_P}{I_S} = U_T \ln \frac{S}{I_S} E
\qquad (20.9)
$$

Die Leerlaufspannung hängt nur von der Beleuchtungsstärke ab, da der Sperrstrom $I_S$ genau wie $S$ proportional zu Fläche der Diode ist. Gleichung (20.9) ist für Belichtungsmesser nützlich, da man die Beleuchtungsstärke wegen der Logarithmierung über viele Zehnerpotenzen messen kann. Die Spannung $U_D$ steigt hier - wie bei jeder Diode - um $U_T \ln 10 = 60\,\mathrm{mV}$ wenn sich die Beleuchtungsstärke verzehnfacht.

## 20.3.1 Fotozellen als Empfänger

Fotodioden eignen sich zur Messung der Beleuchtungsstärke. In Abb. 20.13 wird die Fotodiode im Kurzschluss $U_D = 0$ betrieben. Der Fotostrom bewirkt am Gegenkopplungswiderstand den Spannungsabfall $U_a = I_P \cdot R_N$. Bei der Schaltung in Abb. 20.14 wird die Fotodiode im Leerlauf betrieben. Sie logarithmiert aus diesem Grund den Fotostrom mit der internen Diodenkennlinie. Die Spannung gemäß (20.9) wird mit dem Operationsverstärker belastungsfrei verstärkt.

Der Fotoempfänger in Abb. 20.13 eignet sich zur Erfassung von Signalen bis zum MHz Bereich. Für höhere Frequenzen wie sie bei der Nachrichtenübertragung mit Glasfasern auftreten ist die Schaltung in Abb. 20.15 besser geeignet. Hier wird die Sperrschichtkapazität der Fotodiode durch Betrieb im Sperrbereich gemäß (1.12) auf Seite 19 reduziert. Der Fotostrom wird im Vergleich zum Betrieb bei 0V nicht verändert wie man in Abb. 20.12

Abb. 20.13.  
Fotoempfänger mit linearem Ausgang

$$
U_a = R_N\, S\, E
$$

Abb. 20.14.  
Fotoempfänger mit logarithmischem Ausgang

$$
U_a = \left(1 + \frac{R_N}{R_1}\right) U_T \ln \frac{S}{I_S} E
$$
<!-- page-import:1164:end -->

<!-- page-import:1165:start -->
1128  20. Optoelektronische Bauelemente

**Abb. 20.15.** Fotoempfänger für hohe Frequenzen für Glasfaser-Kommunikation

sieht. Vorteilhaft ist es, Transimpedanzverstärker einzusetzen, da sie von Hause aus am invertierenden Eingang einen niedrigen Eingangswiderstand besitzen (siehe Seite 587). Bei konventionellen VV-Operationsverstärkern in Abb. 20.13 ergibt sich ein niedriger Eingangswiderstand nur durch die Gegenkopplung solange die Schleifenverstärkung hoch ist. Mit dem Prinzip in Abb. 20.15 lassen sich mit handelsüblichen Bauteilen Bandbreiten im Gigahertzbereich und damit Datenraten von 10 Gbit/s erreichen.

## 20.3.2 Fotozellen zur Energiegewinnung

Wenn es darum geht, eine möglichst große elektrische Leistung zu gewinnen, sind die beiden Grenzfälle Leerlauf und Kurzschluss uninteressant, da in beiden Fällen $P = U \cdot I = 0$ ist. Die maximale Leistung gibt es in einem Punkt dazwischen, dem MPP-Punkt (Maximum Power Point). Der Verlauf der erhältlichen Leistung ist in Abb. 20.16 eingezeichnet. Die Lage des MPP-Punkts hängt von der Beleuchtungsstärke ab. Daher muss man ihn ständig neu ermitteln und den angeschlossenen Umrichter nachregeln, um maximale Leistung zu erhalten. Bei der größten auftretenden Beleuchtungsstärke von $E = 1000\,\mathrm{W/m^2}$ kann man bei 20% Wirkungsgrad mit einem Solarpanel mit $1\,\mathrm{m^2}$ Fläche eine elektrische Leistung von $P = 200\,\mathrm{W}$ erzeugen.

Die Ausgangsspannung von Solarzellen lässt sich nur in seltenen Fällen direkt nutzen; bestenfalls zur Ladung von Akkus. Im Normalfall muss man eine Wechselspannung mit einem Effektivwert von $230\,\mathrm{V}$ erzeugen bei einer Frequenz von $50\,\mathrm{Hz}$, um damit handelsübliche Geräte zu betreiben oder die Energie ins Lichtnetz einzuspeisen. Eine weitere Forderung ist, dass ein Solarwechselrichter selbsttätig den MPP-Punkt aufsucht und sich darauf adaptiert. Die Schaltungstechnik der Solarwechselrichter wird in Kapitel 12.34 auf Seite 816 beschrieben.

**Abb. 20.16.** Strom- und Leistungsverlauf einer Solarzelle. Maximum Power Point (MPP) $P_{MPP}$ mit zugehörigem Strom $I_{MPP}$ und Spannung $U_{MPP}$
<!-- page-import:1165:end -->
