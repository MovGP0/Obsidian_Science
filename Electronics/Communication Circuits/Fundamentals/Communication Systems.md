# Communication Systems

<!-- page-import:1180:start -->
# Kapitel 21:
Grundlagen

## 21.1 Nachrichtentechnische Systeme

Nachrichtentechnische Systeme sind heute genauso selbstverständlich in unser Alltagsleben integriert wie die elektrische Energieversorgung. Dazu gehören neben dem analogen Telefon als klassisches leitungsgebundenes System und dem analogen Rundfunk und Fernsehen als klassische drahtlose Systeme in zunehmendem Masse moderne Systeme wie ISDN-Telefone, schnurlose und Mobiltelefone, Rundfunk- und Fernsehempfang über Breitband-Kabelnetze oder Satellitenempfang, PC-Modems, drahtlose PC-Mäuse und -Tastaturen, drahtlose Garagentoröffner sowie die in den Autoschlüssel integrierten Fernentriegler, und vieles mehr. Darüber hinaus entstehen durch die Kopplung verschiedener Systeme und die Einführung spezieller Vermittlungsverfahren heterogene Systeme wie das Internet.

Wir bezeichnen ein Übertragungssystem genau dann als nachrichtentechnisches System, wenn eine *Modulation* zur Anpassung an den Übertragungskanal verwendet wird; in diesem Sinne ist die Nachrichtentechnik als Lehre von den *Modulationsverfahren* zu verstehen. Davon unterscheiden wir Übertragungssysteme ohne Modulation, z.B. die Verbindungssysteme der Computertechnik (V.24, SCSI, usw.), die lediglich spezielle Leitungen und Treiber zur direkten Übertragung der Signale über größere Entfernungen verwenden. Charakteristisch für ein Nachrichtenübertragungssystem ist demnach die Verwendung eines *Modulators* im Sender und eines zugehörigen *Demodulators* im Empfänger.

Abbildung 21.1 zeigt die Komponenten eines analogen und eines digitalen Nachrichtenübertragungssystems. Die abwärts durchlaufenen Komponenten bilden den *Sender*, die aufwärts durchlaufenen den *Empfänger*. Zwischen Sender und Empfänger fungiert der *Kanal* als Übertragungsmedium; dabei kann es sich um eine Leitung oder eine drahtlose Übertragungsstrecke mit Sende- und Empfangsantenne handeln.

Beim analogen System wird das zu übertragende Nutzsignal $s(t)$ direkt dem *analogen Modulator* zugeführt. Das Ausgangssignal des Modulators wird mit einem *Sendeverstärker* verstärkt und auf den Kanal gegeben. Die meisten analogen Modulatoren erzeugen bereits ein Signal mit der gewünschten Sendefrequenz; in diesem Fall besteht der Sendeverstärker nur aus einem oder mehreren in Reihe geschalteten Verstärkern. In einigen Fällen erzeugt der Modulator ein Signal auf einer Zwischenfrequenz, die im Sendeverstärker mit Hilfe eines Mischers auf die Sendefrequenz umgesetzt wird. Der Kanal bewirkt eine Dämpfung des Signals, die bei drahtlosen Übertragungsstrecken bis zu $150\,\mathrm{dB}$ betragen kann (z.B. Sendeleistung $1\,\mathrm{kW}=10^3\,\mathrm{W} \rightarrow$ Empfangsleistung $1\,\mathrm{pW}=10^{-12}\,\mathrm{W}$); dadurch liegt die Leistung des Signals im Extremfall nur noch wenig über der Leistung des unvermeidlichen thermischen Rauschens. Im Empfänger verstärkt ein *Empfangsverstärker* das Signal soweit, dass es dem Demodulator zugeführt werden kann; dabei muss eine Verstärkungsregelung eingesetzt werden, um den je nach Entfernung zum Sender stark unterschiedlichen Empfangspegel auf einen festen Pegel für den Demodulator anzuheben. Bei drahtlosen Systemen und leitungsgebundenen Systemen mit Mehrfachnutzung muss der Empfangsverstärker zusätzlich eine Frequenzselektion vornehmen, um das gewünschte Empfangssignal von den Signalen in benachbarten Frequenzbereichen zu trennen; dazu werden mehrere Filter sowie ein oder zwei Mischer zur Frequenzumsetzung eingesetzt.

© Springer-Verlag GmbH Deutschland, ein Teil von Springer Nature 2019  
U. Tietze et al., *Halbleiter-Schaltungstechnik*
<!-- page-import:1180:end -->

<!-- page-import:1181:start -->
1144  21. Grundlagen

gesendetes Nutzsignal  
$s(t)$

empfangenes Nutzsignal  
$e(t)$

analoger Modulator

Sende-
verstärker

Kanal

Empfangs-
verstärker

analoger Demodulator

**a** analog

gesendetes Nutzsignal  
$s(n)$  $s(t)$

empfangenes Nutzsignal  
$e(n)$  $e(t)$

A  
D

Quellen-
kodierung

Kanal-
kodierung

digitaler Modulator

D  
A

Sende-
verstärker

Kanal

Empfangs-
verstärker

A  
D

digitaler Demodulator

Fehler-
korrektur

Quellen-
Dekodierung

D  
A

**b** digital

**Abb. 21.1.** Komponenten eines Nachrichtenübertragungssystems

Aus dem selektierten und pegelrichtig verstärkten Signal erzeugt der analoge Demodulator das empfangene Nutzsignal $e(t)$.

Das digitale System enthält alle Komponenten des analogen Systems; allerdings sind der Modulator und der Demodulator in diesem Fall digital realisiert und über D/A- bzw. A/D-Umsetzer mit den Verstärkern verbunden. Die Umsetzer werden gelegentlich als Bestandteil des Modulators bzw. Demodulators aufgefasst und nicht separat dargestellt; in diesem Fall besitzt der digitale Modulator einen digitalen Ein- und einen analogen Ausgang, der digitale Demodulator einen analogen Ein- und einen digitalen Ausgang. Diese, dem analogen System entsprechenden Komponenten bilden bereits ein einsatzfähiges System. Es wird ergänzt durch eine Kanalkodierung im Sender, die eine Redundanz in Form von Prüfbits, Kontrollsummen oder einer speziellen Kodierung einfügt; diese Redundanz
<!-- page-import:1181:end -->

<!-- page-import:1182:start -->
21.1 Nachrichtentechnische Systeme 1145

| Eigenschaft | analog | digital |
|---|---|---|
| Schaltungsaufwand | gering | hoch |
| Bandbreitenausnutzung | schlecht | gut – sehr gut |
| Komplexität des Modulationsverfahrens | gering | hoch |
| erforderlicher Signal-Rausch-Abstand im Empfänger | hoch | gering |
| erforderliche Sendeleistung | hoch | gering |
| Übertragungsqualität: |  |  |
| – bei geringem Signal-Rausch-Abstand | schlecht | sehr gut |
| – bei hohem Signal-Rausch-Abstand | gut | ideal |
| Genauigkeit arithmetischer Operationen | gering | hoch – ideal |
| Temperaturdrift | ja | nein |
| alterungsbedingte Drift | ja | nein |
| Abgleichaufwand bei der Herstellung | hoch | gering |

**Abb. 21.2.** Eigenschaften analoger und digitaler Nachrichtenübertragungssysteme

wird zur *Fehlerkorrektur* im Empfänger verwendet. Darüber hinaus wird in einigen Systemen eine *Quellenkodierung* und *Quellen-Dekodierung* eingesetzt, um die zu übertragende Datenmenge zu reduzieren. Die Quellenkodierung ist im allgemeinen nicht verlustfrei, d.h. bei der Dekodierung wird das Signal nicht exakt rekonstruiert; die Quellenkodierung stützt sich vielmehr auf physiologische Erkenntnisse, nach denen bestimmte Anteile in Sprach- oder Bildsignalen vom Menschen nicht wahrgenommen werden. Auf dieser Ebene wird das digitale Signal $s(n)$ gesendet und das Signal $e(n)$ empfangen. Zur Übertragung von analogen Signalen werden zusätzliche Umsetzer im Sender und Empfänger benötigt; das ist z.B. bei digitalen Telefonen der Fall, bei denen das gesendete Nutzsignal $s(t)$ von einem Mikrofon stammt und das empfangene Nutzsignal $e(t)$ auf einen Lautsprecher ausgegeben wird.

Ein analoges System besitzt weniger Komponenten, die zudem in vielen Fällen einfacher aufgebaut sind als die entsprechenden Komponenten eines digitalen Systems. Es hat jedoch den Nachteil, dass Rauschen und andere Störungen, die bei der Übertragung hinzugefügt werden, nicht mehr vom Signal getrennt werden können; deshalb nimmt der Signal-Rausch-Abstand vor allem bei einer Übertragung über mehrere Teilstrecken stark ab. Darüber hinaus nutzen die analogen Modulationsverfahren die zur Verfügung stehende Bandbreite nur schlecht aus und benötigen einen relativ hohen Signal-Rausch-Abstand am Empfängereingang, um eine gute Übertragungsqualität zu erzielen.

In digitalen Systemen werden komplexe Modulationsverfahren mit einer erheblich besseren Ausnutzung der Bandbreite verwendet. Rauschen und andere Störungen werden durch eine Schwellwert-Entscheidung im Demodulator vollständig entfernt, solange sie eine bestimmte Amplitude nicht überschreiten. Wird diese Amplitude überschritten, wird zwar zunächst eine Fehlentscheidung getroffen, diese kann jedoch durch die Fehlerkorrektur korrigiert werden, solange die Wahrscheinlichkeit von Fehlentscheidungen unter einer bestimmten Grenze bleibt. Deshalb ermöglichen digitale Systeme bereits bei einem geringen Signal-Rausch-Abstand am Empfängereingang eine nahezu ideale Übertragung. Die bessere Ausnutzung der Bandbreite durch den Einsatz komplexer Modulationsverfahren ist ebenfalls sehr wichtig, da die anhaltende Einführung neuer Systeme eine zunehmende Verknappung der Sendefrequenzen zur Folge hat.

Abbildung 21.2 zeigt einen Vergleich der wichtigsten Eigenschaften analoger und digitaler Systeme; dabei sind auch die *üblichen* Vorteile digitaler Systeme wie fehlende [unclear]
<!-- page-import:1182:end -->

<!-- page-import:1255:start -->
1218 21. Grundlagen

a Cosinus-Rolloff-Bandpass im Trägerbereich

$s(n)$

Rechteck-
Modulator
mit
analogem
Ausgang

$i_R(t)$

$q_R(t)$

$\cos \omega_T t$

$-\sin \omega_T t$

$s_{T,R}(t)$

Cosinus-Rolloff-
Bandpass (SAW)

$s_T(t)$

b analoge Cosinus-Rolloff-Tiefpässe im Basisband

$s(n)$

Rechteck-
Modulator
mit
analogem
Ausgang

$i_R(t)$

$q_R(t)$

analoge Cosinus-
Rolloff-Tiefpässe

$i(t)$

$q(t)$

$\cos \omega_T t$

$-\sin \omega_T t$

$s_T(t)$

c digitale Cosinus-Rolloff-Tiefpässe und D/A-Umsetzer im Basisband

$s(n)$

Rechteck-
Modulator
mit
digitalem
Ausgang

$i_R(n)$

$q_R(n)$

1...4

1...4

digitale Cosinus-
Rolloff-Tiefpässe

$i(n)$

$q(n)$

10...14

10...14

D

A

D

A

$i(t)$

$q(t)$

$\cos \omega_T t$

$-\sin \omega_T t$

$s_T(t)$

**Abb. 21.79.** Impulsfilter

$4 \cdot 2^7 = 512$ möglichen Ausgangsworte in einem ROM abspeichern. Zur Adressierung wird ein Schieberegister der Länge 7 sowie die volle und die halbe Taktfrequenz, d.h. $4\,f_S$ und $2\,f_S$, verwendet. Abbildung 21.81 zeigt dieses einfache Filter. Die Taktfrequenz wird oft auf $8\,f_S$ oder $16\,f_S$ erhöht, um den Abstand zu den Alias-Komponenten weiter zu vergrößern; dann wird ein ROM mit 1024 oder 2048 Worten benötigt.

In den meisten modernen Systemen erfolgt die Impulsfilterung mit einem digitalen Signalprozessor (DSP), der darüber hinaus alle weiteren digitalen Funktionen übernimmt, d.h. alle Funktionen, die in Abb. 21.1b oberhalb der D/A- bzw. A/D-Umsetzer dargestellt sind. Wenn die Rechenleistung handelsüblicher DSPs nicht ausreicht oder die Verlustleistung eines handelsüblichen DSPs mit der benötigten Rechenleistung zu hoch ist, werden kundenspezifische DSPs mit speziellen digitalen Komponenten zur Beschleunigung
<!-- page-import:1255:end -->
