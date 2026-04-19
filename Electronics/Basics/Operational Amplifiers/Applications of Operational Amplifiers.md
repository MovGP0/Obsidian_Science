# Applications of Operational Amplifiers

<!-- page-import:0646:start -->
5.9 Einsatz von Operationsverstärkern 609

Abb. 5.135.  
CC-Operationsverstärker  
zur aktiven Terminierung

Die Technik, den Ausgangswiderstand eines hochohmigen Verstärkers durch *direct feedback* auf einen definierten Wert zu verkleinern, hatten wir bereits bei dem Rail-to-Rail-Verstärker angewandt. Man erkennt die Übereinstimmung der Rail-to-Rail-Endstufe in Abb. 5.43 mit dem CC-Operationsverstärker in Abb. 5.123.

Wenn man bei einem CC-Operationsverstärker einen Impedanzwandler am Ausgang anschließt, ergibt sich ein CV-Operationsverstärker. Hier hat man die Möglichkeit, bei der Gegenkopplung zwischen Current Feedback und Direct Feedback zu wählen. Obwohl beide Schaltungen in Abb. 5.136 dieselben Verstärker erfordern, ist die Gegenkopplungsschleife beim Direct Feedback kürzer als beim Current Feedback; allerdings liegt der Impedanzwandler hier außerhalb der Gegenkopplung.

## 5.9 Einsatz von Operationsverstärkern

### 5.9.1 Praktischer Einsatz

Viele parasitäre Effekte lassen sich durch die Schaltungssimulation nicht erfassen. Dazu gehören besonders die Induktivitäten, die durch die Verdrahtung entstehen, da sie vom Verlauf der Leiterbahnen abhängen. Nur wenige Simulationsprogramme sind in der Lage, diese Parameter aus dem Layout zu extrahieren und bei der Simulation automatisch zu berücksichtigen (post layout simulation). Bei niederfrequenten Schaltungen ist das auch nicht erforderlich, aber bei Frequenzen über 1 MHz wird es mit steigender Frequenz immer wichtiger. Über 30 MHz spielen selbst die Induktivitäten des Gehäuses einer integrierten Schaltung eine wichtige Rolle. Aus diesem Grund sind SMD-Bauteile für hohe Frequenzen besonders vorteilhaft, da bei ihnen die parasitären Induktivitäten wegen der geringen

a Transimpedanzverstärker  
Current Feedback

b Stromverstärker mit Impedanzwandler  
Direct Feedback

Abb. 5.136. Vergleich eines CV-Operationsverstärkers mit einem CC-Operationsverstärker mit nachfolgendem Impedanzwandler
<!-- page-import:0646:end -->

<!-- page-import:0647:start -->
610  5. Operationsverstärker

a Abblocken der Betriebsspannungen  
b Einschwingverhalten

**Abb. 5.137.** Schwingungsfreier Betrieb von Operationsverstärkern

Abmessungen deutlich kleiner sind. Die wichtigsten Gesichtspunkte, die man beim Einsatz von Operationsverstärkern berücksichtigen sollte, sind im folgenden zusammengefasst.

### 5.9.1.1 Abblocken der Betriebsspannungen

Die Betriebsspannungen müssen gut abgeblockt sein. Die Betriebsspannungsleitungen haben natürlich eine Induktivität, die umso größer ist, je länger sie sind. Damit daran keine Spannung abfällt, schließt man diese Induktivitäten mit Kondensatoren kurz, wie Abb. 5.137a zeigt. Natürlich darf die Masseleitung der Kondensatoren nicht eine genauso große Induktivität wie die Betriebsspannungszuleitung besitzen. Eine Möglichkeit, das näherungsweise zu erreichen, besteht darin, die Masse als geschlossenes Netz oder noch besser als Massefläche auszuführen, bei der nur die Anschlusspunkte ausgespart sind. Die Kondensatoren sind auch sehr unterschiedlich in ihrem Hochfrequenzverhalten. Elektrolytkondensatoren besitzen wegen ihrer großen Kapazität selbst bei niedrigen Frequenzen niedrige Widerstände. Ihr Widerstand steigt jedoch wegen ihrer parasitären Induktivität bei höheren Frequenzen an. Um auch für diese Frequenzen niedrige Widerstände zu erzielen, schaltet man keramische Kondensatoren parallel, deren Widerstand bei hohen Frequenzen trotz ihrer kleineren Kapazität meist deutlich niedriger ist.

### 5.9.1.2 Schwingneigung

Die Schaltungen können schwingen, besonders bei kapazitiver Last oder wenn man einen Verstärker unter $A_{min}$ betreibt. Die Ursache kann aber auch eine unglückliche Leiterbahnführung oder unzureichendes Abblocken der Betriebsspannungen sein. Oft ist die Amplitude gering und die Frequenz hoch, so dass die Schwingung nicht direkt offensichtlich wird. Ein Hinweis ergibt sich häufig dadurch, dass die Schaltung für Gleichspannungen nicht exakt arbeitet. Aus diesem Grund sollte man sich in jedem Fall mit einem Oszilloskop von der fehlerfreien Funktionsweise der Schaltung überzeugen. Man muss dabei aber bedenken, dass der Eingang eine kapazitive Last darstellt, die die Schwingneigung des Operationsverstärkers begünstigt. Deshalb sollte man das Oszilloskop niemals über ein Koaxialkabel oder einen 1:1-Tastkopf anschließen, sondern nur über einen 1:10-Tastkopf, dessen Kapazität meist nur wenige Pikofarad beträgt. Der zugehörige Masseanschluss sollte direkt in der Nachbarschaft des Messpunkts angeschlossen werden.
<!-- page-import:0647:end -->

<!-- page-import:0648:start -->
5.9 Einsatz von Operationsverstärkern 611

#### 5.9.1.3 Dämpfung

Wenn man festgestellt hat, dass kein Verstärker der Schaltung schwingt, sollte man sich als nächstes davon überzeugen, dass die Verstärker weit vom Schwingfall entfernt betrieben werden. Einerseits könnten Schwingungen sonst bei temperatur- oder lastbedingten Änderungen einsetzen, andererseits wünscht man meist ein gut gedämpftes Einschwingverhalten. Deshalb ist es nützlich, ein Rechtecksignal kleiner Amplitude einzuspeisen und die Ausgangssignale zu oszillografieren. Dadurch erhält man auf einen Blick eine Aussage über die Dämpfung der Schaltung. Ein Beispiel für ein brauchbares Rechteckverhalten ist in Abb. 5.137b dargestellt.

#### 5.9.1.4 Gegenkopplungswiderstände

Bei VV-Operationsverstärkern hat man viel Freiheit bei der Dimensionierung der Gegenkopplungswiderstände. Wählen Sie sie einerseits so niederohmig, dass keine nennenswerten Fehler durch die Eingangsströme des Operationsverstärkers und durch das Rauschen der Widerstände entstehen. Wählen Sie die Widerstände andererseits so hochohmig, dass der durch sie bedingte Stromverbrauch und die Erwärmung des Operationsverstärkers gering bleiben. Berücksichtigen muss man auch die parasitären Kapazitäten der Widerstände. Auch der Eingang der Operationsverstärker besitzt Kapazitäten, die zu unerwünschten Tiefpässen in der Gegenkopplungsschleife führen können. Deshalb macht man die Widerstände so groß, wie es das dynamische Verhalten erlaubt. Muss man sie hochohmig machen, ist die Parallelschaltung von entsprechenden kleinen Kapazitäten erforderlich, um bei höheren Frequenzen die gewünschte Verstärkung zu erhalten, wie wir es in Abb. 5.99 gezeigt haben. Bei den CV-Operationsverstärkern in Abb. 5.107 bestimmt der Gegenkopplungswiderstand $R_N$ die Schleifenverstärkung und damit auch das Einschwingverhalten; seine Größe ist daher weitgehend durch den Hersteller vorgegeben. Der Vorwiderstand $R_1$ bestimmt die Verstärkung; seine Größe ist daher durch die Anwendung vorgegeben.

#### 5.9.1.5 Verlustleistung

Wählen Sie die Betriebsspannung möglichst niedrig, um die Verlustleistung der Schaltung klein zu halten. Man muss sich überlegen, ob eine Ausgangsaussteuerbarkeit von $\pm 10\ \mathrm{V}$, wie sie früher üblich war, wirklich erforderlich ist, denn dann benötigt man Betriebsspannungen von $\pm 12 \ldots \pm 15\ \mathrm{V}$. Häufig reichen Betriebsspannungen von $\pm 5\ \mathrm{V}$ oder sogar eine einfache Betriebsspannung von 3,3 V aus, wenn man Rail-to-Rail-Verstärker einsetzt. Bei der Stromaufnahme der Operationsverstärker gibt es große Unterschiede: Sie reicht von wenigen Mikroampere bis zu mehreren Milliampere. Dabei besitzen Verstärker mit höherer Stromaufnahme meist auch eine größere Bandbreite. Deshalb sollte man keinen schnelleren Operationsverstärker einsetzen als für die Aufgabe erforderlich.

#### 5.9.1.6 Kühlung

Bei größeren Ausgangsströmen ist eine zusätzliche Kühlung des Operationsverstärkers erforderlich. Solange die Verlustleistung im Bereich von einem Watt bleibt, ist dafür nicht unbedingt ein Kühlkörper erforderlich, sondern die Wärme lässt sich über ein paar Quadratzentimeter metallisierte Leiterplatte ableiten.

#### 5.9.1.7 Übersteuerung

Wenn man einen Verstärker im Betrieb übersteuert, gehen meist interne Transistoren in die Sättigung und der Kondensator zur Frequenzgangkorrektur lädt sich auf. Meist vergeht
<!-- page-import:0648:end -->

<!-- page-import:0649:start -->
612 5. Operationsverstärker

a Eingangsdioden

b Begrenzung des Eingangsstroms

**Abb. 5.138.** Überströme an Operationsverstärker-Eingängen

einige Zeit, bis ein Verstärker nach einer Übersteuerung wieder in den Normalbetrieb zurückkehrt. Deshalb sollte man Übersteuerungen möglichst vermeiden. Wenn das nicht möglich ist, sind übersteuerungsfeste Verstärker (*clamping amplifier*) vorzuziehen, die aufgrund spezieller Schaltungszusätze praktisch keine Erholzeit benötigen. (z.B. AD8036 von Analog Devices oder CLC501 von National).

## 5.9.1.8 Eingangsschutz

Die Eingangsspannungen einer integrierten Schaltung dürfen die Betriebsspannungen nicht überschreiten, da sonst die in Abb. 5.138a dargestellten parasitären Dioden leitend werden. Die maximal zulässigen Ströme betragen meist nur 10 mA. Besonders kritisch ist der Augenblick nach dem Ausschalten, wenn die Betriebsspannungen Null werden, da die maximale Eingangsspannung dann nur $\pm 0{,}6\ \mathrm{V}$ beträgt. Wenn sich dabei ein geladener Kondensator am Eingang befindet, können unzulässig hohe Entladeströme über die Dioden fließen. Derselbe Fall tritt ein, wenn ein entsprechend großes Eingangssignal weiterhin anliegt. In beiden Fällen ist der in Abb. 5.138b eingezeichnete Schutzwiderstand $R_S$ zur Strombegrenzung nützlich.

## 5.10 Vergleich

Die Gemeinsamkeiten und Unterschiede der vier verschiedenen Operationsverstärker sollen zusammengefasst werden. Deshalb haben wir alle wichtigen Eigenschaften in den Abbildungen 5.139 und 5.140 gegenübergestellt. In den Schaltsymbolen erkennt man das Stromquellen-Symbol bei den Typen mit Stromausgang als Kennzeichen für einen hochohmigen Ausgang mit eingeprägtem Ausgangsstrom. Bei den Typen mit Stromeingang findet man das Verstärker-Symbol zwischen den Eingängen als Hinweis auf einen hochohmigen nichtinvertierenden und einen niederohmigen invertierenden Eingang.

Man kann jeden Operationsverstärker als eine gesteuerte Quelle auffassen, die den idealen Verstärker beschreibt. Dabei stellen die Verstärker mit einem niederohmigen Ausgang Spannungsquellen dar, die mit einem hochohmigen Ausgang Stromquellen. Ein hochohmiger (invertierender) Eingang ergibt eine spannungsgesteuerte Quelle, ein niederohmiger eine stromgesteuerte Quelle. Aus den in Abb. 5.140 angegebenen englischen Beschreibungen der Funktion als gesteuerte Quelle ergeben sich dann zwangsläufig die bisher beschriebenen Eigenschaften.
<!-- page-import:0649:end -->
