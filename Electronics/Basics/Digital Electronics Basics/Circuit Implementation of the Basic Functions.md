# Circuit Implementation of the Basic Functions

<!-- page-import:0664:start -->
627

## 6.4 Schaltungstechnische Realisierung der Grundfunktionen

| Verknüpfung | NAND | NOR |
|---|---|---|
| NICHT | $x \rightarrow y = \bar{x}$ | $x \rightarrow y = \bar{x}$ |
| UND | $y = x_1 \cdot x_2$ | $y = x_1 \cdot x_2$ |
| ODER | $y = x_1 + x_2$ | $y = x_1 + x_2$ |

**Abb. 6.13.** Realisierung der Grundfunktionen mit NOR- und NAND-Gattern

$$
x_1 + x_2 = \bar{\bar{x}_1 + \bar{x}_2} = \overline{\bar{x}_1 \bar{x}_2} = \bar{x}_1 \text{ NAND } \bar{x}_2
$$

$$
x_1 + x_2 = \overline{\bar{x}_1 + \bar{x}_2} = \overline{x_1 \text{ NOR } x_2}
$$

Daraus ergeben sich die in Abb. 6.13 eingezeichneten Realisierungsmöglichkeiten. Wenn man eine Schaltung ohne Rechnung umformen möchte, kann man auch die Schaltungen in Abb. 6.13 einsetzen und die entstehenden doppelten Negationen weglassen.

## 6.4 Schaltungstechnische Realisierung der Grundfunktionen

Es gibt eine Fülle verschiedener Schaltungstechniken zur Realisierung von Gattern, die man auch als Logikfamilien bezeichnet. Sie unterscheiden sich in ihren Eingangs- und Ausgangsspannungen, also den logischen Pegeln, der Leistungsaufnahme und der Gatterlaufzeit. Einige Logikfamilien, die früher eingesetzt wurden, haben heute keine Bedeutung mehr, da sie durch bessere Schaltungskonzepte ersetzt wurden. Dazu gehören z.B. die Logikfamilien: Widerstands-Transistor-Logik (RTL), Dioden-Transistor-Logik (DTL), Langsame Störsichere Logik (LSL) und die NMOS-Logik, die hier nicht mehr beschrieben werden.

### 6.4.1 Statische und dynamische Daten

Die Eigenschaften eines Gatters sollen an dem einfachen Inverter (Nicht-Schaltung) in Abb. 6.14 erläutert werden. Für Eingangsspannungen unter $U_{eL} = 0{,}6\ \mathrm{V}$ sperrt der Transistor und die Ausgangsspannung steigt auf den high-Pegel an der hier $U_{aH} = 2{,}5\ \mathrm{V}$ beträgt, wenn der Lastwiderstand gleich dem Kollektorwiderstand $R_L = R_C$ ist. Bei weiterem Anstieg der Eingangsspannung sinkt die Ausgangsspannung ab bis der Transistors bei einer Ausgangsspannung von $U_{aL} = 0{,}2\ \mathrm{V}$ in die Sättigung geht; das ist in diesem Beispiel bei einer Eingangsspannung von $U_{eH} = 1{,}6\ \mathrm{V}$ der Fall. Beim Einsatz als Gatter betreibt man den Transistor nur in zwei extremen Arbeitspunkten: gesperrt oder leitend und nicht wie bei einem Verstärker zwischen minimaler und maximaler Ausgangsspannung. Die Spannungsdifferenzen im high- bzw. low-Zustand

$$
S_H = U_{aH} - U_{eH} \qquad \text{für} \qquad S_L = U_{eL} - U_{aL}
$$

bezeichnet man als Störabstände, die in Abb. 6.14 eingezeichnet sind. Sie geben an, wie groß ein Störsignal sein darf ohne das der logische Pegel dadurch undefiniert wird. Spannungen zwischen $U_{eH}$ und $U_{eL}$ sind für logische Signale unzulässig, da sie nicht eindeutig
<!-- page-import:0664:end -->

<!-- page-import:0665:start -->
628 6. Digitaltechnik Grundlagen

**Abb. 6.14.** Emitterschaltung als einfacher Inverter (NICHT-Schaltung)

als high- oder low-Zustand gewertet werden können. Dieser Spannungsbereich darf lediglich beim Umschalten kurzfristig durchlaufen werden. Man erkennt an diesem Beispiel, dass die Ausgangsspannung eines Gatters größer bzw. kleiner als die Eingangsspannung sein muss; deshalb muss jedes Gatter einen Verstärker besitzen, um positive Störabstände zu erhalten.

Bei den dynamischen Daten eines Gatters interessiert man sich besonders für die Schaltzeit. Man kann beim Rechteckverhalten verschiedene Zeitabschnitte unterscheiden. Sie sind in Abb. 6.15 eingezeichnet.

Man erkennt, dass die Speicherzeit bei einem Bipolartransistor $t_S$ wesentlich größer ist als die übrigen Schaltzeiten. Sie tritt dann auf, wenn man einen zuvor gesättigten Transistor $(U_{CE} = U_{CE\,sat})$ sperrt. Ist $U_{CE}$ beim leitenden Transistor größer als $U_{CE\,sat}$, verkleinert sich die Speicherzeit stark. Benötigt man schnelle Schalter, macht man von dieser Tatsache Gebrauch und verhindert, dass $U_{CE\,sat}$ erreicht wird. Digitalschaltungen, die nach diesem Prinzip arbeiten, werden als ungesättigte Logik bezeichnet. Wie sich das schaltungstechnisch verwirklichen lässt, werden wir bei den betreffenden Schaltungen in Abschnitt 6.4.4 erläutern.

Das Zeitverhalten von Digital-Schaltungen wird im allgemeinen summarisch durch die Gatterlaufzeit (propagation delay time) $t_{pd}$ charakterisiert:

$t_V$: Verzögerungszeit (delay time)  
$t_F$: Fallzeit (fall time)  
$t_S$: Speicherzeit (storage time)  
$t_A$: Anstiegszeit (rise time)

$t_{pd}$: Gatterlaufzeit  
(propagation delay time)

**Abb. 6.15.** Schaltverhalten eines Gatters
<!-- page-import:0665:end -->

<!-- page-import:0666:start -->
6.4 Schaltungstechnische Realisierung der Grundfunktionen 629

**Abb. 6.16.**  
Low-Power-Schottky-TTL-NAND-Gatter vom Typ 74 LS 00  
(Verlustleistung $P_V = 2\,\mathrm{mW}$, Gatterlaufzeit $t_{pd} = 10\,\mathrm{ns}$)

**Abb. 6.17.**  
Wahrheitstafel NAND

| $x_2$ | $x_1$ | $y$ |
|---|---|---|
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

$$
t_{pd} = \frac{1}{2}(t_{pd\,L} + t_{pd\,H})
$$

Dabei ist $t_{pd\,L}$ die Zeitdifferenz zwischen dem 50%-Wert der Eingangsflanke und dem 50%-Wert der abfallenden Ausgangsflanke. $t_{pd\,H}$ ist die entsprechende Zeitdifferenz bei der ansteigenden Ausgangsflanke. Abbildung 6.15 veranschaulicht diesen Sachverhalt.

## 6.4.2 Transistor-Transistor-Logik (TTL)

TTL-Gatter bestehen aus einem UND-Gatter am Eingang und einer Gegentakt-Endstufe am Ausgang. Das UND-Gatter am Eingang von Abb. 6.16 wird durch die beiden Dioden $D_1$ und $D_2$ gebildet: Der Strom $I_1$ fließt nur dann in die Basis des Transistors $T_1$, wenn sich die Spannungen $U_1$ und $U_2$ im High-Zustand befinden. Der Transistor $T_1$ stellt den für Gatter obligatorischen Verstärker dar. Die Transistoren $T_2$ und $T_3$ bilden eine Gegentakt-Endstufe, die sicherstellt, dass in jedem Ausgangszustand einer der beiden Ausgangstransistoren leitend ist. Dadurch wird die Anstiegszeit im Vergleich zu Abb. 6.15 stark reduziert.

Ein Vorteil dieser Gegentakt-Endstufe, die auch Totem-Pole-Schaltung genannt wird, besteht darin, dass sie lediglich npn-Transistoren benötigt die sich einfach herstellen lassen. Bei dem hier dargestellten Low-Power-Schottky-TTL-Gatter werden zu den Transistoren

**Abb. 6.18.**  
Schottky Transistor

**Abb. 6.19.**  
Übertragungskennlinie eines Low-Power-Schottky-TTL-Inverters.  
Schraffiert: Toleranzgrenzen

$U_{eL} = 0{,}8\,\mathrm{V},\ U_{eH} = 2{,}0\,\mathrm{V},\ U_{aL} = 0{,}4\,\mathrm{V},\ U_{aH} = 2{,}4\,\mathrm{V}$
<!-- page-import:0666:end -->

<!-- page-import:0667:start -->
630  6. Digitaltechnik Grundlagen

**Abb. 6.20.** Logische Verknüpfung von Gatter-Ausgängen mit offenem Kollektor

Schottky-Dioden zwischen Kollektor und Basis hinzugefügt gemäß Abb. 6.18, um die Sättigung der Transistoren zu verhindern; dadurch lässt sich die Speicherzeit in Abb. 6.15 vermeiden. Da die Durchlassspannung der Schottky-Dioden lediglich 0,4V beträgt, leiten sie den Basisstrom über den Kollektor ab und bewirken eine Spannungsgegenkopplung bevor der Transistor in die Sättigung geht.

Die Übertragungskennlinie eines Low-Power-Schottky-TTL-Inverters ist in Abb. 6.19 dargestellt. Man erkennt, dass der Umschaltpegel bei ca. 1,1 V am Eingang liegt und sowohl der High- als auch Low-Störabstand 0,4 V beträgt.

### 6.4.2.1 Open-Collector-Ausgänge

Mitunter tritt das Problem auf, dass man die Ausgänge sehr vieler Gatter logisch verknüpfen muss. Bei z.B. 20 Ausgängen würde man dazu ein Gatter mit 20 Eingängen benötigen und müsste 20 einzelne Leitungen dorthin führen. Dieser Aufwand lässt sich umgehen, wenn man Gatter mit Open-Collector-Ausgang verwendet. Bei ihnen wird der pull-up-Transistor $T_3$ in Abb. 6.16 und der zugehörige Kollektorwiderstand einfach weggelassen.

Sie besitzen dann als Ausgangsstufe lediglich, wie in Abb. 6.14 angedeutet, einen npn-Transistor, dessen Emitter an Masse liegt. Solche Ausgänge kann man im Unterschied zu den sonst verwendeten Gegentaktendstufen ohne weiteres parallel schalten. Allerdings muss man wie in Abb. 6.20 einen gemeinsamen Kollektorwiderstand als pull-up-Widerstand hinzufügen und die großen Anstiegszeiten von Abb. 6.15 in Kauf nehmen.

Das Ausgangspotential geht nur dann in den High-Zustand, wenn alle Ausgänge im High-Zustand sind; demnach ergibt sich eine UND-Verknüpfung. Da die Verknüpfung durch die äußere Verdrahtung erreicht wird, spricht man von Wired-AND. Da die Gatterausgänge nur im Low-Zustand wegen des leitenden Transistors niederohmig sind, bezeichnet man sie auch als Active-low-Ausgänge. Die Darstellung der Wired-AND-Verknüpfung durch logische Symbole wird in Abb. 6.21 gezeigt.

**Abb. 6.21.** Darstellung einer Wired-AND-Verknüpfung mit logischen Symbolen. Das ◇ Symbol in den Gattern bedeutet Open-Collector-Ausgang, der im aktiven Zustand in den low-Zustand geht
<!-- page-import:0667:end -->

<!-- page-import:0668:start -->
6.4 Schaltungstechnische Realisierung der Grundfunktionen 631

**Abb. 6.22.** WiredOR-Verknüpfung mit Open-Collector-Ausgängen

Mit Open-Collector-Ausgängen lässt sich auch eine ODER-Verknüpfung realisieren, indem man die Wired-AND-Verknüpfung auf die negierten Variablen anwendet. Nach De Morgan gilt:

$$
y_1 + y_2 + \ldots + y_n = \overline{\bar{y}_1 \cdot \bar{y}_2 \cdot \ldots \cdot \bar{y}_n}
$$

Die entsprechende Schaltung ist in Abb. 6.22 dargestellt.

## 6.4.2.2 Tristate-Ausgänge

Es gibt einen weiteren wichtigen Anwendungsfall, bei dem die Parallelschaltung von Gatterausgängen zu einer Schaltungsvereinfachung führt; nämlich dann, wenn wahlweise eines von mehreren Gattern den logischen Zustand einer Signalleitung bestimmen soll. Man spricht dann von einem Bus-System.

Diese Aufgabenstellung lässt sich ebenfalls mit Open-Collector-Gattern gemäß Abb. 6.20 lösen, indem man alle Ausgänge bis auf einen in den hochohmigen H-Zustand versetzt. Der prinzipielle Nachteil der niedrigen Anstiegsgeschwindigkeit lässt sich in diesem speziellen Anwendungsfall jedoch vermeiden, wenn man statt Gattern mit Open-Collector-Ausgang solche mit Tristate-Ausgang verwendet. Dies ist ein echter Gegentakt-Ausgang mit der zusätzlichen Eigenschaft, dass er sich mit einem besonderen Steuersignal in einen hochohmigen Zustand versetzen lässt. Dieser Zustand wird auch als Z-Zustand bezeichnet.

Das Prinzip der schaltungstechnischen Realisierung ist in Abb. 6.23 dargestellt. Wenn das Enable-Signal $EN = 1$ ist, arbeitet die Schaltung als normaler Inverter: Für $x = 0$ wird $z_1 = 0$ und $z_2 = 1$, d.h., $T_1$ sperrt und $T_2$ ist leitend. Für $x = 1$ wird $T_1$ leitend, und $T_2$ sperrt. Ist jedoch die Steuervariable $EN = 0$, werden $z_1 = z_2 = 0$, und beide Ausgangstransistoren sperren. Dies ist der hochohmige Z-Zustand.

Die Low-Power-Schottky-TTL-Schaltungen gibt es in großer Vielfalt und sie werden in vorhandenen Geräten auch noch oft angetroffen. Für Neuentwicklungen werden sie

**Abb. 6.23.**  
Inverter mit Tristate-Ausgang

Schaltsymbol

**Abb. 6.24.**  
Wahrheitstafel

| $EN$ | $x$ | $y$ |
|---|---|---|
| 0 | 0 | Z |
| 0 | 1 | Z |
| 1 | 0 | 1 |
| 1 | 1 | 0 |
<!-- page-import:0668:end -->

<!-- page-import:0669:start -->
632  6. Digitaltechnik Grundlagen

Verlustleistung: $P_V = 0{,}5\,\mathrm{uW/kHz}$  Gatterlaufzeit: $t_{\mathrm{pd}} = 10\,\mathrm{ns}$

**Abb. 6.25.** CMOS-Inverter aus der 74HC00-Familie und Übertragungskennlinie für $V_{DD} = 5\,V$. Schraffiert: Toleranzgrenzen, Gestrichelt: Stromaufnahme.

nicht mehr eingesetzt, weil es heute CMOS-Schaltungen gibt, die in allen Daten überlegen sind.

## 6.4.3 Komplementäre MOS-Logik (CMOS)

### 6.4.3.1 CMOS-Inverter

Eine Logikfamilie, die sich durch eine besonders niedrige Leistungsaufnahme auszeichnet, sind die CMOS-Schaltungen. Die Schaltung eines Inverters ist in Abb. 6.25 dargestellt. Auffallend ist, dass die Schaltung ausschließlich aus selbstsperrenden Mosfets besteht. Dabei ist die Source-Elektrode des n-Kanal-Fets an Masse und die des p-Kanal-Fets an der Betriebsspannung $V_{DD}$ angeschlossen. Beide Fets arbeiten also in Sourceschaltung und verstärken die Eingangsspannung invertierend. Dabei stellt jeweils der eine Transistor den Arbeitswiderstand für den anderen dar.

Macht man $U_e = 0$, leitet der p-Kanal-Fet T$_2$, und der n-Kanal-Fet T$_1$ sperrt. Die Ausgangsspannung wird gleich $V_{DD}$. Für $U_e = V_{DD}$ sperrt T$_2$, und T$_1$ leitet. Die Ausgangsspannung wird Null. Einer der beiden Transistoren ist also immer leitend und der andere sperrt. Die Schaltung arbeitet also wie ein Wechselschalter, der den Ausgang wahlweise mit der Betriebsspannung oder mit Masse verbindet. Man erkennt, dass im stationären Zustand kein Strom durch die Schaltung fließt. Lediglich während des Umschaltens fließt ein kleiner Querstrom, solange sich die Eingangsspannung im Bereich $|U_p| < U_e < V_{DD} - |U_p|$ befindet. Der Verlauf des Querstroms ist zusammen mit der Übertragungskennlinie in Abb. 6.25 eingezeichnet. Die Stromaufnahme eines CMOS-Gatters setzt sich aus drei Anteilen zusammen:

- Wenn die Eingangsspannung konstant gleich Null oder gleich $V_{DD}$ ist, fließt ein kleiner Sperrstrom durch die Transistoren. Bei den modernen Transistoren mit sehr kleinen Geometrien ist dieser Strom schon deutlich größer und ein nennenswerter Gate-Tunnelstrom kommt noch hinzu.
- Wenn das Eingangssignal seinen Zustand wechselt, fließt vorübergehend ein Querstrom durch beide Transistoren. Er liefert allerdings nur einen kleinen Beitrag zur Verlustleistung, da der Umschaltvorgang meist sehr schnell verläuft.
<!-- page-import:0669:end -->

<!-- page-import:0670:start -->
6.4 Schaltungstechnische Realisierung der Grundfunktionen 633

**Abb. 6.26.**  
Modell zur Erklärung der Verlustleistung.  
$C_{Pv}$ ist die Verlustleistungskapazität.

– Der überwiegende Beitrag entsteht bei der Auf- und Entladung der *Transistorkapazitäten* $C_T$.

Beim Aufladen wird die Energie $\frac{1}{2}\, C_T\, V_{DD}^2$ in den Schaltkapazitäten gespeichert; gleichzeitig wird derselbe Betrag im p-Kanal Transistor in Wärme umgesetzt. Beim Entladen wird die im Kondensator gespeicherte Energie im n-Kanal Transistor in Wärme umgesetzt. Abbildung 6.26 zeigt ein Modell für diesen Vorgang. Bei einem Schaltzyklus wird die Energie $W = C_T\, V_{DD}^2$ in Wärme verwandelt. Daraus ergibt sich die Verlustleistung

$$
P_V = W/t = W \cdot f = C_T \cdot V_{DD}^2 \cdot f
$$

(6.13)

Sie ist unabhängig von der Größe der On-Widerstände. Da die durch den Querstrom entstehenden Verluste ebenfalls proportional zur Frequenz sind, lassen sie sich gleichzeitig berücksichtigen, wenn man eine *Verlustleistungskapazität* $C_{Pv}$ gemäß der Gleichung

$$
C_{Pv} = P_{V\,ges}/(V_{DD}^2 \cdot f)
$$

definiert. Sie ist etwas größer als die reinen Transistorkapazitäten $C_T$. Wie sich die Verlustleistung von CMOS-Schaltungen reduzieren lässt, kann man Gl. (6.13) entnehmen:

– Durch Reduktion der Kapazität: wenn man z.B. die Technologie von 48 nm auf 24 nm reduziert, werden alle Abmessungen halbiert und die Flächen reduzieren sich auf ein viertel. Dadurch reduzieren sich auch die Transistorkapazitäten auf ein viertel.

– Wenn man die Betriebsspannung halbiert, sinkt die Verlustleitung ebenfalls auf ein viertel, da sie quadratisch eingeht. Allerdings setzt dies entsprechend niedrige Schwellen-spannungen der Transistoren voraus, die allerdings zum Anstieg der Sperrströme führen.

– Wenn man die Frequenz reduziert, reduziert sich die Verlustleistung in demselben Maß; allerdings arbeitet die Schaltungen dann auch entsprechend langsamer. Man kann aber dafür sorgen, dass Gatter, die gerade nicht gebraucht werden, wirklich nicht schalten.

### 6.4.3.2 Offene Eingänge

Das Potential an offenen CMOS-Eingängen ist *undefiniert*. Deshalb *muss* man sie an Masse bzw. $V_{DD}$ anschließen. Dies ist selbst bei unbenutzten Gattern geboten, weil sich sonst ein Eingangspotential einstellt, bei dem ein mehr oder weniger großer Querstrom durch beide Transistoren fließt. Daraus resultiert eine unerwartet große Verlustleistung.
<!-- page-import:0670:end -->

<!-- page-import:0671:start -->
634  6. Digitaltechnik Grundlagen

**Abb. 6.27.**  
Modell eines Menschen zur Simulation statischer Ladungen  
("Human Body Modell").  
DUT = Device Under Test.

## 6.4.3.3 Statische Ladungen

Bei trockenem Wetter lädt man sich leicht auf durch Reibungselektrizität. Abbildung 6.27 zeigt ein Modell; bei der Aufladung der Kapazität des Körpers $C_{body}$ steht der Schalter in der linken Stellung. Die aufladende Spannung kann unter Umständen auch deutlich höher sein als 2000 V; besonders gefährlich sind Teppichböden, bei denen sich auch Spannungen bis 6000 V ergeben können. Bei Berührung (Schalter in der rechten Stellung) überträgt sich diese Ladung auf das Testobjekt (Device Under Test, DUT) und gefährdet die Halbleiter-Bauelemente. Besonders gefährdet sind integrierte Schaltungen mit MOS-Transistoren. Sie besitzen meist nur eine kleine Eingangskapazität im Pikofarad-Bereich, die klein gegenüber der Kapazität des Menschen $C_{body}$ ist. Daher steigt die Spannung bei Berührung auf die Spannung von $C_{body}$ an, also 2000 V in diesem Beispiel. Damit schlägt jedes Gate durch. Um die Eingangstransistoren zu schützen, setzt man die in Abb. 6.28 dargestellten Schutzdioden ein, die die Gatespannung auf den Betriebsspannungsbereich begrenzen. Der Entladestrom der $C_{body}$-Kapazität beträgt dann im Augenblick nach der Berührung

$$
I \;=\; \frac{U_0}{R_{Entladung}} \;=\; \frac{2000\,\mathrm{V}}{1{,}5\,\mathrm{k}\Omega} \;=\; 1{,}3\,\mathrm{A}
$$

Derart große Ströme müssen die Schutzdioden kurzfristig aushalten und die Serienwiderstände müssen niederohmig sein.

Durch die Schutzdioden entsteht jedoch ein neues Problem: Infolge der Sperrschicht-Isolierung der beiden MOS-Fets $T_{D1}$ und $T_{D2}$ entsteht ein parasitärer Thyristor zwischen den Betriebsspannungsanschlüssen, wie in Abb. 6.28 dargestellt (s. Abb. 3.22 auf S. 201). Dieser Thyristor stört normalerweise nicht, da die Transistoren $T_{D1}$ und $T_{D2}$ sperren. Ihre Sperrströme werden über die Widerstände $R_p$ bzw. $R_n$ abgeleitet.

Eingangsschutz

Parasitärer Thyristor

**Abb. 6.28.** Schutz der Eingänge vor statischen Ladungen mit Dioden, die allerdings als parasitärer Thyristor wirken
<!-- page-import:0671:end -->

<!-- page-import:0672:start -->
6.4 Schaltungstechnische Realisierung der Grundfunktionen

635

Abb. 6.29.  
CMOS-NOR-Gatter

Abb. 6.30.  
Wahrheitstafel NOR

| $x_2$ | $x_1$ | $y$ |
|---|---|---|
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 0 |

Bei angelegter Betriebsspannung darf jedoch kein nennenswerter Strom durch die Schutzdioden fließen. Sonst werden beide Transistoren leitend, der Thyristor T$_{D1}$, T$_{D2}$ zündet und schließt die Betriebsspannung kurz. Bei den dabei auftretenden großen Strömen wird die integrierte Schaltung zerstört. Um diesen „Latch-up“-Effekt zu vermeiden, sollte die Eingangsspannung das Massepotential nicht unterschreiten bzw. die Betriebsspannung nicht überschreiten. Wenn sich dies nicht ausschließen lässt, muss zumindest der über die Schutzdioden fließende Strom je nach Technologie auf Werte von 1 ...100 mA begrenzt werden. Dazu reicht meist ein einfacher Vorwiderstand aus. Der parasitäre Thyristor kann auch gezündet werden, wenn man an den Ausgang eine Spannung anlegt, die den Betriebsspannungsbereich überschreitet.

Da die Schutzstrukturen an den Eingängen von MOS-Schaltungen keinen vollständigen Schutz vor Zerstörung durch statische Ladungen bieten, setzt man zusätzliche Vorsichtsmaßnahmen ein, die das Auftreten von statischen Ladungen verhindern sollen:

1. Leitfähige Fußböden, die am Schutzleiter angeschlossen werden
2. Leitfähige Stühle mit leitfähigen Bezügen, deren Ladung über die Rollen auf den Fußboden abgeleitet werden
3. Arbeitstische mit leitfähigen, geerdeten Gummimatten
4. Erdung der Personen über leitfähige Armbänder, die auch am Schutzleiter angeschlossen werden. Damit bei der Berührung von spannungsführenden Teilen kein schädlicher Strom über die Person fließt, verwendet man hier Schutzwiderstände von 1 M$\Omega$ in den Erdungskabeln.

#### 6.4.3.4 CMOS-Gatter

Abbildung 6.29 zeigt ein CMOS-NOR-Gatter, das nach demselben Prinzip arbeitet wie der beschriebene Inverter. Damit der gesteuerte Arbeitswiderstand hochohmig wird, wenn eine der Eingangsspannungen in den H-Zustand geht, muss man eine entsprechende Anzahl von p-Kanal-Fets in Reihe schalten. An der Wahrheitstafel in Abb. 6.30 lassen sich die vier Eingangskombinationen verifizieren. Durch Vertauschen der Parallelschaltung mit der Reihenschaltung der MOS-Transistoren entsteht aus dem NOR-Gatter das in Abb. 6.31 dargestellte NAND-Gatter und die zugehörige Wahrheitstafel Abb. 6.32.

#### 6.4.3.5 Transmission-Gate

Mit MOS-Transistoren lassen sich auf einfache Weise Schalter realisieren, da das Gate vom Kanal isoliert ist; dadurch ist die Steuerspannung vom Signalpfad getrennt. Das Schaltsymbol des Transmission Gates und sein Ersatzschaltbild sind in Abb. 6.33 dargestellt.
<!-- page-import:0672:end -->

<!-- page-import:0673:start -->
636 6. Digitaltechnik Grundlagen

**Abb. 6.31.**  
CMOS-NAND-Gatter

**Abb. 6.32.**  
Wahrheitstafel NAND

| x2 | x1 | y |
|---|---|---|
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

Seine Funktion besteht darin, dass Signaleingang und -Ausgang entweder niederohmig verbunden oder getrennt sind. Dabei sind die beiden Anschlüsse gleichberechtigt. Das Signal kann also in beiden Richtungen übertragen werden.

Die schaltungstechnische Realisierung in CMOS-Technik ist in Abb. 6.34 dargestellt. Der eigentliche Schalter wird durch die beiden komplementären Mosfets T$_1$ und T$_2$ gebildet. Die Ansteuerung erfolgt mit Hilfe des Inverters mit komplementären Gatepotentialen. Wenn $U_{ST} = 0$ ist, wird $V_{GN} = 0$ und $V_{GP} = V_{DD}$. Dadurch sperren beide Mosfets, wenn wir voraussetzen, dass die Signalspannungen $U_1$ und $U_2$ im Bereich zwischen 0 und $V_{DD}$ liegen. Macht man hingegen $U_{ST} = V_{DD}$, wird $V_{GN} = V_{DD}$ und $V_{GP} = 0$. Der On-Widerstand der beiden Mosfets des Schalters hängt in diesem Fall von dem Eingangssignal ab. Man erkennt aber am Widerstandsverlauf in Abb. 6.35 das mindestens einer der beiden Mosfets leitend ist; deshalb verwendet man hier die Parallelschaltung von einem n- und p-Kanal Fet.

Im Unterschied zu den konventionellen Gattern tritt hier keine Pegelregenerierung auf. Deshalb schaltet man nie mehrere Transmission-Gate in Reihe, sondern verwendet sie nur in Verbindung mit konventionellen Gattern. Die Laufzeit im Signalpfad ist bei eingeschaltetem Transmission-Gate deutlich kürzer als die normalen Gatterlaufzeiten in dieser Logikfamilie. Da der Signalpfad bei eingeschaltetem Transmission-Gate wie ein Schalter wirkt, kann man damit nicht nur digitale, sondern auch analoge Signale schalten. Daher eignet sich das Transmission-Gate auch als Analogschalter oder -Multiplexer.

CMOS-Schaltungen besitzen große Vorteile gegenüber anderen Logikfamilien:

- einfache Schaltungen;
- kleine Geometrie der Transistoren;
- geringer Ruhestrom;

Prinzip

Schaltsymbol

**Abb. 6.33.** Transmission-Gate: Prinzip und Schaltsymbol
<!-- page-import:0673:end -->

<!-- page-import:0674:start -->
6.4 Schaltungstechnische Realisierung der Grundfunktionen 637

**Abb. 6.34.**  
Schaltung eines Transmission Gates

**Abb. 6.35.**  
Abhängigkeit des On-Widerstands von der Signalspannung bei eingeschaltetem Transmission-Gate

– Stromaufnahme proportional zur Frequenz: lediglich die Gatter, die ihren Zustand ändern, benötigen Strom.

## 6.4.4 Emittergekoppelte Logik (ECL)

Wie wir in Abb. 4.56 auf S. 345 gesehen haben, kann man bei einem Differenzverstärker mit einer Eingangsspannungsdifferenz von ca. $\pm 100\,\mathrm{mV}$ den Strom $I_0$ vollständig von einem Transistor auf den anderen umschalten. Er besitzt also zwei definierte Schaltzustände, nämlich $I_C = I_0$ oder $I_C = 0$. Er wird deshalb auch als Stromschalter bezeichnet. Wenn man durch entsprechend niederohmige Dimensionierung dafür sorgt, dass der Spannungshub an den Kollektorwiderständen hinreichend klein bleibt, kann man verhindern, dass der leitende Transistor in die Sättigung geht.

### 6.4.4.1 PECL-Gatter

Abbildung 6.36 zeigt ein typisches ECL-Gatter. Die Transistoren T2 und T3 bilden einen Differenzverstärker. An die Basis von T3 wird die Referenzspannung $V_{ref}$ gelegt, die die Mitte zwischen dem High- und Low-Pegel bestimmt. Wenn sich beide Eingangsspannungen im Low-Zustand befinden, sperren die Transistoren T1 und T2. Der Emitterstrom fließt in diesem Fall über den Transistor T3 und bewirkt an $R_2$ einen Spannungsabfall von $0{,}8\,\mathrm{V}$. Der OR-Ausgang geht in den Low-Zustand. Wenn einer der Eingänge auf High geht, wechselt der Schaltzustand und der OR-Ausgang geht in den High-Zustand. Die Funktionsweise der Schaltung kann man für die verschiedenen Eingangskombinationen an der Wahrheitstafel in Abb. 6.37 nachvollziehen.

Die Emitterfolger an den Ausgängen dienen primär nicht als Impedanzwandler, sondern zur Potentialverschiebung von $0{,}8\,\mathrm{V}$, um zu erreichen, dass die Ausgangspegel symmetrisch zur Referenzspannung von $V_{ref} = V_{CC} - 1{,}3\,\mathrm{V}$ liegen. Die Emitterwiderstände sind bei ECL-Schaltungen nicht auf dem Chip integriert, sondern werden extern angeschlossen. Es ist üblich, sie nicht an Masse anzuschließen, sondern an einer Hilfsspannung, der termination voltage, $V_{TT} = V_{CC} - 2\,\mathrm{V}$. Dadurch ist es möglich, die Widerstände auf $50\,\Omega$ zu reduzieren und die Leitung am nachfolgenden Gattereingang mit dem Wellenwiderstand der Verbindungsleitung abzuschließen.

Alle Pegel sind bei den ECL-Schaltungen auf die positive Betriebsspannung $V_{CC}$ bezogen und ändern sich nicht, wenn man die Betriebsspannung verändert. Bei der in Abb. 6.36 dargestellten Schaltung wird das dadurch erreicht, dass die Hilfsspannungen [unclear]
<!-- page-import:0674:end -->

<!-- page-import:0675:start -->
638  6. Digitaltechnik Grundlagen

*Verlustleistung:* $P_V = 76\,\mathrm{mW}$  *Gatterlaufzeit:* $t_{\mathrm{pd}} = 270\,\mathrm{ps}$

**Abb. 6.36.** ECL-NOR-ODER-Gatter vom Typ MC100EP01 beim Betrieb als PECL-Schaltung

| $x_1$ | $x_2$ | $y = x_1 + x_2$ | $\overline{y} = \overline{x_1 + x_2}$ |
|---|---|---|---|
| 0 | 0 | 0 | 1 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 0 |

**Abb. 6.37.**  
Wahrheitstafel des OR-NOR-Gatters

an $V_{CC}$ angeschlossen sind und der Differenzverstärker mit konstantem Strom betrieben wird. Aus diesem Grund kann man die Betriebsspannung auf $V_{CC} = 5{,}2\,\mathrm{V}$ erhöhen, ohne die Funktionsweise der Schaltung zu verändern. Da digitale Logikschaltungen heutzutage aber kaum noch mit einer Betriebsspannung von $5\,\mathrm{V}$ betrieben werden, verwendet man auch bei den ECL-Schaltungen meist $V_{CC} = 3{,}3\,\mathrm{V}$.

## 6.4.4.2 NECL-Gatter

Früher war es üblich, ECL-Schaltungen aus einer negativen Betriebsspannungsquelle von $V_{EE} = -5{,}2\,\mathrm{V}$ zu betreiben und $V_{CC} = 0$ zu machen. Obwohl es sich um dieselben Schaltungen handelt, bezeichnet man so betriebene ECL- Schaltungen als NECL-

**Abb. 6.38.** Kennlinien eines ECL-Gatters der MC100EP-Serie.  
Schraffiert: Toleranzgrenzen
<!-- page-import:0675:end -->

<!-- page-import:0676:start -->
## 6.4 Schaltungstechnische Realisierung der Grundfunktionen

639

Abb. 6.39. ECL-Gatter beim Betrieb als NECL-Schaltung

Schaltungen im Unterschied zu den aus einer positiven Betriebsspannung betriebenen PECL-Schaltungen; Abb. 6.39 zeigt den Einsatz als NECL-Gatter. Der Betrieb von ECL-Gattern mit negativer Betriebsspannung ist heutzutage ungebräuchlich, weil man eine zusätzliche negative Betriebsspannung benötigt. Außerdem erfordert die Kopplung mit Logikschaltungen, die aus einer positiver Betriebsspannung betrieben werden, komplizierte Pegelumsetzer, die meist auch langsam sind.

#### 6.4.4.3 Wired-OR-Verknüpfung

Durch Parallelschaltung von ECL-Ausgängen kann man – wie bei Open-Collector-Ausgängen – eine logische Verknüpfung erreichen. Diese Möglichkeit ist in Abb. 6.40 dargestellt. Da bei der Parallelschaltung der Emitterfolger der H-Pegel dominiert (active high), ergibt sich eine ODER-Verknüpfung. Der Vorteil einer Wired-OR-Verknüpfung besteht bei ECL-Schaltungen darin, dass sich dadurch die Geschwindigkeit nicht reduziert. Man spart dabei also nicht nur ein Gatter ein, sondern auch eine Gatterlaufzeit.

#### 6.4.4.4 Schaltzeiten

Die Gatterlaufzeit der heutigen ECL-Schaltungen ist sehr gering; bei der MC100EP-Familie beträgt sie lediglich $t_{pd}=270\,\mathrm{ps}$ bei Anstiegszeiten von 130 ps; das ermöglicht Schaltfrequenzen über 2 GHz. Allerdings erfordern die niedrigen Anstiegszeiten Verbindungsleitungen mit definiertem Wellenwiderstand, die man als Stripline oder Microstripline ausführt. Sie werden in Kapitel 6.5 beschrieben.

Abb. 6.40.  
Wired-OR-Verknüpfung bei ECL-Schaltungen. Das [unclear]-Symbol in den Gattern bedeutet Open-Emitter-Ausgang, der einen active-high-Ausgang darstellt.
<!-- page-import:0676:end -->

<!-- page-import:0677:start -->
640  6. Digitaltechnik Grundlagen

Hilfsspannungsquelle

Spannungsteiler

**Abb. 6.41.** Erzeugung der Terminierungsspannung mit Hilfsspannungsquelle bzw. Spannungsteilern aus der Betriebsspannung

## 6.4.4.5 Verlustleistung

Die Verlustleistung von ECL-Gattern ist sehr hoch; bei der MC100EP-Familie beträgt sie 76 mW. Dabei entfallen lediglich 12 mW auf den Differenzverstärker, die restlichen 64 mW auf die beiden Emitterfolger. Wenn man einen der beiden Ausgänge nicht benötigt, kann man den zugehörigen Emitterwiderstand weglassen und dadurch 32 mW einsparen. Die Hilfsspannung $V_{TT}$ für die Emitterwiderstände wird nicht auf dem Chip erzeugt; der Anwender muss sie mit einer zusätzlichen Stromversorgung bereitstellen. Man kann sie auch mit einem Spannungsteiler aus der Betriebsspannung erzeugen, der dieselbe Spannung mit einem Innenwiderstand von 50 $\Omega$ bereitstellt. Diese Möglichkeit ist in Abb. 6.41 dargestellt. Allerdings verursacht diese Methode an jedem Ausgang eine mittlere Verlustleistung von 84 mW im Vergleich zu den sonst anfallenden 32 mW. Daher wendet man diese Methode nur an, wenn wenige ECL-Ausgänge vorliegen.

## 6.4.5 Current Mode Logik (CML)

Auf eine Potentialverschiebung kann man verzichten, wenn man den Ausgangsspannungshub von 800 mV bei den ECL-Schaltungen auf 400 mV oder weniger reduziert. Davon macht man bei den CML-Schaltungen Gebrauch. In Abb. 6.42 ist die Grundschaltung eines Inverters dargestellt. Man sieht, dass es sich um den einfachen Differenzverstärker von Abb. 4.61 handelt. Um trotz der geringen Ausgangsamplitude eine gut Störsicherheit zu gewährleisten, überträgt man alle Signale differentiell. Das erfordert zwar doppelt so viele Verbindungsleitungen, erhöht die Störfestigkeit aber deutlich. Man erkennt, dass man die Verbindungsleitung an beiden Enden mit dem Wellenwiderstand abschließen kann. Der effektive Drainwiderstand beträgt also 25 $\Omega$. Um daran einen Spannungsabfall von 400 mV zu erzielen, ist ein Strom vom $I_0 = 16$ mA erforderlich. Bei den hier eingetragenen Spannungen wurden Transistoren mit einer Schwellenspannung von 0,5 V und einer Gate-Source-Spannung von 1 V bei leitendem Transistor angenommen.

Bei Verbindungen auf dem Chip ist wegen der kurzen Entfernungen keine Terminierung erforderlich; hier sind selbst bei Frequenzen von mehreren Gigahertz Drainwiderstände von 400 $\Omega$ möglich; der erforderliche Strom beträgt dann lediglich $I_0 = 1$ mA. Man kann CML-Gatter auch aus Bipolartransistoren aufbauen; dann reichen Ausgangsamplituden von 200 mV aus.

Die Current-Mode-Logik stellt eine Weiterentwicklung der ECL-Schaltungen dar. Bei den ECL-Schaltungen sind die Emitterfolger zwar zur Potentialverschiebung notwendig; sie besitzen aber zwei schwerwiegende Nachteile:

- hoher Stromverbrauch
<!-- page-import:0677:end -->

<!-- page-import:0678:start -->
6.4 Schaltungstechnische Realisierung der Grundfunktionen 641

**Abb. 6.42.** CML-Inverter mit MOS-Transistoren. Zum Verständnis der Funktionsweise ist eine Übertragungsleitung mit Receiver zusätzlich eingezeichnet. Eingetragene Spannungen und Ströme als Beispiel für $x = 0$ und $y = 1$

– niedriger Ausgangswiderstand, der eine senderseitige Anpassung an den Wellenwiderstand der Transmissionline unmöglich macht.

## 6.4.5.1 CML-Gatter

Zur Realisierung von logischen Verknüpfungen kann man bei den CML-Schaltungen nicht einfach weitere Transistoren zu dem Differenzverstärker parallelschalten wie bei den ECL-Gattern, weil hier alle Signale symmetrisch ausgewertet werden müssen. Deshalb verwendet man hier die in Abb. 6.43 dargestellte Kaskadierung von Differenzverstärkern. Jede Eingangsvariable steuert einen separaten Differenzverstärker und bestimmt, über welche Drain-Elektrode der Sourceström weiter geleitet wird. Bei dem eingetragenen Beispiel fließt der Strom $I_0$ über die Transistoren $T_3$, $T_1$ und den Widerstand $R_{D1}$. Dadurch geht der Ausgang $\bar y$ in den Low-Zustand. Folglich fließt über die Transistoren $T_4$, $T_2$ kein Strom und der $y$-Ausgang geht in den High-Zustand. Die übrigen Eingangskombinationen kann man entsprechend anhand der Wahrheitstafel in Abb. 6.44 verifizieren. Damit die Transistoren $T_3$, $T_1$ in der unteren Ebene der Kaskodeschaltung eine ausreichende Arbeitsspannung

**Abb. 6.43.**  
CML-UND-Gatter $y = x_1 \cdot x_2$.  
Eingetragene Spannungen als Beispiel für  
$x_1 = x_2 = 1$ und $y = 1$.

**Abb. 6.44.**  
Wahrheitstafel UND

| $x_2$ | $x_1$ | $y$ |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |
<!-- page-import:0678:end -->

<!-- page-import:0679:start -->
642  6. Digitaltechnik Grundlagen

**Abb. 6.45.**  
CML-ODER-Gatter $y = x_1 + x_2$.  
Eingetragene Spannungen als Beispiel für  
$x_1 = x_2 = 0$ und $y = 0$

**Abb. 6.46.**  
Wahrheitstafel ODER

| $x_2$ | $x_1$ | $y$ |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

bekommen, ist eine Potentialverschiebung an ihren Eingängen erforderlich; dazu dienen die Sourcefolger $T_5$, $T_6$. ODER-Gatter lassen sich mit derselben Schaltung realisieren, wenn man die Ein- und Ausgangssignale negiert, indem man die Anschlüsse vertauscht, denn nach De Morgan gilt:

$$\bar{y} = \overline{x_1 \cdot x_2} = \bar{x}_1 + \bar{x}_2$$

Mit der Kaskadierung von Differenzverstärkern lässt sich auch eine EXOR-Funktion realisieren. Dazu verwendet man in der oberen Ebene einen zweiten Differenzverstärker und verbindet die Ausgänge über Kreuz wie in Abb. 6.47 dargestellt. In dem eingetragenen Beispiel fließt der Strom $I_0$ über die Transistoren $T_4$ und $T_1'$. Anhand der Wahrheitstafel in Abb. 6.48 lassen sich die übrigen Kombinationen nachvollziehen. Der Vorteil der Kaskadierung ist hier besonders auffällig: Obwohl zwei UND-Verknüpfungen mit nach-

**Abb. 6.47.**  
CML-EXOR-Gatter $y = x_1 \cdot \bar{x}_2 + \bar{x}_1 \cdot x_2$.  
Eingetragene Spannungen als Beispiel für  
$x_1 = x_2 = 1$ und $y = 0$

**Abb. 6.48.**  
Wahrheitstafel EXOR

| $x_2$ | $x_1$ | $y$ |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |
<!-- page-import:0679:end -->

<!-- page-import:0680:start -->
6.4 Schaltungstechnische Realisierung der Grundfunktionen 643

**Abb. 6.49.**  
CML-Flip-Flop: Transparentes D-Latch  
Eingetragene Spannungen als Beispiel für  
$C = 0$, $D = 1$ und $Q = 0$

**Abb. 6.50.**  
Wahrheitstafel

| C | D | Q |
|---|---|---|
| 0 | 0 | $Q_{-1}$ |
| 0 | 1 | $Q_{-1}$ |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

folgender oder-Verknüpfung erforderlich sind, erhält man das Ergebnis in einer *einzigen* Gatterlaufzeit, die je nach verwendeter Technologie lediglich bei 100 ps liegen kann.

## 6.4.5.2 CML-Flip-Flop

In CML-Technik lässt sich auch ein Flip-Flop sehr elegant realisieren. Dazu schaltet man in Abb. 6.49 einen Differenzverstärker und einen als Flip-Flop rückgekoppelten Differenzverstärker parallel und aktiviert über die Taktsteuerung jeweils einen der beiden. Wenn der Takt $C = 1$ ist, ist der Differenzverstärker $T_1$, $T_2$ aktiv; das Ausgangssignal $Q$ folgt dann dem Eingangssignal $D$; er arbeitet dann wie der CML-Inverter in Abb. 6.42.

Wenn der Takt $C = 0$ wird, fließt der Strom über die Transistoren $T_1'$, $T_2'$; der in diesem Augenblick bestehende Ausgangszustand wird in dem als Flip-Flop rückgekoppelten Differenzverstärker eingefroren. Der Transistor $T_1'$ wird dabei über die Mitkopplung leitend gehalten. Das Flip-Flop befindet sich also im Speicherzustand.

Der Unterschied zu dem exor-Gatter in Abb. 6.47 besteht lediglich darin, dass hier der Differenzverstärker $T_1'$, $T_2'$ eine Mitkopplung besitzt. Eine umfassende Übersicht über die Funktionsweise von Flip-Flops findet man in Abschnitt 8.1.

## 6.4.6 Low Voltage Differential Signaling (LVDS)

Low Voltage Differential Signaling ist keine Logikfamilie, sondern eine Technik zur differentiellen Datenübertragung für hohe Frequenzen. In Abb. 6.51 ist die symmetrische Übertragung zu dem hier mit eingezeichneten Empfänger zu sehen. Der Treiber für die Ausgangssignale besteht aus den Transistoren $T_1$ bis $T_4$, die eine H-Brücke bilden. Zwei über Kreuz liegende Transistoren werden jeweils eingeschaltet; in diesem Beispiel die Transistoren $T_2$ und $T_3$. Über sie fließt dann der durch die Stromquellen vorgegebene Strom $I_0$. Er fließt sowohl über die Terminierungswiderstände $R_{TT}$ im Sender, als auch durch den Terminierungswiderstand am Empfänger.

Bei der eingezeichneten Dimensionierung ist jede Übertragungsleitung auf beiden Seiten mit 50 $\Omega$ terminiert, denn die 100 $\Omega$ Widerstände am Empfänger kann man sich in zwei Teile mit je 50 $\Omega$ zerlegt denken, deren Mitte auf einem konstanten Potential von [unclear]
<!-- page-import:0680:end -->

<!-- page-import:0681:start -->
644  6. Digitaltechnik Grundlagen

**Abb. 6.51.** Prinzip zur Erzeugung von LVDS-Signalen. Die eingetragenen Spannungen sind Beispiele für den Zustand $x = 1$. Der Stromfluss ist dick eingezeichnet.

$V_{TT} = 1{,}2\ \mathrm{V}$ liegt. Um einen Spannungsabfall von $0{,}4\ \mathrm{V}$ am Empfänger zu erzielen, ist ein Strom von $I_0 = 8\ \mathrm{mA}$ erforderlich. Man kann den Strom $I_0$ auf $4\ \mathrm{mA}$ reduzieren, wenn man die beiden Widerstände $R_{TT}$ auf der Senderseite hochohmiger macht; dann verliert man jedoch den Vorteil der beidseitigen Terminierung.

Die Spannungsquelle $V_{TT}$ auf der Senderseite dient lediglich dazu, die Gleichtaktspannung auf den Verbindungsleitungen festzulegen, die sonst wegen der Stromquellen undefiniert wäre. Strom fließt über diese Spannungsquelle im Prinzip nicht, denn der Strom, der in die eine Ausgangsleitung geschickt wird, wird über die andere wieder abgeleitet. Über die $V_{TT}$-Quelle fließt nur dann ein Strom, wenn die beiden $I_0$-Quellen nicht exakt gleich sind.

Zur Ansteuerung der H-Brücke benötigt man zwei Ansteuersignale: eines für den unteren Differenzverstärker und ein weiteres für den oberen. Um hohe Übertragungsgeschwindigkeiten zu erreichen, ist es wichtig, beide Differenzverstärker gleichzeitig umzuschalten. Deshalb ist es nicht möglich, das Ansteuersignal für den oberen Differenzverstärker mit einem Pegelumsetzer aus dem des unteren zu erzeugen. Dieses Problem lässt sich am ein-

**Abb. 6.52.** Vereinfachte Ansteuerung eines LVDS-Treibers
<!-- page-import:0681:end -->

<!-- page-import:0682:start -->
645

# 6.4 Schaltungstechnische Realisierung der Grundfunktionen

fachsten dadurch lösen dass man - wie in Abb. 6.52 dargestellt - die oberen Ströme nicht schaltet und dafür unten den doppelten Strom einsetzt.

Der Vergleich mit dem CML-Gatter in Abb. 6.42 zeigt einige Übereinstimmungen: In beiden Fällen liegt eine symmetrische Übertragung vor, die an beiden Seiten mit 50 $\Omega$ terminiert ist. Um an der Parallelschaltung der beiden parallelgeschalteten Terminierungswiderstände von 50 $\Omega$ einen Spannungsabfall von 0,4 V zu erzielen, ist in beiden Fällen ein Strom von 16 mA erforderlich. Der Anschluss der Terminierungswiderstände an der Betriebsspannung erscheint aber robuster als der Anschluss an der Terminierungsspannung $V_{TT} = 1{,}2\ \mathrm{V}$. Besonders elegant ist die Terminierung bei CML-Schaltungen, wenn man sie aus einer negativen Versorgungsspannung betreibt, da die Terminierungswiderstände dann an Masse liegen wie man in Abb. 6.42 erkennt.

## 6.4.7 Vergleich der Logikfamilien

In Abb. 6.53 kann man zwei Gruppen von Logikfamilien unterscheiden:

- Die alten Logikschaltungen der 7400-Serie in TTL und CMOS, die heute für Neuentwicklungen nicht mehr eingesetzt werden
- Die neuen schnellen Logikschaltungen in Hightech-CMOS, ECL und CML

Die TTL-Schaltungen besitzen bei tiefen Frequenzen eine konstante Stromaufnahme, bei Frequenzen über einigen MHz steigt die Stromaufnahme jedoch an, weil der Querstrom dominiert, der bei jedem Umschaltvorgang durch die Totem-Pole Endstufe fließt. Bei den CMOS-Schaltungen der 7400-Serie ist die Stromaufnahme gemäß (6.13) proportional zur Frequenz. Die Stromaufnahme der neuen CMOS-Hightech Schaltungen ist sehr viel geringer, weil die Schaltkapazitäten wegen der Kleinheit der Transistoren viel geringer sind. Deshalb besitzen sie jedoch einen nennenswerten Sperrstrom, der durch den Tunneleffekt verursacht wird. Die Stromaufnahme der ECL- und CML-Schaltungen ist deutlich höher als die der übrigen Logikfamilien, aber unabhängig von der Frequenz. Der Grund dafür ist,

Abb. 6.53. Frequenzabhängigkeit der Verlustleistung
<!-- page-import:0682:end -->
