# Battery-Based Power Supplies

<!-- page-import:1036:start -->
16.10 Stromversorgung mit Akkus 999

Abb. 16.110. Unterbrechungsfreie Stromversorgung mit verbessertem Wirkungsgrad durch direkte Netzkopplung

Schwieriger sind die Verhältnisse, wenn man den Akku nicht in die Stromversorgung des Geräts integrieren kann, sondern eine Stromversorgung benötigt, die unterbrechungsfrei ein Notstrom-Netz mit 230 V und 50 Hz bereitstellt. In diesem Fall benötigt man einen Wechselrichter, der die Akkuspannung in die Netzspannung umwandelt. Dazu dient der Wechselrichter in Abb. 16.109. Seine Aufgabe ist dieselbe wie bei den Solarwechselrichtern; deshalb kann man hier die Schaltungen von Abb. 16.106 und 16.107 einsetzen. Auch hier ist ein Transformator wegen der beträchtlichen Spannungsunterschiede zweckmäßig. Gleichzeitig ermöglicht ein Transformator im Wechselrichter, den Akku auf Schutzleiterpotential zu legen, was aus Sicherheitsgründen geboten ist.

Ein Nachteil der in Abb. 16.109 dargestellten Anordnung ist, dass die Ausgangsleistung auch bei vorhandenem Netz – also im Normalfall – die Kette von Akkulader und Wechselrichter durchlaufen muss. Dadurch entstehen unnötige Verluste. Deshalb ist es naheliegend, den Verbraucher bei vorhandenem Netz direkt mit dem Netz zu verbinden und nur bei Stromausfall auf den Akkubetrieb über den Wechselrichter umzuschalten. Dazu dient der Transfer-Switch in Abb. 16.110. Dadurch entstehen allerdings zwei zusätzliche Probleme:

- Der Netzausfall muss schnell erkannt werden und die Umschaltung muss in wenigen Millisekunden erfolgen. Als Schalter verwendet man in der Regel Thyristoren oder Triacs.
- Die Ausgangsspannung des Wechselrichters sollte mit der Netzspannung synchronisiert werden, damit nach dem Netzausfall beim Umschalten kein Phasensprung auftritt.

## 16.10 Stromversorgung mit Akkus

### 16.10.1 Akkutechnologien

Mobile Geräte wie Handys, Notebooks und Akkuschrauber sind sehr verbreitet. Zur kabellosen Stromversorgung benötigen sie Akkus oder Batterien. Die wichtigsten Akku-Typen sind in Abb. 16.111 gegenübergestellt. Man sieht, dass Lithium-Ionen-Akkus eine besonders hohe Energiedichte besitzen. Deshalb werden sie überall dort eingesetzt wo es auf hohe Speicherkapazität bei geringem Gewicht ankommt. Nickel-Cadmium- und Nickel-Metallhydrid Akkus haben daneben aber auch noch eine Bedeutung, weil sie billiger sind und eine hohe Strombelastbarkeit besitzen. Besonders verbreitet sind hier die Bauformen in Rundzellen: Mignon- und Micro-Zellen. Auch die alten Bleiakkus sind noch sehr ver-
<!-- page-import:1036:end -->

<!-- page-import:1037:start -->
1000  16. Stromversorgung

| Akku Technologie | Abkürzung | Energiedichte Wh/kg | Nennspannung V | Entladeschlussspannung V | Ladeschlussspannung V |
|---|---|---:|---:|---:|---:|
| Blei | Blei | 30 | 2,0 | 1,8 | 2,4 |
| Nickel-Cadmium | NiCd | 50 | 1,2 | 0,9 | 1,6 |
| Nickel-Metallhydrid | NiMH | 80 | 1,2 | 0,9 | 1,6 |
| Lithium-Ionen | LiIon | 140 | 3,6 | 2,5 | 4,2 |
| SuperCapacitor | SuperC | 4 | 2,5 | 0,0 | 2,5 |
| Alkali-Batterie | ABatt | 150 | 1,5 | 0,0 | — |

**Abb. 16.111.** Gebräuchliche Akkutechnologien. Zum Vergleich Alkali-Batterie

breitet in Anwendungen, bei denen es nicht auf das Gewicht ankommt, sondern auf einen niedrigen Preis wie in Starterbatterien. Aufgenommen in die Übersicht wurden auch die sogenannten Supercaps. Sie vereinen die Vorteile des Kondensators als schnellen Stromlieferanten mit dem des Akkus als Energiespeicher. Allerdings ist ihre Energiedichte vergleichsweise schlecht. Die typische Anwendung ist die Bereitstellung von hohen Strömen von $100 \ldots 1000\,\mathrm{A}$. Erhältlich sind Kapazitäten bis $6000\,\mathrm{F}$ und Ladungen von $4\,\mathrm{Ah}$. Zum Vergleich wurden noch Alkali-Batterien – also die alten "Taschenlampenbatterien"– mit aufgenommen. Hier sind die Mignon-Zellen (LR6, AA, 14,5 x 50,5 mm) mit ca. 2,6 Ah und die Micro-Zellen (LR03, AAA, 10,5 x 44,5 mm) mit ca. 1,3 Ah besonders verbreitet. Sie sind den Akkus in der Energiedichte überlegen und natürlich viel billiger. Bei Anwendungen mit geringem Stromverbrauch halten sie mehrere Jahre; Akkus leben auch nicht länger.

## 16.10.2 Entladung

In Abb. 16.111 wurde zusätzlich noch die Spannung am Beginn der Entladung aufgenommen. Während der Entladung sinkt die Spannung kontinuierlich ab. Der typische Verlauf ist in Abb. 16.112 dargestellt. Für jeden Akku gibt es eine Entladeschlussspannung $U_{leer}$, die nicht unterschritten werden soll. Sonst wird der Akku tiefentladen und seine Lebensdauer wird reduziert. Um das angeschlossene Gerät optimal zu versorgen, verwendet man Spannungswandler, die das Gerät bis zur vollständigen Entladung mit konstanter Spannung versorgen. Um dabei keine Energie zu verlieren, setzt man hier Schaltregler ein, wie sie in Kapitel 16.5 ab Seite 947 beschrieben werden. Dabei gibt es folgende Möglichkeiten:

- Bei Abwärtswandlern gemäß Abb. 16.35 liegt die Ausgangsspannung unter der Eingangsspannung. Die Akkuspannung $U_{leer}$ muss hier also größer als die Ausgangsspannung sein.

**Abb. 16.112.** Entladung von Akkus. Ausgangsspannungen von verschiedenen Spannungswandlern
<!-- page-import:1037:end -->

<!-- page-import:1038:start -->
16.10 Stromversorgung mit Akkus 1001

– Bei Aufwärtswandlern gemäß Abb. 16.54 liegt die Ausgangsspannung über der Eingangsspannung. Die Akkuspannung $U_{voll}$ muss hier also kleiner als die Ausgangsspannung sein.

– Bei Aufwärts-Abwärtswandlern gemäß Abb. 16.59 kann die Eingangsspannung über oder unter der Ausgangsspannung liegen. Allerdings benötigen diese Wandler mehr Bauteile und besitzen einen etwas schlechteren Wirkungsgrad.

## 16.10.3 Ladung

Zur Ladung von Akkus muss man Strom zuführen bis der Akku voll geladen ist. Dabei hängt die Zyklenfestigkeit – also die Lebensdauer – eines Akkus stark davon ab, ob der Akku richtig geladen wird. Man unterscheidet zwei Ladeverfahren:

– Bei der *Standardladung* wird der Akku in 10 Stunden geladen mit einem Strom, der $I_0 = CA/10\,\mathrm{h}$ beträgt. Darin ist $CA$ die Ladung des geladenen Akkus in Amperestunden. Diese Größe wird als Kapazität des Akkus bezeichnet, obwohl es sich hier physikalisch nicht um eine Kapazität, sondern um eine Ladung handelt. Bei einem Akku mit $CA = 1\,\mathrm{Ah}$ beträgt der Ladestrom also $I_0 = 0{,}1\,\mathrm{A}$.

– Bei der *Schnellladung* wird der der Akku in 1 Stunde geladen; der erforderliche Ladestrom ist dann gleich der Zahl der Amperestunden $I_0 = CA/1\,\mathrm{h}$. Bei manchen Akkus ist sogar eine Superschnellladung in 15 Minuten zulässig mit $I_0 = 4CA/1\,\mathrm{h}$. Es ist allerdings nicht selbstverständlich, dass ein Akku schnellladefähig ist. Als Richtlinie kann gelten, dass die Hochstrombelastbarkeit eines Akkus beim Laden mindestens so groß ist wie beim Entladen. Wenn ein Akku 1 Stunde entladen werden kann, darf man ihn auch in 1 Stunde, also mit $I_0 = CA/1\,\mathrm{h}$ laden, da die Erwärmung durch die parasitären Widerstände die Gleiche ist. Das setzt natürlich ein entsprechend leistungsfähiges Ladegerät voraus.

Bei der Ladung eines Akkus ist es wichtig, die Akku-Technologie des betreffenden Akkus zu kennen, weil jeder Akku ein spezielles Ladeverfahren erfordert. In Abb. 16.113 ist die Ladung von Blei-Akkus dargestellt, in Abb. 16.114 die Ladung von Lithium-Ionen-Akkus. Beide Ladevorgänge unterscheiden sich qualitativ nicht, sondern lediglich in der Größe der Spannungen. Bei Bleiakkus soll $U_0 = 2{,}4\,\mathrm{V}$ nicht überschritten werden, weil sonst eine nennenswerte Elektrolyse von Wasser eintritt. Bei offenen Bleiakkus kann man bei Bedarf Wasser nachfüllen; bei Blei-Gel-Akkus trocknet der Elektrolyt dadurch aus. Bei Lithium-Ionen-Akkus sollte man $U_0 = 4{,}2\,\mathrm{V}$ keinesfalls überschreiten, weil sich sonst ihre Speicherfähigkeit reduziert.

Die Ladung beginnt bei beiden Akkutechnologien mit konstantem Strom. Wenn die Akkuspannung die Ladeschlussspannung erreicht hat, wechselt man zur Spannungsregelung. Das geht automatisch, wenn man ein Netzgerät mit einstellbarer Strom- und Spannungsgrenze gemäß Abb. 16.113 einsetzt. Wenn Spannungsregelung vorliegt, reduziert sich der Ladestrom mit fortschreitender Ladung. Daraus wird dann das Ladeende ermittelt: Wenn der Ladestrom während der Spannungsladephase auf einen kleinen Wert – meist $0{,}1\ I_0$ – abgesunken ist, schaltet man den Ladestrom ganz ab. Es ist nicht zweckmäßig, die Ladeschlussspannung $U_0$ dauerhaft bestehen zu lassen, weil der Akku unter diesen Bedingungen vorzeitig altert. Aus diesem Grund sollte man kein normales Labornetzgerät mit Einstellern für Strom und Spannung einsetzen.

Nickel-Cadmium- und Nickel-Metallhydrid-Akkus werden auch mit konstantem Ladestrom geladen. An dem Spannungsverlauf in Abb. 16.115 erkennt man, dass die Spannung während des Ladevorgangs nicht kontinuierlich steigt, sondern kurz vor der Vollladung wieder sinkt. Diesen Effekt nutzt man zur Erkennung der Vollladung. Bei Nickel-
<!-- page-import:1038:end -->

<!-- page-import:1039:start -->
1002  16. Stromversorgung

**Abb. 16.113.** Ladung von Blei-Akkus mit Ladegeräten mit UI-Kennlinie.  
Links: Ladekennlinie der Akkus. Rechts: Ausgangskennlinie des Ladegeräts.

**Abb. 16.114.** Ladung Lithium-Ionen-Akkus mit Ladegeräten mit UI-Kennlinie.  
Links: Ladekennlinie der Akkus. Rechts: Ausgangskennlinie des Ladegeräts.

**Abb. 16.115.** Ladung von Nickel-Cadmium- und Nickel-Metallhydrid-Akkus mit der $\Delta U$-Methode. Der Ladestrom ist hier während der ganzen Ladung konstant.  
Links: Ladekennlinie der Akkus. Rechts: Ausgangskennlinie des Ladegeräts.

Cadmium-Akkus kann die Spannungsabnahme $\Delta U = -50\,\mathrm{mV}$ betragen, bei Nickel-Metallhydrid-Akkus ist sie geringer; hier verwendet man meist als Abschaltkriterium, dass die Ladespannung nicht mehr ansteigt. Dieses Abschaltkriterium wird als $\Delta U$-Verfahren bezeichnet. Eine feste Ladeschlussspannung würde bei beiden Akkutypen dazu führen, dass die Vollladung zu früh oder überhaupt nicht erkannt wird.

Die Ursache für den Spannungsabnahme besteht in einer raschen Erwärmung des Akkus gegen Ladeende. Dann wird die zugeführte Energie nicht mehr zur chemischen Umwandlung im Akku genutzt, sondern nur noch zur Erwärmung. Die Akkuspannung sinkt dann, weil sie einen negativen Temperaturkoeffizienten besitzt. Sie ist daher ein indirektes Maß für die Temperatur des Akkus. Daher ist der Temperaturverlauf des Akkus noch aussagekräftiger als sein Spannungsverlauf. Allerdings tritt ein Temperaturanstieg
<!-- page-import:1039:end -->

<!-- page-import:1040:start -->
16.10 Stromversorgung mit Akkus 1003

**Abb. 16.116.** Stromlose Messung der Akkuspannung zur Vermeidung von Messfehlern durch Übergangswiderstände im Ladestromkreis und dem Innenwiderstand des Akkus

nur dann auf, wenn auch ein ausreichender Ladestrom fließt. Das ist aber kein Problem da Nickel-Cadmium- und Nickel-Metallhydrid-Akkus durchwegs schnelladefähig sind.

## 16.10.4 Ladegerät

Man sieht, dass bei der Akkuladung eine genaue Spannungsmessung wichtig ist. Deshalb sollte man bei der Laderegelung mit einem Mikrocontroller einen AD-Umsetzer mit einer Auflösung von 12 bit einsetzen. Damit ist eine Auflösung von 1 mV möglich. Nennenswerte Messfehler können aber durch den Innenwiderstand des Akku $R_i$ und die Übergangswiderstände im Ladestromkreis $R_{Kabel}$ auftreten, die besonders groß sein können, wenn sich Steckverbindungen im Ladestromkreis befinden. Um diese Fehler auszuschließen, sollte man den Ladestrom während der Spannungsmessung für wenige Millisekunden unterbrechen. Dazu dient der Schalter S in Abb. 16.116. Dann sieht das Ladegerät an seinen Klemmen die Leerlaufspannung des Akkus $U_{Lade} = U_0$, die für den Ladeverlauf entscheidend ist. Im dargestellten Signalverlauf wird der Strom- und Spannungsverlauf illustriert. Für den Ladevorgang selbst stören die Übergangswiderstände nicht. Wenn die Ladequelle als Stromquelle arbeitet, haben sie keinen Einfluss auf den Ladestrom; wenn die Ladequelle bei Blei- und Lithium-Ionen-Akkus in der letzten Ladephase als Spannungsquelle arbeitet, wird die Ladung lediglich geringfügig verzögert.

Es ist zweckmäßig, die Temperatur des Akkus zu überwachen. Zum einen ist der Temperaturanstieg gegen Ladeende bei Nickel-Cadmium- und Nickel-Metallhydrid-Akkus ein guter Hinweis auf die Vollladung. Zum anderen besitzt die Spannung bei allen Akkus einen negativen Temperaturkoeffizienten, den man berücksichtigen muss, wenn ein Akku in einem großen Temperaturbereich geladen werden soll. Zur Temperaturmessung ist es wichtig, die Temperatur des Akkus zu messen und nicht die eines Chips im Ladegerät.

Bei der Akkuladung ist es wichtig, den Akku nicht zu überladen, weil sich sonst seine Zyklenfestigkeit reduziert. Die Kapazität eines Akkus reduziert sich aber auch dann, wenn man ihn regelmäßig nicht volllädt. Dadurch sinkt seine Zyklenfestigkeit ebenfalls. Aus diesen Gründen ist es wichtig, die Vollladung möglichst genau zu erfassen. Dazu gibt es folgende Möglichkeiten:

- Die Zeitmessung: Bei Normalladung ist der Akku in 10 h geladen, bei Schnellladung in entsprechend kürzerer Zeit. Nach dieser Zeit sollte der Ladevorgang auf jeden Fall beendet werden, wenn nicht ein anderes Merkmal ein früheres Ladeende angezeigt hat. Die größte Unsicherheit bei einem zeitgesteuerten Ladeende ist die Möglichkeit, dass der Akku bei Beginn der Ladung nicht ganz entladen war. Häufig werden Akkus nicht deshalb geladen, weil sie leer sind, sondern um die volle Betriebsdauer zu erhalten. Um den Akku trotzdem mit Zeitsteuerung richtig zu laden, könnte man natürlich jeden
<!-- page-import:1040:end -->

<!-- page-import:1041:start -->
1004  16. Stromversorgung

Akku vor jeder Ladung ganz entladen; das würde jedoch zusätzliche Entlade-Ladezyklen verursachen. Zusätzliche Entlade-Ladezyklen führt man nur zur Regenerierung von Akkus durch.

– Die Strom- und Spannungsmessung: Bei Blei- und Lithium-Ionen-Akkus lässt sich das Ladeende – wie beschrieben – gut über eine Strommessung bei vorgegebener Ladespannung ermitteln.

– Die Delta-U-Methode ist bei Nickel-Cadmium- und Nickel-Metallhydrid-Akkus ein brauchbarer Hinweis auf das Ladeende. Voraussetzung für diese Methode ist jedoch ein konstanter Ladestrom. Diese Voraussetzung ist nicht erfüllt, wenn das Gerät während der Ladung einen schwankenden Teil des Ladestroms verbraucht wie in einem Notebook oder bei einem Solarlader, bei dem jede Wolke zu einer Abnahme des Ladestrom führt.

– Die Temperatur: Bei Nickel-Cadmium- und Nickel-Metallhydrid-Akkus ist der beschleunigte Temperaturanstieg ein Hinweis auf das Ladeende.

Man sieht, dass es keine universelle und sichere Methode gibt, um den Ladezustand eines Akkus zu bestimmen. Dieses Problem lässt sich dadurch lösen, dass man dem Akku eine Schaltung fest zuordnet, die die geladene und entnommene Ladung bilanziert. Solche Schaltungen zur Ladungsbilanzierung bezeichnet man als fuel gauge-chips. Dazu verwendet man einen Amperestundenzähler, der beim Laden erhöht und bei der Entladung verringert wird. Er misst demnach die gespeicherte Ladung. Durch den Vergleich mit der Vollladung (Kapazität) des Akkus lässt sich dann jederzeit eine Aussage über den Ladezustand des Akkus machen. Der Amperestundenzähler lässt sich mit dem tatsächlichen Zustand des Akkus synchronisieren, indem man ihn bei vollständiger Entladung auf Null setzt und nach Vollladung die Kapazität des Akkus neu ermittelt. Ein guter Test für die Qualität der Algorithmen zur Akkuladung besteht darin, einen geladenen Akku am Ladegerät anzuschließen und die Zeit zu messen, die das Ladegerät benötigt, um dies zu erkennen und die Ladung zu beenden.

Vor dem Beginn der eigentlichen Ladung sollte das Ladegerät zunächst einige Tests durchführen, die Aufschluss über den Zustand des Akkus geben und prüfen, ob sich der Akku für die Ladung eignet (Qualification).

– Test auf Verpolung, Kurzschluss oder Unterbrechung  
– Test auf Tiefentladung  
– Test auf Überhitzung

Nach der Ladung sollte der Ladestrom abgeschaltet werden, denn die hohe Ladeschlussspannung sollte nicht auf Dauer anstehen. Man kann allerdings der Selbstentladung des Akkus entgegenwirken, indem man die verlorene Ladung durch kurze Stromimpulse nachlädt. Dies Methode nennt man Ladungserhaltung oder trickle charge.

Bei dem Einsatz von Akkus werden häufig mehrere Zellen in Reihe geschaltet, um die Spannung zu erhöhen. Bei der Ladung solcher Akkupacks unterstellt man meist, dass alle Zellen gleich sind; dann kann man genauso vorgehen wie bei der Ladung einer einzelnen Zelle, lediglich mit einer entsprechend vervielfachten Spannung. Diese Vorgehensweise kann jedoch dazu führen, dass einzelne Zellen überladen werden, während andere noch nicht voll geladen sind. Um dieses Problem zu beseitigen, muss man jede Zelle des Akkupacks bei der Ladung separat überwachen. Dazu muss man dem Ladegerät auch die internen Verbindungen des Akkupacks zur Überwachung zugänglich machen. Man erkennt in Abb. 16.117 den regulären Ladestromkreis, in dem der Strom $I_0$ fließt. Das Ladegerät hat hier aber zusätzlich die Möglichkeit, mit den Schaltern $S_1, S_2$, den Strom an einer
<!-- page-import:1041:end -->

<!-- page-import:1042:start -->
16.10 Stromversorgung mit Akkus 1005

*Abb. 16.117.*  
Ladungsausgleich in einem Akkupack.  
Hier wird der Ladestrom an der oberen  
Zelle vorbeigeleitet.

Zelle vorbei zu leiten, indem der zugehörige Schalter geschlossen wird. Wenn man den Widerständen den Wert $R = U_1/I_0$ gibt, wird der Ladestrom vollständig umgeleitet. Der dadurch bedingte Energieverlust ist gering, da die Umleitung erst gegen Ladeende erforderlich wird. Man kann die Zellen eines Akkupacks natürlich auch einzeln laden; wegen der niedrigeren Spannungen wäre der Wirkungsgrad des Ladegeräts dann aber deutlich schlechter.

Eine Möglichkeit zur Realisierung eines Akkuladers besteht darin, einen Mikrocontroller zu programmieren und damit ein normales Schaltnetzteil zu steuern. Man kann jedoch auch spezielle Lade- und Überwachungsschaltungen einsetzen, die diese Aufgabe übernehmen oder unterstützen.
<!-- page-import:1042:end -->

<!-- page-import:1043:start -->
[unclear]
<!-- page-import:1043:end -->
