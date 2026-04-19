# Behavior of a Field-Effect Transistor

<!-- page-import:0214:start -->
# Kapitel 3:
Feldeffekttransistor

Der Feldeffekttransistor (Fet) ist ein Halbleiterbauelement mit drei Anschlüssen, die mit Gate (G), Source (S) und Drain (D) bezeichnet werden. Man unterscheidet zwischen Einzeltransistoren, die für die Montage auf Leiterplatten gedacht und in einem eigenen Gehäuse untergebracht sind, und integrierten Feldeffekttransistoren, die zusammen mit weiteren Halbleiterbauelementen auf einem gemeinsamen Halbleiterträger (Substrat) hergestellt werden. Integrierte Feldeffekttransistoren haben einen vierten Anschluss, der aus dem gemeinsamen Träger resultiert und mit Substrat (bulk, B) bezeichnet wir$^1$. Dieser Anschluss ist bei Einzeltransistoren intern ebenfalls vorhanden, wird dort aber nicht getrennt nach außen geführt, sondern mit dem Source-Anschluss verbunden.

Beim Feldeffekttransistor wird mit einer zwischen Gate und Source angelegten Steuerspannung die Leitfähigkeit der Drain-Source-Strecke beeinflusst, ohne dass ein Steuerstrom fließt, d.h. die Steuerung erfolgt leistungslos. Es werden zwei verschiedene Effekte genutzt:

- Beim Mosfet (metal-oxid-semiconductor-fet oder insulated-gate-fet, Igfet) ist das Gate durch eine Oxid-Schicht (Si $O_2$) vom Kanal isoliert, siehe Abb. 3.1; dadurch kann die Steuerspannung beide Polaritäten annehmen, ohne dass ein Strom fließt. Die Steuerspannung beeinflusst die Ladungsträgerdichte in der unter dem Gate liegenden Inversionsschicht, die einen leitfähigen Kanal (channel) zwischen Drain und Source bildet und dadurch einen Stromfluss ermöglicht. Ohne Inversionsschicht ist immer mindestens einer der pn-Übergänge zwischen Source und Substrat bzw. Drain und Substrat gesperrt und es kann kein Strom fließen. Je nach Dotierung des Kanals erhält man selbstleitende (depletion) oder selbstsperrende (enhancement) Mosfets; bei selbstleitenden Mosfets fließt bei $U_{GS} = 0$ ein Drainstrom, bei selbstsperrenden nicht. Neben dem Gate hat auch das Substrat $B$ eine geringe Steuerwirkung; darauf wird im Abschnitt 3.3 näher eingegangen.
- Beim Sperrschicht-Fet (junction-fet, Jfet bzw. non-insulated-gate-fet, Nigfet) beeinflusst die Steuerspannung die Sperrschichtweite eines in Sperrrichtung betriebenen pn-

$U_{GS1} > U_{th}$  
$U_{DS} > 0$

$U_{GS2} > U_{GS1}$  
$U_{DS} > 0$

**Abb. 3.1.** Funktionsweise eines n-Kanal-Mosfets

© Springer-Verlag GmbH Deutschland, ein Teil von Springer Nature 2019  
U. Tietze et al., *Halbleiter-Schaltungstechnik*
<!-- page-import:0214:end -->

<!-- page-import:0215:start -->
178  3. Feldeffekttransistor

$U_{th} < U_{GS1} < 0$  $U_{DS} > 0$  
$U_{th} < U_{GS2} < U_{GS1}$  $U_{DS} > 0$

S p G D  
n  
p  
Sperrschicht  
$I_D$

S p G D  
n  
p  
Sperrschicht  
$I_D$

**Abb. 3.2.** Funktionsweise eines n-Kanal-Sperrschicht-Fets

Übergangs. Dadurch wird die Querschnittsfläche und damit die Leitfähigkeit des Kanals zwischen Drain und Source beeinflusst, siehe Abb. 3.2. Da das Gate nicht vom Kanal isoliert ist, kann man den pn-Übergang auch in Flussrichtung betreiben; da dabei jedoch der Vorteil der leistungslosen Steuerung verloren geht, wird diese Betriebsart in der Praxis nicht verwendet. Beim Mesfet (*metal-semiconductor-fet*) wird anstelle eines pn-Übergangs ein Metall-Halbleiter-Übergang (Schottky-Übergang) verwendet; die Funktionsweise ist dieselbe wie beim normalen Sperrschicht-Fet. Jfets und Mesfets sind selbstleitend, d.h. bei einer Steuerspannung von $U_{GS} = 0$ fließt ein Drainstrom.

Aus Abb. 3.1 und Abb. 3.2 folgt, dass Mosfets und Sperrschicht-Fets prinzipiell symmetrisch sind, d.h. Drain und Source können vertauscht werden. Die meisten Einzel-Fets sind jedoch nicht exakt symmetrisch aufgebaut und bei Einzel-Mosfets ist durch die interne Verbindung zwischen Substrat und Source eine Zuordnung gegeben.

Sowohl Mosfets als auch Sperrschicht-Fets gibt es in n- und in p-Kanal-Ausführung, so dass man insgesamt sechs Typen von Feldeffekttransistoren erhält; Abb. 3.3 zeigt die Schaltsymbole zusammen mit einer vereinfachten Darstellung der Kennlinien. Für die Spannungen $U_{GS}$ und $U_{DS}$, den Drainstrom $I_D$ und die Schwellenspannung (*threshold voltage*) $U_{th}$² gelten bei normalem Betrieb die in Abb. 3.4 genannten Polaritäten.

## 3.1 Verhalten eines Feldeffekttransistors

Das Verhalten eines Feldeffekttransistors lässt sich am einfachsten anhand der Kennlinien aufzeigen. Sie beschreiben den Zusammenhang zwischen Strömen und Spannungen am Transistor für den Fall, dass alle Größen statisch, d.h. nicht oder nur sehr langsam zeitveränderlich sind. Für eine rechnerische Behandlung des Feldeffekttransistors werden einfache Gleichungen benötigt, die das Verhalten ausreichend genau beschreiben. Bei einer Überprüfung der Funktionstüchtigkeit einer Schaltung durch Simulation auf einem Rechner muss dagegen auch der Einfluss sekundärer Effekte berücksichtigt werden. Dazu gibt es aufwendige Modelle, die auch das dynamische Verhalten bei Ansteuerung mit sinus- oder pulsförmigen Signalen richtig wiedergeben. Diese Modelle werden im Abschnitt 3.3 beschrieben und sind für ein grundsätzliches Verständnis nicht nötig. Im folgenden wird

---

¹ Beim Bipolartransistor wird dieser Anschluss mit *substrate* (S) bezeichnet; da S beim Fet die *Source* bezeichnet, wird für das Substrat die Bezeichnung *Bulk* (B) verwendet.  
² Die Schwellenspannung $U_{th}$ wird meist nur im Zusammenhang mit Mosfets verwendet; bei Sperrschicht-Fets tritt die *Abschnürspannung* (*pinch-off voltage*) $U_P$ an die Stelle von $U_{th}$. Hier wird für alle Fets $U_{th}$ verwendet, damit eine einheitliche Bezeichnung vorliegt.
<!-- page-import:0215:end -->

<!-- page-import:0216:start -->
3.1 Verhalten eines Feldeffekttransistors 179

n-Mosfet, selbstsperrend

G  
D  
S  
$I_D$

$I_D$  
$U_{th}$  
$U_{GS}$

$I_D$  
$U_{DS}$

p-Mosfet, selbstsperrend

G  
D  
S  
$I_D$

$I_D$  
$U_{th}$  
$U_{GS}$

$I_D$  
$U_{DS}$

n-Mosfet, selbstleitend

G  
D  
S  
$I_D$

$I_D$  
$U_{th}$  
$U_{GS}$

$I_D$  
$U_{DS}$

p-Mosfet, selbstleitend

G  
D  
S  
$I_D$

$I_D$  
$U_{th}$  
$U_{GS}$

$I_D$  
$U_{DS}$

n-Jfet

G  
D  
S  
$I_D$

$I_D$  
$U_{th}$  
$U_{GS}$

$I_D$  
$U_{DS}$

p-Jfet

G  
D  
S  
$I_D$

$I_D$  
$U_{th}$  
$U_{GS}$

$I_D$  
$U_{DS}$

**Abb. 3.3.** Typen von Feldeffekttransistoren

primär das Verhalten eines selbstsperrenden n-Kanal-Mosfets beschrieben; bei p-Kanal-
Fets haben alle Spannungen und Ströme umgekehrte Vorzeichen.
<!-- page-import:0216:end -->

<!-- page-import:0217:start -->
180 3. Feldeffekttransistor

| Typ | n-Kanal | p-Kanal |
|---|---|---|
| Mosfet, selbstsperrend | $U_{th} > 0$  $U_{GS} > U_{th}$  $U_{DS} > 0$  $I_D > 0$ | $U_{th} < 0$  $U_{GS} < U_{th}$  $U_{DS} < 0$  $I_D < 0$ |
| Mosfet, selbstleitend | $U_{th} < 0$  $U_{GS} > U_{th}$  $U_{DS} > 0$  $I_D > 0$ | $U_{th} > 0$  $U_{GS} < U_{th}$  $U_{DS} < 0$  $I_D < 0$ |
| Sperrschicht-Fet | $U_{th} < 0$  $U_{th} < U_{GS} < 0$  $U_{DS} > 0$  $I_D > 0$ | $U_{th} > 0$  $U_{th} > U_{GS} > 0$  $U_{DS} < 0$  $I_D < 0$ |

**Abb. 3.4.** Polarität der Spannungen Ströme bei normalem Betrieb

### 3.1.1 Kennlinien

#### 3.1.1.1 Ausgangskennlinienfeld

Legt man bei einem n-Kanal-Fet verschiedene Gate-Source-Spannungen $U_{GS}$ an und misst den Drainstrom $I_D$ als Funktion der Drain-Source-Spannung $U_{DS}$, erhält man das in Abb. 3.5 gezeigte Ausgangskennlinienfeld. Es ist für alle n-Kanal-Fets prinzipiell gleich, nur die Gate-Source-Spannungen $U_{GS}$, die zu den einzelnen Kennlinien gehören, sind bei den drei n-Kanal-Typen verschieden. Ein Drainstrom fließt nur, wenn $U_{GS}$ größer als die Schwellenspannung $U_{th}$ ist; dabei sind zwei Bereiche zu unterscheiden:

- Für $U_{DS} < U_{DS,ab} = U_{GS} - U_{th}$ arbeitet der Fet im ohmschen Bereich (ohmic region, triode region); diese Bezeichnung wurde gewählt, weil die Kennlinien bei $U_{DS} = 0$ nahezu linear durch den Ursprung verlaufen und damit ein Verhalten wie bei einem ohmschen Widerstand vorliegt. Bei Annäherung an die Grenzspannung $U_{DS,ab}$ nimmt die Steigung der Kennlinien ab, bis sie für $U_{DS} = U_{DS,ab}$ nahezu waagrecht verlaufen.
- Für $U_{DS} \geq U_{DS,ab}$ verlaufen die Kennlinien nahezu waagrecht; dieser Bereich wird Abschnürbereich (saturation region)$^3$ genannt.

Für $U_{GS} < U_{th}$ fließt kein Strom und der Fet arbeitet im Sperrbereich (cut-off region).

#### 3.1.1.2 Abschnürbereich

Die Abschnürung kommt beim Mosfet dadurch zustande, dass die Ladungsträgerkonzentration im Kanal abnimmt und dadurch der Kanal abgeschnürt wird; dies geschieht mit zunehmender Spannung $U_{DS}$ zuerst auf der Drain-Seite, weil dort die Spannung zwischen Gate und Kanal am geringsten ist:

$$
U_{GD} = U_{GS} - U_{DS} < U_{GS} \qquad \text{mit } U_{DS} > 0
$$

Die Abschnürung tritt genau dann ein, wenn $U_{GD} < U_{th}$ wird; daraus folgt für die Grenze zwischen dem ohmschen und dem Abschnürbereich:

$^3$ Die Bezeichnung saturation region ist unglücklich, weil der Begriff der Sättigung beim Bipolarltransistor eine ganz andere Bedeutung hat. Die Bezeichnung Abschnürbereich ist dagegen unverfänglich und deshalb der gelegentlich auch in der deutschsprachigen Literatur verwendeten Bezeichnung Sättigungsbereich vorzuziehen.
<!-- page-import:0217:end -->

<!-- page-import:0218:start -->
## 3.1 Verhalten eines Feldeffekttransistors

181

ohmscher Bereich

Abschnürbereich

$ I_D $
mA

10 8 6 4 2

0 1 2 3 4 5

$ U_{DS} $
V

4,0

3,5

3,0

2,5

$ U_{GS} $
V

$ U_{DS,ab} = U_{GS} - U_{th} $

**Abb. 3.5.** Ausgangskennlinienfeld eines n-Kanal-Feldeffekttransistors

$$
U_{GD} = U_{GS} - U_{DS,ab} = U_{th}
\quad \Rightarrow \quad
U_{DS,ab} = U_{GS} - U_{th}
$$

Es fließt zwar weiterhin ein Drainstrom durch den Kanal, weil die Ladungsträger den abgeschnürten Bereich durchqueren können, aber eine weitere Zunahme von $U_{DS}$ wirkt sich nur noch geringfügig auf den nicht abgeschnürten Teil des Kanals aus; dadurch bleibt der Drainstrom näherungsweise konstant. Die geringfügige Restwirkung von $U_{DS}$ im Abschnürbereich wird *Kanallängenmodulation* (*channel-length modulation*) genannt und führt zu einer leichten Zunahme des Drainstroms mit zunehmender Spannung $U_{DS}$. Im Sperrbereich ist der Kanal wegen $U_{GS} < U_{th}$ auch auf der Source-Seite abgeschnürt; in diesem Fall kann kein Strom mehr fließen. Abbildung 3.6 zeigt die Verteilung der Ladungsträger im Kanal für die drei Bereiche.

Beim Sperrschicht-Fet kommt die Abschnürung dadurch zustande, dass sich die Sperrschichten berühren und den Kanal abschnüren; dies geschieht mit zunehmender Spannung $U_{DS}$ zuerst auf der Drain-Seite, weil dort die Spannung über der Sperrschicht am größten ist. Für die Grenze zwischen dem ohmschem und dem Abschnürbereich gilt wie beim Mosfet $U_{DS,ab} = U_{GS} - U_{th}$. Auch hier fließt weiterhin ein Drainstrom, weil die Ladungsträger den abgeschnürten Bereich durchqueren können. Eine weitere Zunahme von

$U_{DS} > 0$

$U_{GS} < U_{th}$

Sperrbereich

$0 < U_{DS} < U_{DS,ab}$

$U_{GS} > U_{th}$

ohmscher Bereich

$U_{DS} > U_{DS,ab}$

$U_{GS} > U_{th}$

Abschnürbereich

**Abb. 3.6.** Verteilung der Ladungsträger im Kanal beim Mosfet
<!-- page-import:0218:end -->

<!-- page-import:0219:start -->
182

# 3. Feldeffekttransistor

$U_{GS} < U_{th}$  
$U_{DS} > 0$

Sperrbereich

$U_{GS} > U_{th}$  
$0 < U_{DS} < U_{DS,ab}$

ohmscher Bereich

$U_{GS} > U_{th}$  
$U_{DS} > U_{DS,ab}$

Abschnürbereich

**Abb. 3.7.** Ausdehnung der Sperrschichten beim Sperrschicht-Fet

$U_{DS}$ wirkt sich aber nur noch geringfügig aus. Abbildung 3.7 zeigt die Ausdehnung der Sperrschichten in den drei Bereichen.

### 3.1.1.3 Übertragungskennlinienfeld

Im Abschnürbereich ist der Drainstrom $I_D$ im wesentlichen nur von $U_{GS}$ abhängig. Trägt man $I_D$ für verschiedene, zum Abschnürbereich gehörende Werte von $U_{DS}$ als Funktion von $U_{GS}$ auf, erhält man das in Abb. 3.8 gezeigte Übertragungskennlinienfeld. Zusätzlich zur Kennlinie des selbstsperrenden Mosfets sind auch die des selbstleitenden Mosfets und des Sperrschicht-Fets dargestellt; sie haben bis auf eine Verschiebung in $U_{GS}$-Richtung einen identischen Verlauf. Die einzelnen Kennlinien liegen bei allen Typen aufgrund der geringen Abhängigkeit von $U_{DS}$ sehr dicht beieinander. Für $U_{GS} < U_{th}$ fließt kein Strom, weil der Kanal in diesem Fall auf der ganzen Länge abgeschnürt ist.

### 3.1.1.4 Eingangskennlinien

Zur vollständigen Beschreibung werden noch die in Abb. 3.9 gezeigten Eingangskennlinien benötigt, bei denen der Gatestrom $I_G$ als Funktion von $U_{GS}$ aufgetragen ist. Bei allen Feldeffekttransistoren fließt im normalen Betrieb entweder kein oder nur ein vernachlässigbar kleiner Gatestrom. Beim Mosfet ohne Überspannungsschutz fließt nur dann ein Gatestrom, wenn durch Überspannung ein Durchbruch des Oxids auftritt; dadurch wird

$ I_D $
mA

$U_{DS}$

Sperrschicht-Fet

$U_{DS}$

Mosfet, selbstleitend

Mosfet, selbstsperrend

$U_{th}$  
$U_{th}$  
$U_{th}$

$ U_{GS} $
V

**Abb. 3.8.** Übertragungskennlinien von n-Kanal-Feldeffekttransistoren
<!-- page-import:0219:end -->

<!-- page-import:0220:start -->
3.1 Verhalten eines Feldeffekttransistors 183

**Abb. 3.9.** Eingangskennlinien von n-Kanal-Feldeffekttransistoren

der Mosfet zerstört. Bei vielen Mosfets ist deshalb die Gate-Source-Strecke mit einer internen Z-Diode gegen Überspannung geschützt und man erhält im Eingangskennlinienfeld die Kennlinie der Z-Diode. Beim Sperrschicht-Fet wird der pn-Übergang für $U_{GS} > 0$ in Durchlassrichtung betrieben und es fließt ein Gatestrom entsprechend dem Flussstrom einer Diode; im Bereich $U_{GS} < 0$ fließt dagegen erst dann ein Strom, wenn die Spannung betragsmäßig so groß wird, dass ein Durchbruch des pn-Übergangs auftritt.

## 3.1.2 Beschreibung durch Gleichungen

Ausgehend von einer idealisierten Ladungsverteilung im Kanal kann man den Drainstrom $I_D(U_{GS}, U_{DS})$ berechnen; dabei erhält man für den Sperrschicht-Fet und den Mosfet unterschiedliche Gleichungen, die aber ohne größeren Fehler durch eine einfache Gleichung angenähert werden können [3.1]:

$$
I_D =
\begin{cases}
0 & \text{für } U_{GS} < U_{th} \\
K\,U_{DS}\left(U_{GS} - U_{th} - \frac{U_{DS}}{2}\right) & \text{für } U_{GS} \geq U_{th}, 0 \leq U_{DS} < U_{GS} - U_{th} \\
\frac{K}{2}(U_{GS} - U_{th})^2 & \text{für } U_{GS} \geq U_{th}, U_{DS} \geq U_{GS} - U_{th}
\end{cases}
$$

Die erste Gleichung beschreibt den Sperr-, die zweite den ohmschen und die dritte den Abschnürbereich. Der *Steilheitskoeffizient* $K$ ist ein Maß für die Steigung der Übertragungskennlinie und wird im folgenden noch näher beschrieben.
<!-- page-import:0220:end -->

<!-- page-import:0221:start -->
184  3. Feldeffekttransistor

a Ausgangskennlinie

$K\,U_{DS}(U_{GS}-U_{TH}-U_{DS}/2)$

$I_D$

$U_{DS,ab}=U_{GS}-U_{th}$

$U_{DS}$

b Übertragungskennlinie

$\frac{K}{2}(U_{GS}-U_{TH})^2$

$I_D$

$U_{th}$

$U_{GS}$

**Abb. 3.10.** Gleichungen eines n-Kanal-Fets

#### 3.1.2.1 Verlauf der Kennlinien

Die Gleichung für den ohmschen Bereich ist quadratisch in $U_{DS}$ und erscheint deshalb als Parabel im Ausgangskennlinienfeld, siehe Abb. 3.10a. Der Scheitel der Parabel liegt bei $U_{DS,ab}=U_{GS}-U_{th}$, also an der Grenze zum Abschnürbereich; hier endet der Gültigkeitsbereich der Gleichung, da sie nur für $0 \leq U_{DS} < U_{DS,ab}$ gilt. Für $U_{DS} \geq U_{DS,ab}$ muss man die Gleichung für den Abschnürbereich verwenden, die nicht von $U_{DS}$ abhängt und deshalb Parallelen zur $U_{DS}$-Achse liefert; in Abb. 3.10a ist die zugehörige Kennlinie strichpunktiert dargestellt.

Die Gleichung für den Abschnürbereich ist quadratisch in $U_{GS}$ und erscheint deshalb als Parabel im Übertragungskennlinienfeld, siehe Abb. 3.10b. Der Scheitel der Parabel liegt bei $U_{GS}=U_{th}$; hier beginnt der Gültigkeitsbereich der Gleichung, die bei n-Kanal-Fets nur für $U_{GS}>U_{th}$ gilt.

Alle Gleichungen gelten nur im ersten Quadranten des Ausgangskennlinienfelds, d.h. für $U_{DS}\geq 0$. Bei einem symmetrisch aufgebauten Fet verlaufen die Kennlinien im dritten Quadranten symmetrisch zu denen des ersten Quadranten; das ist vor allem bei integrierten Fets der Fall. Man kann die Gleichungen auch im dritten Quadranten verwenden, wenn man Drain und Source vertauscht, d.h. $U_{GD}$ anstelle von $U_{GS}$ und $U_{SD}$ anstelle von $U_{DS}$ einsetzt. Wegen $U_{SD}=-U_{DS}$ kann man auch $-U_{DS}$ einsetzen. Einzel-Mosfets, vor allem Leistungs-Mosfets, sind dagegen unsymmetrisch aufgebaut und zeigen im dritten Quadranten ein anderes Verhalten als im ersten Quadranten, siehe Kapitel 3.2.

Zur Vereinfachung der weiteren Darstellung werden Abkürzungen für die Arbeitsbereiche eines n-Kanal-Fets eingeführt:

|  |  |  |
|---|---|---|
| SB : Sperrbereich | $\Rightarrow$ | $\left\{\begin{array}{l} U_{GS}<U_{th} \end{array}\right.$ |
| OB : ohmscher Bereich |  | $\left\{\begin{array}{l} U_{GS}\geq U_{th}, 0\leq U_{DS}<U_{GS}-U_{th} \end{array}\right.$ |
| AB : Abschnürbereich |  | $\left\{\begin{array}{l} U_{GS}\geq U_{th}, U_{DS}\geq U_{GS}-U_{th} \end{array}\right.$ |

(3.1)

Berücksichtigt man zusätzlich den Einfluss der Kanallängenmodulation [3.2] und ergänzt die Gleichung für den Gatestrom, erhält man die Großsignalgleichungen eines Feldeffekttransistors:
<!-- page-import:0221:end -->

<!-- page-import:0222:start -->
3.1 Verhalten eines Feldeffekttransistors 185

**Abb. 3.11.**  
Geometrische Größen bei einem Mosfet

$$
I_D
=
\begin{cases}
0 & \text{SB} \\
K\,U_{DS}\left(U_{GS}-U_{th}-\frac{U_{DS}}{2}\right)\left(1+\frac{U_{DS}}{U_A}\right) & \text{OB} \\
\frac{K}{2}(U_{GS}-U_{th})^2\left(1+\frac{U_{DS}}{U_A}\right) & \text{AB}
\end{cases}
\qquad (3.2)\ (3.3)
$$

$$
I_G
=
\begin{cases}
0 & \text{Mosfet} \\
I_{G,S}\left(e^{\frac{U_{GS}}{U_T}}-1\right) & \text{Sperrschicht-Fet}
\end{cases}
\qquad (3.4)
$$

### 3.1.2.2 Steilheitskoeffizient

Der *Steilheitskoeffizient* oder *Transkonduktanz-Koeffizient* (*transconductance coefficient*) $K$ ist ein Maß für die Steigung der Übertragungskennlinie eines Fets. Bei n-Kanal-Mosfets gilt:

$$
K = K_n' \frac{W}{L} = \mu_n C_{ox}' \frac{W}{L}
\qquad (3.5)
$$

Dabei ist $\mu_n \approx 0{,}05 \dots 0{,}07\,\mathrm{m^2/Vs}$ die *Beweglichkeit* $^4$ der Ladungsträger im Kanal und $C_{ox}'$ der *Kapazitätsbelag des Gate-Oxids*; $W$ ist die Breite und $L$ die Länge des Gates, siehe Abb. 3.11. Das Gate bildet zusammen mit dem darunter liegenden Silizium einen Plattenkondensator mit der Fläche $A = W\,L$ und einem Plattenabstand entsprechend der *Oxiddicke* $d_{ox}$:

$$
C_{ox} = \epsilon_{ox}\,\frac{A}{d_{ox}} = \epsilon_0 \epsilon_{r,ox}\,\frac{W\,L}{d_{ox}} = C_{ox}'\,W\,L
$$

Mit der *Dielektrizitätskonstante* $\epsilon_0 = 8{,}85 \cdot 10^{-12}\,\mathrm{As/Vm}$, der *relativen Dielektrizitätskonstante* $\epsilon_{r,ox} = 3{,}9$ für Siliziumdioxid ($SiO_2$) und $d_{ox} \approx 40 \dots 100\,\mathrm{nm}$ erhält man den Kapazitätsbelag $C_{ox}' \approx 0{,}35 \dots 0{,}9 \cdot 10^{-3}\,\mathrm{F/m^2}$ und den *relativen Steilheitskoeffizienten* $^5$:

$$
K_n' = \mu_n C_{ox}' \approx 20 \dots 60\,\frac{\mu A}{V^2}
$$

---

$^4$ Die Beweglichkeit hängt von der Dotierung im Kanal ab und ist deutlich geringer als die Beweglichkeit in undotiertem Silizium ($\mu_n \approx 0{,}14\,\mathrm{m^2/Vs}$).
<!-- page-import:0222:end -->

<!-- page-import:0223:start -->
186  3. Feldeffekttransistor

Den Steilheitskoeffizienten $K$ erhält man nach (3.5) durch Multiplikation mit dem Faktor $W/L$, der ein Maß für die Größe des Mosfets ist. Typische Werte für Einzeltransistoren sind $L \approx 1 \dots 5\ \mu\mathrm{m}$ und $W \approx 10\ \mathrm{mm}$ bei Kleinsignal-Mosfets bis zu $W > 1\ \mathrm{m}$^6 bei Leistungs-Mosfets; daraus folgt $K \approx 40\ \mathrm{mA}/\mathrm{V}^2 \dots 50\ \mathrm{A}/\mathrm{V}^2$. Bei integrierten Mosfets sind die geometrischen Abmessungen zum Teil deutlich kleiner; $d_{ox} \approx 10 \dots 20\ \mathrm{nm}$ und $L \approx 0{,}18 \dots 0{,}5\ \mu\mathrm{m}$ sind gängige Werte.

Bei p-Kanal-Mosfets ist die Beweglichkeit der Ladungsträger im Kanal mit $\mu_p \approx 0{,}015 \dots 0{,}03\ \mathrm{m}^2/\mathrm{Vs}$ etwa um den Faktor $2 \dots 3$ geringer als bei n-Kanal-Mosfets; daraus folgt $K'_p \approx 6 \dots 20\ \mu\mathrm{A}/\mathrm{V}^2$.

Bei Sperrschicht-Fets hängt $K$ ebenfalls von den geometrischen Größen ab^7. Auf eine genauere Darstellung wird hier verzichtet; siehe hierzu [3.1]. Bei Sperrschicht-Fets handelt es sich fast ausschließlich um Einzeltransistoren für Kleinsignalanwendungen mit $K \approx 0{,}5 \dots 10\ \mathrm{mA}/\mathrm{V}^2$.

### 3.1.2.3 Alternative Darstellung

Bei Sperrschicht-Fets ist eine andere Darstellung der Kennlinien weit verbreitet. Man definiert

$$
I_{D.0} = \frac{K\ U_{th}^2}{2}
$$

und erhält damit im Abschnürbereich bei Vernachlässigung der Kanallängenmodulation:

$$
I_D = I_{D.0}\left(1 - \frac{U_{GS}}{U_{th}}\right)^2
$$

Aufgrund der Definition gilt $I_{D.0} = I_D(U_{GS} = 0)$, d.h. die Übertragungskennlinie schneidet die y-Achse bei $I_D = I_{D.0}$. Prinzipiell kann man alle Fets mit $U_{th} \neq 0$ auf diese Weise beschreiben; bei selbstsperrenden Fets, bei denen die Übertragungskennlinie die y-Achse nur im Sperrbereich schneidet, wird $I_{D.0}$ bei $U_{GS} = 2U_{th}$ abgelesen.

### 3.1.2.4 Kanallängenmodulation

Die Abhängigkeit des Drainstroms von $U_{DS}$ im Abschnürbereich wird durch die *Kanallängenmodulation* verursacht und durch den rechten Term in (3.3) empirisch beschrieben. Damit ein stetiger Übergang vom ohmschen in den Abschnürbereich erfolgt, muss dieser Term auch in (3.2) ergänzt werden [3.2]. Grundlage für diese Beschreibung ist die Beobachtung, dass sich die extrapolierten Kennlinien des Ausgangskennlinienfelds näherungsweise in einem Punkt schneiden; Abb. 3.12 verdeutlicht diesen Zusammenhang. Die Konstante $U_A$ wird in Anlehnung an den Bipolartransistor *Early-Spannung* genannt und beträgt bei Mosfets $U_A \approx 20 \dots 100\ \mathrm{V}$ und bei Sperrschicht-Fets $U_A \approx 30 \dots 200\ \mathrm{V}$. Anstelle der Early-Spannung wird oft der *Kanallängenmodulations-Parameter*

$$
\lambda = \frac{1}{U_A}
$$

(3.6)

---

^5 Der relative Steilheitskoeffizient $K'_n$ ist umgekehrt proportional zu $d_{ox}$, so dass mit fortschreitender Miniaturisierung immer größere Werte erreicht werden, z.B. $K'_n \approx 100 \dots 120\ \mu\mathrm{A}/\mathrm{V}^2$ in 3,3V-CMOS-Schaltungen.

^6 Im Abschnitt 3.2 wird beschrieben, wie man diese großen Werte für $W$ erreicht.

^7 In der Literatur wird der Steilheitskoeffizient eines Sperrschicht-Fets gewöhnlich mit $\beta$ bezeichnet; hier wird $K$ verwendet, damit eine einheitliche Bezeichnung vorliegt und Verwechslungen mit der Stromverstärkung $\beta$ eines Bipolartransistors vermieden werden.
<!-- page-import:0223:end -->

<!-- page-import:0224:start -->
3.1 Verhalten eines Feldeffekttransistors 187

Abb. 3.12. Kanallängenmodulation und Early-Spannung

verwendet; man erhält bei Mosfets $\lambda \approx 10 \ldots 50 \cdot 10^{-3}\,\mathrm{V}^{-1}$ und bei Sperrschicht-Fets $\lambda \approx 5 \ldots 30 \cdot 10^{-3}\,\mathrm{V}^{-1}$.

Bei integrierten Mosfets mit kleinen geometrischen Größen ist diese empirische Beschreibung sehr ungenau. Man benötigt in diesem Fall erheblich umfangreichere Gleichungen, um den dabei auftretenden Kurzkanal-Effekt zu beschreiben. Für den Entwurf integrierter Schaltungen mit CAD-Programmen gibt es eine ganze Reihe von Modellen, die diesen Effekt auf unterschiedliche Weise beschreiben, siehe Kapitel 3.3.

### 3.1.3 Feldeffekttransistor als steuerbarer Widerstand

Man kann einen Feldeffekttransistor im ohmschen Bereich als steuerbaren Widerstand betreiben, siehe Abb. 3.13a; dabei wird über die Steuerspannung $U_{st} = U_{GS}$ der Widerstand der Drain-Source-Strecke verändert. Durch Differentiation von (3.2) erhält man:

$$
\frac{1}{R(U_{GS})} = \left.\frac{\partial I_D}{\partial U_{DS}}\right|_{\mathrm{OB}} = K\,(U_{GS} - U_{th} - U_{DS})\left(1 + \frac{2U_{DS}}{U_A}\right) + \frac{K\,U_{DS}^2}{2U_A}
$$

Der Widerstand ist jedoch wegen der Abhängigkeit von $U_{DS}$ nichtlinear. Von besonderem Interesse ist der Einschaltwiderstand $R_{DS,on}$ bei Aussteuerung um den Punkt $U_{DS} = 0$:

$$
R_{DS,on} = \left.\frac{\partial U_{DS}}{\partial I_D}\right|_{U_{DS}=0} = \frac{1}{K\,(U_{GS} - U_{th})}
\qquad \text{für } U_{GS} > U_{th}
\tag{3.7}
$$

Da die Kennlinien in der Umgebung von $U_{DS} = 0$ nahezu linear verlaufen, ist $R_{DS,on}$ unabhängig von $U_{DS}$ und der Fet wirkt bei Aussteuerung mit kleinen Amplituden als steuerbarer linearer Widerstand; bei größeren Amplituden macht sich jedoch die zunehmende Krümmung der Kennlinien bemerkbar und das Verhalten wird zunehmend nichtlinear.

Man kann die Linearität verbessern, indem man die Steuerspannung nicht direkt an das Gate legt, sondern vorher die halbe Drain-Source-Spannung addiert; dazu kann man die in Abb. 3.13b gezeigt Schaltung mit einem Spannungsteiler aus zwei hochohmigen Widerständen $R_1 = R_2$ im M$\Omega$-Bereich verwenden, der

$$
U_{GS} = \frac{U_{DS}R_1 + U_{st}R_2}{R_1 + R_2}
\qquad \overset{R_1=R_2}{=}\qquad
\frac{U_{DS} + U_{st}}{2}
$$

bildet. Setzt man diesen Ausdruck in (3.2) ein, erhält man
<!-- page-import:0224:end -->

<!-- page-import:0225:start -->
188  3. Feldeffekttransistor

a einfache Schaltung

b linearisierte Schaltung

**Abb. 3.13.** Fet als steuerbarer Widerstand

$$
I_D = K\,U_{DS}\left(\frac{U_{st}}{2}-U_{th}\right)\left(1+\frac{U_{DS}}{U_A}\right)
$$

und damit:

$$
\frac{1}{R(U_{st})}
= K\left(\frac{U_{st}}{2}-U_{th}\right)\left(1+\frac{2U_{DS}}{U_A}\right)
\overset{U_{DS}\ll U_A}{\approx}
K\left(\frac{U_{st}}{2}-U_{th}\right)
$$

Es bleibt eine Abhängigkeit von $U_{DS}$, die aber wesentlich geringer ist als die der einfachen Schaltung aus Abb. 3.13a, wie ein Vergleich der Verläufe in Abb. 3.14 zeigt. Durch einen Feinabgleich des Spannungsteilers kann man die verbleibende Nichtlinearität noch weiter verringern. Die optimale Dimensionierung

$$
\frac{R_1}{R_2}=\frac{U_A-2U_{st}+2U_{th}}{U_A-2U_{th}}
$$

findet man, indem man die vorangegangene Rechnung ohne die Annahme $R_1=R_2$ durchführt; sie ist jedoch von der Steuerspannung $U_{st}$ abhängig, d.h. die Linearisierung ist nur für eine bestimmte Steuerspannung exakt. Mit $K=5\,\mathrm{mA}/\mathrm{V}^2$, $U_{th}=2\,\mathrm{V}$, $U_A=100\,\mathrm{V}$ und $U_{st}=8\,\mathrm{V}$ erhält man $R(U_{st}=8\,\mathrm{V})=100\,\Omega$ und $R_1/R_2=0{,}917$.

einfach

linearisiert

**Abb. 3.14.** Vergleich der Widerstandsverläufe für $K=5\,\mathrm{mA}/\mathrm{V}^2$, $U_{th}=2\,\mathrm{V}$, $U_A=100\,\mathrm{V}$ und $U_{GS}=4\,\mathrm{V}$ bzw. $U_{st}=8\,\mathrm{V}$
<!-- page-import:0225:end -->

<!-- page-import:0226:start -->
3.1 Verhalten eines Feldeffekttransistors 189

Mosfet, selbstsperrend

n-Kanal

3 mA

3,1 V

5 V

$U_{GS} = 3{,}1\ \mathrm{V} > U_{th} = 2\ \mathrm{V}$

p-Kanal

3,1 V

5 V

3 mA

$U_{GS} = -3{,}1\ \mathrm{V} < U_{th} = -2\ \mathrm{V}$

Mosfet, selbstleitend

3 mA

0,1 V

5 V

$U_{GS} = 0{,}1\ \mathrm{V} > U_{th} = -1\ \mathrm{V}$

0,1 V

5 V

3 mA

$U_{GS} = -0{,}1\ \mathrm{V} < U_{th} = 1\ \mathrm{V}$

Sperrschicht-Fet

0,9 V

3 mA

5 V

$U_{GS} = -0{,}9\ \mathrm{V} > U_{th} = -2\ \mathrm{V}$

0,9 V

5 V

3 mA

$U_{GS} = 0{,}9\ \mathrm{V} < U_{th} = 2\ \mathrm{V}$

**Abb. 3.15.** Arbeitspunkteinstellung für $I_{D,A} = 3\ \mathrm{mA}$ bei n-Kanal- und p-Kanal-Fets mit $K = 5\ \mathrm{mA}/\mathrm{V}^2$

## 3.1.4 Arbeitspunkt und Kleinsignalverhalten

Ein Anwendungsgebiet des Feldeffekttransistors ist die lineare Verstärkung von Signalen im *Kleinsignalbetrieb*. Dabei wird der Feldeffekttransistor in einem Arbeitspunkt betrieben und mit *kleinen* Signalen um den Arbeitspunkt ausgesteuert. Die Kennlinien können in diesem Fall durch ihre Tangenten im Arbeitspunkt ersetzt werden.

### 3.1.4.1 Arbeitspunkt

Der Arbeitspunkt A wird durch die Spannungen $U_{DS,A}$ und $U_{GS,A}$ und den Strom $I_{D,A}$ charakterisiert und durch die äußere Beschaltung festgelegt. Für einen sinnvollen Betrieb als Verstärker muss der Arbeitspunkt im Abschnürbereich liegen. Abbildung 3.15 zeigt die Einstellung des Arbeitspunkts und die Polarität der Spannungen und Ströme bei den sechs Fet-Typen; dabei wird für die n-Kanal-Fets entsprechend den Übertragungskennlinien in Abb. 3.8 auf Seite 182 eine Schwellenspannung $U_{th} = -2 / -1 / 2\ \mathrm{V}$ und ein Steilheitskoeffizient $K = 5\ \mathrm{mA}/\mathrm{V}^2$ angenommen. Den beispielhaft gewählten Strom $I_{D,A} = 3\ \mathrm{mA}$ erhält man mit $U_{GS,A} = U_{th} + 1{,}1\ \mathrm{V}$ und bei Vernachlässigung des Early-Effekts:

$$
I_D \approx \frac{K}{2}(U_{GS} - U_{th})^2 = 2{,}5\ \frac{\mathrm{mA}}{\mathrm{V}^2} \cdot 1{,}1\ \mathrm{V}^2 \approx 3\ \mathrm{mA}
$$
<!-- page-import:0226:end -->

<!-- page-import:0227:start -->
190  3. Feldeffekttransistor

Bei den p-Kanal-Fets hat $U_{th}$ das jeweils andere Vorzeichen und man erhält $I_D=-3\ \mathrm{mA}$ mit $U_{GS,A}=U_{th}-1,1\ \mathrm{V}$. Verfahren zur Arbeitspunkteinstellung werden im Abschnitt 3.4 behandelt.

#### 3.1.4.2 Kleinsignalgleichungen und Kleinsignalparameter

##### 3.1.4.2.1 Kleinsignalgrößen

Bei Aussteuerung um den Arbeitspunkt werden die Abweichungen der Spannungen und Ströme von den Arbeitspunktwerten als *Kleinsignalspannungen* und -ströme bezeichnet. Man definiert:

$$
u_{GS}=U_{GS}-U_{GS,A}\quad,\quad u_{DS}=U_{DS}-U_{DS,A}\quad,\quad i_D=I_D-I_{D,A}
$$

##### 3.1.4.2.2 Linearisierung

Die Kennlinien werden durch ihre Tangenten im Arbeitspunkt ersetzt, d.h. sie werden *linearisiert*. Dazu führt man eine Taylorreihenentwicklung im Arbeitspunkt durch und bricht nach dem linearen Glied ab:

$$
i_D=I_D(U_{GS,A}+u_{GS},U_{DS,A}+u_{DS})-I_{D,A}
$$

$$
=\left.\frac{\partial I_D}{\partial U_{GS}}\right|_A u_{GS}+\left.\frac{\partial I_D}{\partial U_{DS}}\right|_A u_{DS}+\ldots
$$

##### 3.1.4.2.3 Kleinsignalgleichungen

Die partiellen Ableitungen im Arbeitspunkt werden *Kleinsignalparameter* genannt. Nach Einführung spezieller Bezeichner erhält man die *Kleinsignalgleichungen* des Feldeffekttransistors:

$$
i_G=0
$$

(3.8)

$$
i_D=S\,u_{GS}+\frac{1}{r_{DS}}\,u_{DS}
$$

(3.9)

##### 3.1.4.2.4 Kleinsignalparameter im Abschnürbereich

Die *Steilheit* $S$ beschreibt die Änderung des Drainstroms $I_D$ mit der Gate-Source-Spannung $U_{GS}$ im Arbeitspunkt. Sie kann im Übertragungskennlinienfeld nach Abb. 3.8 aus der Steigung der Tangente im Arbeitspunkt ermittelt werden, gibt also an, wie *steil* die Übertragungskennlinie im Arbeitspunkt ist. Durch Differentiation der Großsignalgleichung (3.3) erhält man:

$$
S=\left.\frac{\partial I_D}{\partial U_{GS}}\right|_A=K\,(U_{GS,A}-U_{th})\left(1+\frac{U_{DS,A}}{U_A}\right)\underset{U_{DS,A}\ll U_A}{\approx}K\,(U_{GS,A}-U_{th})
\qquad (3.10)
$$

Die Steilheit ist definitionsgemäß proportional zum *Steilheitskoeffizienten* $K$. In Abb. 3.16 werden die Verläufe für n-Kanal-Fets mit $K=5\ \mathrm{mA}/\mathrm{V}^2$ gezeigt; die zugehörigen Übertragungskennlinien zeigt Abb. 3.8 auf Seite 182. Man erhält Geraden mit dem x-Achsen-Abschnitt $U_{th}$ und der Steigung $K$:

$$
K=\frac{\partial S}{\partial U_{GS}}=\frac{\partial^2 I_D}{\partial U_{GS}^2}
$$
<!-- page-import:0227:end -->

<!-- page-import:0228:start -->
3.1 Verhalten eines Feldeffekttransistors 191

**Abb. 3.16.** Verlauf der Steilheit bei n-Kanal-Fets mit Übertragungskennlinien nach Abb. 3.8  
$(K = 5\,\mathrm{mA}/\mathrm{V}^2)$

Man kann $S$ auch als Funktion des Drainstroms $I_{D,A}$ angeben, indem man (3.3) nach $U_{GS} - U_{th}$ auflöst und in (3.10) einsetzt:

$$
S = \left.\frac{\partial I_D}{\partial U_{GS}}\right|_A
= \sqrt{2K\,I_{D,A}\left(1 + \frac{U_{DS,A}}{U_A}\right)}
\qquad
U_{DS,A} \ll U_A
\qquad
\approx
\sqrt{2K\,I_{D,A}}
\tag{3.11}
$$

Im Gegensatz zum Bipolartransistor, bei dem man zur Berechnung der Steilheit nur den Kollektorstrom $I_{C,A}$ benötigt, wird beim Feldeffekttransistor zusätzlich zum Drainstrom $I_{D,A}$ der Steilheitskoeffizient $K$ benötigt; die Abhängigkeit von $U_A$ ist dagegen gering. In der Praxis arbeitet man mit der in (3.11) angegebenen Näherung. In Datenblättern ist anstelle von $K$ die Steilheit für einen bestimmten Drainstrom angegeben; man kann $K$ in diesem Fall aus der Steilheit ermitteln:

$$
K \approx \frac{S^2}{2I_{D,A}}
$$

Der Ausgangswiderstand $r_{DS}$ beschreibt die Änderung der Drain-Source-Spannung $U_{DS}$ mit dem Drainstrom $I_D$ im Arbeitspunkt. Er kann aus dem Kehrwert der Steigung der Tangente im Ausgangskennlinienfeld nach Abb. 3.5 ermittelt werden. Durch Differentiation der Großsignalgleichung (3.3) erhält man:

$$
r_{DS} = \left.\frac{\partial U_{DS}}{\partial I_D}\right|_A
= \frac{U_A + U_{DS,A}}{I_{D,A}}
\qquad
U_{DS,A} \ll U_A
\qquad
\approx
\frac{U_A}{I_{D,A}}
\tag{3.12}
$$

In der Praxis arbeitet man mit der in (3.12) angegebenen Näherung.

#### 3.1.4.2.5 Kleinsignalparameter im ohmschen Bereich

Im ohmschen Bereich gilt $U_{DS} \ll U_A$; damit erhält man durch Differentiation von (3.2):

$$
S_{OB} \approx K\,U_{DS,A}
$$

$$
r_{DS,OB} \approx \frac{1}{K\,(U_{GS,A} - U_{th} - U_{DS,A})}
$$

Die Steilheit und der Ausgangswiderstand sind im ohmschen Bereich kleiner als im Abschnürbereich; deshalb ist die erzielbare Verstärkung ebenfalls deutlich geringer.
<!-- page-import:0228:end -->

<!-- page-import:0229:start -->
192 3. Feldeffekttransistor

**Abb. 3.17.**  
Kleinsignalersatzschaltbild  
eines Feldeffekttransistors

### 3.1.4.3 Kleinsignalersatzschaltbild

Aus den Kleinsignalgleichungen (3.8) und (3.9) erhält man das in Abb. 3.17 gezeigte *Kleinsignalersatzschaltbild*. Ausgehend vom Drainstrom $I_{D,A}$ im Arbeitspunkt kann man die Parameter mit (3.11) und (3.12) bestimmen.

Dieses Ersatzschaltbild eignet sich zur Berechnung des Kleinsignalverhaltens bei niedrigen Frequenzen $(0 \dots 10\,\mathrm{kHz})$; es wird deshalb auch *Gleichstrom-Kleinsignalersatzschaltbild* genannt. Aussagen über das Verhalten bei höheren Frequenzen kann man nur mit Hilfe des im Abschnitt 3.3.3.2 beschriebenen Wechselstrom-Kleinsignalersatzschaltbilds erhalten.

### 3.1.4.4 Vierpol-Matrizen

Man kann die Kleinsignalgleichungen auch in matrizieller Form angeben:

$$
\begin{bmatrix}
i_G\\
i_D
\end{bmatrix}
=
\begin{bmatrix}
0 & 0\\
S & \frac{1}{r_{DS}}
\end{bmatrix}
\begin{bmatrix}
u_{GS}\\
u_{DS}
\end{bmatrix}
$$

Diese Darstellung entspricht der Leitwert-Darstellung eines Vierpols und stellt damit eine Verbindung zur Vierpoltheorie her. Die Leitwert-Darstellung beschreibt den Vierpol durch die $Y$-Matrix $\mathbf{Y}_s$:

$$
\begin{bmatrix}
i_G\\
i_D
\end{bmatrix}
=
\mathbf{Y}_s
\begin{bmatrix}
u_{GS}\\
u_{DS}
\end{bmatrix}
=
\begin{bmatrix}
y_{11,s} & y_{12,s}\\
y_{21,s} & y_{22,s}
\end{bmatrix}
\begin{bmatrix}
u_{GS}\\
u_{DS}
\end{bmatrix}
$$

Der Index $s$ weist darauf hin, dass der Fet in Sourceschaltung betrieben wird, d.h. der Source-Anschluss wird entsprechend der Durchverbindung im Kleinsignalersatzschaltbild nach Abb. 3.17 für das Eingangs- und das Ausgangstor benutzt. Die Sourceschaltung wird im Abschnitt 3.4.1 näher beschrieben.

Eine Hybrid-Darstellung mit einer H-Matrix wie beim Bipolartransistor ist beim Feldeffekttransistor nicht möglich, weil $U_{GS}$ wegen $I_G = 0$ nur von der Beschaltung abhängt und deshalb die Gleichung $u_{GS} = u_{GS}(i_G, u_{DS})$ nicht existiert.

### 3.1.4.5 Gültigkeitsbereich der Kleinsignalbetrachtung

Es ist noch zu klären, wie groß die Aussteuerung um den Arbeitspunkt maximal sein darf, damit noch Kleinsignalbetrieb vorliegt. In der Praxis sind die nichtlinearen Verzerrungen maßgebend, die einen anwendungsspezifischen Grenzwert nicht überschreiten sollen. Dieser Grenzwert ist oft in Form eines maximal zulässigen *Klirrfaktors* gegeben. Im Abschnitt 4.2.3 wird darauf näher eingegangen. Das Kleinsignalersatzschaltbild ergibt sich aus einer nach dem linearen Glied abgebrochenen Taylorreihenentwicklung. Berücksichtigt man weitere Glieder der Taylorreihe, erhält man für den Kleinsignal-Drainstrom bei Vernachlässigung der Kanallängenmodulation $(U_A \to \infty)$:
<!-- page-import:0229:end -->

<!-- page-import:0230:start -->
3.1 Verhalten eines Feldeffekttransistors 193

$$
i_D = \left.\frac{\partial I_D}{\partial U_{GS}}\right|_A u_{GS} + \left.\frac{1}{2}\frac{\partial^2 I_D}{\partial U_{GS}^2}\right|_A u_{GS}^2 + \left.\frac{1}{6}\frac{\partial^3 I_D}{\partial U_{GS}^3}\right|_A u_{GS}^3 + \ldots
$$

$$
= \sqrt{2KI_{D,A}}\,u_{GS} + \frac{K}{2}u_{GS}^2
$$

Aufgrund der parabelförmigen Kennlinie bricht die Reihe nach dem zweiten Glied ab. Bei harmonischer Aussteuerung mit $u_{GS} = \hat{u}_{GS}\cos \omega_0 t$ folgt daraus:

$$
i_D = \frac{K}{4}\hat{u}_{GS}^2 + \sqrt{2KI_{D,A}}\,\hat{u}_{GS}\cos \omega_0 t + \frac{K}{4}\hat{u}_{GS}^2 \cos 2\omega_0 t
$$

Aus dem Verhältnis der ersten Oberwelle mit $2\omega_0$ zur Grundwelle mit $\omega_0$ erhält man den Klirrfaktor $k$:

$$
k = \frac{i_{D,2\omega_0}}{i_{D,\omega_0}} = \frac{\hat{u}_{GS}}{4}\sqrt{\frac{K}{2I_{D,A}}} = \frac{\hat{u}_{GS}}{4(U_{GS,A} - U_{th})}
\qquad (3.13)
$$

Er ist umgekehrt proportional zu $\sqrt{I_{D,A}}$ bzw. $U_{GS,A} - U_{th}$, nimmt also bei gleicher Aussteuerung mit zunehmendem Drainstrom ab. Bei Einzeltransistoren gilt $U_{GS,A} - U_{th} \approx 1 \ldots 2\,\mathrm{V}$; damit erhält man mit $\hat{u}_{GS} < 40 \ldots 80\,\mathrm{mV}$ einen Klirrfaktor von $k < 1\%$. Ein Vergleich mit (2.15) auf Seite 47 zeigt, dass beim Fet bei gleichem Klirrfaktor eine wesentlich größere Aussteuerung möglich ist als beim Bipolartransistor, bei dem $k < 1\%$ nur mit $\hat{u}_{BE} < 1\,\mathrm{mV}$ erreicht wird.

## 3.1.5 Grenzdaten und Sperrströme

Bei einem Feldeffekttransistor werden verschiedene Grenzdaten angegeben, die nicht überschritten werden dürfen. Sie gliedern sich in Grenzspannungen, Grenzströme und die maximale Verlustleistung. Betrachtet werden wieder n-Kanal-Mosfets; bei p-Kanal-Mosfets haben alle Spannungen und Ströme umgekehrte Vorzeichen.

### 3.1.5.1 Durchbruchsspannungen

#### 3.1.5.1.1 Gate-Durchbruch

Bei der Gate-Source-Durchbruchsspannung $U_{(BR)GS}$ bricht das Gate-Oxid eines Mosfets auf der Source-Seite durch, bei der Drain-Gate-Durchbruchsspannung $U_{(BR)DG}$ auf der Drain-Seite. Dieser Durchbruch ist nicht reversibel und führt zu einer Zerstörung des Mosfets, wenn keine Z-Dioden zum Schutz vorhanden sind. Deshalb müssen Einzel-Mosfets ohne Z-Dioden vor statischer Aufladung geschützt werden und dürfen erst nach erfolgtem Potentialausgleich angefasst werden.

Der Gate-Source-Durchbruch ist symmetrisch, d.h. unabhängig von der Polarität der Gate-Source-Spannung; deshalb findet man in Datenblättern eine Plus-Minus-Angabe, z.B. $U_{(BR)GS} = \pm 20\,\mathrm{V}$, oder es ist der Betrag der Durchbruchspannung angegeben. Typische Werte sind $|U_{(BR)GS}| \approx 10 \ldots 20\,\mathrm{V}$ bei Mosfets in integrierten Schaltungen und $|U_{(BR)GS}| \approx 10 \ldots 40\,\mathrm{V}$ bei Einzeltransistoren.

Bei symmetrisch aufgebauten Mosfets ist das Drain-Gebiet genauso aufgebaut wie das Source-Gebiet und es gilt $|U_{(BR)DG}| = |U_{(BR)GS}|$; das ist vor allem bei Mosfets in integrierten Schaltungen der Fall. Bei unsymmetrisch aufgebauten Mosfets ist $|U_{(BR)DG}|$ wesentlich größer als $|U_{(BR)GS}|$, weil hier ein Großteil der Spannung über einer schwach dotierten Schicht zwischen Kanal und Drain-Anschluss abfällt, siehe Abschnitt 3.2. In Datenblättern wird diese Spannung mit $U_{(BR)DGR}$ oder $U_{DGR}$ bezeichnet, weil die Messung [unclear]
<!-- page-import:0230:end -->

<!-- page-import:0231:start -->
194  3. Feldeffekttransistor

*a* Leistungs-Mosfet  *b* Sperrschicht-Fet

**Abb. 3.18.** Ausgangskennlinienfelder von Einzel-Fets im Durchbruch

mit einem Widerstand $R$ zwischen Gate und Source durchgeführt wird; der Wert des Widerstands ist angegeben. Da bei diesem Durchbruch die Sperrschicht zwischen dem Substrat und dem schwach dotierten Teil des Drain-Gebiets durchbricht, tritt gleichzeitig auch ein Drain-Source-Durchbruch auf; deshalb wird für $U_{(BR)DG}$ meist derselbe Wert wie für die im folgenden beschriebene Drain-Source-Durchbruchspannung $U_{(BR)DSS}$ angegeben.

Beim Sperrschicht-Fet ist $U_{(BR)GSS}$ die Durchbruchspannung der Gate-Kanal-Diode; sie wird bei kurzgeschlossener Drain-Source-Strecke, d.h. $U_{DS}=0$, gemessen und ist bei n-Kanal-Sperrschicht-Fets negativ, bei p-Kanal-Sperrschicht-Fets positiv. Typisch sind $U_{(BR)GSS} \approx -50 \ldots -20\ \mathrm{V}$ bei n-Kanal-Fets. Zusätzlich werden die Durchbruchspannungen $U_{(BR)GSO}$ und $U_{(BR)GDO}$ auf der Source- bzw. Drain-Seite angegeben; der Index $O$ weist darauf hin, dass der dritte Anschluss offen (open) ist. Die Spannungen sind normalerweise gleich: $U_{(BR)GSS} = U_{(BR)GSO} = U_{(BR)GDO}$. Da beim Sperrschicht-Fet $U_{GS}$ und $U_{DS}$ unterschiedliche Polarität haben, ist $U_{GD} = U_{GS} - U_{DS}$ die betragsmäßig größte Spannung und damit $U_{(BR)GDO}$ für die Praxis besonders wichtig. Im Gegensatz zum Mosfet führt der Durchbruch beim Sperrschicht-Fet nicht zu einer Zerstörung des Bauteils, solange der Strom begrenzt wird und keine Überhitzung auftritt.

### 3.1.5.1.2 Drain-Source-Durchbruch

Bei der *Drain-Source-Durchbruchspannung* $U_{(BR)DSS}$ bricht die Sperrschicht zwischen dem Drain-Gebiet und dem Substrat eines Mosfets durch; dadurch fließt ein Strom vom Drain-Gebiet in das Substrat und von dort über den in Flussrichtung betriebenen pn-Übergang zwischen Substrat und Source oder über die bei Einzeltransistoren vorhandene Verbindung zwischen Substrat und Source zur Source. Abbildung 3.18a zeigt den Durchbruch im Ausgangskennlinienfeld eines Leistungs-Mosfets; er setzt vor allem bei größeren Strömen langsam ein und ist reversibel, solange der Strom begrenzt wird und keine Überhitzung auftritt. Bei selbstsperrenden n-Kanal-Mosfets wird $U_{(BR)DSS}$ bei kurzgeschlossener Gate-Source-Strecke, d.h. $U_{GS}=0$ gemessen; der zusätzliche Index $S$ bedeutet kurzgeschlossen (shorted). Bei selbstleitenden n-Kanal-Mosfets wird eine negative Spannung $U_{GS} < U_{th}$ angelegt, damit der Transistor sperrt. Die zugehörige Drain-Source-Durchbruchspannung wird ebenfalls mit $U_{(BR)DSS}$ bezeichnet; der Index $S$ bedeutet dabei *Kleinsignal-Kurzschluss*, d.h. Ansteuerung des Gates mit einer Spannungsquelle mit vernachlässigbar geringem Innenwiderstand. Die Werte reichen von $U_{(BR)DSS} \approx 10 \ldots 40\ \mathrm{V}$
<!-- page-import:0231:end -->

<!-- page-import:0232:start -->
3.1 Verhalten eines Feldeffekttransistors 195

bei integrierten Fets bis zu $U_{(BR)DSS} = 1000\,\mathrm{V}$ bei Einzeltransistoren für Schaltanwendungen.

Bei Sperrschicht-Fets gibt es keinen direkten Durchbruch zwischen Drain und Source, da es sich um ein homogenes Gebiet handelt. Hier bricht bei abgeschnürtem Kanal und zunehmender Drain-Source-Spannung die Sperrschicht zwischen Drain und Gate durch, wenn die oben genannte Durchbruchspannung $U_{(BR)GDO}$ erreicht wird. Abbildung 3.18b zeigt den Durchbruch im Ausgangskennlinienfeld eines Kleinsignal-Sperrschicht-Fets; er tritt schlagartig ein.

### 3.1.5.2 Grenzströme

#### 3.1.5.2.1 Drainstrom

Beim Drainstrom wird zwischen maximalem Dauerstrom (*continuous current*) und maximalem Spitzenstrom (*peak current*) unterschieden. Für den maximalen Dauerstrom existiert keine besondere Bezeichnung im Datenblatt; er wird hier mit $I_{D,max}$ bezeichnet. Der maximale Spitzenstrom gilt für gepulsten Betrieb mit vorgegebener Pulsdauer und Wiederholrate und wird im Datenblatt mit $I_{DM}{}^8$ bezeichnet; er ist um den Faktor $2 \ldots 5$ größer als der maximale Dauerstrom.

Beim Sperrschicht-Fet wird anstelle des maximalen Dauerstroms $I_{D,max}$ der Drain-Sättigungsstrom $I_{DSS}{}^9$ angegeben; er wird mit $U_{GS} = 0$ im Abschnürbereich gemessen und ist damit der maximal mögliche Drainstrom bei normalem Betrieb.

#### 3.1.5.2.2 Rückwärtsdiode

Einzel-Mosfets enthalten aufgrund der Verbindung zwischen Source und Substrat eine Rückwärtsdiode zwischen Source und Drain, siehe Abschnitt 3.2. Für diese Diode wird ein maximaler Dauerstrom $I_{S,max}$ und ein maximaler Spitzenstrom $I_{SM}$ angegeben. Sie sind aufbaubedingt genauso groß wie die entsprechenden Drainströme $I_{D,max}$ und $I_{DM}$, so dass die Rückwärtsdiode uneingeschränkt als Freilauf- oder Kommutierungsdiode eingesetzt werden kann.

#### 3.1.5.2.3 Gatestrom

Bei Sperrschicht-Fets wird zusätzlich der maximale Gatestrom $I_{G,max}$ in Flussrichtung angegeben; typisch sind $I_{G,max} \approx 5 \ldots 50\,\mathrm{mA}$. Diese Angabe ist von untergeordneter Bedeutung, da die Gate-Kanal-Diode normalerweise in Sperrrichtung betrieben wird.

### 3.1.5.3 Sperrströme

Bei selbstsperrenden Mosfets fließt bei kurzgeschlossener Gate-Source-Strecke ein geringer *Drain - Source - Leckstrom* $I_{DSS}$; er entspricht dem Sperrstrom des Drain-Substrat-Übergangs und hängt deshalb stark von der Temperatur ab. Typisch sind $I_{DSS} < 1\,\mu\mathrm{A}$ bei integrierten Mosfets und Einzel-Mosfets für Kleinsignalanwendungen und $I_{DSS} = 1 \ldots 100\,\mu\mathrm{A}$ bei Einzel-Mosfets für Ströme im Ampere-Bereich. Bei selbstleitenden Mosfets wird $I_{DSS}$ ebenfalls im Sperrbereich gemessen; dazu muss eine Gate-Source-Spannung $U_{GS} < U_{th}$ angelegt werden.

Man beachte, dass der Strom $I_{DSS}$ auch bei Sperrschicht-Fets angegeben wird, dort aber eine ganz andere Bedeutung hat. Bei Mosfets ist $I_{DSS}$ der *minimale* Drainstrom, der auch im

---

8 Bei Mosfets für Schaltanwendungen wird oft $I_{D,puls}$ anstelle von $I_{DM}$ verwendet.

9 $I_{DSS}$ wird auch mit $I_{D,S}$ bezeichnet und entspricht dem im Abschnitt 3.1.2 für Sperrschicht-Fets angegebenen Strom $I_{D,0} = I_D(U_{GS} = 0)$.
<!-- page-import:0232:end -->

<!-- page-import:0233:start -->
196  3. Feldeffekttransistor

a  power derating curve

b  SOA

**Abb. 3.19.** Grenzkurven eines Mosfets für Schaltanwendungen

Sperrbereich fließt und bei Schaltanwendungen als Leckstrom über den geöffneten Schalter auftritt; bei Sperrschicht-Fets ist $I_{DSS}$ der maximale Drainstrom im Abschnürbereich. Trotz der unterschiedlichen Bedeutung wird in Datenblättern dieselbe Bezeichnung verwendet.

## 3.1.5.4 Maximale Verlustleistung

Die Verlustleistung ist die im Transistor in Wärme umgesetzte Leistung:

$$
P_V = U_{DS} I_D
$$

Sie entsteht im wesentlichen im Kanal und führt zu einer Erhöhung der Temperatur im Kanal, bis die Wärme aufgrund des Temperaturgefälles über das Gehäuse an die Umgebung abgeführt werden kann. Dabei darf die Temperatur im Kanal einen materialabhängigen Grenzwert, bei Silizium 175 °C, nicht überschreiten; in der Praxis wird aus Sicherheitsgründen mit einem Grenzwert von 150 °C gerechnet. Die zugehörige maximale Verlustleistung hängt bei Einzeltransistoren vom Aufbau des Transistors und von der Montage ab; sie wird im Datenblatt mit $P_{tot}$ bezeichnet und für zwei Fälle angegeben:

- Betrieb bei stehender Montage auf einer Leiterplatte ohne weitere Maßnahmen zur Kühlung bei einer Temperatur der umgebenden Luft (free-air temperature) von $T_A = 25\,^\circ\mathrm{C}$; der Index A bedeutet Umgebung (ambient).
- Betrieb bei einer Gehäusetemperatur (case temperature) von $T_C = 25\,^\circ\mathrm{C}$.

Die beiden Maximalwerte werden hier mit $P_{V,25(A)}$ und $P_{V,25(C)}$ bezeichnet. Bei Kleinsignal-Fets, die für stehende Montage ohne Kühlkörper ausgelegt sind, ist nur $P_{tot} = P_{V,25(A)}$ angegeben. Bei Leistungs-Mosfets, die ausschließlich für den Betrieb mit einem Kühlkörper ausgelegt sind, ist nur $P_{tot} = P_{V,25(C)}$ angegeben. In praktischen Anwendungen kann $T_A = 25\,^\circ\mathrm{C}$ oder $T_C = 25\,^\circ\mathrm{C}$ nicht eingehalten werden. Da $P_{tot}$ mit zunehmender Temperatur abnimmt, ist im Datenblatt oft eine power derating curve angeben, in der $P_{tot}$ über $T_A$ oder $T_C$ aufgetragen ist, siehe Abb. 3.19a. Im Abschnitt 2.1.6 auf Seite 51 wird das thermische Verhalten am Beispiel des Bipolartransistors ausführlich behandelt; die Ergebnisse gelten für Fets in gleicher Weise.
<!-- page-import:0233:end -->

<!-- page-import:0234:start -->
3.1 Verhalten eines Feldeffekttransistors 197

## 3.1.5.5 Zulässiger Betriebsbereich

Aus den Grenzdaten erhält man im Ausgangskennlinienfeld den zulässigen Betriebsbereich (safe operating area, SOA); er wird durch den maximalen Drainstrom $I_{D,max}$, die Drain-Source-Durchbruchsspannung $U_{(BR)DSS}$, die maximale Verlustleistung $P_{tot}$ und die $R_{DS,on}$-Grenze begrenzt. Abbildung 3.19b zeigt die SOA in doppelt logarithmischer Darstellung; dabei erhält man sowohl für die Hyperbel der maximalen Verlustleistung, gegeben durch $U_{DS} I_D = P_{tot}$, und die $R_{DS,on}$-Grenze mit $U_{DS} = R_{DS,on} I_D$ Geraden. Daraus folgt, dass der maximale Dauerstrom $I_{D,max}$ aus $P_{tot}$ und $R_{DS,on}$ berechnet werden kann:

$$
I_{D,max} = \sqrt{\frac{P_{tot}}{R_{DS,on}}}
$$

Bei Fets für Schaltanwendungen sind zusätzlich Grenzkurven für Pulsbetrieb mit verschiedenen Pulsdauern angegeben. Bei sehr kurzer Pulsdauer und kleinem Tastverhältnis kann man den Fet mit der maximalen Spannung $U_{(BR)DSS}$ und dem maximalen Drainstrom $I_{DM}$ gleichzeitig betreiben; die SOA ist in diesem Fall ein Rechteck. Man kann mit einem Fet Lasten mit einer Verlustleistung bis zu $P = U_{(BR)DSS} I_{D,max}$ schalten. Diese maximale Schaltleistung ist groß gegenüber der maximalen Verlustleistung $P_{tot}$; aus Abb. 3.19 folgt $P = U_{(BR)DSS} I_{D,max} = 100\,\mathrm{V} \cdot 30\,\mathrm{A} = 3\,\mathrm{kW} \gg P_{tot} = 100\,\mathrm{W}$.

## 3.1.6 Thermisches Verhalten

Das thermische Verhalten von Bauteilen ist im Abschnitt 2.1.6 am Beispiel des Bipolartransistors beschrieben; die dort dargestellten Größen und Zusammenhänge gelten für einen Fet in gleicher Weise, wenn für $P_V$ die Verlustleistung des Fets eingesetzt wird.

## 3.1.7 Temperaturabhängigkeit der Fet-Parameter

Mosfets und Sperrschicht-Fets haben ein unterschiedliches Temperaturverhalten und müssen deshalb getrennt betrachtet werden.

### 3.1.7.1 Mosfet

Beim Mosfet sind die Schwellenspannung $U_{th}$ und der Steilheitskoeffizient $K$ temperaturabhängig; damit erhält man durch Differentiation von (3.3) den Temperaturkoeffizienten des Drainstroms für einen n-Kanal-Mosfet im Abschnürbereich:

$$
\frac{1}{I_D}\frac{dI_D}{dT} = \frac{1}{K}\frac{dK}{dT} - \frac{2}{U_{GS} - U_{th}} \frac{dU_{th}}{dT}
$$

(3.14)

Aus (3.5) und der auf den Referenzpunkt $T_0$ bezogenen Temperaturabhängigkeit der Beweglichkeit [3.1]

$$
\mu(T) = \mu(T_0)\left(\frac{T_0}{T}\right)^{m_\mu} \qquad \text{mit } m_\mu \approx 1{,}5
$$

folgt, dass der Steilheitskoeffizient mit steigender Temperatur abnimmt:

$$
\frac{1}{K}\frac{dK}{dT} = -\frac{m_\mu}{T}\Big|_{T=300\,\mathrm{K}} \approx -5 \cdot 10^{-3}\,\mathrm{K}^{-1}
$$

Für die Schwellenspannung gilt [3.1]

$$
U_{th} = U_{FB} + U_{inv} + \gamma \sqrt{U_{inv}}
$$
<!-- page-import:0234:end -->

<!-- page-import:0245:start -->
208

# 3. Feldeffekttransistor

Alternativ zu $\gamma$ und $U_{inv}$ kann man die Substrat-Dotierdichte $N_{sub}$ und die Oxiddicke $d_{ox}$ angeben; es gilt [3.1]:

$$
\gamma = \frac{\sqrt{2q\varepsilon_0\varepsilon_{r,Si}N_{sub}}}{C'_{ox}} = \sqrt{\frac{2q\varepsilon_{r,Si}N_{sub}}{\varepsilon_0}} \cdot \frac{d_{ox}}{\varepsilon_{r,ox}}
$$
(3.19)

$$
U_{inv} = 2U_T \ln \frac{N_{sub}}{n_i}
$$
(3.20)

Durch Einsetzen der Konstanten $q = 1{,}602 \cdot 10^{-19}\,\mathrm{As}$, $\varepsilon_0 = 8{,}85 \cdot 10^{-12}\,\mathrm{As/Vm}$, $\varepsilon_{r,ox} = 3{,}9$ und $\varepsilon_{r,Si} = 11{,}9$ sowie $U_T = 26\,\mathrm{mV}$ und $n_i = 1{,}45 \cdot 10^{10}\,\mathrm{cm}^{-3}$ für $T = 300\,\mathrm{K}$ erhält man:

$$
\gamma \;\;\overset{T=300\,\mathrm{K}}{\approx}\;\; 1{,}7 \cdot 10^{-10}\,\sqrt{\mathrm{V}} \cdot \sqrt{N_{sub}/\mathrm{cm}^{-3}} \cdot d_{ox}/\mathrm{nm}
$$

$$
U_{inv} \;\;\overset{T=300\,\mathrm{K}}{\approx}\;\; 52\,\mathrm{mV} \cdot \ln \frac{N_{sub}}{1{,}45 \cdot 10^{10}\,\mathrm{cm}^{-3}}
$$

Typische Werte sind $N_{sub} \approx 1 \ldots 7 \cdot 10^{16}\,\mathrm{cm}^{-3}$ für integrierte Schaltungen und $N_{sub} \approx 5 \cdot 10^{14} \ldots 10^{16}\,\mathrm{cm}^{-3}$ für Einzel-Mosfets.

#### 3.3.1.1.3 Substrat-Dioden

Aus dem Aufbau eines Mosfets ergeben sich Substrat-Dioden zwischen Bulk und Source bzw. Bulk und Drain; Abb. 3.28 zeigt Anordnung und Polarität dieser Dioden im Ersatzschaltbild eines n-Kanal-Mosfets. Für die Ströme durch diese Dioden gelten die Diodengleichungen

$$
I_{D,S} = I_{S,S}\left(e^{\frac{U_{BS}}{nU_T}} - 1\right)
$$
(3.21)

$$
I_{D,D} = I_{S,D}\left(e^{\frac{U_{BD}}{nU_T}} - 1\right)
$$
(3.22)

mit den Sättigungssperrströmen $I_{S,S}$ und $I_{S,D}$ und dem Emissionsfaktor $n \approx 1$.

Alternativ zu $I_{S,S}$ und $I_{S,D}$ kann man die Sperrstromdichte $J_S$ und die Randstromdichte $J_R$ angeben; mit den Flächen $A_S$ und $A_D$ und den Randlängen $l_S$ und $l_D$ des Source- und Draingebiets erhält man:

$$
I_{S,S} = J_SA_S + J_Rl_S
$$
(3.23)

$$
I_{S,D} = J_SA_D + J_Rl_D
$$
(3.24)

Davon macht man besonders bei CAD-Programmen zum Entwurf integrierter Schaltungen Gebrauch; $J_S$ und $J_R$ sind in diesem Fall Parameter des MOS-Prozesses und für alle n-Kanal-Mosfets gleich. Sind die Größen der einzelnen Mosfets festgelegt, muss man nur noch die Flächen und Randlängen bestimmen; das CAD-Programm ermittelt dann daraus $I_{S,S}$ und $I_{S,D}$.

Bei normalem Betrieb liegt der Bulk-Anschluss eines n-Kanal-Mosfets auf niedrigerem oder höchstens gleichem Potential wie Drain und Source; es gilt dann $U_{BS}, U_{BD} \leq 0$ und die Dioden werden im Sperrbereich betrieben. Bei Einzel-Mosfets mit interner Verbindung zwischen Source und Bulk ist diese Bedingung automatisch erfüllt, solange $U_{DS} > 0$
<!-- page-import:0245:end -->

<!-- page-import:0315:start -->
278 3. Feldeffekttransistor

$$
Z_T(s)=\frac{u_a(s)}{i_e(s)}=\lim_{R_g\to\infty}R_gA_B(s)\approx \frac{R_D'}{1+s\left(\frac{C_{GS}}{S}+C_{GD}R_D'\right)}
$$
(3.137)

Für die Grenzfrequenz gilt in diesem Fall:

$$
\omega_{-3dB}=2\pi f_{-3dB}\approx \frac{1}{\frac{C_{GS}}{S}+C_{GD}R_D'}
$$
(3.138)

Bei kapazitiver Last muss man $C_L + C_{GD}$ anstelle von $C_{GD}$ einsetzen.

*Beispiel:* Für das Zahlenbeispiel zur Gateschaltung nach Abb. 3.85a wurde $I_{D,A} = 2{,}5\,\mathrm{mA}$ gewählt. Die Kleinsignalparameter des Mosfets werden aus dem Beispiel auf Seite 259 entnommen: $S = 4{,}47\,\mathrm{mS}$, $R_G = 25\,\Omega$, $C_{GD} = 2\,\mathrm{pF}$ und $C_{GS} = 4{,}4\,\mathrm{pF}$. Mit $R_D = 1\,\mathrm{k}\Omega$, $R_L \to \infty$, $r_{DS} \gg R_D$ und $R_g = R_{GV} = 0$ erhält man $R_D' = R_D = 1\,\mathrm{k}\Omega$ und $R_{GV}' = R_G = 25\,\Omega$; damit folgt aus (3.130) $A_0 \approx 4{,}47$ und aus (3.132) $f_{-3dB} \approx 68\,\mathrm{MHz}$. Die Grenzfrequenz hängt stark von $R_{GV}$ ab; mit $R_{GV} = 1\,\mathrm{k}\Omega$ erreicht man nur noch $f_{-3dB} \approx 10\,\mathrm{MHz}$.

Bei Ansteuerung mit einer Stromquelle und $R_L \to \infty$ folgt aus (3.137) $R_T = Z_T(0) \approx R_D = 1\,\mathrm{k}\Omega$ und aus (3.138) $f_{-3dB} \approx 53\,\mathrm{MHz}$. Der Widerstand $R_{GV}$ wirkt sich in diesem Fall nicht aus.
<!-- page-import:0315:end -->
