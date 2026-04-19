# Structure of a Field-Effect Transistor

<!-- page-import:0235:start -->
198  3. Feldeffekttransistor

a  Übertragungskennlinie

b  $R_{DS,on}$

**Abb. 3.20.** Temperaturverhalten eines n-Kanal-Mosfets

mit der Flachbandspannung $U_{FB}$, der Inversionsspannung $U_{inv}$ und dem Substrat-Steuerfaktor $\gamma$. Die Flachbandspannung hängt vom Aufbau des Gates ab und wird hier nicht weiter benötigt; auf die anderen Größen wird im Abschnitt 3.3 noch näher eingegangen. $U_{FB}$ und $\gamma$ hängen nicht von der Temperatur ab; daraus folgt:

$$
\frac{dU_{th}}{dT} = \left(1 + \frac{\gamma}{2\sqrt{U_{inv}}}\right)\frac{dU_{inv}}{dT}
$$

Typische Werte sind $U_{inv} \approx 0{,}55 \dots 0{,}8\,\mathrm{V}$, $dU_{inv}/dT \approx -2{,}3 \dots -1{,}7\,\mathrm{mV/K}$ und $\gamma \approx 0{,}3 \dots 0{,}8\,\sqrt{\mathrm{V}}$; damit erhält man:

$$
\frac{dU_{th}}{dT} \approx -3{,}5 \dots -2 \frac{\mathrm{mV}}{\mathrm{K}}
$$

Da die Temperaturkoeffizienten von $K$ und $U_{th}$ negativ sind, ist der Temperaturkoeffizient des Drainstroms aufgrund der Differenzbildung in (3.14) je nach Arbeitspunkt positiv oder negativ. Folglich gibt es einen Temperaturkompensationspunkt TK, an dem der Temperaturkoeffizient zu Null wird; durch Auflösen von (3.14) erhält man für n-Kanal-Mosfets:

$$
U_{GS,TK} = U_{th} + 2\,\frac{\frac{dU_{th}}{dT}}{\frac{1}{K}\frac{dK}{dT}} \approx U_{th} + 0{,}8 \dots 1{,}4\,\mathrm{V}
$$

$$
I_{D,TK} \approx K \cdot 0{,}3 \dots 1\,\mathrm{V}^2
$$

Abbildung 3.20a zeigt Übertragungskennlinie eines n-Kanal-Mosfets mit dem Temperaturkompensationspunkt. Bei p-Kanal-Mosfets gilt $U_{GS,TK} = U_{th} - 0{,}8 \dots 1{,}4\,\mathrm{V}$ und $I_{D,TK} = -K \cdot 0{,}3 \dots 1\,\mathrm{V}^2$.

Diese Angaben gelten für integrierte Mosfets mit einfacher Diffusion. Einzel-Mosfets werden dagegen fast ausschließlich mit doppelter Diffusion ausgeführt, siehe Abschnitt 3.2; für sie gilt $dU_{th}/dT \approx -5\,\mathrm{mV/K}$ und damit:

$$
U_{GS,TK}(DMOS) \approx U_{th} + 2\,\mathrm{V}
$$

$$
I_{D,TK}(DMOS) \approx K \cdot 2\,\mathrm{V}^2
$$
<!-- page-import:0235:end -->

<!-- page-import:0236:start -->
3.2 Aufbau eines Feldeffekttransistors 199

In der Praxis werden die meisten n-Kanal-Mosfets mit $U_{GS} > U_{GS,TK}$ betrieben; in diesem Bereich ist der Temperaturkoeffizient negativ, d.h. der Drainstrom nimmt mit zunehmender Temperatur ab. Diese thermische Gegenkopplung erlaubt einen thermisch stabilen Betrieb ohne besondere schaltungstechnische Maßnahmen. Im Gegensatz dazu muss man beim Bipolartransistor eine elektrische Gegenkopplung vorsehen, damit durch die mit der Temperatur zunehmenden Ströme keine thermische Mitkopplung entstehen kann, die zur Aufheizung und Zerstörung des Transistors führt.

Im ohmschen Bereich interessiert vor allem der Einschaltwiderstand $R_{DS,on}$; aus (3.7) folgt durch Differentiation:

$$
\frac{1}{R_{DS,on}} \frac{dR_{DS,on}}{dT}
=
\frac{1}{U_{GS}-U_{th}} \frac{dU_{th}}{dT}
-
\frac{1}{K} \frac{dK}{dT}
$$

$$
\underset{U_{GS} \gg U_{th}}{\approx}
-
\frac{1}{K} \frac{dK}{dT}
\approx 5 \cdot 10^{-3}\,\mathrm{K}^{-1}
$$

Daraus folgt, dass sich $R_{DS,on}$ bei einer Temperaturerhöhung von $25^\circ$C auf $150^\circ$C etwa verdoppelt; Abb. 3.20b zeigt den resultierenden Verlauf von $R_{DS,on}$.

### 3.1.7.2 Sperrschicht-Fet

Für n-Kanal-Sperrschicht-Fets gilt ebenfalls (3.14). Der Steilheitskoeffizient $K$ ist proportional zur Leitfähigkeit $\sigma$ des Kanals; wegen $\sigma \sim \mu$ erhält man denselben Temperaturkoeffizienten wie beim Mosfet:

$$
\frac{1}{K} \frac{dK}{dT} \approx -5 \cdot 10^{-3}\,\mathrm{K}^{-1}
$$

Die Schwellenspannung $U_{th}$ setzt sich aus einem temperaturunabhängigen Anteil und der Diffusionsspannung $U_{Diff}$ des pn-Übergangs zwischen Gate und Kanal zusammen; daraus folgt:

$$
\frac{dU_{th}}{dT}
=
\frac{dU_{Diff}}{dT}
\approx -2{,}5 \ldots -1{,}7\,\mathrm{mV/K}
$$

Damit folgt für den Temperaturkompensationspunkt eines n-Kanal-Sperrschicht-Fets:

$$
U_{GS,TK\,(Jfet)} \approx U_{th} + 0{,}7 \ldots 1\,\mathrm{V}
$$

$$
I_{D,TK\,(Jfet)} \approx K \cdot 0{,}25 \ldots 0{,}5\,\mathrm{V}^2
$$

Die Übertragungskennlinie verläuft bis auf eine Verschiebung in $U_{GS}$-Richtung wie beim Mosfet; auch der Einschaltwiderstand $R_{DS,on}$ verhält sich wie beim Mosfet.

## 3.2 Aufbau eines Feldeffekttransistors

Mosfets und Sperrschicht-Fets sind in ihrer einfachsten Form symmetrisch aufgebaut. Dieser einfache Aufbau entspricht im wesentlichen den Prinzip-Darstellungen in Abb. 3.1 bzw. Abb. 3.2 und wird vor allem in integrierten Schaltungen verwendet; deshalb werden hier zunächst die integrierten Transistoren beschrieben.

### 3.2.1 Integrierte Mosfets

#### 3.2.1.1 Aufbau

Abbildung 3.21 zeigt den Aufbau eines n-Kanal- und eines p-Kanal-Mosfets auf einem gemeinsamen Halbleitersubstrat; die Anschlüsse Drain, Gate, Source und Bulk sind mit
<!-- page-import:0236:end -->

<!-- page-import:0237:start -->
200  3. Feldeffekttransistor

**Abb. 3.21.** Aufbau eines n-Kanal- und eines p-Kanal-Mosfets in einer integrierten CMOS-Schaltung

entsprechenden Indizes versehen. Beim n-Kanal-Mosfet dient das p-dotierte Halbleitersubstrat mit dem Anschluss $B_n$ als Bulk. Der p-Kanal-Mosfet benötigt ein n-dotiertes Bulk-Gebiet und muss deshalb in einer n-dotierten Wanne hergestellt werden; $B_p$ ist der zugehörige Bulk-Anschluss. Die Drain- und Source-Gebiete sind beim n-Kanal-Mosfet stark n-, beim p-Kanal-Mosfet stark p-dotiert. Die Gates werden aus Poly-Silizium hergestellt und sind durch das dünne Gate-Oxid vom darunter liegenden Kanal isoliert. In den Außengebieten erfolgt die Isolation zwischen den Halbleiter-Bereichen und den Aluminium-Leiterbahnen der Metallisierungsebene durch das wesentlich dickere Dickoxid. Da Poly-Silizium ein relativ guter Leiter ist, kann man die Zuleitungen zum Gate ganz aus Poly-Silizium herstellen; man benötigt also nicht unbedingt die in Abb. 3.21 gezeigte Metallisierung auf den Gates.

Die Bezeichnung MOS (_metal-oxid-semiconductor_) stammt aus der Zeit, als für die Gates Aluminium, also Metall, anstelle von Poly-Silizium verwendet wurde. Moderne Mosfets mit Poly-Silizium-Gate müssten eigentlich mit SOS (_semiconductor-oxid-semiconductor_) bezeichnet werden. Man hat aber die gewohnte Bezeichnung beibehalten.

### 3.2.1.2 CMOS

Schaltungen, die nach Abb. 3.21 aufgebaut sind, nennt man CMOS-Schaltungen (_complementary metal-oxid-semiconductor circuits_), weil sie komplementäre Mosfets enthalten. Bei NMOS- und PMOS-Schaltungen, den veralteten Vorgängern der CMOS-Schaltungen, wurden entsprechend der Bezeichnung nur n- bzw. nur p-Kanal-Mosfets hergestellt; dazu wurden p- bzw. n-dotierte Halbleiterplättchen verwendet und es wurde keine Wanne für den jeweils anderen Typ benötigt.

### 3.2.1.3 Bulk-Dioden

Aus der Schichtenfolge einer CMOS-Schaltung ergeben sich mehrere pn-Übergänge, die in Sperrrichtung betrieben werden müssen; sie sind in Abb. 3.21 als Dioden dargestellt. Damit die Dioden zwischen den Drain- bzw. Source-Gebieten und den darunter liegenden Bulk-Gebieten sperren, muss beim n-Kanal-Mosfet $U_{SB} \geq 0$ und $U_{DB} \geq 0$ und beim p-Kanal-Mosfets $U_{SB} \leq 0$ und $U_{DB} \leq 0$ gelten; dabei bezeichnet $B$ das jeweilige Bulk-Gebiet, also $B_n$ beim n- und $B_p$ beim p-Kanal-Mosfet. Außerdem muss $U_{Bn} \leq U_{Bp}$ sein, damit die Diode zwischen den Bulk-Gebieten sperrt. Daraus folgt, dass alle Dioden gesperrt sind, wenn man $B_n$ mit der negativen und $B_p$ mit der positiven Versorgungsspannung der Schaltung verbindet; alle anderen Spannungen bewegen sich dann dazwischen.
<!-- page-import:0237:end -->

<!-- page-import:0238:start -->
3.2 Aufbau eines Feldeffekttransistors 201

**Abb. 3.22.** Parasitäter Thyristor in einer integrierten CMOS-Schaltung

#### 3.2.1.4 Latch-up

Neben den Dioden enthält die CMOS-Schaltung einen parasitären Thyristor, der durch die Schichtenfolge und die Verbindungen $B_n - S_n$ und $B_p - S_p$ gebildet wird; Abb. 3.22 zeigt eine vereinfachte Darstellung des Aufbaus mit dem aus zwei Bipolartransistoren und zwei Widerständen bestehenden Ersatzschaltbild des Thyristors. Die Bipolartransistoren resultieren aus der Schichtenfolge und $R_n$ und $R_p$ sind die Bahnwiderstände der vergleichsweise hochohmigen Bulk-Gebiete. Normalerweise sind die Transistoren gesperrt, weil die Basen über $R_n$ bzw. $R_p$ mit den Emittern verbunden sind und keine Ströme in den Bulk-Gebieten fließen; der Thyristor sperrt. Bei Über- oder Unterspannung an einem der Eingänge einer CMOS-Schaltung fließen über die im Kapitel 6.4.3 beschriebenen Schutzdioden Ströme in die Bulk-Gebiete. Dadurch kann der Spannungsabfall an $R_p$ oder $R_n$ so groß werden, dass einer der Transistoren leitet. Der dabei fließende Strom verursacht einen Spannungsabfall am jeweils anderen Widerstand, so dass auch der zweite Transistor leitet, der wiederum durch seinen Strom den ersten Transistor leitend hält. Man erhält eine Mitkopplung, die einen Kurzschluss der Versorgungsspannung $U_b$ zur Folge hat: der Thyristor hat gezündet. Dieser Fehlerfall wird *Latch-up* genannt und führt fast immer zur Zerstörung der Schaltung. Bei modernen CMOS-Schaltungen wird durch eine geeignete Anordnung der Gebiete und eine spezielle Beschaltung der Eingänge eine hohe *Latch-up*-Sicherheit erreicht. Eine Sonderstellung nehmen *dielektrisch isolierte* CMOS-Schaltungen ein, bei denen die einzelnen Mosfets in separaten, durch Oxid isolierten Wannen hergestellt werden; dadurch entfällt der Thyristor und die Schaltungen sind *latch-up*-frei.

#### 3.2.1.5 Mosfets für höhere Spannungen

Da der Steilheitskoeffizient eines Mosfets wegen $K \sim W/L$ umgekehrt proportional zur Kanallänge $L$ ist, versucht man diese möglichst klein zu machen, indem man den Abstand zwischen dem Drain- und dem Source-Gebiet verringert. Dadurch nimmt jedoch die Drain-Source-Durchbruchspannung ab. Will man trotz kleiner Kanallänge eine hohe Durchbruchspannung erreichen, muss zwischen dem Kanal und dem Drain-Anschluss ein schwach dotiertes Driftgebiet vorgesehen werden, über dem ein Großteil der Drain-Source-Spannung abfällt; Abb. 3.23 zeigt dies am Beispiel eines n-Kanal-Mosfets. Die Durchbruchspannung ist etwa proportional zur Länge des Driftgebiets; deshalb benötigen integrierte Hochspannungs-Mosfets eine große Fläche auf dem Halbleiterplättchen.
<!-- page-import:0238:end -->

<!-- page-import:0239:start -->
202

3. Feldeffekttransistor

Abb. 3.23. n-Kanal-Mosfet für hohe Drain-Source-Spannungen

## 3.2.2 Einzel-Mosfets

### 3.2.2.1 Aufbau

Einzel-Mosfets sind im Gegensatz zu integrierten Mosfets meist vertikal aufgebaut, d.h. der Drain-Anschluss befindet sich auf der Unterseite des Substrats. Abbildung 3.24 zeigt einen dreidimensionalen Schnitt durch einen derart aufgebauten *vertikalen Mosfet*. Die schwach dotierte Driftstrecke, hier $n^{-}$-dotiert, verläuft nicht lateral an der Oberfläche wie beim integrierten Mosfet nach Abb. 3.23, sondern vertikal; dadurch wird Platz an der Oberfläche gespart und eine vergleichsweise hohe Durchbruchspannung entsprechend der Dicke des $n^{-}$-Gebiets erreicht. Der Kanal verläuft wie gewohnt an der Oberfläche unterhalb des Gates. Das p-dotierte Bulk-Gebiet wird hier nicht durch das Substrat gebildet, sondern durch Diffusion in dem $n^{-}$-Substrat hergestellt und über ein $p^{+}$-Kontaktgebiet mit der Source verbunden. Da die $n^{+}$-Source-Gebiete ebenfalls durch Diffusion hergestellt werden, nennt man diese Mosfets auch doppelt diffundierte Mosfets (*double diffused mosfets, DMOS*).

In Abb. 3.24 erkennt man ferner den zellularen Aufbau. Ein vertikaler Mosfet besteht aus einer zweidimensionalen Parallelschaltung kleiner Zellen, deren Source-Gebiete durch eine ganzflächige Source-Metallisierung an der Oberfläche verbunden sind und die über ein

Abb. 3.24. Aufbau eines n-Kanal-DMOS-Fets
<!-- page-import:0239:end -->

<!-- page-import:0240:start -->
3.2 Aufbau eines Feldeffekttransistors 203

Abb. 3.25. Parasitäre Elemente und Ersatzschaltbild eines n-Kanal-DMOS-Fets

gemeinsames Poly-Silizium-Gate angesteuert werden, das in Form eines Gitters unter der Source-Metallisierung verläuft und nur am Rand des Halbleiterplättchens mit dem äußeren Gate-Anschluss verbunden ist; die Unterseite dient als gemeinsamer Drain-Anschluss. Durch diesen Aufbau erreicht man auf einer kleinen Fläche eine sehr große Kanalweite $W$ und damit einen großen Steilheitskoeffizienten $K \sim W$. So erhält man z.B. bei einem Halbleiterplättchen mit einer Fläche von $2 \times 2\,\mathrm{mm}^2$ und einer Zellengröße von $20 \times 20\,\mu\mathrm{m}^2$ mit $W_{Zelle} = 20\,\mu\mathrm{m}$ eine Kanalweite von $W = 0{,}2\,\mathrm{m}$; mit $L = 2\,\mu\mathrm{m}$ und $K_n' \approx 25\,\mu\mathrm{A}/\mathrm{V}^2$ erhält man $K = K_n'W/L = 2{,}5\,\mathrm{A}/\mathrm{V}^2$. Da die Anzahl der Zellen bei einer $n$-fachen Verkleinerung der geometrischen Größen um den Faktor $n^2$ zu-, die Weite $W$ pro Zelle aber nur um den Faktor $n$ abnimmt, hat eine weitere Miniaturisierung eine entsprechende Erhöhung der Kanalweite pro Flächeneinheit zur Folge.

### 3.2.2.2 Parasitäre Elemente

Durch den besonderen Aufbau vertikaler Mosfets ergeben sich mehrere parasitäre Elemente, die in Abb. 3.25 zusammen mit dem resultierenden Ersatzschaltbild dargestellt sind:

- Durch die großflächige Überlappung von Gate und Source ergibt sich eine große äußere Gate-Source-Kapazität $C_{GS}$, die meist größer ist als die innere Gate-Source-Kapazität, die im Abschnitt 3.3.2 näher beschrieben wird.
- Aus der Überlappung zwischen Gate und $n^{-}$-Drain-Gebiet resultiert eine relativ große äußere Gate-Drain-Kapazität $C_{GD}$, die sich zur inneren Drain-Gate-Kapazität addiert; letztere wird ebenfalls im Abschnitt 3.3.2 näher beschrieben.
- Zwischen dem Bulk-Gebiet und dem Drain-Gebiet liegen die Drain-Source-Kapazitäten $C_{DS}$ und $C_B$; dabei liegt $C_{DS}$ unmittelbar zwischen Drain und Source, während bei $C_B$ noch der Bahnwiderstand $R_B$ des Bulk-Gebiets in Reihe liegt.
- Aufgrund der Schichtenfolge enthält der Aufbau einen Bipolartransistor $T_B$, dessen Basis über den Bahnwiderstand $R_B$ mit dem Emitter verbunden ist; deshalb sperrt $T_B$ bei normalem Betrieb. Bei einem sehr schnellen Anstieg der Drain-Source-Spannung kann der Strom $I = C_B\,\mathrm{d}U_{DS}/\mathrm{d}t$ durch $C_B$ und damit die Spannung an $R_B$ so groß werden, dass $T_B$ leitet. Um dies zu verhindern, muss man beim Ausschalten von
<!-- page-import:0240:end -->

<!-- page-import:0241:start -->
204  3. Feldeffekttransistor

a Übertragungskennlinie

b Ausgangskennlinienfeld

**Abb. 3.26.** Kennlinien eines vertikalen Leistungs-Mosfets (DMOS)

DMOS-Leistungsschaltern die Anstiegsgeschwindigkeit durch geeignete Ansteuerung oder durch eine Abschalt-Entlastungsschaltung begrenzen.

– Zwischen Source und Drain liegt die Rückwärtsdiode $D_{rev}$, die bei negativer Drain-Source-Spannung leitet. Sie kann beim Schalten von induktiven Lasten als Freilaufdiode eingesetzt werden, führt aber aufgrund ihrer aufbaubedingt hohen Rückwärtserholzeit $t_{RR}$ vor allem bei Brückenschaltungen zu unerwünschten Querströmen.

### 3.2.2.3 Kennlinien von vertikalen Leistungs-Mosfets

Die Kennlinien von vertikalen Leistungs-Mosfets weichen von den einfachen Großsignalkennlinien (3.2) und (3.3) ab; Abb. 3.26 zeigt diese Abweichungen im Übertragungs- und im Ausgangskennlinienfeld:

– Bei großen Strömen macht sich der Einfluss parasitärer Widerstände in der Source-Leitung bemerkbar. Die äußere Gate-Source-Spannung $U_{GS}$ an den Anschlüssen setzt sich in diesem Fall aus der inneren Gate-Source-Spannung und dem Spannungsabfall am Source-Widerstand $R_S$ zusammen; dadurch wird die Übertragungskennlinie bei großen Strömen linearisiert, siehe Abb. 3.26a.

– Die Abschnürspannung $U_{DS,ab}$ ist bei vertikalen Mosfets aufgrund eines zusätzlichen Spannungsabfalls im Drift-Gebiet größer als $U_{GS}-U_{th}$. Dieser Spannungsabfall lässt sich durch einen nichtlinearen Drain-Widerstand beschreiben und führt zu einer Scherung des Ausgangskennlinienfelds, siehe Abb. 3.26b.

Gleichungen zur Beschreibung dieses Verhaltens werden im Abschnitt 3.3.1 beschrieben.

### 3.2.3 Sperrschicht-Fets

Abbildung 3.27 zeigt den Aufbau eines normalen n-Kanal-Sperrschicht-Fets mit einem pn-Übergang zwischen Gate und Kanal und eines n-Kanal-Mesfets mit einem Metall-Halbleiter-Übergang (Schottky-Übergang) zwischen Gate und Kanal. Die Substrat-Anschlüsse $B$ sind bei integrierten Sperrschicht-Fets mit der negativen Versorgungsspannung verbunden, damit die pn-Übergänge zwischen dem Substrat und den $n^-$-Kanal-Gebieten immer in Sperrrichtung betrieben werden. Ferner muss jeder Fet von einem geschlossenen $p^+$-Ring umgeben sein, damit die Kanal-Gebiete der einzelnen Fets gegeneinander isoliert sind. Bei Einzel-Sperrschicht-Fets kann man das Substrat auch mit
<!-- page-import:0241:end -->
