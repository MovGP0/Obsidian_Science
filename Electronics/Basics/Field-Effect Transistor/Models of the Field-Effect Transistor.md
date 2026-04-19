# Models of the Field-Effect Transistor

<!-- page-import:0242:start -->
3.3 Modelle für den Feldeffekttransistor 205

a normaler Jfet

b Mesfet

**Abb. 3.27.** Aufbau von Sperrschicht-Fets

dem Gate verbinden; dadurch hat zusätzlich zum Gate-Kanal-Übergang auch der Substrat-Kanal-Übergang eine steuernde Wirkung. Ein vertikaler Aufbau wie beim Mosfet oder beim Bipolartransistor ist beim Sperrschicht-Fet nicht möglich.

## 3.2.4 Gehäuse

Für Einzel-Mosfets und Einzel-Sperrschicht-Fets werden dieselben Gehäuse verwendet wie für Bipolartransistoren; Abb. 2.21 auf Seite 58 zeigt die gängigsten Gehäusetypen. Mosfets gibt es in allen Leistungsklassen und damit auch in allen Gehäusegrößen. Sperrschicht-Fets gibt es dagegen nur als Kleinsignaltransistoren mit entsprechend kleinen Gehäusen; eine Ausnahme sind Leistungs-Mesfets für Hochfrequenz-Leistungsverstärker, für die spezielle Hochfrequenz-Gehäuse für Oberflächenmontage verwendet werden. Es gibt auch Sperrschicht-Fets mit separatem Bulk-Anschluss in Gehäusen mit vier Anschlüssen. Für Dual-Gate-Mosfets werden ebenfalls Gehäuse mit vier Anschlüssen benötigt; dabei handelt es sich ausschließlich um Hochfrequenz-Transistoren in speziellen Hochfrequenz-Gehäusen.

# 3.3 Modelle für den Feldeffekttransistor

Im Abschnitt 3.1.2 wurde das *statische Verhalten* eines Feldeffekttransistors durch die Großsignalgleichungen (3.2)–(3.4) beschrieben; dabei wurden sekundäre Effekte vernachlässigt. Für den rechnergestützten Schaltungsentwurf werden genauere Modelle benötigt, die diese Effekte berücksichtigen und darüber hinaus auch das *dynamische Verhalten* richtig wiedergeben. Aus diesem *Großsignalmodell* erhält man durch Linearisierung das *dynamische Kleinsignalmodell*, das zur Berechnung des Frequenzgangs von Schaltungen benötigt wird.

## 3.3.1 Statisches Verhalten

Im Gegensatz zum Bipolartransistor, bei dem sich das Gummel-Poon-Modell allgemein bewährt hat, gibt es für Fets eine Vielzahl von Modellen, die jeweils anwendungsspezifische Vor- und Nachteile haben und teilweise sehr komplex sind. Im folgenden wird das *Level-1-Mosfet-Modell* $^{10}$ beschrieben, das in fast allen CAD-Programmen zur Schaltungssimulation zur Verfügung steht. Es eignet sich sehr gut zur Beschreibung von Einzeltransistoren mit vergleichsweise großer Kanallänge und -weite, jedoch nicht für integrierte Mosfets mit den für hochintegrierte Schaltungen typischen kleinen Abmessungen. Hier

$^{10}$ Diese Bezeichnung wird in Schaltungssimulatoren der *Spice*-Familie, z.B. *PSpice* von *MicroSim*, verwendet. In der Literatur wird es oft *Shichman-Hodges-Modell* genannt, da wesentliche Teile aus einer Veröffentlichung von H.Shichman und D.A.Hodges stammen.
<!-- page-import:0242:end -->

<!-- page-import:0243:start -->
206  3. Feldeffekttransistor

**Abb. 3.28.** Großsignal-Ersatzschaltbild für einen n-Kanal-Mosfet

muss man die erheblich aufwendigeren Level-2- und Level-3-Modelle oder die BSIM-Modelle $^{11}$ verwenden; sie berücksichtigen zusätzlich den Kurzkanal-, den Schmalkanal- und den Unterschwellen-Effekt. Diese Effekte werden hier nur qualitativ beschrieben.

Für Sperrschicht-Fets wird ein eigenes Modell verwendet, dessen statisches Verhalten dem des Level-1-Mosfet-Modells entspricht, obwohl in CAD-Programmen oft andere Parameter oder andere Bezeichnungen für Parameter mit gleicher Bedeutung verwendet werden; darauf wird am Ende des Abschnitts näher eingegangen.

#### 3.3.1.1 Level-1-Mosfet-Modell

Ein n-Kanal-Mosfet besteht aus einem p-dotierten Substrat (Bulk), den n-dotierten Gebieten für Drain und Source, einem isolierten Gate und einem zwischen Drain und Source liegenden Inversionskanal. Daraus folgt das in Abb. 3.28 gezeigte Großsignal-Ersatzschaltbild mit einer gesteuerten Stromquelle für den Kanal und zwei Dioden für die pn-Übergänge zwischen Bulk und Drain bzw. Bulk und Source.

##### 3.3.1.1.1 Drainstrom

Das Level-1-Modell verwendet die Gleichungen (3.2) und (3.3) in Verbindung mit (3.5); mit

$$
U_{DS,ab} = U_{GS} - U_{th}
$$

und $K = K_n' W/L$ erhält man:

$$
I_D =
\begin{cases}
0 & \text{für } U_{GS} < U_{th} \\\\
\frac{K_n' W}{L}\, U_{DS}\left(U_{GS} - U_{th} - \frac{U_{DS}}{2}\right)\left(1 + \frac{U_{DS}}{U_A}\right) & \text{für } U_{GS} \geq U_{th}, \\
& 0 \leq U_{DS} < U_{DS,ab} \\\\
\frac{K_n' W}{2L}\,(U_{GS} - U_{th})^2 \left(1 + \frac{U_{DS}}{U_A}\right) & \text{für } U_{GS} \geq U_{th}, \\
& U_{DS} \geq U_{DS,ab}
\end{cases}
\qquad (3.16)
$$

(3.15)

Als Parameter treten der relative Steilheitskoeffizient $K_n'$, die Kanalweite $W$, die Kanallänge $L$ und die Early-Spannung $U_A$ auf. Alternativ zu $K_n'$ kann man die Beweglichkeit $\mu_n$ und die Oxiddicke $d_{ox}$ angeben; es gilt [3.1]:

$^{11}$ Die BSIM-Modelle (*Berkeley short-channel IGFET model*) wurden an der Universität von Berkeley, Kalifornien, entwickelt und gelten zur Zeit als die am weitesten entwickelten Modelle für Kurzkanal-Mosfets.
<!-- page-import:0243:end -->

<!-- page-import:0244:start -->
3.3 Modelle für den Feldeffekttransistor 207

Abb. 3.29. Abhängigkeit der Schwellenspannung $U_{th}$ von der Bulk-Source-Spannung $U_{BS}$ (Substrat-Effekt)

$$
K_n' = \frac{\mu_n \varepsilon_0 \varepsilon_{r,ox}}{d_{ox}}
$$

(3.17)

Mit $\mu_n = 0{,}05 \dots 0{,}07\,\mathrm{m^2/Vs}$, $\varepsilon_0 = 8{,}85 \cdot 10^{-12}\,\mathrm{As/Vm}$ und $\varepsilon_{r,ox} = 3{,}9$ erhält man:

$$
K_n' \approx 1700 \dots 2400\,\frac{\mu\mathrm{A}}{\mathrm{V}^2} \cdot \frac{1}{d_{ox}/\mathrm{nm}}
$$

Bei Einzel-Mosfets beträgt die Oxiddicke $d_{ox}$ $\approx 40 \dots 100\,\mathrm{nm}$, in hochintegrierten CMOS-Schaltungen wird sie bis auf $15\,\mathrm{nm}$ reduziert.

#### 3.3.1.1.2 Schwellenspannung

Die Schwellenspannung $U_{th}$ ist die Gate-Source-Spannung, ab der sich unterhalb des Gates der Inversionskanal bildet. Da der Kanal im Substrat-Gebiet liegt, hängt die Inversion und damit auch die Schwellenspannung von der Gate-Substrat-Spannung $U_{GB}$ ab. Dieser Effekt wird Substrat-Effekt genannt und hängt von der Dotierung des Substrats ab. Da eine Beschreibung der Form $U_{th} = U_{th}(U_{GB})$ unanschaulich ist, verwendet man wie bei $U_{GS}$ und $U_{DS}$ die Source als Bezugspunkt und ersetzt $U_{GB} = U_{GS} - U_{BS}$ durch die Bulk-Source-Spannung $U_{BS}$; es gilt [3.1]:

$$
U_{th} = U_{th,0} + \gamma \left(\sqrt{U_{inv} - U_{BS}} - \sqrt{U_{inv}}\right)
$$

(3.18)

Als Parameter treten die Null-Schwellenspannung $U_{th,0}$, der Substrat-Steuerfaktor $\gamma \approx 0{,}3 \dots 0{,}8\,\sqrt{\mathrm{V}}$ und die Inversionsspannung $U_{inv} \approx 0{,}55 \dots 0{,}8\,\mathrm{V}$ auf. Abbildung 3.29 zeigt den Verlauf von $U_{th}$ in Abhängigkeit von $U_{BS}$ für $U_{th,0} = 1\,\mathrm{V}$, $\gamma = 0{,}55\,\sqrt{\mathrm{V}}$ und $U_{inv} = 0{,}7\,\mathrm{V}$ ^12; dabei muss $U_{BS} \leq 0$ gelten, damit die Bulk-Source-Diode in Sperrrichtung betrieben wird.

Der Substrat-Effekt macht sich vor allem bei integrierten Schaltungen bemerkbar, da hier alle n-Kanal-Mosfets ein gemeinsames Substrat-Gebiet besitzen und je nach Arbeitspunkt mit unterschiedlichen Bulk-Source-Spannungen betrieben werden; deshalb haben integrierte Mosfets mit gleichen geometrischen Größen unterschiedliche Kennlinien, wenn sie mit unterschiedlichen Bulk-Source-Spannungen betrieben werden. Bei Einzel-Mosfets mit interner Verbindung zwischen Source und Substrat tritt dieser Effekt nicht auf; hier gilt $U_{BS} = 0$ und $U_{th} = U_{th,0}$.

12 $\gamma$ und $U_{inv}$ wurden mit (3.19) und (3.20) für $N_{sub} = 10^{16}\,\mathrm{cm}^{-3}$ und $d_{ox} = 32\,\mathrm{nm}$ bestimmt.
<!-- page-import:0244:end -->

<!-- page-import:0246:start -->
3.3 Modelle für den Feldeffekttransistor 209

a Kurzkanal-Effekt

b Schmalkanal-Effekt

**Abb. 3.30.** Abhängigkeit der Schwellenspannung von den geometrischen Größen

ist. In integrierten Schaltungen ist der gemeinsame Bulk-Anschluss der n-Kanal-Mosfets mit der negativen Versorgungsspannung verbunden, so dass die Dioden immer sperren. Die Sperrströme $I_{D,S} \approx -I_{S,S}$ und $I_{D,D} \approx -I_{S,D}$ liegen bei kleineren Mosfets im pA-Bereich, bei Leistungs-Mosfets im $\mu$A-Bereich; sie können im allgemeinen vernachlässigt werden.

#### 3.3.1.1.4 Weitere Effekte

Es gibt eine Vielzahl von weiteren Effekten, die vom Level-1-Modell nicht erfasst werden; die wichtigsten werden im folgenden kurz vorgestellt [3.2]:

- Bei kleinen Kanallängen $L$ wird der Bereich unter dem Kanal von den Sperrschichten der Bulk-Source- und Bulk-Drain-Diode stark eingeengt. Die dort vorhandene Raumladung wird in diesem Fall in zunehmendem Maße durch Ladungen im Source- und Drain-Gebiet kompensiert, was zu einer Abnahme der Gate-Ladung führt; dadurch nimmt die Schwellenspannung $U_{th}$ ab. Dieser Effekt wird Kurzkanal-Effekt genannt und hängt von den Spannungen $U_{BS}$ und $U_{BD}$ bzw. $U_{DS} = U_{BS} - U_{BD}$ ab. Mit zunehmender Drain-Source-Spannung nimmt die Schwellenspannung ab und der Drainstrom entsprechend zu; dadurch erhalten die Ausgangskennlinien im Abschnürbereich eine von $U_{DS}$ abhängige Steigung. Die Beschreibung dieses Effekts in den Level-2/3- und BSIM-Modellen kann deshalb als erweiterte Kanallängenmodulation aufgefasst werden, die in diesem Fall nicht mehr mit der Early-Spannung $U_A$ bzw. dem Kanallängenmodulations-Parameter $\lambda$, sondern durch die Schwellenspannung

$$
U_{th} = U_{th,0} + \gamma \left( (1 - f(L, U_{DS}, U_{BS})) \sqrt{U_{inv} - U_{BS}} - \sqrt{U_{inv}} \right)
$$

modelliert wird. Die Funktion $f(L, U_{DS}, U_{BS})$ wird in [3.3] näher beschrieben. Abbildung 3.30a zeigt die Abhängigkeit der Schwellenspannung von der Kanallänge bei einem integrierten Mosfet.

- Mit abnehmender Kanalweite $W$ wird die Ladung an den Rändern des Kanals im Vergleich zur Ladung im Kanal immer größer und muss berücksichtigt werden. Sie wird durch Ladung auf dem Gate kompensiert und bewirkt deshalb eine Zunahme der Schwellenspannung $U_{th}$. Dieser Effekt wird Schmalkanal-Effekt genannt und ebenfalls durch eine Erweiterung der Gleichung für die Schwellenspannung beschrieben:
<!-- page-import:0246:end -->

<!-- page-import:0247:start -->
210  3. Feldeffekttransistor

a linear

b logarithmisch

**Abb. 3.31.** Drainstroms im Unterschwellenbereich

$$
U_{th} = U_{th,0} + \gamma\,(...) + k\,\frac{U_{inv}-U_{BS}}{W}
$$

Der Faktor $k$ wird in [3.3] näher beschrieben. Abbildung 3.30b zeigt die Abhängigkeit der Schwellenspannung von der Kanalweite bei einem integrierten Mosfet.  
– Auch ohne Inversionskanal sind freie Ladungen im Kanalgebiet vorhanden; dadurch kann auch unterhalb der Schwellenspannung $U_{th}$ ein kleiner Drainstrom fließen. Dieser Effekt wird Unterschwellen-Effekt und der Strom Unterschwellenstrom (sub-threshold current) genannt. Die Kennlinie ist in diesem Unterschwellenbereich (sub-threshold region) exponentiell und geht im Bereich der Schwellenspannung in die Kennlinie für den Abschnürbereich über:

$$
I_D =
\begin{cases}
2K\left(\dfrac{n_U\,U_T}{e}\right)^2 e^{\frac{U_{GS}-U_{th}}{n_U\,U_T}}\left(1+\dfrac{U_{DS}}{U_A}\right) & \text{für } U_{GS} < U_{th}+2n_U\,U_T \\
\dfrac{K}{2}(U_{GS}-U_{th})^2 \left(1+\dfrac{U_{DS}}{U_A}\right) & \text{für } U_{GS} \geq U_{th}+2n_U\,U_T
\end{cases}
\qquad (3.25)
$$

Dabei ist $n_U \approx 1{,}5 \dots 2{,}5$ der Emissionsfaktor im Unterschwellenbereich. Der Übergang erfolgt bei $U_{GS} \approx U_{th} + 3 \dots 5 \cdot U_T \approx U_{th} + 78 \dots 130\,\mathrm{mV}$. Abbildung 3.31 zeigt den Verlauf des Drainstroms im Bereich der Schwellenspannung in linearer und logarithmischer Darstellung; letztere liefert für den exponentiellen Unterschwellenstrom eine Gerade. In integrierten MOS-Schaltungen für batteriebetriebene Geräte werden die Mosfets oft in diesem Bereich betrieben; damit kann man die Stromaufnahme auf Kosten der Geschwindigkeit stark reduzieren.

### 3.3.1.1.5 p-Kanal-Mosfets

Die Kennlinien eines p-Kanal-Mosfets erhält man, indem man das Ausgangs- und das Übertragungskennlinienfeld eines n-Kanal-Mosfets jeweils am Ursprung spiegelt. In den Gleichungen hat diese Punktspiegelung eine Änderung der Polarität aller Spannungen und Ströme zur Folge; mit

$$
U_{DS,ab} = U_{GS} - U_{th} < 0
$$

erhält man:
<!-- page-import:0247:end -->

<!-- page-import:0248:start -->
3.3 Modelle für den Feldeffekttransistor 211

$$
I_D=
\left\{
\begin{array}{ll}
0 & \text{für } U_{GS}>U_{th}\\[6pt]
-\dfrac{K_p'W}{L}\,U_{DS}\left(U_{GS}-U_{th}-\dfrac{U_{DS}}{2}\right)\left(1-\dfrac{U_{DS}}{U_A}\right)
& \text{für } U_{GS}\leq U_{th},\\
& \qquad U_{DS,ab}<U_{DS}\leq 0\\[6pt]
-\dfrac{K_p'W}{2L}(U_{GS}-U_{th})^2\left(1-\dfrac{U_{DS}}{U_A}\right)
& \text{für } U_{GS}\leq U_{th},\\
& \qquad U_{DS}\leq U_{DS,ab}
\end{array}
\right.
$$

$$
U_{th}=U_{th,0}-\gamma\left(\sqrt{U_{inv}+U_{BS}}-\sqrt{U_{inv}}\right)
$$

Die Parameter $\gamma$ und $U_{inv}$ werden auch beim p-Kanal-Mosfet mit (3.19) bzw. (3.20) bestimmt. Die Early-Spannung $U_A$ ist beim p-Kanal- wie beim n-Kanal-Mosfet positiv; auch der relative Steilheitskoeffizient ist positiv:

$$
K_p'=\frac{\mu_p\varepsilon_0\varepsilon_{r,ox}}{d_{ox}}
$$

Dabei ist $\mu_p = 0{,}015\dots 0{,}025\,\mathrm{m^2/Vs}$. Für die Substrat-Dioden gilt:

$$
I_{D,S}=-I_{S,S}\left(e^{\frac{-U_{BS}}{nU_T}}-1\right)
$$

$$
I_{D,D}=-I_{S,D}\left(e^{\frac{-U_{BD}}{nU_T}}-1\right)
$$

### 3.3.1.2 Bahnwiderstände

Jeder Anschluss verfügt über einen Bahnwiderstand, der sich aus dem Widerstand des jeweiligen Gebiets und dem Kontaktwiderstand der Metallisierung zusammensetzt. Abbildung 3.32a zeigt die Widerstände $R_G$, $R_S$, $R_D$ und $R_B$ am Beispiel eines integrierten n-Kanal-Mosfets. In CAD-Programmen zur Schaltungssimulation kann man diese Widerstände direkt oder unter Verwendung des *Schichtwiderstands (sheet resistance)* $R_{sh}$ und den Multiplikatoren $n_{RG}$, $n_{RS}$, $n_{RD}$ und $n_{RB}$ angeben; es gilt:

$$
\begin{bmatrix}
R_G\\
R_S\\
R_D\\
R_B
\end{bmatrix}
=
R_{sh}
\begin{bmatrix}
n_{RG}\\
n_{RS}\\
n_{RD}\\
n_{RB}
\end{bmatrix}
\qquad\qquad (3.26)
$$

Der Schichtwiderstand ist in diesem Fall eine Eigenschaft des MOS-Prozesses und für alle n-Kanal-Mosfets einer integrierten Schaltung gleich. Typische Werte sind $R_{sh}\approx 20\dots 50\,\Omega$ bei n-Kanal-Mosfets und $R_{sh}\approx 50\dots 100\,\Omega$ bei p-Kanal-Mosfets.

Abbildung 3.32b zeigt das erweiterte Modell. Man muss nun zwischen den *externen* Anschlüssen G, S, D und B und den *internen* Anschlüssen G’, S’, D’ und B’ unterscheiden, d.h. der Drainstrom $I_D$ und die Diodenströme $I_{D,S}$ und $I_{D,D}$ hängen jetzt von den internen Spannungen $U_{G'S'}$, $U_{D'S'}$, $\ldots$ ab.

### 3.3.1.3 Vertikale Leistungs-Mosfets

Im Abschnitt 3.2.2 wurde bereits auf die besonderen Eigenschaften vertikaler Leistungs-Mosfets (DMOS-Fets) eingegangen; Abb. 3.26 auf Seite 204 zeigt die zugehörigen Kenn-
<!-- page-import:0248:end -->

<!-- page-import:0249:start -->
212  3. Feldeffekttransistor

a im Mosfet

b im Modell

**Abb. 3.32.** Bahnwiderstände bei einem integrierten n-Kanal-Mosfet

linien. Die Scherung der Übertragungskennlinie in Abb. 3.26a wird durch den Sourcewiderstand $R_S$ verursacht; aus Abb. 3.32b folgt mit $I_G = 0$:

$$
U_{GS} = U_{G'S'} + I_D R_S = U_{th} + \sqrt{\frac{2I_D}{K\left(1 + \frac{U_{D'S'}}{U_A}\right)}} + I_D R_S
$$

$$
\overset{U_A \rightarrow \infty}{\approx} U_{th} + \sqrt{\frac{2I_D}{K}} + I_D R_S
\qquad\qquad (3.27)
$$

Diese Gleichung wird zur Parameterextraktion verwendet; ausgehend von mindestens drei Wertepaaren $(U_{GS}, I_D)$ im Abschnürbereich kann man die drei Parameter $U_{th}$, $K$ und $R_S$ bestimmen 13.

Im Ausgangskennlinienfeld nach Abb. 3.26b sind die Verhältnisse komplizierter. Zwar lässt sich die Scherung durch einen Widerstand in der Drainleitung beschreiben, dieser ist jedoch im Gegensatz zum linearen Drainwiderstand $R_D$ nach Abb. 3.32b nichtlinear. Verursacht wird dies durch *Leitfähigkeitsmodulation* in der Driftstrecke, d.h. die Leitfähigkeit des Driftgebiets nimmt mit zunehmendem Strom zu, weil die Ladungsträgerdichte zunimmt. Für den Spannungsabfall $U_{Drift}$ gilt näherungsweise [3.4]:

$$
U_{Drift} = U_0 \left(\sqrt{1 + 2 \frac{I_D}{I_0}} - 1\right)
\qquad\qquad (3.28)
$$

Dabei sind $U_0$ und $I_0$ die Parameter der Driftstrecke. Abbildung 3.33a zeigt die Driftspannung in Abhängigkeit von $I_D$ für einen Mosfet mit $U_0 = 1\ \mathrm{V}$ und $I_0 = 1\ \mathrm{A}$. Bei kleinen Strömen verhält sich die Driftstrecke wie ein linearer Widerstand mit $R = U_0/I_0$; in Abb. 3.33a ist $R = 1\ \Omega$. Bei größeren Strömen nimmt die Leitfähigkeit zu und der Spannungsabfall ist kleiner als bei einem $1\ \Omega$-Widerstand.

Die Kennlinie (3.28) entspricht der eines selbstleitenden Mosfets, bei dem Gate und Drain verbunden sind; mit $U_{GS} = U_{DS}$ und $U_{th} < 0$ erhält man

13 In der Praxis verwendet man sehr viele Wertepaare und bestimmt die Parameter mit Hilfe einer *Orthogonal-Projektion*.
<!-- page-import:0249:end -->

<!-- page-import:0250:start -->
## 3.3 Modelle für den Feldeffekttransistor

213

a Verlauf der Driftspannung für $U_0 = 1\,\mathrm{V}$ und $I_0 = 1\,\mathrm{A}$

b Ersatzschaltbild

**Abb. 3.33.** Driftspannung bei vertikalen Leistungs-Mosfets

$$
I_D = K\,U_{DS}\left(U_{GS} - U_{th} - \frac{U_{DS}}{2}\right)
\qquad
\overset{U_{GS}=U_{DS}=U_{Drift}}{U_{th}<0}
=
K|U_{th}|U_{Drift} + \frac{1}{2}K\,U_{Drift}^2
$$

und daraus durch Auflösen:

$$
U_{Drift} = |U_{th}|\left(\sqrt{1 + \frac{2I_D}{K|U_{th}|^2}} - 1\right)
$$

Ein Vergleich mit (3.28) zeigt, dass man die Driftstrecke mit einem selbstleitenden Mosfet mit $U_{th} = -U_0$ und $K = I_0/U_0^2$ modellieren kann; daraus folgt das in Abb. 3.33b gezeigte Ersatzschaltbild, bei dem im Vergleich zu Abb. 3.32b ein selbstleitender Mosfet an die Stelle des Widerstands $R_D$ tritt.

### 3.3.1.4 Sperrschicht-Fets

Das Modell eines Sperrschicht-Fets folgt aus dem Modell eines Mosfets durch Weglassen des isolierten Gates, Umbenennen von Bulk in Gate und Einsetzen von $\beta = K/2$ in den Gleichungen; man erhält das Ersatzschaltbild in Abb. 3.34 mit den Gleichungen:

$$
I_D =
\begin{cases}
0 & \text{für } U_{GS} < U_{th} \\
2\beta\,U_{DS}\left(U_{GS} - U_{th} - \dfrac{U_{DS}}{2}\right)\left(1 + \dfrac{U_{DS}}{U_A}\right) & \text{für } U_{GS} \geq U_{th}, \\
& 0 \leq U_{DS} < U_{GS} - U_{th} \\
\beta\,(U_{GS} - U_{th})^2 \left(1 + \dfrac{U_{DS}}{U_A}\right) & \text{für } U_{GS} \geq U_{th}, \\
& U_{DS} \geq U_{GS} - U_{th}
\end{cases}
\qquad (3.29)
$$

$$
I_G = I_S \left(e^{\frac{U_{GS}}{n\dot{U}_T}} + e^{\frac{U_{GD}}{n\dot{U}_T}} - 2\right)
\qquad (3.30)
$$
<!-- page-import:0250:end -->

<!-- page-import:0251:start -->
214  3. Feldeffekttransistor

Abb. 3.34.  
Großsignal-Ersatzschaltbild für einen n-Kanal-Jfet

Parameter sind die Schwellenspannung $U_{th}$, der Jfet-Steilheitskoeffizient $\beta$, die Early-Spannung $U_A$, der Sättigungssperrstrom $I_S$ und der Emissionskoeffizient $n$.

Zusätzlich sind wie beim Mosfet Bahnwiderstände in der Drain- und Source-Leitung vorgesehen; die entsprechenden Parameter sind $R_S$ und $R_D$. Ein Gate-Widerstand ist im Jfet-Modell nicht vorgesehen, muss aber in der Schaltungssimulation mit CAD-Programmen immer dann extern ergänzt werden, wenn das Hochfrequenzverhalten richtig wiedergegeben werden soll.

Im Gegensatz zum Mosfet-Modell ist das Jfet-Modell nicht skalierbar, d.h. es treten keine geometrischen Größen wie Kanallänge oder -weite auf. Das Jfet-Modell ist einfach, aber nicht sehr genau.

## 3.3.2 Dynamisches Verhalten

Das Verhalten bei Ansteuerung mit puls- oder sinusförmigen Signalen wird als dynamisches Verhalten bezeichnet und kann nicht aus den Kennlinien ermittelt werden. Ursache hierfür sind die in Abb. 3.35 gezeigten Kapazitäten zwischen den verschiedenen Bereichen eines Mosfets; sie lassen sich in drei Gruppen aufteilen:

- Die Kanalkapazitäten $C_{GS,K}$ und $C_{GD,K}$ beschreiben die kapazitive Wirkung zwischen Gate und Kanal. Sie sind nur wirksam, wenn ein Kanal existiert, d.h. wenn der Mosfet leitet; ohne Kanal erhält man eine Kapazität $C_{GB,K}$ zwischen Gate und Bulk, die Bestandteil der Gate-Bulk-Kapazität $C_{GB}$ ist. Die Kanalkapazitäten sind im Abschnürbereich linear, im ohmschen Bereich dagegen nichtlinear.
- Die linearen Überlappungskapazitäten $C_{GS,\ddot{U}}$, $C_{GD,\ddot{U}}$ und $C_{GB,\ddot{U}}$ ergeben sich aus der geometrischen Überlappung zwischen dem Gate und dem Source-, Drain- und Bulk-Gebiet. $C_{GB,\ddot{U}}$ folgt aus der Überlappung zwischen Gate und Bulk an den Seiten des Kanals und ist ein Bestandteil von $C_{GB}$.
- Die nichtlinearen Sperrschichtkapazitäten $C_{BS}$ und $C_{BD}$ ergeben sich aus den pn-Übergängen zwischen Bulk und Source bzw. Bulk und Drain.

Durch Zusammenfassen erhält man insgesamt fünf Kapazitäten:

$$
C_{GS} \quad = \quad C_{GS,K} + C_{GS,\ddot{U}}
$$

$$
C_{GD} \quad = \quad C_{GD,K} + C_{GD,\ddot{U}}
\qquad\qquad (3.31)
$$

$$
C_{GB} \quad = \quad C_{GB,K} + C_{GB,\ddot{U}}
$$

sowie $C_{BS}$ und $C_{BD}$.

### 3.3.2.1 Kanalkapazitäten

Das Gate bildet zusammen mit dem darunter liegenden Kanal einen Plattenkondensator mit der Oxidkapazität:
<!-- page-import:0251:end -->

<!-- page-import:0252:start -->
## 3.3 Modelle für den Feldeffekttransistor

215

**Abb. 3.35.** Kapazitäten bei einem n-Kanal-Mosfet

$$
C_{ox}=\varepsilon_{ox}\frac{A}{d_{ox}}=\varepsilon_0\varepsilon_{r,ox}\frac{WL}{d_{ox}}
\qquad (3.32)
$$

Im Sperrbereich, d.h. ohne Kanal, wirkt diese Kapazität zwischen Gate und Bulk; man erhält:

$$
\begin{aligned}
C_{GS,K} &= 0\\
C_{GD,K} &= 0\\
C_{GB,K} &= C_{ox}
\end{aligned}
\qquad \text{für } U_{G'S'} < U_{th}
\qquad (3.33)
$$

Im ohmschen Bereich erstreckt sich der Kanal vom Source- bis zum Drain-Gebiet und die Oxidkapazität teilt sich entsprechend der Ladungsverteilung im Kanal auf. Für $U_{D'S'}=0$ ist der Kanal symmetrisch und man erhält $C_{GS,K}=C_{GD,K}=C_{ox}/2$. Für $U_{D'S'}>0$ ist der Kanal unsymmetrisch; hier gilt $C_{GS,K}>C_{GD,K}$. Die Kapazitäten hängen demnach von $U_{D'S'}$ und $U_{G'S'}$ ab und können mit den folgenden Gleichungen näherungsweise beschrieben werden [3.3]:

$$
\begin{aligned}
C_{GS,K} &= \frac{2}{3}C_{ox}\left(1-\left(\frac{U_{G'S'}-U_{th}-U_{D'S'}}{2(U_{G'S'}-U_{th})-U_{D'S'}}\right)^2\right)\\[6pt]
C_{GD,K} &= \frac{2}{3}C_{ox}\left(1-\left(\frac{U_{G'S'}-U_{th}}{2(U_{G'S'}-U_{th})-U_{D'S'}}\right)^2\right)\\[6pt]
C_{GB,K} &= 0
\end{aligned}
\qquad \text{für } U_{G'S'} \ge U_{th},\;
U_{D'S'} < U_{G'S'}-U_{th}
\qquad (3.34)
$$

Im Abschnürbereich ist der Kanal auf der Drain-Seite abgeschnürt, d.h. es besteht keine Verbindung mehr zwischen dem Kanal und dem Drain-Gebiet; daraus folgt $C_{GD,K}=0$. Damit wirkt nur noch $C_{GS,K}$ als Kanalkapazität [3.3]:

$$
\begin{aligned}
C_{GS,K} &= \frac{2}{3}C_{ox}\\
C_{GD,K} &= 0\\
C_{GB,K} &= 0
\end{aligned}
\qquad \text{für } U_{G'S'} \ge U_{th}, U_{D'S'} \ge U_{G'S'}-U_{th}
\qquad (3.35)
$$

Abbildung 3.36 zeigt den Verlauf der drei Kapazitäten. Man beachte, dass die Analogie zum Plattenkondensator nur bei homogener Ladungsverteilung gilt; nur in diesem Fall gilt
<!-- page-import:0252:end -->

<!-- page-import:0253:start -->
216  3. Feldeffekttransistor

Abb. 3.36. Verlauf der Kanalkapazitäten bei einem n-Kanal-Mosfet schematisch. Die Übergänge sind bei einem realen Mosfet stetig

$C_{GS,K} + C_{GD,K} + C_{GB,K} = C_{ox}$. Das ist im Sperrbereich immer, im ohmschen Bereich nur bei $U_{DS}' = 0$ und im Abschnürbereich nie der Fall.

Man erkennt in Abb. 3.36, dass bei dem hier vorgestellten Kapazitätsmodell am Übergang zwischen dem Sperr- und dem Abschnürbereich ein abrupter Übergang von $C_{GB,K}$ auf $C_{GS,K}$ mit einem Sprung in der Gesamtkapazität von $C_{ox}$ auf $2C_{ox}/3$ auftritt. In diesem Bereich gibt das Modell die realen Verhältnisse nur sehr grob wieder. Der Übergang ist bei einem realen Mosfet stetig; die entsprechenden Verläufe sind in Abb. 3.36 strichpunktiert dargestellt $^{14}$.

#### 3.3.2.2 Überlappungskapazitäten

Da das Gate im allgemeinen größer ist als der Kanal $^{15}$, d.h. breiter als die Kanalweite $W$ und länger als Kanallänge $L$, ergeben sich an den Rändern Überlappungen, die entsprechende Überlappungskapazitäten $C_{GS,\ddot{U}}$, $C_{GD,\ddot{U}}$ und $C_{GB,\ddot{U}}$ zur Folge haben. Man kann diese Kapazitäten aber nicht mit Hilfe der Formel für Plattenkondensatoren aus der Fläche der jeweiligen Überlappung berechnen, da die Feld- und Ladungsverteilung in den Randbereichen nicht homogen ist. Deshalb gibt man als Parameter die auf die Randlänge bezogenen Kapazitätsbeläge $C'_{GS,\ddot{U}}$, $C'_{GD,\ddot{U}}$ und $C'_{GB,\ddot{U}}$ an, die durch Messung oder mit Hilfe einer Feldsimulation ermittelt werden; daraus folgt:

$$
C_{GS,\ddot{U}} = C'_{GS,\ddot{U}}\,W
$$

$$
C_{GD,\ddot{U}} = C'_{GD,\ddot{U}}\,W
$$

$$
C_{GB,\ddot{U}} = C'_{GB,\ddot{U}}\,L
\qquad\qquad (3.36)
$$

---

$^{14}$ Eine relativ einfache Beschreibung dieses Übergangs findet man in [3.3]. Ein weiteres Problem ist die Ladungserhaltung, deren Einhaltung eine weitergehende Änderung der Gleichungen erfordert; in PSpice von MicroSim wird ein entsprechend erweitertes Modell verwendet [3.5].

$^{15}$ Das Gate muss mindestens so groß sein wie das Kanalgebiet zwischen Source und Drain, damit sich ein durchgehender Kanal bilden kann.
<!-- page-import:0253:end -->

<!-- page-import:0254:start -->
3.3 Modelle für den Feldeffekttransistor 217

Dabei beinhaltet $C'_{GB,\ddot{U}}$ die Anteile beider Seiten und muss deshalb nur mit der einfachen Kanallänge multipliziert werden. Bei symmetrisch aufgebauten Mosfets ist $C'_{GS,\ddot{U}} = C'_{GD,\ddot{U}}$ bzw. $C_{GS,\ddot{U}} = C_{GD,\ddot{U}}$; bei Hochspannungs-Mosfets mit einer zusätzlichen Driftstrecke sind die Werte verschieden.

Bei vertikalen Leistungs-Mosfets ist die Gate-Source-Überlappungskapazität $C_{GS,\ddot{U}}$ besonders groß, weil die ganzflächige Source-Metallisierung das darunter liegende Gate-Gitter überdeckt, siehe Abb. 3.24 auf Seite 202 bzw. $C_{GS}$ in Abb. 3.25 auf Seite 203. Der dadurch verursachte zusätzliche Anteil in der Überlappungskapazität hängt zwar von $W$ und $L$ ab, ist aber für den Fall, dass verschieden große Mosfets aus einer unterschiedlichen Anzahl gleicher Zellen bestehen, nur noch von $W$ abhängig; $L$ ist in diesem Fall für alle Mosfets gleich.

## 3.3.2.3 Sperrschichtkapazitäten

Die pn-Übergänge zwischen Bulk und Source bzw. Bulk und Drain besitzen eine spannungsabhängige Sperrschichtkapazität $C_{BS}$ bzw. $C_{BD}$, die von der Dotierung, der Fläche des Übergangs und der anliegenden Spannung abhängt. Die Beschreibung erfolgt wie bei einer Diode; aus (1.13) auf Seite 19 folgt sinngemäß:

$$
C_{BS}(U_{B'S'}) = \frac{C_{S0,S}}{\left(1 - \frac{U_{B'S'}}{U_{Diff}}\right)^{m_S}}
\qquad \text{für } U_{B'S'} \leq 0
\qquad (3.37)
$$

$$
C_{BD}(U_{B'D'}) = \frac{C_{S0,D}}{\left(1 - \frac{U_{B'D'}}{U_{Diff}}\right)^{m_S}}
\qquad \text{für } U_{B'D'} \leq 0
\qquad (3.38)
$$

mit den Nullkapazitäten $C_{S0,S}$ und $C_{S0,D}$, der Diffusionsspannung $U_{Diff}$ und den Kapazitätskoeffizienten $m_S \approx 1/3 \dots 1/2$.

Alternativ zu $C_{S0,S}$ und $C_{S0,D}$ kann man den Sperrschicht-Kapazitätsbelag $C'_S$, den Rand-Kapazitätsbelag $C'_R$, die Rand-Diffusionsspannung $U_{Diff,R}$ und den Rand-Kapazitätskoeffizienten $m_R$ angeben; mit den Flächen $A_S$ und $A_D$ und den Randlängen $l_S$ und $l_D$ des Source- und Drain-Gebiets gilt:

$$
C_{BS} = \frac{C'_S A_S}{\left(1 - \frac{U_{B'S'}}{U_{Diff}}\right)^{m_S}} + \frac{C'_R l_S}{\left(1 - \frac{U_{B'S'}}{U_{Diff,R}}\right)^{m_R}}
\qquad \text{für } U_{B'S'} \leq 0
\qquad (3.39)
$$

$$
C_{BD} = \frac{C'_S A_D}{\left(1 - \frac{U_{B'D'}}{U_{Diff}}\right)^{m_S}} + \frac{C'_R l_D}{\left(1 - \frac{U_{B'D'}}{U_{Diff,R}}\right)^{m_R}}
\qquad \text{für } U_{B'D'} \leq 0
\qquad (3.40)
$$

Davon macht man besonders bei CAD-Programmen zum Entwurf integrierter Schaltungen Gebrauch; $C'_S$, $C'_R$, $U_{Diff}$, $U_{Diff,R}$, $m_S$ und $m_R$ sind in diesem Fall Parameter des MOS-Prozesses und für alle n-Kanal-Mosfets gleich. Sind die Größen der einzelnen Mosfets festgelegt, muss man nur noch die Flächen und Randlängen bestimmen; das CAD-Programm ermittelt dann daraus $C_{BS}$ und $C_{BD}$.

Der Gültigkeitsbereich der Gleichungen wird hier auf $U_{B'S'} \leq 0$ und $U_{B'D'} \leq 0$ beschränkt. Für $U_{B'S'} > 0$ und $U_{B'D'} > 0$ werden die pn-Übergänge in Flussrichtung
<!-- page-import:0254:end -->

<!-- page-import:0255:start -->
218  3. Feldeffekttransistor

**Abb. 3.37.**  
Level-1-Mosfet-Modell eines  
n-Kanal-Mosfets

betrieben und man muss zusätzlich zur Sperrschichtkapazität die Diffusionskapazität berücksichtigen, d.h. ein vollständiges Kapazitätsmodell wie bei einer Diode verwenden, siehe Abschnitt 1.3.2 auf Seite 18; dabei tritt als zusätzlicher Parameter die Transit-Zeit $\tau_T$ auf, die zur Bestimmung der Diffusionskapazität benötigt wird. In CAD-Programmen wird für jeden pn-Übergang ein vollständiges Kapazitätsmodell verwendet.

#### 3.3.2.4 Level-1-Mosfet-Modell

Abbildung 3.37 zeigt das vollständige Level-1-Modell eines n-Kanal-Mosfets; es wird in CAD-Programmen zur Schaltungssimulation verwendet. Abbildung 3.38 gibt einen Überblick über die Größen und die Gleichungen des Modells. Die Parameter sind in Abb. 3.39 aufgelistet; zusätzlich sind die Bezeichnungen der Parameter im Schaltungssimulator PSpice 16 angegeben, die weitgehend mit den hier verwendeten Bezeichnungen übereinstimmen, wenn man die folgenden Ersetzungen vornimmt:

Spannung $\rightarrow$ voltage : U $\rightarrow$ V  
Sperrschicht $\rightarrow$ junction : S $\rightarrow$ J  
Überlappung $\rightarrow$ overlap : Ü $\rightarrow$ O  
Rand $\rightarrow$ sidewall : R $\rightarrow$ SW

Es gibt vier verschiedene Parameter-Typen:

- *Prozessparameter* (P): Diese Parameter sind charakteristisch für den MOS-Prozess und für alle n- bzw. p-Kanal-Mosfets in einer integrierten Schaltung gleich.
- *Skalierbare Prozessparameter* (PS): Diese Parameter sind ebenfalls charakteristisch für den MOS-Prozess, werden aber noch entsprechend den geometrischen Daten des jeweiligen Mosfets skaliert.
- *Skalierungsparameter* (S): Dabei handelt es sich um die geometrischen Daten des jeweiligen Mosfets. Aus diesen Parametern werden zusammen mit den skalierbaren

16 PSpice ist ein Produkt der Firma MicroSim.
<!-- page-import:0255:end -->

<!-- page-import:0256:start -->
3.3 Modelle für den Feldeffekttransistor 219

| Größe | Bezeichnung | Gleichung |
|---|---|---|
| $I_D$ | idealer Drainstrom | (3.16) |
| $I_{D,S}$ | Strom der Bulk-Source-Diode | (3.21),(3.23) |
| $I_{D,D}$ | Strom der Bulk-Drain-Diode | (3.22),(3.24) |
| $R_G$ | Gate-Bahnwiderstand |  |
| $R_S$ | Source-Bahnwiderstand | (3.26) |
| $R_D$ | Drain-Bahnwiderstand |  |
| $R_B$ | Bulk-Bahnwiderstand |  |
| $C_{GS}$ | Gate-Source-Kapazität |  |
| $C_{GD}$ | Gate-Drain-Kapazität | (3.31)–(3.36) |
| $C_{GB}$ | Gate-Bulk-Kapazität |  |
| $C_{BS}$ | Bulk-Source-Kapazität | (3.37) bzw. (3.39) |
| $C_{BD}$ | Bulk-Drain-Kapazität | (3.38) bzw. (3.40) |

**Abb. 3.38.**  
Größen des Level-1-Mosfet-Modells

Prozessparametern die effektiven Parameter für den jeweiligen Mosfet bestimmt, z.B. $K=K_n'W/L$.

– *Effektive Parameter (E):* Diese Parameter gelten für einen Mosfet bestimmter Größe.

Abbildung 3.40 zeigt die Parameterwerte eines NMOS- und eines CMOS-Prozesses.

Man kann einige Modell-Größen in skalierbarer *oder* effektiver Form angeben; das ist z.B. bei den Bahnwiderständen der Fall, die man mit $n_{RG}, \ldots, n_{RB}$ und $R_{sh}$ skalierbar oder mit $R_G, \ldots, R_B$ effektiv angeben kann.

Die Oxiddicke $d_{ox}$ geht auch in das dynamische Verhalten ein, da sie zur Bestimmung der Kanalkapazitäten benötigt wird; sie ist aber in Abb. 3.39 nur einmal aufgeführt. Die Parameter $K_n'$ und $\gamma$ müssen nicht angegeben werden, da sie aus $d_{ox}$, $\mu_n$, $U_{inv}$ und $N_{sub}$ berechnet werden können; $U_{inv}$ wiederum kann aus $N_{sub}$ berechnet werden. Bei widersprüchlichen Angaben hat die direkte Angabe Vorrang vor dem berechneten Wert.

#### 3.3.2.5 Einzel-Mosfets

Während beim Bipolartransistor für Einzel- und integrierte Transistoren das nicht skalierbare Gummel-Poon-Modell in gleicher Weise verwendet werden kann, ist das skalierbare Level-1-Mosfet-Modell streng genommen nur für integrierte Mosfets in ihrer einfachsten Form gültig; Einzel-Mosfets, die als vertikale DMOS-Fets ausgeführt sind, und integrierte Mosfets mit Driftstrecke zeigen teilweise ein anderes Verhalten. Es hat sich jedoch gezeigt, dass man diese Mosfets näherungsweise mit dem Level-1-Modell beschreiben kann, wenn man einige Parameter zweckentfremdet; dadurch verlieren diese Parameter ihre ursprüngliche Bedeutung und nehmen zum Teil halbleiter-physikalisch unsinnige Werte an. Abbildung 3.41 enthält die Level-1-Parameter einiger DMOS-Fets. Da Source und Bulk verbunden sind, entfällt der Substrat-Steuerfaktor $\gamma$; außerdem wird die Kanallängenmodulation vernachlässigt, d.h. der Parameter $\lambda$ entfällt.

Werden höhere Anforderungen an die Genauigkeit gestellt, muss ein *Makro-Modell* verwendet werden, das neben dem eigentlichen Mosfet-Modell weitere Bauteile zur Modellierung spezifischer Eigenschaften enthält. Ein Beispiel hierfür ist das in Abb. 3.33b gezeigte statische Ersatzschaltbild eines DMOS-Fets, bei dem ein weiterer Mosfet zur Modellierung des nichtlinearen Drainwiderstands verwendet wird. Ähnliche Erweiterungen werden auch zur Beschreibung des dynamischen Verhaltens eines DMOS-Fets benötigt, ein einheitliches Ersatzschaltbild gibt es aber nicht.
<!-- page-import:0256:end -->

<!-- page-import:0257:start -->
220  3. Feldeffekttransistor

| Parameter | PSpice | Bezeichnung | Typ |
|---|---|---|---|
| Geometrische Daten |  |  |  |
| $W$ | W | Kanalweite | S |
| $L$ | L | Kanallänge | S |
| $A_S$ | AS | Fläche des Source-Gebiets | S |
| $l_S$ | PS | Randlänge des Source-Gebiets | S |
| $A_D$ | AD | Fläche des Drain-Gebiets | S |
| $l_D$ | PD | Randlänge des Drain-Gebiets | S |
| $n_{RG}$ | NRG | Multiplikator für Gate-Bahnwiderstand | S |
| $n_{RS}$ | NRS | Multiplikator für Source-Bahnwiderstand | S |
| $n_{RD}$ | NRD | Multiplikator für Drain-Bahnwiderstand | S |
| $n_{RB}$ | NRB | Multiplikator für Bulk-Bahnwiderstand | S |
| Statisches Verhalten |  |  |  |
| $K_n'$ | KP | relativer Steilheitskoeffizient | PS |
| $U_{th,0}$ | VTO | Null-Schwellenspannung | P |
| $\gamma$ | GAMMA | Substrat-Steuerfaktor | P |
| $\lambda$ | LAMBDA | Kanallängenmodulations-Parameter | P |
| $U_A$ | - | Early-Spannung ($U_A = 1/\lambda$) | P |
| $d_{ox}$ | TOX | Oxiddicke | P |
| $\mu_n$ | UO | Ladungsträger-Beweglichkeit in cm$^2$/Vs | P |
| $U_{inv}$ | PHI | Inversionsspannung | P |
| $N_{sub}$ | NSUB | Substrat-Dotierdichte in cm$^{-3}$ | P |
| $J_S$ | JS | Sperrstromdichte der Bulk-Dioden | PS |
| $J_R$ | JSSW | Randstromdichte der Bulk-Dioden | PS |
| $n$ | N | Emissionskoeffizient der Bulk-Dioden | P |
| $I_{S,S}$ | IS | Sättigungssperrstrom der Bulk-Source-Diode | E |
| $I_{S,D}$ | IS | Sättigungssperrstrom der Bulk-Drain-Diode | E |
| $R_{sh}$ | RSH | Schichtwiderstand | PS |
| $R_G$ | RG | Gate-Bahnwiderstand | E |
| $R_S$ | RS | Source-Bahnwiderstand | E |
| $R_D$ | RD | Drain-Bahnwiderstand | E |
| $R_B$ | RB | Bulk-Bahnwiderstand | E |
| Dynamisches Verhalten |  |  |  |
| $C_S'$ | CJ | Sperrschicht-Kapazitätsbelag | PS |
| $m_S$ | MJ | Kapazitätskoeffizient der Bulk-Dioden | P |
| $U_{Diff}$ | PB | Diffusionsspannung der Bulk-Dioden | P |
| $C_R'$ | CJSW | Rand-Kapazitätsbelag | PS |
| $m_R$ | MJSW | Rand-Kapazitätskoeffizient | P |
| $U_{Diff,R}$ | PBSW | Rand-Diffusionsspannung | P |
| $f_S$ | FC | Koeffizient für den Verlauf der Kapazitäten | P |
| $C_{S0,S}$ | CBS | Null-Kapazität der Bulk-Source-Diode | E |
| $C_{S0,D}$ | CBD | Null-Kapazität der Bulk-Drain-Diode | E |
| $C_{GS,\Ü}'$ | CGSO | Gate-Source-Überlappungskapazität | PS |
| $C_{GD,\Ü}'$ | CGDO | Gate-Drain-Überlappungskapazität | PS |
| $C_{GB,\Ü}'$ | CGBO | Gate-Bulk-Überlappungskapazität | PS |
| $\tau_T$ | TT | Transit-Zeit für Substrat-Dioden | P |
| Auswahl des Modells |  |  |  |
| - | LEVEL | LEVEL=1 wählt das Level-1-Modell aus | - |

**Abb. 3.39.** Parameter des Level-1-Mosfet-Modells
<!-- page-import:0257:end -->

<!-- page-import:0258:start -->
## 3.3 Modelle für den Feldeffekttransistor

221

| Parameter | PSpice | NMOS selbst-sperrend | NMOS selbst-leitend | CMOS n-Kanal | CMOS p-Kanal | Einheit |
|---|---|---:|---:|---:|---:|---|
| $K'_n,\ K'_p$ | KP | 37 | 33 | 69 | 23,5 | $\mu$A/V$^2$ |
| $U_{th,0}$ | VTO | 1,1 | $-3,8$ | 0,73 | $-0,75$ | V |
| $\gamma$ | GAMMA | 0,41 | 0,92 | 0,73 | 0,56 | $\sqrt{\mathrm{V}}$ |
| $\lambda$ | LAMBDA | 0,03 | 0,01 | 0,033 | 0,055 | V$^{-1}$ |
| $U_A$ | - | 33 | 100 | 30 | 18 | V |
| $d_{ox}$ | TOX | 55 | 55 | 25 | 25 | nm |
| $\mu_n$ | UO | 590 | 525 | 500 | 170 | cm$^2$/Vs |
| $U_{inv}$ | PHI | 0,62 | 0,7 | 0,76 | 0,73 | V |
| $N_{sub}$ | NSUB | 0,2 | 1 | 3 | 1,8 | $10^{16}$/cm$^3$ |
| $R_{sh}$ | RSH | 25 | 25 | 25 | 45 | $\Omega$ |
| $C'_S$ | CJ | 110 | 110 | 360 | 340 | $\mu$F/m$^2$ |
| $m_S$ | MJ | 0,5 | 0,5 | 0,4 | 0,5 |  |
| $U_{Diff}$ | PB | 0,8 | 0,8 | 0,9 | 0,9 | V |
| $C'_R$ | CJSW | 500 | 500 | 250 | 220 | pF/m |
| $m_R$ | MJSW | 0,33 | 0,33 | 0,2 | 0,2 |  |
| $U_{Diff,R}$ | PBSW | 0,8 | 0,8 | 0,9 | 0,9 | V |
| $f_S$ | FC | 0,5 | 0,5 | 0,5 | 0,5 |  |
| $C'_{GS,\ddot{U}}$ | CGSO | 160 | 160 | 300 | 300 | pF/m |
| $C'_{GD,\ddot{U}}$ | CGDO | 160 | 160 | 300 | 300 | pF/m |
| $C'_{GB,\ddot{U}}$ | CGBO | 170 | 170 | 150 | 150 | pF/m |

**Abb. 3.40.** Parameter eines NMOS- und eines CMOS-Prozesses

Beim Level-2- und Level-3-Modell werden zwar zum Teil andere Gleichungen verwendet, die Parameter sind jedoch weitgehend gleich; zusätzlich treten folgende Parameter auf [3.3]:

- *Level-2-Modell:* UCRIT, UEXP und VMAX zur Spannungsabhängigkeit der Beweglichkeit und NEFF zur Beschreibung der Kanalladung.
- *Level-3-Modell:* THETA, ETA und KAPPA zur empirischen Modellierung des statischen Verhaltens.
- *Beide Modelle:* DELTA zur Modellierung des Schmal-kanaleffekts und XQC zur Ladungsverteilung im Kanal.

Beide Modelle beschreiben die Kanallängenmodulation mit Hilfe der zusätzlichen Parameter; dadurch entfällt der Kanallängenmodulations-Parameter $\lambda$.

### 3.3.2.6 Sperrschicht-Fet-Modell

Abbildung 3.42 zeigt das Modell eines n-Kanal-Sperrschicht-Fets. Es geht aus dem Level-1-Modell eines n-Kanal-Mosfets durch Weglassen des Gate-Anschlusses und der damit verbundenen Elemente sowie Umbenennen von Bulk in Gate hervor. Die Größen und Gleichungen sind in Abb. 3.43 zusammengefasst. In Abb. 3.44 sind die Parameter aufgelistet.

## 3.3.3 Kleinsignalmodell

Durch Linearisierung in einem Arbeitspunkt erhält man aus dem Level-1-Mosfet-Modell ein lineares *Kleinsignalmodell*. Der Arbeitspunkt wird in der Praxis so gewählt, dass der
<!-- page-import:0258:end -->

<!-- page-import:0259:start -->
222  3. Feldeffekttransistor

| Parameter | PSpice | BSD215 | IRF140 | IRF9140 | Einheit |
|---|---|---:|---:|---:|---|
| $W$ | W | 540 $\mu$ | 0,97 | 1,9 | m |
| $L$ | L | 2 | 2 | 2 | $\mu$m |
| $K_n'$, $K_p'$ | KP | 20,8 | 20,6 | 10,2 | $\mu$A/V$^2$ |
| $U_{th,0}$ | VTO | 0,95 | 3,2 | $-3,7$ | V |
| $d_{ox}$ | TOX | 100 | 100 | 100 | nm |
| $\mu_n$ | UO | 600 | 600 | 300 | cm$^2$/Vs |
| $U_{inv}$ | PHI | 0,6 | 0,6 | 0,6 | V |
| $I_S$ | IS | 125 | 1,3 | $10^{-5}$ | pA |
| $R_G$ | RG | – | 5,6 | 0,8 | $\Omega$ |
| $R_S$ | RS | 0,02 | 0,022 | 0,07 | $\Omega$ |
| $R_D$ | RD | 25 | 0,022 | 0,06 | $\Omega$ |
| $R_B$ | RB | 370 | – | – | $\Omega$ |
| $C_{GS,\ddot{U}}'$ | CGSO | 1,2 | 1100 | 880 | pF/m |
| $C_{GD,\ddot{U}}'$ | CGDO | 1,2 | 430 | 370 | pF/m |
| $C_{S0,D}$ | CBD | 5,35 | 2400 | 2140 | pF |
| $m_S$ | MJ | 0,5 | 0,5 | 0,5 |  |
| $U_{Diff}$ | PB | 0,8 | 0,8 | 0,8 | V |
| $f_S$ | FC | 0,5 | 0,5 | 0,5 |  |
| $\tau_T$ | TT | – | 142 | 140 | ns |

BSD215: n-Kanal-Kleinsignal-Fet  
IRF140: n-Kanal-Leistungs-Fet  
IRF9140: p-Kanal-Leistungs-Fet

**Abb. 3.41.** Parameter einiger DMOS-Fets

Fet im Abschnürbereich arbeitet; die hier behandelten Kleinsignalmodelle sind deshalb nur für diese Betriebsart gültig.

Das *statische Kleinsignalmodell* beschreibt das Kleinsignalverhalten bei niedrigen Frequenzen und wird deshalb auch *Gleichstrom-Kleinsignalersatzschaltbild* genannt. Das *dynamische Kleinsignalmodell* beschreibt zusätzlich das dynamische Kleinsignalverhalten und wird zur Berechnung des Frequenzgangs von Schaltungen benötigt; es wird auch *Wechselstrom-Kleinsignalersatzschaltbild* genannt.

**Abb. 3.42.**  
Modell eines n-Kanal-Sperrschicht-Fets
<!-- page-import:0259:end -->

<!-- page-import:0260:start -->
3.3 Modelle für den Feldeffekttransistor 223

| Größe | Bezeichnung | Gleichung |
|---|---|---|
| $I_D$ | idealer Drainstrom | (3.29) |
| $I_G$ | Gatestrom | (3.30) |
| $R_S$ | Source-Bahnwiderstand |  |
| $R_D$ | Drain-Bahnwiderstand |  |
| $C_{GS}$ | Gate-Source-Kapazität | (3.37) mit $C_{BS} \rightarrow C_{GS}$ |
| $C_{GD}$ | Gate-Drain-Kapazität | (3.38) mit $C_{BD} \rightarrow C_{GD}$ |

**Abb. 3.43.**  
Größen des Sperrschicht-Fet-Modells

#### 3.3.3.1 Statisches Kleinsignalmodell im Abschnürbereich

##### 3.3.3.1.1 Kleinsignalparameter des Level-1-Mosfet-Modells

Aus Abb. 3.37 folgt durch Weglassen der Kapazitäten und Vernachlässigung der Sperrströme ($I_{D,S} = I_{D,D} = 0$) das in Abb. 3.45a gezeigte statische Level-1-Modell; dabei entfallen die Bahnwiderstände $R_G$ und $R_B$, da in den entsprechenden Zweigen kein Strom fließen kann. Durch Linearisierung der Großsignalgleichungen (3.16) und (3.18) in einem Arbeitspunkt A erhält man:

$$
S = \left.\frac{\partial I_D}{\partial U_{G'S'}}\right|_A
= \frac{K_n' W}{L}(U_{G'S',A} - U_{th}) \left(1 + \frac{U_{D'S',A}}{U_A}\right)
$$

$$
S_B = \left.\frac{\partial I_D}{\partial U_{B'S'}}\right|_A
= \left.\frac{\partial I_D}{\partial U_{th}}\right|_A \frac{dU_{th}}{dU_{BS}}
$$

$$
= \frac{\gamma}{2\sqrt{U_{inv} - U_{B'S',A}}} \cdot \frac{K_n' W}{L} (U_{G'S',A} - U_{th}) \left(1 + \frac{U_{D'S',A}}{U_A}\right)
$$

$$
\frac{1}{r_{DS}} = \left.\frac{\partial I_D}{\partial U_{D'S'}}\right|_A
= \frac{1}{U_A} \cdot \frac{K_n' W}{2L}(U_{G'S',A} - U_{th})^2
$$

| Parameter | PSpice | Bezeichnung |
|---|---|---|
| Statisches Verhalten |  |  |
| $\beta$ | BETA | Jfet-Steilheitskoeffizient |
| $U_{th}$ | VTO | Schwellenspannung |
| $\lambda$ | LAMBDA | Kanallängenmodulations-Parameter ($\lambda = 1/U_A$) |
| $I_S$ | IS | Sättigungssperrstrom der Dioden |
| $n$ | N | Emissionskoeffizient der Dioden |
| $R_S$ | RS | Source-Bahnwiderstand |
| $R_D$ | RD | Drain-Bahnwiderstand |
| Dynamisches Verhalten |  |  |
| $C_{S0,S}$ | CGS | Null-Kapazität der Gate-Source-Diode |
| $C_{S0,D}$ | CGD | Null-Kapazität der Gate-Drain-Diode |
| $U_{Diff}$ | PB | Diffusionsspannung der Dioden |
| $m_S$ | M | Kapazitätskoeffizient der Dioden |
| $f_S$ | FC | Koeffizient für den Verlauf der Kapazitäten |

**Abb. 3.44.** Parameter des Sperrschicht-Fet-Modells
<!-- page-import:0260:end -->

<!-- page-import:0261:start -->
224 3. Feldeffekttransistor

a vor der Linearisierung

b nach der Linearisierung

**Abb. 3.45.** Ermittlung des statischen Kleinsignalmodells durch Linearisierung des statischen Level-I-Mosfet-Modells

#### 3.3.3.1.2 Näherungen für die Kleinsignalparameter

Die Kleinsignalparameter $S$, $S_B$ und $r_{DS}$ werden nur in CAD-Programmen nach den obigen Gleichungen ermittelt; für den praktischen Gebrauch werden folgende Näherungen verwendet, die man durch Rücksubstitution von $I_{D,A}$, Bezug von $S_B$ auf $S$, Annahme von $U_{D'S',A} \ll U_A$ und Einsetzen von $K = K_n' W/L$ erhält:

$$
S = \left.\frac{\partial I_D}{\partial U_{G'S'}}\right|_A
= \sqrt{2K\,I_{D,A}\left(1 + \frac{U_{D'S',A}}{U_A}\right)}
\quad \overset{U_{D'S',A}\ll U_A}{\approx} \quad
\sqrt{2K\,I_{D,A}}
\eqno{(3.41)}
$$

$$
S_B = \left.\frac{\partial I_D}{\partial U_{B'S'}}\right|_A
= \frac{\gamma\,S}{2\sqrt{U_{inv}-U_{B'S',A}}}
\eqno{(3.42)}
$$

$$
r_{DS} = \left.\frac{\partial U_{D'S'}}{\partial I_D}\right|_A
= \frac{U_A + U_{D'S',A}}{I_{D,A}}
\quad \overset{U_{D'S',A}\ll U_A}{\approx} \quad
\frac{U_A}{I_{D,A}}
\eqno{(3.43)}
$$

Die Näherungen für $S$ und $r_{DS}$ entsprechen den bereits im Abschnitt 3.1.4 angegebenen Gleichungen (3.11) und (3.12). Als weiterer Kleinsignalparameter tritt die Substrat-Steihleit $S_B$ auf, die nur dann wirksam wird, wenn eine Kleinsignalspannung $u_{BS} \ne 0$ zwischen Source und Bulk auftritt.

#### 3.3.3.1.3 Kleinsignalparameter im Unterschwellbereich

In vielen integrierten CMOS-Schaltungen mit besonders niedriger Stromaufnahme werden die Mosfets im Unterschwellbereich betrieben. In diesem Bereich hängt der Drainstrom $I_D$ nach (3.25) exponentiell von $U_{GS}$ ab; daraus folgt für die Steilheit:

$$
S = \frac{I_{D,A}}{n_U\,U_T}
\qquad \text{für } U_{GS} < U_{th} + 2n_U\,U_T
\eqno{(3.44)}
$$

Die Gleichungen (3.42) und (3.43) für $S_B$ und $r_{DS}$ gelten auch im Unterschwellbereich. Die Grenze zum Unterschwellbereich liegt mit $n_U \approx 2$ bei $U_{GS} \approx U_{th} + 4U_T \approx U_{th} + 100\,\mathrm{mV}$ bzw. $I_D \approx 2K\,(n_U\,U_T)^2 \approx K \cdot 0{,}005\,\mathrm{V}^2$. Die Steilheit verläuft stetig, d.h. (3.41) und (3.44) liefern an der Grenze denselben Wert:

$$
\sqrt{2K\,I_{D,A}}
\;\;\overset{I_{D,A}=2K\,(n_U\,U_T)^2}{=}\;\;
\frac{I_{D,A}}{n_U\,U_T}
$$
<!-- page-import:0261:end -->

<!-- page-import:0262:start -->
3.3 Modelle für den Feldeffekttransistor 225

**Abb. 3.46.**  
Vereinfachtes statisches  
Kleinsignalmodell

#### 3.3.3.1.4 Gleichstrom-Kleinsignalersatzschaltbild

Abbildung 3.45b zeigt das resultierende statische Kleinsignalmodell. Für fast alle praktischen Berechnungen werden die Bahnwiderstände $R_S$ und $R_D$ vernachlässigt; man erhält das in Abb. 3.46 gezeigte Kleinsignalersatzschaltbild, das aus dem bereits im Abschnitt 3.1.4 behandelten Kleinsignalersatzschaltbild durch Hinzufügen der gesteuerten Quelle mit der Substrat-Steilheit $S_B$ hervorgeht.

#### 3.3.3.1.5 Kleinsignalersatzschaltbild für Sperrschicht-Fets

Abbildung 3.46 gilt auch für Sperrschicht-Fets, wenn man die Quelle mit der Substrat-Steilheit entfernt; die Kleinsignalparameter folgen aus (3.29):

$$
S = 2\sqrt{\beta\, I_{D,A}\left(1+\frac{U_{D'S',A}}{U_A}\right)}
\;\;\overset{U_{D'S',A}\ll U_A}{\approx}\;\;
2\sqrt{\beta\, I_{D,A}}
=
\frac{2}{|U_{th}|}\sqrt{I_{D,0}I_{D,A}}
$$

$$
r_{DS}=\frac{U_{D'S',A}+U_A}{I_{D,A}}
\;\;\overset{U_{D'S',A}\ll U_A}{\approx}\;\;
\frac{U_A}{I_{D,A}}
$$

Dabei gilt $I_{D,0}=I_D(U_{GS}=0)=\beta\, U_{th}^2$. Unter Berücksichtigung des Zusammenhangs $K=2\beta$ erhält man dieselben Gleichungen wie beim Mosfet.

#### 3.3.3.2 Dynamisches Kleinsignalmodell im Abschnürbereich

##### 3.3.3.2.1 Vollständiges Modell

Durch Ergänzen der Kanal-, Überlappungs- und Sperrschichtkapazitäten erhält man aus dem statischen Kleinsignalmodell nach Abb. 3.45b das in Abb. 3.47 gezeigte dynamische Kleinsignalmodell im Abschnürbereich; dabei gilt mit Bezug auf Abschnitt 3.3.2:

$$
C_{GS} = C_{GS,K}+C_{GS,\ddot{U}} = \frac{2}{3}\,C_{ox}'\,W\,L + C_{GS,\ddot{U}}'\,W
$$

$$
C_{GD} = C_{GD,\ddot{U}} = C_{GD,\ddot{U}}'\,W
$$

$$
C_{GB} = C_{GB,\ddot{U}} = C_{GB,\ddot{U}}'\,L
$$

$$
C_{BS} = C_{BS}(U_{B'S',A})
$$

$$
C_{BD} = C_{BD}(U_{B'D',A})
\qquad\qquad\qquad\qquad (3.45)
$$

Dabei gilt:

$$
C_{ox}'=\frac{\varepsilon_0\varepsilon_{r,ox}}{d_{ox}}
\qquad\qquad\qquad\qquad (3.46)
$$

Die Gate-Source-Kapazität $C_{GS}$ setzt sich aus der Kanalkapazität im Abschnürbereich und der Gate-Source-Überlappungskapazität zusammen; sie hängt nur von den geometrischen Größen und nicht von den Arbeitspunktspannungen ab, solange der Abschnürbereich
<!-- page-import:0262:end -->

<!-- page-import:0263:start -->
226 3. Feldeffekttransistor

**Abb. 3.47.** Dynamisches Kleinsignalmodell

nicht verlassen wird. Die Gate-Drain-Kapazität $C_{GD}$ und die Gate-Bulk-Kapazitäten $C_{GB}$ sind als reine Überlappungskapazitäten ebenfalls nicht vom Arbeitspunkt abhängig, während die Sperrschichtkapazitäten $C_{BS}$ und $C_{BD}$ von den Arbeitspunktspannungen $U_{B'S',A}$ und $U_{B'D',A}$ abhängen.

#### 3.3.3.2.2 Vereinfachtes Modell

Für praktische Berechnungen werden die Bahnwiderstände $R_S$, $R_D$ und $R_B$ vernachlässigt; der Gate-Widerstand $R_G$ kann nicht vernachlässigt werden, da er zusammen mit $C_{GS}$ einen Tiefpass im Gate-Kreis bildet, der bei der Berechnung des dynamischen Verhaltens der Grundschaltungen berücksichtigt werden muss. Die Gate-Bulk-Kapazität $C_{GB}$ macht sich nur bei Mosfets mit sehr kleiner Kanalweite $W$ bemerkbar und kann deshalb ebenfalls vernachlässigt werden. Damit erhält man das in Abb. 3.48 gezeigte vereinfachte Kleinsignalmodell, das zur Berechnung des Frequenzgangs der Grundschaltungen verwendet wird.

Bei Einzel-Mosfets sind Source und Bulk im allgemeinen verbunden; dadurch entfallen die Quelle mit der Substrat-Steillheit $S_B$ und die Bulk-Source-Kapazität $C_{BS}$; die Bulk-Drain-Kapazität liegt in diesem Fall zwischen Drain und Source und wird in $C_{DS}$ umbenannt. Damit erhält man das in Abb. 3.49a gezeigte Kleinsignalmodell, das weitgehend dem Kleinsignalmodell eines Bipolartransistors entspricht, wie ein Vergleich mit Abb. 3.49b zeigt. Aufgrund dieser Ähnlichkeit kann man die Ergebnisse der Kleinsignalberechnungen übertragen, indem man die entsprechenden Größen austauscht, den Grenzübergang $r_{BE} \rightarrow \infty$ durchführt und

**Abb. 3.48.** Vereinfachtes dynamisches Kleinsignalmodell
<!-- page-import:0263:end -->

<!-- page-import:0264:start -->
3.3 Modelle für den Feldeffekttransistor 227

a Einzel-Mosfet

b Bipolartransistor

**Abb. 3.49.** Dynamisches Kleinsignalmodell eines Einzel-Mosfets im Vergleich zum Bipolartransistor

$$
r_{CE} \doteq \frac{r_{DS}}{1+s\,C_{DS}r_{DS}}
$$

einsetzt$^{17}$. Man kann dieses Modell auch bei integrierten Mosfets anwenden, wenn Source und Bulk im Kleinsignalersatzschaltbild zusammenfallen oder mit der Kleinsignalmasse verbunden sind.

### 3.3.3 Grenzfrequenzen bei Kleinsignalbetrieb

Mit Hilfe des Kleinsignalmodells kann man die Steilheitsgrenzfrequenz $f_{Y21s}$ und die Transitfrequenz $f_T$ berechnen. Da beide Grenzfrequenzen für $U_{BS}=0$ und $U_{DS}=const.$, d.h. $u_{DS}=0$, ermittelt werden, kann man das Kleinsignalmodell aus Abb. 3.49a verwenden und zusätzlich $r_{DS}$ und $C_{DS}$ weglassen.

#### 3.3.3.1 Steilheitsgrenzfrequenz

Das Verhältnis der Laplacetransformierten des Kleinsignalstroms $i_D$ und der Kleinsignalspannung $u_{GS}$ in Sourceschaltung bei Betrieb im Abschnürbereich und konstantem $U_{DS}=U_{DS,A}$ wird Transadmittanz $\underline{y}_{21,s}(s)$ genannt; aus dem in Abb. 3.50a gezeigten Kleinsignalersatzschaltbild folgt

$$
\underline{y}_{21,s}(s)=\frac{i_D}{u_{GS}}=\frac{\mathcal{L}\{i_D\}}{\mathcal{L}\{u_{GS}\}}=\frac{S-s\,C_{GD}}{1+s\,(C_{GS}+C_{GD})\,R_G}
$$

(3.47)

mit der Steilheitsgrenzfrequenz:

$$
\omega_{Y21s}=2\pi\,f_{Y21s}\approx \frac{1}{R_G\,(C_{GS}+C_{GD})}
$$

(3.48)

Die Steilheitsgrenzfrequenz hängt nicht vom Arbeitspunkt ab, solange der Abschnürbereich nicht verlassen wird.

#### 3.3.3.2 Transitfrequenz

Die Transitfrequenz $f_T$ ist die Frequenz, bei der der Betrag der Kleinsignalstromverstärkung bei Betrieb im Abschnürbereich und konstantem $U_{DS}=U_{DS,A}$ auf 1 abgenommen hat:

---

$^{17}$ Bei einer Source- oder Drainschaltung liegt $C_{DS}$ zwischen dem Ausgang der Schaltung und der Kleinsignalmasse und wirkt demnach wie eine kapazitive Last, siehe Abschnitt 3.4.1 bzw. 3.4.2; man kann deshalb alternativ $r_{CE}\doteq r_{DS}$ und $C_L\doteq C_L+C_{DS}$ setzen.
<!-- page-import:0264:end -->

<!-- page-import:0265:start -->
228  3. Feldeffekttransistor

a zur Berechnung der Steilheitsgrenzfrequenz  
b zur Berechnung der Transitfrequenz

**Abb. 3.50.** Kleinsignalersatzschaltbilder zur Berechnung der Grenzfrequenzen

$$
\left.\left|\frac{i_D}{i_G}\right|\right|_{s=j\omega_T}\equiv 1
$$

Aus dem in Abb. 3.50b gezeigten Kleinsignalersatzschaltbild folgt

$$
\frac{i_D}{i_G}=\frac{S-sC_{GD}}{s\left(C_{GS}+C_{GD}\right)}
$$

und damit:

$$
\omega_T=2\pi f_T\approx\frac{S}{C_{GS}+C_{GD}}
$$

(3.49)

Die Transitfrequenz ist proportional zur Steilheit $S$ und nimmt wegen $S\sim\sqrt{I_{D,A}}$ mit zunehmendem Arbeitspunktstrom zu.

#### 3.3.3.3 Zusammenhang und Bedeutung der Grenzfrequenzen

Ein Vergleich der Grenzfrequenzen führt auf folgenden Zusammenhang:

$$
f_T=f_{Y21s}\,sR_G \qquad \overset{sR_G<1}{<}\qquad f_{Y21s}
$$

Steuert man einen Fet in Sourceschaltung mit einer Spannungsquelle oder einer Quelle mit kleinem Innenwiderstand an, spricht man von *Spannungssteuerung*; die Grenzfrequenz der Schaltung wird in diesem Fall durch die Steilheitsgrenzfrequenz $f_{Y21s}$ nach oben begrenzt. Bei Ansteuerung mit einer Stromquelle oder einer Quelle mit einem hohen Innenwiderstand spricht man von *Stromsteuerung*; in diesem Fall wird die Grenzfrequenz der Schaltung durch die *Transitfrequenz* $f_T$ nach oben begrenzt. Man erreicht also bei Spannungssteuerung im allgemeinen eine höhere Bandbreite als bei Stromsteuerung.

#### 3.3.3.4 Bestimmung der Kleinsignalkapazitäten aus den Grenzfrequenzen

Ist im Datenblatt eines Fets die Transitfrequenz $f_T$, die Rückwirkungskapazität $C_{rss}$ (*reverse, grounded source, gate shorted*) und die Ausgangskapazität $C_{oss}$ (*output, grounded source, gate shorted*) angegeben, kann man mit Hilfe von (3.49) die Kapazitäten des Ersatzschaltbilds aus Abb. 3.49a ermitteln:

$$
C_{GS}\approx\frac{S}{\omega_T}-C_{rss}
$$

$$
C_{GD}\approx C_{rss}
$$

$$
C_{DS}\approx C_{oss}-C_{rss}
$$

Ist zusätzlich die Steilheitsgrenzfrequenz $f_{Y21s}$ bekannt, kann man auch den Gatewiderstand bestimmen:
<!-- page-import:0265:end -->

<!-- page-import:0266:start -->
3.3 Modelle für den Feldeffekttransistor 229

| Param.       | Bezeichnung               | Bestimmung                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------ | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $(K)$        | Steilheits- koeffizient   | aus der Übertragungskennlinie bei kleinen Strömen (hier macht sich $R_S$ noch nicht bemerkbar):  $$K \;=\; \frac{2I_D}{(U_{GS}-U_{th})^2} \qquad \overset{\text{Jfet: }U_{GS}=0}{=} \qquad \frac{2I_{D,0}}{U_{th}^2}$$ oder aus dem Verlauf der Steilheit:  $$K \;=\; \frac{S}{U_{GS}-U_{th}}$$ oder aus einem Wertepaar $(I_D,S)$:  $$K \;=\; \frac{S^2}{2I_D}$$                                       |
| $S$          | Steilheit                 | $$S \;=\; \sqrt{2K\,I_{D,A}} \;=\; \frac{2}{                                                                                                                                                                                                                                                                                                                      \| U_{th} \| }\sqrt{I_{D,0}I_{D,A}}$$ |
| $(U_A)$      | Early-Spannung            | aus der Steigung der Kennlinien im Ausgangskennlinienfeld (Abb. 3.12) oder sinnvolle Annahme $(U_A \approx 20\ldots 200\,\mathrm{V})$                                                                                                                                                                                                                                                                   |
| $r_{DS}$     | Ausgangs- widerstand      | $$r_{DS} \;=\; \frac{U_A}{I_{D,A}}$$                                                                                                                                                                                                                                                                                                                                                                    |
| $(f_T)$      | Transitfrequenz           | aus Datenblatt                                                                                                                                                                                                                                                                                                                                                                                          |
| $(f_{Y21s})$ | Steilheits- grenzfrequenz | aus Datenblatt                                                                                                                                                                                                                                                                                                                                                                                          |
| $R_G$        | Gate-Bahn- widerstand     | $$R_G \;=\; \frac{f_T}{S f_{Y21s}}$$ oder sinnvolle Annahme $(R_G \approx 1\ldots 100\,\Omega)$                                                                                                                                                                                                                                                                                                         |
| $C_{GD}$     | Gate-Drain- Kapazität     | aus Datenblatt: $C_{GD} \approx C_{rss}$                                                                                                                                                                                                                                                                                                                                                                |
| $C_{GS}$     | Gate-Source- Kapazität    | $$C_{GS} \approx \frac{S}{2\pi\,f_T} - C_{GD}$$                                                                                                                                                                                                                                                                                                                                                         |
| $C_{DS}$     | Drain-Source- Kapazität   | aus Datenblatt: $C_{DS} \approx C_{oss} - C_{rss}$                                                                                                                                                                                                                                                                                                                                                      |

**Abb. 3.51.** Ermittlung der Kleinsignalparameter bei einem Einzel-Fet  
(Hilfsgrößen in Klammern)

$$R_G \;=\; \frac{f_T}{S f_{Y21s}}$$

#### 3.3.3.4 Zusammenfassung der Kleinsignalparameter

Bei Einzel-Fets kann man die Parameter des in Abb. 3.49a gezeigten Kleinsignalmodells gemäß Abb. 3.51 aus dem Drainstrom $I_{D,A}$ im Arbeitspunkt und Datenblattangaben bestimmen. Oft sind auch die $Y$-Parameter in Sourceschaltung angegeben; für $\omega \ll \omega_{Y21s}$ kann man $R_G$ vernachlässigen und erhält:
<!-- page-import:0266:end -->

<!-- page-import:0268:start -->
## 3.3 Modelle für den Feldeffekttransistor

231

| Param. | Bezeichnung | Bestimmung |
|---|---|---|
| $(d_{ox}, W, L,$<br>$A_S, A_D)$ | geometrische Größen | Oxiddicke, Kanalweite, Kanallänge,<br>Fläche des Source- bzw. Drain-Gebiets |
| $(C_{ox})$ | Oxidkapazität | $C_{ox} = \dfrac{\varepsilon_0 \varepsilon_{r,ox}\, W\, L}{d_{ox}} \approx 3{,}45 \cdot 10^{-11}\ \dfrac{\mathrm{F}}{\mathrm{m}^2}\ \dfrac{W\, L}{d_{ox}}$ |
| $(K)$ | Steilheits-<br>koeffizient | $K = K_n' \dfrac{W}{L} = \mu_n C_{ox}' \dfrac{W}{L};\ \text{p-Kanal:}\ K_p', \mu_p$ |
| $S$ | Steilheit | $S = \sqrt{2K\, I_{D,A}}$ |
| $S_B$ | Substrat-Steileit | $S_B = \dfrac{\gamma\, S}{2\sqrt{U_{inv} - U_{BS,A}}}$ |
| $r_{DS}$ | Ausgangs-<br>widerstand | $r_{DS} = \dfrac{U_A}{I_{D,A}} = \dfrac{1}{\lambda I_{D,A}}$ |
| $R_G$ | Gate-Bahn-<br>widerstand | aus der Geometrie: $R_G = n_{RG} R_{sh}$<br>oder sinnvolle Annahme $(R_G \approx 1 \dots 100\,\Omega)$ |
| $C_{GS}$ | Gate-Source-<br>Kapazität | $C_{GS} = \dfrac{2}{3}\, C_{ox} + C_{GS,\ddot{U}}' W \approx \dfrac{2}{3}\, C_{ox}$ |
| $C_{GD}$ | Gate-Drain-<br>Kapazität | $C_{GD} = C_{GD,\ddot{U}}' W$ |
| $C_{BS}, C_{BD}$ | Bulk-Kapazitäten | $C_{BS} \approx C_S' A_S\ \text{bzw.}\ C_{BD} \approx C_S' A_D$ |

**Abb. 3.52.** Ermittlung der Kleinsignalparameter bei einem integrierten Mosfet  
(Hilfsgrößen in Klammern)

- Thermisches Rauschen und 1/f-Rauschen des Kanals mit der Rauschstromdichte:

$$
|i_{D,r}(f)|^2 = 4kT\, S\, k_{D,r} + \frac{k_{(1/f)} I_{D,A}^{\gamma(1/f)}}{f}
= 4kT\, S\, k_{D,r}\left(1 + \frac{f_{g(1/f)}}{f}\right)
$$

Der thermische Anteil weicht um den *Drain-Rauschfaktor* $k_{D,r}$ vom thermischen Rauschen eines entsprechenden ohmschen Widerstands $R = 1/S$ ab, da der Kanal im Abschnürbereich weder homogen noch im thermischen Gleichgewicht ist. Bei Fets mit langem Kanal $(L > 1\,\mu\mathrm{m})$ gilt $k_{D,r} \approx 2/3$. Mit abnehmender Kanallänge nimmt $k_{D,r}$ zu und steigt bei Mosfets mit $L \approx 100\,\mathrm{nm}$ auf $k_{D,r} \approx 1$ an. Zusätzlich tritt 1/f-Rauschen mit den empirischen Parametern $k_{(1/f)}$ und $\gamma_{(1/f)} \approx 1$ auf. Bei niedrigen Frequenzen dominiert der 1/f-Anteil, bei mittleren und hohen Frequenzen der thermische Anteil. Durch Gleichsetzen der Anteile erhält man die 1/f-Grenzfrequenz:

$$
f_{g(1/f)} = \frac{1}{4k_{D,r}} \frac{k_{(1/f)} I_{D,A}^{(\gamma(1/f)-1/2)}}{kT\sqrt{K}}
\overset{\gamma_{(1/f)}=1}{=} \frac{1}{4k_{D,r}} \frac{k_{(1/f)}}{kT} \sqrt{\frac{I_{D,A}}{K}}
$$

Sie nimmt mit zunehmendem Arbeitspunktstrom zu. Beim Mosfet gilt näherungsweise $k_{(1/f)} \sim 1/L^2$, d.h. das 1/f-Rauschen nimmt mit zunehmender Kanallänge ab. Da Mosfets in integrierten Schaltungen entsprechend dem Strom im Arbeitspunkt skaliert werden $(I_{D,A} \sim K \sim W/L)$, folgt, dass bei gleichem Strom bzw. gleicher Steilheit
<!-- page-import:0268:end -->

<!-- page-import:0269:start -->
232 3. Feldeffekttransistor

**Abb. 3.53.** Kleinsignalmodell eines Fets mit den ursprünglichen (oben) und mit den äquivalenten Rauschquellen (unten)

ein großer Mosfet weniger 1/f-Rauschen aufweist als ein kleiner. Typische Werte sind $f_g(1/f) \approx 100\,\mathrm{kHz}\dots 10\,\mathrm{MHz}$ bei Mosfets und $f_g(1/f) \approx 10\,\mathrm{Hz}\dots 1\,\mathrm{kHz}$ bei Sperrschicht-Fets.

– Induziertes Gate-Rauschen mit der Rauschstromdichte:

$$
|i_{G,r}(f)|^2 = 4kTS\,k_{G,r}\left(\frac{f}{f_T}\right)^2
$$

Für den Gate-Rauschfaktor $k_{G,r}$ existieren stark unterschiedliche Angaben. Bei Fets mit langem Kanal $(L > 1\,\mu\mathrm{m})$ gilt $k_{G,r} \approx 4/15$. Mit abnehmender Kanallänge nimmt $k_{G,r}$ zu. Der Faktor hängt auch vom Arbeitspunkt ab und steigt bei Mosfets mit $L \approx 100\,\mathrm{nm}$ und hohen Stromdichten auf bis zu $k_{G,r} \approx 1/2$ an. Dieser Rauschstrom wird ebenfalls durch das thermische Rauschen des Kanals verursacht, das durch die kapazitive Kopplung zwischen Gate und Kanal auf das Gate übertragen wird. Die Rauschstromquellen $i_{G,r}$ und $i_{D,r}$ sind deshalb nicht unabhängig, sondern korreliert. Für die Kreuzrauschdichte gilt

$$
i_{G,r}(f)\,i_{D,r}^*(f) = j4kTS\,c_{GD,r}\sqrt{k_{G,r}k_{D,r}}\,\frac{f}{f_T}
$$

mit dem Gate-Drain-Rauschkorrelationsfaktor $c_{GD,r} \approx 0{,}4$.

Abbildung 3.53 zeigt im oberen Teil das Kleinsignalmodell mit den Rauschquellen $u_{RG,r}$, $i_{G,r}$ und $i_{D,r}$.

#### 3.3.4.2 Äquivalente Rauschquellen

Zur einfacheren Berechnung des Rauschens einer Schaltung werden die Rauschquellen auf die Gate-Source-Strecke umgerechnet. Man erhält das in Abb. 3.53 im unteren Teil gezeigte Kleinsignalmodell, bei dem die ursprünglichen Rauschquellen durch eine äquivalente
<!-- page-import:0269:end -->

<!-- page-import:0270:start -->
3.3 Modelle für den Feldeffekttransistor 233

*Rauschspannungsquelle* $u_{r,0}$ und eine *äquivalente Rauschstromquelle* $i_{r,0}$ repräsentiert werden; der eigentliche Transistor ist dann rauschfrei.

#### 3.3.4.2.1 Berechnung der Rauschdichten

Zur Bestimmung der äquivalenten Rauschquellen vergleicht man die beiden Kleinsignalmodelle in Abb. 3.53 bei Kurzschluss und bei Leerlauf am Eingang. Bei Kurzschluss wird nur die äquivalente Rauschspannungsquelle $u_{r,0}$ wirksam und man erhält den Zusammenhang

$$
u_{r,0}(s)=u_{RG,r}(s)+R_G\,i_{G,r}(s)+\frac{i_{D,r}(s)}{y_{21,s}(s)}
$$

mit der Transadmittanz $y_{21,s}(s)$ aus (3.47). Da die Steilheitsgrenzfrequenz $f_{y21s}$ größer ist als die Transitfrequenz $f_T$, kann man die Näherung

$$
y_{21,s}(s)\approx S
$$

verwenden. Bei Leerlauf wird nur die äquivalente Rauschstromquelle $i_{r,0}$ wirksam und man erhält den Zusammenhang:

$$
i_{r,0}(s)=i_{B,r}(s)+i_{C,r}(s)\,\frac{s}{\omega_T}
$$

#### 3.3.4.2.2 Äquivalente Rauschdichten

Bei der Berechnung der Rauschdichten muss die Korrelation zwischen $i_{G,r}$ und $i_{D,r}$ berücksichtigt werden. Wir verzichten auf eine Wiedergabe der umfangreichen Berechnung und geben hier nur die Ergebnisse an:

$$
|u_{r,0}(f)|^2=4kT\left[\frac{k_{D,r}}{S}\left(1+\frac{f_{g(1/f)}}{f}\right)+R_G+SR_G^2k_{G,r}\left(\frac{f}{f_T}\right)^2\right]
$$

$$
|i_{r,0}(f)|^2=4kTS\left(k_{G,r}+k_{D,r}+2c_{GD,r}\sqrt{k_{G,r}k_{D,r}}\right)\left(\frac{f}{f_T}\right)^2
$$

$$
u_{r,0}(f)\,i_{r,0}^{*}(f)=4kT\left[S R_G\left(k_{G,r}+c_{GD,r}\sqrt{k_{G,r}k_{D,r}}\right)\left(\frac{f}{f_T}\right)^2\right.
$$

$$
\left.-j\left(k_{D,r}+c_{GD,r}\sqrt{k_{G,r}k_{D,r}}\right)\frac{f}{f_T}\right]
$$

Wenn man Zahlenwerte für die Rauschfaktoren $k_{G,r}$, $k_{D,r}$ und $c_{GD,r}$ einsetzt, werden die Gleichungen sehr übersichtlich.

Bei Niederfrequenzanwendungen kann man den Einfluss des Gate-Widerstands $R_G$ vernachlässigen; dann gilt:

$$
|u_{r,0}(f)|^2=\frac{4kT\,k_{D,r}}{S}\left(1+\frac{f_{g(1/f)}}{f}\right)
\qquad (3.50)
$$

$$
|i_{r,0}(f)|^2=4kTS\left(k_{G,r}+k_{D,r}+2c_{GD,r}\sqrt{k_{G,r}k_{D,r}}\right)\left(\frac{f}{f_T}\right)^2
\qquad (3.51)
$$

$$
u_{r,0}(f)\,i_{r,0}^{*}(f)=-j\,4kT\left(k_{D,r}+c_{GD,r}\sqrt{k_{G,r}k_{D,r}}\right)\frac{f}{f_T}
\qquad (3.52)
$$
<!-- page-import:0270:end -->

<!-- page-import:0271:start -->
234  3. Feldeffekttransistor

.

Die Rauschspannungsdichte $|\underline{u}_{r,0}(f)|^2$ ist umgekehrt proportional zur Steilheit $S$; mit $S = \sqrt{2K\,I_{D,A}}$ folgt $|\underline{u}_{r,0}(f)|^2 \sim 1/\sqrt{I_{D,A}}$. Für die Rauschstromdichte gilt $|\underline{i}_{r,0}(f)|^2 \sim S \sim \sqrt{I_{D,A}}$. Es gibt keinen Bereich mit weißem Rauschen, da die Rauschstromdichte $|\underline{i}_{r,0}(f)|^2$ proportional zum Quadrat der Frequenz ist. Außerdem sind die äquivalenten Rauschquellen auch bei niedrigen Frequenzen korreliert.

#### 3.3.4.3 Ersatzrauschquelle und Rauschzahl

##### 3.3.4.3.1 Betrieb mit einem reellen Innenwiderstand

Zur Berechnung der Rauschzahl wird der Fet gemäß Abb. 2.49 auf Seite 91 mit einem Referenz-Signalgenerator mit dem Innenwiderstand $R_g$ und der thermischen Rauschspannungsdichte $|\underline{u}_{r,g}(f)|^2 = 4kT_0R_g$ betrieben. Bei der Zusammenfassung der Rauschquellen zur Ersatzrauschquelle $u_r$, muss man die Korrelation der äquivalenten Rauschquellen des Fets berücksichtigen; es gilt $^{19}$:

$$
|\underline{u}_r(f)|^2 = |\underline{u}_{r,g}(f)|^2 + |\underline{u}_{r,0}(f) + R_g\,\underline{i}_{r,0}(f)|^2
$$

$$
= |\underline{u}_{r,g}(f)|^2 + |\underline{u}_{r,0}(f)|^2 + 2\,\mathrm{Re}\left\{R_g\,\underline{u}_{r,0}(f)\,\underline{i}_{r,0}^*(f)\right\} + R_g^2\,|\underline{i}_{r,0}(f)|^2
$$

$$
= 0
$$

Im Vergleich zu (2.61) wird hier zusätzlich die Kreuzrauschdichte $\underline{u}_{r,0}(f)\,\underline{i}_{r,0}^*(f)$ wirksam; sie liefert aber in Verbindung mit einem reellen Innenwiderstand $R_g$ keinen Beitrag, da das Produkt rein imaginär ist und durch die Realteil-Bildung entfällt. Demnach kann man die Korrelation vernachlässigen, wenn man sich auf reelle Innenwiderstände beschränkt. Damit folgt für die spektrale Rauschzahl $F(f)$ mit

$$
F(f) = \frac{|\underline{u}_r(f)|^2}{|\underline{u}_{r,g}(f)|^2}
= 1 + \frac{|\underline{u}_{r,0}(f)|^2 + R_g^2\,|\underline{i}_{r,0}(f)|^2}{4kT_0R_g}
\qquad\qquad (3.53)
$$

derselbe Zusammenhang wie bei einem Bipolartransistor, siehe (2.63) auf Seite 92.

##### 3.3.4.3.2 Betrieb mit einer komplexen Quellenimpedanz

Die Kreuzrauschdichte wirkt sich erst aus, wenn man den Innenwiderstand $R_g$ durch eine komplexe Quellenimpedanz $Z_g = R_g + j\,X_g$ ersetzt; in diesem Fall gilt:

$$
|\underline{u}_r(f)|^2 = |\underline{u}_{r,g}(f)|^2 + |\underline{u}_{r,0}(f) + Z_g\,\underline{i}_{r,0}(f)|^2
$$

$$
= |\underline{u}_{r,g}(f)|^2 + |\underline{u}_{r,0}(f)|^2 + 2\,\mathrm{Re}\left\{\underline{u}_{r,0}(f)\,\underline{i}_{r,0}^*(f)\,Z_g^*\right\} + |Z_g|^2\,|\underline{i}_{r,0}(f)|^2
$$

Dadurch erhält man zwei zusätzliche Terme:

$$
|\underline{u}_r(f)|^2 = \ldots\ldots + 2X_g\,\mathrm{Im}\left[\underline{u}_{r,0}(f)\,\underline{i}_{r,0}^*(f)\right] + X_g^2\,|\underline{i}_{r,0}(f)|^2
$$

Da der Imaginärteil der Kreuzrauschdichte negativ ist, nimmt die Summe dieser Terme für

$$
0 < X_g < - \frac{\mathrm{Im}\left\{\underline{u}_{r,0}(f)\,\underline{i}_{r,0}^*(f)\right\}}{|\underline{i}_{r,0}(f)|^2} > 0
$$

$^{19}$ Für zwei komplexe Werte $a$ und $b$ gilt:

$$
|a+b|^2 = (a+b)(a+b)^* = aa^* + ab^* + a^*b + bb^* = |a|^2 + 2\mathrm{Re}\{ab^*\} + |b|^2
$$

Für den reellen Innenwiderstand $R_g$ gilt $R_g^* = R_g$ und $|R_g|^2 = R_g^2$.
<!-- page-import:0271:end -->

<!-- page-import:0272:start -->
235

# 3.3 Modelle für den Feldeffekttransistor

negative Werte an; dadurch nimmt die Rauschzahl ab. Die optimale Quellenimpedanz $Z_{g,opt}$ ist demnach auch bei niedrigen Frequenzen nicht ohmsch, sondern ohmsch-induktiv ($X_g > 0$). Bei Hochfrequenz-Anwendungen nutzt man diese Eigenschaft aus, um durch eine *Rauschanpassung* eine geringere Rauschzahl zu erzielen.

#### 3.3.4.3.3 Wichtige Aussagen zur Korrelation

Wir wollen mit dieser ausführlichen Darstellung Klarheit bezüglich der Korrelation der Rauschquellen eines Feldeffekttransistors schaffen und halten deshalb fest:

- Die primären Rauschquellen $i_{D,r}$ und $i_{G,r}$ sind für alle Frequenzen korreliert.
- Die äquivalenten Rauschquellen $u_{r,0}$ und $i_{r,0}$ sind ebenfalls für alle Frequenzen korreliert.
- Die Korrelation der äquivalenten Rauschquellen ist keine Folge der Korrelation der primären Rauschquellen. Die äquivalenten Rauschquellen sind auch dann korreliert, wenn die primären Rauschquellen nicht korreliert sind. Man erkennt dies in (3.52): auch mit $c_{GD,r} = 0$ gilt $u_{r,0}(f)\, i_{r,0}^*(f) \neq 0$.
- Bei reellen Innenwiderständen $R_g$ wirkt sich die Korrelation der äquivalenten Rauschquellen nicht aus.
- Die minimale Rauschzahl wird auch bei niedrigen Frequenzen nicht mit einer ohmschen, sondern mit einer ohmsch-induktiven Quellenimpedanz erzielt. In diesem Punkt unterscheidet sich der Feldeffekttransistor grundsätzlich vom Bipolartransistor, bei dem die optimale Quellenimpedanz bei niedrigen Frequenzen reell ist.

#### 3.3.4.4 Rauschzahl eines Fets

##### 3.3.4.4.1 Betrieb mit einem reellen Innenwiderstand

Setzt man (3.50) und (3.51) in (3.53) ein, erhält man

$$
F(f) = 1 + \frac{k_{D,r}}{S R_g}\left(1 + \frac{f_{g(1/f)}}{f}\right) + S R_g k_{l,r}\left(\frac{f}{f_T}\right)^2
$$

(3.54)

mit:

$$
k_{l,r} = k_{G,r} + k_{D,r} + 2c_{GD,r}\sqrt{k_{G,r}k_{D,r}}
$$

Für Fets mit großer Kanallänge gilt $k_{D,r} \approx 2/3$ und $k_{l,r} \approx 1,3 \approx 2k_{D,r}$. Abbildung 3.54 zeigt den Verlauf der Rauschzahl eines Mosfets für $R_g = 1\,\mathrm{k}\Omega$ und $R_g = 1\,\mathrm{M}\Omega$; man erkennt drei Bereiche:

- Bei mittleren Frequenzen ist die Rauschzahl näherungsweise konstant:

$$
F \approx 1 + \frac{k_{D,r}}{S R_g} \overset{R_g \gg 1/S}{\approx} 1
$$

(3.55)

Wenn der Innenwiderstand groß gegenüber dem Kehrwert der Steilheit ist, erreicht man in diesem Bereich die optimale Rauschzahl $F = 1$.

- Bei niedrigen Frequenzen dominiert das 1/f-Rauschen; die Rauschzahl ist in diesem Bereich umgekehrt proportional zur Frequenz:

$$
F(f) \approx \frac{k_{D,r}}{S R_g}\frac{f_{g(1/f)}}{f}
$$
<!-- page-import:0272:end -->

<!-- page-import:0273:start -->
236  3. Feldeffekttransistor

**Abb. 3.54.** Verlauf der Rauschzahl bei einem Mosfet mit $S = 1\,\mathrm{mA/V}$, $f_T = 100\,\mathrm{MHz}$ und $f_g(1/f) = 1\,\mathrm{MHz}$ für $R_g = 1\,\mathrm{k\Omega}$ und $R_g = 1\,\mathrm{M\Omega}$

Die Grenze zum Bereich mittlerer Frequenzen liegt bei:

$$
f_1 = \frac{k_{D,r}\,f_g(1/f)}{k_{D,r}+SR_g}
\qquad
\overset{R_g \gg 1/S}{\approx}
\qquad
\frac{k_{D,r}\,f_g(1/f)}{SR_g}
$$

Die Rauschzahl und die Grenzfrequenz $f_1$ sind umgekehrt proportional zum Innenwiderstand $R_g$; deshalb nimmt der 1/f-Anteil in der Rauschzahl mit zunehmendem Innenwiderstand ab, siehe Abb. 3.54.

– Bei hohen Frequenzen nimmt die Rauschzahl proportional zum Quadrat der Frequenz zu:

$$
F(f) \approx SR_g k_{I,r}\left(\frac{f}{f_T}\right)^2
$$

Die Grenze zum Bereich mittlerer Frequenzen liegt bei:

$$
f_2 = \frac{f_T}{SR_g}\sqrt{\frac{k_{D,r}+SR_g}{k_{I,r}}}
\qquad
\overset{R_g \gg 1/S}{\approx}
\qquad
\frac{f_T}{\sqrt{SR_g k_{I,r}}}
$$

Die Rauschzahl nimmt mit zunehmendem Quellenwiderstand $R_g$ zu, die Grenzfrequenz $f_2$ entsprechend ab, siehe Abb. 3.54.

Bei Jfets ist die 1/f-Grenzfrequenz und damit auch der 1/f-Anteil in der Rauschzahl um $3\dots4$ Zehnerpotenzen kleiner als bei Mosfets; deshalb macht sich der 1/f-Anteil bei Innenwiderständen im M$\Omega$-Bereich praktisch nicht mehr bemerkbar, weil die Grenzfrequenz $f_1$ in diesem Fall kleiner als 1 Hz wird.

Die Rauschzahl wird unter bestimmten Bedingungen minimal. Ist der Innenwiderstand $R_g$ vorgegeben, kann man die optimale Steilheit und den optimalen Drainstrom im Arbeitspunkt durch Auswerten von $\partial F/\partial S = 0$ ermitteln. Dabei muss berücksichtigt werden, dass die Transitfrequenz $f_T$ nach (3.49) proportional zur Steilheit ist: $f_T = S/(2\pi C)$ mit $C = C_{GS} + C_{GD}$; durch Einsetzen erhält man:

$$
F(f) = 1 + \frac{1}{S}\left[\frac{k_{D,r}}{R_g}\left(1+\frac{f_g(1/f)}{f}\right) + (2\pi f C)^2 R_g k_{I,r}\right]
$$
<!-- page-import:0273:end -->

<!-- page-import:0274:start -->
3.3 Modelle für den Feldeffekttransistor 237

Man erkennt, dass $F(f)$ mit zunehmender Steilheit abnimmt; demnach müssen rauscharme Fet-Verstärker unabhängig vom Innenwiderstand $R_g$ mit großen Steilheiten bzw. großen Arbeitspunktströmen betrieben werden. Bei sehr hohen Stromdichten nehmen jedoch auch die Rauschfaktoren $k_{D,r}$ und $k_{1,r}$ zu, so dass die Rauschzahl oberhalb eines optimalen Arbeitspunktstroms wieder ansteigt. Dieses Optimum hängt von der Technologie ab.

Für den optimalen Innenwiderstand $R_{gopt}$ erhält man aus der Bedingung $\partial\, F / \partial\, R_g = 0$:

$$
R_{gopt}(f) = \frac{f_T}{S f}\sqrt{\frac{k_{D,r}}{k_{1,r}}\left(1+\frac{f_{g(1/f)}}{f}\right)}
$$

Eine breitbandige Anpassung ist wegen der Frequenzabhängigkeit von $R_{gopt}$ nicht möglich. Durch Einsetzen von $R_{gopt}(f)$ in $F(f)$ erhält man die optimale spektrale Rauschzahl $F_{opt}(f)$:

$$
F_{opt}(f) = 1 + 2\frac{f}{f_T}\sqrt{k_{D,r}\,k_{1,r}\left(1+\frac{f_{g(1/f)}}{f}\right)}
\qquad
f_{g(1/f)} \ll f \ll f_T
\qquad
\approx \qquad 1
$$

Mit den typischen Werten $k_{D,r} \approx 2/3$ und $k_{1,r} \approx 2k_{D,r}$ für Fets mit großer Kanallänge erhält man:

$$
R_{gopt}(f) \approx \frac{f_T}{\sqrt{2}S f}\sqrt{1+\frac{f_{g(1/f)}}{f}}
,\qquad
F_{opt}(f) \approx 1 + 2\frac{f}{f_T}\sqrt{1+\frac{f_{g(1/f)}}{f}}
$$

Bei einer Betriebsfrequenz $f = f_T/5 \gg f_{g(1/f)}$ erhält man mit $F_{opt} \approx 1{,}4 \approx 1{,}5\,\mathrm{dB}$ immer noch eine sehr geringe Rauschzahl.

#### 3.3.4.4.2 Betrieb mit einer komplexen Quellenimpedanz

Da komplexe Quellenimpedanzen meist nur bei Hochfrequenz-Anwendungen auftreten, kann man $f \gg f_{g(1/f)}$ voraussetzen und das 1/f-Rauschen vernachlässigen; dann erhält man mit einer komplexen Quellenimpedanz $Z_g = R_g + jX_g$

$$
F(f) = 1 + \frac{k_{D,r}}{S R_g} - \frac{2k_{C,r}X_g\,f}{R_g f_T} + S R_g k_{1,r}\left(1+\frac{X_g^2}{R_g^2}\right)\left(\frac{f}{f_T}\right)^2
$$

mit:

$$
k_{1,r} = k_{G,r} + k_{D,r} + 2c_{GD,r}\sqrt{k_{G,r}k_{D,r}}
$$

$$
k_{C,r} = k_{D,r} + c_{GD,r}\sqrt{k_{G,r}k_{D,r}}
$$

Für $X_g = 0$ erhält man die Rauschzahl für einen ohmschen Innenwiderstand, siehe (3.54). Für $X_g > 0$ nimmt die Rauschzahl aufgrund des negativen Terms zunächst ab, bis sie durch den Anteil mit $X_g^2$ im letzten Term wieder zunimmt; für

$$
X_{gopt}(f) = \frac{k_{C,r}f_T}{k_{1,r}Sf}
$$

nimmt die Rauschzahl ein lokales Minimum an. Durch Einsetzen von $X_{gopt}$ und Auswerten von $\partial\, F / \partial\, R_g$ erhält man das globale Minimum mit:
<!-- page-import:0274:end -->

<!-- page-import:0275:start -->
238 3. Feldeffekttransistor

$$
Z_{g,opt}(f) = \frac{f_T}{k_{I,r}Sf}\left(\sqrt{k_{D,r}k_{G,r}\left(1-c_{GD,r}^2\right)} + jk_{C,r}\right) \approx \frac{f_T}{Sf}\,(0{,}3 + j0{,}66)
$$

(3.56)

$$
F_{opt}(f) = 1 + \frac{2f}{f_T}\sqrt{k_{D,r}k_{G,r}\left(1-c_{GD,r}^2\right)} \approx 1 + 0{,}8\,\frac{f}{f_T}
$$

(3.57)

Die Näherungen gelten für Fets mit großer Kanallänge $(k_{D,r} \approx 2/3, k_{G,r} \approx 4/15, c_{GD,r} \approx 0{,}4, k_{I,r} \approx 1{,}27, k_{C,r} \approx 0{,}84)$. Die optimale Quellenimpedanz $Z_{g,opt}$ hat unabhängig von der Frequenz immer denselben Winkel, da das Verhältnis von Real- und Imaginärteil konstant ist. Für $f = f_T/5$ erhält man $F_{opt} \approx 1{,}16 \approx 0{,}6\,\mathrm{dB}$ im Vergleich zu $F_{opt} \approx 1{,}5\,\mathrm{dB}$ bei Betrieb mit einem reellen Innenwiderstand.

## 3.3.4.5 Vergleich der Rauschzahlen von Fet und Bipolartransistor

Bei hochohmigen Quellen und mittleren Frequenzen erreicht ein Fet praktisch die ideale Rauschzahl $F = 1$. Auch das hohe 1/f-Rauschen eines Mosfets macht sich bei hochohmigen Quellen nur vergleichsweise wenig bemerkbar, weil in diesem Fall das induzierte Gate-Rauschen dominiert und den 1/f-Anteil des Kanal-Rauschens verdeckt; das Beispiel in Abb. 3.54 zeigt dies deutlich: obwohl die 1/f-Grenzfrequenz bei 1 MHz liegt, setzt der 1/f-Bereich bei der Rauschzahl für $R_g = 1\,\mathrm{M}\Omega$ erst unter 1 kHz ein. Bei Jfets wird das 1/f-Rauschen in diesem Fall praktisch bedeutungslos. Aufgrund dieser Eigenschaften ist der Fet bei hochohmigen Quellen dem Bipolartransistor deutlich überlegen. Deshalb wird in Verstärkern für hochohmige Quellen, z.B. in Empfängern für Fotodioden, ein Fet in der Eingangsstufe verwendet; dabei verwendet man wegen des geringeren 1/f-Rauschens bevorzugt Jfets.

Bei niederohmigen Quellen ist die Rauschzahl eines Fets größer als die eines Bipolartransistors; außerdem ist die Maximalverstärkung viel kleiner. Eine niedrige Rauschzahl erfordert nach (3.55) eine große Steilheit und damit einen entsprechend großen Arbeitspunktstrom; da die Steilheit beim Fet nur proportional zur Wurzel des Arbeitspunktstroms zunimmt, ist eine Rauschzahlreduzierung auf diesem Wege ineffektiv. Beim Mosfet kommt das hohe 1/f-Rauschen bei niederohmigen Quellen voll zum tragen und führt zu einer starken Zunahme der Rauschzahl bei niedrigen Frequenzen, siehe Abb. 3.54.

# 3.4 Grundschaltungen

Es gibt drei Grundschaltungen, in denen ein Fet betrieben werden kann: die Sourceschaltung (common source configuration), die Drainschaltung (common drain configuration) und die Gateschaltung (common gate configuration). Die Bezeichnung erfolgt entsprechend dem Anschluss des Fets, der als gemeinsamer Bezugsknoten für den Eingang und den Ausgang der Schaltung dient; Abb. 3.55 verdeutlicht diesen Zusammenhang am Beispiel eines selbstsperrenden n-Kanal-Mosfets.

In vielen Schaltungen ist dieser Zusammenhang nicht streng erfüllt, so dass ein schwächeres Kriterium angewendet werden muss:

*Die Bezeichnung erfolgt entsprechend dem Anschluss des Fets, der weder als Eingang noch als Ausgang der Schaltung dient.*

Der Substrat- bzw. Bulk-Anschluss hat keinen Einfluss auf die Einteilung der Grundschaltungen, beeinflusst aber deren Verhalten. Er ist bei Einzel-Mosfets mit dem Source-Anschluss und bei integrierten Schaltungen mit Masse oder einer Versorgungsspannungs-
<!-- page-import:0275:end -->
